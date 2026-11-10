import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AH as n,
  Cpn as r,
  D6t as i,
  IWt as a,
  L1t as o,
  LWt as s,
  M6t as c,
  Mft as l,
  N6t as u,
  O3t as d,
  O6t as f,
  Opn as ee,
  QXt as p,
  R1t as m,
  Spn as h,
  aYt as g,
  bj as te,
  e0t as _,
  eZt as v,
  fk as ne,
  gMt as y,
  gRt as b,
  hMt as x,
  hmn as S,
  jft as C,
  kH as w,
  kmn as T,
  pk as E,
  sYt as re,
  xRt as D,
  xj as O,
} from "./app-initial-f094ef01c64d.js";
import { Nh as k, Ph as A, nw as j, rw as M } from "./app-primary-4c40d73a1074.js";
import { n as N, t as ie } from "./artifact-file-preview-icon-70a3fde11749.js";
import { i as P, r as F, t as ae } from "./local-conversation-webmcp-tools-model-40d1a7153ca0.js";
import { n as I, t as L } from "./mcp-tool-item-content-5427b9fecd85.js";
import { n as R, t as z } from "./tool-activity-disclosure-6103c5aa72b1.js";
import { n as oe, t as B } from "./is-available-f419fd226def.js";
import {
  a as se,
  i as V,
  n as H,
  o as U,
  r as W,
  t as G,
} from "./use-local-conversation-sources-733990c21ff1.js";
function K(e) {
  let t = (0, J.c)(6),
    { calls: n } = e,
    r,
    i;
  if (t[0] !== n) {
    let e = F(n);
    ((r = `flex flex-col gap-1`), (i = e.map(ce)), (t[0] = n), (t[1] = r), (t[2] = i));
  } else ((r = t[1]), (i = t[2]));
  let a;
  return (
    t[3] !== r || t[4] !== i
      ? ((a = (0, Y.jsx)(`ul`, { className: r, children: i })), (t[3] = r), (t[4] = i), (t[5] = a))
      : (a = t[5]),
    a
  );
}
function ce(e) {
  let t = e.calls.filter(le);
  return (0, Y.jsx)(
    `li`,
    {
      children: (0, Y.jsx)(z, {
        icon: null,
        indentContent: !1,
        status: `completed`,
        summary: (0, Y.jsx)(`span`, {
          className: `text-sm leading-5 text-secondary`,
          children: (0, Y.jsx)(r, {
            id: `codex.localConversation.sources.panel.toolUseCount`,
            defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
            description: `Completed tool activity label and number of uses of a source`,
            values: { count: e.calls.length, name: e.name },
          }),
        }),
        children:
          t.length === 0
            ? null
            : (0, Y.jsx)(`ul`, {
                className: `flex flex-col gap-2`,
                children: t.map((t, n) =>
                  (0, Y.jsxs)(
                    `li`,
                    {
                      className: `flex min-w-0 flex-col gap-2`,
                      children: [
                        t.kind !== `invokeTool` || t.inputJson == null
                          ? null
                          : (0, Y.jsx)(w, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: q(t.inputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: t.inputTruncated
                                ? (0, Y.jsx)(r, {
                                    id: `codex.localConversation.webMcpTools.inputTruncated`,
                                    defaultMessage: `Input (truncated)`,
                                    description: `Title for truncated WebMCP tool input JSON`,
                                  })
                                : (0, Y.jsx)(r, {
                                    id: `codex.localConversation.webMcpTools.input`,
                                    defaultMessage: `Input`,
                                    description: `Title for WebMCP tool input JSON`,
                                  }),
                            }),
                        t.outputJson == null
                          ? null
                          : (0, Y.jsx)(w, {
                              codeContainerClassName: `max-h-48 overflow-auto`,
                              content: q(t.outputJson),
                              language: `json`,
                              showStickyRightContent: !1,
                              title: t.outputTruncated
                                ? (0, Y.jsx)(r, {
                                    id: `codex.localConversation.webMcpTools.resultTruncated`,
                                    defaultMessage: `Result (truncated)`,
                                    description: `Title for truncated WebMCP tool result JSON`,
                                  })
                                : (0, Y.jsx)(r, {
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
function le(e) {
  return (e.kind === `invokeTool` && e.inputJson != null) || e.outputJson != null;
}
function q(e) {
  try {
    return JSON.stringify(JSON.parse(e), null, 2);
  } catch {
    return e;
  }
}
var J,
  Y,
  ue = e(() => {
    ((J = T()), h(), n(), R(), P(), (Y = S()));
  });
function de(e) {
  let t = (0, Q.c)(8),
    {
      conversationId: n,
      getImagePreviewSrc: r,
      hostId: i,
      onOpenFile: a,
      onOpenImage: o,
      onOpenMcpApp: s,
    } = e,
    c = H(n, i),
    l;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== c
      ? ((l = (0, $.jsx)(fe, {
          ...c,
          conversationId: n,
          getImagePreviewSrc: r,
          hostId: i,
          onOpenFile: a,
          onOpenImage: o,
          onOpenMcpApp: s,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function fe(e) {
  let n = (0, Q.c)(55),
    {
      conversationId: s,
      externalSources: c,
      fileSources: l,
      getImagePreviewSrc: d,
      hostId: f,
      onOpenFile: p,
      onOpenImage: h,
      onOpenMcpApp: g,
      toolSources: _,
      webMcpCalls: y,
      webSearchSource: x,
    } = e,
    S = t(b),
    C = ee(),
    w = re(`1256703444`),
    T;
  n[0] === w ? (T = n[1]) : ((T = oe(w)), (n[0] = w), (n[1] = T));
  let E = T,
    D;
  n[2] === C
    ? (D = n[3])
    : ((D = C.formatMessage({
        id: `codex.localConversation.sources.panel.listLabel`,
        defaultMessage: `Sources`,
        description: `Accessible label for the complete source list side panel`,
      })),
      (n[2] = C),
      (n[3] = D));
  let O = D,
    A,
    j,
    M,
    N,
    P,
    F;
  if (
    n[4] !== c ||
    n[5] !== l ||
    n[6] !== d ||
    n[7] !== p ||
    n[8] !== h ||
    n[9] !== O ||
    n[10] !== E ||
    n[11] !== y
  ) {
    if (((F = new Map()), E))
      for (let e of y) {
        if (e.sourceHostname == null) continue;
        let t = F.get(e.sourceHostname);
        t == null ? F.set(e.sourceHostname, [e]) : t.push(e);
      }
    if (
      ((j = k.SourcesSidePanel),
      (A = k.SourcesSidePanelList),
      (M = O),
      n[18] !== l || n[19] !== d || n[20] !== p || n[21] !== h)
    ) {
      let e;
      (n[23] !== d || n[24] !== p || n[25] !== h
        ? ((e = (e) => {
            let t = e.fsPath || e.path || e.label,
              n = d?.(t) ?? null,
              i;
            return (
              n != null && h != null ? (i = () => h(e, n)) : p != null && (i = () => p(e)),
              (0, $.jsx)(
                k.SourceDetails,
                {
                  icon: (0, $.jsx)(ie, {
                    getImagePreviewSrc: d,
                    iconClassName: `icon-sm`,
                    imageClassName: `size-[18px] rounded-[3px] border border-default`,
                    path: t,
                  }),
                  label: e.label,
                  meta: t,
                  onOpen: i,
                  children: (0, $.jsx)(r, {
                    id: `codex.localConversation.sources.panel.fileAttached`,
                    defaultMessage: `Attached to the conversation`,
                    description: `Explanation of how a file source was used`,
                  }),
                },
                a(e),
              )
            );
          }),
          (n[23] = d),
          (n[24] = p),
          (n[25] = h),
          (n[26] = e))
        : (e = n[26]),
        (N = l.map(e)),
        (n[18] = l),
        (n[19] = d),
        (n[20] = p),
        (n[21] = h),
        (n[22] = N));
    } else N = n[22];
    ((P = c.map((e) => {
      let t = ae(e.url),
        n = t == null || e.title !== t ? [] : (F.get(t) ?? []);
      t != null && e.title === t && F.delete(t);
      let r;
      return (
        e.activities.includes(`provided`) ||
          (r = e.provider == null ? e.url : `${e.provider.name} · ${e.url}`),
        (0, $.jsxs)(
          k.SourceDetails,
          {
            icon: (0, $.jsx)(W, { resource: e }),
            label: e.title,
            meta: r,
            onOpen: (t) => {
              u({ event: t, href: e.url, initiator: e.openInitiator });
            },
            children: [
              (0, $.jsx)(`ul`, {
                className: `flex flex-col gap-1`,
                children: e.activities.map(he),
              }),
              n.length === 0 ? null : (0, $.jsx)(K, { calls: n }),
            ],
          },
          e.key,
        )
      );
    })),
      (n[4] = c),
      (n[5] = l),
      (n[6] = d),
      (n[7] = p),
      (n[8] = h),
      (n[9] = O),
      (n[10] = E),
      (n[11] = y),
      (n[12] = A),
      (n[13] = j),
      (n[14] = M),
      (n[15] = N),
      (n[16] = P),
      (n[17] = F));
  } else ((A = n[12]), (j = n[13]), (M = n[14]), (N = n[15]), (P = n[16]), (F = n[17]));
  let I;
  n[27] === F ? (I = n[28]) : ((I = Array.from(F, me)), (n[27] = F), (n[28] = I));
  let L;
  if (n[29] !== s || n[30] !== f || n[31] !== g || n[32] !== S || n[33] !== _) {
    let e;
    (n[35] !== s || n[36] !== f || n[37] !== g || n[38] !== S
      ? ((e = (e) => {
          let t = _e(e),
            n = e.mcpAppId;
          return (0, $.jsx)(
            k.SourceDetails,
            {
              icon: (0, $.jsx)(ne, {
                alt: ``,
                className: `icon-sm shrink-0 object-contain`,
                fallback: (0, $.jsx)(te, { className: `icon-sm shrink-0` }),
                knownAppId: se(e),
                logoDarkUrl: e.logoUrlDark,
                logoUrl: e.logoUrl,
              }),
              label: t,
              onOpen: n == null || g == null ? void 0 : () => g(n),
              children: (0, $.jsx)(`ul`, {
                className: `flex flex-col gap-1`,
                children: e.activities.flatMap((t) => {
                  if (t.calls.length === 0) return [];
                  let n = (0, $.jsx)(`span`, {
                      className: `text-sm leading-5 text-secondary`,
                      children: (0, $.jsx)(r, {
                        id: `codex.localConversation.sources.panel.toolUseCount`,
                        defaultMessage: `{name} {count, plural, one {once} other {# times}}`,
                        description: `Completed tool activity label and number of uses of a source`,
                        values: { count: t.calls.length, name: t.label },
                      }),
                    }),
                    i = () => {
                      v(S, o, {
                        sectionType: m.CODEX_SOURCES_SECTION_TYPE_MCP_TOOL_CALLS,
                        appName: e.trustedAnalyticsAppName,
                        itemCount: t.calls.length,
                      });
                    };
                  return t.calls.length === 1
                    ? t.calls.map((e) =>
                        (0, $.jsx)(
                          `li`,
                          {
                            children: (0, $.jsx)(Z, {
                              conversationId: s,
                              hostId: f,
                              item: e,
                              onExpand: i,
                              summary: n,
                            }),
                          },
                          e.callId,
                        ),
                      )
                    : [
                        (0, $.jsx)(
                          `li`,
                          {
                            children: (0, $.jsx)(z, {
                              icon: null,
                              indentContent: !1,
                              onExpand: i,
                              status: `completed`,
                              summary: n,
                              children: (0, $.jsx)(`ul`, {
                                className: `flex flex-col gap-1`,
                                children: t.calls.map((e) =>
                                  (0, $.jsx)(
                                    `li`,
                                    {
                                      children: (0, $.jsx)(Z, {
                                        conversationId: s,
                                        expandedContentOnly: !0,
                                        hostId: f,
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
        (n[35] = s),
        (n[36] = f),
        (n[37] = g),
        (n[38] = S),
        (n[39] = e))
      : (e = n[39]),
      (L = _.map(e)),
      (n[29] = s),
      (n[30] = f),
      (n[31] = g),
      (n[32] = S),
      (n[33] = _),
      (n[34] = L));
  } else L = n[34];
  let R;
  n[40] !== C || n[41] !== S || n[42] !== x
    ? ((R =
        x == null
          ? null
          : (0, $.jsx)(k.SourceDetails, {
              icon: (0, $.jsx)(i, { "aria-hidden": !0, className: `icon-sm shrink-0` }),
              label: C.formatMessage({
                id: `codex.localConversation.sources.webSearch`,
                defaultMessage: `Web search`,
                description: `Label for web search in the thread summary side panel sources section`,
              }),
              children: (0, $.jsxs)(`ul`, {
                className: `flex flex-col gap-1`,
                children: [
                  x.queryCount > 0
                    ? (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(z, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            v(S, o, {
                              sectionType: m.CODEX_SOURCES_SECTION_TYPE_WEB_SEARCHES,
                              itemCount: x.queryCount,
                            });
                          },
                          status: `completed`,
                          summary: (0, $.jsx)(r, {
                            id: `codex.localConversation.sources.panel.webSearchCount`,
                            defaultMessage: `{count, plural, one {Searched once} other {Searched # times}}`,
                            description: `Summary of how many web search queries were sent`,
                            values: { count: x.queryCount },
                          }),
                          children:
                            x.queries.length === 0
                              ? null
                              : (0, $.jsx)(`ul`, {
                                  className: `flex flex-col gap-1`,
                                  children: x.queries.map(X),
                                }),
                        }),
                      })
                    : null,
                  x.viewedLinks.length > 0
                    ? (0, $.jsx)(`li`, {
                        children: (0, $.jsx)(z, {
                          icon: null,
                          indentContent: !1,
                          onExpand: () => {
                            v(S, o, {
                              sectionType: m.CODEX_SOURCES_SECTION_TYPE_WEB_PAGES,
                              itemCount: x.viewedLinks.length,
                            });
                          },
                          status: `completed`,
                          summary: (0, $.jsx)(r, {
                            id: `codex.localConversation.sources.panel.webPageCount`,
                            defaultMessage: `{count, plural, one {Opened one page} other {Opened # pages}}`,
                            description: `Summary of how many web pages were opened`,
                            values: { count: x.viewedLinks.length },
                          }),
                          children: (0, $.jsx)(`ul`, {
                            className: `flex flex-col gap-1.5`,
                            children: x.viewedLinks.map(pe),
                          }),
                        }),
                      })
                    : null,
                ],
              }),
            })),
      (n[40] = C),
      (n[41] = S),
      (n[42] = x),
      (n[43] = R))
    : (R = n[43]);
  let B;
  n[44] !== A ||
  n[45] !== M ||
  n[46] !== N ||
  n[47] !== P ||
  n[48] !== I ||
  n[49] !== L ||
  n[50] !== R
    ? ((B = (0, $.jsxs)(A, { label: M, children: [N, P, I, L, R] })),
      (n[44] = A),
      (n[45] = M),
      (n[46] = N),
      (n[47] = P),
      (n[48] = I),
      (n[49] = L),
      (n[50] = R),
      (n[51] = B))
    : (B = n[51]);
  let V;
  return (
    n[52] !== j || n[53] !== B
      ? ((V = (0, $.jsx)(j, { children: B })), (n[52] = j), (n[53] = B), (n[54] = V))
      : (V = n[54]),
    V
  );
}
function pe(e) {
  return (0, $.jsx)(
    `li`,
    {
      children: (0, $.jsxs)(`button`, {
        className: `flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm text-start text-info hover:underline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
        title: e.url,
        type: `button`,
        onClick: (t) => {
          u({ event: t, href: e.url, initiator: `browser_use`, source: `browser_use` });
        },
        children: [
          (0, $.jsx)(x, { className: `shrink-0`, asset: l }),
          (0, $.jsx)(`span`, { className: `truncate`, children: e.label }),
        ],
      }),
    },
    e.url,
  );
}
function X(e) {
  return (0, $.jsx)(`li`, { className: `break-words`, children: e }, e);
}
function me(e) {
  let [t, n] = e;
  return (0, $.jsx)(
    k.SourceDetails,
    {
      icon: (0, $.jsx)(j, { className: `icon-sm shrink-0`, href: `https://${t}` }),
      label: t,
      children: (0, $.jsx)(K, { calls: n }),
    },
    t,
  );
}
function he(e) {
  return (0, $.jsx)(`li`, { children: (0, $.jsx)(ge, { activity: e }) }, e);
}
function Z(e) {
  let t = (0, Q.c)(7),
    { conversationId: n, expandedContentOnly: r, hostId: i, item: a, onExpand: o, summary: s } = e,
    c = r !== void 0 && r,
    l;
  return (
    t[0] !== n || t[1] !== c || t[2] !== i || t[3] !== a || t[4] !== o || t[5] !== s
      ? ((l = (0, $.jsx)(L, {
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
function ge(e) {
  let t = (0, Q.c)(4),
    { activity: n } = e;
  switch (n) {
    case `provided`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(r, {
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
          ? ((e = (0, $.jsx)(r, {
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
          ? ((e = (0, $.jsx)(r, {
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
          ? ((e = (0, $.jsx)(r, {
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
function _e(e) {
  return e.name.trim() || e.pluginDisplayNames.join(`, `);
}
var Q, $;
e(() => {
  ((Q = T()),
    _(),
    C(),
    d(),
    h(),
    N(),
    B(),
    s(),
    E(),
    c(),
    M(),
    y(),
    O(),
    f(),
    I(),
    R(),
    p(),
    D(),
    g(),
    V(),
    U(),
    ue(),
    P(),
    A(),
    G(),
    ($ = S()));
})();
export { de as LocalConversationSourcesSidePanelTab };
//# sourceMappingURL=local-conversation-sources-side-panel-tab-5249bb6f5cea.js.map
