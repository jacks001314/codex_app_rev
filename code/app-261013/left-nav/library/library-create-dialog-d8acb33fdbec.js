import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  EPt as r,
  Hxt as i,
  IDt as a,
  Ixt as ee,
  NLt as o,
  Pxt as s,
  TLt as te,
  VDt as ne,
  _O as re,
  cO as ie,
  fO as ae,
  hot as oe,
  hrt as se,
  jDt as c,
  lIt as l,
  lO as u,
  lot as d,
  mO as ce,
  oIt as f,
  oO as le,
  pLt as p,
  sO as ue,
  t3 as m,
  vO as h,
  vrt as g,
  vzt as _,
  xMt as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as b,
  Dpt as de,
  TPn as fe,
  c$n as x,
  eIn as S,
  lFn as C,
  rpt as w,
  s$n as pe,
  tln as me,
  tpt as T,
  wpt as he,
} from "./app-initial-5851df3f6cb1.js";
import { t as ge } from "./library-name-validation-5559e2ce17f6.js";
async function _e(e, t, n) {
  let r = {
      queryKey: [`library-api`, e.value.accountId],
      predicate: ({ queryKey: t }) => (t[2] ?? null) === (e.value.userId ?? null),
    },
    i = {
      ...r,
      predicate: (e) => {
        if (!r.predicate?.(e) || e.queryKey[3] !== `browse`) return !1;
        let i = E.safeParse(e.queryKey[4]).data;
        return (
          i != null &&
          (i.directoryId === t || i.directoryId === n.parent_directory_id) &&
          (i.directoryId != null || i.tab === `all` || i.tab === `folders`)
        );
      },
    };
  (await e.queryClient.cancelQueries(i),
    await e.queryClient.invalidateQueries({ ...r, refetchType: `none` }));
  let a = {
    node: { ...n, kind: `directory`, item_count: 0, folder_count: 0, updated_at: new Date().toISOString() },
  };
  (e.queryClient.setQueriesData(i, (e) =>
    e == null || e.pages.some((e) => e.items.some(({ node: e }) => e.id === n.id))
      ? e
      : {
          ...e,
          pages: e.pages.map((e, t) =>
            t === 0
              ? { ...e, items: [a, ...e.items], results: e.results == null ? void 0 : [a, ...e.results] }
              : e,
          ),
        },
  ),
    e.queryClient.refetchQueries({
      ...i,
      type: `active`,
      predicate: (e) => i.predicate?.(e) === !0 && e.state.data == null,
    }));
}
var E;
function D() {
  return (D = e(() => {
    (r(),
      (E = p({
        directoryId: te().nullable(),
        tab: f([`all`, `folders`, `suggested`, `favorites`]),
        search: n(``),
        source: l(),
        categories: o([]),
        deleted: n(!1).optional(),
      })));
  }))();
}
function O(e) {
  let t = (0, ve.c)(8),
    n;
  t[0] !== e.accountId || t[1] !== e.userId
    ? ((n = { accountId: e.accountId, userId: e.userId }),
      (t[0] = e.accountId),
      (t[1] = e.userId),
      (t[2] = n))
    : (n = t[2]);
  let r;
  t[3] === e ? (r = t[4]) : ((r = (0, j.jsx)(k, { ...e })), (t[3] = e), (t[4] = r));
  let a;
  return (
    t[5] !== n || t[6] !== r
      ? ((a = (0, j.jsx)(i, { scope: me, value: n, children: r })), (t[5] = n), (t[6] = r), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function k(e) {
  let n = (0, ve.c)(72),
    {
      directoryId: r,
      getAnalyticsContext: i,
      onCreated: o,
      children: s,
      open: ae,
      onOpenChange: c,
      onCloseAutoFocus: l,
    } = e,
    d = ee(me),
    f = ne(),
    [p, m] = (0, A.useState)(``),
    h = (0, A.useId)(),
    g;
  n[0] !== f || n[1] !== p ? ((g = ge(f, p)), (n[0] = f), (n[1] = p), (n[2] = g)) : (g = n[2]);
  let _ = g,
    [v, y] = (0, A.useState)(!1),
    b = (0, A.useRef)(null),
    x = (0, A.useRef)(!1),
    S;
  n[3] === d
    ? (S = n[4])
    : ((S = () => {
        b.current != null &&
          !x.current &&
          (w(d, b.current.context, {
            parentFolderId: b.current.parentFolderId,
            action: C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CANCELED,
          }),
          (x.current = !0));
      }),
      (n[3] = d),
      (n[4] = S));
  let T = S,
    [he, E] = (0, A.useState)(!1),
    D;
  n[5] === c
    ? (D = n[6])
    : ((D = () => {
        (E(!1), c?.(!1), m(``), (b.current = null), (x.current = !1));
      }),
      (n[5] = c),
      (n[6] = D));
  let O = D,
    k;
  n[7] !== O ||
  n[8] !== r ||
  n[9] !== f ||
  n[10] !== p ||
  n[11] !== _ ||
  n[12] !== o ||
  n[13] !== v ||
  n[14] !== d
    ? ((k = async () => {
        if (v || !p.trim() || _ != null) return;
        y(!0);
        let e = b.current == null ? null : { ...b.current, parentFolderId: r ?? void 0 };
        e != null &&
          w(d, e.context, {
            parentFolderId: e.parentFolderId,
            action: C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CONFIRMED,
          });
        let t = !1;
        try {
          let n = await d
            .get(de)
            .safePost(`/files/library/directories`, {
              requestBody: { name: p.trim(), parent_directory_id: r },
              expectedErrorStatuses: [409],
            });
          if (((t = !0), (x.current = !0), e != null)) {
            let t = te().min(1).safeParse(n?.id).data;
            w(d, e.context, {
              parentFolderId: e.parentFolderId,
              action:
                t == null
                  ? C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED
                  : C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CREATED,
              folderId: t,
            });
          }
          (y(!1), O(), n?.id && (await _e(d, r, n)), await o?.(n));
          return;
        } catch (n) {
          let r = n;
          if (t) return;
          (e != null &&
            w(d, e.context, {
              parentFolderId: e.parentFolderId,
              action: C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED,
              error: r,
            }),
            d
              .get(oe)
              .danger(
                (r instanceof se && r.status === 409 ? pe(r) : null) ??
                  f.formatMessage({
                    id: `libraryNext.createFolder.failed`,
                    defaultMessage: `Failed to create folder`,
                    description: `Error toast when Library folder creation fails; unsaved input is retained for retry`,
                  }),
                { hasCloseButton: !1, errorAnalytics: { toastId: `libraryNext.createFolder.failed` } },
              ));
        }
        y(!1);
      }),
      (n[7] = O),
      (n[8] = r),
      (n[9] = f),
      (n[10] = p),
      (n[11] = _),
      (n[12] = o),
      (n[13] = v),
      (n[14] = d),
      (n[15] = k))
    : (k = n[15]);
  let M = k,
    N = ae ?? he,
    P;
  n[16] === l
    ? (P = n[17])
    : ((P = { "aria-describedby": void 0, onCloseAutoFocus: l }), (n[16] = l), (n[17] = P));
  let F;
  n[18] !== T || n[19] !== O || n[20] !== c || n[21] !== v
    ? ((F = (e) => {
        v || (e ? (E(!0), c?.(!0)) : (T(), O()));
      }),
      (n[18] = T),
      (n[19] = O),
      (n[20] = c),
      (n[21] = v),
      (n[22] = F))
    : (F = n[22]);
  let I;
  n[23] === M
    ? (I = n[24])
    : ((I = (e) => {
        (e.preventDefault(), M());
      }),
      (n[23] = M),
      (n[24] = I));
  let L;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, j.jsx)(u, {
        children: (0, j.jsx)(ie, {
          title: (0, j.jsx)(re, {
            children: (0, j.jsx)(a, {
              id: `libraryNext.createFolder.title`,
              defaultMessage: `New folder`,
              description: `Title of the Library folder creation dialog`,
            }),
          }),
        }),
      })),
      (n[25] = L))
    : (L = n[25]);
  let R;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, j.jsx)(a, {
        id: `libraryNext.createFolder.name`,
        defaultMessage: `Folder name`,
        description: `Name input in the Library folder creation dialog`,
      })),
      (n[26] = R))
    : (R = n[26]);
  let z;
  n[27] !== r || n[28] !== i || n[29] !== d
    ? ((z = (e) => {
        if (e == null || b.current != null) return;
        let t = i?.();
        t != null &&
          ((b.current = { context: t, parentFolderId: r ?? void 0 }),
          w(d, t, {
            parentFolderId: b.current.parentFolderId,
            action: C.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_SHOWN,
          }));
      }),
      (n[27] = r),
      (n[28] = i),
      (n[29] = d),
      (n[30] = z))
    : (z = n[30]);
  let B = _ != null,
    ye = _ == null ? void 0 : h,
    V;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => m(e.target.value)), (n[31] = V))
    : (V = n[31]);
  let H;
  n[32] !== p || n[33] !== z || n[34] !== B || n[35] !== ye
    ? ((H = (0, j.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          R,
          (0, j.jsx)(fe, {
            ref: z,
            name: `name`,
            autoComplete: `off`,
            "aria-invalid": B,
            "aria-describedby": ye,
            autoFocus: !0,
            value: p,
            onChange: V,
            required: !0,
          }),
        ],
      })),
      (n[32] = p),
      (n[33] = z),
      (n[34] = B),
      (n[35] = ye),
      (n[36] = H))
    : (H = n[36]);
  let U;
  n[37] !== h || n[38] !== _
    ? ((U =
        _ == null ? null : (0, j.jsx)(`p`, { id: h, role: `alert`, className: `text-danger`, children: _ })),
      (n[37] = h),
      (n[38] = _),
      (n[39] = U))
    : (U = n[39]);
  let W;
  n[40] !== H || n[41] !== U
    ? ((W = (0, j.jsxs)(u, { children: [H, U] })), (n[40] = H), (n[41] = U), (n[42] = W))
    : (W = n[42]);
  let G;
  n[43] !== T || n[44] !== O
    ? ((G = () => {
        (T(), O());
      }),
      (n[43] = T),
      (n[44] = O),
      (n[45] = G))
    : (G = n[45]);
  let K;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, j.jsx)(a, {
        id: `libraryNext.create.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the Library creation dialog without creating an item`,
      })),
      (n[46] = K))
    : (K = n[46]);
  let q;
  n[47] !== v || n[48] !== G
    ? ((q = (0, j.jsx)(t, { color: `secondary`, disabled: v, onClick: G, children: K })),
      (n[47] = v),
      (n[48] = G),
      (n[49] = q))
    : (q = n[49]);
  let J;
  n[50] !== p || n[51] !== _
    ? ((J = !p.trim() || _ != null), (n[50] = p), (n[51] = _), (n[52] = J))
    : (J = n[52]);
  let Y;
  n[53] === v
    ? (Y = n[54])
    : ((Y = (0, j.jsx)(a, {
        id: `libraryNext.create.submitStatus`,
        defaultMessage: `{pending, select, true {Creating…} other {Create}}`,
        description: `Library creation dialog primary button. pending is true while the folder is being created.`,
        values: { pending: v },
      })),
      (n[53] = v),
      (n[54] = Y));
  let X;
  n[55] !== v || n[56] !== J || n[57] !== Y
    ? ((X = (0, j.jsx)(t, { type: `submit`, color: `primary`, loading: v, disabled: J, children: Y })),
      (n[55] = v),
      (n[56] = J),
      (n[57] = Y),
      (n[58] = X))
    : (X = n[58]);
  let Z;
  n[59] !== q || n[60] !== X
    ? ((Z = (0, j.jsx)(u, { children: (0, j.jsxs)(ue, { children: [q, X] }) })),
      (n[59] = q),
      (n[60] = X),
      (n[61] = Z))
    : (Z = n[61]);
  let Q;
  n[62] !== W || n[63] !== Z || n[64] !== I
    ? ((Q = (0, j.jsxs)(le, { as: `form`, onSubmit: I, children: [L, W, Z] })),
      (n[62] = W),
      (n[63] = Z),
      (n[64] = I),
      (n[65] = Q))
    : (Q = n[65]);
  let $;
  return (
    n[66] !== s || n[67] !== Q || n[68] !== N || n[69] !== P || n[70] !== F
      ? (($ = (0, j.jsx)(ce, {
          open: N,
          triggerContent: s,
          triggerAsChild: !0,
          showDialogClose: !1,
          contentProps: P,
          onOpenChange: F,
          children: Q,
        })),
        (n[66] = s),
        (n[67] = Q),
        (n[68] = N),
        (n[69] = P),
        (n[70] = F),
        (n[71] = $))
      : ($ = n[71]),
    $
  );
}
var ve, A, j;
function M() {
  return (M = e(() => {
    ((ve = _()),
      S(),
      s(),
      (A = y()),
      c(),
      r(),
      x(),
      m(),
      h(),
      ae(),
      b(),
      d(),
      g(),
      T(),
      he(),
      D(),
      (j = v()));
  }))();
}
export { M as n, O as t };
//# sourceMappingURL=library-create-dialog-d8acb33fdbec.js.map
