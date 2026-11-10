const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./pdf-preview-panel-41c0d7080ba1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./PopcornManualEditHeaderControls-e0458d509e7c.js",
      "./artifact-annotation-batch-controls-58c22049fec2.js",
      "./PopcornIcons-16e50c25ad67.js",
      "./PopcornIcon-88bc8b9c01dd.js",
      "./artifact-request-progress-b18754c299fc.js",
      "./use-command-hotkey-19878d4b0f49.js",
      "./arrow-rotate-ccw-1e98531dace1.js",
      "./artifact-annotation-batch-controls-84ae7e0fceaf.css",
      "./use-annotation-mode-exit-4d0f0fd2e6a2.js",
      "./annotation-mode-icon-c9f59d42793c.js",
      "./annotation-mode-icon-443b825e9772.css",
      "./annotation-mode-analytics-883da7ddba89.js",
      "./layout-7a4e7177e626.js",
      "./artifact-accessories-fe3be839fff5.js",
      "./presentation-annotation-coachmark-1ba238d606f8.js",
      "./menu-items-b78a5ea99a11.js",
      "./query-4ecbf204b1e6.js",
      "./library-file-metadata-18e455d7ac7c.js",
      "./header-b4e8c147ec9e.js",
      "./scope-fb5d3b4015cc.js",
      "./artifact-originating-turn-4517ac8fac03.js",
      "./artifact-preview-header-b624a4e82866.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./download-submenu-2fee9f2333f7.js",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./save-cloud-file-copy-a8fdb6c780fc.js",
      "./download-file-manager-message-b11c6f057796.js",
      "./use-target-apps-df427db284a8.js",
      "./codex-analytics-attribution-da3e14c84e21.js",
      "./artifact-preview-status-c9c48d8baae3.js",
      "./surface-experience-689b6f263218.js",
      "./surface-experience-tracker-474fca575118.js",
      "./artifact-preview-zoom-be9e5386c42a.js",
      "./paged-thumbnail-rail-layout-6efffdc811e2.js",
      "./thumbnail-panel-c2f3d31f295e.js",
      "./annotation-comment-editor-card-957f5525f8bc.js",
      "./style-9afbb349e873.js",
      "./design-editor-state-3b004a56ead0.js",
      "./inspector-color-field-953128a1d932.js",
      "./PopcornColorPicker-b0c66a8c8ba0.js",
      "./color-fe822360a2e9.js",
      "./dist-736eb9ea6eff.js",
      "./range-slider-a8d456738691.js",
      "./annotation-comment-editor-card-7bc205b008e2.css",
      "./document-73e48c5158c9.js",
      "./pdf-preview-panel-a00a474e19b1.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  B4 as r,
  CO as i,
  Cot as a,
  Fat as o,
  IDt as s,
  Ixt as c,
  Nxt as l,
  Pat as u,
  Pxt as d,
  TJ as f,
  TO as p,
  VDt as m,
  Vq as h,
  Vxt as g,
  Zxt as _,
  _xt as v,
  bS as y,
  fPt as b,
  frt as x,
  hot as S,
  i3 as C,
  iB as w,
  jDt as T,
  lgt as E,
  lot as D,
  ob as O,
  pPt as k,
  r3 as A,
  rst as j,
  sb as M,
  t3 as N,
  tU as ee,
  urt as P,
  vzt as F,
  wot as I,
  xMt as te,
  yS as ne,
  yzt as re,
  z4 as ie,
  zxt as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as oe,
  $fr as se,
  CKn as ce,
  EGn as le,
  GGn as ue,
  GMr as L,
  IGn as de,
  Js as fe,
  QMr as R,
  Rm as pe,
  Xct as me,
  YMr as z,
  Ymr as B,
  Zmr as V,
  bfr as he,
  cct as ge,
  ehr as _e,
  hm as ve,
  hp as ye,
  lct as H,
  mp as U,
  nT as be,
  qs as xe,
  rT as Se,
  tNr as Ce,
  tpr as we,
  vfr as Te,
  wKn as Ee,
  xfr as De,
} from "./app-initial-5851df3f6cb1.js";
import { i as Oe, n as ke, r as Ae } from "./surface-3fad834862de.js";
import { n as je, t as Me } from "./toolbar-breadcrumb-e1be94112dcb.js";
import { n as Ne, t as W } from "./read-error-29adc71a8032.js";
async function Pe(e, t, n, r) {
  let i = e.get(L),
    a = e.get(z),
    o = e.get(R).accountUserId ?? null,
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
      u = await B.safeGet(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url`, {
        parameters: c,
        expectedIdentity: r,
        signal: l,
      });
    if (G(e, i, a, o) == null) return `abandoned`;
    if (u.needs_auth_token === !0) {
      let t = await B.getResponse(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw`, {
        parameters: c,
        expectedIdentity: r,
        signal: l,
      });
      if (!t.ok) return (await t.body?.cancel(), l.throwIfAborted(), `failed`);
      let s = await t.blob();
      return l.aborted || G(e, i, a, o) == null ? `abandoned` : (ue(s, n.name), `downloaded`);
    }
    let d = ce(u.download_url);
    if (d == null) return `failed`;
    let f = await le({
      conversationId: null,
      downloadIntent: !0,
      signal: l,
      target: { type: `download-url`, downloadUrl: V(d) ?? d },
    });
    return l.aborted || G(e, i, a, o) == null ? `abandoned` : (ue(f, n.name), `downloaded`);
  } catch {
    return l.aborted || G(e, i, a, o) == null ? `abandoned` : `failed`;
  } finally {
    u();
  }
}
async function Fe(e, t, n, r, i, a, o, s) {
  let c = { accountId: t.accountId, userId: t.userId },
    l = { path: { agent_id: n, file_id: r } },
    u = await B.safeGet(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_url`, {
      parameters: l,
      expectedIdentity: c,
      signal: s,
    });
  (K(e, t.accountId, t.userId, t.accountUserId), s.throwIfAborted());
  let d = Le(u.mime_type ?? a, u.file_name ?? i);
  if (d == null && !Ie(u.mime_type ?? a, u.file_name ?? i)) return { kind: `unsupported`, reason: `binary` };
  let f = q;
  d != null && (f = d.kind === `pdf` ? Te : he);
  let p = u.size_bytes ?? o;
  if (p != null && p > f) return { kind: `unsupported`, reason: `too-large` };
  let m;
  if (u.needs_auth_token === !0)
    m = await B.getResponse(`/hermes/agent/{agent_id}/persistent-folder/files/{file_id}/download_raw`, {
      parameters: l,
      expectedIdentity: c,
      signal: s,
    });
  else {
    let e = ce(u.download_url);
    if (e == null) throw Error(`Workspace Agent memory file download URL is unsafe`);
    m = await P.getInstance().fetch(V(e) ?? e, { signal: s });
  }
  try {
    (K(e, t.accountId, t.userId, t.accountUserId), s.throwIfAborted());
  } catch (e) {
    throw (await m.body?.cancel().catch(() => {}), e);
  }
  if (!m.ok) throw (await m.body?.cancel(), Error(`Memory file download failed`));
  let h = Number(m.headers.get(`Content-Length`));
  if (Number.isFinite(h) && h > f)
    return (await m.body?.cancel(), { kind: `unsupported`, reason: `too-large` });
  if (d != null) {
    let n = await Re(m, s, f);
    return (
      K(e, t.accountId, t.userId, t.accountUserId),
      n == null
        ? { kind: `unsupported`, reason: `too-large` }
        : { kind: d.kind, dataUrl: `data:${d.mimeType};base64,${we(n)}` }
    );
  }
  let g = await ze(m, s);
  return (K(e, t.accountId, t.userId, t.accountUserId), g);
}
function G(e, t, n, r) {
  return t == null ||
    n == null ||
    e.get(L) !== t ||
    e.get(z) !== n ||
    (e.get(R).accountUserId ?? null) !== r ||
    e.get(H) !== !0
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
    (d(),
      Ce(),
      de(),
      _e(),
      Ee(),
      De(),
      I(),
      se(),
      o(),
      x(),
      ge(),
      (q = 1e5),
      (Be = _(a, ({ agentId: e, channel: t }, { get: n, scope: r }) => {
        let i = n(L),
          a = n(z),
          o = n(R).accountUserId ?? null;
        return {
          enabled: i != null && a != null && n(H) === !0,
          queryKey: [`workspace-agent`, `memory`, i, a, e, o, t],
          queryFn: async ({ signal: n }) => {
            let s = K(r, i, a, o),
              c = await B.safeGet(`/hermes/agent/{agent_id}/persistent-folder/tree`, {
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
          staleTime: u.ONE_MINUTE,
        };
      })),
      (Ve = _(
        a,
        (
          { agentId: e, fileId: t, fileName: n, mimeType: r, sizeBytes: i, updatedAt: a },
          { get: o, scope: s },
        ) => {
          let c = o(L),
            l = o(z),
            d = o(R).accountUserId ?? null;
          return {
            enabled: c != null && l != null && t != null && o(H) === !0,
            queryKey: [`workspace-agent`, `memory-file`, c, l, e, d, t, a, n, r, i],
            queryFn: ({ signal: a }) => {
              if (t == null) throw Error(`Missing memory file ID`);
              return Fe(s, K(s, c, l, d), e, t, n, r, i, a);
            },
            gcTime: 0,
            retry: !1,
            staleTime: u.ONE_MINUTE,
          };
        },
      )));
  }))();
}
function Ue(e) {
  let n = (0, Z.c)(30),
    { agentId: r, canViewConfig: a, version: o } = e,
    [c, u] = l(),
    d = Xe(o),
    f = (a ? d.find((e) => X(e) === c.get(`memory_channel`)) : void 0) ?? d[0],
    m = c.get(`memory_node`),
    { data: g, error: _, isFetching: v, isPending: y, refetch: b } = ae(Be, { agentId: r, channel: f }),
    x = _ == null ? g?.nodes.find((e) => e.id === g.root_node_id) : void 0,
    S = _ == null && g != null && m != null ? Ze(g.nodes, m) : void 0,
    C = S?.at(-1) ?? x,
    w = (C?.kind === `folder` ? C.children : g?.nodes)?.filter(Ge).toSorted(We),
    T = (e) => {
      u(
        (t) => {
          let n = new URLSearchParams(t);
          return (e == null || e === x?.id ? n.delete(`memory_node`) : n.set(`memory_node`, e), n);
        },
        { preventScrollReset: !0 },
      );
    },
    E = S?.filter((e) => e.id !== x?.id) ?? [],
    D;
  n[0] === T ? (D = n[1]) : ((D = () => T(null)), (n[0] = T), (n[1] = D));
  let O;
  n[2] === T
    ? (O = n[3])
    : ((O = (e) => ({ id: e.id, label: e.name, onClick: () => T(e.id) })), (n[2] = T), (n[3] = O));
  let k = [{ id: `memory-root`, label: (0, $.jsx)(J, { channel: f }), onClick: D }, ...E.slice(0, -1).map(O)],
    j;
  if (y && g == null) {
    let e;
    (n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(A, {})), (n[4] = e)) : (e = n[4]),
      (j = e));
  } else if (_ != null) {
    let e;
    n[5] === b ? (e = n[6]) : ((e = () => void b()), (n[5] = b), (n[6] = e));
    let t;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(s, {
          id: `workspaceAgents.detail.memory.readError`,
          defaultMessage: `Could not load memory files`,
          description: `Error shown when a Workspace Agent memory file list cannot load`,
        })),
        (n[7] = t))
      : (t = n[7]);
    let r;
    (n[8] !== v || n[9] !== e
      ? ((r = (0, $.jsx)(W, { loading: v, onRetry: e, children: t })), (n[8] = v), (n[9] = e), (n[10] = r))
      : (r = n[10]),
      (j = r));
  } else if (m != null && S == null) {
    let e;
    (n[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(U, {
          align: `start`,
          children: (0, $.jsx)(s, {
            id: `workspaceAgents.detail.memory.missingNode`,
            defaultMessage: `This file or folder is no longer available`,
            description: `Message when a saved memory location no longer exists in the agent's current memory tree`,
          }),
        })),
        (n[11] = e))
      : (e = n[11]),
      (j = e));
  } else if (C?.kind === `file`) j = (0, $.jsx)(Ke, { agentId: r, node: C }, C.id);
  else if (w != null && w.length > 0) {
    let e;
    (n[12] === T
      ? (e = n[13])
      : ((e = (e) =>
          (0, $.jsx)(
            me,
            {
              density: `compact`,
              icon:
                e.kind === `folder`
                  ? (0, $.jsx)(ee, { className: `text-secondary` })
                  : (0, $.jsx)(h, { className: `text-secondary` }),
              isSelected: !1,
              title: e.name,
              onSelect: () => T(e.id),
            },
            e.id,
          )),
        (n[12] = T),
        (n[13] = e)),
      (j = (0, $.jsx)(`div`, { className: `flex flex-col`, children: w.map(e) })));
  } else if (m != null) {
    let e;
    (n[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(U, {
          align: `start`,
          children: (0, $.jsx)(s, {
            id: `workspaceAgents.detail.memory.emptyFolder`,
            defaultMessage: `This folder is empty`,
            description: `Message shown inside an empty folder in an agent's memory, after the user opened that folder`,
          }),
        })),
        (n[14] = e))
      : (e = n[14]),
      (j = e));
  } else {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ne, {
          icon: (0, $.jsx)(ee, {}),
          title: (0, $.jsx)(s, {
            id: `workspaceAgents.detail.memory.emptyTitle`,
            defaultMessage: `No memory yet`,
            description: `Title shown when a Workspace Agent has no saved memory`,
          }),
          description: (0, $.jsx)(s, {
            id: `workspaceAgents.detail.memory.emptyDescription`,
            defaultMessage: `When this agent saves notes and files, they will show up here`,
            description: `Description shown when a Workspace Agent has no saved memory`,
          }),
        })),
        (n[15] = e))
      : (e = n[15]),
      (j = e));
  }
  let M = null;
  if (m != null) M = (0, $.jsx)(Me, { ancestors: k, current: E.at(-1)?.name });
  else if (a && d.length > 1) {
    let e;
    n[16] === f
      ? (e = n[17])
      : ((e = (0, $.jsx)(t, { color: `outline`, size: `toolbar`, children: (0, $.jsx)(J, { channel: f }) })),
        (n[16] = f),
        (n[17] = e));
    let r;
    (n[18] === u
      ? (r = n[19])
      : ((r = (e) =>
          (0, $.jsx)(
            p.Item,
            {
              onSelect: () =>
                u(
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
        (n[18] = u),
        (n[19] = r)),
      (M = (0, $.jsx)(i, { align: `start`, contentWidth: `xs`, triggerButton: e, children: d.map(r) })));
  }
  let N;
  n[20] !== r || n[21] !== _ || n[22] !== C
    ? ((N =
        _ == null && C?.kind === `file` && C.file_id != null
          ? (0, $.jsx)(Je, { agentId: r, node: C }, C.id)
          : null),
      (n[20] = r),
      (n[21] = _),
      (n[22] = C),
      (n[23] = N))
    : (N = n[23]);
  let P;
  n[24] !== N || n[25] !== M
    ? ((P = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center justify-between gap-3`,
        children: [M, N],
      })),
      (n[24] = N),
      (n[25] = M),
      (n[26] = P))
    : (P = n[26]);
  let F;
  return (
    n[27] !== j || n[28] !== P
      ? ((F = (0, $.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-2`, children: [P, j] })),
        (n[27] = j),
        (n[28] = P),
        (n[29] = F))
      : (F = n[29]),
    F
  );
}
function We(e, t) {
  return Number(t.kind === `folder`) - Number(e.kind === `folder`) || e.name.localeCompare(t.name);
}
function Ge(e) {
  return !e.name.startsWith(`._`);
}
function Ke(e) {
  let t = (0, Z.c)(30),
    { agentId: n, node: r } = e,
    i = c(a),
    o = g(fe),
    l = r.file_id,
    u = r.mime_type ?? null,
    d = r.size_bytes ?? null,
    f;
  t[0] !== n || t[1] !== l || t[2] !== r.name || t[3] !== r.updated_at || t[4] !== u || t[5] !== d
    ? ((f = { agentId: n, fileId: l, fileName: r.name, mimeType: u, sizeBytes: d, updatedAt: r.updated_at }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = r.name),
      (t[3] = r.updated_at),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let { data: p, error: m, isPending: h, refetch: _ } = ae(Ve, f);
  if (l == null) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(Y, {})), (t[7] = e)) : (e = t[7]),
      e
    );
  }
  if (h) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, $.jsx)(A, {}),
          })),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  if (m != null || p == null) {
    let e;
    return (
      t[9] === _ ? (e = t[10]) : ((e = (0, $.jsx)(Y, { onRetry: () => void _() })), (t[9] = _), (t[10] = e)),
      e
    );
  }
  if (p.kind === `unsupported`) {
    let e;
    return (
      t[11] === p.reason
        ? (e = t[12])
        : ((e = (0, $.jsx)(U, {
            align: `start`,
            children:
              p.reason === `too-large`
                ? (0, $.jsx)(s, {
                    id: `workspaceAgents.detail.memory.fileTooLarge`,
                    defaultMessage: `This file is too large to preview`,
                    description: `State shown when a Workspace Agent memory file exceeds the preview size limit`,
                  })
                : (0, $.jsx)(s, {
                    id: `workspaceAgents.detail.memory.fileUnsupported`,
                    defaultMessage: `This file type can't be previewed`,
                    description: `State shown when a Workspace Agent memory file has a type that the preview does not support`,
                  }),
          })),
          (t[11] = p.reason),
          (t[12] = e)),
      e
    );
  }
  if (p.kind === `image` || p.kind === `pdf`) {
    let e;
    return (
      t[13] !== n || t[14] !== p.dataUrl || t[15] !== p.kind || t[16] !== r
        ? ((e = (0, $.jsx)(qe, { kind: p.kind, dataUrl: p.dataUrl, agentId: n, node: r }, r.updated_at)),
          (t[13] = n),
          (t[14] = p.dataUrl),
          (t[15] = p.kind),
          (t[16] = r),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  if (p.content.length === 0) {
    let e;
    return (
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(U, {
            align: `start`,
            children: (0, $.jsx)(s, {
              id: `workspaceAgents.detail.memory.fileEmpty`,
              defaultMessage: `This file is empty`,
              description: `Empty state for a file in Workspace Agent memory`,
            }),
          })),
          (t[18] = e))
        : (e = t[18]),
      e
    );
  }
  let v;
  t[19] === p.truncated
    ? (v = t[20])
    : ((v = p.truncated
        ? (0, $.jsx)(`div`, {
            className: `pb-3 text-xs text-tertiary`,
            children: (0, $.jsx)(s, {
              id: `workspaceAgents.detail.memory.fileTruncated`,
              defaultMessage: `This preview is truncated`,
              description: `State shown when a Workspace Agent memory file preview reaches its size limit`,
            }),
          })
        : null),
      (t[19] = p.truncated),
      (t[20] = v));
  let y;
  t[21] !== p.content || t[22] !== r.mime_type || t[23] !== r.name || t[24] !== i || t[25] !== o
    ? ((y =
        r.mime_type === `text/markdown` || r.name.toLowerCase().endsWith(`.md`)
          ? (0, $.jsx)(ke, {
              background: `normal`,
              overflow: `auto`,
              children: (0, $.jsx)(Ae, { markdown: p.content }),
            })
          : (0, $.jsx)(O, {
              content: p.content,
              language: `text`,
              shouldWrapCode: o,
              onToggleWrapCode: () => i.set(fe, !o),
            })),
      (t[21] = p.content),
      (t[22] = r.mime_type),
      (t[23] = r.name),
      (t[24] = i),
      (t[25] = o),
      (t[26] = y))
    : (y = t[26]);
  let b;
  return (
    t[27] !== v || t[28] !== y
      ? ((b = (0, $.jsxs)($.Fragment, { children: [v, y] })), (t[27] = v), (t[28] = y), (t[29] = b))
      : (b = t[29]),
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
            hostId: E,
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
  let n = (0, Z.c)(17),
    { agentId: r, node: i } = e,
    o = c(a),
    s = m(),
    l = Se(),
    [u, d] = (0, Q.useState)(!1),
    [f] = (0, Q.useState)(Ye),
    p;
  (n[0] === f ? (p = n[1]) : ((p = () => f.abort()), (n[0] = f), (n[1] = p)), pe(p, f));
  let h;
  n[2] !== s || n[3] !== i.name
    ? ((h = s.formatMessage(
        {
          id: `workspaceAgents.detail.memory.download`,
          defaultMessage: `Download {fileName}`,
          description: `Accessible label for downloading the open memory file. fileName is the full file name, including its extension.`,
        },
        { fileName: i.name },
      )),
      (n[2] = s),
      (n[3] = i.name),
      (n[4] = h))
    : (h = n[4]);
  let g;
  n[5] !== r || n[6] !== s || n[7] !== l || n[8] !== f.signal || n[9] !== i || n[10] !== o
    ? ((g = () => {
        (d(!0),
          Pe(o, r, i, f.signal)
            .then((e) => {
              e === `failed` &&
                l() &&
                o
                  .get(S)
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
              l() && d(!1);
            }));
      }),
      (n[5] = r),
      (n[6] = s),
      (n[7] = l),
      (n[8] = f.signal),
      (n[9] = i),
      (n[10] = o),
      (n[11] = g))
    : (g = n[11]);
  let _;
  n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, $.jsx)(w, {})), (n[12] = _)) : (_ = n[12]);
  let v;
  return (
    n[13] !== u || n[14] !== h || n[15] !== g
      ? ((v = (0, $.jsx)(t, {
          color: `ghostSecondary`,
          size: `toolbar`,
          loading: u,
          disabled: u,
          "aria-label": h,
          onClick: g,
          children: _,
        })),
        (n[13] = u),
        (n[14] = h),
        (n[15] = g),
        (n[16] = v))
      : (v = n[16]),
    v
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
          ? ((e = (0, $.jsx)(s, {
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
          ? ((e = (0, $.jsx)(s, {
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
    ? ((r = (0, $.jsx)(s, {
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
    ((Z = F()),
      d(),
      j(),
      (Q = re()),
      T(),
      v(),
      N(),
      M(),
      y(),
      n(),
      f(),
      ye(),
      ie(),
      oe(),
      C(),
      D(),
      je(),
      xe(),
      Oe(),
      ve(),
      I(),
      be(),
      Ne(),
      He(),
      ($ = te()),
      k(),
      (Qe = r(
        async () =>
          (
            await b(
              async () => {
                let { PdfPreviewPanel: e } = await import(`./pdf-preview-panel-41c0d7080ba1.js`);
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
        { fallback: (0, $.jsx)(A, {}) },
      )));
  }))();
}
export { $e as n, Ue as t };
//# sourceMappingURL=memory-fe8ee0015df7.js.map
