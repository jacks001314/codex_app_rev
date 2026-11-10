const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./metadata-e79c46edc6a1.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./metadata-cff3f4695011.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./parsePhoneNumber-4ef2d042ec5d.js",
      "./withMetadataArgument-52cb9379cde9.js",
      "./parsePhoneNumber-d60824298d64.js",
      "./open-status-531dd613a4a6.js",
      "./quote-action-5a2dc8ce8a55.js",
      "./chatgpt-ecosystem-widget-86361a1e1747.js",
      "./mcp-sandbox-rpc-ca8003ff80ff.js",
      "./chatgpt_finance-6f5d98dfb009.js",
      "./widget-ea192a210472.js",
      "./mcp-app-host-styles-55af4a679ef7.js",
      "./sandbox-origin-6479c97e7d45.js",
      "./resource-5df84eaadd7b.js",
      "./mcp-app-follow-up-message-6745dc3197d3.js",
      "./widget-follow-up-request-a0e70ac59eed.js",
      "./mcp-app-follow-up-confirmation-dialog-4d62a209cf2f.js",
      "./mcp-sandbox-element-10552eb147d8.js",
      "./observe-layout-motion-cdda8b68cb96.js",
      "./message-submission-43662f2770ed.js",
      "./new-thread-toast-d8f4508f3402.js",
      "./back-forward-navigation-buttons-93aa83d145f3.js",
      "./viewer-header-6e3f79044bac.js",
      "./inline-height-de22080375ee.js",
      "./widget-e4bfe9e3f201.css",
      "./frame-container-41423da37713.js",
      "./open-button-966628744c22.js",
      "./chatgpt-ecosystem-widget-resource-9c3e6a125c8e.js",
      "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js",
      "./plugin-connected-account-links-8dea8c830000.js",
      "./use-ecosystem-widget-launch-7c7990ac8eb9.js",
      "./metadata-1af03955d81a.css",
      "./report-dialog-3ddbd73f3ad1.js",
      "./report-dialog-bb6e098cc574.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  B4 as r,
  CO as i,
  Cot as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  TJ as u,
  TO as d,
  VDt as f,
  Vxt as p,
  _Mt as m,
  _xt as h,
  cu as g,
  fPt as _,
  gMt as v,
  jDt as y,
  jH as b,
  pPt as x,
  su as S,
  t3 as C,
  vzt as w,
  wot as ee,
  xMt as T,
  yzt as E,
  z4 as te,
  zxt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  B1t as ne,
  Bpt as re,
  Cwr as ie,
  EZn as ae,
  G4n as oe,
  GMr as se,
  J4n as ce,
  NDr as le,
  OPr as ue,
  V1t as de,
  XO as fe,
  YO as pe,
  b9t as me,
  gwr as he,
  jut as ge,
  kPr as _e,
  kut as ve,
  nT as ye,
  pOr as be,
  pZn as xe,
  rT as Se,
  tNr as Ce,
  wpt as we,
  x9t as Te,
  yjn as Ee,
} from "./app-initial-5851df3f6cb1.js";
import { n as De, t as Oe } from "./monetary-value-visibility-context-75518ab926e7.js";
import { i as ke, r as Ae } from "./image-group-carousel-349a6eccf475.js";
import { i as je, o as Me } from "./optimistic-metadata-edcd12837ae2.js";
import { n as Ne, t as Pe } from "./entity-sheet-header-1fd7792019f5.js";
import { n as Fe, r as O, t as Ie } from "./library-view-original-chat-menu-item-274f391269fc.js";
import { i as Le, r as k } from "./chatgpt-entity-turn-actions-2a896d94b5d8.js";
import { n as Re, r as A, t as ze } from "./chatgpt-memory-source-feedback-2f818b93aa99.js";
import { n as Be, t as Ve } from "./entity-actions-7f50cb680eab.js";
function j(e) {
  let t = (0, M.c)(18),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: r, children: n, overlayContent: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let [o, s] = (0, N.useState)(!1),
    c = (0, N.useRef)(null),
    l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        if (e == null || c.current?.parentElement?.querySelector(`[data-entity-photos]`) !== e) return;
        let t = new IntersectionObserver((e) => {
          let [t] = e;
          s(!t.isIntersecting);
        });
        return (t.observe(e), () => t.disconnect());
      }),
      (t[5] = l))
    : (l = t[5]);
  let u = i ? `h-0` : `h-14`,
    d;
  t[6] !== r || t[7] !== u
    ? ((d = v(`pointer-events-none sticky top-0 z-10 shrink-0`, u, r)), (t[6] = r), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f = i && !o,
    p;
  t[9] !== a || t[10] !== f
    ? ((p = (0, P.jsx)(`div`, {
        className: `absolute inset-x-0 top-0`,
        children: (0, P.jsx)(Pe, { ...a, isTransparent: f }),
      })),
      (t[9] = a),
      (t[10] = f),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== d || t[13] !== p
    ? ((m = (0, P.jsx)(`div`, { ref: c, className: d, children: p })), (t[12] = d), (t[13] = p), (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== n || t[16] !== m
      ? ((h = (0, P.jsxs)(Ae, { value: l, children: [m, n] })), (t[15] = n), (t[16] = m), (t[17] = h))
      : (h = t[17]),
    h
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = w()), m(), (N = E()), Ne(), ke(), (P = T()));
  }))();
}
function I(e) {
  let t = (0, L.c)(9),
    { params: n, prominent: r, hideSensitiveTitleSuffix: i } = e,
    a = n.clientParams?.entitySidebarPresentation,
    o = r && (!a?.titleSuffix?.isSensitive || !i) ? a?.titleSuffix : void 0,
    c =
      r && typeof n.extraParams?.displayTitle == `string` && n.extraParams.displayTitle.trim().length > 0
        ? n.extraParams.displayTitle
        : n.query,
    l = o == null ? `truncate` : `flex items-center gap-1`,
    u = r ? `text-base leading-6 font-semibold` : `ps-1 text-sm font-medium`,
    d;
  t[0] !== l || t[1] !== u
    ? ((d = v(`min-w-0 flex-1 text-default`, l, u)), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== c || t[4] !== o
    ? ((f =
        o == null
          ? c
          : (0, R.jsx)(s, {
              id: `chatgpt.entitySidebar.titleWithStatus`,
              defaultMessage: `<title>{titleText}</title> · <status>{statusText}</status>`,
              description: `Entity details header containing the entity title and a short colored status, separated by a middle dot`,
              values: {
                titleText: c,
                statusText: o.text,
                title: He,
                status: (e) =>
                  (0, R.jsx)(`span`, {
                    className: v(`shrink-0`, {
                      "text-success": o.tone === `success`,
                      "text-caution": o.tone === `caution`,
                      "text-warning": o.tone === `warning`,
                      "text-danger": o.tone === `danger`,
                      "text-secondary": o.tone === `secondary`,
                    }),
                    children: e,
                  }),
              },
            })),
      (t[3] = c),
      (t[4] = o),
      (t[5] = f))
    : (f = t[5]);
  let p;
  return (
    t[6] !== d || t[7] !== f
      ? ((p = (0, R.jsx)(`div`, { className: d, children: f })), (t[6] = d), (t[7] = f), (t[8] = p))
      : (p = t[8]),
    p
  );
}
function He(e) {
  return (0, R.jsx)(`span`, { className: `min-w-0 truncate`, children: e });
}
var L, R;
function z() {
  return (z = e(() => {
    ((L = w()), m(), y(), (R = T()));
  }))();
}
function Ue(e) {
  let t = (0, B.c)(26),
    { sourceAccountId: n, source: r, sources: i, turn: a } = e,
    o = c(he),
    s = f(),
    l = p(be),
    u = p(fe),
    d = D(xe, a.conversationId),
    m = D(ae, a.conversationId),
    h = r.messageId ?? a.messageId,
    g;
  t[0] !== l || t[1] !== d || t[2] !== r.citationUuid || t[3] !== h
    ? ((g = { accountId: l, conversationId: d, messageId: h, citationUuid: r.citationUuid }),
      (t[0] = l),
      (t[1] = d),
      (t[2] = r.citationUuid),
      (t[3] = h),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v = D(ze, _),
    y = v == null ? r.feedback : v.feedback;
  if (l !== n || !u || m || d == null || r.citationUuid == null) return null;
  let b;
  t[5] !== s ||
  t[6] !== o ||
  t[7] !== y ||
  t[8] !== r ||
  t[9] !== i ||
  t[10] !== v?.pending ||
  t[11] !== _ ||
  t[12] !== a
    ? ((b =
        y === `negative`
          ? null
          : (0, V.jsx)(k, {
              direction: `up`,
              selected: y === `positive`,
              label: s.formatMessage({
                id: `chatgptConversations.summaryPanel.sources.memory.feedback.relevant`,
                defaultMessage: `Relevant`,
                description: `Feedback menu option indicating a memory source was relevant`,
              }),
              disabled: v?.pending === !0,
              onClick: () =>
                void A(o, {
                  target: _,
                  source: r,
                  sources: i,
                  turn: a,
                  feedback: `positive`,
                  surface: `explainer`,
                }),
            })),
      (t[5] = s),
      (t[6] = o),
      (t[7] = y),
      (t[8] = r),
      (t[9] = i),
      (t[10] = v?.pending),
      (t[11] = _),
      (t[12] = a),
      (t[13] = b))
    : (b = t[13]);
  let x;
  t[14] !== s ||
  t[15] !== o ||
  t[16] !== y ||
  t[17] !== r ||
  t[18] !== i ||
  t[19] !== v?.pending ||
  t[20] !== _ ||
  t[21] !== a
    ? ((x =
        y === `positive`
          ? null
          : (0, V.jsx)(k, {
              direction: `down`,
              selected: y === `negative`,
              label: s.formatMessage({
                id: `chatgptConversations.summaryPanel.sources.memory.feedback.notRelevant`,
                defaultMessage: `Not relevant`,
                description: `Feedback menu option indicating a memory source was not relevant`,
              }),
              disabled: v?.pending === !0,
              onClick: () =>
                void A(o, {
                  target: _,
                  source: r,
                  sources: i,
                  turn: a,
                  feedback: `negative`,
                  surface: `explainer`,
                }),
            })),
      (t[14] = s),
      (t[15] = o),
      (t[16] = y),
      (t[17] = r),
      (t[18] = i),
      (t[19] = v?.pending),
      (t[20] = _),
      (t[21] = a),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== b || t[24] !== x
      ? ((S = (0, V.jsxs)(`div`, { className: `flex items-center gap-1 text-secondary`, children: [b, x] })),
        (t[23] = b),
        (t[24] = x),
        (t[25] = S))
      : (S = t[25]),
    S
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = w()), l(), y(), Le(), pe(), ie(), Re(), Ee(), le(), (V = T()));
  }))();
}
function We(e) {
  let t = (0, W.c)(19),
    n = D(_e, `2789236610`),
    { params: r } = e;
  if (!n || r.shouldBlockExternalEgress) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, K.jsx)(U, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  let i = r.businessPreview?.name ?? r.query,
    a =
      r.businessPreview?.entity_lookup_id ??
      (typeof r.extraParams?.entity_lookup_id == `string` ? r.extraParams.entity_lookup_id : r.entityId),
    o;
  t[2] !== r.businessPreview || t[3] !== i || t[4] !== a
    ? ((o = { ...r.businessPreview, name: i, entity_lookup_id: a }),
      (t[2] = r.businessPreview),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o))
    : (o = t[5]);
  let s = o,
    c;
  t[6] === e ? (c = t[7]) : ((c = (0, K.jsx)(U, { ...e })), (t[6] = e), (t[7] = c));
  let l;
  t[8] === e
    ? (l = t[9])
    : ((l = (t, n) => (0, K.jsx)(U, { ...e, disputeAction: n })), (t[8] = e), (t[9] = l));
  let u;
  t[10] === s
    ? (u = t[11])
    : ((u = (e) => (0, K.jsx)(q, { business: s, verified: e, readOnly: !0 })), (t[10] = s), (t[11] = u));
  let d;
  t[12] !== s || t[13] !== l || t[14] !== u
    ? ((d = (0, K.jsx)(Y, {
        business: s,
        flowType: `dispute`,
        renderMetadata: l,
        renderClaimButton: Ge,
        businessPreview: u,
      })),
      (t[12] = s),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== c || t[17] !== d
      ? ((f = (0, K.jsx)(G.Suspense, { fallback: c, children: d })), (t[16] = c), (t[17] = d), (t[18] = f))
      : (f = t[18]),
    f
  );
}
function Ge(e) {
  return (0, K.jsx)(d.Item, {
    leftIconAsset: g,
    onSelect: e,
    children: (0, K.jsx)(s, {
      id: `chatgpt.localBusiness.dispute.action`,
      defaultMessage: `Dispute profile ownership`,
      description: `First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow.`,
    }),
  });
}
function U(e) {
  let n = (0, W.c)(20),
    { params: r, onNavigate: o, disputeAction: l } = e,
    u = c(a),
    p = f(),
    m = Se(),
    h;
  n[0] === p
    ? (h = n[1])
    : ((h = p.formatMessage({
        id: `chatgpt.localBusiness.report.options`,
        defaultMessage: `Open place options`,
        description: `Accessible label for the three-dot menu at the top of a local place details sidebar. The menu includes an action to report the place.`,
      })),
      (n[0] = p),
      (n[1] = h));
  let g;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, K.jsx)(b, {})), (n[2] = g)) : (g = n[2]);
  let _;
  n[3] === h
    ? (_ = n[4])
    : ((_ = (0, K.jsx)(t, { color: `ghostActive`, size: `entityHeader`, "aria-label": h, children: g })),
      (n[3] = h),
      (n[4] = _));
  let v;
  n[5] !== r || n[6] !== u
    ? ((v = () => {
        ce(u, J, { accountId: u.get(se), params: r });
      }),
      (n[5] = r),
      (n[6] = u),
      (n[7] = v))
    : (v = n[7]);
  let y;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, K.jsx)(s, {
        id: `chatgpt.localBusiness.report.action`,
        defaultMessage: `Report`,
        description: `Short menu action in a local place details sidebar that opens the form for reporting concerns about that business or place.`,
      })),
      (n[8] = y))
    : (y = n[8]);
  let x;
  n[9] === v
    ? (x = n[10])
    : ((x = (0, K.jsx)(d.Item, { onSelect: v, children: y })), (n[9] = v), (n[10] = x));
  let S;
  n[11] !== m || n[12] !== o || n[13] !== r.libraryOrigin
    ? ((S = (0, K.jsx)(Fe, { origin: r.libraryOrigin, isCurrent: m, onNavigate: o })),
      (n[11] = m),
      (n[12] = o),
      (n[13] = r.libraryOrigin),
      (n[14] = S))
    : (S = n[14]);
  let C;
  return (
    n[15] !== l || n[16] !== _ || n[17] !== x || n[18] !== S
      ? ((C = (0, K.jsxs)(i, { side: `bottom`, align: `start`, triggerButton: _, children: [l, x, S] })),
        (n[15] = l),
        (n[16] = _),
        (n[17] = x),
        (n[18] = S),
        (n[19] = C))
      : (C = n[19]),
    C
  );
}
var W, G, K, q, J, Y;
function X() {
  return (X = e(() => {
    ((W = w()),
      ve(),
      S(),
      l(),
      (G = E()),
      y(),
      Ce(),
      C(),
      n(),
      u(),
      te(),
      oe(),
      O(),
      ee(),
      ue(),
      ye(),
      (K = T()),
      x(),
      (q = r(
        async () =>
          (
            await _(
              async () => {
                let { ChatGptLocalBusinessMetadata: e } = await import(`./metadata-e79c46edc6a1.js`);
                return { ChatGptLocalBusinessMetadata: e };
              },
              __vite__mapDeps([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
              ]),
              import.meta.url,
            )
          ).ChatGptLocalBusinessMetadata,
      )),
      (J = r(
        async () =>
          (
            await _(
              async () => {
                let { LocalBusinessReportDialog: e } = await import(`./report-dialog-3ddbd73f3ad1.js`);
                return { LocalBusinessReportDialog: e };
              },
              __vite__mapDeps([39, 2, 1, 3, 5, 6, 40]),
              import.meta.url,
            )
          ).LocalBusinessReportDialog,
      )),
      (Y = r(ge, { suspendToParent: !0, errorFallback: ({ renderMetadata: e }) => e(!1, null) })));
  }))();
}
function Ke(e) {
  let t = (0, Z.c)(24),
    { children: n, conversationId: r, params: i, onOpenLibrary: a, onClose: s } = e,
    c = o(),
    l = ((0, qe.useContext)(Oe) ?? !0) || i.extraParams?.sensitive_values_hidden === !0,
    u = D(je, r),
    d;
  t[0] === i.category ? (d = t[1]) : ((d = de(i.category)), (t[0] = i.category), (t[1] = d));
  let f = d,
    p = i.clientParams?.entitySidebarPresentation,
    m = p?.titlePlacement === `chrome`;
  if (!f && !m && s == null && i.libraryOrigin == null) {
    let e;
    return (
      t[2] === n ? (e = t[3]) : ((e = (0, Q.jsx)(Q.Fragment, { children: n })), (t[2] = n), (t[3] = e)),
      e
    );
  }
  let h = p?.contentOwnedHorizontalInset == null ? `-mx-6` : void 0,
    g;
  t[4] !== m || t[5] !== l || t[6] !== f || t[7] !== i || t[8] !== p?.titlePlacement
    ? ((g =
        f || p?.titlePlacement !== `content`
          ? (0, Q.jsx)(I, { hideSensitiveTitleSuffix: l, params: i, prominent: m })
          : void 0),
      (t[4] = m),
      (t[5] = l),
      (t[6] = f),
      (t[7] = i),
      (t[8] = p?.titlePlacement),
      (t[9] = g))
    : (g = t[9]);
  let _ = p?.leadingBarBorder,
    v;
  t[10] !== f || t[11] !== c || t[12] !== s || t[13] !== a || t[14] !== i
    ? ((v =
        f || i.libraryOrigin != null
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                f
                  ? (0, Q.jsx)(Ve, {
                      conversationId: i.sourceConversationId,
                      messageId: i.messageId,
                      savedTarget: i.savedEntityTarget,
                      place: {
                        ...i.businessPreview,
                        name: i.query,
                        category: i.category,
                        extra_params: i.extraParams,
                      },
                      shouldBlockExternalEgress: i.shouldBlockExternalEgress,
                      surface: `entity_sidebar`,
                      onOpenLibrary: (e) => {
                        (c(
                          me(
                            re({
                              basePath: `/library`,
                              directoryId: e,
                              tab: e == null ? `favorites` : `all`,
                              search: ``,
                              categories: [],
                              sources: [],
                            }),
                            `banner`,
                          ),
                        ),
                          a?.());
                      },
                    })
                  : null,
                f && !i.shouldBlockExternalEgress
                  ? (0, Q.jsx)(We, { params: i, onNavigate: s }, i.libraryOrigin?.message_id)
                  : (0, Q.jsx)(Ie, { origin: i.libraryOrigin, onNavigate: s }, i.libraryOrigin?.message_id),
              ],
            })
          : void 0),
      (t[10] = f),
      (t[11] = c),
      (t[12] = s),
      (t[13] = a),
      (t[14] = i),
      (t[15] = v))
    : (v = t[15]);
  let y;
  return (
    t[16] !== n || t[17] !== u || t[18] !== s || t[19] !== h || t[20] !== g || t[21] !== _ || t[22] !== v
      ? ((y = (0, Q.jsx)(j, {
          className: h,
          title: g,
          overlayContent: u,
          border: _,
          onClose: s,
          autoFocusClose: !0,
          actions: v,
          children: n,
        })),
        (t[16] = n),
        (t[17] = u),
        (t[18] = s),
        (t[19] = h),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v),
        (t[23] = y))
      : (y = t[23]),
    y
  );
}
var Z, qe, Q;
function $() {
  return ($ = e(() => {
    ((Z = w()), l(), (qe = E()), h(), De(), we(), Te(), O(), F(), z(), ne(), Be(), X(), Me(), (Q = T()));
  }))();
}
export { I as a, F as c, H as i, $ as n, z as o, Ue as r, j as s, Ke as t };
//# sourceMappingURL=sidebar-actions-c6ee0c504629.js.map
