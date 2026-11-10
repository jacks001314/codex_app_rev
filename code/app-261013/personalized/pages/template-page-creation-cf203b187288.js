import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Bpt as r,
  CPt as i,
  Cot as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  JSt as l,
  Pxt as u,
  Rpt as d,
  SJ as f,
  SPt as p,
  TJ as m,
  VDt as h,
  Vxt as g,
  _Mt as _,
  _xt as v,
  fSt as y,
  gMt as b,
  hot as x,
  jDt as S,
  lot as C,
  rst as w,
  t3 as T,
  tMt as E,
  vzt as D,
  wot as O,
  xMt as k,
  yzt as A,
  zxt as j,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cun as M,
  D3 as N,
  Dar as P,
  Dor as F,
  Dun as I,
  Ear as L,
  Eun as ee,
  G4n as te,
  I2 as ne,
  J4n as re,
  Mcn as R,
  O3 as ie,
  OPr as ae,
  Oor as oe,
  P2 as se,
  QDr as ce,
  QEr as le,
  Rsn as ue,
  Tun as de,
  U4n as fe,
  XDr as pe,
  XMr as me,
  eDr as he,
  fMr as ge,
  gun as _e,
  hun as ve,
  iqt as z,
  jPr as ye,
  jcn as be,
  lIr as xe,
  sIr as B,
  t6n as Se,
  tNr as Ce,
  tqt as we,
  vun as Te,
  wun as Ee,
  xMr as V,
  xsn as De,
} from "./app-initial-5851df3f6cb1.js";
import { n as Oe, r as ke, t as Ae } from "./error-21e6fb16598c.js";
import { a as je, d as Me, f as H, i as U, n as Ne, o as W } from "./prompt-chat-13929d3098ec.js";
import { n as Pe, r as Fe, t as Ie } from "./personalized-pages-f207fdb0390c.js";
import { o as Le, r as Re } from "./state-dc42f06f4898.js";
import { n as ze, r as Be } from "./document-e135fecdb63d.js";
import { n as G, r as Ve } from "./template-setup-chat-bb52ad9352ed.js";
function He(e) {
  let t = (0, Ue.c)(9),
    { document: n, pageId: r, surface: i, symbol: a } = e,
    o = i === void 0 ? `onboarding` : i,
    s = o === `onboarding`,
    c;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== s
    ? ((c = (0, K.jsx)(ze, { document: n, pageId: r, horizontalInset: s, symbol: a })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = s),
      (t[4] = c))
    : (c = t[4]);
  let l = c;
  if (o === `gallery`) {
    let e;
    return (
      t[5] === l
        ? (e = t[6])
        : ((e = (0, K.jsx)(`div`, { className: `h-full overflow-hidden bg-surface px-4`, children: l })),
          (t[5] = l),
          (t[6] = e)),
      e
    );
  }
  let u;
  return (
    t[7] === l
      ? (u = t[8])
      : ((u = (0, K.jsx)(`div`, {
          className: `h-full bg-surface-secondary px-6 pt-5`,
          children: (0, K.jsx)(`div`, {
            className: `h-full overflow-hidden rounded-[4px] border border-subtle bg-surface`,
            children: l,
          }),
        })),
        (t[7] = l),
        (t[8] = u)),
    u
  );
}
var Ue, K;
function q() {
  return (q = e(() => {
    ((Ue = D()), Be(), (K = k()));
  }))();
}
function We(e, t) {
  return t == null
    ? e
    : (0, Ge.default)(e, ({ id: e }) =>
        (0, Ke.default)(JSON.stringify([`space-page-template-order-v1`, t, e]))(),
      );
}
var Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = t(E(), 1)), (Ke = t(Se(), 1)));
  }))();
}
function Je(e) {
  let t = (0, Ye.c)(32),
    {
      title: r,
      titleContent: i,
      kind: a,
      subtitle: o,
      surface: c,
      preview: l,
      disabled: u,
      highlighted: d,
      onOpen: f,
      actions: p,
    } = e,
    m = a === void 0 ? `page` : a,
    h = c === void 0 ? `onboarding` : c,
    g = u !== void 0 && u,
    _ = d !== void 0 && d,
    v = j(P, `granola_presentation`),
    y = h === `gallery` ? `gap-3` : `gap-2.5`,
    x;
  t[0] === y
    ? (x = t[1])
    : ((x = b(
        `tortilla-gallery-tile-button group/tile w-full min-w-0 flex-col rounded-xl border-0 bg-transparent p-0 pb-2 text-start`,
        y,
      )),
      (t[0] = y),
      (t[1] = x));
  let S = m === `slides` ? `unchanged` : `dimmed`,
    C = h === `onboarding` && (v ? `aspect-video` : `aspect-23/14`),
    w = h === `gallery` && (m === `slides` ? `aspect-video` : `aspect-179/204`),
    T = _ ? `activity-glow border-content-blue/40 text-content-blue/30` : `border-default`,
    E;
  t[2] !== T || t[3] !== C || t[4] !== w
    ? ((E = b(
        `tortilla-gallery-preview relative block w-full overflow-hidden rounded-xl border border-solid group-hover/tile:border-strong group-hover/tile:shadow-card group-focus-visible/tile:border-strong group-focus-visible/tile:shadow-card`,
        C,
        w,
        T,
      )),
      (t[2] = T),
      (t[3] = C),
      (t[4] = w),
      (t[5] = E))
    : (E = t[5]);
  let D;
  t[6] !== l || t[7] !== E
    ? ((D = (0, J.jsx)(`span`, { className: E, "aria-hidden": !0, children: l })),
      (t[6] = l),
      (t[7] = E),
      (t[8] = D))
    : (D = t[8]);
  let O = h === `gallery` ? `line-clamp-2 break-words whitespace-normal` : `truncate`,
    k = i ?? r,
    A;
  t[9] !== O || t[10] !== k
    ? ((A = (0, J.jsx)(`span`, { className: O, children: k })), (t[9] = O), (t[10] = k), (t[11] = A))
    : (A = t[11]);
  let M;
  t[12] !== m || t[13] !== o || t[14] !== h
    ? ((M =
        h === `onboarding` &&
        (0, J.jsx)(`span`, {
          className: `text-xs leading-4 text-tertiary`,
          children:
            o ??
            (m === `slides`
              ? (0, J.jsx)(s, {
                  id: `space.templates.slidesType`,
                  defaultMessage: `Slides`,
                  description: `Artifact type beneath the title of a native Slides template card`,
                })
              : (0, J.jsx)(s, {
                  id: `space.templates.pageType`,
                  defaultMessage: `Page`,
                  description: `Artifact type beneath the title of a native Page template card`,
                })),
        })),
      (t[12] = m),
      (t[13] = o),
      (t[14] = h),
      (t[15] = M))
    : (M = t[15]);
  let N;
  t[16] !== A || t[17] !== M
    ? ((N = (0, J.jsxs)(`span`, {
        className: `tortilla-gallery-name flex w-full min-w-0 flex-col gap-0.5 px-2 text-center body-sm font-normal text-default`,
        children: [A, M],
      })),
      (t[16] = A),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let F;
  t[19] !== g || t[20] !== f || t[21] !== D || t[22] !== N || t[23] !== x || t[24] !== S || t[25] !== r
    ? ((F = (0, J.jsxs)(n, {
        className: x,
        unstyled: !0,
        "aria-label": r,
        disabled: g,
        disabledAppearance: S,
        onClick: f,
        children: [D, N],
      })),
      (t[19] = g),
      (t[20] = f),
      (t[21] = D),
      (t[22] = N),
      (t[23] = x),
      (t[24] = S),
      (t[25] = r),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] === p
    ? (I = t[28])
    : ((I =
        p != null &&
        (0, J.jsx)(`div`, {
          className: `absolute end-3 top-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[aria-expanded=true]]:opacity-100 pointer-coarse:opacity-100`,
          children: p,
        })),
      (t[27] = p),
      (t[28] = I));
  let L;
  return (
    t[29] !== F || t[30] !== I
      ? ((L = (0, J.jsxs)(`div`, { className: `group relative min-w-0 select-none`, children: [F, I] })),
        (t[29] = F),
        (t[30] = I),
        (t[31] = L))
      : (L = t[31]),
    L
  );
}
var Ye, J;
function Y() {
  return (Y = e(() => {
    ((Ye = D()), _(), u(), S(), T(), L(), (J = k()));
  }))();
}
function Xe(e) {
  let t = (0, X.c)(37),
    { suggestion: r, surface: i, selectionSurface: l, onOpen: u, onOpenPage: d, isCurrent: p } = e,
    m = c(a),
    _ = h(),
    v = o(),
    y = g(F),
    b = g(me),
    x;
  t[0] !== y || t[1] !== b ? ((x = JSON.stringify([y, b])), (t[0] = y), (t[1] = b), (t[2] = x)) : (x = t[2]);
  let S = j(Fe, x),
    C = (0, Z.useRef)(null),
    w,
    T;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => () => C.current?.abort()), (T = []), (t[3] = w), (t[4] = T))
    : ((w = t[3]), (T = t[4])),
    (0, Z.useEffect)(w, T));
  let E;
  t[5] !== S || t[6] !== r.id || t[7] !== r.title
    ? ((E =
        S === r.id
          ? (0, Q.jsx)(`span`, {
              role: `status`,
              className: `text-secondary`,
              children: (0, Q.jsx)(s, {
                id: `space.personalizedPages.creating`,
                defaultMessage: `Creating your Page…`,
                description: `Text replacing the title on a personalized Page suggestion card in Spaces or the template modal while creating its private Page after selection.`,
              }),
            })
          : r.title),
      (t[5] = S),
      (t[6] = r.id),
      (t[7] = r.title),
      (t[8] = E))
    : (E = t[8]);
  let D = E,
    O;
  t[9] !== _ ||
  t[10] !== p ||
  t[11] !== v ||
  t[12] !== u ||
  t[13] !== d ||
  t[14] !== m ||
  t[15] !== l ||
  t[16] !== r ||
  t[17] !== i
    ? ((O = () => {
        (ce(m, Ee, {
          action:
            i === `gallery`
              ? de.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED
              : de.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
          category: `personalized_page`,
          selectionSurface:
            i === `gallery`
              ? (l ?? ee.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL)
              : ee.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
        }),
          (C.current ??= new AbortController()),
          Pe({
            scope: m,
            suggestion: r,
            navigate: v,
            intl: _,
            onOpen: u,
            onOpenPage: d,
            isCurrent: p,
            signal: C.current.signal,
          }));
      }),
      (t[9] = _),
      (t[10] = p),
      (t[11] = v),
      (t[12] = u),
      (t[13] = d),
      (t[14] = m),
      (t[15] = l),
      (t[16] = r),
      (t[17] = i),
      (t[18] = O))
    : (O = t[18]);
  let k = O,
    A;
  t[19] !== r || t[20] !== i
    ? ((A = (0, Q.jsx)(Ze, { suggestion: r, surface: i })), (t[19] = r), (t[20] = i), (t[21] = A))
    : (A = t[21]);
  let M = S != null,
    N;
  t[22] !== _ || t[23] !== S || t[24] !== m || t[25] !== r.id || t[26] !== r.title || t[27] !== i
    ? ((N =
        i === `onboarding`
          ? (0, Q.jsx)(n, {
              color: `ghostMuted`,
              size: `compact`,
              uniform: !0,
              disabled: S === r.id,
              "aria-label": _.formatMessage(
                {
                  id: `space.gettingStarted.dismissPersonalizedPage`,
                  defaultMessage: `Dismiss {title}`,
                  description: `Accessible label for removing a personalized Page suggestion from Space Getting started. The title is the suggestion's name; dismissing does not create or delete a Page and leaves it available in the template gallery.`,
                },
                { title: r.title },
              ),
              onClick: () => {
                (ce(m, ve, {
                  action: _e.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                  item: Te.CODEX_SPACES_ONBOARDING_ITEM_PERSONALIZED_PAGE,
                }),
                  Re(m, `personalized:${r.id}`));
              },
              children: (0, Q.jsx)(f, {}),
            })
          : void 0),
      (t[22] = _),
      (t[23] = S),
      (t[24] = m),
      (t[25] = r.id),
      (t[26] = r.title),
      (t[27] = i),
      (t[28] = N))
    : (N = t[28]);
  let P;
  return (
    t[29] !== D ||
    t[30] !== k ||
    t[31] !== r.title ||
    t[32] !== i ||
    t[33] !== A ||
    t[34] !== M ||
    t[35] !== N
      ? ((P = (0, Q.jsx)(Je, {
          title: r.title,
          titleContent: D,
          surface: i,
          preview: A,
          disabled: M,
          onOpen: k,
          actions: N,
        })),
        (t[29] = D),
        (t[30] = k),
        (t[31] = r.title),
        (t[32] = i),
        (t[33] = A),
        (t[34] = M),
        (t[35] = N),
        (t[36] = P))
      : (P = t[36]),
    P
  );
}
function Ze(e) {
  let t = (0, X.c)(14),
    { suggestion: n, surface: r } = e,
    i = h(),
    a;
  if (t[0] !== i.formatMessage || t[1] !== n.description || t[2] !== n.title) {
    let e = N(i.formatMessage),
      r = e.schema();
    ((a = e.serialize(
      r.nodes.doc.create(null, [
        r.nodes.heading.create({ level: 1 }, r.text(n.title)),
        r.nodes.paragraph.create(null, n.description ? r.text(n.description) : null),
      ]),
    )),
      (t[0] = i.formatMessage),
      (t[1] = n.description),
      (t[2] = n.title),
      (t[3] = a));
  } else a = t[3];
  let o = a,
    s = `personalized-template-preview-${n.id}`,
    c;
  t[4] === o ? (c = t[5]) : ((c = [{ kind: `markdown`, markdown: o }]), (t[4] = o), (t[5] = c));
  let l;
  t[6] !== o || t[7] !== n.title || t[8] !== c
    ? ((l = { title: n.title, markdown: o, units: c }), (t[6] = o), (t[7] = n.title), (t[8] = c), (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== r || t[11] !== s || t[12] !== l
      ? ((u = (0, Q.jsx)(He, { symbol: null, surface: r, pageId: s, document: l })),
        (t[10] = r),
        (t[11] = s),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
var X, Z, Q;
function Qe() {
  return (Qe = e(() => {
    ((X = D()),
      I(),
      u(),
      (Z = A()),
      S(),
      v(),
      Ce(),
      T(),
      m(),
      ie(),
      De(),
      pe(),
      O(),
      q(),
      Ie(),
      Y(),
      Le(),
      (Q = k()));
  }))();
}
function $e(e, t) {
  switch (t) {
    case `project-tracker`:
      return {
        submitLabel: e.formatMessage({
          id: `space.pageTemplates.projectTracker.followUp.submitLabel`,
          defaultMessage: `Create tracker`,
          description: `Button that submits the completed answers in the Project tracker Page template setup chat and starts preparing the Page`,
        }),
        preparingLabel: e.formatMessage({
          id: `space.pageTemplates.projectTracker.followUp.preparingLabel`,
          defaultMessage: `Getting your tracker ready…`,
          description: `Waiting status in the Project tracker Page template setup chat after answers are submitted, while the Page and chat are prepared`,
        }),
        questions: [
          {
            question: e.formatMessage({
              id: `space.pageTemplates.projectTracker.followUp.project.question`,
              defaultMessage: `Which project do you want to track?`,
              description: `Question in the Project tracker Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.projectTracker.followUp.project.answerLabel`,
              defaultMessage: `Project`,
              description: `Short label for the user’s answer to “Which project do you want to track?” in the Project tracker Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
          {
            question: e.formatMessage({
              id: `space.pageTemplates.projectTracker.followUp.goal.question`,
              defaultMessage: `What’s the main outcome or deadline for this project?`,
              description: `Question in the Project tracker Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.projectTracker.followUp.goal.answerLabel`,
              defaultMessage: `Goal or deadline`,
              description: `Short label for the user’s answer to “What’s the main outcome or deadline for this project?” in the Project tracker Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
        ],
      };
    case `weekly-update`:
      return {
        submitLabel: e.formatMessage({
          id: `space.pageTemplates.weeklyUpdate.followUp.submitLabel`,
          defaultMessage: `Create update`,
          description: `Button that submits the completed answers in the Weekly update Page template setup chat and starts preparing the Page`,
        }),
        preparingLabel: e.formatMessage({
          id: `space.pageTemplates.weeklyUpdate.followUp.preparingLabel`,
          defaultMessage: `Getting your update ready…`,
          description: `Waiting status in the Weekly update Page template setup chat after answers are submitted, while the Page and chat are prepared`,
        }),
        freeformPlaceholder: e.formatMessage({
          id: `space.pageTemplates.weeklyUpdate.followUp.freeformPlaceholder`,
          defaultMessage: `e.g. My work, the design team, or the website launch`,
          description: `Example answer shown in the free-text input in the Weekly update Page template setup chat`,
        }),
        questions: [
          {
            question: e.formatMessage({
              id: `space.pageTemplates.weeklyUpdate.followUp.scope.question`,
              defaultMessage: `What should this week's update cover?`,
              description: `Question in the Weekly update Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.weeklyUpdate.followUp.scope.answerLabel`,
              defaultMessage: `Update scope`,
              description: `Short label for the user’s answer to “What should this week's update cover?” in the Weekly update Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
        ],
      };
    case `feedback-tracker`:
      return {
        submitLabel: e.formatMessage({
          id: `space.pageTemplates.feedback.followUp.submitLabel`,
          defaultMessage: `Create feedback tracker`,
          description: `Button that submits the completed answers in the Feedback tracker Page template setup chat and starts preparing the Page`,
        }),
        preparingLabel: e.formatMessage({
          id: `space.pageTemplates.feedback.followUp.preparingLabel`,
          defaultMessage: `Getting your feedback tracker ready…`,
          description: `Waiting status in the Feedback tracker Page template setup chat after answers are submitted, while the Page and chat are prepared`,
        }),
        freeformPlaceholder: e.formatMessage({
          id: `space.pageTemplates.feedback.followUp.freeformPlaceholder`,
          defaultMessage: `e.g. The new onboarding flow`,
          description: `Example answer shown in the free-text input in the Feedback tracker Page template setup chat`,
        }),
        questions: [
          {
            question: e.formatMessage({
              id: `space.pageTemplates.feedback.followUp.product.question`,
              defaultMessage: `What product or feature should we collect feedback on?`,
              description: `Question in the Feedback tracker Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.feedback.followUp.product.answerLabel`,
              defaultMessage: `Product or feature`,
              description: `Short label for the user’s answer to “What product or feature should we collect feedback on?” in the Feedback tracker Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
          {
            question: e.formatMessage({
              id: `space.pageTemplates.feedback.followUp.sources.question`,
              defaultMessage: `Whose feedback should we include?`,
              description: `Question in the Feedback tracker Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.feedback.followUp.sources.answerLabel`,
              defaultMessage: `Feedback sources`,
              description: `Short label for the user’s answer to “Whose feedback should we include?” in the Feedback tracker Page template setup chat; included with the answer in the setup prompt`,
            }),
            isOther: !0,
            options: [
              {
                id: `customers`,
                value: e.formatMessage({
                  id: `space.pageTemplates.feedback.followUp.sources.option.customers`,
                  defaultMessage: `Customers and users`,
                  description: `Answer choice in the Feedback tracker Page template setup chat for whose feedback to include. The choices are customers and users, internal testers, or both groups`,
                }),
              },
              {
                id: `internal-testers`,
                value: e.formatMessage({
                  id: `space.pageTemplates.feedback.followUp.sources.option.internalTesters`,
                  defaultMessage: `Internal testers`,
                  description: `Answer choice in the Feedback tracker Page template setup chat for whose feedback to include. The choices are customers and users, internal testers, or both groups`,
                }),
              },
              {
                id: `both`,
                value: e.formatMessage({
                  id: `space.pageTemplates.feedback.followUp.sources.option.both`,
                  defaultMessage: `Both`,
                  description: `Answer choice in the Feedback tracker Page template setup chat for whose feedback to include. The choices are customers and users, internal testers, or both groups`,
                }),
              },
            ],
          },
        ],
      };
    case `release-notes`:
      return {
        submitLabel: e.formatMessage({
          id: `space.pageTemplates.releaseNotes.followUp.submitLabel`,
          defaultMessage: `Create release notes`,
          description: `Button that submits the completed answers in the Release notes Page template setup chat and starts preparing the Page`,
        }),
        preparingLabel: e.formatMessage({
          id: `space.pageTemplates.releaseNotes.followUp.preparingLabel`,
          defaultMessage: `Getting your release notes ready…`,
          description: `Waiting status in the Release notes Page template setup chat after answers are submitted, while the Page and chat are prepared`,
        }),
        questions: [
          {
            question: e.formatMessage({
              id: `space.pageTemplates.releaseNotes.followUp.product.question`,
              defaultMessage: `What product are these release notes for?`,
              description: `Question in the Release notes Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.releaseNotes.followUp.product.answerLabel`,
              defaultMessage: `Product`,
              description: `Short label for the user’s answer to “What product are these release notes for?” in the Release notes Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
          {
            question: e.formatMessage({
              id: `space.pageTemplates.releaseNotes.followUp.release.question`,
              defaultMessage: `Which release or date range should they cover?`,
              description: `Question in the Release notes Page template setup chat asked before creating personalized Page content`,
            }),
            answerLabel: e.formatMessage({
              id: `space.pageTemplates.releaseNotes.followUp.release.answerLabel`,
              defaultMessage: `Release or date range`,
              description: `Short label for the user’s answer to “Which release or date range should they cover?” in the Release notes Page template setup chat; included with the answer in the setup prompt`,
            }),
            options: [],
          },
        ],
      };
    default:
      return;
  }
}
async function et({
  scope: e,
  templateId: t,
  title: n,
  prompt: a,
  prefillPrompt: o,
  followUp: s,
  initialDocument: c,
  initialSymbol: u,
  setupQuestion: f,
  revealSetupComment: p = !1,
  navigate: m,
  intl: h,
  onOpen: g,
}) {
  let _ = e.get(F);
  if (_ == null || e.get($) || !e.get(R)) return;
  let v = e.get(V).status,
    y = e.get(ye),
    b = v === `allowed` && y != null ? le(y, `627892934`).get(`composer_prefill_type`, `default`) : void 0,
    S = b === `prefill_and_send` ? null : f,
    C = b === `prefill_and_send` ? null : s;
  b === `question_only` && C == null && S != null
    ? (C = { questions: [{ question: S, answerLabel: S, options: [] }] })
    : b === `question_only` && C === void 0 && S === void 0 && (C = $e(h, t));
  let w = v === `allowed` && b !== `prefill_only`,
    T = v === `allowed` && (!w || (C == null && S == null)),
    E = T || (w && (C != null || S != null)),
    D = T || (w && C != null);
  e.set($, !0);
  let O = oe(e, _),
    k = new AbortController(),
    A = AbortSignal.any([O.signal, k.signal]),
    j = e.get(B),
    N,
    P = e.watch(({ get: e }) => {
      let t = e(B),
        n = e(z);
      (!e(R) ||
        ((w || T) && e(V).status !== `allowed`) ||
        (E && N != null && n == null) ||
        (t !== j && (N == null || (t.pathname !== `/space/${N}` && t.pathname !== `/space/${e(ue, N)}`)))) &&
        k.abort();
    });
  try {
    let t = r(),
      s = ne(
        e,
        {
          source: M.CODEX_SPACES_SOURCE_TEMPLATE,
          title: n,
          initialDocument: c,
          initialSymbol: u,
          initializePage:
            c == null && u == null
              ? void 0
              : (e, t) => e.flush({ scope: `current`, timeoutMs: null, signal: t }),
        },
        t.resolve,
      );
    (s.completion.catch(() => {}),
      (N = s.pageId),
      T
        ? e.set(z, {
            presentation: `draft`,
            title: n,
            accountId: _,
            pageId: N,
            answer: w ? a : o,
            status: w ? `queued` : `answering`,
          })
        : w && C != null
          ? e.set(z, { presentation: `chat`, accountId: _, pageId: N, answer: ``, status: `answering` })
          : w &&
            S != null &&
            e.set(z, {
              presentation: `form`,
              accountId: _,
              pageId: N,
              question: S,
              answer: ``,
              status: `answering`,
            }),
      (w || T) && C == null && e.set(U, { accountId: _, pageId: N, prompt: a }),
      g?.(),
      D && !T && re(e, G, { title: n, followUp: C, pageId: N }, { blocksOtherModals: !1 }),
      m(`/space/${N}`));
    let f = d(t.promise, A);
    if (!w && !T) {
      let t = await f;
      A.throwIfAborted();
      try {
        await H(
          e,
          {
            accountId: _,
            pageId: t.metadata.page_id,
            prompt: o,
            project: void 0,
            prefillOnly: !0,
            prefillOnComposerMount: !0,
          },
          ({ get: e }) => {
            let n = e(B),
              r = n === j || n.pathname === `/space/${N}` || n.pathname === `/space/${t.metadata.page_id}`;
            return A.aborted || e(F) !== _ || !e(R) || e(V).status !== v || !r;
          },
        );
      } catch (e) {
        A.aborted || i.warning(`Failed to prefill Page template chat`, { safe: {}, sensitive: { error: e } });
      }
      return;
    }
    let y;
    C == null &&
      !T &&
      (y = W(e, { accountId: _, pageId: s.pageId }, A).catch(async (t) => {
        if (A.aborted || !(t instanceof Error) || (t.name !== `AbortError` && t.name !== `TimeoutError`))
          throw t;
        (await f, A.throwIfAborted(), await W(e, { accountId: _, pageId: s.pageId }, A));
      }));
    let [b] = await Promise.all([f, y]);
    (A.throwIfAborted(), p && Me(e, { accountId: _, pageId: N }));
    let x = !1;
    for (;;) {
      A.throwIfAborted();
      try {
        (D &&
          (await d(
            e.when(({ get: e }) => {
              let t = e(z);
              return t == null || t.status === `queued`;
            }),
            A,
          ),
          A.throwIfAborted(),
          await W(e, { accountId: _, pageId: s.pageId }, A)),
          A.throwIfAborted(),
          await H(
            e,
            {
              accountId: _,
              pageId: b.metadata.page_id,
              prompt: a,
              setupInstructions:
                `For this initial setup request, the app has already created and opened the destination Page (page_id: ${b.metadata.page_id}). The user's request, even if it says "create a new page", describes what to put in this existing Page; the creation step is complete. Use this exact page_id when following the setup prompt's instructions, including any questions it asks you to ask before editing. Do not call create_page or create a replacement Page for this setup. Preserve any user edits. If this Page cannot be edited, report the problem in chat instead of creating another Page.` +
                (c == null
                  ? ``
                  : `

` +
                    h.formatMessage({
                      id: `space.pageTemplates.sampleContentInstructions`,
                      defaultMessage: `This Page starts with illustrative template content, not facts about the user or their work. Read the Page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it where needed. If essential information is missing, ask a focused question rather than guessing. The Page title is displayed separately; do not repeat it as a heading in the body. Leave up to three comments where specific user input is needed, attached to the relevant content. Do not add comments unnecessarily or repeat the same question across comments and chat.`,
                      description: `Hidden model instructions for Page template setup: use real sources, preserve user edits, keep the title separate, and ask for input through relevant comments without repeating questions in chat`,
                    })) +
                ` For the Page body, do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate such as ‘source deadlines are preserved,’ ‘completion is not yet established,’ or ‘this is a focused checklist.’ Keep substantive project overviews and progress updates, actionable content, supported task deadlines, product limitations, risks, and availability qualifiers beside the relevant entries in the Page. Put only drafting and maintenance commentary or related questions in comments or chat instead of adding boilerplate to the Page. Save these presentation rules in the Page’s durable instructions when maintaining it.` +
                (C == null || T
                  ? ``
                  : ` The user has completed the template's initial questions. Use their appended answers without repeating those questions.`),
              project: null,
              keepPageOpen: !0,
              showTemplateThinking: !0,
              onSubmitStart: () => {
                let t = e.get(z);
                t != null && e.set(z, { ...t, status: `submitting` });
              },
              onSubmitted: D
                ? () => {
                    ((x = !0),
                      l(e, () => {
                        let t = e.get(z);
                        (t != null && e.set(z, { ...t, status: `submitted` }), e.set(U, null));
                      }),
                      fe(e, G));
                  }
                : void 0,
              getPrompt: E
                ? (e) => {
                    let t = e.get(z);
                    return t?.status === `queued`
                      ? t.presentation === `draft`
                        ? t.answer
                        : t.presentation === `chat`
                          ? [a, t.answer].filter((e) => e.length > 0).join(`

`)
                          : [
                              a,
                              h.formatMessage({
                                id: `space.pageTemplates.answeredSetupInstructions`,
                                defaultMessage: `The initial setup question has already been answered in the Page setup form. Use the answer below and proceed with the Page. Do not repeat that question; ask a follow-up only if essential information is still missing.`,
                                description: `Instructions to the model before the opening question and user answer, so it proceeds without asking the same setup question again`,
                              }),
                              t.question,
                              h.formatMessage(
                                {
                                  id: `space.pageTemplates.setupAnswerPrompt`,
                                  defaultMessage: `User answer: {answer}`,
                                  description: `Label for the user's setup answer in the first Page chat turn`,
                                },
                                { answer: t.answer.trim() },
                              ),
                            ].join(`

`)
                      : null;
                  }
                : void 0,
            },
            ({ get: e }) =>
              A.aborted ||
              e(F) !== _ ||
              !e(R) ||
              e(V).status !== `allowed` ||
              (E && e(z) == null) ||
              (e(B) !== j &&
                e(B).pathname !== `/space/${N}` &&
                e(B).pathname !== `/space/${b.metadata.page_id}`),
          ));
        break;
      } catch (t) {
        if (x) {
          i.warning(`Page template chat failed after submission`, { safe: {}, sensitive: { error: t } });
          break;
        }
        let n = e.get(z);
        if (!E || n == null || A.aborted) throw t;
        (e.set(z, {
          ...n,
          status:
            t instanceof Oe ||
            ((n.presentation === `chat` || n.presentation === `draft`) &&
              n.status === `submitting` &&
              !(t instanceof Ae && t.reason === `not-sent`))
              ? `unconfirmed`
              : `error`,
        }),
          await d(
            e.when(({ get: e }) => {
              let t = e(z);
              return t == null || t.status === `queued`;
            }),
            A,
          ));
      }
    }
  } catch {
    (e.get(je)?.request.pageId === N && e.set(je, null),
      A.aborted ||
        e
          .get(x)
          .danger(
            w
              ? h.formatMessage({
                  id: `space.pageSetup.startFailed`,
                  defaultMessage: `Could not start page setup. Open a new chat on the page to try again.`,
                  description: `Error when a Page is created from a template but its setup chat could not start`,
                })
              : h.formatMessage({
                  id: `space.pageTemplates.createFailed`,
                  defaultMessage: `Could not create the Page from this template`,
                  description: `Error when a prefilled Page could not be created from a template without Work access`,
                }),
            {
              errorAnalytics: {
                toastId: w ? `space.pageSetup.startFailed` : `space.pageTemplates.createFailed`,
              },
            },
          ));
  } finally {
    (k.abort(), D && fe(e, G), e.set(z, null), e.set(U, null), P(), O.stop(), e.set($, !1));
  }
}
var $;
function tt() {
  return (tt = e(() => {
    (I(),
      u(),
      w(),
      xe(),
      ge(),
      te(),
      C(),
      se(),
      ke(),
      Ne(),
      De(),
      O(),
      he(),
      ae(),
      p(),
      be(),
      Ve(),
      we(),
      ($ = y(a, !1)));
  }))();
}
export { Qe as a, qe as c, q as d, Xe as i, We as l, et as n, Je as o, $ as r, Y as s, tt as t, He as u };
//# sourceMappingURL=template-page-creation-cf203b187288.js.map
