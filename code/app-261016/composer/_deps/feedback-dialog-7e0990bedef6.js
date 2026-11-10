import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  RFt as n,
  Vrt as r,
  ast as i,
  ist as a,
  qrt as o,
  sct as s,
  zFt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as l,
  Ak as u,
  CIr as d,
  Cer as f,
  D5n as p,
  FAn as m,
  Jk as h,
  Kk as g,
  LAn as _,
  Nk as v,
  Pk as y,
  SIr as b,
  Yk as x,
  eer as S,
  jk as C,
  lvr as w,
  oan as T,
  qk as E,
  uvr as D,
} from "./app-initial-ad16eaadf81f.js";
import { n as O, t as k } from "./feedback-submission-dialog-ddbbf7aeb6e7.js";
import { n as A, t as j } from "./feedback-upload-e44dae392a31.js";
async function M(e, t, n) {
  let { hostId: r, cwd: i } = t == null ? { hostId: w(), cwd: null } : e.get(_, t);
  if (!(await N(e, r, i))) return;
  let s = a.appInfo.get().catch(() => null),
    u = t == null ? null : e.get(f, t),
    p =
      a.workspaceFiles.createTemporaryFile != null && a.workspaceFiles.releaseTemporaryFile != null
        ? y(e, { threadId: t, chatGptConversationId: null, hostId: r })
        : null;
  l(e, k, {
    initialDetails: n,
    browserTabsAvailable: a.debug != null,
    processMemoryDiagnosticsAvailable: a.processMemory != null,
    documentAvailable: p != null,
    documentScope: p?.documentScope,
    onSubmit: async (n) => {
      try {
        let o = (await s) ?? (await a.appInfo.get());
        if (!(await N(e, r, i))) return !1;
        let c = {
          ...n.extraTags,
          feedback_surface: `dots`,
          feedback_title: (0, P.default)(`Dots feedback: ${n.description.replace(/\s+/g, ` `).trim()}`, {
            length: 120,
            omission: `…`,
          }),
        };
        return (
          u != null && (c.turn_id = u),
          A({
            scope: e,
            hostId: r,
            initialCorrelationId: t,
            internalSlackMessage: void 0,
            submit: async () => {
              let i = {
                ...n,
                scope: e,
                appInfo: o,
                hostId: r,
                threadId: t,
                extraTags: c,
                includeDesktopLogArchive: !0,
                includeNativeHostDiagnostics: n.includeLogs,
                captureDocuments: n.includeDocument ? p?.captureDocuments : void 0,
              };
              return (r === `durable` ? await E(e, i) : await x(i)).feedbackId;
            },
          }),
          !0
        );
      } catch (t) {
        return (
          c.error(`Failed to prepare Dots feedback`, { safe: {}, sensitive: { error: t } }),
          e
            .get(o)
            .danger(
              e
                .get(d)
                .formatMessage({
                  id: `feedback.dialog.submitError`,
                  defaultMessage: `We couldn't submit your feedback. Please try again in a moment`,
                  description: `Toast shown when feedback submission fails`,
                }),
              { errorAnalytics: { toastId: `feedback.dialog.submitError` } },
            ),
          !1
        );
      }
    },
  });
}
async function N(e, t, n) {
  let r = await u(e, t, n);
  return (
    r != null &&
      e
        .get(o)
        .info(
          e
            .get(d)
            .formatMessage(
              {
                id: `orbit.feedback.unavailable`,
                defaultMessage: `{reason, select, policy {Your organization has turned off feedback} configuration {Feedback is turned off in your configuration} other {Couldn't verify feedback permissions. Please try again}}`,
                description: `Notice explaining why the Dots feedback form is unavailable`,
              },
              { reason: r },
            ),
        ),
    r == null
  );
}
var P;
function F() {
  return (F = e(() => {
    ((P = t(T(), 1)), s(), S(), p(), r(), D(), C(), O(), j(), h(), m(), b(), v(), i(), n(), g());
  }))();
}
F();
export { M as openOrbitFeedbackDialog };
//# sourceMappingURL=feedback-dialog-7e0990bedef6.js.map
