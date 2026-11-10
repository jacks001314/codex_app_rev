const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-create-dialog-b063a2175daf.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./library-create-dialog-d8acb33fdbec.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./library-name-validation-5559e2ce17f6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  AO as r,
  B4 as i,
  CO as a,
  DV as o,
  IDt as s,
  Ixt as c,
  Mz as l,
  Nz as u,
  Pxt as d,
  TJ as f,
  TO as p,
  VDt as m,
  Vxt as ee,
  _Mt as h,
  cz as g,
  eZ as te,
  fPt as _,
  gMt as ne,
  i2 as v,
  ix as y,
  jDt as b,
  pPt as x,
  r2 as re,
  rx as ie,
  sz as ae,
  t3 as S,
  tU as oe,
  vzt as se,
  xMt as C,
  yzt as w,
  z4 as ce,
} from "./app-shared-bbfeca5e5737.js";
import { MWt as le, NWt as ue, tln as de, wpt as T } from "./app-initial-5851df3f6cb1.js";
import { n as E, t as D } from "./favorite-folders-6a0ba920b2d1.js";
function fe(e) {
  let t = (0, k.c)(3),
    [n, r] = (0, A.useState)(!!e.open);
  e.open && !n && r(!0);
  let i;
  return (
    t[0] !== n || t[1] !== e
      ? ((i = n
          ? (0, j.jsx)(A.Suspense, { fallback: (0, j.jsx)(O, { ...e }), children: (0, j.jsx)(M, { ...e }) })
          : null),
        (t[0] = n),
        (t[1] = e),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function O(e) {
  let t = (0, k.c)(10),
    { open: n, onOpenChange: r, onCloseAutoFocus: i, failed: a } = e,
    o = a !== void 0 && a,
    c = !!n,
    l;
  t[0] === r ? (l = t[1]) : ((l = (e) => r?.(e)), (t[0] = r), (t[1] = l));
  let u;
  t[2] === o
    ? (u = t[3])
    : ((u = o
        ? (0, j.jsx)(s, {
            id: `library.favoriteFolder.createLoadError`,
            defaultMessage: `Couldn’t open New folder`,
            description: `Title when downloading the Favorites folder creation dialog failed after retrying`,
          })
        : (0, j.jsx)(s, {
            id: `library.favoriteFolder.createLoading`,
            defaultMessage: `Loading New folder…`,
            description: `Title while downloading the dismissible Favorites folder creation dialog`,
          })),
      (t[2] = o),
      (t[3] = u));
  let d;
  return (
    t[4] !== o || t[5] !== i || t[6] !== c || t[7] !== l || t[8] !== u
      ? ((d = (0, j.jsx)(le, { open: c, onOpenChange: l, onCloseAutoFocus: i, failed: o, title: u })),
        (t[4] = o),
        (t[5] = i),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var k, A, j, M;
function N() {
  return (N = e(() => {
    ((k = se()),
      (A = w()),
      b(),
      ue(),
      ce(),
      (j = C()),
      x(),
      (M = i(
        async () =>
          (
            await _(
              async () => {
                let { CreateLibraryFolderDialog: e } = await import(
                  `./library-create-dialog-b063a2175daf.js`
                );
                return { CreateLibraryFolderDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
              import.meta.url,
            )
          ).CreateLibraryFolderDialog,
        { suspendToParent: !0, errorFallback: (e) => (0, j.jsx)(O, { ...e, failed: !0 }) },
      )));
  }))();
}
function pe(e) {
  let n = (0, _e.c)(89),
    {
      className: r,
      appearance: i,
      visibility: o,
      isSaved: u,
      isBusy: d,
      isCheckingStatus: f,
      selectedFolderId: ee,
      onToggleFavorite: h,
      onSelectFolder: g,
    } = e,
    _ = i === void 0 ? `media-overlay` : i,
    v = c(de),
    y = m(),
    [b, x] = (0, F.useState)(!1),
    [S, oe] = (0, F.useState)(!1),
    [se, C] = (0, F.useState)(!1),
    [w, ce] = (0, F.useState)(null),
    le = (0, F.useRef)(null),
    ue = (0, F.useRef)(null),
    T = d || f,
    E;
  n[0] === y
    ? (E = n[1])
    : ((E = y.formatMessage({
        id: `library.favoriteFolder.create`,
        defaultMessage: `Create folder`,
        description: `Button that opens the Library folder creation dialog for a saved item`,
      })),
      (n[0] = y),
      (n[1] = E));
  let O = E,
    k;
  if (f) {
    let e;
    (n[2] === y
      ? (e = n[3])
      : ((e = y.formatMessage({
          id: `library.favoriteFolder.checking`,
          defaultMessage: `Checking Favorites status`,
          description: `Accessible status for a bookmark while checking whether the item is already saved`,
        })),
        (n[2] = y),
        (n[3] = e)),
      (k = e));
  } else if (u) {
    let e;
    (n[4] === y
      ? (e = n[5])
      : ((e = y.formatMessage({
          id: `library.favoriteFolder.remove`,
          defaultMessage: `Remove from Favorites`,
          description: `Accessible label and tooltip for removing an item from Favorites`,
        })),
        (n[4] = y),
        (n[5] = e)),
      (k = e));
  } else {
    let e;
    (n[6] === y
      ? (e = n[7])
      : ((e = y.formatMessage({
          id: `library.favoriteFolder.add`,
          defaultMessage: `Add to Favorites`,
          description: `Accessible label for saving an item to Favorites and opening optional folder selection`,
        })),
        (n[6] = y),
        (n[7] = e)),
      (k = e));
  }
  let A;
  n[8] !== T || n[9] !== u || n[10] !== h
    ? ((A = () => {
        if (T) {
          x(!1);
          return;
        }
        (C(!0), x(!u), h());
      }),
      (n[8] = T),
      (n[9] = u),
      (n[10] = h),
      (n[11] = A))
    : (A = n[11]);
  let j = A,
    M;
  n[12] !== _ || n[13] !== r || n[14] !== u || n[15] !== b || n[16] !== o
    ? ((M = ne(
        `select-none`,
        o !== `always` && _ !== `entity-header` && _ !== `map-card` && !u && !b
          ? [
              `pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100`,
              _ === `product-card`
                ? `group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100`
                : `group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100`,
            ]
          : `pointer-events-auto`,
        r,
      )),
      (n[12] = _),
      (n[13] = r),
      (n[14] = u),
      (n[15] = b),
      (n[16] = o),
      (n[17] = M))
    : (M = n[17]);
  let N = b ? `open` : `closed`,
    pe = !u || b || se ? !1 : void 0,
    P;
  n[18] === S
    ? (P = n[19])
    : ((P = (e) => {
        S && e.preventDefault();
      }),
      (n[18] = S),
      (n[19] = P));
  let L;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        e || (x(!1), C(!0));
      }),
      (n[20] = L))
    : (L = n[20]);
  let ye;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (e) => {
        ((le.current = e), ce(e?.closest(`.codex-dialog`) ?? null));
      }),
      (n[21] = ye))
    : (ye = n[21]);
  let be = T || void 0,
    xe = (T && !b) || void 0,
    Se = !u || b ? `menu` : void 0,
    Ce = !u || b ? b : void 0,
    we = ve[_],
    Te,
    Ee,
    De;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = () => C(!1)), (Ee = () => C(!1)), (De = () => C(!1)), (n[22] = Te), (n[23] = Ee), (n[24] = De))
    : ((Te = n[22]), (Ee = n[23]), (De = n[24]));
  let R;
  n[25] === j
    ? (R = n[26])
    : ((R = (e) => {
        (e.preventDefault(), e.stopPropagation(), j());
      }),
      (n[25] = j),
      (n[26] = R));
  let z;
  n[27] !== T || n[28] !== u || n[29] !== j
    ? ((z = (e) => {
        e.nativeEvent.isComposing ||
          ([`Enter`, ` `, `ArrowDown`].includes(e.key) &&
            (e.preventDefault(), e.stopPropagation(), e.key === `ArrowDown` ? !T && !u && x(!0) : j()));
      }),
      (n[27] = T),
      (n[28] = u),
      (n[29] = j),
      (n[30] = z))
    : (z = n[30]);
  let Oe = u ? ie : re,
    B;
  n[31] === Oe ? (B = n[32]) : ((B = (0, I.jsx)(l, { asset: Oe })), (n[31] = Oe), (n[32] = B));
  let V;
  n[33] !== u ||
  n[34] !== k ||
  n[35] !== be ||
  n[36] !== xe ||
  n[37] !== Se ||
  n[38] !== Ce ||
  n[39] !== we ||
  n[40] !== R ||
  n[41] !== z ||
  n[42] !== B
    ? ((V = (0, I.jsx)(t, {
        ref: ye,
        "aria-label": k,
        "aria-busy": be,
        "aria-disabled": xe,
        "aria-haspopup": Se,
        "aria-expanded": Ce,
        "aria-pressed": u,
        ...we,
        onPointerEnter: Te,
        onPointerLeave: Ee,
        onBlur: De,
        onPointerDown: he,
        onClick: R,
        onKeyDown: z,
        children: B,
      })),
      (n[33] = u),
      (n[34] = k),
      (n[35] = be),
      (n[36] = xe),
      (n[37] = Se),
      (n[38] = Ce),
      (n[39] = we),
      (n[40] = R),
      (n[41] = z),
      (n[42] = B),
      (n[43] = V))
    : (V = n[43]);
  let H;
  n[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, I.jsx)(`span`, {
        className: `text-sm font-semibold`,
        children: (0, I.jsx)(s, {
          id: `library.favoriteFolder.moveToFolder`,
          defaultMessage: `Move to folder`,
          description: `Heading in the optional Library folder menu after saving an item to Favorites`,
        }),
      })),
      (n[44] = H))
    : (H = n[44]);
  let U, W;
  n[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        (x(!1), oe(!0));
      }),
      (W = (0, I.jsx)(l, { asset: te })),
      (n[45] = U),
      (n[46] = W))
    : ((U = n[45]), (W = n[46]));
  let G;
  n[47] !== T || n[48] !== O
    ? ((G = (0, I.jsx)(t, {
        ref: ue,
        "aria-label": O,
        color: `ghostActive`,
        size: `menuRow`,
        uniform: !0,
        disabled: T,
        onClick: U,
        children: W,
      })),
      (n[47] = T),
      (n[48] = O),
      (n[49] = G))
    : (G = n[49]);
  let K;
  n[50] !== T || n[51] !== G
    ? ((K = (0, I.jsx)(p.ItemSlot, { asChild: !0, disabled: T, children: G })),
      (n[50] = T),
      (n[51] = G),
      (n[52] = K))
    : (K = n[52]);
  let q;
  n[53] !== O || n[54] !== K
    ? ((q = (0, I.jsxs)(`div`, {
        className: `flex h-9 shrink-0 items-center justify-between gap-2 px-3`,
        children: [H, (0, I.jsx)(ae, { cloneCustomTrigger: !0, tooltipContent: O, children: K })],
      })),
      (n[53] = O),
      (n[54] = K),
      (n[55] = q))
    : (q = n[55]);
  let ke;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = () => ue.current?.focus()), (n[56] = ke))
    : (ke = n[56]);
  let J;
  n[57] !== T || n[58] !== g || n[59] !== ee
    ? ((J = (0, I.jsx)(`div`, {
        className: `min-h-0 overflow-y-auto overscroll-contain pb-2`,
        children: (0, I.jsx)(ge, {
          isBusy: T,
          selectedFolderId: ee,
          onSelectFolder: g,
          focusCreateFolder: ke,
        }),
      })),
      (n[57] = T),
      (n[58] = g),
      (n[59] = ee),
      (n[60] = J))
    : (J = n[60]);
  let Y;
  n[61] !== b || n[62] !== w || n[63] !== V || n[64] !== q || n[65] !== J || n[66] !== P
    ? ((Y = (0, I.jsxs)(a, {
        align: `end`,
        contentClassName: `pointer-events-auto`,
        contentWidth: `menuWide`,
        contentMaxHeight: `tall`,
        size: `select`,
        portalContainer: w,
        open: b,
        onCloseAutoFocus: P,
        onOpenChange: L,
        triggerButton: V,
        children: [q, J],
      })),
      (n[61] = b),
      (n[62] = w),
      (n[63] = V),
      (n[64] = q),
      (n[65] = J),
      (n[66] = P),
      (n[67] = Y))
    : (Y = n[67]);
  let X;
  n[68] !== k || n[69] !== Y || n[70] !== pe
    ? ((X = (0, I.jsx)(ae, { tooltipContent: k, open: pe, closeOnTriggerClick: !0, children: Y })),
      (n[68] = k),
      (n[69] = Y),
      (n[70] = pe),
      (n[71] = X))
    : (X = n[71]);
  let Z;
  n[72] !== u || n[73] !== X || n[74] !== M || n[75] !== N
    ? ((Z = (0, I.jsx)(`div`, { className: M, "data-saved": u, "data-state": N, children: X })),
      (n[72] = u),
      (n[73] = X),
      (n[74] = M),
      (n[75] = N),
      (n[76] = Z))
    : (Z = n[76]);
  let Ae;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (e) => {
        (e.preventDefault(), le.current?.focus());
      }),
      (n[77] = Ae))
    : (Ae = n[77]);
  let Q;
  n[78] !== g || n[79] !== v.query
    ? ((Q = async (e) => {
        await v.query.cancel(D);
        let t = !1;
        (v.query.setData(
          D,
          (n) => (
            (t = n == null),
            [...(n ?? []).filter((t) => t.id !== e.id), { ...e, kind: `directory` }].sort(me)
          ),
        ),
          t && v.query.invalidate(D),
          await g(e, !0));
      }),
      (n[78] = g),
      (n[79] = v.query),
      (n[80] = Q))
    : (Q = n[80]);
  let $;
  n[81] !== S || n[82] !== v.value.accountId || n[83] !== v.value.userId || n[84] !== Q
    ? (($ = (0, I.jsx)(fe, {
        open: S,
        accountId: v.value.accountId,
        userId: v.value.userId,
        directoryId: null,
        onOpenChange: oe,
        onCloseAutoFocus: Ae,
        onCreated: Q,
      })),
      (n[81] = S),
      (n[82] = v.value.accountId),
      (n[83] = v.value.userId),
      (n[84] = Q),
      (n[85] = $))
    : ($ = n[85]);
  let je;
  return (
    n[86] !== Z || n[87] !== $
      ? ((je = (0, I.jsxs)(I.Fragment, { children: [Z, $] })), (n[86] = Z), (n[87] = $), (n[88] = je))
      : (je = n[88]),
    je
  );
}
function me(e, t) {
  return e.name.localeCompare(t.name);
}
function he(e) {
  e.preventDefault();
}
function ge(e) {
  let t = (0, _e.c)(16),
    { focusCreateFolder: n, isBusy: r, selectedFolderId: i, onSelectFolder: a } = e,
    { data: c, isPending: l, isError: u, refetch: d } = ee(D);
  if (l) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, I.jsx)(p.Message, {
            role: `status`,
            children: (0, I.jsx)(s, {
              id: `library.favoriteFolder.loading`,
              defaultMessage: `Loading folders…`,
              description: `Status in the favorite folder menu while personal Library folders load`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (u && c == null) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, I.jsx)(p.Message, {
          role: `alert`,
          tone: `error`,
          children: (0, I.jsx)(s, {
            id: `library.favoriteFolder.failed`,
            defaultMessage: `Could not load folders`,
            description: `Error in the favorite folder menu; the user can retry loading folders`,
          }),
        })),
        (t[1] = e))
      : (e = t[1]);
    let r;
    t[2] !== n || t[3] !== d
      ? ((r = (e) => {
          (e.preventDefault(), n(), d());
        }),
        (t[2] = n),
        (t[3] = d),
        (t[4] = r))
      : (r = t[4]);
    let i;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, I.jsx)(s, {
          id: `library.favoriteFolder.retry`,
          defaultMessage: `Try again`,
          description: `Action that retries loading Library folders while keeping the favorite folder menu open`,
        })),
        (t[5] = i))
      : (i = t[5]);
    let a;
    return (
      t[6] === r
        ? (a = t[7])
        : ((a = (0, I.jsxs)(I.Fragment, { children: [e, (0, I.jsx)(p.Item, { onSelect: r, children: i })] })),
          (t[6] = r),
          (t[7] = a)),
      a
    );
  }
  if (c?.length === 0) {
    let e;
    return (
      t[8] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, I.jsx)(p.Message, {
            role: `status`,
            children: (0, I.jsx)(s, {
              id: `library.favoriteFolder.empty`,
              defaultMessage: `No folders created yet`,
              description: `Empty state in the favorite folder menu; Create folder is still available`,
            }),
          })),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let f;
  t[9] !== c || t[10] !== r || t[11] !== a || t[12] !== i
    ? ((f = c?.map((e) =>
        (0, I.jsx)(
          p.Item,
          {
            role: `menuitemcheckbox`,
            "aria-checked": i === e.id,
            isActive: i === e.id,
            disabled: r,
            onSelect: () =>
              void a({ id: e.id, name: e.name, parent_directory_id: e.parent_directory_id }, !1),
            children: (0, I.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, I.jsx)(P, { imageUrl: e.thumbnail_url ?? null }),
                (0, I.jsx)(`span`, {
                  className: `line-clamp-2 min-w-0 flex-1 whitespace-normal`,
                  children: e.name,
                }),
                (0, I.jsx)(o, { className: i === e.id ? void 0 : `invisible` }),
              ],
            }),
          },
          e.id,
        ),
      )),
      (t[9] = c),
      (t[10] = r),
      (t[11] = a),
      (t[12] = i),
      (t[13] = f))
    : (f = t[13]);
  let m;
  return (
    t[14] === f ? (m = t[15]) : ((m = (0, I.jsx)(I.Fragment, { children: f })), (t[14] = f), (t[15] = m)),
    m
  );
}
function P(e) {
  let t = (0, _e.c)(8),
    { imageUrl: n } = e,
    [r, i] = (0, F.useState)(null),
    a = n != null && n !== r,
    o = !a && `border border-default bg-surface`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = ne(`flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg`, o)),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] !== n || t[3] !== a
    ? ((c = a
        ? (0, I.jsx)(`img`, {
            alt: ``,
            className: `size-full object-cover`,
            loading: `lazy`,
            src: n,
            onError: () => i(n),
          })
        : (0, I.jsx)(oe, {})),
      (t[2] = n),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== s || t[6] !== c
      ? ((l = (0, I.jsx)(`span`, { "aria-hidden": `true`, className: s, children: c })),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
var _e, F, I, ve;
function L() {
  return (L = e(() => {
    ((_e = se()),
      y(),
      v(),
      n(),
      h(),
      d(),
      (F = w()),
      b(),
      S(),
      r(),
      u(),
      f(),
      g(),
      T(),
      N(),
      E(),
      (I = C()),
      (ve = {
        "entity-header": {
          color: `ghostActive`,
          focusRing: `inset`,
          radius: `default`,
          size: `entityHeader`,
        },
        "media-overlay": { color: `mediaOverlay`, radius: `full`, size: `inputIcon` },
        "product-card": { color: `outlineSurface`, radius: `full`, size: `menuRow`, uniform: !0 },
        "map-card": { color: `mapSurface`, radius: `full`, size: `inputIcon` },
      }));
  }))();
}
export { L as n, pe as t };
//# sourceMappingURL=favorite-folder-menu-2542785c765c.js.map
