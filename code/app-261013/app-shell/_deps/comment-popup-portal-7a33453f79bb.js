import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $nt as t,
  Amt as n,
  Cot as r,
  Cz as i,
  Fmt as a,
  Gyt as o,
  Ixt as s,
  Kat as c,
  Kyt as ee,
  Pxt as l,
  Rnt as u,
  Sz as te,
  VDt as ne,
  Vxt as re,
  Wnt as ie,
  Zyt as d,
  _Mt as ae,
  _Pt as oe,
  _z as se,
  bz as ce,
  flt as le,
  gMt as ue,
  gPt as f,
  gz as de,
  hPt as fe,
  hot as pe,
  jDt as p,
  lbt as me,
  lot as m,
  m5 as he,
  qat as ge,
  rst as h,
  ubt as _e,
  vzt as g,
  wot as _,
  xMt as v,
  xz as ve,
  y5 as ye,
  yMt as be,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import { Jg as xe, QDr as Se, XDr as b, dUt as Ce, lUt as we, qg as Te } from "./app-initial-5851df3f6cb1.js";
import { i as Ee, n as De, r as Oe, t as ke } from "./annotation-comment-editor-card-957f5525f8bc.js";
import { n as Ae, t as x } from "./use-shake-398981bdd590.js";
import { a as je, r as Me } from "./comment-mode-coachmark-state-39db2a123121.js";
function Ne(e, t) {
  return e.anchor.kind !== `element` && (e.additionalAnchors?.length ?? 0) === 0 && t === `necessary`;
}
function S() {
  return (S = e(() => {
    me();
  }))();
}
function Pe(e) {
  let i = (0, Ve.c)(212),
    {
      allowDirectSubmit: o,
      allowImageAttachments: ee,
      browserTabId: l,
      conversationId: u,
      defaultCreateSubmitMode: ie,
      onActiveEditorDismissRequestChange: d,
      showAdjustEntry: ae,
    } = e,
    se = o === void 0 || o,
    ce = ie === void 0 ? `saved` : ie,
    fe = ae === void 0 || ae,
    p = s(r),
    me = re(ee ?? we),
    m = ne(),
    ge = t(le.annotationScreenshotsMode),
    h = (0, w.useRef)(null),
    g = (0, w.useRef)(null),
    _ = (0, w.useRef)(null),
    { shake: v, stopShake: be } = Ae(_),
    y = (0, w.useRef)(null),
    xe = (0, w.useRef)(0),
    b = (0, w.useRef)(null),
    Ce = (0, w.useRef)(null),
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
  i[0] === m
    ? (tt = i[1])
    : ((tt = m.formatMessage({
        id: `browserSidebarCommentOverlay.windowTitle`,
        defaultMessage: `Browser comment`,
        description: `Title for the floating browser comment editor window`,
      })),
      (i[0] = m),
      (i[1] = tt));
  let nt = tt,
    [A, j] = (0, w.useState)(null),
    M =
      A?.message.session.surfaceMode === `editor` &&
      (A.message.session.pageInitialComment?.text.length ?? 0) > 0,
    [N, rt] = (0, w.useState)(null),
    it;
  i[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((it = () => {
        xe.current += 1;
      }),
      (i[2] = it))
    : (it = i[2]);
  let P = it,
    at;
  i[3] !== l || i[4] !== u || i[5] !== M
    ? ((at = (e, t, n, r, i) => {
        (i !== !1 && (Me(), et(e)),
          t != null &&
            M &&
            rt({ sessionId: e, surfaceSize: t, placementSurfaceSize: n, metadataHeaderHeight: r }),
          f.dispatchMessage(`browser-sidebar-comment-overlay-mounted`, {
            browserTabId: l,
            conversationId: u,
            sessionId: e,
            placementSurfaceSize: n,
            surfaceSize: t,
            metadataHeaderHeight: r,
            isLayoutReady: i,
          }));
      }),
      (i[3] = l),
      (i[4] = u),
      (i[5] = M),
      (i[6] = at))
    : (at = i[6]);
  let ot = at,
    st;
  i[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => {
        ((D.current = e), (O.current = !1), Xe(e), Qe(!1));
      }),
      (i[7] = st))
    : (st = i[7]);
  let ct = st,
    lt;
  i[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (e) => {
        je.current = e;
        let t = S.current;
        e ||
          t == null ||
          h.current?.window.dispatchEvent(new MouseEvent(`mousemove`, { clientX: t.x, clientY: t.y }));
      }),
      (i[8] = lt))
    : (lt = i[8]);
  let ut = lt,
    dt;
  i[9] !== l || i[10] !== u
    ? ((dt = (e) => {
        let t = e.message.session.sessionId,
          { popupWindow: n } = e,
          r = (xe.current += 1),
          i = () => !n.closed && y.current === t && xe.current === r;
        n.requestAnimationFrame(() => {
          if (!i()) return;
          let e = c.browserHost;
          if (e == null) {
            n.focus();
            return;
          }
          e.focusCommentOverlay({ browserTabId: l, conversationId: u, sessionId: t }).catch(() => {
            i() && n.focus();
          });
        });
      }),
      (i[9] = l),
      (i[10] = u),
      (i[11] = dt))
    : (dt = i[11]);
  let F = dt,
    ft;
  i[12] !== l || i[13] !== u || i[14] !== F || i[15] !== v
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
            f.dispatchMessage(`browser-sidebar-comment-overlay-close`, {
              browserTabId: l,
              conversationId: u,
              sessionId: t,
            }),
            !0)
          : ((O.current = !0), Qe(!0), F(e), v(), !1);
      }),
      (i[12] = l),
      (i[13] = u),
      (i[14] = F),
      (i[15] = v),
      (i[16] = ft))
    : (ft = i[16]);
  let I = ft,
    pt;
  i[17] !== I || i[18] !== A
    ? ((pt = () => A != null && I(A)), (i[17] = I), (i[18] = A), (i[19] = pt))
    : (pt = i[19]);
  let mt = pt,
    ht,
    gt;
  (i[20] !== l || i[21] !== u || i[22] !== I || i[23] !== m || i[24] !== nt || i[25] !== p || i[26] !== be
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
        if (e.browserTabId !== l || e.conversationId !== u) return;
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
        let r = y.current != null && y.current !== e.session.sessionId;
        if (r && h.current != null) {
          ((De.current = 0),
            (0, He.flushSync)(() => {
              j(null);
            }),
            g.current?.(),
            (g.current = null));
          let e = h.current.window;
          ((h.current = null), e.closed || e.close());
        }
        let i = Re({
          browserTabId: l,
          conversationId: u,
          openerWindow: window,
          existingPopup: h.current,
          message: e,
        });
        if (i == null) return;
        let { window: a } = i,
          o = h.current?.window !== a;
        if (o) {
          g.current?.();
          let e = () => {
            h.current?.window === a && (P(), (h.current = null), j(null));
          };
          (a.addEventListener(`pagehide`, e),
            (g.current = () => {
              a.removeEventListener(`pagehide`, e);
            }));
        }
        h.current = i;
        let { root: s, stylesheetsReady: c } = ze(a, document, nt);
        (o && (i.stylesheetsReady = c),
          (s.style.visibility = !e.visible || r ? `hidden` : ``),
          (o || r) && t(s),
          y.current !== e.session.sessionId &&
            (be(),
            e.session.screenshotFailed &&
              p
                .get(pe)
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
              (_e(e.session.body, e.session.pageInitialComment?.text) &&
                (e.session.attachedImages?.length ?? 0) === 0)),
            (O.current = !1),
            Xe(D.current),
            Qe(!1)));
        let ee = () => {
          if (Ee.current !== n || h.current !== i || y.current !== e.session.sessionId) return;
          let t = { message: e, root: s, popupWindow: a };
          (0, He.flushSync)(() => {
            j(t);
          });
          let r = e.dismissRequestSequence ?? 0;
          r > De.current && ((De.current = r), I(t));
        };
        if (i.stylesheetsReady == null) {
          ee();
          return;
        }
        i.stylesheetsReady.then(ee);
      }),
      (gt = [l, P, u, I, m, nt, p, be]),
      (i[20] = l),
      (i[21] = u),
      (i[22] = I),
      (i[23] = m),
      (i[24] = nt),
      (i[25] = p),
      (i[26] = be),
      (i[27] = ht),
      (i[28] = gt))
    : ((ht = i[27]), (gt = i[28])),
    oe(`browser-sidebar-comment-overlay-session`, ht, gt));
  let _t, vt;
  (i[29] !== d || i[30] !== A || i[31] !== mt
    ? ((_t = () => {
        if (d != null) {
          if (A == null || !A.message.visible || A.message.session.surfaceMode !== `editor`) {
            d(null);
            return;
          }
          return (
            d(mt),
            () => {
              d(null);
            }
          );
        }
      }),
      (vt = [d, A, mt]),
      (i[29] = d),
      (i[30] = A),
      (i[31] = mt),
      (i[32] = _t),
      (i[33] = vt))
    : ((_t = i[32]), (vt = i[33])),
    (0, w.useEffect)(_t, vt));
  let yt, bt;
  (i[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((yt = () => () => {
        P();
        let e = h.current?.window ?? null;
        (g.current?.(), (g.current = null), (h.current = null), e != null && !e.closed && e.close());
      }),
      (bt = [P]),
      (i[34] = yt),
      (i[35] = bt))
    : ((yt = i[34]), (bt = i[35])),
    (0, w.useEffect)(yt, bt));
  let L, xt;
  i[36] !== M || i[37] !== A || i[38] !== N
    ? ((L =
        M && A != null && N?.sessionId === A.message.session.sessionId
          ? n({
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
      (i[36] = M),
      (i[37] = A),
      (i[38] = N),
      (i[39] = L),
      (i[40] = xt))
    : ((L = i[39]), (xt = i[40]));
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
  i[41] !== z?.document ||
  i[42] !== B ||
  i[43] !== l ||
  i[44] !== u ||
  i[45] !== R ||
  i[46] !== M ||
  i[47] !== qe ||
  i[48] !== k ||
  i[49] !== A?.message
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
          f.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-pointer-state`, {
            browserTabId: l,
            conversationId: u,
            sessionId: B,
            insideEditor: a,
          }));
      }),
      (i[41] = z?.document),
      (i[42] = B),
      (i[43] = l),
      (i[44] = u),
      (i[45] = R),
      (i[46] = M),
      (i[47] = qe),
      (i[48] = k),
      (i[49] = A?.message),
      (i[50] = Ct))
    : (Ct = i[50]);
  let V = ve(Ct),
    wt;
  i[51] === V
    ? (wt = i[52])
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
      (i[51] = V),
      (i[52] = wt));
  let Tt = ve(wt),
    Et,
    Dt;
  (i[53] !== z || i[54] !== B || i[55] !== l || i[56] !== u || i[57] !== V
    ? ((Et = () => {
        if (z == null || B == null) return;
        let e = !1,
          t = !1,
          n = null,
          r = null,
          i = (e, t) => {
            f.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-modifier-state`, {
              browserTabId: l,
              conversationId: u,
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
          s = () => {
            ((e = !1), (t = !1), (r = null), (E.current = !1), (C.current = !1), V(), i(!1, `window-blur`));
          },
          c = (a) => {
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
          z.addEventListener(`blur`, s),
          z.addEventListener(`pagehide`, o),
          z.addEventListener(`mousemove`, c, !0),
          () => {
            (z.removeEventListener(`keydown`, a, !0),
              z.removeEventListener(`keyup`, a, !0),
              z.removeEventListener(`blur`, s),
              z.removeEventListener(`pagehide`, o),
              z.removeEventListener(`mousemove`, c, !0),
              (je.current = !1),
              (E.current = !1),
              o());
          }
        );
      }),
      (Dt = [l, u, z, B, V]),
      (i[53] = z),
      (i[54] = B),
      (i[55] = l),
      (i[56] = u),
      (i[57] = V),
      (i[58] = Et),
      (i[59] = Dt))
    : ((Et = i[58]), (Dt = i[59])),
    (0, w.useEffect)(Et, Dt));
  let Ot, kt;
  if (
    (i[60] !== St || i[61] !== z || i[62] !== B
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
        (i[60] = St),
        (i[61] = z),
        (i[62] = B),
        (i[63] = Ot),
        (i[64] = kt))
      : ((Ot = i[63]), (kt = i[64])),
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
    K = fe && (H.session.designEditorState != null || Ft != null),
    It;
  i[65] !== l || i[66] !== u || i[67] !== W
    ? ((It = () => {
        (P(),
          j(null),
          (b.current = null),
          f.dispatchMessage(`browser-sidebar-comment-overlay-close`, {
            browserTabId: l,
            conversationId: u,
            sessionId: W,
          }));
      }),
      (i[65] = l),
      (i[66] = u),
      (i[67] = W),
      (i[68] = It))
    : (It = i[68]);
  let q = It,
    Lt;
  i[69] !== q ||
  i[70] !== Ze ||
  i[71] !== Ye ||
  i[72] !== H.session.target.mode ||
  i[73] !== A ||
  i[74] !== F ||
  i[75] !== v
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
      (i[69] = q),
      (i[70] = Ze),
      (i[71] = Ye),
      (i[72] = H.session.target.mode),
      (i[73] = A),
      (i[74] = F),
      (i[75] = v),
      (i[76] = Lt))
    : (Lt = i[76]);
  let J = Lt,
    Rt;
  i[77] !== ge ||
  i[78] !== l ||
  i[79] !== u ||
  i[80] !== H.session.anchorState ||
  i[81] !== H.session.designChange ||
  i[82] !== H.session.target.mode ||
  i[83] !== p ||
  i[84] !== W
    ? ((Rt = (e, t) => {
        let { body: n, attachedImages: r, designChange: i } = e,
          { submitDirectly: o } = t === void 0 ? {} : t,
          s = o !== void 0 && o;
        if (b.current === W) return;
        if ((P(), j(null), H.session.target.mode !== `edit`)) {
          let e = a(
            [H.session.anchorState.anchor, ...(H.session.anchorState.additionalAnchors ?? [])],
            i === void 0 ? H.session.designChange : i,
          );
          for (let t of e)
            Se(p, he, { ...t, interactionType: `submitted`, submitMode: s ? `direct` : `saved` });
          Se(p, ye, {
            hasAnnotationFeatures: e.length > 0,
            commentType: H.session.anchorState.anchor.kind,
            submitMode: s ? `direct` : `saved`,
            includesDesignTweak: (i === void 0 ? H.session.designChange : i) != null,
          });
        }
        let c = ge ?? `always`,
          ee = Ne(H.session.anchorState, c);
        ((b.current = W),
          f.dispatchMessage(`browser-sidebar-comment-overlay-submit`, {
            browserTabId: l,
            conversationId: u,
            sessionId: W,
            body: n,
            attachedImages: r,
            designChange: i,
            ...(ee ? { cropScreenshotToRegion: !0 } : {}),
            ...(s ? { submitDirectly: !0 } : {}),
          }));
      }),
      (i[77] = ge),
      (i[78] = l),
      (i[79] = u),
      (i[80] = H.session.anchorState),
      (i[81] = H.session.designChange),
      (i[82] = H.session.target.mode),
      (i[83] = p),
      (i[84] = W),
      (i[85] = Rt))
    : (Rt = i[85]);
  let Y = Rt,
    zt;
  i[86] !== l || i[87] !== u || i[88] !== W
    ? ((zt = (e) => {
        f.dispatchMessage(`browser-sidebar-comment-overlay-preview-open-changed`, {
          browserTabId: l,
          conversationId: u,
          sessionId: W,
          previewOpen: e,
        });
      }),
      (i[86] = l),
      (i[87] = u),
      (i[88] = W),
      (i[89] = zt))
    : (zt = i[89]);
  let Bt = zt,
    Vt;
  i[90] === Tt ? (Vt = i[91]) : ((Vt = { id: Ue, registerOpen: Tt }), (i[90] = Tt), (i[91] = Vt));
  let X;
  i[92] === Pt ? (X = i[93]) : ((X = Pt ? { visibility: `hidden` } : void 0), (i[92] = Pt), (i[93] = X));
  let Ht;
  i[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ht = (e) => {
        ((E.current = Be.current > 0), (S.current = { x: e.clientX, y: e.clientY }));
      }),
      (i[94] = Ht))
    : (Ht = i[94]);
  let Ut;
  i[95] === V
    ? (Ut = i[96])
    : ((Ut = () => {
        ((E.current = !1), (C.current = !1), V());
      }),
      (i[95] = V),
      (i[96] = Ut));
  let Wt;
  i[97] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wt = () => {
        C.current = !1;
      }),
      (i[97] = Wt))
    : (Wt = i[97]);
  let Gt;
  i[98] === V
    ? (Gt = i[99])
    : ((Gt = () => {
        ((C.current = !1), (E.current = !1), V());
      }),
      (i[98] = V),
      (i[99] = Gt));
  let Kt;
  i[100] === U
    ? (Kt = i[101])
    : ((Kt = (0, T.jsx)(Te, { keyboardEventTarget: U })), (i[100] = U), (i[101] = Kt));
  let qt;
  i[102] !== J || i[103] !== jt
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
      (i[102] = J),
      (i[103] = jt),
      (i[104] = qt))
    : (qt = i[104]);
  let Jt = !G && `translate-y-0 opacity-100`,
    Yt = G && !Nt && `translate-y-1 opacity-40`,
    Xt = Nt && `translate-y-2 opacity-0`,
    Zt;
  i[105] !== Jt || i[106] !== Yt || i[107] !== Xt
    ? ((Zt = ue(
        `pointer-events-none absolute transition-[opacity,transform] duration-[180ms] ease-enter-snappy motion-reduce:transition-none`,
        Jt,
        Yt,
        Xt,
      )),
      (i[105] = Jt),
      (i[106] = Yt),
      (i[107] = Xt),
      (i[108] = Zt))
    : (Zt = i[108]);
  let Qt;
  i[109] !== R.height || i[110] !== R.width || i[111] !== R.x || i[112] !== R.y
    ? ((Qt = { left: R.x, top: R.y, width: R.width, height: R.height }),
      (i[109] = R.height),
      (i[110] = R.width),
      (i[111] = R.x),
      (i[112] = R.y),
      (i[113] = Qt))
    : (Qt = i[113]);
  let $t = !Pt,
    en = H.session.target.mode === `design` ? `saved` : ce,
    tn = H.session.defaultDesignEditorOpen === !0,
    nn = !Pt,
    Z;
  i[114] !== H.session.anchorState || i[115] !== H.session.target.mode
    ? ((Z =
        (H.session.target.mode === `create` || H.session.target.mode === `edit`) &&
        H.session.anchorState.anchor.kind !== `text`
          ? [H.session.anchorState.anchor, ...(H.session.anchorState.additionalAnchors ?? [])]
          : void 0),
      (i[114] = H.session.anchorState),
      (i[115] = H.session.target.mode),
      (i[116] = Z))
    : (Z = i[116]);
  let rn = L?.maxSurfaceWidth ?? H.maxSurfaceWidth,
    an = L?.maxSurfaceHeight ?? H.maxSurfaceHeight,
    on = L == null ? H.metadataAnchor : L.metadataAnchor,
    sn = L?.reservedTrayHeight ?? H.reservedTrayHeight,
    cn;
  i[117] !== H.session.anchorState ||
  i[118] !== H.session.body ||
  i[119] !== H.session.designChange?.comment ||
  i[120] !== H.session.pageInitialComment?.text ||
  i[121] !== H.session.target.mode ||
  i[122] !== p ||
  i[123] !== W
    ? ((cn = (e) => {
        let t = H.session.body || H.session.designChange?.comment || ``;
        if (
          H.session.target.mode !== `edit` &&
          Ce.current !== W &&
          e !== t &&
          e !== H.session.pageInitialComment?.text
        ) {
          Ce.current = W;
          for (let e of a([H.session.anchorState.anchor, ...(H.session.anchorState.additionalAnchors ?? [])]))
            e.feature !== `custom-controls` && Se(p, he, { ...e, interactionType: `edited` });
        }
      }),
      (i[117] = H.session.anchorState),
      (i[118] = H.session.body),
      (i[119] = H.session.designChange?.comment),
      (i[120] = H.session.pageInitialComment?.text),
      (i[121] = H.session.target.mode),
      (i[122] = p),
      (i[123] = W),
      (i[124] = cn))
    : (cn = i[124]);
  let ln;
  i[125] === Y
    ? (ln = i[126])
    : ((ln = (e) => {
        Y(e, { submitDirectly: !0 });
      }),
      (i[125] = Y),
      (i[126] = ln));
  let un;
  i[127] !== l || i[128] !== u || i[129] !== K || i[130] !== W
    ? ((un = K
        ? (e) => {
            f.dispatchMessage(`browser-sidebar-design-overlay-update`, {
              browserTabId: l,
              conversationId: u,
              sessionId: W,
              group: e,
            });
          }
        : void 0),
      (i[127] = l),
      (i[128] = u),
      (i[129] = K),
      (i[130] = W),
      (i[131] = un))
    : (un = i[131]);
  let dn;
  i[132] !== l || i[133] !== u || i[134] !== K || i[135] !== W
    ? ((dn = K
        ? (e) => {
            let { property: t, isEditingControl: n } = e;
            f.dispatchMessage(`browser-sidebar-comment-overlay-design-scrub-changed`, {
              browserTabId: l,
              conversationId: u,
              sessionId: W,
              property: t,
              isEditingControl: n,
            });
          }
        : void 0),
      (i[132] = l),
      (i[133] = u),
      (i[134] = K),
      (i[135] = W),
      (i[136] = dn))
    : (dn = i[136]);
  let fn;
  i[137] !== l ||
  i[138] !== u ||
  i[139] !== H.session.anchorState ||
  i[140] !== H.session.target.mode ||
  i[141] !== W
    ? ((fn =
        H.session.target.mode === `create` && H.session.anchorState.anchor.kind !== `text`
          ? (e) => {
              f.dispatchMessage(`browser-sidebar-comment-overlay-annotation-selection-hover-state`, {
                browserTabId: l,
                conversationId: u,
                sessionId: W,
                selectionIndex: e,
              });
            }
          : void 0),
      (i[137] = l),
      (i[138] = u),
      (i[139] = H.session.anchorState),
      (i[140] = H.session.target.mode),
      (i[141] = W),
      (i[142] = fn))
    : (fn = i[142]);
  let pn;
  i[143] !== l ||
  i[144] !== u ||
  i[145] !== H.session.anchorState ||
  i[146] !== H.session.target.mode ||
  i[147] !== W
    ? ((pn =
        H.session.target.mode === `create` && H.session.anchorState.anchor.kind !== `text`
          ? (e) => {
              f.dispatchMessage(`browser-sidebar-comment-overlay-remove-annotation-selection`, {
                browserTabId: l,
                conversationId: u,
                sessionId: W,
                selectionIndex: e,
              });
            }
          : void 0),
      (i[143] = l),
      (i[144] = u),
      (i[145] = H.session.anchorState),
      (i[146] = H.session.target.mode),
      (i[147] = W),
      (i[148] = pn))
    : (pn = i[148]);
  let mn;
  i[149] !== l || i[150] !== u || i[151] !== K || i[152] !== W
    ? ((mn = K
        ? (e) => {
            (P(),
              j(null),
              f.dispatchMessage(`browser-sidebar-design-overlay-delete`, {
                browserTabId: l,
                conversationId: u,
                sessionId: W,
                groupId: e,
              }));
          }
        : void 0),
      (i[149] = l),
      (i[150] = u),
      (i[151] = K),
      (i[152] = W),
      (i[153] = mn))
    : (mn = i[153]);
  let hn, gn;
  i[154] !== l || i[155] !== u || i[156] !== W
    ? ((hn = (e) => {
        f.dispatchMessage(`browser-sidebar-comment-overlay-tweaks-open-changed`, {
          browserTabId: l,
          conversationId: u,
          sessionId: W,
          open: e,
        });
      }),
      (gn = (e) => {
        (P(),
          j(null),
          f.dispatchMessage(`browser-sidebar-comment-overlay-delete`, {
            browserTabId: l,
            conversationId: u,
            sessionId: W,
            commentId: e,
          }));
      }),
      (i[154] = l),
      (i[155] = u),
      (i[156] = W),
      (i[157] = hn),
      (i[158] = gn))
    : ((hn = i[157]), (gn = i[158]));
  let _n;
  i[159] === J ? (_n = i[160]) : ((_n = () => J(`escape`)), (i[159] = J), (i[160] = _n));
  let vn;
  i[161] !== se ||
  i[162] !== l ||
  i[163] !== q ||
  i[164] !== R.height ||
  i[165] !== R.width ||
  i[166] !== Bt ||
  i[167] !== ot ||
  i[168] !== me ||
  i[169] !== H.session ||
  i[170] !== U ||
  i[171] !== W ||
  i[172] !== fe ||
  i[173] !== Y ||
  i[174] !== $t ||
  i[175] !== en ||
  i[176] !== tn ||
  i[177] !== nn ||
  i[178] !== Z ||
  i[179] !== rn ||
  i[180] !== an ||
  i[181] !== on ||
  i[182] !== sn ||
  i[183] !== cn ||
  i[184] !== ln ||
  i[185] !== un ||
  i[186] !== dn ||
  i[187] !== fn ||
  i[188] !== pn ||
  i[189] !== mn ||
  i[190] !== hn ||
  i[191] !== gn ||
  i[192] !== _n
    ? ((vn = (0, T.jsx)(
        ke,
        {
          allowDirectSubmit: se,
          allowImageAttachments: me,
          autoFocus: $t,
          browserTabId: l,
          defaultCreateSubmitMode: en,
          defaultDesignEditorOpen: tn,
          isVisible: nn,
          annotationSelectionAnchors: Z,
          session: H.session,
          showAdjustEntry: fe,
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
      (i[161] = se),
      (i[162] = l),
      (i[163] = q),
      (i[164] = R.height),
      (i[165] = R.width),
      (i[166] = Bt),
      (i[167] = ot),
      (i[168] = me),
      (i[169] = H.session),
      (i[170] = U),
      (i[171] = W),
      (i[172] = fe),
      (i[173] = Y),
      (i[174] = $t),
      (i[175] = en),
      (i[176] = tn),
      (i[177] = nn),
      (i[178] = Z),
      (i[179] = rn),
      (i[180] = an),
      (i[181] = on),
      (i[182] = sn),
      (i[183] = cn),
      (i[184] = ln),
      (i[185] = un),
      (i[186] = dn),
      (i[187] = fn),
      (i[188] = pn),
      (i[189] = mn),
      (i[190] = hn),
      (i[191] = gn),
      (i[192] = _n),
      (i[193] = vn))
    : (vn = i[193]);
  let yn;
  i[194] !== G || i[195] !== Zt || i[196] !== Qt || i[197] !== vn
    ? ((yn = (0, T.jsx)(`div`, {
        ref: _,
        "aria-hidden": G,
        className: Zt,
        inert: G,
        style: Qt,
        children: vn,
      })),
      (i[194] = G),
      (i[195] = Zt),
      (i[196] = Qt),
      (i[197] = vn),
      (i[198] = yn))
    : (yn = i[198]);
  let Q;
  i[199] !== X || i[200] !== Ut || i[201] !== Gt || i[202] !== Kt || i[203] !== qt || i[204] !== yn
    ? ((Q = (0, T.jsxs)(`div`, {
        className: `relative h-screen w-screen overflow-hidden bg-transparent text-default`,
        role: `presentation`,
        style: X,
        onPointerDownCapture: Ht,
        onPointerCancel: Ut,
        onMouseDownCapture: Wt,
        onMouseUp: Gt,
        children: [Kt, qt, yn],
      })),
      (i[199] = X),
      (i[200] = Ut),
      (i[201] = Gt),
      (i[202] = Kt),
      (i[203] = qt),
      (i[204] = yn),
      (i[205] = Q))
    : (Q = i[205]);
  let $;
  i[206] !== Vt || i[207] !== Q
    ? (($ = (0, T.jsx)(te.Provider, { value: 1, children: (0, T.jsx)(de, { value: Vt, children: Q }) })),
      (i[206] = Vt),
      (i[207] = Q),
      (i[208] = $))
    : ($ = i[208]);
  let bn;
  return (
    i[209] !== At || i[210] !== $
      ? ((bn = (0, He.createPortal)($, At)), (i[209] = At), (i[210] = $), (i[211] = bn))
      : (bn = i[211]),
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
  let a = ee({
    windowId: o.BROWSER_COMMENT_POPUP,
    browserTabId: e,
    conversationId: t,
    sessionId: i.session.sessionId,
  });
  if (r != null && !r.window.closed && r.frameName === a) return r;
  let { x: s, y: c, width: l, height: u } = i.overlayWindowBounds,
    te = n.open(
      `about:blank`,
      a,
      [
        `popup=yes`,
        `left=${Math.round(s)}`,
        `top=${Math.round(c)}`,
        `width=${Math.round(l)}`,
        `height=${Math.round(u)}`,
      ].join(`,`),
    );
  return te == null ? null : { frameName: a, stylesheetsReady: null, window: te };
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
    ((Ve = g()),
      u(),
      ae(),
      l(),
      h(),
      Ee(),
      S(),
      (w = y()),
      (He = be()),
      p(),
      i(),
      De(),
      se(),
      m(),
      x(),
      xe(),
      fe(),
      b(),
      ge(),
      _(),
      ie(),
      ce(),
      Ce(),
      je(),
      (T = v()),
      (Ue = `browser-sidebar-comment-popup-root`),
      (E = `data-browser-sidebar-comment-popup`),
      (D = `compact-window`),
      (We = 12),
      (Ge = 48),
      (O = Math.round(d.hotspot.y - d.height / 2)));
  }))();
}
export { k as n, Pe as t };
//# sourceMappingURL=comment-popup-portal-7a33453f79bb.js.map
