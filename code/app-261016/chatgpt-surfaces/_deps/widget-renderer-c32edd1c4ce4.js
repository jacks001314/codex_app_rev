import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HFt as i,
  LNt as a,
  LRt as o,
  Mst as s,
  Nst as c,
  PBt as l,
  Pst as u,
  Qst as ee,
  SLt as d,
  VRt as f,
  XOt as p,
  Xz as m,
  ZSt as h,
  Zz as g,
  cwt as _,
  ezt as v,
  gB as te,
  hB as y,
  iCt as ne,
  iwt as b,
  jst as x,
  kRt as S,
  nCt as C,
  okt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $l as T,
  BJn as E,
  DNr as D,
  Fo as re,
  HJn as ie,
  Io as ae,
  Ql as oe,
  cc as se,
  lDn as ce,
  njr as O,
  sDn as le,
  sc as ue,
  tjr as de,
  vNr as fe,
} from "./app-initial-ad16eaadf81f.js";
import { a as pe, o as me, r as k, t as A } from "./es-337e76517f64.js";
import { cv as j, sv as he } from "./app-primary-3e00728c2a4c.js";
import { _ as ge, i as _e } from "./i18n-820c4a1732af.js";
import { m as ve } from "./frame-7afb78caee91.js";
import { t as M } from "./runtime-975743112fa3.js";
import {
  a as N,
  d as P,
  f as F,
  g as I,
  h as L,
  i as R,
  m as z,
  n as ye,
  r as B,
  s as V,
  u as H,
} from "./media-c4e5f38f2116.js";
import { i as U, n as W, r as be, t as xe } from "./tooltip-7e314d675cfc.js";
import { n as Se, r as G } from "./widget-voice-session-b67d8c568a96.js";
import {
  _ as K,
  c as q,
  d as J,
  f as Y,
  g as X,
  h as Ce,
  i as Z,
  l as we,
  n as Te,
  p as Ee,
  r as De,
  s as Oe,
  t as ke,
  v as Ae,
} from "./speech-eb31aa2314f6.js";
function je(e) {
  let t = (0, Fe.c)(7),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, $.jsx)(re, {})), (t[0] = n)) : (n = t[0]);
  let r;
  t[1] === e ? (r = t[2]) : ((r = (0, $.jsx)(Me, { ...e })), (t[1] = e), (t[2] = r));
  let i;
  return (
    t[3] !== e.onError || t[4] !== e.widget.component || t[5] !== r
      ? ((i = (0, $.jsx)(le, {
          name: `PrebuiltDILWidget`,
          resetKey: e.widget.component,
          fallback: n,
          onError: e.onError,
          children: r,
        })),
        (t[3] = e.onError),
        (t[4] = e.widget.component),
        (t[5] = r),
        (t[6] = i))
      : (i = t[6]),
    i
  );
}
function Me(e) {
  let t = (0, Fe.c)(33),
    n,
    r,
    i,
    a,
    o,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (c = t[6]))
    : (({ widget: c, sourceMessageId: i, onLoad: n, dilComponents: a, dilComponentOptions: o, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = c));
  let l = a === void 0 ? z : a,
    u = o === void 0 ? F : o,
    ee = (0, Q.useRef)(null),
    d;
  t[7] === n ? (d = t[8]) : ((d = (e, t) => n?.(e, t)), (t[7] = n), (t[8] = d));
  let f = te(d),
    p = l === z && Object.hasOwn(P, c.component) ? P[c.component] : void 0,
    m;
  t[9] === c.component
    ? (m = t[10])
    : ((m = [`dil-response-component`, c.component]), (t[9] = c.component), (t[10] = m));
  let h = p ?? _,
    g = p != null,
    v;
  t[11] !== m || t[12] !== h || t[13] !== g
    ? ((v = {
        queryKey: m,
        queryFn: h,
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
        throwOnError: g,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[11] = m),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v))
    : (v = t[14]);
  let { data: y, isPending: ne } = s(v);
  if (p && ne) return null;
  let b = r.initialState ?? c.state,
    x;
  t[15] === f
    ? (x = t[16])
    : ((x = (e) => {
        e != null && f(e, (e) => ee.current?.querySelector(`#${CSS.escape(e)}`) ?? null);
      }),
      (t[15] = f),
      (t[16] = x));
  let S;
  t[17] !== p || t[18] !== y || t[19] !== l || t[20] !== c.component
    ? ((S = p && y !== void 0 ? { ...l, [c.component]: y } : l),
      (t[17] = p),
      (t[18] = y),
      (t[19] = l),
      (t[20] = c.component),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== u || t[23] !== r.onInitialRenderCommit || t[24] !== i || t[25] !== S || t[26] !== c
    ? ((C = (0, $.jsx)(Ne, {
        widget: c,
        sourceMessageId: i,
        dilComponents: S,
        dilComponentOptions: u,
        onInitialRenderCommit: r.onInitialRenderCommit,
      })),
      (t[22] = u),
      (t[23] = r.onInitialRenderCommit),
      (t[24] = i),
      (t[25] = S),
      (t[26] = c),
      (t[27] = C))
    : (C = t[27]);
  let w;
  return (
    t[28] !== r || t[29] !== C || t[30] !== b || t[31] !== x
      ? ((w = (0, $.jsx)(`div`, {
          ref: ee,
          children: (0, $.jsx)(k, { ...r, initialState: b, ref: x, children: C }),
        })),
        (t[28] = r),
        (t[29] = C),
        (t[30] = b),
        (t[31] = x),
        (t[32] = w))
      : (w = t[32]),
    w
  );
}
function Ne(e) {
  let n = (0, Fe.c)(60),
    { widget: r, sourceMessageId: i, dilComponents: a, dilComponentOptions: o, onInitialRenderCommit: s } = e,
    c = t(ee),
    {
      useWidgetStateStore: l,
      onAction: d,
      onError: f,
      theme: p,
      disableExternalMedia: m,
      supportedClientActions: h,
      createSpeechSynthesizer: _,
    } = ge(),
    v = (0, Q.useSyncExternalStore)(l.subscribe, l.getState, l.getInitialState),
    y = w(),
    b = g(`(pointer: coarse)`),
    x;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { name: `dictation.composer` }), (n[0] = x))
    : (x = n[0]);
  let S = C(de, x),
    T;
  n[1] !== _ || n[2] !== c ? ((T = () => ke(c, _ == null)), (n[1] = _), (n[2] = c), (n[3] = T)) : (T = n[3]);
  let [E] = (0, Q.useState)(T),
    D = se(),
    ae = (0, Q.useContext)(he),
    ce = ne(fe),
    O = Ce(
      r,
      v,
      ce,
      D != null && !D.isReadOnly && !D.renderRestrictedWidgets && !D.renderRestrictedModelResponses,
      ae,
    ),
    le = u({ queries: O.queries }),
    ue = O.enrich(le.map(Pe)),
    me = (0, Q.useContext)(oe),
    k = ne(we),
    A;
  n[4] !== S.isCapable || n[5] !== k || n[6] !== y || n[7] !== c || n[8] !== D?.conversationId
    ? ((A = () => ({
        identity: k,
        capable: S.isCapable,
        conversationId: D?.conversationId,
        binding: Oe(c, y),
      })),
      (n[4] = S.isCapable),
      (n[5] = k),
      (n[6] = y),
      (n[7] = c),
      (n[8] = D?.conversationId),
      (n[9] = A))
    : (A = n[9]);
  let [j, _e] = (0, Q.useState)(A);
  (j.identity !== k || j.capable !== S.isCapable || j.conversationId !== D?.conversationId) &&
    _e({ identity: k, capable: S.isCapable, conversationId: D?.conversationId, binding: Oe(c, y) });
  let M, N;
  (n[10] !== _ || n[11] !== E
    ? ((M = () => {
        E?.setReadOnly(_ == null);
      }),
      (N = [E, _]),
      (n[10] = _),
      (n[11] = E),
      (n[12] = M),
      (n[13] = N))
    : ((M = n[12]), (N = n[13])),
    (0, Q.useLayoutEffect)(M, N));
  let P;
  n[14] !== i || n[15] !== h || n[16] !== D
    ? ((P = !!i && !!D && !D.isStreaming && (h?.includes(`start_voice_mode`) ?? !1)),
      (n[14] = i),
      (n[15] = h),
      (n[16] = D),
      (n[17] = P))
    : (P = n[17]);
  let F = P,
    I;
  n[18] !== d || n[19] !== i || n[20] !== F || n[21] !== r
    ? ((I = (e) => {
        if (
          e.payload?.widget_voice_session_id !== void 0 ||
          e.payload?.voice_landing === `genui_widget_voice_session_v1`
        ) {
          if (e.type !== `start_voice_mode` || e.handler !== `client`) return;
          let t = Se(e.payload.widget_voice_session_id, r.state, i);
          return !F || !t ? void 0 : d({ ...e, payload: t });
        }
        return d(e);
      }),
      (n[18] = d),
      (n[19] = i),
      (n[20] = F),
      (n[21] = r),
      (n[22] = I))
    : (I = n[22]);
  let L = te(I),
    R;
  n[23] === L
    ? (R = n[24])
    : ((R = () => {
        let e = (e) => {
          let t = Le.safeParse(e);
          if (!t.success) return;
          let { type: n, handler: r, payload: i } = t.data;
          if (n === `log_event` && r === `client`) {
            if (i?.action != null && i.action !== n) return;
          } else if (!ve()) return;
          return L(t.data);
        };
        return {
          GenUI: {
            dispatchAction: e,
            logEvent: (t) => e({ type: `log_event`, payload: t }),
            issueNewTurn: (t, n) => e({ type: `issue_new_turn`, payload: { ...n, query: t } }),
            openEntityDetail: (t, n, r) =>
              e({ type: `open_entity_detail`, payload: { category: t, query: n, extraParams: r } }),
            openImageLightbox: (t, n) =>
              e({ type: `open_image_lightbox`, payload: { images: t, selected_index: n } }),
            openUrl: (t) => e({ type: `open_url`, payload: { url: t } }),
          },
        };
      }),
      (n[23] = L),
      (n[24] = R));
  let [z] = (0, Q.useState)(R),
    ye = (0, Q.useRef)(!1),
    B;
  n[25] !== d || n[26] !== s || n[27] !== l
    ? ((B = () => {
        if (!ye.current) {
          ye.current = !0;
          let e = l.getState();
          (e.animate_reveal === !0 &&
            e.reveal_complete === !1 &&
            d({ cause: `system`, patchState: pe.set(`reveal_complete`, !0) }),
            s?.());
        }
      }),
      (n[25] = d),
      (n[26] = s),
      (n[27] = l),
      (n[28] = B))
    : (B = n[28]);
  let V = B,
    H = ie({ ...r, state: ue }, a, o);
  if (H == null) throw Error(`Unregistered authored DIL widget`);
  let U;
  n[29] === h ? (U = n[30]) : ((U = h ?? []), (n[29] = h), (n[30] = U));
  let W;
  n[31] !== F || n[32] !== U
    ? ((W = {
        supportsAutomationGoalCard: !1,
        supportedClientActions: U,
        supportsWidgetVoiceSessions: F,
        supportsFlashcardMotion: !0,
      }),
      (n[31] = F),
      (n[32] = U),
      (n[33] = W))
    : (W = n[33]);
  let G;
  n[34] !== H.appData || n[35] !== W
    ? ((G = { ...H.appData, opGenui: W }), (n[34] = H.appData), (n[35] = W), (n[36] = G))
    : (G = n[36]);
  let K = m || D?.shouldBlockExternalEgress === !0 || me === `restricted`,
    q;
  n[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((q = (0, $.jsx)(re, {})), (n[37] = q)) : (q = n[37]);
  let J;
  n[38] !== f || n[39] !== V
    ? ((J = (e) => {
        e.kind === `first_snapshot_success`
          ? V()
          : e.kind === `failure` && f(Error(`DIL widget renderer failed: ${e.stage}`));
      }),
      (n[38] = f),
      (n[39] = V),
      (n[40] = J))
    : (J = n[40]);
  let Y;
  n[41] === O
    ? (Y = n[42])
    : ((Y = (e) => {
        let { action: t } = e;
        (O.onInteraction(), t?.());
      }),
      (n[41] = O),
      (n[42] = Y));
  let X;
  n[43] !== f || n[44] !== V
    ? ((X = (e) => {
        e.error ? f(e.error) : e.tree != null && V();
      }),
      (n[43] = f),
      (n[44] = V),
      (n[45] = X))
    : (X = n[45]);
  let Z;
  return (
    n[46] !== j.binding ||
    n[47] !== a ||
    n[48] !== z ||
    n[49] !== b ||
    n[50] !== H.code ||
    n[51] !== H.constants ||
    n[52] !== E ||
    n[53] !== G ||
    n[54] !== K ||
    n[55] !== J ||
    n[56] !== Y ||
    n[57] !== X ||
    n[58] !== p
      ? ((Z = (0, $.jsx)(be, {
          appData: G,
          components: Ie,
          constants: H.constants,
          disableExternalMedia: K,
          dil: H.code,
          dilComponents: a,
          globals: z,
          isMobile: b,
          speechSynthesis: E,
          dictation: j.binding,
          theme: p,
          tooltipComponent: xe,
          errorFallback: q,
          onLifecycleEvent: J,
          onInteraction: Y,
          onSnapshot: X,
        })),
        (n[46] = j.binding),
        (n[47] = a),
        (n[48] = z),
        (n[49] = b),
        (n[50] = H.code),
        (n[51] = H.constants),
        (n[52] = E),
        (n[53] = G),
        (n[54] = K),
        (n[55] = J),
        (n[56] = Y),
        (n[57] = X),
        (n[58] = p),
        (n[59] = Z))
      : (Z = n[59]),
    Z
  );
}
function Pe(e) {
  let { data: t } = e;
  return t;
}
var Fe, Q, $, Ie, Le;
function Re() {
  return (Re = e(() => {
    ((Fe = l()),
      U(),
      M(),
      I(),
      H(),
      A(),
      _e(),
      me(),
      b(),
      c(),
      x(),
      h(),
      (Q = r()),
      p(),
      i(),
      O(),
      D(),
      ce(),
      m(),
      T(),
      n(),
      j(),
      y(),
      Ae(),
      X(),
      ue(),
      Ee(),
      q(),
      ae(),
      J(),
      Z(),
      V(),
      E(),
      Te(),
      W(),
      G(),
      ($ = a()),
      (Ie = {
        "automation-goal-card": K,
        ...L,
        box: B,
        carousel: Y,
        image: ye,
        link: De,
        "search-image": N,
        lottie: R,
      }),
      (Le = S({
        type: f(),
        payload: o(f(), v()).optional(),
        handler: d([`server`, `client`]).default(`client`),
      })));
  }))();
}
Re();
export { je as PrebuiltDilRenderer };
//# sourceMappingURL=widget-renderer-c32edd1c4ce4.js.map
