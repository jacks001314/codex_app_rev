import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  DB as i,
  FBt as a,
  FTt as o,
  HTt as s,
  ITt as c,
  JOt as l,
  LNt as u,
  Lyt as d,
  MNt as f,
  Mst as p,
  NNt as m,
  NSt as h,
  OB as g,
  PBt as _,
  Qst as v,
  USt as y,
  Uz as b,
  VTt as x,
  Wz as S,
  XOt as C,
  Y3 as w,
  Z3 as T,
  ZSt as E,
  ast as D,
  b2 as O,
  gB as k,
  hB as A,
  iCt as j,
  ist as M,
  jst as N,
  okt as P,
  sct as F,
  tkt as I,
  y2 as L,
  zst as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cct as R,
  HFt as z,
  Hpr as te,
  Mnr as ne,
  SRn as re,
  Upr as ie,
  VFt as ae,
  bRn as oe,
  dct as se,
  fct as ce,
  hct as le,
  jnr as ue,
  lct as de,
  uct as fe,
  xct as pe,
} from "./app-initial-ad16eaadf81f.js";
import { Ic as me, Mc as he, Nc as ge } from "./app-primary-3e00728c2a4c.js";
import { o as _e, r as ve } from "./codex-micro-layout-83367ba34281.js";
import {
  a as ye,
  c as B,
  i as be,
  o as xe,
  r as Se,
  t as Ce,
} from "./codex-micro-onboarding-animation-4b177d111076.js";
import {
  a as we,
  c as Te,
  d as Ee,
  f as De,
  i as Oe,
  l as ke,
  n as Ae,
  o as je,
  p as Me,
  r as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
} from "./codex-micro-keyboard-surface-4aba31c5b4d8.js";
function Le() {
  return (Le = e(() => {
    `` + new URL(`app-f483cb0295ed.png`, import.meta.url).href;
  }))();
}
function Re() {
  let e = (0, V.c)(36),
    t = S(),
    n = j(se),
    r = j(Ce) ?? Ve,
    i;
  e[0] === t ? (i = e[1]) : ((i = t ? void 0 : { y: [0, -3, 0] }), (e[0] = t), (e[1] = i));
  let a;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = { duration: 6, ease: [0.77, 0, 0.175, 1], repeat: 1 / 0 }), (e[2] = a))
    : (a = e[2]);
  let o;
  e[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = (0, H.jsx)(Ae, {})), (e[3] = o)) : (o = e[3]);
  let s;
  if (e[4] !== r.agentSlots || e[5] !== t) {
    let n;
    (e[7] === t
      ? (n = e[8])
      : ((n = (e) => {
          let { id: n, status: r } = e;
          return (0, H.jsx)(ze, { position: n + 1, shouldReduceMotion: t, status: r }, n);
        }),
        (e[7] = t),
        (e[8] = n)),
      (s = r.agentSlots.slice(0, 2).map(n)),
      (e[4] = r.agentSlots),
      (e[5] = t),
      (e[6] = s));
  } else s = e[6];
  let l;
  e[9] === n
    ? (l = e[10])
    : ((l = (0, H.jsx)(Fe, { className: `m-auto size-[92%]`, joystick: n })), (e[9] = n), (e[10] = l));
  let u;
  if (e[11] !== r.agentSlots || e[12] !== t) {
    let n;
    (e[14] === t
      ? (n = e[15])
      : ((n = (e) => {
          let { id: n, status: r } = e;
          return (0, H.jsx)(ze, { position: n + 1, shouldReduceMotion: t, status: r }, n);
        }),
        (e[14] = t),
        (e[15] = n)),
      (u = r.agentSlots.slice(2).map(n)),
      (e[11] = r.agentSlots),
      (e[12] = t),
      (e[13] = u));
  } else u = e[13];
  let d;
  if (e[16] !== r.actionKeycapIds || e[17] !== t) {
    let n;
    (e[19] === t
      ? (n = e[20])
      : ((n = (e, n) => (0, H.jsx)(Be, { keycapId: e, shouldReduceMotion: t }, n)), (e[19] = t), (e[20] = n)),
      (d = r.actionKeycapIds.slice(0, 4).map(n)),
      (e[16] = r.actionKeycapIds),
      (e[17] = t),
      (e[18] = d));
  } else d = e[18];
  let f;
  e[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, H.jsx)(Ne, {})), (e[21] = f)) : (f = e[21]);
  let p;
  if (e[22] !== r.actionKeycapIds || e[23] !== t) {
    let n;
    (e[25] === t
      ? (n = e[26])
      : ((n = (e, n) =>
          (0, H.jsx)(
            Be,
            { className: n === 0 ? `col-span-2` : void 0, keycapId: e, shouldReduceMotion: t },
            n + 4,
          )),
        (e[25] = t),
        (e[26] = n)),
      (p = r.actionKeycapIds.slice(4).map(n)),
      (e[22] = r.actionKeycapIds),
      (e[23] = t),
      (e[24] = p));
  } else p = e[24];
  let m;
  e[27] !== s || e[28] !== l || e[29] !== u || e[30] !== d || e[31] !== p
    ? ((m = (0, H.jsxs)(Oe, {
        className: `max-w-[14rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72),0_14px_32px_rgba(25,28,38,0.18)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_14px_34px_rgba(0,0,0,0.36)]`,
        children: [o, s, l, u, d, f, p],
      })),
      (e[27] = s),
      (e[28] = l),
      (e[29] = u),
      (e[30] = d),
      (e[31] = p),
      (e[32] = m))
    : (m = e[32]);
  let h;
  return (
    e[33] !== i || e[34] !== m
      ? ((h = (0, H.jsx)(c.div, {
          animate: i,
          className: `flex h-full items-center justify-center px-12 py-5`,
          transition: a,
          children: m,
        })),
        (e[33] = i),
        (e[34] = m),
        (e[35] = h))
      : (h = e[35]),
    h
  );
}
function ze(e) {
  let t = (0, V.c)(22),
    { position: n, shouldReduceMotion: r, status: i } = e,
    a = P(),
    o;
  t[0] !== a || t[1] !== n
    ? ((o = a.formatMessage(
        {
          id: `codexMicro.onboarding.animatedAgentKey`,
          defaultMessage: `Agent key {position} changing status color`,
          description: `Accessible label for an animated agent key in Codex Micro onboarding`,
        },
        { position: n },
      )),
      (t[0] = a),
      (t[1] = n),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { opacity: 1 }), (t[3] = s)) : (s = t[3]);
  let l, u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { opacity: 0 }), (u = { opacity: 0 }), (t[4] = l), (t[5] = u))
    : ((l = t[4]), (u = t[5]));
  let d = r ? 0 : U,
    f;
  t[6] === d ? (f = t[7]) : ((f = { duration: d, ease: `easeInOut` }), (t[6] = d), (t[7] = f));
  let p = n - 1,
    m = `onboarding-agent-${n}`,
    h;
  t[8] !== i || t[9] !== p || t[10] !== m
    ? ((h = { id: p, threadKey: m, title: null, status: i, selected: !0 }),
      (t[8] = i),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== n || t[13] !== h
    ? ((g = (0, H.jsx)(je, { isPressed: !1, position: n, showTooltip: !1, slot: h })),
      (t[12] = n),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== i || t[16] !== g || t[17] !== f
    ? ((_ = (0, H.jsx)(x, {
        initial: !1,
        children: (0, H.jsx)(
          c.div,
          {
            animate: s,
            "aria-hidden": !0,
            className: `absolute inset-0`,
            exit: l,
            initial: u,
            transition: f,
            children: g,
          },
          i,
        ),
      })),
      (t[15] = i),
      (t[16] = g),
      (t[17] = f),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== o || t[20] !== _
      ? ((v = (0, H.jsx)(`div`, {
          "aria-label": o,
          className: `relative z-10 aspect-square w-full`,
          role: `img`,
          children: _,
        })),
        (t[19] = o),
        (t[20] = _),
        (t[21] = v))
      : (v = t[21]),
    v
  );
}
function Be(e) {
  let t = (0, V.c)(21),
    { className: n, keycapId: r, shouldReduceMotion: i } = e,
    a = P(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `codexMicro.onboarding.animatedActionKey.generic`,
        defaultMessage: `Animated keyboard action key`,
        description: `Accessible label for a changing action key in keyboard onboarding`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n ? (s = t[3]) : ((s = f(`overflow-hidden`, n)), (t[2] = n), (t[3] = s));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { opacity: 1 }), (t[4] = l)) : (l = t[4]);
  let u, d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = { opacity: 0 }), (d = { opacity: 0 }), (t[5] = u), (t[6] = d))
    : ((u = t[5]), (d = t[6]));
  let p = i ? 0 : U,
    m;
  t[7] === p ? (m = t[8]) : ((m = { duration: p, ease: `easeInOut` }), (t[7] = p), (t[8] = m));
  let h;
  t[9] === r ? (h = t[10]) : ((h = ve(r)), (t[9] = r), (t[10] = h));
  let g;
  t[11] === h
    ? (g = t[12])
    : ((g = (0, H.jsx)(ke, { keycap: h, className: `size-5` })), (t[11] = h), (t[12] = g));
  let _;
  t[13] !== r || t[14] !== m || t[15] !== g
    ? ((_ = (0, H.jsx)(Te, {
        className: `size-full overflow-hidden`,
        children: (0, H.jsx)(x, {
          initial: !1,
          children: (0, H.jsx)(
            c.div,
            {
              animate: l,
              "aria-hidden": !0,
              className: `absolute inset-0 flex flex-col items-center justify-center gap-0.5`,
              exit: u,
              initial: d,
              transition: m,
              children: g,
            },
            r,
          ),
        }),
      })),
      (t[13] = r),
      (t[14] = m),
      (t[15] = g),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== o || t[18] !== _ || t[19] !== s
      ? ((v = (0, H.jsx)(`div`, { "aria-label": o, className: s, role: `img`, children: _ })),
        (t[17] = o),
        (t[18] = _),
        (t[19] = s),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
var V, H, Ve, U;
function W() {
  return (W = e(() => {
    ((V = _()),
      m(),
      s(),
      o(),
      E(),
      C(),
      _e(),
      le(),
      b(),
      Pe(),
      we(),
      Ie(),
      be(),
      (H = u()),
      (Ve = Se(0)),
      (U = 0.96));
  }))();
}
function He(e) {
  let t = (0, G.c)(15),
    { appIconMedium: n, appName: r, permissionSettingsName: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a =
        n == null
          ? null
          : (0, K.jsx)(`img`, { alt: ``, "aria-hidden": !0, className: `size-12 object-contain`, src: n })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === a
    ? (o = t[3])
    : ((o = (0, K.jsx)(`div`, {
        className: `flex size-14 shrink-0 items-center justify-center`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = o));
  let s;
  t[4] !== r || t[5] !== i
    ? ((s = (0, K.jsx)(`p`, {
        className: `text-sm text-codex-description`,
        children: (0, K.jsx)(I, {
          id: `permissions.revealApp`,
          defaultMessage: `If {appName} doesn't appear in {permissionSettingsName}, reveal it in Finder, then drag the app into the open System Settings panel`,
          values: { appName: r, permissionSettingsName: i },
          description: `Instructions for dragging the app from Finder into a macOS permission settings page when it is missing`,
        }),
      })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = s))
    : (s = t[6]);
  let c;
  t[7] === r
    ? (c = t[8])
    : ((c = (0, K.jsx)(w, {
        color: `secondary`,
        onClick: Ue,
        children: (0, K.jsx)(I, {
          id: `permissions.showAppInFinder`,
          defaultMessage: `Show {appName} in Finder`,
          values: { appName: r },
          description: `Button that reveals the current app bundle in Finder`,
        }),
      })),
      (t[7] = r),
      (t[8] = c));
  let l;
  t[9] !== s || t[10] !== c
    ? ((l = (0, K.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col items-start gap-2`,
        children: [s, c],
      })),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== o || t[13] !== l
      ? ((u = (0, K.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg border border-default bg-primary-soft-alpha p-2.5 text-start`,
          children: [o, l],
        })),
        (t[12] = o),
        (t[13] = l),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function Ue() {
  M.systemPermissions?.showPermissionSettingsAppInFinder().catch(We);
}
function We() {}
var G, K;
function Ge() {
  return (Ge = e(() => {
    ((G = _()), C(), T(), D(), (K = u()));
  }))();
}
function Ke(e) {
  let t = (0, Xe.c)(26),
    {
      appIconMedium: n,
      appName: r,
      inputMonitoringPermissionStatus: a,
      model: o,
      onOpenInputMonitoringSettings: s,
      step: c,
    } = e,
    l = P();
  if (c === `welcome`) {
    let e = a === `denied`,
      c;
    t[0] === o
      ? (c = t[1])
      : ((c = (0, q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary`,
          children:
            o === `creator-micro-v2`
              ? (0, q.jsx)(I, {
                  id: `creatorMicro.onboarding.body`,
                  defaultMessage: `Congrats on getting your hands on the original Creator Micro 2, the base platform on which the Codex Micro was built! Get ready to dial up the fun, efficiency, and tactility of your whole Codex experience!`,
                  description: `Welcome message shown when Creator Micro is detected for the first time`,
                })
              : (0, q.jsx)(I, {
                  id: `codexMicro.onboarding.body`,
                  defaultMessage: `Congrats on getting your hands on a <deviceName>kbd-1.0-codex-micro</deviceName>, a unique collaboration product between Codex & Work Louder. Get ready to dial up the fun, efficiency, and tactility on your whole Codex experience!`,
                  description: `Welcome message shown when Codex Micro is detected for the first time`,
                  values: { deviceName: Je },
                }),
        })),
        (t[0] = o),
        (t[1] = c));
    let u;
    t[2] !== n || t[3] !== r || t[4] !== a || t[5] !== l || t[6] !== o || t[7] !== e || t[8] !== s
      ? ((u = e
          ? (0, q.jsxs)(`div`, {
              className: `flex flex-col gap-3`,
              children: [
                (0, q.jsxs)(`div`, {
                  className: `flex flex-col gap-1 text-start`,
                  children: [
                    (0, q.jsx)(`span`, {
                      className: `text-sm font-medium text-default`,
                      children: (0, q.jsx)(I, {
                        id: `codexMicro.onboarding.inputMonitoring.title`,
                        defaultMessage: `Enable key presses`,
                        description: `Title for the Input Monitoring permission step in Codex Micro onboarding`,
                      }),
                    }),
                    (0, q.jsx)(`span`, {
                      className: `text-xs leading-4 text-secondary`,
                      children:
                        o === `creator-micro-v2`
                          ? (0, q.jsx)(I, {
                              id: `creatorMicro.onboarding.inputMonitoring.description`,
                              defaultMessage: `Creator Micro needs Input Monitoring permission to respond when you press a key on your keyboard`,
                              description: `Description of why Creator Micro needs Input Monitoring permission`,
                            })
                          : (0, q.jsx)(I, {
                              id: `codexMicro.onboarding.inputMonitoring.description`,
                              defaultMessage: `Codex Micro needs Input Monitoring permission to respond when you press a key on your keyboard`,
                              description: `Description of why Codex Micro needs Input Monitoring permission`,
                            }),
                    }),
                  ],
                }),
                (0, q.jsx)(He, {
                  appIconMedium: n ?? `` + new URL(`app-f483cb0295ed.png`, import.meta.url).href,
                  appName: r,
                  permissionSettingsName: l.formatMessage({
                    id: `codexMicro.onboarding.inputMonitoring.settingsName`,
                    defaultMessage: `Input Monitoring`,
                    description: `Name of the macOS Input Monitoring permission settings page`,
                  }),
                }),
                (0, q.jsx)(w, {
                  className: `justify-center self-center`,
                  color: `secondary`,
                  onClick: s,
                  size: `large`,
                  children: (0, q.jsx)(I, {
                    id: `codexMicro.onboarding.openSettings`,
                    defaultMessage: `Open System Settings`,
                    description: `Button that opens macOS Input Monitoring settings from Codex Micro onboarding`,
                  }),
                }),
              ],
            })
          : a === `granted`
            ? (0, q.jsxs)(`div`, {
                className: `flex items-center justify-center gap-2 text-sm text-chart-green`,
                children: [
                  (0, q.jsx)(`span`, {
                    className: `flex size-5 items-center justify-center rounded-full bg-chart-green/10`,
                    children: (0, q.jsx)(i, { "aria-hidden": !1, asset: L }),
                  }),
                  (0, q.jsx)(I, {
                    id: `codexMicro.onboarding.inputMonitoring.granted`,
                    defaultMessage: `Input Monitoring is ready`,
                    description: `Confirmation that Codex Micro has Input Monitoring permission`,
                  }),
                ],
              })
            : null),
        (t[2] = n),
        (t[3] = r),
        (t[4] = a),
        (t[5] = l),
        (t[6] = o),
        (t[7] = e),
        (t[8] = s),
        (t[9] = u))
      : (u = t[9]);
    let d;
    return (
      t[10] !== c || t[11] !== u
        ? ((d = (0, q.jsxs)(`div`, { className: `flex w-full flex-col gap-4`, children: [c, u] })),
          (t[10] = c),
          (t[11] = u),
          (t[12] = d))
        : (d = t[12]),
      d
    );
  }
  if (c === `agent-keys`) {
    let e;
    t[13] === o
      ? (e = t[14])
      : ((e = (0, q.jsx)(`p`, {
          className: `text-sm leading-5 text-secondary`,
          children:
            o === `creator-micro-v2`
              ? (0, q.jsx)(I, {
                  id: `creatorMicro.onboarding.agentKeys.body`,
                  defaultMessage: `The frosted Agent Keys give you a live status of your Codex agents. Single-tap a key to focus it in the background, or double-tap to bring your ChatGPT window front and center.`,
                  description: `Explanation of Creator Micro agent key behavior`,
                })
              : (0, q.jsx)(I, {
                  id: `codexMicro.onboarding.agentKeys.body`,
                  defaultMessage: `The 6 frosted Agent Keys give you a live status of your Codex chats/agents. Single-tap a key to focus it in the background, or double-tap to bring your Codex window front and center.`,
                  description: `Explanation that the six physical Codex Micro Agent Keys show status for Codex chats and agents, and how single- and double-tapping a key focuses that chat`,
                }),
        })),
        (t[13] = o),
        (t[14] = e));
    let n;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, q.jsx)(`p`, {
          className: `mb-2 text-xs font-medium text-default`,
          children: (0, q.jsx)(I, {
            id: `codexMicro.onboarding.agentKeys.legend.title`,
            defaultMessage: `Legend`,
            description: `Title for the Codex Micro agent key status legend`,
          }),
        })),
        (t[15] = n))
      : (n = t[15]);
    let r;
    t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, q.jsxs)(`div`, {
          className: `rounded-xl border border-default bg-primary-soft-alpha px-4 py-3`,
          children: [
            n,
            (0, q.jsx)(`div`, { className: `grid grid-cols-2 gap-x-5 gap-y-2`, children: Ze.map(qe) }),
          ],
        })),
        (t[16] = r))
      : (r = t[16]);
    let i;
    return (
      t[17] === e
        ? (i = t[18])
        : ((i = (0, q.jsxs)(`div`, { className: `flex w-full flex-col gap-4 text-start`, children: [e, r] })),
          (t[17] = e),
          (t[18] = i)),
      i
    );
  }
  let u;
  t[19] === o
    ? (u = t[20])
    : ((u = (0, q.jsx)(`p`, {
        className: `text-sm leading-5 text-secondary`,
        children:
          o === `creator-micro-v2`
            ? (0, q.jsx)(I, {
                id: `creatorMicro.onboarding.commandKeys.body`,
                defaultMessage: `The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick does by long-pressing the dial to open the configuration page.`,
                description: `Explanation of Creator Micro command key customization`,
              })
            : (0, q.jsx)(I, {
                id: `codexMicro.onboarding.commandKeys.body`,
                defaultMessage: `The Command Keys put your most-used Codex actions right at your fingertips. You can easily customize what your keys, dial, and joystick do by long-pressing the dial to open the configuration page.`,
                description: `Explanation of Codex Micro command key customization`,
              }),
      })),
      (t[19] = o),
      (t[20] = u));
  let d;
  t[21] === o
    ? (d = t[22])
    : ((d = (0, q.jsx)(`p`, {
        className: `text-xs leading-5 text-tertiary`,
        children: (0, q.jsx)(`em`, {
          children:
            o === `creator-micro-v2`
              ? (0, q.jsx)(I, {
                  id: `creatorMicro.onboarding.commandKeys.input`,
                  defaultMessage: `ps. Get more from your Creator Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps`,
                  description: `Link to Work Louder Input from Creator Micro onboarding`,
                  values: { input: Ye },
                })
              : (0, q.jsx)(I, {
                  id: `codexMicro.onboarding.commandKeys.input`,
                  defaultMessage: `ps. Get more from your Codex Micro with <input>Input</input>, Work Louder’s dedicated configurator for customizing controls across all your creative apps`,
                  description: `Link to Work Louder Input from Codex Micro onboarding`,
                  values: { input: Ye },
                }),
        }),
      })),
      (t[21] = o),
      (t[22] = d));
  let f;
  return (
    t[23] !== u || t[24] !== d
      ? ((f = (0, q.jsxs)(`div`, { className: `flex w-full flex-col gap-4 text-start`, children: [u, d] })),
        (t[23] = u),
        (t[24] = d),
        (t[25] = f))
      : (f = t[25]),
    f
  );
}
function qe(e) {
  let { message: t, status: n } = e,
    r = d(n);
  return (0, q.jsxs)(
    `div`,
    {
      className: `flex min-w-0 items-center gap-2 text-xs text-secondary`,
      children: [
        (0, q.jsx)(`span`, {
          "aria-hidden": !0,
          className: f(
            `size-2.5 shrink-0 rounded-full border`,
            n === `off` ? `border-text-tertiary bg-transparent` : `border-black/10 dark:border-white/15`,
          ),
          style: n === `off` ? void 0 : { backgroundColor: `#${r.toString(16).padStart(6, `0`)}` },
        }),
        (0, q.jsx)(`span`, { children: (0, q.jsx)(I, { ...t }) }),
      ],
    },
    n,
  );
}
function Je(e) {
  return (0, q.jsx)(`span`, { className: `font-mono text-default`, children: e }, `device-name`);
}
function Ye(e) {
  return (0, q.jsx)(
    `a`,
    {
      className: `cursor-interaction font-medium text-info underline underline-offset-2`,
      href: J,
      onClick: (e) => {
        re({ event: e, href: J, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
      },
      rel: `noreferrer`,
      target: `_blank`,
      children: e,
    },
    `input-link`,
  );
}
var Xe, q, J, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = _()),
      O(),
      m(),
      F(),
      C(),
      Le(),
      T(),
      oe(),
      g(),
      Ge(),
      (q = u()),
      (J = `https://worklouder.cc/micro-setup`),
      (Ze = [
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.idle`,
            defaultMessage: `White – Idle`,
            description: `Legend entry for an idle Codex Micro agent key`,
          }),
          status: `idle`,
        },
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.thinking`,
            defaultMessage: `Blue – Thinking`,
            description: `Legend entry for a thinking Codex Micro agent key`,
          }),
          status: `working`,
        },
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.complete`,
            defaultMessage: `Green – Complete`,
            description: `Legend entry for a completed Codex Micro agent key`,
          }),
          status: `unread`,
        },
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.requiresInput`,
            defaultMessage: `Amber – Requires input`,
            description: `Legend entry for a Codex Micro agent key requiring input`,
          }),
          status: `awaiting-approval`,
        },
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.error`,
            defaultMessage: `Red – Error`,
            description: `Legend entry for a Codex Micro agent key with an error`,
          }),
          status: `error`,
        },
        {
          message: l({
            id: `codexMicro.onboarding.agentKeys.legend.unassigned`,
            defaultMessage: `Off – No Assigned Agent`,
            description: `Legend entry for an unassigned Codex Micro agent key`,
          }),
          status: `off`,
        },
      ]));
  }))();
}
function $e(e) {
  let t = (0, Y.c)(39),
    {
      appIconMedium: n,
      appName: r,
      inputMonitoringPermissionStatus: i,
      model: a,
      onComplete: o,
      onCompleteAndOpenSettings: s,
      onLifecycleStep: c,
      onOpenInputMonitoringSettings: l,
    } = e,
    [u, d] = (0, et.useState)(`welcome`),
    f;
  t[0] !== o || t[1] !== c || t[2] !== u
    ? ((f = () => {
        u === `welcome`
          ? (c(`screen-continued`, u), d(`agent-keys`), c(`screen-shown`, `agent-keys`))
          : u === `agent-keys`
            ? (c(`screen-continued`, u), d(`command-keys`), c(`screen-shown`, `command-keys`))
            : (c(`flow-completed`, u), o());
      }),
      (t[0] = o),
      (t[1] = c),
      (t[2] = u),
      (t[3] = f))
    : (f = t[3]);
  let p = f,
    m;
  t[4] !== c || t[5] !== l || t[6] !== u
    ? ((m = () => {
        (c(`input-monitoring-settings-opened`, u), l());
      }),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== a || t[12] !== u || t[13] !== m
    ? ((h = (0, X.jsx)(Ke, {
        appIconMedium: n,
        appName: r,
        inputMonitoringPermissionStatus: i,
        model: a,
        onOpenInputMonitoringSettings: m,
        step: u,
      })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = i),
      (t[11] = a),
      (t[12] = u),
      (t[13] = m),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === u
    ? (g = t[16])
    : ((g =
        u === `welcome`
          ? (0, X.jsx)(I, {
              id: `codexMicro.onboarding.skip`,
              defaultMessage: `Skip`,
              description: `Button that skips the Codex Micro feature tour`,
            })
          : u === `command-keys`
            ? (0, X.jsx)(I, {
                id: `codexMicro.onboarding.settings`,
                defaultMessage: `Settings`,
                description: `Button that opens Codex Micro settings from the feature tour`,
              })
            : void 0),
      (t[15] = u),
      (t[16] = g));
  let _;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, X.jsx)(Re, {})), (t[17] = _)) : (_ = t[17]);
  let v;
  t[18] !== o || t[19] !== c || t[20] !== u
    ? ((v = () => {
        (c(`flow-dismissed`, u), o());
      }),
      (t[18] = o),
      (t[19] = c),
      (t[20] = u),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] !== s || t[23] !== c || t[24] !== u
    ? ((y =
        u === `command-keys`
          ? () => {
              (c(`flow-completed`, u), c(`settings-opened`, u), s());
            }
          : void 0),
      (t[22] = s),
      (t[23] = c),
      (t[24] = u),
      (t[25] = y))
    : (y = t[25]);
  let b;
  t[26] === u
    ? (b = t[27])
    : ((b =
        u === `welcome`
          ? (0, X.jsx)(I, {
              id: `codexMicro.onboarding.takeTour`,
              defaultMessage: `Take 2-step tour`,
              description: `Button that starts the Codex Micro feature tour`,
            })
          : u === `agent-keys`
            ? (0, X.jsx)(I, {
                id: `codexMicro.onboarding.lastStep`,
                defaultMessage: `Last step`,
                description: `Button that advances to the final Codex Micro feature tour step`,
              })
            : (0, X.jsx)(I, {
                id: `codexMicro.onboarding.build`,
                defaultMessage: `Let’s build!`,
                description: `Button that completes the Codex Micro feature tour`,
              })),
      (t[26] = u),
      (t[27] = b));
  let x;
  t[28] !== a || t[29] !== u
    ? ((x =
        u === `welcome`
          ? a === `creator-micro-v2`
            ? (0, X.jsx)(I, {
                id: `creatorMicro.onboarding.title`,
                defaultMessage: `Welcome to Creator Micro`,
                description: `Title shown when Creator Micro is detected for the first time`,
              })
            : (0, X.jsx)(I, {
                id: `codexMicro.onboarding.title`,
                defaultMessage: `Welcome to Codex Micro`,
                description: `Title shown when Codex Micro is detected for the first time`,
              })
          : u === `agent-keys`
            ? (0, X.jsx)(I, {
                id: `codexMicro.onboarding.agentKeys.title`,
                defaultMessage: `The Agent Keys`,
                description: `Title for the tour step explaining the six physical Agent Keys on the Codex Micro hardware keypad`,
              })
            : (0, X.jsx)(I, {
                id: `codexMicro.onboarding.commandKeys.title`,
                defaultMessage: `The Command Keys`,
                description: `Title for the Codex Micro command key tour step`,
              })),
      (t[28] = a),
      (t[29] = u),
      (t[30] = x))
    : (x = t[30]);
  let S;
  return (
    t[31] !== p || t[32] !== h || t[33] !== g || t[34] !== v || t[35] !== y || t[36] !== b || t[37] !== x
      ? ((S = (0, X.jsx)(ae, {
          body: h,
          closeButtonClassName: `dark:text-white`,
          closeButtonTone: `dark`,
          dismissLabel: g,
          media: _,
          mediaClassName: `h-[266px] bg-surface-secondary dark:bg-primary-soft-alpha`,
          onDismiss: v,
          onSecondaryAction: y,
          onPrimaryAction: p,
          primaryActionLabel: b,
          title: x,
        })),
        (t[31] = p),
        (t[32] = h),
        (t[33] = g),
        (t[34] = v),
        (t[35] = y),
        (t[36] = b),
        (t[37] = x),
        (t[38] = S))
      : (S = t[38]),
    S
  );
}
var Y, et, X;
function tt() {
  return (tt = e(() => {
    ((Y = _()), (et = a()), C(), z(), W(), Qe(), (X = u()));
  }))();
}
function nt(e) {
  let t = (0, Z.c)(2),
    { dismissAnnouncement: n } = e,
    r = M.codexMicro;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(rt, { codexMicro: r, dismissAnnouncement: n })), (t[0] = n), (t[1] = i)),
    i
  );
}
function rt(e) {
  let n = (0, Z.c)(33),
    { codexMicro: r, dismissAnnouncement: i } = e,
    a = t(v),
    o = S(),
    s = y(),
    { data: c } = j(ue),
    { status: l } = j(de),
    u = j(fe),
    d = j(pe),
    f = j(he),
    { platform: m } = ie(),
    h = j(ce),
    g;
  n[0] !== l || n[1] !== d || n[2] !== f || n[3] !== h
    ? ((g = me({ deviceStatus: l, hasEverBeenDetected: d, onboardingState: f }) && h === !0),
      (n[0] = l),
      (n[1] = d),
      (n[2] = f),
      (n[3] = h),
      (n[4] = g))
    : (g = n[4]);
  let _ = g,
    b = _ && m === `macOS`,
    x;
  n[5] === r ? (x = n[6]) : ((x = () => r.getInputMonitoringPermissionStatus()), (n[5] = r), (n[6] = x));
  let C;
  n[7] !== b || n[8] !== x
    ? ((C = {
        enabled: b,
        queryFn: x,
        queryKey: Ee,
        refetchInterval: De,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
        staleTime: ee.FIVE_SECONDS,
      }),
      (n[7] = b),
      (n[8] = x),
      (n[9] = C))
    : (C = n[9]);
  let w = p(C),
    T = _ && (m !== `macOS` || !w.isPending),
    E,
    D;
  if (
    (n[10] !== T || n[11] !== a || n[12] !== o
      ? ((E = () => {
          if (T) return ye(a, o);
        }),
        (D = [T, a, o]),
        (n[10] = T),
        (n[11] = a),
        (n[12] = o),
        (n[13] = E),
        (n[14] = D))
      : ((E = n[13]), (D = n[14])),
    (0, Q.useEffect)(E, D),
    !T)
  )
    return null;
  let O;
  n[15] !== i || n[16] !== a
    ? ((O = () => {
        (a.set(he, `complete`), a.set(pe, !0), i());
      }),
      (n[15] = i),
      (n[16] = a),
      (n[17] = O))
    : (O = n[17]);
  let k = O,
    A;
  n[18] !== k || n[19] !== s
    ? ((A = () => {
        (k(), s(`/settings/codex-micro`));
      }),
      (n[18] = k),
      (n[19] = s),
      (n[20] = A))
    : (A = n[20]);
  let M = A,
    N = m === `macOS` ? (w.data ?? `unavailable`) : `unavailable`,
    P = c?.appIconMedium ?? null,
    F = c?.appName ?? `ChatGPT`,
    I = m === `macOS` ? N : `not-applicable`,
    L = u ?? `codex-micro`,
    R;
  n[21] === r
    ? (R = n[22])
    : ((R = () => {
        r.openInputMonitoringSettings();
      }),
      (n[21] = r),
      (n[22] = R));
  let z;
  return (
    n[23] !== r ||
    n[24] !== k ||
    n[25] !== M ||
    n[26] !== N ||
    n[27] !== F ||
    n[28] !== I ||
    n[29] !== L ||
    n[30] !== R ||
    n[31] !== P
      ? ((z = (0, $.jsx)(it, {
          appIconMedium: P,
          appName: F,
          codexMicro: r,
          inputMonitoringAnalyticsState: I,
          inputMonitoringPermissionStatus: N,
          model: L,
          onComplete: k,
          onCompleteAndOpenSettings: M,
          onOpenInputMonitoringSettings: R,
        })),
        (n[23] = r),
        (n[24] = k),
        (n[25] = M),
        (n[26] = N),
        (n[27] = F),
        (n[28] = I),
        (n[29] = L),
        (n[30] = R),
        (n[31] = P),
        (n[32] = z))
      : (z = n[32]),
    z
  );
}
function it(e) {
  let n = (0, Z.c)(24),
    {
      appIconMedium: r,
      appName: i,
      codexMicro: a,
      inputMonitoringAnalyticsState: o,
      inputMonitoringPermissionStatus: s,
      model: c,
      onComplete: l,
      onCompleteAndOpenSettings: u,
      onOpenInputMonitoringSettings: d,
    } = e,
    f = t(v),
    [p] = (0, Q.useState)(ot),
    [m] = (0, Q.useState)(o),
    [h] = (0, Q.useState)(c),
    g;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = Promise.resolve()), (n[0] = g)) : (g = n[0]);
  let _ = (0, Q.useRef)(g),
    y;
  n[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = new Set()), (n[1] = y)) : (y = n[1]);
  let b = (0, Q.useRef)(y),
    x = (0, Q.useRef)(o),
    S;
  n[2] !== a || n[3] !== p || n[4] !== o || n[5] !== f
    ? ((S = (e, t, n) => {
        let r = n === void 0 ? o : n;
        _.current = _.current
          .then(async () => {
            (await a.ownsPrimaryWindow()) &&
              ((e === `screen-shown` && b.current.has(t)) ||
                (e !== `screen-shown` &&
                  !b.current.has(t) &&
                  (b.current.add(t),
                  B(f, { flowId: p, inputMonitoringPermissionState: r, screen: t, step: `screen-shown` })),
                b.current.add(t),
                B(f, { flowId: p, inputMonitoringPermissionState: r, screen: t, step: e })));
          })
          .catch(at);
      }),
      (n[2] = a),
      (n[3] = p),
      (n[4] = o),
      (n[5] = f),
      (n[6] = S))
    : (S = n[6]);
  let C = k(S),
    w,
    T;
  (n[7] !== m || n[8] !== C
    ? ((w = () => {
        C(`screen-shown`, `welcome`, m);
      }),
      (T = [m, C]),
      (n[7] = m),
      (n[8] = C),
      (n[9] = w),
      (n[10] = T))
    : ((w = n[9]), (T = n[10])),
    (0, Q.useEffect)(w, T));
  let E, D;
  (n[11] !== o || n[12] !== C
    ? ((E = () => {
        let e = x.current;
        ((x.current = o),
          e !== `granted` && o === `granted` && C(`input-monitoring-permission-granted`, `welcome`, o));
      }),
      (D = [o, C]),
      (n[11] = o),
      (n[12] = C),
      (n[13] = E),
      (n[14] = D))
    : ((E = n[13]), (D = n[14])),
    (0, Q.useEffect)(E, D));
  let O;
  return (
    n[15] !== r ||
    n[16] !== i ||
    n[17] !== s ||
    n[18] !== C ||
    n[19] !== l ||
    n[20] !== u ||
    n[21] !== d ||
    n[22] !== h
      ? ((O = (0, $.jsx)($e, {
          appIconMedium: r,
          appName: i,
          inputMonitoringPermissionStatus: s,
          model: h,
          onComplete: l,
          onCompleteAndOpenSettings: u,
          onLifecycleStep: C,
          onOpenInputMonitoringSettings: d,
        })),
        (n[15] = r),
        (n[16] = i),
        (n[17] = s),
        (n[18] = C),
        (n[19] = l),
        (n[20] = u),
        (n[21] = d),
        (n[22] = h),
        (n[23] = O))
      : (O = n[23]),
    O
  );
}
function at() {}
function ot() {
  return crypto.randomUUID();
}
var Z, Q, $;
function st() {
  return (st = e(() => {
    ((Z = _()),
      N(),
      E(),
      (Q = a()),
      h(),
      le(),
      te(),
      b(),
      ne(),
      D(),
      n(),
      r(),
      A(),
      xe(),
      R(),
      Me(),
      be(),
      tt(),
      ge(),
      ($ = u()));
  }))();
}
st();
export { nt as CodexMicroOnboardingHost };
//# sourceMappingURL=codex-micro-onboarding-host-ee8f542a75ab.js.map
