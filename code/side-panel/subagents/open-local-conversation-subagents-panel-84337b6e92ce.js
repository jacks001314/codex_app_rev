import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $wt as t,
  CFt as n,
  DXt as r,
  Hwt as i,
  Lwt as a,
  OXt as o,
  SFt as s,
  TFt as c,
  TTt as l,
  ZTt as u,
  cTt as d,
  fn as f,
  gn as p,
  hn as m,
  i3t as h,
  mn as g,
  pn as _,
  r3t as v,
  rTt as y,
} from "./app-initial-f094ef01c64d.js";
import { n as b, t as x } from "./verify-descendant-79c03f806412.js";
async function S(
  e,
  {
    activate: r = !0,
    hostId: s,
    insertAfterTabId: f,
    openOverviewWhenSelectionUnavailable: p = !1,
    parentConversationId: h,
    selectedConversationId: _ = null,
    selectedDisplayName: y = null,
    tabId: x,
  },
) {
  let w = x ?? m(h),
    T = _ != null && (!e.get(t, _) || e.get(u, _) == null),
    E = !0;
  if (
    _ != null &&
    ((E = b(e, {
      hostId: s,
      hydrateMissingAncestors: p,
      parentConversationId: h,
      selectedConversationId: _,
    })),
    E === !1)
  )
    return p
      ? S(e, { activate: r, hostId: s, insertAfterTabId: f, parentConversationId: h, tabId: w })
      : null;
  let D = _ != null && e.get(d, h) === !1,
    O = typeof E != `boolean` || D,
    k = {
      activate: r,
      durableRoute: { kind: g, params: { selectedConversationId: _ }, payloadVersion: 1 },
      id: w,
      insertAfterTabId: f,
      title: e.get(o).formatMessage({
        id: `localConversation.subagentsPanel.title`,
        defaultMessage: `Subagents`,
        description: `Title for the subagents right side panel tab`,
      }),
      props: {
        hostId: s,
        isLoading: O,
        parentConversationId: h,
        requestedConversationId: _,
        requestedDisplayName: y,
        onSelect: (t, n) => {
          S(e, {
            hostId: s,
            parentConversationId: h,
            selectedConversationId: t,
            selectedDisplayName: n,
            tabId: w,
          });
        },
      },
    },
    A = n(e, C, k);
  if (_ == null) return A;
  let j = await E,
    M = e.get(c.tabById$, A);
  if (M == null) return null;
  if (!(`requestedConversationId` in M.props) || M.props.requestedConversationId !== _) return A;
  if (!j)
    return (
      n(e, C, {
        ...k,
        activate: !1,
        durableRoute: { kind: g, params: { selectedConversationId: null }, payloadVersion: 1 },
        props: {
          ...k.props,
          isLoading: !1,
          requestedConversationId: null,
          requestedDisplayName: null,
        },
      }),
      A
    );
  let N = [];
  D && N.push(v(e, s).hydrateBackgroundThreads([h], { includeTurns: !0 }));
  let P = e.get(l, _),
    F = e.get(i, _),
    I = P?.turnStartedAtMs != null && F != null && P.turnStartedAtMs > F,
    L =
      P?.turnStartedAtMs === F &&
      P?.turnId != null &&
      e.get(d, h) === !0 &&
      e.get(a, h)?.some((e) => e.turnId === P.turnId) === !1,
    R =
      (I || L) &&
      P?.items.some((e) => e.type === `agentMessage` && e.text.trim().length > 0) === !0;
  if (
    (!T &&
      !e.get(d, _) &&
      !R &&
      N.push(v(e, s).hydrateBackgroundThreads([_], { includeTurns: !0 })),
    await Promise.all(N),
    O)
  ) {
    let t = e.get(c.tabById$, A);
    if (t == null) return null;
    if (!(`requestedConversationId` in t.props) || t.props.requestedConversationId !== _) return A;
    n(e, C, { ...k, activate: !1, props: { ...k.props, isLoading: !1 } });
  }
  return A;
}
var C,
  w = e(() => {
    (h(), y(), s(), r(), f(), p(), x(), (C = _({ open: S })));
  });
export { S as n, w as t };
//# sourceMappingURL=open-local-conversation-subagents-panel-84337b6e92ce.js.map
