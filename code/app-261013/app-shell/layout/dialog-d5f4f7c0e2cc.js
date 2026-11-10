import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  ADt as r,
  AO as i,
  CO as a,
  Cat as o,
  Cot as s,
  Ext as c,
  GE as l,
  IDt as u,
  Ixt as d,
  JC as f,
  JG as ee,
  Pxt as p,
  Qv as m,
  TJ as h,
  TO as g,
  VDt as _,
  Vxt as v,
  WE as y,
  Xot as b,
  Yot as x,
  ZV as te,
  _O as S,
  _xt as C,
  cG as w,
  cO as ne,
  fO as re,
  iw as ie,
  jDt as ae,
  lO as oe,
  mO as se,
  oO as ce,
  qC as le,
  sJ as ue,
  sO as de,
  t3 as fe,
  tw as pe,
  vO as me,
  vzt as T,
  wot as he,
  xMt as E,
  xat as ge,
  yzt as D,
  zG as _e,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as k,
  DPn as ve,
  EPn as ye,
  GMr as be,
  MRt as xe,
  NRt as A,
  QMr as j,
  TPn as M,
  Xct as Se,
  YMr as N,
  Ymr as P,
  cct as Ce,
  ehr as F,
  fct as we,
  hzt as Te,
  lct as Ee,
  mzt as De,
  nT as I,
  rT as Oe,
  tNr as L,
  xPn as R,
  yPn as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as ke } from "./automation-delete-confirmation-dialog-c8c0c59ec586.js";
import { c as V, l as H, r as U, t as Ae } from "./automation-frequency-section-b14557c3b8fc.js";
import { n as W, t as je } from "./detail-section-state-e7774e5ba7f3.js";
import { a as Me, b as G, f as K, o as Ne } from "./builder-analytics-f0ccbf8827ee.js";
import { n as Pe, t as Fe } from "./read-error-29adc71a8032.js";
import { n as Ie, r as q } from "./apps-query-410f7e452f43.js";
import { a as J, l as Le } from "./query-b1ceced7057f.js";
import { i as Re, n as ze, t as Y } from "./workspace-agent-detail-query-c8301c5fcc0a.js";
import { a as Be, i as X, n as Ve, o as He, r as Ue, t as We } from "./query-89ce93dd0b9b.js";
import { a as Ge, i as Ke, n as qe, o as Je, r as Ye, s as Xe, t as Ze } from "./model-80ecbc793fd2.js";
var Qe;
function $e() {
  return ($e = e(() => {
    (ae(),
      (Qe = r({
        chatGptDestination: {
          id: `workspaceAgents.schedules.chatGptDestination`,
          defaultMessage: `ChatGPT`,
          description: `Destination label for a private Workspace Agent automation in ChatGPT`,
        },
      })));
  }))();
}
function et(e) {
  let n = (0, ot.c)(134),
    {
      trigger: r,
      destinations: i,
      canEdit: a,
      pending: o,
      error: s,
      onClose: c,
      onSave: l,
      onSaveAndRun: d,
      notice: f,
      saveDisabled: ee,
      onInteraction: p,
    } = e,
    m = ee !== void 0 && ee,
    h = _(),
    [g, v] = (0, st.useState)(r?.instructions ?? ``),
    b;
  n[0] === r
    ? (b = n[1])
    : ((b = r == null ? new Intl.DateTimeFormat().resolvedOptions().timeZone : (r.tz ?? `UTC`)),
      (n[0] = r),
      (n[1] = b));
  let [x, te] = (0, st.useState)(b),
    C;
  n[2] === r?.rules
    ? (C = n[3])
    : ((C = () =>
        (r?.rules ?? [{ freq: `weekly`, hour: 9, minute: 0, byweekday: [0, 1, 2, 3, 4], interval: 1 }]).map(
          at,
        )),
      (n[2] = r?.rules),
      (n[3] = C));
  let [w, re] = (0, st.useState)(C),
    [ie, ae] = (0, st.useState)(null),
    se = r?.channel_binding,
    ue;
  n[4] !== i || n[5] !== se ? ((ue = Ze(i, se)), (n[4] = i), (n[5] = se), (n[6] = ue)) : (ue = n[6]);
  let fe = ue,
    me;
  n[7] !== ie || n[8] !== i || n[9] !== fe
    ? ((me =
        i.find((e) => {
          let { id: t } = e;
          return t === ie;
        }) ?? fe),
      (n[7] = ie),
      (n[8] = i),
      (n[9] = fe),
      (n[10] = me))
    : (me = n[10]);
  let T = me,
    he;
  n[11] !== T?.binding || n[12] !== r?.channel_binding
    ? ((he = T?.binding ?? r?.channel_binding ?? { type: `chatgpt` }),
      (n[11] = T?.binding),
      (n[12] = r?.channel_binding),
      (n[13] = he))
    : (he = n[13]);
  let E = he,
    ge = T?.parentTriggerId ?? (T === fe ? r?.parent_trigger_id : void 0),
    D,
    _e,
    O,
    k,
    ve,
    be,
    xe,
    A,
    j,
    Se,
    N,
    P;
  if (
    n[14] !== E ||
    n[15] !== a ||
    n[16] !== g ||
    n[17] !== ge ||
    n[18] !== o ||
    n[19] !== w ||
    n[20] !== m ||
    n[21] !== x ||
    n[22] !== r
  ) {
    let e = w.map(it);
    if (n[35] !== x) {
      P = !0;
      try {
        new Intl.DateTimeFormat(void 0, { timeZone: x });
      } catch {
        P = !1;
      }
      ((n[35] = x), (n[36] = P));
    } else P = n[36];
    ((N = e.every(rt)),
      (_e = E.type === `slack` && !ge),
      (D = a && !o && !m && g.length <= 6e3 && P && N && w.length > 0 && !_e),
      (j = r),
      (Se = `SCHEDULE`),
      (O = r?.enabled ?? !0),
      (k = g),
      (ve = x),
      (be = E),
      (xe = E.type === `slack` ? ge : void 0),
      (A = e.filter(nt)),
      (n[14] = E),
      (n[15] = a),
      (n[16] = g),
      (n[17] = ge),
      (n[18] = o),
      (n[19] = w),
      (n[20] = m),
      (n[21] = x),
      (n[22] = r),
      (n[23] = D),
      (n[24] = _e),
      (n[25] = O),
      (n[26] = k),
      (n[27] = ve),
      (n[28] = be),
      (n[29] = xe),
      (n[30] = A),
      (n[31] = j),
      (n[32] = Se),
      (n[33] = N),
      (n[34] = P));
  } else
    ((D = n[23]),
      (_e = n[24]),
      (O = n[25]),
      (k = n[26]),
      (ve = n[27]),
      (be = n[28]),
      (xe = n[29]),
      (A = n[30]),
      (j = n[31]),
      (Se = n[32]),
      (N = n[33]),
      (P = n[34]));
  let Ce;
  n[37] !== O ||
  n[38] !== k ||
  n[39] !== ve ||
  n[40] !== be ||
  n[41] !== xe ||
  n[42] !== A ||
  n[43] !== j ||
  n[44] !== Se
    ? ((Ce = {
        ...j,
        type: Se,
        enabled: O,
        instructions: k,
        tz: ve,
        channel_binding: be,
        parent_trigger_id: xe,
        rules: A,
      }),
      (n[37] = O),
      (n[38] = k),
      (n[39] = ve),
      (n[40] = be),
      (n[41] = xe),
      (n[42] = A),
      (n[43] = j),
      (n[44] = Se),
      (n[45] = Ce))
    : (Ce = n[45]);
  let F = Ce,
    we;
  n[46] !== D || n[47] !== F || n[48] !== l
    ? ((we = (e) => {
        (e.preventDefault(), D && l(F));
      }),
      (n[46] = D),
      (n[47] = F),
      (n[48] = l),
      (n[49] = we))
    : (we = n[49]);
  let Te;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Q.jsx)(oe, {
        children: (0, Q.jsx)(ne, {
          title: (0, Q.jsx)(S, {
            children: (0, Q.jsx)(u, {
              id: `workspaceAgents.schedules.editor.title`,
              defaultMessage: `Scheduled automation`,
              description: `Title of the editor for a Workspace Agent's scheduled run`,
            }),
          }),
        }),
      })),
      (n[50] = Te))
    : (Te = n[50]);
  let Ee;
  n[51] === s
    ? (Ee = n[52])
    : ((Ee = s == null ? null : (0, Q.jsx)(y, { type: `error`, content: s })), (n[51] = s), (n[52] = Ee));
  let De;
  n[53] !== a || n[54] !== _e
    ? ((De =
        !a || _e
          ? (0, Q.jsx)(y, {
              type: `normal`,
              content: (0, Q.jsx)(u, {
                id: `workspaceAgents.schedules.readOnly`,
                defaultMessage: `You can view this automation, but cannot change it with your current access or channel connection`,
                description: `Notice when permissions or a missing Slack connection prevent editing an agent schedule`,
              }),
            })
          : null),
      (n[53] = a),
      (n[54] = _e),
      (n[55] = De))
    : (De = n[55]);
  let I = !a || o,
    Oe;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(`span`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, Q.jsx)(u, {
          id: `workspaceAgents.schedules.prompt`,
          defaultMessage: `Instructions`,
          description: `Label for optional instructions used when a scheduled agent runs`,
        }),
      })),
      (n[56] = Oe))
    : (Oe = n[56]);
  let L;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => v(e.target.value)), (n[57] = L))
    : (L = n[57]);
  let R;
  n[58] === g
    ? (R = n[59])
    : ((R = (0, Q.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          Oe,
          (0, Q.jsx)(ye, {
            autoFocus: !0,
            name: `instructions`,
            rows: 4,
            maxLength: 6e3,
            value: g,
            onChange: L,
          }),
        ],
      })),
      (n[58] = g),
      (n[59] = R));
  let z;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(u, {
        id: `workspaceAgents.schedules.destination`,
        defaultMessage: `Destination`,
        description: `Label for where an agent's scheduled run will appear`,
      })),
      (n[60] = z))
    : (z = n[60]);
  let B;
  n[61] === h
    ? (B = n[62])
    : ((B = h.formatMessage({
        id: `workspaceAgents.schedules.destinationLabel`,
        defaultMessage: `Automation destination`,
        description: `Accessible label for choosing where a scheduled agent runs`,
      })),
      (n[61] = h),
      (n[62] = B));
  let ke;
  n[63] === i ? (ke = n[64]) : ((ke = i.map(tt)), (n[63] = i), (n[64] = ke));
  let H = T?.id ?? ``,
    U;
  n[65] !== E.channel_id || n[66] !== E.type || n[67] !== T?.label || n[68] !== h
    ? ((U = E.type === `slack` ? (T?.label ?? `#${E.channel_id}`) : h.formatMessage(Qe.chatGptDestination)),
      (n[65] = E.channel_id),
      (n[66] = E.type),
      (n[67] = T?.label),
      (n[68] = h),
      (n[69] = U))
    : (U = n[69]);
  let W;
  n[70] !== i || n[71] !== p
    ? ((W = (e) => {
        (ae(e),
          p?.({
            actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE,
            schedule: {
              channelType:
                i.find((t) => t.id === e)?.binding.type === `slack`
                  ? Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                  : Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
            },
          }));
      }),
      (n[70] = i),
      (n[71] = p),
      (n[72] = W))
    : (W = n[72]);
  let je;
  n[73] !== B || n[74] !== ke || n[75] !== H || n[76] !== U || n[77] !== W
    ? ((je = (0, Q.jsx)(pe, {
        label: z,
        control: (0, Q.jsx)(V, { ariaLabel: B, options: ke, selectedId: H, selectedLabel: U, onSelect: W }),
      })),
      (n[73] = B),
      (n[74] = ke),
      (n[75] = H),
      (n[76] = U),
      (n[77] = W),
      (n[78] = je))
    : (je = n[78]);
  let G;
  n[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, Q.jsx)(u, {
        id: `workspaceAgents.schedules.timezone`,
        defaultMessage: `Time zone`,
        description: `Label for the IANA time zone used by an agent schedule`,
      })),
      (n[79] = G))
    : (G = n[79]);
  let K;
  n[80] === h
    ? (K = n[81])
    : ((K = h.formatMessage({
        id: `workspaceAgents.schedules.timezoneLabel`,
        defaultMessage: `Schedule time zone`,
        description: `Accessible label for editing a schedule's IANA time zone`,
      })),
      (n[80] = h),
      (n[81] = K));
  let Pe;
  n[82] === p
    ? (Pe = n[83])
    : ((Pe = (e) => {
        (te(e.target.value),
          p?.({ actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE, schedule: {} }));
      }),
      (n[82] = p),
      (n[83] = Pe));
  let Fe;
  n[84] !== K || n[85] !== Pe || n[86] !== x
    ? ((Fe = (0, Q.jsx)(pe, {
        label: G,
        control: (0, Q.jsx)(M, {
          variant: `ghost`,
          name: `timezone`,
          "aria-label": K,
          "aria-invalid": !P,
          value: x,
          onChange: Pe,
        }),
      })),
      (n[84] = K),
      (n[85] = Pe),
      (n[86] = x),
      (n[87] = Fe))
    : (Fe = n[87]);
  let Ie;
  n[88] !== je || n[89] !== Fe
    ? ((Ie = (0, Q.jsxs)(le, { children: [je, Fe] })), (n[88] = je), (n[89] = Fe), (n[90] = Ie))
    : (Ie = n[90]);
  let q;
  if (n[91] !== p || n[92] !== w || n[93] !== x || n[94] !== P) {
    let e;
    (n[96] !== p || n[97] !== x || n[98] !== P
      ? ((e = (e, t) =>
          (0, Q.jsx)(
            Ae,
            {
              intervalStyle: `default`,
              scheduleSource: `local`,
              timeZone: P ? x : void 0,
              scheduleConfig: e.config,
              onUpdateScheduleDraft: (n) => {
                let r = Z(n.mode);
                (p?.({
                  actionType:
                    r === Z(e.config.mode)
                      ? Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE
                      : Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE,
                  schedule: { scheduleType: r },
                }),
                  re((e) => e.map((e, r) => (r === t ? { ...e, config: n, dirty: !0 } : e))));
              },
            },
            t,
          )),
        (n[96] = p),
        (n[97] = x),
        (n[98] = P),
        (n[99] = e))
      : (e = n[99]),
      (q = w.map(e)),
      (n[91] = p),
      (n[92] = w),
      (n[93] = x),
      (n[94] = P),
      (n[95] = q));
  } else q = n[95];
  let J;
  n[100] === N
    ? (J = n[101])
    : ((J = N
        ? null
        : (0, Q.jsx)(y, {
            type: `error`,
            content: (0, Q.jsx)(u, {
              id: `workspaceAgents.schedules.invalidRule`,
              defaultMessage: `Choose a repeating schedule with one time per rule, at least 15 minutes apart, without a year, end date, or numbered weekday`,
              description: `Validation error for a recurrence that the Workspace Agent schedule service cannot represent`,
            }),
          })),
      (n[100] = N),
      (n[101] = J));
  let Le;
  n[102] !== I || n[103] !== R || n[104] !== Ie || n[105] !== q || n[106] !== J
    ? ((Le = (0, Q.jsxs)(`fieldset`, {
        disabled: I,
        className: `flex min-w-0 flex-col gap-4`,
        children: [R, Ie, q, J],
      })),
      (n[102] = I),
      (n[103] = R),
      (n[104] = Ie),
      (n[105] = q),
      (n[106] = J),
      (n[107] = Le))
    : (Le = n[107]);
  let Re;
  n[108] !== f || n[109] !== Ee || n[110] !== De || n[111] !== Le
    ? ((Re = (0, Q.jsxs)(oe, { children: [f, Ee, De, Le] })),
      (n[108] = f),
      (n[109] = Ee),
      (n[110] = De),
      (n[111] = Le),
      (n[112] = Re))
    : (Re = n[112]);
  let ze;
  n[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, Q.jsx)(u, {
        id: `workspaceAgents.schedules.back`,
        defaultMessage: `Back`,
        description: `Returns to the automation list without saving the schedule`,
      })),
      (n[113] = ze))
    : (ze = n[113]);
  let Y;
  n[114] !== c || n[115] !== o
    ? ((Y = (0, Q.jsx)(t, { color: `outline`, type: `button`, disabled: o, onClick: c, children: ze })),
      (n[114] = c),
      (n[115] = o),
      (n[116] = Y))
    : (Y = n[116]);
  let Be;
  n[117] !== a || n[118] !== D || n[119] !== F || n[120] !== d
    ? ((Be =
        a && d != null
          ? (0, Q.jsx)(t, {
              color: `outline`,
              type: `button`,
              disabled: !D,
              onClick: () => {
                d(F);
              },
              children: (0, Q.jsx)(u, {
                id: `workspaceAgents.schedules.saveAndRunPreview`,
                defaultMessage: `Save and run preview`,
                description: `Saves the automation before starting a preview using the agent draft`,
              }),
            })
          : null),
      (n[117] = a),
      (n[118] = D),
      (n[119] = F),
      (n[120] = d),
      (n[121] = Be))
    : (Be = n[121]);
  let X;
  n[122] !== a || n[123] !== D || n[124] !== o
    ? ((X = a
        ? (0, Q.jsx)(t, {
            type: `submit`,
            disabled: !D,
            loading: o,
            children: (0, Q.jsx)(u, {
              id: `workspaceAgents.schedules.save`,
              defaultMessage: `Save`,
              description: `Saves a Workspace Agent automation`,
            }),
          })
        : null),
      (n[122] = a),
      (n[123] = D),
      (n[124] = o),
      (n[125] = X))
    : (X = n[125]);
  let Ve;
  n[126] !== Y || n[127] !== Be || n[128] !== X
    ? ((Ve = (0, Q.jsx)(oe, { children: (0, Q.jsxs)(de, { children: [Y, Be, X] }) })),
      (n[126] = Y),
      (n[127] = Be),
      (n[128] = X),
      (n[129] = Ve))
    : (Ve = n[129]);
  let He;
  return (
    n[130] !== we || n[131] !== Re || n[132] !== Ve
      ? ((He = (0, Q.jsxs)(ce, { as: `form`, size: `viewport`, onSubmit: we, children: [Te, Re, Ve] })),
        (n[130] = we),
        (n[131] = Re),
        (n[132] = Ve),
        (n[133] = He))
      : (He = n[133]),
    He
  );
}
function tt(e) {
  let { id: t, label: n } = e;
  return { id: t, label: n };
}
function nt(e) {
  return e != null;
}
function rt(e) {
  return e != null;
}
function it(e) {
  return e.dirty ? Je(e.config) : e.original;
}
function at(e) {
  return { original: e, config: Xe(e), dirty: !1 };
}
function Z(e) {
  return e === `hourly`
    ? K.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_HOURLY
    : [`daily`, `weekdays`, `weekly`].includes(e)
      ? K.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_WEEKLY
      : K.CHATGPT_AGENT_BUILDER_SCHEDULE_TYPE_CUSTOM;
}
var ot, st, Q;
function ct() {
  return (ct = e(() => {
    ((ot = T()),
      G(),
      (st = D()),
      ae(),
      U(),
      H(),
      l(),
      fe(),
      me(),
      re(),
      ve(),
      ie(),
      f(),
      $e(),
      Ge(),
      (Q = E()));
  }))();
}
async function lt(e, t, n, r, i) {
  let { authenticatedUserId: a, accountUserId: o } = e.get(j),
    s = e.get(N),
    c = () => {
      let n = e.get(j);
      return (
        !i.aborted &&
        s != null &&
        e.get(N) === s &&
        a != null &&
        o != null &&
        n.authenticatedUserId === a &&
        n.accountUserId === o &&
        e.get(be) === t &&
        e.get(Ee) === !0
      );
    };
  if (a == null || s == null || !c()) return null;
  let l = { accountId: t, userId: s },
    u = () => {
      if ((i.throwIfAborted(), !c())) throw Error(`The active account changed during an automation run`);
    },
    d = await P.safePost(`/hermes/agent/{agent_id}/triggers/{trigger_id}/run_now`, {
      parameters: { path: { agent_id: n, trigger_id: r } },
      expectedIdentity: l,
      assertRequestCurrent: u,
      signal: i,
    }).catch((e) => {
      if (c()) throw e;
      return null;
    });
  if (d == null || !c()) return null;
  if (d.status !== `dispatched` && d.status !== `completed`) throw Error(`The automation was not started`);
  e.query.invalidate(ze, n);
  let f = d.conversation_id?.trim();
  if (f) return { conversationId: f };
  let ee = d.run_id?.trim();
  if (!ee) return { conversationId: null };
  for (let e = 0; e < 6; e++) {
    if ((e > 0 && (await new Promise((e) => setTimeout(e, 350))), !c())) return null;
    try {
      let e = await P.safeGet(`/hermes/agent/{agent_id}/conversations`, {
        parameters: { path: { agent_id: n }, query: { limit: 10 } },
        expectedIdentity: l,
        assertRequestCurrent: u,
        signal: i,
      });
      if (!c()) return null;
      let t = e.items.find((e) => e.fiber_id === ee)?.id.trim();
      if (t) return { conversationId: t };
    } catch {
      return c() ? { conversationId: null } : null;
    }
  }
  return { conversationId: null };
}
function ut() {
  return (ut = e(() => {
    (L(), F(), Ce(), Y());
  }))();
}
function dt(e) {
  let t = (0, gt.c)(31),
    {
      accountId: n,
      agentId: r,
      initialSelectedScheduleId: i,
      versionScope: a,
      onPreviewRun: o,
      onClose: l,
      onCloseAutoFocus: u,
    } = e,
    f = a === void 0 ? `published` : a,
    ee = d(s),
    p = c(),
    m = Oe(),
    h = (0, _t.useRef)(null),
    g,
    _;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => h.current?.abort()), (_ = []), (t[0] = g), (t[1] = _))
    : ((g = t[0]), (_ = t[1])),
    (0, _t.useEffect)(g, _));
  let v = O(We, r),
    [y, b] = (0, _t.useState)(!1),
    x;
  t[2] !== v || t[3] !== l || t[4] !== y
    ? ((x = (e) => {
        !e && !v.isPending && !y && l();
      }),
      (t[2] = v),
      (t[3] = l),
      (t[4] = y),
      (t[5] = x))
    : (x = t[5]);
  let te;
  t[6] === u
    ? (te = t[7])
    : ((te = {
        onCloseAutoFocus: (e) => {
          u != null && (e.preventDefault(), u());
        },
      }),
      (t[6] = u),
      (t[7] = te));
  let S;
  t[8] !== n || t[9] !== r || t[10] !== m || t[11] !== p || t[12] !== l || t[13] !== ee
    ? ((S = async (e) => {
        if (h.current != null) return null;
        let t = new AbortController();
        return (
          (h.current = t),
          b(!0),
          lt(ee, n, r, e, t.signal)
            .then((e) => (e?.conversationId != null && m() && (l(), p(ge(e.conversationId))), e))
            .finally(() => {
              ((h.current = null), m() && b(!1));
            })
        );
      }),
      (t[8] = n),
      (t[9] = r),
      (t[10] = m),
      (t[11] = p),
      (t[12] = l),
      (t[13] = ee),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== m || t[16] !== l || t[17] !== o
    ? ((C =
        o == null
          ? void 0
          : (e) => (
              b(!0),
              Promise.resolve()
                .then(() => o(e))
                .then(l)
                .finally(() => {
                  m() && b(!1);
                })
            )),
      (t[15] = m),
      (t[16] = l),
      (t[17] = o),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== n || t[20] !== r || t[21] !== i || t[22] !== y || t[23] !== S || t[24] !== C || t[25] !== f
    ? ((w = (0, $.jsx)(ft, {
        accountId: n,
        agentId: r,
        initialSelectedScheduleId: i,
        versionScope: f,
        previewPending: y,
        onPublishedRun: S,
        onPreviewRun: C,
      })),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = y),
      (t[23] = S),
      (t[24] = C),
      (t[25] = f),
      (t[26] = w))
    : (w = t[26]);
  let ne;
  return (
    t[27] !== x || t[28] !== te || t[29] !== w
      ? ((ne = (0, $.jsx)(se, { open: !0, onOpenChange: x, contentProps: te, children: w })),
        (t[27] = x),
        (t[28] = te),
        (t[29] = w),
        (t[30] = ne))
      : (ne = t[30]),
    ne
  );
}
function ft(e) {
  let t = (0, gt.c)(146),
    {
      accountId: n,
      agentId: r,
      versionScope: i,
      initialSelectedScheduleId: o,
      previewPending: c,
      onPublishedRun: l,
      onPreviewRun: f,
    } = e,
    p = d(s),
    h = _(),
    x = Oe(),
    C = v(N),
    [re, ie] = (0, _t.useState)(!1),
    { data: ae, isPending: se, error: le, refetch: de } = O(Ve, r),
    fe = i === `published`,
    pe;
  t[0] === fe ? (pe = t[1]) : ((pe = { enabled: fe }), (t[0] = fe), (t[1] = pe));
  let { data: me, error: T, isPending: he, refetch: E } = O(Re, r, pe),
    ge = i === `draft`,
    D;
  t[2] === ge ? (D = t[3]) : ((D = { enabled: ge }), (t[2] = ge), (t[3] = D));
  let { data: k, error: ve, isPending: ye, refetch: A } = O(Le, r, D),
    M = i === `draft` ? k : me,
    P = i === `draft` ? k?.draft_version : me?.latest_published_version,
    Ce = i === `draft` ? ve : T,
    F = i === `draft` ? ye : he,
    Te = k?.agent.viewer_capability === `hermes_admin` || k?.agent.viewer_capability === `hermes_write`,
    { accountUserId: I, authenticatedUserId: L } = v(j),
    R = v(Ee) === !0,
    z = v(we) === !0,
    B = O(We, r),
    V = B.isPending || c,
    H = (0, _t.useId)(),
    [U, Ae] = (0, _t.useState)(o ?? null),
    [W, G] = (0, _t.useState)(null),
    [K, Pe] = (0, _t.useState)(!1),
    [q, J] = (0, _t.useState)(null),
    ze;
  t[4] !== n || t[5] !== r || t[6] !== K || t[7] !== C || t[8] !== i
    ? ((ze = Ie({ accountId: n, userId: C, agentId: r, versionScope: i, enabled: K })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = K),
      (t[7] = C),
      (t[8] = i),
      (t[9] = ze))
    : (ze = t[9]);
  let { data: Y, isFetching: X, error: Ue, refetch: Ge } = b(ze),
    Je;
  t[10] === Y ? (Je = t[11]) : ((Je = Y?.some(ht)), (t[10] = Y), (t[11] = Je));
  let Xe = Je,
    $e,
    tt,
    nt,
    rt,
    it,
    at,
    Z;
  if (
    t[12] !== n ||
    t[13] !== q ||
    t[14] !== r ||
    t[15] !== L ||
    t[16] !== R ||
    t[17] !== Te ||
    t[18] !== z ||
    t[19] !== Ge ||
    t[20] !== X ||
    t[21] !== Ue ||
    t[22] !== K ||
    t[23] !== W ||
    t[24] !== M ||
    t[25] !== h ||
    t[26] !== x ||
    t[27] !== se ||
    t[28] !== le ||
    t[29] !== Ce ||
    t[30] !== F ||
    t[31] !== B ||
    t[32] !== Xe ||
    t[33] !== f ||
    t[34] !== l ||
    t[35] !== V ||
    t[36] !== Y ||
    t[37] !== de ||
    t[38] !== A ||
    t[39] !== E ||
    t[40] !== C ||
    t[41] !== ae ||
    t[42] !== H ||
    t[43] !== p ||
    t[44] !== U ||
    t[45] !== I ||
    t[46] !== P ||
    t[47] !== i
  ) {
    at = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ae?.filter(mt),
        o = e?.find((e) => {
          let { id: t } = e;
          return t === U;
        });
      ((nt = e?.find((e) => {
        let { id: t } = e;
        return t === W;
      })),
        ($e = R && I != null && P != null && (i === `published` || Te)));
      let s = Ke(P),
        c = [{ id: `chatgpt`, label: h.formatMessage(Qe.chatGptDestination), binding: { type: `chatgpt` } }];
      z && M?.agent.creator_id === I && c.push(...s);
      let d;
      t[55] !== R || t[56] !== z || t[57] !== M?.agent.creator_id || t[58] !== I
        ? ((d = (e) =>
            Ye({ resource: e, userId: I, agentCreatorId: M?.agent.creator_id, canAccess: R, canShare: z })),
          (t[55] = R),
          (t[56] = z),
          (t[57] = M?.agent.creator_id),
          (t[58] = I),
          (t[59] = d))
        : (d = t[59]);
      let ee = d,
        _;
      (t[60] === h
        ? (_ = t[61])
        : ((_ = (e) =>
            J(
              (e instanceof Error ? e.message : null) ||
                h.formatMessage({
                  id: `workspaceAgents.schedules.actionError`,
                  defaultMessage: `Could not update the automation. Try again`,
                  description: `Error shown when changing an agent schedule fails`,
                }),
            )),
          (t[60] = h),
          (t[61] = _)),
        (rt = _));
      let v;
      (t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = () => {
            (Ae(null), Pe(!1), G(null), J(null));
          }),
          (t[62] = v))
        : (v = t[62]),
        (it = v));
      let b;
      t[63] !== n ||
      t[64] !== r ||
      t[65] !== L ||
      t[66] !== h ||
      t[67] !== f ||
      t[68] !== p ||
      t[69] !== I ||
      t[70] !== i
        ? ((b = async (e) => {
            let t = p.get(j);
            if (
              f == null ||
              e.trigger.type !== `SCHEDULE` ||
              p.get(be) !== n ||
              t.accountUserId !== I ||
              t.authenticatedUserId !== L ||
              L == null ||
              p.get(Ee) !== !0
            )
              return;
            J(null);
            let a = He(
              p,
              r,
              {
                actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW,
                schedule: {
                  scheduleTriggerId: e.id,
                  channelType:
                    e.trigger.channel_binding?.type === `slack`
                      ? Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                      : Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
                },
              },
              i,
            );
            try {
              (await f(
                e.trigger.instructions?.trim() ||
                  h.formatMessage({
                    id: `workspaceAgents.schedules.previewFallbackPrompt`,
                    defaultMessage: `Start execution`,
                    description: `First user message in an agent draft preview when the automation has no additional instructions`,
                  }),
              ),
                a(!0));
            } catch (e) {
              let t = e;
              (a(!1),
                J(
                  t instanceof Error
                    ? t.message
                    : h.formatMessage({
                        id: `workspaceAgents.schedules.previewError`,
                        defaultMessage: `Could not start the preview. Try again`,
                        description: `Error shown when the saved automation cannot start an agent draft preview`,
                      }),
                ));
            }
          }),
          (t[63] = n),
          (t[64] = r),
          (t[65] = L),
          (t[66] = h),
          (t[67] = f),
          (t[68] = p),
          (t[69] = I),
          (t[70] = i),
          (t[71] = b))
        : (b = t[71]);
      let S = b,
        ne;
      t[72] !== n ||
      t[73] !== r ||
      t[74] !== h ||
      t[75] !== x ||
      t[76] !== l ||
      t[77] !== V ||
      t[78] !== C ||
      t[79] !== p
        ? ((ne = async (e) => {
            let t = () => p.get(be) === n && p.get(N) === C;
            if (V || C == null || !t()) return;
            (J(null), ie(!1));
            let i = He(
              p,
              r,
              {
                actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW,
                schedule: {
                  scheduleTriggerId: e.id,
                  channelType:
                    e.trigger.type === `SCHEDULE` && e.trigger.channel_binding?.type === `slack`
                      ? Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                      : Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
                },
              },
              `published`,
            );
            try {
              let n = await l(e.id);
              if (!t()) return;
              (i(n != null), n != null && x() && ie(!0));
            } catch {
              if (!t()) return;
              (i(!1),
                x() &&
                  J(
                    h.formatMessage({
                      id: `workspaceAgents.schedules.runFailed`,
                      defaultMessage: `Could not start the automation. Try again`,
                      description: `Error when starting an immediate run of a published agent automation`,
                    }),
                  ));
            }
          }),
          (t[72] = n),
          (t[73] = r),
          (t[74] = h),
          (t[75] = x),
          (t[76] = l),
          (t[77] = V),
          (t[78] = C),
          (t[79] = p),
          (t[80] = ne))
        : (ne = t[80]);
      let re = ne;
      if (
        ((tt = e?.map((e) => {
          if (e.trigger.type !== `SCHEDULE`) return null;
          let t = e.trigger,
            { canEdit: o, canDelete: c } = ee(e),
            l =
              R &&
              e.owner_user_id === I &&
              (t.channel_binding?.type !== `slack` || M?.agent.creator_id === I),
            d = qe(t, h),
            _ =
              t.channel_binding?.type === `slack`
                ? (Ze(s, t.channel_binding)?.label ?? `#${t.channel_binding.channel_id}`)
                : h.formatMessage(Qe.chatGptDestination);
          return (0, $.jsx)(
            Se,
            {
              ariaLabel: d,
              ariaDescribedBy: `${H}-${e.id}-details${t.enabled === !1 ? ` ${H}-${e.id}-paused` : ``}`,
              isSelected: U === e.id,
              hasInteractiveContent: !0,
              isDisabled: V,
              onSelect: () => {
                (Be(
                  p,
                  r,
                  {
                    actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT,
                    schedule: { scheduleTriggerId: e.id },
                  },
                  i,
                ),
                  Ae(e.id),
                  J(null));
              },
              title: d,
              icon:
                t.channel_binding?.type === `slack`
                  ? (0, $.jsx)(De, { alt: ``, knownAppId: `slack`, size: 20, fallback: (0, $.jsx)(te, {}) })
                  : (0, $.jsx)(te, {}),
              titleAdornment:
                t.enabled === !1
                  ? (0, $.jsx)(`span`, {
                      id: `${H}-${e.id}-paused`,
                      children: (0, $.jsx)(xe, {
                        variant: `outline`,
                        children: (0, $.jsx)(u, {
                          id: `workspaceAgents.schedules.paused`,
                          defaultMessage: `Paused`,
                          description: `Status badge for a paused Workspace Agent automation`,
                        }),
                      }),
                    })
                  : null,
              secondLine: (0, $.jsx)(`div`, {
                id: `${H}-${e.id}-details`,
                className: `truncate`,
                children: t.instructions
                  ? (0, $.jsx)(u, {
                      id: `workspaceAgents.schedules.rowDescription`,
                      defaultMessage: `{destination} · {instructions}`,
                      description: `Destination and instructions beneath an agent automation's schedule`,
                      values: { destination: _, instructions: t.instructions },
                    })
                  : _,
              }),
              rightText: (0, $.jsx)(`div`, {
                className: `pointer-events-auto`,
                children: (0, $.jsxs)(a, {
                  align: `end`,
                  triggerButton: (0, $.jsx)(m, {
                    label: h.formatMessage({
                      id: `workspaceAgents.schedules.moreActions`,
                      defaultMessage: `Automation actions`,
                      description: `Accessible label for an automation's pause and delete menu`,
                    }),
                    disabled: V || (!o && !c && !l),
                  }),
                  children: [
                    l && M?.latest_published_version != null
                      ? (0, $.jsx)(g.Item, {
                          LeftIcon: _e,
                          disabled: V,
                          onSelect: () => void re(e),
                          children: (0, $.jsx)(u, {
                            id: `workspaceAgents.schedules.runPublished`,
                            defaultMessage: `Run published version`,
                            description: `Starts this automation immediately with the published agent and its saved destination`,
                          }),
                        })
                      : null,
                    l && f != null
                      ? (0, $.jsx)(g.Item, {
                          LeftIcon: _e,
                          disabled: V,
                          onSelect: () => void S(e),
                          children: (0, $.jsx)(u, {
                            id: `workspaceAgents.schedules.runPreview`,
                            defaultMessage: `Run preview`,
                            description: `Starts a preview of the agent draft with this automation's instructions`,
                          }),
                        })
                      : null,
                    (0, $.jsx)(g.Item, {
                      LeftIcon: t.enabled === !1 ? _e : w,
                      disabled: !o || V,
                      onSelect: () => {
                        (J(null),
                          B.mutate(
                            {
                              accountId: n,
                              versionScope: i,
                              resource: e,
                              trigger: { ...t, enabled: t.enabled === !1 },
                            },
                            { onError: rt },
                          ));
                      },
                      children:
                        t.enabled === !1
                          ? (0, $.jsx)(u, {
                              id: `workspaceAgents.schedules.resume`,
                              defaultMessage: `Resume`,
                              description: `Resumes a paused Workspace Agent schedule`,
                            })
                          : (0, $.jsx)(u, {
                              id: `workspaceAgents.schedules.pause`,
                              defaultMessage: `Pause`,
                              description: `Pauses a Workspace Agent schedule`,
                            }),
                    }),
                    c
                      ? (0, $.jsx)(g.Item, {
                          LeftIcon: ue,
                          disabled: V,
                          onSelect: () => {
                            (G(e.id), J(null));
                          },
                          children: (0, $.jsx)(u, {
                            id: `workspaceAgents.schedules.delete`,
                            defaultMessage: `Delete`,
                            description: `Deletes a Workspace Agent schedule after confirmation`,
                          }),
                        })
                      : null,
                  ],
                }),
              }),
            },
            e.id,
          );
        })),
        le != null || Ce != null)
      ) {
        let e;
        (t[81] !== de || t[82] !== A || t[83] !== E || t[84] !== i
          ? ((e = (0, $.jsx)(Fe, {
              onRetry: () => {
                (de(), i === `draft` ? A() : E());
              },
            })),
            (t[81] = de),
            (t[82] = A),
            (t[83] = E),
            (t[84] = i),
            (t[85] = e))
          : (e = t[85]),
          (tt = e));
      } else if (se || F) {
        let e;
        (t[86] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(je, {
              children: (0, $.jsx)(u, {
                id: `workspaceAgents.schedules.loading`,
                defaultMessage: `Loading automations…`,
                description: `Loading state for an agent's schedules`,
              }),
            })),
            (t[86] = e))
          : (e = t[86]),
          (tt = e));
      } else if (e?.length === 0) {
        let e;
        (t[87] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(je, {
              children: (0, $.jsx)(u, {
                id: `workspaceAgents.schedules.empty`,
                defaultMessage: `No automations yet`,
                description: `Empty state when an agent has no accessible scheduled runs`,
              }),
            })),
            (t[87] = e))
          : (e = t[87]),
          (tt = e));
      }
      let oe;
      if (
        (t[88] !== M || t[89] !== i
          ? ((oe =
              i === `draft` && M != null && M.latest_published_version == null
                ? (0, $.jsx)(y, {
                    type: `normal`,
                    content: (0, $.jsx)(u, {
                      id: `workspaceAgents.schedules.unpublishedDraft`,
                      defaultMessage: `Automations will start running after you publish this agent`,
                      description: `Notice in the agent editor's automation dialog when configuring a saved draft that has never been published`,
                    }),
                  })
                : null),
            (t[88] = M),
            (t[89] = i),
            (t[90] = oe))
          : (oe = t[90]),
        (Z = oe),
        K || o?.trigger.type === `SCHEDULE`)
      ) {
        let e;
        t[91] !== Ge || t[92] !== X || t[93] !== Ue || t[94] !== K || t[95] !== Xe || t[96] !== Y
          ? ((e =
              K && (Y == null || X || Ue != null || Xe)
                ? (0, $.jsx)(y, {
                    type: Ue ? `error` : `normal`,
                    content: X
                      ? (0, $.jsx)(u, {
                          id: `workspaceAgents.schedules.checkingConnections`,
                          defaultMessage: `Checking app connections…`,
                          description: `Status while checking personal app connections before scheduling an agent`,
                        })
                      : (0, $.jsx)(u, {
                          id: `workspaceAgents.schedules.repairConnections`,
                          defaultMessage: `Review this agent's app connections in <link>ChatGPT settings</link>, then check again to continue`,
                          description: `Recovery instructions with a link to app connection settings before creating an automation`,
                          values: { link: pt },
                        }),
                    primaryCtaText: (0, $.jsx)(u, {
                      id: `workspaceAgents.schedules.checkConnections`,
                      defaultMessage: `Check again`,
                      description: `Rechecks the agent's app connections after the user repairs them`,
                    }),
                    isPrimaryCtaDisabled: X,
                    onPrimaryCtaClick: () => {
                      (J(null), Ge());
                    },
                  })
                : null),
            (t[91] = Ge),
            (t[92] = X),
            (t[93] = Ue),
            (t[94] = K),
            (t[95] = Xe),
            (t[96] = Y),
            (t[97] = e))
          : (e = t[97]);
        let a;
        (t[98] !== e || t[99] !== Z
          ? ((a = (0, $.jsxs)($.Fragment, { children: [Z, e] })), (t[98] = e), (t[99] = Z), (t[100] = a))
          : (a = t[100]),
          (at = (0, $.jsx)(
            et,
            {
              trigger: o?.trigger.type === `SCHEDULE` ? o.trigger : null,
              destinations: c,
              canEdit: o == null ? $e : ee(o).canEdit,
              pending: V,
              saveDisabled: K && (X || Y == null || Ue != null || Xe === !0),
              notice: a,
              onInteraction: (e) =>
                Be(p, r, { ...e, schedule: { ...e.schedule, scheduleTriggerId: o?.id } }, i),
              error: q,
              onClose: it,
              onSaveAndRun:
                f == null
                  ? void 0
                  : async (e) => {
                      J(null);
                      try {
                        let t = await B.mutateAsync({
                          accountId: n,
                          versionScope: i,
                          resource: o,
                          trigger: e,
                        });
                        if (t == null) return;
                        (Pe(!1), Ae(t.id), await S(t));
                      } catch (e) {
                        rt(e);
                      }
                    },
              onSave: (e) => {
                (J(null),
                  B.mutate(
                    { accountId: n, versionScope: i, resource: o, trigger: e },
                    { onSuccess: it, onError: rt },
                  ));
              },
            },
            o?.id ?? `new`,
          )));
        break bb0;
      }
    }
    ((t[12] = n),
      (t[13] = q),
      (t[14] = r),
      (t[15] = L),
      (t[16] = R),
      (t[17] = Te),
      (t[18] = z),
      (t[19] = Ge),
      (t[20] = X),
      (t[21] = Ue),
      (t[22] = K),
      (t[23] = W),
      (t[24] = M),
      (t[25] = h),
      (t[26] = x),
      (t[27] = se),
      (t[28] = le),
      (t[29] = Ce),
      (t[30] = F),
      (t[31] = B),
      (t[32] = Xe),
      (t[33] = f),
      (t[34] = l),
      (t[35] = V),
      (t[36] = Y),
      (t[37] = de),
      (t[38] = A),
      (t[39] = E),
      (t[40] = C),
      (t[41] = ae),
      (t[42] = H),
      (t[43] = p),
      (t[44] = U),
      (t[45] = I),
      (t[46] = P),
      (t[47] = i),
      (t[48] = $e),
      (t[49] = tt),
      (t[50] = nt),
      (t[51] = rt),
      (t[52] = it),
      (t[53] = at),
      (t[54] = Z));
  } else (($e = t[48]), (tt = t[49]), (nt = t[50]), (rt = t[51]), (it = t[52]), (at = t[53]), (Z = t[54]));
  if (at !== Symbol.for(`react.early_return_sentinel`)) return at;
  let ot;
  t[101] === re
    ? (ot = t[102])
    : ((ot = re
        ? (0, $.jsx)(y, {
            type: `success`,
            content: (0, $.jsx)(u, {
              id: `workspaceAgents.schedules.runStarted`,
              defaultMessage: `Automation started. Its conversation will appear in agent activity.`,
              description: `Confirmation that a scheduled agent run was accepted but its conversation is not yet available`,
            }),
          })
        : null),
      (t[101] = re),
      (t[102] = ot));
  let st;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, $.jsx)(ne, {
        title: (0, $.jsx)(S, {
          children: (0, $.jsx)(u, {
            id: `workspaceAgents.schedules.title`,
            defaultMessage: `Automations`,
            description: `Title of the list of a Workspace Agent's scheduled runs`,
          }),
        }),
      })),
      (t[103] = st))
    : (st = t[103]);
  let Q;
  t[104] === ot ? (Q = t[105]) : ((Q = (0, $.jsxs)(oe, { children: [ot, st] })), (t[104] = ot), (t[105] = Q));
  let ct;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(ee, {})), (t[106] = ct))
    : (ct = t[106]);
  let lt = !$e || V,
    ut;
  t[107] !== r || t[108] !== p || t[109] !== i
    ? ((ut = () => {
        (Be(p, r, { actionType: Me.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD }, i), Pe(!0), J(null));
      }),
      (t[107] = r),
      (t[108] = p),
      (t[109] = i),
      (t[110] = ut))
    : (ut = t[110]);
  let dt;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, $.jsx)(u, {
        id: `workspaceAgents.schedules.add`,
        defaultMessage: `Add automation`,
        description: `Opens the form to schedule a Workspace Agent`,
      })),
      (t[111] = dt))
    : (dt = t[111]);
  let ft;
  t[112] !== lt || t[113] !== ut
    ? ((ft = (0, $.jsx)(Se, { icon: ct, isSelected: !1, isDisabled: lt, onSelect: ut, title: dt })),
      (t[112] = lt),
      (t[113] = ut),
      (t[114] = ft))
    : (ft = t[114]);
  let vt;
  t[115] === q
    ? (vt = t[116])
    : ((vt = q == null ? null : (0, $.jsx)(y, { type: `error`, content: q })), (t[115] = q), (t[116] = vt));
  let yt;
  t[117] === tt
    ? (yt = t[118])
    : ((yt = (0, $.jsx)(`div`, { className: `flex flex-col`, children: tt })), (t[117] = tt), (t[118] = yt));
  let bt = nt != null,
    xt;
  t[119] === h
    ? (xt = t[120])
    : ((xt = h.formatMessage({
        id: `workspaceAgents.schedules.automationName`,
        defaultMessage: `this automation`,
        description: `Name used when confirming deletion of an unnamed Workspace Agent schedule`,
      })),
      (t[119] = h),
      (t[120] = xt));
  let St;
  t[121] === V
    ? (St = t[122])
    : ((St = () => {
        V || G(null);
      }),
      (t[121] = V),
      (t[122] = St));
  let Ct;
  t[123] !== n ||
  t[124] !== nt ||
  t[125] !== B ||
  t[126] !== rt ||
  t[127] !== it ||
  t[128] !== V ||
  t[129] !== i
    ? ((Ct = () => {
        nt == null ||
          V ||
          (J(null),
          B.mutate(
            { accountId: n, versionScope: i, resource: nt, delete: !0 },
            {
              onSuccess: it,
              onError: (e) => {
                (G(null), rt(e));
              },
            },
          ));
      }),
      (t[123] = n),
      (t[124] = nt),
      (t[125] = B),
      (t[126] = rt),
      (t[127] = it),
      (t[128] = V),
      (t[129] = i),
      (t[130] = Ct))
    : (Ct = t[130]);
  let wt;
  t[131] !== V || t[132] !== bt || t[133] !== xt || t[134] !== St || t[135] !== Ct
    ? ((wt = (0, $.jsx)(ke, { open: bt, isPending: V, name: xt, onCancel: St, onConfirm: Ct })),
      (t[131] = V),
      (t[132] = bt),
      (t[133] = xt),
      (t[134] = St),
      (t[135] = Ct),
      (t[136] = wt))
    : (wt = t[136]);
  let Tt;
  t[137] !== ft || t[138] !== vt || t[139] !== yt || t[140] !== wt || t[141] !== Z
    ? ((Tt = (0, $.jsx)(oe, {
        children: (0, $.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [Z, ft, vt, yt, wt] }),
      })),
      (t[137] = ft),
      (t[138] = vt),
      (t[139] = yt),
      (t[140] = wt),
      (t[141] = Z),
      (t[142] = Tt))
    : (Tt = t[142]);
  let Et;
  return (
    t[143] !== Q || t[144] !== Tt
      ? ((Et = (0, $.jsxs)(ce, { size: `viewport`, children: [Q, Tt] })),
        (t[143] = Q),
        (t[144] = Tt),
        (t[145] = Et))
      : (Et = t[145]),
    Et
  );
}
function pt(e) {
  return (0, $.jsx)(z, {
    href: `https://chatgpt.com/#settings/Connectors`,
    initiator: `external_link`,
    openTarget: `external-browser`,
    children: e,
  });
}
function mt(e) {
  return e.trigger.type === `SCHEDULE`;
}
function ht(e) {
  return (
    e.auth_type === `PERSONAL` &&
    [`missing_link`, `missing_actions`, `needs_reconnect`, `scope_upgrade_required`].includes(e.link_status)
  );
}
var gt, _t, $;
function vt() {
  return (vt = e(() => {
    ((gt = T()),
      G(),
      x(),
      p(),
      (_t = D()),
      ae(),
      C(),
      L(),
      B(),
      o(),
      Te(),
      A(),
      l(),
      W(),
      me(),
      re(),
      i(),
      R(),
      h(),
      n(),
      k(),
      he(),
      I(),
      Ce(),
      q(),
      J(),
      Pe(),
      Y(),
      X(),
      ct(),
      $e(),
      Ge(),
      Ue(),
      ut(),
      ($ = E()));
  }))();
}
vt();
export { dt as WorkspaceAgentSchedulesDialog };
//# sourceMappingURL=dialog-d5f4f7c0e2cc.js.map
