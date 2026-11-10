import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as ee,
  IDt as n,
  Ixt as te,
  Pxt as r,
  VDt as ne,
  Vxt as i,
  _O as re,
  fO as a,
  jDt as o,
  mO as ie,
  oO as ae,
  oSt as s,
  t3 as c,
  vO as l,
  vzt as u,
  wot as d,
  xMt as f,
  yzt as p,
  zxt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Et as se,
  GEt as ce,
  JEt as le,
  KEt as m,
  NDr as h,
  OPr as g,
  cDt as _,
  eDt as v,
  iDt as ue,
  jDr as de,
  kPr as fe,
  lDt as pe,
  pOr as y,
  qEt as me,
} from "./app-initial-5851df3f6cb1.js";
import { r as b, t as x } from "./voice-configuration-manager-eab950a76e87.js";
function he(e) {
  let r = (0, ge.c)(68),
    { accountId: a, onBack: o, onClose: s, onComplete: c } = e,
    l = te(ee),
    u = ne(),
    d = oe(fe, `2182392068`),
    f = i(y),
    { data: p, isError: le, refetch: m } = i(de),
    h = i(_e),
    g = p?.voiceMainLanguage,
    _;
  r[0] !== h || r[1] !== g
    ? ((_ = { voice_mode: h, spoken_language: g }), (r[0] = h), (r[1] = g), (r[2] = _))
    : (_ = r[2]);
  let v = p != null && f === a,
    b;
  r[3] === v ? (b = r[4]) : ((b = { enabled: v }), (r[3] = v), (r[4] = b));
  let { data: x, isError: he, refetch: w } = oe(ue, _, b),
    [T, ve] = (0, S.useState)(null),
    [E, ye] = (0, S.useState)(!1),
    [D, be] = (0, S.useState)(!1),
    [O, k] = (0, S.useState)(!1),
    A;
  r[5] !== x || r[6] !== T || r[7] !== p?.voiceName
    ? ((A =
        x?.voices.find((e) => e.slug === T) ??
        x?.voices.find((e) => e.slug === p?.voiceName) ??
        x?.voices.find((e) => e.slug === x.selected) ??
        x?.voices[0]),
      (r[5] = x),
      (r[6] = T),
      (r[7] = p?.voiceName),
      (r[8] = A))
    : (A = r[8]);
  let j = A,
    M = le || he || x?.voices.length === 0,
    N = !M && p != null && j != null;
  if (f !== a) return null;
  let P;
  r[9] !== a || r[10] !== c || r[11] !== N || r[12] !== D || r[13] !== l || r[14] !== j
    ? ((P = async () => {
        if (!D && N && j != null && l.get(y) === a) {
          (be(!0), k(!1));
          try {
            (await pe(l, a, j.slug), l.get(y) === a && c());
          } catch {
            l.get(y) === a && k(!0);
          }
          be(!1);
        }
      }),
      (r[9] = a),
      (r[10] = c),
      (r[11] = N),
      (r[12] = D),
      (r[13] = l),
      (r[14] = j),
      (r[15] = P))
    : (P = r[15]);
  let F = P,
    I;
  r[16] !== s || r[17] !== D
    ? ((I = (e) => {
        !e && !D && s();
      }),
      (r[16] = s),
      (r[17] = D),
      (r[18] = I))
    : (I = r[18]);
  let L = !D,
    R;
  r[19] === u
    ? (R = r[20])
    : ((R = u.formatMessage({
        id: `chatgpt.pepper.personalization.voice.close.button.label`,
        defaultMessage: `Close voice selection`,
        description: `Accessible label for closing teen voice selection without saving the previewed voice`,
      })),
      (r[19] = u),
      (r[20] = R));
  let z = d ? `viewport` : void 0,
    B;
  r[21] === F
    ? (B = r[22])
    : ((B = (e) => {
        (e.preventDefault(), F());
      }),
      (r[21] = F),
      (r[22] = B));
  let V;
  r[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, C.jsx)(re, {
        className: `heading-dialog`,
        children: (0, C.jsx)(n, {
          id: `chatgpt.pepper.personalization.voice.title`,
          defaultMessage: `Choose a voice`,
          description: `Heading in teen onboarding where the user previews and selects an existing account voice`,
        }),
      })),
      (r[23] = V))
    : (V = r[23]);
  let H;
  r[24] !== m || r[25] !== w || r[26] !== M
    ? ((H =
        M &&
        (0, C.jsxs)(`div`, {
          role: `alert`,
          className: `flex flex-col gap-2`,
          children: [
            (0, C.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, C.jsx)(n, {
                id: `chatgpt.pepper.personalization.voice.unavailable.error`,
                defaultMessage: `Voices aren’t available right now. Try again later`,
                description: `Error when saved account voice settings or the available voice catalog cannot load or the catalog is empty`,
              }),
            }),
            (0, C.jsx)(t, {
              type: `button`,
              color: `secondary`,
              onClick: () => {
                Promise.all([m(), w()]);
              },
              children: (0, C.jsx)(n, {
                id: `chatgpt.pepper.personalization.voice.retry`,
                defaultMessage: `Try again`,
                description: `Retries loading the account settings and available voice previews in teen onboarding`,
              }),
            }),
          ],
        })),
      (r[24] = m),
      (r[25] = w),
      (r[26] = M),
      (r[27] = H))
    : (H = r[27]);
  let U;
  r[28] !== N || r[29] !== M
    ? ((U =
        !M &&
        !N &&
        (0, C.jsx)(`p`, {
          role: `status`,
          className: `text-sm text-secondary`,
          children: (0, C.jsx)(n, {
            id: `chatgpt.pepper.personalization.voice.loading.status`,
            defaultMessage: `Loading voices`,
            description: `Loading state while the saved account voice and available previews load in teen onboarding`,
          }),
        })),
      (r[28] = N),
      (r[29] = M),
      (r[30] = U))
    : (U = r[30]);
  let W;
  r[31] !== x ||
  r[32] !== d ||
  r[33] !== h ||
  r[34] !== E ||
  r[35] !== N ||
  r[36] !== D ||
  r[37] !== j ||
  r[38] !== M
    ? ((W =
        !M &&
        N &&
        j != null &&
        x != null &&
        (0, C.jsx)(`div`, {
          inert: D,
          children: d
            ? (0, C.jsxs)(`div`, {
                className: `flex flex-col gap-8`,
                children: [
                  (0, C.jsx)(`div`, {
                    className: `relative mx-auto size-36`,
                    "aria-hidden": `true`,
                    children: (0, C.jsx)(me, {
                      glowEnabled: !1,
                      phase: `active`,
                      placement: `center`,
                      presentation: `preview`,
                      previewAudioLevel: E ? 0.48 : 0.08,
                      voiceActivity: E ? `speaking` : `listening`,
                    }),
                  }),
                  (0, C.jsx)(
                    se,
                    {
                      className: `max-h-80`,
                      disabled: D,
                      playPreviewOnInitialRender: !0,
                      previewEnabled: !D,
                      value: j.slug,
                      voices: x.voices,
                      onPreviewPlaybackChange: ye,
                      onVoiceChange: (e) => {
                        (ve(e), k(!1));
                      },
                    },
                    h,
                  ),
                ],
              })
            : (0, C.jsx)(
                ce,
                {
                  initialVoice: j,
                  voices: x.voices,
                  onVoiceChange: (e) => {
                    (ve(e), k(!1));
                  },
                },
                h,
              ),
        })),
      (r[31] = x),
      (r[32] = d),
      (r[33] = h),
      (r[34] = E),
      (r[35] = N),
      (r[36] = D),
      (r[37] = j),
      (r[38] = M),
      (r[39] = W))
    : (W = r[39]);
  let G;
  r[40] === O
    ? (G = r[41])
    : ((G =
        O &&
        (0, C.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-secondary`,
          children: (0, C.jsx)(n, {
            id: `chatgpt.pepper.personalization.voice.save.error`,
            defaultMessage: `We couldn’t save your voice. Try again`,
            description: `Error after saving the selected account voice fails; the user stays on voice selection and can retry Continue`,
          }),
        })),
      (r[40] = O),
      (r[41] = G));
  let K;
  r[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, C.jsx)(n, {
        id: `chatgpt.pepper.personalization.voice.back.button.label`,
        defaultMessage: `Back to theme color selection`,
        description: `Returns to the previous account accent-color step without saving the previewed voice`,
      })),
      (r[42] = K))
    : (K = r[42]);
  let q;
  r[43] !== o || r[44] !== D
    ? ((q = (0, C.jsx)(t, { type: `button`, color: `secondary`, disabled: D, onClick: o, children: K })),
      (r[43] = o),
      (r[44] = D),
      (r[45] = q))
    : (q = r[45]);
  let xe = !N,
    J;
  r[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, C.jsx)(n, {
        id: `chatgpt.pepper.personalization.voice.continue.button.label`,
        defaultMessage: `Continue`,
        description: `Saves the selected account voice and completes the teen personalization flow`,
      })),
      (r[46] = J))
    : (J = r[46]);
  let Y;
  r[47] !== D || r[48] !== xe
    ? ((Y = (0, C.jsx)(t, { type: `submit`, color: `primary`, disabled: xe, loading: D, children: J })),
      (r[47] = D),
      (r[48] = xe),
      (r[49] = Y))
    : (Y = r[49]);
  let X;
  r[50] !== q || r[51] !== Y
    ? ((X = (0, C.jsxs)(`div`, {
        className: `flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center`,
        children: [q, Y],
      })),
      (r[50] = q),
      (r[51] = Y),
      (r[52] = X))
    : (X = r[52]);
  let Z;
  r[53] !== H || r[54] !== U || r[55] !== W || r[56] !== G || r[57] !== X
    ? ((Z = (0, C.jsxs)(`div`, { className: `flex flex-col gap-6 p-6`, children: [V, H, U, W, G, X] })),
      (r[53] = H),
      (r[54] = U),
      (r[55] = W),
      (r[56] = G),
      (r[57] = X),
      (r[58] = Z))
    : (Z = r[58]);
  let Q;
  r[59] !== z || r[60] !== B || r[61] !== Z
    ? ((Q = (0, C.jsx)(ae, {
        className: `select-none`,
        as: `form`,
        size: z,
        variant: `chatgpt`,
        onSubmit: B,
        children: Z,
      })),
      (r[59] = z),
      (r[60] = B),
      (r[61] = Z),
      (r[62] = Q))
    : (Q = r[62]);
  let $;
  return (
    r[63] !== Q || r[64] !== I || r[65] !== L || r[66] !== R
      ? (($ = (0, C.jsx)(ie, {
          open: !0,
          onOpenChange: I,
          size: `beacon`,
          variant: `chatgpt`,
          shouldIgnoreClickOutside: !0,
          showDialogClose: L,
          dialogCloseLabel: R,
          children: Q,
        })),
        (r[63] = Q),
        (r[64] = I),
        (r[65] = L),
        (r[66] = R),
        (r[67] = $))
      : ($ = r[67]),
    $
  );
}
var ge, S, C, _e;
function w() {
  return (w = e(() => {
    ((ge = u()),
      r(),
      (S = p()),
      o(),
      h(),
      c(),
      l(),
      a(),
      le(),
      _(),
      v(),
      m(),
      d(),
      g(),
      x(),
      (C = f()),
      (_e = s(ee, ({ scope: e }) => b.policyResolvedVoice$(e) ?? b.legacyResolvedVoice$(e))));
  }))();
}
w();
export { he as VoicePersonalizationDialog };
//# sourceMappingURL=voice-personalization-dialog-9e43697efa16.js.map
