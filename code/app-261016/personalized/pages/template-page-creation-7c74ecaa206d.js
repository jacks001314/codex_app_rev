import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $mt as r,
  $st as i,
  FBt as a,
  LNt as o,
  MNt as s,
  NNt as c,
  NSt as l,
  PBt as u,
  Qst as d,
  RFt as f,
  SY as p,
  TY as m,
  USt as h,
  Vrt as g,
  XOt as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  _Nt as x,
  iCt as S,
  kCt as C,
  nCt as w,
  okt as T,
  pwt as E,
  qrt as D,
  sct as O,
  tht as k,
  tkt as A,
  zFt as j,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as M,
  Air as N,
  BRr as P,
  Cmn as F,
  D5n as I,
  Efn as L,
  GVt as ee,
  JVt as R,
  KIr as z,
  LIr as te,
  Mdn as ne,
  Mir as re,
  R7n as ie,
  Smn as ae,
  T5n as oe,
  Tfn as se,
  X6 as ce,
  Z6 as le,
  _ur as ue,
  a3 as de,
  bmn as fe,
  dmn as pe,
  fBr as me,
  fmn as he,
  gur as B,
  hdn as V,
  hlr as ge,
  lBr as _e,
  mlr as ve,
  mmn as ye,
  r3 as be,
  wLr as xe,
  xMr as Se,
  xjr as Ce,
  xmn as we,
  yMr as Te,
  yjr as Ee,
  ymn as De,
} from "./app-initial-ad16eaadf81f.js";
import { n as Oe, r as ke, t as Ae } from "./error-21e6fb16598c.js";
import { c as je, g as Me, h as Ne, n as Pe, s as H, u as U } from "./prompt-chat-bcb03ce4ce0e.js";
import { n as Fe, r as Ie, t as Le } from "./personalized-pages-9830ca1f3831.js";
import { o as Re, r as ze } from "./state-cbddb42ae355.js";
import { n as Be, r as Ve } from "./document-1143a4fe17b0.js";
import { n as W, r as He } from "./template-setup-chat-6d8582e868cb.js";
function Ue(e) {
  let t = (0, We.c)(9),
    { document: n, pageId: r, surface: i, symbol: a } = e,
    o = i === void 0 ? `onboarding` : i,
    s = o === `onboarding`,
    c;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== s
    ? ((c = (0, G.jsx)(Be, { document: n, pageId: r, horizontalInset: s, symbol: a })),
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
        : ((e = (0, G.jsx)(`div`, { className: `h-full overflow-hidden bg-surface px-4`, children: l })),
          (t[5] = l),
          (t[6] = e)),
      e
    );
  }
  let u;
  return (
    t[7] === l
      ? (u = t[8])
      : ((u = (0, G.jsx)(`div`, {
          className: `h-full bg-surface-secondary px-6 pt-5`,
          children: (0, G.jsx)(`div`, {
            className: `h-full overflow-hidden rounded-[4px] border border-subtle bg-surface`,
            children: l,
          }),
        })),
        (t[7] = l),
        (t[8] = u)),
    u
  );
}
var We, G;
function K() {
  return (K = e(() => {
    ((We = u()), Ve(), (G = o()));
  }))();
}
function Ge(e, t) {
  return t == null
    ? e
    : (0, Ke.default)(e, ({ id: e }) =>
        (0, qe.default)(JSON.stringify([`space-page-template-order-v1`, t, e]))(),
      );
}
var Ke, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = t(x(), 1)), (qe = t(ie(), 1)));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(32),
    {
      title: n,
      titleContent: r,
      kind: i,
      subtitle: a,
      surface: o,
      preview: c,
      disabled: l,
      highlighted: u,
      onOpen: d,
      actions: f,
    } = e,
    p = i === void 0 ? `page` : i,
    m = o === void 0 ? `onboarding` : o,
    h = l !== void 0 && l,
    g = u !== void 0 && u,
    _ = w(ge, `granola_presentation`),
    y = m === `gallery` ? `gap-3` : `gap-2.5`,
    b;
  t[0] === y
    ? (b = t[1])
    : ((b = s(
        `tortilla-gallery-tile-button group/tile w-full min-w-0 flex-col rounded-xl border-0 bg-transparent p-0 pb-2 text-start`,
        y,
      )),
      (t[0] = y),
      (t[1] = b));
  let x = p === `slides` ? `unchanged` : `dimmed`,
    S = m === `onboarding` && (_ ? `aspect-video` : `aspect-23/14`),
    C = m === `gallery` && (p === `slides` ? `aspect-video` : `aspect-179/204`),
    T = g ? `activity-glow border-content-blue/40 text-content-blue/30` : `border-default`,
    E;
  t[2] !== T || t[3] !== S || t[4] !== C
    ? ((E = s(
        `tortilla-gallery-preview relative block w-full overflow-hidden rounded-xl border border-solid group-hover/tile:border-strong group-hover/tile:shadow-card group-focus-visible/tile:border-strong group-focus-visible/tile:shadow-card`,
        S,
        C,
        T,
      )),
      (t[2] = T),
      (t[3] = S),
      (t[4] = C),
      (t[5] = E))
    : (E = t[5]);
  let D;
  t[6] !== c || t[7] !== E
    ? ((D = (0, q.jsx)(`span`, { className: E, "aria-hidden": !0, children: c })),
      (t[6] = c),
      (t[7] = E),
      (t[8] = D))
    : (D = t[8]);
  let O = m === `gallery` ? `line-clamp-2 break-words whitespace-normal` : `truncate`,
    k = r ?? n,
    j;
  t[9] !== O || t[10] !== k
    ? ((j = (0, q.jsx)(`span`, { className: O, children: k })), (t[9] = O), (t[10] = k), (t[11] = j))
    : (j = t[11]);
  let M;
  t[12] !== p || t[13] !== a || t[14] !== m
    ? ((M =
        m === `onboarding` &&
        (0, q.jsx)(`span`, {
          className: `text-xs leading-4 text-tertiary`,
          children:
            a ??
            (p === `slides`
              ? (0, q.jsx)(A, {
                  id: `space.templates.slidesType`,
                  defaultMessage: `Slides`,
                  description: `Artifact type beneath the title of a native Slides template card`,
                })
              : (0, q.jsx)(A, {
                  id: `space.templates.pageType`,
                  defaultMessage: `Page`,
                  description: `Artifact type beneath the title of a native Page template card`,
                })),
        })),
      (t[12] = p),
      (t[13] = a),
      (t[14] = m),
      (t[15] = M))
    : (M = t[15]);
  let N;
  t[16] !== j || t[17] !== M
    ? ((N = (0, q.jsxs)(`span`, {
        className: `tortilla-gallery-name flex w-full min-w-0 flex-col gap-0.5 px-2 text-center body-sm font-normal text-default`,
        children: [j, M],
      })),
      (t[16] = j),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] !== h || t[20] !== d || t[21] !== D || t[22] !== N || t[23] !== b || t[24] !== x || t[25] !== n
    ? ((P = (0, q.jsxs)(v, {
        className: b,
        unstyled: !0,
        "aria-label": n,
        disabled: h,
        disabledAppearance: x,
        onClick: d,
        children: [D, N],
      })),
      (t[19] = h),
      (t[20] = d),
      (t[21] = D),
      (t[22] = N),
      (t[23] = b),
      (t[24] = x),
      (t[25] = n),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] === f
    ? (F = t[28])
    : ((F =
        f != null &&
        (0, q.jsx)(`div`, {
          className: `absolute end-3 top-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[aria-expanded=true]]:opacity-100 pointer-coarse:opacity-100`,
          children: f,
        })),
      (t[27] = f),
      (t[28] = F));
  let I;
  return (
    t[29] !== P || t[30] !== F
      ? ((I = (0, q.jsxs)(`div`, { className: `group relative min-w-0 select-none`, children: [P, F] })),
        (t[29] = P),
        (t[30] = F),
        (t[31] = I))
      : (I = t[31]),
    I
  );
}
var Xe, q;
function J() {
  return (J = e(() => {
    ((Xe = u()), c(), b(), _(), y(), ve(), (q = o()));
  }))();
}
function Ze(e) {
  let t = (0, Y.c)(37),
    { suggestion: r, surface: i, selectionSurface: a, onOpen: o, onOpenPage: s, isCurrent: c } = e,
    l = n(d),
    u = T(),
    f = h(),
    m = S(B),
    g = S(P),
    _;
  t[0] !== m || t[1] !== g ? ((_ = JSON.stringify([m, g])), (t[0] = m), (t[1] = g), (t[2] = _)) : (_ = t[2]);
  let y = w(Ie, _),
    b = (0, X.useRef)(null),
    x,
    C;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => b.current?.abort()), (C = []), (t[3] = x), (t[4] = C))
    : ((x = t[3]), (C = t[4])),
    (0, X.useEffect)(x, C));
  let E;
  t[5] !== y || t[6] !== r.id || t[7] !== r.title
    ? ((E =
        y === r.id
          ? (0, Z.jsx)(`span`, {
              role: `status`,
              className: `text-secondary`,
              children: (0, Z.jsx)(A, {
                id: `space.personalizedPages.creating`,
                defaultMessage: `Creating your Page…`,
                description: `Text replacing the title on a personalized Page suggestion card in Spaces or the template modal while creating its private Page after selection.`,
              }),
            })
          : r.title),
      (t[5] = y),
      (t[6] = r.id),
      (t[7] = r.title),
      (t[8] = E))
    : (E = t[8]);
  let D = E,
    O;
  t[9] !== u ||
  t[10] !== c ||
  t[11] !== f ||
  t[12] !== o ||
  t[13] !== s ||
  t[14] !== l ||
  t[15] !== a ||
  t[16] !== r ||
  t[17] !== i
    ? ((O = () => {
        (Se(l, fe, {
          action:
            i === `gallery`
              ? we.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED
              : we.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
          category: `personalized_page`,
          selectionSurface:
            i === `gallery`
              ? (a ?? ae.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL)
              : ae.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
        }),
          (b.current ??= new AbortController()),
          Fe({
            scope: l,
            suggestion: r,
            navigate: f,
            intl: u,
            onOpen: o,
            onOpenPage: s,
            isCurrent: c,
            signal: b.current.signal,
          }));
      }),
      (t[9] = u),
      (t[10] = c),
      (t[11] = f),
      (t[12] = o),
      (t[13] = s),
      (t[14] = l),
      (t[15] = a),
      (t[16] = r),
      (t[17] = i),
      (t[18] = O))
    : (O = t[18]);
  let k = O,
    j;
  t[19] !== r || t[20] !== i
    ? ((j = (0, Z.jsx)(Qe, { suggestion: r, surface: i })), (t[19] = r), (t[20] = i), (t[21] = j))
    : (j = t[21]);
  let M = y != null,
    N;
  t[22] !== u || t[23] !== y || t[24] !== l || t[25] !== r.id || t[26] !== r.title || t[27] !== i
    ? ((N =
        i === `onboarding`
          ? (0, Z.jsx)(v, {
              color: `ghostMuted`,
              size: `compact`,
              uniform: !0,
              disabled: y === r.id,
              "aria-label": u.formatMessage(
                {
                  id: `space.gettingStarted.dismissPersonalizedPage`,
                  defaultMessage: `Dismiss {title}`,
                  description: `Accessible label for removing a personalized Page suggestion from Space Getting started. The title is the suggestion's name; dismissing does not create or delete a Page and leaves it available in the template gallery.`,
                },
                { title: r.title },
              ),
              onClick: () => {
                (Se(l, pe, {
                  action: he.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                  item: ye.CODEX_SPACES_ONBOARDING_ITEM_PERSONALIZED_PAGE,
                }),
                  ze(l, `personalized:${r.id}`));
              },
              children: (0, Z.jsx)(p, {}),
            })
          : void 0),
      (t[22] = u),
      (t[23] = y),
      (t[24] = l),
      (t[25] = r.id),
      (t[26] = r.title),
      (t[27] = i),
      (t[28] = N))
    : (N = t[28]);
  let F;
  return (
    t[29] !== D ||
    t[30] !== k ||
    t[31] !== r.title ||
    t[32] !== i ||
    t[33] !== j ||
    t[34] !== M ||
    t[35] !== N
      ? ((F = (0, Z.jsx)(Ye, {
          title: r.title,
          titleContent: D,
          surface: i,
          preview: j,
          disabled: M,
          onOpen: k,
          actions: N,
        })),
        (t[29] = D),
        (t[30] = k),
        (t[31] = r.title),
        (t[32] = i),
        (t[33] = j),
        (t[34] = M),
        (t[35] = N),
        (t[36] = F))
      : (F = t[36]),
    F
  );
}
function Qe(e) {
  let t = (0, Y.c)(14),
    { suggestion: n, surface: r } = e,
    i = T(),
    a;
  if (t[0] !== i.formatMessage || t[1] !== n.description || t[2] !== n.title) {
    let e = ce(i.formatMessage),
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
      ? ((u = (0, Z.jsx)(Ue, { symbol: null, surface: r, pageId: s, document: l })),
        (t[10] = r),
        (t[11] = s),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
var Y, X, Z;
function $e() {
  return ($e = e(() => {
    ((Y = u()),
      F(),
      b(),
      (X = a()),
      _(),
      l(),
      xe(),
      y(),
      m(),
      le(),
      V(),
      Te(),
      i(),
      K(),
      Le(),
      J(),
      Re(),
      (Z = o()));
  }))();
}
function et(e, t) {
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
async function tt({
  scope: e,
  templateId: t,
  title: n,
  prompt: i,
  prefillPrompt: a,
  followUp: o,
  initialDocument: s,
  initialSymbol: c,
  setupQuestion: l,
  revealSetupComment: u = !1,
  navigate: d,
  intl: f,
  onOpen: p,
}) {
  let m = e.get(B);
  if (m == null || e.get(Q) || !e.get(L)) return;
  let h = e.get(z).status,
    g = e.get(me),
    _ = h === `allowed` && g != null ? Ee(g, `627892934`).get(`composer_prefill_type`, `default`) : void 0,
    v = _ === `prefill_and_send` ? null : l,
    y = _ === `prefill_and_send` ? null : o;
  _ === `question_only` && y == null && v != null
    ? (y = { questions: [{ question: v, answerLabel: v, options: [] }] })
    : _ === `question_only` && y === void 0 && v === void 0 && (y = et(f, t));
  let b = h === `allowed` && _ !== `prefill_only`,
    x = h === `allowed` && (!b || (y == null && v == null)),
    S = x || (b && (y != null || v != null)),
    C = x || (b && y != null);
  e.set(Q, !0);
  let w = ue(e, m),
    T = new AbortController(),
    O = AbortSignal.any([w.signal, T.signal]),
    A = e.get(N),
    P,
    F = e.watch(({ get: e }) => {
      let t = e(N),
        n = e(R);
      (!e(L) ||
        ((b || x) && e(z).status !== `allowed`) ||
        (S && P != null && n == null) ||
        (t !== A && (P == null || (t.pathname !== `/space/${P}` && t.pathname !== `/space/${e(ne, P)}`)))) &&
        T.abort();
    });
  try {
    let t = k(),
      o = de(
        e,
        {
          source: De.CODEX_SPACES_SOURCE_TEMPLATE,
          title: n,
          initialDocument: s,
          initialSymbol: c,
          initializePage:
            s == null && c == null
              ? void 0
              : (e, t) => e.flush({ scope: `current`, timeoutMs: null, signal: t }),
        },
        t.resolve,
      );
    (o.completion.catch(() => {}),
      (P = o.pageId),
      x
        ? e.set(R, {
            presentation: `draft`,
            title: n,
            accountId: m,
            pageId: P,
            answer: b ? i : a,
            status: b ? `queued` : `answering`,
          })
        : b && y != null
          ? e.set(R, { presentation: `chat`, accountId: m, pageId: P, answer: ``, status: `answering` })
          : b &&
            v != null &&
            e.set(R, {
              presentation: `form`,
              accountId: m,
              pageId: P,
              question: v,
              answer: ``,
              status: `answering`,
            }),
      (b || x) && y == null && e.set(H, { accountId: m, pageId: P, prompt: i }),
      p?.(),
      C && !x && M(e, W, { title: n, followUp: y, pageId: P }, { blocksOtherModals: !1 }),
      d(`/space/${P}`));
    let l = r(t.promise, O);
    if (!b && !x) {
      let t = await l;
      O.throwIfAborted();
      try {
        await Me(
          e,
          {
            accountId: m,
            pageId: t.metadata.page_id,
            prompt: a,
            project: void 0,
            prefillOnly: !0,
            prefillOnComposerMount: !0,
          },
          ({ get: e }) => {
            let n = e(N),
              r = n === A || n.pathname === `/space/${P}` || n.pathname === `/space/${t.metadata.page_id}`;
            return O.aborted || e(B) !== m || !e(L) || e(z).status !== h || !r;
          },
        );
      } catch (e) {
        O.aborted || j.warning(`Failed to prefill Page template chat`, { safe: {}, sensitive: { error: e } });
      }
      return;
    }
    let g;
    y == null &&
      !x &&
      (g = U(e, { accountId: m, pageId: o.pageId }, O).catch(async (t) => {
        if (O.aborted || !(t instanceof Error) || (t.name !== `AbortError` && t.name !== `TimeoutError`))
          throw t;
        (await l, O.throwIfAborted(), await U(e, { accountId: m, pageId: o.pageId }, O));
      }));
    let [_] = await Promise.all([l, g]);
    (O.throwIfAborted(), u && Ne(e, { accountId: m, pageId: P }));
    let w = !1;
    for (;;) {
      O.throwIfAborted();
      try {
        (C &&
          (await r(
            e.when(({ get: e }) => {
              let t = e(R);
              return t == null || t.status === `queued`;
            }),
            O,
          ),
          O.throwIfAborted(),
          await U(e, { accountId: m, pageId: o.pageId }, O)),
          O.throwIfAborted(),
          await Me(
            e,
            {
              accountId: m,
              pageId: _.metadata.page_id,
              prompt: i,
              setupInstructions:
                `For this initial setup request, the app has already created and opened the destination Page (page_id: ${_.metadata.page_id}). The user's request, even if it says "create a new page", describes what to put in this existing Page; the creation step is complete. Use this exact page_id when following the setup prompt's instructions, including any questions it asks you to ask before editing. Do not call create_page or create a replacement Page for this setup. Preserve any user edits. If this Page cannot be edited, report the problem in chat instead of creating another Page.` +
                (s == null
                  ? ``
                  : `

` +
                    f.formatMessage({
                      id: `space.pageTemplates.sampleContentInstructions`,
                      defaultMessage: `This Page starts with illustrative template content, not facts about the user or their work. Read the Page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it where needed. If essential information is missing, ask a focused question rather than guessing. The Page title is displayed separately; do not repeat it as a heading in the body. Leave up to three comments where specific user input is needed, attached to the relevant content. Do not add comments unnecessarily or repeat the same question across comments and chat.`,
                      description: `Hidden model instructions for Page template setup: use real sources, preserve user edits, keep the title separate, and ask for input through relevant comments without repeating questions in chat`,
                    })) +
                ` For the Page body, do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate such as ‘source deadlines are preserved,’ ‘completion is not yet established,’ or ‘this is a focused checklist.’ Keep substantive project overviews and progress updates, actionable content, supported task deadlines, product limitations, risks, and availability qualifiers beside the relevant entries in the Page. Put only drafting and maintenance commentary or related questions in comments or chat instead of adding boilerplate to the Page. Save these presentation rules in the Page’s durable instructions when maintaining it.` +
                (y == null || x
                  ? ``
                  : ` The user has completed the template's initial questions. Use their appended answers without repeating those questions.`),
              project: null,
              keepPageOpen: !0,
              showTemplateThinking: !0,
              onSubmitStart: () => {
                let t = e.get(R);
                t != null && e.set(R, { ...t, status: `submitting` });
              },
              onSubmitted: C
                ? () => {
                    ((w = !0),
                      E(e, () => {
                        let t = e.get(R);
                        (t != null && e.set(R, { ...t, status: `submitted` }), e.set(H, null));
                      }),
                      oe(e, W));
                  }
                : void 0,
              getPrompt: S
                ? (e) => {
                    let t = e.get(R);
                    return t?.status === `queued`
                      ? t.presentation === `draft`
                        ? t.answer
                        : t.presentation === `chat`
                          ? [i, t.answer].filter((e) => e.length > 0).join(`

`)
                          : [
                              i,
                              f.formatMessage({
                                id: `space.pageTemplates.answeredSetupInstructions`,
                                defaultMessage: `The initial setup question has already been answered in the Page setup form. Use the answer below and proceed with the Page. Do not repeat that question; ask a follow-up only if essential information is still missing.`,
                                description: `Instructions to the model before the opening question and user answer, so it proceeds without asking the same setup question again`,
                              }),
                              t.question,
                              f.formatMessage(
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
              O.aborted ||
              e(B) !== m ||
              !e(L) ||
              e(z).status !== `allowed` ||
              (S && e(R) == null) ||
              (e(N) !== A &&
                e(N).pathname !== `/space/${P}` &&
                e(N).pathname !== `/space/${_.metadata.page_id}`),
          ));
        break;
      } catch (t) {
        if (w) {
          j.warning(`Page template chat failed after submission`, { safe: {}, sensitive: { error: t } });
          break;
        }
        let n = e.get(R);
        if (!S || n == null || O.aborted) throw t;
        (e.set(R, {
          ...n,
          status:
            t instanceof Oe ||
            ((n.presentation === `chat` || n.presentation === `draft`) &&
              n.status === `submitting` &&
              !(t instanceof Ae && t.reason === `not-sent`))
              ? `unconfirmed`
              : `error`,
        }),
          await r(
            e.when(({ get: e }) => {
              let t = e(R);
              return t == null || t.status === `queued`;
            }),
            O,
          ));
      }
    }
  } catch {
    (e.get(je)?.request.pageId === P && e.set(je, null),
      O.aborted ||
        e
          .get(D)
          .danger(
            b
              ? f.formatMessage({
                  id: `space.pageSetup.startFailed`,
                  defaultMessage: `Could not start page setup. Open a new chat on the page to try again.`,
                  description: `Error when a Page is created from a template but its setup chat could not start`,
                })
              : f.formatMessage({
                  id: `space.pageTemplates.createFailed`,
                  defaultMessage: `Could not create the Page from this template`,
                  description: `Error when a prefilled Page could not be created from a template without Work access`,
                }),
            {
              errorAnalytics: {
                toastId: b ? `space.pageSetup.startFailed` : `space.pageTemplates.createFailed`,
              },
            },
          ));
  } finally {
    (T.abort(), C && oe(e, W), e.set(R, null), e.set(H, null), F(), w.stop(), e.set(Q, !1));
  }
}
var Q;
function $() {
  return ($ = e(() => {
    (F(),
      b(),
      O(),
      re(),
      te(),
      I(),
      g(),
      be(),
      ke(),
      Pe(),
      V(),
      i(),
      Ce(),
      _e(),
      f(),
      se(),
      He(),
      ee(),
      (Q = C(d, !1)));
  }))();
}
export { $e as a, Je as c, K as d, Ze as i, Ge as l, tt as n, Ye as o, Q as r, J as s, $ as t, Ue as u };
//# sourceMappingURL=template-page-creation-7c74ecaa206d.js.map
