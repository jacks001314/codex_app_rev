import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $xt as n,
  Cot as r,
  Cz as i,
  IDt as a,
  Ixt as o,
  JR as s,
  Jkt as c,
  Pxt as l,
  Tz as u,
  VDt as d,
  Vxt as f,
  YR as p,
  Ykt as m,
  Zxt as h,
  _Mt as g,
  _O as _,
  _wt as v,
  _xt as y,
  awt as b,
  az as x,
  fwt as S,
  gMt as C,
  gO as w,
  gwt as T,
  iwt as E,
  jDt as D,
  lDt as O,
  mO as k,
  oDt as A,
  oxt as j,
  oz as M,
  pwt as N,
  sDt as P,
  t3 as F,
  vO as I,
  vxt as L,
  vzt as R,
  wot as z,
  wxt as ee,
  xMt as B,
  yzt as V,
  zxt as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  D8t as ne,
  Dun as re,
  FFr as ie,
  G4n as ae,
  ITn as oe,
  J8t as se,
  NTn as ce,
  Ncn as le,
  O8t as ue,
  OPr as de,
  Pcn as fe,
  QDr as H,
  T8t as pe,
  Tun as me,
  XDr as he,
  Y8t as ge,
  Ymr as _e,
  Z4n as ve,
  awn as ye,
  cx as be,
  ehr as xe,
  g9t as Se,
  gun as Ce,
  h9t as we,
  hun as U,
  iNr as Te,
  jcn as Ee,
  kPr as De,
  lQt as Oe,
  nwn as ke,
  oQt as Ae,
  own as je,
  q8t as Me,
  rNr as Ne,
  rmt as Pe,
  uQt as Fe,
  ux as Ie,
  wpt as Le,
  wun as Re,
  zFr as ze,
} from "./app-initial-5851df3f6cb1.js";
import { gb as Be, hb as Ve } from "./app-primary-fe8a450b3b04.js";
import { n as He, t as Ue } from "./modal-91ebdd72146e.js";
import { n as We, t as Ge } from "./template-gallery-dialog-26b17a1e644b.js";
import { a as Ke, i as qe, n as Je, o as Ye, r as Xe, s as Ze, t as Qe } from "./assets-4f7817c757db.js";
import { a as $e, c as et, i as tt, n as nt, r as rt, t as it } from "./introduction-state-17fe09422f0a.js";
function at({
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
function ot(e, t, n = `top-left`) {
  let r = t.x - e.x - e.width / 2,
    i = t.y - e.y - e.height / 2,
    a = Math.abs(r) < 6 ? n.endsWith(`right`) : r > 0;
  return `${(Math.abs(i) < 6 ? n.startsWith(`bottom`) : i > 0) ? `bottom` : `top`}-${a ? `right` : `left`}`;
}
function st(e) {
  let t = e.querySelector(`[data-pointer-badge]`);
  if (t?.dataset.pointerClientX == null || t.dataset.pointerClientY == null) return;
  t.hidden = !1;
  let n = e.getBoundingClientRect(),
    r = Number(t.dataset.pointerClientX),
    i = Number(t.dataset.pointerClientY);
  if (r < n.left || r >= n.right || i < n.top || i >= n.bottom) {
    ct(t);
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
function ct(e) {
  ((e.hidden = !0), delete e.dataset.pointerClientX, delete e.dataset.pointerClientY);
}
function lt(e, t, n) {
  let r = W(e, `[data-work-samples]`),
    i = Array.from(r.querySelectorAll(`[data-work-sample]`)).map((e) => ({
      element: e,
      document: W(e, `[data-artwork-document]`),
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
      asset: t === 4 ? mt : t % 4,
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
        let n = W(e.job.element, `[data-editable-copy]`).getClientRects(),
          r = n[n.length - 1];
        r != null &&
          (t = {
            x: ((r.right - b.left) * _) / (b.width || 1),
            y: ((r.bottom - b.top) * v) / (b.height || 1),
          });
      }
      if (e.job.paletteReady && e.job.palette != null) {
        let n = W(e.job.palette, `i:nth-child(2)`).getBoundingClientRect();
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
    return e === s[0] || t === mt || s.every((n) => n === e || n === s[0] || n.asset !== t);
  }
  function O(e, t, n) {
    let r = s.filter((n) => n !== e && n.asset === t).map((e) => e.slot);
    ((e.asset = t), (e.slot = [0, 1, 2, 3, 4].find((e) => !r.includes(e)) ?? 0), E(e, n));
  }
  function k(e) {
    ((e.selected = !0),
      (e.element.dataset.editing = `true`),
      e.text && (e.element.dataset.selected = `true`));
  }
  function A(e, t, n = !1) {
    let r = ht[e],
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
        let e = W(p, `[data-editable-copy]`),
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
          dt(e, o);
        };
        break;
      }
      case `color`: {
        let t = m.document.style.getPropertyValue(`--paper-color`) || (e === 0 ? `#ff5b35` : `#bfb8dc`),
          n = e === 0 ? [`#ff784f`, `#ff5b35`][h % 2] : [`#d9cfbd`, `#bfb8dc`][h % 2];
        ((_ = W(m.document, `[data-palette]`)),
          delete _.dataset.picked,
          delete _.dataset.pressed,
          Array.from(_.querySelectorAll(`i`)).forEach((e, r) => ut(e, `--swatch`, [t, n, `#cfc4f4`][r])),
          (g = 0.8),
          (v = (e) => {
            let r =
              `#` +
              [1, 3, 5]
                .map((r) =>
                  Math.round(G(parseInt(t.slice(r, r + 2), 16), parseInt(n.slice(r, r + 2), 16), ft(e)))
                    .toString(16)
                    .padStart(2, `0`),
                )
                .join(``);
            ut(m.document, `--paper-color`, r);
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
        ((g = 1.65), (v = (n) => e.forEach((e, r) => ut(e, `translate`, G(t[r], a[r], pt(n)) + `px`))));
        break;
      }
      case `image`: {
        let e = W(p, `[data-artwork-image]`),
          t = parseFloat(e.style.scale) || 1,
          n = t > 1 ? 1 : 1.08;
        v = (r) => {
          ut(e, `scale`, String(G(t, n, pt(r))));
        };
        break;
      }
    }
    let y = {
      asset: e,
      person: t,
      element: p,
      pin: W(p, `[data-edit-pin]`),
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
      n && ((t.trip = null), (y.age = 0.24), k(y)));
  }
  function j(e, t = !0) {
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
  function M(e = !1) {
    for (; f.length > 0;) j(f[0]);
    if (e) {
      for (let e of s) ((e.trip = null), (e.nudge = null), (e.offset = { x: 0, y: 0 }));
      P();
    }
  }
  function N() {
    ((_ = e.clientWidth), (v = e.clientHeight), (y = _ > 0 && (_ <= 540 || v <= 460)), (r.inert = y));
    for (let e of s) ((e.width = e.element.offsetWidth), (e.height = e.element.offsetHeight));
    for (let e of i) {
      let t =
        (e.element.clientWidth / Number(e.document.dataset.documentWidth)) *
        (parseFloat(getComputedStyle(W(e.element, `[data-drift]`)).scale) || 1);
      (ut(e.document, `--selection-stroke`, 1.15 / Math.max(0.1, t) + `px`),
        ut(e.document, `--handle-size`, 4 / Math.max(0.1, t) + `px`));
    }
    y ? M(!0) : P();
  }
  function P() {
    (w(), F(0, !0));
  }
  function F(e, t = !1) {
    let n = f.flatMap((e) => [C(e.element), ...(e.paletteReady && e.palette != null ? [C(e.palette)] : [])]),
      r = s.map((e) => ({ x: e.x, y: e.y, width: e.width, height: e.height })),
      i = s.map(T);
    s.forEach((a, o) => {
      let s = i[o],
        c = at({
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
          a.destination == null || t ? c : { x: G(a.destination.x, c.x, l), y: G(a.destination.y, c.y, l) }),
        a.painted == null || t)
      )
        ((a.x = c.x), (a.y = c.y));
      else if (a.trip != null) {
        let e = Math.min(1, Math.max(0, (p - a.trip.start) / a.trip.duration)),
          t = e ** 3 * (e * (e * 6 - 15) + 10);
        ((a.x = G(a.trip.x, a.destination.x, t)),
          (a.y = G(a.trip.y, a.destination.y, t)),
          e === 1 && ((a.trip = null), (a.nextNudge = p + 1.2 + (a.phase % 1.5))));
      } else ((a.x = G(a.x, c.x, l)), (a.y = G(a.y, c.y, l)));
      a.painted = { x: a.x, y: a.y };
      let u = ot({ ...a.painted, width: a.width, height: a.height }, s, a.element.dataset.pointerCorner);
      (a.element.dataset.pointerCorner !== u && (a.element.dataset.pointerCorner = u),
        ut(a.element, `transform`, `translate3d(${a.x}px, ${a.y}px, 0px)`));
      let d = String(a.asset);
      a.element.dataset.asset !== d && (a.element.dataset.asset = d);
      let f = String(a.trip != null);
      a.element.dataset.traveling !== f && (a.element.dataset.traveling = f);
    });
  }
  function I(e) {
    let t = Math.min(0.1, Math.max(0, e));
    if (((p += t), w(), y)) M();
    else {
      if (f.length === 0) {
        for (let e of s) e !== s[0] && !d.includes(e) && e.asset !== mt && O(e, mt);
        i.forEach((e, t) => A(t, d[t], !0));
      }
      for (let e of f)
        if (e.person.trip == null && i[e.asset].element.dataset.dragging !== `true`) {
          if (
            ((e.age += t),
            e.age >= 0.22 && !e.selected && k(e),
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
        (j(e, t != null), t != null && (m = p + 5.8), A(e.asset, n));
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
          ((e.offset = { x: G(t.x, t.toX, ft(n)), y: G(t.y, t.toY, ft(n)) }), n === 1 && (e.nudge = null));
        }
      }
    F(t);
  }
  N();
  let L = new ResizeObserver(N);
  return (
    L.observe(e),
    i.forEach((e) => L.observe(e.element)),
    s.forEach((e) => L.observe(e.element)),
    {
      tick: I,
      position: P,
      finishEdits: M,
      dispose: () => {
        (L.disconnect(), M(), (r.inert = !1));
      },
    }
  );
}
function W(e, t) {
  let n = e.querySelector(t);
  if (n == null) throw Error(`Missing Space animation element: ` + t);
  return n;
}
function ut(e, t, n) {
  e.style.getPropertyValue(t) !== n && e.style.setProperty(t, n);
}
function dt(e, t) {
  let n = e.firstChild;
  n instanceof Text && n.nextSibling == null
    ? n.data !== t && (n.data = t)
    : e.textContent !== t && (e.textContent = t);
}
function G(e, t, n) {
  return e + (t - e) * n;
}
function ft(e) {
  return e * e * (3 - 2 * e);
}
function pt(e) {
  return e >= 1 ? 1 : 1 - Math.exp(-8 * e) * (Math.cos(12 * e) + (2 / 3) * Math.sin(12 * e));
}
var mt, ht;
function gt() {
  return (gt = e(() => {
    ((mt = 1),
      (ht = [
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
var _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, K;
function Pt() {
  return (Pt = e(() => {
    ((_t = `_backdrop_izirh_2`),
      (vt = `_scene_izirh_7`),
      (yt = `_starfield_izirh_20`),
      (bt = `_vignette_izirh_21`),
      (xt = `_samples_izirh_22`),
      (St = `_collaborators_izirh_23`),
      (Ct = `_copy_izirh_35`),
      (wt = `_sample_izirh_22`),
      (Tt = `_dragOffset_izirh_153`),
      (Et = `_drift_izirh_154`),
      (Dt = `_sampleButton_izirh_155`),
      (Ot = `_sampleSurface_izirh_156`),
      (kt = `_float_izirh_408`),
      (At = `_cornerProbe_izirh_194`),
      (jt = `_cursorLabel_izirh_208`),
      (Mt = `_collaborator_izirh_23`),
      (Nt = `_you_izirh_257`),
      (K = {
        backdrop: _t,
        scene: vt,
        starfield: yt,
        vignette: bt,
        samples: xt,
        collaborators: St,
        copy: Ct,
        continue: `_continue_izirh_68`,
        sample: wt,
        dragOffset: Tt,
        drift: Et,
        sampleButton: Dt,
        sampleSurface: Ot,
        float: kt,
        cornerProbe: At,
        cursorLabel: jt,
        collaborator: Mt,
        you: Nt,
      }));
  }))();
}
function Ft(e) {
  let t = (0, Lt.c)(18),
    { moving: n, reduceMotion: r } = e,
    { locale: i } = d(),
    o = (0, Rt.useRef)(null),
    s = (0, Rt.useRef)(null),
    c,
    l;
  (t[0] === i
    ? ((c = t[1]), (l = t[2]))
    : ((c = () => {
        let e = o.current,
          t = e?.parentElement;
        if (e == null || t == null) return;
        let n = lt(t, e, i);
        return (
          (s.current = n),
          () => {
            (n.dispose(), (s.current = null));
          }
        );
      }),
      (l = [i]),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l)),
    (0, Rt.useLayoutEffect)(c, l));
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
              P.postRender(n);
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
                A(n));
            }
          );
        }
        let r = (t) => {
          let { delta: n } = t;
          e.tick(n / 1e3);
        };
        return (P.postRender(r, !0), () => A(r));
      }),
      (t[3] = n),
      (t[4] = u));
  let f;
  (t[5] !== i || t[6] !== n ? ((f = [n, i]), (t[5] = i), (t[6] = n), (t[7] = f)) : (f = t[7]),
    (0, Rt.useEffect)(u, f));
  let p;
  t[8] === r
    ? (p = t[9])
    : ((p = () => {
        r && s.current?.finishEdits(!0);
      }),
      (t[8] = r),
      (t[9] = p));
  let m;
  (t[10] !== i || t[11] !== r ? ((m = [r, i]), (t[10] = i), (t[11] = r), (t[12] = m)) : (m = t[12]),
    (0, Rt.useEffect)(p, m));
  let h;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, q.jsxs)(It, {
        children: [
          (0, q.jsx)(x, {}),
          (0, q.jsx)(a, {
            id: `space.introduction.collaborator.chatgpt`,
            defaultMessage: `ChatGPT`,
            description: `ChatGPT product name on a collaborating assistant's cursor in the Space welcome animation`,
          }),
        ],
      })),
      (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, q.jsx)(It, {
        children: (0, q.jsx)(a, {
          id: `space.introduction.collaborator.henry`,
          defaultMessage: `Henry Caldwell`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(It, {
        children: (0, q.jsx)(a, {
          id: `space.introduction.collaborator.eric`,
          defaultMessage: `Eric Thompson`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, q.jsx)(It, {
        children: (0, q.jsx)(a, {
          id: `space.introduction.collaborator.jasmine`,
          defaultMessage: `Jasmine Liu`,
          description: `Fictional collaborator's name in the Space welcome animation`,
        }),
      })),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, q.jsxs)(`div`, {
          ref: o,
          className: K.collaborators,
          "aria-hidden": !0,
          children: [
            h,
            g,
            _,
            v,
            (0, q.jsx)(It, {
              children: (0, q.jsx)(a, {
                id: `space.introduction.collaborator.maya`,
                defaultMessage: `Maya Patel`,
                description: `Fictional collaborator's name in the Space welcome animation`,
              }),
            }),
          ],
        })),
        (t[17] = y))
      : (y = t[17]),
    y
  );
}
function It(e) {
  let t = (0, Lt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, q.jsx)(`span`, {
          className: K.collaborator,
          "data-collaborator": !0,
          children: (0, q.jsx)(`span`, { className: K.cursorLabel, children: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Lt, Rt, q;
function zt() {
  return (zt = e(() => {
    ((Lt = R()), O(), (Rt = V()), D(), M(), gt(), Pt(), (q = B()));
  }))();
}
function Bt(e) {
  let t = (0, Ht.c)(10),
    { moving: n, warping: r, initialDetail: i } = e,
    a = i === void 0 ? `full` : i,
    o = (0, Ut.useRef)(null),
    s = (0, Ut.useRef)(null),
    c;
  t[0] === r ? (c = t[1]) : ((c = () => r), (t[0] = r), (t[1] = c));
  let l = (0, Ut.useEffectEvent)(c),
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
        let c = Gt.map(Vt),
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
              k = Math.cos(i.time * 0.19),
              A = Math.sin(i.time * 0.14),
              j = Math.cos(i.time * 0.14),
              M = 1 - Math.exp(-g * 7),
              N = 1 - Math.exp(-g * 2.8);
            (t.clearRect(0, 0, a, o), (t.lineCap = `round`));
            let P = null;
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
                ((s += i.parallaxX / e.z + (O * e.cosPhase + k * e.sinPhase) * 3),
                  (l += i.parallaxY / e.z + (j * e.cosPhase - A * e.sinPhase) * 2),
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
                let c = t || r ? M : N;
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
                ((t.strokeStyle = Gt[e.color]),
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
                let n = Gt[e.color];
                (P !== n && ((t.fillStyle = n), (P = n)), t.fillRect(s, l, f, f));
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
    (0, Ut.useEffect)(u, d));
  let f;
  return (
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Wt.jsx)(`canvas`, { ref: o, className: K.starfield, "aria-hidden": !0 })), (t[9] = f))
      : (f = t[9]),
    f
  );
}
function Vt(e) {
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
var Ht, Ut, Wt, Gt;
function Kt() {
  return (Kt = e(() => {
    ((Ht = R()),
      (Ut = V()),
      Pt(),
      (Wt = B()),
      (Gt = [`#f5f6fb`, `#7ab1fe`, `#6dcbf4`, `#fa994c`, `#f87915`]));
  }))();
}
var qt,
  Jt,
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
  J;
function kn() {
  return (kn = e(() => {
    ((qt = `_artwork_u7y79_2`),
      (Jt = `_document_u7y79_8`),
      (Yt = `_image_u7y79_22`),
      (Xt = `_imagePlaceholder_u7y79_32`),
      (Zt = `_editable_u7y79_54`),
      (Qt = `_handles_u7y79_68`),
      ($t = `_pitchPaper_u7y79_71`),
      (en = `_shopBackdrop_u7y79_71`),
      (tn = `_blueprintPaper_u7y79_71`),
      (nn = `_pin_u7y79_107`),
      (rn = `_caret_u7y79_118`),
      (an = `_pitchTitle_u7y79_146`),
      (on = `_pitchSubtitle_u7y79_159`),
      (sn = `_pitchTagline_u7y79_170`),
      (cn = `_palette_u7y79_184`),
      (ln = `_articleTitle_u7y79_237`),
      (un = `_articleDate_u7y79_245`),
      (dn = `_articleImage_u7y79_253`),
      (fn = `_articleImageCrop_u7y79_258`),
      (pn = `_articleIntro_u7y79_267`),
      (mn = `_articleParagraph_u7y79_272`),
      (hn = `_browserBar_u7y79_288`),
      (gn = `_store_u7y79_310`),
      (_n = `_storeHeader_u7y79_318`),
      (vn = `_storeName_u7y79_327`),
      (yn = `_hero_u7y79_331`),
      (bn = `_products_u7y79_335`),
      (xn = `_product_u7y79_335`),
      (Sn = `_lampDrawing_u7y79_380`),
      (Cn = `_measurements_u7y79_387`),
      (wn = `_measurementGuides_u7y79_396`),
      (Tn = `_measurementArrows_u7y79_400`),
      (En = `_width_u7y79_404`),
      (Dn = `_height_u7y79_405`),
      (On = `_blueprintName_u7y79_406`),
      (J = {
        artwork: qt,
        document: Jt,
        image: Yt,
        imagePlaceholder: Xt,
        editable: Zt,
        handles: Qt,
        pitchPaper: $t,
        shopBackdrop: en,
        blueprintPaper: tn,
        pin: nn,
        caret: rn,
        pitchTitle: an,
        pitchSubtitle: on,
        pitchTagline: sn,
        palette: cn,
        articleTitle: ln,
        articleDate: un,
        articleImage: dn,
        articleImageCrop: fn,
        articleIntro: pn,
        articleParagraph: mn,
        browserBar: hn,
        store: gn,
        storeHeader: _n,
        storeName: vn,
        hero: yn,
        products: bn,
        product: xn,
        lampDrawing: Sn,
        measurements: Cn,
        measurementGuides: wn,
        measurementArrows: Tn,
        width: En,
        height: Dn,
        blueprintName: On,
      }));
  }))();
}
function An(e) {
  let t = (0, jn.c)(10),
    { className: n, src: r, kind: i } = e,
    [a, o] = (0, Mn.useState)(null),
    s = a?.src === r ? a.status : null,
    c = s !== `loaded` && J.imagePlaceholder,
    l;
  t[0] !== n || t[1] !== c ? ((l = C(J.image, c, n)), (t[0] = n), (t[1] = c), (t[2] = l)) : (l = t[2]);
  let u;
  t[3] !== r || t[4] !== s
    ? ((u =
        r !== `` &&
        s !== `failed` &&
        (0, Nn.jsx)(`img`, {
          className: J.image,
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
  let d;
  return (
    t[6] !== i || t[7] !== l || t[8] !== u
      ? ((d = (0, Nn.jsx)(`span`, {
          className: l,
          "data-artwork-image": !0,
          "data-image-kind": i,
          "aria-hidden": !0,
          children: u,
        })),
        (t[6] = i),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var jn, Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    ((jn = R()), g(), (Mn = V()), kn(), (Nn = B()));
  }))();
}
function Fn(e) {
  let t = (0, Vn.c)(24),
    { kind: n, moving: r } = e,
    { locale: i } = d(),
    [a, o] = Hn[n],
    s = `0 0 ${a} ${o}`,
    c;
  t[0] === n ? (c = t[1]) : ((c = n === `pitch` && (0, X.jsx)(Ln, {})), (t[0] = n), (t[1] = c));
  let l;
  t[2] === n ? (l = t[3]) : ((l = n === `resume` && (0, X.jsx)(Rn, {})), (t[2] = n), (t[3] = l));
  let u;
  t[4] === n ? (u = t[5]) : ((u = n === `pottery` && (0, X.jsx)(zn, {})), (t[4] = n), (t[5] = u));
  let f;
  t[6] === n ? (f = t[7]) : ((f = n === `blueprint` && (0, X.jsx)(Bn, {})), (t[6] = n), (t[7] = f));
  let p;
  t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== f || t[12] !== a
    ? ((p = (0, X.jsxs)(`div`, {
        className: J.document,
        "data-artwork-document": !0,
        "data-document-width": a,
        children: [c, l, u, f],
      })),
      (t[8] = c),
      (t[9] = l),
      (t[10] = u),
      (t[11] = f),
      (t[12] = a),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== o || t[15] !== i || t[16] !== p || t[17] !== a
    ? ((m = (0, X.jsx)(`foreignObject`, { width: a, height: o, children: p }, i)),
      (t[14] = o),
      (t[15] = i),
      (t[16] = p),
      (t[17] = a),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== n || t[20] !== r || t[21] !== s || t[22] !== m
      ? ((h = (0, X.jsx)(`svg`, {
          className: J.artwork,
          viewBox: s,
          "aria-hidden": !0,
          "data-kind": n,
          "data-moving": r,
          children: m,
        })),
        (t[19] = n),
        (t[20] = r),
        (t[21] = s),
        (t[22] = m),
        (t[23] = h))
      : (h = t[23]),
    h
  );
}
function Y(e) {
  let t = (0, Vn.c)(12),
    { field: n, className: r, revision: i, children: a } = e,
    o;
  t[0] === r ? (o = t[1]) : ((o = C(J.editable, r)), (t[0] = r), (t[1] = o));
  let s;
  t[2] !== a || t[3] !== i
    ? ((s =
        i == null
          ? a
          : (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`span`, { "data-editable-copy": !0, children: a }),
                (0, X.jsx)(`i`, { className: J.caret }),
              ],
            })),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c, l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsxs)(`span`, {
        className: J.handles,
        children: [(0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {})],
      })),
      (l = (0, X.jsx)(`span`, { className: J.pin, "data-edit-pin": !0 })),
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
function In() {
  let e = (0, Vn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, X.jsxs)(`span`, {
          className: J.palette,
          "data-palette": !0,
          children: [(0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {}), (0, X.jsx)(`i`, {})],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ln() {
  let e = (0, Vn.c)(21),
    t = d(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Y, { field: `pitch-paper`, className: J.pitchPaper })), (e[0] = n))
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
    ? ((i = (0, X.jsx)(a, {
        id: `space.introduction.art.pitchTitle`,
        defaultMessage: `Field
Notes`,
        description: `Two-line title on an illustrative presentation in the Space welcome animation; preserve the line break between the words`,
      })),
      (e[3] = i))
    : (i = e[3]);
  let o;
  e[4] === r
    ? (o = e[5])
    : ((o = (0, X.jsx)(Y, { field: `pitch-title`, className: J.pitchTitle, revision: r, children: i })),
      (e[4] = r),
      (e[5] = o));
  let s;
  e[6] === t
    ? (s = e[7])
    : ((s = t.formatMessage({
        id: `space.introduction.art.pitchSubtitleRevision`,
        defaultMessage: `A fresh perspective`,
        description: `Revised subtitle being typed into an illustrative presentation in the Space welcome animation`,
      })),
      (e[6] = t),
      (e[7] = s));
  let c;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(a, {
        id: `space.introduction.art.pitchSubtitle`,
        defaultMessage: `A new perspective`,
        description: `Small subtitle at the lower right of an illustrative presentation in the Space welcome animation`,
      })),
      (e[8] = c))
    : (c = e[8]);
  let l;
  e[9] === s
    ? (l = e[10])
    : ((l = (0, X.jsx)(Y, { field: `pitch-subtitle`, className: J.pitchSubtitle, revision: s, children: c })),
      (e[9] = s),
      (e[10] = l));
  let u;
  e[11] === t
    ? (u = e[12])
    : ((u = t.formatMessage({
        id: `space.introduction.art.pitchTaglineRevision`,
        defaultMessage: `2027`,
        description: `Revised year being typed into a pill at the upper left of an illustrative presentation in the Space welcome animation`,
      })),
      (e[11] = t),
      (e[12] = u));
  let f;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(a, {
        id: `space.introduction.art.pitchTagline`,
        defaultMessage: `2026`,
        description: `Year shown in a pill at the upper left of an illustrative presentation in the Space welcome animation`,
      })),
      (e[13] = f))
    : (f = e[13]);
  let p;
  e[14] === u
    ? (p = e[15])
    : ((p = (0, X.jsx)(Y, { field: `pitch-tagline`, className: J.pitchTagline, revision: u, children: f })),
      (e[14] = u),
      (e[15] = p));
  let m;
  e[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, X.jsx)(In, {})), (e[16] = m)) : (m = e[16]);
  let h;
  return (
    e[17] !== o || e[18] !== l || e[19] !== p
      ? ((h = (0, X.jsxs)(X.Fragment, { children: [n, o, l, p, m] })),
        (e[17] = o),
        (e[18] = l),
        (e[19] = p),
        (e[20] = h))
      : (h = e[20]),
    h
  );
}
function Rn() {
  let e = (0, Vn.c)(17),
    t = d(),
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
    ? ((r = (0, X.jsx)(a, {
        id: `space.introduction.art.articleTitle`,
        defaultMessage: `The Intelligence Age`,
        description: `Title of the illustrative article in the Space welcome animation`,
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  e[3] === n
    ? (i = e[4])
    : ((i = (0, X.jsx)(Y, { field: `article-title`, className: J.articleTitle, revision: n, children: r })),
      (e[3] = n),
      (e[4] = i));
  let o;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`span`, {
        className: J.articleDate,
        children: (0, X.jsx)(a, {
          id: `space.introduction.art.articleDate`,
          defaultMessage: `September 23, 2024`,
          description: `Publication date shown beneath the Intelligence Age article title in the Space welcome animation`,
        }),
      })),
      (e[5] = o))
    : (o = e[5]);
  let s;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(Y, {
        field: `article-image`,
        className: J.articleImage,
        children: (0, X.jsx)(`span`, {
          className: J.articleImageCrop,
          children: (0, X.jsx)(An, { src: Ke, kind: `landscape` }),
        }),
      })),
      (e[6] = s))
    : (s = e[6]);
  let c;
  e[7] === t
    ? (c = e[8])
    : ((c = t.formatMessage({
        id: `space.introduction.art.articleIntroRevision`,
        defaultMessage: `Over the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.`,
        description: `Revised opening paragraph being typed into the illustrative Intelligence Age article in the Space welcome animation`,
      })),
      (e[7] = t),
      (e[8] = c));
  let l;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(a, {
        id: `space.introduction.art.articleIntro`,
        defaultMessage: `In the next couple of decades, we will be able to do things that would have seemed like magic to our grandparents.`,
        description: `Opening paragraph of the illustrative Intelligence Age article in the Space welcome animation`,
      })),
      (e[9] = l))
    : (l = e[9]);
  let u;
  e[10] === c
    ? (u = e[11])
    : ((u = (0, X.jsx)(Y, { field: `article-intro`, className: J.articleIntro, revision: c, children: l })),
      (e[10] = c),
      (e[11] = u));
  let f;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(`span`, {
        className: J.articleParagraph,
        children: (0, X.jsx)(a, {
          id: `space.introduction.art.articleAcceleration`,
          defaultMessage: `This phenomenon is not new, but it will be newly accelerated. People have become dramatically more capable over time; we can already accomplish things now that our predecessors would have believed to be impossible.`,
          description: `Second paragraph of the illustrative Intelligence Age article in the Space welcome animation`,
        }),
      })),
      (e[12] = f))
    : (f = e[12]);
  let p;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(`span`, {
        className: J.articleParagraph,
        children: (0, X.jsx)(a, {
          id: `space.introduction.art.articleProgress`,
          defaultMessage: `We are more capable not because of genetic change, but because we benefit from the infrastructure of society being way smarter and more capable than any one of us; in an important sense, society itself is a form of advanced intelligence. Our grandparents – and the generations that came before them – built and achieved great things. They contributed to the scaffolding of human progress that we all benefit from. AI will give people tools to solve hard problems and help us add new struts to that scaffolding that we could not have figured out on our own. The story of progress will continue, and our children will be able to do things we can’t.`,
          description: `Final visible paragraph of the illustrative Intelligence Age article; it continues below the clipped miniature page in the Space welcome animation`,
        }),
      })),
      (e[13] = p))
    : (p = e[13]);
  let m;
  return (
    e[14] !== i || e[15] !== u
      ? ((m = (0, X.jsxs)(X.Fragment, { children: [i, o, s, u, f, p] })),
        (e[14] = i),
        (e[15] = u),
        (e[16] = m))
      : (m = e[16]),
    m
  );
}
function zn() {
  let e = (0, Vn.c)(16),
    t = d(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Y, { field: `shop-backdrop`, className: J.shopBackdrop })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsxs)(`span`, {
        className: J.browserBar,
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
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(a, {
        id: `space.introduction.art.store`,
        defaultMessage: `R&D KILN`,
        description: `Fictional ceramics shop name in the Space welcome animation`,
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  e[5] === i
    ? (s = e[6])
    : ((s = (0, X.jsx)(`span`, {
        className: J.storeHeader,
        children: (0, X.jsx)(Y, { field: `shop-name`, className: J.storeName, revision: i, children: o }),
      })),
      (e[5] = i),
      (e[6] = s));
  let c;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(An, { className: J.hero, src: Xe, kind: `hero` })), (e[7] = c))
    : (c = e[7]);
  let l;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsxs)(Y, {
        field: `product-0`,
        className: J.product,
        children: [
          (0, X.jsx)(An, { src: Ye, kind: `mug` }),
          (0, X.jsx)(a, {
            id: `space.introduction.art.mug`,
            defaultMessage: `Ridge Mug`,
            description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
          }),
        ],
      })),
      (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsxs)(Y, {
        field: `product-1`,
        className: J.product,
        children: [
          (0, X.jsx)(An, { src: Qe, kind: `bowl` }),
          (0, X.jsx)(a, {
            id: `space.introduction.art.bowl`,
            defaultMessage: `Stone Bowl`,
            description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
          }),
        ],
      })),
      (e[9] = u))
    : (u = e[9]);
  let f;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsxs)(`span`, {
        className: J.products,
        children: [
          l,
          u,
          (0, X.jsxs)(Y, {
            field: `product-2`,
            className: J.product,
            children: [
              (0, X.jsx)(An, { src: Ze, kind: `pitcher` }),
              (0, X.jsx)(a, {
                id: `space.introduction.art.pitcher`,
                defaultMessage: `River Pitcher`,
                description: `Fictional product in an illustrative pottery website in the Space welcome animation`,
              }),
            ],
          }),
        ],
      })),
      (e[10] = f))
    : (f = e[10]);
  let p;
  e[11] === s
    ? (p = e[12])
    : ((p = (0, X.jsxs)(`span`, { className: J.store, children: [s, c, f] })), (e[11] = s), (e[12] = p));
  let m;
  e[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, X.jsx)(In, {})), (e[13] = m)) : (m = e[13]);
  let h;
  return (
    e[14] === p
      ? (h = e[15])
      : ((h = (0, X.jsxs)(X.Fragment, { children: [n, r, p, m] })), (e[14] = p), (e[15] = h)),
    h
  );
}
function Bn() {
  let e = (0, Vn.c)(22),
    t = d(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, X.jsx)(Y, { field: `blueprint-paper`, className: J.blueprintPaper })), (e[0] = n))
    : (n = e[0]);
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, X.jsx)(`span`, {
        className: J.lampDrawing,
        children: (0, X.jsx)(An, { src: Je, kind: `lamp` }),
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, X.jsxs)(`svg`, {
        className: J.measurements,
        viewBox: `0 0 500 658`,
        children: [
          (0, X.jsx)(`path`, { d: `M215 73H412 M94 152V333 M94 365V533` }),
          (0, X.jsx)(`path`, {
            className: J.measurementGuides,
            d: `M215 74V96 M412 74V96 M90 151H138 M95 533H138`,
          }),
          (0, X.jsx)(`path`, {
            className: J.measurementArrows,
            d: `M215 73L223 69V77Z M413 73L405 69V77Z M94 151L98 159H90Z M94 534L98 526H90Z`,
          }),
        ],
      })),
      (e[2] = i))
    : (i = e[2]);
  let o;
  e[3] === t
    ? (o = e[4])
    : ((o = t.formatMessage({
        id: `space.introduction.art.lampWidthRevision`,
        defaultMessage: `200 mm`,
        description: `Revised width measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[3] = t),
      (e[4] = o));
  let s;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(a, {
        id: `space.introduction.art.lampWidth`,
        defaultMessage: `180 mm`,
        description: `Width measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[5] = s))
    : (s = e[5]);
  let c;
  e[6] === o
    ? (c = e[7])
    : ((c = (0, X.jsx)(Y, { field: `blueprint-width`, className: J.width, revision: o, children: s })),
      (e[6] = o),
      (e[7] = c));
  let l;
  e[8] === t
    ? (l = e[9])
    : ((l = t.formatMessage({
        id: `space.introduction.art.lampHeightRevision`,
        defaultMessage: `440 mm`,
        description: `Revised height measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[8] = t),
      (e[9] = l));
  let u;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(a, {
        id: `space.introduction.art.lampHeight`,
        defaultMessage: `420 mm`,
        description: `Height measurement on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[10] = u))
    : (u = e[10]);
  let f;
  e[11] === l
    ? (f = e[12])
    : ((f = (0, X.jsx)(Y, { field: `blueprint-height`, className: J.height, revision: l, children: u })),
      (e[11] = l),
      (e[12] = f));
  let p;
  e[13] === t
    ? (p = e[14])
    : ((p = t.formatMessage({
        id: `space.introduction.art.lampTitleRevision`,
        defaultMessage: `TASK LAMP`,
        description: `Revised title being typed on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[13] = t),
      (e[14] = p));
  let m;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(a, {
        id: `space.introduction.art.lampTitle`,
        defaultMessage: `DESK LAMP`,
        description: `Title on an illustrative desk lamp drawing in the Space welcome animation`,
      })),
      (e[15] = m))
    : (m = e[15]);
  let h;
  e[16] === p
    ? (h = e[17])
    : ((h = (0, X.jsx)(Y, { field: `blueprint-name`, className: J.blueprintName, revision: p, children: m })),
      (e[16] = p),
      (e[17] = h));
  let g;
  return (
    e[18] !== h || e[19] !== c || e[20] !== f
      ? ((g = (0, X.jsxs)(X.Fragment, { children: [n, r, i, c, f, h] })),
        (e[18] = h),
        (e[19] = c),
        (e[20] = f),
        (e[21] = g))
      : (g = e[21]),
    g
  );
}
var Vn, X, Hn;
function Un() {
  return (Un = e(() => {
    ((Vn = R()),
      g(),
      D(),
      qe(),
      Pn(),
      kn(),
      (X = B()),
      (Hn = { pitch: [754, 447], resume: [1200, 1594], pottery: [686, 432], blueprint: [500, 658] }));
  }))();
}
function Wn(e) {
  let t = (0, Gn.c)(71),
    { kind: n, label: r, helpId: i, moving: a, warping: o } = e,
    s = u(),
    c = N(0),
    l = N(0),
    d = N(0),
    [f, p] = (0, Kn.useState)(!1),
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = []), (t[0] = m)) : (m = t[0]);
  let h = (0, Kn.useRef)(m),
    g = (0, Kn.useRef)(null),
    _,
    y;
  (t[1] === a
    ? ((_ = t[2]), (y = t[3]))
    : ((_ = () => {
        for (let e of h.current)
          a && e.state === `paused` ? e.play() : !a && e.state === `running` && e.pause();
      }),
      (y = [a]),
      (t[1] = a),
      (t[2] = _),
      (t[3] = y)),
    (0, Kn.useEffect)(_, y));
  let b, x;
  (t[4] !== d || t[5] !== c || t[6] !== l
    ? ((b = () => () => {
        (c.stop(), l.stop(), d.stop());
      }),
      (x = [c, l, d]),
      (t[4] = d),
      (t[5] = c),
      (t[6] = l),
      (t[7] = b),
      (t[8] = x))
    : ((b = t[7]), (x = t[8])),
    (0, Kn.useEffect)(b, x));
  let S;
  t[9] !== a || t[10] !== d || t[11] !== c || t[12] !== l
    ? ((S = function (e, t) {
        let n = e === void 0 ? 0 : e,
          r = t === void 0 ? 0 : t;
        if (((h.current = []), !a)) {
          (c.set(0), l.set(0), d.set(0));
          return;
        }
        let i = { type: `spring`, stiffness: 6.76, damping: 3.432, restDelta: 0.4, restSpeed: 2 },
          o = Math.hypot(n, r),
          s = o > 1200 ? 1200 / o : 1;
        h.current = [E(c, 0, { ...i, velocity: n * s }), E(l, 0, { ...i, velocity: r * s }), E(d, 0, i)];
      }),
      (t[9] = a),
      (t[10] = d),
      (t[11] = c),
      (t[12] = l),
      (t[13] = S))
    : (S = t[13]);
  let C = S,
    w;
  t[14] !== d || t[15] !== c || t[16] !== l
    ? ((w = { x: c, y: l, rotate: d }), (t[14] = d), (t[15] = c), (t[16] = l), (t[17] = w))
    : (w = t[17]);
  let T;
  t[18] !== d || t[19] !== c || t[20] !== l
    ? ((T = (e) => {
        e.isPrimary &&
          e.button === 0 &&
          g.current == null &&
          (e.preventDefault(),
          e.stopPropagation(),
          e.currentTarget.focus({ preventScroll: !0 }),
          c.stop(),
          l.stop(),
          d.stop(),
          (h.current = []),
          e.currentTarget.setPointerCapture(e.pointerId),
          (g.current = {
            pointerId: e.pointerId,
            startX: e.clientX,
            startY: e.clientY,
            originX: c.get(),
            originY: l.get(),
            samples: [{ x: e.clientX, y: e.clientY, time: e.timeStamp }],
          }),
          p(!0));
      }),
      (t[18] = d),
      (t[19] = c),
      (t[20] = l),
      (t[21] = T))
    : (T = t[21]);
  let D;
  t[22] !== a || t[23] !== d || t[24] !== s || t[25] !== c || t[26] !== l
    ? ((D = (e) => {
        let t = g.current;
        if (t != null && t.pointerId === e.pointerId) {
          for (
            e.preventDefault(),
              e.stopPropagation(),
              t.samples.push({ x: e.clientX, y: e.clientY, time: e.timeStamp });
            t.samples.length > 2 && t.samples[1].time < e.timeStamp - 80;
          )
            t.samples.shift();
          if (
            (c.set(t.originX + (e.clientX - t.startX) / s), l.set(t.originY + (e.clientY - t.startY) / s), a)
          ) {
            let n = t.samples[0],
              r = ((e.clientX - n.x) / s / Math.max(16, e.timeStamp - n.time)) * 1e3,
              i = Math.max(-10, Math.min(10, r * 0.008));
            d.set(d.get() + (i - d.get()) * 0.25);
          }
        }
      }),
      (t[22] = a),
      (t[23] = d),
      (t[24] = s),
      (t[25] = c),
      (t[26] = l),
      (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== a || t[29] !== C || t[30] !== s
    ? ((O = (e) => {
        let t = g.current;
        if (t != null && t.pointerId === e.pointerId) {
          if (((g.current = null), p(!1), e.currentTarget.releasePointerCapture(e.pointerId), a)) {
            let n = t.samples[0],
              r = t.samples[t.samples.length - 1],
              i = Math.max(16, r.time - n.time) / 1e3,
              a = Math.exp(-Math.max(0, e.timeStamp - r.time - 35) / 50);
            C(((r.x - n.x) / s / i) * a, ((r.y - n.y) / s / i) * a);
          } else C();
        }
      }),
      (t[28] = a),
      (t[29] = C),
      (t[30] = s),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] === C
    ? (k = t[33])
    : ((k = () => {
        g.current != null && ((g.current = null), p(!1), C());
      }),
      (t[32] = C),
      (t[33] = k));
  let A;
  t[34] !== a || t[35] !== C || t[36] !== c || t[37] !== l
    ? ((A = (e) => {
        e.detail === 0 && (a ? C(580, -500) : (c.set(24), l.set(-24)));
      }),
      (t[34] = a),
      (t[35] = C),
      (t[36] = c),
      (t[37] = l),
      (t[38] = A))
    : (A = t[38]);
  let j;
  t[39] !== a || t[40] !== C || t[41] !== d || t[42] !== c || t[43] !== l
    ? ((j = (e) => {
        let t = { ArrowLeft: [-24, 0], ArrowRight: [24, 0], ArrowUp: [0, -24], ArrowDown: [0, 24] };
        if (e.key === `Home`)
          (e.preventDefault(), c.stop(), l.stop(), d.stop(), (h.current = []), c.set(0), l.set(0), d.set(0));
        else if (t[e.key] != null) {
          e.preventDefault();
          let [n, r] = t[e.key];
          a ? C(n * 12, r * 12) : (c.set(n), l.set(r));
        }
      }),
      (t[39] = a),
      (t[40] = C),
      (t[41] = d),
      (t[42] = c),
      (t[43] = l),
      (t[44] = j))
    : (j = t[44]);
  let M = a && !f && !o,
    P;
  t[45] !== n || t[46] !== M
    ? ((P = (0, Z.jsx)(`span`, {
        className: K.sampleSurface,
        children: (0, Z.jsx)(Fn, { kind: n, moving: M }),
      })),
      (t[45] = n),
      (t[46] = M),
      (t[47] = P))
    : (P = t[47]);
  let F;
  t[48] !== i ||
  t[49] !== r ||
  t[50] !== O ||
  t[51] !== k ||
  t[52] !== A ||
  t[53] !== j ||
  t[54] !== P ||
  t[55] !== T ||
  t[56] !== D ||
  t[57] !== o
    ? ((F = (0, Z.jsx)(`button`, {
        className: K.sampleButton,
        type: `button`,
        "aria-label": r,
        "aria-describedby": i,
        disabled: o,
        onPointerDown: T,
        onPointerMove: D,
        onPointerUp: O,
        onLostPointerCapture: k,
        onClick: A,
        onKeyDown: j,
        children: P,
      })),
      (t[48] = i),
      (t[49] = r),
      (t[50] = O),
      (t[51] = k),
      (t[52] = A),
      (t[53] = j),
      (t[54] = P),
      (t[55] = T),
      (t[56] = D),
      (t[57] = o),
      (t[58] = F))
    : (F = t[58]);
  let I, L, R;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Z.jsx)(`span`, {
        className: K.cornerProbe,
        "data-corner-probe": `top-left`,
        "aria-hidden": !0,
      })),
      (L = (0, Z.jsx)(`span`, {
        className: K.cornerProbe,
        "data-corner-probe": `top-right`,
        "aria-hidden": !0,
      })),
      (R = (0, Z.jsx)(`span`, {
        className: K.cornerProbe,
        "data-corner-probe": `bottom-left`,
        "aria-hidden": !0,
      })),
      (t[59] = I),
      (t[60] = L),
      (t[61] = R))
    : ((I = t[59]), (L = t[60]), (R = t[61]));
  let z;
  t[62] === F
    ? (z = t[63])
    : ((z = (0, Z.jsxs)(`div`, { className: K.drift, "data-drift": !0, children: [F, I, L, R] })),
      (t[62] = F),
      (t[63] = z));
  let ee;
  t[64] !== z || t[65] !== w
    ? ((ee = (0, Z.jsx)(v.div, { className: K.dragOffset, "data-drag-offset": !0, style: w, children: z })),
      (t[64] = z),
      (t[65] = w),
      (t[66] = ee))
    : (ee = t[66]);
  let B;
  return (
    t[67] !== f || t[68] !== n || t[69] !== ee
      ? ((B = (0, Z.jsx)(`div`, {
          className: K.sample,
          "data-work-sample": !0,
          "data-kind": n,
          "data-dragging": f,
          children: ee,
        })),
        (t[67] = f),
        (t[68] = n),
        (t[69] = ee),
        (t[70] = B))
      : (B = t[70]),
    B
  );
}
var Gn, Kn, Z;
function qn() {
  return (qn = e(() => {
    ((Gn = R()), b(), T(), S(), (Kn = V()), i(), Un(), Pt(), (Z = B()));
  }))();
}
function Jn(e) {
  let n = (0, $n.c)(119),
    { onDismiss: r, onShown: i, onContinue: o, initialStarDetail: s } = e,
    l = d(),
    m = (0, Q.useContext)(Me),
    h = (0, Q.useContext)(se),
    g = f(oe) ?? 0,
    y = u(),
    [b, x] = (0, Q.useState)(),
    S = p(),
    [T, E] = (0, Q.useState)(S),
    [D, O] = (0, Q.useState)(null),
    A = D != null,
    j = D === `warp`,
    M = (0, Q.useRef)(null),
    N = (0, Q.useRef)(null),
    P = (0, Q.useRef)(!1),
    F = (0, Q.useRef)(null),
    I = (0, Q.useId)(),
    L;
  n[0] === i
    ? (L = n[1])
    : ((L = () => {
        N.current != null && Qn() && !P.current && ((P.current = !0), i?.());
      }),
      (n[0] = i),
      (n[1] = L));
  let R = L,
    z;
  n[2] === R
    ? (z = n[3])
    : ((z = (e) =>
        Zn(() => {
          (e(), R());
        })),
      (n[2] = R),
      (n[3] = z));
  let ee = (0, Q.useSyncExternalStore)(z, Qn, Xn),
    B = !S && ee,
    V,
    te;
  (n[4] !== m || n[5] !== h
    ? ((V = () => {
        let e = h.current;
        if (e != null && m != null) return c(Array.from(e.querySelectorAll(`[data-app-navigation-rail]`)), e);
      }),
      (te = [h, m]),
      (n[4] = m),
      (n[5] = h),
      (n[6] = V),
      (n[7] = te))
    : ((V = n[6]), (te = n[7])),
    (0, Q.useLayoutEffect)(V, te));
  let ne, re;
  (n[8] !== T || n[9] !== A || n[10] !== m
    ? ((ne = () => {
        if (m == null || !T || A) return;
        let e = m.style.contentVisibility;
        return (
          m.style.setProperty(`content-visibility`, `hidden`),
          () => {
            m.style.setProperty(`content-visibility`, e);
          }
        );
      }),
      (re = [m, T, A]),
      (n[8] = T),
      (n[9] = A),
      (n[10] = m),
      (n[11] = ne),
      (n[12] = re))
    : ((ne = n[11]), (re = n[12])),
    (0, Q.useLayoutEffect)(ne, re));
  let ie, ae;
  (n[13] !== m || n[14] !== g || n[15] !== y
    ? ((ie = () => {
        if (m == null) return;
        let e = () => {
            let e = m.getBoundingClientRect(),
              t = Math.max(0, Math.min(e.left / y, g)),
              n = Math.max(0, Math.min((window.innerWidth - e.right) / y, g)),
              r = e.top / y,
              i = e.height / y,
              a =
                t > 0 || n > 0 || r > 0 || e.bottom < window.innerHeight
                  ? `var(--app-shell-window-radius, var(--radius-xl-base))`
                  : 0,
              o = 0;
            if (a !== 0) {
              let e = getComputedStyle(m);
              o =
                e.clipPath === `none`
                  ? e.borderEndEndRadius
                  : e.getPropertyValue(`--app-shell-main-surface-clip-end-radius`);
            }
            x((e) =>
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
          t.observe(m),
          window.addEventListener(`resize`, e),
          e(),
          () => {
            (t.disconnect(), window.removeEventListener(`resize`, e));
          }
        );
      }),
      (ae = [m, g, y]),
      (n[13] = m),
      (n[14] = g),
      (n[15] = y),
      (n[16] = ie),
      (n[17] = ae))
    : ((ie = n[16]), (ae = n[17])),
    (0, Q.useLayoutEffect)(ie, ae));
  let ce, le;
  (n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = () => {
        let e = F.current?.parentElement,
          t = () => {
            e != null && st(e);
          },
          n = () => {
            F.current != null && ct(F.current);
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
      (ce = []),
      (n[18] = ce),
      (n[19] = le))
    : ((ce = n[18]), (le = n[19])),
    (0, Q.useEffect)(le, ce));
  let ue = !A && K.backdrop,
    de;
  n[20] === ue
    ? (de = n[21])
    : ((de = C(`inset-0 h-full w-full [clip-path:border-box]`, ue)), (n[20] = ue), (n[21] = de));
  let fe;
  n[22] !== A || n[23] !== r
    ? ((fe = (e) => {
        e || r(A ? `continue` : `dismiss`);
      }),
      (n[22] = A),
      (n[23] = r),
      (n[24] = fe))
    : (fe = n[24]);
  let H;
  n[25] === R
    ? (H = n[26])
    : ((H = (e) => {
        ((M.current = document.activeElement instanceof HTMLElement ? document.activeElement : null),
          e.preventDefault(),
          N.current?.focus(),
          R());
      }),
      (n[25] = R),
      (n[26] = H));
  let pe;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        (e.preventDefault(), document.activeElement === document.body && M.current?.focus());
      }),
      (n[27] = pe))
    : (pe = n[27]);
  let me;
  n[28] !== b || n[29] !== H
    ? ((me = { style: b, onInteractOutside: Yn, onOpenAutoFocus: H, onCloseAutoFocus: pe }),
      (n[28] = b),
      (n[29] = H),
      (n[30] = me))
    : (me = n[30]);
  let he;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = C(`select-none`, K.scene)), (n[31] = he))
    : (he = n[31]);
  let ge;
  n[32] === A
    ? (ge = n[33])
    : ((ge = (e) => {
        let t = F.current;
        if (t != null) {
          if (A || e.pointerType === `touch`) {
            ct(t);
            return;
          }
          ((t.dataset.pointerClientX = String(e.clientX)),
            (t.dataset.pointerClientY = String(e.clientY)),
            st(e.currentTarget));
        }
      }),
      (n[32] = A),
      (n[33] = ge));
  let _e, ve, ye;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (e) => {
        e.pointerType === `touch` && F.current != null && ct(F.current);
      }),
      (ve = () => {
        F.current != null && ct(F.current);
      }),
      (ye = () => {
        F.current != null && ct(F.current);
      }),
      (n[34] = _e),
      (n[35] = ve),
      (n[36] = ye))
    : ((_e = n[34]), (ve = n[35]), (ye = n[36]));
  let be;
  n[37] === S ? (be = n[38]) : ((be = !S && { opacity: 0 }), (n[37] = S), (n[38] = be));
  let xe = +!A,
    Se;
  n[39] === xe ? (Se = n[40]) : ((Se = { opacity: xe }), (n[39] = xe), (n[40] = Se));
  let Ce = D === `fade` ? 0.3 : 0.7,
    we = j ? 1.65 : 0,
    U;
  n[41] !== Ce || n[42] !== we
    ? ((U = { duration: Ce, delay: we }), (n[41] = Ce), (n[42] = we), (n[43] = U))
    : (U = n[43]);
  let Te;
  n[44] !== A || n[45] !== r
    ? ((Te = () => {
        A ? r(`continue`) : E(!0);
      }),
      (n[44] = A),
      (n[45] = r),
      (n[46] = Te))
    : (Te = n[46]);
  let Ee;
  n[47] !== s || n[48] !== B || n[49] !== j
    ? ((Ee = (0, $.jsx)(Bt, { moving: B, warping: j, initialDetail: s })),
      (n[47] = s),
      (n[48] = B),
      (n[49] = j),
      (n[50] = Ee))
    : (Ee = n[50]);
  let De;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (0, $.jsx)(`div`, { className: K.vignette, "aria-hidden": !0 })), (n[51] = De))
    : (De = n[51]);
  let Oe;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, $.jsx)(_, {
        children: (0, $.jsx)(a, {
          id: `space.introduction.brandedTitle`,
          defaultMessage: `Welcome to {productName}`,
          description: `Heading welcoming users to ChatGPT Space, the home for Pages and other files in ChatGPT. Translate the welcome phrase, but keep {productName} as the untranslated product name ChatGPT Space. You may reorder the placeholder to fit your language.`,
          values: { productName: `ChatGPT Space` },
        }),
      })),
      (n[52] = Oe))
    : (Oe = n[52]);
  let ke;
  n[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, $.jsx)(w, {
        children: (0, $.jsx)(a, {
          id: `space.introduction.description`,
          defaultMessage: `Your new home to create, share, and collaborate with your team and ChatGPT`,
          description: `Space welcome message describing a place to create and collaborate with teammates and ChatGPT`,
        }),
      })),
      (n[53] = ke))
    : (ke = n[53]);
  let Ae;
  n[54] !== B || n[55] !== o
    ? ((Ae = () => {
        (F.current != null && ct(F.current), o?.(), O(B ? `warp` : `fade`));
      }),
      (n[54] = B),
      (n[55] = o),
      (n[56] = Ae))
    : (Ae = n[56]);
  let je;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(a, {
        id: `space.introduction.continue`,
        defaultMessage: `Continue to Space`,
        description: `Button that dismisses the Space welcome animation and returns to the Space collection. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
      })),
      (n[57] = je))
    : (je = n[57]);
  let Ne;
  n[58] !== A || n[59] !== Ae
    ? ((Ne = (0, $.jsxs)(`div`, {
        className: K.copy,
        children: [
          Oe,
          ke,
          (0, $.jsx)(`div`, {
            className: K.continue,
            children: (0, $.jsx)(t, {
              ref: N,
              color: `mediaSolid`,
              size: `large`,
              disabled: A,
              onClick: Ae,
              children: je,
            }),
          }),
        ],
      })),
      (n[58] = A),
      (n[59] = Ae),
      (n[60] = Ne))
    : (Ne = n[60]);
  let Pe;
  n[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pe = (0, $.jsx)(a, {
        id: `space.introduction.dragHelp`,
        defaultMessage: `Drag and release to move this sample. Use arrow keys to nudge, Enter to toss, or Home to return`,
        description: `Keyboard and pointer instructions for the movable example work in the Space welcome screen`,
      })),
      (n[61] = Pe))
    : (Pe = n[61]);
  let Fe;
  n[62] === I
    ? (Fe = n[63])
    : ((Fe = (0, $.jsx)(`p`, { id: I, className: `sr-only`, children: Pe })), (n[62] = I), (n[63] = Fe));
  let Ie;
  n[64] === l
    ? (Ie = n[65])
    : ((Ie = l.formatMessage({
        id: `space.introduction.dragPitch`,
        defaultMessage: `Drag Field Notes`,
        description: `Accessible name for the movable example presentation in the Space welcome screen`,
      })),
      (n[64] = l),
      (n[65] = Ie));
  let Le;
  n[66] !== I || n[67] !== B || n[68] !== Ie || n[69] !== j
    ? ((Le = (0, $.jsx)(Wn, { kind: `pitch`, label: Ie, helpId: I, moving: B, warping: j })),
      (n[66] = I),
      (n[67] = B),
      (n[68] = Ie),
      (n[69] = j),
      (n[70] = Le))
    : (Le = n[70]);
  let Re;
  n[71] === l
    ? (Re = n[72])
    : ((Re = l.formatMessage({
        id: `space.introduction.dragArticle`,
        defaultMessage: `Drag article`,
        description: `Accessible name for the movable Intelligence Age example article in the Space welcome screen`,
      })),
      (n[71] = l),
      (n[72] = Re));
  let ze;
  n[73] !== I || n[74] !== B || n[75] !== Re || n[76] !== j
    ? ((ze = (0, $.jsx)(Wn, { kind: `resume`, label: Re, helpId: I, moving: B, warping: j })),
      (n[73] = I),
      (n[74] = B),
      (n[75] = Re),
      (n[76] = j),
      (n[77] = ze))
    : (ze = n[77]);
  let Be;
  n[78] === l
    ? (Be = n[79])
    : ((Be = l.formatMessage({
        id: `space.introduction.dragPottery`,
        defaultMessage: `Drag pottery website`,
        description: `Accessible name for the movable example pottery website in the Space welcome screen`,
      })),
      (n[78] = l),
      (n[79] = Be));
  let Ve;
  n[80] !== I || n[81] !== B || n[82] !== Be || n[83] !== j
    ? ((Ve = (0, $.jsx)(Wn, { kind: `pottery`, label: Be, helpId: I, moving: B, warping: j })),
      (n[80] = I),
      (n[81] = B),
      (n[82] = Be),
      (n[83] = j),
      (n[84] = Ve))
    : (Ve = n[84]);
  let He;
  n[85] === l
    ? (He = n[86])
    : ((He = l.formatMessage({
        id: `space.introduction.dragBlueprint`,
        defaultMessage: `Drag desk lamp blueprint`,
        description: `Accessible name for the movable example desk lamp blueprint in the Space welcome screen`,
      })),
      (n[85] = l),
      (n[86] = He));
  let Ue;
  n[87] !== I || n[88] !== B || n[89] !== He || n[90] !== j
    ? ((Ue = (0, $.jsx)(Wn, { kind: `blueprint`, label: He, helpId: I, moving: B, warping: j })),
      (n[87] = I),
      (n[88] = B),
      (n[89] = He),
      (n[90] = j),
      (n[91] = Ue))
    : (Ue = n[91]);
  let We;
  n[92] !== Le || n[93] !== ze || n[94] !== Ve || n[95] !== Ue
    ? ((We = (0, $.jsxs)(`div`, {
        className: K.samples,
        "data-work-samples": !0,
        children: [Le, ze, Ve, Ue],
      })),
      (n[92] = Le),
      (n[93] = ze),
      (n[94] = Ve),
      (n[95] = Ue),
      (n[96] = We))
    : (We = n[96]);
  let Ge = B && !A,
    Ke;
  n[97] !== S || n[98] !== Ge
    ? ((Ke = (0, $.jsx)(Ft, { moving: Ge, reduceMotion: S })), (n[97] = S), (n[98] = Ge), (n[99] = Ke))
    : (Ke = n[99]);
  let qe;
  n[100] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (0, $.jsx)(`span`, {
        ref: F,
        className: K.you,
        "data-pointer-badge": !0,
        hidden: !0,
        "aria-hidden": !0,
        children: (0, $.jsx)(`span`, {
          className: K.cursorLabel,
          children: (0, $.jsx)(a, {
            id: `space.introduction.you`,
            defaultMessage: `You`,
            description: `Label following the user's pointer in the Space welcome animation`,
          }),
        }),
      })),
      (n[100] = qe))
    : (qe = n[100]);
  let Je;
  n[101] !== B ||
  n[102] !== ge ||
  n[103] !== be ||
  n[104] !== Se ||
  n[105] !== U ||
  n[106] !== Te ||
  n[107] !== Ee ||
  n[108] !== Ne ||
  n[109] !== Fe ||
  n[110] !== We ||
  n[111] !== Ke ||
  n[112] !== j
    ? ((Je = (0, $.jsxs)(v.div, {
        className: he,
        "data-motion": B,
        "data-warping": j,
        onPointerMoveCapture: ge,
        onPointerDownCapture: _e,
        onPointerCancelCapture: ve,
        onPointerLeave: ye,
        initial: be,
        animate: Se,
        transition: U,
        onAnimationComplete: Te,
        children: [Ee, De, Ne, Fe, We, Ke, qe],
      })),
      (n[101] = B),
      (n[102] = ge),
      (n[103] = be),
      (n[104] = Se),
      (n[105] = U),
      (n[106] = Te),
      (n[107] = Ee),
      (n[108] = Ne),
      (n[109] = Fe),
      (n[110] = We),
      (n[111] = Ke),
      (n[112] = j),
      (n[113] = Je))
    : (Je = n[113]);
  let Ye;
  return (
    n[114] !== de || n[115] !== fe || n[116] !== me || n[117] !== Je
      ? ((Ye = (0, $.jsx)(k, {
          open: !0,
          modal: !1,
          unstyledContent: !0,
          viewportSized: !0,
          variant: `onboarding`,
          contentPosition: `anchored`,
          contentClassName: de,
          showDialogClose: !1,
          onOpenChange: fe,
          contentProps: me,
          children: Je,
        })),
        (n[114] = de),
        (n[115] = fe),
        (n[116] = me),
        (n[117] = Je),
        (n[118] = Ye))
      : (Ye = n[118]),
    Ye
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
    (($n = R()),
      m(),
      g(),
      T(),
      l(),
      (Q = V()),
      D(),
      ge(),
      i(),
      F(),
      I(),
      s(),
      ce(),
      zt(),
      Kt(),
      qn(),
      Pt(),
      ($ = B()));
  }))();
}
function tr() {
  let e = (0, rr.c)(3),
    t = f(le),
    n = f(rt),
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
  let t = (0, rr.c)(8),
    { identityKey: n } = e,
    i = o(r),
    a = f(tt),
    s,
    c;
  (t[0] !== n || t[1] !== i
    ? ((s = () => {
        let e = () => {
          et(i);
        };
        return (
          window.addEventListener(`focus`, e),
          () => {
            (window.removeEventListener(`focus`, e), i.set(ne, n, !1));
          }
        );
      }),
      (c = [i, n]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = s),
      (t[3] = c))
    : ((s = t[2]), (c = t[3])),
    (0, ir.useEffect)(s, c));
  let l;
  return (
    t[4] !== n || t[5] !== a || t[6] !== i
      ? ((l = a
          ? (0, ar.jsx)(Jn, {
              onShown: () => {
                (H(i, U, { action: Ce.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_SHOWN }), i.set(ne, n, !0));
              },
              onContinue: () => {
                (nt(i, n), H(i, U, { action: Ce.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_CONTINUED }));
              },
              onDismiss: (e) => {
                (e === `dismiss` &&
                  (nt(i, n), H(i, U, { action: Ce.CODEX_SPACES_ONBOARDING_ACTION_INTRODUCTION_DISMISSED })),
                  i.set($e, n, !1),
                  i.set(ne, n, !1));
              },
            })
          : null),
        (t[4] = n),
        (t[5] = a),
        (t[6] = i),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
var rr, ir, ar;
function or() {
  return (or = e(() => {
    ((rr = R()), re(), l(), (ir = V()), pe(), he(), z(), Ee(), it(), er(), (ar = B()));
  }))();
}
function sr() {
  return (
    document.querySelector(
      `:is(${ke}, [role="dialog"][data-state="open"]:not([aria-modal="false"])):not(.beacon-modal-space_slides_introduction)`,
    ) != null
  );
}
function cr(e) {
  let t = (0, ur.c)(25),
    { identityKey: n, accountId: i, userId: a } = e,
    s = o(r),
    { locale: c } = d(),
    l = te(De, `183803860`),
    [u, p] = (0, dr.useState)(!1),
    m = ve(),
    h = (0, dr.useSyncExternalStore)(je, sr, lr),
    g = f(pr)[n],
    _;
  t[0] !== i || t[1] !== n || t[2] !== c || t[3] !== a
    ? ((_ = { identityKey: n, accountId: i, userId: a, locale: c }),
      (t[0] = i),
      (t[1] = n),
      (t[2] = c),
      (t[3] = a),
      (t[4] = _))
    : (_ = t[4]);
  let { data: v, isFetching: y, isError: b } = te(mr, _),
    x = (0, dr.useRef)(!1);
  if (!l) return null;
  if (u) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, fr.jsx)(Ge, { initialGroupId: `presentation`, onClose: () => p(!1) })), (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (g || y || b || v == null || m || h) return null;
  let S;
  t[6] !== n || t[7] !== s
    ? ((S = () => {
        s.set(pr, (e) => ({ ...e, [n]: !0 }));
      }),
      (t[6] = n),
      (t[7] = s),
      (t[8] = S))
    : (S = t[8]);
  let C = S,
    w;
  t[9] === s
    ? (w = t[10])
    : ((w = (e) =>
        e.id === `create_slide`
          ? () => (H(s, Re, { action: me.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED }), p(!0), !0)
          : void 0),
      (t[9] = s),
      (t[10] = w));
  let T;
  t[11] !== i || t[12] !== v
    ? ((T = () => {
        x.current || ((x.current = !0), Fe({ beacon: v, accountId: i, eventType: `view` }));
      }),
      (t[11] = i),
      (t[12] = v),
      (t[13] = T))
    : (T = t[13]);
  let E;
  t[14] !== i || t[15] !== v || t[16] !== C
    ? ((E = () => {
        (C(), Fe({ beacon: v, accountId: i, eventType: `dismiss` }));
      }),
      (t[14] = i),
      (t[15] = v),
      (t[16] = C),
      (t[17] = E))
    : (E = t[17]);
  let D;
  return (
    t[18] !== i || t[19] !== v || t[20] !== C || t[21] !== w || t[22] !== T || t[23] !== E
      ? ((D = (0, fr.jsx)(Ue, {
          beacon: v,
          eventAccountId: i,
          getActionOverride: w,
          onOpen: T,
          onDismiss: E,
          onResolve: C,
        })),
        (t[18] = i),
        (t[19] = v),
        (t[20] = C),
        (t[21] = w),
        (t[22] = T),
        (t[23] = E),
        (t[24] = D))
      : (D = t[24]),
    D
  );
}
function lr() {
  return !1;
}
var ur, dr, fr, pr, mr;
function hr() {
  return (hr = e(() => {
    ((ur = R()),
      re(),
      l(),
      (dr = V()),
      D(),
      Oe(),
      Be(),
      He(),
      xe(),
      ye(),
      ae(),
      he(),
      z(),
      de(),
      Ne(),
      We(),
      (fr = B()),
      (pr = Te(`space-slides-introduction-dismissed-v1`, {})),
      (mr = h(r, ({ accountId: e, identityKey: t, userId: n, locale: r }, { get: i }) => ({
        queryKey: [`space-slides-introduction`, t, r],
        enabled: !i(pr)[t] && i(De, `183803860`),
        staleTime: 0,
        retry: !1,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        queryFn: async ({ signal: t }) => {
          let r = window.electronBridge?.getDesktopUserAgent?.(),
            i = await _e.safeGet(`/beacons_v2`, {
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
          return a != null && Ae(a) && a.beacon_id === `space_slides_introduction` ? a : null;
        },
      }))));
  }))();
}
function gr() {
  let e = (0, vr.c)(9),
    t = f(fe),
    n = f(tt),
    r = te(De, `2648108507`),
    i = f(ue),
    a = f(rt),
    o = ee(),
    s = f(ie);
  f(xr);
  let c = L(`/space`, o.pathname) != null || L(`/spaces/:spaceId`, o.pathname) != null;
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
        : ((t = (0, br.jsx)(j, { to: `/space`, state: { ...o.state, libraryPreview: void 0 }, replace: !0 })),
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
        : ((t = (0, br.jsx)(j, { to: `/space?tab=suggested`, state: o.state, replace: !0 })),
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
    s = f(tt),
    c = f(ie),
    l = f(Ie);
  if (c == null) return null;
  let u;
  t[0] !== c.pathname || t[1] !== c.search
    ? ((u = Pe(c.pathname, c.search, `/space`)), (t[0] = c.pathname), (t[1] = c.search), (t[2] = u))
    : (u = t[2]);
  let d = u,
    p;
  t[3] === c.search
    ? (p = t[4])
    : ((p = new URLSearchParams(c.search).get(`view`)), (t[3] = c.search), (t[4] = p));
  let m = p,
    h;
  t[5] !== d || t[6] !== c.pathname || t[7] !== c.state?.libraryPreview || t[8] !== l || t[9] !== m
    ? ((h =
        L(`/space`, c.pathname) != null &&
        d.tab === `suggested` &&
        !d.deleted &&
        !d.search &&
        (m == null || m === `slide`) &&
        c.state?.libraryPreview == null &&
        l == null),
      (t[5] = d),
      (t[6] = c.pathname),
      (t[7] = c.state?.libraryPreview),
      (t[8] = l),
      (t[9] = m),
      (t[10] = h))
    : (h = t[10]);
  let g = h,
    _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = (0, br.jsx)(tr, {})), (t[11] = _)) : (_ = t[11]);
  let v;
  t[12] !== n || t[13] !== i || t[14] !== g || t[15] !== s || t[16] !== o || t[17] !== r
    ? ((v = o && !s && g ? (0, br.jsx)(cr, { accountId: n, userId: r, identityKey: i }) : null),
      (t[12] = n),
      (t[13] = i),
      (t[14] = g),
      (t[15] = s),
      (t[16] = o),
      (t[17] = r),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] === v
      ? (y = t[20])
      : ((y = (0, br.jsxs)(br.Fragment, { children: [_, v] })), (t[19] = v), (t[20] = y)),
    y
  );
}
var vr, yr, br, xr;
function Sr() {
  return (Sr = e(() => {
    ((vr = R()),
      l(),
      (yr = V()),
      y(),
      pe(),
      Le(),
      be(),
      ze(),
      z(),
      de(),
      we(),
      Ee(),
      or(),
      it(),
      hr(),
      (br = B()),
      (xr = n(r, ({ get: e, scope: t }) => ({
        enabled: e(fe),
        queryFn: async () => (await Se(t), !0),
        queryKey: [`space-onboarding-entry`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }))));
  }))();
}
export { or as i, Sr as n, tr as r, gr as t };
//# sourceMappingURL=onboarding-1ab7fd5fa20d.js.map
