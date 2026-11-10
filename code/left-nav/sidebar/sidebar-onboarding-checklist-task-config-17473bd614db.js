import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $2t as t,
  AKt as n,
  B6t as r,
  BDt as i,
  BKt as a,
  Drn as o,
  G9 as s,
  Gs as c,
  HUt as l,
  Hs as u,
  IUt as d,
  J9 as f,
  K9 as p,
  M0 as m,
  MAt as h,
  Mrn as g,
  N0 as _,
  Nq as ee,
  O3t as v,
  OY as te,
  Orn as ne,
  Pq as re,
  Rnn as ie,
  SEt as ae,
  Trn as y,
  UUt as oe,
  X2t as se,
  Y2t as b,
  Y9 as ce,
  a3t as x,
  aA as le,
  aYt as ue,
  b5 as de,
  c6t as fe,
  drn as pe,
  grn as me,
  i3t as he,
  i6t as ge,
  iHt as _e,
  j0 as ve,
  kAt as ye,
  kKt as be,
  kY as xe,
  kmn as Se,
  krn as S,
  m6t as C,
  mrn as w,
  n2 as Ce,
  o3t as T,
  oA as we,
  oYt as Te,
  q9 as Ee,
  r2 as De,
  r3t as Oe,
  rHt as ke,
  rTt as Ae,
  rrn as E,
  s6t as je,
  snn as Me,
  t2 as Ne,
  v5 as Pe,
  xrn as Fe,
  y0t as Ie,
  y5 as Le,
  zDt as Re,
  zKt as ze,
} from "./app-initial-f094ef01c64d.js";
import { a as Be, o as Ve } from "./onboarding-mail-provider-6c35f2fbcf24.js";
function D(e) {
  return e.get(A) ?? b(O, k);
}
function He(e, t) {
  e.set(A, {
    declinedTasks: [],
    phase: `task`,
    selectedRole: t,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function Ue(e, t) {
  let n = t !== `csv_chart` && t !== `data_science_csv_chart`;
  e.set(A, {
    ...D(e),
    phase: n ? `permission` : `execution`,
    selectedTask: t,
    permissionStatus: n ? `pending` : `not-requested`,
  });
}
function We(e, t) {
  let n = D(e);
  e.set(A, {
    ...n,
    declinedTasks: t == null ? n.declinedTasks : [...(n.declinedTasks ?? []), t],
    phase: `task`,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function Ge(e, t) {
  e.set(A, { ...D(e), permissionStatus: t });
}
function Ke(e, t) {
  e.set(A, { ...D(e), activeFollowUp: t, phase: `permission`, permissionStatus: `pending` });
}
function qe(e, t) {
  e.set(A, { ...D(e), activeFollowUp: t, phase: `permission`, permissionStatus: `denied` });
}
function Je(e, t) {
  return (
    e.activeFollowUp?.taskId === t &&
    (e.permissionStatus === `allowed` || e.permissionStatus === `denied`)
  );
}
function Ye(e, t, n) {
  let r = D(e);
  return n === `permissions_only`
    ? r.activeFollowUp?.taskId === t
    : r.selectedTask === t && r.activeFollowUp == null;
}
function Xe(e) {
  e.set(A, k);
}
function Ze(e) {
  e.set(A, { ...D(e), phase: `execution` });
}
var O,
  k,
  A,
  Qe,
  $e = e(() => {
    (v(),
      T(),
      se(),
      ke(),
      (O = `electron:conversational-onboarding-workflow`),
      (k = {
        declinedTasks: [],
        phase: `role`,
        selectedRole: null,
        selectedTask: null,
        permissionStatus: `not-requested`,
      }),
      (A = _e(O, k)),
      (Qe = fe(x, ({ get: e }) => e(A)?.completedImport)));
  }),
  j,
  et = e(() => {
    (v(),
      T(),
      (j = je(x, (e) => null, void 0, { key: ({ hostId: e, threadId: t }) => `${e}:${t}` })));
  }),
  M,
  N,
  tt,
  nt,
  rt,
  P = e(() => {
    (E(),
      (M = [`desktop_note`, `csv_chart`, `hold_next_free_hour`, `send_message_to_self`]),
      (N = S().min(1)),
      (tt = pe([`desktop_note`, `csv_chart`, `data_science_csv_chart`, `view_protein_structure`])),
      (nt = y({ taskId: N, mode: Fe(`permissions_only`) })),
      (rt = y({ iconAppId: S().min(1).optional(), label: S().min(1) })));
  });
function F(e, t = b(I, null)) {
  let n = ut.safeParse(t);
  return n.success && n.data.hostId === e ? n.data : null;
}
function it(e) {
  (t(I, e), at(e.conversationId));
}
function at(e) {
  let n = ot();
  n.includes(e) || t(L, [...n, e]);
}
function ot() {
  return lt.catch([]).parse(b(L, []));
}
function st() {
  t(L, []);
}
function ct(e) {
  return F(e.hostId)?.conversationId === e.conversationId ? (t(I, null), !0) : !1;
}
var I,
  L,
  lt,
  ut,
  dt = e(() => {
    (r(),
      E(),
      se(),
      P(),
      (I = `electron:conversational-onboarding-conversation`),
      (L = `electron:conversational-onboarding-conversation-ids`),
      (lt = w(S().min(1).transform(Me))),
      (ut = ne({
        appPluginName: S().nullable().default(null),
        approvedWritableRoot: S().min(1).nullable(),
        conversationId: S().min(1).transform(Me),
        hostId: S().min(1),
        selectedTask: N,
      }).refine(
        ({ approvedWritableRoot: e, selectedTask: t }) => t !== `desktop_note` || e != null,
        {
          message: `Local file onboarding requires an approved writable root`,
          path: [`approvedWritableRoot`],
        },
      )));
  });
async function ft(
  e,
  {
    agentMode: t,
    hostId: n,
    permissionProfileId: r,
    permissionsRequirements: i,
    projectRoot: a,
    prompt: o,
    serviceTier: s,
    shouldSendPermissionOverrides: c,
  },
) {
  let l = Ct(o),
    u = [a],
    d = _(u),
    f = await ve(u, { prompt: l }),
    p = f.cwd ?? a;
  if (d && f.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: m } = await Oe(e, n).sendRequest(
      `config/read`,
      { includeLayers: !1, cwd: p },
      { priority: `critical` },
    ),
    h = await De(
      e,
      n,
      le({
        addedFiles: [],
        additionalDeveloperInstructions: Tt.replaceAll(`{locale}`, ze()),
        agentMode: ie(`granular`, i) ? `granular` : t,
        permissionProfileId: r,
        shouldSendPermissionOverrides: c,
        collaborationMode: null,
        config: Ie(m),
        configOverrides: { model: ye, model_reasoning_effort: `low` },
        cwd: p,
        fileAttachments: [],
        input: [],
        model: ye,
        projectlessOutputDirectory: f.projectlessOutputDirectory,
        reasoningEffort: `low`,
        serviceTier: s,
        threadSource: `conversational_onboarding`,
        turnTrigger: `conversational_onboarding`,
        threadStartKind: `conversational_onboarding`,
        workspaceKind: d ? `projectless` : `project`,
        workspaceRoots: f.workspaceRoots,
      }),
    );
  h.status === `created` && at(h.conversationId);
  let g = Ne(e, h);
  if (g != null) throw g;
  if (h.status !== `created`) throw Error(`Task creation is not confirmed`);
  return h.conversationId;
}
function pt(e, t) {
  return (Ze(e), gt(e, t));
}
async function mt(e, t) {
  let n = await R(e, t),
    r = B.get(n.conversationId);
  return (
    r != null && (await r, B.get(n.conversationId) === r && B.delete(n.conversationId)),
    e.set(H, n.conversationId),
    pt(e, t)
  );
}
function ht(e, t) {
  return R(e, t);
}
function R(e, t) {
  let n = V.get(t.hostId) ?? 0,
    r = F(t.hostId);
  if (r?.appPluginName === t.appPluginName && r.selectedTask === t.selectedTask)
    return Promise.resolve(r);
  let i = z.get(t.hostId),
    a = t.appPluginName;
  if (i?.appPluginName === a && i?.generation === n && i.selectedTask === t.selectedTask)
    return i.promise;
  if (i?.generation === n)
    return Promise.reject(Error(`Another conversational onboarding task is already starting`));
  let o = bt(e, t, n);
  z.set(t.hostId, { appPluginName: a, generation: n, promise: o, selectedTask: t.selectedTask });
  let s = () => {
    z.get(t.hostId)?.promise === o && z.delete(t.hostId);
  };
  return (o.then(s, s), o);
}
async function gt(e, t) {
  let n = await R(e, t);
  t.requiresCodexAppsReady === !0 && (await St(e, t.hostId, n.conversationId));
  let r = B.get(n.conversationId);
  if (r != null) return (await r, n);
  let i = (async () => {
    (ce(n.conversationId, { isRevert: t.isRevert, selectedTask: t.selectedTask }),
      await c(e, t.hostId, n.conversationId, {
        request: {
          turnTrigger: t.isRevert
            ? `conversational_onboarding_revert`
            : `conversational_onboarding`,
          threadId: n.conversationId,
          input: [
            ...(t.skill == null ? [] : [t.skill]),
            { type: `text`, text: Ct(t.prompt), text_elements: [] },
          ],
          serviceTier: t.serviceTier,
        },
      }));
  })();
  B.set(n.conversationId, i);
  try {
    await i;
  } catch (e) {
    throw (B.delete(n.conversationId), e);
  }
  return n;
}
function _t(e, t) {
  V.set(t, (V.get(t) ?? 0) + 1);
  let n = F(t);
  n != null && xt(e, n);
}
async function vt(e, t) {
  (await Promise.all(
    ot().map((n) =>
      Oe(e, t).archiveConversation(n, {
        useAppServerPins: e.get(Re),
        source: `conversational-onboarding-complete`,
      }),
    ),
  ),
    st());
}
function yt(e) {
  if (e == null) return null;
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t];
    if (n != null)
      for (let e = n.items.length - 1; e >= 0; --e) {
        let t = n.items[e];
        if (t?.type !== `dynamicToolCall` && t?.type !== `mcpToolCall`) continue;
        let r = f(t);
        if (r != null) return r;
      }
  }
  return null;
}
async function bt(e, t, n) {
  let r = F(t.hostId);
  r != null && xt(e, r);
  let i = await ft(e, t);
  if ((V.get(t.hostId) ?? 0) !== n)
    throw (
      p(i),
      xe(e, { conversationId: i, hostId: t.hostId, initiatedBy: `system` }),
      Error(`Conversational onboarding start was cancelled`)
    );
  let a = {
    appPluginName: t.appPluginName,
    approvedWritableRoot: null,
    conversationId: i,
    hostId: t.hostId,
    selectedTask: t.selectedTask,
  };
  return (it(a), a);
}
function xt(e, t) {
  ct(t) &&
    (p(t.conversationId),
    B.delete(t.conversationId),
    xe(e, { conversationId: t.conversationId, hostId: t.hostId, initiatedBy: `system` }));
}
async function St(e, t, n) {
  let r = { hostId: t, threadId: n },
    i = null;
  try {
    if (
      (
        await Promise.race([
          e
            .when((e) => {
              let t = e.get(j, r);
              return t != null && t.status !== `starting`;
            })
            .then(() => e.get(j, r)),
          new Promise((e) => {
            i = setTimeout(() => e(null), wt);
          }),
        ])
      )?.status !== `ready`
    )
      throw Error(`Codex Apps did not become ready for onboarding`);
  } finally {
    i != null && clearTimeout(i);
  }
}
function Ct(e) {
  return oe({
    addedFiles: [],
    fileAttachments: [],
    ideContext: null,
    imageAttachments: [],
    prompt: typeof e == `function` ? e() : e,
  });
}
var wt,
  Tt,
  z,
  B,
  V,
  H,
  U,
  Et,
  Dt = e(() => {
    (v(),
      r(),
      he(),
      Ee(),
      te(),
      Ae(),
      Ce(),
      u(),
      d(),
      we(),
      h(),
      m(),
      i(),
      l(),
      T(),
      a(),
      $e(),
      et(),
      dt(),
      (wt = 35e3),
      (Tt = [
        `Execute the selected conversational onboarding task immediately`,
        `Do not invoke an onboarding skill or interactive onboarding tool`,
        `Do not ask follow-up questions or offer task choices`,
        `Use a sensible default when optional details are unavailable`,
        `Immediately acknowledge the task before calling any tool, using one short user-visible sentence`,
        `Always write natural-language text in the user's app language ({locale}), including progress updates and final responses`,
        `Give brief progress updates in an ELI5 style without being patronizing`,
        `Use one short plain-language sentence describing the user-visible goal, not the implementation`,
        `Never mention commands, tools, code, paths, API parameters, filename checks, validation steps, or fallback logic`,
        `Do not repeat acknowledgements`,
        `Prefer the simplest reliable local toolchain already available and do not install packages`,
        `Honor every writable root approved before this conversation`,
        `Before the final response, call ${s} with exactly one terminal outcome. Write completion tool output in the user's app language ({locale}) using that locale's conventions for dates, times, weekday and month names, numbers, and punctuation. Localize task-specific output examples instead of copying their language or formatting. Use {"outcome":"completed","output":"<task-specific output>","url":"<created or affected resource URL>"} when the intended action happened, following any selected task output instruction exactly. Use {"outcome":"not_completed","output":"<friendly first-person sentence>"} when execution succeeded but the intended result could not be achieved. Focus a not_completed output on the user's goal. Omit technical details, tool names, raw constraints, time zones, and error text. Authentication, connector, tool, and runtime errors are execution failures; explain them briefly and stop without calling the completion tool. If the completion tool rejects a terminal result, correct it and retry. After it succeeds, do not call it again`,
        `Give one concise final response and stop`,
      ].join(`. `)),
      (z = new Map()),
      (B = new Map()),
      (V = new Map()),
      (H = C(x, null)),
      (U = ge(x, (e, { get: t }) => {
        if (e == null) return null;
        let n = t(ae, e);
        return yt(t(H) === e ? n?.slice(-1) : n);
      })),
      (Et = ge(x, (e, { get: t }) => {
        if (e == null) return !1;
        let n = t(ae, e)?.at(-1);
        return n != null && n.status !== `inProgress` && t(U, e) == null;
      })));
  }),
  W,
  G,
  Ot = e(() => {
    (v(), T(), (W = C(x, !1)), (G = C(x, !1)));
  });
function kt(e) {
  (e.set(J, `disabled`),
    K(),
    (q = setTimeout(() => {
      ((q = void 0), e.set(G, !1), e.set(W, !0));
    }, Mt)));
}
function At(e) {
  (K(), e.set(G, !1), e.set(W, !0));
}
function jt(e) {
  (K(), e.set(J, `not-determined`), e.set(W, !1), e.set(G, !1));
}
function K() {
  (clearTimeout(q), (q = void 0));
}
var Mt,
  q,
  J,
  Nt = e(() => {
    (v(), T(), Ot(), (Mt = 2e3), (J = C(x, `not-determined`)));
  });
function Pt(e, t, n = null) {
  return t == null || ((n == null || n.includes(t)) && !(Ft.has(t) && Y.has(e)));
}
var Y,
  Ft,
  It = e(() => {
    (n(),
      (Y = new Set([`gmail`, `google-calendar`, `google-drive`])),
      (Ft = new Set([be.FREE, be.GO])));
  });
function Lt({
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
  let u = X.safeParse(s),
    d = X.safeParse(n),
    f = u.success && u.data.length > 0 ? u.data : null,
    p = d.success && d.data.length > 0 ? d.data : null,
    m = e === void 0 ? o : e,
    h = null,
    g;
  m != null && f != null
    ? ((h = m), (g = f))
    : p == null
      ? (g = zt(c, o))
      : ((h = `general`), (g = p));
  let _ = Bt({
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
        itemIds: Bt({
          canEnableNotifications: t,
          candidateItemIds: zt(c, o),
          hideGoogleWorkspaceItems: r,
          mailProvider: i,
          plan: a,
          taskDefinitions: l,
        }),
      };
}
function Rt(e) {
  return (e == null ? void 0 : Gt[e]) ?? `review_business_and_project_plans`;
}
function zt(e, t) {
  return [...(ee(e) ? Ut : Wt), Rt(t)];
}
function Bt({
  canEnableNotifications: e,
  candidateItemIds: t,
  hideGoogleWorkspaceItems: n,
  mailProvider: r,
  plan: i,
  taskDefinitions: a,
}) {
  let o = Be(r, i);
  return Array.from(new Set(t))
    .filter((t) => {
      if (t === `enable_notifications`) return e;
      if (
        t === `create_project` ||
        t === `claude_import` ||
        t === `finish_connecting_imported_tools`
      )
        return !0;
      let r = a[t];
      return r == null
        ? !1
        : o !== `google` ||
            !Object.values(r.pluginSlots ?? {}).some((e) => !Pt(e, i) || (n && Y.has(e)));
    })
    .slice(0, Ht);
}
var Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  X,
  Kt = e(() => {
    (E(),
      Ve(),
      It(),
      re(),
      (Vt = `2214619544`),
      (Ht = 10),
      (Ut = [`enable_notifications`, `create_automation`, `triage_github_prs`, `catch_up_linear`]),
      (Wt = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `catch_up_updates_and_blockers`,
        `summarize_current_priorities`,
      ]),
      (Gt = {
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
      (X = w(S().min(1))));
  }),
  Z,
  qt = e(() => {
    Z = {
      "bg-BG": `bg`,
      "bn-BD": `bn`,
      "bs-BA": `bs`,
      "ca-ES": `ca`,
      "cs-CZ": `cs`,
      "da-DK": `da`,
      "de-DE": `de`,
      "el-GR": `el`,
      "es-419": `es-419`,
      "es-ES": `es`,
      "et-EE": `et`,
      "fi-FI": `fi`,
      "fr-CA": `fr-CA`,
      "fr-FR": `fr`,
      "gu-IN": `gu`,
      "hi-IN": `hi`,
      "hr-HR": `hr`,
      "hu-HU": `hu`,
      "hy-AM": `hy`,
      "id-ID": `id`,
      "is-IS": `is`,
      "it-IT": `it`,
      "ja-JP": `ja`,
      "ka-GE": `ka`,
      "kn-IN": `kn`,
      "ko-KR": `ko`,
      "lv-LV": `lv`,
      "mk-MK": `mk`,
      "mr-IN": `mr`,
      "ms-MY": `ms`,
      "my-MM": `my`,
      "nb-NO": `nb`,
      "nl-NL": `nl`,
      "pl-PL": `pl`,
      "pt-BR": `pt`,
      "pt-PT": `pt-PT`,
      "ro-RO": `ro`,
      "ru-RU": `ru`,
      "sk-SK": `sk`,
      "sl-SI": `sl`,
      "so-SO": `so`,
      "sq-AL": `sq`,
      "sr-RS": `sr`,
      "sv-SE": `sv`,
      "sw-TZ": `sw`,
      "ta-IN": `ta`,
      "te-IN": `te`,
      "th-TH": `th`,
      "tr-TR": `tr`,
      "uk-UA": `uk`,
      "vi-VN": `vi`,
      "zh-CN": `zh`,
      "zh-HK": `zh-HK`,
      "zh-TW": `zh-Hant`,
    };
  });
function Jt(e) {
  let t = (0, Q.c)(6),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { disableExposureLog: r } = n,
    i = r !== void 0 && r,
    a;
  t[2] === i ? (a = t[3]) : ((a = { disableExposureLog: i }), (t[2] = i), (t[3] = a));
  let { value: o } = Te($, a),
    s;
  return (t[4] === o ? (s = t[5]) : ((s = Qt(o)), (t[4] = o), (t[5] = s)), s);
}
function Yt(e) {
  let t = (0, Q.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { disableExposureLog: r } = n,
    i = r !== void 0 && r,
    a;
  return (
    t[2] === i ? (a = t[3]) : ((a = { disableExposureLog: i }), (t[2] = i), (t[3] = a)),
    Jt(a).taskDefinitions
  );
}
function Xt() {
  let e = (0, Q.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = { disableExposureLog: !0 }), (e[0] = t))
    : (t = e[0]);
  let { value: n } = Te($, t),
    r;
  return (e[1] === n ? (r = e[2]) : ((r = Zt(n)), (e[1] = n), (e[2] = r)), r);
}
function Zt(e) {
  let t = an.safeParse(e);
  return t.success ? t.data.remotePluginIds : void 0;
}
function Qt(e) {
  let t = an.safeParse(e);
  if (!t.success) return { fallbackTaskIds: Le, taskDefinitions: Pe };
  let n = { ...Pe };
  for (let [e, r] of Object.entries(t.data.tasks)) {
    if (tn.has(e)) continue;
    let t = rn.safeParse(r);
    t.success && (n[e] = { ...t.data, origin: `remote` });
  }
  let r = on.safeParse(t.data.fallback_tasks);
  return { fallbackTaskIds: r.success ? r.data : Le, taskDefinitions: n };
}
function $t(e, t, n) {
  if (e.origin === `checked_in`) return e.messages[t];
  let r = e.messages[t];
  return {
    id: `${r.id}.statsig.${n}`,
    defaultMessage: r.translations?.[Z[n] ?? n] ?? r.defaultMessage,
    description: r.description,
  };
}
function en(e) {
  let t = new Set(),
    n = e.replace(/\{([A-Za-z][A-Za-z0-9_]*)\}/g, (e, n) => (t.add(n), ``));
  return /[{}]/.test(n) ? null : t;
}
var Q,
  $,
  tn,
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    ((Q = Se()),
      E(),
      qt(),
      P(),
      ue(),
      de(),
      ($ = `1540453652`),
      (tn = new Set([
        `create_project`,
        `enable_notifications`,
        `explore_codex`,
        `finish_connecting_imported_tools`,
        `review_latest_plans`,
        `claude_import`,
        ...M,
      ])),
      (nn = y({
        id: S().min(1),
        defaultMessage: S().min(1),
        description: S().min(1),
        translations: o(S(), S().min(1)).optional(),
      })),
      (rn = y({
        is_auto_submit_enabled: me().optional(),
        instructions: S().min(1).optional(),
        pluginSlots: o(S().min(1), S().min(1)).optional(),
        messages: y({ label: nn, prompt: nn }),
      }).superRefine((e, t) => {
        [
          e.messages.label.defaultMessage,
          ...Object.values(e.messages.label.translations ?? {}),
        ].some((e) => en(e)?.size !== 0) &&
          t.addIssue({
            code: `custom`,
            message: `Label copy cannot contain variables`,
            path: [`messages`, `label`],
          });
        let n = new Set(Object.keys(e.pluginSlots ?? {})),
          r = en(e.instructions ?? ``),
          i = [
            e.messages.prompt.defaultMessage,
            ...Object.values(e.messages.prompt.translations ?? {}),
          ];
        (r == null ||
          i.some((e) => {
            let t = en(e);
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
      (an = y({
        fallback_tasks: g().optional(),
        remotePluginIds: o(S().min(1), S().min(1)).optional(),
        tasks: o(S().min(1), g()),
      })),
      (on = w(S().min(1))));
  });
export {
  Ze as $,
  ht as A,
  et as B,
  W as C,
  Et as D,
  mt as E,
  rt as F,
  Je as G,
  A as H,
  N as I,
  Xe as J,
  $e as K,
  tt as L,
  pt as M,
  M as N,
  U as O,
  nt as P,
  Ge as Q,
  P as R,
  Ot as S,
  vt as T,
  qe as U,
  Qe as V,
  D as W,
  He as X,
  We as Y,
  Ue as Z,
  Nt as _,
  sn as a,
  jt as b,
  Yt as c,
  Vt as d,
  Ke as et,
  Lt as f,
  Pt as g,
  It as h,
  Qt as i,
  _t as j,
  Dt as k,
  Z as l,
  Kt as m,
  $t as n,
  Xt as o,
  Rt as p,
  Ye as q,
  Zt as r,
  Jt as s,
  $ as t,
  qt as u,
  At as v,
  G as w,
  J as x,
  kt as y,
  j as z,
};
//# sourceMappingURL=sidebar-onboarding-checklist-task-config-17473bd614db.js.map
