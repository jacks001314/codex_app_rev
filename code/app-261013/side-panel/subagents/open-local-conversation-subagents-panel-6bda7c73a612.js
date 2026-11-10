import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ftt as t,
  Itt as n,
  Ltt as r,
  Q6n as i,
  R8n as a,
  Rtt as o,
  XPr as s,
  YPr as c,
  aIr as l,
  dwn as u,
  h8n as d,
  hwn as f,
  oIr as p,
  pwn as m,
  r8n as h,
  v8n as g,
  x8n as _,
  ztt as v,
} from "./app-initial-5851df3f6cb1.js";
import { n as y, t as b } from "./verify-descendant-7cfcf0c5b254.js";
async function x(
  e,
  {
    revealAndFocus: t = !0,
    hostId: n,
    insertPosition: s,
    openOverviewWhenSelectionUnavailable: l = !1,
    parentConversationId: u,
    selectedConversationId: g = null,
    selectedDisplayName: v = null,
    tabId: b,
  },
) {
  let C = b ?? o(u),
    w = !0;
  g != null &&
    (w = y(e, { hostId: n, hydrateMissingAncestors: l, parentConversationId: u, selectedConversationId: g }));
  let T = g != null && e.get(d, g),
    E = e.get(_, u),
    D = g != null && !T && E !== !0,
    O = typeof w != `boolean` || D,
    k = {
      durableRoute: { kind: r, params: { selectedConversationId: g }, payloadVersion: 1 },
      id: C,
      insertPosition: s,
      title: e
        .get(p)
        .formatMessage({
          id: `localConversation.subagentsPanel.title`,
          defaultMessage: `Subagents`,
          description: `Title for the subagents right side panel tab`,
        }),
      props: {
        hostId: n,
        isLoading: O,
        parentConversationId: u,
        requestedConversationId: g,
        requestedDisplayName: v,
        onSelect: (t, r) => {
          x(e, {
            hostId: n,
            parentConversationId: u,
            selectedConversationId: t,
            selectedDisplayName: r,
            tabId: C,
          });
        },
      },
    },
    A = m(e, S, { ...k, revealAndFocus: t });
  if (g == null) return A;
  let j = await w,
    M = e.get(f.tabById$, A);
  if (M == null) return null;
  if (!(`requestedConversationId` in M.props) || M.props.requestedConversationId !== g) return A;
  if (!j)
    return (
      m(e, S, {
        ...k,
        durableRoute: { kind: r, params: { selectedConversationId: null }, payloadVersion: 1 },
        props: { ...k.props, isLoading: !1, requestedConversationId: null, requestedDisplayName: null },
        revealAndFocus: !1,
      }),
      A
    );
  let N = D
      ? await c(e, n)
          .getThreadListSummary(g)
          .catch(() => null)
      : null,
    P = e.get(f.tabById$, A);
  if (P == null) return null;
  if (!(`requestedConversationId` in P.props) || P.props.requestedConversationId !== g) return A;
  let F = [];
  if (D && N?.forkedFromId !== null) {
    let t = () => c(e, n).hydrateBackgroundThreads([u], { includeTurns: !0 });
    F.push(
      E === !1
        ? t()
        : e
            .when(({ get: e }) => e(_, u) != null)
            .then(() => {
              if (e.get(_, u) === !1) return t();
            }),
    );
  }
  let I = e.get(a, g),
    L = e.get(h, g),
    R = I?.turnStartedAtMs != null && L != null && I.turnStartedAtMs > L,
    z =
      I?.turnStartedAtMs === L &&
      I?.turnId != null &&
      e.get(_, u) === !0 &&
      e.get(i, u)?.some((e) => e.turnId === I.turnId) === !1,
    B = (R || z) && I?.items.some((e) => e.type === `agentMessage` && e.text.trim().length > 0) === !0;
  if (
    (!e.get(_, g) &&
      !B &&
      F.push(
        c(e, n)
          .loadBackgroundThreadHistoryPage(g)
          .then(
            () => void 0,
            () => void 0,
          ),
      ),
    await Promise.all(F),
    O)
  ) {
    let t = e.get(f.tabById$, A);
    if (t == null) return null;
    if (!(`requestedConversationId` in t.props) || t.props.requestedConversationId !== g) return A;
    m(e, S, { ...k, props: { ...k.props, isLoading: !1 }, revealAndFocus: !1 });
  }
  return A;
}
var S;
function C() {
  return (C = e(() => {
    (s(), g(), u(), l(), t(), v(), b(), (S = n({ open: x })));
  }))();
}
export { x as n, C as t };
//# sourceMappingURL=open-local-conversation-subagents-panel-6bda7c73a612.js.map
