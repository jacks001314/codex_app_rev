const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./kickoff-a8ac38252e1b.js",
      "./kickoff-5a2682a771f3.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./submit-chatgpt-completion-26802baa1180.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  CCt as i,
  ETt as a,
  FBt as o,
  FTt as s,
  HFt as c,
  ITt as l,
  JOt as u,
  LNt as d,
  LRt as f,
  NLt as p,
  Ngt as m,
  OFt as h,
  PBt as g,
  Qst as _,
  RFt as v,
  SCt as y,
  SLt as b,
  TCt as x,
  TTt as S,
  ULt as C,
  VRt as w,
  XOt as T,
  Y3 as E,
  Yst as D,
  Z3 as O,
  ZSt as k,
  _wt as ee,
  aCt as A,
  cmt as j,
  gB as M,
  hB as N,
  hRt as P,
  iCt as F,
  kCt as I,
  kFt as te,
  kLt as ne,
  kRt as L,
  nCt as re,
  okt as ie,
  sct as ae,
  tCt as R,
  tkt as oe,
  yCt as se,
  zFt as ce,
  zxt as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as ue,
  C1n as de,
  CIr as fe,
  DA as pe,
  Dcn as me,
  Dmr as he,
  Hpr as ge,
  Ipr as _e,
  J1n as ve,
  KBr as ye,
  LTt as be,
  Lpr as xe,
  M6t as Se,
  N6t as Ce,
  Nkn as we,
  OA as Te,
  QCr as Ee,
  Rpr as De,
  SIr as Oe,
  Upr as ke,
  VPn as Ae,
  WCr as je,
  Y1n as Me,
  bLr as Ne,
  cBr as Pe,
  dPn as Fe,
  imr as Ie,
  jcn as Le,
  l1n as Re,
  lBr as ze,
  lkn as Be,
  m0n as Ve,
  mPn as He,
  mkn as Ue,
  n0n as We,
  nwr as z,
  qCr as Ge,
  rmr as Ke,
  tEt as qe,
  tFn as Je,
  ukn as Ye,
  vBr as Xe,
  vkn as Ze,
  wLr as Qe,
  wcn as $e,
  wkn as et,
  x0n as tt,
  yBr as nt,
  ykn as rt,
  zRr as it,
  zpr as at,
} from "./app-initial-ad16eaadf81f.js";
import { wy as ot, xy as st } from "./app-primary-3e00728c2a4c.js";
import {
  E as ct,
  S as lt,
  a as ut,
  f as dt,
  s as ft,
  w as pt,
} from "./conversational-onboarding-task-completion-dynamic-tool-57a5acb42248.js";
import { b as mt, w as ht } from "./mojito-locales-7ddf8b1d7b97.js";
import {
  $ as gt,
  A as _t,
  B as vt,
  Ct as yt,
  D as bt,
  E as xt,
  F as St,
  I as Ct,
  L as wt,
  M as Tt,
  Nt as Et,
  P as Dt,
  Pt as Ot,
  R as kt,
  S as At,
  St as jt,
  T as Mt,
  Tt as Nt,
  X as Pt,
  Y as Ft,
  Z as It,
  _t as Lt,
  bt as Rt,
  ct as zt,
  ft as Bt,
  j as Vt,
  k as Ht,
  nt as Ut,
  ot as Wt,
  pt as Gt,
  rt as Kt,
  tt as qt,
  v as Jt,
  vt as Yt,
  w as Xt,
  wt as Zt,
  xt as Qt,
  y as $t,
  yt as en,
  z as tn,
} from "./tasks-fe81dbed229b.js";
import { n as nn, t as rn } from "./streaming-text-a5cde5d775f5.js";
import { n as an, r as on } from "./task-icon-1c5936088108.js";
import {
  A as B,
  C as sn,
  D as cn,
  E as ln,
  F as un,
  M as dn,
  P as fn,
  S as pn,
  a as mn,
  b as hn,
  c as gn,
  d as _n,
  f as vn,
  g as yn,
  h as bn,
  i as xn,
  j as Sn,
  l as Cn,
  m as wn,
  n as Tn,
  o as En,
  p as Dn,
  r as On,
  s as kn,
  t as An,
  u as jn,
  x as Mn,
  y as Nn,
} from "./use-conversational-onboarding-local-plugins-7d7956127060.js";
function Pn(e) {
  (e.set(W, { status: `idle` }), e.set(H, (e) => e + 1));
}
function Fn(e, t, n) {
  let r = e.get(H);
  e.get(zn) !== r && (e.set(zn, r), t ? lt(e, n) : dt(e, n));
}
async function In(e) {
  let t = e.getOwnValue(V),
    n = () => e.get(B) === `enabled` && e.get(it) === t.accountId && e.get(Ne) === t.userId,
    r = e.get(U);
  if (r == null || e.get(Bn) || !n()) return !1;
  let i = e.get(H);
  e.set(Bn, !0);
  try {
    let t = await Fe(e, r, { forceFull: !0, isTemporaryChat: e.get(ve, r) });
    if (e.get(H) === i && n()) return (Je(e, t), !0);
  } catch {
  } finally {
    e.set(Bn, !1);
  }
  return !1;
}
async function Ln(e, t, n) {
  let r = () => e.get(H) === n,
    i = (t) => {
      r() && e.set(W, { status: `conversation`, conversationId: t });
    };
  try {
    let { submitSheepOnboardingKickoff: n } = await h(
      async () => {
        let { submitSheepOnboardingKickoff: e } = await import(`./kickoff-a8ac38252e1b.js`);
        return { submitSheepOnboardingKickoff: e };
      },
      __vite__mapDeps([0, 1, 2, 3, 4]),
      import.meta.url,
    );
    if ((t.throwIfAborted(), !Pe(e, `3294441402`))) {
      e.set(W, { status: `error` });
      return;
    }
    let a = e.get(fe),
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
        ? e.set(W, { status: `error` })
        : (e.get(U) ?? i(o.serverConversationId ?? o.conversationId)));
  } catch {
    r() && !t.aborted && e.get(W).status !== `conversation` && e.set(W, { status: `error` });
  }
}
var V, H, Rn, zn, Bn, U, W;
function G() {
  return (G = e(() => {
    (k(),
      Qe(),
      Ae(),
      He(),
      Oe(),
      r(),
      ze(),
      ut(),
      Sn(),
      te(),
      (V = ee(`DILOnboardingScope`, { parent: _, retain: { autoDispose: !1 } })),
      (H = I(V, 0)),
      (Rn = I(V, -1)),
      (zn = I(V, -1)),
      (Bn = I(V, !1)),
      (U = i(V, ({ get: e }) => {
        let t = e(W);
        return t.status === `conversation` ? e(ue, t.conversationId) : null;
      })),
      (W = I(V, () => ({ status: `idle` }), {
        onMount: (e, t) =>
          t.watch(({ get: n }) => {
            let r = n(H),
              i = t.getOwnValue(V);
            if (
              n(B) !== `enabled` ||
              n(it) !== i.accountId ||
              n(Ne) !== i.userId ||
              t.get(W).status !== `idle`
            )
              return;
            let a = new AbortController();
            return (
              e({ status: `loading` }),
              t.get(Rn) !== r && (t.set(Rn, r), pt(t)),
              Ln(t, a.signal, r),
              () => {
                (a.abort(), t.get(W).status === `loading` && e({ status: `idle` }));
              }
            );
          }),
      })));
  }))();
}
function Vn(e) {
  let t = z(e?.metadata?.onboarding);
  if (
    e?.author.role === `assistant` &&
    e.id != null &&
    e.status === `finished_successfully` &&
    t?.flow_id === `desktop_setup` &&
    t.experience_id === `desktop_setup_v1` &&
    t.state_id === `tasks` &&
    t.component_id === `starter_tasks`
  ) {
    let n = Kn.safeParse(z(t.component_inputs)?.starter_tasks),
      r = Re(e.metadata).find((e) => e.type === `dil` && e.name === `onboarding_starter_tasks`);
    if (n.success && r != null)
      return {
        status: `tasks`,
        sourceMessageId: e.id,
        tasks: n.data,
        introduction: typeof r.start_idx == `number` ? Ge(e).slice(0, r.start_idx).trim() : ``,
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
    let n = Gn.safeParse(z(t.component_inputs)?.native_task_step);
    if (n.success) {
      let t = Re(e.metadata).find(
        (e) => e.type === `client_defined_widget` && e.category === `onboarding_native_task_step`,
      );
      return {
        status: `task-step`,
        sourceMessageId: e.id,
        data: n.data,
        assistantText: typeof t?.end_idx == `number` ? Ge(e).slice(t.end_idx).trim() : void 0,
      };
    }
  }
  return null;
}
var Hn, Un, Wn, Gn, Kn, K, qn;
function Jn() {
  return (Jn = e(() => {
    (k(),
      de(),
      Ee(),
      c(),
      Ae(),
      ot(),
      Sn(),
      G(),
      (Hn = L({ id: w().min(1), label: w(), icon: w() })),
      (Un = L({
        operationId: w().min(1),
        status: b([`completed`, `cancelled`, `failed`, `not_completed`, `interrupted`]),
        assistantText: w().nullish(),
        connected: p().nullish(),
      })),
      (Wn = C(`kind`, [
        L({ kind: P(`native`), taskId: w().min(1) }),
        L({ kind: P(`plugin`), pluginName: w().min(1), pluginId: w().min(1).nullish(), prompt: w().min(1) }),
      ])),
      (Gn = L({
        intro: w(),
        step: C(`view`, [
          L({
            view: P(`execute`),
            task: Hn,
            execution: Wn.nullable().catch(null),
            completionResult: w().nullish(),
          }),
          L({
            view: P(`result`),
            task: Hn,
            outcome: Un,
            presentation: C(`kind`, [
              L({ kind: P(`native`), taskId: w().min(1) }),
              L({ kind: P(`plugin`), pluginName: w(), pluginId: w().nullish() }),
            ]),
            intro: w(),
            completionMessage: w(),
            completionLinkLabel: w().optional(),
          }),
          L({ view: b([`error`, `incomplete`]), task: Hn, outcome: Un }),
          L({ view: P(`finished`), completedTask: Hn.nullish(), skipped: p() }),
        ]),
        events: f(w(), w().min(1)),
      })),
      (Kn = L({
        variant: P(`desktop_selection`),
        heading: w(),
        action: L({ type: P(`onboarding`), event: w().min(1), skip_event: w().min(1).nullish() }),
        tasks: ne(L({ id: w().min(1), label: w().min(1), icon: w().min(1) })).max(24),
      }).refine(({ tasks: e }) => new Set(e.map((e) => e.id)).size === e.length)),
      (K = i(V, ({ get: e }) => {
        let t = e(W);
        if (e(B) !== `enabled`) return { status: `idle` };
        if (e(Bn)) return { status: `loading` };
        if (t.status !== `conversation`) return t;
        let { conversationId: n } = t,
          r = e(Ve, n),
          i = e(st, n),
          a = e(Me, n),
          o = a == null ? null : e(We, n)?.[a]?.message,
          s = z(o?.metadata?.onboarding),
          c = Re(o?.metadata).filter(
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
          z(l.data)?.feature === `onboarding`
          ? { status: `ready`, request: i, submitEvent: s.submit_event }
          : (Vn(o) ??
              (r === `error`
                ? { status: `error` }
                : {
                    status: tt(r) ? `loading` : `unsupported`,
                    diagnostic: s ?? (o == null ? null : Ge(o)),
                  }));
      })),
      (qn = i(V, ({ get: e }) => {
        let t = e(W);
        if (t.status !== `conversation` || e(B) !== `enabled`) return [];
        let n = e(We, t.conversationId);
        if (n == null) return [];
        let r = je({ mapping: n, current_node: e(Me, t.conversationId) }),
          i = [],
          a = ``,
          o = !1,
          s = null;
        for (let e of r) {
          let t = Vn(e);
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
          let n = z(z(e.metadata?.onboarding)?.framework),
            r = i.at(-1);
          if (e.author.role === `user` && r != null && n?.source_message_id === r.view.sourceMessageId) {
            if (r.view.status === `tasks`) {
              let t = z(n.inputs)?.taskId;
              n.event === r.view.tasks.action.event && typeof t == `string`
                ? ((r.selectedTaskId = t), (r.answer = Ge(e)), (o = !0))
                : r.view.tasks.action.skip_event != null &&
                  n.event === r.view.tasks.action.skip_event &&
                  (r.answer = Ge(e));
            } else
              n.event !== r.view.data.events.report &&
                typeof n.event == `string` &&
                Object.values(r.view.data.events).includes(n.event) &&
                (r.answer = Ge(e));
          }
        }
        return i;
      })));
  }))();
}
function Yn(e, t) {
  let n = null,
    r = !1,
    i = (n, r) => {
      let i = e.get(W),
        a = e.getOwnValue(V);
      return (
        t.isActive() &&
        n != null &&
        i.status === `conversation` &&
        i.conversationId === n &&
        e.get(U) === r &&
        e.get(B) === `enabled` &&
        e.get(it) === a.accountId &&
        e.get(Ne) === a.userId
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
        s = e.get(W),
        c = e.get(U);
      if (r || c == null || !i(s.status === `conversation` ? s.conversationId : null, c) || !t.canSend(o))
        return;
      let l = new AbortController();
      ((n = l), t.setStatus(o, `pending`));
      let u = () =>
          n === l && !l.signal.aborted && i(s.status === `conversation` ? s.conversationId : null, c),
        d = () => u() && t.isSourceCurrent(o);
      try {
        let { submitChatGPTCompletion: n, submitChatGPTLocalFunctionResult: r } = await h(
          async () => {
            let { submitChatGPTCompletion: e, submitChatGPTLocalFunctionResult: t } = await import(
              `./submit-chatgpt-completion-26802baa1180.js`
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
          isTemporaryChat: e.get(ve, c),
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
      let a = e.get(W),
        o = e.get(U);
      if (o == null || !i(a.status === `conversation` ? a.conversationId : null, o)) return !1;
      ((r = !0), n?.abort(), (n = null));
      try {
        return (await In(e)) && i(a.status === `conversation` ? a.conversationId : null, o);
      } finally {
        r = !1;
      }
    },
  };
}
function Xn() {
  return (Xn = e(() => {
    (Qe(), Ae(), Sn(), G(), te());
  }))();
}
var Zn;
function Qn() {
  return (Qn = e(() => {
    (k(),
      Qe(),
      Oe(),
      Ze(),
      Xn(),
      Sn(),
      Jn(),
      G(),
      (Zn = x(V, (e, { scope: t, signal: n, derived: r }) => {
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
                  let r = t.getOwnValue(V);
                  (n(it) !== r.accountId || n(Ne) !== r.userId || n(B) !== `enabled`) &&
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
              r = t.get(K);
            return r.status === `tasks` || r.status === `task-step`
              ? `submitted`
              : r.status === `ready` && r.request.messageId !== n.sourceMessageId
                ? `idle`
                : n.status;
          }),
          u = r((e, { scope: t }) => {
            let n = e(s),
              r = n.customValue.trim() || n.selection,
              i = t.get(K);
            if (i.status !== `ready` || !r || r.length > 1e3) return null;
            let a = i.request.questions[0];
            return a.allow_custom_text === !1 && !a.options.includes(r) ? null : r;
          }),
          d = r((e) => e(l) === `idle` && e(u) != null),
          f = r((e, { scope: t }) => {
            let n = t.get(K),
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
          p = Yn(t, {
            isActive: () => {
              let n = t.get(W);
              return i && n.status === `conversation` && n.conversationId === e;
            },
            canSend: () => t.get(l) === `idle`,
            isSourceCurrent: (e) => {
              let n = t.get(K);
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
            let f = t.get(K),
              m = t.get(s),
              h = c ? null : t.get(u),
              g = t.get(U);
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
            let _ = t.get(fe),
              v = Ye.find((e) => e === h || _.formatMessage(Be[e]) === h),
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
function $n(e, t, n) {
  let r = e.get(W),
    i = e.get(Zn, r.status === `conversation` ? r.conversationId : null),
    a = e.get(i.submittedRole$),
    o = e.get(we) ?? rt,
    s = a?.role == null ? o.roles : [a.role],
    c = e.get(qn),
    l = c.at(-1),
    u = l?.view.status === `task-step` ? l.view.data.step : null,
    d = u?.view === `finished` ? u.completedTask : null;
  u?.view === `result` && u.outcome.status === `completed` && (d = u.task);
  let f = c.findLast(({ view: e }) => e.status !== `task-step` || e.data.step.view !== `finished`),
    p = d?.id ?? null;
  (p == null &&
    f != null &&
    (f.view.status === `tasks`
      ? (p = f.selectedTaskId ?? null)
      : f.view.data.step.view !== `finished` && (p = f.view.data.step.task.id)),
    Fn(e, t, p),
    n({
      step: Bt.ConversationalOnboarding,
      completedConversationalOnboardingTaskId: d?.id ?? null,
      completedConversationalOnboardingTaskSnapshot: d == null ? null : { label: d.label },
      onboardingCreditRewardWarningShown: !1,
      roles: s,
      personalizedSuggestionsEnabled:
        a == null ? o.personalizedSuggestionsEnabled : e.get(i.draft$).personalizedSuggestionsEnabled,
      workMode: s.length === 0 ? null : Ue(s),
      skipRemainingOnboarding: t,
      conversationalOnboardingSkipped: t,
    })
      .then(() => mt(e, D))
      .catch((e) => {
        ce.warning(`Failed to finish desktop onboarding bookkeeping`, { safe: {}, sensitive: { error: e } });
      }));
}
function er() {
  return (er = e(() => {
    (Ze(), et(), ye(), v(), Gt(), ht(), Jn(), Qn(), G());
  }))();
}
function tr(e) {
  let t = (0, ir.c)(44),
    { question: r, conversationId: i, editable: o } = e,
    s = n(V),
    c = ie(),
    l = R(Zn, i),
    u = F(l.draft$),
    d = F(l.submission$),
    f = Ie(),
    p = f.authMethod === `chatgpt`,
    m;
  t[0] !== f.accountId || t[1] !== f.userId || t[2] !== p
    ? ((m = { accountId: f.accountId, enabled: p, userId: f.userId }),
      (t[0] = f.accountId),
      (t[1] = f.userId),
      (t[2] = p),
      (t[3] = m))
    : (m = t[3]);
  let { data: h, isLoading: g } = qe(m),
    _ = a() === !0,
    v = F(l.intro$),
    y,
    b,
    x;
  if (t[4] !== c || t[5] !== v.firstName || t[6] !== h?.displayName) {
    x = h?.displayName?.trim().split(/\s+/)[0] || void 0;
    let e = v.firstName ?? x;
    ((y = Dn),
      (b = e == null ? c.formatMessage(vn.greeting) : c.formatMessage(vn.greetingWithName, { firstName: e })),
      (t[4] = c),
      (t[5] = v.firstName),
      (t[6] = h?.displayName),
      (t[7] = y),
      (t[8] = b),
      (t[9] = x));
  } else ((y = t[7]), (b = t[8]), (x = t[9]));
  let S;
  t[10] === c ? (S = t[11]) : ((S = c.formatMessage(vn.welcomeIntroduction)), (t[10] = c), (t[11] = S));
  let C = _ || v.complete,
    w;
  t[12] !== v || t[13] !== l.intro$ || t[14] !== s || t[15] !== x
    ? ((w = () => s.set(l.intro$, { ...v, firstName: x })),
      (t[12] = v),
      (t[13] = l.intro$),
      (t[14] = s),
      (t[15] = x),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== l.intro$ || t[18] !== s
    ? ((T = () => s.set(l.intro$, { ...s.get(l.intro$), complete: !0 })),
      (t[17] = l.intro$),
      (t[18] = s),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== y ||
  t[21] !== g ||
  t[22] !== r.question ||
  t[23] !== b ||
  t[24] !== S ||
  t[25] !== C ||
  t[26] !== w ||
  t[27] !== T
    ? ((E = (0, q.jsx)(y, {
        greeting: b,
        welcome: S,
        question: r.question,
        initiallyComplete: C,
        loading: g,
        onInitialContentReady: w,
        onComplete: T,
      })),
      (t[20] = y),
      (t[21] = g),
      (t[22] = r.question),
      (t[23] = b),
      (t[24] = S),
      (t[25] = C),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E))
    : (E = t[28]);
  let D;
  t[29] !== u ||
  t[30] !== o ||
  t[31] !== v.complete ||
  t[32] !== r.allow_custom_text ||
  t[33] !== r.free_text_placeholder ||
  t[34] !== r.options ||
  t[35] !== r.question ||
  t[36] !== l.draft$ ||
  t[37] !== s ||
  t[38] !== _ ||
  t[39] !== d
    ? ((D =
        o &&
        (_ || v.complete) &&
        (0, q.jsx)(Cn, {
          name: `dil-onboarding-role`,
          legend: r.question,
          options: r.options.map(nr),
          selectedValue: u.selection,
          disabled: d !== `idle`,
          customValue: u.customValue,
          freeTextPlaceholder: r.allow_custom_text === !1 ? void 0 : r.free_text_placeholder,
          onSelect: (e) => s.set(l.draft$, { ...u, selection: e, customValue: `` }),
          onCustomValueChange: (e) => s.set(l.draft$, { ...u, selection: null, customValue: e }),
        })),
      (t[29] = u),
      (t[30] = o),
      (t[31] = v.complete),
      (t[32] = r.allow_custom_text),
      (t[33] = r.free_text_placeholder),
      (t[34] = r.options),
      (t[35] = r.question),
      (t[36] = l.draft$),
      (t[37] = s),
      (t[38] = _),
      (t[39] = d),
      (t[40] = D))
    : (D = t[40]);
  let O;
  return (
    t[41] !== E || t[42] !== D
      ? ((O = (0, q.jsxs)(q.Fragment, { children: [E, D] })), (t[41] = E), (t[42] = D), (t[43] = O))
      : (O = t[43]),
    O
  );
}
function nr(e) {
  return { value: e, label: e };
}
function rr(e) {
  let t = (0, ir.c)(17),
    { conversationId: r, disabled: i, pending: o, onSkip: s } = e,
    c = n(V),
    l = R(Zn, r),
    u = F(l.draft$),
    d = F(l.intro$),
    f = a() === !0,
    p = F(l.canSubmit$);
  if (!f && !d.complete) return null;
  let m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(oe, {
        id: `electron.onboarding.desktopRole.skip`,
        defaultMessage: `Skip`,
        description: `Skips choosing a desktop onboarding role and loads starter tasks without changing the saved role`,
      })),
      (t[0] = m))
    : (m = t[0]);
  let h;
  t[1] !== i || t[2] !== s
    ? ((h = (0, q.jsx)(E, { type: `button`, color: `ghostTertiary`, disabled: i, onClick: s, children: m })),
      (t[1] = i),
      (t[2] = s),
      (t[3] = h))
    : (h = t[3]);
  let g = !p,
    _;
  t[4] !== u || t[5] !== l.draft$ || t[6] !== c
    ? ((_ = (e) => c.set(l.draft$, { ...u, personalizedSuggestionsEnabled: e })),
      (t[4] = u),
      (t[5] = l.draft$),
      (t[6] = c),
      (t[7] = _))
    : (_ = t[7]);
  let v;
  t[8] !== i || t[9] !== u.personalizedSuggestionsEnabled || t[10] !== o || t[11] !== g || t[12] !== _
    ? ((v = (0, q.jsx)(pn, {
        personalizedSuggestionsEnabled: u.personalizedSuggestionsEnabled,
        disabled: i,
        pending: o,
        continueDisabled: g,
        continueType: `submit`,
        onPersonalizedSuggestionsChange: _,
      })),
      (t[8] = i),
      (t[9] = u.personalizedSuggestionsEnabled),
      (t[10] = o),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let y;
  return (
    t[14] !== h || t[15] !== v
      ? ((y = (0, q.jsx)(Mn, { bottomAction: h, children: v })), (t[14] = h), (t[15] = v), (t[16] = y))
      : (y = t[16]),
    y
  );
}
var ir, q;
function ar() {
  return (ar = e(() => {
    ((ir = g()), S(), k(), T(), Ke(), O(), wn(), jn(), sn(), _n(), be(), Qn(), G(), (q = d()));
  }))();
}
var or, sr, cr, lr;
function ur() {
  return (ur = e(() => {
    (k(),
      Qe(),
      Oe(),
      ut(),
      Xn(),
      Sn(),
      Jn(),
      G(),
      (or = I(V, null)),
      (sr = y(V, (e) => null)),
      (cr = x(V, (e, { scope: t, signal: n }) => {
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
            let i = t.getOwnValue(V),
              o = n(K);
            return (
              (r || a) &&
              n(B) === `enabled` &&
              n(it) === i.accountId &&
              n(Ne) === i.userId &&
              (o.status === `tasks` || o.status === `task-step`) &&
              o.sourceMessageId === e
            );
          },
          d = Yn(t, {
            isActive: () => r || a,
            canSend: () => u() && t.get(l) === `idle`,
            isSourceCurrent: () => u(),
            setStatus: (e, n) => {
              if (n === `pending`) {
                let e = t.get(U),
                  n = t.get(K);
                e != null &&
                  (n.status === `tasks` || n.status === `task-step`) &&
                  t.set(or, { serverId: e, view: n });
              }
              t.set(l, n);
            },
          }),
          f = async () => {
            let n = t.get(K),
              r = t.get(s);
            if (!u() || n.status !== `task-step` || n.data.events.report == null || r?.result == null) return;
            let i = r.result,
              a = n.data.step;
            i.status === `completed` &&
              a.view === `execute` &&
              t.set(
                sr,
                { serverId: t.get(U), operationId: r.operationId },
                a.execution?.kind === `plugin` ? { url: i.url } : { output: i.output },
              );
            let o = null;
            if (
              i.status === `completed` &&
              a.view === `execute` &&
              a.execution?.kind === `plugin` &&
              a.completionResult != null
            ) {
              let e = t.get(fe),
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
            let r = t.get(K);
            if (r.status !== `tasks`) return;
            let a = r.tasks.tasks.find((e) => e.id === n);
            a != null &&
              u() &&
              t.get(l) === `idle` &&
              (!d.recovering && t.get(U) != null && i !== n && (ct(t, n), (i = n)),
              t.set(c, a),
              await d.send({
                sourceMessageId: e,
                event: r.tasks.action.event,
                inputs: { taskId: n },
                prompt: a.label,
              }));
          },
          act: async (n, r) => {
            let i = t.get(K);
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
            let n = t.get(K);
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
      (lr = se(V, (e, { get: t }) => {
        let n = t(cr, e.sourceMessageId),
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
function dr(e) {
  let t = (0, pr.c)(19),
    {
      tasks: n,
      introduction: r,
      scrollChoicesIntoView: i,
      disabled: o,
      selectedTaskId: s,
      animate: c,
      onSelect: u,
    } = e,
    d = o !== void 0 && o,
    f = c === void 0 || c,
    p = a() === !0,
    [m, h] = (0, mr.useState)(p || !f),
    g = !p && !m,
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = () => h(!0)), (t[0] = _)) : (_ = t[0]);
  let v;
  t[1] !== r || t[2] !== n.heading
    ? ((v = [r, n.heading].filter(fr)), (t[1] = r), (t[2] = n.heading), (t[3] = v))
    : (v = t[3]);
  let y = v.join(`

`),
    b;
  t[4] !== g || t[5] !== y
    ? ((b = (0, J.jsx)(rn, { animate: g, onComplete: _, children: y })), (t[4] = g), (t[5] = y), (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== f ||
  t[8] !== d ||
  t[9] !== u ||
  t[10] !== i ||
  t[11] !== s ||
  t[12] !== p ||
  t[13] !== m ||
  t[14] !== n.tasks
    ? ((x = m
        ? (0, J.jsx)(l.div, {
            ref: i,
            animate: { opacity: 1 },
            initial: p || !f ? !1 : { opacity: 0 },
            transition: p ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
            className: `grid w-full scroll-mb-14 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,
            children: n.tasks.map((e) =>
              (0, J.jsx)(
                mn,
                {
                  label: e.label,
                  icon: (0, J.jsx)(an, {
                    className: `size-6 object-contain`,
                    taskId: e.id,
                    fallback: (0, J.jsx)(Se, {
                      alt: ``,
                      className: `size-6 object-contain`,
                      knownAppId: e.icon,
                      loadRemote: !1,
                      fallback: (0, J.jsx)(`span`, { "aria-hidden": !0 }),
                    }),
                  }),
                  selected: s === e.id,
                  disabled: d,
                  onSelect: () => u?.(e.id),
                },
                e.id,
              ),
            ),
          })
        : null),
      (t[7] = f),
      (t[8] = d),
      (t[9] = u),
      (t[10] = i),
      (t[11] = s),
      (t[12] = p),
      (t[13] = m),
      (t[14] = n.tasks),
      (t[15] = x))
    : (x = t[15]);
  let S;
  return (
    t[16] !== b || t[17] !== x
      ? ((S = (0, J.jsxs)(`div`, { className: `flex flex-col gap-6 text-lg leading-6`, children: [b, x] })),
        (t[16] = b),
        (t[17] = x),
        (t[18] = S))
      : (S = t[18]),
    S
  );
}
function fr(e) {
  return e !== ``;
}
var pr, mr, J;
function hr() {
  return (hr = e(() => {
    ((pr = g()), s(), S(), (mr = o()), Ce(), nn(), En(), on(), (J = d()));
  }))();
}
function gr(e) {
  let t = (0, Y.c)(11),
    { execution: n } = e.step;
  if (n?.kind === `plugin` && n.pluginId != null) {
    let r;
    return (
      t[0] !== n || t[1] !== e
        ? ((r = (0, X.jsx)(_r, { ...e, execution: n })), (t[0] = n), (t[1] = e), (t[2] = r))
        : (r = t[2]),
      r
    );
  }
  if (n?.kind === `native` && n.taskId === `desktop_note`) {
    let n;
    return (
      t[3] === e.begin
        ? (n = t[4])
        : ((n = (0, X.jsx)(br, { begin: e.begin })), (t[3] = e.begin), (t[4] = n)),
      n
    );
  }
  if (n?.kind === `native` && (n.taskId === `csv_chart` || n.taskId === `data_science_csv_chart`)) {
    let r = n.taskId === `csv_chart` ? `png` : `html`,
      i;
    return (
      t[5] !== e || t[6] !== r
        ? ((i = (0, X.jsx)(yr, { ...e, format: r })), (t[5] = e), (t[6] = r), (t[7] = i))
        : (i = t[7]),
      i
    );
  }
  let r = n == null ? `failed` : `not_completed`,
    i;
  return (
    t[8] !== e.begin || t[9] !== r
      ? ((i = (0, X.jsx)(xr, { begin: e.begin, status: r })), (t[8] = e.begin), (t[9] = r), (t[10] = i))
      : (i = t[10]),
    i
  );
}
function _r(e) {
  let t = (0, Y.c)(6),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = { hostId: D }), (t[0] = n)) : (n = t[0]);
  let r = xe(n),
    { isPending: i, isError: a } = re(Xe, D);
  if (i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(pe, { fadeIn: !0, loading: !0 })), (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (!r || a) {
    let n;
    return (
      t[2] === e.begin
        ? (n = t[3])
        : ((n = (0, X.jsx)(xr, { begin: e.begin })), (t[2] = e.begin), (t[3] = n)),
      n
    );
  }
  let o;
  return (
    t[4] === e
      ? (o = t[5])
      : ((o = (0, X.jsx)(On, { children: (t) => (0, X.jsx)(vr, { ...e, runtime: t }) })),
        (t[4] = e),
        (t[5] = o)),
    o
  );
}
function vr(e) {
  let t = (0, Y.c)(39),
    { step: r, execution: i, begin: a, runtime: o } = e,
    s = n(It),
    c = Ie(),
    { data: l } = Le(),
    d = l?.plan_type ?? c.planAtLogin,
    f;
  t[0] === i.pluginId
    ? (f = t[1])
    : ((f = i.pluginId == null ? [] : [i.pluginId]), (t[0] = i.pluginId), (t[1] = f));
  let p;
  t[2] !== c.authMethod || t[3] !== o.hostId || t[4] !== d || t[5] !== f
    ? ((p = { authMethod: c.authMethod, enabled: !0, hostId: o.hostId, plan: d, pluginIds: f }),
      (t[2] = c.authMethod),
      (t[3] = o.hostId),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p))
    : (p = t[6]);
  let { data: m, isLoading: h, refetch: g } = Ot(p);
  if (o.isConfigDataPending || o.isModelsLoading || h) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(pe, { fadeIn: !0, loading: !0 })), (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let _;
  t[8] === g ? (_ = t[9]) : ((_ = async () => (await g({ cancelRefetch: !1 })).data), (t[8] = g), (t[9] = _));
  let v;
  t[10] !== m || t[11] !== o || t[12] !== s.queryClient || t[13] !== _
    ? ((v = { ...o, queryClient: s.queryClient, refetchRemotePlugins: _, remotePlugins: m }),
      (t[10] = m),
      (t[11] = o),
      (t[12] = s.queryClient),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y = v,
    b;
  t[15] !== a ||
  t[16] !== y ||
  t[17] !== i.pluginId ||
  t[18] !== i.pluginName ||
  t[19] !== i.prompt ||
  t[20] !== s ||
  t[21] !== r
    ? ((b = () =>
        a(() =>
          Xt(
            s,
            r.task.id,
            y,
            {
              appPluginName: i.pluginName,
              pluginId: i.pluginId ?? null,
              prompt: i.prompt,
              selectedTask: r.task.id,
            },
            {
              requiresModel: !0,
              onInstallCancelled: () => ft(s, r.task.id),
              start: (e, t, n) => Mt(s, e, y, n),
            },
          ),
        )),
      (t[15] = a),
      (t[16] = y),
      (t[17] = i.pluginId),
      (t[18] = i.pluginName),
      (t[19] = i.prompt),
      (t[20] = s),
      (t[21] = r),
      (t[22] = b))
    : (b = t[22]);
  let x = i.pluginId ?? null,
    S = i.pluginName,
    C = i.prompt,
    w,
    T,
    E;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = u({
        id: `electron.onboarding.dil.pluginTask`,
        defaultMessage: `Task`,
        description: `Generic title of the server-selected plugin onboarding task`,
      })),
      (T = u({
        id: `electron.onboarding.dil.pluginCompleted`,
        defaultMessage: `{text} {link}`,
        description: `Plugin task result with its output text and resource link`,
      })),
      (E = u({
        id: `electron.onboarding.dil.openResult`,
        defaultMessage: `View result`,
        description: `Opens the resource created or affected by a plugin onboarding task`,
      })),
      (t[23] = w),
      (t[24] = T),
      (t[25] = E))
    : ((w = t[23]), (T = t[24]), (E = t[25]));
  let D;
  t[26] !== i.pluginName || t[27] !== i.prompt || t[28] !== w || t[29] !== T || t[30] !== E || t[31] !== x
    ? ((D = {
        pluginId: x,
        pluginName: S,
        prompt: C,
        label: w,
        completionMessage: T,
        completionLinkLabel: E,
      }),
      (t[26] = i.pluginName),
      (t[27] = i.prompt),
      (t[28] = w),
      (t[29] = T),
      (t[30] = E),
      (t[31] = x),
      (t[32] = D))
    : (D = t[32]);
  let O;
  t[33] !== m || t[34] !== D
    ? ((O = (0, X.jsx)(Jt, { remotePlugins: m, permissionStatus: `pending`, definition: D })),
      (t[33] = m),
      (t[34] = D),
      (t[35] = O))
    : (O = t[35]);
  let k;
  return (
    t[36] !== O || t[37] !== b
      ? ((k = (0, X.jsx)(Cr, { begin: b, children: O })), (t[36] = O), (t[37] = b), (t[38] = k))
      : (k = t[38]),
    k
  );
}
function yr(e) {
  let t = (0, Y.c)(10),
    { step: r, begin: i, format: a } = e,
    o = n(It),
    s;
  t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== r
    ? ((s = () =>
        i(() => {
          let e = St(o, r.task.id, j(`~`), a);
          return (e.start(), e);
        })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o),
      (t[3] = r),
      (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === a ? (c = t[6]) : ((c = (0, X.jsx)(Tt, { hostId: D, format: a })), (t[5] = a), (t[6] = c));
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, X.jsx)(Cr, { begin: s, children: c })), (t[7] = s), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function br(e) {
  let t = (0, Y.c)(10),
    { begin: r } = e,
    i = n(It),
    a;
  t[0] === i ? (a = t[1]) : ((a = () => Ft(i)?.attempt.cancel(`cancelled`)), (t[0] = i), (t[1] = a));
  let o = a,
    s;
  t[2] !== r || t[3] !== i
    ? ((s = () => r(() => (Ut(i), Ht.reset(i), Vt(i)))), (t[2] = r), (t[3] = i), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === o
    ? (c = t[6])
    : ((c = (0, X.jsx)(bt, { hostId: D, onChooseAnotherTask: o, onRetryTask: o })), (t[5] = o), (t[6] = c));
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, X.jsx)(Cr, { begin: s, children: c })), (t[7] = s), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function xr(e) {
  let t = (0, Y.c)(6),
    { begin: n, status: r } = e,
    i = r === void 0 ? `not_completed` : r,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = () =>
        n(() => ({ started: Promise.resolve(), result: Promise.resolve({ status: i }), cancel: Sr }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(pe, { fadeIn: !0, loading: !0 })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === a ? (s = t[5]) : ((s = (0, X.jsx)(Cr, { begin: a, children: o })), (t[4] = a), (t[5] = s)),
    s
  );
}
function Sr() {}
function Cr(e) {
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
  let a = M(i),
    o;
  return (
    t[2] !== r || t[3] !== a
      ? ((o = (0, X.jsx)(`div`, { ref: a, children: r })), (t[2] = r), (t[3] = a), (t[4] = o))
      : (o = t[4]),
    o
  );
}
var Y, X;
function wr() {
  return (wr = e(() => {
    ((Y = g()),
      k(),
      ae(),
      T(),
      Ke(),
      $e(),
      _e(),
      Te(),
      nt(),
      ye(),
      N(),
      ut(),
      Dt(),
      _t(),
      Pt(),
      qt(),
      xn(),
      At(),
      $t(),
      Et(),
      (X = d()));
  }))();
}
function Tr(e) {
  let t = (0, Dr.c)(2),
    { phase: n } = e,
    r = F(n.kind === `result` ? gt : null);
  if (n.kind === `result` && !r) return n.fallback;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, Or.jsx)(On, { children: (e) => (0, Or.jsx)(Er, { phase: n, runtime: e }) })),
        (t[0] = n),
        (t[1] = i)),
    i
  );
}
function Er(e) {
  let t = (0, Dr.c)(31),
    { phase: r, runtime: i } = e,
    a = n(It),
    o = Ie(),
    { platform: s } = ke(),
    c;
  t[0] === i.hostId ? (c = t[1]) : ((c = { hostId: i.hostId }), (t[0] = i.hostId), (t[1] = c));
  let l = xe(c),
    u = r.kind === `execute` && l,
    d;
  t[2] !== i.hostId || t[3] !== u
    ? ((d = { enabled: u, hostId: i.hostId }), (t[2] = i.hostId), (t[3] = u), (t[4] = d))
    : (d = t[4]);
  let { available: f, isLoading: p } = at(d),
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = [le]), (t[5] = m)) : (m = t[5]);
  let h;
  t[6] !== o.authMethod || t[7] !== i.hostId
    ? ((h = { authMethod: o.authMethod, hostId: i.hostId, pluginNames: m }),
      (t[6] = o.authMethod),
      (t[7] = i.hostId),
      (t[8] = h))
    : (h = t[8]);
  let { data: g, isLoading: _, refetch: v } = Tn(h);
  if (r.kind === `execute`) {
    if (p || _ || i.isConfigDataPending || i.isModelsLoading) {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Or.jsx)(pe, { fadeIn: !0, loading: !0 })), (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    if (!l || !f || s !== `macOS`) {
      let e;
      return (
        t[10] === r.begin
          ? (e = t[11])
          : ((e = (0, Or.jsx)(xr, { begin: r.begin })), (t[10] = r.begin), (t[11] = e)),
        e
      );
    }
  }
  let y;
  t[12] === a ? (y = t[13]) : ((y = () => Ft(a)?.attempt.cancel(`cancelled`)), (t[12] = a), (t[13] = y));
  let b = y,
    x;
  t[14] === v
    ? (x = t[15])
    : ((x = async () => (await v({ cancelRefetch: !1 })).data), (t[14] = v), (t[15] = x));
  let S;
  t[16] !== b || t[17] !== _ || t[18] !== g || t[19] !== i || t[20] !== a.queryClient || t[21] !== x
    ? ((S = {
        ...i,
        queryClient: a.queryClient,
        localPlugins: g,
        isPluginsLoading: _,
        refetchLocalPlugins: x,
        onPluginUnavailable: b,
      }),
      (t[16] = b),
      (t[17] = _),
      (t[18] = g),
      (t[19] = i),
      (t[20] = a.queryClient),
      (t[21] = x),
      (t[22] = S))
    : (S = t[22]);
  let C = S,
    w;
  t[23] !== b || t[24] !== C
    ? ((w = (0, Or.jsx)(kt, {
        context: C,
        task: `computer_use`,
        isAppWindowFocused: !0,
        onChooseAnotherTask: b,
        onRetryTask: b,
      })),
      (t[23] = b),
      (t[24] = C),
      (t[25] = w))
    : (w = t[25]);
  let T = w,
    E;
  return (
    t[26] !== T || t[27] !== r || t[28] !== i.hostId || t[29] !== a
      ? ((E =
          r.kind === `result`
            ? T
            : (0, Or.jsx)(
                Cr,
                { begin: () => r.begin(() => (Ut(a), vt(a, i.hostId))), children: T },
                r.sourceMessageId,
              )),
        (t[26] = T),
        (t[27] = r),
        (t[28] = i.hostId),
        (t[29] = a),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
var Dr, Or;
function kr() {
  return (kr = e(() => {
    ((Dr = g()), k(), ae(), Ke(), De(), _e(), ge(), Te(), tn(), Pt(), qt(), xn(), An(), wr(), (Or = d()));
  }))();
}
function Ar(e) {
  let t = (0, Pr.c)(41),
    { view: n } = e,
    r = R(cr, n.sourceMessageId),
    i = re(lr, n),
    a = n.status === `task-step` ? n.data : void 0,
    o = ie(),
    s = a?.step,
    c = s?.view === `result` && s.presentation.kind === `native` && s.presentation.taskId === `computer_use`,
    { needsRecovery: l, retry: u } = i,
    d;
  t[0] !== r || t[1] !== o || t[2] !== u
    ? ((d =
        u == null
          ? void 0
          : () =>
              void r.act(
                u,
                o.formatMessage({
                  id: `electron.onboarding.conversationalOnboarding.tryAgain`,
                  defaultMessage: `Try again`,
                  description: `Button that retries a conversational onboarding task`,
                }),
              )),
      (t[0] = r),
      (t[1] = o),
      (t[2] = u),
      (t[3] = d))
    : (d = t[3]);
  let f = d,
    p = null;
  if (s?.view === `execute` && !l) {
    if (a?.events.report == null) {
      let e;
      (t[4] === r
        ? (e = t[5])
        : ((e = (0, Z.jsx)(jt, { onRetry: () => void r.recover() })), (t[4] = r), (t[5] = e)),
        (p = e));
    } else if (s.execution?.kind === `native` && s.execution.taskId === `computer_use`) {
      let e;
      (t[6] !== r.begin || t[7] !== n.sourceMessageId
        ? ((e = (0, Z.jsx)(Tr, {
            phase: { kind: `execute`, sourceMessageId: n.sourceMessageId, begin: r.begin },
          })),
          (t[6] = r.begin),
          (t[7] = n.sourceMessageId),
          (t[8] = e))
        : (e = t[8]),
        (p = e));
    } else {
      let e;
      (t[9] !== r.begin || t[10] !== s || t[11] !== n.sourceMessageId
        ? ((e = (0, Z.jsx)(gr, { step: s, begin: r.begin }, n.sourceMessageId)),
          (t[9] = r.begin),
          (t[10] = s),
          (t[11] = n.sourceMessageId),
          (t[12] = e))
        : (e = t[12]),
        (p = e));
    }
  } else if (s?.view === `result`) {
    let e = s.intro !== a?.intro,
      r = n.status === `task-step` ? n.assistantText : void 0,
      i;
    if (
      (t[13] !== s || t[14] !== e || t[15] !== r
        ? ((i = (0, Z.jsx)(Mr, { step: s, showIntroduction: e, assistantText: r }, s.outcome.operationId)),
          (t[13] = s),
          (t[14] = e),
          (t[15] = r),
          (t[16] = i))
        : (i = t[16]),
      (p = i),
      c)
    ) {
      let e;
      (t[17] === p
        ? (e = t[18])
        : ((e = (0, Z.jsx)(Tr, { phase: { kind: `result`, fallback: p } })), (t[17] = p), (t[18] = e)),
        (p = e));
    }
  } else if ((s?.view === `incomplete` || s?.view === `error`) && !l) {
    let e = n.status === `task-step` ? n.assistantText : void 0,
      i;
    t[19] !== r || t[20] !== a || t[21] !== o
      ? ((i =
          a?.events.another == null
            ? void 0
            : () =>
                void r.act(
                  a.events.another,
                  o.formatMessage({
                    id: `electron.onboarding.conversationalOnboarding.chooseAnotherTask`,
                    defaultMessage: `Choose another task`,
                    description: `Button that returns to conversational onboarding task selection after a task could not be completed`,
                  }),
                )),
        (t[19] = r),
        (t[20] = a),
        (t[21] = o),
        (t[22] = i))
      : (i = t[22]);
    let c;
    (t[23] !== f || t[24] !== s || t[25] !== e || t[26] !== i
      ? ((c = (0, Z.jsx)(jr, { step: s, assistantText: e, onRetryTask: f, onChooseAnotherTask: i })),
        (t[23] = f),
        (t[24] = s),
        (t[25] = e),
        (t[26] = i),
        (t[27] = c))
      : (c = t[27]),
      (p = c));
  }
  let m;
  t[28] !== c || t[29] !== s?.view || t[30] !== p
    ? ((m =
        s?.view === `execute` || c
          ? (0, Z.jsx)(A, { scope: Kt, children: (0, Z.jsx)(A, { scope: It, children: p }) })
          : p),
      (t[28] = c),
      (t[29] = s?.view),
      (t[30] = p),
      (t[31] = m))
    : (m = t[31]);
  let h;
  t[32] === i.showThinking
    ? (h = t[33])
    : ((h = i.showThinking ? (0, Z.jsx)(pe, { fadeIn: !0, loading: !0 }) : null),
      (t[32] = i.showThinking),
      (t[33] = h));
  let g;
  t[34] !== r || t[35] !== l
    ? ((g = l
        ? (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [
              (0, Z.jsx)(`p`, {
                role: `alert`,
                children: (0, Z.jsx)(oe, {
                  id: `electron.onboarding.desktopRole.setupError`,
                  defaultMessage: `Couldn’t load setup. Please try again`,
                  description: `Recoverable error when desktop onboarding cannot submit a role or load supported starter tasks`,
                }),
              }),
              (0, Z.jsx)(E, {
                type: `button`,
                color: `primary`,
                onClick: () => void r.recover(),
                children: (0, Z.jsx)(oe, {
                  id: `electron.onboarding.conversationalOnboarding.tryAgain`,
                  defaultMessage: `Try again`,
                  description: `Button that retries a conversational onboarding task`,
                }),
              }),
            ],
          })
        : null),
      (t[34] = r),
      (t[35] = l),
      (t[36] = g))
    : (g = t[36]);
  let _;
  return (
    t[37] !== m || t[38] !== h || t[39] !== g
      ? ((_ = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-6 text-lg leading-6`,
          children: [m, h, g],
        })),
        (t[37] = m),
        (t[38] = h),
        (t[39] = g),
        (t[40] = _))
      : (_ = t[40]),
    _
  );
}
function jr(e) {
  let t = (0, Pr.c)(7),
    { animate: n, step: r, assistantText: i, onRetryTask: a, onChooseAnotherTask: o } = e,
    s = n === void 0 || n;
  if (r.outcome.status === `not_completed`) {
    let e = i ?? r.outcome.assistantText,
      n;
    return (
      t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== e
        ? ((n = (0, Z.jsx)(Yt, { animate: s, output: e, onRetryTask: a, onChooseAnotherTask: o })),
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
  return (t[5] === a ? (c = t[6]) : ((c = (0, Z.jsx)(jt, { onRetry: a })), (t[5] = a), (t[6] = c)), c);
}
function Mr(e) {
  let t = (0, Pr.c)(30),
    { animate: n, showIntroduction: r, step: i, assistantText: a } = e,
    o = n === void 0 || n,
    s = r === void 0 || r,
    c = F(U),
    l;
  t[0] !== c || t[1] !== i.outcome.operationId
    ? ((l = { serverId: c, operationId: i.outcome.operationId }),
      (t[0] = c),
      (t[1] = i.outcome.operationId),
      (t[2] = l))
    : (l = t[2]);
  let u = re(sr, l),
    d;
  if (i.presentation.kind === `plugin`) {
    let e = u?.url,
      n = i.completionLinkLabel ?? i.task.label,
      r;
    (t[3] !== o || t[4] !== i.presentation.pluginName || t[5] !== e || t[6] !== n
      ? ((r = (0, Z.jsx)(Lt, {
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
    if (i.presentation.taskId === `computer_use`) {
      let n = e ?? ``,
        r;
      t[8] === n ? (r = t[9]) : ((r = { outcome: `completed`, output: n }), (t[8] = n), (t[9] = r));
      let i;
      (t[10] !== o || t[11] !== r
        ? ((i = (0, Z.jsx)(Rt, { animate: o, completion: r })), (t[10] = o), (t[11] = r), (t[12] = i))
        : (i = t[12]),
        (d = i));
    } else if (i.presentation.taskId === `desktop_note` && e != null && m(e)) {
      let n;
      (t[13] !== o || t[14] !== e
        ? ((n = (0, Z.jsx)(xt, { animate: o, filePath: e, hostId: D })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
        (d = n));
    } else if (e == null || !m(e) || ![`csv_chart`, `data_science_csv_chart`].includes(i.presentation.taskId))
      d = null;
    else {
      let n = i.presentation.taskId === `data_science_csv_chart` ? `html` : `png`,
        r;
      (t[16] !== o || t[17] !== e || t[18] !== n
        ? ((r = (0, Z.jsx)(Ct, { animate: o, resourceOnly: !0, filePath: e, format: n, hostId: D })),
          (t[16] = o),
          (t[17] = e),
          (t[18] = n),
          (t[19] = r))
        : (r = t[19]),
        (d = r));
    }
  }
  let f;
  t[20] !== s || t[21] !== i.intro
    ? ((f = s && i.intro ? (0, Z.jsx)(`p`, { children: i.intro }) : null),
      (t[20] = s),
      (t[21] = i.intro),
      (t[22] = f))
    : (f = t[22]);
  let p;
  t[23] !== o || t[24] !== a
    ? ((p = a ? (0, Z.jsx)(rn, { animate: o, children: a }) : null), (t[23] = o), (t[24] = a), (t[25] = p))
    : (p = t[25]);
  let h;
  return (
    t[26] !== d || t[27] !== f || t[28] !== p
      ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [f, p, d] })),
        (t[26] = d),
        (t[27] = f),
        (t[28] = p),
        (t[29] = h))
      : (h = t[29]),
    h
  );
}
function Nr(e) {
  let t = (0, Pr.c)(21),
    { isAdvancePending: n, onFinish: r, view: i, includesFinance: a } = e,
    o = a !== void 0 && a,
    s = R(cr, i.sourceMessageId),
    c = re(lr, i),
    l = ie(),
    { finish: u, skip: d } = c,
    f = u != null || (i.status === `task-step` && i.data.step.view === `finished`),
    p;
  t[0] !== o || t[1] !== f
    ? ((p = (0, Z.jsx)(Nn, { phase: `task`, isPhaseComplete: f, includesFinance: o })),
      (t[0] = o),
      (t[1] = f),
      (t[2] = p))
    : (p = t[2]);
  let m = u != null || (i.status === `task-step` && i.data.step.view === `finished`),
    h;
  t[3] !== s || t[4] !== u || t[5] !== l || t[6] !== r || t[7] !== i.data || t[8] !== i.status
    ? ((h = () => {
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
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== s || t[11] !== l || t[12] !== r || t[13] !== d
    ? ((g =
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
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== n || t[16] !== p || t[17] !== m || t[18] !== h || t[19] !== g
      ? ((_ = (0, Z.jsx)(bn, {
          progress: p,
          phase: `task`,
          isPhaseComplete: m,
          isAdvancePending: n,
          skipDisabled: !1,
          onboardingCreditRewardAmount: null,
          onGetStarted: h,
          onSkip: g,
        })),
        (t[15] = n),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
var Pr, Z;
function Fr() {
  return (Fr = e(() => {
    ((Pr = g()),
      k(),
      ae(),
      T(),
      O(),
      nn(),
      Te(),
      hn(),
      wt(),
      ye(),
      zt(),
      yt(),
      yn(),
      Qt(),
      _t(),
      qt(),
      en(),
      G(),
      ur(),
      kr(),
      wr(),
      (Z = d()));
  }))();
}
function Ir(e) {
  let t = (0, Vr.c)(8),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ turns: i, currentView: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  if (t[4] !== n || t[5] !== r || t[6] !== i) {
    let e = (0, Hr.default)(i, `sequenceId`);
    ((a = (0, Q.jsx)(Q.Fragment, {
      children: Object.entries(e).map((e) => {
        let [t, i] = e;
        return (0, Q.jsx)(
          Lr,
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
function Lr(e) {
  let t = (0, Vr.c)(25),
    { turns: n, currentView: r, scrollChoicesIntoView: i, scrollCurrentTurnIntoView: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = n.find(zr)), (t[0] = n), (t[1] = o));
  let s = o,
    c = R(cr, n[0].sequenceId),
    l = F(c.selectedTask$),
    u = s?.answer ?? l?.label,
    d;
  t[2] === u ? (d = t[3]) : ((d = u == null ? null : (0, Q.jsx)(Zt, { answer: u })), (t[2] = u), (t[3] = d));
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
            Ur.Fragment,
            {
              children: [
                n && s != null ? (0, Q.jsx)(`p`, { children: s.intro }) : null,
                u == null && i && s != null && s.step.view !== `finished`
                  ? (0, Q.jsx)(Zt, { answer: s.step.task.label })
                  : null,
                o
                  ? (0, Q.jsx)(Ar, { view: t })
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        s?.step.view === `error` || s?.step.view === `incomplete`
                          ? (0, Q.jsx)(jr, {
                              animate: !1,
                              step: s.step,
                              assistantText: t.status === `task-step` ? t.assistantText : void 0,
                            })
                          : null,
                        s?.step.view === `result`
                          ? (0, Q.jsx)(Mr, {
                              animate: !1,
                              step: s.step,
                              showIntroduction: s.step.intro !== s.intro,
                              assistantText: t.status === `task-step` ? t.assistantText : void 0,
                            })
                          : null,
                        a ? (0, Q.jsx)(Zt, { answer: a }) : null,
                      ],
                    }),
              ],
            },
            o ? `current` : `history:${t.sourceMessageId}`,
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
  let p;
  t[11] !== d || t[12] !== f
    ? ((p = (0, Q.jsxs)(Q.Fragment, { children: [d, f] })), (t[11] = d), (t[12] = f), (t[13] = p))
    : (p = t[13]);
  let m = p,
    h = u != null || n.some(Rr),
    g = null;
  if (s?.view.status === `tasks`) {
    let e;
    (t[14] !== r?.sourceMessageId || t[15] !== s || t[16] !== i
      ? ((e =
          r?.sourceMessageId === s.view.sourceMessageId
            ? (0, Q.jsx)(Br, { turn: s, scrollChoicesIntoView: i })
            : (0, Q.jsx)(dr, {
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
      (g = e));
  }
  let _ = m;
  if (h) {
    let e;
    (t[18] !== m || t[19] !== r || t[20] !== a
      ? ((e =
          r == null
            ? (0, Q.jsx)(`div`, { className: `flex flex-col gap-6 text-lg leading-6`, children: m })
            : (0, Q.jsx)(kn, { ref: a, className: `scroll-mb-14`, children: m })),
        (t[18] = m),
        (t[19] = r),
        (t[20] = a),
        (t[21] = e))
      : (e = t[21]),
      (_ = e));
  }
  let v;
  return (
    t[22] !== g || t[23] !== _
      ? ((v = (0, Q.jsxs)(Q.Fragment, { children: [g, _] })), (t[22] = g), (t[23] = _), (t[24] = v))
      : (v = t[24]),
    v
  );
}
function Rr(e) {
  let { view: t } = e;
  return t.status === `task-step`;
}
function zr(e) {
  let { view: t } = e;
  return t.status === `tasks`;
}
function Br(e) {
  let t = (0, Vr.c)(9),
    { turn: n, scrollChoicesIntoView: r } = e,
    i = R(cr, n.view.sourceMessageId),
    a = re(lr, n.view);
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
      ? ((s = (0, Q.jsx)(dr, {
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
var Vr, Hr, Ur, Q;
function Wr() {
  return (Wr = e(() => {
    ((Vr = g()), (Hr = t(he(), 1)), k(), (Ur = o()), Nt(), gn(), hr(), ur(), Fr(), (Q = d()));
  }))();
}
function Gr(e) {
  let t = (0, Jr.c)(19),
    { isAdvancePending: r, onContinue: i } = e,
    o = n(Kt),
    s = F(Wt),
    c = a() === !0,
    l = F(it),
    u = F(Ne);
  if (l == null || u == null) return null;
  let d;
  t[0] !== l || t[1] !== u
    ? ((d = { accountId: l, userId: u }), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== o || t[4] !== c
    ? ((f = () => o.set(fn, c ? `hidden` : `fading`)), (t[3] = o), (t[4] = c), (t[5] = f))
    : (f = t[5]);
  let p, m;
  t[6] === o
    ? ((p = t[7]), (m = t[8]))
    : ((p = () => o.set(fn, `visible`)),
      (m = (e) => {
        o.set(un, e);
      }),
      (t[6] = o),
      (t[7] = p),
      (t[8] = m));
  let h;
  t[9] !== s || t[10] !== r || t[11] !== i || t[12] !== f || t[13] !== p || t[14] !== m
    ? ((h = (0, $.jsx)(Kr, {
        isAdvancePending: r,
        onContinue: i,
        includesFinance: s,
        onRoleSubmitted: f,
        onRestart: p,
        onScrolledContentUnderHeaderChange: m,
      })),
      (t[9] = s),
      (t[10] = r),
      (t[11] = i),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h))
    : (h = t[15]);
  let g;
  return (
    t[16] !== d || t[17] !== h
      ? ((g = (0, $.jsx)(A, { scope: V, value: d, children: h })), (t[16] = d), (t[17] = h), (t[18] = g))
      : (g = t[18]),
    g
  );
}
function Kr(e) {
  let t = (0, Jr.c)(49),
    {
      isAdvancePending: r,
      onContinue: i,
      includesFinance: a,
      onRoleSubmitted: o,
      onRestart: s,
      onScrolledContentUnderHeaderChange: c,
    } = e,
    l = n(V),
    { mutateAsync: u } = me(),
    d = F(K),
    f = F(qn),
    p = F(U),
    m = F(or),
    h;
  t[0] !== p || t[1] !== m || t[2] !== d
    ? ((h = m?.serverId === p ? m.view : null),
      (d.status === `tasks` || d.status === `task-step`) && (h = d),
      (t[0] = p),
      (t[1] = m),
      (t[2] = d),
      (t[3] = h))
    : (h = t[3]);
  let g = F(W),
    _ = g.status === `conversation` ? g.conversationId : null,
    v = R(Zn, _),
    y = F(v.submittedRole$),
    { editable: b, question: x, hasError: S, loading: C, showFooter: w, pending: T } = F(v.presentation$),
    D;
  t[4] !== u || t[5] !== o || t[6] !== v || t[7] !== l || t[8] !== d.request || t[9] !== d.status
    ? ((D = (e) => {
        let t = e !== void 0 && e;
        d.status === `ready` &&
          (v.submit(d.request.messageId, u, t), l.get(v.submission$) === `pending` && o());
      }),
      (t[4] = u),
      (t[5] = o),
      (t[6] = v),
      (t[7] = l),
      (t[8] = d.request),
      (t[9] = d.status),
      (t[10] = D))
    : (D = t[10]);
  let O = D,
    k = d.status === `task-step` && d.data.step.view === `finished`,
    ee;
  t[11] !== k ||
  t[12] !== S ||
  t[13] !== C ||
  t[14] !== s ||
  t[15] !== v ||
  t[16] !== l ||
  t[17] !== p ||
  t[18] !== f ||
  t[19] !== h
    ? ((ee = (e, t) =>
        (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-6 text-lg leading-6`,
          children: [
            h == null && C
              ? (0, $.jsx)(`div`, { role: `status`, children: (0, $.jsx)(pe, { fadeIn: !0, loading: !0 }) })
              : null,
            S
              ? (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    h == null
                      ? (0, $.jsx)(`p`, {
                          role: `alert`,
                          children: (0, $.jsx)(oe, {
                            id: `electron.onboarding.desktopRole.setupError`,
                            defaultMessage: `Couldn’t load setup. Please try again`,
                            description: `Recoverable error when desktop onboarding cannot submit a role or load supported starter tasks`,
                          }),
                        })
                      : null,
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-wrap gap-2`,
                      children: [
                        p != null && h == null
                          ? (0, $.jsx)(E, {
                              type: `button`,
                              color: `outline`,
                              size: `compact`,
                              onClick: () => void v.retry(),
                              children: (0, $.jsx)(oe, {
                                id: `electron.onboarding.desktopRole.retry`,
                                defaultMessage: `Retry`,
                                description: `Retries loading the desktop onboarding role question`,
                              }),
                            })
                          : null,
                        (0, $.jsx)(E, {
                          type: `button`,
                          color: `outline`,
                          size: `compact`,
                          onClick: () => {
                            (Pn(l), s());
                          },
                          children: (0, $.jsx)(oe, {
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
            (0, $.jsx)(Ir, {
              turns: f,
              currentView: k ? null : h,
              scrollChoicesIntoView: e,
              scrollCurrentTurnIntoView: t,
            }),
          ],
        })),
      (t[11] = k),
      (t[12] = S),
      (t[13] = C),
      (t[14] = s),
      (t[15] = v),
      (t[16] = l),
      (t[17] = p),
      (t[18] = f),
      (t[19] = h),
      (t[20] = ee))
    : (ee = t[20]);
  let A = ee,
    j;
  t[21] === O
    ? (j = t[22])
    : ((j = (e) => {
        (e.preventDefault(), O());
      }),
      (t[21] = O),
      (t[22] = j));
  let M;
  t[23] !== _ || t[24] !== b || t[25] !== x || t[26] !== A || t[27] !== y
    ? ((M = (e) => {
        let { scrollChoicesIntoView: t, scrollCurrentTurnIntoView: n } = e;
        return (0, $.jsxs)($.Fragment, {
          children: [
            x != null && _ != null
              ? (0, $.jsx)(tr, { question: x, conversationId: _, editable: b }, _)
              : null,
            y != null && !b
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`div`, {
                      className: `mt-4 text-lg leading-6`,
                      children: (0, $.jsx)(Zt, {
                        answer:
                          y.selection ??
                          (0, $.jsx)(oe, {
                            id: `electron.onboarding.desktopRole.skippedAnswer`,
                            defaultMessage: `Skipped`,
                            description: `User answer in the setup conversation after choosing to skip the role question`,
                          }),
                      }),
                    }),
                    (0, $.jsx)(`div`, {
                      ref: qr,
                      className: `mt-6 outline-none`,
                      tabIndex: -1,
                      children: A(t, n),
                    }),
                  ],
                })
              : A(t, n),
          ],
        });
      }),
      (t[23] = _),
      (t[24] = b),
      (t[25] = x),
      (t[26] = A),
      (t[27] = y),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] !== c || t[30] !== M
    ? ((N = (0, $.jsx)(ln, { onScrolledContentUnderHeaderChange: c, children: M })),
      (t[29] = c),
      (t[30] = M),
      (t[31] = N))
    : (N = t[31]);
  let P;
  t[32] !== a || t[33] !== r || t[34] !== i || t[35] !== l || t[36] !== h
    ? ((P =
        h == null
          ? null
          : (0, $.jsx)(Nr, {
              isAdvancePending: r,
              onFinish: (e) => $n(l, e, i),
              includesFinance: a,
              view: h,
            })),
      (t[32] = a),
      (t[33] = r),
      (t[34] = i),
      (t[35] = l),
      (t[36] = h),
      (t[37] = P))
    : (P = t[37]);
  let I;
  t[38] !== _ || t[39] !== b || t[40] !== T || t[41] !== w || t[42] !== O
    ? ((I =
        _ != null && w
          ? (0, $.jsx)(rr, { conversationId: _, disabled: !b, pending: T, onSkip: () => O(!0) })
          : null),
      (t[38] = _),
      (t[39] = b),
      (t[40] = T),
      (t[41] = w),
      (t[42] = O),
      (t[43] = I))
    : (I = t[43]);
  let te;
  return (
    t[44] !== j || t[45] !== N || t[46] !== P || t[47] !== I
      ? ((te = (0, $.jsxs)(`form`, {
          className: `relative flex h-full min-h-0 w-full flex-col bg-transparent tracking-normal text-default select-text [--codex-chat-font-size:16px]`,
          onSubmit: j,
          children: [N, P, I],
        })),
        (t[44] = j),
        (t[45] = N),
        (t[46] = P),
        (t[47] = I),
        (t[48] = te))
      : (te = t[48]),
    te
  );
}
function qr(e) {
  e?.focus({ preventScroll: !0 });
}
var Jr, $;
function Yr() {
  return (Yr = e(() => {
    ((Jr = g()),
      S(),
      k(),
      T(),
      Qe(),
      $e(),
      O(),
      Nt(),
      Te(),
      cn(),
      zt(),
      dn(),
      er(),
      Jn(),
      Qn(),
      G(),
      ar(),
      ur(),
      Wr(),
      Fr(),
      ($ = d()));
  }))();
}
Yr();
export { Gr as DILOnboardingStep };
//# sourceMappingURL=step-2aeb483c9579.js.map
