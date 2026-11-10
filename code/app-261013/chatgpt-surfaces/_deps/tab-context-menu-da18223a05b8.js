const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./transfer-379b5332d2ba.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $z as t,
  Kat as n,
  SJ as r,
  TJ as i,
  cB as a,
  fPt as o,
  jDt as s,
  kDt as c,
  oB as l,
  pPt as u,
  qat as d,
  tK as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bwn as p,
  CUt as m,
  G8t as h,
  I3n as g,
  ICn as _,
  JCr as v,
  Jxn as y,
  K8t as b,
  MCn as x,
  QCr as S,
  RCn as C,
  RCr as w,
  SUt as T,
  cwn as E,
  dWt as D,
  dwn as O,
  fWt as k,
  hwn as A,
  lWt as j,
  mWt as M,
  pWt as N,
  qxn as P,
  uWt as F,
  v3n as I,
  zwn as L,
} from "./app-initial-5851df3f6cb1.js";
function R(e) {
  let t = e.get(v);
  return t?.isVisible !== !0 || (t.mode !== `split` && !e.get(D)) ? [] : z(e, e.get(y).chat);
}
function z(e, i, s = A) {
  let u = e.get(A.activeTab$),
    d = e.get(_),
    m = null;
  s === E
    ? (m = `bottom`)
    : d.mode === `split` &&
      (e.get(S)
        ? ((m = d.contentSide),
          i.kind === `content` &&
            i.tab.tabId === e.get(C) &&
            (m = d.contentSide === `left` ? `right` : `left`))
        : i.kind === `chat`
          ? (m = d.contentSide === `left` ? `right` : `left`)
          : i.tab.tabId === u?.tabId && (m = d.contentSide));
  let h = i.kind === `content` || u != null,
    g = [
      {
        enabled: h && m !== `left` && k(i, `left`),
        id: `unified-workspace-move-left`,
        icon: l,
        message: c({
          id: `threadWorkspace.contextMenu.moveToLeftPane`,
          defaultMessage: `Move to left pane`,
          description: `Context menu action that presents the selected task tab in the left workspace pane`,
        }),
        onSelect: () => b(e, `context_menu`, () => M(e, i, `left`, s)),
      },
      {
        enabled: h && m !== `right` && k(i, `right`),
        id: `unified-workspace-move-right`,
        icon: a,
        message: c({
          id: `threadWorkspace.contextMenu.moveToRightPane`,
          defaultMessage: `Move to right pane`,
          description: `Context menu action that presents the selected task tab in the right workspace pane`,
        }),
        onSelect: () => b(e, `context_menu`, () => M(e, i, `right`, s)),
      },
    ].filter((e) => e.enabled !== !1);
  return (
    s !== E &&
      e.get(I) &&
      k(i, `bottom`) &&
      g.push({
        id: `unified-workspace-move-bottom`,
        icon: t,
        message: c({
          id: `threadWorkspace.contextMenu.moveToBottomPane`,
          defaultMessage: `Move to bottom pane`,
          description: `Context menu action that moves an existing Terminal task tab into the bottom utility pane`,
        }),
        onSelect: () => b(e, `context_menu`, () => M(e, i, `bottom`, s)),
      }),
    i.kind === `content` &&
      !i.tab.isWorkspaceHome &&
      i.tab.tabType.windowTransfer != null &&
      n.detachedWindows != null &&
      g.push({
        id: `unified-workspace-move-new-window`,
        enabled: !p(e, i.tab.tabId) && i.tab.tabType.windowTransfer.canTransfer(e, i.tab.props),
        icon: f,
        message: c({
          id: `threadWorkspace.contextMenu.moveToNewWindow`,
          defaultMessage: `Move to new window`,
          description: `Context menu action that moves the selected content tab into a separate desktop window`,
        }),
        onSelect: () => {
          T(
            e,
            o(
              async () => {
                let { moveTabToNewWindow: e } = await import(`./transfer-379b5332d2ba.js`);
                return { moveTabToNewWindow: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5]),
              import.meta.url,
            ).then(({ moveTabToNewWindow: t }) => t(e, s, i.tab, null)),
          );
        },
      }),
    i.kind === `chat` &&
      e.get(D) &&
      g.push({
        id: `close-tab`,
        icon: r,
        message: c({
          id: `codex.tabs.contextMenu.close`,
          defaultMessage: `Close`,
          description: `Context menu action for closing a tab`,
        }),
        onSelect: () => j(e),
      }),
    g
  );
}
function B() {
  return (B = e(() => {
    (s(), m(), L(), w(), O(), g(), i(), d(), h(), N(), F(), x(), P(), u());
  }))();
}
export { z as n, B as r, R as t };
//# sourceMappingURL=tab-context-menu-da18223a05b8.js.map
