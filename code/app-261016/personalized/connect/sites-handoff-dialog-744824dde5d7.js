const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./sites-handoff-ff80f544ce6c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
      "./sites-target-a32fe9731ac3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  NSt as u,
  OFt as d,
  PBt as f,
  Qst as p,
  RO as m,
  USt as h,
  Uot as g,
  VSt as _,
  Vot as v,
  WO as y,
  XOt as b,
  Y3 as x,
  Z3 as S,
  ZSt as C,
  kFt as w,
  okt as T,
  qO as E,
  tkt as D,
  zO as O,
} from "./app-shared-2feb3d4c6fcc.js";
import { i as k, r as A, t as j } from "./sites-target-a32fe9731ac3.js";
function M(e) {
  let n = (0, F.c)(26),
    { target: r, entryPath: i, sourcePath: a, onClose: o } = e,
    s = t(p),
    c = T(),
    l = h(),
    { pathname: u } = _(),
    d = (0, I.useRef)(null),
    [f, m] = (0, I.useState)(!1),
    [g, y] = (0, I.useState)(null),
    b;
  n[0] === o
    ? (b = n[1])
    : ((b = () => {
        (d.current?.abort(), o());
      }),
      (n[0] = o),
      (n[1] = b));
  let x = b,
    S = (0, I.useEffectEvent)(x),
    C;
  n[2] !== S || n[3] !== i || n[4] !== u || n[5] !== a
    ? ((C = () => {
        u !== i && u !== a && S();
      }),
      (n[2] = S),
      (n[3] = i),
      (n[4] = u),
      (n[5] = a),
      (n[6] = C))
    : (C = n[6]);
  let w;
  (n[7] !== i || n[8] !== u || n[9] !== a
    ? ((w = [i, u, a]), (n[7] = i), (n[8] = u), (n[9] = a), (n[10] = w))
    : (w = n[10]),
    (0, I.useEffect)(C, w));
  let E, D;
  (n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => () => d.current?.abort()), (D = []), (n[11] = E), (n[12] = D))
    : ((E = n[11]), (D = n[12])),
    (0, I.useEffect)(E, D));
  let O;
  n[13] !== c || n[14] !== l || n[15] !== o || n[16] !== s || n[17] !== r
    ? ((O = async () => {
        if (d.current != null) return;
        let e = new AbortController();
        ((d.current = e), m(!0), y(null));
        try {
          let { submitSitesHandoff: t } = await N(),
            n = await t(s, { target: r, intl: c, signal: e.signal });
          e.signal.aborted || (l(`${v(n)}?surface=work`), o());
        } catch (t) {
          let n = t;
          e.signal.aborted || y(c.formatMessage(k[n instanceof j ? n.reason : `failed`]));
        }
        ((d.current = null), e.signal.aborted || m(!1));
      }),
      (n[13] = c),
      (n[14] = l),
      (n[15] = o),
      (n[16] = s),
      (n[17] = r),
      (n[18] = O))
    : (O = n[18]);
  let A = O,
    M;
  return (
    n[19] !== f || n[20] !== x || n[21] !== g || n[22] !== u || n[23] !== a || n[24] !== A
      ? ((M = u === a ? (0, L.jsx)(P, { busy: f, error: g, onContinue: () => void A(), onCancel: x }) : null),
        (n[19] = f),
        (n[20] = x),
        (n[21] = g),
        (n[22] = u),
        (n[23] = a),
        (n[24] = A),
        (n[25] = M))
      : (M = n[25]),
    M
  );
}
function N() {
  return d(
    () => import(`./sites-handoff-ff80f544ce6c.js`),
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    import.meta.url,
  );
}
function P(e) {
  let t = (0, F.c)(24),
    { busy: n, error: r, onContinue: i, onCancel: o } = e,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = (e) => {
        e || o();
      }),
      (t[0] = o),
      (t[1] = c));
  let u;
  t[2] === i
    ? (u = t[3])
    : ((u = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = u));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, L.jsx)(E, {
        children: (0, L.jsx)(D, {
          id: `sitesPreview.handoff.title`,
          defaultMessage: `Continue your website in Work`,
          description: `Title of the confirmation dialog after returning from a Sites preview upgrade. Work is the product mode name.`,
        }),
      })),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, L.jsx)(O, {
        children: (0, L.jsx)(m, {
          title: d,
          subtitle: (0, L.jsx)(s, {
            children: (0, L.jsx)(D, {
              id: `sitesPreview.handoff.description`,
              defaultMessage: `Work will start a new conversation and prepare your site for publishing`,
              description: `Explains what confirming the Sites checkout-return dialog will do. Work is the product mode name.`,
            }),
          }),
        }),
      })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === r
    ? (p = t[7])
    : ((p =
        r == null
          ? null
          : (0, L.jsx)(O, {
              children: (0, L.jsx)(`p`, { role: `alert`, className: `text-danger`, children: r }),
            })),
      (t[6] = r),
      (t[7] = p));
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, L.jsx)(D, {
        id: `sitesPreview.handoff.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismisses the Sites checkout-return dialog without starting a Work task.`,
      })),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === o
    ? (g = t[10])
    : ((g = (0, L.jsx)(x, { type: `button`, color: `secondary`, onClick: o, children: h })),
      (t[9] = o),
      (t[10] = g));
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, L.jsx)(D, {
        id: `sitesPreview.handoff.continue`,
        defaultMessage: `Continue in Work`,
        description: `Confirms starting a new Work task from the saved Sites preview. Short button label.`,
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === n
    ? (v = t[13])
    : ((v = (0, L.jsx)(x, { type: `submit`, color: `primary`, loading: n, children: _ })),
      (t[12] = n),
      (t[13] = v));
  let b;
  t[14] !== g || t[15] !== v
    ? ((b = (0, L.jsx)(O, { children: (0, L.jsxs)(l, { children: [g, v] }) })),
      (t[14] = g),
      (t[15] = v),
      (t[16] = b))
    : (b = t[16]);
  let S;
  t[17] !== b || t[18] !== u || t[19] !== p
    ? ((S = (0, L.jsxs)(a, { className: `select-none`, as: `form`, onSubmit: u, children: [f, p, b] })),
      (t[17] = b),
      (t[18] = u),
      (t[19] = p),
      (t[20] = S))
    : (S = t[20]);
  let C;
  return (
    t[21] !== c || t[22] !== S
      ? ((C = (0, L.jsx)(y, { open: !0, size: `compact`, onOpenChange: c, children: S })),
        (t[21] = c),
        (t[22] = S),
        (t[23] = C))
      : (C = t[23]),
    C
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = f()), C(), (I = r()), b(), u(), S(), o(), i(), n(), g(), A(), (L = c()), w());
  }))();
}
R();
export { M as SitesHandoffDialog };
//# sourceMappingURL=sites-handoff-dialog-744824dde5d7.js.map
