const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./shell-d2f5d33d6a1d.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./swift-8dfd81d616cd.js",
      "./dist-a7ee13e91d76.js",
      "./dist-4c9319dc1c02.js",
      "./dist-c49309ceeb35.js",
      "./dist-ad7e2bb8433e.js",
      "./dist-50497e5dc1f8.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./dist-2d632fbc72cf.js",
      "./dist-e2d2538a6cc6.js",
      "./dist-3e8f100bf1c8.js",
      "./dist-fbd30d85c8f5.js",
      "./dist-15e5c1229202.js",
      "./dist-b2e8580a1221.js",
      "./dist-110b75dcfc1b.js",
      "./dist-1883d0992ff0.js",
      "./dist-8669f7b86b7c.js",
      "./dist-340268e76fe9.js",
      "./dist-ee8c3537ec67.js",
      "./dist-3425b72b6df9.js",
      "./dist-d7965aef2585.js",
      "./dist-ddf10f1a6edd.js",
      "./dist-367532ef7783.js",
      "./dist-9a2f61daa4d5.js",
      "./dist-31d0cb282ce8.js",
      "./dist-1714c9e08bb0.js",
      "./dist-164efb3f3432.js",
      "./dist-166135c1b954.js",
      "./dist-a531a2a68284.js",
      "./dist-b75394bdc37f.js",
      "./ruby-4b369efc8a8f.js",
      "./haskell-99fa71648973.js",
      "./clike-ce9cd077a325.js",
      "./vb-22c198681731.js",
      "./r-e2816acf1612.js",
      "./lua-2129c39c5c75.js",
      "./perl-f304e93a1a94.js",
      "./commonlisp-7766ebc65967.js",
      "./clojure-c69d8cb25c09.js",
      "./mllike-18ec050dd84d.js",
      "./powershell-242ce14e5ebb.js",
      "./verilog-6d1b0f2b4c27.js",
      "./dockerfile-52b80bf56b3a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
import { T as r, c as i, o as a } from "./dist-50497e5dc1f8.js";
function o(e) {
  return Object.hasOwn(d, e);
}
function s(e) {
  if (f.has(e)) return Promise.resolve(f.get(e) ?? null);
  let t = p.get(e);
  if (t != null) return t;
  if (!Object.hasOwn(d, e)) return Promise.resolve(null);
  let n = Promise.resolve(d[e]())
    .then((t) => (f.set(e, t), t))
    .catch(() => null)
    .finally(() => {
      p.delete(e);
    });
  return (p.set(e, n), n);
}
function c(e) {
  return f.get(e) ?? null;
}
function l(e) {
  return new a(i.define(e));
}
var u, d, f, p;
function m() {
  return (m = e(() => {
    (r(),
      n(),
      (u = () =>
        t(
          () => import(`./shell-d2f5d33d6a1d.js`).then((e) => l(e.shell)),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        )),
      (d = {
        bash: u,
        zsh: u,
        swift: () =>
          t(
            () => import(`./swift-8dfd81d616cd.js`).then((e) => l(e.swift)),
            __vite__mapDeps([2, 1]),
            import.meta.url,
          ),
        css: () =>
          t(
            () => import(`./dist-a7ee13e91d76.js`).then((e) => e.css()),
            __vite__mapDeps([3, 4, 1, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
        html: () =>
          t(
            () => import(`./dist-2d632fbc72cf.js`).then((e) => e.html()),
            __vite__mapDeps([10, 11, 1, 5, 6, 7, 8, 9, 4, 12, 13, 14]),
            import.meta.url,
          ),
        javascript: () =>
          t(
            () => import(`./dist-b2e8580a1221.js`).then((e) => e.javascript({ jsx: !0, typescript: !1 })),
            __vite__mapDeps([15, 12, 1, 5, 7, 8, 9, 13, 14, 6]),
            import.meta.url,
          ),
        typescript: () =>
          t(
            () => import(`./dist-b2e8580a1221.js`).then((e) => e.javascript({ jsx: !0, typescript: !0 })),
            __vite__mapDeps([15, 12, 1, 5, 7, 8, 9, 13, 14, 6]),
            import.meta.url,
          ),
        json: () =>
          t(
            () => import(`./dist-110b75dcfc1b.js`).then((e) => e.json()),
            __vite__mapDeps([16, 17, 1, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
        python: () =>
          t(
            () => import(`./dist-8669f7b86b7c.js`).then((e) => e.python()),
            __vite__mapDeps([18, 1, 5, 7, 8, 9, 13, 19, 6]),
            import.meta.url,
          ),
        sql: () =>
          t(
            () => import(`./dist-ee8c3537ec67.js`).then((e) => e.sql()),
            __vite__mapDeps([20, 1, 5, 6, 7, 8, 9, 13]),
            import.meta.url,
          ),
        go: () =>
          t(
            () => import(`./dist-3425b72b6df9.js`).then((e) => e.go()),
            __vite__mapDeps([21, 1, 5, 7, 8, 9, 22, 6, 13]),
            import.meta.url,
          ),
        yaml: () =>
          t(
            () => import(`./dist-ddf10f1a6edd.js`).then((e) => e.yaml()),
            __vite__mapDeps([23, 1, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
        java: () =>
          t(
            () => import(`./dist-367532ef7783.js`).then((e) => e.java()),
            __vite__mapDeps([24, 1, 7, 8, 9, 5, 25, 6]),
            import.meta.url,
          ),
        rust: () =>
          t(
            () => import(`./dist-31d0cb282ce8.js`).then((e) => e.rust()),
            __vite__mapDeps([26, 1, 7, 8, 9, 5, 27, 6]),
            import.meta.url,
          ),
        cpp: () =>
          t(
            () => import(`./dist-164efb3f3432.js`).then((e) => e.cpp()),
            __vite__mapDeps([28, 1, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
        php: () =>
          t(
            () => import(`./dist-166135c1b954.js`).then((e) => e.php()),
            __vite__mapDeps([29, 1, 5, 6, 7, 8, 9, 11, 4, 12, 13, 14]),
            import.meta.url,
          ),
        xml: () =>
          t(
            () => import(`./dist-a531a2a68284.js`).then((e) => e.xml()),
            __vite__mapDeps([30, 1, 5, 6, 7, 8, 9]),
            import.meta.url,
          ),
        vue: () =>
          t(
            () => import(`./dist-b75394bdc37f.js`).then((e) => e.vue()),
            __vite__mapDeps([31, 1, 5, 6, 7, 8, 9, 11, 4, 12, 13, 14]),
            import.meta.url,
          ),
        ruby: () =>
          t(
            () => import(`./ruby-4b369efc8a8f.js`).then((e) => l(e.ruby)),
            __vite__mapDeps([32, 1]),
            import.meta.url,
          ),
        haskell: () =>
          t(
            () => import(`./haskell-99fa71648973.js`).then((e) => l(e.haskell)),
            __vite__mapDeps([33, 1]),
            import.meta.url,
          ),
        kotlin: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.kotlin)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        csharp: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.csharp)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        vb: () =>
          t(
            () => import(`./vb-22c198681731.js`).then((e) => l(e.vb)),
            __vite__mapDeps([35, 1]),
            import.meta.url,
          ),
        c: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.c)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        objectivec: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.objectiveC)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        r: () =>
          t(
            () => import(`./r-e2816acf1612.js`).then((e) => l(e.r)),
            __vite__mapDeps([36, 1]),
            import.meta.url,
          ),
        lua: () =>
          t(
            () => import(`./lua-2129c39c5c75.js`).then((e) => l(e.lua)),
            __vite__mapDeps([37, 1]),
            import.meta.url,
          ),
        dart: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.dart)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        scala: () =>
          t(
            () => import(`./clike-ce9cd077a325.js`).then((e) => l(e.scala)),
            __vite__mapDeps([34, 1]),
            import.meta.url,
          ),
        perl: () =>
          t(
            () => import(`./perl-f304e93a1a94.js`).then((e) => l(e.perl)),
            __vite__mapDeps([38, 1]),
            import.meta.url,
          ),
        commonlisp: () =>
          t(
            () => import(`./commonlisp-7766ebc65967.js`).then((e) => l(e.commonLisp)),
            __vite__mapDeps([39, 1]),
            import.meta.url,
          ),
        clojure: () =>
          t(
            () => import(`./clojure-c69d8cb25c09.js`).then((e) => l(e.clojure)),
            __vite__mapDeps([40, 1]),
            import.meta.url,
          ),
        ocaml: () =>
          t(
            () => import(`./mllike-18ec050dd84d.js`).then((e) => l(e.oCaml)),
            __vite__mapDeps([41, 1]),
            import.meta.url,
          ),
        powershell: () =>
          t(
            () => import(`./powershell-242ce14e5ebb.js`).then((e) => l(e.powerShell)),
            __vite__mapDeps([42, 1]),
            import.meta.url,
          ),
        verilog: () =>
          t(
            () => import(`./verilog-6d1b0f2b4c27.js`).then((e) => l(e.verilog)),
            __vite__mapDeps([43, 1]),
            import.meta.url,
          ),
        dockerfile: () =>
          t(
            () => import(`./dockerfile-52b80bf56b3a.js`).then((e) => l(e.dockerFile)),
            __vite__mapDeps([44, 1]),
            import.meta.url,
          ),
      }),
      (f = new Map()),
      (p = new Map()));
  }))();
}
export { m as i, c as n, o as r, s as t };
//# sourceMappingURL=languages-6665b0380ca0.js.map
