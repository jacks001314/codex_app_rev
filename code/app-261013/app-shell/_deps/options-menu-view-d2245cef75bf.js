import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $W as r,
  $X as i,
  $Z as a,
  $v as o,
  ADt as s,
  AG as c,
  AH as l,
  AO as u,
  AQ as d,
  Af as f,
  BE as p,
  BJ as m,
  BV as h,
  Bf as g,
  C$ as _,
  CO as v,
  CQ as y,
  CS as b,
  CT as x,
  Cf as S,
  Cwt as C,
  Cz as w,
  D2 as T,
  DX as E,
  Df as D,
  Dmt as O,
  E$ as k,
  EX as A,
  Ef as j,
  Emt as M,
  GD as N,
  GO as P,
  GT as F,
  Gb as I,
  Gf as L,
  HE as ee,
  Hf as R,
  IDt as z,
  J$ as B,
  JQ as V,
  Jb as H,
  Jf as te,
  KD as U,
  KO as ne,
  KT as W,
  Kb as G,
  Kf as re,
  Lh as ie,
  M$ as ae,
  MO as K,
  Mf as oe,
  Mz as se,
  N$ as q,
  N5 as ce,
  Nz as J,
  O2 as le,
  OT as ue,
  OX as de,
  Of as fe,
  Omt as pe,
  P$ as me,
  PG as he,
  Qf as ge,
  Qv as _e,
  RE as ve,
  Rh as ye,
  Rnt as be,
  SJ as xe,
  SQ as Se,
  Sj as Ce,
  Swt as we,
  T$ as Te,
  TJ as Ee,
  TO as Y,
  TT as De,
  TX as Oe,
  Tf as ke,
  Tz as Ae,
  U$ as je,
  U2 as Me,
  UD as Ne,
  UE as Pe,
  Uf as Fe,
  VDt as Ie,
  VE as Le,
  Vf as Re,
  W$ as ze,
  W2 as Be,
  Wf as Ve,
  X$ as He,
  XQ as Ue,
  Xb as We,
  Xot as Ge,
  Xx as Ke,
  Y$ as qe,
  YQ as Je,
  YT as Ye,
  Yb as Xe,
  Yot as Ze,
  Yx as Qe,
  ZT as $e,
  Zf as et,
  _2 as tt,
  _C as nt,
  _Mt as rt,
  _T as it,
  _X as at,
  _b as ot,
  _wt as st,
  _x as ct,
  a$ as lt,
  aD as ut,
  aQ as dt,
  bT as ft,
  bz as pt,
  cC as mt,
  cE as ht,
  cQ as gt,
  cz as _t,
  eQ as vt,
  eZ as yt,
  g2 as bt,
  gC as xt,
  gMt as X,
  gPt as St,
  gb as Ct,
  gwt as wt,
  gx as Tt,
  h2 as Et,
  hPt as Dt,
  i3 as Ot,
  iD as kt,
  ij as At,
  j$ as jt,
  jDt as Mt,
  jO as Nt,
  jf as Pt,
  kQ as Ft,
  kf as It,
  lC as Lt,
  m4 as Rt,
  mT as zt,
  mX as Bt,
  mx as Vt,
  n0 as Ht,
  nE as Ut,
  nht as Wt,
  nk as Gt,
  not as Kt,
  o$ as qt,
  oQ as Jt,
  ob as Yt,
  owt as Xt,
  p4 as Zt,
  pX as Qt,
  q$ as $t,
  qQ as en,
  qb as tn,
  qf as nn,
  r3 as rn,
  rE as an,
  rj as on,
  rst as sn,
  sE as cn,
  sQ as ln,
  sb as un,
  sj as dn,
  swt as fn,
  sz as pn,
  t0 as mn,
  t3 as hn,
  tMt as gn,
  tk as _n,
  v2 as vn,
  vT as yn,
  vX as bn,
  vx as xn,
  vzt as Sn,
  w$ as Cn,
  wQ as wn,
  wf as Tn,
  xMt as En,
  xQ as Dn,
  xT as On,
  xz as kn,
  yMt as An,
  yT as jn,
  yzt as Mn,
  zE as Nn,
  zJ as Pn,
  zf as Fn,
} from "./app-shared-bbfeca5e5737.js";
import { n as In, t as Ln } from "./back-forward-navigation-buttons-93aa83d145f3.js";
import { n as Rn, t as zn } from "./radio-group-11cefafc81df.js";
import { n as Bn, t as Vn } from "./toolbar-row-2c9fc5d31463.js";
import { l as Hn, u as Un } from "./browser-clear-browsing-data-dialog-view-380dcf867bd3.js";
import { n as Wn, t as Gn } from "./profile-21feb2cb6df5.js";
function Kn(e) {
  let t = (0, qn.c)(12),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ floating: a, className: r, securityWarning: o, ...i } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let s = a !== void 0 && a,
    c = o !== void 0 && o,
    l = s ? `rounded-full` : `rounded-l-[10px]`,
    u = c ? `w-[104px] gap-1.5 px-2 text-xs font-medium whitespace-nowrap text-danger` : `w-7 text-default`,
    d;
  t[5] !== r || t[6] !== l || t[7] !== u
    ? ((d = X(
        `h-7 shrink-0 justify-center overflow-hidden transition-[background-color] hover:bg-text/5 focus-visible:bg-text/5 aria-expanded:bg-text/5`,
        l,
        u,
        r,
      )),
      (t[5] = r),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== i || t[10] !== d
      ? ((f = (0, Jn.jsx)(n, { ...i, className: d, unstyled: !0, focusRing: `inset` })),
        (t[9] = i),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((qn = Sn()), rt(), hn(), (Jn = En()));
  }))();
}
var Xn;
function Zn() {
  return (Zn = e(() => {
    (vn(),
      bt(),
      Ht(),
      te(),
      He(),
      B(),
      me(),
      ae(),
      k(),
      Cn(),
      L(),
      lt(),
      Je(),
      en(),
      Fe(),
      ie(),
      y(),
      Dn(),
      ln(),
      dt(),
      Re(),
      Fn(),
      (Xn = {
        geolocation: { 16: Ve, 20: ye },
        "geolocation-approximate": { 16: Ve, 20: ye },
        camera: { 16: R, 20: g },
        microphone: { 16: wn, 20: Se },
        notifications: { 16: tt, 20: Et },
        midi: { 16: gt, 20: Jt },
        "clipboard-read": { 16: mn, 20: nn },
        "clipboard-write": { 16: mn, 20: nn },
        "persistent-storage": { 16: qe, 20: $t },
        "storage-access": { 16: qe, 20: $t },
        "top-level-storage-access": { 16: qe, 20: $t },
        "file-system-access": { 16: qe, 20: $t },
        "hand-tracking": { 16: Te, 20: _ },
        "keyboard-lock": { 16: re, 20: qt },
        "local-network-access": { 16: q, 20: jt },
        "local-network": { 16: q, 20: jt },
        "loopback-network": { 16: Ue, 20: V },
        "window-management": { 16: Ue, 20: V },
      }));
  }))();
}
function Qn(e) {
  let t = (0, er.c)(4),
    { permissions: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = n.map($n)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, tr.jsx)(`ul`, { className: `flex flex-col gap-1 text-sm`, children: r })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function $n(e, t) {
  let n = nr[e.name];
  return (
    e.name === `camera` && e.panTiltZoom
      ? (n = nr[`camera-pan-tilt-zoom`])
      : e.name === `midi` && e.sysex && (n = nr[`midi-sysex`]),
    (0, tr.jsxs)(
      `li`,
      {
        className: `flex items-start gap-2`,
        children: [
          (0, tr.jsx)(se, { className: `shrink-0`, asset: Xn[e.name]?.[20] ?? A, "aria-hidden": `true` }),
          (0, tr.jsxs)(`div`, {
            children: [
              n == null
                ? (0, tr.jsx)(z, {
                    id: `browser.permission.capability.unknown`,
                    defaultMessage: `Use {permission}`,
                    description: `Requested action for a permission with no recognized display label; permission is the native capability name`,
                    values: { permission: (0, tr.jsx)(`bdi`, { children: e.name }) },
                  })
                : (0, tr.jsx)(z, { ...n }),
              e.allowWithoutUserGesture
                ? (0, tr.jsx)(`p`, {
                    children: (0, tr.jsx)(z, {
                      id: `browser.permission.noGesture`,
                      defaultMessage: `Includes fullscreen without a user action`,
                      description: `Explains that the site requests permission to enter fullscreen without a user gesture`,
                    }),
                  })
                : null,
              e.willBeSanitized === !1
                ? (0, tr.jsx)(`p`, {
                    children: (0, tr.jsx)(z, {
                      id: `browser.permission.unsanitized`,
                      defaultMessage: `Includes unfiltered clipboard content`,
                      description: `Explains that clipboard data will not be sanitized`,
                    }),
                  })
                : null,
              e.hasUserGesture === !1
                ? (0, tr.jsx)(`p`, {
                    children: (0, tr.jsx)(z, {
                      id: `browser.permission.clipboardNoGesture`,
                      defaultMessage: `Clipboard access without a user action`,
                      description: `Explains a clipboard request without user activation`,
                    }),
                  })
                : null,
              e.requestedOrigin == null
                ? null
                : (0, tr.jsx)(`p`, {
                    children: (0, tr.jsx)(z, {
                      id: `browser.permission.storageOrigin`,
                      defaultMessage: `Storage for: {origin}`,
                      description: `Identifies the additional origin named by a top-level storage access request`,
                      values: {
                        origin: (0, tr.jsx)(`bdi`, {
                          className: `break-all select-text`,
                          children: e.requestedOrigin,
                        }),
                      },
                    }),
                  }),
            ],
          }),
        ],
      },
      t,
    )
  );
}
var er, tr, nr;
function rr() {
  return (rr = e(() => {
    ((er = Sn()),
      Oe(),
      Mt(),
      J(),
      Zn(),
      (tr = En()),
      (nr = s({
        "camera-pan-tilt-zoom": {
          id: `browser.permission.capability.cameraPanTiltZoom`,
          defaultMessage: `Use & move your camera`,
          description: `Requested website action including camera access and pan, tilt, and zoom control`,
        },
        "midi-sysex": {
          id: `browser.permission.capability.midiSysex`,
          defaultMessage: `Control and reprogram your MIDI devices`,
          description: `Requested website action including MIDI system-exclusive access`,
        },
        geolocation: {
          id: `browser.permission.capability.geolocation`,
          defaultMessage: `Know your location`,
          description: `Requested website action shown as a standalone list item: Know your location`,
        },
        "geolocation-approximate": {
          id: `browser.permission.capability.geolocation-approximate`,
          defaultMessage: `Know your approximate location`,
          description: `Requested website action shown as a standalone list item: Know your approximate location`,
        },
        camera: {
          id: `browser.permission.capability.camera`,
          defaultMessage: `Use your cameras`,
          description: `Requested website action shown as a standalone list item: Use your cameras`,
        },
        microphone: {
          id: `browser.permission.capability.microphone`,
          defaultMessage: `Use your microphones`,
          description: `Requested website action shown as a standalone list item: Use your microphones`,
        },
        notifications: {
          id: `browser.permission.capability.notifications`,
          defaultMessage: `Show notifications`,
          description: `Requested website action shown as a standalone list item: Show notifications`,
        },
        midi: {
          id: `browser.permission.capability.midi`,
          defaultMessage: `Use your MIDI devices`,
          description: `Requested website action shown as a standalone list item: Use your MIDI devices`,
        },
        "clipboard-read": {
          id: `browser.permission.capability.clipboard-read`,
          defaultMessage: `See text and images copied to the clipboard`,
          description: `Requested website action shown as a standalone list item: See text and images copied to the clipboard`,
        },
        "clipboard-write": {
          id: `browser.permission.capability.clipboard-write`,
          defaultMessage: `Copy text and images to the clipboard`,
          description: `Requested website action shown as a standalone list item: Copy text and images to the clipboard`,
        },
        "persistent-storage": {
          id: `browser.permission.capability.persistent-storage`,
          defaultMessage: `Store files on this device`,
          description: `Requested website action shown as a standalone list item: Store files on this device`,
        },
        "storage-access": {
          id: `browser.permission.capability.storage-access`,
          defaultMessage: `Access cookies and site data`,
          description: `Requested website action shown as a standalone list item: Access cookies and site data`,
        },
        "top-level-storage-access": {
          id: `browser.permission.capability.top-level-storage-access`,
          defaultMessage: `Access cookies and site data for another site`,
          description: `Requested website action shown as a standalone list item: Access cookies and site data for another site`,
        },
        ar: {
          id: `browser.permission.capability.ar`,
          defaultMessage: `Create a 3D map of your surroundings and track camera position`,
          description: `Requested website action shown as a standalone list item: Create a 3D map of your surroundings and track camera position`,
        },
        vr: {
          id: `browser.permission.capability.vr`,
          defaultMessage: `Use virtual reality devices and data`,
          description: `Requested website action shown as a standalone list item: Use virtual reality devices and data`,
        },
        "captured-surface-control": {
          id: `browser.permission.capability.captured-surface-control`,
          defaultMessage: `Scroll and zoom the contents of your shared tab`,
          description: `Requested website action shown as a standalone list item: Scroll and zoom the contents of your shared tab`,
        },
        "disk-quota": {
          id: `browser.permission.capability.disk-quota`,
          defaultMessage: `Store files on this device`,
          description: `Requested website action shown as a standalone list item: Store files on this device`,
        },
        "file-system-access": {
          id: `browser.permission.capability.file-system-access`,
          defaultMessage: `Edit files on this device`,
          description: `Requested website action shown as a standalone list item: Edit files on this device`,
        },
        "hand-tracking": {
          id: `browser.permission.capability.hand-tracking`,
          defaultMessage: `Track your hands`,
          description: `Requested website action shown as a standalone list item: Track your hands`,
        },
        "identity-provider": {
          id: `browser.permission.capability.identity-provider`,
          defaultMessage: `Use your accounts to log in to websites`,
          description: `Requested website action shown as a standalone list item: Use your accounts to log in to websites`,
        },
        "idle-detection": {
          id: `browser.permission.capability.idle-detection`,
          defaultMessage: `Know when you’re actively using this device`,
          description: `Requested website action shown as a standalone list item: Know when you’re actively using this device`,
        },
        "keyboard-lock": {
          id: `browser.permission.capability.keyboard-lock`,
          defaultMessage: `Override some keys on your keyboard, like Esc`,
          description: `Requested website action shown as a standalone list item: Override some keys on your keyboard, like Esc`,
        },
        "local-fonts": {
          id: `browser.permission.capability.local-fonts`,
          defaultMessage: `Use the fonts on your computer so you can create high-fidelity content`,
          description: `Requested website action shown as a standalone list item: Use the fonts on your computer so you can create high-fidelity content`,
        },
        "local-network-access": {
          id: `browser.permission.capability.local-network-access`,
          defaultMessage: `Access other devices on your local network`,
          description: `Requested website action shown as a standalone list item: Access other devices on your local network`,
        },
        "local-network": {
          id: `browser.permission.capability.local-network`,
          defaultMessage: `Access other devices on your local network`,
          description: `Requested website action shown as a standalone list item: Access other devices on your local network`,
        },
        "loopback-network": {
          id: `browser.permission.capability.loopback-network`,
          defaultMessage: `Access other apps and services on this device`,
          description: `Requested website action shown as a standalone list item: Access other apps and services on this device`,
        },
        "multiple-downloads": {
          id: `browser.permission.capability.multiple-downloads`,
          defaultMessage: `Download multiple files`,
          description: `Requested website action shown as a standalone list item: Download multiple files`,
        },
        "pointer-lock": {
          id: `browser.permission.capability.pointer-lock`,
          defaultMessage: `Lock and use your mouse`,
          description: `Requested website action shown as a standalone list item: Lock and use your mouse`,
        },
        "protected-media-identifier": {
          id: `browser.permission.capability.protected-media-identifier`,
          defaultMessage: `Know your unique device identifier`,
          description: `Requested website action shown as a standalone list item: Know your unique device identifier`,
        },
        "register-protocol-handler": {
          id: `browser.permission.capability.register-protocol-handler`,
          defaultMessage: `Open links for a protocol`,
          description: `Requested website action shown as a standalone list item: Open links for a protocol`,
        },
        sensors: {
          id: `browser.permission.capability.sensors`,
          defaultMessage: `Use your motion sensors`,
          description: `Requested website action shown as a standalone list item: Use your motion sensors`,
        },
        "web-app-installation": {
          id: `browser.permission.capability.web-app-installation`,
          defaultMessage: `Be able to install web apps`,
          description: `Requested website action shown as a standalone list item: Be able to install web apps`,
        },
        "window-management": {
          id: `browser.permission.capability.window-management`,
          defaultMessage: `Manage windows on all your displays`,
          description: `Requested website action shown as a standalone list item: Manage windows on all your displays`,
        },
        fullscreen: {
          id: `browser.permission.capability.fullscreen`,
          defaultMessage: `Enter fullscreen`,
          description: `Requested website action shown as a standalone list item: Enter fullscreen`,
        },
        "speaker-selection": {
          id: `browser.permission.capability.speaker-selection`,
          defaultMessage: `Select audio output devices`,
          description: `Requested website action shown as a standalone list item: Select audio output devices`,
        },
        accelerometer: {
          id: `browser.permission.capability.accelerometer`,
          defaultMessage: `Use your accelerometer`,
          description: `Requested website action shown as a standalone list item: Use your accelerometer`,
        },
        gyroscope: {
          id: `browser.permission.capability.gyroscope`,
          defaultMessage: `Use your gyroscope`,
          description: `Requested website action shown as a standalone list item: Use your gyroscope`,
        },
        magnetometer: {
          id: `browser.permission.capability.magnetometer`,
          defaultMessage: `Use your magnetometer`,
          description: `Requested website action shown as a standalone list item: Use your magnetometer`,
        },
        "ambient-light-sensor": {
          id: `browser.permission.capability.ambient-light-sensor`,
          defaultMessage: `Use your ambient light sensor`,
          description: `Requested website action shown as a standalone list item: Use your ambient light sensor`,
        },
        "payment-handler": {
          id: `browser.permission.capability.payment-handler`,
          defaultMessage: `Handle payments`,
          description: `Requested website action shown as a standalone list item: Handle payments`,
        },
        nfc: {
          id: `browser.permission.capability.nfc`,
          defaultMessage: `Use your NFC devices`,
          description: `Requested website action shown as a standalone list item: Use your NFC devices`,
        },
        "display-capture": {
          id: `browser.permission.capability.display-capture`,
          defaultMessage: `Capture your screen`,
          description: `Requested website action shown as a standalone list item: Capture your screen`,
        },
        "background-sync": {
          id: `browser.permission.capability.background-sync`,
          defaultMessage: `Sync data in the background`,
          description: `Requested website action shown as a standalone list item: Sync data in the background`,
        },
        "periodic-background-sync": {
          id: `browser.permission.capability.periodic-background-sync`,
          defaultMessage: `Periodically sync data in the background`,
          description: `Requested website action shown as a standalone list item: Periodically sync data in the background`,
        },
        push: {
          id: `browser.permission.capability.push`,
          defaultMessage: `Receive push messages`,
          description: `Requested website action shown as a standalone list item: Receive push messages`,
        },
        "screen-wake-lock": {
          id: `browser.permission.capability.screen-wake-lock`,
          defaultMessage: `Keep the screen awake`,
          description: `Capability requested by a website in its native consent prompt: Keep the screen awake`,
        },
      })));
  }))();
}
function ir(e) {
  let t = (0, mr.c)(104),
    { prompt: r, browserHost: i, inAddressBar: a, floating: o } = e,
    s = a !== void 0 && a,
    c = o !== void 0 && o,
    l = Ie(),
    u = (0, hr.useId)(),
    d = (0, hr.useId)(),
    f = (0, hr.useRef)(1 / 0),
    [m, h] = (0, hr.useState)(r.presentation === `normal`),
    [g, _] = (0, hr.useState)(r.geolocation?.initialAccuracy),
    [v, y] = (0, hr.useState)(null),
    b = v != null,
    [x, S] = (0, hr.useState)(!1),
    C = s ? Kn : n,
    w;
  t[0] !== l || t[1] !== r.requestingOrigin
    ? ((w = l.formatMessage(
        {
          id: `browser.permission.openForSite`,
          defaultMessage: `Website permission request from {site}`,
          description: `Accessible label for the address bar indicator, identifying the site requesting website permission`,
        },
        { site: r.requestingOrigin },
      )),
      (t[0] = l),
      (t[1] = r.requestingOrigin),
      (t[2] = w))
    : (w = t[2]);
  let T = w,
    E =
      r.variant === `previously-granted` ||
      r.variant === `previously-denied` ||
      r.variant === `administrator-granted` ||
      r.variant === `administrator-denied`
        ? [`dismiss`, `allow`, `allow-this-time`, `deny`]
        : [`allow`, `allow-this-time`, `deny`],
    D;
  t[3] !== r.browserTabId || t[4] !== r.conversationId || t[5] !== r.id || t[6] !== r.mountGeneration
    ? ((D = {
        id: r.id,
        browserTabId: r.browserTabId,
        conversationId: r.conversationId,
        mountGeneration: r.mountGeneration,
      }),
      (t[3] = r.browserTabId),
      (t[4] = r.conversationId),
      (t[5] = r.id),
      (t[6] = r.mountGeneration),
      (t[7] = D))
    : (D = t[7]);
  let O = D,
    k;
  t[8] !== i || t[9] !== b || t[10] !== O
    ? ((k = async (e) => {
        if (!b) {
          if (e === `settings` || e.action !== `dismiss`) {
            let e = performance.now(),
              t = e < f.current;
            if (((f.current = e + _r), t)) return;
          }
          (y(e === `settings` ? e : e.action), S(!1));
          try {
            S(
              e === `settings`
                ? !(await i.openPermissionSystemSettings(O))
                : !(await i.respondToPermissionPrompt(O, e)),
            );
          } catch {
            S(!0);
          }
          y(null);
        }
      }),
      (t[8] = i),
      (t[9] = b),
      (t[10] = O),
      (t[11] = k))
    : (k = t[11]);
  let A = k,
    j;
  t[12] !== r.availableActions || t[13] !== A
    ? ((j = () => {
        r.availableActions.includes(`dismiss`) && A({ action: `dismiss` });
      }),
      (t[12] = r.availableActions),
      (t[13] = A),
      (t[14] = j))
    : (j = t[14]);
  let M = j,
    N,
    P;
  (t[15] === m
    ? ((N = t[16]), (P = t[17]))
    : ((N = () => {
        if (m)
          return St.subscribe(`electron-window-focus-changed`, (e) => {
            let { isFocused: t } = e;
            f.current = t ? performance.now() + _r : 1 / 0;
          });
      }),
      (P = [m]),
      (t[15] = m),
      (t[16] = N),
      (t[17] = P)),
    (0, hr.useEffect)(N, P));
  let F = ve,
    I;
  t[18] === M
    ? (I = t[19])
    : ((I = (e) => {
        e ? h(!0) : M();
      }),
      (t[18] = M),
      (t[19] = I));
  let L;
  t[20] !== c || t[21] !== s
    ? ((L = s ? { floating: c } : {}), (t[20] = c), (t[21] = s), (t[22] = L))
    : (L = t[22]);
  let R = r.permissions.length === 1 ? (Xn[r.permissions[0].name]?.[16] ?? de) : de,
    B;
  t[23] === R
    ? (B = t[24])
    : ((B = (0, gr.jsx)(se, { className: `shrink-0`, asset: R })), (t[23] = R), (t[24] = B));
  let V;
  t[25] !== C || t[26] !== L || t[27] !== B || t[28] !== T
    ? ((V = (0, gr.jsx)(C, {
        ...L,
        "aria-label": T,
        color: `ghostSecondary`,
        size: `compact`,
        "data-browser-sidebar-skip-address-commit": `true`,
        onPointerDown: fr,
        onClick: dr,
        children: B,
      })),
      (t[25] = C),
      (t[26] = L),
      (t[27] = B),
      (t[28] = T),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== m || t[31] !== V || t[32] !== T
    ? ((H = (0, gr.jsx)(ee, {
        asChild: !0,
        children: (0, gr.jsx)(pn, {
          tooltipContent: T,
          side: `bottom`,
          cloneCustomTrigger: !0,
          triggerPopupOpen: m,
          children: V,
        }),
      })),
      (t[30] = m),
      (t[31] = V),
      (t[32] = T),
      (t[33] = H))
    : (H = t[33]);
  let te = p,
    U = ur,
    ne = lr,
    W;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (e) => {
        (e.preventDefault(), (f.current = performance.now() + _r));
      }),
      (t[34] = W))
    : (W = t[34]);
  let G = cr,
    re = sr,
    ie = vr[r.variant],
    ae;
  if (t[35] !== r.requestingOrigin) {
    let e;
    (t[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = /^https:\/\//), (t[37] = e)) : (e = t[37]),
      (ae = r.requestingOrigin.replace(e, ``)),
      (t[35] = r.requestingOrigin),
      (t[36] = ae));
  } else ae = t[36];
  let K;
  t[38] === ae
    ? (K = t[39])
    : ((K = { site: (0, gr.jsx)(`bdi`, { className: `break-all select-text`, children: ae }) }),
      (t[38] = ae),
      (t[39] = K));
  let oe;
  t[40] !== ie || t[41] !== K
    ? ((oe = (0, gr.jsx)(z, { ...ie, values: K })), (t[40] = ie), (t[41] = K), (t[42] = oe))
    : (oe = t[42]);
  let q;
  t[43] !== oe || t[44] !== u
    ? ((q = (0, gr.jsx)(Le, { id: u, className: `min-w-0`, children: oe })),
      (t[43] = oe),
      (t[44] = u),
      (t[45] = q))
    : (q = t[45]);
  let ce;
  t[46] !== M || t[47] !== l || t[48] !== b || t[49] !== r.availableActions
    ? ((ce = r.availableActions.includes(`dismiss`)
        ? (0, gr.jsx)(n, {
            "aria-label": l.formatMessage({
              id: `browser.permission.close`,
              defaultMessage: `Close permission request`,
              description: `Closes website consent without saving a denial`,
            }),
            color: `ghostSecondary`,
            size: `compact`,
            uniform: !0,
            disabled: b,
            onClick: M,
            children: (0, gr.jsx)(xe, {}),
          })
        : null),
      (t[46] = M),
      (t[47] = l),
      (t[48] = b),
      (t[49] = r.availableActions),
      (t[50] = ce))
    : (ce = t[50]);
  let J;
  t[51] !== q || t[52] !== ce
    ? ((J = (0, gr.jsxs)(`div`, { className: `flex items-start justify-between gap-2`, children: [q, ce] })),
      (t[51] = q),
      (t[52] = ce),
      (t[53] = J))
    : (J = t[53]);
  let le;
  t[54] !== r.embeddingOrigin || t[55] !== r.requestingOrigin
    ? ((le =
        r.embeddingOrigin === r.requestingOrigin
          ? null
          : (0, gr.jsx)(z, {
              id: `browser.permission.embeddedIn`,
              defaultMessage: `Embedded in {origin}`,
              description: `Identifies the top-level site embedding the website requesting permission`,
              values: {
                origin: (0, gr.jsx)(`bdi`, {
                  className: `break-all select-text`,
                  children: r.embeddingOrigin.replace(/^https:\/\//, ``),
                }),
              },
            })),
      (t[54] = r.embeddingOrigin),
      (t[55] = r.requestingOrigin),
      (t[56] = le))
    : (le = t[56]);
  let ue;
  t[57] === r.permissions
    ? (ue = t[58])
    : ((ue = (0, gr.jsx)(Qn, { permissions: r.permissions })), (t[57] = r.permissions), (t[58] = ue));
  let fe;
  t[59] !== d || t[60] !== ue
    ? ((fe = (0, gr.jsx)(`div`, { id: d, children: ue })), (t[59] = d), (t[60] = ue), (t[61] = fe))
    : (fe = t[61]);
  let pe;
  t[62] === r.variant
    ? (pe = t[63])
    : ((pe = r.variant === `os-prompt` ? (0, gr.jsx)(rn, {}) : null), (t[62] = r.variant), (t[63] = pe));
  let me;
  t[64] !== g || t[65] !== l || t[66] !== b || t[67] !== r.availableActions || t[68] !== r.geolocation
    ? ((me =
        r.geolocation != null && r.availableActions.some(or)
          ? (0, gr.jsx)(Rn, {
              value: g,
              onChange: _,
              disabled: b,
              "aria-label": l.formatMessage({
                id: `browser.permission.accuracy`,
                defaultMessage: `Location accuracy`,
                description: `Accessible name for the offered geolocation accuracy choices`,
              }),
              children: r.geolocation.availableAccuracies.map(ar),
            })
          : null),
      (t[64] = g),
      (t[65] = l),
      (t[66] = b),
      (t[67] = r.availableActions),
      (t[68] = r.geolocation),
      (t[69] = me))
    : (me = t[69]);
  let he;
  t[70] === x
    ? (he = t[71])
    : ((he = x
        ? (0, gr.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, gr.jsx)(z, {
              id: `browser.permission.error`,
              defaultMessage: `Couldn’t send your choice. Try again`,
              description: `Error after a website consent response fails to reach the host`,
            }),
          })
        : null),
      (t[70] = x),
      (t[71] = he));
  let ge = E.filter((e) => r.availableActions.includes(e)).map((e) =>
      (0, gr.jsx)(
        n,
        {
          className: `justify-center`,
          color: `secondary`,
          size: `dialog`,
          disabled: b,
          loading: v === e,
          onClick: () =>
            void A(
              e === `allow` || e === `allow-this-time`
                ? { action: e, geolocationAccuracy: g }
                : { action: e },
            ),
          children: (0, gr.jsx)(z, { ...pr(r, e) }),
        },
        e,
      ),
    ),
    _e;
  t[72] !== b || t[73] !== v || t[74] !== r.variant || t[75] !== A
    ? ((_e =
        r.variant === `os-system-settings`
          ? (0, gr.jsx)(n, {
              className: `justify-center`,
              color: `secondary`,
              size: `dialog`,
              disabled: b,
              loading: v === `settings`,
              onClick: () => void A(`settings`),
              children: (0, gr.jsx)(z, {
                id: `browser.permission.settings`,
                defaultMessage: `Open system settings`,
                description: `Action to open the operating system permission settings through the native browser helper`,
              }),
            })
          : null),
      (t[72] = b),
      (t[73] = v),
      (t[74] = r.variant),
      (t[75] = A),
      (t[76] = _e))
    : (_e = t[76]);
  let ye;
  t[77] !== ge || t[78] !== _e
    ? ((ye = (0, gr.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [ge, _e] })),
      (t[77] = ge),
      (t[78] = _e),
      (t[79] = ye))
    : (ye = t[79]);
  let be;
  t[80] !== J || t[81] !== le || t[82] !== fe || t[83] !== pe || t[84] !== me || t[85] !== he || t[86] !== ye
    ? ((be = (0, gr.jsxs)(`div`, {
        className: `flex flex-col gap-3 p-3`,
        children: [J, le, fe, pe, me, he, ye],
      })),
      (t[80] = J),
      (t[81] = le),
      (t[82] = fe),
      (t[83] = pe),
      (t[84] = me),
      (t[85] = he),
      (t[86] = ye),
      (t[87] = be))
    : (be = t[87]);
  let Se;
  t[88] !== te ||
  t[89] !== d ||
  t[90] !== U ||
  t[91] !== ne ||
  t[92] !== W ||
  t[93] !== G ||
  t[94] !== re ||
  t[95] !== be ||
  t[96] !== u
    ? ((Se = (0, gr.jsx)(te, {
        "aria-labelledby": u,
        "aria-describedby": d,
        className: `select-none no-drag`,
        opaque: !0,
        onClick: U,
        onCloseAutoFocus: ne,
        onOpenAutoFocus: W,
        onInteractOutside: G,
        onKeyDown: re,
        children: be,
      })),
      (t[88] = te),
      (t[89] = d),
      (t[90] = U),
      (t[91] = ne),
      (t[92] = W),
      (t[93] = G),
      (t[94] = re),
      (t[95] = be),
      (t[96] = u),
      (t[97] = Se))
    : (Se = t[97]);
  let Ce;
  return (
    t[98] !== F || t[99] !== m || t[100] !== H || t[101] !== Se || t[102] !== I
      ? ((Ce = (0, gr.jsxs)(F, { open: m, onOpenChange: I, children: [H, Se] })),
        (t[98] = F),
        (t[99] = m),
        (t[100] = H),
        (t[101] = Se),
        (t[102] = I),
        (t[103] = Ce))
      : (Ce = t[103]),
    Ce
  );
}
function ar(e) {
  return (0, gr.jsx)(Rn.Item, { value: e, children: (0, gr.jsx)(z, { ...vr[e] }) }, e);
}
function or(e) {
  return e === `allow` || e === `allow-this-time`;
}
function sr(e) {
  e.repeat && (e.key === `Enter` || e.key === ` `) && e.preventDefault();
}
function cr(e) {
  return e.preventDefault();
}
function lr(e) {
  return e.preventDefault();
}
function ur(e) {
  return e.stopPropagation();
}
function dr(e) {
  return e.stopPropagation();
}
function fr(e) {
  return e.stopPropagation();
}
function pr(e, t) {
  if (t === `dismiss`)
    return e.variant === `previously-granted`
      ? vr.continueAllowing
      : e.variant === `previously-denied`
        ? vr.continueNotAllowing
        : vr.ok;
  if (t === `deny` && e.variant === `previously-granted`) return vr.stopAllowing;
  if (e.availableActions.includes(`allow-this-time`)) {
    if (t === `allow`) return vr.allowWhileVisiting;
    if (t === `deny`) return vr.neverAllow;
  }
  return t === `deny` && e.variant === `ask` ? vr.block : vr[t];
}
var mr, hr, gr, _r, vr;
function yr() {
  return (yr = e(() => {
    ((mr = Sn()),
      zn(),
      E(),
      (hr = Mn()),
      Mt(),
      hn(),
      J(),
      Ee(),
      Pe(),
      Ot(),
      _t(),
      Dt(),
      Yn(),
      rr(),
      Zn(),
      (gr = En()),
      (_r = 500),
      (vr = s({
        ask: {
          id: `browser.permission.askSite`,
          defaultMessage: `{site} wants to`,
          description: `Permission prompt heading naming the requesting site before the list of capabilities`,
        },
        "previously-granted": {
          id: `browser.permission.previouslyGrantedSite`,
          defaultMessage: `You previously allowed {site} to`,
          description: `Explains the native previously granted permission variant`,
        },
        "previously-denied": {
          id: `browser.permission.previouslyDeniedSite`,
          defaultMessage: `You previously blocked these permissions for {site}`,
          description: `Explains the native previously denied permission variant`,
        },
        "administrator-granted": {
          id: `browser.permission.administratorGrantedSite`,
          defaultMessage: `Your administrator allows {site} to`,
          description: `Explains a website permission granted by administrator policy`,
        },
        "administrator-denied": {
          id: `browser.permission.administratorDeniedSite`,
          defaultMessage: `Your administrator blocks these permissions for {site}`,
          description: `Explains a website permission denied by administrator policy`,
        },
        "os-prompt": {
          id: `browser.permission.osPromptSite`,
          defaultMessage: `Continue in the system permission dialog to let {site}`,
          description: `Explains that the native browser has started an operating system permission dialog`,
        },
        "os-system-settings": {
          id: `browser.permission.osSettingsSite`,
          defaultMessage: `Your system settings block these permissions for {site}`,
          description: `Explains the operating system permission restriction`,
        },
        allow: {
          id: `browser.permission.allow`,
          defaultMessage: `Allow`,
          description: `Saves a website permission grant`,
        },
        "allow-this-time": {
          id: `browser.permission.allowThisTime`,
          defaultMessage: `Allow this time`,
          description: `Grants temporary website permission using the browser's lifetime rules`,
        },
        deny: {
          id: `browser.permission.deny`,
          defaultMessage: `Don’t allow`,
          description: `Saves a website permission denial`,
        },
        block: {
          id: `browser.permission.block`,
          defaultMessage: `Block`,
          description: `Saves a website permission denial in a two-choice permission prompt`,
        },
        allowWhileVisiting: {
          id: `browser.permission.allowWhileVisiting`,
          defaultMessage: `Allow while visiting the site`,
          description: `Saves a website permission grant rather than granting it only this time`,
        },
        neverAllow: {
          id: `browser.permission.neverAllow`,
          defaultMessage: `Never allow`,
          description: `Saves a website permission denial when temporary grants are also offered`,
        },
        continueAllowing: {
          id: `browser.permission.continueAllowing`,
          defaultMessage: `Continue allowing`,
          description: `Acknowledges an existing website permission grant without changing it`,
        },
        stopAllowing: {
          id: `browser.permission.stopAllowing`,
          defaultMessage: `Stop allowing`,
          description: `Revokes an existing website permission grant`,
        },
        continueNotAllowing: {
          id: `browser.permission.continueNotAllowing`,
          defaultMessage: `Continue not allowing`,
          description: `Acknowledges an existing website permission denial without changing it`,
        },
        ok: {
          id: `browser.permission.acknowledge`,
          defaultMessage: `OK`,
          description: `Acknowledges a website permission controlled by administrator policy`,
        },
        approximate: {
          id: `browser.permission.approximate`,
          defaultMessage: `Approximate location`,
          description: `Choice to share approximate location with the requesting website`,
        },
        precise: {
          id: `browser.permission.precise`,
          defaultMessage: `Precise location`,
          description: `Choice to share precise location with the requesting website`,
        },
      })));
  }))();
}
function br(e, t) {
  return Math.round(e * t);
}
function xr({ renderedZoomPercent: e, viewportScale: t }) {
  return pe(t <= 0 ? e : Math.round(e / t));
}
function Sr({ command: e, currentRenderedZoomPercent: t, viewportScale: n }) {
  let r = Cr(t, e);
  if (n === 1) return { command: e, renderedZoomPercent: r };
  let i = xr({ renderedZoomPercent: r, viewportScale: n });
  return { command: { type: `set-zoom-percent`, zoomPercent: i }, renderedZoomPercent: br(i, n) };
}
function Cr(e, t) {
  switch (t.type) {
    case `set-zoom-percent`:
      return pe(t.zoomPercent);
    case `reset-zoom`:
      return 100;
    case `step-zoom`:
      return wr(e, t.delta);
  }
}
function wr(e, t) {
  if (t > 0) {
    for (let t of M) if (t > e) return t;
    return O;
  }
  for (let t = M.length - 1; t >= 0; --t) {
    let n = M[t];
    if (n < e) return n;
  }
  return e;
}
function Tr() {
  return (Tr = e(() => {
    sn();
  }))();
}
function Er(e) {
  let t = (0, Or.c)(22),
    { bounds: n, bottomInset: r, children: i, clipBounds: a, inert: o, opacity: s, windowZoom: c } = e,
    l = r === void 0 ? 0 : r,
    u = o !== void 0 && o,
    [d] = (0, kr.useState)(Dr),
    f,
    p;
  (t[0] === d
    ? ((f = t[1]), (p = t[2]))
    : ((f = () => (F().append(d), () => d.remove())), (p = [d]), (t[0] = d), (t[1] = f), (t[2] = p)),
    (0, kr.useLayoutEffect)(f, p));
  let m, h, g, _;
  if (t[3] !== l || t[4] !== n || t[5] !== a || t[6] !== u || t[7] !== s || t[8] !== c) {
    let e = n == null ? null : { ...n, height: Math.max(0, n.height - l) };
    ((_ = Ar.createPortal),
      (m = `pointer-events-none fixed overflow-hidden`),
      (h = u || e == null),
      (g =
        e == null
          ? { display: `none` }
          : { ...$e(e, c), clipPath: a == null ? void 0 : Ye(e, a), opacity: s }),
      (t[3] = l),
      (t[4] = n),
      (t[5] = a),
      (t[6] = u),
      (t[7] = s),
      (t[8] = c),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _));
  } else ((m = t[9]), (h = t[10]), (g = t[11]), (_ = t[12]));
  let v;
  t[13] !== i || t[14] !== m || t[15] !== h || t[16] !== g
    ? ((v = (0, jr.jsx)(`div`, { className: m, inert: h, style: g, children: i })),
      (t[13] = i),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== d || t[19] !== _ || t[20] !== v
      ? ((y = _(v, d)), (t[18] = d), (t[19] = _), (t[20] = v), (t[21] = y))
      : (y = t[21]),
    y
  );
}
function Dr() {
  return document.createElement(`div`);
}
var Or, kr, Ar, jr;
function Mr() {
  return (Mr = e(() => {
    ((Or = Sn()), (kr = Mn()), (Ar = An()), W(), (jr = En()));
  }))();
}
function Nr(e) {
  let t = (0, Pr.c)(3),
    { children: n, inert: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Fr.jsx)(`div`, {
          className: `relative h-12 w-full border-b border-default bg-surface`,
          inert: r,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var Pr, Fr;
function Ir() {
  return (Ir = e(() => {
    ((Pr = Sn()), (Fr = En()));
  }))();
}
var Lr;
function Rr() {
  return (Rr = e(() => {
    Lr = [50, 75, 100, 125, 150, 200];
  }))();
}
var zr, Br, Vr;
function Hr() {
  return (Hr = e(() => {
    ((zr = `_Rotate_rw7ci_1`), (Br = `_rotateDevice_rw7ci_41`), (Vr = { Rotate: zr, rotateDevice: Br }));
  }))();
}
function Ur(e) {
  let t = (0, $r.c)(189),
    {
      currentZoomPercent: n,
      layout: r,
      onClose: i,
      onRotate: a,
      onStateChange: o,
      onToolbarAction: s,
      onViewportResizeActiveChange: c,
      onZoomPercentChange: l,
      panelBounds: u,
      reducedMotion: d,
      render: f,
      state: p,
      toolbarWidth: h,
    } = e,
    g = Ie(),
    _ = (0, ei.useRef)(null),
    v = (0, ei.useRef)(null),
    y = (0, ei.useRef)(null),
    b = (0, ei.useRef)(null),
    S = (0, ei.useRef)(null),
    [C, w] = (0, ei.useState)(null),
    [T, E] = (0, ei.useState)(null),
    [D, O] = (0, ei.useState)(null),
    k;
  t[0] !== r?.fitHeight || t[1] !== r?.fitWidth || t[2] !== r?.scale || t[3] !== o || t[4] !== p
    ? ((k = () => {
        v.current = null;
        let e = _.current,
          t = y.current;
        if (e == null || t == null) return;
        y.current = null;
        let n = De({
          drag: e,
          fitHeight: r?.fitHeight ?? p.height,
          fitWidth: r?.fitWidth ?? p.width,
          pointerX: t.pointerX,
          pointerY: t.pointerY,
          scale: r?.scale ?? 1,
        });
        ((b.current = n), o({ ...p, presetId: jn, ...n }));
      }),
      (t[0] = r?.fitHeight),
      (t[1] = r?.fitWidth),
      (t[2] = r?.scale),
      (t[3] = o),
      (t[4] = p),
      (t[5] = k))
    : (k = t[5]);
  let A = kn(k),
    j;
  t[6] === c
    ? (j = t[7])
    : ((j = () => {
        c(!1);
      }),
      (t[6] = c),
      (t[7] = j));
  let M = (0, ei.useEffectEvent)(j),
    N;
  t[8] !== r || t[9] !== u
    ? ((N =
        r != null && u != null
          ? {
              height: r.visualBounds.height,
              left: r.visualBounds.x - u.x,
              top: r.visualBounds.y - u.y,
              width: r.visualBounds.width,
            }
          : void 0),
      (t[8] = r),
      (t[9] = u),
      (t[10] = N))
    : (N = t[10]);
  let P = N,
    F;
  t[11] === r
    ? (F = t[12])
    : ((F = r == null ? void 0 : { height: r.visualBounds.height, top: 0 }), (t[11] = r), (t[12] = F));
  let I = F,
    L = P != null && p.presetId === `responsive`,
    ee;
  t[13] === s
    ? (ee = t[14])
    : ((ee = (e) => {
        (S.current != null && window.clearTimeout(S.current),
          (S.current = window.setTimeout(() => {
            ((S.current = null), s(e));
          }, ri)));
      }),
      (t[13] = s),
      (t[14] = ee));
  let R = ee,
    B;
  t[15] !== M || t[16] !== L
    ? ((B = () => {
        let e = () => {
          let e = v.current != null || _.current != null || y.current != null;
          (v.current != null && (window.cancelAnimationFrame(v.current), (v.current = null)),
            (_.current = null),
            (y.current = null),
            (b.current = null),
            e && M());
        };
        if (!L) {
          e();
          return;
        }
        return e;
      }),
      (t[15] = M),
      (t[16] = L),
      (t[17] = B))
    : (B = t[17]);
  let V;
  if (
    (t[18] === L ? (V = t[19]) : ((V = [L]), (t[18] = L), (t[19] = V)),
    (0, ei.useLayoutEffect)(B, V),
    !p.isEnabled)
  ) {
    let e;
    return (
      t[20] === f ? (e = t[21]) : ((e = f({ toolbar: null, resizeHandles: null })), (t[20] = f), (t[21] = e)),
      e
    );
  }
  let H;
  t[22] === g
    ? (H = t[23])
    : ((H = g.formatMessage({
        id: `thread.browser.deviceToolbar.width`,
        defaultMessage: `Viewport width`,
        description: `Accessible label for browser device toolbar width input`,
      })),
      (t[22] = g),
      (t[23] = H));
  let te = H,
    U;
  t[24] === g
    ? (U = t[25])
    : ((U = g.formatMessage({
        id: `thread.browser.deviceToolbar.height`,
        defaultMessage: `Viewport height`,
        description: `Accessible label for browser device toolbar height input`,
      })),
      (t[24] = g),
      (t[25] = U));
  let ne = U,
    W;
  t[26] === g
    ? (W = t[27])
    : ((W = g.formatMessage({
        id: `thread.browser.deviceToolbar.zoom`,
        defaultMessage: `Browser zoom`,
        description: `Accessible label for browser device toolbar zoom select`,
      })),
      (t[26] = g),
      (t[27] = W));
  let G = W,
    re;
  t[28] === g
    ? (re = t[29])
    : ((re = g.formatMessage({
        id: `thread.browser.deviceToolbar.resizeLeft`,
        defaultMessage: `Resize device viewport from the left edge`,
        description: `Accessible label for the browser device toolbar left resize handle`,
      })),
      (t[28] = g),
      (t[29] = re));
  let ie = re,
    ae;
  t[30] === g
    ? (ae = t[31])
    : ((ae = g.formatMessage({
        id: `thread.browser.deviceToolbar.resizeRight`,
        defaultMessage: `Resize device viewport from the right edge`,
        description: `Accessible label for the browser device toolbar right resize handle`,
      })),
      (t[30] = g),
      (t[31] = ae));
  let K = ae,
    q;
  t[32] === g
    ? (q = t[33])
    : ((q = g.formatMessage({
        id: `thread.browser.deviceToolbar.resizeBottom`,
        defaultMessage: `Resize device viewport from the bottom edge`,
        description: `Accessible label for the browser device toolbar bottom resize handle`,
      })),
      (t[32] = g),
      (t[33] = q));
  let J = q,
    le;
  t[34] === g
    ? (le = t[35])
    : ((le = g.formatMessage({
        id: `thread.browser.deviceToolbar.resizeBottomLeft`,
        defaultMessage: `Resize device viewport from the bottom-left corner`,
        description: `Accessible label for the browser device toolbar bottom-left resize handle`,
      })),
      (t[34] = g),
      (t[35] = le));
  let ue = le,
    de;
  t[36] === g
    ? (de = t[37])
    : ((de = g.formatMessage({
        id: `thread.browser.deviceToolbar.resizeBottomRight`,
        defaultMessage: `Resize device viewport from the bottom-right corner`,
        description: `Accessible label for the browser device toolbar bottom-right resize handle`,
      })),
      (t[36] = g),
      (t[37] = de));
  let fe = de,
    pe;
  t[38] === g
    ? (pe = t[39])
    : ((pe = g.formatMessage({
        id: `thread.browser.deviceToolbar.close`,
        defaultMessage: `Exit device toolbar mode`,
        description: `Accessible label for closing the browser device toolbar mode`,
      })),
      (t[38] = g),
      (t[39] = pe));
  let me = pe,
    he;
  t[40] === g
    ? (he = t[41])
    : ((he = g.formatMessage({
        id: `thread.browser.deviceToolbar.rotate`,
        defaultMessage: `Rotate viewport`,
        description: `Accessible label for rotating the browser device viewport`,
      })),
      (t[40] = g),
      (t[41] = he));
  let ge = he,
    _e,
    ve,
    ye,
    be,
    xe,
    Se,
    Ce,
    we,
    Te,
    Ee,
    Y,
    Oe,
    ke,
    Ae;
  if (
    t[42] !== A ||
    t[43] !== n ||
    t[44] !== T ||
    t[45] !== ne ||
    t[46] !== i ||
    t[47] !== a ||
    t[48] !== o ||
    t[49] !== s ||
    t[50] !== c ||
    t[51] !== l ||
    t[52] !== d ||
    t[53] !== D ||
    t[54] !== ge ||
    t[55] !== R ||
    t[56] !== p ||
    t[57] !== h ||
    t[58] !== C ||
    t[59] !== te ||
    t[60] !== G
  ) {
    let e = Lr.includes(n) ? Lr : [...Lr, n].sort(Jr),
      r = (h ?? 1 / 0) < ti,
      u = (h ?? 1 / 0) < ni;
    Te = !r;
    let f = C ?? String(p.width),
      m = T ?? String(p.height),
      g;
    t[75] !== o || t[76] !== R || t[77] !== p
      ? ((g = (e) => {
          let t = x(e.currentTarget.value);
          t != null &&
            ((t.id !== p.presetId ||
              (t.id !== `responsive` && (t.width !== p.width || t.height !== p.height))) &&
              R(ii),
            w(null),
            E(null),
            o(
              t.id === `responsive`
                ? { ...p, presetId: t.id }
                : { ...p, presetId: t.id, width: t.width, height: t.height },
              { shouldResetPageZoom: !0 },
            ),
            e.currentTarget.blur());
        }),
        (t[75] = o),
        (t[76] = R),
        (t[77] = p),
        (t[78] = g))
      : (g = t[78]);
    let S = g,
      k;
    t[79] !== o || t[80] !== R || t[81] !== p
      ? ((k = (e) => {
          let t = On(e);
          ((p.presetId !== `responsive` || p.width !== t) && R(ii), o({ ...p, presetId: jn, width: t }));
        }),
        (t[79] = o),
        (t[80] = R),
        (t[81] = p),
        (t[82] = k))
      : (k = t[82]);
    let j = k,
      M;
    t[83] === j
      ? (M = t[84])
      : ((M = (e) => {
          w(e.currentTarget.value);
          let t = e.currentTarget.valueAsNumber;
          Number.isNaN(t) || t < 240 || t > 4096 || j(t);
        }),
        (t[83] = j),
        (t[84] = M));
    let N = M,
      P;
    t[85] === j
      ? (P = t[86])
      : ((P = (e) => {
          w(null);
          let t = e.currentTarget.valueAsNumber;
          Number.isNaN(t) || j(t);
        }),
        (t[85] = j),
        (t[86] = P));
    let F = P,
      I;
    t[87] !== o || t[88] !== R || t[89] !== p
      ? ((I = (e) => {
          let t = ft(e);
          ((p.presetId !== `responsive` || p.height !== t) && R(ii), o({ ...p, presetId: jn, height: t }));
        }),
        (t[87] = o),
        (t[88] = R),
        (t[89] = p),
        (t[90] = I))
      : (I = t[90]);
    let L = I,
      ee;
    t[91] === L
      ? (ee = t[92])
      : ((ee = (e) => {
          E(e.currentTarget.value);
          let t = e.currentTarget.valueAsNumber;
          Number.isNaN(t) || t < 160 || t > 4096 || L(t);
        }),
        (t[91] = L),
        (t[92] = ee));
    let B = ee,
      V;
    t[93] === L
      ? (V = t[94])
      : ((V = (e) => {
          E(null);
          let t = e.currentTarget.valueAsNumber;
          Number.isNaN(t) || L(t);
        }),
        (t[93] = L),
        (t[94] = V));
    let H = V,
      U;
    t[95] === l
      ? (U = t[96])
      : ((U = (e) => {
          (l(Number(e.currentTarget.value)), e.currentTarget.blur());
        }),
        (t[95] = l),
        (t[96] = U));
    let W = U,
      re = qr,
      ie;
    t[97] !== a || t[98] !== s || t[99] !== d
      ? ((ie = (e) => {
          (s(ce.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_ROTATED),
            w(null),
            E(null),
            d || O(Kr),
            a(),
            e.currentTarget.blur());
        }),
        (t[97] = a),
        (t[98] = s),
        (t[99] = d),
        (t[100] = ie))
      : (ie = t[100]);
    let ae = ie,
      K;
    (t[101] === i
      ? (K = t[102])
      : ((K = (e) => {
          (i(), e.currentTarget.blur());
        }),
        (t[101] = i),
        (t[102] = K)),
      (ye = K));
    let q;
    (t[103] !== c || t[104] !== p.height || t[105] !== p.width
      ? ((q = (e, t) => {
          (e.preventDefault(),
            w(null),
            E(null),
            e.currentTarget.setPointerCapture(e.pointerId),
            (_.current = {
              edge: t,
              startHeight: p.height,
              startPointerX: e.clientX,
              startPointerY: e.clientY,
              startWidth: p.width,
            }),
            (b.current = null),
            c(!0));
        }),
        (t[103] = c),
        (t[104] = p.height),
        (t[105] = p.width),
        (t[106] = q))
      : (q = t[106]),
      (be = q));
    let J;
    (t[107] === A
      ? (J = t[108])
      : ((J = (e) => {
          _.current != null &&
            ((y.current = { pointerX: e.clientX, pointerY: e.clientY }),
            (v.current ??= window.requestAnimationFrame(A)));
        }),
        (t[107] = A),
        (t[108] = J)),
      (Se = J));
    let le;
    (t[109] !== A || t[110] !== c || t[111] !== R
      ? ((le = () => {
          let e = _.current,
            t = e != null;
          v.current != null && (window.cancelAnimationFrame(v.current), A());
          let n = b.current;
          ((_.current = null),
            (y.current = null),
            (b.current = null),
            t && (n != null && (n.width !== e.startWidth || n.height !== e.startHeight) && R(ai), c(!1)));
        }),
        (t[109] = A),
        (t[110] = c),
        (t[111] = R),
        (t[112] = le))
      : (le = t[112]),
      (xe = le));
    let ue = u && `sr-only`,
      de;
    t[113] === ue
      ? (de = t[114])
      : ((de = X(`max-w-28 shrink min-w-0 truncate text-sm font-medium`, ue)), (t[113] = ue), (t[114] = de));
    let fe;
    t[115] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((fe = (0, Z.jsx)(z, {
          id: `thread.browser.deviceToolbar.dimensions`,
          defaultMessage: `Dimensions:`,
          description: `Label for browser device toolbar viewport dimensions`,
        })),
        (t[115] = fe))
      : (fe = t[115]);
    let pe;
    (t[116] === de
      ? (pe = t[117])
      : ((pe = (0, Z.jsx)(`label`, { className: de, htmlFor: `browser-device-preset`, children: fe })),
        (t[116] = de),
        (t[117] = pe)),
      (ve = pe));
    let me = p.presetId,
      he = r ? `w-[100px] max-w-[100px]` : `max-w-44`,
      De;
    t[118] === he
      ? (De = t[119])
      : ((De = X(
          `h-7 min-w-[100px] cursor-interaction truncate rounded-md border border-transparent bg-transparent px-1 text-sm font-medium text-codex-description outline-none [color-scheme:light] hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
          he,
        )),
        (t[118] = he),
        (t[119] = De));
    let je;
    t[120] === Symbol.for(`react.memo_cache_sentinel`) ? ((je = zt.map(Gr)), (t[120] = je)) : (je = t[120]);
    let Me;
    (t[121] !== S || t[122] !== p.presetId || t[123] !== De
      ? ((Me = (0, Z.jsx)(`select`, {
          id: `browser-device-preset`,
          value: me,
          onChange: S,
          className: De,
          children: je,
        })),
        (t[121] = S),
        (t[122] = p.presetId),
        (t[123] = De),
        (t[124] = Me))
      : (Me = t[124]),
      (Ce = Me));
    let Ne;
    t[125] === p.width ? (Ne = t[126]) : ((Ne = () => w(String(p.width))), (t[125] = p.width), (t[126] = Ne));
    let Pe;
    t[127] !== F || t[128] !== N || t[129] !== Ne || t[130] !== f || t[131] !== te
      ? ((Pe = (0, Z.jsx)(Yr, {
          "aria-label": te,
          min: 240,
          max: yn,
          onBlur: F,
          onChange: N,
          onFocus: Ne,
          onKeyDown: re,
          value: f,
        })),
        (t[127] = F),
        (t[128] = N),
        (t[129] = Ne),
        (t[130] = f),
        (t[131] = te),
        (t[132] = Pe))
      : (Pe = t[132]);
    let Fe;
    t[133] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Fe = (0, Z.jsx)(`span`, {
          className: `text-sm text-codex-description`,
          children: (0, Z.jsx)(z, {
            id: `thread.browser.deviceToolbar.dimensionSeparator`,
            defaultMessage: `×`,
            description: `Separator between browser device toolbar viewport width and height`,
          }),
        })),
        (t[133] = Fe))
      : (Fe = t[133]);
    let Ie;
    t[134] === p.height
      ? (Ie = t[135])
      : ((Ie = () => E(String(p.height))), (t[134] = p.height), (t[135] = Ie));
    let Le;
    t[136] !== H || t[137] !== B || t[138] !== m || t[139] !== ne || t[140] !== Ie
      ? ((Le = (0, Z.jsx)(Yr, {
          "aria-label": ne,
          min: 160,
          max: it,
          onBlur: H,
          onChange: B,
          onFocus: Ie,
          onKeyDown: re,
          value: m,
        })),
        (t[136] = H),
        (t[137] = B),
        (t[138] = m),
        (t[139] = ne),
        (t[140] = Ie),
        (t[141] = Le))
      : (Le = t[141]);
    let Re;
    (t[142] !== Pe || t[143] !== Le
      ? ((Re = (0, Z.jsxs)(`div`, { className: `flex shrink-0 items-center gap-1`, children: [Pe, Fe, Le] })),
        (t[142] = Pe),
        (t[143] = Le),
        (t[144] = Re))
      : (Re = t[144]),
      (_e = Re));
    let ze;
    t[145] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ze = (0, Z.jsx)(z, {
          id: `thread.browser.deviceToolbar.rotate`,
          defaultMessage: `Rotate viewport`,
          description: `Accessible label for rotating the browser device viewport`,
        })),
        (t[145] = ze))
      : (ze = t[145]);
    let Be = `rotate-device-icon-${D ?? 0}`,
      Ve = D != null,
      He,
      Ue;
    t[146] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((He = () => {
          O(null);
        }),
        (Ue = (0, Z.jsx)(se, { "aria-hidden": !1, asset: oe })),
        (t[146] = He),
        (t[147] = Ue))
      : ((He = t[146]), (Ue = t[147]));
    let We;
    t[148] !== Be || t[149] !== Ve
      ? ((We = (0, Z.jsx)(
          `span`,
          { className: Vr.Rotate, "data-animating": Ve, onAnimationEnd: He, children: Ue },
          Be,
        )),
        (t[148] = Be),
        (t[149] = Ve),
        (t[150] = We))
      : (We = t[150]);
    let Ge;
    (t[151] !== ae || t[152] !== ge || t[153] !== We
      ? ((Ge = (0, Z.jsx)(pn, {
          tooltipContent: ze,
          children: (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": ge,
            className: `flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-codex-description outline-none hover:bg-primary-ghost-hover hover:text-default focus:bg-primary-ghost-hover focus:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
            onClick: ae,
            children: We,
          }),
        })),
        (t[151] = ae),
        (t[152] = ge),
        (t[153] = We),
        (t[154] = Ge))
      : (Ge = t[154]),
      (we = Ge),
      (Ee = G),
      (Y = `h-7 shrink-0 cursor-interaction rounded-md border border-transparent bg-transparent px-1 text-sm font-medium text-codex-description [color-scheme:light] outline-none hover:bg-primary-ghost-hover focus:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`),
      (Oe = W),
      (ke = n),
      (Ae = e.map(Wr)),
      (t[42] = A),
      (t[43] = n),
      (t[44] = T),
      (t[45] = ne),
      (t[46] = i),
      (t[47] = a),
      (t[48] = o),
      (t[49] = s),
      (t[50] = c),
      (t[51] = l),
      (t[52] = d),
      (t[53] = D),
      (t[54] = ge),
      (t[55] = R),
      (t[56] = p),
      (t[57] = h),
      (t[58] = C),
      (t[59] = te),
      (t[60] = G),
      (t[61] = _e),
      (t[62] = ve),
      (t[63] = ye),
      (t[64] = be),
      (t[65] = xe),
      (t[66] = Se),
      (t[67] = Ce),
      (t[68] = we),
      (t[69] = Te),
      (t[70] = Ee),
      (t[71] = Y),
      (t[72] = Oe),
      (t[73] = ke),
      (t[74] = Ae));
  } else
    ((_e = t[61]),
      (ve = t[62]),
      (ye = t[63]),
      (be = t[64]),
      (xe = t[65]),
      (Se = t[66]),
      (Ce = t[67]),
      (we = t[68]),
      (Te = t[69]),
      (Ee = t[70]),
      (Y = t[71]),
      (Oe = t[72]),
      (ke = t[73]),
      (Ae = t[74]));
  let je;
  t[155] !== Ee || t[156] !== Y || t[157] !== Oe || t[158] !== ke || t[159] !== Ae
    ? ((je = (0, Z.jsx)(`select`, { "aria-label": Ee, className: Y, onChange: Oe, value: ke, children: Ae })),
      (t[155] = Ee),
      (t[156] = Y),
      (t[157] = Oe),
      (t[158] = ke),
      (t[159] = Ae),
      (t[160] = je))
    : (je = t[160]);
  let Me = je,
    Ne;
  t[161] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, Z.jsx)(z, {
        id: `thread.browser.deviceToolbar.close`,
        defaultMessage: `Exit device toolbar mode`,
        description: `Accessible label for closing the browser device toolbar mode`,
      })),
      (t[161] = Ne))
    : (Ne = t[161]);
  let Pe;
  t[162] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, Z.jsx)(se, { "aria-hidden": !1, asset: m })), (t[162] = Pe))
    : (Pe = t[162]);
  let Fe;
  t[163] !== me || t[164] !== ye
    ? ((Fe = (0, Z.jsx)(pn, {
        tooltipContent: Ne,
        children: (0, Z.jsx)(`button`, {
          type: `button`,
          "aria-label": me,
          className: `ms-auto flex size-7 shrink-0 cursor-interaction items-center justify-center rounded-md text-codex-description outline-none hover:bg-primary-ghost-hover hover:text-default focus:bg-primary-ghost-hover focus:text-default focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
          onClick: ye,
          children: Pe,
        }),
      })),
      (t[163] = me),
      (t[164] = ye),
      (t[165] = Fe))
    : (Fe = t[165]);
  let Le = Fe,
    Re = Te ? Me : null,
    ze;
  t[166] !== Le || t[167] !== _e || t[168] !== ve || t[169] !== Ce || t[170] !== we || t[171] !== Re
    ? ((ze = (0, Z.jsxs)(Vn, { children: [ve, Ce, _e, we, Re, Le] })),
      (t[166] = Le),
      (t[167] = _e),
      (t[168] = ve),
      (t[169] = Ce),
      (t[170] = we),
      (t[171] = Re),
      (t[172] = ze))
    : (ze = t[172]);
  let Be;
  t[173] !== ue ||
  t[174] !== J ||
  t[175] !== fe ||
  t[176] !== P ||
  t[177] !== be ||
  t[178] !== xe ||
  t[179] !== Se ||
  t[180] !== ie ||
  t[181] !== K ||
  t[182] !== L ||
  t[183] !== I
    ? ((Be = L
        ? (0, Z.jsxs)(`div`, {
            className: `pointer-events-none absolute z-40`,
            style: P,
            children: [
              (0, Z.jsx)(Qr, {
                className: `-left-5 w-5 cursor-ew-resize`,
                edge: `left`,
                label: ie,
                style: I,
                onPointerDown: be,
                onPointerMove: Se,
                onPointerUp: xe,
              }),
              (0, Z.jsx)(Qr, {
                className: `-right-5 w-5 cursor-ew-resize`,
                edge: `right`,
                label: K,
                style: I,
                onPointerDown: be,
                onPointerMove: Se,
                onPointerUp: xe,
              }),
              (0, Z.jsx)(Qr, {
                className: `top-full -right-5 -left-5 h-5 cursor-ns-resize`,
                edge: `bottom`,
                label: J,
                onPointerDown: be,
                onPointerMove: Se,
                onPointerUp: xe,
              }),
              (0, Z.jsx)(Zr, {
                className: `top-full -left-5 cursor-nesw-resize`,
                edge: `bottom-left`,
                label: ue,
                onPointerDown: be,
                onPointerMove: Se,
                onPointerUp: xe,
              }),
              (0, Z.jsx)(Zr, {
                className: `top-full -right-5 cursor-nwse-resize`,
                edge: `bottom-right`,
                label: fe,
                onPointerDown: be,
                onPointerMove: Se,
                onPointerUp: xe,
              }),
            ],
          })
        : null),
      (t[173] = ue),
      (t[174] = J),
      (t[175] = fe),
      (t[176] = P),
      (t[177] = be),
      (t[178] = xe),
      (t[179] = Se),
      (t[180] = ie),
      (t[181] = K),
      (t[182] = L),
      (t[183] = I),
      (t[184] = Be))
    : (Be = t[184]);
  let Ve;
  return (
    t[185] !== f || t[186] !== ze || t[187] !== Be
      ? ((Ve = f({ toolbar: ze, resizeHandles: Be })),
        (t[185] = f),
        (t[186] = ze),
        (t[187] = Be),
        (t[188] = Ve))
      : (Ve = t[188]),
    Ve
  );
}
function Wr(e) {
  return (0, Z.jsx)(
    `option`,
    {
      className: `bg-[Canvas] text-[CanvasText]`,
      value: e,
      children: (0, Z.jsx)(z, {
        id: `thread.browser.zoomPercent`,
        defaultMessage: `{zoomPercent}%`,
        description: `Zoom percentage shown in in-app browser controls`,
        values: { zoomPercent: e },
      }),
    },
    e,
  );
}
function Gr(e) {
  return (0, Z.jsx)(
    `option`,
    { className: `bg-[Canvas] text-[CanvasText]`, value: e.id, children: (0, Z.jsx)(Xr, { presetId: e.id }) },
    e.id,
  );
}
function Kr(e) {
  return (e ?? 0) + 1;
}
function qr(e) {
  e.key === `Enter` && e.currentTarget.blur();
}
function Jr(e, t) {
  return e - t;
}
function Yr(e) {
  let t = (0, $r.c)(4),
    n;
  t[0] === e ? (n = t[1]) : (({ ...n } = e), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === n
      ? (r = t[3])
      : ((r = (0, Z.jsx)(`input`, {
          ...n,
          className: `h-6 w-[72px] rounded-lg border border-transparent bg-text/5 px-2 text-center text-sm font-semibold text-default tabular-nums outline-none hover:bg-primary-ghost-hover focus:border-ring focus:bg-surface-secondary`,
          type: `number`,
        })),
        (t[2] = n),
        (t[3] = r)),
    r
  );
}
function Xr(e) {
  let t = (0, $r.c)(13),
    { presetId: n } = e;
  switch (n) {
    case jn: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.responsive`,
              defaultMessage: `Responsive`,
              description: `Option label for responsive browser device toolbar sizing`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `4k`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.4k`,
              defaultMessage: `4K`,
              description: `Option label for a 4K browser device toolbar preset`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `laptop-l`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.laptopLarge`,
              defaultMessage: `Laptop L`,
              description: `Option label for a large laptop browser device toolbar preset`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `laptop`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.laptop`,
              defaultMessage: `Laptop`,
              description: `Option label for a laptop browser device toolbar preset`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `surface-pro-7`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.surfacePro7`,
              defaultMessage: `Surface Pro 7`,
              description: `Option label for a Surface Pro 7 browser device toolbar preset`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `ipad-air`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.ipadAir`,
              defaultMessage: `iPad Air`,
              description: `Option label for an iPad Air browser device toolbar preset`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `ipad-mini`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.ipadMini`,
              defaultMessage: `iPad Mini`,
              description: `Option label for an iPad Mini browser device toolbar preset`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `surface-duo`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.surfaceDuo`,
              defaultMessage: `Surface Duo`,
              description: `Option label for a Surface Duo browser device toolbar preset`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `iphone-15-pro-max`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.iphone15ProMax`,
              defaultMessage: `iPhone 15 Pro Max`,
              description: `Option label for an iPhone 15 Pro Max browser device toolbar preset`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `pixel-8`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.pixel8`,
              defaultMessage: `Pixel 8`,
              description: `Option label for a Pixel 8 browser device toolbar preset`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `iphone-15-pro`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.iphone15Pro`,
              defaultMessage: `iPhone 15 Pro`,
              description: `Option label for an iPhone 15 Pro browser device toolbar preset`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `samsung-galaxy-s24-ultra`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.samsungGalaxyS24Ultra`,
              defaultMessage: `Samsung Galaxy S24 Ultra`,
              description: `Option label for a Samsung Galaxy S24 Ultra browser device toolbar preset`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `iphone-se`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(z, {
              id: `thread.browser.deviceToolbar.iphoneSe`,
              defaultMessage: `iPhone SE`,
              description: `Option label for an iPhone SE browser device toolbar preset`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
  }
}
function Zr(e) {
  let t = (0, $r.c)(18),
    { className: n, edge: r, label: i, onPointerDown: a, onPointerMove: o, onPointerUp: s } = e,
    c;
  t[0] === n
    ? (c = t[1])
    : ((c = X(
        `pointer-events-auto absolute z-10 flex size-5 cursor-interaction items-center justify-center bg-device-handle outline-none hover:bg-device-handle-hover`,
        n,
      )),
      (t[0] = n),
      (t[1] = c));
  let l;
  t[2] !== r || t[3] !== a ? ((l = (e) => a(e, r)), (t[2] = r), (t[3] = a), (t[4] = l)) : (l = t[4]);
  let u = r === `bottom-left` && `-scale-x-100`,
    d;
  t[5] === u ? (d = t[6]) : ((d = X(`size-5`, u)), (t[5] = u), (t[6] = d));
  let f, p;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`path`, {
        d: `M6 11.75L11.75 6`,
        stroke: `var(--color-device-handle-detail)`,
        strokeLinecap: `round`,
        strokeWidth: `2.4`,
      })),
      (p = (0, Z.jsx)(`path`, {
        d: `M7 15.5L15.5 7`,
        stroke: `var(--color-device-handle-detail)`,
        strokeLinecap: `round`,
        strokeWidth: `2.4`,
      })),
      (t[7] = f),
      (t[8] = p))
    : ((f = t[7]), (p = t[8]));
  let m;
  t[9] === d
    ? (m = t[10])
    : ((m = (0, Z.jsxs)(`svg`, {
        "aria-hidden": `true`,
        className: d,
        fill: `none`,
        viewBox: `0 0 20 20`,
        children: [f, p],
      })),
      (t[9] = d),
      (t[10] = m));
  let h;
  return (
    t[11] !== i || t[12] !== o || t[13] !== s || t[14] !== c || t[15] !== l || t[16] !== m
      ? ((h = (0, Z.jsx)(`button`, {
          type: `button`,
          "aria-label": i,
          tabIndex: -1,
          className: c,
          onPointerDown: l,
          onPointerMove: o,
          onPointerUp: s,
          onPointerCancel: s,
          onLostPointerCapture: s,
          children: m,
        })),
        (t[11] = i),
        (t[12] = o),
        (t[13] = s),
        (t[14] = c),
        (t[15] = l),
        (t[16] = m),
        (t[17] = h))
      : (h = t[17]),
    h
  );
}
function Qr(e) {
  let t = (0, $r.c)(27),
    { className: n, edge: r, label: i, onPointerDown: a, onPointerMove: o, onPointerUp: s, style: c } = e,
    l = r === `bottom`,
    u;
  t[0] === n
    ? (u = t[1])
    : ((u = X(
        `pointer-events-auto absolute flex cursor-interaction items-center justify-center bg-device-handle outline-none hover:bg-device-handle-hover`,
        n,
      )),
      (t[0] = n),
      (t[1] = u));
  let d;
  t[2] !== r || t[3] !== a ? ((d = (e) => a(e, r)), (t[2] = r), (t[3] = a), (t[4] = d)) : (d = t[4]);
  let f = l ? `h-5 w-9 flex-col` : `h-9 w-5`,
    p;
  t[5] === f ? (p = t[6]) : ((p = X(`flex items-center justify-center gap-0.5`, f)), (t[5] = f), (t[6] = p));
  let m = l ? `h-0.5 w-8` : `h-8 w-0.5`,
    h;
  t[7] === m ? (h = t[8]) : ((h = X(`rounded-full bg-device-handle-detail`, m)), (t[7] = m), (t[8] = h));
  let g;
  t[9] === h ? (g = t[10]) : ((g = (0, Z.jsx)(`span`, { className: h })), (t[9] = h), (t[10] = g));
  let _ = l ? `h-0.5 w-8` : `h-8 w-0.5`,
    v;
  t[11] === _ ? (v = t[12]) : ((v = X(`rounded-full bg-device-handle-detail`, _)), (t[11] = _), (t[12] = v));
  let y;
  t[13] === v ? (y = t[14]) : ((y = (0, Z.jsx)(`span`, { className: v })), (t[13] = v), (t[14] = y));
  let b;
  t[15] !== y || t[16] !== p || t[17] !== g
    ? ((b = (0, Z.jsxs)(`span`, { className: p, children: [g, y] })),
      (t[15] = y),
      (t[16] = p),
      (t[17] = g),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== i || t[20] !== o || t[21] !== s || t[22] !== c || t[23] !== u || t[24] !== b || t[25] !== d
      ? ((x = (0, Z.jsx)(`button`, {
          type: `button`,
          "aria-label": i,
          tabIndex: -1,
          className: u,
          style: c,
          onPointerDown: d,
          onPointerMove: o,
          onPointerUp: s,
          onPointerCancel: s,
          onLostPointerCapture: s,
          children: b,
        })),
        (t[19] = i),
        (t[20] = o),
        (t[21] = s),
        (t[22] = c),
        (t[23] = u),
        (t[24] = b),
        (t[25] = d),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
var $r, ei, Z, ti, ni, ri, ii, ai;
function oi() {
  return (oi = e(() => {
    (($r = Sn()),
      be(),
      Pt(),
      Pn(),
      rt(),
      (ei = Mn()),
      Mt(),
      J(),
      Bn(),
      _t(),
      pt(),
      Rr(),
      ue(),
      Hr(),
      (Z = En()),
      (ti = 600),
      (ni = 460),
      (ri = 5e3),
      (ii = ce.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_INPUT_CHANGED),
      (ai = ce.CODEX_IN_APP_BROWSER_TOOLBAR_ACTION_TYPE_DEVICE_TOOLBAR_DIMENSIONS_DRAG_CHANGED));
  }))();
}
function si(e) {
  let t = (0, li.c)(27),
    {
      floating: n,
      browserTabId: r,
      conversationId: i,
      currentUrl: a,
      isAddressEditing: o,
      isOpen: s,
      onOpenChange: c,
      openSiteInfo: l,
      renderPermissionPrompt: u,
      securityState: d,
      shouldAnimateAddressExpansion: f,
    } = e,
    p = n !== void 0 && n,
    m = Ie(),
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = m.formatMessage({
        id: `thread.browser.viewSiteInformation`,
        defaultMessage: `View site information`,
        description: `Accessible label for the browser address bar button that opens current-site permissions and settings`,
      })),
      (t[0] = m),
      (t[1] = h));
  let g = h,
    _;
  t[2] === m
    ? (_ = t[3])
    : ((_ = m.formatMessage({
        id: `thread.browser.notSecureSiteInformation`,
        defaultMessage: `Not secure, view site information`,
        description: `Accessible label for the browser address bar button when the current HTTPS page has a certificate error.`,
      })),
      (t[2] = m),
      (t[3] = _));
  let v = _,
    y = d === `certificate-error`,
    b;
  t[4] === a ? (b = t[5]) : ((b = Wt(a)), (t[4] = a), (t[5] = b));
  let x = b != null,
    S = x && y,
    C = y ? v : g,
    w = `w-7`;
  o || (p && !x) ? (w = `w-0`) : S && (w = `w-[104px]`);
  let T = f ? `transition-[width] duration-basic motion-reduce:transition-none` : `transition-none`,
    E;
  t[6] !== w || t[7] !== T
    ? ((E = X(`flex h-7 shrink-0 items-center overflow-hidden`, T, w)), (t[6] = w), (t[7] = T), (t[8] = E))
    : (E = t[8]);
  let D = E,
    O = ci,
    k;
  t[9] !== r ||
  t[10] !== i ||
  t[11] !== a ||
  t[12] !== p ||
  t[13] !== s ||
  t[14] !== C ||
  t[15] !== c ||
  t[16] !== l ||
  t[17] !== x ||
  t[18] !== S
    ? ((k = x
        ? (0, ui.jsx)(pn, {
            tooltipContent: C,
            side: `bottom`,
            children: (0, ui.jsx)(Kn, {
              floating: p,
              type: `button`,
              "data-browser-sidebar-skip-address-commit": `true`,
              "aria-label": C,
              "aria-expanded": s,
              "aria-haspopup": `dialog`,
              onPointerDown: O,
              onMouseDown: O,
              onClick: (e) => {
                if ((e.stopPropagation(), l == null)) return;
                let t = e.currentTarget.getBoundingClientRect();
                (c(!0),
                  l({
                    anchorBounds: { height: t.height, width: t.width, x: t.x, y: t.y },
                    browserTabId: r,
                    conversationId: i,
                    siteUrl: a,
                  }).then(
                    (e) => {
                      e || c(!1);
                    },
                    () => c(!1),
                  ));
              },
              securityWarning: S,
              children: S
                ? (0, ui.jsxs)(ui.Fragment, {
                    children: [
                      (0, ui.jsx)(se, { className: `shrink-0`, "aria-hidden": !1, asset: Lt }),
                      (0, ui.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: (0, ui.jsx)(z, {
                          id: `thread.browser.notSecure`,
                          defaultMessage: `Not secure`,
                          description: `Security status text shown in the browser address bar when the current HTTPS page has a certificate error.`,
                        }),
                      }),
                    ],
                  })
                : (0, ui.jsx)(se, {
                    className: X(
                      s
                        ? `opacity-100`
                        : `delay-0 opacity-0 transition-opacity duration-0 group-hover/address-bar:opacity-100 group-focus-within/address-bar:delay-0 group-focus-within/address-bar:opacity-100 motion-reduce:transition-none`,
                    ),
                    "aria-hidden": !1,
                    asset: Bt,
                  }),
            }),
          })
        : null),
      (t[9] = r),
      (t[10] = i),
      (t[11] = a),
      (t[12] = p),
      (t[13] = s),
      (t[14] = C),
      (t[15] = c),
      (t[16] = l),
      (t[17] = x),
      (t[18] = S),
      (t[19] = k))
    : (k = t[19]);
  let A = k,
    j;
  t[20] !== u || t[21] !== A
    ? ((j = u == null ? A : u(A)), (t[20] = u), (t[21] = A), (t[22] = j))
    : (j = t[22]);
  let M;
  return (
    t[23] !== o || t[24] !== D || t[25] !== j
      ? ((M = (0, ui.jsx)(`div`, { className: D, inert: o, children: j })),
        (t[23] = o),
        (t[24] = D),
        (t[25] = j),
        (t[26] = M))
      : (M = t[26]),
    M
  );
}
function ci(e) {
  (e.preventDefault(), e.stopPropagation());
}
var li, ui;
function di() {
  return (di = e(() => {
    ((li = Sn()), Qt(), mt(), rt(), sn(), Mt(), J(), _t(), Yn(), (ui = En()));
  }))();
}
function fi(e) {
  let t = (0, mi.c)(40),
    {
      address: r,
      backLabel: i,
      canGoBack: a,
      canGoForward: o,
      forwardLabel: s,
      isLoading: c,
      onBack: l,
      onForward: u,
      onReload: d,
      onStop: f,
      onToolbarPointerDown: p,
      reloadDisabled: m,
      reloadLabel: h,
      stopLabel: g,
      toolbarAriaHidden: _,
      toolbarClassName: v,
      toolbarRef: y,
      trailing: b,
    } = e,
    x;
  t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== s || t[4] !== l || t[5] !== u
    ? ((x = (0, hi.jsx)(hi.Fragment, {
        children: (0, hi.jsx)(Ln, {
          backLabel: i,
          canGoBack: a,
          canGoForward: o,
          color: `ghostActive`,
          forwardLabel: s,
          onBack: l,
          onForward: u,
        }),
      })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = l),
      (t[5] = u),
      (t[6] = x))
    : (x = t[6]);
  let S = c ? g : h,
    C = c ? g : h,
    w = m ? `ghost` : `ghostActive`,
    E = c ? f : d,
    D;
  t[7] === c
    ? (D = t[8])
    : ((D = c ? (0, hi.jsx)(xe, {}) : (0, hi.jsx)(se, { "aria-hidden": !1, asset: T })),
      (t[7] = c),
      (t[8] = D));
  let O;
  t[9] !== c || t[10] !== m || t[11] !== C || t[12] !== w || t[13] !== E || t[14] !== D
    ? ((O = (0, hi.jsx)(n, {
        "aria-busy": c,
        "aria-label": C,
        color: w,
        disabled: m,
        onClick: E,
        size: `toolbar`,
        uniform: !0,
        children: D,
      })),
      (t[9] = c),
      (t[10] = m),
      (t[11] = C),
      (t[12] = w),
      (t[13] = E),
      (t[14] = D),
      (t[15] = O))
    : (O = t[15]);
  let k;
  t[16] !== S || t[17] !== O
    ? ((k = (0, hi.jsx)(pn, { tooltipContent: S, side: `bottom`, children: O })),
      (t[16] = S),
      (t[17] = O),
      (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== x || t[20] !== k
    ? ((A = (0, hi.jsxs)(`div`, { className: `flex items-center gap-px`, children: [x, k] })),
      (t[19] = x),
      (t[20] = k),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === b
    ? (j = t[23])
    : ((j = (0, hi.jsx)(`div`, { className: `flex items-center justify-end gap-1.5`, children: b })),
      (t[22] = b),
      (t[23] = j));
  let M;
  t[24] !== r || t[25] !== p || t[26] !== j || t[27] !== A || t[28] !== _ || t[29] !== v || t[30] !== y
    ? ((M = (0, hi.jsxs)(Vn, {
        ref: y,
        "aria-hidden": _,
        className: v,
        "data-browser-sidebar-toolbar": `true`,
        onPointerDown: p,
        children: [A, r, j],
      })),
      (t[24] = r),
      (t[25] = p),
      (t[26] = j),
      (t[27] = A),
      (t[28] = _),
      (t[29] = v),
      (t[30] = y),
      (t[31] = M))
    : (M = t[31]);
  let N = c ? `opacity-100` : `opacity-0`,
    P;
  t[32] === N
    ? (P = t[33])
    : ((P = X(`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden transition-opacity`, N)),
      (t[32] = N),
      (t[33] = P));
  let F;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, hi.jsx)(`div`, { className: `h-full w-full animate-pulse bg-info-soft` })), (t[34] = F))
    : (F = t[34]);
  let I;
  t[35] === P
    ? (I = t[36])
    : ((I = (0, hi.jsx)(`div`, { "aria-hidden": !0, className: P, children: F })), (t[35] = P), (t[36] = I));
  let L;
  return (
    t[37] !== M || t[38] !== I
      ? ((L = (0, hi.jsxs)(hi.Fragment, { children: [M, I] })), (t[37] = M), (t[38] = I), (t[39] = L))
      : (L = t[39]),
    L
  );
}
function pi(e) {
  let t = (0, mi.c)(37),
    {
      addressBarRef: n,
      addressContainerRef: r,
      addressContentsRef: i,
      browserTabId: a,
      certificateErrorAddressParts: o,
      conversationId: s,
      currentUrl: c,
      externalOpen: l,
      hasAddress: u,
      input: d,
      isAddressEditing: f,
      isSiteInfoOpen: p,
      onAddressBlurCapture: m,
      onAddressClick: h,
      onAddressContextMenu: g,
      onAddressFocusCapture: _,
      onSiteInfoOpenChange: v,
      openSiteInfo: y,
      renderPermissionPrompt: b,
      securityState: x,
      shouldAnimateAddressExpansion: S,
      siteTools: C,
    } = e,
    w;
  t[0] !== f || t[1] !== p
    ? ((w = X(
        `group/address-bar flex h-[28px] min-w-0 w-full items-center overflow-hidden rounded-[10px] transition-[background-color,box-shadow] duration-basic ease-[cubic-bezier(0.2,0,0,1)] motion-reduce:transition-colors`,
        f
          ? `bg-primary-ghost-hover ring-1 ring-inset ring-border`
          : X(
              `cursor-text focus-within:bg-primary-ghost-hover focus-within:ring-1 focus-within:ring-inset focus-within:ring-border`,
              p ? `bg-primary-ghost-hover` : `bg-transparent hover:bg-primary-ghost-hover`,
            ),
      )),
      (t[0] = f),
      (t[1] = p),
      (t[2] = w))
    : (w = t[2]);
  let T;
  t[3] !== a ||
  t[4] !== s ||
  t[5] !== c ||
  t[6] !== f ||
  t[7] !== p ||
  t[8] !== v ||
  t[9] !== y ||
  t[10] !== b ||
  t[11] !== x ||
  t[12] !== S
    ? ((T = (0, hi.jsx)(si, {
        browserTabId: a,
        conversationId: s,
        currentUrl: c,
        isAddressEditing: f,
        isOpen: p,
        onOpenChange: v,
        openSiteInfo: y,
        renderPermissionPrompt: b,
        securityState: x,
        shouldAnimateAddressExpansion: S,
      })),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c),
      (t[6] = f),
      (t[7] = p),
      (t[8] = v),
      (t[9] = y),
      (t[10] = b),
      (t[11] = x),
      (t[12] = S),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== o || t[15] !== u
    ? ((E =
        o == null
          ? null
          : (0, hi.jsx)(`div`, {
              "aria-hidden": `true`,
              className: X(
                `pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden px-2 text-sm leading-[18px] whitespace-nowrap`,
                u && gi,
              ),
              children: (0, hi.jsxs)(`span`, {
                className: `max-w-full min-w-0 truncate text-center text-default`,
                children: [
                  (0, hi.jsx)(`span`, { className: `text-danger line-through`, children: o.scheme }),
                  (0, hi.jsx)(`span`, { children: o.rest }),
                ],
              }),
            })),
      (t[14] = o),
      (t[15] = u),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== d || t[18] !== C || t[19] !== E
    ? ((D = (0, hi.jsxs)(`div`, { className: `relative h-full min-w-0 flex-1`, children: [E, C, d] })),
      (t[17] = d),
      (t[18] = C),
      (t[19] = E),
      (t[20] = D))
    : (D = t[20]);
  let O;
  t[21] !== i || t[22] !== l || t[23] !== h || t[24] !== g || t[25] !== w || t[26] !== T || t[27] !== D
    ? ((O = (0, hi.jsxs)(`div`, {
        ref: i,
        className: w,
        role: `presentation`,
        onClick: h,
        onContextMenu: g,
        children: [T, D, l],
      })),
      (t[21] = i),
      (t[22] = l),
      (t[23] = h),
      (t[24] = g),
      (t[25] = w),
      (t[26] = T),
      (t[27] = D),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== n || t[30] !== O
    ? ((k = (0, hi.jsx)(`div`, { ref: n, className: `relative w-full max-w-[770px]`, children: O })),
      (t[29] = n),
      (t[30] = O),
      (t[31] = k))
    : (k = t[31]);
  let A;
  return (
    t[32] !== r || t[33] !== m || t[34] !== _ || t[35] !== k
      ? ((A = (0, hi.jsx)(`div`, {
          ref: r,
          className: `flex min-w-0 flex-1 items-center justify-center px-1 no-drag`,
          onFocusCapture: _,
          onBlurCapture: m,
          children: k,
        })),
        (t[32] = r),
        (t[33] = m),
        (t[34] = _),
        (t[35] = k),
        (t[36] = A))
      : (A = t[36]),
    A
  );
}
var mi, hi, gi;
function _i() {
  return (_i = e(() => {
    ((mi = Sn()),
      le(),
      rt(),
      In(),
      hn(),
      J(),
      Ee(),
      Bn(),
      _t(),
      di(),
      (hi = En()),
      (gi = `[-webkit-mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)] [mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)]`));
  }))();
}
var vi, yi, bi, xi;
function Si() {
  return (Si = e(() => {
    ((vi = `_leading_q37cr_2`),
      (yi = `_address_q37cr_2`),
      (bi = `_addressText_q37cr_2`),
      (xi = { leading: vi, address: yi, addressText: bi }));
  }))();
}
function Ci(e) {
  let t = (0, Mi.c)(6),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ floating: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r !== void 0 && r,
    a;
  return (
    t[3] !== i || t[4] !== n
      ? ((a = i ? (0, Ni.jsx)(Ti, { ...n }) : (0, Ni.jsx)(fi, { ...n })), (t[3] = i), (t[4] = n), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function wi(e) {
  let t = (0, Mi.c)(6),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ floating: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = r !== void 0 && r,
    a;
  return (
    t[3] !== i || t[4] !== n
      ? ((a = i ? (0, Ni.jsx)(Oi, { ...n }) : (0, Ni.jsx)(pi, { ...n })), (t[3] = i), (t[4] = n), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function Ti(e) {
  let t = (0, Mi.c)(54),
    {
      address: r,
      annotationButton: i,
      backLabel: a,
      canGoBack: o,
      canGoForward: s,
      forwardLabel: c,
      isLoading: l,
      onBack: u,
      onForward: d,
      onReload: f,
      onStop: p,
      onToolbarPointerDown: m,
      reloadDisabled: h,
      reloadLabel: g,
      stopLabel: _,
      toolbarAriaHidden: v,
      toolbarClassName: y,
      toolbarRef: b,
      trailing: x,
    } = e,
    S = Ie(),
    C;
  t[0] === y
    ? (C = t[1])
    : ((C = X(
        `@container/browser-toolbar flex h-12 min-w-0 items-center gap-1.5 px-2 py-2 text-default select-none`,
        y,
      )),
      (t[0] = y),
      (t[1] = C));
  let w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = X(
        xi.leading,
        `flex w-max shrink-0 items-center gap-1.5 @3xl/browser-toolbar:grid @3xl/browser-toolbar:min-w-min @3xl/browser-toolbar:auto-cols-[minmax(auto,max-content)] @3xl/browser-toolbar:grid-flow-col`,
      )),
      (t[2] = w))
    : (w = t[2]);
  let E;
  t[3] === S
    ? (E = t[4])
    : ((E = S.formatMessage({
        id: `browserToolbar.navigation`,
        defaultMessage: `Navigation`,
        description: `Accessible label for browser back, forward, reload, and stop loading controls`,
      })),
      (t[3] = S),
      (t[4] = E));
  let D;
  t[5] !== a || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== u || t[10] !== d
    ? ((D = (0, Ni.jsx)(Ln, {
        backLabel: a,
        canGoBack: o,
        canGoForward: s,
        color: `ghostActive`,
        forwardLabel: c,
        onBack: u,
        onForward: d,
        radius: `full`,
      })),
      (t[5] = a),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = u),
      (t[10] = d),
      (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = (0, Ni.jsx)(cn, {})), (t[12] = O)) : (O = t[12]);
  let k;
  t[13] === D
    ? (k = t[14])
    : ((k = (0, Ni.jsxs)(Ni.Fragment, { children: [D, O] })), (t[13] = D), (t[14] = k));
  let A = l ? _ : g,
    j = l ? _ : g,
    M = h ? `ghost` : `ghostActive`,
    N = l ? p : f,
    P;
  t[15] === l
    ? (P = t[16])
    : ((P = l ? (0, Ni.jsx)(xe, {}) : (0, Ni.jsx)(se, { "aria-hidden": !1, asset: T })),
      (t[15] = l),
      (t[16] = P));
  let F;
  t[17] !== l || t[18] !== h || t[19] !== N || t[20] !== P || t[21] !== j || t[22] !== M
    ? ((F = (0, Ni.jsx)(n, {
        "aria-busy": l,
        "aria-label": j,
        color: M,
        disabled: h,
        onClick: N,
        radius: `full`,
        size: `toolbar`,
        uniform: !0,
        children: P,
      })),
      (t[17] = l),
      (t[18] = h),
      (t[19] = N),
      (t[20] = P),
      (t[21] = j),
      (t[22] = M),
      (t[23] = F))
    : (F = t[23]);
  let I;
  t[24] !== F || t[25] !== A
    ? ((I = (0, Ni.jsx)(pn, { tooltipContent: A, side: `bottom`, children: F })),
      (t[24] = F),
      (t[25] = A),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] !== I || t[28] !== E || t[29] !== k
    ? ((L = (0, Ni.jsxs)(ht, { label: E, variant: `joined`, children: [k, I] })),
      (t[27] = I),
      (t[28] = E),
      (t[29] = k),
      (t[30] = L))
    : (L = t[30]);
  let ee;
  t[31] === i
    ? (ee = t[32])
    : ((ee = (0, Ni.jsx)(`div`, {
        className: `flex min-w-8 empty:hidden has-[>[aria-hidden=true]]:hidden @max-md/browser-toolbar:hidden`,
        children: i,
      })),
      (t[31] = i),
      (t[32] = ee));
  let R;
  t[33] !== L || t[34] !== ee
    ? ((R = (0, Ni.jsxs)(`div`, { ref: Di, className: w, children: [L, ee] })),
      (t[33] = L),
      (t[34] = ee),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] === x
    ? (z = t[37])
    : ((z = (0, Ni.jsx)(`div`, {
        ref: Ei,
        className: `flex w-max shrink-0 items-center gap-1.5 justify-self-end`,
        children: x,
      })),
      (t[36] = x),
      (t[37] = z));
  let B;
  t[38] !== r || t[39] !== m || t[40] !== C || t[41] !== R || t[42] !== z || t[43] !== v || t[44] !== b
    ? ((B = (0, Ni.jsxs)(`div`, {
        ref: b,
        "aria-hidden": v,
        className: C,
        "data-viewer-density": `compact`,
        "data-browser-sidebar-toolbar": `true`,
        onPointerDown: m,
        children: [R, r, z],
      })),
      (t[38] = r),
      (t[39] = m),
      (t[40] = C),
      (t[41] = R),
      (t[42] = z),
      (t[43] = v),
      (t[44] = b),
      (t[45] = B))
    : (B = t[45]);
  let V = l ? `opacity-100` : `opacity-0`,
    H;
  t[46] === V
    ? (H = t[47])
    : ((H = X(`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 overflow-hidden transition-opacity`, V)),
      (t[46] = V),
      (t[47] = H));
  let te;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Ni.jsx)(`div`, { className: `h-full w-full animate-pulse bg-info-soft` })), (t[48] = te))
    : (te = t[48]);
  let U;
  t[49] === H
    ? (U = t[50])
    : ((U = (0, Ni.jsx)(`div`, { "aria-hidden": !0, className: H, children: te })), (t[49] = H), (t[50] = U));
  let ne;
  return (
    t[51] !== B || t[52] !== U
      ? ((ne = (0, Ni.jsxs)(Ni.Fragment, { children: [B, U] })), (t[51] = B), (t[52] = U), (t[53] = ne))
      : (ne = t[53]),
    ne
  );
}
function Ei(e) {
  return ji(e, `--browser-trailing-width`);
}
function Di(e) {
  return ji(e, `--browser-leading-width`);
}
function Oi(e) {
  let t = (0, Mi.c)(45),
    {
      addressBarRef: n,
      addressContainerRef: r,
      addressContentsRef: i,
      browserTabId: a,
      certificateErrorAddressParts: o,
      conversationId: s,
      currentUrl: c,
      externalOpen: l,
      hasAddress: u,
      input: d,
      isAddressEditing: f,
      isSiteInfoOpen: p,
      onAddressBlurCapture: m,
      onAddressClick: h,
      onAddressContextMenu: g,
      onAddressFocusCapture: _,
      onSiteInfoOpenChange: v,
      openSiteInfo: y,
      renderPermissionPrompt: b,
      securityState: x,
      shouldAnimateAddressExpansion: S,
      siteTools: C,
    } = e,
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = X(
        xi.address,
        `flex min-w-0 flex-1 items-center justify-center px-1 no-drag @max-sm/browser-toolbar:px-0`,
      )),
      (t[0] = w))
    : (w = t[0]);
  let T = (f || p) && `ring-1 ring-inset ring-border`,
    E;
  t[1] === T
    ? (E = t[2])
    : ((E = X(
        `@container/address group/address-bar flex min-w-0 w-full items-center overflow-hidden`,
        `cursor-text focus-within:ring-1 focus-within:ring-inset focus-within:ring-border`,
        T,
      )),
      (t[1] = T),
      (t[2] = E));
  let D = f || p ? `active` : void 0,
    O;
  t[3] !== a ||
  t[4] !== s ||
  t[5] !== c ||
  t[6] !== f ||
  t[7] !== p ||
  t[8] !== v ||
  t[9] !== y ||
  t[10] !== b ||
  t[11] !== x ||
  t[12] !== S
    ? ((O = (0, Ni.jsx)(`div`, {
        ref: Ai,
        className: `flex shrink-0`,
        children: (0, Ni.jsx)(si, {
          floating: !0,
          browserTabId: a,
          conversationId: s,
          currentUrl: c,
          isAddressEditing: f,
          isOpen: p,
          onOpenChange: v,
          openSiteInfo: y,
          renderPermissionPrompt: b,
          securityState: x,
          shouldAnimateAddressExpansion: S,
        }),
      })),
      (t[3] = a),
      (t[4] = s),
      (t[5] = c),
      (t[6] = f),
      (t[7] = p),
      (t[8] = v),
      (t[9] = y),
      (t[10] = b),
      (t[11] = x),
      (t[12] = S),
      (t[13] = O))
    : (O = t[13]);
  let k = !f && xi.addressText,
    A;
  t[14] === k ? (A = t[15]) : ((A = X(`flex h-full min-w-0 flex-1`, k)), (t[14] = k), (t[15] = A));
  let j;
  t[16] !== o || t[17] !== u
    ? ((j =
        o == null
          ? null
          : (0, Ni.jsx)(`div`, {
              "aria-hidden": `true`,
              className: X(
                `pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden px-2 text-sm leading-[18px] whitespace-nowrap`,
                u && Pi,
              ),
              children: (0, Ni.jsxs)(`span`, {
                className: `max-w-full min-w-0 truncate text-center text-default`,
                children: [
                  (0, Ni.jsx)(`span`, { className: `text-danger line-through`, children: o.scheme }),
                  (0, Ni.jsx)(`span`, { children: o.rest }),
                ],
              }),
            })),
      (t[16] = o),
      (t[17] = u),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] !== d || t[20] !== C || t[21] !== j
    ? ((M = (0, Ni.jsxs)(`div`, { className: `relative h-full min-w-0 flex-1`, children: [j, C, d] })),
      (t[19] = d),
      (t[20] = C),
      (t[21] = j),
      (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] !== A || t[24] !== M
    ? ((N = (0, Ni.jsx)(`div`, { className: A, children: M })), (t[23] = A), (t[24] = M), (t[25] = N))
    : (N = t[25]);
  let P = u ? l : null,
    F;
  t[26] === P
    ? (F = t[27])
    : ((F = (0, Ni.jsx)(`div`, {
        ref: ki,
        className: `flex w-max shrink-0 items-center justify-self-end`,
        children: P,
      })),
      (t[26] = P),
      (t[27] = F));
  let I;
  t[28] !== i ||
  t[29] !== h ||
  t[30] !== g ||
  t[31] !== N ||
  t[32] !== F ||
  t[33] !== E ||
  t[34] !== D ||
  t[35] !== O
    ? ((I = (0, Ni.jsxs)(an, {
        ref: i,
        className: E,
        "data-state": D,
        role: `presentation`,
        variant: `input`,
        onClick: h,
        onContextMenu: g,
        children: [O, N, F],
      })),
      (t[28] = i),
      (t[29] = h),
      (t[30] = g),
      (t[31] = N),
      (t[32] = F),
      (t[33] = E),
      (t[34] = D),
      (t[35] = O),
      (t[36] = I))
    : (I = t[36]);
  let L;
  t[37] !== n || t[38] !== I
    ? ((L = (0, Ni.jsx)(`div`, { ref: n, className: `relative w-full max-w-[770px] min-w-0`, children: I })),
      (t[37] = n),
      (t[38] = I),
      (t[39] = L))
    : (L = t[39]);
  let ee;
  return (
    t[40] !== r || t[41] !== m || t[42] !== _ || t[43] !== L
      ? ((ee = (0, Ni.jsx)(`div`, {
          ref: r,
          className: w,
          onFocusCapture: _,
          onBlurCapture: m,
          children: L,
        })),
        (t[40] = r),
        (t[41] = m),
        (t[42] = _),
        (t[43] = L),
        (t[44] = ee))
      : (ee = t[44]),
    ee
  );
}
function ki(e) {
  return ji(e, `--browser-trailing-width`);
}
function Ai(e) {
  return ji(e, `--browser-leading-width`);
}
function ji(e, t) {
  let n = e?.parentElement;
  if (e == null || n == null) return;
  let r = (e) => {
      let r = `${Math.round(e)}px`;
      n.style.getPropertyValue(t) !== r && n.style.setProperty(t, r);
    },
    i = new ResizeObserver((e) => {
      for (let t of e) r(Ne(t).width);
    });
  return (i.observe(e, { box: `border-box` }), r(e.offsetWidth), () => i.disconnect());
}
var Mi, Ni, Pi;
function Fi() {
  return (Fi = e(() => {
    ((Mi = Sn()),
      le(),
      rt(),
      Mt(),
      In(),
      hn(),
      J(),
      Ee(),
      _t(),
      b(),
      _i(),
      di(),
      Si(),
      (Ni = En()),
      (Pi = `[-webkit-mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)] [mask-image:linear-gradient(to_right,black_calc(100%_-_16px),transparent)]`));
  }))();
}
function Ii(e) {
  let t = (0, Ri.c)(10),
    { floating: r, onClick: i } = e,
    a = r !== void 0 && r,
    o = Ie(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `thread.browser.sites.settings`,
        defaultMessage: `Site settings`,
        description: `Accessible label for opening Site settings from the browser toolbar`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c = s,
    l = a ? `full` : `default`,
    u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, zi.jsx)(se, { asset: bn })), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== c || t[4] !== i || t[5] !== l
    ? ((d = (0, zi.jsx)(n, {
        "aria-label": c,
        color: `ghostActive`,
        radius: l,
        "data-browser-sidebar-skip-address-commit": `true`,
        size: `toolbar`,
        uniform: !0,
        onClick: i,
        children: u,
      })),
      (t[3] = c),
      (t[4] = i),
      (t[5] = l),
      (t[6] = d))
    : (d = t[6]);
  let f;
  return (
    t[7] !== c || t[8] !== d
      ? ((f = (0, zi.jsx)(pn, { tooltipContent: c, side: `bottom`, children: d })),
        (t[7] = c),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Li(e) {
  let t = (0, Ri.c)(7),
    { floating: r, isOwnerOnly: i, onClick: a } = e,
    o = r !== void 0 && r ? `full` : `default`,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = i ? (0, zi.jsx)(se, { asset: d }) : (0, zi.jsx)(se, { asset: Me })), (t[0] = i), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, zi.jsx)(z, {
        id: `thread.browser.sites.share`,
        defaultMessage: `Share`,
        description: `Button label for sharing the current Site from the browser toolbar`,
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  return (
    t[3] !== a || t[4] !== o || t[5] !== s
      ? ((l = (0, zi.jsxs)(n, {
          className: `!text-default`,
          color: `outline`,
          radius: o,
          "data-browser-sidebar-skip-address-commit": `true`,
          size: `toolbar`,
          onClick: a,
          children: [s, c],
        })),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
var Ri, zi;
function Bi() {
  return (Bi = e(() => {
    ((Ri = Sn()), Be(), Ft(), at(), Mt(), hn(), J(), _t(), (zi = En()));
  }))();
}
function Vi(e) {
  let t = (0, Hi.c)(4),
    { children: n, floating: r } = e,
    i = Ie(),
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = r
          ? (0, Ui.jsx)(`div`, {
              className: `flex not-has-[button]:hidden @max-lg/browser-toolbar:not-has-[button:not([data-browser-toolbar-overflow])]:hidden @max-lg/browser-toolbar:not-has-[button:not([data-browser-toolbar-overflow]):not([tabindex='-1'])]:invisible`,
              children: (0, Ui.jsx)(ht, {
                label: i.formatMessage({
                  id: `browserToolbar.actions`,
                  defaultMessage: `Browser actions`,
                  description: `Accessible label for browser toolbar actions`,
                }),
                variant: `joined`,
                children: n,
              }),
            })
          : (0, Ui.jsx)(Ui.Fragment, { children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
var Hi, Ui;
function Wi() {
  return (Wi = e(() => {
    ((Hi = Sn()), Mt(), b(), (Ui = En()));
  }))();
}
function Gi(e, t) {
  let n = [e?.annotations];
  t && n.push(e?.webMcp);
  for (let e of [`available`, `pending-available`, `pending-unavailable`]) if (n.includes(e)) return e;
  return `unavailable`;
}
function Ki(e) {
  return e === `containers` || e === `controls` ? e : e === `metadata-with-targets` ? `metadata` : null;
}
function qi() {
  return (qi = e(() => {}))();
}
function Ji(e) {
  let t = (0, ea.c)(33),
    { enabled: n, features: r, onEnabledChange: i, onPreviewChange: a, previewKey: o } = e,
    s = (0, na.useId)(),
    [c, l] = (0, na.useState)(!1),
    u;
  t[0] !== c || t[1] !== a
    ? ((u = () => {
        (c && a?.(null), l(Yi));
      }),
      (t[0] = c),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === r.length
    ? (d = t[4])
    : ((d = (0, Q.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Q.jsx)(z, {
          id: `thread.browser.siteTools.annotationFeaturesWithCount`,
          defaultMessage: `Annotation features ({count, number})`,
          description: `Disclosure heading for the types of annotation features detected on the current browser page, followed by the number of feature types`,
          values: { count: r.length },
        }),
      })),
      (t[3] = r.length),
      (t[4] = d));
  let f;
  t[5] !== n || t[6] !== c
    ? ((f =
        !n &&
        !c &&
        (0, Q.jsx)(`span`, {
          className: `text-xs text-secondary`,
          children: (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationFeaturesDisabled`,
            defaultMessage: `Custom annotation features are disabled. Standard annotation mode still works.`,
            description: `Explanation shown while a website's custom annotation features are disabled; the standard annotation mode remains available`,
          }),
        })),
      (t[5] = n),
      (t[6] = c),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== d || t[9] !== f
    ? ((p = (0, Q.jsxs)(`span`, { className: `flex min-w-0 flex-1 flex-col`, children: [d, f] })),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m = c && `rotate-90`,
    g;
  t[11] === m ? (g = t[12]) : ((g = X(`text-tertiary transition-transform`, m)), (t[11] = m), (t[12] = g));
  let _;
  t[13] === g ? (_ = t[14]) : ((_ = (0, Q.jsx)(h, { className: g })), (t[13] = g), (t[14] = _));
  let v;
  t[15] !== c || t[16] !== u || t[17] !== p || t[18] !== _
    ? ((v = (0, Q.jsxs)(`button`, {
        className: `group flex w-full cursor-interaction items-center gap-1.5 rounded-lg px-[var(--padding-row-x)] py-2 text-start text-sm text-default outline-hidden no-drag hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover`,
        type: `button`,
        "aria-expanded": c,
        onClick: u,
        children: [p, _],
      })),
      (t[15] = c),
      (t[16] = u),
      (t[17] = p),
      (t[18] = _),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] !== n || t[21] !== r || t[22] !== c || t[23] !== i || t[24] !== a || t[25] !== o || t[26] !== s
    ? ((y =
        c &&
        (0, Q.jsx)(st.div, {
          className: `grid min-h-0`,
          animate: { gridTemplateRows: `1fr`, opacity: 1 },
          exit: { gridTemplateRows: `0fr`, opacity: 0 },
          initial: { gridTemplateRows: `0fr`, opacity: 0 },
          transition: dn,
          children: (0, Q.jsx)(`div`, {
            className: `flex min-h-0 flex-col overflow-hidden`,
            children: (0, Q.jsxs)(Y.Section, {
              className: `max-h-96 min-h-0 overflow-y-auto`,
              children: [
                (0, Q.jsx)(
                  Xi,
                  { enabled: n, features: r, onPreviewChange: n && c ? a : void 0 },
                  `${o}:${n && c && a != null}`,
                ),
                (0, Q.jsxs)(`div`, {
                  className: `flex items-center gap-2 p-2`,
                  children: [
                    (0, Q.jsx)(Nt, {
                      id: s,
                      checked: n,
                      size: `sm`,
                      tone: `neutral`,
                      onChange: (e) => {
                        (a?.(null), i(e));
                      },
                    }),
                    (0, Q.jsx)(`label`, {
                      className: `flex-1 cursor-interaction text-xs text-secondary select-none`,
                      htmlFor: s,
                      children: n
                        ? (0, Q.jsx)(z, {
                            id: `thread.browser.siteTools.customAnnotationFeaturesEnabled`,
                            defaultMessage: `Annotation features are enabled`,
                            description: `Label beside the checked switch indicating that the website's custom annotation features are enabled`,
                          })
                        : (0, Q.jsx)(z, {
                            id: `thread.browser.siteTools.customAnnotationFeaturesDisabled`,
                            defaultMessage: `Annotation features are disabled`,
                            description: `Label beside the unchecked switch indicating that the website's custom annotation features are disabled`,
                          }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        })),
      (t[20] = n),
      (t[21] = r),
      (t[22] = c),
      (t[23] = i),
      (t[24] = a),
      (t[25] = o),
      (t[26] = s),
      (t[27] = y))
    : (y = t[27]);
  let b;
  t[28] === y ? (b = t[29]) : ((b = (0, Q.jsx)(we, { initial: !1, children: y })), (t[28] = y), (t[29] = b));
  let x;
  return (
    t[30] !== b || t[31] !== v
      ? ((x = (0, Q.jsxs)(`div`, { className: `shrink-0`, children: [v, b] })),
        (t[30] = b),
        (t[31] = v),
        (t[32] = x))
      : (x = t[32]),
    x
  );
}
function Yi(e) {
  return !e;
}
function Xi(e) {
  let t = (0, ea.c)(13),
    { enabled: n, features: r, onPreviewChange: i } = e,
    a = (0, na.useId)(),
    o = (0, na.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { hovered: void 0, focused: null }), (t[0] = s))
    : (s = t[0]);
  let [c, l] = (0, na.useState)(s),
    u = c.hovered != null && !r.includes(c.hovered),
    d = u ? void 0 : c.hovered,
    f;
  t[1] !== r || t[2] !== u || t[3] !== c.focused
    ? ((f = !u && c.focused != null && r.includes(c.focused) ? c.focused : null),
      (t[1] = r),
      (t[2] = u),
      (t[3] = c.focused),
      (t[4] = f))
    : (f = t[4]);
  let p = f;
  (d !== c.hovered || p !== c.focused) && l({ hovered: d, focused: p });
  let m = d ?? p,
    h;
  t[5] !== m || t[6] !== i
    ? ((h = i != null && m != null ? Ki(m) : null), (t[5] = m), (t[6] = i), (t[7] = h))
    : (h = t[7]);
  let g = h,
    _ = (e) => {
      l(e);
      let t = e.hovered ?? e.focused,
        n = t == null ? null : Ki(t);
      i?.(n != null && o.current != null ? { feature: n, color: getComputedStyle(o.current).color } : null);
    },
    v = !n && `text-secondary`,
    y;
  t[8] === v ? (y = t[9]) : ((y = X(`flex flex-col px-2 py-1`, v)), (t[8] = v), (t[9] = y));
  let b = (0, ta.default)(r, Qi).map((e) => {
      let t = i == null ? null : Ki(e);
      return (0, Q.jsx)(
        `div`,
        {
          className: X(
            `-mx-2 flex flex-col gap-1 rounded-lg px-2 py-1 outline-hidden select-none`,
            t != null && g === t && `bg-text-info/10 text-info`,
          ),
          role: `group`,
          "aria-labelledby": `${a}-${e}`,
          tabIndex: t == null ? void 0 : 0,
          onPointerEnter: () => {
            _({ hovered: e, focused: p });
          },
          onPointerLeave: () => {
            _({ hovered: void 0, focused: p });
          },
          onPointerDown: Zi,
          onFocus: () => {
            _({ hovered: d, focused: e });
          },
          onBlur: () => {
            _({ hovered: d, focused: null });
          },
          children: (0, Q.jsx)($i, { enabled: n, feature: e, titleId: `${a}-${e}` }),
        },
        e,
      );
    }),
    x;
  return (
    t[10] !== y || t[11] !== b
      ? ((x = (0, Q.jsx)(`dl`, { className: y, children: b })), (t[10] = y), (t[11] = b), (t[12] = x))
      : (x = t[12]),
    (0, Q.jsxs)(Q.Fragment, {
      children: [(0, Q.jsx)(`span`, { ref: o, className: `hidden text-info`, "aria-hidden": !0 }), x],
    })
  );
}
function Zi(e) {
  e.button === 0 && e.preventDefault();
}
function Qi(e) {
  return e === `surfaces`;
}
function $i(e) {
  let t = (0, ea.c)(68),
    { enabled: n, feature: r, titleId: i } = e;
  switch (r) {
    case `containers`: {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationRegions`,
            defaultMessage: `Annotatable content`,
            description: `Annotation feature identifying website content that the site has made available for annotation`,
          })),
          (t[0] = e))
        : (e = t[0]);
      let r;
      t[1] === i
        ? (r = t[2])
        : ((r = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[1] = i),
          (t[2] = r));
      let a = n && `text-codex-description`,
        o;
      t[3] === a ? (o = t[4]) : ((o = X(`text-xs`, a)), (t[3] = a), (t[4] = o));
      let s;
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationRegionsDescription`,
            defaultMessage: `This site specifies which elements on the page can be selected to annotate`,
            description: `Explanation that the website specifies which page elements users can select for annotation`,
          })),
          (t[5] = s))
        : (s = t[5]);
      let c;
      t[6] === o
        ? (c = t[7])
        : ((c = (0, Q.jsx)(`dd`, { className: o, children: s })), (t[6] = o), (t[7] = c));
      let l;
      return (
        t[8] !== r || t[9] !== c
          ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [r, c] })), (t[8] = r), (t[9] = c), (t[10] = l))
          : (l = t[10]),
        l
      );
    }
    case `controls`: {
      let e;
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationControls`,
            defaultMessage: `Custom controls`,
            description: `Annotation feature for controls supplied by a website in the annotation editor`,
          })),
          (t[11] = e))
        : (e = t[11]);
      let r;
      t[12] === i
        ? (r = t[13])
        : ((r = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[12] = i),
          (t[13] = r));
      let a = n && `text-codex-description`,
        o;
      t[14] === a ? (o = t[15]) : ((o = X(`text-xs`, a)), (t[14] = a), (t[15] = o));
      let s;
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationControlsDescription`,
            defaultMessage: `This site provides custom controls to adjust while annotating certain elements`,
            description: `Explanation that the website supplies adjustable controls when users annotate particular page elements`,
          })),
          (t[16] = s))
        : (s = t[16]);
      let c;
      t[17] === o
        ? (c = t[18])
        : ((c = (0, Q.jsx)(`dd`, { className: o, children: s })), (t[17] = o), (t[18] = c));
      let l;
      return (
        t[19] !== r || t[20] !== c
          ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [r, c] })), (t[19] = r), (t[20] = c), (t[21] = l))
          : (l = t[21]),
        l
      );
    }
    case `surfaces`: {
      let e;
      t[22] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationSurfaces`,
            defaultMessage: `Interactive surfaces`,
            description: `Annotation feature for selecting website-defined custom elements using the pointer position`,
          })),
          (t[22] = e))
        : (e = t[22]);
      let r;
      t[23] === i
        ? (r = t[24])
        : ((r = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[23] = i),
          (t[24] = r));
      let a = n && `text-codex-description`,
        o;
      t[25] === a ? (o = t[26]) : ((o = X(`text-xs`, a)), (t[25] = a), (t[26] = o));
      let s;
      t[27] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationSurfacesDescription`,
            defaultMessage: `Part of this site supports annotating custom elements based on your pointer position`,
            description: `Explanation that a region of the website determines which custom element to annotate from the user's pointer position`,
          })),
          (t[27] = s))
        : (s = t[27]);
      let c;
      t[28] === o
        ? (c = t[29])
        : ((c = (0, Q.jsx)(`dd`, { className: o, children: s })), (t[28] = o), (t[29] = c));
      let l;
      return (
        t[30] !== r || t[31] !== c
          ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [r, c] })), (t[30] = r), (t[31] = c), (t[32] = l))
          : (l = t[32]),
        l
      );
    }
    case `mode-toggle`: {
      let e;
      t[33] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationModeToggle`,
            defaultMessage: `Annotation mode toggle`,
            description: `Annotation feature for a website button that turns annotation mode on or off`,
          })),
          (t[33] = e))
        : (e = t[33]);
      let r;
      t[34] === i
        ? (r = t[35])
        : ((r = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[34] = i),
          (t[35] = r));
      let a = n && `text-codex-description`,
        o;
      t[36] === a ? (o = t[37]) : ((o = X(`text-xs`, a)), (t[36] = a), (t[37] = o));
      let s;
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationModeToggleDescription`,
            defaultMessage: `This site has a button that toggles annotation mode on or off`,
            description: `Explanation shown after the website has used the annotation mode toggle API, describing a site button that turns annotation mode on or off`,
          })),
          (t[38] = s))
        : (s = t[38]);
      let c;
      t[39] === o
        ? (c = t[40])
        : ((c = (0, Q.jsx)(`dd`, { className: o, children: s })), (t[39] = o), (t[40] = c));
      let l;
      return (
        t[41] !== r || t[42] !== c
          ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [r, c] })), (t[41] = r), (t[42] = c), (t[43] = l))
          : (l = t[43]),
        l
      );
    }
    case `requests`:
    case `requests-with-prompts`: {
      let e;
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationRequests`,
            defaultMessage: `Site-started annotations`,
            description: `Annotation feature for websites that have opened the annotation editor for the user`,
          })),
          (t[44] = e))
        : (e = t[44]);
      let a;
      t[45] === i
        ? (a = t[46])
        : ((a = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[45] = i),
          (t[46] = a));
      let o = n && `text-codex-description`,
        s;
      t[47] === o ? (s = t[48]) : ((s = X(`text-xs`, o)), (t[47] = o), (t[48] = s));
      let c;
      t[49] === r
        ? (c = t[50])
        : ((c =
            r === `requests-with-prompts`
              ? (0, Q.jsx)(z, {
                  id: `thread.browser.siteTools.annotationRequestsWithPromptsDescription`,
                  defaultMessage: `This site has a button that opens an annotation editor and suggests a comment`,
                  description: `Explanation shown after the website has opened the annotation editor with a suggested comment, describing a site button that opens the editor and supplies a comment`,
                })
              : (0, Q.jsx)(z, {
                  id: `thread.browser.siteTools.annotationRequestsDescription`,
                  defaultMessage: `This site has a button that opens an annotation editor`,
                  description: `Explanation shown after the website has opened the annotation editor, describing a site button that opens the editor`,
                })),
          (t[49] = r),
          (t[50] = c));
      let l;
      t[51] !== s || t[52] !== c
        ? ((l = (0, Q.jsx)(`dd`, { className: s, children: c })), (t[51] = s), (t[52] = c), (t[53] = l))
        : (l = t[53]);
      let u;
      return (
        t[54] !== a || t[55] !== l
          ? ((u = (0, Q.jsxs)(Q.Fragment, { children: [a, l] })), (t[54] = a), (t[55] = l), (t[56] = u))
          : (u = t[56]),
        u
      );
    }
    case `metadata`:
    case `metadata-with-targets`: {
      let e;
      t[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationMetadata`,
            defaultMessage: `Additional context`,
            description: `Annotation feature for additional information supplied by the website about annotated content`,
          })),
          (t[57] = e))
        : (e = t[57]);
      let r;
      t[58] === i
        ? (r = t[59])
        : ((r = (0, Q.jsx)(`dt`, { id: i, className: `text-sm font-medium`, children: e })),
          (t[58] = i),
          (t[59] = r));
      let a = n && `text-codex-description`,
        o;
      t[60] === a ? (o = t[61]) : ((o = X(`text-xs`, a)), (t[60] = a), (t[61] = o));
      let s;
      t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((s = (0, Q.jsx)(z, {
            id: `thread.browser.siteTools.annotationMetadataDescription`,
            defaultMessage: `This site includes extra details when annotating certain elements`,
            description: `Explanation that the website includes additional information with annotations of certain page elements`,
          })),
          (t[62] = s))
        : (s = t[62]);
      let c;
      t[63] === o
        ? (c = t[64])
        : ((c = (0, Q.jsx)(`dd`, { className: o, children: s })), (t[63] = o), (t[64] = c));
      let l;
      return (
        t[65] !== r || t[66] !== c
          ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [r, c] })), (t[65] = r), (t[66] = c), (t[67] = l))
          : (l = t[67]),
        l
      );
    }
  }
}
var ea, ta, na, Q;
function ra() {
  return (ra = e(() => {
    ((ea = Sn()), rt(), C(), wt(), (ta = t(gn(), 1)), (na = Mn()), Mt(), u(), Ee(), K(), Ce(), (Q = En()));
  }))();
}
var ia, aa, oa, sa, ca, la, ua, da, fa;
function pa() {
  return (pa = e(() => {
    ((ia = `_ArrivalPulse_16dt5_1`),
      (aa = `_webMcpToolArrival_16dt5_101`),
      (oa = `_AnimatedDisclosure_16dt5_16`),
      (sa = `_StickyContent_16dt5_41`),
      (ca = `_StickyClipWindow_16dt5_48`),
      (la = `_StickyClipContent_16dt5_49`),
      (ua = `_webMcpStickyClipWindow_16dt5_101`),
      (da = `_webMcpStickyClipContent_16dt5_101`),
      (fa = {
        ArrivalPulse: ia,
        webMcpToolArrival: aa,
        AnimatedDisclosure: oa,
        StickyContent: sa,
        StickyClipWindow: ca,
        StickyClipContent: la,
        webMcpStickyClipWindow: ua,
        webMcpStickyClipContent: da,
      }));
  }))();
}
function ma(e) {
  let t = (0, _a.c)(21),
    { className: n, children: r, name: i, tool: a } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = X(fa.AnimatedDisclosure, `group/site-tool shrink-0`)), (t[0] = o))
    : (o = t[0]);
  let s = a?.title ?? i,
    c = a?.title ?? i,
    l;
  t[1] === c
    ? (l = t[2])
    : ((l = (0, va.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate text-sm font-medium select-text`,
        "data-tooltip-overflow-target": !0,
        children: c,
      })),
      (t[1] = c),
      (t[2] = l));
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, va.jsx)(_n, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-codex-description transition-transform group-open/site-tool:rotate-90`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === l
    ? (d = t[5])
    : ((d = (0, va.jsxs)(`summary`, {
        className: `-mx-2 flex cursor-interaction list-none items-center gap-1 rounded-lg px-2 py-1.5 text-start select-none group-open/site-tool:sticky group-open/site-tool:top-0 group-open/site-tool:z-10 marker:hidden hover:bg-primary-ghost-hover`,
        onClick: ga,
        children: [l, u],
      })),
      (t[4] = l),
      (t[5] = d));
  let f;
  t[6] !== s || t[7] !== d
    ? ((f = (0, va.jsx)(pn, { tooltipContent: s, openWhen: `trigger-overflows`, children: d })),
      (t[6] = s),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p = n ?? `gap-2`,
    m;
  t[9] === p
    ? (m = t[10])
    : ((m = X(fa.StickyClipContent, `flex flex-col pb-2`, p)), (t[9] = p), (t[10] = m));
  let h;
  t[11] !== i || t[12] !== a
    ? ((h = (0, va.jsx)(ha, { name: i, tool: a })), (t[11] = i), (t[12] = a), (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== r || t[15] !== h || t[16] !== m
    ? ((g = (0, va.jsx)(`div`, {
        className: fa.StickyContent,
        children: (0, va.jsx)(`div`, {
          className: fa.StickyClipWindow,
          children: (0, va.jsxs)(`div`, { className: m, children: [h, r] }),
        }),
      })),
      (t[14] = r),
      (t[15] = h),
      (t[16] = m),
      (t[17] = g))
    : (g = t[17]);
  let _;
  return (
    t[18] !== g || t[19] !== f
      ? ((_ = (0, va.jsxs)(`details`, { className: o, children: [f, g] })),
        (t[18] = g),
        (t[19] = f),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function ha(e) {
  let t = (0, _a.c)(21),
    { name: n, tool: r } = e,
    i = Ie();
  if (r == null || (r.title == null && r.annotations == null)) return null;
  let a;
  t[0] !== i || t[1] !== r.annotations?.readOnlyHint
    ? ((a =
        r.annotations?.readOnlyHint === !0
          ? (0, va.jsx)(se, {
              className: `shrink-0`,
              asset: ke,
              "aria-label": i.formatMessage({
                id: `thread.browser.webMcpTools.read`,
                defaultMessage: `Read`,
                description: `Label indicating a WebMCP tool that only reads page data`,
              }),
            })
          : null),
      (t[0] = i),
      (t[1] = r.annotations?.readOnlyHint),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== i || t[4] !== r.annotations?.readOnlyHint
    ? ((o =
        r.annotations?.readOnlyHint === !1
          ? (0, va.jsx)(se, {
              className: `shrink-0`,
              asset: Tn,
              "aria-label": i.formatMessage({
                id: `thread.browser.webMcpTools.readWrite`,
                defaultMessage: `Write`,
                description: `Label indicating a WebMCP tool that can modify page data`,
              }),
            })
          : null),
      (t[3] = i),
      (t[4] = r.annotations?.readOnlyHint),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== n || t[7] !== r.title
    ? ((s = r.title == null ? null : (0, va.jsx)(`span`, { className: `truncate`, children: n })),
      (t[6] = n),
      (t[7] = r.title),
      (t[8] = s))
    : (s = t[8]);
  let c;
  t[9] !== r.annotations?.readOnlyHint || t[10] !== r.title
    ? ((c =
        r.title == null && r.annotations?.readOnlyHint === !0
          ? (0, va.jsx)(z, {
              id: `thread.browser.webMcpTools.read`,
              defaultMessage: `Read`,
              description: `Label indicating a WebMCP tool that only reads page data`,
            })
          : null),
      (t[9] = r.annotations?.readOnlyHint),
      (t[10] = r.title),
      (t[11] = c))
    : (c = t[11]);
  let l;
  t[12] !== r.annotations?.readOnlyHint || t[13] !== r.title
    ? ((l =
        r.title == null && r.annotations?.readOnlyHint === !1
          ? (0, va.jsx)(z, {
              id: `thread.browser.webMcpTools.readWrite`,
              defaultMessage: `Write`,
              description: `Label indicating a WebMCP tool that can modify page data`,
            })
          : null),
      (t[12] = r.annotations?.readOnlyHint),
      (t[13] = r.title),
      (t[14] = l))
    : (l = t[14]);
  let u;
  return (
    t[15] !== a || t[16] !== o || t[17] !== s || t[18] !== c || t[19] !== l
      ? ((u = (0, va.jsxs)(`span`, {
          className: `flex items-center gap-1 text-xs text-codex-description select-text`,
          children: [a, o, s, c, l],
        })),
        (t[15] = a),
        (t[16] = o),
        (t[17] = s),
        (t[18] = c),
        (t[19] = l),
        (t[20] = u))
      : (u = t[20]),
    u
  );
}
function ga(e) {
  let t = e.currentTarget,
    n = t.closest(`details`),
    r = t.closest(`[data-webmcp-tool-scroll]`)?.parentElement;
  if (n == null || !n.open || r == null) return;
  let i = n.getBoundingClientRect().top,
    a = t.getBoundingClientRect().top,
    o = r.getBoundingClientRect(),
    s = o.top + r.clientTop;
  a > s + 1 || i >= a - 1 || (r.scrollTop += (i - s) / (o.height / r.offsetHeight));
}
var _a, va;
function ya() {
  return (ya = e(() => {
    ((_a = Sn()), j(), S(), rt(), Mt(), J(), _t(), Gt(), pa(), (va = En()));
  }))();
}
function ba(e) {
  let t = (0, Ta.c)(32),
    { refreshInspectorData: n, tools: r } = e,
    [i, a] = (0, Ea.useState)(!1);
  if (r == null) return null;
  let o;
  t[0] === r ? (o = t[1]) : ((o = r.filter(wa)), (t[0] = r), (t[1] = o));
  let s = o.length,
    c;
  t[2] === r ? (c = t[3]) : ((c = r.filter(Ca)), (t[2] = r), (t[3] = c));
  let l = c.length,
    u;
  t[4] !== i || t[5] !== n
    ? ((u = () => {
        (i || n(), a(Sa));
      }),
      (t[4] = i),
      (t[5] = n),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === r.length
    ? (d = t[8])
    : ((d = (0, Da.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Da.jsx)(z, {
          id: `thread.browser.webMcpTools.availableSiteToolsWithCount`,
          defaultMessage: `Available site tools ({count, number})`,
          description: `Section heading for all WebMCP tools available on the current browser site, followed by their count`,
          values: { count: r.length },
        }),
      })),
      (t[7] = r.length),
      (t[8] = d));
  let f;
  t[9] !== s || t[10] !== l
    ? ((f =
        s + l === 0
          ? null
          : (0, Da.jsx)(`span`, {
              className: `min-w-0 truncate text-xs leading-4 text-codex-description`,
              children: (0, Da.jsx)(z, {
                id: `thread.browser.webMcpTools.accessSummary`,
                defaultMessage: `{readCount} read, {writeCount, plural, one {# write tool} other {# write tools}}`,
                description: `Summary describing how many available site tools only read the page and how many can modify it`,
                values: { readCount: s, writeCount: l },
              }),
            })),
      (t[9] = s),
      (t[10] = l),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] !== d || t[13] !== f
    ? ((p = (0, Da.jsxs)(`span`, { className: `flex min-w-0 flex-1 flex-col`, children: [d, f] })),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m = i && `rotate-90`,
    h;
  t[15] === m
    ? (h = t[16])
    : ((h = X(`icon-xs shrink-0 text-tertiary transition-transform`, m)), (t[15] = m), (t[16] = h));
  let g;
  t[17] === h
    ? (g = t[18])
    : ((g = (0, Da.jsx)(_n, { "aria-hidden": !0, className: h })), (t[17] = h), (t[18] = g));
  let _;
  t[19] !== i || t[20] !== u || t[21] !== p || t[22] !== g
    ? ((_ = (0, Da.jsxs)(`button`, {
        type: `button`,
        "aria-expanded": i,
        className: `group flex w-full cursor-interaction items-center gap-1.5 rounded-lg px-[var(--padding-row-x)] py-2 text-start text-sm text-default outline-hidden no-drag hover:bg-primary-ghost-hover focus-visible:bg-primary-ghost-hover`,
        onClick: u,
        children: [p, g],
      })),
      (t[19] = i),
      (t[20] = u),
      (t[21] = p),
      (t[22] = g),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  t[24] !== i || t[25] !== r
    ? ((v =
        i &&
        (0, Da.jsx)(st.div, {
          animate: { gridTemplateRows: `1fr`, opacity: 1 },
          className: `grid min-h-0`,
          exit: { gridTemplateRows: `0fr`, opacity: 0 },
          initial: { gridTemplateRows: `0fr`, opacity: 0 },
          transition: dn,
          children: (0, Da.jsx)(`div`, {
            className: `flex min-h-0 flex-col overflow-hidden`,
            children: (0, Da.jsx)(Y.Section, {
              className: `max-h-96 min-h-0 overflow-y-auto`,
              children: (0, Da.jsx)(`div`, {
                className: `flex flex-col gap-1 px-2 py-1`,
                "data-webmcp-tool-scroll": ``,
                children: r.map(xa),
              }),
            }),
          }),
        })),
      (t[24] = i),
      (t[25] = r),
      (t[26] = v))
    : (v = t[26]);
  let y;
  t[27] === v ? (y = t[28]) : ((y = (0, Da.jsx)(we, { initial: !1, children: v })), (t[27] = v), (t[28] = y));
  let b;
  return (
    t[29] !== _ || t[30] !== y
      ? ((b = (0, Da.jsxs)(Da.Fragment, { children: [_, y] })), (t[29] = _), (t[30] = y), (t[31] = b))
      : (b = t[31]),
    b
  );
}
function xa(e) {
  return (0, Da.jsxs)(
    ma,
    {
      className: `gap-1.5`,
      name: e.name,
      tool: e,
      children: [
        e.description == null
          ? null
          : (0, Da.jsxs)(`details`, {
              className: X(
                fa.AnimatedDisclosure,
                `group/description flex shrink-0 flex-col open:mb-0.5 open:gap-1`,
              ),
              open: !0,
              children: [
                (0, Da.jsxs)(`summary`, {
                  className: `-mx-1 flex cursor-interaction list-none items-center gap-1 rounded-md px-1 text-start select-none marker:hidden`,
                  children: [
                    (0, Da.jsx)(`span`, {
                      className: `min-w-0 text-xs text-codex-description`,
                      children: (0, Da.jsx)(z, {
                        id: `thread.browser.webMcpTools.availableToolDescription`,
                        defaultMessage: `Description`,
                        description: `Label for the explanation of what an available WebMCP site tool does`,
                      }),
                    }),
                    (0, Da.jsx)(se, {
                      className: `shrink-0 text-codex-description transition-transform group-open/description:rotate-90`,
                      asset: D,
                      "aria-hidden": !0,
                    }),
                  ],
                }),
                (0, Da.jsx)(`p`, {
                  className: `rounded-md bg-text/5 p-2 text-xs text-codex-description select-text`,
                  children: e.description,
                }),
              ],
            }),
        e.inputSchema == null
          ? null
          : (0, Da.jsxs)(`details`, {
              className: X(fa.AnimatedDisclosure, `group/input-schema flex shrink-0 flex-col open:gap-1`),
              children: [
                (0, Da.jsxs)(`summary`, {
                  className: `-mx-1 flex cursor-interaction list-none items-center gap-1 rounded-md px-1 text-start select-none marker:hidden`,
                  children: [
                    (0, Da.jsx)(`span`, {
                      className: `min-w-0 text-xs text-codex-description`,
                      children: (0, Da.jsx)(z, {
                        id: `thread.browser.webMcpTools.availableToolInputSchema`,
                        defaultMessage: `Input schema`,
                        description: `Label for the JSON Schema defining the input accepted by an available WebMCP site tool`,
                      }),
                    }),
                    (0, Da.jsx)(se, {
                      className: `shrink-0 text-codex-description transition-transform group-open/input-schema:rotate-90`,
                      asset: D,
                      "aria-hidden": !0,
                    }),
                  ],
                }),
                (0, Da.jsx)(Yt, {
                  codeClassName: `text-xs`,
                  codeContainerClassName: `max-h-48 overflow-auto`,
                  content: JSON.stringify(e.inputSchema, null, 2),
                  language: `json`,
                  showActionBar: !1,
                }),
              ],
            }),
      ],
    },
    JSON.stringify([e.frameId, e.name]),
  );
}
function Sa(e) {
  return !e;
}
function Ca(e) {
  return e.annotations?.readOnlyHint === !1;
}
function wa(e) {
  return e.annotations?.readOnlyHint === !0;
}
var Ta, Ea, Da;
function Oa() {
  return (Oa = e(() => {
    ((Ta = Sn()),
      fe(),
      rt(),
      C(),
      wt(),
      (Ea = Mn()),
      Mt(),
      un(),
      u(),
      J(),
      Gt(),
      Ce(),
      ya(),
      pa(),
      (Da = En()));
  }))();
}
function ka(e) {
  let t = (0, Aa.c)(12),
    { onOpenSources: r, onRecordAction: i, recentToolCallCount: a, sourcesConversationId: o } = e;
  if (r == null || o == null || a === 0) return null;
  let s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, ja.jsx)(Y.Separator, { className: `shrink-0` })), (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== r || t[2] !== i
    ? ((c = () => {
        (i(Vt.CODEX_BROWSER_INTERACTIONS_SITE_TOOLS_ACTION_HISTORY_OPENED), r());
      }),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] === a
    ? (l = t[5])
    : ((l = (0, ja.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, ja.jsx)(z, {
          id: `thread.browser.webMcpTools.recentlyUsedSiteToolsWithCount`,
          defaultMessage: `Recently used ({count, number})`,
          description: `Button opening Sources for WebMCP tools invoked on the current website, followed by the number of saved tool invocations`,
          values: { count: a },
        }),
      })),
      (t[4] = a),
      (t[5] = l));
  let u;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, ja.jsx)(se, { className: `shrink-0 text-tertiary`, asset: vt })), (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === l
    ? (d = t[8])
    : ((d = (0, ja.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 items-center gap-1.5 px-[var(--padding-row-x)] py-2 text-sm`,
        children: [l, u],
      })),
      (t[7] = l),
      (t[8] = d));
  let f;
  return (
    t[9] !== c || t[10] !== d
      ? ((f = (0, ja.jsxs)(ja.Fragment, {
          children: [
            s,
            (0, ja.jsx)(n, {
              className: `w-full shrink-0 text-start`,
              color: `ghostActive`,
              radius: `large`,
              size: `inline`,
              onClick: c,
              children: d,
            }),
          ],
        })),
        (t[9] = c),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var Aa, ja;
function Ma() {
  return (Ma = e(() => {
    ((Aa = Sn()), Tt(), a(), Mt(), hn(), u(), J(), (ja = En()));
  }))();
}
function Na(e) {
  let t = (0, Ra.c)(89),
    {
      browserTabId: n,
      conversationId: r,
      currentUrl: i,
      getWebMcpInspectorData: a,
      isBrowserPanelVisible: o,
      isBrowserUseActive: s,
      canUseWebMcp: c,
      lastToolCall: l,
      onOpenChange: u,
      onOpenHelp: d,
      onOpenSources: f,
      onRecordAction: p,
      onSiteAnnotationFeaturesEnabledChange: m,
      open: h,
      setSiteAnnotationFeaturePreview: g,
      shouldReduceMotion: _,
      siteAnnotationFeatures: v,
      siteAnnotationFeaturesEnabled: y,
      sourcesConversationId: b,
      siteToolsAvailability: x,
      siteToolsHelpUrl: S,
      toolsRevision: C,
      recentToolCallCount: w,
    } = e,
    T = fn(),
    E;
  t[0] !== c || t[1] !== x ? ((E = Gi(x, c)), (t[0] = c), (t[1] = x), (t[2] = E)) : (E = t[2]);
  let D = E,
    O;
  t[3] === D ? (O = t[4]) : ((O = () => D !== `available`), (t[3] = D), (t[4] = O));
  let [k] = (0, za.useState)(O),
    A = (0, za.useRef)(null),
    j = D === `pending-available`,
    M = D === `available` || j,
    N = h && o && !s && y && x?.annotations === `available` && g != null,
    P;
  t[5] !== n || t[6] !== r || t[7] !== i || t[8] !== g
    ? ((P = (e) => {
        g == null ||
          (e == null && A.current == null) ||
          ((A.current = e?.feature ?? null),
          g({ browserTabId: n, conversationId: r, siteUrl: i, preview: e }).catch(Fa));
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = i),
      (t[8] = g),
      (t[9] = P))
    : (P = t[9]);
  let F = P,
    I;
  t[10] === F ? (I = t[11]) : ((I = () => F(null)), (t[10] = F), (t[11] = I));
  let L = (0, za.useEffectEvent)(I),
    ee;
  t[12] !== N || t[13] !== L || t[14] !== v
    ? ((ee = () => {
        (!N || (A.current != null && !v?.some((e) => Ki(e) === A.current))) && L();
      }),
      (t[12] = N),
      (t[13] = L),
      (t[14] = v),
      (t[15] = ee))
    : (ee = t[15]);
  let R;
  (t[16] !== N || t[17] !== v ? ((R = [N, v]), (t[16] = N), (t[17] = v), (t[18] = R)) : (R = t[18]),
    (0, za.useEffect)(ee, R));
  let z, B;
  (t[19] !== n || t[20] !== r || t[21] !== i || t[22] !== g
    ? ((z = () => () => {
        A.current != null &&
          ((A.current = null),
          g?.({ browserTabId: n, conversationId: r, siteUrl: i, preview: null }).catch(Pa));
      }),
      (B = [n, r, i, g]),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = g),
      (t[23] = z),
      (t[24] = B))
    : ((z = t[23]), (B = t[24])),
    (0, za.useEffect)(z, B));
  let V = x?.webMcp,
    H;
  t[25] !== n || t[26] !== c || t[27] !== r || t[28] !== i || t[29] !== h || t[30] !== V || t[31] !== C
    ? ((H = [`browser-sidebar-webmcp-inspector`, r, n, h, V, C, i, c]),
      (t[25] = n),
      (t[26] = c),
      (t[27] = r),
      (t[28] = i),
      (t[29] = h),
      (t[30] = V),
      (t[31] = C),
      (t[32] = H))
    : (H = t[32]);
  let te = H,
    U;
  t[33] !== n || t[34] !== r || t[35] !== a
    ? ((U = () => (a == null ? Promise.resolve(null) : a({ browserTabId: n, conversationId: r }))),
      (t[33] = n),
      (t[34] = r),
      (t[35] = a),
      (t[36] = U))
    : (U = t[36]);
  let ne = h && c && x?.webMcp === `available`,
    W;
  t[37] !== n || t[38] !== c || t[39] !== r || t[40] !== i || t[41] !== h || t[42] !== x?.webMcp
    ? ((W = (e, t) =>
        h &&
        c &&
        t?.queryKey[1] === r &&
        t.queryKey[2] === n &&
        t.queryKey[3] === !0 &&
        t.queryKey[4] === x?.webMcp &&
        t.queryKey[6] === i &&
        t.queryKey[7] === !0
          ? e
          : void 0),
      (t[37] = n),
      (t[38] = c),
      (t[39] = r),
      (t[40] = i),
      (t[41] = h),
      (t[42] = x?.webMcp),
      (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] !== te || t[45] !== U || t[46] !== ne || t[47] !== W
    ? ((G = { queryKey: te, queryFn: U, enabled: ne, gcTime: 0, placeholderData: W, staleTime: 0 }),
      (t[44] = te),
      (t[45] = U),
      (t[46] = ne),
      (t[47] = W),
      (t[48] = G))
    : (G = t[48]);
  let { data: re, refetch: ie } = Ge(G),
    ae = !M,
    K = M
      ? `translate-x-0 scale-100 overflow-visible opacity-100 motion-safe:delay-300`
      : `pointer-events-none translate-x-1 scale-90 overflow-hidden opacity-0`,
    oe;
  t[49] === K
    ? (oe = t[50])
    : ((oe = X(
        `ease-basic origin-center transition-[opacity,transform] duration-relaxed will-change-transform empty:hidden motion-reduce:transition-none`,
        K,
      )),
      (t[49] = K),
      (t[50] = oe));
  let se;
  t[51] === u ? (se = t[52]) : ((se = () => u(!1)), (t[51] = u), (t[52] = se));
  let q;
  t[53] !== n ||
  t[54] !== N ||
  t[55] !== c ||
  t[56] !== r ||
  t[57] !== i ||
  t[58] !== F ||
  t[59] !== re ||
  t[60] !== o ||
  t[61] !== j ||
  t[62] !== M ||
  t[63] !== l ||
  t[64] !== u ||
  t[65] !== d ||
  t[66] !== f ||
  t[67] !== p ||
  t[68] !== m ||
  t[69] !== h ||
  t[70] !== T ||
  t[71] !== w ||
  t[72] !== ie ||
  t[73] !== k ||
  t[74] !== _ ||
  t[75] !== v ||
  t[76] !== y ||
  t[77] !== x?.annotations ||
  t[78] !== x?.webMcp ||
  t[79] !== S ||
  t[80] !== b
    ? ((q =
        M &&
        (0, Ba.jsx)(st.div, {
          animate: { opacity: 1, transform: `translateX(0) scale(1)` },
          className: `origin-center will-change-transform`,
          exit: {
            opacity: 0,
            transform: `translateX(var(--spacing)) scale(0.9)`,
            transition: _ ? { duration: 0 } : dn,
          },
          initial: !_ && { opacity: 0, transform: `translateX(var(--spacing)) scale(0.9)` },
          transition: _ ? { duration: 0 } : { ...dn, delay: dn.duration },
          children: (0, Ba.jsx)(
            Ia,
            {
              animateArrival: k,
              annotationPreviewKey: `${r}:${n}:${i}`,
              inspectorData: c && x?.webMcp === `available` ? re : void 0,
              isPending: j,
              lastToolCall: c && o ? l : null,
              onOpenChange: u,
              onOpenHelp: d,
              onOpenSources: f,
              onRecordAction: p,
              onSiteAnnotationFeaturesEnabledChange: m,
              onAnnotationPreviewChange: N ? F : void 0,
              open: h,
              prefersReducedMotion: T,
              refreshInspectorData: () => {
                ie();
              },
              siteAnnotationFeatures: x?.annotations === `available` ? v : void 0,
              siteAnnotationFeaturesEnabled: y,
              siteToolsHelpUrl: S,
              recentToolCallCount: w,
              sourcesConversationId: c ? b : void 0,
            },
            `${r}:${n}`,
          ),
        })),
      (t[53] = n),
      (t[54] = N),
      (t[55] = c),
      (t[56] = r),
      (t[57] = i),
      (t[58] = F),
      (t[59] = re),
      (t[60] = o),
      (t[61] = j),
      (t[62] = M),
      (t[63] = l),
      (t[64] = u),
      (t[65] = d),
      (t[66] = f),
      (t[67] = p),
      (t[68] = m),
      (t[69] = h),
      (t[70] = T),
      (t[71] = w),
      (t[72] = ie),
      (t[73] = k),
      (t[74] = _),
      (t[75] = v),
      (t[76] = y),
      (t[77] = x?.annotations),
      (t[78] = x?.webMcp),
      (t[79] = S),
      (t[80] = b),
      (t[81] = q))
    : (q = t[81]);
  let ce;
  t[82] !== se || t[83] !== q
    ? ((ce = (0, Ba.jsx)(we, { initial: !1, onExitComplete: se, children: q })),
      (t[82] = se),
      (t[83] = q),
      (t[84] = ce))
    : (ce = t[84]);
  let J;
  return (
    t[85] !== ae || t[86] !== oe || t[87] !== ce
      ? ((J = (0, Ba.jsx)(`div`, { "aria-hidden": ae, className: oe, children: ce })),
        (t[85] = ae),
        (t[86] = oe),
        (t[87] = ce),
        (t[88] = J))
      : (J = t[88]),
    J
  );
}
function Pa() {}
function Fa() {}
function Ia(e) {
  let t = (0, Ra.c)(64),
    {
      animateArrival: n,
      annotationPreviewKey: r,
      inspectorData: i,
      isPending: a,
      lastToolCall: o,
      onOpenChange: s,
      onOpenHelp: c,
      onOpenSources: l,
      onRecordAction: u,
      onSiteAnnotationFeaturesEnabledChange: d,
      onAnnotationPreviewChange: f,
      open: m,
      prefersReducedMotion: h,
      refreshInspectorData: g,
      siteAnnotationFeatures: _,
      siteAnnotationFeaturesEnabled: v,
      siteToolsHelpUrl: y,
      recentToolCallCount: b,
      sourcesConversationId: x,
    } = e,
    S = Ie(),
    C = o != null,
    w;
  t[0] === C ? (w = t[1]) : ((w = { isActive: C, minimumDurationPending: C }), (t[0] = C), (t[1] = w));
  let [T, E] = (0, za.useState)(w);
  T.isActive !== C && E({ isActive: C, minimumDurationPending: T.minimumDurationPending || C });
  let D, O;
  (t[2] === T.minimumDurationPending
    ? ((D = t[3]), (O = t[4]))
    : ((D = () => {
        if (!T.minimumDurationPending) return;
        let e = setTimeout(() => {
          E(La);
        }, Va);
        return () => clearTimeout(e);
      }),
      (O = [T.minimumDurationPending]),
      (t[2] = T.minimumDurationPending),
      (t[3] = D),
      (t[4] = O)),
    (0, za.useEffect)(D, O));
  let k = C || T.minimumDurationPending,
    A;
  t[5] === S
    ? (A = t[6])
    : ((A = S.formatMessage({
        id: `thread.browser.webMcpTools`,
        defaultMessage: `Site tools`,
        description: `Accessible label for the browser toolbar button that opens the current page's site tools and annotation features`,
      })),
      (t[5] = S),
      (t[6] = A));
  let j = A,
    M = k && !h,
    N = h ? 0 : dn.duration * 1.5,
    P;
  t[7] === N ? (P = t[8]) : ((P = { ...dn, duration: N }), (t[7] = N), (t[8] = P));
  let F = P,
    I;
  t[9] !== s || t[10] !== u
    ? ((I = (e) => {
        (e && u(Vt.CODEX_BROWSER_INTERACTIONS_SITE_TOOLS_ACTION_MENU_OPENED), s(e));
      }),
      (t[9] = s),
      (t[10] = u),
      (t[11] = I))
    : (I = t[11]);
  let L = m && `before:bg-text/5`,
    R = k ? `text-info` : `text-default`,
    B;
  t[12] !== L || t[13] !== R
    ? ((B = X(
        `relative flex size-7 cursor-interaction items-center justify-center overflow-hidden rounded-md ps-1.5 outline-none before:pointer-events-none before:absolute before:inset-y-1 before:end-px before:w-5 before:rounded-sm before:transition-[background-color] hover:before:bg-text/5 focus-visible:before:bg-text/5 focus-visible:before:ring-2 focus-visible:before:ring-ring focus-visible:before:ring-inset disabled:opacity-100 motion-reduce:before:transition-none`,
        L,
        R,
        `disabled:text-codex-description`,
      )),
      (t[12] = L),
      (t[13] = R),
      (t[14] = B))
    : (B = t[14]);
  let V = n && fa.ArrivalPulse,
    H;
  t[15] === V ? (H = t[16]) : ((H = X(`relative inline-flex`, V)), (t[15] = V), (t[16] = H));
  let te;
  t[17] === M ? (te = t[18]) : ((te = M ? [1, 0.45, 1] : 1), (t[17] = M), (t[18] = te));
  let U;
  t[19] === te ? (U = t[20]) : ((U = { opacity: te }), (t[19] = te), (t[20] = U));
  let ne;
  t[21] !== F || t[22] !== M
    ? ((ne = M ? { delay: F.duration, duration: 1, ease: `easeInOut`, repeat: 1 / 0 } : F),
      (t[21] = F),
      (t[22] = M),
      (t[23] = ne))
    : (ne = t[23]);
  let W = k && `activity-glow`,
    G;
  t[24] === W ? (G = t[25]) : ((G = X(W)), (t[24] = W), (t[25] = G));
  let re;
  t[26] === G
    ? (re = t[27])
    : ((re = (0, Ba.jsx)(se, { className: G, "aria-hidden": !0, asset: It })), (t[26] = G), (t[27] = re));
  let ie;
  t[28] !== U || t[29] !== ne || t[30] !== re
    ? ((ie = (0, Ba.jsx)(st.span, { animate: U, className: `inline-flex`, transition: ne, children: re })),
      (t[28] = U),
      (t[29] = ne),
      (t[30] = re),
      (t[31] = ie))
    : (ie = t[31]);
  let ae;
  t[32] !== H || t[33] !== ie
    ? ((ae = (0, Ba.jsx)(`span`, { className: H, children: ie })), (t[32] = H), (t[33] = ie), (t[34] = ae))
    : (ae = t[34]);
  let K;
  t[35] !== a || t[36] !== j || t[37] !== B || t[38] !== ae
    ? ((K = (0, Ba.jsx)(`button`, {
        type: `button`,
        "aria-label": j,
        className: B,
        "data-browser-sidebar-skip-address-commit": `true`,
        disabled: a,
        children: ae,
      })),
      (t[35] = a),
      (t[36] = j),
      (t[37] = B),
      (t[38] = ae),
      (t[39] = K))
    : (K = t[39]);
  let oe;
  t[40] !== j || t[41] !== m || t[42] !== K
    ? ((oe = (0, Ba.jsx)(ee, {
        asChild: !0,
        children: (0, Ba.jsx)(pn, { tooltipContent: j, side: `bottom`, triggerPopupOpen: m, children: K }),
      })),
      (t[40] = j),
      (t[41] = m),
      (t[42] = K),
      (t[43] = oe))
    : (oe = t[43]);
  let q;
  t[44] !== r ||
  t[45] !== i?.tools ||
  t[46] !== a ||
  t[47] !== f ||
  t[48] !== c ||
  t[49] !== l ||
  t[50] !== u ||
  t[51] !== d ||
  t[52] !== b ||
  t[53] !== g ||
  t[54] !== _ ||
  t[55] !== v ||
  t[56] !== y ||
  t[57] !== x
    ? ((q = a
        ? null
        : (0, Ba.jsxs)(p, {
            align: `end`,
            className: `select-none no-drag`,
            sideOffset: 1,
            style: {
              maxHeight: `calc(min(var(--radix-popover-content-available-height), 100vh - 16px) / var(--codex-window-zoom, 1))`,
            },
            children: [
              (0, Ba.jsxs)(`div`, {
                className: `shrink-0 px-2 py-1 select-none`,
                children: [
                  (0, Ba.jsx)(`span`, {
                    className: `truncate text-sm font-medium`,
                    children: (0, Ba.jsx)(z, {
                      id: `thread.browser.webMcpTools.siteToolsHeading`,
                      defaultMessage: `Site tools`,
                      description: `Heading for the menu of site tools and annotation features provided by the current browser site`,
                    }),
                  }),
                  (0, Ba.jsx)(`p`, {
                    className: `mt-2 text-xs text-codex-description`,
                    children: (0, Ba.jsx)(z, {
                      id: `thread.browser.webMcpTools.siteToolsDescriptionWithLearnMore`,
                      defaultMessage: `Site tools help you and ChatGPT use this website to complete tasks more accurately and with fewer steps. <learnMore>Learn more</learnMore>`,
                      description: `Explanation of site tools and annotation features followed by a link to documentation about site tools`,
                      values: {
                        learnMore: (e) =>
                          (0, Ba.jsx)(`a`, {
                            className: `cursor-interaction text-info underline underline-offset-2`,
                            href: y,
                            rel: `noreferrer`,
                            target: `_blank`,
                            onClick: (e) => {
                              (u(Vt.CODEX_BROWSER_INTERACTIONS_SITE_TOOLS_ACTION_LEARN_MORE_CLICKED),
                                c(e, y));
                            },
                            children: e,
                          }),
                      },
                    }),
                  }),
                ],
              }),
              (0, Ba.jsx)(Y.Separator, {}),
              (0, Ba.jsx)(ba, { refreshInspectorData: g, tools: i?.tools }),
              _ != null &&
                _.length > 0 &&
                (0, Ba.jsxs)(Ba.Fragment, {
                  children: [
                    i?.tools == null ? null : (0, Ba.jsx)(Y.Separator, {}),
                    (0, Ba.jsx)(Ji, {
                      enabled: v,
                      features: _,
                      onEnabledChange: d,
                      onPreviewChange: f,
                      previewKey: r,
                    }),
                  ],
                }),
              (0, Ba.jsx)(ka, {
                onOpenSources: l,
                onRecordAction: u,
                recentToolCallCount: b,
                sourcesConversationId: x,
              }),
            ],
          })),
      (t[44] = r),
      (t[45] = i?.tools),
      (t[46] = a),
      (t[47] = f),
      (t[48] = c),
      (t[49] = l),
      (t[50] = u),
      (t[51] = d),
      (t[52] = b),
      (t[53] = g),
      (t[54] = _),
      (t[55] = v),
      (t[56] = y),
      (t[57] = x),
      (t[58] = q))
    : (q = t[58]);
  let ce;
  return (
    t[59] !== m || t[60] !== oe || t[61] !== q || t[62] !== I
      ? ((ce = (0, Ba.jsxs)(ve, { open: m, onOpenChange: I, children: [oe, q] })),
        (t[59] = m),
        (t[60] = oe),
        (t[61] = q),
        (t[62] = I),
        (t[63] = ce))
      : (ce = t[63]),
    ce
  );
}
function La(e) {
  return { ...e, minimumDurationPending: !1 };
}
var Ra, za, Ba, Va;
function Ha() {
  return (Ha = e(() => {
    ((Ra = Sn()),
      Tt(),
      f(),
      Ze(),
      rt(),
      C(),
      wt(),
      Xt(),
      (za = Mn()),
      Mt(),
      u(),
      J(),
      Pe(),
      _t(),
      Ce(),
      ra(),
      Oa(),
      Ma(),
      pa(),
      (Ba = En()),
      (Va = 3e3));
  }))();
}
function Ua(e) {
  io === e && (Za(), (io = null), (ao = 0), (co = 0), no.clear(), Qa());
}
function Wa() {
  return io;
}
function Ga(e, t) {
  io === e && (no.add(t), oo != null && ((co = Math.max(0, ao - Date.now())), Za()));
}
function Ka(e, t) {
  io === e && (no.delete(t), no.size === 0 && oo == null && Xa(e, co));
}
function qa(e) {
  return (
    to.add(e),
    () => {
      to.delete(e);
    }
  );
}
function Ja() {
  let e = G();
  if (
    e == null ||
    e.sequence === so ||
    ((so = e.sequence), !Ya(e) || !e.userInitiated || e.browserTabId == null || e.conversationId == null)
  )
    return;
  let t = Date.now();
  io != null ||
    t < ro ||
    (no.clear(), Za(), (io = e), (ro = t + eo), (co = $a), no.size === 0 && Xa(e, co), Qa());
}
function Ya(e) {
  return e.status === `complete` || e.status === `failed`;
}
function Xa(e, t) {
  ((ao = Date.now() + t),
    (oo = setTimeout(() => {
      ((oo = null), Ua(e));
    }, t)));
}
function Za() {
  oo != null && (clearTimeout(oo), (oo = null));
}
function Qa() {
  for (let e of to) e();
}
var $a, eo, to, no, ro, io, ao, oo, so, co;
function lo() {
  return (lo = e(() => {
    (H(),
      ($a = 5e3),
      (eo = 15e3),
      (to = new Set()),
      (no = new Set()),
      (ro = 0),
      (io = null),
      (ao = 0),
      (oo = null),
      (so = null),
      (co = $a),
      Xe(Ja));
  }))();
}
function uo(e) {
  let t = (0, po.c)(47),
    { download: r, downloadsService: i, event: a, onDismiss: o, onError: s, onViewDownloads: c } = e,
    l = Ie(),
    [u, d] = (0, mo.useState)(null),
    f = a.status === `complete` && (r?.status !== `complete` || r.fileExists),
    m;
  t[0] !== a.filename || t[1] !== a.status || t[2] !== l
    ? ((m =
        a.status === `complete`
          ? l.formatMessage(
              {
                id: `downloads.peek.completeLabel`,
                defaultMessage: `Download complete: {filename}`,
                description: `Accessible label for the completed download peek`,
              },
              { filename: a.filename },
            )
          : l.formatMessage(
              {
                id: `downloads.peek.failedLabel`,
                defaultMessage: `Download failed: {filename}`,
                description: `Accessible label for the failed download peek`,
              },
              { filename: a.filename },
            )),
      (t[0] = a.filename),
      (t[1] = a.status),
      (t[2] = l),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g;
  t[4] !== l || t[5] !== o || t[6] !== s
    ? ((g = async (e, t) => {
        d(e);
        try {
          if ((await t()).ok) {
            (d(null), o());
            return;
          }
        } catch {}
        (d(null),
          s(
            e === `open`
              ? l.formatMessage({
                  id: `downloads.peek.openError`,
                  defaultMessage: `Unable to open the downloaded file`,
                  description: `Error shown when a completed download cannot be opened`,
                })
              : l.formatMessage({
                  id: `downloads.peek.showInFolderError`,
                  defaultMessage: `Unable to show the downloaded file in its folder`,
                  description: `Error shown when a completed download cannot be revealed`,
                }),
            `downloadAttentionPeek.runAction`,
          ));
      }),
      (t[4] = l),
      (t[5] = o),
      (t[6] = s),
      (t[7] = g))
    : (g = t[7]);
  let _ = g,
    v;
  t[8] === a
    ? (v = t[9])
    : ((v = (e) => {
        (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || Ka(a, `focus`);
      }),
      (t[8] = a),
      (t[9] = v));
  let y = v,
    b,
    x;
  (t[10] === a
    ? ((b = t[11]), (x = t[12]))
    : ((b = () => () => {
        (Ka(a, `focus`), Ka(a, `pointer`));
      }),
      (x = [a]),
      (t[10] = a),
      (t[11] = b),
      (t[12] = x)),
    (0, mo.useEffect)(b, x));
  let S;
  t[13] === a
    ? (S = t[14])
    : ((S = () => {
        Ga(a, `focus`);
      }),
      (t[13] = a),
      (t[14] = S));
  let C, w;
  t[15] === a
    ? ((C = t[16]), (w = t[17]))
    : ((C = () => {
        Ga(a, `pointer`);
      }),
      (w = () => {
        Ka(a, `pointer`);
      }),
      (t[15] = a),
      (t[16] = C),
      (t[17] = w));
  let T;
  t[18] === a.status
    ? (T = t[19])
    : ((T =
        a.status === `complete`
          ? (0, ho.jsx)(Qe, { className: `icon-sm shrink-0 text-chart-green` })
          : (0, ho.jsx)(Ct, { className: `icon-sm shrink-0 text-danger` })),
      (t[18] = a.status),
      (t[19] = T));
  let E;
  t[20] === a.status
    ? (E = t[21])
    : ((E = (0, ho.jsx)(`div`, {
        className: `text-sm font-medium`,
        children:
          a.status === `complete`
            ? (0, ho.jsx)(z, {
                id: `downloads.peek.completeTitle`,
                defaultMessage: `Download complete`,
                description: `Title for the completed download peek`,
              })
            : (0, ho.jsx)(z, {
                id: `downloads.peek.failedTitle`,
                defaultMessage: `Download failed`,
                description: `Title for the failed download peek`,
              }),
      })),
      (t[20] = a.status),
      (t[21] = E));
  let D;
  t[22] === a.filename
    ? (D = t[23])
    : ((D = (0, ho.jsx)(`div`, { className: `truncate text-xs text-tertiary`, children: a.filename })),
      (t[22] = a.filename),
      (t[23] = D));
  let O;
  t[24] !== E || t[25] !== D
    ? ((O = (0, ho.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [E, D] })),
      (t[24] = E),
      (t[25] = D),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== O || t[28] !== T
    ? ((k = (0, ho.jsxs)(`div`, { className: `flex items-start gap-2`, children: [T, O] })),
      (t[27] = O),
      (t[28] = T),
      (t[29] = k))
    : (k = t[29]);
  let A;
  t[30] !== f || t[31] !== i || t[32] !== a.id || t[33] !== c || t[34] !== u || t[35] !== _
    ? ((A = (0, ho.jsx)(`div`, {
        className: `mt-2 flex justify-end gap-1`,
        children: f
          ? (0, ho.jsxs)(ho.Fragment, {
              children: [
                (0, ho.jsx)(n, {
                  color: `secondary`,
                  disabled: u != null,
                  loading: u === `show-in-folder`,
                  onClick: () => {
                    _(`show-in-folder`, () => i.showInFolder({ id: a.id }));
                  },
                  children: (0, ho.jsx)(z, {
                    id: `downloads.peek.showInFolder`,
                    defaultMessage: `Show in folder`,
                    description: `Button that reveals a completed download`,
                  }),
                }),
                (0, ho.jsx)(n, {
                  disabled: u != null,
                  loading: u === `open`,
                  onClick: () => {
                    _(`open`, () => i.open({ id: a.id }));
                  },
                  children: (0, ho.jsx)(z, {
                    id: `downloads.peek.open`,
                    defaultMessage: `Open`,
                    description: `Button that opens a completed download`,
                  }),
                }),
              ],
            })
          : (0, ho.jsx)(n, {
              onClick: c,
              children: (0, ho.jsx)(z, {
                id: `downloads.peek.viewDownloads`,
                defaultMessage: `View downloads`,
                description: `Button that opens the full downloads manager`,
              }),
            }),
      })),
      (t[30] = f),
      (t[31] = i),
      (t[32] = a.id),
      (t[33] = c),
      (t[34] = u),
      (t[35] = _),
      (t[36] = A))
    : (A = t[36]);
  let j;
  t[37] !== k || t[38] !== A
    ? ((j = (0, ho.jsxs)(`div`, { className: `p-2 select-none`, children: [k, A] })),
      (t[37] = k),
      (t[38] = A),
      (t[39] = j))
    : (j = t[39]);
  let M;
  return (
    t[40] !== h || t[41] !== y || t[42] !== j || t[43] !== S || t[44] !== C || t[45] !== w
      ? ((M = (0, ho.jsx)(p, {
          align: `end`,
          "aria-label": h,
          opaque: !0,
          onBlurCapture: y,
          onFocusCapture: S,
          onOpenAutoFocus: fo,
          onPointerEnter: C,
          onPointerLeave: w,
          children: j,
        })),
        (t[40] = h),
        (t[41] = y),
        (t[42] = j),
        (t[43] = S),
        (t[44] = C),
        (t[45] = w),
        (t[46] = M))
      : (M = t[46]),
    M
  );
}
function fo(e) {
  e.preventDefault();
}
var po, mo, ho;
function go() {
  return (go = e(() => {
    ((po = Sn()), (mo = Mn()), Mt(), hn(), Pe(), Ke(), ot(), lo(), (ho = En()));
  }))();
}
function _o(e) {
  let t = !0,
    n = tn(),
    r = n?.unacknowledgedIds ?? [],
    i = Xe(() => {
      let t = G();
      t == null ||
        (t.status !== `complete` && t.status !== `failed`) ||
        (vo(), e.acknowledge({ ids: [t.id] }).catch(() => void 0));
    });
  return (
    vo(),
    a(),
    () => {
      ((t = !1), i());
    }
  );
  async function a() {
    try {
      if ((r.length > 0 && (await e.acknowledge({ ids: r })), !t)) return;
      let i = await e.getSnapshot();
      if (!t) return;
      tn() === n && I.stateChanged(i);
      let a = tn()?.unacknowledgedIds ?? [];
      if (a.length === 0 || (await e.acknowledge({ ids: a }), !t)) return;
      let o = tn();
      if (o != null) {
        let e = new Set(a),
          t = o.unacknowledgedIds.filter((t) => !e.has(t));
        if (t.length === o.unacknowledgedIds.length) return;
        I.stateChanged({ ...o, unacknowledgedIds: t });
      }
    } catch {}
  }
}
function vo() {
  let e = Wa();
  e != null && Ua(e);
}
function yo() {
  return (yo = e(() => {
    (H(), lo());
  }))();
}
function bo(e) {
  if (e == null) return { activeCount: 0, attention: null, indicator: { kind: `idle` } };
  let t = e.downloads.filter((e) => wo.has(e.status));
  return { activeCount: t.length, attention: xo(e), indicator: So(t) };
}
function xo(e) {
  let t = new Set(e.unacknowledgedIds),
    n = 0,
    r = 0;
  for (let i of e.downloads)
    t.has(i.id) && (i.status === `failed` ? (r += 1) : i.status === `complete` && (n += 1));
  return r > 0 ? { count: r, kind: `failure` } : n > 0 ? { count: n, kind: `completion` } : null;
}
function So(e) {
  if (e.length === 0) return { kind: `idle` };
  let t = e.every((e) => e.status === `paused`),
    n = Co(e);
  return t
    ? { kind: `paused`, progressPercent: n }
    : n == null
      ? { kind: `indeterminate` }
      : { kind: `progress`, progressPercent: n };
}
function Co(e) {
  if (e.some((e) => e.totalBytes <= 0)) return null;
  let t = 0,
    n = 0;
  for (let r of e) ((t += Math.min(r.totalBytes, Math.max(0, r.receivedBytes))), (n += r.totalBytes));
  return Math.round((t / n) * 100);
}
var wo;
function To() {
  return (To = e(() => {
    wo = new Set([`started`, `in_progress`, `paused`]);
  }))();
}
function Eo(e) {
  let t = (0, Fo.c)(59),
    {
      floating: r,
      browserTabId: i,
      conversationId: a,
      defaultOpen: o,
      downloadsService: s,
      isVisible: c,
      onError: l,
      onOpenChange: u,
      open: d,
      platform: f,
      reducedMotion: p,
    } = e,
    m = r !== void 0 && r,
    h = o !== void 0 && o,
    g = Oo(),
    _ = jo(),
    y = Ie(),
    [b, x] = (0, Io.useState)(null),
    [S, C] = (0, Io.useState)(h),
    [w, T] = (0, Io.useState)(!1),
    E = d ?? S,
    D = g?.downloads,
    O,
    k,
    A;
  if (t[0] !== y || t[1] !== g) {
    A = bo(g);
    let e;
    (t[5] === y
      ? (e = t[6])
      : ((e = y.formatMessage({
          id: `downloads.popover.openFolder`,
          defaultMessage: `Open folder`,
          description: `Button that opens the system downloads folder`,
        })),
        (t[5] = y),
        (t[6] = e)),
      (O = e),
      (k = Po(y, A)),
      (t[0] = y),
      (t[1] = g),
      (t[2] = O),
      (t[3] = k),
      (t[4] = A));
  } else ((O = t[2]), (k = t[3]), (A = t[4]));
  let j = k,
    M = _?.browserTabId === i && _.conversationId === a ? _ : null,
    N = M != null && c && !E,
    P;
  t[7] !== M?.id || t[8] !== g?.downloads
    ? ((P = g?.downloads.find((e) => e.id === M?.id) ?? null),
      (t[7] = M?.id),
      (t[8] = g?.downloads),
      (t[9] = P))
    : (P = t[9]);
  let F = P,
    I;
  t[10] !== _ || t[11] !== u
    ? ((I = (e) => {
        (C(e), u?.(e), e && _ != null && Ua(_));
      }),
      (t[10] = _),
      (t[11] = u),
      (t[12] = I))
    : (I = t[12]);
  let L = I,
    ee,
    R;
  (t[13] !== s || t[14] !== c || t[15] !== E
    ? ((ee = () => {
        if (E && c) return _o(s);
      }),
      (R = [s, c, E]),
      (t[13] = s),
      (t[14] = c),
      (t[15] = E),
      (t[16] = ee),
      (t[17] = R))
    : ((ee = t[16]), (R = t[17])),
    (0, Io.useEffect)(ee, R));
  let B;
  t[18] !== s || t[19] !== y || t[20] !== l
    ? ((B = async () => {
        (T(!0),
          !(await (async () => {
            try {
              return (await s.showDownloadsFolder()).ok;
            } catch {
              return !1;
            }
          })().finally(() => {
            T(!1);
          })) &&
            l(
              y.formatMessage({
                id: `downloads.popover.openFolderError`,
                defaultMessage: `Unable to open the downloads folder`,
                description: `Error shown when the system downloads folder cannot be opened`,
              }),
              `downloads.popover.openFolderError`,
            ));
      }),
      (t[18] = s),
      (t[19] = y),
      (t[20] = l),
      (t[21] = B))
    : (B = t[21]);
  let V = B,
    H = E || M != null || (D?.length ?? 0) > 0,
    te;
  t[22] === M
    ? (te = t[23])
    : ((te = (e) => {
        !e && M != null && Ua(M);
      }),
      (t[22] = M),
      (t[23] = te));
  let U;
  t[24] === b
    ? (U = t[25])
    : ((U = b == null ? null : (0, Lo.jsx)(Nn, { virtualRef: { current: b } })), (t[24] = b), (t[25] = U));
  let ne;
  t[26] !== s ||
  t[27] !== m ||
  t[28] !== w ||
  t[29] !== l ||
  t[30] !== E ||
  t[31] !== V ||
  t[32] !== O ||
  t[33] !== f ||
  t[34] !== p ||
  t[35] !== L ||
  t[36] !== H ||
  t[37] !== g ||
  t[38] !== j ||
  t[39] !== A
    ? ((ne = H
        ? (0, Lo.jsx)(`div`, {
            className: `origin-right scale-100 overflow-visible opacity-100 transition-[opacity,transform] duration-basic ease-basic motion-reduce:transition-none`,
            children: (0, Lo.jsx)(v, {
              align: `end`,
              contentWidth: `panelWide`,
              surface: `opaque`,
              open: E,
              onOpenChange: L,
              triggerButton: (0, Lo.jsx)(pn, {
                tooltipContent: j,
                children: (0, Lo.jsx)(n, {
                  ref: x,
                  className: `relative`,
                  type: `button`,
                  color: `ghostActive`,
                  radius: m ? `full` : `default`,
                  size: `toolbar`,
                  uniform: !0,
                  "aria-label": j,
                  "data-browser-sidebar-skip-address-commit": `true`,
                  "data-state": E ? `open` : void 0,
                  children: (0, Lo.jsx)(Do, { reducedMotion: p, state: A }),
                }),
              }),
              children: (0, Lo.jsxs)(`div`, {
                className: `flex max-h-[480px] flex-col`,
                children: [
                  (0, Lo.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3 ps-2 pe-[calc(var(--spacing-panel-header-inset)-var(--app-menu-gutter,var(--spacing)))] pt-[calc(var(--spacing-panel-header-inset)-var(--app-menu-gutter,var(--spacing)))]`,
                    children: [
                      (0, Lo.jsx)(`div`, {
                        className: `min-w-0`,
                        children: (0, Lo.jsx)(`div`, {
                          className: `text-base font-medium`,
                          children: (0, Lo.jsx)(z, {
                            id: `downloads.popover.title`,
                            defaultMessage: `Downloads`,
                            description: `Title for the downloads popover`,
                          }),
                        }),
                      }),
                      (0, Lo.jsx)(pn, {
                        tooltipContent: O,
                        children: (0, Lo.jsx)(n, {
                          type: `button`,
                          color: `ghost`,
                          size: `toolbar`,
                          uniform: !0,
                          "aria-label": O,
                          loading: w,
                          onClick: () => {
                            V();
                          },
                          children: (0, Lo.jsx)(se, { "aria-hidden": !1, asset: je }),
                        }),
                      }),
                    ],
                  }),
                  (0, Lo.jsx)(Hn, {
                    downloadsService: s,
                    onError: l,
                    platform: f,
                    reducedMotion: p,
                    snapshot: g,
                  }),
                ],
              }),
            }),
          })
        : null),
      (t[26] = s),
      (t[27] = m),
      (t[28] = w),
      (t[29] = l),
      (t[30] = E),
      (t[31] = V),
      (t[32] = O),
      (t[33] = f),
      (t[34] = p),
      (t[35] = L),
      (t[36] = H),
      (t[37] = g),
      (t[38] = j),
      (t[39] = A),
      (t[40] = ne))
    : (ne = t[40]);
  let W;
  t[41] !== F || t[42] !== s || t[43] !== l || t[44] !== M || t[45] !== L || t[46] !== N
    ? ((W = N
        ? (0, Lo.jsx)(
            uo,
            {
              download: F,
              downloadsService: s,
              event: M,
              onDismiss: () => {
                Ua(M);
              },
              onError: l,
              onViewDownloads: () => {
                L(!0);
              },
            },
            `${M.id}:${M.sequence}`,
          )
        : null),
      (t[41] = F),
      (t[42] = s),
      (t[43] = l),
      (t[44] = M),
      (t[45] = L),
      (t[46] = N),
      (t[47] = W))
    : (W = t[47]);
  let G;
  t[48] !== N || t[49] !== U || t[50] !== ne || t[51] !== W || t[52] !== te
    ? ((G = (0, Lo.jsxs)(ve, { open: N, onOpenChange: te, children: [U, ne, W] })),
      (t[48] = N),
      (t[49] = U),
      (t[50] = ne),
      (t[51] = W),
      (t[52] = te),
      (t[53] = G))
    : (G = t[53]);
  let re;
  t[54] === c ? (re = t[55]) : ((re = c ? (0, Lo.jsx)(Mo, {}) : null), (t[54] = c), (t[55] = re));
  let ie;
  return (
    t[56] !== G || t[57] !== re
      ? ((ie = (0, Lo.jsxs)(Lo.Fragment, { children: [G, re] })), (t[56] = G), (t[57] = re), (t[58] = ie))
      : (ie = t[58]),
    ie
  );
}
function Do(e) {
  let t = (0, Fo.c)(11),
    { reducedMotion: n, state: r } = e,
    i = null;
  bb0: switch (r.indicator.kind) {
    case `idle`:
      break bb0;
    case `indeterminate`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Lo.jsx)(rn, { className: `icon-base text-chart-blue` })), (t[0] = e))
        : (e = t[0]),
        (i = e));
      break bb0;
    }
    case `paused`: {
      let e = r.indicator.progressPercent ?? 0,
        n;
      (t[1] === e
        ? (n = t[2])
        : ((n = (0, Lo.jsx)(N, {
            className: `text-tertiary`,
            percent: e,
            reducedMotion: !0,
            size: 20,
            transitionDurationMs: 0,
          })),
          (t[1] = e),
          (t[2] = n)),
        (i = n));
      break bb0;
    }
    case `progress`: {
      let e;
      (t[3] !== n || t[4] !== r.indicator.progressPercent
        ? ((e = (0, Lo.jsx)(N, {
            className: `text-chart-blue`,
            percent: r.indicator.progressPercent,
            reducedMotion: n,
            size: 20,
          })),
          (t[3] = n),
          (t[4] = r.indicator.progressPercent),
          (t[5] = e))
        : (e = t[5]),
        (i = e));
    }
  }
  let a =
      r.indicator.kind === `paused`
        ? `relative inline-flex size-5 items-center justify-center text-tertiary`
        : r.indicator.kind !== `idle` || r.attention != null
          ? `relative inline-flex size-5 items-center justify-center text-chart-blue`
          : `relative inline-flex size-5 items-center justify-center`,
    o;
  t[6] === i
    ? (o = t[7])
    : ((o =
        i == null
          ? (0, Lo.jsx)(se, { "aria-hidden": !1, asset: Zt })
          : (0, Lo.jsxs)(Lo.Fragment, {
              children: [
                i,
                (0, Lo.jsx)(on, { className: `icon-xs absolute rotate-180` }),
                (0, Lo.jsx)(`span`, { className: `absolute -bottom-1 h-0.5 w-3 rounded-full bg-current` }),
              ],
            })),
      (t[6] = i),
      (t[7] = o));
  let s;
  return (
    t[8] !== a || t[9] !== o
      ? ((s = (0, Lo.jsx)(`span`, { className: a, "aria-hidden": `true`, children: o })),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
function Oo() {
  return (0, Io.useSyncExternalStore)(We, tn, tn);
}
function ko() {
  let [e] = (0, Io.useState)(Ao),
    t = (0, Io.useSyncExternalStore)(Xe, G, G);
  return t === e ? null : t;
}
function Ao() {
  return G();
}
function jo() {
  return (0, Io.useSyncExternalStore)(qa, Wa, Wa);
}
function Mo() {
  let e = (0, Fo.c)(4),
    t = ko(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t == null ? null : (0, Lo.jsx)(No, { event: t }, `${t.id}:${t.sequence}`)),
      (e[0] = t),
      (e[1] = n));
  let r;
  return (
    e[2] === n
      ? (r = e[3])
      : ((r = (0, Lo.jsx)(`span`, {
          className: `sr-only`,
          "aria-atomic": `true`,
          "aria-live": `polite`,
          role: `status`,
          children: n,
        })),
        (e[2] = n),
        (e[3] = r)),
    r
  );
}
function No(e) {
  let t = (0, Fo.c)(13),
    { event: n } = e;
  switch (n.status) {
    case `started`: {
      let e;
      return (
        t[0] === n.filename
          ? (e = t[1])
          : ((e = (0, Lo.jsx)(z, {
              id: `downloads.lifecycle.started`,
              defaultMessage: `Downloading {filename}`,
              description: `Polite accessibility announcement when a download starts`,
              values: { filename: n.filename },
            })),
            (t[0] = n.filename),
            (t[1] = e)),
        e
      );
    }
    case `in_progress`: {
      let e;
      return (
        t[2] !== n.filename || t[3] !== n.previousStatus
          ? ((e =
              n.previousStatus === `paused`
                ? (0, Lo.jsx)(z, {
                    id: `downloads.lifecycle.resumed`,
                    defaultMessage: `{filename} download resumed`,
                    description: `Polite accessibility announcement when a download resumes`,
                    values: { filename: n.filename },
                  })
                : null),
            (t[2] = n.filename),
            (t[3] = n.previousStatus),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `paused`: {
      let e;
      return (
        t[5] === n.filename
          ? (e = t[6])
          : ((e = (0, Lo.jsx)(z, {
              id: `downloads.lifecycle.paused`,
              defaultMessage: `{filename} download paused`,
              description: `Polite accessibility announcement when a download is paused`,
              values: { filename: n.filename },
            })),
            (t[5] = n.filename),
            (t[6] = e)),
        e
      );
    }
    case `failed`: {
      let e;
      return (
        t[7] === n.filename
          ? (e = t[8])
          : ((e = (0, Lo.jsx)(z, {
              id: `downloads.lifecycle.failed`,
              defaultMessage: `{filename} failed to download`,
              description: `Polite accessibility announcement when a download fails`,
              values: { filename: n.filename },
            })),
            (t[7] = n.filename),
            (t[8] = e)),
        e
      );
    }
    case `canceled`: {
      let e;
      return (
        t[9] === n.filename
          ? (e = t[10])
          : ((e = (0, Lo.jsx)(z, {
              id: `downloads.lifecycle.canceled`,
              defaultMessage: `{filename} download canceled`,
              description: `Polite accessibility announcement when a download is canceled`,
              values: { filename: n.filename },
            })),
            (t[9] = n.filename),
            (t[10] = e)),
        e
      );
    }
    case `complete`: {
      let e;
      return (
        t[11] === n.filename
          ? (e = t[12])
          : ((e = (0, Lo.jsx)(z, {
              id: `downloads.lifecycle.complete`,
              defaultMessage: `{filename} downloaded`,
              description: `Polite accessibility announcement when a download completes`,
              values: { filename: n.filename },
            })),
            (t[11] = n.filename),
            (t[12] = e)),
        e
      );
    }
  }
}
function Po(e, t) {
  let n;
  switch (t.indicator.kind) {
    case `idle`:
      n = e.formatMessage({
        id: `downloads.popover.title`,
        defaultMessage: `Downloads`,
        description: `Title for the downloads popover`,
      });
      break;
    case `indeterminate`:
      n = e.formatMessage(
        {
          id: `downloads.toolbar.activeIndeterminate`,
          defaultMessage: `Downloads, {count, plural, one {# active download} other {# active downloads}} in progress`,
          description: `Toolbar download button label when active downloads have unknown progress`,
        },
        { count: t.activeCount },
      );
      break;
    case `paused`:
      n = e.formatMessage(
        {
          id: `downloads.toolbar.paused`,
          defaultMessage: `Downloads, {count, plural, one {# download paused} other {# downloads paused}}`,
          description: `Toolbar download button label when all active downloads are paused`,
        },
        { count: t.activeCount },
      );
      break;
    case `progress`:
      n = e.formatMessage(
        {
          id: `downloads.toolbar.activeProgress`,
          defaultMessage: `Downloads, {count, plural, one {# active download} other {# active downloads}}, {progress}% complete`,
          description: `Toolbar download button label with aggregate download progress`,
        },
        { count: t.activeCount, progress: t.indicator.progressPercent },
      );
  }
  return t.attention?.kind === `failure`
    ? e.formatMessage(
        {
          id: `downloads.toolbar.failedAttention`,
          defaultMessage: `{label}, {count, plural, one {# failed download needs attention} other {# failed downloads need attention}}`,
          description: `Toolbar download button label when failed downloads need attention`,
        },
        { count: t.attention.count, label: n },
      )
    : t.attention?.kind === `completion`
      ? e.formatMessage(
          {
            id: `downloads.toolbar.completedAttention`,
            defaultMessage: `{label}, {count, plural, one {# completed download ready} other {# completed downloads ready}}`,
            description: `Toolbar download button label when completed downloads are unacknowledged`,
          },
          { count: t.attention.count, label: n },
        )
      : n;
}
var Fo, Io, Lo;
function Ro() {
  return (Ro = e(() => {
    ((Fo = Sn()),
      Rt(),
      ze(),
      (Io = Mn()),
      Mt(),
      hn(),
      u(),
      J(),
      Pe(),
      U(),
      Ot(),
      _t(),
      At(),
      H(),
      go(),
      lo(),
      yo(),
      To(),
      Un(),
      (Lo = En()));
  }))();
}
function zo(e, t, n) {
  return {
    enabled: n,
    gcTime: 0,
    queryFn: async () => (await e?.getExtensionActions(t)) ?? { status: `unsupported` },
    queryKey: Uo(t),
    refetchOnMount: `always`,
    retry: !1,
    staleTime: 0,
  };
}
async function Bo({ service: e, intl: t, notifyError: n }, r, i) {
  let a = await Promise.resolve(e?.triggerExtensionAction(r) ?? `unsupported`).catch(() => `popup-failed`);
  return (
    a !== `triggered` &&
      n(
        a === `side-panel-unsupported`
          ? t.formatMessage(
              {
                id: `thread.browser.extensions.sidePanelUnsupported`,
                defaultMessage: `{name} uses an extension side panel that isn’t supported yet`,
                description: `Error shown when a browser extension tries to open a side panel that the in-app browser does not support`,
              },
              { name: i },
            )
          : t.formatMessage(
              {
                id: `thread.browser.extensions.openError`,
                defaultMessage: `Unable to open {name}`,
                description: `Error shown when an installed browser extension action or popup fails to open`,
              },
              { name: i },
            ),
        `state.triggerBrowserExtensionAction`,
      ),
    a
  );
}
async function Vo({ service: e, queryClient: t, intl: n, notifyError: r }, i, a) {
  let o = await Promise.resolve(e?.setExtensionPinned(i) ?? `unsupported`).catch(() => `invalid-target`);
  return (
    await t.invalidateQueries({ queryKey: Uo(i) }),
    o !== `updated` &&
      o !== `unchanged` &&
      r(
        n.formatMessage(
          {
            id: `thread.browser.extensions.pinError`,
            defaultMessage: `Unable to update the pinned state of {name}`,
            description: `Error shown when pinning or unpinning an installed browser extension fails`,
          },
          { name: a },
        ),
        `thread.browser.extensions.pinError`,
      ),
    o
  );
}
async function Ho({ service: e, queryClient: t, intl: n, notifyError: r }, i, a) {
  let o = await Promise.resolve(e?.showExtensionActionContextMenu(i) ?? `unsupported`).catch(
    () => `menu-failed`,
  );
  return (
    t.invalidateQueries({ queryKey: Uo(i) }),
    o !== `closed` &&
      r(
        n.formatMessage(
          {
            id: `thread.browser.extensions.menuError`,
            defaultMessage: `Unable to open the menu for {name}`,
            description: `Error shown when the native menu for an installed browser extension fails to open`,
          },
          { name: a },
        ),
        `thread.browser.extensions.menuError`,
      ),
    o
  );
}
function Uo(e) {
  return [`browser-extension-actions`, e.conversationId, e.browserTabId];
}
function Wo(e) {
  if (e != null)
    try {
      var t = Kt();
      (t.u(e.unsubscribe()), e[Symbol.dispose]());
    } catch (e) {
      t.e = e;
    } finally {
      t.d();
    }
}
var Go;
function Ko() {
  return (Ko = e(() => {
    (Wn(),
      (Go = class {
        service;
        options;
        queryClient;
        subscribeToAttachment;
        snapshot = { popupActionId: null, ready: !1 };
        listeners = new Set();
        currentAttempt = null;
        subscription = null;
        unsubscribeAttachment = null;
        constructor(e, t, n, r) {
          ((this.service = e), (this.options = t), (this.queryClient = n), (this.subscribeToAttachment = r));
        }
        getSnapshot = () => this.snapshot;
        subscribeToProfile = (e) => {
          let t = Gn.subscribe(e);
          return (Gn.initialize(this.service), t);
        };
        subscribe = (e) => (
          this.listeners.add(e),
          this.listeners.size === 1 &&
            ((this.unsubscribeAttachment = this.subscribeToAttachment(() => {
              (this.queryClient.cancelQueries({ exact: !0, queryKey: Uo(this.options) }), this.reconnect());
            })),
            this.reconnect()),
          () => {
            (this.listeners.delete(e),
              this.listeners.size === 0 &&
                ((this.currentAttempt = null),
                this.unsubscribeAttachment?.(),
                (this.unsubscribeAttachment = null),
                Wo(this.subscription),
                (this.subscription = null),
                (this.snapshot = { popupActionId: null, ready: !1 })));
          }
        );
        reconnect() {
          Gn.retry(this.service);
          let e = {};
          ((this.currentAttempt = e),
            Wo(this.subscription),
            (this.subscription = null),
            this.update({ popupActionId: null, ready: !1 }),
            Promise.resolve(
              this.service.subscribeExtensionActionEvents(this.options, (t) => {
                this.currentAttempt === e &&
                  (t.type === `changed`
                    ? this.snapshot.ready &&
                      this.queryClient.invalidateQueries({ queryKey: Uo(this.options) })
                    : t.type === `popup-opening` || t.type === `popup-opened`
                      ? this.update({ ...this.snapshot, popupActionId: t.actionId })
                      : this.snapshot.popupActionId === t.actionId &&
                        this.update({ ...this.snapshot, popupActionId: null }));
              }),
            ).then(
              (t) => {
                if (this.currentAttempt !== e) {
                  Wo(t);
                  return;
                }
                ((this.subscription = t),
                  this.update({ ...this.snapshot, ready: !0 }),
                  this.queryClient.invalidateQueries({ exact: !0, queryKey: Uo(this.options) }));
              },
              () => {
                this.currentAttempt === e &&
                  (this.update({ ...this.snapshot, ready: !0 }),
                  this.queryClient.invalidateQueries({ exact: !0, queryKey: Uo(this.options) }));
              },
            ));
        }
        update(e) {
          if (e.popupActionId !== this.snapshot.popupActionId || e.ready !== this.snapshot.ready) {
            this.snapshot = e;
            for (let e of this.listeners) e();
          }
        }
      }));
  }))();
}
function qo(e) {
  let t = (0, Jo.c)(12),
    { action: n, iconDataUrl: r, showBadge: i, size: a } = e,
    o = i !== void 0 && i,
    s = a === void 0 ? `toolbar` : a,
    [c, l] = (0, Yo.useState)(!1),
    u = s === `menu` ? `icon-xxs` : `icon-xs`,
    d;
  t[0] === u ? (d = t[1]) : ((d = X(`relative inline-flex shrink-0`, u)), (t[0] = u), (t[1] = d));
  let f;
  t[2] !== c || t[3] !== r
    ? ((f =
        r == null || c
          ? (0, Xo.jsx)(kt, {
              "aria-hidden": !0,
              className: `size-full`,
              "data-testid": `extension-action-fallback-icon`,
            })
          : (0, Xo.jsx)(`img`, { alt: ``, className: `size-full`, src: r, onError: () => l(!0) })),
      (t[2] = c),
      (t[3] = r),
      (t[4] = f))
    : (f = t[4]);
  let p;
  t[5] !== n || t[6] !== o
    ? ((p =
        o && n?.badgeText
          ? (0, Xo.jsx)(`span`, {
              "aria-hidden": !0,
              className: `absolute -right-1 -bottom-1 max-w-7 truncate rounded-sm bg-primary-solid px-0.5 text-xs leading-none font-medium text-primary-solid`,
              style: { backgroundColor: n.badgeBackgroundColor ?? void 0, color: n.badgeTextColor ?? void 0 },
              children: n.badgeText,
            })
          : null),
      (t[5] = n),
      (t[6] = o),
      (t[7] = p))
    : (p = t[7]);
  let m;
  return (
    t[8] !== d || t[9] !== f || t[10] !== p
      ? ((m = (0, Xo.jsxs)(`span`, { className: d, children: [f, p] })),
        (t[8] = d),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m))
      : (m = t[11]),
    m
  );
}
var Jo, Yo, Xo;
function Zo() {
  return (Zo = e(() => {
    ((Jo = Sn()), rt(), (Yo = Mn()), ut(), (Xo = En()));
  }))();
}
var Qo, $o;
function es() {
  return (es = e(() => {
    (Mn(),
      (Qo = En()),
      ($o = (e) =>
        (0, Qo.jsx)(`svg`, {
          fill: `none`,
          height: 16,
          viewBox: `0 0 16 16`,
          width: 16,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, Qo.jsx)(`path`, {
            clipRule: `evenodd`,
            d: `m8.69891 2.27345c.61298-.91267 1.85279-1.0459 2.67379-.40625l.1582.13867.003.00196 2.4433 2.41504.002.00195c.4266.42674.5579.99703.499 1.50586-.0582.50163-.3073 1.00104-.7187 1.31836l-.0069.00586-.0078.00586-2.415 1.7246c-.1659.11864-.2814.29628-.3223.4961l-.5293 2.59084-.0029.0166-.0039.0156c-.1932.7147-.70508 1.2981-1.36526 1.5254-.68313.2349-1.44732.0609-2.04883-.585l-1.69336-1.6679-2.99316 2.9941c-.20505.2047-.53727.2049-.74219 0-.2047-.2049-.20464-.5372 0-.7422l2.98731-2.9883-1.59571-1.57125c-.58829-.57126-.78753-1.34848-.59179-2.04199.19649-.69522.77365-1.25029 1.60644-1.41309l2.48047-.57226c.19499-.04518.367-.16098.48145-.3252zm2.02639.4209c-.371-.28905-.90826-.20853-1.15822.16894l-.00684.01075-1.70215 2.44238c-.26325.37786-.65778.64527-1.10644.74902l-2.48047.57227-.01074.00195-.01074.00293c-.46996.08744-.72571.36997-.81055.66992-.07571.26809-.02825.59512.20312.88379l.11133.1211.00293.0039 4.03809 3.9756.00976.0098.00977.0107c.34353.3766.68604.4105.95117.3193.29254-.101.57406-.3851.68848-.7959l.52539-2.57028c.09401-.45959.35861-.86689.74021-1.13965l2.4024-1.71679c.1553-.12183.2834-.34601.3134-.6045.0292-.25251-.0393-.48226-.1962-.64062l-2.4415-2.41211z`,
            fill: `currentColor`,
            fillRule: `evenodd`,
          }),
        })));
  }))();
}
var ts, ns;
function rs() {
  return (rs = e(() => {
    (Mn(),
      (ts = En()),
      (ns = (e) =>
        (0, ts.jsx)(`svg`, {
          fill: `none`,
          height: 16,
          viewBox: `0 0 16 16`,
          width: 16,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, ts.jsx)(`path`, {
            d: `m8.69891 2.27336c.61298-.91267 1.85279-1.04591 2.67379-.40625l.1582.13867.003.00195 2.4433 2.41504.002.00195c.4266.42675.5579.99704.499 1.50586-.0582.50163-.3073 1.00104-.7187 1.31836l-.0069.00586-.0078.00586-2.415 1.72461c-.1659.11864-.2814.29628-.3223.49609l-.5293 2.59084-.0029.0166-.0039.0156c-.1932.7147-.70508 1.2981-1.36526 1.5254-.68313.2349-1.44732.0609-2.04883-.585l-1.69336-1.6679-2.99316 2.9941c-.20505.2047-.53727.2049-.74219 0-.2047-.2049-.20464-.5372 0-.7422l2.98731-2.9883-1.59571-1.57125c-.58829-.57126-.78754-1.34847-.59179-2.04199.19649-.69522.77364-1.25029 1.60644-1.41308l2.48047-.57227c.19499-.04517.367-.16097.48145-.3252z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function is(e) {
  let t = (0, ss.c)(15),
    { disabled: n, items: r, label: i, onOpenChange: a, onSelect: o, open: s } = e,
    c = (0, cs.useRef)(!1),
    l = (0, cs.useRef)(!1),
    u,
    d,
    f,
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = () => {
        c.current = !0;
      }),
      (d = (e) => {
        (e.key === `Enter` || e.key === ` `) && (l.current = !0);
      }),
      (f = () => {
        l.current = !1;
      }),
      (p = (e) => {
        (c.current || e.preventDefault(), (c.current = !1), (l.current = !1));
      }),
      (t[0] = u),
      (t[1] = d),
      (t[2] = f),
      (t[3] = p))
    : ((u = t[0]), (d = t[1]), (f = t[2]), (p = t[3]));
  let m;
  t[4] !== n || t[5] !== i
    ? ((m = (0, ls.jsx)(_e, {
        className: `relative`,
        variant: `transparent`,
        disabled: n,
        iconClassName: `rotate-90`,
        label: i,
        size: `xs`,
      })),
      (t[4] = n),
      (t[5] = i),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== r || t[8] !== o
    ? ((h =
        r == null
          ? null
          : (0, ls.jsx)(as, {
              items: r,
              onSelect: (e) => {
                ((c.current = l.current), o(e));
              },
            })),
      (t[7] = r),
      (t[8] = o),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== a || t[11] !== s || t[12] !== m || t[13] !== h
      ? ((g = (0, ls.jsx)(v, {
          align: `end`,
          contentWidth: `menu`,
          open: s,
          onOpenChange: a,
          onEscapeKeyDown: u,
          onContentKeyDownCapture: d,
          onContentPointerDownCapture: f,
          onCloseAutoFocus: p,
          triggerButton: m,
          children: h,
        })),
        (t[10] = a),
        (t[11] = s),
        (t[12] = m),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function as(e) {
  let t = (0, ss.c)(3),
    { items: n, onSelect: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e = [];
    for (let t of n) {
      let n = e.at(-1);
      t.type === `radio`
        ? Array.isArray(n) && n[0]?.groupId === t.groupId
          ? n.push(t)
          : e.push([t])
        : e.push(t);
    }
    ((i = (0, ls.jsx)(ls.Fragment, {
      children: e.map((e, t) => {
        if (Array.isArray(e))
          return (0, ls.jsx)(
            Y.RadioGroup,
            {
              value: e.find(os)?.commandId,
              children: e.map((e) =>
                (0, ls.jsx)(
                  Y.RadioItem,
                  {
                    disabled: !e.enabled || !e.actionable,
                    value: e.commandId,
                    onSelect: (t) => {
                      (t.preventDefault(), r(e.commandId));
                    },
                    children: e.label,
                  },
                  e.commandId,
                ),
              ),
            },
            e[0]?.commandId,
          );
        if (e.type === `separator`) return (0, ls.jsx)(Y.Separator, {}, `separator-${t}`);
        if (e.type === `submenu` || e.type === `actionable-submenu`) {
          let t = e.type === `actionable-submenu` && e.actionable;
          return (0, ls.jsxs)(
            cs.Fragment,
            {
              children: [
                t
                  ? (0, ls.jsx)(Y.Item, {
                      disabled: !e.enabled,
                      onSelect: (t) => {
                        (t.preventDefault(), r(e.commandId));
                      },
                      children: e.label,
                    })
                  : null,
                (0, ls.jsx)(Y.FlyoutSubmenuItem, {
                  disabled: !e.enabled,
                  label: t
                    ? (0, ls.jsx)(z, {
                        id: `browser.extensionMenu.commandOptions`,
                        defaultMessage: `More options for {command}`,
                        description: `Submenu entry next to an extension command that can also be run directly. Opens that command's child menu.`,
                        values: { command: e.label },
                      })
                    : e.label,
                  children: (0, ls.jsx)(as, { items: e.submenu ?? [], onSelect: r }),
                }),
              ],
            },
            e.commandId,
          );
        }
        return e.type === `checkbox`
          ? (0, ls.jsx)(
              Y.CheckboxItem,
              {
                checked: e.checked,
                disabled: !e.enabled || !e.actionable,
                onSelect: () => r(e.commandId),
                children: e.label,
              },
              e.commandId,
            )
          : (0, ls.jsx)(
              Y.Item,
              {
                disabled: !e.enabled || !e.actionable,
                onSelect: (t) => {
                  (t.preventDefault(), r(e.commandId));
                },
                children: e.label,
              },
              e.commandId,
            );
      }),
    })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  return i;
}
function os(e) {
  return e.checked;
}
var ss, cs, ls;
function us() {
  return (us = e(() => {
    ((ss = Sn()), (cs = Mn()), Mt(), u(), o(), (ls = En()));
  }))();
}
function ds(e) {
  let t = (0, gs.c)(76),
    {
      action: r,
      actionDisabled: i,
      extension: a,
      menuOpen: o,
      menuOptions: s,
      menuService: c,
      onLaunch: l,
      onError: u,
      onMenuOpen: d,
      onMenuClose: f,
      onPin: p,
      onRefreshActions: m,
      supportsContextMenu: h,
      toolbar: g,
    } = e,
    _ = Ie(),
    v = (0, _s.useRef)(null),
    [y, b] = (0, _s.useState)(null),
    x,
    S;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => v.current?.close()), (S = []), (t[0] = x), (t[1] = S))
    : ((x = t[0]), (S = t[1])),
    (0, _s.useEffect)(x, S));
  let C;
  t[2] !== a.id ||
  t[3] !== a.name ||
  t[4] !== _ ||
  t[5] !== s ||
  t[6] !== c ||
  t[7] !== u ||
  t[8] !== f ||
  t[9] !== d ||
  t[10] !== m
    ? ((C = () => {
        if (v.current != null) return;
        let e = !1,
          t = {
            extensionId: a.id,
            menuId: null,
            close: () => {
              v.current === t &&
                ((v.current = null),
                b(null),
                f(t),
                t.menuId != null && (c?.closeExtensionActionMenu({ ...s, menuId: t.menuId }).catch(hs), m()));
            },
            execute: (n) => {
              v.current !== t ||
                t.menuId == null ||
                e ||
                ((e = !0),
                Promise.resolve(
                  c?.executeExtensionActionMenuCommand({ ...s, commandId: n, menuId: t.menuId }) ?? !1,
                )
                  .catch(ms)
                  .then((e) => {
                    e ||
                      u(
                        _.formatMessage({
                          id: `thread.browser.extensions.commandError`,
                          defaultMessage: `Unable to use this extension menu action`,
                          description: `Error shown when a browser extension menu command fails or is no longer available`,
                        }),
                      );
                  })
                  .finally(t.close));
            },
          };
        d(t) &&
          ((v.current = t),
          Promise.resolve(
            c?.beginExtensionActionMenu({ ...s, actionId: a.id, source: `menu` }, (e) => {
              let { menuId: n } = e;
              (t.menuId == null || t.menuId === n) && t.close();
            }) ?? { status: `unsupported` },
          )
            .catch(ps)
            .then((e) => {
              if (v.current !== t) {
                e.status === `opened` && c?.closeExtensionActionMenu({ ...s, menuId: e.menuId }).catch(fs);
                return;
              }
              if (e.status !== `opened`) {
                (u(
                  _.formatMessage(
                    {
                      id: `thread.browser.extensions.menuError`,
                      defaultMessage: `Unable to open the menu for {name}`,
                      description: `Error shown when the menu for an installed browser extension fails to open`,
                    },
                    { name: a.name },
                  ),
                ),
                  t.close());
                return;
              }
              ((t.menuId = e.menuId), b(e));
            }));
      }),
      (t[2] = a.id),
      (t[3] = a.name),
      (t[4] = _),
      (t[5] = s),
      (t[6] = c),
      (t[7] = u),
      (t[8] = f),
      (t[9] = d),
      (t[10] = m),
      (t[11] = C))
    : (C = t[11]);
  let w = C,
    T;
  t[12] !== a.id || t[13] !== g.pinnedExtensionIds
    ? ((T = g.pinnedExtensionIds.includes(a.id)), (t[12] = a.id), (t[13] = g.pinnedExtensionIds), (t[14] = T))
    : (T = t[14]);
  let E = T,
    D;
  t[15] !== a.id || t[16] !== g.forcePinnedExtensionIds
    ? ((D = g.forcePinnedExtensionIds.includes(a.id)),
      (t[15] = a.id),
      (t[16] = g.forcePinnedExtensionIds),
      (t[17] = D))
    : (D = t[17]);
  let O = D,
    k;
  t[18] !== a.name || t[19] !== _ || t[20] !== E
    ? ((k = E
        ? _.formatMessage(
            {
              id: `thread.browser.extensions.unpin`,
              defaultMessage: `Unpin {name}`,
              description: `Accessible label for unpinning a browser extension from the toolbar`,
            },
            { name: a.name },
          )
        : _.formatMessage(
            {
              id: `thread.browser.extensions.pin`,
              defaultMessage: `Pin {name}`,
              description: `Accessible label for pinning a browser extension to the toolbar`,
            },
            { name: a.name },
          )),
      (t[18] = a.name),
      (t[19] = _),
      (t[20] = E),
      (t[21] = k))
    : (k = t[21]);
  let A = k,
    j;
  t[22] !== _ || t[23] !== O || t[24] !== A
    ? ((j = O
        ? _.formatMessage({
            id: `thread.browser.extensions.pinnedByPolicy`,
            defaultMessage: `Pinned by your organization`,
            description: `Explanation for a browser extension that cannot be unpinned because an organization policy requires it`,
          })
        : A),
      (t[22] = _),
      (t[23] = O),
      (t[24] = A),
      (t[25] = j))
    : (j = t[25]);
  let M = j,
    N;
  t[26] !== a.name || t[27] !== _
    ? ((N = _.formatMessage(
        {
          id: `thread.browser.extensions.more`,
          defaultMessage: `More options for {name}`,
          description: `Accessible label for the menu of an installed browser extension`,
        },
        { name: a.name },
      )),
      (t[26] = a.name),
      (t[27] = _),
      (t[28] = N))
    : (N = t[28]);
  let P = N,
    F = E ? ns : $o,
    I = r?.iconDataUrl ?? a.iconDataUrl,
    L = o ? `open` : `closed`,
    ee = r?.title || a.name,
    R = i || r == null || !r.enabled,
    z;
  t[29] !== r || t[30] !== l
    ? ((z = () => {
        r != null && l(r);
      }),
      (t[29] = r),
      (t[30] = l),
      (t[31] = z))
    : (z = t[31]);
  let B;
  t[32] === I
    ? (B = t[33])
    : ((B = (0, vs.jsx)(qo, { iconDataUrl: I, size: `menu` }, I)), (t[32] = I), (t[33] = B));
  let V;
  t[34] === a.name
    ? (V = t[35])
    : ((V = (0, vs.jsx)(`span`, {
        className: `min-w-0 truncate`,
        "data-tooltip-overflow-target": !0,
        children: a.name,
      })),
      (t[34] = a.name),
      (t[35] = V));
  let H;
  t[36] !== B || t[37] !== V
    ? ((H = (0, vs.jsxs)(`span`, { className: `flex min-w-0 items-center gap-2`, children: [B, V] })),
      (t[36] = B),
      (t[37] = V),
      (t[38] = H))
    : (H = t[38]);
  let te;
  t[39] !== ee || t[40] !== R || t[41] !== z || t[42] !== H
    ? ((te = (0, vs.jsx)(n, {
        className: `relative min-w-0 flex-1 justify-start`,
        "aria-label": ee,
        color: `ghostMuted`,
        disabled: R,
        size: `menuRow`,
        onClick: z,
        children: H,
      })),
      (t[39] = ee),
      (t[40] = R),
      (t[41] = z),
      (t[42] = H),
      (t[43] = te))
    : (te = t[43]);
  let U;
  t[44] !== a.name || t[45] !== te
    ? ((U = (0, vs.jsx)(pn, {
        cloneCustomTrigger: !0,
        openWhen: `trigger-overflows`,
        tooltipContent: a.name,
        children: te,
      })),
      (t[44] = a.name),
      (t[45] = te),
      (t[46] = U))
    : (U = t[46]);
  let ne = E ? `ghostMuted` : `ghostTertiary`,
    W = i || r == null || O,
    G;
  t[47] !== E || t[48] !== p ? ((G = () => p(!E)), (t[47] = E), (t[48] = p), (t[49] = G)) : (G = t[49]);
  let re;
  t[50] === F
    ? (re = t[51])
    : ((re = (0, vs.jsx)(F, { "aria-hidden": !0, className: `icon-xxs` })), (t[50] = F), (t[51] = re));
  let ie;
  t[52] !== E || t[53] !== A || t[54] !== ne || t[55] !== W || t[56] !== G || t[57] !== re
    ? ((ie = (0, vs.jsx)(n, {
        className: `relative`,
        "aria-label": A,
        "aria-pressed": E,
        color: ne,
        disabled: W,
        size: `compact`,
        uniform: !0,
        onClick: G,
        children: re,
      })),
      (t[52] = E),
      (t[53] = A),
      (t[54] = ne),
      (t[55] = W),
      (t[56] = G),
      (t[57] = re),
      (t[58] = ie))
    : (ie = t[58]);
  let ae;
  t[59] !== M || t[60] !== ie
    ? ((ae = (0, vs.jsx)(pn, { side: `bottom`, tooltipContent: M, children: ie })),
      (t[59] = M),
      (t[60] = ie),
      (t[61] = ae))
    : (ae = t[61]);
  let K = i || !h,
    oe = y?.items ?? null,
    se = y != null,
    q;
  t[62] === w ? (q = t[63]) : ((q = (e) => (e ? w() : v.current?.close())), (t[62] = w), (t[63] = q));
  let ce;
  t[64] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (e) => v.current?.execute(e)), (t[64] = ce))
    : (ce = t[64]);
  let J;
  t[65] !== P || t[66] !== K || t[67] !== oe || t[68] !== se || t[69] !== q
    ? ((J = (0, vs.jsx)(is, { disabled: K, items: oe, label: P, open: se, onOpenChange: q, onSelect: ce })),
      (t[65] = P),
      (t[66] = K),
      (t[67] = oe),
      (t[68] = se),
      (t[69] = q),
      (t[70] = J))
    : (J = t[70]);
  let le;
  return (
    t[71] !== U || t[72] !== ae || t[73] !== J || t[74] !== L
      ? ((le = (0, vs.jsxs)(`div`, {
          className: `relative flex h-7 min-w-0 items-center before:pointer-events-none before:absolute before:inset-x-0.5 before:-inset-y-0.5 before:rounded-sm hover:before:bg-primary-ghost-hover data-[state=open]:before:bg-primary-ghost-hover`,
          "data-state": L,
          children: [U, ae, J],
        })),
        (t[71] = U),
        (t[72] = ae),
        (t[73] = J),
        (t[74] = L),
        (t[75] = le))
      : (le = t[75]),
    le
  );
}
function fs() {}
function ps() {
  return { status: `menu-failed` };
}
function ms() {
  return !1;
}
function hs() {}
var gs, _s, vs;
function ys() {
  return (ys = e(() => {
    ((gs = Sn()), (_s = Mn()), Mt(), hn(), _t(), es(), rs(), Zo(), us(), (vs = En()));
  }))();
}
function bs(e, t) {
  let n = new Map(e.map((e) => [e.id, e]));
  return t.pinnedExtensionIds.flatMap((e) => {
    let t = n.get(e);
    return t == null ? [] : [t];
  });
}
function xs(e, t, n) {
  let r = new Set(e.map((e) => e.id)),
    i = new Set();
  for (let a of [...t, ...e.map((e) => e.id).reverse()]) {
    if (i.size >= n) break;
    r.has(a) && i.add(a);
  }
  return i;
}
function Ss() {
  return (Ss = e(() => {}))();
}
function Cs({
  floating: e = !1,
  actionsData: t,
  actionsIsError: i,
  layout: a,
  menuOptions: o,
  menuService: s,
  onContextMenu: c,
  onCloseAutoFocus: l,
  onManageExtensions: u,
  onMenuError: d,
  onOpenChange: f,
  onPin: m,
  onRefreshActions: h,
  onTriggerAction: g,
  onVisitWebStore: _,
  overflowAnchorRef: v,
  open: y,
  popupActionId: b,
  profile: x,
  ready: S,
  renderVisibilityButton: C,
  showPuzzle: w,
}) {
  let T = Ae(),
    E = Ie(),
    D = (0, Os.useId)(),
    [O, k] = (0, Os.useState)(!1),
    A = (0, Os.useRef)(null),
    j = (0, Os.useRef)(null),
    { handleOpenChange: M, open: N } = ne(y ?? O, (e) => {
      (e || (A.current == null && j.current == null)) && (k(e), f?.(e));
    }),
    P = ws(N, A, j),
    [F, I] = (0, Os.useState)(!1),
    [L, R] = (0, Os.useState)(!1),
    [B, V] = (0, Os.useState)(null),
    [H, te] = (0, Os.useState)(0),
    [U, W] = (0, Os.useState)(null),
    [G, re] = (0, Os.useState)(null),
    [ie, ae] = (0, Os.useState)(null),
    [K, oe] = (0, Os.useState)(null),
    q = (0, Os.useRef)(null),
    ce = (0, Os.useRef)({ getBoundingClientRect: () => new DOMRect() }),
    J = (0, Os.useRef)(!1),
    le = (0, Os.useRef)(!1),
    ue = x == null ? null : bs(x.extensions, x.toolbar),
    de = x != null && (w || (ue?.length ?? 0) > 0),
    fe = a?.toolbarRef,
    pe = a?.addressContainerRef,
    me = a?.addressContentsRef,
    he = a?.addressInputRef,
    _e = (0, Os.useEffectEvent)((e) => {
      let t = q.current ?? v?.current;
      e === 0 &&
        L &&
        U == null &&
        G == null &&
        ie == null &&
        b == null &&
        K != null &&
        t != null &&
        K.contains(K.ownerDocument.activeElement) &&
        K.ownerDocument.activeElement !== t &&
        t.focus();
    });
  if (
    ((0, Os.useLayoutEffect)(() => {
      let t = fe?.current,
        n = pe?.current,
        r = me?.current,
        i = he?.current?.parentElement,
        a = q.current;
      if (!de || t == null || n == null || r == null || i == null || K == null) return;
      let o = () => {
          let i = he?.current,
            o = a ?? K.querySelector(`button`);
          if (i == null || o == null) return;
          let s = o.offsetWidth || Number.parseFloat(getComputedStyle(o).height);
          if (s === 0) return;
          let c = getComputedStyle(t),
            l = getComputedStyle(n),
            u = getComputedStyle(K),
            d = Number.parseFloat(u.columnGap) || 0,
            f = Array.from(t.children),
            p =
              K.offsetWidth -
              K.clientWidth +
              Number.parseFloat(u.paddingLeft) +
              Number.parseFloat(u.paddingRight),
            m =
              (e
                ? K.offsetWidth - (a?.offsetWidth ?? 0)
                : (K.getBoundingClientRect().width - (a?.getBoundingClientRect().width ?? 0)) / T) - p,
            h = n.nextElementSibling,
            g = h instanceof HTMLElement ? h.offsetWidth : 0,
            _ = (e ? g : f.reduce((e, t) => e + (t === n ? 0 : t.getBoundingClientRect().width / T), 0)) - m,
            v =
              Number.parseFloat(c.paddingLeft) +
              Number.parseFloat(c.paddingRight) +
              (f.length - 1) * (Number.parseFloat(c.columnGap) || 0) +
              Number.parseFloat(l.paddingLeft) +
              Number.parseFloat(l.paddingRight),
            y =
              r.scrollWidth -
              (e ? (i.closest(`[data-browser-address-text]`)?.offsetWidth ?? i.offsetWidth) : i.offsetWidth),
            b = Math.max(
              0,
              Math.floor(
                ((t.clientWidth - v - y - i.offsetHeight) / (e ? 2 : 1) - _ + (a == null ? d : 0)) / (s + d),
              ),
            );
          (_e(b), te(b));
        },
        s = new ResizeObserver(o);
      for (let e of new Set([t, ...t.children, r, i, K])) s.observe(e);
      return (o(), () => s.disconnect());
    }, [pe, me, he, e, T, K, de, w, fe]),
    x == null || ue == null)
  )
    return null;
  let { extensions: ye, recentlyUsedExtensionIds: be, toolbar: xe } = x,
    Se = t?.status === `available` ? new Map(t.actions.map((e) => [e.id, e])) : null,
    Ce = t?.status === `available` && t.supportsContextMenu,
    we = a == null ? ue.length : H,
    Te = xs(ue, be, Math.min(3, we)),
    Ee = xs(
      ue,
      [L ? B : null, b, G, ie, U, ...be].filter((e) => e != null),
      we,
    ),
    Y = F || L || N || G != null || ie != null || U != null || b != null,
    De = !S || i || !xe.ready || Se == null,
    Oe = E.formatMessage({
      id: `thread.browser.extensions.toolbar`,
      defaultMessage: `Extensions`,
      description: `Accessible label for the browser toolbar button that opens the installed extensions list`,
    }),
    ke = (e, t) => {
      if (
        e.pointerType !== `touch` &&
        e.target instanceof Node &&
        e.currentTarget.contains(e.target) &&
        !(e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) &&
        (I(t), !t)
      ) {
        let t = e.currentTarget.ownerDocument.activeElement;
        R(t instanceof Element && e.currentTarget.contains(t) && t.matches(`:focus-visible`));
      }
    },
    je = (e) => {
      N && ((J.current = e), (le.current = !e), M(!1));
    },
    Me = (e, t) => {
      (je(e.hasPopup),
        W(e.id),
        g(e, t).finally(() => {
          W((t) => (t === e.id ? null : t));
        }));
    },
    Ne = (e, t, n, r) => {
      A.current ??
        (n === `toolbar` && je(!0),
        (A.current = e.id),
        re(e.id),
        c(e, t, n, r).finally(() => {
          ((A.current = null), re((t) => (t === e.id ? null : t)));
        }));
    };
  return (0, ks.jsxs)(ve, {
    open: N,
    onOpenChange: (e) => {
      (e && h(), M(e));
    },
    children: [
      v == null
        ? null
        : (0, ks.jsx)(Nn, {
            virtualRef: w
              ? ce
              : {
                  current: {
                    getBoundingClientRect: () => v.current?.getBoundingClientRect() ?? new DOMRect(),
                  },
                },
          }),
      de
        ? (0, ks.jsxs)(`div`, {
            ref: oe,
            className: X(
              `no-drag -mx-0.5 flex h-8 shrink-0 items-center gap-1.5 overflow-hidden border-2 select-none`,
              e ? `rounded-full` : `rounded-lg`,
              e && ue.length === 0 && `@max-lg/browser-toolbar:hidden`,
              F && ue.length > 0 ? `border-strong` : `border-transparent`,
            ),
            "aria-label": Oe,
            "data-browser-sidebar-skip-address-commit": `true`,
            role: `group`,
            onBlurCapture: (e) => {
              e.currentTarget.contains(e.relatedTarget) || (R(!1), V(null));
            },
            onFocusCapture: (e) => {
              e.currentTarget.contains(e.target) && R(e.target.matches(`:focus-visible`));
            },
            onKeyDownCapture: (e) => {
              e.target instanceof Node && e.currentTarget.contains(e.target) && R(!0);
            },
            onPointerOut: (e) => ke(e, !1),
            onPointerOver: (e) => ke(e, !0),
            children: [
              ue.map((t) => {
                let r = Se?.get(t.id),
                  i = Ee.has(t.id),
                  a = i && (Y || Te.has(t.id)),
                  o = De || !r?.enabled || !a,
                  s = r?.title || t.name,
                  c = r?.iconDataUrl ?? t.iconDataUrl;
                return (0, ks.jsx)(
                  `div`,
                  {
                    "aria-hidden": !a,
                    className: X(
                      `origin-right shrink-0 transition-[max-width,margin-inline-end,scale,opacity] duration-relaxed ease-out motion-reduce:transition-none`,
                      !i && `hidden`,
                      a
                        ? `me-0 max-w-7 scale-100 overflow-visible opacity-100`
                        : `pointer-events-none -me-1.5 max-w-0 scale-10 overflow-hidden opacity-0`,
                    ),
                    inert: !a,
                    children: (0, ks.jsx)(pn, {
                      side: `bottom`,
                      tooltipContent: s,
                      children: (0, ks.jsx)(n, {
                        "aria-label": s,
                        color: o ? `ghost` : `ghostActive`,
                        "data-state": b === t.id ? `open` : `closed`,
                        disabled: o,
                        focusRing: `inset`,
                        radius: e ? `full` : `small`,
                        size: `toolbar`,
                        tabIndex: a ? void 0 : -1,
                        uniform: !0,
                        onClick: (e) => {
                          r != null && Me(r, Ts(e.currentTarget));
                        },
                        onContextMenu: (e) => {
                          !De && Ce && (e.preventDefault(), Ne(t, Ts(e.currentTarget), `toolbar`, Es(e)));
                        },
                        onFocus: () => V(t.id),
                        children: (0, ks.jsx)(qo, { action: r, iconDataUrl: c, showBadge: !0 }, c),
                      }),
                    }),
                  },
                  t.id,
                );
              }),
              w
                ? (0, ks.jsx)(ee, {
                    asChild: !0,
                    children: (0, ks.jsx)(pn, {
                      tooltipContent: Oe,
                      side: `bottom`,
                      cloneCustomTrigger: !0,
                      children: (0, ks.jsx)(n, {
                        ref: (e) => {
                          ((q.current = e), e != null && (ce.current = e));
                        },
                        className: e ? `@max-lg/browser-toolbar:hidden` : void 0,
                        "aria-label": Oe,
                        "data-browser-toolbar-overflow": !0,
                        color: `ghostActive`,
                        focusRing: `inset`,
                        radius: e ? `full` : `small`,
                        size: `toolbar`,
                        uniform: !0,
                        onFocus: () => V(null),
                        children: (0, ks.jsx)(`span`, {
                          className: `icon-xs flex items-center justify-center`,
                          children: (0, ks.jsx)(se, { asset: ge, alignment: `composite` }),
                        }),
                      }),
                    }),
                  })
                : null,
            ],
          })
        : null,
      (0, ks.jsxs)(p, {
        "aria-labelledby": D,
        align: `end`,
        className: `gap-1 select-none`,
        size: `menuWide`,
        variant: `menu`,
        onInteractOutside: (e) => {
          let t = j.current;
          (t != null && t.menuId == null && t.close(),
            (A.current != null || j.current != null || P(e.detail.originalEvent)) && e.preventDefault());
        },
        onEscapeKeyDown: (e) => {
          let t = j.current;
          t != null && t.menuId == null
            ? (t.close(), e.preventDefault())
            : A.current != null || j.current != null
              ? e.preventDefault()
              : (le.current = !0);
        },
        onCloseAutoFocus: (e) => {
          (j.current?.close(),
            l?.(e),
            e.defaultPrevented || J.current
              ? (e.preventDefault(), (J.current = !1))
              : le.current
                ? (e.preventDefault(), (q.current ?? v?.current)?.focus())
                : w || e.preventDefault(),
            (le.current = !1));
        },
        children: [
          (0, ks.jsx)(`div`, {
            id: D,
            className: `flex h-9 items-center px-2 text-xs leading-4 text-tertiary`,
            children: (0, ks.jsx)(z, {
              id: `thread.browser.extensions.titleWithCount`,
              defaultMessage: `Extensions ({count, number})`,
              description: `Heading of the installed browser extensions list, including the installed extension count`,
              values: { count: ye.length },
            }),
          }),
          i
            ? (0, ks.jsx)(`p`, {
                className: `px-2 py-1 text-xs text-secondary`,
                children: (0, ks.jsx)(z, {
                  id: `thread.browser.extensions.loadError`,
                  defaultMessage: `Unable to load extensions`,
                  description: `Status shown when the browser extension list could not be refreshed`,
                }),
              })
            : null,
          xe.ready
            ? null
            : (0, ks.jsx)(`p`, {
                className: `px-2 py-1 text-xs text-secondary`,
                children: (0, ks.jsx)(z, {
                  id: `thread.browser.extensions.loading`,
                  defaultMessage: `Loading extensions…`,
                  description: `Status shown while the browser extension system is starting`,
                }),
              }),
          xe.ready && ye.length === 0
            ? (0, ks.jsx)(`p`, {
                className: `px-2 py-1 text-xs text-secondary`,
                children: (0, ks.jsx)(z, {
                  id: `thread.browser.extensions.empty`,
                  defaultMessage: `No extensions installed`,
                  description: `Empty state in the installed browser extensions list`,
                }),
              })
            : null,
          ye.length > 0
            ? (0, ks.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: ye.map((e) =>
                  (0, ks.jsx)(
                    ds,
                    {
                      action: Se?.get(e.id),
                      actionDisabled: De,
                      extension: e,
                      menuOpen: G === e.id || ie === e.id,
                      menuOptions: o,
                      menuService: s,
                      supportsContextMenu: Ce,
                      toolbar: xe,
                      onLaunch: (e) => {
                        let t = q.current ?? v?.current;
                        Me(e, t == null ? void 0 : Ts(t));
                      },
                      onError: d,
                      onMenuOpen: (e) =>
                        j.current != null || A.current != null
                          ? !1
                          : ((j.current = e), ae(e.extensionId), !0),
                      onMenuClose: (e) => {
                        j.current === e && ((j.current = null), ae(null));
                      },
                      onPin: (t) => {
                        m(e, t);
                      },
                      onRefreshActions: h,
                    },
                    e.id,
                  ),
                ),
              })
            : null,
          (0, ks.jsx)(`div`, { "aria-hidden": !0, className: `mx-2 h-px shrink-0 bg-border` }),
          (0, ks.jsx)(`div`, {
            className: `pt-1`,
            children: (0, ks.jsxs)(n, {
              className: `w-full justify-between`,
              color: `ghostActive`,
              size: `menuRow`,
              onClick: () => {
                (M(!1), u());
              },
              children: [
                (0, ks.jsx)(z, {
                  id: `thread.browser.extensions.manage`,
                  defaultMessage: `Manage extensions`,
                  description: `Menu item that opens the in-app browser extension manager`,
                }),
                (0, ks.jsx)(r, { className: `text-tertiary` }),
              ],
            }),
          }),
          (0, ks.jsxs)(n, {
            className: `w-full justify-between`,
            color: `ghostActive`,
            size: `menuRow`,
            onClick: (e) => {
              (M(!1), _(e));
            },
            children: [
              (0, ks.jsx)(z, {
                id: `thread.browser.extensions.webStore`,
                defaultMessage: `Visit Web Store`,
                description: `Menu item that opens the Chrome Web Store in the in-app browser`,
              }),
              (0, ks.jsx)(r, { className: `text-tertiary` }),
            ],
          }),
          v != null && C != null
            ? C(() => {
                ((le.current = !0), M(!1));
              })
            : null,
        ],
      }),
    ],
  });
}
function ws(e, t, n) {
  let r = (0, Ds.c)(6),
    i = (0, Os.useRef)(null),
    a,
    o;
  (r[0] !== n || r[1] !== t || r[2] !== e
    ? ((a = () => {
        if (!e) return;
        let r = (e) => {
          i.current = t.current != null || n.current != null ? e : null;
        };
        return (
          document.addEventListener(`pointerdown`, r, !0),
          () => {
            (document.removeEventListener(`pointerdown`, r, !0), (i.current = null));
          }
        );
      }),
      (o = [e, t, n]),
      (r[0] = n),
      (r[1] = t),
      (r[2] = e),
      (r[3] = a),
      (r[4] = o))
    : ((a = r[3]), (o = r[4])),
    (0, Os.useEffect)(a, o));
  let s;
  return (
    r[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (e) => i.current === e), (r[5] = s))
      : (s = r[5]),
    s
  );
}
function Ts(e) {
  let { height: t, width: n, x: r, y: i } = e.getBoundingClientRect();
  return { height: t, width: n, x: r, y: i };
}
function Es(e) {
  return `pointerType` in e.nativeEvent && e.nativeEvent.pointerType === `touch`
    ? `touch`
    : e.detail === 0 && e.button === 0
      ? `keyboard`
      : `mouse`;
}
var Ds, Os, ks;
function As() {
  return (As = e(() => {
    ((Ds = Sn()),
      et(),
      rt(),
      (Os = Mn()),
      Mt(),
      w(),
      hn(),
      P(),
      J(),
      Ee(),
      Pe(),
      _t(),
      Zo(),
      ys(),
      Ss(),
      (ks = En()));
  }))();
}
function js(e) {
  let t = (0, Ms.c)(10),
    { onClick: r, saving: i, visible: a } = e,
    o = a ? he : c,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = a
        ? (0, Ns.jsx)(z, {
            id: `thread.browser.extensions.hideFromToolbar`,
            defaultMessage: `Hide from toolbar`,
            description: `Hides the extensions puzzle button from the browser toolbar; extensions remain accessible in the browser options menu`,
          })
        : (0, Ns.jsx)(z, {
            id: `thread.browser.extensions.pinToToolbar`,
            defaultMessage: `Pin to toolbar`,
            description: `Restores the extensions puzzle button to the browser toolbar`,
          })),
      (t[0] = a),
      (t[1] = s));
  let l;
  t[2] !== o || t[3] !== i
    ? ((l = i
        ? (0, Ns.jsx)(rn, { className: `size-4 text-tertiary`, as: `span`, containerClassName: `shrink-0` })
        : (0, Ns.jsx)(o, { className: `text-tertiary` })),
      (t[2] = o),
      (t[3] = i),
      (t[4] = l))
    : (l = t[4]);
  let u;
  return (
    t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== l
      ? ((u = (0, Ns.jsxs)(n, {
          className: `w-full justify-between`,
          "aria-busy": i,
          color: `ghostActive`,
          disabled: i,
          size: `menuRow`,
          onClick: r,
          children: [s, l],
        })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = s),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
var Ms, Ns;
function Ps() {
  return (Ps = e(() => {
    ((Ms = Sn()), Mt(), hn(), Ee(), Ot(), (Ns = En()));
  }))();
}
function Fs(e) {
  let t = (0, Rs.c)(139),
    {
      floating: r,
      currentZoomPercent: i,
      direction: a,
      onOpenChange: o,
      triggerRef: s,
      pageActionsDisabled: c,
      isDeviceToolbarEnabled: u,
      isDeviceToolbarVisible: d,
      isFloatingComposerMenuItemVisible: f,
      isFloatingComposerVisible: p,
      isPrintMenuItemVisible: m,
      isScreenshotCaptureEnabled: h,
      onCaptureScreenshot: g,
      onOpenFindInPage: _,
      onPrint: y,
      onResetZoom: b,
      onToggleFloatingComposer: x,
      onToggleDeviceToolbar: S,
      showDeviceToolbarInNewTabs: C,
      onShowDeviceToolbarInNewTabsChange: w,
      onZoomIn: E,
      onZoomOut: D,
      open: O,
      showExtensionsOverflow: k,
      onOpenExtensions: A,
      onImportBrowserProfile: j,
      onOpenPasswordManager: M,
      onOpenContactInfo: N,
      onOpenDownloads: P,
      onOpenHistory: F,
      onOpenBrowserSettings: I,
      clearBrowsingData: L,
    } = e,
    ee = r !== void 0 && r,
    R = d !== void 0 && d,
    B = f !== void 0 && f,
    V = p === void 0 || p,
    H = m !== void 0 && m,
    te = (0, zs.useRef)(!1),
    U = Ie(),
    ne;
  t[0] === U
    ? (ne = t[1])
    : ((ne = U.formatMessage({
        id: `thread.browser.options`,
        defaultMessage: `Browser options`,
        description: `Accessible label for the in-app browser options menu`,
      })),
      (t[0] = U),
      (t[1] = ne));
  let W = ne,
    G;
  t[2] === U
    ? (G = t[3])
    : ((G = U.formatMessage({
        id: `thread.browser.zoom`,
        defaultMessage: `Zoom`,
        description: `Label for in-app browser zoom controls`,
      })),
      (t[2] = U),
      (t[3] = G));
  let re = G,
    ie;
  t[4] === U
    ? (ie = t[5])
    : ((ie = U.formatMessage({
        id: `browserSidebar.zoomBanner.zoomOut`,
        defaultMessage: `Zoom out`,
        description: `Accessible label for the zoom out action in the browser zoom banner`,
      })),
      (t[4] = U),
      (t[5] = ie));
  let ae = ie,
    K;
  t[6] === U
    ? (K = t[7])
    : ((K = U.formatMessage({
        id: `browserSidebar.zoomBanner.zoomIn`,
        defaultMessage: `Zoom in`,
        description: `Accessible label for the zoom in action in the browser zoom banner`,
      })),
      (t[6] = U),
      (t[7] = K));
  let oe = K,
    q;
  t[8] === U
    ? (q = t[9])
    : ((q = U.formatMessage({
        id: `browserSidebar.zoomBanner.reset`,
        defaultMessage: `Reset`,
        description: `Button label for the reset action in the browser zoom banner`,
      })),
      (t[8] = U),
      (t[9] = q));
  let ce = q,
    J = Ls,
    le = j != null || M != null || N != null || P != null || F != null || L != null,
    ue = B && x != null,
    de = u && S != null,
    fe = h && g != null,
    pe = ue || de || fe || le || I != null,
    me;
  t[10] !== A || t[11] !== s
    ? ((me = (e) => {
        te.current && ((te.current = !1), e.preventDefault(), s?.current?.focus(), A?.());
      }),
      (t[10] = A),
      (t[11] = s),
      (t[12] = me))
    : (me = t[12]);
  let he;
  t[13] !== ee || t[14] !== W || t[15] !== s
    ? ((he = ee
        ? (0, $.jsx)(Ut, {
            ref: s,
            "aria-label": W,
            "data-browser-sidebar-skip-address-commit": `true`,
            uniform: !0,
            onClick: Is,
            children: (0, $.jsx)(l, {}),
          })
        : (0, $.jsx)(_e, {
            ref: s,
            color: `primary`,
            "data-browser-sidebar-skip-address-commit": `true`,
            label: W,
          })),
      (t[13] = ee),
      (t[14] = W),
      (t[15] = s),
      (t[16] = he))
    : (he = t[16]);
  let ge;
  t[17] !== O || t[18] !== W || t[19] !== he
    ? ((ge = (0, $.jsx)(pn, {
        cloneCustomTrigger: !0,
        tooltipContent: W,
        triggerPopupOpen: O,
        children: he,
      })),
      (t[17] = O),
      (t[18] = W),
      (t[19] = he),
      (t[20] = ge))
    : (ge = t[20]);
  let ve;
  t[21] !== o || t[22] !== A || t[23] !== k
    ? ((ve =
        k && A != null
          ? (0, $.jsx)(Y.Item, {
              onSelect: () => {
                ((te.current = !0), o(!1));
              },
              children: (0, $.jsx)(z, {
                id: `thread.browser.extensions.overflow`,
                defaultMessage: `Extensions`,
                description: `Browser options menu item that opens the installed extensions list when the puzzle button is hidden`,
              }),
            })
          : null),
      (t[21] = o),
      (t[22] = A),
      (t[23] = k),
      (t[24] = ve))
    : (ve = t[24]);
  let ye;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(z, {
        id: `thread.browser.findInPage`,
        defaultMessage: `Find in page`,
        description: `Menu item that opens find in page for the in-app browser`,
      })),
      (t[25] = ye))
    : (ye = t[25]);
  let be;
  t[26] !== _ || t[27] !== c
    ? ((be = (0, $.jsx)(Y.Item, { disabled: c, onSelect: _, children: ye })),
      (t[26] = _),
      (t[27] = c),
      (t[28] = be))
    : (be = t[28]);
  let xe;
  t[29] !== H || t[30] !== y || t[31] !== c
    ? ((xe =
        H && y != null
          ? (0, $.jsx)(Y.Item, {
              disabled: c,
              onSelect: y,
              children: (0, $.jsx)(z, {
                id: `thread.browser.print`,
                defaultMessage: `Print`,
                description: `Menu item that opens the print dialog for the current in-app browser page`,
              }),
            })
          : null),
      (t[29] = H),
      (t[30] = y),
      (t[31] = c),
      (t[32] = xe))
    : (xe = t[32]);
  let Se;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (0, $.jsx)(Y.Separator, {})), (t[33] = Se))
    : (Se = t[33]);
  let Ce;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, $.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: (0, $.jsx)(z, {
          id: `thread.browser.zoom`,
          defaultMessage: `Zoom`,
          description: `Label for in-app browser zoom controls`,
        }),
      })),
      (t[34] = Ce))
    : (Ce = t[34]);
  let we;
  t[35] === D ? (we = t[36]) : ((we = (e) => J(e, D)), (t[35] = D), (t[36] = we));
  let Te;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, $.jsx)(se, { "aria-hidden": !1, asset: xn })), (t[37] = Te))
    : (Te = t[37]);
  let Ee;
  t[38] !== c || t[39] !== we || t[40] !== ae
    ? ((Ee = (0, $.jsx)(n, {
        className: `h-6 w-6 justify-center`,
        type: `button`,
        "aria-label": ae,
        color: `ghost`,
        focusRing: `inset`,
        size: `inline`,
        disabled: c,
        onClick: we,
        children: Te,
      })),
      (t[38] = c),
      (t[39] = we),
      (t[40] = ae),
      (t[41] = Ee))
    : (Ee = t[41]);
  let De;
  t[42] !== Ee || t[43] !== ae
    ? ((De = (0, $.jsx)(pn, { tooltipContent: ae, side: `bottom`, children: Ee })),
      (t[42] = Ee),
      (t[43] = ae),
      (t[44] = De))
    : (De = t[44]);
  let Oe;
  t[45] === i
    ? (Oe = t[46])
    : ((Oe = (0, $.jsx)(`div`, {
        className: `w-11 border-x border-default py-0.5 text-center tabular-nums`,
        children: (0, $.jsx)(z, {
          id: `thread.browser.zoomPercent`,
          defaultMessage: `{zoomPercent}%`,
          description: `Zoom percentage shown in in-app browser controls`,
          values: { zoomPercent: i },
        }),
      })),
      (t[45] = i),
      (t[46] = Oe));
  let ke;
  t[47] === E ? (ke = t[48]) : ((ke = (e) => J(e, E)), (t[47] = E), (t[48] = ke));
  let Ae;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(se, { "aria-hidden": !1, asset: yt })), (t[49] = Ae))
    : (Ae = t[49]);
  let je;
  t[50] !== c || t[51] !== ke || t[52] !== oe
    ? ((je = (0, $.jsx)(n, {
        className: `h-6 w-6 justify-center`,
        type: `button`,
        "aria-label": oe,
        color: `ghost`,
        focusRing: `inset`,
        size: `inline`,
        disabled: c,
        onClick: ke,
        children: Ae,
      })),
      (t[50] = c),
      (t[51] = ke),
      (t[52] = oe),
      (t[53] = je))
    : (je = t[53]);
  let Me;
  t[54] !== je || t[55] !== oe
    ? ((Me = (0, $.jsx)(pn, { tooltipContent: oe, side: `bottom`, children: je })),
      (t[54] = je),
      (t[55] = oe),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== De || t[58] !== Oe || t[59] !== Me
    ? ((Ne = (0, $.jsxs)(`div`, {
        className: `flex shrink-0 items-center overflow-hidden rounded-md border border-default bg-text/5 text-xs`,
        children: [De, Oe, Me],
      })),
      (t[57] = De),
      (t[58] = Oe),
      (t[59] = Me),
      (t[60] = Ne))
    : (Ne = t[60]);
  let Pe = c || i === 100,
    Fe;
  t[61] === b ? (Fe = t[62]) : ((Fe = (e) => J(e, b)), (t[61] = b), (t[62] = Fe));
  let Le;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, $.jsx)(se, { "aria-hidden": !1, asset: T })), (t[63] = Le))
    : (Le = t[63]);
  let Re;
  t[64] !== ce || t[65] !== Pe || t[66] !== Fe
    ? ((Re = (0, $.jsx)(n, {
        "aria-label": ce,
        color: `ghost`,
        radius: `small`,
        size: `compact`,
        uniform: !0,
        disabled: Pe,
        onClick: Fe,
        children: Le,
      })),
      (t[64] = ce),
      (t[65] = Pe),
      (t[66] = Fe),
      (t[67] = Re))
    : (Re = t[67]);
  let ze;
  t[68] !== ce || t[69] !== Re
    ? ((ze = (0, $.jsx)(pn, { tooltipContent: ce, side: `bottom`, children: Re })),
      (t[68] = ce),
      (t[69] = Re),
      (t[70] = ze))
    : (ze = t[70]);
  let Be;
  t[71] !== Ne || t[72] !== ze || t[73] !== re
    ? ((Be = (0, $.jsxs)(`div`, {
        role: `group`,
        "aria-label": re,
        className: `flex items-center gap-1 rounded-lg px-[var(--padding-row-x)] py-0.5 text-sm`,
        children: [Ce, Ne, ze],
      })),
      (t[71] = Ne),
      (t[72] = ze),
      (t[73] = re),
      (t[74] = Be))
    : (Be = t[74]);
  let Ve;
  t[75] === pe ? (Ve = t[76]) : ((Ve = pe ? (0, $.jsx)(Y.Separator, {}) : null), (t[75] = pe), (t[76] = Ve));
  let He;
  t[77] !== le || t[78] !== V || t[79] !== I || t[80] !== x || t[81] !== de || t[82] !== ue || t[83] !== fe
    ? ((He = ue
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(Y.Item, {
                onSelect: x,
                children: V
                  ? (0, $.jsx)(z, { ...xt.hideFloatingComposer })
                  : (0, $.jsx)(z, { ...xt.showFloatingComposer }),
              }),
              de || fe || le || I != null ? (0, $.jsx)(Y.Separator, {}) : null,
            ],
          })
        : null),
      (t[77] = le),
      (t[78] = V),
      (t[79] = I),
      (t[80] = x),
      (t[81] = de),
      (t[82] = ue),
      (t[83] = fe),
      (t[84] = He))
    : (He = t[84]);
  let Ue;
  t[85] !== R || t[86] !== w || t[87] !== S || t[88] !== c || t[89] !== de || t[90] !== C
    ? ((Ue = de
        ? (0, $.jsxs)(Y.FlyoutSubmenuItem, {
            label: (0, $.jsx)(z, {
              id: `thread.browser.options.deviceToolbar`,
              defaultMessage: `Device toolbar`,
              description: `Submenu containing controls to show or hide the browser device toolbar and set whether new tabs show it by default`,
            }),
            children: [
              (0, $.jsx)(Y.Item, {
                disabled: c,
                onSelect: S,
                children: R
                  ? (0, $.jsx)(z, {
                      id: `thread.browser.options.hideDeviceToolbar`,
                      defaultMessage: `Hide device toolbar`,
                      description: `Menu item that hides the browser device toolbar viewport controls`,
                    })
                  : (0, $.jsx)(z, {
                      id: `thread.browser.options.showDeviceToolbar`,
                      defaultMessage: `Show device toolbar`,
                      description: `Menu item that shows the browser device toolbar viewport controls`,
                    }),
              }),
              (0, $.jsx)(Y.CheckboxItem, {
                checked: C,
                onCheckedChange: w,
                children: (0, $.jsx)(z, {
                  id: `thread.browser.options.showDeviceToolbarInNewTabs`,
                  defaultMessage: `Always show in new tabs`,
                  description: `Checkbox in the Device toolbar submenu that saves whether newly opened browser tabs show the device toolbar by default, across all chats and app restarts; individual tabs can still hide it`,
                }),
              }),
            ],
          })
        : null),
      (t[85] = R),
      (t[86] = w),
      (t[87] = S),
      (t[88] = c),
      (t[89] = de),
      (t[90] = C),
      (t[91] = Ue))
    : (Ue = t[91]);
  let We;
  t[92] !== g || t[93] !== c || t[94] !== fe
    ? ((We = fe
        ? (0, $.jsx)(Y.Item, {
            disabled: c,
            onSelect: g,
            children: (0, $.jsx)(z, { ...xt.captureScreenshot }),
          })
        : null),
      (t[92] = g),
      (t[93] = c),
      (t[94] = fe),
      (t[95] = We))
    : (We = t[95]);
  let Ge;
  t[96] !== le || t[97] !== I || t[98] !== de || t[99] !== fe
    ? ((Ge = (de || fe) && (le || I != null) ? (0, $.jsx)(Y.Separator, {}) : null),
      (t[96] = le),
      (t[97] = I),
      (t[98] = de),
      (t[99] = fe),
      (t[100] = Ge))
    : (Ge = t[100]);
  let Ke;
  t[101] === j
    ? (Ke = t[102])
    : ((Ke =
        j == null
          ? null
          : (0, $.jsx)(Y.Item, {
              onSelect: j,
              children: (0, $.jsx)(z, {
                id: `thread.browser.importCookiesAndPasswords`,
                defaultMessage: `Import cookies and passwords…`,
                description: `Menu item that opens the browser profile import dialog`,
              }),
            })),
      (t[101] = j),
      (t[102] = Ke));
  let qe;
  t[103] !== N || t[104] !== M
    ? ((qe =
        M != null || N != null
          ? (0, $.jsxs)(Y.FlyoutSubmenuItem, {
              label: (0, $.jsx)(z, {
                id: `thread.browser.passwordsAndAutofill`,
                defaultMessage: `Passwords and autofill`,
                description: `Submenu containing the in-app browser password and autofill managers`,
              }),
              children: [
                M == null
                  ? null
                  : (0, $.jsx)(Y.Item, {
                      onSelect: M,
                      children: (0, $.jsx)(z, {
                        id: `thread.browser.passwordManager`,
                        defaultMessage: `Password manager`,
                        description: `Menu item that opens the in-app browser password manager`,
                      }),
                    }),
                N == null
                  ? null
                  : (0, $.jsx)(Y.Item, {
                      onSelect: N,
                      children: (0, $.jsx)(z, {
                        id: `thread.browser.contactInfo`,
                        defaultMessage: `Contact info`,
                        description: `Menu item that opens the in-app browser contact info manager`,
                      }),
                    }),
              ],
            })
          : null),
      (t[103] = N),
      (t[104] = M),
      (t[105] = qe))
    : (qe = t[105]);
  let Je;
  t[106] === P
    ? (Je = t[107])
    : ((Je =
        P == null
          ? null
          : (0, $.jsx)(Y.Item, {
              onSelect: P,
              children: (0, $.jsx)(z, {
                id: `thread.browser.downloads`,
                defaultMessage: `Downloads`,
                description: `Menu item that opens the global downloads manager`,
              }),
            })),
      (t[106] = P),
      (t[107] = Je));
  let Ye;
  t[108] === F
    ? (Ye = t[109])
    : ((Ye =
        F == null
          ? null
          : (0, $.jsx)(Y.Item, {
              onSelect: F,
              children: (0, $.jsx)(z, {
                id: `thread.browser.history`,
                defaultMessage: `History`,
                description: `Menu item that opens the in-app browser history`,
              }),
            })),
      (t[108] = F),
      (t[109] = Ye));
  let Xe;
  t[110] === L
    ? (Xe = t[111])
    : ((Xe =
        L?.kind === `dialog`
          ? (0, $.jsx)(Y.Item, {
              disabled: L.isOpening,
              onSelect: L.onOpen,
              children: (0, $.jsx)(z, {
                id: `thread.browser.clearBrowsingData`,
                defaultMessage: `Clear browsing data`,
                description: `Submenu containing actions to clear in-app browser data`,
              }),
            })
          : null),
      (t[110] = L),
      (t[111] = Xe));
  let Ze;
  t[112] === L
    ? (Ze = t[113])
    : ((Ze =
        L?.kind === `submenu`
          ? (0, $.jsxs)(Y.FlyoutSubmenuItem, {
              disabled: L.isClearing,
              label: (0, $.jsx)(z, {
                id: `thread.browser.clearBrowsingData`,
                defaultMessage: `Clear browsing data`,
                description: `Submenu containing actions to clear in-app browser data`,
              }),
              children: [
                (0, $.jsx)(Y.Item, {
                  disabled: L.isClearing,
                  onSelect: () => L.onClear(`cookies`),
                  children: (0, $.jsx)(z, {
                    id: `thread.browser.clearCookies`,
                    defaultMessage: `Clear cookies`,
                    description: `Menu item that clears in-app browser cookies`,
                  }),
                }),
                (0, $.jsx)(Y.Item, {
                  disabled: L.isClearing,
                  onSelect: () => L.onClear(`cache`),
                  children: (0, $.jsx)(z, {
                    id: `thread.browser.clearCache`,
                    defaultMessage: `Clear cache`,
                    description: `Menu item that clears the in-app browser cache`,
                  }),
                }),
                (0, $.jsx)(Y.Item, {
                  disabled: L.isClearing,
                  onSelect: () => L.onClear(`downloads`),
                  children: (0, $.jsx)(z, {
                    id: `settings.browserUse.browser.clearDownloads`,
                    defaultMessage: `Delete download history`,
                    description: `Button label to delete browser download history`,
                  }),
                }),
              ],
            })
          : null),
      (t[112] = L),
      (t[113] = Ze));
  let Qe;
  t[114] !== le || t[115] !== I
    ? ((Qe =
        I == null
          ? null
          : (0, $.jsxs)($.Fragment, {
              children: [
                le ? (0, $.jsx)(Y.Separator, {}) : null,
                (0, $.jsx)(Y.Item, {
                  onSelect: I,
                  children: (0, $.jsx)(z, {
                    id: `thread.browser.browserSettings`,
                    defaultMessage: `Browser settings`,
                    description: `Menu item that opens the in-app browser settings`,
                  }),
                }),
              ],
            })),
      (t[114] = le),
      (t[115] = I),
      (t[116] = Qe))
    : (Qe = t[116]);
  let $e;
  return (
    t[117] !== a ||
    t[118] !== o ||
    t[119] !== O ||
    t[120] !== me ||
    t[121] !== ge ||
    t[122] !== ve ||
    t[123] !== be ||
    t[124] !== xe ||
    t[125] !== Be ||
    t[126] !== Ve ||
    t[127] !== He ||
    t[128] !== Ue ||
    t[129] !== We ||
    t[130] !== Ge ||
    t[131] !== Ke ||
    t[132] !== qe ||
    t[133] !== Je ||
    t[134] !== Ye ||
    t[135] !== Xe ||
    t[136] !== Ze ||
    t[137] !== Qe
      ? (($e = (0, $.jsxs)(v, {
          align: `end`,
          contentWidth: `menuWide`,
          dir: a,
          open: O,
          onOpenChange: o,
          onCloseAutoFocus: me,
          triggerButton: ge,
          children: [ve, be, xe, Se, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe],
        })),
        (t[117] = a),
        (t[118] = o),
        (t[119] = O),
        (t[120] = me),
        (t[121] = ge),
        (t[122] = ve),
        (t[123] = be),
        (t[124] = xe),
        (t[125] = Be),
        (t[126] = Ve),
        (t[127] = He),
        (t[128] = Ue),
        (t[129] = We),
        (t[130] = Ge),
        (t[131] = Ke),
        (t[132] = qe),
        (t[133] = Je),
        (t[134] = Ye),
        (t[135] = Xe),
        (t[136] = Ze),
        (t[137] = Qe),
        (t[138] = $e))
      : ($e = t[138]),
    $e
  );
}
function Is(e) {
  return e.stopPropagation();
}
function Ls(e, t) {
  (e.preventDefault(), e.stopPropagation(), t());
}
var Rs, zs, $;
function Bs() {
  return (Bs = e(() => {
    ((Rs = Sn()),
      le(),
      ct(),
      i(),
      sn(),
      (zs = Mn()),
      Mt(),
      hn(),
      u(),
      J(),
      Ee(),
      o(),
      _t(),
      b(),
      nt(),
      ($ = En()));
  }))();
}
export {
  Nr as A,
  Li as C,
  Fi as D,
  Ci as E,
  Sr as F,
  Tr as I,
  ir as L,
  Er as M,
  Mr as N,
  Ur as O,
  br as P,
  yr as R,
  Ii as S,
  wi as T,
  Ha as _,
  Cs as a,
  Vi as b,
  Uo as c,
  Vo as d,
  Ho as f,
  Na as g,
  Ro as h,
  Ps as i,
  Ir as j,
  oi as k,
  zo as l,
  Eo as m,
  Bs as n,
  As as o,
  Bo as p,
  js as r,
  Go as s,
  Fs as t,
  Ko as u,
  Gi as v,
  Bi as w,
  Wi as x,
  qi as y,
};
//# sourceMappingURL=options-menu-view-d2245cef75bf.js.map
