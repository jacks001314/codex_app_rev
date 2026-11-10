import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  $xt as n,
  AL as r,
  Cot as ee,
  Ext as te,
  Ixt as ne,
  Kat as i,
  Pxt as re,
  Rj as ie,
  VDt as ae,
  Vxt as a,
  _xt as o,
  cmt as oe,
  iot as s,
  jDt as c,
  oSt as l,
  qat as u,
  rmt as se,
  vzt as d,
  wot as f,
  xMt as p,
  yzt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as g,
  $Zt as ce,
  Bcr as le,
  Dbn as ue,
  FEr as _,
  GZt as de,
  Icr as v,
  JLt as fe,
  JZt as y,
  LLt as pe,
  Obn as me,
  PEr as he,
  SZn as ge,
  TEr as _e,
  TQt as b,
  ULt as ve,
  YZt as ye,
  _6n as x,
  __r as be,
  dAn as S,
  ekr as xe,
  fAn as Se,
  fRt as Ce,
  fur as C,
  g6n as we,
  gcr as w,
  lQt as T,
  m_r as E,
  oFr as Te,
  pRt as Ee,
  pZn as De,
  pur as Oe,
  qZt as ke,
  rkr as Ae,
  sCr as D,
  uQt as je,
  v8n as O,
  vEr as Me,
  vcr as Ne,
  wQt as k,
  yCr as A,
  yjn as Pe,
  zLt as Fe,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as Ie } from "./composer-tip-content-68a2df24acda.js";
import { n as Le, t as M } from "./home-beacon-bdd468b02f42.js";
import { n as N, t as Re } from "./catalog-5a8df84ce6bd.js";
function ze(e) {
  let t = (0, Je.c)(57),
    { conversationId: n, enabled: r, isWorkMode: re, onStartVoice: o } = e,
    oe = r === void 0 || r,
    s = ne(ee),
    c = (0, P.useContext)(we),
    l = ae(),
    u = te(),
    se = h(De, n),
    d = h(de, se ?? n),
    f;
  t[0] === d ? (f = t[1]) : ((f = d != null && ce(d.beacon) ? d.beacon : null), (t[0] = d), (t[1] = f));
  let p = f,
    m;
  t[2] === d
    ? (m = t[3])
    : ((m =
        d == null
          ? null
          : { placement: `in_conversation`, productExperience: d.productExperience, treatment: `banner` }),
      (t[2] = d),
      (t[3] = m));
  let g = m,
    ue = h(ge, n),
    _ = a(Qe),
    v;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = { name: `automations.local` }), (t[4] = v))
    : (v = t[4]);
  let y = h(he, v),
    x;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { name: `automations.cloud` }), (t[5] = x))
    : (x = t[5]);
  let S = h(he, x),
    Ce = y.isCapable || S.isCapable,
    { accountId: C, isLoading: w } = Oe(),
    T = a(fe),
    E = C == null ? void 0 : pe(T, C),
    Te =
      !w &&
      T !== void 0 &&
      (E == null ||
        E.dismissed === !0 ||
        E.expired === !0 ||
        !E.items.some(qe) ||
        ve(E, `enable_notifications`)),
    { data: Ee, isLoading: Ae } = a(Ze),
    D;
  t[6] === y.isCapable ? (D = t[7]) : ((D = { enabled: y.isCapable }), (t[6] = y.isCapable), (t[7] = D));
  let { data: O, error: Me, isLoading: k } = a(me, D),
    A;
  t[8] === S.isCapable ? (A = t[9]) : ((A = { enabled: S.isCapable }), (t[8] = S.isCapable), (t[9] = A));
  let { data: Pe, error: Fe, isLoading: j } = a(xe, A),
    M;
  t[10] === _ ? (M = t[11]) : ((M = { hostId: _ }), (t[10] = _), (t[11] = M));
  let { data: N, isLoading: ze } = h(be, M),
    F = N?.roots,
    I;
  t[12] !== _ || t[13] !== F
    ? ((I = { hostId: _, roots: F }), (t[12] = _), (t[13] = F), (t[14] = I))
    : (I = t[14]);
  let { data: $e, isLoading: et } = le(I),
    L = N != null,
    R;
  t[15] === L ? (R = t[16]) : ((R = { enabled: L }), (t[15] = L), (t[16] = R));
  let { skills: z, isLoading: tt } = Se(N?.roots, _, R),
    B = $e == null ? null : $e.filter(Ke),
    nt = B == null ? null : new Set(B.map(Ge)),
    rt = B == null ? null : new Set(B.map(We)),
    it = Ne(Xe),
    at = Array.from(it.values()).some(Ue),
    ot = Array.from(it.values()).some(He),
    st = !w && T !== void 0 && !Ae && !k && !j && !ze && !et && !tt && !ot,
    ct = {
      automationsAvailable: Ce,
      availableSkillNames: new Set(z.filter(Ve).map(Be)),
      browserExtensionInstalled: ot ? null : at,
      connectedPluginNames: nt,
      enabledPluginIds: rt,
      hasAutomations:
        k || j || Me != null || Fe != null ? null : (O?.items.length ?? 0) > 0 || (Pe?.items.length ?? 0) > 0,
      isWorkMode: re,
      notificationOnboardingResolved: Te,
      notificationPermissionStatus: Ee ?? null,
      voiceAvailable: o != null,
    },
    lt = p == null ? null : Re(p.beacon_id),
    V =
      oe &&
      st &&
      p != null &&
      lt?.isEligible(ct) === !0 &&
      (p.ui_info.dismiss_variant === `persistent` ||
        d?.eventMetadata.messageId == null ||
        d.eventMetadata.messageId === ue)
        ? lt
        : null,
    H = V?.id ?? null,
    U = H == null || d == null ? null : `${H}:${d.eventMetadata.conversationId}:${d.eventMetadata.messageId}`,
    W = (0, P.useRef)(null),
    G;
  t[17] !== C || t[18] !== s || t[19] !== p || t[20] !== g || t[21] !== d || t[22] !== n
    ? ((G = () => {
        d != null &&
          p != null &&
          g != null &&
          (Le(s, C ?? n, p, d.eventMetadata) && b(s, { action: `impression`, beacon: p, ...g }),
          b(s, { action: `composer_tip_presented`, beacon: p, ...g }));
      }),
      (t[17] = C),
      (t[18] = s),
      (t[19] = p),
      (t[20] = g),
      (t[21] = d),
      (t[22] = n),
      (t[23] = G))
    : (G = t[23]);
  let K = G,
    q;
  t[24] !== U || t[25] !== K || t[26] !== H
    ? ((q = () => {
        if (U == null || H == null) {
          W.current = null;
          return;
        }
        W.current !== U && ((W.current = U), K());
      }),
      (t[24] = U),
      (t[25] = K),
      (t[26] = H),
      (t[27] = q))
    : (q = t[27]);
  let J = q,
    Y;
  t[28] !== s || t[29] !== c || t[30] !== B || t[31] !== l || t[32] !== u || t[33] !== o || t[34] !== z
    ? ((Y = function (e) {
        switch (e.type) {
          case `prefill`:
            (c?.appendText(l.formatMessage(e.prompt)), c?.focus());
            return;
          case `prefill-with-skill`: {
            let t = z.find((t) => {
              let { enabled: n, name: r } = t;
              return n && r.toLowerCase() === e.skillName;
            });
            if (c == null || t == null) return;
            (c.appendText(l.formatMessage(e.prompt)),
              c.insertTextAtSelection(` `),
              c.insertSkillMentionAtSelection(t),
              c.focus());
            return;
          }
          case `prefill-with-plugin`: {
            let t = B?.find((t) => {
              let { plugin: n } = t,
                { id: r } = n;
              return r === e.pluginId;
            });
            if (c == null || t == null) return;
            (c.appendText(l.formatMessage(e.prompt)),
              c.insertTextAtSelection(` `),
              c.insertMentionAtSelection(ie(t)),
              c.focus());
            return;
          }
          case `navigate`:
            u(e.path, { state: e.state });
            return;
          case `new-chat`:
            u(`/`);
            return;
          case `open-notification-settings`:
            i.systemPermissions?.openNotificationSettings();
            return;
          case `start-voice`:
            o?.();
            return;
          case `switch-to-work`:
            (_e(s, `work`), u(`/`));
            return;
        }
      }),
      (t[28] = s),
      (t[29] = c),
      (t[30] = B),
      (t[31] = l),
      (t[32] = u),
      (t[33] = o),
      (t[34] = z),
      (t[35] = Y))
    : (Y = t[35]);
  let X = Y;
  if (V == null || d == null || p == null || g == null) return null;
  let Z;
  t[36] !== s || t[37] !== p || t[38] !== g || t[39] !== d || t[40] !== n
    ? ((Z = () => {
        (b(s, { action: `dismiss`, beacon: p, ...g }), ke(s, n, d));
      }),
      (t[36] = s),
      (t[37] = p),
      (t[38] = g),
      (t[39] = d),
      (t[40] = n),
      (t[41] = Z))
    : (Z = t[41]);
  let Q;
  t[42] !== s ||
  t[43] !== p ||
  t[44] !== g ||
  t[45] !== d ||
  t[46] !== n ||
  t[47] !== X ||
  t[48] !== V.action ||
  t[49] !== V.id
    ? ((Q = () => {
        let e =
          p.action_items.find((e) => {
            let { id: t } = e;
            return t === V.id;
          }) ?? p.action_items[0];
        (b(s, {
          action: `click`,
          actionId: V.id,
          actionType: e?.type ?? `primary`,
          beacon: p,
          destinationAction: e?.action_v2.action_enum,
          ...g,
        }),
          je({ beacon: p, eventType: `click`, eventCtaId: V.id, metadata: d.eventMetadata }),
          ye(s, n, d),
          X(V.action));
      }),
      (t[42] = s),
      (t[43] = p),
      (t[44] = g),
      (t[45] = d),
      (t[46] = n),
      (t[47] = X),
      (t[48] = V.action),
      (t[49] = V.id),
      (t[50] = Q))
    : (Q = t[50]);
  let $;
  return (
    t[51] !== U || t[52] !== J || t[53] !== Z || t[54] !== Q || t[55] !== V
      ? (($ = (0, Ye.jsx)(Ie, { impressionId: U, onShown: J, tip: V, onDismiss: Z, onPrimaryAction: Q })),
        (t[51] = U),
        (t[52] = J),
        (t[53] = Z),
        (t[54] = Q),
        (t[55] = V),
        (t[56] = $))
      : ($ = t[56]),
    $
  );
}
function Be(e) {
  let { name: t } = e;
  return t.toLowerCase();
}
function Ve(e) {
  let { enabled: t } = e;
  return t;
}
function He(e) {
  let { isLoading: t } = e;
  return t;
}
function Ue(e) {
  let { isInstalled: t } = e;
  return t;
}
function We(e) {
  let { plugin: t } = e;
  return t.id;
}
function Ge(e) {
  let { plugin: t } = e;
  return t.name;
}
function Ke(e) {
  let { plugin: t } = e;
  return t.installed && t.enabled;
}
function qe(e) {
  return e.id === `enable_notifications` && Ee(e);
}
var Je, P, Ye, Xe, Ze, Qe;
function F() {
  return (F = e(() => {
    ((Je = d()),
      r(),
      re(),
      (P = m()),
      c(),
      o(),
      j(),
      M(),
      _(),
      O(),
      C(),
      ue(),
      Ae(),
      T(),
      k(),
      y(),
      Pe(),
      N(),
      Me(),
      t(),
      x(),
      Ce(),
      Fe(),
      w(),
      v(),
      u(),
      f(),
      A(),
      E(),
      Te(),
      S(),
      (Ye = p()),
      (Xe = Object.keys(se)
        .filter(oe)
        .map((e) => ({ browserFamily: e }))),
      (Ze = n(ee, () => ({
        enabled: i.systemPermissions != null,
        queryKey: [`composer-tips`, `notification-permission-status`],
        queryFn: async () => (await i.systemPermissions?.getNotificationPermissionStatus()) ?? null,
        refetchOnWindowFocus: `always`,
        staleTime: 0,
      }))),
      (Qe = l(D, ({ get: e, scope: t }) => (t.value.kind === `local` ? e(g, t.value.conversationId) : s))));
  }))();
}
F();
export { ze as useComposerTip };
//# sourceMappingURL=composer-tip-337f8309d57e.js.map
