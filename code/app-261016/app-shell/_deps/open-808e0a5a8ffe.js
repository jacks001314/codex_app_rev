const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./tab-9a218dcab291.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./composer-replacement-2e2906141020.js",
      "./composer-replacement-state-93020b8a2137.js",
      "./load-metrics-f9e56924ea40.js",
      "./load-metrics-state-c687d5e55dc1.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CK as n,
  DJ as r,
  F3 as i,
  HFt as a,
  I3 as o,
  JJ as ee,
  JV as s,
  KL as c,
  LNt as l,
  NPt as u,
  Nq as te,
  OFt as d,
  TY as f,
  VJ as p,
  VRt as m,
  Wq as h,
  XOt as g,
  YOt as _,
  YV as ne,
  cq as re,
  hK as ie,
  hU as v,
  kFt as y,
  kRt as b,
  oJ as x,
  qL as ae,
  sY as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as se,
  ADn as ce,
  BL as le,
  CIr as ue,
  Dy as S,
  Ey as de,
  FOr as fe,
  Hlr as pe,
  Inn as me,
  Lnn as he,
  MDn as ge,
  Ofn as C,
  SIr as w,
  Swn as T,
  Tfn as E,
  Ulr as D,
  Vdn as O,
  XDn as k,
  Ycr as A,
  ZDn as j,
  aHt as M,
  bOn as N,
  bwn as P,
  eHt as F,
  gur as I,
  hL as L,
  hdn as _e,
  iHt as ve,
  nHt as ye,
  oHt as R,
  pL as be,
  rHt as z,
  wy as B,
  xwn as V,
  yOn as xe,
  zL as Se,
  zOr as Ce,
} from "./app-initial-ad16eaadf81f.js";
function we(e) {
  return H(e, `all`);
}
function H(e, t, n) {
  let r = B(e),
    i = W(e);
  i != null && t === `all` && e.get(C) && he(e);
  let a =
    i != null &&
    G(
      e,
      { accountId: i, kind: `collection`, collection: t },
      {
        ...n,
        resetBrowseState: t === `all` && !n?.reuseBrowseTab && e.get(C),
        tabId: n?.reuseBrowseTab ? `spaces-workspace-content:${i}:all` : void 0,
      },
    );
  return (a && n?.addToHistory !== !1 && S(e, r), a);
}
function U(e, t, n, r) {
  let i = W(e);
  return (
    i != null &&
    G(
      e,
      { accountId: i, kind: `space`, spaceId: t, title: n },
      {
        pageOptions: r,
        pageNavigationKey: r?.navigationKey,
        insertPosition: r?.insertPosition,
        target: r?.target,
      },
    )
  );
}
function W(e) {
  let t = e.get(I),
    n = e.value.persistentWorkspace,
    r = e.get(N),
    i = r == null ? n?.session : r.getSession(e);
  return e.get(z) &&
    fe(e.value, e.value.clientThreadId) != null &&
    (n == null || (i?.clientThreadId === e.value.clientThreadId && i.accountId === t))
    ? t
    : null;
}
function G(
  e,
  t,
  {
    collectionHref: i,
    collectionNavigationKey: a,
    insertPosition: o,
    pageOptions: l,
    pageNavigationKey: u = l == null ? void 0 : crypto.randomUUID(),
    revealAndFocus: d = !0,
    resetBrowseState: f = !1,
    tabId: m = `${F}:${t.accountId}:${t.kind === `space` ? `space:${t.spaceId}` : t.collection}`,
    target: g = `right`,
  } = {},
) {
  if (R.isAvailable(e, { content: t }) !== !0 || e.get(I) !== t.accountId) return !1;
  let _ = V(e, m) ?? g,
    y = t.kind === `space` ? null : t.collection,
    b = t.kind === `space` ? (e.query.getData(O, t.spaceId)?.name ?? t.title) : void 0;
  return (
    ge(e, Z, {
      onClose: () => Se(e, { accountId: t.accountId, tabId: m }),
      defaultState: () => (y != null && i != null ? { collectionHrefs: { [y]: i } } : null),
      id: m,
      icon: {
        all: (0, J.jsx)(ne, {}),
        personal: (0, J.jsx)(ie, {}),
        images: (0, J.jsx)(n, {}),
        files: (0, J.jsx)(v, {}),
        sites: (0, J.jsx)(te, {}),
        pages: (0, J.jsx)(ee, {}),
        trash: (0, J.jsx)(oe, {}),
        templates: (0, J.jsx)(x, {}),
        "google-drive": (0, J.jsx)(c, { className: `icon-leading`, "aria-hidden": `true` }),
        favorites: (0, J.jsx)(s, {}),
        documents: (0, J.jsx)(p, {}),
        spreadsheets: (0, J.jsx)(r, {}),
        presentations: (0, J.jsx)(re, {}),
        space: (0, J.jsx)(h, {}),
      }[y ?? `space`],
      insertPosition: o,
      onMove: (e, n, r) => ({ props: { ...r.props, ...K(e, t, m) } }),
      props: {
        content: t,
        ...K(e, t, m),
        pageOptions: l,
        pageNavigationKey: u,
        collectionHref: i,
        collectionNavigationKey: a,
      },
      requiresWorkspaceReady: !1,
      revealAndFocus: d,
      target: _,
      title: b?.trim() ? b : e.get(ue).formatMessage(Q[y ?? `space`]),
    }),
    f && P(_).resetTabState(e, m),
    V(e, m) != null
  );
}
function K(e, t, n) {
  let r = () => ({ insertPosition: { type: `after`, tabId: n }, target: V(e, n) ?? `right` });
  return {
    navigation: {
      onOpenPage: (n, i) => {
        if (e.get(I) === t.accountId) {
          let t = B(e);
          L(e, n, { ...i, ...r() }).opened && S(e, t);
        }
      },
      onOpenSpace: (n) => {
        e.get(I) === t.accountId && U(e, n.id, n.name, r());
      },
      onOpenPersonal: () => {
        e.get(I) === t.accountId && H(e, `personal`, r());
      },
    },
    onOpenAll: () => {
      H(e, `all`, { reuseBrowseTab: !0 });
    },
  };
}
var q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((q = t(u(), 1)),
      g(),
      a(),
      ce(),
      k(),
      f(),
      i(),
      ae(),
      w(),
      se(),
      le(),
      me(),
      E(),
      be(),
      _e(),
      Ce(),
      pe(),
      T(),
      xe(),
      de(),
      ye(),
      (J = l()),
      y(),
      (Y = b({ content: M, href: m().nullable() })),
      (X = o(
        async () =>
          (
            await d(
              async () => {
                let { SpacesWorkspaceContentTab: e } = await import(`./tab-9a218dcab291.js`);
                return { SpacesWorkspaceContentTab: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).SpacesWorkspaceContentTab,
      )),
      (Z = j(F, X, {
        durableRoute: {
          version: 1,
          serialize: (e, { content: t }) => ({ kind: F, params: t, payloadVersion: 1 }),
          restore: async ({
            scope: e,
            descriptor: t,
            insertPosition: n,
            isDisconnected: r,
            revealAndFocus: i,
            target: a,
          }) => {
            let o = M.safeParse(t.params);
            return t.payloadVersion !== 1 || !o.success
              ? !1
              : (R.isAvailable(e) === void 0 && (await e.when((e) => R.isAvailable(e) !== void 0)),
                r() || e.get(I) !== o.data.accountId
                  ? !0
                  : R.isAvailable(e) === !0
                    ? o.data.kind === `collection` &&
                      R.isAvailable(e, { content: o.data }) === void 0 &&
                      (await e.when(
                        (e) =>
                          R.isAvailable(e, { content: o.data }) !== void 0 || e.get(I) !== o.data.accountId,
                      ),
                      r() || e.get(I) !== o.data.accountId)
                      ? !0
                      : G(
                          e,
                          o.data.kind === `collection` && R.isAvailable(e, { content: o.data }) === !1
                            ? { ...o.data, collection: `all` }
                            : o.data,
                          { insertPosition: n, revealAndFocus: i, tabId: t.tabId, target: a },
                        )
                    : !1);
          },
        },
        navigation: {
          capture: ({ content: e, collectionHref: t }, n) => ({
            content: e.kind === `space` && e.title == null ? (0, q.default)(e, `title`) : e,
            href:
              e.kind === `collection`
                ? (n()?.collectionHrefs?.[e.collection] ??
                  t ??
                  (e.collection === `personal` ? null : ve[e.collection]))
                : null,
          }),
          restore: (e, t, n) => {
            let r = Y.safeParse(n);
            if (!r.success) return !1;
            let { content: i, href: a } = r.data,
              o = V(e, t);
            return o == null ||
              !G(e, i, {
                collectionHref: a ?? void 0,
                collectionNavigationKey: e.get(A)?.key,
                revealAndFocus: !1,
                tabId: t,
                target: o,
              })
              ? !1
              : (i.kind === `collection` &&
                  P(o).updateTabState(e, t, (e) => ({
                    ...e,
                    collectionHrefs: { ...e?.collectionHrefs, [i.collection]: a ?? void 0 },
                  })),
                !0);
          },
        },
        isAvailable: (e, t) => R.isAvailable(e, t),
        isAvailableInApp: R.isAvailable,
        retainWhileInactive: (e, { content: t }) => e(I) === t.accountId && e(z) && e(D),
        open: G,
      })),
      (Q = _({
        personal: {
          id: `space.personal.title`,
          defaultMessage: `Personal`,
          description: `Title of the Personal collection of Pages outside any Space`,
        },
        all: {
          id: `spaces.workspace.allTab`,
          defaultMessage: `All`,
          description: `Tab title for the Spaces landing page`,
        },
        images: {
          id: `libraryNext.filters.images`,
          defaultMessage: `Images`,
          description: `Library image category, shown as a tab, filter menu option, or selected filter chip`,
        },
        files: {
          id: `codex.space.files.title`,
          defaultMessage: `Files`,
          description: `Heading for external files of all types in Space`,
        },
        sites: {
          id: `codex.space.sites.title`,
          defaultMessage: `Sites`,
          description: `Title of the built-in Sites page in Spaces`,
        },
        pages: {
          id: `space.list.pagesTab`,
          defaultMessage: `Pages`,
          description: `Filter showing all Pages`,
        },
        trash: {
          id: `libraryNext.title.trash`,
          defaultMessage: `Trash`,
          description: `Library trash heading`,
        },
        "google-drive": {
          id: `space.sidebar.googleDrive`,
          defaultMessage: `Google Drive`,
          description: `Sidebar destination for browsing connected Google Drive files in Space`,
        },
        templates: {
          id: `space.templates.title`,
          defaultMessage: `Templates`,
          description: `Title of the Space template gallery`,
        },
        favorites: {
          id: `library.tabs.favorites`,
          defaultMessage: `Favorites`,
          description: `Library tab for items the user saved as favorites`,
        },
        documents: {
          id: `libraryNext.filters.documents`,
          defaultMessage: `Documents`,
          description: `Library document category in the filter menu, selected filter chips, and Shared with me file-type tabs`,
        },
        spreadsheets: {
          id: `space.sidebar.sheets`,
          defaultMessage: `Sheets`,
          description: `Space sidebar navigation to the Library spreadsheet category`,
        },
        presentations: {
          id: `space.sidebar.slides`,
          defaultMessage: `Slides`,
          description: `Space sidebar navigation to the Library presentation category`,
        },
        space: {
          id: `sidebarElectron.spaceRouteNavLink`,
          defaultMessage: `Space`,
          description: `Nav link that opens Space, the area for shared Pages and files. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        },
      })));
  }))();
}
export { U as i, H as n, we as r, $ as t };
//# sourceMappingURL=open-808e0a5a8ffe.js.map
