import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Brt as n,
  Cot as r,
  DF as i,
  EQ as a,
  FF as o,
  IDt as s,
  Irt as c,
  Ixt as ee,
  Mz as l,
  Nz as u,
  PF as d,
  Pxt as f,
  TF as te,
  TJ as p,
  TQ as m,
  VDt as ne,
  Vxt as h,
  cq as re,
  jDt as g,
  t3 as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as S,
  Act as C,
  Ba as ae,
  Dct as oe,
  Dun as w,
  Ect as se,
  Eun as T,
  Ha as E,
  Mcn as ce,
  Pct as D,
  QDr as le,
  Tun as ue,
  XDr as O,
  fo as k,
  ho as A,
  jCn as j,
  jcn as M,
  jct as de,
  mo as fe,
  uo as pe,
  wun as me,
} from "./app-initial-5851df3f6cb1.js";
import { a as he, i as ge, n as N, o as _e } from "./template-gallery-modal-336945a0604c.js";
import { c as P, i as F, l as ve, o as I, s as L, t as R } from "./personalized-pages-f207fdb0390c.js";
import { i as z, n as B, r as ye, t as V } from "./space-template-catalog-3f8a73645ced.js";
function be(e) {
  let t = (0, H.c)(4),
    { query: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, U.jsx)(l, { asset: a })),
      (i = (0, U.jsx)(`h2`, {
        children: (0, U.jsx)(s, {
          id: `search.empty.title`,
          defaultMessage: `No results found`,
          description: `Heading when a search in a content collection has no matching items`,
        }),
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let o;
  return (
    t[2] === n
      ? (o = t[3])
      : ((o = (0, U.jsx)(S, {
          className: `select-none`,
          layout: `page`,
          spacing: `default`,
          illustrationSize: `tile`,
          illustration: r,
          title: i,
          description: (0, U.jsx)(s, {
            id: `search.empty.descriptionWithQuery`,
            defaultMessage: `No matches for “{query}”. Try a different search.`,
            description: `Guidance when a search has no matching items. query is the text the user searched for.`,
            values: { query: n },
          }),
        })),
        (t[2] = n),
        (t[3] = o)),
    o
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = v()), m(), g(), u(), j(), (U = b()));
  }))();
}
function G(e) {
  let t = (0, q.c)(4),
    { category: n, search: r, onNavigate: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== i || t[2] !== r
      ? ((a = (0, Y.jsx)(V, {
          children: (e) => (0, Y.jsx)(K, { catalog: e, category: n, search: r, onNavigate: i }, n),
        })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = r),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function K(e) {
  let n = (0, q.c)(70),
    { catalog: i, category: a, search: l, onNavigate: u } = e,
    d = ee(r),
    f = ne(),
    p = h(ce),
    m = h(ve),
    g = ie(F, `template-modal`),
    [_, v] = (0, J.useState)(null),
    y;
  n[0] === _ ? (y = n[1]) : ((y = (e) => e.id === _), (n[0] = _), (n[1] = y));
  let b = i.groups.flatMap(Se).find(y),
    x,
    C,
    w,
    E,
    D;
  if (
    n[2] !== i.groups ||
    n[3] !== a ||
    n[4] !== f ||
    n[5] !== m?.value ||
    n[6] !== p ||
    n[7] !== g ||
    n[8] !== l
  ) {
    C = l.trim().toLocaleLowerCase();
    let e = p ? I(f, m?.value) : [],
      t = e.length > 0 || (g?.length ?? 0) > 0;
    ((x =
      e.some((e) => {
        let { title: t, previewMarkdown: n } = e;
        return `${t} ${n}`.toLocaleLowerCase().includes(C);
      }) ||
      (g?.some((e) => {
        let { title: t, description: n } = e;
        return `${t} ${n ?? ``}`.toLocaleLowerCase().includes(C);
      }) ??
        !1)),
      (D = ge),
      (E = a));
    let r;
    (n[14] !== t || n[15] !== f
      ? ((r = t
          ? [
              {
                id: `page`,
                label: f.formatMessage(pe.page),
                templateTypes: [],
                templates: { status: `ready`, data: [] },
              },
            ]
          : []),
        (n[14] = t),
        (n[15] = f),
        (n[16] = r))
      : (r = n[16]),
      (w = [
        ...r,
        ...i.groups.map((e) =>
          e.templates.status === `ready`
            ? {
                ...e,
                templates: {
                  status: `ready`,
                  data: e.templates.data.filter((e) =>
                    `${e.name} ${e.description ?? ``}`.toLocaleLowerCase().includes(C),
                  ),
                },
              }
            : e,
        ),
      ]),
      (n[2] = i.groups),
      (n[3] = a),
      (n[4] = f),
      (n[5] = m?.value),
      (n[6] = p),
      (n[7] = g),
      (n[8] = l),
      (n[9] = x),
      (n[10] = C),
      (n[11] = w),
      (n[12] = E),
      (n[13] = D));
  } else ((x = n[9]), (C = n[10]), (w = n[11]), (E = n[12]), (D = n[13]));
  let O;
  n[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = () => v(null)), (n[17] = O)) : (O = n[17]);
  let k;
  n[18] !== u || n[19] !== l
    ? ((k = (e) => u(e?.id ?? null, l)), (n[18] = u), (n[19] = l), (n[20] = k))
    : (k = n[20]);
  let A;
  n[21] === i
    ? (A = n[22])
    : ((A = (e) => ({
        onRetryLoadTemplates: i.onRetry,
        onCreateTemplate:
          e?.id !== `page` && i.onCreateTemplate
            ? (e) => {
                let t = o(e?.id ?? ``);
                i.onCreateTemplate?.(t ? te(t) : null);
              }
            : void 0,
      })),
      (n[21] = i),
      (n[22] = A));
  let j;
  n[23] !== w || n[24] !== k || n[25] !== A
    ? ((j = { groups: w, onClose: O, onGalleryGroupSelect: k, callbacks: A }),
      (n[23] = w),
      (n[24] = k),
      (n[25] = A),
      (n[26] = j))
    : (j = n[26]);
  let M;
  n[27] !== E || n[28] !== j
    ? ((M = { initialGroupId: E, config: j }), (n[27] = E), (n[28] = j), (n[29] = M))
    : (M = n[29]);
  let N = D(M),
    P;
  n[30] !== N.model.groups || n[31] !== N.model.selectedGroupId || n[32] !== x
    ? ((P =
        ((N.model.selectedGroupId != null && N.model.selectedGroupId !== `page`) || !x) &&
        N.model.groups
          .filter((e) => N.model.selectedGroupId == null || e.id === N.model.selectedGroupId)
          .every(xe)),
      (n[30] = N.model.groups),
      (n[31] = N.model.selectedGroupId),
      (n[32] = x),
      (n[33] = P))
    : (P = n[33]);
  let L = P,
    R;
  n[34] === f
    ? (R = n[35])
    : ((R = f.formatMessage({
        id: `space.templates.search`,
        defaultMessage: `Search templates`,
        description: `Search field for the Space template gallery`,
      })),
      (n[34] = f),
      (n[35] = R));
  let z = R,
    B;
  n[36] === f
    ? (B = n[37])
    : ((B = f.formatMessage({
        id: `space.list.searchPlaceholder`,
        defaultMessage: `Search`,
        description: `Placeholder for the search field on Space home`,
      })),
      (n[36] = f),
      (n[37] = B));
  let V = B,
    H;
  if (L && C) {
    let e;
    (n[38] === l ? (e = n[39]) : ((e = (0, Y.jsx)(be, { query: l })), (n[38] = l), (n[39] = e)), (H = e));
  } else {
    let e;
    (n[40] !== i || n[41] !== L || n[42] !== N || n[43] !== d || n[44] !== l
      ? ((e = L
          ? (0, Y.jsx)(S, {
              layout: `browse`,
              illustration: (0, Y.jsx)(re, {}),
              title: (0, Y.jsx)(s, {
                id: `space.templates.empty`,
                defaultMessage: `No templates yet`,
                description: `Empty state for the Space template gallery`,
              }),
              description: N.model.canCreateTemplate
                ? (0, Y.jsx)(s, {
                    id: `space.templates.emptyDescription`,
                    defaultMessage: `Create a template to see it here`,
                    description: `Guidance for an empty Space template gallery`,
                  })
                : void 0,
              actions: N.model.canCreateTemplate
                ? (0, Y.jsx)(t, {
                    color: `primary`,
                    size: `toolbar`,
                    disabled: i.disabled || N.model.isActionPending,
                    onClick: () => void N.actions.createTemplate(),
                    children: (0, Y.jsx)(s, {
                      id: `space.templates.emptyCreate`,
                      defaultMessage: `Create template`,
                      description: `Button to create a template from the empty Space template gallery`,
                    }),
                  })
                : void 0,
            })
          : (0, Y.jsx)(he, {
              ...N,
              inset: !1,
              renderGroup: (e) =>
                e.id === `page`
                  ? (0, Y.jsx)(ye, {
                      inset: !1,
                      inTemplateGallery: !0,
                      expanded: N.model.selectedGroupId === `page`,
                      search: l,
                      selectionSurface: T.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_FULL_PAGE_GALLERY,
                      onSelect: (e, t) => {
                        le(d, me, {
                          action: ue.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                          category: `page`,
                          templateId: e,
                          templatePosition: t == null ? void 0 : c(t),
                          selectionSurface: T.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_FULL_PAGE_GALLERY,
                        });
                      },
                      onOpen: () => v(null),
                    })
                  : void 0,
              card: (e) =>
                (0, Y.jsx)(fe, {
                  template: e,
                  menuModal: !1,
                  disabled: i.disabled,
                  interaction: {
                    kind: `use`,
                    onUse: i.onUseTemplate,
                    menu: { ...i.templateActions(e), onView: () => v(e.id) },
                  },
                }),
            })),
        (n[40] = i),
        (n[41] = L),
        (n[42] = N),
        (n[43] = d),
        (n[44] = l),
        (n[45] = e))
      : (e = n[45]),
      (H = e));
  }
  let U;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Y.jsx)(s, {
        id: `space.templates.title`,
        defaultMessage: `Templates`,
        description: `Title of the Space template gallery`,
      })),
      (n[46] = U))
    : (U = n[46]);
  let W;
  n[47] !== a || n[48] !== u ? ((W = (e) => u(a, e)), (n[47] = a), (n[48] = u), (n[49] = W)) : (W = n[49]);
  let G;
  n[50] !== i.disabled ||
  n[51] !== N.actions ||
  n[52] !== N.model.canCreateTemplate ||
  n[53] !== N.model.isActionPending
    ? ((G = N.model.canCreateTemplate
        ? (0, Y.jsx)(t, {
            color: `primary`,
            size: `dialogAction`,
            disabled: i.disabled || N.model.isActionPending,
            onClick: () => void N.actions.createTemplate(),
            children: (0, Y.jsx)(s, {
              id: `space.templates.create`,
              defaultMessage: `New`,
              description: `Action to start creating a template from the Space gallery`,
            }),
          })
        : void 0),
      (n[50] = i.disabled),
      (n[51] = N.actions),
      (n[52] = N.model.canCreateTemplate),
      (n[53] = N.model.isActionPending),
      (n[54] = G))
    : (G = n[54]);
  let K;
  n[55] !== l || n[56] !== z || n[57] !== V || n[58] !== W || n[59] !== G
    ? ((K = (0, Y.jsx)(oe, {
        searchLabel: z,
        searchPlaceholder: V,
        searchQuery: l,
        onSearchQueryChange: W,
        showViewToggle: !1,
        actions: G,
      })),
      (n[55] = l),
      (n[56] = z),
      (n[57] = V),
      (n[58] = W),
      (n[59] = G),
      (n[60] = K))
    : (K = n[60]);
  let X;
  n[61] === N
    ? (X = n[62])
    : ((X = (0, Y.jsx)(de, { inset: !1, children: (0, Y.jsx)(_e, { ...N }) })), (n[61] = N), (n[62] = X));
  let Z;
  n[63] !== H || n[64] !== K || n[65] !== X
    ? ((Z = (0, Y.jsx)(se, { stickyNavigation: !1, title: U, controls: K, navigation: X, children: H })),
      (n[63] = H),
      (n[64] = K),
      (n[65] = X),
      (n[66] = Z))
    : (Z = n[66]);
  let Q = b
      ? (0, Y.jsx)(ae, {
          open: !0,
          title: b.name,
          onOpenChange: (e) => {
            e || v(null);
          },
          children: i.detail(b),
        })
      : null,
    $;
  return (
    n[67] !== Z || n[68] !== Q
      ? (($ = (0, Y.jsxs)(Y.Fragment, { children: [Z, Q] })), (n[67] = Z), (n[68] = Q), (n[69] = $))
      : ($ = n[69]),
    $
  );
}
function xe(e) {
  return e.templates.status === `ready` && e.templates.data.length === 0;
}
function Se(e) {
  return e.templates.status === `ready` ? e.templates.data : [];
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = v()),
      w(),
      n(),
      i(),
      d(),
      A(),
      N(),
      f(),
      (J = x()),
      g(),
      k(),
      E(),
      _(),
      p(),
      j(),
      W(),
      D(),
      C(),
      M(),
      z(),
      P(),
      L(),
      R(),
      O(),
      y(),
      B(),
      (Y = b()));
  }))();
}
X();
export { G as TemplateGalleryPage };
//# sourceMappingURL=page-dd3fbab75274.js.map
