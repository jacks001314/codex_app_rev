import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BMt as t,
  Bz as n,
  EOt as r,
  FBt as i,
  FTt as a,
  Hz as o,
  ITt as s,
  LNt as c,
  MNt as ee,
  NNt as l,
  OOt as u,
  PBt as d,
  SMt as f,
  TY as p,
  Uz as m,
  Vz as te,
  Wz as ne,
  XOt as h,
  bMt as g,
  kH as re,
  okt as _,
  tkt as ie,
  vMt as v,
  yMt as ae,
  zMt as y,
  zz as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AVr as b,
  GLn as se,
  Ko as ce,
  PVr as x,
  Xo as S,
  Zo as C,
  fl as w,
  hl as T,
  qLn as E,
  qo as D,
} from "./app-initial-ad16eaadf81f.js";
function le(e) {
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
              { type: `text`, raw: e, text: oe(e) },
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
                        tokens: i.tokens ? [{ type: `text`, raw: n, text: n }, ...i.tokens] : void 0,
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
      : (e.type === `codespan` ? e.text : te(e.text)).trim().length > 0;
}
var A, j, M;
function N() {
  return (N = e(() => {
    (o(),
      n(),
      x(),
      t(),
      f(),
      ae(),
      (A = /^ {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/),
      (j = { extensions: [v()], mdastExtensions: [g()] }),
      (M = new b({
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
              if (t == null || y(t, j).children[0]?.type !== `footnoteDefinition`) return;
              let n = e.length;
              for (let t of e.matchAll(/\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/g))
                if (y(t[0], j).children[0]?.type === `footnoteDefinition`) {
                  n = t.index;
                  break;
                }
              let r = y(e.slice(0, n), j).children[0],
                i = r?.type === `footnoteDefinition` ? r.position?.end.offset : void 0;
              if (i != null) return { type: `plugin-description-footnote`, raw: e.slice(0, i) };
            },
          },
        ],
      })));
  }))();
}
var P, ue;
function F() {
  return (F = e(() => {
    ((P = `_viewport_t3q37_1`), (ue = { viewport: P }));
  }))();
}
function I(e) {
  let t = (0, R.c)(53),
    { children: n, openTarget: i } = e,
    a = (0, z.useId)(),
    o = (0, z.useRef)(null),
    c = (0, z.useRef)(null),
    l = (0, z.useRef)(!1),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = new Set()), (t[0] = u)) : (u = t[0]);
  let d = (0, z.useRef)(u),
    f = (0, z.useRef)(0),
    p = ne(),
    [m, h] = (0, z.useState)(!1),
    [g, _] = (0, z.useState)(!1),
    v = m ? 0.18 : 0.16,
    ae = m ? 0.09 : 0.16,
    [y, oe] = (0, z.useState)(null),
    b = y != null && y.full > y.collapsed,
    x;
  t[1] === m
    ? (x = t[2])
    : ((x = (e) => {
        for (let e of d.current) e.removeAttribute(`inert`);
        d.current.clear();
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
          !e.hasAttribute(`inert`) && n && (e.setAttribute(`inert`, ``), d.current.add(e));
        }
      }),
      (t[1] = m),
      (t[2] = x));
  let S = (0, z.useEffectEvent)(x),
    C;
  t[3] === S
    ? (C = t[4])
    : ((C = () => {
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
          (oe((e) => (e?.full === n && e.collapsed === i ? e : { full: n, collapsed: i })), S(i));
        };
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
      }),
      (t[3] = S),
      (t[4] = C));
  let w;
  (t[5] === n ? (w = t[6]) : ((w = [n]), (t[5] = n), (t[6] = w)), (0, z.useLayoutEffect)(C, w));
  let T;
  t[7] !== y || t[8] !== S
    ? ((T = () => {
        y != null && S(y.collapsed);
      }),
      (t[7] = y),
      (t[8] = S),
      (t[9] = T))
    : (T = t[9]);
  let E;
  (t[10] !== y || t[11] !== m ? ((E = [y, m]), (t[10] = y), (t[11] = m), (t[12] = E)) : (E = t[12]),
    (0, z.useLayoutEffect)(T, E));
  let D;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = c.current;
        l.current &&
          e != null &&
          e.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: `instant` });
      }),
      (t[13] = D))
    : (D = t[13]);
  let O = D,
    k = g || void 0,
    A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = ee(`overflow-clip`, ue.viewport)), (t[14] = A))
    : (A = t[14]);
  let j = (m ? y?.full : y?.collapsed) ?? `auto`,
    M = m || !b ? 1 : 0,
    N;
  t[15] !== j || t[16] !== M
    ? ((N = { height: j, "--description-fade": M }), (t[15] = j), (t[16] = M), (t[17] = N))
    : (N = t[17]);
  let P = p ? 0 : v,
    F;
  t[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = [0.22, 1, 0.36, 1]), (t[18] = F)) : (F = t[18]);
  let I = p ? 0 : ae,
    L;
  t[19] === I ? (L = t[20]) : ((L = { duration: I }), (t[19] = I), (t[20] = L));
  let H;
  t[21] !== P || t[22] !== L
    ? ((H = { duration: P, ease: F, "--description-fade": L }), (t[21] = P), (t[22] = L), (t[23] = H))
    : (H = t[23]);
  let U;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        let e = f.current;
        r.postRender(() => {
          e === f.current && (O(), (l.current = !1), _(!1));
        });
      }),
      (t[24] = U))
    : (U = t[24]);
  let W = y == null && `line-clamp-[15]`,
    G;
  t[25] === W ? (G = t[26]) : ((G = ee(W)), (t[25] = W), (t[26] = G));
  let K;
  t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = { kind: `small` }), (t[27] = K)) : (K = t[27]);
  let q;
  t[28] === n ? (q = t[29]) : ((q = le(n)), (t[28] = n), (t[29] = q));
  let J;
  t[30] === i
    ? (J = t[31])
    : ((J = () => ({
        ...V,
        a: (e) => {
          let { children: t, href: n, title: r } = e;
          return n
            ? (0, B.jsx)(se, {
                className: `hover:opacity-70 focus-visible:opacity-70`,
                href: n,
                title: r,
                initiator: `markdown_link_click`,
                openTarget: i,
                underline: `always`,
                children: t,
              })
            : (0, B.jsx)(B.Fragment, { children: t });
        },
      })),
      (t[30] = i),
      (t[31] = J));
  let Y;
  t[32] !== q || t[33] !== J
    ? ((Y = (0, B.jsx)(ce, { textStyle: K, renderText: te, tokens: q, getDefaultComponents: J })),
      (t[32] = q),
      (t[33] = J),
      (t[34] = Y))
    : (Y = t[34]);
  let X;
  t[35] !== G || t[36] !== Y
    ? ((X = (0, B.jsx)(`div`, { ref: o, className: G, children: Y })), (t[35] = G), (t[36] = Y), (t[37] = X))
    : (X = t[37]);
  let Z;
  t[38] !== a || t[39] !== N || t[40] !== H || t[41] !== X
    ? ((Z = (0, B.jsx)(s.div, {
        id: a,
        className: A,
        initial: !1,
        animate: N,
        transition: H,
        onUpdate: O,
        onAnimationComplete: U,
        children: X,
      })),
      (t[38] = a),
      (t[39] = N),
      (t[40] = H),
      (t[41] = X),
      (t[42] = Z))
    : (Z = t[42]);
  let Q;
  t[43] !== a || t[44] !== v || t[45] !== b || t[46] !== m || t[47] !== p
    ? ((Q =
        b || m
          ? (0, B.jsxs)(`button`, {
              ref: c,
              className: `mt-4 flex cursor-interaction scroll-my-4 items-center gap-1 text-sm text-secondary select-none hover:underline`,
              type: `button`,
              "aria-controls": a,
              "aria-expanded": m,
              onClick: () => {
                ((f.current += 1), _(!0), (l.current = m), h(!m));
              },
              children: [
                m
                  ? (0, B.jsx)(ie, {
                      id: `plugins.description.showLess`,
                      defaultMessage: `Show less`,
                      description: `Short text button on a plugin detail page that lets the user collapse an expanded description to its first 15 displayed lines.`,
                    })
                  : (0, B.jsx)(ie, {
                      id: `plugins.description.showMore`,
                      defaultMessage: `Show more`,
                      description: `Short text button on a plugin detail page that lets the user reveal the rest of a description longer than 15 displayed lines.`,
                    }),
                (0, B.jsx)(s.span, {
                  "aria-hidden": !0,
                  initial: !1,
                  animate: { rotate: m ? 180 : 0 },
                  transition: { duration: p ? 0 : v, ease: [0.22, 1, 0.36, 1] },
                  children: (0, B.jsx)(re, {}),
                }),
              ],
            })
          : null),
      (t[43] = a),
      (t[44] = v),
      (t[45] = b),
      (t[46] = m),
      (t[47] = p),
      (t[48] = Q))
    : (Q = t[48]);
  let $;
  return (
    t[49] !== Z || t[50] !== Q || t[51] !== k
      ? (($ = (0, B.jsxs)(`div`, { "data-plugin-description-transitioning": k, children: [Z, Q] })),
        (t[49] = Z),
        (t[50] = Q),
        (t[51] = k),
        (t[52] = $))
      : ($ = t[52]),
    $
  );
}
function de(e) {
  return { element: e, style: e.getAttribute(`style`) };
}
function L(e) {
  let t = (0, R.c)(7),
    { children: n } = e,
    r = _(),
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
  t[2] === n ? (a = t[3]) : ((a = (0, B.jsx)(w, { children: n })), (t[2] = n), (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, B.jsx)(`div`, {
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
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = d()),
      l(),
      o(),
      u(),
      a(),
      (z = i()),
      h(),
      E(),
      p(),
      m(),
      C(),
      D(),
      T(),
      N(),
      F(),
      (B = c()),
      (V = {
        ...S({ allowWideBlocks: !1, mediaComponent: void 0 }),
        img: () => null,
        table: L,
        p: ({ children: e }) => (0, B.jsx)(`p`, { className: `my-2 font-content`, dir: `auto`, children: e }),
        pre: ({ children: e }) =>
          (0, B.jsx)(`pre`, {
            className: `my-3 overflow-x-auto rounded-lg bg-token-text-code-block-background p-3 [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0`,
            children: e,
          }),
        code: ({ children: e, inline: t }) =>
          t
            ? (0, B.jsx)(`span`, {
                className: `inline-markdown`,
                "data-markdown-copy": `inline-code`,
                dir: `ltr`,
                children: e,
              })
            : (0, B.jsx)(`code`, { className: `font-mono text-sm`, children: e }),
      }));
  }))();
}
export { H as n, I as t };
//# sourceMappingURL=plugin-description-115b63c7b026.js.map
