import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AH as n,
  AO as r,
  CB as i,
  CO as a,
  Dz as o,
  IDt as s,
  SB as c,
  TJ as l,
  TO as u,
  VDt as d,
  cz as f,
  jDt as p,
  jH as m,
  kz as h,
  m4 as g,
  p4 as _,
  sz as v,
  t3 as y,
  tH as b,
  vzt as x,
  xMt as S,
} from "./app-shared-bbfeca5e5737.js";
import { $fr as C, $o as w, GGn as T, Qo as E, epr as D } from "./app-initial-5851df3f6cb1.js";
async function O({ code: e, language: t, previewLanguage: n, captureScreenshotDataUrl: r }) {
  if (n === `latex`) {
    T(new Blob([e], { type: `application/x-tex;charset=utf-8` }), `document.tex`);
    return;
  }
  if (n === `html` || n === `react`) {
    let r = `tsx`;
    (n === `html` ? (r = `html`) : (t === `javascript` || t === `js` || t === `jsx`) && (r = `jsx`),
      T(
        new Blob([e], { type: n === `html` ? `text/html;charset=utf-8` : `text/plain;charset=utf-8` }),
        `preview.${r}`,
      ));
    return;
  }
  await document.fonts.ready;
  let i = await r();
  if (i == null) throw Error(`Preview is not ready for export`);
  T(new Blob([D(i.slice(i.indexOf(`,`) + 1))], { type: `image/png` }), `mermaid-diagram.png`);
}
function k() {
  return (k = e(() => {
    C();
  }))();
}
function A(e) {
  let r = (0, M.c)(19),
    { onDownload: l, onCopyCode: f, onExpand: p, onShowSource: h } = e,
    g = d(),
    y;
  r[0] === g
    ? (y = r[1])
    : ((y = g.formatMessage({
        id: `chatgpt.codeBlocks.mermaid.options.ariaLabel`,
        defaultMessage: `Diagram options`,
        description: `Accessible label and tooltip for the actions menu shown over an inline Mermaid diagram in a ChatGPT message`,
      })),
      (r[0] = g),
      (r[1] = y));
  let x = y,
    S;
  r[2] === g
    ? (S = r[3])
    : ((S = g.formatMessage({
        id: `chatgpt.codeBlocks.mermaid.expand`,
        defaultMessage: `Expand diagram`,
        description: `Tooltip and accessible label for opening a Mermaid diagram in the full-size image viewer with zoom controls`,
      })),
      (r[2] = g),
      (r[3] = S));
  let C = S,
    w;
  r[4] !== f || r[5] !== l || r[6] !== h || r[7] !== x
    ? ((w =
        l != null || f != null || h != null
          ? (0, N.jsxs)(a, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, N.jsx)(v, {
                tooltipContent: x,
                children: (0, N.jsx)(t, {
                  "aria-label": x,
                  color: `blockAction`,
                  radius: `full`,
                  size: `inputIcon`,
                  children: (0, N.jsx)(o, { icon: { 16: n, 20: m } }),
                }),
              }),
              children: [
                h == null
                  ? null
                  : (0, N.jsx)(u.Item, {
                      LeftIcon: b,
                      onSelect: h,
                      children: (0, N.jsx)(s, {
                        id: `chatgpt.codeBlocks.mermaid.showSource`,
                        defaultMessage: `Show source`,
                        description: `Menu action that shows the Mermaid source code in its document editor`,
                      }),
                    }),
                f == null
                  ? null
                  : (0, N.jsx)(u.Item, {
                      LeftIcon: b,
                      onSelect: f,
                      children: (0, N.jsx)(s, {
                        id: `chatgpt.codeBlocks.mermaid.copyAsCode`,
                        defaultMessage: `Copy as code`,
                        description: `Menu action that copies the raw Mermaid source code to the clipboard`,
                      }),
                    }),
                l == null
                  ? null
                  : (0, N.jsx)(u.Item, {
                      leftIconAsset: _,
                      onSelect: l,
                      children: (0, N.jsx)(s, {
                        id: `chatgpt.codeBlocks.mermaid.downloadPng`,
                        defaultMessage: `Download image`,
                        description: `Action that downloads the rendered Mermaid diagram as a PNG image`,
                      }),
                    }),
              ],
            })
          : null),
      (r[4] = f),
      (r[5] = l),
      (r[6] = h),
      (r[7] = x),
      (r[8] = w))
    : (w = r[8]);
  let T;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, N.jsx)(o, { icon: { 16: c, 20: i } })), (r[9] = T))
    : (T = r[9]);
  let D;
  r[10] !== C || r[11] !== p
    ? ((D = (0, N.jsx)(t, {
        "aria-label": C,
        color: `blockAction`,
        radius: `full`,
        size: `inputIcon`,
        onClick: p,
        children: T,
      })),
      (r[10] = C),
      (r[11] = p),
      (r[12] = D))
    : (D = r[12]);
  let O;
  r[13] !== C || r[14] !== D
    ? ((O = (0, N.jsx)(v, { tooltipContent: C, delayOpen: !0, children: D })),
      (r[13] = C),
      (r[14] = D),
      (r[15] = O))
    : (O = r[15]);
  let k;
  return (
    r[16] !== w || r[17] !== O
      ? ((k = (0, N.jsxs)(E, { "data-markdown-copy": `exclude`, onPointerDown: j, children: [w, O] })),
        (r[16] = w),
        (r[17] = O),
        (r[18] = k))
      : (k = r[18]),
    k
  );
}
function j(e) {
  return e.stopPropagation();
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = x()), g(), p(), y(), r(), l(), h(), f(), w(), (N = S()));
  }))();
}
export { k as i, P as n, O as r, A as t };
//# sourceMappingURL=chatgpt-mermaid-preview-actions-e5e94205d584.js.map
