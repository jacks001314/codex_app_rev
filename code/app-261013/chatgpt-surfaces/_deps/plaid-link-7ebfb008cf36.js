import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  Bpt as n,
  EPt as r,
  Rpt as i,
  TLt as a,
  _It as o,
  fLt as s,
  jDt as c,
  pLt as l,
  rst as u,
  vPt as d,
  yPt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $At as p,
  Ait as m,
  DPr as h,
  ETr as g,
  FAn as _,
  JPn as v,
  JZn as y,
  OPr as b,
  QAt as x,
  RAt as ee,
  VZn as te,
  ZPn as ne,
  _$n as re,
  aIr as ie,
  fJt as S,
  g$n as ae,
  hJt as oe,
  kit as se,
  oIr as ce,
  pZn as le,
  r$n as ue,
  r$t as de,
  r3t as fe,
  vdr as pe,
  wTr as C,
  xTr as w,
  xdr as me,
  yjn as he,
  zAt as T,
} from "./app-initial-5851df3f6cb1.js";
async function E(
  e,
  {
    accountId: t,
    forceOnboarding: n = !1,
    onConversationStarted: r,
    prompt: i,
    requireServerConversation: a = !1,
    signal: o,
    systemHints: s,
    userCompletionMessages: c,
  },
) {
  if (o?.aborted) return null;
  let l = e.get(ue).data,
    u =
      l?.versionOptions?.[0]?.modelSlugByLane.thinking ?? l?.options.find((e) => e.lane === `thinking`)?.slug,
    d = null,
    f = null,
    p = () => {
      f != null && de(e, f);
    },
    m = (e) => {
      if (((f = e), o?.aborted)) {
        p();
        return;
      }
      a || r?.(e);
    };
  o?.addEventListener(`abort`, p);
  try {
    let f;
    try {
      f = await oe(e, {
        model: u,
        onClientThreadIdChange: m,
        onServerThreadIdChange: a
          ? (e) => {
              d = e;
            }
          : void 0,
        prompt: i,
        startupSignal: o,
        systemHints: s ?? (n ? [`connector:ledger_onboarding_force`, w] : [w]),
        thinkingEffort: u == null ? null : (l?.defaultThinkingEffortByModelSlug?.[u] ?? null),
        userCompletionMessages: c,
      });
    } catch (e) {
      if (o?.aborted) return null;
      throw e;
    }
    if (o?.aborted) return null;
    if (!a) return (await e.query.invalidate(T, t), f?.serverConversationId ?? f?.conversationId ?? null);
    let p = d ?? f?.serverConversationId ?? null;
    return (
      p == null && f != null && (p = await ge(e, f.conversationId, o)),
      p == null || o?.aborted ? null : (r?.(p), await e.query.invalidate(T, t), p)
    );
  } finally {
    o?.removeEventListener(`abort`, p);
  }
}
async function ge(e, t, r) {
  if (r?.aborted) return null;
  let i = n(),
    a = () => i.resolve(null);
  r?.addEventListener(`abort`, a, { once: !0 });
  let o = e.watch(({ get: e }) => {
    let n = e(le, t);
    n == null ? y(e(te, t)) || i.resolve(null) : i.resolve(n);
  });
  try {
    return await i.promise;
  } finally {
    (o(), r?.removeEventListener(`abort`, a));
  }
}
function D() {
  return (D = e(() => {
    (u(), _(), he(), S(), g(), ee());
  }))();
}
function O(e) {
  let t = d(e);
  t?.type === `toggle-browser-panel` &&
    t.initiator === `window_open` &&
    t.url != null &&
    ne({ href: t.url, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }) &&
    e.stopImmediatePropagation();
}
function k() {
  return (k = e(() => {
    (v(), f());
  }))();
}
function _e(
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
    onDispose: l,
  },
) {
  return new Promise((u) => {
    let d,
      f,
      p = !1,
      m = !1,
      h,
      g = s,
      _ = window.setTimeout(() => b({ type: `failed`, reason: `timeout` }), A),
      v = (e) => {
        if (!m) {
          ((m = !0),
            window.clearTimeout(h),
            window.clearTimeout(_),
            r?.removeEventListener(`abort`, x),
            i?.removeEventListener(`abort`, x));
          try {
            d?.destroy();
          } catch {}
          try {
            l?.();
          } catch {}
          u(e);
        }
      },
      y = (e) => {
        (window.clearTimeout(_),
          c != null && !r?.aborted && (e.type === `completed` || e.type === `exited`)
            ? (h = window.setTimeout(() => v(e), j))
            : v(e));
      },
      b = (e) => {
        f ?? ((f = e), p || y(e));
      },
      x = () => {
        f != null && !p ? v(f) : b({ type: `cancelled` });
      };
    (r?.addEventListener(`abort`, x, { once: !0 }),
      i?.addEventListener(`abort`, x, { once: !0 }),
      (r?.aborted || i?.aborted) && x(),
      (async () => {
        let r = await e;
        if (f != null) return;
        let i = new Promise((e) => {
          p = !0;
          try {
            d = r.create({
              token: t,
              ...(n ? { receivedRedirectUri: n } : {}),
              noLoadingState: !0,
              onLoad: e,
              onEvent: (e, t) => {
                if (!m) {
                  try {
                    c?.(e, t);
                  } catch {}
                  if (e === `OPEN` && f == null && g) {
                    let e = g;
                    ((g = void 0), e());
                  }
                }
              },
              onSuccess: (e) => {
                b({ type: `completed`, ...(typeof e == `string` && e.length > 0 ? { publicToken: e } : {}) });
              },
              onExit: (e, t) => {
                b({
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
            b({ type: `failed`, reason: `initialization` });
          } finally {
            ((p = !1), f != null && y(f));
          }
        });
        if (f == null) {
          if (a && !(await a())) {
            x();
            return;
          }
          f ?? (await i, f == null && o && !(await o()) && x());
        }
      })().then(
        () => {
          if (f == null) {
            (window.clearTimeout(_), i !== r && i?.removeEventListener(`abort`, x));
            try {
              d?.open();
            } catch {
              b({ type: `failed`, reason: `open` });
            }
          }
        },
        () => b({ type: `failed`, reason: `initialization` }),
      ));
  });
}
var A, j;
function M() {
  return (M = e(() => {
    ((A = 3e4), (j = 1e3));
  }))();
}
var N;
function P() {
  return (P = e(() => {
    (c(),
      (N = t({
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
async function F(e, { accountId: t, signal: n, onConversationStarted: r }) {
  let i = e.get(ce).formatMessage(N.onboardingPrompt),
    a = await E(e, {
      accountId: t,
      forceOnboarding: !0,
      prompt: i,
      requireServerConversation: !0,
      signal: n,
      userCompletionMessages: fe({
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
function I() {
  return (I = e(() => {
    (S(), ie(), P(), g(), D());
  }))();
}
function L() {
  return (L = e(() => {}))();
}
async function R(
  e,
  {
    accountId: t,
    linkId: n,
    onConversationStarted: r,
    receivedRedirectUri: i,
    returnTo: a = C,
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
        ? await e.get(p).startOAuthFlow({ link_id: n, native_android: !1, native_ios: !1 }, c.signal)
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
        .get(p)
        .markOAuthFlowInitializing(l.oauth_state_id)
        .catch(() => void 0),
      c.signal.aborted)
    )
      return !1;
    f.publicToken != null &&
      e
        .get(p)
        .submitPlaidPublicToken({ link_token: u, public_token: f.publicToken })
        .catch(() => void 0);
    let m = await Se(e, t, l.oauth_state_id, c.signal);
    if (m && !c.signal.aborted && (o?.startOnboarding ?? s)) {
      let n = H(t);
      (n != null && window.sessionStorage.setItem(K, JSON.stringify({ ...n, startOnboarding: !1 })),
        await F(e, { accountId: t, onConversationStarted: r, signal: c.signal }));
    }
    return m;
  } finally {
    (c.abort(), o?.removeEventListener(`abort`, l), Z === c && ((Z = null), U(t)));
  }
}
async function ve(
  e,
  { accountId: t, linkToken: n, oauthStateId: r, returnTo: i = C, signal: a, startOnboarding: o = !1 },
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
function ye(e) {
  return H(e)?.returnTo ?? `/finances`;
}
async function z(e) {
  return e.aborted
    ? null
    : i(be(), e).catch((t) => {
        if (e.aborted) return null;
        throw t;
      });
}
async function be() {
  let e = window;
  if (e.Plaid != null) return e.Plaid;
  let t = Q ?? xe(e);
  Q = t;
  try {
    return await t;
  } catch (e) {
    throw (Q === t && (Q = null), e);
  }
}
function xe(e) {
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
  let o = h(e, `2449474194`),
    s = e.get(ae),
    c = document.activeElement;
  for (; c?.shadowRoot?.activeElement != null;) c = c.shadowRoot.activeElement;
  let l = (e) => O(e);
  window.addEventListener(`message`, l, !0);
  let u = await _e(t, {
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
async function Se(e, t, n, r) {
  let i = Date.now() + q;
  for (; !r.aborted && Date.now() < i;) {
    try {
      let i = await e.get(p).getOAuthState(n, r);
      if (i.finished || i.connected_accounts > 0)
        return (
          e.query.invalidate(se, t),
          await e.queryClient.invalidateQueries({ queryKey: [`personal-finance`, t] }),
          !0
        );
      if (i.status === `error` || i.status === `disconnected`)
        throw Error(`The financial account connection was declined`);
    } catch (e) {
      if (r.aborted || (e instanceof Error && e.message === `The financial account connection was declined`))
        throw e;
    }
    await Ce(r);
  }
  return !1;
}
function Ce(e) {
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
    (M(),
      u(),
      r(),
      re(),
      me(),
      m(),
      b(),
      x(),
      g(),
      k(),
      I(),
      (W = `https://cdn.plaid.com/link/v2/stable/link-initialize.js`),
      (G = `script[data-codex-plaid-link]`),
      (K = `codex:finance:pending-plaid-link`),
      (q = 18e5),
      (J = 3e4),
      (Y = 2e3),
      (X = l({
        accountId: a().min(1),
        createdAt: s(),
        linkToken: a().min(1),
        oauthStateId: a().min(1),
        returnTo: pe.shape.redirectAfter.unwrap(),
        startOnboarding: o().optional(),
      })),
      (Z = null),
      (Q = null));
  }))();
}
export {
  L as a,
  N as c,
  k as d,
  D as f,
  ve as i,
  P as l,
  $ as n,
  I as o,
  E as p,
  R as r,
  F as s,
  ye as t,
  O as u,
};
//# sourceMappingURL=plaid-link-7ebfb008cf36.js.map
