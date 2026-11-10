const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./hosted-template-picker.browser-70d3bc92a76c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./hosted-template-catalog-f2a814015bfa.js",
      "./template-browser-view-a8babdd5e8c6.js",
      "./template-gallery-modal-4f828146e385.js",
      "./base-carousel-dafba33f875d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CI as n,
  F3 as r,
  FBt as i,
  HM as a,
  I3 as o,
  LNt as s,
  OFt as c,
  OM as l,
  PBt as u,
  XOt as d,
  ZSt as f,
  bI as p,
  iCt as m,
  kFt as h,
  okt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as _,
  CLt as v,
  EAn as y,
  ELt as b,
  FDr as x,
  Gf as S,
  HLt as C,
  Ldt as w,
  NAn as T,
  Tfr as E,
  VLt as D,
  Wdt as O,
  _Dt as k,
  bLt as A,
  co as j,
  fLt as M,
  gLt as N,
  hLt as P,
  lo as F,
  qf as I,
  vDt as L,
  vLt as R,
  wAn as z,
  yDt as B,
  yLt as V,
} from "./app-initial-ad16eaadf81f.js";
import { Bm as H, zm as U } from "./app-primary-3e00728c2a4c.js";
import { n as W, t as G } from "./template-browser-view-a8babdd5e8c6.js";
import { n as K, t as ee } from "./local-template-catalog-2eeca06107ff.js";
function te(e) {
  let n = (0, q.c)(37),
    { category: r, visible: i, canUseTemplateAttachments: a, onAddFileAssetAttachment: o, placement: s } = e,
    c = a !== void 0 && a,
    u = s === void 0 ? `top` : s,
    d = t(_),
    f = L(),
    h = g(),
    x = m(T),
    S = m(y),
    [w, E] = (0, J.useState)(!1),
    D;
  n[0] !== f || n[1] !== d
    ? ((D = () => {
        (E(!1), P(d), f.focus());
      }),
      (n[0] = f),
      (n[1] = d),
      (n[2] = D))
    : (D = n[2]);
  let O = D,
    k;
  n[3] === r ? (k = n[4]) : ((k = [r]), (n[3] = r), (n[4] = k));
  let j = i || w,
    N;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = () => E(!1)), (n[5] = N)) : (N = n[5]);
  let F;
  n[6] === d ? (F = n[7]) : ((F = (e) => v(d, e)), (n[6] = d), (n[7] = F));
  let I;
  n[8] !== O || n[9] !== f
    ? ((I = (e) => {
        (f.appendPromptText(e), O());
      }),
      (n[8] = O),
      (n[9] = f),
      (n[10] = I))
    : (I = n[10]);
  let z;
  n[11] !== O || n[12] !== f || n[13] !== h || n[14] !== d
    ? ((z = (e, t) => {
        let n = !1;
        (f.view.state.doc.descendants((t) => {
          t.type.name === `skillMention` && t.attrs.path === e.path && (n = !0);
        }),
          n || (C(f, l(e, p(t.type)), h), b(d, e)),
          O());
      }),
      (n[11] = O),
      (n[12] = f),
      (n[13] = h),
      (n[14] = d),
      (n[15] = z))
    : (z = n[15]);
  let B;
  n[16] !== c || n[17] !== O || n[18] !== o || n[19] !== d
    ? ((B =
        c && o
          ? async (e) => {
              let t = d.get(R),
                n = d.get(M).selection,
                r = await o({ assetUrl: e.assetUrl, label: e.filename });
              r != null &&
                (A(d, { attachmentPath: r.path, journey: t, templateId: e.id }),
                d.get(M).selection === n && O());
            }
          : void 0),
      (n[16] = c),
      (n[17] = O),
      (n[18] = o),
      (n[19] = d),
      (n[20] = B))
    : (B = n[20]);
  let V;
  n[21] !== r || n[22] !== O || n[23] !== w || n[24] !== u || n[25] !== i
    ? ((V = (e) =>
        (0, Y.jsx)(G, {
          ...e,
          category: r,
          visible: i,
          placement: u,
          galleryOpen: w,
          setGalleryOpen: E,
          closeBrowser: O,
        })),
      (n[21] = r),
      (n[22] = O),
      (n[23] = w),
      (n[24] = u),
      (n[25] = i),
      (n[26] = V))
    : (V = n[26]);
  let H;
  return (
    n[27] !== S ||
    n[28] !== x ||
    n[29] !== B ||
    n[30] !== V ||
    n[31] !== k ||
    n[32] !== j ||
    n[33] !== F ||
    n[34] !== I ||
    n[35] !== z
      ? ((H = (0, Y.jsx)(ee, {
          hostId: x,
          cwd: S,
          categories: k,
          enabled: j,
          onClose: N,
          onCreate: F,
          onPrompt: I,
          onUseSkill: z,
          onUseAsset: B,
          children: V,
        })),
        (n[27] = S),
        (n[28] = x),
        (n[29] = B),
        (n[30] = V),
        (n[31] = k),
        (n[32] = j),
        (n[33] = F),
        (n[34] = I),
        (n[35] = z),
        (n[36] = H))
      : (H = n[36]),
    H
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = u()), n(), f(), (J = i()), d(), a(), k(), x(), z(), D(), V(), N(), K(), W(), (Y = s()));
  }))();
}
function ne(e) {
  let n = (0, Z.c)(12),
    r = t(_),
    i = m(M),
    a = L(),
    o = B(a, re),
    s;
  n[0] === r ? (s = n[1]) : ((s = (e) => r.set(M, e)), (n[0] = r), (n[1] = s));
  let c;
  n[2] !== o || n[3] !== i || n[4] !== s
    ? ((c = { state: i, onStateChange: s, temporarilyHidden: o }),
      (n[2] = o),
      (n[3] = i),
      (n[4] = s),
      (n[5] = c))
    : (c = n[5]);
  let { model: l } = H(c),
    u = m(T),
    d = m(y);
  if (l.category == null) return null;
  let f;
  return (
    n[6] !== d || n[7] !== u || n[8] !== l.category || n[9] !== l.visible || n[10] !== e
      ? ((f = (0, Q.jsx)(j, {
          children: (0, Q.jsx)(te, { ...e, category: l.category, visible: l.visible }, `${u}:${d}`),
        })),
        (n[6] = d),
        (n[7] = u),
        (n[8] = l.category),
        (n[9] = l.visible),
        (n[10] = e),
        (n[11] = f))
      : (f = n[11]),
    f
  );
}
function re(e) {
  return I(e.view.state);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = u()),
      w(),
      U(),
      f(),
      F(),
      S(),
      k(),
      r(),
      E(),
      x(),
      z(),
      N(),
      X(),
      (Q = s()),
      h(),
      o(async () => {
        let [{ BrowserTemplatePicker: e }, t] = await Promise.all([
          c(
            () => import(`./hosted-template-picker.browser-70d3bc92a76c.js`),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
          O(),
        ]);
        return (n) => (0, Q.jsx)(e, { ...n, skillData: t });
      }));
  }))();
}
$();
export { ne as ArtifactTemplatePicker };
//# sourceMappingURL=template-picker-79cc9a4abf67.js.map
