import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Pt as n,
  A4 as r,
  A4t as i,
  Amn as a,
  B1t as o,
  B6t as s,
  BFt as c,
  BRt as l,
  CFt as u,
  CQ as d,
  CY as f,
  Cpn as p,
  DXt as m,
  Dmn as h,
  FLt as g,
  GX as _,
  HFt as v,
  Hn as ee,
  I6t as te,
  Itn as y,
  KX as b,
  Kn as x,
  L0 as S,
  L6t as C,
  LG as ne,
  M6t as re,
  N3t as ie,
  O3t as ae,
  OXt as oe,
  Omn as se,
  P0 as ce,
  P6t as le,
  QFt as w,
  QPt as ue,
  QX as de,
  QXt as fe,
  RG as pe,
  Rpn as me,
  SFt as he,
  SQ as ge,
  Spn as _e,
  TFt as T,
  Trn as ve,
  U7 as ye,
  UFt as E,
  Un as be,
  V1t as xe,
  VFt as Se,
  VLt as Ce,
  VRt as we,
  VX as Te,
  Vnn as Ee,
  W7 as De,
  WX as Oe,
  Wn as ke,
  X2t as Ae,
  X8t as je,
  XFt as Me,
  XPt as Ne,
  Y2t as Pe,
  YFt as D,
  Yn as Fe,
  ZFt as Ie,
  ZPt as Le,
  _Q as Re,
  _Z as ze,
  a6t as Be,
  bZ as Ve,
  bmn as He,
  bpn as O,
  e0t as Ue,
  eIt as We,
  eZt as Ge,
  f5t as Ke,
  gRt as qe,
  grn as k,
  hXt as Je,
  hmn as A,
  hz as j,
  iY as Ye,
  j4 as Xe,
  j4t as Ze,
  jLt as Qe,
  jXt as $e,
  kXt as et,
  kmn as tt,
  krn as nt,
  lY as rt,
  lZ as it,
  m1 as at,
  mXt as ot,
  mz as M,
  nY as st,
  oLt as ct,
  oY as lt,
  p1 as ut,
  pZ as N,
  qPt as dt,
  qX as P,
  rrn as ft,
  tIt as pt,
  vLt as mt,
  vQ as ht,
  vRt as gt,
  wtn as F,
  xRt as I,
  xY as _t,
  xmn as L,
  yQ as vt,
  yen as yt,
  z1t as R,
  zFt as bt,
  zpn as xt,
} from "./app-initial-f094ef01c64d.js";
import {
  Ff as St,
  Gm as Ct,
  If as wt,
  Jm as Tt,
  Km as Et,
  Lf as Dt,
  Um as z,
  Wm as Ot,
  eg as kt,
  ng as At,
  qm as B,
  rg as jt,
  tg as V,
} from "./app-primary-4c40d73a1074.js";
import { n as Mt, t as Nt } from "./provider-52164e44ec28.js";
import { n as Pt, t as Ft } from "./messages-e7d64bad4efd.js";
import { n as It, t as Lt } from "./pointer-outline-5320026036ca.js";
function Rt(e) {
  let t = (0, zt.c)(6),
    { browserTabId: n, conversationId: r, fallback: i } = e,
    a;
  t[0] !== n || t[1] !== r
    ? ((a = { browserTabId: n, conversationId: r, size: 32 }), (t[0] = n), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = ie(Bt, a),
    s;
  return (
    t[3] !== i || t[4] !== o
      ? ((s =
          o == null
            ? (0, H.jsx)(H.Fragment, { children: i })
            : (0, H.jsx)(`img`, {
                alt: ``,
                className: `size-8 max-w-none shrink-0 object-contain`,
                src: o,
              })),
        (t[3] = i),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
var zt,
  H,
  Bt,
  Vt = e(() => {
    ((zt = tt()),
      ae(),
      j(),
      I(),
      (H = A()),
      (Bt = Be(
        qe,
        (e) => null,
        (e, { set: t }) => M.browserHost?.subscribeFavicon(e, t),
        { key: ({ conversationId: e, browserTabId: t, size: n }) => JSON.stringify([e, t, n]) },
      )));
  });
function Ht(e, t, n) {
  b.pages.getHost(e, t) === n && b.pages.disposeHost(e, t, `web`);
}
var Ut,
  Wt,
  Gt,
  Kt = e(() => {
    (Ze(),
      s(),
      (Ut = t(a(), 1)),
      j(),
      be(),
      P(),
      Vt(),
      (Wt = {
        kind: `browser`,
        renderPlaceholderIcon: (e, t) =>
          (0, Ut.createElement)(Rt, {
            browserTabId: e.browserTabId,
            conversationId: e.browserConversationId,
            fallback: t,
          }),
        canTransfer: (e, t) => {
          let n = b.getSnapshot(t.browserConversationId, t.browserTabId),
            r = b.pages.getHost(t.browserConversationId, t.browserTabId);
          return (
            M.detachedWindows != null &&
            n?.tabType === F.WEB &&
            !n.isSuspended &&
            r != null &&
            !r.disposed
          );
        },
        prepareSource: (e, t) => {
          let n = b.getSnapshot(t.browserConversationId, t.browserTabId),
            r = b.pages.getHost(t.browserConversationId, t.browserTabId);
          return n == null || r == null
            ? null
            : {
                content: {
                  kind: `browser`,
                  data: {
                    cursorColor: getComputedStyle(document.documentElement).getPropertyValue(
                      `--color-text-info`,
                    ),
                    conversationId: t.browserConversationId,
                    browserTabId: t.browserTabId,
                    snapshot: n,
                  },
                },
                release: () => b.setTabDetached(t.browserConversationId, t.browserTabId, !0),
                closed: () => b.removeTab(t.browserConversationId, t.browserTabId),
              };
        },
        prepareDestination: async (e, t) => {
          (ee.isAvailable(e) === void 0 && (await e.when((e) => ee.isAvailable(e) !== void 0)),
            b.setSnapshot(t.conversationId, t.browserTabId, t.snapshot));
          let n = b.pages.getWebview(t.conversationId, t.browserTabId, ``, {
            windowTransferReceiver: !0,
          });
          return { receiver: new Gt(n, t), release: () => Ht(t.conversationId, t.browserTabId, n) };
        },
      }),
      (Gt = class extends i {
        host;
        content;
        constructor(e, t) {
          (super(), (this.host = e), (this.content = t));
        }
        async getContent() {
          let { conversationId: e, browserTabId: t } = this.content,
            n = b.getSnapshot(e, t);
          return n == null ? null : { kind: `browser`, data: { ...this.content, snapshot: n } };
        }
        whenPrepared() {
          return this.host.whenWindowTransferPrepared();
        }
        attach(e) {
          switch (e.kind) {
            case `browser`:
              return this.host.adoptForWindowTransfer(e.data.token);
          }
        }
        async whenReady() {
          (b.setTabDetached(this.content.conversationId, this.content.browserTabId, !1),
            await this.host.whenWindowTransferPresented(),
            b.pages.getWebview(this.content.conversationId, this.content.browserTabId, ``),
            await new Promise((e) =>
              requestAnimationFrame(() => requestAnimationFrame(() => e())),
            ));
        }
      }));
  }),
  qt,
  Jt = e(() => {
    (P(),
      N(),
      x(),
      w(),
      (qt = {
        allowCrossHost: !0,
        canTransfer: (e, t, n) =>
          Fe(
            it(t.browserConversationId, t.browserTabId) ||
              (b.getSnapshot(t.browserConversationId, t.browserTabId)?.url ??
                t.fallbackRestoreUrl ??
                ``),
          ) && t.browserConversationId !== Me(e, n.threadId),
        start: (e, t, n, r) => {
          let i = Me(e, n.threadId);
          return r.aborted ||
            !b.transferPageOwnership(t.browserConversationId, t.browserTabId, i, t.browserTabId, {
              preserveSourceOnTargetConflict: !0,
              removeSourceBrowserStateWhenEmpty: !1,
            })
            ? null
            : {
                cancel: () =>
                  b.transferPageOwnership(
                    i,
                    t.browserTabId,
                    t.browserConversationId,
                    t.browserTabId,
                    {
                      preserveSourceOnTargetConflict: !0,
                      removeSourceBrowserStateWhenEmpty: !1,
                    },
                  ),
              };
        },
      }));
  }),
  U,
  Yt,
  Xt = e(() => {
    (a(),
      (U = A()),
      (Yt = (e) =>
        (0, U.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 24,
          height: 24,
          fill: `none`,
          viewBox: `0 0 24 24`,
          ...e,
          children: (0, U.jsx)(`path`, {
            fill: `currentColor`,
            d: `M12.725 20.288c-.367.716-.842 1.166-1.425 1.35-.583.191-1.15.12-1.7-.213-.55-.325-.954-.846-1.213-1.563L3.787 6.95c-.175-.492-.216-.958-.124-1.4.091-.45.291-.83.6-1.137a2.187 2.187 0 0 1 1.137-.6c.45-.092.92-.05 1.412.125l12.913 4.6c.717.258 1.237.662 1.563 1.212.333.542.404 1.104.212 1.688-.183.583-.633 1.058-1.35 1.425l-4.925 2.512-2.5 4.913Z`,
          }),
        })));
  });
function W(e) {
  let t = (0, Zt.c)(6),
    { className: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = me(`relative flex items-center justify-center`, n)), (t[0] = n), (t[1] = r));
  let i, a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, G.jsx)(Lt, {
        className: `absolute inset-0 size-full`,
        style: { color: `var(--color-surface)` },
      })),
      (a = (0, G.jsx)(Yt, { className: `absolute inset-0 size-full text-default` })),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] === r
      ? (o = t[5])
      : ((o = (0, G.jsxs)(`span`, { "aria-hidden": `true`, className: r, children: [i, a] })),
        (t[4] = r),
        (t[5] = o)),
    o
  );
}
var Zt,
  G,
  Qt = e(() => {
    ((Zt = tt()), xt(), Xt(), It(), (G = A()));
  });
function K(e, t) {
  return b.getCustomTitle(e, t) == null && b.isDisposableEmptyNewTab(e, t);
}
function $t(e) {
  let t = D(e),
    n = e.get(T.tabs$),
    r = n[0];
  if (t == null || n.length !== 1 || r == null) return !1;
  let i = Ie(r);
  return i == null ||
    E(e, r.tabId) ||
    !K(t, i) ||
    (T.closeTab(e, r.tabId, { recordCloseUndo: !1 }), T.isCurrentTabInstance(e, r))
    ? !1
    : (de(t, i), b.removeTab(t, i), !0);
}
var en = e(() => {
  (v(), he(), P(), N(), w());
});
function tn({
  browserSnapshot: e,
  browserTabFallbackTitle: t,
  isBrowserUseActive: n,
  isBrowserUseTab: r,
}) {
  let i = e?.tabType === F.WEB,
    a = r && i && (e.url.length === 0 || e.url === `about:blank`),
    o = e == null || (i && (e.url.startsWith(rn) || e.title.startsWith(rn))),
    s = e != null && o,
    c = i && !a && !s ? ne(e.url) : ``,
    l = i ? e.title.trim() : ``,
    u = l.length === 0 || l === `about:blank` || l === t,
    d = i && !a && !s && l.length > 0;
  return {
    faviconUrl: i ? e.faviconUrl : null,
    isAudioMuted: i && e.isAudioMuted,
    isAudible: i && e.isAudible,
    isCapturingCamera: i ? e.isCapturingCamera : void 0,
    isCapturingMicrophone: i ? e.isCapturingMicrophone : void 0,
    isCapturingUserMedia: i && e.isCapturingUserMedia,
    isHighlighted: n,
    isLoading: i && !o && !e.isSuspended && e.isLoading,
    preserveExistingChrome: o,
    title: d && !u ? l : c || t,
  };
}
function nn(e, t) {
  return {
    faviconUrl: e.faviconUrl,
    isAudioMuted: e.isAudioMuted,
    isAudible: e.isAudible,
    isCapturingCamera: e.isCapturingCamera === !0,
    isCapturingMicrophone: e.isCapturingMicrophone === !0,
    isCapturingUserMedia: e.isCapturingUserMedia,
    isHighlighted: e.isHighlighted,
    isLoading: e.isLoading,
    isSuspended: t?.isSuspended ?? !1,
    isWaitingForResponse: t?.isWaitingForResponse === !0,
  };
}
var rn,
  an,
  on = e(() => {
    (s(),
      ft(),
      pe(),
      (rn = `about:blank#codex-browser-sidebar-attach-token=`),
      (an = ve({
        faviconUrl: nt().nullable(),
        isAudioMuted: k(),
        isAudible: k(),
        isCapturingCamera: k(),
        isCapturingMicrophone: k(),
        isCapturingUserMedia: k(),
        isHighlighted: k(),
        isLoading: k(),
        isSuspended: k(),
        isWaitingForResponse: k(),
      })));
  });
async function sn(e, t) {
  try {
    await cn(e, t);
  } catch (e) {
    se.error(`Failed to restore persisted Browser page`, { safe: {}, sensitive: { error: e } });
  }
  return !0;
}
async function cn(
  {
    activate: e,
    descriptor: t,
    insertAfterTabId: n,
    isDisconnected: r,
    reason: i,
    scope: a,
    target: o,
  },
  s,
) {
  let c = At(t);
  if (c == null) return;
  let l = D(a);
  if (l == null) return;
  if (i === `conversation-transfer`) {
    if (b.getExistingBrowserStorageId(l, c.browserTabId) !== c.browserStorageId) return;
    s(a, {
      activate: e,
      browserTabId: c.browserTabId,
      fallbackRestoreUrl: c.restoreUrl,
      insertAfterTabId: n,
      target: o,
    });
    return;
  }
  let u = M.browserHost;
  if (u == null) return;
  let d, f;
  try {
    if (((d = ln(a, u, l, c)), d == null))
      (b.removeTab(l, c.browserTabId), (f = { status: `missing` }));
    else {
      let e = await d.results,
        t = d.pages.findIndex((e) => e.browserTabId === c.browserTabId);
      f = e.length === d.pages.length && t !== -1 ? e[t] : void 0;
    }
  } catch (e) {
    se.error(`Failed to load persisted Browser page restore result`, {
      safe: {},
      sensitive: { error: e },
    });
  }
  if (r()) {
    q.get(a.node) === d && q.delete(a.node);
    return;
  }
  let p;
  if (f == null) b.restorePersistedPageState(l, c.browserTabId, c.browserStorageId);
  else
    switch (f.status) {
      case `already-live`:
        (b.setSnapshot(l, c.browserTabId, f.snapshot),
          b.setPersistentBrowserStorageId(l, c.browserTabId, f.browserStorageId));
        break;
      case `missing`:
        p = c.restoreUrl ?? void 0;
        break;
      case `owned-by-another-window`:
        return;
      case `snapshot-ready`:
        (b.setSnapshot(l, c.browserTabId, f.snapshot),
          b.restorePersistedPageState(l, c.browserTabId, c.browserStorageId));
        break;
    }
  (b.setCustomTitle(l, c.browserTabId, c.customTitle ?? null),
    s(a, {
      activate: e,
      browserTabId: c.browserTabId,
      fallbackRestoreUrl: c.restoreUrl,
      initialUrl: p,
      insertAfterTabId: n,
      target: o,
    }) != null && b.setDeviceToolbarTabState(l, c.browserTabId, () => c.deviceToolbarState));
}
function ln(e, t, n, r) {
  let i = gt(e.value),
    a = i == null ? null : Ye(e.get(lt, i));
  if (i != null && e.get(rt) === i && Le(e, r.browserTabId) == null) return;
  let o = new Set([...(a?.topology.right.tabIds ?? []), ...(a?.topology.bottom.tabIds ?? [])]),
    s = a?.routes.flatMap((e) => {
      if (!o.has(e.tabId)) return [];
      let t = At(e);
      return t == null ? [] : [t];
    });
  if (s == null || !s.some((e) => e.browserTabId === r.browserTabId)) return;
  let c = s.map((e) => ({
      browserStorageId: e.browserStorageId,
      browserTabId: e.browserTabId,
      conversationId: n,
    })),
    l = JSON.stringify(c),
    u = q.get(e.node);
  if (u?.signature === l) return u;
  let d = { pages: c, results: t.getPageRestoreResults({ pages: c }), signature: l };
  return (q.set(e.node, d), d);
}
var q,
  un = e(() => {
    (P(), j(), I(), ue(), st(), h(), w(), V(), (q = new WeakMap()));
  });
function dn(e, t, n, r) {
  let { browserConversationId: i, browserTabId: a } = t;
  return e.watch((o) => {
    let s = o.get(Se, n.tabId) != null,
      c = o.get(oe).formatMessage({
        id: `thread.sidePanel.emptyBrowserTab`,
        defaultMessage: `New tab`,
        description: `Title for an empty browser tab in the task side panel`,
      }),
      l,
      u = () => {
        let o = e.get(r.tabById$, n.tabId);
        if (!r.isCurrentTabInstance(e, n) || o?.props !== t) return;
        let u = b.getSnapshot(i, a),
          d = tn({
            browserSnapshot: u,
            browserTabFallbackTitle: c,
            isBrowserUseActive: b.isBrowserUseActive(i, a),
            isBrowserUseTab: b.isBrowserUseTab(i, a),
          }),
          f = d.preserveExistingChrome ? an.safeParse(o.forwardedChrome) : null,
          p = {
            canDiscardNewTabPage: r.panelId === `right` && K(i, a),
            chrome: d,
            customTitle: b.getCustomTitle(i, a),
            durableRoute: kt(i, a, {
              browserStorageId: b.getExistingBrowserStorageId(i, a),
              existingRoute: o.durableRoute,
              isDetached: s,
            }),
            forwardedChrome:
              f?.success === !0
                ? { ...f.data, isHighlighted: d.isHighlighted, isSuspended: o.isSuspended }
                : nn(d, u),
            isSuspended: d.preserveExistingChrome ? o.isSuspended : (u?.isSuspended ?? !1),
            isWaitingForResponse: u?.isWaitingForResponse === !0,
            pageTitle:
              d.preserveExistingChrome && o.renamePlaceholder != null
                ? o.renamePlaceholder
                : d.title,
          };
        (0, pn.default)(p, l) ||
          ((l = p),
          r.updateTab(e, n.tabId, {
            durableRoute: p.durableRoute,
            forwardedChrome: p.forwardedChrome,
            highlightedIcon: (0, J.jsx)(W, { className: `size-4` }),
            icon: d.preserveExistingChrome
              ? o.icon
              : (0, J.jsx)(B, {
                  faviconUrl: d.faviconUrl,
                  isLoading: d.isLoading,
                  isWaitingForResponse: p.isWaitingForResponse,
                }),
            isHighlighted: d.isHighlighted,
            isSuspended: p.isSuspended,
            onDiscardIfEmpty: p.canDiscardNewTabPage ? $t : void 0,
            trailingContent:
              d.isAudioMuted || d.isCapturingUserMedia || d.isAudible
                ? (0, J.jsx)(z, {
                    isAudioMuted: d.isAudioMuted,
                    isAudible: d.isAudible,
                    isCapturingCamera: d.isCapturingCamera,
                    isCapturingMicrophone: d.isCapturingMicrophone,
                    isCapturingUserMedia: d.isCapturingUserMedia,
                  })
                : void 0,
            renamePlaceholder: p.pageTitle,
            renameValue: p.customTitle,
            title: p.customTitle ?? p.pageTitle,
          }));
      },
      d = b.subscribe(u),
      f = Ve(u);
    return (
      u(),
      () => {
        (d(), f());
      }
    );
  });
}
function fn(e, { isLive: t }) {
  let n = an.safeParse(e);
  if (!n.success) return null;
  let r = n.data;
  return {
    highlightedIcon: t ? (0, J.jsx)(W, { className: `size-4` }) : void 0,
    icon: (0, J.jsx)(B, {
      faviconUrl: r.faviconUrl,
      isLoading: t && r.isLoading,
      isWaitingForResponse: t && r.isWaitingForResponse,
    }),
    isHighlighted: t && r.isHighlighted,
    isSuspended: r.isSuspended,
    trailingContent:
      t && (r.isAudioMuted || r.isCapturingUserMedia || r.isAudible)
        ? (0, J.jsx)(z, {
            isAudioMuted: r.isAudioMuted,
            isAudible: r.isAudible,
            isCapturingCamera: r.isCapturingCamera,
            isCapturingMicrophone: r.isCapturingMicrophone,
            isCapturingUserMedia: r.isCapturingUserMedia,
          })
        : void 0,
  };
}
var pn,
  J,
  mn = e(() => {
    ((pn = t(Ee(), 1)), v(), P(), Ot(), N(), Tt(), m(), Qt(), en(), on(), V(), (J = A()));
  });
function hn(e, t = {}) {
  let r = t.activate ?? !0,
    i = t.target ?? `right`,
    a = $.dropDestinations.includes(i) ? i : `right`,
    o = r && !(t.deferPresentation === !0 && a === `right`),
    s = D(e),
    c = t.browserConversationId ?? s;
  if (c == null) return !1;
  let l = X(t.browserTabId);
  if (bt(e, l)) return !0;
  let f = Te(e, l, a);
  if (f == null && !e.get(Qe)) return !1;
  (t.browserTransferSourceConversationId != null &&
    t.browserTransferSourceBrowserTabId != null &&
    b.transferPageOwnership(
      t.browserTransferSourceConversationId,
      t.browserTransferSourceBrowserTabId,
      c,
      l,
      { removeSourceBrowserStateWhenEmpty: we(e, t.browserTransferSourceConversationId) },
    ),
    b.getBrowserStorageId(c, l));
  let p = t.browserHostDisplayName ?? e.get(ge).display_name,
    m = t.cwd ?? e.get(vt),
    h = {
      browserConversationId: c,
      browserHostDisplayName: p,
      browserTabId: l,
      cwd: m,
      fallbackRestoreUrl: t.fallbackRestoreUrl,
      target: a,
    },
    { chrome: v, customTitle: ee, pageTitle: te } = Z(e, h),
    y = Ne(a),
    x = null,
    S = null,
    C = () => {
      let e = b.getSnapshot(c, l);
      e?.tabType !== F.WEB ||
        e.url.trim().length === 0 ||
        b.pages.focusWebview(c, l, () => g(document.activeElement) == null);
    };
  return (
    u(e, $, {
      durableRoute: f?.tab.durableRoute,
      highlightedIcon: (0, Q.createElement)(W, { className: `size-4` }),
      insertAfterTabId: t.insertAfterTabId,
      replaceTabId: t.replaceTabId,
      isHighlighted: v.isHighlighted,
      openedInBackground: !r,
      openerTabId: t.openerTabId,
      trailingContent:
        v.isAudioMuted || v.isCapturingUserMedia || v.isAudible
          ? (0, Q.createElement)(z, {
              isAudioMuted: v.isAudioMuted,
              isAudible: v.isAudible,
              isCapturingCamera: v.isCapturingCamera,
              isCapturingMicrophone: v.isCapturingMicrophone,
              isCapturingUserMedia: v.isCapturingUserMedia,
            })
          : void 0,
      props: h,
      activate: o,
      target: a,
      hasExternalFocus: () => b.pages.hasWebviewFocus(c, l),
      kind: We.BROWSER,
      requiresWorkspaceReady: !1,
      onActivate: () => {
        _(e, c, l);
      },
      onRename: (t) => {
        (b.setCustomTitle(c, l, t),
          y.updateTab(e, l, {
            renameValue: t,
            title: t ?? e.get(y.tabById$, l)?.renamePlaceholder ?? te,
          }));
      },
      onRestoreFocus: C,
      onTabClick: C,
      onClose: () => {
        ((x = b.getSnapshot(c, l)), (S = b.getCustomTitle(c, l)));
        let e = b.getPagePersistence(c, l);
        L.dispatchMessage(`browser-sidebar-command`, {
          pagePersistence: e,
          conversationId: c,
          browserTabId: l,
          command: { type: `close-tab` },
        });
      },
      onDiscardIfEmpty: a === `right` && K(c, l) ? $t : void 0,
      onUndoClose: (e, t) => {
        (b.setCustomTitle(c, l, S),
          x != null &&
            b.setSnapshot(c, l, {
              ...x,
              canGoBack: !1,
              canGoForward: !1,
              isAudible: !1,
              isCapturingUserMedia: !1,
              isLoading: !0,
            }),
          Y(e, {
            activate: !1,
            browserConversationId: c,
            browserHostDisplayName: p,
            browserTabId: l,
            cwd: m,
            hostId: e.get(d),
            initialUrl: x?.url,
            target: t,
          }));
      },
      onMove: (e, t) => ({
        contextMenuItems: _n({
          browserConversationId: c,
          browserHostDisplayName: p,
          browserTabId: l,
          cwd: m,
          target: t.panelId,
        }),
        onDiscardIfEmpty: t.panelId === `right` && K(c, l) ? $t : void 0,
        props: {
          browserConversationId: c,
          browserHostDisplayName: p,
          browserTabId: l,
          cwd: m,
          target: t.panelId,
        },
      }),
      renamePlaceholder: te,
      renameValue: ee,
    }),
    e.get(y.tabById$, l) == null ? !1 : (o && n(e, a), !0)
  );
}
function gn(e, t = {}) {
  let n = t.target ?? `right`,
    r = t.browserConversationId ?? D(e);
  if (r == null) return !1;
  let i = X(t.browserTabId),
    a = $.dropDestinations.includes(n) ? n : `right`;
  if (
    !hn(e, { ...t, activate: !1, browserConversationId: r, browserTabId: i, target: a }) ||
    !dt(e, a, i)
  )
    return !1;
  let o = e.get(ct);
  return (o.stop(), o.set(1), !0);
}
function Y(
  e,
  {
    activate: t = !0,
    browserConversationId: n,
    browserHostDisplayName: r,
    browserTabId: i,
    cwd: a,
    deferPresentation: o,
    fallbackRestoreUrl: s,
    hostId: c,
    initialUrl: l,
    initiator: u,
    insertAfterTabId: f,
    replaceTabId: p,
    openerTabId: m,
    source: h,
    target: g = `right`,
  } = {},
) {
  let _ = n ?? D(e);
  if (_ == null) return null;
  let v = X(i);
  if (
    (ze(_, v, { initialUrl: l, initiator: u, source: h }),
    !$.open(e, {
      activate: t,
      browserConversationId: _,
      browserHostDisplayName: r,
      browserTabId: v,
      cwd: a,
      deferPresentation: o,
      fallbackRestoreUrl: s,
      insertAfterTabId: f,
      replaceTabId: p,
      openerTabId: m,
      target: g,
    }))
  )
    return (de(_, v), null);
  if (l != null) {
    let t = b.getPagePersistence(_, v);
    L.dispatchMessage(`browser-sidebar-command`, {
      pagePersistence: t,
      browserTabId: v,
      conversationId: _,
      command: {
        hostId: c ?? e.get(d),
        initiator: u ?? `toggle_browser_command`,
        source: h ?? `manual`,
        type: `navigate`,
        url: l,
      },
    });
  }
  return v;
}
function X(e) {
  return e ?? y(crypto.randomUUID());
}
function Z(e, { browserConversationId: t, browserTabId: n, target: r = `right` }) {
  let i = b.getSnapshot(t, n),
    a = tn({
      browserSnapshot: i,
      browserTabFallbackTitle: e.get(oe).formatMessage({
        id: `thread.sidePanel.emptyBrowserTab`,
        defaultMessage: `New tab`,
        description: `Title for an empty browser tab in the task side panel`,
      }),
      isBrowserUseActive: b.isBrowserUseActive(t, n),
      isBrowserUseTab: b.isBrowserUseTab(t, n),
    }),
    o = Ne(r),
    s = Te(e, n, r),
    c = a.preserveExistingChrome ? (s?.tab ?? e.get(o.tabById$, n)) : null,
    l = b.getCustomTitle(t, n),
    u = c?.renamePlaceholder ?? a.title;
  return {
    chrome: a,
    customTitle: l,
    icon:
      c?.icon ??
      (0, Q.createElement)(B, {
        faviconUrl: a.faviconUrl,
        isLoading: a.isLoading,
        isWaitingForResponse: i?.isWaitingForResponse === !0,
      }),
    pageTitle: u,
    title: l ?? c?.title ?? u,
  };
}
function _n({
  browserConversationId: e,
  browserHostDisplayName: t,
  browserTabId: n,
  cwd: r,
  target: i,
}) {
  return (a, s) => {
    let c = b.getSnapshot(e, n),
      l = [
        {
          id: `new-browser-tab-to-the-right`,
          message: O({
            id: `thread.sidePanel.browserTabMenu.newTabToTheRight`,
            defaultMessage: `New tab to the right`,
            description: `Context menu action that opens a new browser tab immediately to the right of the current browser tab`,
          }),
          onSelect: () => {
            vn(a, {
              browserConversationId: e,
              browserHostDisplayName: t,
              browserTabId: n,
              cwd: r,
              target: i,
            });
          },
        },
        { id: `browser-tab-menu-reload-section-separator`, type: `separator` },
        {
          id: `reload-browser-tab`,
          message: O({
            id: `thread.sidePanel.browserTabMenu.reload`,
            defaultMessage: `Reload`,
            description: `Context menu action that reloads the current browser tab from the side panel tab strip`,
          }),
          onSelect: () => {
            L.dispatchMessage(`browser-sidebar-command`, {
              browserTabId: n,
              conversationId: e,
              command: { type: `reload` },
            });
          },
        },
        {
          id: `duplicate-browser-tab`,
          message: O({
            id: `thread.sidePanel.browserTabMenu.duplicate`,
            defaultMessage: `Duplicate`,
            description: `Context menu action that duplicates the current browser tab from the side panel tab strip`,
          }),
          onSelect: () => {
            bn(a, {
              browserConversationId: e,
              browserHostDisplayName: t,
              browserTabId: n,
              cwd: r,
              target: i,
            });
          },
        },
      ];
    (s != null &&
      l.push({
        id: `rename-browser-tab`,
        message: O({
          id: `thread.sidePanel.browserTabMenu.rename`,
          defaultMessage: `Rename`,
          description: `Context menu action that renames the current browser tab from the side panel tab strip`,
        }),
        onSelect: s,
      }),
      yn(c) != null &&
        l.push({
          id: `copy-browser-tab-url`,
          message: O({
            id: `thread.sidePanel.browserTabMenu.copyUrl`,
            defaultMessage: `Copy URL`,
            description: `Context menu action that copies the selected Browser tab's current URL to the clipboard`,
          }),
          onSelect: () => {
            let t = yn(b.getSnapshot(e, n));
            t != null &&
              M.clipboard
                .writeText(t)
                .then(() => {
                  a.get($e).success((0, xn.jsx)(p, { ...Ft.urlCopied }));
                })
                .catch(() => ut(t));
          },
        }),
      ot(a.get, `is_default_browser`) !== !0 &&
        c != null &&
        C(c.url) &&
        l.push({
          id: `open-browser-tab-in-external-browser`,
          message: O({
            id: `thread.sidePanel.browserTabMenu.openInExternalBrowser`,
            defaultMessage: `Open in external browser`,
            description: `Context menu action that opens the current browser tab in the external browser`,
          }),
          onSelect: () => {
            let t = b.getSnapshot(e, n)?.url;
            t == null ||
              !C(t) ||
              le({ href: t, initiator: `side_panel_menu`, useExternalBrowser: !0 });
          },
        }),
      c?.tabType === F.WEB &&
        !c.isSuspended &&
        l.push(
          Ct({
            browserTabId: n,
            conversationId: e,
            isAudioMuted: c.isAudioMuted,
            showIcon: c.isAudible,
          }),
        ));
    let u = gt(a.value);
    if (u == null) return l;
    let d = a.get(vt),
      m = je(d, a.get(ht) ?? void 0),
      h = a.get(Xe, u),
      g = a.get(f);
    return (
      l.push(
        { id: `browser-tab-menu-fork-section-separator`, type: `separator` },
        {
          id: `fork-browser-tab-into-current-workspace`,
          message: h && m ? g.intoSameWorktree : g.intoLocal,
          onSelect: () => {
            (Ge(a, o, {
              destination: m
                ? R.CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE
                : R.CODEX_THREAD_FORK_DESTINATION_LOCAL,
              source: xe.CODEX_THREAD_FORK_SOURCE_BROWSER_TAB_CONTEXT_MENU,
            }),
              St(a, { sourceConversationId: u, sourceWorkspaceRoot: d }).then((e) => {
                e != null && L.dispatchHostMessage({ type: `navigate-to-route`, path: Ke(e) });
              }));
          },
        },
      ),
      h &&
        l.push({
          id: `fork-browser-tab-into-new-worktree`,
          message: g.intoWorktree,
          onSelect: () => {
            (Ge(a, o, {
              destination: R.CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE,
              source: xe.CODEX_THREAD_FORK_SOURCE_BROWSER_TAB_CONTEXT_MENU,
            }),
              wt(a, {
                localEnvironmentSelectionsByWorkspace: Pe(ce, {}),
                sourceConversationId: u,
                sourceWorkspaceRoot: d,
              }).then((e) => {
                e != null &&
                  L.dispatchHostMessage({
                    type: `navigate-to-route`,
                    path: `/local/${e.clientThreadId}`,
                  });
              }));
          },
        }),
      l
    );
  };
}
function vn(
  e,
  {
    browserInitialUrl: t,
    browserConversationId: n,
    browserHostDisplayName: r,
    browserTabId: i,
    cwd: a,
    target: o,
  },
) {
  return Y(e, {
    browserConversationId: n,
    browserHostDisplayName: r,
    browserTabId: y(crypto.randomUUID()),
    cwd: a,
    hostId: e.get(d),
    initialUrl: t,
    initiator: `side_panel_menu`,
    insertAfterTabId: i,
    openerTabId: i,
    source: `manual`,
    target: o,
  });
}
function yn(e) {
  return e?.tabType === F.WEB && URL.canParse(e.url) && !e.url.startsWith(`about:blank`)
    ? e.url
    : null;
}
function bn(
  e,
  { browserConversationId: t, browserHostDisplayName: n, browserTabId: r, cwd: i, target: a },
) {
  vn(e, {
    browserInitialUrl: b.getSnapshot(t, r)?.url ?? ``,
    browserConversationId: t,
    browserHostDisplayName: n,
    browserTabId: r,
    cwd: i,
    target: a,
  });
}
var Q,
  xn,
  $,
  Sn = e(() => {
    (Ue(),
      s(),
      (Q = t(a(), 1)),
      _e(),
      c(),
      v(),
      Ce(),
      he(),
      mt(),
      Mt(),
      Kt(),
      P(),
      Et(),
      Ot(),
      Pt(),
      N(),
      Jt(),
      Tt(),
      ye(),
      re(),
      te(),
      et(),
      m(),
      Dt(),
      S(),
      _t(),
      He(),
      fe(),
      j(),
      I(),
      Re(),
      l(),
      Je(),
      r(),
      be(),
      ue(),
      pt(),
      at(),
      Ae(),
      Qt(),
      en(),
      Oe(),
      on(),
      w(),
      V(),
      un(),
      mn(),
      (xn = A()),
      ($ = ke({
        autocompleteProvider: Nt,
        canUndoClose: (e, { browserConversationId: t, browserTabId: n }) =>
          E(e, n) || b.canUndoClose(t, n),
        windowTransfer: Wt,
        conversationTransfer: qt,
        getContextMenuItems: (e, t) => _n({ ...t, target: t.target ?? `right` }),
        getIcon: (e, t) => Z(e, t).icon,
        getTitle: (e, t) => Z(e, t).title,
        onEnterFullWidth: (e, { browserConversationId: t, browserTabId: n }) => {
          let r = b.getSnapshot(t, n);
          r != null &&
            yt(r.url).length === 0 &&
            De(`focusBrowserAddressBar`, `side_panel_full_width`, { originPanel: `right` });
        },
        open: hn,
        renderForwardedChrome: fn,
        restore: (e) => sn(e, Y),
        serialize: (e, t, n) =>
          kt(t.browserConversationId, t.browserTabId, {
            browserStorageId: b.getExistingBrowserStorageId(
              t.browserConversationId,
              t.browserTabId,
            ),
            existingRoute: n,
            isDetached: E(e, t.browserTabId),
            fallbackRestoreUrl: n == null ? t.fallbackRestoreUrl : void 0,
          }),
        shouldPersist: (e, t, n) => jt(t, n?.browserConversationId),
        sync: dn,
      })));
  });
export { Y as a, hn as i, X as n, gn as o, Sn as r, $ as t };
//# sourceMappingURL=open-tab-72525c02e449.js.map
