import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ASt as t,
  Cot as n,
  Hxt as r,
  Iot as i,
  Ixt as a,
  Lot as o,
  Mot as s,
  Not as c,
  Pxt as l,
  VDt as ee,
  Vxt as te,
  hot as ne,
  jDt as u,
  jSt as d,
  lot as f,
  nst as re,
  tst as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Fn as v,
  Ab as ae,
  Cwr as y,
  Db as oe,
  Fb as b,
  Ib as se,
  NDr as ce,
  Pb as le,
  XDr as x,
  Ymr as ue,
  eIn as S,
  eOr as C,
  ehr as w,
  gwr as de,
  pOr as T,
} from "./app-initial-5851df3f6cb1.js";
import { n as fe, t as E } from "./version-history-mutation-9ff287d45642.js";
import { n as D, r as O, t as pe } from "./scope-fb5d3b4015cc.js";
function me(e) {
  let t = (0, A.c)(9),
    { children: n, file: i, onRestored: a } = e,
    o = (0, j.useId)(),
    s;
  t[0] === o ? (s = t[1]) : ((s = { id: o }), (t[0] = o), (t[1] = s));
  let c;
  t[2] !== i || t[3] !== a
    ? ((c = i == null ? null : (0, M.jsx)(k, { file: i, onRestored: a })), (t[2] = i), (t[3] = a), (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== n || t[6] !== s || t[7] !== c
      ? ((l = (0, M.jsxs)(r, { scope: pe, value: s, children: [c, n] })),
        (t[5] = n),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function k(e) {
  let r = (0, A.c)(94),
    { file: i, onRestored: s } = e,
    l = a(de),
    u = a(n),
    d;
  r[0] === i.libraryFileId ? (d = r[1]) : ((d = le(i.libraryFileId)), (r[0] = i.libraryFileId), (r[1] = d));
  let f = d,
    p = ie(oe, f)?.accessory === `version-history`,
    m = ee(),
    h = te(T),
    g = re(),
    [_, y] = (0, j.useState)(null),
    [b, ce] = (0, j.useState)(),
    x;
  r[2] !== h || r[3] !== i.libraryFileId
    ? ((x = [`chatgpt-file-preview-version-history`, h, i.libraryFileId]),
      (r[2] = h),
      (r[3] = i.libraryFileId),
      (r[4] = x))
    : (x = r[4]);
  let S = x,
    w;
  r[5] !== h || r[6] !== i.libraryFileId || r[7] !== l
    ? ((w = async (e) => {
        let { pageParam: n, signal: r } = e;
        if (r.aborted || l.get(T) !== h) throw new t();
        let a;
        try {
          a = await ue.safeGet(`/files/library/files/{library_file_id}/versions`, {
            parameters: {
              path: { library_file_id: i.libraryFileId },
              query: { cursor: n || void 0, limit: be },
            },
            signal: r,
          });
        } catch (e) {
          let n = e;
          throw (
            !r.aborted &&
              !(n instanceof t) &&
              !(n instanceof Error && n.name === `AbortError`) &&
              l.get(T) === h &&
              l.get(C).trackCounter(v.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_FAILED),
            n
          );
        }
        if (r.aborted || l.get(T) !== h) throw new t();
        return (
          l.get(C).trackCounter(v.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_SUCCEEDED),
          a.items.length > 0 &&
            l
              .get(C)
              .trackCounter(v.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOADED_ITEMS, a.items.length),
          a
        );
      }),
      (r[5] = h),
      (r[6] = i.libraryFileId),
      (r[7] = l),
      (r[8] = w))
    : (w = r[8]);
  let E;
  r[9] !== S || r[10] !== p || r[11] !== w
    ? ((E = {
        enabled: p,
        initialPageParam: ``,
        getNextPageParam: ve,
        queryFn: w,
        queryKey: S,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }),
      (r[9] = S),
      (r[10] = p),
      (r[11] = w),
      (r[12] = E))
    : (E = r[12]);
  let {
      data: D,
      fetchNextPage: O,
      hasNextPage: pe,
      isError: me,
      isFetching: k,
      isFetchingNextPage: N,
      isPending: xe,
      refetch: Se,
    } = c(E),
    P,
    F,
    I,
    L,
    R;
  if (r[13] !== D?.pages || r[14] !== i.versionNumber || r[15] !== b || r[16] !== _) {
    let e = D?.pages.flatMap(_e);
    ((I = b != null && (i.versionNumber == null || b.version_number >= i.versionNumber) ? b : void 0),
      (R =
        I == null || e?.some((e) => e.is_current && e.version_number >= I.version_number)
          ? e
          : [I, ...(e ?? []).filter((e) => e.version_number !== I.version_number).map(ge)]),
      (F = R?.find(he)),
      (P = I == null ? (i.versionNumber ?? F?.version_number) : F?.version_number),
      (L = R?.find((e) => e.version_number === (_ ?? P)) ?? F),
      (r[13] = D?.pages),
      (r[14] = i.versionNumber),
      (r[15] = b),
      (r[16] = _),
      (r[17] = P),
      (r[18] = F),
      (r[19] = I),
      (r[20] = L),
      (r[21] = R));
  } else ((P = r[17]), (F = r[18]), (I = r[19]), (L = r[20]), (R = r[21]));
  let z = L,
    B;
  r[22] !== P || r[23] !== F || r[24] !== p || r[25] !== I || r[26] !== z
    ? ((B = I == null ? void 0 : F),
      p && z?.version_number !== P && (B = z),
      (r[22] = P),
      (r[23] = F),
      (r[24] = p),
      (r[25] = I),
      (r[26] = z),
      (r[27] = B))
    : (B = r[27]);
  let V;
  r[28] !== i.openFileContext || r[29] !== B || r[30] !== l
    ? ((V = () => {
        i.openFileContext?.selectVersion(l, B);
      }),
      (r[28] = i.openFileContext),
      (r[29] = B),
      (r[30] = l),
      (r[31] = V))
    : (V = r[31]);
  let H;
  (r[32] !== i.openFileContext || r[33] !== B || r[34] !== l
    ? ((H = [i.openFileContext, B, l]), (r[32] = i.openFileContext), (r[33] = B), (r[34] = l), (r[35] = H))
    : (H = r[35]),
    (0, j.useLayoutEffect)(V, H));
  let U;
  r[36] !== h || r[37] !== F || r[38] !== i.libraryFileId || r[39] !== k || r[40] !== N || r[41] !== l
    ? ((U = async (e) => {
        if ((k && !N) || F == null || e.is_current || l.get(T) !== h) return null;
        let t = await fe(l, `restore`, () =>
          ue.safePost(`/files/library/files/{library_file_id}/versions/{version_number}/restore`, {
            parameters: { path: { library_file_id: i.libraryFileId, version_number: e.version_number } },
            requestBody: { expected_current_version: F.version_number },
          }),
        );
        if (l.get(T) !== h) return null;
        if (t.current_version_number == null)
          throw Error(`The restored Library file revision is unavailable`);
        return t;
      }),
      (r[36] = h),
      (r[37] = F),
      (r[38] = i.libraryFileId),
      (r[39] = k),
      (r[40] = N),
      (r[41] = l),
      (r[42] = U))
    : (U = r[42]);
  let W;
  r[43] !== m || r[44] !== l
    ? ((W = () => {
        l.get(ne).danger(
          m.formatMessage({
            id: `chatgptFilePreview.versionHistory.restoreFailed`,
            defaultMessage: `The file changed or this version couldn’t be restored. Try again`,
            description: `Error toast shown when restoring a historical Library file version fails, including when another edit changed the current version`,
          }),
          { errorAnalytics: { toastId: `chatgptFilePreview.versionHistory.restoreFailed` } },
        );
      }),
      (r[43] = m),
      (r[44] = l),
      (r[45] = W))
    : (W = r[45]);
  let G;
  r[46] !== h || r[47] !== i.openFileContext || r[48] !== S || r[49] !== s || r[50] !== g || r[51] !== l
    ? ((G = async (e) => {
        if (e?.current_version_number == null) return;
        let t = {
          library_file_id: e.id,
          version_number: e.current_version_number,
          is_current: !0,
          file_id: e.file_id,
          file_name: e.file_name,
          mime_type: e.mime_type,
          file_extension: e.file_extension,
          file_size_bytes: e.file_size_bytes,
          library_file_category: e.library_file_category,
          version_created_at: e.updated_at,
          file_upload_time: e.file_upload_time,
          app_id: e.app_id,
          origination_message_id: e.origination_message_id,
          origination_thread_id: e.origination_thread_id,
          library_artifact_type: e.library_artifact_type,
          gizmo_id: e.gizmo_id,
          is_project: e.is_project,
        };
        (i.openFileContext?.selectVersion(l, t),
          ce(t),
          y(null),
          await Promise.all([
            g.invalidateQueries({ queryKey: S }),
            g.invalidateQueries({ queryKey: [`library-api`, h] }),
            s?.(e),
          ]));
      }),
      (r[46] = h),
      (r[47] = i.openFileContext),
      (r[48] = S),
      (r[49] = s),
      (r[50] = g),
      (r[51] = l),
      (r[52] = G))
    : (G = r[52]);
  let K;
  r[53] !== G || r[54] !== U || r[55] !== W
    ? ((K = { mutationFn: U, onError: W, onSuccess: G }), (r[53] = G), (r[54] = U), (r[55] = W), (r[56] = K))
    : (K = r[56]);
  let { isPending: q, mutate: Ce } = o(K),
    J;
  r[57] === O ? (J = r[58]) : ((J = () => void O()), (r[57] = O), (r[58] = J));
  let we = pe === !0,
    Y;
  r[59] === Se ? (Y = r[60]) : ((Y = () => void Se()), (r[59] = Se), (r[60] = Y));
  let X;
  r[61] !== u || r[62] !== f || r[63] !== q
    ? ((X = () => {
        q || (y(null), ae(u, f, `version-history`));
      }),
      (r[61] = u),
      (r[62] = f),
      (r[63] = q),
      (r[64] = X))
    : (X = r[64]);
  let Z;
  r[65] !== u || r[66] !== f || r[67] !== p || r[68] !== l
    ? ((Z = (e) => {
        let t = e === void 0 ? null : e;
        (p || l.get(C).trackCounter(v.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_OPENED),
          y(t),
          se(u, f, `version-history`));
      }),
      (r[65] = u),
      (r[66] = f),
      (r[67] = p),
      (r[68] = l),
      (r[69] = Z))
    : (Z = r[69]);
  let Q;
  r[70] !== q || r[71] !== l
    ? ((Q = (e) => {
        q ||
          (l.get(C).trackCounter(v.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_SELECTED),
          y(e.version_number));
      }),
      (r[70] = q),
      (r[71] = l),
      (r[72] = Q))
    : (Q = r[72]);
  let Te;
  r[73] !== i ||
  r[74] !== f ||
  r[75] !== me ||
  r[76] !== k ||
  r[77] !== N ||
  r[78] !== p ||
  r[79] !== xe ||
  r[80] !== q ||
  r[81] !== B ||
  r[82] !== Ce ||
  r[83] !== z ||
  r[84] !== J ||
  r[85] !== we ||
  r[86] !== Y ||
  r[87] !== X ||
  r[88] !== Z ||
  r[89] !== Q ||
  r[90] !== R
    ? ((Te = {
        ownerId: f,
        fetchNextPage: J,
        file: i,
        hasNextPage: we,
        isError: me,
        isFetching: k,
        isFetchingNextPage: N,
        isOpen: p,
        isPending: xe,
        isRestoring: q,
        previewVersion: B,
        refetch: Y,
        selectedVersion: z,
        versions: R,
        close: X,
        open: Z,
        restore: Ce,
        select: Q,
      }),
      (r[73] = i),
      (r[74] = f),
      (r[75] = me),
      (r[76] = k),
      (r[77] = N),
      (r[78] = p),
      (r[79] = xe),
      (r[80] = q),
      (r[81] = B),
      (r[82] = Ce),
      (r[83] = z),
      (r[84] = J),
      (r[85] = we),
      (r[86] = Y),
      (r[87] = X),
      (r[88] = Z),
      (r[89] = Q),
      (r[90] = R),
      (r[91] = Te))
    : (Te = r[91]);
  let Ee = Te,
    $;
  return (r[92] === Ee ? ($ = r[93]) : (($ = (0, M.jsx)(ye, { value: Ee })), (r[92] = Ee), (r[93] = $)), $);
}
function he(e) {
  return e.is_current;
}
function ge(e) {
  return e.is_current ? { ...e, is_current: !1 } : e;
}
function _e(e) {
  return e.items;
}
function ve(e) {
  return e.cursor ?? void 0;
}
function ye(e) {
  let t = (0, A.c)(4),
    { value: n } = e,
    r = a(pe),
    i,
    o;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = () => {
          r.set(O, n);
        }),
        (o = [r, n]),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = o))
      : ((i = t[2]), (o = t[3])),
    (0, j.useLayoutEffect)(i, o),
    null
  );
}
var A, j, M, be;
function N() {
  return (N = e(() => {
    ((A = m()),
      S(),
      d(),
      s(),
      i(),
      p(),
      l(),
      (j = _()),
      u(),
      w(),
      ce(),
      f(),
      x(),
      h(),
      y(),
      b(),
      E(),
      D(),
      (M = g()),
      (be = 20));
  }))();
}
export { N as n, me as t };
//# sourceMappingURL=context-38c75790ce9d.js.map
