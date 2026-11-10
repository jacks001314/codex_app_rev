import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  GU as r,
  Rpn as i,
  WU as a,
  Xdt as o,
  _dt as s,
  cdt as c,
  hmn as l,
  kmn as u,
  vct as d,
  zpn as f,
} from "./app-initial-f094ef01c64d.js";
function p(e) {
  let t = (0, _.c)(14),
    { app: n } = e,
    r = n.client_app_type === `codex_generated_site`,
    a;
  t[0] !== n.logo_uri || t[1] !== r
    ? ((a = r ? null : g(n.logo_uri)), (t[0] = n.logo_uri), (t[1] = r), (t[2] = a))
    : (a = t[2]);
  let o = a,
    [c, l] = (0, v.useState)(null),
    [u, d] = (0, v.useState)(null),
    f = o != null && u === o,
    p = o != null && c === o && !f,
    m;
  t[3] !== n.name || t[4] !== p || t[5] !== r
    ? ((m =
        !p &&
        (r
          ? (0, y.jsx)(s, {})
          : (0, y.jsx)(`span`, {
              className: `text-sm font-medium text-secondary`,
              children: Array.from(n.name.trim())[0]?.toUpperCase(),
            }))),
      (t[3] = n.name),
      (t[4] = p),
      (t[5] = r),
      (t[6] = m))
    : (m = t[6]);
  let b;
  t[7] !== f || t[8] !== p || t[9] !== o
    ? ((b =
        o != null && !f
          ? (0, y.jsx)(
              `img`,
              {
                className: i(`size-6 object-contain`, !p && `hidden`),
                alt: ``,
                src: o,
                referrerPolicy: `no-referrer`,
                onLoad: () => {
                  (l(o), d(null));
                },
                onError: () => d(o),
              },
              o,
            )
          : null),
      (t[7] = f),
      (t[8] = p),
      (t[9] = o),
      (t[10] = b))
    : (b = t[10]);
  let x;
  return (
    t[11] !== m || t[12] !== b
      ? ((x = (0, y.jsxs)(h, { children: [m, b] })), (t[11] = m), (t[12] = b), (t[13] = x))
      : (x = t[13]),
    x
  );
}
function m(e) {
  let t = (0, _.c)(9),
    { app: n } = e,
    r;
  bb0: switch (n.type) {
    case `apple`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, y.jsx)(d, {})), (t[0] = e))
        : (e = t[0]),
        (r = e));
      break bb0;
    }
    case `codex_cli`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, y.jsx)(a, { className: `size-5`, "aria-hidden": !0 })), (t[1] = e))
        : (e = t[1]),
        (r = e));
      break bb0;
    }
    case `oai_apps`: {
      let e;
      (t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, y.jsx)(c, {})), (t[2] = e))
        : (e = t[2]),
        (r = e));
      break bb0;
    }
    case `kakao_talk`:
    case `viber`: {
      let e;
      t[3] === n.name
        ? (e = t[4])
        : ((e = Array.from(n.name.trim())[0]?.toUpperCase()), (t[3] = n.name), (t[4] = e));
      let i;
      (t[5] === e
        ? (i = t[6])
        : ((i = (0, y.jsx)(`span`, {
            className: `text-sm font-medium text-secondary`,
            children: e,
          })),
          (t[5] = e),
          (t[6] = i)),
        (r = i));
    }
  }
  let i;
  return (
    t[7] === r ? (i = t[8]) : ((i = (0, y.jsx)(h, { children: r })), (t[7] = r), (t[8] = i)), i
  );
}
function h(e) {
  let t = (0, _.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, y.jsx)(`span`, {
          className: `flex size-8 items-center justify-center rounded-lg border border-default select-none`,
          "aria-hidden": !0,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function g(e) {
  if (e == null || e.trim() === ``) return null;
  try {
    let t = new URL(e.trim());
    return t.protocol === `https:` && b.has(t.hostname) ? t.href : null;
  } catch {
    return null;
  }
}
var _,
  v,
  y,
  b,
  x = e(() => {
    ((_ = u()),
      f(),
      (v = t(n(), 1)),
      o(),
      r(),
      (y = l()),
      (b = new Set([
        `assets.chatgpt.site`,
        `auth-cdn.oaistatic.com`,
        `cdn.openai.com`,
        `cdn.oaistatic.com`,
        `files.openai.com`,
        `persistent.oaistatic.com`,
      ])));
  });
export { p as n, x as r, m as t };
//# sourceMappingURL=linked-app-logo-d20801ff95ab.js.map
