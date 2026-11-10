const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./snapshot-5c7f52be8c27.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
      "./workbook-2a2fa1be98a2.js",
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
      "./presentation-c2faa0e77c2e.js",
      "./collab-schema-1362362c8a67.js",
      "./presentation-image-assets-a76b94db6072.js",
      "./color-fe822360a2e9.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-b1cd26f1820c.js",
      "./pdf-font-registry-efaf3d8e56f9.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./merged-range-index-daa96769090a.js",
      "./three.module-859594e5f29f.js",
      "./core-51383d4e7880.js",
      "./union-2f12e2dfc01f.js",
      "./zipObject-b39425e8947b.js",
      "./map-3ea4bc6d7205.js",
      "./limits-121b5b51476f.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./initial-update-8c4775a22ffc.js",
      "./import-5201cb2f6e39.js",
      "./import-c17621d7da6d.js",
      "./api-d4f3b59d2f9b.js",
      "./create-99079ba28c84.js",
      "./creation-intents-432d9bada664.js",
      "./progress-88ad9ddbac59.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Brt as n,
  Cot as r,
  IDt as i,
  IV as a,
  Irt as o,
  Ixt as s,
  Pxt as c,
  RV as l,
  TJ as u,
  Twt as d,
  VDt as f,
  Vxt as p,
  _Mt as m,
  fPt as h,
  fSt as g,
  gMt as _,
  hot as v,
  i3 as y,
  jDt as b,
  lot as x,
  pPt as S,
  r3 as C,
  t3 as w,
  vzt as T,
  wot as E,
  wwt as D,
  xMt as O,
  yzt as ee,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dar as A,
  Dor as te,
  Dun as j,
  Ear as M,
  Eun as N,
  FFr as ne,
  Har as P,
  Oor as F,
  QDr as I,
  Sot as re,
  Tun as L,
  XDr as ie,
  YMr as R,
  aIr as ae,
  gln as z,
  gun as oe,
  hp as se,
  hun as ce,
  ior as le,
  lIr as B,
  mln as V,
  mp as H,
  oIr as U,
  ror as ue,
  tNr as W,
  uIr as de,
  vun as fe,
  wun as pe,
  xot as me,
  xsn as he,
  zFr as ge,
} from "./app-initial-5851df3f6cb1.js";
import { d as _e } from "./template-gallery-modal-336945a0604c.js";
import { n as ve } from "./base-carousel-4c9d62a2a0f3.js";
import { n as ye, t as be } from "./messages-3107a346dc40.js";
import { A as G, j as xe, k as Se } from "./state-dc42f06f4898.js";
import { c as Ce, l as we, o as Te, s as Ee } from "./template-page-creation-cf203b187288.js";
async function De({ scope: e, template: t, onOpen: n, signal: r }) {
  let i = e.get(te),
    a = e.get(R);
  if (i == null || a == null || e.get(K) != null || e.get(z) || !e.get(A, `granola_presentation`)) return;
  let o = F(e, i, void 0, void 0, a),
    s = new AbortController(),
    c = AbortSignal.any([o.signal, s.signal]),
    l,
    u,
    d = () => {
      l ?? s.abort(r.reason);
    };
  (r.addEventListener(`abort`, d, { once: !0 }), r.aborted && d());
  let f = e.get(ne);
  e.set(K, t.id);
  try {
    let [a, { preparePageHandoff: o }, { importPreparedArtifact: s }] = await Promise.all([
        Se(e, t, c),
        h(
          () => import(`./snapshot-5c7f52be8c27.js`),
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
          ]),
          import.meta.url,
        ),
        h(
          () => import(`./import-5201cb2f6e39.js`),
          __vite__mapDeps([
            46, 47, 1, 3, 4, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 48, 43, 44, 49, 50, 51,
          ]),
          import.meta.url,
        ),
      ]),
      d = await o({ kind: `presentation`, artifactProto: a, stateVersion: 0, assets: [] }, c, e.get(P));
    if ((c.throwIfAborted(), !e.get(A, `granola_presentation`))) return;
    (
      await s(e, {
        accountId: i,
        title: t.title,
        documentType: `granola_presentation`,
        prepared: d,
        signal: c,
        onSaveRetry: (t) => {
          if ((u?.close(), (u = void 0), t != null && l == null && !c.aborted)) {
            let n = e.get(U);
            u = e
              .get(v)
              .danger(n.formatMessage(le.granola_presentation.syncFailed), {
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
          ((l = t),
            e.set(K, null),
            !(r.aborted || c.aborted) &&
              (n?.(),
              de(e, `/space/${t}`, {
                state: {
                  ...(f == null ? void 0 : re(f, i, t)),
                  spaceSidebarAccountId: i,
                  spaceSidebarPersonal: !0,
                },
              })));
        },
      })
    ).releaseNativeDocument();
  } catch {
    l == null &&
      !c.aborted &&
      e
        .get(v)
        .danger(
          e
            .get(U)
            .formatMessage({
              id: `space.slideTemplates.openFailed`,
              defaultMessage: `Couldn’t open this Slides template. Try again.`,
              description: `Error when a native Slides template cannot be downloaded or opened`,
            }),
          { errorAnalytics: { toastId: `space.slideTemplates.openFailed` } },
        );
  } finally {
    (u?.close(), r.removeEventListener(`abort`, d), o.stop(), l ?? e.set(K, null));
  }
}
var K;
function q() {
  return (q = e(() => {
    (c(), B(), W(), x(), ae(), ge(), V(), M(), me(), ue(), he(), G(), E(), S(), (K = g(r, null)));
  }))();
}
function J(e) {
  let t = (0, X.c)(20),
    { template: n, onOpen: a, templatePosition: c, surface: l } = e,
    u = s(r),
    f = k(A, `granola_presentation`),
    m = p(K),
    h = p(z),
    g = d(),
    _ = (0, Z.useRef)(null),
    v,
    y;
  if (
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = () => () => _.current?.abort()), (y = []), (t[0] = v), (t[1] = y))
      : ((v = t[0]), (y = t[1])),
    (0, Z.useEffect)(v, y),
    !f)
  )
    return null;
  let b;
  t[2] !== m || t[3] !== n.id
    ? ((b =
        m === n.id
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1`,
              role: `status`,
              children: [
                (0, Q.jsx)(C, { as: `span`, className: `icon-xxs` }),
                (0, Q.jsx)(i, {
                  id: `space.slideTemplates.opening`,
                  defaultMessage: `Opening…`,
                  description: `Status while loading and creating a native Slides template`,
                }),
              ],
            })
          : void 0),
      (t[2] = m),
      (t[3] = n.id),
      (t[4] = b))
    : (b = t[4]);
  let x;
  t[5] === n.thumbnail
    ? (x = t[6])
    : ((x = (0, Q.jsx)(`img`, {
        className: `size-full object-cover`,
        src: n.thumbnail,
        alt: ``,
        draggable: !1,
      })),
      (t[5] = n.thumbnail),
      (t[6] = x));
  let S = m != null || h || !g,
    w;
  t[7] !== a || t[8] !== u || t[9] !== l || t[10] !== n || t[11] !== c
    ? ((w = () => {
        (l === `onboarding` &&
          I(u, ce, {
            action: oe.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
            item: fe.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
          }),
          I(u, pe, {
            action:
              l === `onboarding`
                ? L.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                : L.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
            category: `slides`,
            templateId: n.id,
            templatePosition: c == null ? void 0 : o(c),
            selectionSurface:
              l === `onboarding`
                ? N.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                : N.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
          }),
          (_.current = new AbortController()),
          De({ scope: u, template: n, onOpen: a, signal: _.current.signal }));
      }),
      (t[7] = a),
      (t[8] = u),
      (t[9] = l),
      (t[10] = n),
      (t[11] = c),
      (t[12] = w))
    : (w = t[12]);
  let T;
  return (
    t[13] !== l || t[14] !== b || t[15] !== x || t[16] !== S || t[17] !== w || t[18] !== n.title
      ? ((T = (0, Q.jsx)(Te, {
          title: n.title,
          kind: `slides`,
          surface: l,
          titleContent: b,
          preview: x,
          disabled: S,
          onOpen: w,
        })),
        (t[13] = l),
        (t[14] = b),
        (t[15] = x),
        (t[16] = S),
        (t[17] = w),
        (t[18] = n.title),
        (t[19] = T))
      : (T = t[19]),
    T
  );
}
function Y(e) {
  let n = (0, X.c)(35),
    { onOpen: r, expanded: o } = e,
    s = o !== void 0 && o,
    c = k(A, `granola_presentation`),
    u = f(),
    d = p(R),
    m;
  n[0] === c ? (m = n[1]) : ((m = { enabled: c }), (n[0] = c), (n[1] = m));
  let { data: h, isLoading: g, isError: v, refetch: y } = p(xe, m),
    b = (0, Z.useId)(),
    x = _e();
  if (!c) return null;
  let S;
  if (g) {
    let e;
    n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(C, {})), (n[2] = e)) : (e = n[2]);
    let t;
    (n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsxs)(`div`, {
          role: `status`,
          children: [
            e,
            (0, Q.jsx)(`span`, {
              className: `sr-only`,
              children: (0, Q.jsx)(i, {
                id: `space.slideTemplates.loading`,
                defaultMessage: `Loading Slides templates`,
                description: `Status while the shared native Slides template catalog loads`,
              }),
            }),
          ],
        })),
        (n[3] = t))
      : (t = n[3]),
      (S = t));
  } else if (v) {
    let e;
    n[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(i, {
          id: `space.slideTemplates.loadFailed`,
          defaultMessage: `Couldn’t load Slides templates`,
          description: `Error when the shared native Slides template catalog cannot load`,
        })),
        (n[4] = e))
      : (e = n[4]);
    let r;
    n[5] === y ? (r = n[6]) : ((r = () => void y()), (n[5] = y), (n[6] = r));
    let a;
    n[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(i, {
          id: `space.slideTemplates.retry`,
          defaultMessage: `Try again`,
          description: `Retry loading the shared native Slides template catalog`,
        })),
        (n[7] = a))
      : (a = n[7]);
    let o;
    (n[8] === r
      ? (o = n[9])
      : ((o = (0, Q.jsxs)(H, {
          children: [e, (0, Q.jsx)(t, { color: `ghost`, size: `toolbar`, onClick: r, children: a })],
        })),
        (n[8] = r),
        (n[9] = o)),
      (S = o));
  } else if (h?.length === 0) {
    let e;
    (n[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(H, {
          children: (0, Q.jsx)(i, {
            id: `space.slideTemplates.empty`,
            defaultMessage: `No Slides templates available`,
            description: `Empty state when the shared catalog has no eligible native Slides templates`,
          }),
        })),
        (n[10] = e))
      : (e = n[10]),
      (S = e));
  } else {
    let e = s ? void 0 : x.actions.viewportRef,
      t = s
        ? `grid grid-cols-3 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1`
        : `horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]`,
      i;
    n[11] === t ? (i = n[12]) : ((i = _(`-m-2 min-w-0 gap-3 p-3`, t)), (n[11] = t), (n[12] = i));
    let a;
    n[13] !== r || n[14] !== h || n[15] !== d
      ? ((a =
          h != null &&
          we(h, d).map((e, t) =>
            (0, Q.jsx)(
              J,
              { template: e, templatePosition: d == null ? void 0 : t + 1, onOpen: r, surface: `gallery` },
              e.id,
            ),
          )),
        (n[13] = r),
        (n[14] = h),
        (n[15] = d),
        (n[16] = a))
      : (a = n[16]);
    let o;
    (n[17] !== e || n[18] !== i || n[19] !== a
      ? ((o = (0, Q.jsx)(`div`, { ref: e, className: i, children: a })),
        (n[17] = e),
        (n[18] = i),
        (n[19] = a),
        (n[20] = o))
      : (o = n[20]),
      (S = o));
  }
  let w;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(i, { ...ye.heading })), (n[21] = w))
    : (w = n[21]);
  let T;
  n[22] === b
    ? (T = n[23])
    : ((T = (0, Q.jsx)(`h3`, { id: b, className: `m-0 body-md font-semibold`, children: w })),
      (n[22] = b),
      (n[23] = T));
  let E;
  n[24] !== x || n[25] !== s || n[26] !== u
    ? ((E =
        !s &&
        (x.model.canPrevious || x.model.canNext) &&
        (0, Q.jsxs)(`div`, {
          className: `flex shrink-0 items-center gap-1`,
          children: [
            (0, Q.jsx)(t, {
              color: `ghostActive`,
              size: `toolbar`,
              uniform: !0,
              disabled: !x.model.canPrevious,
              onClick: x.actions.previous,
              "aria-label": u.formatMessage({
                id: `space.slideTemplates.previous`,
                defaultMessage: `Previous Slides templates`,
                description: `Scroll the native Slides templates carousel backward`,
              }),
              children: (0, Q.jsx)(a, { className: `rtl:rotate-180` }),
            }),
            (0, Q.jsx)(t, {
              color: `ghostActive`,
              size: `toolbar`,
              uniform: !0,
              disabled: !x.model.canNext,
              onClick: x.actions.next,
              "aria-label": u.formatMessage({
                id: `space.slideTemplates.next`,
                defaultMessage: `Next Slides templates`,
                description: `Scroll the native Slides templates carousel forward`,
              }),
              children: (0, Q.jsx)(l, { className: `rtl:rotate-180` }),
            }),
          ],
        })),
      (n[24] = x),
      (n[25] = s),
      (n[26] = u),
      (n[27] = E))
    : (E = n[27]);
  let D;
  n[28] !== T || n[29] !== E
    ? ((D = (0, Q.jsxs)(`div`, {
        className: `mb-3 flex items-center justify-between gap-2`,
        children: [T, E],
      })),
      (n[28] = T),
      (n[29] = E),
      (n[30] = D))
    : (D = n[30]);
  let O;
  return (
    n[31] !== S || n[32] !== b || n[33] !== D
      ? ((O = (0, Q.jsxs)(`section`, { "aria-labelledby": b, children: [D, S] })),
        (n[31] = S),
        (n[32] = b),
        (n[33] = D),
        (n[34] = O))
      : (O = n[34]),
    O
  );
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = T()),
      j(),
      n(),
      ve(),
      m(),
      D(),
      c(),
      (Z = ee()),
      b(),
      W(),
      w(),
      u(),
      se(),
      y(),
      V(),
      M(),
      G(),
      ie(),
      E(),
      Ce(),
      Ee(),
      be(),
      q(),
      (Q = O()));
  }))();
}
export { Y as n, $ as r, J as t };
//# sourceMappingURL=cards-387dce3178f4.js.map
