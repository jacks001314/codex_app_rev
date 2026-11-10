const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dictionary-dialog-2a8db9c7436a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  $nt as r,
  $v as i,
  ADt as a,
  AO as o,
  B4 as s,
  BV as c,
  CO as l,
  CPt as u,
  Cot as d,
  DV as f,
  Ez as p,
  Fat as m,
  Gct as h,
  IDt as g,
  Ixt as _,
  JC as v,
  Jxt as y,
  Kat as b,
  MO as x,
  Mct as S,
  NV as C,
  Nxt as w,
  Pat as T,
  Pxt as E,
  QJ as D,
  Qv as O,
  SPt as k,
  TJ as A,
  TO as j,
  VDt as M,
  Vxt as N,
  Wnt as P,
  XO as F,
  Xot as I,
  Yot as L,
  ZJ as R,
  ZO as z,
  _xt as B,
  b0 as V,
  bx as H,
  eZ as ee,
  fPt as te,
  hot as U,
  i3 as ne,
  iO as re,
  irt as ie,
  iw as W,
  jDt as G,
  jO as ae,
  jct as oe,
  kz as se,
  lot as K,
  lrt as ce,
  m4 as le,
  nst as ue,
  p4 as de,
  pPt as fe,
  qC as pe,
  qat as me,
  qnt as he,
  r3 as ge,
  rO as _e,
  rst as ve,
  srt as ye,
  t3 as be,
  tst as xe,
  tw as q,
  vzt as Se,
  wot as Ce,
  xMt as we,
  y0 as Te,
  yx as Ee,
  yzt as De,
  z4 as Oe,
  zxt as ke,
} from "./app-shared-bbfeca5e5737.js";
import {
  $lr as Ae,
  ARt as je,
  BOr as Me,
  BPr as Ne,
  Bu as Pe,
  DPn as Fe,
  Ek as Ie,
  FEr as Le,
  HEr as Re,
  HOr as ze,
  HPr as Be,
  Mjt as Ve,
  NDr as He,
  Njt as Ue,
  PEr as We,
  QP as Ge,
  SDt as Ke,
  TPn as qe,
  TSn as Je,
  Tk as J,
  Um as Ye,
  Vu as Xe,
  WEr as Ze,
  Wm as Qe,
  Ymr as $e,
  _F as et,
  cDt as tt,
  cSn as nt,
  cd as rt,
  eDr as it,
  eF as at,
  ehr as ot,
  eur as st,
  fDn as ct,
  fMr as lt,
  fSn as ut,
  h1 as dt,
  hF as ft,
  iur as pt,
  jDr as mt,
  jRt as ht,
  m1 as gt,
  nDr as _t,
  nDt as vt,
  oSn as yt,
  od as bt,
  pDn as xt,
  pOr as St,
  rDt as Ct,
  rur as wt,
  sSn as Tt,
  sd as Et,
  tDt as Dt,
  tF as Ot,
  uDt as kt,
  uMr as At,
  uSn as jt,
  vDt as Mt,
  vSn as Nt,
  wDt as Pt,
  yDt as Ft,
} from "./app-initial-5851df3f6cb1.js";
import {
  C_ as It,
  S_ as Lt,
  T_ as Rt,
  b_ as zt,
  d_ as Bt,
  fm as Vt,
  pm as Ht,
  u_ as Ut,
  v_ as Wt,
  w_ as Gt,
  x_ as Kt,
  y_ as qt,
} from "./app-primary-fe8a450b3b04.js";
import { n as Jt, t as Yt } from "./settings-loading-row-bf72bf2df25d.js";
import { n as Xt, t as Zt } from "./use-is-realtime-conversation-enabled-8fd6a99a42a2.js";
import { n as Qt, t as $t } from "./settings-row-disclosure-81330dc4d2f4.js";
import { n as en, t as tn } from "./realtime-voice-picker-dialog-963a67dd16c8.js";
function nn() {
  let e = (0, sn.c)(33),
    n = _(d),
    r = Xt(),
    i = ht(),
    { platform: a } = st(),
    { hostId: o } = xt(),
    s = ke(Pt, o),
    c = N(Ze),
    l;
  e[0] === i ? (l = e[1]) : ((l = { enabled: i }), (e[0] = i), (e[1] = l));
  let { data: u, error: f, refetch: p } = N(vt, l),
    [m, h] = (0, cn.useState)(!1),
    v = (0, cn.useRef)(null),
    y;
  e[2] === u
    ? (y = e[3])
    : ((y = u?.voices.find((e) => e.slug === u.effectiveVoiceSlug)), (e[2] = u), (e[3] = y));
  let b = y,
    x = f != null || u?.voices.length === 0;
  if (!r) return null;
  let S;
  if (x) {
    let n;
    e[4] === p
      ? (n = e[5])
      : ((n = () => {
          p();
        }),
        (e[4] = p),
        (e[5] = n));
    let r;
    e[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(g, {
          id: `settings.general.realtimeVoice.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading compatible realtime voices`,
        })),
        (e[6] = r))
      : (r = e[6]);
    let i;
    (e[7] === n
      ? (i = e[8])
      : ((i = (0, Y.jsx)(t, { color: `secondary`, size: `toolbar`, onClick: n, children: r })),
        (e[7] = n),
        (e[8] = i)),
      (S = i));
  } else if (u == null || b == null) {
    let n;
    (e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(t, {
          color: `secondary`,
          size: `toolbar`,
          disabled: !0,
          children: (0, Y.jsx)(g, {
            id: `settings.general.realtimeVoice.loading`,
            defaultMessage: `Loading…`,
            description: `Label shown while the selected realtime voice loads`,
          }),
        })),
        (e[9] = n))
      : (n = e[9]),
      (S = n));
  } else {
    let r;
    e[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(`span`, { "aria-hidden": !0, className: `size-3 rounded-full bg-chart-blue` })),
        (e[10] = r))
      : (r = e[10]);
    let i;
    e[11] === b.name
      ? (i = e[12])
      : ((i = (0, Y.jsxs)(t, { color: `secondary`, size: `toolbar`, children: [r, b.name] })),
        (e[11] = b.name),
        (e[12] = i));
    let a;
    e[13] === n
      ? (a = e[14])
      : ((a = (e) => {
          (e && (v.current = n.get(St)), h(e));
        }),
        (e[13] = n),
        (e[14] = a));
    let o;
    e[15] !== n || e[16] !== b.slug
      ? ((o = (e) => (e === b.slug ? Promise.resolve() : kt(n, e, v.current))),
        (e[15] = n),
        (e[16] = b.slug),
        (e[17] = o))
      : (o = e[17]);
    let s;
    (e[18] !== m || e[19] !== b || e[20] !== i || e[21] !== a || e[22] !== o || e[23] !== u.voices
      ? ((s = (0, Y.jsx)(tn, {
          open: m,
          initialVoice: b,
          triggerContent: i,
          voices: u.voices,
          onOpenChange: a,
          onSave: o,
        })),
        (e[18] = m),
        (e[19] = b),
        (e[20] = i),
        (e[21] = a),
        (e[22] = o),
        (e[23] = u.voices),
        (e[24] = s))
      : (s = e[24]),
      (S = s));
  }
  let C;
  e[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(J.Header, {
        title: (0, Y.jsx)(g, {
          id: `settings.general.realtimeVoice`,
          defaultMessage: `Voice chat`,
          description: `Heading for settings that configure live two-way spoken conversations with ChatGPT, distinct from one-way dictation`,
        }),
      })),
      (e[25] = C))
    : (C = e[25]);
  let w;
  return (
    e[26] !== s || e[27] !== i || e[28] !== a || e[29] !== c?.dynamicTools || e[30] !== x || e[31] !== S
      ? ((w = (0, Y.jsxs)(J, {
          children: [
            C,
            (0, Y.jsx)(J.Content, {
              children: (0, Y.jsx)(pe, {
                children: i
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsx)(q, {
                          label: (0, Y.jsx)(g, {
                            id: `settings.general.realtimeVoice.voice.label`,
                            defaultMessage: `Voice`,
                            description: `Label for choosing the synthesized voice the assistant uses in live two-way spoken conversations`,
                          }),
                          description: (0, Y.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, Y.jsx)(g, {
                                id: `settings.general.realtimeVoice.voice.description`,
                                defaultMessage: `Choose the voice for new voice chats`,
                                description: `Helper text for choosing the synthesized voice used in future live two-way spoken conversations with ChatGPT`,
                              }),
                              x
                                ? (0, Y.jsx)(`span`, {
                                    className: `text-danger`,
                                    children: (0, Y.jsx)(g, {
                                      id: `settings.general.realtimeVoice.loadError`,
                                      defaultMessage: `Unable to load voice settings`,
                                      description: `Error shown when realtime voice settings cannot load`,
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          control: S,
                        }),
                        (0, Y.jsx)(on, {}),
                        null,
                        a === `macOS` && s && c?.dynamicTools.appshotsEnabled ? (0, Y.jsx)(an, {}) : null,
                      ],
                    })
                  : (0, Y.jsx)(rn, {}),
              }),
            }),
          ],
        })),
        (e[26] = s),
        (e[27] = i),
        (e[28] = a),
        (e[29] = c?.dynamicTools),
        (e[30] = x),
        (e[31] = S),
        (e[32] = w))
      : (w = e[32]),
    w
  );
}
function rn() {
  let e = (0, sn.c)(3),
    t = N(At);
  if (t.status === `loading`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(Yt, {
            children: (0, Y.jsx)(g, {
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
        ? ((t = (0, Y.jsx)(q, {
            label: (0, Y.jsx)(g, {
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
      ? ((n = (0, Y.jsx)(q, {
          label: (0, Y.jsx)(g, {
            id: `settings.general.realtimeVoice.unavailable.label`,
            defaultMessage: `Voice chat unavailable`,
            description: `Label shown when live two-way voice conversations are unavailable for the current account or workspace`,
          }),
          description: (0, Y.jsx)(g, {
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
function an() {
  let e = (0, sn.c)(10),
    t = _(d),
    n = M(),
    i = r(ln.screenContextEnabled),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(g, {
        id: `settings.general.realtimeVoiceScreenContext.label`,
        defaultMessage: `Screen context`,
        description: `Label for allowing live voice conversations to use visual context from the foreground app`,
      })),
      (o = (0, Y.jsx)(g, {
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
          he(t, ln.screenContextEnabled, !1);
          return;
        }
        Ft(t, () => {
          he(t, ln.screenContextEnabled, !0);
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
      ? ((l = (0, Y.jsx)(q, {
          label: a,
          description: o,
          control: (0, Y.jsx)(ae, { checked: i, onChange: s, ariaLabel: c }),
        })),
        (e[6] = i),
        (e[7] = s),
        (e[8] = c),
        (e[9] = l))
      : (l = e[9]),
    l
  );
}
function on() {
  let e = (0, sn.c)(40),
    t = M(),
    { platform: n } = st(),
    r = ue(),
    i = Be(),
    { data: a } = N(Tt),
    [o, s] = (0, cn.useState)(!1),
    [c, l] = (0, cn.useState)(null),
    u;
  e[0] !== i || e[1] !== r
    ? ((u = {
        onSuccess: (e) => {
          let t = ie(`codex-command-keymap-state`);
          (r.setQueryData(t, e), i(t));
        },
      }),
      (e[0] = i),
      (e[1] = r),
      (e[2] = u))
    : (u = e[2]);
  let d = ce(`set-codex-command-keybinding`, u),
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
    ? ((m = jt(`realtimeVoice`, a, n)[0]?.accelerator ?? null),
      (h = m == null ? null : F(m)),
      (e[6] = a),
      (e[7] = n),
      (e[8] = m),
      (e[9] = h))
    : ((m = e[8]), (h = e[9]));
  let _ = h,
    v;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Y.jsx)(g, {
        id: `settings.general.realtimeVoiceHotkey.label`,
        defaultMessage: `Voice chat hotkey`,
        description: `Label for the global keyboard shortcut that starts a live two-way spoken conversation, distinct from dictation shortcuts`,
      })),
      (e[10] = v))
    : (v = e[10]);
  let y;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Y.jsx)(g, {
        id: `settings.general.realtimeVoiceHotkey.description`,
        defaultMessage: `Start voice chat from anywhere on desktop`,
        description: `Explains that the global shortcut starts a live two-way spoken conversation from any desktop app`,
      })),
      (e[11] = y))
    : (y = e[11]);
  let b;
  e[12] === c
    ? (b = e[13])
    : ((b = c ? (0, Y.jsx)(`span`, { className: `text-danger`, children: c }) : null),
      (e[12] = c),
      (e[13] = b));
  let x;
  e[14] === b
    ? (x = e[15])
    : ((x = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [y, b] })),
      (e[14] = b),
      (e[15] = x));
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
  let D, O;
  e[23] === p
    ? ((D = e[24]), (O = e[25]))
    : ((D = (e) => {
        (s(!1), p(e));
      }),
      (O = () => {
        p(null);
      }),
      (e[23] = p),
      (e[24] = D),
      (e[25] = O));
  let k;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        (l(null), s(!0));
      }),
      (e[26] = k))
    : (k = e[26]);
  let A;
  e[27] !== _ ||
  e[28] !== m ||
  e[29] !== o ||
  e[30] !== d.isPending ||
  e[31] !== T ||
  e[32] !== D ||
  e[33] !== O ||
  e[34] !== S ||
  e[35] !== w
    ? ((A = (0, Y.jsx)(Ut, {
        accelerator: m,
        acceleratorLabel: _,
        allowsBareModifiers: !0,
        captureAriaLabel: S,
        disabled: C,
        emptyLabel: w,
        hotkeyName: T,
        isCapturing: o,
        onCancelCapture: E,
        onCapture: D,
        onClear: O,
        onStartCapture: k,
      })),
      (e[27] = _),
      (e[28] = m),
      (e[29] = o),
      (e[30] = d.isPending),
      (e[31] = T),
      (e[32] = D),
      (e[33] = O),
      (e[34] = S),
      (e[35] = w),
      (e[36] = A))
    : (A = e[36]);
  let j;
  return (
    e[37] !== A || e[38] !== x
      ? ((j = (0, Y.jsx)(q, { label: v, description: x, control: A })), (e[37] = A), (e[38] = x), (e[39] = j))
      : (j = e[39]),
    j
  );
}
var sn, cn, Y, ln;
function un() {
  return (un = e(() => {
    ((sn = Se()),
      xe(),
      E(),
      S(),
      (cn = De()),
      G(),
      Ke(),
      Mt(),
      lt(),
      He(),
      ut(),
      be(),
      x(),
      Ae(),
      ct(),
      z(),
      Ne(),
      Zt(),
      je(),
      Ce(),
      Bt(),
      P(),
      Ie(),
      Jt(),
      W(),
      v(),
      ye(),
      Re(),
      tt(),
      Dt(),
      en(),
      (Y = we()),
      (ln = oe()));
  }))();
}
function dn(e) {
  let n = (0, fn.c)(11),
    { controlColor: r } = e,
    i = r === void 0 ? `outline` : r,
    a = _(d),
    o = M(),
    { data: s, isError: c, refetch: u } = N(mt),
    { isPending: p, mutateAsync: m } = N(pn),
    h = s?.voiceMainLanguage ?? `auto`,
    v;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(g, {
        id: `settings.chatGpt.voice.language`,
        defaultMessage: `Language`,
        description: `Label for ChatGPT voice language`,
      })),
      (n[0] = v))
    : (v = n[0]);
  let y;
  return (
    n[1] !== i ||
    n[2] !== o ||
    n[3] !== c ||
    n[4] !== p ||
    n[5] !== h ||
    n[6] !== m ||
    n[7] !== u ||
    n[8] !== a ||
    n[9] !== s
      ? ((y = (0, X.jsx)(q, {
          label: v,
          control:
            c && s == null
              ? (0, X.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => void u(),
                  children: (0, X.jsx)(g, {
                    id: `settings.voice.language.retry`,
                    defaultMessage: `Retry`,
                    description: `Button to retry loading the account's saved voice language in Voice settings`,
                  }),
                })
              : (0, X.jsx)(l, {
                  align: `end`,
                  triggerButton: (0, X.jsx)(Ge, {
                    color: i,
                    disabled: s == null || p,
                    children:
                      s == null
                        ? (0, X.jsx)(g, {
                            id: `settings.voice.language.loading`,
                            defaultMessage: `Loading…`,
                            description: `Label while the account's saved voice language is loading in Voice settings`,
                          })
                        : bt(h, o),
                  }),
                  children: Et(o).map((e) => {
                    let { label: t, value: n } = e;
                    return (0, X.jsx)(
                      j.Item,
                      {
                        RightIcon: h === n ? f : void 0,
                        disabled: p,
                        onSelect: () => {
                          m(n).catch(() => {
                            a.get(U).danger(
                              o.formatMessage({
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
        (n[1] = i),
        (n[2] = o),
        (n[3] = c),
        (n[4] = p),
        (n[5] = h),
        (n[6] = m),
        (n[7] = u),
        (n[8] = a),
        (n[9] = s),
        (n[10] = y))
      : (y = n[10]),
    y
  );
}
var fn, X, pn;
function mn() {
  return (mn = e(() => {
    ((fn = Se()),
      E(),
      G(),
      ot(),
      He(),
      be(),
      o(),
      A(),
      K(),
      Ce(),
      W(),
      Ot(),
      tt(),
      rt(),
      (X = we()),
      (pn = y(d, ({ scope: e }) => ({
        mutationFn: async (t) => {
          let n = e.get(St),
            r = e.query.snapshot(mt);
          (await $e.safePatch(`/settings/account_user_setting`, {
            parameters: { query: { feature: `voice_main_language`, value: t } },
            additionalHeaders: n == null ? void 0 : { "ChatGPT-Account-ID": n },
          }),
            await Promise.all([r.invalidate(), e.queryClient.invalidateQueries({ queryKey: Ct })]));
        },
        mutationKey: [`set-spoken-language`],
      }))));
  }))();
}
function hn(e) {
  let t = (0, _n.c)(4),
    { fallback: n } = e,
    r = n === void 0 ? null : n,
    i = N(Ye);
  if (i == null) return r;
  let a = `${i.accountId}:${i.userId}`,
    o;
  return (
    t[0] !== i.accountId || t[1] !== i.userId || t[2] !== a
      ? ((o = (0, Z.jsx)(gn, { accountId: i.accountId, userId: i.userId }, a)),
        (t[0] = i.accountId),
        (t[1] = i.userId),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function gn(e) {
  let n = (0, _n.c)(9),
    { accountId: r, userId: i } = e,
    [a, o] = (0, vn.useState)(!1),
    s,
    c;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(g, {
        id: `speechSettings.content.customDictionary.page.title`,
        defaultMessage: `Voice dictionary`,
        description: `Title for the voice dictionary settings where users manage words to recognize in their speech`,
      })),
      (c = (0, Z.jsx)(g, {
        id: `settings.voice.dictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description of the saved speech recognition vocabulary in Voice settings`,
      })),
      (n[0] = s),
      (n[1] = c))
    : ((s = n[0]), (c = n[1]));
  let l;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(J.Content, {
        children: (0, Z.jsx)(pe, {
          children: (0, Z.jsx)(q, {
            label: s,
            description: c,
            control: (0, Z.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              onClick: () => o(!0),
              children: (0, Z.jsx)(g, {
                id: `settings.voice.dictionary.manage`,
                defaultMessage: `Manage`,
                description: `Button opening the voice dictionary editor in Voice settings`,
              }),
            }),
          }),
        }),
      })),
      (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== r || n[4] !== a || n[5] !== i
    ? ((u = a ? (0, Z.jsx)(yn, { accountId: r, userId: i, onClose: () => o(!1) }) : null),
      (n[3] = r),
      (n[4] = a),
      (n[5] = i),
      (n[6] = u))
    : (u = n[6]);
  let d;
  return (n[7] === u ? (d = n[8]) : ((d = (0, Z.jsxs)(J, { children: [l, u] })), (n[7] = u), (n[8] = d)), d);
}
var _n, vn, Z, yn;
function bn() {
  return (bn = e(() => {
    ((_n = Se()),
      E(),
      (vn = De()),
      G(),
      be(),
      Oe(),
      Ie(),
      W(),
      v(),
      Qe(),
      (Z = we()),
      fe(),
      (yn = s(() =>
        te(
          () => import(`./dictionary-dialog-2a8db9c7436a.js`).then((e) => e.DictionaryDialog),
          __vite__mapDeps([0, 1, 2, 3, 4, 5]),
          import.meta.url,
        ),
      )));
  }))();
}
function xn() {
  let e = (0, Cn.c)(19),
    n = _(d),
    r = M(),
    { data: i } = N(zt),
    [a, o] = (0, wn.useState)(null),
    [s, c] = w(),
    l;
  e[0] === s ? (l = e[1]) : ((l = s.get(`recording`)), (e[0] = s), (e[1] = l));
  let f = l,
    p;
  if (e[2] !== i?.items || e[3] !== r || e[4] !== a || e[5] !== n || e[6] !== s || e[7] !== f || e[8] !== c) {
    let l = f == null ? i?.items.slice(0, Tn) : i?.items.filter((e) => e.id === f),
      d;
    e[10] !== r || e[11] !== n
      ? ((d = (e, t) => {
          o({ action: t, id: e });
          let i;
          return (
            (i = t === `delete` ? qt(n, e) : t === `download` ? Kt(e) : Rt(n, e)),
            i
              .catch((e) => {
                (t === `transcribe` &&
                  n
                    .get(U)
                    .danger(Pe(r, `transcription`, e).message, {
                      errorAnalytics: { toastId: `voiceSettings.handleRecordingAction.transcription` },
                    }),
                  u.warning(`Failed to complete dictation history action`, {
                    safe: { action: t },
                    sensitive: { error: e },
                  }));
              })
              .finally(() => o(null))
          );
        }),
        (e[10] = r),
        (e[11] = n),
        (e[12] = d))
      : (d = e[12]);
    let m = d,
      h;
    e[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, Q.jsx)(g, {
          id: `settings.general.globalDictationHistory.emptyTitle`,
          defaultMessage: `Recent recordings`,
          description: `Heading for saved recent dictation recordings`,
        })),
        (e[13] = h))
      : (h = e[13]);
    let _;
    e[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, Q.jsx)(q, {
          label: h,
          description: (0, Q.jsx)(g, {
            id: `settings.general.globalDictationHistory.recoveryDescription`,
            defaultMessage: `Your last {count} recordings are saved on this device`,
            description: `Description explaining how many recent dictation recordings are saved locally`,
            values: { count: Tn },
          }),
          control: null,
        })),
        (e[14] = _))
      : (_ = e[14]);
    let v;
    (e[15] !== s || e[16] !== f || e[17] !== c
      ? ((v =
          f == null
            ? null
            : (0, Q.jsx)(t, {
                color: `ghost`,
                size: `compact`,
                onClick: () => {
                  let e = new URLSearchParams(s);
                  (e.delete(`recording`), c(e));
                },
                children: (0, Q.jsx)(g, {
                  id: `settings.voice.allRecordings`,
                  defaultMessage: `Show all recordings`,
                  description: `Returns from a recovered recording to the recent dictation recording list`,
                }),
              })),
        (e[15] = s),
        (e[16] = f),
        (e[17] = c),
        (e[18] = v))
      : (v = e[18]),
      (p = (0, Q.jsxs)(Q.Fragment, {
        children: [
          _,
          v,
          l?.map((e) =>
            (0, Q.jsx)(
              Sn,
              {
                selected: e.id === f,
                actionDisabled: a != null,
                isTranscribing: a?.id === e.id && a?.action === `transcribe`,
                item: e,
                timestamp: r.formatDate(e.createdAtMs, {
                  day: `numeric`,
                  hour: `numeric`,
                  minute: `2-digit`,
                  month: `short`,
                }),
                onDelete: () => {
                  m(e.id, `delete`);
                },
                onDownload: () => {
                  m(e.id, `download`);
                },
                onCopy: () => _e(e.text),
                onTranscribe: () => {
                  m(e.id, `transcribe`);
                },
              },
              e.id,
            ),
          ),
        ],
      })),
      (e[2] = i?.items),
      (e[3] = r),
      (e[4] = a),
      (e[5] = n),
      (e[6] = s),
      (e[7] = f),
      (e[8] = c),
      (e[9] = p));
  } else p = e[9];
  return p;
}
function Sn(e) {
  let n = (0, Cn.c)(61),
    {
      selected: r,
      actionDisabled: i,
      isTranscribing: a,
      item: o,
      onCopy: s,
      onDelete: c,
      onDownload: u,
      onTranscribe: d,
      timestamp: f,
    } = e,
    p = M(),
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { name: `dictation` }), (n[0] = m)) : (m = n[0]);
  let { isCapable: h } = ke(We, m),
    _;
  n[1] === p
    ? (_ = n[2])
    : ((_ = p.formatMessage({
        id: `settings.general.globalDictationHistory.copy`,
        defaultMessage: `Copy dictation`,
        description: `Tooltip and aria label for copying a dictation transcript`,
      })),
      (n[1] = p),
      (n[2] = _));
  let v = _,
    y;
  n[3] === p
    ? (y = n[4])
    : ((y = p.formatMessage({
        id: `settings.general.globalDictationHistory.retryTranscription`,
        defaultMessage: `Retry transcription`,
        description: `Tooltip and aria label for retrying transcription of a saved dictation recording`,
      })),
      (n[3] = p),
      (n[4] = y));
  let b = y,
    x;
  n[5] === p
    ? (x = n[6])
    : ((x = p.formatMessage({
        id: `settings.general.globalDictationHistory.actions`,
        defaultMessage: `Recording actions`,
        description: `Accessible label for the menu containing saved recording actions`,
      })),
      (n[5] = p),
      (n[6] = x));
  let S = x,
    C = r ? `block font-normal whitespace-pre-wrap select-text` : `block truncate font-normal`,
    w;
  n[7] !== o.status || n[8] !== o.text
    ? ((w =
        o.text.length > 0
          ? o.text
          : (0, Q.jsx)(g, {
              id: `settings.general.globalDictationHistory.audioOnly`,
              defaultMessage: `{status, select, recording {Recording in progress} cancelled {Recording cancelled} interrupted {Recording interrupted} other {Recording saved}}`,
              description: `Status shown for a saved dictation recording without a transcript`,
              values: { status: o.status },
            })),
      (n[7] = o.status),
      (n[8] = o.text),
      (n[9] = w))
    : (w = n[9]);
  let T;
  n[10] !== C || n[11] !== w
    ? ((T = (0, Q.jsx)(`span`, { className: C, children: w })), (n[10] = C), (n[11] = w), (n[12] = T))
    : (T = n[12]);
  let E;
  n[13] === o.createdAtMs
    ? (E = n[14])
    : ((E = new Date(o.createdAtMs).toISOString()), (n[13] = o.createdAtMs), (n[14] = E));
  let k;
  n[15] !== E || n[16] !== f
    ? ((k = (0, Q.jsx)(`time`, { dateTime: E, className: `tabular-nums`, children: f })),
      (n[15] = E),
      (n[16] = f),
      (n[17] = k))
    : (k = n[17]);
  let A;
  n[18] !== i || n[19] !== v || n[20] !== o.text.length || n[21] !== s
    ? ((A =
        o.text.length === 0
          ? null
          : (0, Q.jsx)(Ee, { ariaLabel: v, buttonText: v, iconOnly: !0, isDisabled: i, onCopy: s })),
      (n[18] = i),
      (n[19] = v),
      (n[20] = o.text.length),
      (n[21] = s),
      (n[22] = A))
    : (A = n[22]);
  let N;
  n[23] !== i ||
  n[24] !== h ||
  n[25] !== a ||
  n[26] !== o.sizeBytes ||
  n[27] !== o.status ||
  n[28] !== o.text.length ||
  n[29] !== d ||
  n[30] !== b
    ? ((N =
        !h || o.text.length > 0 || o.sizeBytes === 0 || o.status === `recording`
          ? null
          : (0, Q.jsx)(t, {
              "aria-label": b,
              color: `secondary`,
              disabled: i,
              loading: a,
              size: `compact`,
              onClick: d,
              children: (0, Q.jsx)(g, {
                id: `settings.general.globalDictationHistory.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries transcription of a saved dictation recording`,
              }),
            })),
      (n[23] = i),
      (n[24] = h),
      (n[25] = a),
      (n[26] = o.sizeBytes),
      (n[27] = o.status),
      (n[28] = o.text.length),
      (n[29] = d),
      (n[30] = b),
      (n[31] = N))
    : (N = n[31]);
  let P;
  n[32] !== i || n[33] !== o.sizeBytes || n[34] !== u || n[35] !== r
    ? ((P =
        r && o.sizeBytes > 0
          ? (0, Q.jsx)(t, {
              color: `secondary`,
              size: `compact`,
              disabled: i,
              onClick: u,
              children: (0, Q.jsx)(g, {
                id: `settings.voice.downloadRecovered`,
                defaultMessage: `Download audio`,
                description: `Downloads the specific recording opened from a dictation failure notice`,
              }),
            })
          : null),
      (n[32] = i),
      (n[33] = o.sizeBytes),
      (n[34] = u),
      (n[35] = r),
      (n[36] = P))
    : (P = n[36]);
  let F;
  n[37] !== i || n[38] !== S
    ? ((F = (0, Q.jsx)(O, { disabled: i, label: S })), (n[37] = i), (n[38] = S), (n[39] = F))
    : (F = n[39]);
  let I;
  n[40] !== o.sizeBytes || n[41] !== u
    ? ((I =
        o.sizeBytes === 0
          ? null
          : (0, Q.jsx)(j.Item, {
              leftIconAsset: de,
              onSelect: u,
              children: (0, Q.jsx)(g, {
                id: `settings.general.globalDictationHistory.download`,
                defaultMessage: `Download recording`,
                description: `Menu action that downloads a saved dictation recording`,
              }),
            })),
      (n[40] = o.sizeBytes),
      (n[41] = u),
      (n[42] = I))
    : (I = n[42]);
  let L = o.status === `recording`,
    R;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(g, {
        id: `settings.general.globalDictationHistory.delete`,
        defaultMessage: `Delete recording`,
        description: `Menu action that deletes a saved dictation recording`,
      })),
      (n[43] = R))
    : (R = n[43]);
  let z;
  n[44] !== c || n[45] !== L
    ? ((z = (0, Q.jsx)(j.Item, { leftIconAsset: D, disabled: L, onSelect: c, children: R })),
      (n[44] = c),
      (n[45] = L),
      (n[46] = z))
    : (z = n[46]);
  let B;
  n[47] !== i || n[48] !== F || n[49] !== I || n[50] !== z
    ? ((B = (0, Q.jsxs)(l, {
        align: `end`,
        contentWidth: `menu`,
        disabled: i,
        triggerButton: F,
        children: [I, z],
      })),
      (n[47] = i),
      (n[48] = F),
      (n[49] = I),
      (n[50] = z),
      (n[51] = B))
    : (B = n[51]);
  let V;
  n[52] !== A || n[53] !== N || n[54] !== P || n[55] !== B
    ? ((V = (0, Q.jsxs)(Q.Fragment, { children: [A, N, P, B] })),
      (n[52] = A),
      (n[53] = N),
      (n[54] = P),
      (n[55] = B),
      (n[56] = V))
    : (V = n[56]);
  let H;
  return (
    n[57] !== V || n[58] !== T || n[59] !== k
      ? ((H = (0, Q.jsx)(q, { size: `compact`, label: T, description: k, control: V })),
        (n[57] = V),
        (n[58] = T),
        (n[59] = k),
        (n[60] = H))
      : (H = n[60]),
    H
  );
}
var Cn, wn, Q, Tn;
function En() {
  return (En = e(() => {
    ((Cn = Se()),
      le(),
      R(),
      E(),
      (wn = De()),
      G(),
      B(),
      Le(),
      be(),
      H(),
      o(),
      i(),
      K(),
      Ce(),
      It(),
      W(),
      re(),
      Xe(),
      k(),
      (Q = we()),
      (Tn = 20));
  }))();
}
function Dn() {
  let e = (0, Hn.c)(20),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { name: `dictation.composer` }), (e[0] = t))
    : (t = e[0]);
  let { isCapable: n } = ke(We, t),
    r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { name: `dictation.global` }), (e[1] = r))
    : (r = e[1]);
  let { isCapable: i } = ke(We, r),
    a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { name: `voice.realtime` }), (e[2] = a))
    : (a = e[2]);
  let { isCapable: o } = ke(We, a),
    s = N(Ve),
    c = i || n || s != null,
    l;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(at, { slug: `voice` })), (e[3] = l))
    : (l = e[3]);
  let u;
  e[4] !== c || e[5] !== o
    ? ((u =
        o || c
          ? (0, $.jsxs)(J, {
              children: [
                (0, $.jsx)(J.Header, {
                  title: (0, $.jsx)(g, {
                    id: `settings.voice.general`,
                    defaultMessage: `General`,
                    description: `Heading for general voice settings`,
                  }),
                }),
                (0, $.jsx)(J.Content, {
                  children: (0, $.jsxs)(pe, {
                    children: [(0, $.jsx)(On, {}), c ? (0, $.jsx)(dn, {}) : null],
                  }),
                }),
              ],
            })
          : null),
      (e[4] = c),
      (e[5] = o),
      (e[6] = u))
    : (u = e[6]);
  let d;
  e[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, $.jsx)(nn, {})), (e[7] = d)) : (d = e[7]);
  let f;
  e[8] === c ? (f = e[9]) : ((f = (0, $.jsx)(Nn, { isDictationEnabled: c })), (e[8] = c), (e[9] = f));
  let p;
  e[10] !== u || e[11] !== f
    ? ((p = (0, $.jsxs)($.Fragment, { children: [u, d, f] })), (e[10] = u), (e[11] = f), (e[12] = p))
    : (p = e[12]);
  let m;
  e[13] === i ? (m = e[14]) : ((m = i ? (0, $.jsx)(Fn, {}) : null), (e[13] = i), (e[14] = m));
  let h;
  e[15] === m
    ? (h = e[16])
    : ((h = (0, $.jsx)(hn, { fallback: (0, $.jsx)($.Fragment, { children: m }) })), (e[15] = m), (e[16] = h));
  let _;
  return (
    e[17] !== p || e[18] !== h
      ? ((_ = (0, $.jsxs)(ft, { title: l, children: [p, h] })), (e[17] = p), (e[18] = h), (e[19] = _))
      : (_ = e[19]),
    _
  );
}
function On() {
  let e = (0, Hn.c)(61),
    t = _(d),
    n = M(),
    i = r(h.microphoneInputDeviceId),
    a = typeof navigator < `u` && navigator.mediaDevices?.enumerateDevices != null,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { enabled: a, queryFn: Mn, queryKey: qn, staleTime: T.FIVE_SECONDS }), (e[0] = o))
    : (o = e[0]);
  let s = I(o),
    c,
    u,
    f;
  if (e[1] !== s.data || e[2] !== n || e[3] !== i) {
    c = s.data ?? [];
    let t;
    (e[7] === n
      ? (t = e[8])
      : ((t = n.formatMessage({
          id: `settings.general.microphoneInput.systemDefault`,
          defaultMessage: `System default`,
          description: `Default microphone input option label`,
        })),
        (e[7] = n),
        (e[8] = t)),
      (f = t));
    let r;
    e[9] === i ? (r = e[10]) : ((r = (e) => e.deviceId === i), (e[9] = i), (e[10] = r));
    let a = c.findIndex(r),
      o = c[a];
    if (i == null) u = f;
    else if (c.length === 0) {
      let t;
      (e[11] === n
        ? (t = e[12])
        : ((t = n.formatMessage({
            id: `settings.general.microphoneInput.selected`,
            defaultMessage: `Selected microphone`,
            description: `Microphone input label shown before the selected device name has loaded`,
          })),
          (e[11] = n),
          (e[12] = t)),
        (u = t));
    } else if (o == null) {
      let t;
      (e[13] === n
        ? (t = e[14])
        : ((t = n.formatMessage({
            id: `settings.general.microphoneInput.unavailable`,
            defaultMessage: `Unavailable microphone`,
            description: `Selected microphone input label when the device is no longer available`,
          })),
          (e[13] = n),
          (e[14] = t)),
        (u = t));
    } else u = jn(n, o, a);
    ((e[1] = s.data), (e[2] = n), (e[3] = i), (e[4] = c), (e[5] = u), (e[6] = f));
  } else ((c = e[4]), (u = e[5]), (f = e[6]));
  let p;
  e[15] === s
    ? (p = e[16])
    : ((p = async function () {
        await b.systemPermissions?.requestMicrophoneAccess();
        let e = await navigator.mediaDevices.getUserMedia({ audio: !0 }).catch(An);
        await s.refetch().finally(() => {
          e?.getTracks().forEach(kn);
        });
      }),
      (e[15] = s),
      (e[16] = p));
  let m = p,
    v;
  e[17] !== n || e[18] !== t
    ? ((v = function (e) {
        he(t, h.microphoneInputDeviceId, e).catch(() => {
          t.get(U).danger(
            n.formatMessage({
              id: `settings.general.microphoneInput.saveError`,
              defaultMessage: `Could not save microphone selection`,
              description: `Error toast when the selected microphone cannot be saved`,
            }),
            { errorAnalytics: { toastId: `voiceSettings.microphoneInput.saveError` } },
          );
        });
      }),
      (e[17] = n),
      (e[18] = t),
      (e[19] = v))
    : (v = e[19]);
  let y = v,
    x,
    S;
  e[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(g, {
        id: `settings.general.microphoneInput.label`,
        defaultMessage: `Microphone`,
        description: `Label for microphone input selection setting`,
      })),
      (S = a
        ? (0, $.jsx)(g, {
            id: `settings.general.microphoneInput.description`,
            defaultMessage: `Used for voice chat and dictation`,
            description: `Description for microphone input selection setting`,
          })
        : (0, $.jsx)(g, {
            id: `settings.general.microphoneInput.unsupported`,
            defaultMessage: `Microphone selection is not available on this device`,
            description: `Description shown when microphone selection is unsupported`,
          })),
      (e[20] = x),
      (e[21] = S))
    : ((x = e[20]), (S = e[21]));
  let C;
  e[22] === m
    ? (C = e[23])
    : ((C = (e) => {
        e && m();
      }),
      (e[22] = m),
      (e[23] = C));
  let w;
  e[24] === u
    ? (w = e[25])
    : ((w = (0, $.jsx)(Ge, {
        disabled: !a,
        children: (0, $.jsx)(`span`, { className: `truncate`, children: u }),
      })),
      (e[24] = u),
      (e[25] = w));
  let E = i == null ? Te : void 0,
    D;
  e[26] === y
    ? (D = e[27])
    : ((D = () => {
        y(null);
      }),
      (e[26] = y),
      (e[27] = D));
  let O;
  e[28] !== f || e[29] !== E || e[30] !== D
    ? ((O = (0, $.jsx)(j.Item, { rightIconAsset: E, onSelect: D, children: f })),
      (e[28] = f),
      (e[29] = E),
      (e[30] = D),
      (e[31] = O))
    : (O = e[31]);
  let k;
  e[32] === c.length
    ? (k = e[33])
    : ((k = c.length > 0 ? (0, $.jsx)(j.Separator, {}) : null), (e[32] = c.length), (e[33] = k));
  let A;
  if (e[34] !== c || e[35] !== n || e[36] !== y || e[37] !== i) {
    let t;
    (e[39] !== n || e[40] !== y || e[41] !== i
      ? ((t = (e, t) => {
          let r = jn(n, e, t);
          return (0, $.jsx)(
            j.Item,
            {
              rightIconAsset: e.deviceId === i ? Te : void 0,
              onSelect: () => {
                y(e.deviceId);
              },
              children: r,
            },
            e.deviceId,
          );
        }),
        (e[39] = n),
        (e[40] = y),
        (e[41] = i),
        (e[42] = t))
      : (t = e[42]),
      (A = c.map(t)),
      (e[34] = c),
      (e[35] = n),
      (e[36] = y),
      (e[37] = i),
      (e[38] = A));
  } else A = e[38];
  let N;
  e[43] === s.isFetching
    ? (N = e[44])
    : ((N = s.isFetching
        ? (0, $.jsx)(j.Message, {
            compact: !0,
            children: (0, $.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                (0, $.jsx)(ge, { className: `size-3` }),
                (0, $.jsx)(g, {
                  id: `settings.general.microphoneInput.loading`,
                  defaultMessage: `Loading microphones`,
                  description: `Message shown while microphone inputs load`,
                }),
              ],
            }),
          })
        : null),
      (e[43] = s.isFetching),
      (e[44] = N));
  let P;
  e[45] !== s.isError || e[46] !== s.isFetching
    ? ((P =
        !s.isFetching && s.isError
          ? (0, $.jsx)(j.Message, {
              tone: `error`,
              children: (0, $.jsx)(g, {
                id: `settings.general.microphoneInput.loadError`,
                defaultMessage: `Unable to load microphones`,
                description: `Message shown when microphone input devices cannot be loaded`,
              }),
            })
          : null),
      (e[45] = s.isError),
      (e[46] = s.isFetching),
      (e[47] = P))
    : (P = e[47]);
  let F;
  e[48] !== c.length || e[49] !== s.isError || e[50] !== s.isFetching
    ? ((F =
        !s.isFetching && !s.isError && c.length === 0
          ? (0, $.jsx)(j.Message, {
              children: (0, $.jsx)(g, {
                id: `settings.general.microphoneInput.empty`,
                defaultMessage: `No microphones found`,
                description: `Message shown when no microphone inputs are available`,
              }),
            })
          : null),
      (e[48] = c.length),
      (e[49] = s.isError),
      (e[50] = s.isFetching),
      (e[51] = F))
    : (F = e[51]);
  let L;
  return (
    e[52] !== k ||
    e[53] !== A ||
    e[54] !== N ||
    e[55] !== P ||
    e[56] !== F ||
    e[57] !== C ||
    e[58] !== w ||
    e[59] !== O
      ? ((L = (0, $.jsx)(q, {
          label: x,
          description: S,
          control: (0, $.jsxs)(l, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: !a,
            onOpenChange: C,
            triggerButton: w,
            children: [O, k, A, N, P, F],
          }),
        })),
        (e[52] = k),
        (e[53] = A),
        (e[54] = N),
        (e[55] = P),
        (e[56] = F),
        (e[57] = C),
        (e[58] = w),
        (e[59] = O),
        (e[60] = L))
      : (L = e[60]),
    L
  );
}
function kn(e) {
  return e.stop();
}
function An() {
  return null;
}
function jn(e, t, n) {
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
async function Mn() {
  if (typeof navigator > `u`) return [];
  let e = navigator.mediaDevices;
  return e?.enumerateDevices == null
    ? []
    : (await e.enumerateDevices()).filter(
        (e) => e.kind === `audioinput` && e.deviceId.length > 0 && e.deviceId !== "default",
      );
}
function Nn(e) {
  let t = (0, Hn.c)(16),
    { isDictationEnabled: n } = e,
    r = N(Ve),
    { data: i } = N(zt),
    a = _t(Me),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(J.Header, {
        title: (0, $.jsx)(g, {
          id: `settings.general.dictation`,
          defaultMessage: `Dictation`,
          description: `Heading for global dictation settings group`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === n
    ? (s = t[2])
    : ((s = n
        ? null
        : (0, $.jsx)(pe, {
            children: (0, $.jsx)(q, {
              label: (0, $.jsx)(g, {
                id: `settings.voice.dictation.unavailable.label`,
                defaultMessage: `Dictation unavailable`,
                description: `Label shown instead of dictation controls when dictation is unavailable`,
              }),
              description: (0, $.jsx)(g, {
                id: `settings.voice.dictation.unavailable.description`,
                defaultMessage: `Dictation is not available in your current configuration`,
                description: `Explanation shown when the current account, workspace policy, or device does not support dictation`,
              }),
              control: null,
            }),
          })),
      (t[1] = n),
      (t[2] = s));
  let c;
  t[3] !== n || t[4] !== a
    ? ((c = n && a ? (0, $.jsx)(pe, { children: (0, $.jsx)(Pn, {}) }) : null),
      (t[3] = n),
      (t[4] = a),
      (t[5] = c))
    : (c = t[5]);
  let l;
  t[6] === r
    ? (l = t[7])
    : ((l = r == null ? null : (0, $.jsx)(pe, { children: (0, $.jsx)(Vn, { mode: `hold` }) })),
      (t[6] = r),
      (t[7] = l));
  let u;
  t[8] !== i || t[9] !== n
    ? ((u = n || (i != null && i.items.length > 0) ? (0, $.jsx)(pe, { children: (0, $.jsx)(xn, {}) }) : null),
      (t[8] = i),
      (t[9] = n),
      (t[10] = u))
    : (u = t[10]);
  let d;
  return (
    t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== u
      ? ((d = (0, $.jsxs)(J, { children: [o, (0, $.jsxs)(J.Content, { children: [s, c, l, u] })] })),
        (t[11] = s),
        (t[12] = c),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function Pn() {
  let e = (0, Hn.c)(10),
    t = _(d),
    n = M(),
    i = r(h.dictationSoundsEnabled),
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(g, {
        id: `settings.voice.dictationSounds.label`,
        defaultMessage: `Dictation sounds`,
        description: `Label for the setting that controls sounds when dictation starts and stops`,
      })),
      (o = (0, $.jsx)(g, {
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
        void he(t, h.dictationSoundsEnabled, e).catch(() => {
          t.get(U).danger(
            (0, $.jsx)(g, {
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
      ? ((l = (0, $.jsx)(q, {
          label: a,
          description: o,
          control: (0, $.jsx)(ae, { checked: i, onChange: s, ariaLabel: c }),
        })),
        (e[6] = i),
        (e[7] = s),
        (e[8] = c),
        (e[9] = l))
      : (l = e[9]),
    l
  );
}
function Fn() {
  let e = (0, Hn.c)(1),
    { data: t } = N(Lt);
  if (!Gt(t)) return null;
  let n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(J, {
          children: (0, $.jsx)(J.Content, { children: (0, $.jsx)(pe, { children: (0, $.jsx)(In, {}) }) }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function In() {
  let e = (0, Hn.c)(17),
    n = _(d),
    i = M(),
    a = r(h.dictationDictionary),
    [o, s] = (0, Un.useState)(null),
    c = (0, Un.useRef)(!1),
    l = o ?? a,
    u = l != null && l.length > 0 ? l : Gn,
    f;
  e[0] === n
    ? (f = e[1])
    : ((f = async function (e) {
        let t = e.map(Bn).filter(zn);
        (await he(n, h.dictationDictionary, t), s(null));
      }),
      (e[0] = n),
      (e[1] = f));
  let m = f,
    v,
    y;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(g, {
        id: `settings.general.dictationDictionary.label`,
        defaultMessage: `Dictation dictionary`,
        description: `Label for dictation cleanup dictionary setting`,
      })),
      (y = (0, $.jsx)(g, {
        id: `settings.general.dictationDictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description for dictation cleanup dictionary setting`,
      })),
      (e[2] = v),
      (e[3] = y))
    : ((v = e[2]), (y = e[3]));
  let b;
  e[4] === u
    ? (b = e[5])
    : ((b = () => {
        (s([...u, Wn]),
          requestAnimationFrame(() => {
            document.querySelector(`[data-dictation-dictionary-entry-index="${u.length}"]`)?.focus();
          }));
      }),
      (e[4] = u),
      (e[5] = b));
  let x, S;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(p, { "aria-hidden": !1, legacyIcon: gt, asset16: ee, legacyClassName: `icon-2xs` })),
      (S = (0, $.jsx)(g, {
        id: `settings.general.dictationDictionary.addEntry`,
        defaultMessage: `Add entry`,
        description: `Button label for adding one dictation dictionary entry`,
      })),
      (e[6] = x),
      (e[7] = S))
    : ((x = e[6]), (S = e[7]));
  let C;
  e[8] === b
    ? (C = e[9])
    : ((C = (0, $.jsx)(q, {
        label: v,
        description: y,
        control: (0, $.jsxs)(t, {
          type: `button`,
          color: `secondary`,
          size: `toolbar`,
          onMouseDown: Rn,
          onClick: b,
          children: [x, S],
        }),
      })),
      (e[8] = b),
      (e[9] = C));
  let w;
  e[10] !== i || e[11] !== m || e[12] !== u
    ? ((w = u.map((e, n) =>
        (0, $.jsx)(
          q,
          {
            variant: `nested`,
            label: null,
            control: (0, $.jsxs)(`div`, {
              className: `flex w-full items-center gap-2`,
              children: [
                (0, $.jsx)(qe, {
                  "data-dictation-dictionary-entry-index": n,
                  "aria-label": i.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.entryLabel`,
                      defaultMessage: `Dictionary entry {index}`,
                      description: `Aria label for one dictation dictionary entry`,
                    },
                    { index: n + 1 },
                  ),
                  placeholder: Kn[n] ?? Kn[0] ?? ``,
                  value: e,
                  onChange: (e) => {
                    let t = [...u];
                    ((t[n] = e.currentTarget.value), s(t));
                  },
                  onBlur: () => {
                    if (c.current) {
                      c.current = !1;
                      return;
                    }
                    m(u);
                  },
                  onKeyDown: (e) => {
                    if (e.key !== `Enter`) return;
                    e.preventDefault();
                    let t = [...u.slice(0, n + 1), Wn, ...u.slice(n + 1)];
                    ((c.current = !0),
                      s(t),
                      requestAnimationFrame(() => {
                        document.querySelector(`[data-dictation-dictionary-entry-index="${n + 1}"]`)?.focus();
                      }));
                  },
                }),
                (0, $.jsx)(t, {
                  type: `button`,
                  color: `ghost`,
                  size: `icon`,
                  "aria-label": i.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.removeEntry`,
                      defaultMessage: `Remove dictionary entry {index}`,
                      description: `Button label for removing one dictation dictionary entry`,
                    },
                    { index: n + 1 },
                  ),
                  disabled: u.length === 1 && e.length === 0,
                  onMouseDown: Ln,
                  onClick: () => {
                    m(u.filter((e, t) => t !== n));
                  },
                  children: (0, $.jsx)(Vt, { className: `icon-2xs` }),
                }),
              ],
            }),
          },
          n,
        ),
      )),
      (e[10] = i),
      (e[11] = m),
      (e[12] = u),
      (e[13] = w))
    : (w = e[13]);
  let T;
  return (
    e[14] !== C || e[15] !== w
      ? ((T = (0, $.jsxs)($.Fragment, { children: [C, w] })), (e[14] = C), (e[15] = w), (e[16] = T))
      : (T = e[16]),
    T
  );
}
function Ln(e) {
  e.preventDefault();
}
function Rn(e) {
  e.preventDefault();
}
function zn(e) {
  return e.length > 0;
}
function Bn(e) {
  return e.trim();
}
function Vn(e) {
  let n = (0, Hn.c)(64),
    { mode: r } = e,
    i = _(d),
    a = N(Ve),
    o = N(yt),
    s = r === `toggle`,
    l = s ? `globalDictationSingleTap` : `globalDictationHold`,
    u = ke(nt, l),
    [f, p] = (0, Un.useState)(!1),
    m = (0, Un.useId)(),
    h = M(),
    v = ue(),
    y = Be(),
    [b, x] = (0, Un.useState)(!1),
    [S, w] = (0, Un.useState)(null),
    T;
  n[0] !== y || n[1] !== v
    ? ((T = {
        onSuccess: (e) => {
          let t = ie(`codex-command-keymap-state`);
          (v.setQueryData(t, e), y(t));
        },
      }),
      (n[0] = y),
      (n[1] = v),
      (n[2] = T))
    : (T = n[2]);
  let E = ce(`set-codex-command-keybinding`, T),
    D;
  n[3] !== y || n[4] !== v
    ? ((D = {
        onSuccess: (e) => {
          let t = ie(`global-dictation-hotkey-state`);
          (v.setQueryData(t, e.state), Promise.all([y(t), y(ie(`codex-command-keymap-state`))]));
        },
      }),
      (n[3] = y),
      (n[4] = v),
      (n[5] = D))
    : (D = n[5]);
  let O = ce(r === `hold` ? `global-dictation-set-hotkey` : `global-dictation-set-toggle-hotkey`, D),
    k;
  n[6] !== l || n[7] !== h || n[8] !== s || n[9] !== i || n[10] !== E || n[11] !== O || n[12] !== a
    ? ((k = async function (e) {
        w(null);
        try {
          if (a === `os-global`) {
            let t = await O.mutateAsync({ hotkey: e });
            t.success ||
              w(t.errorCode === `shortcut-conflict` ? h.formatMessage(Jn.shortcutConflict) : t.error);
            return;
          }
          let t = i.get(nt, s ? `globalDictationHold` : `globalDictationSingleTap`),
            n = i.get(pt) === `macOS`;
          if (e != null && t != null && Je(e, n) === Je(t, n)) {
            w(h.formatMessage(Jn.shortcutConflict));
            return;
          }
          await E.mutateAsync({
            commandId: l,
            update: e == null ? { type: `clear` } : { type: `set`, accelerator: e },
          });
        } catch (e) {
          let t = e;
          if (t instanceof Error) {
            w(t.message);
            return;
          }
          if (s) {
            w(
              h.formatMessage({
                id: `settings.general.globalDictationToggleHotkey.errorGeneric`,
                defaultMessage: `Failed to update single-tap dictation shortcut`,
                description: `Fallback error shown when single-tap dictation shortcut update fails`,
              }),
            );
            return;
          }
          w(
            h.formatMessage({
              id: `settings.general.globalDictationHotkey.errorGeneric`,
              defaultMessage: `Failed to update dictation shortcut`,
              description: `Fallback error shown when dictation shortcut update fails`,
            }),
          );
        }
      }),
      (n[6] = l),
      (n[7] = h),
      (n[8] = s),
      (n[9] = i),
      (n[10] = E),
      (n[11] = O),
      (n[12] = a),
      (n[13] = k))
    : (k = n[13]);
  let A = k,
    j;
  n[14] === u ? (j = n[15]) : ((j = u == null ? null : F(u)), (n[14] = u), (n[15] = j));
  let P = j,
    I;
  n[16] !== h || n[17] !== s
    ? ((I = s ? h.formatMessage(Jn.toggleDictationHotkey) : h.formatMessage(Jn.holdToDictateHotkey)),
      (n[16] = h),
      (n[17] = s),
      (n[18] = I))
    : (I = n[18]);
  let L = I,
    R;
  n[19] !== h || n[20] !== s
    ? ((R = s
        ? h.formatMessage({
            id: `settings.general.globalDictationToggleHotkey.captureAriaLabel`,
            defaultMessage: `Single-tap shortcut capture`,
            description: `Aria label for single-tap dictation shortcut capture input`,
          })
        : h.formatMessage({
            id: `settings.general.globalDictationHotkey.captureAriaLabel`,
            defaultMessage: `Dictation shortcut capture`,
            description: `Aria label for dictation shortcut capture input`,
          })),
      (n[19] = h),
      (n[20] = s),
      (n[21] = R))
    : (R = n[21]);
  let z = R,
    B = s ? void 0 : Wt,
    V;
  n[22] === s
    ? (V = n[23])
    : ((V = s
        ? (0, $.jsx)(g, { ...Jn.toggleDictationHotkey })
        : (0, $.jsx)(g, { ...Jn.holdToDictateHotkey })),
      (n[22] = s),
      (n[23] = V));
  let H;
  n[24] === s
    ? (H = n[25])
    : ((H = s
        ? (0, $.jsx)(g, {
            id: `settings.general.globalDictationToggleHotkey.description`,
            defaultMessage: `Press once to start, and again to finish`,
            description: `Description for single-tap dictation shortcut setting`,
          })
        : (0, $.jsx)(g, {
            id: `settings.general.globalDictationHotkey.description`,
            defaultMessage: `Hold to dictate, or double-tap for hands-free`,
            description: `Description for dictation shortcut setting`,
          })),
      (n[24] = s),
      (n[25] = H));
  let ee;
  n[26] !== m || n[27] !== f || n[28] !== s
    ? ((ee = s
        ? null
        : (0, $.jsx)(`span`, {
            children: (0, $.jsxs)(t, {
              "aria-controls": m,
              "aria-expanded": f,
              color: `ghostTertiary`,
              radius: `small`,
              size: `inline`,
              onClick: () => p(!f),
              children: [
                (0, $.jsx)(g, {
                  id: `settings.voice.dictation.advanced`,
                  defaultMessage: `Advanced`,
                  description: `Button that expands the optional single-tap dictation shortcut`,
                }),
                f ? (0, $.jsx)(C, {}) : (0, $.jsx)(c, {}),
              ],
            }),
          })),
      (n[26] = m),
      (n[27] = f),
      (n[28] = s),
      (n[29] = ee))
    : (ee = n[29]);
  let te;
  n[30] === S
    ? (te = n[31])
    : ((te = S ? (0, $.jsx)(`span`, { className: `text-danger`, children: S }) : null),
      (n[30] = S),
      (n[31] = te));
  let U;
  n[32] !== ee || n[33] !== te || n[34] !== H
    ? ((U = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [H, ee, te] })),
      (n[32] = ee),
      (n[33] = te),
      (n[34] = H),
      (n[35] = U))
    : (U = n[35]);
  let ne = a === `os-global`,
    re = E.isPending || O.isPending || o?.supported !== !0,
    W;
  n[36] === h
    ? (W = n[37])
    : ((W = h.formatMessage({
        id: `settings.general.globalDictationHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when global dictation hotkey is disabled`,
      })),
      (n[36] = h),
      (n[37] = W));
  let G;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = () => {
        x(!1);
      }),
      (n[38] = G))
    : (G = n[38]);
  let ae, oe;
  n[39] === A
    ? ((ae = n[40]), (oe = n[41]))
    : ((ae = (e) => {
        (x(!1), A(e));
      }),
      (oe = () => {
        A(null);
      }),
      (n[39] = A),
      (n[40] = ae),
      (n[41] = oe));
  let se;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = () => {
        (w(null), x(!0));
      }),
      (n[42] = se))
    : (se = n[42]);
  let K;
  n[43] !== P ||
  n[44] !== z ||
  n[45] !== u ||
  n[46] !== L ||
  n[47] !== b ||
  n[48] !== ne ||
  n[49] !== re ||
  n[50] !== W ||
  n[51] !== ae ||
  n[52] !== oe
    ? ((K = (0, $.jsx)(Ut, {
        accelerator: u,
        acceleratorLabel: P,
        allowsBareModifiers: ne,
        captureAriaLabel: z,
        disabled: re,
        emptyLabel: W,
        hotkeyName: L,
        isCapturing: b,
        onCancelCapture: G,
        onCapture: ae,
        onClear: oe,
        onStartCapture: se,
      })),
      (n[43] = P),
      (n[44] = z),
      (n[45] = u),
      (n[46] = L),
      (n[47] = b),
      (n[48] = ne),
      (n[49] = re),
      (n[50] = W),
      (n[51] = ae),
      (n[52] = oe),
      (n[53] = K))
    : (K = n[53]);
  let le;
  n[54] !== U || n[55] !== K || n[56] !== B || n[57] !== V
    ? ((le = (0, $.jsx)(q, { id: B, label: V, description: U, control: K })),
      (n[54] = U),
      (n[55] = K),
      (n[56] = B),
      (n[57] = V),
      (n[58] = le))
    : (le = n[58]);
  let de = le,
    fe;
  return (
    n[59] !== m || n[60] !== f || n[61] !== s || n[62] !== de
      ? ((fe = s
          ? de
          : (0, $.jsx)($t, {
              content: (0, $.jsx)(Vn, { mode: `toggle` }),
              contentId: m,
              expanded: f,
              children: de,
            })),
        (n[59] = m),
        (n[60] = f),
        (n[61] = s),
        (n[62] = de),
        (n[63] = fe))
      : (fe = n[63]),
    fe
  );
}
var Hn, Un, $, Wn, Gn, Kn, qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((Hn = Se()),
      V(),
      n(),
      L(),
      xe(),
      Nt(),
      E(),
      ve(),
      (Un = De()),
      G(),
      Le(),
      ut(),
      be(),
      o(),
      A(),
      ne(),
      se(),
      Fe(),
      K(),
      x(),
      Ue(),
      wt(),
      dt(),
      Ht(),
      z(),
      Ne(),
      un(),
      mn(),
      me(),
      Ce(),
      bn(),
      It(),
      Bt(),
      P(),
      et(),
      En(),
      Ie(),
      W(),
      Qt(),
      Ot(),
      v(),
      ze(),
      it(),
      m(),
      ye(),
      ($ = we()),
      (Wn = ``),
      (Gn = [Wn]),
      (Kn = [`Jane Doe`, `Acme Widget`, `checkout-form.tsx`, `useCartState`]),
      (qn = [`microphone-input-devices`]),
      (Jn = a({
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
Yn();
export { Dn as VoiceSettings };
//# sourceMappingURL=voice-settings-70bb1f84fad8.js.map
