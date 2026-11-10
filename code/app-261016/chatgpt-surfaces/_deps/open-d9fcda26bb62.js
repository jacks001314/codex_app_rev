import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $B as t,
  $St as n,
  $st as r,
  AV as ee,
  CJ as i,
  FBt as a,
  FK as o,
  HO as s,
  IO as te,
  JO as c,
  LNt as l,
  LO as u,
  PBt as d,
  Qst as ne,
  RO as f,
  TY as p,
  WO as m,
  XOt as h,
  Y3 as g,
  YOt as _,
  Z3 as v,
  ZSt as y,
  ck as b,
  kH as x,
  nB as S,
  nCt as C,
  okt as re,
  qO as ie,
  rB as w,
  rk as ae,
  tk as oe,
  tkt as T,
  vD as se,
  yD as E,
  zO as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as O,
  A5n as ce,
  D5n as k,
  QLn as le,
  iRr as A,
  mYn as ue,
  tyr as de,
} from "./app-initial-ad16eaadf81f.js";
import { Jn as j, Qn as fe, Yn as M, qn as pe } from "./app-primary-3e00728c2a4c.js";
function N(e) {
  let t = (0, he.c)(36),
    { conversationId: r, onClose: ee } = e,
    i = n(ne),
    a = (0, P.useId)(),
    o = C(pe, a),
    [s, te] = (0, P.useState)(`podcast`),
    [c, l] = (0, P.useState)(``),
    [u, d] = (0, P.useState)(null),
    f,
    p;
  (t[0] !== a || t[1] !== i
    ? ((f = () => () => M(i, a)), (p = [i, a]), (t[0] = a), (t[1] = i), (t[2] = f), (t[3] = p))
    : ((f = t[2]), (p = t[3])),
    (0, P.useEffect)(f, p));
  let m;
  t[4] !== s || t[5] !== c || t[6] !== u
    ? ((m = u?.format === s && u.instructions === c.trim()), (t[4] = s), (t[5] = c), (t[6] = u), (t[7] = m))
    : (m = t[7]);
  let h = m,
    g;
  t[8] !== r ||
  t[9] !== s ||
  t[10] !== c ||
  t[11] !== h ||
  t[12] !== a ||
  t[13] !== o ||
  t[14] !== i ||
  t[15] !== u
    ? ((g = function (e) {
        let t = e !== void 0 && e;
        if ((M(i, a), !t && o !== `idle`)) return;
        let n =
          !t && h && u?.blob != null
            ? { ...u, failed: !1 }
            : { id: crypto.randomUUID(), format: s, instructions: c.trim(), blob: null, failed: !1 };
        (d(n),
          fe(i, {
            playbackId: a,
            synthesizeAudio: async (e) =>
              n.blob ??
              A.postResponse(`/conversation/{conversation_id}/audio_summary/synthesize`, {
                parameters: { path: { conversation_id: r } },
                requestBody: { format: n.format, custom_instructions: n.instructions || null },
                signal: e,
              }),
            onAudioBuffered: (e) => d((t) => (t?.id === n.id ? { ...t, blob: e } : t)),
            onError: () => d((e) => (e?.id === n.id ? { ...e, failed: !0 } : e)),
          }));
      }),
      (t[8] = r),
      (t[9] = s),
      (t[10] = c),
      (t[11] = h),
      (t[12] = a),
      (t[13] = o),
      (t[14] = i),
      (t[15] = u),
      (t[16] = g))
    : (g = t[16]);
  let _ = g,
    v;
  t[17] !== ee || t[18] !== a || t[19] !== i
    ? ((v = () => {
        (M(i, a), ee());
      }),
      (t[17] = ee),
      (t[18] = a),
      (t[19] = i),
      (t[20] = v))
    : (v = t[20]);
  let y, b;
  t[21] === _
    ? ((y = t[22]), (b = t[23]))
    : ((y = () => _()), (b = () => _(!0)), (t[21] = _), (t[22] = y), (t[23] = b));
  let x;
  t[24] !== h || t[25] !== u
    ? ((x = () => {
        if (!h || u?.blob == null) return;
        let e = u.blob.type,
          t = `aac`;
        (e.includes(`mpeg`)
          ? (t = `mp3`)
          : e.includes(`ogg`)
            ? (t = `ogg`)
            : e.includes(`wav`) && (t = `wav`),
          ue(u.blob, `chatgpt_audio_summary.${t}`));
      }),
      (t[24] = h),
      (t[25] = u),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== s ||
    t[28] !== c ||
    t[29] !== o ||
    t[30] !== u ||
    t[31] !== v ||
    t[32] !== y ||
    t[33] !== b ||
    t[34] !== x
      ? ((S = (0, F.jsx)(me, {
          format: s,
          instructions: c,
          playbackStatus: o,
          summary: u,
          onClose: v,
          onFormatChange: te,
          onInstructionsChange: l,
          onPlay: y,
          onRegenerate: b,
          onDownload: x,
        })),
        (t[27] = s),
        (t[28] = c),
        (t[29] = o),
        (t[30] = u),
        (t[31] = v),
        (t[32] = y),
        (t[33] = b),
        (t[34] = x),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function me(e) {
  let n = (0, he.c)(80),
    {
      format: r,
      instructions: a,
      playbackStatus: s,
      summary: c,
      onClose: l,
      onFormatChange: d,
      onInstructionsChange: ne,
      onPlay: p,
      onRegenerate: h,
      onDownload: _,
    } = e,
    v = re(),
    y = (0, P.useId)(),
    b;
  n[0] !== r || n[1] !== a || n[2] !== c
    ? ((b = c?.format === r && c.instructions === a.trim()), (n[0] = r), (n[1] = a), (n[2] = c), (n[3] = b))
    : (b = n[3]);
  let C = b,
    w = s === `loading`,
    E = s === `playing`,
    O = I.play;
  w || E
    ? (O = I.stop)
    : C && c?.failed
      ? (O = I.retry)
      : C && c?.blob != null
        ? (O = I.replay)
        : c != null && (O = I.playNew);
  let ce;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = { "aria-describedby": void 0 }), (n[4] = ce))
    : (ce = n[4]);
  let k;
  n[5] === l
    ? (k = n[6])
    : ((k = (e) => {
        e || l();
      }),
      (n[5] = l),
      (n[6] = k));
  let A;
  n[7] === p
    ? (A = n[8])
    : ((A = (e) => {
        (e.preventDefault(), p());
      }),
      (n[7] = p),
      (n[8] = A));
  let ue;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, F.jsx)(f, { title: (0, F.jsx)(ie, { children: (0, F.jsx)(T, { ...I.title }) }) })),
      (n[9] = ue))
    : (ue = n[9]);
  let de;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, F.jsx)(T, { ...I.format })), (n[10] = de))
    : (de = n[10]);
  let j;
  n[11] === y
    ? (j = n[12])
    : ((j = (0, F.jsx)(`span`, { id: y, className: `text-sm font-medium`, children: de })),
      (n[11] = y),
      (n[12] = j));
  let fe;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, F.jsx)(`span`, {
        className: `text-xs text-secondary`,
        children: (0, F.jsx)(T, { ...I.formatDescription }),
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
  n[16] === pe.label ? (N = n[17]) : ((N = (0, F.jsx)(T, { ...pe.label })), (n[16] = pe.label), (n[17] = N));
  let me;
  n[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((me = (0, F.jsx)(x, {})), (n[18] = me)) : (me = n[18]);
  let L;
  n[19] !== y || n[20] !== w || n[21] !== N
    ? ((L = (0, F.jsxs)(g, {
        color: `ghost`,
        size: `medium`,
        type: `button`,
        disabled: w,
        "aria-labelledby": y,
        children: [N, me],
      })),
      (n[19] = y),
      (n[20] = w),
      (n[21] = N),
      (n[22] = L))
    : (L = n[22]);
  let R;
  n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = Object.entries(ge)), (n[23] = R)) : (R = n[23]);
  let z;
  n[24] === d
    ? (z = n[25])
    : ((z = R.map((e) => {
        let [t, n] = e;
        return (0, F.jsx)(
          ae.RadioItem,
          {
            value: t,
            SubText: (0, F.jsx)(T, { ...n.description }),
            onSelect: () => d(n.value),
            children: (0, F.jsx)(T, { ...n.label }),
          },
          t,
        );
      })),
      (n[24] = d),
      (n[25] = z));
  let B;
  n[26] !== r || n[27] !== z
    ? ((B = (0, F.jsx)(ae.RadioGroup, { value: r, children: z })), (n[26] = r), (n[27] = z), (n[28] = B))
    : (B = n[28]);
  let V;
  n[29] !== L || n[30] !== B
    ? ((V = (0, F.jsx)(oe, { align: `end`, triggerButton: L, children: B })),
      (n[29] = L),
      (n[30] = B),
      (n[31] = V))
    : (V = n[31]);
  let H;
  n[32] !== V || n[33] !== M
    ? ((H = (0, F.jsx)(D, {
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
        children: (0, F.jsx)(T, { ...I.instructions }),
      })),
      (n[35] = _e))
    : (_e = n[35]);
  let ve;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, F.jsx)(`span`, {
        className: `text-xs text-secondary select-none`,
        children: (0, F.jsx)(T, { ...I.instructionsDescription }),
      })),
      (n[36] = ve))
    : (ve = n[36]);
  let U;
  n[37] === v ? (U = n[38]) : ((U = v.formatMessage(I.instructionsPlaceholder)), (n[37] = v), (n[38] = U));
  let W;
  n[39] === ne ? (W = n[40]) : ((W = (e) => ne(e.currentTarget.value)), (n[39] = ne), (n[40] = W));
  let G;
  n[41] !== a || n[42] !== w || n[43] !== U || n[44] !== W
    ? ((G = (0, F.jsx)(D, {
        spacing: `large`,
        children: (0, F.jsxs)(`label`, {
          className: `flex flex-col gap-2`,
          children: [
            _e,
            ve,
            (0, F.jsx)(le, {
              name: `audio-summary-instructions`,
              value: a,
              maxLength: 4e3,
              rows: 5,
              disabled: w,
              placeholder: U,
              onChange: W,
            }),
          ],
        }),
      })),
      (n[41] = a),
      (n[42] = w),
      (n[43] = U),
      (n[44] = W),
      (n[45] = G))
    : (G = n[45]);
  let K;
  n[46] !== C || n[47] !== c?.failed
    ? ((K =
        C && c?.failed
          ? (0, F.jsx)(D, {
              children: (0, F.jsx)(se, {
                type: `error`,
                role: `alert`,
                content: (0, F.jsx)(T, { ...I.error }),
              }),
            })
          : null),
      (n[46] = C),
      (n[47] = c?.failed),
      (n[48] = K))
    : (K = n[48]);
  let q;
  n[49] === w
    ? (q = n[50])
    : ((q = w
        ? (0, F.jsx)(D, {
            children: (0, F.jsx)(`span`, {
              className: `text-sm text-secondary`,
              role: `status`,
              children: (0, F.jsx)(T, { ...I.buffering }),
            }),
          })
        : null),
      (n[49] = w),
      (n[50] = q));
  let J;
  n[51] !== v || n[52] !== w || n[53] !== C || n[54] !== _ || n[55] !== h || n[56] !== c?.blob
    ? ((J =
        C && c?.blob != null
          ? (0, F.jsxs)(F.Fragment, {
              children: [
                (0, F.jsx)(S, {
                  tooltipContent: (0, F.jsx)(T, { ...I.regenerate }),
                  children: (0, F.jsx)(g, {
                    color: `ghost`,
                    radius: `full`,
                    size: `iconCircle`,
                    type: `button`,
                    disabled: w,
                    "aria-label": v.formatMessage(I.regenerate),
                    onClick: h,
                    children: (0, F.jsx)(ee, {}),
                  }),
                }),
                (0, F.jsx)(S, {
                  tooltipContent: (0, F.jsx)(T, { ...I.download }),
                  children: (0, F.jsx)(g, {
                    color: `ghost`,
                    radius: `full`,
                    size: `iconCircle`,
                    type: `button`,
                    disabled: w,
                    "aria-label": v.formatMessage(I.download),
                    onClick: _,
                    children: (0, F.jsx)(t, {}),
                  }),
                }),
              ],
            })
          : null),
      (n[51] = v),
      (n[52] = w),
      (n[53] = C),
      (n[54] = _),
      (n[55] = h),
      (n[56] = c?.blob),
      (n[57] = J))
    : (J = n[57]);
  let ye = E || w ? `secondary` : `primary`,
    Y;
  n[58] !== w || n[59] !== E
    ? ((Y = E || w ? (0, F.jsx)(i, {}) : (0, F.jsx)(o, {})), (n[58] = w), (n[59] = E), (n[60] = Y))
    : (Y = n[60]);
  let X;
  n[61] === O ? (X = n[62]) : ((X = (0, F.jsx)(T, { ...O })), (n[61] = O), (n[62] = X));
  let Z;
  n[63] !== ye || n[64] !== Y || n[65] !== X
    ? ((Z = (0, F.jsxs)(g, { color: ye, type: `submit`, children: [Y, X] })),
      (n[63] = ye),
      (n[64] = Y),
      (n[65] = X),
      (n[66] = Z))
    : (Z = n[66]);
  let Q;
  n[67] !== J || n[68] !== Z
    ? ((Q = (0, F.jsx)(D, {
        spacing: `large`,
        children: (0, F.jsxs)(u, { expandSingleButton: !1, children: [J, Z] }),
      })),
      (n[67] = J),
      (n[68] = Z),
      (n[69] = Q))
    : (Q = n[69]);
  let $;
  n[70] !== H || n[71] !== G || n[72] !== K || n[73] !== q || n[74] !== Q || n[75] !== A
    ? (($ = (0, F.jsxs)(te, { as: `form`, size: `viewport`, onSubmit: A, children: [ue, H, G, K, q, Q] })),
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
      ? ((be = (0, F.jsx)(m, {
          open: !0,
          size: `large`,
          variant: `chatgpt`,
          contentProps: ce,
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
    ((he = d()),
      y(),
      (P = a()),
      h(),
      j(),
      de(),
      E(),
      v(),
      c(),
      s(),
      b(),
      p(),
      O(),
      w(),
      r(),
      (F = l()),
      (I = _({
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
  ce(e, N, { conversationId: t });
}
function z() {
  return (z = e(() => {
    (k(), L());
  }))();
}
z();
export { R as openAudioSummaryDialog };
//# sourceMappingURL=open-d9fcda26bb62.js.map
