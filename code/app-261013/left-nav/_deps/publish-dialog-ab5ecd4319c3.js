import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  fO as i,
  gO as a,
  jDt as o,
  mO as s,
  oO as c,
  t3 as l,
  vO as u,
  vzt as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
import { aDr as p, eDr as m, gKt as h, hGt as g, hKt as _, mGt as v } from "./app-initial-5851df3f6cb1.js";
var y;
function b() {
  return (b = e(() => {
    y = `` + new URL(`build-site-63fcb45f2a46.png`, import.meta.url).href;
  }))();
}
function x(e) {
  let t = (0, C.c)(9),
    { currentPlan: n, sourceThreadId: r, onCancel: i } = e,
    a = p(),
    o = g(),
    s;
  t[0] !== a || t[1] !== n || t[2] !== i || t[3] !== o || t[4] !== r
    ? ((s = h(a, T)
        ? (e) => {
            (i(),
              o({
                currentPlan: n,
                defaultTab: `personal`,
                event: e,
                chatGptContext: {
                  openModalLocation: T,
                  checkoutOriginProductExperience: `work`,
                  targetPlan: `plus`,
                  upsellContextId: `work`,
                  sourceThreadId: r,
                },
                source: `work_mode_upsell`,
              }));
          }
        : void 0),
      (t[0] = a),
      (t[1] = n),
      (t[2] = i),
      (t[3] = o),
      (t[4] = r),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== i || t[7] !== s
      ? ((c = (0, w.jsx)(S, { onCancel: i, onUpgrade: s })), (t[6] = i), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
function S(e) {
  let i = (0, C.c)(12),
    { onCancel: o, onUpgrade: l } = e,
    u;
  i[0] === o
    ? (u = i[1])
    : ((u = (e) => {
        e || o();
      }),
      (i[0] = o),
      (i[1] = u));
  let d;
  i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, w.jsxs)(`div`, {
        className: `relative h-49 shrink-0 overflow-hidden select-none`,
        children: [
          (0, w.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-0 bg-linear-to-b from-purple/30 to-transparent`,
          }),
          (0, w.jsx)(`img`, {
            alt: ``,
            className: `pointer-events-none absolute start-1/2 top-9 h-auto w-[403px] max-w-[90%] -translate-x-1/2 sm:top-3 rtl:translate-x-1/2`,
            height: 647,
            src: y,
            width: 942,
          }),
          (0, w.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface-elevated-secondary from-25% via-surface-elevated-secondary/80 to-transparent`,
          }),
        ],
      })),
      (i[2] = d))
    : (d = i[2]);
  let f;
  i[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, w.jsx)(r, {
        className: `text-xl font-semibold`,
        children: (0, w.jsx)(n, {
          id: `sitesPreview.share.title`,
          defaultMessage: `Ready to share your site?`,
          description: `Title of the upgrade prompt opened by Share on a saved Sites preview`,
        }),
      })),
      (i[3] = f))
    : (f = i[3]);
  let p;
  i[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, w.jsx)(a, {
        className: `text-sm leading-5 text-default`,
        children: (0, w.jsx)(n, {
          id: `sitesPreview.share.description`,
          defaultMessage: `Upgrade to share your website, add secure user accounts and persistent data, use a custom domain, and collaborate with others`,
          description: `Describes the paid Sites features in the preview upgrade prompt`,
        }),
      })),
      (i[4] = p))
    : (p = i[4]);
  let m;
  i[5] === l
    ? (m = i[6])
    : ((m =
        l == null
          ? null
          : (0, w.jsx)(t, {
              color: `primary`,
              size: `dialogAction`,
              type: `button`,
              onClick: l,
              children: (0, w.jsx)(n, {
                id: `sitesPreview.share.upgrade`,
                defaultMessage: `Upgrade to publish`,
                description: `Opens subscription pricing from the saved website preview's upgrade dialog`,
              }),
            })),
      (i[5] = l),
      (i[6] = m));
  let h;
  i[7] === m
    ? (h = i[8])
    : ((h = (0, w.jsxs)(c, {
        variant: `chatgpt`,
        children: [
          d,
          (0, w.jsxs)(`div`, {
            className: `flex flex-col items-center gap-6 p-6 text-center select-none`,
            children: [f, p, m],
          }),
        ],
      })),
      (i[7] = m),
      (i[8] = h));
  let g;
  return (
    i[9] !== u || i[10] !== h
      ? ((g = (0, w.jsx)(s, {
          open: !0,
          size: `default`,
          variant: `promotional`,
          onOpenChange: u,
          children: h,
        })),
        (i[9] = u),
        (i[10] = h),
        (i[11] = g))
      : (g = i[11]),
    g
  );
}
var C, w, T;
function E() {
  return (E = e(() => {
    ((C = d()), o(), l(), u(), i(), _(), v(), m(), b(), (w = f()), (T = `tpp work toggle upsell`));
  }))();
}
E();
export { x as SitesPreviewPublishDialog };
//# sourceMappingURL=publish-dialog-ab5ecd4319c3.js.map
