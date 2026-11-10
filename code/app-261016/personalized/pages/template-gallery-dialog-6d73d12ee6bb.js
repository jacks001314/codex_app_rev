const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./page-59bac1cfdc2f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./template-gallery-modal-4f828146e385.js",
      "./personalized-pages-9830ca1f3831.js",
      "./space-template-catalog-a49215b2a818.js",
      "./base-carousel-dafba33f875d.js",
      "./local-template-catalog-2eeca06107ff.js",
      "./template-page-creation-7c74ecaa206d.js",
      "./error-21e6fb16598c.js",
      "./prompt-chat-bcb03ce4ce0e.js",
      "./actions-e51654d88035.js",
      "./outgoing-chat-checkpoint-ef81080d85b5.js",
      "./state-cbddb42ae355.js",
      "./page-data-e900d9e89edf.js",
      "./space-e4040a2fa18d.js",
      "./document-1143a4fe17b0.js",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-894c9e9cf353.js",
      "./preview-3690797c434b.js",
      "./editor.module-9d0afa74ff72.js",
      "./editor-8ca9404ddda9.css",
      "./preview-632774fb6fd4.css",
      "./images-8ae6089f5332.js",
      "./url-56322ec4aaae.js",
      "./api-4f89419a04a6.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-e5ef71bd716c.js",
      "./assets-4f7817c757db.js",
      "./thumbnail-units-61a7a67cdfab.js",
      "./template-setup-chat-6d8582e868cb.js",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./floating-chat-surface-1eaefa25765a.js",
      "./quick-chat-floating-resize-handles-1b47363ec958.js",
      "./floating-chat-surface-3b44643095bc.css",
      "./dialog-df52b65648fc.js",
      "./messages-f0392bc949ac.js",
      "./cards-27167f3cb0d7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CI as r,
  F3 as i,
  FBt as a,
  I3 as o,
  LNt as s,
  OFt as c,
  PBt as l,
  Qst as u,
  XOt as d,
  ZSt as f,
  gI as p,
  iCt as m,
  kFt as h,
  mI as g,
  nCt as _,
  okt as v,
  pI as y,
  tkt as b,
  wI as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cmn as S,
  Efn as ee,
  Tfn as C,
  Xzt as w,
  Yzt as T,
  bmn as E,
  co as te,
  fo as ne,
  hlr as D,
  lo as re,
  mlr as ie,
  mo as ae,
  xMr as O,
  xmn as k,
  yMr as A,
} from "./app-initial-ad16eaadf81f.js";
import { i as j, n as M, t as N } from "./template-gallery-modal-4f828146e385.js";
import { c as P, i as F, l as I, o as L, s as R, t as z } from "./personalized-pages-9830ca1f3831.js";
import { n as B, t as V } from "./messages-f0392bc949ac.js";
async function H() {
  return (
    await c(
      async () => {
        let { TemplateGalleryPage: e } = await import(`./page-59bac1cfdc2f.js`);
        return { TemplateGalleryPage: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      ]),
      import.meta.url,
    )
  ).TemplateGalleryPage;
}
async function U() {
  return (
    await c(
      async () => {
        let { TemplateGalleryDialog: e } = await import(`./dialog-df52b65648fc.js`);
        return { TemplateGalleryDialog: e };
      },
      __vite__mapDeps([
        41, 1, 2, 3, 4, 5, 6, 7, 42, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 43,
      ]),
      import.meta.url,
    )
  ).TemplateGalleryDialog;
}
function W() {
  return (W = e(() => {
    h();
  }))();
}
function G(e) {
  let n = (0, J.c)(9),
    { initialGroupId: r, onClose: i } = e,
    a = t(u),
    o;
  n[0] !== i || n[1] !== a
    ? ((o = () => {
        (O(a, E, { action: k.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CLOSED }), i());
      }),
      (n[0] = i),
      (n[1] = a),
      (n[2] = o))
    : (o = n[2]);
  let s = o,
    c = _(D, `granola_presentation`),
    [l, d] = (0, Y.useState)(r ?? null),
    f = l === `presentation` && c ? `slides` : l,
    p;
  n[3] === a
    ? (p = n[4])
    : ((p = (e) => {
        let t = x(e?.id ?? ``);
        (O(a, E, {
          action: k.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CATEGORY_SELECTED,
          category: e?.id === `page` || e?.id === `slides` ? e.id : ((t ? g(t) : `all`) ?? void 0),
        }),
          d(e?.id ?? null));
      }),
      (n[3] = a),
      (n[4] = p));
  let m = p,
    h;
  return (
    n[5] !== s || n[6] !== m || n[7] !== f
      ? ((h = (0, X.jsx)(Y.Suspense, {
          fallback: (0, X.jsx)(K, { onClose: s, selectedGroupId: f, onGalleryGroupSelect: m }),
          children: (0, X.jsx)(Q, { onClose: s, selectedGroupId: f, onGalleryGroupSelect: m }),
        })),
        (n[5] = s),
        (n[6] = m),
        (n[7] = f),
        (n[8] = h))
      : (h = n[8]),
    h
  );
}
function K(e) {
  let t = (0, J.c)(21),
    { onClose: n, selectedGroupId: r, onGalleryGroupSelect: i } = e,
    a = v(),
    o = m(ee),
    s = _(D, `granola_presentation`),
    c = m(I),
    l = _(F, `template-modal`),
    u;
  t[0] !== a || t[1] !== c?.value || t[2] !== o || t[3] !== l?.length
    ? ((u = (o && L(a, c?.value).length > 0) || (l?.length ?? 0) > 0),
      (t[0] = a),
      (t[1] = c?.value),
      (t[2] = o),
      (t[3] = l?.length),
      (t[4] = u))
    : (u = t[4]);
  let d = u,
    f = (0, Y.useRef)(!1),
    p;
  t[5] !== d || t[6] !== a || t[7] !== s
    ? ((p = [...(d ? [`page`] : []), ...(s ? [`slides`, `spreadsheet`] : Z)].map((e) => ({
        id: e,
        label: e === `slides` ? a.formatMessage(B.heading) : a.formatMessage(ne[e]),
        templateTypes: e === `slides` ? [] : y(e === `page` ? `document` : e),
        templates: { status: `loading` },
      }))),
      (t[5] = d),
      (t[6] = a),
      (t[7] = s),
      (t[8] = p))
    : (p = t[8]);
  let h;
  t[9] === n
    ? (h = t[10])
    : ((h = () => {
        ((f.current = !0), n());
      }),
      (t[9] = n),
      (t[10] = h));
  let g;
  t[11] !== i || t[12] !== p || t[13] !== h
    ? ((g = { onGalleryGroupSelect: i, groups: p, onClose: h }),
      (t[11] = i),
      (t[12] = p),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let b;
  t[15] !== r || t[16] !== g
    ? ((b = { selectedGroupId: r, config: g }), (t[15] = r), (t[16] = g), (t[17] = b))
    : (b = t[17]);
  let x = j(b),
    S;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = {
        onCloseAutoFocus: (e) => {
          f.current || e.preventDefault();
        },
      }),
      (t[18] = S))
    : (S = t[18]);
  let C;
  return (
    t[19] === x
      ? (C = t[20])
      : ((C = (0, X.jsx)(te, { children: (0, X.jsx)(N, { open: !0, ...x, card: q, contentProps: S }) })),
        (t[19] = x),
        (t[20] = C)),
    C
  );
}
function q() {
  return null;
}
function oe(e) {
  let t = (0, J.c)(8),
    { onClose: n, failed: r } = e,
    i = r !== void 0 && r,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (e) => {
        e || n();
      }),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = i
        ? (0, X.jsx)(b, {
            id: `space.gettingStarted.templatesLoadError`,
            defaultMessage: `Couldn’t open templates`,
            description: `Title when downloading the Space template gallery fails after retrying`,
          })
        : (0, X.jsx)(b, {
            id: `space.gettingStarted.templatesLoading`,
            defaultMessage: `Loading templates…`,
            description: `Title while downloading the dismissible Space template gallery dialog`,
          })),
      (t[2] = i),
      (t[3] = o));
  let s;
  return (
    t[4] !== i || t[5] !== a || t[6] !== o
      ? ((s = (0, X.jsx)(T, { open: !0, onOpenChange: a, failed: i, title: o })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((J = l()),
      W(),
      S(),
      p(),
      r(),
      M(),
      f(),
      (Y = a()),
      d(),
      ae(),
      re(),
      w(),
      i(),
      ie(),
      A(),
      n(),
      C(),
      P(),
      R(),
      z(),
      V(),
      (X = s()),
      (Z = [`document`, `presentation`, `spreadsheet`]),
      (Q = o(U, {
        suspendToParent: !0,
        errorFallback: ({ onClose: e }) => (0, X.jsx)(oe, { onClose: e, failed: !0 }),
      })));
  }))();
}
export { H as i, $ as n, W as r, G as t };
//# sourceMappingURL=template-gallery-dialog-6d73d12ee6bb.js.map
