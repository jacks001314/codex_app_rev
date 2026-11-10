import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  JO as r,
  KO as i,
  LNt as a,
  PBt as o,
  Qst as s,
  TY as c,
  WO as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  bH as m,
  qO as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CMr as _,
  GLn as v,
  GM as y,
  KM as b,
  L$t as x,
  U$t as S,
  YM as C,
  qLn as w,
  yMr as T,
} from "./app-initial-ad16eaadf81f.js";
import { Sb as E, xb as D } from "./app-primary-3e00728c2a4c.js";
function O(e) {
  let n = (0, M.c)(28),
    { country: r, isContinuing: a, onContinue: o, onShown: c } = e,
    u = a !== void 0 && a,
    f = t(s),
    p;
  n[0] === f
    ? (p = n[1])
    : ((p = {
        termsLink: (e) =>
          (0, N.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/terms`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                f.get(_).logProductEvent(b, { link: y.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_TERMS }),
              children: e,
            },
            `terms`,
          ),
        privacyLink: (e) =>
          (0, N.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/privacy`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                f.get(_).logProductEvent(b, { link: y.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_PRIVACY }),
              children: e,
            },
            `privacy`,
          ),
        koreaAddendumLink: (e) =>
          (0, N.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/ko/policies/kr-privacy-policy-addendum`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                f.get(_).logProductEvent(b, { link: y.CODEX_CHATGPT_ONBOARDING_LEGAL_LINK_KOREA_ADDENDUM }),
              children: e,
            },
            `korea-addendum`,
          ),
      }),
      (n[0] = f),
      (n[1] = p));
  let S = p,
    C;
  n[2] === c ? (C = n[3]) : ((C = { onOpenAutoFocus: c, onEscapeKeyDown: k }), (n[2] = c), (n[3] = C));
  let w;
  n[4] === o
    ? (w = n[5])
    : ((w = (e) => {
        (e.preventDefault(), o());
      }),
      (n[4] = o),
      (n[5] = w));
  let T;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, N.jsx)(`div`, {
        className: `flex size-9 items-center justify-center`,
        children: (0, N.jsx)(m, {}),
      })),
      (n[6] = T))
    : (T = n[6]);
  let E;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, N.jsxs)(`div`, {
        className: `flex flex-col items-center justify-center gap-y-4 text-center select-none max-sm:flex-1`,
        children: [
          T,
          (0, N.jsx)(h, {
            className: `text-3xl leading-9 font-normal`,
            children: (0, N.jsx)(g, {
              id: `chatgpt.new-onboarding.all-done-2`,
              defaultMessage: `You're all set`,
              description: `Text shown in the new user onboarding after the last step.`,
            }),
          }),
        ],
      })),
      (n[7] = E))
    : (E = n[7]);
  let O;
  n[8] === r
    ? (O = n[9])
    : ((O = (0, N.jsx)(i, {
        className: `text-center text-base leading-6 text-secondary`,
        children: (0, N.jsx)(A, { country: r }),
      })),
      (n[8] = r),
      (n[9] = O));
  let j;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, N.jsx)(g, {
        id: `chatgpt.new-onboarding.continue`,
        defaultMessage: `Continue`,
        description: `Label of a button in the new user onboarding that concludes the onboarding flow and lets user start to use chatgpt.`,
      })),
      (n[10] = j))
    : (j = n[10]);
  let P;
  n[11] === u
    ? (P = n[12])
    : ((P = (0, N.jsx)(d, {
        color: `primary`,
        loading: u,
        size: `beaconAction`,
        type: `submit`,
        children: j,
      })),
      (n[11] = u),
      (n[12] = P));
  let F;
  n[13] !== r || n[14] !== S.koreaAddendumLink || n[15] !== S.privacyLink || n[16] !== S.termsLink
    ? ((F = (0, N.jsx)(`p`, {
        className: `text-center text-sm text-secondary`,
        children:
          r === `KR`
            ? (0, N.jsx)(g, {
                id: `thread.agreeToTermsNoAuthKorea-may-06`,
                defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.`,
                description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen in Korea. Each rich-text tag surrounds a link to the named policy.`,
                values: {
                  termsLink: S.termsLink,
                  privacyLink: S.privacyLink,
                  koreaAddendumLink: S.koreaAddendumLink,
                },
              })
            : (0, N.jsx)(g, {
                id: `thread.agreeToTermsNoAuth-may-06`,
                defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.`,
                description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen. Each rich-text tag surrounds a link to the named policy.`,
                values: { termsLink: S.termsLink, privacyLink: S.privacyLink },
              }),
      })),
      (n[13] = r),
      (n[14] = S.koreaAddendumLink),
      (n[15] = S.privacyLink),
      (n[16] = S.termsLink),
      (n[17] = F))
    : (F = n[17]);
  let I;
  n[18] !== F || n[19] !== O || n[20] !== P
    ? ((I = (0, N.jsxs)(`div`, {
        className: `flex w-full flex-col gap-y-4 max-sm:px-6`,
        children: [O, P, F],
      })),
      (n[18] = F),
      (n[19] = O),
      (n[20] = P),
      (n[21] = I))
    : (I = n[21]);
  let L;
  n[22] !== I || n[23] !== w
    ? ((L = (0, N.jsx)(`div`, {
        className: `flex h-full flex-col overflow-y-auto`,
        children: (0, N.jsxs)(`form`, {
          className: `m-auto flex w-full shrink-0 flex-col items-center justify-between py-4 max-sm:min-h-full sm:w-80 sm:justify-center sm:gap-y-12`,
          onSubmit: w,
          children: [E, I],
        }),
      })),
      (n[22] = I),
      (n[23] = w),
      (n[24] = L))
    : (L = n[24]);
  let R;
  return (
    n[25] !== L || n[26] !== C
      ? ((R = (0, N.jsx)(D, {
          claim: x.FullscreenOnboarding,
          children: (0, N.jsx)(l, {
            open: !0,
            showDialogClose: !1,
            shouldIgnoreClickOutside: !0,
            unstyledContent: !0,
            viewportSized: !0,
            contentClassName: `h-full w-full bg-surface text-default`,
            contentProps: C,
            children: L,
          }),
        })),
        (n[25] = L),
        (n[26] = C),
        (n[27] = R))
      : (R = n[27]),
    R
  );
}
function k(e) {
  return e.preventDefault();
}
function A(e) {
  let t = (0, M.c)(3),
    { country: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = { learnMoreLink: j }), (t[0] = r)) : (r = t[0]);
  let i = r,
    a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a =
          n === `CA`
            ? (0, N.jsx)(g, {
                id: `chatgpt.new-onboarding.chatgpt-review-training-sensitive-info-disclaimer`,
                defaultMessage: `ChatGPT can make mistakes. Don't share sensitive info. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Disclaimer above Continue on the final ChatGPT new-user onboarding screen in Canada. Warns users about mistakes, sensitive information, and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.`,
                values: { learnMoreLink: i.learnMoreLink },
              })
            : (0, N.jsx)(g, {
                id: `chatgpt.new-onboarding.chatgpt-review-training-disclaimer`,
                defaultMessage: `ChatGPT can make mistakes. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Disclaimer above Continue on the final ChatGPT new-user onboarding screen outside Canada. Warns users about mistakes and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.`,
                values: { learnMoreLink: i.learnMoreLink },
              })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
function j(e) {
  return (0, N.jsx)(
    v,
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
    ((M = o()), C(), p(), u(), f(), r(), w(), c(), E(), S(), T(), n(), (N = a()));
  }))();
}
export { P as n, O as t };
//# sourceMappingURL=chatgpt-onboarding-dialog-68706c90af58.js.map
