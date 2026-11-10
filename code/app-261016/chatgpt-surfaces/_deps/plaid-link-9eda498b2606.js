import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  FFt as n,
  HFt as r,
  NLt as i,
  ORt as a,
  PFt as o,
  VRt as s,
  XOt as c,
  YOt as l,
  kRt as u,
  sct as d,
  tht as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as p,
  BRr as m,
  BZt as h,
  Bkr as g,
  CIr as _,
  CRn as v,
  FDt as y,
  G2n as b,
  Gat as x,
  Hkr as S,
  IDt as C,
  Kat as ee,
  Lkr as w,
  SDt as te,
  SIr as ne,
  VPn as re,
  W2n as ie,
  XGt as ae,
  bRn as oe,
  cBr as se,
  hhr as ce,
  j2n as T,
  lBr as le,
  m0n as ue,
  n1t as de,
  qGt as fe,
  rPn as pe,
  vhr as me,
  wLr as he,
  x0n as ge,
  xDt as _e,
  zRr as E,
} from "./app-initial-ad16eaadf81f.js";
async function D(
  e,
  {
    accountId: n,
    forceOnboarding: r = !1,
    onConversationStarted: i,
    prompt: a,
    requireServerConversation: o = !1,
    signal: s,
    systemHints: c,
    userCompletionMessages: l,
  },
) {
  if (s?.aborted) return null;
  let u = e.get(E),
    d = e.get(m),
    f = null,
    p = null,
    h = () => {
      p != null && de(e, p);
    },
    g = (e) => {
      if (((p = e), s?.aborted)) {
        h();
        return;
      }
      o || i?.(e);
    };
  s?.addEventListener(`abort`, h);
  try {
    let p;
    try {
      let n = e.query.getData(T);
      if (n == null) {
        let r = e.query.getOrFetch(T);
        n = await (s == null ? r : t(r, s));
      }
      if (s?.aborted || e.get(E) !== u || e.get(m) !== d) return null;
      let i =
        n.versionOptions?.[0]?.modelSlugByLane.thinking ?? n.options.find((e) => e.lane === `thinking`)?.slug;
      p = await ae(e, {
        model: i,
        onClientThreadIdChange: g,
        onServerThreadIdChange: o
          ? (e) => {
              f = e;
            }
          : void 0,
        prompt: a,
        startupSignal: s,
        systemHints: c ?? (r ? [`connector:ledger_onboarding_force`, w] : [w]),
        thinkingEffort: i == null ? null : (n?.defaultThinkingEffortByModelSlug?.[i] ?? null),
        userCompletionMessages: l,
      });
    } catch (e) {
      if (s?.aborted) return null;
      throw e;
    }
    if (s?.aborted) return null;
    if (!o) return (await e.query.invalidate(te, n), p?.serverConversationId ?? p?.conversationId ?? null);
    let h = f ?? p?.serverConversationId ?? null;
    return (
      h == null && p != null && (h = await ve(e, p.conversationId, s)),
      h == null || s?.aborted ? null : (i?.(h), await e.query.invalidate(te, n), h)
    );
  } finally {
    s?.removeEventListener(`abort`, h);
  }
}
async function ve(e, t, n) {
  if (n?.aborted) return null;
  let r = f(),
    i = () => r.resolve(null);
  n?.addEventListener(`abort`, i, { once: !0 });
  let a = e.watch(({ get: e }) => {
    let n = e(p, t);
    n == null ? ge(e(ue, t)) || r.resolve(null) : r.resolve(n);
  });
  try {
    return await r.promise;
  } finally {
    (a(), n?.removeEventListener(`abort`, i));
  }
}
function O() {
  return (O = e(() => {
    (d(), he(), pe(), re(), fe(), S(), _e());
  }))();
}
function k(e) {
  let t = o(e);
  t?.type === `toggle-browser-panel` &&
    t.initiator === `window_open` &&
    t.url != null &&
    v({ href: t.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }) &&
    e.stopImmediatePropagation();
}
function A() {
  return (A = e(() => {
    (oe(), n());
  }))();
}
function ye(
  e,
  {
    linkToken: t,
    receivedRedirectUri: n,
    signal: r,
    preparationSignal: i,
    canOpen: a,
    beforeOpen: o,
    onOpen: s,
    onEvent: c,
    onReady: l,
    onDispose: u,
  },
) {
  return new Promise((d) => {
    let f,
      p,
      m = !1,
      h = !1,
      g,
      _ = s,
      v = l,
      y = window.setTimeout(() => S({ type: `failed`, reason: `timeout` }), j),
      b = (e) => {
        if (!h) {
          ((h = !0),
            window.clearTimeout(g),
            window.clearTimeout(y),
            r?.removeEventListener(`abort`, C),
            i?.removeEventListener(`abort`, C));
          try {
            f?.destroy();
          } catch {}
          try {
            u?.();
          } catch {}
          d(e);
        }
      },
      x = (e) => {
        (window.clearTimeout(y),
          c != null && !r?.aborted && (e.type === `completed` || e.type === `exited`)
            ? (g = window.setTimeout(() => b(e), M))
            : b(e));
      },
      S = (e) => {
        p ?? ((p = e), m || x(e));
      },
      C = () => {
        p != null && !m ? b(p) : S({ type: `cancelled` });
      };
    (r?.addEventListener(`abort`, C, { once: !0 }),
      i?.addEventListener(`abort`, C, { once: !0 }),
      (r?.aborted || i?.aborted) && C(),
      (async () => {
        let r = await e;
        if (p != null) return;
        let i = new Promise((e) => {
          m = !0;
          try {
            f = r.create({
              token: t,
              ...(n ? { receivedRedirectUri: n } : {}),
              noLoadingState: !0,
              onLoad: () => {
                if ((e(), p != null)) return;
                let t = v;
                v = void 0;
                try {
                  t?.();
                } catch {}
              },
              onEvent: (e, t) => {
                if (!h) {
                  try {
                    c?.(e, t);
                  } catch {}
                  if (e === `OPEN` && p == null && _) {
                    let e = _;
                    ((_ = void 0), e());
                  }
                }
              },
              onSuccess: (e) => {
                S({ type: `completed`, ...(typeof e == `string` && e.length > 0 ? { publicToken: e } : {}) });
              },
              onExit: (e, t) => {
                S({
                  type: `exited`,
                  status: typeof t.status == `string` ? t.status : void 0,
                  error:
                    e == null
                      ? void 0
                      : {
                          code: typeof e.error_code == `string` ? e.error_code : void 0,
                          message: typeof e.error_message == `string` ? e.error_message : void 0,
                        },
                });
              },
            });
          } catch {
            S({ type: `failed`, reason: `initialization` });
          } finally {
            ((m = !1), p != null && x(p));
          }
        });
        if (p == null) {
          if (a && !(await a())) {
            C();
            return;
          }
          p ?? (await i, p == null && o && !(await o()) && C());
        }
      })().then(
        () => {
          if (p == null) {
            (window.clearTimeout(y), i !== r && i?.removeEventListener(`abort`, C));
            try {
              f?.open();
            } catch {
              S({ type: `failed`, reason: `open` });
            }
          }
        },
        () => S({ type: `failed`, reason: `initialization` }),
      ));
  });
}
var j, M;
function N() {
  return (N = e(() => {
    ((j = 3e4), (M = 1e3));
  }))();
}
var P;
function F() {
  return (F = e(() => {
    (c(),
      (P = l({
        onboardingPrompt: {
          id: `mattress.prompts.ledger_onboarding.prompt`,
          defaultMessage: `What can I do with my newly connected accounts once they finish syncing?`,
          description: `Starter prompt automatically submitted as the user's first ChatGPT Personal Finance chat message after they successfully link bank, card, loan, or investment accounts. The user is asking what ChatGPT can help them do while their newly connected financial account data finishes synchronizing. Keep this a reassuring, conversational question and do not imply that synchronization has already finished.`,
        },
        connectionError: {
          id: `mattress.ledger.account_connection.error.toast`,
          defaultMessage: `Something went wrong with setting up the connection`,
          description: `Warning toast shown to an end user in ChatGPT Personal Finance when ChatGPT cannot start the Ledger OAuth request, launch Plaid Link, or confirm the completed bank connection. Short sentence with no placeholders.`,
        },
        connectionSuccess: {
          id: `personalFinance.accounts.connectionSuccess`,
          defaultMessage: `Your financial account is now connected`,
          description: `Success toast shown after Plaid and ChatGPT confirm that a financial account was successfully connected or repaired in ChatGPT Personal Finance`,
        },
      })));
  }))();
}
async function I(e, { accountId: t, signal: n, onConversationStarted: r }) {
  let i = e.get(_).formatMessage(P.onboardingPrompt),
    a = await D(e, {
      accountId: t,
      forceOnboarding: !0,
      prompt: i,
      requireServerConversation: !0,
      signal: n,
      userCompletionMessages: h({
        prompt: i,
        systemHints: [w],
        messageMetadata: {
          starter_prompt_id: `finance-onboarding-connect-ledger`,
          suggestion_type: `starter`,
        },
      }),
    });
  if (!n.aborted) {
    if (a == null) throw Error(`Finance onboarding conversation did not start`);
    r?.(a);
  }
}
function L() {
  return (L = e(() => {
    (fe(), ne(), F(), S(), O());
  }))();
}
function R() {
  return (R = e(() => {}))();
}
async function be(
  e,
  {
    accountId: t,
    linkId: n,
    onConversationStarted: r,
    receivedRedirectUri: i,
    returnTo: a = g,
    signal: o,
    startOnboarding: s = !1,
  },
) {
  if (Z != null && !Z.signal.aborted) throw Error(`A financial account connection is already in progress`);
  if (o?.aborted) return !1;
  let c = new AbortController();
  Z = c;
  let l = () => c.abort();
  o?.addEventListener(`abort`, l, { once: !0 });
  try {
    let o = i == null ? null : H(t);
    if (i != null && (o == null || !new URL(i).searchParams.get(`oauth_state_id`)))
      throw Error(`The financial account connection could not be resumed`);
    let l =
      o == null
        ? await e.get(C).startOAuthFlow({ link_id: n, native_android: !1, native_ios: !1 }, c.signal)
        : { oauth_state_id: o.oauthStateId, token: o.linkToken };
    if (c.signal.aborted) return !1;
    if (typeof l.token != `string` || l.token.length === 0)
      throw Error(`The financial account connection did not provide a token`);
    let u = l.token;
    i ??
      V({
        accountId: t,
        createdAt: Date.now(),
        linkToken: u,
        oauthStateId: l.oauth_state_id,
        returnTo: a,
        startOnboarding: s,
      });
    let d = await z(c.signal);
    if (d == null) return !1;
    let f = await B(e, d, {
      oauthStateId: l.oauth_state_id,
      linkToken: u,
      receivedRedirectUri: i,
      signal: c.signal,
    });
    if (
      f.type !== `completed` ||
      c.signal.aborted ||
      (await e
        .get(C)
        .markOAuthFlowInitializing(l.oauth_state_id)
        .catch(() => void 0),
      c.signal.aborted)
    )
      return !1;
    f.publicToken != null &&
      e
        .get(C)
        .submitPlaidPublicToken({ link_token: u, public_token: f.publicToken })
        .catch(() => void 0);
    let p = await Te(e, t, l.oauth_state_id, c.signal);
    if (p && !c.signal.aborted && (o?.startOnboarding ?? s)) {
      let n = H(t);
      (n != null && window.sessionStorage.setItem(K, JSON.stringify({ ...n, startOnboarding: !1 })),
        await I(e, { accountId: t, onConversationStarted: r, signal: c.signal }));
    }
    return p;
  } finally {
    (c.abort(), o?.removeEventListener(`abort`, l), Z === c && ((Z = null), U(t)));
  }
}
async function xe(
  e,
  { accountId: t, linkToken: n, oauthStateId: r, returnTo: i = g, signal: a, startOnboarding: o = !1 },
) {
  if (Z != null && !Z.signal.aborted) return { type: `exited`, plaidErrorCode: `flow_already_in_progress` };
  if (a?.aborted) return { type: `exited`, plaidErrorCode: `launch_cancelled` };
  let s = new AbortController();
  Z = s;
  let c = () => s.abort();
  (a?.addEventListener(`abort`, c, { once: !0 }),
    V({
      accountId: t,
      createdAt: Date.now(),
      linkToken: n,
      oauthStateId: r,
      returnTo: i,
      startOnboarding: o,
    }));
  try {
    let i = await z(s.signal);
    if (i == null) return { type: `exited`, plaidErrorCode: `launch_cancelled` };
    let a = await B(e, i, { oauthStateId: r, linkToken: n, signal: s.signal });
    return a.type === `completed`
      ? (e.queryClient.invalidateQueries({ queryKey: [`personal-finance`, t] }),
        { publicToken: a.publicToken, type: `completed` })
      : { type: `exited`, plaidExitStatus: `exited` };
  } finally {
    (s.abort(), a?.removeEventListener(`abort`, c), Z === s && ((Z = null), U(t)));
  }
}
function Se(e) {
  return H(e)?.returnTo ?? `/finances`;
}
async function z(e) {
  return e.aborted
    ? null
    : t(Ce(), e).catch((t) => {
        if (e.aborted) return null;
        throw t;
      });
}
async function Ce() {
  let e = window;
  if (e.Plaid != null) return e.Plaid;
  let t = Q ?? we(e);
  Q = t;
  try {
    return await t;
  } catch (e) {
    throw (Q === t && (Q = null), e);
  }
}
function we(e) {
  return new Promise((t, n) => {
    let r = document.querySelector(G),
      i = r ?? document.createElement(`script`),
      a = window.setTimeout(() => {
        c(Error(`The financial account connection took too long to load`));
      }, J),
      o = () => {
        if (e.Plaid == null) {
          c(Error(`The financial account provider could not be loaded`));
          return;
        }
        c(null, e.Plaid);
      },
      s = () => {
        c(Error(`The financial account provider could not be loaded`));
      },
      c = (r, c) => {
        (window.clearTimeout(a),
          i.removeEventListener(`load`, o),
          i.removeEventListener(`error`, s),
          r == null ? c != null && t(c) : (e.Plaid ?? i.remove(), n(r)));
      };
    if (
      (i.addEventListener(`load`, o, { once: !0 }), i.addEventListener(`error`, s, { once: !0 }), r == null)
    ) {
      ((i.async = !0), (i.dataset.codexPlaidLink = `true`), (i.referrerPolicy = `no-referrer`), (i.src = W));
      let e = document.querySelector(`script[nonce]`)?.nonce;
      (e != null && e.length > 0 && (i.nonce = e), document.head.appendChild(i));
    }
  });
}
async function B(e, t, { oauthStateId: n, linkToken: r, receivedRedirectUri: i, signal: a }) {
  let o = se(e, `2449474194`),
    s = e.get(ie),
    c = document.activeElement;
  for (; c?.shadowRoot?.activeElement != null;) c = c.shadowRoot.activeElement;
  let l = (e) => k(e);
  window.addEventListener(`message`, l, !0);
  let u = await ye(t, {
    linkToken: r,
    receivedRedirectUri: i,
    signal: a,
    onEvent: o
      ? (e, t) => {
          s.log({
            message: `Plaid Link event`,
            status: `info`,
            context: {
              event_name: e,
              oauth_state_id: n,
              event_timestamp: t?.timestamp,
              link_session_id: t?.link_session_id,
              request_id: t?.request_id,
              institution_id: t?.institution_id,
              error_code: t?.error_code,
              exit_status: t?.exit_status,
              view_name: t?.view_name,
            },
          });
        }
      : void 0,
    onDispose: () => {
      (window.removeEventListener(`message`, l, !0),
        !a.aborted && c instanceof HTMLElement && c.isConnected && c.focus({ preventScroll: !0 }));
    },
  });
  if (u.type === `failed`)
    throw Error(
      u.reason === `timeout`
        ? `The financial account connection took too long to open`
        : `The financial account connection could not open`,
    );
  if (u.type === `exited` && u.error != null) throw Error(`The financial account connection failed`);
  return u;
}
async function Te(e, t, n, r) {
  let i = Date.now() + q;
  for (; !r.aborted && Date.now() < i;) {
    try {
      let i = await e.get(C).getOAuthState(n, r);
      if (i.finished || i.connected_accounts > 0)
        return (
          e.query.invalidate(x, t),
          await e.queryClient.invalidateQueries({ queryKey: [`personal-finance`, t] }),
          !0
        );
      if (i.status === `error` || i.status === `disconnected`)
        throw Error(`The financial account connection was declined`);
    } catch (e) {
      if (r.aborted || (e instanceof Error && e.message === `The financial account connection was declined`))
        throw e;
    }
    await Ee(r);
  }
  return !1;
}
function Ee(e) {
  return new Promise((t) => {
    let n = () => {
        (window.clearTimeout(r), e.removeEventListener(`abort`, n), t());
      },
      r = window.setTimeout(n, Y);
    (e.addEventListener(`abort`, n, { once: !0 }), e.aborted && n());
  });
}
function V(e) {
  try {
    window.sessionStorage.setItem(K, JSON.stringify(e));
  } catch {}
}
function H(e) {
  try {
    let t = window.sessionStorage.getItem(K);
    if (t == null) return null;
    let n = X.safeParse(JSON.parse(t));
    return !n.success || n.data.accountId !== e || Date.now() - n.data.createdAt > q ? (U(e), null) : n.data;
  } catch {
    return (U(e), null);
  }
}
function U(e) {
  try {
    let t = window.sessionStorage.getItem(K);
    if (t == null) return;
    let n = X.safeParse(JSON.parse(t));
    (!n.success || n.data.accountId === e) && window.sessionStorage.removeItem(K);
  } catch {}
}
var W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (N(),
      d(),
      r(),
      b(),
      me(),
      ee(),
      le(),
      y(),
      S(),
      A(),
      L(),
      (W = `https://cdn.plaid.com/link/v2/stable/link-initialize.js`),
      (G = `script[data-codex-plaid-link]`),
      (K = `codex:finance:pending-plaid-link`),
      (q = 18e5),
      (J = 3e4),
      (Y = 2e3),
      (X = u({
        accountId: s().min(1),
        createdAt: a(),
        linkToken: s().min(1),
        oauthStateId: s().min(1),
        returnTo: ce.shape.redirectAfter.unwrap(),
        startOnboarding: i().optional(),
      })),
      (Z = null),
      (Q = null));
  }))();
}
export {
  R as a,
  P as c,
  A as d,
  O as f,
  xe as i,
  F as l,
  $ as n,
  L as o,
  D as p,
  be as r,
  I as s,
  Se as t,
  k as u,
};
//# sourceMappingURL=plaid-link-9eda498b2606.js.map
