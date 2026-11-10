const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./library-item-dialogs-9ee5fe2d2bc1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./site-delete-confirmation-b17089235f40.js",
      "./library-delete-analytics-c95d15e65c53.js",
      "./library-name-validation-5559e2ce17f6.js",
      "./library-trash-analytics-b5f56547a9f3.js",
      "./library-page-actions-8e021b2c2498.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  Ao as i,
  CJ as ee,
  CO as te,
  Dz as a,
  IDt as o,
  Ixt as ne,
  Mz as s,
  No as c,
  Nz as l,
  Po as u,
  Pxt as d,
  TJ as f,
  TO as re,
  VDt as p,
  Vxt as m,
  _Mt as h,
  cz as g,
  fPt as _,
  gMt as ie,
  i1 as ae,
  jDt as v,
  jH as oe,
  ko as se,
  kz as ce,
  mA as y,
  n1 as b,
  pPt as le,
  r1 as ue,
  sJ as de,
  sz as x,
  t1 as fe,
  t3 as S,
  tB as pe,
  tq as me,
  vA as C,
  vzt as w,
  xMt as T,
  yMt as E,
  yzt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  Apt as he,
  CFn as O,
  CWt as ge,
  FFn as k,
  G4n as A,
  J4n as _e,
  PFn as ve,
  QDr as j,
  XDr as M,
  Y8t as N,
  bWt as ye,
  cFn as P,
  cpt as be,
  eIn as F,
  eln as xe,
  gFn as Se,
  hpt as I,
  iFn as L,
  jFn as R,
  mpt as z,
  npt as Ce,
  q8t as we,
  rFn as B,
  tpt as V,
  wFn as H,
  wpt as U,
} from "./app-initial-5851df3f6cb1.js";
import { Ds as W, ws as Te } from "./app-primary-fe8a450b3b04.js";
import { n as Ee, t as G } from "./library-delete-analytics-c95d15e65c53.js";
import {
  _ as K,
  a as q,
  c as De,
  f as Oe,
  g as ke,
  h as Ae,
  l as J,
  o as je,
  p as Y,
  s as Me,
  u as X,
  v as Ne,
} from "./selectable-library-item-873a2793fc51.js";
var Pe, Fe, Ie;
function Le() {
  return (Le = e(() => {
    ((Pe = `_Container_ly74n_2`), (Fe = `_Toolbar_ly74n_2`), (Ie = { Container: Pe, Toolbar: Fe }));
  }))();
}
function Re(e) {
  let t = (0, We.c)(7),
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
        ? ((i = (0, Q.jsx)(He, { ...e, count: n.count, pending: n.pending, actions: r })),
          (t[1] = e),
          (t[2] = n.count),
          (t[3] = n.pending),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let r;
  return (t[5] === e ? (r = t[6]) : ((r = (0, Q.jsx)(ze, { ...e })), (t[5] = e), (t[6] = r)), r);
}
function ze(e) {
  let t = (0, We.c)(17),
    n = ne(xe),
    r = m(ke),
    i = m(Ne),
    ee = n.value.selectionPages == null ? r.size : i.length,
    te = m(X),
    a = m(Oe),
    o = m(Y),
    s = o && !n.value.deleted && a.showDelete,
    c;
  t[0] === o ? (c = t[1]) : ((c = { selectionActive: o, deleteVisible: !1 }), (t[0] = o), (t[1] = c));
  let l = (0, Z.useRef)(c),
    u;
  t[2] !== s || t[3] !== n || t[4] !== o
    ? ((u = () => {
        let e = l.current;
        l.current = { selectionActive: o, deleteVisible: s };
        let t = n.get(Ce);
        if (
          (e.selectionActive !== o &&
            j(n, B, {
              ...t,
              provider: z(n.value.directoryId),
              action: L.CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED,
              changedProperty: P.CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_SELECTION_MODE,
              selectionMode: o
                ? k.CHATGPT_FILE_LIBRARY_SELECTION_MODE_MANAGEMENT
                : k.CHATGPT_FILE_LIBRARY_SELECTION_MODE_NONE,
              libraryOrigin: n.value.deleted
                ? R.CHATGPT_FILE_LIBRARY_ORIGIN_RECENTLY_DELETED_SCREEN
                : R.CHATGPT_FILE_LIBRARY_ORIGIN_LIBRARY_SCREEN,
            }),
          !e.deleteVisible && s)
        ) {
          let e = n.get(K),
            r = { libraryFileIds: e?.flatMap(Ve), folderIds: e?.flatMap(Be) };
          j(n, H, {
            sessionId: t.sessionId,
            libraryVariant: t.libraryVariant,
            action: O.CHATGPT_FILE_LIBRARY_MANAGEMENT_ACTION_DELETE,
            ...(r.libraryFileIds?.length ? { libraryFileIds: r.libraryFileIds } : {}),
            ...(r.folderIds?.length ? { folderIds: r.folderIds } : {}),
          });
        }
      }),
      (t[2] = s),
      (t[3] = n),
      (t[4] = o),
      (t[5] = u))
    : (u = t[5]);
  let d = (0, Z.useEffectEvent)(u),
    f;
  t[6] === d
    ? (f = t[7])
    : ((f = () => {
        d();
      }),
      (t[6] = d),
      (t[7] = f));
  let re;
  (t[8] !== s || t[9] !== n || t[10] !== o
    ? ((re = [o, s, n]), (t[8] = s), (t[9] = n), (t[10] = o), (t[11] = re))
    : (re = t[11]),
    (0, Z.useEffect)(f, re));
  let p;
  return (
    t[12] !== a || t[13] !== ee || t[14] !== te || t[15] !== e
      ? ((p = (0, Q.jsx)(He, { ...e, count: ee, pending: te, actions: a })),
        (t[12] = a),
        (t[13] = ee),
        (t[14] = te),
        (t[15] = e),
        (t[16] = p))
      : (p = t[16]),
    p
  );
}
function Be(e) {
  let { node: t } = e;
  return t.kind === `directory` ? [t.id] : [];
}
function Ve(e) {
  let { node: t } = e;
  return t.kind === `file` && !C(t.id) ? [t.id] : [];
}
function He(e) {
  let n = (0, We.c)(100),
    { scrollContainerRef: r, onMount: c, trashSelection: l, count: d, pending: f, actions: m } = e,
    h = ne(xe),
    g = (0, Z.useContext)(we),
    [_, ae] = (0, Z.useState)(null),
    v = p(),
    [se, ce] = (0, Z.useState)(!1),
    y;
  n[0] !== h || n[1] !== l
    ? ((y = function () {
        if (l != null) {
          l.onClear();
          return;
        }
        let e = h.get(K);
        (h.set(ke, new Set()),
          e != null && be(h, [], e, !1, ve.CHATGPT_FILE_LIBRARY_SELECTION_METHOD_CLEAR_ALL));
      }),
      (n[0] = h),
      (n[1] = l),
      (n[2] = y))
    : (y = n[2]);
  let b = y,
    le = d > 0 && !f,
    S;
  n[3] !== b || n[4] !== r || n[5] !== _
    ? ((S = (e) => {
        let t = e.target,
          n = r.current;
        e.defaultPrevented ||
          e.isComposing ||
          n == null ||
          !(t instanceof Node) ||
          (!n.contains(t) &&
            !_?.contains(t) &&
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
          b(),
          t instanceof HTMLElement &&
            (t.closest(`[data-library-item]`) != null || t.getAttribute(`role`) === `checkbox`) &&
            t.blur());
      }),
      (n[3] = b),
      (n[4] = r),
      (n[5] = _),
      (n[6] = S))
    : (S = n[6]);
  let C;
  if (
    (n[7] !== le || n[8] !== S
      ? ((C = { accelerator: `Escape`, capture: !1, allowWithinEditable: !0, enabled: le, onKeyDown: S }),
        (n[7] = le),
        (n[8] = S),
        (n[9] = C))
      : (C = n[9]),
    ge(C),
    d === 0)
  )
    return null;
  let w = $.unsupportedChat;
  f ? (w = $.pending) : m.overChatLimit && (w = $.chatLimit);
  let T;
  n[10] !== m.uploadLimit || n[11] !== w || n[12] !== v || n[13] !== f
    ? ((T = !f && m.uploadLimit != null ? Te(v, m.uploadLimit) : v.formatMessage(w)),
      (n[10] = m.uploadLimit),
      (n[11] = w),
      (n[12] = v),
      (n[13] = f),
      (n[14] = T))
    : (T = n[14]);
  let E = T,
    D;
  n[15] === h
    ? (D = n[16])
    : ((D = (e) => {
        h.set(ke, (t) => new Set([...t].filter((t) => !e.includes(t))));
      }),
      (n[15] = h),
      (n[16] = D));
  let O = D,
    k = f ? $.pending : $.readOnly,
    A = f ? $.pending : $.cannotDelete,
    j;
  n[17] !== m.showChat || n[18] !== m.showDelete || n[19] !== m.showDownload || n[20] !== m.showRestore
    ? ((j = [m.showChat, m.showDownload, m.showRestore, m.showDelete].filter(Ue)),
      (n[17] = m.showChat),
      (n[18] = m.showDelete),
      (n[19] = m.showDownload),
      (n[20] = m.showRestore),
      (n[21] = j))
    : (j = n[21]);
  let M = j.length >= 3,
    N;
  n[22] === c
    ? (N = n[23])
    : ((N = (e) => {
        if ((ae(e), e != null)) return c?.();
      }),
      (n[22] = c),
      (n[23] = N));
  let ye = g == null ? `fixed` : `absolute`,
    P;
  n[24] === ye ? (P = n[25]) : ((P = ie(Ie.Container, ye)), (n[24] = ye), (n[25] = P));
  let F;
  n[26] === v
    ? (F = n[27])
    : ((F = v.formatMessage({
        id: `libraryNext.selection.actions`,
        defaultMessage: `Selected item actions`,
        description: `Accessible label for the Library bulk action toolbar`,
      })),
      (n[26] = v),
      (n[27] = F));
  let I;
  n[28] === d
    ? (I = n[29])
    : ((I = (0, Q.jsx)(`span`, {
        className: `min-w-24 shrink-0 whitespace-nowrap tabular-nums select-none`,
        children: (0, Q.jsx)(o, {
          id: `libraryNext.selection.count`,
          defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
          description: `Count of selected Library items`,
          values: { count: d },
        }),
      })),
      (n[28] = d),
      (n[29] = I));
  let L;
  n[30] !== m.canChat || n[31] !== m.showChat || n[32] !== E || n[33] !== f || n[34] !== h || n[35] !== se
    ? ((L = m.showChat
        ? (0, Q.jsx)(x, {
            tooltipContent: !m.canChat || f ? E : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !m.canChat || f ? !0 : void 0,
              "aria-label": !m.canChat || f ? E : void 0,
              role: !m.canChat || f ? `button` : void 0,
              tabIndex: !m.canChat || f ? 0 : void 0,
              children: (0, Q.jsx)(t, {
                color: `mediaSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !m.canChat || f,
                loading: se,
                onClick: () => {
                  let e = h.get(K);
                  e != null && (ce(!0), De(h, e, h.get(Ne)).finally(() => ce(!1)));
                },
                children: se
                  ? (0, Q.jsx)(o, {
                      id: `libraryNext.selection.startingChat`,
                      defaultMessage: `Starting chat…`,
                      description: `Progress label while selected Library items are being added to a new chat and the composer is opening`,
                    })
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsx)(me, {}),
                        (0, Q.jsx)(o, {
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
      (n[30] = m.canChat),
      (n[31] = m.showChat),
      (n[32] = E),
      (n[33] = f),
      (n[34] = h),
      (n[35] = se),
      (n[36] = L))
    : (L = n[36]);
  let R;
  n[37] !== m.canDownload || n[38] !== m.showDownload || n[39] !== v || n[40] !== f || n[41] !== h
    ? ((R = m.showDownload
        ? (0, Q.jsx)(x, {
            tooltipContent:
              !m.canDownload || f ? (0, Q.jsx)(o, { ...(f ? $.pending : $.unsupportedDownload) }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !m.canDownload || f ? !0 : void 0,
              "aria-label":
                !m.canDownload || f ? v.formatMessage(f ? $.pending : $.unsupportedDownload) : void 0,
              role: !m.canDownload || f ? `button` : void 0,
              tabIndex: !m.canDownload || f ? 0 : void 0,
              children: (0, Q.jsxs)(t, {
                color: `outline`,
                radius: `full`,
                size: `toolbar`,
                disabled: !m.canDownload || f,
                onClick: () => void Me(h, `download`),
                children: [
                  (0, Q.jsx)(pe, {}),
                  (0, Q.jsx)(o, {
                    id: `libraryNext.actions.download`,
                    defaultMessage: `Download`,
                    description: `Menu action to download a Library file`,
                  }),
                ],
              }),
            }),
          })
        : null),
      (n[37] = m.canDownload),
      (n[38] = m.showDownload),
      (n[39] = v),
      (n[40] = f),
      (n[41] = h),
      (n[42] = R))
    : (R = n[42]);
  let z;
  n[43] !== m.canRestore ||
  n[44] !== m.showRestore ||
  n[45] !== k ||
  n[46] !== f ||
  n[47] !== O ||
  n[48] !== h ||
  n[49] !== l
    ? ((z = m.showRestore
        ? (0, Q.jsx)(x, {
            tooltipContent: !m.canRestore || f ? (0, Q.jsx)(o, { ...k }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, Q.jsxs)(t, {
                color: `mediaSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !m.canRestore || f,
                onClick: () => {
                  if (l != null) {
                    l.onRestore();
                    return;
                  }
                  let e = h.get(K);
                  e != null &&
                    h.get(Oe).canRestore &&
                    _e(h, Ke, {
                      accountId: h.value.accountId,
                      userId: h.value.userId,
                      analyticsContext: void 0,
                      entries: e,
                      action: `restore`,
                      onCompleted: O,
                    });
                },
                children: [
                  (0, Q.jsx)(s, { asset: u }),
                  (0, Q.jsx)(o, {
                    id: `libraryNext.selection.restore`,
                    defaultMessage: `Restore`,
                    description: `Restore selected Library files from Trash`,
                  }),
                ],
              }),
            }),
          })
        : null),
      (n[43] = m.canRestore),
      (n[44] = m.showRestore),
      (n[45] = k),
      (n[46] = f),
      (n[47] = O),
      (n[48] = h),
      (n[49] = l),
      (n[50] = z))
    : (z = n[50]);
  let B;
  n[51] !== m.canMove || n[52] !== m.showMove || n[53] !== v || n[54] !== M || n[55] !== f || n[56] !== h
    ? ((B =
        m.showMove && !M
          ? (0, Q.jsx)(x, {
              tooltipContent:
                !m.canMove || f ? (0, Q.jsx)(o, { ...(f ? $.pending : $.unsupportedMove) }) : void 0,
              children: (0, Q.jsx)(`span`, {
                className: `shrink-0`,
                "aria-disabled": !m.canMove || f ? !0 : void 0,
                "aria-label": !m.canMove || f ? v.formatMessage(f ? $.pending : $.unsupportedMove) : void 0,
                role: !m.canMove || f ? `button` : void 0,
                tabIndex: !m.canMove || f ? 0 : void 0,
                children: (0, Q.jsxs)(t, {
                  color: `outline`,
                  radius: `full`,
                  size: `toolbar`,
                  disabled: !m.canMove || f,
                  onClick: () => je(h),
                  children: [
                    (0, Q.jsx)(s, { asset: ue }),
                    (0, Q.jsx)(o, {
                      id: `libraryNext.selection.move`,
                      defaultMessage: `Move`,
                      description: `Move selected Library items into another folder`,
                    }),
                  ],
                }),
              }),
            })
          : null),
      (n[51] = m.canMove),
      (n[52] = m.showMove),
      (n[53] = v),
      (n[54] = M),
      (n[55] = f),
      (n[56] = h),
      (n[57] = B))
    : (B = n[57]);
  let V;
  n[58] !== m.canDelete ||
  n[59] !== m.showDelete ||
  n[60] !== d ||
  n[61] !== A ||
  n[62] !== v ||
  n[63] !== f ||
  n[64] !== O ||
  n[65] !== h ||
  n[66] !== l
    ? ((V = m.showDelete
        ? (0, Q.jsx)(x, {
            tooltipContent: !m.canDelete || f ? (0, Q.jsx)(o, { ...A, values: { count: d } }) : void 0,
            children: (0, Q.jsx)(`span`, {
              className: `shrink-0`,
              "aria-disabled": !m.canDelete || f ? !0 : void 0,
              "aria-label": !m.canDelete || f ? v.formatMessage(A, { count: d }) : void 0,
              role: !m.canDelete || f ? `button` : void 0,
              tabIndex: !m.canDelete || f ? 0 : void 0,
              children: (0, Q.jsxs)(t, {
                color: `dangerSolid`,
                radius: `full`,
                size: `toolbar`,
                disabled: !m.canDelete || f,
                onClick: () => {
                  if (l != null) {
                    l.onDelete();
                    return;
                  }
                  let e = h.get(K);
                  if (e == null || !h.get(Oe).canDelete) return;
                  let t = h.get(Ce);
                  (Ee(
                    h,
                    e,
                    t,
                    Se.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED,
                    !!h.value.deleted,
                  ),
                    _e(h, Ke, {
                      accountId: h.value.accountId,
                      userId: h.value.userId,
                      analyticsContext: t,
                      viewMode: h.get(he),
                      entries: e,
                      pages: h.get(Ae),
                      hasRetainedPages: h.get(Ne).length > h.get(Ae).length,
                      bulk: !0,
                      action: h.value.deleted ? `deleteForever` : `delete`,
                      onCompleted: O,
                      onOptimisticallyRemoved: O,
                    }));
                },
                children: [
                  h.value.deleted ? (0, Q.jsx)(s, { asset: i }) : (0, Q.jsx)(de, {}),
                  h.value.deleted
                    ? (0, Q.jsx)(o, {
                        id: `libraryNext.delete.forever`,
                        defaultMessage: `Delete forever`,
                        description: `Permanently delete selected Library Trash files after confirmation`,
                      })
                    : (0, Q.jsx)(o, {
                        id: `libraryNext.actions.delete`,
                        defaultMessage: `Delete`,
                        description: `Menu action to delete a Library item after confirmation`,
                      }),
                ],
              }),
            }),
          })
        : null),
      (n[58] = m.canDelete),
      (n[59] = m.showDelete),
      (n[60] = d),
      (n[61] = A),
      (n[62] = v),
      (n[63] = f),
      (n[64] = O),
      (n[65] = h),
      (n[66] = l),
      (n[67] = V))
    : (V = n[67]);
  let H;
  n[68] !== m.canMove ||
  n[69] !== m.showMove ||
  n[70] !== v ||
  n[71] !== M ||
  n[72] !== f ||
  n[73] !== h ||
  n[74] !== _
    ? ((H =
        m.showMove && M
          ? (0, Q.jsx)(te, {
              surface: `opaque`,
              contentClassName: `pointer-events-auto`,
              contentWidth: `sm`,
              portalContainer: _,
              align: `end`,
              triggerButton: (0, Q.jsx)(t, {
                color: `ghostActive`,
                radius: `full`,
                size: `toolbar`,
                uniform: !0,
                disabled: f,
                "aria-label": v.formatMessage({
                  id: `libraryNext.selection.more`,
                  defaultMessage: `More actions`,
                  description: `Open additional actions for the Library selection`,
                }),
                children: (0, Q.jsx)(oe, {}),
              }),
              children: (0, Q.jsx)(re.Item, {
                leftIcon: (0, Q.jsx)(a, { icon: { assets: { 16: ue, 20: fe } } }),
                disabled: !m.canMove,
                tooltipText: m.canMove ? void 0 : v.formatMessage($.unsupportedMove),
                onSelect: () => je(h),
                children: (0, Q.jsx)(o, {
                  id: `libraryNext.selection.move`,
                  defaultMessage: `Move`,
                  description: `Move selected Library items into another folder`,
                }),
              }),
            })
          : null),
      (n[68] = m.canMove),
      (n[69] = m.showMove),
      (n[70] = v),
      (n[71] = M),
      (n[72] = f),
      (n[73] = h),
      (n[74] = _),
      (n[75] = H))
    : (H = n[75]);
  let U;
  n[76] === v
    ? (U = n[77])
    : ((U = v.formatMessage({
        id: `libraryNext.selection.clear`,
        defaultMessage: `Clear selection`,
        description: `Deselect all Library items`,
      })),
      (n[76] = v),
      (n[77] = U));
  let W;
  n[78] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, Q.jsx)(ee, {})), (n[78] = W)) : (W = n[78]);
  let G;
  n[79] !== b || n[80] !== f || n[81] !== U
    ? ((G = (0, Q.jsx)(t, {
        color: `ghostActive`,
        radius: `full`,
        size: `toolbar`,
        uniform: !0,
        disabled: f,
        onClick: b,
        "aria-label": U,
        children: W,
      })),
      (n[79] = b),
      (n[80] = f),
      (n[81] = U),
      (n[82] = G))
    : (G = n[82]);
  let q;
  n[83] !== F ||
  n[84] !== I ||
  n[85] !== L ||
  n[86] !== R ||
  n[87] !== z ||
  n[88] !== B ||
  n[89] !== V ||
  n[90] !== H ||
  n[91] !== G
    ? ((q = (0, Q.jsxs)(`div`, {
        className: Ie.Toolbar,
        role: `toolbar`,
        "aria-label": F,
        children: [I, L, R, z, B, V, H, G],
      })),
      (n[83] = F),
      (n[84] = I),
      (n[85] = L),
      (n[86] = R),
      (n[87] = z),
      (n[88] = B),
      (n[89] = V),
      (n[90] = H),
      (n[91] = G),
      (n[92] = q))
    : (q = n[92]);
  let J;
  n[93] !== P || n[94] !== q || n[95] !== N
    ? ((J = (0, Q.jsx)(`div`, { ref: N, className: P, "data-theme": `dark`, children: q })),
      (n[93] = P),
      (n[94] = q),
      (n[95] = N),
      (n[96] = J))
    : (J = n[96]);
  let Y = J,
    X;
  return (
    n[97] !== g || n[98] !== Y
      ? ((X = g == null ? Y : (0, Ge.createPortal)(Y, g)), (n[97] = g), (n[98] = Y), (n[99] = X))
      : (X = n[99]),
    X
  );
}
function Ue(e) {
  return e;
}
var We, Z, Ge, Q, Ke, $;
function qe() {
  return (qe = e(() => {
    ((We = w()),
      y(),
      F(),
      ae(),
      b(),
      c(),
      se(),
      h(),
      d(),
      (Z = D()),
      (Ge = E()),
      v(),
      N(),
      S(),
      r(),
      l(),
      f(),
      A(),
      ce(),
      g(),
      ye(),
      M(),
      G(),
      V(),
      U(),
      I(),
      W(),
      q(),
      J(),
      Le(),
      (Q = T()),
      le(),
      (Ke = (0, Z.lazy)(() =>
        _(
          () =>
            import(`./library-item-dialogs-9ee5fe2d2bc1.js`).then((e) => ({
              default: e.ConfirmLibraryItemsDialog,
            })),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        ),
      )),
      ($ = n({
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
          defaultMessage: `Move is available for owned items in editable folders`,
          description: `Explains that Library items must be owned and outside read-only folders to move them`,
        },
      })));
  }))();
}
export { qe as n, Re as t };
//# sourceMappingURL=library-selection-toolbar-88821135b45f.js.map
