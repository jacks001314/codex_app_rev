import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  Vxt as i,
  jDt as a,
  t3 as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import { E$n as l, GMr as u, GZ as d, O$n as f, XMr as p, tNr as m } from "./app-initial-5851df3f6cb1.js";
function h(e) {
  let r = (0, _.c)(3),
    { info: a, includeSaveFailure: o, disabled: s } = e,
    c = o === void 0 || o,
    l = s !== void 0 && s,
    d = i(a),
    f = i(u),
    m = i(p);
  if (
    (Array.isArray(d) ? d : [d]).flatMap((e) =>
      e?.observedAt != null && e.accountId === f && e.userId === m && (c || e.action !== `Save`) ? [e] : [],
    ).length === 0
  )
    return null;
  let h;
  r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, v.jsx)(n, {
        id: `environmentSetup.reportIssue`,
        defaultMessage: `Report issue`,
        description: `Opens an empty feedback dialog for a Cloud Environment save or publish failure`,
      })),
      (r[0] = h))
    : (h = r[0]);
  let y;
  return (
    r[1] === l
      ? (y = r[2])
      : ((y = (0, v.jsx)(t, {
          color: `ghost`,
          size: `compact`,
          type: `button`,
          disabled: l,
          onClick: g,
          children: h,
        })),
        (r[1] = l),
        (r[2] = y)),
    y
  );
}
function g() {
  f(`feedback`, `cloud_environment_failure`, { feedbackTarget: `app` });
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = s()), r(), a(), m(), l(), o(), (v = c()));
  }))();
}
function b(e) {
  let t = (0, x.c)(5),
    { reason: r } = e;
  switch (r) {
    case `permissions-loading`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, S.jsx)(n, {
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
          ? ((e = (0, S.jsx)(n, {
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
          ? ((e = (0, S.jsx)(n, {
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
          ? ((e = (0, S.jsx)(n, {
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
          ? ((e = (0, S.jsx)(n, {
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
    ((x = s()), a(), (S = c()));
  }))();
}
function w(e, t) {
  return d(e, t)
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
//# sourceMappingURL=edit-disabled-reason-fbe8f2a37601.js.map
