import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $R as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  QR as s,
  VDt as c,
  Vxt as l,
  jDt as u,
  oSt as d,
  t3 as f,
  vzt as p,
  wot as m,
  xMt as h,
  yzt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  JZn as v,
  T2t as y,
  VZn as b,
  sNn as ee,
  w2t as x,
  xNn as S,
  y2t as C,
  yjn as w,
} from "./app-initial-5851df3f6cb1.js";
import { n as T, t as te } from "./option-carousel-e5b5a4ffecb9.js";
import { n as E, t as ne } from "./chatgpt-conversation-composer-context-75518ab926e7.js";
import { a as D, c as O, i as re, n as ie, o as k, r as A, s as j } from "./prompts-3b065b65c04f.js";
import { a as M, i as N, n as P, r as F } from "./uploads-integration-rail-f6f356f973d9.js";
function I(e) {
  let o = (0, R.c)(48),
    { conversationId: s, disabled: u } = e,
    d = a(r),
    f = c(),
    p = (0, z.useContext)(ne),
    m = p?.conversationId === s ? p.composer : null,
    h = l(V),
    { isError: g, refetch: x } = l(k),
    { isError: S, refetch: w } = l(j),
    T = l(n),
    E = _(b, s),
    D = _(C, s),
    [O, A] = (0, z.useState)(!1),
    M;
  o[0] !== m || o[1] !== u || o[2] !== E
    ? ((M = u || v(E) || m == null), (o[0] = m), (o[1] = u), (o[2] = E), (o[3] = M))
    : (M = o[3]);
  let F = M,
    I = O && D != null,
    H;
  o[4] !== F || o[5] !== m || o[6] !== s || o[7] !== I
    ? ((H = I
        ? (0, B.jsx)(P, {
            conversationId: s,
            disabled: F,
            uploadDisabled: !m?.canOpenImagePicker,
            onBack: () => A(!1),
            onUpload: () => m?.openFileDialog(!0),
            onRecentImageSelected: () => m?.focus(),
          })
        : null),
      (o[4] = F),
      (o[5] = m),
      (o[6] = s),
      (o[7] = I),
      (o[8] = H))
    : (H = o[8]);
  let U;
  o[9] !== g || o[10] !== h.length || o[11] !== x || o[12] !== w || o[13] !== S
    ? ((U =
        h.length === 0 && (g || S)
          ? (0, B.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-wrap items-center gap-2 text-sm text-secondary`,
              children: [
                (0, B.jsx)(i, {
                  id: `images.catalog.loadError`,
                  defaultMessage: `Some image prompts couldn't be loaded`,
                  description: `Error above image creation prompt cards when the catalog or styles request fails. The neighboring Retry button reloads the missing prompts.`,
                }),
                (0, B.jsx)(t, {
                  color: `secondary`,
                  onClick: () => {
                    (x(), w());
                  },
                  children: (0, B.jsx)(i, {
                    id: `images.catalog.retry`,
                    defaultMessage: `Retry`,
                    description: `Button on the Images page that retries loading failed image creation prompt collections.`,
                  }),
                }),
              ],
            })
          : null),
      (o[9] = g),
      (o[10] = h.length),
      (o[11] = x),
      (o[12] = w),
      (o[13] = S),
      (o[14] = U))
    : (U = o[14]);
  let W;
  o[15] === f
    ? (W = o[16])
    : ((W = f.formatMessage({
        id: `images.onboarding.suggestions`,
        defaultMessage: `Image ideas`,
        description: `Accessible label for the image style cards below the image creation onboarding reply.`,
      })),
      (o[15] = f),
      (o[16] = W));
  let G;
  o[17] === f
    ? (G = o[18])
    : ((G = f.formatMessage({
        id: `images.onboarding.previous`,
        defaultMessage: `Previous image ideas`,
        description: `Show the previous page of onboarding image style cards.`,
      })),
      (o[17] = f),
      (o[18] = G));
  let K;
  o[19] === f
    ? (K = o[20])
    : ((K = f.formatMessage({
        id: `images.onboarding.next`,
        defaultMessage: `Next image ideas`,
        description: `Show the next page of onboarding image style cards.`,
      })),
      (o[19] = f),
      (o[20] = K));
  let q = F || !m?.canOpenImagePicker,
    J;
  o[21] === m ? (J = o[22]) : ((J = () => m?.openFileDialog(!0)), (o[21] = m), (o[22] = J));
  let Y;
  o[23] !== q || o[24] !== J
    ? ((Y = (0, B.jsx)(N, { disabled: q, layout: `carousel`, onUpload: J })),
      (o[23] = q),
      (o[24] = J),
      (o[25] = Y))
    : (Y = o[25]);
  let X;
  o[26] !== F || o[27] !== m || o[28] !== s || o[29] !== h || o[30] !== I || o[31] !== d || o[32] !== D?.item
    ? ((X = h.map((e) => {
        let { item: t, group: n } = e,
          r = { ...n, items: h.filter((e) => e.group.id === n.id).map(L) };
        return (0, B.jsx)(
          `div`,
          {
            className: `flex w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start flex-col gap-1`,
            children: (0, B.jsx)(ie, {
              item: t,
              group: r,
              presentation: `image_card`,
              surface: `home`,
              visible: !I,
              disabled: F || m?.prefillImagePrompt == null,
              onBeforeSelect: () => {
                let e = re(d.get(ee, s), t.prompt_text, D?.item.prompt_text);
                return m?.prefillImagePrompt?.(e) ?? !1;
              },
              onSelect: () => {
                y(d, s, t, r, `onboarding`);
                let e = (t.action ?? n.action).input_requirements?.source;
                A(e != null && e !== `prompt_only`);
              },
            }),
          },
          `${n.id}:${t.id}`,
        );
      })),
      (o[26] = F),
      (o[27] = m),
      (o[28] = s),
      (o[29] = h),
      (o[30] = I),
      (o[31] = d),
      (o[32] = D?.item),
      (o[33] = X))
    : (X = o[33]);
  let Z;
  o[34] !== T || o[35] !== X || o[36] !== W || o[37] !== G || o[38] !== K || o[39] !== Y
    ? ((Z = (0, B.jsxs)(te, {
        layout: `gallery`,
        header: null,
        ariaLabel: W,
        backLabel: G,
        forwardLabel: K,
        shouldUseReducedMotion: T,
        children: [Y, X],
      })),
      (o[34] = T),
      (o[35] = X),
      (o[36] = W),
      (o[37] = G),
      (o[38] = K),
      (o[39] = Y),
      (o[40] = Z))
    : (Z = o[40]);
  let Q;
  o[41] !== I || o[42] !== Z || o[43] !== U
    ? ((Q = (0, B.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, hidden: I, children: [U, Z] })),
      (o[41] = I),
      (o[42] = Z),
      (o[43] = U),
      (o[44] = Q))
    : (Q = o[44]);
  let $;
  return (
    o[45] !== Q || o[46] !== H
      ? (($ = (0, B.jsxs)(B.Fragment, { children: [H, Q] })), (o[45] = Q), (o[46] = H), (o[47] = $))
      : ($ = o[47]),
    $
  );
}
function L(e) {
  return e.item;
}
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = p()),
      o(),
      (z = g()),
      u(),
      E(),
      S(),
      x(),
      w(),
      f(),
      T(),
      m(),
      s(),
      O(),
      D(),
      A(),
      M(),
      F(),
      (B = h()),
      (V = d(r, ({ get: e }) => {
        let { data: t } = e(k),
          { data: n } = e(j),
          r = {
            id: `image_suggestions`,
            title: ``,
            presentation: `image_card`,
            action: {},
            items: n?.image_suggestions ?? void 0,
          };
        function i(e) {
          return (e ?? []).flatMap((e) =>
            (e.items ?? []).flatMap((t) =>
              t.prompt_text.trim() &&
              [t.image_url, ...(t.image_variant_urls ?? []), ...(t.image_variants ?? [])].some((e) =>
                e?.trim(),
              ) &&
              (t.action ?? e.action).input_requirements?.source !== `sketch`
                ? [{ item: t, group: e }]
                : [],
            ),
          );
        }
        let a = i([r]),
          o = new Set(n?.styles?.map((e) => e.id)),
          s = i(t?.groups),
          c = s.filter(({ item: e }) => o.has(e.id));
        return a.length > 0 ? a.slice(0, 6) : (c.length > 0 ? c : s).slice(0, 6);
      })));
  }))();
}
H();
export { I as OnboardingImageCarousel };
//# sourceMappingURL=onboarding-carousel-1bd6a6f7ef0c.js.map
