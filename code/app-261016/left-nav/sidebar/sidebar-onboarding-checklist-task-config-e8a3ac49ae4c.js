import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  HFt as n,
  LRt as r,
  NLt as i,
  PBt as a,
  Qst as o,
  VRt as s,
  ZSt as c,
  ezt as l,
  hRt as u,
  kCt as d,
  kLt as f,
  kRt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Sjr as m,
  _Ft as h,
  _kn as g,
  gFt as _,
  hFt as v,
  vkn as ee,
  xjr as te,
} from "./app-initial-ad16eaadf81f.js";
import { o as ne, s as re } from "./onboarding-mail-provider-a8dcd0c12760.js";
import {
  N as ie,
  i as y,
  k as ae,
  n as oe,
  o as b,
  r as se,
  t as ce,
} from "./mojito-locales-7ddf8b1d7b97.js";
var x, S;
function C() {
  return (C = e(() => {
    (c(), t(), (x = d(o, !1)), (S = d(o, !1)));
  }))();
}
function le(e) {
  (e.set(D, `disabled`),
    w(),
    (E = setTimeout(() => {
      ((E = void 0), e.set(S, !1), e.set(x, !0));
    }, T)));
}
function ue(e) {
  (w(), e.set(S, !1), e.set(x, !0));
}
function de(e) {
  (w(), e.set(D, `not-determined`), e.set(x, !1), e.set(S, !1));
}
function w() {
  (clearTimeout(E), (E = void 0));
}
var T, E, D;
function O() {
  return (O = e(() => {
    (c(), t(), C(), (T = 2e3), (D = d(o, `not-determined`)));
  }))();
}
function k(e, t) {
  for (let n of t == null ? [`general`] : [t, `general`]) {
    let t = z.safeParse(e.get(n, []));
    if (t.success && t.data.length > 0) return { parameter: n, taskIds: t.data };
  }
  return null;
}
function A({
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
  return [...(g(e) ? I : L), j(t)];
}
function N({
  canEnableNotifications: e,
  candidateItemIds: t,
  hideGoogleWorkspaceItems: n,
  mailProvider: r,
  plan: i,
  taskDefinitions: a,
}) {
  let o = ne(r, i);
  return Array.from(new Set(t))
    .filter((t) => {
      if (t === `enable_notifications`) return e;
      if (t === `create_project` || t === `claude_import` || t === `finish_connecting_imported_tools`)
        return !0;
      let r = a[t];
      return r == null
        ? !1
        : o !== `google` || !Object.values(r.pluginSlots ?? {}).some((e) => !b(e, i) || (n && se.has(e)));
    })
    .slice(0, F);
}
var P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    (n(),
      re(),
      y(),
      ee(),
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
      (z = f(s().min(1))));
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
  let { value: o } = m(K, a),
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
  let { value: n } = m(K, t),
    r;
  return (e[1] === n ? (r = e[2]) : ((r = H(n)), (e[1] = n), (e[2] = r)), r);
}
function H(e) {
  let t = X.safeParse(e);
  return t.success ? t.data.remotePluginIds : void 0;
}
function U(e) {
  let t = X.safeParse(e);
  if (!t.success) return { fallbackTaskIds: _, personalizedTaskFallbackIds: {}, taskDefinitions: v };
  let n = { ...v },
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
  return { personalizedTaskFallbackIds: r, fallbackTaskIds: i.success ? i.data : _, taskDefinitions: n };
}
function me(e, t, n) {
  if (e.origin === `checked_in`) return e.messages[t];
  let r = e.messages[t];
  return {
    id: `${r.id}.statsig.${n}`,
    defaultMessage: r.translations?.[ce[n] ?? n] ?? r.defaultMessage,
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
    ((G = a()),
      n(),
      oe(),
      ie(),
      te(),
      h(),
      (K = `1540453652`),
      (q = new Set([
        `create_project`,
        `enable_notifications`,
        `explore_codex`,
        `finish_connecting_imported_tools`,
        `review_latest_plans`,
        `claude_import`,
        ...ae,
      ])),
      (J = p({
        id: s().min(1),
        defaultMessage: s().min(1),
        description: s().min(1),
        translations: r(s(), s().min(1)).optional(),
      })),
      (Y = p({
        kind: u(`prompt`).optional(),
        is_auto_submit_enabled: i().optional(),
        instructions: s().min(1).optional(),
        pluginSlots: r(s().min(1), s().min(1)).optional(),
        messages: p({ label: J, prompt: J }),
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
      (X = p({
        fallback_tasks: l().optional(),
        remotePluginIds: r(s().min(1), s().min(1)).optional(),
        tasks: r(s().min(1), l()),
      })),
      (Z = f(s().min(1))),
      (Q = p({ kind: u(`personalized_prompt`), fallbackTaskId: s().min(1) })));
  }))();
}
export {
  de as _,
  $ as a,
  x as b,
  fe as c,
  k as d,
  j as f,
  le as g,
  ue as h,
  U as i,
  P as l,
  O as m,
  me as n,
  pe as o,
  B as p,
  H as r,
  V as s,
  K as t,
  A as u,
  D as v,
  S as x,
  C as y,
};
//# sourceMappingURL=sidebar-onboarding-checklist-task-config-e8a3ac49ae4c.js.map
