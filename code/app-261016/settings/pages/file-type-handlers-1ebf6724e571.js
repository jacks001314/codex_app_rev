import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  LNt as a,
  PBt as o,
  Qst as s,
  XOt as c,
  Y3 as l,
  Z3 as u,
  ZSt as d,
  Zlt as f,
  ck as p,
  ew as m,
  hit as h,
  nCt as g,
  oit as _,
  rk as v,
  sct as y,
  sw as b,
  tk as x,
  tkt as S,
  uw as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bpt as w,
  Cgt as T,
  FF as E,
  G5t as D,
  Jbr as O,
  K5t as k,
  LF as A,
  QF as j,
  RF as M,
  Sgt as N,
  Sk as ee,
  Vpt as P,
  Zbr as F,
  eI as I,
  iat as L,
  mAn as R,
  oAn as z,
  oat as B,
  uAn as te,
  wgt as ne,
  xgt as V,
  xk as re,
} from "./app-initial-ad16eaadf81f.js";
import { n as ie, t as H } from "./settings-loading-row-1fcc5b514745.js";
function U() {
  let e = (0, G.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, K.jsx)(`span`, {
          className: `text-danger`,
          role: `alert`,
          children: (0, K.jsx)(S, {
            id: `settings.fileTypeHandlers.saveFailed`,
            defaultMessage: `Could not save your file handler preference`,
            description: `Error saving a file type preference`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function W(e) {
  let t = (0, G.c)(7),
    { failed: n, loading: r, isFetching: i, onRetry: a } = e;
  if (n) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(`span`, {
          role: `alert`,
          children: (0, K.jsx)(S, {
            id: `settings.fileTypeHandlers.loadFailed`,
            defaultMessage: `Couldn’t load file handlers`,
            description: `Error discovering plugin file handlers; the adjacent Retry button reloads the handlers`,
          }),
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, K.jsx)(S, {
          id: `common.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry an operation after an error`,
        })),
        (t[1] = n))
      : (n = t[1]);
    let r;
    return (
      t[2] !== i || t[3] !== a
        ? ((r = (0, K.jsx)(b, {
            label: e,
            control: (0, K.jsx)(l, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              loading: i,
              onClick: a,
              children: n,
            }),
          })),
          (t[2] = i),
          (t[3] = a),
          (t[4] = r))
        : (r = t[4]),
      r
    );
  }
  let o;
  return (
    t[5] === r
      ? (o = t[6])
      : ((o = r
          ? (0, K.jsx)(H, {
              children: (0, K.jsx)(S, {
                id: `settings.fileTypeHandlers.loading`,
                defaultMessage: `Loading file handlers`,
                description: `Loading state while discovering plugin file handlers`,
              }),
            })
          : null),
        (t[5] = r),
        (t[6] = o)),
    o
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = o()), c(), u(), ie(), C(), (K = a()));
  }))();
}
function J() {
  let e = (0, X.c)(32),
    { selectedHostId: n } = B(),
    r = g(te, n),
    { isPending: i, isError: a, isFetching: o, data: s, refetch: c } = g(F, n),
    l = g(R, n),
    u;
  e[0] !== s?.data || e[1] !== l?.isError || e[2] !== a
    ? ((u = a || !!l?.isError || !!s?.data.some(Y)),
      (e[0] = s?.data),
      (e[1] = l?.isError),
      (e[2] = a),
      (e[3] = u))
    : (u = e[3]);
  let d = u,
    f = i || !!l?.isLoading,
    p,
    m,
    h,
    _,
    v;
  e[4] !== r || e[5] !== n
    ? ((m = [...new Set(r.flatMap(se).filter(oe))].sort(ae)),
      (p = j),
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((h = (0, Q.jsx)(A, { slug: `file-type-handlers` })),
          (_ = (0, Q.jsx)(S, {
            id: `settings.fileTypeHandlers.subtitle`,
            defaultMessage: `Choose what opens each file type in ChatGPT`,
            description: `Description of choosing the viewer for each file type in ChatGPT`,
          })),
          (e[11] = h),
          (e[12] = _))
        : ((h = e[11]), (_ = e[12])),
      (v =
        m.length > 0
          ? (0, Q.jsx)(t, {
              children: m.map((e) => (0, Q.jsx)(le, { hostId: n, extension: e, catalog: r }, e)),
            })
          : null),
      (e[4] = r),
      (e[5] = n),
      (e[6] = p),
      (e[7] = m),
      (e[8] = h),
      (e[9] = _),
      (e[10] = v))
    : ((p = e[6]), (m = e[7]), (h = e[8]), (_ = e[9]), (v = e[10]));
  let y = f && m.length === 0,
    b = o || !!l?.isFetching,
    x;
  e[13] !== l || e[14] !== c
    ? ((x = () => void Promise.all([c(), l?.isEnabled ? l.refetch() : void 0])),
      (e[13] = l),
      (e[14] = c),
      (e[15] = x))
    : (x = e[15]);
  let C;
  e[16] !== d || e[17] !== y || e[18] !== b || e[19] !== x
    ? ((C = (0, Q.jsx)(W, { failed: d, loading: y, isFetching: b, onRetry: x })),
      (e[16] = d),
      (e[17] = y),
      (e[18] = b),
      (e[19] = x),
      (e[20] = C))
    : (C = e[20]);
  let w;
  e[21] !== m.length || e[22] !== d || e[23] !== f
    ? ((w =
        m.length === 0 && !f && !d
          ? (0, Q.jsx)(S, {
              id: `settings.fileTypeHandlers.empty`,
              defaultMessage: `No installed plugins support file types`,
              description: `Empty state when no plugin declares a file handler`,
            })
          : null),
      (e[21] = m.length),
      (e[22] = d),
      (e[23] = f),
      (e[24] = w))
    : (w = e[24]);
  let T;
  return (
    e[25] !== p || e[26] !== h || e[27] !== _ || e[28] !== v || e[29] !== C || e[30] !== w
      ? ((T = (0, Q.jsxs)(p, { title: h, subtitle: _, children: [v, C, w] })),
        (e[25] = p),
        (e[26] = h),
        (e[27] = _),
        (e[28] = v),
        (e[29] = C),
        (e[30] = w),
        (e[31] = T))
      : (T = e[31]),
    T
  );
}
function ae(e, t) {
  return e.localeCompare(t);
}
function oe(e) {
  return e.length > 0;
}
function se(e) {
  return e.extensions.map(ce);
}
function ce(e) {
  return e.trim().replace(/^\.+/, ``).toLowerCase();
}
function Y(e) {
  return e.toolsError != null;
}
function le(e) {
  let t = (0, X.c)(31),
    { hostId: r, extension: i, catalog: a } = e,
    o = n(s),
    c = h(f.preferredViewers),
    l = (0, Z.useRef)(0),
    [u, d] = (0, Z.useState)(!1),
    [p, m] = (0, Z.useState)(),
    g = `.${i}`,
    _ = `file${g}`,
    y;
  t[0] !== a || t[1] !== r || t[2] !== _
    ? ((y = N(r, _, a)), (t[0] = a), (t[1] = r), (t[2] = _), (t[3] = y))
    : (y = t[3]);
  let C = y;
  if (C == null) return null;
  let O, k, A;
  if (t[4] !== a || t[5] !== r || t[6] !== C || t[7] !== _ || t[8] !== p || t[9] !== c || t[10] !== o) {
    A = D(_, a).sort(ue);
    let e = p ?? c[C];
    ((O = T(o, r, _, a, e === "default" || A.some((t) => V(t) === e) ? e : void 0)),
      (k = O == null ? `default` : V(O)),
      (t[4] = a),
      (t[5] = r),
      (t[6] = C),
      (t[7] = _),
      (t[8] = p),
      (t[9] = c),
      (t[10] = o),
      (t[11] = O),
      (t[12] = k),
      (t[13] = A));
  } else ((O = t[11]), (k = t[12]), (A = t[13]));
  let j = k,
    M;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(S, {
        id: `settings.fileTypeHandlers.default`,
        defaultMessage: `Built-in`,
        description: `Use the built-in handler for this file type`,
      })),
      (t[14] = M))
    : (M = t[14]);
  let P = M,
    F;
  t[15] !== C || t[16] !== o
    ? ((F = (e) => {
        let t = (l.current += 1);
        (m(e),
          d(!1),
          ee(o, C, e)
            .catch(() => {
              l.current === t && d(!0);
            })
            .finally(() => {
              l.current === t && m(void 0);
            }));
      }),
      (t[15] = C),
      (t[16] = o),
      (t[17] = F))
    : (F = t[17]);
  let I = F,
    L;
  t[18] === g
    ? (L = t[19])
    : ((L = (0, Q.jsx)(`span`, { className: `select-text`, children: g })), (t[18] = g), (t[19] = L));
  let R;
  t[20] === u ? (R = t[21]) : ((R = u ? (0, Q.jsx)(U, {}) : void 0), (t[20] = u), (t[21] = R));
  let z;
  t[22] !== I || t[23] !== O?.title || t[24] !== j || t[25] !== A
    ? ((z = (e) =>
        (0, Q.jsx)(x, {
          align: `end`,
          triggerButton: (0, Q.jsx)(E, { ...e, children: O?.title ?? P }),
          children: (0, Q.jsxs)(v.RadioGroup, {
            value: j,
            children: [
              (0, Q.jsx)(v.RadioItem, { value: `default`, onSelect: () => I(`default`), children: P }),
              A.map((e) =>
                (0, Q.jsx)(
                  v.RadioItem,
                  {
                    value: V(e),
                    onSelect: () => I(V(e)),
                    icon: (0, Q.jsx)(w, { icon: e.icon }),
                    children: e.title,
                  },
                  V(e),
                ),
              ),
            ],
          }),
        })),
      (t[22] = I),
      (t[23] = O?.title),
      (t[24] = j),
      (t[25] = A),
      (t[26] = z))
    : (z = t[26]);
  let B;
  return (
    t[27] !== L || t[28] !== R || t[29] !== z
      ? ((B = (0, Q.jsx)(b, { label: L, description: R, control: z })),
        (t[27] = L),
        (t[28] = R),
        (t[29] = z),
        (t[30] = B))
      : (B = t[30]),
    B
  );
}
function ue(e, t) {
  return e.title.localeCompare(t.title);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = o()),
      d(),
      y(),
      (Z = i()),
      c(),
      p(),
      ne(),
      re(),
      P(),
      k(),
      z(),
      O(),
      r(),
      _(),
      I(),
      L(),
      C(),
      M(),
      m(),
      q(),
      (Q = a()));
  }))();
}
$();
export { J as FileTypeHandlersSettings };
//# sourceMappingURL=file-type-handlers-1ebf6724e571.js.map
