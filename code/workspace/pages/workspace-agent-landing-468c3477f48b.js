const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-fe98a7d2ac27.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./automation-frequency-section-49a6d0cc31da.js",
      "./ChevronRight-9ebd4395b90f.js",
      "./automation-frequency-section-babd3c0f0928.css",
      "./automation-delete-confirmation-dialog-c1501bf84bbd.js",
      "./detail-section-state-48ff67356906.js",
      "./workspace-agent-detail-query-ee964e0a64ba.js",
      "./read-error-f695c821b3d2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Z as n,
  A3t as r,
  AH as i,
  AMt as a,
  Amn as o,
  CRt as s,
  Cpn as c,
  ERt as l,
  F3t as u,
  IXt as d,
  JG as f,
  JXt as p,
  Jrt as m,
  KG as h,
  KWt as g,
  MMt as _,
  N3t as ee,
  O3t as v,
  ORt as y,
  OW as b,
  Opn as x,
  Pdt as S,
  QS as C,
  QWt as w,
  QZ as T,
  Sdt as te,
  Spn as E,
  Wlt as ne,
  Xdt as D,
  Xrt as re,
  Yut as O,
  ZG as k,
  ZS as A,
  Zrt as ie,
  _H as j,
  _mn as ae,
  a3t as M,
  dqt as N,
  eit as P,
  fk as F,
  gH as oe,
  gmn as I,
  gpn as se,
  hmn as L,
  iit as R,
  jMt as z,
  kH as B,
  kMt as ce,
  kW as V,
  kmn as H,
  lF as le,
  o3t as U,
  os as W,
  pk as G,
  pqt as K,
  rit as q,
  ss as J,
  tit as Y,
  uF as ue,
  vlt as de,
} from "./app-initial-f094ef01c64d.js";
import {
  NC as fe,
  PC as pe,
  Qu as me,
  Zu as he,
  hc as ge,
  mc as _e,
} from "./app-primary-4c40d73a1074.js";
import { n as ve, t as ye } from "./home-suggestion-list-c5a723041498.js";
import { n as be, t as xe } from "./segmented-toggle-30e6111a9bfb.js";
import { n as Se, t as Ce } from "./compact-empty-state-9a2953b7acb0.js";
import { i as we, n as Te, r as Ee } from "./surface-572ba2609efa.js";
import { n as De, r as Oe } from "./detail-page-8ad79819368d.js";
import { n as ke, t as X } from "./detail-section-state-48ff67356906.js";
import {
  a as Ae,
  d as je,
  i as Me,
  l as Ne,
  n as Pe,
  o as Fe,
  r as Ie,
  t as Le,
} from "./workspace-agent-detail-query-ee964e0a64ba.js";
import { n as Re, t as ze } from "./read-error-f695c821b3d2.js";
import { n as Be, t as Ve } from "./agent-menu-ecf22be00deb.js";
function He(e) {
  let t = (0, Ue.c)(5),
    { agentId: n } = e,
    r = x(),
    i = u(g),
    [a, o] = (0, We.useState)(!1),
    s = (0, We.useRef)(null),
    c;
  return (
    t[0] !== i || t[1] !== n || t[2] !== r || t[3] !== a
      ? ((c =
          i == null
            ? null
            : (0, Ge.jsxs)(Ge.Fragment, {
                children: [
                  (0, Ge.jsx)(ce, {
                    ref: s,
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    "aria-haspopup": `dialog`,
                    "aria-expanded": a,
                    "aria-label": r.formatMessage({
                      id: `workspaceAgents.schedules.open`,
                      defaultMessage: `Automations`,
                      description: `Opens a Workspace Agent's scheduled automations`,
                    }),
                    onClick: () => o(!0),
                    children: (0, Ge.jsx)(de, {}),
                  }),
                  a
                    ? (0, Ge.jsx)(
                        Ke,
                        {
                          accountId: i,
                          agentId: n,
                          onClose: () => o(!1),
                          onCloseAutoFocus: () => s.current?.focus(),
                        },
                        `${i}:${n}`,
                      )
                    : null,
                ],
              })),
        (t[0] = i),
        (t[1] = n),
        (t[2] = r),
        (t[3] = a),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
var Ue,
  We,
  Ge,
  Ke,
  qe = e(() => {
    ((Ue = H()),
      v(),
      (We = t(o(), 1)),
      E(),
      w(),
      a(),
      D(),
      T(),
      (Ge = L()),
      ae(),
      (Ke = n(
        async () =>
          (
            await I(
              async () => {
                let { WorkspaceAgentSchedulesDialog: e } = await import(`./dialog-fe98a7d2ac27.js`);
                return { WorkspaceAgentSchedulesDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
              import.meta.url,
            )
          ).WorkspaceAgentSchedulesDialog,
      )));
  });
function Je(e) {
  let t = (0, tt.c)(38),
    { agentId: n, canViewConfig: r, version: i } = e,
    a = Qe(i),
    o = r && a.length > 1,
    [s, l] = (0, nt.useState)(null),
    [u, d] = (0, nt.useState)(null),
    p = (r ? a.find((e) => $e(e) === s) : void 0) ?? a[0],
    { data: g, error: _, isPending: v, refetch: y } = ee(Fe, { agentId: n, channel: p }),
    b,
    x;
  if (t[0] !== g || t[1] !== _ || t[2] !== v || t[3] !== y || t[4] !== u || t[5] !== d) {
    let e = g?.nodes.find((e) => e.id === g.root_node_id),
      n = et(e?.children ?? g?.nodes ?? []);
    if (
      ((x =
        _ == null
          ? n.find((e) => {
              let { node: t } = e;
              return t.id === u;
            })
          : void 0),
      v && g == null)
    ) {
      let e;
      (t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(`div`, {
            className: `flex items-center justify-center py-8`,
            children: (0, Z.jsx)(z, {}),
          })),
          (t[8] = e))
        : (e = t[8]),
        (b = e));
    } else if (_ != null) {
      let e;
      t[9] === y ? (e = t[10]) : ((e = () => void y()), (t[9] = y), (t[10] = e));
      let n;
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Z.jsx)(c, {
            id: `workspaceAgents.detail.memory.readError`,
            defaultMessage: `Could not load memory files`,
            description: `Error shown when a Workspace Agent memory file list cannot load`,
          })),
          (t[11] = n))
        : (n = t[11]);
      let r;
      (t[12] === e
        ? (r = t[13])
        : ((r = (0, Z.jsx)(ze, { onRetry: e, children: n })), (t[12] = e), (t[13] = r)),
        (b = r));
    } else if (n.length === 0) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(Ce, {
            icon: (0, Z.jsx)(ne, {}),
            title: (0, Z.jsx)(c, {
              id: `workspaceAgents.detail.memory.emptyTitle`,
              defaultMessage: `No memory yet`,
              description: `Title shown when a Workspace Agent has no saved memory`,
            }),
            description: (0, Z.jsx)(c, {
              id: `workspaceAgents.detail.memory.emptyDescription`,
              defaultMessage: `When this agent saves notes and files, they will show up here.`,
              description: `Description shown when a Workspace Agent has no saved memory`,
            }),
          })),
          (t[14] = e))
        : (e = t[14]),
        (b = e));
    } else {
      let e;
      (t[15] !== u || t[16] !== d
        ? ((e = (e) =>
            (0, Z.jsx)(
              he,
              {
                density: `compact`,
                icon: (0, Z.jsx)(S, { className: `text-secondary` }),
                isSelected: e.node.id === u,
                title: e.displayPath,
                onSelect: () => d(e.node.id),
              },
              e.node.id,
            )),
          (t[15] = u),
          (t[16] = d),
          (t[17] = e))
        : (e = t[17]),
        (b = (0, Z.jsx)(`div`, { className: `flex flex-col`, children: n.map(e) })));
    }
    ((t[0] = g),
      (t[1] = _),
      (t[2] = v),
      (t[3] = y),
      (t[4] = u),
      (t[5] = d),
      (t[6] = b),
      (t[7] = x));
  } else ((b = t[6]), (x = t[7]));
  let C = o
      ? (0, Z.jsx)(h, {
          align: `start`,
          contentWidth: `xs`,
          triggerButton: (0, Z.jsx)(ce, {
            color: `outline`,
            size: `toolbar`,
            children: (0, Z.jsx)(Xe, { channel: p }),
          }),
          children: a.map((e) =>
            (0, Z.jsx)(
              f.Item,
              {
                onSelect: () => {
                  (l($e(e)), d(null));
                },
                children: (0, Z.jsx)(Xe, { channel: e }),
              },
              $e(e),
            ),
          ),
        })
      : null,
    w = x != null,
    T;
  t[18] === d
    ? (T = t[19])
    : ((T = (e) => {
        e || d(null);
      }),
      (t[18] = d),
      (t[19] = T));
  let te = x?.node.name,
    E;
  t[20] === te
    ? (E = t[21])
    : ((E = (0, Z.jsx)(ie, {
        children: (0, Z.jsx)(re, { title: (0, Z.jsx)(q, { children: te }) }),
      })),
      (t[20] = te),
      (t[21] = E));
  let D;
  t[22] !== n || t[23] !== x
    ? ((D = x == null ? null : (0, Z.jsx)(Ye, { agentId: n, node: x.node })),
      (t[22] = n),
      (t[23] = x),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] === D
    ? (O = t[26])
    : ((O = (0, Z.jsx)(ie, { className: `min-h-0 flex-1 overflow-y-auto`, children: D })),
      (t[25] = D),
      (t[26] = O));
  let k;
  t[27] !== E || t[28] !== O
    ? ((k = (0, Z.jsxs)(m, { size: `tall`, children: [E, O] })),
      (t[27] = E),
      (t[28] = O),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== w || t[31] !== T || t[32] !== k
    ? ((A = (0, Z.jsx)(Y, { open: w, size: `wide`, onOpenChange: T, children: k })),
      (t[30] = w),
      (t[31] = T),
      (t[32] = k),
      (t[33] = A))
    : (A = t[33]);
  let j;
  return (
    t[34] !== b || t[35] !== A || t[36] !== C
      ? ((j = (0, Z.jsxs)(`div`, {
          className: `flex min-h-0 flex-col gap-2`,
          children: [C, b, A],
        })),
        (t[34] = b),
        (t[35] = A),
        (t[36] = C),
        (t[37] = j))
      : (j = t[37]),
    j
  );
}
function Ye(e) {
  let t = (0, tt.c)(25),
    { agentId: n, node: i } = e,
    a = r(M),
    o = u(pe),
    s = i.file_id,
    l = i.mime_type ?? null,
    d = i.size_bytes ?? null,
    f;
  t[0] !== n || t[1] !== s || t[2] !== i.name || t[3] !== i.updated_at || t[4] !== l || t[5] !== d
    ? ((f = {
        agentId: n,
        fileId: s,
        fileName: i.name,
        mimeType: l,
        sizeBytes: d,
        updatedAt: i.updated_at,
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = i.name),
      (t[3] = i.updated_at),
      (t[4] = l),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let { data: p, error: m, isPending: h, refetch: g } = ee(Ae, f);
  if (s == null) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(Ze, {})), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  if (h) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, Z.jsx)(z, {}),
          })),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  if (m != null || p == null) {
    let e;
    return (
      t[9] === g
        ? (e = t[10])
        : ((e = (0, Z.jsx)(Ze, { onRetry: () => void g() })), (t[9] = g), (t[10] = e)),
      e
    );
  }
  if (p.kind === `unsupported`) {
    let e;
    return (
      t[11] === p.reason
        ? (e = t[12])
        : ((e = (0, Z.jsx)(b, {
            align: `start`,
            children:
              p.reason === `too-large`
                ? (0, Z.jsx)(c, {
                    id: `workspaceAgents.detail.memory.fileTooLarge`,
                    defaultMessage: `This file is too large to preview`,
                    description: `State shown when a Workspace Agent memory file exceeds the preview size limit`,
                  })
                : (0, Z.jsx)(c, {
                    id: `workspaceAgents.detail.memory.fileUnsupported`,
                    defaultMessage: `This file type can't be previewed`,
                    description: `State shown when a Workspace Agent memory file is not a text file`,
                  }),
          })),
          (t[11] = p.reason),
          (t[12] = e)),
      e
    );
  }
  if (p.content.length === 0) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(b, {
            align: `start`,
            children: (0, Z.jsx)(c, {
              id: `workspaceAgents.detail.memory.fileEmpty`,
              defaultMessage: `This file is empty`,
              description: `Empty state for a file in Workspace Agent memory`,
            }),
          })),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  let _;
  t[14] === p.truncated
    ? (_ = t[15])
    : ((_ = p.truncated
        ? (0, Z.jsx)(`div`, {
            className: `pb-3 text-xs text-tertiary`,
            children: (0, Z.jsx)(c, {
              id: `workspaceAgents.detail.memory.fileTruncated`,
              defaultMessage: `This preview is truncated`,
              description: `State shown when a Workspace Agent memory file preview reaches its size limit`,
            }),
          })
        : null),
      (t[14] = p.truncated),
      (t[15] = _));
  let v;
  t[16] !== p.content || t[17] !== i.mime_type || t[18] !== i.name || t[19] !== a || t[20] !== o
    ? ((v =
        i.mime_type === `text/markdown` || i.name.toLowerCase().endsWith(`.md`)
          ? (0, Z.jsx)(Te, {
              background: `normal`,
              overflow: `auto`,
              children: (0, Z.jsx)(Ee, { markdown: p.content }),
            })
          : (0, Z.jsx)(B, {
              content: p.content,
              language: `text`,
              shouldWrapCode: o,
              onToggleWrapCode: () => a.set(pe, !o),
            })),
      (t[16] = p.content),
      (t[17] = i.mime_type),
      (t[18] = i.name),
      (t[19] = a),
      (t[20] = o),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== _ || t[23] !== v
      ? ((y = (0, Z.jsxs)(Z.Fragment, { children: [_, v] })), (t[22] = _), (t[23] = v), (t[24] = y))
      : (y = t[24]),
    y
  );
}
function Xe(e) {
  let t = (0, tt.c)(4),
    { channel: n } = e;
  switch (n.type) {
    case `chatgpt`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(c, {
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
          ? ((e = (0, Z.jsx)(c, {
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
        t[2] === e
          ? (r = t[3])
          : ((r = (0, Z.jsx)(Z.Fragment, { children: e })), (t[2] = e), (t[3] = r)),
        r
      );
    }
  }
}
function Ze(e) {
  let t = (0, tt.c)(3),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(c, {
        id: `workspaceAgents.detail.memory.fileError`,
        defaultMessage: `Could not read this memory file`,
        description: `Error shown when a Workspace Agent memory file cannot load`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Z.jsx)(ze, { onRetry: n, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Qe(e) {
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
        : [
            {
              type: `slack`,
              channelId: n,
              channelName: typeof r == `string` ? r : null,
              linkId: i,
            },
          ];
    });
  return [{ type: `chatgpt` }, ...(n ? [{ type: `api` }] : []), ...r];
}
function $e(e) {
  switch (e.type) {
    case `chatgpt`:
    case `api`:
      return e.type;
    case `slack`:
      return `${e.type}:${e.linkId}:${e.channelId}`;
  }
}
function et(e, t = []) {
  let n = [];
  for (let r of e) {
    let e = [...t, r.name];
    if (r.kind === `file`) {
      n.push({ displayPath: e.join(`/`), node: r });
      continue;
    }
    n.push(...et(r.children ?? [], e));
  }
  return n;
}
var tt,
  nt,
  Z,
  rt = e(() => {
    ((tt = H()),
      v(),
      (nt = t(o(), 1)),
      E(),
      a(),
      i(),
      Se(),
      R(),
      P(),
      k(),
      D(),
      V(),
      me(),
      _(),
      fe(),
      we(),
      U(),
      Re(),
      Le(),
      (Z = L()));
  });
function it(e) {
  let t = (0, Q.c)(82),
    { composer: n, agentId: r, onStarterPromptSelect: i } = e,
    a = x(),
    o = p(),
    { data: u } = ee(Me, r),
    [d, f] = (0, _t.useState)(!1),
    m = u?.latest_published_version,
    h = u?.agent,
    g;
  t[0] === m?.config?.tools.connectors
    ? (g = t[1])
    : ((g = m?.config?.tools.connectors ?? []), (t[0] = m?.config?.tools.connectors), (t[1] = g));
  let _ = g,
    v = m?.config?.persistent_folder === `per_user`,
    y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = {
        id: `activity`,
        label: (0, $.jsx)(c, {
          id: `workspaceAgents.detail.tabs.activity`,
          defaultMessage: `Activity`,
          description: `Tab on a Workspace Agent page that lists its recent activity`,
        }),
      }),
      (t[2] = y))
    : (y = t[2]);
  let b;
  t[3] === _.length
    ? (b = t[4])
    : ((b =
        _.length === 0
          ? []
          : [
              {
                id: `apps`,
                label: (0, $.jsx)(c, {
                  id: `workspaceAgents.detail.tabs.apps`,
                  defaultMessage: `Apps`,
                  description: `Tab on a Workspace Agent page that lists its connected apps`,
                }),
              },
            ]),
      (t[3] = _.length),
      (t[4] = b));
  let S;
  t[5] === v
    ? (S = t[6])
    : ((S = v
        ? [
            {
              id: `memory`,
              label: (0, $.jsx)(c, {
                id: `workspaceAgents.detail.tabs.memory`,
                defaultMessage: `Memory`,
                description: `Tab on a Workspace Agent page that lists files saved in its memory`,
              }),
            },
          ]
        : []),
      (t[5] = v),
      (t[6] = S));
  let C;
  t[7] !== b || t[8] !== S
    ? ((C = [y, ...b, ...S]), (t[7] = b), (t[8] = S), (t[9] = C))
    : (C = t[9]);
  let w = C,
    [T, E] = (0, _t.useState)(`activity`),
    ne;
  t[10] !== T || t[11] !== w
    ? ((ne = w.some((e) => {
        let { id: t } = e;
        return t === T;
      })
        ? T
        : `activity`),
      (t[10] = T),
      (t[11] = w),
      (t[12] = ne))
    : (ne = t[12]);
  let D = ne,
    re = h?.viewer_capability,
    O = re === `hermes_write` || re === `hermes_admin`,
    k = re === `hermes_read_config`,
    ie;
  t[13] !== r || t[14] !== m?.name
    ? ((ie = m?.name.trim() || r), (t[13] = r), (t[14] = m?.name), (t[15] = ie))
    : (ie = t[15]);
  let j = ie,
    ae;
  t[16] !== r || t[17] !== O || t[18] !== k || t[19] !== m
    ? ((ae =
        m == null
          ? (0, $.jsx)(ht, {})
          : (0, $.jsx)(Je, { agentId: r, canViewConfig: O || k, version: m })),
      (t[16] = r),
      (t[17] = O),
      (t[18] = k),
      (t[19] = m),
      (t[20] = ae))
    : (ae = t[20]);
  let M = ae;
  if (D === `activity`) {
    let e;
    (t[21] === r ? (e = t[22]) : ((e = (0, $.jsx)(at, { agentId: r })), (t[21] = r), (t[22] = e)),
      (M = e));
  } else if (D === `apps`) {
    let e;
    (t[23] === _
      ? (e = t[24])
      : ((e = (0, $.jsx)(ut, { connectors: _ })), (t[23] = _), (t[24] = e)),
      (M = e));
  }
  let N;
  t[25] === r ? (N = t[26]) : ((N = (0, $.jsx)(He, { agentId: r }, r)), (t[25] = r), (t[26] = N));
  let P;
  t[27] !== r || t[28] !== O || t[29] !== k || t[30] !== o
    ? ((P =
        O || k
          ? (0, $.jsx)(ce, {
              color: `ghost`,
              size: `toolbar`,
              onClick: () => {
                o(l(r));
              },
              children: O
                ? (0, $.jsx)(c, {
                    id: `workspaceAgents.detail.edit`,
                    defaultMessage: `Edit agent`,
                    description: `Button that opens a Workspace Agent in the native draft editor`,
                  })
                : (0, $.jsx)(c, {
                    id: `workspaceAgents.detail.view`,
                    defaultMessage: `View agent`,
                    description: `Button that opens an agent's configuration in the native read-only editor`,
                  }),
            })
          : null),
      (t[27] = r),
      (t[28] = O),
      (t[29] = k),
      (t[30] = o),
      (t[31] = P))
    : (P = t[31]);
  let F;
  t[32] !== r || t[33] !== j || t[34] !== o || t[35] !== m
    ? ((F =
        m == null
          ? null
          : (0, $.jsx)(Ve, {
              agent: { id: r, name: j, icon: m.icon },
              isPublished: !0,
              onPinError: f,
              onDeleted: () => {
                o(s, { replace: !0 });
              },
            })),
      (t[32] = r),
      (t[33] = j),
      (t[34] = o),
      (t[35] = m),
      (t[36] = F))
    : (F = t[36]);
  let I;
  t[37] !== P || t[38] !== F || t[39] !== N
    ? ((I = (0, $.jsx)(le.HeaderAction, {
        actionId: `workspace-agent-actions`,
        align: `end`,
        order: 80,
        children: (0, $.jsxs)($.Fragment, { children: [N, P, F] }),
      })),
      (t[37] = P),
      (t[38] = F),
      (t[39] = N),
      (t[40] = I))
    : (I = t[40]);
  let se = m?.icon,
    L;
  t[41] === se
    ? (L = t[42])
    : ((L = (0, $.jsx)(_e, { icon: se, size: 48 })), (t[41] = se), (t[42] = L));
  let R;
  t[43] === h?.is_private_to_creator
    ? (R = t[44])
    : ((R =
        h?.is_private_to_creator === !0
          ? (0, $.jsx)(oe, {
              variant: `outline`,
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.detail.private`,
                defaultMessage: `Private to you`,
                description: `Badge on a Workspace Agent page when only its creator can access it`,
              }),
            })
          : null),
      (t[43] = h?.is_private_to_creator),
      (t[44] = R));
  let z;
  t[45] !== j || t[46] !== R
    ? ((z = (0, $.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [j, R],
      })),
      (t[45] = j),
      (t[46] = R),
      (t[47] = z))
    : (z = t[47]);
  let B;
  t[48] === h
    ? (B = t[49])
    : ((B =
        h?.creator_name != null && !h.is_private_to_creator
          ? (0, $.jsx)(`p`, {
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.detail.creator`,
                defaultMessage: `By {creatorName}`,
                description: `Creator attribution on a Workspace Agent page`,
                values: { creatorName: h.creator_name },
              }),
            })
          : null),
      (t[48] = h),
      (t[49] = B));
  let V;
  t[50] === m
    ? (V = t[51])
    : ((V = m?.tagline.trim() ? (0, $.jsx)(`p`, { children: m.tagline }) : null),
      (t[50] = m),
      (t[51] = V));
  let H;
  t[52] !== B || t[53] !== V
    ? ((H = (0, $.jsxs)($.Fragment, { children: [B, V] })), (t[52] = B), (t[53] = V), (t[54] = H))
    : (H = t[54]);
  let U;
  t[55] !== L || t[56] !== z || t[57] !== H
    ? ((U = (0, $.jsx)(A, { asset: L, title: z, subtitle: H })),
      (t[55] = L),
      (t[56] = z),
      (t[57] = H),
      (t[58] = U))
    : (U = t[58]);
  let W;
  t[59] === d
    ? (W = t[60])
    : ((W = d
        ? (0, $.jsx)(X, {
            role: `alert`,
            tone: `danger`,
            children: (0, $.jsx)(c, {
              id: `workspaceAgents.detail.pinError`,
              defaultMessage: `Couldn't update the sidebar`,
              description: `Error shown when pinning or unpinning a Workspace Agent fails`,
            }),
          })
        : null),
      (t[59] = d),
      (t[60] = W));
  let G;
  t[61] !== i || t[62] !== m
    ? ((G =
        m == null || m.starter_prompts.length === 0
          ? null
          : (0, $.jsx)(ye, {
              composerMode: `chat`,
              placement: `above-composer`,
              items: m.starter_prompts.slice(0, 4).map((e) => ({
                id: e.prompt,
                label: e.title,
                tooltipContent: e.short_description || e.prompt,
                icon: (0, $.jsx)(te, {}),
                disabled: i == null,
                onClick: () => i?.(e.prompt),
              })),
            })),
      (t[61] = i),
      (t[62] = m),
      (t[63] = G))
    : (G = t[63]);
  let K;
  t[64] === a
    ? (K = t[65])
    : ((K = a.formatMessage({
        id: `workspaceAgents.detail.tabs.label`,
        defaultMessage: `Agent details tabs`,
        description: `Accessible label for tabs on a Workspace Agent page`,
      })),
      (t[64] = a),
      (t[65] = K));
  let q;
  t[66] !== D || t[67] !== K || t[68] !== w
    ? ((q = (0, $.jsx)(xe, { ariaLabel: K, selectedId: D, options: w, onSelect: E })),
      (t[66] = D),
      (t[67] = K),
      (t[68] = w),
      (t[69] = q))
    : (q = t[69]);
  let J;
  t[70] !== M || t[71] !== q
    ? ((J = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, children: [q, M] })),
      (t[70] = M),
      (t[71] = q),
      (t[72] = J))
    : (J = t[72]);
  let Y;
  t[73] !== n || t[74] !== U || t[75] !== W || t[76] !== G || t[77] !== J
    ? ((Y = (0, $.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-6 px-panel py-panel`,
        children: (0, $.jsxs)(De, { children: [U, W, G, n, J] }),
      })),
      (t[73] = n),
      (t[74] = U),
      (t[75] = W),
      (t[76] = G),
      (t[77] = J),
      (t[78] = Y))
    : (Y = t[78]);
  let ue;
  return (
    t[79] !== I || t[80] !== Y
      ? ((ue = (0, $.jsxs)(`div`, {
          className: `relative h-full min-h-0 flex-1 [scrollbar-gutter:stable] overflow-x-hidden overflow-y-auto`,
          children: [I, Y],
        })),
        (t[79] = I),
        (t[80] = Y),
        (t[81] = ue))
      : (ue = t[81]),
    ue
  );
}
function at(e) {
  let t = (0, Q.c)(32),
    { agentId: n } = e,
    {
      data: r,
      error: i,
      fetchNextPage: a,
      hasNextPage: o,
      isFetchingNextPage: s,
      isFetchNextPageError: l,
      isPending: u,
      refetch: d,
    } = ee(Pe, n),
    f,
    p,
    m,
    h;
  if (
    t[0] !== r?.pages ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== l ||
    t[5] !== s ||
    t[6] !== u ||
    t[7] !== d
  ) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = r?.pages.flatMap(st);
      if (u) {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(ht, {})), (t[12] = e))
          : (e = t[12]),
          (h = e));
        break bb0;
      }
      if (i != null && (e == null || e.length === 0)) {
        let e;
        (t[13] === d
          ? (e = t[14])
          : ((e = (0, $.jsx)(ze, { onRetry: () => void d() })), (t[13] = d), (t[14] = e)),
          (h = e));
        break bb0;
      }
      if (e == null || e.length === 0) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(X, {
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.detail.activity.empty`,
                defaultMessage: `No activity yet. Conversations and automation runs will show up here.`,
                description: `Message shown when a Workspace Agent has no activity`,
              }),
            })),
            (t[15] = e))
          : (e = t[15]),
          (h = e));
        break bb0;
      }
      if (((f = null), l)) {
        let e;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.loadMoreError`,
              defaultMessage: `Unable to load more activity`,
              description: `Error shown when another page of Workspace Agent activity cannot be loaded`,
            })),
            (t[16] = e))
          : (e = t[16]);
        let n;
        t[17] === a
          ? (n = t[18])
          : ((n = () => {
              a();
            }),
            (t[17] = a),
            (t[18] = n));
        let r;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.retry`,
              defaultMessage: `Try again`,
              description: `Button that retries loading Workspace Agent activity`,
            })),
            (t[19] = r))
          : (r = t[19]);
        let i;
        (t[20] === n
          ? (i = t[21])
          : ((i = (0, $.jsxs)(X, {
              role: `alert`,
              tone: `danger`,
              children: [
                e,
                (0, $.jsx)(ce, { color: `secondary`, size: `toolbar`, onClick: n, children: r }),
              ],
            })),
            (t[20] = n),
            (t[21] = i)),
          (f = i));
      } else if (o) {
        let e;
        t[22] === a
          ? (e = t[23])
          : ((e = () => {
              a();
            }),
            (t[22] = a),
            (t[23] = e));
        let n;
        t[24] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.loadMore`,
              defaultMessage: `Load more`,
              description: `Button that loads more Workspace Agent activity`,
            })),
            (t[24] = n))
          : (n = t[24]);
        let r;
        (t[25] !== s || t[26] !== e
          ? ((r = (0, $.jsx)(`div`, {
              className: `flex justify-center pt-2`,
              children: (0, $.jsx)(ce, {
                color: `secondary`,
                loading: s,
                size: `medium`,
                onClick: e,
                children: n,
              }),
            })),
            (t[25] = s),
            (t[26] = e),
            (t[27] = r))
          : (r = t[27]),
          (f = r));
      }
      ((p = `flex flex-col`), (m = e.map(ot)));
    }
    ((t[0] = r?.pages),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o),
      (t[4] = l),
      (t[5] = s),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h));
  } else ((f = t[8]), (p = t[9]), (m = t[10]), (h = t[11]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let g;
  return (
    t[28] !== f || t[29] !== p || t[30] !== m
      ? ((g = (0, $.jsxs)(`div`, { className: p, children: [m, f] })),
        (t[28] = f),
        (t[29] = p),
        (t[30] = m),
        (t[31] = g))
      : (g = t[31]),
    g
  );
}
function ot(e) {
  return (0, $.jsx)(ct, { conversation: e }, e.id);
}
function st(e) {
  return e.items;
}
function ct(e) {
  let t = (0, Q.c)(21),
    { conversation: n } = e,
    r = p(),
    i;
  t[0] === n ? (i = t[1]) : ((i = gt(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] !== n.id || t[3] !== r
    ? ((o = () => {
        r(N(n.id));
      }),
      (t[2] = n.id),
      (t[3] = r),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === n.title
    ? (s = t[6])
    : ((s =
        n.title?.trim() ||
        (0, $.jsx)(c, {
          id: `workspaceAgents.detail.activity.newChat`,
          defaultMessage: `New chat`,
          description: `Fallback title for a Workspace Agent conversation`,
        })),
      (t[5] = n.title),
      (t[6] = s));
  let l;
  t[7] === a
    ? (l = t[8])
    : ((l =
        a == null
          ? null
          : (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.channel`,
              defaultMessage: `{channel} · `,
              description: `Channel name shown before a Workspace Agent run status`,
              values: { channel: a },
            })),
      (t[7] = a),
      (t[8] = l));
  let u;
  t[9] === n ? (u = t[10]) : ((u = (0, $.jsx)(lt, { conversation: n })), (t[9] = n), (t[10] = u));
  let d;
  t[11] !== l || t[12] !== u
    ? ((d = (0, $.jsxs)($.Fragment, { children: [l, u] })), (t[11] = l), (t[12] = u), (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === n.last_used_at
    ? (f = t[15])
    : ((f = (0, $.jsx)(se, { value: n.last_used_at, day: `numeric`, month: `short` })),
      (t[14] = n.last_used_at),
      (t[15] = f));
  let m;
  return (
    t[16] !== o || t[17] !== s || t[18] !== d || t[19] !== f
      ? ((m = (0, $.jsx)(he, {
          density: `compact`,
          isSelected: !1,
          onSelect: o,
          title: s,
          secondaryTitle: d,
          rightText: f,
        })),
        (t[16] = o),
        (t[17] = s),
        (t[18] = d),
        (t[19] = f),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function lt(e) {
  let t = (0, Q.c)(6),
    { conversation: n } = e;
  switch (n.fiber_is_responding ? `in_progress` : n.fiber_status) {
    case `pending`:
    case `in_progress`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.running`,
              defaultMessage: `Running`,
              description: `Status of a Workspace Agent run that is in progress`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `completed`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.completed`,
              defaultMessage: `Task completed`,
              description: `Status of a completed Workspace Agent run`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `blocked`:
    case `timed_out_waiting_on_tool`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.blocked`,
              defaultMessage: `Needs your attention`,
              description: `Status of a Workspace Agent run blocked on user input`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.failed`,
              defaultMessage: `Could not complete task`,
              description: `Status of a failed Workspace Agent run`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `aborted`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.aborted`,
              defaultMessage: `Run stopped`,
              description: `Status of a stopped Workspace Agent run`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case null:
    case void 0: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(c, {
              id: `workspaceAgents.detail.activity.unknown`,
              defaultMessage: `Unknown status`,
              description: `Fallback status for a Workspace Agent run`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
function ut(e) {
  let t = (0, Q.c)(22),
    { connectors: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.flatMap(pt)), (t[0] = n), (t[1] = r));
  let i = r,
    { data: a, error: o, isPending: s, refetch: l } = ee(Ie, i);
  if (n.length === 0) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(X, {
            children: (0, $.jsx)(c, {
              id: `workspaceAgents.detail.apps.empty`,
              defaultMessage: `No connected apps yet.`,
              description: `Empty state shown when a Workspace Agent has no connected apps`,
            }),
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (i.length > 0 && s) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ht, {})), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let u, d, f, p;
  if (t[4] !== n || t[5] !== a?.apps || t[6] !== o || t[7] !== l) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = new Map(a?.apps.map(ft)),
        r = n.flatMap((t) => {
          let n = Ne(t),
            r = n == null ? null : (e.get(n) ?? null),
            i = r?.name ?? t.server_label?.trim();
          return i == null || i.length === 0 ? [] : [{ app: r, connector: t, name: i }];
        });
      if (o != null && r.length === 0) {
        let e;
        (t[12] === l
          ? (e = t[13])
          : ((e = (0, $.jsx)(ze, { onRetry: () => void l() })), (t[12] = l), (t[13] = e)),
          (p = e));
        break bb0;
      }
      if (r.length === 0) {
        let e;
        (t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(X, {
              children: (0, $.jsx)(c, {
                id: `workspaceAgents.detail.apps.unavailable`,
                defaultMessage: `App details aren't available`,
                description: `State shown when app details for a Workspace Agent cannot be read`,
              }),
            })),
            (t[14] = e))
          : (e = t[14]),
          (p = e));
        break bb0;
      }
      ((u = `flex flex-col`),
        t[15] !== o || t[16] !== l
          ? ((d = o != null && (0, $.jsx)(ze, { onRetry: () => void l() })),
            (t[15] = o),
            (t[16] = l),
            (t[17] = d))
          : (d = t[17]),
        (f = r.map(dt)));
    }
    ((t[4] = n),
      (t[5] = a?.apps),
      (t[6] = o),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p));
  } else ((u = t[8]), (d = t[9]), (f = t[10]), (p = t[11]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m;
  return (
    t[18] !== u || t[19] !== d || t[20] !== f
      ? ((m = (0, $.jsxs)(`div`, { className: u, children: [d, f] })),
        (t[18] = u),
        (t[19] = d),
        (t[20] = f),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function dt(e) {
  let { app: t, connector: n, name: r } = e;
  return (0, $.jsx)(
    W,
    {
      description: t?.description,
      descriptionClassName: `line-clamp-1`,
      icon: (0, $.jsx)(F, {
        alt: r,
        className: `size-full object-contain`,
        fallback: (0, $.jsx)(O, { className: `text-secondary` }),
        knownAppId: t?.id,
        logoDarkUrl: t?.logoDarkUrl,
        logoUrl: t?.logoUrl,
      }),
      presentation: `row`,
      title: r,
    },
    mt(n),
  );
}
function ft(e) {
  return [e.id, e];
}
function pt(e) {
  let t = Ne(e);
  return t == null ? [] : [t];
}
function mt(e) {
  let t = e.connector_identifier;
  return t.type === `CONNECTOR_ID` ? t.connector_id : t.server_url;
}
function ht() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(X, {
          children: (0, $.jsx)(c, {
            id: `workspaceAgents.detail.loading`,
            defaultMessage: `Loading…`,
            description: `Loading state for Workspace Agent detail tabs`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function gt(e) {
  switch (e.invocation.type) {
    case `chatgpt`:
      return `ChatGPT`;
    case `api`:
      return `API`;
    case `slack`:
      return e.invocation.channel_name == null ? null : `#${e.invocation.channel_name}`;
  }
}
var Q, _t, $;
e(() => {
  ((Q = H()),
    v(),
    (_t = t(o(), 1)),
    E(),
    d(),
    ve(),
    ue(),
    K(),
    G(),
    j(),
    a(),
    Oe(),
    ke(),
    D(),
    C(),
    be(),
    me(),
    J(),
    Be(),
    je(),
    Re(),
    y(),
    qe(),
    Le(),
    ge(),
    rt(),
    ($ = L()));
})();
export { it as WorkspaceAgentLanding };
//# sourceMappingURL=workspace-agent-landing-468c3477f48b.js.map
