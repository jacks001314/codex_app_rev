import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  GK as a,
  HO as o,
  IK as s,
  IO as c,
  JO as l,
  LNt as u,
  LO as d,
  Mst as f,
  NSt as p,
  PBt as m,
  Qst as h,
  RO as ee,
  TY as g,
  Ty as _,
  USt as v,
  Uot as y,
  Vot as te,
  WO as b,
  XOt as x,
  Y3 as S,
  YOt as C,
  Z3 as w,
  ZSt as T,
  aK as ne,
  ck as E,
  ew as re,
  iCt as ie,
  jst as ae,
  nCt as oe,
  okt as se,
  qH as D,
  qO as ce,
  rk as le,
  sY as O,
  sw as ue,
  tk as de,
  tkt as k,
  uw as A,
  vD as fe,
  wy as pe,
  yD as j,
  zO as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as M,
  BFt as he,
  GLn as ge,
  M6t as _e,
  MT as ve,
  N6t as N,
  QLn as P,
  VRr as F,
  ZLn as ye,
  _lt as be,
  bLr as I,
  iRr as xe,
  iut as L,
  jT as Se,
  mlt as Ce,
  plt as R,
  qLn as z,
  tut as we,
  tyr as B,
  wLr as V,
  zFt as Te,
  zRr as Ee,
} from "./app-initial-ad16eaadf81f.js";
import { n as H, t as De } from "./automation-delete-confirmation-dialog-7c5af9220f0a.js";
import { c as U, l as W, r as G, t as Oe } from "./automation-frequency-section-caeb4180ce42.js";
import { n as ke, t as Ae } from "./detail-section-state-45be9ee036ee.js";
import { a as je, b as Me, f as K, o as Ne } from "./builder-analytics-f4d73421cfb8.js";
import { n as Pe, t as Fe } from "./read-error-b0681ff43794.js";
import { n as Ie, r as q } from "./apps-query-4cb3d9532588.js";
import { a as J, l as Le } from "./query-28e51b942d45.js";
import { i as Re, n as ze, t as Y } from "./workspace-agent-detail-query-e90126e3ca29.js";
import { a as Be, i as X, n as Ve, o as He, r as Ue, t as We } from "./query-4ad900313a0a.js";
import { a as Ge, i as Ke, n as qe, o as Je, r as Ye, s as Xe, t as Ze } from "./model-321ee010a278.js";
var Qe;
function $e() {
  return ($e = e(() => {
    (x(),
      (Qe = C({
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
      onClose: l,
      onSave: u,
      onSaveAndRun: f,
      notice: p,
      saveDisabled: m,
      onInteraction: h,
    } = e,
    g = m !== void 0 && m,
    _ = se(),
    [v, y] = (0, st.useState)(r?.instructions ?? ``),
    te;
  n[0] === r
    ? (te = n[1])
    : ((te = r == null ? new Intl.DateTimeFormat().resolvedOptions().timeZone : (r.tz ?? `UTC`)),
      (n[0] = r),
      (n[1] = te));
  let [b, x] = (0, st.useState)(te),
    C;
  n[2] === r?.rules
    ? (C = n[3])
    : ((C = () =>
        (r?.rules ?? [{ freq: `weekly`, hour: 9, minute: 0, byweekday: [0, 1, 2, 3, 4], interval: 1 }]).map(
          at,
        )),
      (n[2] = r?.rules),
      (n[3] = C));
  let [w, T] = (0, st.useState)(C),
    [ne, E] = (0, st.useState)(null),
    re = r?.channel_binding,
    ie;
  n[4] !== i || n[5] !== re ? ((ie = Ze(i, re)), (n[4] = i), (n[5] = re), (n[6] = ie)) : (ie = n[6]);
  let ae = ie,
    oe;
  n[7] !== ne || n[8] !== i || n[9] !== ae
    ? ((oe =
        i.find((e) => {
          let { id: t } = e;
          return t === ne;
        }) ?? ae),
      (n[7] = ne),
      (n[8] = i),
      (n[9] = ae),
      (n[10] = oe))
    : (oe = n[10]);
  let D = oe,
    le;
  n[11] !== D?.binding || n[12] !== r?.channel_binding
    ? ((le = D?.binding ?? r?.channel_binding ?? { type: `chatgpt` }),
      (n[11] = D?.binding),
      (n[12] = r?.channel_binding),
      (n[13] = le))
    : (le = n[13]);
  let O = le,
    de = D?.parentTriggerId ?? (D === ae ? r?.parent_trigger_id : void 0),
    A,
    pe,
    j,
    M,
    he,
    ge,
    _e,
    ve,
    N,
    F,
    be,
    I;
  if (
    n[14] !== O ||
    n[15] !== a ||
    n[16] !== v ||
    n[17] !== de ||
    n[18] !== o ||
    n[19] !== w ||
    n[20] !== g ||
    n[21] !== b ||
    n[22] !== r
  ) {
    let e = w.map(it);
    if (n[35] !== b) {
      I = !0;
      try {
        new Intl.DateTimeFormat(void 0, { timeZone: b });
      } catch {
        I = !1;
      }
      ((n[35] = b), (n[36] = I));
    } else I = n[36];
    ((be = e.every(rt)),
      (pe = O.type === `slack` && !de),
      (A = a && !o && !g && v.length <= 6e3 && I && be && w.length > 0 && !pe),
      (N = r),
      (F = `SCHEDULE`),
      (j = r?.enabled ?? !0),
      (M = v),
      (he = b),
      (ge = O),
      (_e = O.type === `slack` ? de : void 0),
      (ve = e.filter(nt)),
      (n[14] = O),
      (n[15] = a),
      (n[16] = v),
      (n[17] = de),
      (n[18] = o),
      (n[19] = w),
      (n[20] = g),
      (n[21] = b),
      (n[22] = r),
      (n[23] = A),
      (n[24] = pe),
      (n[25] = j),
      (n[26] = M),
      (n[27] = he),
      (n[28] = ge),
      (n[29] = _e),
      (n[30] = ve),
      (n[31] = N),
      (n[32] = F),
      (n[33] = be),
      (n[34] = I));
  } else
    ((A = n[23]),
      (pe = n[24]),
      (j = n[25]),
      (M = n[26]),
      (he = n[27]),
      (ge = n[28]),
      (_e = n[29]),
      (ve = n[30]),
      (N = n[31]),
      (F = n[32]),
      (be = n[33]),
      (I = n[34]));
  let xe;
  n[37] !== j ||
  n[38] !== M ||
  n[39] !== he ||
  n[40] !== ge ||
  n[41] !== _e ||
  n[42] !== ve ||
  n[43] !== N ||
  n[44] !== F
    ? ((xe = {
        ...N,
        type: F,
        enabled: j,
        instructions: M,
        tz: he,
        channel_binding: ge,
        parent_trigger_id: _e,
        rules: ve,
      }),
      (n[37] = j),
      (n[38] = M),
      (n[39] = he),
      (n[40] = ge),
      (n[41] = _e),
      (n[42] = ve),
      (n[43] = N),
      (n[44] = F),
      (n[45] = xe))
    : (xe = n[45]);
  let L = xe,
    Se;
  n[46] !== A || n[47] !== L || n[48] !== u
    ? ((Se = (e) => {
        (e.preventDefault(), A && u(L));
      }),
      (n[46] = A),
      (n[47] = L),
      (n[48] = u),
      (n[49] = Se))
    : (Se = n[49]);
  let Ce;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = (0, Q.jsx)(me, {
        children: (0, Q.jsx)(ee, {
          title: (0, Q.jsx)(ce, {
            children: (0, Q.jsx)(k, {
              id: `workspaceAgents.schedules.editor.title`,
              defaultMessage: `Scheduled automation`,
              description: `Title of the editor for a Workspace Agent's scheduled run`,
            }),
          }),
        }),
      })),
      (n[50] = Ce))
    : (Ce = n[50]);
  let R;
  n[51] === s
    ? (R = n[52])
    : ((R = s == null ? null : (0, Q.jsx)(fe, { type: `error`, content: s })), (n[51] = s), (n[52] = R));
  let z;
  n[53] !== a || n[54] !== pe
    ? ((z =
        !a || pe
          ? (0, Q.jsx)(fe, {
              type: `normal`,
              content: (0, Q.jsx)(k, {
                id: `workspaceAgents.schedules.readOnly`,
                defaultMessage: `You can view this automation, but cannot change it with your current access or channel connection`,
                description: `Notice when permissions or a missing Slack connection prevent editing an agent schedule`,
              }),
            })
          : null),
      (n[53] = a),
      (n[54] = pe),
      (n[55] = z))
    : (z = n[55]);
  let we = !a || o,
    B;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(`span`, {
        className: `text-sm font-medium text-default select-none`,
        children: (0, Q.jsx)(k, {
          id: `workspaceAgents.schedules.prompt`,
          defaultMessage: `Instructions`,
          description: `Label for optional instructions used when a scheduled agent runs`,
        }),
      })),
      (n[56] = B))
    : (B = n[56]);
  let V;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => y(e.target.value)), (n[57] = V))
    : (V = n[57]);
  let Te;
  n[58] === v
    ? (Te = n[59])
    : ((Te = (0, Q.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          B,
          (0, Q.jsx)(P, {
            autoFocus: !0,
            name: `instructions`,
            rows: 4,
            maxLength: 6e3,
            value: v,
            onChange: V,
          }),
        ],
      })),
      (n[58] = v),
      (n[59] = Te));
  let Ee;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(k, {
        id: `workspaceAgents.schedules.destination`,
        defaultMessage: `Destination`,
        description: `Label for where an agent's scheduled run will appear`,
      })),
      (n[60] = Ee))
    : (Ee = n[60]);
  let H;
  n[61] === _
    ? (H = n[62])
    : ((H = _.formatMessage({
        id: `workspaceAgents.schedules.destinationLabel`,
        defaultMessage: `Automation destination`,
        description: `Accessible label for choosing where a scheduled agent runs`,
      })),
      (n[61] = _),
      (n[62] = H));
  let De;
  n[63] === i ? (De = n[64]) : ((De = i.map(tt)), (n[63] = i), (n[64] = De));
  let W = D?.id ?? ``,
    G;
  n[65] !== O.channel_id || n[66] !== O.type || n[67] !== D?.label || n[68] !== _
    ? ((G = O.type === `slack` ? (D?.label ?? `#${O.channel_id}`) : _.formatMessage(Qe.chatGptDestination)),
      (n[65] = O.channel_id),
      (n[66] = O.type),
      (n[67] = D?.label),
      (n[68] = _),
      (n[69] = G))
    : (G = n[69]);
  let ke;
  n[70] !== i || n[71] !== h
    ? ((ke = (e) => {
        (E(e),
          h?.({
            actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_CHANNEL_CHANGE,
            schedule: {
              channelType:
                i.find((t) => t.id === e)?.binding.type === `slack`
                  ? Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                  : Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
            },
          }));
      }),
      (n[70] = i),
      (n[71] = h),
      (n[72] = ke))
    : (ke = n[72]);
  let Ae;
  n[73] !== H || n[74] !== De || n[75] !== W || n[76] !== G || n[77] !== ke
    ? ((Ae = (0, Q.jsx)(ue, {
        label: Ee,
        control: (0, Q.jsx)(U, { ariaLabel: H, options: De, selectedId: W, selectedLabel: G, onSelect: ke }),
      })),
      (n[73] = H),
      (n[74] = De),
      (n[75] = W),
      (n[76] = G),
      (n[77] = ke),
      (n[78] = Ae))
    : (Ae = n[78]);
  let Me;
  n[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, Q.jsx)(k, {
        id: `workspaceAgents.schedules.timezone`,
        defaultMessage: `Time zone`,
        description: `Label for the IANA time zone used by an agent schedule`,
      })),
      (n[79] = Me))
    : (Me = n[79]);
  let K;
  n[80] === _
    ? (K = n[81])
    : ((K = _.formatMessage({
        id: `workspaceAgents.schedules.timezoneLabel`,
        defaultMessage: `Schedule time zone`,
        description: `Accessible label for editing a schedule's IANA time zone`,
      })),
      (n[80] = _),
      (n[81] = K));
  let Pe;
  n[82] === h
    ? (Pe = n[83])
    : ((Pe = (e) => {
        (x(e.target.value),
          h?.({ actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE, schedule: {} }));
      }),
      (n[82] = h),
      (n[83] = Pe));
  let Fe;
  n[84] !== K || n[85] !== Pe || n[86] !== b
    ? ((Fe = (0, Q.jsx)(ue, {
        label: Me,
        control: (0, Q.jsx)(ye, {
          variant: `ghost`,
          name: `timezone`,
          "aria-label": K,
          "aria-invalid": !I,
          value: b,
          onChange: Pe,
        }),
      })),
      (n[84] = K),
      (n[85] = Pe),
      (n[86] = b),
      (n[87] = Fe))
    : (Fe = n[87]);
  let Ie;
  n[88] !== Ae || n[89] !== Fe
    ? ((Ie = (0, Q.jsxs)(t, { children: [Ae, Fe] })), (n[88] = Ae), (n[89] = Fe), (n[90] = Ie))
    : (Ie = n[90]);
  let q;
  if (n[91] !== h || n[92] !== w || n[93] !== b || n[94] !== I) {
    let e;
    (n[96] !== h || n[97] !== b || n[98] !== I
      ? ((e = (e, t) =>
          (0, Q.jsx)(
            Oe,
            {
              intervalStyle: `default`,
              scheduleSource: `local`,
              timeZone: I ? b : void 0,
              scheduleConfig: e.config,
              onUpdateScheduleDraft: (n) => {
                let r = Z(n.mode);
                (h?.({
                  actionType:
                    r === Z(e.config.mode)
                      ? je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TIME_CHANGE
                      : je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_TYPE_CHANGE,
                  schedule: { scheduleType: r },
                }),
                  T((e) => e.map((e, r) => (r === t ? { ...e, config: n, dirty: !0 } : e))));
              },
            },
            t,
          )),
        (n[96] = h),
        (n[97] = b),
        (n[98] = I),
        (n[99] = e))
      : (e = n[99]),
      (q = w.map(e)),
      (n[91] = h),
      (n[92] = w),
      (n[93] = b),
      (n[94] = I),
      (n[95] = q));
  } else q = n[95];
  let J;
  n[100] === be
    ? (J = n[101])
    : ((J = be
        ? null
        : (0, Q.jsx)(fe, {
            type: `error`,
            content: (0, Q.jsx)(k, {
              id: `workspaceAgents.schedules.invalidRule`,
              defaultMessage: `Choose a repeating schedule with one time per rule, at least 15 minutes apart, without a year, end date, or numbered weekday`,
              description: `Validation error for a recurrence that the Workspace Agent schedule service cannot represent`,
            }),
          })),
      (n[100] = be),
      (n[101] = J));
  let Le;
  n[102] !== we || n[103] !== Te || n[104] !== Ie || n[105] !== q || n[106] !== J
    ? ((Le = (0, Q.jsxs)(`fieldset`, {
        disabled: we,
        className: `flex min-w-0 flex-col gap-4`,
        children: [Te, Ie, q, J],
      })),
      (n[102] = we),
      (n[103] = Te),
      (n[104] = Ie),
      (n[105] = q),
      (n[106] = J),
      (n[107] = Le))
    : (Le = n[107]);
  let Re;
  n[108] !== p || n[109] !== R || n[110] !== z || n[111] !== Le
    ? ((Re = (0, Q.jsxs)(me, { children: [p, R, z, Le] })),
      (n[108] = p),
      (n[109] = R),
      (n[110] = z),
      (n[111] = Le),
      (n[112] = Re))
    : (Re = n[112]);
  let ze;
  n[113] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, Q.jsx)(k, {
        id: `workspaceAgents.schedules.back`,
        defaultMessage: `Back`,
        description: `Returns to the automation list without saving the schedule`,
      })),
      (n[113] = ze))
    : (ze = n[113]);
  let Y;
  n[114] !== l || n[115] !== o
    ? ((Y = (0, Q.jsx)(S, { color: `outline`, type: `button`, disabled: o, onClick: l, children: ze })),
      (n[114] = l),
      (n[115] = o),
      (n[116] = Y))
    : (Y = n[116]);
  let Be;
  n[117] !== a || n[118] !== A || n[119] !== L || n[120] !== f
    ? ((Be =
        a && f != null
          ? (0, Q.jsx)(S, {
              color: `outline`,
              type: `button`,
              disabled: !A,
              onClick: () => {
                f(L);
              },
              children: (0, Q.jsx)(k, {
                id: `workspaceAgents.schedules.saveAndRunPreview`,
                defaultMessage: `Save and run preview`,
                description: `Saves the automation before starting a preview using the agent draft`,
              }),
            })
          : null),
      (n[117] = a),
      (n[118] = A),
      (n[119] = L),
      (n[120] = f),
      (n[121] = Be))
    : (Be = n[121]);
  let X;
  n[122] !== a || n[123] !== A || n[124] !== o
    ? ((X = a
        ? (0, Q.jsx)(S, {
            type: `submit`,
            disabled: !A,
            loading: o,
            children: (0, Q.jsx)(k, {
              id: `workspaceAgents.schedules.save`,
              defaultMessage: `Save`,
              description: `Saves a Workspace Agent automation`,
            }),
          })
        : null),
      (n[122] = a),
      (n[123] = A),
      (n[124] = o),
      (n[125] = X))
    : (X = n[125]);
  let Ve;
  n[126] !== Y || n[127] !== Be || n[128] !== X
    ? ((Ve = (0, Q.jsx)(me, { children: (0, Q.jsxs)(d, { children: [Y, Be, X] }) })),
      (n[126] = Y),
      (n[127] = Be),
      (n[128] = X),
      (n[129] = Ve))
    : (Ve = n[129]);
  let He;
  return (
    n[130] !== Se || n[131] !== Re || n[132] !== Ve
      ? ((He = (0, Q.jsxs)(c, { as: `form`, size: `viewport`, onSubmit: Se, children: [Ce, Re, Ve] })),
        (n[130] = Se),
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
    ((ot = m()), Me(), (st = i()), x(), G(), W(), j(), w(), l(), o(), M(), A(), re(), $e(), Ge(), (Q = u()));
  }))();
}
async function lt(e, t, n, r, i) {
  let { authenticatedUserId: a, accountUserId: o } = e.get(F),
    s = e.get(I),
    c = () => {
      let n = e.get(F);
      return (
        !i.aborted &&
        s != null &&
        e.get(I) === s &&
        a != null &&
        o != null &&
        n.authenticatedUserId === a &&
        n.accountUserId === o &&
        e.get(Ee) === t &&
        e.get(Ce) === !0
      );
    };
  if (a == null || s == null || !c()) return null;
  let l = { accountId: t, userId: s },
    u = () => {
      if ((i.throwIfAborted(), !c())) throw Error(`The active account changed during an automation run`);
    },
    d = await xe
      .safePost(`/hermes/agent/{agent_id}/triggers/{trigger_id}/run_now`, {
        parameters: { path: { agent_id: n, trigger_id: r } },
        expectedIdentity: l,
        assertRequestCurrent: u,
        signal: i,
      })
      .catch((e) => {
        if (c()) throw e;
        return null;
      });
  if (d == null || !c()) return null;
  if (d.status !== `dispatched` && d.status !== `completed`) throw Error(`The automation was not started`);
  e.query.invalidate(ze, n);
  let f = d.conversation_id?.trim();
  if (f) return { conversationId: f };
  let p = d.run_id?.trim();
  if (!p) return { conversationId: null };
  for (let e = 0; e < 6; e++) {
    if ((e > 0 && (await new Promise((e) => setTimeout(e, 350))), !c())) return null;
    try {
      let e = await xe.safeGet(`/hermes/agent/{agent_id}/conversations`, {
        parameters: { path: { agent_id: n }, query: { limit: 10 } },
        expectedIdentity: l,
        assertRequestCurrent: u,
        signal: i,
      });
      if (!c()) return null;
      let t = e.items.find((e) => e.fiber_id === p)?.id.trim();
      if (t) return { conversationId: t };
    } catch {
      return c() ? { conversationId: null } : null;
    }
  }
  return { conversationId: null };
}
function ut() {
  return (ut = e(() => {
    (V(), B(), R(), Y());
  }))();
}
function dt(e) {
  let t = (0, gt.c)(31),
    {
      accountId: r,
      agentId: i,
      initialSelectedScheduleId: a,
      versionScope: o,
      onPreviewRun: s,
      onClose: c,
      onCloseAutoFocus: l,
    } = e,
    u = o === void 0 ? `published` : o,
    d = n(h),
    f = v(),
    p = ve(),
    m = (0, _t.useRef)(null),
    ee,
    g;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = () => () => m.current?.abort()), (g = []), (t[0] = ee), (t[1] = g))
    : ((ee = t[0]), (g = t[1])),
    (0, _t.useEffect)(ee, g));
  let _ = oe(We, i),
    [y, x] = (0, _t.useState)(!1),
    S;
  t[2] !== _ || t[3] !== c || t[4] !== y
    ? ((S = (e) => {
        !e && !_.isPending && !y && c();
      }),
      (t[2] = _),
      (t[3] = c),
      (t[4] = y),
      (t[5] = S))
    : (S = t[5]);
  let C;
  t[6] === l
    ? (C = t[7])
    : ((C = {
        onCloseAutoFocus: (e) => {
          l != null && (e.preventDefault(), l());
        },
      }),
      (t[6] = l),
      (t[7] = C));
  let w;
  t[8] !== r || t[9] !== i || t[10] !== p || t[11] !== f || t[12] !== c || t[13] !== d
    ? ((w = async (e) => {
        if (m.current != null) return null;
        let t = new AbortController();
        return (
          (m.current = t),
          x(!0),
          lt(d, r, i, e, t.signal)
            .then((e) => (e?.conversationId != null && p() && (c(), f(te(e.conversationId))), e))
            .finally(() => {
              ((m.current = null), p() && x(!1));
            })
        );
      }),
      (t[8] = r),
      (t[9] = i),
      (t[10] = p),
      (t[11] = f),
      (t[12] = c),
      (t[13] = d),
      (t[14] = w))
    : (w = t[14]);
  let T;
  t[15] !== p || t[16] !== c || t[17] !== s
    ? ((T =
        s == null
          ? void 0
          : (e) => (
              x(!0),
              Promise.resolve()
                .then(() => s(e))
                .then(c)
                .finally(() => {
                  p() && x(!1);
                })
            )),
      (t[15] = p),
      (t[16] = c),
      (t[17] = s),
      (t[18] = T))
    : (T = t[18]);
  let ne;
  t[19] !== r || t[20] !== i || t[21] !== a || t[22] !== y || t[23] !== w || t[24] !== T || t[25] !== u
    ? ((ne = (0, $.jsx)(ft, {
        accountId: r,
        agentId: i,
        initialSelectedScheduleId: a,
        versionScope: u,
        previewPending: y,
        onPublishedRun: w,
        onPreviewRun: T,
      })),
      (t[19] = r),
      (t[20] = i),
      (t[21] = a),
      (t[22] = y),
      (t[23] = w),
      (t[24] = T),
      (t[25] = u),
      (t[26] = ne))
    : (ne = t[26]);
  let E;
  return (
    t[27] !== S || t[28] !== C || t[29] !== ne
      ? ((E = (0, $.jsx)(b, { open: !0, onOpenChange: S, contentProps: C, children: ne })),
        (t[27] = S),
        (t[28] = C),
        (t[29] = ne),
        (t[30] = E))
      : (E = t[30]),
    E
  );
}
function ft(e) {
  let t = (0, gt.c)(146),
    {
      accountId: r,
      agentId: i,
      versionScope: o,
      initialSelectedScheduleId: l,
      previewPending: u,
      onPublishedRun: d,
      onPreviewRun: p,
    } = e,
    m = n(h),
    g = se(),
    _ = ve(),
    v = ie(I),
    [y, te] = (0, _t.useState)(!1),
    { data: b, isPending: x, error: S, refetch: C } = oe(Ve, i),
    w = o === `published`,
    T;
  t[0] === w ? (T = t[1]) : ((T = { enabled: w }), (t[0] = w), (t[1] = T));
  let { data: E, error: re, isPending: ae, refetch: ue } = oe(Re, i, T),
    A = o === `draft`,
    j;
  t[2] === A ? (j = t[3]) : ((j = { enabled: A }), (t[2] = A), (t[3] = j));
  let { data: M, error: he, isPending: ge, refetch: N } = oe(Le, i, j),
    P = o === `draft` ? M : E,
    ye = o === `draft` ? M?.draft_version : E?.latest_published_version,
    xe = o === `draft` ? he : re,
    L = o === `draft` ? ge : ae,
    Se = M?.agent.viewer_capability === `hermes_admin` || M?.agent.viewer_capability === `hermes_write`,
    { accountUserId: R, authenticatedUserId: z } = ie(F),
    B = ie(Ce) === !0,
    V = ie(be) === !0,
    H = oe(We, i),
    U = H.isPending || u,
    W = (0, _t.useId)(),
    [G, Oe] = (0, _t.useState)(l ?? null),
    [ke, Me] = (0, _t.useState)(null),
    [K, Pe] = (0, _t.useState)(!1),
    [q, J] = (0, _t.useState)(null),
    ze;
  t[4] !== r || t[5] !== i || t[6] !== K || t[7] !== v || t[8] !== o
    ? ((ze = Ie({ accountId: r, userId: v, agentId: i, versionScope: o, enabled: K })),
      (t[4] = r),
      (t[5] = i),
      (t[6] = K),
      (t[7] = v),
      (t[8] = o),
      (t[9] = ze))
    : (ze = t[9]);
  let { data: Y, isFetching: X, error: Ue, refetch: Ge } = f(ze),
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
    t[12] !== r ||
    t[13] !== q ||
    t[14] !== i ||
    t[15] !== z ||
    t[16] !== B ||
    t[17] !== Se ||
    t[18] !== V ||
    t[19] !== Ge ||
    t[20] !== X ||
    t[21] !== Ue ||
    t[22] !== K ||
    t[23] !== ke ||
    t[24] !== P ||
    t[25] !== g ||
    t[26] !== _ ||
    t[27] !== x ||
    t[28] !== S ||
    t[29] !== xe ||
    t[30] !== L ||
    t[31] !== H ||
    t[32] !== Xe ||
    t[33] !== p ||
    t[34] !== d ||
    t[35] !== U ||
    t[36] !== Y ||
    t[37] !== C ||
    t[38] !== N ||
    t[39] !== ue ||
    t[40] !== v ||
    t[41] !== b ||
    t[42] !== W ||
    t[43] !== m ||
    t[44] !== G ||
    t[45] !== R ||
    t[46] !== ye ||
    t[47] !== o
  ) {
    at = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = b?.filter(mt),
        n = e?.find((e) => {
          let { id: t } = e;
          return t === G;
        });
      ((nt = e?.find((e) => {
        let { id: t } = e;
        return t === ke;
      })),
        ($e = B && R != null && ye != null && (o === `published` || Se)));
      let a = Ke(ye),
        c = [{ id: `chatgpt`, label: g.formatMessage(Qe.chatGptDestination), binding: { type: `chatgpt` } }];
      V && P?.agent.creator_id === R && c.push(...a);
      let l;
      t[55] !== B || t[56] !== V || t[57] !== P?.agent.creator_id || t[58] !== R
        ? ((l = (e) =>
            Ye({ resource: e, userId: R, agentCreatorId: P?.agent.creator_id, canAccess: B, canShare: V })),
          (t[55] = B),
          (t[56] = V),
          (t[57] = P?.agent.creator_id),
          (t[58] = R),
          (t[59] = l))
        : (l = t[59]);
      let u = l,
        f;
      (t[60] === g
        ? (f = t[61])
        : ((f = (e) =>
            J(
              (e instanceof Error ? e.message : null) ||
                g.formatMessage({
                  id: `workspaceAgents.schedules.actionError`,
                  defaultMessage: `Could not update the automation. Try again`,
                  description: `Error shown when changing an agent schedule fails`,
                }),
            )),
          (t[60] = g),
          (t[61] = f)),
        (rt = f));
      let h;
      (t[62] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((h = () => {
            (Oe(null), Pe(!1), Me(null), J(null));
          }),
          (t[62] = h))
        : (h = t[62]),
        (it = h));
      let ee;
      t[63] !== r ||
      t[64] !== i ||
      t[65] !== z ||
      t[66] !== g ||
      t[67] !== p ||
      t[68] !== m ||
      t[69] !== R ||
      t[70] !== o
        ? ((ee = async (e) => {
            let t = m.get(F);
            if (
              p == null ||
              e.trigger.type !== `SCHEDULE` ||
              m.get(Ee) !== r ||
              t.accountUserId !== R ||
              t.authenticatedUserId !== z ||
              z == null ||
              m.get(Ce) !== !0
            )
              return;
            J(null);
            let n = He(
              m,
              i,
              {
                actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW,
                schedule: {
                  scheduleTriggerId: e.id,
                  channelType:
                    e.trigger.channel_binding?.type === `slack`
                      ? Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_SLACK
                      : Ne.CHATGPT_AGENT_BUILDER_CHANNEL_TYPE_CHATGPT,
                },
              },
              o,
            );
            try {
              (await p(
                e.trigger.instructions?.trim() ||
                  g.formatMessage({
                    id: `workspaceAgents.schedules.previewFallbackPrompt`,
                    defaultMessage: `Start execution`,
                    description: `First user message in an agent draft preview when the automation has no additional instructions`,
                  }),
              ),
                n(!0));
            } catch (e) {
              let t = e;
              (n(!1),
                J(
                  t instanceof Error
                    ? t.message
                    : g.formatMessage({
                        id: `workspaceAgents.schedules.previewError`,
                        defaultMessage: `Could not start the preview. Try again`,
                        description: `Error shown when the saved automation cannot start an agent draft preview`,
                      }),
                ));
            }
          }),
          (t[63] = r),
          (t[64] = i),
          (t[65] = z),
          (t[66] = g),
          (t[67] = p),
          (t[68] = m),
          (t[69] = R),
          (t[70] = o),
          (t[71] = ee))
        : (ee = t[71]);
      let y = ee,
        w;
      t[72] !== r ||
      t[73] !== i ||
      t[74] !== g ||
      t[75] !== _ ||
      t[76] !== d ||
      t[77] !== U ||
      t[78] !== v ||
      t[79] !== m
        ? ((w = async (e) => {
            let t = () => m.get(Ee) === r && m.get(I) === v;
            if (U || v == null || !t()) return;
            (J(null), te(!1));
            let n = He(
              m,
              i,
              {
                actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_RUN_NOW,
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
              let r = await d(e.id);
              if (!t()) return;
              (n(r != null), r != null && _() && te(!0));
            } catch {
              if (!t()) return;
              (n(!1),
                _() &&
                  J(
                    g.formatMessage({
                      id: `workspaceAgents.schedules.runFailed`,
                      defaultMessage: `Could not start the automation. Try again`,
                      description: `Error when starting an immediate run of a published agent automation`,
                    }),
                  ));
            }
          }),
          (t[72] = r),
          (t[73] = i),
          (t[74] = g),
          (t[75] = _),
          (t[76] = d),
          (t[77] = U),
          (t[78] = v),
          (t[79] = m),
          (t[80] = w))
        : (w = t[80]);
      let T = w;
      if (
        ((tt = e?.map((e) => {
          if (e.trigger.type !== `SCHEDULE`) return null;
          let t = e.trigger,
            { canEdit: n, canDelete: c } = u(e),
            l =
              B &&
              e.owner_user_id === R &&
              (t.channel_binding?.type !== `slack` || P?.agent.creator_id === R),
            d = qe(t, g),
            f =
              t.channel_binding?.type === `slack`
                ? (Ze(a, t.channel_binding)?.label ?? `#${t.channel_binding.channel_id}`)
                : g.formatMessage(Qe.chatGptDestination);
          return (0, $.jsx)(
            we,
            {
              ariaLabel: d,
              ariaDescribedBy: `${W}-${e.id}-details${t.enabled === !1 ? ` ${W}-${e.id}-paused` : ``}`,
              isSelected: G === e.id,
              hasInteractiveContent: !0,
              isDisabled: U,
              onSelect: () => {
                (Be(
                  m,
                  i,
                  {
                    actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_SELECT,
                    schedule: { scheduleTriggerId: e.id },
                  },
                  o,
                ),
                  Oe(e.id),
                  J(null));
              },
              title: d,
              icon:
                t.channel_binding?.type === `slack`
                  ? (0, $.jsx)(_e, { alt: ``, knownAppId: `slack`, size: 20, fallback: (0, $.jsx)(D, {}) })
                  : (0, $.jsx)(D, {}),
              titleAdornment:
                t.enabled === !1
                  ? (0, $.jsx)(`span`, {
                      id: `${W}-${e.id}-paused`,
                      children: (0, $.jsx)(Te, {
                        variant: `outline`,
                        children: (0, $.jsx)(k, {
                          id: `workspaceAgents.schedules.paused`,
                          defaultMessage: `Paused`,
                          description: `Status badge for a paused Workspace Agent automation`,
                        }),
                      }),
                    })
                  : null,
              secondLine: (0, $.jsx)(`div`, {
                id: `${W}-${e.id}-details`,
                className: `truncate`,
                children: t.instructions
                  ? (0, $.jsx)(k, {
                      id: `workspaceAgents.schedules.rowDescription`,
                      defaultMessage: `{destination} · {instructions}`,
                      description: `Destination and instructions beneath an agent automation's schedule`,
                      values: { destination: f, instructions: t.instructions },
                    })
                  : f,
              }),
              rightText: (0, $.jsx)(`div`, {
                className: `pointer-events-auto`,
                children: (0, $.jsxs)(de, {
                  align: `end`,
                  triggerButton: (0, $.jsx)(pe, {
                    label: g.formatMessage({
                      id: `workspaceAgents.schedules.moreActions`,
                      defaultMessage: `Automation actions`,
                      description: `Accessible label for an automation's pause and delete menu`,
                    }),
                    disabled: U || (!n && !c && !l),
                  }),
                  children: [
                    l && P?.latest_published_version != null
                      ? (0, $.jsx)(le.Item, {
                          LeftIcon: s,
                          disabled: U,
                          onSelect: () => void T(e),
                          children: (0, $.jsx)(k, {
                            id: `workspaceAgents.schedules.runPublished`,
                            defaultMessage: `Run published version`,
                            description: `Starts this automation immediately with the published agent and its saved destination`,
                          }),
                        })
                      : null,
                    l && p != null
                      ? (0, $.jsx)(le.Item, {
                          LeftIcon: s,
                          disabled: U,
                          onSelect: () => void y(e),
                          children: (0, $.jsx)(k, {
                            id: `workspaceAgents.schedules.runPreview`,
                            defaultMessage: `Run preview`,
                            description: `Starts a preview of the agent draft with this automation's instructions`,
                          }),
                        })
                      : null,
                    (0, $.jsx)(le.Item, {
                      LeftIcon: t.enabled === !1 ? s : ne,
                      disabled: !n || U,
                      onSelect: () => {
                        (J(null),
                          H.mutate(
                            {
                              accountId: r,
                              versionScope: o,
                              resource: e,
                              trigger: { ...t, enabled: t.enabled === !1 },
                            },
                            { onError: rt },
                          ));
                      },
                      children:
                        t.enabled === !1
                          ? (0, $.jsx)(k, {
                              id: `workspaceAgents.schedules.resume`,
                              defaultMessage: `Resume`,
                              description: `Resumes a paused Workspace Agent schedule`,
                            })
                          : (0, $.jsx)(k, {
                              id: `workspaceAgents.schedules.pause`,
                              defaultMessage: `Pause`,
                              description: `Pauses a Workspace Agent schedule`,
                            }),
                    }),
                    c
                      ? (0, $.jsx)(le.Item, {
                          LeftIcon: O,
                          disabled: U,
                          onSelect: () => {
                            (Me(e.id), J(null));
                          },
                          children: (0, $.jsx)(k, {
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
        S != null || xe != null)
      ) {
        let e;
        (t[81] !== C || t[82] !== N || t[83] !== ue || t[84] !== o
          ? ((e = (0, $.jsx)(Fe, {
              onRetry: () => {
                (C(), o === `draft` ? N() : ue());
              },
            })),
            (t[81] = C),
            (t[82] = N),
            (t[83] = ue),
            (t[84] = o),
            (t[85] = e))
          : (e = t[85]),
          (tt = e));
      } else if (x || L) {
        let e;
        (t[86] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Ae, {
              children: (0, $.jsx)(k, {
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
          ? ((e = (0, $.jsx)(Ae, {
              children: (0, $.jsx)(k, {
                id: `workspaceAgents.schedules.empty`,
                defaultMessage: `No automations yet`,
                description: `Empty state when an agent has no accessible scheduled runs`,
              }),
            })),
            (t[87] = e))
          : (e = t[87]),
          (tt = e));
      }
      let E;
      if (
        (t[88] !== P || t[89] !== o
          ? ((E =
              o === `draft` && P != null && P.latest_published_version == null
                ? (0, $.jsx)(fe, {
                    type: `normal`,
                    content: (0, $.jsx)(k, {
                      id: `workspaceAgents.schedules.unpublishedDraft`,
                      defaultMessage: `Automations will start running after you publish this agent`,
                      description: `Notice in the agent editor's automation dialog when configuring a saved draft that has never been published`,
                    }),
                  })
                : null),
            (t[88] = P),
            (t[89] = o),
            (t[90] = E))
          : (E = t[90]),
        (Z = E),
        K || n?.trigger.type === `SCHEDULE`)
      ) {
        let e;
        t[91] !== Ge || t[92] !== X || t[93] !== Ue || t[94] !== K || t[95] !== Xe || t[96] !== Y
          ? ((e =
              K && (Y == null || X || Ue != null || Xe)
                ? (0, $.jsx)(fe, {
                    type: Ue ? `error` : `normal`,
                    content: X
                      ? (0, $.jsx)(k, {
                          id: `workspaceAgents.schedules.checkingConnections`,
                          defaultMessage: `Checking app connections…`,
                          description: `Status while checking personal app connections before scheduling an agent`,
                        })
                      : (0, $.jsx)(k, {
                          id: `workspaceAgents.schedules.repairConnections`,
                          defaultMessage: `Review this agent's app connections in <link>ChatGPT settings</link>, then check again to continue`,
                          description: `Recovery instructions with a link to app connection settings before creating an automation`,
                          values: { link: pt },
                        }),
                    primaryCtaText: (0, $.jsx)(k, {
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
              trigger: n?.trigger.type === `SCHEDULE` ? n.trigger : null,
              destinations: c,
              canEdit: n == null ? $e : u(n).canEdit,
              pending: U,
              saveDisabled: K && (X || Y == null || Ue != null || Xe === !0),
              notice: a,
              onInteraction: (e) =>
                Be(m, i, { ...e, schedule: { ...e.schedule, scheduleTriggerId: n?.id } }, o),
              error: q,
              onClose: it,
              onSaveAndRun:
                p == null
                  ? void 0
                  : async (e) => {
                      J(null);
                      try {
                        let t = await H.mutateAsync({
                          accountId: r,
                          versionScope: o,
                          resource: n,
                          trigger: e,
                        });
                        if (t == null) return;
                        (Pe(!1), Oe(t.id), await y(t));
                      } catch (e) {
                        rt(e);
                      }
                    },
              onSave: (e) => {
                (J(null),
                  H.mutate(
                    { accountId: r, versionScope: o, resource: n, trigger: e },
                    { onSuccess: it, onError: rt },
                  ));
              },
            },
            n?.id ?? `new`,
          )));
        break bb0;
      }
    }
    ((t[12] = r),
      (t[13] = q),
      (t[14] = i),
      (t[15] = z),
      (t[16] = B),
      (t[17] = Se),
      (t[18] = V),
      (t[19] = Ge),
      (t[20] = X),
      (t[21] = Ue),
      (t[22] = K),
      (t[23] = ke),
      (t[24] = P),
      (t[25] = g),
      (t[26] = _),
      (t[27] = x),
      (t[28] = S),
      (t[29] = xe),
      (t[30] = L),
      (t[31] = H),
      (t[32] = Xe),
      (t[33] = p),
      (t[34] = d),
      (t[35] = U),
      (t[36] = Y),
      (t[37] = C),
      (t[38] = N),
      (t[39] = ue),
      (t[40] = v),
      (t[41] = b),
      (t[42] = W),
      (t[43] = m),
      (t[44] = G),
      (t[45] = R),
      (t[46] = ye),
      (t[47] = o),
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
  t[101] === y
    ? (ot = t[102])
    : ((ot = y
        ? (0, $.jsx)(fe, {
            type: `success`,
            content: (0, $.jsx)(k, {
              id: `workspaceAgents.schedules.runStarted`,
              defaultMessage: `Automation started. Its conversation will appear in agent activity.`,
              description: `Confirmation that a scheduled agent run was accepted but its conversation is not yet available`,
            }),
          })
        : null),
      (t[101] = y),
      (t[102] = ot));
  let st;
  t[103] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, $.jsx)(ee, {
        title: (0, $.jsx)(ce, {
          children: (0, $.jsx)(k, {
            id: `workspaceAgents.schedules.title`,
            defaultMessage: `Automations`,
            description: `Title of the list of a Workspace Agent's scheduled runs`,
          }),
        }),
      })),
      (t[103] = st))
    : (st = t[103]);
  let Q;
  t[104] === ot ? (Q = t[105]) : ((Q = (0, $.jsxs)(me, { children: [ot, st] })), (t[104] = ot), (t[105] = Q));
  let ct;
  t[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ct = (0, $.jsx)(a, {})), (t[106] = ct))
    : (ct = t[106]);
  let lt = !$e || U,
    ut;
  t[107] !== i || t[108] !== m || t[109] !== o
    ? ((ut = () => {
        (Be(m, i, { actionType: je.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SCHEDULE_ADD }, o), Pe(!0), J(null));
      }),
      (t[107] = i),
      (t[108] = m),
      (t[109] = o),
      (t[110] = ut))
    : (ut = t[110]);
  let dt;
  t[111] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (0, $.jsx)(k, {
        id: `workspaceAgents.schedules.add`,
        defaultMessage: `Add automation`,
        description: `Opens the form to schedule a Workspace Agent`,
      })),
      (t[111] = dt))
    : (dt = t[111]);
  let ft;
  t[112] !== lt || t[113] !== ut
    ? ((ft = (0, $.jsx)(we, { icon: ct, isSelected: !1, isDisabled: lt, onSelect: ut, title: dt })),
      (t[112] = lt),
      (t[113] = ut),
      (t[114] = ft))
    : (ft = t[114]);
  let vt;
  t[115] === q
    ? (vt = t[116])
    : ((vt = q == null ? null : (0, $.jsx)(fe, { type: `error`, content: q })), (t[115] = q), (t[116] = vt));
  let yt;
  t[117] === tt
    ? (yt = t[118])
    : ((yt = (0, $.jsx)(`div`, { className: `flex flex-col`, children: tt })), (t[117] = tt), (t[118] = yt));
  let bt = nt != null,
    xt;
  t[119] === g
    ? (xt = t[120])
    : ((xt = g.formatMessage({
        id: `workspaceAgents.schedules.automationName`,
        defaultMessage: `this automation`,
        description: `Name used when confirming deletion of an unnamed Workspace Agent schedule`,
      })),
      (t[119] = g),
      (t[120] = xt));
  let St;
  t[121] === U
    ? (St = t[122])
    : ((St = () => {
        U || Me(null);
      }),
      (t[121] = U),
      (t[122] = St));
  let Ct;
  t[123] !== r ||
  t[124] !== nt ||
  t[125] !== H ||
  t[126] !== rt ||
  t[127] !== it ||
  t[128] !== U ||
  t[129] !== o
    ? ((Ct = () => {
        nt == null ||
          U ||
          (J(null),
          H.mutate(
            { accountId: r, versionScope: o, resource: nt, delete: !0 },
            {
              onSuccess: it,
              onError: (e) => {
                (Me(null), rt(e));
              },
            },
          ));
      }),
      (t[123] = r),
      (t[124] = nt),
      (t[125] = H),
      (t[126] = rt),
      (t[127] = it),
      (t[128] = U),
      (t[129] = o),
      (t[130] = Ct))
    : (Ct = t[130]);
  let wt;
  t[131] !== U || t[132] !== bt || t[133] !== xt || t[134] !== St || t[135] !== Ct
    ? ((wt = (0, $.jsx)(De, { open: bt, isPending: U, name: xt, onCancel: St, onConfirm: Ct })),
      (t[131] = U),
      (t[132] = bt),
      (t[133] = xt),
      (t[134] = St),
      (t[135] = Ct),
      (t[136] = wt))
    : (wt = t[136]);
  let Tt;
  t[137] !== ft || t[138] !== vt || t[139] !== yt || t[140] !== wt || t[141] !== Z
    ? ((Tt = (0, $.jsx)(me, {
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
      ? ((Et = (0, $.jsxs)(c, { size: `viewport`, children: [Q, Tt] })),
        (t[143] = Q),
        (t[144] = Tt),
        (t[145] = Et))
      : (Et = t[145]),
    Et
  );
}
function pt(e) {
  return (0, $.jsx)(ge, {
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
    ((gt = m()),
      Me(),
      ae(),
      T(),
      (_t = i()),
      x(),
      p(),
      V(),
      H(),
      y(),
      N(),
      he(),
      j(),
      ke(),
      l(),
      o(),
      E(),
      z(),
      g(),
      _(),
      L(),
      r(),
      Se(),
      R(),
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
      ($ = u()));
  }))();
}
vt();
export { dt as WorkspaceAgentSchedulesDialog };
//# sourceMappingURL=dialog-c260d61c70d3.js.map
