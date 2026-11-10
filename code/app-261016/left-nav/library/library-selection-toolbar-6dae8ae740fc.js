const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-item-dialogs-b3f9554157e9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./site-delete-confirmation-ef0a116df40a.js",
      "./library-delete-analytics-8d6586b5e73e.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-trash-analytics-87135fb4164d.js",
      "./library-page-actions-12f0701c9fb5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  CY as n,
  DB as r,
  FBt as i,
  FNt as a,
  LNt as o,
  MNt as ee,
  NNt as s,
  OB as c,
  OFt as l,
  OU as u,
  PBt as d,
  SB as f,
  TY as p,
  XB as te,
  XOt as m,
  Y3 as h,
  YOt as g,
  Z3 as _,
  ZSt as v,
  a3 as ne,
  as as re,
  ck as y,
  i3 as ie,
  iCt as b,
  kFt as x,
  ls as S,
  nB as C,
  o3 as ae,
  okt as oe,
  os as se,
  r3 as ce,
  rB as w,
  rj as T,
  rk as le,
  sY as ue,
  sj as E,
  tJ as de,
  tk as fe,
  tkt as D,
  us as pe,
  wB as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as he,
  ARn as ge,
  Cmt as _e,
  D5n as O,
  DTn as ve,
  HRn as ye,
  Nmt as be,
  Ozn as k,
  PRn as A,
  XRn as j,
  Yfn as xe,
  ZRn as M,
  _mt as Se,
  aV as N,
  czn as Ce,
  dmt as we,
  g9t as P,
  iV as Te,
  izn as F,
  kRn as I,
  lzn as L,
  m9t as Ee,
  umt as R,
  wTn as z,
  wmt as B,
  xMr as V,
  yMr as H,
  zmt as De,
} from "./app-initial-ad16eaadf81f.js";
import { Fs as Oe, Rs as U } from "./app-primary-3e00728c2a4c.js";
import { n as ke, t as W } from "./library-delete-analytics-8d6586b5e73e.js";
import {
  _ as Ae,
  a as G,
  c as je,
  f as Me,
  g as Ne,
  h as Pe,
  l as Fe,
  o as Ie,
  p as K,
  s as Le,
  u as q,
  v as Re,
} from "./selectable-library-item-3b495aba5b29.js";
var J, Y, ze;
function X() {
  return (X = e(() => {
    ((J = `_Container_ly74n_2`), (Y = `_Toolbar_ly74n_2`), (ze = { Container: J, Toolbar: Y }));
  }))();
}
function Be(e) {
  let t = (0, Ke.c)(7),
    { trashSelection: n } = e;
  if (n != null) {
    let r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = {
          showChat: !1,
          canChat: !1,
          overChatLimit: !1,
          uploadLimit: null,
          showDownload: !1,
          canDownload: !1,
          showMove: !1,
          canMove: !1,
          showRestore: !0,
          canRestore: !0,
          showDelete: !0,
          canDelete: !0,
        }),
        (t[0] = r))
      : (r = t[0]);
    let i;
    return (
      t[1] !== e || t[2] !== n.count || t[3] !== n.pending
        ? ((i = (0, Q.jsx)(We, { ...e, count: n.count, pending: n.pending, actions: r })),
          (t[1] = e),
          (t[2] = n.count),
          (t[3] = n.pending),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let r;
  return (t[5] === e ? (r = t[6]) : ((r = (0, Q.jsx)(Ve, { ...e })), (t[5] = e), (t[6] = r)), r);
}
function Ve(e) {
  let n = (0, Ke.c)(18),
    r = t(xe),
    i = b(Ne),
    a = b(Re),
    o = r.value.selectionPages == null ? i.size : a.length,
    ee = b(q),
    s = b(Me),
    c = b(K),
    l = c && !r.value.deleted && s.showDelete,
    u;
  n[0] === c ? (u = n[1]) : ((u = { selectionActive: c, deleteVisible: !1 }), (n[0] = c), (n[1] = u));
  let d = (0, Z.useRef)(u),
    f;
  n[2] !== l || n[3] !== r || n[4] !== c
    ? ((f = () => {
        let e = d.current;
        d.current = { selectionActive: c, deleteVisible: l };
        let t = r.get(we);
        if (
          (e.selectionActive !== c &&
            V(r, I, {
              ...t,
              provider: _e(r.value.directoryId),
              action: ge.CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED,
              changedProperty: A.CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_SELECTION_MODE,
              selectionMode: c
                ? L.CHATGPT_FILE_LIBRARY_SELECTION_MODE_MANAGEMENT
                : L.CHATGPT_FILE_LIBRARY_SELECTION_MODE_NONE,
              libraryOrigin: r.value.deleted
                ? F.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN
                : F.CHATGPT_FILE_LIBRARY_ORIGIN_LIBRARY_SCREEN,
            }),
          !e.deleteVisible && l)
        ) {
          let e = r.get(Ae),
            n = { libraryFileIds: e?.flatMap(Ue), folderIds: e?.flatMap(He) };
          V(r, M, {
            sessionId: t.sessionId,
            libraryVariant: t.libraryVariant,
            action: j.CHATGPT_FILE_LIBRARY_MANAGEMENT_ACTION_DELETE,
            ...(n.libraryFileIds?.length ? { libraryFileIds: n.libraryFileIds } : {}),
            ...(n.folderIds?.length ? { folderIds: n.folderIds } : {}),
          });
        }
      }),
      (n[2] = l),
      (n[3] = r),
      (n[4] = c),
      (n[5] = f))
    : (f = n[5]);
  let p = (0, Z.useEffectEvent)(f),
    te;
  n[6] === p
    ? (te = n[7])
    : ((te = () => {
        p();
      }),
      (n[6] = p),
      (n[7] = te));
  let m;
  (n[8] !== l || n[9] !== r || n[10] !== c
    ? ((m = [c, l, r]), (n[8] = l), (n[9] = r), (n[10] = c), (n[11] = m))
    : (m = n[11]),
    (0, Z.useEffect)(te, m));
  let h = a.length > 0,
    g;
  return (
    n[12] !== s || n[13] !== o || n[14] !== ee || n[15] !== e || n[16] !== h
      ? ((g = (0, Q.jsx)(We, { ...e, count: o, pageSelection: h, pending: ee, actions: s })),
        (n[12] = s),
        (n[13] = o),
        (n[14] = ee),
        (n[15] = e),
        (n[16] = h),
        (n[17] = g))
      : (g = n[17]),
    g
  );
}
function He(e) {
  let { node: t } = e;
  return t.kind === `directory` ? [t.id] : [];
}
function Ue(e) {
  let { node: t } = e;
  return t.kind === `file` && !E(t.id) ? [t.id] : [];
}
function We(e) {
  let i = (0, Ke.c)(109),
    {
      scrollContainerRef: a,
      onMount: o,
      trashSelection: s,
      count: c,
      pageSelection: l,
      pending: d,
      actions: p,
    } = e,
    m = l !== void 0 && l,
    g = t(xe),
    _ = (0, Z.useContext)(Ee),
    [v, re] = (0, Z.useState)(null),
    y = oe(),
    [ie, b] = (0, Z.useState)(!1),
    x;
  i[0] !== g || i[1] !== s
    ? ((x = function () {
        if (s != null) {
          s.onClear();
          return;
        }
        let e = g.get(Ae);
        (g.set(Ne, new Set()),
          e != null && Se(g, [], e, !1, Ce.CHATGPT_FILE_LIBRARY_SELECTION_METHOD_CLEAR_ALL));
      }),
      (i[0] = g),
      (i[1] = s),
      (i[2] = x))
    : (x = i[2]);
  let S = x,
    ae = c > 0 && !d,
    w;
  i[3] !== S || i[4] !== a || i[5] !== v
    ? ((w = (e) => {
        let t = e.target,
          n = a.current;
        e.defaultPrevented ||
          e.isComposing ||
          n == null ||
          !(t instanceof Node) ||
          (!n.contains(t) &&
            !v?.contains(t) &&
            t !== n.ownerDocument.body &&
            t !== n.ownerDocument.documentElement) ||
          (t instanceof Element &&
            t.id !== `library-search` &&
            !t.id.startsWith(`library-search-`) &&
            (t.closest(
              `input:not([type='checkbox']):not([type='radio']), select, textarea, [contenteditable]:not([contenteditable='false'])`,
            ) != null ||
              (t instanceof HTMLElement && t.isContentEditable))) ||
          (e.preventDefault(),
          S(),
          t instanceof HTMLElement &&
            (t.closest(`[data-library-item]`) != null || t.getAttribute(`role`) === `checkbox`) &&
            t.blur());
      }),
      (i[3] = S),
      (i[4] = a),
      (i[5] = v),
      (i[6] = w))
    : (w = i[6]);
  let T;
  if (
    (i[7] !== ae || i[8] !== w
      ? ((T = { accelerator: `Escape`, capture: !1, allowWithinEditable: !0, enabled: ae, onKeyDown: w }),
        (i[7] = ae),
        (i[8] = w),
        (i[9] = T))
      : (T = i[9]),
    ve(T),
    c === 0)
  )
    return null;
  let E = $.unsupportedChat;
  d ? (E = $.pending) : p.overChatLimit && (E = $.chatLimit);
  let me;
  i[10] !== p.uploadLimit || i[11] !== E || i[12] !== y || i[13] !== d
    ? ((me = !d && p.uploadLimit != null ? Oe(y, p.uploadLimit) : y.formatMessage(E)),
      (i[10] = p.uploadLimit),
      (i[11] = E),
      (i[12] = y),
      (i[13] = d),
      (i[14] = me))
    : (me = i[14]);
  let ge = me,
    _e;
  i[15] === g
    ? (_e = i[16])
    : ((_e = (e) => {
        g.set(Ne, (t) => new Set([...t].filter((t) => !e.includes(t))));
      }),
      (i[15] = g),
      (i[16] = _e));
  let O = _e,
    be = d ? $.pending : $.readOnly,
    k = d ? $.pending : $.cannotDelete,
    A;
  i[17] !== p.showChat || i[18] !== p.showDelete || i[19] !== p.showDownload || i[20] !== p.showRestore
    ? ((A = [p.showChat, p.showDownload, p.showRestore, p.showDelete].filter(Ge)),
      (i[17] = p.showChat),
      (i[18] = p.showDelete),
      (i[19] = p.showDownload),
      (i[20] = p.showRestore),
      (i[21] = A))
    : (A = i[21]);
  let j = A.length >= 3,
    M;
  i[22] !== p.canMove || i[23] !== m || i[24] !== d || i[25] !== g
    ? ((M = () => {
        m && p.canMove && !d && Te.prefetch(g);
      }),
      (i[22] = p.canMove),
      (i[23] = m),
      (i[24] = d),
      (i[25] = g),
      (i[26] = M))
    : (M = i[26]);
  let N = M,
    P;
  i[27] === o
    ? (P = i[28])
    : ((P = (e) => {
        if ((re(e), e != null)) return o?.();
      }),
      (i[27] = o),
      (i[28] = P));
  let F = _ == null ? `fixed` : `absolute`,
    I;
  i[29] === F ? (I = i[30]) : ((I = ee(ze.Container, F)), (i[29] = F), (i[30] = I));
  let L;
  i[31] === y
    ? (L = i[32])
    : ((L = y.formatMessage({
        id: `libraryNext.selection.actions`,
        defaultMessage: `Selected item actions`,
        description: `Accessible label for the Library bulk action toolbar`,
      })),
      (i[31] = y),
      (i[32] = L));
  let R;
  i[33] === c
    ? (R = i[34])
    : ((R = (0, Q.jsx)(`span`, {
        className: `min-w-24 shrink-0 whitespace-nowrap tabular-nums select-none`,
        children: (0, Q.jsx)(D, {
          id: `libraryNext.selection.count`,
          defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
          description: `Count of selected Library items`,
          values: { count: c },
        }),
      })),
      (i[33] = c),
      (i[34] = R));
  let z;
  i[35] !== p.canChat || i[36] !== p.showChat || i[37] !== ge || i[38] !== d || i[39] !== g || i[40] !== ie
    ? ((z = p.showChat
        ? (0, Q.jsx)(C, {
            tooltipContent: !p.canChat || d ? ge : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !p.canChat || d ? !0 : void 0,
              "aria-label": !p.canChat || d ? ge : void 0,
              role: !p.canChat || d ? `button` : void 0,
              tabIndex: !p.canChat || d ? 0 : void 0,
              children: (0, Q.jsx)(h, {
                color: `mediaSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !p.canChat || d,
                loading: ie,
                onClick: () => {
                  let e = g.get(Ae);
                  e != null && (b(!0), je(g, e, g.get(Re)).finally(() => b(!1)));
                },
                children: ie
                  ? (0, Q.jsx)(D, {
                      id: `libraryNext.selection.startingChat`,
                      defaultMessage: `Starting chat…`,
                      description: `Progress label while selected Library items are being added to a new chat and the composer is opening`,
                    })
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(de, {}),
                        (0, Q.jsx)(D, {
                          id: `libraryNext.selection.chat`,
                          defaultMessage: `Start chat`,
                          description: `Start a chat with the selected Library files or folders as context`,
                        }),
                      ],
                    }),
              }),
            }),
          })
        : null),
      (i[35] = p.canChat),
      (i[36] = p.showChat),
      (i[37] = ge),
      (i[38] = d),
      (i[39] = g),
      (i[40] = ie),
      (i[41] = z))
    : (z = i[41]);
  let B;
  i[42] !== p.canDownload || i[43] !== p.showDownload || i[44] !== y || i[45] !== d || i[46] !== g
    ? ((B = p.showDownload
        ? (0, Q.jsx)(C, {
            tooltipContent:
              !p.canDownload || d ? (0, Q.jsx)(D, { ...(d ? $.pending : $.unsupportedDownload) }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !p.canDownload || d ? !0 : void 0,
              "aria-label":
                !p.canDownload || d ? y.formatMessage(d ? $.pending : $.unsupportedDownload) : void 0,
              role: !p.canDownload || d ? `button` : void 0,
              tabIndex: !p.canDownload || d ? 0 : void 0,
              children: (0, Q.jsxs)(h, {
                color: `outline`,
                radius: `full`,
                size: `toolbar`,
                disabled: !p.canDownload || d,
                onClick: () => void Le(g, `download`),
                children: [
                  (0, Q.jsx)(te, {}),
                  (0, Q.jsx)(D, {
                    id: `libraryNext.actions.download`,
                    defaultMessage: `Download`,
                    description: `Menu action to download a Library file`,
                  }),
                ],
              }),
            }),
          })
        : null),
      (i[42] = p.canDownload),
      (i[43] = p.showDownload),
      (i[44] = y),
      (i[45] = d),
      (i[46] = g),
      (i[47] = B))
    : (B = i[47]);
  let V;
  i[48] !== p.canRestore ||
  i[49] !== p.showRestore ||
  i[50] !== be ||
  i[51] !== d ||
  i[52] !== O ||
  i[53] !== g ||
  i[54] !== s
    ? ((V = p.showRestore
        ? (0, Q.jsx)(C, {
            tooltipContent: !p.canRestore || d ? (0, Q.jsx)(D, { ...be }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, Q.jsxs)(h, {
                color: `mediaSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !p.canRestore || d,
                onClick: () => {
                  if (s != null) {
                    s.onRestore();
                    return;
                  }
                  let e = g.get(Ae);
                  e != null &&
                    g.get(Me).canRestore &&
                    he(g, Je, {
                      accountId: g.value.accountId,
                      userId: g.value.userId,
                      analyticsContext: void 0,
                      entries: e,
                      action: `restore`,
                      onCompleted: O,
                    });
                },
                children: [
                  (0, Q.jsx)(r, { asset: pe }),
                  (0, Q.jsx)(D, {
                    id: `libraryNext.selection.restore`,
                    defaultMessage: `Restore`,
                    description: `Restore selected Library files from Trash`,
                  }),
                ],
              }),
            }),
          })
        : null),
      (i[48] = p.canRestore),
      (i[49] = p.showRestore),
      (i[50] = be),
      (i[51] = d),
      (i[52] = O),
      (i[53] = g),
      (i[54] = s),
      (i[55] = V))
    : (V = i[55]);
  let H;
  i[56] !== p.canMove ||
  i[57] !== p.showMove ||
  i[58] !== y ||
  i[59] !== j ||
  i[60] !== m ||
  i[61] !== d ||
  i[62] !== N ||
  i[63] !== g
    ? ((H =
        p.showMove && !j
          ? (0, Q.jsx)(C, {
              tooltipContent:
                !p.canMove || d ? (0, Q.jsx)(D, { ...(d ? $.pending : $.unsupportedMove) }) : void 0,
              children: (0, Q.jsx)(`span`, {
                className: `shrink-0`,
                "aria-disabled": !p.canMove || d ? !0 : void 0,
                "aria-label": !p.canMove || d ? y.formatMessage(d ? $.pending : $.unsupportedMove) : void 0,
                role: !p.canMove || d ? `button` : void 0,
                tabIndex: !p.canMove || d ? 0 : void 0,
                children: (0, Q.jsxs)(h, {
                  color: `outline`,
                  radius: `full`,
                  size: `toolbar`,
                  disabled: !p.canMove || d,
                  onFocus: N,
                  onMouseEnter: N,
                  onClick: () => Ie(g),
                  children: [
                    (0, Q.jsx)(r, { asset: ne }),
                    m ? (0, Q.jsx)(D, { ...$.movePages }) : (0, Q.jsx)(D, { ...$.move }),
                  ],
                }),
              }),
            })
          : null),
      (i[56] = p.canMove),
      (i[57] = p.showMove),
      (i[58] = y),
      (i[59] = j),
      (i[60] = m),
      (i[61] = d),
      (i[62] = N),
      (i[63] = g),
      (i[64] = H))
    : (H = i[64]);
  let U;
  i[65] !== p.canDelete ||
  i[66] !== p.showDelete ||
  i[67] !== c ||
  i[68] !== k ||
  i[69] !== y ||
  i[70] !== d ||
  i[71] !== O ||
  i[72] !== g ||
  i[73] !== s
    ? ((U = p.showDelete
        ? (0, Q.jsx)(C, {
            tooltipContent: !p.canDelete || d ? (0, Q.jsx)(D, { ...k, values: { count: c } }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !p.canDelete || d ? !0 : void 0,
              "aria-label": !p.canDelete || d ? y.formatMessage(k, { count: c }) : void 0,
              role: !p.canDelete || d ? `button` : void 0,
              tabIndex: !p.canDelete || d ? 0 : void 0,
              children: (0, Q.jsxs)(h, {
                color: `dangerSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !p.canDelete || d,
                onClick: () => {
                  if (s != null) {
                    s.onDelete();
                    return;
                  }
                  let e = g.get(Ae);
                  if (e == null || !g.get(Me).canDelete) return;
                  let t = g.get(we);
                  (ke(
                    g,
                    e,
                    t,
                    ye.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED,
                    !!g.value.deleted,
                  ),
                    he(g, Je, {
                      accountId: g.value.accountId,
                      userId: g.value.userId,
                      analyticsContext: t,
                      viewMode: g.get(De),
                      entries: e,
                      pages: g.get(Pe),
                      hasRetainedPages: g.get(Re).length > g.get(Pe).length,
                      bulk: !0,
                      action: g.value.deleted ? `deleteForever` : `delete`,
                      onCompleted: O,
                      onOptimisticallyRemoved: O,
                    }));
                },
                children: [
                  g.value.deleted ? (0, Q.jsx)(r, { asset: se }) : (0, Q.jsx)(ue, {}),
                  g.value.deleted
                    ? (0, Q.jsx)(D, {
                        id: `libraryNext.delete.forever`,
                        defaultMessage: `Delete forever`,
                        description: `Permanently delete selected Library Trash files after confirmation`,
                      })
                    : (0, Q.jsx)(D, {
                        id: `libraryNext.actions.delete`,
                        defaultMessage: `Delete`,
                        description: `Menu action to delete a Library item after confirmation`,
                      }),
                ],
              }),
            }),
          })
        : null),
      (i[65] = p.canDelete),
      (i[66] = p.showDelete),
      (i[67] = c),
      (i[68] = k),
      (i[69] = y),
      (i[70] = d),
      (i[71] = O),
      (i[72] = g),
      (i[73] = s),
      (i[74] = U))
    : (U = i[74]);
  let W;
  i[75] !== p.canMove ||
  i[76] !== p.showMove ||
  i[77] !== y ||
  i[78] !== j ||
  i[79] !== m ||
  i[80] !== d ||
  i[81] !== N ||
  i[82] !== g ||
  i[83] !== v
    ? ((W =
        p.showMove && j
          ? (0, Q.jsx)(fe, {
              surface: `opaque`,
              contentClassName: `pointer-events-auto`,
              contentWidth: `sm`,
              portalContainer: v,
              align: `end`,
              triggerButton: (0, Q.jsx)(h, {
                color: `ghostActive`,
                radius: `full`,
                size: `toolbar`,
                uniform: !0,
                disabled: d,
                onFocus: N,
                onMouseEnter: N,
                "aria-label": y.formatMessage({
                  id: `libraryNext.selection.more`,
                  defaultMessage: `More actions`,
                  description: `Open additional actions for the Library selection`,
                }),
                children: (0, Q.jsx)(u, {}),
              }),
              children: (0, Q.jsx)(le.Item, {
                leftIcon: (0, Q.jsx)(f, { icon: { assets: { 16: ne, 20: ce } } }),
                disabled: !p.canMove,
                tooltipText: p.canMove ? void 0 : y.formatMessage($.unsupportedMove),
                onSelect: () => Ie(g),
                children: m ? (0, Q.jsx)(D, { ...$.movePages }) : (0, Q.jsx)(D, { ...$.move }),
              }),
            })
          : null),
      (i[75] = p.canMove),
      (i[76] = p.showMove),
      (i[77] = y),
      (i[78] = j),
      (i[79] = m),
      (i[80] = d),
      (i[81] = N),
      (i[82] = g),
      (i[83] = v),
      (i[84] = W))
    : (W = i[84]);
  let G;
  i[85] === y
    ? (G = i[86])
    : ((G = y.formatMessage({
        id: `libraryNext.selection.clear`,
        defaultMessage: `Clear selection`,
        description: `Deselect all Library items`,
      })),
      (i[85] = y),
      (i[86] = G));
  let Fe;
  i[87] === Symbol.for(`react.memo_cache_sentinel`) ? ((Fe = (0, Q.jsx)(n, {})), (i[87] = Fe)) : (Fe = i[87]);
  let K;
  i[88] !== S || i[89] !== d || i[90] !== G
    ? ((K = (0, Q.jsx)(h, {
        color: `ghostActive`,
        radius: `full`,
        size: `toolbar`,
        uniform: !0,
        disabled: d,
        onClick: S,
        "aria-label": G,
        children: Fe,
      })),
      (i[88] = S),
      (i[89] = d),
      (i[90] = G),
      (i[91] = K))
    : (K = i[91]);
  let q;
  i[92] !== L ||
  i[93] !== R ||
  i[94] !== z ||
  i[95] !== B ||
  i[96] !== V ||
  i[97] !== H ||
  i[98] !== U ||
  i[99] !== W ||
  i[100] !== K
    ? ((q = (0, Q.jsxs)(`div`, {
        className: ze.Toolbar,
        role: `toolbar`,
        "aria-label": L,
        children: [R, z, B, V, H, U, W, K],
      })),
      (i[92] = L),
      (i[93] = R),
      (i[94] = z),
      (i[95] = B),
      (i[96] = V),
      (i[97] = H),
      (i[98] = U),
      (i[99] = W),
      (i[100] = K),
      (i[101] = q))
    : (q = i[101]);
  let J;
  i[102] !== P || i[103] !== I || i[104] !== q
    ? ((J = (0, Q.jsx)(`div`, { ref: P, className: I, "data-theme": `dark`, children: q })),
      (i[102] = P),
      (i[103] = I),
      (i[104] = q),
      (i[105] = J))
    : (J = i[105]);
  let Y = J,
    X;
  return (
    i[106] !== _ || i[107] !== Y
      ? ((X = _ == null ? Y : (0, qe.createPortal)(Y, _)), (i[106] = _), (i[107] = Y), (i[108] = X))
      : (X = i[108]),
    X
  );
}
function Ge(e) {
  return e;
}
var Ke, Z, qe, Q, Je, $;
function Ye() {
  return (Ye = e(() => {
    ((Ke = d()),
      T(),
      k(),
      ae(),
      ie(),
      S(),
      re(),
      s(),
      v(),
      (Z = i()),
      (qe = a()),
      m(),
      P(),
      _(),
      y(),
      c(),
      p(),
      O(),
      me(),
      w(),
      z(),
      N(),
      H(),
      W(),
      R(),
      be(),
      B(),
      U(),
      G(),
      Fe(),
      X(),
      (Q = o()),
      x(),
      (Je = (0, Z.lazy)(() =>
        l(
          () =>
            import(`./library-item-dialogs-b3f9554157e9.js`).then((e) => ({
              default: e.ConfirmLibraryItemsDialog,
            })),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )),
      ($ = g({
        move: {
          id: `libraryNext.selection.move`,
          defaultMessage: `Move`,
          description: `Move selected Library items into another folder`,
        },
        movePages: {
          id: `libraryNext.selection.movePages`,
          defaultMessage: `Move…`,
          description: `Open the destination picker for the selected Pages and their sub-pages`,
        },
        pending: {
          id: `libraryNext.selection.pending`,
          defaultMessage: `Wait for the current action to finish`,
          description: `Explains why a Library selection action is temporarily disabled`,
        },
        unsupportedChat: {
          id: `libraryNext.selection.unsupportedChat`,
          defaultMessage: `This selection can't be attached to a chat`,
          description: `Explains that a selection includes folders or files that cannot be attached to a ChatGPT draft`,
        },
        chatLimit: {
          id: `libraryNext.selection.chatLimit`,
          defaultMessage: `Select fewer items to start a chat`,
          description: `Explains that the Library selection exceeds the composer's file or folder attachment limit`,
        },
        unsupportedDownload: {
          id: `libraryNext.selection.unsupportedDownload`,
          defaultMessage: `Select files without folders to download`,
          description: `Explains why a Library selection containing folders cannot be downloaded`,
        },
        readOnly: {
          id: `libraryNext.selection.readOnly`,
          defaultMessage: `This selection contains read-only items`,
          description: `Explains why selected Library files cannot be modified`,
        },
        cannotDelete: {
          id: `libraryNext.selection.cannotDeleteCounted`,
          defaultMessage: `{count, plural, one {You don’t have permission to delete this item} other {You don’t have permission to delete these items}}`,
          description: `Explains why Delete is disabled for selected Library items, including shared Pages the user may still be able to edit`,
        },
        unsupportedMove: {
          id: `libraryNext.selection.unsupportedMove`,
          defaultMessage: `Select only Pages or only files and folders, with permission to move every item`,
          description: `Explains that moving requires permission for every selected item and Pages cannot be moved together with Library files or folders`,
        },
      })));
  }))();
}
export { Ye as n, Be as t };
//# sourceMappingURL=library-selection-toolbar-6dae8ae740fc.js.map
