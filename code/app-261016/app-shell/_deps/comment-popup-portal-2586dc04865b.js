import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Ext as r,
  FBt as i,
  FNt as a,
  Ght as o,
  LNt as s,
  MFt as c,
  MNt as l,
  NFt as u,
  NNt as d,
  PBt as ee,
  Qst as te,
  Rrt as f,
  Txt as ne,
  Vrt as re,
  XOt as ie,
  Xht as ae,
  ZSt as oe,
  _B as se,
  ast as p,
  cxt as ce,
  dB as le,
  fB as m,
  gB as ue,
  gut as de,
  hB as fe,
  hit as pe,
  iCt as me,
  ist as he,
  jFt as h,
  m7 as ge,
  oit as g,
  okt as _e,
  pxt as _,
  qrt as ve,
  sct as v,
  sxt as ye,
  vB as y,
  y7 as be,
} from "./app-shared-2feb3d4c6fcc.js";
import { C_ as xe, S_ as Se, czt as Ce, uzt as b, xMr as we, yMr as Te } from "./app-initial-ad16eaadf81f.js";
import { i as Ee, n as De, r as Oe, t as ke } from "./annotation-comment-editor-card-cfcadbd19454.js";
import { n as Ae, t as x } from "./use-shake-46b020d1f52b.js";
import { a as je, r as Me } from "./comment-mode-coachmark-state-8aacb05ce464.js";
function Ne(e, t) {
  return e.anchor.kind !== `element` && (e.additionalAnchors?.length ?? 0) === 0 && t === `necessary`;
}
function S() {
  return (S = e(() => {
    ne();
  }))();
}
function Pe(e) {
  let n = (0, Ve.c)(212),
    {
      allowDirectSubmit: i,
      allowImageAttachments: a,
      browserTabId: s,
      conversationId: d,
      defaultCreateSubmitMode: ee,
      onActiveEditorDismissRequestChange: f,
      showAdjustEntry: ne,
    } = e,
    re = i === void 0 || i,
    ie = ee === void 0 ? `saved` : ee,
    oe = ne === void 0 || ne,
    p = t(te),
    ce = me(a ?? Ce),
    m = _e(),
    fe = pe(de.annotationScreenshotsMode),
    h = (0, w.useRef)(null),
    g = (0, w.useRef)(null),
    _ = (0, w.useRef)(null),
    { shake: v, stopShake: ye } = Ae(_),
    y = (0, w.useRef)(null),
    xe = (0, w.useRef)(0),
    b = (0, w.useRef)(null),
    Te = (0, w.useRef)(null),
    Ee = (0, w.useRef)(0),
    De = (0, w.useRef)(0),
    x = (0, w.useRef)(!0),
    je = (0, w.useRef)(!1),
    S = (0, w.useRef)(null),
    Pe = (0, w.useRef)(null),
    C = (0, w.useRef)(!1),
    Be = (0, w.useRef)(0),
    E = (0, w.useRef)(!1),
    D = (0, w.useRef)(!0),
    O = (0, w.useRef)(!1),
    [k, Ke] = (0, w.useState)(!1),
    [qe, Je] = (0, w.useState)(!0),
    [Ye, Xe] = (0, w.useState)(!0),
    [Ze, Qe] = (0, w.useState)(!1),
    [$e, et] = (0, w.useState)(null),
    tt;
  n[0] === m
    ? (tt = n[1])
    : ((tt = m.formatMessage({
        id: `browserSidebarCommentOverlay.windowTitle`,
        defaultMessage: `Browser comment`,
        description: `Title for the floating browser comment editor window`,
      })),
      (n[0] = m),
      (n[1] = tt));
  let nt = tt,
    [A, j] = (0, w.useState)(null),
    M =
      A?.message.session.surfaceMode === `editor` &&
      (A.message.session.pageInitialComment?.text.length ?? 0) > 0,
    [N, rt] = (0, w.useState)(null),
    it;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = () => {
        xe.current += 1;
      }),
      (n[2] = it))
    : (it = n[2]);
  let P = it,
    at;
  n[3] !== s || n[4] !== d || n[5] !== M
    ? ((at = (e, t, n, r, i) => {
        (i !== !1 && (Me(), et(e)),
          t != null &&
            M &&
            rt({ sessionId: e, surfaceSize: t, placementSurfaceSize: n, metadataHeaderHeight: r }),
          c.dispatchMessage(`browser-sidebar-comment-overlay-mounted`, {
            browserTabId: s,
            conversationId: d,
            sessionId: e,
            placementSurfaceSize: n,
            surfaceSize: t,
            metadataHeaderHeight: r,
            isLayoutReady: i,
          }));
      }),
      (n[3] = s),
      (n[4] = d),
      (n[5] = M),
      (n[6] = at))
    : (at = n[6]);
  let ot = at,
    st;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => {
        ((D.current = e), (O.current = !1), Xe(e), Qe(!1));
      }),
      (n[7] = st))
    : (st = n[7]);
  let ct = st,
    lt;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e) => {
        je.current = e;
        let t = S.current;
        e ||
          t == null ||
          h.current?.window.dispatchEvent(new MouseEvent(`mousemove`, { clientX: t.x, clientY: t.y }));
      }),
      (n[8] = lt))
    : (lt = n[8]);
  let ut = lt,
    dt;
  n[9] !== s || n[10] !== d
    ? ((dt = (e) => {
        let t = e.message.session.sessionId,
          { popupWindow: n } = e,
          r = (xe.current += 1),
          i = () => !n.closed && y.current === t && xe.current === r;
        n.requestAnimationFrame(() => {
          if (!i()) return;
          let e = he.browserHost;
          if (e == null) {
            n.focus();
            return;
          }
          e.focusCommentOverlay({ browserTabId: s, conversationId: d, sessionId: t }).catch(() => {
            i() && n.focus();
          });
        });
      }),
      (n[9] = s),
      (n[10] = d),
      (n[11] = dt))
    : (dt = n[11]);
  let F = dt,
    ft;
  n[12] !== s || n[13] !== d || n[14] !== F || n[15] !== v
    ? ((ft = (e) => {
        let t = e.message.session.sessionId;
        return Oe({
          targetMode: e.message.session.target.mode,
          reason: `exit`,
          isLightDismissible: D.current,
          isLightDismissArmed: O.current,
        }) === `dismiss`
          ? (P(),
            j(null),
            (b.current = null),
            c.dispatchMessage(`browser-sidebar-comment-overlay-close`, {
              browserTabId: s,
              conversationId: d,
              sessionId: t,
            }),
            !0)
          : ((O.current = !0), Qe(!0), F(e), v(), !1);
      }),
      (n[12] = s),
      (n[13] = d),
      (n[14] = F),
      (n[15] = v),
      (n[16] = ft))
    : (ft = n[16]);
  let I = ft,
    pt;
  n[17] !== I || n[18] !== A
    ? ((pt = () => A != null && I(A)), (n[17] = I), (n[18] = A), (n[19] = pt))
    : (pt = n[19]);
  let mt = pt,
    ht,
    gt;
  (n[20] !== s || n[21] !== d || n[22] !== I || n[23] !== m || n[24] !== nt || n[25] !== p || n[26] !== ye
    ? ((ht = (e) => {
        let t = (e) => {
          (P(),
            (0, He.flushSync)(() => {
              (j(null), et(null));
            }),
            e?.replaceChildren(),
            (De.current = 0),
            (je.current = !1));
        };
        if (e.browserTabId !== s || e.conversationId !== d) return;
        (e.isAnnotationSelectionActive !== !0 || y.current !== e.session.sessionId) &&
          ((S.current = null), Ke(!1));
        let n = (Ee.current += 1);
        if (!e.visible && !e.shouldPrewarm) {
          (t(h.current?.window.document.getElementById(Ue)), (y.current = null), (b.current = null));
          return;
        }
        if (b.current != null && e.visible) {
          if (b.current === e.session.sessionId && e.session.target.mode === `create`) return;
          b.current = null;
        }
        let i = y.current != null && y.current !== e.session.sessionId;
        if (i && h.current != null) {
          ((De.current = 0),
            (0, He.flushSync)(() => {
              j(null);
            }),
            g.current?.(),
            (g.current = null));
          let e = h.current.window;
          ((h.current = null), e.closed || e.close());
        }
        let a = Re({
          browserTabId: s,
          conversationId: d,
          openerWindow: window,
          existingPopup: h.current,
          message: e,
        });
        if (a == null) return;
        let { window: o } = a,
          c = h.current?.window !== o;
        if (c) {
          g.current?.();
          let e = () => {
            h.current?.window === o && (P(), (h.current = null), j(null));
          };
          (o.addEventListener(`pagehide`, e),
            (g.current = () => {
              o.removeEventListener(`pagehide`, e);
            }));
        }
        h.current = a;
        let { root: l, stylesheetsReady: u } = ze(o, document, nt);
        (c && (a.stylesheetsReady = u),
          (l.style.visibility = !e.visible || i ? `hidden` : ``),
          (c || i) && t(l),
          y.current !== e.session.sessionId &&
            (ye(),
            e.session.screenshotFailed &&
              p
                .get(ve)
                .danger(
                  m.formatMessage({
                    id: `browserSidebarCommentOverlay.snapshotFailed`,
                    defaultMessage: `Screenshot unavailable; you can still annotate this object`,
                    description: `Notification when capturing a selected graphics object fails; its name and metadata remain available for the comment`,
                  }),
                  { errorAnalytics: { toastId: `browserSidebarCommentOverlay.snapshotFailed` } },
                ),
            (y.current = e.session.sessionId),
            (b.current = null),
            (D.current =
              e.session.target.mode === `edit` ||
              (r(e.session.body, e.session.pageInitialComment?.text) &&
                (e.session.attachedImages?.length ?? 0) === 0)),
            (O.current = !1),
            Xe(D.current),
            Qe(!1)));
        let ee = () => {
          if (Ee.current !== n || h.current !== a || y.current !== e.session.sessionId) return;
          let t = { message: e, root: l, popupWindow: o };
          (0, He.flushSync)(() => {
            j(t);
          });
          let r = e.dismissRequestSequence ?? 0;
          r > De.current && ((De.current = r), I(t));
        };
        if (a.stylesheetsReady == null) {
          ee();
          return;
        }
        a.stylesheetsReady.then(ee);
      }),
      (gt = [s, P, d, I, m, nt, p, ye]),
      (n[20] = s),
      (n[21] = d),
      (n[22] = I),
      (n[23] = m),
      (n[24] = nt),
      (n[25] = p),
      (n[26] = ye),
      (n[27] = ht),
      (n[28] = gt))
    : ((ht = n[27]), (gt = n[28])),
    u(`browser-sidebar-comment-overlay-session`, ht, gt));
  let _t, vt;
  (n[29] !== f || n[30] !== A || n[31] !== mt
    ? ((_t = () => {
        if (f != null) {
          if (A == null || !A.message.visible || A.message.session.surfaceMode !== `editor`) {
            f(null);
            return;
          }
          return (
            f(mt),
            () => {
              f(null);
            }
          );
        }
      }),
      (vt = [f, A, mt]),
      (n[29] = f),
      (n[30] = A),
      (n[31] = mt),
      (n[32] = _t),
      (n[33] = vt))
    : ((_t = n[32]), (vt = n[33])),
    (0, w.useEffect)(_t, vt));
  let yt, bt;
  (n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = () => () => {
        P();
        let e = h.current?.window ?? null;
        (g.current?.(), (g.current = null), (h.current = null), e != null && !e.closed && e.close());
      }),
      (bt = [P]),
      (n[34] = yt),
      (n[35] = bt))
    : ((yt = n[34]), (bt = n[35])),
    (0, w.useEffect)(yt, bt));
  let L, xt;
  n[36] !== M || n[37] !== A || n[38] !== N
    ? ((L =
        M && A != null && N?.sessionId === A.message.session.sessionId
          ? o({
              placementContext: A.message.placementContext,
              anchorState: A.message.session.anchorState,
              forceFallback: A.message.session.placementStrategy === `fallback`,
              body: A.message.session.body,
              placementSurfaceSize: N.placementSurfaceSize,
              previewSurfaceSize: N.surfaceSize,
              metadataHeaderHeight: N.metadataHeaderHeight,
              surfaceMode: A.message.session.surfaceMode,
            })
          : null),
      L != null &&
        A != null &&
        (Math.min(A.message.viewportOverlayBounds.x, L.editorWindowBounds.x) !==
          A.message.overlayWindowBounds.x ||
          Math.min(A.message.viewportOverlayBounds.y, L.editorWindowBounds.y) !==
            A.message.overlayWindowBounds.y) &&
        (L = null),
      (xt = A == null ? null : Fe(A.message, L)),
      (n[36] = M),
      (n[37] = A),
      (n[38] = N),
      (n[39] = L),
      (n[40] = xt))
    : ((L = n[39]), (xt = n[40]));
  let R = xt,
    z =
      A?.message.visible === !0 &&
      A.message.session.surfaceMode === `editor` &&
      A.message.session.target.mode === `create` &&
      A.message.session.anchorState.anchor.kind !== `text`
        ? A.popupWindow
        : null,
    B = z == null ? null : A?.message.session.sessionId,
    St = A?.message.isAnnotationSelectionActive === !0 ? A.message.session.sessionId : null,
    Ct;
  n[41] !== z?.document ||
  n[42] !== B ||
  n[43] !== s ||
  n[44] !== d ||
  n[45] !== R ||
  n[46] !== M ||
  n[47] !== qe ||
  n[48] !== k ||
  n[49] !== A?.message
    ? ((Ct = (e) => {
        let t = e == null ? S.current : { x: e.clientX, y: e.clientY };
        if (R == null || B == null || t == null) return;
        let n = Ie(R, _.current, `[data-browser-comment-editor-surface]`),
          r = Ie(R, _.current, `[data-browser-comment-editor-tray-surface]`),
          i = z?.document.defaultView,
          a =
            je.current ||
            Be.current > 0 ||
            E.current ||
            (M &&
              (((e?.buttons ?? 0) !== 0 && x.current) ||
                (i != null &&
                  e?.target instanceof i.Element &&
                  e.target.closest(`[role="tooltip"]`) != null))) ||
            Le(t, n ?? R) === 0 ||
            (r != null && Le(t, r) === 0),
          o = S.current;
        if (((S.current = t), A?.message.isAnnotationSelectionActive === !0 && e?.isTrusted && n != null)) {
          let e = Le(t, n),
            r = e === 0,
            i = o != null && e < Le(o, n),
            a = e <= We && (r || i);
          ((k || a) && qe !== r && Je(r), k ? e > Ge && Ke(!1) : a && Ke(!0));
        }
        x.current !== a &&
          ((x.current = a),
          c.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-pointer-state`, {
            browserTabId: s,
            conversationId: d,
            sessionId: B,
            insideEditor: a,
          }));
      }),
      (n[41] = z?.document),
      (n[42] = B),
      (n[43] = s),
      (n[44] = d),
      (n[45] = R),
      (n[46] = M),
      (n[47] = qe),
      (n[48] = k),
      (n[49] = A?.message),
      (n[50] = Ct))
    : (Ct = n[50]);
  let V = ue(Ct),
    wt;
  n[51] === V
    ? (wt = n[52])
    : ((wt = () => {
        let e = y.current;
        return (
          (Be.current += 1),
          V(),
          () => {
            (--Be.current, y.current === e && V());
          }
        );
      }),
      (n[51] = V),
      (n[52] = wt));
  let Tt = ue(wt),
    Et,
    Dt;
  (n[53] !== z || n[54] !== B || n[55] !== s || n[56] !== d || n[57] !== V
    ? ((Et = () => {
        if (z == null || B == null) return;
        let e = !1,
          t = !1,
          n = null,
          r = null,
          i = (e, t) => {
            c.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-modifier-state`, {
              browserTabId: s,
              conversationId: d,
              sessionId: B,
              pressed: e,
              source: t,
            });
          },
          a = (a) => {
            if (a.key === `Shift`) {
              if (a.type === `keydown` && a.shiftKey) {
                ((e = !0), (r = n));
                return;
              }
              ((e = !1), (t = !1), (r = null), i(!1, `keyboard`));
            }
          },
          o = () => {
            ((e = !1), (t = !1), (r = null), i(!1, `lifecycle`));
          },
          l = () => {
            ((e = !1), (t = !1), (r = null), (E.current = !1), (C.current = !1), V(), i(!1, `window-blur`));
          },
          u = (a) => {
            let o = n,
              s = { x: a.clientX, y: a.clientY };
            if (((n = s), V(a), !a.isTrusted)) {
              e && (r = s);
              return;
            }
            if (!e || t || !a.shiftKey || a.buttons !== 0 || x.current) return;
            let c = r ?? o;
            (c == null ? a.movementX !== 0 || a.movementY !== 0 : c.x !== s.x || c.y !== s.y) &&
              ((t = !0), i(!0, `pointer`));
          };
        return (
          (x.current = !0),
          z.addEventListener(`keydown`, a, !0),
          z.addEventListener(`keyup`, a, !0),
          z.addEventListener(`blur`, l),
          z.addEventListener(`pagehide`, o),
          z.addEventListener(`mousemove`, u, !0),
          () => {
            (z.removeEventListener(`keydown`, a, !0),
              z.removeEventListener(`keyup`, a, !0),
              z.removeEventListener(`blur`, l),
              z.removeEventListener(`pagehide`, o),
              z.removeEventListener(`mousemove`, u, !0),
              (je.current = !1),
              (E.current = !1),
              o());
          }
        );
      }),
      (Dt = [s, d, z, B, V]),
      (n[53] = z),
      (n[54] = B),
      (n[55] = s),
      (n[56] = d),
      (n[57] = V),
      (n[58] = Et),
      (n[59] = Dt))
    : ((Et = n[58]), (Dt = n[59])),
    (0, w.useEffect)(Et, Dt));
  let Ot, kt;
  if (
    (n[60] !== St || n[61] !== z || n[62] !== B
      ? ((Ot = () => {
          let e = Pe.current;
          if (((Pe.current = St), e == null || St != null || z == null || B !== e)) return;
          let t = _.current?.querySelector(`[contenteditable="true"]`);
          if (t == null) return;
          let n = z,
            r = n.requestAnimationFrame(() => {
              n.closed || y.current !== e || (n.focus(), t.focus());
            });
          return () => {
            n.cancelAnimationFrame(r);
          };
        }),
        (kt = [St, z, B]),
        (n[60] = St),
        (n[61] = z),
        (n[62] = B),
        (n[63] = Ot),
        (n[64] = kt))
      : ((Ot = n[63]), (kt = n[64])),
    (0, w.useEffect)(Ot, kt),
    A == null || R == null)
  )
    return null;
  let { message: H, root: At, popupWindow: U } = A,
    W = H.session.sessionId,
    jt = H.session.surfaceMode === `preview`,
    Mt = !H.visible,
    G = H.isAnnotationSelectionActive === !0 && k,
    Nt = G && qe,
    Pt = Mt || $e !== W,
    Ft = H.session.designChange,
    K = oe && (H.session.designEditorState != null || Ft != null),
    It;
  n[65] !== s || n[66] !== d || n[67] !== W
    ? ((It = () => {
        (P(),
          j(null),
          (b.current = null),
          c.dispatchMessage(`browser-sidebar-comment-overlay-close`, {
            browserTabId: s,
            conversationId: d,
            sessionId: W,
          }));
      }),
      (n[65] = s),
      (n[66] = d),
      (n[67] = W),
      (n[68] = It))
    : (It = n[68]);
  let q = It,
    Lt;
  n[69] !== q ||
  n[70] !== Ze ||
  n[71] !== Ye ||
  n[72] !== H.session.target.mode ||
  n[73] !== A ||
  n[74] !== F ||
  n[75] !== v
    ? ((Lt = (e) => {
        if (
          Oe({
            targetMode: H.session.target.mode,
            reason: e,
            isLightDismissible: Ye,
            isLightDismissArmed: Ze,
          }) === `dismiss`
        ) {
          q();
          return;
        }
        ((O.current = !0), Qe(!0), F(A), v());
      }),
      (n[69] = q),
      (n[70] = Ze),
      (n[71] = Ye),
      (n[72] = H.session.target.mode),
      (n[73] = A),
      (n[74] = F),
      (n[75] = v),
      (n[76] = Lt))
    : (Lt = n[76]);
  let J = Lt,
    Rt;
  n[77] !== fe ||
  n[78] !== s ||
  n[79] !== d ||
  n[80] !== H.session.anchorState ||
  n[81] !== H.session.designChange ||
  n[82] !== H.session.target.mode ||
  n[83] !== p ||
  n[84] !== W
    ? ((Rt = (e, t) => {
        let { body: n, attachedImages: r, designChange: i } = e,
          { submitDirectly: a } = t === void 0 ? {} : t,
          o = a !== void 0 && a;
        if (b.current === W) return;
        if ((P(), j(null), H.session.target.mode !== `edit`)) {
          let e = ae(
            [H.session.anchorState.anchor, ...(H.session.anchorState.additionalAnchors ?? [])],
            i === void 0 ? H.session.designChange : i,
          );
          for (let t of e)
            we(p, ge, { ...t, interactionType: `submitted`, submitMode: o ? `direct` : `saved` });
          we(p, be, {
            hasAnnotationFeatures: e.length > 0,
            commentType: H.session.anchorState.anchor.kind,
            submitMode: o ? `direct` : `saved`,
            includesDesignTweak: (i === void 0 ? H.session.designChange : i) != null,
          });
        }
        let l = fe ?? `always`,
          u = Ne(H.session.anchorState, l);
        ((b.current = W),
          c.dispatchMessage(`browser-sidebar-comment-overlay-submit`, {
            browserTabId: s,
            conversationId: d,
            sessionId: W,
            body: n,
            attachedImages: r,
            designChange: i,
            ...(u ? { cropScreenshotToRegion: !0 } : {}),
            ...(o ? { submitDirectly: !0 } : {}),
          }));
      }),
      (n[77] = fe),
      (n[78] = s),
      (n[79] = d),
      (n[80] = H.session.anchorState),
      (n[81] = H.session.designChange),
      (n[82] = H.session.target.mode),
      (n[83] = p),
      (n[84] = W),
      (n[85] = Rt))
    : (Rt = n[85]);
  let Y = Rt,
    zt;
  n[86] !== s || n[87] !== d || n[88] !== W
    ? ((zt = (e) => {
        c.dispatchMessage(`browser-sidebar-comment-overlay-preview-open-changed`, {
          browserTabId: s,
          conversationId: d,
          sessionId: W,
          previewOpen: e,
        });
      }),
      (n[86] = s),
      (n[87] = d),
      (n[88] = W),
      (n[89] = zt))
    : (zt = n[89]);
  let Bt = zt,
    X;
  n[90] === Tt ? (X = n[91]) : ((X = { id: Ue, registerOpen: Tt }), (n[90] = Tt), (n[91] = X));
  let Vt;
  n[92] === Pt ? (Vt = n[93]) : ((Vt = Pt ? { visibility: `hidden` } : void 0), (n[92] = Pt), (n[93] = Vt));
  let Ht;
  n[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ht = (e) => {
        ((E.current = Be.current > 0), (S.current = { x: e.clientX, y: e.clientY }));
      }),
      (n[94] = Ht))
    : (Ht = n[94]);
  let Ut;
  n[95] === V
    ? (Ut = n[96])
    : ((Ut = () => {
        ((E.current = !1), (C.current = !1), V());
      }),
      (n[95] = V),
      (n[96] = Ut));
  let Wt;
  n[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wt = () => {
        C.current = !1;
      }),
      (n[97] = Wt))
    : (Wt = n[97]);
  let Gt;
  n[98] === V
    ? (Gt = n[99])
    : ((Gt = () => {
        ((C.current = !1), (E.current = !1), V());
      }),
      (n[98] = V),
      (n[99] = Gt));
  let Kt;
  n[100] === U
    ? (Kt = n[101])
    : ((Kt = (0, T.jsx)(Se, { keyboardEventTarget: U })), (n[100] = U), (n[101] = Kt));
  let qt;
  n[102] !== J || n[103] !== jt
    ? ((qt = jt
        ? null
        : (0, T.jsx)(`div`, {
            className: `absolute inset-0 bg-transparent`,
            role: `presentation`,
            onMouseDown: (e) => {
              (e.preventDefault(), (C.current = !E.current));
            },
            onMouseUp: (e) => {
              (e.preventDefault(), C.current && ((C.current = !1), J(`outside`)));
            },
          })),
      (n[102] = J),
      (n[103] = jt),
      (n[104] = qt))
    : (qt = n[104]);
  let Jt = !G && `translate-y-0 opacity-100`,
    Yt = G && !Nt && `translate-y-1 opacity-40`,
    Xt = Nt && `translate-y-2 opacity-0`,
    Zt;
  n[105] !== Jt || n[106] !== Yt || n[107] !== Xt
    ? ((Zt = l(
        `pointer-events-none absolute transition-[opacity,transform] duration-[180ms] ease-enter-snappy motion-reduce:transition-none`,
        Jt,
        Yt,
        Xt,
      )),
      (n[105] = Jt),
      (n[106] = Yt),
      (n[107] = Xt),
      (n[108] = Zt))
    : (Zt = n[108]);
  let Qt;
  n[109] !== R.height || n[110] !== R.width || n[111] !== R.x || n[112] !== R.y
    ? ((Qt = { left: R.x, top: R.y, width: R.width, height: R.height }),
      (n[109] = R.height),
      (n[110] = R.width),
      (n[111] = R.x),
      (n[112] = R.y),
      (n[113] = Qt))
    : (Qt = n[113]);
  let $t = !Pt,
    en = H.session.target.mode === `design` ? `saved` : ie,
    tn = H.session.defaultDesignEditorOpen === !0,
    nn = !Pt,
    Z;
  n[114] !== H.session.anchorState || n[115] !== H.session.target.mode
    ? ((Z =
        (H.session.target.mode === `create` || H.session.target.mode === `edit`) &&
        H.session.anchorState.anchor.kind !== `text`
          ? [H.session.anchorState.anchor, ...(H.session.anchorState.additionalAnchors ?? [])]
          : void 0),
      (n[114] = H.session.anchorState),
      (n[115] = H.session.target.mode),
      (n[116] = Z))
    : (Z = n[116]);
  let rn = L?.maxSurfaceWidth ?? H.maxSurfaceWidth,
    an = L?.maxSurfaceHeight ?? H.maxSurfaceHeight,
    on = L == null ? H.metadataAnchor : L.metadataAnchor,
    sn = L?.reservedTrayHeight ?? H.reservedTrayHeight,
    cn;
  n[117] !== H.session.anchorState ||
  n[118] !== H.session.body ||
  n[119] !== H.session.designChange?.comment ||
  n[120] !== H.session.pageInitialComment?.text ||
  n[121] !== H.session.target.mode ||
  n[122] !== p ||
  n[123] !== W
    ? ((cn = (e) => {
        let t = H.session.body || H.session.designChange?.comment || ``;
        if (
          H.session.target.mode !== `edit` &&
          Te.current !== W &&
          e !== t &&
          e !== H.session.pageInitialComment?.text
        ) {
          Te.current = W;
          for (let e of ae([
            H.session.anchorState.anchor,
            ...(H.session.anchorState.additionalAnchors ?? []),
          ]))
            e.feature !== `custom-controls` && we(p, ge, { ...e, interactionType: `edited` });
        }
      }),
      (n[117] = H.session.anchorState),
      (n[118] = H.session.body),
      (n[119] = H.session.designChange?.comment),
      (n[120] = H.session.pageInitialComment?.text),
      (n[121] = H.session.target.mode),
      (n[122] = p),
      (n[123] = W),
      (n[124] = cn))
    : (cn = n[124]);
  let ln;
  n[125] === Y
    ? (ln = n[126])
    : ((ln = (e) => {
        Y(e, { submitDirectly: !0 });
      }),
      (n[125] = Y),
      (n[126] = ln));
  let un;
  n[127] !== s || n[128] !== d || n[129] !== K || n[130] !== W
    ? ((un = K
        ? (e) => {
            c.dispatchMessage(`browser-sidebar-design-overlay-update`, {
              browserTabId: s,
              conversationId: d,
              sessionId: W,
              group: e,
            });
          }
        : void 0),
      (n[127] = s),
      (n[128] = d),
      (n[129] = K),
      (n[130] = W),
      (n[131] = un))
    : (un = n[131]);
  let dn;
  n[132] !== s || n[133] !== d || n[134] !== K || n[135] !== W
    ? ((dn = K
        ? (e) => {
            let { property: t, isEditingControl: n } = e;
            c.dispatchMessage(`browser-sidebar-comment-overlay-design-scrub-changed`, {
              browserTabId: s,
              conversationId: d,
              sessionId: W,
              property: t,
              isEditingControl: n,
            });
          }
        : void 0),
      (n[132] = s),
      (n[133] = d),
      (n[134] = K),
      (n[135] = W),
      (n[136] = dn))
    : (dn = n[136]);
  let fn;
  n[137] !== s ||
  n[138] !== d ||
  n[139] !== H.session.anchorState ||
  n[140] !== H.session.target.mode ||
  n[141] !== W
    ? ((fn =
        H.session.target.mode === `create` && H.session.anchorState.anchor.kind !== `text`
          ? (e) => {
              c.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-hover-state`, {
                browserTabId: s,
                conversationId: d,
                sessionId: W,
                selectionIndex: e,
              });
            }
          : void 0),
      (n[137] = s),
      (n[138] = d),
      (n[139] = H.session.anchorState),
      (n[140] = H.session.target.mode),
      (n[141] = W),
      (n[142] = fn))
    : (fn = n[142]);
  let pn;
  n[143] !== s ||
  n[144] !== d ||
  n[145] !== H.session.anchorState ||
  n[146] !== H.session.target.mode ||
  n[147] !== W
    ? ((pn =
        H.session.target.mode === `create` && H.session.anchorState.anchor.kind !== `text`
          ? (e) => {
              c.dispatchMessage(`browser-sidebar-comment-overlay-remove-annotation-selection`, {
                browserTabId: s,
                conversationId: d,
                sessionId: W,
                selectionIndex: e,
              });
            }
          : void 0),
      (n[143] = s),
      (n[144] = d),
      (n[145] = H.session.anchorState),
      (n[146] = H.session.target.mode),
      (n[147] = W),
      (n[148] = pn))
    : (pn = n[148]);
  let mn;
  n[149] !== s || n[150] !== d || n[151] !== K || n[152] !== W
    ? ((mn = K
        ? (e) => {
            (P(),
              j(null),
              c.dispatchMessage(`browser-sidebar-design-overlay-delete`, {
                browserTabId: s,
                conversationId: d,
                sessionId: W,
                groupId: e,
              }));
          }
        : void 0),
      (n[149] = s),
      (n[150] = d),
      (n[151] = K),
      (n[152] = W),
      (n[153] = mn))
    : (mn = n[153]);
  let hn, gn;
  n[154] !== s || n[155] !== d || n[156] !== W
    ? ((hn = (e) => {
        c.dispatchMessage(`browser-sidebar-comment-overlay-tweaks-open-changed`, {
          browserTabId: s,
          conversationId: d,
          sessionId: W,
          open: e,
        });
      }),
      (gn = (e) => {
        (P(),
          j(null),
          c.dispatchMessage(`browser-sidebar-comment-overlay-delete`, {
            browserTabId: s,
            conversationId: d,
            sessionId: W,
            commentId: e,
          }));
      }),
      (n[154] = s),
      (n[155] = d),
      (n[156] = W),
      (n[157] = hn),
      (n[158] = gn))
    : ((hn = n[157]), (gn = n[158]));
  let _n;
  n[159] === J ? (_n = n[160]) : ((_n = () => J(`escape`)), (n[159] = J), (n[160] = _n));
  let vn;
  n[161] !== re ||
  n[162] !== s ||
  n[163] !== q ||
  n[164] !== R.height ||
  n[165] !== R.width ||
  n[166] !== Bt ||
  n[167] !== ot ||
  n[168] !== ce ||
  n[169] !== H.session ||
  n[170] !== U ||
  n[171] !== W ||
  n[172] !== oe ||
  n[173] !== Y ||
  n[174] !== $t ||
  n[175] !== en ||
  n[176] !== tn ||
  n[177] !== nn ||
  n[178] !== Z ||
  n[179] !== rn ||
  n[180] !== an ||
  n[181] !== on ||
  n[182] !== sn ||
  n[183] !== cn ||
  n[184] !== ln ||
  n[185] !== un ||
  n[186] !== dn ||
  n[187] !== fn ||
  n[188] !== pn ||
  n[189] !== mn ||
  n[190] !== hn ||
  n[191] !== gn ||
  n[192] !== _n
    ? ((vn = (0, T.jsx)(
        ke,
        {
          allowDirectSubmit: re,
          allowImageAttachments: ce,
          autoFocus: $t,
          browserTabId: s,
          defaultCreateSubmitMode: en,
          defaultDesignEditorOpen: tn,
          isVisible: nn,
          annotationSelectionAnchors: Z,
          session: H.session,
          showAdjustEntry: oe,
          windowHeight: R.height,
          windowWidth: R.width,
          maxSurfaceWidth: rn,
          maxSurfaceHeight: an,
          metadataAnchor: on,
          reservedTrayHeight: sn,
          keyboardEventTarget: U,
          onBodyChange: cn,
          onSubmit: Y,
          onDirectSubmit: ln,
          onDesignChangeUpdate: un,
          onDesignControlInteractionChange: dn,
          onAnnotationSelectionHoverChange: fn,
          onAnnotationSelectionRemove: pn,
          onDesignChangeDelete: mn,
          onTweaksEditorOpenChange: hn,
          onDelete: gn,
          onCancel: q,
          onEscape: _n,
          onMounted: ot,
          onAttachmentPreviewOpenChange: Bt,
          onLightDismissibilityChange: ct,
          onRepositionInteractionChange: ut,
        },
        W,
      )),
      (n[161] = re),
      (n[162] = s),
      (n[163] = q),
      (n[164] = R.height),
      (n[165] = R.width),
      (n[166] = Bt),
      (n[167] = ot),
      (n[168] = ce),
      (n[169] = H.session),
      (n[170] = U),
      (n[171] = W),
      (n[172] = oe),
      (n[173] = Y),
      (n[174] = $t),
      (n[175] = en),
      (n[176] = tn),
      (n[177] = nn),
      (n[178] = Z),
      (n[179] = rn),
      (n[180] = an),
      (n[181] = on),
      (n[182] = sn),
      (n[183] = cn),
      (n[184] = ln),
      (n[185] = un),
      (n[186] = dn),
      (n[187] = fn),
      (n[188] = pn),
      (n[189] = mn),
      (n[190] = hn),
      (n[191] = gn),
      (n[192] = _n),
      (n[193] = vn))
    : (vn = n[193]);
  let yn;
  n[194] !== G || n[195] !== Zt || n[196] !== Qt || n[197] !== vn
    ? ((yn = (0, T.jsx)(`div`, {
        ref: _,
        "aria-hidden": G,
        className: Zt,
        inert: G,
        style: Qt,
        children: vn,
      })),
      (n[194] = G),
      (n[195] = Zt),
      (n[196] = Qt),
      (n[197] = vn),
      (n[198] = yn))
    : (yn = n[198]);
  let Q;
  n[199] !== Vt || n[200] !== Ut || n[201] !== Gt || n[202] !== Kt || n[203] !== qt || n[204] !== yn
    ? ((Q = (0, T.jsxs)(`div`, {
        className: `relative h-screen w-screen overflow-hidden bg-transparent text-default`,
        role: `presentation`,
        style: Vt,
        onPointerDownCapture: Ht,
        onPointerCancel: Ut,
        onMouseDownCapture: Wt,
        onMouseUp: Gt,
        children: [Kt, qt, yn],
      })),
      (n[199] = Vt),
      (n[200] = Ut),
      (n[201] = Gt),
      (n[202] = Kt),
      (n[203] = qt),
      (n[204] = yn),
      (n[205] = Q))
    : (Q = n[205]);
  let $;
  n[206] !== X || n[207] !== Q
    ? (($ = (0, T.jsx)(se.Provider, { value: 1, children: (0, T.jsx)(le, { value: X, children: Q }) })),
      (n[206] = X),
      (n[207] = Q),
      (n[208] = $))
    : ($ = n[208]);
  let bn;
  return (
    n[209] !== At || n[210] !== $
      ? ((bn = (0, He.createPortal)($, At)), (n[209] = At), (n[210] = $), (n[211] = bn))
      : (bn = n[211]),
    bn
  );
}
function Fe(e, t) {
  let n =
    t == null
      ? e.editorFrame
      : {
          ...t.editorWindowBounds,
          x: t.editorWindowBounds.x - e.overlayWindowBounds.x,
          y: t.editorWindowBounds.y - e.overlayWindowBounds.y,
        };
  return e.session.target.mode === `design` ||
    e.session.surfaceMode === `preview` ||
    e.session.anchorState.placement === `top-left`
    ? n
    : { ...n, y: n.y - O };
}
function Ie(e, t, n) {
  let r = t?.querySelector(n);
  if (t == null || r == null) return null;
  let i = t.getBoundingClientRect(),
    a = r.getBoundingClientRect();
  return a.width <= 0 || a.height <= 0
    ? null
    : { x: e.x + a.x - i.x, y: e.y + a.y - i.y, width: a.width, height: a.height };
}
function Le({ x: e, y: t }, n) {
  return Math.hypot(Math.max(n.x - e, 0, e - n.x - n.width), Math.max(n.y - t, 0, t - n.y - n.height));
}
function Re({ browserTabId: e, conversationId: t, openerWindow: n, existingPopup: r, message: i }) {
  let a = ce({
    windowId: ye.BROWSER_COMMENT_POPUP,
    browserTabId: e,
    conversationId: t,
    sessionId: i.session.sessionId,
  });
  if (r != null && !r.window.closed && r.frameName === a) return r;
  let { x: o, y: s, width: c, height: l } = i.overlayWindowBounds,
    u = n.open(
      `about:blank`,
      a,
      [
        `popup=yes`,
        `left=${Math.round(o)}`,
        `top=${Math.round(s)}`,
        `width=${Math.round(c)}`,
        `height=${Math.round(l)}`,
      ].join(`,`),
    );
  return u == null ? null : { frameName: a, stylesheetsReady: null, window: u };
}
function ze(e, t, n) {
  let r = e.document;
  ((r.title = n), C(r, t));
  let i = r.getElementById(Ue),
    a = null;
  return (
    i ??
      ((a = Be(r, t)),
      (r.body.textContent = ``),
      (i = r.createElement(`div`)),
      (i.id = Ue),
      r.body.appendChild(i)),
    (i.style.width = `100vw`),
    (i.style.height = `100vh`),
    (i.style.overflow = `hidden`),
    (i.style.background = `transparent`),
    { root: i, stylesheetsReady: a }
  );
}
function C(e, t) {
  let n = e.documentElement,
    r = t.documentElement;
  ((n.className = r.className), n.setAttribute(`style`, r.getAttribute(`style`) ?? ``));
  for (let e of Array.from(n.attributes)) e.name.startsWith(`data-`) && n.removeAttribute(e.name);
  for (let e of Array.from(r.attributes)) e.name.startsWith(`data-`) && n.setAttribute(e.name, e.value);
  (n.classList.add(D),
    (n.style.background = `transparent`),
    (n.style.backgroundColor = `transparent`),
    (e.body.className = t.body.className),
    e.body.setAttribute(`style`, t.body.getAttribute(`style`) ?? ``),
    (e.body.style.margin = `0`),
    (e.body.style.overflow = `hidden`),
    (e.body.style.background = `transparent`),
    (e.body.style.backgroundColor = `transparent`));
}
function Be(e, t) {
  for (let t of e.head.querySelectorAll(`[${E}]`)) t.remove();
  let n = [];
  for (let r of t.head.querySelectorAll(`link[rel="stylesheet"], style`)) {
    let i = r.cloneNode(!0),
      a = t.defaultView?.HTMLElement;
    (a != null && i instanceof a && i.setAttribute(E, `true`),
      r instanceof HTMLLinkElement &&
        n.push(
          new Promise((e) => {
            (i.addEventListener(`load`, () => e(), { once: !0 }),
              i.addEventListener(`error`, () => e(), { once: !0 }));
          }),
        ),
      e.head.appendChild(i));
  }
  return n.length === 0 ? null : Promise.all(n).then(() => void 0);
}
var Ve, w, He, T, Ue, E, D, We, Ge, O;
function k() {
  return (k = e(() => {
    ((Ve = ee()),
      f(),
      d(),
      oe(),
      v(),
      Ee(),
      S(),
      (w = i()),
      (He = a()),
      ie(),
      y(),
      De(),
      m(),
      re(),
      x(),
      xe(),
      h(),
      Te(),
      p(),
      n(),
      g(),
      fe(),
      b(),
      je(),
      (T = s()),
      (Ue = `browser-sidebar-comment-popup-root`),
      (E = `data-browser-sidebar-comment-popup`),
      (D = `compact-window`),
      (We = 12),
      (Ge = 48),
      (O = Math.round(_.hotspot.y - _.height / 2)));
  }))();
}
export { k as n, Pe as t };
//# sourceMappingURL=comment-popup-portal-2586dc04865b.js.map
