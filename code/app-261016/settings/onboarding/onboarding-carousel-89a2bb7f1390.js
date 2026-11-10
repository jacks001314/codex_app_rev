import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  FBt as i,
  Jz as a,
  LNt as o,
  PBt as s,
  Qst as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  ZSt as f,
  iCt as p,
  nCt as m,
  okt as h,
  qz as g,
  tkt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CXt as v,
  GIn as y,
  VPn as b,
  jIn as x,
  m0n as ee,
  vXt as te,
  wXt as ne,
  x0n as re,
} from "./app-initial-ad16eaadf81f.js";
import { n as S, t as C } from "./option-carousel-ae2f9c0f0e72.js";
import { n as w, t as T } from "./chatgpt-conversation-composer-context-db1b777cfbe7.js";
import { a as E, c as D, i as O, n as k, o as A, r as j, s as M } from "./prompts-18cb7fd1e52f.js";
import { a as N, i as ie, n as P, r as F } from "./uploads-integration-rail-b13a659ac237.js";
function I(e) {
  let n = (0, R.c)(48),
    { conversationId: r, disabled: i } = e,
    o = t(c),
    s = h(),
    l = (0, z.useContext)(T),
    d = l?.conversationId === r ? l.composer : null,
    f = p(V),
    { isError: g, refetch: v } = p(A),
    { isError: y, refetch: b } = p(M),
    S = p(a),
    w = m(ee, r),
    E = m(te, r),
    [D, j] = (0, z.useState)(!1),
    N;
  n[0] !== d || n[1] !== i || n[2] !== w
    ? ((N = i || re(w) || d == null), (n[0] = d), (n[1] = i), (n[2] = w), (n[3] = N))
    : (N = n[3]);
  let F = N,
    I = D && E != null,
    H;
  n[4] !== F || n[5] !== d || n[6] !== r || n[7] !== I
    ? ((H = I
        ? (0, B.jsx)(P, {
            conversationId: r,
            disabled: F,
            uploadDisabled: !d?.canOpenImagePicker,
            onBack: () => j(!1),
            onUpload: () => d?.openFileDialog(!0),
            onRecentImageSelected: () => d?.focus(),
          })
        : null),
      (n[4] = F),
      (n[5] = d),
      (n[6] = r),
      (n[7] = I),
      (n[8] = H))
    : (H = n[8]);
  let U;
  n[9] !== g || n[10] !== f.length || n[11] !== v || n[12] !== b || n[13] !== y
    ? ((U =
        f.length === 0 && (g || y)
          ? (0, B.jsxs)(`div`, {
              role: `alert`,
              className: `flex flex-wrap items-center gap-2 text-sm text-secondary`,
              children: [
                (0, B.jsx)(_, {
                  id: `images.catalog.loadError`,
                  defaultMessage: `Some image prompts couldn't be loaded`,
                  description: `Error above image creation prompt cards when the catalog or styles request fails. The neighboring Retry button reloads the missing prompts.`,
                }),
                (0, B.jsx)(u, {
                  color: `secondary`,
                  onClick: () => {
                    (v(), b());
                  },
                  children: (0, B.jsx)(_, {
                    id: `images.catalog.retry`,
                    defaultMessage: `Retry`,
                    description: `Button on the Images page that retries loading failed image creation prompt collections.`,
                  }),
                }),
              ],
            })
          : null),
      (n[9] = g),
      (n[10] = f.length),
      (n[11] = v),
      (n[12] = b),
      (n[13] = y),
      (n[14] = U))
    : (U = n[14]);
  let W;
  n[15] === s
    ? (W = n[16])
    : ((W = s.formatMessage({
        id: `images.onboarding.suggestions`,
        defaultMessage: `Image ideas`,
        description: `Accessible label for the image style cards below the image creation onboarding reply.`,
      })),
      (n[15] = s),
      (n[16] = W));
  let G;
  n[17] === s
    ? (G = n[18])
    : ((G = s.formatMessage({
        id: `images.onboarding.previous`,
        defaultMessage: `Previous image ideas`,
        description: `Show the previous page of onboarding image style cards.`,
      })),
      (n[17] = s),
      (n[18] = G));
  let K;
  n[19] === s
    ? (K = n[20])
    : ((K = s.formatMessage({
        id: `images.onboarding.next`,
        defaultMessage: `Next image ideas`,
        description: `Show the next page of onboarding image style cards.`,
      })),
      (n[19] = s),
      (n[20] = K));
  let q = F || !d?.canOpenImagePicker,
    J;
  n[21] === d ? (J = n[22]) : ((J = () => d?.openFileDialog(!0)), (n[21] = d), (n[22] = J));
  let Y;
  n[23] !== q || n[24] !== J
    ? ((Y = (0, B.jsx)(ie, { disabled: q, layout: `carousel`, onUpload: J })),
      (n[23] = q),
      (n[24] = J),
      (n[25] = Y))
    : (Y = n[25]);
  let X;
  n[26] !== F || n[27] !== d || n[28] !== r || n[29] !== f || n[30] !== I || n[31] !== o || n[32] !== E?.item
    ? ((X = f.map((e) => {
        let { item: t, group: n } = e,
          i = { ...n, items: f.filter((e) => e.group.id === n.id).map(L) };
        return (0, B.jsx)(
          `div`,
          {
            className: `flex w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start flex-col gap-1`,
            children: (0, B.jsx)(k, {
              item: t,
              group: i,
              presentation: `image_card`,
              surface: `home`,
              visible: !I,
              disabled: F || d?.prefillImagePrompt == null,
              onBeforeSelect: () => {
                let e = O(o.get(x, r), t.prompt_text, E?.item.prompt_text);
                return d?.prefillImagePrompt?.(e) ?? !1;
              },
              onSelect: () => {
                ne(o, r, t, i, `onboarding`);
                let e = (t.action ?? n.action).input_requirements?.source;
                j(e != null && e !== `prompt_only`);
              },
            }),
          },
          `${n.id}:${t.id}`,
        );
      })),
      (n[26] = F),
      (n[27] = d),
      (n[28] = r),
      (n[29] = f),
      (n[30] = I),
      (n[31] = o),
      (n[32] = E?.item),
      (n[33] = X))
    : (X = n[33]);
  let Z;
  n[34] !== S || n[35] !== X || n[36] !== W || n[37] !== G || n[38] !== K || n[39] !== Y
    ? ((Z = (0, B.jsxs)(C, {
        layout: `gallery`,
        header: null,
        ariaLabel: W,
        backLabel: G,
        forwardLabel: K,
        shouldUseReducedMotion: S,
        children: [Y, X],
      })),
      (n[34] = S),
      (n[35] = X),
      (n[36] = W),
      (n[37] = G),
      (n[38] = K),
      (n[39] = Y),
      (n[40] = Z))
    : (Z = n[40]);
  let Q;
  n[41] !== I || n[42] !== Z || n[43] !== U
    ? ((Q = (0, B.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-4`, hidden: I, children: [U, Z] })),
      (n[41] = I),
      (n[42] = Z),
      (n[43] = U),
      (n[44] = Q))
    : (Q = n[44]);
  let $;
  return (
    n[45] !== Q || n[46] !== H
      ? (($ = (0, B.jsxs)(B.Fragment, { children: [H, Q] })), (n[45] = Q), (n[46] = H), (n[47] = $))
      : ($ = n[47]),
    $
  );
}
function L(e) {
  return e.item;
}
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = s()),
      f(),
      (z = i()),
      l(),
      w(),
      y(),
      v(),
      b(),
      d(),
      S(),
      n(),
      g(),
      D(),
      E(),
      j(),
      N(),
      F(),
      (B = o()),
      (V = r(c, ({ get: e }) => {
        let { data: t } = e(A),
          { data: n } = e(M),
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
//# sourceMappingURL=onboarding-carousel-89a2bb7f1390.js.map
