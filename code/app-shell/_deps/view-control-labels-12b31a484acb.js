import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Lt as n,
  ALt as r,
  DXt as i,
  FLt as a,
  O3t as o,
  OXt as s,
  QLt as c,
  SFt as l,
  SRt as u,
  TFt as d,
  VLt as f,
  XLt as p,
  aX as m,
  bFt as h,
  bX as g,
  c6t as _,
  cFt as v,
  cX as y,
  eRt as b,
  fX as x,
  gRt as S,
  gX as C,
  hX as w,
  iFt as T,
  iX as E,
  lX as D,
  mR as O,
  nX as k,
  pR as A,
  pX as j,
  pmn as M,
  vX as N,
  xRt as P,
  yFt as F,
} from "./app-initial-f094ef01c64d.js";
import { a as I, r as L } from "./open-tab-72525c02e449.js";
function R(e) {
  if (!(e.get(c) == null || e.get(u))) {
    if (e.get(b) === `split` && e.get(j)) {
      ((0, B.flushSync)(() => {
        (g(e, !1),
          e.get(d.tabIds$).length === 1 && e.get(d.activeTab$)?.onDiscardIfEmpty?.(e),
          m(e, e.get(D).chat));
      }),
        requestAnimationFrame(() => {
          e.get(b) === `split` && !e.get(j) && T();
        }));
      return;
    }
    z(e, `split`);
  }
}
function z(e, t, i = `toggle_browser_command`) {
  if (e.get(c) == null || e.get(u) || (t === `split` && e.get(b) === `split` && e.get(j))) return;
  let o = e.get(w),
    s = t === `full` && e.get(b) === `full` && o === `content`,
    l = document.activeElement,
    f = e.get(d.activeTab$) ?? e.get(d.tabs$)[0],
    m = f == null;
  if (
    m &&
    (!e.get(A, { name: `browser.in-app` }).isCapable ||
      I(e, { deferPresentation: !0, initiator: i, source: `manual` }) == null)
  )
    return;
  let h = f ?? e.get(d.tabs$)[0];
  if (h == null) return;
  let g =
    s || (t === `split` && !m && (o === `chat` || (e.get(r) === `main` && a(l) === `composer`)))
      ? `main`
      : `right-panel`;
  (0, B.flushSync)(() =>
    E(
      e,
      s ? e.get(D).chat : { kind: `content`, tab: h },
      t === `full` ? { mode: t } : { mode: t, contentSide: e.get(n) },
    )
      ? (e.set(C, g === `main` ? `chat` : `content`), p(e, g), !0)
      : !1,
  ) &&
    requestAnimationFrame(() => {
      let n = e.get(d.activeTab$);
      if (
        n?.dndId !== h.dndId ||
        e.get(b) !== t ||
        e.get(w) !== (g === `main` ? `chat` : `content`)
      )
        return;
      if ((p(e, g), g === `main`)) {
        if (
          t === `split` &&
          l instanceof HTMLElement &&
          l !== document.body &&
          l.isConnected &&
          (l.focus({ preventScroll: !0 }), document.activeElement === l)
        )
          return;
        T();
        return;
      }
      let r = document.getElementById(F(h.dndId));
      r == null ||
        (document.activeElement !== r && r.contains(document.activeElement)) ||
        n.hasExternalFocus?.() ||
        (r.focus({ preventScroll: !0 }), n.onRestoreFocus?.());
    });
}
var B,
  V = e(() => {
    ((B = t(M(), 1)), O(), f(), l(), h(), L(), v(), P(), N(), k(), x(), y());
  }),
  H,
  U,
  W = e(() => {
    (o(),
      f(),
      l(),
      i(),
      P(),
      x(),
      (H = _(S, ({ get: e }) => {
        let t = e(s);
        return e(d.tabIds$).length === 0
          ? t.formatMessage({
              id: `threadWorkspace.layout.newTab`,
              defaultMessage: `New tab`,
              description: `Creates a content tab beside Chat when there are no tabs`,
            })
          : e(b) === `split` && e(j)
            ? t.formatMessage({
                id: `threadWorkspace.layout.hideTabs`,
                defaultMessage: `Hide tabs`,
                description: `Hides the content tabs and leaves Chat visible`,
              })
            : t.formatMessage({
                id: `threadWorkspace.layout.showTabs`,
                defaultMessage: `Show tabs`,
                description: `Restores the content tabs beside Chat`,
              });
      })),
      (U = _(S, ({ get: e }) => {
        let t = e(s);
        return e(d.tabIds$).length === 0
          ? t.formatMessage({
              id: `threadWorkspace.layout.newTabInFullView`,
              defaultMessage: `New tab in full view`,
              description: `Creates a content tab that fills the workspace`,
            })
          : e(b) === `full`
            ? t.formatMessage({
                id: `threadWorkspace.layout.exitFullView`,
                defaultMessage: `Exit full view`,
                description: `Restores Chat and the content tabs side by side`,
              })
            : t.formatMessage({
                id: `threadWorkspace.layout.enterFullView`,
                defaultMessage: `Enter full view`,
                description: `Expands the active content tab to fill the workspace`,
              });
      })));
  });
export { z as a, V as i, U as n, R as o, H as r, W as t };
//# sourceMappingURL=view-control-labels-12b31a484acb.js.map
