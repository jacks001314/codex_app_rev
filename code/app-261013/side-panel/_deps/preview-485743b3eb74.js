import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ASt as n,
  IDt as r,
  Ixt as i,
  Kat as a,
  Pxt as o,
  Pyt as s,
  Vxt as c,
  Xot as l,
  Yot as u,
  i3 as d,
  iot as f,
  jDt as p,
  jSt as m,
  qat as h,
  r3 as g,
  rst as _,
  t3 as v,
  vzt as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as S,
  EGn as C,
  IGn as w,
  NDr as T,
  gwr as E,
  oFr as D,
  pOr as O,
} from "./app-initial-5851df3f6cb1.js";
import { n as k, r as A } from "./scope-fb5d3b4015cc.js";
function j(e) {
  let o = (0, M.c)(27),
    { current: u, renderPreview: d } = e,
    p = i(E),
    m = c(O),
    h = c(A),
    _ = h?.previewVersion,
    v = h != null && _ != null,
    y;
  o[0] !== m || o[1] !== h || o[2] !== _ || o[3] !== p
    ? ((y = async (e) => {
        let { signal: t } = e;
        if (h == null || _ == null || p.get(O) !== m) throw new n();
        let r = await C({
          conversationId: h.file.conversationId,
          gizmoId: h.file.gizmoId,
          maxBytes: s,
          signal: t,
          target: { fileId: _.file_id, libraryFileId: h.file.libraryFileId, type: `file-id` },
        });
        if (t.aborted || p.get(O) !== m) throw new n();
        let i = await a.workspaceFiles.createTemporaryFile?.({
          bytes: new Uint8Array(await r.arrayBuffer()),
          fileName: _.file_name,
        });
        if (i == null) throw Error(`Library file version preview is unavailable`);
        if (t.aborted || p.get(O) !== m)
          throw (await a.workspaceFiles.releaseTemporaryFile?.({ path: i.path }), new n());
        return { hostId: f, path: i.path, title: _.file_name, versionNumber: _.version_number };
      }),
      (o[0] = m),
      (o[1] = h),
      (o[2] = _),
      (o[3] = p),
      (o[4] = y))
    : (y = o[4]);
  let b = h?.file.libraryFileId,
    x = _?.file_id,
    S;
  o[5] !== m || o[6] !== b || o[7] !== x
    ? ((S = [`library-file-version-preview`, m, b, x]), (o[5] = m), (o[6] = b), (o[7] = x), (o[8] = S))
    : (S = o[8]);
  let w;
  o[9] !== v || o[10] !== y || o[11] !== S
    ? ((w = { enabled: v, gcTime: 0, queryFn: y, queryKey: S, retry: !1, staleTime: 1 / 0 }),
      (o[9] = v),
      (o[10] = y),
      (o[11] = S),
      (o[12] = w))
    : (w = o[12]);
  let { data: T, isError: D, isFetching: k, refetch: j } = l(w),
    F,
    I;
  (o[13] === T
    ? ((F = o[14]), (I = o[15]))
    : ((F = () => {
        if (T != null)
          return () => {
            a.workspaceFiles.releaseTemporaryFile?.({ path: T.path });
          };
      }),
      (I = [T]),
      (o[13] = T),
      (o[14] = F),
      (o[15] = I)),
    (0, N.useEffect)(F, I));
  let L = T ?? u,
    R;
  o[16] !== h || o[17] !== d || o[18] !== L
    ? ((R = d(L, h)), (o[16] = h), (o[17] = d), (o[18] = L), (o[19] = R))
    : (R = o[19]);
  let z = R;
  if (_ == null || T != null) return z;
  let B;
  o[20] !== D || o[21] !== k || o[22] !== j
    ? ((B = (0, P.jsx)(`div`, {
        className: `absolute inset-x-0 top-toolbar bottom-0 z-20 flex items-center justify-center bg-surface`,
        children: D
          ? (0, P.jsxs)(`div`, {
              className: `flex flex-col items-center gap-3 px-6 text-center text-sm text-secondary`,
              children: [
                (0, P.jsx)(r, {
                  id: `chatgptFilePreview.versionHistory.previewFailed`,
                  defaultMessage: `Couldn’t load this version`,
                  description: `Error shown in a Library file preview when a selected historical version cannot be loaded`,
                }),
                (0, P.jsx)(t, {
                  "aria-disabled": k,
                  color: `secondary`,
                  onClick: () => {
                    k || j();
                  },
                  children: (0, P.jsx)(r, {
                    id: `chatgptFilePreview.versionHistory.retryPreview`,
                    defaultMessage: `Retry`,
                    description: `Button that retries loading the selected historical Library file version`,
                  }),
                }),
              ],
            })
          : (0, P.jsxs)(`div`, {
              role: `status`,
              children: [
                (0, P.jsx)(g, {}),
                (0, P.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, P.jsx)(r, {
                    id: `chatgptFilePreview.versionHistory.loadingPreview`,
                    defaultMessage: `Loading file version…`,
                    description: `Accessible status announced while a selected historical Library file version is loading`,
                  }),
                }),
              ],
            }),
      })),
      (o[20] = D),
      (o[21] = k),
      (o[22] = j),
      (o[23] = B))
    : (B = o[23]);
  let V;
  return (
    o[24] !== z || o[25] !== B
      ? ((V = (0, P.jsxs)(`div`, { className: `relative h-full min-h-0`, children: [z, B] })),
        (o[24] = z),
        (o[25] = B),
        (o[26] = V))
      : (V = o[26]),
    V
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = y()), m(), u(), o(), _(), (N = x()), p(), w(), T(), v(), d(), h(), S(), D(), k(), (P = b()));
  }))();
}
export { F as n, j as t };
//# sourceMappingURL=preview-485743b3eb74.js.map
