import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  D3t as t,
  FKt as n,
  RKt as r,
  S3t as i,
  TJt as a,
  d3t as o,
  kmn as s,
  s3t as c,
  wJt as l,
} from "./app-initial-f094ef01c64d.js";
function u() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { queryKey: b, queryFn: d, retry: !1, staleTime: l.FIVE_MINUTES }), (e[0] = t))
      : (t = e[0]),
    i(t)
  );
}
function d() {
  return n.safeGet(`/wham/settings/user`);
}
function f() {
  let e = (0, y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { queryKey: x, queryFn: p, retry: !1, staleTime: l.FIVE_MINUTES }), (e[0] = t))
      : (t = e[0]),
    i(t)
  );
}
function p() {
  return n.safeGet(`/wham/settings/configs/user-preferences`);
}
function m() {
  let e = (0, y.c)(2),
    n = t(),
    r;
  return (
    e[0] === n
      ? (r = e[1])
      : ((r = {
          mutationFn: h,
          onSuccess: (e) => {
            n.setQueryData(b, e);
          },
        }),
        (e[0] = n),
        (e[1] = r)),
    o(r)
  );
}
function h(e) {
  return n.safePatch(`/wham/settings/user`, { requestBody: e });
}
function g(e, t, n) {
  let r = (e.match(/{/g) ?? []).length;
  if (r !== (e.match(/}/g) ?? []).length) return `bracket-mismatch`;
  if (r === 0) return `missing-pattern`;
  let i = n.map((e) => e.value);
  if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !i.includes(e))) return `invalid-pattern`;
  let a = v(e, n, (e) => `x`.repeat(e.char_count));
  return a.length > t
    ? `too-long`
    : a.startsWith(`/`)
      ? `leading-slash`
      : /^[a-zA-Z0-9./\-_]+$/.test(a)
        ? null
        : `invalid-characters`;
}
function _(e, t) {
  return v(e, t, (e) => e.example);
}
function v(e, t, n) {
  let r = e;
  for (let e of t) r = r.replaceAll(e.value, n(e));
  return r;
}
var y,
  b,
  x,
  S = e(() => {
    ((y = s()),
      c(),
      a(),
      r(),
      (b = [`cloud-user-preferences`]),
      (x = [`cloud-preferences-config`]));
  });
export { u as a, f as i, g as n, m as o, S as r, _ as t };
//# sourceMappingURL=cloud-preferences-534ab4bdf935.js.map
