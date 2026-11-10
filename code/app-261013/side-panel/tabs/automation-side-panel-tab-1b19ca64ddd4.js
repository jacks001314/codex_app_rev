import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AD as n,
  Ez as r,
  F2 as i,
  GE as a,
  I2 as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  Rxt as u,
  TJ as d,
  VDt as f,
  Vxt as p,
  WE as m,
  XV as h,
  cSt as g,
  cz as _,
  frt as v,
  gPt as y,
  hPt as b,
  hot as x,
  hrt as S,
  i3 as C,
  iot as w,
  irt as T,
  jDt as E,
  kD as ee,
  kz as D,
  lot as te,
  lrt as ne,
  nst as re,
  r3 as ie,
  rst as ae,
  srt as oe,
  sz as se,
  t3 as ce,
  tst as le,
  vzt as O,
  xMt as ue,
  yzt as k,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bjr as fe,
  CAr as pe,
  Cit as me,
  Cwr as A,
  DAr as he,
  D_n as ge,
  Dbn as j,
  EAr as _e,
  E_n as ve,
  Hjr as ye,
  Hm as M,
  I3n as be,
  Ijr as xe,
  MT as N,
  Obn as P,
  PAr as F,
  QAr as I,
  RAr as Se,
  Vm as Ce,
  Wjr as we,
  XBt as Te,
  XDr as Ee,
  YOr as L,
  ZBt as De,
  b3n as R,
  bAr as Oe,
  dwn as z,
  dxn as B,
  eOr as ke,
  ean as Ae,
  ejr as je,
  fAr as Me,
  fj as Ne,
  gAr as Pe,
  gwr as Fe,
  hAr as Ie,
  hC as Le,
  hHt as Re,
  hwn as ze,
  i_n as V,
  irt as Be,
  jT as Ve,
  kAr as He,
  lxn as H,
  mC as U,
  oFr as Ue,
  pAr as We,
  pHt as Ge,
  pj as W,
  qwr as G,
  rTr as Ke,
  rkr as qe,
  rrt as K,
  s_n as Je,
  tan as Ye,
  uxn as q,
  vAr as Xe,
  vwr as Ze,
  w3n as Qe,
  wAr as $e,
  wit as et,
  xAr as tt,
  zAr as nt,
} from "./app-initial-5851df3f6cb1.js";
import { n as J, t as rt } from "./automation-delete-confirmation-dialog-c8c0c59ec586.js";
import { a as it, i as at } from "./automation-dialog-8a01873d44d2.js";
import { i as ot, r as st } from "./automation-detail-panel-d783fffd1a5b.js";
import { i as ct, n as lt, r as ut, t as dt } from "./automation-submit-tooltip-b87f67f502e6.js";
import { n as ft, t as pt } from "./cloud-automation-detail-panel-b305368bf49b.js";
import { a as Y } from "./detail-panel-3d932275f681.js";
import { n as mt, t as X } from "./site-automation-create-panel-269a3999f344.js";
function ht(e) {
  let a = (0, bt.c)(164),
    {
      automation: o,
      draftInstanceId: l,
      models: d,
      renderSlots: m,
      session: h,
      onClose: g,
      onNameChange: _,
      onSaved: v,
    } = e,
    b = m === void 0 ? n : m,
    S = c(Fe),
    C = f(),
    E = re(),
    ee = p(Ke),
    D = p(ke),
    te = p(Ne),
    ie;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = { hostId: w, cwd: null }), (a[0] = ie))
    : (ie = a[0]);
  let ae = De(ie),
    oe = he({ defaultModel: te, models: d, modelSettings: ae }),
    ce;
  a[1] !== o || a[2] !== te || a[3] !== d || a[4] !== S.value || a[5] !== h.seed || a[6] !== h.type
    ? ((ce =
        h.type === `proposal`
          ? tt({ defaultModel: te, seed: h.seed, targetAutomation: o, models: d })
          : o == null
            ? { ...Me, targetThreadId: Ze(S.value) }
            : Oe(o, d, te)),
      (a[1] = o),
      (a[2] = te),
      (a[3] = d),
      (a[4] = S.value),
      (a[5] = h.seed),
      (a[6] = h.type),
      (a[7] = ce))
    : (ce = a[7]);
  let le = ce,
    O;
  a[8] === h ? (O = a[9]) : ((O = Be(h)), (a[8] = h), (a[9] = O));
  let ue;
  a[10] !== l || a[11] !== le || a[12] !== O
    ? ((ue = { draftInstanceId: l, initialDraft: le, sessionKey: O }),
      (a[10] = l),
      (a[11] = le),
      (a[12] = O),
      (a[13] = ue))
    : (ue = a[13]);
  let k = u(Ct, ue),
    de = p(k.draft$),
    me;
  a[14] !== o || a[15] !== S
    ? ((me = async (e) => {
        if (e.kind !== `cron`) return;
        let t = null;
        `pluginTemplateId` in e
          ? (t = e.pluginTemplateId ?? null)
          : `id` in e && o?.kind === `cron` && (t = o.pluginTemplateId);
        let n =
            `projectId` in e
              ? S.get(Je).find((t) => {
                  let { projectId: n } = t;
                  return n === e.projectId;
                })
              : null,
          r = n?.projectKind === `local` ? ve(n) : [],
          i = await S.query
            .getOrFetch(Ve, { hostId: w, pluginTemplateId: t, roots: `cwds` in e ? e.cwds : r })
            .catch(vt);
        return i == null ? void 0 : [i];
      }),
      (a[14] = o),
      (a[15] = S),
      (a[16] = me))
    : (me = a[16]);
  let A = me,
    ge = p(k.hasUserEdited$),
    [j, M] = (0, xt.useState)(null),
    [be, N] = (0, xt.useState)(!1),
    P = We({ draft: de, modelSettings: oe }),
    F = nt({ draft: P, serverConversationId: ee }),
    I = (e) => {
      let t = We({ draft: S.get(k.draft$), modelSettings: oe }),
        n = typeof e == `function` ? e(t) : e;
      n !== t && (S.set(k.hasUserEdited$, !0), S.set(k.draft$, n));
    },
    we = p(Je),
    { trimmedName: Te, trimmedPrompt: Ee, canSave: L } = He(F),
    R = Se(F),
    z =
      P.id != null && L && R != null && P.status !== `DELETED`
        ? $e({ draft: F, name: Te, prompt: Ee, status: P.status, rrule: R })
        : null,
    B = Ye(z, 600),
    Ae;
  a[17] !== j || a[18] !== z
    ? ((Ae = z != null && Ie(j, z)), (a[17] = j), (a[18] = z), (a[19] = Ae))
    : (Ae = a[19]);
  let Re = Ae,
    ze;
  a[20] !== E || a[21] !== M
    ? ((ze = (e) => {
        (E.setQueryData(T(`list-automations`), (t) =>
          t == null
            ? { items: [e] }
            : {
                ...t,
                items: t.items.some((t) => t.id === e.id)
                  ? t.items.map((t) => (t.id === e.id ? e : t))
                  : [...t.items, e],
              },
        ),
          E.invalidateQueries({ queryKey: T(`list-automations`) }),
          M(null));
      }),
      (a[20] = E),
      (a[21] = M),
      (a[22] = ze))
    : (ze = a[22]);
  let V = ze,
    H;
  a[23] !== V ||
  a[24] !== A ||
  a[25] !== v ||
  a[26] !== D ||
  a[27] !== S ||
  a[28] !== h.seed ||
  a[29] !== h.type
    ? ((H = (e) => {
        let { item: t } = e;
        (A(t).then((e) =>
          je(
            D,
            {
              action: xe.CODEX_AUTOMATION_ACTION_CREATED,
              source: ye.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !0,
            },
            t,
            e,
          ),
        ),
          V(t),
          h.type === `proposal` && S.set(Pe, { directiveKey: h.seed.directiveKey, automationId: t.id }),
          v(t));
      }),
      (a[23] = V),
      (a[24] = A),
      (a[25] = v),
      (a[26] = D),
      (a[27] = S),
      (a[28] = h.seed),
      (a[29] = h.type),
      (a[30] = H))
    : (H = a[30]);
  let U;
  a[31] !== A || a[32] !== C || a[33] !== D || a[34] !== S
    ? ((U = (e, t) => {
        (A(t).then((e) =>
          je(
            D,
            {
              action: xe.CODEX_AUTOMATION_ACTION_CREATED,
              source: ye.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !1,
              failureReason: fe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
            },
            t,
            e,
          ),
        ),
          yt(S, C, e.message));
      }),
      (a[31] = A),
      (a[32] = C),
      (a[33] = D),
      (a[34] = S),
      (a[35] = U))
    : (U = a[35]);
  let Ue;
  a[36] !== U || a[37] !== H
    ? ((Ue = { onSuccess: H, onError: U }), (a[36] = U), (a[37] = H), (a[38] = Ue))
    : (Ue = a[38]);
  let Ge = ne(`automation-create`, Ue),
    W;
  a[39] !== V ||
  a[40] !== A ||
  a[41] !== v ||
  a[42] !== D ||
  a[43] !== S ||
  a[44] !== h.seed ||
  a[45] !== h.type
    ? ((W = (e) => {
        let { item: t } = e;
        (A(t).then((e) =>
          je(
            D,
            {
              action: xe.CODEX_AUTOMATION_ACTION_UPDATED,
              source: ye.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !0,
            },
            t,
            e,
          ),
        ),
          V(t),
          h.type === `proposal` &&
            (S.set(Pe, { directiveKey: h.seed.directiveKey, automationId: t.id }), v(t)));
      }),
      (a[39] = V),
      (a[40] = A),
      (a[41] = v),
      (a[42] = D),
      (a[43] = S),
      (a[44] = h.seed),
      (a[45] = h.type),
      (a[46] = W))
    : (W = a[46]);
  let G;
  a[47] !== o || a[48] !== A || a[49] !== C || a[50] !== D || a[51] !== S || a[52] !== M
    ? ((G = (e, t) => {
        (M(t),
          A(t).then((n) =>
            je(
              D,
              {
                action: xe.CODEX_AUTOMATION_ACTION_UPDATED,
                source: ye.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
                success: !1,
                failureReason:
                  e.message ===
                  `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
                    ? fe.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                    : fe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
              },
              t,
              n,
              o,
            ),
          ),
          yt(S, C, e.message));
      }),
      (a[47] = o),
      (a[48] = A),
      (a[49] = C),
      (a[50] = D),
      (a[51] = S),
      (a[52] = M),
      (a[53] = G))
    : (G = a[53]);
  let qe;
  a[54] !== W || a[55] !== G
    ? ((qe = { onSuccess: W, onError: G }), (a[54] = W), (a[55] = G), (a[56] = qe))
    : (qe = a[56]);
  let K = ne(`automation-update`, qe),
    q;
  a[57] !== C || a[58] !== g || a[59] !== E || a[60] !== S || a[61] !== N
    ? ((q = (e, t) => {
        let { id: n } = t;
        if ((N(!1), !e.success)) {
          S.get(x).danger(
            C.formatMessage({
              id: `inbox.automations.deleteError`,
              defaultMessage: `Could not delete scheduled task`,
              description: `Toast title when deleting a scheduled task fails`,
            }),
            { errorAnalytics: { toastId: `inbox.automations.deleteError` } },
          );
          return;
        }
        (g(),
          E.setQueryData(T(`list-automations`), (e) =>
            e == null ? e : { ...e, items: e.items.filter((e) => e.id !== n) },
          ),
          E.invalidateQueries({ queryKey: T(`list-automations`) }));
      }),
      (a[57] = C),
      (a[58] = g),
      (a[59] = E),
      (a[60] = S),
      (a[61] = N),
      (a[62] = q))
    : (q = a[62]);
  let Qe;
  a[63] !== C || a[64] !== S || a[65] !== N
    ? ((Qe = (e) => {
        (N(!1),
          S.get(x).danger(
            C.formatMessage({
              id: `inbox.automations.deleteError`,
              defaultMessage: `Could not delete scheduled task`,
              description: `Toast title when deleting a scheduled task fails`,
            }),
            { errorAnalytics: { toastId: `inbox.automations.deleteError` }, description: e.message },
          ));
      }),
      (a[63] = C),
      (a[64] = S),
      (a[65] = N),
      (a[66] = Qe))
    : (Qe = a[66]);
  let et;
  a[67] !== q || a[68] !== Qe
    ? ((et = { onSuccess: q, onError: Qe }), (a[67] = q), (a[68] = Qe), (a[69] = et))
    : (et = a[69]);
  let J = ne(`automation-delete`, et),
    it,
    ot;
  (a[70] !== o || a[71] !== B || a[72] !== j || a[73] !== ge || a[74] !== h.type || a[75] !== K
    ? ((it = () => {
        h.type !== `persisted` ||
          !ge ||
          o == null ||
          B == null ||
          K.isPending ||
          _e(o, B) ||
          Ie(j, B) ||
          K.mutate(B);
      }),
      (ot = [o, B, j, ge, h.type, K, K.isPending]),
      (a[70] = o),
      (a[71] = B),
      (a[72] = j),
      (a[73] = ge),
      (a[74] = h.type),
      (a[75] = K),
      (a[76] = it),
      (a[77] = ot))
    : ((it = a[76]), (ot = a[77])),
    (0, xt.useEffect)(it, ot));
  let ct;
  a[78] !== L ||
  a[79] !== Ge ||
  a[80] !== F ||
  a[81] !== R ||
  a[82] !== S ||
  a[83] !== h.seed ||
  a[84] !== h.type ||
  a[85] !== Te ||
  a[86] !== Ee ||
  a[87] !== K ||
  a[88] !== z
    ? ((ct = (e) => {
        if ((e.preventDefault(), h.type === `proposal` && L && R != null)) {
          if ((h.seed.elicitation != null && Le(S, h.seed.elicitation, `accept`), z != null)) {
            K.mutate(z);
            return;
          }
          Ge.mutate(Xe({ draft: F, name: Te, prompt: Ee, rrule: R }));
        }
      }),
      (a[78] = L),
      (a[79] = Ge),
      (a[80] = F),
      (a[81] = R),
      (a[82] = S),
      (a[83] = h.seed),
      (a[84] = h.type),
      (a[85] = Te),
      (a[86] = Ee),
      (a[87] = K),
      (a[88] = z),
      (a[89] = ct))
    : (ct = a[89]);
  let lt = ct,
    ft;
  a[90] !== M || a[91] !== K || a[92] !== z
    ? ((ft = () => {
        z == null || K.isPending || (M(null), K.mutate(z));
      }),
      (a[90] = M),
      (a[91] = K),
      (a[92] = z),
      (a[93] = ft))
    : (ft = a[93]);
  let pt = ft,
    Y = Ge.isPending || K.isPending,
    mt;
  a[94] !== L || a[95] !== F
    ? ((mt = L ? null : (0, Z.jsx)(dt, { draft: F })), (a[94] = L), (a[95] = F), (a[96] = mt))
    : (mt = a[96]);
  let X = mt,
    ht;
  if (
    a[97] !== o ||
    a[98] !== L ||
    a[99] !== J ||
    a[100] !== P ||
    a[101] !== lt ||
    a[102] !== Re ||
    a[103] !== be ||
    a[104] !== Y ||
    a[105] !== g ||
    a[106] !== _ ||
    a[107] !== b ||
    a[108] !== we ||
    a[109] !== pt ||
    a[110] !== h.automationId ||
    a[111] !== h.targetAutomationId ||
    a[112] !== h.type ||
    a[113] !== I ||
    a[114] !== N ||
    a[115] !== X ||
    a[116] !== K
  ) {
    let e;
    a[118] !== _ || a[119] !== I
      ? ((e = (e) => {
          (I((t) => ({ ...t, name: e })), _(e));
        }),
        (a[118] = _),
        (a[119] = I),
        (a[120] = e))
      : (e = a[120]);
    let n;
    a[121] !== P.name || a[122] !== e
      ? ((n = (0, Z.jsx)(at, { id: `${St}-title`, value: P.name, onChange: e })),
        (a[121] = P.name),
        (a[122] = e),
        (a[123] = n))
      : (n = a[123]);
    let c;
    a[124] !== o ||
    a[125] !== J ||
    a[126] !== P.status ||
    a[127] !== Y ||
    a[128] !== h.type ||
    a[129] !== I ||
    a[130] !== N ||
    a[131] !== K
      ? ((c =
          h.type === `persisted` && o != null
            ? (0, Z.jsx)(ut, {
                deleteAction: {
                  disabled: J.isPending || Y,
                  onSelect: () => {
                    N(!0);
                  },
                },
                isPaused: P.status === `PAUSED`,
                pauseAction: {
                  disabled: J.isPending || Y,
                  onSelect: () => {
                    (I(_t), K.mutate(pe(o, `PAUSED`)));
                  },
                },
                pauseResumeInMenu: !0,
                resumeAction: {
                  disabled: J.isPending || Y,
                  onSelect: () => {
                    (I(gt), K.mutate(pe(o, `ACTIVE`)));
                  },
                },
              })
            : null),
        (a[124] = o),
        (a[125] = J),
        (a[126] = P.status),
        (a[127] = Y),
        (a[128] = h.type),
        (a[129] = I),
        (a[130] = N),
        (a[131] = K),
        (a[132] = c))
      : (c = a[132]);
    let l;
    a[133] !== n || a[134] !== c
      ? ((l = (0, Z.jsxs)(`div`, { className: `flex items-center gap-2`, children: [n, c] })),
        (a[133] = n),
        (a[134] = c),
        (a[135] = l))
      : (l = a[135]);
    let u;
    a[136] !== P || a[137] !== lt || a[138] !== we || a[139] !== I
      ? ((u = (0, Z.jsx)(st, {
          draft: P,
          formId: `${St}-prompt`,
          setDraft: I,
          resolvedProjects: we,
          onSubmit: lt,
        })),
        (a[136] = P),
        (a[137] = lt),
        (a[138] = we),
        (a[139] = I),
        (a[140] = u))
      : (u = a[140]);
    let d;
    a[141] !== l || a[142] !== u
      ? ((d = (0, Z.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex min-h-0 flex-col gap-6 p-panel`,
            children: [l, u],
          }),
        })),
        (a[141] = l),
        (a[142] = u),
        (a[143] = d))
      : (d = a[143]);
    let f;
    a[144] !== L ||
    a[145] !== Re ||
    a[146] !== Y ||
    a[147] !== g ||
    a[148] !== pt ||
    a[149] !== h.automationId ||
    a[150] !== h.targetAutomationId ||
    a[151] !== h.type ||
    a[152] !== X ||
    a[153] !== K.isPending
      ? ((f = (0, Z.jsx)(`div`, {
          className: `flex shrink-0 items-center justify-end gap-2 border-t border-default p-panel`,
          children:
            h.type === `proposal`
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(t, {
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: g,
                      children: (0, Z.jsx)(s, {
                        id: `automation.sidePanel.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button label for the scheduled task editor`,
                      }),
                    }),
                    (0, Z.jsx)(se, {
                      delayOpen: !0,
                      disabled: X == null,
                      tooltipContent: X,
                      children: (0, Z.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, Z.jsx)(t, {
                          className: L ? void 0 : `pointer-events-none`,
                          color: `outline`,
                          disabled: !L,
                          form: `${St}-prompt`,
                          loading: Y,
                          size: `toolbar`,
                          type: `submit`,
                          children:
                            h.targetAutomationId == null
                              ? (0, Z.jsx)(s, {
                                  id: `automation.sidePanel.createSuggestion`,
                                  defaultMessage: `Create scheduled task`,
                                  description: `Button label for accepting a suggested scheduled task`,
                                })
                              : (0, Z.jsx)(s, {
                                  id: `automation.sidePanel.applySuggestion`,
                                  defaultMessage: `Apply changes`,
                                  description: `Button label for accepting a suggested scheduled task update`,
                                }),
                        }),
                      }),
                    }),
                  ],
                })
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    Re
                      ? (0, Z.jsx)(t, {
                          color: `outline`,
                          loading: K.isPending,
                          size: `toolbar`,
                          onClick: pt,
                          children: (0, Z.jsx)(s, {
                            id: `automation.sidePanel.retrySave`,
                            defaultMessage: `Retry save`,
                            description: `Button label for retrying a failed scheduled task save`,
                          }),
                        })
                      : null,
                    (0, Z.jsxs)(t, {
                      color: `outline`,
                      size: `toolbar`,
                      onClick: () => {
                        y.dispatchHostMessage({
                          type: `navigate-to-route`,
                          path: `/automations?automationId=${h.automationId}`,
                        });
                      },
                      children: [
                        (0, Z.jsx)(s, {
                          id: `automation.sidePanel.openScheduledTask`,
                          defaultMessage: `Open settings`,
                          description: `Button label for opening scheduled task settings from the task side panel`,
                        }),
                        (0, Z.jsx)(r, {
                          "aria-hidden": !1,
                          legacyIcon: Ce,
                          asset16: i,
                          legacyClassName: `icon-2xs`,
                        }),
                      ],
                    }),
                  ],
                }),
        })),
        (a[144] = L),
        (a[145] = Re),
        (a[146] = Y),
        (a[147] = g),
        (a[148] = pt),
        (a[149] = h.automationId),
        (a[150] = h.targetAutomationId),
        (a[151] = h.type),
        (a[152] = X),
        (a[153] = K.isPending),
        (a[154] = f))
      : (f = a[154]);
    let p;
    a[155] !== o || a[156] !== J || a[157] !== be || a[158] !== N
      ? ((p =
          o == null
            ? null
            : (0, Z.jsx)(rt, {
                isPending: J.isPending,
                name: o.name,
                open: be,
                onCancel: () => {
                  N(!1);
                },
                onConfirm: () => {
                  J.mutate({ id: o.id });
                },
              })),
        (a[155] = o),
        (a[156] = J),
        (a[157] = be),
        (a[158] = N),
        (a[159] = p))
      : (p = a[159]);
    let m;
    (a[160] !== d || a[161] !== f || a[162] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [d, f, p],
        })),
        (a[160] = d),
        (a[161] = f),
        (a[162] = p),
        (a[163] = m))
      : (m = a[163]),
      (ht = b({ headerRows: [], content: m })),
      (a[97] = o),
      (a[98] = L),
      (a[99] = J),
      (a[100] = P),
      (a[101] = lt),
      (a[102] = Re),
      (a[103] = be),
      (a[104] = Y),
      (a[105] = g),
      (a[106] = _),
      (a[107] = b),
      (a[108] = we),
      (a[109] = pt),
      (a[110] = h.automationId),
      (a[111] = h.targetAutomationId),
      (a[112] = h.type),
      (a[113] = I),
      (a[114] = N),
      (a[115] = X),
      (a[116] = K),
      (a[117] = ht));
  } else ht = a[117];
  return ht;
}
function gt(e) {
  return { ...e, status: `ACTIVE` };
}
function _t(e) {
  return { ...e, status: `PAUSED` };
}
function vt() {
  return null;
}
function yt(e, t, n) {
  e.get(x).danger(
    t.formatMessage({
      id: `inbox.automations.saveError`,
      defaultMessage: `Could not save scheduled task`,
      description: `Toast title when saving a scheduled task fails`,
    }),
    { errorAnalytics: { toastId: `inbox.automations.saveError` }, description: n },
  );
}
var bt, xt, Z, St, Ct;
function wt() {
  return (wt = e(() => {
    ((bt = O()),
      we(),
      o(),
      le(),
      l(),
      ae(),
      (xt = k()),
      E(),
      N(),
      U(),
      ee(),
      ot(),
      F(),
      ce(),
      D(),
      te(),
      _(),
      Te(),
      M(),
      b(),
      Ee(),
      ge(),
      W(),
      A(),
      G(),
      it(),
      Ue(),
      V(),
      Ae(),
      oe(),
      ct(),
      J(),
      I(),
      lt(),
      (Z = ue()),
      (St = `automation-side-panel-form`),
      (Ct = g(Fe, ({ initialDraft: e }, { signal: t }) => ({ draft$: t(e), hasUserEdited$: t(!1) }), {
        excludeFieldsFromKey: [`initialDraft`],
      })));
  }))();
}
function Tt(e) {
  let t = (0, Q.c)(8);
  if (e.request.type === `site`) {
    let n;
    return (
      t[0] !== e.renderSlots ||
      t[1] !== e.request.proposal ||
      t[2] !== e.setTabState ||
      t[3] !== e.tabId ||
      t[4] !== e.tabState
        ? ((n = (0, $.jsx)(X, {
            proposal: e.request.proposal,
            renderSlots: e.renderSlots,
            tabId: e.tabId,
            tabState: e.tabState,
            setTabState: e.setTabState,
          })),
          (t[0] = e.renderSlots),
          (t[1] = e.request.proposal),
          (t[2] = e.setTabState),
          (t[3] = e.tabId),
          (t[4] = e.tabState),
          (t[5] = n))
        : (n = t[5]),
      n
    );
  }
  let n;
  return (
    t[6] === e ? (n = t[7]) : ((n = (0, $.jsx)(Et, { ...e, request: e.request })), (t[6] = e), (t[7] = n)),
    n
  );
}
function Et(e) {
  let t = (0, Q.c)(32),
    { renderSlots: n, request: r, setTabState: i, tabId: a, tabState: o } = e,
    s = c(Fe),
    l = p(P),
    { data: u, isLoading: d } = Re(),
    f;
  t[0] !== r || t[1] !== o.savedAutomationId
    ? ((f = K({ request: r, savedAutomationId: o.savedAutomationId })),
      (t[0] = r),
      (t[1] = o.savedAutomationId),
      (t[2] = f))
    : (f = t[2]);
  let m = f,
    h = m.type === `persisted` ? m.automationId : m.targetAutomationId,
    g;
  t[3] !== l || t[4] !== h
    ? ((g = h == null ? null : (l.data?.items.find((e) => e.id === h) ?? null)),
      (t[3] = l),
      (t[4] = h),
      (t[5] = g))
    : (g = t[5]);
  let _ = g,
    v;
  t[6] !== s || t[7] !== a
    ? ((v = () => {
        ze.closeTab(s, a);
      }),
      (t[6] = s),
      (t[7] = a),
      (t[8] = v))
    : (v = t[8]);
  let y = v;
  if ((h != null && _ == null && (l.isLoading || l.isFetching)) || (u == null && d)) {
    let e;
    if (t[9] !== n) {
      let r;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsx)(Ot, {})), (t[11] = r))
        : (r = t[11]),
        (e = n({ headerRows: [], content: r })),
        (t[9] = n),
        (t[10] = e));
    } else e = t[10];
    return e;
  }
  if (h != null && _ == null) {
    let e;
    return (
      t[12] !== n || t[13] !== a || t[14] !== h
        ? ((e = (0, $.jsx)(Dt, { automationId: h, renderSlots: n, tabId: a })),
          (t[12] = n),
          (t[13] = a),
          (t[14] = h),
          (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let b;
  t[16] !== s || t[17] !== a
    ? ((b = (e) => {
        let t = e.trim();
        t.length !== 0 && ze.updateTab(s, a, { title: t, tooltip: t });
      }),
      (t[16] = s),
      (t[17] = a),
      (t[18] = b))
    : (b = t[18]);
  let x = b,
    S = m.type === `persisted` ? `persisted:${m.automationId}` : `proposal:${m.seed.directiveKey}`,
    C = u?.models,
    w;
  t[19] !== i || t[20] !== x
    ? ((w = (e) => {
        (i((t) => ({ ...t, savedAutomationId: e.id })), x(e.name));
      }),
      (t[19] = i),
      (t[20] = x),
      (t[21] = w))
    : (w = t[21]);
  let T;
  return (
    t[22] !== _ ||
    t[23] !== y ||
    t[24] !== n ||
    t[25] !== m ||
    t[26] !== S ||
    t[27] !== C ||
    t[28] !== w ||
    t[29] !== o.draftInstanceId ||
    t[30] !== x
      ? ((T = (0, $.jsx)(
          ht,
          {
            automation: _,
            draftInstanceId: o.draftInstanceId,
            models: C,
            renderSlots: n,
            session: m,
            onClose: y,
            onNameChange: x,
            onSaved: w,
          },
          S,
        )),
        (t[22] = _),
        (t[23] = y),
        (t[24] = n),
        (t[25] = m),
        (t[26] = S),
        (t[27] = C),
        (t[28] = w),
        (t[29] = o.draftInstanceId),
        (t[30] = x),
        (t[31] = T))
      : (T = t[31]),
    T
  );
}
function Dt(e) {
  let t = (0, Q.c)(31),
    { automationId: n, renderSlots: r, tabId: i } = e,
    a = c(Fe),
    o = (0, jt.useRef)(null),
    l,
    u;
  (t[0] !== a || t[1] !== i
    ? ((l = () => {
        let e = q(a, i);
        if (e == null) return;
        let t = H(e),
          n = a.get(t.tabById$, i);
        if (n == null) return;
        let r = () => o.current?.requestClose() ?? !0;
        t.updateTab(a, i, { onBeforeClose: r });
        let s = Y(
          () => {
            t.isCurrentTabInstance(a, n) &&
              a.get(t.activeTab$)?.tabId === i &&
              a.get(e === `right` ? Qe : R) &&
              t.closeTab(a, i);
          },
          document.querySelector(`[data-app-shell-main-content-layout]`),
          `click`,
        );
        return () => {
          (s?.(),
            a.get(t.tabById$, i)?.onBeforeClose === r &&
              t.updateTab(a, i, { onBeforeClose: n.onBeforeClose }));
        };
      }),
      (u = [a, i]),
      (t[0] = a),
      (t[1] = i),
      (t[2] = l),
      (t[3] = u))
    : ((l = t[2]), (u = t[3])),
    (0, jt.useEffect)(l, u));
  let { data: d, error: f, isFetching: p, isLoading: h, refetch: g } = de(L, n),
    _ = d?.automation.title,
    v,
    y;
  if (
    (t[4] !== a || t[5] !== i || t[6] !== _
      ? ((v = () => {
          let e = q(a, i);
          _ != null && e != null && H(e).updateTab(a, i, { title: _, tooltip: _ });
        }),
        (y = [a, i, _]),
        (t[4] = a),
        (t[5] = i),
        (t[6] = _),
        (t[7] = v),
        (t[8] = y))
      : ((v = t[7]), (y = t[8])),
    (0, jt.useEffect)(v, y),
    d == null && (h || p))
  ) {
    let e;
    if (t[9] !== r) {
      let n;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(Ot, {})), (t[11] = n))
        : (n = t[11]),
        (e = r({ headerRows: [], content: n })),
        (t[9] = r),
        (t[10] = e));
    } else e = t[10];
    return e;
  }
  if (d == null && f != null && !(f instanceof S && f.status === 404)) {
    let e;
    if (t[12] !== g || t[13] !== r) {
      let n, i;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(s, {
            id: `inbox.automations.cloud.loadError`,
            defaultMessage: `Cloud scheduled tasks could not be loaded`,
            description: `Error shown when cloud scheduled tasks fail to load`,
          })),
          (i = (0, $.jsx)(s, {
            id: `inbox.automations.cloud.loadError.retry`,
            defaultMessage: `Try again`,
            description: `Button to retry loading cloud scheduled tasks`,
          })),
          (t[15] = n),
          (t[16] = i))
        : ((n = t[15]), (i = t[16]));
      let a;
      (t[17] === g
        ? (a = t[18])
        : ((a = (0, $.jsx)(`div`, {
            className: `flex h-full min-h-0 flex-col bg-surface p-panel`,
            children: (0, $.jsx)(m, {
              content: n,
              primaryCtaText: i,
              type: `error`,
              onPrimaryCtaClick: () => {
                g();
              },
            }),
          })),
          (t[17] = g),
          (t[18] = a)),
        (e = r({ headerRows: [], content: a })),
        (t[12] = g),
        (t[13] = r),
        (t[14] = e));
    } else e = t[14];
    return e;
  }
  if (d == null) {
    let e;
    if (t[19] !== r) {
      let n;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(kt, {})), (t[21] = n))
        : (n = t[21]),
        (e = r({ headerRows: [], content: n })),
        (t[19] = r),
        (t[20] = e));
    } else e = t[20];
    return e;
  }
  let b, x;
  t[22] !== a || t[23] !== i
    ? ((b = () => {
        let e = q(a, i);
        e != null && H(e).closeTab(a, i);
      }),
      (x = (e) => {
        let t = q(a, i);
        t != null && H(t).updateTab(a, i, { title: e.title, tooltip: e.title });
      }),
      (t[22] = a),
      (t[23] = i),
      (t[24] = b),
      (t[25] = x))
    : ((b = t[24]), (x = t[25]));
  let C;
  return (
    t[26] !== d || t[27] !== r || t[28] !== b || t[29] !== x
      ? ((C = (0, $.jsx)(pt, {
          ref: o,
          item: d,
          showCloseButton: !1,
          renderSlots: r,
          onClose: b,
          onSaved: x,
        })),
        (t[26] = d),
        (t[27] = r),
        (t[28] = b),
        (t[29] = x),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function Ot() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center bg-surface p-panel text-codex-description`,
          children: (0, $.jsx)(ie, { className: `icon-sm` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function kt() {
  let e = (0, Q.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`span`, {
        className: `flex size-10 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary`,
        children: (0, $.jsx)(me, { className: `icon-sm` }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`div`, {
        className: `text-lg text-default`,
        children: (0, $.jsx)(s, {
          id: `automation.sidePanel.missingTitleUnavailable`,
          defaultMessage: `Scheduled task unavailable`,
          description: `Title shown when a scheduled task side panel points to a missing scheduled task`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  return (
    e[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface p-panel`,
          children: (0, $.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, $.jsxs)(`div`, {
              className: `flex max-w-sm flex-col items-center gap-3 text-center`,
              children: [
                t,
                n,
                (0, $.jsx)(`div`, {
                  className: `text-sm text-codex-description`,
                  children: (0, $.jsx)(s, {
                    id: `automation.sidePanel.missingDescriptionDevice`,
                    defaultMessage: `This scheduled task may have been deleted or is no longer available on this device`,
                    description: `Description shown when a scheduled task side panel points to a missing scheduled task`,
                  }),
                }),
              ],
            }),
          }),
        })),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function At() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(h, { "aria-hidden": !1 })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, jt, $;
function Mt() {
  return (Mt = e(() => {
    ((Q = O()),
      l(),
      (jt = k()),
      E(),
      z(),
      be(),
      a(),
      d(),
      C(),
      et(),
      Ge(),
      A(),
      B(),
      v(),
      j(),
      wt(),
      ft(),
      qe(),
      mt(),
      ($ = ue()));
  }))();
}
Mt();
export { Tt as AutomationSidePanelTabContent, At as AutomationSidePanelTabIcon };
//# sourceMappingURL=automation-side-panel-tab-1b19ca64ddd4.js.map
