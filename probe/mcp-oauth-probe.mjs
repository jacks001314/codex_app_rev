#!/usr/bin/env node
// Codex app-server 的 MCP OAuth 登录探活。
//
// 目的：把「MCP 配置页上点登录 → 外部浏览器走 OAuth → 回来这台 Server 已授权」这条链路
// 落成事实，而不是照抄上游代码：
//   Q1 没授权时 codex 怎么报（authStatus / runtimeStatus / toolsError）
//   Q2 mcpServer/oauth/login 的入参、返回值，以及 authorizationUrl 里 redirect_uri /
//      state / PKCE 的形状
//   Q3 完成回调后 codex 发什么通知、状态怎么变、要不要手动 reload
//   Q4 凭据落在哪（per-CODEX_HOME 的哪个文件），新线程能不能直接用
//   Q5 clientRegistration 三档（auto / cimd / dcr）在授权请求上的差别
//   Q6 凭据能不能跨进程 / 跨路径复用 —— 决定 Syntropy 是「一台节点登录一次后分发」还是
//      「每个 Agent 各登录一次」：reuse-process（同路径换进程）/ share（只搬 secrets 文件）/
//      reuse-full（整份 CODEX_HOME 搬到新路径）
//
// 用法：
//   node codex_app_rev/probe/mcp-oauth-probe.mjs <codex 可执行文件路径> [--keep]
//
// --keep 保留临时目录（排查凭据落点）；PROBE_PHASE=dcr|cimd|auto 只跑其中一档。
//
// 脚本自带一个「受 OAuth 保护的流式 HTTP MCP server + 授权服务器」fixture，全部跑在
// 127.0.0.1 随机端口，只在临时目录里读写，不触碰用户真实的 ~/.codex。

import { spawn } from "node:child_process";
import http from "node:http";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node mcp-oauth-probe.mjs <codex 可执行文件路径>");
  process.exit(2);
}
const WORK = path.join(os.tmpdir(), "codex-mcp-oauth-probe");
// --keep 保留临时目录（排查凭据落点用）；PROBE_PHASE=dcr 只跑其中一档。
const KEEP = process.argv.includes("--keep");
const ONLY = (process.env.PROBE_PHASE || "").trim();

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ---------- fixture：受 OAuth 保护的流式 HTTP MCP server ----------
async function startFixture() {
  const state = {
    port: 0,
    clients: new Map(),
    codes: new Map(),
    tokens: new Map(),
    events: [],
    scopes: ["mcp.read", "mcp.write"],
  };
  const record = (kind, payload) => state.events.push({ kind, payload });
  const base = () => `http://127.0.0.1:${state.port}`;
  const send = (res, code, body, headers = {}) => {
    res.writeHead(code, { "content-type": "application/json", ...headers });
    res.end(typeof body === "string" ? body : JSON.stringify(body));
  };
  const rpc = (id, result) => ({ jsonrpc: "2.0", id, result });

  function protectedResourceMetadata(req, res) {
    record("protected-resource-metadata", { headers: req.headers });
    send(res, 200, {
      resource: base() + "/mcp",
      authorization_servers: [base()],
      scopes_supported: state.scopes,
      bearer_methods_supported: ["header"],
    });
  }

  function authorizationServerMetadata(req, res) {
    record("authorization-server-metadata", {});
    send(res, 200, {
      issuer: base(),
      authorization_endpoint: base() + "/authorize",
      token_endpoint: base() + "/token",
      registration_endpoint: base() + "/register",
      response_types_supported: ["code"],
      grant_types_supported: ["authorization_code", "refresh_token"],
      code_challenge_methods_supported: ["S256", "plain"],
      token_endpoint_auth_methods_supported: ["none", "client_secret_post", "client_secret_basic"],
      scopes_supported: state.scopes,
    });
  }

  function register(req, res, raw) {
    const parsed = raw ? JSON.parse(raw) : {};
    record("register", parsed);
    const clientId = "probe-client-" + (state.clients.size + 1);
    state.clients.set(clientId, { request: parsed, client_id: clientId });
    send(res, 201, {
      client_id: clientId,
      redirect_uris: parsed.redirect_uris ?? [],
      token_endpoint_auth_method: parsed.token_endpoint_auth_method || "none",
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      client_id_issued_at: Math.floor(Date.now() / 1000),
    });
  }

  function authorize(req, res, url) {
    const params = Object.fromEntries(url.searchParams.entries());
    record("authorize", params);
    const code = "probe-code-" + Math.random().toString(36).slice(2, 10);
    state.codes.set(code, params);
    const redirect = new URL(params.redirect_uri);
    redirect.searchParams.set("code", code);
    if (params.state) redirect.searchParams.set("state", params.state);
    res.writeHead(302, { location: redirect.toString() });
    res.end();
  }

  function issueToken(res, extra) {
    const access = "probe-access-" + Math.random().toString(36).slice(2, 10);
    state.tokens.set(access, { scopes: state.scopes });
    send(res, 200, {
      access_token: access,
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: "probe-refresh-" + Math.random().toString(36).slice(2, 10),
      scope: state.scopes.join(" "),
      ...extra,
    });
  }

  function token(req, res, raw) {
    const params = Object.fromEntries(new URLSearchParams(raw).entries());
    record("token", params);
    if (params.grant_type && !["authorization_code", "refresh_token"].includes(params.grant_type)) {
      send(res, 400, { error: "unsupported_grant_type" });
      return;
    }
    issueToken(res);
  }

  function mcp(req, res, raw) {
    const auth = String(req.headers.authorization || "");
    const bearer = auth.startsWith("Bearer ") ? auth.slice(7) : "";
    if (!state.tokens.has(bearer)) {
      record("mcp.unauthorized", { hasAuthorizationHeader: Boolean(auth) });
      res.writeHead(401, {
        "content-type": "application/json",
        "www-authenticate": `Bearer resource_metadata="${base()}/.well-known/oauth-protected-resource", scope="${state.scopes.join(" ")}", error="invalid_token"`,
      });
      res.end(JSON.stringify({ error: "unauthorized" }));
      return;
    }
    let message;
    try {
      message = JSON.parse(raw);
    } catch {
      send(res, 400, { error: "bad json" });
      return;
    }
    record("mcp.request", { method: message.method });
    const respond = (result) =>
      send(res, 200, rpc(message.id, result), { "mcp-session-id": "probe-session" });
    switch (message.method) {
      case "initialize":
        respond({
          protocolVersion: "2025-06-18",
          capabilities: { tools: {} },
          serverInfo: { name: "probe-oauth-mcp", version: "0.0.1" },
        });
        return;
      case "notifications/initialized":
        res.writeHead(202).end();
        return;
      case "tools/list":
        respond({
          tools: [
            {
              name: "probe_echo",
              description: "echo text",
              inputSchema: { type: "object", properties: { text: { type: "string" } } },
            },
          ],
        });
        return;
      case "ping":
        respond({});
        return;
      default:
        send(res, 200, {
          jsonrpc: "2.0",
          id: message.id,
          error: { code: -32601, message: "method not found" },
        });
        return;
    }
  }

  const server = http.createServer((req, res) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      const url = new URL(req.url, base());
      const p = url.pathname;
      try {
        if (p.startsWith("/.well-known/oauth-protected-resource"))
          return protectedResourceMetadata(req, res);
        if (p.startsWith("/.well-known/oauth-authorization-server"))
          return authorizationServerMetadata(req, res);
        if (p === "/register") return register(req, res, raw);
        if (p === "/authorize") return authorize(req, res, url);
        if (p === "/token") return token(req, res, raw);
        if (p === "/mcp") return mcp(req, res, raw);
        send(res, 404, { error: "not found", path: p });
      } catch (error) {
        record("fixture.error", { path: p, message: String(error) });
        send(res, 500, { error: String(error) });
      }
    });
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  state.port = server.address().port;
  state.baseUrl = base();
  state.close = () => server.close();
  return state;
}

// ---------- codex app-server 侧 ----------
function startServer(home, cwd) {
  const child = spawn(EXE, ["app-server"], {
    env: { ...process.env, CODEX_HOME: home },
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), notifications: [], stderr: "" };
  child.stderr.on("data", (data) => {
    state.stderr += data.toString();
  });
  child.stdout.on("data", (chunk) => {
    state.buf += chunk.toString();
    let index;
    while ((index = state.buf.indexOf("\n")) >= 0) {
      const line = state.buf.slice(0, index).trim();
      state.buf = state.buf.slice(index + 1);
      if (!line) continue;
      let message;
      try {
        message = JSON.parse(line);
      } catch {
        continue;
      }
      if (
        message.id !== undefined &&
        (message.result !== undefined || message.error !== undefined)
      ) {
        const settle = state.pending.get(message.id);
        if (settle) {
          state.pending.delete(message.id);
          settle(message);
        }
      } else if (message.id !== undefined && message.method) {
        state.notifications.push({
          kind: "server-request",
          method: message.method,
          params: message.params,
        });
        child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: {} }) + "\n");
      } else if (message.method) {
        state.notifications.push({
          kind: "notification",
          method: message.method,
          params: message.params,
        });
      }
    }
  });
  return state;
}

function call(state, method, params, timeoutMs = 30000) {
  const id = state.nextId++;
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      state.pending.delete(id);
      resolve({ status: "TIMEOUT", message: "no response within " + timeoutMs + "ms" });
    }, timeoutMs);
    state.pending.set(id, (message) => {
      clearTimeout(timer);
      resolve(
        message.error
          ? { status: "ERROR", code: message.error.code, message: message.error.message }
          : { status: "OK", result: message.result },
      );
    });
    state.child.stdin.write(
      JSON.stringify({ jsonrpc: "2.0", id, method, params: params ?? {} }) + "\n",
    );
  });
}

async function handshake(state) {
  await call(state, "initialize", {
    clientInfo: { name: "syntropy-probe", version: "0.1.0" },
    capabilities: { experimentalApi: true },
  });
  state.child.stdin.write(
    JSON.stringify({ jsonrpc: "2.0", method: "initialized", params: {} }) + "\n",
  );
}

const threadIdOf = (response) =>
  response?.result?.thread?.id ??
  response?.result?.threadId ??
  response?.result?.thread?.threadId ??
  "";

async function mcpInventory(state, threadId) {
  const params = { detail: "toolsAndAuthOnly" };
  if (threadId) params.threadId = threadId;
  const response = await call(state, "mcpServerStatus/list", params);
  if (response.status !== "OK") return { status: response.status, error: response.message };
  const servers = (response.result?.data ?? []).map((entry) => ({
    name: entry.name,
    auth: entry.authStatus,
    runtime: entry.runtimeStatus ?? null,
    toolNames: Array.isArray(entry.tools)
      ? entry.tools.map((tool) => tool?.name)
      : Object.keys(entry.tools ?? {}),
    toolsError: entry.toolsError ?? null,
  }));
  return { status: "OK", servers };
}

// stopServer 走优雅退出：codex 的凭据存储是「keyring 主 + 文件兜底」，硬杀可能来不及
// 落盘，会让下一个进程读到半成品（这是探活里踩到的坑，不是猜测）。
async function stopServer(state) {
  try {
    state.child.stdin.end();
  } catch {}
  const deadline = Date.now() + 8000;
  while (state.child.exitCode === null && Date.now() < deadline) {
    await sleep(200);
  }
  if (state.child.exitCode === null) state.child.kill();
}

async function waitForNotification(state, method, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const hit = state.notifications.find((entry) => entry.method === method);
    if (hit) return hit;
    await sleep(250);
  }
  return null;
}

function httpGet(target) {
  return new Promise((resolve) => {
    const req = http.request(target, { method: "GET" }, (res) => {
      const chunks = [];
      res.on("data", (chunk) => chunks.push(chunk));
      res.on("end", () =>
        resolve({
          status: res.statusCode,
          location: res.headers.location ?? "",
          body: Buffer.concat(chunks).toString("utf8"),
        }),
      );
    });
    req.on("error", (error) => resolve({ status: 0, location: "", body: String(error) }));
    req.end();
  });
}

function listFiles(root) {
  const out = [];
  const walk = (dir) => {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      let size = 0;
      try {
        size = fs.statSync(full).size;
      } catch {}
      out.push({ path: path.relative(root, full), size });
    }
  };
  walk(root);
  return out;
}

function credentialReport(home, before, accessTokens) {
  const after = listFiles(home);
  const known = new Map(before.map((entry) => [entry.path, entry.size]));
  const created = after.filter((entry) => !known.has(entry.path));
  const changed = after.filter(
    (entry) => known.has(entry.path) && known.get(entry.path) !== entry.size,
  );
  const holders = [];
  for (const entry of after) {
    let bytes = null;
    try {
      bytes = fs.readFileSync(path.join(home, entry.path));
    } catch {
      continue;
    }
    const text = bytes.toString("utf8");
    const hits = accessTokens.filter((token) => text.includes(token));
    if (hits.length) holders.push({ path: entry.path, tokens: hits.length });
  }
  return { created, changed, holders };
}

// runLoginPhase 跑一整条链路：起 app-server → 观察未授权状态 → 发起登录 → 模拟浏览器完成
// 回调 → 等通知 → 复查状态 → 新线程复查 → 检查凭据落点。
async function runLoginPhase({ name, strategy, fixture, serverName }) {
  const dir = path.join(WORK, name);
  fs.rmSync(dir, { recursive: true, force: true });
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  write(
    path.join(home, "config.toml"),
    [
      'approval_policy = "never"',
      'sandbox_mode = "workspace-write"',
      "",
      "[mcp_servers." + serverName + "]",
      "url = " + JSON.stringify(fixture.baseUrl + "/mcp"),
      "",
    ].join("\n"),
  );

  const filesBefore = listFiles(home);
  const eventMark = fixture.events.length;
  const state = startServer(home, project);
  const steps = [];
  const accessTokens = [];
  try {
    await handshake(state);
    const started = await call(state, "thread/start", { cwd: project });
    const threadId = threadIdOf(started);
    steps.push({ step: "thread/start", status: started.status, threadId, error: started.message });
    await sleep(3000);
    steps.push({ step: "status before login", inventory: await mcpInventory(state, threadId) });

    const params = { name: serverName };
    if (strategy && strategy !== "auto") params.clientRegistration = strategy;
    const login = await call(state, "mcpServer/oauth/login", params, 60000);
    steps.push({
      step: "mcpServer/oauth/login",
      status: login.status,
      authorizationUrl: login.result?.authorizationUrl ?? null,
      error: login.message ?? null,
    });
    if (login.status !== "OK" || !login.result?.authorizationUrl) {
      steps.push({ step: "aborted", stderr: state.stderr.trim().split("\n").slice(-8).join("\n") });
      return finish();
    }

    const authorize = await httpGet(login.result.authorizationUrl);
    const callback = authorize.location
      ? await httpGet(authorize.location)
      : { status: 0, body: "no location" };
    steps.push({
      step: "browser round-trip",
      authorizeStatus: authorize.status,
      callbackStatus: callback.status,
      callbackBody: callback.body.slice(0, 300),
    });

    const completed = await waitForNotification(state, "mcpServer/oauthLogin/completed", 30000);
    steps.push({ step: "completion notification", params: completed?.params ?? null });
    await sleep(2000);
    steps.push({
      step: "status after login (same thread)",
      inventory: await mcpInventory(state, threadId),
    });

    const restarted = await call(state, "thread/start", { cwd: project });
    const restartedThread = threadIdOf(restarted);
    await sleep(3000);
    steps.push({
      step: "status in new thread",
      threadId: restartedThread,
      inventory: await mcpInventory(state, restartedThread),
    });
    return finish();
  } finally {
    await stopServer(state);
  }

  function finish() {
    const events = fixture.events.slice(eventMark);
    for (const entry of events) {
      if (entry.kind === "token" && entry.payload?.access_token)
        accessTokens.push(entry.payload.access_token);
    }
    return {
      phase: name,
      home,
      steps,
      fixture: {
        registrations: events
          .filter((entry) => entry.kind === "register")
          .map((entry) => entry.payload),
        authorizations: events
          .filter((entry) => entry.kind === "authorize")
          .map((entry) => entry.payload),
        tokenRequests: events
          .filter((entry) => entry.kind === "token")
          .map((entry) => entry.payload),
        unauthorizedHits: events.filter((entry) => entry.kind === "mcp.unauthorized").length,
        methods: events
          .filter((entry) => entry.kind === "mcp.request")
          .map((entry) => entry.payload.method),
        errors: events
          .filter((entry) => entry.kind === "fixture.error")
          .map((entry) => entry.payload),
      },
      credentials: credentialReport(home, filesBefore, accessTokens),
      stderr: state.stderr.trim().split("\n").slice(-6).join("\n"),
    };
  }
}

// runReusePhase：两种「不动凭据内容、只换承载物」的复用检验，决定 Syntropy 该「一台节点
// 登录一次后分发」还是「每个 Agent 各登录一次」：
//   reuse-process：同一个 CODEX_HOME 换一个 app-server 进程（凭据是否落盘持久）；
//   reuse-full：整份 CODEX_HOME 复制到新路径（凭据是否与 home 路径绑定）。
async function runReusePhase({ sourceHome, fixture, serverName, mode }) {
  const dir = path.join(WORK, mode);
  fs.rmSync(dir, { recursive: true, force: true });
  let home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(project, { recursive: true });
  if (mode === "reuse-process") {
    // 同一个路径、换一个 app-server 进程：只检验凭据有没有落盘。
    home = sourceHome;
  } else {
    fs.cpSync(sourceHome, home, {
      recursive: true,
      filter: (src) => !src.endsWith(".lock"),
    });
    fs.rmSync(path.join(home, "mcp-oauth-locks"), { recursive: true, force: true });
    fs.rmSync(path.join(home, "thread-writer-locks"), { recursive: true, force: true });
  }

  const unauthorizedBefore = fixture.events.filter(
    (entry) => entry.kind === "mcp.unauthorized",
  ).length;
  const state = startServer(home, project);
  const steps = [
    {
      step:
        mode === "reuse-process" ? "same home, new app-server" : "copied whole home to a new path",
      home,
    },
  ];
  try {
    await handshake(state);
    const started = await call(state, "thread/start", { cwd: project });
    const threadId = threadIdOf(started);
    await sleep(3000);
    steps.push({ step: "status", threadId, inventory: await mcpInventory(state, threadId) });
    const unauthorizedAfter = fixture.events.filter(
      (entry) => entry.kind === "mcp.unauthorized",
    ).length;
    steps.push({
      step: "unauthorized hits in this phase",
      count: unauthorizedAfter - unauthorizedBefore,
    });
    return {
      phase: mode,
      home,
      steps,
      stderr: state.stderr.trim().split("\n").slice(-4).join("\n"),
    };
  } finally {
    await stopServer(state);
  }
}

// runSharePhase：把 A 的凭据文件原样搬进一份新的 per-agent CODEX_HOME，看 codex 认不认。
// 这决定了「一台节点登录一次、分发给所有 Agent」是否可行（凭据是机器级还是 home 级）。
async function runSharePhase({ sourceHome, fixture, serverName }) {
  const dir = path.join(WORK, "share");
  fs.rmSync(dir, { recursive: true, force: true });
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  fs.copyFileSync(path.join(sourceHome, "config.toml"), path.join(home, "config.toml"));
  const relative = path.join("secrets", "mcp_oauth.age");
  const source = path.join(sourceHome, relative);
  const steps = [];
  const copied = fs.existsSync(source);
  if (copied) {
    fs.mkdirSync(path.join(home, "secrets"), { recursive: true });
    fs.copyFileSync(source, path.join(home, relative));
  }
  steps.push({ step: "copy credential file", copied, from: source, to: path.join(home, relative) });

  const unauthorizedBefore = fixture.events.filter(
    (entry) => entry.kind === "mcp.unauthorized",
  ).length;
  const state = startServer(home, project);
  try {
    await handshake(state);
    const started = await call(state, "thread/start", { cwd: project });
    const threadId = threadIdOf(started);
    await sleep(3000);
    steps.push({
      step: "status with copied credentials",
      threadId,
      inventory: await mcpInventory(state, threadId),
    });
    const unauthorizedAfter = fixture.events.filter(
      (entry) => entry.kind === "mcp.unauthorized",
    ).length;
    steps.push({
      step: "unauthorized hits in this phase",
      count: unauthorizedAfter - unauthorizedBefore,
    });
    return {
      phase: "share",
      home,
      steps,
      stderr: state.stderr.trim().split("\n").slice(-4).join("\n"),
    };
  } finally {
    await stopServer(state);
  }
}

fs.rmSync(WORK, { recursive: true, force: true });
fs.mkdirSync(WORK, { recursive: true });

const fixture = await startFixture();
const report = [];
try {
  const phases = [
    { name: "dcr", strategy: "dcr", serverName: "fixture-dcr" },
    { name: "cimd", strategy: "cimd", serverName: "fixture-cimd" },
    { name: "auto", strategy: "", serverName: "fixture-auto" },
  ].filter((phase) => !ONLY || phase.name === ONLY);
  for (const phase of phases) {
    report.push(await runLoginPhase({ ...phase, fixture }));
  }
  const primary = report.find((entry) => entry.phase === "dcr");
  const primaryLoggedIn = (primary?.fixture?.tokenRequests ?? []).length > 0;
  if (!ONLY && primary && primaryLoggedIn) {
    report.push(
      await runSharePhase({ sourceHome: primary.home, fixture, serverName: "fixture-dcr" }),
    );
    report.push(
      await runReusePhase({
        sourceHome: primary.home,
        fixture,
        serverName: "fixture-dcr",
        mode: "reuse-process",
      }),
    );
    report.push(
      await runReusePhase({
        sourceHome: primary.home,
        fixture,
        serverName: "fixture-dcr",
        mode: "reuse-full",
      }),
    );
  }
} finally {
  fixture.close();
}
console.log(JSON.stringify(report, null, 2));
if (!KEEP) fs.rmSync(WORK, { recursive: true, force: true });
