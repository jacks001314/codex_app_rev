import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./compiler-runtime-292acb85cdd3.js";
import {
  $Rt as r,
  $Tt as i,
  AJt as a,
  Ann as ee,
  C6t as o,
  F2 as te,
  KJt as ne,
  N2 as re,
  O6t as ie,
  P2 as s,
  Q2 as ae,
  QTt as oe,
  RJt as c,
  T6t as se,
  X2 as l,
  XTt as ce,
  YTt as le,
  Z2 as ue,
  aEt as de,
  cYt as u,
  e6t as fe,
  eEt as pe,
  hB as d,
  iEt as me,
  izt as he,
  mB as ge,
  nEt as _e,
  nnn as f,
  nzt as ve,
  pEt as p,
  qTt as ye,
  t6t as m,
  uEt as be,
  uYt as xe,
} from "./app-initial-bcc2ff475eb6.js";
import { t as h } from "./jsx-runtime-a96621a2647a.js";
import { t as Se } from "./react-dom-2c70d35283e7.js";
import { n as g, t as Ce } from "./clsx-40813b86294f.js";
import {
  Fw as we,
  Iw as Te,
  Kw as Ee,
  Lw as De,
  Pw as Oe,
  QE as ke,
  XE as _,
  ZE as Ae,
  qw as v,
  zw as y,
} from "./app-primary-b36a719dba75.js";
import { A as b, M as x, t as S, x as C } from "./zod-d9fcb1c39dba.js";
import { Qu as je, sa as Me, t as w } from "./src-996ff3571e1f.js";
import { n as Ne, t as Pe } from "./use-stable-callback-7bbcdf1a60e8.js";
import { i as T } from "./focus-area-c8737f3d903f.js";
var E,
  Fe,
  Ie,
  Le,
  Re = e(() => {
    (ne(), S(), (E = C()), (Fe = b(x(), E)), (Ie = a.shape.params), (Le = c.shape.params));
  });
function ze(e) {
  let t = (0, Be.c)(131),
    {
      className: n,
      autoFocus: i,
      contentContainer: a,
      customTitleBar: o,
      fullSurface: ne,
      hostToolCallMetadata: s,
      hostToolResultMetadata: c,
      instanceId: l,
      mcpAppId: u,
      onRequestClose: d,
      deepLink: he,
      readHostResource: f,
      resolveHostResourceSubscriptionPath: p,
      sourceThreadId: m,
      writeHostResource: h,
      toolArguments: Se,
      toolResult: g,
      useHostThread: Ee,
      view: _,
    } = e,
    y = ne === void 0 || ne,
    b = Se === void 0 ? He : Se,
    x = se(fe),
    S = se(r),
    C = S.value.routeKind === `local-thread` || S.value.routeKind === `remote-thread`,
    w;
  t[0] !== C || t[1] !== S.value
    ? ((w = C ? ve(S.value) : null), (t[0] = C), (t[1] = S.value), (t[2] = w))
    : (w = t[2]);
  let Pe = m ?? w,
    T = Ee ? void 0 : (Pe ?? void 0),
    E;
  t[3] !== T || t[4] !== _
    ? ((E = { threadId: T, view: _ }), (t[3] = T), (t[4] = _), (t[5] = E))
    : (E = t[5]);
  let { data: Re, error: ze, isLoading: O } = ie(Ae, E),
    k = Re == null ? ze : null,
    A;
  t[6] === s
    ? (A = t[7])
    : ((A = s == null ? {} : { hostToolCallMetadata: s }), (t[6] = s), (t[7] = A));
  let Ge;
  t[8] !== T || t[9] !== A || t[10] !== b || t[11] !== _
    ? ((Ge = { ...A, threadId: T, toolArguments: b, view: _ }),
      (t[8] = T),
      (t[9] = A),
      (t[10] = b),
      (t[11] = _),
      (t[12] = Ge))
    : (Ge = t[12]);
  let Ke = g === void 0,
    qe;
  t[13] === Ke ? (qe = t[14]) : ((qe = { enabled: Ke }), (t[13] = Ke), (t[14] = qe));
  let { data: Je, error: Ye } = ie(ke, Ge, qe),
    j = g === void 0 ? Ye : null,
    Xe = g === void 0 ? Je : g,
    Ze = de(Re),
    Qe;
  bb0: {
    let e;
    t[15] !== Xe || t[16] !== j
      ? ((e =
          j == null
            ? Xe
            : {
                isError: !0,
                content: [{ type: `text`, text: j.message }],
                structuredContent: { error: j.message },
              }),
        (t[15] = Xe),
        (t[16] = j),
        (t[17] = e))
      : (e = t[17]);
    let n = e;
    if (n == null || c == null) {
      Qe = n;
      break bb0;
    }
    let r;
    t[18] !== c || t[19] !== n._meta
      ? ((r = { ...n._meta, ...c }), (t[18] = c), (t[19] = n._meta), (t[20] = r))
      : (r = t[20]);
    let i;
    (t[21] !== n || t[22] !== r
      ? ((i = { ...n, _meta: r }), (t[21] = n), (t[22] = r), (t[23] = i))
      : (i = t[23]),
      (Qe = i));
  }
  let $e = Qe;
  xe(`2957382457`);
  let et = me({
      hasResourceError: k != null,
      isDilEnabled: !1,
      isResourceLoading: O,
      renderData: Ze,
      resourceUri: _.resourceUri,
      shouldRenderMcpApp: !0,
    }),
    M = et.kind === `html` ? et.renderData : null,
    tt;
  t[24] !== _.server || t[25] !== _.tool
    ? ((tt = le({ server: _.server, tool: _.tool })),
      (t[24] = _.server),
      (t[25] = _.tool),
      (t[26] = tt))
    : (tt = t[26]);
  let N = tt,
    P;
  t[27] !== l || t[28] !== u || t[29] !== _.hostId || t[30] !== _.server || t[31] !== _.tool.name
    ? ((P =
        u ??
        Me(
          [`openai-mcp-extension`, _.hostId, _.server, _.tool.name, ...(l == null ? [] : [l])].join(
            `:`,
          ),
        )),
      (t[27] = l),
      (t[28] = u),
      (t[29] = _.hostId),
      (t[30] = _.server),
      (t[31] = _.tool.name),
      (t[32] = P))
    : (P = t[32]);
  let F = P,
    nt = Pe ?? F,
    I;
  t[33] === nt ? (I = t[34]) : ((I = je(nt)), (t[33] = nt), (t[34] = I));
  let L = I,
    R;
  t[35] !== L ||
  t[36] !== s ||
  t[37] !== N ||
  t[38] !== F ||
  t[39] !== f ||
  t[40] !== T ||
  t[41] !== x ||
  t[42] !== _.hostId ||
  t[43] !== _.resourceUri ||
  t[44] !== _.server ||
  t[45] !== _.serverTools ||
  t[46] !== _.toolScope ||
  t[47] !== h
    ? ((R = async (e) => {
        switch (e.method) {
          case `tools/call`: {
            let t = v(Ie, e.params, `Invalid MCP tool call params`),
              n = _e({
                toolScope:
                  _.toolScope ?? (N == null ? null : { kind: `connector`, connectorId: N }),
                server: _.server,
                toolName: t.name,
                toolArguments: t.arguments,
                tools: _.serverTools,
              }),
              r = await re(
                x,
                _.hostId,
                _.server,
                n.name,
                v(Fe, t.arguments ?? {}, `Invalid MCP tool arguments`),
                {
                  hostToolCallMetadata:
                    _.toolScope != null && n.codexAppsResourceUri != null
                      ? { _codex_apps: { resource_uri: n.codexAppsResourceUri } }
                      : s,
                  requestOptions: { widget: { conversationId: L, mcpAppId: F } },
                  threadId: T,
                },
              );
            return be({ isCodexAppsServer: pe(_.server), toolResult: r });
          }
          case `resources/read`: {
            let t = v(Le, e.params, `Invalid MCP resource read params`),
              n = await f?.(t);
            return n == null
              ? (ye({
                  mcpAppScope: { originResourceUri: _.resourceUri },
                  server: _.server,
                  uri: t.uri,
                }),
                te(
                  x,
                  _.hostId,
                  _.server,
                  t.uri,
                  T,
                  { widget: { conversationId: L, mcpAppId: F } },
                  N,
                ))
              : { contents: [{ ...n, uri: t.uri }] };
          }
          case ue: {
            let t = v(ae, e.params, `Invalid MCP resource write params`),
              n = await h?.(t);
            if (n == null) throw Error(`Resource is not writable.`);
            return n;
          }
          case `tools/list`:
            return { tools: oe({ connectorId: N, server: _.server, tools: _.serverTools }) };
          case `resources/list`:
            return { resources: [] };
          case `resources/templates/list`:
            return { resourceTemplates: [] };
          case `prompts/list`:
            return { prompts: [] };
          default:
            throw Error(`Unsupported OpenAI MCP extension request: ${e.method}`);
        }
      }),
      (t[35] = L),
      (t[36] = s),
      (t[37] = N),
      (t[38] = F),
      (t[39] = f),
      (t[40] = T),
      (t[41] = x),
      (t[42] = _.hostId),
      (t[43] = _.resourceUri),
      (t[44] = _.server),
      (t[45] = _.serverTools),
      (t[46] = _.toolScope),
      (t[47] = h),
      (t[48] = R))
    : (R = t[48]);
  let rt = Ne(R),
    z;
  t[49] !== S.value || t[50] !== m
    ? ((z = m == null && ve(S.value) == null), (t[49] = S.value), (t[50] = m), (t[51] = z))
    : (z = t[51]);
  let it = f == null ? void 0 : Ue,
    at = h == null ? void 0 : We,
    B;
  t[52] !== i || t[53] !== rt || t[54] !== d || t[55] !== z || t[56] !== it || t[57] !== at
    ? ((B = {
        autoFocus: i,
        onRequestClose: d,
        prefillNewChat: z,
        experimentalCapabilities: it,
        forwardedRequestMethods: at,
        handleRequest: rt,
      }),
      (t[52] = i),
      (t[53] = rt),
      (t[54] = d),
      (t[55] = z),
      (t[56] = it),
      (t[57] = at),
      (t[58] = B))
    : (B = t[58]);
  let ot = B,
    V;
  t[59] !== N || t[60] !== F || t[61] !== _.server
    ? ((V = ce({ connectorId: N, instanceFallbackId: F, server: _.server })),
      (t[59] = N),
      (t[60] = F),
      (t[61] = _.server),
      (t[62] = V))
    : (V = t[62]);
  let st = V,
    H = M?.html ?? null,
    U = o != null && (o.hasTitleBar || H?.includes(`data-openai-titlebar`) === !0),
    ct = M?.heightHint ?? null,
    lt = M?.minFrameHeight ?? null,
    W;
  t[63] !== y ||
  t[64] !== U ||
  t[65] !== H ||
  t[66] !== O ||
  t[67] !== F ||
  t[68] !== ct ||
  t[69] !== lt ||
  t[70] !== k
    ? ((W = (0, D.jsx)(De, {
        borderless: U,
        error: k,
        fullSurface: y,
        heightHint: ct,
        html: H,
        isLoading: O,
        mcpAppId: F,
        minFrameHeight: lt,
      })),
      (t[63] = y),
      (t[64] = U),
      (t[65] = H),
      (t[66] = O),
      (t[67] = F),
      (t[68] = ct),
      (t[69] = lt),
      (t[70] = k),
      (t[71] = W))
    : (W = t[71]);
  let ut = W,
    G;
  t[72] === F
    ? (G = t[73])
    : ((G = (0, D.jsx)(Te, { isInlineRequested: !0, mcpAppId: F })), (t[72] = F), (t[73] = G));
  let dt = M?.csp ?? null,
    ft = U || o?.isPending === !0,
    pt = M?.requiresInitialization,
    K;
  t[74] !== _.resourceUri || t[75] !== _.tool.name
    ? ((K = { originResourceUri: _.resourceUri, originTool: _.tool.name }),
      (t[74] = _.resourceUri),
      (t[75] = _.tool.name),
      (t[76] = K))
    : (K = t[76]);
  let mt = M?.prefersBorder ?? !1,
    ht = o == null ? void 0 : 46,
    gt = $e ?? null,
    _t = M?.widgetDomain ?? null,
    q;
  t[77] !== L ||
  t[78] !== he ||
  t[79] !== y ||
  t[80] !== C ||
  t[81] !== H ||
  t[82] !== O ||
  t[83] !== ot ||
  t[84] !== F ||
  t[85] !== p ||
  t[86] !== st ||
  t[87] !== dt ||
  t[88] !== ft ||
  t[89] !== pt ||
  t[90] !== K ||
  t[91] !== mt ||
  t[92] !== ht ||
  t[93] !== gt ||
  t[94] !== _t ||
  t[95] !== b ||
  t[96] !== _.hostId ||
  t[97] !== _.pluginId ||
  t[98] !== _.server ||
  t[99] !== _.title ||
  t[100] !== k
    ? ((q = (0, D.jsx)(we, {
        conversationId: L,
        csp: dt,
        error: k,
        fullSurface: y,
        hasCustomTitleBar: ft,
        hostId: _.hostId,
        hostedInThreadScrollLayout: C,
        requiresInitialization: pt,
        html: H,
        isLoading: O,
        mcpAppId: F,
        mcpAppScope: K,
        modelContextComposerTitle: _.title,
        mcpServerStatuses: void 0,
        pluginId: _.pluginId,
        deepLink: he,
        prefersBorder: mt,
        mcpAppHostAdapter: ot,
        titleBarHeight: ht,
        resolveResourceWatchPath: p,
        sandboxOriginScope: st,
        server: _.server,
        sidePanelIcon: null,
        sidePanelTitle: _.title,
        title: _.title,
        toolArguments: b,
        toolResult: gt,
        widgetDomain: _t,
      })),
      (t[77] = L),
      (t[78] = he),
      (t[79] = y),
      (t[80] = C),
      (t[81] = H),
      (t[82] = O),
      (t[83] = ot),
      (t[84] = F),
      (t[85] = p),
      (t[86] = st),
      (t[87] = dt),
      (t[88] = ft),
      (t[89] = pt),
      (t[90] = K),
      (t[91] = mt),
      (t[92] = ht),
      (t[93] = gt),
      (t[94] = _t),
      (t[95] = b),
      (t[96] = _.hostId),
      (t[97] = _.pluginId),
      (t[98] = _.server),
      (t[99] = _.title),
      (t[100] = k),
      (t[101] = q))
    : (q = t[101]);
  let J;
  t[102] !== a || t[103] !== et || t[104] !== ut
    ? ((J = a == null ? ut : (0, Ve.createPortal)(ut, a)),
      (t[102] = a),
      (t[103] = et),
      (t[104] = ut),
      (t[105] = J))
    : (J = t[105]);
  let Y;
  t[106] !== C || t[107] !== F
    ? ((Y = C ? null : (0, D.jsx)(Oe, { mcpAppId: F })), (t[106] = C), (t[107] = F), (t[108] = Y))
    : (Y = t[108]);
  let vt;
  t[109] !== G || t[110] !== q || t[111] !== J || t[112] !== Y
    ? ((vt = (0, D.jsxs)(D.Fragment, { children: [G, q, J, Y] })),
      (t[109] = G),
      (t[110] = q),
      (t[111] = J),
      (t[112] = Y),
      (t[113] = vt))
    : (vt = t[113]);
  let X = vt;
  if (o == null) {
    let e;
    t[114] === n
      ? (e = t[115])
      : ((e = Ce(`relative h-full min-h-0`, n)), (t[114] = n), (t[115] = e));
    let r;
    return (
      t[116] !== X || t[117] !== e
        ? ((r = (0, D.jsx)(`div`, {
            "data-mcp-app-portal-target": `true`,
            className: e,
            children: X,
          })),
          (t[116] = X),
          (t[117] = e),
          (t[118] = r))
        : (r = t[118]),
      r
    );
  }
  let Z;
  t[119] === n
    ? (Z = t[120])
    : ((Z = Ce(`relative h-full min-h-0`, n)), (t[119] = n), (t[120] = Z));
  let Q;
  t[121] !== o || t[122] !== U
    ? ((Q = U ? { clipPath: o.windowControlsClipPath } : {}),
      (t[121] = o),
      (t[122] = U),
      (t[123] = Q))
    : (Q = t[123]);
  let yt = U || o.isPending ? `custom-titlebar` : `default`,
    $;
  t[124] === yt
    ? ($ = t[125])
    : (($ = (0, D.jsx)(ge.MainContentLayout, { layout: yt })), (t[124] = yt), (t[125] = $));
  let bt;
  return (
    t[126] !== X || t[127] !== Z || t[128] !== Q || t[129] !== $
      ? ((bt = (0, D.jsxs)(ee.div, {
          "data-mcp-app-portal-target": `true`,
          className: Z,
          style: Q,
          children: [$, X],
        })),
        (t[126] = X),
        (t[127] = Z),
        (t[128] = Q),
        (t[129] = $),
        (t[130] = bt))
      : (bt = t[130]),
    bt
  );
}
var Be,
  Ve,
  D,
  He,
  Ue,
  We,
  O = e(() => {
    ((Be = n()),
      l(),
      g(),
      f(),
      o(),
      w(),
      (Ve = t(Se(), 1)),
      d(),
      y(),
      p(),
      i(),
      Ee(),
      m(),
      he(),
      u(),
      T(),
      Pe(),
      s(),
      Re(),
      _(),
      (D = h()),
      (He = {}),
      (Ue = { "openai/resource": {} }),
      (We = [ue]));
  });
export { O as n, ze as t };
//# sourceMappingURL=mcp-extension-view-frame-672ca3de66f6.js.map
