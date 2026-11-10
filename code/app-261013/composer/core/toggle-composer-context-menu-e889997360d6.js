import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Mb as n,
  Pb as r,
  Pxt as i,
  TJ as a,
  VDt as o,
  Vxt as s,
  gPt as c,
  hPt as l,
  iot as u,
  jDt as d,
  oG as f,
  oot as p,
  sG as m,
  vzt as h,
  xMt as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  OPr as y,
  SDt as b,
  _Dt as x,
  a as S,
  bd as C,
  bg as w,
  dBt as T,
  eDr as E,
  fBt as D,
  gCr as O,
  kPr as k,
  nDr as A,
  o as j,
  s8n as M,
  sCr as N,
  v8n as P,
  vDt as F,
  wDt as I,
  xd as L,
  yCr as R,
  yg as z,
} from "./app-initial-5851df3f6cb1.js";
function B(e) {
  let n = (0, V.c)(35),
    {
      attachButton: r,
      appshotThreadTarget: i,
      fixedSectionHeaders: a,
      mentions: l,
      placement: d,
      pluginHostId: p,
    } = e,
    h = t(N),
    g = o(),
    _ = (0, H.useRef)(null),
    y = s(M),
    b = s(x),
    C = A(`3550143732`),
    w = v(I, u),
    { data: T, isFetching: E } = s(z),
    k = r != null,
    j = r?.disabled,
    P = l.ui?.activation,
    F;
  n[0] !== P ||
  n[1] !== T ||
  n[2] !== i ||
  n[3] !== w ||
  n[4] !== C ||
  n[5] !== j ||
  n[6] !== b ||
  n[7] !== k ||
  n[8] !== g ||
  n[9] !== E
    ? ((F = k
        ? [
            {
              type: `action`,
              key: `context-action:attach-files`,
              label: g.formatMessage({
                id: `restricted.aeon.messaging.addAttachments`,
                defaultMessage: `Add photos and files`,
                description: `Label for adding attachments in a dot message composer`,
              }),
              detail: null,
              icon: { 16: f, 20: m },
              disabled: j,
              action: () => _.current?.click(),
            },
            ...(P === `synthetic` && C && w
              ? [
                  S({
                    disabled: !!j || (i != null && !b),
                    disabledReason:
                      i != null && !b
                        ? g.formatMessage({
                            id: `avatarOverlay.quickChatBar.enableAppshotsInThread`,
                            defaultMessage: `Enable Appshots in a thread first`,
                            description: `Explains why attaching an Appshot from Mini is disabled before completing setup in the main window`,
                          })
                        : void 0,
                    onCapture:
                      i == null
                        ? void 0
                        : () => {
                            T != null &&
                              c.dispatchHostMessage({ type: `appshot-shortcut`, target: T, threadTarget: i });
                          },
                    intl: g,
                    key: `context-action:attach-appshot`,
                    target: E ? null : (T ?? null),
                  }),
                ]
              : []),
          ]
        : []),
      (n[0] = P),
      (n[1] = T),
      (n[2] = i),
      (n[3] = w),
      (n[4] = C),
      (n[5] = j),
      (n[6] = b),
      (n[7] = k),
      (n[8] = g),
      (n[9] = E),
      (n[10] = F))
    : (F = n[10]);
  let R = F;
  if (!l.ui?.active) return null;
  let B;
  n[11] === r
    ? (B = n[12])
    : ((B = r != null && (0, U.jsx)(`button`, { ...r, ref: _, hidden: !0 })), (n[11] = r), (n[12] = B));
  let W;
  n[13] === h ? (W = n[14]) : ((W = () => O(h)), (n[13] = h), (n[14] = W));
  let G, K;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = []), (K = []), (n[15] = G), (n[16] = K))
    : ((G = n[15]), (K = n[16]));
  let q;
  n[17] === h ? (q = n[18]) : ((q = (e) => D({ scope: h, path: e })), (n[17] = h), (n[18] = q));
  let J;
  n[19] !== a ||
  n[20] !== y ||
  n[21] !== R ||
  n[22] !== l.addMention ||
  n[23] !== l.closeAutocomplete ||
  n[24] !== l.setSelectedMention ||
  n[25] !== l.ui.query ||
  n[26] !== l.ui.source ||
  n[27] !== d ||
  n[28] !== p ||
  n[29] !== W ||
  n[30] !== q
    ? ((J = (0, U.jsx)(L, {
        fixedSectionHeaders: a,
        placement: d,
        getLocalConversationId: W,
        hostId: y,
        pluginHostId: p,
        query: l.ui.query,
        source: l.ui.source,
        skillRoots: G,
        threadSearchRoots: K,
        leadingItems: R,
        onAddContext: l.addMention,
        onMentionInserted: q,
        onRequestClose: l.closeAutocomplete,
        onUpdateSelectedMention: l.setSelectedMention,
      })),
      (n[19] = a),
      (n[20] = y),
      (n[21] = R),
      (n[22] = l.addMention),
      (n[23] = l.closeAutocomplete),
      (n[24] = l.setSelectedMention),
      (n[25] = l.ui.query),
      (n[26] = l.ui.source),
      (n[27] = d),
      (n[28] = p),
      (n[29] = W),
      (n[30] = q),
      (n[31] = J))
    : (J = n[31]);
  let Y;
  return (
    n[32] !== B || n[33] !== J
      ? ((Y = (0, U.jsxs)(U.Fragment, { children: [B, J] })), (n[32] = B), (n[33] = J), (n[34] = Y))
      : (Y = n[34]),
    Y
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = h()), i(), (H = _()), d(), P(), b(), F(), w(), j(), T(), C(), a(), l(), R(), p(), E(), (U = g()));
  }))();
}
function G(e, t, r) {
  let i = n.getState(t.view.state);
  (!(i?.active && i.activation === `synthetic`) &&
    r &&
    e.get(I, `local`) &&
    e.get(k, `3550143732`) &&
    e.get(z).refetch(),
    t.toggleContextSuggestions());
}
function K() {
  return (K = e(() => {
    (b(), w(), r(), p(), y());
  }))();
}
export { W as i, G as n, B as r, K as t };
//# sourceMappingURL=toggle-composer-context-menu-e889997360d6.js.map
