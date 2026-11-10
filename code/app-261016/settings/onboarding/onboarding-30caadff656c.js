import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CTt as r,
  EOt as i,
  FBt as a,
  FTt as o,
  ITt as s,
  JO as c,
  KO as l,
  LNt as u,
  MNt as d,
  MTt as f,
  NNt as p,
  NSt as m,
  OOt as h,
  PBt as g,
  PSt as _,
  Qst as v,
  SSt as y,
  TOt as b,
  Uz as x,
  VSt as S,
  WO as C,
  Wz as w,
  XOt as T,
  Y3 as E,
  Z3 as D,
  ZSt as O,
  bB as ee,
  eB as k,
  gCt as A,
  hjt as j,
  iCt as M,
  jTt as N,
  mCt as P,
  mjt as te,
  nCt as F,
  okt as I,
  qO as ne,
  tB as L,
  tkt as R,
  vB as re,
  wTt as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as ae,
  ALr as oe,
  Cmn as se,
  D5n as ce,
  Dfn as le,
  Inn as ue,
  Ix as de,
  Lnn as fe,
  N5n as pe,
  Nmt as me,
  Ofn as he,
  Px as ge,
  TDn as _e,
  Tfn as z,
  Ycr as ve,
  a$t as ye,
  akn as be,
  bmn as xe,
  dWt as B,
  dmn as Se,
  fWt as Ce,
  fht as we,
  fmn as Te,
  g9t as Ee,
  h9t as De,
  i$t as Oe,
  iRr as ke,
  kLr as Ae,
  lBr as je,
  lWt as Me,
  m9t as Ne,
  nkn as Pe,
  t$t as Fe,
  tyr as Ie,
  uBr as Le,
  wDn as Re,
  xDn as ze,
  xMr as V,
  xmn as Be,
  yMr as H,
} from "./app-initial-ad16eaadf81f.js";
import { Lb as Ve, Rb as He } from "./app-primary-3e00728c2a4c.js";
import { n as Ue, t as We } from "./modal-2b04eeed83a6.js";
import { n as Ge, t as Ke } from "./template-gallery-dialog-6d73d12ee6bb.js";
import { a as qe, i as Je, n as Ye, o as Xe, r as Ze, s as Qe, t as $e } from "./assets-4f7817c757db.js";
import { a as et, c as tt, i as nt, n as rt, r as it, t as at } from "./introduction-state-b3b2f3b6ef19.js";
function ot({
  x: e,
  y: t,
  width: n,
  height: r,
  viewportWidth: i,
  viewportHeight: a,
  obstacles: o,
  protectedRegions: s = [],
  preferred: c,
}) {
  let l = (e, t, i) =>
      Math.max(0, Math.min(e + n, i.x + i.width) - Math.max(e, i.x)) *
      Math.max(0, Math.min(t + r, i.y + i.height) - Math.max(t, i.y)),
    u = [
      [1, 1],
      [-1, 1],
      [1, -1],
      [-1, -1],
    ].map(([c, u], d) => {
      let f = e + (c > 0 ? 8 : -n - 8),
        p = t + (u > 0 ? 8 : -r - 8);
      for (let e of s) {
        if (l(f, p, e) === 0) continue;
        let t = c > 0 ? e.x + e.width + 8 : e.x - n - 8,
          i = u > 0 ? e.y + e.height + 8 : e.y - r - 8;
        Math.abs(t - f) < Math.abs(i - p) ? (f = t) : (p = i);
      }
      return (
        (f = Math.max(4, Math.min(i - n - 4, f))),
        (p = Math.max(4, Math.min(a - r - 4, p))),
        {
          x: f,
          y: p,
          index: d,
          protectedOverlap: s.reduce((e, t) => e + l(f, p, t), 0),
          score:
            o.reduce((e, t) => e + l(f, p, t), 0) * 0.15 +
            Math.hypot(f + (c > 0 ? 0 : n) - e, p + (u > 0 ? 0 : r) - t),
        }
      );
    }),
    d = u[c] ?? u[0];
  for (let e of u)
    (e.protectedOverlap < d.protectedOverlap - 1 ||
      (e.protectedOverlap <= d.protectedOverlap && e.score + 80 < d.score)) &&
      (d = e);
  return { x: d.x, y: d.y, index: d.index };
}
function st(e, t, n = `top-left`) {
  let r = t.x - e.x - e.width / 2,
    i = t.y - e.y - e.height / 2,
    a = Math.abs(r) < 6 ? n.endsWith(`right`) : r > 0;
  return `${(Math.abs(i) < 6 ? n.startsWith(`bottom`) : i > 0) ? `bottom` : `top`}-${a ? `right` : `left`}`;
}
function ct(e) {
  let t = e.querySelector(`[data-pointer-badge]`);
  if (t?.dataset.pointerClientX == null || t.dataset.pointerClientY == null) return;
  t.hidden = !1;
  let n = e.getBoundingClientRect(),
    r = Number(t.dataset.pointerClientX),
    i = Number(t.dataset.pointerClientY);
  if (r < n.left || r >= n.right || i < n.top || i >= n.bottom) {
    lt(t);
    return;
  }
  let a = Math.max(
      4,
      Math.min(e.clientWidth - t.offsetWidth - 4, ((r - n.left) * e.clientWidth) / n.width + 12),
    ),
    o = Math.max(
      4,
      Math.min(e.clientHeight - t.offsetHeight - 4, ((i - n.top) * e.clientHeight) / n.height + 18),
    );
  t.style.transform = `translate(${a}px, ${o}px)`;
}
function lt(e) {
  ((e.hidden = !0), delete e.dataset.pointerClientX, delete e.dataset.pointerClientY);
}
function ut(e, t, n) {
  let r = U(e, `[data-work-samples]`),
    i = Array.from(r.querySelectorAll(`[data-work-sample]`)).map((e) => ({
      element: e,
      document: U(e, `[data-artwork-document]`),
      corners: Array.from(e.querySelectorAll(`[data-corner-probe]`)),
      geometry: { tl: { x: 0, y: 0 }, tr: { x: 0, y: 0 }, bl: { x: 0, y: 0 }, center: { x: 0, y: 0 } },
    })),
    a = new Map(Array.from(r.querySelectorAll(`[data-editable]`)).map((e) => [e.dataset.editable, e])),
    o = new Map(
      Array.from(a.values()).map((e) => [e, e.querySelector(`[data-editable-copy]`)?.textContent ?? ``]),
    ),
    s = Array.from(t.querySelectorAll(`[data-collaborator]`)).map((e, t) => ({
      element: e,
      color: t === 0 ? `#60b4ff` : getComputedStyle(e).getPropertyValue(`--cursor-color`).trim(),
      asset: t === 4 ? ht : t % 4,
      slot: +(t === 4),
      phase: t * 1.7,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      offset: { x: 0, y: 0 },
      trip: null,
      job: null,
      painted: null,
      destination: null,
      placement: 0,
      nudge: null,
      nudgeIndex: 0,
      nextNudge: 1.5 + ((t * 1.7) % 2.3),
    })),
    c = new Intl.Segmenter(n, { granularity: `grapheme` }),
    l = new Map(),
    u = [0, 0, 0, 0],
    d = s.slice(0, 4),
    f = [],
    p = 0,
    m = 5.8,
    h = 4,
    g = 0,
    _ = 0,
    v = 0,
    y = !1,
    b = e.getBoundingClientRect();
  function x(e) {
    let t = a.get(e);
    if (t == null) throw Error(`Missing Space artwork field: ` + e);
    return t;
  }
  function S(e) {
    let t = C(e);
    return { x: t.x + t.width, y: t.y + t.height };
  }
  function C(e) {
    let t = e.getBoundingClientRect(),
      n = _ / (b.width || 1),
      r = v / (b.height || 1);
    return { x: (t.left - b.left) * n, y: (t.top - b.top) * r, width: t.width * n, height: t.height * r };
  }
  function w() {
    b = e.getBoundingClientRect();
    for (let e of i) {
      let [t, n, r] = e.corners.map(S);
      e.geometry = { tl: t, tr: n, bl: r, center: { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 } };
    }
  }
  function T(e) {
    if (e.job != null) {
      let t = S(e.job.pin);
      if (e.job.text) {
        let n = U(e.job.element, `[data-editable-copy]`).getClientRects(),
          r = n[n.length - 1];
        r != null &&
          (t = {
            x: ((r.right - b.left) * _) / (b.width || 1),
            y: ((r.bottom - b.top) * v) / (b.height || 1),
          });
      }
      if (e.job.paletteReady && e.job.palette != null) {
        let n = U(e.job.palette, `i:nth-child(2)`).getBoundingClientRect();
        t = {
          x: ((n.left + n.width / 2 - b.left) * _) / (b.width || 1),
          y: ((n.top + n.height / 2 - b.top) * v) / (b.height || 1),
        };
      }
      return t;
    }
    let { tl: t, tr: n, bl: r, center: a } = i[e.asset].geometry,
      [o, s] = [
        [1, 1],
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 0.5],
      ][e.slot],
      c = t.x + (n.x - t.x) * o + (r.x - t.x) * s,
      l = t.y + (n.y - t.y) * o + (r.y - t.y) * s,
      u = a.x - c,
      d = a.y - l,
      f = Math.hypot(u, d) || 1;
    return { x: c + (u / f) * 13 + e.offset.x, y: l + (d / f) * 13 + e.offset.y };
  }
  function E(e, t) {
    let n = T(e),
      r = e.painted ?? e;
    ((e.destination = null),
      (e.trip = {
        start: p,
        x: r.x,
        y: r.y,
        duration: t ?? 0.38 + Math.min(0.62, Math.hypot(n.x - r.x, n.y - r.y) / 1700),
      }));
  }
  function D(e, t) {
    return e === s[0] || t === ht || s.every((n) => n === e || n === s[0] || n.asset !== t);
  }
  function O(e, t, n) {
    let r = s.filter((n) => n !== e && n.asset === t).map((e) => e.slot);
    ((e.asset = t), (e.slot = [0, 1, 2, 3, 4].find((e) => !r.includes(e)) ?? 0), E(e, n));
  }
  function ee(e) {
    ((e.selected = !0),
      (e.element.dataset.editing = `true`),
      e.text && (e.element.dataset.selected = `true`));
  }
  function k(e, t, n = !1) {
    let r = gt[e],
      [a, s] = r[u[e]++ % r.length],
      p = x(s),
      m = i[e],
      h = l.get(s) ?? 0;
    l.set(s, h + 1);
    let g = 1,
      _ = null,
      v;
    switch (a) {
      case `text`: {
        let e = U(p, `[data-editable-copy]`),
          t = (h % 2 == 0 ? p.dataset.revision : o.get(p)) ?? ``,
          n = Array.from(c.segment(t), (e) => e.segment);
        g = n.length > 40 ? 4.3 : n.length > 20 ? 3.5 : n.length > 12 ? 2.9 : 2.1;
        let r = 0,
          i = n.map((e, t) => {
            let n = 0.72 + ((t * 7) % 5) * 0.11;
            return (/\s/u.test(e) ? (n = 1.65) : /[.,]/u.test(e) && (n = 2.8), (r += n), r);
          });
        v = (t) => {
          let a = t === 1 ? n.length : i.filter((e) => e / r <= t).length,
            o = n.slice(0, a).join(``);
          ft(e, o);
        };
        break;
      }
      case `color`: {
        let t = m.document.style.getPropertyValue(`--paper-color`) || (e === 0 ? `#ff5b35` : `#bfb8dc`),
          n = e === 0 ? [`#ff784f`, `#ff5b35`][h % 2] : [`#d9cfbd`, `#bfb8dc`][h % 2];
        ((_ = U(m.document, `[data-palette]`)),
          delete _.dataset.picked,
          delete _.dataset.pressed,
          Array.from(_.querySelectorAll(`i`)).forEach((e, r) => dt(e, `--swatch`, [t, n, `#cfc4f4`][r])),
          (g = 0.8),
          (v = (e) => {
            let r =
              `#` +
              [1, 3, 5]
                .map((r) =>
                  Math.round(W(parseInt(t.slice(r, r + 2), 16), parseInt(n.slice(r, r + 2), 16), pt(e)))
                    .toString(16)
                    .padStart(2, `0`),
                )
                .join(``);
            dt(m.document, `--paper-color`, r);
          }));
        break;
      }
      case `products`: {
        let e = [0, 1, 2].map((e) => x(`product-` + e)),
          t = e.map((e, t) => {
            let n = e.style.translate;
            return n === `` ? t * 128 : parseFloat(n);
          }),
          n = Number(s.slice(-1)),
          r = [0, 1, 2].sort((e, n) => t[e] - t[n]),
          i = r.indexOf(n);
        (r.splice(i, 1), r.splice(i === 0 ? 2 : 0, 0, n));
        let a = e.map((e, t) => r.indexOf(t) * 128);
        ((g = 1.65), (v = (n) => e.forEach((e, r) => dt(e, `translate`, W(t[r], a[r], mt(n)) + `px`))));
        break;
      }
      case `image`: {
        let e = U(p, `[data-artwork-image]`),
          t = parseFloat(e.style.scale) || 1,
          n = t > 1 ? 1 : 1.08;
        v = (r) => {
          dt(e, `scale`, String(W(t, n, mt(r))));
        };
        break;
      }
    }
    let y = {
      asset: e,
      person: t,
      element: p,
      pin: U(p, `[data-edit-pin]`),
      palette: _,
      paletteReady: !1,
      age: 0,
      duration: g,
      selected: !1,
      text: a === `text`,
      apply: v,
    };
    (f.push(y),
      (d[e] = t),
      (t.asset = e),
      (t.slot = 0),
      (t.job = y),
      (t.offset = { x: 0, y: 0 }),
      (t.nudge = null),
      (t.element.dataset.editing = `true`),
      (p.dataset.editTarget = `true`),
      p.style.setProperty(`--editor`, t.color),
      E(t),
      n && ((t.trip = null), (y.age = 0.24), ee(y)));
  }
  function A(e, t = !0) {
    (e.apply(1),
      delete e.element.dataset.editing,
      delete e.element.dataset.editTarget,
      delete e.element.dataset.selected,
      delete e.element.dataset.typing,
      e.palette != null &&
        (delete e.palette.dataset.open, delete e.palette.dataset.picked, delete e.palette.dataset.pressed),
      f.splice(f.indexOf(e), 1));
    let n = e.person;
    ((n.job = null), (n.element.dataset.editing = `false`), t && O(n, n.asset, 0.48));
  }
  function j(e = !1) {
    for (; f.length > 0;) A(f[0]);
    if (e) {
      for (let e of s) ((e.trip = null), (e.nudge = null), (e.offset = { x: 0, y: 0 }));
      N();
    }
  }
  function M() {
    ((_ = e.clientWidth), (v = e.clientHeight), (y = _ > 0 && (_ <= 540 || v <= 460)), (r.inert = y));
    for (let e of s) ((e.width = e.element.offsetWidth), (e.height = e.element.offsetHeight));
    for (let e of i) {
      let t =
        (e.element.clientWidth / Number(e.document.dataset.documentWidth)) *
        (parseFloat(getComputedStyle(U(e.element, `[data-drift]`)).scale) || 1);
      (dt(e.document, `--selection-stroke`, 1.15 / Math.max(0.1, t) + `px`),
        dt(e.document, `--handle-size`, 4 / Math.max(0.1, t) + `px`));
    }
    y ? j(!0) : N();
  }
  function N() {
    (w(), P(0, !0));
  }
  function P(e, t = !1) {
    let n = f.flatMap((e) => [C(e.element), ...(e.paletteReady && e.palette != null ? [C(e.palette)] : [])]),
      r = s.map((e) => ({ x: e.x, y: e.y, width: e.width, height: e.height })),
      i = s.map(T);
    s.forEach((a, o) => {
      let s = i[o],
        c = ot({
          ...s,
          width: a.width,
          height: a.height,
          viewportWidth: _,
          viewportHeight: v,
          obstacles: r.slice(0, o),
          protectedRegions: n,
          preferred: a.placement,
        });
      a.placement = c.index;
      let l = 1 - Math.exp(-e / 0.09);
      if (
        ((a.destination =
          a.destination == null || t ? c : { x: W(a.destination.x, c.x, l), y: W(a.destination.y, c.y, l) }),
        a.painted == null || t)
      )
        ((a.x = c.x), (a.y = c.y));
      else if (a.trip != null) {
        let e = Math.min(1, Math.max(0, (p - a.trip.start) / a.trip.duration)),
          t = e ** 3 * (e * (e * 6 - 15) + 10);
        ((a.x = W(a.trip.x, a.destination.x, t)),
          (a.y = W(a.trip.y, a.destination.y, t)),
          e === 1 && ((a.trip = null), (a.nextNudge = p + 1.2 + (a.phase % 1.5))));
      } else ((a.x = W(a.x, c.x, l)), (a.y = W(a.y, c.y, l)));
      a.painted = { x: a.x, y: a.y };
      let u = st({ ...a.painted, width: a.width, height: a.height }, s, a.element.dataset.pointerCorner);
      (a.element.dataset.pointerCorner !== u && (a.element.dataset.pointerCorner = u),
        dt(a.element, `transform`, `translate3d(${a.x}px, ${a.y}px, 0px)`));
      let d = String(a.asset);
      a.element.dataset.asset !== d && (a.element.dataset.asset = d);
      let f = String(a.trip != null);
      a.element.dataset.traveling !== f && (a.element.dataset.traveling = f);
    });
  }
  function te(e) {
    let t = Math.min(0.1, Math.max(0, e));
    if (((p += t), w(), y)) j();
    else {
      if (f.length === 0) {
        for (let e of s) e !== s[0] && !d.includes(e) && e.asset !== ht && O(e, ht);
        i.forEach((e, t) => k(t, d[t], !0));
      }
      for (let e of f)
        if (e.person.trip == null && i[e.asset].element.dataset.dragging !== `true`) {
          if (
            ((e.age += t),
            e.age >= 0.22 && !e.selected && ee(e),
            e.palette != null && !e.paletteReady && e.age > 0.35)
          ) {
            if (f.some((t) => t !== e && (!t.selected || t.person.trip != null || t.paletteReady))) {
              e.age = 0.35;
              continue;
            }
            ((e.palette.dataset.open = `true`), (e.paletteReady = !0), E(e.person));
            continue;
          }
          if (e.palette != null && e.paletteReady && e.age >= 0.48) {
            e.palette.dataset.picked !== `true` && (e.palette.dataset.picked = `true`);
            let t = String(e.age < 0.64);
            e.palette.dataset.pressed !== t && (e.palette.dataset.pressed = t);
          }
          e.age >= 0.7 &&
            (e.text &&
              e.element.dataset.typing !== `true` &&
              (delete e.element.dataset.selected, (e.element.dataset.typing = `true`)),
            e.apply(Math.min(1, (e.age - 0.7) / e.duration)));
        }
      let e = f.find(
        (e) =>
          e.age > 0.7 + e.duration + 0.35 &&
          e.person.trip == null &&
          i[e.asset].element.dataset.dragging !== `true` &&
          f.every(
            (t) =>
              t === e ||
              (t.selected && t.person.trip == null && i[t.asset].element.dataset.dragging !== `true`),
          ),
      );
      if (e != null) {
        let t = p >= m ? s.find((t) => t.job == null && t.trip == null && D(t, e.asset)) : null,
          n = t ?? e.person;
        (A(e, t != null), t != null && (m = p + 5.8), k(e.asset, n));
      }
    }
    if (y && p > h) {
      let [e, t] = [
          [0, 1],
          [1, 3],
          [2, 3],
          [3, 2],
          [3, 1],
          [1, 0],
        ][g % 6],
        n = s.find((n) => n.asset === e && n.trip == null && D(n, t));
      (n != null && O(n, t), g++, (h = p + 6.5));
    }
    for (let e of s)
      if (e.job == null && e.trip == null) {
        if (p > e.nextNudge && e.nudge == null) {
          let t = e.phase + ++e.nudgeIndex * 2.4;
          ((e.nudge = {
            start: p,
            ...e.offset,
            toX: Math.sin(t) * 3,
            toY: Math.cos(t * 0.8) * 2,
            duration: 0.24 + (e.nudgeIndex % 3) * 0.04,
          }),
            (e.nextNudge = p + 2.2 + ((e.phase + e.nudgeIndex) % 1.8)));
        }
        if (e.nudge != null) {
          let t = e.nudge,
            n = Math.min(1, (p - t.start) / t.duration);
          ((e.offset = { x: W(t.x, t.toX, pt(n)), y: W(t.y, t.toY, pt(n)) }), n === 1 && (e.nudge = null));
        }
      }
    P(t);
  }
  M();
  let F = new ResizeObserver(M);
  return (
    F.observe(e),
    i.forEach((e) => F.observe(e.element)),
    s.forEach((e) => F.observe(e.element)),
    {
      tick: te,
      position: N,
      finishEdits: j,
      dispose: () => {
        (F.disconnect(), j(), (r.inert = !1));
      },
    }
  );
}
function U(e, t) {
  let n = e.querySelector(t);
  if (n == null) throw Error(`Missing Space animation element: ` + t);
  return n;
}
function dt(e, t, n) {
  e.style.getPropertyValue(t) !== n && e.style.setProperty(t, n);
}
function ft(e, t) {
  let n = e.firstChild;
  n instanceof Text && n.nextSibling == null
    ? n.data !== t && (n.data = t)
    : e.textContent !== t && (e.textContent = t);
}
function W(e, t, n) {
  return e + (t - e) * n;
}
function pt(e) {
  return e * e * (3 - 2 * e);
}
function mt(e) {
  return e >= 1 ? 1 : 1 - Math.exp(-8 * e) * (Math.cos(12 * e) + (2 / 3) * Math.sin(12 * e));
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = 1),
      (gt = [
        [
          [`text`, `pitch-title`],
          [`color`, `pitch-paper`],
          [`text`, `pitch-subtitle`],
          [`text`, `pitch-tagline`],
        ],
        [
          [`text`, `article-title`],
          [`image`, `article-image`],
          [`text`, `article-intro`],
        ],
        [
          [`products`, `product-0`],
          [`text`, `shop-name`],
          [`color`, `shop-backdrop`],
          [`products`, `product-2`],
        ],
        [
          [`text`, `blueprint-width`],
          [`text`, `blueprint-height`],
          [`text`, `blueprint-name`],
        ],
      ]));
  }))();
}
var vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, G;
function Ft() {
  return (Ft = e(() => {
    ((vt = `_backdrop_izirh_2`),
      (yt = `_scene_izirh_7`),
      (bt = `_starfield_izirh_20`),
      (xt = `_vignette_izirh_21`),
      (St = `_samples_izirh_22`),
      (Ct = `_collaborators_izirh_23`),
      (wt = `_copy_izirh_35`),
      (Tt = `_sample_izirh_22`),
      (Et = `_dragOffset_izirh_153`),
      (Dt = `_drift_izirh_154`),
      (Ot = `_sampleButton_izirh_155`),
      (kt = `_sampleSurface_izirh_156`),
      (At = `_float_izirh_408`),
      (jt = `_cornerProbe_izirh_194`),
      (Mt = `_cursorLabel_izirh_208`),
      (Nt = `_collaborator_izirh_23`),
      (Pt = `_you_izirh_257`),
      (G = {
        backdrop: vt,
        scene: yt,
        starfield: bt,
        vignette: xt,
        samples: St,
        collaborators: Ct,
        copy: wt,
        continue: `_continue_izirh_68`,
        sample: Tt,
        dragOffset: Et,
        drift: Dt,
        sampleButton: Ot,
        sampleSurface: kt,
        float: At,
        cornerProbe: jt,
        cursorLabel: Mt,
        collaborator: Nt,
        you: Pt,
      }));
  }))();
}
function It(e) {
  let t = (0, Rt.c)(18),
    { moving: n, reduceMotion: r } = e,
    { locale: a } = I(),
    o = (0, zt.useRef)(null),
    s = (0, zt.useRef)(null),
    c,
    l;
  (t[0] === a
    ? ((c = t[1]), (l = t[2]))
    : ((c = () => {
        let e = o.current,
          t = e?.parentElement;
        if (e == null || t == null) return;
        let n = ut(t, e, a);
        return (
          (s.current = n),
          () => {
            (n.dispose(), (s.current = null));
          }
        );
      }),
      (l = [a]),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l)),
    (0, zt.useLayoutEffect)(c, l));
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = () => {
        let e = s.current,
          t = o.current?.parentElement;
        if (e == null || t == null) return;
        if (!n) {
          let n = () => e.position(),
            r = () => {
              i.postRender(n);
            };
          return (
            t.addEventListener(`pointermove`, r),
            t.addEventListener(`pointerup`, r),
            t.addEventListener(`keydown`, r),
            t.addEventListener(`click`, r),
            () => {
              (t.removeEventListener(`pointermove`, r),
                t.removeEventListener(`pointerup`, r),
                t.removeEventListener(`keydown`, r),
                t.removeEventListener(`click`, r),
                b(n));
            }
          );
        }
        let r = (t) => {
          let { delta: n } = t;
          e.tick(n / 1e3);
        };
        return (i.postRender(r, !0), () => b(r));
      }),
      (t[3] = n),
      (t[4] = u));
  let d;
  (t[5] !== a || t[6] !== n ? ((d = [n, a]), (t[5] = a), (t[6] = n), (t[7] = d)) : (d = t[7]),
    (0, zt.useEffect)(u, d));
  let f;
  t[8] === r
    ? (f = t[9])
    : ((f = () => {
        r && s.current?.finishEdits(!0);
      }),
      (t[8] = r),
      (t[9] = f));
  let p;
  (t[10] !== a || t[11] !== r ? ((p = [r, a]), (t[10] = a), (t[11] = r), (t[12] = p)) : (p = t[12]),
    (0, zt.useEffect)(f, p));
  let m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, K.jsxs)(Lt, {
        children: [
          (0, K.jsx)(k, {}),
          (0, K.jsx)(R, {
            id: `space.introduction.collaborator.chatgpt`,
            defaultMessage: `ChatGPT`,
            description: `ChatGPT product name on a collaborating assistant's cursor in the Space welcome animation`,
          }),
        ],
      })),
      (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, K.jsx)(Lt, {
        children: (0, K.jsx)(R, {
          id: `space.introduction.collaborator.henry`,
          defaultMessage: `Henry Caldwell`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[14] = h))
    : (h = t[14]);
  let g;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(Lt, {
        children: (0, K.jsx)(R, {
          id: `space.introduction.collaborator.eric`,
          defaultMessage: `Eric Thompson`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[15] = g))
    : (g = t[15]);
  let _;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, K.jsx)(Lt, {
        children: (0, K.jsx)(R, {
          id: `space.introduction.collaborator.jasmine`,
          defaultMessage: `Jasmine Liu`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, K.jsxs)(`div`, {
          ref: o,
          className: G.collaborators,
          "aria-hidden": !0,
          children: [
            m,
            h,
            g,
            _,
            (0, K.jsx)(Lt, {
              children: (0, K.jsx)(R, {
                id: `space.introduction.collaborator.maya`,
                defaultMessage: `Maya Patel`,
                description: `Fictional collaborator's name in the Space welcome animation`,
              }),
            }),
          ],
        })),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
function Lt(e) {
  let t = (0, Rt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, K.jsx)(`span`, {
          className: G.collaborator,
          "data-collaborator": !0,
          children: (0, K.jsx)(`span`, { className: G.cursorLabel, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Rt, zt, K;
function Bt() {
  return (Bt = e(() => {
    ((Rt = g()), h(), (zt = a()), T(), L(), _t(), Ft(), (K = u()));
  }))();
}
function Vt(e) {
  let t = (0, Ut.c)(10),
    { moving: n, warping: r, initialDetail: i } = e,
    a = i === void 0 ? `full` : i,
    o = (0, Wt.useRef)(null),
    s = (0, Wt.useRef)(null),
    c;
  t[0] === r ? (c = t[1]) : ((c = () => r), (t[0] = r), (t[1] = c));
  let l = (0, Wt.useEffectEvent)(c),
    u;
  t[2] !== a || t[3] !== l || t[4] !== n
    ? ((u = () => {
        let e = o.current,
          t = e?.getContext(`2d`),
          r = e?.parentElement;
        if (!e || !t || !r) return;
        let i = s.current ?? {
          width: 0,
          height: 0,
          stars: [],
          time: 0,
          parallaxX: 0,
          parallaxY: 0,
          warpStart: null,
          reducedDetailAt: null,
          faintOpacity: 1,
        };
        s.current = i;
        let c = Kt.map(Ht),
          u = { x: 0, y: 0, active: !1, down: !1 },
          d = 0,
          f = 0,
          p = 0,
          m = 0,
          h = 0,
          g = 42,
          _ = () => ((g = (g * 16807) % 2147483647), (g - 1) / 2147483646),
          v = () => {
            let e = 0.45 + _() * 2.8,
              t = (_() - 0.5) * i.width * e * 1.06,
              n = (_() - 0.5) * i.height * e * 1.06,
              r = _(),
              a = _(),
              o = 0.3 + _() * 0.48;
            r >= 0.992 ? (o = 1.9 + _() * 0.8) : r >= 0.88 && (o = 0.85 + _() * 0.7);
            let s = r < 0.88 ? 0.15 + _() * 0.35 : 0.4 + _() * 0.5,
              c = _() * Math.PI * 2;
            return {
              x: t,
              y: n,
              z: e,
              size: o,
              alpha: s,
              brightness: s,
              color: [0.52, 0.7, 0.85, 0.93, 1].findIndex((e) => a < e),
              phase: c,
              sinPhase: Math.sin(c),
              cosPhase: Math.cos(c),
              rate: 0.3 + _() * 0.65,
              vx: (_() - 0.5) * 1.6,
              vy: (_() - 0.5) * 1.3,
              ox: 0,
              oy: 0,
              screenX: t / e + i.width / 2,
              screenY: n / e + i.height / 2,
            };
          },
          y = (r) => {
            let { width: a, height: o } = i,
              s = f === 0 ? 0 : r - f,
              g = Math.min(s / 1e3, 0.04);
            if (((f = r), l() && i.warpStart == null)) {
              for (let e of i.stars)
                ((e.x = (e.screenX - a / 2) * e.z),
                  (e.y = (e.screenY - o / 2) * e.z),
                  (e.ox = 0),
                  (e.oy = 0));
              ((i.warpStart = r), (g = 0));
            }
            n && (i.time += g);
            let v = i.warpStart == null ? null : (r - i.warpStart) / 1e3;
            if (n && v == null && !document.hidden) {
              if (i.reducedDetailAt == null) {
                let e = Math.min(s, 100);
                ((m += e),
                  s > Math.max(34, p * 1.5) && (h += e),
                  m >= 1e3 && (h >= m * 0.25 && (i.reducedDetailAt = r), (m = 0), (h = 0)));
              }
              i.reducedDetailAt != null && (i.faintOpacity = Math.max(0, 1 - (r - i.reducedDetailAt) / 600));
            }
            let b = Math.min(window.devicePixelRatio, i.reducedDetailAt == null ? 2 : 1),
              x = Math.round(a * b),
              S = Math.round(o * b);
            ((e.width !== x || e.height !== S) && ((e.width = x), (e.height = S)),
              t.setTransform(b, 0, 0, b, 0, 0));
            let C = v == null ? 0 : Math.min(1, v / 1.5),
              w = 0.006 + C ** 2.5 * 6.2,
              T = u.active && v == null ? (u.x / a - 0.5) * 12 : 0,
              E = u.active && v == null ? (u.y / o - 0.5) * 12 : 0,
              D = 1 - Math.exp(-g * 2);
            ((i.parallaxX += (T - i.parallaxX) * D), (i.parallaxY += (E - i.parallaxY) * D));
            let O = Math.sin(i.time * 0.19),
              ee = Math.cos(i.time * 0.19),
              k = Math.sin(i.time * 0.14),
              A = Math.cos(i.time * 0.14),
              j = 1 - Math.exp(-g * 7),
              M = 1 - Math.exp(-g * 2.8);
            (t.clearRect(0, 0, a, o), (t.lineCap = `round`));
            let N = null;
            for (let e of i.stars) {
              let r = e.size <= 0.84 && e.alpha < 0.35 ? i.faintOpacity : 1;
              if (r === 0) continue;
              n &&
                g > 0 &&
                ((e.z -= g * w),
                v ?? ((e.x += e.vx * g), (e.y += e.vy * g)),
                e.z < 0.12 &&
                  ((e.z = 3.15),
                  (e.x = (_() - 0.5) * a * (v == null ? 3.3 : 1.45)),
                  (e.y = (_() - 0.5) * o * (v == null ? 3.3 : 1.45)),
                  (e.ox = 0),
                  (e.oy = 0)));
              let s = e.x / e.z + a / 2,
                l = e.y / e.z + o / 2,
                d = 0;
              if (v == null) {
                ((s += i.parallaxX / e.z + (O * e.cosPhase + ee * e.sinPhase) * 3),
                  (l += i.parallaxY / e.z + (A * e.cosPhase - k * e.sinPhase) * 2),
                  (s < -40 || s > a + 40 || l < -40 || l > o + 40) &&
                    ((e.x = (_() - 0.5) * a * e.z),
                    (e.y = (_() - 0.5) * o * e.z),
                    (s = e.x / e.z + a / 2),
                    (l = e.y / e.z + o / 2)));
                let t = 0,
                  r = 0;
                if (u.active && n) {
                  let e = s - u.x,
                    n = l - u.y,
                    i = e * e + n * n;
                  if (i < 36100 && i > 1e-4) {
                    let a = Math.sqrt(i),
                      o = 1 - a / 190,
                      s = o * o * 54 * (u.down ? 1.8 : 1);
                    ((t = (e / a) * s), (r = (n / a) * s), (d = o * 0.28));
                  }
                }
                let c = t || r ? j : M;
                ((e.ox += (t - e.ox) * c), (e.oy += (r - e.oy) * c), (s += e.ox), (l += e.oy));
              }
              if (((e.screenX = s), (e.screenY = l), s < -140 || s > a + 140 || l < -140 || l > o + 140))
                continue;
              if (v == null) {
                let t = 0.78 + Math.sin(i.time * e.rate + e.phase) * 0.22;
                e.brightness = Math.min(1, e.alpha * t + d);
              }
              t.globalAlpha =
                r *
                (v == null
                  ? e.brightness
                  : Math.min(1, e.brightness + (e.alpha - e.brightness) * Math.min(1, v / 0.3) + C * 0.3));
              let f = Math.min(e.size * (0.66 + 0.6 / e.z), 5);
              if (v != null && v > 0.12) {
                let n = e.z / (e.z + Math.min(0.5, w * 0.046));
                ((t.strokeStyle = Kt[e.color]),
                  (t.lineWidth = Math.min(2, f * 0.7)),
                  t.beginPath(),
                  t.moveTo(a / 2 + (s - a / 2) * n, o / 2 + (l - o / 2) * n),
                  t.lineTo(s, l),
                  t.stroke());
              }
              if (e.size > 0.84) {
                let n = f * 9;
                t.drawImage(c[e.color], s - n / 2, l - n / 2, n, n);
              } else {
                let n = Kt[e.color];
                (N !== n && ((t.fillStyle = n), (N = n)), t.fillRect(s, l, f, f));
              }
            }
            ((t.globalAlpha = 1),
              n &&
                !document.hidden &&
                (d = requestAnimationFrame(
                  p === 0
                    ? (e) => {
                        let t = e,
                          n = 0,
                          r = (e) => {
                            let i = e - t;
                            ((p = n === 0 ? i : Math.min(p, i)),
                              (t = e),
                              (n += 1),
                              n < 3
                                ? (d = requestAnimationFrame(r))
                                : ((f = 0), (d = requestAnimationFrame(y))));
                          };
                        d = requestAnimationFrame(r);
                      }
                    : y,
                )));
          },
          b = () => {
            let t = e.clientWidth,
              n = e.clientHeight;
            if (t !== 0 && n !== 0) {
              if (t !== i.width || n !== i.height) {
                let e = i.width === 0 && i.height === 0 && a === `reduced`;
                ((i.width = t),
                  (i.height = n),
                  (i.reducedDetailAt = e ? -600 : null),
                  (i.faintOpacity = +!e),
                  (m = 0),
                  (h = 0),
                  (g = 42),
                  (i.stars = Array.from(
                    { length: Math.min(11e3, Math.max(1e3, Math.round((t * n) / 190))) },
                    v,
                  )));
              }
              (cancelAnimationFrame(d), (f = 0), (p = 0), y(performance.now()));
            }
          },
          x = (e) => {
            if (!n || l() || e.pointerType === `touch`) return;
            let t = r.getBoundingClientRect();
            ((u.x = ((e.clientX - t.left) / t.width) * i.width),
              (u.y = ((e.clientY - t.top) / t.height) * i.height),
              (u.active = !0));
          },
          S = (e) => {
            (x(e), (u.down = !0));
          },
          C = () => {
            u.down = !1;
          },
          w = () => {
            ((u.active = !1), (u.down = !1));
          },
          T = new ResizeObserver(b);
        return (
          T.observe(e),
          r.addEventListener(`pointermove`, x, { capture: !0, passive: !0 }),
          r.addEventListener(`pointerdown`, S, { capture: !0, passive: !0 }),
          r.addEventListener(`pointerleave`, w),
          r.addEventListener(`pointercancel`, w),
          window.addEventListener(`pointerup`, C),
          window.addEventListener(`blur`, w),
          b(),
          () => {
            (T.disconnect(),
              cancelAnimationFrame(d),
              r.removeEventListener(`pointermove`, x, !0),
              r.removeEventListener(`pointerdown`, S, !0),
              r.removeEventListener(`pointerleave`, w),
              r.removeEventListener(`pointercancel`, w),
              window.removeEventListener(`pointerup`, C),
              window.removeEventListener(`blur`, w));
          }
        );
      }),
      (t[2] = a),
      (t[3] = l),
      (t[4] = n),
      (t[5] = u))
    : (u = t[5]);
  let d;
  (t[6] !== a || t[7] !== n ? ((d = [n, a]), (t[6] = a), (t[7] = n), (t[8] = d)) : (d = t[8]),
    (0, Wt.useEffect)(u, d));
  let f;
  return (
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Gt.jsx)(`canvas`, { ref: o, className: G.starfield, "aria-hidden": !0 })), (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Ht(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 64), (t.height = 64));
  let n = t.getContext(`2d`);
  if (n) {
    let t = n.createRadialGradient(32, 32, 0, 32, 32, 32);
    (t.addColorStop(0, `#ffffff`),
      t.addColorStop(0.045, `#ffffff`),
      t.addColorStop(0.1, e + `e8`),
      t.addColorStop(0.22, e + `66`),
      t.addColorStop(0.45, e + `20`),
      t.addColorStop(1, e + `00`),
      (n.fillStyle = t),
      n.fillRect(0, 0, 64, 64));
  }
  return t;
}
var Ut, Wt, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Ut = g()),
      (Wt = a()),
      Ft(),
      (Gt = u()),
      (Kt = [`#f5f6fb`, `#7ab1fe`, `#6dcbf4`, `#fa994c`, `#f87915`]));
  }))();
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  q;
function An() {
  return (An = e(() => {
    ((Jt = `_artwork_u7y79_2`),
      (Yt = `_document_u7y79_8`),
      (Xt = `_image_u7y79_22`),
      (Zt = `_imagePlaceholder_u7y79_32`),
      (Qt = `_editable_u7y79_54`),
      ($t = `_handles_u7y79_68`),
      (en = `_pitchPaper_u7y79_71`),
      (tn = `_shopBackdrop_u7y79_71`),
      (nn = `_blueprintPaper_u7y79_71`),
      (rn = `_pin_u7y79_107`),
      (an = `_caret_u7y79_118`),
      (on = `_pitchTitle_u7y79_146`),
      (sn = `_pitchSubtitle_u7y79_159`),
      (cn = `_pitchTagline_u7y79_170`),
      (ln = `_palette_u7y79_184`),
      (un = `_articleTitle_u7y79_237`),
      (dn = `_articleDate_u7y79_245`),
      (fn = `_articleImage_u7y79_253`),
      (pn = `_articleImageCrop_u7y79_258`),
      (mn = `_articleIntro_u7y79_267`),
      (hn = `_articleParagraph_u7y79_272`),
      (gn = `_browserBar_u7y79_288`),
      (_n = `_store_u7y79_310`),
      (vn = `_storeHeader_u7y79_318`),
      (yn = `_storeName_u7y79_327`),
      (bn = `_hero_u7y79_331`),
      (xn = `_products_u7y79_335`),
      (Sn = `_product_u7y79_335`),
      (Cn = `_lampDrawing_u7y79_380`),
      (wn = `_measurements_u7y79_387`),
      (Tn = `_measurementGuides_u7y79_396`),
      (En = `_measurementArrows_u7y79_400`),
      (Dn = `_width_u7y79_404`),
      (On = `_height_u7y79_405`),
      (kn = `_blueprintName_u7y79_406`),
      (q = {
        artwork: Jt,
        document: Yt,
        image: Xt,
        imagePlaceholder: Zt,
        editable: Qt,
        handles: $t,
        pitchPaper: en,
        shopBackdrop: tn,
        blueprintPaper: nn,
        pin: rn,
        caret: an,
        pitchTitle: on,
        pitchSubtitle: sn,
        pitchTagline: cn,
        palette: ln,
        articleTitle: un,
        articleDate: dn,
        articleImage: fn,
        articleImageCrop: pn,
        articleIntro: mn,
        articleParagraph: hn,
        browserBar: gn,
        store: _n,
        storeHeader: vn,
        storeName: yn,
        hero: bn,
        products: xn,
        product: Sn,
        lampDrawing: Cn,
        measurements: wn,
        measurementGuides: Tn,
        measurementArrows: En,
        width: Dn,
        height: On,
        blueprintName: kn,
      }));
  }))();
}
function jn(e) {
  let t = (0, Mn.c)(10),
    { className: n, src: r, kind: i } = e,
    [a, o] = (0, Nn.useState)(null),
    s = a?.src === r ? a.status : null,
    c = s !== `loaded` && q.imagePlaceholder,
    l;
  t[0] !== n || t[1] !== c ? ((l = d(q.image, c, n)), (t[0] = n), (t[1] = c), (t[2] = l)) : (l = t[2]);
  let u;
  t[3] !== r || t[4] !== s
    ? ((u =
        r !== `` &&
        s !== `failed` &&
        (0, Pn.jsx)(`img`, {
          className: q.image,
          src: r,
          alt: ``,
          draggable: !1,
          onLoad: () => o({ src: r, status: `loaded` }),
          onError: () => o({ src: r, status: `failed` }),
        })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = u))
    : (u = t[5]);
  let f;
  return (
    t[6] !== i || t[7] !== l || t[8] !== u
      ? ((f = (0, Pn.jsx)(`span`, {
          className: l,
          "data-artwork-image": !0,
          "data-image-kind": i,
          "aria-hidden": !0,
          children: u,
        })),
        (t[6] = i),
        (t[7] = l),
        (t[8] = u),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var Mn, Nn, Pn;
function Fn() {
  return (Fn = e(() => {
    ((Mn = g()), p(), (Nn = a()), An(), (Pn = u()));
  }))();
}
function In(e) {
  let t = (0, Y.c)(24),
    { kind: n, moving: r } = e,
    { locale: i } = I(),
    [a, o] = Hn[n],
    s = `0 0 ${a} ${o}`,
    c;
  t[0] === n ? (c = t[1]) : ((c = n === `pitch` && (0, X.jsx)(Rn, {})), (t[0] = n), (t[1] = c));
  let l;
  t[2] === n ? (l = t[3]) : ((l = n === `resume` && (0, X.jsx)(zn, {})), (t[2] = n), (t[3] = l));
  let u;
  t[4] === n ? (u = t[5]) : ((u = n === `pottery` && (0, X.jsx)(Bn, {})), (t[4] = n), (t[5] = u));
  let d;
  t[6] === n ? (d = t[7]) : ((d = n === `blueprint` && (0, X.jsx)(Vn, {})), (t[6] = n), (t[7] = d));
  let f;
  t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== a
    ? ((f = (0, X.jsxs)(`div`, {
        className: q.document,
        "data-artwork-document": !0,
        "data-document-width": a,
        children: [c, l, u, d],
      })),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = a),
      (t[13] = f))
    : (f = t[13]);
  let p;
  t[14] !== o || t[15] !== i || t[16] !== f || t[17] !== a
    ? ((p = (0, X.jsx)(`foreignObject`, { width: a, height: o, children: f }, i)),
      (t[14] = o),
      (t[15] = i),
      (t[16] = f),
      (t[17] = a),
      (t[18] = p))
    : (p = t[18]);
  let m;
  return (
    t[19] !== n || t[20] !== r || t[21] !== s || t[22] !== p
      ? ((m = (0, X.jsx)(`svg`, {
          className: q.artwork,
          viewBox: s,
          "aria-hidden": !0,
          "data-kind": n,
          "data-moving": r,
          children: p,
        })),
        (t[19] = n),
        (t[20] = r),
        (t[21] = s),
        (t[22] = p),
        (t[23] = m))
      : (m = t[23]),
    m
  );
}
function J(e) {
  let t = (0, Y.c)(12),
    { field: n, className: r, revision: i, children: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = d(q.editable, r)), (t[0] = r), (t[1] = o));
  let s;
  t[2] !== a || t[3] !== i
    ? ((s =
        i == null
          ? a
          : (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`span`, { "data-editable-copy": !0, children: a }),
                (0, X.jsx)(`i`, { className: q.caret }),
              ],
            })),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c, l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsxs)(`span`, {
        className: q.handles,
        children: [(0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {})],
      })),
      (l = (0, X.jsx)(`span`, { className: q.pin, "data-edit-pin": !0 })),
      (t[5] = c),
      (t[6] = l))
    : ((c = t[5]), (l = t[6]));
  let u;
  return (
    t[7] !== n || t[8] !== i || t[9] !== o || t[10] !== s
      ? ((u = (0, X.jsxs)(`span`, {
          className: o,
          "data-editable": n,
          "data-revision": i,
          children: [s, c, l],
        })),
        (t[7] = n),
        (t[8] = i),
        (t[9] = o),
        (t[10] = s),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
function Ln() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsxs)(`span`, {
          className: q.palette,
          "data-palette": !0,
          children: [(0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Rn() {
  let e = (0, Y.c)(21),
    t = I(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(J, { field: `pitch-paper`, className: q.pitchPaper })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === t
    ? (r = e[2])
    : ((r = t.formatMessage({
        id: `space.introduction.art.pitchRevision`,
        defaultMessage: `Studio
Notes`,
        description: `Revised two-line title being typed into an illustrative presentation in the Space welcome animation; preserve the line break between the words`,
      })),
      (e[1] = t),
      (e[2] = r));
  let i;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsx)(R, {
        id: `space.introduction.art.pitchTitle`,
        defaultMessage: `Field
Notes`,
        description: `Two-line title on an illustrative presentation in the Space welcome animation; preserve the line break between the words`,
      })),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === r
    ? (a = e[5])
    : ((a = (0, X.jsx)(J, { field: `pitch-title`, className: q.pitchTitle, revision: r, children: i })),
      (e[4] = r),
      (e[5] = a));
  let o;
  e[6] === t
    ? (o = e[7])
    : ((o = t.formatMessage({
        id: `space.introduction.art.pitchSubtitleRevision`,
        defaultMessage: `A fresh perspective`,
        description: `Revised subtitle being typed into an illustrative presentation in the Space welcome animation`,
      })),
      (e[6] = t),
      (e[7] = o));
  let s;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(R, {
        id: `space.introduction.art.pitchSubtitle`,
        defaultMessage: `A new perspective`,
        description: `Small subtitle at the lower right of an illustrative presentation in the Space welcome animation`,
      })),
      (e[8] = s))
    : (s = e[8]);
  let c;
  e[9] === o
    ? (c = e[10])
    : ((c = (0, X.jsx)(J, { field: `pitch-subtitle`, className: q.pitchSubtitle, revision: o, children: s })),
      (e[9] = o),
      (e[10] = c));
  let l;
  e[11] === t
    ? (l = e[12])
    : ((l = t.formatMessage({
        id: `space.introduction.art.pitchTaglineRevision`,
        defaultMessage: `2027`,
        description: `Revised year being typed into a pill at the upper left of an illustrative presentation in the Space welcome animation`,
      })),
      (e[11] = t),
      (e[12] = l));
  let u;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(R, {
        id: `space.introduction.art.pitchTagline`,
        defaultMessage: `2026`,
        description: `Year shown in a pill at the upper left of an illustrative presentation in the Space welcome animation`,
      })),
      (e[13] = u))
    : (u = e[13]);
  let d;
  e[14] === l
    ? (d = e[15])
    : ((d = (0, X.jsx)(J, { field: `pitch-tagline`, className: q.pitchTagline, revision: l, children: u })),
      (e[14] = l),
      (e[15] = d));
  let f;
  e[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, X.jsx)(Ln, {})), (e[16] = f)) : (f = e[16]);
  let p;
  return (
    e[17] !== a || e[18] !== c || e[19] !== d
      ? ((p = (0, X.jsxs)(X.Fragment, { children: [n, a, c, d, f] })),
        (e[17] = a),
        (e[18] = c),
        (e[19] = d),
        (e[20] = p))
      : (p = e[20]),
    p
  );
}
function zn() {
  let e = (0, Y.c)(17),
    t = I(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `space.introduction.art.articleTitleRevision`,
        defaultMessage: `The Intelligence Era`,
        description: `Revised title being typed into the illustrative Intelligence Age article in the Space welcome animation`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(R, {
        id: `space.introduction.art.articleTitle`,
        defaultMessage: `The Intelligence Age`,
        description: `Title of the illustrative article in the Space welcome animation`,
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === n
    ? (i = e[4])
    : ((i = (0, X.jsx)(J, { field: `article-title`, className: q.articleTitle, revision: n, children: r })),
      (e[3] = n),
      (e[4] = i));
  let a;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(`span`, {
        className: q.articleDate,
        children: (0, X.jsx)(R, {
          id: `space.introduction.art.articleDate`,
          defaultMessage: `September 23, 2024`,
          description: `Publication date shown beneath the Intelligence Age article title in the Space welcome animation`,
        }),
      })),
      (e[5] = a))
    : (a = e[5]);
  let o;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(J, {
        field: `article-image`,
        className: q.articleImage,
        children: (0, X.jsx)(`span`, {
          className: q.articleImageCrop,
          children: (0, X.jsx)(jn, { src: qe, kind: `landscape` }),
        }),
      })),
      (e[6] = o))
    : (o = e[6]);
  let s;
  e[7] === t
    ? (s = e[8])
    : ((s = t.formatMessage({
        id: `space.introduction.art.articleIntroRevision`,
        defaultMessage: `Over the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.`,
        description: `Revised opening paragraph being typed into the illustrative Intelligence Age article in the Space welcome animation`,
      })),
      (e[7] = t),
      (e[8] = s));
  let c;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(R, {
        id: `space.introduction.art.articleIntro`,
        defaultMessage: `In the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.`,
        description: `Opening paragraph of the illustrative Intelligence Age article in the Space welcome animation`,
      })),
      (e[9] = c))
    : (c = e[9]);
  let l;
  e[10] === s
    ? (l = e[11])
    : ((l = (0, X.jsx)(J, { field: `article-intro`, className: q.articleIntro, revision: s, children: c })),
      (e[10] = s),
      (e[11] = l));
  let u;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(`span`, {
        className: q.articleParagraph,
        children: (0, X.jsx)(R, {
          id: `space.introduction.art.articleAcceleration`,
          defaultMessage: `This phenomenon is not new, but it will be newly accelerated. People have become dramatically more capable over time; we can already accomplish things now that our predecessors would have believed to be impossible.`,
          description: `Second paragraph of the illustrative Intelligence Age article in the Space welcome animation`,
        }),
      })),
      (e[12] = u))
    : (u = e[12]);
  let d;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(`span`, {
        className: q.articleParagraph,
        children: (0, X.jsx)(R, {
          id: `space.introduction.art.articleProgress`,
          defaultMessage: `We are more capable not because of genetic change, but because we benefit from the infrastructure of society being way smarter and more capable than any one of us; in an important sense, society itself is a form of advanced intelligence. Our grandparents – and the generations that came before them – built and achieved great things. They contributed to the scaffolding of human progress that we all benefit from. AI will give people tools to solve hard problems and help us add new struts to that scaffolding that we could not have figured out on our own. The story of progress will continue, and our children will be able to do things we can’t.`,
          description: `Final visible paragraph of the illustrative Intelligence Age article; it continues below the clipped miniature page in the Space welcome animation`,
        }),
      })),
      (e[13] = d))
    : (d = e[13]);
  let f;
  return (
    e[14] !== i || e[15] !== l
      ? ((f = (0, X.jsxs)(X.Fragment, { children: [i, a, o, l, u, d] })),
        (e[14] = i),
        (e[15] = l),
        (e[16] = f))
      : (f = e[16]),
    f
  );
}
function Bn() {
  let e = (0, Y.c)(16),
    t = I(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(J, { field: `shop-backdrop`, className: q.shopBackdrop })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsxs)(`span`, {
        className: q.browserBar,
        children: [(0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {})],
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === t
    ? (i = e[3])
    : ((i = t.formatMessage({
        id: `space.introduction.art.storeRevision`,
        defaultMessage: `KILN STUDIO`,
        description: `Revised shop name being typed into an illustrative pottery website in the Space welcome animation`,
      })),
      (e[2] = t),
      (e[3] = i));
  let a;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(R, {
        id: `space.introduction.art.store`,
        defaultMessage: `R&D KILN`,
        description: `Fictional ceramics shop name in the Space welcome animation`,
      })),
      (e[4] = a))
    : (a = e[4]);
  let o;
  e[5] === i
    ? (o = e[6])
    : ((o = (0, X.jsx)(`span`, {
        className: q.storeHeader,
        children: (0, X.jsx)(J, { field: `shop-name`, className: q.storeName, revision: i, children: a }),
      })),
      (e[5] = i),
      (e[6] = o));
  let s;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(jn, { className: q.hero, src: Ze, kind: `hero` })), (e[7] = s))
    : (s = e[7]);
  let c;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsxs)(J, {
        field: `product-0`,
        className: q.product,
        children: [
          (0, X.jsx)(jn, { src: Xe, kind: `mug` }),
          (0, X.jsx)(R, {
            id: `space.introduction.art.mug`,
            defaultMessage: `Ridge Mug`,
            description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
          }),
        ],
      })),
      (e[8] = c))
    : (c = e[8]);
  let l;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsxs)(J, {
        field: `product-1`,
        className: q.product,
        children: [
          (0, X.jsx)(jn, { src: $e, kind: `bowl` }),
          (0, X.jsx)(R, {
            id: `space.introduction.art.bowl`,
            defaultMessage: `Stone Bowl`,
            description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
          }),
        ],
      })),
      (e[9] = l))
    : (l = e[9]);
  let u;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsxs)(`span`, {
        className: q.products,
        children: [
          c,
          l,
          (0, X.jsxs)(J, {
            field: `product-2`,
            className: q.product,
            children: [
              (0, X.jsx)(jn, { src: Qe, kind: `pitcher` }),
              (0, X.jsx)(R, {
                id: `space.introduction.art.pitcher`,
                defaultMessage: `River Pitcher`,
                description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
              }),
            ],
          }),
        ],
      })),
      (e[10] = u))
    : (u = e[10]);
  let d;
  e[11] === o
    ? (d = e[12])
    : ((d = (0, X.jsxs)(`span`, { className: q.store, children: [o, s, u] })), (e[11] = o), (e[12] = d));
  let f;
  e[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, X.jsx)(Ln, {})), (e[13] = f)) : (f = e[13]);
  let p;
  return (
    e[14] === d
      ? (p = e[15])
      : ((p = (0, X.jsxs)(X.Fragment, { children: [n, r, d, f] })), (e[14] = d), (e[15] = p)),
    p
  );
}
function Vn() {
  let e = (0, Y.c)(22),
    t = I(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(J, { field: `blueprint-paper`, className: q.blueprintPaper })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(`span`, {
        className: q.lampDrawing,
        children: (0, X.jsx)(jn, { src: Ye, kind: `lamp` }),
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsxs)(`svg`, {
        className: q.measurements,
        viewBox: `0 0 500 658`,
        children: [
          (0, X.jsx)(`path`, { d: `M215 73H412 M94 152V333 M94 365V533` }),
          (0, X.jsx)(`path`, {
            className: q.measurementGuides,
            d: `M215 74V96 M412 74V96 M90 151H138 M95 533H138`,
          }),
          (0, X.jsx)(`path`, {
            className: q.measurementArrows,
            d: `M215 73L223 69V77Z M413 73L405 69V77Z M94 151L98 159H90Z M94 534L98 526H90Z`,
          }),
        ],
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  e[3] === t
    ? (a = e[4])
    : ((a = t.formatMessage({
        id: `space.introduction.art.lampWidthRevision`,
        defaultMessage: `200 mm`,
        description: `Revised width measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[3] = t),
      (e[4] = a));
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(R, {
        id: `space.introduction.art.lampWidth`,
        defaultMessage: `180 mm`,
        description: `Width measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  e[6] === a
    ? (s = e[7])
    : ((s = (0, X.jsx)(J, { field: `blueprint-width`, className: q.width, revision: a, children: o })),
      (e[6] = a),
      (e[7] = s));
  let c;
  e[8] === t
    ? (c = e[9])
    : ((c = t.formatMessage({
        id: `space.introduction.art.lampHeightRevision`,
        defaultMessage: `440 mm`,
        description: `Revised height measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[8] = t),
      (e[9] = c));
  let l;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(R, {
        id: `space.introduction.art.lampHeight`,
        defaultMessage: `420 mm`,
        description: `Height measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[10] = l))
    : (l = e[10]);
  let u;
  e[11] === c
    ? (u = e[12])
    : ((u = (0, X.jsx)(J, { field: `blueprint-height`, className: q.height, revision: c, children: l })),
      (e[11] = c),
      (e[12] = u));
  let d;
  e[13] === t
    ? (d = e[14])
    : ((d = t.formatMessage({
        id: `space.introduction.art.lampTitleRevision`,
        defaultMessage: `TASK LAMP`,
        description: `Revised title being typed on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[13] = t),
      (e[14] = d));
  let f;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(R, {
        id: `space.introduction.art.lampTitle`,
        defaultMessage: `DESK LAMP`,
        description: `Title on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] === d
    ? (p = e[17])
    : ((p = (0, X.jsx)(J, { field: `blueprint-name`, className: q.blueprintName, revision: d, children: f })),
      (e[16] = d),
      (e[17] = p));
  let m;
  return (
    e[18] !== p || e[19] !== s || e[20] !== u
      ? ((m = (0, X.jsxs)(X.Fragment, { children: [n, r, i, s, u, p] })),
        (e[18] = p),
        (e[19] = s),
        (e[20] = u),
        (e[21] = m))
      : (m = e[21]),
    m
  );
}
var Y, X, Hn;
function Un() {
  return (Un = e(() => {
    ((Y = g()),
      p(),
      T(),
      Je(),
      Fn(),
      An(),
      (X = u()),
      (Hn = { pitch: [754, 447], resume: [1200, 1594], pottery: [686, 432], blueprint: [500, 658] }));
  }))();
}
function Wn(e) {
  let t = (0, Gn.c)(71),
    { kind: n, label: i, helpId: a, moving: o, warping: c } = e,
    l = ee(),
    u = f(0),
    d = f(0),
    p = f(0),
    [m, h] = (0, Kn.useState)(!1),
    g;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = []), (t[0] = g)) : (g = t[0]);
  let _ = (0, Kn.useRef)(g),
    v = (0, Kn.useRef)(null),
    y,
    b;
  (t[1] === o
    ? ((y = t[2]), (b = t[3]))
    : ((y = () => {
        for (let e of _.current)
          o && e.state === `paused` ? e.play() : !o && e.state === `running` && e.pause();
      }),
      (b = [o]),
      (t[1] = o),
      (t[2] = y),
      (t[3] = b)),
    (0, Kn.useEffect)(y, b));
  let x, S;
  (t[4] !== p || t[5] !== u || t[6] !== d
    ? ((x = () => () => {
        (u.stop(), d.stop(), p.stop());
      }),
      (S = [u, d, p]),
      (t[4] = p),
      (t[5] = u),
      (t[6] = d),
      (t[7] = x),
      (t[8] = S))
    : ((x = t[7]), (S = t[8])),
    (0, Kn.useEffect)(x, S));
  let C;
  t[9] !== o || t[10] !== p || t[11] !== u || t[12] !== d
    ? ((C = function (e, t) {
        let n = e === void 0 ? 0 : e,
          i = t === void 0 ? 0 : t;
        if (((_.current = []), !o)) {
          (u.set(0), d.set(0), p.set(0));
          return;
        }
        let a = { type: `spring`, stiffness: 6.76, damping: 3.432, restDelta: 0.4, restSpeed: 2 },
          s = Math.hypot(n, i),
          c = s > 1200 ? 1200 / s : 1;
        _.current = [r(u, 0, { ...a, velocity: n * c }), r(d, 0, { ...a, velocity: i * c }), r(p, 0, a)];
      }),
      (t[9] = o),
      (t[10] = p),
      (t[11] = u),
      (t[12] = d),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T;
  t[14] !== p || t[15] !== u || t[16] !== d
    ? ((T = { x: u, y: d, rotate: p }), (t[14] = p), (t[15] = u), (t[16] = d), (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== p || t[19] !== u || t[20] !== d
    ? ((E = (e) => {
        e.isPrimary &&
          e.button === 0 &&
          v.current == null &&
          (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.focus({ preventScroll: !0 }),
          u.stop(),
          d.stop(),
          p.stop(),
          (_.current = []),
          e.currentTarget.setPointerCapture(e.pointerId),
          (v.current = {
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            originX: u.get(),
            originY: d.get(),
            samples: [{ x: e.clientX, y: e.clientY, time: e.timeStamp }],
          }),
          h(!0));
      }),
      (t[18] = p),
      (t[19] = u),
      (t[20] = d),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== o || t[23] !== p || t[24] !== l || t[25] !== u || t[26] !== d
    ? ((D = (e) => {
        let t = v.current;
        if (t != null && t.pointerId === e.pointerId) {
          for (
            e.preventDefault(),
              e.stopPropagation(),
              t.samples.push({ x: e.clientX, y: e.clientY, time: e.timeStamp });
            t.samples.length > 2 && t.samples[1].time < e.timeStamp - 80;
          )
            t.samples.shift();
          if (
            (u.set(t.originX + (e.clientX - t.startX) / l), d.set(t.originY + (e.clientY - t.startY) / l), o)
          ) {
            let n = t.samples[0],
              r = ((e.clientX - n.x) / l / Math.max(16, e.timeStamp - n.time)) * 1e3,
              i = Math.max(-10, Math.min(10, r * 0.008));
            p.set(p.get() + (i - p.get()) * 0.25);
          }
        }
      }),
      (t[22] = o),
      (t[23] = p),
      (t[24] = l),
      (t[25] = u),
      (t[26] = d),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== o || t[29] !== w || t[30] !== l
    ? ((O = (e) => {
        let t = v.current;
        if (t != null && t.pointerId === e.pointerId) {
          if (((v.current = null), h(!1), e.currentTarget.releasePointerCapture(e.pointerId), o)) {
            let n = t.samples[0],
              r = t.samples[t.samples.length - 1],
              i = Math.max(16, r.time - n.time) / 1e3,
              a = Math.exp(-Math.max(0, e.timeStamp - r.time - 35) / 50);
            w(((r.x - n.x) / l / i) * a, ((r.y - n.y) / l / i) * a);
          } else w();
        }
      }),
      (t[28] = o),
      (t[29] = w),
      (t[30] = l),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] === w
    ? (k = t[33])
    : ((k = () => {
        v.current != null && ((v.current = null), h(!1), w());
      }),
      (t[32] = w),
      (t[33] = k));
  let A;
  t[34] !== o || t[35] !== w || t[36] !== u || t[37] !== d
    ? ((A = (e) => {
        e.detail === 0 && (o ? w(580, -500) : (u.set(24), d.set(-24)));
      }),
      (t[34] = o),
      (t[35] = w),
      (t[36] = u),
      (t[37] = d),
      (t[38] = A))
    : (A = t[38]);
  let j;
  t[39] !== o || t[40] !== w || t[41] !== p || t[42] !== u || t[43] !== d
    ? ((j = (e) => {
        let t = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] };
        if (e.key === `Home`)
          (e.preventDefault(), u.stop(), d.stop(), p.stop(), (_.current = []), u.set(0), d.set(0), p.set(0));
        else if (t[e.key] != null) {
          e.preventDefault();
          let [n, r] = t[e.key];
          o ? w(n * 12, r * 12) : (u.set(n), d.set(r));
        }
      }),
      (t[39] = o),
      (t[40] = w),
      (t[41] = p),
      (t[42] = u),
      (t[43] = d),
      (t[44] = j))
    : (j = t[44]);
  let M = o && !m && !c,
    N;
  t[45] !== n || t[46] !== M
    ? ((N = (0, Z.jsx)(`span`, {
        className: G.sampleSurface,
        children: (0, Z.jsx)(In, { kind: n, moving: M }),
      })),
      (t[45] = n),
      (t[46] = M),
      (t[47] = N))
    : (N = t[47]);
  let P;
  t[48] !== a ||
  t[49] !== i ||
  t[50] !== O ||
  t[51] !== k ||
  t[52] !== A ||
  t[53] !== j ||
  t[54] !== N ||
  t[55] !== E ||
  t[56] !== D ||
  t[57] !== c
    ? ((P = (0, Z.jsx)(`button`, {
        className: G.sampleButton,
        type: `button`,
        "aria-label": i,
        "aria-describedby": a,
        disabled: c,
        onPointerDown: E,
        onPointerMove: D,
        onPointerUp: O,
        onLostPointerCapture: k,
        onClick: A,
        onKeyDown: j,
        children: N,
      })),
      (t[48] = a),
      (t[49] = i),
      (t[50] = O),
      (t[51] = k),
      (t[52] = A),
      (t[53] = j),
      (t[54] = N),
      (t[55] = E),
      (t[56] = D),
      (t[57] = c),
      (t[58] = P))
    : (P = t[58]);
  let te, F, I;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Z.jsx)(`span`, {
        className: G.cornerProbe,
        "data-corner-probe": `top-left`,
        "aria-hidden": !0,
      })),
      (F = (0, Z.jsx)(`span`, {
        className: G.cornerProbe,
        "data-corner-probe": `top-right`,
        "aria-hidden": !0,
      })),
      (I = (0, Z.jsx)(`span`, {
        className: G.cornerProbe,
        "data-corner-probe": `bottom-left`,
        "aria-hidden": !0,
      })),
      (t[59] = te),
      (t[60] = F),
      (t[61] = I))
    : ((te = t[59]), (F = t[60]), (I = t[61]));
  let ne;
  t[62] === P
    ? (ne = t[63])
    : ((ne = (0, Z.jsxs)(`div`, { className: G.drift, "data-drift": !0, children: [P, te, F, I] })),
      (t[62] = P),
      (t[63] = ne));
  let L;
  t[64] !== ne || t[65] !== T
    ? ((L = (0, Z.jsx)(s.div, { className: G.dragOffset, "data-drag-offset": !0, style: T, children: ne })),
      (t[64] = ne),
      (t[65] = T),
      (t[66] = L))
    : (L = t[66]);
  let R;
  return (
    t[67] !== m || t[68] !== n || t[69] !== L
      ? ((R = (0, Z.jsx)(`div`, {
          className: G.sample,
          "data-work-sample": !0,
          "data-kind": n,
          "data-dragging": m,
          children: L,
        })),
        (t[67] = m),
        (t[68] = n),
        (t[69] = L),
        (t[70] = R))
      : (R = t[70]),
    R
  );
}
var Gn, Kn, Z;
function qn() {
  return (qn = e(() => {
    ((Gn = g()), ie(), o(), N(), (Kn = a()), re(), Un(), Ft(), (Z = u()));
  }))();
}
function Jn(e) {
  let t = (0, $n.c)(119),
    { onDismiss: n, onShown: r, onContinue: i, initialStarDetail: a } = e,
    o = I(),
    c = (0, Q.useContext)(Ne),
    u = (0, Q.useContext)(De),
    f = M(be) ?? 0,
    p = ee(),
    [m, h] = (0, Q.useState)(),
    g = w(),
    [_, v] = (0, Q.useState)(g),
    [y, b] = (0, Q.useState)(null),
    x = y != null,
    S = y === `warp`,
    T = (0, Q.useRef)(null),
    D = (0, Q.useRef)(null),
    O = (0, Q.useRef)(!1),
    k = (0, Q.useRef)(null),
    A = (0, Q.useId)(),
    j;
  t[0] === r
    ? (j = t[1])
    : ((j = () => {
        D.current != null && Qn() && !O.current && ((O.current = !0), r?.());
      }),
      (t[0] = r),
      (t[1] = j));
  let N = j,
    P;
  t[2] === N
    ? (P = t[3])
    : ((P = (e) =>
        Zn(() => {
          (e(), N());
        })),
      (t[2] = N),
      (t[3] = P));
  let F = (0, Q.useSyncExternalStore)(P, Qn, Xn),
    L = !g && F,
    re,
    ie;
  (t[4] !== c || t[5] !== u
    ? ((re = () => {
        let e = u.current;
        if (e != null && c != null)
          return te(Array.from(e.querySelectorAll(`[data-app-navigation-rail]`)), e);
      }),
      (ie = [u, c]),
      (t[4] = c),
      (t[5] = u),
      (t[6] = re),
      (t[7] = ie))
    : ((re = t[6]), (ie = t[7])),
    (0, Q.useLayoutEffect)(re, ie));
  let ae, oe;
  (t[8] !== _ || t[9] !== x || t[10] !== c
    ? ((ae = () => {
        if (c == null || !_ || x) return;
        let e = c.style.contentVisibility;
        return (
          c.style.setProperty(`content-visibility`, `hidden`),
          () => {
            c.style.setProperty(`content-visibility`, e);
          }
        );
      }),
      (oe = [c, _, x]),
      (t[8] = _),
      (t[9] = x),
      (t[10] = c),
      (t[11] = ae),
      (t[12] = oe))
    : ((ae = t[11]), (oe = t[12])),
    (0, Q.useLayoutEffect)(ae, oe));
  let se, ce;
  (t[13] !== c || t[14] !== f || t[15] !== p
    ? ((se = () => {
        if (c == null) return;
        let e = () => {
            let e = c.getBoundingClientRect(),
              t = Math.max(0, Math.min(e.left / p, f)),
              n = Math.max(0, Math.min((window.innerWidth - e.right) / p, f)),
              r = e.top / p,
              i = e.height / p,
              a =
                t > 0 || n > 0 || r > 0 || e.bottom < window.innerHeight
                  ? `var(--app-shell-window-radius, var(--radius-xl-base))`
                  : 0,
              o = 0;
            if (a !== 0) {
              let e = getComputedStyle(c);
              o =
                e.clipPath === `none`
                  ? e.borderEndEndRadius
                  : e.getPropertyValue(`--app-shell-main-surface-clip-end-radius`);
            }
            h((e) =>
              e?.left === t &&
              e.right === n &&
              e.top === r &&
              e.height === i &&
              e.borderRadius === a &&
              e.borderEndEndRadius === o
                ? e
                : {
                    left: t,
                    right: n,
                    top: r,
                    height: i,
                    width: `auto`,
                    borderRadius: a,
                    borderEndEndRadius: o,
                  },
            );
          },
          t = new ResizeObserver(e);
        return (
          t.observe(c),
          window.addEventListener(`resize`, e),
          e(),
          () => {
            (t.disconnect(), window.removeEventListener(`resize`, e));
          }
        );
      }),
      (ce = [c, f, p]),
      (t[13] = c),
      (t[14] = f),
      (t[15] = p),
      (t[16] = se),
      (t[17] = ce))
    : ((se = t[16]), (ce = t[17])),
    (0, Q.useLayoutEffect)(se, ce));
  let le, ue;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => {
        let e = k.current?.parentElement,
          t = () => {
            e != null && ct(e);
          },
          n = () => {
            k.current != null && lt(k.current);
          },
          r = new ResizeObserver(t);
        return (
          e != null && r.observe(e),
          window.addEventListener(`blur`, n),
          window.addEventListener(`resize`, t),
          document.addEventListener(`visibilitychange`, n),
          () => {
            (r.disconnect(),
              window.removeEventListener(`blur`, n),
              window.removeEventListener(`resize`, t),
              document.removeEventListener(`visibilitychange`, n));
          }
        );
      }),
      (le = []),
      (t[18] = le),
      (t[19] = ue))
    : ((le = t[18]), (ue = t[19])),
    (0, Q.useEffect)(ue, le));
  let de = !x && G.backdrop,
    fe;
  t[20] === de
    ? (fe = t[21])
    : ((fe = d(`inset-0 h-full w-full [clip-path:border-box]`, de)), (t[20] = de), (t[21] = fe));
  let pe;
  t[22] !== x || t[23] !== n
    ? ((pe = (e) => {
        e || n(x ? `continue` : `dismiss`);
      }),
      (t[22] = x),
      (t[23] = n),
      (t[24] = pe))
    : (pe = t[24]);
  let me;
  t[25] === N
    ? (me = t[26])
    : ((me = (e) => {
        ((T.current = document.activeElement instanceof HTMLElement ? document.activeElement : null),
          e.preventDefault(),
          D.current?.focus(),
          N());
      }),
      (t[25] = N),
      (t[26] = me));
  let he;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (e) => {
        (e.preventDefault(), document.activeElement === document.body && T.current?.focus());
      }),
      (t[27] = he))
    : (he = t[27]);
  let ge;
  t[28] !== m || t[29] !== me
    ? ((ge = { style: m, onInteractOutside: Yn, onOpenAutoFocus: me, onCloseAutoFocus: he }),
      (t[28] = m),
      (t[29] = me),
      (t[30] = ge))
    : (ge = t[30]);
  let _e;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = d(`select-none`, G.scene)), (t[31] = _e))
    : (_e = t[31]);
  let z;
  t[32] === x
    ? (z = t[33])
    : ((z = (e) => {
        let t = k.current;
        if (t != null) {
          if (x || e.pointerType === `touch`) {
            lt(t);
            return;
          }
          ((t.dataset.pointerClientX = String(e.clientX)),
            (t.dataset.pointerClientY = String(e.clientY)),
            ct(e.currentTarget));
        }
      }),
      (t[32] = x),
      (t[33] = z));
  let ve, ye, xe;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (e) => {
        e.pointerType === `touch` && k.current != null && lt(k.current);
      }),
      (ye = () => {
        k.current != null && lt(k.current);
      }),
      (xe = () => {
        k.current != null && lt(k.current);
      }),
      (t[34] = ve),
      (t[35] = ye),
      (t[36] = xe))
    : ((ve = t[34]), (ye = t[35]), (xe = t[36]));
  let B;
  t[37] === g ? (B = t[38]) : ((B = !g && { opacity: 0 }), (t[37] = g), (t[38] = B));
  let Se = +!x,
    Ce;
  t[39] === Se ? (Ce = t[40]) : ((Ce = { opacity: Se }), (t[39] = Se), (t[40] = Ce));
  let we = y === `fade` ? 0.3 : 0.7,
    Te = S ? 1.65 : 0,
    Ee;
  t[41] !== we || t[42] !== Te
    ? ((Ee = { duration: we, delay: Te }), (t[41] = we), (t[42] = Te), (t[43] = Ee))
    : (Ee = t[43]);
  let Oe;
  t[44] !== x || t[45] !== n
    ? ((Oe = () => {
        x ? n(`continue`) : v(!0);
      }),
      (t[44] = x),
      (t[45] = n),
      (t[46] = Oe))
    : (Oe = t[46]);
  let ke;
  t[47] !== a || t[48] !== L || t[49] !== S
    ? ((ke = (0, $.jsx)(Vt, { moving: L, warping: S, initialDetail: a })),
      (t[47] = a),
      (t[48] = L),
      (t[49] = S),
      (t[50] = ke))
    : (ke = t[50]);
  let Ae;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(`div`, { className: G.vignette, "aria-hidden": !0 })), (t[51] = Ae))
    : (Ae = t[51]);
  let je;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(ne, {
        children: (0, $.jsx)(R, {
          id: `space.introduction.brandedTitle`,
          defaultMessage: `Welcome to {productName}`,
          description: `Heading welcoming users to ChatGPT Space, the home for Pages and other files in ChatGPT. Translate the welcome phrase, but keep {productName} as the untranslated product name ChatGPT Space. You may reorder the placeholder to fit your language.`,
          values: { productName: `ChatGPT Space` },
        }),
      })),
      (t[52] = je))
    : (je = t[52]);
  let Me;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = (0, $.jsx)(l, {
        children: (0, $.jsx)(R, {
          id: `space.introduction.description`,
          defaultMessage: `Your new home to create, share, and collaborate with your team and ChatGPT`,
          description: `Space welcome message describing a place to create and collaborate with teammates and ChatGPT`,
        }),
      })),
      (t[53] = Me))
    : (Me = t[53]);
  let Pe;
  t[54] !== L || t[55] !== i
    ? ((Pe = () => {
        (k.current != null && lt(k.current), i?.(), b(L ? `warp` : `fade`));
      }),
      (t[54] = L),
      (t[55] = i),
      (t[56] = Pe))
    : (Pe = t[56]);
  let Fe;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, $.jsx)(R, {
        id: `space.introduction.continue`,
        defaultMessage: `Continue to Space`,
        description: `Button that dismisses the Space welcome animation and returns to the Space collection. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (t[57] = Fe))
    : (Fe = t[57]);
  let Ie;
  t[58] !== x || t[59] !== Pe
    ? ((Ie = (0, $.jsxs)(`div`, {
        className: G.copy,
        children: [
          je,
          Me,
          (0, $.jsx)(`div`, {
            className: G.continue,
            children: (0, $.jsx)(E, {
              ref: D,
              color: `mediaSolid`,
              size: `large`,
              disabled: x,
              onClick: Pe,
              children: Fe,
            }),
          }),
        ],
      })),
      (t[58] = x),
      (t[59] = Pe),
      (t[60] = Ie))
    : (Ie = t[60]);
  let Le;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Le = (0, $.jsx)(R, {
        id: `space.introduction.dragHelp`,
        defaultMessage: `Drag and release to move this sample. Use arrow keys to nudge, Enter to toss, or Home to return`,
        description: `Keyboard and pointer instructions for the movable example work in the Space welcome screen`,
      })),
      (t[61] = Le))
    : (Le = t[61]);
  let Re;
  t[62] === A
    ? (Re = t[63])
    : ((Re = (0, $.jsx)(`p`, { id: A, className: `sr-only`, children: Le })), (t[62] = A), (t[63] = Re));
  let ze;
  t[64] === o
    ? (ze = t[65])
    : ((ze = o.formatMessage({
        id: `space.introduction.dragPitch`,
        defaultMessage: `Drag Field Notes`,
        description: `Accessible name for the movable example presentation in the Space welcome screen`,
      })),
      (t[64] = o),
      (t[65] = ze));
  let V;
  t[66] !== A || t[67] !== L || t[68] !== ze || t[69] !== S
    ? ((V = (0, $.jsx)(Wn, { kind: `pitch`, label: ze, helpId: A, moving: L, warping: S })),
      (t[66] = A),
      (t[67] = L),
      (t[68] = ze),
      (t[69] = S),
      (t[70] = V))
    : (V = t[70]);
  let Be;
  t[71] === o
    ? (Be = t[72])
    : ((Be = o.formatMessage({
        id: `space.introduction.dragArticle`,
        defaultMessage: `Drag article`,
        description: `Accessible name for the movable Intelligence Age example article in the Space welcome screen`,
      })),
      (t[71] = o),
      (t[72] = Be));
  let H;
  t[73] !== A || t[74] !== L || t[75] !== Be || t[76] !== S
    ? ((H = (0, $.jsx)(Wn, { kind: `resume`, label: Be, helpId: A, moving: L, warping: S })),
      (t[73] = A),
      (t[74] = L),
      (t[75] = Be),
      (t[76] = S),
      (t[77] = H))
    : (H = t[77]);
  let Ve;
  t[78] === o
    ? (Ve = t[79])
    : ((Ve = o.formatMessage({
        id: `space.introduction.dragPottery`,
        defaultMessage: `Drag pottery website`,
        description: `Accessible name for the movable example pottery website in the Space welcome screen`,
      })),
      (t[78] = o),
      (t[79] = Ve));
  let He;
  t[80] !== A || t[81] !== L || t[82] !== Ve || t[83] !== S
    ? ((He = (0, $.jsx)(Wn, { kind: `pottery`, label: Ve, helpId: A, moving: L, warping: S })),
      (t[80] = A),
      (t[81] = L),
      (t[82] = Ve),
      (t[83] = S),
      (t[84] = He))
    : (He = t[84]);
  let Ue;
  t[85] === o
    ? (Ue = t[86])
    : ((Ue = o.formatMessage({
        id: `space.introduction.dragBlueprint`,
        defaultMessage: `Drag desk lamp blueprint`,
        description: `Accessible name for the movable example desk lamp blueprint in the Space welcome screen`,
      })),
      (t[85] = o),
      (t[86] = Ue));
  let We;
  t[87] !== A || t[88] !== L || t[89] !== Ue || t[90] !== S
    ? ((We = (0, $.jsx)(Wn, { kind: `blueprint`, label: Ue, helpId: A, moving: L, warping: S })),
      (t[87] = A),
      (t[88] = L),
      (t[89] = Ue),
      (t[90] = S),
      (t[91] = We))
    : (We = t[91]);
  let Ge;
  t[92] !== V || t[93] !== H || t[94] !== He || t[95] !== We
    ? ((Ge = (0, $.jsxs)(`div`, { className: G.samples, "data-work-samples": !0, children: [V, H, He, We] })),
      (t[92] = V),
      (t[93] = H),
      (t[94] = He),
      (t[95] = We),
      (t[96] = Ge))
    : (Ge = t[96]);
  let Ke = L && !x,
    qe;
  t[97] !== g || t[98] !== Ke
    ? ((qe = (0, $.jsx)(It, { moving: Ke, reduceMotion: g })), (t[97] = g), (t[98] = Ke), (t[99] = qe))
    : (qe = t[99]);
  let Je;
  t[100] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Je = (0, $.jsx)(`span`, {
        ref: k,
        className: G.you,
        "data-pointer-badge": !0,
        hidden: !0,
        "aria-hidden": !0,
        children: (0, $.jsx)(`span`, {
          className: G.cursorLabel,
          children: (0, $.jsx)(R, {
            id: `space.introduction.you`,
            defaultMessage: `You`,
            description: `Label following the user's pointer in the Space welcome animation`,
          }),
        }),
      })),
      (t[100] = Je))
    : (Je = t[100]);
  let Ye;
  t[101] !== L ||
  t[102] !== z ||
  t[103] !== B ||
  t[104] !== Ce ||
  t[105] !== Ee ||
  t[106] !== Oe ||
  t[107] !== ke ||
  t[108] !== Ie ||
  t[109] !== Re ||
  t[110] !== Ge ||
  t[111] !== qe ||
  t[112] !== S
    ? ((Ye = (0, $.jsxs)(s.div, {
        className: _e,
        "data-motion": L,
        "data-warping": S,
        onPointerMoveCapture: z,
        onPointerDownCapture: ve,
        onPointerCancelCapture: ye,
        onPointerLeave: xe,
        initial: B,
        animate: Ce,
        transition: Ee,
        onAnimationComplete: Oe,
        children: [ke, Ae, Ie, Re, Ge, qe, Je],
      })),
      (t[101] = L),
      (t[102] = z),
      (t[103] = B),
      (t[104] = Ce),
      (t[105] = Ee),
      (t[106] = Oe),
      (t[107] = ke),
      (t[108] = Ie),
      (t[109] = Re),
      (t[110] = Ge),
      (t[111] = qe),
      (t[112] = S),
      (t[113] = Ye))
    : (Ye = t[113]);
  let Xe;
  return (
    t[114] !== fe || t[115] !== pe || t[116] !== ge || t[117] !== Ye
      ? ((Xe = (0, $.jsx)(C, {
          open: !0,
          modal: !1,
          unstyledContent: !0,
          viewportSized: !0,
          variant: `onboarding`,
          contentPosition: `anchored`,
          contentClassName: fe,
          showDialogClose: !1,
          onOpenChange: pe,
          contentProps: ge,
          children: Ye,
        })),
        (t[114] = fe),
        (t[115] = pe),
        (t[116] = ge),
        (t[117] = Ye),
        (t[118] = Xe))
      : (Xe = t[118]),
    Xe
  );
}
function Yn(e) {
  e.preventDefault();
}
function Xn() {
  return !0;
}
function Zn(e) {
  return (
    document.addEventListener(`visibilitychange`, e),
    () => document.removeEventListener(`visibilitychange`, e)
  );
}
function Qn() {
  return !document.hidden;
}
var $n, Q, $;
function er() {
  return (er = e(() => {
    (($n = g()),
      j(),
      p(),
      o(),
      O(),
      (Q = a()),
      T(),
      Ee(),
      re(),
      D(),
      c(),
      x(),
      Pe(),
      Bt(),
      qt(),
      qn(),
      Ft(),
      ($ = u()));
  }))();
}
function tr() {
  let e = (0, rr.c)(3),
    t = M(le),
    n = M(it),
    r;
  return (
    e[0] !== t || e[1] !== n
      ? ((r = t && n != null ? (0, ar.jsx)(nr, { identityKey: n.key }, n.key) : null),
        (e[0] = t),
        (e[1] = n),
        (e[2] = r))
      : (r = e[2]),
    r
  );
}
function nr(e) {
  let n = (0, rr.c)(8),
    { identityKey: r } = e,
    i = t(v),
    a = M(nt),
    o,
    s;
  (n[0] !== r || n[1] !== i
    ? ((o = () => {
        let e = () => {
          tt(i);
        };
        return (
          window.addEventListener(`focus`, e),
          () => {
            (window.removeEventListener(`focus`, e), i.set(B, r, !1));
          }
        );
      }),
      (s = [i, r]),
      (n[0] = r),
      (n[1] = i),
      (n[2] = o),
      (n[3] = s))
    : ((o = n[2]), (s = n[3])),
    (0, ir.useEffect)(o, s));
  let c;
  return (
    n[4] !== r || n[5] !== a || n[6] !== i
      ? ((c = a
          ? (0, ar.jsx)(Jn, {
              onShown: () => {
                (V(i, Se, { action: Te.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_SHOWN }), i.set(B, r, !0));
              },
              onContinue: () => {
                (rt(i, r), V(i, Se, { action: Te.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_CONTINUED }));
              },
              onDismiss: (e) => {
                (e === `dismiss` &&
                  (rt(i, r), V(i, Se, { action: Te.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_DISMISSED })),
                  i.set(et, r, !1),
                  i.set(B, r, !1));
              },
            })
          : null),
        (n[4] = r),
        (n[5] = a),
        (n[6] = i),
        (n[7] = c))
      : (c = n[7]),
    c
  );
}
var rr, ir, ar;
function or() {
  return (or = e(() => {
    ((rr = g()), se(), O(), (ir = a()), Me(), H(), n(), z(), at(), er(), (ar = u()));
  }))();
}
function sr() {
  return (
    document.querySelector(
      `:is(${ze}, [role="dialog"][data-state="open"]:not([aria-modal="false"])):not(.beacon-modal-space_slides_introduction)`,
    ) != null
  );
}
function cr(e) {
  let n = (0, ur.c)(25),
    { identityKey: r, accountId: i, userId: a } = e,
    o = t(v),
    { locale: s } = I(),
    c = F(Le, `183803860`),
    [l, u] = (0, dr.useState)(!1),
    d = pe(),
    f = (0, dr.useSyncExternalStore)(_e, sr, lr),
    p = M(pr)[r],
    m;
  n[0] !== i || n[1] !== r || n[2] !== s || n[3] !== a
    ? ((m = { identityKey: r, accountId: i, userId: a, locale: s }),
      (n[0] = i),
      (n[1] = r),
      (n[2] = s),
      (n[3] = a),
      (n[4] = m))
    : (m = n[4]);
  let { data: h, isFetching: g, isError: _ } = F(mr, m),
    y = (0, dr.useRef)(!1);
  if (!c) return null;
  if (l) {
    let e;
    return (
      n[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, fr.jsx)(Ke, { initialGroupId: `presentation`, onClose: () => u(!1) })), (n[5] = e))
        : (e = n[5]),
      e
    );
  }
  if (p || g || _ || h == null || d || f) return null;
  let b;
  n[6] !== r || n[7] !== o
    ? ((b = () => {
        o.set(pr, (e) => ({ ...e, [r]: !0 }));
      }),
      (n[6] = r),
      (n[7] = o),
      (n[8] = b))
    : (b = n[8]);
  let x = b,
    S;
  n[9] === o
    ? (S = n[10])
    : ((S = (e) =>
        e.id === `create_slide`
          ? () => (V(o, xe, { action: Be.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED }), u(!0), !0)
          : void 0),
      (n[9] = o),
      (n[10] = S));
  let C;
  n[11] !== i || n[12] !== h
    ? ((C = () => {
        y.current || ((y.current = !0), ye({ beacon: h, accountId: i, eventType: `view` }));
      }),
      (n[11] = i),
      (n[12] = h),
      (n[13] = C))
    : (C = n[13]);
  let w;
  n[14] !== i || n[15] !== h || n[16] !== x
    ? ((w = () => {
        (x(), ye({ beacon: h, accountId: i, eventType: `dismiss` }));
      }),
      (n[14] = i),
      (n[15] = h),
      (n[16] = x),
      (n[17] = w))
    : (w = n[17]);
  let T;
  return (
    n[18] !== i || n[19] !== h || n[20] !== x || n[21] !== S || n[22] !== C || n[23] !== w
      ? ((T = (0, fr.jsx)(We, {
          beacon: h,
          eventAccountId: i,
          getActionOverride: S,
          onOpen: C,
          onDismiss: w,
          onResolve: x,
        })),
        (n[18] = i),
        (n[19] = h),
        (n[20] = x),
        (n[21] = S),
        (n[22] = C),
        (n[23] = w),
        (n[24] = T))
      : (T = n[24]),
    T
  );
}
function lr() {
  return !1;
}
var ur, dr, fr, pr, mr;
function hr() {
  return (hr = e(() => {
    ((ur = g()),
      se(),
      O(),
      (dr = a()),
      T(),
      Oe(),
      He(),
      Ue(),
      Ie(),
      Re(),
      ce(),
      H(),
      n(),
      je(),
      Ae(),
      Ge(),
      (fr = u()),
      (pr = oe(`space-slides-introduction-dismissed-v1`, {})),
      (mr = P(v, ({ accountId: e, identityKey: t, userId: n, locale: r }, { get: i }) => ({
        queryKey: [`space-slides-introduction`, t, r],
        enabled: !i(pr)[t] && i(Le, `183803860`),
        staleTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        queryFn: async ({ signal: t }) => {
          let r = window.electronBridge?.getDesktopUserAgent?.(),
            i = await ke.safeGet(`/beacons_v2`, {
              signal: t,
              expectedIdentity: { accountId: e, userId: n },
              additionalHeaders: {
                "Cache-Control": `no-store`,
                "x-openai-use-sheep": `1`,
                ...(r == null ? {} : { "User-Agent": r }),
              },
              parameters: { query: { surface: [`space-modal`] } },
            }),
            a = Ve(i.surfaces[`space-modal`], []);
          return a != null && Fe(a) && a.beacon_id === `space_slides_introduction` ? a : null;
        },
      }))));
  }))();
}
function gr() {
  let e = (0, vr.c)(9),
    t = M(he),
    n = M(nt),
    r = F(Le, `2648108507`),
    i = M(Ce),
    a = M(it),
    o = S(),
    s = M(ve);
  M(xr);
  let c = _(`/space`, o.pathname) != null || _(`/spaces/:spaceId`, o.pathname) != null;
  if (
    !t ||
    a == null ||
    i == null ||
    s == null ||
    (!n && !c) ||
    (!s.state?.showSpaceIntroduction && (!i || !c)) ||
    s.pathname !== o.pathname ||
    s.search !== o.search
  )
    return null;
  if (n && r) {
    if (s.key !== o.key) return null;
    let t;
    return (
      e[0] === o.state
        ? (t = e[1])
        : ((t = (0, br.jsx)(y, { to: `/space`, state: { ...o.state, libraryPreview: void 0 }, replace: !0 })),
          (e[0] = o.state),
          (e[1] = t)),
      t
    );
  }
  if (n && (o.pathname !== `/space` || o.search !== `?tab=suggested`)) {
    let t;
    return (
      e[2] === o.state
        ? (t = e[3])
        : ((t = (0, br.jsx)(y, { to: `/space?tab=suggested`, state: o.state, replace: !0 })),
          (e[2] = o.state),
          (e[3] = t)),
      t
    );
  }
  let l;
  return (
    e[4] !== a.accountId || e[5] !== a.key || e[6] !== a.userId || e[7] !== i
      ? ((l = (0, br.jsx)(
          _r,
          { accountId: a.accountId, userId: a.userId, identityKey: a.key, seen: i },
          a.key,
        )),
        (e[4] = a.accountId),
        (e[5] = a.key),
        (e[6] = a.userId),
        (e[7] = i),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
function _r(e) {
  let t = (0, vr.c)(21),
    { accountId: n, userId: r, identityKey: i, seen: a } = e,
    [o] = (0, yr.useState)(a),
    s = M(nt),
    c = M(ve),
    l = M(de);
  if (c == null) return null;
  let u;
  t[0] !== c.pathname || t[1] !== c.search
    ? ((u = we(c.pathname, c.search, `/space`)), (t[0] = c.pathname), (t[1] = c.search), (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] === c.search
    ? (f = t[4])
    : ((f = new URLSearchParams(c.search).get(`view`)), (t[3] = c.search), (t[4] = f));
  let p = f,
    m;
  t[5] !== d || t[6] !== c.pathname || t[7] !== c.state?.libraryPreview || t[8] !== l || t[9] !== p
    ? ((m =
        _(`/space`, c.pathname) != null &&
        d.tab === `suggested` &&
        !d.deleted &&
        !d.search &&
        (p == null || p === `slide`) &&
        c.state?.libraryPreview == null &&
        l == null),
      (t[5] = d),
      (t[6] = c.pathname),
      (t[7] = c.state?.libraryPreview),
      (t[8] = l),
      (t[9] = p),
      (t[10] = m))
    : (m = t[10]);
  let h = m,
    g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, br.jsx)(tr, {})), (t[11] = g)) : (g = t[11]);
  let v;
  t[12] !== n || t[13] !== i || t[14] !== h || t[15] !== s || t[16] !== o || t[17] !== r
    ? ((v = o && !s && h ? (0, br.jsx)(cr, { accountId: n, userId: r, identityKey: i }) : null),
      (t[12] = n),
      (t[13] = i),
      (t[14] = h),
      (t[15] = s),
      (t[16] = o),
      (t[17] = r),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] === v
      ? (y = t[20])
      : ((y = (0, br.jsxs)(br.Fragment, { children: [g, v] })), (t[19] = v), (t[20] = y)),
    y
  );
}
var vr, yr, br, xr;
function Sr() {
  return (Sr = e(() => {
    ((vr = g()),
      O(),
      (yr = a()),
      m(),
      Me(),
      me(),
      ge(),
      ae(),
      n(),
      je(),
      ue(),
      z(),
      or(),
      at(),
      hr(),
      (br = u()),
      (xr = A(v, ({ get: e, scope: t }) => ({
        enabled: e(he),
        queryFn: async () => (await fe(t), !0),
        queryKey: [`space-onboarding-entry`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }))));
  }))();
}
export { or as i, Sr as n, tr as r, gr as t };
//# sourceMappingURL=onboarding-30caadff656c.js.map
