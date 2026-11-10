const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./page-dd3fbab75274.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./template-gallery-modal-336945a0604c.js",
      "./personalized-pages-f207fdb0390c.js",
      "./space-template-catalog-3f8a73645ced.js",
      "./base-carousel-4c9d62a2a0f3.js",
      "./local-template-catalog-a372c79f39a5.js",
      "./template-page-creation-cf203b187288.js",
      "./error-21e6fb16598c.js",
      "./prompt-chat-13929d3098ec.js",
      "./actions-2467c5f5431b.js",
      "./outgoing-chat-checkpoint-4520e6fa6219.js",
      "./state-dc42f06f4898.js",
      "./page-data-cccc3d9aff4b.js",
      "./space-1fd481862d3e.js",
      "./document-e135fecdb63d.js",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-e2ffcb23d363.js",
      "./preview-3e5329112556.js",
      "./editor.module-79b8a30b4fbe.js",
      "./editor-c20f2a3b7037.css",
      "./preview-632774fb6fd4.css",
      "./images-7c1b1f09d7e2.js",
      "./url-4698e75f04db.js",
      "./api-d4f3b59d2f9b.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-2ff7f696ceb6.js",
      "./assets-4f7817c757db.js",
      "./thumbnail-units-f6617d0ee142.js",
      "./template-setup-chat-bb52ad9352ed.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./quick-chat-floating-surface-51ff4a9417a5.js",
      "./quick-chat-floating-resize-handles-884029d75925.js",
      "./quick-chat-floating-surface-aa86cc62cf7b.css",
      "./dialog-c226d47536d5.js",
      "./messages-3107a346dc40.js",
      "./cards-387dce3178f4.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  Cot as n,
  DF as r,
  FF as i,
  IDt as a,
  Ixt as o,
  PF as s,
  Pxt as c,
  TF as l,
  VDt as u,
  Vxt as d,
  fPt as f,
  jDt as p,
  pPt as m,
  vzt as h,
  wF as g,
  wot as _,
  xMt as v,
  yzt as y,
  z4 as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dar as S,
  Dun as C,
  Ear as w,
  MWt as ee,
  Mcn as te,
  NWt as ne,
  QDr as T,
  Tun as E,
  XDr as D,
  fo as O,
  jcn as k,
  oo as A,
  so as j,
  uo as M,
  wun as N,
} from "./app-initial-5851df3f6cb1.js";
import { i as P, n as F, t as I } from "./template-gallery-modal-336945a0604c.js";
import { c as L, i as R, l as z, o as B, s as V, t as H } from "./personalized-pages-f207fdb0390c.js";
import { n as U, t as W } from "./messages-3107a346dc40.js";
async function G() {
  return (
    await f(
      async () => {
        let { TemplateGalleryPage: e } = await import(`./page-dd3fbab75274.js`);
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
async function K() {
  return (
    await f(
      async () => {
        let { TemplateGalleryDialog: e } = await import(`./dialog-c226d47536d5.js`);
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
function q() {
  return (q = e(() => {
    m();
  }))();
}
function re(e) {
  let t = (0, J.c)(9),
    { initialGroupId: r, onClose: a } = e,
    s = o(n),
    c;
  t[0] !== a || t[1] !== s
    ? ((c = () => {
        (T(s, N, { action: E.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CLOSED }), a());
      }),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let u = c,
    d = x(S, `granola_presentation`),
    [f, p] = (0, Y.useState)(r ?? null),
    m = f === `presentation` && d ? `slides` : f,
    h;
  t[3] === s
    ? (h = t[4])
    : ((h = (e) => {
        let t = i(e?.id ?? ``);
        (T(s, N, {
          action: E.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_CATEGORY_SELECTED,
          category: e?.id === `page` || e?.id === `slides` ? e.id : ((t ? l(t) : `all`) ?? void 0),
        }),
          p(e?.id ?? null));
      }),
      (t[3] = s),
      (t[4] = h));
  let g = h,
    _;
  return (
    t[5] !== u || t[6] !== g || t[7] !== m
      ? ((_ = (0, X.jsx)(Y.Suspense, {
          fallback: (0, X.jsx)(ie, { onClose: u, selectedGroupId: m, onGalleryGroupSelect: g }),
          children: (0, X.jsx)(Q, { onClose: u, selectedGroupId: m, onGalleryGroupSelect: g }),
        })),
        (t[5] = u),
        (t[6] = g),
        (t[7] = m),
        (t[8] = _))
      : (_ = t[8]),
    _
  );
}
function ie(e) {
  let t = (0, J.c)(21),
    { onClose: n, selectedGroupId: r, onGalleryGroupSelect: i } = e,
    a = u(),
    o = d(te),
    s = x(S, `granola_presentation`),
    c = d(z),
    l = x(R, `template-modal`),
    f;
  t[0] !== a || t[1] !== c?.value || t[2] !== o || t[3] !== l?.length
    ? ((f = (o && B(a, c?.value).length > 0) || (l?.length ?? 0) > 0),
      (t[0] = a),
      (t[1] = c?.value),
      (t[2] = o),
      (t[3] = l?.length),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    m = (0, Y.useRef)(!1),
    h;
  t[5] !== p || t[6] !== a || t[7] !== s
    ? ((h = [...(p ? [`page`] : []), ...(s ? [`slides`, `spreadsheet`] : Z)].map((e) => ({
        id: e,
        label: e === `slides` ? a.formatMessage(U.heading) : a.formatMessage(M[e]),
        templateTypes: e === `slides` ? [] : g(e === `page` ? `document` : e),
        templates: { status: `loading` },
      }))),
      (t[5] = p),
      (t[6] = a),
      (t[7] = s),
      (t[8] = h))
    : (h = t[8]);
  let _;
  t[9] === n
    ? (_ = t[10])
    : ((_ = () => {
        ((m.current = !0), n());
      }),
      (t[9] = n),
      (t[10] = _));
  let v;
  t[11] !== i || t[12] !== h || t[13] !== _
    ? ((v = { onGalleryGroupSelect: i, groups: h, onClose: _ }),
      (t[11] = i),
      (t[12] = h),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== r || t[16] !== v
    ? ((y = { selectedGroupId: r, config: v }), (t[15] = r), (t[16] = v), (t[17] = y))
    : (y = t[17]);
  let b = P(y),
    C;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = {
        onCloseAutoFocus: (e) => {
          m.current || e.preventDefault();
        },
      }),
      (t[18] = C))
    : (C = t[18]);
  let w;
  return (
    t[19] === b
      ? (w = t[20])
      : ((w = (0, X.jsx)(A, { children: (0, X.jsx)(I, { open: !0, ...b, card: ae, contentProps: C }) })),
        (t[19] = b),
        (t[20] = w)),
    w
  );
}
function ae() {
  return null;
}
function oe(e) {
  let t = (0, J.c)(8),
    { onClose: n, failed: r } = e,
    i = r !== void 0 && r,
    o;
  t[0] === n
    ? (o = t[1])
    : ((o = (e) => {
        e || n();
      }),
      (t[0] = n),
      (t[1] = o));
  let s;
  t[2] === i
    ? (s = t[3])
    : ((s = i
        ? (0, X.jsx)(a, {
            id: `space.gettingStarted.templatesLoadError`,
            defaultMessage: `Couldn’t open templates`,
            description: `Title when downloading the Space template gallery fails after retrying`,
          })
        : (0, X.jsx)(a, {
            id: `space.gettingStarted.templatesLoading`,
            defaultMessage: `Loading templates…`,
            description: `Title while downloading the dismissible Space template gallery dialog`,
          })),
      (t[2] = i),
      (t[3] = s));
  let c;
  return (
    t[4] !== i || t[5] !== o || t[6] !== s
      ? ((c = (0, X.jsx)(ee, { open: !0, onOpenChange: o, failed: i, title: s })),
        (t[4] = i),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
var J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((J = h()),
      q(),
      C(),
      r(),
      s(),
      F(),
      c(),
      (Y = y()),
      p(),
      O(),
      j(),
      ne(),
      b(),
      w(),
      D(),
      _(),
      k(),
      L(),
      V(),
      H(),
      W(),
      (X = v()),
      (Z = [`document`, `presentation`, `spreadsheet`]),
      (Q = t(K, {
        suspendToParent: !0,
        errorFallback: ({ onClose: e }) => (0, X.jsx)(oe, { onClose: e, failed: !0 }),
      })));
  }))();
}
export { G as i, $ as n, q as r, re as t };
//# sourceMappingURL=template-gallery-dialog-26b17a1e644b.js.map
