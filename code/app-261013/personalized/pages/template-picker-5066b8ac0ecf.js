const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./hosted-template-picker.browser-2f91ecd55348.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./hosted-template-catalog-e317c72cbbc5.js",
      "./template-browser-view-30de1e3e5b40.js",
      "./template-gallery-modal-336945a0604c.js",
      "./base-carousel-4c9d62a2a0f3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  B4 as n,
  Ixt as r,
  PF as i,
  Pxt as a,
  VDt as o,
  Vxt as s,
  fPt as c,
  jDt as l,
  jF as u,
  pPt as d,
  vzt as f,
  xMt as p,
  yzt as m,
  z4 as h,
  zj as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  FAt as g,
  Gf as _,
  IAt as v,
  IBt as y,
  Icr as b,
  LBt as te,
  Mut as x,
  PAt as S,
  Uf as C,
  dBt as w,
  hBt as T,
  mBt as E,
  oo as D,
  pBt as O,
  rDn as k,
  sBt as A,
  sCr as j,
  so as M,
  tDn as N,
  uBt as P,
  uDn as F,
  vBt as I,
  xBt as L,
  yCr as R,
  zut as z,
} from "./app-initial-5851df3f6cb1.js";
import { Dm as B, Em as ne } from "./app-primary-fe8a450b3b04.js";
import { n as V, t as H } from "./template-browser-view-30de1e3e5b40.js";
import { n as U, t as W } from "./local-template-catalog-a372c79f39a5.js";
function G(e) {
  let t = (0, K.c)(37),
    { category: n, visible: i, canUseTemplateAttachments: a, onAddFileAssetAttachment: c, placement: l } = e,
    d = a !== void 0 && a,
    f = l === void 0 ? `top` : l,
    p = r(j),
    m = g(),
    h = o(),
    _ = s(F),
    v = s(k),
    [y, b] = (0, q.useState)(!1),
    x;
  t[0] !== m || t[1] !== p
    ? ((x = () => {
        (b(!1), P(p), m.focus());
      }),
      (t[0] = m),
      (t[1] = p),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] === n ? (C = t[4]) : ((C = [n]), (t[3] = n), (t[4] = C));
  let w = i || y,
    E;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = () => b(!1)), (t[5] = E)) : (E = t[5]);
  let D;
  t[6] === p ? (D = t[7]) : ((D = (e) => I(p, e)), (t[6] = p), (t[7] = D));
  let M;
  t[8] !== S || t[9] !== m
    ? ((M = (e) => {
        (m.appendPromptText(e), S());
      }),
      (t[8] = S),
      (t[9] = m),
      (t[10] = M))
    : (M = t[10]);
  let N;
  t[11] !== S || t[12] !== m || t[13] !== h || t[14] !== p
    ? ((N = (e, t) => {
        let n = !1;
        (m.view.state.doc.descendants((t) => {
          t.type.name === `skillMention` && t.attrs.path === e.path && (n = !0);
        }),
          n || (te(m, ee(e, u(t.type)), h), L(p, e)),
          S());
      }),
      (t[11] = S),
      (t[12] = m),
      (t[13] = h),
      (t[14] = p),
      (t[15] = N))
    : (N = t[15]);
  let R;
  t[16] !== d || t[17] !== S || t[18] !== c || t[19] !== p
    ? ((R =
        d && c
          ? async (e) => {
              let t = p.get(O),
                n = p.get(A).selection,
                r = await c({ assetUrl: e.assetUrl, label: e.filename });
              r != null &&
                (T(p, { attachmentPath: r.path, journey: t, templateId: e.id }),
                p.get(A).selection === n && S());
            }
          : void 0),
      (t[16] = d),
      (t[17] = S),
      (t[18] = c),
      (t[19] = p),
      (t[20] = R))
    : (R = t[20]);
  let z;
  t[21] !== n || t[22] !== S || t[23] !== y || t[24] !== f || t[25] !== i
    ? ((z = (e) =>
        (0, J.jsx)(H, {
          ...e,
          category: n,
          visible: i,
          placement: f,
          galleryOpen: y,
          setGalleryOpen: b,
          closeBrowser: S,
        })),
      (t[21] = n),
      (t[22] = S),
      (t[23] = y),
      (t[24] = f),
      (t[25] = i),
      (t[26] = z))
    : (z = t[26]);
  let B;
  return (
    t[27] !== v ||
    t[28] !== _ ||
    t[29] !== R ||
    t[30] !== z ||
    t[31] !== C ||
    t[32] !== w ||
    t[33] !== D ||
    t[34] !== M ||
    t[35] !== N
      ? ((B = (0, J.jsx)(W, {
          hostId: _,
          cwd: v,
          categories: C,
          enabled: w,
          onClose: E,
          onCreate: D,
          onPrompt: M,
          onUseSkill: N,
          onUseAsset: R,
          children: z,
        })),
        (t[27] = v),
        (t[28] = _),
        (t[29] = R),
        (t[30] = z),
        (t[31] = C),
        (t[32] = w),
        (t[33] = D),
        (t[34] = M),
        (t[35] = N),
        (t[36] = B))
      : (B = t[36]),
    B
  );
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = f()), i(), a(), (q = m()), l(), t(), S(), R(), N(), y(), E(), w(), U(), V(), (J = p()));
  }))();
}
function X(e) {
  let t = (0, Z.c)(12),
    n = r(j),
    i = s(A),
    a = g(),
    o = v(a, re),
    c;
  t[0] === n ? (c = t[1]) : ((c = (e) => n.set(A, e)), (t[0] = n), (t[1] = c));
  let l;
  t[2] !== o || t[3] !== i || t[4] !== c
    ? ((l = { state: i, onStateChange: c, temporarilyHidden: o }),
      (t[2] = o),
      (t[3] = i),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let { model: u } = B(l),
    d = s(F),
    f = s(k);
  if (u.category == null) return null;
  let p;
  return (
    t[6] !== f || t[7] !== d || t[8] !== u.category || t[9] !== u.visible || t[10] !== e
      ? ((p = (0, Q.jsx)(D, {
          children: (0, Q.jsx)(G, { ...e, category: u.category, visible: u.visible }, `${d}:${f}`),
        })),
        (t[6] = f),
        (t[7] = d),
        (t[8] = u.category),
        (t[9] = u.visible),
        (t[10] = e),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function re(e) {
  return _(e.view.state);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = f()),
      x(),
      ne(),
      a(),
      M(),
      C(),
      S(),
      h(),
      b(),
      R(),
      N(),
      w(),
      Y(),
      (Q = p()),
      d(),
      n(async () => {
        let [{ BrowserTemplatePicker: e }, t] = await Promise.all([
          c(
            () => import(`./hosted-template-picker.browser-2f91ecd55348.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
          z(),
        ]);
        return (n) => (0, Q.jsx)(e, { ...n, skillData: t });
      }));
  }))();
}
$();
export { X as ArtifactTemplatePicker };
//# sourceMappingURL=template-picker-5066b8ac0ecf.js.map
