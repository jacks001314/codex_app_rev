import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  PBt as n,
  Pit as r,
  Qst as i,
  RFt as a,
  SCt as o,
  XOt as s,
  Yst as c,
  ZSt as l,
  ast as u,
  ist as d,
  jit as f,
  kCt as p,
  okt as m,
  zFt as h,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cjr as g,
  Djr as _,
  Ejr as v,
  Ekn as ee,
  KBr as y,
  KPt as b,
  Nkn as x,
  Skn as te,
  Tkn as ne,
  ZPt as re,
  _Ft as S,
  bLr as ie,
  bjr as C,
  gFt as ae,
  iRr as w,
  imr as T,
  qPt as oe,
  rmr as E,
  tyr as D,
  wLr as O,
  wkn as k,
  xjr as A,
  zRr as se,
} from "./app-initial-ad16eaadf81f.js";
import { n as j, r as M, s as N } from "./onboarding-mail-provider-a8dcd0c12760.js";
import {
  a as P,
  d as ce,
  i as le,
  l as F,
  m as I,
  p as L,
  r as ue,
  s as R,
  t as de,
  u as fe,
} from "./sidebar-onboarding-checklist-task-config-e8a3ac49ae4c.js";
import { Mt as pe, Nt as z } from "./tasks-fe81dbed229b.js";
import { a as B, d as me, o as he, p as V, u as H } from "./use-imported-setup-opportunity-53da455c18d8.js";
var U;
function W() {
  return (W = e(() => {
    (l(), t(), (U = p(i, !1)));
  }))();
}
async function G(e, t) {
  let n = e.get(ne),
    r = M(t);
  return n ?? (r == null ? `other` : await e.query.getOrFetch(j, r).catch(() => `other`)) ?? `other`;
}
async function K({
  expectedIdentity: e,
  mailProvider: t,
  role: n,
  personalizedSuggestionsEnabled: r,
  statsigClient: i,
}) {
  let a = i.getContext().user;
  if (!r || a.userID !== e.userId || a.customIDs?.account_id !== e.accountId || !i.checkGate(`2073431215`))
    return;
  let o = ce(C(i, F, { disableExposureLog: !0 }), n);
  if (o != null) {
    C(i, F).get(o.parameter, []);
    try {
      await w.safePost(`/onboarding/recommendations`, {
        additionalHeaders: J,
        expectedErrorStatuses: [404, 503],
        expectedIdentity: e,
        signal: AbortSignal.timeout(1e4),
        requestBody: { provider_id: q, role: n, mail_provider: t },
      });
    } catch (e) {
      if (!(e instanceof f && [404, 503].includes(e.status))) throw e;
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
      w.safeGet(`/onboarding/recommendations`, {
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
    if (e instanceof f && [404, 503].includes(e.status)) return null;
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
  let l = new Set(r.flatMap((e) => [e, a.personalizedTaskFallbackIds[e] ?? e]));
  return c.task_ids.some((e) => !l.has(e))
    ? null
    : {
        assignmentSource: c.assignment_source,
        taskIds: c.task_ids,
        taskDefinitions: le({ tasks: c.tasks }).taskDefinitions,
      };
}
var q, J;
function Y() {
  return (Y = e(() => {
    (D(),
      N(),
      k(),
      A(),
      r(),
      L(),
      P(),
      (q = `codex-sidebar-onboarding-checklist`),
      (J = { "x-openai-use-sheep": `1` }));
  }))();
}
function X(e) {
  let t = (0, Z.c)(13),
    { accountId: n, authMethod: r, userId: i } = T(),
    a = m(),
    o = g(`2073431215`),
    s = r === `chatgpt`,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { disableExposureLog: !0 }), (t[0] = l))
    : (l = t[0]);
  let u = R(l),
    f = v(),
    p = _(F),
    y = g(`2186196265`),
    b;
  return (
    t[1] !== n ||
    t[2] !== r ||
    t[3] !== o ||
    t[4] !== p ||
    t[5] !== a ||
    t[6] !== y ||
    t[7] !== e ||
    t[8] !== u ||
    t[9] !== f ||
    t[10] !== s ||
    t[11] !== i
      ? ((b = async (t) => {
          let {
              accountId: l,
              independentStateKey: u,
              variant: m,
              signal: g,
              completedOnboardingEntrypoint: _,
              completedConversationalOnboardingTaskId: v,
              completedConversationalOnboardingTaskSnapshot: b,
              email: ne,
              plan: S,
              personalizedSuggestionsEnabled: w,
              representativeRole: T,
              roles: E,
            } = t,
            D = u ?? l,
            O = e.get(Q, D) + 1;
          e.set(Q, D, O);
          let k = e.get(x),
            A = () =>
              e.get(Q, D) === O &&
              (u != null ||
                (e.get(ee) !== `welcome` &&
                  e.get(x) === k &&
                  (r !== `chatgpt` ||
                    (e.get(se) === l &&
                      e.get(ie) === i &&
                      f.getContext().user.userID === i &&
                      f.getContext().user.customIDs?.account_id === l))));
          if (!o && u == null) {
            re(e, l);
            return;
          }
          let j = await G(e, ne);
          g?.throwIfAborted();
          let M = s && u == null,
            N = f.getDynamicConfig(de).value,
            P = le(N),
            { fallbackTaskIds: I, personalizedTaskFallbackIds: L, taskDefinitions: R } = P,
            z = _ ?? T;
          if (!A()) return;
          let V = ce(C(f, F, { disableExposureLog: !0 }), z);
          M &&
            n === l &&
            i != null &&
            K({
              expectedIdentity: { accountId: l, userId: i },
              mailProvider: j,
              role: z,
              personalizedSuggestionsEnabled: w,
              statsigClient: f,
            }).catch(we);
          let W =
            M && n === l && i != null && V != null
              ? await ge({
                  expectedIdentity: { accountId: l, userId: i },
                  mailProvider: j,
                  role: z,
                  assignedTaskIds: V.taskIds,
                  personalizedSuggestionsEnabled: w,
                  taskConfig: P,
                }).catch(Ce)
              : null;
          if (!A()) return;
          let q = M ? (W?.taskDefinitions ?? R) : R,
            J = W?.taskIds ?? V?.taskIds.map((e) => L[e] ?? e),
            Y = W?.assignmentSource ?? (V?.parameter === `general` ? `general` : `role`),
            { exposureParameter: X, itemIds: Z } = fe({
              assignmentParameter: z,
              canEnableNotifications:
                d.systemPermissions != null && d.notificationPermissionsSupported !== !1,
              generalAssignment: Y === `general` ? J : void 0,
              hideGoogleWorkspaceItems: e.get(te),
              mailProvider: j,
              plan: S,
              representativeRole: T,
              roleAssignment: Y === `role` ? J : void 0,
              roles: E,
              taskDefinitions: q,
            }),
            $ = H({
              items: Z.map(Se),
              locale: a.locale,
              mailProvider: j,
              plan: S,
              representativeRole: T,
              taskDefinitions: q,
            }),
            Te = me({
              additionalPluginNames: b?.iconAppId == null ? void 0 : [b.iconAppId],
              items: $,
              remotePluginIdsByName: ue(N),
            }),
            Ee = Array.from(new Set(Te.values()));
          g?.throwIfAborted();
          let De =
            y && Ee.length > 0
              ? await Promise.all(
                  Ee.map(async (t) => {
                    try {
                      return {
                        isDisabled: (await pe(e, { authMethod: r, hostId: c, pluginId: t })) == null,
                        pluginId: t,
                      };
                    } catch (e) {
                      let n = e;
                      return (
                        h.error(`Failed to load sidebar onboarding remote plugin`, {
                          safe: { pluginId: t },
                          sensitive: { error: n },
                        }),
                        { isDisabled: !1, pluginId: t }
                      );
                    }
                  }),
                )
              : [];
          g?.throwIfAborted();
          let Oe = he({
              disabledRemotePluginIds: new Set(De.flatMap(xe)),
              enabled: y,
              items: $,
              remotePluginIds: Te,
            }),
            ke = e.get(U);
          X != null && (u != null || w) && !M && p.get(X, []);
          let Ae = new Set(Oe.map(be)),
            je = new Map($.map(ye)),
            Me = H({
              items: Array.from(new Set([...I, ...ae])).map(ve),
              locale: a.locale,
              mailProvider: j,
              plan: S,
              representativeRole: T,
              taskDefinitions: R,
            })
              .filter(_e)
              .map((e) => ({ id: e.id, snapshot: B(e, a) }));
          A() &&
            oe(e, {
              accountId: u ?? l,
              variant: m,
              completedConversationalOnboardingTask:
                v == null
                  ? null
                  : b == null
                    ? { id: v }
                    : { id: v, snapshot: { ...b, type: `conversational_onboarding` } },
              fallbackSidebarItems: Me,
              hasCompletedClaudeImport: ke,
              sidebarItems: Z.filter((e) => !je.has(e) || Ae.has(e)).map((e) => {
                let t = je.get(e);
                return e === `review_latest_plans` || t == null ? { id: e } : { id: e, snapshot: B(t, a) };
              }),
            });
        }),
        (t[1] = n),
        (t[2] = r),
        (t[3] = o),
        (t[4] = p),
        (t[5] = a),
        (t[6] = y),
        (t[7] = e),
        (t[8] = u),
        (t[9] = f),
        (t[10] = s),
        (t[11] = i),
        (t[12] = b))
      : (b = t[12]),
    b
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
    h.warning(`Failed to load sidebar onboarding recommendations`, { safe: {}, sensitive: { error: e } }),
    null
  );
}
function we(e) {
  h.warning(`Failed to prewarm sidebar onboarding recommendations`, { safe: {}, sensitive: { error: e } });
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = n()),
      l(),
      s(),
      O(),
      E(),
      W(),
      k(),
      z(),
      u(),
      t(),
      y(),
      A(),
      a(),
      L(),
      S(),
      V(),
      Y(),
      b(),
      P(),
      I(),
      (Q = o(i, (e) => 0)));
  }))();
}
export { K as a, Y as i, X as n, U as o, G as r, W as s, $ as t };
//# sourceMappingURL=use-initialize-sidebar-onboarding-checklist-559a7dc5394e.js.map
