const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dictionary-dialog-ac4d376402a6.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  Bst as a,
  CH as o,
  Cit as s,
  F3 as c,
  FBt as l,
  Flt as u,
  I3 as d,
  IH as f,
  Ilt as p,
  Jx as m,
  LNt as h,
  Lst as g,
  Mst as _,
  NO as v,
  NSt as y,
  OFt as b,
  Ok as x,
  PBt as S,
  PO as C,
  QY as w,
  Qst as T,
  RFt as E,
  Rst as D,
  TY as O,
  Tit as k,
  Ty as A,
  Vrt as j,
  XOt as M,
  XSt as N,
  Y3 as P,
  YOt as F,
  Ylt as I,
  Yx as L,
  Z3 as R,
  ZSt as z,
  ZY as ee,
  ast as te,
  b2 as ne,
  bit as re,
  ck as B,
  d3 as ie,
  dCt as ae,
  e6 as oe,
  ew as se,
  f3 as ce,
  hit as V,
  iCt as H,
  ist as le,
  jst as ue,
  kFt as de,
  kH as fe,
  kk as pe,
  lit as U,
  lk as me,
  nCt as he,
  nQ as ge,
  oit as _e,
  okt as W,
  qrt as ve,
  rk as G,
  sct as ye,
  sw as K,
  tQ as be,
  tk as xe,
  tkt as q,
  uk as Se,
  uw as Ce,
  vst as we,
  wB as Te,
  wy as Ee,
  xB as De,
  y2 as Oe,
  yst as ke,
  zFt as Ae,
  zst as je,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as Me,
  CBr as Ne,
  CTn as Pe,
  Cjr as Fe,
  FAn as Ie,
  FF as Le,
  FIr as Re,
  HCt as ze,
  Hpr as Be,
  Hu as Ve,
  IAn as He,
  IMr as Ue,
  Kpr as We,
  LF as Ge,
  LFt as Ke,
  LIr as qe,
  LTn as Je,
  N0 as Ye,
  P0 as Xe,
  QF as Ze,
  RF as Qe,
  RFt as $e,
  TOt as et,
  UCt as tt,
  Upr as nt,
  Uu as rt,
  WCt as it,
  WTn as at,
  YCt as ot,
  ZCt as st,
  ZLn as ct,
  _Tn as lt,
  awt as ut,
  cA as dt,
  cd as ft,
  djr as pt,
  dwt as mt,
  eI as ht,
  eMr as gt,
  fNr as _t,
  fTn as vt,
  gTn as yt,
  hTn as bt,
  iRr as xt,
  ld as St,
  lh as Ct,
  ljr as wt,
  lwt as Tt,
  nMr as Et,
  njr as Dt,
  owt as Ot,
  qpr as kt,
  sA as J,
  tjr as At,
  tyr as jt,
  uNr as Mt,
  ud as Nt,
  uh as Pt,
  wOt as Ft,
  xBr as It,
  xTn as Lt,
  xjr as Rt,
  yTn as zt,
} from "./app-initial-ad16eaadf81f.js";
import {
  B_ as Bt,
  Em as Vt,
  H_ as Ht,
  I_ as Ut,
  L_ as Wt,
  O_ as Gt,
  R_ as Kt,
  Tm as qt,
  U_ as Jt,
  V_ as Yt,
  k_ as Xt,
  z_ as Zt,
} from "./app-primary-3e00728c2a4c.js";
import { n as Qt, t as $t } from "./settings-loading-row-1fcc5b514745.js";
import { n as en, t as tn } from "./use-is-realtime-conversation-enabled-74370e979fa5.js";
import { n as nn, t as rn } from "./settings-row-disclosure-4167ebc9233a.js";
import { n as an, t as on } from "./realtime-voice-picker-dialog-abfac402a883.js";
function sn() {
  let e = (0, dn.c)(33),
    t = r(T),
    i = en(),
    a = $e(),
    { platform: o } = nt(),
    { hostId: s } = He(),
    c = he(mt, s),
    l = H(pt),
    u;
  e[0] === a ? (u = e[1]) : ((u = { enabled: a }), (e[0] = a), (e[1] = u));
  let { data: d, error: f, refetch: p } = H(tt, u),
    [m, h] = (0, fn.useState)(!1),
    g = (0, fn.useRef)(null),
    _;
  e[2] === d
    ? (_ = e[3])
    : ((_ = d?.voices.find((e) => e.slug === d.effectiveVoiceSlug)), (e[2] = d), (e[3] = _));
  let v = _,
    y = f != null || d?.voices.length === 0;
  if (!i) return null;
  let b;
  if (y) {
    let t;
    e[4] === p
      ? (t = e[5])
      : ((t = () => {
          p();
        }),
        (e[4] = p),
        (e[5] = t));
    let n;
    e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(q, {
          id: `settings.general.realtimeVoice.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading compatible realtime voices`,
        })),
        (e[6] = n))
      : (n = e[6]);
    let r;
    (e[7] === t
      ? (r = e[8])
      : ((r = (0, Y.jsx)(P, { color: `secondary`, size: `toolbar`, onClick: t, children: n })),
        (e[7] = t),
        (e[8] = r)),
      (b = r));
  } else if (d == null || v == null) {
    let t;
    (e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(P, {
          color: `secondary`,
          size: `toolbar`,
          disabled: !0,
          children: (0, Y.jsx)(q, {
            id: `settings.general.realtimeVoice.loading`,
            defaultMessage: `Loading…`,
            description: `Label shown while the selected realtime voice loads`,
          }),
        })),
        (e[9] = t))
      : (t = e[9]),
      (b = t));
  } else {
    let n;
    e[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(`span`, { "aria-hidden": !0, className: `size-3 rounded-full bg-chart-blue` })),
        (e[10] = n))
      : (n = e[10]);
    let r;
    e[11] === v.name
      ? (r = e[12])
      : ((r = (0, Y.jsxs)(P, { color: `secondary`, size: `toolbar`, children: [n, v.name] })),
        (e[11] = v.name),
        (e[12] = r));
    let i;
    e[13] === t
      ? (i = e[14])
      : ((i = (e) => {
          (e && (g.current = t.get(Ue)), h(e));
        }),
        (e[13] = t),
        (e[14] = i));
    let a;
    e[15] !== t || e[16] !== v.slug
      ? ((a = (e) => (e === v.slug ? Promise.resolve() : st(t, e, g.current))),
        (e[15] = t),
        (e[16] = v.slug),
        (e[17] = a))
      : (a = e[17]);
    let o;
    (e[18] !== m || e[19] !== v || e[20] !== r || e[21] !== i || e[22] !== a || e[23] !== d.voices
      ? ((o = (0, Y.jsx)(on, {
          open: m,
          initialVoice: v,
          triggerContent: r,
          voices: d.voices,
          onOpenChange: i,
          onSave: a,
        })),
        (e[18] = m),
        (e[19] = v),
        (e[20] = r),
        (e[21] = i),
        (e[22] = a),
        (e[23] = d.voices),
        (e[24] = o))
      : (o = e[24]),
      (b = o));
  }
  let x;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(J.Header, {
        title: (0, Y.jsx)(q, {
          id: `settings.general.realtimeVoice`,
          defaultMessage: `Voice chat`,
          description: `Heading for settings that configure live two-way spoken conversations with ChatGPT, distinct from one-way dictation`,
        }),
      })),
      (e[25] = x))
    : (x = e[25]);
  let S;
  return (
    e[26] !== c || e[27] !== a || e[28] !== o || e[29] !== l?.dynamicTools || e[30] !== y || e[31] !== b
      ? ((S = (0, Y.jsxs)(J, {
          children: [
            x,
            (0, Y.jsx)(J.Content, {
              children: (0, Y.jsx)(n, {
                children: a
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsx)(K, {
                          label: (0, Y.jsx)(q, {
                            id: `settings.general.realtimeVoice.voice.label`,
                            defaultMessage: `Voice`,
                            description: `Label for choosing the synthesized voice the assistant uses in live two-way spoken conversations`,
                          }),
                          description: (0, Y.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, Y.jsx)(q, {
                                id: `settings.general.realtimeVoice.voice.description`,
                                defaultMessage: `Choose the voice for new voice chats`,
                                description: `Helper text for choosing the synthesized voice used in future live two-way spoken conversations with ChatGPT`,
                              }),
                              y
                                ? (0, Y.jsx)(`span`, {
                                    className: `text-danger`,
                                    children: (0, Y.jsx)(q, {
                                      id: `settings.general.realtimeVoice.loadError`,
                                      defaultMessage: `Unable to load voice settings`,
                                      description: `Error shown when realtime voice settings cannot load`,
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          control: b,
                        }),
                        (0, Y.jsx)(un, {}),
                        null,
                        o === `macOS` && c && l?.dynamicTools.appshotsEnabled ? (0, Y.jsx)(ln, {}) : null,
                      ],
                    })
                  : (0, Y.jsx)(cn, {}),
              }),
            }),
          ],
        })),
        (e[26] = c),
        (e[27] = a),
        (e[28] = o),
        (e[29] = l?.dynamicTools),
        (e[30] = y),
        (e[31] = b),
        (e[32] = S))
      : (S = e[32]),
    S
  );
}
function cn() {
  let e = (0, dn.c)(3),
    t = H(Re);
  if (t.status === `loading`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)($t, {
            children: (0, Y.jsx)(q, {
              id: `settings.general.realtimeVoice.accessLoading`,
              defaultMessage: `Checking voice chat access…`,
              description: `Settings row label shown while the app checks whether the current account or workspace can use live two-way voice conversations`,
            }),
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  if (t.status === `error`) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(K, {
            label: (0, Y.jsx)(q, {
              id: `settings.general.realtimeVoice.accessError`,
              defaultMessage: `Unable to verify voice chat access`,
              description: `Settings row label shown when checking whether the current account or workspace can use live two-way voice conversations fails`,
            }),
            control: null,
          })),
          (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let n;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(K, {
          label: (0, Y.jsx)(q, {
            id: `settings.general.realtimeVoice.unavailable.label`,
            defaultMessage: `Voice chat unavailable`,
            description: `Label shown when live two-way voice conversations are unavailable for the current account or workspace`,
          }),
          description: (0, Y.jsx)(q, {
            id: `settings.general.realtimeVoice.unavailable.description`,
            defaultMessage: `Your account or workspace does not have access to voice chat`,
            description: `Explanation shown instead of voice selection and voice chat hotkey controls when the current account or workspace cannot use live two-way voice conversations`,
          }),
          control: null,
        })),
        (e[2] = n))
      : (n = e[2]),
    n
  );
}
function ln() {
  let e = (0, dn.c)(10),
    t = r(T),
    n = W(),
    i = V(pn.screenContextEnabled),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(q, {
        id: `settings.general.realtimeVoiceScreenContext.label`,
        defaultMessage: `Screen context`,
        description: `Label for allowing live voice conversations to use visual context from the foreground app`,
      })),
      (o = (0, Y.jsx)(q, {
        id: `settings.general.realtimeVoiceScreenContext.description`,
        defaultMessage: `Let ChatGPT inspect the foreground app when you refer to what's on screen. macOS asks for access the first time ChatGPT needs it`,
        description: `Explains that references to on-screen content during a live voice conversation can let ChatGPT inspect the foreground app and trigger the first-use macOS permission prompt`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s;
  e[2] === t
    ? (s = e[3])
    : ((s = (e) => {
        if (!e) {
          U(t, pn.screenContextEnabled, !1);
          return;
        }
        Ot(t, () => {
          U(t, pn.screenContextEnabled, !0);
        });
      }),
      (e[2] = t),
      (e[3] = s));
  let c;
  e[4] === n
    ? (c = e[5])
    : ((c = n.formatMessage({
        id: `settings.general.realtimeVoiceScreenContext.ariaLabel`,
        defaultMessage: `Enable screen context for voice chat`,
        description: `Aria label for a toggle that lets live voice conversations inspect the foreground app when the user refers to on-screen content`,
      })),
      (e[4] = n),
      (e[5] = c));
  let l;
  return (
    e[6] !== i || e[7] !== s || e[8] !== c
      ? ((l = (0, Y.jsx)(K, {
          label: a,
          description: o,
          control: (0, Y.jsx)(me, { checked: i, onChange: s, ariaLabel: c }),
        })),
        (e[6] = i),
        (e[7] = s),
        (e[8] = c),
        (e[9] = l))
      : (l = e[9]),
    l
  );
}
function un() {
  let e = (0, dn.c)(40),
    t = W(),
    { platform: n } = nt(),
    r = D(),
    i = Ne(),
    { data: a } = H(yt),
    [o, s] = (0, fn.useState)(!1),
    [c, l] = (0, fn.useState)(null),
    u;
  e[0] !== i || e[1] !== r
    ? ((u = {
        mutationFn: Pe,
        networkMode: `always`,
        onSuccess: (e) => {
          (r.setQueryData(vt, e), i(vt));
        },
      }),
      (e[0] = i),
      (e[1] = r),
      (e[2] = u))
    : (u = e[2]);
  let d = ke(u),
    f;
  e[3] !== t || e[4] !== d
    ? ((f = async function (e) {
        l(null);
        try {
          await d.mutateAsync({
            commandId: `realtimeVoice`,
            update: e == null ? { type: `clear` } : { type: `set`, accelerator: e },
          });
        } catch (e) {
          let n = e;
          l(
            n instanceof Error
              ? n.message
              : t.formatMessage({
                  id: `settings.general.realtimeVoiceHotkey.errorGeneric`,
                  defaultMessage: `Failed to update voice chat hotkey`,
                  description: `Fallback error shown when realtime voice hotkey update fails`,
                }),
          );
        }
      }),
      (e[3] = t),
      (e[4] = d),
      (e[5] = f))
    : (f = e[5]);
  let p = f;
  if (a?.supported === !1) return null;
  let m, h;
  e[6] !== a || e[7] !== n
    ? ((m = zt(`realtimeVoice`, a, n)[0]?.accelerator ?? null),
      (h = m == null ? null : x(m)),
      (e[6] = a),
      (e[7] = n),
      (e[8] = m),
      (e[9] = h))
    : ((m = e[8]), (h = e[9]));
  let g = h,
    _;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Y.jsx)(q, {
        id: `settings.general.realtimeVoiceHotkey.label`,
        defaultMessage: `Voice chat hotkey`,
        description: `Label for the global keyboard shortcut that starts a live two-way spoken conversation, distinct from dictation shortcuts`,
      })),
      (e[10] = _))
    : (_ = e[10]);
  let v;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(q, {
        id: `settings.general.realtimeVoiceHotkey.description`,
        defaultMessage: `Start voice chat from anywhere on desktop`,
        description: `Explains that the global shortcut starts a live two-way spoken conversation from any desktop app`,
      })),
      (e[11] = v))
    : (v = e[11]);
  let y;
  e[12] === c
    ? (y = e[13])
    : ((y = c ? (0, Y.jsx)(`span`, { className: `text-danger`, children: c }) : null),
      (e[12] = c),
      (e[13] = y));
  let b;
  e[14] === y
    ? (b = e[15])
    : ((b = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [v, y] })),
      (e[14] = y),
      (e[15] = b));
  let S;
  e[16] === t
    ? (S = e[17])
    : ((S = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.captureAriaLabel`,
        defaultMessage: `Voice chat hotkey capture`,
        description: `Aria label for recording the global shortcut that starts a live two-way spoken conversation`,
      })),
      (e[16] = t),
      (e[17] = S));
  let C = d.isPending,
    w;
  e[18] === t
    ? (w = e[19])
    : ((w = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when realtime voice hotkey is disabled`,
      })),
      (e[18] = t),
      (e[19] = w));
  let T;
  e[20] === t
    ? (T = e[21])
    : ((T = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.label`,
        defaultMessage: `Voice chat hotkey`,
        description: `Name of the global shortcut that starts a live two-way spoken conversation, distinct from dictation shortcuts`,
      })),
      (e[20] = t),
      (e[21] = T));
  let E;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        s(!1);
      }),
      (e[22] = E))
    : (E = e[22]);
  let O, k;
  e[23] === p
    ? ((O = e[24]), (k = e[25]))
    : ((O = (e) => {
        (s(!1), p(e));
      }),
      (k = () => {
        p(null);
      }),
      (e[23] = p),
      (e[24] = O),
      (e[25] = k));
  let A;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        (l(null), s(!0));
      }),
      (e[26] = A))
    : (A = e[26]);
  let j;
  e[27] !== g ||
  e[28] !== m ||
  e[29] !== o ||
  e[30] !== d.isPending ||
  e[31] !== T ||
  e[32] !== O ||
  e[33] !== k ||
  e[34] !== S ||
  e[35] !== w
    ? ((j = (0, Y.jsx)(Gt, {
        accelerator: m,
        acceleratorLabel: g,
        allowsBareModifiers: !0,
        captureAriaLabel: S,
        disabled: C,
        emptyLabel: w,
        hotkeyName: T,
        isCapturing: o,
        onCancelCapture: E,
        onCapture: O,
        onClear: k,
        onStartCapture: A,
      })),
      (e[27] = g),
      (e[28] = m),
      (e[29] = o),
      (e[30] = d.isPending),
      (e[31] = T),
      (e[32] = O),
      (e[33] = k),
      (e[34] = S),
      (e[35] = w),
      (e[36] = j))
    : (j = e[36]);
  let M;
  return (
    e[37] !== j || e[38] !== b
      ? ((M = (0, Y.jsx)(K, { label: _, description: b, control: j })), (e[37] = j), (e[38] = b), (e[39] = M))
      : (M = e[39]),
    M
  );
}
var dn, fn, Y, pn;
function mn() {
  return (mn = e(() => {
    ((dn = S()),
      we(),
      g(),
      z(),
      p(),
      (fn = l()),
      M(),
      Tt(),
      ut(),
      qe(),
      Et(),
      Lt(),
      R(),
      Se(),
      Be(),
      Ie(),
      pe(),
      It(),
      tn(),
      Ke(),
      i(),
      Xt(),
      _e(),
      dt(),
      Qt(),
      Ce(),
      se(),
      wt(),
      ot(),
      ze(),
      an(),
      (Y = h()),
      (pn = u()));
  }))();
}
function hn(e) {
  let t = (0, gn.c)(11),
    { controlColor: n } = e,
    i = n === void 0 ? `outline` : n,
    a = r(T),
    s = W(),
    { data: c, isError: l, refetch: u } = H(gt),
    { isPending: d, mutateAsync: f } = H(_n),
    p = c?.voiceMainLanguage ?? `auto`,
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(q, {
        id: `settings.chatGpt.voice.language`,
        defaultMessage: `Language`,
        description: `Label for ChatGPT voice language`,
      })),
      (t[0] = m))
    : (m = t[0]);
  let h;
  return (
    t[1] !== i ||
    t[2] !== s ||
    t[3] !== l ||
    t[4] !== d ||
    t[5] !== p ||
    t[6] !== f ||
    t[7] !== u ||
    t[8] !== a ||
    t[9] !== c
      ? ((h = (0, X.jsx)(K, {
          label: m,
          control:
            l && c == null
              ? (0, X.jsx)(P, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => void u(),
                  children: (0, X.jsx)(q, {
                    id: `settings.voice.language.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry loading the account's saved voice language in Voice settings`,
                  }),
                })
              : (0, X.jsx)(xe, {
                  align: `end`,
                  triggerButton: (0, X.jsx)(Le, {
                    color: i,
                    disabled: c == null || d,
                    children:
                      c == null
                        ? (0, X.jsx)(q, {
                            id: `settings.voice.language.loading`,
                            defaultMessage: `Loading…`,
                            description: `Label while the account's saved voice language is loading in Voice settings`,
                          })
                        : ft(p, s),
                  }),
                  children: St(s).map((e) => {
                    let { label: t, value: n } = e;
                    return (0, X.jsx)(
                      G.Item,
                      {
                        RightIcon: p === n ? o : void 0,
                        disabled: d,
                        onSelect: () => {
                          f(n).catch(() => {
                            a.get(ve).danger(
                              s.formatMessage({
                                id: `settings.voice.language.updateError`,
                                defaultMessage: `Could not update voice language`,
                                description: `Error toast when saving the account's voice language fails`,
                              }),
                              { errorAnalytics: { toastId: `settings.voice.language.updateError` } },
                            );
                          });
                        },
                        children: t,
                      },
                      n,
                    );
                  }),
                }),
        })),
        (t[1] = i),
        (t[2] = s),
        (t[3] = l),
        (t[4] = d),
        (t[5] = p),
        (t[6] = f),
        (t[7] = u),
        (t[8] = a),
        (t[9] = c),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}
var gn, X, _n;
function vn() {
  return (vn = e(() => {
    ((gn = S()),
      z(),
      M(),
      jt(),
      Et(),
      R(),
      B(),
      O(),
      j(),
      i(),
      Ce(),
      Qe(),
      ot(),
      Nt(),
      (X = h()),
      (_n = ae(T, ({ scope: e }) => ({
        mutationFn: async (t) => {
          let n = e.get(Ue),
            r = e.query.snapshot(gt);
          (await xt.safePatch(`/settings/account_user_setting`, {
            parameters: { query: { feature: `voice_main_language`, value: t } },
            additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
          }),
            await Promise.all([r.invalidate(), e.queryClient.invalidateQueries({ queryKey: it })]));
        },
        mutationKey: [`set-spoken-language`],
      }))));
  }))();
}
function yn(e) {
  let t = (0, xn.c)(4),
    { fallback: n } = e,
    r = n === void 0 ? null : n,
    i = H(Ct);
  if (i == null) return r;
  let a = `${i.accountId}:${i.userId}`,
    o;
  return (
    t[0] !== i.accountId || t[1] !== i.userId || t[2] !== a
      ? ((o = (0, Z.jsx)(bn, { accountId: i.accountId, userId: i.userId }, a)),
        (t[0] = i.accountId),
        (t[1] = i.userId),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function bn(e) {
  let t = (0, xn.c)(9),
    { accountId: r, userId: i } = e,
    [a, o] = (0, Sn.useState)(!1),
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(q, {
        id: `speechSettings.content.customDictionary.page.title`,
        defaultMessage: `Voice dictionary`,
        description: `Title for the voice dictionary settings where users manage words to recognize in their speech`,
      })),
      (c = (0, Z.jsx)(q, {
        id: `settings.voice.dictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description of the saved speech recognition vocabulary in Voice settings`,
      })),
      (t[0] = s),
      (t[1] = c))
    : ((s = t[0]), (c = t[1]));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(J.Content, {
        children: (0, Z.jsx)(n, {
          children: (0, Z.jsx)(K, {
            label: s,
            description: c,
            control: (0, Z.jsx)(P, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => o(!0),
              children: (0, Z.jsx)(q, {
                id: `settings.voice.dictionary.manage`,
                defaultMessage: `Manage`,
                description: `Button opening the voice dictionary editor in Voice settings`,
              }),
            }),
          }),
        }),
      })),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== r || t[4] !== a || t[5] !== i
    ? ((u = a ? (0, Z.jsx)(Cn, { accountId: r, userId: i, onClose: () => o(!1) }) : null),
      (t[3] = r),
      (t[4] = a),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (t[7] === u ? (d = t[8]) : ((d = (0, Z.jsxs)(J, { children: [l, u] })), (t[7] = u), (t[8] = d)), d);
}
var xn, Sn, Z, Cn;
function wn() {
  return (wn = e(() => {
    ((xn = S()),
      z(),
      (Sn = l()),
      M(),
      R(),
      c(),
      dt(),
      Ce(),
      se(),
      Pt(),
      (Z = h()),
      de(),
      (Cn = d(() =>
        b(
          () => import(`./dictionary-dialog-ac4d376402a6.js`).then((e) => e.DictionaryDialog),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url,
        ),
      )));
  }))();
}
function Tn() {
  let e = (0, Dn.c)(19),
    t = r(T),
    n = W(),
    { data: i } = H(Kt),
    [a, o] = (0, On.useState)(null),
    [s, c] = N(),
    l;
  e[0] === s ? (l = e[1]) : ((l = s.get(`recording`)), (e[0] = s), (e[1] = l));
  let u = l,
    d;
  if (e[2] !== i?.items || e[3] !== n || e[4] !== a || e[5] !== t || e[6] !== s || e[7] !== u || e[8] !== c) {
    let r = u == null ? i?.items.slice(0, kn) : i?.items.filter((e) => e.id === u),
      l;
    e[10] !== n || e[11] !== t
      ? ((l = (e, r) => {
          o({ action: r, id: e });
          let i;
          return (
            (i = r === `delete` ? Wt(t, e) : r === `download` ? Zt(e) : Jt(t, e)),
            i
              .catch((e) => {
                (r === `transcribe` &&
                  t
                    .get(ve)
                    .danger(Ve(n, `transcription`, e).message, {
                      errorAnalytics: { toastId: `voiceSettings.handleRecordingAction.transcription` },
                    }),
                  Ae.warning(`Failed to complete dictation history action`, {
                    safe: { action: r },
                    sensitive: { error: e },
                  }));
              })
              .finally(() => o(null))
          );
        }),
        (e[10] = n),
        (e[11] = t),
        (e[12] = l))
      : (l = e[12]);
    let f = l,
      p;
    e[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, Q.jsx)(q, {
          id: `settings.general.globalDictationHistory.emptyTitle`,
          defaultMessage: `Recent recordings`,
          description: `Heading for saved recent dictation recordings`,
        })),
        (e[13] = p))
      : (p = e[13]);
    let m;
    e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = (0, Q.jsx)(K, {
          label: p,
          description: (0, Q.jsx)(q, {
            id: `settings.general.globalDictationHistory.recoveryDescription`,
            defaultMessage: `Your last {count} recordings are saved on this device`,
            description: `Description explaining how many recent dictation recordings are saved locally`,
            values: { count: kn },
          }),
          control: null,
        })),
        (e[14] = m))
      : (m = e[14]);
    let h;
    (e[15] !== s || e[16] !== u || e[17] !== c
      ? ((h =
          u == null
            ? null
            : (0, Q.jsx)(P, {
                color: `ghost`,
                size: `compact`,
                onClick: () => {
                  let e = new URLSearchParams(s);
                  (e.delete(`recording`), c(e));
                },
                children: (0, Q.jsx)(q, {
                  id: `settings.voice.allRecordings`,
                  defaultMessage: `Show all recordings`,
                  description: `Returns from a recovered recording to the recent dictation recording list`,
                }),
              })),
        (e[15] = s),
        (e[16] = u),
        (e[17] = c),
        (e[18] = h))
      : (h = e[18]),
      (d = (0, Q.jsxs)(Q.Fragment, {
        children: [
          m,
          h,
          r?.map((e) =>
            (0, Q.jsx)(
              En,
              {
                selected: e.id === u,
                actionDisabled: a != null,
                isTranscribing: a?.id === e.id && a?.action === `transcribe`,
                item: e,
                timestamp: n.formatDate(e.createdAtMs, {
                  day: `numeric`,
                  hour: `numeric`,
                  minute: `2-digit`,
                  month: `short`,
                }),
                onDelete: () => {
                  f(e.id, `delete`);
                },
                onDownload: () => {
                  f(e.id, `download`);
                },
                onCopy: () => v(e.text),
                onTranscribe: () => {
                  f(e.id, `transcribe`);
                },
              },
              e.id,
            ),
          ),
        ],
      })),
      (e[2] = i?.items),
      (e[3] = n),
      (e[4] = a),
      (e[5] = t),
      (e[6] = s),
      (e[7] = u),
      (e[8] = c),
      (e[9] = d));
  } else d = e[9];
  return d;
}
function En(e) {
  let t = (0, Dn.c)(61),
    {
      selected: n,
      actionDisabled: r,
      isTranscribing: i,
      item: a,
      onCopy: o,
      onDelete: s,
      onDownload: c,
      onTranscribe: l,
      timestamp: u,
    } = e,
    d = W(),
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { name: `dictation` }), (t[0] = f)) : (f = t[0]);
  let { isCapable: p } = he(At, f),
    h;
  t[1] === d
    ? (h = t[2])
    : ((h = d.formatMessage({
        id: `settings.general.globalDictationHistory.copy`,
        defaultMessage: `Copy dictation`,
        description: `Tooltip and aria label for copying a dictation transcript`,
      })),
      (t[1] = d),
      (t[2] = h));
  let g = h,
    _;
  t[3] === d
    ? (_ = t[4])
    : ((_ = d.formatMessage({
        id: `settings.general.globalDictationHistory.retryTranscription`,
        defaultMessage: `Retry transcription`,
        description: `Tooltip and aria label for retrying transcription of a saved dictation recording`,
      })),
      (t[3] = d),
      (t[4] = _));
  let v = _,
    y;
  t[5] === d
    ? (y = t[6])
    : ((y = d.formatMessage({
        id: `settings.general.globalDictationHistory.actions`,
        defaultMessage: `Recording actions`,
        description: `Accessible label for the menu containing saved recording actions`,
      })),
      (t[5] = d),
      (t[6] = y));
  let b = y,
    x = n ? `block font-normal whitespace-pre-wrap select-text` : `block truncate font-normal`,
    S;
  t[7] !== a.status || t[8] !== a.text
    ? ((S =
        a.text.length > 0
          ? a.text
          : (0, Q.jsx)(q, {
              id: `settings.general.globalDictationHistory.audioOnly`,
              defaultMessage: `{status, select, recording {Recording in progress} cancelled {Recording cancelled} interrupted {Recording interrupted} other {Recording saved}}`,
              description: `Status shown for a saved dictation recording without a transcript`,
              values: { status: a.status },
            })),
      (t[7] = a.status),
      (t[8] = a.text),
      (t[9] = S))
    : (S = t[9]);
  let C;
  t[10] !== x || t[11] !== S
    ? ((C = (0, Q.jsx)(`span`, { className: x, children: S })), (t[10] = x), (t[11] = S), (t[12] = C))
    : (C = t[12]);
  let T;
  t[13] === a.createdAtMs
    ? (T = t[14])
    : ((T = new Date(a.createdAtMs).toISOString()), (t[13] = a.createdAtMs), (t[14] = T));
  let E;
  t[15] !== T || t[16] !== u
    ? ((E = (0, Q.jsx)(`time`, { dateTime: T, className: `tabular-nums`, children: u })),
      (t[15] = T),
      (t[16] = u),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] !== r || t[19] !== g || t[20] !== a.text.length || t[21] !== o
    ? ((D =
        a.text.length === 0
          ? null
          : (0, Q.jsx)(m, { ariaLabel: g, buttonText: g, iconOnly: !0, isDisabled: r, onCopy: o })),
      (t[18] = r),
      (t[19] = g),
      (t[20] = a.text.length),
      (t[21] = o),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== r ||
  t[24] !== p ||
  t[25] !== i ||
  t[26] !== a.sizeBytes ||
  t[27] !== a.status ||
  t[28] !== a.text.length ||
  t[29] !== l ||
  t[30] !== v
    ? ((O =
        !p || a.text.length > 0 || a.sizeBytes === 0 || a.status === `recording`
          ? null
          : (0, Q.jsx)(P, {
              "aria-label": v,
              color: `secondary`,
              disabled: r,
              loading: i,
              size: `compact`,
              onClick: l,
              children: (0, Q.jsx)(q, {
                id: `settings.general.globalDictationHistory.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries transcription of a saved dictation recording`,
              }),
            })),
      (t[23] = r),
      (t[24] = p),
      (t[25] = i),
      (t[26] = a.sizeBytes),
      (t[27] = a.status),
      (t[28] = a.text.length),
      (t[29] = l),
      (t[30] = v),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== r || t[33] !== a.sizeBytes || t[34] !== c || t[35] !== n
    ? ((k =
        n && a.sizeBytes > 0
          ? (0, Q.jsx)(P, {
              color: `secondary`,
              size: `compact`,
              disabled: r,
              onClick: c,
              children: (0, Q.jsx)(q, {
                id: `settings.voice.downloadRecovered`,
                defaultMessage: `Download audio`,
                description: `Downloads the specific recording opened from a dictation failure notice`,
              }),
            })
          : null),
      (t[32] = r),
      (t[33] = a.sizeBytes),
      (t[34] = c),
      (t[35] = n),
      (t[36] = k))
    : (k = t[36]);
  let A;
  t[37] !== r || t[38] !== b
    ? ((A = (0, Q.jsx)(Ee, { disabled: r, label: b })), (t[37] = r), (t[38] = b), (t[39] = A))
    : (A = t[39]);
  let j;
  t[40] !== a.sizeBytes || t[41] !== c
    ? ((j =
        a.sizeBytes === 0
          ? null
          : (0, Q.jsx)(G.Item, {
              leftIconAsset: ie,
              onSelect: c,
              children: (0, Q.jsx)(q, {
                id: `settings.general.globalDictationHistory.download`,
                defaultMessage: `Download recording`,
                description: `Menu action that downloads a saved dictation recording`,
              }),
            })),
      (t[40] = a.sizeBytes),
      (t[41] = c),
      (t[42] = j))
    : (j = t[42]);
  let M = a.status === `recording`,
    N;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Q.jsx)(q, {
        id: `settings.general.globalDictationHistory.delete`,
        defaultMessage: `Delete recording`,
        description: `Menu action that deletes a saved dictation recording`,
      })),
      (t[43] = N))
    : (N = t[43]);
  let F;
  t[44] !== s || t[45] !== M
    ? ((F = (0, Q.jsx)(G.Item, { leftIconAsset: w, disabled: M, onSelect: s, children: N })),
      (t[44] = s),
      (t[45] = M),
      (t[46] = F))
    : (F = t[46]);
  let I;
  t[47] !== r || t[48] !== A || t[49] !== j || t[50] !== F
    ? ((I = (0, Q.jsxs)(xe, {
        align: `end`,
        contentWidth: `menu`,
        disabled: r,
        triggerButton: A,
        children: [j, F],
      })),
      (t[47] = r),
      (t[48] = A),
      (t[49] = j),
      (t[50] = F),
      (t[51] = I))
    : (I = t[51]);
  let L;
  t[52] !== D || t[53] !== O || t[54] !== k || t[55] !== I
    ? ((L = (0, Q.jsxs)(Q.Fragment, { children: [D, O, k, I] })),
      (t[52] = D),
      (t[53] = O),
      (t[54] = k),
      (t[55] = I),
      (t[56] = L))
    : (L = t[56]);
  let R;
  return (
    t[57] !== L || t[58] !== C || t[59] !== E
      ? ((R = (0, Q.jsx)(K, { size: `compact`, label: C, description: E, control: L })),
        (t[57] = L),
        (t[58] = C),
        (t[59] = E),
        (t[60] = R))
      : (R = t[60]),
    R
  );
}
var Dn, On, Q, kn;
function An() {
  return (An = e(() => {
    ((Dn = S()),
      ce(),
      ee(),
      z(),
      (On = l()),
      M(),
      y(),
      Dt(),
      R(),
      L(),
      B(),
      A(),
      j(),
      i(),
      Yt(),
      Ce(),
      C(),
      rt(),
      E(),
      (Q = h()),
      (kn = 20));
  }))();
}
function jn() {
  let e = (0, Kn.c)(20),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { name: `dictation.composer` }), (e[0] = t))
    : (t = e[0]);
  let { isCapable: r } = he(At, t),
    i;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `dictation.global` }), (e[1] = i))
    : (i = e[1]);
  let { isCapable: a } = he(At, i),
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { name: `voice.realtime` }), (e[2] = o))
    : (o = e[2]);
  let { isCapable: s } = he(At, o),
    c = H(Ft),
    l = a || r || c != null,
    u;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(Ge, { slug: `voice` })), (e[3] = u))
    : (u = e[3]);
  let d;
  e[4] !== l || e[5] !== s
    ? ((d =
        s || l
          ? (0, $.jsxs)(J, {
              children: [
                (0, $.jsx)(J.Header, {
                  title: (0, $.jsx)(q, {
                    id: `settings.voice.general`,
                    defaultMessage: `General`,
                    description: `Heading for general voice settings`,
                  }),
                }),
                (0, $.jsx)(J.Content, {
                  children: (0, $.jsxs)(n, { children: [(0, $.jsx)(Mn, {}), l ? (0, $.jsx)(hn, {}) : null] }),
                }),
              ],
            })
          : null),
      (e[4] = l),
      (e[5] = s),
      (e[6] = d))
    : (d = e[6]);
  let f;
  e[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, $.jsx)(sn, {})), (e[7] = f)) : (f = e[7]);
  let p;
  e[8] === l ? (p = e[9]) : ((p = (0, $.jsx)(Ln, { isDictationEnabled: l })), (e[8] = l), (e[9] = p));
  let m;
  e[10] !== d || e[11] !== p
    ? ((m = (0, $.jsxs)($.Fragment, { children: [d, f, p] })), (e[10] = d), (e[11] = p), (e[12] = m))
    : (m = e[12]);
  let h;
  e[13] === a ? (h = e[14]) : ((h = a ? (0, $.jsx)(zn, {}) : null), (e[13] = a), (e[14] = h));
  let g;
  e[15] === h
    ? (g = e[16])
    : ((g = (0, $.jsx)(yn, { fallback: (0, $.jsx)($.Fragment, { children: h }) })), (e[15] = h), (e[16] = g));
  let _;
  return (
    e[17] !== m || e[18] !== g
      ? ((_ = (0, $.jsxs)(Ze, { title: u, children: [m, g] })), (e[17] = m), (e[18] = g), (e[19] = _))
      : (_ = e[19]),
    _
  );
}
function Mn() {
  let e = (0, Kn.c)(61),
    n = r(T),
    i = W(),
    a = V(I.microphoneInputDeviceId),
    o = typeof navigator < `u` && navigator.mediaDevices?.enumerateDevices != null,
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { enabled: o, queryFn: In, queryKey: Zn, staleTime: je.FIVE_SECONDS }), (e[0] = s))
    : (s = e[0]);
  let c = _(s),
    l,
    u,
    d;
  if (e[1] !== c.data || e[2] !== i || e[3] !== a) {
    l = c.data ?? [];
    let t;
    (e[7] === i
      ? (t = e[8])
      : ((t = i.formatMessage({
          id: `settings.general.microphoneInput.systemDefault`,
          defaultMessage: `System default`,
          description: `Default microphone input option label`,
        })),
        (e[7] = i),
        (e[8] = t)),
      (d = t));
    let n;
    e[9] === a ? (n = e[10]) : ((n = (e) => e.deviceId === a), (e[9] = a), (e[10] = n));
    let r = l.findIndex(n),
      o = l[r];
    if (a == null) u = d;
    else if (l.length === 0) {
      let t;
      (e[11] === i
        ? (t = e[12])
        : ((t = i.formatMessage({
            id: `settings.general.microphoneInput.selected`,
            defaultMessage: `Selected microphone`,
            description: `Microphone input label shown before the selected device name has loaded`,
          })),
          (e[11] = i),
          (e[12] = t)),
        (u = t));
    } else if (o == null) {
      let t;
      (e[13] === i
        ? (t = e[14])
        : ((t = i.formatMessage({
            id: `settings.general.microphoneInput.unavailable`,
            defaultMessage: `Unavailable microphone`,
            description: `Selected microphone input label when the device is no longer available`,
          })),
          (e[13] = i),
          (e[14] = t)),
        (u = t));
    } else u = Fn(i, o, r);
    ((e[1] = c.data), (e[2] = i), (e[3] = a), (e[4] = l), (e[5] = u), (e[6] = d));
  } else ((l = e[4]), (u = e[5]), (d = e[6]));
  let f;
  e[15] === c
    ? (f = e[16])
    : ((f = async function () {
        await le.systemPermissions?.requestMicrophoneAccess();
        let e = await navigator.mediaDevices.getUserMedia({ audio: !0 }).catch(Pn);
        await c.refetch().finally(() => {
          e?.getTracks().forEach(Nn);
        });
      }),
      (e[15] = c),
      (e[16] = f));
  let p = f,
    m;
  e[17] !== i || e[18] !== n
    ? ((m = function (e) {
        U(n, I.microphoneInputDeviceId, e).catch(() => {
          n.get(ve).danger(
            i.formatMessage({
              id: `settings.general.microphoneInput.saveError`,
              defaultMessage: `Could not save microphone selection`,
              description: `Error toast when the selected microphone cannot be saved`,
            }),
            { errorAnalytics: { toastId: `voiceSettings.microphoneInput.saveError` } },
          );
        });
      }),
      (e[17] = i),
      (e[18] = n),
      (e[19] = m))
    : (m = e[19]);
  let h = m,
    g,
    v;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(q, {
        id: `settings.general.microphoneInput.label`,
        defaultMessage: `Microphone`,
        description: `Label for microphone input selection setting`,
      })),
      (v = o
        ? (0, $.jsx)(q, {
            id: `settings.general.microphoneInput.description`,
            defaultMessage: `Used for voice chat and dictation`,
            description: `Description for microphone input selection setting`,
          })
        : (0, $.jsx)(q, {
            id: `settings.general.microphoneInput.unsupported`,
            defaultMessage: `Microphone selection is not available on this device`,
            description: `Description shown when microphone selection is unsupported`,
          })),
      (e[20] = g),
      (e[21] = v))
    : ((g = e[20]), (v = e[21]));
  let y;
  e[22] === p
    ? (y = e[23])
    : ((y = (e) => {
        e && p();
      }),
      (e[22] = p),
      (e[23] = y));
  let b;
  e[24] === u
    ? (b = e[25])
    : ((b = (0, $.jsx)(Le, {
        disabled: !o,
        children: (0, $.jsx)(`span`, { className: `truncate`, children: u }),
      })),
      (e[24] = u),
      (e[25] = b));
  let x = a == null ? Oe : void 0,
    S;
  e[26] === h
    ? (S = e[27])
    : ((S = () => {
        h(null);
      }),
      (e[26] = h),
      (e[27] = S));
  let C;
  e[28] !== d || e[29] !== x || e[30] !== S
    ? ((C = (0, $.jsx)(G.Item, { rightIconAsset: x, onSelect: S, children: d })),
      (e[28] = d),
      (e[29] = x),
      (e[30] = S),
      (e[31] = C))
    : (C = e[31]);
  let w;
  e[32] === l.length
    ? (w = e[33])
    : ((w = l.length > 0 ? (0, $.jsx)(G.Separator, {}) : null), (e[32] = l.length), (e[33] = w));
  let E;
  if (e[34] !== l || e[35] !== i || e[36] !== h || e[37] !== a) {
    let t;
    (e[39] !== i || e[40] !== h || e[41] !== a
      ? ((t = (e, t) => {
          let n = Fn(i, e, t);
          return (0, $.jsx)(
            G.Item,
            {
              rightIconAsset: e.deviceId === a ? Oe : void 0,
              onSelect: () => {
                h(e.deviceId);
              },
              children: n,
            },
            e.deviceId,
          );
        }),
        (e[39] = i),
        (e[40] = h),
        (e[41] = a),
        (e[42] = t))
      : (t = e[42]),
      (E = l.map(t)),
      (e[34] = l),
      (e[35] = i),
      (e[36] = h),
      (e[37] = a),
      (e[38] = E));
  } else E = e[38];
  let D;
  e[43] === c.isFetching
    ? (D = e[44])
    : ((D = c.isFetching
        ? (0, $.jsx)(G.Message, {
            compact: !0,
            children: (0, $.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                (0, $.jsx)(t, { className: `size-3` }),
                (0, $.jsx)(q, {
                  id: `settings.general.microphoneInput.loading`,
                  defaultMessage: `Loading microphones`,
                  description: `Message shown while microphone inputs load`,
                }),
              ],
            }),
          })
        : null),
      (e[43] = c.isFetching),
      (e[44] = D));
  let O;
  e[45] !== c.isError || e[46] !== c.isFetching
    ? ((O =
        !c.isFetching && c.isError
          ? (0, $.jsx)(G.Message, {
              tone: `error`,
              children: (0, $.jsx)(q, {
                id: `settings.general.microphoneInput.loadError`,
                defaultMessage: `Unable to load microphones`,
                description: `Message shown when microphone input devices cannot be loaded`,
              }),
            })
          : null),
      (e[45] = c.isError),
      (e[46] = c.isFetching),
      (e[47] = O))
    : (O = e[47]);
  let k;
  e[48] !== l.length || e[49] !== c.isError || e[50] !== c.isFetching
    ? ((k =
        !c.isFetching && !c.isError && l.length === 0
          ? (0, $.jsx)(G.Message, {
              children: (0, $.jsx)(q, {
                id: `settings.general.microphoneInput.empty`,
                defaultMessage: `No microphones found`,
                description: `Message shown when no microphone inputs are available`,
              }),
            })
          : null),
      (e[48] = l.length),
      (e[49] = c.isError),
      (e[50] = c.isFetching),
      (e[51] = k))
    : (k = e[51]);
  let A;
  return (
    e[52] !== w ||
    e[53] !== E ||
    e[54] !== D ||
    e[55] !== O ||
    e[56] !== k ||
    e[57] !== y ||
    e[58] !== b ||
    e[59] !== C
      ? ((A = (0, $.jsx)(K, {
          label: g,
          description: v,
          control: (0, $.jsxs)(xe, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: !o,
            onOpenChange: y,
            triggerButton: b,
            children: [C, w, E, D, O, k],
          }),
        })),
        (e[52] = w),
        (e[53] = E),
        (e[54] = D),
        (e[55] = O),
        (e[56] = k),
        (e[57] = y),
        (e[58] = b),
        (e[59] = C),
        (e[60] = A))
      : (A = e[60]),
    A
  );
}
function Nn(e) {
  return e.stop();
}
function Pn() {
  return null;
}
function Fn(e, t, n) {
  return (
    t.label ||
    e.formatMessage(
      {
        id: `settings.general.microphoneInput.fallbackDeviceLabel`,
        defaultMessage: `Microphone {index}`,
        description: `Fallback microphone input label when the browser does not expose the device name`,
      },
      { index: n + 1 },
    )
  );
}
async function In() {
  if (typeof navigator > `u`) return [];
  let e = navigator.mediaDevices;
  return e?.enumerateDevices == null
    ? []
    : (await e.enumerateDevices()).filter(
        (e) => e.kind === `audioinput` && e.deviceId.length > 0 && e.deviceId !== "default",
      );
}
function Ln(e) {
  let t = (0, Kn.c)(16),
    { isDictationEnabled: r } = e,
    i = H(Ft),
    { data: a } = H(Kt),
    o = Fe(Mt),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(q, {
          id: `settings.general.dictation`,
          defaultMessage: `Dictation`,
          description: `Heading for global dictation settings group`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === r
    ? (c = t[2])
    : ((c = r
        ? null
        : (0, $.jsx)(n, {
            children: (0, $.jsx)(K, {
              label: (0, $.jsx)(q, {
                id: `settings.voice.dictation.unavailable.label`,
                defaultMessage: `Dictation unavailable`,
                description: `Label shown instead of dictation controls when dictation is unavailable`,
              }),
              description: (0, $.jsx)(q, {
                id: `settings.voice.dictation.unavailable.description`,
                defaultMessage: `Dictation is not available in your current configuration`,
                description: `Explanation shown when the current account, workspace policy, or device does not support dictation`,
              }),
              control: null,
            }),
          })),
      (t[1] = r),
      (t[2] = c));
  let l;
  t[3] !== r || t[4] !== o
    ? ((l = r && o ? (0, $.jsx)(n, { children: (0, $.jsx)(Rn, {}) }) : null),
      (t[3] = r),
      (t[4] = o),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u = i == null ? null : (0, $.jsx)(n, { children: (0, $.jsx)(Gn, { mode: `hold` }) })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== a || t[9] !== r
    ? ((d = r || (a != null && a.items.length > 0) ? (0, $.jsx)(n, { children: (0, $.jsx)(Tn, {}) }) : null),
      (t[8] = a),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== d
      ? ((f = (0, $.jsxs)(J, { children: [s, (0, $.jsxs)(J.Content, { children: [c, l, u, d] })] })),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function Rn() {
  let e = (0, Kn.c)(10),
    t = r(T),
    n = W(),
    i = V(I.dictationSoundsEnabled),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(q, {
        id: `settings.voice.dictationSounds.label`,
        defaultMessage: `Dictation sounds`,
        description: `Label for the setting that controls sounds when dictation starts and stops`,
      })),
      (o = (0, $.jsx)(q, {
        id: `settings.voice.dictationSounds.description`,
        defaultMessage: `Play sounds when dictation starts and stops`,
        description: `Explains that the dictation sounds setting controls the start and stop audio cues`,
      })),
      (e[0] = a),
      (e[1] = o))
    : ((a = e[0]), (o = e[1]));
  let s;
  e[2] === t
    ? (s = e[3])
    : ((s = (e) =>
        void U(t, I.dictationSoundsEnabled, e).catch(() => {
          t.get(ve).danger(
            (0, $.jsx)(q, {
              id: `settings.voice.dictationSounds.saveError`,
              defaultMessage: `Could not save dictation sounds preference`,
              description: `Error toast when the preference for dictation start and stop sounds cannot be saved`,
            }),
            { errorAnalytics: { toastId: `voiceSettings.dictationSounds.saveError` } },
          );
        })),
      (e[2] = t),
      (e[3] = s));
  let c;
  e[4] === n
    ? (c = e[5])
    : ((c = n.formatMessage({
        id: `settings.voice.dictationSounds.toggleLabel`,
        defaultMessage: `Toggle dictation sounds`,
        description: `Accessible label for turning dictation start and stop sounds on or off`,
      })),
      (e[4] = n),
      (e[5] = c));
  let l;
  return (
    e[6] !== i || e[7] !== s || e[8] !== c
      ? ((l = (0, $.jsx)(K, {
          label: a,
          description: o,
          control: (0, $.jsx)(me, { checked: i, onChange: s, ariaLabel: c }),
        })),
        (e[6] = i),
        (e[7] = s),
        (e[8] = c),
        (e[9] = l))
      : (l = e[9]),
    l
  );
}
function zn() {
  let e = (0, Kn.c)(1),
    { data: t } = H(Bt);
  if (!Ht(t)) return null;
  let r;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(J, {
          children: (0, $.jsx)(J.Content, { children: (0, $.jsx)(n, { children: (0, $.jsx)(Bn, {}) }) }),
        })),
        (e[0] = r))
      : (r = e[0]),
    r
  );
}
function Bn() {
  let e = (0, Kn.c)(17),
    t = r(T),
    n = W(),
    i = V(I.dictationDictionary),
    [a, o] = (0, qn.useState)(null),
    s = (0, qn.useRef)(!1),
    c = a ?? i,
    l = c != null && c.length > 0 ? c : Yn,
    u;
  e[0] === t
    ? (u = e[1])
    : ((u = async function (e) {
        let n = e.map(Wn).filter(Un);
        (await U(t, I.dictationDictionary, n), o(null));
      }),
      (e[0] = t),
      (e[1] = u));
  let d = u,
    f,
    p;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(q, {
        id: `settings.general.dictationDictionary.label`,
        defaultMessage: `Dictation dictionary`,
        description: `Label for dictation cleanup dictionary setting`,
      })),
      (p = (0, $.jsx)(q, {
        id: `settings.general.dictationDictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description for dictation cleanup dictionary setting`,
      })),
      (e[2] = f),
      (e[3] = p))
    : ((f = e[2]), (p = e[3]));
  let m;
  e[4] === l
    ? (m = e[5])
    : ((m = () => {
        (o([...l, Jn]),
          requestAnimationFrame(() => {
            document.querySelector(`[data-dictation-dictionary-entry-index="${l.length}"]`)?.focus();
          }));
      }),
      (e[4] = l),
      (e[5] = m));
  let h, g;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(De, { "aria-hidden": !1, legacyIcon: Ye, asset16: ge, legacyClassName: `icon-2xs` })),
      (g = (0, $.jsx)(q, {
        id: `settings.general.dictationDictionary.addEntry`,
        defaultMessage: `Add entry`,
        description: `Button label for adding one dictation dictionary entry`,
      })),
      (e[6] = h),
      (e[7] = g))
    : ((h = e[6]), (g = e[7]));
  let _;
  e[8] === m
    ? (_ = e[9])
    : ((_ = (0, $.jsx)(K, {
        label: f,
        description: p,
        control: (0, $.jsxs)(P, {
          type: `button`,
          color: `secondary`,
          size: `toolbar`,
          onMouseDown: Hn,
          onClick: m,
          children: [h, g],
        }),
      })),
      (e[8] = m),
      (e[9] = _));
  let v;
  e[10] !== n || e[11] !== d || e[12] !== l
    ? ((v = l.map((e, t) =>
        (0, $.jsx)(
          K,
          {
            variant: `nested`,
            label: null,
            control: (0, $.jsxs)(`div`, {
              className: `flex w-full items-center gap-2`,
              children: [
                (0, $.jsx)(ct, {
                  "data-dictation-dictionary-entry-index": t,
                  "aria-label": n.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.entryLabel`,
                      defaultMessage: `Dictionary entry {index}`,
                      description: `Aria label for one dictation dictionary entry`,
                    },
                    { index: t + 1 },
                  ),
                  placeholder: Xn[t] ?? Xn[0] ?? ``,
                  value: e,
                  onChange: (e) => {
                    let n = [...l];
                    ((n[t] = e.currentTarget.value), o(n));
                  },
                  onBlur: () => {
                    if (s.current) {
                      s.current = !1;
                      return;
                    }
                    d(l);
                  },
                  onKeyDown: (e) => {
                    if (e.key !== `Enter`) return;
                    e.preventDefault();
                    let n = [...l.slice(0, t + 1), Jn, ...l.slice(t + 1)];
                    ((s.current = !0),
                      o(n),
                      requestAnimationFrame(() => {
                        document.querySelector(`[data-dictation-dictionary-entry-index="${t + 1}"]`)?.focus();
                      }));
                  },
                }),
                (0, $.jsx)(P, {
                  type: `button`,
                  color: `ghost`,
                  size: `icon`,
                  "aria-label": n.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.removeEntry`,
                      defaultMessage: `Remove dictionary entry {index}`,
                      description: `Button label for removing one dictation dictionary entry`,
                    },
                    { index: t + 1 },
                  ),
                  disabled: l.length === 1 && e.length === 0,
                  onMouseDown: Vn,
                  onClick: () => {
                    d(l.filter((e, n) => n !== t));
                  },
                  children: (0, $.jsx)(qt, { className: `icon-2xs` }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (e[10] = n),
      (e[11] = d),
      (e[12] = l),
      (e[13] = v))
    : (v = e[13]);
  let y;
  return (
    e[14] !== _ || e[15] !== v
      ? ((y = (0, $.jsxs)($.Fragment, { children: [_, v] })), (e[14] = _), (e[15] = v), (e[16] = y))
      : (y = e[16]),
    y
  );
}
function Vn(e) {
  e.preventDefault();
}
function Hn(e) {
  e.preventDefault();
}
function Un(e) {
  return e.length > 0;
}
function Wn(e) {
  return e.trim();
}
function Gn(e) {
  let t = (0, Kn.c)(64),
    { mode: n } = e,
    i = r(T),
    a = H(Ft),
    o = H(bt),
    s = n === `toggle`,
    c = s ? `globalDictationSingleTap` : `globalDictationHold`,
    l = he(lt, c),
    [u, d] = (0, qn.useState)(!1),
    p = (0, qn.useId)(),
    m = W(),
    h = D(),
    g = Ne(),
    [_, v] = (0, qn.useState)(!1),
    [y, b] = (0, qn.useState)(null),
    S;
  t[0] !== g || t[1] !== h
    ? ((S = {
        mutationFn: Pe,
        networkMode: `always`,
        onSuccess: (e) => {
          (h.setQueryData(vt, e), g(vt));
        },
      }),
      (t[0] = g),
      (t[1] = h),
      (t[2] = S))
    : (S = t[2]);
  let C = ke(S),
    w;
  t[3] !== g || t[4] !== h
    ? ((w = {
        onSuccess: (e) => {
          let t = re(`global-dictation-hotkey-state`);
          (h.setQueryData(t, e.state), Promise.all([g(t), g(vt)]));
        },
      }),
      (t[3] = g),
      (t[4] = h),
      (t[5] = w))
    : (w = t[5]);
  let E = k(n === `hold` ? `global-dictation-set-hotkey` : `global-dictation-set-toggle-hotkey`, w),
    O;
  t[6] !== c || t[7] !== m || t[8] !== s || t[9] !== i || t[10] !== C || t[11] !== E || t[12] !== a
    ? ((O = async function (e) {
        b(null);
        try {
          if (a === `os-global`) {
            let t = await E.mutateAsync({ hotkey: e });
            t.success ||
              b(t.errorCode === `shortcut-conflict` ? m.formatMessage(Qn.shortcutConflict) : t.error);
            return;
          }
          let t = i.get(lt, s ? `globalDictationHold` : `globalDictationSingleTap`),
            n = i.get(kt) === `macOS`;
          if (e != null && t != null && at(e, n) === at(t, n)) {
            b(m.formatMessage(Qn.shortcutConflict));
            return;
          }
          await C.mutateAsync({
            commandId: c,
            update: e == null ? { type: `clear` } : { type: `set`, accelerator: e },
          });
        } catch (e) {
          let t = e;
          if (t instanceof Error) {
            b(t.message);
            return;
          }
          if (s) {
            b(
              m.formatMessage({
                id: `settings.general.globalDictationToggleHotkey.errorGeneric`,
                defaultMessage: `Failed to update single-tap dictation shortcut`,
                description: `Fallback error shown when single-tap dictation shortcut update fails`,
              }),
            );
            return;
          }
          b(
            m.formatMessage({
              id: `settings.general.globalDictationHotkey.errorGeneric`,
              defaultMessage: `Failed to update dictation shortcut`,
              description: `Fallback error shown when dictation shortcut update fails`,
            }),
          );
        }
      }),
      (t[6] = c),
      (t[7] = m),
      (t[8] = s),
      (t[9] = i),
      (t[10] = C),
      (t[11] = E),
      (t[12] = a),
      (t[13] = O))
    : (O = t[13]);
  let A = O,
    j;
  t[14] === l ? (j = t[15]) : ((j = l == null ? null : x(l)), (t[14] = l), (t[15] = j));
  let M = j,
    N;
  t[16] !== m || t[17] !== s
    ? ((N = s ? m.formatMessage(Qn.toggleDictationHotkey) : m.formatMessage(Qn.holdToDictateHotkey)),
      (t[16] = m),
      (t[17] = s),
      (t[18] = N))
    : (N = t[18]);
  let F = N,
    I;
  t[19] !== m || t[20] !== s
    ? ((I = s
        ? m.formatMessage({
            id: `settings.general.globalDictationToggleHotkey.captureAriaLabel`,
            defaultMessage: `Single-tap shortcut capture`,
            description: `Aria label for single-tap dictation shortcut capture input`,
          })
        : m.formatMessage({
            id: `settings.general.globalDictationHotkey.captureAriaLabel`,
            defaultMessage: `Dictation shortcut capture`,
            description: `Aria label for dictation shortcut capture input`,
          })),
      (t[19] = m),
      (t[20] = s),
      (t[21] = I))
    : (I = t[21]);
  let L = I,
    R = s ? void 0 : Ut,
    z;
  t[22] === s
    ? (z = t[23])
    : ((z = s
        ? (0, $.jsx)(q, { ...Qn.toggleDictationHotkey })
        : (0, $.jsx)(q, { ...Qn.holdToDictateHotkey })),
      (t[22] = s),
      (t[23] = z));
  let ee;
  t[24] === s
    ? (ee = t[25])
    : ((ee = s
        ? (0, $.jsx)(q, {
            id: `settings.general.globalDictationToggleHotkey.description`,
            defaultMessage: `Press once to start, and again to finish`,
            description: `Description for single-tap dictation shortcut setting`,
          })
        : (0, $.jsx)(q, {
            id: `settings.general.globalDictationHotkey.description`,
            defaultMessage: `Hold to dictate, or double-tap for hands-free`,
            description: `Description for dictation shortcut setting`,
          })),
      (t[24] = s),
      (t[25] = ee));
  let te;
  t[26] !== p || t[27] !== u || t[28] !== s
    ? ((te = s
        ? null
        : (0, $.jsx)(`span`, {
            children: (0, $.jsxs)(P, {
              "aria-controls": p,
              "aria-expanded": u,
              color: `ghostTertiary`,
              radius: `small`,
              size: `inline`,
              onClick: () => d(!u),
              children: [
                (0, $.jsx)(q, {
                  id: `settings.voice.dictation.advanced`,
                  defaultMessage: `Advanced`,
                  description: `Button that expands the optional single-tap dictation shortcut`,
                }),
                u ? (0, $.jsx)(fe, {}) : (0, $.jsx)(f, {}),
              ],
            }),
          })),
      (t[26] = p),
      (t[27] = u),
      (t[28] = s),
      (t[29] = te))
    : (te = t[29]);
  let ne;
  t[30] === y
    ? (ne = t[31])
    : ((ne = y ? (0, $.jsx)(`span`, { className: `text-danger`, children: y }) : null),
      (t[30] = y),
      (t[31] = ne));
  let B;
  t[32] !== te || t[33] !== ne || t[34] !== ee
    ? ((B = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [ee, te, ne] })),
      (t[32] = te),
      (t[33] = ne),
      (t[34] = ee),
      (t[35] = B))
    : (B = t[35]);
  let ie = a === `os-global`,
    ae = C.isPending || E.isPending || o?.supported !== !0,
    oe;
  t[36] === m
    ? (oe = t[37])
    : ((oe = m.formatMessage({
        id: `settings.general.globalDictationHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when global dictation hotkey is disabled`,
      })),
      (t[36] = m),
      (t[37] = oe));
  let se;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => {
        v(!1);
      }),
      (t[38] = se))
    : (se = t[38]);
  let ce, V;
  t[39] === A
    ? ((ce = t[40]), (V = t[41]))
    : ((ce = (e) => {
        (v(!1), A(e));
      }),
      (V = () => {
        A(null);
      }),
      (t[39] = A),
      (t[40] = ce),
      (t[41] = V));
  let le;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = () => {
        (b(null), v(!0));
      }),
      (t[42] = le))
    : (le = t[42]);
  let ue;
  t[43] !== M ||
  t[44] !== L ||
  t[45] !== l ||
  t[46] !== F ||
  t[47] !== _ ||
  t[48] !== ie ||
  t[49] !== ae ||
  t[50] !== oe ||
  t[51] !== ce ||
  t[52] !== V
    ? ((ue = (0, $.jsx)(Gt, {
        accelerator: l,
        acceleratorLabel: M,
        allowsBareModifiers: ie,
        captureAriaLabel: L,
        disabled: ae,
        emptyLabel: oe,
        hotkeyName: F,
        isCapturing: _,
        onCancelCapture: se,
        onCapture: ce,
        onClear: V,
        onStartCapture: le,
      })),
      (t[43] = M),
      (t[44] = L),
      (t[45] = l),
      (t[46] = F),
      (t[47] = _),
      (t[48] = ie),
      (t[49] = ae),
      (t[50] = oe),
      (t[51] = ce),
      (t[52] = V),
      (t[53] = ue))
    : (ue = t[53]);
  let de;
  t[54] !== B || t[55] !== ue || t[56] !== R || t[57] !== z
    ? ((de = (0, $.jsx)(K, { id: R, label: z, description: B, control: ue })),
      (t[54] = B),
      (t[55] = ue),
      (t[56] = R),
      (t[57] = z),
      (t[58] = de))
    : (de = t[58]);
  let pe = de,
    U;
  return (
    t[59] !== p || t[60] !== u || t[61] !== s || t[62] !== pe
      ? ((U = s
          ? pe
          : (0, $.jsx)(rn, {
              content: (0, $.jsx)(Gn, { mode: `toggle` }),
              contentId: p,
              expanded: u,
              children: pe,
            })),
        (t[59] = p),
        (t[60] = u),
        (t[61] = s),
        (t[62] = pe),
        (t[63] = U))
      : (U = t[63]),
    U
  );
}
var Kn, qn, $, Jn, Yn, Xn, Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Kn = S()),
      ne(),
      be(),
      we(),
      ue(),
      g(),
      Je(),
      z(),
      ye(),
      (qn = l()),
      M(),
      Dt(),
      Lt(),
      R(),
      B(),
      O(),
      oe(),
      Te(),
      Me(),
      j(),
      Se(),
      et(),
      We(),
      Xe(),
      Vt(),
      pe(),
      It(),
      mn(),
      vn(),
      te(),
      i(),
      wn(),
      Yt(),
      Xt(),
      _e(),
      ht(),
      An(),
      dt(),
      Ce(),
      nn(),
      Qe(),
      se(),
      _t(),
      Rt(),
      a(),
      s(),
      ($ = h()),
      (Jn = ``),
      (Yn = [Jn]),
      (Xn = [`Jane Doe`, `Acme Widget`, `checkout-form.tsx`, `useCartState`]),
      (Zn = [`microphone-input-devices`]),
      (Qn = F({
        holdToDictateHotkey: {
          id: `settings.general.globalDictationHotkey.label`,
          defaultMessage: `Dictation shortcut`,
          description: `Label for dictation shortcut setting`,
        },
        toggleDictationHotkey: {
          id: `settings.general.globalDictationToggleHotkey.label`,
          defaultMessage: `Single-tap shortcut`,
          description: `Label for single-tap dictation shortcut setting`,
        },
        shortcutConflict: {
          id: `settings.voice.dictation.shortcutConflict`,
          defaultMessage: `Choose a different shortcut for single-tap dictation`,
          description: `Error when the optional single-tap dictation shortcut matches the hold and double-tap shortcut`,
        },
      })));
  }))();
}
$n();
export { jn as VoiceSettings };
//# sourceMappingURL=voice-settings-da1b7be791f6.js.map
