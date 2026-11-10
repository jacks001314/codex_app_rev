import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  F4 as r,
  FBt as i,
  I4 as a,
  KH as o,
  LNt as s,
  Lst as c,
  MFt as l,
  Oit as u,
  PBt as d,
  Rst as f,
  TCt as p,
  TY as m,
  Vrt as h,
  XOt as g,
  Y3 as _,
  Yst as v,
  Z3 as y,
  ZSt as b,
  aO as x,
  e6 as S,
  iCt as C,
  jFt as w,
  jit as ee,
  nB as te,
  nCt as ne,
  oO as re,
  okt as ie,
  qrt as ae,
  rB as oe,
  sct as se,
  tCt as ce,
  tkt as T,
  vD as E,
  vst as le,
  wB as ue,
  xB as de,
  yD as fe,
  yst as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Pr as me,
  $j as he,
  ADn as D,
  BPr as ge,
  Bat as _e,
  CFr as ve,
  CMr as ye,
  DNr as O,
  Dyn as be,
  Eit as xe,
  GPr as Se,
  HPr as Ce,
  Hcn as k,
  IPr as we,
  JPr as Te,
  Jyn as Ee,
  KBr as De,
  LPr as Oe,
  MOr as ke,
  PDn as A,
  POr as Ae,
  Qj as je,
  RCn as j,
  Swn as M,
  Tit as N,
  UC as Me,
  Ucn as Ne,
  WC as Pe,
  WPr as Fe,
  XLt as Ie,
  XPr as Le,
  YLt as Re,
  Yyn as ze,
  ZPr as Be,
  aIr as Ve,
  bbr as P,
  bwn as F,
  cFr as He,
  ch as I,
  dE as Ue,
  dIr as We,
  dRt as L,
  fE as Ge,
  g_ as Ke,
  h_ as qe,
  iFr as Je,
  lFr as Ye,
  lIr as Xe,
  lkr as R,
  n7n as z,
  pIr as B,
  pRt as Ze,
  qPr as Qe,
  s7n as $e,
  sh as et,
  vbr as tt,
  wyn as V,
  xFr as H,
  xwn as U,
  y7n as W,
  yMr as G,
  yNr as K,
  ykr as nt,
  zCn as rt,
  zOr as q,
  zPr as it,
  zat as at,
} from "./app-initial-ad16eaadf81f.js";
import { n as ot, t as st } from "./automation-delete-confirmation-dialog-7c5af9220f0a.js";
import { a as ct, i as lt } from "./automation-dialog-843b9afb1cdf.js";
import { i as ut, r as dt } from "./automation-detail-panel-9f15dc42249c.js";
import { i as ft, n as J, r as pt, t as mt } from "./automation-submit-tooltip-ebffddc7f3d5.js";
import { n as Y, t as ht } from "./cloud-automation-detail-panel-fa8123f9eabb.js";
import { a as X } from "./detail-panel-6b30613f7f54.js";
import { n as gt, t as _t } from "./site-automation-create-panel-399dee493ef4.js";
function vt(e) {
  let t = (0, Ct.c)(164),
    {
      automation: i,
      draftInstanceId: a,
      models: o,
      renderSlots: s,
      session: c,
      onClose: u,
      onNameChange: d,
      onSaved: p,
    } = e,
    m = s === void 0 ? re : s,
    h = n(ke),
    g = ie(),
    y = f(),
    b = C(nt),
    x = C(ye),
    S = C(je),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { hostId: v, cwd: null }), (t[0] = w))
    : (w = t[0]);
  let ee = Ie(w),
    ne = Be({ defaultModel: S, models: o, modelSettings: ee }),
    oe;
  t[1] !== i || t[2] !== S || t[3] !== o || t[4] !== h.value || t[5] !== c.seed || t[6] !== c.type
    ? ((oe =
        c.type === `proposal`
          ? Se({ defaultModel: S, seed: c.seed, targetAutomation: i, models: o })
          : i == null
            ? { ...we, targetThreadId: Ae(h.value) }
            : Fe(i, o, S)),
      (t[1] = i),
      (t[2] = S),
      (t[3] = o),
      (t[4] = h.value),
      (t[5] = c.seed),
      (t[6] = c.type),
      (t[7] = oe))
    : (oe = t[7]);
  let se = oe,
    E;
  t[8] === c ? (E = t[9]) : ((E = xe(c)), (t[8] = c), (t[9] = E));
  let le;
  t[10] !== a || t[11] !== se || t[12] !== E
    ? ((le = { draftInstanceId: a, initialDraft: se, sessionKey: E }),
      (t[10] = a),
      (t[11] = se),
      (t[12] = E),
      (t[13] = le))
    : (le = t[13]);
  let ue = ce(Et, le),
    fe = C(ue.draft$),
    he;
  t[14] !== i || t[15] !== h
    ? ((he = async (e) => {
        if (e.kind !== `cron`) return;
        let t = null;
        `pluginTemplateId` in e
          ? (t = e.pluginTemplateId ?? null)
          : `id` in e && i?.kind === `cron` && (t = i.pluginTemplateId);
        let n =
            `projectId` in e
              ? h.get(be).find((t) => {
                  let { projectId: n } = t;
                  return n === e.projectId;
                })
              : null,
          r = n?.projectKind === `local` ? Ee(n) : [],
          a = await h.query
            .getOrFetch(Ue, { hostId: v, pluginTemplateId: t, roots: `cwds` in e ? e.cwds : r })
            .catch(xt);
        return a == null ? void 0 : [a];
      }),
      (t[14] = i),
      (t[15] = h),
      (t[16] = he))
    : (he = t[16]);
  let D = he,
    _e = C(ue.hasUserEdited$),
    [O, k] = (0, wt.useState)(null),
    [De, A] = (0, wt.useState)(!1),
    j = Oe({ draft: fe, modelSettings: ne }),
    M = Ye({ draft: j, serverConversationId: b }),
    N = (e) => {
      let t = Oe({ draft: h.get(ue.draft$), modelSettings: ne }),
        n = typeof e == `function` ? e(t) : e;
      n !== t && (h.set(ue.hasUserEdited$, !0), h.set(ue.draft$, n));
    },
    Me = C(be),
    { trimmedName: Re, trimmedPrompt: ze, canSave: P } = me(M),
    F = He(M),
    I =
      j.id != null && P && F != null && j.status !== `DELETED`
        ? Te({ draft: M, name: Re, prompt: ze, status: j.status, rrule: F })
        : null,
    L = Ne(I, 600),
    Ge;
  t[17] !== O || t[18] !== I
    ? ((Ge = I != null && it(O, I)), (t[17] = O), (t[18] = I), (t[19] = Ge))
    : (Ge = t[19]);
  let qe = Ge,
    Je;
  t[20] !== y || t[21] !== k
    ? ((Je = (e) => {
        (y.setQueryData(tt, (t) =>
          t == null
            ? { items: [e] }
            : {
                ...t,
                items: t.items.some((t) => t.id === e.id)
                  ? t.items.map((t) => (t.id === e.id ? e : t))
                  : [...t.items, e],
              },
        ),
          y.invalidateQueries({ queryKey: tt }),
          k(null));
      }),
      (t[20] = y),
      (t[21] = k),
      (t[22] = Je))
    : (Je = t[22]);
  let R = Je,
    z;
  t[23] !== R ||
  t[24] !== D ||
  t[25] !== p ||
  t[26] !== x ||
  t[27] !== h ||
  t[28] !== c.seed ||
  t[29] !== c.type
    ? ((z = (e) => {
        let { item: t } = e;
        (D(t).then((e) =>
          ve(
            x,
            {
              action: Ve.CODEX_AUTOMATION_ACTION_CREATED,
              source: We.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !0,
            },
            t,
            e,
          ),
        ),
          R(t),
          c.type === `proposal` && h.set(ge, { directiveKey: c.seed.directiveKey, automationId: t.id }),
          p(t));
      }),
      (t[23] = R),
      (t[24] = D),
      (t[25] = p),
      (t[26] = x),
      (t[27] = h),
      (t[28] = c.seed),
      (t[29] = c.type),
      (t[30] = z))
    : (z = t[30]);
  let B;
  t[31] !== D || t[32] !== g || t[33] !== x || t[34] !== h
    ? ((B = (e, t) => {
        (D(t).then((e) =>
          ve(
            x,
            {
              action: Ve.CODEX_AUTOMATION_ACTION_CREATED,
              source: We.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !1,
              failureReason: Xe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
            },
            t,
            e,
          ),
        ),
          St(h, g, e.message));
      }),
      (t[31] = D),
      (t[32] = g),
      (t[33] = x),
      (t[34] = h),
      (t[35] = B))
    : (B = t[35]);
  let Ze;
  t[36] !== B || t[37] !== z
    ? ((Ze = { networkMode: `always`, mutationFn: Ke.create, onSuccess: z, onError: B }),
      (t[36] = B),
      (t[37] = z),
      (t[38] = Ze))
    : (Ze = t[38]);
  let $e = pe(Ze),
    V;
  t[39] !== R ||
  t[40] !== D ||
  t[41] !== p ||
  t[42] !== x ||
  t[43] !== h ||
  t[44] !== c.seed ||
  t[45] !== c.type
    ? ((V = (e) => {
        let { item: t } = e;
        (D(t).then((e) =>
          ve(
            x,
            {
              action: Ve.CODEX_AUTOMATION_ACTION_UPDATED,
              source: We.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
              success: !0,
            },
            t,
            e,
          ),
        ),
          R(t),
          c.type === `proposal` &&
            (h.set(ge, { directiveKey: c.seed.directiveKey, automationId: t.id }), p(t)));
      }),
      (t[39] = R),
      (t[40] = D),
      (t[41] = p),
      (t[42] = x),
      (t[43] = h),
      (t[44] = c.seed),
      (t[45] = c.type),
      (t[46] = V))
    : (V = t[46]);
  let H;
  t[47] !== i || t[48] !== D || t[49] !== g || t[50] !== x || t[51] !== h || t[52] !== k
    ? ((H = (e, t) => {
        (k(t),
          D(t).then((n) =>
            ve(
              x,
              {
                action: Ve.CODEX_AUTOMATION_ACTION_UPDATED,
                source: We.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD,
                success: !1,
                failureReason:
                  e.message ===
                  `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
                    ? Xe.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                    : Xe.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
              },
              t,
              n,
              i,
            ),
          ),
          St(h, g, e.message));
      }),
      (t[47] = i),
      (t[48] = D),
      (t[49] = g),
      (t[50] = x),
      (t[51] = h),
      (t[52] = k),
      (t[53] = H))
    : (H = t[53]);
  let U;
  t[54] !== V || t[55] !== H
    ? ((U = { networkMode: `always`, mutationFn: Ke.update, onSuccess: V, onError: H }),
      (t[54] = V),
      (t[55] = H),
      (t[56] = U))
    : (U = t[56]);
  let W = pe(U),
    G;
  t[57] !== g || t[58] !== u || t[59] !== y || t[60] !== h || t[61] !== A
    ? ((G = (e, t) => {
        let { id: n } = t;
        if ((A(!1), !e.success)) {
          h.get(ae).danger(
            g.formatMessage({
              id: `inbox.automations.deleteError`,
              defaultMessage: `Could not delete scheduled task`,
              description: `Toast title when deleting a scheduled task fails`,
            }),
            { errorAnalytics: { toastId: `inbox.automations.deleteError` } },
          );
          return;
        }
        (u(),
          y.setQueryData(tt, (e) => (e == null ? e : { ...e, items: e.items.filter((e) => e.id !== n) })),
          y.invalidateQueries({ queryKey: tt }));
      }),
      (t[57] = g),
      (t[58] = u),
      (t[59] = y),
      (t[60] = h),
      (t[61] = A),
      (t[62] = G))
    : (G = t[62]);
  let K;
  t[63] !== g || t[64] !== h || t[65] !== A
    ? ((K = (e) => {
        (A(!1),
          h
            .get(ae)
            .danger(
              g.formatMessage({
                id: `inbox.automations.deleteError`,
                defaultMessage: `Could not delete scheduled task`,
                description: `Toast title when deleting a scheduled task fails`,
              }),
              { errorAnalytics: { toastId: `inbox.automations.deleteError` }, description: e.message },
            ));
      }),
      (t[63] = g),
      (t[64] = h),
      (t[65] = A),
      (t[66] = K))
    : (K = t[66]);
  let rt;
  t[67] !== G || t[68] !== K
    ? ((rt = { networkMode: `always`, mutationFn: Ke.delete, onSuccess: G, onError: K }),
      (t[67] = G),
      (t[68] = K),
      (t[69] = rt))
    : (rt = t[69]);
  let q = pe(rt),
    at,
    ot;
  (t[70] !== i || t[71] !== L || t[72] !== O || t[73] !== _e || t[74] !== c.type || t[75] !== W
    ? ((at = () => {
        c.type !== `persisted` ||
          !_e ||
          i == null ||
          L == null ||
          W.isPending ||
          Le(i, L) ||
          it(O, L) ||
          W.mutate(L);
      }),
      (ot = [i, L, O, _e, c.type, W, W.isPending]),
      (t[70] = i),
      (t[71] = L),
      (t[72] = O),
      (t[73] = _e),
      (t[74] = c.type),
      (t[75] = W),
      (t[76] = at),
      (t[77] = ot))
    : ((at = t[76]), (ot = t[77])),
    (0, wt.useEffect)(at, ot));
  let ct;
  t[78] !== P ||
  t[79] !== $e ||
  t[80] !== M ||
  t[81] !== F ||
  t[82] !== h ||
  t[83] !== c.seed ||
  t[84] !== c.type ||
  t[85] !== Re ||
  t[86] !== ze ||
  t[87] !== W ||
  t[88] !== I
    ? ((ct = (e) => {
        if ((e.preventDefault(), c.type === `proposal` && P && F != null)) {
          if ((c.seed.elicitation != null && Pe(h, c.seed.elicitation, `accept`), I != null)) {
            W.mutate(I);
            return;
          }
          $e.mutate(Ce({ draft: M, name: Re, prompt: ze, rrule: F }));
        }
      }),
      (t[78] = P),
      (t[79] = $e),
      (t[80] = M),
      (t[81] = F),
      (t[82] = h),
      (t[83] = c.seed),
      (t[84] = c.type),
      (t[85] = Re),
      (t[86] = ze),
      (t[87] = W),
      (t[88] = I),
      (t[89] = ct))
    : (ct = t[89]);
  let ut = ct,
    ft;
  t[90] !== k || t[91] !== W || t[92] !== I
    ? ((ft = () => {
        I == null || W.isPending || (k(null), W.mutate(I));
      }),
      (t[90] = k),
      (t[91] = W),
      (t[92] = I),
      (t[93] = ft))
    : (ft = t[93]);
  let J = ft,
    Y = $e.isPending || W.isPending,
    ht;
  t[94] !== P || t[95] !== M
    ? ((ht = P ? null : (0, Z.jsx)(mt, { draft: M })), (t[94] = P), (t[95] = M), (t[96] = ht))
    : (ht = t[96]);
  let X = ht,
    gt;
  if (
    t[97] !== i ||
    t[98] !== P ||
    t[99] !== q ||
    t[100] !== j ||
    t[101] !== ut ||
    t[102] !== qe ||
    t[103] !== De ||
    t[104] !== Y ||
    t[105] !== u ||
    t[106] !== d ||
    t[107] !== m ||
    t[108] !== Me ||
    t[109] !== J ||
    t[110] !== c.automationId ||
    t[111] !== c.targetAutomationId ||
    t[112] !== c.type ||
    t[113] !== N ||
    t[114] !== A ||
    t[115] !== X ||
    t[116] !== W
  ) {
    let e;
    t[118] !== d || t[119] !== N
      ? ((e = (e) => {
          (N((t) => ({ ...t, name: e })), d(e));
        }),
        (t[118] = d),
        (t[119] = N),
        (t[120] = e))
      : (e = t[120]);
    let n;
    t[121] !== j.name || t[122] !== e
      ? ((n = (0, Z.jsx)(lt, { id: `${Tt}-title`, value: j.name, onChange: e })),
        (t[121] = j.name),
        (t[122] = e),
        (t[123] = n))
      : (n = t[123]);
    let a;
    t[124] !== i ||
    t[125] !== q ||
    t[126] !== j.status ||
    t[127] !== Y ||
    t[128] !== c.type ||
    t[129] !== N ||
    t[130] !== A ||
    t[131] !== W
      ? ((a =
          c.type === `persisted` && i != null
            ? (0, Z.jsx)(pt, {
                deleteAction: {
                  disabled: q.isPending || Y,
                  onSelect: () => {
                    A(!0);
                  },
                },
                isPaused: j.status === `PAUSED`,
                pauseAction: {
                  disabled: q.isPending || Y,
                  onSelect: () => {
                    (N(bt), W.mutate(Qe(i, `PAUSED`)));
                  },
                },
                pauseResumeInMenu: !0,
                resumeAction: {
                  disabled: q.isPending || Y,
                  onSelect: () => {
                    (N(yt), W.mutate(Qe(i, `ACTIVE`)));
                  },
                },
              })
            : null),
        (t[124] = i),
        (t[125] = q),
        (t[126] = j.status),
        (t[127] = Y),
        (t[128] = c.type),
        (t[129] = N),
        (t[130] = A),
        (t[131] = W),
        (t[132] = a))
      : (a = t[132]);
    let o;
    t[133] !== n || t[134] !== a
      ? ((o = (0, Z.jsxs)(`div`, { className: `flex items-center gap-2`, children: [n, a] })),
        (t[133] = n),
        (t[134] = a),
        (t[135] = o))
      : (o = t[135]);
    let s;
    t[136] !== j || t[137] !== ut || t[138] !== Me || t[139] !== N
      ? ((s = (0, Z.jsx)(dt, {
          draft: j,
          formId: `${Tt}-prompt`,
          setDraft: N,
          resolvedProjects: Me,
          onSubmit: ut,
        })),
        (t[136] = j),
        (t[137] = ut),
        (t[138] = Me),
        (t[139] = N),
        (t[140] = s))
      : (s = t[140]);
    let f;
    t[141] !== o || t[142] !== s
      ? ((f = (0, Z.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto`,
          children: (0, Z.jsxs)(`div`, {
            className: `flex min-h-0 flex-col gap-6 p-panel`,
            children: [o, s],
          }),
        })),
        (t[141] = o),
        (t[142] = s),
        (t[143] = f))
      : (f = t[143]);
    let p;
    t[144] !== P ||
    t[145] !== qe ||
    t[146] !== Y ||
    t[147] !== u ||
    t[148] !== J ||
    t[149] !== c.automationId ||
    t[150] !== c.targetAutomationId ||
    t[151] !== c.type ||
    t[152] !== X ||
    t[153] !== W.isPending
      ? ((p = (0, Z.jsx)(`div`, {
          className: `flex shrink-0 items-center justify-end gap-2 border-t border-default p-panel`,
          children:
            c.type === `proposal`
              ? (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    (0, Z.jsx)(_, {
                      color: `ghost`,
                      size: `toolbar`,
                      onClick: u,
                      children: (0, Z.jsx)(T, {
                        id: `automation.sidePanel.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button label for the scheduled task editor`,
                      }),
                    }),
                    (0, Z.jsx)(te, {
                      delayOpen: !0,
                      disabled: X == null,
                      tooltipContent: X,
                      children: (0, Z.jsx)(`span`, {
                        className: `inline-flex`,
                        children: (0, Z.jsx)(_, {
                          className: P ? void 0 : `pointer-events-none`,
                          color: `outline`,
                          disabled: !P,
                          form: `${Tt}-prompt`,
                          loading: Y,
                          size: `toolbar`,
                          type: `submit`,
                          children:
                            c.targetAutomationId == null
                              ? (0, Z.jsx)(T, {
                                  id: `automation.sidePanel.createSuggestion`,
                                  defaultMessage: `Create scheduled task`,
                                  description: `Button label for accepting a suggested scheduled task`,
                                })
                              : (0, Z.jsx)(T, {
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
                    qe
                      ? (0, Z.jsx)(_, {
                          color: `outline`,
                          loading: W.isPending,
                          size: `toolbar`,
                          onClick: J,
                          children: (0, Z.jsx)(T, {
                            id: `automation.sidePanel.retrySave`,
                            defaultMessage: `Retry save`,
                            description: `Button label for retrying a failed scheduled task save`,
                          }),
                        })
                      : null,
                    (0, Z.jsxs)(_, {
                      color: `outline`,
                      size: `toolbar`,
                      onClick: () => {
                        l.dispatchHostMessage({
                          type: `navigate-to-route`,
                          path: `/automations?automationId=${c.automationId}`,
                        });
                      },
                      children: [
                        (0, Z.jsx)(T, {
                          id: `automation.sidePanel.openScheduledTask`,
                          defaultMessage: `Open settings`,
                          description: `Button label for opening scheduled task settings from the task side panel`,
                        }),
                        (0, Z.jsx)(de, {
                          "aria-hidden": !1,
                          legacyIcon: et,
                          asset16: r,
                          legacyClassName: `icon-2xs`,
                        }),
                      ],
                    }),
                  ],
                }),
        })),
        (t[144] = P),
        (t[145] = qe),
        (t[146] = Y),
        (t[147] = u),
        (t[148] = J),
        (t[149] = c.automationId),
        (t[150] = c.targetAutomationId),
        (t[151] = c.type),
        (t[152] = X),
        (t[153] = W.isPending),
        (t[154] = p))
      : (p = t[154]);
    let h;
    t[155] !== i || t[156] !== q || t[157] !== De || t[158] !== A
      ? ((h =
          i == null
            ? null
            : (0, Z.jsx)(st, {
                isPending: q.isPending,
                name: i.name,
                open: De,
                onCancel: () => {
                  A(!1);
                },
                onConfirm: () => {
                  q.mutate({ id: i.id });
                },
              })),
        (t[155] = i),
        (t[156] = q),
        (t[157] = De),
        (t[158] = A),
        (t[159] = h))
      : (h = t[159]);
    let g;
    (t[160] !== f || t[161] !== p || t[162] !== h
      ? ((g = (0, Z.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [f, p, h],
        })),
        (t[160] = f),
        (t[161] = p),
        (t[162] = h),
        (t[163] = g))
      : (g = t[163]),
      (gt = m({ headerRows: [], content: g })),
      (t[97] = i),
      (t[98] = P),
      (t[99] = q),
      (t[100] = j),
      (t[101] = ut),
      (t[102] = qe),
      (t[103] = De),
      (t[104] = Y),
      (t[105] = u),
      (t[106] = d),
      (t[107] = m),
      (t[108] = Me),
      (t[109] = J),
      (t[110] = c.automationId),
      (t[111] = c.targetAutomationId),
      (t[112] = c.type),
      (t[113] = N),
      (t[114] = A),
      (t[115] = X),
      (t[116] = W),
      (t[117] = gt));
  } else gt = t[117];
  return gt;
}
function yt(e) {
  return { ...e, status: `ACTIVE` };
}
function bt(e) {
  return { ...e, status: `PAUSED` };
}
function xt() {
  return null;
}
function St(e, t, n) {
  e.get(ae).danger(
    t.formatMessage({
      id: `inbox.automations.saveError`,
      defaultMessage: `Could not save scheduled task`,
      description: `Toast title when saving a scheduled task fails`,
    }),
    { errorAnalytics: { toastId: `inbox.automations.saveError` }, description: n },
  );
}
var Ct, wt, Z, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Ct = d()),
      B(),
      a(),
      c(),
      le(),
      b(),
      se(),
      (wt = i()),
      g(),
      Ge(),
      Me(),
      x(),
      ut(),
      P(),
      Je(),
      qe(),
      y(),
      ue(),
      h(),
      oe(),
      Re(),
      I(),
      w(),
      G(),
      ze(),
      he(),
      q(),
      R(),
      ct(),
      De(),
      V(),
      k(),
      ft(),
      ot(),
      H(),
      J(),
      (Z = s()),
      (Tt = `automation-side-panel-form`),
      (Et = p(ke, ({ initialDraft: e }, { signal: t }) => ({ draft$: t(e), hasUserEdited$: t(!1) }), {
        excludeFieldsFromKey: [`initialDraft`],
      })));
  }))();
}
function Ot(e) {
  let t = (0, Q.c)(8);
  if (e.request.type === `site`) {
    let n;
    return (
      t[0] !== e.renderSlots ||
      t[1] !== e.request.proposal ||
      t[2] !== e.setTabState ||
      t[3] !== e.tabId ||
      t[4] !== e.tabState
        ? ((n = (0, $.jsx)(_t, {
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
    t[6] === e ? (n = t[7]) : ((n = (0, $.jsx)(kt, { ...e, request: e.request })), (t[6] = e), (t[7] = n)),
    n
  );
}
function kt(e) {
  let t = (0, Q.c)(32),
    { renderSlots: r, request: i, setTabState: a, tabId: o, tabState: s } = e,
    c = n(ke),
    l = C(rt),
    { data: u, isLoading: d } = Ze(),
    f;
  t[0] !== i || t[1] !== s.savedAutomationId
    ? ((f = N({ request: i, savedAutomationId: s.savedAutomationId })),
      (t[0] = i),
      (t[1] = s.savedAutomationId),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m = p.type === `persisted` ? p.automationId : p.targetAutomationId,
    h;
  t[3] !== l || t[4] !== m
    ? ((h = m == null ? null : (l.data?.items.find((e) => e.id === m) ?? null)),
      (t[3] = l),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let g = h,
    _;
  t[6] !== c || t[7] !== o
    ? ((_ = () => {
        A.closeTab(c, o);
      }),
      (t[6] = c),
      (t[7] = o),
      (t[8] = _))
    : (_ = t[8]);
  let v = _;
  if ((m != null && g == null && (l.isLoading || l.isFetching)) || (u == null && d)) {
    let e;
    if (t[9] !== r) {
      let n;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(jt, {})), (t[11] = n))
        : (n = t[11]),
        (e = r({ headerRows: [], content: n })),
        (t[9] = r),
        (t[10] = e));
    } else e = t[10];
    return e;
  }
  if (m != null && g == null) {
    let e;
    return (
      t[12] !== r || t[13] !== o || t[14] !== m
        ? ((e = (0, $.jsx)(At, { automationId: m, renderSlots: r, tabId: o })),
          (t[12] = r),
          (t[13] = o),
          (t[14] = m),
          (t[15] = e))
        : (e = t[15]),
      e
    );
  }
  let y;
  t[16] !== c || t[17] !== o
    ? ((y = (e) => {
        let t = e.trim();
        t.length !== 0 && A.updateTab(c, o, { title: t, tooltip: t });
      }),
      (t[16] = c),
      (t[17] = o),
      (t[18] = y))
    : (y = t[18]);
  let b = y,
    x = p.type === `persisted` ? `persisted:${p.automationId}` : `proposal:${p.seed.directiveKey}`,
    S = u?.models,
    w;
  t[19] !== a || t[20] !== b
    ? ((w = (e) => {
        (a((t) => ({ ...t, savedAutomationId: e.id })), b(e.name));
      }),
      (t[19] = a),
      (t[20] = b),
      (t[21] = w))
    : (w = t[21]);
  let ee;
  return (
    t[22] !== g ||
    t[23] !== v ||
    t[24] !== r ||
    t[25] !== p ||
    t[26] !== x ||
    t[27] !== S ||
    t[28] !== w ||
    t[29] !== s.draftInstanceId ||
    t[30] !== b
      ? ((ee = (0, $.jsx)(
          vt,
          {
            automation: g,
            draftInstanceId: s.draftInstanceId,
            models: S,
            renderSlots: r,
            session: p,
            onClose: v,
            onNameChange: b,
            onSaved: w,
          },
          x,
        )),
        (t[22] = g),
        (t[23] = v),
        (t[24] = r),
        (t[25] = p),
        (t[26] = x),
        (t[27] = S),
        (t[28] = w),
        (t[29] = s.draftInstanceId),
        (t[30] = b),
        (t[31] = ee))
      : (ee = t[31]),
    ee
  );
}
function At(e) {
  let t = (0, Q.c)(31),
    { automationId: r, renderSlots: i, tabId: a } = e,
    o = n(ke),
    s = (0, Pt.useRef)(null),
    c,
    l;
  (t[0] !== o || t[1] !== a
    ? ((c = () => {
        let e = U(o, a);
        if (e == null) return;
        let t = F(e),
          n = o.get(t.tabById$, a);
        if (n == null) return;
        let r = () => s.current?.requestClose() ?? !0;
        t.updateTab(o, a, { onBeforeClose: r });
        let i = X(
          () => {
            t.isCurrentTabInstance(o, n) &&
              o.get(t.activeTab$)?.tabId === a &&
              o.get(e === `right` ? $e : z) &&
              t.closeTab(o, a);
          },
          document.querySelector(`[data-app-shell-main-content-layout]`),
          `click`,
        );
        return () => {
          (i?.(),
            o.get(t.tabById$, a)?.onBeforeClose === r &&
              t.updateTab(o, a, { onBeforeClose: n.onBeforeClose }));
        };
      }),
      (l = [o, a]),
      (t[0] = o),
      (t[1] = a),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3])),
    (0, Pt.useEffect)(c, l));
  let { data: u, error: d, isFetching: f, isLoading: p, refetch: m } = ne(K, r),
    h = u?.automation.title,
    g,
    _;
  if (
    (t[4] !== o || t[5] !== a || t[6] !== h
      ? ((g = () => {
          let e = U(o, a);
          h != null && e != null && F(e).updateTab(o, a, { title: h, tooltip: h });
        }),
        (_ = [o, a, h]),
        (t[4] = o),
        (t[5] = a),
        (t[6] = h),
        (t[7] = g),
        (t[8] = _))
      : ((g = t[7]), (_ = t[8])),
    (0, Pt.useEffect)(g, _),
    u == null && (p || f))
  ) {
    let e;
    if (t[9] !== i) {
      let n;
      (t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(jt, {})), (t[11] = n))
        : (n = t[11]),
        (e = i({ headerRows: [], content: n })),
        (t[9] = i),
        (t[10] = e));
    } else e = t[10];
    return e;
  }
  if (u == null && d != null && !(d instanceof ee && d.status === 404)) {
    let e;
    if (t[12] !== m || t[13] !== i) {
      let n, r;
      t[15] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(T, {
            id: `inbox.automations.cloud.loadError`,
            defaultMessage: `Cloud scheduled tasks could not be loaded`,
            description: `Error shown when cloud scheduled tasks fail to load`,
          })),
          (r = (0, $.jsx)(T, {
            id: `inbox.automations.cloud.loadError.retry`,
            defaultMessage: `Try again`,
            description: `Button to retry loading cloud scheduled tasks`,
          })),
          (t[15] = n),
          (t[16] = r))
        : ((n = t[15]), (r = t[16]));
      let a;
      (t[17] === m
        ? (a = t[18])
        : ((a = (0, $.jsx)(`div`, {
            className: `flex h-full min-h-0 flex-col bg-surface p-panel`,
            children: (0, $.jsx)(E, {
              content: n,
              primaryCtaText: r,
              type: `error`,
              onPrimaryCtaClick: () => {
                m();
              },
            }),
          })),
          (t[17] = m),
          (t[18] = a)),
        (e = i({ headerRows: [], content: a })),
        (t[12] = m),
        (t[13] = i),
        (t[14] = e));
    } else e = t[14];
    return e;
  }
  if (u == null) {
    let e;
    if (t[19] !== i) {
      let n;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(Mt, {})), (t[21] = n))
        : (n = t[21]),
        (e = i({ headerRows: [], content: n })),
        (t[19] = i),
        (t[20] = e));
    } else e = t[20];
    return e;
  }
  let v, y;
  t[22] !== o || t[23] !== a
    ? ((v = () => {
        let e = U(o, a);
        e != null && F(e).closeTab(o, a);
      }),
      (y = (e) => {
        let t = U(o, a);
        t != null && F(t).updateTab(o, a, { title: e.title, tooltip: e.title });
      }),
      (t[22] = o),
      (t[23] = a),
      (t[24] = v),
      (t[25] = y))
    : ((v = t[24]), (y = t[25]));
  let b;
  return (
    t[26] !== u || t[27] !== i || t[28] !== v || t[29] !== y
      ? ((b = (0, $.jsx)(ht, {
          ref: s,
          item: u,
          showCloseButton: !1,
          renderSlots: i,
          onClose: v,
          onSaved: y,
        })),
        (t[26] = u),
        (t[27] = i),
        (t[28] = v),
        (t[29] = y),
        (t[30] = b))
      : (b = t[30]),
    b
  );
}
function jt() {
  let e = (0, Q.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center bg-surface p-panel text-codex-description`,
          children: (0, $.jsx)(t, { className: `icon-sm` }),
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function Mt() {
  let e = (0, Q.c)(3),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`span`, {
        className: `flex size-10 items-center justify-center rounded-lg bg-surface-secondary/92 text-secondary`,
        children: (0, $.jsx)(at, { className: `icon-sm` }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, $.jsx)(`div`, {
        className: `text-lg text-default`,
        children: (0, $.jsx)(T, {
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
                  children: (0, $.jsx)(T, {
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
function Nt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(o, { "aria-hidden": !1 })), (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, Pt, $;
function Ft() {
  return (Ft = e(() => {
    ((Q = d()),
      b(),
      (Pt = i()),
      g(),
      D(),
      W(),
      fe(),
      m(),
      S(),
      _e(),
      L(),
      q(),
      M(),
      u(),
      j(),
      Dt(),
      Y(),
      O(),
      gt(),
      ($ = s()));
  }))();
}
Ft();
export { Ot as AutomationSidePanelTabContent, Nt as AutomationSidePanelTabIcon };
//# sourceMappingURL=automation-side-panel-tab-b0b641a7bc0a.js.map
