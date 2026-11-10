const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./conversation-share-flow-ef7aeb501e38.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  AO as n,
  BZ as r,
  C as i,
  Cot as ee,
  Ext as a,
  HQ as o,
  IDt as s,
  Ixt as te,
  Mz as c,
  Nz as l,
  Pxt as u,
  TO as d,
  VDt as f,
  VQ as p,
  Vxt as m,
  _xt as h,
  fPt as g,
  hot as _,
  iO as v,
  iot as y,
  irt as b,
  jDt as x,
  kDt as S,
  lot as C,
  lrt as w,
  nst as ne,
  nxt as T,
  pPt as E,
  rO as D,
  rst as O,
  srt as k,
  tst as A,
  vzt as j,
  w as M,
  wot as N,
  wxt as P,
  xMt as F,
  yzt as I,
  zZ as L,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bjr as z,
  CAr as re,
  FFr as B,
  GMr as V,
  H$ as H,
  Hjr as U,
  Ijr as ie,
  MT as W,
  NAr as ae,
  PAr as G,
  QAr as K,
  QDr as oe,
  RAr as se,
  Ujr as ce,
  W$ as q,
  Wjr as J,
  XDr as Y,
  aAr as le,
  aC as X,
  bAr as ue,
  eOr as de,
  ejr as fe,
  h3n as pe,
  jT as me,
  kAr as he,
  lAr as ge,
  oFr as _e,
  p3n as ve,
  rC as ye,
  tAr as be,
  tNr as xe,
  vCt as Se,
  wAr as Ce,
  yCt as we,
  zFr as Te,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ee, t as De } from "./automation-delete-confirmation-dialog-c8c0c59ec586.js";
import { n as Oe, r as ke, t as Ae } from "./run-now-49b74db2bf75.js";
import { r as je, t as Me } from "./menu-items-18cfbf2a8c48.js";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./automation-submit-tooltip-b87f67f502e6.js";
import { a as Le, i as Re, n as ze, o as Be, r as Ve, t as He } from "./editor-dialog-3a3a3a778e99.js";
import {
  f as Ue,
  n as We,
  o as Ge,
  p as Ke,
  s as qe,
  t as Je,
} from "./configuration-schedule-48b79a5c9f8a.js";
import { _ as Ye, d as Xe, m as Ze, n as Qe, p as $e, v as et } from "./state-caaaa75ceb81.js";
function tt(e) {
  let t = (0, rt.c)(72),
    { automation: n, onClose: r } = e,
    i = te(ee),
    a = f(),
    o = ne(),
    s = (0, it.useContext)(T),
    c;
  t[0] === n ? (c = t[1]) : ((c = () => ue(n)), (t[0] = n), (t[1] = c));
  let [l] = (0, it.useState)(c),
    [u, d] = (0, it.useState)(l),
    p;
  t[2] !== n || t[3] !== l
    ? ((p = { automation: n, draft: l }), (t[2] = n), (t[3] = l), (t[4] = p))
    : (p = t[4]);
  let [m, h] = (0, it.useState)(p),
    [g, v] = (0, it.useState)(!1),
    [x, S] = (0, it.useState)(!1),
    C;
  t[5] !== u || t[6] !== m.draft
    ? ((C = ae(u, m.draft)), (t[5] = u), (t[6] = m.draft), (t[7] = C))
    : (C = t[7]);
  let E = C,
    D = u.name !== m.draft.name || u.prompt !== m.draft.prompt,
    O;
  t[8] === u ? (O = t[9]) : ((O = he(u)), (t[8] = u), (t[9] = O));
  let { trimmedName: k, trimmedPrompt: A, canSave: j } = O,
    M = j && E && u.status !== `DELETED`,
    N;
  t[10] !== n || t[11] !== i
    ? ((N = async () => {
        if (n.kind !== `cron` || n.pluginTemplateId == null) return;
        let e = await i.query
          .getOrFetch(me, { hostId: y, pluginTemplateId: n.pluginTemplateId, roots: n.cwds })
          .catch(nt);
        return e == null ? void 0 : [e];
      }),
      (t[10] = n),
      (t[11] = i),
      (t[12] = N))
    : (N = t[12]);
  let P = N,
    F;
  t[13] !== P || t[14] !== o || t[15] !== i
    ? ((F = (e) => {
        let { item: t } = e;
        (P().then((e) =>
          fe(
            i.get(de),
            {
              action: ie.CODEX_AUTOMATION_ACTION_UPDATED,
              source: U.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: !0,
            },
            t,
            e,
          ),
        ),
          o.setQueryData(b(`list-automations`), (e) =>
            e == null ? e : { items: e.items.map((e) => (e.id === t.id ? t : e)) },
          ),
          o.invalidateQueries({ queryKey: b(`list-automations`) }),
          oe(i, ce, {}));
      }),
      (t[13] = P),
      (t[14] = o),
      (t[15] = i),
      (t[16] = F))
    : (F = t[16]);
  let I;
  t[17] !== n || t[18] !== P || t[19] !== a || t[20] !== i
    ? ((I = (e, t) => {
        (P().then((r) =>
          fe(
            i.get(de),
            {
              action: ie.CODEX_AUTOMATION_ACTION_UPDATED,
              source: U.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: !1,
              failureReason:
                e.message ===
                `Automation does not exist in the app and could not be updated. It may have been deleted manually by the user.`
                  ? z.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                  : z.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
            },
            t,
            r,
            n,
          ),
        ),
          i
            .get(_)
            .danger(
              a.formatMessage({
                id: `inbox.automations.updateError`,
                defaultMessage: `Could not update scheduled task`,
                description: `Toast title when updating a scheduled task fails`,
              }),
              { description: e.message, errorAnalytics: { toastId: `inbox.automations.updateError` } },
            ));
      }),
      (t[17] = n),
      (t[18] = P),
      (t[19] = a),
      (t[20] = i),
      (t[21] = I))
    : (I = t[21]);
  let L;
  t[22] !== F || t[23] !== I
    ? ((L = { onSuccess: F, onError: I }), (t[22] = F), (t[23] = I), (t[24] = L))
    : (L = t[24]);
  let R = w(`automation-update`, L),
    B = R.isPending || g,
    V;
  t[25] !== M || t[26] !== u || t[27] !== B || t[28] !== r || t[29] !== k || t[30] !== A || t[31] !== R
    ? ((V = () => {
        !B &&
          M &&
          R.mutate(Ce({ draft: u, name: k, prompt: A, status: u.status, rrule: se(u) }), { onSuccess: r });
      }),
      (t[25] = M),
      (t[26] = u),
      (t[27] = B),
      (t[28] = r),
      (t[29] = k),
      (t[30] = A),
      (t[31] = R),
      (t[32] = V))
    : (V = t[32]);
  let H = V,
    W;
  t[33] === H
    ? (W = t[34])
    : ((W = (e) => {
        (e.preventDefault(), H());
      }),
      (t[33] = H),
      (t[34] = W));
  let G;
  t[35] !== D || t[36] !== r
    ? ((G = () => {
        D ? S(!0) : r();
      }),
      (t[35] = D),
      (t[36] = r),
      (t[37] = G))
    : (G = t[37]);
  let K = R.isPending && !g,
    q;
  t[38] !== g || t[39] !== B || t[40] !== m.automation || t[41] !== R
    ? ((q =
        m.automation.status === `DELETED`
          ? void 0
          : (0, Z.jsx)(Le, {
              isPaused: m.automation.status === `PAUSED`,
              isPending: g,
              disabled: B,
              onClick: () => {
                B ||
                  (v(!0),
                  R.mutate(re(m.automation, m.automation.status === `PAUSED` ? `ACTIVE` : `PAUSED`), {
                    onSuccess: (e) => {
                      let { item: t } = e;
                      (h((e) => ({ automation: t, draft: { ...e.draft, status: t.status } })),
                        d((e) => ({ ...e, status: t.status })));
                    },
                    onSettled: () => v(!1),
                  }));
              },
            })),
      (t[38] = g),
      (t[39] = B),
      (t[40] = m.automation),
      (t[41] = R),
      (t[42] = q))
    : (q = t[42]);
  let J;
  t[43] !== u || t[44] !== j
    ? ((J = j ? void 0 : (0, Z.jsx)(Ie, { draft: u })), (t[43] = u), (t[44] = j), (t[45] = J))
    : (J = t[45]);
  let Y, le;
  t[46] === u
    ? ((Y = t[47]), (le = t[48]))
    : ((Y = (0, Z.jsx)(Je, { personal: !0, draft: u, onChange: d, executionLocation: `local` })),
      (le = (0, Z.jsx)(Ue, { draft: u, setDraft: d, executionLocation: `local` })),
      (t[46] = u),
      (t[47] = Y),
      (t[48] = le));
  let X;
  t[49] !== M ||
  t[50] !== u ||
  t[51] !== g ||
  t[52] !== W ||
  t[53] !== G ||
  t[54] !== K ||
  t[55] !== q ||
  t[56] !== J ||
  t[57] !== Y ||
  t[58] !== le
    ? ((X = (0, Z.jsx)(Ge, {
        executionLocation: `local`,
        draft: u,
        onChange: d,
        onSubmit: W,
        onClose: G,
        canSave: M,
        isSaving: K,
        isChangingStatus: g,
        statusAction: q,
        submitTooltip: J,
        schedule: Y,
        advanced: le,
      })),
      (t[49] = M),
      (t[50] = u),
      (t[51] = g),
      (t[52] = W),
      (t[53] = G),
      (t[54] = K),
      (t[55] = q),
      (t[56] = J),
      (t[57] = Y),
      (t[58] = le),
      (t[59] = X))
    : (X = t[59]);
  let pe;
  t[60] !== s || t[61] !== D || t[62] !== B
    ? ((pe = s == null ? null : (0, Z.jsx)(Ve, { isPending: B, shouldBlock: () => D || B })),
      (t[60] = s),
      (t[61] = D),
      (t[62] = B),
      (t[63] = pe))
    : (pe = t[63]);
  let ge;
  t[64] !== B || t[65] !== r || t[66] !== x
    ? ((ge = x ? (0, Z.jsx)(He, { isPending: B, onKeepEditing: () => S(!1), onDiscard: r }) : null),
      (t[64] = B),
      (t[65] = r),
      (t[66] = x),
      (t[67] = ge))
    : (ge = t[67]);
  let _e;
  return (
    t[68] !== X || t[69] !== pe || t[70] !== ge
      ? ((_e = (0, Z.jsxs)(Z.Fragment, { children: [X, pe, ge] })),
        (t[68] = X),
        (t[69] = pe),
        (t[70] = ge),
        (t[71] = _e))
      : (_e = t[71]),
    _e
  );
}
function nt() {
  return null;
}
var rt, it, Z;
function at() {
  return (at = e(() => {
    ((rt = j()),
      J(),
      A(),
      u(),
      O(),
      (it = I()),
      x(),
      h(),
      W(),
      K(),
      G(),
      Pe(),
      Re(),
      C(),
      Y(),
      N(),
      _e(),
      k(),
      Ke(),
      qe(),
      We(),
      Be(),
      (Z = F()));
  }))();
}
var ot, st;
function ct() {
  return (ct = e(() => {
    ((ot = `_actions_pdigv_1`), (st = { actions: ot }));
  }))();
}
function lt(e) {
  let t = (0, gt.c)(48),
    { item: n, onMenuOpenChange: r } = e,
    o = te(ee),
    s = f(),
    l = a(),
    u = P().key,
    [d, p] = (0, Q.useState)(null);
  d != null && d !== u && p(null);
  let m;
  t[0] === n.automation
    ? (m = t[1])
    : ((m = be(n.automation).canManage && le(n.automation) !== `completed`),
      (t[0] = n.automation),
      (t[1] = m));
  let h = m,
    g = R(Oe, n.automation.id),
    v;
  t[2] === n.automation
    ? (v = t[3])
    : ((v = be(n.automation).canManage && n.automation.executor !== `local`),
      (t[2] = n.automation),
      (t[3] = v));
  let y = v,
    b;
  t[4] !== y || t[5] !== n || t[6] !== l || t[7] !== g
    ? ((b = y ? () => g.mutateAsync({ item: n, navigate: l }) : void 0),
      (t[4] = y),
      (t[5] = n),
      (t[6] = l),
      (t[7] = g),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(c, { asset: i })), (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { contentWidth: `menu` }), (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] !== s || t[12] !== o
    ? ((C = () => o.get(_).success(s.formatMessage(vt))), (t[11] = s), (t[12] = o), (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== s || t[15] !== n.automation.id || t[16] !== o
    ? ((w = () => {
        (o.get(_).success(s.formatMessage(_t)), mt(o, n.automation.id, `cloud`));
      }),
      (t[14] = s),
      (t[15] = n.automation.id),
      (t[16] = o),
      (t[17] = w))
    : (w = t[17]);
  let ne;
  t[18] !== n.automation.id || t[19] !== l || t[20] !== o
    ? ((ne = () => Ze(o.get(B), l, n.automation.id, `cloud`)),
      (t[18] = n.automation.id),
      (t[19] = l),
      (t[20] = o),
      (t[21] = ne))
    : (ne = t[21]);
  let T;
  t[22] !== h || t[23] !== u
    ? ((T = h ? () => p(u) : void 0), (t[22] = h), (t[23] = u), (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] !== n.automation.id || t[26] !== T
    ? ((E = (0, $.jsx)(ft, { automationId: n.automation.id, source: `cloud`, onEdit: T, showShare: !1 })),
      (t[25] = n.automation.id),
      (t[26] = T),
      (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] !== n || t[29] !== o
    ? ((D =
        n.teamId == null
          ? (0, $.jsx)(ft, {
              automationId: n.automation.id,
              source: `cloud`,
              onShare:
                n.automation.conversation_id == null
                  ? void 0
                  : () => {
                      ut(o, n);
                    },
            })
          : null),
      (t[28] = n),
      (t[29] = o),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== n ||
  t[32] !== r ||
  t[33] !== g.isPending ||
  t[34] !== E ||
  t[35] !== D ||
  t[36] !== b ||
  t[37] !== C ||
  t[38] !== w ||
  t[39] !== ne
    ? ((O = (0, $.jsx)(ht, {
        children: (0, $.jsx)(Me, {
          item: n,
          isRunNowPending: g.isPending,
          onRunNow: void 0,
          onRunNowAsync: b,
          runNowIcon: x,
          onMenuOpenChange: r,
          statusFirst: !0,
          menuProps: S,
          onPaused: C,
          onResumed: w,
          onDeleted: ne,
          additionalMenuItems: E,
          shareMenuItem: D,
        }),
      })),
      (t[31] = n),
      (t[32] = r),
      (t[33] = g.isPending),
      (t[34] = E),
      (t[35] = D),
      (t[36] = b),
      (t[37] = C),
      (t[38] = w),
      (t[39] = ne),
      (t[40] = O))
    : (O = t[40]);
  let k;
  t[41] !== d || t[42] !== n || t[43] !== u
    ? ((k =
        d === u
          ? (0, $.jsx)(pt, {
              task: { source: `cloud`, item: n },
              navigationSource: `scheduled_page`,
              onClose: () => p(null),
            })
          : null),
      (t[41] = d),
      (t[42] = n),
      (t[43] = u),
      (t[44] = k))
    : (k = t[44]);
  let A;
  return (
    t[45] !== O || t[46] !== k
      ? ((A = (0, $.jsxs)($.Fragment, { children: [O, k] })), (t[45] = O), (t[46] = k), (t[47] = A))
      : (A = t[47]),
    A
  );
}
async function ut(e, t) {
  let n = t.automation.conversation_id;
  if (n == null) return;
  let { shareChatGptProjectConversation: r } = await g(
    async () => {
      let { shareChatGptProjectConversation: e } = await import(`./conversation-share-flow-ef7aeb501e38.js`);
      return { shareChatGptProjectConversation: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  try {
    if ((await r(e, n, t.automation.title, null)) !== `unavailable`) return;
  } catch {}
  await D(ve(t.automation.id, `cloud`));
}
function dt(e) {
  let t = (0, gt.c)(82),
    { automation: n, onMenuOpenChange: r } = e,
    o = te(ee),
    s = f(),
    l = ne(),
    u = a(),
    d = we(),
    p = P().key,
    [m, h] = (0, Q.useState)(null);
  m != null && m !== p && h(null);
  let [g, v] = (0, Q.useState)(!1),
    y;
  t[0] !== s || t[1] !== o
    ? ((y = (e, t) => {
        o.get(_).danger(s.formatMessage(yt[e]), { description: t, errorAnalytics: { toastId: yt[e].id } });
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = y))
    : (y = t[2]);
  let x = y,
    S;
  t[3] !== s || t[4] !== r || t[5] !== l || t[6] !== o
    ? ((S = (e) => {
        let { item: t } = e;
        (l.setQueryData(b(`list-automations`), (e) =>
          e == null ? e : { items: e.items.map((e) => (e.id === t.id ? t : e)) },
        ),
          l.invalidateQueries({ queryKey: b(`list-automations`) }),
          r(!1),
          t.status === `PAUSED` && o.get(_).success(s.formatMessage(vt)),
          t.status === `ACTIVE` && (o.get(_).success(s.formatMessage(_t)), mt(o, t.id, `local`)));
      }),
      (t[3] = s),
      (t[4] = r),
      (t[5] = l),
      (t[6] = o),
      (t[7] = S))
    : (S = t[7]);
  let C;
  t[8] === x ? (C = t[9]) : ((C = (e) => x(`update`, e.message)), (t[8] = x), (t[9] = C));
  let T;
  t[10] !== S || t[11] !== C
    ? ((T = { onSuccess: S, onError: C }), (t[10] = S), (t[11] = C), (t[12] = T))
    : (T = t[12]);
  let E = w(`automation-update`, T),
    D = R(ke, n.id),
    O;
  t[13] !== n.id || t[14] !== u || t[15] !== l || t[16] !== o || t[17] !== x
    ? ((O = (e) => {
        let { success: t } = e;
        if (!t) {
          x(`delete`);
          return;
        }
        (v(!1),
          Ze(o.get(B), u, n.id, `local`),
          l.setQueryData(b(`list-automations`), (e) =>
            e == null
              ? e
              : {
                  items: e.items.filter((e) => {
                    let { id: t } = e;
                    return t !== n.id;
                  }),
                },
          ),
          l.invalidateQueries({ queryKey: b(`list-automations`) }));
      }),
      (t[13] = n.id),
      (t[14] = u),
      (t[15] = l),
      (t[16] = o),
      (t[17] = x),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] === x ? (k = t[20]) : ((k = (e) => x(`delete`, e.message)), (t[19] = x), (t[20] = k));
  let A;
  t[21] !== O || t[22] !== k
    ? ((A = { onSuccess: O, onError: k }), (t[21] = O), (t[22] = k), (t[23] = A))
    : (A = t[23]);
  let j = w(`automation-delete`, A),
    M = E.isPending || D.isPending || j.isPending,
    N;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = { contentWidth: `menu` }), (t[24] = N))
    : (N = t[24]);
  let F = n.status === `PAUSED`,
    I;
  t[25] !== n || t[26] !== E
    ? ((I = () => E.mutate(re(n, `PAUSED`))), (t[25] = n), (t[26] = E), (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] !== M || t[29] !== I
    ? ((L = { disabled: M, onSelect: I }), (t[28] = M), (t[29] = I), (t[30] = L))
    : (L = t[30]);
  let z;
  t[31] !== n || t[32] !== E
    ? ((z = () => E.mutate(re(n, `ACTIVE`))), (t[31] = n), (t[32] = E), (t[33] = z))
    : (z = t[33]);
  let V;
  t[34] !== M || t[35] !== z
    ? ((V = { disabled: M, onSelect: z }), (t[34] = M), (t[35] = z), (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] !== n || t[38] !== p || t[39] !== d || t[40] !== D
    ? ((H = async () => {
        await D.mutateAsync({ automation: n, navigateToLocalConversation: d, locationKey: p });
      }),
      (t[37] = n),
      (t[38] = p),
      (t[39] = d),
      (t[40] = D),
      (t[41] = H))
    : (H = t[41]);
  let U;
  t[42] !== M || t[43] !== D.isPending || t[44] !== H
    ? ((U = { disabled: M, isPending: D.isPending, onSelectAsync: H }),
      (t[42] = M),
      (t[43] = D.isPending),
      (t[44] = H),
      (t[45] = U))
    : (U = t[45]);
  let ie;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, $.jsx)(c, { asset: i })), (t[46] = ie))
    : (ie = t[46]);
  let W;
  t[47] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = () => v(!0)), (t[47] = W)) : (W = t[47]);
  let ae;
  t[48] === M ? (ae = t[49]) : ((ae = { disabled: M, onSelect: W }), (t[48] = M), (t[49] = ae));
  let G;
  t[50] === p ? (G = t[51]) : ((G = () => h(p)), (t[50] = p), (t[51] = G));
  let K;
  t[52] !== n.id || t[53] !== M || t[54] !== G
    ? ((K = (0, $.jsx)(ft, { automationId: n.id, source: `local`, onEdit: G, disabled: M })),
      (t[52] = n.id),
      (t[53] = M),
      (t[54] = G),
      (t[55] = K))
    : (K = t[55]);
  let oe;
  t[56] !== r ||
  t[57] !== L ||
  t[58] !== V ||
  t[59] !== U ||
  t[60] !== ae ||
  t[61] !== K ||
  t[62] !== F ||
  t[63] !== E.isPending
    ? ((oe = (0, $.jsx)(ht, {
        children: (0, $.jsx)(Fe, {
          statusFirst: !0,
          menuProps: N,
          pauseResumeInMenu: !0,
          isPaused: F,
          isStatusPending: E.isPending,
          onMenuOpenChange: r,
          pauseAction: L,
          resumeAction: V,
          runNowAction: U,
          runNowIcon: ie,
          deleteAction: ae,
          additionalMenuItems: K,
        }),
      })),
      (t[56] = r),
      (t[57] = L),
      (t[58] = V),
      (t[59] = U),
      (t[60] = ae),
      (t[61] = K),
      (t[62] = F),
      (t[63] = E.isPending),
      (t[64] = oe))
    : (oe = t[64]);
  let se;
  t[65] !== n || t[66] !== m || t[67] !== p
    ? ((se =
        m === p
          ? (0, $.jsx)(pt, { task: { source: `local`, automation: n }, onClose: () => h(null) })
          : null),
      (t[65] = n),
      (t[66] = m),
      (t[67] = p),
      (t[68] = se))
    : (se = t[68]);
  let ce;
  t[69] === Symbol.for(`react.memo_cache_sentinel`) ? ((ce = () => v(!1)), (t[69] = ce)) : (ce = t[69]);
  let q;
  t[70] !== n.id || t[71] !== j
    ? ((q = () => {
        j.isPending || j.mutate({ id: n.id });
      }),
      (t[70] = n.id),
      (t[71] = j),
      (t[72] = q))
    : (q = t[72]);
  let J;
  t[73] !== n.name || t[74] !== j.isPending || t[75] !== g || t[76] !== q
    ? ((J = (0, $.jsx)(De, { open: g, isPending: j.isPending, name: n.name, onCancel: ce, onConfirm: q })),
      (t[73] = n.name),
      (t[74] = j.isPending),
      (t[75] = g),
      (t[76] = q),
      (t[77] = J))
    : (J = t[77]);
  let Y;
  return (
    t[78] !== oe || t[79] !== se || t[80] !== J
      ? ((Y = (0, $.jsxs)($.Fragment, { children: [oe, se, J] })),
        (t[78] = oe),
        (t[79] = se),
        (t[80] = J),
        (t[81] = Y))
      : (Y = t[81]),
    Y
  );
}
function ft(e) {
  let t = (0, gt.c)(13),
    { automationId: n, source: i, onEdit: a, onShare: c, showShare: l, disabled: u } = e,
    p = l === void 0 || l,
    m = u !== void 0 && u,
    h = te(ee),
    g = f(),
    v;
  t[0] !== m || t[1] !== a
    ? ((v =
        a == null
          ? null
          : (0, $.jsx)(d.Item, {
              disabled: m,
              leftIconAsset: r,
              onSelect: a,
              children: (0, $.jsx)(s, {
                id: `settings.automations.edit`,
                defaultMessage: `Edit`,
                description: `Menu item for editing a scheduled task`,
              }),
            })),
      (t[0] = m),
      (t[1] = a),
      (t[2] = v))
    : (v = t[2]);
  let y;
  t[3] !== n || t[4] !== g || t[5] !== c || t[6] !== h || t[7] !== p || t[8] !== i
    ? ((y = p
        ? (0, $.jsx)(d.Item, {
            leftIconAsset: o,
            onSelect: () => {
              if (c != null) {
                c();
                return;
              }
              D(ve(n, i)).then((e) => {
                e &&
                  h
                    .get(_)
                    .success(
                      g.formatMessage({
                        id: `scheduled.sidebar.linkCopied`,
                        defaultMessage: `Link copied`,
                        description: `Confirmation after copying a link to a scheduled task`,
                      }),
                    );
              });
            },
            children: (0, $.jsx)(s, {
              id: `scheduled.sidebar.share`,
              defaultMessage: `Share`,
              description: `Menu item that copies a link to this scheduled task`,
            }),
          })
        : null),
      (t[3] = n),
      (t[4] = g),
      (t[5] = c),
      (t[6] = h),
      (t[7] = p),
      (t[8] = i),
      (t[9] = y))
    : (y = t[9]);
  let b;
  return (
    t[10] !== v || t[11] !== y
      ? ((b = (0, $.jsxs)($.Fragment, { children: [v, y] })), (t[10] = v), (t[11] = y), (t[12] = b))
      : (b = t[12]),
    b
  );
}
function pt(e) {
  let t = (0, gt.c)(34),
    { task: n, onClose: r, navigationSource: i, waitForInitialData: a, onOpen: o } = e,
    s = a !== void 0 && a,
    c = te(ee),
    l = n.source === `cloud` ? n.item.automation.id : null,
    u;
  t[0] !== i || t[1] !== c || t[2] !== l
    ? ((u = () => {
        l != null && X(c, { taskId: l, destination: `editor`, source: i });
      }),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d = (0, Q.useEffectEvent)(u),
    f = (0, Q.useRef)(null),
    p;
  t[4] !== d || t[5] !== l || t[6] !== s
    ? ((p = () => {
        !s && l !== f.current && ((f.current = l), d());
      }),
      (t[4] = d),
      (t[5] = l),
      (t[6] = s),
      (t[7] = p))
    : (p = t[7]);
  let h;
  (t[8] !== l || t[9] !== s ? ((h = [l, s]), (t[8] = l), (t[9] = s), (t[10] = h)) : (h = t[10]),
    (0, Q.useEffect)(p, h));
  let g = m(V),
    _ = P(),
    v;
  t[11] !== g || t[12] !== _.key
    ? ((v = { accountId: g, locationKey: _.key }), (t[11] = g), (t[12] = _.key), (t[13] = v))
    : (v = t[13]);
  let [y] = (0, Q.useState)(v),
    b = (0, Q.useEffectEvent)(r),
    x;
  t[14] !== g || t[15] !== b || t[16] !== _.key || t[17] !== y.accountId || t[18] !== y.locationKey
    ? ((x = () => {
        (g !== y.accountId || _.key !== y.locationKey) && b();
      }),
      (t[14] = g),
      (t[15] = b),
      (t[16] = _.key),
      (t[17] = y.accountId),
      (t[18] = y.locationKey),
      (t[19] = x))
    : (x = t[19]);
  let S;
  (t[20] !== g || t[21] !== _.key || t[22] !== y
    ? ((S = [g, _.key, y]), (t[20] = g), (t[21] = _.key), (t[22] = y), (t[23] = S))
    : (S = t[23]),
    (0, Q.useEffect)(x, S));
  let C;
  return (
    t[24] !== i ||
    t[25] !== r ||
    t[26] !== o ||
    t[27] !== c ||
    t[28] !== n.automation ||
    t[29] !== n.item ||
    t[30] !== n.source ||
    t[31] !== l ||
    t[32] !== s
      ? ((C =
          n.source === `cloud`
            ? (0, $.jsx)(
                ze,
                {
                  item: n.item,
                  waitForInitialData: s,
                  onOpen: () => {
                    (s &&
                      l !== f.current &&
                      ((f.current = l), l != null && X(c, { taskId: l, destination: `editor`, source: i })),
                      o?.());
                  },
                  onClose: r,
                },
                n.item.automation.id,
              )
            : (0, $.jsx)(tt, { automation: n.automation, onClose: r }, n.automation.id)),
        (t[24] = i),
        (t[25] = r),
        (t[26] = o),
        (t[27] = c),
        (t[28] = n.automation),
        (t[29] = n.item),
        (t[30] = n.source),
        (t[31] = l),
        (t[32] = s),
        (t[33] = C))
      : (C = t[33]),
    C
  );
}
function mt(e, t, n) {
  if (et(e.get(B), t, n)) {
    let t = e.get(V),
      n = e.get(Xe, t);
    $e(n).includes(`active`) || e.set(Xe, t, Array.isArray(n) ? [...n, `active`] : `active`);
  }
}
function ht(e) {
  let t = (0, gt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`div`, {
          className: `${st.actions} ${H} opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-has-[:focus-visible]:opacity-100 has-[[data-state=open]]:opacity-100`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var gt, Q, $, _t, vt, yt;
function bt() {
  return (bt = e(() => {
    ((gt = j()),
      M(),
      p(),
      L(),
      A(),
      u(),
      (Q = I()),
      x(),
      h(),
      xe(),
      Ne(),
      Ee(),
      pe(),
      G(),
      ge(),
      ye(),
      Re(),
      at(),
      je(),
      Ae(),
      n(),
      l(),
      C(),
      q(),
      Te(),
      N(),
      Ye(),
      Qe(),
      v(),
      Se(),
      k(),
      ct(),
      ($ = F()),
      E(),
      (_t = S({
        id: `scheduled.sidebar.resumeSuccess`,
        defaultMessage: `Successfully resumed automation`,
        description: `Success toast after a Scheduled sidebar automation resume completes`,
      })),
      (vt = S({
        id: `scheduled.sidebar.pauseSuccess`,
        defaultMessage: `Successfully paused automation`,
        description: `Success toast after a Scheduled sidebar automation pause completes`,
      })),
      (yt = t({
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
export { bt as i, dt as n, pt as r, lt as t };
//# sourceMappingURL=actions-cdf7b478f39a.js.map
