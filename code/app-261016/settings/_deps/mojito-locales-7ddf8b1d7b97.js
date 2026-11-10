import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  BRt as n,
  CCt as r,
  HFt as i,
  Qst as a,
  SCt as o,
  SLt as s,
  VRt as c,
  XCt as ee,
  YCt as l,
  ZSt as u,
  ast as d,
  ist as f,
  kCt as p,
  kLt as m,
  kRt as h,
  mCt as g,
  sct as _,
  uSt as v,
  vyt as te,
  yCt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ft as ne,
  ALr as re,
  AO as ie,
  BLr as b,
  BPt as ae,
  BRr as oe,
  ESr as se,
  FBr as ce,
  Fer as le,
  Ftn as ue,
  IBr as de,
  ILr as x,
  Jwr as fe,
  LLr as pe,
  LPt as me,
  Ntn as he,
  OGt as ge,
  OO as _e,
  Ptn as ve,
  QFt as ye,
  URt as be,
  XFt as xe,
  Xnr as Se,
  Xzr as S,
  Ywr as Ce,
  ZFt as we,
  Znr as Te,
  eIt as Ee,
  eer as De,
  fRr as Oe,
  gSr as ke,
  jSr as Ae,
  kGt as C,
  kLr as je,
  mSr as Me,
  oVr as Ne,
  pRr as Pe,
  tLr as Fe,
  vSr as Ie,
  wLr as Le,
  wer as Re,
  zRr as ze,
} from "./app-initial-ad16eaadf81f.js";
import { n as Be, r as Ve } from "./conversational-onboarding-task-completion-dynamic-tool-57a5acb42248.js";
var w;
function T() {
  return (T = e(() => {
    (u(), t(), (w = o(a, (e) => null, void 0, { key: ({ hostId: e, threadId: t }) => `${e}:${t}` })));
  }))();
}
var E, D, O, k;
function A() {
  return (A = e(() => {
    (i(),
      (E = [`desktop_note`, `csv_chart`, `hold_next_free_hour`, `send_message_to_self`]),
      (D = c().min(1)),
      (O = s([`desktop_note`, `csv_chart`, `data_science_csv_chart`, `view_protein_structure`])),
      (k = h({ iconAppId: c().min(1).optional(), label: c().min(1) })));
  }))();
}
function j(e, t = x(P, null)) {
  let n = L.safeParse(t);
  return n.success && n.data.hostId === e ? n.data : null;
}
function He(e) {
  (b(P, e), M(e.conversationId));
}
function M(e) {
  let t = N();
  t.includes(e) || b(F, [...t, e]);
}
function N() {
  return I.catch([]).parse(x(F, []));
}
function Ue() {
  b(F, []);
}
function We(e) {
  return j(e.hostId)?.conversationId === e.conversationId && (b(P, null), !0);
}
var P, F, I, L;
function R() {
  return (R = e(() => {
    (_(),
      i(),
      pe(),
      A(),
      (P = `electron:conversational-onboarding-conversation`),
      (F = `electron:conversational-onboarding-conversation-ids`),
      (I = m(c().min(1).transform(v))),
      (L = n({
        appPluginName: c().nullable().default(null),
        approvedWritableRoot: c().min(1).nullable(),
        conversationId: c().min(1).transform(v),
        hostId: c().min(1),
        selectedTask: D,
      }).refine(({ approvedWritableRoot: e, selectedTask: t }) => t !== `desktop_note` || e != null, {
        message: `Local file onboarding requires an approved writable root`,
        path: [`approvedWritableRoot`],
      })));
  }))();
}
async function Ge(e, t, n) {
  if (f.conversationalOnboarding != null) {
    let r = e.query.snapshot(G, t);
    for (await r.cancel(); ;) {
      n.throwIfAborted();
      try {
        let e = await r.fetch();
        if (e.status === `completed`) return e.completion;
        if (e.status === `absent`) break;
        return null;
      } catch (e) {
        if (!(e instanceof l)) throw e;
      }
    }
  }
  return e.get(K, t);
}
async function Ke(
  e,
  {
    agentMode: t,
    loadModelConfig: n,
    hostId: r,
    permissionProfileId: i,
    permissionsRequirements: a,
    projectRoot: o,
    prompt: s,
    serviceTier: c,
    shouldSendPermissionOverrides: ee,
  },
) {
  let l = await n(),
    u = et(s),
    d = [o],
    f = ue(d),
    p = await he(d, { prompt: u }),
    m = p.cwd ?? o;
  if (f && p.projectlessOutputDirectory == null) throw Error(`No projectless output directory found`);
  let { config: h } = await ce(e, r).sendRequest(
      `config/read`,
      { includeLayers: !1, cwd: m },
      { priority: `critical` },
    ),
    g = xe({
      addedFiles: [],
      additionalDeveloperInstructions: nt.replaceAll(`{locale}`, Oe()),
      agentMode: te(`granular`, a) ? `granular` : t,
      permissionProfileId: i,
      shouldSendPermissionOverrides: ee,
      collaborationMode: null,
      config: Ne(h),
      configOverrides: { model: l.model, model_reasoning_effort: l.reasoning_effort },
      cwd: m,
      fileAttachments: [],
      input: [],
      model: l.model,
      projectlessOutputDirectory: p.projectlessOutputDirectory,
      reasoningEffort: l.reasoning_effort,
      serviceTier: c,
      threadSource: `conversational_onboarding`,
      turnTrigger: `conversational_onboarding`,
      threadStartKind: `conversational_onboarding`,
      workspaceKind: f ? `projectless` : `project`,
      workspaceRoots: p.workspaceRoots,
    }),
    _ = await Ee(e, r, g);
  _.status === `created` && M(_.conversationId);
  let v = ye(e, _);
  if (v != null) throw v;
  if (_.status !== `created`) throw Error(`Task creation is not confirmed`);
  return _.conversationId;
}
async function qe(e, t) {
  let n = await z(e, t),
    r = H.get(n.conversationId);
  return (
    r != null && (await r, H.get(n.conversationId) === r && H.delete(n.conversationId)),
    e.set(W, n.conversationId),
    B(e, t)
  );
}
function Je(e, t) {
  return z(e, t);
}
function z(e, t) {
  let n = U.get(t.hostId) ?? 0,
    r = j(t.hostId);
  if (r?.appPluginName === t.appPluginName && r.selectedTask === t.selectedTask) return Promise.resolve(r);
  let i = V.get(t.hostId),
    a = t.appPluginName;
  if (i?.appPluginName === a && i?.generation === n && i.selectedTask === t.selectedTask) return i.promise;
  if (i?.generation === n)
    return Promise.reject(Error(`Another conversational onboarding task is already starting`));
  let o = Ze(e, t, n);
  V.set(t.hostId, { appPluginName: a, generation: n, promise: o, selectedTask: t.selectedTask });
  let s = () => {
    V.get(t.hostId)?.promise === o && V.delete(t.hostId);
  };
  return (o.then(s, s), o);
}
async function B(e, t) {
  let n = U.get(t.hostId) ?? 0,
    r = await z(e, t);
  if (
    (t.requiresCodexAppsReady === !0 && (await $e(e, t.hostId, r.conversationId)),
    (U.get(t.hostId) ?? 0) !== n)
  )
    throw Error(`Conversational onboarding start was cancelled`);
  let i = H.get(r.conversationId);
  if (i != null) return (await i, r);
  let a = (async () => {
    if (
      (await f.conversationalOnboarding?.expectTaskCompletion({
        conversationId: r.conversationId,
        hostId: t.hostId,
        isRevert: t.isRevert,
        selectedTask: t.selectedTask,
      })) !== !0 ||
      (U.get(t.hostId) ?? 0) !== n
    )
      throw Error(`Conversational onboarding start was cancelled`);
    (e.queryClient.setQueriesData(
      { queryKey: [`conversational-onboarding-completion`, r.conversationId] },
      { status: `pending` },
    ),
      await ae(e, t.hostId, r.conversationId, {
        request: {
          turnTrigger: t.isRevert ? `conversational_onboarding_revert` : `conversational_onboarding`,
          threadId: r.conversationId,
          input: [
            ...(t.skill == null ? [] : [t.skill]),
            { type: `text`, text: et(t.prompt), text_elements: [] },
          ],
          serviceTier: t.serviceTier,
        },
      }));
  })();
  H.set(r.conversationId, a);
  try {
    await a;
  } catch (e) {
    throw (H.delete(r.conversationId), e);
  }
  return r;
}
function Ye(e, t) {
  U.set(t, (U.get(t) ?? 0) + 1);
  let n = j(t);
  n != null && Qe(e, n).catch(() => void 0);
}
async function Xe(e, t) {
  (await Promise.all(
    N().map((n) =>
      ce(e, t)
        .archiveConversation(n, { useAppServerPins: e.get(Se), source: `conversational-onboarding-complete` })
        .then(async () => {
          await f.conversationalOnboarding?.clearTaskCompletionExpectation({ hostId: t, conversationId: n });
        }),
    ),
  ),
    Ue());
}
async function Ze(e, t, n) {
  let r = j(t.hostId);
  r != null && (await Qe(e, r));
  let i = await Ke(e, t);
  if ((U.get(t.hostId) ?? 0) !== n)
    throw (
      C(e, { conversationId: i, hostId: t.hostId, initiatedBy: `system` }),
      await f.conversationalOnboarding?.clearTaskCompletionExpectation({
        conversationId: i,
        hostId: t.hostId,
      }),
      Error(`Conversational onboarding start was cancelled`)
    );
  let a = {
    appPluginName: t.appPluginName,
    approvedWritableRoot: null,
    conversationId: i,
    hostId: t.hostId,
    selectedTask: t.selectedTask,
  };
  return (He(a), a);
}
async function Qe(e, t) {
  We(t) &&
    (H.delete(t.conversationId),
    C(e, { conversationId: t.conversationId, hostId: t.hostId, initiatedBy: `system` }),
    await f.conversationalOnboarding?.clearTaskCompletionExpectation({
      conversationId: t.conversationId,
      hostId: t.hostId,
    }));
}
async function $e(e, t, n) {
  let r = { hostId: t, threadId: n },
    i = null;
  try {
    if (
      (
        await Promise.race([
          e
            .when((e) => {
              let t = e.get(w, r);
              return t != null && t.status !== `starting`;
            })
            .then(() => e.get(w, r)),
          new Promise((e) => {
            i = setTimeout(() => e(null), tt);
          }),
        ])
      )?.status !== `ready`
    )
      throw Error(`Codex Apps did not become ready for onboarding`);
  } finally {
    i != null && clearTimeout(i);
  }
}
function et(e) {
  return Ce({
    addedFiles: [],
    fileAttachments: [],
    ideContext: null,
    imageAttachments: [],
    prompt: typeof e == `function` ? e() : e,
  });
}
var tt, nt, V, H, U, W, G, K, rt;
function it() {
  return (it = e(() => {
    (ee(),
      u(),
      _(),
      ie(),
      fe(),
      de(),
      Be(),
      ge(),
      De(),
      Me(),
      ne(),
      me(),
      be(),
      Le(),
      we(),
      ve(),
      Te(),
      d(),
      t(),
      Pe(),
      T(),
      R(),
      (tt = 35e3),
      (nt = [
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
        `Before the final response, call ${_e} with exactly one terminal outcome. Write completion tool output in the user's app language ({locale}) using that locale's conventions for dates, times, weekday and month names, numbers, and punctuation. Localize task-specific output examples instead of copying their language or formatting. Use {"outcome":"completed","output":"<task-specific output>","url":"<created or affected resource URL>"} when the intended action happened, following any selected task output instruction exactly. Use {"outcome":"not_completed","output":"<friendly first-person sentence>"} when execution succeeded but the intended result could not be achieved. Focus a not_completed output on the user's goal. Omit technical details, tool names, raw constraints, time zones, and error text. Authentication, connector, tool, and runtime errors are execution failures; explain them briefly and stop without calling the completion tool. If the completion tool rejects a terminal result, correct it and retry. After it succeeds, do not call it again`,
        `Give one concise final response and stop`,
      ].join(`. `)),
      (V = new Map()),
      (H = new Map()),
      (U = new Map()),
      (W = p(a, null)),
      (G = g(a, (e, { get: t }) => {
        let n = f.conversationalOnboarding,
          r = t(ze),
          i = t(oe);
        return {
          enabled: n != null && r != null && i != null,
          queryKey: [`conversational-onboarding-completion`, e, r, i],
          queryFn: async () =>
            (await n?.getTaskCompletionState({ hostId: `local`, conversationId: e })) ?? {
              status: `unavailable`,
            },
          staleTime: 0,
        };
      })),
      (K = y(a, (e, { get: t, scope: n }) => {
        if (e == null) return null;
        if (f.conversationalOnboarding != null) {
          let n = t(G, e).data;
          if (n?.status === `completed`) return n.completion;
          if (n?.status !== `absent`) return null;
        }
        let r = t(se, { hostId: t(le, e), threadId: e });
        if (r == null) return null;
        let i = t(W) === e ? Math.max(0, r.length - 1) : 0;
        for (let e = r.length - 1; e >= i; --e) {
          let i = r[e];
          t(Ae, i);
          let a = Ie(n, i);
          if (a != null)
            for (let e = a.items.length - 1; e >= 0; --e) {
              let n = a.items[e];
              if (
                (n?.type !== `dynamicToolCall` && n?.type !== `mcpToolCall`) ||
                n.tool !== `complete_conversational_onboarding_task`
              )
                continue;
              let r = t(ke, { ...i, itemId: n.id });
              if (r?.type !== `dynamicToolCall` && r?.type !== `mcpToolCall`) continue;
              let o = Ve(r);
              if (o != null) return o;
            }
        }
        return null;
      })),
      (rt = y(a, (e, { get: t }) => {
        if (e == null) return !1;
        let n = t(Re, e);
        return n != null && n !== `inProgress` && t(K, e) == null;
      })));
  }))();
}
function q(e) {
  return e.get(X) ?? x(J, Y);
}
function at(e, t) {
  e.set(X, {
    declinedTasks: [],
    phase: `task`,
    selectedRole: t,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function ot(e, t) {
  let n = t !== `csv_chart` && t !== `data_science_csv_chart`;
  e.set(X, {
    ...q(e),
    advancedCapabilitiesStatus: void 0,
    advancedCapabilitiesToSetup: void 0,
    phase: n ? `permission` : `execution`,
    selectedTask: t,
    permissionStatus: n ? `pending` : `not-requested`,
  });
}
function st(e, t) {
  let n = q(e);
  e.set(X, {
    ...n,
    declinedTasks: t == null ? n.declinedTasks : [...(n.declinedTasks ?? []), t],
    advancedCapabilitiesStatus: void 0,
    advancedCapabilitiesToSetup: void 0,
    phase: `task`,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function ct(e, t) {
  let n = q(e);
  e.set(X, {
    ...n,
    permissionStatus: t,
    computerUseAccessGranted:
      (n.selectedTask === `computer_use` && t === `allowed`) || n.computerUseAccessGranted,
  });
}
function lt(e, t) {
  let n = q(e);
  if (
    n.phase !== `execution` ||
    n.selectedTask == null ||
    (n.advancedCapabilitiesToSetup == null && t.some(({ status: e }) => e === `checking`))
  )
    return;
  let r =
    n.advancedCapabilitiesToSetup ??
    t.filter(({ status: e }) => e !== `enabled` && e !== `unavailable`).map(({ id: e }) => e);
  e.set(X, {
    ...n,
    phase: `capabilities`,
    advancedCapabilitiesToSetup: r,
    advancedCapabilitiesStatus: r.length === 0 ? `completed` : (n.advancedCapabilitiesStatus ?? `pending`),
  });
}
function ut(e) {
  let t = q(e);
  t.phase === `capabilities` && e.set(X, { ...t, advancedCapabilitiesStatus: `completed` });
}
function dt(e, t) {
  let n = q(e);
  return n.phase !== `capabilities` && n.selectedTask === t;
}
function ft(e) {
  e.set(X, Y);
}
function pt(e) {
  e.set(X, { ...q(e), phase: `execution` });
}
var J, Y, X, mt;
function Z() {
  return (Z = e(() => {
    (u(),
      t(),
      pe(),
      je(),
      (J = `electron:conversational-onboarding-workflow`),
      (Y = {
        declinedTasks: [],
        phase: `role`,
        selectedRole: null,
        selectedTask: null,
        permissionStatus: `not-requested`,
      }),
      (X = re(J, Y)),
      (mt = r(a, ({ get: e }) => e(X)?.completedImport)));
  }))();
}
function ht(e, t) {
  return t === `chatgpt` || (e.apps.length === 0 && e.appTemplates.length === 0);
}
function gt(e, t, n = null) {
  return t == null || ((n == null || n.includes(t)) && !(_t.has(t) && Q.has(e)));
}
var Q, _t;
function vt() {
  return (vt = e(() => {
    (Fe(), (Q = new Set([`gmail`, `google-calendar`, `google-drive`])), (_t = new Set([S.FREE, S.GO])));
  }))();
}
var yt;
function $() {
  return ($ = e(() => {
    yt = {
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
  }))();
}
export {
  k as A,
  K as C,
  Ye as D,
  Ge as E,
  T as F,
  O as M,
  A as N,
  B as O,
  w as P,
  rt as S,
  Je as T,
  ct as _,
  ht as a,
  Xe as b,
  mt as c,
  Z as d,
  dt as f,
  ot as g,
  at as h,
  vt as i,
  D as j,
  E as k,
  X as l,
  st as m,
  $ as n,
  gt as o,
  ft as p,
  Q as r,
  ut as s,
  yt as t,
  q as u,
  lt as v,
  it as w,
  qe as x,
  pt as y,
};
//# sourceMappingURL=mojito-locales-7ddf8b1d7b97.js.map
