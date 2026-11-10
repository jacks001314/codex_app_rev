const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-56d8bed1d04c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./profile-avatar-90effac925f0.js",
      "./modal-footer-8c17ec58d94e.js",
      "./modal-permission-dropdown-75a4787ca1b8.js",
      "./recipient-picker-caea7e148b2f.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./workspace-team-recipient-suggestions-f88127cfec32.js",
      "./member-count-5e188d46464b.js",
      "./role-label-47a44c95e79a.js",
      "./model-a4d407e1a4c5.js",
      "./permission-dropdown-e25fe01e48c3.js",
      "./people-picks-972d817ff3d6.js",
      "./recipient-picker-996a9b9e8a75.css",
      "./access-dropdown-62f61b3449da.js",
      "./analytics-b9b7c5cb850a.js",
      "./queries-afbbc186d4e0.js",
      "./api-f6a4de72621c.js",
      "./session-d332d20f19aa.js",
      "./share-link-8f1224ca9450.js",
      "./share-link-origin-fda3b8a9dfd2.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  GE as n,
  IDt as r,
  JDt as i,
  Pxt as a,
  Vxt as o,
  WE as s,
  fO as c,
  fPt as l,
  jDt as u,
  lO as d,
  pPt as f,
  vzt as p,
  xMt as m,
  yAt as h,
  yzt as g,
  z4 as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bmt as v,
  CV as y,
  GMr as b,
  SV as x,
  Wmt as S,
  XMr as C,
  bV as w,
  eNr as T,
  jV as E,
  tNr as D,
  vV as O,
} from "./app-initial-5851df3f6cb1.js";
function k(e) {
  let t = (0, A.c)(6),
    n = o(b),
    i = o(C),
    a = o(T),
    c = o(S),
    l = n === e.accountId && i === e.authenticatedUserId && a && c,
    u;
  t[0] !== l || t[1] !== e
    ? ((u = l
        ? (0, M.jsx)(j.Suspense, {
            fallback: (0, M.jsx)(O, {
              isLoading: !0,
              title: (0, M.jsx)(r, {
                id: `librarySharing.fileTitle`,
                defaultMessage: `Share {fileName}`,
                description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
                values: { fileName: e.fileName },
              }),
            }),
            children: (0, M.jsx)(N, { ...e }),
          })
        : (0, M.jsx)(O, {
            title: (0, M.jsx)(r, {
              id: `librarySharing.title`,
              defaultMessage: `Share`,
              description: `Title of the Library sharing dialog while account information is loading or no longer available`,
            }),
            footer: (0, M.jsx)(h, {
              size: `xl`,
              type: `button`,
              color: `secondary`,
              onClick: e.onClose,
              children: (0, M.jsx)(r, {
                id: `librarySharing.close`,
                defaultMessage: `Close`,
                description: `Button closing the Library sharing dialog`,
              }),
            }),
            children: (0, M.jsx)(d, {
              children: (0, M.jsx)(s, {
                type: `error`,
                role: `alert`,
                content: (0, M.jsx)(r, {
                  id: `librarySharing.sessionUnavailable`,
                  defaultMessage: `Sharing is unavailable in this session. Reopen the dialog in the original account`,
                  description: `Error when an open Library sharing dialog no longer matches the authenticated account, or required account information is unavailable; no file data is shown`,
                }),
              }),
            }),
          })),
      (t[0] = l),
      (t[1] = e),
      (t[2] = u))
    : (u = t[2]);
  let f;
  return (
    t[3] !== e.onClose || t[4] !== u
      ? ((f = (0, M.jsx)(E, { onClose: e.onClose, children: u })), (t[3] = e.onClose), (t[4] = u), (t[5] = f))
      : (f = t[5]),
    f
  );
}
var A, j, M, N;
function P() {
  return (P = e(() => {
    ((A = p()),
      i(),
      a(),
      (j = g()),
      u(),
      D(),
      n(),
      c(),
      _(),
      w(),
      y(),
      v(),
      (M = m()),
      f(),
      (N = t(
        () =>
          l(
            () => import(`./dialog-56d8bed1d04c.js`).then((e) => e.LibraryShareDialogBody),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            ]),
            import.meta.url,
          ),
        {
          suspendToParent: !0,
          errorFallback: () =>
            (0, M.jsx)(O, {
              title: (0, M.jsx)(r, {
                id: `librarySharing.title`,
                defaultMessage: `Share`,
                description: `Title of the Library sharing dialog while account information is loading or no longer available`,
              }),
              children: (0, M.jsx)(x, { isLoading: !1 }),
            }),
        },
      )),
      (k.prefetch = () => N.prefetch()));
  }))();
}
export { P as n, k as t };
//# sourceMappingURL=dialog-frame-642597a1f43d.js.map
