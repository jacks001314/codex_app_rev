import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  EPt as n,
  Fat as r,
  IDt as i,
  Ixt as a,
  JMt as o,
  Jbt as s,
  Pat as c,
  Pxt as l,
  TLt as u,
  USt as d,
  VMt as f,
  Vxt as p,
  Xot as m,
  Yot as h,
  cIt as g,
  dft as _,
  gNt as v,
  iot as y,
  jDt as b,
  pLt as x,
  rst as S,
  t3 as C,
  vzt as w,
  xMt as T,
  yzt as E,
  zSt as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as k,
  E4n as A,
  GGn as j,
  GMr as M,
  Iy as N,
  Ly as P,
  O4n as F,
  XMr as I,
  Ymr as L,
  ehr as R,
  gwr as z,
  mMn as B,
  nMn as V,
  oFr as H,
  rMn as U,
  tNr as W,
  uMn as G,
} from "./app-initial-5851df3f6cb1.js";
import { i as K, t as ee } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { n as te, t as ne } from "./library-file-preview-fallback-25fb206369c6.js";
function re(e) {
  let n = (0, q.c)(33),
    { file: r, onClose: a } = e,
    o = p(M),
    s = p(I),
    l;
  n[0] !== o || n[1] !== r.file_id || n[2] !== r.id || n[3] !== s
    ? ((l = [`library-deep-research-preview`, o, s, r.id, r.file_id]),
      (n[0] = o),
      (n[1] = r.file_id),
      (n[2] = r.id),
      (n[3] = s),
      (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] !== o || n[6] !== r.id || n[7] !== s
    ? ((u =
        o != null && s != null
          ? (e) => {
              let { signal: t } = e;
              return L.safeGet(`/files/library/files/{library_file_id}/deep-research`, {
                signal: t,
                expectedIdentity: { accountId: o, userId: s },
                expectedErrorStatuses: [403, 404],
                parameters: { path: { library_file_id: r.id } },
              });
            }
          : d),
      (n[5] = o),
      (n[6] = r.id),
      (n[7] = s),
      (n[8] = u))
    : (u = n[8]);
  let f;
  n[9] !== l || n[10] !== u
    ? ((f = { queryKey: l, queryFn: u, staleTime: c.ONE_MINUTE, retry: !1 }),
      (n[9] = l),
      (n[10] = u),
      (n[11] = f))
    : (f = n[11]);
  let { data: h, isError: g, refetch: _ } = m(f),
    v = o ?? void 0,
    b;
  n[12] === v
    ? (b = n[13])
    : ((b = { accountId: v, hostId: y, connectorId: X, appUri: Z, template: Q }), (n[12] = v), (n[13] = b));
  let { data: x, isError: S, refetch: C } = O(V, b);
  if (g || S || x?.widget.html.trim() === ``) {
    let e;
    n[14] !== _ || n[15] !== C
      ? ((e = () => {
          (_(), C());
        }),
        (n[14] = _),
        (n[15] = C),
        (n[16] = e))
      : (e = n[16]);
    let a;
    n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Y.jsx)(i, {
          id: `libraryDeepResearchPreview.retry`,
          defaultMessage: `Retry preview`,
          description: `Button to retry opening a saved deep research report`,
        })),
        (n[17] = a))
      : (a = n[17]);
    let o;
    n[18] === e
      ? (o = n[19])
      : ((o = (0, Y.jsx)(t, { color: `outline`, onClick: e, children: a })), (n[18] = e), (n[19] = o));
    let s;
    return (
      n[20] !== r || n[21] !== o
        ? ((s = (0, Y.jsx)(ne, { file: r, action: o })), (n[20] = r), (n[21] = o), (n[22] = s))
        : (s = n[22]),
      s
    );
  }
  if (h == null || x == null || o == null || s == null) {
    let e;
    return (
      n[23] === r.file_name
        ? (e = n[24])
        : ((e = (0, Y.jsx)(N, { fileName: r.file_name })), (n[23] = r.file_name), (n[24] = e)),
      e
    );
  }
  let w = `${o}:${s}:${r.id}:${r.file_id}`,
    T;
  return (
    n[25] !== o || n[26] !== r || n[27] !== a || n[28] !== h || n[29] !== x || n[30] !== w || n[31] !== s
      ? ((T = (0, Y.jsx)(ie, { accountId: o, userId: s, file: r, preview: h, resource: x, onClose: a }, w)),
        (n[25] = o),
        (n[26] = r),
        (n[27] = a),
        (n[28] = h),
        (n[29] = x),
        (n[30] = w),
        (n[31] = s),
        (n[32] = T))
      : (T = n[32]),
    T
  );
}
function ie(e) {
  let t = (0, q.c)(44),
    { accountId: n, userId: r, file: i, preview: c, resource: l, onClose: d } = e,
    p = a(z),
    [m] = (0, J.useState)(_),
    [h, v] = (0, J.useState)(c.widget_state),
    b;
  t[0] !== n || t[1] !== l || t[2] !== p || t[3] !== r
    ? ((b = () => {
        if (p.get(M) !== n || p.get(I) !== r || p.get(B, l.resourceIdentity) !== `current`)
          throw A(`The report account changed`, o.InvalidRequest);
      }),
      (t[0] = n),
      (t[1] = l),
      (t[2] = p),
      (t[3] = r),
      (t[4] = b))
    : (b = t[4]);
  let S = b,
    C = `library-report:${i.id}`,
    w;
  t[5] === C ? (w = t[6]) : ((w = s(C)), (t[5] = C), (t[6] = w));
  let T, E;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { appUri: Z, template: Q, chatGptThreadId: null, toolName: `get_state`, toolInput: {} }),
      (E = []),
      (t[7] = T),
      (t[8] = E))
    : ((T = t[7]), (E = t[8]));
  let D;
  t[9] === c.tool_output
    ? (D = t[10])
    : ((D = { ...c.tool_output, is_library_preview: !0, can_delete: !1 }),
      (t[9] = c.tool_output),
      (t[10] = D));
  let O;
  t[11] !== c.tool_response_metadata || t[12] !== D
    ? ((O = { content: E, structuredContent: D, _meta: c.tool_response_metadata }),
      (t[11] = c.tool_response_metadata),
      (t[12] = D),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] === h ? (k = t[15]) : ((k = () => h), (t[14] = h), (t[15] = k));
  let N;
  t[16] === S ? (N = t[17]) : ((N = async (e) => (S(), v(e), { ok: !0 })), (t[16] = S), (t[17] = N));
  let P;
  t[18] !== k || t[19] !== N
    ? ((P = { getState: k, save: N }), (t[18] = k), (t[19] = N), (t[20] = P))
    : (P = t[20]);
  let F;
  t[21] === S
    ? (F = t[22])
    : ((F = (e, t) => {
        (t?.throwIfAborted(), S());
        let { blob: n, name: r } = x({ blob: g(Blob), name: u() }).parse(e);
        j(n, r);
      }),
      (t[21] = S),
      (t[22] = F));
  let R;
  t[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((R = [`tools/call`]), (t[23] = R)) : (R = t[23]);
  let V;
  t[24] !== n || t[25] !== S || t[26] !== i.id || t[27] !== d || t[28] !== r
    ? ((V = async (e, t) => {
        (t?.throwIfAborted(), S());
        let { params: a } = f.parse(e);
        if (a.name === `close_preview`) return (d?.(), { structuredContent: { closed: !0 } });
        if (a.name !== `get_state` && a.name !== `get_inline_images` && a.name !== `export`)
          throw A(`Unsupported saved report tool`, o.MethodNotFound);
        let s = await L.safePost(`/files/library/files/{library_file_id}/deep-research/tools/{tool_name}`, {
          signal: t,
          expectedIdentity: { accountId: n, userId: r },
          expectedErrorStatuses: [403, 404],
          parameters: { path: { library_file_id: i.id, tool_name: a.name } },
          requestBody: { args: a.arguments ?? {} },
        });
        return (
          S(),
          { content: [], isError: s.isError, structuredContent: s.structuredContent ?? void 0, _meta: s.meta }
        );
      }),
      (t[24] = n),
      (t[25] = S),
      (t[26] = i.id),
      (t[27] = d),
      (t[28] = r),
      (t[29] = V))
    : (V = t[29]);
  let H;
  t[30] !== S || t[31] !== d || t[32] !== F || t[33] !== V
    ? ((H = {
        assertActive: S,
        displayMode: `fullscreen`,
        onRequestClose: d,
        downloadBlob: F,
        forwardedRequestMethods: R,
        handleRequest: V,
      }),
      (t[30] = S),
      (t[31] = d),
      (t[32] = F),
      (t[33] = V),
      (t[34] = H))
    : (H = t[34]);
  let U;
  t[35] !== l || t[36] !== P || t[37] !== H || t[38] !== O
    ? ((U = { ...l, request: T, toolResult: O, widgetStatePersistence: P, mcpAppHostAdapter: H }),
      (t[35] = l),
      (t[36] = P),
      (t[37] = H),
      (t[38] = O),
      (t[39] = U))
    : (U = t[39]);
  let W;
  return (
    t[40] !== m || t[41] !== U || t[42] !== w
      ? ((W = (0, Y.jsx)(ee, {
          conversationId: w,
          hostId: y,
          mcpAppId: m,
          lifetime: `component`,
          inDialog: !0,
          showDialogTitle: !1,
          fullSurface: !0,
          result: U,
        })),
        (t[40] = m),
        (t[41] = U),
        (t[42] = w),
        (t[43] = W))
      : (W = t[43]),
    W
  );
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = w()),
      v(),
      D(),
      h(),
      l(),
      S(),
      (J = E()),
      b(),
      n(),
      G(),
      W(),
      K(),
      U(),
      R(),
      C(),
      F(),
      k(),
      H(),
      r(),
      te(),
      P(),
      (Y = T()),
      (X = `connector_openai_deep_research`),
      (Z = `connectors://${X}`),
      (Q = `internal://deep-research`));
  }))();
}
$();
export { re as LibraryDeepResearchPreview };
//# sourceMappingURL=library-deep-research-preview-2e5089716d78.js.map
