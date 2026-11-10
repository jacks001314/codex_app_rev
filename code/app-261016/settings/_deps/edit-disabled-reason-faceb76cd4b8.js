import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  XOt as r,
  Y3 as i,
  Z3 as a,
  ZSt as o,
  iCt as s,
  tkt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as l, N$ as u, e4n as d, n4n as f, wLr as p, zRr as m } from "./app-initial-ad16eaadf81f.js";
function h(e) {
  let t = (0, _.c)(3),
    { info: n, includeSaveFailure: r, disabled: a } = e,
    o = r === void 0 || r,
    u = a !== void 0 && a,
    d = s(n),
    f = s(m),
    p = s(l);
  if (
    (Array.isArray(d) ? d : [d]).flatMap((e) =>
      e?.observedAt != null && e.accountId === f && e.userId === p && (o || e.action !== `Save`) ? [e] : [],
    ).length === 0
  )
    return null;
  let h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, v.jsx)(c, {
        id: `environmentSetup.reportIssue`,
        defaultMessage: `Report issue`,
        description: `Opens an empty feedback dialog for a Cloud Environment save or publish failure`,
      })),
      (t[0] = h))
    : (h = t[0]);
  let y;
  return (
    t[1] === u
      ? (y = t[2])
      : ((y = (0, v.jsx)(i, {
          color: `ghost`,
          size: `compact`,
          type: `button`,
          disabled: u,
          onClick: g,
          children: h,
        })),
        (t[1] = u),
        (t[2] = y)),
    y
  );
}
function g() {
  f(`feedback`, `cloud_environment_failure`, { feedbackTarget: `app` });
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = n()), o(), r(), p(), d(), a(), (v = t()));
  }))();
}
function b(e) {
  let t = (0, x.c)(5),
    { reason: n } = e;
  switch (n) {
    case `permissions-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(c, {
              id: `environmentSetup.editDisabled.permissionsLoading`,
              defaultMessage: `Wait for your editing permissions to load`,
              description: `Tooltip on disabled environment settings while the user's editing permissions are still loading`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `permissions-unavailable`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(c, {
              id: `environmentSetup.editDisabled.permissionsUnavailable`,
              defaultMessage: `Reopen this environment to retry loading your editing permissions`,
              description: `Tooltip on disabled environment settings when editing permissions could not be determined`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `cloud-access`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(c, {
              id: `environmentSetup.editDisabled.cloudAccess`,
              defaultMessage: `Ask your workspace admin to enable Codex cloud access`,
              description: `Tooltip explaining how to regain access to edit a cloud environment when workspace policy denies Codex cloud access`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `workspace-permission`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(c, {
              id: `environmentSetup.editDisabled.workspacePermission`,
              defaultMessage: `Ask your admin for edit access`,
              description: `Tooltip on disabled settings for a shared cloud environment when the user lacks permission to manage workspace environments, including when they created the environment`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `owner`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(c, {
              id: `environmentSetup.editDisabled.owner`,
              defaultMessage: `Ask the owner to make this change`,
              description: `Tooltip on a cloud environment setting that only its owner may change`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
  }
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = n()), r(), (S = t()));
  }))();
}
function w(e, t) {
  return u(e, t)
    ? null
    : t === void 0
      ? `permissions-loading`
      : t == null
        ? `permissions-unavailable`
        : t.cloudAccess
          ? e?.share_settings === `workspace`
            ? `workspace-permission`
            : `owner`
          : `cloud-access`;
}
function T() {
  return (T = e(() => {}))();
}
export { h as a, C as i, T as n, y as o, b as r, w as t };
//# sourceMappingURL=edit-disabled-reason-faceb76cd4b8.js.map
