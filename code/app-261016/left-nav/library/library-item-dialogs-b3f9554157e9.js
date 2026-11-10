import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  HO as r,
  IO as i,
  JO as a,
  LNt as o,
  LO as s,
  Nst as c,
  PBt as l,
  Pst as u,
  RO as d,
  WO as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  aCt as _,
  eat as v,
  iCt as y,
  nCt as b,
  nat as x,
  okt as ee,
  qO as S,
  tkt as C,
  zO as te,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as ne,
  BRr as re,
  HRn as w,
  IRn as ie,
  Imt as ae,
  Kht as T,
  LS as E,
  Lpn as D,
  Nmt as oe,
  Oar as se,
  Ozn as O,
  RS as ce,
  SLn as le,
  TS as ue,
  US as de,
  VS as fe,
  Wht as k,
  Xfn as pe,
  Ypn as A,
  ZLn as me,
  _Xn as j,
  _ur as he,
  _x as M,
  bx as N,
  cmt as P,
  gur as ge,
  gx as _e,
  hXn as F,
  hvn as ve,
  kS as ye,
  kar as I,
  pur as L,
  rvn as R,
  tvn as be,
  umt as z,
  vLn as B,
  vx as V,
  wLr as H,
  xMr as xe,
  yMr as U,
  yx as Se,
  zvn as W,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ce, o as we, r as Te, t as Ee } from "./site-delete-confirmation-ef0a116df40a.js";
import { n as De, t as G } from "./library-delete-analytics-8d6586b5e73e.js";
import { t as Oe } from "./library-name-validation-5559e2ce17f6.js";
import { r as ke, t as Ae } from "./library-trash-analytics-87135fb4164d.js";
import { r as je, t as Me } from "./library-page-actions-12f0701c9fb5.js";
function Ne(e) {
  let t = (0, Pe.c)(20),
    { selection: n, pageCount: r, hasRetainedPages: i } = e,
    a = r === void 0 ? 0 : r,
    o = i !== void 0 && i,
    s = ee(),
    { files: c, folders: l, favorites: u, sites: d, retainedProviders: f, hasOtherRetainedItems: p } = n,
    m = f.size > 0 || p || o;
  if (a === 0 && d.length === 0 && l.length === 0 && !m) {
    if (u.length === 0) {
      let e;
      return (
        t[0] === c.length
          ? (e = t[1])
          : ((e = (0, K.jsx)(C, {
              id: `libraryNext.delete.trashFilesDescription`,
              defaultMessage: `{count, plural, one {This file will be moved to Trash and permanently deleted after 30 days} other {These files will be moved to Trash and permanently deleted after 30 days}}`,
              description: `Library file-only bulk delete confirmation. count controls singular or plural wording; Trash retains files for 30 days.`,
              values: { count: c.length },
            })),
            (t[0] = c.length),
            (t[1] = e)),
        e
      );
    }
    if (c.length === 0) {
      let e;
      return (
        t[2] === u.length
          ? (e = t[3])
          : ((e = (0, K.jsx)(C, {
              id: `libraryNext.delete.favoritesDescription`,
              defaultMessage: `{count, plural, one {This item will be removed from your favorites and library} other {These items will be removed from your favorites and library}}`,
              description: `Library favorites-only removal confirmation. count controls singular or plural wording; underlying entities and original conversations are not deleted.`,
              values: { count: u.length },
            })),
            (t[2] = u.length),
            (t[3] = e)),
        e
      );
    }
  }
  if (a === 0 && d.length === 0 && c.length === 0 && u.length === 0 && !m) {
    let e;
    return (
      t[4] === l.length
        ? (e = t[5])
        : ((e = (0, K.jsx)(C, {
            id: `libraryNext.delete.foldersDescription`,
            defaultMessage: `{count, plural, one {# folder and all its files and subfolders will be permanently deleted} other {# folders and all their files and subfolders will be permanently deleted}}`,
            description: `Library bulk delete confirmation for native folders. count is the number of selected folders; their nested contents are permanently deleted.`,
            values: { count: l.length },
          })),
          (t[4] = l.length),
          (t[5] = e)),
      e
    );
  }
  let h = d.length,
    g = c.length,
    _ = u.length,
    v = l.length,
    y = c.length + l.length > 0,
    b = f.size > 0,
    x;
  t[6] !== s || t[7] !== f ? ((x = s.formatList([...f])), (t[6] = s), (t[7] = f), (t[8] = x)) : (x = t[8]);
  let S;
  return (
    t[9] !== u.length ||
    t[10] !== c.length ||
    t[11] !== l.length ||
    t[12] !== p ||
    t[13] !== o ||
    t[14] !== a ||
    t[15] !== d.length ||
    t[16] !== y ||
    t[17] !== b ||
    t[18] !== x
      ? ((S = (0, K.jsx)(C, {
          id: `libraryNext.delete.mixedSelectionWithSitesDescription`,
          defaultMessage: `{siteCount, plural, =0 {} one {# site will be taken offline permanently and its uploaded data will be deleted. } other {# sites will be taken offline permanently and their uploaded data will be deleted. }}{pageCount, plural, =0 {} one {# page and its nested pages will be moved to Trash. } other {# pages and their nested pages will be moved to Trash. }}{fileCount, plural, =0 {} one {# file will be moved to Trash and permanently deleted after 30 days. } other {# files will be moved to Trash and permanently deleted after 30 days. }}{favoriteCount, plural, =0 {} one {# item will be removed from your favorites and library{hasFiles, select, true { immediately} other {}}. } other {# items will be removed from your favorites and library{hasFiles, select, true { immediately} other {}}. }}{folderCount, plural, =0 {} one {# folder and all its files and subfolders will be permanently deleted. } other {# folders and all their files and subfolders will be permanently deleted. }}{hasProviders, select, true {{providers} files can’t be deleted and will remain in your library. } other {}}{hasOtherRetainedItems, select, true {Items you don’t have permission to delete will remain in your library. } other {}}{hasRetainedPages, select, true {Pages you don’t have permission to delete will remain in your Space.} other {}}`,
          description: `Complete mixed-selection delete confirmation paragraph. siteCount counts selected Sites, whose deletion is permanent and deletes their uploaded data. pageCount counts deletable selected Pages, whose nested Pages also go to Trash. hasRetainedPages indicates selected Pages without delete permission that remain. Native files go to Trash for 30 days, favorites are removed without deleting original entities or conversations, and folders are permanently deleted with their contents. Zero-count categories are omitted. providers lists connected app brand names (such as Google Drive) whose files remain untouched; other items without delete permission also remain. hasFiles includes native files and folders. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: {
            pageCount: a,
            siteCount: h,
            hasRetainedPages: o,
            fileCount: g,
            favoriteCount: _,
            folderCount: v,
            hasFiles: y,
            hasProviders: b,
            providers: x,
            hasOtherRetainedItems: p,
          },
        })),
        (t[9] = u.length),
        (t[10] = c.length),
        (t[11] = l.length),
        (t[12] = p),
        (t[13] = o),
        (t[14] = a),
        (t[15] = d.length),
        (t[16] = y),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
var Pe, K;
function q() {
  return (q = e(() => {
    ((Pe = l()), p(), (K = o()));
  }))();
}
function Fe(e) {
  let t = [],
    n = [],
    r = [],
    i = [],
    a = new Set(),
    o = !1;
  for (let s of e)
    if (ue(s)) de(s) ? i.push(s) : fe(s) ? r.push(s) : s.node.kind === `directory` ? n.push(s) : t.push(s);
    else {
      let e = A(s),
        t = e === `native` || e === `native_shared` ? null : F(e);
      t == null ? (o = !0) : a.add(t);
    }
  return { files: t, folders: n, favorites: r, sites: i, retainedProviders: a, hasOtherRetainedItems: o };
}
function Ie() {
  return (Ie = e(() => {
    (j(), D(), ce());
  }))();
}
function Le(e) {
  let t = (0, Xe.c)(11),
    { accountId: n, userId: r, entry: i, initialName: a, onCloseAutoFocus: o, onClose: s } = e,
    c;
  t[0] !== n || t[1] !== r
    ? ((c = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = a ?? i.node.name,
    u;
  t[3] !== i || t[4] !== s || t[5] !== o || t[6] !== l
    ? ((u = (0, Z.jsx)(Re, { entry: i, initialName: l, onCloseAutoFocus: o, onClose: s })),
      (t[3] = i),
      (t[4] = s),
      (t[5] = o),
      (t[6] = l),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== c || t[9] !== u
      ? ((d = (0, Z.jsx)(_, { scope: pe, value: c, children: u })), (t[8] = c), (t[9] = u), (t[10] = d))
      : (d = t[10]),
    d
  );
}
function Re(e) {
  let n = (0, Xe.c)(82),
    { entry: r, initialName: a, onCloseAutoFocus: o, onClose: c } = e,
    l = t(pe),
    [u, p] = (0, X.useState)(!0),
    h;
  n[0] === c
    ? (h = n[1])
    : ((h = () => {
        (p(!1), c());
      }),
      (n[0] = c),
      (n[1] = h));
  let g = h,
    _;
  n[2] === r ? (_ = n[3]) : ((_ = de(r)), (n[2] = r), (n[3] = _));
  let v = _,
    x = y(ge),
    ne = y(re),
    w;
  n[4] !== r.node.kind || n[5] !== a || n[6] !== v
    ? ((w = !v && r.node.kind === `file` ? se(a) : null),
      (n[4] = r.node.kind),
      (n[5] = a),
      (n[6] = v),
      (n[7] = w))
    : (w = n[7]);
  let ie = w,
    ae;
  n[8] !== r.node.name || n[9] !== ie
    ? ((ae = ie == null ? `` : r.node.name.slice(r.node.name.lastIndexOf(`.`))),
      (n[8] = r.node.name),
      (n[9] = ie),
      (n[10] = ae))
    : (ae = n[10]);
  let T = ae,
    E;
  n[11] !== T.length || n[12] !== a
    ? ((E = () => a.slice(0, a.length - T.length)), (n[11] = T.length), (n[12] = a), (n[13] = E))
    : (E = n[13]);
  let [D, oe] = (0, X.useState)(E),
    O = ee(),
    ce = (0, X.useId)(),
    le = (0, X.useId)(),
    ue;
  n[14] === D ? (ue = n[15]) : ((ue = D.trim()), (n[14] = D), (n[15] = ue));
  let fe = ue,
    k = `${fe}${T}`,
    A;
  n[16] !== r.node.kind || n[17] !== O || n[18] !== D
    ? ((A = r.node.kind === `directory` ? Oe(O, D) : void 0),
      (n[16] = r.node.kind),
      (n[17] = O),
      (n[18] = D),
      (n[19] = A))
    : (A = n[19]);
  let j = A;
  if (!v && r.node.kind === `file` && fe && se(k) !== ie) {
    let e;
    (n[20] === O
      ? (e = n[21])
      : ((e = O.formatMessage({
          id: `libraryNext.rename.extensionChange`,
          defaultMessage: `File extensions cannot be changed`,
          description: `Inline error in the Library rename dialog when a new file name would change its extension, including adding one to a file that has none. Extensions determine how files are previewed.`,
        })),
        (n[20] = O),
        (n[21] = e)),
      (j = e));
  }
  let he = !fe || k === a || j != null || (v && (x !== l.value.accountId || ne !== (l.value.userId ?? null))),
    M = b(V, r.node.id),
    P;
  n[22] === o
    ? (P = n[23])
    : ((P = { "aria-describedby": void 0, onCloseAutoFocus: o }), (n[22] = o), (n[23] = P));
  let _e;
  n[24] !== g || n[25] !== M
    ? ((_e = (e) => {
        !e && !M && g();
      }),
      (n[24] = g),
      (n[25] = M),
      (n[26] = _e))
    : (_e = n[26]);
  let F;
  n[27] !== g || n[28] !== r || n[29] !== k || n[30] !== M || n[31] !== he || n[32] !== l
    ? ((F = (e) => {
        if ((e.preventDefault(), M || he)) return;
        let t = r.node.kind === `file` && ye(r),
          n = N(l, r, { type: `rename`, name: k });
        if (t) {
          g();
          return;
        }
        n.then((e) => {
          e && g();
        });
      }),
      (n[27] = g),
      (n[28] = r),
      (n[29] = k),
      (n[30] = M),
      (n[31] = he),
      (n[32] = l),
      (n[33] = F))
    : (F = n[33]);
  let ve;
  n[34] !== r.node.kind || n[35] !== v
    ? ((ve = (0, Z.jsx)(te, {
        children: (0, Z.jsx)(d, {
          title: (0, Z.jsx)(S, {
            children: v
              ? (0, Z.jsx)(C, {
                  id: `libraryNext.rename.siteTitle`,
                  defaultMessage: `Rename site`,
                  description: `Title of the dialog for changing a Site's display name, not its URL`,
                })
              : (0, Z.jsx)(C, {
                  id: `libraryNext.rename.itemTitle`,
                  defaultMessage: `{kind, select, directory {Rename folder} other {Rename file}}`,
                  description: `Title of the Library rename dialog. kind identifies whether the user is renaming a directory or a file.`,
                  values: { kind: r.node.kind },
                }),
          }),
        }),
      })),
      (n[34] = r.node.kind),
      (n[35] = v),
      (n[36] = ve))
    : (ve = n[36]);
  let I;
  n[37] !== r.node.kind || n[38] !== v
    ? ((I = v
        ? (0, Z.jsx)(C, {
            id: `libraryNext.rename.siteName`,
            defaultMessage: `Site name`,
            description: `Label for the Site display name in the rename dialog`,
          })
        : (0, Z.jsx)(C, {
            id: `libraryNext.rename.itemName`,
            defaultMessage: `{kind, select, directory {Folder name} other {File name}}`,
            description: `Label for the Library rename input. kind identifies a directory or file; only the file name is editable and its extension is preserved.`,
            values: { kind: r.node.kind },
          })),
      (n[37] = r.node.kind),
      (n[38] = v),
      (n[39] = I))
    : (I = n[39]);
  let L = v ? 100 : void 0,
    R = j != null,
    be = (j != null && ce) || (T && le) || void 0,
    z;
  n[40] !== T || n[41] !== le
    ? ((z = T
        ? (0, Z.jsx)(`span`, {
            id: le,
            className: `text-secondary select-none`,
            "aria-hidden": `true`,
            children: T,
          })
        : void 0),
      (n[40] = T),
      (n[41] = le),
      (n[42] = z))
    : (z = n[42]);
  let B;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => oe(e.target.value)), (n[43] = B))
    : (B = n[43]);
  let H;
  n[44] !== D || n[45] !== L || n[46] !== R || n[47] !== be || n[48] !== z
    ? ((H = (0, Z.jsx)(me, {
        autoFocus: !0,
        name: `name`,
        maxLength: L,
        autoComplete: `off`,
        "aria-invalid": R,
        "aria-describedby": be,
        trailingInlineControl: z,
        value: D,
        onChange: B,
        required: !0,
      })),
      (n[44] = D),
      (n[45] = L),
      (n[46] = R),
      (n[47] = be),
      (n[48] = z),
      (n[49] = H))
    : (H = n[49]);
  let xe;
  n[50] !== I || n[51] !== H
    ? ((xe = (0, Z.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [I, H] })),
      (n[50] = I),
      (n[51] = H),
      (n[52] = xe))
    : (xe = n[52]);
  let U;
  n[53] !== ce || n[54] !== j
    ? ((U =
        j == null ? null : (0, Z.jsx)(`p`, { id: ce, role: `alert`, className: `text-danger`, children: j })),
      (n[53] = ce),
      (n[54] = j),
      (n[55] = U))
    : (U = n[55]);
  let Se;
  n[56] !== xe || n[57] !== U
    ? ((Se = (0, Z.jsxs)(te, { children: [xe, U] })), (n[56] = xe), (n[57] = U), (n[58] = Se))
    : (Se = n[58]);
  let W;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Z.jsx)(C, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (n[59] = W))
    : (W = n[59]);
  let Ce;
  n[60] !== g || n[61] !== M
    ? ((Ce = (0, Z.jsx)(m, { color: `secondary`, disabled: M, onClick: g, children: W })),
      (n[60] = g),
      (n[61] = M),
      (n[62] = Ce))
    : (Ce = n[62]);
  let we;
  n[63] === M
    ? (we = n[64])
    : ((we = (0, Z.jsx)(C, {
        id: `libraryNext.rename.submitStatus`,
        defaultMessage: `{pending, select, true {Renaming…} other {Rename}}`,
        description: `Primary button in the Library rename dialog. pending is true while the rename request is in progress.`,
        values: { pending: M },
      })),
      (n[63] = M),
      (n[64] = we));
  let Te;
  n[65] !== M || n[66] !== he || n[67] !== we
    ? ((Te = (0, Z.jsx)(m, { type: `submit`, color: `primary`, loading: M, disabled: he, children: we })),
      (n[65] = M),
      (n[66] = he),
      (n[67] = we),
      (n[68] = Te))
    : (Te = n[68]);
  let Ee;
  n[69] !== Ce || n[70] !== Te
    ? ((Ee = (0, Z.jsx)(te, { children: (0, Z.jsxs)(s, { children: [Ce, Te] }) })),
      (n[69] = Ce),
      (n[70] = Te),
      (n[71] = Ee))
    : (Ee = n[71]);
  let De;
  n[72] !== F || n[73] !== ve || n[74] !== Se || n[75] !== Ee
    ? ((De = (0, Z.jsxs)(i, { as: `form`, onSubmit: F, children: [ve, Se, Ee] })),
      (n[72] = F),
      (n[73] = ve),
      (n[74] = Se),
      (n[75] = Ee),
      (n[76] = De))
    : (De = n[76]);
  let G;
  return (
    n[77] !== u || n[78] !== De || n[79] !== P || n[80] !== _e
      ? ((G = (0, Z.jsx)(f, {
          open: u,
          showDialogClose: !1,
          contentProps: P,
          onOpenChange: _e,
          children: De,
        })),
        (n[77] = u),
        (n[78] = De),
        (n[79] = P),
        (n[80] = _e),
        (n[81] = G))
      : (G = n[81]),
    G
  );
}
function J(e) {
  let t = (0, Xe.c)(18),
    {
      accountId: n,
      userId: r,
      analyticsContext: i,
      viewMode: a,
      libraryOrigin: o,
      entries: s,
      pages: c,
      hasRetainedPages: l,
      bulk: u,
      action: d,
      onCompleted: f,
      onOptimisticallyRemoved: p,
      onClose: m,
    } = e,
    h = o === void 0 ? P : o,
    g = l !== void 0 && l,
    v = u !== void 0 && u,
    y = d === void 0 ? `delete` : d,
    b;
  t[0] !== n || t[1] !== r
    ? ((b = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = b))
    : (b = t[2]);
  let x;
  t[3] !== y ||
  t[4] !== i ||
  t[5] !== v ||
  t[6] !== s ||
  t[7] !== g ||
  t[8] !== h ||
  t[9] !== m ||
  t[10] !== f ||
  t[11] !== p ||
  t[12] !== c ||
  t[13] !== a
    ? ((x = (0, Z.jsx)(Y, {
        onClose: m,
        analyticsContext: i,
        viewMode: a,
        libraryOrigin: h,
        entries: s,
        pages: c,
        hasRetainedPages: g,
        bulk: v,
        action: y,
        onCompleted: f,
        onOptimisticallyRemoved: p,
      })),
      (t[3] = y),
      (t[4] = i),
      (t[5] = v),
      (t[6] = s),
      (t[7] = g),
      (t[8] = h),
      (t[9] = m),
      (t[10] = f),
      (t[11] = p),
      (t[12] = c),
      (t[13] = a),
      (t[14] = x))
    : (x = t[14]);
  let ee;
  return (
    t[15] !== b || t[16] !== x
      ? ((ee = (0, Z.jsx)(_, { scope: pe, value: b, children: x })), (t[15] = b), (t[16] = x), (t[17] = ee))
      : (ee = t[17]),
    ee
  );
}
function Y(e) {
  let n = (0, Xe.c)(123),
    {
      onClose: r,
      analyticsContext: a,
      viewMode: o,
      libraryOrigin: s,
      entries: c,
      pages: l,
      hasRetainedPages: d,
      bulk: p,
      action: h,
      onCompleted: g,
      onOptimisticallyRemoved: _,
    } = e,
    b = d !== void 0 && d,
    x = t(pe),
    S = ee(),
    [ne, T] = (0, X.useState)(!0),
    E;
  n[0] === r
    ? (E = n[1])
    : ((E = () => {
        (T(!1), r());
      }),
      (n[0] = r),
      (n[1] = E));
  let D = E,
    oe = y(ge),
    se = y(re),
    [O, ce] = (0, X.useState)(c),
    fe;
  n[2] === l ? (fe = n[3]) : ((fe = l ?? []), (n[2] = l), (n[3] = fe));
  let [A, me] = (0, X.useState)(fe),
    j = le(),
    M = A.length > 0,
    N = h === `restore`,
    P = h === `deleteForever`,
    [F, ye] = (0, X.useState)(!1),
    I = Fe(O),
    [L, R] = (0, X.useState)(``),
    z = !p && c.length === 1 && (l?.length ?? 0) === 0,
    B = oe === x.value.accountId && se === (x.value.userId ?? null),
    V = (h === `delete` ? I.sites : []).flatMap(Je),
    H;
  n[4] !== B || n[5] !== x
    ? ((H = (e) => {
        let { projectId: t } = e;
        return {
          queryKey: [...ve, t, x.value.accountId, x.value.userId],
          queryFn: (e) => {
            let { signal: n } = e;
            return be(t, n, x.get(ae));
          },
          enabled: B,
          retry: !1,
          staleTime: 0,
        };
      }),
      (n[4] = B),
      (n[5] = x),
      (n[6] = H))
    : (H = n[6]);
  let U = u({ queries: (z ? V : []).map(H) }, x.queryClient),
    W;
  n[7] === U ? (W = n[8]) : ((W = U.every(qe)), (n[7] = U), (n[8] = W));
  let Te = W,
    G;
  if (n[9] !== L || n[10] !== U) {
    let e;
    (n[12] === L
      ? (e = n[13])
      : ((e = (e) => {
          let { data: t, isError: n } = e;
          return n || (t != null && we(t.slug, L));
        }),
        (n[12] = L),
        (n[13] = e)),
      (G = U.every(e)),
      (n[9] = L),
      (n[10] = U),
      (n[11] = G));
  } else G = n[11];
  let Oe = G,
    Ae;
  n[14] !== z || n[15] !== U
    ? ((Ae = (e, t) => {
        let { entry: n } = e;
        return !z || (U[t].data != null && !U[t].isError) ? [n.node.id] : [];
      }),
      (n[14] = z),
      (n[15] = U),
      (n[16] = Ae))
    : (Ae = n[16]);
  let je = new Set(V.flatMap(Ae)),
    Pe = V.length > 0 && (!B || !Te || !Oe),
    K = h === `delete` ? O.filter((e) => ue(e) && (!de(e) || je.has(e.node.id))) : O,
    q = h === `delete` ? [...I.files, ...I.folders] : O.filter(Ke),
    Ie = I.folders.length > 0,
    Le = !p && Ie && O.length === 1,
    Re = h === `delete` && I.favorites.length > 0,
    J = q.length > 0,
    Y = V.length > 0,
    Q;
  if (Y && z && !M && !b && !J && !Re && I.retainedProviders.size === 0 && !I.hasOtherRetainedItems) Q = null;
  else if (M || b || Y) {
    let e;
    (n[17] !== b || n[18] !== A.length || n[19] !== I
      ? ((e = (0, Z.jsx)(Ne, { selection: I, pageCount: A.length, hasRetainedPages: b })),
        (n[17] = b),
        (n[18] = A.length),
        (n[19] = I),
        (n[20] = e))
      : (e = n[20]),
      (Q = e));
  } else if (O.some(Ge)) {
    let e;
    (n[21] === N
      ? (e = n[22])
      : ((e = (0, Z.jsx)(`p`, {
          children: N
            ? (0, Z.jsx)(C, {
                id: `libraryNext.restore.spaceContentsDescription`,
                defaultMessage: `The selected items and their contents will be restored`,
                description: `Confirmation in Trash when the selection includes a deleted Space. Restoring the Space also restores its contents archived with it.`,
              })
            : (0, Z.jsx)(C, {
                id: `libraryNext.delete.foreverSpaceContentsDescription`,
                defaultMessage: `The selected items and their contents will be deleted forever. This can't be undone.`,
                description: `Irreversible deletion confirmation in Trash when the selection includes a Space. Deletion includes the contents of each selected Space.`,
              }),
        })),
        (n[21] = N),
        (n[22] = e)),
      (Q = e));
  } else if (N) {
    if (O.length === 1) {
      let e;
      (n[23] !== S || n[24] !== j || n[25] !== O[0]
        ? ((e = j
            ? (0, Z.jsx)(C, {
                id: `libraryNext.restore.fileDescription.space`,
                defaultMessage: `"{name}" will be restored to your Space`,
                description: `Confirmation before restoring one file from Space Trash. name is the full file name. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                values: { name: O[0].node.name || k(O[0], S) },
              })
            : (0, Z.jsx)(C, {
                id: `libraryNext.restore.fileDescription`,
                defaultMessage: `"{name}" will be restored to your Library`,
                description: `Confirmation before restoring one file from Library Trash. name is the full file name.`,
                values: { name: O[0].node.name || k(O[0], S) },
              })),
          (n[23] = S),
          (n[24] = j),
          (n[25] = O[0]),
          (n[26] = e))
        : (e = n[26]),
        (Q = e));
    } else {
      let e;
      (n[27] !== j || n[28] !== O.length
        ? ((e = j
            ? (0, Z.jsx)(C, {
                id: `libraryNext.restore.filesDescription.space`,
                defaultMessage: `These {count} selected items will be restored to your Space`,
                description: `Confirmation before restoring multiple files from Space Trash. count is the number of selected files, always greater than one. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                values: { count: O.length },
              })
            : (0, Z.jsx)(C, {
                id: `libraryNext.restore.filesDescription`,
                defaultMessage: `These {count} selected items will be restored to your Library`,
                description: `Confirmation before restoring multiple files from Library Trash. count is the number of selected files, always greater than one.`,
                values: { count: O.length },
              })),
          (n[27] = j),
          (n[28] = O.length),
          (n[29] = e))
        : (e = n[29]),
        (Q = e));
    }
    let e;
    (n[30] === Q ? (e = n[31]) : ((e = (0, Z.jsx)(`p`, { children: Q })), (n[30] = Q), (n[31] = e)), (Q = e));
  } else if (P) {
    let e;
    (n[32] !== S || n[33] !== O[0] || n[34] !== O.length
      ? ((e = (0, Z.jsx)(`p`, {
          children:
            O.length === 1
              ? (0, Z.jsx)(C, {
                  id: `libraryNext.delete.foreverFileDescription`,
                  defaultMessage: `"{name}" will be deleted forever. This can't be undone.`,
                  description: `Irreversible deletion confirmation for one Library Trash file. name is the full file name.`,
                  values: { name: O[0].node.name || k(O[0], S) },
                })
              : (0, Z.jsx)(C, {
                  id: `libraryNext.delete.foreverFilesDescription`,
                  defaultMessage: `These {count} selected items will be deleted forever. This can't be undone.`,
                  description: `Irreversible deletion confirmation for multiple Library Trash files. count is the selected file count, always greater than one.`,
                  values: { count: O.length },
                }),
        })),
        (n[32] = S),
        (n[33] = O[0]),
        (n[34] = O.length),
        (n[35] = e))
      : (e = n[35]),
      (Q = e));
  } else if (Le) {
    let e;
    (n[36] === O[0].node.name
      ? (e = n[37])
      : ((e = (0, Z.jsx)(`p`, {
          children: (0, Z.jsx)(C, {
            id: `libraryNext.delete.folderDescription`,
            defaultMessage: `"{name}" will be permanently deleted with all files and subfolders.`,
            description: `Body of the Library folder delete confirmation. name is the folder's full name; deleting it removes all nested contents permanently.`,
            values: { name: O[0].node.name },
          }),
        })),
        (n[36] = O[0].node.name),
        (n[37] = e)),
      (Q = e));
  } else if (p || O.length > 1 || Re) {
    let e;
    (n[38] === I ? (e = n[39]) : ((e = (0, Z.jsx)(Ne, { selection: I })), (n[38] = I), (n[39] = e)), (Q = e));
  } else {
    let e;
    (n[40] === O[0].node.name
      ? (e = n[41])
      : ((e = (0, Z.jsx)(`p`, {
          children: (0, Z.jsx)(C, {
            id: `libraryNext.delete.fileDescription`,
            defaultMessage: `"<bold>{fileName}</bold>" will be moved to Trash and permanently deleted after 30 days.`,
            description: `Body before deleting one Library file. fileName is its full name, rendered in bold; the file is soft-deleted for 30 days.`,
            values: { fileName: O[0].node.name, bold: We },
          }),
        })),
        (n[40] = O[0].node.name),
        (n[41] = e)),
      (Q = e));
  }
  let $;
  if (Y) {
    let e;
    (n[42] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.sitesTitle`,
          defaultMessage: `Delete selected items?`,
          description: `Confirmation title for permanent Site deletion, possibly together with Pages, files or favorites`,
        })),
        (n[42] = e))
      : (e = n[42]),
      ($ = e));
  } else if (M) {
    let e;
    (n[43] !== O.length || n[44] !== A.length
      ? ((e =
          O.length === 0
            ? (0, Z.jsx)(C, {
                id: `libraryNext.delete.countedPagesTitle`,
                defaultMessage: `{count, plural, one {Delete # page?} other {Delete # pages?}}`,
                description: `Confirmation title for deleting selected Pages; count excludes nested Pages that were not explicitly selected`,
                values: { count: A.length },
              })
            : (0, Z.jsx)(C, {
                id: `libraryNext.delete.selectedItemsTitle`,
                defaultMessage: `Delete selected items?`,
                description: `Confirmation title for deleting a selection containing Pages and possibly Library files or folders`,
              })),
        (n[43] = O.length),
        (n[44] = A.length),
        (n[45] = e))
      : (e = n[45]),
      ($ = e));
  } else if (N) {
    let e;
    (n[46] === O.length
      ? (e = n[47])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.restore.title`,
          defaultMessage: `{count, plural, one {Restore item} other {Restore selected items}}`,
          description: `Confirmation title before restoring Library Trash files. count is the selected file count.`,
          values: { count: O.length },
        })),
        (n[46] = O.length),
        (n[47] = e)),
      ($ = e));
  } else if (P) {
    let e;
    (n[48] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.foreverTitle`,
          defaultMessage: `Delete forever`,
          description: `Title of the irreversible deletion confirmation for Library Trash files`,
        })),
        (n[48] = e))
      : (e = n[48]),
      ($ = e));
  } else if (Re) {
    let e;
    (n[49] !== J || n[50] !== I.favorites
      ? ((e = J
          ? (0, Z.jsx)(C, {
              id: `libraryNext.delete.mixedTitle`,
              defaultMessage: `Delete files and remove favorites?`,
              description: `Library confirmation title when deleting native files or folders and removing saved entities or responses from Favorites and Library`,
            })
          : (0, Z.jsx)(C, {
              id: `libraryNext.delete.favoritesTitle`,
              defaultMessage: `{count, plural, one {Remove # favorite?} other {Remove # favorites?}}`,
              description: `Library favorites-only removal title. count excludes connected and read-only items that remain in Library.`,
              values: { count: I.favorites.length },
            })),
        (n[49] = J),
        (n[50] = I.favorites),
        (n[51] = e))
      : (e = n[51]),
      ($ = e));
  } else if (Ie) {
    let e;
    (n[52] === O.length
      ? (e = n[53])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.folderTitle`,
          defaultMessage: `{count, plural, one {Delete folder} other {Delete selected items}}`,
          description: `Library delete confirmation title when the selection contains folders. count is the total selected item count.`,
          values: { count: O.length },
        })),
        (n[52] = O.length),
        (n[53] = e)),
      ($ = e));
  } else if (p) {
    let e;
    (n[54] === I.files.length
      ? (e = n[55])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.countedFilesTitle`,
          defaultMessage: `{count, plural, one {Delete # file?} other {Delete # files?}}`,
          description: `Library bulk delete title. count includes only native files that will be deleted, excluding retained files and removed favorites.`,
          values: { count: I.files.length },
        })),
        (n[54] = I.files.length),
        (n[55] = e)),
      ($ = e));
  } else {
    let e;
    (n[56] === O.length
      ? (e = n[57])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.filesTitle`,
          defaultMessage: `{count, plural, one {Delete file?} other {Delete files?}}`,
          description: `Confirmation title before deleting Library files. count is the selected file count.`,
          values: { count: O.length },
        })),
        (n[56] = O.length),
        (n[57] = e)),
      ($ = e));
  }
  let Ze;
  if (N || P) {
    let e;
    (n[58] === h
      ? (e = n[59])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.trash.confirmAction`,
          defaultMessage: `{action, select, restore {Restore} other {Delete forever}}`,
          description: `Confirmation button for a Library Trash action. action is restore for a reversible restoration or deleteForever for irreversible deletion.`,
          values: { action: h },
        })),
        (n[58] = h),
        (n[59] = e)),
      (Ze = e));
  } else if (Re) {
    let e = J || Y,
      t;
    (n[60] === e
      ? (t = n[61])
      : ((t = (0, Z.jsx)(C, {
          id: `libraryNext.delete.confirmFavorites`,
          defaultMessage: `{hasFiles, select, true {Delete and remove} other {Remove}}`,
          description: `Library confirmation button. hasFiles is true when native files or folders are deleted in addition to removing saved favorites. Otherwise only favorites are removed.`,
          values: { hasFiles: e },
        })),
        (n[60] = e),
        (n[61] = t)),
      (Ze = t));
  } else if (Y && !J && !M) {
    let e;
    (n[62] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(C, {
          id: `appgenSettings.deleteDialog.confirm`,
          defaultMessage: `Permanently delete`,
          description: `Confirm button label for delete site confirmation dialog`,
        })),
        (n[62] = e))
      : (e = n[62]),
      (Ze = e));
  } else {
    let e;
    (n[63] === Le
      ? (e = n[64])
      : ((e = (0, Z.jsx)(C, {
          id: `libraryNext.delete.confirmItems`,
          defaultMessage: `{singleFolder, select, true {Delete folder} other {Delete}}`,
          description: `Destructive button in the Library delete confirmation. singleFolder is true only when deleting one folder.`,
          values: { singleFolder: Le },
        })),
        (n[63] = Le),
        (n[64] = e)),
      (Ze = e));
  }
  if (c.some(Ue) && (oe !== x.value.accountId || se !== (x.value.userId ?? null))) return null;
  let Qe;
  n[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = { "aria-describedby": void 0 }), (n[65] = Qe))
    : (Qe = n[65]);
  let $e;
  n[66] !== D || n[67] !== F
    ? (($e = (e) => {
        !e && !F && D();
      }),
      (n[66] = D),
      (n[67] = F),
      (n[68] = $e))
    : ($e = n[68]);
  let et;
  n[69] !== h ||
  n[70] !== K ||
  n[71] !== a ||
  n[72] !== D ||
  n[73] !== Pe ||
  n[74] !== J ||
  n[75] !== M ||
  n[76] !== Y ||
  n[77] !== s ||
  n[78] !== q ||
  n[79] !== g ||
  n[80] !== _ ||
  n[81] !== F ||
  n[82] !== P ||
  n[83] !== O ||
  n[84] !== A ||
  n[85] !== N ||
  n[86] !== x ||
  n[87] !== o
    ? ((et = (e) => {
        if ((e.preventDefault(), F || Pe || (K.length === 0 && !M))) return;
        if ((ye(!0), P && J)) ke(x, q);
        else if (h === `delete` && J) {
          let e = { artifactIds: q.flatMap(He), directoryIds: q.flatMap(Ve) };
          xe(x, ie, {
            ...(JSON.stringify(e).length <= 2e3 ? e : {}),
            itemCount: v(q.length),
            libraryOrigin: s,
          });
        }
        !N && J && De(x, q, a, w.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE, P, s);
        let t = !N && !P ? K.filter((e) => _e(x, e)) : [],
          n = !Y && (t.length > 0 || M) && t.length === K.length,
          r = Y ? he(x, x.value.accountId, x.value.userId ?? null) : void 0,
          i = Promise.all([
            Se(
              x,
              K,
              N ? { type: `restore` } : { type: `delete`, permanently: P, viewMode: o, signal: r?.signal },
            ),
            h === `delete` && M ? Me(x, A) : Promise.resolve([]),
          ]).finally(() => r?.stop());
        ((t.length > 0 || M) && _?.([...t.map(Be), ...A.map(ze)]),
          n && (M ? setTimeout(D, 400) : D()),
          i.then((e) => {
            let [t, r] = e;
            g?.([...t, ...r]);
            let i = A.filter((e) => !r.includes(e.page_id));
            me(i);
            let o = K.filter((e) => {
              let { node: n } = e;
              return !t.includes(n.id);
            });
            if (!N && J) {
              let e = q.filter((e) => {
                  let { node: n } = e;
                  return !t.includes(n.id);
                }),
                n = w.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_PARTIAL;
              (e.length === 0
                ? (n = w.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED)
                : e.length === q.length && (n = w.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED),
                De(x, q, a, n, P, s));
            }
            if (!n) {
              ye(!1);
              let e = O.filter((e) => de(e) && !t.includes(e.node.id));
              o.length === 0 && i.length === 0 && e.length === 0
                ? D()
                : ce(
                    O.filter((e) => {
                      let { node: n } = e;
                      return !t.includes(n.id);
                    }),
                  );
            }
          }));
      }),
      (n[69] = h),
      (n[70] = K),
      (n[71] = a),
      (n[72] = D),
      (n[73] = Pe),
      (n[74] = J),
      (n[75] = M),
      (n[76] = Y),
      (n[77] = s),
      (n[78] = q),
      (n[79] = g),
      (n[80] = _),
      (n[81] = F),
      (n[82] = P),
      (n[83] = O),
      (n[84] = A),
      (n[85] = N),
      (n[86] = x),
      (n[87] = o),
      (n[88] = et))
    : (et = n[88]);
  let tt = $,
    nt = Q,
    rt;
  if (n[89] !== L || n[90] !== F || n[91] !== B || n[92] !== R || n[93] !== U || n[94] !== V) {
    let e;
    (n[96] !== L || n[97] !== F || n[98] !== B || n[99] !== R || n[100] !== V
      ? ((e = (e, t) => {
          let { data: n, isPending: r, isFetching: i, isError: a, refetch: o } = e,
            { entry: s } = V[t];
          return (0, Z.jsxs)(
            te,
            {
              children: [
                n == null
                  ? null
                  : (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(`p`, { children: (0, Z.jsx)(Ce, { siteSlug: n.slug }) }),
                        (0, Z.jsx)(Ee, {
                          siteSlug: n.slug,
                          confirmationSlug: L,
                          onChange: R,
                          pending: F || !B || i,
                          autoFocus: t === 0,
                        }),
                      ],
                    }),
                n == null && r
                  ? (0, Z.jsx)(C, {
                      id: `libraryNext.delete.loadingSite`,
                      defaultMessage: `Checking Site owner access…`,
                      description: `Pending owner-authorized Site detail request in a delete confirmation`,
                    })
                  : null,
                a
                  ? (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(`p`, {
                          children: (0, Z.jsx)(C, {
                            id: `libraryNext.delete.siteUnavailable`,
                            defaultMessage: `{name} could not be confirmed for deletion and will remain in your Space`,
                            description: `Owner detail failed or access was denied for this selected Site; it is retained while other selected items can be deleted`,
                            values: { name: s.node.name },
                          }),
                        }),
                        (0, Z.jsx)(m, {
                          color: `secondary`,
                          disabled: F || !B || i,
                          onClick: () => void o(),
                          children: (0, Z.jsx)(C, {
                            id: `libraryNext.results.retry`,
                            defaultMessage: `Try again`,
                            description: `Retry fetching Library results`,
                          }),
                        }),
                      ],
                    })
                  : null,
              ],
            },
            s.node.id,
          );
        }),
        (n[96] = L),
        (n[97] = F),
        (n[98] = B),
        (n[99] = R),
        (n[100] = V),
        (n[101] = e))
      : (e = n[101]),
      (rt = U.map(e)),
      (n[89] = L),
      (n[90] = F),
      (n[91] = B),
      (n[92] = R),
      (n[93] = U),
      (n[94] = V),
      (n[95] = rt));
  } else rt = n[95];
  let it;
  n[102] === Le
    ? (it = n[103])
    : ((it = Le
        ? (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(C, {
              id: `libraryNext.delete.irreversible`,
              defaultMessage: `This can't be undone.`,
              description: `Warning below the Library folder delete confirmation`,
            }),
          })
        : null),
      (n[102] = Le),
      (n[103] = it));
  let at;
  n[104] !== Q || n[105] !== rt || n[106] !== it
    ? ((at = (0, Z.jsxs)(Z.Fragment, { children: [nt, rt, it] })),
      (n[104] = Q),
      (n[105] = rt),
      (n[106] = it),
      (n[107] = at))
    : (at = n[107]);
  let ot = Pe || (K.length === 0 && !M),
    st;
  n[108] !== D ||
  n[109] !== Ze ||
  n[110] !== F ||
  n[111] !== N ||
  n[112] !== at ||
  n[113] !== ot ||
  n[114] !== $
    ? ((st = (0, Z.jsx)(Ye, {
        title: tt,
        description: at,
        pending: F,
        confirmDisabled: ot,
        restore: N,
        confirmLabel: Ze,
        onClose: D,
      })),
      (n[108] = D),
      (n[109] = Ze),
      (n[110] = F),
      (n[111] = N),
      (n[112] = at),
      (n[113] = ot),
      (n[114] = $),
      (n[115] = st))
    : (st = n[115]);
  let ct;
  n[116] !== et || n[117] !== st
    ? ((ct = (0, Z.jsx)(i, { as: `form`, onSubmit: et, children: st })),
      (n[116] = et),
      (n[117] = st),
      (n[118] = ct))
    : (ct = n[118]);
  let lt;
  return (
    n[119] !== ne || n[120] !== ct || n[121] !== $e
      ? ((lt = (0, Z.jsx)(f, {
          open: ne,
          showDialogClose: !1,
          contentProps: Qe,
          onOpenChange: $e,
          children: ct,
        })),
        (n[119] = ne),
        (n[120] = ct),
        (n[121] = $e),
        (n[122] = lt))
      : (lt = n[122]),
    lt
  );
}
function ze(e) {
  return e.page_id;
}
function Be(e) {
  let { node: t } = e;
  return t.id;
}
function Ve(e) {
  let { node: t } = e;
  return t.kind === `directory` ? [t.id] : [];
}
function He(e) {
  let { node: t } = e;
  return t.kind === `file` && t.file_id != null ? [t.file_id] : [];
}
function Ue(e) {
  let { node: t, space: n } = e;
  return n != null || t.library_artifact_type === `page`;
}
function We(e) {
  return (0, Z.jsx)(`strong`, { children: e });
}
function Ge(e) {
  return e.space != null;
}
function Ke(e) {
  let { node: t, space: n } = e;
  return n == null && t.library_artifact_type !== `page`;
}
function qe(e) {
  let { isPending: t, isFetching: n } = e;
  return !t && !n;
}
function Je(e) {
  let t = E(e);
  return t == null ? [] : [{ entry: e, projectId: t }];
}
function Ye(e) {
  let t = (0, Xe.c)(20),
    { title: n, description: r, pending: i, confirmDisabled: a, restore: o, confirmLabel: c, onClose: l } = e,
    u = a !== void 0 && a,
    f;
  t[0] === n
    ? (f = t[1])
    : ((f = (0, Z.jsx)(te, { children: (0, Z.jsx)(d, { title: (0, Z.jsx)(S, { children: n }) }) })),
      (t[0] = n),
      (t[1] = f));
  let p;
  t[2] === r ? (p = t[3]) : ((p = (0, Z.jsx)(te, { children: r })), (t[2] = r), (t[3] = p));
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(C, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== l || t[6] !== i
    ? ((g = (0, Z.jsx)(m, { color: `secondary`, disabled: i, onClick: l, children: h })),
      (t[5] = l),
      (t[6] = i),
      (t[7] = g))
    : (g = t[7]);
  let _ = o ? `primary` : `dangerSolid`,
    v;
  t[8] !== u || t[9] !== c || t[10] !== i || t[11] !== _
    ? ((v = (0, Z.jsx)(m, { type: `submit`, color: _, loading: i, disabled: u, children: c })),
      (t[8] = u),
      (t[9] = c),
      (t[10] = i),
      (t[11] = _),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== g || t[14] !== v
    ? ((y = (0, Z.jsx)(te, { children: (0, Z.jsxs)(s, { children: [g, v] }) })),
      (t[13] = g),
      (t[14] = v),
      (t[15] = y))
    : (y = t[15]);
  let b;
  return (
    t[16] !== f || t[17] !== p || t[18] !== y
      ? ((b = (0, Z.jsxs)(Z.Fragment, { children: [f, p, y] })),
        (t[16] = f),
        (t[17] = p),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
var Xe, X, Z;
function Q() {
  return (Q = e(() => {
    ((Xe = l()),
      O(),
      x(),
      c(),
      g(),
      (X = n()),
      p(),
      W(),
      R(),
      Te(),
      H(),
      h(),
      a(),
      r(),
      ne(),
      I(),
      B(),
      L(),
      je(),
      U(),
      z(),
      oe(),
      T(),
      G(),
      q(),
      Ie(),
      M(),
      ce(),
      Ae(),
      (Z = o()));
  }))();
}
Q();
export {
  J as ConfirmLibraryItemsDialog,
  Ye as LibraryItemConfirmationContent,
  Le as RenameLibraryItemDialog,
};
//# sourceMappingURL=library-item-dialogs-b3f9554157e9.js.map
