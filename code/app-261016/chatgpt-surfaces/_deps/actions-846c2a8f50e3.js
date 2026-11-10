const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./conversation-share-flow-5c892b9606a4.js",
      "./app-initial-ad16eaadf81f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  D as r,
  DB as i,
  FBt as a,
  HQ as o,
  JOt as s,
  LNt as c,
  Lst as l,
  NO as u,
  NSt as d,
  O as f,
  OB as p,
  OFt as m,
  PBt as h,
  PO as g,
  Qst as ee,
  Rst as _,
  U$ as v,
  USt as y,
  VQ as b,
  VSt as te,
  Vrt as x,
  W$ as S,
  XOt as C,
  YOt as w,
  Yst as T,
  ZSt as E,
  ck as D,
  iCt as O,
  kFt as k,
  nCt as A,
  okt as ne,
  qrt as re,
  rk as j,
  sct as M,
  tkt as N,
  vSt as P,
  vst as F,
  yst as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Pr as ae,
  $cr as I,
  CFr as L,
  CMr as R,
  HZ as z,
  JPr as oe,
  KBr as B,
  MC as V,
  NPr as H,
  PC as U,
  TPr as W,
  WPr as se,
  WZ as G,
  Y5n as K,
  Ycr as q,
  Z5n as J,
  aIr as ce,
  bbr as Y,
  cFr as le,
  cGt as ue,
  dE as de,
  dIr as fe,
  fE as pe,
  fIr as me,
  g_ as he,
  h_ as ge,
  iFr as _e,
  kPr as ve,
  lIr as ye,
  pIr as be,
  qPr as xe,
  rFr as Se,
  sGt as Ce,
  vbr as we,
  wLr as Te,
  xFr as Ee,
  xMr as De,
  yMr as Oe,
  zRr as ke,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ae, t as je } from "./automation-delete-confirmation-dialog-7c5af9220f0a.js";
import { n as Me, r as Ne, t as Pe } from "./run-now-051c45dd9d07.js";
import { r as Fe, t as Ie } from "./menu-items-d31be3c38abb.js";
import { i as Le, n as Re, r as ze, t as Be } from "./automation-submit-tooltip-ebffddc7f3d5.js";
import { a as Ve, i as He, n as Ue, o as We, r as Ge, t as Ke } from "./editor-dialog-2b451bd55a6d.js";
import {
  f as qe,
  n as Je,
  o as Ye,
  p as Xe,
  s as Ze,
  t as Qe,
} from "./configuration-schedule-349da7cdee3c.js";
import { _ as $e, d as et, m as tt, n as nt, p as rt, v as it } from "./state-b5960488bc9f.js";
function at(e) {
  let n = (0, st.c)(72),
    { automation: r, onClose: i } = e,
    a = t(ee),
    o = ne(),
    s = _(),
    c = (0, X.useContext)(P),
    l;
  n[0] === r ? (l = n[1]) : ((l = () => se(r)), (n[0] = r), (n[1] = l));
  let [u] = (0, X.useState)(l),
    [d, f] = (0, X.useState)(u),
    p;
  n[2] !== r || n[3] !== u
    ? ((p = { automation: r, draft: u }), (n[2] = r), (n[3] = u), (n[4] = p))
    : (p = n[4]);
  let [m, h] = (0, X.useState)(p),
    [g, v] = (0, X.useState)(!1),
    [y, b] = (0, X.useState)(!1),
    te;
  n[5] !== d || n[6] !== m.draft
    ? ((te = Se(d, m.draft)), (n[5] = d), (n[6] = m.draft), (n[7] = te))
    : (te = n[7]);
  let x = te,
    S = d.name !== m.draft.name || d.prompt !== m.draft.prompt,
    C;
  n[8] === d ? (C = n[9]) : ((C = ae(d)), (n[8] = d), (n[9] = C));
  let { trimmedName: w, trimmedPrompt: E, canSave: D } = C,
    O = D && x && d.status !== `DELETED`,
    k;
  n[10] !== r || n[11] !== a
    ? ((k = async () => {
        if (r.kind !== `cron` || r.pluginTemplateId == null) return;
        let e = await a.query
          .getOrFetch(de, { hostId: T, pluginTemplateId: r.pluginTemplateId, roots: r.cwds })
          .catch(ot);
        return e == null ? void 0 : [e];
      }),
      (n[10] = r),
      (n[11] = a),
      (n[12] = k))
    : (k = n[12]);
  let A = k,
    j;
  n[13] !== A || n[14] !== s || n[15] !== a
    ? ((j = (e) => {
        let { item: t } = e;
        (A().then((e) =>
          L(
            a.get(R),
            {
              action: ce.CODEX_AUTOMATION_ACTION_UPDATED,
              source: fe.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: !0,
            },
            t,
            e,
          ),
        ),
          s.setQueryData(we, (e) => (e == null ? e : { items: e.items.map((e) => (e.id === t.id ? t : e)) })),
          s.invalidateQueries({ queryKey: we }),
          De(a, me, {}));
      }),
      (n[13] = A),
      (n[14] = s),
      (n[15] = a),
      (n[16] = j))
    : (j = n[16]);
  let M;
  n[17] !== r || n[18] !== A || n[19] !== o || n[20] !== a
    ? ((M = (e, t) => {
        (A().then((n) =>
          L(
            a.get(R),
            {
              action: ce.CODEX_AUTOMATION_ACTION_UPDATED,
              source: fe.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: !1,
              failureReason:
                e.message ===
                `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
                  ? ye.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                  : ye.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
            },
            t,
            n,
            r,
          ),
        ),
          a
            .get(re)
            .danger(
              o.formatMessage({
                id: `inbox.automations.updateError`,
                defaultMessage: `Could not update scheduled task`,
                description: `Toast title when updating a scheduled task fails`,
              }),
              { description: e.message, errorAnalytics: { toastId: `inbox.automations.updateError` } },
            ));
      }),
      (n[17] = r),
      (n[18] = A),
      (n[19] = o),
      (n[20] = a),
      (n[21] = M))
    : (M = n[21]);
  let N;
  n[22] !== j || n[23] !== M
    ? ((N = { networkMode: `always`, mutationFn: he.update, onSuccess: j, onError: M }),
      (n[22] = j),
      (n[23] = M),
      (n[24] = N))
    : (N = n[24]);
  let F = ie(N),
    I = F.isPending || g,
    z;
  n[25] !== O || n[26] !== d || n[27] !== I || n[28] !== i || n[29] !== w || n[30] !== E || n[31] !== F
    ? ((z = () => {
        !I &&
          O &&
          F.mutate(oe({ draft: d, name: w, prompt: E, status: d.status, rrule: le(d) }), { onSuccess: i });
      }),
      (n[25] = O),
      (n[26] = d),
      (n[27] = I),
      (n[28] = i),
      (n[29] = w),
      (n[30] = E),
      (n[31] = F),
      (n[32] = z))
    : (z = n[32]);
  let B = z,
    V;
  n[33] === B
    ? (V = n[34])
    : ((V = (e) => {
        (e.preventDefault(), B());
      }),
      (n[33] = B),
      (n[34] = V));
  let H;
  n[35] !== S || n[36] !== i
    ? ((H = () => {
        S ? b(!0) : i();
      }),
      (n[35] = S),
      (n[36] = i),
      (n[37] = H))
    : (H = n[37]);
  let U = F.isPending && !g,
    W;
  n[38] !== g || n[39] !== I || n[40] !== m.automation || n[41] !== F
    ? ((W =
        m.automation.status === `DELETED`
          ? void 0
          : (0, Z.jsx)(Ve, {
              isPaused: m.automation.status === `PAUSED`,
              isPending: g,
              disabled: I,
              onClick: () => {
                I ||
                  (v(!0),
                  F.mutate(xe(m.automation, m.automation.status === `PAUSED` ? `ACTIVE` : `PAUSED`), {
                    onSuccess: (e) => {
                      let { item: t } = e;
                      (h((e) => ({ automation: t, draft: { ...e.draft, status: t.status } })),
                        f((e) => ({ ...e, status: t.status })));
                    },
                    onSettled: () => v(!1),
                  }));
              },
            })),
      (n[38] = g),
      (n[39] = I),
      (n[40] = m.automation),
      (n[41] = F),
      (n[42] = W))
    : (W = n[42]);
  let G;
  n[43] !== d || n[44] !== D
    ? ((G = D ? void 0 : (0, Z.jsx)(Be, { draft: d })), (n[43] = d), (n[44] = D), (n[45] = G))
    : (G = n[45]);
  let K, q;
  n[46] === d
    ? ((K = n[47]), (q = n[48]))
    : ((K = (0, Z.jsx)(Qe, { personal: !0, draft: d, onChange: f, executionLocation: `local` })),
      (q = (0, Z.jsx)(qe, { draft: d, setDraft: f, executionLocation: `local` })),
      (n[46] = d),
      (n[47] = K),
      (n[48] = q));
  let J;
  n[49] !== O ||
  n[50] !== d ||
  n[51] !== g ||
  n[52] !== V ||
  n[53] !== H ||
  n[54] !== U ||
  n[55] !== W ||
  n[56] !== G ||
  n[57] !== K ||
  n[58] !== q
    ? ((J = (0, Z.jsx)(Ye, {
        executionLocation: `local`,
        draft: d,
        onChange: f,
        onSubmit: V,
        onClose: H,
        canSave: O,
        isSaving: U,
        isChangingStatus: g,
        statusAction: W,
        submitTooltip: G,
        schedule: K,
        advanced: q,
      })),
      (n[49] = O),
      (n[50] = d),
      (n[51] = g),
      (n[52] = V),
      (n[53] = H),
      (n[54] = U),
      (n[55] = W),
      (n[56] = G),
      (n[57] = K),
      (n[58] = q),
      (n[59] = J))
    : (J = n[59]);
  let Y;
  n[60] !== c || n[61] !== S || n[62] !== I
    ? ((Y = c == null ? null : (0, Z.jsx)(Ge, { isPending: I, shouldBlock: () => S || I })),
      (n[60] = c),
      (n[61] = S),
      (n[62] = I),
      (n[63] = Y))
    : (Y = n[63]);
  let ue;
  n[64] !== I || n[65] !== i || n[66] !== y
    ? ((ue = y ? (0, Z.jsx)(Ke, { isPending: I, onKeepEditing: () => b(!1), onDiscard: i }) : null),
      (n[64] = I),
      (n[65] = i),
      (n[66] = y),
      (n[67] = ue))
    : (ue = n[67]);
  let pe;
  return (
    n[68] !== J || n[69] !== Y || n[70] !== ue
      ? ((pe = (0, Z.jsxs)(Z.Fragment, { children: [J, Y, ue] })),
        (n[68] = J),
        (n[69] = Y),
        (n[70] = ue),
        (n[71] = pe))
      : (pe = n[71]),
    pe
  );
}
function ot() {
  return null;
}
var st, X, Z;
function ct() {
  return (ct = e(() => {
    ((st = h()),
      be(),
      l(),
      F(),
      E(),
      M(),
      (X = a()),
      C(),
      d(),
      pe(),
      Y(),
      Ee(),
      _e(),
      Re(),
      ge(),
      He(),
      x(),
      Oe(),
      n(),
      B(),
      Xe(),
      Ze(),
      Je(),
      We(),
      (Z = c()));
  }))();
}
var lt, ut;
function dt() {
  return (dt = e(() => {
    ((lt = `_actions_pdigv_1`), (ut = { actions: lt }));
  }))();
}
function ft(e) {
  let n = (0, yt.c)(48),
    { item: a, onMenuOpenChange: o } = e,
    s = t(ee),
    c = ne(),
    l = y(),
    u = te().key,
    [d, f] = (0, Q.useState)(null);
  d != null && d !== u && f(null);
  let p;
  n[0] === a.automation
    ? (p = n[1])
    : ((p = W(a.automation).canManage && ve(a.automation) !== `completed`),
      (n[0] = a.automation),
      (n[1] = p));
  let m = p,
    h = A(Me, a.automation.id),
    g;
  n[2] === a.automation
    ? (g = n[3])
    : ((g = W(a.automation).canManage && a.automation.executor !== `local`),
      (n[2] = a.automation),
      (n[3] = g));
  let _ = g,
    v;
  n[4] !== _ || n[5] !== a || n[6] !== l || n[7] !== h
    ? ((v = _ ? () => h.mutateAsync({ item: a, navigate: l }) : void 0),
      (n[4] = _),
      (n[5] = a),
      (n[6] = l),
      (n[7] = h),
      (n[8] = v))
    : (v = n[8]);
  let b;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(i, { asset: r })), (n[9] = b))
    : (b = n[9]);
  let x;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { contentWidth: `menu` }), (n[10] = x))
    : (x = n[10]);
  let S;
  n[11] !== c || n[12] !== s
    ? ((S = () => s.get(re).success(c.formatMessage(xt))), (n[11] = c), (n[12] = s), (n[13] = S))
    : (S = n[13]);
  let C;
  n[14] !== c || n[15] !== a.automation.id || n[16] !== s
    ? ((C = () => {
        (s.get(re).success(c.formatMessage(bt)), _t(s, a.automation.id, `cloud`));
      }),
      (n[14] = c),
      (n[15] = a.automation.id),
      (n[16] = s),
      (n[17] = C))
    : (C = n[17]);
  let w;
  n[18] !== a.automation.id || n[19] !== l || n[20] !== s
    ? ((w = () => tt(s.get(q), l, a.automation.id, `cloud`)),
      (n[18] = a.automation.id),
      (n[19] = l),
      (n[20] = s),
      (n[21] = w))
    : (w = n[21]);
  let T;
  n[22] !== m || n[23] !== u
    ? ((T = m ? () => f(u) : void 0), (n[22] = m), (n[23] = u), (n[24] = T))
    : (T = n[24]);
  let E;
  n[25] !== a.automation.id || n[26] !== T
    ? ((E = (0, $.jsx)(ht, { automationId: a.automation.id, source: `cloud`, onEdit: T, showShare: !1 })),
      (n[25] = a.automation.id),
      (n[26] = T),
      (n[27] = E))
    : (E = n[27]);
  let D;
  n[28] !== a || n[29] !== s
    ? ((D =
        a.teamId == null
          ? (0, $.jsx)(ht, {
              automationId: a.automation.id,
              source: `cloud`,
              onShare:
                a.automation.conversation_id == null
                  ? void 0
                  : () => {
                      pt(s, a);
                    },
            })
          : null),
      (n[28] = a),
      (n[29] = s),
      (n[30] = D))
    : (D = n[30]);
  let O;
  n[31] !== a ||
  n[32] !== o ||
  n[33] !== h.isPending ||
  n[34] !== E ||
  n[35] !== D ||
  n[36] !== v ||
  n[37] !== S ||
  n[38] !== C ||
  n[39] !== w
    ? ((O = (0, $.jsx)(vt, {
        children: (0, $.jsx)(Ie, {
          item: a,
          isRunNowPending: h.isPending,
          onRunNow: void 0,
          onRunNowAsync: v,
          runNowIcon: b,
          onMenuOpenChange: o,
          statusFirst: !0,
          menuProps: x,
          onPaused: S,
          onResumed: C,
          onDeleted: w,
          additionalMenuItems: E,
          shareMenuItem: D,
        }),
      })),
      (n[31] = a),
      (n[32] = o),
      (n[33] = h.isPending),
      (n[34] = E),
      (n[35] = D),
      (n[36] = v),
      (n[37] = S),
      (n[38] = C),
      (n[39] = w),
      (n[40] = O))
    : (O = n[40]);
  let k;
  n[41] !== d || n[42] !== a || n[43] !== u
    ? ((k =
        d === u
          ? (0, $.jsx)(gt, {
              task: { source: `cloud`, item: a },
              navigationSource: `scheduled_page`,
              onClose: () => f(null),
            })
          : null),
      (n[41] = d),
      (n[42] = a),
      (n[43] = u),
      (n[44] = k))
    : (k = n[44]);
  let j;
  return (
    n[45] !== O || n[46] !== k
      ? ((j = (0, $.jsxs)($.Fragment, { children: [O, k] })), (n[45] = O), (n[46] = k), (n[47] = j))
      : (j = n[47]),
    j
  );
}
async function pt(e, t) {
  let n = t.automation.conversation_id;
  if (n == null) return;
  let { shareChatGptProjectConversation: r } = await m(
    async () => {
      let { shareChatGptProjectConversation: e } = await import(`./conversation-share-flow-5c892b9606a4.js`);
      return { shareChatGptProjectConversation: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  try {
    if ((await r(e, n, t.automation.title, null)) !== `unavailable`) return;
  } catch {}
  await u(K(t.automation.id, `cloud`));
}
function mt(e) {
  let n = (0, yt.c)(82),
    { automation: a, onMenuOpenChange: o } = e,
    s = t(ee),
    c = ne(),
    l = _(),
    u = y(),
    d = ue(),
    f = te().key,
    [p, m] = (0, Q.useState)(null);
  p != null && p !== f && m(null);
  let [h, g] = (0, Q.useState)(!1),
    v;
  n[0] !== c || n[1] !== s
    ? ((v = (e, t) => {
        s.get(re).danger(c.formatMessage(St[e]), { description: t, errorAnalytics: { toastId: St[e].id } });
      }),
      (n[0] = c),
      (n[1] = s),
      (n[2] = v))
    : (v = n[2]);
  let b = v,
    x;
  n[3] !== c || n[4] !== o || n[5] !== l || n[6] !== s
    ? ((x = (e) => {
        let { item: t } = e;
        (l.setQueryData(we, (e) => (e == null ? e : { items: e.items.map((e) => (e.id === t.id ? t : e)) })),
          l.invalidateQueries({ queryKey: we }),
          o(!1),
          t.status === `PAUSED` && s.get(re).success(c.formatMessage(xt)),
          t.status === `ACTIVE` && (s.get(re).success(c.formatMessage(bt)), _t(s, t.id, `local`)));
      }),
      (n[3] = c),
      (n[4] = o),
      (n[5] = l),
      (n[6] = s),
      (n[7] = x))
    : (x = n[7]);
  let S;
  n[8] === b ? (S = n[9]) : ((S = (e) => b(`update`, e.message)), (n[8] = b), (n[9] = S));
  let C;
  n[10] !== x || n[11] !== S
    ? ((C = { networkMode: `always`, mutationFn: he.update, onSuccess: x, onError: S }),
      (n[10] = x),
      (n[11] = S),
      (n[12] = C))
    : (C = n[12]);
  let w = ie(C),
    T = A(Ne, a.id),
    E;
  n[13] !== a.id || n[14] !== u || n[15] !== l || n[16] !== s || n[17] !== b
    ? ((E = (e) => {
        let { success: t } = e;
        if (!t) {
          b(`delete`);
          return;
        }
        (g(!1),
          tt(s.get(q), u, a.id, `local`),
          l.setQueryData(we, (e) =>
            e == null
              ? e
              : {
                  items: e.items.filter((e) => {
                    let { id: t } = e;
                    return t !== a.id;
                  }),
                },
          ),
          l.invalidateQueries({ queryKey: we }));
      }),
      (n[13] = a.id),
      (n[14] = u),
      (n[15] = l),
      (n[16] = s),
      (n[17] = b),
      (n[18] = E))
    : (E = n[18]);
  let D;
  n[19] === b ? (D = n[20]) : ((D = (e) => b(`delete`, e.message)), (n[19] = b), (n[20] = D));
  let O;
  n[21] !== E || n[22] !== D
    ? ((O = { networkMode: `always`, mutationFn: he.delete, onSuccess: E, onError: D }),
      (n[21] = E),
      (n[22] = D),
      (n[23] = O))
    : (O = n[23]);
  let k = ie(O),
    j = w.isPending || T.isPending || k.isPending,
    M;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = { contentWidth: `menu` }), (n[24] = M))
    : (M = n[24]);
  let N = a.status === `PAUSED`,
    P;
  n[25] !== a || n[26] !== w
    ? ((P = () => w.mutate(xe(a, `PAUSED`))), (n[25] = a), (n[26] = w), (n[27] = P))
    : (P = n[27]);
  let F;
  n[28] !== j || n[29] !== P
    ? ((F = { disabled: j, onSelect: P }), (n[28] = j), (n[29] = P), (n[30] = F))
    : (F = n[30]);
  let ae;
  n[31] !== a || n[32] !== w
    ? ((ae = () => w.mutate(xe(a, `ACTIVE`))), (n[31] = a), (n[32] = w), (n[33] = ae))
    : (ae = n[33]);
  let I;
  n[34] !== j || n[35] !== ae
    ? ((I = { disabled: j, onSelect: ae }), (n[34] = j), (n[35] = ae), (n[36] = I))
    : (I = n[36]);
  let L;
  n[37] !== a || n[38] !== f || n[39] !== d || n[40] !== T
    ? ((L = async () => {
        await T.mutateAsync({ automation: a, navigateToLocalConversation: d, locationKey: f });
      }),
      (n[37] = a),
      (n[38] = f),
      (n[39] = d),
      (n[40] = T),
      (n[41] = L))
    : (L = n[41]);
  let R;
  n[42] !== j || n[43] !== T.isPending || n[44] !== L
    ? ((R = { disabled: j, isPending: T.isPending, onSelectAsync: L }),
      (n[42] = j),
      (n[43] = T.isPending),
      (n[44] = L),
      (n[45] = R))
    : (R = n[45]);
  let z;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(i, { asset: r })), (n[46] = z))
    : (z = n[46]);
  let oe;
  n[47] === Symbol.for(`react.memo_cache_sentinel`) ? ((oe = () => g(!0)), (n[47] = oe)) : (oe = n[47]);
  let B;
  n[48] === j ? (B = n[49]) : ((B = { disabled: j, onSelect: oe }), (n[48] = j), (n[49] = B));
  let V;
  n[50] === f ? (V = n[51]) : ((V = () => m(f)), (n[50] = f), (n[51] = V));
  let H;
  n[52] !== a.id || n[53] !== j || n[54] !== V
    ? ((H = (0, $.jsx)(ht, { automationId: a.id, source: `local`, onEdit: V, disabled: j })),
      (n[52] = a.id),
      (n[53] = j),
      (n[54] = V),
      (n[55] = H))
    : (H = n[55]);
  let U;
  n[56] !== o ||
  n[57] !== F ||
  n[58] !== I ||
  n[59] !== R ||
  n[60] !== B ||
  n[61] !== H ||
  n[62] !== N ||
  n[63] !== w.isPending
    ? ((U = (0, $.jsx)(vt, {
        children: (0, $.jsx)(ze, {
          statusFirst: !0,
          menuProps: M,
          pauseResumeInMenu: !0,
          isPaused: N,
          isStatusPending: w.isPending,
          onMenuOpenChange: o,
          pauseAction: F,
          resumeAction: I,
          runNowAction: R,
          runNowIcon: z,
          deleteAction: B,
          additionalMenuItems: H,
        }),
      })),
      (n[56] = o),
      (n[57] = F),
      (n[58] = I),
      (n[59] = R),
      (n[60] = B),
      (n[61] = H),
      (n[62] = N),
      (n[63] = w.isPending),
      (n[64] = U))
    : (U = n[64]);
  let W;
  n[65] !== a || n[66] !== p || n[67] !== f
    ? ((W =
        p === f
          ? (0, $.jsx)(gt, { task: { source: `local`, automation: a }, onClose: () => m(null) })
          : null),
      (n[65] = a),
      (n[66] = p),
      (n[67] = f),
      (n[68] = W))
    : (W = n[68]);
  let se;
  n[69] === Symbol.for(`react.memo_cache_sentinel`) ? ((se = () => g(!1)), (n[69] = se)) : (se = n[69]);
  let G;
  n[70] !== a.id || n[71] !== k
    ? ((G = () => {
        k.isPending || k.mutate({ id: a.id });
      }),
      (n[70] = a.id),
      (n[71] = k),
      (n[72] = G))
    : (G = n[72]);
  let K;
  n[73] !== a.name || n[74] !== k.isPending || n[75] !== h || n[76] !== G
    ? ((K = (0, $.jsx)(je, { open: h, isPending: k.isPending, name: a.name, onCancel: se, onConfirm: G })),
      (n[73] = a.name),
      (n[74] = k.isPending),
      (n[75] = h),
      (n[76] = G),
      (n[77] = K))
    : (K = n[77]);
  let J;
  return (
    n[78] !== U || n[79] !== W || n[80] !== K
      ? ((J = (0, $.jsxs)($.Fragment, { children: [U, W, K] })),
        (n[78] = U),
        (n[79] = W),
        (n[80] = K),
        (n[81] = J))
      : (J = n[81]),
    J
  );
}
function ht(e) {
  let n = (0, yt.c)(13),
    { automationId: r, source: i, onEdit: a, onShare: s, showShare: c, disabled: l } = e,
    d = c === void 0 || c,
    f = l !== void 0 && l,
    p = t(ee),
    m = ne(),
    h;
  n[0] !== f || n[1] !== a
    ? ((h =
        a == null
          ? null
          : (0, $.jsx)(j.Item, {
              disabled: f,
              leftIconAsset: o,
              onSelect: a,
              children: (0, $.jsx)(N, {
                id: `settings.automations.edit`,
                defaultMessage: `Edit`,
                description: `Menu item for editing a scheduled task`,
              }),
            })),
      (n[0] = f),
      (n[1] = a),
      (n[2] = h))
    : (h = n[2]);
  let g;
  n[3] !== r || n[4] !== m || n[5] !== s || n[6] !== p || n[7] !== d || n[8] !== i
    ? ((g = d
        ? (0, $.jsx)(j.Item, {
            leftIconAsset: S,
            onSelect: () => {
              if (s != null) {
                s();
                return;
              }
              u(K(r, i)).then((e) => {
                e &&
                  p
                    .get(re)
                    .success(
                      m.formatMessage({
                        id: `scheduled.sidebar.linkCopied`,
                        defaultMessage: `Link copied`,
                        description: `Confirmation after copying a link to a scheduled task`,
                      }),
                    );
              });
            },
            children: (0, $.jsx)(N, {
              id: `scheduled.sidebar.share`,
              defaultMessage: `Share`,
              description: `Menu item that copies a link to this scheduled task`,
            }),
          })
        : null),
      (n[3] = r),
      (n[4] = m),
      (n[5] = s),
      (n[6] = p),
      (n[7] = d),
      (n[8] = i),
      (n[9] = g))
    : (g = n[9]);
  let _;
  return (
    n[10] !== h || n[11] !== g
      ? ((_ = (0, $.jsxs)($.Fragment, { children: [h, g] })), (n[10] = h), (n[11] = g), (n[12] = _))
      : (_ = n[12]),
    _
  );
}
function gt(e) {
  let n = (0, yt.c)(34),
    { task: r, onClose: i, navigationSource: a, waitForInitialData: o, onOpen: s } = e,
    c = o !== void 0 && o,
    l = t(ee),
    u = r.source === `cloud` ? r.item.automation.id : null,
    d;
  n[0] !== a || n[1] !== l || n[2] !== u
    ? ((d = () => {
        u != null && U(l, { taskId: u, destination: `editor`, source: a });
      }),
      (n[0] = a),
      (n[1] = l),
      (n[2] = u),
      (n[3] = d))
    : (d = n[3]);
  let f = (0, Q.useEffectEvent)(d),
    p = (0, Q.useRef)(null),
    m;
  n[4] !== f || n[5] !== u || n[6] !== c
    ? ((m = () => {
        !c && u !== p.current && ((p.current = u), f());
      }),
      (n[4] = f),
      (n[5] = u),
      (n[6] = c),
      (n[7] = m))
    : (m = n[7]);
  let h;
  (n[8] !== u || n[9] !== c ? ((h = [u, c]), (n[8] = u), (n[9] = c), (n[10] = h)) : (h = n[10]),
    (0, Q.useEffect)(m, h));
  let g = O(ke),
    _ = te(),
    v;
  n[11] !== g || n[12] !== _.key
    ? ((v = { accountId: g, locationKey: _.key }), (n[11] = g), (n[12] = _.key), (n[13] = v))
    : (v = n[13]);
  let [y] = (0, Q.useState)(v),
    b = (0, Q.useEffectEvent)(i),
    x;
  n[14] !== g || n[15] !== b || n[16] !== _.key || n[17] !== y.accountId || n[18] !== y.locationKey
    ? ((x = () => {
        (g !== y.accountId || _.key !== y.locationKey) && b();
      }),
      (n[14] = g),
      (n[15] = b),
      (n[16] = _.key),
      (n[17] = y.accountId),
      (n[18] = y.locationKey),
      (n[19] = x))
    : (x = n[19]);
  let S;
  (n[20] !== g || n[21] !== _.key || n[22] !== y
    ? ((S = [g, _.key, y]), (n[20] = g), (n[21] = _.key), (n[22] = y), (n[23] = S))
    : (S = n[23]),
    (0, Q.useEffect)(x, S));
  let C;
  return (
    n[24] !== a ||
    n[25] !== i ||
    n[26] !== s ||
    n[27] !== l ||
    n[28] !== r.automation ||
    n[29] !== r.item ||
    n[30] !== r.source ||
    n[31] !== u ||
    n[32] !== c
      ? ((C =
          r.source === `cloud`
            ? (0, $.jsx)(
                Ue,
                {
                  item: r.item,
                  waitForInitialData: c,
                  onOpen: () => {
                    (c &&
                      u !== p.current &&
                      ((p.current = u), u != null && U(l, { taskId: u, destination: `editor`, source: a })),
                      s?.());
                  },
                  onClose: i,
                },
                r.item.automation.id,
              )
            : (0, $.jsx)(at, { automation: r.automation, onClose: i }, r.automation.id)),
        (n[24] = a),
        (n[25] = i),
        (n[26] = s),
        (n[27] = l),
        (n[28] = r.automation),
        (n[29] = r.item),
        (n[30] = r.source),
        (n[31] = u),
        (n[32] = c),
        (n[33] = C))
      : (C = n[33]),
    C
  );
}
function _t(e, t, n) {
  if (it(e.get(q), t, n)) {
    let t = e.get(ke),
      n = e.get(et, t);
    rt(n).includes(`active`) || e.set(et, t, Array.isArray(n) ? [...n, `active`] : `active`);
  }
}
function vt(e) {
  let t = (0, yt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, {
          className: `${ut.actions} ${z} opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[data-state=open]]:opacity-100`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var yt, Q, $, bt, xt, St;
function Ct() {
  return (Ct = e(() => {
    ((yt = h()),
      f(),
      v(),
      b(),
      l(),
      F(),
      E(),
      (Q = a()),
      C(),
      d(),
      Te(),
      Le(),
      Ae(),
      J(),
      Y(),
      _e(),
      H(),
      ge(),
      V(),
      He(),
      ct(),
      Fe(),
      Pe(),
      D(),
      p(),
      x(),
      G(),
      I(),
      n(),
      $e(),
      nt(),
      g(),
      Ce(),
      dt(),
      ($ = c()),
      k(),
      (bt = s({
        id: `scheduled.sidebar.resumeSuccess`,
        defaultMessage: `Successfully resumed automation`,
        description: `Success toast after a Scheduled sidebar automation resume completes`,
      })),
      (xt = s({
        id: `scheduled.sidebar.pauseSuccess`,
        defaultMessage: `Successfully paused automation`,
        description: `Success toast after a Scheduled sidebar automation pause completes`,
      })),
      (St = w({
        update: {
          id: `inbox.automations.updateError`,
          defaultMessage: `Could not update scheduled task`,
          description: `Toast title when updating a scheduled task fails`,
        },
        delete: {
          id: `inbox.automations.deleteError`,
          defaultMessage: `Could not delete scheduled task`,
          description: `Toast title when deleting a scheduled task fails`,
        },
      })));
  }))();
}
export { Ct as i, mt as n, gt as r, ft as t };
//# sourceMappingURL=actions-846c2a8f50e3.js.map
