const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./artifact-feedback-dialog-4e2ada5ff115.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./feedback-legal-notice-b9fb88ae9820.js",
      "./feedback-upload-4fe806847bde.js",
      "./feedback-upload-bf95a64d2651.js",
      "./submit-artifact-feedback-74d965eb4048.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $J as n,
  AO as r,
  B4 as i,
  CPt as a,
  Dz as o,
  IDt as s,
  Ixt as c,
  Kat as l,
  Pxt as u,
  SPt as d,
  TO as f,
  VDt as p,
  cz as m,
  eY as h,
  fPt as g,
  hot as _,
  jDt as v,
  kz as y,
  lot as b,
  nY as x,
  pPt as S,
  qat as C,
  sz as w,
  t3 as T,
  tY as E,
  vzt as D,
  xMt as O,
  yzt as k,
  z4 as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as j,
  G4n as M,
  HO as N,
  J4n as P,
  OPr as F,
  U4n as I,
  VO as L,
  gwr as R,
  jPr as z,
  xwr as B,
} from "./app-initial-5851df3f6cb1.js";
import { n as V, t as H } from "./thumb-mixed-c27b55f26fe7.js";
function U(e) {
  let n = (0, q.c)(29),
    { artifacts: r, fileSizeBytes: i, hostId: u, showArtifactSelector: d, variant: m } = e,
    g = d !== void 0 && d,
    v = m === void 0 ? `icon` : m,
    y = c(R),
    b = p(),
    S = (0, J.useRef)(null),
    C;
  n[0] !== b || n[1] !== y
    ? ((C = () => {
        y.get(_).danger(
          b.formatMessage({
            id: `feedback.dialog.submitError`,
            defaultMessage: `We couldn't submit your feedback. Please try again in a moment`,
            description: `Toast shown when feedback submission fails`,
          }),
          { errorAnalytics: { toastId: `feedback.dialog.submitError` } },
        );
      }),
      (n[0] = b),
      (n[1] = y),
      (n[2] = C))
    : (C = n[2]);
  let T = C,
    E;
  n[3] !== r || n[4] !== i || n[5] !== u || n[6] !== y || n[7] !== T
    ? ((E = async (e, t) => {
        let n = t ?? r[0],
          o,
          s,
          c;
        try {
          let [e, t, n] = await Promise.all([Promise.resolve(S.current).then(G), Z(), Q()]);
          ((o = e), ({ startFeedbackUpload: s } = t));
          let { submitArtifactFeedback: r } = n;
          c = r;
        } catch (e) {
          let t = e;
          return (
            a.error(`Failed to prepare artifact feedback submission`, { safe: {}, sensitive: { error: t } }),
            T(),
            !1
          );
        }
        let l = K(e.rating),
          d = e.details || `No additional details provided`,
          f = B(y.value);
        return (
          s({
            scope: y,
            hostId: u,
            initialCorrelationId: f,
            internalSlackMessage: void 0,
            submit: async () => {
              let t = y.get(z)?.getContext().user?.custom?.plan_type;
              return (
                await c(
                  y,
                  {
                    appInfo: o,
                    artifactType: n.artifactType,
                    classification: l,
                    description: d,
                    fileFormat: n.fileFormat,
                    fileSizeBytes: i,
                    hostId: u,
                    messageId: n.messageId,
                    turnId: n.turnId,
                    path: n.path,
                    planType: typeof t == `string` ? t : null,
                    threadId: f,
                  },
                  e,
                )
              ).feedbackId;
            },
          }),
          !0
        );
      }),
      (n[3] = r),
      (n[4] = i),
      (n[5] = u),
      (n[6] = y),
      (n[7] = T),
      (n[8] = E))
    : (E = n[8]);
  let D = E,
    O;
  n[9] !== r || n[10] !== D || n[11] !== y || n[12] !== g
    ? ((O = () => {
        ((S.current = l.appInfo.get().catch(W)),
          P(y, X, { artifacts: r, onSubmit: D, showArtifactSelector: g }));
      }),
      (n[9] = r),
      (n[10] = D),
      (n[11] = y),
      (n[12] = g),
      (n[13] = O))
    : (O = n[13]);
  let k = O;
  if (v === `menu` || v === `text`) {
    let e;
    n[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(s, {
          id: `artifactFeedback.button.giveFeedback`,
          defaultMessage: `Give feedback`,
          description: `Action that opens the artifact feedback survey from a file menu or citation file card`,
        })),
        (n[14] = e))
      : (e = n[14]);
    let r = e;
    if (v === `menu`) {
      let e;
      n[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(o, { icon: { assets: { 16: x, 20: h } } })), (n[15] = e))
        : (e = n[15]);
      let t;
      return (
        n[16] === k
          ? (t = n[17])
          : ((t = (0, Y.jsx)(f.Item, { leftIcon: e, onSelect: k, children: r })), (n[16] = k), (n[17] = t)),
        t
      );
    }
    let i;
    return (
      n[18] === k
        ? (i = n[19])
        : ((i = (0, Y.jsx)(t, { className: `text-xs`, color: `ghostTertiary`, onClick: k, children: r })),
          (n[18] = k),
          (n[19] = i)),
      i
    );
  }
  let A;
  n[20] === b
    ? (A = n[21])
    : ((A = b.formatMessage({
        id: `artifactFeedback.button.label`,
        defaultMessage: `Feedback`,
        description: `Tooltip and accessible label for the button that opens the artifact preview feedback survey`,
      })),
      (n[20] = b),
      (n[21] = A));
  let j = A,
    M;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Y.jsx)(H, { className: `icon-sm` })), (n[22] = M))
    : (M = n[22]);
  let N;
  n[23] !== j || n[24] !== k
    ? ((N = (0, Y.jsx)(t, { color: `ghost`, size: `icon`, "aria-label": j, onClick: k, children: M })),
      (n[23] = j),
      (n[24] = k),
      (n[25] = N))
    : (N = n[25]);
  let F;
  return (
    n[26] !== j || n[27] !== N
      ? ((F = (0, Y.jsx)(w, { tooltipContent: j, children: N })), (n[26] = j), (n[27] = N), (n[28] = F))
      : (F = n[28]),
    F
  );
}
function W() {
  return null;
}
function G(e) {
  return e ?? l.appInfo.get();
}
function K(e) {
  switch (e) {
    case `better`:
      return `good-result`;
    case `same`:
      return `other`;
    case `worse`:
      return `bad-result`;
  }
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = D()),
      E(),
      n(),
      u(),
      (J = k()),
      v(),
      T(),
      r(),
      A(),
      M(),
      y(),
      b(),
      m(),
      N(),
      V(),
      C(),
      j(),
      F(),
      d(),
      (Y = O()),
      S(),
      (X = i(
        async () =>
          (
            await g(
              async () => {
                let { ArtifactFeedbackDialog: e } = await import(
                  `./artifact-feedback-dialog-4e2ada5ff115.js`
                );
                return { ArtifactFeedbackDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).ArtifactFeedbackDialog,
        { errorFallback: (0, Y.jsx)(L, { onClose: (e) => I(e, X) }) },
      )),
      (Z = () =>
        g(
          () => import(`./feedback-upload-4fe806847bde.js`),
          __vite__mapDeps([7, 8, 1, 2, 3, 4, 5]),
          import.meta.url,
        )),
      (Q = () =>
        g(
          () => import(`./submit-artifact-feedback-74d965eb4048.js`),
          __vite__mapDeps([9, 1, 2, 3, 4, 5]),
          import.meta.url,
        )));
  }))();
}
export { $ as n, U as t };
//# sourceMappingURL=artifact-feedback-button-45141c7a2ec4.js.map
