import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $P as t,
  CCt as n,
  QP as r,
  RM as i,
  Sj as a,
  ZP as o,
  aP as s,
  bN as c,
  cCt as l,
  cP as u,
  dF as d,
  eN as f,
  iCt as p,
  iP as m,
  jCt as h,
  lCt as ee,
  mCt as g,
  nCt as _,
  nP as te,
  sP as ne,
  tCt as v,
  tN as re,
  uF as ie,
  uP as ae,
  vN as oe,
  vzt as se,
  xMt as ce,
  yN as le,
  yzt as ue,
  zM as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  C6 as fe,
  F6 as pe,
  G6 as me,
  H6 as he,
  JPn as ge,
  S6 as _e,
  U6 as ve,
  W6 as ye,
  XPn as be,
  Y6 as xe,
  Z6 as Se,
  a8 as Ce,
  b6 as we,
  d8 as y,
  f8 as Te,
  j6 as Ee,
  l8 as b,
  m8 as De,
  oRr as Oe,
  p8 as x,
  rRr as ke,
  t8 as Ae,
  u8 as je,
  uRr as Me,
  v6 as Ne,
  x6 as Pe,
  y6 as Fe,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ie, t as Le } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as Re, t as ze } from "./writing-block-editor-styles-90146127a9c9.js";
function Be(e) {
  let n = (0, S.c)(20),
    {
      actions: i,
      editorView: a,
      labels: o,
      onEditLink: s,
      ranges: c,
      renderAction: l,
      trailingActions: u,
    } = e,
    d;
  n[0] === i
    ? (d = n[1])
    : ((d = i === void 0 ? [`bold`, `italic`, `code`, `link`] : i), (n[0] = i), (n[1] = d));
  let f = d;
  if (a.isDestroyed) return null;
  let p = c ?? a.state.selection.ranges;
  if (p.every(Ve)) return null;
  let m;
  if (n[2] !== f || n[3] !== a || n[4] !== o || n[5] !== s || n[6] !== c || n[7] !== l || n[8] !== p) {
    let e;
    (n[10] !== a || n[11] !== o || n[12] !== s || n[13] !== c || n[14] !== l || n[15] !== p
      ? ((e = (e) => {
          let n = o[e],
            i = a.state.schema.marks[w[e]];
          if (i == null || n == null) return null;
          let u = p.some((e) => {
            let { $from: t, $to: n } = e;
            return a.state.doc.rangeHasMark(t.pos, n.pos, i);
          });
          if (e === `bold` || e === `italic`) {
            let e = !1,
              t = !0;
            for (let { $from: n, $to: r } of p)
              a.state.doc.nodesBetween(n.pos, r.pos, (a, o) => {
                a.text?.slice(Math.max(0, n.pos - o), r.pos - o)?.trim() &&
                  ((e = !0), i.isInSet(a.marks) || (t = !1));
              });
            u = e && t;
          }
          return (0, C.jsx)(
            We.Fragment,
            {
              children: l({
                action: e,
                isActive: u,
                label: n,
                markType: i,
                onClick: () => {
                  if (e === `link`) {
                    s();
                    return;
                  }
                  (e === `code`
                    ? re(a.state, a.dispatch, c)
                    : c == null
                      ? r(a.state, a.dispatch, i)
                      : t(a.state, a.dispatch, i, p),
                    a.focus());
                },
              }),
            },
            e,
          );
        }),
        (n[10] = a),
        (n[11] = o),
        (n[12] = s),
        (n[13] = c),
        (n[14] = l),
        (n[15] = p),
        (n[16] = e))
      : (e = n[16]),
      (m = f.map(e)),
      (n[2] = f),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l),
      (n[8] = p),
      (n[9] = m));
  } else m = n[9];
  let h;
  return (
    n[17] !== m || n[18] !== u
      ? ((h = (0, C.jsxs)(C.Fragment, { children: [m, u] })), (n[17] = m), (n[18] = u), (n[19] = h))
      : (h = n[19]),
    h
  );
}
function Ve(e) {
  let { $from: t, $to: n } = e;
  return t.pos === n.pos;
}
function He(e) {
  let t = (0, S.c)(6),
    { editorView: n, labels: r, renderMenu: i } = e;
  if (n.isDestroyed) return null;
  let a;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e = we(n.state.selection),
      o = n.state.schema.nodes.task_list_item;
    ((a = i({
      activeStyle: e,
      options: [...s, ...(o == null ? [] : [`checklist`])].map((t) => ({
        isActive: t === e,
        label: r[t],
        onSelect: () => {
          (t === `checklist` ? u(n) : te(n, t), n.focus());
        },
        style: t,
      })),
    })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a));
  } else a = t[3];
  let o;
  return (
    t[4] === a ? (o = t[5]) : ((o = (0, C.jsx)(C.Fragment, { children: a })), (t[4] = a), (t[5] = o)),
    o
  );
}
function Ue(e) {
  if (e == null) return null;
  let t = e.$from.doc,
    n = t.type.schema.marks.link;
  if (n == null) return null;
  let r = n.isInSet(e.$from.marks()) ?? n.isInSet(e.$from.nodeAfter?.marks ?? []);
  if (r == null || typeof r.attrs.href != `string`) return null;
  if (!e.empty) {
    let i = !0;
    if (
      (t.nodesBetween(e.from, e.to, (e) => {
        e.isText && n.isInSet(e.marks)?.attrs.href !== r.attrs.href && (i = !1);
      }),
      !i)
    )
      return null;
  }
  let i = e.from,
    a = e.to;
  for (; i > 0 && n.isInSet(t.resolve(i).nodeBefore?.marks ?? [])?.attrs.href === r.attrs.href;) --i;
  for (; a < t.content.size && n.isInSet(t.resolve(a).nodeAfter?.marks ?? [])?.attrs.href === r.attrs.href;)
    a += 1;
  return i === a ? null : { from: i, href: r.attrs.href, to: a };
}
var S, We, C, w;
function T() {
  return (T = e(() => {
    ((S = se()),
      ae(),
      m(),
      ne(),
      f(),
      o(),
      (We = ue()),
      Pe(),
      (C = ce()),
      (w = {
        bold: `strong`,
        italic: `em`,
        underline: `underline`,
        strikethrough: `strikethrough`,
        code: `code`,
        link: `link`,
      }));
  }))();
}
function Ge(e, t, n) {
  let r = e.editorView;
  if (t?.key == null || r == null || r.isDestroyed) return null;
  let i = E.getState(r.state);
  return i?.key === t.key
    ? null
    : x().serialize(i?.committedDoc ?? r.state.doc) === n
      ? `unchanged`
      : `changed`;
}
function Ke({
  getExternalContentUpdate: e,
  getTransactionFollowup: t,
  onBeforeExternalContentUpdate: n,
  onChange: r,
  proseMirrorStore: i,
  ...a
}) {
  let o = a.pmu ?? x(a.pmuOptions),
    s = [
      ...a.pluginStack,
      new l({
        key: E,
        state: {
          init: (t, n) => ({ key: e?.()?.key ?? null, committedDoc: n.doc }),
          apply(e, t) {
            let n = e.getMeta(E);
            return n != null ||
              (e.docChanged && !e.getMeta(`writingBlockSkipSerialize`)) ||
              e.getMeta(`writingBlockSkipSerialize`) === !1
              ? { key: n ?? t.key, committedDoc: e.doc }
              : t;
          },
        },
      }),
    ],
    c = i?.restoreStateFromProps({ schema: o.schema(), plugins: s }),
    u = null,
    f = !1,
    p = b({
      ...a,
      markdown: c == null ? a.markdown : o.serialize(c.doc),
      pluginStack: s,
      pmu: o,
      pmuOptions: void 0,
      getTransactionFollowup(e, n) {
        let r = t?.(e, n) ?? null;
        return u == null ? r : (r ?? n.tr).setMeta(`addToHistory`, !1).setMeta(y, !1);
      },
      onChange(e) {
        u ?? r?.(e);
      },
    }),
    m = p.view.props.dispatchTransaction;
  return (
    m != null &&
      p.view.setProps({
        dispatchTransaction(e) {
          ((f || u != null) && e.setMeta(qe, !0),
            u === `reset` && e.setMeta(`addToHistory`, !1),
            m.call(p.view, e));
        },
      }),
    c != null && p.view.updateState(c),
    {
      ...p,
      setMarkdown(t) {
        let r = e?.();
        if (r?.key == null) {
          f = !0;
          try {
            return p.setMarkdown(t);
          } finally {
            f = !1;
          }
        }
        if (E.getState(p.view.state)?.key === r.key) return !1;
        u = `reset`;
        try {
          (n?.(p.view), (u = `apply`));
          let e = o.parse(t),
            i = p.getMarkdown() !== o.serialize(e);
          return (
            i &&
              p.view.dispatch(
                d(p.view.state.tr.replaceWith(0, p.view.state.doc.content.size, e.content)).setMeta(y, !0),
              ),
            p.view.dispatch(p.view.state.tr.setMeta(E, r.key).setMeta(`addToHistory`, !1)),
            i
          );
        } finally {
          u = null;
        }
      },
    }
  );
}
var qe, E;
function D() {
  return (D = e(() => {
    (je(),
      De(),
      ie(),
      Te(),
      g(),
      (qe = `writingBlockSourceUpdate`),
      (E = new ee(`writingBlockAppliedExternalContentUpdate`)));
  }))();
}
function Je(e, t) {
  let n = {
    selected: [],
    deletions: [],
    isComplete: !0,
    previousDoc: e,
    selectedDoc: t,
    remaining: V,
    signatures: new WeakMap(),
  };
  return (
    B(N(e, 0), N(t, 0), n, 0),
    { selected: nt(n.selected), deletions: rt(n.deletions), isComplete: n.isComplete }
  );
}
function O(e) {
  return Object.fromEntries(Object.entries(e).filter(([e]) => e !== `start` && e !== `end`));
}
function k(e) {
  return {
    type: e.type.name,
    attrs: O(e.attrs),
    marks: e.marks
      .filter((e) => e.type.name !== `startend`)
      .map((e) => ({ type: e.type.name, attrs: O(e.attrs) })),
  };
}
function A(e) {
  let t = [];
  return (e.forEach((e) => t.push(A(e))), { ...k(e), text: e.text, children: t });
}
function j(e, t) {
  let n = t.signatures.get(e);
  if (n != null) return n;
  let r = JSON.stringify(A(e));
  return (t.signatures.set(e, r), r);
}
function M(e, t) {
  let n = [];
  return (
    e.forEach((e) => n.push(j(e, t))),
    n.join(`
`)
  );
}
function N(e, t) {
  let n = [];
  return (e.forEach((e, r) => n.push({ node: e, from: t + r })), n);
}
function Ye(e, t) {
  return t > e.remaining ? ((e.remaining = 0), (e.isComplete = !1), !1) : ((e.remaining -= t), !0);
}
function P(e, t, n) {
  t < n && e.push({ from: t, to: n });
}
function Xe(e, t, n = !1) {
  let r = e.deletions.at(-1);
  r?.position !== t || r.nextMatchEnd != null
    ? e.deletions.push({ position: t, nextMatchEnd: null, ...(n ? { breaksWordRun: !0 } : {}) })
    : n && (r.breaksWordRun = !0);
}
function Ze(e, t) {
  for (let n = e.deletions.length - 1; n >= 0; n--) {
    let r = e.deletions[n];
    if (r.nextMatchEnd != null) break;
    r.position < t && (r.nextMatchEnd = t);
  }
}
function Qe(e) {
  if (e.isText) return /\S/u.test(e.text ?? ``);
  if (e.isAtom) return !0;
  let t = !1;
  return (e.descendants((e) => !t && ((t = e.isText ? /\S/u.test(e.text ?? ``) : e.isAtom), !t)), t);
}
function F(e, t) {
  let n = ``,
    r = [t];
  return (
    e.forEach((e, i) => {
      if (e.isText) {
        let a = e.text ?? ``;
        n += a;
        for (let e = 1; e <= a.length; e++) r.push(t + i + e);
      } else ((n += `￼`), r.push(t + i + e.nodeSize));
    }),
    { text: n, positions: r, fragment: (n, r) => e.content.cut(n - t, r - t) }
  );
}
function I(e, t, n) {
  let r = ``,
    i = [],
    a = (e, t, n) => {
      (i.length === 0
        ? i.push(t)
        : i.at(-1) !== t &&
          ((r += `
`),
          i.push(t)),
        (r += e));
      for (let r = 1; r <= e.length; r++) i.push(r === e.length ? n : t + r);
    },
    o = ({ node: e, from: t }, n) => {
      if (n >= W) return !1;
      if (e.isText) a(e.text ?? ``, t, t + e.nodeSize);
      else if (e.isInline || e.isLeaf) a(`￼`, t, t + e.nodeSize);
      else if (e.childCount === 0)
        a(
          `
`,
          t,
          t + e.nodeSize,
        );
      else return N(e, t + 1).every((e) => o(e, n + 1));
      return !0;
    };
  return e.every((e) => o(e, n))
    ? { text: r, positions: i, fragment: (e, n) => t.slice(e, n, !0).content }
    : null;
}
function L(e) {
  let t = [],
    n = 0,
    r = Me(e, e, G);
  if (r == null) return null;
  for (let i of r) {
    let r = i.value.trim();
    if (r.length > 0) {
      let i = e.indexOf(r, n);
      if (i < n) return null;
      ((n = i + r.length), t.push({ from: i, to: n }));
    }
  }
  return t;
}
function R({ node: e, from: t }, n) {
  if (n >= W) return null;
  if (e.isTextblock) {
    if (e.content.size > H) return null;
    let n = F(e, t + 1),
      r = L(n.text)?.[0];
    return r == null ? null : n.positions[r.to];
  }
  if (e.isAtom) return Qe(e) ? t + e.nodeSize : null;
  let r = null;
  return (
    e.forEach((e, i) => {
      r ??= R({ node: e, from: t + 1 + i }, n + 1);
    }),
    r
  );
}
function $e(e, t, n) {
  if (e.node.content.size + t.node.content.size > H) {
    n.isComplete = !1;
    return;
  }
  z(F(e.node, e.from + 1), F(t.node, t.from + 1), n);
}
function z(e, t, n) {
  let r = L(e.text),
    i = L(t.text);
  if (r == null || i == null) {
    n.isComplete = !1;
    return;
  }
  if (!Ye(n, r.length + i.length)) return;
  let a = Me(e.text, t.text, G);
  if (a == null) {
    n.isComplete = !1;
    return;
  }
  let o = (r, i, a, o) => {
      let s = e.positions[r],
        c = e.positions[i],
        l = t.positions[a],
        u = t.positions[o];
      M(e.fragment(s, c), n) !== M(t.fragment(l, u), n) &&
        (P(n.selected, l, u),
        /\S/u.test(e.text.slice(r, i)) &&
          !/\S/u.test(t.text.slice(a, o)) &&
          Xe(n, l, /[\p{L}\p{N}]/u.test(e.text.slice(r, i))));
    },
    s = (n, r, i, a) => {
      let s = 0,
        c = 0,
        l = Math.min(r - n, a - i);
      for (; s < l && e.text[n + s] === t.text[i + s] && /\s/u.test(e.text[n + s]);) s++;
      for (; c < l - s && e.text[r - c - 1] === t.text[a - c - 1] && /\s/u.test(e.text[r - c - 1]);) c++;
      (o(n, n + s, i, i + s), o(n + s, r - c, i + s, a - c), o(r - c, r, a - c, a));
    },
    c = 0,
    l = 0,
    u = 0,
    d = 0;
  if (r.length > 0 && i.length > 0)
    for (let e of a) {
      let a = e.count ?? 0;
      if (e.removed) c += a;
      else if (e.added) l += a;
      else
        for (let e = 0; e < a; e++) {
          let e = r[c++],
            a = i[l++];
          if (e == null || a == null) {
            n.isComplete = !1;
            return;
          }
          (s(u, e.from, d, a.from),
            o(e.from, e.to, a.from, a.to),
            Ze(n, t.positions[a.to]),
            (u = e.to),
            (d = a.to));
        }
    }
  s(u, e.text.length, d, t.text.length);
}
function et(e, t, n, r) {
  if ([...e, ...t].reduce((e, { node: t }) => e + t.nodeSize, 0) > H) {
    n.isComplete = !1;
    return;
  }
  let i = I(e, n.previousDoc, r),
    a = I(t, n.selectedDoc, r);
  if (i == null || a == null) {
    n.isComplete = !1;
    return;
  }
  z(i, a, n);
}
function tt(e, t, n, r) {
  e.node.isLeaf || JSON.stringify(k(e.node)) !== JSON.stringify(k(t.node))
    ? P(n.selected, t.from, t.from + t.node.nodeSize)
    : e.node.isTextblock
      ? $e(e, t, n)
      : B(N(e.node, e.from + 1), N(t.node, t.from + 1), n, r + 1, t.from + 1);
}
function B(e, t, n, r, i = 0) {
  if (r >= W) {
    n.isComplete = !1;
    return;
  }
  if (!Ye(n, e.length + t.length)) return;
  let a = Oe(e, t, { comparator: (e, t) => j(e.node, n) === j(t.node, n), maxEditLength: U, timeout: 100 });
  if (a == null) {
    n.isComplete = !1;
    return;
  }
  let o = [],
    s = [],
    c = 0,
    l = t.at(-1),
    u = l == null ? i : l.from + l.node.nodeSize,
    d = () => {
      if (o.length === 1 && s.length === 1) tt(o[0], s[0], n, r);
      else if (o.length > 0 && s.length > 0) et(o, s, n, r);
      else {
        o.some(({ node: e }) => Qe(e)) &&
          Xe(
            n,
            t[c]?.from ?? u,
            o.some(({ node: e }) => /[\p{L}\p{N}]/u.test(e.textContent)),
          );
        for (let e of s) P(n.selected, e.from, e.from + e.node.nodeSize);
      }
      ((o = []), (s = []));
    };
  for (let e of a)
    if (e.removed) o.push(...e.value);
    else if (e.added) (s.push(...e.value), (c += e.value.length));
    else {
      d();
      for (let i = 0; i < e.value.length; i++) {
        let e = n.deletions.at(-1);
        if (e != null && e.nextMatchEnd == null) {
          let e = R(t[c + i], r);
          e != null && Ze(n, e);
        }
      }
      c += e.value.length;
    }
  d();
}
function nt(e) {
  let t = [];
  for (let n of e.sort((e, t) => e.from - t.from)) {
    let e = t.at(-1);
    e != null && n.from <= e.to ? (e.to = Math.max(e.to, n.to)) : t.push({ ...n });
  }
  return t;
}
function rt(e) {
  let t = [];
  for (let n of e.sort((e, t) => e.position - t.position)) {
    let e = t.at(-1);
    e?.position === n.position
      ? (n.breaksWordRun && (e.breaksWordRun = !0),
        (e.nextMatchEnd == null || (n.nextMatchEnd != null && n.nextMatchEnd < e.nextMatchEnd)) &&
          (e.nextMatchEnd = n.nextMatchEnd))
      : t.push({ ...n });
  }
  return t;
}
var V, H, U, W, G;
function it() {
  return (it = e(() => {
    (ke(),
      (V = 2e5),
      (H = 2e5),
      (U = 2e3),
      (W = 12),
      (G = {
        ignoreCase: !1,
        oneChangePerToken: !0,
        intlSegmenter:
          typeof Intl.Segmenter == `function` ? new Intl.Segmenter(`en`, { granularity: `word` }) : void 0,
        maxEditLength: U,
        timeout: 100,
      }));
  }))();
}
function at(e, t) {
  if (t === `5s`) return 5e3;
  if (t === `10s`) return 1e4;
  if (t !== `length-dependent`) return null;
  let n = 0;
  if (Y == null) n = e.match(/[\p{L}\p{N}][\p{L}\p{N}\p{M}'’]*/gu)?.length ?? 0;
  else for (let t of Y.segment(e)) t.isWordLike && n++;
  return Math.min(3e4, 5e3 + n * 10);
}
function K(e) {
  if (Y == null) return (e.match(/[\p{L}\p{N}][\p{L}\p{N}\p{M}'’]*/gu)?.length ?? 0) < J;
  let t = 0;
  for (let n of Y.segment(e)) if (n.isWordLike && ++t >= J) return !1;
  return !0;
}
function ot(e, t, n, r, i, a) {
  let o = t + e.content.size,
    s = r.filter((e) => t < e && e < o);
  if (s.length === 0 || n.length === 0) return n;
  let c = [...n],
    l = t,
    u = (n) => {
      let r = s.filter((e) => l < e && e < n);
      if (r.length === 0) return;
      let u = l;
      for (let s of [...r, n]) {
        if (s <= a && !(i && s === o)) {
          let n = u - t,
            r = s - t;
          for (; n < r && /^\s$/u.test(e.textBetween(n, n + 1));) n++;
          for (; n < r && /^\s$/u.test(e.textBetween(r - 1, r));) r--;
          n < r &&
            K(
              e.textBetween(
                n,
                r,
                ``,
                `
`,
              ),
            ) &&
            c.push({ from: t + n, to: t + r });
        }
        u = s;
      }
    };
  for (let e of n) (u(Math.min(e.from, o)), (l = Math.max(l, e.to)));
  return (u(o), c.sort((e, t) => e.from - t.from));
}
function st(e, t, n, r = [], i = e.content.size) {
  let a = [],
    o = -1;
  n && e.descendants((e, t) => (e.isTextblock ? ((o = t), !1) : !e.isAtom));
  let s = 0;
  return (
    e.descendants((e, c) => {
      if (!e.isTextblock) return !e.isAtom;
      let l = c + 1,
        u = l + e.content.size;
      for (; s < t.length && t[s].to <= l;) s++;
      let d = [];
      for (let e = s; e < t.length && t[e].from < u; e++) d.push(t[e]);
      let f;
      for (let t of ot(e, l, d, r, n && c === o, i)) {
        let n = { ...t, from: Math.max(l, t.from), to: Math.min(u, t.to) };
        n.from >= n.to ||
          (f == null &&
            K(
              e.textBetween(
                0,
                n.from - l,
                ``,
                `
`,
              ),
            ) &&
            (n.from = l),
          f != null &&
          (n.from <= f.to ||
            K(
              e.textBetween(
                f.to - l,
                n.from - l,
                ``,
                `
`,
              ),
            ))
            ? ((f.to = Math.max(f.to, n.to)),
              n.revealAfter != null &&
                (f.revealAfter == null || n.revealAfter >= f.revealAfter) &&
                ((f.revealFrom = n.revealFrom), (f.revealAfter = n.revealAfter)),
              n.waitForCompletion && (f.waitForCompletion = !0))
            : (a.push(n), (f = n)));
      }
      return (
        f != null &&
          (!n || c !== o) &&
          K(
            e.textBetween(
              f.to - l,
              e.content.size,
              ``,
              `
`,
            ),
          ) &&
          (f.to = u),
        !1
      );
    }),
    a
  );
}
function ct(e, t, n, r = e.content.size) {
  let i = t.selected.flatMap((e) => (e.from < r ? [{ ...e, to: Math.min(e.to, r) }] : []));
  if (t.selected.length > 0 || t.deletions.length === 0)
    return st(
      e,
      i,
      n,
      t.deletions.flatMap((e) =>
        e.breaksWordRun && (!n || (e.nextMatchEnd != null && e.nextMatchEnd <= r)) ? [e.position] : [],
      ),
      r,
    );
  let a = [];
  e.descendants((e, t) => {
    if (!e.isTextblock) return !e.isAtom;
    let n = ``;
    e.forEach((e) => {
      n += e.isText ? (e.text ?? ``) : ` `.repeat(e.nodeSize);
    });
    let r = t + 1;
    if (Y == null)
      for (let e of n.matchAll(/[\p{L}\p{N}][\p{L}\p{N}\p{M}'’]*/gu))
        a.push({ from: r + e.index, to: r + e.index + e[0].length });
    else
      for (let e of Y.segment(n))
        e.isWordLike && a.push({ from: r + e.index, to: r + e.index + e.segment.length });
    return !1;
  });
  let o = [],
    s = 0;
  for (let r of t.deletions) {
    if (n && r.nextMatchEnd == null) continue;
    for (; s < a.length && a[s].to <= r.position;) s++;
    let t = a[s],
      i = t != null && t.from < r.position ? t : a[s - 1],
      c = Math.max(r.nextMatchEnd ?? e.content.size, t?.to ?? 0);
    for (let e of i === t ? [i] : [i, t])
      e != null &&
        o.push({
          ...e,
          revealFrom: t?.from,
          revealAfter: c,
          waitForCompletion: r.nextMatchEnd == null || t == null,
        });
  }
  if (o.length === 0) return i;
  let c = st(
    e,
    [...t.selected, ...o].sort((e, t) => e.from - t.from),
    n,
  );
  return [...i, ...o, ...c.filter((e) => e.revealAfter != null)].sort((e, t) => e.from - t.from);
}
function q(e, t = []) {
  let n = { text: ``, nodes: [], ranges: [] },
    r = 0;
  e.descendants((e, i) => {
    if (e.isText && e.text != null) {
      let a = n.text.length,
        o = i + e.nodeSize;
      for (
        n.text += e.text, n.nodes.push({ from: i, offset: a, length: e.nodeSize });
        r < t.length && t[r].to <= i;
      )
        r++;
      for (let e = r; e < t.length && t[e].from < o; e++) {
        let r = t[e];
        r.to <= i ||
          n.ranges.push({ ...r, from: a + Math.max(i, r.from) - i, to: a + Math.min(o, r.to) - i });
      }
    }
    return !e.isAtom;
  });
  let i = (e) => {
    let t = 0,
      r = n.nodes.length;
    for (; t < r;) {
      let i = Math.floor((t + r) / 2),
        a = n.nodes[i];
      e > a.from + a.length ? (t = i + 1) : (r = i);
    }
    let i = n.nodes[t];
    return i == null ? n.text.length : i.offset + Math.max(0, e - i.from);
  };
  for (let e of n.ranges)
    (e.revealAfter != null && (e.revealAfter = i(e.revealAfter)),
      e.revealFrom != null && (e.revealFrom = i(e.revealFrom)));
  return n;
}
function lt({ previousDoc: e, receivedDoc: t, isStreaming: n, endsAtWordBoundary: r }) {
  let i = Je(e, t);
  if (!i.isComplete || (i.selected.length === 0 && i.deletions.length === 0)) return null;
  let a = q(t),
    o = a.text.length;
  if (n && !r) {
    if (Y == null) o = Math.max(0, a.text.search(/\S+$/u));
    else for (let e of Y.segment(a.text)) o = e.isWordLike ? e.index : a.text.length;
  }
  let s = a.nodes.find((e) => e.offset + e.length >= o),
    c = t.content.size;
  o !== a.text.length && (c = s == null ? 0 : s.from + o - s.offset);
  let l = q(t, ct(t, i, n, c));
  return {
    text: l.text,
    ranges: l.ranges.flatMap((e) =>
      e.from < o && (e.revealAfter ?? 0) <= o ? [{ ...e, to: Math.min(e.to, o) }] : [],
    ),
  };
}
function ut(e, t, n = !1) {
  let r = q(e),
    i = 0,
    a = Math.min(r.text.length, t?.text.length ?? 0);
  for (; i < a && r.text[i] === t?.text[i];) i++;
  let o = [];
  for (let e of t?.ranges ?? []) {
    if ((e.revealAfter != null && e.revealAfter > i) || (e.waitForCompletion && n)) continue;
    let t = Math.max(0, e.from),
      r = Math.min(e.to, i);
    if (t >= r) continue;
    let a = o.at(-1);
    a != null && t <= a.to ? (a.to = Math.max(a.to, r)) : o.push({ from: t, to: r });
  }
  return { ...r, ranges: o, matchedCharacters: i };
}
function dt(e, t, n, r = !1) {
  let i = ut(e, t, r),
    a = i.ranges,
    o = i.matchedCharacters,
    s = [],
    c = 0;
  for (let e of i.nodes) {
    if (e.offset >= o) break;
    let t = Math.min(e.offset + e.length, o);
    for (; c < a.length && a[c].to <= e.offset;) c++;
    for (let r = c; r < a.length && a[r].from < t; r++) {
      let i = a[r];
      s.push(
        v.inline(e.from + Math.max(e.offset, i.from) - e.offset, e.from + Math.min(t, i.to) - e.offset, {
          class: n,
        }),
      );
    }
  }
  return s;
}
var ft, J, Y;
function X() {
  return (X = e(() => {
    (p(),
      it(),
      (ft = 2e4),
      (J = 3),
      (Y = typeof Intl.Segmenter == `function` ? new Intl.Segmenter(`en`, { granularity: `word` }) : null));
  }))();
}
function pt() {
  return new l({
    key: Z,
    state: {
      init: () => ({ id: null, cue: null, decorations: _.empty, fadeEndsAt: null }),
      apply(e, t) {
        try {
          let n = e.getMeta(Z);
          if (n === `clear`) return { ...t, cue: null, decorations: _.empty };
          if (n != null && n !== `fade`) {
            if (n.cue.dismissed === `edit` && t.id === n.id) return t;
            let r = n.cue;
            return {
              id: n.id,
              cue: r,
              fadeEndsAt: null,
              decorations:
                r.dismissed != null || r.changes == null || (r.expiresAt != null && r.expiresAt <= Date.now())
                  ? _.empty
                  : _.create(e.doc, dt(e.doc, r.changes, Q, r.isStreaming)),
            };
          }
          if ((!e.docChanged && n !== `fade`) || t.cue?.changes == null) return t;
          if (t.cue.dismissed != null) return { ...t, decorations: _.empty };
          if (t.fadeEndsAt != null) return { ...t, decorations: t.decorations.map(e.mapping, e.doc) };
          if (
            n !== `fade` &&
            (e.getMeta(`writingBlockSkipSerialize`) === !0 || e.getMeta(`writingBlockSourceUpdate`) === !0)
          ) {
            let n = t.cue.changes;
            return {
              ...t,
              decorations:
                !t.cue.isStreaming && q(e.doc).text !== n.text
                  ? _.empty
                  : _.create(e.doc, dt(e.doc, n, Q, t.cue.isStreaming)),
            };
          }
          return {
            ...t,
            fadeEndsAt: Date.now() + 300,
            decorations: _.create(
              e.doc,
              t.decorations
                .map(e.mapping, e.doc)
                .find()
                .map(({ from: e, to: t }) =>
                  v.inline(e, t, {
                    class: `text-inherit transition-colors duration-relaxed ease-basic motion-reduce:transition-none`,
                  }),
                ),
            ),
          };
        } catch {
          return { ...t, cue: null, decorations: _.empty };
        }
      },
    },
    props: {
      decorations(e) {
        let t = Z.getState(e);
        return t?.fadeEndsAt != null && t.fadeEndsAt <= Date.now() ? _.empty : t?.decorations;
      },
    },
    view(e) {
      let t,
        n = () => {
          clearTimeout(t);
          let n = Z.getState(e.state),
            r = n?.fadeEndsAt ?? n?.cue?.expiresAt ?? 1 / 0;
          n?.decorations.find().length &&
            Number.isFinite(r) &&
            (t = setTimeout(
              () => {
                e.isDestroyed ||
                  e.dispatch(
                    e.state.tr
                      .setMeta(Z, n.fadeEndsAt == null ? `fade` : `clear`)
                      .setMeta(`addToHistory`, !1)
                      .setMeta(y, !0),
                  );
              },
              Math.max(0, r - Date.now()),
            ));
        };
      return (n(), { update: n, destroy: () => clearTimeout(t) });
    },
  });
}
function mt(e, t, n) {
  let r = Z.getState(e.state);
  e.isDestroyed ||
    (r?.id === t && r.cue === n) ||
    e.dispatch(e.state.tr.setMeta(Z, { id: t, cue: n }).setMeta(`addToHistory`, !1).setMeta(y, !0));
}
function ht(e) {
  e.isDestroyed ||
    Z.getState(e.state)?.cue == null ||
    e.dispatch(e.state.tr.setMeta(Z, `clear`).setMeta(`addToHistory`, !1).setMeta(y, !0));
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (Te(), g(), p(), a(), D(), X(), (Z = new ee(`writingBlockAssistantRevision`)), (Q = `text-info`));
  }))();
}
function gt(e) {
  let t = [];
  return (
    e.descendants((e, n) => {
      (e.type.name === `paragraph` || e.type.name === `heading`) &&
        t.push(v.node(n, n + e.nodeSize, { dir: `auto` }));
    }),
    _.create(e, t)
  );
}
var _t;
function vt() {
  return (vt = e(() => {
    (g(),
      h(),
      p(),
      (_t = new l({
        props: {
          decorations(e) {
            return this.getState(e);
          },
        },
        state: {
          init(e, t) {
            return gt(t.doc);
          },
          apply(e, t) {
            return e.docChanged
              ? e.steps.every((t, r) => {
                  if (!(t instanceof n)) return !1;
                  let i = e.docs[r],
                    a = i.resolve(t.from);
                  if (
                    !a.parent.isTextblock ||
                    !a.sameParent(i.resolve(t.to)) ||
                    t.slice.openStart !== 0 ||
                    t.slice.openEnd !== 0
                  )
                    return !1;
                  let o = !0;
                  return (
                    t.slice.content.forEach((e) => {
                      e.isInline || (o = !1);
                    }),
                    o
                  );
                })
                ? t.map(e.mapping, e.doc)
                : gt(e.doc)
              : t;
          },
        },
      })));
  }))();
}
function yt({
  collaboration: e,
  enableGenerate: t = !1,
  leadingPlugins: n = [],
  onGeneratePromptReset: r = () => {},
  onTaskCheckboxToggled: a,
  plugins: o = [],
  ...s
}) {
  let l = s.pmu ?? x(s.pmuOptions),
    u = (e == null ? Ke : b)({
      ...s,
      handleDOMEvents:
        e == null ? s.handleDOMEvents : { ...s.handleDOMEvents, beforeinput: e.handleBeforeInput },
      pluginStack: _e({
        emptyNodePlaceholderText: s.placeholder ?? ``,
        extraLinkPlugins: [
          i({
            openLink: ({ event: e, href: t }) => {
              be({ event: e, href: t, initiator: `open_in_browser_bridge` });
            },
          }),
        ],
        isDisabled: s.editable === !1,
        isEmojiMenuAvailable: !0,
        isGenerateAvailable: t,
        isLinkSupportEnabled: !0,
        isSlashMenuAvailable: !0,
        isTableEditingEnabled: !0,
        isTaskListSupportEnabled: !0,
        leadingPlugins: [...(e?.plugins ?? []), ...n],
        maxLength: e == null ? 2e4 : null,
        undo: e?.undo,
        redo: e?.redo,
        onSlashMenuExecute: (e) => xt(e, r),
        onTaskCheckboxToggled: a,
        pmu: l,
        tableEditingOptions: {
          floatingUiClassName: Re.tableFloatingUi,
          getFloatingUiContainer: (e) => e.dom.closest(`[data-writing-block-table-controls-container]`),
          floatingUiStyle: Object.fromEntries(Object.entries(Ie)),
        },
        trailingPlugins: [_t, ...(e == null ? [pt()] : []), ...o],
      }),
      pmu: l,
      pmuOptions: void 0,
    });
  return (u.view.setProps({ clipboardTextSerializer: c, transformPastedHTML: le }), u);
}
function bt(e) {
  let t = Ce.getState(e.state),
    n = pe.getState(e.state);
  return (
    e.hasFocus() &&
    e.state.selection.empty &&
    !ye(me.getState(e.state)) &&
    Se.getState(e.state)?.suggestion == null &&
    t?.input == null &&
    t?.suggestion == null &&
    !n?.isStructureMode &&
    !n?.isEditMode
  );
}
function xt({ commandId: e, query: t, view: n }, r = () => {}) {
  Ne({
    commandId: e,
    view: n,
    isTableEditingEnabled: !0,
    isTaskListSupportEnabled: !0,
    onGeneratePromptReset: r,
    onSlashMenuRequestClose: () => he(n),
    slashMenuQuery: t,
  });
}
function St() {
  return (St = e(() => {
    (ve(), je(), de(), fe(), Fe(), De(), oe(), xe(), Ae(), Ee(), ze(), Le(), ge(), D(), $(), vt());
  }))();
}
export {
  Ue as _,
  ht as a,
  ft as c,
  X as d,
  q as f,
  He as g,
  Be as h,
  St as i,
  lt as l,
  D as m,
  yt as n,
  $ as o,
  Ge as p,
  xt as r,
  mt as s,
  bt as t,
  at as u,
  T as v,
};
//# sourceMappingURL=writing-block-editor-5c2b4ee54b30.js.map
