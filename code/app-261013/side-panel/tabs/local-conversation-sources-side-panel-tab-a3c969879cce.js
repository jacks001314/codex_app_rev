import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  MA as r,
  Mz as i,
  NA as a,
  Nz as o,
  Pxt as s,
  Rnt as c,
  UQ as l,
  VDt as u,
  Vxt as ee,
  WQ as d,
  ant as f,
  jDt as p,
  ob as m,
  ont as h,
  sb as g,
  vzt as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as y,
  HF as b,
  IC as x,
  JPn as S,
  LC as C,
  QDr as w,
  RF as T,
  UF as E,
  XDr as D,
  XF as te,
  XPn as O,
  ZF as k,
  gwr as ne,
  htn as A,
  hzt as j,
  mtn as re,
  mzt as ie,
  uxr as M,
  zF as N,
} from "./app-initial-5851df3f6cb1.js";
import { n as P, t as F } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { i as I, r as L, t as ae } from "./local-conversation-webmcp-tools-model-a5b27ecc68d1.js";
import { n as R, t as z } from "./mcp-tool-item-content-12f3ac06395e.js";
import { a as oe, i as se, n as ce, r as B } from "./use-local-conversation-sources-5dbb8ee22e75.js";
import { i as V, r as H } from "./mcp-tool-call-approval-2041ceff5519.js";
function U(e) {
  let t = (0, K.c)(6),
    { calls: n } = e,
    r,
    i;
  if (t[0] !== n) {
    let e = L(n);
    ((r = `flex flex-col gap-1`), (i = e.map(W)), (t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  let a;
  return (
    t[3] !== r || t[4] !== i
      ? ((a = (0, q.jsx)(`ul`, { className: r, children: i })), (t[3] = r), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function W(e) {
  let n = e.calls.filter(le);
  return (0, q.jsx)(
    `li`,
    {
      children: (0, q.jsx)(H, {
        icon: null,
        indentContent: !1,
        status: `completed`,
        summary: (0, q.jsx)(`span`, {
          className: `text-sm leading-5 text-secondary`,
          children: (0, q.jsx)(t, {
            id: `codex.localConversation.sources.panel.toolUseCount`,
            defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
            description: `Completed tool activity label and number of uses of a source`,
            values: { count: e.calls.length, name: e.name },
          }),
        }),
        children:
          n.length === 0
            ? null
            : (0, q.jsx)(`ul`, {
                className: `flex flex-col gap-2`,
                children: n.map((n, r) =>
                  (0, q.jsxs)(
                    `li`,
                    {
                      className: `flex min-w-0 flex-col gap-2`,
                      children: [
                        n.kind !== `invokeTool` || n.inputJson == null
                          ? null
                          : (0, q.jsx)(m, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: G(n.inputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: n.inputTruncated
                                ? (0, q.jsx)(t, {
                                    id: `codex.localConversation.webMcpTools.inputTruncated`,
                                    defaultMessage: `Input (truncated)`,
                                    description: `Title for truncated WebMCP tool input JSON`,
                                  })
                                : (0, q.jsx)(t, {
                                    id: `codex.localConversation.webMcpTools.input`,
                                    defaultMessage: `Input`,
                                    description: `Title for WebMCP tool input JSON`,
                                  }),
                            }),
                        n.outputJson == null
                          ? null
                          : (0, q.jsx)(m, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: G(n.outputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: n.outputTruncated
                                ? (0, q.jsx)(t, {
                                    id: `codex.localConversation.webMcpTools.resultTruncated`,
                                    defaultMessage: `Result (truncated)`,
                                    description: `Title for truncated WebMCP tool result JSON`,
                                  })
                                : (0, q.jsx)(t, {
                                    id: `codex.localConversation.webMcpTools.result`,
                                    defaultMessage: `Result`,
                                    description: `Title for WebMCP tool result JSON`,
                                  }),
                            }),
                      ],
                    },
                    `${e.name}:${r}`,
                  ),
                ),
              }),
      }),
    },
    e.name,
  );
}
function le(e) {
  return (e.kind === `invokeTool` && e.inputJson != null) || e.outputJson != null;
}
function G(e) {
  try {
    return JSON.stringify(JSON.parse(e), null, 2);
  } catch {
    return e;
  }
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = _()), p(), g(), V(), I(), (q = v()));
  }))();
}
function ue(e) {
  let t = (0, Z.c)(17),
    {
      conversationId: n,
      getImagePreviewSrc: r,
      hostId: i,
      onOpenFile: a,
      onOpenImage: o,
      onOpenMcpApp: s,
      renderSlots: c,
    } = e,
    l = B(n, i),
    u;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== i ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== l
  ) {
    let e;
    (t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== a || t[13] !== o || t[14] !== s || t[15] !== l
      ? ((e = (0, Q.jsx)(de, {
          ...l,
          conversationId: n,
          getImagePreviewSrc: r,
          hostId: i,
          onOpenFile: a,
          onOpenImage: o,
          onOpenMcpApp: s,
        })),
        (t[9] = n),
        (t[10] = r),
        (t[11] = i),
        (t[12] = a),
        (t[13] = o),
        (t[14] = s),
        (t[15] = l),
        (t[16] = e))
      : (e = t[16]),
      (u = c({ headerRows: [], content: e })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else u = t[8];
  return u;
}
function de(e) {
  let i = (0, Z.c)(54),
    {
      conversationId: a,
      externalSources: o,
      fileSources: s,
      getImagePreviewSrc: c,
      hostId: l,
      onOpenFile: d,
      onOpenImage: p,
      onOpenMcpApp: m,
      toolSources: g,
      webMcpCalls: _,
      webSearchSource: v,
    } = e,
    y = n(ne),
    b = u(),
    x = ee(C),
    S;
  i[0] === b
    ? (S = i[1])
    : ((S = b.formatMessage({
        id: `codex.localConversation.sources.panel.listLabel`,
        defaultMessage: `Sources`,
        description: `Accessible label for the complete source list side panel`,
      })),
      (i[0] = b),
      (i[1] = S));
  let E = S,
    D,
    O,
    k,
    A,
    j,
    N;
  if (
    i[2] !== o ||
    i[3] !== s ||
    i[4] !== c ||
    i[5] !== l ||
    i[6] !== d ||
    i[7] !== p ||
    i[8] !== E ||
    i[9] !== x ||
    i[10] !== _
  ) {
    if (((N = new Map()), x))
      for (let e of _) {
        if (e.sourceHostname == null) continue;
        let t = N.get(e.sourceHostname);
        t == null ? N.set(e.sourceHostname, [e]) : t.push(e);
      }
    if (
      ((O = F.SourcesSidePanel),
      (D = F.SourcesSidePanelList),
      (k = E),
      i[17] !== s || i[18] !== c || i[19] !== d || i[20] !== p)
    ) {
      let e;
      (i[22] !== c || i[23] !== d || i[24] !== p
        ? ((e = (e) => {
            let n = e.fsPath || e.path || e.label,
              r = c?.(n) ?? null,
              i;
            return (
              r != null && p != null ? (i = () => p(e, r)) : d != null && (i = () => d(e)),
              (0, Q.jsx)(
                F.SourceDetails,
                {
                  icon: (0, Q.jsx)(te, {
                    getImagePreviewSrc: c,
                    iconClassName: `icon-sm`,
                    imageClassName: `size-[18px] rounded-[3px] border border-default`,
                    path: n,
                  }),
                  label: e.label,
                  meta: n,
                  onOpen: i,
                  children: (0, Q.jsx)(t, {
                    id: `codex.localConversation.sources.panel.fileAttached`,
                    defaultMessage: `Attached to the conversation`,
                    description: `Explanation of how a file source was used`,
                  }),
                },
                M(e),
              )
            );
          }),
          (i[22] = c),
          (i[23] = d),
          (i[24] = p),
          (i[25] = e))
        : (e = i[25]),
        (A = s.map(e)),
        (i[17] = s),
        (i[18] = c),
        (i[19] = d),
        (i[20] = p),
        (i[21] = A));
    } else A = i[21];
    ((j = o.map((e) => {
      let t = ae(e.url),
        n = t == null || e.title !== t ? [] : (N.get(t) ?? []);
      t != null && e.title === t && N.delete(t);
      let r;
      return (
        e.activities.includes(`provided`) ||
          (r = e.provider == null ? e.url : `${e.provider.name} · ${e.url}`),
        (0, Q.jsxs)(
          se,
          {
            hostId: l,
            meta: r,
            presentation: `side-panel`,
            resource: e,
            children: [
              (0, Q.jsx)(`ul`, { className: `flex flex-col gap-1`, children: e.activities.map(me) }),
              n.length === 0 ? null : (0, Q.jsx)(U, { calls: n }),
            ],
          },
          e.key,
        )
      );
    })),
      (i[2] = o),
      (i[3] = s),
      (i[4] = c),
      (i[5] = l),
      (i[6] = d),
      (i[7] = p),
      (i[8] = E),
      (i[9] = x),
      (i[10] = _),
      (i[11] = D),
      (i[12] = O),
      (i[13] = k),
      (i[14] = A),
      (i[15] = j),
      (i[16] = N));
  } else ((D = i[11]), (O = i[12]), (k = i[13]), (A = i[14]), (j = i[15]), (N = i[16]));
  let P;
  i[26] === N ? (P = i[27]) : ((P = Array.from(N, Y)), (i[26] = N), (i[27] = P));
  let I;
  if (i[28] !== a || i[29] !== l || i[30] !== m || i[31] !== y || i[32] !== g) {
    let e;
    (i[34] !== a || i[35] !== l || i[36] !== m || i[37] !== y
      ? ((e = (e) => {
          let n = ge(e),
            r = e.mcpAppId;
          return (0, Q.jsx)(
            F.SourceDetails,
            {
              icon: (0, Q.jsx)(ie, {
                alt: ``,
                className: `icon-sm shrink-0 object-contain`,
                fallback: (0, Q.jsx)(re, { className: `icon-sm shrink-0` }),
                knownAppId: T(e),
                logoDarkUrl: e.logoUrlDark,
                logoUrl: e.logoUrl,
              }),
              label: n,
              onOpen: r == null || m == null ? void 0 : () => m(r),
              children: (0, Q.jsx)(`ul`, {
                className: `flex flex-col gap-1`,
                children: e.activities.flatMap((n) => {
                  if (n.calls.length === 0) return [];
                  let r = (0, Q.jsx)(`span`, {
                      className: `text-sm leading-5 text-secondary`,
                      children: (0, Q.jsx)(t, {
                        id: `codex.localConversation.sources.panel.toolUseCount`,
                        defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
                        description: `Completed tool activity label and number of uses of a source`,
                        values: { count: n.calls.length, name: n.label },
                      }),
                    }),
                    i = () => {
                      w(y, f, {
                        sectionType: h.CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS,
                        appName: e.trustedAnalyticsAppName,
                        itemCount: n.calls.length,
                      });
                    };
                  return n.calls.length === 1
                    ? n.calls.map((e) =>
                        (0, Q.jsx)(
                          `li`,
                          {
                            children: (0, Q.jsx)(X, {
                              conversationId: a,
                              hostId: l,
                              item: e,
                              onExpand: i,
                              summary: r,
                            }),
                          },
                          e.callId,
                        ),
                      )
                    : [
                        (0, Q.jsx)(
                          `li`,
                          {
                            children: (0, Q.jsx)(H, {
                              icon: null,
                              indentContent: !1,
                              onExpand: i,
                              status: `completed`,
                              summary: r,
                              children: (0, Q.jsx)(`ul`, {
                                className: `flex flex-col gap-1`,
                                children: n.calls.map((e) =>
                                  (0, Q.jsx)(
                                    `li`,
                                    {
                                      children: (0, Q.jsx)(X, {
                                        conversationId: a,
                                        expandedContentOnly: !0,
                                        hostId: l,
                                        item: e,
                                      }),
                                    },
                                    e.callId,
                                  ),
                                ),
                              }),
                            }),
                          },
                          n.label,
                        ),
                      ];
                }),
              }),
            },
            e.id,
          );
        }),
        (i[34] = a),
        (i[35] = l),
        (i[36] = m),
        (i[37] = y),
        (i[38] = e))
      : (e = i[38]),
      (I = g.map(e)),
      (i[28] = a),
      (i[29] = l),
      (i[30] = m),
      (i[31] = y),
      (i[32] = g),
      (i[33] = I));
  } else I = i[33];
  let L;
  i[39] !== b || i[40] !== y || i[41] !== v
    ? ((L =
        v == null
          ? null
          : (0, Q.jsx)(F.SourceDetails, {
              icon: (0, Q.jsx)(r, { "aria-hidden": !0, className: `icon-sm shrink-0` }),
              label: b.formatMessage({
                id: `codex.localConversation.sources.webSearch`,
                defaultMessage: `Web search`,
                description: `Label for web search in the thread summary side panel sources section`,
              }),
              children: (0, Q.jsxs)(`ul`, {
                className: `flex flex-col gap-1`,
                children: [
                  v.queryCount > 0
                    ? (0, Q.jsx)(`li`, {
                        children: (0, Q.jsx)(H, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            w(y, f, {
                              sectionType: h.CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES,
                              itemCount: v.queryCount,
                            });
                          },
                          status: `completed`,
                          summary: (0, Q.jsx)(t, {
                            id: `codex.localConversation.sources.panel.webSearchCount`,
                            defaultMessage: `{count, plural, one {Searched once} other {Searched # times}}`,
                            description: `Summary of how many web search queries were sent`,
                            values: { count: v.queryCount },
                          }),
                          children:
                            v.queries.length === 0
                              ? null
                              : (0, Q.jsx)(`ul`, {
                                  className: `flex flex-col gap-1`,
                                  children: v.queries.map(pe),
                                }),
                        }),
                      })
                    : null,
                  v.viewedLinks.length > 0
                    ? (0, Q.jsx)(`li`, {
                        children: (0, Q.jsx)(H, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            w(y, f, {
                              sectionType: h.CODEX_SOURCES_SECTION_TYPE_WEB_PAGES,
                              itemCount: v.viewedLinks.length,
                            });
                          },
                          status: `completed`,
                          summary: (0, Q.jsx)(t, {
                            id: `codex.localConversation.sources.panel.webPageCount`,
                            defaultMessage: `{count, plural, one {Opened one page} other {Opened # pages}}`,
                            description: `Summary of how many web pages were opened`,
                            values: { count: v.viewedLinks.length },
                          }),
                          children: (0, Q.jsx)(`ul`, {
                            className: `flex flex-col gap-1.5`,
                            children: v.viewedLinks.map(fe),
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            })),
      (i[39] = b),
      (i[40] = y),
      (i[41] = v),
      (i[42] = L))
    : (L = i[42]);
  let R;
  i[43] !== D || i[44] !== k || i[45] !== A || i[46] !== j || i[47] !== P || i[48] !== I || i[49] !== L
    ? ((R = (0, Q.jsxs)(D, { label: k, children: [A, j, P, I, L] })),
      (i[43] = D),
      (i[44] = k),
      (i[45] = A),
      (i[46] = j),
      (i[47] = P),
      (i[48] = I),
      (i[49] = L),
      (i[50] = R))
    : (R = i[50]);
  let z;
  return (
    i[51] !== O || i[52] !== R
      ? ((z = (0, Q.jsx)(O, { children: R })), (i[51] = O), (i[52] = R), (i[53] = z))
      : (z = i[53]),
    z
  );
}
function fe(e) {
  return (0, Q.jsx)(
    `li`,
    {
      children: (0, Q.jsxs)(`button`, {
        className: `flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm text-start text-info hover:underline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
        title: e.url,
        type: `button`,
        onClick: (t) => {
          O({ event: t, href: e.url, initiator: `browser_use`, source: `browser_use` });
        },
        children: [
          (0, Q.jsx)(i, { className: `shrink-0`, asset: d }),
          (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
        ],
      }),
    },
    e.url,
  );
}
function pe(e) {
  return (0, Q.jsx)(`li`, { className: `break-words`, children: e }, e);
}
function Y(e) {
  let [t, n] = e;
  return (0, Q.jsx)(
    F.SourceDetails,
    {
      icon: (0, Q.jsx)(b, { className: `icon-sm shrink-0`, href: `https://${t}` }),
      label: t,
      children: (0, Q.jsx)(U, { calls: n }),
    },
    t,
  );
}
function me(e) {
  return (0, Q.jsx)(`li`, { children: (0, Q.jsx)(he, { activity: e }) }, e);
}
function X(e) {
  let t = (0, Z.c)(7),
    { conversationId: n, expandedContentOnly: r, hostId: i, item: a, onExpand: o, summary: s } = e,
    c = r !== void 0 && r,
    l;
  return (
    t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((l = (0, Q.jsx)(z, {
          conversationId: n,
          expandedContentOnly: c,
          hideTextBlocksWithStructuredContent: !0,
          hostId: i,
          item: a,
          loadRemoteLogos: !1,
          onExpand: o,
          renderMcpApps: !1,
          summary: s,
          summaryIcon: null,
        })),
        (t[0] = n),
        (t[1] = c),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = l))
      : (l = t[6]),
    l
  );
}
function he(e) {
  let n = (0, Z.c)(4),
    { activity: r } = e;
  switch (r) {
    case `provided`: {
      let e;
      return (
        n[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(t, {
              id: `codex.localConversation.sources.panel.activity.provided`,
              defaultMessage: `Provided in the conversation`,
              description: `Source activity label for a resource provided by the user`,
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      );
    }
    case `read`: {
      let e;
      return (
        n[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(t, {
              id: `codex.localConversation.sources.panel.activity.read`,
              defaultMessage: `Read during the chat`,
              description: `Source activity label for a resource read during the task`,
            })),
            (n[1] = e))
          : (e = n[1]),
        e
      );
    }
    case `created`: {
      let e;
      return (
        n[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(t, {
              id: `codex.localConversation.sources.panel.activity.created`,
              defaultMessage: `Created during the chat`,
              description: `Source activity label for a resource created during the task`,
            })),
            (n[2] = e))
          : (e = n[2]),
        e
      );
    }
    case `updated`: {
      let e;
      return (
        n[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(t, {
              id: `codex.localConversation.sources.panel.activity.updated`,
              defaultMessage: `Updated during the chat`,
              description: `Source activity label for a resource updated during the task`,
            })),
            (n[3] = e))
          : (e = n[3]),
        e
      );
    }
  }
}
function ge(e) {
  return e.name.trim() || e.pluginDisplayNames.join(`, `);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = _()),
      c(),
      l(),
      s(),
      p(),
      k(),
      x(),
      j(),
      S(),
      E(),
      o(),
      A(),
      a(),
      R(),
      V(),
      D(),
      y(),
      oe(),
      N(),
      J(),
      I(),
      P(),
      ce(),
      (Q = v()));
  }))();
}
$();
export { ue as LocalConversationSourcesSidePanelTab };
//# sourceMappingURL=local-conversation-sources-side-panel-tab-a3c969879cce.js.map
