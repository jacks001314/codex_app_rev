import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cot as n,
  EPt as r,
  Pxt as i,
  RLt as a,
  TLt as o,
  _It as s,
  fSt as c,
  pIt as l,
  pLt as u,
  vzt as d,
  wot as f,
  xLt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  JTn as m,
  YTn as h,
  cRt as g,
  eDr as _,
  lRt as v,
  tDr as y,
  uRt as ee,
} from "./app-initial-5851df3f6cb1.js";
import { a as te, o as ne } from "./onboarding-mail-provider-c6c346963bf3.js";
import {
  _ as re,
  i as ie,
  n as ae,
  o as b,
  r as oe,
  t as x,
  x as se,
} from "./mojito-locales-b3a060f2af8e.js";
var S, C;
function w() {
  return (w = e(() => {
    (i(), f(), (S = c(n, !1)), (C = c(n, !1)));
  }))();
}
function ce(e) {
  (e.set(k, `disabled`),
    E(),
    (O = setTimeout(() => {
      ((O = void 0), e.set(C, !1), e.set(S, !0));
    }, D)));
}
function T(e) {
  (E(), e.set(C, !1), e.set(S, !0));
}
function le(e) {
  (E(), e.set(k, `not-determined`), e.set(S, !1), e.set(C, !1));
}
function E() {
  (clearTimeout(O), (O = void 0));
}
var D, O, k;
function A() {
  return (A = e(() => {
    (i(), f(), w(), (D = 2e3), (k = c(n, `not-determined`)));
  }))();
}
function ue(e, t) {
  for (let n of t == null ? [`general`] : [t, `general`]) {
    let t = z.safeParse(e.get(n, []));
    if (t.success && t.data.length > 0) return { parameter: n, taskIds: t.data };
  }
  return null;
}
function de({
  assignmentParameter: e,
  canEnableNotifications: t,
  generalAssignment: n,
  hideGoogleWorkspaceItems: r,
  mailProvider: i,
  plan: a,
  representativeRole: o,
  roleAssignment: s,
  roles: c,
  taskDefinitions: l,
}) {
  let u = z.safeParse(s),
    d = z.safeParse(n),
    f = u.success && u.data.length > 0 ? u.data : null,
    p = d.success && d.data.length > 0 ? d.data : null,
    m = e === void 0 ? o : e,
    h = null,
    g;
  m != null && f != null ? ((h = m), (g = f)) : p == null ? (g = M(c, o)) : ((h = `general`), (g = p));
  let _ = N({
    canEnableNotifications: t,
    candidateItemIds: g,
    hideGoogleWorkspaceItems: r,
    mailProvider: i,
    plan: a,
    taskDefinitions: l,
  });
  return _.length > 0
    ? { exposureParameter: h, itemIds: _ }
    : {
        exposureParameter: h,
        itemIds: N({
          canEnableNotifications: t,
          candidateItemIds: M(c, o),
          hideGoogleWorkspaceItems: r,
          mailProvider: i,
          plan: a,
          taskDefinitions: l,
        }),
      };
}
function j(e) {
  return (e == null ? void 0 : R[e]) ?? `review_business_and_project_plans`;
}
function M(e, t) {
  return [...(m(e) ? I : L), j(t)];
}
function N({
  canEnableNotifications: e,
  candidateItemIds: t,
  hideGoogleWorkspaceItems: n,
  mailProvider: r,
  plan: i,
  taskDefinitions: a,
}) {
  let o = te(r, i);
  return Array.from(new Set(t))
    .filter((t) => {
      if (t === `enable_notifications`) return e;
      if (t === `create_project` || t === `claude_import` || t === `finish_connecting_imported_tools`)
        return !0;
      let r = a[t];
      return r == null
        ? !1
        : o !== `google` || !Object.values(r.pluginSlots ?? {}).some((e) => !b(e, i) || (n && oe.has(e)));
    })
    .slice(0, F);
}
var P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    (r(),
      ne(),
      ie(),
      h(),
      (P = `2214619544`),
      (F = 10),
      (I = [`enable_notifications`, `create_automation`, `triage_github_prs`, `catch_up_linear`]),
      (L = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `catch_up_updates_and_blockers`,
        `summarize_current_priorities`,
      ]),
      (R = {
        product_management: `review_roadmaps_and_projects`,
        design: `review_design_briefs`,
        marketing: `review_campaigns`,
        sales: `review_account_plans`,
        finance: `review_forecasts`,
        operations: `review_operating_plans`,
        people_hr: `review_people_plans_and_policies`,
        legal: `review_contracts_and_policies`,
        student: `review_class_materials`,
      }),
      (z = l(o().min(1))));
  }))();
}
function V(e) {
  let t = (0, G.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { disableExposureLog: r } = n,
    i = r !== void 0 && r,
    a;
  t[2] === i ? (a = t[3]) : ((a = { disableExposureLog: i }), (t[2] = i), (t[3] = a));
  let { value: o } = y(K, a),
    s;
  return (t[4] === o ? (s = t[5]) : ((s = U(o)), (t[4] = o), (t[5] = s)), s);
}
function fe(e) {
  let t = (0, G.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { disableExposureLog: r } = n,
    i = r !== void 0 && r,
    a;
  return (
    t[2] === i ? (a = t[3]) : ((a = { disableExposureLog: i }), (t[2] = i), (t[3] = a)),
    V(a).taskDefinitions
  );
}
function pe() {
  let e = (0, G.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { disableExposureLog: !0 }), (e[0] = t))
    : (t = e[0]);
  let { value: n } = y(K, t),
    r;
  return (e[1] === n ? (r = e[2]) : ((r = H(n)), (e[1] = n), (e[2] = r)), r);
}
function H(e) {
  let t = X.safeParse(e);
  return t.success ? t.data.remotePluginIds : void 0;
}
function U(e) {
  let t = X.safeParse(e);
  if (!t.success) return { fallbackTaskIds: v, personalizedTaskFallbackIds: {}, taskDefinitions: g };
  let n = { ...g },
    r = {};
  for (let [e, i] of Object.entries(t.data.tasks)) {
    if (q.has(e)) continue;
    let t = Q.safeParse(i);
    if (t.success) {
      ((r[e] = t.data.fallbackTaskId), delete n[e]);
      continue;
    }
    let a = Y.safeParse(i);
    a.success && (n[e] = { ...a.data, origin: `remote` });
  }
  let i = Z.safeParse(t.data.fallback_tasks);
  return { personalizedTaskFallbackIds: r, fallbackTaskIds: i.success ? i.data : v, taskDefinitions: n };
}
function me(e, t, n) {
  if (e.origin === `checked_in`) return e.messages[t];
  let r = e.messages[t];
  return {
    id: `${r.id}.statsig.${n}`,
    defaultMessage: r.translations?.[x[n] ?? n] ?? r.defaultMessage,
    description: r.description,
  };
}
function W(e) {
  let t = new Set(),
    n = e.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (e, n) => (t.add(n), ``));
  return /[{}]/.test(n) ? null : t;
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((G = d()),
      r(),
      ae(),
      se(),
      _(),
      ee(),
      (K = `1540453652`),
      (q = new Set([
        `create_project`,
        `enable_notifications`,
        `explore_codex`,
        `finish_connecting_imported_tools`,
        `review_latest_plans`,
        `claude_import`,
        ...re,
      ])),
      (J = u({
        id: o().min(1),
        defaultMessage: o().min(1),
        description: o().min(1),
        translations: p(o(), o().min(1)).optional(),
      })),
      (Y = u({
        kind: t(`prompt`).optional(),
        is_auto_submit_enabled: s().optional(),
        instructions: o().min(1).optional(),
        pluginSlots: p(o().min(1), o().min(1)).optional(),
        messages: u({ label: J, prompt: J }),
      }).superRefine((e, t) => {
        [e.messages.label.defaultMessage, ...Object.values(e.messages.label.translations ?? {})].some(
          (e) => W(e)?.size !== 0,
        ) &&
          t.addIssue({
            code: `custom`,
            message: `Label copy cannot contain variables`,
            path: [`messages`, `label`],
          });
        let n = new Set(Object.keys(e.pluginSlots ?? {})),
          r = W(e.instructions ?? ``),
          i = [e.messages.prompt.defaultMessage, ...Object.values(e.messages.prompt.translations ?? {})];
        (r == null ||
          i.some((e) => {
            let t = W(e);
            if (t == null) return !0;
            let i = new Set([...r, ...t]);
            return i.size !== n.size || Array.from(n).some((e) => !i.has(e));
          })) &&
          t.addIssue({
            code: `custom`,
            message: `Prompt and instruction variables must exactly match pluginSlots`,
            path: [`pluginSlots`],
          });
      })),
      (X = u({
        fallback_tasks: a().optional(),
        remotePluginIds: p(o().min(1), o().min(1)).optional(),
        tasks: p(o().min(1), a()),
      })),
      (Z = l(o().min(1))),
      (Q = u({ kind: t(`personalized_prompt`), fallbackTaskId: o().min(1) })));
  }))();
}
export {
  le as _,
  $ as a,
  S as b,
  fe as c,
  ue as d,
  j as f,
  ce as g,
  T as h,
  U as i,
  P as l,
  A as m,
  me as n,
  pe as o,
  B as p,
  H as r,
  V as s,
  K as t,
  de as u,
  k as v,
  C as x,
  w as y,
};
//# sourceMappingURL=sidebar-onboarding-checklist-task-config-6a24dc34075c.js.map
