import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  A6 as r,
  AMt as i,
  Amn as a,
  B6t as o,
  BO as s,
  BRt as c,
  Cpn as l,
  Cq as ee,
  Cwt as u,
  D3t as d,
  Dz as f,
  F3t as p,
  FR as te,
  IR as m,
  Jit as h,
  KCt as ne,
  KR as g,
  KYt as _,
  Kit as re,
  M3t as ie,
  MMt as v,
  N3t as y,
  O3t as b,
  Opn as ae,
  QXt as oe,
  RR as se,
  RWt as ce,
  SFt as le,
  SJt as ue,
  Spn as de,
  Sq as fe,
  Swt as pe,
  TFt as x,
  Twt as me,
  UR as he,
  VR as ge,
  WR as _e,
  XR as ve,
  Xdt as ye,
  YR as be,
  YRt as xe,
  _3 as Se,
  _Jt as S,
  _P as C,
  ayt as Ce,
  az as we,
  bR as w,
  bmn as Te,
  dr as Ee,
  dyt as De,
  e4t as Oe,
  fs as ke,
  gRt as Ae,
  hR as je,
  hmn as T,
  j6 as Me,
  jMt as Ne,
  jXt as Pe,
  kMt as Fe,
  kXt as Ie,
  kmn as E,
  kz as Le,
  mJt as Re,
  mt as D,
  nZt as ze,
  oP as Be,
  oz as Ve,
  pr as O,
  ps as He,
  pt as Ue,
  qCt as We,
  qR as Ge,
  s3t as k,
  sP as Ke,
  tz as A,
  u3 as j,
  u6t as M,
  ur as qe,
  vRt as Je,
  vlt as Ye,
  xJt as Xe,
  xRt as N,
  xmn as Ze,
  yJt as Qe,
  yP as P,
  ywt as $e,
  zO as F,
  zR as et,
} from "./app-initial-f094ef01c64d.js";
import {
  a as tt,
  c as nt,
  d as rt,
  f as it,
  l as at,
  n as I,
  o as L,
  s as ot,
  t as st,
  u as R,
} from "./cloud-automation-detail-panel-c76d4ae4bfb4.js";
import { n as z, t as ct } from "./automation-delete-confirmation-dialog-c1501bf84bbd.js";
function B(e) {
  let t = (0, pt.c)(140),
    {
      automation: r,
      draftInstanceId: i,
      models: a,
      session: o,
      onClose: s,
      onNameChange: c,
      onSaved: f,
    } = e,
    h = n(Ae),
    _ = ae(),
    v = d(),
    y = p(xe),
    b = p(ze),
    oe;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = { hostId: Oe, cwd: null }), (t[0] = oe))
    : (oe = t[0]);
  let ce = Ke(oe),
    le;
  t[1] !== r || t[2] !== a || t[3] !== h.value || t[4] !== o.seed || t[5] !== o.type
    ? ((le =
        o.type === `proposal`
          ? _e({ seed: o.seed, targetAutomation: r, models: a })
          : r == null
            ? { ...te, targetThreadId: Je(h.value) }
            : he(r, a)),
      (t[1] = r),
      (t[2] = a),
      (t[3] = h.value),
      (t[4] = o.seed),
      (t[5] = o.type),
      (t[6] = le))
    : (le = t[6]);
  let ue = le,
    de = ue.pluginTemplateId != null,
    fe;
  t[7] === de ? (fe = t[8]) : ((fe = { enabled: de }), (t[7] = de), (t[8] = fe));
  let { availablePlugins: x, installedPlugins: me } = De(Oe, void 0, fe),
    ye;
  t[9] !== x || t[10] !== me
    ? ((ye = (0, mt.default)([...x, ...me], dt).map(ne)), (t[9] = x), (t[10] = me), (t[11] = ye))
    : (ye = t[11]);
  let S = ye,
    C;
  t[12] === o ? (C = t[13]) : ((C = Ee(o)), (t[12] = o), (t[13] = C));
  let Ce;
  t[14] !== i || t[15] !== ue || t[16] !== C
    ? ((Ce = { draftInstanceId: i, initialDraft: ue, sessionKey: C }),
      (t[14] = i),
      (t[15] = ue),
      (t[16] = C),
      (t[17] = Ce))
    : (Ce = t[17]);
  let w = ie(_t, Ce),
    Te = p(w.draft$),
    je = p(w.hasUserEdited$),
    [T, Me] = (0, ht.useState)(null),
    [Ne, Ie] = (0, ht.useState)(!1),
    E = m({ draft: Te, modelSettings: ce }),
    D = Ve({ draft: E, serverConversationId: y }),
    Be;
  t[18] !== ce || t[19] !== w.draft$ || t[20] !== w.hasUserEdited$ || t[21] !== h
    ? ((Be = (e) => {
        let t = m({ draft: h.get(w.draft$), modelSettings: ce }),
          n = typeof e == `function` ? e(t) : e;
        n !== t && (h.set(w.hasUserEdited$, !0), h.set(w.draft$, n));
      }),
      (t[18] = ce),
      (t[19] = w.draft$),
      (t[20] = w.hasUserEdited$),
      (t[21] = h),
      (t[22] = Be))
    : (Be = t[22]);
  let O = Be,
    He = p(Se),
    { trimmedName: Ue, trimmedPrompt: We, canSave: k } = ve(D),
    A = we(D),
    j =
      E.id != null && k && A != null && E.status !== `DELETED`
        ? Ge({ draft: D, name: Ue, prompt: We, status: E.status, rrule: A })
        : null,
    M = ee(j, 600),
    qe;
  t[23] !== T || t[24] !== j
    ? ((qe = j != null && se(T, j)), (t[23] = T), (t[24] = j), (t[25] = qe))
    : (qe = t[25]);
  let Ye = qe,
    Xe;
  t[26] === v
    ? (Xe = t[27])
    : ((Xe = (e) => {
        (v.setQueryData(Re(`list-automations`), (t) =>
          t == null
            ? { items: [e] }
            : {
                items: t.items.some((t) => t.id === e.id)
                  ? t.items.map((t) => (t.id === e.id ? e : t))
                  : [...t.items, e],
              },
        ),
          v.invalidateQueries({ queryKey: Re(`list-automations`) }),
          Me(null));
      }),
      (t[26] = v),
      (t[27] = Xe));
  let N = Xe,
    P;
  t[28] !== N ||
  t[29] !== S ||
  t[30] !== f ||
  t[31] !== b ||
  t[32] !== h ||
  t[33] !== o.seed ||
  t[34] !== o.type
    ? ((P = (e) => {
        let { item: t } = e;
        (Le(
          b,
          {
            action: $e.CODEX_AUTOMATION_ACTION_CREATED,
            source: u.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
            success: !0,
          },
          t,
          S,
        ),
          N(t),
          o.type === `proposal` &&
            h.set(et, { directiveKey: o.seed.directiveKey, automationId: t.id }),
          f(t));
      }),
      (t[28] = N),
      (t[29] = S),
      (t[30] = f),
      (t[31] = b),
      (t[32] = h),
      (t[33] = o.seed),
      (t[34] = o.type),
      (t[35] = P))
    : (P = t[35]);
  let F;
  t[36] !== S || t[37] !== _ || t[38] !== b || t[39] !== h
    ? ((F = (e, t) => {
        (Le(
          b,
          {
            action: $e.CODEX_AUTOMATION_ACTION_CREATED,
            source: u.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
            success: !1,
            failureReason: pe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
          },
          t,
          S,
        ),
          ft(h, _, e.message));
      }),
      (t[36] = S),
      (t[37] = _),
      (t[38] = b),
      (t[39] = h),
      (t[40] = F))
    : (F = t[40]);
  let nt;
  t[41] !== P || t[42] !== F
    ? ((nt = { onSuccess: P, onError: F }), (t[41] = P), (t[42] = F), (t[43] = nt))
    : (nt = t[43]);
  let it = Qe(`automation-create`, nt),
    I;
  t[44] !== N ||
  t[45] !== S ||
  t[46] !== f ||
  t[47] !== b ||
  t[48] !== h ||
  t[49] !== o.seed ||
  t[50] !== o.type
    ? ((I = (e) => {
        let { item: t } = e;
        (Le(
          b,
          {
            action: $e.CODEX_AUTOMATION_ACTION_UPDATED,
            source: u.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
            success: !0,
          },
          t,
          S,
        ),
          N(t),
          o.type === `proposal` &&
            (h.set(et, { directiveKey: o.seed.directiveKey, automationId: t.id }), f(t)));
      }),
      (t[44] = N),
      (t[45] = S),
      (t[46] = f),
      (t[47] = b),
      (t[48] = h),
      (t[49] = o.seed),
      (t[50] = o.type),
      (t[51] = I))
    : (I = t[51]);
  let L;
  t[52] !== r || t[53] !== S || t[54] !== _ || t[55] !== b || t[56] !== h
    ? ((L = (e, t) => {
        (Me(t),
          Le(
            b,
            {
              action: $e.CODEX_AUTOMATION_ACTION_UPDATED,
              source: u.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !1,
              failureReason:
                e.message ===
                `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
                  ? pe.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                  : pe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
            },
            t,
            S,
            r,
          ),
          ft(h, _, e.message));
      }),
      (t[52] = r),
      (t[53] = S),
      (t[54] = _),
      (t[55] = b),
      (t[56] = h),
      (t[57] = L))
    : (L = t[57]);
  let st;
  t[58] !== I || t[59] !== L
    ? ((st = { onSuccess: I, onError: L }), (t[58] = I), (t[59] = L), (t[60] = st))
    : (st = t[60]);
  let R = Qe(`automation-update`, st),
    z;
  t[61] !== _ || t[62] !== s || t[63] !== v || t[64] !== h
    ? ((z = (e, t) => {
        let { id: n } = t;
        if ((Ie(!1), !e.success)) {
          h.get(Pe).danger(
            _.formatMessage({
              id: `inbox.automations.deleteError`,
              defaultMessage: `Could not delete scheduled task`,
              description: `Toast title when deleting a scheduled task fails`,
            }),
          );
          return;
        }
        (s(),
          v.setQueryData(Re(`list-automations`), (e) =>
            e == null ? e : { items: e.items.filter((e) => e.id !== n) },
          ),
          v.invalidateQueries({ queryKey: Re(`list-automations`) }));
      }),
      (t[61] = _),
      (t[62] = s),
      (t[63] = v),
      (t[64] = h),
      (t[65] = z))
    : (z = t[65]);
  let B;
  t[66] !== _ || t[67] !== h
    ? ((B = (e) => {
        (Ie(!1),
          h.get(Pe).danger(
            _.formatMessage({
              id: `inbox.automations.deleteError`,
              defaultMessage: `Could not delete scheduled task`,
              description: `Toast title when deleting a scheduled task fails`,
            }),
            { description: e.message },
          ));
      }),
      (t[66] = _),
      (t[67] = h),
      (t[68] = B))
    : (B = t[68]);
  let vt;
  t[69] !== z || t[70] !== B
    ? ((vt = { onSuccess: z, onError: B }), (t[69] = z), (t[70] = B), (t[71] = vt))
    : (vt = t[71]);
  let H = Qe(`automation-delete`, vt),
    yt,
    U;
  (t[72] !== r || t[73] !== M || t[74] !== T || t[75] !== je || t[76] !== o.type || t[77] !== R
    ? ((yt = () => {
        o.type !== `persisted` ||
          !je ||
          r == null ||
          M == null ||
          R.isPending ||
          be(r, M) ||
          se(T, M) ||
          R.mutate(M);
      }),
      (U = [r, M, T, je, o.type, R, R.isPending]),
      (t[72] = r),
      (t[73] = M),
      (t[74] = T),
      (t[75] = je),
      (t[76] = o.type),
      (t[77] = R),
      (t[78] = yt),
      (t[79] = U))
    : ((yt = t[78]), (U = t[79])),
    (0, ht.useEffect)(yt, U));
  let bt;
  t[80] !== k ||
  t[81] !== it ||
  t[82] !== D ||
  t[83] !== A ||
  t[84] !== o.type ||
  t[85] !== Ue ||
  t[86] !== We ||
  t[87] !== R ||
  t[88] !== j
    ? ((bt = (e) => {
        if ((e.preventDefault(), !(o.type !== `proposal` || !k || A == null))) {
          if (j != null) {
            R.mutate(j);
            return;
          }
          it.mutate(ge({ draft: D, name: Ue, prompt: We, rrule: A }));
        }
      }),
      (t[80] = k),
      (t[81] = it),
      (t[82] = D),
      (t[83] = A),
      (t[84] = o.type),
      (t[85] = Ue),
      (t[86] = We),
      (t[87] = R),
      (t[88] = j),
      (t[89] = bt))
    : (bt = t[89]);
  let xt = bt,
    W;
  t[90] !== R || t[91] !== j
    ? ((W = () => {
        j == null || R.isPending || (Me(null), R.mutate(j));
      }),
      (t[90] = R),
      (t[91] = j),
      (t[92] = W))
    : (W = t[92]);
  let G = W,
    K = it.isPending || R.isPending,
    St;
  t[93] !== k || t[94] !== D
    ? ((St = k ? null : (0, V.jsx)(tt, { draft: D })), (t[93] = k), (t[94] = D), (t[95] = St))
    : (St = t[95]);
  let Ct = St,
    q;
  t[96] !== c || t[97] !== O
    ? ((q = (e) => {
        (O((t) => ({ ...t, name: e })), c(e));
      }),
      (t[96] = c),
      (t[97] = O),
      (t[98] = q))
    : (q = t[98]);
  let J;
  t[99] !== E.name || t[100] !== q
    ? ((J = (0, V.jsx)(rt, { id: `${gt}-title`, value: E.name, onChange: q })),
      (t[99] = E.name),
      (t[100] = q),
      (t[101] = J))
    : (J = t[101]);
  let Y;
  t[102] !== r ||
  t[103] !== H ||
  t[104] !== E.status ||
  t[105] !== K ||
  t[106] !== o.type ||
  t[107] !== O ||
  t[108] !== R
    ? ((Y =
        o.type === `persisted` && r != null
          ? (0, V.jsx)(ot, {
              deleteAction: {
                disabled: H.isPending || K,
                onSelect: () => {
                  Ie(!0);
                },
              },
              isPaused: E.status === `PAUSED`,
              pauseAction: {
                disabled: H.isPending || K,
                onSelect: () => {
                  (O(ut), R.mutate(g(r, `PAUSED`)));
                },
              },
              pauseResumeInMenu: !0,
              resumeAction: {
                disabled: H.isPending || K,
                onSelect: () => {
                  (O(lt), R.mutate(g(r, `ACTIVE`)));
                },
              },
            })
          : null),
      (t[102] = r),
      (t[103] = H),
      (t[104] = E.status),
      (t[105] = K),
      (t[106] = o.type),
      (t[107] = O),
      (t[108] = R),
      (t[109] = Y))
    : (Y = t[109]);
  let X;
  t[110] !== J || t[111] !== Y
    ? ((X = (0, V.jsxs)(`div`, { className: `flex items-center gap-2`, children: [J, Y] })),
      (t[110] = J),
      (t[111] = Y),
      (t[112] = X))
    : (X = t[112]);
  let Z;
  t[113] !== E || t[114] !== xt || t[115] !== He || t[116] !== O
    ? ((Z = (0, V.jsx)(at, {
        draft: E,
        formId: `${gt}-prompt`,
        setDraft: O,
        resolvedProjects: He,
        onSubmit: xt,
      })),
      (t[113] = E),
      (t[114] = xt),
      (t[115] = He),
      (t[116] = O),
      (t[117] = Z))
    : (Z = t[117]);
  let Q;
  t[118] !== X || t[119] !== Z
    ? ((Q = (0, V.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto`,
        children: (0, V.jsxs)(`div`, {
          className: `flex min-h-0 flex-col gap-6 p-panel`,
          children: [X, Z],
        }),
      })),
      (t[118] = X),
      (t[119] = Z),
      (t[120] = Q))
    : (Q = t[120]);
  let $;
  t[121] !== k ||
  t[122] !== Ye ||
  t[123] !== K ||
  t[124] !== s ||
  t[125] !== G ||
  t[126] !== o.automationId ||
  t[127] !== o.targetAutomationId ||
  t[128] !== o.type ||
  t[129] !== Ct ||
  t[130] !== R.isPending
    ? (($ = (0, V.jsx)(`div`, {
        className: `flex shrink-0 items-center justify-end gap-2 border-t border-default p-panel`,
        children:
          o.type === `proposal`
            ? (0, V.jsxs)(V.Fragment, {
                children: [
                  (0, V.jsx)(Fe, {
                    color: `ghost`,
                    size: `toolbar`,
                    onClick: s,
                    children: (0, V.jsx)(l, {
                      id: `automation.sidePanel.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Cancel button label for the scheduled task editor`,
                    }),
                  }),
                  (0, V.jsx)(re, {
                    delayOpen: !0,
                    disabled: Ct == null,
                    tooltipContent: Ct,
                    children: (0, V.jsx)(`span`, {
                      className: `inline-flex`,
                      children: (0, V.jsx)(Fe, {
                        className: k ? void 0 : `pointer-events-none`,
                        color: `outline`,
                        disabled: !k,
                        form: `${gt}-prompt`,
                        loading: K,
                        size: `toolbar`,
                        type: `submit`,
                        children:
                          o.targetAutomationId == null
                            ? (0, V.jsx)(l, {
                                id: `automation.sidePanel.createSuggestion`,
                                defaultMessage: `Create scheduled task`,
                                description: `Button label for accepting a suggested scheduled task`,
                              })
                            : (0, V.jsx)(l, {
                                id: `automation.sidePanel.applySuggestion`,
                                defaultMessage: `Apply changes`,
                                description: `Button label for accepting a suggested scheduled task update`,
                              }),
                      }),
                    }),
                  }),
                ],
              })
            : (0, V.jsxs)(V.Fragment, {
                children: [
                  Ye
                    ? (0, V.jsx)(Fe, {
                        color: `outline`,
                        loading: R.isPending,
                        size: `toolbar`,
                        onClick: G,
                        children: (0, V.jsx)(l, {
                          id: `automation.sidePanel.retrySave`,
                          defaultMessage: `Retry save`,
                          description: `Button label for retrying a failed scheduled task save`,
                        }),
                      })
                    : null,
                  (0, V.jsxs)(Fe, {
                    color: `outline`,
                    size: `toolbar`,
                    onClick: () => {
                      Ze.dispatchHostMessage({
                        type: `navigate-to-route`,
                        path: `/automations?automationId=${o.automationId}`,
                      });
                    },
                    children: [
                      (0, V.jsx)(l, {
                        id: `automation.sidePanel.openScheduledTask`,
                        defaultMessage: `Open settings`,
                        description: `Button label for opening scheduled task settings from the task side panel`,
                      }),
                      (0, V.jsx)(ke, { className: `icon-2xs` }),
                    ],
                  }),
                ],
              }),
      })),
      (t[121] = k),
      (t[122] = Ye),
      (t[123] = K),
      (t[124] = s),
      (t[125] = G),
      (t[126] = o.automationId),
      (t[127] = o.targetAutomationId),
      (t[128] = o.type),
      (t[129] = Ct),
      (t[130] = R.isPending),
      (t[131] = $))
    : ($ = t[131]);
  let wt;
  t[132] !== r || t[133] !== H || t[134] !== Ne
    ? ((wt =
        r == null
          ? null
          : (0, V.jsx)(ct, {
              isPending: H.isPending,
              name: r.name,
              open: Ne,
              onCancel: () => {
                Ie(!1);
              },
              onConfirm: () => {
                H.mutate({ id: r.id });
              },
            })),
      (t[132] = r),
      (t[133] = H),
      (t[134] = Ne),
      (t[135] = wt))
    : (wt = t[135]);
  let Tt;
  return (
    t[136] !== Q || t[137] !== $ || t[138] !== wt
      ? ((Tt = (0, V.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [Q, $, wt],
        })),
        (t[136] = Q),
        (t[137] = $),
        (t[138] = wt),
        (t[139] = Tt))
      : (Tt = t[139]),
    Tt
  );
}
function lt(e) {
  return { ...e, status: `ACTIVE` };
}
function ut(e) {
  return { ...e, status: `PAUSED` };
}
function dt(e) {
  let { plugin: t } = e;
  return t.id;
}
function ft(e, t, n) {
  e.get(Pe).danger(
    t.formatMessage({
      id: `inbox.automations.saveError`,
      defaultMessage: `Could not save scheduled task`,
      description: `Toast title when saving a scheduled task fails`,
    }),
    { description: n },
  );
}
var pt,
  mt,
  ht,
  V,
  gt,
  _t,
  vt = e(() => {
    ((pt = E()),
      me(),
      k(),
      (mt = t(ce(), 1)),
      b(),
      o(),
      (ht = t(a(), 1)),
      de(),
      We(),
      R(),
      A(),
      i(),
      Ie(),
      h(),
      Be(),
      He(),
      Te(),
      Ce(),
      oe(),
      N(),
      c(),
      it(),
      _(),
      j(),
      fe(),
      S(),
      nt(),
      z(),
      f(),
      O(),
      L(),
      (V = T()),
      (gt = `automation-side-panel-form`),
      (_t = M(
        Ae,
        ({ initialDraft: e }, { signal: t }) => ({ draft$: t(e), hasUserEdited$: t(!1) }),
        {
          excludeFieldsFromKey: [`initialDraft`],
        },
      )));
  });
function H(e) {
  let t = (0, W.c)(28),
    { request: r, setTabState: i, tabId: a, tabState: o } = e,
    s = n(Ae),
    c = p(Me),
    { data: l, isLoading: ee } = P(),
    u;
  t[0] !== r || t[1] !== o.savedAutomationId
    ? ((u = qe({ request: r, savedAutomationId: o.savedAutomationId })),
      (t[0] = r),
      (t[1] = o.savedAutomationId),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f = d.type === `persisted` ? d.automationId : d.targetAutomationId,
    te;
  t[3] !== c || t[4] !== f
    ? ((te = f == null ? null : (c.data?.items.find((e) => e.id === f) ?? null)),
      (t[3] = c),
      (t[4] = f),
      (t[5] = te))
    : (te = t[5]);
  let m = te,
    h;
  t[6] !== s || t[7] !== a
    ? ((h = () => {
        x.closeTab(s, a);
      }),
      (t[6] = s),
      (t[7] = a),
      (t[8] = h))
    : (h = t[8]);
  let ne = h;
  if ((f != null && m == null && (c.isLoading || c.isFetching)) || (l == null && ee)) {
    let e;
    return (
      t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(U, {})), (t[9] = e))
        : (e = t[9]),
      e
    );
  }
  if (f != null && m == null) {
    let e;
    return (
      t[10] !== a || t[11] !== f
        ? ((e = (0, G.jsx)(yt, { automationId: f, tabId: a })),
          (t[10] = a),
          (t[11] = f),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  let g;
  t[13] !== s || t[14] !== a
    ? ((g = (e) => {
        let t = e.trim();
        t.length !== 0 && x.updateTab(s, a, { title: t, tooltip: t });
      }),
      (t[13] = s),
      (t[14] = a),
      (t[15] = g))
    : (g = t[15]);
  let _ = g,
    re = d.type === `persisted` ? `persisted:${d.automationId}` : `proposal:${d.seed.directiveKey}`,
    ie = l?.models,
    v;
  t[16] !== i || t[17] !== _
    ? ((v = (e) => {
        (i((t) => ({ ...t, savedAutomationId: e.id })), _(e.name));
      }),
      (t[16] = i),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== m ||
    t[20] !== ne ||
    t[21] !== d ||
    t[22] !== re ||
    t[23] !== ie ||
    t[24] !== v ||
    t[25] !== o.draftInstanceId ||
    t[26] !== _
      ? ((y = (0, G.jsx)(
          B,
          {
            automation: m,
            draftInstanceId: o.draftInstanceId,
            models: ie,
            session: d,
            onClose: ne,
            onNameChange: _,
            onSaved: v,
          },
          re,
        )),
        (t[19] = m),
        (t[20] = ne),
        (t[21] = d),
        (t[22] = re),
        (t[23] = ie),
        (t[24] = v),
        (t[25] = o.draftInstanceId),
        (t[26] = _),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function yt(e) {
  let t = (0, W.c)(14),
    { automationId: r, tabId: i } = e,
    a = n(Ae),
    { data: o, error: s, isFetching: c, isLoading: ee, refetch: u } = y(je, r);
  if (o == null && (ee || c)) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(U, {})), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (o == null && s != null && !(s instanceof ue && s.status === 404)) {
    let e, n;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, {
          id: `inbox.automations.cloud.loadError`,
          defaultMessage: `Cloud scheduled tasks could not be loaded`,
          description: `Error shown when cloud scheduled tasks fail to load`,
        })),
        (n = (0, G.jsx)(l, {
          id: `inbox.automations.cloud.loadError.retry`,
          defaultMessage: `Try again`,
          description: `Button to retry loading cloud scheduled tasks`,
        })),
        (t[1] = e),
        (t[2] = n))
      : ((e = t[1]), (n = t[2]));
    let r;
    return (
      t[3] === u
        ? (r = t[4])
        : ((r = (0, G.jsx)(`div`, {
            className: `flex h-full min-h-0 flex-col bg-surface p-panel`,
            children: (0, G.jsx)(F, {
              content: e,
              primaryCtaText: n,
              type: `error`,
              onPrimaryCtaClick: () => {
                u();
              },
            }),
          })),
          (t[3] = u),
          (t[4] = r)),
      r
    );
  }
  if (o == null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(bt, {})), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let d, f;
  t[6] !== a || t[7] !== i
    ? ((d = () => {
        x.closeTab(a, i);
      }),
      (f = (e) => {
        x.updateTab(a, i, { title: e.title, tooltip: e.title });
      }),
      (t[6] = a),
      (t[7] = i),
      (t[8] = d),
      (t[9] = f))
    : ((d = t[8]), (f = t[9]));
  let p;
  return (
    t[10] !== o || t[11] !== d || t[12] !== f
      ? ((p = (0, G.jsx)(st, { item: o, onClose: d, onSaved: f })),
        (t[10] = o),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function U() {
  let e = (0, W.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, G.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center bg-surface p-panel text-codex-description`,
          children: (0, G.jsx)(Ne, { className: `icon-sm` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function bt() {
  let e = (0, W.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, G.jsx)(`span`, {
        className: `flex size-10 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary`,
        children: (0, G.jsx)(Ue, { className: `icon-sm` }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, G.jsx)(`div`, {
        className: `text-lg text-default`,
        children: (0, G.jsx)(l, {
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
      ? ((r = (0, G.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface p-panel`,
          children: (0, G.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center`,
            children: (0, G.jsxs)(`div`, {
              className: `flex max-w-sm flex-col items-center gap-3 text-center`,
              children: [
                t,
                n,
                (0, G.jsx)(`div`, {
                  className: `text-sm text-codex-description`,
                  children: (0, G.jsx)(l, {
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
function xt() {
  let e = (0, W.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, G.jsx)(Ye, { "aria-hidden": !1 })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
var W, G;
e(() => {
  ((W = E()),
    b(),
    de(),
    le(),
    s(),
    ye(),
    v(),
    D(),
    C(),
    N(),
    Xe(),
    r(),
    vt(),
    O(),
    I(),
    w(),
    (G = T()));
})();
export { H as AutomationSidePanelTabContent, xt as AutomationSidePanelTabIcon };
//# sourceMappingURL=automation-side-panel-tab-e00029fe121b.js.map
