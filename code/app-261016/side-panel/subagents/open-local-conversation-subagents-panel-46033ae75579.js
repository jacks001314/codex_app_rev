import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADn as t,
  CIr as n,
  FBr as r,
  IBr as i,
  MDn as a,
  P9n as o,
  PDn as s,
  SIr as c,
  Z9n as l,
  ber as u,
  crt as d,
  drt as f,
  eer as p,
  lrt as m,
  rer as h,
  srt as g,
  urt as _,
  z9n as v,
} from "./app-initial-ad16eaadf81f.js";
import { n as y, t as b } from "./verify-descendant-a89dc523111f.js";
async function x(
  e,
  {
    revealAndFocus: t = !0,
    hostId: i,
    insertPosition: c,
    openOverviewWhenSelectionUnavailable: d = !1,
    parentConversationId: f,
    selectedConversationId: p = null,
    selectedDisplayName: g = null,
    tabId: b,
  },
) {
  let C = b ?? _(f),
    w = !0;
  p != null &&
    (w = y(e, { hostId: i, hydrateMissingAncestors: d, parentConversationId: f, selectedConversationId: p }));
  let T = p != null && e.get(l, p),
    E = e.get(h, f),
    D = p != null && !T && E !== !0,
    O = typeof w != `boolean` || D,
    k = {
      durableRoute: { kind: m, params: { selectedConversationId: p }, payloadVersion: 1 },
      id: C,
      insertPosition: c,
      title: e
        .get(n)
        .formatMessage({
          id: `localConversation.subagentsPanel.title`,
          defaultMessage: `Subagents`,
          description: `Title for the subagents right side panel tab`,
        }),
      props: {
        hostId: i,
        isLoading: O,
        parentConversationId: f,
        requestedConversationId: p,
        requestedDisplayName: g,
        onSelect: (t, n) => {
          x(e, {
            hostId: i,
            parentConversationId: f,
            selectedConversationId: t,
            selectedDisplayName: n,
            tabId: C,
          });
        },
      },
    },
    A = a(e, S, { ...k, revealAndFocus: t });
  if (p == null) return A;
  let j = await w,
    M = e.get(s.tabById$, A);
  if (M == null) return null;
  if (!(`requestedConversationId` in M.props) || M.props.requestedConversationId !== p) return A;
  if (!j)
    return (
      a(e, S, {
        ...k,
        durableRoute: { kind: m, params: { selectedConversationId: null }, payloadVersion: 1 },
        props: { ...k.props, isLoading: !1, requestedConversationId: null, requestedDisplayName: null },
        revealAndFocus: !1,
      }),
      A
    );
  let N = D
      ? await r(e, i)
          .getThreadListSummary(p)
          .catch(() => null)
      : null,
    P = e.get(s.tabById$, A);
  if (P == null) return null;
  if (!(`requestedConversationId` in P.props) || P.props.requestedConversationId !== p) return A;
  let F = [];
  if (D && N?.forkedFromId !== null) {
    let t = () => r(e, i).hydrateBackgroundThreads([f], { includeTurns: !0 });
    F.push(
      E === !1
        ? t()
        : e
            .when(({ get: e }) => e(h, f) != null)
            .then(() => {
              if (e.get(h, f) === !1) return t();
            }),
    );
  }
  let I = e.get(u, p),
    L = e.get(v, p),
    R = I?.turnStartedAtMs != null && L != null && I.turnStartedAtMs > L,
    z =
      I?.turnStartedAtMs === L &&
      I?.turnId != null &&
      e.get(h, f) === !0 &&
      e.get(o, f)?.some((e) => e.turnId === I.turnId) === !1,
    B = (R || z) && I?.items.some((e) => e.type === `agentMessage` && e.text.trim().length > 0) === !0;
  if (
    (!e.get(h, p) &&
      !B &&
      F.push(
        r(e, i)
          .loadBackgroundThreadHistoryPage(p)
          .then(
            () => void 0,
            () => void 0,
          ),
      ),
    await Promise.all(F),
    O)
  ) {
    let t = e.get(s.tabById$, A);
    if (t == null) return null;
    if (!(`requestedConversationId` in t.props) || t.props.requestedConversationId !== p) return A;
    a(e, S, { ...k, props: { ...k.props, isLoading: !1 }, revealAndFocus: !1 });
  }
  return A;
}
var S;
function C() {
  return (C = e(() => {
    (i(), p(), t(), c(), g(), f(), b(), (S = d({ open: x })));
  }))();
}
export { x as n, C as t };
//# sourceMappingURL=open-local-conversation-subagents-panel-46033ae75579.js.map
