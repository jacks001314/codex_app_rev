import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ASt as t,
  Cot as n,
  EPt as r,
  Jbt as i,
  Kat as a,
  Pxt as o,
  TLt as s,
  Zxt as c,
  aSt as l,
  fSt as u,
  jSt as d,
  nSt as f,
  nvt as ee,
  oIt as p,
  oSt as m,
  pIt as h,
  pLt as g,
  qat as _,
  rst as v,
  wLt as y,
  wot as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as te,
  ALt as ne,
  AMr as re,
  Dbr as ie,
  Ebr as ae,
  FCt as oe,
  GMr as se,
  GRt as ce,
  H8n as le,
  HRt as ue,
  ICt as de,
  JD as fe,
  NLt as pe,
  O9n as me,
  URt as he,
  USr as ge,
  VRt as _e,
  WHt as ve,
  WRt as ye,
  XD as be,
  XMr as xe,
  XPr as Se,
  YPr as x,
  bFr as S,
  f9t as Ce,
  fvr as we,
  gvr as Te,
  hPr as C,
  iNr as Ee,
  k9n as De,
  kvr as Oe,
  lPr as ke,
  m9t as Ae,
  mvr as je,
  p9t as Me,
  rNr as Ne,
  tNr as Pe,
  uPr as Fe,
  v8n as Ie,
  wFr as w,
  wvr as Le,
  xFr as T,
} from "./app-initial-5851df3f6cb1.js";
import { n as Re, r as ze } from "./conversational-onboarding-task-completion-dynamic-tool-8504daf4bbb9.js";
function E(e) {
  return e.get(A) ?? S(O, k);
}
function Be(e, t) {
  e.set(A, {
    declinedTasks: [],
    phase: `task`,
    selectedRole: t,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function Ve(e, t) {
  let n = t !== `csv_chart` && t !== `data_science_csv_chart`;
  e.set(A, {
    ...E(e),
    advancedCapabilitiesStatus: void 0,
    advancedCapabilitiesToSetup: void 0,
    phase: n ? `permission` : `execution`,
    selectedTask: t,
    permissionStatus: n ? `pending` : `not-requested`,
  });
}
function He(e, t) {
  let n = E(e);
  e.set(A, {
    ...n,
    declinedTasks: t == null ? n.declinedTasks : [...(n.declinedTasks ?? []), t],
    advancedCapabilitiesStatus: void 0,
    advancedCapabilitiesToSetup: void 0,
    phase: `task`,
    selectedTask: null,
    permissionStatus: `not-requested`,
  });
}
function Ue(e, t) {
  let n = E(e);
  e.set(A, {
    ...n,
    permissionStatus: t,
    computerUseAccessGranted:
      (n.selectedTask === `computer_use` && t === `allowed`) || n.computerUseAccessGranted,
  });
}
function We(e, t) {
  let n = E(e);
  if (
    n.phase !== `execution` ||
    n.selectedTask == null ||
    (n.advancedCapabilitiesToSetup == null && t.some(({ status: e }) => e === `checking`))
  )
    return;
  let r =
    n.advancedCapabilitiesToSetup ??
    t.filter(({ status: e }) => e !== `enabled` && e !== `unavailable`).map(({ id: e }) => e);
  e.set(A, {
    ...n,
    phase: `capabilities`,
    advancedCapabilitiesToSetup: r,
    advancedCapabilitiesStatus: r.length === 0 ? `completed` : (n.advancedCapabilitiesStatus ?? `pending`),
  });
}
function Ge(e) {
  let t = E(e);
  t.phase === `capabilities` && e.set(A, { ...t, advancedCapabilitiesStatus: `completed` });
}
function Ke(e, t) {
  let n = E(e);
  return n.phase !== `capabilities` && n.selectedTask === t;
}
function qe(e) {
  e.set(A, k);
}
function D(e) {
  e.set(A, { ...E(e), phase: `execution` });
}
var O, k, A, j;
function M() {
  return (M = e(() => {
    (o(),
      b(),
      T(),
      Ne(),
      (O = `electron:conversational-onboarding-workflow`),
      (k = {
        declinedTasks: [],
        phase: `role`,
        selectedRole: null,
        selectedTask: null,
        permissionStatus: `not-requested`,
      }),
      (A = Ee(O, k)),
      (j = m(n, ({ get: e }) => e(A)?.completedImport)));
  }))();
}
var N;
function P() {
  return (P = e(() => {
    (o(), b(), (N = l(n, (e) => null, void 0, { key: ({ hostId: e, threadId: t }) => `${e}:${t}` })));
  }))();
}
var F, I, L, R;
function z() {
  return (z = e(() => {
    (r(),
      (F = [`desktop_note`, `csv_chart`, `hold_next_free_hour`, `send_message_to_self`]),
      (I = s().min(1)),
      (L = p([`desktop_note`, `csv_chart`, `data_science_csv_chart`, `view_protein_structure`])),
      (R = g({ iconAppId: s().min(1).optional(), label: s().min(1) })));
  }))();
}
function B(e, t = S(H, null)) {
  let n = $e.safeParse(t);
  return n.success && n.data.hostId === e ? n.data : null;
}
function Je(e) {
  (w(H, e), V(e.conversationId));
}
function V(e) {
  let t = Ye();
  t.includes(e) || w(U, [...t, e]);
}
function Ye() {
  return Qe.catch([]).parse(S(U, []));
}
function Xe() {
  w(U, []);
}
function Ze(e) {
  return B(e.hostId)?.conversationId === e.conversationId && (w(H, null), !0);
}
var H, U, Qe, $e;
function et() {
  return (et = e(() => {
    (v(),
      r(),
      T(),
      z(),
      (H = `electron:conversational-onboarding-conversation`),
      (U = `electron:conversational-onboarding-conversation-ids`),
      (Qe = h(s().min(1).transform(i))),
      ($e = y({
        appPluginName: s().nullable().default(null),
        approvedWritableRoot: s().min(1).nullable(),
        conversationId: s().min(1).transform(i),
        hostId: s().min(1),
        selectedTask: I,
      }).refine(({ approvedWritableRoot: e, selectedTask: t }) => t !== `desktop_note` || e != null, {
        message: `Local file onboarding requires an approved writable root`,
        path: [`approvedWritableRoot`],
      })));
  }))();
}
async function tt(e, n, r) {
  if (a.conversationalOnboarding != null) {
    let i = e.query.snapshot(Y, n);
    for (await i.cancel(); ;) {
      r.throwIfAborted();
      try {
        let e = await i.fetch();
        if (e.status === `completed`) return e.completion;
        if (e.status === `absent`) break;
        return null;
      } catch (e) {
        if (!(e instanceof t)) throw e;
      }
    }
  }
  return e.get(X, n);
}
async function nt(
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
    shouldSendPermissionOverrides: l,
  },
) {
  let u = await n(),
    d = ft(s),
    f = [o],
    p = Ae(f),
    m = await Ce(f, { prompt: d }),
    h = m.cwd ?? o;
  if (p && m.projectlessOutputDirectory == null) throw Error(`No projectless output directory found`);
  let { config: g } = await x(e, r).sendRequest(
      `config/read`,
      { includeLayers: !1, cwd: h },
      { priority: `critical` },
    ),
    _ = _e({
      addedFiles: [],
      additionalDeveloperInstructions: mt.replaceAll(`{locale}`, ke()),
      agentMode: ee(`granular`, a) ? `granular` : t,
      permissionProfileId: i,
      shouldSendPermissionOverrides: l,
      collaborationMode: null,
      config: ge(g),
      configOverrides: { model: u.model, model_reasoning_effort: u.reasoning_effort },
      cwd: h,
      fileAttachments: [],
      input: [],
      model: u.model,
      projectlessOutputDirectory: m.projectlessOutputDirectory,
      reasoningEffort: u.reasoning_effort,
      serviceTier: c,
      threadSource: `conversational_onboarding`,
      turnTrigger: `conversational_onboarding`,
      threadStartKind: `conversational_onboarding`,
      workspaceKind: p ? `projectless` : `project`,
      workspaceRoots: m.workspaceRoots,
    }),
    v = await ce(e, r, _);
  v.status === `created` && V(v.conversationId);
  let y = he(e, v);
  if (y != null) throw y;
  if (v.status !== `created`) throw Error(`Task creation is not confirmed`);
  return v.conversationId;
}
function rt(e, t) {
  return (D(e), ot(e, t));
}
async function it(e, t) {
  let n = await W(e, t),
    r = K.get(n.conversationId);
  return (
    r != null && (await r, K.get(n.conversationId) === r && K.delete(n.conversationId)),
    e.set(J, n.conversationId),
    rt(e, t)
  );
}
function at(e, t) {
  return W(e, t);
}
function W(e, t) {
  let n = q.get(t.hostId) ?? 0,
    r = B(t.hostId);
  if (r?.appPluginName === t.appPluginName && r.selectedTask === t.selectedTask) return Promise.resolve(r);
  let i = G.get(t.hostId),
    a = t.appPluginName;
  if (i?.appPluginName === a && i?.generation === n && i.selectedTask === t.selectedTask) return i.promise;
  if (i?.generation === n)
    return Promise.reject(Error(`Another conversational onboarding task is already starting`));
  let o = lt(e, t, n);
  G.set(t.hostId, { appPluginName: a, generation: n, promise: o, selectedTask: t.selectedTask });
  let s = () => {
    G.get(t.hostId)?.promise === o && G.delete(t.hostId);
  };
  return (o.then(s, s), o);
}
async function ot(e, t) {
  let n = q.get(t.hostId) ?? 0,
    r = await W(e, t);
  if (
    (t.requiresCodexAppsReady === !0 && (await dt(e, t.hostId, r.conversationId)),
    (q.get(t.hostId) ?? 0) !== n)
  )
    throw Error(`Conversational onboarding start was cancelled`);
  let i = K.get(r.conversationId);
  if (i != null) return (await i, r);
  let o = (async () => {
    if (
      (await a.conversationalOnboarding?.expectTaskCompletion({
        conversationId: r.conversationId,
        hostId: t.hostId,
        isRevert: t.isRevert,
        selectedTask: t.selectedTask,
      })) !== !0 ||
      (q.get(t.hostId) ?? 0) !== n
    )
      throw Error(`Conversational onboarding start was cancelled`);
    (e.queryClient.setQueriesData(
      { queryKey: [`conversational-onboarding-completion`, r.conversationId] },
      { status: `pending` },
    ),
      await pe(e, t.hostId, r.conversationId, {
        request: {
          turnTrigger: t.isRevert ? `conversational_onboarding_revert` : `conversational_onboarding`,
          threadId: r.conversationId,
          input: [
            ...(t.skill == null ? [] : [t.skill]),
            { type: `text`, text: ft(t.prompt), text_elements: [] },
          ],
          serviceTier: t.serviceTier,
        },
      }));
  })();
  K.set(r.conversationId, o);
  try {
    await o;
  } catch (e) {
    throw (K.delete(r.conversationId), e);
  }
  return r;
}
function st(e, t) {
  q.set(t, (q.get(t) ?? 0) + 1);
  let n = B(t);
  n != null && ut(e, n).catch(() => void 0);
}
async function ct(e, t) {
  (await Promise.all(
    Ye().map((n) =>
      x(e, t)
        .archiveConversation(n, { useAppServerPins: e.get(me), source: `conversational-onboarding-complete` })
        .then(async () => {
          await a.conversationalOnboarding?.clearTaskCompletionExpectation({ hostId: t, conversationId: n });
        }),
    ),
  ),
    Xe());
}
async function lt(e, t, n) {
  let r = B(t.hostId);
  r != null && (await ut(e, r));
  let i = await nt(e, t);
  if ((q.get(t.hostId) ?? 0) !== n)
    throw (
      de(e, { conversationId: i, hostId: t.hostId, initiatedBy: `system` }),
      await a.conversationalOnboarding?.clearTaskCompletionExpectation({
        conversationId: i,
        hostId: t.hostId,
      }),
      Error(`Conversational onboarding start was cancelled`)
    );
  let o = {
    appPluginName: t.appPluginName,
    approvedWritableRoot: null,
    conversationId: i,
    hostId: t.hostId,
    selectedTask: t.selectedTask,
  };
  return (Je(o), o);
}
async function ut(e, t) {
  Ze(t) &&
    (K.delete(t.conversationId),
    de(e, { conversationId: t.conversationId, hostId: t.hostId, initiatedBy: `system` }),
    await a.conversationalOnboarding?.clearTaskCompletionExpectation({
      conversationId: t.conversationId,
      hostId: t.hostId,
    }));
}
async function dt(e, t, n) {
  let r = { hostId: t, threadId: n },
    i = null;
  try {
    if (
      (
        await Promise.race([
          e
            .when((e) => {
              let t = e.get(N, r);
              return t != null && t.status !== `starting`;
            })
            .then(() => e.get(N, r)),
          new Promise((e) => {
            i = setTimeout(() => e(null), pt);
          }),
        ])
      )?.status !== `ready`
    )
      throw Error(`Codex Apps did not become ready for onboarding`);
  } finally {
    i != null && clearTimeout(i);
  }
}
function ft(e) {
  return ie({
    addedFiles: [],
    fileAttachments: [],
    ideContext: null,
    imageAttachments: [],
    prompt: typeof e == `function` ? e() : e,
  });
}
var pt, mt, G, K, q, J, Y, X, Z;
function ht() {
  return (ht = e(() => {
    (d(),
      o(),
      v(),
      be(),
      ae(),
      Se(),
      Re(),
      oe(),
      Ie(),
      we(),
      ye(),
      ne(),
      ve(),
      Pe(),
      ue(),
      Me(),
      De(),
      _(),
      b(),
      Fe(),
      M(),
      P(),
      et(),
      (pt = 35e3),
      (mt = [
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
        `Before the final response, call ${fe} with exactly one terminal outcome. Write completion tool output in the user's app language ({locale}) using that locale's conventions for dates, times, weekday and month names, numbers, and punctuation. Localize task-specific output examples instead of copying their language or formatting. Use {"outcome":"completed","output":"<task-specific output>","url":"<created or affected resource URL>"} when the intended action happened, following any selected task output instruction exactly. Use {"outcome":"not_completed","output":"<friendly first-person sentence>"} when execution succeeded but the intended result could not be achieved. Focus a not_completed output on the user's goal. Omit technical details, tool names, raw constraints, time zones, and error text. Authentication, connector, tool, and runtime errors are execution failures; explain them briefly and stop without calling the completion tool. If the completion tool rejects a terminal result, correct it and retry. After it succeeds, do not call it again`,
        `Give one concise final response and stop`,
      ].join(`. `)),
      (G = new Map()),
      (K = new Map()),
      (q = new Map()),
      (J = u(n, null)),
      (Y = c(n, (e, { get: t }) => {
        let n = a.conversationalOnboarding,
          r = t(se),
          i = t(xe);
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
      (X = f(n, (e, { get: t, scope: n }) => {
        if (e == null) return null;
        if (a.conversationalOnboarding != null) {
          let n = t(Y, e).data;
          if (n?.status === `completed`) return n.completion;
          if (n?.status !== `absent`) return null;
        }
        let r = t(Le, { hostId: t(te, e), threadId: e });
        if (r == null) return null;
        let i = t(J) === e ? Math.max(0, r.length - 1) : 0;
        for (let e = r.length - 1; e >= i; --e) {
          let i = r[e];
          t(Oe, i);
          let a = Te(n, i);
          if (a != null)
            for (let e = a.items.length - 1; e >= 0; --e) {
              let n = a.items[e];
              if (
                (n?.type !== `dynamicToolCall` && n?.type !== `mcpToolCall`) ||
                n.tool !== `complete_conversational_onboarding_task`
              )
                continue;
              let r = t(je, { ...i, itemId: n.id });
              if (r?.type !== `dynamicToolCall` && r?.type !== `mcpToolCall`) continue;
              let o = ze(r);
              if (o != null) return o;
            }
        }
        return null;
      })),
      (Z = f(n, (e, { get: t }) => {
        if (e == null) return !1;
        let n = t(le, e);
        return n != null && n !== `inProgress` && t(X, e) == null;
      })));
  }))();
}
function gt(e, t) {
  return t === `chatgpt` || (e.apps.length === 0 && e.appTemplates.length === 0);
}
function _t(e, t, n = null) {
  return t == null || ((n == null || n.includes(t)) && !(vt.has(t) && Q.has(e)));
}
var Q, vt;
function yt() {
  return (yt = e(() => {
    (re(), (Q = new Set([`gmail`, `google-calendar`, `google-drive`])), (vt = new Set([C.FREE, C.GO])));
  }))();
}
var bt;
function $() {
  return ($ = e(() => {
    bt = {
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
  qe as A,
  P as C,
  E as D,
  A as E,
  We as F,
  D as I,
  Be as M,
  Ve as N,
  M as O,
  Ue as P,
  N as S,
  j as T,
  F as _,
  gt as a,
  L as b,
  it as c,
  ht as d,
  at as f,
  ot as g,
  rt as h,
  yt as i,
  He as j,
  Ke as k,
  Z as l,
  st as m,
  $ as n,
  _t as o,
  tt as p,
  Q as r,
  ct as s,
  bt as t,
  X as u,
  R as v,
  Ge as w,
  z as x,
  I as y,
};
//# sourceMappingURL=mojito-locales-b3a060f2af8e.js.map
