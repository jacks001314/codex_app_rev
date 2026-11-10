const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["./katex-fb2359bfd034.js", "./katex-b62b0c0d6a07.js", "./rolldown-runtime-2d059c5e81f4.js"]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Pxt as n,
  Vxt as r,
  fPt as i,
  pPt as a,
  sMt as o,
  vzt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  AJn as l,
  BJn as u,
  CJn as d,
  DJn as f,
  FJn as p,
  LJn as m,
  MJn as h,
  NJn as g,
  PJn as _,
  SJn as v,
  TJn as y,
  Zht as b,
  bgt as x,
  egt as S,
  jJn as C,
  kJn as w,
  xJn as T,
} from "./app-initial-5851df3f6cb1.js";
import { r as E, t as ee } from "./highlight-selectors-4f82ccb0876d.js";
import { n as D, t as O } from "./scroll-to-match-701662e58079.js";
function k(e, t, n) {
  let r = t.trim(),
    i = [];
  if (!r) return { offsets: i, totalMatches: 0 };
  let a = A(e),
    o = A(N.get(r) ?? r);
  if (a == null || o == null) {
    let t = e.toLowerCase(),
      a = r.toLowerCase(),
      o = [...e.matchAll(/\\[a-zA-Z]+/g)];
    for (let n = t.indexOf(a); n >= 0; n = t.indexOf(a, n + a.length))
      o.some((e) => n > e.index && n < e.index + e[0].length) ||
        i.push(m(e, { start: n, end: n + r.length }));
    return { offsets: i.slice(0, n), totalMatches: i.length };
  }
  let s = 0;
  for (let e = 0; o.tokens.length > 0 && e <= a.tokens.length - o.tokens.length; e += 1) {
    if (!o.tokens.every((t, n) => t.value === a.tokens[e + n].value)) continue;
    let t = a.tokens.slice(e, e + o.tokens.length),
      r = t[0].start,
      c = t[t.length - 1].end;
    for (let e of t) ((r = Math.min(r, e.delimiter?.start ?? r)), (c = Math.max(c, e.delimiter?.end ?? c)));
    for (let e of a.groups)
      (r < e.start && c > e.start && c < e.end && (c = e.end),
        r > e.start && r < e.end && c > e.end && (r = e.start));
    ((s += 1), i.length < n && i.push({ start: r, end: c }), (e += o.tokens.length - 1));
  }
  return { offsets: i, totalMatches: s };
}
function A(e) {
  let t = Array.from(e.matchAll(/\\[a-zA-Z]+|\\[^\r\n]|[^\s]/gu), (e) => ({
      value: e[0],
      start: e.index,
      end: e.index + e[0].length,
    })),
    n = [],
    r = [],
    i = 0;
  function a() {
    let e = t[i]?.start;
    if (e == null) throw Error(`Missing argument`);
    let n = o(),
      r = t[i - 1].end;
    return [{ value: `argument:start`, start: e, end: e }, ...n, { value: `argument:end`, start: r, end: r }];
  }
  function o() {
    let e = t[i++];
    if (e == null || e.value === `}`) throw Error(`Incomplete math`);
    if (e.value === `{`) {
      let r = [];
      for (; t[i]?.value !== `}`;) r.push(...o());
      return (n.push({ start: e.start, end: t[i++].end }), r);
    }
    if (P.test(e.value)) {
      let r = o();
      return (n.push({ start: e.start, end: t[i - 1].end }), r);
    }
    if (F.test(e.value)) return [];
    if (I.test(e.value)) {
      let n = t[i++];
      if (n == null) throw Error(`Missing delimiter`);
      let a;
      if (e.value === `\\left`) ((a = { start: e.start, end: n.end }), r.push(a));
      else if (e.value === `\\right`) {
        if (((a = r.pop()), a == null)) throw Error(`Unpaired delimiter`);
        a.end = n.end;
      }
      return n.value === `.` ? [] : [{ ...n, start: e.start, delimiter: a }];
    }
    if (/^\\[dt]?frac$/.test(e.value)) return [{ ...e, value: `\\frac` }, ...a(), ...a()];
    if (
      /^(?:[_^]|\\(?:sqrt|vec|hat|bar|overline|underline))$/.test(e.value) ||
      (e.value.startsWith(`\\`) &&
        !N.has(e.value.slice(1).replace(/^var/, ``).toLowerCase()) &&
        t[i]?.value === `{`)
    ) {
      if (t[i]?.value === `[`) throw Error(`Indexed argument`);
      return [e, ...a()];
    }
    let s = e.value.replace(/^\\/, ``);
    return (
      (s = N.get(s.replace(/^var/, ``).toLowerCase()) ?? e.value),
      (s = s.replace(/[\u{1D400}-\u{1D7FF}]/gu, (e) => e.normalize(`NFKC`)).toLowerCase()),
      (s = s.replace(/[ϵϑϕϖϱς−·]/g, (e) => `εθφπρσ-⋅`[`ϵϑϕϖϱς−·`.indexOf(e)])),
      [{ ...e, value: s }]
    );
  }
  try {
    let e = [];
    for (; i < t.length;) e.push(...o());
    return r.length === 0 ? { tokens: e, groups: n } : null;
  } catch {
    return null;
  }
}
var j, M, N, P, F, I;
function L() {
  return (L = e(() => {
    ((j =
      `alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omicron pi rho sigma tau upsilon phi chi psi omega`.split(
        ` `,
      )),
      (M = Array.from(`αβγδεζηθικλμνξοπρστυφχψω`)),
      (N = new Map([
        ...j.map((e, t) => [e, M[t]]),
        ...`nabla:∇ partial:∂ cdot:⋅ times:× div:÷ pm:± mp:∓ le:≤ leq:≤ ge:≥ geq:≥ ne:≠ neq:≠ infty:∞ sum:∑ prod:∏ int:∫ in:∈ notin:∉ to:→ rightarrow:→ leftarrow:←`
          .split(` `)
          .map((e) => {
            let [t, n] = e.split(`:`);
            return [t, n];
          }),
      ])),
      (P =
        /^\\(?:mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathnormal|mathbb|mathcal|mathscr|mathfrak|textbf|textit|textrm)$/),
      (F =
        /^\\(?:quad|qquad|enspace|thinspace|medspace|thickspace|negthinspace|displaystyle|textstyle|scriptstyle|scriptscriptstyle|limits|nolimits|[,;:! ])$/),
      (I = /^\\(?:left|right|middle|big|Big|bigg|Bigg|bigl|bigr|Bigl|Bigr|biggl|biggr|Biggl|Biggr)$/));
  }))();
}
function te({
  contextId: e,
  getTurns: t,
  hydratePersistedMatch: n,
  revealUnrenderedMatches: r = !1,
  searchPersisted: i,
  searchMath: a = !1,
  scrollAdapter: o,
}) {
  return {
    domain: `conversation`,
    contextId: e,
    async search(e, n) {
      let r = await re(e, t(), a, n?.signal);
      if (a || i == null) return r;
      let o = await i(e, n);
      return o == null ? r : ne(r, o);
    },
    async ensureVisible(t, i) {
      if (
        t.domain !== `conversation` ||
        t.contextId !== e ||
        (t.turnCursor != null && n != null && (!(await n(t, i)) || i?.signal?.aborted))
      )
        return;
      let a = t.turnCursor != null,
        s = o.getTurnContainer(t.turnKey),
        c = v(t),
        l = r && s != null && f({ container: s, matchId: c, includeShadowRoots: !1 }) == null;
      if (s == null || a || l) {
        if (
          i?.signal?.aborted ||
          (i?.signal == null
            ? await o.scrollToTurn(t.turnKey)
            : await o.scrollToTurn(t.turnKey, { signal: i.signal }),
          i?.signal?.aborted)
        )
          return;
        s = o.getTurnContainer(t.turnKey);
      }
      s != null && (await D({ container: s, matchId: c, includeShadowRoots: !1, signal: i?.signal }));
    },
  };
}
function ne(e, t) {
  let n = new Map(e.matches.map((e) => [e.id, e])),
    r = (0, R.default)([...t.matches.map((e) => n.get(e.id) ?? e), ...e.matches], `id`).map((e, t) => ({
      ...e,
      ordinal: t + 1,
    }));
  return {
    ...e,
    matches: r,
    totalMatches: Math.max(r.length, e.totalMatches, t.totalMatches),
    isCapped: e.isCapped || t.isCapped,
  };
}
async function re(e, t, n, r) {
  let i = e.query.trim(),
    a = n && i.length > 1 && i.startsWith(`/`) && i.endsWith(`/`) ? i.slice(1, -1) : void 0,
    o = t.flatMap((e) =>
      e.units.flatMap((t) =>
        (t.textChunks ?? [t.text]).flatMap((r, i) => {
          let a = {
              turnKey: e.turnKey,
              unitId: t.unitId,
              text: n ? r.replace(/\s+/g, ` `).trim() : r,
              equationIndex: void 0,
            },
            o = n ? t.equations?.[i] : void 0;
          return o == null ? [a] : [a, { ...a, text: o, equationIndex: i }];
        }),
      ),
    ),
    s = {
      domain: e.domain,
      contextId: e.contextId,
      query: i,
      regex: a,
      searchMath: n || void 0,
      matches: [],
      totalMatches: 0,
      isCapped: !1,
    };
  if (!i) return s;
  let c =
    a == null
      ? null
      : await u(
          {
            query: a,
            texts: o.map((e) => e.text),
            mathTexts: o.map((e) => e.equationIndex != null),
            maxMatches: z,
          },
          r,
        );
  if (c?.error) return { ...s, error: c.error };
  s.totalMatches = c?.totalMatches ?? 0;
  let l = new Map();
  for (let [t, n] of o.entries()) {
    let r = d(n.turnKey, n.unitId),
      a = l.get(r) ?? 0,
      { offsets: o, totalMatches: u } =
        c == null
          ? (n.equationIndex == null ? p : k)(n.text, i, z - s.matches.length)
          : { offsets: c.offsets[t] ?? [], totalMatches: 0 };
    s.totalMatches += u;
    for (let [t, r] of o.entries()) {
      let i = {
        domain: `conversation`,
        contextId: e.contextId,
        turnKey: n.turnKey,
        unitId: n.unitId,
        matchIndex: n.equationIndex == null ? a + t : t,
        equationIndex: n.equationIndex,
        equationRange: n.equationIndex == null ? void 0 : r,
      };
      s.matches.push({ id: v(i), ordinal: s.matches.length + 1, location: i });
    }
    n.equationIndex ?? l.set(r, a + o.length);
  }
  return ((s.isCapped = s.totalMatches > s.matches.length), s);
}
var R, z;
function B() {
  return (B = e(() => {
    ((R = t(o(), 1)), l(), L(), O(), (z = 250));
  }))();
}
async function V(e, t) {
  let n = e.querySelector(`.katex-html`),
    r = e.dataset.mathSource;
  if (n == null || r == null || t.length === 0) return () => t.map(() => []);
  let { default: a } = await i(
      async () => {
        let { default: e } = await import(`./katex-fb2359bfd034.js`);
        return { default: e };
      },
      __vite__mapDeps([0, 1, 2]),
      import.meta.url,
    ),
    o = U(n),
    s = new Map(o.map(({ node: e }) => [e, e.data])),
    c = new Set(o.map(({ color: e }) => e)),
    l = document.createElement(`span`),
    u = t.map(() => {
      let e = c.size + 1,
        t;
      do ((t = `#${e.toString(16).padStart(6, `0`)}`), (l.style.color = t), (e += 1));
      while (c.has(l.style.color));
      return (c.add(l.style.color), { hex: t, css: l.style.color });
    });
  l.style.color = ``;
  let d = new Map(u.map(({ css: e }, t) => [e, t])),
    f = new Map(),
    p = (n) => {
      let i = r;
      for (let e of [...n].reverse()) {
        let { start: n, end: r } = t[e];
        i = `${i.slice(0, n)}{\\textcolor{${u[e].hex}}{${i.slice(n, r)}}}${i.slice(r)}`;
      }
      try {
        l.innerHTML = a.renderToString(i, {
          displayMode: e.querySelector(`.katex-display`) != null,
          strict: `ignore`,
          output: `html`,
        });
      } catch {
        return !1;
      }
      let s = U(l),
        c = s.length === o.length && s.every(({ text: e }, t) => e === o[t].text);
      return (
        s.forEach((e, t) => {
          let n = d.get(e.color);
          if (n == null) return;
          let r = o[t];
          if (!c) {
            let t = o.filter(({ text: t }) => t === e.text);
            if (t.length !== 1 || s.filter(({ text: t }) => t === e.text).length !== 1) return;
            r = t[0];
          }
          f.set(r, n);
        }),
        !0
      );
    };
  return (
    p(t.map((e, t) => t)) || t.forEach((e, t) => p([t])),
    () => {
      let i = t.map(() => []);
      if (
        e.dataset.mathSource !== r ||
        !e.contains(n) ||
        [...s].some(([e, t]) => !n.contains(e) || e.data !== t)
      )
        return i;
      let a = [],
        c;
      for (let e of o) {
        let t = f.get(e);
        if (t == null) {
          c = void 0;
          continue;
        }
        let n = e.node.parentElement?.closest(`.vlist > span, .base`) ?? null;
        c?.index === t && c.row === n
          ? c.glyphs.push(e)
          : ((c = { index: t, row: n, glyphs: [e] }), a.push(c));
      }
      for (let { index: e, glyphs: t } of a.reverse()) i[e].unshift(...H(t));
      return i;
    }
  );
}
function H(e) {
  let t = e[0],
    n = e[e.length - 1],
    r = document.createRange();
  (r.setStart(t.node, t.offset), r.setEnd(n.node, n.offset + n.text.length));
  let i = r.commonAncestorContainer;
  for (; r.startContainer !== i && r.startOffset === 0;) r.setStartBefore(r.startContainer);
  for (
    ;
    r.endContainer !== i &&
    r.endOffset ===
      (r.endContainer instanceof Text ? r.endContainer.length : r.endContainer.childNodes.length);
  )
    r.setEndAfter(r.endContainer);
  if (r.startContainer !== r.endContainer)
    return [...e]
      .reverse()
      .flatMap((e) => H([e]))
      .reverse();
  let a = y();
  return (r.surroundContents(a), [a]);
}
function U(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
  for (let r = n.nextNode(); r != null; r = n.nextNode()) {
    if (!(r instanceof Text) || r.parentElement?.closest(`.vlist-s`)) continue;
    let n = r.parentElement;
    for (; n != null && n !== e && n.style.color === ``;) n = n.parentElement;
    let i = 0;
    for (let e of r.data)
      (t.push({ node: r, text: e, color: n?.style.color ?? ``, offset: i }), (i += e.length));
  }
  return t;
}
function W() {
  return (W = e(() => {
    (l(), a());
  }))();
}
function G(e) {
  let t = (0, K.c)(5),
    n = (0, q.useRef)(null),
    r;
  t[0] === e
    ? (r = t[1])
    : ((r = (t) => {
        n.current ??= window.setTimeout(() => {
          ((n.current = null), t());
        }, e);
      }),
      (t[0] = e),
      (t[1] = r));
  let i = r,
    a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = () => {
        n.current != null && (window.clearTimeout(n.current), (n.current = null));
      }),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  return (t[3] === i ? (s = t[4]) : ((s = { schedule: i, cancel: o }), (t[3] = i), (t[4] = s)), s);
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = s()), (q = c()));
  }))();
}
function Y(e) {
  let t = (0, X.c)(20),
    { containerRef: n, contextId: i, onContentChange: a } = e,
    o = r(b),
    s = r(S),
    c = o?.contextId === i ? o : null,
    l = c == null ? null : (s?.id ?? null),
    { schedule: u, cancel: d } = G(Q),
    f;
  t[0] === a ? (f = t[1]) : ((f = () => a?.()), (t[0] = a), (t[1] = f));
  let p = (0, Z.useEffectEvent)(f),
    m;
  t[2] !== c || t[3] !== l || t[4] !== n
    ? ((m = async (e, t) => {
        let r = n.current;
        if (r == null || (T(r, { includeShadowRoots: !1 }), t.takeRecords(), c == null)) return;
        let i = ee(c.matches),
          a = Array.from(r.querySelectorAll(`[data-content-search-unit-key]`)).flatMap((e) => {
            let t = i.get(e.dataset.contentSearchUnitKey ?? ``);
            return t == null ? [] : [{ element: e, matches: t }];
          }),
          o = (e, t) => {
            t.forEach((t) => {
              (g({ element: t, matchId: e }), h(t, e === l));
            });
          },
          s = a.map(se),
          u = (e) => {
            e.forEach((e, t) => e.forEach((e, n) => o(s[t].matches[n].id, e)));
          };
        if (!c.searchMath) {
          (u(
            s.map((e) => {
              let { element: t, matches: n } = e;
              return w({ target: t, query: c.query, maxMatches: n.length, includeShadowRoots: !1 }).matches;
            }),
          ),
            t.takeRecords());
          return;
        }
        let d = [];
        for (let { element: e, matches: t } of a)
          e.querySelectorAll(`[data-math-source]`).forEach((e, n) => {
            let r = t.flatMap((e) => {
              let { id: t, location: r } = e;
              return r.domain === `conversation` && r.equationIndex === n && r.equationRange != null
                ? [{ id: t, range: r.equationRange }]
                : [];
            });
            r.length !== 0 && d.push(V(e, r.map(oe)).then((e) => () => e().forEach((e, t) => o(r[t].id, e))));
          });
        let [f, p] = await Promise.all([C(s.map(ae), c.query, c.regex, e), Promise.all(d)]);
        e.aborted || (u(f()), p.forEach(ie), t.takeRecords());
      }),
      (t[2] = c),
      (t[3] = l),
      (t[4] = n),
      (t[5] = m))
    : (m = t[5]);
  let v = (0, Z.useEffectEvent)(m),
    y;
  t[6] !== c?.runId || t[7] !== v || t[8] !== d || t[9] !== n || t[10] !== p || t[11] !== u
    ? ((y = () => {
        let e = n.current;
        if (e == null) return;
        let t = null,
          r = () => {
            (t?.abort(), (t = new AbortController()), v(t.signal, i));
          },
          i = new MutationObserver((e) => {
            _(e) &&
              (t?.abort(),
              u(() => {
                (p(), r());
              }));
          });
        if (c?.runId == null) {
          r();
          return;
        }
        return (
          i.observe(e, { childList: !0, subtree: !0, characterData: !0, attributeFilter: [`hidden`] }),
          r(),
          () => {
            (i.disconnect(), t?.abort(), d(), T(e, { includeShadowRoots: !1 }));
          }
        );
      }),
      (t[6] = c?.runId),
      (t[7] = v),
      (t[8] = d),
      (t[9] = n),
      (t[10] = p),
      (t[11] = u),
      (t[12] = y))
    : (y = t[12]);
  let x = c?.runId,
    E;
  (t[13] !== l || t[14] !== d || t[15] !== n || t[16] !== i || t[17] !== u || t[18] !== x
    ? ((E = [x, l, d, n, i, u]),
      (t[13] = l),
      (t[14] = d),
      (t[15] = n),
      (t[16] = i),
      (t[17] = u),
      (t[18] = x),
      (t[19] = E))
    : (E = t[19]),
    (0, Z.useEffect)(y, E));
}
function ie(e) {
  return e();
}
function ae(e) {
  let { element: t, matches: n } = e;
  return { element: t, maxMatches: n.length };
}
function oe(e) {
  let { range: t } = e;
  return t;
}
function se(e) {
  let { element: t, matches: n } = e;
  return { element: t, matches: n.filter(ce) };
}
function ce(e) {
  return e.location.domain === `conversation` && e.location.equationIndex == null;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = s()), n(), (Z = c()), l(), E(), W(), x(), J(), (Q = 80));
  }))();
}
export { B as i, Y as n, te as r, $ as t };
//# sourceMappingURL=use-conversation-search-highlights-6c328093bb06.js.map
