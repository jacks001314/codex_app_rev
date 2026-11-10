import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  LNt as a,
  LO as o,
  PBt as s,
  RO as c,
  WO as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  okt as p,
  qO as m,
  tkt as h,
  zO as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { BCt as _, VCt as v } from "./app-initial-ad16eaadf81f.js";
function y(e) {
  let t = (0, b.c)(48),
    {
      initialVoice: n,
      onOpenChange: i,
      onSave: a,
      open: s,
      previewEnabled: u,
      triggerContent: f,
      voices: v,
    } = e,
    y = u === void 0 || u,
    C = p(),
    [w, T] = (0, x.useState)(n.slug),
    [E, D] = (0, x.useState)(!1),
    [O, k] = (0, x.useState)(null),
    A;
  t[0] !== C || t[1] !== E || t[2] !== i || t[3] !== a || t[4] !== w
    ? ((A = async () => {
        E ||
          (D(!0),
          k(null),
          await (async () => {
            try {
              (await a(w), i(!1));
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
      (t[0] = C),
      (t[1] = E),
      (t[2] = i),
      (t[3] = a),
      (t[4] = w),
      (t[5] = A))
    : (A = t[5]);
  let j = A,
    M;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { "aria-describedby": void 0 }), (t[6] = M))
    : (M = t[6]);
  let N;
  t[7] === C
    ? (N = t[8])
    : ((N = C.formatMessage({
        id: `settings.general.realtimeVoice.dialog.close`,
        defaultMessage: `Close`,
        description: `Accessible label for closing the voice picker dialog`,
      })),
      (t[7] = C),
      (t[8] = N));
  let P;
  t[9] !== n.slug || t[10] !== E || t[11] !== i
    ? ((P = (e) => {
        E || (e && T(n.slug), k(null), i(e));
      }),
      (t[9] = n.slug),
      (t[10] = E),
      (t[11] = i),
      (t[12] = P))
    : (P = t[12]);
  let F;
  t[13] === j
    ? (F = t[14])
    : ((F = (e) => {
        (e.preventDefault(), j());
      }),
      (t[13] = j),
      (t[14] = F));
  let I;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, S.jsx)(c, {
        className: `pe-8`,
        title: (0, S.jsx)(m, {
          children: (0, S.jsx)(h, {
            id: `settings.general.realtimeVoice.voice.label`,
            defaultMessage: `Voice`,
            description: `Label for choosing the synthesized voice Codex uses in live two-way spoken conversations`,
          }),
        }),
      })),
      (t[15] = I))
    : (I = t[15]);
  let L = y && s && !E,
    R;
  t[16] !== E || t[17] !== L || t[18] !== w || t[19] !== v
    ? ((R = (0, S.jsx)(_, {
        disabled: E,
        previewEnabled: L,
        promoteSelectedGroup: !0,
        value: w,
        voices: v,
        onVoiceChange: T,
      })),
      (t[16] = E),
      (t[17] = L),
      (t[18] = w),
      (t[19] = v),
      (t[20] = R))
    : (R = t[20]);
  let z;
  t[21] === O
    ? (z = t[22])
    : ((z =
        O == null
          ? null
          : (0, S.jsx)(`p`, {
              role: `alert`,
              className: `mt-2 text-center text-sm text-danger`,
              children: O,
            })),
      (t[21] = O),
      (t[22] = z));
  let B;
  t[23] !== z || t[24] !== R
    ? ((B = (0, S.jsxs)(g, { className: `min-h-0 gap-4`, children: [I, R, z] })),
      (t[23] = z),
      (t[24] = R),
      (t[25] = B))
    : (B = t[25]);
  let V;
  t[26] === i ? (V = t[27]) : ((V = () => i(!1)), (t[26] = i), (t[27] = V));
  let H;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, S.jsx)(h, {
        id: `settings.general.realtimeVoice.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel changing the realtime voice`,
      })),
      (t[28] = H))
    : (H = t[28]);
  let U;
  t[29] !== E || t[30] !== V
    ? ((U = (0, S.jsx)(d, { color: `secondary`, disabled: E, type: `button`, onClick: V, children: H })),
      (t[29] = E),
      (t[30] = V),
      (t[31] = U))
    : (U = t[31]);
  let W;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, S.jsx)(h, {
        id: `settings.general.realtimeVoice.dialog.done`,
        defaultMessage: `Done`,
        description: `Button to save the selected realtime voice`,
      })),
      (t[32] = W))
    : (W = t[32]);
  let G;
  t[33] === E
    ? (G = t[34])
    : ((G = (0, S.jsx)(d, { color: `primary`, loading: E, type: `submit`, children: W })),
      (t[33] = E),
      (t[34] = G));
  let K;
  t[35] !== U || t[36] !== G
    ? ((K = (0, S.jsxs)(o, { className: `mt-5`, children: [U, G] })), (t[35] = U), (t[36] = G), (t[37] = K))
    : (K = t[37]);
  let q;
  t[38] !== B || t[39] !== K || t[40] !== F
    ? ((q = (0, S.jsxs)(r, { as: `form`, size: `scrollable`, onSubmit: F, children: [B, K] })),
      (t[38] = B),
      (t[39] = K),
      (t[40] = F),
      (t[41] = q))
    : (q = t[41]);
  let J;
  return (
    t[42] !== s || t[43] !== q || t[44] !== N || t[45] !== P || t[46] !== f
      ? ((J = (0, S.jsx)(l, {
          open: s,
          contentProps: M,
          dialogCloseLabel: N,
          triggerContent: f,
          onOpenChange: P,
          size: `default`,
          children: q,
        })),
        (t[42] = s),
        (t[43] = q),
        (t[44] = N),
        (t[45] = P),
        (t[46] = f),
        (t[47] = J))
      : (J = t[47]),
    J
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = s()), (x = t()), u(), f(), i(), n(), v(), (S = a()));
  }))();
}
export { C as n, y as t };
//# sourceMappingURL=realtime-voice-picker-dialog-abfac402a883.js.map
