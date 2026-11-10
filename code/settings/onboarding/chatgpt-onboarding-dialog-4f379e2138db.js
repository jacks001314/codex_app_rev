import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AMt as n,
  Cpn as r,
  Jrt as i,
  O3t as a,
  QXt as o,
  Spn as s,
  Xdt as c,
  Xrt as l,
  Yrt as u,
  Zrt as d,
  a3t as f,
  clt as p,
  eit as m,
  hmn as h,
  iit as g,
  jG as _,
  kG as v,
  kMt as y,
  kmn as b,
  nZt as x,
  nit as S,
  o3t as C,
  rit as w,
  tit as T,
} from "./app-initial-f094ef01c64d.js";
function E(e) {
  let n = (0, A.c)(23),
    { country: a, onContinue: o, onShown: s } = e,
    c = t(f),
    m;
  n[0] === c
    ? (m = n[1])
    : ((m = {
        termsLink: (e) =>
          (0, j.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/terms`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                c.get(x).logEventWithStatsig?.(`chatgpt_footer_disclaimer_terms_link_clicked`),
              children: e,
            },
            `terms`,
          ),
        privacyLink: (e) =>
          (0, j.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/privacy`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                c.get(x).logEventWithStatsig?.(`chatgpt_footer_disclaimer_privacy_link_clicked`),
              children: e,
            },
            `privacy`,
          ),
        koreaAddendumLink: (e) =>
          (0, j.jsx)(
            v,
            {
              className: `underline`,
              href: `https://openai.com/ko/policies/kr-privacy-policy-addendum`,
              initiator: `open_in_browser_bridge`,
              isBrowserEnabled: !1,
              openTarget: `external-browser`,
              onClick: () =>
                c
                  .get(x)
                  .logEventWithStatsig?.(`chatgpt_footer_disclaimer_korea_addendum_link_clicked`),
              children: e,
            },
            `korea-addendum`,
          ),
      }),
      (n[0] = c),
      (n[1] = m));
  let h = m,
    g;
  n[2] === s
    ? (g = n[3])
    : ((g = { onOpenAutoFocus: s, onEscapeKeyDown: D }), (n[2] = s), (n[3] = g));
  let _;
  n[4] === o
    ? (_ = n[5])
    : ((_ = (e) => {
        (e.preventDefault(), o());
      }),
      (n[4] = o),
      (n[5] = _));
  let b;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, j.jsx)(d, { children: (0, j.jsx)(p, { className: `self-center` }) })), (n[6] = b))
    : (b = n[6]);
  let C;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, j.jsx)(d, {
        children: (0, j.jsx)(l, {
          titleClassName: `text-center`,
          titleSize: `lg`,
          title: (0, j.jsx)(w, {
            className: `select-none`,
            children: (0, j.jsx)(r, {
              id: `chatgpt.new-onboarding.all-done-2`,
              defaultMessage: `You're all set`,
              description: `Text shown in the new user onboarding after the last step.`,
            }),
          }),
        }),
      })),
      (n[7] = C))
    : (C = n[7]);
  let E;
  n[8] === a
    ? (E = n[9])
    : ((E = (0, j.jsx)(d, {
        children: (0, j.jsx)(S, {
          className: `text-secondary`,
          children: (0, j.jsx)(O, { country: a }),
        }),
      })),
      (n[8] = a),
      (n[9] = E));
  let k;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, j.jsx)(d, {
        children: (0, j.jsx)(u, {
          children: (0, j.jsx)(y, {
            color: `primary`,
            type: `submit`,
            children: (0, j.jsx)(r, {
              id: `chatgpt.new-onboarding.continue`,
              defaultMessage: `Continue`,
              description: `Label of a button in the new user onboarding that concludes the onboarding flow and lets user start to use chatgpt.`,
            }),
          }),
        }),
      })),
      (n[10] = k))
    : (k = n[10]);
  let M;
  n[11] !== a || n[12] !== h.koreaAddendumLink || n[13] !== h.privacyLink || n[14] !== h.termsLink
    ? ((M = (0, j.jsx)(d, {
        children: (0, j.jsx)(`p`, {
          className: `text-center text-xs text-codex-description`,
          children:
            a === `KR`
              ? (0, j.jsx)(r, {
                  id: `thread.agreeToTermsNoAuthKorea-may-06`,
                  defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink> and its <koreaAddendumLink>Korea addendum</koreaAddendumLink>.`,
                  description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen in Korea. Each rich-text tag surrounds a link to the named policy.`,
                  values: {
                    termsLink: h.termsLink,
                    privacyLink: h.privacyLink,
                    koreaAddendumLink: h.koreaAddendumLink,
                  },
                })
              : (0, j.jsx)(r, {
                  id: `thread.agreeToTermsNoAuth-may-06`,
                  defaultMessage: `By continuing, you agree to our <termsLink>Terms</termsLink> and have read our <privacyLink>Privacy Policy</privacyLink>.`,
                  description: `Legal notice below Continue on the final ChatGPT new-user onboarding screen. Each rich-text tag surrounds a link to the named policy.`,
                  values: { termsLink: h.termsLink, privacyLink: h.privacyLink },
                }),
        }),
      })),
      (n[11] = a),
      (n[12] = h.koreaAddendumLink),
      (n[13] = h.privacyLink),
      (n[14] = h.termsLink),
      (n[15] = M))
    : (M = n[15]);
  let N;
  n[16] !== _ || n[17] !== E || n[18] !== M
    ? ((N = (0, j.jsxs)(i, { as: `form`, onSubmit: _, children: [b, C, E, k, M] })),
      (n[16] = _),
      (n[17] = E),
      (n[18] = M),
      (n[19] = N))
    : (N = n[19]);
  let P;
  return (
    n[20] !== g || n[21] !== N
      ? ((P = (0, j.jsx)(T, {
          open: !0,
          showDialogClose: !1,
          shouldIgnoreClickOutside: !0,
          size: `narrow`,
          variant: `chatgpt`,
          contentProps: g,
          children: N,
        })),
        (n[20] = g),
        (n[21] = N),
        (n[22] = P))
      : (P = n[22]),
    P
  );
}
function D(e) {
  return e.preventDefault();
}
function O(e) {
  let t = (0, A.c)(3),
    { country: n } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { learnMoreLink: k }), (t[0] = i))
    : (i = t[0]);
  let a = i,
    o;
  return (
    t[1] === n
      ? (o = t[2])
      : ((o =
          n === `CA`
            ? (0, j.jsx)(r, {
                id: `chatgpt.new-onboarding.chatgpt-review-training-sensitive-info-disclaimer`,
                defaultMessage: `ChatGPT can make mistakes. Don't share sensitive info. Chats may be reviewed and used for training. <learnMoreLink>Learn more</learnMoreLink>`,
                description: `Disclaimer above Continue on the final ChatGPT new-user onboarding screen in Canada. Warns users about mistakes, sensitive information, and chat review and training. The learnMoreLink tag links to the Help Center article on improving model performance.`,
                values: { learnMoreLink: a.learnMoreLink },
              })
            : (0, j.jsx)(r, {
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
function k(e) {
  return (0, j.jsx)(
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
var A, j;
e(() => {
  ((A = b()), a(), s(), n(), g(), m(), _(), c(), o(), C(), (j = h()));
})();
export { E as ChatGptOnboardingDialog };
//# sourceMappingURL=chatgpt-onboarding-dialog-4f379e2138db.js.map
