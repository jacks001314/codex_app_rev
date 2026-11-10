import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  DB as i,
  Dp as a,
  FBt as o,
  LNt as s,
  MB as c,
  N8 as l,
  OB as u,
  Op as d,
  PBt as f,
  Qst as p,
  Rrt as m,
  VR as h,
  XOt as g,
  ZSt as _,
  dR as v,
  fR as y,
  iCt as b,
  jB as x,
  mR as S,
  okt as C,
  pR as w,
  tkt as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as E,
  CMr as D,
  D0t as O,
  Izr as k,
  Kpr as A,
  Lzr as j,
  M0t as M,
  kLr as N,
  lBr as P,
  qpr as F,
  uBr as I,
  yMr as L,
} from "./app-initial-ad16eaadf81f.js";
import { K_ as R, q_ as z } from "./app-primary-3e00728c2a4c.js";
import { n as B, t as V } from "./conversation-gap-345d1fbb056a.js";
function H(e) {
  let n = (0, W.c)(21),
    { turnKey: r } = e,
    i = t(p),
    a = (0, G.useRef)(null),
    o = b(X),
    s = b(Y),
    c = Date.now(),
    u = o != null && (s == null || (s.turnKey === r ? !s.closed : c >= s.nextEligibleAtMs)),
    d,
    f;
  if (
    (n[0] !== i || n[1] !== r || n[2] !== u
      ? ((d = () => {
          u &&
            i.set(Y, (e) => {
              let t = Date.now();
              if (e != null && (e.turnKey === r || t < e.nextEligibleAtMs)) return e;
              let n = [...(e?.impressionTimestampsMs ?? []), t].slice(-3);
              return {
                turnKey: r,
                closed: !1,
                impressionTimestampsMs: n,
                nextEligibleAtMs: Math.max(t + q, n.length === 3 ? n[0] + J : 0),
              };
            });
        }),
        (f = [i, r, u]),
        (n[0] = i),
        (n[1] = r),
        (n[2] = u),
        (n[3] = d),
        (n[4] = f))
      : ((d = n[3]), (f = n[4])),
    (0, G.useEffect)(d, f),
    !u || o == null)
  )
    return null;
  let m;
  n[5] !== i || n[6] !== r
    ? ((m = (e) => {
        i.set(Y, (t) =>
          t?.turnKey === r
            ? { ...t, closed: !0, nextEligibleAtMs: Math.max(t.nextEligibleAtMs, Date.now() + e) }
            : t,
        );
      }),
      (n[5] = i),
      (n[6] = r),
      (n[7] = m))
    : (m = n[7]);
  let h = m,
    g;
  n[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, K.jsx)(V, {})), (n[8] = g)) : (g = n[8]);
  let _;
  n[9] !== i || n[10] !== r
    ? ((_ = () => {
        a.current !== r &&
          ((a.current = r),
          i.get(D).trackCounter(l.CODEX_BROWSER_EXTENSION_PROMPT_COUNTER_AFTER_TURN_SHOWN, 1));
      }),
      (n[9] = i),
      (n[10] = r),
      (n[11] = _))
    : (_ = n[11]);
  let v, y;
  n[12] !== h || n[13] !== i
    ? ((v = () => {
        (i.get(D).trackCounter(l.CODEX_BROWSER_EXTENSION_PROMPT_COUNTER_AFTER_TURN_DISMISSED, 1), h(14 * q));
      }),
      (y = () => {
        (i.get(D).trackCounter(l.CODEX_BROWSER_EXTENSION_PROMPT_COUNTER_AFTER_TURN_OPEN_CLICKED, 1),
          !window.dispatchEvent(
            new CustomEvent(`chatgpt-extension-request-action`, {
              cancelable: !0,
              detail: { type: `OPEN_CODEX_SIDE_PANEL`, source: `chatgpt_website_onboarding` },
            }),
          ) && h(J));
      }),
      (n[12] = h),
      (n[13] = i),
      (n[14] = v),
      (n[15] = y))
    : ((v = n[14]), (y = n[15]));
  let x;
  return (
    n[16] !== o || n[17] !== _ || n[18] !== v || n[19] !== y
      ? ((x = (0, K.jsxs)(K.Fragment, {
          children: [g, (0, K.jsx)(U, { browserFamily: o, onShown: _, onDismiss: v, onOpen: y })],
        })),
        (n[16] = o),
        (n[17] = _),
        (n[18] = v),
        (n[19] = y),
        (n[20] = x))
      : (x = n[20]),
    x
  );
}
function U(e) {
  let t = (0, W.c)(26),
    { browserFamily: n, onShown: r, onDismiss: a, onOpen: o } = e,
    s = C(),
    c = b(F),
    l;
  t[0] === r
    ? (l = t[1])
    : ((l = (e) => {
        e != null && r?.();
      }),
      (t[0] = r),
      (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, K.jsx)(T, {
        id: `browserExtension.useSideChatBanner.title`,
        defaultMessage: `Bring ChatGPT with you everywhere`,
        description: `Title of the suggestion to open ChatGPT side chat after using the browser extension`,
      })),
      (t[2] = u))
    : (u = t[2]);
  let f;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, K.jsx)(i, { className: `inline-block align-middle`, asset: d }, `extensions-icon`)),
      (t[3] = f))
    : (f = t[3]);
  let p = c === `macOS` ? `⌘⇧.` : `Ctrl+Shift+.`,
    m;
  t[4] === p
    ? (m = t[5])
    : ((m = (0, K.jsx)(T, {
        id: `browserExtension.useSideChatBanner.description`,
        defaultMessage: `Open side chat on any tab from your browser's extensions menu {extensionsIcon} or press {shortcut}`,
        description: `Instructions for opening ChatGPT side chat; extensionsIcon is the browser extensions puzzle-piece icon and shortcut is the keyboard shortcut`,
        values: { extensionsIcon: f, shortcut: (0, K.jsx)(x, { keysLabel: p }, `shortcut`) },
      })),
      (t[4] = p),
      (t[5] = m));
  let h;
  t[6] === n ? (h = t[7]) : ((h = v(n)), (t[6] = n), (t[7] = h));
  let g;
  t[8] === h
    ? (g = t[9])
    : ((g = (0, K.jsx)(`img`, { className: `size-8 shrink-0`, alt: ``, draggable: !1, src: h })),
      (t[8] = h),
      (t[9] = g));
  let _;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsx)(T, {
        id: `browserExtension.useSideChatBanner.open`,
        defaultMessage: `Try it`,
        description: `Button that opens ChatGPT in the browser's side panel`,
      })),
      (t[10] = _))
    : (_ = t[10]);
  let y;
  t[11] === o ? (y = t[12]) : ((y = { label: _, onClick: o }), (t[11] = o), (t[12] = y));
  let S;
  t[13] === s
    ? (S = t[14])
    : ((S = s.formatMessage({
        id: `browserExtension.useSideChatBanner.dismiss`,
        defaultMessage: `Dismiss side chat suggestion`,
        description: `Accessible label for dismissing the suggestion to open ChatGPT side chat`,
      })),
      (t[13] = s),
      (t[14] = S));
  let w;
  t[15] !== a || t[16] !== S
    ? ((w = { ariaLabel: S, onClick: a }), (t[15] = a), (t[16] = S), (t[17] = w))
    : (w = t[17]);
  let E;
  t[18] !== w || t[19] !== m || t[20] !== g || t[21] !== y
    ? ((E = (0, K.jsx)(R, {
        variant: `beacon`,
        title: u,
        description: m,
        leadingVisual: g,
        primaryAction: y,
        dismissAction: w,
      })),
      (t[18] = w),
      (t[19] = m),
      (t[20] = g),
      (t[21] = y),
      (t[22] = E))
    : (E = t[22]);
  let D;
  return (
    t[23] !== l || t[24] !== E
      ? ((D = (0, K.jsx)(`div`, { ref: l, className: `select-none`, children: E })),
        (t[23] = l),
        (t[24] = E),
        (t[25] = D))
      : (D = t[25]),
    D
  );
}
var W, G, K, q, J, Y, X;
function Z() {
  return (Z = e(() => {
    ((W = f()),
      m(),
      a(),
      h(),
      _(),
      (G = o()),
      g(),
      S(),
      y(),
      j(),
      M(),
      u(),
      c(),
      z(),
      A(),
      B(),
      L(),
      n(),
      P(),
      N(),
      (K = s()),
      (q = 864e5),
      (J = 365 * q),
      (Y = E(`use-side-chat-banner-v1`, null)),
      (X = r(p, ({ get: e }) => {
        if (!e(I, `767455704`)) return null;
        let t = e(O);
        return k() == null &&
          t?.toolbar?.pin === `unpinned` &&
          t.sidePanel?.currentWindow === `closed` &&
          t.capabilities?.[`toolbar.pin.read`] === !0 &&
          t.capabilities[`sidePanel.open`] === !0 &&
          t.capabilities[`website.action.request`] === !0
          ? w()
          : null;
      })));
  }))();
}
Z();
export { H as UseSideChatBanner };
//# sourceMappingURL=banner-2908339a2b2d.js.map
