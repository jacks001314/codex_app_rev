import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Ct as t,
  A3t as n,
  B6t as r,
  Drn as i,
  Eln as ee,
  GJt as te,
  H$ as ne,
  HJt as a,
  JCt as re,
  N3t as ie,
  O3t as o,
  P$ as ae,
  PJt as s,
  Qit as oe,
  Rpn as se,
  U$ as c,
  U3t as l,
  W$ as ce,
  XCt as le,
  XJt as u,
  ZCt as ue,
  Zit as d,
  a1 as f,
  a3t as de,
  aYt as p,
  awt as fe,
  brn as pe,
  dwt as me,
  ewt as he,
  gRt as ge,
  hmn as m,
  j$ as h,
  kmn as g,
  krn as _,
  lF as _e,
  mwt as v,
  nln as y,
  o1 as ve,
  o3t as b,
  owt as ye,
  pRt as x,
  rrn as S,
  rwt as be,
  s1 as xe,
  sYt as Se,
  snn as Ce,
  twt as we,
  uF as Te,
  w7t as Ee,
  xRt as C,
  yRt as De,
  zpn as w,
} from "./app-initial-f094ef01c64d.js";
import { Ay as Oe, Dy as ke, My as T, Oy as Ae, ky as je } from "./app-primary-4c40d73a1074.js";
var E,
  Me,
  Ne,
  Pe,
  D = e(() => {
    (u(), S(), (E = pe()), (Me = i(_(), E)), (Ne = s.shape.params), (Pe = a.shape.params));
  });
function O({ threadId: e, view: t }) {
  return JSON.stringify([
    t.hostId,
    t.resourceUri,
    t.server,
    e,
    t.tool.name,
    le({ server: t.server, tool: t.tool }),
  ]);
}
function k({ hostToolCallMetadata: e, threadId: t, toolArguments: n, view: r }) {
  return JSON.stringify([r.hostId, r.resourceUri, r.server, t, r.tool.name, e, n]);
}
var Fe,
  Ie,
  Le = e(() => {
    (o(),
      he(),
      b(),
      c(),
      (Fe = l(
        de,
        ({ threadId: e, view: t }, { scope: n }) => {
          let r = le({ server: t.server, tool: t.tool });
          return {
            queryKey: [
              `mcp-extension-view-resource`,
              t.hostId,
              t.resourceUri,
              t.server,
              e,
              t.tool.name,
              r,
            ],
            queryFn: () => ce(n, t.hostId, t.server, t.resourceUri, e, void 0, r),
            enabled: !we(t.server) || r != null,
            staleTime: 0,
          };
        },
        { key: O },
      )),
      (Ie = l(
        de,
        ({ hostToolCallMetadata: e, toolArguments: t, threadId: n, view: r }, { scope: i }) => ({
          queryKey: [`mcp-extension-view-tool-result`, r.hostId, r.server, n, r.tool.name, e, t],
          queryFn: async () =>
            ne(i, r.hostId, r.server, r.tool.name, t, { hostToolCallMetadata: e, threadId: n }),
          refetchOnMount: !0,
          staleTime: 0,
        }),
        { key: k },
      )));
  });
function A(e) {
  let r = (0, Re.c)(120),
    {
      className: i,
      customTitleBar: a,
      hostToolCallMetadata: o,
      hostToolResultMetadata: s,
      instanceId: c,
      deepLink: l,
      readHostResource: u,
      resolveHostResourceSubscriptionPath: d,
      sourceThreadId: f,
      writeHostResource: p,
      toolArguments: pe,
      useHostThread: he,
      view: m,
    } = e,
    h = pe === void 0 ? ze : pe,
    g = n(de),
    _ = n(ge),
    v = _.value.routeKind === `local-thread` || _.value.routeKind === `remote-thread`,
    y;
  r[0] !== v || r[1] !== _.value
    ? ((y = v ? De(_.value) : null), (r[0] = v), (r[1] = _.value), (r[2] = y))
    : (y = r[2]);
  let b = f ?? y,
    x = he ? void 0 : (b ?? void 0),
    S;
  r[3] !== x || r[4] !== m
    ? ((S = { threadId: x, view: m }), (r[3] = x), (r[4] = m), (r[5] = S))
    : (S = r[5]);
  let { data: Te, error: C, isLoading: w } = ie(Fe, S),
    T;
  r[6] === o
    ? (T = r[7])
    : ((T = o == null ? {} : { hostToolCallMetadata: o }), (r[6] = o), (r[7] = T));
  let E;
  r[8] !== x || r[9] !== T || r[10] !== h || r[11] !== m
    ? ((E = { ...T, threadId: x, toolArguments: h, view: m }),
      (r[8] = x),
      (r[9] = T),
      (r[10] = h),
      (r[11] = m),
      (r[12] = E))
    : (E = r[12]);
  let { data: D, error: O, isLoading: k } = ie(Ie, E),
    Le = ye(Te),
    A;
  r[13] !== s || r[14] !== D
    ? ((A = D == null || s == null ? D : { ...D, _meta: { ...D._meta, ...s } }),
      (r[13] = s),
      (r[14] = D),
      (r[15] = A))
    : (A = r[15]);
  let Ve = A;
  Se(`2957382457`);
  let M = fe({
      hasResourceError: C != null,
      isDilEnabled: !1,
      isResourceLoading: w,
      renderData: Le,
      resourceUri: m.resourceUri,
      shouldRenderMcpApp: !0,
    }),
    N = M.kind === `html` ? M.renderData : null,
    He;
  r[16] !== m.server || r[17] !== m.tool
    ? ((He = le({ server: m.server, tool: m.tool })),
      (r[16] = m.server),
      (r[17] = m.tool),
      (r[18] = He))
    : (He = r[18]);
  let P = He,
    F;
  r[19] === c ? (F = r[20]) : ((F = c == null ? [] : [c]), (r[19] = c), (r[20] = F));
  let Ue;
  r[21] !== F || r[22] !== m.hostId || r[23] !== m.server || r[24] !== m.tool.name
    ? ((Ue = [`openai-mcp-extension`, m.hostId, m.server, m.tool.name, ...F]),
      (r[21] = F),
      (r[22] = m.hostId),
      (r[23] = m.server),
      (r[24] = m.tool.name),
      (r[25] = Ue))
    : (Ue = r[25]);
  let We = Ue.join(`:`),
    Ge;
  r[26] === We ? (Ge = r[27]) : ((Ge = Ee(We)), (r[26] = We), (r[27] = Ge));
  let I = Ge,
    Ke = b ?? I,
    L;
  r[28] === Ke ? (L = r[29]) : ((L = Ce(Ke)), (r[28] = Ke), (r[29] = L));
  let R = L,
    z;
  r[30] !== R ||
  r[31] !== o ||
  r[32] !== P ||
  r[33] !== I ||
  r[34] !== u ||
  r[35] !== x ||
  r[36] !== g ||
  r[37] !== m.hostId ||
  r[38] !== m.resourceUri ||
  r[39] !== m.server ||
  r[40] !== m.serverTools ||
  r[41] !== m.toolScope ||
  r[42] !== p
    ? ((z = async (e) => {
        let n = te.parse(e);
        switch (n.method) {
          case `tools/call`: {
            let e = Ne.parse(n.params),
              t = be({
                toolScope:
                  m.toolScope ?? (P == null ? null : { kind: `connector`, connectorId: P }),
                server: m.server,
                toolName: e.name,
                toolArguments: e.arguments,
                tools: m.serverTools,
              }),
              r = await ne(g, m.hostId, m.server, t.name, Me.parse(e.arguments ?? {}), {
                hostToolCallMetadata:
                  m.toolScope != null && t.codexAppsResourceUri != null
                    ? { _codex_apps: { resource_uri: t.codexAppsResourceUri } }
                    : o,
                requestOptions: { widget: { conversationId: R, mcpAppId: I } },
                threadId: x,
              });
            return me({ isCodexAppsServer: we(m.server), toolResult: r });
          }
          case `resources/read`: {
            let e = Pe.parse(n.params),
              t = await u?.(e);
            return t == null
              ? (re({
                  mcpAppScope: { originResourceUri: m.resourceUri },
                  server: m.server,
                  uri: e.uri,
                }),
                ce(
                  g,
                  m.hostId,
                  m.server,
                  e.uri,
                  x,
                  { widget: { conversationId: R, mcpAppId: I } },
                  P,
                ))
              : { contents: [{ ...t, uri: e.uri }] };
          }
          case ve: {
            let e = xe.parse(n.params),
              t = await p?.(e);
            if (t == null) throw Error(`Resource is not writable.`);
            return t;
          }
          case `tools/list`:
            return { tools: t({ connectorId: P, server: m.server, tools: m.serverTools }) };
          case `resources/list`:
            return { resources: [] };
          case `resources/templates/list`:
            return { resourceTemplates: [] };
          case `prompts/list`:
            return { prompts: [] };
          default:
            throw Error(`Unsupported OpenAI MCP extension request: ${n.method}`);
        }
      }),
      (r[30] = R),
      (r[31] = o),
      (r[32] = P),
      (r[33] = I),
      (r[34] = u),
      (r[35] = x),
      (r[36] = g),
      (r[37] = m.hostId),
      (r[38] = m.resourceUri),
      (r[39] = m.server),
      (r[40] = m.serverTools),
      (r[41] = m.toolScope),
      (r[42] = p),
      (r[43] = z))
    : (z = r[43]);
  let qe = oe(z),
    B;
  r[44] !== _.value || r[45] !== f
    ? ((B = f == null && De(_.value) == null), (r[44] = _.value), (r[45] = f), (r[46] = B))
    : (B = r[46]);
  let Je = u == null ? void 0 : ae,
    Ye = p == null ? void 0 : Be,
    V;
  r[47] !== qe || r[48] !== B || r[49] !== Je || r[50] !== Ye
    ? ((V = {
        prefillNewChat: B,
        experimentalCapabilities$: Je,
        forwardedRequestMethods: Ye,
        handleRequest: qe,
      }),
      (r[47] = qe),
      (r[48] = B),
      (r[49] = Je),
      (r[50] = Ye),
      (r[51] = V))
    : (V = r[51]);
  let Xe = V,
    H;
  r[52] !== P || r[53] !== I || r[54] !== m.server
    ? ((H = ue({ connectorId: P, instanceFallbackId: I, server: m.server })),
      (r[52] = P),
      (r[53] = I),
      (r[54] = m.server),
      (r[55] = H))
    : (H = r[55]);
  let Ze = H,
    U = N?.html ?? null,
    W = a != null && (a.hasTitleBar || U?.includes(`data-openai-titlebar`) === !0),
    G;
  r[56] === I
    ? (G = r[57])
    : ((G = (0, j.jsx)(je, { isInlineExpanded: !0, mcpAppId: I })), (r[56] = I), (r[57] = G));
  let Qe = N?.csp ?? null,
    $e = C ?? O,
    et = W || a?.isPending === !0,
    tt = w || k,
    K;
  r[58] !== m.resourceUri || r[59] !== m.tool.name
    ? ((K = { originResourceUri: m.resourceUri, originTool: m.tool.name }),
      (r[58] = m.resourceUri),
      (r[59] = m.tool.name),
      (r[60] = K))
    : (K = r[60]);
  let nt = N?.prefersBorder ?? !1,
    rt = a == null ? void 0 : 46,
    it = Ve ?? null,
    at = N?.widgetDomain ?? null,
    q;
  r[61] !== R ||
  r[62] !== l ||
  r[63] !== v ||
  r[64] !== U ||
  r[65] !== Xe ||
  r[66] !== I ||
  r[67] !== d ||
  r[68] !== Ze ||
  r[69] !== Qe ||
  r[70] !== $e ||
  r[71] !== et ||
  r[72] !== tt ||
  r[73] !== K ||
  r[74] !== nt ||
  r[75] !== rt ||
  r[76] !== it ||
  r[77] !== at ||
  r[78] !== h ||
  r[79] !== m.hostId ||
  r[80] !== m.pluginId ||
  r[81] !== m.server ||
  r[82] !== m.title
    ? ((q = (0, j.jsx)(Ae, {
        conversationId: R,
        csp: Qe,
        error: $e,
        fullSurface: !0,
        hasCustomTitleBar: et,
        hostId: m.hostId,
        hostedInThreadScrollLayout: v,
        html: U,
        isLoading: tt,
        mcpAppId: I,
        mcpAppScope: K,
        modelContextComposerTitle: m.title,
        mcpServerStatuses: void 0,
        pluginId: m.pluginId,
        deepLink: l,
        prefersBorder: nt,
        mcpAppHostAdapter: Xe,
        titleBarHeight: rt,
        resolveResourceWatchPath: d,
        sandboxOriginScope: Ze,
        server: m.server,
        sidePanelIcon: null,
        sidePanelTitle: m.title,
        title: m.title,
        toolArguments: h,
        toolResult: it,
        widgetDomain: at,
      })),
      (r[61] = R),
      (r[62] = l),
      (r[63] = v),
      (r[64] = U),
      (r[65] = Xe),
      (r[66] = I),
      (r[67] = d),
      (r[68] = Ze),
      (r[69] = Qe),
      (r[70] = $e),
      (r[71] = et),
      (r[72] = tt),
      (r[73] = K),
      (r[74] = nt),
      (r[75] = rt),
      (r[76] = it),
      (r[77] = at),
      (r[78] = h),
      (r[79] = m.hostId),
      (r[80] = m.pluginId),
      (r[81] = m.server),
      (r[82] = m.title),
      (r[83] = q))
    : (q = r[83]);
  let J;
  r[84] !== M ||
  r[85] !== W ||
  r[86] !== U ||
  r[87] !== N?.heightHint ||
  r[88] !== N?.minFrameHeight ||
  r[89] !== k ||
  r[90] !== w ||
  r[91] !== I ||
  r[92] !== O ||
  r[93] !== C
    ? ((J = (0, j.jsx)(Oe, {
        borderless: W,
        error: C ?? O,
        fullSurface: !0,
        heightHint: N?.heightHint ?? null,
        html: U,
        isLoading: w || k,
        mcpAppId: I,
        minFrameHeight: N?.minFrameHeight ?? null,
      })),
      (r[84] = M),
      (r[85] = W),
      (r[86] = U),
      (r[87] = N?.heightHint),
      (r[88] = N?.minFrameHeight),
      (r[89] = k),
      (r[90] = w),
      (r[91] = I),
      (r[92] = O),
      (r[93] = C),
      (r[94] = J))
    : (J = r[94]);
  let Y;
  r[95] !== v || r[96] !== I
    ? ((Y = v ? null : (0, j.jsx)(ke, { mcpAppId: I })), (r[95] = v), (r[96] = I), (r[97] = Y))
    : (Y = r[97]);
  let ot;
  r[98] !== G || r[99] !== q || r[100] !== J || r[101] !== Y
    ? ((ot = (0, j.jsxs)(j.Fragment, { children: [G, q, J, Y] })),
      (r[98] = G),
      (r[99] = q),
      (r[100] = J),
      (r[101] = Y),
      (r[102] = ot))
    : (ot = r[102]);
  let X = ot;
  if (a == null) {
    let e;
    r[103] === i
      ? (e = r[104])
      : ((e = se(`relative h-full min-h-0`, i)), (r[103] = i), (r[104] = e));
    let t;
    return (
      r[105] !== X || r[106] !== e
        ? ((t = (0, j.jsx)(`div`, {
            "data-mcp-app-portal-target": `true`,
            className: e,
            children: X,
          })),
          (r[105] = X),
          (r[106] = e),
          (r[107] = t))
        : (t = r[107]),
      t
    );
  }
  let Z;
  r[108] === i
    ? (Z = r[109])
    : ((Z = se(`relative h-full min-h-0`, i)), (r[108] = i), (r[109] = Z));
  let Q;
  r[110] !== a || r[111] !== W
    ? ((Q = W ? { clipPath: a.windowControlsClipPath } : {}),
      (r[110] = a),
      (r[111] = W),
      (r[112] = Q))
    : (Q = r[112]);
  let st = W || a.isPending ? `custom-titlebar` : `default`,
    $;
  r[113] === st
    ? ($ = r[114])
    : (($ = (0, j.jsx)(_e.MainContentLayout, { layout: st })), (r[113] = st), (r[114] = $));
  let ct;
  return (
    r[115] !== X || r[116] !== Z || r[117] !== Q || r[118] !== $
      ? ((ct = (0, j.jsxs)(ee.div, {
          "data-mcp-app-portal-target": `true`,
          className: Z,
          style: Q,
          children: [$, X],
        })),
        (r[115] = X),
        (r[116] = Z),
        (r[117] = Q),
        (r[118] = $),
        (r[119] = ct))
      : (ct = r[119]),
    ct
  );
}
var Re,
  j,
  ze,
  Be,
  Ve = e(() => {
    ((Re = g()),
      u(),
      f(),
      w(),
      y(),
      o(),
      r(),
      Te(),
      T(),
      v(),
      he(),
      b(),
      C(),
      p(),
      x(),
      d(),
      c(),
      D(),
      h(),
      Le(),
      (j = m()),
      (ze = {}),
      (Be = [ve]));
  });
export { Ve as n, A as t };
//# sourceMappingURL=mcp-extension-view-frame-71a0f1e67dc5.js.map
