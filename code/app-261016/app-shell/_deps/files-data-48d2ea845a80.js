import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Eit as r,
  Oit as i,
  Qst as a,
  ZSt as o,
  fCt as s,
  zst as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $vr as l,
  JJn as u,
  JYn as d,
  YJn as f,
  aYn as p,
  bLr as m,
  cRr as h,
  hlt as g,
  iRr as _,
  plt as v,
  qYn as y,
  tyr as b,
  wLr as x,
  zRr as S,
} from "./app-initial-ad16eaadf81f.js";
async function C(e, t, n, i, a) {
  let o = () => {
    if (
      (a.throwIfAborted(),
      n.versionId != null || e.get(S) !== t.accountId || e.get(m) !== t.userId || e.get(g) !== !0)
    )
      throw Error(`Agent file access changed`);
  };
  o();
  let s = { agent_id: n.agentId },
    [c, l] = await Promise.all([
      _.safeGet(`/hermes/agent/{agent_id}/builder-view`, {
        parameters: { path: s },
        signal: a,
        expectedIdentity: t,
      }),
      n.skillId == null
        ? _.safeGet(`/hermes/agent/{agent_id}/files/tree`, {
            parameters: { path: s },
            signal: a,
            expectedIdentity: t,
          })
        : _.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/tree`, {
            parameters: { path: { ...s, skill_id: n.skillId } },
            signal: a,
            expectedIdentity: t,
          }),
    ]);
  if ((o(), ![`hermes_write`, `hermes_admin`].includes(c.agent.viewer_capability)))
    throw Error(`This agent is no longer editable`);
  if (n.skillId != null) {
    let e = c.draft_version.config?.skills?.find((e) => e.id === n.skillId);
    if (e == null || `chatgpt_skill_id` in e) throw Error(`Shared skills cannot be changed from this agent`);
    let t = l.nodes.find((e) => e.id === l.root_node_id);
    if (
      (t == null ? l.nodes : (t.children ?? []))
        .filter((e) => e.name.toLowerCase() === `agents`)
        .some(
          (e) =>
            ((i.type === `rename` || i.type === `delete`) &&
              ((t) =>
                e.id === t ||
                !!e.children?.some((e) => e.id === t && e.name.toLowerCase() === `openai.yaml`))(
                i.node.id,
              )) ||
            (i.type === `upload` &&
              i.replace &&
              i.parentId === e.id &&
              i.file.name.toLowerCase() === `openai.yaml`),
        )
    )
      throw Error(`Edit generated skill settings from the skill overview`);
  }
  let u = {
    current_tree_revision: l.tree_revision,
    expected_draft_version_id: c.draft_version.id,
    expected_draft_revision: c.draft_revision,
  };
  if (i.type === `folder`) {
    let e = { ...u, parent_node_id: i.parentId, name: i.name },
      r =
        n.skillId == null
          ? await _.safePost(`/hermes/agent/{agent_id}/files/folders`, {
              parameters: { path: s },
              requestBody: e,
              signal: a,
              expectedIdentity: t,
            })
          : await _.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/folders`, {
              parameters: { path: { ...s, skill_id: n.skillId } },
              requestBody: e,
              signal: a,
              expectedIdentity: t,
            });
    return (o(), r.node.id);
  }
  if (i.type === `rename`) {
    let e = { ...u, name: i.name };
    n.skillId == null
      ? await _.safePatch(`/hermes/agent/{agent_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...s, node_id: i.node.id } },
          requestBody: e,
          signal: a,
          expectedIdentity: t,
        })
      : await _.safePatch(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...s, skill_id: n.skillId, node_id: i.node.id } },
          requestBody: e,
          signal: a,
          expectedIdentity: t,
        });
  } else if (i.type === `delete`)
    n.skillId == null
      ? await _.safePost(`/hermes/agent/{agent_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...s, node_id: i.node.id }, query: { recursive: !0 } },
          requestBody: u,
          signal: a,
          expectedIdentity: t,
        })
      : await _.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}`, {
          parameters: { path: { ...s, skill_id: n.skillId, node_id: i.node.id }, query: { recursive: !0 } },
          requestBody: u,
          signal: a,
          expectedIdentity: t,
        });
  else {
    let { file: e } = i;
    if ((!i.replace && e.size === 0) || e.size > 536870912)
      throw Error(`Choose a nonempty file up to 512 MB`);
    let c = {
        ...u,
        parent_node_id: i.parentId,
        name: e.name,
        size_bytes: e.size,
        mime_type: e.type || null,
        collision_handling: i.replace ? `replace` : `keep_both`,
      },
      l =
        n.skillId == null
          ? await _.safePost(`/hermes/agent/{agent_id}/files/upload-sessions`, {
              parameters: { path: s },
              requestBody: c,
              signal: a,
              expectedIdentity: t,
            })
          : await _.safePost(`/hermes/agent/{agent_id}/skills/{skill_id}/files/upload-sessions`, {
              parameters: { path: { ...s, skill_id: n.skillId } },
              requestBody: c,
              signal: a,
              expectedIdentity: t,
            });
    (o(),
      await r
        .getInstance()
        .upload(`PUT`, l.upload_url, {
          body: e,
          headers: {
            "x-ms-blob-type": `BlockBlob`,
            "x-ms-version": `2020-04-08`,
            "Content-Type": e.type || `application/octet-stream`,
          },
          signal: a,
        }),
      o());
    let d = { expected_draft_revision: l.draft_revision };
    n.skillId == null
      ? await _.safePost(`/hermes/agent/{agent_id}/files/upload-sessions/{session_id}/complete`, {
          parameters: { path: { ...s, session_id: l.session_id } },
          requestBody: d,
          signal: a,
          expectedIdentity: t,
        })
      : await _.safePost(
          `/hermes/agent/{agent_id}/skills/{skill_id}/files/upload-sessions/{session_id}/complete`,
          {
            parameters: { path: { ...s, skill_id: n.skillId, session_id: l.session_id } },
            requestBody: d,
            signal: a,
            expectedIdentity: t,
          },
        );
  }
  return (o(), null);
}
async function w(e, t, n, r, i = !1) {
  let a = { version_id: e.versionId, download: i ? `true` : void 0 },
    o = { agent_id: e.agentId, node_id: t.id },
    s =
      e.skillId == null
        ? await _.safeGet(`/hermes/agent/{agent_id}/files/nodes/{node_id}/download-url`, {
            parameters: { path: o, query: a },
            signal: r,
            expectedIdentity: n,
          })
        : await _.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes/{node_id}/download-url`, {
            parameters: { path: { ...o, skill_id: e.skillId }, query: a },
            signal: r,
            expectedIdentity: n,
          }),
    c = y(s.download_url);
  if (c == null) throw Error(`Invalid agent file download URL`);
  return {
    fileName: s.file_name ?? t.name,
    target: {
      type: `download-url`,
      downloadUrl: l(c) ?? c,
      requestHeaders: s.needs_auth_token ? h() : void 0,
    },
  };
}
async function T(e, t, n, r, i, a) {
  let o = new Map([[``, r]]);
  for (let r of i) {
    let i = (r.webkitRelativePath || r.name).split(`/`);
    if (i.some((e) => !e || e === `.` || e === `..`)) throw Error(`Invalid agent upload path`);
    let s = ``;
    for (let r of i.slice(0, -1)) {
      let i = s ? `${s}/${r}` : r;
      if (!o.has(i)) {
        let c = o.get(s);
        if (c == null) throw Error(`Missing upload folder`);
        let l = null,
          u;
        do {
          let e = { parent_node_id: c, cursor: l, limit: 100, sort: `name_asc` },
            i =
              n.skillId == null
                ? await _.safeGet(`/hermes/agent/{agent_id}/files/nodes`, {
                    parameters: { path: { agent_id: n.agentId }, query: e },
                    signal: a,
                    expectedIdentity: t,
                  })
                : await _.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes`, {
                    parameters: { path: { agent_id: n.agentId, skill_id: n.skillId }, query: e },
                    signal: a,
                    expectedIdentity: t,
                  });
          ((u = i.children.find((e) => e.kind === `folder` && e.name === r)), (l = i.next_cursor ?? null));
        } while (u == null && l != null);
        let d = u?.id ?? (await C(e, t, n, { type: `folder`, parentId: c, name: r }, a));
        if (d == null) throw Error(`Could not create upload folder`);
        o.set(i, d);
      }
      s = i;
    }
    let c = o.get(s);
    if (c == null) throw Error(`Missing upload destination`);
    await C(e, t, n, { type: `upload`, parentId: c, file: r }, a);
  }
}
async function E(e, t, n, r) {
  let i = new AbortController(),
    a = e.watch((e) => {
      (e.get(S) !== r.accountId || e.get(m) !== r.userId) && i.abort();
    });
  try {
    i.signal.throwIfAborted();
    let e = await w(t, n, r, i.signal, !0);
    (i.signal.throwIfAborted(), await u({ conversationId: null, ...e, signal: i.signal }));
  } finally {
    a();
  }
}
async function D(e, t, n, r) {
  let { target: i } = await w(e, t, n, r);
  return (await f({ conversationId: null, maxBytes: 1e6, signal: r, target: i })).text();
}
function O(e) {
  return (
    (e.size_bytes ?? 0) <= 1e6 &&
    (e.mime_type?.startsWith(`text/`) === !0 ||
      /(?:json|xml|yaml|javascript|toml)/i.test(e.mime_type ?? ``) ||
      /\.(?:txt|md|mdx|csv|tsv|json|jsonl|xml|yaml|yml|toml|ini|log|js|jsx|ts|tsx|py|sql|sh|html|css)$/i.test(
        e.name,
      ))
  );
}
function k(e) {
  let t = e.name.toLowerCase();
  return (
    (e.recursive_parents?.length === 1 && t === `agents`) ||
    (e.recursive_parents?.length === 2 &&
      e.recursive_parents[1].name.toLowerCase() === `agents` &&
      t === `openai.yaml`)
  );
}
var A;
function j() {
  return (j = e(() => {
    (o(),
      x(),
      p(),
      b(),
      d(),
      t(),
      n(),
      i(),
      v(),
      (A = s(a, (e, { get: t }) => {
        let n = t(S),
          r = t(m);
        return {
          enabled: n != null && r != null,
          queryKey: [`workspace-agent`, `files`, n, r, e.agentId, e.skillId, e.versionId, e.nodeId],
          initialPageParam: null,
          queryFn: ({ pageParam: t, signal: i }) => {
            if (n == null || r == null) throw Error(`Missing active workspace identity`);
            let a = {
                parent_node_id: e.nodeId,
                version_id: e.versionId,
                cursor: t,
                limit: 100,
                sort: `name_asc`,
              },
              o = { accountId: n, userId: r };
            return e.skillId == null
              ? _.safeGet(`/hermes/agent/{agent_id}/files/nodes`, {
                  parameters: { path: { agent_id: e.agentId }, query: a },
                  signal: i,
                  expectedIdentity: o,
                })
              : _.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/files/nodes`, {
                  parameters: { path: { agent_id: e.agentId, skill_id: e.skillId }, query: a },
                  signal: i,
                  expectedIdentity: o,
                });
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          staleTime: c.ONE_MINUTE,
          retry: !1,
        };
      })));
  }))();
}
export { O as a, D as c, j as i, T as l, E as n, k as o, w as r, C as s, A as t };
//# sourceMappingURL=files-data-48d2ea845a80.js.map
