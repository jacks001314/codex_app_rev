import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { BLt as t, EPt as n, TLt as r, fLt as i, oIt as a, pLt as o } from "./app-shared-bbfeca5e5737.js";
import {
  QDr as s,
  XDr as c,
  fBn as l,
  hBn as u,
  mBn as d,
  pBn as f,
  yVn as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e, t, n, r) {
  try {
    s(e, l, {
      decisionId: t.decisionId,
      policyVersion: t.policyVersion,
      presentationId: t.presentationId,
      actionAttemptId: r,
      recommendationType: v[t.recommendationId],
      stage: n,
      surface: t.surface,
      position: t.position,
    });
  } catch {}
}
function h(e, t, n) {
  if (t && n)
    try {
      s(e, l, {
        stage: f.CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_STARTED,
        actionAttemptId: t,
        mfaRequestId: n,
      });
    } catch {}
}
function g(e, t) {
  t && m(e, t, f.CHATGPT_SECURITY_RECOMMENDATION_STAGE_ACTION_COMPLETED, t.actionAttemptId);
}
var _, v;
function y() {
  return (y = e(() => {
    (p(),
      n(),
      c(),
      d.CHATGPT_SECURITY_RECOMMENDATION_SURFACE_SECURITY_SETTINGS,
      (_ = o({
        recommendationId: a([`add_passkey`, `add_sms_backup`, `add_email`, `review_sessions`]),
        decisionId: r().optional(),
        policyVersion: r().optional(),
        presentationId: t(),
        actionAttemptId: t(),
        position: i().int().positive(),
        surface: a(d),
      })),
      (v = {
        add_passkey: u.CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_PASSKEY,
        add_sms_backup: u.CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_SMS_BACKUP,
        add_email: u.CHATGPT_SECURITY_RECOMMENDATION_TYPE_ADD_EMAIL,
        review_sessions: u.CHATGPT_SECURITY_RECOMMENDATION_TYPE_REVIEW_SESSIONS,
      }));
  }))();
}
export { _ as i, g as n, y as r, h as t };
//# sourceMappingURL=recommendation-telemetry-aea6128a1440.js.map
