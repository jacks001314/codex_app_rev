const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./src-46a63374039b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./rehype-katex-c9f138d62061.js",
      "./lib-88477ff17874.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./prism-light-ec057698b650.js",
      "./extends-df342f7c2e8b.js",
      "./katex-b62b0c0d6a07.js",
      "./katex-8f59025a783b.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Dkt as t,
  FBt as n,
  LNt as r,
  MNt as i,
  NNt as a,
  OFt as o,
  _Mt as s,
  bkt as c,
  cMt as l,
  cNt as u,
  dkt as d,
  gMt as f,
  kFt as p,
  lNt as m,
  mkt as h,
  pkt as g,
  xkt as _,
} from "./app-shared-2feb3d4c6fcc.js";
import { T$r as ee, _$r as te, g$r as v, w$r as y } from "./app-initial-ad16eaadf81f.js";
import {
  $ as b,
  A as x,
  B as ne,
  C as re,
  D as ie,
  E as ae,
  F as oe,
  G as se,
  H as ce,
  I as le,
  J as ue,
  K as de,
  L as fe,
  M as pe,
  N as me,
  O as he,
  P as ge,
  Q as _e,
  R as ve,
  S as ye,
  T as be,
  U as xe,
  V as Se,
  W as Ce,
  X as we,
  Y as Te,
  Z as Ee,
  _ as De,
  a as Oe,
  b as ke,
  c as Ae,
  d as je,
  f as Me,
  g as Ne,
  h as Pe,
  i as Fe,
  j as Ie,
  k as Le,
  l as Re,
  m as ze,
  n as Be,
  o as Ve,
  p as He,
  q as Ue,
  r as We,
  s as Ge,
  t as S,
  u as Ke,
  v as qe,
  w as Je,
  x as Ye,
  y as Xe,
  z as Ze,
} from "./prism-light-ec057698b650.js";
function Qe(e = []) {
  let t = new Set(e);
  return () => (e) => {
    m(e, (e, n, r) => {
      if (!$e(e)) return;
      let i = C(e.data) ? e.data : {},
        a = w(i.hProperties),
        o = t.has(e.name),
        s = `hName` in i || `hProperties` in i;
      if (!o && !s) return !r || typeof n != `number` ? void 0 : (nt(r, n, e.children), n);
      e.data = {
        ...i,
        hName: o || !(`hName` in i) || typeof i.hName != `string` ? e.name : i.hName,
        hProperties: { ...a, ...w(e.attributes) },
      };
    });
  };
}
function $e(e) {
  return C(e) && typeof e.name == `string` && et(e.type);
}
function et(e) {
  return e === `textDirective` || e === `leafDirective` || e === `containerDirective`;
}
function C(e) {
  return typeof e == `object` && !!e;
}
function w(e) {
  if (!C(e)) return {};
  let t = {};
  for (let [n, r] of Object.entries(e)) tt(r) && (t[n] = r);
  return t;
}
function tt(e) {
  return (
    e == null ||
    typeof e == `string` ||
    typeof e == `number` ||
    typeof e == `boolean` ||
    (Array.isArray(e) && e.every((e) => typeof e == `string` || typeof e == `number`))
  );
}
function nt(e, t, n) {
  e.children.splice(t, 1, ...(n ?? []));
}
function T() {
  return (T = e(() => {
    u();
  }))();
}
var E, D, O, k;
function A() {
  return (A = e(() => {
    ((E = `_CodeBlock_i9kuy_2`),
      (D = `_CopyButtonContainer_i9kuy_2`),
      (O = `_SyntaxHighlighter_i9kuy_2`),
      (k = { CodeBlock: E, CopyButtonContainer: D, SyntaxHighlighter: O }));
  }))();
}
function rt({ children: e, language: t, className: n }) {
  return (0, M.jsxs)(j, {
    className: n,
    children: [(0, M.jsx)(j.Code, { language: t, children: e }), (0, M.jsx)(j.CopyButton, { copyValue: e })],
  });
}
function j({ className: e, children: t, ...n }) {
  return (0, M.jsx)(`div`, { className: i(k.CodeBlock, e), ...n, children: t });
}
var M;
function N() {
  return (N = e(() => {
    (a(),
      we(),
      ue(),
      de(),
      Ce(),
      ce(),
      ne(),
      ve(),
      le(),
      me(),
      Ie(),
      Le(),
      ie(),
      be(),
      re(),
      Ye(),
      Xe(),
      De(),
      Pe(),
      He(),
      je(),
      Re(),
      Ge(),
      Oe(),
      We(),
      Be(),
      g(),
      A(),
      (M = r()),
      S.registerLanguage(`javascript`, pe),
      S.registerLanguage(`jsx`, he),
      S.registerLanguage(`typescript`, Ve),
      S.registerLanguage(`tsx`, Ae),
      S.registerLanguage(`markup`, ye),
      S.registerLanguage(`css`, Se),
      S.registerLanguage(`scss`, ze),
      S.registerLanguage(`c`, se),
      S.registerLanguage(`clike`, xe),
      S.registerLanguage(`bash`, Ue),
      S.registerLanguage(`json`, x),
      S.registerLanguage(`jsonc`, x),
      S.registerLanguage(`python`, qe),
      S.registerLanguage(`sql`, Me),
      S.registerLanguage(`diff`, Ze),
      S.registerLanguage(`markdown`, Je),
      S.registerLanguage(`yaml`, Fe),
      S.registerLanguage(`toml`, Ke),
      S.registerLanguage(`docker`, fe),
      S.registerLanguage(`java`, ge),
      S.registerLanguage(`go`, oe),
      S.registerLanguage(`php`, ke),
      S.registerLanguage(`ruby`, Ne),
      S.registerLanguage(`kotlin`, ae),
      (j.CopyButton = function ({ className: e, copyValue: t, loading: n, disabled: r }) {
        return (0, M.jsx)(`div`, {
          className: i(k.CopyButtonContainer, e),
          children: (0, M.jsx)(h, {
            copyValue: t,
            variant: `ghost`,
            color: `secondary`,
            size: `md`,
            uniform: !0,
            loading: n,
            disabled: r,
          }),
        });
      }),
      (j.Code = function ({ className: e, children: t, language: n, codeTagProps: r }) {
        return (0, M.jsx)(S, {
          dir: `ltr`,
          className: i(k.SyntaxHighlighter, e),
          language: n,
          showLineNumbers: !1,
          showInlineLineNumbers: !1,
          useInlineStyles: !1,
          codeTagProps: r,
          renderer: ({ rows: e }) =>
            (0, M.jsx)(M.Fragment, {
              children: e.map((e, t) => Te({ key: t, stylesheet: {}, useInlineStyles: !0, node: e })),
            }),
          children: t,
        });
      }));
  }))();
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = `_TextLink_gpmhg_2`), (F = { TextLink: P }));
  }))();
}
function it(e) {
  let {
      children: t,
      primary: n = !1,
      underline: r = !n,
      className: a,
      target: o,
      forceExternal: s,
      as: c,
      href: l,
      to: u,
      ...d
    } = e,
    f = s ?? /^https?:\/\//.test(l ?? u ?? ``),
    p = _(),
    m = c || (f ? `a` : p),
    h = {
      ...d,
      className: i(F.TextLink, a),
      "data-primary": n ? `` : void 0,
      "data-underline": r === !1 ? void 0 : r === `hover` ? `hover` : `always`,
    };
  if (!l && !u) return (0, L.jsx)(`span`, { ...h, role: `button`, children: t });
  let g = {
    ...(f ? { target: `_blank`, rel: `noopener noreferrer`, href: l ?? u } : { href: l, to: u }),
    ...h,
  };
  return (0, L.jsx)(m, { ...g, children: t });
}
var L;
function R() {
  return (R = e(() => {
    (a(), c(), I(), (L = r()));
  }))();
}
var z;
function B() {
  return (B = e(() => {
    (b(),
      (z = (e) => (e.startsWith(`tel:`) || e.startsWith(`sms:`) || e.startsWith(`data:image/`) ? e : _e(e))));
  }))();
}
async function at() {
  if (U) return U;
  if (W) return W;
  W = (async () => {
    let [{ remarkMath: e }, { default: t }] = await Promise.all([
      o(() => import(`./src-46a63374039b.js`), __vite__mapDeps([0, 1, 2, 3]), import.meta.url),
      o(
        () => import(`./rehype-katex-c9f138d62061.js`),
        __vite__mapDeps([4, 1, 2, 3, 5, 6, 7, 8, 9, 10]),
        import.meta.url,
      ),
      o(() => Promise.resolve({}), __vite__mapDeps([11]), import.meta.url),
    ]);
    return ((U = { remarkPlugins: [[e, { singleDollarTextMath: !1 }]], rehypePlugins: [t] }), U);
  })();
  try {
    return await W;
  } catch (e) {
    throw ((W = null), e);
  }
}
function ot(e) {
  let [t, n] = (0, V.useState)(!!U);
  return (
    (0, V.useEffect)(() => {
      if (!e || t) return;
      let r = !0;
      return (
        at()
          .then(() => {
            r && n(!0);
          })
          .catch(() => {}),
        () => {
          r = !1;
        }
      );
    }, [e, t]),
    t && e && U ? U : H
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = n()), p(), (H = { remarkPlugins: [], rehypePlugins: [] }), (U = null), (W = null));
  }))();
}
function K(e) {
  return !e || typeof e != `object` || !(`props` in e) || typeof e.props != `object` || !e.props
    ? { code: ``, language: `text` }
    : {
        code:
          `children` in e.props && typeof e.props.children == `string`
            ? e.props.children.replace(/\n$/g, ``)
            : ``,
        language:
          `className` in e.props && typeof e.props.className == `string`
            ? (e.props.className.match(/language-(.*)$/)?.[1] ?? `text`)
            : `text`,
      };
}
var q, st, J;
function ct() {
  return (ct = e(() => {
    ((q = `_MarkdownContent_rvh1z_2`),
      (st = `_InlineCode_rvh1z_2`),
      (J = { MarkdownContent: q, InlineCode: st }));
  }))();
}
function lt({
  children: e,
  directives: t,
  includeMath: n = !1,
  breakNewLines: r = !1,
  components: a,
  remarkPlugins: o,
  rehypePlugins: c,
  allowedElements: l,
  disallowedElements: u,
  unwrapDisallowed: d,
  skipHtml: f,
  urlTransform: p = z,
  className: m,
  copyableCodeBlocks: h = !0,
  dir: g,
}) {
  let _ = ot(n),
    v = (0, Y.useMemo)(() => t?.map((e) => e.directiveName) ?? [], [t]),
    y = (0, Y.useMemo)(() => {
      let e = { ...Z, ...(h ? null : gt), ...a };
      return t?.reduce((e, t) => ((e[t.directiveName] = t.render), e), e) ?? e;
    }, [h, a, t]),
    b = (0, Y.useMemo)(() => {
      let e = [];
      return (
        v.length > 0 && (e.push(te), e.push(Qe(v))),
        e.push(..._.remarkPlugins),
        r && e.push(ee),
        ut && e.push([s, { singleTilde: !1 }]),
        [...e, ...(o ?? [])]
      );
    }, [r, v, _.remarkPlugins, o]),
    x = (0, Y.useMemo)(() => [...(c ?? []), ..._.rehypePlugins], [c, _.rehypePlugins]);
  return (0, X.jsx)(`div`, {
    className: i(J.MarkdownContent, m),
    dir: g,
    children: (0, X.jsx)(Ee, {
      remarkPlugins: b,
      rehypePlugins: x,
      components: y,
      allowedElements: l,
      disallowedElements: u,
      unwrapDisallowed: d,
      skipHtml: f,
      urlTransform: p,
      children: e,
    }),
  });
}
var Y, X, ut, dt, ft, pt, mt, Z, ht, gt;
function Q() {
  return (Q = e(() => {
    (a(),
      (Y = n()),
      b(),
      y(),
      v(),
      f(),
      N(),
      R(),
      T(),
      B(),
      G(),
      ct(),
      (X = r()),
      (ut = (() => {
        try {
          return !0;
        } catch {
          return !1;
        }
      })()),
      (dt = ({ children: e, className: t }) => {
        let { code: n, language: r } = K(e);
        return (0, X.jsx)(rt, { language: r, className: t, children: n });
      }),
      (ft = ({ children: e, className: t }) =>
        (0, X.jsx)(`code`, { className: i(J.InlineCode, t), dir: `ltr`, children: e })),
      (pt = ({ children: e, node: t, ...n }) => (0, X.jsx)(it, { as: `a`, ...n, children: e })),
      (mt = ({ node: e, children: t, ...n }) =>
        (0, X.jsx)(`td`, {
          ...n,
          children: Y.Children.map(t, (e, t) => (e === `<br>` ? (0, X.jsx)(`br`, {}, t) : e)),
        })),
      (Z = { code: ft, pre: dt, a: pt, td: mt }),
      (ht = ({ children: e, className: t }) => {
        let { code: n, language: r } = K(e);
        return (0, X.jsx)(j, { className: t, children: (0, X.jsx)(j.Code, { language: r, children: n }) });
      }),
      (gt = { pre: ht }));
  }))();
}
function _t() {
  return (_t = e(() => {
    (G(), r());
  }))();
}
function vt() {
  return (vt = e(() => {
    n();
  }))();
}
function yt() {
  return (yt = e(() => {
    (n(), l());
  }))();
}
function bt() {
  return (bt = e(() => {
    (n(), vt(), yt(), t());
  }))();
}
var xt;
function St() {
  return (St = e(() => {
    (d(),
      (xt = n()),
      t(),
      N(),
      Q(),
      bt(),
      r(),
      (0, xt.createContext)({ smoothing: !1, getCharactersPerSecond: () => 0 }));
  }))();
}
function $() {
  return ($ = e(() => {
    (Q(), _t(), St());
  }))();
}
$();
export { lt as Markdown };
//# sourceMappingURL=markdown-dcdf33c0542f.js.map
