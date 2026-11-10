import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  Cht as i,
  DM as ee,
  FBt as te,
  HM as a,
  LNt as ne,
  NSt as o,
  PBt as s,
  Qst as re,
  USt as ie,
  XOt as c,
  Yst as l,
  ZSt as ae,
  ast as u,
  gCt as d,
  iCt as f,
  ist as p,
  nCt as m,
  okt as oe,
  vht as h,
  yR as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $7n as se,
  B1n as ce,
  BQt as le,
  CDr as _,
  DNr as ue,
  FDr as v,
  Fer as y,
  HQt as de,
  IAr as b,
  JQt as fe,
  KBr as x,
  KPt as S,
  NNn as pe,
  PNn as me,
  RCn as C,
  Tfr as w,
  UAr as he,
  UQt as T,
  VPn as E,
  WPt as ge,
  WQt as _e,
  XPt as ve,
  Y1n as ye,
  a$t as be,
  afr as xe,
  b$t as D,
  bFt as Se,
  e9n as Ce,
  eer as O,
  fxr as we,
  hxr as Te,
  i$t as Ee,
  imr as De,
  kfr as Oe,
  njr as k,
  rmr as A,
  sfr as ke,
  tFt as Ae,
  tjr as je,
  wNr as Me,
  y$t as Ne,
  yFt as Pe,
  zCn as Fe,
} from "./app-initial-ad16eaadf81f.js";
import { n as j, t as Ie } from "./composer-tip-content-c6dc1cc08caf.js";
import { n as Le, t as M } from "./home-beacon-b81b49ffbe31.js";
import { n as N, t as Re } from "./catalog-ec2e6d4dcac5.js";
function ze(e) {
  let n = (0, Je.c)(57),
    { conversationId: r, enabled: i, isWorkMode: te, onStartVoice: a } = e,
    ne = i === void 0 || i,
    o = t(re),
    s = (0, P.useContext)(se),
    c = oe(),
    l = ie(),
    ae = m(ce, r),
    u = m(le, ae ?? r),
    d;
  n[0] === u ? (d = n[1]) : ((d = u != null && fe(u.beacon) ? u.beacon : null), (n[0] = u), (n[1] = d));
  let h = d,
    g;
  n[2] === u
    ? (g = n[3])
    : ((g =
        u == null
          ? null
          : { placement: `in_conversation`, productExperience: u.productExperience, treatment: `banner` }),
      (n[2] = u),
      (n[3] = g));
  let _ = g,
    ue = m(ye, r),
    v = f(Qe),
    y;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { name: `automations.local` }), (n[4] = y))
    : (y = n[4]);
  let b = m(je, y),
    x;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { name: `automations.cloud` }), (n[5] = x))
    : (x = n[5]);
  let S = m(je, x),
    pe = b.isCapable || S.isCapable,
    { accountId: C, isLoading: w } = De(),
    T = f(Ae),
    E = C == null ? void 0 : ge(T, C),
    xe =
      !w &&
      T !== void 0 &&
      (E == null ||
        E.dismissed === !0 ||
        E.expired === !0 ||
        !E.items.some(qe) ||
        ve(E, `enable_notifications`)),
    { data: Se, isLoading: Ce } = f(Ze),
    O;
  n[6] === b.isCapable ? (O = n[7]) : ((O = { enabled: b.isCapable }), (n[6] = b.isCapable), (n[7] = O));
  let { data: we, error: Ee, isLoading: k } = f(Fe, O),
    A;
  n[8] === S.isCapable ? (A = n[9]) : ((A = { enabled: S.isCapable }), (n[8] = S.isCapable), (n[9] = A));
  let { data: Ne, error: Pe, isLoading: j } = f(Me, A),
    M;
  n[10] === v ? (M = n[11]) : ((M = { hostId: v }), (n[10] = v), (n[11] = M));
  let { data: N, isLoading: ze } = m(Te, M),
    F = N?.roots,
    I;
  n[12] !== v || n[13] !== F
    ? ((I = { hostId: v, roots: F }), (n[12] = v), (n[13] = F), (n[14] = I))
    : (I = n[14]);
  let { data: $e, isLoading: et } = Oe(I),
    L = N != null,
    R;
  n[15] === L ? (R = n[16]) : ((R = { enabled: L }), (n[15] = L), (n[16] = R));
  let { skills: z, isLoading: tt } = me(N?.roots, v, R),
    B = $e == null ? null : $e.filter(Ke),
    nt = B == null ? null : new Set(B.map(Ge)),
    rt = B == null ? null : new Set(B.map(We)),
    it = ke(Xe),
    at = Array.from(it.values()).some(Ue),
    ot = Array.from(it.values()).some(He),
    st = !w && T !== void 0 && !Ce && !k && !j && !ze && !et && !tt && !ot,
    ct = {
      automationsAvailable: pe,
      availableSkillNames: new Set(z.filter(Ve).map(Be)),
      browserExtensionInstalled: ot ? null : at,
      connectedPluginNames: nt,
      enabledPluginIds: rt,
      hasAutomations:
        k || j || Ee != null || Pe != null
          ? null
          : (we?.items.length ?? 0) > 0 || (Ne?.items.length ?? 0) > 0,
      isWorkMode: te,
      notificationOnboardingResolved: xe,
      notificationPermissionStatus: Se ?? null,
      voiceAvailable: a != null,
    },
    lt = h == null ? null : Re(h.beacon_id),
    V =
      ne &&
      st &&
      h != null &&
      lt?.isEligible(ct) === !0 &&
      (h.ui_info.dismiss_variant === `persistent` ||
        u?.eventMetadata.messageId == null ||
        u.eventMetadata.messageId === ue)
        ? lt
        : null,
    H = V?.id ?? null,
    U = H == null || u == null ? null : `${H}:${u.eventMetadata.conversationId}:${u.eventMetadata.messageId}`,
    W = (0, P.useRef)(null),
    G;
  n[17] !== C || n[18] !== o || n[19] !== h || n[20] !== _ || n[21] !== u || n[22] !== r
    ? ((G = () => {
        u != null &&
          h != null &&
          _ != null &&
          (Le(o, C ?? r, h, u.eventMetadata) && D(o, { action: `impression`, beacon: h, ..._ }),
          D(o, { action: `composer_tip_presented`, beacon: h, ..._ }));
      }),
      (n[17] = C),
      (n[18] = o),
      (n[19] = h),
      (n[20] = _),
      (n[21] = u),
      (n[22] = r),
      (n[23] = G))
    : (G = n[23]);
  let K = G,
    q;
  n[24] !== U || n[25] !== K || n[26] !== H
    ? ((q = () => {
        if (U == null || H == null) {
          W.current = null;
          return;
        }
        W.current !== U && ((W.current = U), K());
      }),
      (n[24] = U),
      (n[25] = K),
      (n[26] = H),
      (n[27] = q))
    : (q = n[27]);
  let J = q,
    Y;
  n[28] !== o || n[29] !== s || n[30] !== B || n[31] !== c || n[32] !== l || n[33] !== a || n[34] !== z
    ? ((Y = function (e) {
        switch (e.type) {
          case `prefill`:
            (s?.appendText(c.formatMessage(e.prompt)), s?.focus());
            return;
          case `prefill-with-skill`: {
            let t = z.find((t) => {
              let { enabled: n, name: r } = t;
              return n && r.toLowerCase() === e.skillName;
            });
            if (s == null || t == null) return;
            (s.appendText(c.formatMessage(e.prompt)),
              s.insertTextAtSelection(` `),
              s.insertSkillMentionAtSelection(t),
              s.focus());
            return;
          }
          case `prefill-with-plugin`: {
            let t = B?.find((t) => {
              let { plugin: n } = t,
                { id: r } = n;
              return r === e.pluginId;
            });
            if (s == null || t == null) return;
            (s.appendText(c.formatMessage(e.prompt)),
              s.insertTextAtSelection(` `),
              s.insertMentionAtSelection(ee(t)),
              s.focus());
            return;
          }
          case `navigate`:
            l(e.path, { state: e.state });
            return;
          case `new-chat`:
            l(`/`);
            return;
          case `open-notification-settings`:
            p.systemPermissions?.openNotificationSettings();
            return;
          case `start-voice`:
            a?.();
            return;
          case `switch-to-work`:
            (he(o, `work`), l(`/`));
            return;
        }
      }),
      (n[28] = o),
      (n[29] = s),
      (n[30] = B),
      (n[31] = c),
      (n[32] = l),
      (n[33] = a),
      (n[34] = z),
      (n[35] = Y))
    : (Y = n[35]);
  let X = Y;
  if (V == null || u == null || h == null || _ == null) return null;
  let Z;
  n[36] !== o || n[37] !== h || n[38] !== _ || n[39] !== u || n[40] !== r
    ? ((Z = () => {
        (D(o, { action: `dismiss`, beacon: h, ..._ }), de(o, r, u));
      }),
      (n[36] = o),
      (n[37] = h),
      (n[38] = _),
      (n[39] = u),
      (n[40] = r),
      (n[41] = Z))
    : (Z = n[41]);
  let Q;
  n[42] !== o ||
  n[43] !== h ||
  n[44] !== _ ||
  n[45] !== u ||
  n[46] !== r ||
  n[47] !== X ||
  n[48] !== V.action ||
  n[49] !== V.id
    ? ((Q = () => {
        let e =
          h.action_items.find((e) => {
            let { id: t } = e;
            return t === V.id;
          }) ?? h.action_items[0];
        (D(o, {
          action: `click`,
          actionId: V.id,
          actionType: e?.type ?? `primary`,
          beacon: h,
          destinationAction: e?.action_v2.action_enum,
          ..._,
        }),
          be({ beacon: h, eventType: `click`, eventCtaId: V.id, metadata: u.eventMetadata }),
          _e(o, r, u),
          X(V.action));
      }),
      (n[42] = o),
      (n[43] = h),
      (n[44] = _),
      (n[45] = u),
      (n[46] = r),
      (n[47] = X),
      (n[48] = V.action),
      (n[49] = V.id),
      (n[50] = Q))
    : (Q = n[50]);
  let $;
  return (
    n[51] !== U || n[52] !== J || n[53] !== Z || n[54] !== Q || n[55] !== V
      ? (($ = (0, Ye.jsx)(Ie, { impressionId: U, onShown: J, tip: V, onDismiss: Z, onPrimaryAction: Q })),
        (n[51] = U),
        (n[52] = J),
        (n[53] = Z),
        (n[54] = Q),
        (n[55] = V),
        (n[56] = $))
      : ($ = n[56]),
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
  return e.id === `enable_notifications` && Se(e);
}
var Je, P, Ye, Xe, Ze, Qe;
function F() {
  return (F = e(() => {
    ((Je = s()),
      g(),
      ae(),
      (P = te()),
      c(),
      o(),
      j(),
      M(),
      k(),
      O(),
      A(),
      C(),
      ue(),
      Ee(),
      Ne(),
      T(),
      E(),
      N(),
      b(),
      a(),
      Ce(),
      Pe(),
      S(),
      xe(),
      w(),
      u(),
      n(),
      v(),
      we(),
      x(),
      pe(),
      (Ye = ne()),
      (Xe = Object.keys(h)
        .filter(i)
        .map((e) => ({ browserFamily: e }))),
      (Ze = d(re, () => ({
        enabled: p.systemPermissions != null,
        queryKey: [`composer-tips`, `notification-permission-status`],
        queryFn: async () => (await p.systemPermissions?.getNotificationPermissionStatus()) ?? null,
        refetchOnWindowFocus: `always`,
        staleTime: 0,
      }))),
      (Qe = r(_, ({ get: e, scope: t }) => (t.value.kind === `local` ? e(y, t.value.conversationId) : l))));
  }))();
}
F();
export { ze as useComposerTip };
//# sourceMappingURL=composer-tip-d0d988f39ce3.js.map
