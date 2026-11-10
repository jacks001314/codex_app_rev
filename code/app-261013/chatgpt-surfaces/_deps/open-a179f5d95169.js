import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  Cq as o,
  GE as s,
  IDt as c,
  Ixt as l,
  NV as ee,
  PB as u,
  Pxt as te,
  RG as d,
  TJ as f,
  TO as p,
  VDt as m,
  WE as ne,
  _O as h,
  cO as g,
  cz as _,
  fO as v,
  iB as y,
  jDt as b,
  lO as x,
  mO as re,
  oO as ie,
  sO as ae,
  sz as oe,
  t3 as se,
  vO as S,
  vzt as C,
  wot as w,
  xMt as T,
  yzt as E,
  zxt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as O,
  EPn as ce,
  G4n as le,
  GGn as k,
  J4n as A,
  Ymr as ue,
  ehr as de,
} from "./app-initial-5851df3f6cb1.js";
import { Bn as j, Rn as fe, Un as M, zn as pe } from "./app-primary-fe8a450b3b04.js";
function N(e) {
  let t = (0, he.c)(36),
    { conversationId: n, onClose: r } = e,
    i = l(a),
    o = (0, P.useId)(),
    s = D(fe, o),
    [c, ee] = (0, P.useState)(`podcast`),
    [u, te] = (0, P.useState)(``),
    [d, f] = (0, P.useState)(null),
    p,
    m;
  (t[0] !== o || t[1] !== i
    ? ((p = () => () => j(i, o)), (m = [i, o]), (t[0] = o), (t[1] = i), (t[2] = p), (t[3] = m))
    : ((p = t[2]), (m = t[3])),
    (0, P.useEffect)(p, m));
  let ne;
  t[4] !== c || t[5] !== u || t[6] !== d
    ? ((ne = d?.format === c && d.instructions === u.trim()), (t[4] = c), (t[5] = u), (t[6] = d), (t[7] = ne))
    : (ne = t[7]);
  let h = ne,
    g;
  t[8] !== n ||
  t[9] !== c ||
  t[10] !== u ||
  t[11] !== h ||
  t[12] !== o ||
  t[13] !== s ||
  t[14] !== i ||
  t[15] !== d
    ? ((g = function (e) {
        let t = e !== void 0 && e;
        if ((j(i, o), !t && s !== `idle`)) return;
        let r =
          !t && h && d?.blob != null
            ? { ...d, failed: !1 }
            : { id: crypto.randomUUID(), format: c, instructions: u.trim(), blob: null, failed: !1 };
        (f(r),
          M(i, {
            playbackId: o,
            synthesizeAudio: async (e) =>
              r.blob ??
              ue.postResponse(`/conversation/{conversation_id}/audio_summary/synthesize`, {
                parameters: { path: { conversation_id: n } },
                requestBody: { format: r.format, custom_instructions: r.instructions || null },
                signal: e,
              }),
            onAudioBuffered: (e) => f((t) => (t?.id === r.id ? { ...t, blob: e } : t)),
            onError: () => f((e) => (e?.id === r.id ? { ...e, failed: !0 } : e)),
          }));
      }),
      (t[8] = n),
      (t[9] = c),
      (t[10] = u),
      (t[11] = h),
      (t[12] = o),
      (t[13] = s),
      (t[14] = i),
      (t[15] = d),
      (t[16] = g))
    : (g = t[16]);
  let _ = g,
    v;
  t[17] !== r || t[18] !== o || t[19] !== i
    ? ((v = () => {
        (j(i, o), r());
      }),
      (t[17] = r),
      (t[18] = o),
      (t[19] = i),
      (t[20] = v))
    : (v = t[20]);
  let y, b;
  t[21] === _
    ? ((y = t[22]), (b = t[23]))
    : ((y = () => _()), (b = () => _(!0)), (t[21] = _), (t[22] = y), (t[23] = b));
  let x;
  t[24] !== h || t[25] !== d
    ? ((x = () => {
        if (!h || d?.blob == null) return;
        let e = d.blob.type,
          t = `aac`;
        (e.includes(`mpeg`)
          ? (t = `mp3`)
          : e.includes(`ogg`)
            ? (t = `ogg`)
            : e.includes(`wav`) && (t = `wav`),
          k(d.blob, `chatgpt_audio_summary.${t}`));
      }),
      (t[24] = h),
      (t[25] = d),
      (t[26] = x))
    : (x = t[26]);
  let re;
  return (
    t[27] !== c ||
    t[28] !== u ||
    t[29] !== s ||
    t[30] !== d ||
    t[31] !== v ||
    t[32] !== y ||
    t[33] !== b ||
    t[34] !== x
      ? ((re = (0, F.jsx)(me, {
          format: c,
          instructions: u,
          playbackStatus: s,
          summary: d,
          onClose: v,
          onFormatChange: ee,
          onInstructionsChange: te,
          onPlay: y,
          onRegenerate: b,
          onDownload: x,
        })),
        (t[27] = c),
        (t[28] = u),
        (t[29] = s),
        (t[30] = d),
        (t[31] = v),
        (t[32] = y),
        (t[33] = b),
        (t[34] = x),
        (t[35] = re))
      : (re = t[35]),
    re
  );
}
function me(e) {
  let n = (0, he.c)(80),
    {
      format: r,
      instructions: a,
      playbackStatus: s,
      summary: l,
      onClose: te,
      onFormatChange: f,
      onInstructionsChange: _,
      onPlay: v,
      onRegenerate: b,
      onDownload: se,
    } = e,
    S = m(),
    C = (0, P.useId)(),
    w;
  n[0] !== r || n[1] !== a || n[2] !== l
    ? ((w = l?.format === r && l.instructions === a.trim()), (n[0] = r), (n[1] = a), (n[2] = l), (n[3] = w))
    : (w = n[3]);
  let T = w,
    E = s === `loading`,
    D = s === `playing`,
    O = I.play;
  E || D
    ? (O = I.stop)
    : T && l?.failed
      ? (O = I.retry)
      : T && l?.blob != null
        ? (O = I.replay)
        : l != null && (O = I.playNew);
  let le;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = { "aria-describedby": void 0 }), (n[4] = le))
    : (le = n[4]);
  let k;
  n[5] === te
    ? (k = n[6])
    : ((k = (e) => {
        e || te();
      }),
      (n[5] = te),
      (n[6] = k));
  let A;
  n[7] === v
    ? (A = n[8])
    : ((A = (e) => {
        (e.preventDefault(), v());
      }),
      (n[7] = v),
      (n[8] = A));
  let ue;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, F.jsx)(g, { title: (0, F.jsx)(h, { children: (0, F.jsx)(c, { ...I.title }) }) })),
      (n[9] = ue))
    : (ue = n[9]);
  let de;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, F.jsx)(c, { ...I.format })), (n[10] = de))
    : (de = n[10]);
  let j;
  n[11] === C
    ? (j = n[12])
    : ((j = (0, F.jsx)(`span`, { id: C, className: `text-sm font-medium`, children: de })),
      (n[11] = C),
      (n[12] = j));
  let fe;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, F.jsx)(`span`, {
        className: `text-xs text-secondary`,
        children: (0, F.jsx)(c, { ...I.formatDescription }),
      })),
      (n[13] = fe))
    : (fe = n[13]);
  let M;
  n[14] === j
    ? (M = n[15])
    : ((M = (0, F.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1 select-none`, children: [j, fe] })),
      (n[14] = j),
      (n[15] = M));
  let pe = ge[r],
    N;
  n[16] === pe.label ? (N = n[17]) : ((N = (0, F.jsx)(c, { ...pe.label })), (n[16] = pe.label), (n[17] = N));
  let me;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, F.jsx)(ee, {})), (n[18] = me))
    : (me = n[18]);
  let L;
  n[19] !== C || n[20] !== E || n[21] !== N
    ? ((L = (0, F.jsxs)(t, {
        color: `ghost`,
        size: `medium`,
        type: `button`,
        disabled: E,
        "aria-labelledby": C,
        children: [N, me],
      })),
      (n[19] = C),
      (n[20] = E),
      (n[21] = N),
      (n[22] = L))
    : (L = n[22]);
  let R;
  n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = Object.entries(ge)), (n[23] = R)) : (R = n[23]);
  let z;
  n[24] === f
    ? (z = n[25])
    : ((z = R.map((e) => {
        let [t, n] = e;
        return (0, F.jsx)(
          p.RadioItem,
          {
            value: t,
            SubText: (0, F.jsx)(c, { ...n.description }),
            onSelect: () => f(n.value),
            children: (0, F.jsx)(c, { ...n.label }),
          },
          t,
        );
      })),
      (n[24] = f),
      (n[25] = z));
  let B;
  n[26] !== r || n[27] !== z
    ? ((B = (0, F.jsx)(p.RadioGroup, { value: r, children: z })), (n[26] = r), (n[27] = z), (n[28] = B))
    : (B = n[28]);
  let V;
  n[29] !== L || n[30] !== B
    ? ((V = (0, F.jsx)(i, { align: `end`, triggerButton: L, children: B })),
      (n[29] = L),
      (n[30] = B),
      (n[31] = V))
    : (V = n[31]);
  let H;
  n[32] !== V || n[33] !== M
    ? ((H = (0, F.jsx)(x, {
        spacing: `large`,
        children: (0, F.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3`,
          children: [M, V],
        }),
      })),
      (n[32] = V),
      (n[33] = M),
      (n[34] = H))
    : (H = n[34]);
  let _e;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, F.jsx)(`span`, {
        className: `text-sm font-medium select-none`,
        children: (0, F.jsx)(c, { ...I.instructions }),
      })),
      (n[35] = _e))
    : (_e = n[35]);
  let ve;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, F.jsx)(`span`, {
        className: `text-xs text-secondary select-none`,
        children: (0, F.jsx)(c, { ...I.instructionsDescription }),
      })),
      (n[36] = ve))
    : (ve = n[36]);
  let U;
  n[37] === S ? (U = n[38]) : ((U = S.formatMessage(I.instructionsPlaceholder)), (n[37] = S), (n[38] = U));
  let W;
  n[39] === _ ? (W = n[40]) : ((W = (e) => _(e.currentTarget.value)), (n[39] = _), (n[40] = W));
  let G;
  n[41] !== a || n[42] !== E || n[43] !== U || n[44] !== W
    ? ((G = (0, F.jsx)(x, {
        spacing: `large`,
        children: (0, F.jsxs)(`label`, {
          className: `flex flex-col gap-2`,
          children: [
            _e,
            ve,
            (0, F.jsx)(ce, {
              name: `audio-summary-instructions`,
              value: a,
              maxLength: 4e3,
              rows: 5,
              disabled: E,
              placeholder: U,
              onChange: W,
            }),
          ],
        }),
      })),
      (n[41] = a),
      (n[42] = E),
      (n[43] = U),
      (n[44] = W),
      (n[45] = G))
    : (G = n[45]);
  let K;
  n[46] !== T || n[47] !== l?.failed
    ? ((K =
        T && l?.failed
          ? (0, F.jsx)(x, {
              children: (0, F.jsx)(ne, {
                type: `error`,
                role: `alert`,
                content: (0, F.jsx)(c, { ...I.error }),
              }),
            })
          : null),
      (n[46] = T),
      (n[47] = l?.failed),
      (n[48] = K))
    : (K = n[48]);
  let q;
  n[49] === E
    ? (q = n[50])
    : ((q = E
        ? (0, F.jsx)(x, {
            children: (0, F.jsx)(`span`, {
              className: `text-sm text-secondary`,
              role: `status`,
              children: (0, F.jsx)(c, { ...I.buffering }),
            }),
          })
        : null),
      (n[49] = E),
      (n[50] = q));
  let J;
  n[51] !== S || n[52] !== E || n[53] !== T || n[54] !== se || n[55] !== b || n[56] !== l?.blob
    ? ((J =
        T && l?.blob != null
          ? (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(oe, {
                  tooltipContent: (0, F.jsx)(c, { ...I.regenerate }),
                  children: (0, F.jsx)(t, {
                    color: `ghost`,
                    radius: `full`,
                    size: `iconCircle`,
                    type: `button`,
                    disabled: E,
                    "aria-label": S.formatMessage(I.regenerate),
                    onClick: b,
                    children: (0, F.jsx)(u, {}),
                  }),
                }),
                (0, F.jsx)(oe, {
                  tooltipContent: (0, F.jsx)(c, { ...I.download }),
                  children: (0, F.jsx)(t, {
                    color: `ghost`,
                    radius: `full`,
                    size: `iconCircle`,
                    type: `button`,
                    disabled: E,
                    "aria-label": S.formatMessage(I.download),
                    onClick: se,
                    children: (0, F.jsx)(y, {}),
                  }),
                }),
              ],
            })
          : null),
      (n[51] = S),
      (n[52] = E),
      (n[53] = T),
      (n[54] = se),
      (n[55] = b),
      (n[56] = l?.blob),
      (n[57] = J))
    : (J = n[57]);
  let ye = D || E ? `secondary` : `primary`,
    Y;
  n[58] !== E || n[59] !== D
    ? ((Y = D || E ? (0, F.jsx)(o, {}) : (0, F.jsx)(d, {})), (n[58] = E), (n[59] = D), (n[60] = Y))
    : (Y = n[60]);
  let X;
  n[61] === O ? (X = n[62]) : ((X = (0, F.jsx)(c, { ...O })), (n[61] = O), (n[62] = X));
  let Z;
  n[63] !== ye || n[64] !== Y || n[65] !== X
    ? ((Z = (0, F.jsxs)(t, { color: ye, type: `submit`, children: [Y, X] })),
      (n[63] = ye),
      (n[64] = Y),
      (n[65] = X),
      (n[66] = Z))
    : (Z = n[66]);
  let Q;
  n[67] !== J || n[68] !== Z
    ? ((Q = (0, F.jsx)(x, {
        spacing: `large`,
        children: (0, F.jsxs)(ae, { expandSingleButton: !1, children: [J, Z] }),
      })),
      (n[67] = J),
      (n[68] = Z),
      (n[69] = Q))
    : (Q = n[69]);
  let $;
  n[70] !== H || n[71] !== G || n[72] !== K || n[73] !== q || n[74] !== Q || n[75] !== A
    ? (($ = (0, F.jsxs)(ie, { as: `form`, size: `viewport`, onSubmit: A, children: [ue, H, G, K, q, Q] })),
      (n[70] = H),
      (n[71] = G),
      (n[72] = K),
      (n[73] = q),
      (n[74] = Q),
      (n[75] = A),
      (n[76] = $))
    : ($ = n[76]);
  let be;
  return (
    n[77] !== k || n[78] !== $
      ? ((be = (0, F.jsx)(re, {
          open: !0,
          size: `large`,
          variant: `chatgpt`,
          contentProps: le,
          onOpenChange: k,
          children: $,
        })),
        (n[77] = k),
        (n[78] = $),
        (n[79] = be))
      : (be = n[79]),
    be
  );
}
var he, P, F, I, ge;
function L() {
  return (L = e(() => {
    ((he = C()),
      te(),
      (P = E()),
      b(),
      pe(),
      de(),
      s(),
      se(),
      S(),
      v(),
      r(),
      f(),
      O(),
      _(),
      w(),
      (F = T()),
      (I = n({
        title: {
          id: `GizmoInformation.audioSummary`,
          defaultMessage: `Audio summary`,
          description: `Title of the dialog for listening to a generated summary of the current chat`,
        },
        format: {
          id: `GizmoInformation.audioSummary.formatLabel`,
          defaultMessage: `Audio format`,
          description: `Label for the summary presentation format picker`,
        },
        formatDescription: {
          id: `GizmoInformation.audioSummary.formatDescription`,
          defaultMessage: `Choose how the summary should be presented`,
          description: `Explains the audio summary format picker`,
        },
        podcast: {
          id: `GizmoInformation.audioSummary.podcast`,
          defaultMessage: `Podcast`,
          description: `Audio summary format: a public-radio style recap`,
        },
        podcastDescription: {
          id: `GizmoInformation.audioSummary.podcastDescription`,
          defaultMessage: `Public-radio style recap`,
          description: `Description of the Podcast summary format`,
        },
        briefing: {
          id: `GizmoInformation.audioSummary.executiveBriefing`,
          defaultMessage: `Executive briefing`,
          description: `Audio summary format focused on decisions and next steps`,
        },
        briefingDescription: {
          id: `GizmoInformation.audioSummary.executiveBriefingDescription`,
          defaultMessage: `Decisions, risks, and next steps`,
          description: `Description of the Executive briefing summary format`,
        },
        study: {
          id: `GizmoInformation.audioSummary.studyGuide`,
          defaultMessage: `Study guide`,
          description: `Audio summary format that teaches the material`,
        },
        studyDescription: {
          id: `GizmoInformation.audioSummary.studyGuideDescription`,
          defaultMessage: `Tutor-led explanation`,
          description: `Description of the Study guide summary format`,
        },
        instructions: {
          id: `GizmoInformation.audioSummary.customInstructions`,
          defaultMessage: `Content instructions`,
          description: `Label for optional instructions that steer the audio summary`,
        },
        instructionsDescription: {
          id: `GizmoInformation.audioSummary.customInstructionsDescription`,
          defaultMessage: `Add preferences for what to emphasize, skip, or adjust`,
          description: `Explains what users can enter in the summary instructions field`,
        },
        instructionsPlaceholder: {
          id: `GizmoInformation.audioSummary.customInstructionsPlaceholder`,
          defaultMessage: `For example, focus on decisions and next steps, keep it casual, or avoid implementation details`,
          description: `Example instructions in the empty audio summary text field`,
        },
        play: {
          id: `GizmoInformation.audioSummary.play`,
          defaultMessage: `Play summary`,
          description: `Generates and plays a summary of the current chat`,
        },
        playNew: {
          id: `GizmoInformation.audioSummary.playNew`,
          defaultMessage: `Play new summary`,
          description: `Generates a new summary using changed instructions or format`,
        },
        replay: {
          id: `GizmoInformation.audioSummary.replay`,
          defaultMessage: `Replay`,
          description: `Plays the completed audio summary again`,
        },
        retry: {
          id: `GizmoInformation.audioSummary.retry`,
          defaultMessage: `Retry`,
          description: `Retries a failed audio summary`,
        },
        stop: {
          id: `GizmoInformation.audioSummary.stop`,
          defaultMessage: `Stop`,
          description: `Stops generating or playing the audio summary`,
        },
        buffering: {
          id: `GizmoInformation.audioSummary.buffering`,
          defaultMessage: `Buffering`,
          description: `Status while the audio summary prepares to play`,
        },
        regenerate: {
          id: `GizmoInformation.audioSummary.regenerate`,
          defaultMessage: `Generate again`,
          description: `Generates a new summary with the same format and instructions`,
        },
        download: {
          id: `GizmoInformation.audioSummary.download`,
          defaultMessage: `Download audio`,
          description: `Downloads the completed audio summary`,
        },
        error: {
          id: `GizmoInformation.audioSummary.playbackError`,
          defaultMessage: `Couldn't play audio summary`,
          description: `Error shown when generating or playing the summary failed`,
        },
      })),
      (ge = {
        podcast: { value: `podcast`, label: I.podcast, description: I.podcastDescription },
        executive_briefing: {
          value: `executive_briefing`,
          label: I.briefing,
          description: I.briefingDescription,
        },
        study_guide: { value: `study_guide`, label: I.study, description: I.studyDescription },
      }));
  }))();
}
function R(e, t) {
  A(e, N, { conversationId: t });
}
function z() {
  return (z = e(() => {
    (le(), L());
  }))();
}
z();
export { R as openAudioSummaryDialog };
//# sourceMappingURL=open-a179f5d95169.js.map
