import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Jbt as r,
  Pxt as i,
  hrt as a,
  oIt as o,
  oSt as s,
  rst as c,
  vrt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cpr as d,
  Gor as f,
  Gpr as p,
  Hmr as m,
  Jpr as h,
  Kpr as g,
  Mpr as _,
  OPr as v,
  Opr as y,
  Upr as b,
  Wor as x,
  Wpr as S,
  Xpr as C,
  _er as w,
  _mr as T,
  c1 as E,
  ger as D,
  gmr as O,
  kPr as k,
  o1 as A,
  wpr as j,
  zmr as M,
} from "./app-initial-5851df3f6cb1.js";
function N(e) {
  if (e?.startsWith(`devicecheck_`)) return P.safeParse(e.slice(12)).data;
}
var P;
function F() {
  return (F = e(() => {
    (n(),
      (P = o([
        `unsupported_platform`,
        `unsupported_architecture`,
        `unsupported_device`,
        `token_generation_failed`,
        `registration_http_failed`,
        `registration_network_failed`,
        `missing_cookie`,
      ])));
  }))();
}
function I(e, t) {
  let n = t instanceof a ? t.explicitResponseStatus : null,
    r = n != null && Number.isInteger(n) && n >= 100 && n <= 599 ? n : null,
    i = t instanceof a && n === null ? N(t.errorCode) : void 0,
    o =
      i === `registration_http_failed` && t instanceof a
        ? /^DeviceCheck registration failed \(([1-5][0-9]{2})\)$/u.exec(t.message)
        : null,
    s;
  return (
    (s =
      i == null
        ? t instanceof a && t.errorKind === `network`
          ? `network`
          : r == null
            ? t == null
              ? `none`
              : `unknown`
            : `http`
        : `devicecheck`),
    {
      status: `error`,
      reason: e,
      errorKind: s,
      httpStatus: r,
      deviceCheckFailureReason: i,
      deviceCheckRegistrationStatus: o == null ? void 0 : Number(o[1]),
    }
  );
}
async function L(e, t) {
  let n = e.get(g).data?.selection?.aeon_id,
    r = n == null ? void 0 : e.get(w, n),
    i = t ?? (r?.status === `unavailable` && r.reason === `missing_root` ? n : void 0);
  await Promise.allSettled([e.get(k, M) ? e.get(x).refetch() : void 0, C(e), _(e, i ?? void 0)]);
}
var R;
function z() {
  return (z = e(() => {
    (i(),
      c(),
      F(),
      m(),
      O(),
      f(),
      y(),
      b(),
      D(),
      E(),
      u(),
      v(),
      l(),
      (R = s(t, ({ get: e }) => {
        if (e(h)) {
          let t = !1;
          if (!e(p)) {
            let { data: n, error: i, isEnabled: a, isFetching: o } = e(g);
            if (i != null && (!n?.selection?.available || T(i))) return I(`primary_selection_query`, i);
            if (e(S)) return { status: `loading` };
            if (n === void 0) return { status: a ? `loading` : `selection-required` };
            if ((n.selection != null && !n.selection.available && (t = !0), n?.selection?.available)) {
              let a = r(n.selection.thread_id),
                s = n.selection.aeon_id == null ? e(j, a) : e(d, n.selection.aeon_id);
              if (T(s.error)) return I(`primary_profile_query`, s.error);
              if (s.data === void 0)
                return s.isError && !o ? I(`primary_profile_query`, s.error) : { status: `loading` };
              let c = s.data;
              if (c != null && (n.selection.aeon_id == null || c.id === n.selection.aeon_id)) {
                let t = e(w, c.id);
                if (t.status === `ready`) return { status: `ready`, orbitIds: [c.id] };
                if (t.status === `loading`) return { status: `loading` };
                if (t.status === `unavailable`)
                  return I(t.reason === `missing_root` ? `missing_root` : `primary_profile_query`, t.error);
              }
              if (o || s.isFetching) return { status: `loading` };
              if (s.isError) return I(`primary_profile_query`, s.error);
              if (i != null) return I(`primary_selection_query`, i);
              t = !0;
            }
            if (o) return { status: `loading` };
          }
          if (!t && !e(A, !0)) return { status: `selection-required` };
        }
        let t = e(x);
        if (T(t.error)) return I(`catalog_query`, t.error);
        if (t.data === void 0) return t.error == null ? { status: `loading` } : I(`catalog_query`, t.error);
        let n = [],
          i = !1,
          a;
        for (let r of t.data) {
          let t = e(w, r.id);
          t.status === `ready`
            ? n.push(r.id)
            : t.status === `loading`
              ? (i = !0)
              : t.status === `unavailable`
                ? (a ??= I(t.reason === `missing_root` ? `missing_root` : `catalog_profile_query`, t.error))
                : t.status === `missing` && (a ??= I(`missing_profile`));
        }
        return n.length > 0
          ? { status: `ready`, orbitIds: n }
          : t.error == null
            ? i || t.isFetching || t.dataUpdatedAt === 0
              ? { status: `loading` }
              : (a ?? (e(A, !0) ? { status: `ready`, orbitIds: [] } : { status: `selection-required` }))
            : I(`catalog_query`, t.error);
      })));
  }))();
}
export { R as n, L as r, z as t };
//# sourceMappingURL=catalog-b8899204cdcc.js.map
