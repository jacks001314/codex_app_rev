import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  TJ as o,
  _O as s,
  gO as c,
  jDt as l,
  mO as u,
  t3 as d,
  vO as f,
  vzt as p,
  wV as m,
  wot as h,
  xMt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  RQt as _,
  WQt as v,
  XDr as y,
  eOr as b,
  nM as x,
  oM as S,
  rM as C,
  xPn as w,
  yPn as T,
} from "./app-initial-5851df3f6cb1.js";
import { $y as E, eb as D } from "./app-primary-fe8a450b3b04.js";
function O(e) {
  let a = (0, M.c)(28),
    { country: o, isContinuing: l, onContinue: d, onShown: f } = e,
    p = l !== void 0 && l,
    h = i(n),
    g;
  a[0] === h
    ? (g = a[1])
    : ((g = {
        termsLink: (e) =>
          (0, N.jsx)(
            T,
            {
              className: `underline`,
              href: `https://openai.com/terms`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                h.get(b).logProductEvent(C, { link: x.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_TERMS }),
              children: e,
            },
            `terms`,
          ),
        privacyLink: (e) =>
          (0, N.jsx)(
            T,
            {
              className: `underline`,
              href: `https://openai.com/privacy`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                h.get(b).logProductEvent(C, { link: x.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_PRIVACY }),
              children: e,
            },
            `privacy`,
          ),
        koreaAddendumLink: (e) =>
          (0, N.jsx)(
            T,
            {
              className: `underline`,
              href: `https://openai.com/ko/policies/kr-privacy-policy-addendum`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                h.get(b).logProductEvent(C, { link: x.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_KOREA_ADDENDUM }),
              children: e,
            },
            `korea-addendum`,
          ),
      }),
      (a[0] = h),
      (a[1] = g));
  let v = g,
    y;
  a[2] === f ? (y = a[3]) : ((y = { onOpenAutoFocus: f, onEscapeKeyDown: k }), (a[2] = f), (a[3] = y));
  let S;
  a[4] === d
    ? (S = a[5])
    : ((S = (e) => {
        (e.preventDefault(), d());
      }),
      (a[4] = d),
      (a[5] = S));
  let w;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, N.jsx)(`div`, {
        className: `flex size-9 items-center justify-center`,
        children: (0, N.jsx)(m, {}),
      })),
      (a[6] = w))
    : (w = a[6]);
  let D;
  a[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, N.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-y-4 text-center select-none max-sm:flex-1`,
        children: [
          w,
          (0, N.jsx)(s, {
            className: `text-3xl leading-9 font-normal`,
            children: (0, N.jsx)(r, {
              id: `chatgpt.new-onboarding.all-done-2`,
              defaultMessage: `You're all set`,
              description: `Text shown in the new user onboarding after the last step.`,
            }),
          }),
        ],
      })),
      (a[7] = D))
    : (D = a[7]);
  let O;
  a[8] === o
    ? (O = a[9])
    : ((O = (0, N.jsx)(c, {
        className: `text-center text-base leading-6 text-secondary`,
        children: (0, N.jsx)(A, { country: o }),
      })),
      (a[8] = o),
      (a[9] = O));
  let j;
  a[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, N.jsx)(r, {
        id: `chatgpt.new-onboarding.continue`,
        defaultMessage: `Continue`,
        description: `Label of a button in the new user onboarding that concludes the onboarding flow and lets user start to use chatgpt.`,
      })),
      (a[10] = j))
    : (j = a[10]);
  let P;
  a[11] === p
    ? (P = a[12])
    : ((P = (0, N.jsx)(t, {
        color: `primary`,
        loading: p,
        size: `beaconAction`,
        type: `submit`,
        children: j,
      })),
      (a[11] = p),
      (a[12] = P));
  let F;
  a[13] !== o || a[14] !== v.koreaAddendumLink || a[15] !== v.privacyLink || a[16] !== v.termsLink
    ? ((F = (0, N.jsx)(`p`, {
        className: `text-center text-sm text-secondary`,
        children:
          o === `KR`
            ? (0, N.jsx)(r, {
                id: `thread.agreeToTermsNoAuthKorea-may-06`,
                defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.`,
                description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen in Korea. Each rich-text tag surrounds a link to the named policy.`,
                values: {
                  termsLink: v.termsLink,
                  privacyLink: v.privacyLink,
                  koreaAddendumLink: v.koreaAddendumLink,
                },
              })
            : (0, N.jsx)(r, {
                id: `thread.agreeToTermsNoAuth-may-06`,
                defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.`,
                description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen. Each rich-text tag surrounds a link to the named policy.`,
                values: { termsLink: v.termsLink, privacyLink: v.privacyLink },
              }),
      })),
      (a[13] = o),
      (a[14] = v.koreaAddendumLink),
      (a[15] = v.privacyLink),
      (a[16] = v.termsLink),
      (a[17] = F))
    : (F = a[17]);
  let I;
  a[18] !== F || a[19] !== O || a[20] !== P
    ? ((I = (0, N.jsxs)(`div`, {
        className: `flex w-full flex-col gap-y-4 max-sm:px-6`,
        children: [O, P, F],
      })),
      (a[18] = F),
      (a[19] = O),
      (a[20] = P),
      (a[21] = I))
    : (I = a[21]);
  let L;
  a[22] !== I || a[23] !== S
    ? ((L = (0, N.jsx)(`div`, {
        className: `flex h-full flex-col overflow-y-auto`,
        children: (0, N.jsxs)(`form`, {
          className: `m-auto flex w-full shrink-0 flex-col items-center justify-between py-4 max-sm:min-h-full sm:w-80 sm:justify-center sm:gap-y-12`,
          onSubmit: S,
          children: [D, I],
        }),
      })),
      (a[22] = I),
      (a[23] = S),
      (a[24] = L))
    : (L = a[24]);
  let R;
  return (
    a[25] !== L || a[26] !== y
      ? ((R = (0, N.jsx)(E, {
          claim: _.FullscreenOnboarding,
          children: (0, N.jsx)(u, {
            open: !0,
            showDialogClose: !1,
            shouldIgnoreClickOutside: !0,
            unstyledContent: !0,
            viewportSized: !0,
            contentClassName: `h-full w-full bg-surface text-default`,
            contentProps: y,
            children: L,
          }),
        })),
        (a[25] = L),
        (a[26] = y),
        (a[27] = R))
      : (R = a[27]),
    R
  );
}
function k(e) {
  return e.preventDefault();
}
function A(e) {
  let t = (0, M.c)(3),
    { country: n } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = { learnMoreLink: j }), (t[0] = i)) : (i = t[0]);
  let a = i,
    o;
  return (
    t[1] === n
      ? (o = t[2])
      : ((o =
          n === `CA`
            ? (0, N.jsx)(r, {
                id: `chatgpt.new-onboarding.chatgpt-review-training-sensitive-info-disclaimer`,
                defaultMessage: `ChatGPT can make mistakes. Don't share sensitive info. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Disclaimer above Continue on the final ChatGPT new-user onboarding screen in Canada. Warns users about mistakes, sensitive information, and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.`,
                values: { learnMoreLink: a.learnMoreLink },
              })
            : (0, N.jsx)(r, {
                id: `chatgpt.new-onboarding.chatgpt-review-training-disclaimer`,
                defaultMessage: `ChatGPT can make mistakes. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Disclaimer above Continue on the final ChatGPT new-user onboarding screen outside Canada. Warns users about mistakes and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.`,
                values: { learnMoreLink: a.learnMoreLink },
              })),
        (t[1] = n),
        (t[2] = o)),
    o
  );
}
function j(e) {
  return (0, N.jsx)(
    T,
    {
      className: `underline`,
      href: `https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance`,
      initiator: `open_in_browser_bridge`,
      isBrowserEnabled: !1,
      openTarget: `external-browser`,
      children: e,
    },
    `learn-more`,
  );
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = p()), S(), a(), l(), d(), f(), w(), o(), D(), v(), y(), h(), (N = g()));
  }))();
}
export { P as n, O as t };
//# sourceMappingURL=chatgpt-onboarding-dialog-683a60f18e41.js.map
