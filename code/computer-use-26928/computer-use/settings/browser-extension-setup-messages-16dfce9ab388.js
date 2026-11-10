import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ben as t,
  DT as n,
  G9t as r,
  Gsn as i,
  Ket as a,
  Ksn as o,
  M3 as ee,
  OT as te,
  Srn as s,
  Urn as c,
  Wrn as l,
  Y9t as u,
  Yrn as d,
  _dn as f,
  brn as ne,
  csn as p,
  ein as m,
  fsn as re,
  lsn as ie,
  mcn as h,
  ncn as ae,
  rcn as g,
  usn as oe,
  vdn as _,
  zen as v,
} from "./app-shared-7552fc8d5d82.js";
import {
  ASt as se,
  Aun as ce,
  Mun as y,
  OSt as b,
  Qo as x,
  aa as S,
  ea as le,
  ia as C,
  jSt as w,
  kSt as T,
  ta as E,
  ts as D,
} from "./app-initial-3916b423772b.js";
function ue(e) {
  return O(M.lexer(e));
}
function O(e) {
  return e
    .filter((e) => e.type !== `html` && e.type !== `image`)
    .map((e) => {
      if (e.type === `heading` || e.type === `hr` || e.type === `plugin-description-footnote`) {
        let t = e.raw.trimEnd();
        return {
          type: `paragraph`,
          raw: e.raw,
          text: t,
          tokens: t
            .split(
              `
`,
            )
            .flatMap((e, t) => [
              ...(t === 0
                ? []
                : [
                    {
                      type: `br`,
                      raw: `
`,
                    },
                  ]),
              { type: `text`, raw: e, text: b(e) },
            ]),
        };
      }
      return e.type === `table`
        ? {
            ...e,
            header: e.header.map((e) => ({ ...e, tokens: O(e.tokens) })),
            rows: e.rows.map((e) => e.map((e) => ({ ...e, tokens: O(e.tokens) }))),
          }
        : e.type === `list`
          ? {
              ...e,
              items: e.items.map((e) => {
                let t = O(e.tokens);
                if (e.task) {
                  let n = e.checked ? `[x] ` : `[ ] `,
                    r = t.findIndex((e) => e.type !== `space`),
                    i = t[r];
                  i?.type === `text` || i?.type === `paragraph`
                    ? (t[r] = {
                        ...i,
                        text: n + i.text,
                        tokens: i.tokens
                          ? [{ type: `text`, raw: n, text: n }, ...i.tokens]
                          : void 0,
                      })
                    : t.unshift({ type: `text`, raw: n, text: n });
                }
                return { ...e, task: !1, checked: void 0, tokens: t };
              }),
            }
          : `tokens` in e && e.tokens
            ? { ...e, tokens: O(e.tokens) }
            : e;
    })
    .filter((e) => e.type !== `link` || k(e));
}
function k(e) {
  return `tokens` in e && e.tokens
    ? e.tokens.some(k)
    : !(`text` in e) || typeof e.text != `string`
      ? !1
      : (e.type === `codespan` ? e.text : se(e.text)).trim().length > 0;
}
var A, j, M;
function N() {
  return (N = e(() => {
    (w(),
      T(),
      u(),
      o(),
      re(),
      ie(),
      (A = /^ {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/),
      (j = { extensions: [p()], mdastExtensions: [oe()] }),
      (M = new r({
        gfm: !0,
        breaks: !0,
        extensions: [
          {
            name: `plugin-description-footnote`,
            level: `block`,
            start(e) {
              return /\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/.exec(e)?.index;
            },
            tokenizer(e) {
              let t = A.exec(e)?.[0];
              if (t == null || i(t, j).children[0]?.type !== `footnoteDefinition`) return;
              let n = e.length;
              for (let t of e.matchAll(/\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/g))
                if (i(t[0], j).children[0]?.type === `footnoteDefinition`) {
                  n = t.index;
                  break;
                }
              let r = i(e.slice(0, n), j).children[0],
                a = r?.type === `footnoteDefinition` ? r.position?.end.offset : void 0;
              if (a != null) return { type: `plugin-description-footnote`, raw: e.slice(0, a) };
            },
          },
        ],
      })));
  }))();
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = `_viewport_t3q37_1`), (F = { viewport: P }));
  }))();
}
function L(e) {
  let n = (0, z.c)(53),
    { children: r, openTarget: i } = e,
    a = (0, B.useId)(),
    o = (0, B.useRef)(null),
    s = (0, B.useRef)(null),
    c = (0, B.useRef)(!1),
    l;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = new Set()), (n[0] = l)) : (l = n[0]);
  let u = (0, B.useRef)(l),
    f = (0, B.useRef)(0),
    p = te(),
    [m, re] = (0, B.useState)(!1),
    [ie, h] = (0, B.useState)(!1),
    g = m ? 0.18 : 0.16,
    oe = m ? 0.09 : 0.16,
    [_, v] = (0, B.useState)(null),
    y = _ != null && _.full > _.collapsed,
    b;
  n[1] === m
    ? (b = n[2])
    : ((b = (e) => {
        for (let e of u.current) e.removeAttribute(`inert`);
        u.current.clear();
        let t = o.current;
        if (t == null || m) return;
        let n = t.getBoundingClientRect(),
          r = t.offsetHeight === 0 ? 1 : n.height / t.offsetHeight,
          i = n.top + e * r;
        for (let e of t.querySelectorAll(
          `a[href], p, ul, ol, li, blockquote, pre, tr, th, td, [data-plugin-description-table]`,
        )) {
          let t = e.getBoundingClientRect(),
            n = e.matches(`a[href]`) ? t.bottom > i : t.top >= i;
          !e.hasAttribute(`inert`) && n && (e.setAttribute(`inert`, ``), u.current.add(e));
        }
      }),
      (n[1] = m),
      (n[2] = b));
  let x = (0, B.useEffectEvent)(b),
    S;
  n[3] === x
    ? (S = n[4])
    : ((S = () => {
        let e = o.current;
        if (e == null) return;
        let t = () => {
          let t = e.classList.contains(`line-clamp-[15]`);
          e.classList.remove(`line-clamp-[15]`);
          let n = e.scrollHeight,
            r = Array.from(e.querySelectorAll(`pre`), de);
          for (let { element: e } of r) e.style.overflow = `visible`;
          e.classList.add(`line-clamp-[15]`);
          let i = e.clientHeight;
          if (e.querySelector(`table`) != null) {
            let t = e.querySelector(`[data-markdown-text-style]`),
              n = Number.parseFloat(getComputedStyle(t ?? e).lineHeight);
            Number.isFinite(n) && (i = Math.min(i, n * 15));
          }
          t || e.classList.remove(`line-clamp-[15]`);
          for (let { element: e, style: t } of r)
            t == null ? e.removeAttribute(`style`) : e.setAttribute(`style`, t);
          (v((e) => (e?.full === n && e.collapsed === i ? e : { full: n, collapsed: i })), x(i));
        };
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
      }),
      (n[3] = x),
      (n[4] = S));
  let C;
  (n[5] === r ? (C = n[6]) : ((C = [r]), (n[5] = r), (n[6] = C)), (0, B.useLayoutEffect)(S, C));
  let w;
  n[7] !== _ || n[8] !== x
    ? ((w = () => {
        _ != null && x(_.collapsed);
      }),
      (n[7] = _),
      (n[8] = x),
      (n[9] = w))
    : (w = n[9]);
  let T;
  (n[10] !== _ || n[11] !== m ? ((T = [_, m]), (n[10] = _), (n[11] = m), (n[12] = T)) : (T = n[12]),
    (0, B.useLayoutEffect)(w, T));
  let E;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        let e = s.current;
        c.current &&
          e != null &&
          e.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: `instant` });
      }),
      (n[13] = E))
    : (E = n[13]);
  let D = E,
    O = ie || void 0,
    k;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = ae(`overflow-clip`, F.viewport)), (n[14] = k))
    : (k = n[14]);
  let A = (m ? _?.full : _?.collapsed) ?? `auto`,
    j = m || !y ? 1 : 0,
    M;
  n[15] !== A || n[16] !== j
    ? ((M = { height: A, "--description-fade": j }), (n[15] = A), (n[16] = j), (n[17] = M))
    : (M = n[17]);
  let N = p ? 0 : g,
    P;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = [0.22, 1, 0.36, 1]), (n[18] = P))
    : (P = n[18]);
  let I = p ? 0 : oe,
    L;
  n[19] === I ? (L = n[20]) : ((L = { duration: I }), (n[19] = I), (n[20] = L));
  let R;
  n[21] !== N || n[22] !== L
    ? ((R = { duration: N, ease: P, "--description-fade": L }),
      (n[21] = N),
      (n[22] = L),
      (n[23] = R))
    : (R = n[23]);
  let U;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        let e = f.current;
        ne.postRender(() => {
          e === f.current && (D(), (c.current = !1), h(!1));
        });
      }),
      (n[24] = U))
    : (U = n[24]);
  let W = _ == null && `line-clamp-[15]`,
    G;
  n[25] === W ? (G = n[26]) : ((G = ae(W)), (n[25] = W), (n[26] = G));
  let K;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = { kind: `small` }), (n[27] = K))
    : (K = n[27]);
  let q;
  n[28] === r ? (q = n[29]) : ((q = ue(r)), (n[28] = r), (n[29] = q));
  let J;
  n[30] === i
    ? (J = n[31])
    : ((J = () => ({
        ...H,
        a: (e) => {
          let { children: t, href: n, title: r } = e;
          return n
            ? (0, V.jsx)(ce, {
                className: `hover:opacity-70 focus-visible:opacity-70`,
                href: n,
                title: r,
                initiator: `markdown_link_click`,
                openTarget: i,
                underline: `always`,
                children: t,
              })
            : (0, V.jsx)(V.Fragment, { children: t });
        },
      })),
      (n[30] = i),
      (n[31] = J));
  let Y;
  n[32] !== q || n[33] !== J
    ? ((Y = (0, V.jsx)(le, { textStyle: K, renderText: se, tokens: q, getDefaultComponents: J })),
      (n[32] = q),
      (n[33] = J),
      (n[34] = Y))
    : (Y = n[34]);
  let X;
  n[35] !== G || n[36] !== Y
    ? ((X = (0, V.jsx)(`div`, { ref: o, className: G, children: Y })),
      (n[35] = G),
      (n[36] = Y),
      (n[37] = X))
    : (X = n[37]);
  let Z;
  n[38] !== a || n[39] !== M || n[40] !== R || n[41] !== X
    ? ((Z = (0, V.jsx)(t.div, {
        id: a,
        className: k,
        initial: !1,
        animate: M,
        transition: R,
        onUpdate: D,
        onAnimationComplete: U,
        children: X,
      })),
      (n[38] = a),
      (n[39] = M),
      (n[40] = R),
      (n[41] = X),
      (n[42] = Z))
    : (Z = n[42]);
  let Q;
  n[43] !== a || n[44] !== g || n[45] !== y || n[46] !== m || n[47] !== p
    ? ((Q =
        y || m
          ? (0, V.jsxs)(`button`, {
              ref: s,
              className: `mt-4 flex cursor-interaction scroll-my-4 items-center gap-1 text-sm text-secondary select-none hover:underline`,
              type: `button`,
              "aria-controls": a,
              "aria-expanded": m,
              onClick: () => {
                ((f.current += 1), h(!0), (c.current = m), re(!m));
              },
              children: [
                m
                  ? (0, V.jsx)(d, {
                      id: `plugins.description.showLess`,
                      defaultMessage: `Show less`,
                      description: `Short text button on a plugin detail page that lets the user collapse an expanded description to its first 15 displayed lines.`,
                    })
                  : (0, V.jsx)(d, {
                      id: `plugins.description.showMore`,
                      defaultMessage: `Show more`,
                      description: `Short text button on a plugin detail page that lets the user reveal the rest of a description longer than 15 displayed lines.`,
                    }),
                (0, V.jsx)(t.span, {
                  "aria-hidden": !0,
                  initial: !1,
                  animate: { rotate: m ? 180 : 0 },
                  transition: { duration: p ? 0 : g, ease: [0.22, 1, 0.36, 1] },
                  children: (0, V.jsx)(ee, {}),
                }),
              ],
            })
          : null),
      (n[43] = a),
      (n[44] = g),
      (n[45] = y),
      (n[46] = m),
      (n[47] = p),
      (n[48] = Q))
    : (Q = n[48]);
  let $;
  return (
    n[49] !== Z || n[50] !== Q || n[51] !== O
      ? (($ = (0, V.jsxs)(`div`, { "data-plugin-description-transitioning": O, children: [Z, Q] })),
        (n[49] = Z),
        (n[50] = Q),
        (n[51] = O),
        (n[52] = $))
      : ($ = n[52]),
    $
  );
}
function de(e) {
  return { element: e, style: e.getAttribute(`style`) };
}
function R(e) {
  let t = (0, z.c)(7),
    { children: n } = e,
    r = m(),
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = r.formatMessage({
        id: `plugins.description.table`,
        defaultMessage: `Description table`,
        description: `Accessible label for a horizontally scrollable Markdown table in a plugin description.`,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n ? (a = t[3]) : ((a = (0, V.jsx)(x, { children: n })), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, V.jsx)(`div`, {
          className: `my-3 max-w-full overflow-x-auto`,
          role: `region`,
          "aria-label": i,
          tabIndex: 0,
          "data-plugin-description-table": !0,
          children: a,
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var z, B, V, H;
function U() {
  return (U = e(() => {
    ((z = f()),
      g(),
      w(),
      s(),
      v(),
      (B = _()),
      l(),
      y(),
      a(),
      n(),
      S(),
      E(),
      D(),
      N(),
      I(),
      (V = h()),
      (H = {
        ...C({ allowWideBlocks: !1, mediaComponent: void 0 }),
        img: () => null,
        table: R,
        p: ({ children: e }) =>
          (0, V.jsx)(`p`, { className: `my-2 font-content`, dir: `auto`, children: e }),
        pre: ({ children: e }) =>
          (0, V.jsx)(`pre`, {
            className: `my-3 overflow-x-auto rounded-lg bg-token-text-code-block-background p-3 [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0`,
            children: e,
          }),
        code: ({ children: e, inline: t }) =>
          t
            ? (0, V.jsx)(`span`, {
                className: `inline-markdown`,
                "data-markdown-copy": `inline-code`,
                dir: `ltr`,
                children: e,
              })
            : (0, V.jsx)(`code`, { className: `font-mono text-sm`, children: e }),
      }));
  }))();
}
function W(e) {
  return q[e]?.description ?? K.browserExtensionDescription;
}
function G(e) {
  return q[e]?.name ?? K.browserExtensionName;
}
var K, q;
function J() {
  return (J = e(() => {
    (l(),
      (K = c({
        browserExtensionDescription: {
          id: `plugins.installModal.browserExtension.description`,
          defaultMessage: `Install this extension to connect ChatGPT to your browser`,
          description: `Description for the required Chromium browser extension in the plugin finish setup modal`,
        },
        browserExtensionName: {
          id: `plugins.browserExtension.name`,
          defaultMessage: `ChatGPT browser extension`,
          description: `Name of the ChatGPT extension for a Chromium browser`,
        },
        chromeBrowserExtensionDescription: {
          id: `plugins.installModal.codexChrome.description`,
          defaultMessage: `Install this extension in Chrome to connect ChatGPT to your browser`,
          description: `Description for the required Chrome browser extension in the plugin finish setup modal`,
        },
        chromeBrowserExtensionName: {
          id: `plugins.browserExtension.chrome.name`,
          defaultMessage: `ChatGPT for Chrome`,
          description: `Name of the ChatGPT extension for Chrome`,
        },
        edgeBrowserExtensionName: {
          id: `plugins.browserExtension.edge.name`,
          defaultMessage: `ChatGPT for Edge`,
          description: `Name of the ChatGPT extension for Edge`,
        },
        edgeBrowserExtensionDescription: {
          id: `plugins.installModal.edgeBrowserExtension.description`,
          defaultMessage: `Install this extension in Edge to connect ChatGPT to your browser`,
          description: `Description for the required Edge browser extension in the plugin finish setup modal`,
        },
      })),
      (q = {
        chrome: {
          description: K.chromeBrowserExtensionDescription,
          name: K.chromeBrowserExtensionName,
        },
        edge: { description: K.edgeBrowserExtensionDescription, name: K.edgeBrowserExtensionName },
      }));
  }))();
}
export { U as a, L as i, G as n, J as r, W as t };
//# sourceMappingURL=browser-extension-setup-messages-16dfce9ab388.js.map
