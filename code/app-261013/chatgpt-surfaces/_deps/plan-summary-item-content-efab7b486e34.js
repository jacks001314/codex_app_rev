import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $x as n,
  ADt as r,
  Cot as i,
  IDt as a,
  Ixt as o,
  Kw as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  Sj as d,
  VDt as f,
  Vxt as p,
  XD as m,
  YD as h,
  _Mt as g,
  _wt as _,
  bx as v,
  cz as y,
  eS as ee,
  gMt as b,
  gwt as x,
  iO as S,
  jDt as te,
  qw as ne,
  rO as re,
  sj as ie,
  sz as ae,
  t3 as oe,
  vzt as se,
  wot as ce,
  xMt as C,
  yx as le,
  yzt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as ue,
  G4n as de,
  I3n as E,
  J4n as D,
  U4n as fe,
  XDr as O,
  XO as pe,
  YO as me,
  Yk as he,
  dwn as ge,
  eDr as _e,
  eOr as ve,
  gwr as ye,
  hwn as be,
  l5n as xe,
  nDr as Se,
  qk as Ce,
  r5n as k,
  tDn as A,
  uDn as we,
  v8n as Te,
  w3n as Ee,
} from "./app-initial-5851df3f6cb1.js";
import { al as De, bm as Oe, il as ke, xm as Ae } from "./app-primary-fe8a450b3b04.js";
import { n as je, t as Me } from "./feedback-legal-notice-b9fb88ae9820.js";
import { i as Ne, n as Pe, r as Fe } from "./surface-3fad834862de.js";
import { a as Ie, r as Le } from "./editable-plan-tab-44cf711b8cad.js";
import { n as j, t as M } from "./plan-side-panel-6b6e2db5d5fd.js";
import { n as Re, t as N } from "./feedback-form-dialog-41043368dc8d.js";
import { n as P, r as F } from "./response-rating-control-b69031a6da48.js";
import { n as I, t as ze } from "./codex-thread-report-dialog-d2759293ec30.js";
function Be(e) {
  let t = (0, z.c)(15),
    { hasArtifacts: n, reportEntityType: r, renderControl: a, threadId: s, turnId: c } = e,
    l = n !== void 0 && n,
    u = r === void 0 ? `thread` : r,
    d = o(i),
    [f, m] = (0, B.useState)(null),
    h = p(ve),
    g = Se(`584954669`),
    _;
  if (
    t[0] !== l ||
    t[1] !== h ||
    t[2] !== a ||
    t[3] !== u ||
    t[4] !== g ||
    t[5] !== d ||
    t[6] !== f ||
    t[7] !== s ||
    t[8] !== c
  ) {
    let e = (e, t, r) => {
        let i = t === void 0 ? `` : t,
          a = l ? G[e] : Ve[e],
          o = g ? a : a.filter(R);
        D(d, N, {
          belowFreeformContent: (0, V.jsx)(Me, {}),
          freeformFeedbackRequired: !1,
          initialDetails: i,
          initialSelectedOptionId: r,
          onOptionSelect: (t) => {
            let { details: r, selectedOptionId: i } = t;
            i === H && (fe(d, N), n(r, e));
          },
          onSubmit: (t) => {
            let { details: r, selectedOptionId: i } = t;
            if (i === H) {
              n(r, e);
              return;
            }
            return h.submitCodexAnalyticsEvent?.({
              action: `submit_turn_feedback`,
              eventKind: `action`,
              threadId: s,
              turnId: c,
              metadata: { details: r, has_artifacts: l, selected_option: i },
            });
          },
          options: o,
        });
      },
      n = (t, n) => {
        D(d, ze, {
          onBackToFeedback: () => {
            e(n, t, H);
          },
          reportEntityType: u,
          threadId: s,
        });
      },
      r;
    t[10] !== h || t[11] !== d || t[12] !== s || t[13] !== c
      ? ((r = (e) => {
          if ((m(e), e == null)) return;
          let t = d.get(k, s);
          h.submitCodexAnalyticsEvent?.({
            eventKind: `turn_rating`,
            threadId: s,
            turnId: c,
            sessionId: t === s && d.get(xe, s) != null ? null : t,
            rating: e,
          });
        }),
        (t[10] = h),
        (t[11] = d),
        (t[12] = s),
        (t[13] = c),
        (t[14] = r))
      : (r = t[14]);
    let i = r,
      o = {
        rating: f == null ? null : U[f],
        onRate: (t) => {
          let n = t === `thumbsUp` ? `thumbs_up` : `thumbs_down`,
            r = f === n ? null : n;
          (i(r), r != null && e(r));
        },
        shouldRestoreFocus: L,
      };
    ((_ = a == null ? (0, V.jsx)(P, { ...o }) : a(o, (e) => i(e === `thumbsUp` ? `thumbs_up` : null))),
      (t[0] = l),
      (t[1] = h),
      (t[2] = a),
      (t[3] = u),
      (t[4] = g),
      (t[5] = d),
      (t[6] = f),
      (t[7] = s),
      (t[8] = c),
      (t[9] = _));
  } else _ = t[9];
  return _;
}
function L(e) {
  return e == null;
}
function R(e) {
  return e.id !== H;
}
var z, B, V, H, U, W, G, Ve;
function K() {
  return (K = e(() => {
    ((z = se()),
      u(),
      (B = w()),
      te(),
      Te(),
      de(),
      Re(),
      je(),
      F(),
      O(),
      ce(),
      _e(),
      I(),
      (V = C()),
      (H = `safety_or_legal_concern`),
      (U = { thumbs_down: `thumbsDown`, thumbs_up: `thumbsUp` }),
      (W = r({
        wrongPresentationLength: {
          id: `turnRatingControls.artifactFeedback.wrongPresentationLength`,
          defaultMessage: `Wrong presentation length`,
          description: `Feedback option for an artifact with the wrong presentation length`,
        },
        poorWriting: {
          id: `turnRatingControls.artifactFeedback.poorWriting`,
          defaultMessage: `Poor writing`,
          description: `Feedback option for an artifact with poor writing`,
        },
        poorStyleFormatOrVisuals: {
          id: `turnRatingControls.artifactFeedback.poorStyleFormatOrVisuals`,
          defaultMessage: `Poor style, format, or visuals`,
          description: `Feedback option for an artifact with poor style, formatting, or visuals`,
        },
        wrongTopicsOrSubtopics: {
          id: `turnRatingControls.artifactFeedback.wrongTopicsOrSubtopics`,
          defaultMessage: `Wrong topics or subtopics`,
          description: `Feedback option for an artifact with incorrect topic coverage`,
        },
        didntFollowMyInstructions: {
          id: `turnRatingControls.artifactFeedback.didntFollowMyInstructions`,
          defaultMessage: `Didn't follow my instructions`,
          description: `Feedback option for an artifact that missed instructions`,
        },
        didntFollowMyTemplate: {
          id: `turnRatingControls.artifactFeedback.didntFollowMyTemplate`,
          defaultMessage: `Didn't follow my template`,
          description: `Feedback option for an artifact that missed the template`,
        },
        incorrectContent: {
          id: `turnRatingControls.artifactFeedback.incorrectContent`,
          defaultMessage: `Incorrect content`,
          description: `Feedback option for an artifact with incorrect content`,
        },
        goodContent: {
          id: `turnRatingControls.artifactFeedback.goodContent`,
          defaultMessage: `Good content`,
          description: `Positive feedback option for artifact content`,
        },
        goodWritingQuality: {
          id: `turnRatingControls.artifactFeedback.goodWritingQuality`,
          defaultMessage: `Good writing quality`,
          description: `Positive feedback option for artifact writing quality`,
        },
        goodStyleFormatOrVisuals: {
          id: `turnRatingControls.artifactFeedback.goodStyleFormatOrVisuals`,
          defaultMessage: `Good style, format, or visuals`,
          description: `Positive feedback option for artifact style, formatting, or visuals`,
        },
        followedMyInstructionsWell: {
          id: `turnRatingControls.artifactFeedback.followedMyInstructionsWell`,
          defaultMessage: `Followed my instructions well`,
          description: `Positive feedback option for following instructions`,
        },
        generatedQuickly: {
          id: `turnRatingControls.artifactFeedback.generatedQuickly`,
          defaultMessage: `Generated quickly`,
          description: `Positive feedback option for fast artifact generation`,
        },
        solvedMyTask: {
          id: `turnRatingControls.feedback.solvedMyTask`,
          defaultMessage: `Solved my task`,
          description: `Positive feedback option for a turn that solved the task`,
        },
        followedMyInstructions: {
          id: `turnRatingControls.feedback.followedMyInstructions`,
          defaultMessage: `Followed my instructions`,
          description: `Positive feedback option for following instructions`,
        },
        goodCodeOrOutputQuality: {
          id: `turnRatingControls.feedback.goodCodeOrOutputQuality`,
          defaultMessage: `Good code / output quality`,
          description: `Positive feedback option for good code or output quality`,
        },
        fastAndEfficient: {
          id: `turnRatingControls.feedback.fastAndEfficient`,
          defaultMessage: `Fast and efficient`,
          description: `Positive feedback option for fast and efficient work`,
        },
        usefulAutonomy: {
          id: `turnRatingControls.feedback.usefulAutonomy`,
          defaultMessage: `Useful autonomy`,
          description: `Positive feedback option for useful autonomous behavior`,
        },
        incorrectOrIncomplete: {
          id: `turnRatingControls.feedback.incorrectOrIncomplete`,
          defaultMessage: `Incorrect or incomplete`,
          description: `Negative feedback option for incorrect or incomplete work`,
        },
        offTrackOrWrongScope: {
          id: `turnRatingControls.feedback.offTrackOrWrongScope`,
          defaultMessage: `Off track / wrong scope`,
          description: `Negative feedback option for going off track or out of scope`,
        },
        lostContext: {
          id: `turnRatingControls.feedback.lostContext`,
          defaultMessage: `Lost context`,
          description: `Negative feedback option for losing context`,
        },
        slowOrBuggy: {
          id: `turnRatingControls.feedback.slowOrBuggy`,
          defaultMessage: `Slow or buggy`,
          description: `Negative feedback option for slow or buggy behavior`,
        },
        safetyOrLegalConcern: {
          id: `turnRatingControls.feedback.safetyOrLegalConcern`,
          defaultMessage: `Safety or legal concern`,
          description: `Negative feedback option that opens a safety or legal report flow`,
        },
        other: {
          id: `turnRatingControls.feedback.other`,
          defaultMessage: `Other`,
          description: `Feedback option for other feedback`,
        },
      })),
      (G = {
        thumbs_down: [
          { id: `wrong_presentation_length`, label: W.wrongPresentationLength },
          { id: `poor_writing`, label: W.poorWriting },
          { id: `poor_style_format_or_visuals`, label: W.poorStyleFormatOrVisuals },
          { id: `wrong_topics_or_subtopics`, label: W.wrongTopicsOrSubtopics },
          { id: `didnt_follow_my_instructions`, label: W.didntFollowMyInstructions },
          { id: `didnt_follow_my_template`, label: W.didntFollowMyTemplate },
          { id: `incorrect_content`, label: W.incorrectContent },
          { id: H, label: W.safetyOrLegalConcern },
        ],
        thumbs_up: [
          { id: `good_content`, label: W.goodContent },
          { id: `good_writing_quality`, label: W.goodWritingQuality },
          { id: `good_style_format_or_visuals`, label: W.goodStyleFormatOrVisuals },
          { id: `followed_my_instructions_well`, label: W.followedMyInstructionsWell },
          { id: `generated_quickly`, label: W.generatedQuickly },
        ],
      }),
      (Ve = {
        thumbs_down: [
          { id: `incorrect_or_incomplete`, label: W.incorrectOrIncomplete },
          { id: `didnt_follow_my_instructions`, label: W.didntFollowMyInstructions },
          { id: `off_track_or_wrong_scope`, label: W.offTrackOrWrongScope },
          { id: `lost_context`, label: W.lostContext },
          { id: `slow_or_buggy`, label: W.slowOrBuggy },
          { id: H, label: W.safetyOrLegalConcern },
          { id: `other`, label: W.other },
        ],
        thumbs_up: [
          { id: `solved_my_task`, label: W.solvedMyTask },
          { id: `followed_my_instructions`, label: W.followedMyInstructions },
          { id: `good_code_or_output_quality`, label: W.goodCodeOrOutputQuality },
          { id: `fast_and_efficient`, label: W.fastAndEfficient },
          { id: `useful_autonomy`, label: W.usefulAutonomy },
          { id: `other`, label: W.other },
        ],
      }));
  }))();
}
var q, He;
function J() {
  return (J = e(() => {
    (w(),
      (q = C()),
      (He = (e) =>
        (0, q.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, q.jsx)(`path`, {
            d: `M7.33496 16V12.665H4C3.63273 12.665 3.33496 12.3673 3.33496 12C3.33496 11.6327 3.63273 11.335 4 11.335H8C8.36727 11.335 8.66504 11.6327 8.66504 12V16C8.66504 16.3673 8.36727 16.665 8 16.665C7.63273 16.665 7.33496 16.3673 7.33496 16ZM11.335 4C11.335 3.63273 11.6327 3.33496 12 3.33496C12.3673 3.33496 12.665 3.63273 12.665 4V7.33496H16L16.1338 7.34863C16.4369 7.41057 16.665 7.67857 16.665 8C16.665 8.32143 16.4369 8.58943 16.1338 8.65137L16 8.66504H12C11.6327 8.66504 11.335 8.36727 11.335 8V4Z`,
          }),
        })));
  }))();
}
function Y(e) {
  let t = (0, Ge.c)(4);
  if (e.showOpenButton === !1) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, Z.jsx)(X, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  let n;
  return (
    t[2] === e
      ? (n = t[3])
      : ((n = (0, Z.jsxs)(Z.Fragment, {
          children: [(0, Z.jsx)(Z.Fragment, { children: (0, Z.jsx)(Ue, { ...e }) }), null],
        })),
        (t[2] = e),
        (t[3] = n)),
    n
  );
}
function Ue(e) {
  let t = (0, Ge.c)(25),
    n = o(ye),
    r = p(be.activeTab$),
    i = p(Le),
    a = p(Ee),
    s = (0, Ke.useId)(),
    c = e.turnId ?? s,
    l = p(we),
    u = T(Ie, `${l}:${e.conversationId}:${c}`),
    d = f(),
    m;
  t[0] === d
    ? (m = t[1])
    : ((m = d.formatMessage({
        id: `localConversation.planSummary.title`,
        defaultMessage: `Plan`,
        description: `Title for the plan summary card header`,
      })),
      (t[0] = d),
      (t[1] = m));
  let h = m,
    g;
  t[2] !== u ||
  t[3] !== c ||
  t[4] !== e.conversationId ||
  t[5] !== e.cwd ||
  t[6] !== e.hideCodeBlocks ||
  t[7] !== e.item.content ||
  t[8] !== e.turnId ||
  t[9] !== n ||
  t[10] !== h
    ? ((g = () => {
        j(n, {
          content: u ?? e.item.content,
          conversationId: e.conversationId,
          cwd: e.cwd,
          hideCodeBlocks: e.hideCodeBlocks,
          key: c,
          planKey: e.turnId,
          title: h,
        });
      }),
      (t[2] = u),
      (t[3] = c),
      (t[4] = e.conversationId),
      (t[5] = e.cwd),
      (t[6] = e.hideCodeBlocks),
      (t[7] = e.item.content),
      (t[8] = e.turnId),
      (t[9] = n),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let _ = g,
    v = e.item.completed && a && i?.key === c && r?.tabId === i.tabId,
    y;
  t[12] !== r || t[13] !== v || t[14] !== _ || t[15] !== n
    ? ((y = () => {
        if (v && r != null) {
          be.closeTab(n, r.tabId);
          return;
        }
        _();
      }),
      (t[12] = r),
      (t[13] = v),
      (t[14] = _),
      (t[15] = n),
      (t[16] = y))
    : (y = t[16]);
  let ee = y,
    b;
  t[17] !== u || t[18] !== e.item
    ? ((b = u == null ? e.item : { ...e.item, content: u }), (t[17] = u), (t[18] = e.item), (t[19] = b))
    : (b = t[19]);
  let x = e.item.completed ? ee : void 0,
    S;
  return (
    t[20] !== v || t[21] !== e || t[22] !== b || t[23] !== x
      ? ((S = (0, Z.jsx)(X, {
          ...e,
          item: b,
          isThreadPreview: !0,
          isThreadPreviewCollapsed: v,
          onOpenInSidePanel: x,
        })),
        (t[20] = v),
        (t[21] = e),
        (t[22] = b),
        (t[23] = x),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
function X(e) {
  let r = (0, Ge.c)(106),
    {
      item: i,
      conversationId: o,
      cwd: s,
      hideCodeBlocks: l,
      defaultCollapsed: u,
      hasArtifacts: d,
      reportEntityType: m,
      showOpenButton: g,
      turnId: v,
      isThreadPreview: y,
      isThreadPreviewCollapsed: ee,
      onOpenInSidePanel: x,
    } = e,
    S = l !== void 0 && l,
    te = u !== void 0 && u,
    oe = d !== void 0 && d,
    se = m === void 0 ? `thread` : m,
    ce = g === void 0 || g,
    C = y !== void 0 && y,
    w = ee !== void 0 && ee,
    [T, ue] = (0, Ke.useState)(te),
    de = p(we),
    E = f(),
    D = p(ve),
    fe = p(pe);
  ce && i.completed;
  let O;
  r[0] !== i.completed || r[1] !== i.content
    ? ((O = i.completed && i.content.trim().length > 0), (r[0] = i.completed), (r[1] = i.content), (r[2] = O))
    : (O = r[2]);
  let me = O,
    he;
  r[3] !== i.completed || r[4] !== i.content
    ? ((he = i.completed && i.content.trim().length > 0),
      (r[3] = i.completed),
      (r[4] = i.content),
      (r[5] = he))
    : (he = r[5]);
  let ge = he,
    _e = me && !0,
    ye = ge && !0,
    be = fe && v != null && D.submitCodexAnalyticsEvent != null && !0,
    xe;
  r[6] === E
    ? (xe = r[7])
    : ((xe = E.formatMessage({
        id: `localConversation.planSummary.download`,
        defaultMessage: `Download plan`,
        description: `Tooltip text for button that downloads the plan markdown`,
      })),
      (r[6] = E),
      (r[7] = xe));
  let Se = xe,
    k;
  r[8] === E
    ? (k = r[9])
    : ((k = E.formatMessage({
        id: `localConversation.planSummary.openInSidePanel`,
        defaultMessage: `Open plan in side panel`,
        description: `Tooltip text for button that opens the plan in the side panel`,
      })),
      (r[8] = E),
      (r[9] = k));
  let A = k,
    Te;
  r[10] === E
    ? (Te = r[11])
    : ((Te = E.formatMessage({
        id: `localConversation.planSummary.closeSidePanel`,
        defaultMessage: `Close plan side panel`,
        description: `Accessible label for the collapsed plan card that closes the plan side panel`,
      })),
      (r[10] = E),
      (r[11] = Te));
  let Ee = Te,
    De;
  r[12] !== E || r[13] !== T
    ? ((De = T
        ? E.formatMessage({
            id: `localConversation.planSummary.expand`,
            defaultMessage: `Expand plan summary`,
            description: `Aria label for button that expands a collapsed plan summary`,
          })
        : E.formatMessage({
            id: `localConversation.planSummary.collapse`,
            defaultMessage: `Collapse plan summary`,
            description: `Aria label for button that collapses the plan summary content`,
          })),
      (r[12] = E),
      (r[13] = T),
      (r[14] = De))
    : (De = r[14]);
  let Ae = De,
    je;
  r[15] === i.content
    ? (je = r[16])
    : ((je = () => {
        let e = new Blob([i.content], { type: `text/markdown;charset=utf-8` }),
          t = URL.createObjectURL(e),
          n = document.createElement(`a`);
        ((n.href = t), (n.download = Je), n.click(), URL.revokeObjectURL(t));
      }),
      (r[15] = i.content),
      (r[16] = je));
  let Me = je,
    Ne;
  r[17] !== o || r[18] !== i.content || r[19] !== D || r[20] !== v
    ? ((Ne = (e) => {
        (v != null &&
          D.submitCodexAnalyticsEvent?.({
            action: `copy`,
            eventKind: `action`,
            metadata: { surface: `plan_summary` },
            threadId: o,
            turnId: v,
          }),
          re(i.content, e));
      }),
      (r[17] = o),
      (r[18] = i.content),
      (r[19] = D),
      (r[20] = v),
      (r[21] = Ne))
    : (Ne = r[21]);
  let Ie = Ne,
    Le = C
      ? `max-h-[200px] cursor-default border border-default !bg-surface-elevated-secondary/50 select-none extension:!bg-background-primary-soft/50`
      : void 0,
    j;
  r[22] !== C || r[23] !== w || r[24] !== x
    ? ((j =
        C && !w && x != null
          ? (0, Z.jsx)(`button`, {
              type: `button`,
              "aria-hidden": !0,
              tabIndex: -1,
              className: `absolute inset-0 z-10 cursor-interaction`,
              onClick: x,
            })
          : null),
      (r[22] = C),
      (r[23] = w),
      (r[24] = x),
      (r[25] = j))
    : (j = r[25]);
  let M;
  r[26] !== Ee || r[27] !== w || r[28] !== x
    ? ((M =
        w && x != null
          ? (0, Z.jsx)(`button`, {
              type: `button`,
              "aria-label": Ee,
              className: `absolute inset-0 z-10 flex cursor-interaction items-center justify-end px-3 text-tertiary focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
              onClick: x,
              children: (0, Z.jsx)(`span`, {
                className: `flex size-6 items-center justify-center rounded-full hover:bg-primary-ghost-hover electron:rounded-md`,
                children: (0, Z.jsx)(He, { className: `icon-sm`, "aria-hidden": !0 }),
              }),
            })
          : null),
      (r[26] = Ee),
      (r[27] = w),
      (r[28] = x),
      (r[29] = M))
    : (M = r[29]);
  let Re = C ? `inline-flex items-center gap-2 font-normal text-tertiary` : `font-semibold text-default`,
    N;
  r[30] === Re ? (N = r[31]) : ((N = b(`text-base leading-tight`, Re)), (r[30] = Re), (r[31] = N));
  let P;
  r[32] === C
    ? (P = r[33])
    : ((P = C ? (0, Z.jsx)(c, { className: `shrink-0`, asset: ne }) : null), (r[32] = C), (r[33] = P));
  let F;
  r[34] === i.completed
    ? (F = r[35])
    : ((F = i.completed
        ? (0, Z.jsx)(a, {
            id: `localConversation.planSummary.title`,
            defaultMessage: `Plan`,
            description: `Title for the plan summary card header`,
          })
        : (0, Z.jsx)(Ce, {
            children: (0, Z.jsx)(a, {
              id: `localConversation.planSummary.titleWriting`,
              defaultMessage: `Writing plan`,
              description: `Title for the plan summary card header while the plan is still being written`,
            }),
          })),
      (r[34] = i.completed),
      (r[35] = F));
  let I;
  r[36] !== N || r[37] !== P || r[38] !== F
    ? ((I = (0, Z.jsxs)(`span`, { className: N, children: [P, F] })),
      (r[36] = N),
      (r[37] = P),
      (r[38] = F),
      (r[39] = I))
    : (I = r[39]);
  let ze = w && `hidden`,
    L;
  r[40] === ze
    ? (L = r[41])
    : ((L = b(`relative z-20 flex items-center gap-1`, ze)), (r[40] = ze), (r[41] = L));
  let R;
  r[42] !== Se || r[43] !== Me || r[44] !== ye
    ? ((R = ye
        ? (0, Z.jsx)(ae, {
            tooltipContent: Se,
            children: (0, Z.jsx)(t, {
              color: `ghost`,
              size: `icon`,
              "aria-label": Se,
              onClick: Me,
              children: (0, Z.jsx)(n, { className: `icon-2xs` }),
            }),
          })
        : null),
      (r[42] = Se),
      (r[43] = Me),
      (r[44] = ye),
      (r[45] = R))
    : (R = r[45]);
  let z;
  r[46] !== Ie || r[47] !== _e
    ? ((z = _e ? (0, Z.jsx)(le, { iconOnly: !0, iconClassName: `icon-2xs`, onCopy: Ie }) : null),
      (r[46] = Ie),
      (r[47] = _e),
      (r[48] = z))
    : (z = r[48]);
  let B;
  r[49] !== o || r[50] !== oe || r[51] !== se || r[52] !== be || r[53] !== v
    ? ((B = be ? (0, Z.jsx)(Be, { hasArtifacts: oe, reportEntityType: se, threadId: o, turnId: v }) : null),
      (r[49] = o),
      (r[50] = oe),
      (r[51] = se),
      (r[52] = be),
      (r[53] = v),
      (r[54] = B))
    : (B = r[54]);
  let V;
  r[55] !== x || r[56] !== A
    ? ((V =
        x == null
          ? null
          : (0, Z.jsx)(ae, {
              tooltipContent: A,
              children: (0, Z.jsx)(t, {
                color: `ghost`,
                size: `icon`,
                "aria-label": A,
                onClick: x,
                children: (0, Z.jsx)(Oe, { className: `icon-2xs` }),
              }),
            })),
      (r[55] = x),
      (r[56] = A),
      (r[57] = V))
    : (V = r[57]);
  let H;
  r[58] !== Ae || r[59] !== T || r[60] !== C
    ? ((H = C
        ? null
        : (0, Z.jsx)(ae, {
            tooltipContent: T
              ? (0, Z.jsx)(a, {
                  id: `localConversation.planSummary.expandTooltip`,
                  defaultMessage: `Expand`,
                  description: `Tooltip text for button that expands a collapsed plan summary`,
                })
              : (0, Z.jsx)(a, {
                  id: `localConversation.planSummary.collapseTooltip`,
                  defaultMessage: `Collapse`,
                  description: `Tooltip text for button that collapses the plan summary content`,
                }),
            children: (0, Z.jsx)(t, {
              color: `ghost`,
              size: `icon`,
              "aria-label": Ae,
              onClick: () => {
                ue(We);
              },
              children: (0, Z.jsx)(h, {
                className: b(`icon-2xs transition-transform`, T ? `rotate-180` : `rotate-0`),
              }),
            }),
          })),
      (r[58] = Ae),
      (r[59] = T),
      (r[60] = C),
      (r[61] = H))
    : (H = r[61]);
  let U;
  r[62] !== w ||
  r[63] !== L ||
  r[64] !== null ||
  r[65] !== R ||
  r[66] !== z ||
  r[67] !== B ||
  r[68] !== V ||
  r[69] !== H
    ? ((U = (0, Z.jsxs)(`div`, { "aria-hidden": w, className: L, children: [null, R, z, B, V, H] })),
      (r[62] = w),
      (r[63] = L),
      (r[64] = null),
      (r[65] = R),
      (r[66] = z),
      (r[67] = B),
      (r[68] = V),
      (r[69] = H),
      (r[70] = U))
    : (U = r[70]);
  let W;
  r[71] !== M || r[72] !== I || r[73] !== U
    ? ((W = (0, Z.jsxs)(`div`, {
        className: `relative flex h-10 flex-wrap items-center justify-between gap-2 px-3 py-2`,
        children: [M, I, U],
      })),
      (r[71] = M),
      (r[72] = I),
      (r[73] = U),
      (r[74] = W))
    : (W = r[74]);
  let G;
  r[75] === o ? (G = r[76]) : ((G = { [ke]: o }), (r[75] = o), (r[76] = G));
  let Ve = w || void 0,
    K = C && !w && `[mask-image:linear-gradient(to_bottom,black_calc(100%_-_4rem),transparent)]`,
    q;
  r[77] === K ? (q = r[78]) : ((q = b(`relative overflow-hidden`, K)), (r[77] = K), (r[78] = q));
  let J = w || void 0,
    Y;
  r[79] !== T || r[80] !== C || r[81] !== w
    ? ((Y = C
        ? { maxHeight: w ? 0 : 160, opacity: +!w }
        : {
            height: T ? qe : `auto`,
            ...(T ? { overflow: `hidden` } : { transitionEnd: { overflow: `visible` } }),
          }),
      (r[79] = T),
      (r[80] = C),
      (r[81] = w),
      (r[82] = Y))
    : (Y = r[82]);
  let Ue = !i.completed,
    X;
  r[83] !== o || r[84] !== s || r[85] !== S || r[86] !== de || r[87] !== i.content || r[88] !== Ue
    ? ((X = (0, Z.jsx)(Fe, {
        markdown: i.content,
        conversationId: o,
        hostId: de,
        hideCodeBlocks: S,
        isStreaming: Ue,
        cwd: s,
      })),
      (r[83] = o),
      (r[84] = s),
      (r[85] = S),
      (r[86] = de),
      (r[87] = i.content),
      (r[88] = Ue),
      (r[89] = X))
    : (X = r[89]);
  let Q;
  r[90] !== T || r[91] !== C
    ? ((Q =
        !C && T
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: `pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-primary-soft to-transparent`,
                }),
                (0, Z.jsx)(`div`, {
                  className: `pointer-events-none absolute inset-x-0 bottom-3 flex justify-center`,
                  children: (0, Z.jsx)(t, {
                    className: `pointer-events-auto`,
                    color: `primary`,
                    onClick: () => {
                      ue(!1);
                    },
                    children: (0, Z.jsx)(a, {
                      id: `localConversation.planSummary.viewPlan`,
                      defaultMessage: `Expand plan`,
                      description: `Button label to expand a collapsed plan summary`,
                    }),
                  }),
                }),
              ],
            })
          : null),
      (r[90] = T),
      (r[91] = C),
      (r[92] = Q))
    : (Q = r[92]);
  let $;
  r[93] !== G || r[94] !== Ve || r[95] !== q || r[96] !== J || r[97] !== Y || r[98] !== X || r[99] !== Q
    ? (($ = (0, Z.jsxs)(_.div, {
        ...G,
        "aria-hidden": Ve,
        className: q,
        inert: J,
        initial: !1,
        animate: Y,
        transition: ie,
        children: [X, Q],
      })),
      (r[93] = G),
      (r[94] = Ve),
      (r[95] = q),
      (r[96] = J),
      (r[97] = Y),
      (r[98] = X),
      (r[99] = Q),
      (r[100] = $))
    : ($ = r[100]);
  let Ye;
  return (
    r[101] !== Le || r[102] !== j || r[103] !== W || r[104] !== $
      ? ((Ye = (0, Z.jsxs)(Pe, { className: Le, children: [j, W, $] })),
        (r[101] = Le),
        (r[102] = j),
        (r[103] = W),
        (r[104] = $),
        (r[105] = Ye))
      : (Ye = r[105]),
    Ye
  );
}
function We(e) {
  return !e;
}
var Ge, Ke, Z, qe, Je;
function Q() {
  return (Q = e(() => {
    ((Ge = se()),
      s(),
      g(),
      x(),
      u(),
      (Ke = w()),
      te(),
      ge(),
      E(),
      oe(),
      v(),
      l(),
      y(),
      me(),
      m(),
      J(),
      ee(),
      Ae(),
      Ne(),
      O(),
      ue(),
      A(),
      d(),
      S(),
      De(),
      M(),
      he(),
      K(),
      (Z = C()),
      (qe = 320),
      (Je = `PLAN.md`));
  }))();
}
export { K as i, Q as n, Be as r, Y as t };
//# sourceMappingURL=plan-summary-item-content-efab7b486e34.js.map
