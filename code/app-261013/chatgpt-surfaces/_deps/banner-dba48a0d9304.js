import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CL as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Iz as a,
  Lz as o,
  Mz as s,
  Nz as c,
  Pxt as l,
  QL as u,
  Qf as d,
  SL as f,
  TL as p,
  VDt as m,
  Vxt as h,
  Zf as g,
  jDt as _,
  oSt as v,
  vzt as y,
  wL as b,
  wot as x,
  xMt as S,
  yzt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  J4t as w,
  JNr as T,
  OPr as E,
  U4t as D,
  YNr as O,
  iNr as k,
  iur as A,
  kPr as j,
  rNr as M,
  rur as N,
} from "./app-initial-5851df3f6cb1.js";
import { O_ as P, k_ as F } from "./app-primary-fe8a450b3b04.js";
import { n as I, t as L } from "./conversation-gap-f75c434d4ee7.js";
function R(e) {
  let t = (0, B.c)(16),
    { turnKey: r } = e,
    a = i(n),
    o = h(K),
    s = h(G),
    c = Date.now(),
    l = o != null && (s == null || (s.turnKey === r ? !s.closed : c >= s.nextEligibleAtMs)),
    u,
    d;
  if (
    (t[0] !== a || t[1] !== r || t[2] !== l
      ? ((u = () => {
          l &&
            a.set(G, (e) => {
              let t = Date.now();
              if (e != null && (e.turnKey === r || t < e.nextEligibleAtMs)) return e;
              let n = [...(e?.impressionTimestampsMs ?? []), t].slice(-3);
              return {
                turnKey: r,
                closed: !1,
                impressionTimestampsMs: n,
                nextEligibleAtMs: Math.max(t + U, n.length === 3 ? n[0] + W : 0),
              };
            });
        }),
        (d = [a, r, l]),
        (t[0] = a),
        (t[1] = r),
        (t[2] = l),
        (t[3] = u),
        (t[4] = d))
      : ((u = t[3]), (d = t[4])),
    (0, V.useEffect)(u, d),
    !l || o == null)
  )
    return null;
  let f;
  t[5] !== a || t[6] !== r
    ? ((f = (e) => {
        a.set(G, (t) =>
          t?.turnKey === r
            ? { ...t, closed: !0, nextEligibleAtMs: Math.max(t.nextEligibleAtMs, Date.now() + e) }
            : t,
        );
      }),
      (t[5] = a),
      (t[6] = r),
      (t[7] = f))
    : (f = t[7]);
  let p = f,
    m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, H.jsx)(L, {})), (t[8] = m)) : (m = t[8]);
  let g, _;
  t[9] === p
    ? ((g = t[10]), (_ = t[11]))
    : ((g = () => p(14 * U)),
      (_ = () => {
        window.dispatchEvent(
          new CustomEvent(`chatgpt-extension-request-action`, {
            cancelable: !0,
            detail: { type: `OPEN_CODEX_SIDE_PANEL`, source: `chatgpt_website_onboarding` },
          }),
        ) || p(W);
      }),
      (t[9] = p),
      (t[10] = g),
      (t[11] = _));
  let v;
  return (
    t[12] !== o || t[13] !== g || t[14] !== _
      ? ((v = (0, H.jsxs)(H.Fragment, {
          children: [m, (0, H.jsx)(z, { browserFamily: o, onDismiss: g, onOpen: _ })],
        })),
        (t[12] = o),
        (t[13] = g),
        (t[14] = _),
        (t[15] = v))
      : (v = t[15]),
    v
  );
}
function z(e) {
  let t = (0, B.c)(21),
    { browserFamily: n, onDismiss: i, onOpen: o } = e,
    c = m(),
    l = h(A),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, H.jsx)(r, {
        id: `browserExtension.useSideChatBanner.title`,
        defaultMessage: `Bring ChatGPT with you everywhere`,
        description: `Title of the suggestion to open ChatGPT side chat after using the browser extension`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, H.jsx)(s, { className: `inline-block align-middle`, asset: d }, `extensions-icon`)),
      (t[1] = p))
    : (p = t[1]);
  let g = l === `macOS` ? `⌘⇧.` : `Ctrl+Shift+.`,
    _;
  t[2] === g
    ? (_ = t[3])
    : ((_ = (0, H.jsx)(r, {
        id: `browserExtension.useSideChatBanner.description`,
        defaultMessage: `Open side chat on any tab from your browser's extensions menu {extensionsIcon} or press {shortcut}`,
        description: `Instructions for opening ChatGPT side chat; extensionsIcon is the browser extensions puzzle-piece icon and shortcut is the keyboard shortcut`,
        values: { extensionsIcon: p, shortcut: (0, H.jsx)(a, { keysLabel: g }, `shortcut`) },
      })),
      (t[2] = g),
      (t[3] = _));
  let v;
  t[4] === n ? (v = t[5]) : ((v = f(n)), (t[4] = n), (t[5] = v));
  let y;
  t[6] === v
    ? (y = t[7])
    : ((y = (0, H.jsx)(`img`, { className: `size-8 shrink-0`, alt: ``, draggable: !1, src: v })),
      (t[6] = v),
      (t[7] = y));
  let b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, H.jsx)(r, {
        id: `browserExtension.useSideChatBanner.open`,
        defaultMessage: `Try it`,
        description: `Button that opens ChatGPT in the browser's side panel`,
      })),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === o ? (x = t[10]) : ((x = { label: b, onClick: o }), (t[9] = o), (t[10] = x));
  let S;
  t[11] === c
    ? (S = t[12])
    : ((S = c.formatMessage({
        id: `browserExtension.useSideChatBanner.dismiss`,
        defaultMessage: `Dismiss side chat suggestion`,
        description: `Accessible label for dismissing the suggestion to open ChatGPT side chat`,
      })),
      (t[11] = c),
      (t[12] = S));
  let C;
  t[13] !== i || t[14] !== S
    ? ((C = { ariaLabel: S, onClick: i }), (t[13] = i), (t[14] = S), (t[15] = C))
    : (C = t[15]);
  let w;
  return (
    t[16] !== C || t[17] !== _ || t[18] !== y || t[19] !== x
      ? ((w = (0, H.jsx)(`div`, {
          className: `select-none`,
          children: (0, H.jsx)(P, {
            variant: `beacon`,
            title: u,
            description: _,
            leadingVisual: y,
            primaryAction: x,
            dismissAction: C,
          }),
        })),
        (t[16] = C),
        (t[17] = _),
        (t[18] = y),
        (t[19] = x),
        (t[20] = w))
      : (w = t[20]),
    w
  );
}
var B, V, H, U, W, G, K;
function q() {
  return (q = e(() => {
    ((B = y()),
      g(),
      u(),
      l(),
      (V = C()),
      _(),
      p(),
      t(),
      O(),
      w(),
      c(),
      o(),
      F(),
      N(),
      I(),
      x(),
      E(),
      M(),
      (H = S()),
      (U = 864e5),
      (W = 365 * U),
      (G = k(`use-side-chat-banner-v1`, null)),
      (K = v(n, ({ get: e }) => {
        if (!e(j, `767455704`)) return null;
        let t = e(D);
        return T() == null &&
          t?.toolbar?.pin === `unpinned` &&
          t.sidePanel?.currentWindow === `closed` &&
          t.capabilities?.[`toolbar.pin.read`] === !0 &&
          t.capabilities[`sidePanel.open`] === !0 &&
          t.capabilities[`website.action.request`] === !0
          ? b()
          : null;
      })));
  }))();
}
q();
export { R as UseSideChatBanner };
//# sourceMappingURL=banner-dba48a0d9304.js.map
