const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-2709032b9d0e.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./profile-avatar-bc7371feb0c0.js",
      "./modal-footer-412324b30d33.js",
      "./modal-permission-dropdown-6dcd00cb5144.js",
      "./recipient-picker-5b8b87b8e1c8.js",
      "./use-workspace-users-2d1e66aa1ddc.js",
      "./workspace-team-recipient-suggestions-ab23121c2709.js",
      "./member-count-bfd3da2c099a.js",
      "./role-label-f76597fae88b.js",
      "./model-96b25fa95571.js",
      "./permission-dropdown-5c542829d6d7.js",
      "./people-picks-972d817ff3d6.js",
      "./recipient-picker-681fd1a43c78.css",
      "./access-dropdown-7c79ad8fbd33.js",
      "./analytics-74ff0509f9f8.js",
      "./queries-1bf82162d329.js",
      "./api-78f35db27a20.js",
      "./session-aa148fc2a589.js",
      "./share-link-33a6044f6ad2.js",
      "./share-link-origin-18f11266653c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  HO as r,
  I3 as i,
  LNt as a,
  OFt as o,
  PBt as s,
  XOt as c,
  ZSt as l,
  iCt as u,
  kFt as d,
  pkt as f,
  tkt as p,
  vD as m,
  yD as h,
  zO as g,
  zjt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $H as v,
  BRr as y,
  CLr as b,
  ZH as x,
  Zht as S,
  nU as C,
  tU as w,
  tgt as T,
  uU as E,
  wLr as D,
  zRr as O,
} from "./app-initial-ad16eaadf81f.js";
function k(e) {
  let t = (0, A.c)(6),
    n = u(O),
    r = u(y),
    i = u(b),
    a = u(T),
    o = n === e.accountId && r === e.authenticatedUserId && i && a,
    s;
  t[0] !== o || t[1] !== e
    ? ((s = o
        ? (0, M.jsx)(j.Suspense, {
            fallback: (0, M.jsx)(x, {
              isLoading: !0,
              title: (0, M.jsx)(p, {
                id: `librarySharing.fileTitle`,
                defaultMessage: `Share {fileName}`,
                description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
                values: { fileName: e.fileName },
              }),
            }),
            children: (0, M.jsx)(N, { ...e }),
          })
        : (0, M.jsx)(x, {
            title: (0, M.jsx)(p, {
              id: `librarySharing.title`,
              defaultMessage: `Share`,
              description: `Title of the Library sharing dialog while account information is loading or no longer available`,
            }),
            footer: (0, M.jsx)(_, {
              size: `xl`,
              type: `button`,
              color: `secondary`,
              onClick: e.onClose,
              children: (0, M.jsx)(p, {
                id: `librarySharing.close`,
                defaultMessage: `Close`,
                description: `Button closing the Library sharing dialog`,
              }),
            }),
            children: (0, M.jsx)(g, {
              children: (0, M.jsx)(m, {
                type: `error`,
                role: `alert`,
                content: (0, M.jsx)(p, {
                  id: `librarySharing.sessionUnavailable`,
                  defaultMessage: `Sharing is unavailable in this session. Reopen the dialog in the original account`,
                  description: `Error when an open Library sharing dialog no longer matches the authenticated account, or required account information is unavailable; no file data is shown`,
                }),
              }),
            }),
          })),
      (t[0] = o),
      (t[1] = e),
      (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== e.onClose || t[4] !== s
      ? ((c = (0, M.jsx)(E, { onClose: e.onClose, children: s })), (t[3] = e.onClose), (t[4] = s), (t[5] = c))
      : (c = t[5]),
    c
  );
}
var A, j, M, N;
function P() {
  return (P = e(() => {
    ((A = s()),
      f(),
      l(),
      (j = n()),
      c(),
      D(),
      h(),
      r(),
      t(),
      v(),
      C(),
      S(),
      (M = a()),
      d(),
      (N = i(
        () =>
          o(
            () => import(`./dialog-2709032b9d0e.js`).then((e) => e.LibraryShareDialogBody),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            ]),
            import.meta.url,
          ),
        {
          suspendToParent: !0,
          errorFallback: () =>
            (0, M.jsx)(x, {
              title: (0, M.jsx)(p, {
                id: `librarySharing.title`,
                defaultMessage: `Share`,
                description: `Title of the Library sharing dialog while account information is loading or no longer available`,
              }),
              children: (0, M.jsx)(w, { isLoading: !1 }),
            }),
        },
      )),
      (k.prefetch = () => N.prefetch()));
  }))();
}
export { P as n, k as t };
//# sourceMappingURL=dialog-frame-a10df3869655.js.map
