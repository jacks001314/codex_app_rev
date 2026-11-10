const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./sites-handoff-4ceb51054dbf.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
      "./sites-target-3b79f1a5b848.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cat as n,
  Cot as r,
  Ext as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  VDt as c,
  _O as l,
  _xt as u,
  cO as d,
  fO as f,
  fPt as p,
  gO as m,
  jDt as h,
  lO as g,
  mO as _,
  oO as v,
  pPt as y,
  sO as b,
  t3 as x,
  vO as S,
  vzt as C,
  wot as w,
  wxt as T,
  xMt as E,
  xat as D,
  yzt as O,
} from "./app-shared-bbfeca5e5737.js";
import { i as k, r as A, t as j } from "./sites-target-3b79f1a5b848.js";
function M(e) {
  let t = (0, F.c)(26),
    { target: n, entryPath: a, sourcePath: s, onClose: l } = e,
    u = o(r),
    d = c(),
    f = i(),
    { pathname: p } = T(),
    m = (0, I.useRef)(null),
    [h, g] = (0, I.useState)(!1),
    [_, v] = (0, I.useState)(null),
    y;
  t[0] === l
    ? (y = t[1])
    : ((y = () => {
        (m.current?.abort(), l());
      }),
      (t[0] = l),
      (t[1] = y));
  let b = y,
    x = (0, I.useEffectEvent)(b),
    S;
  t[2] !== x || t[3] !== a || t[4] !== p || t[5] !== s
    ? ((S = () => {
        p !== a && p !== s && x();
      }),
      (t[2] = x),
      (t[3] = a),
      (t[4] = p),
      (t[5] = s),
      (t[6] = S))
    : (S = t[6]);
  let C;
  (t[7] !== a || t[8] !== p || t[9] !== s
    ? ((C = [a, p, s]), (t[7] = a), (t[8] = p), (t[9] = s), (t[10] = C))
    : (C = t[10]),
    (0, I.useEffect)(S, C));
  let w, E;
  (t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => () => m.current?.abort()), (E = []), (t[11] = w), (t[12] = E))
    : ((w = t[11]), (E = t[12])),
    (0, I.useEffect)(w, E));
  let O;
  t[13] !== d || t[14] !== f || t[15] !== l || t[16] !== u || t[17] !== n
    ? ((O = async () => {
        if (m.current != null) return;
        let e = new AbortController();
        ((m.current = e), g(!0), v(null));
        try {
          let { submitSitesHandoff: t } = await N(),
            r = await t(u, { target: n, intl: d, signal: e.signal });
          e.signal.aborted || (f(`${D(r)}?surface=work`), l());
        } catch (t) {
          let n = t;
          e.signal.aborted || v(d.formatMessage(k[n instanceof j ? n.reason : `failed`]));
        }
        ((m.current = null), e.signal.aborted || g(!1));
      }),
      (t[13] = d),
      (t[14] = f),
      (t[15] = l),
      (t[16] = u),
      (t[17] = n),
      (t[18] = O))
    : (O = t[18]);
  let A = O,
    M;
  return (
    t[19] !== h || t[20] !== b || t[21] !== _ || t[22] !== p || t[23] !== s || t[24] !== A
      ? ((M = p === s ? (0, L.jsx)(P, { busy: h, error: _, onContinue: () => void A(), onCancel: b }) : null),
        (t[19] = h),
        (t[20] = b),
        (t[21] = _),
        (t[22] = p),
        (t[23] = s),
        (t[24] = A),
        (t[25] = M))
      : (M = t[25]),
    M
  );
}
function N() {
  return p(
    () => import(`./sites-handoff-4ceb51054dbf.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    import.meta.url,
  );
}
function P(e) {
  let n = (0, F.c)(24),
    { busy: r, error: i, onContinue: o, onCancel: s } = e,
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = (e) => {
        e || s();
      }),
      (n[0] = s),
      (n[1] = c));
  let u;
  n[2] === o
    ? (u = n[3])
    : ((u = (e) => {
        (e.preventDefault(), o());
      }),
      (n[2] = o),
      (n[3] = u));
  let f;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, L.jsx)(l, {
        children: (0, L.jsx)(a, {
          id: `sitesPreview.handoff.title`,
          defaultMessage: `Continue your website in Work`,
          description: `Title of the confirmation dialog after returning from a Sites preview upgrade. Work is the product mode name.`,
        }),
      })),
      (n[4] = f))
    : (f = n[4]);
  let p;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(g, {
        children: (0, L.jsx)(d, {
          title: f,
          subtitle: (0, L.jsx)(m, {
            children: (0, L.jsx)(a, {
              id: `sitesPreview.handoff.description`,
              defaultMessage: `Work will start a new conversation and prepare your site for publishing`,
              description: `Explains what confirming the Sites checkout-return dialog will do. Work is the product mode name.`,
            }),
          }),
        }),
      })),
      (n[5] = p))
    : (p = n[5]);
  let h;
  n[6] === i
    ? (h = n[7])
    : ((h =
        i == null
          ? null
          : (0, L.jsx)(g, {
              children: (0, L.jsx)(`p`, { role: `alert`, className: `text-danger`, children: i }),
            })),
      (n[6] = i),
      (n[7] = h));
  let y;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, L.jsx)(a, {
        id: `sitesPreview.handoff.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses the Sites checkout-return dialog without starting a Work task.`,
      })),
      (n[8] = y))
    : (y = n[8]);
  let x;
  n[9] === s
    ? (x = n[10])
    : ((x = (0, L.jsx)(t, { type: `button`, color: `secondary`, onClick: s, children: y })),
      (n[9] = s),
      (n[10] = x));
  let S;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, L.jsx)(a, {
        id: `sitesPreview.handoff.continue`,
        defaultMessage: `Continue in Work`,
        description: `Confirms starting a new Work task from the saved Sites preview. Short button label.`,
      })),
      (n[11] = S))
    : (S = n[11]);
  let C;
  n[12] === r
    ? (C = n[13])
    : ((C = (0, L.jsx)(t, { type: `submit`, color: `primary`, loading: r, children: S })),
      (n[12] = r),
      (n[13] = C));
  let w;
  n[14] !== x || n[15] !== C
    ? ((w = (0, L.jsx)(g, { children: (0, L.jsxs)(b, { children: [x, C] }) })),
      (n[14] = x),
      (n[15] = C),
      (n[16] = w))
    : (w = n[16]);
  let T;
  n[17] !== w || n[18] !== u || n[19] !== h
    ? ((T = (0, L.jsxs)(v, { className: `select-none`, as: `form`, onSubmit: u, children: [p, h, w] })),
      (n[17] = w),
      (n[18] = u),
      (n[19] = h),
      (n[20] = T))
    : (T = n[20]);
  let E;
  return (
    n[21] !== c || n[22] !== T
      ? ((E = (0, L.jsx)(_, { open: !0, size: `compact`, onOpenChange: c, children: T })),
        (n[21] = c),
        (n[22] = T),
        (n[23] = E))
      : (E = n[23]),
    E
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = C()), s(), (I = O()), h(), u(), x(), S(), f(), w(), n(), A(), (L = E()), y());
  }))();
}
R();
export { M as SitesHandoffDialog };
//# sourceMappingURL=sites-handoff-dialog-84df95fab68b.js.map
