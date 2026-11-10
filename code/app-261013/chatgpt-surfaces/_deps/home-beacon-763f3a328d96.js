const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./account-linking-12b6a2862f9e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./ValdiRuntimeProvider-2b6173af5e2b.js",
      "./LocaleResolver-ec903b26648d.js",
      "./src-2f77e687e887.js",
      "./Buffer-894a440955a0.js",
      "./CancelablePromise-9c54b89028f7.js",
      "./valdi-locale-68563ccde12a.js",
      "./experiment-service-77f186b83e5e.js",
      "./plaid-link-7ebfb008cf36.js",
      "./plaid-link-fb2ecd2502fa.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  VDt as i,
  fPt as a,
  hot as o,
  jDt as s,
  lot as c,
  pPt as l,
  rst as u,
  vzt as d,
  wot as f,
  xMt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  $At as m,
  $Zt as h,
  APr as ee,
  Ait as g,
  Csr as _,
  Dsr as v,
  ETr as y,
  Edn as b,
  G4n as x,
  GMr as S,
  Icr as te,
  J4n as ne,
  MPr as re,
  Msr as C,
  Ncr as ie,
  OPr as ae,
  QAt as w,
  QDr as T,
  RAt as E,
  Rdn as D,
  TTr as O,
  Tdn as k,
  U4n as A,
  UAt as j,
  Udr as M,
  XDr as N,
  ZAt as P,
  aIr as F,
  bTr as I,
  fJt as L,
  kit as R,
  oFr as z,
  oIr as oe,
  r3t as B,
  tNr as V,
  xTr as H,
  zdn as U,
} from "./app-initial-5851df3f6cb1.js";
import { n as W, t as G } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as K, s as q } from "./chatgpt_finance-6f5d98dfb009.js";
import { f as se, n as ce, p as le, r as ue } from "./plaid-link-7ebfb008cf36.js";
function J(e) {
  let r = (0, Y.c)(14),
    { onConnected: a, onClose: o } = e,
    s = n(t),
    c = i(),
    l;
  r[0] === c
    ? (l = r[1])
    : ((l = O(
        c.formatMessage({
          id: `personalFinance.accounts.connectorName`,
          defaultMessage: `ChatGPT Personal Finance`,
          description: `Display name of the first-party ChatGPT Personal Finance app shown in the existing Codex connector consent and privacy-disclosure dialog`,
        }),
      )),
      (r[0] = c),
      (r[1] = l));
  let u;
  r[2] === s
    ? (u = r[3])
    : ((u = (e) => {
        let { app: t } = e;
        return s.get(m).createConnectorLink(t.id, t.name, `CONNECTOR_SETTING`);
      }),
      (r[2] = s),
      (r[3] = u));
  let d;
  r[4] !== a || r[5] !== s
    ? ((d = () => {
        (s.query.invalidate(R, s.get(S)), a());
      }),
      (r[4] = a),
      (r[5] = s),
      (r[6] = d))
    : (d = r[6]);
  let f;
  r[7] === o
    ? (f = r[8])
    : ((f = (e) => {
        e || o();
      }),
      (r[7] = o),
      (r[8] = f));
  let p;
  return (
    r[9] !== l || r[10] !== u || r[11] !== d || r[12] !== f
      ? ((p = (0, X.jsx)(G, {
          app: l,
          authTypeOverride: `NONE`,
          connectApp: u,
          postConnectSource: null,
          showResultToasts: !1,
          onConnected: d,
          onOpenChange: f,
        })),
        (r[9] = l),
        (r[10] = u),
        (r[11] = d),
        (r[12] = f),
        (r[13] = p))
      : (p = r[13]),
    p
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = d()), r(), s(), V(), f(), W(), g(), w(), y(), (X = p()));
  }))();
}
async function Q(
  e,
  { accountId: t, accountType: n, beacon: r, onConversationStarted: i, signal: s, suppressAnalytics: c },
) {
  let l = e.get(oe),
    u = n === `credit_score`,
    d = () => !s.aborted && e.get(S) === t;
  try {
    let n = await e.query.getOrFetch(P, t);
    if (!d() || n?.finances !== !0 || e.get(re, `4135903789`) || !e.get(ee, `4135903789`) || e.get(j, t))
      return !1;
    let o = await ie(e, { productContext: `chatgpt`, signal: s, surface: `finance` });
    if (!d()) return !1;
    let f = o.find(
      (e) => e.canonicalAppId != null && M(e.canonicalAppId) === `connector_693864f100e4819093e6ed9b651239f1`,
    );
    if (
      f?.plugin.availability === `DISABLED_BY_ADMIN` ||
      f?.plugin.installPolicy === `NOT_AVAILABLE` ||
      f?.plugin.disabledReason === `plan_not_eligible`
    )
      throw Error(`Finances is unavailable for this account`);
    if (!f?.plugin.enabled) {
      let t = await D(e, I);
      if (
        !d() ||
        t == null ||
        !(await new Promise((n) => {
          if (
            !b(
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
          let r = e.get(C);
          s.addEventListener(
            `abort`,
            () => {
              let t = e.get(C);
              (t.kind !== `closed` && r.kind !== `closed` && t.requestId === r.requestId && e.set(C, _(t)),
                n(!1));
            },
            { once: !0 },
          );
        })) ||
        !d()
      )
        return !1;
    }
    let { link: p } = await e.get(m).getConnectorLink(I, `CONNECTOR_SETTING`);
    if (!d()) return !1;
    if (p?.auth_status !== `ACTIVE`) {
      let t = await new Promise((t) => {
        (ne(e, J, { onConnected: () => t(!0), onClose: () => t(!1) }),
          s.addEventListener(
            `abort`,
            () => {
              (A(e, J), t(!1));
            },
            { once: !0 },
          ));
      });
      if ((A(e, J), !t || !d())) return !1;
    }
    if (u) {
      let { openPersonalFinanceCreditScore: n } = await a(
        async () => {
          let { openPersonalFinanceCreditScore: e } = await import(`./account-linking-12b6a2862f9e.js`);
          return { openPersonalFinanceCreditScore: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
        import.meta.url,
      );
      return await n(e, { accountId: t, signal: s });
    }
    if (!(await ue(e, { accountId: t, signal: s })) || !d()) return !1;
    let g = l.formatMessage({
        id: `personalFinance.homeBeacon.onboardingPrompt`,
        defaultMessage: `What can I do with my newly connected accounts once they finish syncing?`,
        description: `User message submitted after connecting bank accounts from a Finance homepage banner or modal, asking ChatGPT to explain how the connected accounts can be used`,
      }),
      v = await le(e, {
        accountId: t,
        forceOnboarding: !0,
        prompt: g,
        requireServerConversation: !0,
        signal: s,
        userCompletionMessages: B({
          prompt: g,
          systemHints: [H],
          messageMetadata: {
            starter_prompt_id: `finance-onboarding-connect-ledger`,
            suggestion_type: `starter`,
          },
        }),
      });
    return v == null || !d()
      ? !1
      : (c ||
          T(e, K, {
            surfaceName: `home`,
            entrypoint: h(r) ? `homepage_banner` : `homepage_modal`,
            step: `account_linking`,
            provider: `plaid`,
            result: `success`,
          }),
        i(v),
        !0);
  } catch {
    return (
      d() &&
        e
          .get(o)
          .danger(
            l.formatMessage({
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
      u(),
      V(),
      L(),
      x(),
      c(),
      F(),
      v(),
      U(),
      k(),
      te(),
      N(),
      z(),
      ae(),
      w(),
      y(),
      se(),
      Z(),
      ce(),
      E(),
      l());
  }))();
}
$();
export { Q as connectPersonalFinanceFromHomeBeacon };
//# sourceMappingURL=home-beacon-763f3a328d96.js.map
