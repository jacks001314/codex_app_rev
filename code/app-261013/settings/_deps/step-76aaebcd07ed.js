const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./kickoff-55e559fd4ee0.js",
      "./kickoff-8dafcd2a2ca9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./submit-chatgpt-completion-365e080589d9.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  CPt as i,
  Cot as a,
  DIt as o,
  EPt as s,
  Hxt as c,
  IDt as l,
  Ixt as u,
  Pxt as d,
  QSt as f,
  Rxt as p,
  SPt as m,
  TLt as h,
  VDt as g,
  Vxt as _,
  _It as v,
  _wt as y,
  aSt as b,
  bz as x,
  cSt as S,
  fPt as C,
  fSt as w,
  gwt as T,
  iot as E,
  jDt as D,
  kDt as O,
  nSt as k,
  oIt as A,
  oSt as j,
  owt as ee,
  pIt as te,
  pLt as M,
  pPt as N,
  qft as P,
  rst as F,
  swt as I,
  t3 as L,
  vht as ne,
  vzt as re,
  wot as ie,
  xLt as ae,
  xMt as oe,
  xz as se,
  yzt as ce,
  zxt as le,
} from "./app-shared-bbfeca5e5737.js";
import {
  BTn as ue,
  Byr as de,
  DPr as fe,
  Fin as pe,
  GMr as me,
  GTn as he,
  Gk as ge,
  Hin as _e,
  Iur as ve,
  JZn as ye,
  Jlr as be,
  Jyr as xe,
  KAn as Se,
  Kk as Ce,
  LPr as we,
  OPr as Te,
  Qyr as R,
  RPr as Ee,
  Rin as De,
  SZn as Oe,
  UAn as ke,
  Uyr as Ae,
  VTn as je,
  VZn as Me,
  WXn as Ne,
  XTn as Pe,
  YMr as Fe,
  YTn as Ie,
  aIr as Le,
  ekt as Re,
  fur as ze,
  hzt as Be,
  iZn as Ve,
  jjn as He,
  kZn as Ue,
  mzt as We,
  oFr as Ge,
  oIr as Ke,
  pZn as qe,
  pur as Je,
  qlr as Ye,
  tEn as Xe,
  tNr as Ze,
  uEn as Qe,
  vkt as $e,
  xZn as et,
  yjn as tt,
} from "./app-initial-5851df3f6cb1.js";
import { $v as nt, ny as rt } from "./app-primary-fe8a450b3b04.js";
import {
  E as it,
  S as at,
  a as ot,
  f as st,
  s as ct,
  w as lt,
} from "./conversational-onboarding-task-completion-dynamic-tool-8504daf4bbb9.js";
import {
  $ as ut,
  A as dt,
  Ct as ft,
  H as pt,
  J as mt,
  K as ht,
  M as gt,
  N as _t,
  O as vt,
  S as yt,
  St as bt,
  T as xt,
  Z as St,
  ct as Ct,
  dt as wt,
  ft as Tt,
  it as Et,
  j as Dt,
  lt as Ot,
  mt as kt,
  pt as At,
  rt as jt,
  ut as Mt,
  v as Nt,
  w as Pt,
  y as Ft,
} from "./tasks-e5a6331c5cca.js";
import { n as It, t as Lt } from "./streaming-text-7dc4acdfd418.js";
import { n as Rt, r as zt } from "./task-icon-8aa86d02d13b.js";
import {
  A as Bt,
  M as Vt,
  N as Ht,
  O as z,
  T as Ut,
  _ as Wt,
  a as Gt,
  b as Kt,
  c as qt,
  d as Jt,
  f as Yt,
  i as Xt,
  k as Zt,
  l as Qt,
  m as $t,
  n as en,
  o as tn,
  p as nn,
  r as rn,
  s as an,
  t as on,
  u as sn,
  v as cn,
  w as ln,
  x as un,
  y as dn,
} from "./onboarding-task-environment-ab12def96532.js";
function fn(e) {
  (e.set(U, { status: `idle` }), e.set(V, (e) => e + 1));
}
function pn(e, t, n) {
  let r = e.get(V);
  e.get(_n) !== r && (e.set(_n, r), t ? at(e, n) : st(e, n));
}
async function mn(e) {
  let t = e.getOwnValue(B),
    n = () => e.get(z) === `enabled` && e.get(me) === t.accountId && e.get(Fe) === t.userId,
    r = e.get(H);
  if (r == null || e.get(vn) || !n()) return !1;
  let i = e.get(V);
  e.set(vn, !0);
  try {
    let t = await ke(e, r, { forceFull: !0, isTemporaryChat: e.get(et, r) });
    if (e.get(V) === i && n()) return (He(e, t), !0);
  } catch {
  } finally {
    e.set(vn, !1);
  }
  return !1;
}
async function hn(e, t, n) {
  let r = () => e.get(V) === n,
    i = (t) => {
      r() && e.set(U, { status: `conversation`, conversationId: t });
    };
  try {
    let { submitSheepOnboardingKickoff: n } = await C(
      async () => {
        let { submitSheepOnboardingKickoff: e } = await import(`./kickoff-55e559fd4ee0.js`);
        return { submitSheepOnboardingKickoff: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
    if ((t.throwIfAborted(), !fe(e, `3294441402`))) {
      e.set(U, { status: `error` });
      return;
    }
    let a = e.get(Ke),
      o = await n(e, {
        flowId: `desktop_setup`,
        conversationTitle: a.formatMessage({
          id: `electron.onboarding.desktopRole.conversationTitle`,
          defaultMessage: `Set up desktop`,
          description: `Title of the conversation used for desktop onboarding`,
        }),
        completion: {
          prompt: a.formatMessage({
            id: `electron.onboarding.desktopRole.prompt`,
            defaultMessage: `Help me set up ChatGPT for my work`,
            description: `Hidden user request starting desktop onboarding`,
          }),
          realAuthor: `onboarding:desktop_setup`,
          conversationMode: `primary_assistant`,
          isTemporaryChat: !1,
          startupSignal: t,
          requireDispatchAcceptance: !0,
          onClientThreadIdChange: i,
          onServerThreadIdChange: i,
          messageMetadata: { is_visually_hidden_from_conversation: !0 },
        },
      });
    r() &&
      !t.aborted &&
      (o == null
        ? e.set(U, { status: `error` })
        : (e.get(H) ?? i(o.serverConversationId ?? o.conversationId)));
  } catch {
    r() && !t.aborted && e.get(U).status !== `conversation` && e.set(U, { status: `error` });
  }
}
var B, V, gn, _n, vn, H, U;
function W() {
  return (W = e(() => {
    (d(),
      Ze(),
      tt(),
      Se(),
      Le(),
      ie(),
      Te(),
      ot(),
      Zt(),
      N(),
      (B = f(`DILOnboardingScope`, { parent: a, retain: { autoDispose: !1 } })),
      (V = w(B, 0)),
      (gn = w(B, -1)),
      (_n = w(B, -1)),
      (vn = w(B, !1)),
      (H = j(B, ({ get: e }) => {
        let t = e(U);
        return t.status === `conversation` ? e(qe, t.conversationId) : null;
      })),
      (U = w(B, () => ({ status: `idle` }), {
        onMount: (e, t) =>
          t.watch(({ get: n }) => {
            let r = n(V),
              i = t.getOwnValue(B);
            if (
              n(z) !== `enabled` ||
              n(me) !== i.accountId ||
              n(Fe) !== i.userId ||
              t.get(U).status !== `idle`
            )
              return;
            let a = new AbortController();
            return (
              e({ status: `loading` }),
              t.get(gn) !== r && (t.set(gn, r), lt(t)),
              hn(t, a.signal, r),
              () => {
                (a.abort(), t.get(U).status === `loading` && e({ status: `idle` }));
              }
            );
          }),
      })));
  }))();
}
function yn(e) {
  let t = R(e?.metadata?.onboarding);
  if (
    e?.author.role === `assistant` &&
    e.id != null &&
    e.status === `finished_successfully` &&
    t?.flow_id === `desktop_setup` &&
    t.experience_id === `desktop_setup_v1` &&
    t.state_id === `tasks` &&
    t.component_id === `starter_tasks`
  ) {
    let n = wn.safeParse(R(t.component_inputs)?.starter_tasks),
      r = Ne(e.metadata).find((e) => e.type === `dil` && e.name === `onboarding_starter_tasks`);
    if (n.success && r != null)
      return {
        status: `tasks`,
        sourceMessageId: e.id,
        tasks: n.data,
        introduction: typeof r.start_idx == `number` ? Ae(e).slice(0, r.start_idx).trim() : ``,
      };
  }
  if (
    e?.author.role === `assistant` &&
    e.id != null &&
    e.status === `finished_successfully` &&
    t?.flow_id === `desktop_setup` &&
    t.experience_id === `desktop_setup_v1` &&
    t.component_id === `native_task_step`
  ) {
    let n = Cn.safeParse(R(t.component_inputs)?.native_task_step);
    if (n.success) {
      let t = Ne(e.metadata).find(
        (e) => e.type === `client_defined_widget` && e.category === `onboarding_native_task_step`,
      );
      return {
        status: `task-step`,
        sourceMessageId: e.id,
        data: n.data,
        assistantText: typeof t?.end_idx == `number` ? Ae(e).slice(t.end_idx).trim() : void 0,
      };
    }
  }
  return null;
}
var bn, xn, Sn, Cn, wn, G, Tn;
function En() {
  return (En = e(() => {
    (d(),
      Ve(),
      xe(),
      s(),
      tt(),
      rt(),
      Zt(),
      W(),
      (bn = M({ id: h().min(1), label: h(), icon: h() })),
      (xn = M({
        operationId: h().min(1),
        status: A([`completed`, `cancelled`, `failed`, `not_completed`, `interrupted`]),
        assistantText: h().nullish(),
        connected: v().nullish(),
      })),
      (Sn = o(`kind`, [
        M({ kind: r(`native`), taskId: h().min(1) }),
        M({ kind: r(`plugin`), pluginName: h().min(1), pluginId: h().min(1).nullish(), prompt: h().min(1) }),
      ])),
      (Cn = M({
        intro: h(),
        step: o(`view`, [
          M({
            view: r(`execute`),
            task: bn,
            execution: Sn.nullable().catch(null),
            completionResult: h().nullish(),
          }),
          M({
            view: r(`result`),
            task: bn,
            outcome: xn,
            presentation: o(`kind`, [
              M({ kind: r(`native`), taskId: h().min(1) }),
              M({ kind: r(`plugin`), pluginName: h(), pluginId: h().nullish() }),
            ]),
            intro: h(),
            completionMessage: h(),
            completionLinkLabel: h().optional(),
          }),
          M({ view: A([`error`, `incomplete`]), task: bn, outcome: xn }),
          M({ view: r(`finished`), completedTask: bn.nullish(), skipped: v() }),
        ]),
        events: ae(h(), h().min(1)),
      })),
      (wn = M({
        variant: r(`desktop_selection`),
        heading: h(),
        action: M({ type: r(`onboarding`), event: h().min(1), skip_event: h().min(1).nullish() }),
        tasks: te(M({ id: h().min(1), label: h().min(1), icon: h().min(1) })).max(24),
      }).refine(({ tasks: e }) => new Set(e.map((e) => e.id)).size === e.length)),
      (G = j(B, ({ get: e }) => {
        let t = e(U);
        if (e(z) !== `enabled`) return { status: `idle` };
        if (e(vn)) return { status: `loading` };
        if (t.status !== `conversation`) return t;
        let { conversationId: n } = t,
          r = e(Me, n),
          i = e(nt, n),
          a = e(Oe, n),
          o = a == null ? null : e(Ue, n)?.[a]?.message,
          s = R(o?.metadata?.onboarding),
          c = Ne(o?.metadata).filter(
            (e) => e.category === `ask_user_input` || e.category === `ask_user_input_v2`,
          ),
          l = c.length === 1 ? c[0] : null;
        return i?.kind === `questions` &&
          i.isOnboarding &&
          !i.isDynamicFeedback &&
          i.questions.length === 1 &&
          i.questions[0]?.type === `single_select` &&
          i.nativeRequestMetadata == null &&
          i.nativeSubmission == null &&
          i.questionnaire == null &&
          i.widgetVariant == null &&
          i.messageId === a &&
          o?.author.role === `assistant` &&
          o.status === `finished_successfully` &&
          s?.flow_id === `desktop_setup` &&
          s.experience_id === `desktop_setup_v1` &&
          s.state_id === `role` &&
          s.component_id === `selectable_options` &&
          typeof s.submit_event == `string` &&
          s.submit_event.length > 0 &&
          l?.type === `client_defined_widget` &&
          l.category === `ask_user_input_v2` &&
          R(l.data)?.feature === `onboarding`
          ? { status: `ready`, request: i, submitEvent: s.submit_event }
          : (yn(o) ??
              (r === `error`
                ? { status: `error` }
                : {
                    status: ye(r) ? `loading` : `unsupported`,
                    diagnostic: s ?? (o == null ? null : Ae(o)),
                  }));
      })),
      (Tn = j(B, ({ get: e }) => {
        let t = e(U);
        if (t.status !== `conversation` || e(z) !== `enabled`) return [];
        let n = e(Ue, t.conversationId);
        if (n == null) return [];
        let r = de({ mapping: n, current_node: e(Oe, t.conversationId) }),
          i = [],
          a = ``,
          o = !1,
          s = null;
        for (let e of r) {
          let t = yn(e);
          if (t != null) {
            ((t.status === `tasks` || a === ``) && (a = t.sourceMessageId),
              t.status === `tasks` && ((o = !1), (s = t.tasks.heading)));
            let e = t.status === `task-step` && t.data.step.view !== `finished` ? t.data.step.task : null,
              n = t.status === `task-step` && !!t.data.intro && t.data.intro !== s;
            (i.push({ sequenceId: a, view: t, showSelectedAnswer: e != null && !o, showIntroduction: n }),
              t.status === `task-step` && t.data.intro && (s = t.data.intro),
              e != null && (o = !0));
            continue;
          }
          let n = R(R(e.metadata?.onboarding)?.framework),
            r = i.at(-1);
          if (e.author.role === `user` && r != null && n?.source_message_id === r.view.sourceMessageId) {
            if (r.view.status === `tasks`) {
              let t = R(n.inputs)?.taskId;
              n.event === r.view.tasks.action.event && typeof t == `string`
                ? ((r.selectedTaskId = t), (r.answer = Ae(e)), (o = !0))
                : r.view.tasks.action.skip_event != null &&
                  n.event === r.view.tasks.action.skip_event &&
                  (r.answer = Ae(e));
            } else
              n.event !== r.view.data.events.report &&
                typeof n.event == `string` &&
                Object.values(r.view.data.events).includes(n.event) &&
                (r.answer = Ae(e));
          }
        }
        return i;
      })));
  }))();
}
function Dn(e, t) {
  let n = null,
    r = !1,
    i = (n, r) => {
      let i = e.get(U),
        a = e.getOwnValue(B);
      return (
        t.isActive() &&
        n != null &&
        i.status === `conversation` &&
        i.conversationId === n &&
        e.get(H) === r &&
        e.get(z) === `enabled` &&
        e.get(me) === a.accountId &&
        e.get(Fe) === a.userId
      );
    };
  return {
    get recovering() {
      return r;
    },
    abort: () => {
      (n?.abort(), (n = null));
    },
    send: async (a) => {
      let { sourceMessageId: o } = a,
        s = e.get(U),
        c = e.get(H);
      if (r || c == null || !i(s.status === `conversation` ? s.conversationId : null, c) || !t.canSend(o))
        return;
      let l = new AbortController();
      ((n = l), t.setStatus(o, `pending`));
      let u = () =>
          n === l && !l.signal.aborted && i(s.status === `conversation` ? s.conversationId : null, c),
        d = () => u() && t.isSourceCurrent(o);
      try {
        let { submitChatGPTCompletion: n, submitChatGPTLocalFunctionResult: r } = await C(
          async () => {
            let { submitChatGPTCompletion: e, submitChatGPTLocalFunctionResult: t } = await import(
              `./submit-chatgpt-completion-365e080589d9.js`
            );
            return { submitChatGPTCompletion: e, submitChatGPTLocalFunctionResult: t };
          },
          __vite__mapDeps([5, 6, 2, 3, 4, 7]),
          import.meta.url,
        );
        if (!u()) return;
        if (!d()) {
          t.setStatus(o, `error`);
          return;
        }
        let i = {
          conversationId: c,
          parentMessageId: o,
          isTemporaryChat: e.get(et, c),
          startupSignal: l.signal,
          isSubmissionCurrent: d,
          isRequestCurrent: u,
          requireDispatchAcceptance: !0,
          onCompletion: (e) => {
            u() && t.setStatus(o, e === `completed` ? `submitted` : `error`);
          },
        };
        (a.kind === `automatic`
          ? await r(e, {
              ...i,
              callId: o,
              toolName: `internal_onboarding_client_action_result`,
              result: { event: a.event, inputs: a.inputs },
            })
          : await n(e, {
              ...i,
              prompt: a.prompt,
              conversationMode: `primary_assistant`,
              messageMetadata: {
                onboarding: {
                  framework: { state: `answer`, source_message_id: o, event: a.event, inputs: a.inputs },
                },
              },
            })) == null &&
          u() &&
          t.setStatus(o, `error`);
      } catch {
        u() && t.setStatus(o, `error`);
      }
    },
    recover: async () => {
      if (r || !t.isActive()) return !1;
      let a = e.get(U),
        o = e.get(H);
      if (o == null || !i(a.status === `conversation` ? a.conversationId : null, o)) return !1;
      ((r = !0), n?.abort(), (n = null));
      try {
        return (await mn(e)) && i(a.status === `conversation` ? a.conversationId : null, o);
      } finally {
        r = !1;
      }
    },
  };
}
function On() {
  return (On = e(() => {
    (Ze(), tt(), Zt(), W(), N());
  }))();
}
var kn;
function An() {
  return (An = e(() => {
    (d(),
      Ze(),
      Le(),
      Ie(),
      On(),
      Zt(),
      En(),
      W(),
      (kn = S(B, (e, { scope: t, signal: n, derived: r }) => {
        let i = !1,
          a = n(null),
          o = n({ complete: !1, firstName: void 0 }),
          s = n({ selection: null, customValue: ``, personalizedSuggestionsEnabled: !0 }),
          c = n(
            { sourceMessageId: null, status: `idle` },
            {
              onMount: (e) => {
                i = !0;
                let n = t.watch(({ get: n }) => {
                  let r = t.getOwnValue(B);
                  (n(me) !== r.accountId || n(Fe) !== r.userId || n(z) !== `enabled`) &&
                    (p.abort(), e((e) => (e.status === `pending` ? { ...e, status: `error` } : e)));
                });
                return () => {
                  ((i = !1),
                    n(),
                    p.abort(),
                    e((e) => (e.status === `pending` ? { ...e, status: `error` } : e)));
                };
              },
            },
          ),
          l = r((e, { scope: t }) => {
            let n = e(c),
              r = t.get(G);
            return r.status === `tasks` || r.status === `task-step`
              ? `submitted`
              : r.status === `ready` && r.request.messageId !== n.sourceMessageId
                ? `idle`
                : n.status;
          }),
          u = r((e, { scope: t }) => {
            let n = e(s),
              r = n.customValue.trim() || n.selection,
              i = t.get(G);
            if (i.status !== `ready` || !r || r.length > 1e3) return null;
            let a = i.request.questions[0];
            return a.allow_custom_text === !1 && !a.options.includes(r) ? null : r;
          }),
          d = r((e) => e(l) === `idle` && e(u) != null),
          f = r((e, { scope: t }) => {
            let n = t.get(G),
              r = e(l),
              i = r === `idle` && n.status === `ready`,
              o =
                n.status !== `loading` &&
                (r === `error` ||
                  (r !== `pending` && (n.status === `error` || n.status === `unsupported`)) ||
                  (r === `submitted` && n.status === `ready`));
            return {
              editable: i,
              question: i && n.status === `ready` ? n.request.questions[0] : e(a)?.question,
              hasError: o,
              loading:
                !o &&
                n.status !== `tasks` &&
                n.status !== `task-step` &&
                (n.status === `idle` || n.status === `loading` || r === `pending`),
              showFooter: i || r === `pending`,
              pending: r === `pending`,
            };
          }),
          p = Dn(t, {
            isActive: () => {
              let n = t.get(U);
              return i && n.status === `conversation` && n.conversationId === e;
            },
            canSend: () => t.get(l) === `idle`,
            isSourceCurrent: (e) => {
              let n = t.get(G);
              return n.status === `ready` && n.request.messageId === e;
            },
            setStatus: (e, n) => t.set(c, { sourceMessageId: e, status: n }),
          });
        return {
          canSubmit$: d,
          presentation$: f,
          draft$: s,
          submittedRole$: a,
          intro$: o,
          submission$: l,
          submit: async (n, r, c = !1) => {
            let f = t.get(G),
              m = t.get(s),
              h = c ? null : t.get(u),
              g = t.get(H);
            if (
              !i ||
              e == null ||
              g == null ||
              t.get(l) !== `idle` ||
              f.status !== `ready` ||
              f.request.messageId !== n ||
              (!c && !t.get(d))
            )
              return;
            let _ = t.get(Ke),
              v = je.find((e) => e === h || _.formatMessage(ue[e]) === h),
              y = {
                question: f.request.questions[0],
                selection: h,
                role: h == null ? null : (v ?? `something_else`),
              };
            (t.set(a, y),
              h != null &&
                v == null &&
                r(h)
                  .then(({ role: e }) => {
                    t.get(a) === y && t.set(a, { ...y, role: e });
                  })
                  .catch(() => {}),
              t.set(o, (e) => ({ ...e, complete: !0 })),
              await p.send({
                sourceMessageId: n,
                event: f.submitEvent,
                inputs: { selection: h, personalizedSuggestionsEnabled: m.personalizedSuggestionsEnabled },
                prompt: h ?? f.request.questions[0].question,
              }));
          },
          retry: async () => {
            (await p.recover()) && t.set(c, (e) => ({ ...e, status: `idle` }));
          },
        };
      })));
  }))();
}
function jn(e, t, n) {
  let r = e.get(U),
    a = e.get(kn, r.status === `conversation` ? r.conversationId : null),
    o = e.get(a.submittedRole$),
    s = e.get(Qe) ?? Pe,
    c = o?.role == null ? s.roles : [o.role],
    l = e.get(Tn),
    u = l.at(-1),
    d = u?.view.status === `task-step` ? u.view.data.step : null,
    f = d?.view === `finished` ? d.completedTask : null;
  d?.view === `result` && d.outcome.status === `completed` && (f = d.task);
  let p = l.findLast(({ view: e }) => e.status !== `task-step` || e.data.step.view !== `finished`),
    m = f?.id ?? null;
  (m == null &&
    p != null &&
    (p.view.status === `tasks`
      ? (m = p.selectedTaskId ?? null)
      : p.view.data.step.view !== `finished` && (m = p.view.data.step.task.id)),
    pn(e, t, m),
    n({
      step: jt.ConversationalOnboarding,
      completedConversationalOnboardingTaskId: f?.id ?? null,
      completedConversationalOnboardingTaskSnapshot: f == null ? null : { label: f.label },
      onboardingCreditRewardWarningShown: !1,
      roles: c,
      personalizedSuggestionsEnabled:
        o == null ? s.personalizedSuggestionsEnabled : e.get(a.draft$).personalizedSuggestionsEnabled,
      workMode: c.length === 0 ? null : he(c),
      skipRemainingOnboarding: t,
      conversationalOnboardingSkipped: t,
    }).catch((e) => {
      i.warning(`Failed to finish desktop onboarding bookkeeping`, { safe: {}, sensitive: { error: e } });
    }));
}
function Mn() {
  return (Mn = e(() => {
    (Ie(), Xe(), m(), Et(), En(), An(), W());
  }))();
}
function Nn(e) {
  let t = (0, In.c)(44),
    { question: n, conversationId: r, editable: i } = e,
    a = u(B),
    o = g(),
    s = p(kn, r),
    c = _(s.draft$),
    l = _(s.submission$),
    d = Je(),
    f = d.authMethod === `chatgpt`,
    m;
  t[0] !== d.accountId || t[1] !== d.userId || t[2] !== f
    ? ((m = { accountId: d.accountId, enabled: f, userId: d.userId }),
      (t[0] = d.accountId),
      (t[1] = d.userId),
      (t[2] = f),
      (t[3] = m))
    : (m = t[3]);
  let { data: h, isLoading: v } = $e(m),
    y = I() === !0,
    b = _(s.intro$),
    x,
    S,
    C;
  if (t[4] !== o || t[5] !== b.firstName || t[6] !== h?.displayName) {
    C = h?.displayName?.trim().split(/\s+/)[0] || void 0;
    let e = b.firstName ?? C;
    ((x = Jt),
      (S = e == null ? o.formatMessage(sn.greeting) : o.formatMessage(sn.greetingWithName, { firstName: e })),
      (t[4] = o),
      (t[5] = b.firstName),
      (t[6] = h?.displayName),
      (t[7] = x),
      (t[8] = S),
      (t[9] = C));
  } else ((x = t[7]), (S = t[8]), (C = t[9]));
  let w;
  t[10] === o ? (w = t[11]) : ((w = o.formatMessage(sn.welcomeIntroduction)), (t[10] = o), (t[11] = w));
  let T = y || b.complete,
    E;
  t[12] !== b || t[13] !== s.intro$ || t[14] !== a || t[15] !== C
    ? ((E = () => a.set(s.intro$, { ...b, firstName: C })),
      (t[12] = b),
      (t[13] = s.intro$),
      (t[14] = a),
      (t[15] = C),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== s.intro$ || t[18] !== a
    ? ((D = () => a.set(s.intro$, { ...a.get(s.intro$), complete: !0 })),
      (t[17] = s.intro$),
      (t[18] = a),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] !== x ||
  t[21] !== v ||
  t[22] !== n.question ||
  t[23] !== S ||
  t[24] !== w ||
  t[25] !== T ||
  t[26] !== E ||
  t[27] !== D
    ? ((O = (0, K.jsx)(x, {
        greeting: S,
        welcome: w,
        question: n.question,
        initiallyComplete: T,
        loading: v,
        onInitialContentReady: E,
        onComplete: D,
      })),
      (t[20] = x),
      (t[21] = v),
      (t[22] = n.question),
      (t[23] = S),
      (t[24] = w),
      (t[25] = T),
      (t[26] = E),
      (t[27] = D),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== c ||
  t[30] !== i ||
  t[31] !== b.complete ||
  t[32] !== n.allow_custom_text ||
  t[33] !== n.free_text_placeholder ||
  t[34] !== n.options ||
  t[35] !== n.question ||
  t[36] !== s.draft$ ||
  t[37] !== a ||
  t[38] !== y ||
  t[39] !== l
    ? ((k =
        i &&
        (y || b.complete) &&
        (0, K.jsx)(an, {
          name: `dil-onboarding-role`,
          legend: n.question,
          options: n.options.map(Pn),
          selectedValue: c.selection,
          disabled: l !== `idle`,
          customValue: c.customValue,
          freeTextPlaceholder: n.allow_custom_text === !1 ? void 0 : n.free_text_placeholder,
          onSelect: (e) => a.set(s.draft$, { ...c, selection: e, customValue: `` }),
          onCustomValueChange: (e) => a.set(s.draft$, { ...c, selection: null, customValue: e }),
        })),
      (t[29] = c),
      (t[30] = i),
      (t[31] = b.complete),
      (t[32] = n.allow_custom_text),
      (t[33] = n.free_text_placeholder),
      (t[34] = n.options),
      (t[35] = n.question),
      (t[36] = s.draft$),
      (t[37] = a),
      (t[38] = y),
      (t[39] = l),
      (t[40] = k))
    : (k = t[40]);
  let A;
  return (
    t[41] !== O || t[42] !== k
      ? ((A = (0, K.jsxs)(K.Fragment, { children: [O, k] })), (t[41] = O), (t[42] = k), (t[43] = A))
      : (A = t[43]),
    A
  );
}
function Pn(e) {
  return { value: e, label: e };
}
function Fn(e) {
  let t = (0, In.c)(17),
    { conversationId: r, disabled: i, pending: a, onSkip: o } = e,
    s = u(B),
    c = p(kn, r),
    d = _(c.draft$),
    f = _(c.intro$),
    m = I() === !0,
    h = _(c.canSubmit$);
  if (!m && !f.complete) return null;
  let g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(l, {
        id: `electron.onboarding.desktopRole.skip`,
        defaultMessage: `Skip`,
        description: `Skips choosing a desktop onboarding role and loads starter tasks without changing the saved role`,
      })),
      (t[0] = g))
    : (g = t[0]);
  let v;
  t[1] !== i || t[2] !== o
    ? ((v = (0, K.jsx)(n, { type: `button`, color: `ghostTertiary`, disabled: i, onClick: o, children: g })),
      (t[1] = i),
      (t[2] = o),
      (t[3] = v))
    : (v = t[3]);
  let y = !h,
    b;
  t[4] !== d || t[5] !== c.draft$ || t[6] !== s
    ? ((b = (e) => s.set(c.draft$, { ...d, personalizedSuggestionsEnabled: e })),
      (t[4] = d),
      (t[5] = c.draft$),
      (t[6] = s),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== i || t[9] !== d.personalizedSuggestionsEnabled || t[10] !== a || t[11] !== y || t[12] !== b
    ? ((x = (0, K.jsx)(Kt, {
        personalizedSuggestionsEnabled: d.personalizedSuggestionsEnabled,
        disabled: i,
        pending: a,
        continueDisabled: y,
        continueType: `submit`,
        onPersonalizedSuggestionsChange: b,
      })),
      (t[8] = i),
      (t[9] = d.personalizedSuggestionsEnabled),
      (t[10] = a),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x))
    : (x = t[13]);
  let S;
  return (
    t[14] !== v || t[15] !== x
      ? ((S = (0, K.jsx)(dn, { bottomAction: v, children: x })), (t[14] = v), (t[15] = x), (t[16] = S))
      : (S = t[16]),
    S
  );
}
var In, K;
function Ln() {
  return (Ln = e(() => {
    ((In = re()), ee(), d(), D(), ze(), L(), Yt(), qt(), un(), Qt(), Re(), An(), W(), (K = oe()));
  }))();
}
var Rn, zn, q, Bn;
function Vn() {
  return (Vn = e(() => {
    (d(),
      Ze(),
      Le(),
      ot(),
      On(),
      Zt(),
      En(),
      W(),
      (Rn = w(B, null)),
      (zn = b(B, (e) => null)),
      (q = S(B, (e, { scope: t, signal: n }) => {
        let r = !1,
          i = null,
          a = !1,
          o = null,
          s = n(null),
          c = n(null),
          l = n(`idle`, {
            onMount: (e) => (
              (r = !0),
              queueMicrotask(() => void f()),
              () => {
                ((r = !1),
                  a || (d.abort(), e((e) => (e === `pending` ? `error` : e))),
                  o?.cancel(`interrupted`));
              }
            ),
          }),
          u = (n = t.get) => {
            let i = t.getOwnValue(B),
              o = n(G);
            return (
              (r || a) &&
              n(z) === `enabled` &&
              n(me) === i.accountId &&
              n(Fe) === i.userId &&
              (o.status === `tasks` || o.status === `task-step`) &&
              o.sourceMessageId === e
            );
          },
          d = Dn(t, {
            isActive: () => r || a,
            canSend: () => u() && t.get(l) === `idle`,
            isSourceCurrent: () => u(),
            setStatus: (e, n) => {
              if (n === `pending`) {
                let e = t.get(H),
                  n = t.get(G);
                e != null &&
                  (n.status === `tasks` || n.status === `task-step`) &&
                  t.set(Rn, { serverId: e, view: n });
              }
              t.set(l, n);
            },
          }),
          f = async () => {
            let n = t.get(G),
              r = t.get(s);
            if (!u() || n.status !== `task-step` || n.data.events.report == null || r?.result == null) return;
            let i = r.result,
              a = n.data.step;
            i.status === `completed` &&
              a.view === `execute` &&
              t.set(
                zn,
                { serverId: t.get(H), operationId: r.operationId },
                a.execution?.kind === `plugin` ? { url: i.url } : { output: i.output },
              );
            let o = null;
            if (
              i.status === `completed` &&
              a.view === `execute` &&
              a.execution?.kind === `plugin` &&
              a.completionResult != null
            ) {
              let e = t.get(Ke),
                n = i.output ?? ``;
              try {
                let t = e.formatters
                  .getMessageFormat(a.completionResult, e.locale, void 0, { ignoreTag: !0 })
                  .format({ hasText: n.trim().length > 0 ? `yes` : `no`, text: n });
                o = Array.isArray(t) ? t.join(``) : t;
              } catch {
                o = null;
              }
            } else i.status === `not_completed` && (o = i.output ?? null);
            await d.send({
              sourceMessageId: e,
              kind: `automatic`,
              event: n.data.events.report,
              inputs: {
                outcome: {
                  operationId: r.operationId,
                  status: i.status,
                  connected: i.connected ?? null,
                  assistantText: o,
                },
              },
            });
          };
        return {
          answer$: l,
          selectedTask$: c,
          execution$: s,
          select: async (n) => {
            let r = t.get(G);
            if (r.status !== `tasks`) return;
            let a = r.tasks.tasks.find((e) => e.id === n);
            a != null &&
              u() &&
              t.get(l) === `idle` &&
              (!d.recovering && t.get(H) != null && i !== n && (it(t, n), (i = n)),
              t.set(c, a),
              await d.send({
                sourceMessageId: e,
                event: r.tasks.action.event,
                inputs: { taskId: n },
                prompt: a.label,
              }));
          },
          act: async (n, r) => {
            let i = t.get(G);
            ((i.status === `tasks` && n === i.tasks.action.skip_event) ||
              (i.status === `task-step` &&
                Object.values(i.data.events).includes(n) &&
                n !== i.data.events.report)) &&
              (await d.send({ sourceMessageId: e, event: n, inputs: {}, prompt: r }));
          },
          finish: async (t, n) => {
            ((a = !0), await d.send({ sourceMessageId: e, event: t, inputs: {}, prompt: n }));
          },
          recover: async () => {
            d.recovering || (o?.cancel(`interrupted`), (await d.recover()) && t.set(l, `idle`), await f());
          },
          begin: (e) => {
            let n = t.get(G);
            if (
              d.recovering ||
              !u() ||
              n.status !== `task-step` ||
              n.data.step.view !== `execute` ||
              n.data.events.report == null ||
              t.get(l) !== `idle` ||
              t.get(s) != null
            )
              return null;
            let r = crypto.randomUUID();
            t.set(s, { operationId: r, result: null });
            let i = e();
            o = i;
            let a = t.watch(({ get: e }) => {
              u(e) || i.cancel(`interrupted`);
            });
            return (
              i.result.then(async (e) => {
                (a(), (o = null), t.set(s, { operationId: r, result: e }), await f());
              }),
              i
            );
          },
        };
      })),
      (Bn = k(B, (e, { get: t }) => {
        let n = t(q, e.sourceMessageId),
          r = t(n.answer$),
          i = t(n.execution$),
          a = i != null && i.result == null,
          o = t(n.selectedTask$),
          s = e.status === `task-step` ? e.data : void 0,
          c = s?.step,
          l = r === `error` || r === `submitted`,
          u =
            c?.view === `finished` || (c?.view === `result` && c.outcome.status === `completed`)
              ? s?.events.finish
              : void 0,
          d = e.status === `tasks` ? e.tasks.action.skip_event : s?.events.skip;
        return {
          selectedTaskId: o?.id,
          needsRecovery: l,
          choicesDisabled: a || r !== `idle`,
          retry: s?.events.retry,
          showThinking: r === `pending` && c?.view !== `execute`,
          finish: u,
          skip: d,
          advancePending: r !== `idle`,
        };
      })));
  }))();
}
function Hn(e) {
  let t = (0, Wn.c)(19),
    {
      tasks: n,
      introduction: r,
      scrollChoicesIntoView: i,
      disabled: a,
      selectedTaskId: o,
      animate: s,
      onSelect: c,
    } = e,
    l = a !== void 0 && a,
    u = s === void 0 || s,
    d = I() === !0,
    [f, p] = (0, Gn.useState)(d || !u),
    m = !d && !f,
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = () => p(!0)), (t[0] = h)) : (h = t[0]);
  let g;
  t[1] !== r || t[2] !== n.heading
    ? ((g = [r, n.heading].filter(Un)), (t[1] = r), (t[2] = n.heading), (t[3] = g))
    : (g = t[3]);
  let _ = g.join(`

`),
    v;
  t[4] !== m || t[5] !== _
    ? ((v = (0, J.jsx)(Lt, { animate: m, onComplete: h, children: _ })), (t[4] = m), (t[5] = _), (t[6] = v))
    : (v = t[6]);
  let b;
  t[7] !== u ||
  t[8] !== l ||
  t[9] !== c ||
  t[10] !== i ||
  t[11] !== o ||
  t[12] !== d ||
  t[13] !== f ||
  t[14] !== n.tasks
    ? ((b = f
        ? (0, J.jsx)(y.div, {
            ref: i,
            animate: { opacity: 1 },
            initial: d || !u ? !1 : { opacity: 0 },
            transition: d ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
            className: `grid w-full scroll-mb-14 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,
            children: n.tasks.map((e) =>
              (0, J.jsx)(
                rn,
                {
                  label: e.label,
                  icon: (0, J.jsx)(Rt, {
                    className: `size-6 object-contain`,
                    taskId: e.id,
                    fallback: (0, J.jsx)(We, {
                      alt: ``,
                      className: `size-6 object-contain`,
                      knownAppId: e.icon,
                      loadRemote: !1,
                      fallback: (0, J.jsx)(`span`, { "aria-hidden": !0 }),
                    }),
                  }),
                  selected: o === e.id,
                  disabled: l,
                  onSelect: () => c?.(e.id),
                },
                e.id,
              ),
            ),
          })
        : null),
      (t[7] = u),
      (t[8] = l),
      (t[9] = c),
      (t[10] = i),
      (t[11] = o),
      (t[12] = d),
      (t[13] = f),
      (t[14] = n.tasks),
      (t[15] = b))
    : (b = t[15]);
  let x;
  return (
    t[16] !== v || t[17] !== b
      ? ((x = (0, J.jsxs)(`div`, { className: `flex flex-col gap-6 text-lg leading-6`, children: [v, b] })),
        (t[16] = v),
        (t[17] = b),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function Un(e) {
  return e !== ``;
}
var Wn, Gn, J;
function Kn() {
  return (Kn = e(() => {
    ((Wn = re()), T(), ee(), (Gn = ce()), Be(), It(), Xt(), zt(), (J = oe()));
  }))();
}
function qn(e) {
  let t = (0, Y.c)(10),
    { execution: n } = e.step,
    r;
  t[0] === e ? (r = t[1]) : ((r = (0, X.jsx)(Zn, { ...e })), (t[0] = e), (t[1] = r));
  let i = r;
  if (n?.kind === `plugin` && n.pluginId != null) {
    let r;
    (t[2] !== n || t[3] !== e
      ? ((r = (0, X.jsx)(Jn, { ...e, execution: n })), (t[2] = n), (t[3] = e), (t[4] = r))
      : (r = t[4]),
      (i = r));
  } else if (n?.kind === `native` && (n.taskId === `csv_chart` || n.taskId === `data_science_csv_chart`)) {
    let r = n.taskId === `csv_chart` ? `png` : `html`,
      a;
    (t[5] !== e || t[6] !== r
      ? ((a = (0, X.jsx)(Xn, { ...e, format: r })), (t[5] = e), (t[6] = r), (t[7] = a))
      : (a = t[7]),
      (i = a));
  }
  let a;
  return (
    t[8] === i
      ? (a = t[9])
      : ((a = (0, X.jsx)(c, { scope: mt, children: (0, X.jsx)(c, { scope: pt, children: i }) })),
        (t[8] = i),
        (t[9] = a)),
    a
  );
}
function Jn(e) {
  let t = (0, Y.c)(6),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = { hostId: E }), (t[0] = n)) : (n = t[0]);
  let r = be(n),
    { isPending: i, isError: a } = le(we, E);
  if (i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(ge, { fadeIn: !0, loading: !0 })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!r || a) {
    let n;
    return (t[2] === e ? (n = t[3]) : ((n = (0, X.jsx)(Zn, { ...e })), (t[2] = e), (t[3] = n)), n);
  }
  let o;
  return (
    t[4] === e
      ? (o = t[5])
      : ((o = (0, X.jsx)(on, { children: (t) => (0, X.jsx)(Yn, { ...e, runtime: t }) })),
        (t[4] = e),
        (t[5] = o)),
    o
  );
}
function Yn(e) {
  let t = (0, Y.c)(39),
    { step: n, execution: r, begin: i, runtime: a } = e,
    o = u(pt),
    s = Je(),
    { data: c } = _e(),
    l = c?.plan_type ?? s.planAtLogin,
    d;
  t[0] === r.pluginId
    ? (d = t[1])
    : ((d = r.pluginId == null ? [] : [r.pluginId]), (t[0] = r.pluginId), (t[1] = d));
  let f;
  t[2] !== s.authMethod || t[3] !== a.hostId || t[4] !== l || t[5] !== d
    ? ((f = { authMethod: s.authMethod, enabled: !0, hostId: a.hostId, plan: l, pluginIds: d }),
      (t[2] = s.authMethod),
      (t[3] = a.hostId),
      (t[4] = l),
      (t[5] = d),
      (t[6] = f))
    : (f = t[6]);
  let { data: p, isLoading: m, refetch: h } = ft(f);
  if (a.isConfigDataPending || a.isModelsLoading || m) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(ge, { fadeIn: !0, loading: !0 })), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let g;
  t[8] === h ? (g = t[9]) : ((g = async () => (await h({ cancelRefetch: !1 })).data), (t[8] = h), (t[9] = g));
  let _;
  t[10] !== p || t[11] !== a || t[12] !== o.queryClient || t[13] !== g
    ? ((_ = { ...a, queryClient: o.queryClient, refetchRemotePlugins: g, remotePlugins: p }),
      (t[10] = p),
      (t[11] = a),
      (t[12] = o.queryClient),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v = _,
    y;
  t[15] !== i ||
  t[16] !== v ||
  t[17] !== r.pluginId ||
  t[18] !== r.pluginName ||
  t[19] !== r.prompt ||
  t[20] !== o ||
  t[21] !== n
    ? ((y = () =>
        i(() =>
          Pt(
            o,
            n.task.id,
            v,
            {
              appPluginName: r.pluginName,
              pluginId: r.pluginId ?? null,
              prompt: r.prompt,
              selectedTask: n.task.id,
            },
            {
              requiresModel: !0,
              onInstallCancelled: () => ct(o, n.task.id),
              start: (e, t, n) => xt(o, e, v, n),
            },
          ),
        )),
      (t[15] = i),
      (t[16] = v),
      (t[17] = r.pluginId),
      (t[18] = r.pluginName),
      (t[19] = r.prompt),
      (t[20] = o),
      (t[21] = n),
      (t[22] = y))
    : (y = t[22]);
  let b = r.pluginId ?? null,
    x = r.pluginName,
    S = r.prompt,
    C,
    w,
    T;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = O({
        id: `electron.onboarding.dil.pluginTask`,
        defaultMessage: `Task`,
        description: `Generic title of the server-selected plugin onboarding task`,
      })),
      (w = O({
        id: `electron.onboarding.dil.pluginCompleted`,
        defaultMessage: `{text} {link}`,
        description: `Plugin task result with its output text and resource link`,
      })),
      (T = O({
        id: `electron.onboarding.dil.openResult`,
        defaultMessage: `View result`,
        description: `Opens the resource created or affected by a plugin onboarding task`,
      })),
      (t[23] = C),
      (t[24] = w),
      (t[25] = T))
    : ((C = t[23]), (w = t[24]), (T = t[25]));
  let E;
  t[26] !== r.pluginName || t[27] !== r.prompt || t[28] !== C || t[29] !== w || t[30] !== T || t[31] !== b
    ? ((E = {
        pluginId: b,
        pluginName: x,
        prompt: S,
        label: C,
        completionMessage: w,
        completionLinkLabel: T,
      }),
      (t[26] = r.pluginName),
      (t[27] = r.prompt),
      (t[28] = C),
      (t[29] = w),
      (t[30] = T),
      (t[31] = b),
      (t[32] = E))
    : (E = t[32]);
  let D;
  t[33] !== p || t[34] !== E
    ? ((D = (0, X.jsx)(Nt, { remotePlugins: p, permissionStatus: `pending`, definition: E })),
      (t[33] = p),
      (t[34] = E),
      (t[35] = D))
    : (D = t[35]);
  let k;
  return (
    t[36] !== D || t[37] !== y
      ? ((k = (0, X.jsx)($n, { begin: y, children: D })), (t[36] = D), (t[37] = y), (t[38] = k))
      : (k = t[38]),
    k
  );
}
function Xn(e) {
  let t = (0, Y.c)(10),
    { step: n, begin: r, format: i } = e,
    a = u(pt),
    o;
  t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== n
    ? ((o = () =>
        r(() => {
          let e = Dt(a, n.task.id, P(`~`), i);
          return (e.start(), e);
        })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = n),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === i ? (s = t[6]) : ((s = (0, X.jsx)(vt, { hostId: E, format: i })), (t[5] = i), (t[6] = s));
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, X.jsx)($n, { begin: o, children: s })), (t[7] = o), (t[8] = s), (t[9] = c))
      : (c = t[9]),
    c
  );
}
function Zn(e) {
  let t = (0, Y.c)(6),
    { step: n, begin: r } = e,
    i;
  t[0] !== r || t[1] !== n
    ? ((i = () =>
        r(() => ({
          started: Promise.resolve(),
          result: Promise.resolve({ status: n.execution == null ? `failed` : `not_completed` }),
          cancel: Qn,
        }))),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i))
    : (i = t[2]);
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(ge, { fadeIn: !0, loading: !0 })), (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i ? (o = t[5]) : ((o = (0, X.jsx)($n, { begin: i, children: a })), (t[4] = i), (t[5] = o)),
    o
  );
}
function Qn() {}
function $n(e) {
  let t = (0, Y.c)(5),
    { begin: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (e) => {
        if (e == null) return;
        let t = !0,
          r = null;
        return (
          queueMicrotask(() => {
            t && (r = n());
          }),
          () => {
            ((t = !1), r?.cancel(`interrupted`));
          }
        );
      }),
      (t[0] = n),
      (t[1] = i));
  let a = se(i),
    o;
  return (
    t[2] !== r || t[3] !== a
      ? ((o = (0, X.jsx)(`div`, { ref: a, children: r })), (t[2] = r), (t[3] = a), (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Y, X;
function er() {
  return (er = e(() => {
    ((Y = re()),
      d(),
      F(),
      D(),
      ze(),
      pe(),
      Ye(),
      Ce(),
      Ee(),
      Ge(),
      x(),
      ut(),
      ot(),
      dt(),
      ht(),
      en(),
      yt(),
      Ft(),
      bt(),
      (X = oe()));
  }))();
}
function tr(e) {
  let t = (0, ar.c)(31),
    { view: r } = e,
    i = p(q, r.sourceMessageId),
    a = le(Bn, r),
    o = r.status === `task-step` ? r.data : void 0,
    s = g(),
    c = o?.step,
    { needsRecovery: u, retry: d } = a,
    f;
  t[0] !== i || t[1] !== s || t[2] !== d
    ? ((f =
        d == null
          ? void 0
          : () =>
              void i.act(
                d,
                s.formatMessage({
                  id: `electron.onboarding.conversationalOnboarding.tryAgain`,
                  defaultMessage: `Try again`,
                  description: `Button that retries a conversational onboarding task`,
                }),
              )),
      (t[0] = i),
      (t[1] = s),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let m = f,
    h = null;
  if (c?.view === `execute` && !u) {
    if (o?.events.report == null) {
      let e;
      (t[4] === i
        ? (e = t[5])
        : ((e = (0, Z.jsx)(wt, { onRetry: () => void i.recover() })), (t[4] = i), (t[5] = e)),
        (h = e));
    } else {
      let e;
      (t[6] !== i.begin || t[7] !== c
        ? ((e = (0, Z.jsx)(qn, { step: c, begin: i.begin })), (t[6] = i.begin), (t[7] = c), (t[8] = e))
        : (e = t[8]),
        (h = e));
    }
  } else if (c?.view === `result`) {
    let e = c.intro !== o?.intro,
      n = r.status === `task-step` ? r.assistantText : void 0,
      i;
    (t[9] !== c || t[10] !== e || t[11] !== n
      ? ((i = (0, Z.jsx)(rr, { step: c, showIntroduction: e, assistantText: n }, c.outcome.operationId)),
        (t[9] = c),
        (t[10] = e),
        (t[11] = n),
        (t[12] = i))
      : (i = t[12]),
      (h = i));
  } else if ((c?.view === `incomplete` || c?.view === `error`) && !u) {
    let e = r.status === `task-step` ? r.assistantText : void 0,
      n;
    t[13] !== i || t[14] !== o || t[15] !== s
      ? ((n =
          o?.events.another == null
            ? void 0
            : () =>
                void i.act(
                  o.events.another,
                  s.formatMessage({
                    id: `electron.onboarding.conversationalOnboarding.chooseAnotherTask`,
                    defaultMessage: `Choose another task`,
                    description: `Button that returns to conversational onboarding task selection after a task could not be completed`,
                  }),
                )),
        (t[13] = i),
        (t[14] = o),
        (t[15] = s),
        (t[16] = n))
      : (n = t[16]);
    let a;
    (t[17] !== m || t[18] !== c || t[19] !== e || t[20] !== n
      ? ((a = (0, Z.jsx)(nr, { step: c, assistantText: e, onRetryTask: m, onChooseAnotherTask: n })),
        (t[17] = m),
        (t[18] = c),
        (t[19] = e),
        (t[20] = n),
        (t[21] = a))
      : (a = t[21]),
      (h = a));
  }
  let _;
  t[22] === a.showThinking
    ? (_ = t[23])
    : ((_ = a.showThinking ? (0, Z.jsx)(ge, { fadeIn: !0, loading: !0 }) : null),
      (t[22] = a.showThinking),
      (t[23] = _));
  let v;
  t[24] !== i || t[25] !== u
    ? ((v = u
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, Z.jsx)(`p`, {
                role: `alert`,
                children: (0, Z.jsx)(l, {
                  id: `electron.onboarding.desktopRole.setupError`,
                  defaultMessage: `Couldn’t load setup. Please try again`,
                  description: `Recoverable error when desktop onboarding cannot submit a role or load supported starter tasks`,
                }),
              }),
              (0, Z.jsx)(n, {
                type: `button`,
                color: `primary`,
                onClick: () => void i.recover(),
                children: (0, Z.jsx)(l, {
                  id: `electron.onboarding.conversationalOnboarding.tryAgain`,
                  defaultMessage: `Try again`,
                  description: `Button that retries a conversational onboarding task`,
                }),
              }),
            ],
          })
        : null),
      (t[24] = i),
      (t[25] = u),
      (t[26] = v))
    : (v = t[26]);
  let y;
  return (
    t[27] !== _ || t[28] !== v || t[29] !== h
      ? ((y = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-6 text-lg leading-6`,
          children: [h, _, v],
        })),
        (t[27] = _),
        (t[28] = v),
        (t[29] = h),
        (t[30] = y))
      : (y = t[30]),
    y
  );
}
function nr(e) {
  let t = (0, ar.c)(7),
    { animate: n, step: r, assistantText: i, onRetryTask: a, onChooseAnotherTask: o } = e,
    s = n === void 0 || n;
  if (r.outcome.status === `not_completed`) {
    let e = i ?? r.outcome.assistantText,
      n;
    return (
      t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== e
        ? ((n = (0, Z.jsx)(Ot, { animate: s, output: e, onRetryTask: a, onChooseAnotherTask: o })),
          (t[0] = s),
          (t[1] = o),
          (t[2] = a),
          (t[3] = e),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  let c;
  return (t[5] === a ? (c = t[6]) : ((c = (0, Z.jsx)(wt, { onRetry: a })), (t[5] = a), (t[6] = c)), c);
}
function rr(e) {
  let t = (0, ar.c)(22),
    { animate: n, showIntroduction: r, step: i, assistantText: a } = e,
    o = n === void 0 || n,
    s = r === void 0 || r,
    c = _(H),
    l;
  t[0] !== c || t[1] !== i.outcome.operationId
    ? ((l = { serverId: c, operationId: i.outcome.operationId }),
      (t[0] = c),
      (t[1] = i.outcome.operationId),
      (t[2] = l))
    : (l = t[2]);
  let u = le(zn, l),
    d;
  if (i.presentation.kind === `plugin`) {
    let e = u?.url,
      n = i.completionLinkLabel ?? i.task.label,
      r;
    (t[3] !== o || t[4] !== i.presentation.pluginName || t[5] !== e || t[6] !== n
      ? ((r = (0, Z.jsx)(Ct, {
          animate: o,
          appPluginName: i.presentation.pluginName,
          message: `{link}`,
          output: ``,
          url: e,
          linkLabel: n,
        })),
        (t[3] = o),
        (t[4] = i.presentation.pluginName),
        (t[5] = e),
        (t[6] = n),
        (t[7] = r))
      : (r = t[7]),
      (d = r));
  } else {
    let e = u?.output;
    if (e == null || !ne(e) || ![`csv_chart`, `data_science_csv_chart`].includes(i.presentation.taskId))
      d = null;
    else {
      let n = i.presentation.taskId === `data_science_csv_chart` ? `html` : `png`,
        r;
      (t[8] !== o || t[9] !== e || t[10] !== n
        ? ((r = (0, Z.jsx)(gt, { animate: o, resourceOnly: !0, filePath: e, format: n, hostId: E })),
          (t[8] = o),
          (t[9] = e),
          (t[10] = n),
          (t[11] = r))
        : (r = t[11]),
        (d = r));
    }
  }
  let f;
  t[12] !== s || t[13] !== i.intro
    ? ((f = s && i.intro ? (0, Z.jsx)(`p`, { children: i.intro }) : null),
      (t[12] = s),
      (t[13] = i.intro),
      (t[14] = f))
    : (f = t[14]);
  let p;
  t[15] !== o || t[16] !== a
    ? ((p = a ? (0, Z.jsx)(Lt, { animate: o, children: a }) : null), (t[15] = o), (t[16] = a), (t[17] = p))
    : (p = t[17]);
  let m;
  return (
    t[18] !== d || t[19] !== f || t[20] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [f, p, d] })),
        (t[18] = d),
        (t[19] = f),
        (t[20] = p),
        (t[21] = m))
      : (m = t[21]),
    m
  );
}
function ir(e) {
  let t = (0, ar.c)(21),
    { isAdvancePending: n, onFinish: r, view: i, includesFinance: a } = e,
    o = a !== void 0 && a,
    s = p(q, i.sourceMessageId),
    c = le(Bn, i),
    l = g(),
    { finish: u, skip: d } = c,
    f = u != null || (i.status === `task-step` && i.data.step.view === `finished`),
    m;
  t[0] !== o || t[1] !== f
    ? ((m = (0, Z.jsx)(Wt, { phase: `task`, isPhaseComplete: f, includesFinance: o })),
      (t[0] = o),
      (t[1] = f),
      (t[2] = m))
    : (m = t[2]);
  let h = u != null || (i.status === `task-step` && i.data.step.view === `finished`),
    _;
  t[3] !== s || t[4] !== u || t[5] !== l || t[6] !== r || t[7] !== i.data || t[8] !== i.status
    ? ((_ = () => {
        (u != null &&
          s.finish(
            u,
            l.formatMessage({
              id: `electron.onboarding.conversationalOnboarding.getStarted`,
              defaultMessage: `Get Started`,
              description: `Button that completes conversational onboarding after task access is resolved`,
            }),
          ),
          r(i.status === `task-step` && i.data.step.view === `finished` && i.data.step.skipped));
      }),
      (t[3] = s),
      (t[4] = u),
      (t[5] = l),
      (t[6] = r),
      (t[7] = i.data),
      (t[8] = i.status),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] !== s || t[11] !== l || t[12] !== r || t[13] !== d
    ? ((v =
        d == null
          ? void 0
          : () => {
              (s.finish(
                d,
                l.formatMessage({
                  id: `electron.onboarding.conversationalOnboarding.skipAfterRole`,
                  defaultMessage: `Skip`,
                  description: `Button that skips the remainder of conversational onboarding, either immediately or after a confirmation dialog`,
                }),
              ),
                r(!0));
            }),
      (t[10] = s),
      (t[11] = l),
      (t[12] = r),
      (t[13] = d),
      (t[14] = v))
    : (v = t[14]);
  let y;
  return (
    t[15] !== n || t[16] !== m || t[17] !== h || t[18] !== _ || t[19] !== v
      ? ((y = (0, Z.jsx)(nn, {
          progress: m,
          phase: `task`,
          isPhaseComplete: h,
          isAdvancePending: n,
          skipDisabled: !1,
          onboardingCreditRewardAmount: null,
          onGetStarted: _,
          onSkip: v,
        })),
        (t[15] = n),
        (t[16] = m),
        (t[17] = h),
        (t[18] = _),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
var ar, Z;
function or() {
  return (or = e(() => {
    ((ar = re()),
      d(),
      F(),
      D(),
      L(),
      It(),
      Ce(),
      cn(),
      _t(),
      Ge(),
      Tt(),
      $t(),
      Mt(),
      W(),
      Vn(),
      er(),
      (Z = oe()));
  }))();
}
function sr(e) {
  let t = (0, fr.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ turns: i, currentView: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  if (t[4] !== n || t[5] !== r || t[6] !== i) {
    let e = (0, pr.default)(i, `sequenceId`);
    ((a = (0, Q.jsx)(Q.Fragment, {
      children: Object.entries(e).map((e) => {
        let [t, i] = e;
        return (0, Q.jsx)(
          cr,
          {
            turns: i,
            currentView: i.some((e) => {
              let { view: t } = e;
              return t.sourceMessageId === n?.sourceMessageId;
            })
              ? n
              : null,
            ...r,
          },
          t,
        );
      }),
    })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a));
  } else a = t[7];
  return a;
}
function cr(e) {
  let t = (0, fr.c)(25),
    { turns: n, currentView: r, scrollChoicesIntoView: i, scrollCurrentTurnIntoView: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = n.find(ur)), (t[0] = n), (t[1] = o));
  let s = o,
    c = p(q, n[0].sequenceId),
    l = _(c.selectedTask$),
    u = s?.answer ?? l?.label,
    d;
  t[2] === u ? (d = t[3]) : ((d = u == null ? null : (0, Q.jsx)(At, { answer: u })), (t[2] = u), (t[3] = d));
  let f;
  if (t[4] !== r?.sourceMessageId || t[5] !== u || t[6] !== n) {
    let e;
    (t[8] !== r?.sourceMessageId || t[9] !== u
      ? ((e = (e) => {
          let { view: t, showIntroduction: n, showSelectedAnswer: i, answer: a } = e,
            o = t.sourceMessageId === r?.sourceMessageId;
          if (!o && t.status === `tasks`) return null;
          let s = t.status === `task-step` ? t.data : void 0;
          return (0, Q.jsxs)(
            mr.Fragment,
            {
              children: [
                n && s != null ? (0, Q.jsx)(`p`, { children: s.intro }) : null,
                u == null && i && s != null && s.step.view !== `finished`
                  ? (0, Q.jsx)(At, { answer: s.step.task.label })
                  : null,
                o
                  ? (0, Q.jsx)(tr, { view: t })
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        s?.step.view === `error` || s?.step.view === `incomplete`
                          ? (0, Q.jsx)(nr, {
                              animate: !1,
                              step: s.step,
                              assistantText: t.status === `task-step` ? t.assistantText : void 0,
                            })
                          : null,
                        s?.step.view === `result`
                          ? (0, Q.jsx)(rr, {
                              animate: !1,
                              step: s.step,
                              showIntroduction: s.step.intro !== s.intro,
                              assistantText: t.status === `task-step` ? t.assistantText : void 0,
                            })
                          : null,
                        a ? (0, Q.jsx)(At, { answer: a }) : null,
                      ],
                    }),
              ],
            },
            t.sourceMessageId,
          );
        }),
        (t[8] = r?.sourceMessageId),
        (t[9] = u),
        (t[10] = e))
      : (e = t[10]),
      (f = n.map(e)),
      (t[4] = r?.sourceMessageId),
      (t[5] = u),
      (t[6] = n),
      (t[7] = f));
  } else f = t[7];
  let m;
  t[11] !== d || t[12] !== f
    ? ((m = (0, Q.jsxs)(Q.Fragment, { children: [d, f] })), (t[11] = d), (t[12] = f), (t[13] = m))
    : (m = t[13]);
  let h = m,
    g = u != null || n.some(lr),
    v = null;
  if (s?.view.status === `tasks`) {
    let e;
    (t[14] !== r?.sourceMessageId || t[15] !== s || t[16] !== i
      ? ((e =
          r?.sourceMessageId === s.view.sourceMessageId
            ? (0, Q.jsx)(dr, { turn: s, scrollChoicesIntoView: i })
            : (0, Q.jsx)(Hn, {
                tasks: s.view.tasks,
                introduction: s.view.introduction,
                selectedTaskId: s.selectedTaskId,
                disabled: !0,
                animate: !1,
              })),
        (t[14] = r?.sourceMessageId),
        (t[15] = s),
        (t[16] = i),
        (t[17] = e))
      : (e = t[17]),
      (v = e));
  }
  let y = h;
  if (g) {
    let e;
    (t[18] !== h || t[19] !== r || t[20] !== a
      ? ((e =
          r == null
            ? (0, Q.jsx)(`div`, { className: `flex flex-col gap-6 text-lg leading-6`, children: h })
            : (0, Q.jsx)(Gt, { ref: a, className: `scroll-mb-14`, children: h })),
        (t[18] = h),
        (t[19] = r),
        (t[20] = a),
        (t[21] = e))
      : (e = t[21]),
      (y = e));
  }
  let b;
  return (
    t[22] !== v || t[23] !== y
      ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [v, y] })), (t[22] = v), (t[23] = y), (t[24] = b))
      : (b = t[24]),
    b
  );
}
function lr(e) {
  let { view: t } = e;
  return t.status === `task-step`;
}
function ur(e) {
  let { view: t } = e;
  return t.status === `tasks`;
}
function dr(e) {
  let t = (0, fr.c)(9),
    { turn: n, scrollChoicesIntoView: r } = e,
    i = p(q, n.view.sourceMessageId),
    a = le(Bn, n.view);
  if (n.view.status !== `tasks`) return null;
  let o;
  t[0] === i ? (o = t[1]) : ((o = (e) => void i.select(e)), (t[0] = i), (t[1] = o));
  let s;
  return (
    t[2] !== a.choicesDisabled ||
    t[3] !== a.selectedTaskId ||
    t[4] !== r ||
    t[5] !== o ||
    t[6] !== n.view.introduction ||
    t[7] !== n.view.tasks
      ? ((s = (0, Q.jsx)(Hn, {
          tasks: n.view.tasks,
          introduction: n.view.introduction,
          selectedTaskId: a.selectedTaskId,
          disabled: a.choicesDisabled,
          onSelect: o,
          scrollChoicesIntoView: r,
        })),
        (t[2] = a.choicesDisabled),
        (t[3] = a.selectedTaskId),
        (t[4] = r),
        (t[5] = o),
        (t[6] = n.view.introduction),
        (t[7] = n.view.tasks),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
var fr, pr, mr, Q;
function hr() {
  return (hr = e(() => {
    ((fr = re()), (pr = t(ve(), 1)), d(), (mr = ce()), kt(), tn(), Kn(), Vn(), or(), (Q = oe()));
  }))();
}
function gr(e) {
  let t = (0, yr.c)(19),
    { isAdvancePending: n, onContinue: r } = e,
    i = u(mt),
    a = _(St),
    o = I() === !0,
    s = _(me),
    l = _(Fe);
  if (s == null || l == null) return null;
  let d;
  t[0] !== s || t[1] !== l
    ? ((d = { accountId: s, userId: l }), (t[0] = s), (t[1] = l), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== i || t[4] !== o
    ? ((f = () => i.set(Vt, o ? `hidden` : `fading`)), (t[3] = i), (t[4] = o), (t[5] = f))
    : (f = t[5]);
  let p, m;
  t[6] === i
    ? ((p = t[7]), (m = t[8]))
    : ((p = () => i.set(Vt, `visible`)),
      (m = (e) => {
        i.set(Ht, e);
      }),
      (t[6] = i),
      (t[7] = p),
      (t[8] = m));
  let h;
  t[9] !== a || t[10] !== n || t[11] !== r || t[12] !== f || t[13] !== p || t[14] !== m
    ? ((h = (0, $.jsx)(_r, {
        isAdvancePending: n,
        onContinue: r,
        includesFinance: a,
        onRoleSubmitted: f,
        onRestart: p,
        onScrolledContentUnderHeaderChange: m,
      })),
      (t[9] = a),
      (t[10] = n),
      (t[11] = r),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== d || t[17] !== h
      ? ((g = (0, $.jsx)(c, { scope: B, value: d, children: h })), (t[16] = d), (t[17] = h), (t[18] = g))
      : (g = t[18]),
    g
  );
}
function _r(e) {
  let t = (0, yr.c)(49),
    {
      isAdvancePending: r,
      onContinue: i,
      includesFinance: a,
      onRoleSubmitted: o,
      onRestart: s,
      onScrolledContentUnderHeaderChange: c,
    } = e,
    d = u(B),
    { mutateAsync: f } = De(),
    m = _(G),
    h = _(Tn),
    g = _(H),
    v = _(Rn),
    y;
  t[0] !== g || t[1] !== v || t[2] !== m
    ? ((y = v?.serverId === g ? v.view : null),
      (m.status === `tasks` || m.status === `task-step`) && (y = m),
      (t[0] = g),
      (t[1] = v),
      (t[2] = m),
      (t[3] = y))
    : (y = t[3]);
  let b = _(U),
    x = b.status === `conversation` ? b.conversationId : null,
    S = p(kn, x),
    C = _(S.submittedRole$),
    { editable: w, question: T, hasError: E, loading: D, showFooter: O, pending: k } = _(S.presentation$),
    A;
  t[4] !== f || t[5] !== o || t[6] !== S || t[7] !== d || t[8] !== m.request || t[9] !== m.status
    ? ((A = (e) => {
        let t = e !== void 0 && e;
        m.status === `ready` &&
          (S.submit(m.request.messageId, f, t), d.get(S.submission$) === `pending` && o());
      }),
      (t[4] = f),
      (t[5] = o),
      (t[6] = S),
      (t[7] = d),
      (t[8] = m.request),
      (t[9] = m.status),
      (t[10] = A))
    : (A = t[10]);
  let j = A,
    ee = m.status === `task-step` && m.data.step.view === `finished`,
    te;
  t[11] !== ee ||
  t[12] !== E ||
  t[13] !== D ||
  t[14] !== s ||
  t[15] !== S ||
  t[16] !== d ||
  t[17] !== g ||
  t[18] !== h ||
  t[19] !== y
    ? ((te = (e, t) =>
        (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-6 text-lg leading-6`,
          children: [
            y == null && D
              ? (0, $.jsx)(`div`, { role: `status`, children: (0, $.jsx)(ge, { fadeIn: !0, loading: !0 }) })
              : null,
            E
              ? (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    y == null
                      ? (0, $.jsx)(`p`, {
                          role: `alert`,
                          children: (0, $.jsx)(l, {
                            id: `electron.onboarding.desktopRole.setupError`,
                            defaultMessage: `Couldn’t load setup. Please try again`,
                            description: `Recoverable error when desktop onboarding cannot submit a role or load supported starter tasks`,
                          }),
                        })
                      : null,
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-wrap gap-2`,
                      children: [
                        g != null && y == null
                          ? (0, $.jsx)(n, {
                              type: `button`,
                              color: `outline`,
                              size: `compact`,
                              onClick: () => void S.retry(),
                              children: (0, $.jsx)(l, {
                                id: `electron.onboarding.desktopRole.retry`,
                                defaultMessage: `Retry`,
                                description: `Retries loading the desktop onboarding role question`,
                              }),
                            })
                          : null,
                        (0, $.jsx)(n, {
                          type: `button`,
                          color: `outline`,
                          size: `compact`,
                          onClick: () => {
                            (fn(d), s());
                          },
                          children: (0, $.jsx)(l, {
                            id: `electron.onboarding.desktopRole.restart`,
                            defaultMessage: `Restart setup`,
                            description: `Starts a new setup session after the previous attempt could not be recovered`,
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            (0, $.jsx)(sr, {
              turns: h,
              currentView: ee ? null : y,
              scrollChoicesIntoView: e,
              scrollCurrentTurnIntoView: t,
            }),
          ],
        })),
      (t[11] = ee),
      (t[12] = E),
      (t[13] = D),
      (t[14] = s),
      (t[15] = S),
      (t[16] = d),
      (t[17] = g),
      (t[18] = h),
      (t[19] = y),
      (t[20] = te))
    : (te = t[20]);
  let M = te,
    N;
  t[21] === j
    ? (N = t[22])
    : ((N = (e) => {
        (e.preventDefault(), j());
      }),
      (t[21] = j),
      (t[22] = N));
  let P;
  t[23] !== x || t[24] !== w || t[25] !== T || t[26] !== M || t[27] !== C
    ? ((P = (e) => {
        let { scrollChoicesIntoView: t, scrollCurrentTurnIntoView: n } = e;
        return (0, $.jsxs)($.Fragment, {
          children: [
            T != null && x != null
              ? (0, $.jsx)(Nn, { question: T, conversationId: x, editable: w }, x)
              : null,
            C != null && !w
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `mt-4 text-lg leading-6`,
                      children: (0, $.jsx)(At, {
                        answer:
                          C.selection ??
                          (0, $.jsx)(l, {
                            id: `electron.onboarding.desktopRole.skippedAnswer`,
                            defaultMessage: `Skipped`,
                            description: `User answer in the setup conversation after choosing to skip the role question`,
                          }),
                      }),
                    }),
                    (0, $.jsx)(`div`, {
                      ref: vr,
                      className: `mt-6 outline-none`,
                      tabIndex: -1,
                      children: M(t, n),
                    }),
                  ],
                })
              : M(t, n),
          ],
        });
      }),
      (t[23] = x),
      (t[24] = w),
      (t[25] = T),
      (t[26] = M),
      (t[27] = C),
      (t[28] = P))
    : (P = t[28]);
  let F;
  t[29] !== c || t[30] !== P
    ? ((F = (0, $.jsx)(ln, { onScrolledContentUnderHeaderChange: c, children: P })),
      (t[29] = c),
      (t[30] = P),
      (t[31] = F))
    : (F = t[31]);
  let I;
  t[32] !== a || t[33] !== r || t[34] !== i || t[35] !== d || t[36] !== y
    ? ((I =
        y == null
          ? null
          : (0, $.jsx)(ir, {
              isAdvancePending: r,
              onFinish: (e) => jn(d, e, i),
              includesFinance: a,
              view: y,
            })),
      (t[32] = a),
      (t[33] = r),
      (t[34] = i),
      (t[35] = d),
      (t[36] = y),
      (t[37] = I))
    : (I = t[37]);
  let L;
  t[38] !== x || t[39] !== w || t[40] !== k || t[41] !== O || t[42] !== j
    ? ((L =
        x != null && O
          ? (0, $.jsx)(Fn, { conversationId: x, disabled: !w, pending: k, onSkip: () => j(!0) })
          : null),
      (t[38] = x),
      (t[39] = w),
      (t[40] = k),
      (t[41] = O),
      (t[42] = j),
      (t[43] = L))
    : (L = t[43]);
  let ne;
  return (
    t[44] !== N || t[45] !== F || t[46] !== I || t[47] !== L
      ? ((ne = (0, $.jsxs)(`form`, {
          className: `relative flex h-full min-h-0 w-full flex-col bg-transparent tracking-normal text-default select-text [--codex-chat-font-size:16px]`,
          onSubmit: N,
          children: [F, I, L],
        })),
        (t[44] = N),
        (t[45] = F),
        (t[46] = I),
        (t[47] = L),
        (t[48] = ne))
      : (ne = t[48]),
    ne
  );
}
function vr(e) {
  e?.focus({ preventScroll: !0 });
}
var yr, $;
function br() {
  return (br = e(() => {
    ((yr = re()),
      ee(),
      d(),
      D(),
      Ze(),
      pe(),
      L(),
      kt(),
      Ce(),
      Ut(),
      ut(),
      Bt(),
      Mn(),
      En(),
      An(),
      W(),
      Ln(),
      Vn(),
      hr(),
      or(),
      ($ = oe()));
  }))();
}
br();
export { gr as DILOnboardingStep };
//# sourceMappingURL=step-76aaebcd07ed.js.map
