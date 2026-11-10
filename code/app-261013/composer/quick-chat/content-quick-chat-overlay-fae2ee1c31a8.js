import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Cz as n,
  EPt as r,
  Ixt as ee,
  Pxt as i,
  TLt as a,
  Tz as te,
  VDt as ne,
  Vxt as o,
  Z4 as re,
  _z as ie,
  aSt as ae,
  eD as oe,
  gz as se,
  iz as ce,
  jDt as le,
  nSt as s,
  oSt as c,
  pIt as l,
  pLt as u,
  rz as d,
  tD as f,
  vwt as p,
  vzt as m,
  wot as h,
  xMt as g,
  yMt as _,
  ywt as v,
  yzt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  BCr as y,
  C3n as b,
  C6n as de,
  Ctt as x,
  Cwr as S,
  G8t as C,
  I3n as w,
  JCr as fe,
  Jxn as pe,
  K8t as me,
  Mfr as he,
  Nfr as T,
  OPr as E,
  Qjr as D,
  RCr as O,
  S6n as k,
  S8t as A,
  Stt as ge,
  Txn as j,
  XKt as _e,
  Y8t as ve,
  YKt as ye,
  Zjr as be,
  _tt as xe,
  _xn as Se,
  att as Ce,
  b6n as we,
  btt as Te,
  ctt as M,
  dtt as N,
  dwn as P,
  ftt as Ee,
  gwr as F,
  hwn as I,
  itt as De,
  kPr as Oe,
  ltt as ke,
  mWt as Ae,
  mtt as L,
  ntt as R,
  pWt as z,
  q8t as je,
  qxn as Me,
  rtt as Ne,
  utt as Pe,
  w3n as Fe,
  wtt as Ie,
  x6n as Le,
  x8t as Re,
  xtt as B,
  zCr as ze,
} from "./app-initial-5851df3f6cb1.js";
import { Ht as Be, Ut as Ve, _f as V, gf as He, hl as H, ml as Ue } from "./app-primary-fe8a450b3b04.js";
import { i as U, t as We } from "./drop-zones-aa6986de4c9a.js";
import { n as W, t as Ge } from "./quick-chat-floating-surface-51ff4a9417a5.js";
import { r as Ke, t as qe } from "./floating-chat-dock-menu-ad701bd452d0.js";
var G, Je, K, Ye, q, J;
function Y() {
  return (Y = e(() => {
    (i(),
      r(),
      O(),
      P(),
      w(),
      h(),
      S(),
      be(),
      E(),
      (G = u({ app_ids: l(a()).catch([]), mcp_servers: l(a()).catch([]) })),
      (Je = c(F, ({ get: e }) => e(b) && e(y) && e(Ye))),
      (K = s(t, (e, { get: t }) => {
        if (!t(Oe, `305543071`)) return !0;
        if (e == null) return !1;
        let n = G.safeParse(t(D, `2503859075`)?.value);
        return n.success
          ? e.connectorId == null
            ? n.data.mcp_servers.includes(e.server)
            : n.data.app_ids.includes(e.connectorId)
          : !1;
      })),
      (Ye = c(F, ({ get: e }) => e(I.activeTab$)?.tabType.composerAppSource != null && e(K, e(J)))),
      (q = s(F, (e, { get: t }) => e != null && t(K, (t(b) ? t(J) : null) ?? e))),
      (J = c(F, ({ get: e }) => {
        let t = e(I.activeTab$);
        return t?.tabType.composerAppSource?.(t.props);
      })));
  }))();
}
function Xe(e, t) {
  let n = Symbol();
  return (
    e.set(X, t, n),
    () => {
      e.get(X, t) === n && e.set(X, t, null);
    }
  );
}
var X, Ze;
function Z() {
  return (Z = e(() => {
    (i(),
      O(),
      P(),
      w(),
      S(),
      (X = ae(F, (e) => null)),
      (Ze = c(F, ({ get: e }) => {
        let t = e(I.activeTab$)?.tabId;
        return t != null && e(b) && e(Fe) && e(y) && e(X, t) != null;
      })));
  }))();
}
function Qe(e) {
  let t = (0, tt.c)(59),
    {
      children: n,
      composerOnly: r,
      forceExpanded: i,
      placement: a,
      showHeader: ie,
      showComposerDivider: ae,
      isHidden: le,
      persistPresentation: s,
      reserveContent: c,
      reserveFullComposerHeight: l,
      onPresentationChange: u,
      title: d,
      titleContent: f,
      statusState: m,
      titleStatusState: h,
      hasElicitation: g,
      renderCompletionPreviews: _,
      renderTranscript: v,
      hasTranscript: ue,
    } = e,
    y = r !== void 0 && r,
    S = i !== void 0 && i,
    C = a === void 0 ? `floating` : a,
    w = ie === void 0 ? !y : ie,
    T = ae === void 0 ? !y : ae,
    E = le !== void 0 && le,
    D = s === void 0 || s,
    O = l !== void 0 && l,
    k = ee(F),
    A = C === `pane`,
    j = ne(),
    _e = o(Ze),
    ve = o(Je),
    be = o(b),
    xe = o(ze),
    Ce = ce(),
    M = E || _e || (!A && (ve || (be && xe && Ce))),
    N = (0, Q.useContext)(je),
    P = (0, Q.useContext)(Le),
    De = (0, Q.useContext)(we),
    Oe = (0, Q.useContext)(He),
    ke = (0, Q.useContext)(Ue),
    L = (0, Q.useContext)(oe),
    R = (0, Q.useContext)(se),
    z = te(),
    [Me, Ne] = (0, Q.useState)(null),
    Fe = o(Ee),
    Ie = o(x),
    B;
  t[0] !== y || t[1] !== D || t[2] !== Ie || t[3] !== w
    ? ((B = D ? Ie : void 0),
      y && !w && (B = `compact`),
      (t[0] = y),
      (t[1] = D),
      (t[2] = Ie),
      (t[3] = w),
      (t[4] = B))
    : (B = t[4]);
  let Ve = o(de),
    V = g ?? Ve,
    H = o(I.activeTab$),
    U;
  t[5] !== H || t[6] !== A ? ((U = A ? null : he(H)), (t[5] = H), (t[6] = A), (t[7] = U)) : (U = t[7]);
  let W = U,
    Ke = o(ge),
    qe = O || H?.tabType.kind === `latex-document` || H?.tabType.kind === `image-preview`,
    G = !Fe && (!V || Ke),
    [K, Ye] = (0, Q.useState)(null),
    q;
  t[8] !== N || t[9] !== k
    ? ((q = (e) => {
        if (
          e == null ||
          !(e instanceof MouseEvent) ||
          e.type === `pointercancel` ||
          N == null ||
          k.get(fe) == null ||
          k.get(I.activeTab$) == null ||
          e.clientY < 0 ||
          e.clientY > window.innerHeight
        )
          return null;
        let t = N.getBoundingClientRect();
        return e.clientX <= t.left + rt ? `left` : e.clientX >= t.right - rt ? `right` : null;
      }),
      (t[8] = N),
      (t[9] = k),
      (t[10] = q))
    : (q = t[10]);
  let J = q,
    Y;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, $.jsx)(`div`, {
        ref: (e) => {
          e != null && Ne(e);
        },
        className: `contents`,
      })),
      (t[11] = Y))
    : (Y = t[11]);
  let Xe = A || M,
    X;
  t[12] !== H || t[13] !== j || t[14] !== A || t[15] !== N || t[16] !== K
    ? ((X =
        !A && N != null && K != null && H != null
          ? (0, nt.createPortal)(
              (0, $.jsx)(We, { destination: K, direction: re(j.locale), surface: `chat` }),
              N,
            )
          : null),
      (t[12] = H),
      (t[13] = j),
      (t[14] = A),
      (t[15] = N),
      (t[16] = K),
      (t[17] = X))
    : (X = t[17]);
  let Z;
  t[18] !== W ||
  t[19] !== H?.tabId ||
  t[20] !== H?.tabType ||
  t[21] !== n ||
  t[22] !== y ||
  t[23] !== S ||
  t[24] !== J ||
  t[25] !== V ||
  t[26] !== ue ||
  t[27] !== L ||
  t[28] !== ke ||
  t[29] !== R ||
  t[30] !== De ||
  t[31] !== P ||
  t[32] !== j ||
  t[33] !== M ||
  t[34] !== G ||
  t[35] !== A ||
  t[36] !== N ||
  t[37] !== u ||
  t[38] !== Me ||
  t[39] !== D ||
  t[40] !== _ ||
  t[41] !== v ||
  t[42] !== c ||
  t[43] !== k ||
  t[44] !== qe ||
  t[45] !== T ||
  t[46] !== w ||
  t[47] !== m ||
  t[48] !== B ||
  t[49] !== Oe ||
  t[50] !== d ||
  t[51] !== f ||
  t[52] !== h ||
  t[53] !== z
    ? ((Z = (e) =>
        (0, $.jsx)(p, {
          transformPagePoint: (e) => ({ x: e.x / z, y: e.y / z }),
          children: (0, $.jsx)(Le, {
            value: A
              ? P
              : {
                  activeBrowserTabId: W,
                  isInsideOverlay: !0,
                  onAttachmentAdded: () => {
                    k.get(I.activeTab$)?.tabId === H?.tabId &&
                      (k.get(Ee) || Pe(k, { prefersReducedMotion: !0 }), Se());
                  },
                  shouldAnimate: !1,
                },
            children: (0, $.jsx)(we, {
              value: A ? De : `expanded`,
              children: (0, $.jsx)(Ge, {
                dockThreadKey: Re,
                titleContent: f,
                statusState: m,
                titleStatusState: h,
                hasTranscript: ue,
                renderCompletionPreviews: _,
                containerSize: e,
                renderMenu: $e,
                forceExpanded: S || (V && !y),
                isHidden: A || M,
                isMinimized: G,
                onDragOver: y
                  ? void 0
                  : (e) => {
                      let t = J(e);
                      return (Ye(t), t != null);
                    },
                onDragEnd: y
                  ? void 0
                  : (e) => {
                      Ye(null);
                      let t = J(e);
                      return t != null && me(k, `tab_drag`, () => Ae(k, k.get(pe).chat, t));
                    },
                presentation: B,
                showHeader: w,
                showComposerDivider: T,
                background: y && !w ? void 0 : `panel`,
                onPresentationChange: (e) => {
                  (D && k.set(x, e), u?.(e));
                },
                onMinimizedChange: (e) => {
                  (e ? Te : Pe)(k, { prefersReducedMotion: !0 });
                },
                title:
                  d ??
                  j.formatMessage({
                    id: `quickChat.mainConversation`,
                    defaultMessage: `Chat`,
                    description: `Fallback title for the task's main conversation in the floating chat`,
                  }),
                renderTranscript: v == null ? void 0 : (e, t) => v({ isVisible: t && !A && !M }),
                children: (e) =>
                  (0, $.jsx)(He, {
                    value: !A && W != null ? N : Oe,
                    children: (0, $.jsx)(Be, {
                      target: A ? Me : null,
                      children: (0, $.jsx)(et, {
                        mainContentElement: N,
                        presentation: e,
                        paneContext: A
                          ? { transition: P, escapeHandler: ke, bannerTarget: L, overlayOwner: R }
                          : void 0,
                        reserveFullComposerHeight: qe,
                        reserveContent:
                          c ??
                          (W == null && H?.tabType.kind !== `mcp-app` && H?.tabType.kind !== `mcp-extension`),
                        children: typeof n == `function` ? n(A ? void 0 : e) : n,
                      }),
                    }),
                  }),
              }),
            }),
          }),
        })),
      (t[18] = W),
      (t[19] = H?.tabId),
      (t[20] = H?.tabType),
      (t[21] = n),
      (t[22] = y),
      (t[23] = S),
      (t[24] = J),
      (t[25] = V),
      (t[26] = ue),
      (t[27] = L),
      (t[28] = ke),
      (t[29] = R),
      (t[30] = De),
      (t[31] = P),
      (t[32] = j),
      (t[33] = M),
      (t[34] = G),
      (t[35] = A),
      (t[36] = N),
      (t[37] = u),
      (t[38] = Me),
      (t[39] = D),
      (t[40] = _),
      (t[41] = v),
      (t[42] = c),
      (t[43] = k),
      (t[44] = qe),
      (t[45] = T),
      (t[46] = w),
      (t[47] = m),
      (t[48] = B),
      (t[49] = Oe),
      (t[50] = d),
      (t[51] = f),
      (t[52] = h),
      (t[53] = z),
      (t[54] = Z))
    : (Z = t[54]);
  let Qe;
  return (
    t[55] !== Xe || t[56] !== X || t[57] !== Z
      ? ((Qe = (0, $.jsxs)($.Fragment, {
          children: [Y, (0, $.jsx)(ye, { isHidden: Xe, overlay: X, children: Z })],
        })),
        (t[55] = Xe),
        (t[56] = X),
        (t[57] = Z),
        (t[58] = Qe))
      : (Qe = t[58]),
    Qe
  );
}
function $e(e) {
  return (0, $.jsx)(qe, { ...e });
}
function et(e) {
  let t = (0, tt.c)(37),
    {
      children: n,
      mainContentElement: r,
      presentation: i,
      paneContext: a,
      reserveContent: te,
      reserveFullComposerHeight: ne,
    } = e,
    o = ee(F),
    re = (0, Q.useRef)(null),
    ie = (0, Q.useContext)(Le),
    ae = (0, Q.useContext)(Ue),
    ce = (0, Q.useContext)(oe),
    le = (0, Q.useContext)(se),
    { activeBrowserTabId: s } = ie,
    c = a != null,
    {
      isCompact: l,
      isDockedTop: u,
      isHidden: d,
      isMinimized: f,
      isMoving: p,
      composerContentHeight: m,
      dockedReservePx: h,
    } = i,
    g = te && !d && !f ? Math.max(118, l ? h : 0, ne ? m + 118 - 102 : 0) : 0,
    _ = u && l && h > 0 ? g : 0,
    [v, ue] = (0, Q.useState)(!f);
  (l || f) && v !== !f && ue(!f);
  let y = te && !d && v ? Ne : 0,
    b,
    de;
  (t[0] !== s || t[1] !== c
    ? ((b = () => {
        if (c || s == null) return;
        let e = re.current?.ownerDocument.activeElement;
        e instanceof HTMLElement && re.current?.contains(e) && e.blur();
      }),
      (de = [s, c]),
      (t[0] = s),
      (t[1] = c),
      (t[2] = b),
      (t[3] = de))
    : ((b = t[2]), (de = t[3])),
    (0, Q.useLayoutEffect)(b, de));
  let x, S;
  (t[4] !== y ||
  t[5] !== u ||
  t[6] !== d ||
  t[7] !== f ||
  t[8] !== c ||
  t[9] !== r ||
  t[10] !== g ||
  t[11] !== o ||
  t[12] !== _
    ? ((x = () => {
        if (!(c || r == null))
          return (
            r.style.setProperty(R, u ? `${y}px 0 0` : `0 0 ${y}px`),
            r.style.setProperty(De, `${d || f || u ? 0 : 102}px`),
            r.style.setProperty(Ce, `${u ? 0 : g}px`),
            r.style.setProperty(M, `${u ? g : 0}px`),
            xe(o, u ? 0 : g),
            o.set(L, _),
            () => {
              (r.style.removeProperty(R),
                r.style.removeProperty(De),
                r.style.removeProperty(Ce),
                r.style.removeProperty(M),
                xe(o, 0),
                o.set(L, 0));
            }
          );
      }),
      (S = [y, c, u, d, f, r, g, o, _]),
      (t[4] = y),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = c),
      (t[9] = r),
      (t[10] = g),
      (t[11] = o),
      (t[12] = _),
      (t[13] = x),
      (t[14] = S))
    : ((x = t[13]), (S = t[14])),
    (0, Q.useLayoutEffect)(x, S));
  let C, w;
  (t[15] !== m || t[16] !== l || t[17] !== f || t[18] !== p || t[19] !== c || t[20] !== o
    ? ((C = () => {
        let e = re.current;
        if (c || e == null) return;
        let t = () => {
          let t = e.querySelector(`[aria-haspopup="dialog"][aria-expanded="true"]`) != null;
          o.set(N, !l || f || p || t || m > 102);
        };
        t();
        let n = new MutationObserver(t);
        return (
          n.observe(e, { attributes: !0, attributeFilter: [`aria-expanded`], childList: !0, subtree: !0 }),
          () => {
            (n.disconnect(), o.set(N, !1));
          }
        );
      }),
      (w = [m, c, l, f, p, o]),
      (t[15] = m),
      (t[16] = l),
      (t[17] = f),
      (t[18] = p),
      (t[19] = c),
      (t[20] = o),
      (t[21] = C),
      (t[22] = w))
    : ((C = t[21]), (w = t[22])),
    (0, Q.useLayoutEffect)(C, w));
  let fe = a == null ? ie : a.transition,
    pe = a == null ? ae : a.escapeHandler,
    me = a == null ? ce : a.bannerTarget,
    he = a == null ? le : a.overlayOwner,
    T;
  t[23] === n
    ? (T = t[24])
    : ((T = (0, $.jsx)(`div`, { ref: re, "data-right-panel-composer-overlay-content": `true`, children: n })),
      (t[23] = n),
      (t[24] = T));
  let E;
  t[25] !== he || t[26] !== T
    ? ((E = (0, $.jsx)(se, { value: he, children: T })), (t[25] = he), (t[26] = T), (t[27] = E))
    : (E = t[27]);
  let D;
  t[28] !== E || t[29] !== me
    ? ((D = (0, $.jsx)(oe, { value: me, children: E })), (t[28] = E), (t[29] = me), (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== D || t[32] !== pe
    ? ((O = (0, $.jsx)(Ue, { value: pe, children: D })), (t[31] = D), (t[32] = pe), (t[33] = O))
    : (O = t[33]);
  let k;
  return (
    t[34] !== O || t[35] !== fe
      ? ((k = (0, $.jsx)(Le, { value: fe, children: O })), (t[34] = O), (t[35] = fe), (t[36] = k))
      : (k = t[36]),
    k
  );
}
var tt, Q, nt, $, rt;
function it() {
  return (it = e(() => {
    ((tt = m()),
      v(),
      i(),
      (Q = ue()),
      (nt = _()),
      le(),
      ve(),
      O(),
      P(),
      w(),
      n(),
      T(),
      f(),
      V(),
      H(),
      j(),
      Ve(),
      ie(),
      Z(),
      Y(),
      W(),
      S(),
      B(),
      k(),
      ke(),
      C(),
      z(),
      U(),
      Me(),
      d(),
      _e(),
      Ke(),
      Ie(),
      A(),
      ($ = g()),
      (rt = 24));
  }))();
}
export { Ye as a, Xe as i, it as n, Y as o, Z as r, q as s, Qe as t };
//# sourceMappingURL=content-quick-chat-overlay-fae2ee1c31a8.js.map
