import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $c as n,
  A3t as r,
  AMt as i,
  Amn as a,
  B6t as o,
  Bq as s,
  CW as c,
  CYt as l,
  Cpn as u,
  D3t as d,
  DYt as f,
  Dd as p,
  F3t as m,
  FH as h,
  Fb as g,
  GKt as _,
  GW as v,
  Gq as y,
  IH as b,
  IXt as x,
  Ib as S,
  Iq as C,
  JK as w,
  JXt as T,
  KYt as E,
  M6t as D,
  MMt as O,
  N3t as k,
  N6t as A,
  O3t as j,
  Od as M,
  Opn as ee,
  P6t as N,
  QXt as P,
  Qc as F,
  SJt as te,
  Spn as I,
  TW as L,
  Uq as ne,
  WKt as R,
  Wq as re,
  Xdt as ie,
  Ys as ae,
  _Jt as z,
  _bt as B,
  _lt as V,
  a3t as oe,
  aR as se,
  aYt as H,
  bQt as ce,
  bbt as le,
  cR as U,
  ci as W,
  dJt as ue,
  dYt as de,
  e0t as fe,
  e4t as pe,
  eZt as G,
  fi as K,
  gbt as me,
  hmn as q,
  hz as J,
  i3t as he,
  iYt as ge,
  jMt as _e,
  jXt as ve,
  kMt as ye,
  kXt as be,
  kmn as xe,
  m1 as Se,
  m7t as Ce,
  mJt as we,
  mz as Te,
  o3t as Ee,
  oR as De,
  p1 as Oe,
  pJt as ke,
  pbt as Ae,
  qK as je,
  r3t as Me,
  s3t as Ne,
  sR as Pe,
  sYt as Fe,
  uJt as Ie,
  uYt as Le,
  ubt as Re,
  vQt as ze,
  vbt as Be,
  vs as Ve,
  wYt as He,
  xJt as Ue,
  xpn as We,
  yQt as Ge,
  ys as Ke,
} from "./app-initial-f094ef01c64d.js";
import { AS as qe, kS as Je, vd as Ye, yd as Xe } from "./app-primary-4c40d73a1074.js";
import { n as Ze, r as Qe, t as $e } from "./browser-session-queries-af80e2e8f50b.js";
import {
  a as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  t as at,
} from "./chatgpt-desktop-auth-url-2a0627f4c041.js";
import { n as ot, r as st } from "./login-handoff-page-9233440fb9a8.js";
import { n as ct } from "./page-layout-945837a6eba3.js";
import { r as lt } from "./session-c33967fa604f.js";
import { i as ut, n as dt, r as ft, t as pt } from "./use-ascii-engine-923490881fd3.js";
import { n as mt, t as ht } from "./onboarding-entrypoint-bf1d09b604e3.js";
import { n as gt, t as _t } from "./onboarding-login-content-cfb6f644e3a7.js";
var vt = e(() => {
    H();
  }),
  yt = e(() => {
    (xe(),
      K(),
      j(),
      a(),
      I(),
      i(),
      ie(),
      L(),
      Ke(),
      Xe(),
      P(),
      Ee(),
      H(),
      st(),
      ot(),
      vt(),
      ct(),
      lt(),
      q(),
      W.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE,
      W.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE,
      W.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT,
      W.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
      W.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE,
      We({
        google: {
          id: `browser.auth.login.google`,
          defaultMessage: `Continue with Google`,
          description: `Button on the ChatGPT browser login page that starts Google sign-in`,
        },
        apple: {
          id: `browser.auth.login.apple`,
          defaultMessage: `Continue with Apple`,
          description: `Button on the ChatGPT browser login page that starts Apple sign-in`,
        },
        microsoft: {
          id: `browser.auth.login.microsoft`,
          defaultMessage: `Continue with Microsoft`,
          description: `Button on the ChatGPT browser login page that starts Microsoft sign-in`,
        },
        email: {
          id: `browser.auth.login.continueWithEmail`,
          defaultMessage: `Continue with email`,
          description: `Button switching the browser login form from phone number entry to email address entry`,
        },
        phone_number: {
          id: `browser.auth.login.continueWithPhone`,
          defaultMessage: `Continue with phone`,
          description: `Button switching the browser login form from email address entry to phone number entry`,
        },
      }));
  });
function bt() {
  let e = (0, Y.c)(66),
    t = r(oe),
    n = Ae(),
    i = T(),
    a = ee(),
    [o, s] = (0, X.useState)(null),
    c = o != null,
    l = le(),
    [d, f] = (0, X.useState)(!1),
    [p, m] = (0, X.useState)(!1),
    [h, g] = (0, X.useState)(null),
    [_, v] = (0, X.useState)(``),
    [y, b] = (0, X.useState)(!1),
    x = (0, X.useRef)(null),
    S;
  e[0] !== a || e[1] !== t
    ? ((S = (e) => {
        let n = a.formatMessage(
          {
            id: `codex.signInFailed.message`,
            defaultMessage: `Sign-in failed: {rawMessage}`,
            description: `Sign-in failure toast message with error details`,
          },
          { rawMessage: e },
        );
        t.get(ve).warning(n);
      }),
      (e[0] = a),
      (e[1] = t),
      (e[2] = S))
    : (S = e[2]);
  let C = S,
    w,
    E;
  (e[3] === d
    ? ((w = e[4]), (E = e[5]))
    : ((w = () => {
        d && (x.current?.focus(), x.current?.select());
      }),
      (E = [d]),
      (e[3] = d),
      (e[4] = w),
      (e[5] = E)),
    (0, X.useEffect)(w, E));
  let D, O;
  (e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = !1;
        return (
          (async () => {
            try {
              let t = await ke(`openai-api-key`);
              if (e) return;
              let n = t?.value ?? null;
              (g(n), v((e) => (e.length > 0 ? e : (n ?? ``))));
            } catch {
              e || g(null);
            }
          })(),
          () => {
            e = !0;
          }
        );
      }),
      (O = []),
      (e[6] = D),
      (e[7] = O))
    : ((D = e[6]), (O = e[7])),
    (0, X.useEffect)(D, O));
  let k;
  e[8] !== o?.abortController ||
  e[9] !== c ||
  e[10] !== i ||
  e[11] !== t ||
  e[12] !== C ||
  e[13] !== n
    ? ((k = async () => {
        if (c) {
          (o?.abortController.abort(), s(null));
          return;
        }
        let e = new AbortController();
        (s({ abortController: e, kind: `browserRedirect` }),
          await (async () => {
            try {
              let { authUrl: r, completion: a } = await rt({ scope: t, signal: e.signal });
              r &&
                N({
                  href: at({
                    authUrl: r,
                    codexAppVersion: nt(t),
                    useDesktopAuth: !1,
                    useStreamlinedLoginUx: !1,
                  }),
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                });
              let o = await a;
              o.success ? (n(), i(`/first-run`)) : C(Ce(o.error ?? `Unknown error`));
            } catch (e) {
              let t = e;
              if (t instanceof Error && t.name === `AbortError`) return;
              C(Ce(t));
            }
          })().finally(() => {
            s(null);
          }));
      }),
      (e[8] = o?.abortController),
      (e[9] = c),
      (e[10] = i),
      (e[11] = t),
      (e[12] = C),
      (e[13] = n),
      (e[14] = k))
    : (k = e[14]);
  let A = k,
    j;
  e[15] !== o?.abortController ||
  e[16] !== c ||
  e[17] !== i ||
  e[18] !== t ||
  e[19] !== C ||
  e[20] !== n
    ? ((j = async () => {
        if (c) {
          (o?.abortController.abort(), s(null));
          return;
        }
        let e = new AbortController();
        (m(!0),
          s({ abortController: e, kind: `deviceCode` }),
          await (async () => {
            try {
              let {
                verificationUrl: r,
                userCode: a,
                completion: o,
              } = await et({ scope: t, signal: e.signal });
              if (e.signal.aborted) return;
              (s((t) => (t?.abortController === e ? { ...t, verificationUrl: r, userCode: a } : t)),
                N({
                  href: r,
                  initiator: `open_in_browser_bridge`,
                  openTarget: `external-browser`,
                }));
              let c = await o;
              c.success ? (n(), i(`/first-run`)) : C(Ce(c.error ?? `Unknown error`));
            } catch (e) {
              let t = e;
              if (t instanceof Error && t.name === `AbortError`) return;
              C(Ce(t));
            }
          })().finally(() => {
            s(null);
          }));
      }),
      (e[15] = o?.abortController),
      (e[16] = c),
      (e[17] = i),
      (e[18] = t),
      (e[19] = C),
      (e[20] = n),
      (e[21] = j))
    : (j = e[21]);
  let M = j,
    P;
  e[22] !== a || e[23] !== t
    ? ((P = async (e) => {
        e.length !== 0 &&
          (await Oe(e)) &&
          t.get(ve).success(
            a.formatMessage({
              id: `codex.loggedOut.deviceCode.copySuccess`,
              defaultMessage: `Copied device code`,
              description: `Toast shown after copying the device code`,
            }),
          );
      }),
      (e[22] = a),
      (e[23] = t),
      (e[24] = P))
    : (P = e[24]);
  let F = P,
    { data: te } = B(`show-copilot-login-first`),
    I;
  e[25] !== i || e[26] !== t || e[27] !== C || e[28] !== n
    ? ((I = async () => {
        try {
          (await ue(t, `use-copilot-auth-if-available`, !0, { throwOnFailure: !0 }),
            n(),
            i(`/first-run`));
        } catch (e) {
          C(Ce(e));
        }
      }),
      (e[25] = i),
      (e[26] = t),
      (e[27] = C),
      (e[28] = n),
      (e[29] = I))
    : (I = e[29]);
  let L = I,
    ne;
  e[30] !== _ || e[31] !== y || e[32] !== i || e[33] !== t || e[34] !== C || e[35] !== n
    ? ((ne = async () => {
        let e = _.trim();
        !e ||
          y ||
          (b(!0),
          await (async () => {
            try {
              (await Me(t, pe).loginWithApiKey(e), n(), i(`/first-run`));
            } catch (e) {
              C(Ce(e));
            }
          })().finally(() => {
            b(!1);
          }));
      }),
      (e[30] = _),
      (e[31] = y),
      (e[32] = i),
      (e[33] = t),
      (e[34] = C),
      (e[35] = n),
      (e[36] = ne))
    : (ne = e[36]);
  let re = ne,
    ie = !l || !te,
    ae;
  e[37] !== A || e[38] !== L || e[39] !== ie || e[40] !== c || e[41] !== l
    ? ((ae = ie
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsx)(St, { isPrimary: !0, handleChatGptSignIn: A, isChatGptSignInPending: c }),
              !c &&
                l &&
                (0, Z.jsx)(`div`, {
                  className: `pt-2`,
                  children: (0, Z.jsx)(Ct, { isPrimary: !1, handleCopilotSignIn: L }),
                }),
            ],
          })
        : (0, Z.jsxs)(Z.Fragment, {
            children: [
              !c && (0, Z.jsx)(Ct, { isPrimary: !0, handleCopilotSignIn: L }),
              (0, Z.jsx)(`div`, {
                className: `pt-2`,
                children: (0, Z.jsx)(St, {
                  isPrimary: !1,
                  handleChatGptSignIn: A,
                  isChatGptSignInPending: c,
                }),
              }),
            ],
          })),
      (e[37] = A),
      (e[38] = L),
      (e[39] = ie),
      (e[40] = c),
      (e[41] = l),
      (e[42] = ae))
    : (ae = e[42]);
  let z = ae,
    V = o?.kind === `deviceCode` ? o : null,
    se;
  e[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0`,
        children: (0, Z.jsx)(`div`, {
          className: `-ms-6 h-full w-full`,
          style: {
            WebkitMaskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)`,
            maskImage: `radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)`,
            WebkitMaskRepeat: `no-repeat`,
            maskRepeat: `no-repeat`,
            WebkitMaskSize: `100% 100%`,
            maskSize: `100% 100%`,
          },
          children: (0, Z.jsx)(Nt, {}),
        }),
      })),
      (e[43] = se))
    : (se = e[43]);
  let H;
  e[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Z.jsx)(`div`, {
        className: `flex min-h-0 flex-1 items-center justify-center`,
        children: (0, Z.jsx)(`h1`, {
          className: `text-center text-3xl leading-tight font-medium text-default`,
          children: (0, Z.jsx)(u, {
            id: `codex.loggedOut.title`,
            defaultMessage: `{appName}`,
            description: `Title on logged out screen`,
            values: { appName: R },
          }),
        }),
      })),
      (e[44] = H))
    : (H = e[44]);
  let ce;
  e[45] !== V ||
  e[46] !== h ||
  e[47] !== M ||
  e[48] !== d ||
  e[49] !== c ||
  e[50] !== p ||
  e[51] !== z
    ? ((ce =
        !d &&
        V == null &&
        (0, Z.jsx)(`div`, {
          className: `flex w-full justify-center`,
          children: (0, Z.jsxs)(`div`, {
            className: `mx-auto inline-flex w-max flex-col items-stretch`,
            children: [
              z,
              !c &&
                (0, Z.jsx)(Dt, {
                  setApiKeyValue: v,
                  defaultApiKeyFromEnv: h,
                  setIsApiKeySignInVisible: f,
                }),
              !c &&
                (0, Z.jsx)(Tt, {
                  isVisible: p,
                  onToggle: () => {
                    m(xt);
                  },
                  children: (0, Z.jsx)(wt, { handleChatGptDeviceCodeSignIn: M }),
                }),
            ],
          }),
        })),
      (e[45] = V),
      (e[46] = h),
      (e[47] = M),
      (e[48] = d),
      (e[49] = c),
      (e[50] = p),
      (e[51] = z),
      (e[52] = ce))
    : (ce = e[52]);
  let U;
  e[53] !== V || e[54] !== F
    ? ((U =
        V != null &&
        (0, Z.jsx)(jt, {
          verificationUrl: V.verificationUrl ?? ``,
          userCode: V.userCode ?? ``,
          onOpenBrowser: () => {
            let e = V.verificationUrl;
            e &&
              N({ href: e, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
          },
          onCopyCode: F,
          onCancel: () => {
            (V.abortController.abort(), s(null));
          },
        })),
      (e[53] = V),
      (e[54] = F),
      (e[55] = U))
    : (U = e[55]);
  let W;
  e[56] !== _ || e[57] !== re || e[58] !== y || e[59] !== d || e[60] !== c
    ? ((W =
        !c &&
        d &&
        (0, Z.jsx)(Ot, {
          apiKeyValue: _,
          setApiKeyValue: v,
          apiKeyInputRef: x,
          isApiKeyLoginPending: y,
          setIsApiKeyLoginPending: b,
          setIsApiKeySignInVisible: f,
          handleApiKeySubmit: re,
        })),
      (e[56] = _),
      (e[57] = re),
      (e[58] = y),
      (e[59] = d),
      (e[60] = c),
      (e[61] = W))
    : (W = e[61]);
  let de;
  return (
    e[62] !== ce || e[63] !== U || e[64] !== W
      ? ((de = (0, Z.jsxs)(`div`, {
          className: `fixed inset-0 overflow-hidden bg-surface-secondary`,
          children: [
            se,
            (0, Z.jsx)(`div`, {
              className: `relative z-10 flex h-full justify-center px-4 py-6 sm:py-8`,
              children: (0, Z.jsxs)(`div`, {
                className: `flex h-full w-full max-w-[360px] flex-col`,
                children: [
                  H,
                  (0, Z.jsxs)(`div`, {
                    className: `flex min-h-[192px] flex-col justify-end gap-4 pb-2 sm:pb-0`,
                    children: [ce, U, W],
                  }),
                ],
              }),
            }),
          ],
        })),
        (e[62] = ce),
        (e[63] = U),
        (e[64] = W),
        (e[65] = de))
      : (de = e[65]),
    de
  );
}
function xt(e) {
  return !e;
}
function St(e) {
  let t = (0, Y.c)(6),
    { isPrimary: n, handleChatGptSignIn: r, isChatGptSignInPending: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i
        ? (0, Z.jsx)(u, {
            id: `codex.loggedOut.signIn.cancel`,
            defaultMessage: `Cancel Sign-in`,
            description: `Cancel button for sign in`,
          })
        : (0, Z.jsx)(u, {
            id: `codex.loggedOut.signIn`,
            defaultMessage: `Sign in with ChatGPT`,
            description: `Sign in button text on logged out screen`,
          })),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== n || t[4] !== a
      ? ((o = (0, Z.jsx)(Et, { isPrimary: n, onClick: r, children: a })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function Ct(e) {
  let t = (0, Y.c)(4),
    { isPrimary: n, handleCopilotSignIn: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(u, {
        id: `codex.loggedOut.signInWithCopilot`,
        defaultMessage: `Sign in with GitHub Copilot`,
        description: `Button label for GitHub Copilot sign-in on logged out screen`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  return (
    t[1] !== r || t[2] !== n
      ? ((a = (0, Z.jsx)(Et, { isPrimary: n, onClick: r, children: i })),
        (t[1] = r),
        (t[2] = n),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function wt(e) {
  let t = (0, Y.c)(3),
    { handleChatGptDeviceCodeSignIn: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(u, {
        id: `codex.loggedOut.signInWithDeviceCode`,
        defaultMessage: `Use device code`,
        description: `Secondary button to sign in with a device code`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Z.jsx)(Et, { isPrimary: !1, onClick: n, children: r })), (t[1] = n), (t[2] = i)),
    i
  );
}
function Tt(e) {
  let t = (0, Y.c)(17),
    { isVisible: n, onToggle: r, children: i } = e,
    a = !n,
    o = n ? `1fr` : `0fr`,
    s = +!!n,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = { gridTemplateRows: o, opacity: s }), (t[0] = o), (t[1] = s), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === i
    ? (l = t[4])
    : ((l = (0, Z.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, Z.jsx)(`div`, { className: `pb-2`, children: i }),
      })),
      (t[3] = i),
      (t[4] = l));
  let d;
  t[5] !== a || t[6] !== c || t[7] !== l
    ? ((d = (0, Z.jsx)(`div`, {
        className: `grid transition-[grid-template-rows,opacity] duration-basic ease-out`,
        "aria-hidden": a,
        style: c,
        children: l,
      })),
      (t[5] = a),
      (t[6] = c),
      (t[7] = l),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = n
        ? (0, Z.jsx)(u, {
            id: `codex.loggedOut.lessOptions`,
            defaultMessage: `Less options`,
            description: `Button label to hide additional sign-in methods`,
          })
        : (0, Z.jsx)(u, {
            id: `codex.loggedOut.moreOptions`,
            defaultMessage: `More options`,
            description: `Button label to reveal additional sign-in methods`,
          })),
      (t[9] = n),
      (t[10] = f));
  let p;
  t[11] !== r || t[12] !== f
    ? ((p = (0, Z.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, Z.jsx)(`button`, {
          type: `button`,
          className: `cursor-interaction text-center text-sm text-codex-description hover:underline`,
          onClick: r,
          children: f,
        }),
      })),
      (t[11] = r),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== d || t[15] !== p
      ? ((m = (0, Z.jsxs)(`div`, { className: `pt-2`, children: [d, p] })),
        (t[14] = d),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function Et(e) {
  let t = (0, Y.c)(5),
    { isPrimary: n, onClick: r, children: i } = e,
    a = n ? `primary` : `outline`,
    o = n ? Pt : Ft,
    s;
  return (
    t[0] !== i || t[1] !== r || t[2] !== a || t[3] !== o
      ? ((s = (0, Z.jsx)(ye, { color: a, className: o, onClick: r, children: i })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Dt(e) {
  let t = (0, Y.c)(7),
    { setApiKeyValue: n, defaultApiKeyFromEnv: r, setIsApiKeySignInVisible: i } = e,
    a;
  t[0] !== r || t[1] !== n || t[2] !== i
    ? ((a = () => {
        (i(!0), n((e) => (e.length > 0 ? e : (r ?? ``))));
      }),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Z.jsx)(u, {
        id: `codex.loggedOut.useApiKey`,
        defaultMessage: `Use API Key`,
        description: `Secondary button to use API Key auth method`,
      })),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] === a
      ? (s = t[6])
      : ((s = (0, Z.jsx)(`div`, {
          className: `pt-2`,
          children: (0, Z.jsx)(ye, {
            color: `outline`,
            className: `w-full justify-center !rounded-full bg-text/10 px-4 py-2 font-medium backdrop-blur-md`,
            onClick: a,
            children: o,
          }),
        })),
        (t[5] = a),
        (t[6] = s)),
    s
  );
}
function Ot(e) {
  let t = (0, Y.c)(32),
    {
      apiKeyValue: n,
      setApiKeyValue: r,
      apiKeyInputRef: i,
      isApiKeyLoginPending: a,
      setIsApiKeyLoginPending: o,
      setIsApiKeySignInVisible: s,
      handleApiKeySubmit: l,
    } = e,
    d = ee(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(u, {
        id: `codex.loggedOut.apiKeyPrompt.inputLabel`,
        defaultMessage: `Enter your OpenAI API key`,
        description: `Label for API key input`,
      })),
      (t[0] = f))
    : (f = t[0]);
  let p;
  t[1] === d
    ? (p = t[2])
    : ((p = d.formatMessage({
        id: `codex.loggedOut.apiKeyPrompt.placeholder`,
        defaultMessage: `sk-...`,
        description: `Placeholder text hint for API key input field`,
      })),
      (t[1] = d),
      (t[2] = p));
  let m;
  t[3] === r
    ? (m = t[4])
    : ((m = (e) => {
        r(e.target.value);
      }),
      (t[3] = r),
      (t[4] = m));
  let h;
  t[5] !== i || t[6] !== n || t[7] !== p || t[8] !== m
    ? ((h = (0, Z.jsxs)(`label`, {
        className: `block text-sm text-default`,
        children: [
          f,
          (0, Z.jsx)(c, { ref: i, placeholder: p, value: n, onChange: m, onFocus: At }),
        ],
      })),
      (t[5] = i),
      (t[6] = n),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(`p`, {
        className: `mt-3 text-[10px] text-codex-description`,
        children: (0, Z.jsx)(u, {
          id: `codex.loggedOut.cloudTasksDisabledWithApiKey`,
          defaultMessage: `Cloud chats disabled with API key`,
          description: `Disclaimer explaining that remote features need ChatGPT sign-in`,
        }),
      })),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsxs)(`button`, {
        type: `button`,
        className: `inline-flex cursor-interaction items-center gap-1 text-sm text-info hover:underline max-[280px]:hidden`,
        onClick: kt,
        children: [
          (0, Z.jsx)(u, {
            id: `codex.loggedOut.apiKeyPrompt.getKey`,
            defaultMessage: `Get API Key`,
            description: `Button to open OpenAI API key management page`,
          }),
          (0, Z.jsx)(Pe, { href: Mt, className: `icon-2xs` }),
        ],
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== o || t[13] !== s
    ? ((v = () => {
        (o(!1), s(!1));
      }),
      (t[12] = o),
      (t[13] = s),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(u, {
        id: `codex.loggedOut.apiKeyPrompt.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for API key login`,
      })),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] === v
    ? (b = t[17])
    : ((b = (0, Z.jsx)(ye, { color: `ghost`, onClick: v, children: y })), (t[16] = v), (t[17] = b));
  let x;
  t[18] !== n || t[19] !== a
    ? ((x = n.trim().length === 0 || a), (t[18] = n), (t[19] = a), (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(u, {
        id: `codex.loggedOut.apiKeyPrompt.confirm`,
        defaultMessage: `OK`,
        description: `Confirm button for API key login`,
      })),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== l || t[23] !== a || t[24] !== x
    ? ((C = (0, Z.jsx)(ye, {
        className: `px-4`,
        onClick: l,
        disabled: x,
        loading: a,
        children: S,
      })),
      (t[22] = l),
      (t[23] = a),
      (t[24] = x),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] !== C || t[27] !== b
    ? ((w = (0, Z.jsxs)(`div`, {
        className: `mt-4 flex items-center justify-end gap-2 min-[280px]:justify-between`,
        children: [
          _,
          (0, Z.jsxs)(`div`, { className: `flex justify-end gap-2`, children: [b, C] }),
        ],
      })),
      (t[26] = C),
      (t[27] = b),
      (t[28] = w))
    : (w = t[28]);
  let T;
  return (
    t[29] !== w || t[30] !== h
      ? ((T = (0, Z.jsxs)(`div`, {
          className: `w-full rounded-2xl border border-default bg-surface-elevated-secondary/80 px-4 py-4 backdrop-blur-lg`,
          children: [h, g, w],
        })),
        (t[29] = w),
        (t[30] = h),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function kt(e) {
  A({ event: e, href: Mt, initiator: `open_in_browser_bridge` });
}
function At(e) {
  e.currentTarget.select();
}
function jt(e) {
  let t = (0, Y.c)(35),
    { verificationUrl: n, userCode: r, onOpenBrowser: i, onCopyCode: a, onCancel: o } = e,
    s = ee(),
    c = r.length > 0 ? r : `......`,
    [l, d] = (0, X.useState)(!1),
    f;
  t[0] !== s || t[1] !== l
    ? ((f = l
        ? s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copied`,
            defaultMessage: `Copied`,
            description: `Aria label for the copied state of the device code copy affordance on the logged out screen`,
          })
        : s.formatMessage({
            id: `codex.loggedOut.deviceCode.copyAriaLabel.copy`,
            defaultMessage: `Copy`,
            description: `Aria label for the device code copy affordance on the logged out screen`,
          })),
      (t[0] = s),
      (t[1] = l),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] !== a || t[4] !== r
    ? ((m = () => {
        r.length !== 0 &&
          (a(r),
          d(!0),
          window.setTimeout(() => {
            d(!1);
          }, 2e3));
      }),
      (t[3] = a),
      (t[4] = r),
      (t[5] = m))
    : (m = t[5]);
  let g = m,
    _;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(`p`, {
        className: `text-sm text-default`,
        children: (0, Z.jsx)(u, {
          id: `codex.loggedOut.deviceCode.instructions`,
          defaultMessage: `To use a device code to log in, click the open browser button and paste the code below.`,
          description: `Instructions shown while a device code login is in progress`,
        }),
      })),
      (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === g
    ? (v = t[8])
    : ((v = (e) => {
        (e.stopPropagation(), g());
      }),
      (t[7] = g),
      (t[8] = v));
  let y;
  t[9] === l
    ? (y = t[10])
    : ((y = l
        ? (0, Z.jsx)(je, { className: `icon-sm text-default` })
        : (0, Z.jsx)(h, { className: `icon-sm` })),
      (t[9] = l),
      (t[10] = y));
  let b;
  t[11] !== p || t[12] !== v || t[13] !== y
    ? ((b = (0, Z.jsx)(`div`, {
        className: `absolute top-2 right-2 opacity-100 transition-opacity sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100`,
        children: (0, Z.jsx)(ye, {
          color: `ghost`,
          size: `icon`,
          className: `rounded-md`,
          "aria-label": p,
          onClick: v,
          children: y,
        }),
      })),
      (t[11] = p),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(`p`, {
        className: `text-xs font-medium tracking-[0.2em] text-codex-description uppercase`,
        children: (0, Z.jsx)(u, {
          id: `codex.loggedOut.deviceCode.codeLabel`,
          defaultMessage: `Device code`,
          description: `Label above the user code shown during device code sign in`,
        }),
      })),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] === c
    ? (S = t[17])
    : ((S = (0, Z.jsx)(`p`, {
        className: `mt-2 overflow-x-auto text-center font-mono text-[28px] font-semibold tracking-[0.12em] whitespace-nowrap text-default`,
        children: c,
      })),
      (t[16] = c),
      (t[17] = S));
  let C;
  t[18] !== g || t[19] !== b || t[20] !== S
    ? ((C = (0, Z.jsxs)(`div`, {
        className: `group relative rounded-xl border border-default bg-primary-soft px-3 py-3`,
        role: `presentation`,
        onClick: g,
        children: [b, x, S],
      })),
      (t[18] = g),
      (t[19] = b),
      (t[20] = S),
      (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(u, {
        id: `codex.loggedOut.deviceCode.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel a device code login`,
      })),
      (t[22] = w))
    : (w = t[22]);
  let T;
  t[23] === o
    ? (T = t[24])
    : ((T = (0, Z.jsx)(ye, { color: `ghost`, onClick: o, children: w })), (t[23] = o), (t[24] = T));
  let E = n.length === 0,
    D;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(u, {
        id: `codex.loggedOut.deviceCode.openBrowser`,
        defaultMessage: `Open browser`,
        description: `Button to open the device code verification page`,
      })),
      (t[25] = D))
    : (D = t[25]);
  let O;
  t[26] !== i || t[27] !== E
    ? ((O = (0, Z.jsx)(ye, { onClick: i, disabled: E, children: D })),
      (t[26] = i),
      (t[27] = E),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== T || t[30] !== O
    ? ((k = (0, Z.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-between gap-2`,
        children: [T, O],
      })),
      (t[29] = T),
      (t[30] = O),
      (t[31] = k))
    : (k = t[31]);
  let A;
  return (
    t[32] !== k || t[33] !== C
      ? ((A = (0, Z.jsx)(`div`, {
          className: `w-full rounded-2xl border border-default bg-surface-elevated-secondary/80 px-4 py-4 backdrop-blur-lg`,
          children: (0, Z.jsxs)(`div`, { className: `space-y-3`, children: [_, C, k] }),
        })),
        (t[32] = k),
        (t[33] = C),
        (t[34] = A))
      : (A = t[34]),
    A
  );
}
var Y,
  X,
  Z,
  Mt,
  Nt,
  Pt,
  Ft,
  It = e(() => {
    ((Y = xe()),
      j(),
      o(),
      (X = t(a(), 1)),
      I(),
      x(),
      _(),
      he(),
      tt(),
      Re(),
      Be(),
      i(),
      D(),
      U(),
      L(),
      be(),
      Ie(),
      me(),
      w(),
      b(),
      Ee(),
      E(),
      it(),
      Se(),
      z(),
      ut(),
      pt(),
      (Z = q()),
      (Mt = `https://platform.openai.com/api-keys`),
      (Nt = X.memo(function () {
        let e = (0, Y.c)(5),
          t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = {
              initialColumns: 130,
              initialRows: 100,
              initialMode: `composite`,
              preferredVideoKeyword: `blossom`,
            }),
            (e[0] = t))
          : (t = e[0]);
        let { columns: n, rows: r, lines: i } = dt(t),
          a;
        return (
          e[1] !== n || e[2] !== i || e[3] !== r
            ? ((a = (0, Z.jsx)(ft, { lines: i, columns: n, rows: r, autoCover: !0 })),
              (e[1] = n),
              (e[2] = i),
              (e[3] = r),
              (e[4] = a))
            : (a = e[4]),
          a
        );
      })),
      (Pt = `w-full cursor-interaction justify-center !rounded-full border px-4 py-2 font-medium`),
      (Ft = `bg-text/10 w-full justify-center !rounded-full px-4 py-2 font-medium backdrop-blur-md`));
  });
function Lt(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function Rt(e) {
  return e;
}
var zt,
  Bt,
  Vt = e(() => {
    ((zt = `3446609779`), (Bt = `1561420571`));
  });
function Ht(e) {
  let t = (0, Ut.c)(21),
    { onExit: n, audioContextRef: r } = e,
    i = (0, Q.useRef)(null),
    a = (0, Q.useRef)(null),
    o = (0, Q.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[0] = s)) : (s = t[0]);
  let c = (0, Q.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { x: 0, y: 0 }), (t[1] = l))
    : (l = t[1]);
  let u = (0, Q.useRef)(l),
    d = (0, Q.useRef)(`right`),
    f = (0, Q.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: Gt, rows: Gt, cellSize: Kt, width: Gt * Kt, height: Gt * Kt }), (t[2] = p))
    : (p = t[2]);
  let m = (0, Q.useRef)(p),
    h = (0, Q.useRef)(null),
    g = (0, Q.useEffectEvent)(n),
    _;
  t[3] === r
    ? (_ = t[4])
    : ((_ = (e, t, n) => {
        if (r.current == null) return;
        let i = r.current;
        i.state === `suspended` && i.resume();
        let a = t / 1e3,
          o = i.createOscillator(),
          s = i.createGain();
        ((o.type = n),
          (o.frequency.value = e),
          s.gain.setValueAtTime(1e-4, i.currentTime),
          s.gain.exponentialRampToValueAtTime(0.18, i.currentTime + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, i.currentTime + a),
          o.connect(s),
          s.connect(i.destination),
          o.start(),
          o.stop(i.currentTime + a),
          (o.onended = () => {
            (o.disconnect(), s.disconnect());
          }));
      }),
      (t[3] = r),
      (t[4] = _));
  let v = (0, Q.useEffectEvent)(_),
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o.current != null && (window.clearInterval(o.current), (o.current = null));
      }),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        if (h.current) return h.current;
        let e = i.current;
        if (e == null) return { snake: `#ffffff`, food: `#f97316` };
        let t = getComputedStyle(e).color || `#ffffff`,
          n = getComputedStyle(document.documentElement),
          r = {
            snake: t,
            food:
              n.getPropertyValue(`--color-chart-red`).trim() ||
              n.getPropertyValue(`--color-chart-orange`).trim() ||
              `#f97316`,
          };
        return ((h.current = r), r);
      }),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        if (i.current == null) return null;
        let e = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        ((i.current.width = Math.max(1, Math.floor(m.current.width * e))),
          (i.current.height = Math.max(1, Math.floor(m.current.height * e))),
          (i.current.style.width = `${m.current.width}px`),
          (i.current.style.height = `${m.current.height}px`));
        let t = i.current.getContext(`2d`);
        return t == null
          ? null
          : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t);
      }),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = {
          x: Math.floor(Math.random() * m.current.columns),
          y: Math.floor(Math.random() * m.current.rows),
        };
        for (; e.some((e) => e.x === t.x && e.y === t.y);)
          t = {
            x: Math.floor(Math.random() * m.current.columns),
            y: Math.floor(Math.random() * m.current.rows),
          };
        return t;
      }),
      (t[8] = T))
    : (T = t[8]);
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = w();
        if (e == null) return;
        let t = S();
        (e.clearRect(0, 0, m.current.width, m.current.height), (e.fillStyle = t.snake));
        for (let t of c.current)
          e.fillRect(
            t.x * m.current.cellSize,
            t.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          );
        ((e.fillStyle = t.food),
          e.fillRect(
            u.current.x * m.current.cellSize,
            u.current.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          ));
      }),
      (t[9] = D))
    : (D = t[9]);
  let O = (0, Q.useEffectEvent)(D),
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = () => {
        let e = Math.floor(m.current.columns / 2),
          t = Math.floor(m.current.rows / 2);
        ((c.current = [
          { x: e, y: t },
          { x: e - 1, y: t },
          { x: e - 2, y: t },
        ]),
          (d.current = `right`),
          (f.current = `right`),
          (u.current = E(c.current)),
          O());
      }),
      (t[10] = O),
      (t[11] = k));
  let A = (0, Q.useEffectEvent)(k),
    j;
  t[12] === A
    ? (j = t[13])
    : ((j = () => {
        if (a.current == null) return;
        let e = a.current.getBoundingClientRect(),
          t = Math.max(1, Math.floor(e.width)),
          n = Math.max(1, Math.floor(e.height)),
          r = Math.max(Gt, Math.floor(t / Kt)),
          i = t / r,
          o = Math.max(Gt, Math.floor(n / i));
        ((m.current = { columns: r, rows: o, cellSize: i, width: t, height: n }), A());
      }),
      (t[12] = A),
      (t[13] = j));
  let M = (0, Q.useEffectEvent)(j),
    ee;
  t[14] !== O || t[15] !== g || t[16] !== v || t[17] !== M
    ? ((ee = () => {
        M();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) && (t = `right`),
            t != null && (e.preventDefault(), Yt[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = Jt[n],
              i = { x: t.x + r.x, y: t.y + r.y };
            if (i.x < 0 || i.y < 0 || i.x >= m.current.columns || i.y >= m.current.rows) {
              (b(), v(140, 220, `sawtooth`), g());
              return;
            }
            let a = i.x === u.current.x && i.y === u.current.y;
            if ((a ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)) {
              (b(), v(160, 220, `sawtooth`), g());
              return;
            }
            let o = a ? [i, ...e] : [i, ...e.slice(0, -1)];
            ((c.current = o),
              (d.current = n),
              a && ((u.current = E(o)), v(660, 120, `square`)),
              O());
          }, qt)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[14] = O),
      (t[15] = g),
      (t[16] = v),
      (t[17] = M),
      (t[18] = ee))
    : (ee = t[18]);
  let N;
  (t[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = []), (t[19] = N)) : (N = t[19]),
    (0, Q.useEffect)(ee, N));
  let P;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, Wt.jsx)(`div`, {
          className: `h-full w-full`,
          ref: a,
          children: (0, Wt.jsx)(`canvas`, { className: `h-full w-full text-default`, ref: i }),
        })),
        (t[20] = P))
      : (P = t[20]),
    P
  );
}
var Ut,
  Q,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt = e(() => {
    ((Ut = xe()),
      (Q = t(a(), 1)),
      (Wt = q()),
      (Gt = 12),
      (Kt = 18),
      (qt = 120),
      (Jt = {
        up: { x: 0, y: -1 },
        down: { x: 0, y: 1 },
        left: { x: -1, y: 0 },
        right: { x: 1, y: 0 },
      }),
      (Yt = { up: `down`, down: `up`, left: `right`, right: `left` }));
  });
function Zt(e, t) {
  if (t === `signin`) return e;
  try {
    let n = new URL(e);
    switch (t) {
      case `signup`:
        n.searchParams.set(`screen_hint`, `signup`);
        break;
      case `google`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `google-oauth2`));
        break;
      case `microsoft`:
        (n.searchParams.set(`screen_hint`, `login_or_signup`),
          n.searchParams.set(`connection`, `windowslive`));
        break;
      case `other-account`:
        n.searchParams.set(`prompt`, `select_account`);
        break;
    }
    return n.toString();
  } catch {
    return e;
  }
}
var Qt = e(() => {});
function $t(e) {
  if (e instanceof Error && e.name === `AbortError`) return `abort`;
  if (e instanceof Error && e.name === `TimeoutError`) return `network`;
  if (e instanceof te) {
    if (e.status === 401 || e.status === 403) return `auth`;
    if (
      e.status === 0 ||
      e.status === 408 ||
      e.status === 504 ||
      (e.errorCode != null && en.has(e.errorCode))
    )
      return `network`;
    let t = F(e);
    return (t?.type != null && tn.has(t.type)) || (e.errorCode != null && tn.has(e.errorCode))
      ? `auth`
      : `unknown`;
  }
  if (e instanceof Error && `code` in e && typeof e.code == `string` && en.has(e.code))
    return `network`;
  let t = (typeof e == `string` ? e : e instanceof Error ? e.message : ``).trim().toLowerCase();
  return nn.has(t)
    ? `network`
    : tn.has(t) || t === `auth failed` || t === `invalid api key`
      ? `auth`
      : `unknown`;
}
var en,
  tn,
  nn,
  rn = e(() => {
    (n(),
      Ue(),
      (en = new Set([
        `EAI_AGAIN`,
        `ECONNREFUSED`,
        `ECONNRESET`,
        `ENOTFOUND`,
        `ETIMEDOUT`,
        `ERR_CONNECTION_RESET`,
        `ERR_NETWORK_CHANGED`,
        `ERR_TIMED_OUT`,
      ])),
      (tn = new Set([
        `authentication_error`,
        `forbidden`,
        `invalid_api_key`,
        `token_invalidated`,
        `unauthorized`,
      ])),
      (nn = new Set([
        `failed to fetch`,
        `fetch failed`,
        `load failed`,
        `network request failed`,
        `networkerror when attempting to fetch resource.`,
        `request timed out`,
      ])));
  });
function an(e) {
  let t = (0, on.c)(41),
    {
      apiKeyValue: n,
      browserSessionProfile: r,
      canCopySignInLink: i,
      isApiKeyEntryVisible: a,
      isApiKeySignInPending: o,
      isChatGptSignInPending: s,
      showChatGptProviderSignIn: c,
      onApiKeySubmit: l,
      onApiKeyValueChange: d,
      onChatGptSignIn: f,
      onChatGptSignUp: p,
      onCopySignInLink: h,
      onPlaySnake: _,
      onResetApiKeyEntry: y,
      onShowApiKeyEntry: b,
    } = e,
    x = ee(),
    S = Fe(s && !a ? `2502927686` : !1),
    C = Te.chatGptBrowserSession,
    w = r === void 0 && C != null,
    T;
  t[0] === w ? (T = t[1]) : ((T = { enabled: w }), (t[0] = w), (t[1] = T));
  let { data: E, isPending: D } = m($e, T),
    O = E?.eligibleWithoutDeviceCheck ?? !1,
    A = w && D,
    j = de(cn),
    M = j.get(`update_cta_for_sign_in_with_api_key`, !1),
    N = r === void 0 && C != null && O,
    P = N && j.get(`update_cta_for_sign_in_with_api_key_with_browser_lookup`, !1),
    F = M || P,
    te;
  t[2] !== j || t[3] !== N
    ? ((te = N && j.get(`enabled`, !1)), (t[2] = j), (t[3] = N), (t[4] = te))
    : (te = t[4]);
  let I = te,
    L = N && j.get(`security_level`, `high`) === `low` ? `low` : `high`,
    ne = I && (L === `low` ? E?.eligibleWithoutDeviceCheck === !0 : E?.eligible === !0),
    R;
  t[5] === ne ? (R = t[6]) : ((R = { enabled: ne }), (t[5] = ne), (t[6] = R));
  let { data: re, isPending: ie } = k(Ze, L, R),
    ae = re === void 0 ? null : re,
    z = ne && ie,
    B = r ?? null;
  r === void 0 && !z && (B = ae);
  let oe = qe(B?.avatarUrl),
    [H, ce] = (0, sn.useState)(null),
    le = B?.name?.trim() || null,
    U = le ?? B?.email ?? ``,
    W = B != null && !a,
    ue;
  t[7] === W
    ? (ue = t[8])
    : ((ue = W
        ? (0, $.jsx)(u, {
            id: `electron.onboarding.login.browserSession.welcomeBack`,
            defaultMessage: `Welcome back`,
            description: `Title on desktop onboarding when a signed-in ChatGPT browser session was found`,
          })
        : (0, $.jsx)(u, {
            id: `electron.onboarding.login.welcomeV2.title.chatgptSignIn`,
            defaultMessage: `Sign in to ChatGPT`,
            description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
          })),
      (t[7] = W),
      (t[8] = ue));
  let fe = ue;
  if (s && !a) {
    let e;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(g, { className: `size-10 shrink-0` })), (t[9] = e))
      : (e = t[9]);
    let n;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(`p`, {
          className: `text-center text-base leading-5 font-normal text-codex-description`,
          children: (0, $.jsx)(u, {
            id: `electron.onboarding.login.browserPending.welcomeV2`,
            defaultMessage: `Continue signing in with your browser`,
            description: `Message shown while ChatGPT sign-in continues in the browser`,
          }),
        })),
        (t[10] = n))
      : (n = t[10]);
    let r;
    t[11] === f ? (r = t[12]) : ((r = () => f()), (t[11] = f), (t[12] = r));
    let a;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(u, {
          id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
          defaultMessage: `Cancel sign-in`,
          description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
        })),
        (t[13] = a))
      : (a = t[13]);
    let o;
    t[14] === r
      ? (o = t[15])
      : ((o = (0, $.jsx)(`button`, {
          className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-primary-ghost-hover`,
          type: `button`,
          onClick: r,
          children: a,
        })),
        (t[14] = r),
        (t[15] = o));
    let s;
    t[16] !== i || t[17] !== h || t[18] !== S
      ? ((s = S
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-wrap items-center justify-center gap-2`,
              children: [
                (0, $.jsx)(`span`, {
                  className: `py-2 text-base leading-5 font-normal text-codex-description select-none`,
                  children: (0, $.jsx)(u, {
                    id: `electron.onboarding.login.browserDidNotOpen`,
                    defaultMessage: `Browser didn't open?`,
                    description: `Helper text before the Copy sign-in link action while desktop browser sign-in is pending`,
                  }),
                }),
                (0, $.jsxs)(ye, {
                  color: `ghost`,
                  disabled: !i,
                  size: `dialog`,
                  onClick: () => void h(),
                  children: [
                    (0, $.jsx)(V, {}),
                    (0, $.jsx)(u, {
                      id: `electron.onboarding.login.copyLink`,
                      defaultMessage: `Copy sign-in link`,
                      description: `Button that copies the active sign-in URL so the user can continue signing in in another browser without restarting`,
                    }),
                  ],
                }),
              ],
            })
          : null),
        (t[16] = i),
        (t[17] = h),
        (t[18] = S),
        (t[19] = s))
      : (s = t[19]);
    let c;
    return (
      t[20] !== o || t[21] !== s
        ? ((c = (0, $.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default`,
            children: (0, $.jsxs)(`div`, {
              className: `flex w-[340px] flex-col items-center gap-8`,
              children: [
                e,
                n,
                (0, $.jsxs)(`div`, {
                  className: `flex w-full flex-col items-center gap-6`,
                  children: [o, s],
                }),
              ],
            }),
          })),
          (t[20] = o),
          (t[21] = s),
          (t[22] = c))
        : (c = t[22]),
      c
    );
  }
  if (!a && (A || z)) {
    let e;
    return (
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsxs)(`div`, {
            className: `flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description`,
            children: [
              (0, $.jsx)(_e, { className: `h-4 w-4 text-default` }),
              (0, $.jsx)(u, {
                id: `electron.onboarding.login.loading`,
                defaultMessage: `Loading…`,
                description: `Loading state while the desktop login page prepares the sign-in experience`,
              }),
            ],
          })),
          (t[23] = e))
        : (e = t[23]),
      e
    );
  }
  let pe;
  t[24] === x
    ? (pe = t[25])
    : ((pe = x.formatMessage({
        id: `electron.onboarding.login.snake.start`,
        defaultMessage: `Play Snake`,
        description: `Aria label for the ChatGPT logo button to start Snake`,
      })),
      (t[24] = x),
      (t[25] = pe));
  let G;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(g, { className: `shrink-0` })), (t[26] = G))
    : (G = t[26]);
  let K;
  t[27] !== _ || t[28] !== pe
    ? ((K = (0, $.jsx)(`button`, {
        className: `group flex cursor-interaction items-center justify-center rounded-full`,
        type: `button`,
        "aria-label": pe,
        onClick: _,
        children: G,
      })),
      (t[27] = _),
      (t[28] = pe),
      (t[29] = K))
    : (K = t[29]);
  let me;
  t[30] === fe
    ? (me = t[31])
    : ((me = (0, $.jsx)(`h1`, {
        className: `w-[316px] text-center text-[28px] leading-9 font-normal text-default`,
        children: fe,
      })),
      (t[30] = fe),
      (t[31] = me));
  let q;
  t[32] === W
    ? (q = t[33])
    : ((q = W
        ? (0, $.jsx)(`p`, {
            className: `text-center text-[14px] leading-5 text-codex-description`,
            children: (0, $.jsx)(u, {
              id: `electron.onboarding.login.browserSession.chooseAccount`,
              defaultMessage: `Choose an account to continue to ChatGPT`,
              description: `Instruction on desktop onboarding when a signed-in ChatGPT browser session was found`,
            }),
          })
        : null),
      (t[32] = W),
      (t[33] = q));
  let J;
  t[34] !== K || t[35] !== me || t[36] !== q
    ? ((J = (0, $.jsxs)(`div`, {
        className: `flex w-full flex-col items-center gap-4`,
        children: [K, me, q],
      })),
      (t[34] = K),
      (t[35] = me),
      (t[36] = q),
      (t[37] = J))
    : (J = t[37]);
  let he = a
      ? (0, $.jsx)(`div`, {
          className: `w-full`,
          children: (0, $.jsx)(_t, {
            apiKeyValue: n,
            isApiKeyEntryVisible: a,
            isApiKeySignInPending: o,
            isChatGptSignInPending: s,
            onApiKeySecondaryAction: y,
            onApiKeySubmit: l,
            onApiKeyValueChange: d,
            onChatGptSignIn: f,
            onShowApiKeyEntry: b,
            apiKeySecondaryActionLabel: (0, $.jsx)(u, {
              id: `electron.onboarding.login.apikey.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel button label for API key entry on desktop onboarding`,
            }),
          }),
        })
      : (0, $.jsxs)(`div`, {
          className: `flex w-full flex-col items-center gap-3`,
          children: [
            B == null
              ? (0, $.jsxs)(`button`, {
                  className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-text/80`,
                  type: `button`,
                  onClick: () => f(),
                  children: [
                    (0, $.jsx)(se, { className: `size-6 shrink-0 text-primary-solid` }),
                    (0, $.jsx)(u, {
                      id: `electron.onboarding.login.chatgpt.continueToSignIn`,
                      defaultMessage: `Continue to sign in`,
                      description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                    }),
                  ],
                })
              : (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(ye, {
                      className: `w-full justify-start text-start`,
                      color: `outlineSurface`,
                      radius: `large`,
                      size: `auth`,
                      type: `button`,
                      "aria-label": x.formatMessage(
                        {
                          id: `electron.onboarding.login.browserSession.continueAs`,
                          defaultMessage: `Continue as {accountName}`,
                          description: `Accessible label for the recognized ChatGPT browser account button on desktop onboarding`,
                        },
                        { accountName: U },
                      ),
                      onClick: () => f(`signin`, B.email),
                      children: [
                        oe != null && oe !== H
                          ? (0, $.jsx)(`img`, {
                              src: oe,
                              alt: ``,
                              className: `size-10 shrink-0 rounded-full`,
                              onError: () => {
                                ce(oe);
                              },
                            })
                          : (0, $.jsx)(`span`, {
                              className: `flex size-10 shrink-0 items-center justify-center rounded-full bg-chart-yellow/20 text-[14px] font-medium text-default`,
                              children: v(U),
                            }),
                        (0, $.jsxs)(`span`, {
                          className: `min-w-0 flex-1`,
                          children: [
                            (0, $.jsx)(`span`, {
                              className: `block truncate text-[14px] leading-5 font-medium text-default`,
                              children: U,
                            }),
                            le == null
                              ? null
                              : (0, $.jsx)(`span`, {
                                  className: `block truncate text-[13px] leading-5 text-codex-description`,
                                  children: B.email,
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex w-full items-center gap-4 py-2`,
                      "aria-hidden": `true`,
                      children: [
                        (0, $.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                        (0, $.jsx)(`span`, {
                          className: `text-[12px] font-medium text-codex-description`,
                          children: (0, $.jsx)(u, {
                            id: `electron.onboarding.login.browserSession.or`,
                            defaultMessage: `OR`,
                            description: `Divider label between the recognized ChatGPT browser account and other sign-in options`,
                          }),
                        }),
                        (0, $.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                      ],
                    }),
                    (0, $.jsx)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: () => f(`other-account`),
                      children: (0, $.jsx)(u, {
                        id: `electron.onboarding.login.browserSession.otherAccount`,
                        defaultMessage: `Use another account`,
                        description: `Button label to sign in with a different ChatGPT account after a browser account was recognized`,
                      }),
                    }),
                  ],
                }),
            c
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsxs)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: () => f(`google`),
                      children: [
                        (0, $.jsx)(Ve, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                        (0, $.jsx)(u, {
                          id: `electron.onboarding.login.google.signIn`,
                          defaultMessage: `Continue with Google`,
                          description: `Button label for Google sign-in on desktop onboarding`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: () => f(`microsoft`),
                      children: [
                        (0, $.jsx)(Ye, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                        (0, $.jsx)(u, {
                          id: `electron.onboarding.login.microsoft.signIn`,
                          defaultMessage: `Continue with Microsoft`,
                          description: `Button label for Microsoft sign-in on desktop onboarding`,
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            (0, $.jsx)(`button`, {
              className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
              type: `button`,
              onClick: b,
              children: F
                ? (0, $.jsx)(u, {
                    id: `electron.onboarding.login.apikey.open.explicit.welcomeV2`,
                    defaultMessage: `Sign in with an API key`,
                    description: `Button label to open API key sign-in on v2 desktop onboarding`,
                  })
                : (0, $.jsx)(u, {
                    id: `electron.onboarding.login.apikey.open.welcomeV2`,
                    defaultMessage: `Sign in another way`,
                    description: `Button label to open another sign-in method on v2 desktop onboarding`,
                  }),
            }),
            (0, $.jsx)(`button`, {
              className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default`,
              type: `button`,
              onClick: p,
              children: (0, $.jsx)(u, {
                id: `electron.onboarding.login.signup.welcomeV2`,
                defaultMessage: `Sign up`,
                description: `Sign-up link on v2 desktop onboarding`,
              }),
            }),
          ],
        }),
    ge;
  return (
    t[38] !== J || t[39] !== he
      ? ((ge = (0, $.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-6 text-default`,
          children: (0, $.jsxs)(`div`, {
            className: `flex w-[340px] flex-col items-center gap-8`,
            children: [J, he],
          }),
        })),
        (t[38] = J),
        (t[39] = he),
        (t[40] = ge))
      : (ge = t[40]),
    ge
  );
}
var on,
  sn,
  $,
  cn,
  ln = e(() => {
    ((on = xe()),
      j(),
      (sn = t(a(), 1)),
      I(),
      Je(),
      i(),
      ie(),
      O(),
      Ke(),
      Xe(),
      De(),
      S(),
      J(),
      ae(),
      H(),
      Qe(),
      gt(),
      ($ = q()),
      (cn = `1504988142`));
  });
function un() {
  let e = (0, dn.c)(54),
    t = r(oe),
    n = Ae(),
    i = T(),
    a = ee(),
    o = d(),
    s = m(C),
    c;
  e[0] === s
    ? (c = e[1])
    : ((c = s == null ? null : { hasPreviouslyCompletedOnboarding: s }), (e[0] = s), (e[1] = c));
  let h = c,
    g = Le(),
    _ = de(Bt),
    v;
  e[2] === _ ? (v = e[3]) : ((v = Rt(_.get(`enabled`, !1))), (e[2] = _), (e[3] = v));
  let b = v,
    x;
  e[4] !== a || e[5] !== t
    ? ((x = (e) => {
        t.get(ve).warning(
          a.formatMessage(
            {
              id: `electron.onboarding.login.error`,
              defaultMessage: `Sign-in failed: {rawMessage}`,
              description: `Toast shown when sign-in fails on the desktop onboarding page`,
            },
            { rawMessage: e },
          ),
        );
      }),
      (e[4] = a),
      (e[5] = t),
      (e[6] = x))
    : (x = e[6]);
  let S = x,
    [w, E] = (0, fn.useState)(null),
    D = w != null,
    [O, k] = (0, fn.useState)(!1),
    [A, j] = (0, fn.useState)(!1),
    [M, P] = (0, fn.useState)(``),
    [F, te] = (0, fn.useState)(!1),
    I = (0, fn.useRef)(null),
    L;
  e[7] === t
    ? (L = e[8])
    : ((L = () => {
        (t.set(re, !1), t.set(y, !0));
      }),
      (e[7] = t),
      (e[8] = L));
  let R = L,
    ie;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = () => {
        (k(!1), te(!1), P(``));
      }),
      (e[9] = ie))
    : (ie = e[9]);
  let ae = ie,
    z;
  e[10] !== h || e[11] !== t
    ? ((z = () => {
        h != null && (G(t, Ge, { method: `apikey`, ...h }), k(!0));
      }),
      (e[10] = h),
      (e[11] = t),
      (e[12] = z))
    : (z = e[12]);
  let B = z,
    V;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = () => {
        j(!1);
      }),
      (e[13] = V))
    : (V = e[13]);
  let se = V,
    H;
  if (e[14] === Symbol.for(`react.memo_cache_sentinel`)) {
    let t = () => {
      I.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((I.current = new window.AudioContext()),
            I.current.state === `suspended` && I.current.resume())));
    };
    ((H = () => {
      (t(), j(!0));
    }),
      (e[14] = H));
  } else H = e[14];
  let le = H,
    U;
  e[15] !== w?.browserUrl || e[16] !== a || e[17] !== t
    ? ((U = async () => {
        let e = w?.browserUrl;
        e != null &&
          (await Oe(e)) &&
          t.get(ve).success(
            a.formatMessage({
              id: `electron.onboarding.login.linkCopied`,
              defaultMessage: `Sign-in link copied`,
              description: `Toast confirming that the active browser sign-in link was copied so the user can paste it into another browser`,
            }),
          );
      }),
      (e[15] = w?.browserUrl),
      (e[16] = a),
      (e[17] = t),
      (e[18] = U))
    : (U = e[18]);
  let W = U,
    ue;
  e[19] !== w ||
  e[20] !== h ||
  e[21] !== i ||
  e[22] !== o ||
  e[23] !== t ||
  e[24] !== S ||
  e[25] !== R ||
  e[26] !== g ||
  e[27] !== n
    ? ((ue = async (e, r) => {
        let a = e === void 0 ? `signin` : e;
        if (w != null) {
          (w.controller.abort(), E(null));
          return;
        }
        if (h == null) return;
        let s = a === `google` || a === `microsoft` ? a : `chatgpt`;
        G(t, Ge, { method: s, ...h });
        let c = new AbortController();
        (E({ controller: c, browserUrl: null }),
          await (async () => {
            try {
              let { useDesktopAuth: e, useStreamlinedLoginUx: u } = Lt(ge(g, zt)),
                { authUrl: d, completion: p } = await rt({
                  scope: t,
                  signal: c.signal,
                  useHostedLoginSuccessPage: !0,
                  useStreamlinedLogin: u,
                });
              if (d && !c.signal.aborted) {
                let n = e ? (await Te.appInfo.get()).chatGptDesktopAuthOrigin : void 0;
                if (c.signal.aborted) return;
                let i = at({
                  authUrl: Zt(d, a),
                  codexAppVersion: nt(t),
                  desktopAuthOrigin: n,
                  includeCodexOriginStableId: !0,
                  loginHint: r,
                  useDesktopAuth: e,
                  useStreamlinedLoginUx: u,
                });
                (E((e) => (e?.controller === c ? { controller: c, browserUrl: i } : e)),
                  N({
                    href: i,
                    initiator: `open_in_browser_bridge`,
                    openTarget: `external-browser`,
                  }));
              }
              let m = await p;
              m.success
                ? (G(t, ce, { method: s, ...h, ...l(m.onboardingEntrypoint) }),
                  o.removeQueries({ queryKey: we(`account-info`), exact: !0 }),
                  R(),
                  t.set(ne, !0),
                  m.onboardingEntrypoint != null && f(t, m.onboardingEntrypoint),
                  t.set(mt, m.onboardingEntrypoint),
                  n(),
                  i(`/welcome`, { replace: !0 }))
                : (G(t, ze, { method: s, errorKind: $t(m.error), ...h }),
                  S(Ce(m.error ?? `Unknown error`)));
            } catch (e) {
              let n = e;
              if (n instanceof Error && n.name === `AbortError`) {
                G(t, ze, { method: s, errorKind: `abort`, ...h });
                return;
              }
              (G(t, ze, { method: s, errorKind: $t(n), ...h }), S(Ce(n)));
            }
          })().finally(() => {
            E((e) => (e?.controller === c ? null : e));
          }));
      }),
      (e[19] = w),
      (e[20] = h),
      (e[21] = i),
      (e[22] = o),
      (e[23] = t),
      (e[24] = S),
      (e[25] = R),
      (e[26] = g),
      (e[27] = n),
      (e[28] = ue))
    : (ue = e[28]);
  let fe = ue,
    K;
  e[29] !== M ||
  e[30] !== F ||
  e[31] !== h ||
  e[32] !== i ||
  e[33] !== t ||
  e[34] !== S ||
  e[35] !== R ||
  e[36] !== n
    ? ((K = async () => {
        let e = M.trim();
        !e ||
          F ||
          h == null ||
          (te(!0),
          await (async () => {
            try {
              (await Me(t, pe).loginWithApiKey(e),
                G(t, ce, { method: `apikey`, ...h }),
                R(),
                t.set(ne, !0),
                t.set(mt, void 0),
                n(),
                i(`/welcome`, { replace: !0 }));
            } catch (e) {
              let n = e;
              (G(t, ze, { method: `apikey`, errorKind: $t(n), ...h }), S(Ce(n)));
            }
          })().finally(() => {
            te(!1);
          }));
      }),
      (e[29] = M),
      (e[30] = F),
      (e[31] = h),
      (e[32] = i),
      (e[33] = t),
      (e[34] = S),
      (e[35] = R),
      (e[36] = n),
      (e[37] = K))
    : (K = e[37]);
  let me = K;
  if (h == null) {
    let t;
    return (
      e[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, pn.jsx)(p, {
            children: (0, pn.jsxs)(`div`, {
              className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description`,
              children: [
                (0, pn.jsx)(_e, { className: `h-4 w-4 text-default` }),
                (0, pn.jsx)(u, {
                  id: `electron.onboarding.login.loading`,
                  defaultMessage: `Loading…`,
                  description: `Loading state while the desktop login page prepares the sign-in experience`,
                }),
              ],
            }),
          })),
          (e[38] = t))
        : (t = e[38]),
      t
    );
  }
  let q;
  e[39] !== M ||
  e[40] !== w?.browserUrl ||
  e[41] !== me ||
  e[42] !== fe ||
  e[43] !== W ||
  e[44] !== O ||
  e[45] !== F ||
  e[46] !== D ||
  e[47] !== A ||
  e[48] !== B ||
  e[49] !== b
    ? ((q = A
        ? (0, pn.jsx)(`div`, {
            className: `flex h-full w-full`,
            children: (0, pn.jsx)(Ht, { onExit: se, audioContextRef: I }),
          })
        : (0, pn.jsx)(an, {
            apiKeyValue: M,
            canCopySignInLink: w?.browserUrl != null,
            isApiKeyEntryVisible: O,
            isApiKeySignInPending: F,
            isChatGptSignInPending: D,
            showChatGptProviderSignIn: b,
            onApiKeySubmit: me,
            onApiKeyValueChange: P,
            onChatGptSignIn: fe,
            onChatGptSignUp: () => fe(`signup`),
            onCopySignInLink: W,
            onPlaySnake: le,
            onResetApiKeyEntry: ae,
            onShowApiKeyEntry: B,
          })),
      (e[39] = M),
      (e[40] = w?.browserUrl),
      (e[41] = me),
      (e[42] = fe),
      (e[43] = W),
      (e[44] = O),
      (e[45] = F),
      (e[46] = D),
      (e[47] = A),
      (e[48] = B),
      (e[49] = b),
      (e[50] = q))
    : (q = e[50]);
  let J;
  return (
    e[51] !== A || e[52] !== q
      ? ((J = (0, pn.jsx)(p, { fullBleed: !0, hideHeader: A, children: q })),
        (e[51] = A),
        (e[52] = q),
        (e[53] = J))
      : (J = e[53]),
    J
  );
}
var dn,
  fn,
  pn,
  mn = e(() => {
    ((dn = xe()),
      fe(),
      Ne(),
      j(),
      o(),
      (fn = t(a(), 1)),
      I(),
      x(),
      he(),
      tt(),
      Re(),
      D(),
      O(),
      be(),
      ht(),
      s(),
      P(),
      J(),
      Ee(),
      E(),
      it(),
      H(),
      Vt(),
      Se(),
      z(),
      He(),
      M(),
      Xt(),
      Qt(),
      rn(),
      ln(),
      (pn = q()));
  });
function hn() {
  let e = (0, gn.c)(3);
  {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, _n.jsx)(un, {})), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let t;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, _n.jsx)(bt, {})), (e[2] = t))
      : (t = e[2]),
    t
  );
}
var gn, _n;
e(() => {
  ((gn = xe()), yt(), It(), mn(), (_n = q()));
})();
export { hn as LoginRoute };
//# sourceMappingURL=login-route-ad8eaa2aab78.js.map
