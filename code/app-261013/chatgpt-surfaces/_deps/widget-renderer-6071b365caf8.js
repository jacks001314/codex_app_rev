import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Ixt as r,
  Pxt as i,
  Qot as a,
  RLt as o,
  TLt as s,
  USt as ee,
  VDt as c,
  Vxt as l,
  Xot as u,
  Yot as d,
  Zot as f,
  bz as p,
  jDt as m,
  nz as h,
  oIt as g,
  pLt as _,
  tz as v,
  vzt as y,
  wot as te,
  xLt as b,
  xMt as x,
  xz as ne,
  yzt as S,
  zSt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  FEr as T,
  HCn as E,
  JOr as re,
  No as ie,
  PEr as ae,
  Po as D,
  WCn as oe,
  Xl as se,
  Zl as ce,
  _Gn as O,
  nc as le,
  rc as ue,
  rkr as de,
  yGn as fe,
} from "./app-initial-5851df3f6cb1.js";
import { a as pe, o as me, r as k, t as A } from "./es-f1d4a62c2c18.js";
import { _ as he, i as j } from "./i18n-4b126dc587df.js";
import { m as ge } from "./frame-e41f10efa336.js";
import { t as _e } from "./runtime-2beb8c8770e0.js";
import {
  a as M,
  d as N,
  f as P,
  g as F,
  h as I,
  i as L,
  m as R,
  n as z,
  r as ve,
  s as B,
  u as V,
} from "./media-9efb3483c322.js";
import { i as H, n as U, r as ye, t as be } from "./tooltip-ce76a437c28b.js";
import { n as W, t as xe } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { n as Se, r as G } from "./widget-voice-session-29f5d92c26b9.js";
import {
  c as K,
  d as q,
  f as J,
  g as Y,
  h as Ce,
  i as X,
  l as we,
  n as Z,
  p as Te,
  r as Ee,
  s as De,
  t as Oe,
} from "./speech-85691d7ab145.js";
function ke(e) {
  let t = (0, Ne.c)(7),
    n;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, $.jsx)(ie, {})), (t[0] = n)) : (n = t[0]);
  let r;
  t[1] === e ? (r = t[2]) : ((r = (0, $.jsx)(Ae, { ...e })), (t[1] = e), (t[2] = r));
  let i;
  return (
    t[3] !== e.onError || t[4] !== e.widget.component || t[5] !== r
      ? ((i = (0, $.jsx)(E, {
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
function Ae(e) {
  let t = (0, Ne.c)(33),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ widget: s, sourceMessageId: i, onLoad: n, dilComponents: a, dilComponentOptions: o, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = a === void 0 ? R : a,
    l = o === void 0 ? P : o,
    d = (0, Q.useRef)(null),
    f;
  t[7] === n ? (f = t[8]) : ((f = (e, t) => n?.(e, t)), (t[7] = n), (t[8] = f));
  let p = ne(f),
    m = c === R && Object.hasOwn(N, s.component) ? N[s.component] : void 0,
    h;
  t[9] === s.component
    ? (h = t[10])
    : ((h = [`dil-response-component`, s.component]), (t[9] = s.component), (t[10] = h));
  let g = m ?? ee,
    _ = m != null,
    v;
  t[11] !== h || t[12] !== g || t[13] !== _
    ? ((v = {
        queryKey: h,
        queryFn: g,
        staleTime: 1 / 0,
        gcTime: 1 / 0,
        retry: !1,
        throwOnError: _,
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let { data: y, isPending: te } = u(v);
  if (m && te) return null;
  let b = r.initialState ?? s.state,
    x;
  t[15] === p
    ? (x = t[16])
    : ((x = (e) => {
        e != null && p(e, (e) => d.current?.querySelector(`#${CSS.escape(e)}`) ?? null);
      }),
      (t[15] = p),
      (t[16] = x));
  let S;
  t[17] !== m || t[18] !== y || t[19] !== c || t[20] !== s.component
    ? ((S = m && y !== void 0 ? { ...c, [s.component]: y } : c),
      (t[17] = m),
      (t[18] = y),
      (t[19] = c),
      (t[20] = s.component),
      (t[21] = S))
    : (S = t[21]);
  let C;
  t[22] !== l || t[23] !== r.onInitialRenderCommit || t[24] !== i || t[25] !== S || t[26] !== s
    ? ((C = (0, $.jsx)(je, {
        widget: s,
        sourceMessageId: i,
        dilComponents: S,
        dilComponentOptions: l,
        onInitialRenderCommit: r.onInitialRenderCommit,
      })),
      (t[22] = l),
      (t[23] = r.onInitialRenderCommit),
      (t[24] = i),
      (t[25] = S),
      (t[26] = s),
      (t[27] = C))
    : (C = t[27]);
  let w;
  return (
    t[28] !== r || t[29] !== C || t[30] !== b || t[31] !== x
      ? ((w = (0, $.jsx)(`div`, {
          ref: d,
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
function je(e) {
  let n = (0, Ne.c)(60),
    {
      widget: i,
      sourceMessageId: o,
      dilComponents: s,
      dilComponentOptions: ee,
      onInitialRenderCommit: u,
    } = e,
    d = r(t),
    {
      useWidgetStateStore: f,
      onAction: p,
      onError: m,
      theme: g,
      disableExternalMedia: _,
      supportedClientActions: v,
      createSpeechSynthesizer: y,
    } = he(),
    te = (0, Q.useSyncExternalStore)(f.subscribe, f.getState, f.getInitialState),
    b = c(),
    x = h(`(pointer: coarse)`),
    S;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = { name: `dictation.composer` }), (n[0] = S))
    : (S = n[0]);
  let C = w(ae, S),
    T;
  n[1] !== y || n[2] !== d ? ((T = () => Oe(d, y == null)), (n[1] = y), (n[2] = d), (n[3] = T)) : (T = n[3]);
  let [E] = (0, Q.useState)(T),
    D = ue(),
    oe = (0, Q.useContext)(xe),
    ce = l(re),
    O = Ce(
      i,
      te,
      ce,
      D != null && !D.isReadOnly && !D.renderRestrictedWidgets && !D.renderRestrictedModelResponses,
      oe,
    ),
    le = a({ queries: O.queries }),
    de = O.enrich(le.map(Me)),
    me = (0, Q.useContext)(se),
    k = l(we),
    A;
  n[4] !== C.isCapable || n[5] !== k || n[6] !== b || n[7] !== d || n[8] !== D?.conversationId
    ? ((A = () => ({
        identity: k,
        capable: C.isCapable,
        conversationId: D?.conversationId,
        binding: De(d, b),
      })),
      (n[4] = C.isCapable),
      (n[5] = k),
      (n[6] = b),
      (n[7] = d),
      (n[8] = D?.conversationId),
      (n[9] = A))
    : (A = n[9]);
  let [j, _e] = (0, Q.useState)(A);
  (j.identity !== k || j.capable !== C.isCapable || j.conversationId !== D?.conversationId) &&
    _e({ identity: k, capable: C.isCapable, conversationId: D?.conversationId, binding: De(d, b) });
  let M, N;
  (n[10] !== y || n[11] !== E
    ? ((M = () => {
        E?.setReadOnly(y == null);
      }),
      (N = [E, y]),
      (n[10] = y),
      (n[11] = E),
      (n[12] = M),
      (n[13] = N))
    : ((M = n[12]), (N = n[13])),
    (0, Q.useLayoutEffect)(M, N));
  let P;
  n[14] !== o || n[15] !== v || n[16] !== D
    ? ((P = !!o && !!D && !D.isStreaming && (v?.includes(`start_voice_mode`) ?? !1)),
      (n[14] = o),
      (n[15] = v),
      (n[16] = D),
      (n[17] = P))
    : (P = n[17]);
  let F = P,
    I;
  n[18] !== p || n[19] !== o || n[20] !== F || n[21] !== i
    ? ((I = (e) => {
        if (
          e.payload?.widget_voice_session_id !== void 0 ||
          e.payload?.voice_landing === `genui_widget_voice_session_v1`
        ) {
          if (e.type !== `start_voice_mode` || e.handler !== `client`) return;
          let t = Se(e.payload.widget_voice_session_id, i.state, o);
          return !F || !t ? void 0 : p({ ...e, payload: t });
        }
        return p(e);
      }),
      (n[18] = p),
      (n[19] = o),
      (n[20] = F),
      (n[21] = i),
      (n[22] = I))
    : (I = n[22]);
  let L = ne(I),
    R;
  n[23] === L
    ? (R = n[24])
    : ((R = () => {
        let e = (e) => {
          let t = Fe.safeParse(e);
          if (!t.success) return;
          let { type: n, handler: r, payload: i } = t.data;
          if (n === `log_event` && r === `client`) {
            if (i?.action != null && i.action !== n) return;
          } else if (!ge()) return;
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
    ve = (0, Q.useRef)(!1),
    B;
  n[25] !== p || n[26] !== u || n[27] !== f
    ? ((B = () => {
        if (!ve.current) {
          ve.current = !0;
          let e = f.getState();
          (e.animate_reveal === !0 &&
            e.reveal_complete === !1 &&
            p({ cause: `system`, patchState: pe.set(`reveal_complete`, !0) }),
            u?.());
        }
      }),
      (n[25] = p),
      (n[26] = u),
      (n[27] = f),
      (n[28] = B))
    : (B = n[28]);
  let V = B,
    H = fe({ ...i, state: de }, s, ee);
  if (H == null) throw Error(`Unregistered authored DIL widget`);
  let U;
  n[29] === v ? (U = n[30]) : ((U = v ?? []), (n[29] = v), (n[30] = U));
  let W;
  n[31] !== F || n[32] !== U
    ? ((W = { supportedClientActions: U, supportsWidgetVoiceSessions: F, supportsFlashcardMotion: !0 }),
      (n[31] = F),
      (n[32] = U),
      (n[33] = W))
    : (W = n[33]);
  let G;
  n[34] !== H.appData || n[35] !== W
    ? ((G = { ...H.appData, opGenui: W }), (n[34] = H.appData), (n[35] = W), (n[36] = G))
    : (G = n[36]);
  let K = _ || D?.shouldBlockExternalEgress === !0 || me === `restricted`,
    q;
  n[37] === Symbol.for(`react.memo_cache_sentinel`) ? ((q = (0, $.jsx)(ie, {})), (n[37] = q)) : (q = n[37]);
  let J;
  n[38] !== m || n[39] !== V
    ? ((J = (e) => {
        e.kind === `first_snapshot_success`
          ? V()
          : e.kind === `failure` && m(Error(`DIL widget renderer failed: ${e.stage}`));
      }),
      (n[38] = m),
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
  n[43] !== m || n[44] !== V
    ? ((X = (e) => {
        e.error ? m(e.error) : e.tree != null && V();
      }),
      (n[43] = m),
      (n[44] = V),
      (n[45] = X))
    : (X = n[45]);
  let Z;
  return (
    n[46] !== j.binding ||
    n[47] !== s ||
    n[48] !== z ||
    n[49] !== x ||
    n[50] !== H.code ||
    n[51] !== H.constants ||
    n[52] !== E ||
    n[53] !== G ||
    n[54] !== K ||
    n[55] !== J ||
    n[56] !== Y ||
    n[57] !== X ||
    n[58] !== g
      ? ((Z = (0, $.jsx)(ye, {
          appData: G,
          components: Pe,
          constants: H.constants,
          disableExternalMedia: K,
          dil: H.code,
          dilComponents: s,
          globals: z,
          isMobile: x,
          speechSynthesis: E,
          dictation: j.binding,
          theme: g,
          tooltipComponent: be,
          errorFallback: q,
          onLifecycleEvent: J,
          onInteraction: Y,
          onSnapshot: X,
        })),
        (n[46] = j.binding),
        (n[47] = s),
        (n[48] = z),
        (n[49] = x),
        (n[50] = H.code),
        (n[51] = H.constants),
        (n[52] = E),
        (n[53] = G),
        (n[54] = K),
        (n[55] = J),
        (n[56] = Y),
        (n[57] = X),
        (n[58] = g),
        (n[59] = Z))
      : (Z = n[59]),
    Z
  );
}
function Me(e) {
  let { data: t } = e;
  return t;
}
var Ne, Q, $, Pe, Fe;
function Ie() {
  return (Ie = e(() => {
    ((Ne = y()),
      H(),
      _e(),
      F(),
      V(),
      A(),
      j(),
      me(),
      C(),
      f(),
      d(),
      i(),
      (Q = S()),
      m(),
      n(),
      T(),
      de(),
      oe(),
      v(),
      ce(),
      te(),
      W(),
      p(),
      Y(),
      le(),
      Te(),
      K(),
      D(),
      q(),
      X(),
      B(),
      O(),
      Z(),
      U(),
      G(),
      ($ = x()),
      (Pe = { ...I, box: ve, carousel: J, image: z, link: Ee, "search-image": M, lottie: L }),
      (Fe = _({
        type: s(),
        payload: b(s(), o()).optional(),
        handler: g([`server`, `client`]).default(`client`),
      })));
  }))();
}
Ie();
export { ke as PrebuiltDilRenderer };
//# sourceMappingURL=widget-renderer-6071b365caf8.js.map
