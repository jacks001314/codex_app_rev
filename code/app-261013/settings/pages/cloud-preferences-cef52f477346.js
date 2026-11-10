import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fat as t,
  Iat as n,
  Iot as r,
  Lat as i,
  Lot as a,
  Pat as o,
  Xot as s,
  Yot as c,
  nst as l,
  tst as u,
  vzt as d,
} from "./app-shared-bbfeca5e5737.js";
import { fur as f, iPr as p, pur as m, sPr as h } from "./app-initial-5851df3f6cb1.js";
function g(e, t) {
  return [`cloud-preferences-config`, e, t];
}
function _(e) {
  return [`cloud-user-preferences`, e];
}
function v() {
  let e = (0, D.c)(5),
    { userId: t } = m(),
    n;
  e[0] === t ? (n = e[1]) : ((n = _(t)), (e[0] = t), (e[1] = n));
  let r = t != null,
    i;
  return (
    e[2] !== n || e[3] !== r
      ? ((i = { queryKey: n, queryFn: y, enabled: r, retry: !1, staleTime: o.FIVE_MINUTES }),
        (e[2] = n),
        (e[3] = r),
        (e[4] = i))
      : (i = e[4]),
    s(i)
  );
}
function y(e) {
  let { signal: t } = e;
  return p.safeGet(`/wham/settings/user`, { signal: t });
}
function b() {
  let e = (0, D.c)(6),
    { accountId: t, userId: n } = m(),
    r;
  e[0] !== t || e[1] !== n ? ((r = g(t, n)), (e[0] = t), (e[1] = n), (e[2] = r)) : (r = e[2]);
  let i = t != null && n != null,
    a;
  return (
    e[3] !== r || e[4] !== i
      ? ((a = { queryKey: r, queryFn: x, enabled: i, retry: !1, staleTime: o.FIVE_MINUTES }),
        (e[3] = r),
        (e[4] = i),
        (e[5] = a))
      : (a = e[5]),
    s(a)
  );
}
function x() {
  return p.safeGet(`/wham/settings/configs/user-preferences`);
}
function S() {
  let e = (0, D.c)(7),
    { userId: t } = m(),
    r = l(),
    i;
  e[0] === t ? (i = e[1]) : ((i = () => ({ queryKey: _(t) })), (e[0] = t), (e[1] = i));
  let o;
  e[2] === r
    ? (o = e[3])
    : ((o = (e, t, i) => {
        i != null && (r.setQueryData(i.queryKey, e), t.custom_instructions !== void 0 && n(i.queryKey));
      }),
      (e[2] = r),
      (e[3] = o));
  let s;
  return (
    e[4] !== i || e[5] !== o
      ? ((s = { mutationFn: C, onMutate: i, onSuccess: o }), (e[4] = i), (e[5] = o), (e[6] = s))
      : (s = e[6]),
    a(s)
  );
}
function C(e) {
  return p.safePatch(`/wham/settings/user`, { requestBody: e });
}
function w(e, t, n) {
  let r = (e.match(/{/g) ?? []).length;
  if (r !== (e.match(/}/g) ?? []).length) return `bracket-mismatch`;
  if (r === 0) return `missing-pattern`;
  let i = n.map((e) => e.value);
  if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !i.includes(e))) return `invalid-pattern`;
  let a = E(e, n, (e) => `x`.repeat(e.char_count));
  return a.length > t
    ? `too-long`
    : a.startsWith(`/`)
      ? `leading-slash`
      : /^[a-zA-Z0-9./\-_]+$/.test(a)
        ? null
        : `invalid-characters`;
}
function T(e, t) {
  return E(e, t, (e) => e.example);
}
function E(e, t, n) {
  let r = e;
  for (let e of t) r = r.replaceAll(e.value, n(e));
  return r;
}
var D;
function O() {
  return (O = e(() => {
    ((D = d()), r(), c(), u(), f(), i(), t(), h());
  }))();
}
export { v as a, b as i, w as n, S as o, O as r, T as t };
//# sourceMappingURL=cloud-preferences-cef52f477346.js.map
