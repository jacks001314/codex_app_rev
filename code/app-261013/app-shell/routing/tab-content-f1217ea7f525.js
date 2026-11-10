import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $V as n,
  Cot as r,
  Ext as i,
  GE as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  Rnt as l,
  TJ as u,
  VDt as d,
  Vxt as f,
  W7 as p,
  WE as m,
  _xt as h,
  iot as g,
  jDt as _,
  oot as v,
  t3 as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  G0 as T,
  Jlr as E,
  Mct as D,
  Pct as O,
  RF as k,
  W0 as A,
  _ct as j,
  _tr as M,
  fMr as N,
  gtr as P,
  hp as F,
  htr as I,
  hzt as L,
  mp as R,
  mzt as z,
  oMr as B,
  qlr as V,
  vct as H,
  zF as U,
} from "./app-initial-5851df3f6cb1.js";
import { n as W, t as G } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
function K(e) {
  let n = (0, J.c)(54),
    { conversationId: a } = e,
    c = s(r),
    l = d(),
    u = i(),
    h = f(B),
    _;
  n[0] === h ? (_ = n[1]) : ((_ = { enabled: h, hostId: g }), (n[0] = h), (n[1] = _));
  let v = E(_),
    y = (0, Y.useId)(),
    [b, x] = (0, Y.useState)(``),
    { data: S, error: C, isPending: O, isFetching: k, refetch: A } = w(I, a),
    N,
    P,
    F,
    L,
    z,
    V;
  if (
    n[2] !== a ||
    n[3] !== S ||
    n[4] !== C ||
    n[5] !== l ||
    n[6] !== k ||
    n[7] !== O ||
    n[8] !== A ||
    n[9] !== c ||
    n[10] !== b
  ) {
    let e = S?.plugins.filter((e) => {
      let { name: t } = e;
      return t.toLocaleLowerCase().includes(b.trim().toLocaleLowerCase());
    });
    ((P = S != null && S.plugins.length > 0), (F = S?.pendingScans != null && S.pendingScans.length > 0));
    let t;
    (n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(o, {
          id: `restricted.aeon.plugins.loading`,
          defaultMessage: `Loading used plugins`,
          description: `Accessible announcement while loading plugins used by this dot`,
        })),
        (n[17] = t))
      : (t = n[17]),
      (z = t));
    let r;
    (n[18] === l
      ? (r = n[19])
      : ((r = l.formatMessage({
          id: `restricted.aeon.plugins.search`,
          defaultMessage: `Search used plugins`,
          description: `Accessible label and placeholder for searching plugins used by this dot and its subtasks`,
        })),
        (n[18] = l),
        (n[19] = r)),
      (V = r));
    let i;
    if (
      (n[20] !== a || n[21] !== C || n[22] !== F || n[23] !== A || n[24] !== c
        ? ((i =
            C == null
              ? null
              : (0, X.jsx)(m, {
                  type: `error`,
                  content: (0, X.jsx)(o, {
                    id: `restricted.aeon.plugins.loadError`,
                    defaultMessage: `Used plugins could not be loaded`,
                    description: `Error shown when loading the plugins used by a dot fails`,
                  }),
                  primaryCtaText: (0, X.jsx)(o, {
                    id: `restricted.aeon.plugins.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading plugins used by this dot`,
                  }),
                  onPrimaryCtaClick: () => {
                    F ? M(c, a) : A();
                  },
                })),
          (n[20] = a),
          (n[21] = C),
          (n[22] = F),
          (n[23] = A),
          (n[24] = c),
          (n[25] = i))
        : (i = n[25]),
      (L = i),
      (N = null),
      !P && (O || k))
    ) {
      let e;
      (n[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(j, { loadingLabel: z })), (n[26] = e))
        : (e = n[26]),
        (N = e));
    } else if (e != null && e.length > 0)
      N = (0, X.jsx)(`div`, {
        className: `flex flex-col gap-0.5 select-none`,
        role: `list`,
        children: e.map(q),
      });
    else if (C == null || P) {
      let e;
      (n[27] === P
        ? (e = n[28])
        : ((e = (0, X.jsx)(R, {
            children: P
              ? (0, X.jsx)(o, {
                  id: `restricted.aeon.plugins.noSearchResults`,
                  defaultMessage: `No used plugins match your search`,
                  description: `Empty state when this dot has used plugins but none match the current search`,
                })
              : (0, X.jsx)(o, {
                  id: `restricted.aeon.plugins.empty`,
                  defaultMessage: `No used plugins found`,
                  description: `Empty state when no plugin usage was found in the activity loaded so far for this dot; keep dot untranslated`,
                }),
          })),
          (n[27] = P),
          (n[28] = e)),
        (N = e));
    }
    ((n[2] = a),
      (n[3] = S),
      (n[4] = C),
      (n[5] = l),
      (n[6] = k),
      (n[7] = O),
      (n[8] = A),
      (n[9] = c),
      (n[10] = b),
      (n[11] = N),
      (n[12] = P),
      (n[13] = F),
      (n[14] = L),
      (n[15] = z),
      (n[16] = V));
  } else ((N = n[11]), (P = n[12]), (F = n[13]), (L = n[14]), (z = n[15]), (V = n[16]));
  let H;
  n[29] !== u || n[30] !== v || n[31] !== c
    ? ((H = v
        ? (0, X.jsx)(t, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => T(c, u, v, p.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, g),
            children: (0, X.jsx)(o, {
              id: `restricted.aeon.plugins.connect`,
              defaultMessage: `Connect`,
              description: `Button that opens the plugin directory to connect more plugins from a dot's used plugins pane`,
            }),
          })
        : null),
      (n[29] = u),
      (n[30] = v),
      (n[31] = c),
      (n[32] = H))
    : (H = n[32]);
  let U;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, X.jsx)(o, {
        id: `restricted.aeon.plugins.tabTitle`,
        defaultMessage: `Used plugins`,
        description: `Title of the tab listing plugins used by this dot and its subtasks`,
      })),
      (n[33] = U))
    : (U = n[33]);
  let W;
  n[34] !== y || n[35] !== V || n[36] !== b
    ? ((W = { id: y, label: V, placeholder: V, searchQuery: b, onSearchQueryChange: x }),
      (n[34] = y),
      (n[35] = V),
      (n[36] = b),
      (n[37] = W))
    : (W = n[37]);
  let K;
  n[38] !== a || n[39] !== F || n[40] !== k || n[41] !== c
    ? ((K = F
        ? (0, X.jsx)(t, {
            color: `ghost`,
            disabled: k,
            onClick: () => M(c, a),
            children: (0, X.jsx)(o, {
              id: `restricted.aeon.plugins.loadMoreHistory`,
              defaultMessage: `Search older activity`,
              description: `Button to continue searching older activity for additional plugins used by this dot and its subtasks; keep dot untranslated`,
            }),
          })
        : null),
      (n[38] = a),
      (n[39] = F),
      (n[40] = k),
      (n[41] = c),
      (n[42] = K))
    : (K = n[42]);
  let Z;
  n[43] !== P || n[44] !== k || n[45] !== z
    ? ((Z =
        k && P
          ? (0, X.jsx)(G.Item, {
              tone: `muted`,
              role: `status`,
              children: (0, X.jsx)(G.ItemLabel, { children: z }),
            })
          : null),
      (n[43] = P),
      (n[44] = k),
      (n[45] = z),
      (n[46] = Z))
    : (Z = n[46]);
  let Q;
  return (
    n[47] !== N || n[48] !== L || n[49] !== H || n[50] !== W || n[51] !== K || n[52] !== Z
      ? ((Q = (0, X.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: (0, X.jsxs)(D, {
            headerPlacement: `toolbar`,
            searchToolbar: H,
            title: U,
            search: W,
            children: [L, N, K, Z],
          }),
        })),
        (n[47] = N),
        (n[48] = L),
        (n[49] = H),
        (n[50] = W),
        (n[51] = K),
        (n[52] = Z),
        (n[53] = Q))
      : (Q = n[53]),
    Q
  );
}
function q(e) {
  return (0, X.jsx)(
    `div`,
    {
      role: `listitem`,
      children: (0, X.jsxs)(G.Item, {
        children: [
          (0, X.jsx)(G.ItemLeading, {
            children: (0, X.jsx)(z, {
              className: `icon-sm shrink-0 object-contain`,
              alt: e.name,
              knownAppId: k({ ...e, pluginDisplayNames: [] }),
              fallback: (0, X.jsx)(n, {}),
            }),
          }),
          (0, X.jsx)(G.ItemLabel, { children: e.name }),
        ],
      }),
    },
    e.id,
  );
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    ((J = b()),
      l(),
      c(),
      (Y = C()),
      _(),
      h(),
      N(),
      L(),
      a(),
      y(),
      u(),
      F(),
      O(),
      H(),
      V(),
      x(),
      v(),
      A(),
      U(),
      W(),
      P(),
      (X = S()));
  }))();
}
Z();
export { K as AeonPluginsTabContent };
//# sourceMappingURL=tab-content-f1217ea7f525.js.map
