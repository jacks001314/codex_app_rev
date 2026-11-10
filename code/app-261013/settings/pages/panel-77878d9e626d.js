const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-b0c94bbe938a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./writing-block-theme-61c0ed2a12ed.js",
      "./writing-block-editor-styles-90146127a9c9.js",
      "./writing-block-editor-styles-4dc32da811e5.css",
      "./checkboxes-e2ffcb23d363.js",
      "./preview-3e5329112556.js",
      "./editor.module-79b8a30b4fbe.js",
      "./editor-c20f2a3b7037.css",
      "./preview-632774fb6fd4.css",
      "./images-7c1b1f09d7e2.js",
      "./url-4698e75f04db.js",
      "./api-d4f3b59d2f9b.js",
      "./url-e0b3d4c5bcdd.css",
      "./page-metadata-2ff7f696ceb6.js",
      "./assets-4f7817c757db.js",
      "./checkpoint-1ecd1fe25b9c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  Fat as i,
  IDt as a,
  Ixt as ee,
  Mot as o,
  Not as s,
  ODt as te,
  Pat as ne,
  Pxt as c,
  VDt as re,
  Vxt as l,
  fPt as u,
  i3 as d,
  jDt as f,
  pPt as p,
  r3 as m,
  t3 as h,
  vzt as g,
  wot as _,
  xMt as v,
  yzt as y,
  z4 as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as x,
  Dor as ie,
  Rc as ae,
  XHt as S,
  Xct as C,
  YHt as oe,
  iPr as se,
  sPr as ce,
  xsn as le,
  zc as ue,
} from "./app-initial-5851df3f6cb1.js";
import { i as w, n as T, r as de, t as fe } from "./editors-6970ffed9531.js";
function pe(e) {
  let t = (0, E.c)(28),
    {
      date: n,
      title: r,
      attribution: i,
      actions: a,
      ariaLabel: ee,
      ariaDescribedBy: o,
      isSelected: s,
      isDisabled: ne,
      onSelect: c,
    } = e,
    re = ne !== void 0 && ne,
    l = (0, D.useId)(),
    u;
  t[0] !== o || t[1] !== n || t[2] !== l
    ? ((u = [n == null ? null : l, o].filter(me).join(` `) || void 0),
      (t[0] = o),
      (t[1] = n),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] !== n || t[5] !== l
    ? ((d =
        n == null
          ? null
          : (0, O.jsx)(`span`, {
              id: l,
              className: `text-xs text-secondary`,
              children: (0, O.jsx)(te, { value: n, hour: `numeric`, minute: `2-digit` }),
            })),
      (t[4] = n),
      (t[5] = l),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === r
    ? (f = t[8])
    : ((f = (0, O.jsx)(`div`, { className: `text-sm font-medium text-default`, children: r })),
      (t[7] = r),
      (t[8] = f));
  let p;
  t[9] === i
    ? (p = t[10])
    : ((p = i == null ? null : (0, O.jsx)(`div`, { className: `text-xs text-secondary`, children: i })),
      (t[9] = i),
      (t[10] = p));
  let m;
  t[11] !== d || t[12] !== f || t[13] !== p
    ? ((m = (0, O.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-1`, children: [d, f, p] })),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === a
    ? (h = t[16])
    : ((h =
        a == null
          ? null
          : (0, O.jsx)(`div`, {
              className: `pointer-events-auto flex shrink-0 items-center gap-1`,
              children: a,
            })),
      (t[15] = a),
      (t[16] = h));
  let g;
  t[17] !== m || t[18] !== h
    ? ((g = (0, O.jsxs)(`div`, { className: `flex min-w-0 items-start gap-2`, children: [m, h] })),
      (t[17] = m),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  return (
    t[20] !== ee || t[21] !== re || t[22] !== s || t[23] !== c || t[24] !== u || t[25] !== g || t[26] !== r
      ? ((_ = (0, O.jsx)(C, {
          ariaCurrent: s,
          ariaDescribedBy: u,
          ariaLabel: ee,
          density: `row`,
          hasInteractiveContent: !0,
          isDisabled: re,
          isSelected: s,
          title: r,
          onSelect: c,
          children: g,
        })),
        (t[20] = ee),
        (t[21] = re),
        (t[22] = s),
        (t[23] = c),
        (t[24] = u),
        (t[25] = g),
        (t[26] = r),
        (t[27] = _))
      : (_ = t[27]),
    _
  );
}
function me(e) {
  return e != null;
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = g()), (D = y()), f(), x(), (O = v()));
  }))();
}
function A(e) {
  let t = (0, xe.c)(9),
    n = l(ie),
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
  let n = (0, xe.c)(97),
    {
      pageId: i,
      getCurrentUpdate: o,
      streamKind: te,
      documentType: c,
      onClose: l,
      accountId: u,
      showHeader: d,
    } = e,
    f = te === void 0 ? `content` : te,
    p = c === void 0 ? `page` : c,
    h = d === void 0 || d,
    g = ee(r),
    _ = re(),
    v = (0, M.useRef)(null),
    [y, b] = (0, M.useState)(!1),
    x,
    S;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => () => v.current?.abort()), (S = []), (n[0] = x), (n[1] = S))
    : ((x = n[0]), (S = n[1])),
    (0, M.useEffect)(x, S));
  let C;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        (v.current?.abort(), (v.current = null), b(!1));
      }),
      (n[2] = C))
    : (C = n[2]);
  let ce = C,
    [le, ue] = (0, M.useState)(!1),
    [w, T] = (0, M.useState)(null),
    me = u != null,
    E;
  n[3] !== u || n[4] !== i || n[5] !== f
    ? ((E = [`space`, `page-version-history`, u, i, f]), (n[3] = u), (n[4] = i), (n[5] = f), (n[6] = E))
    : (E = n[6]);
  let D;
  n[7] !== i || n[8] !== g || n[9] !== f
    ? ((D = async (e) => {
        let { pageParam: t, signal: n } = e,
          r = ae(g, `version_history`, { stream_kind: f, page: t ? `older` : `initial` }, n);
        try {
          let e = await se.safeGet(`/pages/{page_id}/versions`, {
            parameters: { path: { page_id: i }, query: { cursor: t || void 0, limit: 20, stream_kind: f } },
            signal: n,
          });
          return (r(`success`), e);
        } catch (e) {
          let t = e;
          throw (r(n.aborted ? `canceled` : `failure`), t);
        }
      }),
      (n[7] = i),
      (n[8] = g),
      (n[9] = f),
      (n[10] = D))
    : (D = n[10]);
  let O;
  n[11] !== me || n[12] !== E || n[13] !== D
    ? ((O = {
        enabled: me,
        queryKey: E,
        initialPageParam: ``,
        getNextPageParam: be,
        queryFn: D,
        staleTime: ne.THIRTY_SECONDS,
        refetchOnMount: `always`,
        retry: !1,
      }),
      (n[11] = me),
      (n[12] = E),
      (n[13] = D),
      (n[14] = O))
    : (O = n[14]);
  let {
      data: k,
      fetchNextPage: A,
      hasNextPage: he,
      isError: j,
      isFetchingNextPage: P,
      isFetchNextPageError: Ce,
      isPending: F,
      refetch: we,
    } = s(O),
    I;
  n[15] !== u || n[16] !== o || n[17] !== i || n[18] !== g || n[19] !== f
    ? ((I = async () => {
        if (o == null || u == null || v.current != null) return;
        let e = new AbortController();
        ((v.current = e), b(!0), ue(!1));
        try {
          let t = await o();
          !e.signal.aborted &&
            g.get(ie) === u &&
            T({ accountId: u, pageId: i, streamKind: f, selection: { kind: `current`, update: t } });
        } catch {
          !e.signal.aborted && g.get(ie) === u && ue(!0);
        }
        e.signal.aborted || ((v.current = null), b(!1));
      }),
      (n[15] = u),
      (n[16] = o),
      (n[17] = i),
      (n[18] = g),
      (n[19] = f),
      (n[20] = I))
    : (I = n[20]);
  let Te = I,
    Ee;
  n[21] === _
    ? (Ee = n[22])
    : ((Ee = _.formatMessage({
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (n[21] = _),
      (n[22] = Ee));
  let De = Ee,
    Oe;
  n[23] === k?.pages ? (Oe = n[24]) : ((Oe = k?.pages.flatMap(ye)), (n[23] = k?.pages), (n[24] = Oe));
  let L = Oe,
    ke;
  n[25] === k?.pages
    ? (ke = n[26])
    : ((ke = new Map(k?.pages.flatMap(ve))), (n[25] = k?.pages), (n[26] = ke));
  let R = ke,
    z;
  n[27] !== p || n[28] !== _
    ? ((z = _.formatMessage(
        {
          id: `codex.page.versions.listLabel.byDocumentType`,
          defaultMessage: `{documentType, select, granola_presentation {Slide versions} granola_workbook {Sheet versions} other {Page versions}}`,
          description: `Accessible label for the current Page and its saved checkpoints grouped by date. documentType selects slide, sheet, or page for the current document.`,
        },
        { documentType: p },
      )),
      (n[27] = p),
      (n[28] = _),
      (n[29] = z))
    : (z = n[29]);
  let B;
  n[30] === L ? (B = n[31]) : ((B = L ?? []), (n[30] = L), (n[31] = B));
  let Ae = o == null || u == null || y,
    je = w == null || w.selection.kind === `current`,
    V;
  n[32] === Te
    ? (V = n[33])
    : ((V = () => {
        Te();
      }),
      (n[32] = Te),
      (n[33] = V));
  let H;
  n[34] === y
    ? (H = n[35])
    : ((H = y ? (0, N.jsx)(m, { className: `icon-xs` }) : null), (n[34] = y), (n[35] = H));
  let U;
  n[36] !== k?.pages || n[37] !== j || n[38] !== F || n[39] !== R
    ? ((U =
        !F && !j
          ? (0, N.jsx)(fe, { current: !0, summary: k?.pages[0]?.current_editor_summary, names: R })
          : null),
      (n[36] = k?.pages),
      (n[37] = j),
      (n[38] = F),
      (n[39] = R),
      (n[40] = U))
    : (U = n[40]);
  let W;
  n[41] !== De || n[42] !== Ae || n[43] !== je || n[44] !== V || n[45] !== H || n[46] !== U
    ? ((W = (0, N.jsx)(pe, {
        ariaLabel: De,
        isDisabled: Ae,
        isSelected: je,
        onSelect: V,
        title: De,
        actions: H,
        attribution: U,
      })),
      (n[41] = De),
      (n[42] = Ae),
      (n[43] = je),
      (n[44] = V),
      (n[45] = H),
      (n[46] = U),
      (n[47] = W))
    : (W = n[47]);
  let G;
  n[48] !== u || n[49] !== _ || n[50] !== R || n[51] !== i || n[52] !== w || n[53] !== f
    ? ((G = (e) => {
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
            u != null &&
              (ce(),
              T({
                accountId: u,
                pageId: i,
                streamKind: f,
                selection: {
                  kind: `checkpoint`,
                  checkpointId: e.checkpoint_id,
                  sequence: e.through_sequence,
                },
              }));
          },
          title: t,
          date: e.created_at,
          attribution: (0, N.jsx)(fe, { summary: e, names: R }),
        });
      }),
      (n[48] = u),
      (n[49] = _),
      (n[50] = R),
      (n[51] = i),
      (n[52] = w),
      (n[53] = f),
      (n[54] = G))
    : (G = n[54]);
  let K;
  n[55] !== z || n[56] !== B || n[57] !== W || n[58] !== G
    ? ((K = (0, N.jsx)(de, { label: z, items: B, getDate: _e, getKey: ge, current: W, renderItem: G })),
      (n[55] = z),
      (n[56] = B),
      (n[57] = W),
      (n[58] = G),
      (n[59] = K))
    : (K = n[59]);
  let q;
  n[60] === le
    ? (q = n[61])
    : ((q = le
        ? (0, N.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-codex-description`,
            children: (0, N.jsx)(a, {
              id: `codex.page.versions.currentError`,
              defaultMessage: `The current version is not ready. Try opening it again`,
              description: `Error when a live Page snapshot cannot be captured; the current-version button retries`,
            }),
          })
        : null),
      (n[60] = le),
      (n[61] = q));
  let J;
  n[62] === F
    ? (J = n[63])
    : ((J = F
        ? (0, N.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-codex-description`,
            role: `status`,
            children: [
              (0, N.jsx)(m, { className: `icon-xs` }),
              (0, N.jsx)(a, {
                id: `codex.page.versions.loading`,
                defaultMessage: `Loading history…`,
                description: `Status while retrieving a Page's saved checkpoints`,
              }),
            ],
          })
        : null),
      (n[62] = F),
      (n[63] = J));
  let Y;
  n[64] !== A || n[65] !== j || n[66] !== Ce || n[67] !== P || n[68] !== we
    ? ((Y = j
        ? (0, N.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3`,
            role: `alert`,
            children: [
              (0, N.jsx)(`span`, {
                className: `text-sm text-codex-description`,
                children: (0, N.jsx)(a, {
                  id: `codex.page.versions.error`,
                  defaultMessage: `Could not load version history`,
                  description: `Error loading the initial or subsequent Page checkpoint list`,
                }),
              }),
              (0, N.jsx)(t, {
                color: `secondary`,
                size: `compact`,
                loading: P,
                onClick: () => {
                  Ce ? A() : we();
                },
                children: (0, N.jsx)(a, {
                  id: `codex.page.versions.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry loading Page version history or a historical checkpoint after a failure`,
                }),
              }),
            ],
          })
        : null),
      (n[64] = A),
      (n[65] = j),
      (n[66] = Ce),
      (n[67] = P),
      (n[68] = we),
      (n[69] = Y))
    : (Y = n[69]);
  let X;
  n[70] === L?.length
    ? (X = n[71])
    : ((X =
        L?.length === 0
          ? (0, N.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, N.jsx)(a, {
                id: `codex.page.versions.empty`,
                defaultMessage: `No saved checkpoints yet`,
                description: `Empty state when a Page has no stored historical checkpoints`,
              }),
            })
          : null),
      (n[70] = L?.length),
      (n[71] = X));
  let Z;
  n[72] !== A || n[73] !== he || n[74] !== P
    ? ((Z = he
        ? (0, N.jsx)(t, {
            className: `justify-center`,
            color: `secondary`,
            size: `compact`,
            loading: P,
            onClick: () => {
              A();
            },
            children: (0, N.jsx)(a, {
              id: `codex.page.versions.more`,
              defaultMessage: `Show more`,
              description: `Load older checkpoints in the Page version history panel`,
            }),
          })
        : null),
      (n[72] = A),
      (n[73] = he),
      (n[74] = P),
      (n[75] = Z))
    : (Z = n[75]);
  let Me;
  n[76] !== K || n[77] !== q || n[78] !== J || n[79] !== Y || n[80] !== X || n[81] !== Z
    ? ((Me = (0, N.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-panel`,
        children: [K, q, J, Y, X, Z],
      })),
      (n[76] = K),
      (n[77] = q),
      (n[78] = J),
      (n[79] = Y),
      (n[80] = X),
      (n[81] = Z),
      (n[82] = Me))
    : (Me = n[82]);
  let Ne = Me,
    Q;
  n[83] !== Ne || n[84] !== _ || n[85] !== l || n[86] !== h
    ? ((Q = h
        ? (0, N.jsx)(oe.DetailPanel, {
            onClose: () => {
              (ce(), T(null), l());
            },
            closeLabel: _.formatMessage({
              id: `codex.page.versions.close`,
              defaultMessage: `Close version history`,
              description: `Accessible label for closing the Page version history side panel`,
            }),
            leading: (0, N.jsx)(`span`, {
              className: `truncate text-sm font-medium select-none`,
              children: (0, N.jsx)(a, {
                id: `codex.page.versions.title`,
                defaultMessage: `Version history`,
                description: `Title of the Page side panel listing saved checkpoints`,
              }),
            }),
            children: Ne,
          })
        : Ne),
      (n[83] = Ne),
      (n[84] = _),
      (n[85] = l),
      (n[86] = h),
      (n[87] = Q))
    : (Q = n[87]);
  let $;
  n[88] !== u || n[89] !== p || n[90] !== i || n[91] !== w || n[92] !== f
    ? (($ =
        w != null && w.accountId === u && w.pageId === i && w.streamKind === f
          ? (0, N.jsx)(
              Se,
              {
                accountId: w.accountId,
                pageId: i,
                selection: w.selection,
                documentType: p,
                streamKind: f,
                onClose: () => T(null),
              },
              w.selection.kind === `current` ? `current` : w.selection.checkpointId,
            )
          : null),
      (n[88] = u),
      (n[89] = p),
      (n[90] = i),
      (n[91] = w),
      (n[92] = f),
      (n[93] = $))
    : ($ = n[93]);
  let Pe;
  return (
    n[94] !== Q || n[95] !== $
      ? ((Pe = (0, N.jsxs)(N.Fragment, { children: [Q, $] })), (n[94] = Q), (n[95] = $), (n[96] = Pe))
      : (Pe = n[96]),
    Pe
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
    ((xe = g()),
      o(),
      c(),
      (M = y()),
      f(),
      ue(),
      S(),
      h(),
      b(),
      d(),
      le(),
      _(),
      i(),
      ce(),
      w(),
      k(),
      T(),
      (N = v()),
      p(),
      (Se = n(
        async () =>
          (
            await u(
              async () => {
                let { PageVersionDialog: e } = await import(`./dialog-b0c94bbe938a.js`);
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
              children: (0, N.jsx)(a, {
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
//# sourceMappingURL=panel-77878d9e626d.js.map
