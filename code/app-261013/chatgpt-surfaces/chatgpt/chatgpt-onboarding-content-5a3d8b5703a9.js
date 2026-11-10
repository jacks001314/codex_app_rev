import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ait as t,
  Cat as n,
  Cot as r,
  Grt as i,
  Ixt as a,
  Krt as o,
  Pxt as s,
  aSt as c,
  jit as l,
  vzt as u,
  wat as d,
  wot as f,
  xMt as p,
  xat as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as ee,
  NDr as g,
  NPr as _,
  OPr as v,
  QDr as y,
  WMr as te,
  XDr as b,
  XMr as x,
  ZMr as S,
  aIr as C,
  cdt as w,
  fJt as T,
  hJt as E,
  hPr as ne,
  jPr as re,
  lIr as ie,
  oIr as ae,
  pOr as D,
  sIr as O,
  sdt as k,
  tNr as A,
  uIr as j,
} from "./app-initial-5851df3f6cb1.js";
import { Cc as M, Sc as N, wc as P, xc as F } from "./app-primary-fe8a450b3b04.js";
import { a as I, i as L, o as R, r as z, s as B } from "./chatgpt_conversational_onboarding-f7deb0d60fff.js";
import { n as V, t as H } from "./chatgpt-onboarding-dialog-683a60f18e41.js";
function U(e, t) {
  if (!G(e, t) || e.get(_)) return null;
  let n = e.get(re);
  if (n == null) return null;
  let r = n.getLayer(`4200615758`).get(`variant`, `empty_thread`);
  switch ((n.flush().catch(() => {}), r)) {
    case `personalized`:
    case `generic`:
    case `interview`:
    case `use_case_pills`:
    case `use_case_pills_interactive`:
    case `use_case_inline_followups`:
    case `resurrected_use_case_pills_interactive`:
    case `imagegen_waiting_cta`:
      return r;
    default:
      return `empty_thread`;
  }
}
function W(e, t) {
  return !d(t.search) && G(e, t);
}
function G(e, t) {
  return K(e, t) === `eligible`;
}
function K(e, { accountId: t, pathname: n, search: r }) {
  let a = e.get(S);
  return a.status !== `allowed` ||
    `debugOverride` in a ||
    a.accountId !== t ||
    a.plan !== ne.FREE ||
    e.get(D) !== t ||
    e.get(x) == null ||
    e.get(F, t) !== `eligible` ||
    i(`oai-scao`) === `true` ||
    k(n, r)
    ? `ineligible`
    : e.get(te).status === `loading`
      ? `loading`
      : a.accountStructure === `personal`
        ? `eligible`
        : `ineligible`;
}
function q() {
  return (q = e(() => {
    (A(), g(), n(), v(), o(), ee(), M(), w());
  }))();
}
async function oe(e, t) {
  if (e.get(J, t) != null) return;
  let { pathname: n = `/`, search: r = `` } = e.get(O),
    i = e.get(x);
  if (i == null || K(e, { accountId: t, pathname: n, search: r }) === `ineligible`) return;
  e.set(J, t, { userId: i, status: `starting`, serverThreadId: null, variant: null });
  let a = () => {
      let n = e.get(O);
      return e.get(x) === i && W(e, { accountId: t, pathname: n.pathname ?? `/`, search: n.search ?? `` });
    },
    o = () => {
      let n = e.get(J, t);
      n?.userId === i && e.set(J, t, { ...n, status: `settled` });
    };
  if (
    (await e.when((e) => {
      if (e.get(D) !== t || e.get(x) !== i) return !0;
      let { pathname: n = `/`, search: r = `` } = e.get(O),
        a = K(e, { accountId: t, pathname: n, search: r });
      return a === `ineligible` || (a === `eligible` && !e.get(_));
    }),
    e.get(D) !== t || e.get(x) !== i)
  ) {
    o();
    return;
  }
  let s = e.get(O),
    c = U(e, { accountId: t, pathname: s.pathname ?? `/`, search: s.search ?? `` });
  if (
    (e.set(J, t, { userId: i, status: `starting`, serverThreadId: null, variant: c }),
    c == null || c === `empty_thread`)
  ) {
    (c === `empty_thread` && y(e, L, { reason: `empty_thread`, redirectTarget: `empty_thread`, variant: c }),
      o());
    return;
  }
  if (d(s.search ?? ``)) {
    (y(e, L, { reason: `history_disabled`, redirectTarget: `none`, variant: c }), o());
    return;
  }
  y(e, I, { redirectTarget: `empty_thread_autostart`, variant: c });
  let l = null,
    u = !1,
    f = (n) => {
      if ((o(), u || e.get(D) !== t || e.get(x) !== i)) return;
      u = !0;
      let r = l == null ? `missing_conversation_id` : `success`;
      (n !== `completed` && (r = l == null ? `error` : `stream_error_after_conversation_id`),
        y(e, z, {
          conversationId: l ?? void 0,
          redirectTarget: `empty_thread_autostart`,
          status: r,
          variant: c,
        }));
    },
    p =
      c === `resurrected_use_case_pills_interactive`
        ? `oai/apps/resurrectedUserOnboardingAutostartCreated/v1/${i}`
        : `oai/apps/conversationalOnboardingAutostartCreated/v1/${i}`,
    m = async () => {
      if (!a()) {
        o();
        return;
      }
      try {
        if (localStorage.getItem(p) === `true`) {
          o();
          return;
        }
      } catch {}
      let n = e.get(ae),
        r =
          c === `interview`
            ? n.formatMessage({
                id: `chatgpt.new-onboarding.conversational-onboarding.conversation.title.interview`,
                defaultMessage: `Customize ChatGPT`,
                description: `Title for the ChatGPT conversation created during the interview variant of conversational onboarding for new users.`,
              })
            : n.formatMessage({
                id: `chatgpt.new-onboarding.conversational-onboarding.conversation.title`,
                defaultMessage: `Welcome to ChatGPT`,
                description: `Default title for the ChatGPT conversation created during conversational onboarding for new users. Used for all variants except the interview variant.`,
              });
      try {
        ((await E(e, {
          prompt: n.formatMessage({
            id: `chatgpt.new-onboarding.conversational-onboarding.bootstrap.kickoff-prompt`,
            defaultMessage: `Write the first assistant message for this onboarding conversation.`,
            description: `Hidden user message sent programmatically to start a new user's conversational onboarding conversation. It instructs ChatGPT to write the first assistant reply and is not shown in the conversation UI.`,
          }),
          realAuthor: `onboarding`,
          messageMetadata: {
            is_visually_hidden_from_conversation: !0,
            onboarding: { conversation_title: r, system_hint_variant: c },
          },
          isOnboardingConversation: !0,
          conversationMode: `primary_assistant`,
          systemHints: [`onboarding`],
          isSubmissionCurrent: a,
          onServerThreadIdChange: (n) => {
            l = n;
            try {
              localStorage.setItem(p, `true`);
            } catch {}
            e.set(J, t, { userId: i, status: `settled`, serverThreadId: l, variant: c });
          },
          onCompletion: f,
        })) ?? f(`completed`),
          await e.when(({ get: e }) => e(J, t)?.status !== `starting`));
      } catch {
        f(`failed`);
      }
    };
  navigator.locks == null
    ? m()
    : navigator.locks
        .request(
          c === `resurrected_use_case_pills_interactive`
            ? `chatgpt-conversational-onboarding-autostart:resurrected:${i}`
            : `chatgpt-conversational-onboarding-autostart:${i}`,
          { ifAvailable: !0 },
          (e) => (e == null ? o() : m()),
        )
        .catch(o);
}
async function se(e, t) {
  if (!e.get(Y, t)) {
    e.set(Y, t, !0);
    try {
      await e.when(
        ({ get: e }) =>
          e(J, t)?.status !== `starting` ||
          e(D) !== t ||
          (e(J, t)?.variant != null && d(e(O).search ?? ``)) ||
          e(x) !== e(J, t)?.userId,
      );
      let { pathname: n = `/`, search: r = `` } = e.get(O),
        i = e.get(J, t),
        a = i?.variant,
        o =
          a != null &&
          i?.userId === e.get(x) &&
          (a === `empty_thread` || !d(r)) &&
          G(e, { accountId: t, pathname: n, search: r });
      (o &&
        y(e, R, {
          redirectTarget: a === `empty_thread` ? `empty_thread` : `empty_thread_autostart`,
          variant: a,
        }),
        N(e, t),
        o && j(e, i.serverThreadId == null ? `/` : m(i.serverThreadId)));
    } finally {
      e.set(Y, t, !1);
    }
  }
}
var J, Y;
function X() {
  return (X = e(() => {
    (B(),
      s(),
      ie(),
      A(),
      g(),
      T(),
      n(),
      C(),
      b(),
      f(),
      v(),
      q(),
      M(),
      (J = c(r, (e) => null)),
      (Y = c(r, (e) => !1)));
  }))();
}
function ce(e) {
  let n = (0, Z.c)(9),
    { accountId: i } = e,
    o = a(r),
    s = h(Y, i),
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = t().statsigContext.country ?? null), (n[0] = c))
    : (c = n[0]);
  let l, u;
  n[1] !== i || n[2] !== o
    ? ((l = () => {
        (P(o, i), oe(o, i));
      }),
      (u = () => {
        se(o, i);
      }),
      (n[1] = i),
      (n[2] = o),
      (n[3] = l),
      (n[4] = u))
    : ((l = n[3]), (u = n[4]));
  let d;
  return (
    n[5] !== s || n[6] !== l || n[7] !== u
      ? ((d = (0, Q.jsx)(H, { country: c, isContinuing: s, onShown: l, onContinue: u })),
        (n[5] = s),
        (n[6] = l),
        (n[7] = u),
        (n[8] = d))
      : (d = n[8]),
    d
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = u()), s(), l(), f(), X(), V(), M(), (Q = p()));
  }))();
}
$();
export { ce as ChatGptOnboardingContent };
//# sourceMappingURL=chatgpt-onboarding-content-5a3d8b5703a9.js.map
