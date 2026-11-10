import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  LNt as r,
  PBt as i,
  Qst as a,
  SCt as o,
  Uot as s,
  Vot as c,
  Wot as l,
  Xat as u,
  Yat as d,
  ZSt as f,
  cat as p,
  lat as m,
  nCt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as g,
  BRr as _,
  CIr as v,
  IMr as y,
  Mir as b,
  Nir as x,
  SIr as S,
  XGt as ee,
  Xzr as te,
  fBr as C,
  fft as w,
  gLr as ne,
  lBr as T,
  mBr as E,
  nMr as D,
  pft as O,
  qGt as re,
  tLr as ie,
  wLr as k,
  xLr as ae,
  xMr as A,
  yMr as j,
} from "./app-initial-ad16eaadf81f.js";
import { Ac as M, Oc as N, jc as P, kc as F } from "./app-primary-3e00728c2a4c.js";
import { a as I, i as L, o as R, r as z, s as B } from "./chatgpt_conversational_onboarding-f7deb0d60fff.js";
import { n as V, t as H } from "./chatgpt-onboarding-dialog-68706c90af58.js";
function U(e, t) {
  if (!G(e, t) || e.get(E)) return null;
  let n = e.get(C);
  if (n == null) return null;
  let r = n.getLayer(`4200615758`).get(`variant`, `empty_thread`);
  switch ((n.flush().catch(() => {}), r)) {
    case `personalized`:
    case `generic`:
    case `interview`:
    case `use_case_pills`:
    case `use_case_pills_interactive`:
    case `use_case_pills_interactive_v3_compact`:
    case `use_case_pills_interactive_v3_large`:
    case `use_case_inline_followups`:
    case `resurrected_use_case_pills_interactive`:
    case `imagegen_waiting_cta`:
      return r;
    default:
      return `empty_thread`;
  }
}
function W(e, t) {
  return !l(t.search) && G(e, t);
}
function G(e, t) {
  return K(e, t) === `eligible`;
}
function K(e, { accountId: t, pathname: n, search: r }) {
  let i = e.get(ae);
  return i.status !== `allowed` ||
    `debugOverride` in i ||
    i.accountId !== t ||
    i.plan !== te.FREE ||
    e.get(y) !== t ||
    e.get(_) == null ||
    e.get(N, t) !== `eligible` ||
    p(`oai-scao`) === `true` ||
    w(n, r)
    ? `ineligible`
    : e.get(ne).status === `loading`
      ? `loading`
      : i.accountStructure === `personal`
        ? `eligible`
        : `ineligible`;
}
function q() {
  return (q = e(() => {
    (k(), D(), s(), T(), m(), ie(), M(), O());
  }))();
}
async function oe(e, t) {
  if (e.get(J, t) != null) return;
  let { pathname: n = `/`, search: r = `` } = e.get(g),
    i = e.get(_);
  if (i == null || K(e, { accountId: t, pathname: n, search: r }) === `ineligible`) return;
  e.set(J, t, { userId: i, status: `starting`, serverThreadId: null, variant: null });
  let a = () => {
      let n = e.get(g);
      return e.get(_) === i && W(e, { accountId: t, pathname: n.pathname ?? `/`, search: n.search ?? `` });
    },
    o = () => {
      let n = e.get(J, t);
      n?.userId === i && e.set(J, t, { ...n, status: `settled` });
    };
  if (
    (await e.when((e) => {
      if (e.get(y) !== t || e.get(_) !== i) return !0;
      let { pathname: n = `/`, search: r = `` } = e.get(g),
        a = K(e, { accountId: t, pathname: n, search: r });
      return a === `ineligible` || (a === `eligible` && !e.get(E));
    }),
    e.get(y) !== t || e.get(_) !== i)
  ) {
    o();
    return;
  }
  let s = e.get(g),
    c = U(e, { accountId: t, pathname: s.pathname ?? `/`, search: s.search ?? `` });
  if (
    (e.set(J, t, { userId: i, status: `starting`, serverThreadId: null, variant: c }),
    c == null || c === `empty_thread`)
  ) {
    (c === `empty_thread` && A(e, L, { reason: `empty_thread`, redirectTarget: `empty_thread`, variant: c }),
      o());
    return;
  }
  if (l(s.search ?? ``)) {
    (A(e, L, { reason: `history_disabled`, redirectTarget: `none`, variant: c }), o());
    return;
  }
  A(e, I, { redirectTarget: `empty_thread_autostart`, variant: c });
  let u = null,
    d = !1,
    f = (n) => {
      if ((o(), d || e.get(y) !== t || e.get(_) !== i)) return;
      d = !0;
      let r = u == null ? `missing_conversation_id` : `success`;
      (n !== `completed` && (r = u == null ? `error` : `stream_error_after_conversation_id`),
        A(e, z, {
          conversationId: u ?? void 0,
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
      let n = e.get(v),
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
        ((await ee(e, {
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
            u = n;
            try {
              localStorage.setItem(p, `true`);
            } catch {}
            e.set(J, t, { userId: i, status: `settled`, serverThreadId: u, variant: c });
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
          e(y) !== t ||
          (e(J, t)?.variant != null && l(e(g).search ?? ``)) ||
          e(_) !== e(J, t)?.userId,
      );
      let { pathname: n = `/`, search: r = `` } = e.get(g),
        i = e.get(J, t),
        a = i?.variant,
        o =
          a != null &&
          i?.userId === e.get(_) &&
          (a === `empty_thread` || !l(r)) &&
          G(e, { accountId: t, pathname: n, search: r });
      (o &&
        A(e, R, {
          redirectTarget: a === `empty_thread` ? `empty_thread` : `empty_thread_autostart`,
          variant: a,
        }),
        F(e, t),
        o && x(e, i.serverThreadId == null ? `/` : c(i.serverThreadId)));
    } finally {
      e.set(Y, t, !1);
    }
  }
}
var J, Y;
function X() {
  return (X = e(() => {
    (B(),
      f(),
      b(),
      k(),
      D(),
      re(),
      s(),
      S(),
      j(),
      n(),
      T(),
      q(),
      M(),
      (J = o(a, (e) => null)),
      (Y = o(a, (e) => !1)));
  }))();
}
function ce(e) {
  let n = (0, Z.c)(9),
    { accountId: r } = e,
    i = t(a),
    o = h(Y, r),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = d().statsigContext.country ?? null), (n[0] = s))
    : (s = n[0]);
  let c, l;
  n[1] !== r || n[2] !== i
    ? ((c = () => {
        (P(i, r), oe(i, r));
      }),
      (l = () => {
        se(i, r);
      }),
      (n[1] = r),
      (n[2] = i),
      (n[3] = c),
      (n[4] = l))
    : ((c = n[3]), (l = n[4]));
  let u;
  return (
    n[5] !== o || n[6] !== c || n[7] !== l
      ? ((u = (0, Q.jsx)(H, { country: s, isContinuing: o, onShown: c, onContinue: l })),
        (n[5] = o),
        (n[6] = c),
        (n[7] = l),
        (n[8] = u))
      : (u = n[8]),
    u
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = i()), f(), u(), n(), X(), V(), M(), (Q = r()));
  }))();
}
$();
export { ce as ChatGptOnboardingContent };
//# sourceMappingURL=chatgpt-onboarding-content-32d373067546.js.map
