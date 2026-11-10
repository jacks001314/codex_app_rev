import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  VDt as r,
  _O as i,
  cO as a,
  fO as o,
  jDt as s,
  lO as c,
  mO as l,
  oO as u,
  sO as d,
  t3 as f,
  vO as p,
  vzt as m,
  xMt as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import { $Et as _, eDt as v } from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let o = (0, b.c)(48),
    {
      initialVoice: s,
      onOpenChange: f,
      onSave: p,
      open: m,
      previewEnabled: h,
      triggerContent: g,
      voices: v,
    } = e,
    y = h === void 0 || h,
    C = r(),
    [w, T] = (0, x.useState)(s.slug),
    [E, D] = (0, x.useState)(!1),
    [O, k] = (0, x.useState)(null),
    A;
  o[0] !== C || o[1] !== E || o[2] !== f || o[3] !== p || o[4] !== w
    ? ((A = async () => {
        E ||
          (D(!0),
          k(null),
          await (async () => {
            try {
              (await p(w), f(!1));
            } catch {
              k(
                C.formatMessage({
                  id: `settings.general.realtimeVoice.saveError`,
                  defaultMessage: `Unable to save voice`,
                  description: `Error shown when saving the realtime voice fails`,
                }),
              );
            }
          })().finally(() => {
            D(!1);
          }));
      }),
      (o[0] = C),
      (o[1] = E),
      (o[2] = f),
      (o[3] = p),
      (o[4] = w),
      (o[5] = A))
    : (A = o[5]);
  let j = A,
    M;
  o[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { "aria-describedby": void 0 }), (o[6] = M))
    : (M = o[6]);
  let N;
  o[7] === C
    ? (N = o[8])
    : ((N = C.formatMessage({
        id: `settings.general.realtimeVoice.dialog.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the voice picker dialog`,
      })),
      (o[7] = C),
      (o[8] = N));
  let P;
  o[9] !== s.slug || o[10] !== E || o[11] !== f
    ? ((P = (e) => {
        E || (e && T(s.slug), k(null), f(e));
      }),
      (o[9] = s.slug),
      (o[10] = E),
      (o[11] = f),
      (o[12] = P))
    : (P = o[12]);
  let F;
  o[13] === j
    ? (F = o[14])
    : ((F = (e) => {
        (e.preventDefault(), j());
      }),
      (o[13] = j),
      (o[14] = F));
  let I;
  o[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, S.jsx)(a, {
        className: `pe-8`,
        title: (0, S.jsx)(i, {
          children: (0, S.jsx)(n, {
            id: `settings.general.realtimeVoice.voice.label`,
            defaultMessage: `Voice`,
            description: `Label for choosing the synthesized voice Codex uses in live two-way spoken conversations`,
          }),
        }),
      })),
      (o[15] = I))
    : (I = o[15]);
  let L = y && m && !E,
    R;
  o[16] !== E || o[17] !== L || o[18] !== w || o[19] !== v
    ? ((R = (0, S.jsx)(_, {
        disabled: E,
        previewEnabled: L,
        promoteSelectedGroup: !0,
        value: w,
        voices: v,
        onVoiceChange: T,
      })),
      (o[16] = E),
      (o[17] = L),
      (o[18] = w),
      (o[19] = v),
      (o[20] = R))
    : (R = o[20]);
  let z;
  o[21] === O
    ? (z = o[22])
    : ((z =
        O == null
          ? null
          : (0, S.jsx)(`p`, {
              role: `alert`,
              className: `mt-2 text-center text-sm text-danger`,
              children: O,
            })),
      (o[21] = O),
      (o[22] = z));
  let B;
  o[23] !== z || o[24] !== R
    ? ((B = (0, S.jsxs)(c, { className: `min-h-0 gap-4`, children: [I, R, z] })),
      (o[23] = z),
      (o[24] = R),
      (o[25] = B))
    : (B = o[25]);
  let V;
  o[26] === f ? (V = o[27]) : ((V = () => f(!1)), (o[26] = f), (o[27] = V));
  let H;
  o[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, S.jsx)(n, {
        id: `settings.general.realtimeVoice.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel changing the realtime voice`,
      })),
      (o[28] = H))
    : (H = o[28]);
  let U;
  o[29] !== E || o[30] !== V
    ? ((U = (0, S.jsx)(t, { color: `secondary`, disabled: E, type: `button`, onClick: V, children: H })),
      (o[29] = E),
      (o[30] = V),
      (o[31] = U))
    : (U = o[31]);
  let W;
  o[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, S.jsx)(n, {
        id: `settings.general.realtimeVoice.dialog.done`,
        defaultMessage: `Done`,
        description: `Button to save the selected realtime voice`,
      })),
      (o[32] = W))
    : (W = o[32]);
  let G;
  o[33] === E
    ? (G = o[34])
    : ((G = (0, S.jsx)(t, { color: `primary`, loading: E, type: `submit`, children: W })),
      (o[33] = E),
      (o[34] = G));
  let K;
  o[35] !== U || o[36] !== G
    ? ((K = (0, S.jsxs)(d, { className: `mt-5`, children: [U, G] })), (o[35] = U), (o[36] = G), (o[37] = K))
    : (K = o[37]);
  let q;
  o[38] !== B || o[39] !== K || o[40] !== F
    ? ((q = (0, S.jsxs)(u, { as: `form`, size: `scrollable`, onSubmit: F, children: [B, K] })),
      (o[38] = B),
      (o[39] = K),
      (o[40] = F),
      (o[41] = q))
    : (q = o[41]);
  let J;
  return (
    o[42] !== m || o[43] !== q || o[44] !== N || o[45] !== P || o[46] !== g
      ? ((J = (0, S.jsx)(l, {
          open: m,
          contentProps: M,
          dialogCloseLabel: N,
          triggerContent: g,
          onOpenChange: P,
          size: `default`,
          children: q,
        })),
        (o[42] = m),
        (o[43] = q),
        (o[44] = N),
        (o[45] = P),
        (o[46] = g),
        (o[47] = J))
      : (J = o[47]),
    J
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = m()), (x = g()), s(), f(), p(), o(), v(), (S = h()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=realtime-voice-picker-dialog-963a67dd16c8.js.map
