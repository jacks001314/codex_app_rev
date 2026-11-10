import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as n,
  Kat as r,
  SPt as i,
  hot as a,
  lot as o,
  qat as s,
  rst as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  G4n as l,
  J4n as u,
  JO as d,
  QO as f,
  V8n as p,
  YO as m,
  ZO as h,
  aIr as g,
  dk as _,
  fDn as v,
  fk as y,
  mDn as b,
  oIr as x,
  omr as S,
  pk as C,
  smr as w,
  uk as T,
  v8n as E,
  ztn as D,
} from "./app-initial-5851df3f6cb1.js";
import { n as O, t as k } from "./feedback-submission-dialog-9e377942c726.js";
import { n as A, t as j } from "./feedback-upload-bf95a64d2651.js";
async function M(e, t, i) {
  let { hostId: o, cwd: s } = t == null ? { hostId: S(), cwd: null } : e.get(b, t);
  if (!(await N(e, o, s))) return;
  let c = r.appInfo.get().catch(() => null),
    l = t == null ? null : e.get(p, t),
    d =
      r.workspaceFiles.createTemporaryFile != null && r.workspaceFiles.releaseTemporaryFile != null
        ? f(e, { threadId: t, chatGptConversationId: null, hostId: o })
        : null;
  u(e, k, {
    initialDetails: i,
    browserTabsAvailable: r.debug != null,
    processMemoryDiagnosticsAvailable: r.processMemory != null,
    documentAvailable: d != null,
    documentScope: d?.documentScope,
    onSubmit: async (i) => {
      try {
        let n = (await c) ?? (await r.appInfo.get());
        if (!(await N(e, o, s))) return !1;
        let a = {
          ...i.extraTags,
          feedback_surface: `dots`,
          feedback_title: (0, P.default)(`Dots feedback: ${i.description.replace(/\s+/g, ` `).trim()}`, {
            length: 120,
            omission: `…`,
          }),
        };
        return (
          l != null && (a.turn_id = l),
          A({
            scope: e,
            hostId: o,
            initialCorrelationId: t,
            internalSlackMessage: void 0,
            submit: async () => {
              let r = {
                ...i,
                scope: e,
                appInfo: n,
                hostId: o,
                threadId: t,
                extraTags: a,
                includeDesktopLogArchive: !0,
                includeNativeHostDiagnostics: i.includeLogs,
                captureDocuments: i.includeDocument ? d?.captureDocuments : void 0,
              };
              return (o === `durable` ? await _(e, r) : await C(r)).feedbackId;
            },
          }),
          !0
        );
      } catch (t) {
        return (
          n.error(`Failed to prepare Dots feedback`, { safe: {}, sensitive: { error: t } }),
          e
            .get(a)
            .danger(
              e
                .get(x)
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
  let r = await d(e, t, n);
  return (
    r != null &&
      e
        .get(a)
        .info(
          e
            .get(x)
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
    ((P = t(D(), 1)), c(), E(), l(), o(), w(), m(), O(), j(), y(), v(), g(), h(), s(), i(), T());
  }))();
}
F();
export { M as openOrbitFeedbackDialog };
//# sourceMappingURL=feedback-dialog-c8222a9abbd7.js.map
