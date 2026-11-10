import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  HFt as r,
  HO as i,
  IO as ee,
  JO as a,
  LNt as o,
  LO as te,
  PBt as s,
  Pit as ne,
  RO as re,
  SLt as c,
  TLt as l,
  VRt as ie,
  Vrt as u,
  WO as ae,
  XOt as d,
  Y3 as oe,
  YRt as f,
  Z3 as p,
  ZSt as m,
  aCt as h,
  hRt as g,
  jit as se,
  kRt as _,
  nCt as ce,
  okt as le,
  qO as ue,
  qrt as de,
  tkt as v,
  zO as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as y,
  BS as pe,
  F2n as me,
  FRn as b,
  I2n as x,
  Imt as he,
  Nmt as S,
  Ozn as C,
  RS as w,
  Xfn as ge,
  ZLn as _e,
  fmt as T,
  lBr as E,
  uBr as ve,
  umt as D,
} from "./app-initial-ad16eaadf81f.js";
import { t as ye } from "./library-name-validation-5559e2ce17f6.js";
async function be(e, t, n) {
  let r = {
      queryKey: [`library-api`, e.value.accountId],
      predicate: ({ queryKey: t }) => (t[2] ?? null) === (e.value.userId ?? null),
    },
    i = {
      ...r,
      predicate: (e) => {
        if (!r.predicate?.(e) || e.queryKey[3] !== `browse`) return !1;
        let i = O.safeParse(e.queryKey[4]).data;
        return (
          i != null &&
          (i.directoryId === t || i.directoryId === n.parent_directory_id) &&
          (i.directoryId != null || i.tab === `all` || i.tab === `folders`)
        );
      },
    };
  (await e.queryClient.cancelQueries(i),
    await e.queryClient.invalidateQueries({ ...r, refetchType: `none` }));
  let ee = {
    node: { ...n, kind: `directory`, item_count: 0, folder_count: 0, updated_at: new Date().toISOString() },
  };
  (e.queryClient.setQueriesData(i, (e) =>
    e == null || e.pages.some((e) => e.items.some(({ node: e }) => e.id === n.id))
      ? e
      : {
          ...e,
          pages: e.pages.map((e, t) =>
            t === 0
              ? { ...e, items: [ee, ...e.items], results: e.results == null ? void 0 : [ee, ...e.results] }
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
var O;
function xe() {
  return (xe = e(() => {
    (r(),
      (O = _({
        directoryId: ie().nullable(),
        tab: c([`all`, `folders`, `suggested`, `favorites`]),
        search: g(``),
        source: l(),
        categories: f([]),
        deleted: g(!1).optional(),
      })));
  }))();
}
function Se(e) {
  let t = (0, Ce.c)(8),
    n;
  t[0] !== e.accountId || t[1] !== e.userId
    ? ((n = { accountId: e.accountId, userId: e.userId }),
      (t[0] = e.accountId),
      (t[1] = e.userId),
      (t[2] = n))
    : (n = t[2]);
  let r;
  t[3] === e ? (r = t[4]) : ((r = (0, j.jsx)(k, { ...e })), (t[3] = e), (t[4] = r));
  let i;
  return (
    t[5] !== n || t[6] !== r
      ? ((i = (0, j.jsx)(h, { scope: ge, value: n, children: r })), (t[5] = n), (t[6] = r), (t[7] = i))
      : (i = t[7]),
    i
  );
}
function k(e) {
  let n = (0, Ce.c)(78),
    {
      directoryId: r,
      basePath: i,
      getAnalyticsContext: a,
      onCreated: o,
      children: s,
      open: ne,
      onOpenChange: c,
      onCloseAutoFocus: l,
    } = e,
    u = t(ge),
    d = le(),
    f;
  n[0] !== i || n[1] !== r ? ((f = pe(r, i)), (n[0] = i), (n[1] = r), (n[2] = f)) : (f = n[2]);
  let p = f,
    m = ce(p ? ve : !1, `3480763875`),
    [h, g] = (0, A.useState)(``),
    _ = (0, A.useId)(),
    y;
  n[3] !== d || n[4] !== h ? ((y = ye(d, h)), (n[3] = d), (n[4] = h), (n[5] = y)) : (y = n[5]);
  let x = y,
    [S, C] = (0, A.useState)(!1),
    w = (0, A.useRef)(null),
    E = (0, A.useRef)(!1),
    D;
  n[6] === u
    ? (D = n[7])
    : ((D = () => {
        w.current != null &&
          !E.current &&
          (T(u, w.current.context, {
            parentFolderId: w.current.parentFolderId,
            action: b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CANCELED,
          }),
          (E.current = !0));
      }),
      (n[6] = u),
      (n[7] = D));
  let O = D,
    [xe, Se] = (0, A.useState)(!1),
    k;
  n[8] === c
    ? (k = n[9])
    : ((k = () => {
        (Se(!1), c?.(!1), g(``), (w.current = null), (E.current = !1));
      }),
      (n[8] = c),
      (n[9] = k));
  let M = k,
    N;
  n[10] !== M ||
  n[11] !== r ||
  n[12] !== d ||
  n[13] !== h ||
  n[14] !== x ||
  n[15] !== o ||
  n[16] !== S ||
  n[17] !== p ||
  n[18] !== u
    ? ((N = async () => {
        if (S || !h.trim() || x != null || (p && !u.get(ve, `3480763875`))) return;
        C(!0);
        let e = w.current == null ? null : { ...w.current, parentFolderId: r ?? void 0 };
        e != null &&
          T(u, e.context, {
            parentFolderId: e.parentFolderId,
            action: b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CONFIRMED,
          });
        let t = !1;
        try {
          let n = await u
            .get(he)
            .safePost(`/files/library/directories`, {
              requestBody: { name: h.trim(), parent_directory_id: r },
              expectedErrorStatuses: [409],
            });
          if (((t = !0), (E.current = !0), e != null)) {
            let t = ie().min(1).safeParse(n?.id).data;
            T(u, e.context, {
              parentFolderId: e.parentFolderId,
              action:
                t == null
                  ? b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED
                  : b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_CREATED,
              folderId: t,
            });
          }
          (C(!1), M(), n?.id && (await be(u, r, n)), await o?.(n));
          return;
        } catch (n) {
          let r = n;
          if (t) return;
          (e != null &&
            T(u, e.context, {
              parentFolderId: e.parentFolderId,
              action: b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_FAILED,
              error: r,
            }),
            u
              .get(de)
              .danger(
                (r instanceof se && r.status === 409 ? me(r) : null) ??
                  d.formatMessage({
                    id: `libraryNext.createFolder.failed`,
                    defaultMessage: `Failed to create folder`,
                    description: `Error toast when Library folder creation fails; unsaved input is retained for retry`,
                  }),
                { hasCloseButton: !1, errorAnalytics: { toastId: `libraryNext.createFolder.failed` } },
              ));
        }
        C(!1);
      }),
      (n[10] = M),
      (n[11] = r),
      (n[12] = d),
      (n[13] = h),
      (n[14] = x),
      (n[15] = o),
      (n[16] = S),
      (n[17] = p),
      (n[18] = u),
      (n[19] = N))
    : (N = n[19]);
  let we = N,
    Te = ne ?? xe,
    P;
  n[20] === l
    ? (P = n[21])
    : ((P = { "aria-describedby": void 0, onCloseAutoFocus: l }), (n[20] = l), (n[21] = P));
  let F;
  n[22] !== O || n[23] !== M || n[24] !== c || n[25] !== S
    ? ((F = (e) => {
        S || (e ? (Se(!0), c?.(!0)) : (O(), M()));
      }),
      (n[22] = O),
      (n[23] = M),
      (n[24] = c),
      (n[25] = S),
      (n[26] = F))
    : (F = n[26]);
  let I;
  n[27] === we
    ? (I = n[28])
    : ((I = (e) => {
        (e.preventDefault(), we());
      }),
      (n[27] = we),
      (n[28] = I));
  let L;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, j.jsx)(fe, {
        children: (0, j.jsx)(re, {
          title: (0, j.jsx)(ue, {
            children: (0, j.jsx)(v, {
              id: `libraryNext.createFolder.title`,
              defaultMessage: `New folder`,
              description: `Title of the Library folder creation dialog`,
            }),
          }),
        }),
      })),
      (n[29] = L))
    : (L = n[29]);
  let R;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, j.jsx)(v, {
        id: `libraryNext.createFolder.name`,
        defaultMessage: `Folder name`,
        description: `Name input in the Library folder creation dialog`,
      })),
      (n[30] = R))
    : (R = n[30]);
  let z;
  n[31] !== r || n[32] !== a || n[33] !== u
    ? ((z = (e) => {
        if (e == null || w.current != null) return;
        let t = a?.();
        t != null &&
          ((w.current = { context: t, parentFolderId: r ?? void 0 }),
          T(u, t, {
            parentFolderId: w.current.parentFolderId,
            action: b.CHATGPT_FILE_LIBRARY_CREATE_FOLDER_ACTION_SHOWN,
          }));
      }),
      (n[31] = r),
      (n[32] = a),
      (n[33] = u),
      (n[34] = z))
    : (z = n[34]);
  let Ee = x != null,
    B = x == null ? void 0 : _,
    V;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => g(e.target.value)), (n[35] = V))
    : (V = n[35]);
  let H;
  n[36] !== h || n[37] !== z || n[38] !== Ee || n[39] !== B
    ? ((H = (0, j.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          R,
          (0, j.jsx)(_e, {
            ref: z,
            name: `name`,
            autoComplete: `off`,
            "aria-invalid": Ee,
            "aria-describedby": B,
            autoFocus: !0,
            value: h,
            onChange: V,
            required: !0,
          }),
        ],
      })),
      (n[36] = h),
      (n[37] = z),
      (n[38] = Ee),
      (n[39] = B),
      (n[40] = H))
    : (H = n[40]);
  let U;
  n[41] !== _ || n[42] !== x
    ? ((U =
        x == null ? null : (0, j.jsx)(`p`, { id: _, role: `alert`, className: `text-danger`, children: x })),
      (n[41] = _),
      (n[42] = x),
      (n[43] = U))
    : (U = n[43]);
  let W;
  n[44] !== H || n[45] !== U
    ? ((W = (0, j.jsxs)(fe, { children: [H, U] })), (n[44] = H), (n[45] = U), (n[46] = W))
    : (W = n[46]);
  let G;
  n[47] !== O || n[48] !== M
    ? ((G = () => {
        (O(), M());
      }),
      (n[47] = O),
      (n[48] = M),
      (n[49] = G))
    : (G = n[49]);
  let K;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, j.jsx)(v, {
        id: `libraryNext.create.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss the Library creation dialog without creating an item`,
      })),
      (n[50] = K))
    : (K = n[50]);
  let q;
  n[51] !== S || n[52] !== G
    ? ((q = (0, j.jsx)(oe, { color: `secondary`, disabled: S, onClick: G, children: K })),
      (n[51] = S),
      (n[52] = G),
      (n[53] = q))
    : (q = n[53]);
  let J;
  n[54] !== h || n[55] !== x || n[56] !== m || n[57] !== p
    ? ((J = !h.trim() || x != null || (p && !m)),
      (n[54] = h),
      (n[55] = x),
      (n[56] = m),
      (n[57] = p),
      (n[58] = J))
    : (J = n[58]);
  let Y;
  n[59] === S
    ? (Y = n[60])
    : ((Y = (0, j.jsx)(v, {
        id: `libraryNext.create.submitStatus`,
        defaultMessage: `{pending, select, true {Creating…} other {Create}}`,
        description: `Library creation dialog primary button. pending is true while the folder is being created.`,
        values: { pending: S },
      })),
      (n[59] = S),
      (n[60] = Y));
  let X;
  n[61] !== S || n[62] !== J || n[63] !== Y
    ? ((X = (0, j.jsx)(oe, { type: `submit`, color: `primary`, loading: S, disabled: J, children: Y })),
      (n[61] = S),
      (n[62] = J),
      (n[63] = Y),
      (n[64] = X))
    : (X = n[64]);
  let Z;
  n[65] !== q || n[66] !== X
    ? ((Z = (0, j.jsx)(fe, { children: (0, j.jsxs)(te, { children: [q, X] }) })),
      (n[65] = q),
      (n[66] = X),
      (n[67] = Z))
    : (Z = n[67]);
  let Q;
  n[68] !== W || n[69] !== Z || n[70] !== I
    ? ((Q = (0, j.jsxs)(ee, { as: `form`, onSubmit: I, children: [L, W, Z] })),
      (n[68] = W),
      (n[69] = Z),
      (n[70] = I),
      (n[71] = Q))
    : (Q = n[71]);
  let $;
  return (
    n[72] !== s || n[73] !== Q || n[74] !== Te || n[75] !== P || n[76] !== F
      ? (($ = (0, j.jsx)(ae, {
          open: Te,
          triggerContent: s,
          triggerAsChild: !0,
          showDialogClose: !1,
          contentProps: P,
          onOpenChange: F,
          children: Q,
        })),
        (n[72] = s),
        (n[73] = Q),
        (n[74] = Te),
        (n[75] = P),
        (n[76] = F),
        (n[77] = $))
      : ($ = n[77]),
    $
  );
}
var Ce, A, j;
function M() {
  return (M = e(() => {
    ((Ce = s()),
      C(),
      m(),
      (A = n()),
      d(),
      r(),
      x(),
      p(),
      a(),
      i(),
      y(),
      u(),
      E(),
      ne(),
      D(),
      S(),
      xe(),
      w(),
      (j = o()));
  }))();
}
export { M as n, Se as t };
//# sourceMappingURL=library-create-dialog-a8c2bb7f2040.js.map
