import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  Qst as s,
  Rrt as c,
  TY as l,
  USt as u,
  W9 as d,
  XOt as f,
  Y3 as p,
  YH as m,
  Yst as h,
  Z3 as g,
  ZSt as _,
  Zst as v,
  iCt as y,
  nCt as b,
  okt as x,
  tkt as S,
  vD as C,
  yD as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bir as T,
  Clt as E,
  Ipr as D,
  LIr as O,
  Llt as k,
  Lpr as A,
  M6t as j,
  N6t as M,
  SI as N,
  Slt as P,
  Vir as F,
  _p as I,
  gp as L,
  jIr as R,
  m4 as z,
  p4 as B,
  xI as V,
  zir as H,
  zlt as U,
} from "./app-initial-ad16eaadf81f.js";
import { n as W, t as G } from "./thread-summary-panel-components-10c7926d4688.js";
function K(e) {
  let n = (0, J.c)(54),
    { conversationId: r } = e,
    i = t(s),
    a = x(),
    o = u(),
    c = y(R),
    l;
  n[0] === c ? (l = n[1]) : ((l = { enabled: c, hostId: h }), (n[0] = c), (n[1] = l));
  let f = A(l),
    m = (0, Y.useId)(),
    [g, _] = (0, Y.useState)(``),
    { data: v, error: w, isPending: T, isFetching: E, refetch: D } = b(H, r),
    O,
    j,
    M,
    N,
    I,
    B;
  if (
    n[2] !== r ||
    n[3] !== v ||
    n[4] !== w ||
    n[5] !== a ||
    n[6] !== E ||
    n[7] !== T ||
    n[8] !== D ||
    n[9] !== i ||
    n[10] !== g
  ) {
    let e = v?.plugins.filter((e) => {
      let { name: t } = e;
      return t.toLocaleLowerCase().includes(g.trim().toLocaleLowerCase());
    });
    ((j = v != null && v.plugins.length > 0), (M = v?.pendingScans != null && v.pendingScans.length > 0));
    let t;
    (n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsx)(S, {
          id: `restricted.aeon.plugins.loading`,
          defaultMessage: `Loading used plugins`,
          description: `Accessible announcement while loading plugins used by this dot`,
        })),
        (n[17] = t))
      : (t = n[17]),
      (I = t));
    let o;
    (n[18] === a
      ? (o = n[19])
      : ((o = a.formatMessage({
          id: `restricted.aeon.plugins.search`,
          defaultMessage: `Search used plugins`,
          description: `Accessible label and placeholder for searching plugins used by this dot and its subtasks`,
        })),
        (n[18] = a),
        (n[19] = o)),
      (B = o));
    let s;
    if (
      (n[20] !== r || n[21] !== w || n[22] !== M || n[23] !== D || n[24] !== i
        ? ((s =
            w == null
              ? null
              : (0, X.jsx)(C, {
                  type: `error`,
                  content: (0, X.jsx)(S, {
                    id: `restricted.aeon.plugins.loadError`,
                    defaultMessage: `Used plugins could not be loaded`,
                    description: `Error shown when loading the plugins used by a dot fails`,
                  }),
                  primaryCtaText: (0, X.jsx)(S, {
                    id: `restricted.aeon.plugins.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading plugins used by this dot`,
                  }),
                  onPrimaryCtaClick: () => {
                    M ? F(i, r) : D();
                  },
                })),
          (n[20] = r),
          (n[21] = w),
          (n[22] = M),
          (n[23] = D),
          (n[24] = i),
          (n[25] = s))
        : (s = n[25]),
      (N = s),
      (O = null),
      !j && (T || E))
    ) {
      let e;
      (n[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(P, { loadingLabel: I })), (n[26] = e))
        : (e = n[26]),
        (O = e));
    } else if (e != null && e.length > 0)
      O = (0, X.jsx)(`div`, {
        className: `flex flex-col gap-0.5 select-none`,
        role: `list`,
        children: e.map(q),
      });
    else if (w == null || j) {
      let e;
      (n[27] === j
        ? (e = n[28])
        : ((e = (0, X.jsx)(L, {
            children: j
              ? (0, X.jsx)(S, {
                  id: `restricted.aeon.plugins.noSearchResults`,
                  defaultMessage: `No used plugins match your search`,
                  description: `Empty state when this dot has used plugins but none match the current search`,
                })
              : (0, X.jsx)(S, {
                  id: `restricted.aeon.plugins.empty`,
                  defaultMessage: `No used plugins found`,
                  description: `Empty state when no plugin usage was found in the activity loaded so far for this dot; keep dot untranslated`,
                }),
          })),
          (n[27] = j),
          (n[28] = e)),
        (O = e));
    }
    ((n[2] = r),
      (n[3] = v),
      (n[4] = w),
      (n[5] = a),
      (n[6] = E),
      (n[7] = T),
      (n[8] = D),
      (n[9] = i),
      (n[10] = g),
      (n[11] = O),
      (n[12] = j),
      (n[13] = M),
      (n[14] = N),
      (n[15] = I),
      (n[16] = B));
  } else ((O = n[11]), (j = n[12]), (M = n[13]), (N = n[14]), (I = n[15]), (B = n[16]));
  let V;
  n[29] !== o || n[30] !== f || n[31] !== i
    ? ((V = f
        ? (0, X.jsx)(p, {
            color: `ghost`,
            size: `toolbar`,
            onClick: () => z(i, o, f, d.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, h),
            children: (0, X.jsx)(S, {
              id: `restricted.aeon.plugins.connect`,
              defaultMessage: `Connect`,
              description: `Button that opens the plugin directory to connect more plugins from a dot's used plugins pane`,
            }),
          })
        : null),
      (n[29] = o),
      (n[30] = f),
      (n[31] = i),
      (n[32] = V))
    : (V = n[32]);
  let U;
  n[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, X.jsx)(S, {
        id: `restricted.aeon.plugins.tabTitle`,
        defaultMessage: `Used plugins`,
        description: `Title of the tab listing plugins used by this dot and its subtasks`,
      })),
      (n[33] = U))
    : (U = n[33]);
  let W;
  n[34] !== m || n[35] !== B || n[36] !== g
    ? ((W = { id: m, label: B, placeholder: B, searchQuery: g, onSearchQueryChange: _ }),
      (n[34] = m),
      (n[35] = B),
      (n[36] = g),
      (n[37] = W))
    : (W = n[37]);
  let K;
  n[38] !== r || n[39] !== M || n[40] !== E || n[41] !== i
    ? ((K = M
        ? (0, X.jsx)(p, {
            color: `ghost`,
            disabled: E,
            onClick: () => F(i, r),
            children: (0, X.jsx)(S, {
              id: `restricted.aeon.plugins.loadMoreHistory`,
              defaultMessage: `Search older activity`,
              description: `Button to continue searching older activity for additional plugins used by this dot and its subtasks; keep dot untranslated`,
            }),
          })
        : null),
      (n[38] = r),
      (n[39] = M),
      (n[40] = E),
      (n[41] = i),
      (n[42] = K))
    : (K = n[42]);
  let Z;
  n[43] !== j || n[44] !== E || n[45] !== I
    ? ((Z =
        E && j
          ? (0, X.jsx)(G.Item, {
              tone: `muted`,
              role: `status`,
              children: (0, X.jsx)(G.ItemLabel, { children: I }),
            })
          : null),
      (n[43] = j),
      (n[44] = E),
      (n[45] = I),
      (n[46] = Z))
    : (Z = n[46]);
  let Q;
  return (
    n[47] !== O || n[48] !== N || n[49] !== V || n[50] !== W || n[51] !== K || n[52] !== Z
      ? ((Q = (0, X.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: (0, X.jsxs)(k, {
            headerPlacement: `toolbar`,
            searchToolbar: V,
            title: U,
            search: W,
            children: [N, O, K, Z],
          }),
        })),
        (n[47] = O),
        (n[48] = N),
        (n[49] = V),
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
            children: (0, X.jsx)(j, {
              className: `icon-sm shrink-0 object-contain`,
              alt: e.name,
              knownAppId: V({ ...e, pluginDisplayNames: [] }),
              fallback: (0, X.jsx)(m, {}),
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
    ((J = o()),
      c(),
      _(),
      (Y = r()),
      f(),
      a(),
      O(),
      M(),
      w(),
      g(),
      l(),
      I(),
      U(),
      E(),
      D(),
      n(),
      v(),
      B(),
      N(),
      W(),
      T(),
      (X = i()));
  }))();
}
Z();
export { K as AeonPluginsTabContent };
//# sourceMappingURL=tab-content-33908906ee59.js.map
