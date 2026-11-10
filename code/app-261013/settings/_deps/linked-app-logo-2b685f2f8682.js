import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bz as t,
  Mz as n,
  Nz as r,
  Rk as i,
  TJ as a,
  _Mt as o,
  as as s,
  cK as c,
  cs as l,
  gMt as u,
  gX as d,
  hX as f,
  os as p,
  ss as m,
  vzt as h,
  xMt as g,
  yzt as _,
  zk as v,
} from "./app-shared-bbfeca5e5737.js";
import { Etn as y, Ttn as b } from "./app-initial-5851df3f6cb1.js";
function x(e) {
  let t = (0, T.c)(23),
    { app: r, size: i, borderless: a } = e,
    o = i === void 0 ? `list` : i,
    s = a !== void 0 && a,
    c = r.client_app_type === `codex_generated_site`,
    f = r.client_app_type === `ads`,
    m;
  t[0] === r.logo_uri ? (m = t[1]) : ((m = w(r.logo_uri)), (t[0] = r.logo_uri), (t[1] = m));
  let h = m,
    [g, _] = (0, E.useState)(null),
    [y, b] = (0, E.useState)(null),
    x = h != null && y === h,
    S = h != null && g === h && !x,
    O;
  if (c) {
    let e = o === `detail` ? v : d,
      r;
    (t[2] === e
      ? (r = t[3])
      : ((r = (0, D.jsx)(n, { className: `shrink-0`, asset: e, focusable: `false` })),
        (t[2] = e),
        (t[3] = r)),
      (O = r));
  } else if (f) {
    let e = o === `detail` ? p : l,
      r;
    (t[4] === e
      ? (r = t[5])
      : ((r = (0, D.jsx)(n, { className: `shrink-0`, asset: e, focusable: `false` })),
        (t[4] = e),
        (t[5] = r)),
      (O = r));
  } else {
    let e = o === `detail` ? `text-xl` : `text-sm`,
      n;
    t[6] === e ? (n = t[7]) : ((n = u(`font-medium text-secondary`, e)), (t[6] = e), (t[7] = n));
    let i;
    t[8] === r.name
      ? (i = t[9])
      : ((i = Array.from(r.name.trim())[0]?.toUpperCase()), (t[8] = r.name), (t[9] = i));
    let a;
    (t[10] !== n || t[11] !== i
      ? ((a = (0, D.jsx)(`span`, { className: n, children: i })), (t[10] = n), (t[11] = i), (t[12] = a))
      : (a = t[12]),
      (O = a));
  }
  let k = !S && O,
    A;
  t[13] !== x || t[14] !== S || t[15] !== h || t[16] !== o
    ? ((A =
        h != null && !x
          ? (0, D.jsx)(
              `img`,
              {
                className: u(o === `detail` ? `size-10` : `size-6`, `object-contain`, !S && `hidden`),
                alt: ``,
                src: h,
                referrerPolicy: `no-referrer`,
                onLoad: () => {
                  (_(h), b(null));
                },
                onError: () => b(h),
              },
              h,
            )
          : null),
      (t[13] = x),
      (t[14] = S),
      (t[15] = h),
      (t[16] = o),
      (t[17] = A))
    : (A = t[17]);
  let j;
  return (
    t[18] !== s || t[19] !== o || t[20] !== k || t[21] !== A
      ? ((j = (0, D.jsxs)(C, { size: o, borderless: s, children: [k, A] })),
        (t[18] = s),
        (t[19] = o),
        (t[20] = k),
        (t[21] = A),
        (t[22] = j))
      : (j = t[22]),
    j
  );
}
function S(e) {
  let n = (0, T.c)(10),
    { app: r, borderless: i } = e,
    a = i !== void 0 && i,
    o;
  bb0: switch (r.type) {
    case `apple`: {
      let e;
      (n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, D.jsx)(t, {})), (n[0] = e)) : (e = n[0]),
        (o = e));
      break bb0;
    }
    case `codex_cli`: {
      let e;
      (n[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, D.jsx)(b, { className: `size-5`, "aria-hidden": !0 })), (n[1] = e))
        : (e = n[1]),
        (o = e));
      break bb0;
    }
    case `oai_apps`: {
      let e;
      (n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, D.jsx)(c, {})), (n[2] = e)) : (e = n[2]),
        (o = e));
      break bb0;
    }
    case `kakao_talk`:
    case `viber`: {
      let e;
      n[3] === r.name
        ? (e = n[4])
        : ((e = Array.from(r.name.trim())[0]?.toUpperCase()), (n[3] = r.name), (n[4] = e));
      let t;
      (n[5] === e
        ? (t = n[6])
        : ((t = (0, D.jsx)(`span`, { className: `text-sm font-medium text-secondary`, children: e })),
          (n[5] = e),
          (n[6] = t)),
        (o = t));
    }
  }
  let s;
  return (
    n[7] !== a || n[8] !== o
      ? ((s = (0, D.jsx)(C, { borderless: a, children: o })), (n[7] = a), (n[8] = o), (n[9] = s))
      : (s = n[9]),
    s
  );
}
function C(e) {
  let t = (0, T.c)(6),
    { children: n, size: r, borderless: i } = e,
    a = r === void 0 ? `list` : r,
    o = !(i !== void 0 && i) && `border border-default`,
    s = a === `detail` ? `size-12 rounded-xl` : `size-8 rounded-lg`,
    c;
  t[0] !== o || t[1] !== s
    ? ((c = u(`flex shrink-0 items-center justify-center select-none`, o, s)),
      (t[0] = o),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  return (
    t[3] !== n || t[4] !== c
      ? ((l = (0, D.jsx)(`span`, { className: c, "aria-hidden": !0, children: n })),
        (t[3] = n),
        (t[4] = c),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function w(e) {
  if (e == null || e.trim() === ``) return null;
  try {
    let t = new URL(e.trim());
    return t.protocol === `https:` && O.has(t.hostname) ? t.href : null;
  } catch {
    return null;
  }
}
var T, E, D, O;
function k() {
  return (k = e(() => {
    ((T = h()),
      m(),
      s(),
      f(),
      i(),
      o(),
      (E = _()),
      r(),
      a(),
      y(),
      (D = g()),
      (O = new Set([
        `assets.chatgpt.site`,
        `auth-cdn.oaistatic.com`,
        `cdn.openai.com`,
        `cdn.oaistatic.com`,
        `files.openai.com`,
        `persistent.oaistatic.com`,
      ])));
  }))();
}
export { x as n, k as r, S as t };
//# sourceMappingURL=linked-app-logo-2b685f2f8682.js.map
