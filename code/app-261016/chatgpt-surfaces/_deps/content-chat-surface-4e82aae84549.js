import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  $z as ee,
  CCt as r,
  FBt as te,
  FNt as i,
  HFt as ne,
  LNt as re,
  LTt as a,
  OD as ie,
  PBt as o,
  Qst as s,
  Qz as ae,
  RTt as oe,
  SCt as se,
  VRt as c,
  XOt as l,
  ZSt as u,
  bB as d,
  dB as ce,
  fB as f,
  iCt as p,
  kD as m,
  kLt as h,
  kRt as g,
  okt as _,
  q3 as v,
  vB as y,
  yCt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ut as x,
  ADn as S,
  Agr as le,
  Ant as ue,
  Bnt as de,
  FWt as C,
  Fnt as w,
  IWt as fe,
  Int as T,
  Iwn as pe,
  Jnt as me,
  Knt as he,
  Lnt as E,
  MOr as D,
  NOn as ge,
  Ont as O,
  Own as k,
  PDn as A,
  POn as j,
  Pnt as M,
  Rnt as N,
  Unt as P,
  Xnt as F,
  Ynt as _e,
  a9n as ve,
  bIr as ye,
  eOr as be,
  eWt as xe,
  g9t as I,
  i9n as Se,
  jgr as L,
  jnt as R,
  knt as z,
  m9t as Ce,
  nOr as we,
  nTn as Te,
  nWt as Ee,
  o7n as De,
  o9n as Oe,
  qnt as ke,
  r9n as Ae,
  s7n as je,
  tOr as Me,
  tTn as Ne,
  tWt as Pe,
  uOr as Fe,
  xIr as Ie,
  y7n as B,
  zOr as Le,
} from "./app-initial-ad16eaadf81f.js";
import { Df as Re, El as ze, Of as Be, Qt as V, Tl as Ve, Zt as He } from "./app-primary-3e00728c2a4c.js";
import { i as Ue, t as We } from "./drop-zones-553b52d50d7e.js";
import { n as Ge, t as Ke } from "./floating-chat-surface-1eaefa25765a.js";
import { r as qe, t as H } from "./floating-chat-dock-menu-f3797f98b6c8.js";
var Je, Ye, U, W, G, Xe;
function K() {
  return (K = e(() => {
    (u(),
      ne(),
      be(),
      S(),
      B(),
      n(),
      Le(),
      ye(),
      (Je = g({ app_ids: h(c()).catch([]), mcp_servers: h(c()).catch([]) })),
      (Ye = r(D, ({ get: e }) => e(De) && e(we) && e(W))),
      (U = b(s, (e, { get: t }) => {
        if (e == null) return !1;
        let n = Je.safeParse(t(Ie, `2503859075`)?.value);
        return n.success
          ? e.connectorId == null
            ? n.data.mcp_servers.includes(e.server)
            : n.data.app_ids.includes(e.connectorId)
          : !1;
      })),
      (W = r(D, ({ get: e }) => e(A.activeTab$)?.tabType.composerAppSource != null && e(U, e(Xe)))),
      (G = b(D, (e, { get: t }) => e != null && t(U, (t(De) ? t(Xe) : null) ?? e))),
      (Xe = r(D, ({ get: e }) => {
        let t = e(A.activeTab$);
        return t?.tabType.composerAppSource?.(t.props);
      })));
  }))();
}
function q(e, t) {
  let n = Symbol();
  return (
    e.set(J, t, n),
    () => {
      e.get(J, t) === n && e.set(J, t, null);
    }
  );
}
var J, Ze;
function Y() {
  return (Y = e(() => {
    (u(),
      be(),
      S(),
      B(),
      Le(),
      (J = se(D, (e) => null)),
      (Ze = r(D, ({ get: e }) => {
        let t = e(A.activeTab$)?.tabId;
        return t != null && e(De) && e(je) && (e(we) || e(Me)) && e(J, t) != null;
      })));
  }))();
}
function X(e) {
  let n = (0, et.c)(59),
    {
      children: r,
      composerOnly: te,
      forceExpanded: i,
      placement: ne,
      showHeader: re,
      showComposerDivider: o,
      isHidden: s,
      persistPresentation: ae,
      reserveContent: oe,
      reserveFullComposerHeight: se,
      onPresentationChange: c,
      title: l,
      titleContent: u,
      statusState: f,
      titleStatusState: m,
      hasElicitation: h,
      notifications: g,
      renderTranscript: y,
      hasTranscript: b,
    } = e,
    S = te !== void 0 && te,
    ue = i !== void 0 && i,
    de = ne === void 0 ? `floating` : ne,
    C = re === void 0 ? !S : re,
    w = o === void 0 ? !S : o,
    pe = s !== void 0 && s,
    E = ae === void 0 || ae,
    ge = se !== void 0 && se,
    O = t(D),
    M = de === `pane`,
    P = _(),
    F = p(Ze),
    ve = p(Ye),
    ye = p(De),
    be = p(Me),
    xe = ee(),
    I = p(A.activeTab$),
    L = pe || F || (!M && (ve || (ye && be && xe && I?.tabType.kind !== `image-preview`))),
    R = (0, Z.useContext)(Ce),
    z = (0, Z.useContext)(Se),
    we = (0, Z.useContext)(Ae),
    Ee = (0, Z.useContext)(Re),
    ke = (0, Z.useContext)(Ve),
    je = (0, Z.useContext)(ie),
    Ne = (0, Z.useContext)(ce),
    Ie = d(),
    [B, Le] = (0, Z.useState)(null),
    ze = p(N),
    Be = p(_e),
    V;
  n[0] !== S || n[1] !== E || n[2] !== Be || n[3] !== C
    ? ((V = E ? Be : void 0),
      S && !C && (V = `compact`),
      (n[0] = S),
      (n[1] = E),
      (n[2] = Be),
      (n[3] = C),
      (n[4] = V))
    : (V = n[4]);
  let Ue = p(Oe),
    Ge = h ?? Ue,
    qe;
  n[5] !== I || n[6] !== M ? ((qe = M ? null : le(I)), (n[5] = I), (n[6] = M), (n[7] = qe)) : (qe = n[7]);
  let H = qe,
    Je = p(me),
    U = ge || I?.tabType.kind === `latex-document` || I?.tabType.kind === `image-preview`,
    W = !ze && (!Ge || Je),
    [G, Xe] = (0, Z.useState)(null),
    K;
  n[8] !== R || n[9] !== O
    ? ((K = (e) => {
        if (
          e == null ||
          !(e instanceof MouseEvent) ||
          e.type === `pointercancel` ||
          R == null ||
          O.get(Fe) == null ||
          O.get(A.activeTab$) == null ||
          e.clientY < 0 ||
          e.clientY > window.innerHeight
        )
          return null;
        let t = R.getBoundingClientRect();
        return e.clientX <= t.left + nt ? `left` : e.clientX >= t.right - nt ? `right` : null;
      }),
      (n[8] = R),
      (n[9] = O),
      (n[10] = K))
    : (K = n[10]);
  let q = K,
    J;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, Q.jsx)(`div`, {
        ref: (e) => {
          e != null && Le(e);
        },
        className: `contents`,
      })),
      (n[11] = J))
    : (J = n[11]);
  let Y = M || L,
    X;
  n[12] !== I || n[13] !== P || n[14] !== M || n[15] !== R || n[16] !== G
    ? ((X =
        !M && R != null && G != null && I != null
          ? (0, tt.createPortal)(
              (0, Q.jsx)(We, { destination: G, direction: v(P.locale), surface: `chat` }),
              R,
            )
          : null),
      (n[12] = I),
      (n[13] = P),
      (n[14] = M),
      (n[15] = R),
      (n[16] = G),
      (n[17] = X))
    : (X = n[17]);
  let $;
  n[18] !== H ||
  n[19] !== I?.tabId ||
  n[20] !== I?.tabType ||
  n[21] !== r ||
  n[22] !== S ||
  n[23] !== ue ||
  n[24] !== q ||
  n[25] !== Ge ||
  n[26] !== b ||
  n[27] !== je ||
  n[28] !== ke ||
  n[29] !== Ne ||
  n[30] !== we ||
  n[31] !== z ||
  n[32] !== P ||
  n[33] !== L ||
  n[34] !== W ||
  n[35] !== M ||
  n[36] !== R ||
  n[37] !== g ||
  n[38] !== c ||
  n[39] !== B ||
  n[40] !== E ||
  n[41] !== y ||
  n[42] !== oe ||
  n[43] !== O ||
  n[44] !== U ||
  n[45] !== w ||
  n[46] !== C ||
  n[47] !== f ||
  n[48] !== V ||
  n[49] !== Ee ||
  n[50] !== l ||
  n[51] !== u ||
  n[52] !== m ||
  n[53] !== Ie
    ? (($ = (e) =>
        (0, Q.jsx)(a, {
          transformPagePoint: (e) => ({ x: e.x / Ie, y: e.y / Ie }),
          children: (0, Q.jsx)(Se, {
            value: M
              ? z
              : {
                  activeBrowserTabId: H,
                  isInsideOverlay: !0,
                  onAttachmentAdded: () => {
                    O.get(A.activeTab$)?.tabId === I?.tabId &&
                      (O.get(N) || T(O, { prefersReducedMotion: !0 }), k());
                  },
                  shouldAnimate: !1,
                },
            children: (0, Q.jsx)(Ae, {
              value: M ? we : `expanded`,
              children: (0, Q.jsx)(Ke, {
                dockThreadKey: x,
                titleContent: u,
                statusState: f,
                titleStatusState: m,
                hasTranscript: b,
                notifications: g,
                containerSize: e,
                renderMenu: Qe,
                forceExpanded: ue || (Ge && !S),
                isHidden: M || L,
                isMinimized: W,
                onDragOver: S
                  ? void 0
                  : (e) => {
                      let t = q(e);
                      return (Xe(t), t != null);
                    },
                onDragEnd: S
                  ? void 0
                  : (e) => {
                      Xe(null);
                      let t = q(e);
                      return t != null && j(O, `tab_drag`, () => fe(O, O.get(Te).chat, t));
                    },
                presentation: V,
                showHeader: C,
                showComposerDivider: w,
                background: S && !C ? void 0 : `panel`,
                onPresentationChange: (e) => {
                  (E && O.set(_e, e), c?.(e));
                },
                onMinimizedChange: (e) => {
                  (e ? he : T)(O, { prefersReducedMotion: !0 });
                },
                title:
                  l ??
                  P.formatMessage({
                    id: `quickChat.mainConversation`,
                    defaultMessage: `Chat`,
                    description: `Fallback title for the task's main conversation in the floating chat`,
                  }),
                renderTranscript: y == null ? void 0 : (e, t) => y({ isVisible: t && !M && !L }),
                children: (e) =>
                  (0, Q.jsx)(Re, {
                    value: !M && H != null ? R : Ee,
                    children: (0, Q.jsx)(He, {
                      target: M ? B : null,
                      children: (0, Q.jsx)($e, {
                        mainContentElement: R,
                        presentation: e,
                        paneContext: M
                          ? { transition: z, escapeHandler: ke, bannerTarget: je, overlayOwner: Ne }
                          : void 0,
                        reserveFullComposerHeight: U,
                        reserveContent:
                          oe ??
                          (H == null && I?.tabType.kind !== `mcp-app` && I?.tabType.kind !== `mcp-extension`),
                        children: typeof r == `function` ? r(M ? void 0 : e) : r,
                      }),
                    }),
                  }),
              }),
            }),
          }),
        })),
      (n[18] = H),
      (n[19] = I?.tabId),
      (n[20] = I?.tabType),
      (n[21] = r),
      (n[22] = S),
      (n[23] = ue),
      (n[24] = q),
      (n[25] = Ge),
      (n[26] = b),
      (n[27] = je),
      (n[28] = ke),
      (n[29] = Ne),
      (n[30] = we),
      (n[31] = z),
      (n[32] = P),
      (n[33] = L),
      (n[34] = W),
      (n[35] = M),
      (n[36] = R),
      (n[37] = g),
      (n[38] = c),
      (n[39] = B),
      (n[40] = E),
      (n[41] = y),
      (n[42] = oe),
      (n[43] = O),
      (n[44] = U),
      (n[45] = w),
      (n[46] = C),
      (n[47] = f),
      (n[48] = V),
      (n[49] = Ee),
      (n[50] = l),
      (n[51] = u),
      (n[52] = m),
      (n[53] = Ie),
      (n[54] = $))
    : ($ = n[54]);
  let rt;
  return (
    n[55] !== Y || n[56] !== X || n[57] !== $
      ? ((rt = (0, Q.jsxs)(Q.Fragment, {
          children: [J, (0, Q.jsx)(Pe, { isHidden: Y, overlay: X, children: $ })],
        })),
        (n[55] = Y),
        (n[56] = X),
        (n[57] = $),
        (n[58] = rt))
      : (rt = n[58]),
    rt
  );
}
function Qe(e) {
  return (0, Q.jsx)(H, { ...e });
}
function $e(e) {
  let n = (0, et.c)(37),
    {
      children: ee,
      mainContentElement: r,
      presentation: te,
      paneContext: i,
      reserveContent: ne,
      reserveFullComposerHeight: re,
    } = e,
    a = t(D),
    o = (0, Z.useRef)(null),
    s = (0, Z.useContext)(Se),
    ae = (0, Z.useContext)(Ve),
    oe = (0, Z.useContext)(ie),
    se = (0, Z.useContext)(ce),
    { activeBrowserTabId: c } = s,
    l = i != null,
    {
      isCompact: u,
      isDockedTop: d,
      isHidden: f,
      isMinimized: p,
      isMoving: m,
      composerContentHeight: h,
      dockedReservePx: g,
    } = te,
    _ = ne && !f && !p ? Math.max(118, u ? g : 0, re ? h + 118 - 102 : 0) : 0,
    v = d && u && g > 0 ? _ : 0,
    [y, b] = (0, Z.useState)(!p);
  (u || p) && y !== !p && b(!p);
  let x = ne && !f && y ? z : 0,
    S,
    le;
  (n[0] !== c || n[1] !== l
    ? ((S = () => {
        if (l || c == null) return;
        let e = o.current?.ownerDocument.activeElement;
        e instanceof HTMLElement && o.current?.contains(e) && e.blur();
      }),
      (le = [c, l]),
      (n[0] = c),
      (n[1] = l),
      (n[2] = S),
      (n[3] = le))
    : ((S = n[2]), (le = n[3])),
    (0, Z.useLayoutEffect)(S, le));
  let C, w;
  (n[4] !== x ||
  n[5] !== d ||
  n[6] !== f ||
  n[7] !== p ||
  n[8] !== l ||
  n[9] !== r ||
  n[10] !== _ ||
  n[11] !== a ||
  n[12] !== v
    ? ((C = () => {
        if (!(l || r == null))
          return (
            r.style.setProperty(O, d ? `${x}px 0 0` : `0 0 ${x}px`),
            r.style.setProperty(ue, `${f || p || d ? 0 : 102}px`),
            r.style.setProperty(R, `${d ? 0 : _}px`),
            r.style.setProperty(M, `${d ? _ : 0}px`),
            P(a, d ? 0 : _),
            a.set(de, v),
            () => {
              (r.style.removeProperty(O),
                r.style.removeProperty(ue),
                r.style.removeProperty(R),
                r.style.removeProperty(M),
                P(a, 0),
                a.set(de, 0));
            }
          );
      }),
      (w = [x, l, d, f, p, r, _, a, v]),
      (n[4] = x),
      (n[5] = d),
      (n[6] = f),
      (n[7] = p),
      (n[8] = l),
      (n[9] = r),
      (n[10] = _),
      (n[11] = a),
      (n[12] = v),
      (n[13] = C),
      (n[14] = w))
    : ((C = n[13]), (w = n[14])),
    (0, Z.useLayoutEffect)(C, w));
  let fe, T;
  (n[15] !== h || n[16] !== u || n[17] !== p || n[18] !== m || n[19] !== l || n[20] !== a
    ? ((fe = () => {
        let e = o.current;
        if (l || e == null) return;
        let t = () => {
          let t = e.querySelector(`[aria-haspopup="dialog"][aria-expanded="true"]`) != null;
          a.set(E, !u || p || m || t || h > 102);
        };
        t();
        let n = new MutationObserver(t);
        return (
          n.observe(e, { attributes: !0, attributeFilter: [`aria-expanded`], childList: !0, subtree: !0 }),
          () => {
            (n.disconnect(), a.set(E, !1));
          }
        );
      }),
      (T = [h, l, u, p, m, a]),
      (n[15] = h),
      (n[16] = u),
      (n[17] = p),
      (n[18] = m),
      (n[19] = l),
      (n[20] = a),
      (n[21] = fe),
      (n[22] = T))
    : ((fe = n[21]), (T = n[22])),
    (0, Z.useLayoutEffect)(fe, T));
  let pe = i == null ? s : i.transition,
    me = i == null ? ae : i.escapeHandler,
    he = i == null ? oe : i.bannerTarget,
    ge = i == null ? se : i.overlayOwner,
    k;
  n[23] === ee
    ? (k = n[24])
    : ((k = (0, Q.jsx)(`div`, { ref: o, "data-right-panel-composer-overlay-content": `true`, children: ee })),
      (n[23] = ee),
      (n[24] = k));
  let A;
  n[25] !== ge || n[26] !== k
    ? ((A = (0, Q.jsx)(ce, { value: ge, children: k })), (n[25] = ge), (n[26] = k), (n[27] = A))
    : (A = n[27]);
  let j;
  n[28] !== A || n[29] !== he
    ? ((j = (0, Q.jsx)(ie, { value: he, children: A })), (n[28] = A), (n[29] = he), (n[30] = j))
    : (j = n[30]);
  let N;
  n[31] !== j || n[32] !== me
    ? ((N = (0, Q.jsx)(Ve, { value: me, children: j })), (n[31] = j), (n[32] = me), (n[33] = N))
    : (N = n[33]);
  let F;
  return (
    n[34] !== N || n[35] !== pe
      ? ((F = (0, Q.jsx)(Se, { value: pe, children: N })), (n[34] = N), (n[35] = pe), (n[36] = F))
      : (F = n[36]),
    F
  );
}
var et, Z, tt, Q, nt;
function $() {
  return ($ = e(() => {
    ((et = o()),
      oe(),
      u(),
      (Z = te()),
      (tt = i()),
      l(),
      I(),
      be(),
      S(),
      B(),
      y(),
      L(),
      Ge(),
      m(),
      Be(),
      ze(),
      pe(),
      V(),
      f(),
      Y(),
      K(),
      Le(),
      ke(),
      ve(),
      w(),
      ge(),
      C(),
      Ue(),
      Ne(),
      ae(),
      Ee(),
      qe(),
      F(),
      xe(),
      (Q = re()),
      (nt = 24));
  }))();
}
export { W as a, q as i, $ as n, K as o, Y as r, G as s, X as t };
//# sourceMappingURL=content-chat-surface-4e82aae84549.js.map
