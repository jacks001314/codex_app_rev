const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./account-linking-e9d479ee7c45.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./CompilerIntrinsics-4c3aa32fc713.js",
      "./LocaleResolver-442ce4437d3e.js",
      "./src-fca6ebecffa4.js",
      "./Buffer-894a440955a0.js",
      "./CancelablePromise-d6a5f16ca4d1.js",
      "./valdi-locale-cf3cf08c8f5c.js",
      "./experiment-service-34b09e32d9d2.js",
      "./plaid-link-9eda498b2606.js",
      "./plaid-link-fb2ecd2502fa.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  LNt as r,
  OFt as i,
  PBt as a,
  Qst as o,
  Vrt as s,
  XOt as c,
  ZSt as l,
  kFt as u,
  okt as d,
  qrt as f,
  sct as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as m,
  BZt as ee,
  Bhr as h,
  CIr as g,
  D5n as _,
  Dnn as te,
  EDt as v,
  FDt as y,
  Gat as b,
  Hkr as x,
  IDt as S,
  Ikr as C,
  JQt as ne,
  KBr as re,
  Kat as ie,
  Lkr as ae,
  Onn as w,
  PDt as T,
  SIr as E,
  Sfr as D,
  T5n as O,
  Tfr as k,
  Vkr as A,
  dBr as j,
  fdr as M,
  gdr as N,
  hnn as P,
  lBr as F,
  mnn as I,
  pBr as L,
  qGt as R,
  wLr as z,
  xDt as oe,
  xMr as B,
  xdr as V,
  yMr as H,
  zRr as U,
} from "./app-initial-ad16eaadf81f.js";
import { n as W, t as G } from "./app-connect-modal-763ad0733e86.js";
import { n as K, s as q } from "./chatgpt_finance-6f5d98dfb009.js";
import { f as se, n as ce, p as le, r as ue } from "./plaid-link-9eda498b2606.js";
function J(e) {
  let n = (0, Y.c)(14),
    { onConnected: r, onClose: i } = e,
    a = t(o),
    s = d(),
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = A(
        s.formatMessage({
          id: `personalFinance.accounts.connectorName`,
          defaultMessage: `ChatGPT Personal Finance`,
          description: `Display name of the first-party ChatGPT Personal Finance app shown in the existing Codex connector consent and privacy-disclosure dialog`,
        }),
      )),
      (n[0] = s),
      (n[1] = c));
  let l;
  n[2] === a
    ? (l = n[3])
    : ((l = (e) => {
        let { app: t } = e;
        return a.get(S).createConnectorLink(t.id, t.name, `CONNECTOR_SETTING`);
      }),
      (n[2] = a),
      (n[3] = l));
  let u;
  n[4] !== r || n[5] !== a
    ? ((u = () => {
        (a.query.invalidate(b, a.get(U)), r());
      }),
      (n[4] = r),
      (n[5] = a),
      (n[6] = u))
    : (u = n[6]);
  let f;
  n[7] === i
    ? (f = n[8])
    : ((f = (e) => {
        e || i();
      }),
      (n[7] = i),
      (n[8] = f));
  let p;
  return (
    n[9] !== c || n[10] !== l || n[11] !== u || n[12] !== f
      ? ((p = (0, X.jsx)(G, {
          app: c,
          authTypeOverride: `NONE`,
          connectApp: l,
          postConnectSource: null,
          showResultToasts: !1,
          onConnected: u,
          onOpenChange: f,
        })),
        (n[9] = c),
        (n[10] = l),
        (n[11] = u),
        (n[12] = f),
        (n[13] = p))
      : (p = n[13]),
    p
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = a()), l(), c(), z(), n(), W(), ie(), y(), x(), (X = r()));
  }))();
}
async function Q(
  e,
  { accountId: t, accountType: n, beacon: r, onConversationStarted: a, signal: o, suppressAnalytics: s },
) {
  let c = e.get(g),
    l = n === `credit_score`,
    u = () => !o.aborted && e.get(U) === t;
  try {
    let n = await e.query.getOrFetch(T, t);
    if (!u() || n?.finances !== !0 || e.get(L, `4135903789`) || !e.get(j, `4135903789`) || e.get(v, t))
      return !1;
    let d = await D(e, { productContext: `chatgpt`, signal: o, surface: `finance` });
    if (!u()) return !1;
    let f = d.find(
      (e) => e.canonicalAppId != null && h(e.canonicalAppId) === `connector_693864f100e4819093e6ed9b651239f1`,
    );
    if (
      f?.plugin.availability === `DISABLED_BY_ADMIN` ||
      f?.plugin.installPolicy === `NOT_AVAILABLE` ||
      f?.plugin.disabledReason === `plan_not_eligible`
    )
      throw Error(`Finances is unavailable for this account`);
    if (!f?.plugin.enabled) {
      let t = await te(e, C);
      if (
        !u() ||
        t == null ||
        !(await new Promise((n) => {
          if (
            !P(
              e,
              {
                displayName: t.displayName,
                remotePluginId: t.pluginId,
                remoteMarketplaceName: `chatgpt-workspace`,
              },
              {
                hostId: `local`,
                onSuccess: () => {
                  n(!0);
                },
                onCancel: () => n(!1),
                onError: () => n(!1),
              },
            )
          ) {
            n(!1);
            return;
          }
          let r = e.get(V);
          o.addEventListener(
            `abort`,
            () => {
              let t = e.get(V);
              (t.kind !== `closed` && r.kind !== `closed` && t.requestId === r.requestId && e.set(V, M(t)),
                n(!1));
            },
            { once: !0 },
          );
        })) ||
        !u()
      )
        return !1;
    }
    let { link: p } = await e.get(S).getConnectorLink(C, `CONNECTOR_SETTING`);
    if (!u()) return !1;
    if (p?.auth_status !== `ACTIVE`) {
      let t = await new Promise((t) => {
        (m(e, J, { onConnected: () => t(!0), onClose: () => t(!1) }),
          o.addEventListener(
            `abort`,
            () => {
              (O(e, J), t(!1));
            },
            { once: !0 },
          ));
      });
      if ((O(e, J), !t || !u())) return !1;
    }
    if (l) {
      let { openPersonalFinanceCreditScore: n } = await i(
        async () => {
          let { openPersonalFinanceCreditScore: e } = await import(`./account-linking-e9d479ee7c45.js`);
          return { openPersonalFinanceCreditScore: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
        import.meta.url,
      );
      return await n(e, { accountId: t, signal: o });
    }
    if (!(await ue(e, { accountId: t, signal: o })) || !u()) return !1;
    let g = c.formatMessage({
        id: `personalFinance.homeBeacon.onboardingPrompt`,
        defaultMessage: `What can I do with my newly connected accounts once they finish syncing?`,
        description: `User message submitted after connecting bank accounts from a Finance homepage banner or modal, asking ChatGPT to explain how the connected accounts can be used`,
      }),
      _ = await le(e, {
        accountId: t,
        forceOnboarding: !0,
        prompt: g,
        requireServerConversation: !0,
        signal: o,
        userCompletionMessages: ee({
          prompt: g,
          systemHints: [ae],
          messageMetadata: {
            starter_prompt_id: `finance-onboarding-connect-ledger`,
            suggestion_type: `starter`,
          },
        }),
      });
    return _ == null || !u()
      ? !1
      : (s ||
          B(e, K, {
            surfaceName: `home`,
            entrypoint: ne(r) ? `homepage_banner` : `homepage_modal`,
            step: `account_linking`,
            provider: `plaid`,
            result: `success`,
          }),
        a(_),
        !0);
  } catch {
    return (
      u() &&
        e
          .get(f)
          .danger(
            c.formatMessage({
              id: `personalFinance.homeBeacon.connectionError`,
              defaultMessage: `Couldn’t finish setting up Finances. Please try again.`,
              description: `Error toast when connecting accounts or starting the Finance onboarding conversation from a homepage banner or modal fails`,
            }),
            { errorAnalytics: { toastId: `personalFinance.homeBeacon.connectionError` } },
          ),
      !1
    );
  }
}
function $() {
  return ($ = e(() => {
    (q(),
      p(),
      z(),
      R(),
      _(),
      s(),
      E(),
      N(),
      w(),
      I(),
      k(),
      H(),
      re(),
      F(),
      y(),
      x(),
      se(),
      Z(),
      ce(),
      oe(),
      u());
  }))();
}
$();
export { Q as connectPersonalFinanceFromHomeBeacon };
//# sourceMappingURL=home-beacon-c43434b6cf07.js.map
