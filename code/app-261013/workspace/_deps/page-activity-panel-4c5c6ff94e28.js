import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $At as r,
  ADt as i,
  BS as a,
  CS as o,
  Cjt as s,
  Cwt as c,
  EB as l,
  Ewt as u,
  FCt as d,
  IDt as f,
  IS as p,
  JR as m,
  KS as h,
  Mot as g,
  NO as _,
  Not as v,
  PCt as y,
  PO as b,
  Pxt as x,
  Sj as S,
  Swt as C,
  TJ as w,
  Twt as T,
  VCt as E,
  VDt as ee,
  VS as D,
  Vxt as te,
  XAt as O,
  YAt as k,
  YR as A,
  Z4 as j,
  ZAt as M,
  _Mt as N,
  _wt as P,
  awt as F,
  az as I,
  bj as ne,
  cz as L,
  dwt as re,
  fwt as R,
  gMt as ie,
  gwt as ae,
  iI as z,
  iwt as oe,
  jDt as B,
  oI as se,
  oz as V,
  pwt as ce,
  qS as H,
  sz as U,
  t3 as W,
  uwt as le,
  vzt as G,
  wjt as K,
  wwt as q,
  xMt as J,
  yzt as ue,
  zxt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as fe,
  $Ht as pe,
  $pn as me,
  DFr as he,
  DV as ge,
  Dor as _e,
  Drn as ve,
  EV as ye,
  Ern as be,
  F$ as xe,
  H7 as Se,
  J5t as Ce,
  K5t as we,
  N$ as Te,
  OCn as Ee,
  P$ as De,
  Q3n as Oe,
  QSr as ke,
  Tsn as Ae,
  U7 as je,
  Ypn as Me,
  ZSr as Ne,
  awr as Pe,
  b3 as Fe,
  cwr as Ie,
  dRr as Le,
  e6n as Re,
  eUt as ze,
  h3 as Be,
  iPr as Ve,
  j$ as He,
  kCn as Ue,
  l3 as We,
  lpn as Ge,
  ltt as Ke,
  lwr as qe,
  oRr as Je,
  owr as Ye,
  ppn as Xe,
  ptt as Ze,
  r6 as Qe,
  rRr as $e,
  sPr as et,
  swr as tt,
  t6 as nt,
  upn as rt,
  uwr as it,
  xsn as at,
  y3 as ot,
} from "./app-initial-5851df3f6cb1.js";
import { n as st, t as ct } from "./avatar-ed18f22a2837.js";
import { i as lt, n as ut } from "./profile-card-24cf744f537b.js";
import { n as dt, t as ft } from "./editor.module-79b8a30b4fbe.js";
import { n as pt, t as mt } from "./detail-section-state-e7774e5ba7f3.js";
import { r as ht, t as gt } from "./label-9b3e2445df17.js";
function _t(e, t) {
  let n = t == null ? ot(e)?.[0] : void 0,
    r = n?.filter((e) => e != null),
    i = r?.length ? r.reduce((e, t) => e + t, 0) / r.length : 0,
    a = t ?? n?.map((e) => e ?? i);
  if (a == null) return;
  let o = a.reduce((e, t) => e + t, 0);
  return {
    widths: a,
    totalWidth: o,
    attributes: {
      "data-page-table-resized": `true`,
      style: `inline-size: ${o}px; min-inline-size: 0; max-inline-size: none;`,
    },
  };
}
function vt() {
  return (vt = e(() => {
    Fe();
  }))();
}
function yt(e, t) {
  return e.hasMarkup(
    t.type,
    {
      ...t.attrs,
      ...(0, bt.default)(e.attrs, [
        `pageLayout`,
        `pageCodeWrap`,
        `pageColumnWidth`,
        `pageRowHeight`,
        `sourceMarkdown`,
        `sourceCanonicalMarkdown`,
      ]),
    },
    t.marks,
  );
}
var bt;
function xt() {
  return (xt = e(() => {
    bt = t(he(), 1);
  }))();
}
function St(e, t, n, r) {
  let i = e.type.schema,
    a = y.nodesFromSchema(i);
  for (let [e, t] of Object.entries(i.nodes))
    (t.spec.leafText != null || t.spec.inlineMention) && (a[e] = (e) => [`span`, Ct(e)]);
  let o = new y(a, { ...y.marksFromSchema(i), link: () => [`a`, 0] }),
    s = n.createElement(`div`);
  ((s.className = `font-content ${ft.PageDocument}`), (s.dataset.pageBlockDiff = ``));
  let c = (e, t, r) => {
      let i = r == null ? void 0 : n.createElement(r);
      (i != null &&
        ((i.className =
          r === `ins` ? `bg-text-info/10 text-info no-underline` : `text-secondary line-through`),
        t.appendChild(i)),
        (i ?? t).appendChild(o.serializeFragment(e, { document: n })));
    },
    l = (e, t, i) => {
      let { after: a } = e,
        f = e.before != null && i.has(Y(e.before)) ? void 0 : e.before,
        p = a == null ? void 0 : i.get(Y(a));
      if (f != null && a != null && (!Tt(f, a) || (Y(f) === `table` && !f.eq(a) && !Dt([f, a])))) {
        (l({ before: f }, t, i), l({ after: a }, t, i));
        return;
      }
      let m = f ?? a;
      if (m == null) return;
      let h = t;
      if (t === s) {
        let e = n.createElement(`div`);
        ((e.dataset.pageBlockRow = ``),
          (e.dataset.pageBlockType = m.type.name),
          (e.dataset.pageBlockLayout = Ge(m.attrs.pageLayout)));
        let t = n.createElement(`div`);
        ((t.dataset.pageBlockViewport = ``),
          m.type.name === `table` && (t.className = `horizontal-scroll-fade-mask`));
        let r = n.createElement(`div`);
        ((r.dataset.pageBlockDiff = ``), t.append(r), e.append(t), s.append(e), (h = r));
      }
      let g;
      if ((f == null ? (g = `ins`) : (a ?? (g = `del`)), m.isLeaf)) {
        c(d.from(m), h, g);
        return;
      }
      let { dom: _, contentDOM: v } = y.renderSpec(n, o.nodes[m.type.name](m)),
        b = m.type.name === `table` ? _t(e.before ?? m) : void 0;
      if (b != null) {
        for (let [e, t] of Object.entries(b.attributes)) _.setAttribute(e, t);
        let e = n.createElement(`colgroup`);
        (b.widths.forEach((t) => {
          let r = n.createElement(`col`);
          ((r.style.width = `${t}px`), e.append(r));
        }),
          _.prepend(e));
      }
      if (
        (m.type.name === `task_list_item` &&
          _.querySelector(`input`)?.setAttribute(
            `aria-label`,
            (a ?? m).content.content
              .filter((e) => e.isTextblock)
              .map((e) => e.textBetween(0, e.content.size, ` `, Ct))
              .join(` `),
          ),
        h.appendChild(_),
        a?.type.name === `code_block` && r?.(a, _),
        v == null)
      )
        return;
      if (m.isTextblock) {
        if (f == null || a == null || f.content.eq(a.content)) c(m.content, v, g);
        else {
          let e = Le(
            f.textBetween(
              0,
              f.content.size,
              `
`,
              `
`,
            ),
            a.textBetween(
              0,
              a.content.size,
              `
`,
              `
`,
            ),
            { maxEditLength: At },
          );
          if (e == null) {
            (c(f.content, v, `del`), c(a.content, v, `ins`));
            return;
          }
          let t = 0,
            n = 0;
          for (let r of e) {
            let e = t + (r.added ? 0 : r.value.length),
              i = n + (r.removed ? 0 : r.value.length),
              o = f.content.cut(t, e),
              s = a.content.cut(n, i);
            (!r.added && !r.removed && o.eq(s)
              ? c(s, v)
              : (r.added || c(o, v, `del`), r.removed || c(s, v, `ins`)),
              (t = e),
              (n = i));
          }
        }
        return;
      }
      if (p != null) {
        if (
          (m.forEach(() => {
            for (; p.index < p.changes.length && p.changes[p.index].after == null;)
              l(p.changes[p.index++], v, i);
            l(p.changes[p.index++], v, i);
          }),
          m === p.last)
        )
          for (; p.index < p.changes.length;) l(p.changes[p.index++], v, i);
        return;
      }
      let x = new Map(),
        S = i.get(`list`);
      (m.type.isInGroup(`list_item`) && S != null && x.set(`list`, S),
        f == null || a == null || m.type.name === `table_row`
          ? m.forEach((e, t, n) => l({ before: f?.child(n), after: a?.child(n) }, v, x))
          : u(f.content.content, a.content.content, v, x));
    },
    u = (e, t, n, r) => {
      for (let i of Ot(e, t)) {
        let e = new Map(r);
        for (let t of [`list`, `table`]) {
          if (e.has(t)) continue;
          let n = i.flatMap(({ before: e }) => (e != null && Y(e) === t ? [e] : [])),
            r = i.flatMap(({ after: e }) => (e != null && Y(e) === t ? [e] : []));
          n.length > 0 &&
            r.length > 0 &&
            (t === `list` || Dt([...n, ...r])) &&
            e.set(t, {
              changes: Ot(n.flatMap(wt), r.flatMap(wt), t).flat(),
              index: 0,
              last: r[r.length - 1],
            });
        }
        i.forEach((t) => l(t, n, e));
      }
    };
  return (
    u(We(e).content.content, We(t).content.content, s, new Map()),
    s.querySelectorAll(`pre`).forEach((e) => {
      e.classList.add(`horizontal-scroll-fade-mask`);
    }),
    s.querySelectorAll(`input`).forEach((e) => {
      e.disabled = !0;
    }),
    s.querySelectorAll(`[data-page-block-kind="agent_instructions"]`).forEach((e) => {
      Qe(e, !0);
      let t = e.querySelector(`[data-page-agent-instructions="toggle"]`);
      if (t != null) {
        t.querySelector(`[data-page-agent-instructions="icon"]`)?.remove();
        let e = n.createElement(`div`);
        ((e.className = `text-sm text-secondary`), e.append(...t.childNodes), t.replaceWith(e));
      }
    }),
    s
  );
}
function Ct(e) {
  return (
    e.type.spec.leafText?.(e) ??
    ve(d.from(e.type.schema.nodes.paragraph.create(null, e)), { preserveUnresolvedSkillMentions: !0 }).content
  );
}
function Y(e) {
  return e.type.name === `ordered_list` ? `list` : e.type.name;
}
function wt(e) {
  return e.content.content.flatMap((t) => [
    t,
    ...(Y(e) === `list` ? t.content.content.filter((e) => Y(e) === `list`).flatMap(wt) : []),
  ]);
}
function Tt(e, t) {
  return e.type.name !== `table_cell` || t.type.name !== `table_cell`
    ? yt(e, t)
    : (e.attrs.rowIndex === 0) == (t.attrs.rowIndex === 0) &&
        yt(e, t.type.create({ ...t.attrs, rowIndex: e.attrs.rowIndex }, t.content, t.marks));
}
function Et(e, t, n, r) {
  if (n === `table`)
    return (
      e.childCount === t.childCount &&
      e.content.content.every((e, n) => Tt(e, t.child(n)) && (!r || e.content.eq(t.child(n).content)))
    );
  if (!r) return !0;
  if (n === `list`) {
    let n = (e) => d.fromArray(e.content.content.filter((e) => Y(e) !== `list`));
    return Tt(e, t) && n(e).eq(n(t));
  }
  return e.eq(t);
}
function Dt(e) {
  let t = e[0].firstChild?.childCount;
  return e.every((e) =>
    e.content.content.every(
      (e) =>
        e.childCount === t &&
        e.content.content.every((e) => (e.attrs.colspan ?? 1) === 1 && (e.attrs.rowspan ?? 1) === 1),
    ),
  );
}
function Ot(e, t, n) {
  let r =
    e.length + t.length > kt
      ? void 0
      : Je([...e], [...t], { comparator: (e, t) => Et(e, t, n, !0), maxEditLength: At });
  if (r == null)
    return [
      [...t.map((t, n) => ({ before: e[n], after: t })), ...e.slice(t.length).map((e) => ({ before: e }))],
    ];
  let i = [],
    a = [],
    o = 0;
  for (let t of r)
    t.added || t.removed
      ? (a.push(...t.value.map((e) => (t.removed ? { before: e } : { after: e }))),
        t.removed && (o += t.value.length))
      : (i.push(
          a,
          t.value.map((t) => ({ before: e[o++], after: t })),
        ),
        (a = []));
  i.push(a);
  let s = i.flat(),
    c = s.filter((e) => e.after == null);
  for (let e of s) {
    let t = e.after;
    if (e.before == null && t != null) {
      let r = c.find(({ before: e }) => e != null && Et(e, t, n, !0));
      r != null && ((e.before = r.before), (r.before = void 0));
    }
  }
  return i.map((e) => {
    let t = e.filter((e) => e.after == null && e.before != null),
      r = e.filter((e) => e.after != null);
    for (let e of r) {
      let r = e.after;
      if (e.before == null && r != null) {
        let i = t.findIndex(({ before: e }) => e != null && Et(e, r, n, !1));
        i >= 0 && (e.before = t.splice(i, 1)[0].before);
      }
    }
    return [...r, ...t];
  });
}
var kt, At;
function jt() {
  return (jt = e(() => {
    ($e(), E(), be(), nt(), rt(), Be(), vt(), xt(), dt(), (kt = 256), (At = 128));
  }))();
}
function Mt(e) {
  let t = (0, Nt.c)(64),
    { animation: n, children: r, label: i, onClose: a, storageKey: o, variant: s } = e,
    c = s === void 0 ? `default` : s,
    l = ee(),
    d = A(),
    [f, p] = u(),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { width: 0, height: 0 }), (t[0] = m)) : (m = t[0]);
  let [h, g] = (0, Pt.useState)(m),
    _ = ce(0),
    v = n ?? _,
    y = ce(null),
    b = h.width < 640,
    x = b ? `full` : `regular`,
    S;
  t[1] !== h.height || t[2] !== h.width
    ? ((S = Pe({ defaultWidth: 600, mainContentWidth: h.width, shellHeight: h.height })),
      (t[1] = h.height),
      (t[2] = h.width),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    w;
  t[4] !== C || t[5] !== h.width || t[6] !== o || t[7] !== x
    ? ((w = (e) =>
        Math.min(
          h.width,
          tt(
            e ?? Ye({ defaultWidth: C, mainContentWidth: h.width, storageKey: o, widthMode: x }),
            h.width,
            x,
          ),
        )),
      (t[4] = C),
      (t[5] = h.width),
      (t[6] = o),
      (t[7] = x),
      (t[8] = w))
    : (w = t[8]);
  let T = re(y, w),
    E;
  t[9] !== f || t[10] !== v || t[11] !== T
    ? ((E = { size: T, animation: v, isVisible: f }), (t[9] = f), (t[10] = v), (t[11] = T), (t[12] = E))
    : (E = t[12]);
  let { animatedSize: D } = Ue(E),
    te,
    O;
  (t[13] !== f || t[14] !== d || t[15] !== p || t[16] !== v
    ? ((te = () => {
        let e = oe(v, +!!f, {
          ...(d ? { duration: 0 } : ne),
          onComplete: () => {
            f || p?.();
          },
        });
        return () => e.stop();
      }),
      (O = [f, d, p, v]),
      (t[13] = f),
      (t[14] = d),
      (t[15] = p),
      (t[16] = v),
      (t[17] = te),
      (t[18] = O))
    : ((te = t[17]), (O = t[18])),
    (0, Pt.useLayoutEffect)(te, O));
  let k, M;
  (t[19] === n
    ? ((k = t[20]), (M = t[21]))
    : ((k = () => () => n?.jump(0)), (M = [n]), (t[19] = n), (t[20] = k), (t[21] = M)),
    (0, Pt.useLayoutEffect)(k, M));
  let N = Math.min(h.width, 320),
    F = h.width,
    I;
  t[22] !== h.width || t[23] !== x
    ? ((I = tt(1, h.width, x)), (t[22] = h.width), (t[23] = x), (t[24] = I))
    : (I = t[24]);
  let L = Math.min(F, I),
    R;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => {
        let t = e?.parentElement;
        if (t == null) return;
        let n = () => {
          let e = t.clientWidth,
            n = t.clientHeight;
          g((t) => (t.width === e && t.height === n ? t : { width: e, height: n }));
        };
        n();
        let r = new ResizeObserver(n);
        return (r.observe(t), () => r.disconnect());
      }),
      (t[25] = R))
    : (R = t[25]);
  let ae = b ? `absolute inset-y-0 end-0 z-20` : `relative`,
    z;
  t[26] === ae ? (z = t[27]) : ((z = ie(`h-full min-h-0 min-w-0 shrink-0`, ae)), (t[26] = ae), (t[27] = z));
  let B = !f,
    se = !f,
    V;
  t[28] === D ? (V = t[29]) : ((V = { width: D }), (t[28] = D), (t[29] = V));
  let H, U;
  t[30] !== f || t[31] !== v
    ? ((H = () => f && v.jump(1)),
      (U = () => f && v.jump(1)),
      (t[30] = f),
      (t[31] = v),
      (t[32] = H),
      (t[33] = U))
    : ((H = t[32]), (U = t[33]));
  let W;
  t[34] === a
    ? (W = t[35])
    : ((W = (e) => {
        e.key === `Escape` && !e.defaultPrevented && (e.stopPropagation(), a());
      }),
      (t[34] = a),
      (t[35] = W));
  let le = j(l.locale) === `rtl` ? `right` : `left`,
    G = c !== `glass`,
    K;
  t[36] !== C ||
  t[37] !== l ||
  t[38] !== L ||
  t[39] !== N ||
  t[40] !== f ||
  t[41] !== h.width ||
  t[42] !== o ||
  t[43] !== c ||
  t[44] !== v ||
  t[45] !== x ||
  t[46] !== y
    ? ((K =
        f && L > N
          ? {
              hitArea: c === `glass` ? `inside` : void 0,
              indicatorVisibility: c === `glass` ? `always` : void 0,
              ariaLabel: l.formatMessage({
                id: `splitView.resize`,
                defaultMessage: `Resize panels`,
                description: `Accessible name for the split-view resize handle`,
              }),
              defaultSize: C,
              maximumSize: L,
              minimumSize: N,
              setSize: (e) => {
                (v.jump(1), y.set(Ie(e, h.width, x)));
              },
              onResizeEnd: (e) => {
                it({ mainContentWidth: h.width, storageKey: o, width: e, widthMode: x });
              },
            }
          : void 0),
      (t[36] = C),
      (t[37] = l),
      (t[38] = L),
      (t[39] = N),
      (t[40] = f),
      (t[41] = h.width),
      (t[42] = o),
      (t[43] = c),
      (t[44] = v),
      (t[45] = x),
      (t[46] = y),
      (t[47] = K))
    : (K = t[47]);
  let q;
  t[48] !== r || t[49] !== le || t[50] !== G || t[51] !== K || t[52] !== T
    ? ((q = (0, Ft.jsx)(pe, {
        width: T,
        edge: le,
        showBorder: G,
        showBackground: !1,
        resizer: K,
        children: r,
      })),
      (t[48] = r),
      (t[49] = le),
      (t[50] = G),
      (t[51] = K),
      (t[52] = T),
      (t[53] = q))
    : (q = t[53]);
  let J;
  return (
    t[54] !== i ||
    t[55] !== z ||
    t[56] !== B ||
    t[57] !== se ||
    t[58] !== V ||
    t[59] !== H ||
    t[60] !== U ||
    t[61] !== W ||
    t[62] !== q
      ? ((J = (0, Ft.jsx)(P.aside, {
          ref: R,
          className: z,
          "aria-label": i,
          "aria-hidden": B,
          inert: se,
          style: V,
          onPointerDownCapture: H,
          onKeyDownCapture: U,
          onKeyDown: W,
          children: q,
        })),
        (t[54] = i),
        (t[55] = z),
        (t[56] = B),
        (t[57] = se),
        (t[58] = V),
        (t[59] = H),
        (t[60] = U),
        (t[61] = W),
        (t[62] = q),
        (t[63] = J))
      : (J = t[63]),
    J
  );
}
var Nt, Pt, Ft;
function It() {
  return (It = e(() => {
    ((Nt = G()), N(), F(), ae(), R(), q(), le(), (Pt = ue()), B(), m(), S(), ze(), Ee(), qe(), (Ft = J()));
  }))();
}
function Lt(e, t) {
  let n = [],
    r;
  for (let [i, a] of e.entries()) {
    let e = t[a],
      o = e == null ? NaN : Date.parse(e.changed_at);
    if (e == null || !Number.isFinite(o)) {
      r = void 0;
      continue;
    }
    let s = e.actor,
      c = r?.attribution.actor,
      l = s.account_user_id?.trim();
    if (
      r != null &&
      s.actor_type === c?.actor_type &&
      (s.actor_type !== `agent` || (s.agent_kind === `o`) == (c.agent_kind === `o`)) &&
      (s.actor_type === `system` || (l && l === c.account_user_id?.trim()))
    ) {
      ((r.endIndex = i), o > Date.parse(r.attribution.changed_at) && (r.attribution = e));
      continue;
    }
    let u = { attribution: e, blockId: a, endIndex: i, index: i };
    (n.push(u), (r = u));
  }
  return n;
}
function Rt() {
  return (Rt = e(() => {}))();
}
function zt(e) {
  let t = (0, Gt.c)(42),
    { document: r, onRevealSection: i, pageId: a } = e,
    o = ee(),
    s = (0, Kt.useId)(),
    c = Ce(),
    [u, d] = (0, Kt.useState)(20),
    { data: p, isError: m, isPending: h, refetch: g } = de(Ae, a);
  if (h) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            role: `status`,
            children: [
              (0, X.jsx)(`span`, {
                className: `sr-only`,
                children: (0, X.jsx)(f, {
                  id: `codex.space.page.attribution.loading`,
                  defaultMessage: `Loading edit details…`,
                  description: `Accessible status while recent Page edit details are fetched`,
                }),
              }),
              [0, 1, 2].map(Ut),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (m) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`p`, {
          className: `text-sm text-secondary`,
          role: `status`,
          children: (0, X.jsx)(f, {
            id: `codex.space.page.attribution.error`,
            defaultMessage: `Edit details unavailable`,
            description: `Error shown when recent block edit attribution for a shared Page cannot be loaded`,
          }),
        })),
        (t[1] = e))
      : (e = t[1]);
    let r;
    t[2] === g
      ? (r = t[3])
      : ((r = () => {
          g();
        }),
        (t[2] = g),
        (t[3] = r));
    let i;
    t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, X.jsx)(f, {
          id: `codex.space.page.attribution.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading recent Page edits`,
        })),
        (t[4] = i))
      : (i = t[4]);
    let a;
    return (
      t[5] === r
        ? (a = t[6])
        : ((a = (0, X.jsxs)(`div`, {
            className: `flex flex-col items-start gap-3`,
            children: [e, (0, X.jsx)(n, { color: `secondary`, size: `compact`, onClick: r, children: i })],
          })),
          (t[5] = r),
          (t[6] = a)),
      a
    );
  }
  if (p == null || Object.keys(p.blockAttributions).length === 0) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(mt, {
            children: (0, X.jsx)(f, {
              id: `codex.space.page.attribution.empty`,
              defaultMessage: `No edit details available`,
              description: `Empty state shown when a shared Page has no block-level authorship information`,
            }),
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let _, v, y, b, x, S;
  if (
    t[8] !== p.actorDisplays ||
    t[9] !== p.blockAttributions ||
    t[10] !== r ||
    t[11] !== s ||
    t[12] !== o ||
    t[13] !== c ||
    t[14] !== i ||
    t[15] !== u
  ) {
    _ = Object.entries(p.blockAttributions).filter(Ht).sort(Vt);
    let e = _.slice(0, u),
      a;
    t[22] !== o || t[23] !== c
      ? ((a = (e) => {
          let [, t] = e,
            { unit: n, value: r } = De(t.changed_at, c);
          return o.formatRelativeTime(-r, n, { numeric: `always`, style: `narrow` });
        }),
        (t[22] = o),
        (t[23] = c),
        (t[24] = a))
      : (a = t[24]);
    let d = e.map(a),
      m = Lt(e.map(Bt), p.blockAttributions),
      h = r == null ? void 0 : me(r),
      g = h == null ? void 0 : new Set(h.order.toArray());
    x = `flex flex-col gap-4`;
    let C = `${s}-go-to-section`,
      w;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, X.jsx)(f, {
          id: `codex.space.page.activity.goToSection`,
          defaultMessage: `Go to section`,
          description: `Tooltip for the action that scrolls the Page to the section shown in an edit preview`,
        })),
        (t[25] = w))
      : (w = t[25]),
      t[26] === C
        ? (S = t[27])
        : ((S = (0, X.jsx)(`span`, { id: C, className: `sr-only`, children: w })), (t[26] = C), (t[27] = S)),
      (v = `flex flex-col gap-5`),
      t[28] === o
        ? (y = t[29])
        : ((y = o.formatMessage({
            id: `codex.space.page.activity.recentSections`,
            defaultMessage: `Recently edited sections`,
            description: `Accessible label for the Page edits list, which shows the latest edit to each section rather than a complete version history`,
          })),
          (t[28] = o),
          (t[29] = y)),
      (b = m.map((t) => {
        let { attribution: r, blockId: a, index: c, endIndex: u } = t,
          m = p.actorDisplays.find((e) => e.account_user_id === r.actor.account_user_id)?.display_name,
          _ = r.actor.actor_type === `agent` && r.actor.agent_kind === `o`,
          v = r.actor.actor_type === `user` && m != null ? r.actor.account_user_id : null,
          y =
            r.actor.actor_type === `agent` && m != null
              ? o.formatMessage(
                  {
                    id: `codex.space.page.attribution.authorizedAgent`,
                    defaultMessage: `AI agent authorized by {name}`,
                    description: `Label for a Page block edited by an AI agent acting with permission from the named user; name identifies who authorized the agent, not the direct editor`,
                  },
                  { name: m },
                )
              : (m ??
                o.formatMessage(
                  {
                    id: `codex.space.page.attribution.actor`,
                    defaultMessage: `{type, select, agent {AI agent} system {System} user {A collaborator} other {Another contributor}}`,
                    description: `Display label for the person, AI agent, system, or unknown actor that last edited a shared Page block when a personal display name is unavailable`,
                  },
                  { type: r.actor.actor_type },
                )),
          b;
        return (
          (b = _
            ? (0, X.jsx)(`img`, {
                className: `block size-6 object-contain`,
                alt: ``,
                "aria-hidden": !0,
                draggable: !1,
                src: je,
              })
            : r.actor.actor_type === `agent`
              ? (0, X.jsx)(I, { "aria-hidden": !0 })
              : (0, X.jsx)(ut, {
                  accountUserId: v,
                  label: y,
                  children: (0, X.jsx)(ct, { accountUserId: v, name: y, size: `sm` }),
                })),
          (0, X.jsx)(
            `li`,
            {
              className: `flex flex-col`,
              children: (0, X.jsx)(ye, {
                size: `compact`,
                avatar: b,
                label: (0, X.jsx)(ut, {
                  accountUserId: v,
                  label: y,
                  children: (0, X.jsx)(`span`, {
                    className: `block wrap-break-word whitespace-normal`,
                    title: _ ? void 0 : y,
                    children: _ ? (0, X.jsx)(gt, { ownerName: m }) : y,
                  }),
                }),
                trailingContent: null,
                children: (0, X.jsx)(`ul`, {
                  className: `flex flex-col`,
                  children: e.slice(c, u + 1).map((e, t) => {
                    let [r, a] = e,
                      u = h == null || !g?.has(r) ? void 0 : Me(h, r),
                      p = u?.text.toJSON(),
                      m = Wt(p, o),
                      _ = u != null && i != null,
                      v = d[c + t],
                      y = v === d[c + t - 1],
                      b = (0, X.jsxs)(`span`, {
                        className: `flex w-full items-start gap-3 py-1.5`,
                        children: [
                          (0, X.jsx)(`span`, {
                            id: `${s}-${r}`,
                            className: `line-clamp-2 min-w-0 flex-1 text-start text-sm wrap-break-word whitespace-normal text-secondary`,
                            title: m,
                            children: m,
                          }),
                          (0, X.jsxs)(`span`, {
                            className: `flex shrink-0 items-center gap-1 text-xs text-secondary`,
                            children: [
                              (0, X.jsx)(`time`, {
                                className: `shrink-0 tabular-nums`,
                                dateTime: a.changed_at,
                                title: o.formatDate(a.changed_at, {
                                  dateStyle: `medium`,
                                  timeStyle: `short`,
                                }),
                                children: (0, X.jsx)(`span`, {
                                  className: y ? `opacity-0` : void 0,
                                  children: v,
                                }),
                              }),
                              _
                                ? (0, X.jsx)(l, {
                                    className: `opacity-0 group-hover/activity-section:opacity-100 group-focus-visible/activity-section:opacity-100`,
                                  })
                                : null,
                            ],
                          }),
                        ],
                      });
                    return (0, X.jsx)(
                      `li`,
                      {
                        children: _
                          ? (0, X.jsx)(U, {
                              tooltipContent: (0, X.jsx)(f, {
                                id: `codex.space.page.activity.goToSection`,
                                defaultMessage: `Go to section`,
                                description: `Tooltip for the action that scrolls the Page to the section shown in an edit preview`,
                              }),
                              children: (0, X.jsx)(n, {
                                className: `group/activity-section w-full`,
                                color: `ghostMuted`,
                                size: `inline`,
                                onClick: () => i(r),
                                "aria-labelledby": `${s}-go-to-section ${s}-${r}`,
                                children: b,
                              }),
                            })
                          : (0, X.jsx)(`div`, { className: `flex flex-col gap-1`, children: b }),
                      },
                      r,
                    );
                  }),
                }),
              }),
            },
            a,
          )
        );
      })),
      (t[8] = p.actorDisplays),
      (t[9] = p.blockAttributions),
      (t[10] = r),
      (t[11] = s),
      (t[12] = o),
      (t[13] = c),
      (t[14] = i),
      (t[15] = u),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = x),
      (t[21] = S));
  } else ((_ = t[16]), (v = t[17]), (y = t[18]), (b = t[19]), (x = t[20]), (S = t[21]));
  let C;
  t[30] !== v || t[31] !== y || t[32] !== b
    ? ((C = (0, X.jsx)(`ul`, { className: v, "aria-label": y, children: b })),
      (t[30] = v),
      (t[31] = y),
      (t[32] = b),
      (t[33] = C))
    : (C = t[33]);
  let w;
  t[34] !== _.length || t[35] !== u
    ? ((w =
        _.length > u
          ? (0, X.jsx)(n, {
              className: `shrink-0 justify-center`,
              color: `ghost`,
              size: `compact`,
              onClick: () => d(u + 20),
              children: (0, X.jsx)(f, {
                id: `codex.space.page.activity.moreEdits`,
                defaultMessage: `Show more`,
                description: `Button that reveals more recently edited sections in the Page activity panel`,
              }),
            })
          : null),
      (t[34] = _.length),
      (t[35] = u),
      (t[36] = w))
    : (w = t[36]);
  let T;
  return (
    t[37] !== x || t[38] !== S || t[39] !== C || t[40] !== w
      ? ((T = (0, X.jsxs)(`div`, { className: x, children: [S, C, w] })),
        (t[37] = x),
        (t[38] = S),
        (t[39] = C),
        (t[40] = w),
        (t[41] = T))
      : (T = t[41]),
    T
  );
}
function Bt(e) {
  let [t] = e;
  return t;
}
function Vt(e, t) {
  let [, n] = e,
    [, r] = t;
  return r.changed_at.localeCompare(n.changed_at);
}
function Ht(e) {
  let [, t] = e;
  return Number.isFinite(Date.parse(t.changed_at));
}
function Ut(e) {
  return (0, X.jsx)(
    `div`,
    {
      "aria-hidden": !0,
      className: `flex flex-col`,
      children: (0, X.jsx)(ye, {
        size: `compact`,
        avatar: (0, X.jsx)(`div`, {
          className: `size-6 shrink-0 overflow-hidden rounded-full`,
          children: (0, X.jsx)(Oe, { size: `fill` }),
        }),
        label: (0, X.jsx)(Oe, { className: `w-1/2`, size: `sm` }),
        trailingContent: null,
        children: (0, X.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            (0, X.jsx)(fe, { className: `min-w-0 flex-1`, lines: 2, seed: `page-edits-${e}` }),
            (0, X.jsx)(Oe, { className: `w-12 shrink-0`, size: `sm` }),
          ],
        }),
      }),
    },
    e,
  );
}
function Wt(e, t) {
  if (e == null)
    return t.formatMessage({
      id: `codex.space.page.activity.unavailableSection`,
      defaultMessage: `Section unavailable`,
      description: `Edit preview when the section is no longer available in the current Page`,
    });
  let n = e.replace(/^(?:[ \t]*\r?\n)+/, ``).split(
      `
`,
      2,
    ).join(`
`),
    r = s(n, { extensions: [k()], mdastExtensions: [M()] }).children[0];
  return r?.type === `table` || r?.type === `code` || r?.type === `thematicBreak` || r?.type === `html`
    ? t.formatMessage(
        {
          id: `codex.space.page.activity.structuredSectionExcerpt`,
          defaultMessage: `{type, select, table {Table} code {Code block} thematicBreak {Divider} html {HTML block} other {Section}}`,
          description: `Plain-string edit preview used in a section link and its tooltip instead of flattening table cells, code, or HTML`,
        },
        { type: r.type },
      )
    : ke(n.slice(0, r?.position?.end.offset)) ||
        (r?.type === `paragraph` && r.children.some((e) => e.type === `link` && se(e.url)?.kind === `page`)
          ? t.formatMessage({
              id: `codex.space.page.activity.pageLinkSection`,
              defaultMessage: `Page link`,
              description: `Edit preview for a Page link that has no text label`,
            })
          : r?.type === `paragraph` && r.children.some((e) => e.type === `image`)
            ? t.formatMessage({
                id: `codex.space.page.activity.imageSection`,
                defaultMessage: `Image`,
                description: `Edit preview for an image without a text description`,
              })
            : r == null
              ? t.formatMessage({
                  id: `codex.space.page.activity.emptySection`,
                  defaultMessage: `Empty section`,
                  description: `Edit preview for an available Page section with no content`,
                })
              : t.formatMessage({
                  id: `codex.space.page.activity.sectionWithoutText`,
                  defaultMessage: `Section without text`,
                  description: `Edit preview for an available section that contains no readable text`,
                }));
}
var Gt, Kt, X;
function qt() {
  return (qt = e(() => {
    ((Gt = G()),
      Xe(),
      x(),
      K(),
      r(),
      O(),
      Ne(),
      z(),
      (Kt = ue()),
      B(),
      Se(),
      W(),
      pt(),
      xe(),
      w(),
      Re(),
      L(),
      we(),
      V(),
      st(),
      lt(),
      at(),
      ht(),
      ge(),
      (X = J()));
  }))();
}
function Jt(e) {
  let t = (0, tn.c)(44),
    { pageId: r, active: i, documentType: a } = e,
    o = i === void 0 || i,
    s = a === void 0 ? `page` : a,
    c = ee(),
    l = T(),
    [u, d] = (0, nn.useState)(rn),
    p = te(_e),
    m = o && l && p != null,
    h;
  t[0] === r
    ? (h = t[1])
    : ((h = (e) => {
        let { pageParam: t, signal: n } = e;
        return Ve.safeGet(`/pages/{page_id}/views`, {
          parameters: { path: { page_id: r }, query: { cursor: t || void 0, limit: rn } },
          signal: n,
        });
      }),
      (t[0] = r),
      (t[1] = h));
  let g;
  t[2] !== p || t[3] !== r
    ? ((g = [`space`, `page-view-history`, p, r]), (t[2] = p), (t[3] = r), (t[4] = g))
    : (g = t[4]);
  let _;
  t[5] !== m || t[6] !== h || t[7] !== g
    ? ((_ = {
        enabled: m,
        getNextPageParam: en,
        initialPageParam: ``,
        queryFn: h,
        queryKey: g,
        retry: !1,
        staleTime: 0,
      }),
      (t[5] = m),
      (t[6] = h),
      (t[7] = g),
      (t[8] = _))
    : (_ = t[8]);
  let {
      data: y,
      fetchNextPage: b,
      hasNextPage: x,
      isError: S,
      isFetchingNextPage: C,
      isFetchNextPageError: w,
      isPending: E,
      refetch: D,
    } = v(_),
    O,
    k,
    A,
    j,
    M,
    N;
  if (
    t[9] !== y?.pages ||
    t[10] !== s ||
    t[11] !== c ||
    t[12] !== S ||
    t[13] !== E ||
    t[14] !== D ||
    t[15] !== u
  ) {
    N = y?.pages.flatMap($t);
    let e;
    t[22] === y?.pages ? (e = t[23]) : ((e = new Map(y?.pages.flatMap(Zt))), (t[22] = y?.pages), (t[23] = e));
    let r = e,
      i;
    t[24] === c
      ? (i = t[25])
      : ((i = c.formatMessage({
          id: `codex.space.page.viewHistory.unknownPerson`,
          defaultMessage: `Unknown person`,
          description: `Privacy-safe fallback name shown when a shared Page viewer's workspace display name is unavailable`,
        })),
        (t[24] = c),
        (t[25] = i));
    let a = i;
    ((A = `flex flex-col gap-4`),
      t[26] === E
        ? (j = t[27])
        : ((j = E
            ? (0, Z.jsxs)(`div`, {
                role: `status`,
                children: [
                  (0, Z.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Z.jsx)(f, {
                      id: `codex.space.page.viewHistory.loading`,
                      defaultMessage: `Loading…`,
                      description: `Accessible status while the list of people who viewed a shared Page is loading`,
                    }),
                  }),
                  (0, Z.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `flex flex-col gap-2`,
                    children: (0, Z.jsx)(`div`, {
                      className: `flex flex-col`,
                      children: [`w-2/3`, `w-1/2`, `w-3/4`].map(Xt),
                    }),
                  }),
                ],
              })
            : null),
          (t[26] = E),
          (t[27] = j)),
      (M =
        S && N == null
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-between gap-3`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `text-sm text-codex-description`,
                  children: (0, Z.jsx)(f, {
                    id: `codex.space.page.viewHistory.error`,
                    defaultMessage: `Could not load view history`,
                    description: `Error shown when the owner-only list of people who viewed a shared Page cannot be retrieved`,
                  }),
                }),
                (0, Z.jsx)(n, {
                  color: `secondary`,
                  size: `compact`,
                  onClick: () => {
                    D();
                  },
                  children: (0, Z.jsx)(f, {
                    id: `codex.space.page.viewHistory.retry`,
                    defaultMessage: `Try again`,
                    description: `Button that retries loading the list of people who viewed a shared Page after the request failed`,
                  }),
                }),
              ],
            })
          : null),
      (O =
        N?.length === 0
          ? (0, Z.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, Z.jsx)(f, {
                id: `codex.space.page.viewHistory.empty`,
                defaultMessage: `No views yet`,
                description: `Empty state shown when nobody has recorded a view of the current shared Page`,
              }),
            })
          : null),
      (k =
        N != null && N.length > 0
          ? (0, Z.jsx)(`div`, {
              className: `flex flex-col`,
              role: `list`,
              "aria-label": c.formatMessage(
                {
                  id: `codex.space.page.viewHistory.viewers.byDocumentType`,
                  defaultMessage: `{documentType, select, granola_presentation {Slide viewers} granola_workbook {Sheet viewers} other {Page viewers}}`,
                  description: `Accessible label for the list of people who viewed the current Page. documentType selects slide, sheet, or page for the current document.`,
                },
                { documentType: s },
              ),
              children: N.slice(0, u).map((e) => {
                let t = r.has(e.account_user_id) ? e.account_user_id : null,
                  n = r.get(e.account_user_id) ?? a;
                return (0, Z.jsx)(
                  `div`,
                  {
                    role: `listitem`,
                    children: (0, Z.jsx)(ye, {
                      size: `compact`,
                      avatar: (0, Z.jsx)(ut, {
                        accountUserId: t,
                        label: n,
                        children: (0, Z.jsx)(ct, { accountUserId: t, name: n, size: `sm` }),
                      }),
                      label: (0, Z.jsx)(ut, {
                        accountUserId: t,
                        label: n,
                        children: (0, Z.jsx)(`span`, { title: n, children: n }),
                      }),
                      trailingContent: (0, Z.jsx)(`time`, {
                        className: `shrink-0 text-xs text-secondary tabular-nums`,
                        dateTime: e.last_viewed_at,
                        title: c.formatDate(e.last_viewed_at, { dateStyle: `medium`, timeStyle: `short` }),
                        children: (0, Z.jsx)(He, { dateString: e.last_viewed_at, format: `relative` }),
                      }),
                    }),
                  },
                  e.account_user_id,
                );
              }),
            })
          : null),
      (t[9] = y?.pages),
      (t[10] = s),
      (t[11] = c),
      (t[12] = S),
      (t[13] = E),
      (t[14] = D),
      (t[15] = u),
      (t[16] = O),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = M),
      (t[21] = N));
  } else ((O = t[16]), (k = t[17]), (A = t[18]), (j = t[19]), (M = t[20]), (N = t[21]));
  let P;
  t[28] === w
    ? (P = t[29])
    : ((P = w
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-secondary`,
            role: `status`,
            children: (0, Z.jsx)(f, {
              id: `codex.space.page.viewHistory.moreError`,
              defaultMessage: `Couldn’t load more views. Try again below.`,
              description: `Message shown when loading another page of viewers fails; the existing viewers remain visible and the load-more button retries`,
            }),
          })
        : null),
      (t[28] = w),
      (t[29] = P));
  let F;
  t[30] !== b || t[31] !== x || t[32] !== C || t[33] !== N || t[34] !== u
    ? ((F =
        (N != null && N.length > u) || x
          ? (0, Z.jsx)(n, {
              className: `shrink-0 justify-center`,
              color: `ghost`,
              loading: C,
              size: `compact`,
              onClick: () => {
                N != null && N.length > u
                  ? d(N.length)
                  : b().then((e) => {
                      e.isError || d(Yt);
                    });
              },
              children: (0, Z.jsx)(f, {
                id: `codex.space.page.viewHistory.showMoreViewers`,
                defaultMessage: `Show more viewers`,
                description: `Button that reveals more people who viewed a shared Page, loading the next group when needed`,
              }),
            })
          : null),
      (t[30] = b),
      (t[31] = x),
      (t[32] = C),
      (t[33] = N),
      (t[34] = u),
      (t[35] = F))
    : (F = t[35]);
  let I;
  return (
    t[36] !== O || t[37] !== k || t[38] !== P || t[39] !== F || t[40] !== A || t[41] !== j || t[42] !== M
      ? ((I = (0, Z.jsxs)(`div`, { className: A, children: [j, M, O, k, P, F] })),
        (t[36] = O),
        (t[37] = k),
        (t[38] = P),
        (t[39] = F),
        (t[40] = A),
        (t[41] = j),
        (t[42] = M),
        (t[43] = I))
      : (I = t[43]),
    I
  );
}
function Yt(e) {
  return e + rn;
}
function Xt(e) {
  return (0, Z.jsx)(
    ye,
    {
      size: `compact`,
      avatar: (0, Z.jsx)(`span`, {
        className: `size-6 shrink-0 overflow-hidden rounded-full`,
        children: (0, Z.jsx)(Oe, { as: `span`, size: `fill` }),
      }),
      label: (0, Z.jsx)(Oe, { className: e, size: `sm` }),
      trailingContent: (0, Z.jsx)(Oe, { className: `w-12 shrink-0`, size: `sm` }),
    },
    e,
  );
}
function Zt(e) {
  return (e.actor_displays ?? []).map(Qt);
}
function Qt(e) {
  return [e.account_user_id, e.display_name];
}
function $t(e) {
  return e.items;
}
function en(e) {
  return e.next_cursor ?? void 0;
}
var tn, nn, Z, rn;
function an() {
  return (an = e(() => {
    ((tn = G()),
      g(),
      q(),
      x(),
      (nn = ue()),
      B(),
      W(),
      Te(),
      Re(),
      st(),
      lt(),
      at(),
      ge(),
      et(),
      (Z = J()),
      (rn = 20));
  }))();
}
function on(e) {
  let t = (0, sn.c)(8),
    {
      animation: n,
      open: r,
      documentType: i,
      versions: o,
      canViewEdits: s,
      canViewHistory: c,
      document: l,
      headerOverlay: u,
      view: d,
      onViewChange: m,
      onClose: g,
      onRevealSection: v,
      pageId: y,
    } = e,
    b = r === void 0 || r,
    x = i === void 0 ? `page` : i,
    S = s === void 0 || s,
    w = u !== void 0 && u,
    T = ee(),
    E = (0, cn.useId)(),
    D = (0, cn.useRef)(null),
    O = (0, cn.useRef)(!1),
    k = te(Ze),
    A = [`views`, `edits`, `versions`].filter(
      (e) => (e === `views` && c) || (e === `edits` && S) || (e === `versions` && o != null),
    ),
    j = A.includes(d) ? d : A[0],
    M;
  t[0] === d ? (M = t[1]) : ((M = [d]), (t[0] = d), (t[1] = M));
  let [N, P] = (0, cn.useState)(M);
  j != null && !N.includes(j) && P([...N, j]);
  let F = m != null && A.length > 1,
    I,
    ne;
  if (
    (t[2] === c
      ? ((I = t[3]), (ne = t[4]))
      : ((I = () => {
          !c &&
            O.current &&
            ((O.current = !1),
            D.current
              ?.querySelector(
                `[role="tab"][aria-selected="true"], [data-page-activity-view]:not([hidden]) :is([role="tabpanel"], [role="region"])`,
              )
              ?.focus());
        }),
        (ne = [c]),
        (t[2] = c),
        (t[3] = I),
        (t[4] = ne)),
    (0, cn.useLayoutEffect)(I, ne),
    j == null)
  )
    return null;
  let L = C,
    re =
      b &&
      (0, Q.jsx)(Mt, {
        animation: n,
        label: T.formatMessage($.title, { documentType: x }),
        onClose: g,
        storageKey: `pages:activity-panel-width`,
        variant: `glass`,
        children: (0, Q.jsx)(`div`, {
          ref: D,
          "data-page-activity-panel": !0,
          className: ie(`h-full min-h-0`, w && `pt-[var(--viewer-header-height)]`),
          onFocusCapture: (e) => {
            O.current =
              e.target.id === `${E}-views-tab` ||
              e.target.closest(`[data-page-activity-view="views"]`) != null;
          },
          onBlurCapture: (e) => {
            e.currentTarget.contains(e.relatedTarget) || (O.current = !1);
          },
          children: (0, Q.jsx)(`div`, {
            className: `flex h-full min-h-0 p-2 pt-px`,
            children: (0, Q.jsxs)(a, {
              className: `@container/app-shell-detail-panel flex min-h-0 flex-1 flex-col overflow-hidden text-default`,
              variant: `island`,
              children: [
                (0, Q.jsx)(p, {
                  title: (0, Q.jsx)(f, { ...$.title, values: { documentType: x } }),
                  closeLabel: T.formatMessage(
                    {
                      id: `codex.space.page.activity.close.byDocumentType`,
                      defaultMessage: `{documentType, select, granola_presentation {Close slide activity} granola_workbook {Close sheet activity} other {Close page activity}}`,
                      description: `Accessible label for closing the Page activity side panel. documentType selects slide, sheet, or page for the current document.`,
                    },
                    { documentType: x },
                  ),
                  onClose: g,
                }),
                F &&
                  (0, Q.jsx)(`div`, {
                    className: `flex shrink-0 flex-col gap-2 px-toolbar pb-3`,
                    children: (0, Q.jsx)(h, {
                      ariaLabel: T.formatMessage($.title, { documentType: x }),
                      onSelect: m,
                      selectedKey: j,
                      tabs: A.map((e) => ({
                        key: e,
                        name: (0, Q.jsx)(f, { ...$[e] }),
                        panelId: `${E}-${e}`,
                      })),
                    }),
                  }),
                A.map((e) =>
                  (0, Q.jsx)(
                    `div`,
                    {
                      className: j === e ? `flex min-h-0 flex-1 flex-col` : `hidden`,
                      hidden: j !== e,
                      inert: j !== e,
                      "data-page-activity-view": e,
                      children:
                        e === `versions`
                          ? (0, Q.jsx)(`div`, {
                              id: `${E}-${e}`,
                              className: `flex min-h-0 flex-1 flex-col`,
                              role: F ? `tabpanel` : `region`,
                              "aria-labelledby": F ? `${E}-${e}-tab` : void 0,
                              "aria-label": F ? void 0 : T.formatMessage($[e]),
                              tabIndex: 0,
                              children: N.includes(e) ? o : null,
                            })
                          : (0, Q.jsx)(_, {
                              className: `relative grid min-h-0 flex-1 overflow-hidden`,
                              fade: `mask`,
                              scrollClassName: `min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring`,
                              scrollProps: {
                                id: `${E}-${e}`,
                                role: F ? `tabpanel` : `region`,
                                "aria-labelledby": F ? `${E}-${e}-tab` : void 0,
                                "aria-label": F ? void 0 : T.formatMessage($[e]),
                                tabIndex: 0,
                                style: { scrollPaddingBottom: k },
                              },
                              children: (0, Q.jsx)(`div`, {
                                style: { paddingBottom: k },
                                children:
                                  N.includes(e) &&
                                  (e === `views`
                                    ? (0, Q.jsx)(Jt, { documentType: x, active: j === `views`, pageId: y })
                                    : (0, Q.jsx)(zt, { document: l, onRevealSection: v, pageId: y })),
                              }),
                            }),
                    },
                    e,
                  ),
                ),
              ],
            }),
          }),
        }),
      }),
    R;
  return (
    t[5] !== L || t[6] !== re
      ? ((R = (0, Q.jsx)(L, { propagate: !0, children: re })), (t[5] = L), (t[6] = re), (t[7] = R))
      : (R = t[7]),
    R
  );
}
var sn, cn, Q, $;
function ln() {
  return (ln = e(() => {
    ((sn = G()),
      N(),
      c(),
      x(),
      (cn = ue()),
      B(),
      It(),
      D(),
      b(),
      qt(),
      an(),
      Ke(),
      o(),
      H(),
      (Q = J()),
      ($ = i({
        title: {
          id: `codex.space.page.activity.title.byDocumentType`,
          defaultMessage: `{documentType, select, granola_presentation {Slide activity} granola_workbook {Sheet activity} other {Page activity}}`,
          description: `Heading for the side panel containing versions, edits, and views of the current Page. documentType selects slide, sheet, or page for the current document.`,
        },
        views: {
          id: `codex.space.page.activity.views`,
          defaultMessage: `Views`,
          description: `Tab showing the people who viewed the current Page`,
        },
        edits: {
          id: `codex.space.page.activity.edits`,
          defaultMessage: `Edits`,
          description: `Tab showing who last edited each section of the current Page`,
        },
        versions: {
          id: `codex.space.page.activity.versions`,
          defaultMessage: `Versions`,
          description: `Tab showing saved Page versions and comparison controls`,
        },
      })));
  }))();
}
export { jt as a, xt as c, Rt as i, _t as l, ln as n, St as o, Lt as r, yt as s, on as t, vt as u };
//# sourceMappingURL=page-activity-panel-4c5c6ff94e28.js.map
