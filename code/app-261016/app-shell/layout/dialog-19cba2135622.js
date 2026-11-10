import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IH as n,
  IO as r,
  JO as i,
  LNt as a,
  LO as o,
  PBt as s,
  RO as c,
  TY as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  okt as p,
  qO as m,
  tkt as h,
  zO as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Clt as _,
  Qlt as v,
  Slt as y,
  XEn as b,
  Xlt as x,
  YEn as S,
  cV as C,
  dan as w,
  fan as T,
  hut as E,
  iut as D,
  lV as O,
  mut as k,
  tut as A,
  van as j,
  yan as M,
} from "./app-initial-ad16eaadf81f.js";
import { n as N, t as P } from "./toolbar-breadcrumb-d8f79235f5b5.js";
function F(e) {
  let t = (0, B.c)(37),
    {
      children: n,
      pageCount: i,
      canMove: a,
      error: s,
      isPreparing: l,
      isMoving: u,
      isLoading: f,
      isError: _,
      items: v,
      path: y,
      searchQuery: b,
      hasMore: x,
      isLoadingMore: S,
      onLoadMore: w,
      onClose: T,
      onNavigate: E,
      onRetry: D,
      onSearchQueryChange: O,
      onSubmit: A,
    } = e,
    j = i === void 0 ? 1 : i,
    M = u !== void 0 && u,
    N = x !== void 0 && x,
    F = S !== void 0 && S,
    H = p(),
    U;
  if (
    t[0] !== N ||
    t[1] !== _ ||
    t[2] !== f ||
    t[3] !== F ||
    t[4] !== v ||
    t[5] !== w ||
    t[6] !== E ||
    t[7] !== D
  ) {
    if (f) U = (0, V.jsx)(L, {});
    else if (_) U = (0, V.jsx)(R, { onRetry: D });
    else if (v?.length === 0 && !N) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, V.jsx)(h, {
            id: `codex.space.page.crossSpaceMove.noPages`,
            defaultMessage: `No pages`,
            description: `Empty state when the current destination has no child Pages`,
          })),
          (t[9] = e))
        : (e = t[9]),
        (U = (0, V.jsx)(z, { children: e })));
    } else {
      let e;
      t[10] !== v || t[11] !== E
        ? ((e = v?.map((e) => (0, V.jsx)(I, { item: e, onSelect: () => E(e.id) }, e.id))),
          (t[10] = v),
          (t[11] = E),
          (t[12] = e))
        : (e = t[12]);
      let n;
      (t[13] !== N || t[14] !== F || t[15] !== w
        ? ((n = N
            ? (0, V.jsx)(d, {
                color: `ghost`,
                loading: F,
                onClick: w,
                type: `button`,
                children: (0, V.jsx)(h, {
                  id: `codex.space.page.crossSpaceMove.loadMore`,
                  defaultMessage: `Load more`,
                  description: `Load more Pages in the move destination picker`,
                }),
              })
            : null),
          (t[13] = N),
          (t[14] = F),
          (t[15] = w),
          (t[16] = n))
        : (n = t[16]),
        (U = (0, V.jsxs)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto rounded-xl border border-subtle p-1 select-none`,
          role: `list`,
          children: [e, n],
        })));
    }
    ((t[0] = N),
      (t[1] = _),
      (t[2] = f),
      (t[3] = F),
      (t[4] = v),
      (t[5] = w),
      (t[6] = E),
      (t[7] = D),
      (t[8] = U));
  } else U = t[8];
  let W;
  t[17] !== M || t[18] !== T
    ? ((W = (e) => {
        !e && !M && T();
      }),
      (t[17] = M),
      (t[18] = T),
      (t[19] = W))
    : (W = t[19]);
  let G;
  t[20] !== a ||
  t[21] !== U ||
  t[22] !== s ||
  t[23] !== H ||
  t[24] !== l ||
  t[25] !== T ||
  t[26] !== E ||
  t[27] !== O ||
  t[28] !== A ||
  t[29] !== j ||
  t[30] !== y ||
  t[31] !== b
    ? ((G = (e) =>
        (0, V.jsxs)(r, {
          as: `form`,
          size: `full`,
          onSubmit: (e) => {
            (e.preventDefault(), a && !l && A());
          },
          children: [
            (0, V.jsx)(g, {
              children: (0, V.jsx)(c, {
                title: (0, V.jsx)(m, {
                  children:
                    j === 1
                      ? (0, V.jsx)(h, {
                          id: `codex.space.page.crossSpaceMove.title`,
                          defaultMessage: `Move page`,
                          description: `Title of the destination picker for moving a Page into another owned Space or Page`,
                        })
                      : (0, V.jsx)(h, {
                          id: `codex.space.page.crossSpaceMove.multipleTitle`,
                          defaultMessage: `Move {count} pages`,
                          description: `Title of the single destination picker for moving multiple selected Pages. The count is the number of independently moved root Pages, excluding selected descendants.`,
                          values: { count: j },
                        }),
                }),
              }),
            }),
            (0, V.jsx)(g, {
              children: (0, V.jsx)(k, {
                autoFocus: !0,
                disabled: l,
                id: `cross-space-page-move-search`,
                inputRole: `searchbox`,
                label: H.formatMessage({
                  id: `codex.space.page.crossSpaceMove.search.label`,
                  defaultMessage: `Search pages`,
                  description: `Accessible label for searching destination Spaces and Pages in the Page move dialog`,
                }),
                onSearchQueryChange: O,
                placeholder: H.formatMessage({
                  id: `codex.space.page.crossSpaceMove.search.placeholder`,
                  defaultMessage: `Search pages`,
                  description: `Placeholder for searching destination Spaces and Pages in the Page move dialog`,
                }),
                searchQuery: b,
                variant: `toolbar`,
              }),
            }),
            (0, V.jsxs)(g, {
              className: `flex min-h-0 flex-1 flex-col gap-3`,
              children: [
                (0, V.jsx)(P, {
                  ancestors:
                    y.length === 0
                      ? []
                      : [
                          {
                            id: `page-move-root`,
                            label: (0, V.jsx)(h, {
                              id: `codex.space.page.crossSpaceMove.spaces`,
                              defaultMessage: `Space`,
                              description: `Root breadcrumb in the Page move destination picker`,
                            }),
                            onClick: () => E(null),
                          },
                          ...y
                            .slice(0, -1)
                            .map((e) => ({ id: e.id, label: e.label, onClick: () => E(e.id) })),
                        ],
                  current:
                    y.length === 0
                      ? (0, V.jsx)(h, {
                          id: `codex.space.page.crossSpaceMove.spaces`,
                          defaultMessage: `Space`,
                          description: `Root breadcrumb in the Page move destination picker`,
                        })
                      : y.at(-1)?.label,
                  textSm: !0,
                }),
                U,
                s
                  ? (0, V.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, V.jsx)(h, {
                        id: `codex.space.page.crossSpaceMove.prepareError`,
                        defaultMessage: `Couldn’t move this page to that destination`,
                        description: `Error shown when the server cannot prepare a Page move to the selected destination`,
                      }),
                    })
                  : null,
              ],
            }),
            e == null ? null : (0, V.jsx)(g, { children: e }),
            (0, V.jsx)(g, {
              children: (0, V.jsxs)(o, {
                children: [
                  (0, V.jsx)(d, {
                    color: `ghost`,
                    type: `button`,
                    onClick: T,
                    children: (0, V.jsx)(h, {
                      id: `codex.space.page.crossSpaceMove.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that closes the Page move destination picker without moving anything`,
                    }),
                  }),
                  (0, V.jsx)(d, {
                    color: `primary`,
                    disabled: !a,
                    loading: l,
                    type: `submit`,
                    children:
                      y.length === 0
                        ? (0, V.jsx)(h, {
                            id: `codex.space.page.crossSpaceMove.moveToPersonal`,
                            defaultMessage: `Move to Personal`,
                            description: `Button that moves a Page and its children to the top level of the user's personal Space; any permission changes are previewed before confirmation`,
                          })
                        : (0, V.jsx)(h, {
                            id: `codex.space.page.crossSpaceMove.moveHere`,
                            defaultMessage: `Move here`,
                            description: `Button that moves a Page into the currently browsed destination`,
                          }),
                  }),
                ],
              }),
            }),
          ],
        })),
      (t[20] = a),
      (t[21] = U),
      (t[22] = s),
      (t[23] = H),
      (t[24] = l),
      (t[25] = T),
      (t[26] = E),
      (t[27] = O),
      (t[28] = A),
      (t[29] = j),
      (t[30] = y),
      (t[31] = b),
      (t[32] = G))
    : (G = t[32]);
  let K;
  return (
    t[33] !== n || t[34] !== W || t[35] !== G
      ? ((K = (0, V.jsx)(C, { diagnostics: n, size: `wideTall`, onOpenChange: W, children: G })),
        (t[33] = n),
        (t[34] = W),
        (t[35] = G),
        (t[36] = K))
      : (K = t[36]),
    K
  );
}
function I(e) {
  let t = (0, B.c)(12),
    { item: r, onSelect: i } = e,
    a;
  t[0] !== r.canOpen || t[1] !== r.isDisabled || t[2] !== r.title || t[3] !== i
    ? ((a = (e) => {
        let { icon: t, title: a } = e;
        return (0, V.jsx)(A, {
          density: `compact`,
          icon: (0, V.jsx)(x, { artwork: t }),
          isDisabled: r.isDisabled,
          isSelected: !1,
          rightText: r.canOpen ? (0, V.jsx)(n, { className: `text-default` }) : void 0,
          rightTextPosition: `center`,
          showDivider: !1,
          title: r.title ? a : (0, V.jsx)(h, { ...M.untitled }),
          onSelect: i,
        });
      }),
      (t[0] = r.canOpen),
      (t[1] = r.isDisabled),
      (t[2] = r.title),
      (t[3] = i),
      (t[4] = a))
    : (a = t[4]);
  let o;
  return (
    t[5] !== r.documentType ||
    t[6] !== r.namespace ||
    t[7] !== r.pageId ||
    t[8] !== r.symbol ||
    t[9] !== r.title ||
    t[10] !== a
      ? ((o = (0, V.jsx)(w, {
          iconColor: `file-type`,
          iconSize: 20,
          documentType: r.documentType,
          namespace: r.namespace,
          pageId: r.pageId,
          symbol: r.symbol,
          title: r.title,
          children: a,
        })),
        (t[5] = r.documentType),
        (t[6] = r.namespace),
        (t[7] = r.pageId),
        (t[8] = r.symbol),
        (t[9] = r.title),
        (t[10] = a),
        (t[11] = o))
      : (o = t[11]),
    o
  );
}
function L() {
  let e = (0, B.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, V.jsx)(`div`, { className: `size-8 shrink-0 rounded-lg bg-text/10` })), (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, V.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto rounded-xl border border-subtle p-1 select-none`,
          children: (0, V.jsx)(y, {
            density: `compact`,
            icon: t,
            rowCount: 3,
            loadingLabel: (0, V.jsx)(h, {
              id: `codex.space.page.crossSpaceMove.loading`,
              defaultMessage: `Loading destinations…`,
              description: `Status shown while Page move destinations are loading`,
            }),
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function R(e) {
  let t = (0, B.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, V.jsx)(`span`, {
        className: `text-secondary`,
        children: (0, V.jsx)(h, {
          id: `codex.space.page.crossSpaceMove.loadError`,
          defaultMessage: `Couldn’t load destinations`,
          description: `Error shown when Page move destinations fail to load`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, V.jsx)(h, {
        id: `codex.space.page.crossSpaceMove.retry`,
        defaultMessage: `Try again`,
        description: `Button that retries loading Page move destinations`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, V.jsxs)(`div`, {
          className: `flex min-h-0 flex-1 items-center justify-center gap-3 rounded-xl border border-subtle`,
          role: `alert`,
          children: [r, (0, V.jsx)(d, { color: `ghost`, type: `button`, onClick: n, children: i })],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function z(e) {
  let t = (0, B.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, V.jsx)(`div`, {
          className: `flex min-h-0 flex-1 rounded-xl border border-subtle`,
          children: (0, V.jsx)(S, { title: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = s()), u(), f(), i(), t(), l(), b(), E(), D(), _(), N(), v(), T(), j(), O(), (V = a()));
  }))();
}
H();
export { F as PageMoveDestinationDialog };
//# sourceMappingURL=dialog-19cba2135622.js.map
