import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CI as r,
  D$ as i,
  DB as a,
  FBt as o,
  LNt as s,
  O$ as c,
  OB as l,
  PBt as u,
  Qit as ee,
  Qst as te,
  TY as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  cJ as ne,
  gI as g,
  iCt as _,
  mI as re,
  nCt as v,
  nat as y,
  okt as ie,
  tkt as b,
  wI as ae,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cmn as x,
  Efn as S,
  Flt as C,
  Ha as oe,
  Ilt as se,
  Mlt as ce,
  Smn as w,
  Tfn as T,
  Wa as E,
  XEn as D,
  YEn as O,
  _o as k,
  bmn as le,
  fo as ue,
  go as de,
  jlt as fe,
  mo as A,
  xMr as pe,
  xmn as me,
  yMr as j,
  zlt as M,
} from "./app-initial-ad16eaadf81f.js";
import { a as N, i as P, n as F, o as he } from "./template-gallery-modal-4f828146e385.js";
import { c as I, i as ge, l as _e, o as ve, s as L, t as R } from "./personalized-pages-9830ca1f3831.js";
import { i as z, n as B, r as ye, t as V } from "./space-template-catalog-a49215b2a818.js";
function be(e) {
  let t = (0, H.c)(4),
    { query: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, U.jsx)(a, { asset: c })),
      (i = (0, U.jsx)(`h2`, {
        children: (0, U.jsx)(b, {
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
      : ((o = (0, U.jsx)(O, {
          className: `select-none`,
          layout: `page`,
          spacing: `default`,
          illustrationSize: `tile`,
          illustration: r,
          title: i,
          description: (0, U.jsx)(b, {
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
    ((H = u()), i(), f(), l(), D(), (U = s()));
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
    { catalog: r, category: i, search: a, onNavigate: o } = e,
    s = t(te),
    c = ie(),
    l = _(S),
    u = _(_e),
    d = v(ge, `template-modal`),
    [f, m] = (0, J.useState)(null),
    h;
  n[0] === f ? (h = n[1]) : ((h = (e) => e.id === f), (n[0] = f), (n[1] = h));
  let g = r.groups.flatMap(Se).find(h),
    y,
    x,
    C,
    T,
    E;
  if (
    n[2] !== r.groups ||
    n[3] !== i ||
    n[4] !== c ||
    n[5] !== u?.value ||
    n[6] !== l ||
    n[7] !== d ||
    n[8] !== a
  ) {
    x = a.trim().toLocaleLowerCase();
    let e = l ? ve(c, u?.value) : [],
      t = e.length > 0 || (d?.length ?? 0) > 0;
    ((y =
      e.some((e) => {
        let { title: t, previewMarkdown: n } = e;
        return `${t} ${n}`.toLocaleLowerCase().includes(x);
      }) ||
      (d?.some((e) => {
        let { title: t, description: n } = e;
        return `${t} ${n ?? ``}`.toLocaleLowerCase().includes(x);
      }) ??
        !1)),
      (E = P),
      (T = i));
    let o;
    (n[14] !== t || n[15] !== c
      ? ((o = t
          ? [
              {
                id: `page`,
                label: c.formatMessage(ue.page),
                templateTypes: [],
                templates: { status: `ready`, data: [] },
              },
            ]
          : []),
        (n[14] = t),
        (n[15] = c),
        (n[16] = o))
      : (o = n[16]),
      (C = [
        ...o,
        ...r.groups.map((e) =>
          e.templates.status === `ready`
            ? {
                ...e,
                templates: {
                  status: `ready`,
                  data: e.templates.data.filter((e) =>
                    `${e.name} ${e.description ?? ``}`.toLocaleLowerCase().includes(x),
                  ),
                },
              }
            : e,
        ),
      ]),
      (n[2] = r.groups),
      (n[3] = i),
      (n[4] = c),
      (n[5] = u?.value),
      (n[6] = l),
      (n[7] = d),
      (n[8] = a),
      (n[9] = y),
      (n[10] = x),
      (n[11] = C),
      (n[12] = T),
      (n[13] = E));
  } else ((y = n[9]), (x = n[10]), (C = n[11]), (T = n[12]), (E = n[13]));
  let D;
  n[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = () => m(null)), (n[17] = D)) : (D = n[17]);
  let k;
  n[18] !== o || n[19] !== a
    ? ((k = (e) => o(e?.id ?? null, a)), (n[18] = o), (n[19] = a), (n[20] = k))
    : (k = n[20]);
  let A;
  n[21] === r
    ? (A = n[22])
    : ((A = (e) => ({
        onRetryLoadTemplates: r.onRetry,
        onCreateTemplate:
          e?.id !== `page` && r.onCreateTemplate
            ? (e) => {
                let t = ae(e?.id ?? ``);
                r.onCreateTemplate?.(t ? re(t) : null);
              }
            : void 0,
      })),
      (n[21] = r),
      (n[22] = A));
  let j;
  n[23] !== C || n[24] !== k || n[25] !== A
    ? ((j = { groups: C, onClose: D, onGalleryGroupSelect: k, callbacks: A }),
      (n[23] = C),
      (n[24] = k),
      (n[25] = A),
      (n[26] = j))
    : (j = n[26]);
  let M;
  n[27] !== T || n[28] !== j
    ? ((M = { initialGroupId: T, config: j }), (n[27] = T), (n[28] = j), (n[29] = M))
    : (M = n[29]);
  let F = E(M),
    I;
  n[30] !== F.model.groups || n[31] !== F.model.selectedGroupId || n[32] !== y
    ? ((I =
        ((F.model.selectedGroupId != null && F.model.selectedGroupId !== `page`) || !y) &&
        F.model.groups
          .filter((e) => F.model.selectedGroupId == null || e.id === F.model.selectedGroupId)
          .every(xe)),
      (n[30] = F.model.groups),
      (n[31] = F.model.selectedGroupId),
      (n[32] = y),
      (n[33] = I))
    : (I = n[33]);
  let L = I,
    R;
  n[34] === c
    ? (R = n[35])
    : ((R = c.formatMessage({
        id: `space.templates.search`,
        defaultMessage: `Search templates`,
        description: `Search field for the Space template gallery`,
      })),
      (n[34] = c),
      (n[35] = R));
  let z = R,
    B;
  n[36] === c
    ? (B = n[37])
    : ((B = c.formatMessage({
        id: `space.list.searchPlaceholder`,
        defaultMessage: `Search`,
        description: `Placeholder for the search field on Space home`,
      })),
      (n[36] = c),
      (n[37] = B));
  let V = B,
    H;
  if (L && x) {
    let e;
    (n[38] === a ? (e = n[39]) : ((e = (0, Y.jsx)(be, { query: a })), (n[38] = a), (n[39] = e)), (H = e));
  } else {
    let e;
    (n[40] !== r || n[41] !== L || n[42] !== F || n[43] !== s || n[44] !== a
      ? ((e = L
          ? (0, Y.jsx)(O, {
              layout: `browse`,
              illustration: (0, Y.jsx)(ne, {}),
              title: (0, Y.jsx)(b, {
                id: `space.templates.empty`,
                defaultMessage: `No templates yet`,
                description: `Empty state for the Space template gallery`,
              }),
              description: F.model.canCreateTemplate
                ? (0, Y.jsx)(b, {
                    id: `space.templates.emptyDescription`,
                    defaultMessage: `Create a template to see it here`,
                    description: `Guidance for an empty Space template gallery`,
                  })
                : void 0,
              actions: F.model.canCreateTemplate
                ? (0, Y.jsx)(p, {
                    color: `primary`,
                    size: `toolbar`,
                    disabled: r.disabled || F.model.isActionPending,
                    onClick: () => void F.actions.createTemplate(),
                    children: (0, Y.jsx)(b, {
                      id: `space.templates.emptyCreate`,
                      defaultMessage: `Create template`,
                      description: `Button to create a template from the empty Space template gallery`,
                    }),
                  })
                : void 0,
            })
          : (0, Y.jsx)(N, {
              ...F,
              inset: !1,
              renderGroup: (e) =>
                e.id === `page`
                  ? (0, Y.jsx)(ye, {
                      inset: !1,
                      inTemplateGallery: !0,
                      expanded: F.model.selectedGroupId === `page`,
                      search: a,
                      selectionSurface: w.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_FULL_PAGE_GALLERY,
                      onSelect: (e, t) => {
                        pe(s, le, {
                          action: me.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                          category: `page`,
                          templateId: e,
                          templatePosition: t == null ? void 0 : ee(t),
                          selectionSurface: w.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_FULL_PAGE_GALLERY,
                        });
                      },
                      onOpen: () => m(null),
                    })
                  : void 0,
              card: (e) =>
                (0, Y.jsx)(de, {
                  template: e,
                  menuModal: !1,
                  disabled: r.disabled,
                  interaction: {
                    kind: `use`,
                    onUse: r.onUseTemplate,
                    menu: { ...r.templateActions(e), onView: () => m(e.id) },
                  },
                }),
            })),
        (n[40] = r),
        (n[41] = L),
        (n[42] = F),
        (n[43] = s),
        (n[44] = a),
        (n[45] = e))
      : (e = n[45]),
      (H = e));
  }
  let U;
  n[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, Y.jsx)(b, {
        id: `space.templates.title`,
        defaultMessage: `Templates`,
        description: `Title of the Space template gallery`,
      })),
      (n[46] = U))
    : (U = n[46]);
  let W;
  n[47] !== i || n[48] !== o ? ((W = (e) => o(i, e)), (n[47] = i), (n[48] = o), (n[49] = W)) : (W = n[49]);
  let G;
  n[50] !== r.disabled ||
  n[51] !== F.actions ||
  n[52] !== F.model.canCreateTemplate ||
  n[53] !== F.model.isActionPending
    ? ((G = F.model.canCreateTemplate
        ? (0, Y.jsx)(p, {
            color: `primary`,
            size: `dialogAction`,
            disabled: r.disabled || F.model.isActionPending,
            onClick: () => void F.actions.createTemplate(),
            children: (0, Y.jsx)(b, {
              id: `space.templates.create`,
              defaultMessage: `New`,
              description: `Action to start creating a template from the Space gallery`,
            }),
          })
        : void 0),
      (n[50] = r.disabled),
      (n[51] = F.actions),
      (n[52] = F.model.canCreateTemplate),
      (n[53] = F.model.isActionPending),
      (n[54] = G))
    : (G = n[54]);
  let K;
  n[55] !== a || n[56] !== z || n[57] !== V || n[58] !== W || n[59] !== G
    ? ((K = (0, Y.jsx)(ce, {
        searchLabel: z,
        searchPlaceholder: V,
        searchQuery: a,
        onSearchQueryChange: W,
        showViewToggle: !1,
        actions: G,
      })),
      (n[55] = a),
      (n[56] = z),
      (n[57] = V),
      (n[58] = W),
      (n[59] = G),
      (n[60] = K))
    : (K = n[60]);
  let X;
  n[61] === F
    ? (X = n[62])
    : ((X = (0, Y.jsx)(se, { inset: !1, children: (0, Y.jsx)(he, { ...F }) })), (n[61] = F), (n[62] = X));
  let Z;
  n[63] !== H || n[64] !== K || n[65] !== X
    ? ((Z = (0, Y.jsx)(fe, { stickyNavigation: !1, title: U, controls: K, navigation: X, children: H })),
      (n[63] = H),
      (n[64] = K),
      (n[65] = X),
      (n[66] = Z))
    : (Z = n[66]);
  let Q = g
      ? (0, Y.jsx)(oe, {
          open: !0,
          title: g.name,
          onOpenChange: (e) => {
            e || m(null);
          },
          children: r.detail(g),
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
    ((q = u()),
      x(),
      y(),
      g(),
      r(),
      k(),
      F(),
      h(),
      (J = o()),
      f(),
      A(),
      E(),
      m(),
      d(),
      D(),
      W(),
      M(),
      C(),
      T(),
      z(),
      I(),
      L(),
      R(),
      j(),
      n(),
      B(),
      (Y = s()));
  }))();
}
X();
export { G as TemplateGalleryPage };
//# sourceMappingURL=page-59bac1cfdc2f.js.map
