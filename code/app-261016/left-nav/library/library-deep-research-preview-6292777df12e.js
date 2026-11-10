import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  Bst as n,
  Ept as r,
  FBt as i,
  HFt as a,
  LNt as o,
  MPt as s,
  Mst as c,
  PBt as l,
  VRt as u,
  XOt as d,
  Y3 as f,
  Yst as p,
  Z3 as m,
  ZSt as h,
  cwt as g,
  iCt as _,
  iwt as v,
  jst as y,
  kRt as b,
  nCt as x,
  rPt as S,
  sct as C,
  tkt as w,
  uPt as T,
  uSt as ee,
  wLt as E,
  zst as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as O,
  DFn as k,
  EFn as A,
  KBr as j,
  MOr as M,
  PFn as N,
  RFn as P,
  ab as F,
  c5n as I,
  iRr as L,
  ib as R,
  mYn as z,
  tyr as B,
  u5n as V,
  wLr as H,
  zOr as U,
  zRr as W,
} from "./app-initial-ad16eaadf81f.js";
import { i as G, t as K } from "./chatgpt-ecosystem-widget-f627221f36cd.js";
import { n as te, t as ne } from "./library-file-preview-fallback-b82c61f07dce.js";
function re(e) {
  let t = (0, q.c)(33),
    { file: n, onClose: r } = e,
    i = _(W),
    a = _(O),
    o;
  t[0] !== i || t[1] !== n.file_id || t[2] !== n.id || t[3] !== a
    ? ((o = [`library-deep-research-preview`, i, a, n.id, n.file_id]),
      (t[0] = i),
      (t[1] = n.file_id),
      (t[2] = n.id),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] !== i || t[6] !== n.id || t[7] !== a
    ? ((s =
        i != null && a != null
          ? (e) => {
              let { signal: t } = e;
              return L.safeGet(`/files/library/files/{library_file_id}/deep-research`, {
                signal: t,
                expectedIdentity: { accountId: i, userId: a },
                expectedErrorStatuses: [403, 404],
                parameters: { path: { library_file_id: n.id } },
              });
            }
          : g),
      (t[5] = i),
      (t[6] = n.id),
      (t[7] = a),
      (t[8] = s))
    : (s = t[8]);
  let l;
  t[9] !== o || t[10] !== s
    ? ((l = { queryKey: o, queryFn: s, staleTime: D.ONE_MINUTE, retry: !1 }),
      (t[9] = o),
      (t[10] = s),
      (t[11] = l))
    : (l = t[11]);
  let { data: u, isError: d, refetch: m } = c(l),
    h = i ?? void 0,
    v;
  t[12] === h
    ? (v = t[13])
    : ((v = { accountId: h, hostId: p, connectorId: X, appUri: Z, template: Q }), (t[12] = h), (t[13] = v));
  let { data: y, isError: b, refetch: S } = x(A, v);
  if (d || b || y?.widget.html.trim() === ``) {
    let e;
    t[14] !== m || t[15] !== S
      ? ((e = () => {
          (m(), S());
        }),
        (t[14] = m),
        (t[15] = S),
        (t[16] = e))
      : (e = t[16]);
    let r;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Y.jsx)(w, {
          id: `libraryDeepResearchPreview.retry`,
          defaultMessage: `Retry preview`,
          description: `Button to retry opening a saved deep research report`,
        })),
        (t[17] = r))
      : (r = t[17]);
    let i;
    t[18] === e
      ? (i = t[19])
      : ((i = (0, Y.jsx)(f, { color: `outline`, onClick: e, children: r })), (t[18] = e), (t[19] = i));
    let a;
    return (
      t[20] !== n || t[21] !== i
        ? ((a = (0, Y.jsx)(ne, { file: n, action: i })), (t[20] = n), (t[21] = i), (t[22] = a))
        : (a = t[22]),
      a
    );
  }
  if (u == null || y == null || i == null || a == null) {
    let e;
    return (
      t[23] === n.file_name
        ? (e = t[24])
        : ((e = (0, Y.jsx)(R, { fileName: n.file_name })), (t[23] = n.file_name), (t[24] = e)),
      e
    );
  }
  let C = `${i}:${a}:${n.id}:${n.file_id}`,
    T;
  return (
    t[25] !== i || t[26] !== n || t[27] !== r || t[28] !== u || t[29] !== y || t[30] !== C || t[31] !== a
      ? ((T = (0, Y.jsx)(ie, { accountId: i, userId: a, file: n, preview: u, resource: y, onClose: r }, C)),
        (t[25] = i),
        (t[26] = n),
        (t[27] = r),
        (t[28] = u),
        (t[29] = y),
        (t[30] = C),
        (t[31] = a),
        (t[32] = T))
      : (T = t[32]),
    T
  );
}
function ie(e) {
  let n = (0, q.c)(44),
    { accountId: i, userId: a, file: o, preview: s, resource: c, onClose: l } = e,
    d = t(M),
    [f] = (0, J.useState)(r),
    [m, h] = (0, J.useState)(s.widget_state),
    g;
  n[0] !== i || n[1] !== c || n[2] !== d || n[3] !== a
    ? ((g = () => {
        if (d.get(W) !== i || d.get(O) !== a || d.get(P, c.resourceIdentity) !== `current`)
          throw I(`The report account changed`, T.InvalidRequest);
      }),
      (n[0] = i),
      (n[1] = c),
      (n[2] = d),
      (n[3] = a),
      (n[4] = g))
    : (g = n[4]);
  let _ = g,
    v = `library-report:${o.id}`,
    y;
  n[5] === v ? (y = n[6]) : ((y = ee(v)), (n[5] = v), (n[6] = y));
  let x, C;
  n[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = { appUri: Z, template: Q, chatGptThreadId: null, toolName: `get_state`, toolInput: {} }),
      (C = []),
      (n[7] = x),
      (n[8] = C))
    : ((x = n[7]), (C = n[8]));
  let w;
  n[9] === s.tool_output
    ? (w = n[10])
    : ((w = { ...s.tool_output, is_library_preview: !0, can_delete: !1 }),
      (n[9] = s.tool_output),
      (n[10] = w));
  let D;
  n[11] !== s.tool_response_metadata || n[12] !== w
    ? ((D = { content: C, structuredContent: w, _meta: s.tool_response_metadata }),
      (n[11] = s.tool_response_metadata),
      (n[12] = w),
      (n[13] = D))
    : (D = n[13]);
  let k;
  n[14] === m ? (k = n[15]) : ((k = () => m), (n[14] = m), (n[15] = k));
  let A;
  n[16] === _ ? (A = n[17]) : ((A = async (e) => (_(), h(e), { ok: !0 })), (n[16] = _), (n[17] = A));
  let j;
  n[18] !== k || n[19] !== A
    ? ((j = { getState: k, save: A }), (n[18] = k), (n[19] = A), (n[20] = j))
    : (j = n[20]);
  let N;
  n[21] === _
    ? (N = n[22])
    : ((N = (e, t) => {
        (t?.throwIfAborted(), _());
        let { blob: n, name: r } = b({ blob: E(Blob), name: u() }).parse(e);
        z(n, r);
      }),
      (n[21] = _),
      (n[22] = N));
  let F;
  n[23] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = [`tools/call`]), (n[23] = F)) : (F = n[23]);
  let R;
  n[24] !== i || n[25] !== _ || n[26] !== o.id || n[27] !== l || n[28] !== a
    ? ((R = async (e, t) => {
        (t?.throwIfAborted(), _());
        let { params: n } = S.parse(e);
        if (n.name === `close_preview`) return (l?.(), { structuredContent: { closed: !0 } });
        if (n.name !== `get_state` && n.name !== `get_inline_images` && n.name !== `export`)
          throw I(`Unsupported saved report tool`, T.MethodNotFound);
        let r = await L.safePost(`/files/library/files/{library_file_id}/deep-research/tools/{tool_name}`, {
          signal: t,
          expectedIdentity: { accountId: i, userId: a },
          expectedErrorStatuses: [403, 404],
          parameters: { path: { library_file_id: o.id, tool_name: n.name } },
          requestBody: { args: n.arguments ?? {} },
        });
        return (
          _(),
          { content: [], isError: r.isError, structuredContent: r.structuredContent ?? void 0, _meta: r.meta }
        );
      }),
      (n[24] = i),
      (n[25] = _),
      (n[26] = o.id),
      (n[27] = l),
      (n[28] = a),
      (n[29] = R))
    : (R = n[29]);
  let B;
  n[30] !== _ || n[31] !== l || n[32] !== N || n[33] !== R
    ? ((B = {
        assertActive: _,
        displayMode: `fullscreen`,
        onRequestClose: l,
        downloadBlob: N,
        forwardedRequestMethods: F,
        handleRequest: R,
      }),
      (n[30] = _),
      (n[31] = l),
      (n[32] = N),
      (n[33] = R),
      (n[34] = B))
    : (B = n[34]);
  let V;
  n[35] !== c || n[36] !== j || n[37] !== B || n[38] !== D
    ? ((V = { ...c, request: x, toolResult: D, widgetStatePersistence: j, mcpAppHostAdapter: B }),
      (n[35] = c),
      (n[36] = j),
      (n[37] = B),
      (n[38] = D),
      (n[39] = V))
    : (V = n[39]);
  let H;
  return (
    n[40] !== f || n[41] !== V || n[42] !== y
      ? ((H = (0, Y.jsx)(K, {
          conversationId: y,
          hostId: p,
          mcpAppId: f,
          lifetime: `component`,
          inDialog: !0,
          showDialogTitle: !1,
          fullSurface: !0,
          result: V,
        })),
        (n[40] = f),
        (n[41] = V),
        (n[42] = y),
        (n[43] = H))
      : (H = n[43]),
    H
  );
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = l()),
      s(),
      v(),
      y(),
      h(),
      C(),
      (J = i()),
      d(),
      a(),
      N(),
      H(),
      G(),
      k(),
      B(),
      m(),
      V(),
      U(),
      j(),
      n(),
      te(),
      F(),
      (Y = o()),
      (X = `connector_openai_deep_research`),
      (Z = `connectors://${X}`),
      (Q = `internal://deep-research`));
  }))();
}
$();
export { re as LibraryDeepResearchPreview };
//# sourceMappingURL=library-deep-research-preview-6292777df12e.js.map
