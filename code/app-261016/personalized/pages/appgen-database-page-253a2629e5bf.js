import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  DB as r,
  FBt as i,
  KSt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  NSt as l,
  OB as u,
  PBt as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  b2 as h,
  c3 as g,
  ck as _,
  e6 as v,
  ew as y,
  okt as b,
  rk as x,
  s3 as S,
  tk as C,
  tkt as w,
  y2 as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  FF as E,
  Gvn as ee,
  Kvn as te,
  RF as D,
  Rvn as O,
  Wvn as ne,
  cA as k,
  sA as A,
  zvn as j,
} from "./app-initial-ad16eaadf81f.js";
import {
  f as M,
  l as N,
  m as P,
  n as F,
  p as I,
  s as L,
  t as R,
  u as re,
} from "./appgen-site-detail-layout-8ded3439c229.js";
function z(e) {
  let t = (0, W.c)(59),
    { initialPageOffset: r, projectId: i } = e,
    a = r === void 0 ? 0 : r,
    [o, s] = (0, G.useState)(null),
    [c, l] = (0, G.useState)(null),
    u;
  t[0] === a
    ? (u = t[1])
    : ((u = () => ({ key: null, offsets: a === 0 ? [0] : [0, a] })), (t[0] = a), (t[1] = u));
  let [d, f] = (0, G.useState)(u),
    { data: p, isError: m, isFetching: h, isLoading: g, isRefetching: _ } = ne(i, o),
    v = ee(i),
    y = p?.selected_binding_name ?? null,
    b,
    x;
  t[2] !== p?.tables || t[3] !== i || t[4] !== y || t[5] !== c
    ? ((b = p?.tables.find((e) => e === c) ?? p?.tables[0] ?? null),
      (x = y == null || b == null ? null : JSON.stringify([i, y, b])),
      (t[2] = p?.tables),
      (t[3] = i),
      (t[4] = y),
      (t[5] = c),
      (t[6] = b),
      (t[7] = x))
    : ((b = t[6]), (x = t[7]));
  let S = x;
  if (d.key !== S) {
    let e;
    (t[8] !== d.key || t[9] !== d.offsets
      ? ((e = d.key == null ? d.offsets : [0]), (t[8] = d.key), (t[9] = d.offsets), (t[10] = e))
      : (e = t[10]),
      f({ key: S, offsets: e }));
  }
  let C;
  t[11] !== d.key || t[12] !== d.offsets || t[13] !== S
    ? ((C = d.key === S || d.key == null ? d.offsets : [0]),
      (t[11] = d.key),
      (t[12] = d.offsets),
      (t[13] = S),
      (t[14] = C))
    : (C = t[14]);
  let w = C,
    T;
  t[15] === w ? (T = t[16]) : ((T = w.at(-1) ?? 0), (t[15] = w), (t[16] = T));
  let E = T,
    D;
  t[17] !== E || t[18] !== i || t[19] !== y || t[20] !== b
    ? ((D = { bindingName: y, offset: E, projectId: i, tableName: b }),
      (t[17] = E),
      (t[18] = i),
      (t[19] = y),
      (t[20] = b),
      (t[21] = D))
    : (D = t[21]);
  let {
      data: O,
      isError: k,
      isFetching: j,
      isLoading: M,
      isPlaceholderData: N,
      isRefetching: P,
      refetch: F,
    } = te(D),
    I = h || j,
    L = _ || (P && !N),
    R;
  t[22] !== o || t[23] !== v
    ? ((R = () => {
        v(o);
      }),
      (t[22] = o),
      (t[23] = v),
      (t[24] = R))
    : (R = t[24]);
  let z = R,
    B;
  t[25] === v
    ? (B = t[26])
    : ((B = () => {
        (s(null), l(null), f({ key: null, offsets: [0] }), v(null));
      }),
      (t[25] = v),
      (t[26] = B));
  let V = B,
    H;
  t[27] === S
    ? (H = t[28])
    : ((H = () => {
        f((e) => {
          let t = e.key === S ? e.offsets : [0];
          return { key: S, offsets: t.length > 1 ? t.slice(0, -1) : t };
        });
      }),
      (t[27] = S),
      (t[28] = H));
  let U = H,
    q;
  t[29] === S
    ? (q = t[30])
    : ((q = (e) => {
        f((t) => {
          let n = t.key === S ? t.offsets : [0];
          return { key: S, offsets: [...n, e] };
        });
      }),
      (t[29] = S),
      (t[30] = q));
  let J = q,
    Y;
  t[31] !== I || t[32] !== L || t[33] !== z
    ? ((Y = (0, K.jsx)(re, { disabled: I, isRefreshing: L, onRefresh: z })),
      (t[31] = I),
      (t[32] = L),
      (t[33] = z),
      (t[34] = Y))
    : (Y = t[34]);
  let X = o == null ? void 0 : V,
    Z;
  t[35] !== J ||
  t[36] !== U ||
  t[37] !== k ||
  t[38] !== j ||
  t[39] !== M ||
  t[40] !== N ||
  t[41] !== p ||
  t[42] !== w.length ||
  t[43] !== F ||
  t[44] !== O ||
  t[45] !== y ||
  t[46] !== b
    ? ((Z =
        p == null
          ? null
          : (0, K.jsx)(ae, {
              overview: p,
              selectedBindingName: y,
              selectedTable: b,
              onBindingChange: (e) => {
                (s(e), l(null), f({ key: null, offsets: [0] }));
              },
              onTableChange: (e) => {
                (l(e), f({ key: null, offsets: [0] }));
              },
              children: (0, K.jsx)(oe, {
                canGoPrevious: w.length > 1,
                isError: k,
                isFetching: j,
                isLoading: M,
                isPlaceholderData: N,
                rows: O,
                selectedTable: b,
                onNext: J,
                onPrevious: U,
                onRetry: () => void F(),
              }),
            })),
      (t[35] = J),
      (t[36] = U),
      (t[37] = k),
      (t[38] = j),
      (t[39] = M),
      (t[40] = N),
      (t[41] = p),
      (t[42] = w.length),
      (t[43] = F),
      (t[44] = O),
      (t[45] = y),
      (t[46] = b),
      (t[47] = Z))
    : (Z = t[47]);
  let Q;
  t[48] !== m || t[49] !== h || t[50] !== g || t[51] !== p || t[52] !== z || t[53] !== X || t[54] !== Z
    ? ((Q = (0, K.jsx)(A.Content, {
        children: (0, K.jsx)(n, {
          children: (0, K.jsx)(ie, {
            isError: m,
            isFetching: h,
            isLoading: g,
            overview: p,
            onRetry: z,
            onUseDefaultBinding: X,
            children: Z,
          }),
        }),
      })),
      (t[48] = m),
      (t[49] = h),
      (t[50] = g),
      (t[51] = p),
      (t[52] = z),
      (t[53] = X),
      (t[54] = Z),
      (t[55] = Q))
    : (Q = t[55]);
  let $;
  return (
    t[56] !== Y || t[57] !== Q
      ? (($ = (0, K.jsxs)(A, { children: [Y, Q] })), (t[56] = Y), (t[57] = Q), (t[58] = $))
      : ($ = t[58]),
    $
  );
}
function ie(e) {
  let t = (0, W.c)(16),
    {
      children: n,
      isError: r,
      isFetching: i,
      isLoading: a,
      overview: o,
      onRetry: s,
      onUseDefaultBinding: c,
    } = e;
  if (a) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, K.jsx)(L, {})), (t[0] = e)) : (e = t[0]),
      e
    );
  }
  if (r || o == null) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(`div`, {
          className: `text-sm font-medium text-default`,
          children: (0, K.jsx)(w, {
            id: `appgenSettings.database.error.title`,
            defaultMessage: `Unable to load database`,
            description: `Error title when Site database metadata cannot be loaded`,
          }),
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, K.jsx)(`div`, {
          className: `max-w-sm text-xs text-tertiary`,
          children: (0, K.jsx)(w, {
            id: `appgenSettings.database.error.description`,
            defaultMessage: `Try refreshing to load the latest data`,
            description: `Error description when Site database metadata cannot be loaded`,
          }),
        })),
        (t[2] = n))
      : (n = t[2]);
    let r;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, K.jsx)(w, {
          id: `appgenSettings.database.retry`,
          defaultMessage: `Try again`,
          description: `Button label for retrying a Site database request`,
        })),
        (t[3] = r))
      : (r = t[3]);
    let a;
    t[4] !== i || t[5] !== s
      ? ((a = (0, K.jsx)(p, {
          color: `outline`,
          loading: i,
          size: `toolbar`,
          type: `button`,
          onClick: s,
          children: r,
        })),
        (t[4] = i),
        (t[5] = s),
        (t[6] = a))
      : (a = t[6]);
    let o;
    t[7] === c
      ? (o = t[8])
      : ((o =
          c == null
            ? null
            : (0, K.jsx)(p, {
                color: `outline`,
                size: `toolbar`,
                type: `button`,
                onClick: c,
                children: (0, K.jsx)(w, {
                  id: `appgenSettings.database.useDefaultBinding`,
                  defaultMessage: `Use default database`,
                  description: `Button label for returning to the default Site database`,
                }),
              })),
        (t[7] = c),
        (t[8] = o));
    let l;
    return (
      t[9] !== a || t[10] !== o
        ? ((l = (0, K.jsx)(H, {
            children: (0, K.jsxs)(`div`, {
              className: `flex flex-col items-center gap-3 text-center`,
              children: [
                e,
                n,
                (0, K.jsxs)(`div`, { className: `flex items-center gap-2`, children: [a, o] }),
              ],
            }),
          })),
          (t[9] = a),
          (t[10] = o),
          (t[11] = l))
        : (l = t[11]),
      l
    );
  }
  if (o.bindings.length === 0) {
    let e;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(`div`, {
          className: `text-sm font-medium text-default`,
          children: (0, K.jsx)(w, {
            id: `appgenSettings.database.noBinding.title`,
            defaultMessage: `No database connected`,
            description: `Empty state title when the live Site has no database`,
          }),
        })),
        (t[12] = e))
      : (e = t[12]);
    let n;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, K.jsx)(H, {
            children: (0, K.jsxs)(`div`, {
              className: `flex max-w-md flex-col items-center gap-1.5 text-center`,
              children: [
                e,
                (0, K.jsx)(`div`, {
                  className: `text-xs text-tertiary`,
                  children: (0, K.jsx)(w, {
                    id: `appgenSettings.database.noBinding.description`,
                    defaultMessage: `This site doesn't have a database yet`,
                    description: `Empty state description when the live Site has no database`,
                  }),
                }),
              ],
            }),
          })),
          (t[13] = n))
        : (n = t[13]),
      n
    );
  }
  let l;
  return (
    t[14] === n ? (l = t[15]) : ((l = (0, K.jsx)(K.Fragment, { children: n })), (t[14] = n), (t[15] = l)),
    l
  );
}
function ae(e) {
  let t = (0, W.c)(16),
    {
      children: n,
      overview: r,
      selectedBindingName: i,
      selectedTable: a,
      onBindingChange: o,
      onTableChange: c,
    } = e,
    l = b(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, K.jsx)(`span`, {
        className: `text-xs font-medium text-default`,
        children: (0, K.jsx)(w, {
          id: `appgenSettings.database.connected`,
          defaultMessage: `Connected`,
          description: `Status label for a connected Site database`,
        }),
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] !== l || t[2] !== o || t[3] !== r.bindings || t[4] !== i
    ? ((d =
        r.bindings.length > 1
          ? (0, K.jsxs)(`div`, {
              className: `flex max-w-full min-w-0 items-center gap-2 text-xs text-tertiary`,
              children: [
                (0, K.jsx)(`span`, {
                  className: `shrink-0`,
                  children: (0, K.jsx)(w, {
                    id: `appgenSettings.database.binding`,
                    defaultMessage: `Database`,
                    description: `Label for selecting a Site database`,
                  }),
                }),
                (0, K.jsx)(C, {
                  align: `end`,
                  contentWidth: `menuBounded`,
                  triggerButton: (0, K.jsx)(E, {
                    "aria-label": l.formatMessage({
                      id: `appgenSettings.database.binding.ariaLabel`,
                      defaultMessage: `Select database`,
                      description: `Accessible label for selecting a Site database`,
                    }),
                    className: `min-w-0`,
                    contentClassName: `truncate`,
                    children: (0, K.jsx)(`span`, { className: `truncate font-mono`, children: i }),
                  }),
                  children: r.bindings.map((e) =>
                    (0, K.jsx)(
                      x.Item,
                      { rightIconAsset: e === i ? T : void 0, onSelect: () => o(e), children: e },
                      e,
                    ),
                  ),
                }),
              ],
            })
          : null),
      (t[1] = l),
      (t[2] = o),
      (t[3] = r.bindings),
      (t[4] = i),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === d
    ? (f = t[7])
    : ((f = (0, K.jsxs)(`div`, {
        className: `flex min-h-11 flex-wrap items-center justify-between gap-2 border-b border-default px-3 py-2`,
        children: [u, d],
      })),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] !== n || t[9] !== c || t[10] !== r.tables || t[11] !== a
    ? ((p =
        r.tables.length === 0
          ? (0, K.jsx)(H, {
              children: (0, K.jsxs)(`div`, {
                className: `flex flex-col items-center gap-1.5 text-center`,
                children: [
                  (0, K.jsx)(`div`, {
                    className: `text-sm font-medium text-default`,
                    children: (0, K.jsx)(w, {
                      id: `appgenSettings.database.noTables.title`,
                      defaultMessage: `Database connected`,
                      description: `Empty state title when a Site database has no data`,
                    }),
                  }),
                  (0, K.jsx)(`div`, {
                    className: `text-xs text-tertiary`,
                    children: (0, K.jsx)(w, {
                      id: `appgenSettings.database.noTables.description`,
                      defaultMessage: `No data is available yet`,
                      description: `Empty state description when a Site database has no data`,
                    }),
                  }),
                ],
              }),
            })
          : (0, K.jsxs)(`div`, {
              className: `flex min-h-72 min-w-0 max-sm:flex-col`,
              children: [
                (0, K.jsxs)(`div`, {
                  className: `flex w-44 min-w-0 shrink-0 flex-col border-r border-default max-sm:max-h-40 max-sm:w-full max-sm:border-r-0 max-sm:border-b`,
                  children: [
                    (0, K.jsx)(`div`, {
                      className: `px-3 pt-3 pb-1 text-xs font-medium tracking-wide text-tertiary uppercase`,
                      children: (0, K.jsx)(w, {
                        id: `appgenSettings.database.tables`,
                        defaultMessage: `Tables`,
                        description: `Heading above the list of Site database tables`,
                      }),
                    }),
                    (0, K.jsx)(`div`, {
                      className: `flex min-h-0 flex-1 flex-col gap-0.5 overflow-y-auto p-1.5`,
                      children: r.tables.map((e) => {
                        let t = e === a;
                        return (0, K.jsx)(
                          `button`,
                          {
                            "aria-pressed": t,
                            className: s(
                              `cursor-interaction flex min-w-0 items-center justify-between gap-2 rounded-md px-2 py-1.5 text-start text-xs hover:bg-primary-ghost-hover`,
                              t ? `bg-primary-ghost-hover text-default` : `text-secondary`,
                            ),
                            type: `button`,
                            onClick: () => c(e),
                            children: (0, K.jsx)(`span`, { className: `truncate font-mono`, children: e }),
                          },
                          e,
                        );
                      }),
                    }),
                  ],
                }),
                (0, K.jsx)(`div`, { className: `flex min-w-0 flex-1 flex-col`, children: n }),
              ],
            })),
      (t[8] = n),
      (t[9] = c),
      (t[10] = r.tables),
      (t[11] = a),
      (t[12] = p))
    : (p = t[12]);
  let m;
  return (
    t[13] !== f || t[14] !== p
      ? ((m = (0, K.jsxs)(`div`, { className: `flex min-w-0 flex-col`, children: [f, p] })),
        (t[13] = f),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
function oe(e) {
  let n = (0, W.c)(22),
    {
      canGoPrevious: i,
      isError: a,
      isFetching: o,
      isLoading: s,
      isPlaceholderData: c,
      rows: l,
      selectedTable: u,
      onNext: d,
      onPrevious: f,
      onRetry: m,
    } = e,
    h;
  n[0] === u
    ? (h = n[1])
    : ((h = (0, K.jsx)(`span`, {
        className: `truncate font-mono text-xs font-medium text-default`,
        children: u,
      })),
      (n[0] = u),
      (n[1] = h));
  let g;
  n[2] !== o || n[3] !== c || n[4] !== l
    ? ((g =
        o && l != null
          ? (0, K.jsxs)(`span`, {
              "aria-live": `polite`,
              className: `flex shrink-0 items-center gap-1.5 text-xs text-tertiary`,
              role: `status`,
              children: [
                (0, K.jsx)(t, { className: `icon-2xs` }),
                c
                  ? (0, K.jsx)(w, {
                      id: `appgenSettings.database.rows.pageLoading`,
                      defaultMessage: `Loading page…`,
                      description: `Loading status while the next Site database table page is being fetched`,
                    })
                  : (0, K.jsx)(w, {
                      id: `appgenSettings.database.rows.refreshing`,
                      defaultMessage: `Refreshing data…`,
                      description: `Loading status while Site database data is being refreshed`,
                    }),
              ],
            })
          : null),
      (n[2] = o),
      (n[3] = c),
      (n[4] = l),
      (n[5] = g))
    : (g = n[5]);
  let _;
  n[6] !== h || n[7] !== g
    ? ((_ = (0, K.jsxs)(`div`, {
        className: `flex min-h-11 items-center justify-between gap-2 border-b border-default px-3 py-2`,
        children: [h, g],
      })),
      (n[6] = h),
      (n[7] = g),
      (n[8] = _))
    : (_ = n[8]);
  let v;
  n[9] !== i ||
  n[10] !== a ||
  n[11] !== o ||
  n[12] !== s ||
  n[13] !== c ||
  n[14] !== d ||
  n[15] !== f ||
  n[16] !== m ||
  n[17] !== l
    ? ((v = s
        ? (0, K.jsx)(L, {
            children: (0, K.jsx)(w, {
              id: `appgenSettings.database.rows.loading`,
              defaultMessage: `Loading data…`,
              description: `Loading status while Site database data is being loaded`,
            }),
          })
        : a || l == null
          ? (0, K.jsx)(H, {
              children: (0, K.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3 text-center`,
                children: [
                  (0, K.jsx)(`div`, {
                    className: `text-sm text-secondary`,
                    children: (0, K.jsx)(w, {
                      id: `appgenSettings.database.rows.error`,
                      defaultMessage: `Unable to load data`,
                      description: `Error message when Site database data cannot be loaded`,
                    }),
                  }),
                  (0, K.jsxs)(`div`, {
                    className: `flex items-center gap-2`,
                    children: [
                      i
                        ? (0, K.jsxs)(p, {
                            color: `outline`,
                            size: `toolbar`,
                            type: `button`,
                            onClick: f,
                            children: [
                              (0, K.jsx)(r, { asset: S }),
                              (0, K.jsx)(w, {
                                id: `appgenSettings.database.pagination.previous`,
                                defaultMessage: `Previous page`,
                                description: `Label for the previous Site database rows page`,
                              }),
                            ],
                          })
                        : null,
                      (0, K.jsx)(p, {
                        color: `outline`,
                        loading: o,
                        size: `toolbar`,
                        type: `button`,
                        onClick: m,
                        children: (0, K.jsx)(w, {
                          id: `appgenSettings.database.retry`,
                          defaultMessage: `Try again`,
                          description: `Button label for retrying a Site database request`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          : (0, K.jsxs)(K.Fragment, {
              children: [
                l.rows.length === 0
                  ? (0, K.jsx)(H, {
                      children: (0, K.jsx)(`div`, {
                        className: `text-sm text-tertiary`,
                        children:
                          l.offset === 0
                            ? (0, K.jsx)(w, {
                                id: `appgenSettings.database.rows.empty`,
                                defaultMessage: `This table is empty`,
                                description: `Empty state for a Site database table`,
                              })
                            : (0, K.jsx)(w, {
                                id: `appgenSettings.database.rows.emptyPage`,
                                defaultMessage: `This page is empty`,
                                description: `Empty state for a stale Site database page`,
                              }),
                      }),
                    })
                  : (0, K.jsx)(`div`, {
                      className: `min-h-0 flex-1 overflow-auto`,
                      children: (0, K.jsxs)(`table`, {
                        className: `w-full min-w-max border-collapse text-start text-xs`,
                        children: [
                          (0, K.jsx)(`thead`, {
                            className: `sticky top-0 z-10 bg-primary-soft-alpha`,
                            children: (0, K.jsx)(`tr`, { children: l.columns.map(B) }),
                          }),
                          (0, K.jsx)(`tbody`, {
                            children: l.rows.map((e, t) =>
                              (0, K.jsx)(
                                `tr`,
                                {
                                  className: `border-b border-border/70 last:border-b-0`,
                                  children: l.columns.map((t) =>
                                    (0, K.jsx)(
                                      `td`,
                                      {
                                        className: `max-w-80 px-3 py-2 align-top font-mono break-all whitespace-pre-wrap text-secondary`,
                                        children: (0, K.jsx)(U, { value: e[t] }),
                                      },
                                      t,
                                    ),
                                  ),
                                },
                                l.offset + t,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
                l.rows.length > 0 || l.offset > 0
                  ? (0, K.jsx)(V, {
                      canGoPrevious: i,
                      isPlaceholderData: c,
                      rows: l,
                      onNext: () => d(O(l)),
                      onPrevious: f,
                    })
                  : null,
              ],
            })),
      (n[9] = i),
      (n[10] = a),
      (n[11] = o),
      (n[12] = s),
      (n[13] = c),
      (n[14] = d),
      (n[15] = f),
      (n[16] = m),
      (n[17] = l),
      (n[18] = v))
    : (v = n[18]);
  let y;
  return (
    n[19] !== _ || n[20] !== v
      ? ((y = (0, K.jsxs)(K.Fragment, { children: [_, v] })), (n[19] = _), (n[20] = v), (n[21] = y))
      : (y = n[21]),
    y
  );
}
function B(e) {
  return (0, K.jsx)(
    `th`,
    {
      className: `border-b border-default px-3 py-2 text-start font-mono font-medium text-secondary`,
      scope: `col`,
      children: e,
    },
    e,
  );
}
function V(e) {
  let t = (0, W.c)(23),
    { canGoPrevious: n, isPlaceholderData: i, rows: a, onNext: o, onPrevious: s } = e,
    c = b(),
    l;
  t[0] !== a.offset || t[1] !== a.rows.length
    ? ((l =
        a.rows.length > 0
          ? (0, K.jsx)(`span`, {
              className: `text-xs text-tertiary tabular-nums`,
              children: (0, K.jsx)(w, {
                id: `appgenSettings.database.pagination.summary`,
                defaultMessage: `Showing {start}–{end}`,
                description: `Pagination summary for Site database data`,
                values: { start: a.offset + 1, end: a.offset + a.rows.length },
              }),
            })
          : null),
      (t[0] = a.offset),
      (t[1] = a.rows.length),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === c
    ? (u = t[4])
    : ((u = c.formatMessage({
        id: `appgenSettings.database.pagination.previous`,
        defaultMessage: `Previous page`,
        description: `Label for the previous Site database rows page`,
      })),
      (t[3] = c),
      (t[4] = u));
  let d = !n || i,
    f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(r, { asset: S })), (t[5] = f))
    : (f = t[5]);
  let m;
  t[6] !== s || t[7] !== u || t[8] !== d
    ? ((m = (0, K.jsx)(p, {
        "aria-label": u,
        color: `ghost`,
        disabled: d,
        size: `icon`,
        type: `button`,
        uniform: !0,
        onClick: s,
        children: f,
      })),
      (t[6] = s),
      (t[7] = u),
      (t[8] = d),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === c
    ? (h = t[11])
    : ((h = c.formatMessage({
        id: `appgenSettings.database.pagination.next`,
        defaultMessage: `Next page`,
        description: `Accessible label for the next Site database rows page`,
      })),
      (t[10] = c),
      (t[11] = h));
  let g = i || !a.has_more || a.rows.length === 0,
    _;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsx)(r, { className: `rotate-180`, asset: S })), (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== o || t[14] !== h || t[15] !== g
    ? ((v = (0, K.jsx)(p, {
        "aria-label": h,
        color: `ghost`,
        disabled: g,
        size: `icon`,
        type: `button`,
        uniform: !0,
        onClick: o,
        children: _,
      })),
      (t[13] = o),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== m || t[18] !== v
    ? ((y = (0, K.jsxs)(`div`, { className: `ms-auto flex items-center gap-1`, children: [m, v] })),
      (t[17] = m),
      (t[18] = v),
      (t[19] = y))
    : (y = t[19]);
  let x;
  return (
    t[20] !== l || t[21] !== y
      ? ((x = (0, K.jsxs)(`div`, {
          className: `flex min-h-11 flex-wrap items-center justify-between gap-2 border-t border-default px-3 py-2`,
          children: [l, y],
        })),
        (t[20] = l),
        (t[21] = y),
        (t[22] = x))
      : (x = t[22]),
    x
  );
}
function H(e) {
  let t = (0, W.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(`div`, {
          className: `flex min-h-40 flex-1 items-center justify-center px-4 py-8`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function U(e) {
  let t = (0, W.c)(9),
    { value: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(`span`, {
            className: `text-tertiary italic`,
            children: (0, K.jsx)(w, {
              id: `appgenSettings.database.cell.null`,
              defaultMessage: `No value`,
              description: `Displayed value for a null Site database cell`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (typeof n == `string`) {
    let e;
    return (
      t[1] === n ? (e = t[2]) : ((e = (0, K.jsx)(K.Fragment, { children: n })), (t[1] = n), (t[2] = e)),
      e
    );
  }
  if (typeof n == `number` || typeof n == `boolean`) {
    let e = String(n),
      r;
    return (
      t[3] === e ? (r = t[4]) : ((r = (0, K.jsx)(K.Fragment, { children: e })), (t[3] = e), (t[4] = r)),
      r
    );
  }
  let r;
  t[5] === n ? (r = t[6]) : ((r = JSON.stringify(n) ?? ``), (t[5] = n), (t[6] = r));
  let i;
  return (
    t[7] === r ? (i = t[8]) : ((i = (0, K.jsx)(K.Fragment, { children: r })), (t[7] = r), (t[8] = i)),
    i
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = d()), g(), h(), c(), (G = i()), f(), m(), _(), u(), v(), k(), D(), y(), j(), M(), N(), (K = o()));
  }))();
}
function J(e) {
  let t = (0, Y.c)(8),
    { navigation: n } = e,
    r = a(),
    i = n?.projectId ?? r.projectId;
  if (i == null) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, X.jsx)(I, { navigation: n, to: `/sites` })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let o;
  t[2] === i ? (o = t[3]) : ((o = () => (0, X.jsx)(z, { projectId: i })), (t[2] = i), (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== i || t[6] !== o
      ? ((s = (0, X.jsx)(R, { navigation: n, projectId: i, selectedTab: `database`, children: o })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = d()), l(), q(), F(), P(), (X = o()));
  }))();
}
Z();
export { J as AppgenDatabasePage };
//# sourceMappingURL=appgen-database-page-253a2629e5bf.js.map
