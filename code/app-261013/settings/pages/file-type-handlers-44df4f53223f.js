import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  AO as r,
  CO as i,
  Cot as a,
  IDt as o,
  Ixt as s,
  JC as c,
  Pxt as l,
  TO as u,
  Wnt as d,
  iw as f,
  jDt as p,
  qC as m,
  qct as h,
  rst as g,
  t3 as _,
  tw as v,
  vzt as y,
  wot as b,
  xMt as x,
  yzt as S,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  BO as w,
  Brt as T,
  GEn as E,
  GVt as D,
  Ggr as O,
  Jgr as k,
  LEn as A,
  Mft as j,
  QP as M,
  Rrt as N,
  VEn as P,
  WVt as F,
  _F as I,
  dht as ee,
  eF as L,
  fht as R,
  hF as z,
  jft as te,
  pht as ne,
  tF as re,
  uht as B,
  zO as ie,
} from "./app-initial-5851df3f6cb1.js";
import { n as V, t as H } from "./settings-loading-row-bf72bf2df25d.js";
function U() {
  let e = (0, G.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, K.jsx)(`span`, {
          className: `text-danger`,
          role: `alert`,
          children: (0, K.jsx)(o, {
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
  let n = (0, G.c)(7),
    { failed: r, loading: i, isFetching: a, onRetry: s } = e;
  if (r) {
    let e;
    n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(`span`, {
          role: `alert`,
          children: (0, K.jsx)(o, {
            id: `settings.fileTypeHandlers.loadFailed`,
            defaultMessage: `Couldn’t load file handlers`,
            description: `Error discovering plugin file handlers; the adjacent Retry button reloads the handlers`,
          }),
        })),
        (n[0] = e))
      : (e = n[0]);
    let r;
    n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, K.jsx)(o, {
          id: `common.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry an operation after an error`,
        })),
        (n[1] = r))
      : (r = n[1]);
    let i;
    return (
      n[2] !== a || n[3] !== s
        ? ((i = (0, K.jsx)(v, {
            label: e,
            control: (0, K.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              type: `button`,
              loading: a,
              onClick: s,
              children: r,
            }),
          })),
          (n[2] = a),
          (n[3] = s),
          (n[4] = i))
        : (i = n[4]),
      i
    );
  }
  let c;
  return (
    n[5] === i
      ? (c = n[6])
      : ((c = i
          ? (0, K.jsx)(H, {
              children: (0, K.jsx)(o, {
                id: `settings.fileTypeHandlers.loading`,
                defaultMessage: `Loading file handlers`,
                description: `Loading state while discovering plugin file handlers`,
              }),
            })
          : null),
        (n[5] = i),
        (n[6] = c)),
    c
  );
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = y()), p(), _(), V(), f(), (K = x()));
  }))();
}
function J() {
  let e = (0, X.c)(32),
    { selectedHostId: t } = T(),
    n = C(P, t),
    { isPending: r, isError: i, isFetching: a, data: s, refetch: c } = C(k, t),
    l = C(E, t),
    u;
  e[0] !== s?.data || e[1] !== l?.isError || e[2] !== i
    ? ((u = i || !!l?.isError || !!s?.data.some(le)),
      (e[0] = s?.data),
      (e[1] = l?.isError),
      (e[2] = i),
      (e[3] = u))
    : (u = e[3]);
  let d = u,
    f = r || !!l?.isLoading,
    p,
    h,
    g,
    _,
    v;
  e[4] !== n || e[5] !== t
    ? ((h = [...new Set(n.flatMap(se).filter(oe))].sort(ae)),
      (p = z),
      e[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, Q.jsx)(L, { slug: `file-type-handlers` })),
          (_ = (0, Q.jsx)(o, {
            id: `settings.fileTypeHandlers.subtitle`,
            defaultMessage: `Choose what opens each file type in ChatGPT`,
            description: `Description of choosing the viewer for each file type in ChatGPT`,
          })),
          (e[11] = g),
          (e[12] = _))
        : ((g = e[11]), (_ = e[12])),
      (v =
        h.length > 0
          ? (0, Q.jsx)(m, {
              children: h.map((e) => (0, Q.jsx)(ue, { hostId: t, extension: e, catalog: n }, e)),
            })
          : null),
      (e[4] = n),
      (e[5] = t),
      (e[6] = p),
      (e[7] = h),
      (e[8] = g),
      (e[9] = _),
      (e[10] = v))
    : ((p = e[6]), (h = e[7]), (g = e[8]), (_ = e[9]), (v = e[10]));
  let y = f && h.length === 0,
    b = a || !!l?.isFetching,
    x;
  e[13] !== l || e[14] !== c
    ? ((x = () => void Promise.all([c(), l?.isEnabled ? l.refetch() : void 0])),
      (e[13] = l),
      (e[14] = c),
      (e[15] = x))
    : (x = e[15]);
  let S;
  e[16] !== d || e[17] !== y || e[18] !== b || e[19] !== x
    ? ((S = (0, Q.jsx)(W, { failed: d, loading: y, isFetching: b, onRetry: x })),
      (e[16] = d),
      (e[17] = y),
      (e[18] = b),
      (e[19] = x),
      (e[20] = S))
    : (S = e[20]);
  let w;
  e[21] !== h.length || e[22] !== d || e[23] !== f
    ? ((w =
        h.length === 0 && !f && !d
          ? (0, Q.jsx)(o, {
              id: `settings.fileTypeHandlers.empty`,
              defaultMessage: `No installed plugins support file types`,
              description: `Empty state when no plugin declares a file handler`,
            })
          : null),
      (e[21] = h.length),
      (e[22] = d),
      (e[23] = f),
      (e[24] = w))
    : (w = e[24]);
  let D;
  return (
    e[25] !== p || e[26] !== g || e[27] !== _ || e[28] !== v || e[29] !== S || e[30] !== w
      ? ((D = (0, Q.jsxs)(p, { title: g, subtitle: _, children: [v, S, w] })),
        (e[25] = p),
        (e[26] = g),
        (e[27] = _),
        (e[28] = v),
        (e[29] = S),
        (e[30] = w),
        (e[31] = D))
      : (D = e[31]),
    D
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
function le(e) {
  return e.toolsError != null;
}
function ue(e) {
  let t = (0, X.c)(31),
    { hostId: r, extension: c, catalog: l } = e,
    d = s(a),
    f = n(h.preferredViewers),
    p = (0, Z.useRef)(0),
    [m, g] = (0, Z.useState)(!1),
    [_, y] = (0, Z.useState)(),
    b = `.${c}`,
    x = `file${b}`,
    S;
  t[0] !== l || t[1] !== r || t[2] !== x
    ? ((S = ee(r, x, l)), (t[0] = l), (t[1] = r), (t[2] = x), (t[3] = S))
    : (S = t[3]);
  let C = S;
  if (C == null) return null;
  let T, E, D;
  if (t[4] !== l || t[5] !== r || t[6] !== C || t[7] !== x || t[8] !== _ || t[9] !== f || t[10] !== d) {
    D = F(x, l).sort(Y);
    let e = _ ?? f[C];
    ((T = R(d, r, x, l, e === "default" || D.some((t) => B(t) === e) ? e : void 0)),
      (E = T == null ? `default` : B(T)),
      (t[4] = l),
      (t[5] = r),
      (t[6] = C),
      (t[7] = x),
      (t[8] = _),
      (t[9] = f),
      (t[10] = d),
      (t[11] = T),
      (t[12] = E),
      (t[13] = D));
  } else ((T = t[11]), (E = t[12]), (D = t[13]));
  let O = E,
    k;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(o, {
        id: `settings.fileTypeHandlers.default`,
        defaultMessage: `Built-in`,
        description: `Use the built-in handler for this file type`,
      })),
      (t[14] = k))
    : (k = t[14]);
  let A = k,
    j;
  t[15] !== C || t[16] !== d
    ? ((j = (e) => {
        let t = (p.current += 1);
        (y(e),
          g(!1),
          w(d, C, e)
            .catch(() => {
              p.current === t && g(!0);
            })
            .finally(() => {
              p.current === t && y(void 0);
            }));
      }),
      (t[15] = C),
      (t[16] = d),
      (t[17] = j))
    : (j = t[17]);
  let N = j,
    P;
  t[18] === b
    ? (P = t[19])
    : ((P = (0, Q.jsx)(`span`, { className: `select-text`, children: b })), (t[18] = b), (t[19] = P));
  let I;
  t[20] === m ? (I = t[21]) : ((I = m ? (0, Q.jsx)(U, {}) : void 0), (t[20] = m), (t[21] = I));
  let L;
  t[22] !== N || t[23] !== T?.title || t[24] !== O || t[25] !== D
    ? ((L = (e) =>
        (0, Q.jsx)(i, {
          align: `end`,
          triggerButton: (0, Q.jsx)(M, { ...e, children: T?.title ?? A }),
          children: (0, Q.jsxs)(u.RadioGroup, {
            value: O,
            children: [
              (0, Q.jsx)(u.RadioItem, { value: `default`, onSelect: () => N(`default`), children: A }),
              D.map((e) =>
                (0, Q.jsx)(
                  u.RadioItem,
                  {
                    value: B(e),
                    onSelect: () => N(B(e)),
                    icon: (0, Q.jsx)(te, { icon: e.icon }),
                    children: e.title,
                  },
                  B(e),
                ),
              ),
            ],
          }),
        })),
      (t[22] = N),
      (t[23] = T?.title),
      (t[24] = O),
      (t[25] = D),
      (t[26] = L))
    : (L = t[26]);
  let z;
  return (
    t[27] !== P || t[28] !== I || t[29] !== L
      ? ((z = (0, Q.jsx)(v, { label: P, description: I, control: L })),
        (t[27] = P),
        (t[28] = I),
        (t[29] = L),
        (t[30] = z))
      : (z = t[30]),
    z
  );
}
function Y(e, t) {
  return e.title.localeCompare(t.title);
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = y()),
      l(),
      g(),
      (Z = S()),
      p(),
      r(),
      ne(),
      ie(),
      j(),
      D(),
      A(),
      O(),
      b(),
      d(),
      I(),
      N(),
      f(),
      re(),
      c(),
      q(),
      (Q = x()));
  }))();
}
$();
export { J as FileTypeHandlersSettings };
//# sourceMappingURL=file-type-handlers-44df4f53223f.js.map
