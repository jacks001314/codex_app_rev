const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./snapshot-d7d059f001f2.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
      "./workbook-1fd3f253a266.js",
      "./linear-679e303fb101.js",
      "./string-963febbec52f.js",
      "./defaultLocale-1a6eeada7f42.js",
      "./init-cd6c1f803e47.js",
      "./ordinal-654830f58ee1.js",
      "./pow-8b9b02ff1564.js",
      "./nice-2b3cc20611af.js",
      "./band-7f9eb19564f9.js",
      "./treemap-4d58692b5de2.js",
      "./Tableau10-232fa539940a.js",
      "./arc-a62fdff23ebe.js",
      "./path-3b8129ebc7ff.js",
      "./constant-363a14bf6d8f.js",
      "./math-de3a0e0db4e2.js",
      "./linear-51abf1a86c3b.js",
      "./line-5171f1d885cc.js",
      "./array-15adaa1bc228.js",
      "./area-76377dfd01aa.js",
      "./pie-f34043ff89c8.js",
      "./catmullRom-b244076d0269.js",
      "./monotone-68fb4f84bd88.js",
      "./expand-f3906952405c.js",
      "./presentation-20e3999371ab.js",
      "./collab-schema-5e12eae11b34.js",
      "./presentation-image-assets-2852083e62f1.js",
      "./color-72a92632a961.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-f01a044561f7.js",
      "./pdf-font-registry-efaf3d8e56f9.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./merged-range-index-daa96769090a.js",
      "./three.module-859594e5f29f.js",
      "./core-51383d4e7880.js",
      "./union-2f12e2dfc01f.js",
      "./zipObject-b39425e8947b.js",
      "./map-3ea4bc6d7205.js",
      "./limits-697647f44c89.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./initial-update-87a2af1a286b.js",
      "./import-3ef372d1d78a.js",
      "./import-3d08c29cfe8a.js",
      "./api-4f89419a04a6.js",
      "./create-2f871ff61c0e.js",
      "./creation-intents-51ddf095b952.js",
      "./progress-c4e37b986ec3.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  FBt as i,
  LNt as a,
  MH as o,
  MNt as s,
  NNt as c,
  OFt as l,
  PBt as u,
  PH as d,
  Qit as f,
  Qst as p,
  TY as m,
  UTt as h,
  Vrt as g,
  WTt as _,
  XOt as v,
  Y3 as y,
  Z3 as b,
  ZSt as x,
  e6 as S,
  iCt as C,
  kCt as w,
  kFt as T,
  nCt as E,
  nat as D,
  okt as ee,
  qrt as O,
  tkt as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as te,
  Alr as ne,
  CIr as A,
  Cmn as j,
  Klr as M,
  Mir as re,
  Nir as ie,
  Nst as ae,
  Pst as oe,
  SIr as se,
  Smn as N,
  Ycr as ce,
  _p as le,
  _ur as ue,
  bLr as P,
  bmn as de,
  dmn as fe,
  dpn as F,
  fmn as pe,
  gp as I,
  gur as L,
  hdn as R,
  hlr as z,
  lpn as B,
  mlr as V,
  mmn as me,
  qlr as he,
  wLr as H,
  xMr as U,
  xmn as W,
  yMr as ge,
} from "./app-initial-ad16eaadf81f.js";
import { d as _e } from "./template-gallery-modal-4f828146e385.js";
import { n as ve } from "./base-carousel-dafba33f875d.js";
import { n as ye, t as be } from "./messages-f0392bc949ac.js";
import { A as G, j as xe, k as Se } from "./state-cbddb42ae355.js";
import { c as Ce, l as we, o as Te, s as Ee } from "./template-page-creation-7c74ecaa206d.js";
async function De({ scope: e, template: t, onOpen: n, signal: r }) {
  let i = e.get(L),
    a = e.get(P);
  if (i == null || a == null || e.get(K) != null || e.get(F) || !e.get(z, `granola_presentation`)) return;
  let o = ue(e, i, void 0, void 0, a),
    s = new AbortController(),
    c = AbortSignal.any([o.signal, s.signal]),
    u,
    d,
    f = () => {
      u ?? s.abort(r.reason);
    };
  (r.addEventListener(`abort`, f, { once: !0 }), r.aborted && f());
  let p = e.get(ce);
  e.set(K, t.id);
  try {
    let [a, { preparePageHandoff: o }, { importPreparedArtifact: s }] = await Promise.all([
        Se(e, t, c),
        l(
          () => import(`./snapshot-d7d059f001f2.js`),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
          import.meta.url,
        ),
        l(
          () => import(`./import-3ef372d1d78a.js`),
          __vite__mapDeps([
            46, 47, 1, 3, 4, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 48, 43, 44, 49, 50, 51,
          ]),
          import.meta.url,
        ),
      ]),
      f = await o({ kind: `presentation`, artifactProto: a, stateVersion: 0, assets: [] }, c, e.get(ne));
    if ((c.throwIfAborted(), !e.get(z, `granola_presentation`))) return;
    (
      await s(e, {
        accountId: i,
        title: t.title,
        documentType: `granola_presentation`,
        prepared: f,
        signal: c,
        onSaveRetry: (t) => {
          if ((d?.close(), (d = void 0), t != null && u == null && !c.aborted)) {
            let n = e.get(A);
            d = e
              .get(O)
              .danger(n.formatMessage(he.granola_presentation.syncFailed), {
                duration: 0,
                hasCloseButton: !1,
                errorAnalytics: { toastId: `space.slideTemplates.saveFailed` },
                primaryAction: {
                  label: n.formatMessage({
                    id: `pages.native.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry native document synchronization`,
                  }),
                  onClick: t,
                },
              });
          }
        },
        onPageCreated: (t) => {
          ((u = t),
            e.set(K, null),
            !(r.aborted || c.aborted) &&
              (n?.(),
              ie(e, `/space/${t}`, {
                state: {
                  ...(p == null ? void 0 : oe(p, i, t)),
                  spaceSidebarAccountId: i,
                  spaceSidebarPersonal: !0,
                },
              })));
        },
      })
    ).releaseNativeDocument();
  } catch {
    u == null &&
      !c.aborted &&
      e
        .get(O)
        .danger(
          e
            .get(A)
            .formatMessage({
              id: `space.slideTemplates.openFailed`,
              defaultMessage: `Couldn’t open this Slides template. Try again.`,
              description: `Error when a native Slides template cannot be downloaded or opened`,
            }),
          { errorAnalytics: { toastId: `space.slideTemplates.openFailed` } },
        );
  } finally {
    (d?.close(), r.removeEventListener(`abort`, f), o.stop(), u ?? e.set(K, null));
  }
}
var K;
function q() {
  return (q = e(() => {
    (x(), re(), H(), g(), se(), te(), B(), V(), ae(), M(), R(), G(), r(), T(), (K = w(p, null)));
  }))();
}
function J(e) {
  let r = (0, X.c)(20),
    { template: i, onOpen: a, templatePosition: o, surface: s } = e,
    c = n(p),
    l = E(z, `granola_presentation`),
    u = C(K),
    d = C(F),
    m = _(),
    h = (0, Z.useRef)(null),
    g,
    v;
  if (
    (r[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = () => () => h.current?.abort()), (v = []), (r[0] = g), (r[1] = v))
      : ((g = r[0]), (v = r[1])),
    (0, Z.useEffect)(g, v),
    !l)
  )
    return null;
  let y;
  r[2] !== u || r[3] !== i.id
    ? ((y =
        u === i.id
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1`,
              role: `status`,
              children: [
                (0, Q.jsx)(t, { as: `span`, className: `icon-xxs` }),
                (0, Q.jsx)(k, {
                  id: `space.slideTemplates.opening`,
                  defaultMessage: `Opening…`,
                  description: `Status while loading and creating a native Slides template`,
                }),
              ],
            })
          : void 0),
      (r[2] = u),
      (r[3] = i.id),
      (r[4] = y))
    : (y = r[4]);
  let b;
  r[5] === i.thumbnail
    ? (b = r[6])
    : ((b = (0, Q.jsx)(`img`, {
        className: `size-full object-cover`,
        src: i.thumbnail,
        alt: ``,
        draggable: !1,
      })),
      (r[5] = i.thumbnail),
      (r[6] = b));
  let x = u != null || d || !m,
    S;
  r[7] !== a || r[8] !== c || r[9] !== s || r[10] !== i || r[11] !== o
    ? ((S = () => {
        (s === `onboarding` &&
          U(c, fe, {
            action: pe.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
            item: me.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
          }),
          U(c, de, {
            action:
              s === `onboarding`
                ? W.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                : W.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
            category: `slides`,
            templateId: i.id,
            templatePosition: o == null ? void 0 : f(o),
            selectionSurface:
              s === `onboarding`
                ? N.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                : N.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
          }),
          (h.current = new AbortController()),
          De({ scope: c, template: i, onOpen: a, signal: h.current.signal }));
      }),
      (r[7] = a),
      (r[8] = c),
      (r[9] = s),
      (r[10] = i),
      (r[11] = o),
      (r[12] = S))
    : (S = r[12]);
  let w;
  return (
    r[13] !== s || r[14] !== y || r[15] !== b || r[16] !== x || r[17] !== S || r[18] !== i.title
      ? ((w = (0, Q.jsx)(Te, {
          title: i.title,
          kind: `slides`,
          surface: s,
          titleContent: y,
          preview: b,
          disabled: x,
          onOpen: S,
        })),
        (r[13] = s),
        (r[14] = y),
        (r[15] = b),
        (r[16] = x),
        (r[17] = S),
        (r[18] = i.title),
        (r[19] = w))
      : (w = r[19]),
    w
  );
}
function Y(e) {
  let n = (0, X.c)(35),
    { onOpen: r, expanded: i } = e,
    a = i !== void 0 && i,
    c = E(z, `granola_presentation`),
    l = ee(),
    u = C(P),
    f;
  n[0] === c ? (f = n[1]) : ((f = { enabled: c }), (n[0] = c), (n[1] = f));
  let { data: p, isLoading: m, isError: h, refetch: g } = C(xe, f),
    _ = (0, Z.useId)(),
    v = _e();
  if (!c) return null;
  let b;
  if (m) {
    let e;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(t, {})), (n[2] = e)) : (e = n[2]);
    let r;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsxs)(`div`, {
          role: `status`,
          children: [
            e,
            (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(k, {
                id: `space.slideTemplates.loading`,
                defaultMessage: `Loading Slides templates`,
                description: `Status while the shared native Slides template catalog loads`,
              }),
            }),
          ],
        })),
        (n[3] = r))
      : (r = n[3]),
      (b = r));
  } else if (h) {
    let e;
    n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(k, {
          id: `space.slideTemplates.loadFailed`,
          defaultMessage: `Couldn’t load Slides templates`,
          description: `Error when the shared native Slides template catalog cannot load`,
        })),
        (n[4] = e))
      : (e = n[4]);
    let t;
    n[5] === g ? (t = n[6]) : ((t = () => void g()), (n[5] = g), (n[6] = t));
    let r;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(k, {
          id: `space.slideTemplates.retry`,
          defaultMessage: `Try again`,
          description: `Retry loading the shared native Slides template catalog`,
        })),
        (n[7] = r))
      : (r = n[7]);
    let i;
    (n[8] === t
      ? (i = n[9])
      : ((i = (0, Q.jsxs)(I, {
          children: [e, (0, Q.jsx)(y, { color: `ghost`, size: `toolbar`, onClick: t, children: r })],
        })),
        (n[8] = t),
        (n[9] = i)),
      (b = i));
  } else if (p?.length === 0) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(I, {
          children: (0, Q.jsx)(k, {
            id: `space.slideTemplates.empty`,
            defaultMessage: `No Slides templates available`,
            description: `Empty state when the shared catalog has no eligible native Slides templates`,
          }),
        })),
        (n[10] = e))
      : (e = n[10]),
      (b = e));
  } else {
    let e = a ? void 0 : v.actions.viewportRef,
      t = a
        ? `grid grid-cols-3 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1`
        : `horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]`,
      i;
    n[11] === t ? (i = n[12]) : ((i = s(`-m-2 min-w-0 gap-3 p-3`, t)), (n[11] = t), (n[12] = i));
    let o;
    n[13] !== r || n[14] !== p || n[15] !== u
      ? ((o =
          p != null &&
          we(p, u).map((e, t) =>
            (0, Q.jsx)(
              J,
              { template: e, templatePosition: u == null ? void 0 : t + 1, onOpen: r, surface: `gallery` },
              e.id,
            ),
          )),
        (n[13] = r),
        (n[14] = p),
        (n[15] = u),
        (n[16] = o))
      : (o = n[16]);
    let c;
    (n[17] !== e || n[18] !== i || n[19] !== o
      ? ((c = (0, Q.jsx)(`div`, { ref: e, className: i, children: o })),
        (n[17] = e),
        (n[18] = i),
        (n[19] = o),
        (n[20] = c))
      : (c = n[20]),
      (b = c));
  }
  let x;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(k, { ...ye.heading })), (n[21] = x))
    : (x = n[21]);
  let S;
  n[22] === _
    ? (S = n[23])
    : ((S = (0, Q.jsx)(`h3`, { id: _, className: `m-0 body-md font-semibold`, children: x })),
      (n[22] = _),
      (n[23] = S));
  let w;
  n[24] !== v || n[25] !== a || n[26] !== l
    ? ((w =
        !a &&
        (v.model.canPrevious || v.model.canNext) &&
        (0, Q.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-1`,
          children: [
            (0, Q.jsx)(y, {
              color: `ghostActive`,
              size: `toolbar`,
              uniform: !0,
              disabled: !v.model.canPrevious,
              onClick: v.actions.previous,
              "aria-label": l.formatMessage({
                id: `space.slideTemplates.previous`,
                defaultMessage: `Previous Slides templates`,
                description: `Scroll the native Slides templates carousel backward`,
              }),
              children: (0, Q.jsx)(o, { className: `rtl:rotate-180` }),
            }),
            (0, Q.jsx)(y, {
              color: `ghostActive`,
              size: `toolbar`,
              uniform: !0,
              disabled: !v.model.canNext,
              onClick: v.actions.next,
              "aria-label": l.formatMessage({
                id: `space.slideTemplates.next`,
                defaultMessage: `Next Slides templates`,
                description: `Scroll the native Slides templates carousel forward`,
              }),
              children: (0, Q.jsx)(d, { className: `rtl:rotate-180` }),
            }),
          ],
        })),
      (n[24] = v),
      (n[25] = a),
      (n[26] = l),
      (n[27] = w))
    : (w = n[27]);
  let T;
  n[28] !== S || n[29] !== w
    ? ((T = (0, Q.jsxs)(`div`, {
        className: `mb-3 flex items-center justify-between gap-2`,
        children: [S, w],
      })),
      (n[28] = S),
      (n[29] = w),
      (n[30] = T))
    : (T = n[30]);
  let D;
  return (
    n[31] !== b || n[32] !== _ || n[33] !== T
      ? ((D = (0, Q.jsxs)(`section`, { "aria-labelledby": _, children: [T, b] })),
        (n[31] = b),
        (n[32] = _),
        (n[33] = T),
        (n[34] = D))
      : (D = n[34]),
    D
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = u()),
      j(),
      D(),
      ve(),
      c(),
      h(),
      x(),
      (Z = i()),
      v(),
      H(),
      b(),
      m(),
      le(),
      S(),
      B(),
      V(),
      G(),
      ge(),
      r(),
      Ce(),
      Ee(),
      be(),
      q(),
      (Q = a()));
  }))();
}
export { Y as n, $ as r, J as t };
//# sourceMappingURL=cards-27167f3cb0d7.js.map
