import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  CPt as t,
  Eht as n,
  G3t as r,
  O3t as i,
  QWt as a,
  QXt as o,
  TJt as s,
  a3t as c,
  bPt as l,
  c6t as u,
  f6t as d,
  kht as f,
  lPt as p,
  o3t as m,
  qWt as h,
  r6t as g,
  s3t as _,
  uPt as v,
  uSt as y,
  wJt as b,
} from "./app-initial-f094ef01c64d.js";
function x(e) {
  let t = e?.replace(/^uploaded:(?=pet_)/u, ``);
  return t != null && (t.startsWith(`pet_`) || l.some((e) => e.id === t)) ? t : `default`;
}
function S(e) {
  return (
    !!e.spritesheet_url &&
    e.spritesheet_url_expires_at != null &&
    Number.isFinite(Date.parse(e.spritesheet_url_expires_at))
  );
}
var C,
  w,
  T,
  E = e(() => {
    (_(),
      i(),
      a(),
      t(),
      p(),
      y(),
      f(),
      o(),
      m(),
      s(),
      (C = r(c, ({ get: e }) => {
        let t = e(n);
        return {
          enabled: !0,
          queryKey: [`chatgpt-pet-catalog`, t, e(h)],
          queryFn:
            t == null
              ? g
              : async ({ signal: e }) => ({ pets: await v(t, e), receivedAt: Date.now() }),
          refetchInterval: b.FIVE_MINUTES,
          refetchOnWindowFocus: !0,
          retry: 1,
          staleTime: b.FIVE_MINUTES,
        };
      })),
      (w = d(
        c,
        () => Date.now(),
        ({ set: e }) => {
          let t = setInterval(() => e(Date.now()), 6e4);
          return () => clearInterval(t);
        },
      )),
      (T = u(c, ({ get: e }) => {
        let t = e(C).data;
        return t != null && e(w) - t.receivedAt >= 480 * 1e3;
      })));
  });
export { C as a, T as i, S as n, E as r, x as t };
//# sourceMappingURL=pet-model-d94a9150a181.js.map
