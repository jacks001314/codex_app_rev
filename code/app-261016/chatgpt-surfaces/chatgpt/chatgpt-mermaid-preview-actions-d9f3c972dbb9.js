import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DU as t,
  LNt as n,
  OU as r,
  PBt as i,
  SB as a,
  TY as o,
  XOt as s,
  Y3 as c,
  Z3 as l,
  ZH as u,
  ck as d,
  d3 as f,
  f3 as p,
  nB as m,
  okt as h,
  rB as g,
  rk as _,
  tk as v,
  tkt as y,
  vV as b,
  wB as x,
  yV as S,
} from "./app-shared-2feb3d4c6fcc.js";
import { Qgr as C, Zgr as w, es as T, mYn as E, ts as D } from "./app-initial-ad16eaadf81f.js";
async function O({ code: e, language: t, previewLanguage: n, captureScreenshotDataUrl: r }) {
  if (n === `latex`) {
    E(new Blob([e], { type: `application/x-tex;charset=utf-8` }), `document.tex`);
    return;
  }
  if (n === `html` || n === `react`) {
    let r = `tsx`;
    (n === `html` ? (r = `html`) : (t === `javascript` || t === `js` || t === `jsx`) && (r = `jsx`),
      E(
        new Blob([e], { type: n === `html` ? `text/html;charset=utf-8` : `text/plain;charset=utf-8` }),
        `preview.${r}`,
      ));
    return;
  }
  await document.fonts.ready;
  let i = await r();
  if (i == null) throw Error(`Preview is not ready for export`);
  E(new Blob([C(i.slice(i.indexOf(`,`) + 1))], { type: `image/png` }), `mermaid-diagram.png`);
}
function k() {
  return (k = e(() => {
    w();
  }))();
}
function A(e) {
  let n = (0, M.c)(19),
    { onDownload: i, onCopyCode: o, onExpand: s, onShowSource: l } = e,
    d = h(),
    p;
  n[0] === d
    ? (p = n[1])
    : ((p = d.formatMessage({
        id: `chatgpt.codeBlocks.mermaid.options.ariaLabel`,
        defaultMessage: `Diagram options`,
        description: `Accessible label and tooltip for the actions menu shown over an inline Mermaid diagram in a ChatGPT message`,
      })),
      (n[0] = d),
      (n[1] = p));
  let g = p,
    x;
  n[2] === d
    ? (x = n[3])
    : ((x = d.formatMessage({
        id: `chatgpt.codeBlocks.mermaid.expand`,
        defaultMessage: `Expand diagram`,
        description: `Tooltip and accessible label for opening a Mermaid diagram in the full-size image viewer with zoom controls`,
      })),
      (n[2] = d),
      (n[3] = x));
  let C = x,
    w;
  n[4] !== o || n[5] !== i || n[6] !== l || n[7] !== g
    ? ((w =
        i != null || o != null || l != null
          ? (0, N.jsxs)(v, {
              align: `end`,
              contentWidth: `xs`,
              triggerButton: (0, N.jsx)(m, {
                tooltipContent: g,
                children: (0, N.jsx)(c, {
                  "aria-label": g,
                  color: `blockAction`,
                  radius: `full`,
                  size: `inputIcon`,
                  children: (0, N.jsx)(a, { icon: { 16: t, 20: r } }),
                }),
              }),
              children: [
                l == null
                  ? null
                  : (0, N.jsx)(_.Item, {
                      LeftIcon: u,
                      onSelect: l,
                      children: (0, N.jsx)(y, {
                        id: `chatgpt.codeBlocks.mermaid.showSource`,
                        defaultMessage: `Show source`,
                        description: `Menu action that shows the Mermaid source code in its document editor`,
                      }),
                    }),
                o == null
                  ? null
                  : (0, N.jsx)(_.Item, {
                      LeftIcon: u,
                      onSelect: o,
                      children: (0, N.jsx)(y, {
                        id: `chatgpt.codeBlocks.mermaid.copyAsCode`,
                        defaultMessage: `Copy as code`,
                        description: `Menu action that copies the raw Mermaid source code to the clipboard`,
                      }),
                    }),
                i == null
                  ? null
                  : (0, N.jsx)(_.Item, {
                      leftIconAsset: f,
                      onSelect: i,
                      children: (0, N.jsx)(y, {
                        id: `chatgpt.codeBlocks.mermaid.downloadPng`,
                        defaultMessage: `Download image`,
                        description: `Action that downloads the rendered Mermaid diagram as a PNG image`,
                      }),
                    }),
              ],
            })
          : null),
      (n[4] = o),
      (n[5] = i),
      (n[6] = l),
      (n[7] = g),
      (n[8] = w))
    : (w = n[8]);
  let E;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, N.jsx)(a, { icon: { 16: b, 20: S } })), (n[9] = E))
    : (E = n[9]);
  let D;
  n[10] !== C || n[11] !== s
    ? ((D = (0, N.jsx)(c, {
        "aria-label": C,
        color: `blockAction`,
        radius: `full`,
        size: `inputIcon`,
        onClick: s,
        children: E,
      })),
      (n[10] = C),
      (n[11] = s),
      (n[12] = D))
    : (D = n[12]);
  let O;
  n[13] !== C || n[14] !== D
    ? ((O = (0, N.jsx)(m, { tooltipContent: C, delayOpen: !0, children: D })),
      (n[13] = C),
      (n[14] = D),
      (n[15] = O))
    : (O = n[15]);
  let k;
  return (
    n[16] !== w || n[17] !== O
      ? ((k = (0, N.jsxs)(T, { "data-markdown-copy": `exclude`, onPointerDown: j, children: [w, O] })),
        (n[16] = w),
        (n[17] = O),
        (n[18] = k))
      : (k = n[18]),
    k
  );
}
function j(e) {
  return e.stopPropagation();
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = i()), p(), s(), l(), d(), o(), x(), g(), D(), (N = n()));
  }))();
}
export { k as i, P as n, O as r, A as t };
//# sourceMappingURL=chatgpt-mermaid-preview-actions-d9f3c972dbb9.js.map
