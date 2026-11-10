import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Brt as n,
  Hxt as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  Qot as s,
  Rrt as c,
  VDt as l,
  Vxt as u,
  Zot as d,
  _O as f,
  cO as p,
  fO as m,
  jDt as h,
  lO as g,
  mO as _,
  oO as v,
  sO as y,
  t3 as b,
  vO as x,
  vzt as S,
  xMt as C,
  yzt as w,
  zxt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ft as te,
  DPn as ne,
  Dor as re,
  Dpt as ie,
  Fhn as ae,
  Fmt as T,
  Gb as E,
  Hln as D,
  Jb as oe,
  KKn as O,
  KNn as se,
  Kb as ce,
  Lhn as k,
  Nmt as le,
  Oor as ue,
  QDr as de,
  TPn as fe,
  WKn as A,
  Wb as pe,
  XDr as j,
  XMr as me,
  XNn as he,
  Yhn as M,
  Zx as ge,
  cS as N,
  eIn as P,
  eun as F,
  fS as _e,
  gFn as I,
  inr as ve,
  lS as L,
  qb as ye,
  rnr as R,
  tNr as z,
  tS as be,
  tln as xe,
  tpt as B,
  uFn as Se,
  uS as V,
  wor as H,
  wpt as U,
  ygn as W,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ce, o as we, r as Te, t as Ee } from "./site-delete-confirmation-b17089235f40.js";
import { n as De, t as G } from "./library-delete-analytics-c95d15e65c53.js";
import { t as Oe } from "./library-name-validation-5559e2ce17f6.js";
import { r as ke, t as Ae } from "./library-trash-analytics-b5f56547a9f3.js";
import { r as je, t as Me } from "./library-page-actions-8e021b2c2498.js";
function Ne(e) {
  let t = (0, Pe.c)(20),
    { selection: n, pageCount: r, hasRetainedPages: a } = e,
    o = r === void 0 ? 0 : r,
    s = a !== void 0 && a,
    c = l(),
    { files: u, folders: d, favorites: f, sites: p, retainedProviders: m, hasOtherRetainedItems: h } = n,
    g = m.size > 0 || h || s;
  if (o === 0 && p.length === 0 && d.length === 0 && !g) {
    if (f.length === 0) {
      let e;
      return (
        t[0] === u.length
          ? (e = t[1])
          : ((e = (0, K.jsx)(i, {
              id: `libraryNext.delete.trashFilesDescription`,
              defaultMessage: `{count, plural, one {This file will be moved to Trash and permanently deleted after 30 days} other {These files will be moved to Trash and permanently deleted after 30 days}}`,
              description: `Library file-only bulk delete confirmation. count controls singular or plural wording; Trash retains files for 30 days.`,
              values: { count: u.length },
            })),
            (t[0] = u.length),
            (t[1] = e)),
        e
      );
    }
    if (u.length === 0) {
      let e;
      return (
        t[2] === f.length
          ? (e = t[3])
          : ((e = (0, K.jsx)(i, {
              id: `libraryNext.delete.favoritesDescription`,
              defaultMessage: `{count, plural, one {This item will be removed from your favorites and library} other {These items will be removed from your favorites and library}}`,
              description: `Library favorites-only removal confirmation. count controls singular or plural wording; underlying entities and original conversations are not deleted.`,
              values: { count: f.length },
            })),
            (t[2] = f.length),
            (t[3] = e)),
        e
      );
    }
  }
  if (o === 0 && p.length === 0 && u.length === 0 && f.length === 0 && !g) {
    let e;
    return (
      t[4] === d.length
        ? (e = t[5])
        : ((e = (0, K.jsx)(i, {
            id: `libraryNext.delete.foldersDescription`,
            defaultMessage: `{count, plural, one {# folder and all its files and subfolders will be permanently deleted} other {# folders and all their files and subfolders will be permanently deleted}}`,
            description: `Library bulk delete confirmation for native folders. count is the number of selected folders; their nested contents are permanently deleted.`,
            values: { count: d.length },
          })),
          (t[4] = d.length),
          (t[5] = e)),
      e
    );
  }
  let _ = p.length,
    v = u.length,
    y = f.length,
    b = d.length,
    x = u.length + d.length > 0,
    S = m.size > 0,
    C;
  t[6] !== c || t[7] !== m ? ((C = c.formatList([...m])), (t[6] = c), (t[7] = m), (t[8] = C)) : (C = t[8]);
  let w;
  return (
    t[9] !== f.length ||
    t[10] !== u.length ||
    t[11] !== d.length ||
    t[12] !== h ||
    t[13] !== s ||
    t[14] !== o ||
    t[15] !== p.length ||
    t[16] !== x ||
    t[17] !== S ||
    t[18] !== C
      ? ((w = (0, K.jsx)(i, {
          id: `libraryNext.delete.mixedSelectionWithSitesDescription`,
          defaultMessage: `{siteCount, plural, =0 {} one {# site will be taken offline permanently and its uploaded data will be deleted. } other {# sites will be taken offline permanently and their uploaded data will be deleted. }}{pageCount, plural, =0 {} one {# page and its nested pages will be moved to Trash. } other {# pages and their nested pages will be moved to Trash. }}{fileCount, plural, =0 {} one {# file will be moved to Trash and permanently deleted after 30 days. } other {# files will be moved to Trash and permanently deleted after 30 days. }}{favoriteCount, plural, =0 {} one {# item will be removed from your favorites and library{hasFiles, select, true { immediately} other {}}. } other {# items will be removed from your favorites and library{hasFiles, select, true { immediately} other {}}. }}{folderCount, plural, =0 {} one {# folder and all its files and subfolders will be permanently deleted. } other {# folders and all their files and subfolders will be permanently deleted. }}{hasProviders, select, true {{providers} files can’t be deleted and will remain in your library. } other {}}{hasOtherRetainedItems, select, true {Items you don’t have permission to delete will remain in your library. } other {}}{hasRetainedPages, select, true {Pages you don’t have permission to delete will remain in your Space.} other {}}`,
          description: `Complete mixed-selection delete confirmation paragraph. siteCount counts selected Sites, whose deletion is permanent and deletes their uploaded data. pageCount counts deletable selected Pages, whose nested Pages also go to Trash. hasRetainedPages indicates selected Pages without delete permission that remain. Native files go to Trash for 30 days, favorites are removed without deleting original entities or conversations, and folders are permanently deleted with their contents. Zero-count categories are omitted. providers lists connected app brand names (such as Google Drive) whose files remain untouched; other items without delete permission also remain. hasFiles includes native files and folders. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          values: {
            pageCount: o,
            siteCount: _,
            hasRetainedPages: s,
            fileCount: v,
            favoriteCount: y,
            folderCount: b,
            hasFiles: x,
            hasProviders: S,
            providers: C,
            hasOtherRetainedItems: h,
          },
        })),
        (t[9] = f.length),
        (t[10] = u.length),
        (t[11] = d.length),
        (t[12] = h),
        (t[13] = s),
        (t[14] = o),
        (t[15] = p.length),
        (t[16] = x),
        (t[17] = S),
        (t[18] = C),
        (t[19] = w))
      : (w = t[19]),
    w
  );
}
var Pe, K;
function q() {
  return (q = e(() => {
    ((Pe = S()), h(), (K = C()));
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
    if (ge(s)) _e(s) ? i.push(s) : V(s) ? r.push(s) : s.node.kind === `directory` ? n.push(s) : t.push(s);
    else {
      let e = F(s),
        t = e === `native` || e === `native_shared` ? null : A(e);
      t == null ? (o = !0) : a.add(t);
    }
  return { files: t, folders: n, favorites: r, sites: i, retainedProviders: a, hasOtherRetainedItems: o };
}
function Ie() {
  return (Ie = e(() => {
    (O(), D(), L());
  }))();
}
function Le(e) {
  let t = (0, Xe.c)(11),
    { accountId: n, userId: i, entry: a, initialName: o, onCloseAutoFocus: s, onClose: c } = e,
    l;
  t[0] !== n || t[1] !== i
    ? ((l = { accountId: n, userId: i }), (t[0] = n), (t[1] = i), (t[2] = l))
    : (l = t[2]);
  let u = o ?? a.node.name,
    d;
  t[3] !== a || t[4] !== c || t[5] !== s || t[6] !== u
    ? ((d = (0, Z.jsx)(Re, { entry: a, initialName: u, onCloseAutoFocus: s, onClose: c })),
      (t[3] = a),
      (t[4] = c),
      (t[5] = s),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== l || t[9] !== d
      ? ((f = (0, Z.jsx)(r, { scope: xe, value: l, children: d })), (t[8] = l), (t[9] = d), (t[10] = f))
      : (f = t[10]),
    f
  );
}
function Re(e) {
  let n = (0, Xe.c)(82),
    { entry: r, initialName: o, onCloseAutoFocus: s, onClose: c } = e,
    d = a(xe),
    [m, h] = (0, X.useState)(!0),
    b;
  n[0] === c
    ? (b = n[1])
    : ((b = () => {
        (h(!1), c());
      }),
      (n[0] = c),
      (n[1] = b));
  let x = b,
    S;
  n[2] === r ? (S = n[3]) : ((S = _e(r)), (n[2] = r), (n[3] = S));
  let C = S,
    w = u(re),
    te = u(me),
    ne;
  n[4] !== r.node.kind || n[5] !== o || n[6] !== C
    ? ((ne = !C && r.node.kind === `file` ? R(o) : null),
      (n[4] = r.node.kind),
      (n[5] = o),
      (n[6] = C),
      (n[7] = ne))
    : (ne = n[7]);
  let ie = ne,
    ae;
  n[8] !== r.node.name || n[9] !== ie
    ? ((ae = ie == null ? `` : r.node.name.slice(r.node.name.lastIndexOf(`.`))),
      (n[8] = r.node.name),
      (n[9] = ie),
      (n[10] = ae))
    : (ae = n[10]);
  let T = ae,
    E;
  n[11] !== T.length || n[12] !== o
    ? ((E = () => o.slice(0, o.length - T.length)), (n[11] = T.length), (n[12] = o), (n[13] = E))
    : (E = n[13]);
  let [D, O] = (0, X.useState)(E),
    se = l(),
    k = (0, X.useId)(),
    le = (0, X.useId)(),
    ue;
  n[14] === D ? (ue = n[15]) : ((ue = D.trim()), (n[14] = D), (n[15] = ue));
  let de = ue,
    A = `${de}${T}`,
    pe;
  n[16] !== r.node.kind || n[17] !== se || n[18] !== D
    ? ((pe = r.node.kind === `directory` ? Oe(se, D) : void 0),
      (n[16] = r.node.kind),
      (n[17] = se),
      (n[18] = D),
      (n[19] = pe))
    : (pe = n[19]);
  let j = pe;
  if (!C && r.node.kind === `file` && de && R(A) !== ie) {
    let e;
    (n[20] === se
      ? (e = n[21])
      : ((e = se.formatMessage({
          id: `libraryNext.rename.extensionChange`,
          defaultMessage: `File extensions cannot be changed`,
          description: `Inline error in the Library rename dialog when a new file name would change its extension, including adding one to a file that has none. Extensions determine how files are previewed.`,
        })),
        (n[20] = se),
        (n[21] = e)),
      (j = e));
  }
  let he = !de || A === o || j != null || (C && (w !== d.value.accountId || te !== (d.value.userId ?? null))),
    M = ee(ce, r.node.id),
    ge;
  n[22] === s
    ? (ge = n[23])
    : ((ge = { "aria-describedby": void 0, onCloseAutoFocus: s }), (n[22] = s), (n[23] = ge));
  let N;
  n[24] !== x || n[25] !== M
    ? ((N = (e) => {
        !e && !M && x();
      }),
      (n[24] = x),
      (n[25] = M),
      (n[26] = N))
    : (N = n[26]);
  let P;
  n[27] !== x || n[28] !== r || n[29] !== A || n[30] !== M || n[31] !== he || n[32] !== d
    ? ((P = (e) => {
        if ((e.preventDefault(), M || he)) return;
        let t = r.node.kind === `file` && be(r),
          n = oe(d, r, { type: `rename`, name: A });
        if (t) {
          x();
          return;
        }
        n.then((e) => {
          e && x();
        });
      }),
      (n[27] = x),
      (n[28] = r),
      (n[29] = A),
      (n[30] = M),
      (n[31] = he),
      (n[32] = d),
      (n[33] = P))
    : (P = n[33]);
  let F;
  n[34] !== r.node.kind || n[35] !== C
    ? ((F = (0, Z.jsx)(g, {
        children: (0, Z.jsx)(p, {
          title: (0, Z.jsx)(f, {
            children: C
              ? (0, Z.jsx)(i, {
                  id: `libraryNext.rename.siteTitle`,
                  defaultMessage: `Rename site`,
                  description: `Title of the dialog for changing a Site's display name, not its URL`,
                })
              : (0, Z.jsx)(i, {
                  id: `libraryNext.rename.itemTitle`,
                  defaultMessage: `{kind, select, directory {Rename folder} other {Rename file}}`,
                  description: `Title of the Library rename dialog. kind identifies whether the user is renaming a directory or a file.`,
                  values: { kind: r.node.kind },
                }),
          }),
        }),
      })),
      (n[34] = r.node.kind),
      (n[35] = C),
      (n[36] = F))
    : (F = n[36]);
  let I;
  n[37] !== r.node.kind || n[38] !== C
    ? ((I = C
        ? (0, Z.jsx)(i, {
            id: `libraryNext.rename.siteName`,
            defaultMessage: `Site name`,
            description: `Label for the Site display name in the rename dialog`,
          })
        : (0, Z.jsx)(i, {
            id: `libraryNext.rename.itemName`,
            defaultMessage: `{kind, select, directory {Folder name} other {File name}}`,
            description: `Label for the Library rename input. kind identifies a directory or file; only the file name is editable and its extension is preserved.`,
            values: { kind: r.node.kind },
          })),
      (n[37] = r.node.kind),
      (n[38] = C),
      (n[39] = I))
    : (I = n[39]);
  let ve = C ? 100 : void 0,
    L = j != null,
    ye = (j != null && k) || (T && le) || void 0,
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
    ? ((B = (e) => O(e.target.value)), (n[43] = B))
    : (B = n[43]);
  let Se;
  n[44] !== D || n[45] !== ve || n[46] !== L || n[47] !== ye || n[48] !== z
    ? ((Se = (0, Z.jsx)(fe, {
        autoFocus: !0,
        name: `name`,
        maxLength: ve,
        autoComplete: `off`,
        "aria-invalid": L,
        "aria-describedby": ye,
        trailingInlineControl: z,
        value: D,
        onChange: B,
        required: !0,
      })),
      (n[44] = D),
      (n[45] = ve),
      (n[46] = L),
      (n[47] = ye),
      (n[48] = z),
      (n[49] = Se))
    : (Se = n[49]);
  let V;
  n[50] !== I || n[51] !== Se
    ? ((V = (0, Z.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [I, Se] })),
      (n[50] = I),
      (n[51] = Se),
      (n[52] = V))
    : (V = n[52]);
  let H;
  n[53] !== k || n[54] !== j
    ? ((H =
        j == null ? null : (0, Z.jsx)(`p`, { id: k, role: `alert`, className: `text-danger`, children: j })),
      (n[53] = k),
      (n[54] = j),
      (n[55] = H))
    : (H = n[55]);
  let U;
  n[56] !== V || n[57] !== H
    ? ((U = (0, Z.jsxs)(g, { children: [V, H] })), (n[56] = V), (n[57] = H), (n[58] = U))
    : (U = n[58]);
  let W;
  n[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Z.jsx)(i, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (n[59] = W))
    : (W = n[59]);
  let Ce;
  n[60] !== x || n[61] !== M
    ? ((Ce = (0, Z.jsx)(t, { color: `secondary`, disabled: M, onClick: x, children: W })),
      (n[60] = x),
      (n[61] = M),
      (n[62] = Ce))
    : (Ce = n[62]);
  let we;
  n[63] === M
    ? (we = n[64])
    : ((we = (0, Z.jsx)(i, {
        id: `libraryNext.rename.submitStatus`,
        defaultMessage: `{pending, select, true {Renaming…} other {Rename}}`,
        description: `Primary button in the Library rename dialog. pending is true while the rename request is in progress.`,
        values: { pending: M },
      })),
      (n[63] = M),
      (n[64] = we));
  let Te;
  n[65] !== M || n[66] !== he || n[67] !== we
    ? ((Te = (0, Z.jsx)(t, { type: `submit`, color: `primary`, loading: M, disabled: he, children: we })),
      (n[65] = M),
      (n[66] = he),
      (n[67] = we),
      (n[68] = Te))
    : (Te = n[68]);
  let Ee;
  n[69] !== Ce || n[70] !== Te
    ? ((Ee = (0, Z.jsx)(g, { children: (0, Z.jsxs)(y, { children: [Ce, Te] }) })),
      (n[69] = Ce),
      (n[70] = Te),
      (n[71] = Ee))
    : (Ee = n[71]);
  let De;
  n[72] !== P || n[73] !== F || n[74] !== U || n[75] !== Ee
    ? ((De = (0, Z.jsxs)(v, { as: `form`, onSubmit: P, children: [F, U, Ee] })),
      (n[72] = P),
      (n[73] = F),
      (n[74] = U),
      (n[75] = Ee),
      (n[76] = De))
    : (De = n[76]);
  let G;
  return (
    n[77] !== m || n[78] !== De || n[79] !== ge || n[80] !== N
      ? ((G = (0, Z.jsx)(_, {
          open: m,
          showDialogClose: !1,
          contentProps: ge,
          onOpenChange: N,
          children: De,
        })),
        (n[77] = m),
        (n[78] = De),
        (n[79] = ge),
        (n[80] = N),
        (n[81] = G))
      : (G = n[81]),
    G
  );
}
function J(e) {
  let t = (0, Xe.c)(18),
    {
      accountId: n,
      userId: i,
      analyticsContext: a,
      viewMode: o,
      libraryOrigin: s,
      entries: c,
      pages: l,
      hasRetainedPages: u,
      bulk: d,
      action: f,
      onCompleted: p,
      onOptimisticallyRemoved: m,
      onClose: h,
    } = e,
    g = s === void 0 ? te : s,
    _ = u !== void 0 && u,
    v = d !== void 0 && d,
    y = f === void 0 ? `delete` : f,
    b;
  t[0] !== n || t[1] !== i
    ? ((b = { accountId: n, userId: i }), (t[0] = n), (t[1] = i), (t[2] = b))
    : (b = t[2]);
  let x;
  t[3] !== y ||
  t[4] !== a ||
  t[5] !== v ||
  t[6] !== c ||
  t[7] !== _ ||
  t[8] !== g ||
  t[9] !== h ||
  t[10] !== p ||
  t[11] !== m ||
  t[12] !== l ||
  t[13] !== o
    ? ((x = (0, Z.jsx)(Y, {
        onClose: h,
        analyticsContext: a,
        viewMode: o,
        libraryOrigin: g,
        entries: c,
        pages: l,
        hasRetainedPages: _,
        bulk: v,
        action: y,
        onCompleted: p,
        onOptimisticallyRemoved: m,
      })),
      (t[3] = y),
      (t[4] = a),
      (t[5] = v),
      (t[6] = c),
      (t[7] = _),
      (t[8] = g),
      (t[9] = h),
      (t[10] = p),
      (t[11] = m),
      (t[12] = l),
      (t[13] = o),
      (t[14] = x))
    : (x = t[14]);
  let S;
  return (
    t[15] !== b || t[16] !== x
      ? ((S = (0, Z.jsx)(r, { scope: xe, value: b, children: x })), (t[15] = b), (t[16] = x), (t[17] = S))
      : (S = t[17]),
    S
  );
}
function Y(e) {
  let n = (0, Xe.c)(123),
    {
      onClose: r,
      analyticsContext: o,
      viewMode: d,
      libraryOrigin: f,
      entries: p,
      pages: m,
      hasRetainedPages: h,
      bulk: y,
      action: b,
      onCompleted: x,
      onOptimisticallyRemoved: S,
    } = e,
    C = h !== void 0 && h,
    w = a(xe),
    ee = l(),
    [te, ne] = (0, X.useState)(!0),
    T;
  n[0] === r
    ? (T = n[1])
    : ((T = () => {
        (ne(!1), r());
      }),
      (n[0] = r),
      (n[1] = T));
  let E = T,
    D = u(re),
    oe = u(me),
    [O, se] = (0, X.useState)(p),
    ce;
  n[2] === m ? (ce = n[3]) : ((ce = m ?? []), (n[2] = m), (n[3] = ce));
  let [k, fe] = (0, X.useState)(ce),
    A = he(),
    j = k.length > 0,
    N = b === `restore`,
    P = b === `deleteForever`,
    [F, ve] = (0, X.useState)(!1),
    L = Fe(O),
    [R, z] = (0, X.useState)(``),
    be = !y && p.length === 1 && (m?.length ?? 0) === 0,
    B = D === w.value.accountId && oe === (w.value.userId ?? null),
    V = (b === `delete` ? L.sites : []).flatMap(Je),
    H;
  n[4] !== B || n[5] !== w
    ? ((H = (e) => {
        let { projectId: t } = e;
        return {
          queryKey: [...M, t, w.value.accountId, w.value.userId],
          queryFn: (e) => {
            let { signal: n } = e;
            return ae(t, n, w.get(ie));
          },
          enabled: B,
          retry: !1,
          staleTime: 0,
        };
      }),
      (n[4] = B),
      (n[5] = w),
      (n[6] = H))
    : (H = n[6]);
  let U = s({ queries: (be ? V : []).map(H) }, w.queryClient),
    W;
  n[7] === U ? (W = n[8]) : ((W = U.every(qe)), (n[7] = U), (n[8] = W));
  let Te = W,
    G;
  if (n[9] !== R || n[10] !== U) {
    let e;
    (n[12] === R
      ? (e = n[13])
      : ((e = (e) => {
          let { data: t, isError: n } = e;
          return n || (t != null && we(t.slug, R));
        }),
        (n[12] = R),
        (n[13] = e)),
      (G = U.every(e)),
      (n[9] = R),
      (n[10] = U),
      (n[11] = G));
  } else G = n[11];
  let Oe = G,
    Ae;
  n[14] !== be || n[15] !== U
    ? ((Ae = (e, t) => {
        let { entry: n } = e;
        return !be || (U[t].data != null && !U[t].isError) ? [n.node.id] : [];
      }),
      (n[14] = be),
      (n[15] = U),
      (n[16] = Ae))
    : (Ae = n[16]);
  let je = new Set(V.flatMap(Ae)),
    Pe = V.length > 0 && (!B || !Te || !Oe),
    K = b === `delete` ? O.filter((e) => ge(e) && (!_e(e) || je.has(e.node.id))) : O,
    q = b === `delete` ? [...L.files, ...L.folders] : O.filter(Ke),
    Ie = L.folders.length > 0,
    Le = !y && Ie && O.length === 1,
    Re = b === `delete` && L.favorites.length > 0,
    J = q.length > 0,
    Y = V.length > 0,
    Q;
  if (Y && be && !j && !C && !J && !Re && L.retainedProviders.size === 0 && !L.hasOtherRetainedItems)
    Q = null;
  else if (j || C || Y) {
    let e;
    (n[17] !== C || n[18] !== k.length || n[19] !== L
      ? ((e = (0, Z.jsx)(Ne, { selection: L, pageCount: k.length, hasRetainedPages: C })),
        (n[17] = C),
        (n[18] = k.length),
        (n[19] = L),
        (n[20] = e))
      : (e = n[20]),
      (Q = e));
  } else if (O.some(Ge)) {
    let e;
    (n[21] === N
      ? (e = n[22])
      : ((e = (0, Z.jsx)(`p`, {
          children: N
            ? (0, Z.jsx)(i, {
                id: `libraryNext.restore.spaceContentsDescription`,
                defaultMessage: `The selected items and their contents will be restored`,
                description: `Confirmation in Trash when the selection includes a deleted Space. Restoring the Space also restores its contents archived with it.`,
              })
            : (0, Z.jsx)(i, {
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
      (n[23] !== ee || n[24] !== A || n[25] !== O[0]
        ? ((e = A
            ? (0, Z.jsx)(i, {
                id: `libraryNext.restore.fileDescription.space`,
                defaultMessage: `"{name}" will be restored to your Space`,
                description: `Confirmation before restoring one file from Space Trash. name is the full file name. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                values: { name: O[0].node.name || le(O[0], ee) },
              })
            : (0, Z.jsx)(i, {
                id: `libraryNext.restore.fileDescription`,
                defaultMessage: `"{name}" will be restored to your Library`,
                description: `Confirmation before restoring one file from Library Trash. name is the full file name.`,
                values: { name: O[0].node.name || le(O[0], ee) },
              })),
          (n[23] = ee),
          (n[24] = A),
          (n[25] = O[0]),
          (n[26] = e))
        : (e = n[26]),
        (Q = e));
    } else {
      let e;
      (n[27] !== A || n[28] !== O.length
        ? ((e = A
            ? (0, Z.jsx)(i, {
                id: `libraryNext.restore.filesDescription.space`,
                defaultMessage: `These {count} selected items will be restored to your Space`,
                description: `Confirmation before restoring multiple files from Space Trash. count is the number of selected files, always greater than one. Space is the product destination. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                values: { count: O.length },
              })
            : (0, Z.jsx)(i, {
                id: `libraryNext.restore.filesDescription`,
                defaultMessage: `These {count} selected items will be restored to your Library`,
                description: `Confirmation before restoring multiple files from Library Trash. count is the number of selected files, always greater than one.`,
                values: { count: O.length },
              })),
          (n[27] = A),
          (n[28] = O.length),
          (n[29] = e))
        : (e = n[29]),
        (Q = e));
    }
    let e;
    (n[30] === Q ? (e = n[31]) : ((e = (0, Z.jsx)(`p`, { children: Q })), (n[30] = Q), (n[31] = e)), (Q = e));
  } else if (P) {
    let e;
    (n[32] !== ee || n[33] !== O[0] || n[34] !== O.length
      ? ((e = (0, Z.jsx)(`p`, {
          children:
            O.length === 1
              ? (0, Z.jsx)(i, {
                  id: `libraryNext.delete.foreverFileDescription`,
                  defaultMessage: `"{name}" will be deleted forever. This can't be undone.`,
                  description: `Irreversible deletion confirmation for one Library Trash file. name is the full file name.`,
                  values: { name: O[0].node.name || le(O[0], ee) },
                })
              : (0, Z.jsx)(i, {
                  id: `libraryNext.delete.foreverFilesDescription`,
                  defaultMessage: `These {count} selected items will be deleted forever. This can't be undone.`,
                  description: `Irreversible deletion confirmation for multiple Library Trash files. count is the selected file count, always greater than one.`,
                  values: { count: O.length },
                }),
        })),
        (n[32] = ee),
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
          children: (0, Z.jsx)(i, {
            id: `libraryNext.delete.folderDescription`,
            defaultMessage: `"{name}" will be permanently deleted with all files and subfolders.`,
            description: `Body of the Library folder delete confirmation. name is the folder's full name; deleting it removes all nested contents permanently.`,
            values: { name: O[0].node.name },
          }),
        })),
        (n[36] = O[0].node.name),
        (n[37] = e)),
      (Q = e));
  } else if (y || O.length > 1 || Re) {
    let e;
    (n[38] === L ? (e = n[39]) : ((e = (0, Z.jsx)(Ne, { selection: L })), (n[38] = L), (n[39] = e)), (Q = e));
  } else {
    let e;
    (n[40] === O[0].node.name
      ? (e = n[41])
      : ((e = (0, Z.jsx)(`p`, {
          children: (0, Z.jsx)(i, {
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
      ? ((e = (0, Z.jsx)(i, {
          id: `libraryNext.delete.sitesTitle`,
          defaultMessage: `Delete selected items?`,
          description: `Confirmation title for permanent Site deletion, possibly together with Pages, files or favorites`,
        })),
        (n[42] = e))
      : (e = n[42]),
      ($ = e));
  } else if (j) {
    let e;
    (n[43] !== O.length || n[44] !== k.length
      ? ((e =
          O.length === 0
            ? (0, Z.jsx)(i, {
                id: `libraryNext.delete.countedPagesTitle`,
                defaultMessage: `{count, plural, one {Delete # page?} other {Delete # pages?}}`,
                description: `Confirmation title for deleting selected Pages; count excludes nested Pages that were not explicitly selected`,
                values: { count: k.length },
              })
            : (0, Z.jsx)(i, {
                id: `libraryNext.delete.selectedItemsTitle`,
                defaultMessage: `Delete selected items?`,
                description: `Confirmation title for deleting a selection containing Pages and possibly Library files or folders`,
              })),
        (n[43] = O.length),
        (n[44] = k.length),
        (n[45] = e))
      : (e = n[45]),
      ($ = e));
  } else if (N) {
    let e;
    (n[46] === O.length
      ? (e = n[47])
      : ((e = (0, Z.jsx)(i, {
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
      ? ((e = (0, Z.jsx)(i, {
          id: `libraryNext.delete.foreverTitle`,
          defaultMessage: `Delete forever`,
          description: `Title of the irreversible deletion confirmation for Library Trash files`,
        })),
        (n[48] = e))
      : (e = n[48]),
      ($ = e));
  } else if (Re) {
    let e;
    (n[49] !== J || n[50] !== L.favorites
      ? ((e = J
          ? (0, Z.jsx)(i, {
              id: `libraryNext.delete.mixedTitle`,
              defaultMessage: `Delete files and remove favorites?`,
              description: `Library confirmation title when deleting native files or folders and removing saved entities or responses from Favorites and Library`,
            })
          : (0, Z.jsx)(i, {
              id: `libraryNext.delete.favoritesTitle`,
              defaultMessage: `{count, plural, one {Remove # favorite?} other {Remove # favorites?}}`,
              description: `Library favorites-only removal title. count excludes connected and read-only items that remain in Library.`,
              values: { count: L.favorites.length },
            })),
        (n[49] = J),
        (n[50] = L.favorites),
        (n[51] = e))
      : (e = n[51]),
      ($ = e));
  } else if (Ie) {
    let e;
    (n[52] === O.length
      ? (e = n[53])
      : ((e = (0, Z.jsx)(i, {
          id: `libraryNext.delete.folderTitle`,
          defaultMessage: `{count, plural, one {Delete folder} other {Delete selected items}}`,
          description: `Library delete confirmation title when the selection contains folders. count is the total selected item count.`,
          values: { count: O.length },
        })),
        (n[52] = O.length),
        (n[53] = e)),
      ($ = e));
  } else if (y) {
    let e;
    (n[54] === L.files.length
      ? (e = n[55])
      : ((e = (0, Z.jsx)(i, {
          id: `libraryNext.delete.countedFilesTitle`,
          defaultMessage: `{count, plural, one {Delete # file?} other {Delete # files?}}`,
          description: `Library bulk delete title. count includes only native files that will be deleted, excluding retained files and removed favorites.`,
          values: { count: L.files.length },
        })),
        (n[54] = L.files.length),
        (n[55] = e)),
      ($ = e));
  } else {
    let e;
    (n[56] === O.length
      ? (e = n[57])
      : ((e = (0, Z.jsx)(i, {
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
    (n[58] === b
      ? (e = n[59])
      : ((e = (0, Z.jsx)(i, {
          id: `libraryNext.trash.confirmAction`,
          defaultMessage: `{action, select, restore {Restore} other {Delete forever}}`,
          description: `Confirmation button for a Library Trash action. action is restore for a reversible restoration or deleteForever for irreversible deletion.`,
          values: { action: b },
        })),
        (n[58] = b),
        (n[59] = e)),
      (Ze = e));
  } else if (Re) {
    let e = J || Y,
      t;
    (n[60] === e
      ? (t = n[61])
      : ((t = (0, Z.jsx)(i, {
          id: `libraryNext.delete.confirmFavorites`,
          defaultMessage: `{hasFiles, select, true {Delete and remove} other {Remove}}`,
          description: `Library confirmation button. hasFiles is true when native files or folders are deleted in addition to removing saved favorites. Otherwise only favorites are removed.`,
          values: { hasFiles: e },
        })),
        (n[60] = e),
        (n[61] = t)),
      (Ze = t));
  } else if (Y && !J && !j) {
    let e;
    (n[62] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(i, {
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
      : ((e = (0, Z.jsx)(i, {
          id: `libraryNext.delete.confirmItems`,
          defaultMessage: `{singleFolder, select, true {Delete folder} other {Delete}}`,
          description: `Destructive button in the Library delete confirmation. singleFolder is true only when deleting one folder.`,
          values: { singleFolder: Le },
        })),
        (n[63] = Le),
        (n[64] = e)),
      (Ze = e));
  }
  if (p.some(Ue) && (D !== w.value.accountId || oe !== (w.value.userId ?? null))) return null;
  let Qe;
  n[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qe = { "aria-describedby": void 0 }), (n[65] = Qe))
    : (Qe = n[65]);
  let $e;
  n[66] !== E || n[67] !== F
    ? (($e = (e) => {
        !e && !F && E();
      }),
      (n[66] = E),
      (n[67] = F),
      (n[68] = $e))
    : ($e = n[68]);
  let et;
  n[69] !== b ||
  n[70] !== K ||
  n[71] !== o ||
  n[72] !== E ||
  n[73] !== Pe ||
  n[74] !== J ||
  n[75] !== j ||
  n[76] !== Y ||
  n[77] !== f ||
  n[78] !== q ||
  n[79] !== x ||
  n[80] !== S ||
  n[81] !== F ||
  n[82] !== P ||
  n[83] !== O ||
  n[84] !== k ||
  n[85] !== N ||
  n[86] !== w ||
  n[87] !== d
    ? ((et = (e) => {
        if ((e.preventDefault(), F || Pe || (K.length === 0 && !j))) return;
        if ((ve(!0), P && J)) ke(w, q);
        else if (b === `delete` && J) {
          let e = { artifactIds: q.flatMap(He), directoryIds: q.flatMap(Ve) };
          de(w, Se, {
            ...(JSON.stringify(e).length <= 2e3 ? e : {}),
            itemCount: c(q.length),
            libraryOrigin: f,
          });
        }
        !N && J && De(w, q, o, I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE, P, f);
        let t = !N && !P ? K.filter((e) => pe(w, e)) : [],
          n = !Y && (t.length > 0 || j) && t.length === K.length,
          r = Y ? ue(w, w.value.accountId, w.value.userId ?? null) : void 0,
          i = Promise.all([
            ye(
              w,
              K,
              N ? { type: `restore` } : { type: `delete`, permanently: P, viewMode: d, signal: r?.signal },
            ),
            b === `delete` && j ? Me(w, k) : Promise.resolve([]),
          ]).finally(() => r?.stop());
        ((t.length > 0 || j) && S?.([...t.map(Be), ...k.map(ze)]),
          n && (j ? setTimeout(E, 400) : E()),
          i.then((e) => {
            let [t, r] = e;
            x?.([...t, ...r]);
            let i = k.filter((e) => !r.includes(e.page_id));
            fe(i);
            let a = K.filter((e) => {
              let { node: n } = e;
              return !t.includes(n.id);
            });
            if (!N && J) {
              let e = q.filter((e) => {
                  let { node: n } = e;
                  return !t.includes(n.id);
                }),
                n = I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_PARTIAL;
              (e.length === 0
                ? (n = I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED)
                : e.length === q.length && (n = I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED),
                De(w, q, o, n, P, f));
            }
            if (!n) {
              ve(!1);
              let e = O.filter((e) => _e(e) && !t.includes(e.node.id));
              a.length === 0 && i.length === 0 && e.length === 0
                ? E()
                : se(
                    O.filter((e) => {
                      let { node: n } = e;
                      return !t.includes(n.id);
                    }),
                  );
            }
          }));
      }),
      (n[69] = b),
      (n[70] = K),
      (n[71] = o),
      (n[72] = E),
      (n[73] = Pe),
      (n[74] = J),
      (n[75] = j),
      (n[76] = Y),
      (n[77] = f),
      (n[78] = q),
      (n[79] = x),
      (n[80] = S),
      (n[81] = F),
      (n[82] = P),
      (n[83] = O),
      (n[84] = k),
      (n[85] = N),
      (n[86] = w),
      (n[87] = d),
      (n[88] = et))
    : (et = n[88]);
  let tt = $,
    nt = Q,
    rt;
  if (n[89] !== R || n[90] !== F || n[91] !== B || n[92] !== z || n[93] !== U || n[94] !== V) {
    let e;
    (n[96] !== R || n[97] !== F || n[98] !== B || n[99] !== z || n[100] !== V
      ? ((e = (e, n) => {
          let { data: r, isPending: a, isFetching: o, isError: s, refetch: c } = e,
            { entry: l } = V[n];
          return (0, Z.jsxs)(
            g,
            {
              children: [
                r == null
                  ? null
                  : (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(`p`, { children: (0, Z.jsx)(Ce, { siteSlug: r.slug }) }),
                        (0, Z.jsx)(Ee, {
                          siteSlug: r.slug,
                          confirmationSlug: R,
                          onChange: z,
                          pending: F || !B || o,
                          autoFocus: n === 0,
                        }),
                      ],
                    }),
                r == null && a
                  ? (0, Z.jsx)(i, {
                      id: `libraryNext.delete.loadingSite`,
                      defaultMessage: `Checking Site owner access…`,
                      description: `Pending owner-authorized Site detail request in a delete confirmation`,
                    })
                  : null,
                s
                  ? (0, Z.jsxs)(Z.Fragment, {
                      children: [
                        (0, Z.jsx)(`p`, {
                          children: (0, Z.jsx)(i, {
                            id: `libraryNext.delete.siteUnavailable`,
                            defaultMessage: `{name} could not be confirmed for deletion and will remain in your Space`,
                            description: `Owner detail failed or access was denied for this selected Site; it is retained while other selected items can be deleted`,
                            values: { name: l.node.name },
                          }),
                        }),
                        (0, Z.jsx)(t, {
                          color: `secondary`,
                          disabled: F || !B || o,
                          onClick: () => void c(),
                          children: (0, Z.jsx)(i, {
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
            l.node.id,
          );
        }),
        (n[96] = R),
        (n[97] = F),
        (n[98] = B),
        (n[99] = z),
        (n[100] = V),
        (n[101] = e))
      : (e = n[101]),
      (rt = U.map(e)),
      (n[89] = R),
      (n[90] = F),
      (n[91] = B),
      (n[92] = z),
      (n[93] = U),
      (n[94] = V),
      (n[95] = rt));
  } else rt = n[95];
  let it;
  n[102] === Le
    ? (it = n[103])
    : ((it = Le
        ? (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(i, {
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
  let ot = Pe || (K.length === 0 && !j),
    st;
  n[108] !== E ||
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
        onClose: E,
      })),
      (n[108] = E),
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
    ? ((ct = (0, Z.jsx)(v, { as: `form`, onSubmit: et, children: st })),
      (n[116] = et),
      (n[117] = st),
      (n[118] = ct))
    : (ct = n[118]);
  let lt;
  return (
    n[119] !== te || n[120] !== ct || n[121] !== $e
      ? ((lt = (0, Z.jsx)(_, {
          open: te,
          showDialogClose: !1,
          contentProps: Qe,
          onOpenChange: $e,
          children: ct,
        })),
        (n[119] = te),
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
  let t = N(e);
  return t == null ? [] : [{ entry: e, projectId: t }];
}
function Ye(e) {
  let n = (0, Xe.c)(20),
    { title: r, description: a, pending: o, confirmDisabled: s, restore: c, confirmLabel: l, onClose: u } = e,
    d = s !== void 0 && s,
    m;
  n[0] === r
    ? (m = n[1])
    : ((m = (0, Z.jsx)(g, { children: (0, Z.jsx)(p, { title: (0, Z.jsx)(f, { children: r }) }) })),
      (n[0] = r),
      (n[1] = m));
  let h;
  n[2] === a ? (h = n[3]) : ((h = (0, Z.jsx)(g, { children: a })), (n[2] = a), (n[3] = h));
  let _;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(i, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (n[4] = _))
    : (_ = n[4]);
  let v;
  n[5] !== u || n[6] !== o
    ? ((v = (0, Z.jsx)(t, { color: `secondary`, disabled: o, onClick: u, children: _ })),
      (n[5] = u),
      (n[6] = o),
      (n[7] = v))
    : (v = n[7]);
  let b = c ? `primary` : `dangerSolid`,
    x;
  n[8] !== d || n[9] !== l || n[10] !== o || n[11] !== b
    ? ((x = (0, Z.jsx)(t, { type: `submit`, color: b, loading: o, disabled: d, children: l })),
      (n[8] = d),
      (n[9] = l),
      (n[10] = o),
      (n[11] = b),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] !== v || n[14] !== x
    ? ((S = (0, Z.jsx)(g, { children: (0, Z.jsxs)(y, { children: [v, x] }) })),
      (n[13] = v),
      (n[14] = x),
      (n[15] = S))
    : (S = n[15]);
  let C;
  return (
    n[16] !== m || n[17] !== h || n[18] !== S
      ? ((C = (0, Z.jsxs)(Z.Fragment, { children: [m, h, S] })),
        (n[16] = m),
        (n[17] = h),
        (n[18] = S),
        (n[19] = C))
      : (C = n[19]),
    C
  );
}
var Xe, X, Z;
function Q() {
  return (Q = e(() => {
    ((Xe = S()),
      P(),
      n(),
      d(),
      o(),
      (X = w()),
      h(),
      W(),
      k(),
      Te(),
      z(),
      b(),
      x(),
      m(),
      ne(),
      ve(),
      se(),
      H(),
      je(),
      j(),
      B(),
      U(),
      T(),
      G(),
      q(),
      Ie(),
      E(),
      L(),
      Ae(),
      (Z = C()));
  }))();
}
Q();
export {
  J as ConfirmLibraryItemsDialog,
  Ye as LibraryItemConfirmationContent,
  Le as RenameLibraryItemDialog,
};
//# sourceMappingURL=library-item-dialogs-9ee5fe2d2bc1.js.map
