import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, Y3 as i, Z3 as a, tkt as o } from "./app-shared-2feb3d4c6fcc.js";
import { SRn as s, bRn as c } from "./app-initial-ad16eaadf81f.js";
function l(e) {
  let t = (0, m.c)(12),
    { blurbs: n, variant: r } = e;
  if (r === `consent`) {
    let e;
    t[0] === n ? (e = t[1]) : ((e = n.map(u)), (t[0] = n), (t[1] = e));
    let r;
    return (
      t[2] === e
        ? (r = t[3])
        : ((r = (0, h.jsx)(`div`, {
            className: `flex flex-col gap-4 px-4 text-start text-xs leading-4 text-tertiary select-text`,
            children: e,
          })),
          (t[2] = e),
          (t[3] = r)),
      r
    );
  }
  let i = r === `settings`,
    a = i ? `rounded-2xl border border-default px-4 py-2` : `text-sm text-secondary`,
    o;
  if (t[4] !== n || t[5] !== i) {
    let e;
    (t[7] === i
      ? (e = t[8])
      : ((e = (e, t) =>
          (0, h.jsxs)(
            `div`,
            {
              className: i
                ? `flex flex-col gap-1 border-b border-default py-2.5 last:border-none`
                : `flex flex-col gap-1 border-t border-default py-2.5 first:border-none first:pt-0 last:pb-0`,
              children: [
                (0, h.jsx)(`div`, { className: `text-sm font-medium text-default`, children: e.title }),
                (0, h.jsx)(`div`, {
                  className: i ? `text-xs text-secondary` : void 0,
                  children: p(e.description, `standard`),
                }),
              ],
            },
            e.id ?? t,
          )),
        (t[7] = i),
        (t[8] = e)),
      (o = n.map(e)),
      (t[4] = n),
      (t[5] = i),
      (t[6] = o));
  } else o = t[6];
  let s;
  return (
    t[9] !== a || t[10] !== o
      ? ((s = (0, h.jsx)(`div`, { className: a, children: o })), (t[9] = a), (t[10] = o), (t[11] = s))
      : (s = t[11]),
    s
  );
}
function u(e) {
  return (0, h.jsxs)(
    `p`,
    {
      children: [e.title && (0, h.jsxs)(`strong`, { children: [e.title, ` `] }), p(e.description, `consent`)],
    },
    `${e.id}-${e.description}`,
  );
}
function d(e) {
  let t = (0, m.c)(4),
    { disabled: n, onClick: r } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, h.jsx)(o, {
        id: `apps.connect.consent.cancel`,
        defaultMessage: `Cancel`,
        description: `Button below Connect in the app consent dialog. Closes the dialog without connecting the app.`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let s;
  return (
    t[1] !== n || t[2] !== r
      ? ((s = (0, h.jsx)(i, {
          className: `w-full justify-center`,
          type: `button`,
          color: `primary`,
          size: `large`,
          disabled: n,
          onClick: r,
          children: a,
        })),
        (t[1] = n),
        (t[2] = r),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function f(e) {
  let t = (0, m.c)(8),
    { children: n, href: r, onActivate: i, variant: a } = e,
    o =
      (a === void 0 ? `consent` : a) === `consent`
        ? `cursor-interaction font-semibold text-inherit! no-underline hover:underline focus-visible:underline`
        : `underline underline-offset-2`,
    c;
  t[0] !== r || t[1] !== i
    ? ((c = (e) => {
        (s({ event: e, href: r, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }),
          i?.());
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = c))
    : (c = t[2]);
  let l;
  return (
    t[3] !== n || t[4] !== r || t[5] !== o || t[6] !== c
      ? ((l = (0, h.jsx)(`a`, {
          className: o,
          href: r,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: c,
          children: n,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = o),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function p(e, t) {
  let n = [],
    r = 0;
  for (let i of e.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    let [a, o, s] = i,
      { index: c } = i,
      l = s.trim();
    (n.push(e.slice(r, c), l ? (0, h.jsx)(f, { href: l, variant: t, children: o }, c) : o),
      (r = c + a.length));
  }
  return [...n, e.slice(r)];
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = n()), r(), a(), c(), (h = t()));
  }))();
}
export { g as i, l as n, f as r, d as t };
//# sourceMappingURL=app-connect-disclosure-6972271b30c4.js.map
