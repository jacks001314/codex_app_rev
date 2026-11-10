import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  Cot as ee,
  Ixt as te,
  Pxt as r,
  TO as i,
  VDt as ne,
  _Mt as a,
  cz as o,
  gMt as s,
  hot as re,
  i3 as c,
  jDt as l,
  lot as u,
  r3 as d,
  sz as f,
  t3 as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import { Rn as ae, Un as oe, zn as v } from "./app-primary-fe8a450b3b04.js";
import { n as y, t as b } from "./sound-on-2c226d70676f.js";
var x, S;
function C() {
  return (C = e(() => {
    (_(),
      (x = g()),
      (S = (e) =>
        (0, x.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, x.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496ZM8.25 7.25C7.69772 7.25 7.25 7.69772 7.25 8.25V11.75C7.25 12.3023 7.69772 12.75 8.25 12.75H11.75C12.3023 12.75 12.75 12.3023 12.75 11.75V8.25C12.75 7.69772 12.3023 7.25 11.75 7.25H8.25Z`,
          }),
        })));
  }))();
}
function w(e) {
  let n = (0, T.c)(66),
    {
      className: r,
      buttonColor: a,
      buttonRadius: o,
      buttonSize: c,
      cacheAudio: l,
      children: u,
      errorMessage: p,
      disabled: m,
      hideWhenIdle: h,
      iconClassName: g,
      labels: _,
      menuItem: v,
      onError: y,
      onStatusChange: x,
      onTogglePlayback: C,
      playbackId: w,
      showTooltip: D,
      synthesizeAudio: O,
      visibleLabels: k,
    } = e,
    A = l !== void 0 && l,
    j = m !== void 0 && m,
    se = h !== void 0 && h,
    M = g === void 0 ? `icon-xs` : g,
    ce = v !== void 0 && v,
    N = D === void 0 || D,
    P = te(ee),
    F = ne(),
    I = ie(ae, w);
  if (se && I === `idle`) return null;
  let L, R, z;
  if (
    n[0] !== M ||
    n[1] !== F ||
    n[2] !== _?.loading ||
    n[3] !== _?.play ||
    n[4] !== _?.stop ||
    n[5] !== I ||
    n[6] !== k?.loading
  ) {
    bb0: switch (I) {
      case `idle`: {
        let e;
        (n[10] === M ? (e = n[11]) : ((e = (0, E.jsx)(b, { className: M })), (n[10] = M), (n[11] = e)),
          (L = e));
        let t;
        (n[12] !== F || n[13] !== _?.play
          ? ((t =
              _?.play ??
              F.formatMessage({
                id: `chatgptConversations.readAloud.play`,
                defaultMessage: `Read aloud`,
                description: `Accessible label and tooltip for the button beneath a completed ChatGPT assistant response that plays the response as synthesized speech`,
              })),
            (n[12] = F),
            (n[13] = _?.play),
            (n[14] = t))
          : (t = n[14]),
          (R = t),
          (z = `play`));
        break bb0;
      }
      case `loading`: {
        let e;
        (n[15] === M ? (e = n[16]) : ((e = (0, E.jsx)(d, { className: M })), (n[15] = M), (n[16] = e)),
          (L = e));
        let t;
        (n[17] !== F || n[18] !== _?.loading
          ? ((t =
              _?.loading ??
              F.formatMessage({
                id: `chatgptConversations.readAloud.loading`,
                defaultMessage: `Loading audio…`,
                description: `Accessible label and tooltip for the ChatGPT assistant-response read-aloud button while its synthesized audio is loading`,
              })),
            (n[17] = F),
            (n[18] = _?.loading),
            (n[19] = t))
          : (t = n[19]),
          (R = t),
          (z = k?.loading == null ? `play` : `loading`));
        break bb0;
      }
      case `playing`: {
        let e;
        (n[20] === M ? (e = n[21]) : ((e = (0, E.jsx)(S, { className: M })), (n[20] = M), (n[21] = e)),
          (L = e));
        let t;
        (n[22] !== F || n[23] !== _?.stop
          ? ((t =
              _?.stop ??
              F.formatMessage({
                id: `chatgptConversations.readAloud.stop`,
                defaultMessage: `Stop reading aloud`,
                description: `Accessible label and tooltip for the ChatGPT assistant-response read-aloud button while synthesized speech is playing; selecting it stops playback`,
              })),
            (n[22] = F),
            (n[23] = _?.stop),
            (n[24] = t))
          : (t = n[24]),
          (R = t),
          (z = `stop`));
      }
    }
    ((n[0] = M),
      (n[1] = F),
      (n[2] = _?.loading),
      (n[3] = _?.play),
      (n[4] = _?.stop),
      (n[5] = I),
      (n[6] = k?.loading),
      (n[7] = z),
      (n[8] = L),
      (n[9] = R));
  } else ((z = n[7]), (L = n[8]), (R = n[9]));
  let B;
  n[25] !== A ||
  n[26] !== p ||
  n[27] !== F ||
  n[28] !== y ||
  n[29] !== x ||
  n[30] !== C ||
  n[31] !== w ||
  n[32] !== P ||
  n[33] !== O
    ? ((B = () => {
        if ((C?.(), O == null)) return;
        let e =
          p ??
          F.formatMessage({
            id: `chatgptConversations.readAloud.error`,
            defaultMessage: `Unable to read this response aloud`,
            description: `Error toast shown when Codex cannot synthesize or play a completed ChatGPT assistant response after the user selects Read aloud`,
          });
        oe(
          P,
          y == null
            ? { cacheAudio: A, errorMessage: e, onStatusChange: x, playbackId: w, synthesizeAudio: O }
            : {
                cacheAudio: A,
                onError: (t, n) => {
                  (P.get(re).danger(e, {
                    errorAnalytics: { toastId: `useVoiceReadAloudAudio_onStreamingError` },
                  }),
                    y(t, n));
                },
                onStatusChange: x,
                playbackId: w,
                synthesizeAudio: O,
              },
        );
      }),
      (n[25] = A),
      (n[26] = p),
      (n[27] = F),
      (n[28] = y),
      (n[29] = x),
      (n[30] = C),
      (n[31] = w),
      (n[32] = P),
      (n[33] = O),
      (n[34] = B))
    : (B = n[34]);
  let V = B;
  if (ce) {
    let e = j || I === `loading`,
      t;
    return (
      n[35] !== L || n[36] !== R || n[37] !== e || n[38] !== V
        ? ((t = (0, E.jsx)(i.Item, { disabled: e, leftIcon: L, onSelect: V, children: R })),
          (n[35] = L),
          (n[36] = R),
          (n[37] = e),
          (n[38] = V),
          (n[39] = t))
        : (t = n[39]),
      t
    );
  }
  let H = I === `loading` || void 0,
    le = R,
    U = I === `playing`,
    W = a ?? (u == null && k == null ? `ghost` : `ghostActive`),
    G = u == null && k == null ? void 0 : `content`,
    K = j || I === `loading`,
    q = c ?? (u == null && k == null ? `icon` : `inline`),
    J;
  n[40] === M
    ? (J = n[41])
    : ((J = s(`inline-flex shrink-0 items-center justify-center`, M)), (n[40] = M), (n[41] = J));
  let Y;
  n[42] !== L || n[43] !== J
    ? ((Y = (0, E.jsx)(`span`, { "aria-hidden": `true`, className: J, children: L })),
      (n[42] = L),
      (n[43] = J),
      (n[44] = Y))
    : (Y = n[44]);
  let X;
  n[45] !== z || n[46] !== k
    ? ((X =
        k == null
          ? null
          : (0, E.jsx)(`span`, {
              "aria-hidden": `true`,
              className: `grid`,
              children: [`play`, `loading`, `stop`].map((e) =>
                k[e] == null
                  ? null
                  : (0, E.jsx)(
                      `span`,
                      { className: s(`col-start-1 row-start-1`, e !== z && `invisible`), children: k[e] },
                      e,
                    ),
              ),
            })),
      (n[45] = z),
      (n[46] = k),
      (n[47] = X))
    : (X = n[47]);
  let Z;
  n[48] !== o ||
  n[49] !== u ||
  n[50] !== r ||
  n[51] !== R ||
  n[52] !== U ||
  n[53] !== W ||
  n[54] !== G ||
  n[55] !== K ||
  n[56] !== q ||
  n[57] !== Y ||
  n[58] !== X ||
  n[59] !== H ||
  n[60] !== V
    ? ((Z = (0, E.jsxs)(t, {
        "aria-busy": H,
        "aria-label": le,
        "aria-pressed": U,
        className: r,
        color: W,
        "data-turn-action-width": G,
        disabled: K,
        onClick: V,
        radius: o,
        size: q,
        children: [Y, u, X],
      })),
      (n[48] = o),
      (n[49] = u),
      (n[50] = r),
      (n[51] = R),
      (n[52] = U),
      (n[53] = W),
      (n[54] = G),
      (n[55] = K),
      (n[56] = q),
      (n[57] = Y),
      (n[58] = X),
      (n[59] = H),
      (n[60] = V),
      (n[61] = Z))
    : (Z = n[61]);
  let Q = Z,
    $;
  return (
    n[62] !== Q || n[63] !== R || n[64] !== N
      ? (($ = N ? (0, E.jsx)(f, { tooltipContent: R, children: Q }) : Q),
        (n[62] = Q),
        (n[63] = R),
        (n[64] = N),
        (n[65] = $))
      : ($ = n[65]),
    $
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = m()), a(), r(), l(), p(), n(), c(), u(), o(), y(), C(), h(), v(), (E = g()));
  }))();
}
export { D as n, w as t };
//# sourceMappingURL=chatgpt-audio-playback-button-5a67b98c95c7.js.map
