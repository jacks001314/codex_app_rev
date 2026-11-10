const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./draft-238df0ba6d71.js",
      "./draft-317f35989dfa.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./creation-intents-432d9bada664.js",
      "./initial-update-8c4775a22ffc.js",
      "./workbook-2a2fa1be98a2.js",
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
      "./presentation-c2faa0e77c2e.js",
      "./collab-schema-1362362c8a67.js",
      "./presentation-image-assets-a76b94db6072.js",
      "./color-fe822360a2e9.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-b1cd26f1820c.js",
      "./pdf-font-registry-efaf3d8e56f9.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./merged-range-index-daa96769090a.js",
      "./three.module-859594e5f29f.js",
      "./core-51383d4e7880.js",
      "./union-2f12e2dfc01f.js",
      "./zipObject-b39425e8947b.js",
      "./map-3ea4bc6d7205.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./state-52f12724d28a.js",
      "./api-d4f3b59d2f9b.js",
      "./worker-preparation-d9be38efd913.js",
      "./controller-worker-ea4bbc58c1e6.js",
      "./worker-34f50f45f328.js",
      "./snapshot-7d3edd47ebe2.js",
      "./document-c6f04e376b44.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  fPt as i,
  oSt as a,
  pPt as o,
  vzt as s,
  wot as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dor as u,
  Ear as d,
  NPr as f,
  OPr as p,
  XMr as m,
  _ln as h,
  jPr as g,
  mln as _,
  tNr as v,
  xsn as y,
  zar as b,
} from "./app-initial-5851df3f6cb1.js";
import { a as x, i as S, r as C } from "./creation-intents-432d9bada664.js";
function w() {
  let e = (0, E.c)(3),
    r = n(t),
    i,
    a;
  return (
    e[0] === r ? ((i = e[1]), (a = e[2])) : ((i = () => T(r)), (a = [r]), (e[0] = r), (e[1] = i), (e[2] = a)),
    (0, D.useEffect)(i, a),
    null
  );
}
function T(e) {
  let t = !0,
    n = new Set(),
    r = e.watch(({ get: r }) => {
      let a = r(u),
        o = r(m),
        s = r(S);
      if (a == null || o == null || s == null) return;
      let c = r(h, a),
        l = r(O),
        d = s.filter(
          (e) =>
            e.accountId === a &&
            e.userId === o &&
            !n.has(e.localPageId) &&
            (e.progress?.serverPageId != null || e.progress?.outcome === `rejected` || l) &&
            !c.some((t) => t.localPageId === e.localPageId && t.native?.userId === o),
        );
      if (d.length !== 0) {
        for (let e of d) n.add(e.localPageId);
        i(
          async () => {
            let { startNativePageCreation: e } = await import(`./draft-238df0ba6d71.js`);
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
            if (t && e.get(u) === a && e.get(m) === o)
              for (let r of d) {
                let i;
                try {
                  i = await x(r);
                } catch {
                  continue;
                }
                if (!t || e.get(u) !== a || e.get(m) !== o) return;
                e
                  .get(S)
                  ?.some((e) => e.localPageId === r.localPageId && e.accountId === a && e.userId === o) &&
                  (r.progress?.serverPageId != null || r.progress?.outcome === `rejected` || e.get(O)) &&
                  n(e, a, r.documentType, r.parentPageId, void 0, void 0, {
                    ...r,
                    initialUpdate: i,
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
    ((E = s()),
      r(),
      (D = l()),
      v(),
      _(),
      d(),
      y(),
      c(),
      p(),
      C(),
      o(),
      (O = a(t, ({ get: e }) => e(g) != null && !e(f) && e(b) !== `loading`)));
  }))();
}
export { k as n, w as t };
//# sourceMappingURL=creation-recovery-acaa722a8b06.js.map
