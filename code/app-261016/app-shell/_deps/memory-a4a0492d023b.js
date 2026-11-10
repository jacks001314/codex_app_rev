const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-preview-panel-5d6a72cd03f2.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./PopcornManualEditHeaderControls-45cc4843f346.js",
      "./artifact-annotation-batch-controls-a9289185dbeb.js",
      "./PopcornIcons-6c48726ff00b.js",
      "./PopcornIcon-5d523be2a579.js",
      "./artifact-request-progress-6476ecb599a4.js",
      "./use-command-hotkey-668eca96f5b4.js",
      "./arrow-rotate-ccw-714acacf5c21.js",
      "./artifact-annotation-batch-controls-84ae7e0fceaf.css",
      "./use-annotation-mode-exit-12889926245c.js",
      "./annotation-mode-icon-eafbc4a6687a.js",
      "./annotation-mode-icon-443b825e9772.css",
      "./annotation-mode-analytics-dce005afe0df.js",
      "./layout-21137ff640c7.js",
      "./artifact-accessories-af67956ed42b.js",
      "./presentation-annotation-coachmark-c41c219bb3a0.js",
      "./menu-items-83f6bf1513b1.js",
      "./query-8b4179e9403c.js",
      "./library-file-metadata-fa02ef64bd6d.js",
      "./header-8bb9b418457b.js",
      "./scope-d4449ae19bab.js",
      "./artifact-originating-turn-f3d50650c1c0.js",
      "./artifact-preview-header-5bfab4685b80.js",
      "./use-app-connect-flow-7fc070fa8fd7.js",
      "./app-connect-queries-f7767476a146.js",
      "./availability-e0ac6f935d38.js",
      "./microsoft-oauth-bundle-ca8e0d4a5995.js",
      "./download-submenu-1962e2393827.js",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./save-cloud-file-copy-7b1908f46fa9.js",
      "./download-file-manager-message-fc15b36f8c4f.js",
      "./use-target-apps-cd0cca389b7c.js",
      "./codex-analytics-attribution-83c02d184f42.js",
      "./artifact-preview-status-5e6617ccf3e2.js",
      "./surface-experience-c26605784604.js",
      "./surface-experience-tracker-474fca575118.js",
      "./artifact-preview-zoom-be9e5386c42a.js",
      "./paged-thumbnail-rail-layout-4a361b31ca3c.js",
      "./thumbnail-panel-f8937e1a1283.js",
      "./annotation-comment-editor-card-cfcadbd19454.js",
      "./style-526fd4f4e29c.js",
      "./design-editor-state-d716163b60e0.js",
      "./inspector-color-field-eb70b6035b23.js",
      "./PopcornColorPicker-f42ad8a2beaa.js",
      "./color-72a92632a961.js",
      "./dist-a60aefefde17.js",
      "./range-slider-d313bf266f03.js",
      "./annotation-comment-editor-card-7bc205b008e2.css",
      "./document-69997017193a.js",
      "./pdf-preview-panel-a00a474e19b1.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $B as n,
  $St as r,
  $st as i,
  Bst as a,
  Eit as o,
  F3 as s,
  FBt as c,
  Fb as l,
  I3 as u,
  JS as d,
  LNt as f,
  NSt as p,
  OFt as m,
  Oit as h,
  PBt as g,
  Pb as _,
  QU as v,
  Qst as y,
  TY as b,
  VJ as ee,
  Vrt as x,
  XOt as S,
  XSt as te,
  Y3 as ne,
  YS as C,
  Z3 as w,
  ZSt as T,
  ck as re,
  e6 as E,
  iCt as D,
  kFt as O,
  mCt as k,
  nCt as A,
  okt as j,
  qrt as ie,
  rk as ae,
  sct as oe,
  tk as se,
  tkt as M,
  w_t as ce,
  zst as N,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $gr as le,
  $vr as P,
  Fm as ue,
  JYn as de,
  MT as fe,
  VRr as F,
  Xs as pe,
  YJn as me,
  Zgr as he,
  Zs as I,
  _p as ge,
  aYn as _e,
  bLr as L,
  ggr as ve,
  gp as R,
  iRr as z,
  ih as ye,
  iut as be,
  jT as xe,
  mYn as B,
  mlt as V,
  plt as Se,
  qYn as H,
  tut as Ce,
  tyr as we,
  vgr as Te,
  wLr as Ee,
  ygr as De,
  zRr as U,
} from "./app-initial-ad16eaadf81f.js";
import { i as Oe, n as ke, r as Ae } from "./surface-c9a729ca89b3.js";
import { n as je, t as Me } from "./toolbar-breadcrumb-d8f79235f5b5.js";
import { n as Ne, t as W } from "./read-error-b0681ff43794.js";
async function Pe(e, t, n, r) {
  let i = e.get(U),
    a = e.get(L),
    o = e.get(F).accountUserId ?? null,
    s = G(e, i, a, o);
  if (s == null || n.file_id == null) return `abandoned`;
  let c = new AbortController(),
    l = AbortSignal.any([r, c.signal]),
    u = e.watch((e) => {
      G(e, i, a, o) ?? c.abort();
    });
  try {
    let r = { accountId: s.accountId, userId: s.userId },
      c = { path: { agent_id: t, file_id: n.file_id } },
      u = await z.safeGet(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url`, {
        parameters: c,
        expectedIdentity: r,
        signal: l,
      });
    if (G(e, i, a, o) == null) return `abandoned`;
    if (u.needs_auth_token === !0) {
      let t = await z.getResponse(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw`, {
        parameters: c,
        expectedIdentity: r,
        signal: l,
      });
      if (!t.ok) return (await t.body?.cancel(), l.throwIfAborted(), `failed`);
      let s = await t.blob();
      return l.aborted || G(e, i, a, o) == null ? `abandoned` : (B(s, n.name), `downloaded`);
    }
    let d = H(u.download_url);
    if (d == null) return `failed`;
    let f = await me({
      conversationId: null,
      downloadIntent: !0,
      signal: l,
      target: { type: `download-url`, downloadUrl: P(d) ?? d },
    });
    return l.aborted || G(e, i, a, o) == null ? `abandoned` : (B(f, n.name), `downloaded`);
  } catch {
    return l.aborted || G(e, i, a, o) == null ? `abandoned` : `failed`;
  } finally {
    u();
  }
}
async function Fe(e, t, n, r, i, a, s, c) {
  let l = { accountId: t.accountId, userId: t.userId },
    u = { path: { agent_id: n, file_id: r } },
    d = await z.safeGet(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url`, {
      parameters: u,
      expectedIdentity: l,
      signal: c,
    });
  (K(e, t.accountId, t.userId, t.accountUserId), c.throwIfAborted());
  let f = Le(d.mime_type ?? a, d.file_name ?? i);
  if (f == null && !Ie(d.mime_type ?? a, d.file_name ?? i)) return { kind: `unsupported`, reason: `binary` };
  let p = q;
  f != null && (p = f.kind === `pdf` ? ve : Te);
  let m = d.size_bytes ?? s;
  if (m != null && m > p) return { kind: `unsupported`, reason: `too-large` };
  let h;
  if (d.needs_auth_token === !0)
    h = await z.getResponse(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw`, {
      parameters: u,
      expectedIdentity: l,
      signal: c,
    });
  else {
    let e = H(d.download_url);
    if (e == null) throw Error(`Workspace Agent memory file download URL is unsafe`);
    h = await o.getInstance().fetch(P(e) ?? e, { signal: c });
  }
  try {
    (K(e, t.accountId, t.userId, t.accountUserId), c.throwIfAborted());
  } catch (e) {
    throw (await h.body?.cancel().catch(() => {}), e);
  }
  if (!h.ok) throw (await h.body?.cancel(), Error(`Memory file download failed`));
  let g = Number(h.headers.get(`Content-Length`));
  if (Number.isFinite(g) && g > p)
    return (await h.body?.cancel(), { kind: `unsupported`, reason: `too-large` });
  if (f != null) {
    let n = await Re(h, c, p);
    return (
      K(e, t.accountId, t.userId, t.accountUserId),
      n == null
        ? { kind: `unsupported`, reason: `too-large` }
        : { kind: f.kind, dataUrl: `data:${f.mimeType};base64,${le(n)}` }
    );
  }
  let _ = await ze(h, c);
  return (K(e, t.accountId, t.userId, t.accountUserId), _);
}
function G(e, t, n, r) {
  return t == null ||
    n == null ||
    e.get(U) !== t ||
    e.get(L) !== n ||
    (e.get(F).accountUserId ?? null) !== r ||
    e.get(V) !== !0
    ? null
    : { accountId: t, userId: n, accountUserId: r };
}
function K(e, t, n, r) {
  let i = G(e, t, n, r);
  if (i == null) throw new DOMException(`Workspace Agent memory identity changed`, `AbortError`);
  return i;
}
function Ie(e, t) {
  let n = e?.split(`;`, 1)[0].trim().toLowerCase();
  return n?.startsWith(`text/`) ||
    n === `application/json` ||
    n?.endsWith(`+json`) ||
    n === `application/xml` ||
    n?.endsWith(`+xml`) ||
    n === `application/javascript` ||
    n === `application/x-yaml`
    ? !0
    : n != null && n !== `application/octet-stream`
      ? !1
      : /\.(?:css|csv|html?|js|json|jsx|log|md|mdx|py|text|toml|ts|tsx|txt|xml|ya?ml)$/i.test(t ?? ``);
}
function Le(e, t) {
  let n = e?.split(`;`, 1)[0].trim().toLowerCase();
  if (n === `application/pdf` || /\.pdf$/i.test(t ?? ``)) return { kind: `pdf`, mimeType: `application/pdf` };
  if (n != null && /^image\/(?:png|jpe?g|gif|webp|avif|bmp|x-icon|vnd\.microsoft\.icon|svg\+xml)$/.test(n))
    return { kind: `image`, mimeType: n === `image/jpg` ? `image/jpeg` : n };
  let r = t?.match(/\.(png|jpe?g|gif|webp|avif|bmp|ico|svg)$/i)?.[1]?.toLowerCase();
  switch (r) {
    case void 0:
      return null;
    case `jpg`:
      return { kind: `image`, mimeType: `image/jpeg` };
    case `ico`:
      return { kind: `image`, mimeType: `image/x-icon` };
    case `svg`:
      return { kind: `image`, mimeType: `image/svg+xml` };
    default:
      return { kind: `image`, mimeType: `image/${r}` };
  }
}
async function Re(e, t, n) {
  let r = e.body?.getReader();
  if (r == null) return new Uint8Array();
  let i = [],
    a = 0,
    o = () => {
      r.cancel().catch(() => {});
    };
  t.addEventListener(`abort`, o, { once: !0 });
  try {
    for (;;) {
      t.throwIfAborted();
      let { done: e, value: o } = await r.read();
      if ((t.throwIfAborted(), e)) {
        let e = new Uint8Array(a),
          t = 0;
        for (let n of i) (e.set(n, t), (t += n.byteLength));
        return e;
      }
      if (((a += o.byteLength), a > n)) return null;
      i.push(new Uint8Array(o));
    }
  } finally {
    (t.removeEventListener(`abort`, o), await r.cancel().catch(() => {}), r.releaseLock());
  }
}
async function ze(e, t) {
  let n = e.body?.getReader();
  if (n == null) return { kind: `text`, content: ``, truncated: !1 };
  let r = new TextDecoder(),
    i = 0,
    a = ``,
    o = () => {
      n.cancel().catch(() => {});
    };
  t.addEventListener(`abort`, o, { once: !0 });
  try {
    for (;;) {
      t.throwIfAborted();
      let e = await n.read();
      if ((t.throwIfAborted(), e.done)) return { kind: `text`, content: a + r.decode(), truncated: !1 };
      let o = q - i;
      if (e.value.byteLength > o)
        return (
          (a += r.decode(e.value.subarray(0, o), { stream: !0 })),
          { kind: `text`, content: a + r.decode(), truncated: !0 }
        );
      ((i += e.value.byteLength), (a += r.decode(e.value, { stream: !0 })));
    }
  } finally {
    (t.removeEventListener(`abort`, o), await n.cancel().catch(() => {}), n.releaseLock());
  }
}
var q, Be, Ve;
function He() {
  return (He = e(() => {
    (T(),
      Ee(),
      _e(),
      we(),
      de(),
      De(),
      i(),
      he(),
      a(),
      h(),
      Se(),
      (q = 1e5),
      (Be = k(y, ({ agentId: e, channel: t }, { get: n, scope: r }) => {
        let i = n(U),
          a = n(L),
          o = n(F).accountUserId ?? null;
        return {
          enabled: i != null && a != null && n(V) === !0,
          queryKey: [`workspace-agent`, `memory`, i, a, e, o, t],
          queryFn: async ({ signal: n }) => {
            let s = K(r, i, a, o),
              c = await z.safeGet(`/hermes/agent/{agent_id}/persistent-folder/tree`, {
                parameters: {
                  path: { agent_id: e },
                  query: {
                    channel_binding_type: t.type,
                    channel_binding_link_id: t.type === `slack` ? t.linkId : void 0,
                    channel_binding_channel_id: t.type === `slack` ? t.channelId : void 0,
                  },
                },
                expectedIdentity: { accountId: s.accountId, userId: s.userId },
                signal: n,
              });
            return (K(r, i, a, o), c);
          },
          retry: !1,
          staleTime: N.ONE_MINUTE,
        };
      })),
      (Ve = k(
        y,
        (
          { agentId: e, fileId: t, fileName: n, mimeType: r, sizeBytes: i, updatedAt: a },
          { get: o, scope: s },
        ) => {
          let c = o(U),
            l = o(L),
            u = o(F).accountUserId ?? null;
          return {
            enabled: c != null && l != null && t != null && o(V) === !0,
            queryKey: [`workspace-agent`, `memory-file`, c, l, e, u, t, a, n, r, i],
            queryFn: ({ signal: a }) => {
              if (t == null) throw Error(`Missing memory file ID`);
              return Fe(s, K(s, c, l, u), e, t, n, r, i, a);
            },
            gcTime: 0,
            retry: !1,
            staleTime: N.ONE_MINUTE,
          };
        },
      )));
  }))();
}
function Ue(e) {
  let n = (0, Z.c)(30),
    { agentId: r, canViewConfig: i, version: a } = e,
    [o, s] = te(),
    c = Xe(a),
    l = (i ? c.find((e) => X(e) === o.get(`memory_channel`)) : void 0) ?? c[0],
    u = o.get(`memory_node`),
    { data: f, error: p, isFetching: m, isPending: h, refetch: g } = A(Be, { agentId: r, channel: l }),
    _ = p == null ? f?.nodes.find((e) => e.id === f.root_node_id) : void 0,
    y = p == null && f != null && u != null ? Ze(f.nodes, u) : void 0,
    b = y?.at(-1) ?? _,
    x = (b?.kind === `folder` ? b.children : f?.nodes)?.filter(Ge).toSorted(We),
    S = (e) => {
      s(
        (t) => {
          let n = new URLSearchParams(t);
          return (e == null || e === _?.id ? n.delete(`memory_node`) : n.set(`memory_node`, e), n);
        },
        { preventScrollReset: !0 },
      );
    },
    C = y?.filter((e) => e.id !== _?.id) ?? [],
    w;
  n[0] === S ? (w = n[1]) : ((w = () => S(null)), (n[0] = S), (n[1] = w));
  let T;
  n[2] === S
    ? (T = n[3])
    : ((T = (e) => ({ id: e.id, label: e.name, onClick: () => S(e.id) })), (n[2] = S), (n[3] = T));
  let re = [
      { id: `memory-root`, label: (0, $.jsx)(J, { channel: l }), onClick: w },
      ...C.slice(0, -1).map(T),
    ],
    E;
  if (h && f == null) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(t, {})), (n[4] = e)) : (e = n[4]),
      (E = e));
  } else if (p != null) {
    let e;
    n[5] === g ? (e = n[6]) : ((e = () => void g()), (n[5] = g), (n[6] = e));
    let t;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(M, {
          id: `workspaceAgents.detail.memory.readError`,
          defaultMessage: `Could not load memory files`,
          description: `Error shown when a Workspace Agent memory file list cannot load`,
        })),
        (n[7] = t))
      : (t = n[7]);
    let r;
    (n[8] !== m || n[9] !== e
      ? ((r = (0, $.jsx)(W, { loading: m, onRetry: e, children: t })), (n[8] = m), (n[9] = e), (n[10] = r))
      : (r = n[10]),
      (E = r));
  } else if (u != null && y == null) {
    let e;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(R, {
          align: `start`,
          children: (0, $.jsx)(M, {
            id: `workspaceAgents.detail.memory.missingNode`,
            defaultMessage: `This file or folder is no longer available`,
            description: `Message when a saved memory location no longer exists in the agent's current memory tree`,
          }),
        })),
        (n[11] = e))
      : (e = n[11]),
      (E = e));
  } else if (b?.kind === `file`) E = (0, $.jsx)(Ke, { agentId: r, node: b }, b.id);
  else if (x != null && x.length > 0) {
    let e;
    (n[12] === S
      ? (e = n[13])
      : ((e = (e) =>
          (0, $.jsx)(
            Ce,
            {
              density: `compact`,
              icon:
                e.kind === `folder`
                  ? (0, $.jsx)(v, { className: `text-secondary` })
                  : (0, $.jsx)(ee, { className: `text-secondary` }),
              isSelected: !1,
              title: e.name,
              onSelect: () => S(e.id),
            },
            e.id,
          )),
        (n[12] = S),
        (n[13] = e)),
      (E = (0, $.jsx)(`div`, { className: `flex flex-col`, children: x.map(e) })));
  } else if (u != null) {
    let e;
    (n[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(R, {
          align: `start`,
          children: (0, $.jsx)(M, {
            id: `workspaceAgents.detail.memory.emptyFolder`,
            defaultMessage: `This folder is empty`,
            description: `Message shown inside an empty folder in an agent's memory, after the user opened that folder`,
          }),
        })),
        (n[14] = e))
      : (e = n[14]),
      (E = e));
  } else {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(d, {
          icon: (0, $.jsx)(v, {}),
          title: (0, $.jsx)(M, {
            id: `workspaceAgents.detail.memory.emptyTitle`,
            defaultMessage: `No memory yet`,
            description: `Title shown when a Workspace Agent has no saved memory`,
          }),
          description: (0, $.jsx)(M, {
            id: `workspaceAgents.detail.memory.emptyDescription`,
            defaultMessage: `When this agent saves notes and files, they will show up here`,
            description: `Description shown when a Workspace Agent has no saved memory`,
          }),
        })),
        (n[15] = e))
      : (e = n[15]),
      (E = e));
  }
  let D = null;
  if (u != null) D = (0, $.jsx)(Me, { ancestors: re, current: C.at(-1)?.name });
  else if (i && c.length > 1) {
    let e;
    n[16] === l
      ? (e = n[17])
      : ((e = (0, $.jsx)(ne, { color: `outline`, size: `toolbar`, children: (0, $.jsx)(J, { channel: l }) })),
        (n[16] = l),
        (n[17] = e));
    let t;
    (n[18] === s
      ? (t = n[19])
      : ((t = (e) =>
          (0, $.jsx)(
            ae.Item,
            {
              onSelect: () =>
                s(
                  (t) => {
                    let n = new URLSearchParams(t);
                    return (n.set(`memory_channel`, X(e)), n.delete(`memory_node`), n);
                  },
                  { preventScrollReset: !0 },
                ),
              children: (0, $.jsx)(J, { channel: e }),
            },
            X(e),
          )),
        (n[18] = s),
        (n[19] = t)),
      (D = (0, $.jsx)(se, { align: `start`, contentWidth: `xs`, triggerButton: e, children: c.map(t) })));
  }
  let O;
  n[20] !== r || n[21] !== p || n[22] !== b
    ? ((O =
        p == null && b?.kind === `file` && b.file_id != null
          ? (0, $.jsx)(Je, { agentId: r, node: b }, b.id)
          : null),
      (n[20] = r),
      (n[21] = p),
      (n[22] = b),
      (n[23] = O))
    : (O = n[23]);
  let k;
  n[24] !== O || n[25] !== D
    ? ((k = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [D, O],
      })),
      (n[24] = O),
      (n[25] = D),
      (n[26] = k))
    : (k = n[26]);
  let j;
  return (
    n[27] !== E || n[28] !== k
      ? ((j = (0, $.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-2`, children: [k, E] })),
        (n[27] = E),
        (n[28] = k),
        (n[29] = j))
      : (j = n[29]),
    j
  );
}
function We(e, t) {
  return Number(t.kind === `folder`) - Number(e.kind === `folder`) || e.name.localeCompare(t.name);
}
function Ge(e) {
  return !e.name.startsWith(`._`);
}
function Ke(e) {
  let n = (0, Z.c)(30),
    { agentId: i, node: a } = e,
    o = r(y),
    s = D(I),
    c = a.file_id,
    l = a.mime_type ?? null,
    u = a.size_bytes ?? null,
    d;
  n[0] !== i || n[1] !== c || n[2] !== a.name || n[3] !== a.updated_at || n[4] !== l || n[5] !== u
    ? ((d = { agentId: i, fileId: c, fileName: a.name, mimeType: l, sizeBytes: u, updatedAt: a.updated_at }),
      (n[0] = i),
      (n[1] = c),
      (n[2] = a.name),
      (n[3] = a.updated_at),
      (n[4] = l),
      (n[5] = u),
      (n[6] = d))
    : (d = n[6]);
  let { data: f, error: p, isPending: m, refetch: h } = A(Ve, d);
  if (c == null) {
    let e;
    return (
      n[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Y, {})), (n[7] = e)) : (e = n[7]),
      e
    );
  }
  if (m) {
    let e;
    return (
      n[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, $.jsx)(t, {}),
          })),
          (n[8] = e))
        : (e = n[8]),
      e
    );
  }
  if (p != null || f == null) {
    let e;
    return (
      n[9] === h ? (e = n[10]) : ((e = (0, $.jsx)(Y, { onRetry: () => void h() })), (n[9] = h), (n[10] = e)),
      e
    );
  }
  if (f.kind === `unsupported`) {
    let e;
    return (
      n[11] === f.reason
        ? (e = n[12])
        : ((e = (0, $.jsx)(R, {
            align: `start`,
            children:
              f.reason === `too-large`
                ? (0, $.jsx)(M, {
                    id: `workspaceAgents.detail.memory.fileTooLarge`,
                    defaultMessage: `This file is too large to preview`,
                    description: `State shown when a Workspace Agent memory file exceeds the preview size limit`,
                  })
                : (0, $.jsx)(M, {
                    id: `workspaceAgents.detail.memory.fileUnsupported`,
                    defaultMessage: `This file type can't be previewed`,
                    description: `State shown when a Workspace Agent memory file has a type that the preview does not support`,
                  }),
          })),
          (n[11] = f.reason),
          (n[12] = e)),
      e
    );
  }
  if (f.kind === `image` || f.kind === `pdf`) {
    let e;
    return (
      n[13] !== i || n[14] !== f.dataUrl || n[15] !== f.kind || n[16] !== a
        ? ((e = (0, $.jsx)(qe, { kind: f.kind, dataUrl: f.dataUrl, agentId: i, node: a }, a.updated_at)),
          (n[13] = i),
          (n[14] = f.dataUrl),
          (n[15] = f.kind),
          (n[16] = a),
          (n[17] = e))
        : (e = n[17]),
      e
    );
  }
  if (f.content.length === 0) {
    let e;
    return (
      n[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(R, {
            align: `start`,
            children: (0, $.jsx)(M, {
              id: `workspaceAgents.detail.memory.fileEmpty`,
              defaultMessage: `This file is empty`,
              description: `Empty state for a file in Workspace Agent memory`,
            }),
          })),
          (n[18] = e))
        : (e = n[18]),
      e
    );
  }
  let g;
  n[19] === f.truncated
    ? (g = n[20])
    : ((g = f.truncated
        ? (0, $.jsx)(`div`, {
            className: `pb-3 text-xs text-tertiary`,
            children: (0, $.jsx)(M, {
              id: `workspaceAgents.detail.memory.fileTruncated`,
              defaultMessage: `This preview is truncated`,
              description: `State shown when a Workspace Agent memory file preview reaches its size limit`,
            }),
          })
        : null),
      (n[19] = f.truncated),
      (n[20] = g));
  let v;
  n[21] !== f.content || n[22] !== a.mime_type || n[23] !== a.name || n[24] !== o || n[25] !== s
    ? ((v =
        a.mime_type === `text/markdown` || a.name.toLowerCase().endsWith(`.md`)
          ? (0, $.jsx)(ke, {
              background: `normal`,
              overflow: `auto`,
              children: (0, $.jsx)(Ae, { markdown: f.content }),
            })
          : (0, $.jsx)(_, {
              content: f.content,
              language: `text`,
              shouldWrapCode: s,
              onToggleWrapCode: () => o.set(I, !s),
            })),
      (n[21] = f.content),
      (n[22] = a.mime_type),
      (n[23] = a.name),
      (n[24] = o),
      (n[25] = s),
      (n[26] = v))
    : (v = n[26]);
  let b;
  return (
    n[27] !== g || n[28] !== v
      ? ((b = (0, $.jsxs)($.Fragment, { children: [g, v] })), (n[27] = g), (n[28] = v), (n[29] = b))
      : (b = n[29]),
    b
  );
}
function qe(e) {
  let t = (0, Z.c)(10),
    { kind: n, dataUrl: r, agentId: i, node: a } = e,
    [o, s] = (0, Q.useState)(!1);
  if (o) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Y, { onRetry: () => s(!1) })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `image`) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = () => s(!0)), (t[1] = e)) : (e = t[1]);
    let n;
    return (
      t[2] !== r || t[3] !== a.name
        ? ((n = (0, $.jsx)(`img`, {
            alt: a.name,
            className: `h-auto max-w-full object-contain`,
            decoding: `async`,
            src: r,
            onError: e,
          })),
          (t[2] = r),
          (t[3] = a.name),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  let c = `${i}/${a.id}`,
    l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = () => s(!0)), (t[5] = l)) : (l = t[5]);
  let u;
  return (
    t[6] !== r || t[7] !== a.name || t[8] !== c
      ? ((u = (0, $.jsx)(`div`, {
          className: `h-96 overflow-hidden rounded-md`,
          children: (0, $.jsx)(Qe, {
            annotationBatchingEnabled: !1,
            annotationsEnabled: !1,
            chromeMode: `standalone`,
            headerPlacement: `inline`,
            fileDataUrl: r,
            hostId: ce,
            path: c,
            title: a.name,
            onError: l,
          }),
        })),
        (t[6] = r),
        (t[7] = a.name),
        (t[8] = c),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function Je(e) {
  let t = (0, Z.c)(17),
    { agentId: i, node: a } = e,
    o = r(y),
    s = j(),
    c = fe(),
    [l, u] = (0, Q.useState)(!1),
    [d] = (0, Q.useState)(Ye),
    f;
  (t[0] === d ? (f = t[1]) : ((f = () => d.abort()), (t[0] = d), (t[1] = f)), ye(f, d));
  let p;
  t[2] !== s || t[3] !== a.name
    ? ((p = s.formatMessage(
        {
          id: `workspaceAgents.detail.memory.download`,
          defaultMessage: `Download {fileName}`,
          description: `Accessible label for downloading the open memory file. fileName is the full file name, including its extension.`,
        },
        { fileName: a.name },
      )),
      (t[2] = s),
      (t[3] = a.name),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== i || t[6] !== s || t[7] !== c || t[8] !== d.signal || t[9] !== a || t[10] !== o
    ? ((m = () => {
        (u(!0),
          Pe(o, i, a, d.signal)
            .then((e) => {
              e === `failed` &&
                c() &&
                o
                  .get(ie)
                  .danger(
                    s.formatMessage({
                      id: `workspaceAgents.detail.memory.downloadError`,
                      defaultMessage: `Could not download this file`,
                      description: `Error after downloading the open agent memory file fails`,
                    }),
                    { errorAnalytics: { toastId: `workspaceAgents.detail.memory.downloadError` } },
                  );
            })
            .finally(() => {
              c() && u(!1);
            }));
      }),
      (t[5] = i),
      (t[6] = s),
      (t[7] = c),
      (t[8] = d.signal),
      (t[9] = a),
      (t[10] = o),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = (0, $.jsx)(n, {})), (t[12] = h)) : (h = t[12]);
  let g;
  return (
    t[13] !== l || t[14] !== p || t[15] !== m
      ? ((g = (0, $.jsx)(ne, {
          color: `ghostSecondary`,
          size: `toolbar`,
          loading: l,
          disabled: l,
          "aria-label": p,
          onClick: m,
          children: h,
        })),
        (t[13] = l),
        (t[14] = p),
        (t[15] = m),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Ye() {
  return new AbortController();
}
function J(e) {
  let t = (0, Z.c)(4),
    { channel: n } = e;
  switch (n.type) {
    case `chatgpt`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(M, {
              id: `workspaceAgents.detail.memory.chatGpt`,
              defaultMessage: `ChatGPT`,
              description: `Name of the private ChatGPT memory channel for a Workspace Agent`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `api`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(M, {
              id: `workspaceAgents.detail.memory.api`,
              defaultMessage: `API`,
              description: `Name of the API memory channel for a Workspace Agent`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `slack`: {
      let e = n.channelName ?? n.channelId,
        r;
      return (
        t[2] === e ? (r = t[3]) : ((r = (0, $.jsx)($.Fragment, { children: e })), (t[2] = e), (t[3] = r)),
        r
      );
    }
  }
}
function Y(e) {
  let t = (0, Z.c)(3),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(M, {
        id: `workspaceAgents.detail.memory.fileError`,
        defaultMessage: `Could not read this memory file`,
        description: `Error shown when a Workspace Agent memory file cannot load`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n ? (i = t[2]) : ((i = (0, $.jsx)(W, { onRetry: n, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Xe(e) {
  let t = e.config?.deployments,
    n = t?.api?.some((e) => e.pending_deletion !== !0),
    r = (t?.slack ?? []).flatMap((e) => {
      let t = e.slack_trigger.params,
        n = t?.channel_id,
        r = t?.channel_name,
        i = e.slack_trigger.link.id;
      return e.pending_deletion === !0 ||
        e.slack_trigger.enabled === !1 ||
        typeof n != `string` ||
        n.length === 0 ||
        i.length === 0
        ? []
        : [{ type: `slack`, channelId: n, channelName: typeof r == `string` ? r : null, linkId: i }];
    });
  return [{ type: `chatgpt` }, ...(n ? [{ type: `api` }] : []), ...r];
}
function X(e) {
  switch (e.type) {
    case `chatgpt`:
    case `api`:
      return e.type;
    case `slack`:
      return `${e.type}:${e.linkId}:${e.channelId}`;
  }
}
function Ze(e, t) {
  for (let n of e) {
    if (n.name.startsWith(`._`)) continue;
    if (n.id === t) return [n];
    let e = n.children == null ? void 0 : Ze(n.children, t);
    if (e != null) return [n, ...e];
  }
}
var Z, Q, $, Qe;
function $e() {
  return ($e = e(() => {
    ((Z = g()),
      T(),
      oe(),
      (Q = c()),
      S(),
      p(),
      w(),
      l(),
      C(),
      re(),
      b(),
      ge(),
      s(),
      be(),
      E(),
      x(),
      je(),
      pe(),
      Oe(),
      ue(),
      i(),
      xe(),
      Ne(),
      He(),
      ($ = f()),
      O(),
      (Qe = u(
        async () =>
          (
            await m(
              async () => {
                let { PdfPreviewPanel: e } = await import(`./pdf-preview-panel-5d6a72cd03f2.js`);
                return { PdfPreviewPanel: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
                49, 50, 51, 52, 53, 54, 55, 56, 57,
              ]),
              import.meta.url,
            )
          ).PdfPreviewPanel,
        { fallback: (0, $.jsx)(t, {}) },
      )));
  }))();
}
export { $e as n, Ue as t };
//# sourceMappingURL=memory-a4a0492d023b.js.map
