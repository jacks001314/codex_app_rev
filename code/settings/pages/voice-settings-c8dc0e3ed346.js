import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $ as n,
  $G as r,
  A3t as i,
  AMt as a,
  Amn as o,
  B6t as s,
  BS as c,
  Byt as l,
  CW as u,
  Cpn as d,
  D3t as f,
  Dmn as p,
  EJt as m,
  F3t as h,
  FH as g,
  Hu as _,
  IH as v,
  JG as y,
  JI as b,
  JK as x,
  JS as S,
  Jit as C,
  Jrt as w,
  KG as T,
  Kit as E,
  M3t as D,
  MMt as O,
  N3t as k,
  NDt as A,
  O3t as j,
  O8t as M,
  OJt as N,
  OW as P,
  Omn as F,
  Opn as I,
  Ot as L,
  Q as R,
  QG as z,
  QKt as ee,
  QV as te,
  Qu as ne,
  RS as re,
  S3t as ie,
  Spn as ae,
  TJt as oe,
  TQ as se,
  TW as ce,
  U as le,
  VS as ue,
  Vu as B,
  W as de,
  WI as fe,
  XI as pe,
  XS as me,
  Xa as he,
  Xrt as ge,
  Xu as _e,
  YKt as V,
  Ya as ve,
  Yrt as ye,
  ZG as be,
  ZV as xe,
  Za as Se,
  Zrt as Ce,
  Zu as H,
  _Jt as we,
  a3t as U,
  b8t as Te,
  bK as Ee,
  do as De,
  eit as Oe,
  fDt as ke,
  fKt as Ae,
  fo as je,
  hmn as Me,
  hz as Ne,
  iit as Pe,
  jDt as Fe,
  jMt as Ie,
  jXt as Le,
  kMt as W,
  kW as Re,
  kXt as ze,
  kmn as Be,
  kt as Ve,
  m1 as He,
  mJt as Ue,
  mR as We,
  mz as Ge,
  nH as Ke,
  o3t as qe,
  p1 as Je,
  pR as Ye,
  po as Xe,
  qK as Ze,
  qKt as Qe,
  qu as G,
  rit as $e,
  s3t as et,
  tH as tt,
  tit as nt,
  uDt as rt,
  uKt as it,
  uo as at,
  wJt as ot,
  wQ as st,
  x8t as ct,
  xK as lt,
  xpn as ut,
  y8t as dt,
  yJt as ft,
  zyt as pt,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as mt,
  Co as ht,
  Eo as gt,
  Gw as _t,
  Kw as vt,
  So as yt,
  To as bt,
  bo as xt,
  go as St,
  ho as Ct,
  wo as wt,
  xo as Tt,
  yo as Et,
  zw as Dt,
} from "./app-primary-4c40d73a1074.js";
function Ot(e) {
  let t = (0, kt.c)(45),
    {
      initialVoice: n,
      onOpenChange: r,
      onSave: i,
      open: a,
      previewEnabled: o,
      triggerContent: s,
      voices: c,
    } = e,
    l = o === void 0 || o,
    u = I(),
    [f, p] = (0, K.useState)(n.slug),
    [m, h] = (0, K.useState)(!1),
    [g, _] = (0, K.useState)(null),
    v;
  t[0] !== u || t[1] !== r || t[2] !== i || t[3] !== f
    ? ((v = async () => {
        (h(!0),
          _(null),
          await (async () => {
            try {
              (await i(f), r(!1));
            } catch {
              _(
                u.formatMessage({
                  id: `settings.general.realtimeVoice.saveError`,
                  defaultMessage: `Unable to save voice`,
                  description: `Error shown when saving the realtime voice fails`,
                }),
              );
            }
          })().finally(() => {
            h(!1);
          }));
      }),
      (t[0] = u),
      (t[1] = r),
      (t[2] = i),
      (t[3] = f),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    b;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { "aria-describedby": void 0 }), (t[5] = b))
    : (b = t[5]);
  let x;
  t[6] === u
    ? (x = t[7])
    : ((x = u.formatMessage({
        id: `settings.general.realtimeVoice.dialog.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the voice picker dialog`,
      })),
      (t[6] = u),
      (t[7] = x));
  let S;
  t[8] !== n.slug || t[9] !== r
    ? ((S = (e) => {
        (e && p(n.slug), _(null), r(e));
      }),
      (t[8] = n.slug),
      (t[9] = r),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] === y
    ? (C = t[12])
    : ((C = (e) => {
        (e.preventDefault(), y());
      }),
      (t[11] = y),
      (t[12] = C));
  let T;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, q.jsx)(ge, {
        className: `pe-8`,
        title: (0, q.jsx)($e, {
          children: (0, q.jsx)(d, {
            id: `settings.general.realtimeVoice.dialog.title`,
            defaultMessage: `Choose a voice`,
            description: `Title of the realtime voice picker dialog`,
          }),
        }),
      })),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== n || t[15] !== l || t[16] !== c
    ? ((E = (0, q.jsx)(le, { initialVoice: n, previewEnabled: l, voices: c, onVoiceChange: p })),
      (t[14] = n),
      (t[15] = l),
      (t[16] = c),
      (t[17] = E))
    : (E = t[17]);
  let D;
  t[18] === g
    ? (D = t[19])
    : ((D =
        g == null
          ? null
          : (0, q.jsx)(`p`, {
              role: `alert`,
              className: `mt-2 text-center text-sm text-danger`,
              children: g,
            })),
      (t[18] = g),
      (t[19] = D));
  let O;
  t[20] !== E || t[21] !== D
    ? ((O = (0, q.jsxs)(Ce, { children: [T, E, D] })), (t[20] = E), (t[21] = D), (t[22] = O))
    : (O = t[22]);
  let k;
  t[23] === r ? (k = t[24]) : ((k = () => r(!1)), (t[23] = r), (t[24] = k));
  let A;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, q.jsx)(d, {
        id: `settings.general.realtimeVoice.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel changing the realtime voice`,
      })),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] !== m || t[27] !== k
    ? ((j = (0, q.jsx)(W, {
        color: `secondary`,
        disabled: m,
        type: `button`,
        onClick: k,
        children: A,
      })),
      (t[26] = m),
      (t[27] = k),
      (t[28] = j))
    : (j = t[28]);
  let M;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, q.jsx)(d, {
        id: `settings.general.realtimeVoice.dialog.done`,
        defaultMessage: `Done`,
        description: `Button to save the selected realtime voice`,
      })),
      (t[29] = M))
    : (M = t[29]);
  let N;
  t[30] === m
    ? (N = t[31])
    : ((N = (0, q.jsx)(W, { color: `primary`, loading: m, type: `submit`, children: M })),
      (t[30] = m),
      (t[31] = N));
  let P;
  t[32] !== j || t[33] !== N
    ? ((P = (0, q.jsxs)(ye, { className: `mt-5`, children: [j, N] })),
      (t[32] = j),
      (t[33] = N),
      (t[34] = P))
    : (P = t[34]);
  let F;
  t[35] !== O || t[36] !== P || t[37] !== C
    ? ((F = (0, q.jsxs)(w, { as: `form`, onSubmit: C, children: [O, P] })),
      (t[35] = O),
      (t[36] = P),
      (t[37] = C),
      (t[38] = F))
    : (F = t[38]);
  let L;
  return (
    t[39] !== a || t[40] !== F || t[41] !== x || t[42] !== S || t[43] !== s
      ? ((L = (0, q.jsx)(nt, {
          open: a,
          contentProps: b,
          dialogCloseLabel: x,
          triggerContent: s,
          onOpenChange: S,
          size: `default`,
          children: F,
        })),
        (t[39] = a),
        (t[40] = F),
        (t[41] = x),
        (t[42] = S),
        (t[43] = s),
        (t[44] = L))
      : (L = t[44]),
    L
  );
}
var kt,
  K,
  q,
  At = e(() => {
    ((kt = Be()), (K = t(o(), 1)), ae(), a(), Pe(), Oe(), de(), (q = Me()));
  });
function jt() {
  let e = (0, J.c)(30),
    t = i(U),
    n = Xe(),
    r = De(),
    { platform: a } = l(),
    { hostId: o } = se(),
    s = k(A, o),
    c = h(ke),
    u;
  e[0] !== o || e[1] !== r
    ? ((u = { enabled: r, hostId: o }), (e[0] = o), (e[1] = r), (e[2] = u))
    : (u = e[2]);
  let { data: f, error: p, refetch: m } = h(D(he, u)),
    [g, _] = (0, Ft.useState)(!1),
    v;
  e[3] === f
    ? (v = e[4])
    : ((v = f?.voices.find((e) => e.slug === f.effectiveVoiceSlug)), (e[3] = f), (e[4] = v));
  let y = v,
    b = p != null || f?.accountVoiceStatus === `unavailable`;
  if (!n) return null;
  let x;
  if (b) {
    let t;
    e[5] === m
      ? (t = e[6])
      : ((t = () => {
          m();
        }),
        (e[5] = m),
        (e[6] = t));
    let n;
    e[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(d, {
          id: `settings.general.realtimeVoice.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading compatible realtime voices`,
        })),
        (e[7] = n))
      : (n = e[7]);
    let r;
    (e[8] === t
      ? (r = e[9])
      : ((r = (0, Y.jsx)(W, { color: `secondary`, size: `toolbar`, onClick: t, children: n })),
        (e[8] = t),
        (e[9] = r)),
      (x = r));
  } else if (f == null || y == null) {
    let t;
    (e[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Y.jsx)(W, {
          color: `secondary`,
          size: `toolbar`,
          disabled: !0,
          children: (0, Y.jsx)(d, {
            id: `settings.general.realtimeVoice.loading`,
            defaultMessage: `Loading…`,
            description: `Label shown while the selected realtime voice loads`,
          }),
        })),
        (e[10] = t))
      : (t = e[10]),
      (x = t));
  } else {
    let n;
    e[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Y.jsx)(`span`, {
          "aria-hidden": !0,
          className: `size-3 rounded-full bg-chart-blue`,
        })),
        (e[11] = n))
      : (n = e[11]);
    let r;
    e[12] === y.name
      ? (r = e[13])
      : ((r = (0, Y.jsxs)(W, { color: `secondary`, size: `toolbar`, children: [n, y.name] })),
        (e[12] = y.name),
        (e[13] = r));
    let i;
    e[14] === t ? (i = e[15]) : ((i = (e) => Se(t, ct.parse(e))), (e[14] = t), (e[15] = i));
    let a;
    (e[16] !== g || e[17] !== y || e[18] !== r || e[19] !== i || e[20] !== f.voices
      ? ((a = (0, Y.jsx)(Ot, {
          open: g,
          initialVoice: y,
          triggerContent: r,
          voices: f.voices,
          onOpenChange: _,
          onSave: i,
        })),
        (e[16] = g),
        (e[17] = y),
        (e[18] = r),
        (e[19] = i),
        (e[20] = f.voices),
        (e[21] = a))
      : (a = e[21]),
      (x = a));
  }
  let S;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(H.Header, {
        title: (0, Y.jsx)(d, {
          id: `settings.general.realtimeVoice`,
          defaultMessage: `Voice chat`,
          description: `Heading for settings that configure live two-way spoken conversations with Codex, distinct from one-way dictation`,
        }),
      })),
      (e[22] = S))
    : (S = e[22]);
  let C;
  return (
    e[23] !== s ||
    e[24] !== r ||
    e[25] !== a ||
    e[26] !== c?.dynamicTools ||
    e[27] !== b ||
    e[28] !== x
      ? ((C = (0, Y.jsxs)(H, {
          children: [
            S,
            (0, Y.jsx)(H.Content, {
              children: (0, Y.jsx)(B, {
                children: r
                  ? (0, Y.jsxs)(Y.Fragment, {
                      children: [
                        (0, Y.jsx)(G, {
                          label: (0, Y.jsx)(d, {
                            id: `settings.general.realtimeVoice.voice.label`,
                            defaultMessage: `Voice`,
                            description: `Label for choosing the synthesized voice Codex uses in live two-way spoken conversations`,
                          }),
                          description: (0, Y.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [
                              (0, Y.jsx)(d, {
                                id: `settings.general.realtimeVoice.voice.description`,
                                defaultMessage: `Choose the voice Codex uses for new voice chats`,
                                description: `Helper text for choosing the synthesized voice used in future live two-way spoken conversations with Codex`,
                              }),
                              b
                                ? (0, Y.jsx)(`span`, {
                                    className: `text-danger`,
                                    children: (0, Y.jsx)(d, {
                                      id: `settings.general.realtimeVoice.loadError`,
                                      defaultMessage: `Unable to load voice settings`,
                                      description: `Error shown when realtime voice settings cannot load`,
                                    }),
                                  })
                                : null,
                            ],
                          }),
                          control: x,
                        }),
                        (0, Y.jsx)(Pt, {}),
                        null,
                        a === `macOS` && s && c?.dynamicTools.appshotsEnabled
                          ? (0, Y.jsx)(Nt, {})
                          : null,
                      ],
                    })
                  : (0, Y.jsx)(Mt, {}),
              }),
            }),
          ],
        })),
        (e[23] = s),
        (e[24] = r),
        (e[25] = a),
        (e[26] = c?.dynamicTools),
        (e[27] = b),
        (e[28] = x),
        (e[29] = C))
      : (C = e[29]),
    C
  );
}
function Mt() {
  let e = (0, J.c)(3),
    t = h(it);
  if (t.status === `loading`) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, Y.jsx)(G, {
            label: (0, Y.jsx)(d, {
              id: `settings.general.realtimeVoice.accessLoading`,
              defaultMessage: `Checking voice chat access…`,
              description: `Settings row label shown while the app checks whether the current account or workspace can use live two-way voice conversations`,
            }),
            control: null,
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
        ? ((t = (0, Y.jsx)(G, {
            label: (0, Y.jsx)(d, {
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
      ? ((n = (0, Y.jsx)(G, {
          label: (0, Y.jsx)(d, {
            id: `settings.general.realtimeVoice.unavailable.label`,
            defaultMessage: `Voice chat unavailable`,
            description: `Label shown when live two-way voice conversations are unavailable for the current account or workspace`,
          }),
          description: (0, Y.jsx)(d, {
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
function Nt() {
  let e = (0, J.c)(10),
    t = i(U),
    r = I(),
    a = ee(It.screenContextEnabled),
    o,
    s;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(d, {
        id: `settings.general.realtimeVoiceScreenContext.label`,
        defaultMessage: `Screen context`,
        description: `Label for allowing live voice conversations to use visual context from the foreground app`,
      })),
      (s = (0, Y.jsx)(d, {
        id: `settings.general.realtimeVoiceScreenContext.description`,
        defaultMessage: `Let Codex inspect the foreground app when you refer to what's on screen. macOS asks for access the first time Codex needs it`,
        description: `Explains that references to on-screen content during a live voice conversation can let Codex inspect the foreground app and trigger the first-use macOS permission prompt`,
      })),
      (e[0] = o),
      (e[1] = s))
    : ((o = e[0]), (s = e[1]));
  let c;
  e[2] === t
    ? (c = e[3])
    : ((c = (e) => {
        if (!e) {
          V(t, It.screenContextEnabled, !1);
          return;
        }
        n(t, () => {
          V(t, It.screenContextEnabled, !0);
        });
      }),
      (e[2] = t),
      (e[3] = c));
  let l;
  e[4] === r
    ? (l = e[5])
    : ((l = r.formatMessage({
        id: `settings.general.realtimeVoiceScreenContext.ariaLabel`,
        defaultMessage: `Enable screen context for voice chat`,
        description: `Aria label for a toggle that lets live voice conversations inspect the foreground app when the user refers to on-screen content`,
      })),
      (e[4] = r),
      (e[5] = l));
  let u;
  return (
    e[6] !== a || e[7] !== c || e[8] !== l
      ? ((u = (0, Y.jsx)(G, {
          label: o,
          description: s,
          control: (0, Y.jsx)(z, { checked: a, onChange: c, ariaLabel: l }),
        })),
        (e[6] = a),
        (e[7] = c),
        (e[8] = l),
        (e[9] = u))
      : (u = e[9]),
    u
  );
}
function Pt() {
  let e = (0, J.c)(40),
    t = I(),
    { platform: n } = l(),
    r = f(),
    i = N(),
    { data: a } = h(fe),
    [o, s] = (0, Ft.useState)(!1),
    [c, u] = (0, Ft.useState)(null),
    p;
  e[0] !== i || e[1] !== r
    ? ((p = {
        onSuccess: (e) => {
          let t = Ue(`codex-command-keymap-state`);
          (r.setQueryData(t, e), i(t));
        },
      }),
      (e[0] = i),
      (e[1] = r),
      (e[2] = p))
    : (p = e[2]);
  let m = ft(`set-codex-command-keybinding`, p),
    g;
  e[3] !== t || e[4] !== m
    ? ((g = async function (e) {
        u(null);
        try {
          await m.mutateAsync({
            commandId: `realtimeVoice`,
            update: e == null ? { type: `clear` } : { type: `set`, accelerator: e },
          });
        } catch (e) {
          let n = e;
          u(
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
      (e[4] = m),
      (e[5] = g))
    : (g = e[5]);
  let _ = g;
  if (a?.supported === !1) return null;
  let v, y;
  e[6] !== a || e[7] !== n
    ? ((v = b(`realtimeVoice`, a, n)[0]?.accelerator ?? null),
      (y = v == null ? null : Ee(v)),
      (e[6] = a),
      (e[7] = n),
      (e[8] = v),
      (e[9] = y))
    : ((v = e[8]), (y = e[9]));
  let x = y,
    S;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Y.jsx)(d, {
        id: `settings.general.realtimeVoiceHotkey.label`,
        defaultMessage: `Voice chat hotkey`,
        description: `Label for the global keyboard shortcut that starts a live two-way spoken conversation, distinct from dictation shortcuts`,
      })),
      (e[10] = S))
    : (S = e[10]);
  let C;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Y.jsx)(d, {
        id: `settings.general.realtimeVoiceHotkey.description`,
        defaultMessage: `Start voice chat from anywhere on desktop`,
        description: `Explains that the global shortcut starts a live two-way spoken conversation from any desktop app`,
      })),
      (e[11] = C))
    : (C = e[11]);
  let w;
  e[12] === c
    ? (w = e[13])
    : ((w = c ? (0, Y.jsx)(`span`, { className: `text-danger`, children: c }) : null),
      (e[12] = c),
      (e[13] = w));
  let T;
  e[14] === w
    ? (T = e[15])
    : ((T = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [C, w] })),
      (e[14] = w),
      (e[15] = T));
  let E;
  e[16] === t
    ? (E = e[17])
    : ((E = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.captureAriaLabel`,
        defaultMessage: `Voice chat hotkey capture`,
        description: `Aria label for recording the global shortcut that starts a live two-way spoken conversation`,
      })),
      (e[16] = t),
      (e[17] = E));
  let D = m.isPending,
    O;
  e[18] === t
    ? (O = e[19])
    : ((O = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when realtime voice hotkey is disabled`,
      })),
      (e[18] = t),
      (e[19] = O));
  let k;
  e[20] === t
    ? (k = e[21])
    : ((k = t.formatMessage({
        id: `settings.general.realtimeVoiceHotkey.label`,
        defaultMessage: `Voice chat hotkey`,
        description: `Name of the global shortcut that starts a live two-way spoken conversation, distinct from dictation shortcuts`,
      })),
      (e[20] = t),
      (e[21] = k));
  let A;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = () => {
        s(!1);
      }),
      (e[22] = A))
    : (A = e[22]);
  let j, M;
  e[23] === _
    ? ((j = e[24]), (M = e[25]))
    : ((j = (e) => {
        (s(!1), _(e));
      }),
      (M = () => {
        _(null);
      }),
      (e[23] = _),
      (e[24] = j),
      (e[25] = M));
  let P;
  e[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        (u(null), s(!0));
      }),
      (e[26] = P))
    : (P = e[26]);
  let F;
  e[27] !== x ||
  e[28] !== v ||
  e[29] !== o ||
  e[30] !== m.isPending ||
  e[31] !== k ||
  e[32] !== j ||
  e[33] !== M ||
  e[34] !== E ||
  e[35] !== O
    ? ((F = (0, Y.jsx)(Ct, {
        accelerator: v,
        acceleratorLabel: x,
        allowsBareModifiers: !0,
        captureAriaLabel: E,
        disabled: D,
        emptyLabel: O,
        hotkeyName: k,
        isCapturing: o,
        onCancelCapture: A,
        onCapture: j,
        onClear: M,
        onStartCapture: P,
      })),
      (e[27] = x),
      (e[28] = v),
      (e[29] = o),
      (e[30] = m.isPending),
      (e[31] = k),
      (e[32] = j),
      (e[33] = M),
      (e[34] = E),
      (e[35] = O),
      (e[36] = F))
    : (F = e[36]);
  let L;
  return (
    e[37] !== F || e[38] !== T
      ? ((L = (0, Y.jsx)(G, { label: S, description: T, control: F })),
        (e[37] = F),
        (e[38] = T),
        (e[39] = L))
      : (L = e[39]),
    L
  );
}
var J,
  Ft,
  Y,
  It,
  Lt = e(() => {
    ((J = Be()),
      et(),
      j(),
      Te(),
      (Ft = t(o(), 1)),
      ae(),
      Fe(),
      R(),
      Ae(),
      pe(),
      a(),
      r(),
      pt(),
      st(),
      lt(),
      m(),
      je(),
      at(),
      qe(),
      St(),
      Qe(),
      ne(),
      _e(),
      _(),
      we(),
      rt(),
      ve(),
      At(),
      (Y = Me()),
      (It = dt()));
  });
function Rt() {
  let e = (0, X.c)(11),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { name: `dictation.composer` }), (e[0] = t))
    : (t = e[0]);
  let { isCapable: n } = k(Ye, t),
    r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { name: `dictation.global` }), (e[1] = r))
    : (r = e[1]);
  let { isCapable: i } = k(Ye, r),
    a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Q.jsx)(c, { slug: `voice` })), (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(H.Header, {
        title: (0, Q.jsx)(d, {
          id: `settings.voice.general`,
          defaultMessage: `General`,
          description: `Heading for general voice settings`,
        }),
      })),
      (e[3] = o))
    : (o = e[3]);
  let s, l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsxs)(H, {
        children: [
          o,
          (0, Q.jsx)(H.Content, { children: (0, Q.jsx)(B, { children: (0, Q.jsx)(zt, {}) }) }),
        ],
      })),
      (l = (0, Q.jsx)(jt, {})),
      (e[4] = s),
      (e[5] = l))
    : ((s = e[4]), (l = e[5]));
  let u;
  e[6] !== n || e[7] !== i
    ? ((u = i || n ? (0, Q.jsx)(Wt, { isGlobalDictationEnabled: i }) : null),
      (e[6] = n),
      (e[7] = i),
      (e[8] = u))
    : (u = e[8]);
  let f;
  return (
    e[9] === u
      ? (f = e[10])
      : ((f = (0, Q.jsx)(S, {
          title: a,
          children: (0, Q.jsxs)(Q.Fragment, { children: [s, l, u] }),
        })),
        (e[9] = u),
        (e[10] = f)),
    f
  );
}
function zt() {
  let e = (0, X.c)(58),
    t = i(U),
    n = I(),
    r = ee(M.microphoneInputDeviceId),
    a = typeof navigator < `u` && navigator.mediaDevices?.enumerateDevices != null,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { enabled: a, queryFn: Ut, queryKey: nn, staleTime: ot.FIVE_SECONDS }), (e[0] = o))
    : (o = e[0]);
  let s = ie(o),
    c,
    l,
    u;
  if (e[1] !== s.data || e[2] !== n || e[3] !== r) {
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
      (u = t));
    let i;
    e[9] === r ? (i = e[10]) : ((i = (e) => e.deviceId === r), (e[9] = r), (e[10] = i));
    let a = c.findIndex(i),
      o = c[a];
    if (r == null) l = u;
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
        (l = t));
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
        (l = t));
    } else l = Ht(n, o, a);
    ((e[1] = s.data), (e[2] = n), (e[3] = r), (e[4] = c), (e[5] = l), (e[6] = u));
  } else ((c = e[4]), (l = e[5]), (u = e[6]));
  let f;
  e[15] === s
    ? (f = e[16])
    : ((f = async function () {
        await Ge.systemPermissions?.requestMicrophoneAccess();
        let e = await navigator.mediaDevices.getUserMedia({ audio: !0 }).catch(Vt);
        await s.refetch().finally(() => {
          e?.getTracks().forEach(Bt);
        });
      }),
      (e[15] = s),
      (e[16] = f));
  let p = f,
    m,
    h;
  e[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(d, {
        id: `settings.general.microphoneInput.label`,
        defaultMessage: `Microphone`,
        description: `Label for microphone input selection setting`,
      })),
      (h = a
        ? (0, Q.jsx)(d, {
            id: `settings.general.microphoneInput.description`,
            defaultMessage: `Used for voice chat and dictation`,
            description: `Description for microphone input selection setting`,
          })
        : (0, Q.jsx)(d, {
            id: `settings.general.microphoneInput.unsupported`,
            defaultMessage: `Microphone selection is not available on this device`,
            description: `Description shown when microphone selection is unsupported`,
          })),
      (e[17] = m),
      (e[18] = h))
    : ((m = e[17]), (h = e[18]));
  let g;
  e[19] === p
    ? (g = e[20])
    : ((g = (e) => {
        e && p();
      }),
      (e[19] = p),
      (e[20] = g));
  let _;
  e[21] === l
    ? (_ = e[22])
    : ((_ = (0, Q.jsx)(re, {
        disabled: !a,
        children: (0, Q.jsx)(`span`, { className: `truncate`, children: l }),
      })),
      (e[21] = l),
      (e[22] = _));
  let v = r == null ? Ze : void 0,
    b;
  e[23] === t
    ? (b = e[24])
    : ((b = () => {
        V(t, M.microphoneInputDeviceId, null);
      }),
      (e[23] = t),
      (e[24] = b));
  let x;
  e[25] !== u || e[26] !== v || e[27] !== b
    ? ((x = (0, Q.jsx)(y.Item, { RightIcon: v, onSelect: b, children: u })),
      (e[25] = u),
      (e[26] = v),
      (e[27] = b),
      (e[28] = x))
    : (x = e[28]);
  let S;
  e[29] === c.length
    ? (S = e[30])
    : ((S = c.length > 0 ? (0, Q.jsx)(y.Separator, {}) : null), (e[29] = c.length), (e[30] = S));
  let C;
  if (e[31] !== c || e[32] !== n || e[33] !== t || e[34] !== r) {
    let i;
    (e[36] !== n || e[37] !== t || e[38] !== r
      ? ((i = (e, i) => {
          let a = Ht(n, e, i);
          return (0, Q.jsx)(
            y.Item,
            {
              RightIcon: e.deviceId === r ? Ze : void 0,
              onSelect: () => {
                V(t, M.microphoneInputDeviceId, e.deviceId);
              },
              children: a,
            },
            e.deviceId,
          );
        }),
        (e[36] = n),
        (e[37] = t),
        (e[38] = r),
        (e[39] = i))
      : (i = e[39]),
      (C = c.map(i)),
      (e[31] = c),
      (e[32] = n),
      (e[33] = t),
      (e[34] = r),
      (e[35] = C));
  } else C = e[35];
  let w;
  e[40] === s.isFetching
    ? (w = e[41])
    : ((w = s.isFetching
        ? (0, Q.jsx)(y.Message, {
            compact: !0,
            children: (0, Q.jsxs)(`span`, {
              className: `flex items-center justify-center gap-2`,
              children: [
                (0, Q.jsx)(Ie, { className: `size-3` }),
                (0, Q.jsx)(d, {
                  id: `settings.general.microphoneInput.loading`,
                  defaultMessage: `Loading microphones`,
                  description: `Message shown while microphone inputs load`,
                }),
              ],
            }),
          })
        : null),
      (e[40] = s.isFetching),
      (e[41] = w));
  let E;
  e[42] !== s.isError || e[43] !== s.isFetching
    ? ((E =
        !s.isFetching && s.isError
          ? (0, Q.jsx)(y.Message, {
              tone: `error`,
              children: (0, Q.jsx)(d, {
                id: `settings.general.microphoneInput.loadError`,
                defaultMessage: `Unable to load microphones`,
                description: `Message shown when microphone input devices cannot be loaded`,
              }),
            })
          : null),
      (e[42] = s.isError),
      (e[43] = s.isFetching),
      (e[44] = E))
    : (E = e[44]);
  let D;
  e[45] !== c.length || e[46] !== s.isError || e[47] !== s.isFetching
    ? ((D =
        !s.isFetching && !s.isError && c.length === 0
          ? (0, Q.jsx)(y.Message, {
              children: (0, Q.jsx)(d, {
                id: `settings.general.microphoneInput.empty`,
                defaultMessage: `No microphones found`,
                description: `Message shown when no microphone inputs are available`,
              }),
            })
          : null),
      (e[45] = c.length),
      (e[46] = s.isError),
      (e[47] = s.isFetching),
      (e[48] = D))
    : (D = e[48]);
  let O;
  return (
    e[49] !== C ||
    e[50] !== w ||
    e[51] !== E ||
    e[52] !== D ||
    e[53] !== g ||
    e[54] !== _ ||
    e[55] !== x ||
    e[56] !== S
      ? ((O = (0, Q.jsx)(G, {
          label: m,
          description: h,
          control: (0, Q.jsxs)(T, {
            contentWidth: `menuWide`,
            align: `end`,
            disabled: !a,
            onOpenChange: g,
            triggerButton: _,
            children: [x, S, C, w, E, D],
          }),
        })),
        (e[49] = C),
        (e[50] = w),
        (e[51] = E),
        (e[52] = D),
        (e[53] = g),
        (e[54] = _),
        (e[55] = x),
        (e[56] = S),
        (e[57] = O))
      : (O = e[57]),
    O
  );
}
function Bt(e) {
  return e.stop();
}
function Vt() {
  return null;
}
function Ht(e, t, n) {
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
async function Ut() {
  if (typeof navigator > `u`) return [];
  let e = navigator.mediaDevices;
  return e?.enumerateDevices == null
    ? []
    : (await e.enumerateDevices()).filter(
        (e) => e.kind === `audioinput` && e.deviceId.length > 0 && e.deviceId !== "default",
      );
}
function Wt(e) {
  let t = (0, X.c)(10),
    { isGlobalDictationEnabled: n } = e,
    { data: r } = h(ht),
    i;
  t[0] === r ? (i = t[1]) : ((i = bt(r)), (t[0] = r), (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(H.Header, {
        title: (0, Q.jsx)(d, {
          id: `settings.general.dictation`,
          defaultMessage: `Dictation`,
          description: `Heading for global dictation settings group`,
        }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== r || t[4] !== n || t[5] !== a
    ? ((s =
        n &&
        (a
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsxs)(B, {
                  children: [
                    (0, Q.jsx)(Xt, { hotkeyState: r, mode: `hold` }),
                    (0, Q.jsx)(Xt, { hotkeyState: r, mode: `toggle` }),
                  ],
                }),
                (0, Q.jsx)(B, { children: (0, Q.jsx)(Gt, {}) }),
              ],
            })
          : (0, Q.jsx)(B, {
              children: (0, Q.jsx)(P, {
                layout: `settings-row`,
                children: (0, Q.jsx)(d, {
                  id: `settings.voice.dictation.unsupported`,
                  defaultMessage: `Dictation is not available on this device`,
                  description: `Empty state shown when desktop dictation is unsupported`,
                }),
              }),
            }))),
      (t[3] = r),
      (t[4] = n),
      (t[5] = a),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(B, { children: (0, Q.jsx)(Zt, {}) })), (t[7] = c))
    : (c = t[7]);
  let l;
  return (
    t[8] === s
      ? (l = t[9])
      : ((l = (0, Q.jsxs)(H, { children: [o, (0, Q.jsxs)(H.Content, { children: [s, c] })] })),
        (t[8] = s),
        (t[9] = l)),
    l
  );
}
function Gt() {
  let e = (0, X.c)(17),
    t = i(U),
    n = I(),
    r = ee(M.dictationDictionary),
    [a, o] = (0, Z.useState)(null),
    s = (0, Z.useRef)(!1),
    c = a ?? r,
    l = c != null && c.length > 0 ? c : en,
    f;
  e[0] === t
    ? (f = e[1])
    : ((f = async function (e) {
        let n = e.map(Yt).filter(Jt);
        (await V(t, M.dictationDictionary, n), o(null));
      }),
      (e[0] = t),
      (e[1] = f));
  let p = f,
    m,
    h;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(d, {
        id: `settings.general.dictationDictionary.label`,
        defaultMessage: `Dictation dictionary`,
        description: `Label for dictation cleanup dictionary setting`,
      })),
      (h = (0, Q.jsx)(d, {
        id: `settings.general.dictationDictionary.description`,
        defaultMessage: `Words or phrases dictation should recognize`,
        description: `Description for dictation cleanup dictionary setting`,
      })),
      (e[2] = m),
      (e[3] = h))
    : ((m = e[2]), (h = e[3]));
  let g;
  e[4] === l
    ? (g = e[5])
    : ((g = () => {
        (o([...l, $t]),
          requestAnimationFrame(() => {
            document
              .querySelector(`[data-dictation-dictionary-entry-index="${l.length}"]`)
              ?.focus();
          }));
      }),
      (e[4] = l),
      (e[5] = g));
  let _, v;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(xe, { className: `icon-2xs` })),
      (v = (0, Q.jsx)(d, {
        id: `settings.general.dictationDictionary.addEntry`,
        defaultMessage: `Add entry`,
        description: `Button label for adding one dictation dictionary entry`,
      })),
      (e[6] = _),
      (e[7] = v))
    : ((_ = e[6]), (v = e[7]));
  let y;
  e[8] === g
    ? (y = e[9])
    : ((y = (0, Q.jsx)(G, {
        label: m,
        description: h,
        control: (0, Q.jsxs)(W, {
          type: `button`,
          color: `secondary`,
          size: `toolbar`,
          onMouseDown: qt,
          onClick: g,
          children: [_, v],
        }),
      })),
      (e[8] = g),
      (e[9] = y));
  let b;
  e[10] !== n || e[11] !== p || e[12] !== l
    ? ((b = l.map((e, t) =>
        (0, Q.jsx)(
          G,
          {
            variant: `nested`,
            label: null,
            control: (0, Q.jsxs)(`div`, {
              className: `flex w-full items-center gap-2`,
              children: [
                (0, Q.jsx)(u, {
                  "data-dictation-dictionary-entry-index": t,
                  "aria-label": n.formatMessage(
                    {
                      id: `settings.general.dictationDictionary.entryLabel`,
                      defaultMessage: `Dictionary entry {index}`,
                      description: `Aria label for one dictation dictionary entry`,
                    },
                    { index: t + 1 },
                  ),
                  placeholder: tn[t] ?? tn[0] ?? ``,
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
                    p(l);
                  },
                  onKeyDown: (e) => {
                    if (e.key !== `Enter`) return;
                    e.preventDefault();
                    let n = [...l.slice(0, t + 1), $t, ...l.slice(t + 1)];
                    ((s.current = !0),
                      o(n),
                      requestAnimationFrame(() => {
                        document
                          .querySelector(`[data-dictation-dictionary-entry-index="${t + 1}"]`)
                          ?.focus();
                      }));
                  },
                }),
                (0, Q.jsx)(W, {
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
                  onMouseDown: Kt,
                  onClick: () => {
                    p(l.filter((e, n) => n !== t));
                  },
                  children: (0, Q.jsx)(Dt, { className: `icon-2xs` }),
                }),
              ],
            }),
          },
          t,
        ),
      )),
      (e[10] = n),
      (e[11] = p),
      (e[12] = l),
      (e[13] = b))
    : (b = e[13]);
  let x;
  return (
    e[14] !== y || e[15] !== b
      ? ((x = (0, Q.jsxs)(Q.Fragment, { children: [y, b] })), (e[14] = y), (e[15] = b), (e[16] = x))
      : (x = e[16]),
    x
  );
}
function Kt(e) {
  e.preventDefault();
}
function qt(e) {
  e.preventDefault();
}
function Jt(e) {
  return e.length > 0;
}
function Yt(e) {
  return e.trim();
}
function Xt(e) {
  let t = (0, X.c)(46),
    { hotkeyState: n, mode: r } = e,
    i = r === `toggle`,
    a = I(),
    o = f(),
    s = N(),
    [c, l] = (0, Z.useState)(!1),
    [u, p] = (0, Z.useState)(null),
    m;
  t[0] !== s || t[1] !== o
    ? ((m = {
        onSuccess: (e) => {
          let t = Ue(`global-dictation-hotkey-state`);
          (o.setQueryData(t, e.state), Promise.all([s(t), s(Ue(`codex-command-keymap-state`))]));
        },
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = m))
    : (m = t[2]);
  let h = ft(
      r === `hold` ? `global-dictation-set-hotkey` : `global-dictation-set-toggle-hotkey`,
      m,
    ),
    g;
  t[3] !== a || t[4] !== i || t[5] !== h
    ? ((g = async function (e) {
        p(null);
        try {
          let t = await h.mutateAsync({ hotkey: e });
          t.success || p(t.error);
        } catch (e) {
          let t = e;
          if (t instanceof Error) {
            p(t.message);
            return;
          }
          if (i) {
            p(
              a.formatMessage({
                id: `settings.general.globalDictationToggleHotkey.errorGeneric`,
                defaultMessage: `Failed to update toggle dictation hotkey`,
                description: `Fallback error shown when toggle dictation hotkey update fails`,
              }),
            );
            return;
          }
          p(
            a.formatMessage({
              id: `settings.general.globalDictationHotkey.errorGeneric`,
              defaultMessage: `Failed to update hold-to-dictate hotkey`,
              description: `Fallback error shown when hold-to-dictate hotkey update fails`,
            }),
          );
        }
      }),
      (t[3] = a),
      (t[4] = i),
      (t[5] = h),
      (t[6] = g))
    : (g = t[6]);
  let _ = g,
    v = i ? (n?.configuredToggleHotkey ?? null) : (n?.configuredHotkey ?? null),
    y;
  t[7] === v ? (y = t[8]) : ((y = v == null ? null : Ee(v)), (t[7] = v), (t[8] = y));
  let b = y,
    x;
  t[9] !== a || t[10] !== i
    ? ((x = i ? a.formatMessage($.toggleDictationHotkey) : a.formatMessage($.holdToDictateHotkey)),
      (t[9] = a),
      (t[10] = i),
      (t[11] = x))
    : (x = t[11]);
  let S = x,
    C;
  t[12] !== a || t[13] !== i
    ? ((C = i
        ? a.formatMessage({
            id: `settings.general.globalDictationToggleHotkey.captureAriaLabel`,
            defaultMessage: `Toggle dictation hotkey capture`,
            description: `Aria label for toggle dictation hotkey capture input`,
          })
        : a.formatMessage({
            id: `settings.general.globalDictationHotkey.captureAriaLabel`,
            defaultMessage: `Hold-to-dictate hotkey capture`,
            description: `Aria label for hold-to-dictate hotkey capture input`,
          })),
      (t[12] = a),
      (t[13] = i),
      (t[14] = C))
    : (C = t[14]);
  let w = C,
    T = i ? void 0 : Et,
    E;
  t[15] === i
    ? (E = t[16])
    : ((E = i
        ? (0, Q.jsx)(d, { ...$.toggleDictationHotkey })
        : (0, Q.jsx)(d, { ...$.holdToDictateHotkey })),
      (t[15] = i),
      (t[16] = E));
  let D;
  t[17] === i
    ? (D = t[18])
    : ((D = i
        ? (0, Q.jsx)(d, {
            id: `settings.general.globalDictationToggleHotkey.description`,
            defaultMessage: `Press once anywhere on desktop to dictate, then press again to stop`,
            description: `Description for toggle dictation hotkey setting`,
          })
        : (0, Q.jsx)(d, {
            id: `settings.general.globalDictationHotkey.description`,
            defaultMessage: `Hold anywhere on desktop to dictate where your cursor is`,
            description: `Description for hold-to-dictate hotkey setting`,
          })),
      (t[17] = i),
      (t[18] = D));
  let O;
  t[19] === u
    ? (O = t[20])
    : ((O = u ? (0, Q.jsx)(`span`, { className: `text-danger`, children: u }) : null),
      (t[19] = u),
      (t[20] = O));
  let k;
  t[21] !== D || t[22] !== O
    ? ((k = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [D, O] })),
      (t[21] = D),
      (t[22] = O),
      (t[23] = k))
    : (k = t[23]);
  let A = h.isPending,
    j;
  t[24] === a
    ? (j = t[25])
    : ((j = a.formatMessage({
        id: `settings.general.globalDictationHotkey.off`,
        defaultMessage: `Off`,
        description: `Status label when global dictation hotkey is disabled`,
      })),
      (t[24] = a),
      (t[25] = j));
  let M;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        l(!1);
      }),
      (t[26] = M))
    : (M = t[26]);
  let P, F;
  t[27] === _
    ? ((P = t[28]), (F = t[29]))
    : ((P = (e) => {
        (l(!1), _(e));
      }),
      (F = () => {
        _(null);
      }),
      (t[27] = _),
      (t[28] = P),
      (t[29] = F));
  let L;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        (p(null), l(!0));
      }),
      (t[30] = L))
    : (L = t[30]);
  let R;
  t[31] !== b ||
  t[32] !== w ||
  t[33] !== v ||
  t[34] !== S ||
  t[35] !== c ||
  t[36] !== h.isPending ||
  t[37] !== j ||
  t[38] !== P ||
  t[39] !== F
    ? ((R = (0, Q.jsx)(Ct, {
        accelerator: v,
        acceleratorLabel: b,
        allowsBareModifiers: !0,
        captureAriaLabel: w,
        disabled: A,
        emptyLabel: j,
        hotkeyName: S,
        isCapturing: c,
        onCancelCapture: M,
        onCapture: P,
        onClear: F,
        onStartCapture: L,
      })),
      (t[31] = b),
      (t[32] = w),
      (t[33] = v),
      (t[34] = S),
      (t[35] = c),
      (t[36] = h.isPending),
      (t[37] = j),
      (t[38] = P),
      (t[39] = F),
      (t[40] = R))
    : (R = t[40]);
  let z;
  return (
    t[41] !== k || t[42] !== R || t[43] !== T || t[44] !== E
      ? ((z = (0, Q.jsx)(G, { id: T, label: E, description: k, control: R })),
        (t[41] = k),
        (t[42] = R),
        (t[43] = T),
        (t[44] = E),
        (t[45] = z))
      : (z = t[45]),
    z
  );
}
function Zt() {
  let e = (0, X.c)(10),
    t = i(U),
    n = I(),
    { data: r } = h(Tt),
    [a, o] = (0, Z.useState)(null),
    s;
  if (e[0] !== r?.items || e[1] !== n || e[2] !== a || e[3] !== t) {
    let i = r?.items.slice(0, rn),
      c;
    e[5] !== n || e[6] !== t
      ? ((c = async (e, r) => {
          (o({ action: r, id: e }),
            await (async () => {
              try {
                r === `delete` ? await xt(t, e) : r === `download` ? await yt(e) : await gt(t, e);
              } catch (e) {
                let i = e;
                (r === `transcribe` && t.get(Le).danger(L(n, `transcription`, i).message),
                  F.warning(`Failed to complete dictation history action`, {
                    safe: { action: r },
                    sensitive: { error: i },
                  }));
              }
            })().finally(() => {
              o(null);
            }));
        }),
        (e[5] = n),
        (e[6] = t),
        (e[7] = c))
      : (c = e[7]);
    let l = c,
      u;
    e[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Q.jsx)(d, {
          id: `settings.general.globalDictationHistory.emptyTitle`,
          defaultMessage: `Recent recordings`,
          description: `Heading for saved recent dictation recordings`,
        })),
        (e[8] = u))
      : (u = e[8]);
    let f;
    (e[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Q.jsx)(G, {
          label: u,
          description: (0, Q.jsx)(d, {
            id: `settings.general.globalDictationHistory.recoveryDescription`,
            defaultMessage: `Your last {count} recordings are saved on this device`,
            description: `Description explaining how many recent dictation recordings are saved locally`,
            values: { count: rn },
          }),
          control: null,
        })),
        (e[9] = f))
      : (f = e[9]),
      (s = (0, Q.jsxs)(Q.Fragment, {
        children: [
          f,
          i?.map((e) =>
            (0, Q.jsx)(
              Qt,
              {
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
                  l(e.id, `delete`);
                },
                onDownload: () => {
                  l(e.id, `download`);
                },
                onCopy: () => {
                  Je(e.text);
                },
                onTranscribe: () => {
                  l(e.id, `transcribe`);
                },
              },
              e.id,
            ),
          ),
        ],
      })),
      (e[0] = r?.items),
      (e[1] = n),
      (e[2] = a),
      (e[3] = t),
      (e[4] = s));
  } else s = e[4];
  return s;
}
function Qt(e) {
  let t = (0, X.c)(52),
    {
      actionDisabled: n,
      isTranscribing: r,
      item: i,
      onCopy: a,
      onDelete: o,
      onDownload: s,
      onTranscribe: c,
      timestamp: l,
    } = e,
    u = I(),
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = u.formatMessage({
        id: `settings.general.globalDictationHistory.copy`,
        defaultMessage: `Copy dictation`,
        description: `Tooltip and aria label for copying a dictation transcript`,
      })),
      (t[0] = u),
      (t[1] = f));
  let p = f,
    m;
  t[2] === u
    ? (m = t[3])
    : ((m = u.formatMessage({
        id: `settings.general.globalDictationHistory.retryTranscription`,
        defaultMessage: `Retry transcription`,
        description: `Tooltip and aria label for retrying transcription of a saved dictation recording`,
      })),
      (t[2] = u),
      (t[3] = m));
  let h = m,
    _;
  t[4] === u
    ? (_ = t[5])
    : ((_ = u.formatMessage({
        id: `settings.general.globalDictationHistory.actions`,
        defaultMessage: `Recording actions`,
        description: `Accessible label for the menu containing saved recording actions`,
      })),
      (t[4] = u),
      (t[5] = _));
  let v = _,
    b;
  t[6] !== i.status || t[7] !== i.text
    ? ((b =
        i.text.length > 0
          ? i.text
          : (0, Q.jsx)(d, {
              id: `settings.general.globalDictationHistory.audioOnly`,
              defaultMessage: `{status, select, recording {Recording in progress} cancelled {Recording cancelled} interrupted {Recording interrupted} other {Recording saved}}`,
              description: `Status shown for a saved dictation recording without a transcript`,
              values: { status: i.status },
            })),
      (t[6] = i.status),
      (t[7] = i.text),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === b
    ? (x = t[10])
    : ((x = (0, Q.jsx)(`span`, { className: `block truncate font-normal`, children: b })),
      (t[9] = b),
      (t[10] = x));
  let S;
  t[11] === i.createdAtMs
    ? (S = t[12])
    : ((S = new Date(i.createdAtMs).toISOString()), (t[11] = i.createdAtMs), (t[12] = S));
  let C;
  t[13] !== S || t[14] !== l
    ? ((C = (0, Q.jsx)(`time`, { dateTime: S, className: `tabular-nums`, children: l })),
      (t[13] = S),
      (t[14] = l),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== n || t[17] !== p || t[18] !== i.text.length || t[19] !== a
    ? ((w =
        i.text.length === 0
          ? null
          : (0, Q.jsx)(E, {
              tooltipContent: p,
              children: (0, Q.jsx)(W, {
                "aria-label": p,
                color: `ghost`,
                disabled: n,
                size: `icon`,
                onClick: a,
                children: (0, Q.jsx)(g, { className: `icon-sm` }),
              }),
            })),
      (t[16] = n),
      (t[17] = p),
      (t[18] = i.text.length),
      (t[19] = a),
      (t[20] = w))
    : (w = t[20]);
  let D;
  t[21] !== n ||
  t[22] !== r ||
  t[23] !== i.sizeBytes ||
  t[24] !== i.status ||
  t[25] !== i.text.length ||
  t[26] !== c ||
  t[27] !== h
    ? ((D =
        i.text.length > 0 || i.sizeBytes === 0 || i.status === `recording`
          ? null
          : (0, Q.jsx)(W, {
              "aria-label": h,
              color: `secondary`,
              disabled: n,
              loading: r,
              size: `compact`,
              onClick: c,
              children: (0, Q.jsx)(d, {
                id: `settings.general.globalDictationHistory.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries transcription of a saved dictation recording`,
              }),
            })),
      (t[21] = n),
      (t[22] = r),
      (t[23] = i.sizeBytes),
      (t[24] = i.status),
      (t[25] = i.text.length),
      (t[26] = c),
      (t[27] = h),
      (t[28] = D))
    : (D = t[28]);
  let O;
  t[29] !== n || t[30] !== v
    ? ((O = (0, Q.jsx)(_t, { disabled: n, label: v })), (t[29] = n), (t[30] = v), (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== i.sizeBytes || t[33] !== s
    ? ((k =
        i.sizeBytes === 0
          ? null
          : (0, Q.jsx)(y.Item, {
              LeftIcon: tt,
              onSelect: s,
              children: (0, Q.jsx)(d, {
                id: `settings.general.globalDictationHistory.download`,
                defaultMessage: `Download recording`,
                description: `Menu action that downloads a saved dictation recording`,
              }),
            })),
      (t[32] = i.sizeBytes),
      (t[33] = s),
      (t[34] = k))
    : (k = t[34]);
  let A = i.status === `recording`,
    j;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(d, {
        id: `settings.general.globalDictationHistory.delete`,
        defaultMessage: `Delete recording`,
        description: `Menu action that deletes a saved dictation recording`,
      })),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== o || t[37] !== A
    ? ((M = (0, Q.jsx)(y.Item, { LeftIcon: Dt, disabled: A, onSelect: o, children: j })),
      (t[36] = o),
      (t[37] = A),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] !== n || t[40] !== O || t[41] !== k || t[42] !== M
    ? ((N = (0, Q.jsxs)(T, {
        align: `end`,
        contentWidth: `menu`,
        disabled: n,
        triggerButton: O,
        children: [k, M],
      })),
      (t[39] = n),
      (t[40] = O),
      (t[41] = k),
      (t[42] = M),
      (t[43] = N))
    : (N = t[43]);
  let P;
  t[44] !== N || t[45] !== w || t[46] !== D
    ? ((P = (0, Q.jsxs)(Q.Fragment, { children: [w, D, N] })),
      (t[44] = N),
      (t[45] = w),
      (t[46] = D),
      (t[47] = P))
    : (P = t[47]);
  let F;
  return (
    t[48] !== P || t[49] !== x || t[50] !== C
      ? ((F = (0, Q.jsx)(G, { size: `compact`, label: x, description: C, control: P })),
        (t[48] = P),
        (t[49] = x),
        (t[50] = C),
        (t[51] = F))
      : (F = t[51]),
    F
  );
}
var X, Z, Q, $t, en, tn, nn, rn, $;
e(() => {
  ((X = Be()),
    et(),
    j(),
    s(),
    (Z = t(o(), 1)),
    ae(),
    We(),
    a(),
    be(),
    Re(),
    vt(),
    O(),
    ce(),
    ze(),
    C(),
    x(),
    v(),
    Ke(),
    te(),
    mt(),
    lt(),
    m(),
    Lt(),
    Ne(),
    qe(),
    wt(),
    St(),
    Qe(),
    me(),
    ne(),
    _e(),
    ue(),
    _(),
    He(),
    Ve(),
    p(),
    oe(),
    we(),
    (Q = Me()),
    ($t = ``),
    (en = [$t]),
    (tn = [`Jane Doe`, `Acme Widget`, `checkout-form.tsx`, `useCartState`]),
    (nn = [`microphone-input-devices`]),
    (rn = 20),
    ($ = ut({
      holdToDictateHotkey: {
        id: `settings.general.globalDictationHotkey.label`,
        defaultMessage: `Hold-to-dictate hotkey`,
        description: `Label for hold-to-dictate hotkey setting`,
      },
      toggleDictationHotkey: {
        id: `settings.general.globalDictationToggleHotkey.label`,
        defaultMessage: `Toggle dictation hotkey`,
        description: `Label for toggle dictation hotkey setting`,
      },
    })));
})();
export { Rt as VoiceSettings };
//# sourceMappingURL=voice-settings-c8dc0e3ed346.js.map
