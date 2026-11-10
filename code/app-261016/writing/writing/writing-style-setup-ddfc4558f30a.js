import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $9 as n,
  $St as r,
  $st as i,
  AB as a,
  CY as o,
  FBt as s,
  GK as c,
  J9 as l,
  JO as u,
  KO as d,
  LK as f,
  LNt as p,
  MH as m,
  MNt as h,
  NNt as g,
  NSt as _,
  PBt as v,
  Qst as ee,
  RH as te,
  RK as y,
  Rrt as b,
  TY as ne,
  VSt as x,
  WO as re,
  XOt as S,
  YOt as ie,
  ZSt as C,
  _H as ae,
  bU as oe,
  dK as se,
  e6 as w,
  hSt as ce,
  jU as le,
  kB as T,
  nCt as ue,
  nw as E,
  okt as de,
  qO as fe,
  rw as D,
  sct as O,
  sw as pe,
  tkt as k,
  uw as A,
  wH as j,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Air as M,
  D3n as N,
  E3n as me,
  EFt as P,
  F6t as F,
  KBr as I,
  Mir as L,
  P6t as R,
  Rzn as z,
  U3n as B,
  a3n as V,
  bnn as he,
  i3n as H,
  mnn as U,
  o6n as W,
  s6n as G,
  z3n as K,
  zzn as q,
} from "./app-initial-ad16eaadf81f.js";
import { L as J, R as Y } from "./app-primary-3e00728c2a4c.js";
import { r as ge } from "./state-52a0b939b0d5.js";
import { c as _e, f as ve, n as ye, r as be } from "./queries-bc5fa9dfcb85.js";
import { n as xe } from "./writing-style-demo-cab6908153aa.js";
import { a as Se, i as Ce, n as we, r as Te, t as Ee } from "./writing-style-2ed1a71675c7.js";
var X;
function De() {
  return (De = e(() => {
    (S(),
      (X = ie({
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
  let n = (0, st.c)(87),
    r = de(),
    i = (0, ct.useRef)(null),
    { connections: a, screen: s, connectingAppId: c, isSubmitting: l } = e,
    u = a.status === `loading` ? void 0 : a.apps,
    f = u?.filter(tt),
    p;
  n[0] !== u || n[1] !== s.category || n[2] !== s.step
    ? ((p = s.step === `connect` ? u?.filter((e) => e.category === s.category) : void 0),
      (n[0] = u),
      (n[1] = s.category),
      (n[2] = s.step),
      (n[3] = p))
    : (p = n[3]);
  let g = p,
    _ = c == null && !l,
    v;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        i.current?.focus();
      }),
      (n[4] = v))
    : (v = n[4]);
  let ee;
  (n[5] === s.step ? (ee = n[6]) : ((ee = [s.step]), (n[5] = s.step), (n[6] = ee)), (0, ct.useEffect)(v, ee));
  let y = re,
    b;
  n[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = h(Z.dialog, Y.surface)), (n[7] = b)) : (b = n[7]);
  let ne = Z,
    x;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = {
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), i.current?.focus());
        },
      }),
      (n[8] = x))
    : (x = n[8]);
  let S;
  n[9] === e
    ? (S = n[10])
    : ((S = (t) => {
        t || e.onClose();
      }),
      (n[9] = e),
      (n[10] = S));
  let ie = Z,
    C;
  n[11] !== _ || n[12] !== e
    ? ((C = (t) => {
        (t.preventDefault(), _ && e.onSubmit());
      }),
      (n[11] = _),
      (n[12] = e),
      (n[13] = C))
    : (C = n[13]);
  let w;
  n[14] === e.showArtworkBackground
    ? (w = n[15])
    : ((w =
        (e.showArtworkBackground ?? !0) && (0, Q.jsx)(`div`, { className: Z.background, "aria-hidden": !0 })),
      (n[14] = e.showArtworkBackground),
      (n[15] = w));
  let ce;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(`div`, { className: Z.heroIcon, children: (0, Q.jsx)(se, {}) })), (n[16] = ce))
    : (ce = n[16]);
  let T;
  n[17] !== r || n[18] !== l || n[19] !== e || n[20] !== s.step
    ? ((T =
        s.step === `connect`
          ? (0, Q.jsx)(`button`, {
              type: `button`,
              className: h(Z.iconButton, Z.back),
              disabled: l,
              "aria-label": r.formatMessage({
                id: `writingStyle.setup.back`,
                defaultMessage: `Back`,
                description: `Button returning from the Writing style source picker to its overview without saving consent`,
              }),
              onClick: () => e.onScreenChange({ step: `categories` }),
              children: (0, Q.jsx)(m, {}),
            })
          : null),
      (n[17] = r),
      (n[18] = l),
      (n[19] = e),
      (n[20] = s.step),
      (n[21] = T))
    : (T = n[21]);
  let ue;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = h(Z.iconButton, Z.close)), (n[22] = ue))
    : (ue = n[22]);
  let E;
  n[23] === r
    ? (E = n[24])
    : ((E = r.formatMessage({
        id: `tpp.write_like_me.setup.close`,
        defaultMessage: `Close`,
        description: `Closes writing-style setup without changing the user's preference`,
      })),
      (n[23] = r),
      (n[24] = E));
  let D;
  n[25] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, Q.jsx)(o, {})), (n[25] = D)) : (D = n[25]);
  let O;
  n[26] !== e.onClose || n[27] !== E
    ? ((O = (0, Q.jsx)(`button`, {
        type: `button`,
        className: ue,
        "aria-label": E,
        onClick: e.onClose,
        children: D,
      })),
      (n[26] = e.onClose),
      (n[27] = E),
      (n[28] = O))
    : (O = n[28]);
  let A;
  n[29] !== w || n[30] !== T || n[31] !== O
    ? ((A = (0, Q.jsxs)(`div`, { className: Z.hero, children: [w, ce, T, O] })),
      (n[29] = w),
      (n[30] = T),
      (n[31] = O),
      (n[32] = A))
    : (A = n[32]);
  let j = Z,
    M;
  n[33] === e.enabled
    ? (M = n[34])
    : ((M = (0, Q.jsx)(fe, {
        children: (0, Q.jsx)(`span`, {
          ref: i,
          tabIndex: -1,
          className: Z.heading,
          children: e.enabled
            ? (0, Q.jsx)(k, {
                id: `workOnboarding.writingStyle.enabledTitle`,
                defaultMessage: `Writing style is personalized`,
                description: `Heading confirming writing-style personalization is enabled`,
              })
            : (0, Q.jsx)(k, {
                id: `workOnboarding.writingStyle.title`,
                defaultMessage: `Set up writing style`,
                description: `Heading while writing-style personalization has not yet been enabled`,
              }),
        }),
      })),
      (n[33] = e.enabled),
      (n[34] = M));
  let N;
  n[35] === e.onManage
    ? (N = n[36])
    : ((N = (0, Q.jsx)(d, {
        className: Z.description,
        children: (0, Q.jsx)(k, {
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
      (n[35] = e.onManage),
      (n[36] = N));
  let me;
  n[37] !== M || n[38] !== N
    ? ((me = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-2 text-center`, children: [M, N] })),
      (n[37] = M),
      (n[38] = N),
      (n[39] = me))
    : (me = n[39]);
  let P;
  n[40] === s.step
    ? (P = n[41])
    : ((P =
        s.step === `categories`
          ? (0, Q.jsx)(`h3`, {
              className: `font-semibold`,
              children: (0, Q.jsx)(k, {
                id: `workOnboarding.writingStyle.improve`,
                defaultMessage: `Connect apps to improve writing (optional)`,
                description: `Heading above optional app connections that provide additional writing examples`,
              }),
            })
          : null),
      (n[40] = s.step),
      (n[41] = P));
  let F;
  n[42] === a.status
    ? (F = n[43])
    : ((F =
        a.status === `loading` &&
        (0, Q.jsxs)(`div`, {
          role: `status`,
          className: `flex items-center justify-center gap-2 py-6 text-sm text-secondary`,
          children: [
            (0, Q.jsx)(t, { className: `size-4` }),
            (0, Q.jsx)(k, {
              id: `tpp.write_like_me.setup.loading_connections`,
              defaultMessage: `Checking connected apps…`,
              description: `Writing-style setup checks usable account connections and available apps`,
            }),
          ],
        })),
      (n[42] = a.status),
      (n[43] = F));
  let I;
  n[44] !== a.retrying || n[45] !== a.status || n[46] !== e.onRetryConnections
    ? ((I =
        a.status === `error` &&
        (0, Q.jsxs)(`div`, {
          role: `alert`,
          className: `flex flex-col items-center gap-3 py-4 text-center text-sm text-danger`,
          children: [
            (0, Q.jsx)(k, {
              id: `tpp.write_like_me.setup.connections_error`,
              defaultMessage: `We couldn’t check your connected apps. Try again.`,
              description: `Writing-style setup failed to verify connections; Retry repeats the data check`,
            }),
            (0, Q.jsxs)(`button`, {
              type: `button`,
              className: h(Z.button, Z.secondary),
              disabled: a.retrying,
              onClick: e.onRetryConnections,
              children: [
                a.retrying && (0, Q.jsx)(t, { className: `size-4` }),
                (0, Q.jsx)(k, {
                  id: `tpp.write_like_me.setup.retry_connections`,
                  defaultMessage: `Retry`,
                  description: `Retries verifying writing-style app connections`,
                }),
              ],
            }),
          ],
        })),
      (n[44] = a.retrying),
      (n[45] = a.status),
      (n[46] = e.onRetryConnections),
      (n[47] = I))
    : (I = n[47]);
  let L;
  n[48] !== c || n[49] !== a.status
    ? ((L =
        a.status !== `loading` &&
        a.status !== `error` &&
        c != null &&
        (0, Q.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(k, {
            id: `tpp.write_like_me.setup.finishing_connection`,
            defaultMessage: `Finishing connection…`,
            description: `Writing-style setup is verifying the app connection after authorization`,
          }),
        })),
      (n[48] = c),
      (n[49] = a.status),
      (n[50] = L))
    : (L = n[50]);
  let R =
      u != null &&
      (s.step === `categories`
        ? (0, Q.jsx)(`ul`, {
            className: `flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border`,
            children: [`messaging`, `email`, `documents`].map((t) => {
              let n = f?.filter((e) => e.category === t) ?? [];
              return (0, Q.jsx)(
                `li`,
                {
                  children: (0, Q.jsx)(pe, {
                    className: `justify-between max-sm:flex-wrap`,
                    variant: `featured`,
                    inset: !1,
                    labelSizing: `content`,
                    controlSizing: `content`,
                    icon: (0, Q.jsx)(`span`, {
                      className: Z.categoryIcon,
                      children: {
                        messaging: (0, Q.jsx)(ae, {}),
                        documents: (0, Q.jsx)(oe, {}),
                        email: (0, Q.jsx)(le, {}),
                      }[t],
                    }),
                    label: (0, Q.jsx)(k, { ...X.category, values: { category: t } }),
                    control:
                      n.length > 0
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
                                      n.slice(0, 2).map(et),
                                      n.length > 2 &&
                                        (0, Q.jsx)(`span`, {
                                          className: Z.iconOverflow,
                                          children: (0, Q.jsx)(k, {
                                            id: `tpp.write_like_me.setup.connected_overflow`,
                                            defaultMessage: `+{remaining}`,
                                            description: `Count of additional connected apps beyond the first two icons in the writing-style category summary; remaining is a positive integer`,
                                            values: { remaining: n.length - 2 },
                                          }),
                                        }),
                                    ],
                                  }),
                                  (0, Q.jsx)(`span`, {
                                    className: `text-base`,
                                    children: (0, Q.jsx)(k, {
                                      id: `tpp.write_like_me.setup.category_connected`,
                                      defaultMessage: `Connected`,
                                      description: `Status for a writing-style category with verified usable app connections`,
                                    }),
                                  }),
                                ],
                              }),
                              (0, Q.jsx)(`span`, {
                                className: `sr-only`,
                                children: (0, Q.jsx)(k, {
                                  id: `tpp.write_like_me.setup.connected_names`,
                                  defaultMessage: `{apps} connected`,
                                  description: `Accessible list of the connected product names in a writing-style category`,
                                  values: { apps: r.formatList(n.map($e)) },
                                }),
                              }),
                              (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: Z.iconButton,
                                disabled: l,
                                "aria-label": r.formatMessage(X.addApps, { category: t }),
                                onClick: () => e.onScreenChange({ step: `connect`, category: t }),
                                children: (0, Q.jsx)(te, {}),
                              }),
                            ],
                          })
                        : (0, Q.jsx)(`button`, {
                            type: `button`,
                            className: h(Z.button, Z.secondary),
                            disabled: l,
                            "aria-label": r.formatMessage(X.setupCategory, { category: t }),
                            onClick: () => e.onScreenChange({ step: `connect`, category: t }),
                            children: (0, Q.jsx)(k, {
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
            apps: g ?? [],
            connectingAppId: c,
            disabled: l || a.status !== `ready`,
            onConnect: e.onConnect,
          })),
    z;
  n[51] === e.connectionError
    ? (z = n[52])
    : ((z =
        e.connectionError &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-danger`,
          children: (0, Q.jsx)(k, {
            id: `tpp.write_like_me.setup.connect_error`,
            defaultMessage: `The app wasn’t connected. Try connecting again.`,
            description: `Writing-style setup could not complete an app connection; the user can retry`,
          }),
        })),
      (n[51] = e.connectionError),
      (n[52] = z));
  let B;
  n[53] === e.submitError
    ? (B = n[54])
    : ((B =
        e.submitError != null &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-center text-sm text-danger`,
          children: e.submitError,
        })),
      (n[53] = e.submitError),
      (n[54] = B));
  let V;
  n[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = h(Z.button, Z.primary, Z.finish)), (n[55] = V))
    : (V = n[55]);
  let he = !_,
    H;
  n[56] === l ? (H = n[57]) : ((H = l && (0, Q.jsx)(t, { className: `size-4` })), (n[56] = l), (n[57] = H));
  let U;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Q.jsx)(k, {
        id: `workOnboarding.writingStyle.showMe`,
        defaultMessage: `Show me`,
        description: `Saves writing-style personalization and starts a demonstration in chat; connecting apps is optional`,
      })),
      (n[58] = U))
    : (U = n[58]);
  let W;
  n[59] !== he || n[60] !== H
    ? ((W = (0, Q.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Q.jsxs)(`button`, { type: `submit`, className: V, disabled: he, children: [H, U] }),
      })),
      (n[59] = he),
      (n[60] = H),
      (n[61] = W))
    : (W = n[61]);
  let G;
  n[62] !== B || n[63] !== W
    ? ((G = (0, Q.jsxs)(`div`, { className: Z.footer, children: [B, W] })),
      (n[62] = B),
      (n[63] = W),
      (n[64] = G))
    : (G = n[64]);
  let K;
  n[65] !== j.content ||
  n[66] !== me ||
  n[67] !== P ||
  n[68] !== F ||
  n[69] !== I ||
  n[70] !== L ||
  n[71] !== R ||
  n[72] !== z ||
  n[73] !== G
    ? ((K = (0, Q.jsxs)(`div`, { className: j.content, children: [me, P, F, I, L, R, z, G] })),
      (n[65] = j.content),
      (n[66] = me),
      (n[67] = P),
      (n[68] = F),
      (n[69] = I),
      (n[70] = L),
      (n[71] = R),
      (n[72] = z),
      (n[73] = G),
      (n[74] = K))
    : (K = n[74]);
  let q;
  n[75] !== ie.form || n[76] !== C || n[77] !== A || n[78] !== K
    ? ((q = (0, Q.jsxs)(`form`, { className: ie.form, onSubmit: C, children: [A, K] })),
      (n[75] = ie.form),
      (n[76] = C),
      (n[77] = A),
      (n[78] = K),
      (n[79] = q))
    : (q = n[79]);
  let J;
  return (
    n[80] !== y || n[81] !== x || n[82] !== S || n[83] !== q || n[84] !== b || n[85] !== ne.overlay
      ? ((J = (0, Q.jsx)(y, {
          open: !0,
          unstyledContent: !0,
          variant: `onboarding`,
          contentPosition: `anchored`,
          showDialogClose: !1,
          contentClassName: b,
          overlayClassName: ne.overlay,
          contentProps: x,
          onOpenChange: S,
          children: q,
        })),
        (n[80] = y),
        (n[81] = x),
        (n[82] = S),
        (n[83] = q),
        (n[84] = b),
        (n[85] = ne.overlay),
        (n[86] = J))
      : (J = n[86]),
    J
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
    { app: n, compact: r } = e,
    i = r !== void 0 && r,
    o = a() ? (n.iconDarkUrl ?? n.iconUrl) : (n.iconUrl ?? n.iconDarkUrl),
    s;
  if (t[0] !== i || t[1] !== o) {
    let e = o?.startsWith(`/images/`) ? new URL(o, ce).href : o,
      n = W(e),
      r = i ? f : y,
      a;
    t[3] === r ? (a = t[4]) : ((a = (0, Q.jsx)(r, { className: `text-secondary` })), (t[3] = r), (t[4] = a));
    let c = a;
    if (((s = c), n != null)) {
      let e;
      t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = /^link_/), (t[5] = e)) : (e = t[5]);
      let r = { ...n, connectorId: n.connectorId.replace(e, ``) },
        i;
      (t[6] !== c || t[7] !== r
        ? ((i = (0, Q.jsx)(rt, { request: r, fallback: c })), (t[6] = c), (t[7] = r), (t[8] = i))
        : (i = t[8]),
        (s = i));
    } else if (e != null) {
      let n;
      (t[9] !== c || t[10] !== e
        ? ((n = (0, Q.jsx)(R, { alt: ``, className: `h-full w-full object-cover`, src: e, fallback: c }, e)),
          (t[9] = c),
          (t[10] = e),
          (t[11] = n))
        : (n = t[11]),
        (s = n));
    }
    ((t[0] = i), (t[1] = o), (t[2] = s));
  } else s = t[2];
  let c = i && Z.compactIcon,
    l;
  t[12] === c ? (l = t[13]) : ((l = h(Z.appIcon, c)), (t[12] = c), (t[13] = l));
  let u;
  return (
    t[14] !== s || t[15] !== l
      ? ((u = (0, Q.jsx)(`span`, { "aria-hidden": !0, className: l, children: s })),
        (t[14] = s),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function rt(e) {
  let t = (0, st.c)(3),
    { request: n, fallback: r } = e,
    i = B(n),
    a;
  return (
    t[0] !== r || t[1] !== i
      ? ((a =
          i == null
            ? r
            : (0, Q.jsx)(R, { alt: ``, className: `h-full w-full object-cover`, src: i, fallback: r }, i)),
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
            children: (0, Q.jsx)(k, {
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
              children: (0, Q.jsx)(pe, {
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
      : ((s = (0, Q.jsx)(`ul`, { className: E, children: o })), (t[10] = o), (t[11] = s)),
    s
  );
}
function at(e, t) {
  return Number(e.connection === `connected`) - Number(t.connection === `connected`);
}
function ot(e) {
  let n = (0, st.c)(25),
    { app: r, connectingAppId: i, disabled: a, onConnect: o } = e,
    s = de();
  if (r.connection === `connected`) {
    let e, t;
    n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = h(Z.iconButton, `text-secondary`)), (t = (0, Q.jsx)(j, {})), (n[0] = e), (n[1] = t))
      : ((e = n[0]), (t = n[1]));
    let r;
    return (
      n[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, Q.jsxs)(`span`, {
            role: `status`,
            className: e,
            children: [
              t,
              (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(k, {
                  id: `tpp.write_like_me.setup.connected`,
                  defaultMessage: `Connected`,
                  description: `The writing-style app has a verified usable account connection`,
                }),
              }),
            ],
          })),
          (n[2] = r))
        : (r = n[2]),
      r
    );
  }
  if (r.id === i) {
    let e;
    n[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(t, { className: `size-5` })), (n[3] = e))
      : (e = n[3]);
    let i;
    return (
      n[4] === r.name
        ? (i = n[5])
        : ((i = (0, Q.jsxs)(`span`, {
            role: `status`,
            className: Z.iconButton,
            children: [
              e,
              (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(k, {
                  id: `tpp.write_like_me.setup.connecting_app`,
                  defaultMessage: `Connecting {app}…`,
                  description: `Accessible status while a writing-style app connection is in progress`,
                  values: { app: r.name },
                }),
              }),
            ],
          })),
          (n[4] = r.name),
          (n[5] = i)),
      i
    );
  }
  if (r.connection === `unavailable`) {
    let e;
    return (
      n[6] === r.connection
        ? (e = n[7])
        : ((e = (0, Q.jsx)(`span`, {
            className: `text-sm text-secondary`,
            children: (0, Q.jsx)(k, { ...X.connectionAction, values: { state: r.connection } }),
          })),
          (n[6] = r.connection),
          (n[7] = e)),
      e
    );
  }
  let l;
  n[8] === r.connection
    ? (l = n[9])
    : ((l = r.connection === `disconnected` ? Z.iconButton : h(Z.button, Z.ghost)),
      (n[8] = r.connection),
      (n[9] = l));
  let u = a || i != null,
    d;
  n[10] !== r.connection || n[11] !== r.name || n[12] !== s
    ? ((d = s.formatMessage(r.connection === `reauth` ? X.reconnect : X.connect, { app: r.name })),
      (n[10] = r.connection),
      (n[11] = r.name),
      (n[12] = s),
      (n[13] = d))
    : (d = n[13]);
  let f;
  n[14] !== r.id || n[15] !== o
    ? ((f = () => o(r.id)), (n[14] = r.id), (n[15] = o), (n[16] = f))
    : (f = n[16]);
  let p;
  n[17] === r.connection
    ? (p = n[18])
    : ((p =
        r.connection === `disconnected`
          ? (0, Q.jsx)(c, {})
          : (0, Q.jsx)(k, { ...X.connectionAction, values: { state: r.connection } })),
      (n[17] = r.connection),
      (n[18] = p));
  let m;
  return (
    n[19] !== l || n[20] !== u || n[21] !== d || n[22] !== f || n[23] !== p
      ? ((m = (0, Q.jsx)(`button`, {
          type: `button`,
          className: l,
          disabled: u,
          "aria-label": d,
          onClick: f,
          children: p,
        })),
        (n[19] = l),
        (n[20] = u),
        (n[21] = d),
        (n[22] = f),
        (n[23] = p),
        (n[24] = m))
      : (m = n[24]),
    m
  );
}
var st, ct, Q;
function lt() {
  return (lt = e(() => {
    ((st = v()),
      g(),
      O(),
      (ct = s()),
      S(),
      G(),
      K(),
      u(),
      ne(),
      F(),
      w(),
      A(),
      D(),
      T(),
      De(),
      Ze(),
      J(),
      (Q = p()));
  }))();
}
function ut(e) {
  let t = (0, dt.c)(67),
    { identity: i, sourceAttributionId: a, enableOnSelect: o, onClose: s, onSubmit: c } = e,
    u = o !== void 0 && o,
    d = r(ee),
    f = de(),
    p = x(),
    { installPlugin: m, status: h } = he(),
    g = ue(Ce, i),
    _ = u && (g.isPending || g.status === `idle`),
    { data: v, isError: te, isFetching: y, refetch: b } = ue(Te, i),
    { data: ne } = ue(Se, i),
    re;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = { step: `categories` }), (t[0] = re))
    : (re = t[0]);
  let [S, ie] = (0, $.useState)(re),
    [C, ae] = (0, $.useState)(),
    [oe, se] = (0, $.useState)(!1),
    [w, ce] = (0, $.useState)(!1),
    [le, T] = (0, $.useState)(null),
    E = (0, $.useRef)(null),
    fe = (0, $.useRef)(null),
    D = (0, $.useRef)(!1),
    O,
    pe;
  (t[1] === d
    ? ((O = t[2]), (pe = t[3]))
    : ((O = () => (
        fe.current ??
          ((fe.current = performance.now()),
          d
            .get(z)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: `onboarding`,
              stage: `shown`,
            })),
        () => {
          E.current?.abort();
        }
      )),
      (pe = [d]),
      (t[1] = d),
      (t[2] = O),
      (t[3] = pe)),
    (0, $.useEffect)(O, pe));
  let A;
  t[4] === d
    ? (A = t[5])
    : ((A = (e) => {
        D.current ||
          ((D.current = !0),
          d
            .get(z)
            .count(`default`, `write_like_me.setup_funnel`, {
              category: `not_applicable`,
              entry_point: `onboarding`,
              stage: e,
            }),
          d
            .get(z)
            .hist(
              `default`,
              `write_like_me.setup_duration_ms`,
              { entry_point: `onboarding`, outcome: e },
              Math.max(0, performance.now() - (fe.current ?? performance.now())),
            ));
      }),
      (t[4] = d),
      (t[5] = A));
  let j = A,
    N;
  t[6] !== s || t[7] !== j
    ? ((N = () => {
        (E.current?.abort(), j(`dismissed`), s());
      }),
      (t[6] = s),
      (t[7] = j),
      (t[8] = N))
    : (N = t[8]);
  let F = N,
    I;
  t[9] !== v ||
  t[10] !== i ||
  t[11] !== m ||
  t[12] !== te ||
  t[13] !== y ||
  t[14] !== p ||
  t[15] !== b ||
  t[16] !== d ||
  t[17] !== a ||
  t[18] !== h
    ? ((I = async (e) => {
        let t = v?.find((t) => {
          let { id: n } = t;
          return n === e;
        });
        if (
          t == null ||
          t.connection === `connected` ||
          t.connection === `unavailable` ||
          E.current != null ||
          h != null ||
          y ||
          te ||
          !P(d, i)
        )
          return;
        let r = new AbortController();
        ((E.current = r), ae(e), se(!1));
        let o = performance.now(),
          s = { category: t.category, connector: t.connector ?? `unknown`, entry_point: `onboarding` };
        d.get(z).count(`default`, `write_like_me.connector_engagement`, { ...s, outcome: `started` });
        let c = !1,
          u = async (t) => {
            if (c || r.signal.aborted) return;
            c = !0;
            let n = await b();
            if (r.signal.aborted || !P(d, i)) return;
            ((E.current = null), ae(void 0));
            let a = !n.isError && n.data?.some((t) => t.id === e && t.connection === `connected`) === !0,
              l = t === `success` && !a ? `connection_required` : t;
            (se(l === `failure` || l === `connection_required`),
              d.get(z).count(`default`, `write_like_me.connector_engagement`, { ...s, outcome: l }),
              d
                .get(z)
                .hist(
                  `default`,
                  `write_like_me.connector_duration_ms`,
                  { ...s, outcome: l },
                  Math.max(0, performance.now() - o),
                ));
          };
        try {
          let [o] = await d.queryClient.fetchQuery(be(i, [e]));
          if (r.signal.aborted || !P(d, i)) return;
          if (o == null) {
            await u(`failure`);
            return;
          }
          let s = o.canonical_app_id ?? ve(o)[0];
          m(
            {
              displayName: t.name,
              remotePluginId: o.id,
              remoteMarketplaceName: `openai-curated-remote`,
              connectionAppId: s,
            },
            {
              hostId: `local`,
              hostedAccountId: i.accountId,
              sourceAttributionId: a,
              sourceSectionId: `work_onboarding`,
              source: n.CODEX_PLUGIN_SOURCE_CURATED,
              requiresAppSetup: !0,
              requestedConnectorId: s,
              appConnectOptions:
                s == null
                  ? void 0
                  : {
                      connectorId: s,
                      productSku: `CONNECTOR_SETTING`,
                      redirectAfter: `${p.pathname}${p.search}${p.hash}`,
                    },
              marketplaceAnalytics: {
                surface: l.CODEX_PLUGIN_MARKETPLACE_SURFACE_ONBOARDING,
                source: n.CODEX_PLUGIN_SOURCE_CURATED,
                chatgpt: {
                  productExperience: H.CHATGPT_PRODUCT_EXPERIENCE_WORK,
                  surface: me.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_NUX,
                },
              },
              onSuccess: () => {
                u(`success`);
              },
              onError: () => {
                u(`failure`);
              },
              onCancel: () => {
                u(`cancelled`);
              },
            },
          ) || (await u(`cancelled`));
        } catch {
          await u(`failure`);
        }
      }),
      (t[9] = v),
      (t[10] = i),
      (t[11] = m),
      (t[12] = te),
      (t[13] = y),
      (t[14] = p),
      (t[15] = b),
      (t[16] = d),
      (t[17] = a),
      (t[18] = h),
      (t[19] = I))
    : (I = t[19]);
  let L = I,
    R;
  t[20] !== v ||
  t[21] !== u ||
  t[22] !== g ||
  t[23] !== _ ||
  t[24] !== i ||
  t[25] !== f ||
  t[26] !== s ||
  t[27] !== c ||
  t[28] !== j ||
  t[29] !== d ||
  t[30] !== a ||
  t[31] !== h
    ? ((R = async () => {
        if (_ || E.current != null || h != null || !P(d, i)) return;
        let e = [`email`, `messaging`, `documents`].find((e) =>
          v?.some((t) => t.category === e && t.connection === `connected`),
        );
        d.get(z).count(`default`, `write_like_me.setup_funnel`, {
          category: e ?? `not_applicable`,
          entry_point: `onboarding`,
          stage: `use_clicked`,
        });
        let t = new AbortController();
        ((E.current = t), ce(!0), T(null));
        let n = !1,
          r;
        ((r = u
          ? g.data === !0
            ? Promise.resolve(!0)
            : g.mutateAsync({ sourceAttributionId: a })
          : Ee(d, { identity: i, sourceAttributionId: a, signal: t.signal })),
          await r
            .then(async (e) => {
              if (((n = e), t.signal.aborted || !P(d, i))) return;
              if (!n) {
                T(`save`);
                return;
              }
              let r = await c({ prompt: xe(f), signal: t.signal });
              if (!(!P(d, i) || (!r && t.signal.aborted))) {
                if (!r) {
                  T(`continuation`);
                  return;
                }
                (j(`completed`), s());
              }
            })
            .catch(() => {
              !t.signal.aborted && P(d, i) && T(n ? `continuation` : `save`);
            })
            .finally(() => {
              !t.signal.aborted && P(d, i) && ((E.current = null), ce(!1));
            }));
      }),
      (t[20] = v),
      (t[21] = u),
      (t[22] = g),
      (t[23] = _),
      (t[24] = i),
      (t[25] = f),
      (t[26] = s),
      (t[27] = c),
      (t[28] = j),
      (t[29] = d),
      (t[30] = a),
      (t[31] = h),
      (t[32] = R))
    : (R = t[32]);
  let B = R,
    V;
  if (te) {
    let e;
    (t[33] !== v || t[34] !== y
      ? ((e = { status: `error`, apps: v, retrying: y }), (t[33] = v), (t[34] = y), (t[35] = e))
      : (e = t[35]),
      (V = e));
  } else if (v == null) {
    let e;
    (t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { status: `loading` }), (t[36] = e))
      : (e = t[36]),
      (V = e));
  } else {
    let e = y ? `refreshing` : `ready`,
      n;
    (t[37] !== v || t[38] !== e
      ? ((n = { status: e, apps: v }), (t[37] = v), (t[38] = e), (t[39] = n))
      : (n = t[39]),
      (V = n));
  }
  let U;
  if (le === `save` || (u && !w && (g.isError || g.data === !1))) {
    let e;
    (t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ft.jsx)(k, {
          id: `tpp.write_like_me.error.save`,
          defaultMessage: `We couldn’t save your Writing style preference. Please try again.`,
          description: `Saving the user's explicit writing-style preference failed; the user can retry without assuming the server rolled back the change`,
        })),
        (t[40] = e))
      : (e = t[40]),
      (U = e));
  } else if (le === `continuation`) {
    let e;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, ft.jsx)(k, {
          id: `tpp.write_like_me.error.continuation`,
          defaultMessage: `Your Writing style preference was saved, but we couldn’t start this chat. Please try again.`,
          description: `The writing-style preference was confirmed saved, but starting the example chat failed`,
        })),
        (t[41] = e))
      : (e = t[41]),
      (U = e));
  }
  let W = ne?.enabled === !0,
    G;
  t[42] !== F || t[43] !== d
    ? ((G = () => {
        (F(), d.get(M).navigate(`/settings/personalization`));
      }),
      (t[42] = F),
      (t[43] = d),
      (t[44] = G))
    : (G = t[44]);
  let K = w || _,
    q;
  t[45] === L
    ? (q = t[46])
    : ((q = (e) => {
        L(e);
      }),
      (t[45] = L),
      (t[46] = q));
  let J;
  t[47] === b
    ? (J = t[48])
    : ((J = () => {
        b();
      }),
      (t[47] = b),
      (t[48] = J));
  let Y;
  t[49] === d
    ? (Y = t[50])
    : ((Y = (e) => {
        (E.current?.abort(),
          (E.current = null),
          ae(void 0),
          se(!1),
          e.step === `connect` &&
            d
              .get(z)
              .count(`default`, `write_like_me.setup_funnel`, {
                category: e.category,
                entry_point: `onboarding`,
                stage: `category_selected`,
              }),
          ie(e));
      }),
      (t[49] = d),
      (t[50] = Y));
  let ge;
  t[51] === B
    ? (ge = t[52])
    : ((ge = () => {
        B();
      }),
      (t[51] = B),
      (t[52] = ge));
  let _e;
  return (
    t[53] !== F ||
    t[54] !== C ||
    t[55] !== oe ||
    t[56] !== V ||
    t[57] !== S ||
    t[58] !== U ||
    t[59] !== G ||
    t[60] !== K ||
    t[61] !== q ||
    t[62] !== J ||
    t[63] !== Y ||
    t[64] !== ge ||
    t[65] !== W
      ? ((_e = (0, ft.jsx)(Qe, {
          connections: V,
          enabled: W,
          onManage: G,
          screen: S,
          connectingAppId: C,
          connectionError: oe,
          isSubmitting: K,
          submitError: U,
          onClose: F,
          onConnect: q,
          onRetryConnections: J,
          onScreenChange: Y,
          onSubmit: ge,
        })),
        (t[53] = F),
        (t[54] = C),
        (t[55] = oe),
        (t[56] = V),
        (t[57] = S),
        (t[58] = U),
        (t[59] = G),
        (t[60] = K),
        (t[61] = q),
        (t[62] = J),
        (t[63] = Y),
        (t[64] = ge),
        (t[65] = W),
        (t[66] = _e))
      : (_e = t[66]),
    _e
  );
}
var dt, $, ft;
function pt() {
  return (pt = e(() => {
    ((dt = v()),
      N(),
      V(),
      b(),
      C(),
      O(),
      ($ = s()),
      S(),
      _(),
      q(),
      L(),
      U(),
      i(),
      I(),
      ge(),
      lt(),
      ye(),
      _e(),
      we(),
      (ft = p()));
  }))();
}
export { pt as n, ut as t };
//# sourceMappingURL=writing-style-setup-ddfc4558f30a.js.map
