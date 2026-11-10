import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $At as t,
  Bw as n,
  Cjt as r,
  IDt as i,
  JR as a,
  NV as o,
  Rw as s,
  TJ as c,
  VDt as l,
  Vw as u,
  XAt as d,
  YAt as f,
  YR as ee,
  ZAt as p,
  _Mt as m,
  _wt as h,
  gMt as te,
  gwt as g,
  jDt as ne,
  lDt as re,
  sDt as ie,
  vzt as _,
  wjt as v,
  xMt as ae,
  yzt as y,
  zw as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  BIr as b,
  Go as x,
  IIr as S,
  Jo as C,
  Wo as se,
  Yo as w,
  pl as T,
  ul as E,
  xPn as D,
  yPn as ce,
} from "./app-initial-5851df3f6cb1.js";
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
              { type: `text`, raw: e, text: s(e) },
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
      : (e.type === `codespan` ? e.text : n(e.text)).trim().length > 0;
}
var A, j, M;
function N() {
  return (N = e(() => {
    (u(),
      oe(),
      b(),
      v(),
      t(),
      d(),
      (A = /^ {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/),
      (j = { extensions: [f()], mdastExtensions: [p()] }),
      (M = new S({
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
              if (t == null || r(t, j).children[0]?.type !== `footnoteDefinition`) return;
              let n = e.length;
              for (let t of e.matchAll(/\n {0,3}\[\^(?:\\[^\s]|[^\s[\]\\])+\]:/g))
                if (r(t[0], j).children[0]?.type === `footnoteDefinition`) {
                  n = t.index;
                  break;
                }
              let i = r(e.slice(0, n), j).children[0],
                a = i?.type === `footnoteDefinition` ? i.position?.end.offset : void 0;
              if (a != null) return { type: `plugin-description-footnote`, raw: e.slice(0, a) };
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
    { children: r, openTarget: a } = e,
    s = (0, z.useId)(),
    c = (0, z.useRef)(null),
    l = (0, z.useRef)(null),
    u = (0, z.useRef)(!1),
    d;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = new Set()), (t[0] = d)) : (d = t[0]);
  let f = (0, z.useRef)(d),
    p = (0, z.useRef)(0),
    m = ee(),
    [g, ne] = (0, z.useState)(!1),
    [re, _] = (0, z.useState)(!1),
    v = g ? 0.18 : 0.16,
    ae = g ? 0.09 : 0.16,
    [y, oe] = (0, z.useState)(null),
    b = y != null && y.full > y.collapsed,
    x;
  t[1] === g
    ? (x = t[2])
    : ((x = (e) => {
        for (let e of f.current) e.removeAttribute(`inert`);
        f.current.clear();
        let t = c.current;
        if (t == null || g) return;
        let n = t.getBoundingClientRect(),
          r = t.offsetHeight === 0 ? 1 : n.height / t.offsetHeight,
          i = n.top + e * r;
        for (let e of t.querySelectorAll(
          `a[href], p, ul, ol, li, blockquote, pre, tr, th, td, [data-plugin-description-table]`,
        )) {
          let t = e.getBoundingClientRect(),
            n = e.matches(`a[href]`) ? t.bottom > i : t.top >= i;
          !e.hasAttribute(`inert`) && n && (e.setAttribute(`inert`, ``), f.current.add(e));
        }
      }),
      (t[1] = g),
      (t[2] = x));
  let S = (0, z.useEffectEvent)(x),
    C;
  t[3] === S
    ? (C = t[4])
    : ((C = () => {
        let e = c.current;
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
  (t[5] === r ? (w = t[6]) : ((w = [r]), (t[5] = r), (t[6] = w)), (0, z.useLayoutEffect)(C, w));
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
  (t[10] !== y || t[11] !== g ? ((E = [y, g]), (t[10] = y), (t[11] = g), (t[12] = E)) : (E = t[12]),
    (0, z.useLayoutEffect)(T, E));
  let D;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = l.current;
        u.current &&
          e != null &&
          e.scrollIntoView({ block: `nearest`, inline: `nearest`, behavior: `instant` });
      }),
      (t[13] = D))
    : (D = t[13]);
  let O = D,
    k = re || void 0,
    A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = te(`overflow-clip`, ue.viewport)), (t[14] = A))
    : (A = t[14]);
  let j = (g ? y?.full : y?.collapsed) ?? `auto`,
    M = g || !b ? 1 : 0,
    N;
  t[15] !== j || t[16] !== M
    ? ((N = { height: j, "--description-fade": M }), (t[15] = j), (t[16] = M), (t[17] = N))
    : (N = t[17]);
  let P = m ? 0 : v,
    F;
  t[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = [0.22, 1, 0.36, 1]), (t[18] = F)) : (F = t[18]);
  let I = m ? 0 : ae,
    L;
  t[19] === I ? (L = t[20]) : ((L = { duration: I }), (t[19] = I), (t[20] = L));
  let H;
  t[21] !== P || t[22] !== L
    ? ((H = { duration: P, ease: F, "--description-fade": L }), (t[21] = P), (t[22] = L), (t[23] = H))
    : (H = t[23]);
  let U;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        let e = p.current;
        ie.postRender(() => {
          e === p.current && (O(), (u.current = !1), _(!1));
        });
      }),
      (t[24] = U))
    : (U = t[24]);
  let W = y == null && `line-clamp-[15]`,
    G;
  t[25] === W ? (G = t[26]) : ((G = te(W)), (t[25] = W), (t[26] = G));
  let K;
  t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = { kind: `small` }), (t[27] = K)) : (K = t[27]);
  let q;
  t[28] === r ? (q = t[29]) : ((q = le(r)), (t[28] = r), (t[29] = q));
  let J;
  t[30] === a
    ? (J = t[31])
    : ((J = () => ({
        ...V,
        a: (e) => {
          let { children: t, href: n, title: r } = e;
          return n
            ? (0, B.jsx)(ce, {
                className: `hover:opacity-70 focus-visible:opacity-70`,
                href: n,
                title: r,
                initiator: `markdown_link_click`,
                openTarget: a,
                underline: `always`,
                children: t,
              })
            : (0, B.jsx)(B.Fragment, { children: t });
        },
      })),
      (t[30] = a),
      (t[31] = J));
  let Y;
  t[32] !== q || t[33] !== J
    ? ((Y = (0, B.jsx)(se, { textStyle: K, renderText: n, tokens: q, getDefaultComponents: J })),
      (t[32] = q),
      (t[33] = J),
      (t[34] = Y))
    : (Y = t[34]);
  let X;
  t[35] !== G || t[36] !== Y
    ? ((X = (0, B.jsx)(`div`, { ref: c, className: G, children: Y })), (t[35] = G), (t[36] = Y), (t[37] = X))
    : (X = t[37]);
  let Z;
  t[38] !== s || t[39] !== N || t[40] !== H || t[41] !== X
    ? ((Z = (0, B.jsx)(h.div, {
        id: s,
        className: A,
        initial: !1,
        animate: N,
        transition: H,
        onUpdate: O,
        onAnimationComplete: U,
        children: X,
      })),
      (t[38] = s),
      (t[39] = N),
      (t[40] = H),
      (t[41] = X),
      (t[42] = Z))
    : (Z = t[42]);
  let Q;
  t[43] !== s || t[44] !== v || t[45] !== b || t[46] !== g || t[47] !== m
    ? ((Q =
        b || g
          ? (0, B.jsxs)(`button`, {
              ref: l,
              className: `mt-4 flex cursor-interaction scroll-my-4 items-center gap-1 text-sm text-secondary select-none hover:underline`,
              type: `button`,
              "aria-controls": s,
              "aria-expanded": g,
              onClick: () => {
                ((p.current += 1), _(!0), (u.current = g), ne(!g));
              },
              children: [
                g
                  ? (0, B.jsx)(i, {
                      id: `plugins.description.showLess`,
                      defaultMessage: `Show less`,
                      description: `Short text button on a plugin detail page that lets the user collapse an expanded description to its first 15 displayed lines.`,
                    })
                  : (0, B.jsx)(i, {
                      id: `plugins.description.showMore`,
                      defaultMessage: `Show more`,
                      description: `Short text button on a plugin detail page that lets the user reveal the rest of a description longer than 15 displayed lines.`,
                    }),
                (0, B.jsx)(h.span, {
                  "aria-hidden": !0,
                  initial: !1,
                  animate: { rotate: g ? 180 : 0 },
                  transition: { duration: m ? 0 : v, ease: [0.22, 1, 0.36, 1] },
                  children: (0, B.jsx)(o, {}),
                }),
              ],
            })
          : null),
      (t[43] = s),
      (t[44] = v),
      (t[45] = b),
      (t[46] = g),
      (t[47] = m),
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
    r = l(),
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
  t[2] === n ? (a = t[3]) : ((a = (0, B.jsx)(E, { children: n })), (t[2] = n), (t[3] = a));
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
    ((R = _()),
      m(),
      u(),
      re(),
      g(),
      (z = y()),
      ne(),
      D(),
      c(),
      a(),
      w(),
      x(),
      T(),
      N(),
      F(),
      (B = ae()),
      (V = {
        ...C({ allowWideBlocks: !1, mediaComponent: void 0 }),
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
//# sourceMappingURL=plugin-description-a9a8252b63cb.js.map
