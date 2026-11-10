import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $7 as t,
  $bt as n,
  ADt as r,
  BG as i,
  CH as a,
  CJ as o,
  Cot as s,
  Fz as c,
  HV as l,
  IDt as u,
  IV as d,
  Ixt as f,
  J7 as p,
  JG as ee,
  OV as m,
  PH as te,
  Pxt as h,
  Pz as g,
  Rnt as _,
  TJ as v,
  VDt as ne,
  VG as y,
  XC as b,
  ZC as x,
  _Mt as S,
  _O as re,
  _xt as C,
  gMt as w,
  gO as ie,
  i3 as ae,
  iw as T,
  jDt as E,
  mG as oe,
  mO as se,
  r3 as ce,
  rst as D,
  tw as O,
  vO as k,
  vzt as A,
  wot as j,
  wxt as le,
  xMt as M,
  xV as ue,
  yzt as N,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  D0n as P,
  D1n as F,
  E0n as I,
  E1n as L,
  K1n as R,
  Tdn as z,
  _zt as B,
  a0n as V,
  dIn as H,
  gzt as U,
  jdn as fe,
  l0n as pe,
  lIr as W,
  oFr as G,
  q1n as K,
  sIr as me,
  uIn as q,
  yRt as J,
} from "./app-initial-5851df3f6cb1.js";
import { N as Y, P as he } from "./app-primary-fe8a450b3b04.js";
import { r as ge } from "./state-8cbcf88168fe.js";
import { c as _e, f as ve, n as ye, r as be } from "./queries-5d0ed8fa4a71.js";
import { n as xe } from "./writing-style-demo-cab6908153aa.js";
import { a as Se, i as Ce, n as we, r as Te, t as Ee } from "./writing-style-4321cba3f1c0.js";
var X;
function De() {
  return (De = e(() => {
    (E(),
      (X = r({
        category: {
          id: `tpp.write_like_me.setup.category`,
          defaultMessage: `{category, select, email {Email} messaging {Messaging} other {Documents}}`,
          description: `Short category label shown when an end user opens writing-style setup in ChatGPT Work. Use a neutral noun naming the kind of writing; plain text, no markup. The category string is email, messaging, or documents, with the other branch naming Documents. These labels identify app groups, not individual writing samples.`,
        },
        connect: {
          id: `tpp.write_like_me.setup.connect_app`,
          defaultMessage: `Connect {app}`,
          description: `Accessible name for an available app's Connect action after an end user opens a category picker in ChatGPT Work writing-style setup. Use a short, neutral action phrase for screen-reader users; plain text, no markup. The app string is a third-party product name such as Gmail or Slack and may be long; retain its branding. Clicking starts the existing install/connection permission flow, not a completed connection.`,
        },
        reconnect: {
          id: `tpp.write_like_me.setup.reconnect_app`,
          defaultMessage: `Reconnect {app}`,
          description: `Accessible name shown for an expired account connection after an end user opens ChatGPT Work writing-style setup's app picker. Tell screen-reader users they can authorize the app again; use a short, neutral action phrase, plain text without markup. The app string is a possibly long third-party product name; retain its branding. This action is distinct from first-time Connect and does not report success.`,
        },
        connectionAction: {
          id: `tpp.write_like_me.setup.connection_action`,
          defaultMessage: `{state, select, unavailable {Unavailable} reauth {Reconnect} other {Connect}}`,
          description: `Action or status label shown to end users in a ChatGPT Work writing-style app picker after connection status loads. Use a short, neutral label in plain text without markup. The state string is unavailable for an app that cannot be connected, reauth to authorize an expired link again, or disconnected to start setup; other selects Connect. Reconnect is a button; Unavailable is an inactive status, not a promise that clicking will connect the app.`,
        },
        setupCategory: {
          id: `tpp.write_like_me.setup.open_category`,
          defaultMessage: `{category, select, email {Set up email} messaging {Set up messaging} other {Set up documents}}`,
          description: `Accessible name for a category's Set up button when an end user opens ChatGPT Work writing-style setup and that category has no usable connected app. Opens the corresponding app picker. Use a short, neutral action phrase for screen-reader users; plain text, no markup. The category string is email, messaging, or documents; the other branch names documents. This does not directly start authorization.`,
        },
        addApps: {
          id: `tpp.write_like_me.setup.add_apps`,
          defaultMessage: `{category, select, email {Connect more email apps} messaging {Connect more messaging apps} other {Connect more document apps}}`,
          description: `Accessible name for the chevron beside Connected in the ChatGPT Work writing-style setup summary, shown after an end user already has a usable app in that category. Opens its app picker while preserving existing connections. Use a short, neutral action phrase for screen-reader users; plain text, no markup. The category string is email, messaging, or documents; the other branch names documents. This does not open general account management.`,
        },
      })));
  }))();
}
var Oe, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Z;
function Ze() {
  return (Ze = e(() => {
    ((Oe = `_overlay_1a5vw_1`),
      (ke = `_dialog_1a5vw_5`),
      (Ae = `_form_1a5vw_31`),
      (je = `_hero_1a5vw_36`),
      (Me = `_background_1a5vw_41`),
      (Ne = `_heroIcon_1a5vw_54`),
      (Pe = `_iconButton_1a5vw_73`),
      (Fe = `_ghost_1a5vw_84`),
      (Ie = `_back_1a5vw_41`),
      (Le = `_close_1a5vw_88`),
      (Re = `_content_1a5vw_100`),
      (ze = `_heading_1a5vw_108`),
      (Be = `_description_1a5vw_116`),
      (Ve = `_categoryIcon_1a5vw_121`),
      (He = `_appIcon_1a5vw_122`),
      (Ue = `_compactIcon_1a5vw_135`),
      (We = `_iconStack_1a5vw_164`),
      (Ge = `_iconOverflow_1a5vw_177`),
      (Ke = `_button_1a5vw_189`),
      (qe = `_primary_1a5vw_213`),
      (Je = `_secondary_1a5vw_217`),
      (Ye = `_footer_1a5vw_232`),
      (Xe = `_finish_1a5vw_238`),
      (Z = {
        overlay: Oe,
        dialog: ke,
        form: Ae,
        hero: je,
        background: Me,
        heroIcon: Ne,
        iconButton: Pe,
        ghost: Fe,
        back: Ie,
        close: Le,
        content: Re,
        heading: ze,
        description: Be,
        categoryIcon: Ve,
        appIcon: He,
        compactIcon: Ue,
        iconStack: We,
        iconOverflow: Ge,
        button: Ke,
        primary: qe,
        secondary: Je,
        footer: Ye,
        finish: Xe,
      }));
  }))();
}
function Qe(e) {
  let t = (0, st.c)(87),
    n = ne(),
    r = (0, ct.useRef)(null),
    { connections: i, screen: s, connectingAppId: c, isSubmitting: f } = e,
    p = i.status === `loading` ? void 0 : i.apps,
    ee = p?.filter(tt),
    m;
  t[0] !== p || t[1] !== s.category || t[2] !== s.step
    ? ((m = s.step === `connect` ? p?.filter((e) => e.category === s.category) : void 0),
      (t[0] = p),
      (t[1] = s.category),
      (t[2] = s.step),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g = c == null && !f,
    _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        r.current?.focus();
      }),
      (t[4] = _))
    : (_ = t[4]);
  let v;
  (t[5] === s.step ? (v = t[6]) : ((v = [s.step]), (t[5] = s.step), (t[6] = v)), (0, ct.useEffect)(_, v));
  let y = se,
    b;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = w(Z.dialog, he.surface)), (t[7] = b)) : (b = t[7]);
  let x = Z,
    S;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = {
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), r.current?.focus());
        },
      }),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] === e
    ? (C = t[10])
    : ((C = (t) => {
        t || e.onClose();
      }),
      (t[9] = e),
      (t[10] = C));
  let ae = Z,
    T;
  t[11] !== g || t[12] !== e
    ? ((T = (t) => {
        (t.preventDefault(), g && e.onSubmit());
      }),
      (t[11] = g),
      (t[12] = e),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] === e.showArtworkBackground
    ? (E = t[15])
    : ((E =
        (e.showArtworkBackground ?? !0) && (0, Q.jsx)(`div`, { className: Z.background, "aria-hidden": !0 })),
      (t[14] = e.showArtworkBackground),
      (t[15] = E));
  let D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(`div`, { className: Z.heroIcon, children: (0, Q.jsx)(oe, {}) })), (t[16] = D))
    : (D = t[16]);
  let k;
  t[17] !== n || t[18] !== f || t[19] !== e || t[20] !== s.step
    ? ((k =
        s.step === `connect`
          ? (0, Q.jsx)(`button`, {
              type: `button`,
              className: w(Z.iconButton, Z.back),
              disabled: f,
              "aria-label": n.formatMessage({
                id: `writingStyle.setup.back`,
                defaultMessage: `Back`,
                description: `Button returning from the Writing style source picker to its overview without saving consent`,
              }),
              onClick: () => e.onScreenChange({ step: `categories` }),
              children: (0, Q.jsx)(d, {}),
            })
          : null),
      (t[17] = n),
      (t[18] = f),
      (t[19] = e),
      (t[20] = s.step),
      (t[21] = k))
    : (k = t[21]);
  let A;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = w(Z.iconButton, Z.close)), (t[22] = A))
    : (A = t[22]);
  let j;
  t[23] === n
    ? (j = t[24])
    : ((j = n.formatMessage({
        id: `tpp.write_like_me.setup.close`,
        defaultMessage: `Close`,
        description: `Closes writing-style setup without changing the user's preference`,
      })),
      (t[23] = n),
      (t[24] = j));
  let le;
  t[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((le = (0, Q.jsx)(o, {})), (t[25] = le)) : (le = t[25]);
  let M;
  t[26] !== e.onClose || t[27] !== j
    ? ((M = (0, Q.jsx)(`button`, {
        type: `button`,
        className: A,
        "aria-label": j,
        onClick: e.onClose,
        children: le,
      })),
      (t[26] = e.onClose),
      (t[27] = j),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] !== E || t[30] !== k || t[31] !== M
    ? ((N = (0, Q.jsxs)(`div`, { className: Z.hero, children: [E, D, k, M] })),
      (t[29] = E),
      (t[30] = k),
      (t[31] = M),
      (t[32] = N))
    : (N = t[32]);
  let de = Z,
    P;
  t[33] === e.enabled
    ? (P = t[34])
    : ((P = (0, Q.jsx)(re, {
        children: (0, Q.jsx)(`span`, {
          ref: r,
          tabIndex: -1,
          className: Z.heading,
          children: e.enabled
            ? (0, Q.jsx)(u, {
                id: `workOnboarding.writingStyle.enabledTitle`,
                defaultMessage: `Writing style is personalized`,
                description: `Heading confirming writing-style personalization is enabled`,
              })
            : (0, Q.jsx)(u, {
                id: `workOnboarding.writingStyle.title`,
                defaultMessage: `Set up writing style`,
                description: `Heading while writing-style personalization has not yet been enabled`,
              }),
        }),
      })),
      (t[33] = e.enabled),
      (t[34] = P));
  let F;
  t[35] === e.onManage
    ? (F = t[36])
    : ((F = (0, Q.jsx)(ie, {
        className: Z.description,
        children: (0, Q.jsx)(u, {
          id: `workOnboarding.writingStyle.descriptionWithManage`,
          defaultMessage: `ChatGPT uses your chats and Library files to write in your style. <manage>Manage</manage>`,
          description: `Writing-style setup description. Library is ChatGPT's file library. The inline Manage link closes setup and opens Personalization settings.`,
          values: {
            manage: (t) =>
              (0, Q.jsx)(`button`, {
                type: `button`,
                className: `cursor-interaction underline`,
                onClick: e.onManage,
                children: t,
              }),
          },
        }),
      })),
      (t[35] = e.onManage),
      (t[36] = F));
  let I;
  t[37] !== P || t[38] !== F
    ? ((I = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-2 text-center`, children: [P, F] })),
      (t[37] = P),
      (t[38] = F),
      (t[39] = I))
    : (I = t[39]);
  let L;
  t[40] === s.step
    ? (L = t[41])
    : ((L =
        s.step === `categories`
          ? (0, Q.jsx)(`h3`, {
              className: `font-semibold`,
              children: (0, Q.jsx)(u, {
                id: `workOnboarding.writingStyle.improve`,
                defaultMessage: `Connect apps to improve writing (optional)`,
                description: `Heading above optional app connections that provide additional writing examples`,
              }),
            })
          : null),
      (t[40] = s.step),
      (t[41] = L));
  let R;
  t[42] === i.status
    ? (R = t[43])
    : ((R =
        i.status === `loading` &&
        (0, Q.jsxs)(`div`, {
          role: `status`,
          className: `flex items-center justify-center gap-2 py-6 text-sm text-secondary`,
          children: [
            (0, Q.jsx)(ce, { className: `size-4` }),
            (0, Q.jsx)(u, {
              id: `tpp.write_like_me.setup.loading_connections`,
              defaultMessage: `Checking connected apps…`,
              description: `Writing-style setup checks usable account connections and available apps`,
            }),
          ],
        })),
      (t[42] = i.status),
      (t[43] = R));
  let z;
  t[44] !== i.retrying || t[45] !== i.status || t[46] !== e.onRetryConnections
    ? ((z =
        i.status === `error` &&
        (0, Q.jsxs)(`div`, {
          role: `alert`,
          className: `flex flex-col items-center gap-3 py-4 text-center text-sm text-danger`,
          children: [
            (0, Q.jsx)(u, {
              id: `tpp.write_like_me.setup.connections_error`,
              defaultMessage: `We couldn’t check your connected apps. Try again.`,
              description: `Writing-style setup failed to verify connections; Retry repeats the data check`,
            }),
            (0, Q.jsxs)(`button`, {
              type: `button`,
              className: w(Z.button, Z.secondary),
              disabled: i.retrying,
              onClick: e.onRetryConnections,
              children: [
                i.retrying && (0, Q.jsx)(ce, { className: `size-4` }),
                (0, Q.jsx)(u, {
                  id: `tpp.write_like_me.setup.retry_connections`,
                  defaultMessage: `Retry`,
                  description: `Retries verifying writing-style app connections`,
                }),
              ],
            }),
          ],
        })),
      (t[44] = i.retrying),
      (t[45] = i.status),
      (t[46] = e.onRetryConnections),
      (t[47] = z))
    : (z = t[47]);
  let B;
  t[48] !== c || t[49] !== i.status
    ? ((B =
        i.status !== `loading` &&
        i.status !== `error` &&
        c != null &&
        (0, Q.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(u, {
            id: `tpp.write_like_me.setup.finishing_connection`,
            defaultMessage: `Finishing connection…`,
            description: `Writing-style setup is verifying the app connection after authorization`,
          }),
        })),
      (t[48] = c),
      (t[49] = i.status),
      (t[50] = B))
    : (B = t[50]);
  let V =
      p != null &&
      (s.step === `categories`
        ? (0, Q.jsx)(`ul`, {
            className: `flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border`,
            children: [`messaging`, `email`, `documents`].map((t) => {
              let r = ee?.filter((e) => e.category === t) ?? [];
              return (0, Q.jsx)(
                `li`,
                {
                  children: (0, Q.jsx)(O, {
                    className: `justify-between max-sm:flex-wrap`,
                    variant: `featured`,
                    inset: !1,
                    labelSizing: `content`,
                    controlSizing: `content`,
                    icon: (0, Q.jsx)(`span`, {
                      className: Z.categoryIcon,
                      children: {
                        messaging: (0, Q.jsx)(ue, {}),
                        documents: (0, Q.jsx)(a, {}),
                        email: (0, Q.jsx)(te, {}),
                      }[t],
                    }),
                    label: (0, Q.jsx)(u, { ...X.category, values: { category: t } }),
                    control:
                      r.length > 0
                        ? (0, Q.jsxs)(`div`, {
                            className: `ms-auto flex items-center gap-1 text-secondary`,
                            children: [
                              (0, Q.jsxs)(`div`, {
                                className: `flex items-center gap-1.5`,
                                "aria-hidden": !0,
                                children: [
                                  (0, Q.jsxs)(`div`, {
                                    className: Z.iconStack,
                                    children: [
                                      r.slice(0, 2).map(et),
                                      r.length > 2 &&
                                        (0, Q.jsx)(`span`, {
                                          className: Z.iconOverflow,
                                          children: (0, Q.jsx)(u, {
                                            id: `tpp.write_like_me.setup.connected_overflow`,
                                            defaultMessage: `+{remaining}`,
                                            description: `Count of additional connected apps beyond the first two icons in the writing-style category summary; remaining is a positive integer`,
                                            values: { remaining: r.length - 2 },
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-base`,
                                    children: (0, Q.jsx)(u, {
                                      id: `tpp.write_like_me.setup.category_connected`,
                                      defaultMessage: `Connected`,
                                      description: `Status for a writing-style category with verified usable app connections`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `sr-only`,
                                children: (0, Q.jsx)(u, {
                                  id: `tpp.write_like_me.setup.connected_names`,
                                  defaultMessage: `{apps} connected`,
                                  description: `Accessible list of the connected product names in a writing-style category`,
                                  values: { apps: n.formatList(r.map($e)) },
                                }),
                              }),
                              (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: Z.iconButton,
                                disabled: f,
                                "aria-label": n.formatMessage(X.addApps, { category: t }),
                                onClick: () => e.onScreenChange({ step: `connect`, category: t }),
                                children: (0, Q.jsx)(l, {}),
                              }),
                            ],
                          })
                        : (0, Q.jsx)(`button`, {
                            type: `button`,
                            className: w(Z.button, Z.secondary),
                            disabled: f,
                            "aria-label": n.formatMessage(X.setupCategory, { category: t }),
                            onClick: () => e.onScreenChange({ step: `connect`, category: t }),
                            children: (0, Q.jsx)(u, {
                              id: `tpp.write_like_me.setup.category_setup`,
                              defaultMessage: `Set up`,
                              description: `Opens the app picker for the writing-style category; does not begin authorization`,
                            }),
                          }),
                  }),
                },
                t,
              );
            }),
          })
        : (0, Q.jsx)(it, {
            apps: h ?? [],
            connectingAppId: c,
            disabled: f || i.status !== `ready`,
            onConnect: e.onConnect,
          })),
    H;
  t[51] === e.connectionError
    ? (H = t[52])
    : ((H =
        e.connectionError &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(u, {
            id: `tpp.write_like_me.setup.connect_error`,
            defaultMessage: `The app wasn’t connected. Try connecting again.`,
            description: `Writing-style setup could not complete an app connection; the user can retry`,
          }),
        })),
      (t[51] = e.connectionError),
      (t[52] = H));
  let U;
  t[53] === e.submitError
    ? (U = t[54])
    : ((U =
        e.submitError != null &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-center text-sm text-danger`,
          children: e.submitError,
        })),
      (t[53] = e.submitError),
      (t[54] = U));
  let fe;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = w(Z.button, Z.primary, Z.finish)), (t[55] = fe))
    : (fe = t[55]);
  let pe = !g,
    W;
  t[56] === f ? (W = t[57]) : ((W = f && (0, Q.jsx)(ce, { className: `size-4` })), (t[56] = f), (t[57] = W));
  let G;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Q.jsx)(u, {
        id: `workOnboarding.writingStyle.showMe`,
        defaultMessage: `Show me`,
        description: `Saves writing-style personalization and starts a demonstration in chat; connecting apps is optional`,
      })),
      (t[58] = G))
    : (G = t[58]);
  let K;
  t[59] !== pe || t[60] !== W
    ? ((K = (0, Q.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Q.jsxs)(`button`, { type: `submit`, className: fe, disabled: pe, children: [W, G] }),
      })),
      (t[59] = pe),
      (t[60] = W),
      (t[61] = K))
    : (K = t[61]);
  let me;
  t[62] !== U || t[63] !== K
    ? ((me = (0, Q.jsxs)(`div`, { className: Z.footer, children: [U, K] })),
      (t[62] = U),
      (t[63] = K),
      (t[64] = me))
    : (me = t[64]);
  let q;
  t[65] !== de.content ||
  t[66] !== I ||
  t[67] !== L ||
  t[68] !== R ||
  t[69] !== z ||
  t[70] !== B ||
  t[71] !== V ||
  t[72] !== H ||
  t[73] !== me
    ? ((q = (0, Q.jsxs)(`div`, { className: de.content, children: [I, L, R, z, B, V, H, me] })),
      (t[65] = de.content),
      (t[66] = I),
      (t[67] = L),
      (t[68] = R),
      (t[69] = z),
      (t[70] = B),
      (t[71] = V),
      (t[72] = H),
      (t[73] = me),
      (t[74] = q))
    : (q = t[74]);
  let J;
  t[75] !== ae.form || t[76] !== T || t[77] !== N || t[78] !== q
    ? ((J = (0, Q.jsxs)(`form`, { className: ae.form, onSubmit: T, children: [N, q] })),
      (t[75] = ae.form),
      (t[76] = T),
      (t[77] = N),
      (t[78] = q),
      (t[79] = J))
    : (J = t[79]);
  let Y;
  return (
    t[80] !== y || t[81] !== S || t[82] !== C || t[83] !== J || t[84] !== b || t[85] !== x.overlay
      ? ((Y = (0, Q.jsx)(y, {
          open: !0,
          unstyledContent: !0,
          variant: `onboarding`,
          contentPosition: `anchored`,
          showDialogClose: !1,
          contentClassName: b,
          overlayClassName: x.overlay,
          contentProps: S,
          onOpenChange: C,
          children: J,
        })),
        (t[80] = y),
        (t[81] = S),
        (t[82] = C),
        (t[83] = J),
        (t[84] = b),
        (t[85] = x.overlay),
        (t[86] = Y))
      : (Y = t[86]),
    Y
  );
}
function $e(e) {
  return e.name;
}
function et(e) {
  return (0, Q.jsx)(nt, { app: e, compact: !0 }, e.id);
}
function tt(e) {
  return e.connection === `connected`;
}
function nt(e) {
  let t = (0, st.c)(17),
    { app: r, compact: a } = e,
    o = a !== void 0 && a,
    s = c() ? (r.iconDarkUrl ?? r.iconUrl) : (r.iconUrl ?? r.iconDarkUrl),
    l;
  if (t[0] !== o || t[1] !== s) {
    let e = s?.startsWith(`/images/`) ? new URL(s, n).href : s,
      r = I(e),
      a = o ? i : y,
      c;
    t[3] === a ? (c = t[4]) : ((c = (0, Q.jsx)(a, { className: `text-secondary` })), (t[3] = a), (t[4] = c));
    let u = c;
    if (((l = u), r != null)) {
      let e;
      t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = /^link_/), (t[5] = e)) : (e = t[5]);
      let n = { ...r, connectorId: r.connectorId.replace(e, ``) },
        i;
      (t[6] !== u || t[7] !== n
        ? ((i = (0, Q.jsx)(rt, { request: n, fallback: u })), (t[6] = u), (t[7] = n), (t[8] = i))
        : (i = t[8]),
        (l = i));
    } else if (e != null) {
      let n;
      (t[9] !== u || t[10] !== e
        ? ((n = (0, Q.jsx)(U, { alt: ``, className: `h-full w-full object-cover`, src: e, fallback: u }, e)),
          (t[9] = u),
          (t[10] = e),
          (t[11] = n))
        : (n = t[11]),
        (l = n));
    }
    ((t[0] = o), (t[1] = s), (t[2] = l));
  } else l = t[2];
  let u = o && Z.compactIcon,
    d;
  t[12] === u ? (d = t[13]) : ((d = w(Z.appIcon, u)), (t[12] = u), (t[13] = d));
  let f;
  return (
    t[14] !== l || t[15] !== d
      ? ((f = (0, Q.jsx)(`span`, { "aria-hidden": !0, className: d, children: l })),
        (t[14] = l),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function rt(e) {
  let t = (0, st.c)(3),
    { request: n, fallback: r } = e,
    i = pe(n),
    a;
  return (
    t[0] !== r || t[1] !== i
      ? ((a =
          i == null
            ? r
            : (0, Q.jsx)(U, { alt: ``, className: `h-full w-full object-cover`, src: i, fallback: r }, i)),
        (t[0] = r),
        (t[1] = i),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
function it(e) {
  let t = (0, st.c)(12),
    { apps: n, connectingAppId: r, disabled: i, onConnect: a } = e;
  if (n.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`p`, {
            className: `py-4 text-sm text-secondary`,
            children: (0, Q.jsx)(u, {
              id: `tpp.write_like_me.setup.no_apps`,
              defaultMessage: `No apps are available to connect in this workspace.`,
              description: `No supported writing-style apps are available for this workspace and category`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  if (t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== r || t[7] !== i || t[8] !== a
      ? ((e = (e) =>
          (0, Q.jsx)(
            `li`,
            {
              children: (0, Q.jsx)(O, {
                className: `justify-between max-sm:flex-wrap`,
                variant: `featured`,
                inset: !1,
                labelSizing: `content`,
                controlSizing: `content`,
                icon: (0, Q.jsx)(nt, { app: e }),
                label: e.name,
                control: (0, Q.jsx)(ot, { app: e, connectingAppId: r, disabled: i, onConnect: a }),
              }),
            },
            e.id,
          )),
        (t[6] = r),
        (t[7] = i),
        (t[8] = a),
        (t[9] = e))
      : (e = t[9]),
      (o = [...n].sort(at).map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[10] === o
      ? (s = t[11])
      : ((s = (0, Q.jsx)(`ul`, { className: b, children: o })), (t[10] = o), (t[11] = s)),
    s
  );
}
function at(e, t) {
  return Number(e.connection === `connected`) - Number(t.connection === `connected`);
}
function ot(e) {
  let t = (0, st.c)(25),
    { app: n, connectingAppId: r, disabled: i, onConnect: a } = e,
    o = ne();
  if (n.connection === `connected`) {
    let e, n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = w(Z.iconButton, `text-secondary`)), (n = (0, Q.jsx)(m, {})), (t[0] = e), (t[1] = n))
      : ((e = t[0]), (n = t[1]));
    let r;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsxs)(`span`, {
            role: `status`,
            className: e,
            children: [
              n,
              (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(u, {
                  id: `tpp.write_like_me.setup.connected`,
                  defaultMessage: `Connected`,
                  description: `The writing-style app has a verified usable account connection`,
                }),
              }),
            ],
          })),
          (t[2] = r))
        : (r = t[2]),
      r
    );
  }
  if (n.id === r) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(ce, { className: `size-5` })), (t[3] = e))
      : (e = t[3]);
    let r;
    return (
      t[4] === n.name
        ? (r = t[5])
        : ((r = (0, Q.jsxs)(`span`, {
            role: `status`,
            className: Z.iconButton,
            children: [
              e,
              (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(u, {
                  id: `tpp.write_like_me.setup.connecting_app`,
                  defaultMessage: `Connecting {app}…`,
                  description: `Accessible status while a writing-style app connection is in progress`,
                  values: { app: n.name },
                }),
              }),
            ],
          })),
          (t[4] = n.name),
          (t[5] = r)),
      r
    );
  }
  if (n.connection === `unavailable`) {
    let e;
    return (
      t[6] === n.connection
        ? (e = t[7])
        : ((e = (0, Q.jsx)(`span`, {
            className: `text-sm text-secondary`,
            children: (0, Q.jsx)(u, { ...X.connectionAction, values: { state: n.connection } }),
          })),
          (t[6] = n.connection),
          (t[7] = e)),
      e
    );
  }
  let s;
  t[8] === n.connection
    ? (s = t[9])
    : ((s = n.connection === `disconnected` ? Z.iconButton : w(Z.button, Z.ghost)),
      (t[8] = n.connection),
      (t[9] = s));
  let c = i || r != null,
    l;
  t[10] !== n.connection || t[11] !== n.name || t[12] !== o
    ? ((l = o.formatMessage(n.connection === `reauth` ? X.reconnect : X.connect, { app: n.name })),
      (t[10] = n.connection),
      (t[11] = n.name),
      (t[12] = o),
      (t[13] = l))
    : (l = t[13]);
  let d;
  t[14] !== n.id || t[15] !== a
    ? ((d = () => a(n.id)), (t[14] = n.id), (t[15] = a), (t[16] = d))
    : (d = t[16]);
  let f;
  t[17] === n.connection
    ? (f = t[18])
    : ((f =
        n.connection === `disconnected`
          ? (0, Q.jsx)(ee, {})
          : (0, Q.jsx)(u, { ...X.connectionAction, values: { state: n.connection } })),
      (t[17] = n.connection),
      (t[18] = f));
  let p;
  return (
    t[19] !== s || t[20] !== c || t[21] !== l || t[22] !== d || t[23] !== f
      ? ((p = (0, Q.jsx)(`button`, {
          type: `button`,
          className: s,
          disabled: c,
          "aria-label": l,
          onClick: d,
          children: f,
        })),
        (t[19] = s),
        (t[20] = c),
        (t[21] = l),
        (t[22] = d),
        (t[23] = f),
        (t[24] = p))
      : (p = t[24]),
    p
  );
}
var st, ct, Q;
function lt() {
  return (lt = e(() => {
    ((st = A()),
      S(),
      D(),
      (ct = N()),
      E(),
      P(),
      V(),
      k(),
      v(),
      B(),
      ae(),
      T(),
      x(),
      g(),
      De(),
      Ze(),
      Y(),
      (Q = M()));
  }))();
}
function ut(e) {
  let n = (0, dt.c)(67),
    { identity: r, sourceAttributionId: i, enableOnSelect: a, onClose: o, onSubmit: c } = e,
    l = a !== void 0 && a,
    d = f(s),
    ee = ne(),
    m = le(),
    { installPlugin: te, status: h } = fe(),
    g = de(Ce, r),
    _ = l && (g.isPending || g.status === `idle`),
    { data: v, isError: y, isFetching: b, refetch: x } = de(Te, r),
    { data: S } = de(Se, r),
    re;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = { step: `categories` }), (n[0] = re))
    : (re = n[0]);
  let [C, w] = (0, $.useState)(re),
    [ie, ae] = (0, $.useState)(),
    [T, E] = (0, $.useState)(!1),
    [oe, se] = (0, $.useState)(!1),
    [ce, D] = (0, $.useState)(null),
    O = (0, $.useRef)(null),
    k = (0, $.useRef)(null),
    A = (0, $.useRef)(!1),
    j,
    M;
  (n[1] === d
    ? ((j = n[2]), (M = n[3]))
    : ((j = () => (
        k.current ??
          ((k.current = performance.now()),
          d
            .get(q)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: `onboarding`,
              stage: `shown`,
            })),
        () => {
          O.current?.abort();
        }
      )),
      (M = [d]),
      (n[1] = d),
      (n[2] = j),
      (n[3] = M)),
    (0, $.useEffect)(j, M));
  let ue;
  n[4] === d
    ? (ue = n[5])
    : ((ue = (e) => {
        A.current ||
          ((A.current = !0),
          d
            .get(q)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: `onboarding`,
              stage: e,
            }),
          d
            .get(q)
            .hist(
              `default`,
              `write_like_me.setup_duration_ms`,
              { entry_point: `onboarding`, outcome: e },
              Math.max(0, performance.now() - (k.current ?? performance.now())),
            ));
      }),
      (n[4] = d),
      (n[5] = ue));
  let N = ue,
    P;
  n[6] !== o || n[7] !== N
    ? ((P = () => {
        (O.current?.abort(), N(`dismissed`), o());
      }),
      (n[6] = o),
      (n[7] = N),
      (n[8] = P))
    : (P = n[8]);
  let F = P,
    I;
  n[9] !== v ||
  n[10] !== r ||
  n[11] !== te ||
  n[12] !== y ||
  n[13] !== b ||
  n[14] !== m ||
  n[15] !== x ||
  n[16] !== d ||
  n[17] !== i ||
  n[18] !== h
    ? ((I = async (e) => {
        let n = v?.find((t) => {
          let { id: n } = t;
          return n === e;
        });
        if (
          n == null ||
          n.connection === `connected` ||
          n.connection === `unavailable` ||
          O.current != null ||
          h != null ||
          b ||
          y ||
          !J(d, r)
        )
          return;
        let a = new AbortController();
        ((O.current = a), ae(e), E(!1));
        let o = performance.now(),
          s = { category: n.category, connector: n.connector ?? `unknown`, entry_point: `onboarding` };
        d.get(q).count(`default`, `write_like_me.connector_engagement`, { ...s, outcome: `started` });
        let c = !1,
          l = async (t) => {
            if (c || a.signal.aborted) return;
            c = !0;
            let n = await x();
            if (a.signal.aborted || !J(d, r)) return;
            ((O.current = null), ae(void 0));
            let i = !n.isError && n.data?.some((t) => t.id === e && t.connection === `connected`) === !0,
              l = t === `success` && !i ? `connection_required` : t;
            (E(l === `failure` || l === `connection_required`),
              d.get(q).count(`default`, `write_like_me.connector_engagement`, { ...s, outcome: l }),
              d
                .get(q)
                .hist(
                  `default`,
                  `write_like_me.connector_duration_ms`,
                  { ...s, outcome: l },
                  Math.max(0, performance.now() - o),
                ));
          };
        try {
          let [o] = await d.queryClient.fetchQuery(be(r, [e]));
          if (a.signal.aborted || !J(d, r)) return;
          if (o == null) {
            await l(`failure`);
            return;
          }
          let s = o.canonical_app_id ?? ve(o)[0];
          te(
            {
              displayName: n.name,
              remotePluginId: o.id,
              remoteMarketplaceName: `openai-curated-remote`,
              connectionAppId: s,
            },
            {
              hostId: `local`,
              hostedAccountId: r.accountId,
              sourceAttributionId: i,
              sourceSectionId: `work_onboarding`,
              source: t.CODEX_PLUGIN_SOURCE_CURATED,
              requiresAppSetup: !0,
              requestedConnectorId: s,
              appConnectOptions:
                s == null
                  ? void 0
                  : {
                      connectorId: s,
                      productSku: `CONNECTOR_SETTING`,
                      redirectAfter: `${m.pathname}${m.search}${m.hash}`,
                    },
              marketplaceAnalytics: {
                surface: p.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING,
                source: t.CODEX_PLUGIN_SOURCE_CURATED,
                chatgpt: {
                  productExperience: L.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                  surface: R.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_NUX,
                },
              },
              onSuccess: () => {
                l(`success`);
              },
              onError: () => {
                l(`failure`);
              },
              onCancel: () => {
                l(`cancelled`);
              },
            },
          ) || (await l(`cancelled`));
        } catch {
          await l(`failure`);
        }
      }),
      (n[9] = v),
      (n[10] = r),
      (n[11] = te),
      (n[12] = y),
      (n[13] = b),
      (n[14] = m),
      (n[15] = x),
      (n[16] = d),
      (n[17] = i),
      (n[18] = h),
      (n[19] = I))
    : (I = n[19]);
  let z = I,
    B;
  n[20] !== v ||
  n[21] !== l ||
  n[22] !== g ||
  n[23] !== _ ||
  n[24] !== r ||
  n[25] !== ee ||
  n[26] !== o ||
  n[27] !== c ||
  n[28] !== N ||
  n[29] !== d ||
  n[30] !== i ||
  n[31] !== h
    ? ((B = async () => {
        if (_ || O.current != null || h != null || !J(d, r)) return;
        let e = [`email`, `messaging`, `documents`].find((e) =>
          v?.some((t) => t.category === e && t.connection === `connected`),
        );
        d.get(q).count(`default`, `write_like_me.setup_funnel`, {
          category: e ?? `not_applicable`,
          entry_point: `onboarding`,
          stage: `use_clicked`,
        });
        let t = new AbortController();
        ((O.current = t), se(!0), D(null));
        let n = !1,
          a;
        ((a = l
          ? g.data === !0
            ? Promise.resolve(!0)
            : g.mutateAsync({ sourceAttributionId: i })
          : Ee(d, { identity: r, sourceAttributionId: i, signal: t.signal })),
          await a
            .then(async (e) => {
              if (((n = e), t.signal.aborted || !J(d, r))) return;
              if (!n) {
                D(`save`);
                return;
              }
              let i = await c({ prompt: xe(ee), signal: t.signal });
              if (!(!J(d, r) || (!i && t.signal.aborted))) {
                if (!i) {
                  D(`continuation`);
                  return;
                }
                (N(`completed`), o());
              }
            })
            .catch(() => {
              !t.signal.aborted && J(d, r) && D(n ? `continuation` : `save`);
            })
            .finally(() => {
              !t.signal.aborted && J(d, r) && ((O.current = null), se(!1));
            }));
      }),
      (n[20] = v),
      (n[21] = l),
      (n[22] = g),
      (n[23] = _),
      (n[24] = r),
      (n[25] = ee),
      (n[26] = o),
      (n[27] = c),
      (n[28] = N),
      (n[29] = d),
      (n[30] = i),
      (n[31] = h),
      (n[32] = B))
    : (B = n[32]);
  let V = B,
    H;
  if (y) {
    let e;
    (n[33] !== v || n[34] !== b
      ? ((e = { status: `error`, apps: v, retrying: b }), (n[33] = v), (n[34] = b), (n[35] = e))
      : (e = n[35]),
      (H = e));
  } else if (v == null) {
    let e;
    (n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (n[36] = e))
      : (e = n[36]),
      (H = e));
  } else {
    let e = b ? `refreshing` : `ready`,
      t;
    (n[37] !== v || n[38] !== e
      ? ((t = { status: e, apps: v }), (n[37] = v), (n[38] = e), (n[39] = t))
      : (t = n[39]),
      (H = t));
  }
  let U;
  if (ce === `save` || (l && !oe && (g.isError || g.data === !1))) {
    let e;
    (n[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ft.jsx)(u, {
          id: `tpp.write_like_me.error.save`,
          defaultMessage: `We couldn’t save your Writing style preference. Please try again.`,
          description: `Saving the user's explicit writing-style preference failed; the user can retry without assuming the server rolled back the change`,
        })),
        (n[40] = e))
      : (e = n[40]),
      (U = e));
  } else if (ce === `continuation`) {
    let e;
    (n[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ft.jsx)(u, {
          id: `tpp.write_like_me.error.continuation`,
          defaultMessage: `Your Writing style preference was saved, but we couldn’t start this chat. Please try again.`,
          description: `The writing-style preference was confirmed saved, but starting the example chat failed`,
        })),
        (n[41] = e))
      : (e = n[41]),
      (U = e));
  }
  let pe = S?.enabled === !0,
    W;
  n[42] !== F || n[43] !== d
    ? ((W = () => {
        (F(), d.get(me).navigate(`/settings/personalization`));
      }),
      (n[42] = F),
      (n[43] = d),
      (n[44] = W))
    : (W = n[44]);
  let G = oe || _,
    K;
  n[45] === z
    ? (K = n[46])
    : ((K = (e) => {
        z(e);
      }),
      (n[45] = z),
      (n[46] = K));
  let Y;
  n[47] === x
    ? (Y = n[48])
    : ((Y = () => {
        x();
      }),
      (n[47] = x),
      (n[48] = Y));
  let he;
  n[49] === d
    ? (he = n[50])
    : ((he = (e) => {
        (O.current?.abort(),
          (O.current = null),
          ae(void 0),
          E(!1),
          e.step === `connect` &&
            d
              .get(q)
              .count(`default`, `write_like_me.setup_funnel`, {
                category: e.category,
                entry_point: `onboarding`,
                stage: `category_selected`,
              }),
          w(e));
      }),
      (n[49] = d),
      (n[50] = he));
  let ge;
  n[51] === V
    ? (ge = n[52])
    : ((ge = () => {
        V();
      }),
      (n[51] = V),
      (n[52] = ge));
  let _e;
  return (
    n[53] !== F ||
    n[54] !== ie ||
    n[55] !== T ||
    n[56] !== H ||
    n[57] !== C ||
    n[58] !== U ||
    n[59] !== W ||
    n[60] !== G ||
    n[61] !== K ||
    n[62] !== Y ||
    n[63] !== he ||
    n[64] !== ge ||
    n[65] !== pe
      ? ((_e = (0, ft.jsx)(Qe, {
          connections: H,
          enabled: pe,
          onManage: W,
          screen: C,
          connectingAppId: ie,
          connectionError: T,
          isSubmitting: G,
          submitError: U,
          onClose: F,
          onConnect: K,
          onRetryConnections: Y,
          onScreenChange: he,
          onSubmit: ge,
        })),
        (n[53] = F),
        (n[54] = ie),
        (n[55] = T),
        (n[56] = H),
        (n[57] = C),
        (n[58] = U),
        (n[59] = W),
        (n[60] = G),
        (n[61] = K),
        (n[62] = Y),
        (n[63] = he),
        (n[64] = ge),
        (n[65] = pe),
        (n[66] = _e))
      : (_e = n[66]),
    _e
  );
}
var dt, $, ft;
function pt() {
  return (pt = e(() => {
    ((dt = A()),
      K(),
      F(),
      _(),
      h(),
      D(),
      ($ = N()),
      E(),
      C(),
      H(),
      W(),
      z(),
      j(),
      G(),
      ge(),
      lt(),
      ye(),
      _e(),
      we(),
      (ft = M()));
  }))();
}
export { pt as n, ut as t };
//# sourceMappingURL=writing-style-setup-2db859f2b6e8.js.map
