import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Kat as r,
  Pxt as i,
  SPt as a,
  VDt as o,
  aSt as s,
  fSt as c,
  hrt as l,
  iot as u,
  jDt as d,
  qat as f,
  vrt as p,
  vzt as m,
  wot as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as g,
  $Tn as ee,
  BLt as te,
  GMr as ne,
  WLt as re,
  YMr as ie,
  Ymr as _,
  aDr as v,
  eDr as y,
  ehr as b,
  fur as x,
  lRt as ae,
  nDr as S,
  nEn as C,
  oDr as w,
  oFr as T,
  pur as E,
  rEn as oe,
  tEn as D,
  tNr as O,
  uEn as se,
  uRt as ce,
  zLt as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, o as j, t as M } from "./onboarding-mail-provider-c6c346963bf3.js";
import {
  a as N,
  d as P,
  i as F,
  l as I,
  m as L,
  p as R,
  r as le,
  s as z,
  t as ue,
  u as de,
} from "./sidebar-onboarding-checklist-task-config-6a24dc34075c.js";
import { St as B, xt as fe } from "./tasks-e5a6331c5cca.js";
import { a as V, d as pe, o as me, p as H, u as U } from "./use-imported-setup-opportunity-1f7fb108e1a6.js";
var W;
function G() {
  return (G = e(() => {
    (i(), h(), (W = c(n, !1)));
  }))();
}
async function K(e, t) {
  let n = e.get(C),
    r = A(t);
  return (
    n ??
    (r == null
      ? `other`
      : await e.query
          .getOrFetch(M, r)
          .then(({ provider: e }) => e)
          .catch(() => `other`))
  );
}
async function he({
  expectedIdentity: e,
  mailProvider: t,
  role: n,
  personalizedSuggestionsEnabled: r,
  statsigClient: i,
}) {
  let a = i.getContext().user;
  if (!r || a.userID !== e.userId || a.customIDs?.account_id !== e.accountId || !i.checkGate(`2073431215`))
    return;
  let o = P(g(i, I, { disableExposureLog: !0 }), n);
  if (o != null) {
    g(i, I).get(o.parameter, []);
    try {
      await _.safePost(`/onboarding/recommendations`, {
        additionalHeaders: J,
        expectedErrorStatuses: [404, 503],
        expectedIdentity: e,
        signal: AbortSignal.timeout(1e4),
        requestBody: { provider_id: q, role: n, mail_provider: t },
      });
    } catch (e) {
      if (!(e instanceof l && [404, 503].includes(e.status))) throw e;
    }
  }
}
async function ge({
  expectedIdentity: e,
  mailProvider: t,
  role: n,
  assignedTaskIds: r,
  personalizedSuggestionsEnabled: i,
  taskConfig: a,
}) {
  let o = !i || !r.some((e) => a.personalizedTaskFallbackIds[e] != null),
    s = (r) =>
      _.safeGet(`/onboarding/recommendations`, {
        additionalHeaders: J,
        expectedErrorStatuses: [404, 503],
        expectedIdentity: e,
        signal: AbortSignal.timeout(r ? 1e4 : 6e4),
        parameters: { query: { provider_id: q, role: n, mail_provider: t, default: r } },
      }),
    c;
  try {
    ((c = await s(o).catch((e) => {
      if (o) throw e;
      return s(!0);
    })),
      c.status === `pending` && !o && (c = await s(!0)));
  } catch (e) {
    if (e instanceof l && [404, 503].includes(e.status)) return null;
    throw e;
  }
  if (
    c.status !== `ready` ||
    c.provider_id !== q ||
    c.task_ids == null ||
    c.task_ids.length === 0 ||
    c.assignment_source == null
  )
    return null;
  let u = new Set(r.flatMap((e) => [e, a.personalizedTaskFallbackIds[e] ?? e]));
  return c.task_ids.some((e) => !u.has(e))
    ? null
    : {
        assignmentSource: c.assignment_source,
        taskIds: c.task_ids,
        taskDefinitions: F({ tasks: c.tasks }).taskDefinitions,
      };
}
var q, J;
function Y() {
  return (Y = e(() => {
    (b(),
      j(),
      D(),
      y(),
      p(),
      R(),
      N(),
      (q = `codex-sidebar-onboarding-checklist`),
      (J = { "x-openai-use-sheep": `1` }));
  }))();
}
function X(e) {
  let n = (0, Z.c)(13),
    { accountId: i, authMethod: a, userId: s } = E(),
    c = o(),
    l = S(`2073431215`),
    d = a === `chatgpt`,
    f;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { disableExposureLog: !0 }), (n[0] = f))
    : (f = n[0]);
  let p = z(f),
    m = v(),
    h = w(I),
    _ = S(`2186196265`),
    y;
  return (
    n[1] !== i ||
    n[2] !== a ||
    n[3] !== l ||
    n[4] !== h ||
    n[5] !== c ||
    n[6] !== _ ||
    n[7] !== e ||
    n[8] !== p ||
    n[9] !== m ||
    n[10] !== d ||
    n[11] !== s
      ? ((y = async (n) => {
          let {
              accountId: o,
              independentStateKey: f,
              variant: p,
              signal: v,
              completedOnboardingEntrypoint: y,
              completedConversationalOnboardingTaskId: b,
              completedConversationalOnboardingTaskSnapshot: x,
              email: S,
              plan: C,
              personalizedSuggestionsEnabled: w,
              representativeRole: T,
              roles: E,
            } = n,
            D = f ?? o,
            O = e.get(Q, D) + 1;
          e.set(Q, D, O);
          let ce = e.get(se),
            k = () =>
              e.get(Q, D) === O &&
              (f != null ||
                (e.get(oe) !== `welcome` &&
                  e.get(se) === ce &&
                  (a !== `chatgpt` ||
                    (e.get(ne) === o &&
                      e.get(ie) === s &&
                      m.getContext().user.userID === s &&
                      m.getContext().user.customIDs?.account_id === o))));
          if (!l && f == null) {
            re(e, o);
            return;
          }
          let A = await K(e, S);
          v?.throwIfAborted();
          let j = d && f == null,
            M = m.getDynamicConfig(ue).value,
            N = F(M),
            { fallbackTaskIds: L, personalizedTaskFallbackIds: R, taskDefinitions: z } = N,
            B = y ?? T;
          if (!k()) return;
          let H = P(g(m, I, { disableExposureLog: !0 }), B);
          j &&
            i === o &&
            s != null &&
            he({
              expectedIdentity: { accountId: o, userId: s },
              mailProvider: A,
              role: B,
              personalizedSuggestionsEnabled: w,
              statsigClient: m,
            }).catch(we);
          let G =
            j && i === o && s != null && H != null
              ? await ge({
                  expectedIdentity: { accountId: o, userId: s },
                  mailProvider: A,
                  role: B,
                  assignedTaskIds: H.taskIds,
                  personalizedSuggestionsEnabled: w,
                  taskConfig: N,
                }).catch(Ce)
              : null;
          if (!k()) return;
          let q = j ? (G?.taskDefinitions ?? z) : z,
            J = G?.taskIds ?? H?.taskIds.map((e) => R[e] ?? e),
            Y = G?.assignmentSource ?? (H?.parameter === `general` ? `general` : `role`),
            { exposureParameter: X, itemIds: Z } = de({
              assignmentParameter: B,
              canEnableNotifications:
                r.systemPermissions != null && r.notificationPermissionsSupported !== !1,
              generalAssignment: Y === `general` ? J : void 0,
              hideGoogleWorkspaceItems: e.get(ee),
              mailProvider: A,
              plan: C,
              representativeRole: T,
              roleAssignment: Y === `role` ? J : void 0,
              roles: E,
              taskDefinitions: q,
            }),
            $ = U({
              items: Z.map(Se),
              locale: c.locale,
              mailProvider: A,
              plan: C,
              representativeRole: T,
              taskDefinitions: q,
            }),
            Te = pe({
              additionalPluginNames: x?.iconAppId == null ? void 0 : [x.iconAppId],
              items: $,
              remotePluginIdsByName: le(M),
            }),
            Ee = Array.from(new Set(Te.values()));
          v?.throwIfAborted();
          let De =
            _ && Ee.length > 0
              ? await Promise.all(
                  Ee.map(async (n) => {
                    try {
                      return {
                        isDisabled: (await fe(e, { authMethod: a, hostId: u, pluginId: n })) == null,
                        pluginId: n,
                      };
                    } catch (e) {
                      let r = e;
                      return (
                        t.error(`Failed to load sidebar onboarding remote plugin`, {
                          safe: { pluginId: n },
                          sensitive: { error: r },
                        }),
                        { isDisabled: !1, pluginId: n }
                      );
                    }
                  }),
                )
              : [];
          v?.throwIfAborted();
          let Oe = me({
              disabledRemotePluginIds: new Set(De.flatMap(xe)),
              enabled: _,
              items: $,
              remotePluginIds: Te,
            }),
            ke = e.get(W);
          X != null && (f != null || w) && !j && h.get(X, []);
          let Ae = new Set(Oe.map(be)),
            je = new Map($.map(ye)),
            Me = U({
              items: Array.from(new Set([...L, ...ae])).map(ve),
              locale: c.locale,
              mailProvider: A,
              plan: C,
              representativeRole: T,
              taskDefinitions: z,
            })
              .filter(_e)
              .map((e) => ({ id: e.id, snapshot: V(e, c) }));
          k() &&
            te(e, {
              accountId: f ?? o,
              variant: p,
              completedConversationalOnboardingTask:
                b == null
                  ? null
                  : x == null
                    ? { id: b }
                    : { id: b, snapshot: { ...x, type: `conversational_onboarding` } },
              fallbackSidebarItems: Me,
              hasCompletedClaudeImport: ke,
              sidebarItems: Z.filter((e) => !je.has(e) || Ae.has(e)).map((e) => {
                let t = je.get(e);
                return e === `review_latest_plans` || t == null ? { id: e } : { id: e, snapshot: V(t, c) };
              }),
            });
        }),
        (n[1] = i),
        (n[2] = a),
        (n[3] = l),
        (n[4] = h),
        (n[5] = c),
        (n[6] = _),
        (n[7] = e),
        (n[8] = p),
        (n[9] = m),
        (n[10] = d),
        (n[11] = s),
        (n[12] = y))
      : (y = n[12]),
    y
  );
}
function _e(e) {
  return (
    e.action === `create_project` || (e.action === `start_prompt` && (e.pluginMentions?.length ?? 0) === 0)
  );
}
function ve(e) {
  return { id: e, completed: !1, source: `sidebar` };
}
function ye(e) {
  return [e.id, e];
}
function be(e) {
  let { id: t } = e;
  return t;
}
function xe(e) {
  let { isDisabled: t, pluginId: n } = e;
  return t ? [n] : [];
}
function Se(e) {
  return { id: e, completed: !1, source: `sidebar` };
}
function Ce(e) {
  return (
    t.warning(`Failed to load sidebar onboarding recommendations`, { safe: {}, sensitive: { error: e } }),
    null
  );
}
function we(e) {
  t.warning(`Failed to prewarm sidebar onboarding recommendations`, { safe: {}, sensitive: { error: e } });
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = m()),
      i(),
      d(),
      O(),
      x(),
      G(),
      D(),
      B(),
      f(),
      h(),
      T(),
      y(),
      a(),
      R(),
      ce(),
      H(),
      Y(),
      k(),
      N(),
      L(),
      (Q = s(n, (e) => 0)));
  }))();
}
export { he as a, Y as i, X as n, W as o, K as r, G as s, $ as t };
//# sourceMappingURL=use-initialize-sidebar-onboarding-checklist-b302cd2c01bc.js.map
