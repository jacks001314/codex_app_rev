import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  DB as n,
  Fb as r,
  G$ as i,
  K$ as a,
  LNt as o,
  OB as s,
  PBt as c,
  Pb as l,
  Rrt as u,
  Sj as d,
  XOt as f,
  ZSt as p,
  art as m,
  iCt as ee,
  okt as te,
  ort as h,
  tkt as g,
  xj as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  EI as _,
  Fin as re,
  Iin as v,
  M6t as y,
  MOr as ie,
  MTr as b,
  N6t as x,
  NI as S,
  PI as C,
  SI as w,
  SRn as T,
  TI as E,
  bRn as D,
  dw as O,
  fw as ae,
  xI as oe,
  xMr as k,
  yMr as A,
  zOr as j,
} from "./app-initial-ad16eaadf81f.js";
import { n as M, t as N } from "./thread-summary-panel-components-10c7926d4688.js";
import { i as P, r as F, t as se } from "./local-conversation-webmcp-tools-model-dcbfecb89837.js";
import { n as I, t as L } from "./mcp-tool-item-content-ebb3be978329.js";
import { a as ce, i as R, n as z, r as B } from "./use-local-conversation-sources-cbe6d4d0f86c.js";
import { n as V, t as H } from "./source-provider-disclosure-97423eacd922.js";
import { i as U, r as W } from "./mcp-tool-call-approval-b94fbe680732.js";
function G(e) {
  let t = (0, q.c)(6),
    { calls: n } = e,
    r,
    i;
  if (t[0] !== n) {
    let e = F(n);
    ((r = `flex flex-col gap-1`), (i = e.map(le)), (t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  let a;
  return (
    t[3] !== r || t[4] !== i
      ? ((a = (0, J.jsx)(`ul`, { className: r, children: i })), (t[3] = r), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function le(e) {
  let t = e.calls.filter(ue);
  return (0, J.jsx)(
    `li`,
    {
      children: (0, J.jsx)(W, {
        icon: null,
        indentContent: !1,
        status: `completed`,
        summary: (0, J.jsx)(`span`, {
          className: `text-sm leading-5 text-secondary`,
          children: (0, J.jsx)(g, {
            id: `codex.localConversation.sources.panel.toolUseCount`,
            defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
            description: `Completed tool activity label and number of uses of a source`,
            values: { count: e.calls.length, name: e.name },
          }),
        }),
        children:
          t.length === 0
            ? null
            : (0, J.jsx)(`ul`, {
                className: `flex flex-col gap-2`,
                children: t.map((t, n) =>
                  (0, J.jsxs)(
                    `li`,
                    {
                      className: `flex min-w-0 flex-col gap-2`,
                      children: [
                        t.kind !== `invokeTool` || t.inputJson == null
                          ? null
                          : (0, J.jsx)(l, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: K(t.inputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: t.inputTruncated
                                ? (0, J.jsx)(g, {
                                    id: `codex.localConversation.webMcpTools.inputTruncated`,
                                    defaultMessage: `Input (truncated)`,
                                    description: `Title for truncated WebMCP tool input JSON`,
                                  })
                                : (0, J.jsx)(g, {
                                    id: `codex.localConversation.webMcpTools.input`,
                                    defaultMessage: `Input`,
                                    description: `Title for WebMCP tool input JSON`,
                                  }),
                            }),
                        t.outputJson == null
                          ? null
                          : (0, J.jsx)(l, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: K(t.outputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: t.outputTruncated
                                ? (0, J.jsx)(g, {
                                    id: `codex.localConversation.webMcpTools.resultTruncated`,
                                    defaultMessage: `Result (truncated)`,
                                    description: `Title for truncated WebMCP tool result JSON`,
                                  })
                                : (0, J.jsx)(g, {
                                    id: `codex.localConversation.webMcpTools.result`,
                                    defaultMessage: `Result`,
                                    description: `Title for WebMCP tool result JSON`,
                                  }),
                            }),
                      ],
                    },
                    `${e.name}:${n}`,
                  ),
                ),
              }),
      }),
    },
    e.name,
  );
}
function ue(e) {
  return (e.kind === `invokeTool` && e.inputJson != null) || e.outputJson != null;
}
function K(e) {
  try {
    return JSON.stringify(JSON.parse(e), null, 2);
  } catch {
    return e;
  }
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = c()), f(), r(), U(), P(), (J = o()));
  }))();
}
function de(e) {
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
      ? ((e = (0, Q.jsx)(fe, {
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
function fe(e) {
  let n = (0, Z.c)(54),
    {
      conversationId: r,
      externalSources: i,
      fileSources: a,
      getImagePreviewSrc: o,
      hostId: s,
      onOpenFile: c,
      onOpenImage: l,
      onOpenMcpApp: u,
      toolSources: d,
      webMcpCalls: f,
      webSearchSource: p,
    } = e,
    _ = t(ie),
    v = te(),
    x = ee(ae),
    C;
  n[0] === v
    ? (C = n[1])
    : ((C = v.formatMessage({
        id: `codex.localConversation.sources.panel.listLabel`,
        defaultMessage: `Sources`,
        description: `Accessible label for the complete source list side panel`,
      })),
      (n[0] = v),
      (n[1] = C));
  let w = C,
    T,
    E,
    D,
    O,
    A,
    j;
  if (
    n[2] !== i ||
    n[3] !== a ||
    n[4] !== o ||
    n[5] !== s ||
    n[6] !== c ||
    n[7] !== l ||
    n[8] !== w ||
    n[9] !== x ||
    n[10] !== f
  ) {
    if (((j = new Map()), x))
      for (let e of f) {
        if (e.sourceHostname == null) continue;
        let t = j.get(e.sourceHostname);
        t == null ? j.set(e.sourceHostname, [e]) : t.push(e);
      }
    if (
      ((E = N.SourcesSidePanel),
      (T = N.SourcesSidePanelList),
      (D = w),
      n[17] !== a || n[18] !== o || n[19] !== c || n[20] !== l)
    ) {
      let e;
      (n[22] !== o || n[23] !== c || n[24] !== l
        ? ((e = (e) => {
            let t = e.fsPath || e.path || e.label,
              n = o?.(t) ?? null,
              r;
            return (
              n != null && l != null ? (r = () => l(e, n)) : c != null && (r = () => c(e)),
              (0, Q.jsx)(
                N.SourceDetails,
                {
                  icon: (0, Q.jsx)(S, {
                    getImagePreviewSrc: o,
                    iconClassName: `icon-sm`,
                    imageClassName: `size-[18px] rounded-[3px] border border-default`,
                    path: t,
                  }),
                  label: e.label,
                  meta: t,
                  onOpen: r,
                  children: (0, Q.jsx)(g, {
                    id: `codex.localConversation.sources.panel.fileAttached`,
                    defaultMessage: `Attached to the conversation`,
                    description: `Explanation of how a file source was used`,
                  }),
                },
                b(e),
              )
            );
          }),
          (n[22] = o),
          (n[23] = c),
          (n[24] = l),
          (n[25] = e))
        : (e = n[25]),
        (O = a.map(e)),
        (n[17] = a),
        (n[18] = o),
        (n[19] = c),
        (n[20] = l),
        (n[21] = O));
    } else O = n[21];
    ((A = i.map((e) => {
      let t = se(e.url),
        n = t == null || e.title !== t ? [] : (j.get(t) ?? []);
      t != null && e.title === t && j.delete(t);
      let r;
      return (
        e.activities.includes(`provided`) ||
          (r = e.provider == null ? e.url : `${e.provider.name} · ${e.url}`),
        (0, Q.jsxs)(
          R,
          {
            hostId: s,
            meta: r,
            presentation: `side-panel`,
            resource: e,
            children: [
              (0, Q.jsx)(`ul`, { className: `flex flex-col gap-1`, children: e.activities.map(ge) }),
              n.length === 0 ? null : (0, Q.jsx)(G, { calls: n }),
            ],
          },
          e.key,
        )
      );
    })),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l),
      (n[8] = w),
      (n[9] = x),
      (n[10] = f),
      (n[11] = T),
      (n[12] = E),
      (n[13] = D),
      (n[14] = O),
      (n[15] = A),
      (n[16] = j));
  } else ((T = n[11]), (E = n[12]), (D = n[13]), (O = n[14]), (A = n[15]), (j = n[16]));
  let M;
  n[26] === j ? (M = n[27]) : ((M = Array.from(j, he)), (n[26] = j), (n[27] = M));
  let P;
  if (n[28] !== r || n[29] !== s || n[30] !== u || n[31] !== _ || n[32] !== d) {
    let e;
    (n[34] !== r || n[35] !== s || n[36] !== u || n[37] !== _
      ? ((e = (e) => {
          let t = ve(e),
            n = e.mcpAppId;
          return (0, Q.jsx)(
            N.SourceDetails,
            {
              icon: (0, Q.jsx)(y, {
                alt: ``,
                className: `icon-sm shrink-0 object-contain`,
                fallback: (0, Q.jsx)(re, { className: `icon-sm shrink-0` }),
                knownAppId: e.providerId == null ? oe(e) : void 0,
                logoDarkUrl: e.logoUrlDark,
                logoUrl: e.logoUrl,
              }),
              label: t,
              meta: e.delayMinutes == null ? void 0 : (0, Q.jsx)(H, { minutes: e.delayMinutes }),
              onOpen: n == null || u == null ? void 0 : () => u(n),
              children: (0, Q.jsx)(`ul`, {
                className: `flex flex-col gap-1`,
                children: e.activities.flatMap((t) => {
                  if (t.calls.length === 0) return [];
                  let n = (0, Q.jsx)(`span`, {
                      className: `text-sm leading-5 text-secondary`,
                      children: (0, Q.jsx)(g, {
                        id: `codex.localConversation.sources.panel.toolUseCount`,
                        defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
                        description: `Completed tool activity label and number of uses of a source`,
                        values: { count: t.calls.length, name: t.label },
                      }),
                    }),
                    i = () => {
                      k(_, m, {
                        sectionType: h.CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS,
                        appName: e.trustedAnalyticsAppName,
                        itemCount: t.calls.length,
                      });
                    };
                  return t.calls.length === 1
                    ? t.calls.map((e) =>
                        (0, Q.jsx)(
                          `li`,
                          {
                            children: (0, Q.jsx)(X, {
                              conversationId: r,
                              hostId: s,
                              item: e,
                              onExpand: i,
                              summary: n,
                            }),
                          },
                          e.callId,
                        ),
                      )
                    : [
                        (0, Q.jsx)(
                          `li`,
                          {
                            children: (0, Q.jsx)(W, {
                              icon: null,
                              indentContent: !1,
                              onExpand: i,
                              status: `completed`,
                              summary: n,
                              children: (0, Q.jsx)(`ul`, {
                                className: `flex flex-col gap-1`,
                                children: t.calls.map((e) =>
                                  (0, Q.jsx)(
                                    `li`,
                                    {
                                      children: (0, Q.jsx)(X, {
                                        conversationId: r,
                                        expandedContentOnly: !0,
                                        hostId: s,
                                        item: e,
                                      }),
                                    },
                                    e.callId,
                                  ),
                                ),
                              }),
                            }),
                          },
                          t.label,
                        ),
                      ];
                }),
              }),
            },
            e.id,
          );
        }),
        (n[34] = r),
        (n[35] = s),
        (n[36] = u),
        (n[37] = _),
        (n[38] = e))
      : (e = n[38]),
      (P = d.map(e)),
      (n[28] = r),
      (n[29] = s),
      (n[30] = u),
      (n[31] = _),
      (n[32] = d),
      (n[33] = P));
  } else P = n[33];
  let F;
  n[39] !== v || n[40] !== _ || n[41] !== p
    ? ((F =
        p == null
          ? null
          : (0, Q.jsx)(N.SourceDetails, {
              icon: (0, Q.jsx)(ne, { "aria-hidden": !0, className: `icon-sm shrink-0` }),
              label: v.formatMessage({
                id: `codex.localConversation.sources.webSearch`,
                defaultMessage: `Web search`,
                description: `Label for web search in the thread summary side panel sources section`,
              }),
              children: (0, Q.jsxs)(`ul`, {
                className: `flex flex-col gap-1`,
                children: [
                  p.queryCount > 0
                    ? (0, Q.jsx)(`li`, {
                        children: (0, Q.jsx)(W, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            k(_, m, {
                              sectionType: h.CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES,
                              itemCount: p.queryCount,
                            });
                          },
                          status: `completed`,
                          summary: (0, Q.jsx)(g, {
                            id: `codex.localConversation.sources.panel.webSearchCount`,
                            defaultMessage: `{count, plural, one {Searched once} other {Searched # times}}`,
                            description: `Summary of how many web search queries were sent`,
                            values: { count: p.queryCount },
                          }),
                          children:
                            p.queries.length === 0
                              ? null
                              : (0, Q.jsx)(`ul`, {
                                  className: `flex flex-col gap-1`,
                                  children: p.queries.map(me),
                                }),
                        }),
                      })
                    : null,
                  p.viewedLinks.length > 0
                    ? (0, Q.jsx)(`li`, {
                        children: (0, Q.jsx)(W, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            k(_, m, {
                              sectionType: h.CODEX_SOURCES_SECTION_TYPE_WEB_PAGES,
                              itemCount: p.viewedLinks.length,
                            });
                          },
                          status: `completed`,
                          summary: (0, Q.jsx)(g, {
                            id: `codex.localConversation.sources.panel.webPageCount`,
                            defaultMessage: `{count, plural, one {Opened one page} other {Opened # pages}}`,
                            description: `Summary of how many web pages were opened`,
                            values: { count: p.viewedLinks.length },
                          }),
                          children: (0, Q.jsx)(`ul`, {
                            className: `flex flex-col gap-1.5`,
                            children: p.viewedLinks.map(pe),
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            })),
      (n[39] = v),
      (n[40] = _),
      (n[41] = p),
      (n[42] = F))
    : (F = n[42]);
  let I;
  n[43] !== T || n[44] !== D || n[45] !== O || n[46] !== A || n[47] !== M || n[48] !== P || n[49] !== F
    ? ((I = (0, Q.jsxs)(T, { label: D, children: [O, A, M, P, F] })),
      (n[43] = T),
      (n[44] = D),
      (n[45] = O),
      (n[46] = A),
      (n[47] = M),
      (n[48] = P),
      (n[49] = F),
      (n[50] = I))
    : (I = n[50]);
  let L;
  return (
    n[51] !== E || n[52] !== I
      ? ((L = (0, Q.jsx)(E, { children: I })), (n[51] = E), (n[52] = I), (n[53] = L))
      : (L = n[53]),
    L
  );
}
function pe(e) {
  return (0, Q.jsx)(
    `li`,
    {
      children: (0, Q.jsxs)(`button`, {
        className: `flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm text-start text-info hover:underline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
        title: e.url,
        type: `button`,
        onClick: (t) => {
          T({ event: t, href: e.url, initiator: `browser_use`, source: `browser_use` });
        },
        children: [
          (0, Q.jsx)(n, { className: `shrink-0`, asset: a }),
          (0, Q.jsx)(`span`, { className: `truncate`, children: e.label }),
        ],
      }),
    },
    e.url,
  );
}
function me(e) {
  return (0, Q.jsx)(`li`, { className: `break-words`, children: e }, e);
}
function he(e) {
  let [t, n] = e;
  return (0, Q.jsx)(
    N.SourceDetails,
    {
      icon: (0, Q.jsx)(E, { className: `icon-sm shrink-0`, href: `https://${t}` }),
      label: t,
      children: (0, Q.jsx)(G, { calls: n }),
    },
    t,
  );
}
function ge(e) {
  return (0, Q.jsx)(`li`, { children: (0, Q.jsx)(_e, { activity: e }) }, e);
}
function X(e) {
  let t = (0, Z.c)(7),
    { conversationId: n, expandedContentOnly: r, hostId: i, item: a, onExpand: o, summary: s } = e,
    c = r !== void 0 && r,
    l;
  return (
    t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((l = (0, Q.jsx)(L, {
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
function _e(e) {
  let t = (0, Z.c)(4),
    { activity: n } = e;
  switch (n) {
    case `provided`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(g, {
              id: `codex.localConversation.sources.panel.activity.provided`,
              defaultMessage: `Provided in the conversation`,
              description: `Source activity label for a resource provided by the user`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `read`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(g, {
              id: `codex.localConversation.sources.panel.activity.read`,
              defaultMessage: `Read during the chat`,
              description: `Source activity label for a resource read during the task`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `created`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(g, {
              id: `codex.localConversation.sources.panel.activity.created`,
              defaultMessage: `Created during the chat`,
              description: `Source activity label for a resource created during the task`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `updated`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(g, {
              id: `codex.localConversation.sources.panel.activity.updated`,
              defaultMessage: `Updated during the chat`,
              description: `Source activity label for a resource updated during the task`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function ve(e) {
  return e.name.trim() || e.pluginDisplayNames.join(`, `);
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = c()),
      u(),
      i(),
      p(),
      f(),
      C(),
      O(),
      x(),
      D(),
      _(),
      s(),
      v(),
      d(),
      I(),
      U(),
      A(),
      j(),
      ce(),
      w(),
      Y(),
      P(),
      V(),
      M(),
      z(),
      (Q = o()));
  }))();
}
$();
export { de as LocalConversationSourcesSidePanelTab };
//# sourceMappingURL=local-conversation-sources-side-panel-tab-3ae42394bf07.js.map
