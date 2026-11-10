const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./artifact-feedback-metadata-55428ec8a84e.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $rt as n,
  A3t as r,
  AMt as i,
  Amn as a,
  Cpn as o,
  Dmn as s,
  Du as c,
  Eu as l,
  H4t as u,
  JG as d,
  JK as f,
  Jit as p,
  Jrt as m,
  KG as ee,
  Kit as te,
  O3t as h,
  Omn as ne,
  Opn as re,
  QXt as g,
  Qrt as _,
  R4t as v,
  Rpn as y,
  Spn as b,
  TW as x,
  Uat as ie,
  Vat as S,
  Xrt as ae,
  Yrt as oe,
  ZG as C,
  Zrt as w,
  _Yt as T,
  _mn as E,
  aYt as D,
  du as se,
  eit as ce,
  fu as O,
  gRt as k,
  gmn as le,
  hmn as A,
  hz as j,
  iit as M,
  jXt as N,
  kMt as ue,
  kXt as de,
  kmn as P,
  lu as F,
  mYt as I,
  mz as L,
  nV as fe,
  nZt as R,
  qK as pe,
  rV as z,
  rit as me,
  sYt as he,
  tit as ge,
  uu as B,
  vit as _e,
  wW as ve,
  xRt as V,
  xpn as H,
  yRt as U,
  yit as W,
  zpn as G,
} from "./app-initial-f094ef01c64d.js";
import { n as K, t as ye } from "./thumb-mixed-74cb6fc32b2e.js";
import { i as q, n as J, r as Y, t as X } from "./artifact-file-preview-icon-70a3fde11749.js";
function be(e) {
  let t = (0, Ce.c)(63),
    { artifacts: r, onClose: i, onSubmit: a, showArtifactSelector: s } = e,
    c = s !== void 0 && s,
    l = re(),
    [u, f] = (0, Z.useState)(r?.[0]),
    p = he(`2303743841`),
    te = he(`3569283526`),
    [h, ne] = (0, Z.useState)(null),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = []), (t[0] = g)) : (g = t[0]);
  let [v, b] = (0, Z.useState)(g),
    [x, ie] = (0, Z.useState)(``),
    [S, C] = (0, Z.useState)(!0),
    [T, E] = (0, Z.useState)(!0),
    [D, ce] = (0, Z.useState)(!1),
    O = te && (u?.allowArtifactAttachment ?? !0),
    k;
  t[1] !== S ||
  t[2] !== O ||
  t[3] !== p ||
  t[4] !== x ||
  t[5] !== T ||
  t[6] !== v ||
  t[7] !== D ||
  t[8] !== i ||
  t[9] !== a ||
  t[10] !== h ||
  t[11] !== u
    ? ((k = async (e) => {
        if ((e.preventDefault(), h == null || D)) return;
        ce(!0);
        let t = !1;
        (await (async () => {
          let e = {
            attachArtifact: O && S,
            details: x.trim(),
            includeLogs: p && T,
            influences: v,
            rating: h,
          };
          t = u == null ? await a(e) : await a(e, u);
        })().finally(() => {
          ce(!1);
        }),
          t && i());
      }),
      (t[1] = S),
      (t[2] = O),
      (t[3] = p),
      (t[4] = x),
      (t[5] = T),
      (t[6] = v),
      (t[7] = D),
      (t[8] = i),
      (t[9] = a),
      (t[10] = h),
      (t[11] = u),
      (t[12] = k))
    : (k = t[12]);
  let le = k,
    A;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = { "aria-describedby": void 0 }), (t[13] = A))
    : (A = t[13]);
  let j;
  t[14] === i
    ? (j = t[15])
    : ((j = (e) => {
        e || i();
      }),
      (t[14] = i),
      (t[15] = j));
  let M;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(w, {
        children: (0, Q.jsx)(ae, {
          title: (0, Q.jsx)(me, {
            children: (0, Q.jsx)(o, {
              id: `artifactFeedback.title`,
              defaultMessage: `Help our team improve ChatGPT`,
              description: `Title of the artifact preview feedback survey dialog`,
            }),
          }),
          titleSize: `dialog`,
        }),
      })),
      (t[16] = M))
    : (M = t[16]);
  let N;
  t[17] !== r || t[18] !== u || t[19] !== c
    ? ((N =
        r != null && (r.length > 1 || c) && u != null
          ? (0, Q.jsxs)(n, {
              className: `justify-between`,
              children: [
                (0, Q.jsx)(`label`, {
                  id: `artifact-feedback-target-label`,
                  className: `text-sm font-medium select-none`,
                  htmlFor: `artifact-feedback-target`,
                  children: (0, Q.jsx)(o, {
                    id: `artifactFeedback.artifact.label`,
                    defaultMessage: `Artifact`,
                    description: `Label for selecting the generated artifact that a feedback survey is about`,
                  }),
                }),
                (0, Q.jsx)(ee, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  triggerButton: (0, Q.jsxs)(ue, {
                    id: `artifact-feedback-target`,
                    className: `max-w-full min-w-0`,
                    "aria-labelledby": `artifact-feedback-target-label artifact-feedback-target-value`,
                    color: `outline`,
                    size: `toolbar`,
                    children: [
                      (0, Q.jsx)(Se, { id: `artifact-feedback-target-value`, artifact: u }),
                      (0, Q.jsx)(_e, {
                        "aria-hidden": !0,
                        className: `icon-2xs shrink-0 text-tertiary`,
                      }),
                    ],
                  }),
                  children: r.map((e) =>
                    (0, Q.jsx)(
                      d.Item,
                      {
                        RightIcon: e.path === u.path ? pe : void 0,
                        onSelect: () => f(e),
                        children: (0, Q.jsx)(Se, { artifact: e }),
                      },
                      e.path,
                    ),
                  ),
                }),
              ],
            })
          : null),
      (t[17] = r),
      (t[18] = u),
      (t[19] = c),
      (t[20] = N))
    : (N = t[20]);
  let de;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, Q.jsx)(`legend`, {
        className: `mb-2 text-sm font-medium`,
        children: (0, Q.jsx)(o, {
          id: `artifactFeedback.rating.question`,
          defaultMessage: `How does the experience of making this file compare to what you would’ve made yourself?`,
          description: `Survey question asking the user to compare an artifact created with ChatGPT against work they would have created themselves`,
        }),
      })),
      (t[21] = de))
    : (de = t[21]);
  let P;
  t[22] === h
    ? (P = t[23])
    : ((P = we.map((e) => {
        let t = h === e;
        return (0, Q.jsxs)(
          `label`,
          {
            className: `flex cursor-interaction items-center gap-2`,
            children: [
              (0, Q.jsx)(`input`, {
                className: `peer sr-only`,
                checked: t,
                name: `artifact-feedback-rating`,
                required: !0,
                type: `radio`,
                value: e,
                onChange: () => ne(e),
              }),
              (0, Q.jsx)(`span`, {
                "aria-hidden": !0,
                className: y(
                  `flex size-4 shrink-0 items-center justify-center rounded-full border peer-focus-visible:outline-2 peer-focus-visible:outline-offset-0 peer-focus-visible:outline-ring`,
                  t ? `border-text-emphasis bg-text-emphasis` : `border-codex-radio-inactive`,
                ),
                children: t
                  ? (0, Q.jsx)(`span`, { className: `size-2 rounded-full bg-surface` })
                  : null,
              }),
              (0, Q.jsx)(`span`, { className: `text-sm`, children: (0, Q.jsx)(o, { ...Ee[e] }) }),
            ],
          },
          e,
        );
      })),
      (t[22] = h),
      (t[23] = P));
  let F;
  t[24] === P
    ? (F = t[25])
    : ((F = (0, Q.jsxs)(`fieldset`, {
        className: `flex flex-col gap-2 select-none`,
        children: [de, P],
      })),
      (t[24] = P),
      (t[25] = F));
  let I;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(`legend`, {
        className: `mb-2 text-sm font-medium`,
        children: (0, Q.jsx)(o, {
          id: `artifactFeedback.influences.question`,
          defaultMessage: `What influenced your rating? (optional)`,
          description: `Survey question introducing the optional, multiple-select reasons behind an artifact preview feedback rating`,
        }),
      })),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === v
    ? (L = t[28])
    : ((L = Te.map((e) => {
        let t = v.includes(e);
        return (0, Q.jsx)(
          `button`,
          {
            type: `button`,
            role: `checkbox`,
            "aria-checked": t,
            className: y(
              `border-default cursor-interaction flex items-center gap-1 rounded-full border px-3 py-1`,
              `focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2`,
              t
                ? `bg-primary-solid text-primary-solid`
                : `text-default hover:bg-surface-elevated/60`,
            ),
            onClick: () => {
              b((t) => (t.includes(e) ? t.filter((t) => t !== e) : [...t, e]));
            },
            children: (0, Q.jsx)(o, { ...Ee[e] }),
          },
          e,
        );
      })),
      (t[27] = v),
      (t[28] = L));
  let R;
  t[29] === L
    ? (R = t[30])
    : ((R = (0, Q.jsxs)(`fieldset`, {
        className: `mt-2 flex flex-col gap-2 select-none`,
        children: [I, (0, Q.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: L })],
      })),
      (t[29] = L),
      (t[30] = R));
  let z;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(`label`, {
        htmlFor: `artifact-feedback-details`,
        className: `text-sm font-medium select-none`,
        children: (0, Q.jsx)(o, {
          id: `artifactFeedback.details.question`,
          defaultMessage: `How else could we improve? (optional)`,
          description: `Label introducing the optional freeform text field in the artifact preview feedback survey`,
        }),
      })),
      (t[31] = z))
    : (z = t[31]);
  let B;
  t[32] === l
    ? (B = t[33])
    : ((B = l.formatMessage({
        id: `artifactFeedback.details.placeholder`,
        defaultMessage: `Share details`,
        description: `Placeholder for the optional written feedback field in the artifact preview feedback survey`,
      })),
      (t[32] = l),
      (t[33] = B));
  let V;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => ie(e.target.value)), (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] !== x || t[36] !== B
    ? ((H = (0, Q.jsxs)(_, {
        className: `mt-2`,
        children: [
          z,
          (0, Q.jsx)(ve, {
            id: `artifact-feedback-details`,
            name: `artifact-feedback-details`,
            placeholder: B,
            value: x,
            onChange: V,
            onKeyDown: xe,
          }),
        ],
      })),
      (t[35] = x),
      (t[36] = B),
      (t[37] = H))
    : (H = t[37]);
  let U;
  t[38] !== S || t[39] !== O
    ? ((U = O
        ? (0, Q.jsxs)(n, {
            className: `relative text-default select-none`,
            children: [
              (0, Q.jsx)(fe, {
                id: `artifact-feedback-attach-artifact`,
                checked: S,
                onCheckedChange: C,
              }),
              (0, Q.jsx)(`label`, {
                htmlFor: `artifact-feedback-attach-artifact`,
                children: (0, Q.jsx)(o, {
                  id: `artifactFeedback.attachArtifact.label`,
                  defaultMessage: `Attach created file to feedback`,
                  description: `Label for a checkbox that controls whether the currently previewed artifact file is attached to a feedback submission`,
                }),
              }),
            ],
          })
        : null),
      (t[38] = S),
      (t[39] = O),
      (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== p || t[42] !== T
    ? ((W = p
        ? (0, Q.jsxs)(n, {
            className: `relative text-default select-none`,
            children: [
              (0, Q.jsx)(fe, {
                id: `artifact-feedback-include-logs`,
                checked: T,
                onCheckedChange: E,
              }),
              (0, Q.jsx)(`label`, {
                htmlFor: `artifact-feedback-include-logs`,
                children: (0, Q.jsx)(o, {
                  id: `feedback.dialog.includeLogsLabel`,
                  defaultMessage: `Include current ChatGPT session logs`,
                  description: `Label for the checkbox that toggles including session logs`,
                }),
              }),
            ],
          })
        : null),
      (t[41] = p),
      (t[42] = T),
      (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Q.jsx)(se, {})), (t[44] = G))
    : (G = t[44]);
  let K;
  t[45] !== F || t[46] !== R || t[47] !== H || t[48] !== U || t[49] !== W || t[50] !== N
    ? ((K = (0, Q.jsx)(w, {
        children: (0, Q.jsxs)(_, { className: `gap-4`, children: [N, F, R, H, U, W, G] }),
      })),
      (t[45] = F),
      (t[46] = R),
      (t[47] = H),
      (t[48] = U),
      (t[49] = W),
      (t[50] = N),
      (t[51] = K))
    : (K = t[51]);
  let ye = h == null,
    q;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, Q.jsx)(o, {
        id: `artifactFeedback.submit`,
        defaultMessage: `Submit`,
        description: `Primary action that submits the artifact preview feedback survey`,
      })),
      (t[52] = q))
    : (q = t[52]);
  let J;
  t[53] !== D || t[54] !== ye
    ? ((J = (0, Q.jsx)(w, {
        children: (0, Q.jsx)(oe, {
          expandSingleButton: !1,
          children: (0, Q.jsx)(ue, {
            color: `primary`,
            disabled: ye,
            loading: D,
            type: `submit`,
            children: q,
          }),
        }),
      })),
      (t[53] = D),
      (t[54] = ye),
      (t[55] = J))
    : (J = t[55]);
  let Y;
  t[56] !== le || t[57] !== K || t[58] !== J
    ? ((Y = (0, Q.jsxs)(m, { as: `form`, className: `gap-2`, onSubmit: le, children: [M, K, J] })),
      (t[56] = le),
      (t[57] = K),
      (t[58] = J),
      (t[59] = Y))
    : (Y = t[59]);
  let X;
  return (
    t[60] !== Y || t[61] !== j
      ? ((X = (0, Q.jsx)(ge, {
          open: !0,
          size: `wide`,
          contentProps: A,
          onOpenChange: j,
          children: Y,
        })),
        (t[60] = Y),
        (t[61] = j),
        (t[62] = X))
      : (X = t[62]),
    X
  );
}
function xe(e) {
  e.key === `Enter` &&
    (e.metaKey || e.ctrlKey) &&
    (e.preventDefault(), e.currentTarget.form?.requestSubmit());
}
function Se(e) {
  let t = (0, Ce.c)(10),
    { id: n, artifact: r } = e,
    i;
  t[0] !== r.allowArtifactAttachment || t[1] !== r.artifactType || t[2] !== r.path
    ? ((i = r.allowArtifactAttachment
        ? (0, Q.jsx)(X, { iconClassName: `icon-xs`, path: r.path })
        : (0, Q.jsx)(Y, {
            className: `icon-xs shrink-0`,
            resourceKind: r.artifactType === `slides` ? `presentation` : r.artifactType,
          })),
      (t[0] = r.allowArtifactAttachment),
      (t[1] = r.artifactType),
      (t[2] = r.path),
      (t[3] = i))
    : (i = t[3]);
  let a;
  t[4] === r.label
    ? (a = t[5])
    : ((a = (0, Q.jsx)(`span`, { className: `truncate`, children: r.label })),
      (t[4] = r.label),
      (t[5] = a));
  let o;
  return (
    t[6] !== n || t[7] !== i || t[8] !== a
      ? ((o = (0, Q.jsxs)(`span`, {
          id: n,
          className: `flex min-w-0 items-center gap-2`,
          children: [i, a],
        })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
var Ce,
  Z,
  Q,
  we,
  Te,
  Ee,
  De = e(() => {
    ((Ce = P()),
      G(),
      (Z = t(a(), 1)),
      b(),
      i(),
      z(),
      M(),
      ce(),
      C(),
      x(),
      O(),
      f(),
      W(),
      q(),
      D(),
      J(),
      (Q = A()),
      (we = [`better`, `same`, `worse`]),
      (Te = [`content`, `visual_quality`, `time_saved`, `other`]),
      (Ee = H({
        better: {
          id: `artifactFeedback.rating.better`,
          defaultMessage: `Better than what I would’ve made`,
          description: `Artifact preview survey rating indicating ChatGPT produced a better file than the user would have made themselves`,
        },
        same: {
          id: `artifactFeedback.rating.same`,
          defaultMessage: `About the same`,
          description: `Artifact preview survey rating indicating ChatGPT produced a file comparable to what the user would have made themselves`,
        },
        worse: {
          id: `artifactFeedback.rating.worse`,
          defaultMessage: `Worse than what I would’ve made`,
          description: `Artifact preview survey rating indicating ChatGPT produced a worse file than the user would have made themselves`,
        },
        content: {
          id: `artifactFeedback.influences.content`,
          defaultMessage: `Content`,
          description: `Selectable artifact feedback survey reason indicating the file's content influenced the user's rating`,
        },
        visual_quality: {
          id: `artifactFeedback.influences.visualQuality`,
          defaultMessage: `Visual quality`,
          description: `Selectable artifact feedback survey reason indicating the file's appearance influenced the user's rating`,
        },
        time_saved: {
          id: `artifactFeedback.influences.timeSaved`,
          defaultMessage: `Time saved`,
          description: `Selectable artifact feedback survey reason indicating the amount of time saved influenced the user's rating`,
        },
        other: {
          id: `artifactFeedback.influences.other`,
          defaultMessage: `Other`,
          description: `Selectable artifact feedback survey reason for an influence not covered by the other available categories`,
        },
      })));
  });
function Oe({ attachArtifact: e, metadata: t, influences: n, planType: r, rating: i }) {
  let a = t.skillPluginConnectorUsageCollected ? `none` : `not_collected`;
  return {
    artifact_attached: String(e),
    artifact_feedback_influences: n.length === 0 ? `none` : [...n].sort().join(`,`),
    artifact_feedback_rating: i,
    artifact_file_format: t.fileFormat,
    artifact_file_size_bytes: t.fileSizeBytes == null ? `unknown` : String(t.fileSizeBytes),
    artifact_authoring_turn_count: String(t.authoringTurnCount),
    artifact_model_configurations:
      t.modelConfigurations.length === 0 ? `unknown` : t.modelConfigurations.join(`,`),
    artifact_type: t.artifactType,
    connectors_used: t.connectorIds.length === 0 ? a : t.connectorIds.join(`,`),
    connector_names_used: t.connectorNames.length === 0 ? a : t.connectorNames.join(`,`),
    feedback_surface: `artifact_preview`,
    plan_type: r ?? `unknown`,
    platform: t.platform,
    plugins_used: t.pluginIds.length === 0 ? a : t.pluginIds.join(`,`),
    skills_used: t.skillIds.length === 0 ? a : t.skillIds.join(`,`),
  };
}
var ke = e(() => {});
function Ae(e) {
  let t = (0, Pe.c)(31),
    { artifacts: n, fileSizeBytes: i, hostId: a, showArtifactSelector: s, variant: c } = e,
    l = s !== void 0 && s,
    u = c === void 0 ? `icon` : c,
    d = r(k),
    f = re(),
    p = (0, Fe.useRef)(null),
    m;
  t[0] !== f || t[1] !== d
    ? ((m = () => {
        d.get(N).danger(
          f.formatMessage({
            id: `feedback.dialog.submitError`,
            defaultMessage: `We couldn't submit your feedback. Please try again in a moment`,
            description: `Toast shown when feedback submission fails`,
          }),
        );
      }),
      (t[0] = f),
      (t[1] = d),
      (t[2] = m))
    : (m = t[2]);
  let ee = m,
    h;
  t[3] !== n || t[4] !== i || t[5] !== a || t[6] !== d || t[7] !== ee
    ? ((h = async (e, t) => {
        let r = t ?? n[0],
          o;
        try {
          o = (await p.current) ?? (await L.appInfo.get());
        } catch (e) {
          let t = e;
          return (
            ne.error(`Failed to load app information for artifact feedback`, {
              safe: {},
              sensitive: { error: t },
            }),
            ee(),
            !1
          );
        }
        let s = Ne(e.rating),
          c = e.details || `No additional details provided`,
          l = U(d.value);
        return (
          B({
            scope: d,
            hostId: a,
            initialCorrelationId: l,
            internalSlackMessage: void 0,
            submit: async () => {
              let t = d.get(T)?.getContext().user?.custom?.plan_type;
              return (
                await Me(
                  d,
                  {
                    appInfo: o,
                    artifactType: r.artifactType,
                    classification: s,
                    description: c,
                    fileFormat: r.fileFormat,
                    fileSizeBytes: i,
                    hostId: a,
                    path: r.path,
                    planType: typeof t == `string` ? t : null,
                    threadId: l,
                  },
                  e,
                )
              ).feedbackId;
            },
          }),
          !0
        );
      }),
      (t[3] = n),
      (t[4] = i),
      (t[5] = a),
      (t[6] = d),
      (t[7] = ee),
      (t[8] = h))
    : (h = t[8]);
  let g = h,
    _;
  t[9] !== n || t[10] !== g || t[11] !== d || t[12] !== l
    ? ((_ = () => {
        ((p.current = L.appInfo.get().catch(je)),
          ie(d, be, { artifacts: n, onSubmit: g, showArtifactSelector: l }));
      }),
      (t[9] = n),
      (t[10] = g),
      (t[11] = d),
      (t[12] = l),
      (t[13] = _))
    : (_ = t[13]);
  let v = _;
  if (u === `text`) {
    let e;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(o, {
          id: `artifactFeedback.button.giveFeedback`,
          defaultMessage: `Give feedback`,
          description: `Text button that opens the artifact feedback survey from a citation file card`,
        })),
        (t[14] = e))
      : (e = t[14]);
    let n;
    return (
      t[15] === v
        ? (n = t[16])
        : ((n = (0, $.jsx)(ue, {
            className: `text-xs`,
            color: `ghostTertiary`,
            onClick: v,
            children: e,
          })),
          (t[15] = v),
          (t[16] = n)),
      n
    );
  }
  let y;
  t[17] === f
    ? (y = t[18])
    : ((y = f.formatMessage({
        id: `artifactFeedback.button.label`,
        defaultMessage: `Feedback`,
        description: `Tooltip and accessible label for the button that opens the artifact preview feedback survey`,
      })),
      (t[17] = f),
      (t[18] = y));
  let b = y,
    x = u === `manualEditHeader` ? `ghostSecondary` : `ghost`,
    S = u === `manualEditHeader` ? `compact` : `icon`,
    ae = u === `manualEditHeader`,
    oe = u === `manualEditHeader` ? `icon-2xs` : `icon-sm`,
    C;
  t[19] === oe ? (C = t[20]) : ((C = (0, $.jsx)(ye, { className: oe })), (t[19] = oe), (t[20] = C));
  let w;
  t[21] !== b || t[22] !== v || t[23] !== C || t[24] !== x || t[25] !== S || t[26] !== ae
    ? ((w = (0, $.jsx)(ue, {
        color: x,
        size: S,
        uniform: ae,
        "aria-label": b,
        onClick: v,
        children: C,
      })),
      (t[21] = b),
      (t[22] = v),
      (t[23] = C),
      (t[24] = x),
      (t[25] = S),
      (t[26] = ae),
      (t[27] = w))
    : (w = t[27]);
  let E;
  return (
    t[28] !== b || t[29] !== w
      ? ((E = (0, $.jsx)(te, { tooltipContent: b, children: w })),
        (t[28] = b),
        (t[29] = w),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
function je() {
  return null;
}
async function Me(
  e,
  {
    appInfo: t,
    artifactType: n,
    classification: r,
    description: i,
    fileFormat: a,
    fileSizeBytes: o,
    hostId: s,
    path: l,
    planType: u,
    threadId: d,
  },
  { attachArtifact: f, includeLogs: p, influences: m, rating: ee },
) {
  let { collectArtifactFeedbackContext: te } = await le(
      async () => {
        let { collectArtifactFeedbackContext: e } = await import(
          `./artifact-feedback-metadata-55428ec8a84e.js`
        );
        return { collectArtifactFeedbackContext: e };
      },
      __vite__mapDeps([0, 1, 2, 3]),
      import.meta.url,
    ),
    { generatedSourcePaths: h, metadata: re } = te(e, {
      artifactType: n,
      fileFormat: a,
      fileSizeBytes: o,
      path: l,
    }),
    g = o != null && o > Ie,
    _ = f && !g,
    y = Oe({ attachArtifact: _, metadata: re, influences: m, planType: u, rating: ee });
  if (f && g) {
    y.artifact_attachment_omission_reason = `artifact_exceeds_preflight_size_limit`;
    let t = {
      artifact_type: n,
      artifact_file_format: a,
      artifact_file_size_bytes: o,
      attachment_limit_bytes: Ie,
      omission_reason: y.artifact_attachment_omission_reason,
    };
    (e.get(R).logEventWithStatsig?.(`codex_artifact_feedback_attachment_omitted`, t),
      ne.warning(`Artifact feedback attachment omitted because of size`, { safe: t }));
  }
  return c({
    scope: e,
    appInfo: t,
    attachmentPaths:
      _ || (p && h.length > 0)
        ? [...(_ ? [v(``, l, re.platform === `windows`)] : []), ...(p ? h : [])]
        : void 0,
    classification: r,
    description: i,
    extraTags: y,
    hostId: s,
    includeBrowserTabs: !1,
    includeDesktopLogArchive: !1,
    includeLogs: p,
    includeNativeHostDiagnostics: !1,
    threadId: d,
  });
}
function Ne(e) {
  switch (e) {
    case `better`:
      return `good-result`;
    case `same`:
      return `other`;
    case `worse`:
      return `bad-result`;
  }
}
var Pe,
  Fe,
  $,
  Ie,
  Le = e(() => {
    ((Pe = P()),
      h(),
      (Fe = t(a(), 1)),
      b(),
      i(),
      S(),
      de(),
      p(),
      F(),
      l(),
      K(),
      g(),
      j(),
      V(),
      I(),
      s(),
      u(),
      De(),
      ke(),
      ($ = A()),
      E(),
      (Ie = 15e7));
  });
export { Le as n, Ae as t };
//# sourceMappingURL=artifact-feedback-button-9394715d94e5.js.map
