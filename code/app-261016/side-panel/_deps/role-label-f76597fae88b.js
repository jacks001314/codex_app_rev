import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, tkt as i } from "./app-shared-2feb3d4c6fcc.js";
function a(e) {
  let t = (0, o.c)(5),
    { permission: n } = e;
  switch (n) {
    case `viewer`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(i, {
              id: `shareDialog.role.viewer`,
              defaultMessage: `Viewer`,
              description: `Sharing permission for someone who can view content but cannot change it`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `commenter`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(i, {
              id: `shareDialog.role.commenter`,
              defaultMessage: `Commenter`,
              description: `Sharing permission for someone who can view and comment without editing content`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `editor`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(i, {
              id: `shareDialog.role.editor`,
              defaultMessage: `Editor`,
              description: `Sharing permission for someone who can edit content`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `owner`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(i, {
              id: `shareDialog.role.owner`,
              defaultMessage: `Owner`,
              description: `Sharing permission identifying someone who owns content and controls its access`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case void 0: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, s.jsx)(i, {
              id: `shareDialog.role.unknown`,
              defaultMessage: `Unknown access`,
              description: `Sharing permission whose role is not recognized; do not imply that the person has Viewer access`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = n()), r(), (s = t()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=role-label-f76597fae88b.js.map
