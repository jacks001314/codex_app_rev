const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./draft-c492c9f7972b.js",
      "./draft-5563987153fe.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./creation-intents-51ddf095b952.js",
      "./initial-update-87a2af1a286b.js",
      "./workbook-1fd3f253a266.js",
      "./linear-679e303fb101.js",
      "./string-963febbec52f.js",
      "./defaultLocale-1a6eeada7f42.js",
      "./init-cd6c1f803e47.js",
      "./ordinal-654830f58ee1.js",
      "./pow-8b9b02ff1564.js",
      "./nice-2b3cc20611af.js",
      "./band-7f9eb19564f9.js",
      "./treemap-4d58692b5de2.js",
      "./Tableau10-232fa539940a.js",
      "./arc-a62fdff23ebe.js",
      "./path-3b8129ebc7ff.js",
      "./constant-363a14bf6d8f.js",
      "./math-de3a0e0db4e2.js",
      "./linear-51abf1a86c3b.js",
      "./line-5171f1d885cc.js",
      "./array-15adaa1bc228.js",
      "./area-76377dfd01aa.js",
      "./pie-f34043ff89c8.js",
      "./catmullRom-b244076d0269.js",
      "./monotone-68fb4f84bd88.js",
      "./expand-f3906952405c.js",
      "./presentation-20e3999371ab.js",
      "./collab-schema-5e12eae11b34.js",
      "./presentation-image-assets-2852083e62f1.js",
      "./color-72a92632a961.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-f01a044561f7.js",
      "./pdf-font-registry-efaf3d8e56f9.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./merged-range-index-daa96769090a.js",
      "./three.module-859594e5f29f.js",
      "./core-51383d4e7880.js",
      "./union-2f12e2dfc01f.js",
      "./zipObject-b39425e8947b.js",
      "./map-3ea4bc6d7205.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./state-e401e787f9be.js",
      "./api-4f89419a04a6.js",
      "./worker-preparation-34996f08ab5a.js",
      "./controller-worker-e1d0bc0048e6.js",
      "./worker-baab70085b2c.js",
      "./snapshot-26295b9b71a7.js",
      "./document-2523b236390c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  FBt as i,
  OFt as a,
  PBt as o,
  Qst as s,
  ZSt as c,
  kFt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as u,
  Dlr as d,
  fBr as f,
  fpn as p,
  gur as m,
  hdn as h,
  lBr as g,
  lpn as _,
  mBr as v,
  mlr as y,
  wLr as b,
} from "./app-initial-ad16eaadf81f.js";
import { a as x, i as S, r as C } from "./creation-intents-51ddf095b952.js";
function w() {
  let e = (0, E.c)(3),
    n = t(s),
    r,
    i;
  return (
    e[0] === n ? ((r = e[1]), (i = e[2])) : ((r = () => T(n)), (i = [n]), (e[0] = n), (e[1] = r), (e[2] = i)),
    (0, D.useEffect)(r, i),
    null
  );
}
function T(e) {
  let t = !0,
    n = new Set(),
    r = e.watch(({ get: r }) => {
      let i = r(m),
        o = r(u),
        s = r(S);
      if (i == null || o == null || s == null) return;
      let c = r(p, i),
        l = r(O),
        d = s.filter(
          (e) =>
            e.accountId === i &&
            e.userId === o &&
            !n.has(e.localPageId) &&
            (e.progress?.serverPageId != null || e.progress?.outcome === `rejected` || l) &&
            !c.some((t) => t.localPageId === e.localPageId && t.native?.userId === o),
        );
      if (d.length !== 0) {
        for (let e of d) n.add(e.localPageId);
        a(
          async () => {
            let { startNativePageCreation: e } = await import(`./draft-c492c9f7972b.js`);
            return { startNativePageCreation: e };
          },
          __vite__mapDeps([
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53,
          ]),
          import.meta.url,
        )
          .then(async ({ startNativePageCreation: n }) => {
            if (t && e.get(m) === i && e.get(u) === o)
              for (let r of d) {
                let a;
                try {
                  a = await x(r);
                } catch {
                  continue;
                }
                if (!t || e.get(m) !== i || e.get(u) !== o) return;
                e
                  .get(S)
                  ?.some((e) => e.localPageId === r.localPageId && e.accountId === i && e.userId === o) &&
                  (r.progress?.serverPageId != null || r.progress?.outcome === `rejected` || e.get(O)) &&
                  n(e, i, r.documentType, r.parentPageId, void 0, void 0, {
                    ...r,
                    initialUpdate: a,
                  }).completion.catch(() => void 0);
              }
          })
          .finally(() => {
            for (let e of d) n.delete(e.localPageId);
          });
      }
    });
  return () => {
    ((t = !1), r());
  };
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = o()),
      c(),
      (D = i()),
      b(),
      _(),
      y(),
      h(),
      n(),
      g(),
      C(),
      l(),
      (O = r(s, ({ get: e }) => e(f) != null && !e(v) && e(d) !== `loading`)));
  }))();
}
export { k as n, w as t };
//# sourceMappingURL=creation-recovery-48644367c50a.js.map
