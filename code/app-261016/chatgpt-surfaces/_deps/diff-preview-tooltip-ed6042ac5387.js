const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./diff-preview-content-a20f38727f1b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./register-pierre-themes-8ff08e47faf4.js",
      "./file-diff-232655eefd3e.js",
      "./file-diff-presentation-eb82cf883deb.js",
      "./codex-diff-css-38be692bb624.js",
      "./virtualized-file-diff-line-position-626fc7d91724.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  OFt as a,
  PBt as o,
  kFt as s,
  nB as c,
  rB as l,
} from "./app-shared-2feb3d4c6fcc.js";
function u(e) {
  let t = (0, d.c)(18),
    { children: n, diff: r, disabled: i, displayPath: a, linesAdded: o, linesRemoved: s, onOpen: l } = e,
    u = i !== void 0 && i,
    [v, y] = (0, f.useState)(!1),
    b;
  t[0] !== r || t[1] !== v
    ? ((b = v ? (0, p.jsx)(m, { fileDiff: r.metadata }) : null), (t[0] = r), (t[1] = v), (t[2] = b))
    : (b = t[2]);
  let x = u ? `disabled` : `enabled`,
    S;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        y(!0);
      }),
      (t[3] = S))
    : (S = t[3]);
  let C;
  t[4] !== r || t[5] !== a || t[6] !== o || t[7] !== s || t[8] !== l
    ? ((C = (0, p.jsx)(h, { diff: r, displayPath: a, linesAdded: o, linesRemoved: s, onOpen: l })),
      (t[4] = r),
      (t[5] = a),
      (t[6] = o),
      (t[7] = s),
      (t[8] = l),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== n || t[11] !== u || t[12] !== x || t[13] !== C
    ? ((w = (0, p.jsx)(
        c,
        {
          align: `center`,
          closeOnTriggerBlur: !1,
          delayDuration: g,
          disabled: u,
          interactive: !0,
          onPointerEnter: S,
          side: `top`,
          sideOffset: 0,
          skipDelayKey: `diff-preview`,
          tooltipBodyClassName: `h-full`,
          tooltipClassName: `group/diff-preview pointer-events-none flex h-[min(420px,var(--radix-tooltip-content-available-height,420px),calc(100vh-16px))] flex-col justify-end overflow-visible data-[side]:w-[clamp(0px,calc(var(--radix-tooltip-trigger-width,0px)-64px),var(--radix-tooltip-content-available-width,100vw))] data-[side=bottom]:justify-start`,
          tooltipMaxWidth: _,
          variant: `unstyled`,
          tooltipContent: C,
          children: n,
        },
        x,
      )),
      (t[10] = n),
      (t[11] = u),
      (t[12] = x),
      (t[13] = C),
      (t[14] = w))
    : (w = t[14]);
  let T;
  return (
    t[15] !== b || t[16] !== w
      ? ((T = (0, p.jsxs)(p.Fragment, { children: [b, w] })), (t[15] = b), (t[16] = w), (t[17] = T))
      : (T = t[17]),
    T
  );
}
var d, f, p, m, h, g, _;
function v() {
  return (v = e(() => {
    ((d = o()),
      (f = n()),
      t(),
      l(),
      (p = i()),
      s(),
      (m = r(
        async () =>
          (
            await a(
              async () => {
                let { DiffHighlightPreloader: e } = await import(`./diff-preview-content-a20f38727f1b.js`);
                return { DiffHighlightPreloader: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
              import.meta.url,
            )
          ).DiffHighlightPreloader,
      )),
      (h = r(
        async () =>
          (
            await a(
              async () => {
                let { DiffPreviewContent: e } = await import(`./diff-preview-content-a20f38727f1b.js`);
                return { DiffPreviewContent: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
              import.meta.url,
            )
          ).DiffPreviewContent,
      )),
      (g = 800),
      (_ = `clamp(0px, calc(var(--radix-tooltip-trigger-width) - 64px), var(--radix-tooltip-content-available-width))`));
  }))();
}
export { v as n, u as t };
//# sourceMappingURL=diff-preview-tooltip-ed6042ac5387.js.map
