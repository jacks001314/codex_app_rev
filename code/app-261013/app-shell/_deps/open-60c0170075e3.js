const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./tab-9de30586ab97.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./composer-replacement-2714774d7ad3.js",
      "./composer-replacement-state-5e5a27d05b29.js",
      "./load-metrics-51f4f7a5a1f1.js",
      "./load-metrics-state-1eeeccca7f74.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $B as n,
  ADt as r,
  B4 as i,
  Dq as a,
  EG as o,
  EPt as s,
  IK as c,
  Jq as ee,
  QB as te,
  TJ as l,
  TLt as u,
  Vq as ne,
  WK as d,
  _Nt as f,
  dK as re,
  fPt as p,
  iL as m,
  jDt as h,
  oq as ie,
  pLt as g,
  pPt as _,
  rL as ae,
  sJ as v,
  vG as y,
  xMt as b,
  yH as oe,
  z4 as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $wn as se,
  AI as ce,
  Cwr as le,
  Dor as S,
  FFr as ue,
  MI as de,
  Mwn as fe,
  Pcn as C,
  Qwn as pe,
  aIr as me,
  ay as he,
  cer as ge,
  dwn as w,
  dxn as T,
  eor as E,
  g9t as D,
  h9t as O,
  ier as k,
  iy as A,
  jcn as j,
  jwn as M,
  ler as N,
  lxn as P,
  nL as F,
  oIr as I,
  oer as L,
  oy as R,
  pwn as _e,
  qsn as ve,
  rL as ye,
  ser as z,
  tor as be,
  uer as B,
  uxn as V,
  xsn as xe,
  ywr as Se,
  zFr as Ce,
} from "./app-initial-5851df3f6cb1.js";
function we(e) {
  return H(e, `all`);
}
function H(e, t, n) {
  let r = A(e),
    i = W(e);
  i != null && t === `all` && e.get(C) && D(e);
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
  return (a && n?.addToHistory !== !1 && R(e, r), a);
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
  let t = e.get(S),
    n = e.value.persistentWorkspace,
    r = e.get(se),
    i = r == null ? n?.session : r.getSession(e);
  return e.get(z) &&
    Se(e.value, e.value.clientThreadId) != null &&
    (n == null || (i?.clientThreadId === e.value.clientThreadId && i.accountId === t))
    ? t
    : null;
}
function G(
  e,
  t,
  {
    collectionHref: r,
    collectionNavigationKey: i,
    insertPosition: s,
    pageOptions: l,
    pageNavigationKey: u = l == null ? void 0 : crypto.randomUUID(),
    revealAndFocus: f = !0,
    resetBrowseState: p = !1,
    tabId: m = `${k}:${t.accountId}:${t.kind === `space` ? `space:${t.spaceId}` : t.collection}`,
    target: h = `right`,
  } = {},
) {
  if (B.isAvailable(e, { content: t }) !== !0 || e.get(S) !== t.accountId) return !1;
  let g = V(e, m) ?? h,
    _ = t.kind === `space` ? null : t.collection,
    b = t.kind === `space` ? (e.query.getData(ve, t.spaceId)?.name ?? t.title) : void 0;
  return (
    _e(e, Z, {
      onClose: () => F(e, { accountId: t.accountId, tabId: m }),
      defaultState: () => (_ != null && r != null ? { collectionHrefs: { [_]: r } } : null),
      id: m,
      icon: {
        all: (0, J.jsx)(n, {}),
        personal: (0, J.jsx)(y, {}),
        images: (0, J.jsx)(o, {}),
        files: (0, J.jsx)(oe, {}),
        sites: (0, J.jsx)(c, {}),
        pages: (0, J.jsx)(ee, {}),
        trash: (0, J.jsx)(v, {}),
        templates: (0, J.jsx)(ie, {}),
        "google-drive": (0, J.jsx)(ae, { className: `icon-leading`, "aria-hidden": `true` }),
        favorites: (0, J.jsx)(te, {}),
        documents: (0, J.jsx)(ne, {}),
        spreadsheets: (0, J.jsx)(a, {}),
        presentations: (0, J.jsx)(re, {}),
        space: (0, J.jsx)(d, {}),
      }[_ ?? `space`],
      insertPosition: s,
      onMove: (e, n, r) => ({ props: { ...r.props, ...K(e, t, m) } }),
      props: {
        content: t,
        ...K(e, t, m),
        pageOptions: l,
        pageNavigationKey: u,
        collectionHref: r,
        collectionNavigationKey: i,
      },
      requiresWorkspaceReady: !1,
      revealAndFocus: f,
      target: g,
      title: b?.trim() ? b : e.get(I).formatMessage(Q[_ ?? `space`]),
    }),
    p && P(g).resetTabState(e, m),
    V(e, m) != null
  );
}
function K(e, t, n) {
  let r = () => ({ insertPosition: { type: `after`, tabId: n }, target: V(e, n) ?? `right` });
  return {
    navigation: {
      onOpenPage: (n, i) => {
        if (e.get(S) === t.accountId) {
          let t = A(e);
          de(e, n, { ...i, ...r() }).opened && R(e, t);
        }
      },
      onOpenSpace: (n) => {
        e.get(S) === t.accountId && U(e, n.id, n.name, r());
      },
      onOpenPersonal: () => {
        e.get(S) === t.accountId && H(e, `personal`, r());
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
    ((q = t(f(), 1)),
      h(),
      s(),
      w(),
      M(),
      l(),
      x(),
      m(),
      me(),
      Ce(),
      ye(),
      O(),
      j(),
      ce(),
      xe(),
      le(),
      E(),
      T(),
      pe(),
      he(),
      L(),
      (J = b()),
      _(),
      (Y = g({ content: N, href: u().nullable() })),
      (X = i(
        async () =>
          (
            await p(
              async () => {
                let { SpacesWorkspaceContentTab: e } = await import(`./tab-9de30586ab97.js`);
                return { SpacesWorkspaceContentTab: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
              import.meta.url,
            )
          ).SpacesWorkspaceContentTab,
      )),
      (Z = fe(k, X, {
        durableRoute: {
          version: 1,
          serialize: (e, { content: t }) => ({ kind: k, params: t, payloadVersion: 1 }),
          restore: async ({
            scope: e,
            descriptor: t,
            insertPosition: n,
            isDisconnected: r,
            revealAndFocus: i,
            target: a,
          }) => {
            let o = N.safeParse(t.params);
            return t.payloadVersion !== 1 || !o.success
              ? !1
              : (B.isAvailable(e) === void 0 && (await e.when((e) => B.isAvailable(e) !== void 0)),
                r() || e.get(S) !== o.data.accountId
                  ? !0
                  : B.isAvailable(e) === !0
                    ? o.data.kind === `collection` &&
                      B.isAvailable(e, { content: o.data }) === void 0 &&
                      (await e.when(
                        (e) =>
                          B.isAvailable(e, { content: o.data }) !== void 0 || e.get(S) !== o.data.accountId,
                      ),
                      r() || e.get(S) !== o.data.accountId)
                      ? !0
                      : G(
                          e,
                          o.data.kind === `collection` && B.isAvailable(e, { content: o.data }) === !1
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
                  (e.collection === `personal` ? null : ge[e.collection]))
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
                collectionNavigationKey: e.get(ue)?.key,
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
        isAvailable: (e, t) => B.isAvailable(e, t),
        isAvailableInApp: B.isAvailable,
        retainWhileInactive: (e, { content: t }) => e(S) === t.accountId && e(z) && e(be),
        open: G,
      })),
      (Q = r({
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
//# sourceMappingURL=open-60c0170075e3.js.map
