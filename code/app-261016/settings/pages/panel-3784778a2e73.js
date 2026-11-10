const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-dc5e14b02beb.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-894c9e9cf353.js",
      "./preview-3690797c434b.js",
      "./editor.module-9d0afa74ff72.js",
      "./editor-8ca9404ddda9.css",
      "./preview-632774fb6fd4.css",
      "./images-8ae6089f5332.js",
      "./url-56322ec4aaae.js",
      "./api-4f89419a04a6.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-e5ef71bd716c.js",
      "./assets-4f7817c757db.js",
      "./checkpoint-99fd81089ab5.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  Bst as i,
  F3 as a,
  FBt as o,
  I3 as s,
  LNt as c,
  OFt as l,
  PBt as u,
  Qst as ee,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  e6 as h,
  hst as g,
  iCt as _,
  kFt as v,
  mst as y,
  okt as te,
  qOt as ne,
  tkt as b,
  zst as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Bc as ie,
  JRt as ae,
  Vc as x,
  YRt as S,
  gur as oe,
  hdn as C,
  iRr as se,
  iut as ce,
  sRr as le,
  tut as ue,
} from "./app-initial-ad16eaadf81f.js";
import { i as w, n as T, r as de, t as fe } from "./editors-d2fdaf12f5f6.js";
function pe(e) {
  let t = (0, E.c)(28),
    {
      date: n,
      title: r,
      attribution: i,
      actions: a,
      ariaLabel: o,
      ariaDescribedBy: s,
      isSelected: c,
      isDisabled: l,
      onSelect: u,
    } = e,
    ee = l !== void 0 && l,
    d = (0, D.useId)(),
    f;
  t[0] !== s || t[1] !== n || t[2] !== d
    ? ((f = [n == null ? null : d, s].filter(me).join(` `) || void 0),
      (t[0] = s),
      (t[1] = n),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let p;
  t[4] !== n || t[5] !== d
    ? ((p =
        n == null
          ? null
          : (0, O.jsx)(`span`, {
              id: d,
              className: `text-xs text-secondary`,
              children: (0, O.jsx)(ne, { value: n, hour: `numeric`, minute: `2-digit` }),
            })),
      (t[4] = n),
      (t[5] = d),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === r
    ? (m = t[8])
    : ((m = (0, O.jsx)(`div`, { className: `text-sm font-medium text-default`, children: r })),
      (t[7] = r),
      (t[8] = m));
  let h;
  t[9] === i
    ? (h = t[10])
    : ((h = i == null ? null : (0, O.jsx)(`div`, { className: `text-xs text-secondary`, children: i })),
      (t[9] = i),
      (t[10] = h));
  let g;
  t[11] !== p || t[12] !== m || t[13] !== h
    ? ((g = (0, O.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-1`, children: [p, m, h] })),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === a
    ? (_ = t[16])
    : ((_ =
        a == null
          ? null
          : (0, O.jsx)(`div`, {
              className: `pointer-events-auto flex shrink-0 items-center gap-1`,
              children: a,
            })),
      (t[15] = a),
      (t[16] = _));
  let v;
  t[17] !== g || t[18] !== _
    ? ((v = (0, O.jsxs)(`div`, { className: `flex min-w-0 items-start gap-2`, children: [g, _] })),
      (t[17] = g),
      (t[18] = _),
      (t[19] = v))
    : (v = t[19]);
  let y;
  return (
    t[20] !== o || t[21] !== ee || t[22] !== c || t[23] !== u || t[24] !== f || t[25] !== v || t[26] !== r
      ? ((y = (0, O.jsx)(ue, {
          ariaCurrent: c,
          ariaDescribedBy: f,
          ariaLabel: o,
          density: `row`,
          hasInteractiveContent: !0,
          isDisabled: ee,
          isSelected: c,
          title: r,
          onSelect: u,
          children: v,
        })),
        (t[20] = o),
        (t[21] = ee),
        (t[22] = c),
        (t[23] = u),
        (t[24] = f),
        (t[25] = v),
        (t[26] = r),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function me(e) {
  return e != null;
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = u()), (D = o()), d(), ce(), (O = c()));
  }))();
}
function A(e) {
  let t = (0, xe.c)(9),
    n = _(oe),
    r;
  t[0] !== n || t[1] !== e.documentType || t[2] !== e.pageId || t[3] !== e.streamKind
    ? ((r = JSON.stringify([n, e.pageId, e.streamKind ?? `content`, e.documentType ?? `page`])),
      (t[0] = n),
      (t[1] = e.documentType),
      (t[2] = e.pageId),
      (t[3] = e.streamKind),
      (t[4] = r))
    : (r = t[4]);
  let i;
  return (
    t[5] !== n || t[6] !== e || t[7] !== r
      ? ((i = (0, N.jsx)(he, { ...e, accountId: n }, r)), (t[5] = n), (t[6] = e), (t[7] = r), (t[8] = i))
      : (i = t[8]),
    i
  );
}
function he(e) {
  let r = (0, xe.c)(97),
    {
      pageId: i,
      getCurrentUpdate: a,
      streamKind: o,
      documentType: s,
      onClose: c,
      accountId: l,
      showHeader: u,
    } = e,
    d = o === void 0 ? `content` : o,
    p = s === void 0 ? `page` : s,
    m = u === void 0 || u,
    h = n(ee),
    _ = te(),
    v = (0, M.useRef)(null),
    [y, ne] = (0, M.useState)(!1),
    x,
    S;
  (r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => v.current?.abort()), (S = []), (r[0] = x), (r[1] = S))
    : ((x = r[0]), (S = r[1])),
    (0, M.useEffect)(x, S));
  let C;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        (v.current?.abort(), (v.current = null), ne(!1));
      }),
      (r[2] = C))
    : (C = r[2]);
  let ce = C,
    [le, ue] = (0, M.useState)(!1),
    [w, T] = (0, M.useState)(null),
    me = l != null,
    E;
  r[3] !== l || r[4] !== i || r[5] !== d
    ? ((E = [`space`, `page-version-history`, l, i, d]), (r[3] = l), (r[4] = i), (r[5] = d), (r[6] = E))
    : (E = r[6]);
  let D;
  r[7] !== i || r[8] !== h || r[9] !== d
    ? ((D = async (e) => {
        let { pageParam: t, signal: n } = e,
          r = ie(h, `version_history`, { stream_kind: d, page: t ? `older` : `initial` }, n);
        try {
          let e = await se.safeGet(`/pages/{page_id}/versions`, {
            parameters: { path: { page_id: i }, query: { cursor: t || void 0, limit: 20, stream_kind: d } },
            signal: n,
          });
          return (r(`success`), e);
        } catch (e) {
          let t = e;
          throw (r(n.aborted ? `canceled` : `failure`), t);
        }
      }),
      (r[7] = i),
      (r[8] = h),
      (r[9] = d),
      (r[10] = D))
    : (D = r[10]);
  let O;
  r[11] !== me || r[12] !== E || r[13] !== D
    ? ((O = {
        enabled: me,
        queryKey: E,
        initialPageParam: ``,
        getNextPageParam: be,
        queryFn: D,
        staleTime: re.THIRTY_SECONDS,
        refetchOnMount: `always`,
        retry: !1,
      }),
      (r[11] = me),
      (r[12] = E),
      (r[13] = D),
      (r[14] = O))
    : (O = r[14]);
  let {
      data: k,
      fetchNextPage: A,
      hasNextPage: he,
      isError: j,
      isFetchingNextPage: P,
      isFetchNextPageError: Ce,
      isPending: F,
      refetch: we,
    } = g(O),
    Te;
  r[15] !== l || r[16] !== a || r[17] !== i || r[18] !== h || r[19] !== d
    ? ((Te = async () => {
        if (a == null || l == null || v.current != null) return;
        let e = new AbortController();
        ((v.current = e), ne(!0), ue(!1));
        try {
          let t = await a();
          !e.signal.aborted &&
            h.get(oe) === l &&
            T({ accountId: l, pageId: i, streamKind: d, selection: { kind: `current`, update: t } });
        } catch {
          !e.signal.aborted && h.get(oe) === l && ue(!0);
        }
        e.signal.aborted || ((v.current = null), ne(!1));
      }),
      (r[15] = l),
      (r[16] = a),
      (r[17] = i),
      (r[18] = h),
      (r[19] = d),
      (r[20] = Te))
    : (Te = r[20]);
  let Ee = Te,
    De;
  r[21] === _
    ? (De = r[22])
    : ((De = _.formatMessage({
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (r[21] = _),
      (r[22] = De));
  let Oe = De,
    ke;
  r[23] === k?.pages ? (ke = r[24]) : ((ke = k?.pages.flatMap(ye)), (r[23] = k?.pages), (r[24] = ke));
  let I = ke,
    Ae;
  r[25] === k?.pages
    ? (Ae = r[26])
    : ((Ae = new Map(k?.pages.flatMap(ve))), (r[25] = k?.pages), (r[26] = Ae));
  let L = Ae,
    R;
  r[27] !== p || r[28] !== _
    ? ((R = _.formatMessage(
        {
          id: `codex.page.versions.listLabel.byDocumentType`,
          defaultMessage: `{documentType, select, granola_presentation {Slide versions} granola_workbook {Sheet versions} other {Page versions}}`,
          description: `Accessible label for the current Page and its saved checkpoints grouped by date. documentType selects slide, sheet, or page for the current document.`,
        },
        { documentType: p },
      )),
      (r[27] = p),
      (r[28] = _),
      (r[29] = R))
    : (R = r[29]);
  let z;
  r[30] === I ? (z = r[31]) : ((z = I ?? []), (r[30] = I), (r[31] = z));
  let je = a == null || l == null || y,
    Me = w == null || w.selection.kind === `current`,
    B;
  r[32] === Ee
    ? (B = r[33])
    : ((B = () => {
        Ee();
      }),
      (r[32] = Ee),
      (r[33] = B));
  let V;
  r[34] === y
    ? (V = r[35])
    : ((V = y ? (0, N.jsx)(t, { className: `icon-xs` }) : null), (r[34] = y), (r[35] = V));
  let H;
  r[36] !== k?.pages || r[37] !== j || r[38] !== F || r[39] !== L
    ? ((H =
        !F && !j
          ? (0, N.jsx)(fe, { current: !0, summary: k?.pages[0]?.current_editor_summary, names: L })
          : null),
      (r[36] = k?.pages),
      (r[37] = j),
      (r[38] = F),
      (r[39] = L),
      (r[40] = H))
    : (H = r[40]);
  let U;
  r[41] !== Oe || r[42] !== je || r[43] !== Me || r[44] !== B || r[45] !== V || r[46] !== H
    ? ((U = (0, N.jsx)(pe, {
        ariaLabel: Oe,
        isDisabled: je,
        isSelected: Me,
        onSelect: B,
        title: Oe,
        actions: V,
        attribution: H,
      })),
      (r[41] = Oe),
      (r[42] = je),
      (r[43] = Me),
      (r[44] = B),
      (r[45] = V),
      (r[46] = H),
      (r[47] = U))
    : (U = r[47]);
  let W;
  r[48] !== l || r[49] !== _ || r[50] !== L || r[51] !== i || r[52] !== w || r[53] !== d
    ? ((W = (e) => {
        let t = _.formatMessage(
          {
            id: `codex.page.versions.checkpoint`,
            defaultMessage: `Checkpoint #{sequence}`,
            description: `Saved Page checkpoint identified by its document sequence number`,
          },
          { sequence: e.through_sequence },
        );
        return (0, N.jsx)(pe, {
          ariaLabel: t,
          isSelected: w?.selection.kind === `checkpoint` && w.selection.checkpointId === e.checkpoint_id,
          onSelect: () => {
            l != null &&
              (ce(),
              T({
                accountId: l,
                pageId: i,
                streamKind: d,
                selection: {
                  kind: `checkpoint`,
                  checkpointId: e.checkpoint_id,
                  sequence: e.through_sequence,
                },
              }));
          },
          title: t,
          date: e.created_at,
          attribution: (0, N.jsx)(fe, { summary: e, names: L }),
        });
      }),
      (r[48] = l),
      (r[49] = _),
      (r[50] = L),
      (r[51] = i),
      (r[52] = w),
      (r[53] = d),
      (r[54] = W))
    : (W = r[54]);
  let G;
  r[55] !== R || r[56] !== z || r[57] !== U || r[58] !== W
    ? ((G = (0, N.jsx)(de, { label: R, items: z, getDate: _e, getKey: ge, current: U, renderItem: W })),
      (r[55] = R),
      (r[56] = z),
      (r[57] = U),
      (r[58] = W),
      (r[59] = G))
    : (G = r[59]);
  let K;
  r[60] === le
    ? (K = r[61])
    : ((K = le
        ? (0, N.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-codex-description`,
            children: (0, N.jsx)(b, {
              id: `codex.page.versions.currentError`,
              defaultMessage: `The current version is not ready. Try opening it again`,
              description: `Error when a live Page snapshot cannot be captured; the current-version button retries`,
            }),
          })
        : null),
      (r[60] = le),
      (r[61] = K));
  let q;
  r[62] === F
    ? (q = r[63])
    : ((q = F
        ? (0, N.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-codex-description`,
            role: `status`,
            children: [
              (0, N.jsx)(t, { className: `icon-xs` }),
              (0, N.jsx)(b, {
                id: `codex.page.versions.loading`,
                defaultMessage: `Loading history…`,
                description: `Status while retrieving a Page's saved checkpoints`,
              }),
            ],
          })
        : null),
      (r[62] = F),
      (r[63] = q));
  let J;
  r[64] !== A || r[65] !== j || r[66] !== Ce || r[67] !== P || r[68] !== we
    ? ((J = j
        ? (0, N.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            role: `alert`,
            children: [
              (0, N.jsx)(`span`, {
                className: `text-sm text-codex-description`,
                children: (0, N.jsx)(b, {
                  id: `codex.page.versions.error`,
                  defaultMessage: `Could not load version history`,
                  description: `Error loading the initial or subsequent Page checkpoint list`,
                }),
              }),
              (0, N.jsx)(f, {
                color: `secondary`,
                size: `compact`,
                loading: P,
                onClick: () => {
                  Ce ? A() : we();
                },
                children: (0, N.jsx)(b, {
                  id: `codex.page.versions.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry loading Page version history or a historical checkpoint after a failure`,
                }),
              }),
            ],
          })
        : null),
      (r[64] = A),
      (r[65] = j),
      (r[66] = Ce),
      (r[67] = P),
      (r[68] = we),
      (r[69] = J))
    : (J = r[69]);
  let Y;
  r[70] === I?.length
    ? (Y = r[71])
    : ((Y =
        I?.length === 0
          ? (0, N.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, N.jsx)(b, {
                id: `codex.page.versions.empty`,
                defaultMessage: `No saved checkpoints yet`,
                description: `Empty state when a Page has no stored historical checkpoints`,
              }),
            })
          : null),
      (r[70] = I?.length),
      (r[71] = Y));
  let X;
  r[72] !== A || r[73] !== he || r[74] !== P
    ? ((X = he
        ? (0, N.jsx)(f, {
            className: `justify-center`,
            color: `secondary`,
            size: `compact`,
            loading: P,
            onClick: () => {
              A();
            },
            children: (0, N.jsx)(b, {
              id: `codex.page.versions.more`,
              defaultMessage: `Show more`,
              description: `Load older checkpoints in the Page version history panel`,
            }),
          })
        : null),
      (r[72] = A),
      (r[73] = he),
      (r[74] = P),
      (r[75] = X))
    : (X = r[75]);
  let Ne;
  r[76] !== G || r[77] !== K || r[78] !== q || r[79] !== J || r[80] !== Y || r[81] !== X
    ? ((Ne = (0, N.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-panel`,
        children: [G, K, q, J, Y, X],
      })),
      (r[76] = G),
      (r[77] = K),
      (r[78] = q),
      (r[79] = J),
      (r[80] = Y),
      (r[81] = X),
      (r[82] = Ne))
    : (Ne = r[82]);
  let Pe = Ne,
    Z;
  r[83] !== Pe || r[84] !== _ || r[85] !== c || r[86] !== m
    ? ((Z = m
        ? (0, N.jsx)(ae.DetailPanel, {
            onClose: () => {
              (ce(), T(null), c());
            },
            closeLabel: _.formatMessage({
              id: `codex.page.versions.close`,
              defaultMessage: `Close version history`,
              description: `Accessible label for closing the Page version history side panel`,
            }),
            leading: (0, N.jsx)(`span`, {
              className: `truncate text-sm font-medium select-none`,
              children: (0, N.jsx)(b, {
                id: `codex.page.versions.title`,
                defaultMessage: `Version history`,
                description: `Title of the Page side panel listing saved checkpoints`,
              }),
            }),
            children: Pe,
          })
        : Pe),
      (r[83] = Pe),
      (r[84] = _),
      (r[85] = c),
      (r[86] = m),
      (r[87] = Z))
    : (Z = r[87]);
  let Q;
  r[88] !== l || r[89] !== p || r[90] !== i || r[91] !== w || r[92] !== d
    ? ((Q =
        w != null && w.accountId === l && w.pageId === i && w.streamKind === d
          ? (0, N.jsx)(
              Se,
              {
                accountId: w.accountId,
                pageId: i,
                selection: w.selection,
                documentType: p,
                streamKind: d,
                onClose: () => T(null),
              },
              w.selection.kind === `current` ? `current` : w.selection.checkpointId,
            )
          : null),
      (r[88] = l),
      (r[89] = p),
      (r[90] = i),
      (r[91] = w),
      (r[92] = d),
      (r[93] = Q))
    : (Q = r[93]);
  let $;
  return (
    r[94] !== Z || r[95] !== Q
      ? (($ = (0, N.jsxs)(N.Fragment, { children: [Z, Q] })), (r[94] = Z), (r[95] = Q), (r[96] = $))
      : ($ = r[96]),
    $
  );
}
function ge(e) {
  return e.checkpoint_id;
}
function _e(e) {
  return e.created_at;
}
function ve(e) {
  return e.actor_displays?.map(j) ?? [];
}
function j(e) {
  return [e.account_user_id, e.display_name];
}
function ye(e) {
  return e.items;
}
function be(e) {
  return e.next_cursor ?? void 0;
}
var xe, M, N, Se;
function P() {
  return (P = e(() => {
    ((xe = u()),
      y(),
      m(),
      (M = o()),
      d(),
      x(),
      S(),
      p(),
      a(),
      h(),
      C(),
      r(),
      i(),
      le(),
      w(),
      k(),
      T(),
      (N = c()),
      v(),
      (Se = s(
        async () =>
          (
            await l(
              async () => {
                let { PageVersionDialog: e } = await import(`./dialog-dc5e14b02beb.js`);
                return { PageVersionDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
              import.meta.url,
            )
          ).PageVersionDialog,
        {
          errorFallback: ({ documentType: e }) =>
            (0, N.jsx)(`span`, {
              role: `alert`,
              children: (0, N.jsx)(b, {
                id: `codex.page.versions.loadError.byDocumentType`,
                values: { documentType: e ?? `page` },
                defaultMessage: `{documentType, select, granola_presentation {Could not open version history. Reopen the slide to try again} granola_workbook {Could not open version history. Reopen the sheet to try again} other {Could not open version history. Reopen the page to try again}}`,
                description: `Error when the version history interface could not be loaded. documentType selects slide, sheet, or page for the current document.`,
              }),
            }),
        },
      )));
  }))();
}
P();
export { A as PageVersionHistoryPanel };
//# sourceMappingURL=panel-3784778a2e73.js.map
