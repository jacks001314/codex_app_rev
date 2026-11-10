const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./diff-preview-content-fae2f8370c40.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./register-pierre-themes-26873099a398.js",
      "./file-diff-61a6fffbd4c1.js",
      "./file-diff-presentation-b6cc0ce0d4c4.js",
      "./codex-diff-css-681a898586a0.js",
      "./virtualized-file-diff-line-position-cb3b3529be70.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  cz as n,
  fPt as r,
  pPt as i,
  sz as a,
  vzt as o,
  xMt as s,
  yzt as c,
  z4 as l,
} from "./app-shared-bbfeca5e5737.js";
function u(e) {
  let t = (0, d.c)(18),
    { children: n, diff: r, disabled: i, displayPath: o, linesAdded: s, linesRemoved: c, onOpen: l } = e,
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
  t[4] !== r || t[5] !== o || t[6] !== s || t[7] !== c || t[8] !== l
    ? ((C = (0, p.jsx)(h, { diff: r, displayPath: o, linesAdded: s, linesRemoved: c, onOpen: l })),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== n || t[11] !== u || t[12] !== x || t[13] !== C
    ? ((w = (0, p.jsx)(
        a,
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
      (f = c()),
      l(),
      n(),
      (p = s()),
      i(),
      (m = t(
        async () =>
          (
            await r(
              async () => {
                let { DiffHighlightPreloader: e } = await import(`./diff-preview-content-fae2f8370c40.js`);
                return { DiffHighlightPreloader: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
              import.meta.url,
            )
          ).DiffHighlightPreloader,
      )),
      (h = t(
        async () =>
          (
            await r(
              async () => {
                let { DiffPreviewContent: e } = await import(`./diff-preview-content-fae2f8370c40.js`);
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
//# sourceMappingURL=diff-preview-tooltip-aabff1e30a4d.js.map
