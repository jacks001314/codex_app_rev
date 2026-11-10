const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./esm-e105ef3ebf62.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { a as e, n as t, r as n, t as r } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bpt as i,
  Cat as a,
  Cot as o,
  Ext as s,
  Ixt as c,
  Pxt as l,
  VDt as u,
  _xt as d,
  bz as f,
  fPt as p,
  hot as m,
  i3 as h,
  jDt as g,
  lot as _,
  mO as v,
  pPt as y,
  r3 as b,
  rst as x,
  vO as S,
  vzt as C,
  wot as w,
  xMt as T,
  xat as E,
  xz as D,
  yzt as O,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  ETr as A,
  G4n as ee,
  J4n as te,
  K4n as j,
  QMr as ne,
  RAt as M,
  U4n as N,
  VAt as re,
  Ymr as P,
  aDr as ie,
  dnn as ae,
  eDr as oe,
  ehr as F,
  fnn as se,
  tNr as I,
  unn as L,
} from "./app-initial-5851df3f6cb1.js";
import { f as ce, o as R, t as z } from "./ValdiRuntimeProvider-2b6173af5e2b.js";
import { r as le } from "./LocaleResolver-ec903b26648d.js";
import {
  A as ue,
  C as de,
  D as B,
  E as fe,
  O as V,
  S as pe,
  T as H,
  _ as me,
  b as he,
  c as ge,
  f as _e,
  h as ve,
  i as ye,
  k as U,
  l as be,
  n as xe,
  p as Se,
  t as Ce,
  u as we,
  w as Te,
  y as Ee,
} from "./src-2f77e687e887.js";
import {
  a as De,
  c as Oe,
  d as ke,
  i as Ae,
  l as je,
  n as Me,
  o as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
} from "./valdi-locale-68563ccde12a.js";
import {
  c as Le,
  i as Re,
  n as ze,
  o as Be,
  r as Ve,
  s as He,
  t as Ue,
} from "./experiment-service-77f186b83e5e.js";
import {
  d as We,
  f as Ge,
  i as Ke,
  n as qe,
  o as Je,
  p as Ye,
  s as Xe,
  u as Ze,
} from "./plaid-link-7ebfb008cf36.js";
function Qe(e, t) {
  let n = t?.identityVerification,
    r = n?.[e];
  return {
    ...(r === void 0
      ? {}
      : {
          theme: {
            header_text_color: r.headingText,
            panel_background_color: r.surface,
            primary_color: r.buttonEnabledBg,
            widget_background_color: r.sheetBg,
            body1: { color: r.mutedText },
            body3: { color: r.mutedText },
            primary_button: {
              border_color: r.buttonEnabledBg,
              button_disabled_border_color: r.buttonDisabledBg,
              button_focused_border_color: r.buttonEnabledBg,
              button_focused_outline: r.focusBorder,
              button_hover_border_color: r.buttonEnabledHoverBg,
              button_pressed_border_color: r.buttonEnabledBg,
            },
            widget_border_color: r.faintText,
            widget_border_weight: `0px`,
          },
        }),
    components: {
      identityVerification: {
        layout: { show_disclosure: !0 },
        styles: { color_scheme: e, light: n?.light, dark: n?.dark },
      },
    },
  };
}
function $e(e) {
  return typeof e != `object` || !e || Array.isArray(e)
    ? !1
    : [`status`, `verification_id`].every((t) => {
        let n = Reflect.get(e, t);
        return n == null || typeof n == `string`;
      });
}
function et(e) {
  let t = $e(e) ? e : void 0,
    n = t?.verification_id;
  return t?.status === `verified` && n
    ? { kind: W.verified, verificationId: n }
    : {
        kind: W.failed,
        verificationId: t?.status === `failed` || t?.status === `expired` ? (n ?? void 0) : void 0,
      };
}
function tt() {
  try {
    window.localStorage.removeItem(ot);
  } catch {
    return;
  }
}
function nt(e) {
  if ((e.removeAttribute(`token`), `formElement` in e && e.formElement instanceof HTMLFormElement))
    for (let t of e.formElement.querySelectorAll(`input[name="token"]`))
      ((t.value = ``), t.removeAttribute(`value`));
  `context` in e &&
    typeof e.context == `object` &&
    e.context != null &&
    Reflect.deleteProperty(e.context, `authToken`);
}
function rt({
  appearance: e,
  getContainer: t,
  label: n = `Experian identity verification`,
  loadSdk: r = K,
  theme: i = `light`,
  verificationToken: a,
  providerEnvironment: o,
  signal: s,
  onDiagnosticEvent: c,
}) {
  return new Promise((l) => {
    let u = new AbortController(),
      d = (e) => {
        (u.abort(), l(e));
      },
      f = () => d({ kind: W.cancelled }),
      p = (e, t, n) => {
        e.addEventListener(
          t,
          (e) => {
            let r = e instanceof CustomEvent ? e.detail : void 0,
              i = typeof r == `object` && r && `experienceDetails` in r ? r.experienceDetails : void 0;
            (c?.(t, o, i), n?.(i));
          },
          { signal: u.signal },
        );
      },
      m = () => {
        let r = t();
        if (r === null) {
          f();
          return;
        }
        let s = document.createElement(at);
        ((s.style.colorScheme = `normal`),
          s.setAttribute(`appearance`, JSON.stringify(Qe(i, e))),
          s.setAttribute(`aria-label`, n),
          s.setAttribute(`environment`, o),
          s.setAttribute(`role`, `region`),
          s.setAttribute(`token`, a),
          p(s, G.load),
          p(s, G.ready),
          p(s, G.statusChange),
          p(s, G.verificationComplete, (e) => d(et(e))),
          p(s, G.error, () => d({ kind: W.failed })),
          p(s, G.close, f));
        let c = new MutationObserver(() => {
            let e = s.querySelector(`iframe`);
            e && (e.setAttribute(`referrerpolicy`, `origin`), c.disconnect());
          }),
          l = () => {
            (c.disconnect(), nt(s), s.removeAttribute(`environment`), s.remove());
          };
        if (u.signal.aborted) {
          l();
          return;
        }
        (u.signal.addEventListener(`abort`, l, { once: !0 }),
          c.observe(s, { childList: !0, subtree: !0 }),
          tt());
        try {
          r.append(s);
        } finally {
          tt();
        }
      },
      h = async () => {
        c?.(`start`, void 0);
        let { registerIdentityVerification: e } = await r();
        (e(), !u.signal.aborted && (c?.(`mount`, o), m()));
      };
    if (s.aborted) {
      f();
      return;
    }
    (s.addEventListener(`abort`, f, { once: !0, signal: u.signal }),
      h()
        .catch((e) => {
          throw (c?.(`start_failed`, o), e);
        })
        .catch(() => d({ kind: W.failed })));
  });
}
function it({ runVerification: e = rt, getContainer: t, getTheme: n, label: r, onCompleted: i }) {
  let a;
  return {
    async runCreditVerification(i, o, s) {
      if (a != null || t() == null) return { kind: 2 };
      a = new AbortController();
      try {
        return await e({
          appearance: s,
          getContainer: t,
          label: r,
          theme: n(),
          verificationToken: o,
          providerEnvironment: i.environment,
          signal: a.signal,
        });
      } finally {
        a = void 0;
      }
    },
    closeCreditVerification: () => a?.abort(),
    onCreditVerificationCompleted: i,
  };
}
var at, ot, W, G, K;
function st() {
  return (st = t(() => {
    (y(),
      (at = `identity-verification`),
      (ot = `connected_solutions_ee_session`),
      (W = { verified: 0, cancelled: 1, failed: 2 }),
      (G = {
        load: `on-load`,
        ready: `on-ready`,
        statusChange: `on-status-change`,
        verificationComplete: `on-verification-complete`,
        error: `on-error`,
        close: `on-close`,
      }),
      (K = () => p(() => import(`./esm-e105ef3ebf62.js`), __vite__mapDeps([0, 1]), import.meta.url)));
  }))();
}
var q = r((e, t) => {
    ((t.path = `foundation/src/uuid`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.v4 = void 0));
    function n() {
      return `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.replace(/[xy]/g, (e) => {
        let t = (Math.random() * 16) | 0;
        return (e === `x` ? t : (t & 3) | 8).toString(16);
      });
    }
    e.v4 = n;
  }),
  ct = r((e, t) => {
    ((t.path = `chatgpt_finance/src/FinanceFunnelModels`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceLinkingEntrypoint =
        e.FinanceFunnelPlatform =
        e.FinanceCreditFunnelStep =
        e.FinanceFunnelStep =
          void 0));
    var n;
    (function (e) {
      ((e.FlowStarted = `flow_started`),
        (e.PickerReady = `picker_ready`),
        (e.PickerLoadFailed = `picker_load_failed`),
        (e.InstitutionSelected = `institution_selected`),
        (e.PlaidLaunchRequested = `plaid_launch_requested`),
        (e.PlaidSuccess = `plaid_success`),
        (e.PlaidExit = `plaid_exit`),
        (e.LinkFailed = `link_failed`));
    })(n || (e.FinanceFunnelStep = n = {}));
    var r;
    (function (e) {
      ((e.FlowStarted = `flow_started`),
        (e.AuthorizationSucceeded = `authorization_succeeded`),
        (e.AuthorizationCancelled = `authorization_cancelled`),
        (e.AuthorizationFailed = `authorization_failed`),
        (e.SessionStartFailed = `session_start_failed`),
        (e.SdkLaunchRequested = `sdk_launch_requested`),
        (e.SdkVerified = `sdk_verified`),
        (e.SdkCancelled = `sdk_cancelled`),
        (e.SdkFailed = `sdk_failed`),
        (e.SdkError = `sdk_error`),
        (e.CompletionRetryRequested = `completion_retry_requested`),
        (e.CompletionConnected = `completion_connected`),
        (e.CompletionPending = `completion_pending`),
        (e.CompletionFailed = `completion_failed`),
        (e.CompletionExpired = `completion_expired`),
        (e.CompletionRequiresAction = `completion_requires_action`),
        (e.CompletionError = `completion_error`));
    })(r || (e.FinanceCreditFunnelStep = r = {}));
    var i;
    (function (e) {
      ((e.IOS = `ios`),
        (e.Android = `android`),
        (e.DesktopWeb = `desktop_web`),
        (e.MobileWeb = `mobile_web`));
    })(i || (e.FinanceFunnelPlatform = i = {}));
    var a;
    (function (e) {
      ((e.Beacon = `beacon`),
        (e.StarterPrompt = `starter_prompt`),
        (e.Conversation = `conversation`),
        (e.AccountManagement = `account_management`),
        (e.DirectCredit = `direct_credit`),
        (e.Unknown = `unknown`));
    })(a || (e.FinanceLinkingEntrypoint = a = {}));
  }),
  lt = r((e, t) => {
    ((t.path = `chatgpt_finance/src/FinanceAccountLinkingRepository`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingRepository = e.FinanceAccountLinkingCancelledError = void 0));
    var n = z().getValdiRuntime(),
      r = He(),
      i = Ve(),
      a = 2e3,
      o = 18e5 / a,
      s = class extends Error {
        constructor() {
          super(`Finance account linking was cancelled`);
        }
      };
    ((e.FinanceAccountLinkingCancelledError = s),
      (e.FinanceAccountLinkingRepository = class {
        constructor(e, t) {
          ((this.api = e), (this.options = t), (this.activeRequests = new Set()), (this.generation = 0));
        }
        session() {
          if (this.preparedSession !== void 0) return this.preparedSession;
          let e = this.generation;
          return (
            (this.preparedSession = this.request(this.api.startAccountLinking(this.options), e)),
            this.preparedSession
          );
        }
        async complete(e, t) {
          let a = this.generation;
          if (t === void 0 || t.trim().length === 0)
            n.isLoggingEnabled &&
              console.info(`Plaid completed without a public token; waiting for Ledger confirmation`);
          else
            try {
              await this.request(this.api.submitPlaidPublicToken(e.linkToken, t), a);
            } catch (e) {
              if (!(e instanceof i.FinanceRequestError)) throw e;
              if (a !== this.generation || e.resultKind === r.OAINetworkResultKind.Cancelled) throw new s();
              n.isLoggingEnabled &&
                console.warn(`Plaid public-token submission failed; waiting for Ledger confirmation`, {
                  error: e,
                });
            }
          return this.confirmLinkedAccounts(e, a);
        }
        clearSession() {
          this.preparedSession = void 0;
        }
        cancel() {
          this.generation += 1;
          for (let e of this.activeRequests) e.cancel();
          (this.activeRequests.clear(),
            this.pollDelay?.cancel(),
            (this.pollDelay = void 0),
            (this.preparedSession = void 0));
        }
        async confirmLinkedAccounts(e, t) {
          for (let n = 0; n < o; n += 1) {
            let n = await this.request(this.api.accountLinkingState(e.oauthStateId), t);
            if (n.finished) {
              if (n.linkedInstitutions.length === 0)
                throw Error(`Finance account linking finished without registered accounts`);
              return n.linkedInstitutions;
            }
            await this.waitForNextPoll(t);
          }
          throw Error(`Finance account linking timed out before Ledger finished registration`);
        }
        async request(e, t) {
          this.activeRequests.add(e);
          try {
            let n = await e.result;
            if (t !== this.generation) throw new s();
            return n;
          } finally {
            this.activeRequests.delete(e);
          }
        }
        waitForNextPoll(e) {
          return new Promise((t, n) => {
            let r = setTimeout(() => {
              ((this.pollDelay = void 0), e === this.generation ? t() : n(new s()));
            }, a);
            this.pollDelay = {
              cancel() {
                (clearTimeout(r), n(new s()));
              },
            };
          });
        }
      }));
  }),
  ut = r((e, t) => {
    ((t.path = `chatgpt_finance/src/FinanceCreditVerificationRepository`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceCreditVerificationRepository = void 0));
    var n = lt();
    e.FinanceCreditVerificationRepository = class {
      constructor(e) {
        ((this.api = e), (this.activeRequests = new Set()), (this.generation = 0));
      }
      eligibility() {
        return this.request(this.api.creditVerificationEligibility(), this.generation);
      }
      start() {
        return this.request(this.api.startCreditVerification(), this.generation);
      }
      complete(e, t) {
        try {
          return this.request(this.api.completeCreditVerification(e, t), this.generation);
        } catch (e) {
          return Promise.reject(e);
        }
      }
      cancel() {
        this.generation += 1;
        for (let e of this.activeRequests) e.cancel();
        this.activeRequests.clear();
      }
      async request(e, t) {
        this.activeRequests.add(e);
        try {
          let r = await e.result;
          if (t !== this.generation) throw new n.FinanceAccountLinkingCancelledError();
          return r;
        } catch (e) {
          throw t === this.generation ? e : new n.FinanceAccountLinkingCancelledError();
        } finally {
          this.activeRequests.delete(e);
        }
      }
    };
  }),
  dt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingComponent`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingTab = void 0),
      B().jsx);
    var n;
    (function (e) {
      ((e.Accounts = `accounts`),
        (e.CreditScore = `creditScore`),
        (e.RealEstate = `realEstate`),
        (e.ManualAccounts = `manualAccounts`));
    })(n || (e.FinanceAccountLinkingTab = n = {}));
  }),
  J = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinancesListStyles`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.financesListStyles = void 0));
    var n = H(),
      r = V(),
      i = (0, n.resolveOAITextStyle)(n.OAITextSize.BodyLarge);
    e.financesListStyles = {
      scroll: new r.Style({ flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: `100%` }),
      list: new r.Style({
        flexDirection: `column`,
        gap: n.OAISpacing.Half,
        paddingBottom: n.OAISpacing.Three,
        paddingLeft: n.OAISpacing.Three,
        paddingRight: n.OAISpacing.Three,
        width: `100%`,
      }),
      row: new r.Style({
        alignItems: `center`,
        flexDirection: `row`,
        gap: n.OAISpacing.OneAndHalf,
        minHeight: n.OAISpacing.Seven,
        width: `100%`,
      }),
      title: new r.Style({
        color: n.OAIColor.TextPrimary,
        flexGrow: 1,
        flexShrink: 1,
        font: i.font,
        lineHeight: i.lineHeight,
        minWidth: 0,
        numberOfLines: 1,
      }),
      accessory: new r.Style({
        alignItems: `center`,
        flexShrink: 0,
        height: n.OAISpacing.Four,
        justifyContent: `center`,
        width: n.OAISpacing.Four,
      }),
      chevron: new r.Style({
        accessibilityNavigation: `ignored`,
        flexShrink: 0,
        height: n.OAISpacing.TwoPointFive,
        objectFit: `contain`,
        tint: n.OAIColor.IconTertiary,
        width: n.OAISpacing.TwoPointFive,
      }),
      iconContainer: new r.Style({
        alignItems: `center`,
        backgroundColor: n.OAIColor.BgPrimary,
        borderColor: n.OAIColor.BorderLight,
        borderRadius: n.OAIRadius.Pill,
        borderWidth: 0.5,
        height: n.OAISpacing.FivePointFive,
        justifyContent: `center`,
        width: n.OAISpacing.FivePointFive,
      }),
      iconSurface: new r.Style({
        accessibilityNavigation: `ignored`,
        alignItems: `center`,
        backgroundColor: n.OAIColor.BgTertiary,
        borderRadius: n.OAIRadius.Pill,
        height: n.OAISpacing.Four,
        justifyContent: `center`,
        width: n.OAISpacing.Four,
      }),
      icon: new r.Style({
        accessibilityNavigation: `ignored`,
        height: n.OAISpacing.TwoPointFive,
        objectFit: `contain`,
        tint: n.OAIColor.IconPrimary,
        width: n.OAISpacing.TwoPointFive,
      }),
    };
  }),
  Y = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceInstitutionLogo`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceInstitutionLogo = void 0));
    var n = z().getValdiRuntime(),
      r = B().jsx,
      i = r.makeNodePrototype(`view`, void 0, `bOcPExGakWTe0UN_`),
      a = r.makeNodePrototype(`view`, void 0, `cCwJ6wlFCcMyooTv`),
      o = r.makeNodePrototype(`image`, void 0, `reN4Wqc5PWM6OizL`),
      s = r.makeNodePrototype(`view`, void 0, `1z6LQn1dbrJnTcao`),
      c = r.makeNodePrototype(`image`, void 0, `nmYQq-YzRBfnLsQ3`),
      l = _e(),
      u = H(),
      d = ue(),
      f = U(),
      p = V(),
      m = J();
    e.FinanceInstitutionLogo = class extends f.StatefulComponent {
      constructor() {
        (super(...arguments),
          (this.state = { loadState: 0 }),
          (this.handleAssetLoad = (e, t) => {
            (e ||
              (n.isLoggingEnabled &&
                console.warn(
                  `Unable to load Finance institution logo ${this.viewModel.institutionId}: ${t ?? `unknown error`}`,
                )),
              this.setState({ loadState: e ? 1 : 2 }));
          }));
      }
      onViewModelUpdate(e) {
        e !== void 0 &&
          (e.institutionId !== this.viewModel.institutionId || e.logo !== this.viewModel.logo) &&
          this.setState({ loadState: 0 });
      }
      onRender() {
        let e = this.logoAsset(this.viewModel.logo),
          t = e === void 0 || this.state.loadState === 2;
        (r.beginRender(i, void 0),
          r.setAttributeStyle(`style`, m.financesListStyles.iconContainer),
          t
            ? (r.beginRender(a, void 0),
              r.setAttributeStyle(`style`, m.financesListStyles.iconSurface),
              r.beginRender(o, void 0),
              r.setAttributeStyle(`style`, m.financesListStyles.icon),
              r.setAttributeString(
                `accessibilityId`,
                `finance-institution-${this.viewModel.institutionId}-logo-fallback`,
              ),
              r.setAttribute(`src`, l.default.building),
              r.endRender(),
              r.endRender())
            : this.state.loadState === 0 &&
              (r.beginRender(s, void 0),
              r.setAttributeStyle(`style`, m.financesListStyles.iconSurface),
              r.setAttributeString(
                `accessibilityId`,
                `finance-institution-${this.viewModel.institutionId}-logo-placeholder`,
              ),
              r.endRender()),
          !t &&
            e !== void 0 &&
            (r.beginRender(c, void 0),
            r.setAttributeStyle(`style`, h.image),
            r.setAttributeString(
              `accessibilityId`,
              `finance-institution-${this.viewModel.institutionId}-logo`,
            ),
            r.setAttribute(`src`, e),
            r.setAttributeFunction(`onAssetLoad`, this.handleAssetLoad),
            r.endRender()),
          r.endRender());
      }
      logoAsset(e) {
        if (e !== void 0 && e.length !== 0)
          try {
            return (0, d.makeAssetFromUrl)(e);
          } catch (e) {
            n.isLoggingEnabled &&
              console.warn(`Unable to create Finance institution logo asset: ${String(e)}`);
            return;
          }
      }
    };
    var h = {
      image: new p.Style({
        borderRadius: u.OAIRadius.Pill,
        height: u.OAISpacing.Four,
        objectFit: `contain`,
        position: `absolute`,
        width: u.OAISpacing.Four,
      }),
    };
  }),
  ft = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingConfirmation`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingConfirmation = void 0));
    var n = B().jsx,
      r = n.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-confirmation`],
        `ewK9_zv4MwEifGbL`,
      ),
      i = n.makeNodePrototype(`view`, void 0, `6Ek_xlNJiRE30J6e`),
      a = n.makeNodePrototype(`view`, void 0, `lIO7gDzG3IC8zm3T`),
      o = n.makeComponentPrototype([`size`, 36], `WjwuK1UvTVHTSPtO`),
      s = n.makeNodePrototype(`view`, void 0, `Yrf0p07EN7DSCBDX`),
      c = n.makeNodePrototype(`label`, void 0, `hhHsOvZ0FpogmXQR`),
      l = n.makeNodePrototype(`label`, void 0, `fuUsZKbSRFlhBCG0`),
      u = n.makeNodePrototype(`scroll`, void 0, `tYQDWU99OqjJRs-O`),
      d = n.makeNodePrototype(
        `view`,
        [`accessibilityId`, `finance-account-linking-confirmation-list`],
        `_MYrbHq02Uv8Vw2w`,
      ),
      f = n.makeNodePrototype(`view`, void 0, `PLyKAzzXLnK7gaf-`),
      p = n.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-continue`],
        `vVdzD8Ak_90h1Psy`,
      ),
      m = n.makeNodePrototype(`view`, void 0, `i9JUsIQuulRgr0c_`),
      h = n.makeNodePrototype(`view`, void 0, `EvUx9gaoLO0cpFe3`),
      g = n.makeComponentPrototype(void 0, `OJTjVidcTTpAdagR`),
      _ = n.makeNodePrototype(`label`, void 0, `6GDYdDd9w1Cpb8gz`),
      v = n.makeNodePrototype(`label`, void 0, `HfemELPIPtwiuXn-`),
      y = n.makeNodePrototype(`view`, void 0, `PpH42b2BqZj70zVZ`),
      b = _e(),
      x = H(),
      S = me(),
      C = be(),
      w = U(),
      T = V(),
      E = fe(),
      D = ye(),
      O = Y(),
      k = je();
    e.FinanceAccountLinkingConfirmation = class extends w.Component {
      onRender() {
        let e = this.viewModel.institutions.length,
          t =
            e === 1
              ? k.default.financeAccountLinkingConfirmationOneInstitutionDetail(e)
              : k.default.financeAccountLinkingConfirmationMultipleInstitutionsDetail(e);
        (n.beginComponent(D.SafeArea, r, void 0, void 0),
          n.setViewModelProperty(`style`, A.confirmation),
          n.setViewModelProperty(`edges`, [D.SafeAreaEdge.Bottom]),
          n.setUnnamedSlot(() => {
            (n.beginRender(i, void 0),
              n.setAttributeStyle(`style`, A.header),
              n.beginRender(a, void 0),
              n.setAttributeStyle(`style`, A.successIcon),
              n.setAttributeString(`accessibilityLabel`, k.default.financeAccountLinkingConfirmationTitle()),
              n.beginComponent(C.Icon, o, void 0, void 0),
              n.setViewModelProperty(`src`, b.default.checkMd),
              n.setViewModelProperty(`color`, x.OAIColor.IconInverted),
              n.endComponent(),
              n.endRender(),
              n.beginRender(s, void 0),
              n.setAttributeStyle(`style`, A.heading),
              n.beginRender(c, void 0),
              n.setAttributeStyle(`style`, A.title),
              n.setAttributeString(`value`, k.default.financeAccountLinkingConfirmationTitle()),
              n.endRender(),
              n.beginRender(l, void 0),
              n.setAttributeStyle(`style`, A.detail),
              n.setAttributeString(`value`, t),
              n.endRender(),
              n.endRender(),
              n.endRender(),
              n.beginRender(u, void 0),
              n.setAttributeStyle(`style`, A.scroll),
              n.beginRender(d, void 0),
              n.setAttributeStyle(`style`, A.list),
              this.viewModel.institutions.map((t, n) => this.renderInstitution(t, n < e - 1)),
              n.endRender(),
              n.endRender(),
              n.beginRender(f, void 0),
              n.setAttributeStyle(`style`, A.footer),
              n.beginComponent(S.Button, p, void 0, void 0),
              n.setViewModelProperty(
                `accessibilityLabel`,
                k.default.financeAccountLinkingContinueAccessibilityLabel(),
              ),
              n.setViewModelProperty(`block`, !0),
              n.setViewModelProperty(`label`, k.default.financeAccountLinkingContinue()),
              n.setViewModelProperty(`onPress`, this.viewModel.onContinue),
              n.setViewModelProperty(`size`, x.OAIControlSize.Lg),
              n.endComponent(),
              n.endRender());
          }),
          n.endComponent());
      }
      renderInstitution(e, t) {
        let r = e.accountCount,
          i =
            r === 1
              ? k.default.financeAccountLinkingConfirmationOneAccount(r)
              : k.default.financeAccountLinkingConfirmationMultipleAccounts(r),
          a =
            r === 1
              ? k.default.financeAccountLinkingConfirmationInstitutionOneAccountAccessibilityLabel(e.name, r)
              : k.default.financeAccountLinkingConfirmationInstitutionMultipleAccountsAccessibilityLabel(
                  e.name,
                  r,
                );
        (n.beginRender(m, e.id),
          n.setAttributeStyle(`style`, A.item),
          n.beginRender(h, void 0),
          n.setAttributeStyle(`style`, A.row),
          n.setAttributeString(`accessibilityId`, `finance-connected-institution-${e.id}`),
          n.setAttributeString(`accessibilityLabel`, a),
          n.beginComponent(O.FinanceInstitutionLogo, g, void 0, void 0),
          n.setViewModelProperty(`institutionId`, e.id),
          n.setViewModelProperty(`logo`, e.logo),
          n.endComponent(),
          n.beginRender(_, void 0),
          n.setAttributeStyle(`style`, A.institutionName),
          n.setAttributeString(`value`, e.name),
          n.endRender(),
          n.beginRender(v, void 0),
          n.setAttributeStyle(`style`, A.accountCount),
          n.setAttributeString(`value`, i),
          n.endRender(),
          n.endRender(),
          t && (n.beginRender(y, void 0), n.setAttributeStyle(`style`, A.divider), n.endRender()),
          n.endRender());
      }
    };
    var A = {
      confirmation: new T.Style({
        alignItems: `center`,
        flexDirection: `column`,
        flexGrow: 1,
        flexShrink: 1,
        gap: x.OAISpacing.Two,
        minHeight: 0,
        paddingLeft: x.OAISpacing.Three,
        paddingRight: x.OAISpacing.Three,
        paddingTop: x.OAISpacing.Seven,
        width: `100%`,
      }),
      header: new T.Style({
        alignItems: `center`,
        flexDirection: `column`,
        gap: x.OAISpacing.Four,
        width: `100%`,
      }),
      successIcon: new T.Style({
        alignItems: `center`,
        backgroundColor: x.OAIColor.ThemeGreenDefault,
        borderRadius: x.OAIRadius.Pill,
        height: 48,
        justifyContent: `center`,
        width: 48,
      }),
      heading: new T.Style({
        alignItems: `center`,
        flexDirection: `column`,
        gap: x.OAISpacing.One,
        width: `100%`,
      }),
      title: new T.Style({
        color: x.OAIColor.TextPrimary,
        font: (0, E.systemSemiboldFont)(22),
        letterSpacing: -0.26,
        lineHeight: 28,
        textAlign: `center`,
        width: `100%`,
      }),
      detail: new T.Style({
        color: x.OAIColor.TextSecondary,
        font: (0, E.systemFont)(17),
        letterSpacing: -0.44,
        lineHeight: 24,
        numberOfLines: 2,
        textAlign: `center`,
        width: `100%`,
      }),
      scroll: new T.Style({ flexGrow: 1, flexShrink: 1, height: 1, minHeight: 0, width: `100%` }),
      list: new T.Style({ flexDirection: `column`, width: `100%` }),
      item: new T.Style({ flexDirection: `column`, width: `100%` }),
      row: new T.Style({
        alignItems: `center`,
        flexDirection: `row`,
        gap: x.OAISpacing.OneAndHalf,
        minHeight: 64,
        paddingLeft: x.OAISpacing.One,
        paddingRight: x.OAISpacing.One,
        width: `100%`,
      }),
      institutionName: new T.Style({
        color: x.OAIColor.TextPrimary,
        flexGrow: 1,
        flexShrink: 1,
        font: (0, E.systemSemiboldFont)(17),
        letterSpacing: -0.44,
        lineHeight: 24,
        numberOfLines: 1,
      }),
      accountCount: new T.Style({
        color: x.OAIColor.TextSecondary,
        flexShrink: 0,
        font: (0, E.systemFont)(17),
        letterSpacing: -0.44,
        lineHeight: 24,
        numberOfLines: 1,
        textAlign: `right`,
      }),
      divider: new T.Style({ backgroundColor: x.OAIColor.BorderDefault, height: 0.5, width: `100%` }),
      footer: new T.Style({
        flexDirection: `column`,
        flexShrink: 0,
        paddingTop: x.OAISpacing.One,
        width: `100%`,
      }),
    };
  }),
  pt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceFunnel`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.sendFinanceFunnelEvent = e.financeFunnelStart = void 0));
    var n = z().getValdiRuntime(),
      r = ct(),
      i = le();
    function a() {
      return {
        flow_path: `first_party`,
        platform: i.Device.isWeb()
          ? i.Device.isDesktop()
            ? r.FinanceFunnelPlatform.DesktopWeb
            : r.FinanceFunnelPlatform.MobileWeb
          : i.Device.isAndroid()
            ? r.FinanceFunnelPlatform.Android
            : r.FinanceFunnelPlatform.IOS,
      };
    }
    e.financeFunnelStart = a;
    async function o(e, t) {
      try {
        await e.recordFunnelEvent(t).result;
      } catch {
        n.isLoggingEnabled && console.warn(`Finance funnel event delivery failed`);
      }
    }
    e.sendFinanceFunnelEvent = o;
  }),
  mt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingFunnel`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingFunnel = void 0));
    var n = ct(),
      r = q(),
      i = pt();
    e.FinanceAccountLinkingFunnel = class {
      constructor(e) {
        ((this.api = e), (this.flowId = (0, r.v4)()), (this.recordedPickerSteps = new Set()));
      }
      start() {
        this.send(n.FinanceFunnelStep.FlowStarted, (0, i.financeFunnelStart)());
      }
      recordPickerState(e) {
        let t = e ? n.FinanceFunnelStep.PickerLoadFailed : n.FinanceFunnelStep.PickerReady;
        this.recordedPickerSteps.has(t) || (this.recordedPickerSteps.add(t), this.record(t));
      }
      record(e) {
        this.send(e, void 0);
      }
      send(e, t) {
        (0, i.sendFinanceFunnelEvent)(this.api, {
          flow_type: `account`,
          flow_id: this.flowId,
          event_id: (0, r.v4)(),
          step: e,
          ...(t === void 0 ? {} : { start: t }),
        });
      }
    };
  }),
  ht = r((e, t) => {
    t.exports = R();
  }),
  gt = r((e, t) => {
    ((t.path = `oai_metrics_service/src/ValdiMetricsReporting`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.recordHistogram = e.countMetric = e.installValdiMetricsService = e.ValdiMetricsReporter = void 0));
    var n = z().getValdiRuntime(),
      r = ht(),
      i = 256,
      a = class {
        constructor() {
          ((this.pendingMetrics = []),
            (this.didWarnAboutOverflow = !1),
            (this.didWarnAboutExporterFailure = !1));
        }
        install(e) {
          if (this.metricsService) return !1;
          this.metricsService = e;
          for (let e of this.pendingMetrics) this.emit(e);
          return ((this.pendingMetrics.length = 0), !0);
        }
        count(e, t, n) {
          this.enqueueOrEmit({ kind: 0, metric: { name: e, value: t, tagsJson: u(n) } });
        }
        histogram(e, t, n) {
          this.enqueueOrEmit({ kind: 1, metric: { name: e, value: t, tagsJson: u(n) } });
        }
        enqueueOrEmit(e) {
          if (this.metricsService) {
            this.emit(e);
            return;
          }
          if (this.pendingMetrics.length < i) {
            this.pendingMetrics.push(e);
            return;
          }
          this.didWarnAboutOverflow ||
            ((this.didWarnAboutOverflow = !0),
            n.isLoggingEnabled &&
              console.warn(`Valdi metrics startup queue is full; dropping samples after ${i} entries.`));
        }
        emit(e) {
          try {
            e.kind === 0 ? this.metricsService?.count(e.metric) : this.metricsService?.histogram(e.metric);
          } catch {
            this.didWarnAboutExporterFailure ||
              ((this.didWarnAboutExporterFailure = !0),
              n.isLoggingEnabled && console.warn(`Valdi metrics exporter rejected a sample.`));
          }
        }
      };
    e.ValdiMetricsReporter = a;
    var o = new a();
    function s(e) {
      o.install(e) && (0, r.installValdiMetricsService)(e);
    }
    e.installValdiMetricsService = s;
    function c(e, t, n) {
      o.count(e, t, n);
    }
    e.countMetric = c;
    function l(e, t, n) {
      o.histogram(e, t, n);
    }
    e.recordHistogram = l;
    function u(e) {
      if (!e) return;
      let t = {};
      for (let n of Object.keys(e)) {
        let r = e[n];
        r !== void 0 && (t[n] = r);
      }
      return Object.keys(t).length === 0 ? void 0 : JSON.stringify(t);
    }
  }),
  X = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingMetricsUtils`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.getFinanceAccountLinkingTabMetricName = void 0));
    var n = dt();
    function r(e) {
      switch (e) {
        case n.FinanceAccountLinkingTab.CreditScore:
          return `credit_score`;
        case n.FinanceAccountLinkingTab.ManualAccounts:
          return `manual_accounts`;
        default:
          return `accounts`;
      }
    }
    e.getFinanceAccountLinkingTabMetricName = r;
  }),
  Z = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingMetrics`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingMetrics = e.FinanceAccountLinkingCheckpoint = void 0));
    var n = gt(),
      r = le(),
      i = X(),
      a;
    ((function (e) {
      ((e.AppStarted = `app_started`),
        (e.InitialRender = `initial_render`),
        (e.PickerReady = `picker_ready`),
        (e.PickerLoadFailed = `picker_load_failed`),
        (e.InstitutionSelected = `institution_selected`),
        (e.PlaidLaunchRequested = `plaid_launch_requested`),
        (e.LinkCompleted = `link_completed`),
        (e.LinkFailed = `link_failed`),
        (e.PlaidExited = `plaid_exited`),
        (e.CreditRequested = `credit_requested`),
        (e.CreditDiscoveryUnavailable = `credit_discovery_unavailable`),
        (e.CreditNotConnected = `credit_not_connected`),
        (e.CreditPending = `credit_pending`),
        (e.CreditConnected = `credit_connected`),
        (e.CreditUnavailable = `credit_unavailable`),
        (e.CreditReadFailed = `credit_read_failed`),
        (e.CreditUpdateRequired = `credit_update_required`));
    })(a || (e.FinanceAccountLinkingCheckpoint = a = {})),
      (e.FinanceAccountLinkingMetrics = class {
        constructor(e) {
          ((this.initialTab = e),
            (this.checkpoints = new Set()),
            (this.platform = r.Device.isWeb() ? `web` : r.Device.getSystemType()));
        }
        record(e) {
          this.checkpoints.has(e) ||
            (this.checkpoints.add(e),
            (0, n.countMetric)(`finance.account_linking.checkpoint`, 1, {
              app_name: `chatgpt_finance_connections`,
              platform: this.platform,
              initial_tab: (0, i.getFinanceAccountLinkingTabMetricName)(this.initialTab),
              checkpoint: e,
            }));
        }
      }));
  }),
  _t = n({ default: () => vt }),
  vt,
  Q = t(() => {
    vt = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAANlBMVEVHcEyAz2B9zGCAzGB9zGB9zGB+zGB+zWB9zGCAzGB9zWB9zGD///+W1n/2+/Sx4KDl9d/P7MXYYWHUAAAAC3RSTlMAEcBAsNCgd/BQYD5nlmwAAAGNSURBVFjD7ZjZcoMwDEXjBUyQ1///2dJS2jGxbAn00OnkPpLJGaQr2RKPx1v/TMo4qzVs0np2Rl2kuAlOmlY+y1hoyhoeRgMqTUcpC11ZYoDPBQZanhTODATNt8OihqcmIGpSMpwBSQND9maeCRl/AlNIFaiFC1raabLAVjNNBi7I3HXsp4Mvv1BKYfBKtBfK3vvUzZIiccrG8bF6dDbOkeLyX6qCW08gSpOF2ADpC5HlnVPqp3zPys7J3VIipCjsnBhOzx23Pb4TlPpngKYGVgbFrYnOx1GXEBPkQ+O3PiiElvMJmKDP0sth6PwYlGujE+J8A3RKdv3HEDuB9V2LFSljzjdAtmn2Tkq9BJ0L0gFK6jn/2iIGMFLqJuilaRVWyocKWqvDg+3wCmsN5B5x0CUFFLQSDv9fUsK7UFGuo4OUOZe2wY/7yLuz20dSybHwrmy5IUJsrJEbtMRGP7lhVG48lhvYxVaIjUSMjrCzCa1Zgouf3CoqtxwLruvYBwR39WOEcfP9Txpv/V19ABfMelLXXfqeAAAAAElFTkSuQmCC`;
  }),
  yt = n({ default: () => bt }),
  bt,
  xt = t(() => {
    bt = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAOVBMVEVHcEyiW//Ejv+6dv+iXP+iW/+iXP/MnP7MnP7MnP7MnP/MnP3MnP6kXf/Nnf+iW//MnP6xcv7Djv5f3GU8AAAAD3RSTlMAviUQYu6Eu9p9RprwOmCX+IM9AAABc0lEQVRYw+2XyXKEMAxE8YI3PFjm/z82nqQmGYZFbePKia7i+lC3ZJCH4datf5TURgiRymO0bKYoLdK7hFZNGDOmT42mHqW3mG+UrixHpCOJmqLkMaeQ8NTVmM40quu+6txxnELC+pV46esB4TGZhMj0KaiU1CUhKCUBgtjGgZwTb9JbG4loWXJGSPsHRU5Pxp8WnvXYw1jaKlenrSbaV66bJOnoSEsNKESiJtKHtUCnWtCwZaRW0gqkHFEjaT2QE/HKwBEJAOeopFXWFgHtl7RyJgkTO0UTCMrcp9aBoIUpCHW2B6rv2VFI7yAPg/L5XF8CmYam7YJEL1DqZU1cAY3mueNuN8Ca9o9lPX41Sj70elVWKMdxP1X0iEwcCA2JXT5lJ2foJM3AOt2pIOxbGxBQ5Dkeuil0Mgb032E7PhuRBe8K8epIv8TYCijntKLoKy5488+brZ+DX59gOw9VkiH8nkg5l/3YRWutD0236Vu3WvUFzxOQxvFUUsMAAAAASUVORK5CYII=`;
  }),
  St = n({ default: () => Ct }),
  Ct,
  wt = t(() => {
    Ct = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAolBMVEVHcEz/SlrCzhPVyyL/kzy22Au22Av/QGDQxiD/PmD5PV3/PV//QGD5mzi22Az/kzy32A211wv/kzz/PmAODg7/RV7VviX/PWAQEBD/PWA1FRr/PV+32AwPDw7/lDuVsA3/kzu22Av/PV8NDQ3///8eFhOMpQw5KCaEhIRiYmJ6SSI5Qg3mOFd2jAyWsgykK0CWlpbS0tJneQylYSrh4eHRejMzSXTuAAAAIHRSTlMAw8MQudacEDCg0PAsQfB0W33tg41OIGYUsF3gsPGf8oLjguwAAAIzSURBVFjD7dfbctowEAZgcGyBgsGEmkMhaa2FBOI0PSTN+79aI2NsydJKq9KLTob/ipkMH6td2ZF6vUs+Zq6uzhXGWRwXdeI4G/9dGVljtImz0OLGFuWYL+N/wlRlUamFk6moBcXJCn9mmb/HcUFK7On6cFYQMxs6u0x23NK8CMkMnV4K/RAomiA1pSMIkSIh7NJgAxAgvTtCJLbZfQYIkCpHiFvTWQIESLUjxNRY2AgCpMYRk+7iOABdah0hWGcHAdAl1RFiYes0SdIdvaQUgCx1HL0kDmTJcLSSRkCVTEdMsFa7JIuj7iUOLum1LMtXh6OsbQO4VG6PKVFHJOjMWuntftvkDXHauS0xCK4VZ3v/HYNOTfqEQpWzPxwOe/nhCYNuaqiPOT/k13/uZB7lx2cEuvVBso7DbtdK6kJfWijCt+Mx8gu/a+jXtptnY2yY803+8O4UA1Jadh70QobcS1Nn6INksx+VZj89tNE2la/Z1PEnvvF3NuQe25CR/T2rtpv2iDDvIzJa3zXO3Vfhe0TmqJP2Vnnt5KvhxPfQDrBnP5V/Xa3zPF+v5CkMk5p/ktd2Z2Cc5xL3i83eJNN5P2Em7ldtSnQQSTklbYiOVUpsZxqfY5Nu7IeaKnzgOIl3JP1go7ebu8/0DC2oUxL3XQ8YWpBWEvffVxhWkLopOeXmw2wj0/cSp93FmLmH9MUtqZdDZl/Y6bW0pF8zp/Zjtpwc789D7r3TiJ19j7/kkv89fwC7eUpOwckvXgAAAABJRU5ErkJggg==`;
  }),
  Tt = n({ default: () => Et }),
  Et,
  Dt = t(() => {
    Et = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAMFBMVEVHcEyx1A232Au22Ay62hC22Ay42Ay32A222Au22Au22At+qR+kyRKYvxaCrR2MtRoU42QUAAAACnRSTlMA+Z2AGLw8V3DgE++nOgAAAhdJREFUSMfdlj1LA0EQhg8To7YiFifRCGKRKhAkYhUFsRVEi1RRsLESzsrKn2BtdxEV11OxdU3SR1DSJqK9J9irQe9jP+Z29i5i6ZR7D7uz774zc4bxLyJtra+V+jBDFeLFaDmJyRyRIGpJVJ6wGI9nBoiIPas4X03eKAx7VsMMEzU2MLSIIHKAoAqG0DXTRBO5+LvJOFagEf4h2wZUVIclpjZxKG1JaBUyy2L5itJXCZ1CjUyxPEHpjYRO9GJ3Kb0Dsmtv9ky96Okylxs90CDesOgZsXRJWXT4SgFJRO45dIegfQG58VAFntbofVOgQgE97XWYzaUrc9rlNQLVrgc7PoklbpaUWLmICBnZaRAe11SgMwT5iX8p5VBWIYdiKode7tOn6i0InaqJk8lAyUYHFoP6dMR2EcWSSkvHkanwVZrY5rC+H0PqQ66wh9mBiWaDE+tJ1/N16PqUqRYMTIpbuIOqal9R2YVJrao+cNrcoK8kzlE2M5IH3ZI4R3kuaHh7OZHjVEdd+Pd6f3Fh4qKGU8C+LEzVUAJyBCPFPFQhXsAwpSpuvM/qRrLXZZQHbrZ0XRPIfR953Zq+PUeamA07OTBLpB3OwJY5SGDF8IzOZ6KTDrqujSRisfDneYAmS14zfn4x7cgYHnfbv5h2hrFl9jst0MEqllbi7wZiM27U6a55Xk38XZkOnL3b54/Fmlsvlf/HD9oPxw2uu+PN8AoAAAAASUVORK5CYII=`;
  }),
  Ot = n({ default: () => $ }),
  $,
  kt = t(() => {
    $ = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAAAQlBMVEVHcEwEBATv7+/u7u7x8fHv7+/z8/Px8fH///8RERHv7+8LCwsDAwP6+vr29vbZ2dnLy8sgICCKioo9PT2tra1oaGgm/8uSAAAACHRSTlMAA8PvaYkoPRYIDhUAAAcySURBVHja7Z2LkqsgDECLtrtKQNTq///qtm5teRne2s6UmZ25u1Y9DSSEQHJPJ8/2c75UVU0ztrqqLuefU872c86LqOJmgz1XtHCrzumU5LLKsus6znnTNJl+bg+7PXKV64Wkca6Y3f3pRRp/sNYpUv397/SuKdz+WavfaHEu9/Nmh8aXV13iVL3aRZqKVKsIA/Bb74m5otbB3X+me3M+hHqO4OTNzo0Hkx7DGU76e/98c0i7v9l7nP7Uh3EupLWv7lfH9Pur9yt/O38Y5z/pxXeAds2BrfMcptXBnAtp5dfxzcHNw0YRUh8u0EWkNfkAgS4idelTfajGS5pfu+fOpnkLkZ5dKs/fAZQ7FP/nTQS6iPTnA3re2ffxxr4fW/Mr0nbsyxj9SJ2fB4C2BePv9z/CMOfX+4ghKiZg7aOBejOF9QKDSWQdpOfAnp+v7AmzkMrdwdVL7DqH9v0Zm5Z8QaloQSH5x3nd3lmuQitoAOglWZfGmZkYKmm39QE2j+na5GHuuRjur2u3Grz0aOsTt59B8CST71T6kW0DyBpF3R9jY4LaO9cgrHU3QOX5asy9IsFA8XFjBwC4zgIkmUr/7ucrAD6ct+1TNKiwCeZhI3umjMLHxV63tVLry4EOulCG+TVUhMUevcw8v81e2tWhHCgo/T1qs02vk4AmMzEqowDKgbb4azSZgsCf0BYDHdXBaRoIRaZgjkGuDtWxFOjVbts3tE3gQ+fWrqVAddVlHWa+DPPTsSBLGg9qTjcMNbM6KbNOYgVAxcsJsvY+N7Se2/v9+QBRBvQpEUk2DBO4IjL5Hq++jweFp7Jym0wB8aUUefKn+YAyoOubalU+XJcnm0CXKVf7QPhY0mjQWRaDpMGgSYyJRiBXO/n3uQToVZ2ilb7sQLXzkuW/6b45UgYPSxoNyjQpyL2v+0uKL8VN3Zs9tCkWdJ3IXzbHqj1i25eSlGf9ZiDyg06mEEwnU5rfe8B8+vXWKT/oKoMBs/Bi25dS7f/gNlCxoFYZAOZ/ajIFR//kAl1fV2/6bUwfcIJteoU1OC1pJOjV3lccXQP10lVun+auGCiJALVbPsVfYvjSpcOscj5Q+1wCqCeN+dmzU5viQJ+d2GEOKkP9T8X97LYXLEmgo+1tgHhLjquv7zjmBZXmSLrtf0qrk45txaWWe5l70RwHSk3PTZ7fzdmcWa8C33haPmXSZSr7S0LzpRrNXxKg6r6PPONBqeJx6n6dtjrRJKx6fTInzQ+qSEmAMb/LMjT8T7FxL28KgNqDji/zwrAYaA/Bgcd4UBupNL9b9FyKUAjWhi3rU0BN26iaa0CsqiXW595oigfVbCfrsRiYFkXrWYg8E0E1P0OgV9GopEueyaCyrZ7Q+GeDen2iNGiCROmOEk0Zo3TPMZqg9XRHrU+xo5SFbjQdMzPRHWemlLme7jjXK/uG2m8u70n2lzrFlyrgPWky1Pw81B+lmj8qoJw/akgwwMMXhoffl/Pwmann3msmC5Vg7j2c1FVon2UV2pdahfa2uE3Kuv75wKlQpGREdpYAncfA2kW5IyUbsSeKx57YAbGnjWheh0bzZA90r2heYzUneHyUbsdHqVd8lOwTcabJEecUUP8YvuEv2WL4BUBDd0Vohl2RKNA+bJ+J+u0z9QXcPKZZUnTnTvGXzPly9Nu5I8X3QtW4YvReKCm9u0x1fylydzlyKSIvybH9euhz7ddHgu5/AiISlD0HaeqZEg8rmgLat6j/6X9Kx++8Yzxonf3cU10oABF4kowmnySLBZ2dMRkqXaauiBDMpUCdpx0p4FGw0NOO0UEyx+lPzV9iNPgJJUBhGCnKaZLS8Qr7gJpnnEfuaUf5NICWZzCUAxW2g//D1G3EFVeZdtNgSzQQ5UC3z+FP3Ua8rpsSzuHHR5x3zGxIA50z5oo40ps4BuqRydb1g1OejVOmQ+9MR+JYWrBPVuj9A3pmmO2Mw2Y+k2em2D1NiGRIYqwnm47gGWI3rZtqz+cviVckQyrb8qzAnLugBEk0le0cnhbaTy/WzSxGYFNwfiiWHEhiM4KvS2YNWKdcGK4xj3TkBMcnrU+jxQfpYJziHocr/TvUf/DSpXdLsiafkraOgJJ3KgRAtkHJW5VWIK7qH+9SrIJ8SPkPQj6koIoD9G1K1BDiqlHzHkV/iBv0PcooeYCSdyhMRZygd9LjS315cN5Bjy+e5gN6Iz28HJ0X512k5NgCf8QP9GZLyaElE305F5GS44pQEm/Q+yglh5X1DOD8Fyk5plAqCQF9kJL9S8+SMM4n6aOYL98Hs/oN5lxBbzq1Y3nk50tDSjq/bjILTuci1ApOR3HKpPuU8I7llElvBqBwUXT5XeGlvInaSpWZ114TU3KcHNHiKrd/COcBpPHV8D+Ec1/U1P9i4EM490I9ZWkfglkc9ZS3fQZlIdZTwfYRkFmAT9/2bd/2bd/2bd+2Y/sDAmOczMn29/AAAAAASUVORK5CYII=`;
  }),
  At = n({ default: () => jt }),
  jt,
  Mt = t(() => {
    jt = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAALVBMVEVHcEwkT8kjUMojT8kjUMkkUMkmUM01ZvAjT8mktvkyX90pVtVVeOKLo/VykO6vXU1ZAAAAB3RSTlMAyFTmm30mL4LUOQAAAbdJREFUSMftlr9OAkEQxgGFWBILcyWGmFgSYmGtiaG8WFGq4R3WQOPJEUdF+30DjH9qCl+AAnsegbdg5/b2+PZuD+iMhmnubu+Xm5m97PdNofAHonJ0ebWOKXlEQW01Uz4lFX1/FdOhOC7ymUNKYj+PqRNE093WuX77MdbXE0eTpZZ+9yPFu74La67WOaZSCtHT9+mtKEWt0/NcMiS6murblP7OEzMMia4uLECmGC0NZ9JAhqoC1OaFb81oSIiIGkD3/PwlpQWJEa8u96Gsnj5lGoq2wseShjILccZlUXtELy7olugOoccttIX+H9TA0+I8CCM8LRtB6nC+5kA+Qg85h7NmaYELsrSgoCRsloWUlPVBepReTrKQUsUQoGNsD7fpHqAdlBWsu4GWQlAUlERoMhVV+VsaUtnIUt825INsAwtSRdHchjhbwxZ7Wv4Z0NWUJbCzTBBi6whT3sJyP0RonJL6qD8vkekkWZCxsmsyCU0yOsh6omccyLhU4HDOovEp42RVl7+2Yip2qNA9N2hjnPZchpjELrp5dQPPb+ZPD/UNmGTGaK6eaDpc/dm62ejGC/xfHuEWsiXgJnRoJcIAAAAASUVORK5CYII=`;
  }),
  Nt = n({ default: () => Pt }),
  Pt,
  Ft = t(() => {
    Pt = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAKlBMVEVHcExAYNs9Xdg8XNg8XNg8XNg9XNhgjf99ov88XNhFZ+FagfJPdetxl/vlvhQYAAAAB3RSTlMAGFbYjb/w2V8JCwAAAbVJREFUSMftlrtOw0AQRe3wkOgQj94oUNAFd3SQAsldoEtHQcMXbCD+gC0RcQxDoIYoogcUekCi9+ewD9s7u17bUKFImcaJfeS5s8ncGceZgXC326t1TGMfYOBVMxuMYdRhJQNpVFA7kMdJmeQmoPCt8t0j+XTyJa9nFqoRyGfflLzJT5FnK53HO6Uko8yjSJm7HuUQCW2U25VMQiVEwrG4McS6FsStkWAERPqSaiFIiJ5QqiBCPoV4lI1/f6Q6RMRRqHyLonQTEkUq6UtMDy1ChOnq5NAKwK0NegW4qoUu5tAcmmmohbvloaQROn+DWHPe2CDW6QfKeADuS5rT07zABmle4JwDJEWIWVmsW89HEbrUrMfZxQeFi7tG0DK2Faz7FEHcoBIT6gM+AVYeU/5kQkxSrBl+gPKhbJHm4+vs1T0d4l6+p5s9qF8Gua8xErhJv2AoBDObtPsRhsaG1Yv6+HB5VhC350FhmHHpMmGWzJCdv0pMoGz+DCxTcTObU9mMOrbN1yClUiYq3Rv47JyKS+zVbAWlyXigme+Xbw/NXzA55ddsNOyfBe263WitO9z65xXuB9DD47ho2t0BAAAAAElFTkSuQmCC`;
  }),
  It = r((t, n) => {
    var r = (globalThis.__valdiImageRegistry = globalThis.__valdiImageRegistry || {});
    ((r[`chatgpt_finance_connections/res`] = {
      checkmarkCircle: (Q(), e(_t)),
      conversation: (xt(), e(yt)),
      gauge: (wt(), e(St)),
      money: (Dt(), e(Tt)),
      plaid: (kt(), e(Ot)),
      plaidSecurity: (Mt(), e(At)),
      shield: (Ft(), e(Nt)),
    }),
      (n.path = `chatgpt_finance_connections/res`),
      Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = (0, Se().loadCatalog)(`chatgpt_finance_connections/res`)));
  }),
  Lt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceCreditVerificationModels`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.CreditCopyAction = e.FinanceCreditVerificationState = void 0));
    var n;
    (function (e) {
      ((e[(e.Blocked = 0)] = `Blocked`),
        (e[(e.Available = 1)] = `Available`),
        (e[(e.Connected = 2)] = `Connected`),
        (e[(e.Preparing = 3)] = `Preparing`),
        (e[(e.UpdateRequired = 4)] = `UpdateRequired`),
        (e[(e.ReportFailed = 5)] = `ReportFailed`));
    })(n || (e.FinanceCreditVerificationState = n = {}));
    var r;
    (function (e) {
      ((e[(e.RetryVerification = 0)] = `RetryVerification`),
        (e[(e.ContinueVerification = 1)] = `ContinueVerification`),
        (e[(e.ContactExperian = 2)] = `ContactExperian`));
    })(r || (e.CreditCopyAction = r = {}));
  }),
  Rt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinancePlaidIntroduction`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinancePlaidIntroduction = void 0));
    var n = B().jsx,
      r = n.makeNodePrototype(
        `scroll`,
        [`accessibilityId`, `finance-plaid-introduction-scroll`],
        `salo3oKP0UwJTRU0`,
      ),
      i = n.makeComponentPrototype([`accessibilityId`, `finance-plaid-introduction`], `ea3y8BNdyYTCGgcr`),
      a = n.makeNodePrototype(`layout`, void 0, `vY9Pcnkqm65gurV5`),
      o = n.makeNodePrototype(`image`, void 0, `8i1o8O0EmjLQ1ysj`),
      s = n.makeNodePrototype(`label`, void 0, `lZGqhFQflaZKB-Q2`),
      c = n.makeNodePrototype(`view`, void 0, `S9Rsu51F7ObedSca`),
      l = n.makeComponentPrototype(void 0, `yFzbhb--hp9KPt3O`),
      u = n.makeComponentPrototype(void 0, `9dQJR1_1Ww-91Wwx`),
      d = n.makeComponentPrototype([`accessibilityId`, `finance-continue-to-plaid`], `G-E5oEU798fh9S9O`),
      f = n.makeNodePrototype(`view`, void 0, `9YTx0tKgxS6b5Ilr`),
      p = n.makeNodePrototype(`image`, void 0, `Hs3X-frgsgzdjulm`),
      m = n.makeNodePrototype(`view`, void 0, `FvzBxp8_5yi2w67N`),
      h = n.makeNodePrototype(`label`, void 0, `etqMZCWothvqNyF2`),
      g = n.makeNodePrototype(`label`, void 0, `VXi33FeW0RWXWGXn`),
      _ = It(),
      v = de(),
      y = H(),
      b = me(),
      x = Ne(),
      S = U(),
      C = V(),
      w = ye(),
      T = je();
    e.FinancePlaidIntroduction = class extends S.Component {
      onRender() {
        (n.beginRender(r, void 0),
          n.setAttributeStyle(`style`, D.scroll),
          n.beginComponent(w.SafeArea, i, void 0, void 0),
          n.setViewModelProperty(`edges`, [w.SafeAreaEdge.Bottom]),
          n.setViewModelProperty(`style`, D.content),
          n.setUnnamedSlot(() => {
            (n.beginRender(a, void 0),
              n.setAttributeStyle(`style`, D.logo),
              n.beginRender(o, void 0),
              n.setAttributeStyle(`style`, D.mark),
              n.setAttribute(`src`, _.default.plaid),
              n.endRender(),
              n.endRender(),
              n.beginRender(s, void 0),
              n.setAttributeStyle(`style`, D.title),
              n.setAttributeString(`value`, T.default.financeAccountLinkingPlaidTitle()),
              n.endRender(),
              n.beginRender(c, void 0),
              n.setAttributeStyle(`style`, D.benefits),
              this.renderBenefit(
                _.default.money,
                T.default.financeAccountLinkingPlaidPictureTitle(),
                T.default.financeAccountLinkingPlaidPictureDetail(),
              ),
              n.beginComponent(x.Divider, l, void 0, void 0),
              n.setViewModelProperty(`color`, y.OAIColor.BorderLight),
              n.endComponent(),
              this.renderBenefit(
                _.default.conversation,
                T.default.financeAccountLinkingPlaidAnswersTitle(),
                T.default.financeAccountLinkingPlaidAnswersDetail(),
              ),
              n.beginComponent(x.Divider, u, void 0, void 0),
              n.setViewModelProperty(`color`, y.OAIColor.BorderLight),
              n.endComponent(),
              this.renderBenefit(
                _.default.plaidSecurity,
                T.default.financeAccountLinkingPlaidSecurityTitle(),
                T.default.financeAccountLinkingPlaidSecurityDetail(),
              ),
              n.endRender(),
              n.beginComponent(b.Button, d, void 0, void 0),
              n.setViewModelProperty(`style`, D.continueButton),
              n.setViewModelProperty(
                `accessibilityLabel`,
                this.viewModel.isLaunching
                  ? T.default.financeAccountLinkingPlaidOpening()
                  : T.default.financeAccountLinkingPlaidContinue(),
              ),
              n.setViewModelProperty(`label`, T.default.financeAccountLinkingPlaidContinue()),
              n.setViewModelProperty(`disabled`, this.viewModel.isLaunching),
              n.setViewModelProperty(`loading`, this.viewModel.isLaunching),
              n.setViewModelProperty(`onPress`, this.viewModel.onContinue),
              n.endComponent());
          }),
          n.endComponent(),
          n.endRender());
      }
      renderBenefit(e, t, r) {
        (n.beginRender(f, void 0),
          n.setAttributeStyle(`style`, D.benefitRow),
          n.beginRender(p, void 0),
          n.setAttributeStyle(`style`, D.benefitIcon),
          n.setAttribute(`src`, e),
          n.endRender(),
          n.beginRender(m, void 0),
          n.setAttributeStyle(`style`, D.benefitCopy),
          n.beginRender(h, void 0),
          n.setAttributeStyle(`style`, D.benefitTitle),
          n.setAttributeString(`value`, t),
          n.endRender(),
          n.beginRender(g, void 0),
          n.setAttributeStyle(`style`, D.benefitDetail),
          n.setAttributeString(`value`, r),
          n.endRender(),
          n.endRender(),
          n.endRender());
      }
    };
    var E = { font: void 0, lineHeight: void 0, lineHeightMultiple: void 0 },
      D = {
        scroll: new C.Style({ flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: `100%` }),
        content: new C.Style({
          alignItems: `center`,
          flexDirection: `column`,
          paddingTop: y.OAISpacing.Six,
          paddingBottom: y.OAISpacing.Four,
          paddingLeft: y.OAISpacing.FivePointFive,
          paddingRight: y.OAISpacing.FivePointFive,
          width: `100%`,
        }),
        logo: new C.Style({
          alignItems: `center`,
          justifyContent: `center`,
          height: y.OAISpacing.Six,
          width: y.OAISpacing.Six,
        }),
        mark: new C.Style({
          accessibilityNavigation: `ignored`,
          flexShrink: 0,
          height: 56,
          width: 56,
          translationY: y.OAISpacing.Half,
          objectFit: `contain`,
        }),
        title: new C.Style({
          ...(0, v.resolveOAITypography)(v.Typography.InlineTitle, E),
          color: y.OAIColor.TextPrimary,
          numberOfLines: 0,
          textAlign: `center`,
          marginTop: y.OAISpacing.TwoPointFive,
          marginBottom: y.OAISpacing.Three,
          maxWidth: 320,
          width: `100%`,
        }),
        benefits: new C.Style({
          borderColor: y.OAIColor.BorderDefault,
          borderWidth: 1,
          borderRadius: 20,
          flexDirection: `column`,
          gap: y.OAISpacing.Two,
          padding: y.OAISpacing.Two,
          width: `100%`,
          maxWidth: 360,
        }),
        benefitRow: new C.Style({
          alignItems: `center`,
          flexDirection: `row`,
          gap: y.OAISpacing.Two,
          width: `100%`,
        }),
        benefitIcon: new C.Style({
          accessibilityNavigation: `ignored`,
          flexShrink: 0,
          height: y.OAISpacing.Three,
          width: y.OAISpacing.Three,
          objectFit: `contain`,
        }),
        benefitCopy: new C.Style({
          flexDirection: `column`,
          flexGrow: 1,
          flexShrink: 1,
          gap: y.OAISpacing.Half,
          minWidth: 0,
        }),
        benefitTitle: new C.Style({
          ...(0, v.resolveOAITypography)(v.DesignTypography.CompactSubheadlineMedium, E),
          color: y.OAIColor.TextPrimary,
          numberOfLines: 0,
          width: `100%`,
        }),
        benefitDetail: new C.Style({
          ...(0, v.resolveOAITypography)(v.DesignTypography.Footnote, E),
          color: y.OAIColor.TextSecondary,
          numberOfLines: 0,
          width: `100%`,
        }),
        continueButton: new C.Style({
          marginTop: y.OAISpacing.Four,
          minHeight: y.OAISpacing.Five,
          maxWidth: `100%`,
        }),
      };
  }),
  zt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceManualAccounts`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceManualAccounts = void 0));
    var n = B().jsx,
      r = n.makeNodePrototype(`view`, [`accessibilityId`, `finance-manual-accounts`], `BNPHuV0RipHCVfVt`),
      i = n.makeNodePrototype(
        `scroll`,
        [`accessibilityId`, `finance-manual-account-categories`],
        `lvT42hO7WPIiGYm9`,
      ),
      a = n.makeComponentPrototype(void 0, `1nY2W1pOlsTaqaG5`),
      o = n.makeNodePrototype(`view`, [`accessibilityCategory`, `button`], `PViEFexl5hu3-6ZI`),
      s = n.makeNodePrototype(`view`, void 0, `jjJOwwgsLtRMQVu9`),
      c = n.makeNodePrototype(`image`, void 0, `3fK2aFgIGFxu0Xer`),
      l = n.makeNodePrototype(`label`, void 0, `ie3d7FaKhwNi6p6-`),
      u = n.makeNodePrototype(`layout`, void 0, `hJr_qH0TPcApbr_W`),
      d = n.makeNodePrototype(`image`, void 0, `gMA6x80FkHiMWMs7`),
      f = _e(),
      p = H(),
      m = U(),
      h = V(),
      g = ye(),
      _ = J(),
      v = je(),
      y = [
        {
          accessibilityId: `cash`,
          icon: f.default.banknote,
          label: () => v.default.financeManualAccountsCategoryCash(),
          prompt: () => v.default.financeManualAccountsPromptCash(),
        },
        {
          accessibilityId: `investments`,
          icon: f.default.chartColumn,
          label: () => v.default.financeManualAccountsCategoryInvestments(),
          prompt: () => v.default.financeManualAccountsPromptInvestments(),
        },
        {
          accessibilityId: `real-estate`,
          icon: f.default.house,
          label: () => v.default.financeManualAccountsCategoryRealEstate(),
          prompt: () => v.default.financeManualAccountsPromptRealEstate(),
        },
        {
          accessibilityId: `vehicle`,
          icon: f.default.car,
          label: () => v.default.financeManualAccountsCategoryVehicle(),
          prompt: () => v.default.financeManualAccountsPromptVehicle(),
        },
        {
          accessibilityId: `other-assets`,
          icon: f.default.hash,
          label: () => v.default.financeManualAccountsCategoryOtherAssets(),
          prompt: () => v.default.financeManualAccountsPromptOtherAssets(),
        },
        {
          accessibilityId: `loans`,
          icon: f.default.notebookText,
          label: () => v.default.financeManualAccountsCategoryLoans(),
          prompt: () => v.default.financeManualAccountsPromptLoans(),
        },
        {
          accessibilityId: `other-debt`,
          icon: f.default.minus,
          label: () => v.default.financeManualAccountsCategoryOtherDebt(),
          prompt: () => v.default.financeManualAccountsPromptOtherDebt(),
        },
        {
          accessibilityId: `tax-records`,
          icon: f.default.calculator,
          label: () => v.default.financeManualAccountsCategoryTaxRecords(),
          prompt: void 0,
        },
        {
          accessibilityId: `insurance`,
          icon: f.default.shield,
          label: () => v.default.financeManualAccountsCategoryInsurance(),
          prompt: () => v.default.financeManualAccountsPromptInsurance(),
        },
      ];
    e.FinanceManualAccounts = class extends m.Component {
      onRender() {
        (n.beginRender(r, void 0),
          n.setAttributeStyle(`style`, b.container),
          n.beginRender(i, void 0),
          n.setAttributeStyle(`style`, _.financesListStyles.scroll),
          n.beginComponent(g.SafeArea, a, void 0, void 0),
          n.setViewModelProperty(`style`, _.financesListStyles.list),
          n.setViewModelProperty(`edges`, [g.SafeAreaEdge.Bottom]),
          n.setUnnamedSlot(() => {
            y.map((e) => this.renderCategory(e));
          }),
          n.endComponent(),
          n.endRender(),
          n.endRender());
      }
      renderCategory(e) {
        let t = e.prompt,
          r = t !== void 0,
          i = e.label();
        (n.beginRender(o, e.accessibilityId),
          n.setAttributeStyle(`style`, _.financesListStyles.row),
          n.setAttributeString(`accessibilityId`, `finance-manual-account-category-${e.accessibilityId}`),
          n.setAttributeString(`accessibilityLabel`, i),
          n.setAttribute(`accessibilityStateDisabled`, !r),
          n.setAttributeFunction(
            `onTap`,
            t === void 0 ? void 0 : () => this.viewModel.onManualAccountSelected(e.accessibilityId, t()),
          ),
          n.setAttributeNumber(`opacity`, r ? void 0 : 0.5),
          n.beginRender(s, void 0),
          n.setAttributeStyle(`style`, b.iconContainer),
          n.beginRender(c, void 0),
          n.setAttributeStyle(`style`, _.financesListStyles.icon),
          n.setAttribute(`src`, e.icon),
          n.endRender(),
          n.endRender(),
          n.beginRender(l, void 0),
          n.setAttributeStyle(`style`, _.financesListStyles.title),
          n.setAttributeString(`value`, i),
          n.endRender(),
          n.beginRender(u, void 0),
          n.setAttributeStyle(`style`, _.financesListStyles.accessory),
          r &&
            (n.beginRender(d, void 0),
            n.setAttributeStyle(`style`, _.financesListStyles.chevron),
            n.setAttribute(`src`, f.default.chevronRightMd),
            n.endRender()),
          n.endRender(),
          n.endRender());
      }
    };
    var b = {
      iconContainer: _.financesListStyles.iconContainer.extend({
        accessibilityNavigation: `ignored`,
        backgroundColor: p.OAIColor.BgTertiary,
        borderWidth: 0,
      }),
      container: new h.Style({
        flexDirection: `column`,
        flexGrow: 1,
        flexShrink: 1,
        minHeight: 0,
        width: `100%`,
      }),
    };
  }),
  Bt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingPicker`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingPicker = void 0));
    var n = z().getValdiRuntime(),
      r = B().jsx,
      i = r.makeNodePrototype(
        `view`,
        [`accessibilityId`, `finance-account-linking-picker`],
        `ql4PNvvLbiNEt6SM`,
      ),
      a = r.makeNodePrototype(`view`, void 0, `g396Z80ayf9GzV-K`),
      o = r.makeNodePrototype(`layout`, void 0, `G2tgkfsF4_VFxhWw`),
      s = r.makeNodePrototype(`view`, void 0, `YI864cremzCx12b-`),
      c = r.makeNodePrototype(`layout`, void 0, `bTpRHHiFqfEb3VSq`),
      l = r.makeNodePrototype(`label`, void 0, `rhu3EnA5gg3HQfby`),
      u = r.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-dismiss`],
        `RqEeO_OpThn2SUBe`,
      ),
      d = r.makeComponentPrototype([`size`, 20], `aOignIsfvOIkHUYl`),
      f = r.makeNodePrototype(
        `scroll`,
        [`horizontal`, !0, `accessibilityId`, `finance-account-linking-tabs`],
        `oipTaMd6Ernng97G`,
      ),
      p = r.makeNodePrototype(`view`, void 0, `8DOJXRa9m2V3uMlK`),
      m = r.makeNodePrototype(`view`, [`accessibilityCategory`, `radio`], `1n9HByg0j0tnRE9S`),
      h = r.makeNodePrototype(`label`, void 0, `zmujyIA1pC5uXpIZ`),
      g = r.makeComponentPrototype(void 0, `F2JMwF4Ulp5dqe01`),
      _ = r.makeComponentPrototype(void 0, `ilw3Iz-aIkl4gXk5`),
      v = r.makeComponentPrototype(void 0, `br3JaufgxyMkqlEX`),
      y = r.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-future-tab`],
        `Xjb0B3tYwC1tZgLi`,
      ),
      b = r.makeNodePrototype(`label`, void 0, `7KjG0QT-k2WWwyjS`),
      x = r.makeComponentPrototype([`accessibilityId`, `finance-credit-update-required`], `IJeNr8ct3XGGZfoG`),
      S = r.makeNodePrototype(`label`, void 0, `lIUsZ9GgT7Dl2Zb3`),
      C = r.makeNodePrototype(`label`, void 0, `s0Pv9kkSzFUCtKwG`),
      w = r.makeNodePrototype(`layout`, void 0, `8epqhWOSzzaiiHvV`),
      T = r.makeComponentPrototype([`accessibilityId`, `finance-credit-update-app`], `sFWCojT39LVWQSax`),
      E = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `X8dYQkGQkO8-WLDT`),
      D = r.makeComponentPrototype([`accessibilityId`, `finance-credit-status-loading`], `AdkBA3sEdDwFdM1V`),
      O = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `FbatesxpvXLk6xYe`),
      k = r.makeNodePrototype(`label`, void 0, `aSQcySNbWyPIEQsT`),
      A = r.makeNodePrototype(
        `label`,
        [`accessibilityId`, `finance-credit-status-error`],
        `F_y6SEBwS7dbF4Lr`,
      ),
      ee = r.makeNodePrototype(`view`, void 0, `paMOMf5G8XTjp1rn`),
      te = r.makeComponentPrototype([`accessibilityId`, `finance-credit-status-retry`], `w0nAdoE0kY7OqaH_`),
      j = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `osMnqRcAeyFpCQj4`),
      ne = r.makeNodePrototype(`label`, void 0, `vyXIJvj2a7Hre31D`),
      M = r.makeNodePrototype(`label`, void 0, `6na9zYhoAoh9BZFq`),
      N = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `F9C2UDvzfP6A9cQu`),
      re = r.makeComponentPrototype(
        [`accessibilityId`, `finance-credit-report-progress`],
        `Rj7tZweiL4HMXYJ7`,
      ),
      P = r.makeNodePrototype(`label`, void 0, `Zh1jvvSQzYmkSq5T`),
      ie = r.makeNodePrototype(`label`, void 0, `BrN3sH82-rJKghKf`),
      ae = r.makeNodePrototype(`view`, void 0, `CCHcvDe1TICtTms4`),
      oe = r.makeComponentPrototype(
        [`accessibilityId`, `finance-credit-report-check-again`],
        `fbXNhQQulez_QYef`,
      ),
      F = r.makeNodePrototype(
        `scroll`,
        [`accessibilityId`, `finance-credit-verification`],
        `9e-fEARc8YVLjL8C`,
      ),
      se = r.makeComponentPrototype(void 0, `mNDpTeY0C_T-V6sW`),
      I = r.makeNodePrototype(`view`, void 0, `00ey2xM2yRrvc396`),
      L = r.makeNodePrototype(`view`, void 0, `WKIHQ71nGvW0Ay51`),
      ce = r.makeNodePrototype(`image`, void 0, `psK8H3X8Dy7uRwH2`),
      R = r.makeNodePrototype(`view`, void 0, `gn86nAj837LmYfsZ`),
      ue = r.makeNodePrototype(`label`, void 0, `NFgw-I34TwnT_tD4`),
      ge = r.makeNodePrototype(`view`, void 0, `c12RYUMM2USZyaRe`),
      xe = r.makeComponentPrototype(void 0, `bFceKLpQiPkvOCwT`),
      Se = r.makeComponentPrototype(void 0, `MBJif5N3n68foHBq`),
      Ce = r.makeComponentPrototype(
        [`accessibilityId`, `finance-credit-verification-start`],
        `x1da5wkhcvX76SDC`,
      ),
      De = r.makeNodePrototype(`view`, void 0, `u95loDpSSmPOk4SW`),
      ke = r.makeNodePrototype(`label`, void 0, `athqQ7FiXAjNhvd8`),
      Ae = r.makeComponentPrototype([`accessibilityCategory`, `link`], `lxyEBKPkhuexlZL2`),
      Me = r.makeNodePrototype(`label`, void 0, `TlD3FUNg9JveGl3E`),
      Fe = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `rx3GIpcXH3PRz4wZ`),
      Le = r.makeNodePrototype(`label`, void 0, `w8iJYRGSiF3TThGP`),
      Re = r.makeNodePrototype(`label`, void 0, `gcAnV5ZhnvV1i7Qx`),
      ze = r.makeNodePrototype(`view`, void 0, `00I58CAAeBmsrUQH`),
      Be = r.makeComponentPrototype(void 0, `8AthFKYoZTXqrUsH`),
      Ve = r.makeNodePrototype(`view`, void 0, `TKzU8bbIrcdyjs1A`),
      He = r.makeNodePrototype(`image`, void 0, `KHK9vFc-NrsOoJaY`),
      Ue = r.makeNodePrototype(`view`, void 0, `XaGqqhB3hKLw7BXY`),
      We = r.makeNodePrototype(`label`, void 0, `aTuEjEdbC7SddTxm`),
      Ge = r.makeNodePrototype(`label`, void 0, `2vMPzWjMS4tbOIz1`),
      Ke = r.makeComponentPrototype([`accessibilityId`, `finance-credit-verification`], `diQjmx0Tuhde26tN`),
      qe = r.makeNodePrototype(`view`, void 0, `hBH2Ez3jOaGHmBym`),
      Je = r.makeNodePrototype(`view`, void 0, `4o-6l7GcKGCtwUAU`),
      Ye = r.makeComponentPrototype(void 0, `OzPCAYhTxQdkNOGk`),
      Xe = r.makeNodePrototype(`view`, void 0, `6HdTAecOA_5bsuC1`),
      Ze = r.makeNodePrototype(`label`, void 0, `LFnaFYUU0A-b0AU5`),
      Qe = r.makeNodePrototype(
        `label`,
        [`accessibilityId`, `finance-credit-verification-score`],
        `i5PqjI0taTWxEs2g`,
      ),
      $e = r.makeNodePrototype(
        `view`,
        [`accessibilityId`, `finance-credit-verification-connected`],
        `QgY8azTu5V5TtJ1z`,
      ),
      et = r.makeNodePrototype(`image`, void 0, `YeldlmYBwz0UXX0b`),
      tt = r.makeNodePrototype(`view`, void 0, `vWW2UDP6g4XK-NxQ`),
      nt = r.makeComponentPrototype([`accessibilityId`, `finance-credit-score-chat`], `qorgNf41CZ9-KOLD`),
      rt = Oe(),
      it = Pe(),
      at = It(),
      ot = _e(),
      W = Te(),
      G = de(),
      K = H(),
      st = pe(),
      q = me(),
      ct = Ne(),
      lt = be(),
      ut = Ee(),
      dt = U(),
      J = le(),
      Y = V(),
      ft = fe(),
      pt = ve(),
      mt = Ie(),
      ht = he(),
      gt = we(),
      X = ye(),
      Z = Lt(),
      _t = Rt(),
      vt = zt(),
      Q = je();
    e.FinanceAccountLinkingPicker = class extends dt.Component {
      onRender() {
        let e = this.viewModel.tabOptions.length > 0;
        (r.beginRender(i, void 0),
          r.setAttributeStyle(`style`, $.picker),
          this.renderHeader(),
          r.beginRender(a, void 0),
          r.setAttributeStyle(`style`, $.content),
          e &&
            (r.beginRender(o, void 0),
            r.setAttributeStyle(`style`, $.controls),
            this.renderTabs(),
            r.endRender()),
          this.renderBody(),
          r.endRender(),
          r.endRender());
      }
      renderHeader() {
        let e =
          this.viewModel.selectedTab === this.viewModel.creditScoreTab &&
          this.viewModel.creditVerificationState === Z.FinanceCreditVerificationState.Connected &&
          !this.viewModel.isLoadingCreditStatus &&
          !this.viewModel.hasCreditStatusLoadError;
        (r.beginRender(s, void 0),
          r.setAttributeStyle(`style`, $.header),
          r.beginRender(c, void 0),
          r.setAttributeStyle(`style`, $.headerSpacer),
          r.endRender(),
          r.beginRender(l, void 0),
          r.setAttributeStyle(`style`, $.headerTitle),
          r.setAttributeString(`value`, Q.default.financeAccountLinkingTitle()),
          r.endRender(),
          r.beginComponent(gt.IconButton, u, void 0, void 0),
          r.setViewModelProperty(`style`, $.dismissButton),
          r.setViewModelProperty(`material`, ht.ControlMaterial.Glass),
          r.setViewModelProperty(
            `accessibilityLabel`,
            e
              ? Q.default.financeAccountLinkingDoneAccessibilityLabel()
              : Q.default.financeAccountLinkingCloseAccessibilityLabel(),
          ),
          r.setViewModelProperty(`onPress`, this.viewModel.onDismiss),
          r.setUnnamedSlot(() => {
            (r.beginComponent(lt.Icon, d, void 0, void 0),
              r.setViewModelProperty(`src`, e ? ot.default.checkCircle : ot.default.crossedLg),
              r.setViewModelProperty(`color`, e ? K.OAIColor.IconPrimary : K.OAIColor.IconSecondary),
              r.endComponent());
          }),
          r.endComponent(),
          r.endRender());
      }
      renderTabs() {
        (r.beginRender(f, void 0),
          r.setAttributeStyle(`style`, $.tabsScroll),
          r.setAttributeString(
            `accessibilityLabel`,
            Q.default.financeAccountLinkingConnectionTypesAccessibilityLabel(),
          ),
          r.beginRender(p, void 0),
          r.setAttributeStyle(`style`, $.tabs),
          this.viewModel.tabOptions.map((e) => this.renderTab(e)),
          r.endRender(),
          r.endRender());
      }
      renderTab(e) {
        let t = this.viewModel.selectedTab === e.value;
        (r.beginRender(m, e.value),
          r.setAttributeStyle(`style`, $.tab),
          r.setAttributeString(`accessibilityId`, `finance-account-linking-tab-${e.value}`),
          r.setAttribute(`accessibilityStateSelected`, t),
          r.setAttributeString(`backgroundColor`, t ? K.OAIColor.BgTertiary : void 0),
          r.setAttributeFunction(`onTap`, () => this.viewModel.onTabSelected(e.value)),
          r.beginRender(h, void 0),
          r.setAttributeStyle(`style`, $.tabLabel),
          r.setAttributeString(`color`, t ? K.OAIColor.TextPrimary : K.OAIColor.TextSecondary),
          r.setAttributeString(`value`, e.label),
          r.endRender(),
          r.endRender());
      }
      renderBody() {
        let e = this.viewModel.onManualAccountSelected;
        if (this.viewModel.selectedTab === this.viewModel.manualAccountsTab && e !== void 0) {
          (r.beginComponent(vt.FinanceManualAccounts, g, void 0, void 0),
            r.setViewModelProperty(`onManualAccountSelected`, e),
            r.endComponent());
          return;
        }
        if (this.viewModel.selectedTab === this.viewModel.creditScoreTab) {
          (r.beginComponent(yt, _, void 0, void 0),
            r.setViewModelProperty(`isOpeningAccountChat`, this.viewModel.isOpeningAccountChat),
            r.setViewModelProperty(`onCreditScoreChat`, this.viewModel.onCreditScoreChat),
            r.setViewModelProperty(`creditScore`, this.viewModel.creditScore),
            r.setViewModelProperty(`creditCopy`, this.viewModel.creditCopy),
            r.setViewModelProperty(`creditVerificationState`, this.viewModel.creditVerificationState),
            r.setViewModelProperty(`hasCreditStatusLoadError`, this.viewModel.hasCreditStatusLoadError),
            r.setViewModelProperty(
              `hasReachedCreditStatusPollLimit`,
              this.viewModel.hasReachedCreditStatusPollLimit,
            ),
            r.setViewModelProperty(`isLoadingCreditStatus`, this.viewModel.isLoadingCreditStatus),
            r.setViewModelProperty(`isVerifying`, this.viewModel.isVerifyingCredit === !0),
            r.setViewModelProperty(`onLearnMore`, this.viewModel.onCreditLearnMore),
            r.setViewModelProperty(`onContactExperian`, this.viewModel.onCreditSupport),
            r.setViewModelProperty(`onRetryCreditStatus`, this.viewModel.onRetryCreditStatus),
            r.setViewModelProperty(`onStart`, this.viewModel.onCreditVerification),
            r.endComponent());
          return;
        }
        if (this.viewModel.selectedTab !== this.viewModel.accountsTab) {
          this.renderFutureTab();
          return;
        }
        (r.beginComponent(_t.FinancePlaidIntroduction, v, void 0, void 0),
          r.setViewModelProperty(`isLaunching`, this.viewModel.isLaunchingPlaid),
          r.setViewModelProperty(`onContinue`, this.viewModel.onContinueToPlaid),
          r.endComponent());
      }
      renderFutureTab() {
        let e =
          this.viewModel.tabOptions.find((e) => e.value === this.viewModel.selectedTab)?.label ??
          (this.viewModel.selectedTab === this.viewModel.creditScoreTab
            ? Q.default.financeAccountLinkingTabCreditScore()
            : void 0);
        e !== void 0 &&
          (r.beginComponent(X.SafeArea, y, void 0, void 0),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setViewModelProperty(`style`, $.messageContainer),
          r.setViewModelProperty(
            `accessibilityLabel`,
            Q.default.financeAccountLinkingComingSoonAccessibilityLabel(e),
          ),
          r.setUnnamedSlot(() => {
            (r.beginRender(b, void 0),
              r.setAttributeStyle(`style`, $.messageTitle),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingComingSoonTitle(e)),
              r.endRender());
          }),
          r.endComponent());
      }
    };
    var yt = class extends dt.Component {
      constructor() {
        (super(...arguments),
          (this.openAppUpdate = () => {
            try {
              mt.platformBrowser.openURL(`https://chatgpt.com/update-app`);
            } catch {
              n.isLoggingEnabled && console.warn(`Could not open the ChatGPT app update page`);
            }
          }));
      }
      onRender() {
        let e = this.viewModel.creditVerificationState;
        if (e === Z.FinanceCreditVerificationState.UpdateRequired) {
          (r.beginComponent(X.SafeArea, x, void 0, void 0),
            r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
            r.setViewModelProperty(`style`, $.creditContainer),
            r.setUnnamedSlot(() => {
              (r.beginRender(S, void 0),
                r.setAttributeStyle(`style`, $.creditTitle),
                r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditUpdateTitle()),
                r.endRender(),
                r.beginRender(C, void 0),
                r.setAttributeStyle(`style`, $.creditDetail),
                r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditUpdateDescription()),
                r.endRender(),
                r.beginRender(w, void 0),
                r.setAttributeStyle(`style`, $.creditAction),
                r.beginComponent(q.Button, T, void 0, void 0),
                r.setViewModelProperty(`style`, $.creditStart),
                r.setViewModelProperty(`label`, Q.default.financeAccountLinkingCreditUpdateAction()),
                r.setViewModelProperty(`onPress`, this.openAppUpdate),
                r.endComponent(),
                r.endRender());
            }),
            r.endComponent());
          return;
        }
        if (this.viewModel.isLoadingCreditStatus) {
          (r.beginComponent(X.SafeArea, E, void 0, void 0),
            r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
            r.setViewModelProperty(`style`, $.creditContainer),
            r.setUnnamedSlot(() => {
              (r.beginComponent(st.ActivityIndicator, D, void 0, void 0),
                r.setViewModelProperty(
                  `accessibilityLabel`,
                  Q.default.financeAccountLinkingCreditStatusLoading(),
                ),
                r.endComponent());
            }),
            r.endComponent());
          return;
        }
        let t = this.viewModel.hasCreditStatusLoadError;
        if (t) {
          let e = Q.default.financeAccountLinkingCreditStatusLoadError();
          (r.beginComponent(X.SafeArea, O, void 0, void 0),
            r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
            r.setViewModelProperty(`style`, $.creditContainer),
            r.setUnnamedSlot(() => {
              (r.beginRender(k, void 0),
                r.setAttributeStyle(`style`, $.creditTitle),
                r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditScoreTitle()),
                r.endRender(),
                r.beginRender(A, void 0),
                r.setAttributeStyle(`style`, $.creditDetail),
                r.setAttributeString(`accessibilityLabel`, e),
                r.setAttribute(`accessibilityStateLiveRegion`, t),
                r.setAttributeString(`value`, e),
                r.endRender(),
                r.beginRender(ee, void 0),
                r.setAttributeStyle(`style`, $.creditAction),
                r.beginComponent(q.Button, te, void 0, void 0),
                r.setViewModelProperty(`style`, $.creditStart),
                r.setViewModelProperty(
                  `accessibilityLabel`,
                  Q.default.financeAccountLinkingCreditStatusRetryAccessibilityLabel(),
                ),
                r.setViewModelProperty(`label`, Q.default.financeAccountLinkingCreditStatusRetry()),
                r.setViewModelProperty(`onPress`, this.viewModel.onRetryCreditStatus),
                r.endComponent(),
                r.endRender());
            }),
            r.endComponent());
          return;
        }
        if (e === Z.FinanceCreditVerificationState.Preparing) {
          this.renderPreparingCredit();
          return;
        }
        if (e === Z.FinanceCreditVerificationState.Connected) {
          this.renderConnectedCredit();
          return;
        }
        if (e === Z.FinanceCreditVerificationState.Available) {
          this.renderAvailableCredit();
          return;
        }
        let n = e === Z.FinanceCreditVerificationState.ReportFailed,
          i = Q.default.financeAccountLinkingCreditScoreTitle(),
          a = n
            ? Q.default.financeAccountLinkingCreditReportFailed()
            : Q.default.financeAccountLinkingCreditScoreUnavailable();
        (r.beginComponent(X.SafeArea, j, void 0, void 0),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setViewModelProperty(`style`, $.creditContainer),
          r.setUnnamedSlot(() => {
            (r.beginRender(ne, void 0),
              r.setAttributeStyle(`style`, $.creditTitle),
              r.setAttributeString(`accessibilityLabel`, i),
              r.setAttributeString(`value`, i),
              r.endRender(),
              r.beginRender(M, void 0),
              r.setAttributeStyle(`style`, $.creditDetail),
              r.setAttributeString(
                `accessibilityId`,
                n ? `finance-credit-report-failed` : `finance-credit-verification-blocked`,
              ),
              r.setAttributeString(`accessibilityLabel`, a),
              r.setAttribute(`accessibilityStateLiveRegion`, !0),
              r.setAttributeString(`value`, a),
              r.endRender());
          }),
          r.endComponent());
      }
      renderPreparingCredit() {
        let e = Q.default.financeAccountLinkingCreditReportPreparing();
        (r.beginComponent(X.SafeArea, N, void 0, void 0),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setViewModelProperty(`style`, $.creditContainer),
          r.setUnnamedSlot(() => {
            (!this.viewModel.hasReachedCreditStatusPollLimit &&
              (r.beginComponent(st.ActivityIndicator, re, void 0, void 0),
              r.setViewModelProperty(`accessibilityLabel`, e),
              r.endComponent()),
              r.beginRender(P, void 0),
              r.setAttributeStyle(`style`, $.creditTitle),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditIdentityVerified()),
              r.endRender(),
              r.beginRender(ie, void 0),
              r.setAttributeStyle(`style`, At),
              r.setAttributeString(`value`, e),
              r.endRender(),
              this.viewModel.hasReachedCreditStatusPollLimit &&
                (r.beginRender(ae, void 0),
                r.setAttributeStyle(`style`, $.creditAction),
                r.beginComponent(q.Button, oe, void 0, void 0),
                r.setViewModelProperty(`style`, $.creditStart),
                r.setViewModelProperty(`label`, Q.default.financeAccountLinkingCreditReportCheckAgain()),
                r.setViewModelProperty(`onPress`, this.viewModel.onRetryCreditStatus),
                r.endComponent(),
                r.endRender()));
          }),
          r.endComponent());
      }
      renderAvailableCredit() {
        let e = this.viewModel.creditCopy;
        if (e !== void 0) {
          this.renderCopy(e);
          return;
        }
        let t = this.viewModel.isVerifying,
          n = Q.default.financeAccountLinkingCreditScoreGetStarted(),
          i = Q.default.financeAccountLinkingCreditScoreLearnMore();
        (r.beginRender(F, void 0),
          r.setAttributeStyle(`style`, $.scroll),
          r.beginComponent(X.SafeArea, se, void 0, void 0),
          r.setViewModelProperty(`style`, $.creditIntroduction),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setUnnamedSlot(() => {
            (r.beginRender(I, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionContent),
              r.beginRender(L, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionLogo),
              r.beginRender(ce, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionMark),
              r.setAttribute(`src`, rt.default.experianMark),
              r.endRender(),
              r.endRender(),
              r.beginRender(R, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionDetails),
              r.beginRender(ue, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionTitle),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditScoreExperianTitle()),
              r.endRender(),
              r.beginRender(ge, void 0),
              r.setAttributeStyle(`style`, $.creditBenefits),
              this.renderCreditBenefit(
                at.default.gauge,
                Q.default.financeAccountLinkingCreditScoreReportTitle(),
                Q.default.financeAccountLinkingCreditScoreReportDetail(),
              ),
              r.beginComponent(ct.Divider, xe, void 0, void 0),
              r.setViewModelProperty(`color`, K.OAIColor.BorderLight),
              r.endComponent(),
              this.renderCreditBenefit(
                at.default.shield,
                Q.default.financeAccountLinkingCreditScoreMonitoringTitle(),
                Q.default.financeAccountLinkingCreditScoreMonitoringDetail(),
              ),
              r.beginComponent(ct.Divider, Se, void 0, void 0),
              r.setViewModelProperty(`color`, K.OAIColor.BorderLight),
              r.endComponent(),
              this.renderCreditBenefit(
                at.default.checkmarkCircle,
                Q.default.financeAccountLinkingCreditScoreGoalsTitle(),
                Q.default.financeAccountLinkingCreditScoreGoalsDetail(),
              ),
              r.endRender(),
              r.endRender(),
              r.beginComponent(q.Button, Ce, void 0, void 0),
              r.setViewModelProperty(`style`, $.creditIntroductionStart),
              r.setViewModelProperty(`labelStyle`, $.creditIntroductionStartLabel),
              r.setViewModelProperty(
                `accessibilityLabel`,
                t ? Q.default.financeAccountLinkingCreditScoreVerifyingAccessibilityLabel() : n,
              ),
              r.setViewModelProperty(`disabled`, t),
              r.setViewModelProperty(`label`, n),
              r.setViewModelProperty(`loading`, t),
              r.setViewModelProperty(`onPress`, this.viewModel.onStart),
              r.endComponent(),
              r.endRender(),
              r.beginRender(De, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionFooter),
              r.beginRender(ke, void 0),
              r.setAttributeStyle(`style`, $.creditIntroductionFooterText),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditScoreNoScoreImpact()),
              r.endRender(),
              r.beginComponent(ut.Pressable, Ae, void 0, void 0),
              r.setViewModelProperty(`style`, $.creditLearnMore),
              r.setViewModelProperty(`accessibilityLabel`, i),
              r.setViewModelProperty(`onPress`, this.viewModel.onLearnMore),
              r.setUnnamedSlot(() => {
                (r.beginRender(Me, void 0),
                  r.setAttributeStyle(`style`, $.creditIntroductionFooterText),
                  r.setAttributeString(`value`, i),
                  r.endRender());
              }),
              r.endComponent(),
              r.endRender());
          }),
          r.endComponent(),
          r.endRender());
      }
      renderCopy(e) {
        let t = e.action;
        (r.beginComponent(X.SafeArea, Fe, void 0, void 0),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setViewModelProperty(`style`, $.creditContainer),
          r.setUnnamedSlot(() => {
            (r.beginRender(Le, void 0),
              r.setAttributeStyle(`style`, $.creditTitle),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditScoreTitle()),
              r.endRender(),
              r.beginRender(Re, void 0),
              r.setAttributeStyle(`style`, kt),
              r.setAttributeString(`value`, e.message),
              r.endRender(),
              t !== void 0 &&
                (r.beginRender(ze, void 0),
                r.setAttributeStyle(`style`, $.creditAction),
                r.beginComponent(q.Button, Be, void 0, void 0),
                r.setViewModelProperty(`style`, $.creditStart),
                r.setViewModelProperty(
                  `accessibilityId`,
                  t === Z.CreditCopyAction.ContactExperian
                    ? `finance-credit-contact-experian`
                    : `finance-credit-verification-start`,
                ),
                r.setViewModelProperty(`label`, bt(t)),
                r.setViewModelProperty(`disabled`, this.viewModel.isVerifying),
                r.setViewModelProperty(`loading`, this.viewModel.isVerifying),
                r.setViewModelProperty(
                  `onPress`,
                  t === Z.CreditCopyAction.ContactExperian
                    ? this.viewModel.onContactExperian
                    : this.viewModel.onStart,
                ),
                r.endComponent(),
                r.endRender()));
          }),
          r.endComponent());
      }
      renderCreditBenefit(e, t, n) {
        (r.beginRender(Ve, void 0),
          r.setAttributeStyle(`style`, $.creditBenefitRow),
          r.beginRender(He, void 0),
          r.setAttributeStyle(`style`, $.creditBenefitIcon),
          r.setAttribute(`src`, e),
          r.endRender(),
          r.beginRender(Ue, void 0),
          r.setAttributeStyle(`style`, $.creditBenefitCopy),
          r.beginRender(We, void 0),
          r.setAttributeStyle(`style`, $.creditBenefitTitle),
          r.setAttributeString(`value`, t),
          r.endRender(),
          r.beginRender(Ge, void 0),
          r.setAttributeStyle(`style`, $.creditBenefitDetail),
          r.setAttributeString(`value`, n),
          r.endRender(),
          r.endRender(),
          r.endRender());
      }
      renderConnectedCredit() {
        let e = this.viewModel.creditScore,
          t = Q.default.financeAccountLinkingCreditScoreConnected();
        (r.beginComponent(X.SafeArea, Ke, void 0, void 0),
          r.setViewModelProperty(`edges`, [X.SafeAreaEdge.Bottom]),
          r.setViewModelProperty(`style`, $.connectedCreditContainer),
          r.setUnnamedSlot(() => {
            (r.beginRender(qe, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditRow),
              r.beginRender(Je, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditLogo),
              r.beginComponent(it.FinanceCreditInstitutionLogo, Ye, void 0, void 0),
              r.endComponent(),
              r.endRender(),
              r.beginRender(Xe, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditCopy),
              r.beginRender(Ze, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditName),
              r.setAttributeString(`value`, Q.default.financeAccountLinkingCreditProviderName()),
              r.endRender(),
              r.beginRender(Qe, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditScore),
              r.setAttributeString(
                `value`,
                e === void 0
                  ? t
                  : Q.default.financeAccountLinkingCreditScoreSummary((0, pt.formatNumber)(e, 0, void 0)),
              ),
              r.endRender(),
              r.endRender(),
              r.beginRender($e, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditStatus),
              r.setAttributeString(`accessibilityLabel`, t),
              r.beginRender(et, void 0),
              r.setAttributeStyle(`style`, $.connectedCreditCheck),
              r.setAttribute(`src`, ot.default.checkMd),
              r.endRender(),
              r.endRender(),
              r.endRender(),
              this.viewModel.onCreditScoreChat !== void 0 &&
                (r.beginRender(tt, void 0),
                r.setAttributeStyle(`style`, $.connectedCreditAction),
                r.beginComponent(q.Button, nt, void 0, void 0),
                r.setViewModelProperty(`label`, Q.default.financeAccountLinkingCreditScoreChatLabel()),
                r.setViewModelProperty(`onPress`, this.viewModel.onCreditScoreChat),
                r.setViewModelProperty(`disabled`, this.viewModel.isOpeningAccountChat),
                r.setViewModelProperty(`loading`, this.viewModel.isOpeningAccountChat),
                r.endComponent(),
                r.endRender()));
          }),
          r.endComponent());
      }
    };
    function bt(e) {
      switch (e) {
        case Z.CreditCopyAction.RetryVerification:
          return Q.default.financeAccountLinkingCreditVerificationRetry();
        case Z.CreditCopyAction.ContinueVerification:
          return Q.default.financeAccountLinkingCreditVerificationContinue();
        case Z.CreditCopyAction.ContactExperian:
          return Q.default.financeAccountLinkingCreditVerificationContactExperian();
      }
    }
    var xt = (0, K.resolveOAITextStyle)(K.OAITextSize.BodyLarge),
      St = (0, G.resolveOAITypography)(G.Typography.InlineTitle, {
        font: void 0,
        lineHeight: void 0,
        lineHeightMultiple: void 0,
      }),
      Ct = (0, G.resolveOAITypography)(G.Typography.Body, {
        font: void 0,
        lineHeight: void 0,
        lineHeightMultiple: void 0,
      }),
      wt = (0, G.resolveOAITypography)(
        J.Device.isWeb()
          ? (0, K.resolveOAITextStyle)(K.OAITextSize.LabelLarge)
          : G.Typography.FootnoteSemibold,
        { font: void 0, lineHeight: void 0, lineHeightMultiple: void 0 },
      ),
      Tt = (0, G.resolveOAITypography)(J.Device.isWeb() ? G.Typography.Footnote : G.Typography.Caption, {
        font: void 0,
        lineHeight: void 0,
        lineHeightMultiple: void 0,
      }),
      Et = (0, K.resolveOAITextStyle)(K.OAITextSize.TitleSmall),
      Dt = (0, K.resolveOAITextStyle)(K.OAITextSize.BodySmall),
      Ot = new Y.Style({
        flexDirection: `column`,
        flexGrow: 1,
        flexShrink: 1,
        gap: K.OAISpacing.One,
        minHeight: 0,
        width: `100%`,
      }),
      $ = {
        content: Ot,
        picker: Y.Style.merge(Ot, new Y.Style({ gap: K.OAISpacing.None })),
        header: new Y.Style({
          alignItems: `center`,
          flexDirection: `row`,
          minHeight: K.OAISpacing.FivePointFive,
          justifyContent: `space-between`,
          paddingBottom: K.OAISpacing.Two,
          paddingLeft: K.OAISpacing.Three,
          paddingRight: K.OAISpacing.Three,
          width: `100%`,
        }),
        headerSpacer: new Y.Style({ height: K.OAISpacing.FourPointFive, width: K.OAISpacing.FourPointFive }),
        headerTitle: new Y.Style({
          ...St,
          color: K.OAIColor.TextPrimary,
          flexGrow: 1,
          flexShrink: 1,
          numberOfLines: 1,
          textAlign: `center`,
        }),
        dismissButton: new Y.Style({
          alignItems: `center`,
          backgroundColor: K.OAIColor.BgTertiary,
          borderRadius: K.OAIRadius.Pill,
          height: K.OAISpacing.FourPointFive,
          justifyContent: `center`,
          touchAreaExtension: K.OAISpacing.Half,
          width: K.OAISpacing.FourPointFive,
        }),
        controls: new Y.Style({
          flexDirection: `column`,
          gap: K.OAISpacing.OneAndHalf,
          paddingLeft: K.OAISpacing.Three,
          paddingRight: K.OAISpacing.Three,
          width: `100%`,
        }),
        tabs: new Y.Style({
          alignItems: `center`,
          flexDirection: `row`,
          gap: K.OAISpacing.None,
          minHeight: K.OAISpacing.FivePointFive,
        }),
        tabsScroll: new Y.Style({
          fadingEdgeLength: K.OAISpacing.Two,
          minHeight: K.OAISpacing.FivePointFive,
          showsHorizontalScrollIndicator: !1,
          width: `100%`,
        }),
        tab: new Y.Style({
          alignItems: `center`,
          borderRadius: K.OAIRadius.Pill,
          minHeight: K.OAISpacing.FivePointFive,
          justifyContent: `center`,
          minWidth: 0,
          paddingLeft: K.OAISpacing.Two,
          paddingRight: K.OAISpacing.Two,
          paddingBottom: K.OAISpacing.OnePointTwentyFive,
          paddingTop: K.OAISpacing.OnePointTwentyFive,
        }),
        tabLabel: new Y.Style({ ...Ct, flexShrink: 1, numberOfLines: 1 }),
        scroll: new Y.Style({ flexBasis: 0, flexGrow: 1, flexShrink: 1, minHeight: 0, width: `100%` }),
        connectedCreditContainer: new Y.Style({ width: `100%` }),
        connectedCreditAction: new Y.Style({
          paddingTop: K.OAISpacing.One,
          paddingBottom: K.OAISpacing.Two,
          paddingLeft: K.OAISpacing.Three,
          paddingRight: K.OAISpacing.Three,
          width: `100%`,
        }),
        connectedCreditRow: new Y.Style({
          alignItems: `center`,
          flexDirection: `row`,
          flexShrink: 0,
          gap: K.OAISpacing.OneAndHalf,
          marginTop: K.OAISpacing.One,
          paddingBottom: K.OAISpacing.Two,
          paddingLeft: K.OAISpacing.Three,
          paddingRight: K.OAISpacing.Three,
          paddingTop: K.OAISpacing.Two,
          width: `100%`,
        }),
        connectedCreditLogo: new Y.Style({
          alignItems: `center`,
          backgroundColor: K.OAIColor.BgPrimary,
          borderColor: K.OAIColor.BorderLight,
          borderRadius: K.OAIRadius.Pill,
          borderWidth: 0.5,
          colorPaletteName: W.OAI_LIGHT_THEME,
          flexShrink: 0,
          height: K.OAISpacing.Four,
          justifyContent: `center`,
          width: K.OAISpacing.Four,
        }),
        connectedCreditCopy: new Y.Style({
          flexDirection: `column`,
          flexGrow: 1,
          flexShrink: 1,
          minWidth: 0,
        }),
        connectedCreditName: new Y.Style({
          color: K.OAIColor.TextPrimary,
          font: xt.font,
          lineHeight: 26,
          numberOfLines: 1,
        }),
        connectedCreditScore: new Y.Style({
          color: K.OAIColor.TextTertiary,
          font: (0, ft.systemFont)(13),
          lineHeight: 18,
          numberOfLines: 1,
        }),
        connectedCreditStatus: new Y.Style({
          accessibilityStateLiveRegion: !0,
          alignItems: `center`,
          backgroundColor: K.OAIColor.ThemeBlueBackground,
          borderRadius: K.OAIRadius.Pill,
          flexShrink: 0,
          height: K.OAISpacing.Four,
          justifyContent: `center`,
          width: K.OAISpacing.Four,
        }),
        connectedCreditCheck: new Y.Style({
          accessibilityNavigation: `ignored`,
          height: 18.75,
          objectFit: `contain`,
          tint: K.OAIColor.ThemeBlueDefault,
          width: 18.75,
        }),
        creditIntroduction: new Y.Style({
          alignItems: `center`,
          flexDirection: `column`,
          flexGrow: 1,
          gap: K.OAISpacing.One,
          justifyContent: `space-between`,
          paddingLeft: K.OAISpacing.Three,
          paddingRight: K.OAISpacing.Three,
          width: `100%`,
        }),
        creditIntroductionContent: new Y.Style({
          alignItems: `center`,
          flexDirection: `column`,
          flexShrink: 0,
          gap: 18,
          paddingTop: J.Device.isWeb() ? K.OAISpacing.Two : K.OAISpacing.Three,
          width: `100%`,
        }),
        creditIntroductionStart: new Y.Style({
          height: `auto`,
          marginTop: J.Device.isWeb() ? 0 : K.OAISpacing.OnePointSeventyFive,
          maxWidth: `100%`,
          minHeight: J.Device.isWeb() ? 42 : K.OAISpacing.Five,
          paddingBottom: K.OAISpacing.OnePointTwentyFive,
          paddingTop: K.OAISpacing.OnePointTwentyFive,
        }),
        creditIntroductionStartLabel: new Y.Style({
          font: (0, ft.systemMediumFont)(J.Device.isWeb() ? 14 : 15),
          lineHeightMultiple: J.Device.isWeb() ? 20 / 14 : 20 / 15,
          numberOfLines: 0,
          textAlign: `center`,
        }),
        creditIntroductionLogo: new Y.Style({
          alignItems: `center`,
          backgroundColor: K.OAIColor.BgPrimary,
          borderColor: K.OAIColor.BorderLight,
          borderRadius: K.OAIRadius.Lg,
          borderWidth: 1,
          boxShadow: `0 4 6 rgba(0, 0, 0, 0.03)`,
          colorPaletteName: W.OAI_LIGHT_THEME,
          flexShrink: 0,
          height: K.OAISpacing.Six,
          justifyContent: `center`,
          width: K.OAISpacing.Six,
        }),
        creditIntroductionMark: new Y.Style({
          accessibilityNavigation: `ignored`,
          height: 31,
          objectFit: `contain`,
          width: K.OAISpacing.Three,
        }),
        creditIntroductionDetails: new Y.Style({
          flexDirection: `column`,
          gap: K.OAISpacing.TwoPointFive,
          paddingLeft: K.OAISpacing.TwoPointFive,
          paddingRight: K.OAISpacing.TwoPointFive,
          width: `100%`,
        }),
        creditIntroductionTitle: new Y.Style({
          color: K.OAIColor.TextPrimary,
          font: J.Device.isWeb() ? (0, ft.systemSemiboldFont)(16) : St.font,
          lineHeightMultiple: J.Device.isWeb() ? 26 / 16 : 22 / 17,
          numberOfLines: 0,
          textAlign: `center`,
          width: `100%`,
        }),
        creditBenefits: new Y.Style({
          backgroundColor: K.OAIColor.BgPrimary,
          borderColor: K.OAIColor.BorderDefault,
          borderRadius: 20,
          borderWidth: 1,
          flexDirection: `column`,
          gap: K.OAISpacing.Two,
          padding: K.OAISpacing.Two,
          width: `100%`,
        }),
        creditBenefitRow: new Y.Style({
          alignItems: `center`,
          flexDirection: `row`,
          gap: K.OAISpacing.Two,
          width: `100%`,
        }),
        creditBenefitIcon: new Y.Style({
          accessibilityNavigation: `ignored`,
          flexShrink: 0,
          height: K.OAISpacing.Three,
          objectFit: `contain`,
          width: K.OAISpacing.Three,
        }),
        creditBenefitCopy: new Y.Style({
          flexDirection: `column`,
          flexGrow: 1,
          flexShrink: 1,
          gap: K.OAISpacing.Px,
          minWidth: 0,
        }),
        creditBenefitTitle: new Y.Style({
          color: K.OAIColor.TextPrimary,
          font: wt.font,
          lineHeightMultiple: J.Device.isWeb() ? 20 / 14 : 18 / 13,
          minHeight: K.OAISpacing.Three,
          numberOfLines: 0,
          width: `100%`,
        }),
        creditBenefitDetail: new Y.Style({
          color: K.OAIColor.TextSecondary,
          font: Tt.font,
          lineHeightMultiple: J.Device.isWeb() ? 18 / 13 : 16 / 12,
          numberOfLines: 0,
          width: `100%`,
        }),
        creditIntroductionFooter: new Y.Style({
          alignItems: `center`,
          flexDirection: `column`,
          gap: K.OAISpacing.Half,
          paddingBottom: K.OAISpacing.OnePointSeventyFive,
          paddingLeft: K.OAISpacing.OnePointSeventyFive,
          paddingRight: K.OAISpacing.OnePointSeventyFive,
          width: `100%`,
        }),
        creditIntroductionFooterText: new Y.Style({
          color: K.OAIColor.TextTertiary,
          font: Dt.font,
          lineHeightMultiple: 16 / 12,
          numberOfLines: 0,
          textAlign: `center`,
          width: `100%`,
        }),
        creditLearnMore: new Y.Style({
          accessibilityId: `finance-credit-learn-more`,
          touchAreaExtension: K.OAISpacing.OnePointSeventyFive,
          width: `100%`,
        }),
        creditContainer: new Y.Style({
          alignItems: `center`,
          flexDirection: `column`,
          flexGrow: 1,
          gap: K.OAISpacing.OneAndHalf,
          justifyContent: `center`,
          paddingBottom: K.OAISpacing.Four,
          paddingLeft: K.OAISpacing.Six,
          paddingRight: K.OAISpacing.Six,
          paddingTop: K.OAISpacing.Four,
          width: `100%`,
        }),
        creditTitle: new Y.Style({
          color: K.OAIColor.TextPrimary,
          flexShrink: 1,
          font: Et.font,
          lineHeightMultiple: 22 / 16,
          numberOfLines: 2,
          textAlign: `center`,
          width: `100%`,
        }),
        creditDetail: new Y.Style({
          color: K.OAIColor.TextSecondary,
          flexShrink: 1,
          font: xt.font,
          lineHeightMultiple: 24 / 16,
          numberOfLines: 3,
          textAlign: `center`,
          width: `100%`,
        }),
        creditAction: new Y.Style({ paddingTop: K.OAISpacing.One, width: `100%` }),
        creditStart: new Y.Style({ width: `100%` }),
        messageContainer: new Y.Style({
          alignItems: `center`,
          flexDirection: `column`,
          flexGrow: 1,
          gap: K.OAISpacing.One,
          justifyContent: `center`,
          paddingBottom: K.OAISpacing.Four,
          paddingLeft: K.OAISpacing.Six,
          paddingRight: K.OAISpacing.Six,
          paddingTop: K.OAISpacing.Four,
          width: `100%`,
        }),
        messageTitle: new Y.Style({
          color: K.OAIColor.TextPrimary,
          font: (0, ft.systemSemiboldFont)(15),
          textAlign: `center`,
        }),
        messageDetail: new Y.Style({
          color: K.OAIColor.TextSecondary,
          font: (0, ft.systemFont)(13),
          numberOfLines: 2,
          textAlign: `center`,
        }),
      },
      kt = Y.Style.merge(
        $.creditDetail,
        new Y.Style({
          accessibilityId: `finance-credit-verification-message`,
          accessibilityStateLiveRegion: !0,
          numberOfLines: 0,
        }),
      ),
      At = Y.Style.merge(
        $.creditDetail,
        new Y.Style({
          accessibilityId: `finance-credit-report-preparing`,
          accessibilityStateLiveRegion: !0,
          numberOfLines: 0,
        }),
      );
  }),
  Vt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingProgress`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingProgress = void 0));
    var n = B().jsx,
      r = n.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-connecting`],
        `AlKhKw7FJNswoMpn`,
      ),
      i = n.makeComponentPrototype(
        [`accessibilityId`, `finance-account-linking-dismiss`],
        `ZLyi11sJ0EZgYJYJ`,
      ),
      a = n.makeNodePrototype(`view`, void 0, `px4hF-UGE6S3_PkC`),
      o = n.makeComponentPrototype(void 0, `6X7K8li1kSGabDiq`),
      s = n.makeNodePrototype(`label`, void 0, `7S3OST_cKSzhKNaW`),
      c = _e(),
      l = H(),
      u = pe(),
      d = ge(),
      f = U(),
      p = V(),
      m = fe(),
      h = ye(),
      g = je();
    e.FinanceAccountLinkingProgress = class extends f.Component {
      onRender() {
        (n.beginComponent(h.SafeArea, r, void 0, void 0),
          n.setViewModelProperty(`style`, v.progress),
          n.setViewModelProperty(`edges`, [h.SafeAreaEdge.Bottom]),
          n.setUnnamedSlot(() => {
            (n.beginComponent(d.IconButton, i, void 0, void 0),
              n.setViewModelProperty(`style`, v.dismissButton),
              n.setViewModelProperty(
                `accessibilityLabel`,
                g.default.financeAccountLinkingCloseAccessibilityLabel(),
              ),
              n.setViewModelProperty(`iconColor`, l.OAIColor.IconSecondary),
              n.setViewModelProperty(`onPress`, this.viewModel.onDismiss),
              n.setViewModelProperty(`src`, c.default.crossedLg),
              n.endComponent(),
              n.beginRender(a, void 0),
              n.setAttributeStyle(`style`, v.content),
              n.beginComponent(u.ActivityIndicator, o, void 0, void 0),
              n.setViewModelProperty(`size`, u.ActivityIndicatorSize.Medium),
              n.endComponent(),
              n.beginRender(s, void 0),
              n.setAttributeStyle(`style`, v.label),
              n.setAttributeString(`value`, g.default.financeAccountLinkingConnectingAccounts()),
              n.endRender(),
              n.endRender());
          }),
          n.endComponent());
      }
    };
    var _ = (0, l.resolveOAITextStyle)(l.OAITextSize.BodyLarge),
      v = {
        dismissButton: new p.Style({
          position: `absolute`,
          right: l.OAISpacing.Three,
          top: 0,
          touchAreaExtension: l.OAISpacing.Half,
        }),
        progress: new p.Style({
          alignItems: `center`,
          flexGrow: 1,
          justifyContent: `center`,
          paddingLeft: l.OAISpacing.Three,
          paddingRight: l.OAISpacing.Three,
          width: `100%`,
        }),
        content: new p.Style({ alignItems: `center`, flexDirection: `column`, gap: l.OAISpacing.Two }),
        label: new p.Style({
          color: l.OAIColor.TextPrimary,
          font: (0, m.systemSemiboldFont)(17),
          lineHeight: _.lineHeight,
          textAlign: `center`,
        }),
      };
  }),
  Ht = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceConnectorAuthorization`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceConnectorAuthorization = void 0));
    var n = z().getValdiRuntime(),
      r = lt(),
      i = ce();
    e.FinanceConnectorAuthorization = class {
      async authorize(e, t) {
        if (!(0, i.isVersionAtLeast)(66)) throw Error(`Finance connector authorization is unavailable`);
        if (this.pendingAuthorization !== void 0)
          throw Error(`Finance connector authorization is already in progress`);
        let n = { host: t };
        this.pendingAuthorization = n;
        let a;
        try {
          a = await t.authorizeFinancesConnector(e);
        } catch {
          throw this.pendingAuthorization === n
            ? ((this.pendingAuthorization = void 0),
              this.closeAuthorization(t),
              Error(`Finance connector authorization failed`))
            : new r.FinanceAccountLinkingCancelledError();
        }
        if (this.pendingAuthorization !== n) throw new r.FinanceAccountLinkingCancelledError();
        switch (((this.pendingAuthorization = void 0), a)) {
          case 0:
            return;
          case 1:
            throw new r.FinanceAccountLinkingCancelledError();
          case 2:
            throw Error(`Finance connector authorization failed`);
          default:
            throw (
              this.closeAuthorization(t),
              Error(`Finance connector authorization returned an unsupported outcome`)
            );
        }
      }
      cancel() {
        let e = this.pendingAuthorization;
        ((this.pendingAuthorization = void 0),
          (0, i.isVersionAtLeast)(66) && e !== void 0 && this.closeAuthorization(e.host));
      }
      closeAuthorization(e) {
        if ((0, i.isVersionAtLeast)(66))
          try {
            e.cancelFinancesConnectorAuthorization();
          } catch {
            n.isLoggingEnabled && console.warn(`Finance connector authorization could not be closed`);
          }
      }
    };
  }),
  Ut = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceCreditVerificationAppearance`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FINANCE_CREDIT_VERIFICATION_APPEARANCE = void 0));
    var n = Te(),
      r = H();
    e.FINANCE_CREDIT_VERIFICATION_APPEARANCE = {
      identityVerification: {
        light: {
          ...i(n.OAI_LIGHT_COLOR_PALETTE),
          surface: `#F9F9F9`,
          inputBg: `#FFFFFF`,
          border: `#00000026`,
          focusRing: `#00000026`,
          buttonEnabledHoverBg: `#303030`,
          buttonDisabledBg: `#E8E8E8`,
          buttonDisabledText: `#8F8F8F`,
          errorText: `#BA2623`,
          logoVariant: `standard`,
        },
        dark: {
          ...i(n.OAI_DARK_COLOR_PALETTE),
          surface: `#303030`,
          inputBg: `#303030`,
          border: `#FFFFFF26`,
          focusRing: `#FFFFFF40`,
          buttonEnabledHoverBg: `#E8E8E8`,
          buttonDisabledBg: `#414141`,
          buttonDisabledText: `#8F8F8F`,
          errorText: `#FF8583`,
          logoVariant: `reverse`,
        },
      },
    };
    function i(e) {
      return {
        sheetBg: e[r.OAIColor.BgPrimary],
        headingText: e[r.OAIColor.TextPrimary],
        mutedText: e[r.OAIColor.TextSecondary],
        faintText: e[r.OAIColor.TextTertiary],
        eyebrow: e[r.OAIColor.TextSecondary],
        focusBorder: e[r.OAIColor.InteractiveBorderFocus],
        buttonEnabledBg: e[r.OAIColor.InteractiveBgPrimaryDefault],
        buttonEnabledText: e[r.OAIColor.InteractiveLabelPrimaryDefault],
        errorSurface: e[r.OAIColor.BgStatusError],
      };
    }
  }),
  Wt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceCreditVerificationScript`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FINANCE_CREDIT_VERIFICATION_SCRIPT = void 0),
      (e.FINANCE_CREDIT_VERIFICATION_SCRIPT = {
        scriptUrl: `https://persistent.oaistatic.com/experian/connected-web-sdk/2.5.2/dist/esm/index.mjs`,
        scriptIntegrity: `sha384-tpm12n4+JY2t5DT6qhpbEsuwWH4uiZ6AdzTqH7XrykjqA8D5YevJmFr7+bpLBT50`,
      }));
  }),
  Gt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceCreditVerificationFunnel`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceCreditVerificationFunnel = void 0));
    var n = ct(),
      r = Le(),
      i = q(),
      a = pt();
    e.FinanceCreditVerificationFunnel = class {
      constructor(e) {
        ((this.api = e), (this.flowId = (0, i.v4)()));
      }
      start(e) {
        this.send(n.FinanceCreditFunnelStep.FlowStarted, {
          ...(0, a.financeFunnelStart)(),
          credit_entrypoint: (0, r.toEnum)(n.FinanceLinkingEntrypoint, e),
        });
      }
      record(e) {
        this.send(e, void 0);
      }
      send(e, t) {
        (0, a.sendFinanceFunnelEvent)(this.api, {
          flow_type: `credit`,
          flow_id: this.flowId,
          event_id: (0, i.v4)(),
          step: e,
          ...(t === void 0 ? {} : { start: t }),
        });
      }
    };
  }),
  Kt = r((e, t) => {
    ((t.path = `chatgpt_finance_connections/src/FinanceAccountLinkingFlowComponent`),
      Object.defineProperty(e, "__esModule", { value: !0 }),
      (e.FinanceAccountLinkingFlowComponent = void 0));
    var n = z().getValdiRuntime(),
      r = B().jsx,
      i = r.makeComponentPrototype(void 0, `BaLN7YWS3K3Pgh45`),
      a = r.makeNodePrototype(`view`, [`accessibilityId`, `finance-account-linking`], `_CyTxVONgLRlQvrG`),
      o = r.makeComponentPrototype(void 0, `uLA9BU4pFjY2--He`),
      s = r.makeComponentPrototype(void 0, `C7lhbFMQBZgkbvCM`),
      c = r.makeComponentPrototype(void 0, `KHtAcLyF0LiSzgSC`),
      l = ke(),
      u = q(),
      d = Ve(),
      f = ct(),
      p = Be(),
      m = lt(),
      h = Re(),
      g = ut(),
      _ = Te(),
      v = H(),
      y = U(),
      b = ce(),
      x = le(),
      S = V(),
      C = z(),
      w = Ie(),
      T = dt(),
      E = ft(),
      D = mt(),
      O = Z(),
      k = Bt(),
      A = Vt(),
      ee = Ht(),
      te = Ut(),
      j = Wt(),
      ne = Gt(),
      M = Lt(),
      N = je(),
      re = { flagName: `3788389430` },
      P = { flagName: `3966137303` },
      ie = 30,
      ae = 54,
      oe = `https://help.openai.com/en/articles/20001222-finances-in-chatgpt`,
      F = `https://www.experian.com/help/contact/`;
    e.FinanceAccountLinkingFlowComponent = class extends y.StatefulComponent {
      constructor() {
        (super(...arguments),
          (this.hideTabs = !this.isFirstPartyAccountLinkingEnabled()),
          (this.requestedCredit = this.viewModel.initialTab === T.FinanceAccountLinkingTab.CreditScore),
          (this.state = {
            isOpeningAccountChat: !1,
            connectedInstitutions: void 0,
            isLaunchingPlaid: !1,
            creditEligibility: void 0,
            creditScore: void 0,
            hasCreditStatusLoadError: !1,
            isConnectingAccounts: !1,
            isVerifyingCredit: !1,
            selectedTab: I(this.viewModel.initialTab, this.supportsManualAccountChat),
          }),
          (this.connectorAuthorization = new ee.FinanceConnectorAuthorization()),
          (this.creditStatusPollCount = 0),
          (this.financeApiService = this.platformServices?.apiService),
          (this.hasDismissed = !1),
          (this.hasStartedAccountChat = !1),
          (this.metrics = new O.FinanceAccountLinkingMetrics(this.state.selectedTab)),
          (this.metricsRenderGeneration = 0),
          (this.nextLinkingSession = 0),
          (this.nextAccountChatAttempt = 0),
          (this.selectTab = (e) => {
            if (
              (e === T.FinanceAccountLinkingTab.CreditScore && !this.canShowCredit) ||
              e === this.state.selectedTab
            )
              return;
            (e === T.FinanceAccountLinkingTab.Accounts && this.startAccountLinkingJourney(),
              this.cancelAccountChat(),
              this.activeLinkingSession !== void 0 && this.cancelAccountLinking());
            let t = this.clearCreditVerificationWork();
            ((this.creditVerificationContext = void 0),
              this.setState({
                ...this.state,
                isLaunchingPlaid: !1,
                creditEligibility: void 0,
                creditScore: void 0,
                hasCreditStatusLoadError: !1,
                isConnectingAccounts: !1,
                isVerifyingCredit: !1,
                selectedTab: e,
              }),
              this.closeCreditVerification(t));
          }),
          (this.openCreditLearnMore = () => {
            try {
              w.platformBrowser.openURL(oe);
            } catch {
              n.isLoggingEnabled && console.warn(`Finance credit could not open its Learn more URL`);
            }
          }),
          (this.openCreditSupport = () => {
            try {
              w.platformBrowser.openURL(F);
            } catch {
              n.isLoggingEnabled && console.warn(`Finance credit could not open its Experian contact URL`);
            }
          }),
          (this.dismiss = () => {
            ((this.hasDismissed = !0), this.cancelAccountChat(), this.cancelAccountLinking());
            let e = this.clearCreditVerificationWork();
            ((this.creditVerificationContext = void 0),
              this.platformServices?.apiService !== this.financeApiService &&
                this.setState({
                  ...this.state,
                  connectedInstitutions: void 0,
                  isLaunchingPlaid: !1,
                  creditEligibility: void 0,
                  creditScore: void 0,
                  isConnectingAccounts: !1,
                  isVerifyingCredit: !1,
                }),
              this.closeCreditVerification(e),
              this.context?.host?.dismiss());
          }),
          (this.restartAccountLinking = () => {
            this.isCurrentFlowOwner() &&
              (this.cancelAccountChat(),
              this.cancelAccountLinking(),
              this.setState({
                ...this.state,
                connectedInstitutions: void 0,
                isLaunchingPlaid: !1,
                isConnectingAccounts: !1,
                isVerifyingCredit: !1,
                selectedTab: T.FinanceAccountLinkingTab.Accounts,
              }));
          }),
          (this.openPlaid = () => {
            if (
              this.isCurrentFlowOwner() &&
              this.state.selectedTab === T.FinanceAccountLinkingTab.Accounts &&
              this.state.connectedInstitutions === void 0 &&
              this.activeLinkingSession === void 0 &&
              (0, b.isVersionAtLeast)(23)
            ) {
              let e = ++this.nextLinkingSession;
              ((this.activeLinkingSession = e),
                this.setState({ ...this.state, isLaunchingPlaid: !0 }),
                this.launchPlaidWhenReady(e));
            }
          }),
          (this.openManualAccountChat = (e, t) => {
            this.openAccountChat(T.FinanceAccountLinkingTab.ManualAccounts, e, t);
          }),
          (this.openCreditScoreChat = () => {
            this.isCurrentFlowOwner() &&
              this.canOpenCreditScoreChat &&
              this.openAccountChat(
                T.FinanceAccountLinkingTab.CreditScore,
                `credit_score`,
                N.default.financeAccountLinkingCreditScoreChatPrompt(),
              );
          }),
          (this.retryCreditStatus = () => {
            if (
              (this.synchronizeFlowContext(),
              !(
                this.hasDismissed ||
                this.state.selectedTab !== T.FinanceAccountLinkingTab.CreditScore ||
                this.activeCreditEligibilityRequest !== void 0 ||
                this.activeCreditVerification !== void 0
              ))
            ) {
              if (
                this.creditVerificationContext?.pendingVerificationId !== void 0 &&
                !this.creditVerificationContext.isReportPreparing
              ) {
                this.startCreditVerification();
                return;
              }
              (this.clearCreditVerificationWork(),
                this.setState({
                  ...this.state,
                  creditEligibility: void 0,
                  creditScore: void 0,
                  hasCreditStatusLoadError: !1,
                }));
            }
          }),
          (this.startCreditVerification = () => {
            this.synchronizeFlowContext();
            let e = this.creditVerificationContext;
            if (e === void 0 || !this.isCreditVerificationAllowed || this.activeCreditVerification !== void 0)
              return;
            (this.clearCreditVerificationWork(),
              (e.pendingVerificationId = (0, h.normalizeFinanceCreditVerificationId)(
                e.pendingVerificationId,
              )),
              e.pendingVerificationId === void 0 || e.funnel === void 0
                ? ((e.funnel = new ne.FinanceCreditVerificationFunnel(this.financeApi)),
                  e.funnel.start(this.linkingEntrypoint))
                : e.funnel.record(f.FinanceCreditFunnelStep.CompletionRetryRequested),
              (e.copy = void 0));
            let t = { context: e, funnel: e.funnel, isProviderRunning: !1 };
            ((this.activeCreditVerification = t),
              this.setState({ ...this.state, hasCreditStatusLoadError: !1, isVerifyingCredit: !0 }),
              this.launchCreditVerification(t));
          }),
          (this.isCurrentFlowOwner = () =>
            this.hasDismissed
              ? !1
              : this.platformServices?.apiService === this.financeApiService || (this.dismiss(), !1)));
      }
      onCreate() {
        (this.metrics.record(O.FinanceAccountLinkingCheckpoint.AppStarted),
          this.reportCreditRoute(O.FinanceAccountLinkingCheckpoint.CreditRequested));
        let e = this.platformServices,
          t = this.financeApiService;
        if (this.context?.host === void 0 || e === void 0 || t === void 0)
          throw Error(`Finance account linking requires an authenticated platform host`);
        (0, b.isVersionAtLeast)(66) &&
          (this.connectorAuthorizationHost = this.context.connectorAuthorizationHost);
        let n = new d.AuthenticatedFinanceApi({ ...e, apiService: t });
        ((this.financeApi = n),
          (this.creditVerificationRepository = new g.FinanceCreditVerificationRepository(n)),
          this.state.selectedTab === T.FinanceAccountLinkingTab.Accounts &&
            this.startAccountLinkingJourney());
      }
      onDestroy() {
        ((this.hasDismissed = !0), this.cancelAccountChat());
        let e = this.clearCreditVerificationWork();
        ((this.creditVerificationContext = void 0),
          this.cancelAccountLinking(),
          this.closeCreditVerification(e));
      }
      onRender() {
        if ((this.synchronizeFlowContext(), this.hasDismissed)) return;
        let e = this.canShowCredit,
          t = this.supportsManualAccountChat,
          n = this.creditVerificationState,
          l = [
            {
              label: N.default.financeAccountLinkingTabAccounts(),
              value: T.FinanceAccountLinkingTab.Accounts,
            },
          ];
        (e &&
          l.push({
            label: N.default.financeAccountLinkingTabCreditScore(),
            value: T.FinanceAccountLinkingTab.CreditScore,
          }),
          t &&
            l.push({
              label: N.default.financeAccountLinkingTabManualAccounts(),
              value: T.FinanceAccountLinkingTab.ManualAccounts,
            }),
          r.beginComponent(_.OAITheme, i, void 0, void 0),
          r.setViewModelProperty(`fill`, !0),
          r.setViewModelProperty(`mode`, this.themeMode),
          r.setUnnamedSlot(() => {
            (r.beginRender(a, void 0),
              r.setAttributeStyle(`style`, L.root),
              this.state.connectedInstitutions === void 0
                ? this.state.isConnectingAccounts
                  ? (r.beginComponent(A.FinanceAccountLinkingProgress, s, void 0, void 0),
                    r.setViewModelProperty(`onDismiss`, this.dismiss),
                    r.endComponent())
                  : (r.beginComponent(k.FinanceAccountLinkingPicker, c, void 0, void 0),
                    r.setViewModelProperty(`accountsTab`, T.FinanceAccountLinkingTab.Accounts),
                    r.setViewModelProperty(`isLaunchingPlaid`, this.state.isLaunchingPlaid),
                    r.setViewModelProperty(`creditScore`, this.state.creditScore),
                    r.setViewModelProperty(`creditScoreTab`, T.FinanceAccountLinkingTab.CreditScore),
                    r.setViewModelProperty(`creditCopy`, this.creditVerificationCopy),
                    r.setViewModelProperty(`creditVerificationState`, n),
                    r.setViewModelProperty(`hasCreditStatusLoadError`, this.state.hasCreditStatusLoadError),
                    r.setViewModelProperty(
                      `hasReachedCreditStatusPollLimit`,
                      this.creditStatusPollCount >= ae,
                    ),
                    r.setViewModelProperty(
                      `isLoadingCreditStatus`,
                      this.state.creditEligibility === void 0 &&
                        this.creditVerificationContext?.reportStatus === void 0 &&
                        this.creditVerificationContext?.copy === void 0 &&
                        !this.state.hasCreditStatusLoadError,
                    ),
                    r.setViewModelProperty(`isVerifyingCredit`, this.state.isVerifyingCredit),
                    r.setViewModelProperty(
                      `manualAccountsTab`,
                      t ? T.FinanceAccountLinkingTab.ManualAccounts : void 0,
                    ),
                    r.setViewModelProperty(`onCreditLearnMore`, this.openCreditLearnMore),
                    r.setViewModelProperty(`onCreditSupport`, this.openCreditSupport),
                    r.setViewModelProperty(
                      `onCreditScoreChat`,
                      this.canOpenCreditScoreChat ? this.openCreditScoreChat : void 0,
                    ),
                    r.setViewModelProperty(`isOpeningAccountChat`, this.state.isOpeningAccountChat),
                    r.setViewModelProperty(`onCreditVerification`, this.startCreditVerification),
                    r.setViewModelProperty(`onDismiss`, this.dismiss),
                    r.setViewModelProperty(`onContinueToPlaid`, this.openPlaid),
                    r.setViewModelProperty(
                      `onManualAccountSelected`,
                      t ? this.openManualAccountChat : void 0,
                    ),
                    r.setViewModelProperty(`onRetryCreditStatus`, this.retryCreditStatus),
                    r.setViewModelProperty(`onTabSelected`, this.selectTab),
                    r.setViewModelProperty(`selectedTab`, this.state.selectedTab),
                    r.setViewModelProperty(`tabOptions`, this.hideTabs ? [] : l),
                    r.endComponent())
                : (r.beginComponent(E.FinanceAccountLinkingConfirmation, o, void 0, void 0),
                  r.setViewModelProperty(`institutions`, this.state.connectedInstitutions),
                  r.setViewModelProperty(`onContinue`, this.restartAccountLinking),
                  r.endComponent()),
              r.endRender());
          }),
          r.endComponent(),
          this.reportRenderedCheckpoints());
      }
      reportRenderedCheckpoints() {
        let e = ++this.metricsRenderGeneration,
          t = this.state,
          { connectedInstitutions: n, isConnectingAccounts: r } = t,
          i = t.selectedTab === T.FinanceAccountLinkingTab.Accounts && n === void 0 && !r;
        this.renderer.onRenderComplete(() => {
          this.hasDismissed ||
            e !== this.metricsRenderGeneration ||
            t !== this.state ||
            this.platformServices?.apiService !== this.financeApiService ||
            (this.metrics.record(O.FinanceAccountLinkingCheckpoint.InitialRender),
            i &&
              (this.accountFunnel.recordPickerState(!1),
              this.metrics.record(O.FinanceAccountLinkingCheckpoint.PickerReady)));
        });
      }
      get themeMode() {
        return this.viewModel.isDarkMode === void 0
          ? _.OAIThemeMode.System
          : this.viewModel.isDarkMode
            ? _.OAIThemeMode.Dark
            : _.OAIThemeMode.Light;
      }
      openAccountChat(e, t, n) {
        if ((0, b.isVersionAtLeast)(68)) {
          let r = this.context?.host,
            i = this.context?.manualAccountChatHost;
          if (
            r === void 0 ||
            i === void 0 ||
            this.hasDismissed ||
            this.state.selectedTab !== e ||
            this.activeAccountChatAttempt !== void 0 ||
            this.hasStartedAccountChat
          )
            return;
          if (e === T.FinanceAccountLinkingTab.ManualAccounts && this.connectorAuthorizationHost !== void 0) {
            let a = ++this.nextAccountChatAttempt;
            ((this.activeAccountChatAttempt = a),
              this.setState({ ...this.state, isOpeningAccountChat: !0 }),
              this.openAccountChatWhenAuthorized(a, r, i, e, t, n));
            return;
          }
          this.handOffAccountChat(i, t, n);
        }
      }
      async openAccountChatWhenAuthorized(e, t, r, i, a, o) {
        try {
          await this.authorizeFinanceConnection();
        } catch (t) {
          if (this.activeAccountChatAttempt !== e) return;
          ((this.activeAccountChatAttempt = void 0),
            this.setState({ ...this.state, isOpeningAccountChat: !1 }),
            t instanceof m.FinanceAccountLinkingCancelledError ||
              (n.isLoggingEnabled && console.warn(`Finance account chat could not start`)));
          return;
        }
        this.activeAccountChatAttempt !== e ||
          this.hasDismissed ||
          this.state.selectedTab !== i ||
          this.context?.host !== t ||
          this.context?.manualAccountChatHost !== r ||
          ((this.activeAccountChatAttempt = void 0), this.handOffAccountChat(r, a, o));
      }
      handOffAccountChat(e, t, r) {
        this.hasStartedAccountChat = !0;
        try {
          x.Device.isIOS() && !x.Device.isWeb()
            ? (0, C.getValdiRuntime)().callOnMainThread(e.openManualAccountChat, [t, r])
            : e.openManualAccountChat(t, r);
        } catch {
          n.isLoggingEnabled && console.warn(`Finance account chat could not be handed to its host`);
        }
      }
      cancelAccountChat() {
        let e = this.activeAccountChatAttempt;
        ((this.activeAccountChatAttempt = void 0),
          !this.hasDismissed &&
            this.state.isOpeningAccountChat &&
            this.setState({ ...this.state, isOpeningAccountChat: !1 }),
          e !== void 0 && this.connectorAuthorization.cancel());
      }
      synchronizeFlowContext() {
        if (!this.isCurrentFlowOwner()) return;
        let e = this.isCreditDiscoveryEnabled;
        if (
          (e || this.reportCreditRoute(O.FinanceAccountLinkingCheckpoint.CreditDiscoveryUnavailable),
          !this.requestedCredit &&
            !e &&
            this.state.selectedTab === T.FinanceAccountLinkingTab.CreditScore &&
            this.selectTab(T.FinanceAccountLinkingTab.Accounts),
          this.state.selectedTab !== T.FinanceAccountLinkingTab.CreditScore)
        )
          return;
        let t = (0, b.isVersionAtLeast)(48) ? this.creditVerificationHost : void 0,
          n = this.creditVerificationContext;
        if (n !== void 0 && (n.host !== t || n.discoveryEnabled !== e)) {
          let r = this.clearCreditVerificationWork();
          ((n = t === void 0 ? void 0 : { host: t, discoveryEnabled: e }),
            (this.creditVerificationContext = n),
            this.setState({
              ...this.state,
              creditEligibility: void 0,
              creditScore: void 0,
              hasCreditStatusLoadError: !1,
              isVerifyingCredit: !1,
            }),
            this.closeCreditVerification(r));
        }
        if (t === void 0) {
          this.reportCreditRoute(O.FinanceAccountLinkingCheckpoint.CreditUpdateRequired);
          return;
        }
        (n === void 0 && ((n = { host: t, discoveryEnabled: e }), (this.creditVerificationContext = n)),
          this.state.creditEligibility === void 0 &&
            n.reportStatus === void 0 &&
            n.copy === void 0 &&
            !this.state.hasCreditStatusLoadError &&
            this.refreshCreditConnection(n));
      }
      isCurrentCreditContext(e) {
        return (
          !this.hasDismissed &&
          this.creditVerificationContext === e &&
          this.state.selectedTab === T.FinanceAccountLinkingTab.CreditScore &&
          (0, b.isVersionAtLeast)(48) &&
          e.host === this.creditVerificationHost &&
          e.discoveryEnabled === this.isCreditDiscoveryEnabled &&
          (this.requestedCredit || e.discoveryEnabled)
        );
      }
      async refreshCreditConnection(e) {
        if (!this.isCurrentFlowOwner()) return;
        let t = await this.loadCreditEligibility(e);
        t !== void 0 &&
          (t.connectionStatus === h.FinanceCreditVerificationConnectionStatus.Connected &&
            t.reportStatus === void 0 &&
            !t.pendingDeletion &&
            (this.notifyCreditVerificationCompleted(
              e,
              h.FinanceCreditVerificationStatus.Connected,
              t.retryable,
            ),
            this.loadCreditScore(e)),
          this.scheduleCreditStatusPoll(e));
      }
      async loadCreditEligibility(e) {
        if (!this.isCurrentCreditContext(e)) {
          !this.hasDismissed && this.creditVerificationContext === e && this.synchronizeFlowContext();
          return;
        }
        let t = this.creditVerificationRepository;
        if (
          t === void 0 ||
          this.state.selectedTab !== T.FinanceAccountLinkingTab.CreditScore ||
          this.activeCreditEligibilityRequest !== void 0 ||
          this.activeCreditVerification !== void 0
        )
          return;
        let r = t.eligibility();
        this.activeCreditEligibilityRequest = r;
        let i;
        try {
          if (((i = await r), i.connectionStatus === h.FinanceCreditVerificationConnectionStatus.Unknown))
            throw Error(`Finance credit connection returned an unsupported status`);
        } catch (t) {
          this.acceptCreditEligibilityResult(e, r) &&
            (t instanceof m.FinanceAccountLinkingCancelledError ||
              (n.isLoggingEnabled && console.warn(`Finance credit verification status could not be loaded`)),
            this.reportCreditRoute(O.FinanceAccountLinkingCheckpoint.CreditReadFailed),
            this.failCreditStatus());
          return;
        }
        if (this.acceptCreditEligibilityResult(e, r))
          return (
            this.reportCreditRoute(
              i.pendingDeletion
                ? O.FinanceAccountLinkingCheckpoint.CreditUnavailable
                : i.connectionStatus === h.FinanceCreditVerificationConnectionStatus.Connected
                  ? O.FinanceAccountLinkingCheckpoint.CreditConnected
                  : i.connectionStatus === h.FinanceCreditVerificationConnectionStatus.Pending
                    ? O.FinanceAccountLinkingCheckpoint.CreditPending
                    : O.FinanceAccountLinkingCheckpoint.CreditNotConnected,
            ),
            (e.reportStatus = i.reportStatus),
            (i.pendingDeletion || e.reportStatus !== void 0) &&
              ((e.pendingVerificationId = void 0), (e.copy = void 0)),
            (e.isReportPreparing =
              !i.pendingDeletion &&
              e.reportStatus === void 0 &&
              i.connectionStatus === h.FinanceCreditVerificationConnectionStatus.Pending &&
              i.retryable),
            this.setState({
              ...this.state,
              creditEligibility: i,
              creditScore: void 0,
              hasCreditStatusLoadError: !1,
            }),
            i
          );
      }
      async loadCreditScore(e) {
        let t = this.financeApi;
        if (
          t === void 0 ||
          this.activeCreditScoreTask !== void 0 ||
          !this.isCurrentFlowOwner() ||
          !this.isCurrentCreditContext(e)
        )
          return;
        let r = t.creditScore();
        this.activeCreditScoreTask = r;
        let i;
        try {
          i = await r.result;
        } catch {
          this.acceptCreditScoreResult(e, r) &&
            n.isLoggingEnabled &&
            console.warn(`Finance connected credit score could not be loaded`);
          return;
        }
        this.acceptCreditScoreResult(e, r) && this.setState({ ...this.state, creditScore: i?.scoreValue });
      }
      acceptCreditScoreResult(e, t) {
        return this.activeCreditScoreTask !== t ||
          ((this.activeCreditScoreTask = void 0), !this.isCurrentFlowOwner())
          ? !1
          : this.isCurrentCreditContext(e)
            ? !0
            : (this.synchronizeFlowContext(), !1);
      }
      acceptCreditEligibilityResult(e, t) {
        return this.activeCreditEligibilityRequest !== t ||
          ((this.activeCreditEligibilityRequest = void 0), !this.isCurrentFlowOwner())
          ? !1
          : this.isCurrentCreditContext(e)
            ? !0
            : (this.hasDismissed || this.synchronizeFlowContext(), !1);
      }
      scheduleCreditStatusPoll(e) {
        if (
          !this.isCurrentCreditContext(e) ||
          this.state.selectedTab !== T.FinanceAccountLinkingTab.CreditScore ||
          this.state.hasCreditStatusLoadError ||
          this.creditStatusPollTimer !== void 0 ||
          this.activeCreditEligibilityRequest !== void 0 ||
          this.activeCreditVerification !== void 0 ||
          e.reportStatus !== void 0 ||
          this.state.creditEligibility?.connectionStatus !==
            h.FinanceCreditVerificationConnectionStatus.Pending
        )
          return;
        if (this.creditStatusPollCount >= ae) {
          this.creditVerificationState === M.FinanceCreditVerificationState.Blocked &&
            (n.isLoggingEnabled && console.warn(`Finance credit verification status refresh timed out`),
            this.setState({ ...this.state, hasCreditStatusLoadError: !0 }));
          return;
        }
        let t = this.creditStatusPollCount < ie ? 2e3 : 1e4;
        this.creditStatusPollTimer = setTimeout(() => {
          ((this.creditStatusPollTimer = void 0),
            (this.creditStatusPollCount += 1),
            this.refreshCreditConnection(e));
        }, t);
      }
      failCreditStatus() {
        let e = this.clearCreditVerificationWork();
        (this.setState({
          ...this.state,
          creditEligibility: void 0,
          creditScore: void 0,
          hasCreditStatusLoadError: !0,
          isVerifyingCredit: !1,
        }),
          this.closeCreditVerification(e));
      }
      async launchCreditVerification(e) {
        if ((0, b.isVersionAtLeast)(63)) {
          let t = e.context,
            r = e.funnel,
            i,
            a = f.FinanceCreditFunnelStep.CompletionError;
          try {
            let o = this.creditVerificationRepository;
            if (o === void 0 || !this.isActiveCreditVerification(e)) return;
            let s = t.pendingVerificationId;
            if (s === void 0) {
              let i = (0, b.isVersionAtLeast)(66) && this.connectorAuthorizationHost !== void 0;
              if (
                ((a = f.FinanceCreditFunnelStep.AuthorizationFailed),
                await this.authorizeFinanceConnection(),
                !this.isActiveCreditVerification(e))
              )
                return;
              (i && r.record(f.FinanceCreditFunnelStep.AuthorizationSucceeded),
                (a = f.FinanceCreditFunnelStep.SessionStartFailed));
              let c = await o.start();
              if (!this.isActiveCreditVerification(e)) return;
              ((a = f.FinanceCreditFunnelStep.SdkError),
                r.record(f.FinanceCreditFunnelStep.SdkLaunchRequested),
                (e.isProviderRunning = !0));
              let l;
              if (
                ((l = (0, b.isVersionAtLeast)(125)
                  ? await t.host.runCreditVerification(
                      { environment: c.environment, ...j.FINANCE_CREDIT_VERIFICATION_SCRIPT },
                      c.verificationToken,
                      te.FINANCE_CREDIT_VERIFICATION_APPEARANCE,
                    )
                  : (0, b.isVersionAtLeast)(100)
                    ? await t.host.runCreditVerification(
                        c.environment,
                        c.verificationToken,
                        te.FINANCE_CREDIT_VERIFICATION_APPEARANCE,
                      )
                    : await t.host.runCreditVerification(c.environment, c.verificationToken)),
                (e.isProviderRunning = !1),
                !this.isActiveCreditVerification(e))
              )
                return;
              if (l.kind === 1) {
                (r.record(f.FinanceCreditFunnelStep.SdkCancelled),
                  (t.copy = {
                    message: N.default.financeAccountLinkingCreditVerificationIncomplete(),
                    action: M.CreditCopyAction.ContinueVerification,
                  }));
                return;
              }
              if (
                ((s = (0, h.normalizeFinanceCreditVerificationId)(l.verificationId)),
                r.record(
                  l.kind === 2
                    ? f.FinanceCreditFunnelStep.SdkFailed
                    : l.kind === 0 && s !== void 0
                      ? f.FinanceCreditFunnelStep.SdkVerified
                      : f.FinanceCreditFunnelStep.SdkError,
                ),
                s === void 0)
              ) {
                ((t.copy = {
                  message: N.default.financeAccountLinkingCreditVerificationError(),
                  action: M.CreditCopyAction.RetryVerification,
                }),
                  n.isLoggingEnabled &&
                    console.warn(`Finance credit verification provider reported an error`));
                return;
              }
              t.pendingVerificationId = s;
            }
            a = f.FinanceCreditFunnelStep.CompletionError;
            let c = await o.complete(s, r.flowId);
            if (!this.isActiveCreditVerification(e)) return;
            if ((r.record(se(c.status)), c.status === h.FinanceCreditVerificationStatus.Unknown)) {
              n.isLoggingEnabled &&
                console.warn(`Finance credit verification returned an unsupported result`);
              return;
            }
            switch (
              ((t.reportStatus = c.reportStatus),
              (c.status !== h.FinanceCreditVerificationStatus.Pending || c.reportStatus !== void 0) &&
                (t.pendingVerificationId = void 0),
              (t.isReportPreparing =
                c.reportStatus === void 0 &&
                c.status === h.FinanceCreditVerificationStatus.Pending &&
                c.retryable),
              c.status)
            ) {
              case h.FinanceCreditVerificationStatus.Failed:
                t.copy = {
                  message: c.requiresBureauContact
                    ? N.default.financeAccountLinkingCreditVerificationBureauContact()
                    : N.default.financeAccountLinkingCreditVerificationFailed(),
                  action: c.requiresBureauContact ? void 0 : M.CreditCopyAction.ContactExperian,
                };
                break;
              case h.FinanceCreditVerificationStatus.Expired:
                t.copy = {
                  message: N.default.financeAccountLinkingCreditVerificationExpired(),
                  action: M.CreditCopyAction.RetryVerification,
                };
                break;
              case h.FinanceCreditVerificationStatus.RequiresAction:
                t.copy = {
                  message: N.default.financeAccountLinkingCreditVerificationIncomplete(),
                  action: M.CreditCopyAction.ContinueVerification,
                };
            }
            i = c;
          } catch (i) {
            if (this.isActiveCreditVerification(e)) {
              let e = i instanceof m.FinanceAccountLinkingCancelledError;
              (e && a === f.FinanceCreditFunnelStep.AuthorizationFailed
                ? r.record(f.FinanceCreditFunnelStep.AuthorizationCancelled)
                : e || r.record(a),
                e ||
                  ((t.copy = {
                    message: N.default.financeAccountLinkingCreditVerificationError(),
                    action: M.CreditCopyAction.RetryVerification,
                  }),
                  n.isLoggingEnabled && console.warn(`Finance credit verification could not be completed`)));
            }
            return;
          } finally {
            if (this.activeCreditVerification === e) {
              let e = this.clearCreditVerificationWork();
              (this.setState({
                ...this.state,
                creditEligibility:
                  t.copy === void 0 && t.reportStatus === void 0 ? void 0 : this.state.creditEligibility,
                creditScore: void 0,
                hasCreditStatusLoadError: t.pendingVerificationId !== void 0 && i === void 0,
                isVerifyingCredit: !1,
              }),
                this.closeCreditVerification(e));
            }
          }
          i !== void 0 &&
            i.reportStatus === void 0 &&
            (i.status === h.FinanceCreditVerificationStatus.Connected ||
              i.status === h.FinanceCreditVerificationStatus.Pending) &&
            this.isCurrentCreditContext(e.context) &&
            (this.notifyCreditVerificationCompleted(e.context, i.status, i.retryable),
            this.refreshCreditConnection(e.context));
        }
      }
      notifyCreditVerificationCompleted(e, t, r) {
        if (
          (0, b.isVersionAtLeast)(48) &&
          this.isCurrentFlowOwner() &&
          this.isCurrentCreditContext(e) &&
          (t !== h.FinanceCreditVerificationStatus.Connected || !e.hasNotifiedConnected)
        ) {
          t === h.FinanceCreditVerificationStatus.Connected && (e.hasNotifiedConnected = !0);
          try {
            e.host.onCreditVerificationCompleted(t, r);
          } catch {
            n.isLoggingEnabled &&
              console.warn(`Finance credit verification result could not be delivered to its host`);
          }
        }
      }
      isActiveCreditVerification(e) {
        if (this.activeCreditVerification !== e) return !1;
        if (
          !this.isCurrentFlowOwner() ||
          !this.isCurrentCreditContext(e.context) ||
          this.state.selectedTab !== T.FinanceAccountLinkingTab.CreditScore
        ) {
          e.context.pendingVerificationId = void 0;
          let t = this.clearCreditVerificationWork();
          return (
            this.setState({ ...this.state, isVerifyingCredit: !1 }),
            this.closeCreditVerification(t),
            !1
          );
        }
        return !0;
      }
      clearCreditVerificationWork() {
        let e = this.activeCreditVerification;
        ((this.activeCreditVerification = void 0),
          this.creditStatusPollTimer !== void 0 &&
            (clearTimeout(this.creditStatusPollTimer), (this.creditStatusPollTimer = void 0)),
          (this.activeCreditEligibilityRequest = void 0));
        let t = this.activeCreditScoreTask;
        return (
          (this.activeCreditScoreTask = void 0),
          t?.cancel(),
          this.creditVerificationRepository?.cancel(),
          (this.creditStatusPollCount = 0),
          e !== void 0 && this.connectorAuthorization.cancel(),
          e
        );
      }
      closeCreditVerification(e) {
        if (e?.isProviderRunning && (0, b.isVersionAtLeast)(60))
          try {
            e.context.host.closeCreditVerification?.();
          } catch {
            n.isLoggingEnabled && console.warn(`Finance credit verification provider could not be closed`);
          }
      }
      startAccountLinkingJourney() {
        (this.cancelAccountLinking(),
          (this.accountFunnel = new D.FinanceAccountLinkingFunnel(this.financeApi)),
          (this.accountLinkingRepository = new m.FinanceAccountLinkingRepository(this.financeApi, {
            flowId: this.accountFunnel.flowId,
            platform: this.accountLinkingPlatform(),
            androidPackageName: this.androidPackageName,
          })),
          this.accountFunnel.start());
      }
      async launchPlaidWhenReady(e) {
        let t = this.context?.host,
          r = this.accountLinkingRepository;
        if (t !== void 0 && r !== void 0 && this.isActiveSession(e))
          try {
            if ((await this.authorizeFinanceConnection(), !this.isActiveSession(e))) return;
            let n = await r.session();
            if (!this.isActiveSession(e)) return;
            (0, b.isVersionAtLeast)(23) &&
              (this.metrics.record(O.FinanceAccountLinkingCheckpoint.PlaidLaunchRequested),
              this.accountFunnel.record(f.FinanceFunnelStep.PlaidLaunchRequested),
              t.openPlaidLink(
                n.linkToken,
                { oauthStateId: n.oauthStateId, financeKitSyncBehavior: n.financeKitSyncBehavior },
                {
                  onSuccess: (t) => {
                    this.finishPlaidLink(e, n, t);
                  },
                  onExit: () => {
                    (this.isActiveSession(e) &&
                      (this.metrics.record(O.FinanceAccountLinkingCheckpoint.PlaidExited),
                      this.accountFunnel.record(f.FinanceFunnelStep.PlaidExit)),
                      this.exitAccountLinking(e));
                  },
                },
              ));
          } catch (t) {
            if (!this.isActiveSession(e)) return;
            (t instanceof m.FinanceAccountLinkingCancelledError ||
              (this.metrics.record(O.FinanceAccountLinkingCheckpoint.LinkFailed),
              this.accountFunnel.record(f.FinanceFunnelStep.LinkFailed),
              n.isLoggingEnabled && console.warn(`Finance account linking could not start`, { error: t })),
              this.exitAccountLinking(e));
          }
      }
      async finishPlaidLink(e, t, r) {
        let i = this.accountLinkingRepository;
        if (i !== void 0 && this.isActiveSession(e)) {
          (this.accountFunnel.record(f.FinanceFunnelStep.PlaidSuccess),
            this.setState({ ...this.state, isConnectingAccounts: !0 }));
          try {
            let n = await i.complete(t, r);
            this.isActiveSession(e) && this.finishAccountLinking(e, n);
          } catch (t) {
            this.isActiveSession(e) &&
              (t instanceof m.FinanceAccountLinkingCancelledError ||
                (this.metrics.record(O.FinanceAccountLinkingCheckpoint.LinkFailed),
                this.accountFunnel.record(f.FinanceFunnelStep.LinkFailed),
                n.isLoggingEnabled &&
                  console.warn(`Finance account-linking confirmation failed`, { error: t })),
              this.exitAccountLinking(e));
          }
        }
      }
      captureAccountsLinkedResult() {
        try {
          let e = this.context?.platformServices,
            t = { flowId: this.accountFunnel.flowId, resultId: (0, u.v4)() };
          return () => {
            !this.isDestroyed() && this.isCurrentFlowOwner() && (0, l.trackFinanceAccountsLinkedResult)(e, t);
          };
        } catch {
          n.isLoggingEnabled && console.warn(`Finance Accounts linking-result setup failed`);
          return;
        }
      }
      finishAccountLinking(e, t) {
        if (!this.isActiveSession(e)) return;
        this.metrics.record(O.FinanceAccountLinkingCheckpoint.LinkCompleted);
        let n = this.captureAccountsLinkedResult();
        ((this.activeLinkingSession = void 0),
          this.accountLinkingRepository?.clearSession(),
          this.setState({
            ...this.state,
            connectedInstitutions: t,
            isLaunchingPlaid: !1,
            isConnectingAccounts: !1,
          }),
          n?.(),
          (0, b.isVersionAtLeast)(23) &&
            this.context?.host?.onAccountsLinked(t.reduce((e, t) => e + t.accountCount, 0)));
      }
      exitAccountLinking(e) {
        this.activeLinkingSession === e &&
          ((this.activeLinkingSession = void 0),
          this.accountLinkingRepository?.clearSession(),
          this.setState({ ...this.state, isLaunchingPlaid: !1, isConnectingAccounts: !1 }));
      }
      isActiveSession(e) {
        return !this.hasDismissed && this.activeLinkingSession === e;
      }
      accountLinkingPlatform() {
        return x.Device.isWeb()
          ? p.FinanceAccountLinkingPlatform.Web
          : x.Device.isAndroid()
            ? p.FinanceAccountLinkingPlatform.Android
            : x.Device.isIOS()
              ? p.FinanceAccountLinkingPlatform.IOS
              : p.FinanceAccountLinkingPlatform.Web;
      }
      get androidPackageName() {
        if ((0, b.isVersionAtLeast)(20)) return this.viewModel.androidPackageName;
      }
      get platformServices() {
        if ((0, b.isVersionAtLeast)(23)) return this.context?.platformServices;
      }
      get linkingEntrypoint() {
        return (0, b.isVersionAtLeast)(218) ? this.viewModel.trackingContext?.entrypoint : void 0;
      }
      get creditVerificationHost() {
        if ((0, b.isVersionAtLeast)(63)) return this.context?.creditVerificationHost;
      }
      async authorizeFinanceConnection() {
        if ((0, b.isVersionAtLeast)(66) && this.connectorAuthorizationHost !== void 0) {
          let e = this.financeApiService;
          if (e === void 0)
            throw Error(`Finance connection authorization requires an authenticated platform host`);
          await this.connectorAuthorization.authorize(e, this.connectorAuthorizationHost);
        }
      }
      get creditVerificationCopy() {
        return this.state.creditEligibility?.requiresBureauContact
          ? { message: N.default.financeAccountLinkingCreditVerificationBureauContact() }
          : this.creditVerificationContext?.copy;
      }
      get creditVerificationState() {
        if (this.creditVerificationContext === void 0) return M.FinanceCreditVerificationState.UpdateRequired;
        let e = this.state.creditEligibility;
        if (e?.pendingDeletion) return M.FinanceCreditVerificationState.Blocked;
        switch (this.creditVerificationContext.reportStatus) {
          case h.FinanceCreditReportStatus.Failed:
            return M.FinanceCreditVerificationState.ReportFailed;
          case h.FinanceCreditReportStatus.Unknown:
            return M.FinanceCreditVerificationState.Blocked;
        }
        if (e === void 0)
          return this.creditVerificationContext?.copy === void 0
            ? M.FinanceCreditVerificationState.Blocked
            : M.FinanceCreditVerificationState.Available;
        switch (e.connectionStatus) {
          case h.FinanceCreditVerificationConnectionStatus.Connected:
            return M.FinanceCreditVerificationState.Connected;
          case h.FinanceCreditVerificationConnectionStatus.Pending:
            return e.retryable
              ? M.FinanceCreditVerificationState.Preparing
              : M.FinanceCreditVerificationState.Available;
          case h.FinanceCreditVerificationConnectionStatus.NotConnected:
            return M.FinanceCreditVerificationState.Available;
          case h.FinanceCreditVerificationConnectionStatus.Unknown:
            return M.FinanceCreditVerificationState.Blocked;
        }
      }
      get isCreditVerificationAllowed() {
        return (
          this.creditVerificationContext !== void 0 &&
          this.isCurrentCreditContext(this.creditVerificationContext) &&
          this.state.selectedTab === T.FinanceAccountLinkingTab.CreditScore &&
          (this.state.hasCreditStatusLoadError
            ? this.creditVerificationContext.pendingVerificationId !== void 0 &&
              !this.creditVerificationContext.isReportPreparing
            : this.creditVerificationState === M.FinanceCreditVerificationState.Available)
        );
      }
      isFirstPartyAccountLinkingEnabled() {
        try {
          return this.platformServices?.experimentService?.isFeatureFlagEnabled(P) === !0;
        } catch {
          return (
            n.isLoggingEnabled && console.warn(`Finance first-party account-linking flag could not be read`),
            !1
          );
        }
      }
      get canShowCredit() {
        return this.requestedCredit || this.isCreditDiscoveryEnabled;
      }
      reportCreditRoute(e) {
        this.requestedCredit && this.metrics.record(e);
      }
      get isCreditDiscoveryEnabled() {
        let e = this.platformServices?.experimentService;
        if (e === void 0) return (0, b.isVersionAtLeast)(48) && this.creditVerificationHost !== void 0;
        try {
          return e.isFeatureFlagEnabled(re) === !0;
        } catch {
          return !1;
        }
      }
      get supportsManualAccountChat() {
        return (0, b.isVersionAtLeast)(68) ? this.context?.manualAccountChatHost !== void 0 : !1;
      }
      get canOpenCreditScoreChat() {
        return this.supportsManualAccountChat && this.state.creditScore !== void 0;
      }
      cancelAccountLinking() {
        let e = this.activeLinkingSession;
        ((this.activeLinkingSession = void 0),
          this.accountLinkingRepository?.cancel(),
          e !== void 0 && this.connectorAuthorization.cancel());
      }
    };
    function se(e) {
      switch (e) {
        case h.FinanceCreditVerificationStatus.Connected:
          return f.FinanceCreditFunnelStep.CompletionConnected;
        case h.FinanceCreditVerificationStatus.Pending:
          return f.FinanceCreditFunnelStep.CompletionPending;
        case h.FinanceCreditVerificationStatus.Failed:
          return f.FinanceCreditFunnelStep.CompletionFailed;
        case h.FinanceCreditVerificationStatus.Expired:
          return f.FinanceCreditFunnelStep.CompletionExpired;
        case h.FinanceCreditVerificationStatus.RequiresAction:
          return f.FinanceCreditFunnelStep.CompletionRequiresAction;
        case h.FinanceCreditVerificationStatus.Unknown:
          return f.FinanceCreditFunnelStep.CompletionError;
      }
    }
    function I(e, t) {
      switch (e) {
        case T.FinanceAccountLinkingTab.CreditScore:
          return T.FinanceAccountLinkingTab.CreditScore;
        case T.FinanceAccountLinkingTab.ManualAccounts:
          return t ? T.FinanceAccountLinkingTab.ManualAccounts : T.FinanceAccountLinkingTab.Accounts;
        default:
          return T.FinanceAccountLinkingTab.Accounts;
      }
    }
    var L = {
      root: new S.Style({
        backgroundColor: v.OAIColor.BgPrimary,
        flexDirection: `column`,
        flexGrow: 1,
        height: `100%`,
        paddingTop: v.OAISpacing.Three,
        width: `100%`,
      }),
    };
  });
function qt(e) {
  let t = (0, $t.c)(40),
    {
      accountId: n,
      userId: r,
      authorize: i,
      signal: a,
      initialTab: l,
      returnTo: d,
      startOnboarding: f,
      onConnected: p,
      onClose: h,
    } = e,
    g = c(o),
    _ = u(),
    { isPending: y } = k(Fe, _.locale),
    x = s(),
    S = ie(),
    C = ae(),
    w = se(C),
    T;
  t[0] === w ? (T = t[1]) : ((T = () => w), (t[0] = w), (t[1] = T));
  let O = D(T),
    A = (0, tn.useRef)(null),
    ee;
  t[2] === a.aborted
    ? (ee = t[3])
    : ((ee = () => (a.aborted ? null : A.current)), (t[2] = a.aborted), (t[3] = ee));
  let te = D(ee),
    j;
  t[4] !== n ||
  t[5] !== i ||
  t[6] !== te ||
  t[7] !== O ||
  t[8] !== _ ||
  t[9] !== x ||
  t[10] !== h ||
  t[11] !== p ||
  t[12] !== d ||
  t[13] !== g ||
  t[14] !== a ||
  t[15] !== f ||
  t[16] !== S ||
  t[17] !== r
    ? ((j = () => {
        let e = () => {
            a.aborted || g.queryClient.invalidateQueries({ queryKey: [`personal-finance`, n] });
          },
          t,
          o,
          s = !1,
          c = it({
            getContainer: te,
            getTheme: O,
            runVerification: async (e) => {
              let t = await rt(e);
              return (t.verificationId != null && (s = !0), t);
            },
            label: _.formatMessage({
              id: `personalFinance.creditScoreLink.verificationLabel`,
              defaultMessage: `Experian identity verification`,
              description: `Accessible label for the provider-hosted identity verification form inside the Finances credit-score connection dialog`,
            }),
            onCompleted: (t, r) => {
              a.aborted ||
                (t !== `connected` && t !== `pending`) ||
                (g.query
                  .snapshot(re, n)
                  .setData((e) => (e == null ? e : { ...e, connection_status: t, retryable: r })),
                e(),
                s && p(`creditScore`));
            },
          });
        return {
          host: {
            dismiss: h,
            onAccountsLinked: () => {
              a.aborted || (e(), p(`accounts`));
            },
            openPlaidLink: (e, t, r) => {
              if (a.aborted) {
                r.onExit();
                return;
              }
              (o?.abort(), (o = new AbortController()));
              let i = AbortSignal.any([a, o.signal]);
              Ke(g, {
                accountId: n,
                linkToken: e,
                oauthStateId: t.oauthStateId,
                returnTo: d,
                startOnboarding: f,
                signal: i,
              })
                .catch(Zt)
                .then((e) => {
                  i.aborted || (e?.type === `completed` ? r.onSuccess(e.publicToken) : r.onExit());
                });
            },
          },
          manualAccountChatHost: {
            openManualAccountChat: (e, t) => {
              if (a.aborted) return;
              let i = new AbortController(),
                o = g.watch((e) => {
                  let { get: t } = e,
                    a = t(ne);
                  (a.authLoading ||
                    a.accountLoading ||
                    a.authenticatedAccountId !== n ||
                    a.authenticatedUserId !== r) &&
                    i.abort();
                });
              (h(),
                Ye(g, { accountId: n, prompt: t, signal: i.signal, requireServerConversation: !0 })
                  .catch(Xt)
                  .then((e) => {
                    i.signal.aborted ||
                      (e == null
                        ? g
                            .get(m)
                            .danger(
                              _.formatMessage({
                                id: `personalFinance.creditScoreLink.chatError`,
                                defaultMessage: `Your Finances chat couldn’t be started`,
                                description: `Error toast when a user chooses to discuss their credit score or add a manual account and the Finances chat cannot be started`,
                              }),
                              { errorAnalytics: { toastId: `personalFinance.creditScoreLink.chatError` } },
                            )
                        : x(E(e)));
                  })
                  .finally(o));
            },
          },
          creditVerificationHost: c,
          connectorAuthorizationHost: {
            async authorizeFinancesConnector() {
              t = new AbortController();
              let e = t,
                n = await i(e.signal).catch(Yt);
              return a.aborted || e.signal.aborted ? 1 : n ? 0 : 2;
            },
            cancelFinancesConnectorAuthorization: () => t?.abort(),
          },
          platformServices: {
            apiService: Ae({ accountId: n, userId: r, signal: a }),
            experimentService: Ue(S),
          },
        };
      }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = te),
      (t[7] = O),
      (t[8] = _),
      (t[9] = x),
      (t[10] = h),
      (t[11] = p),
      (t[12] = d),
      (t[13] = g),
      (t[14] = a),
      (t[15] = f),
      (t[16] = S),
      (t[17] = r),
      (t[18] = j))
    : (j = t[18]);
  let [M] = (0, tn.useState)(j),
    { closeCreditVerification: N } = M.creditVerificationHost,
    P,
    oe;
  (t[19] !== N || t[20] !== a
    ? ((P = () => {
        if (a.aborted) {
          N();
          return;
        }
        a.addEventListener(`abort`, N, { once: !0 });
        let e = Jt;
        return (
          window.addEventListener(`message`, e, { capture: !0, signal: a }),
          () => {
            (a.removeEventListener(`abort`, N), window.removeEventListener(`message`, e, !0));
          }
        );
      }),
      (oe = [N, a]),
      (t[19] = N),
      (t[20] = a),
      (t[21] = P),
      (t[22] = oe))
    : ((P = t[21]), (oe = t[22])),
    (0, tn.useEffect)(P, oe));
  let F;
  t[23] === _
    ? (F = t[24])
    : ((F = _.formatMessage({
        id: `personalFinance.creditScoreLink.dialog.title`,
        defaultMessage: `Connect finances`,
        description: `Accessible title for the Finance dialog where users connect bank accounts, credit scores, and manually added assets. Short dialog title.`,
      })),
      (t[23] = _),
      (t[24] = F));
  let I;
  t[25] === F
    ? (I = t[26])
    : ((I = {
        className: `overscroll-contain`,
        onWheel: Qt,
        onTouchMove: Qt,
        "aria-label": F,
        "aria-labelledby": void 0,
        "aria-describedby": void 0,
      }),
      (t[25] = F),
      (t[26] = I));
  let L;
  t[27] !== M || t[28] !== l || t[29] !== y || t[30] !== w
    ? ((L = y
        ? (0, nn.jsx)(b, { className: `icon-sm` })
        : (0, nn.jsx)(rn, {
            context: M,
            darkModeOverride: w === `dark`,
            hostProps: { className: `h-full min-h-0 w-full` },
            initialTab: l,
            isDarkMode: w === `dark`,
            limit: 20,
          })),
      (t[27] = M),
      (t[28] = l),
      (t[29] = y),
      (t[30] = w),
      (t[31] = L))
    : (L = t[31]);
  let ce;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, nn.jsx)(`div`, {
        ref: A,
        className: `absolute inset-0 z-10 overflow-auto bg-surface empty:hidden`,
      })),
      (t[32] = ce))
    : (ce = t[32]);
  let R;
  t[33] === L
    ? (R = t[34])
    : ((R = (0, nn.jsxs)(`div`, { className: `relative h-full pb-6`, children: [L, ce] })),
      (t[33] = L),
      (t[34] = R));
  let z;
  return (
    t[35] !== y || t[36] !== h || t[37] !== R || t[38] !== I
      ? ((z = (0, nn.jsx)(v, {
          open: !0,
          showDialogClose: y,
          size: `appLauncher`,
          widthHint: 600,
          contentProps: I,
          onOpenChange: h,
          children: R,
        })),
        (t[35] = y),
        (t[36] = h),
        (t[37] = R),
        (t[38] = I),
        (t[39] = z))
      : (z = t[39]),
    z
  );
}
function Jt(e) {
  return Ze(e);
}
function Yt() {
  return !1;
}
function Xt() {
  return null;
}
function Zt() {
  return null;
}
function Qt(e) {
  e.target instanceof Element &&
    e.target.closest(`[role="dialog"]`) === e.currentTarget &&
    e.stopPropagation();
}
var $t, en, tn, nn, rn;
function an() {
  return (an = t(() => {
    (($t = C()),
      st(),
      (en = Kt()),
      Ce(),
      l(),
      (tn = O()),
      g(),
      d(),
      I(),
      a(),
      S(),
      h(),
      _(),
      w(),
      oe(),
      L(),
      f(),
      De(),
      ze(),
      Ge(),
      We(),
      qe(),
      M(),
      Me(),
      (nn = T()),
      (rn = xe(en.FinanceAccountLinkingFlowComponent)));
  }))();
}
async function on(e, t) {
  return (await cn(e, t, !1))?.closed ?? !1;
}
async function sn(e, t) {
  return (await cn(e, { ...t, initialTab: `creditScore` }, !0)) != null;
}
async function cn(
  e,
  { accountId: t, signal: n, initialTab: r, returnTo: a, startOnboarding: o, onConversationStarted: s },
  c,
) {
  if (j(e, qt)) return;
  let { accountUserId: l, accountStructure: u, authenticatedUserId: d } = e.get(ne);
  if (l == null || d == null || n.aborted) return;
  let f = u === `personal` ? l.split(`__`)[0] : l,
    p = new AbortController(),
    m = i(),
    h = !1,
    g = !1,
    _ = !1,
    v = () => {
      p.signal.aborted ||
        (p.abort(), m.resolve(h && (c || !n.aborted)), n.removeEventListener(`abort`, v), g && N(e, qt));
    };
  c || n.addEventListener(`abort`, v, { once: !0 });
  let y = e.watch(({ get: e }) => {
    let n = e(ne);
    (n.authLoading ||
      n.accountLoading ||
      n.authenticatedAccountId !== t ||
      n.authenticatedUserId !== d ||
      n.accountUserId !== l) &&
      ((h = !1), v());
  });
  if ((p.signal.addEventListener(`abort`, y, { once: !0 }), p.signal.aborted)) {
    y();
    return;
  }
  let b = async (e) => {
    let { links: n } = await P.safePost(`/aip/connectors/links/list_accessible`, {
      requestBody: { principals: [], link_refresh_strategy: `NONE` },
      additionalHeaders: { "OAI-Product-Sku": `CONNECTOR_SETTING`, "ChatGPT-Account-ID": t },
      expectedIdentity: { accountId: t, userId: d },
      signal: AbortSignal.any([p.signal, e]),
    });
    return n.some(
      (e) =>
        e.connector_id === `connector_693864f100e4819093e6ed9b651239f1` &&
        e.auth_status === `ACTIVE` &&
        !e.id.startsWith(`implicit_link::`) &&
        e.owners.some((e) => e.type === `USER` && e.id === f),
    );
  };
  try {
    if (!(await b(n)) || n.aborted || p.signal.aborted || j(e, qt)) {
      v();
      return;
    }
    ((g = !0),
      te(e, qt, {
        accountId: t,
        userId: d,
        authorize: b,
        initialTab: r,
        returnTo: a,
        startOnboarding: o,
        onConnected: (n) => {
          ((h = !0),
            n === `accounts` &&
              o &&
              !_ &&
              ((_ = !0),
              Xe(e, { accountId: t, signal: p.signal, onConversationStarted: s })
                .then(v)
                .catch((e) => {
                  p.signal.aborted || (m.reject(e), v());
                })));
        },
        signal: p.signal,
        onClose: v,
      }));
    let i = e.watch((e) => {
      j(e, qt) || v();
    });
    return (p.signal.addEventListener(`abort`, i, { once: !0 }), { closed: m.promise });
  } catch (e) {
    let t = n.aborted || p.signal.aborted;
    if ((v(), t)) return;
    throw e;
  }
}
function ln() {
  return (ln = t(() => {
    (x(), I(), F(), ee(), an(), A(), Je());
  }))();
}
ln();
export { on as openPersonalFinanceAccountLinking, sn as openPersonalFinanceCreditScore };
//# sourceMappingURL=account-linking-12b6a2862f9e.js.map
