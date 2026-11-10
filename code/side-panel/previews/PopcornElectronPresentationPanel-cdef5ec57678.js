import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Amn as n,
  Hln as r,
  Kln as i,
  Rpn as a,
  Uln as o,
  Yln as s,
  cun as c,
  dun as l,
  eun as u,
  fun as d,
  hmn as f,
  lun as p,
  nun as m,
  pmn as h,
  pun as g,
  qln as _,
  run as v,
  tun as ee,
  uun as te,
  zpn as y,
} from "./app-initial-f094ef01c64d.js";
import { d as b, f as ne } from "./workbook-92b6031c5f2c.js";
import {
  A as re,
  C as ie,
  D as ae,
  E as oe,
  I as se,
  J as ce,
  K as x,
  L as le,
  M as S,
  N as ue,
  O as de,
  P as fe,
  Q as pe,
  S as C,
  T as w,
  U as T,
  V as E,
  X as D,
  _ as O,
  a as me,
  at as he,
  c as ge,
  ct as _e,
  d as ve,
  g as ye,
  h as be,
  i as xe,
  it as k,
  j as Se,
  k as Ce,
  l as A,
  lt as j,
  m as M,
  n as N,
  o as P,
  ot as we,
  p as Te,
  q as Ee,
  r as De,
  t as Oe,
  u as ke,
  v as F,
  w as Ae,
  x as I,
  z as je,
} from "./artifact-source-bootstrap-b7ba40702025.js";
import { n as Me, t as Ne } from "./PopcornPageNumberNavigation-a4529764704f.js";
import {
  a as L,
  b as Pe,
  c as Fe,
  d as Ie,
  f as Le,
  g as Re,
  l as ze,
  p as Be,
  s as Ve,
  t as He,
  u as Ue,
  x as We,
  y as Ge,
} from "./drawing-frame-geometry-edc4f489bcf8.js";
import { n as Ke, t as qe } from "./modifiers.esm-667a798d9391.js";
import {
  $ as Je,
  A as R,
  At as z,
  B,
  Bt as Ye,
  D as Xe,
  Dt as Ze,
  E as Qe,
  Et as $e,
  F as V,
  G as H,
  H as et,
  Ht as tt,
  I as nt,
  J as rt,
  K as it,
  L as at,
  M as ot,
  Mt as st,
  N as ct,
  O as U,
  Ot as lt,
  P as ut,
  Q as dt,
  R as ft,
  St as pt,
  T as mt,
  Tt as ht,
  Ut as gt,
  V as _t,
  W as vt,
  Wt as yt,
  X as bt,
  Y as xt,
  Z as St,
  _t as Ct,
  a as wt,
  bt as Tt,
  c as Et,
  ct as Dt,
  d as Ot,
  dt as kt,
  f as At,
  g as jt,
  h as Mt,
  ht as Nt,
  i as Pt,
  it as Ft,
  j as It,
  jt as Lt,
  k as Rt,
  kt as zt,
  l as Bt,
  lt as Vt,
  m as Ht,
  n as Ut,
  o as Wt,
  ot as Gt,
  p as Kt,
  pt as qt,
  q as Jt,
  r as W,
  rt as Yt,
  s as Xt,
  t as Zt,
  tt as Qt,
  u as $t,
  ut as en,
  v as tn,
  vt as nn,
  w as rn,
  wt as an,
  xt as on,
  yt as sn,
  z as cn,
} from "./popcorn-electron-surface-style-7137a19cf884.js";
import { n as ln, t as un } from "./annotation-scopes-fbb81b16f7b1.js";
import {
  a as dn,
  c as fn,
  i as pn,
  l as mn,
  n as hn,
  o as gn,
  r as _n,
  s as vn,
  u as yn,
} from "./presentation-review-utils-3c139023cae0.js";
function bn() {
  return (
    (xn ??= Promise.all([
      Te(),
      Promise.resolve().then(() => {
        ye();
      }),
    ]).then(() => {})),
    xn
  );
}
var xn,
  Sn = e(() => {
    (be(), M(), (xn = null));
  });
function Cn(e, t) {
  if (t && t.width > 0 && t.height > 0) return { width: t.width, height: t.height };
  let n = e.getBoundingClientRect();
  return {
    width: n.width > 0 ? n.width : e.clientWidth,
    height: n.height > 0 ? n.height : e.clientHeight,
  };
}
function wn(e, t) {
  return Cn(e, { width: t.contentRect.width, height: t.contentRect.height });
}
var Tn = e(() => {});
function En(e, t = K.canvas) {
  let n = e.slides.add();
  return (n.setViewportSize(Wn, Gn), (n.background.fill = t), Dn(n), n);
}
function Dn(e) {
  for (let t of [...e.shapes.items]) t.placeholderType && t.delete();
}
function On(e) {
  let t = e.slide.shapes.add({
    geometry: e.geometry ?? `rect`,
    position: { left: e.left, top: e.top, width: e.width, height: e.height },
    fill: e.fill,
    line: e.radiusLine ? { style: `solid`, fill: K.border, width: 1 } : void 0,
  });
  return (
    (t.text = e.text),
    (t.text.fontSize = e.fontSize ?? 16),
    (t.text.color = e.color ?? K.ink),
    (t.text.bold = !!e.bold),
    (t.text.verticalAlignment = `middle`),
    t
  );
}
function kn(e, t, n) {
  (On({ slide: e, left: 72, top: 48, width: 620, height: 50, text: t, fontSize: 30, bold: !0 }),
    On({
      slide: e,
      left: 72,
      top: 100,
      width: 760,
      height: 32,
      text: n,
      fontSize: 14,
      color: K.muted,
    }));
}
function G(e, t, n, r, i, a) {
  (On({ slide: e, left: t, top: n, width: r, height: 24, text: i, fontSize: 14, bold: !0 }),
    On({
      slide: e,
      left: t,
      top: n + 22,
      width: r,
      height: 40,
      text: a,
      fontSize: 12,
      color: K.muted,
    }));
}
function An(e) {
  return e.slide.shapes.add({
    geometry: `roundRect`,
    position: { left: e.left, top: e.top, width: e.width, height: e.height },
    fill: e.fill ?? K.panel,
    line: { style: `solid`, fill: K.border, width: 1 },
  });
}
function jn(e, t) {
  let n = En(e, `#F7FAFF`),
    r = On({
      slide: n,
      left: 72,
      top: 74,
      width: 520,
      height: 68,
      text: `Slides Feature Catalog`,
      fontSize: 36,
      bold: !0,
    });
  ((r.text.get(`Slides Feature Catalog`).style = `title`),
    On({
      slide: n,
      left: 72,
      top: 150,
      width: 510,
      height: 72,
      text: `A presentation design-system deck built from the current Granola slide APIs: borders, fills, shapes, connectors, typography, tables, charts, and image treatments.`,
      fontSize: 16,
      color: K.muted,
    }));
  let i = n.images.add({ dataUrl: t, alt: `Popcorn slides catalog poster` });
  ((i.position = { left: 706, top: 88, width: 500, height: 300 }), (i.fit = `cover`));
  let a = An({ slide: n, left: 72, top: 300, width: 346, height: 208, fill: K.cloud });
  ((a.line.fill = K.blue),
    (a.line.width = 1),
    G(
      n,
      98,
      328,
      280,
      `Canvas-native editing`,
      `The cover title is the first editable text box, so browser receipts can mutate and undo it without changing deck structure.`,
    ));
  let o = An({ slide: n, left: 444, top: 300, width: 346, height: 208, fill: K.lavender });
  ((o.line.fill = K.violet),
    G(
      n,
      470,
      328,
      290,
      `Worker-first stage`,
      `The stage renders as a centered world-view inside a full-viewport canvas, matching the workbook camera architecture.`,
    ));
  let s = An({ slide: n, left: 816, top: 300, width: 390, height: 208, fill: K.mintTint });
  ((s.line.fill = K.mint),
    G(
      n,
      842,
      328,
      324,
      `Catalog fixture`,
      `Every slide is a visual specimen that doubles as a deterministic editing corpus for tests, traces, and future agent workflows.`,
    ),
    (n.speakerNotes.text = `Cover slide: the presentation smoke edits this first title shape and watches the selected-slide label update.`));
}
function Mn(e) {
  let t = En(e);
  (kn(
    t,
    `Border styles`,
    `Line styles and weights from the Granola shape API, arranged as a compact visual gallery.`,
  ),
    [
      { label: `Solid 1px`, style: `solid`, color: K.blue, width: 1 },
      { label: `Dashed 2px`, style: `dashed`, color: K.indigo, width: 2 },
      { label: `Dotted 2px`, style: `dotted`, color: K.cyan, width: 2 },
      { label: `Dash-dot 3px`, style: `dash-dot`, color: K.violet, width: 3 },
      { label: `Dash-dot-dot 3px`, style: `dash-dot-dot`, color: K.rose, width: 3 },
    ].forEach((e, n) => {
      let r = 84 + n * 228,
        i = t.shapes.add({
          geometry: n % 2 == 0 ? `roundRect` : `rect`,
          position: { left: r, top: 188, width: 170, height: 118 },
          fill: K.panel,
          line: { style: e.style, fill: e.color, width: e.width },
        });
      ((i.text = e.label),
        (i.text.alignment = `center`),
        (i.text.verticalAlignment = `middle`),
        (i.text.fontSize = 16));
    }));
  let n = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 130, top: 392, width: 1020, height: 190 },
    fill: `#F8FBFF`,
    line: { style: `solid`, fill: K.border, width: 1 },
  });
  ((n.line.width = 1),
    On({
      slide: t,
      left: 164,
      top: 426,
      width: 340,
      height: 44,
      text: `Mixed borders in one composition`,
      fontSize: 20,
      bold: !0,
    }),
    On({
      slide: t,
      left: 164,
      top: 474,
      width: 410,
      height: 66,
      text: `A larger composition helps validate stroke scaling, handle placement, and thumbnail rendering.`,
      fontSize: 13,
      color: K.muted,
    }));
  let r = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 700, top: 434, width: 170, height: 70 },
    fill: `#ffffff`,
    line: { style: `dash-dot`, fill: K.violet, width: 2 },
  });
  ((r.text = `Dash-dot`),
    (r.text.alignment = `center`),
    (r.text.verticalAlignment = `middle`),
    (r.text.bold = !0));
  let i = t.shapes.add({
    geometry: `diamond`,
    position: { left: 916, top: 418, width: 126, height: 102 },
    fill: `#ffffff`,
    line: { style: `dotted`, fill: K.cyan, width: 2 },
  });
  ((i.text = `Dotted`), (i.text.alignment = `center`), (i.text.verticalAlignment = `middle`));
}
function Nn(e) {
  let t = En(e, `#FBFBFE`);
  kn(
    t,
    `Fill styles`,
    `Solid, linear gradient, path gradient, and pattern fills taken directly from the Granola fill configuration surface.`,
  );
  let n = An({ slide: t, left: 86, top: 188, width: 240, height: 220 });
  ((n.fill = K.blue),
    (n.line.fill = K.blue),
    G(t, 104, 422, 206, `Solid fill`, `Theme/RGB-backed surface`));
  let r = An({ slide: t, left: 368, top: 188, width: 240, height: 220 });
  ((r.fill = {
    type: `gradient`,
    gradientKind: `linear`,
    angleDeg: 30,
    stops: [
      { offset: 0, color: `#DBEAFE` },
      { offset: 1, color: `#2563EB` },
    ],
  }),
    (r.line.fill = K.blue),
    G(t, 386, 422, 206, `Linear gradient`, `Two-stop diagonal blend`));
  let i = An({ slide: t, left: 650, top: 188, width: 240, height: 220 });
  ((i.fill = {
    type: `gradient`,
    gradientKind: `path`,
    angleDeg: 135,
    stops: [
      { offset: 0, color: `#DDD6FE` },
      { offset: 1, color: `#7C3AED` },
    ],
  }),
    (i.line.fill = K.violet),
    G(t, 668, 422, 206, `Path gradient`, `Centered radial emphasis`));
  let a = An({ slide: t, left: 932, top: 188, width: 240, height: 220 });
  ((a.fill = { type: `solid`, color: `#F8FAFC`, pattern: { type: `lightGrid`, color: K.indigo } }),
    (a.line.fill = K.indigo),
    G(t, 950, 422, 206, `Pattern fill`, `Light grid overlay`));
  let o = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 126, top: 510, width: 1020, height: 120 },
    fill: `#FFFFFF`,
    line: { style: `solid`, fill: K.border, width: 1 },
  });
  ((o.text = `Fill configs stay model-backed, which means the same gradient and pattern semantics show up consistently in thumbnails, worker rendering, exports, and future document/shared-object lanes.`),
    (o.text.fontSize = 20),
    (o.text.color = K.ink));
}
function Pn(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, `$1 $2`)
    .replace(/^gray(\d+)/i, `Gray $1`)
    .replace(/^percent(\d+)/i, `$1%`)
    .replace(/\b\w/g, (e) => e.toUpperCase());
}
function Fn(e) {
  let t = En(e, `#FBFBFE`);
  (kn(
    t,
    `Pattern gallery`,
    `A dense catalog of pattern fills so rendering, centering, and zoom behavior can be inspected directly in one place.`,
  ),
    Kn.forEach((e, n) => {
      let r = n % 8,
        i = Math.floor(n / 8),
        a = 72 + r * 132,
        o = 164 + i * 74,
        s = On({
          slide: t,
          left: a,
          top: o,
          width: 112,
          height: 16,
          text: Pn(e.type),
          fontSize: 9,
          color: K.muted,
        });
      ((s.text.alignment = `center`),
        t.shapes.add({
          geometry: `roundRect`,
          position: { left: a, top: o + 20, width: 112, height: 44 },
          fill: { type: `solid`, color: `#F8FAFC`, pattern: { type: e.type, color: e.color } },
          line: { style: `solid`, fill: K.border, width: 1 },
        }));
    }));
}
function In(e) {
  let t = En(e);
  kn(
    t,
    `Shapes and connectors`,
    `Preset geometries, arrowheads, and routed connectors aligned with the current Granola presentation tests.`,
  );
  let n = t.shapes.add({
    geometry: `flowChartDecision`,
    position: { left: 160, top: 220, width: 170, height: 110 },
    fill: `#DBEAFE`,
    line: { style: `solid`, fill: K.blue, width: 2 },
  });
  ((n.text = `Decision`), (n.text.alignment = `center`), (n.text.verticalAlignment = `middle`));
  let r = t.shapes.add({
    geometry: `rect`,
    position: { left: 448, top: 220, width: 190, height: 110 },
    fill: `#EDE9FE`,
    line: { style: `solid`, fill: K.violet, width: 2 },
  });
  ((r.text = `Process`), (r.text.alignment = `center`), (r.text.verticalAlignment = `middle`));
  let i = t.shapes.add({
    geometry: `flowChartTerminator`,
    position: { left: 764, top: 220, width: 212, height: 110 },
    fill: `#ECFDF5`,
    line: { style: `solid`, fill: K.mint, width: 2 },
  });
  ((i.text = `Terminator`), (i.text.alignment = `center`), (i.text.verticalAlignment = `middle`));
  let a = t.shapes.add({
    geometry: `chevron`,
    position: { left: 1022, top: 214, width: 124, height: 120, rotation: 8 },
    fill: {
      type: `gradient`,
      gradientKind: `linear`,
      angleDeg: 0,
      stops: [
        { offset: 0, color: `#FDE68A` },
        { offset: 1, color: `#F59E0B` },
      ],
    },
    line: { style: `solid`, fill: K.amber, width: 2 },
  });
  (t.shapes.add({
    geometry: `connector`,
    kind: `straight`,
    from: n,
    fromIdx: 3,
    to: r,
    toIdx: 1,
    line: { style: `solid`, fill: K.blue, width: 2 },
    head: { type: `arrow`, width: `med`, length: `med` },
  }),
    t.shapes.add({
      geometry: `connector`,
      kind: `straight`,
      from: r,
      fromIdx: 3,
      to: i,
      toIdx: 1,
      line: { style: `dashed`, fill: K.violet, width: 2 },
      head: { type: `arrow`, width: `sm`, length: `sm` },
    }),
    t.shapes.add({
      geometry: `connector`,
      kind: `straight`,
      from: i,
      fromIdx: 3,
      to: a,
      toIdx: 1,
      line: { style: `dash-dot`, fill: K.amber, width: 2 },
      head: { type: `triangle`, width: `med`, length: `med` },
    }),
    G(t, 154, 378, 270, `Process shapes`, `Flowchart decision, rect, and terminator geometries.`),
    G(
      t,
      510,
      378,
      262,
      `Connector routing`,
      `Straight and elbow connectors with different arrowheads.`,
    ),
    G(t, 900, 378, 230, `Transforms`, `Rotated and gradient-filled accent chevron.`));
}
function Ln(e) {
  let t = En(e, `#FAFBFF`);
  kn(
    t,
    `Typography and text layout`,
    `Title styles, lists, alignment, spacing, and insets all come from the same text engine the stage editor uses for canvas-native editing.`,
  );
  let n = An({ slide: t, left: 82, top: 176, width: 360, height: 180 });
  ((n.text = [`Quarterly Design Review`, `Shared text engine`]),
    (n.text.fontSize = 20),
    (n.text.insets = { left: 18, right: 18, top: 18, bottom: 18 }),
    (n.text.get(`Quarterly Design Review`).style = `title`),
    (n.text.get(`Quarterly Design Review`).color = K.blue),
    (n.text.get(`Shared text engine`).fontSize = 16),
    (n.text.get(`Shared text engine`).color = K.muted));
  let r = An({ slide: t, left: 474, top: 176, width: 326, height: 240, fill: `#FFFFFF` });
  ((r.text = [
    [{ run: `Canvas-native edit sessions` }],
    [{ run: `Word and paragraph selection` }],
    [{ run: `Shared undo and caret movement` }],
  ]),
    (r.text.fontSize = 18),
    (r.text.get(
      [
        `Canvas-native edit sessions`,
        `Word and paragraph selection`,
        `Shared undo and caret movement`,
      ].join(`
`),
    ).style = `list`),
    (r.text.get(`Canvas-native edit sessions`).bold = !0),
    (r.text.insets = { left: 24, right: 20, top: 18, bottom: 18 }));
  let i = An({ slide: t, left: 840, top: 176, width: 354, height: 240, fill: `#F8FBFF` });
  ((i.text = `“A canvas text engine is only viable if selection, caret placement, and rich text styling are first-class model concerns.”`),
    (i.text.alignment = `center`),
    (i.text.verticalAlignment = `middle`),
    (i.text.fontSize = 24),
    (i.text.color = K.ink),
    (i.text.insets = { left: 26, right: 26, top: 24, bottom: 24 }),
    G(
      t,
      84,
      380,
      340,
      `Styled title block`,
      `Title preset, secondary body line, and content insets.`,
    ),
    G(
      t,
      474,
      440,
      326,
      `List semantics`,
      `List styling is range-driven, not hard-coded in the React layer.`,
    ),
    G(
      t,
      840,
      440,
      354,
      `Centered quotation`,
      `Alignment, insets, and large-type wrapping stress the text layout system.`,
    ));
}
function Rn(e) {
  let t = En(e);
  kn(
    t,
    `Tables`,
    `Tables showcase merge regions, style presets, borders, rich text values, and explicit column sizing.`,
  );
  let n = t.tables.add({
    rows: 6,
    columns: 4,
    left: 82,
    top: 178,
    width: 656,
    height: 314,
    values: [
      [`Performance scorecard`, ``, ``, ``],
      [`Metric`, `North`, `EMEA`, `APAC`],
      [`Bookings`, 120, 94, 68],
      [`Pipeline`, 210, 176, 140],
      [`Renewals`, 96, 82, 65],
      [`Total`, 426, 352, 273],
    ],
  });
  (n.merge({ startRow: 0, endRow: 0, startColumn: 0, endColumn: 3 }),
    (n.columns.get(0).width = 220),
    (n.columns.get(1).width = 140),
    (n.columns.get(2).width = 140),
    (n.columns.get(3).width = 140),
    (n.style = `TableStyleMedium2`),
    (n.styleOptions = {
      headerRow: !0,
      bandedRows: !0,
      bandedColumns: !1,
      firstColumn: !1,
      lastColumn: !1,
      totalRow: !1,
    }),
    (n.borders = {
      outside: { width: 1.5, color: `111827` },
      inside: { width: 0.75, color: `D1D5DB` },
    }));
  let r = n.cells.block({ row: 0, column: 0, rowCount: 1, columnCount: 4 });
  ((r.fill = `#0F172A`),
    (r.textStyle.bold = !0),
    (r.textStyle.color = `FFFFFF`),
    (r.textStyle.fontSize = 18));
  let i = t.tables.add({
    rows: 3,
    columns: 2,
    left: 804,
    top: 210,
    width: 390,
    height: 226,
    values: [
      [`Pattern`, `Example`],
      [`Rich text`, [{ run: `Inline `, textStyle: { bold: !0 } }, `formatting`]],
      [`Multi-line`, [[{ run: `Line 1`, textStyle: { italic: !0 } }], [{ run: `Line 2` }]]],
    ],
  });
  ((i.style = `TableStyleMedium9`),
    (i.styleOptions = {
      headerRow: !0,
      bandedRows: !0,
      bandedColumns: !1,
      firstColumn: !1,
      lastColumn: !1,
      totalRow: !1,
    }),
    G(
      t,
      84,
      520,
      650,
      `Scorecard table`,
      `Merged title row, preset style, custom borders, and explicit column widths.`,
    ),
    G(
      t,
      804,
      454,
      384,
      `Cell content`,
      `Rich text runs and multi-line cell values exercise table text layout.`,
    ));
}
function zn(e) {
  let t = En(e, `#FAFBFF`);
  kn(
    t,
    `Charts`,
    `Representative chart authoring from the Granola test suite: line, stacked column, and scatter.`,
  );
  let n = t.charts.add(`line`);
  ((n.position = { left: 72, top: 168, width: 362, height: 230 }),
    (n.title = `Line chart`),
    (n.categories = [`2020`, `2021`, `2022`, `2023`]));
  let r = n.series.add(`North`);
  ((r.categories = n.categories),
    (r.values = [2.1, 2.5, 2.8, 3.2]),
    (r.stroke = { width: 2, style: `solid`, fill: `accent1` }),
    (r.marker.symbol = `circle`),
    (r.marker.size = 6));
  let i = n.series.add(`EMEA`);
  ((i.categories = n.categories),
    (i.values = [1.8, 2, 2.4, 2.7]),
    (i.stroke = { width: 2, style: `solid`, fill: `accent2` }),
    (i.marker.symbol = `square`),
    (i.marker.size = 6),
    (n.hasLegend = !0),
    (n.legend.position = `top`));
  let a = t.charts.add(`bar`);
  ((a.position = { left: 458, top: 168, width: 362, height: 230 }),
    (a.title = `Stacked column`),
    (a.categories = [`North`, `EMEA`, `APAC`]));
  let o = a.series.add(`Platform`);
  ((o.categories = a.categories), (o.values = [60, 80, 25]), (o.fill = `accent1`));
  let s = a.series.add(`Services`);
  ((s.categories = a.categories), (s.values = [30, 40, 10]), (s.fill = `accent3`));
  let c = a.series.add(`Support`);
  ((c.categories = a.categories),
    (c.values = [10, 20, 5]),
    (c.fill = `accent5`),
    (a.barOptions.direction = `column`),
    (a.barOptions.grouping = `stacked`),
    (a.dataLabels.showValue = !0),
    (a.dataLabels.position = `outEnd`));
  let l = t.charts.add(`scatter`);
  ((l.position = { left: 844, top: 168, width: 362, height: 230 }), (l.title = `Scatter`));
  let u = l.series.add(`Transit candidates`);
  ((u.xValues = [1.5, 3.2, 6.8, 12.4, 24.9]),
    (u.values = [1.1, 1.4, 1.9, 2.5, 3.2]),
    (u.marker.symbol = `circle`),
    (u.marker.size = 7),
    (u.fill = `accent3`),
    (u.stroke = { width: 2, style: `solid`, fill: `accent3` }),
    (l.scatterOptions.style = `lineWithMarkers`),
    (l.xAxis.title.text = `Orbital period`),
    (l.yAxis.title.text = `Radius`),
    G(
      t,
      74,
      418,
      356,
      `Line chart`,
      `Markers, legend placement, and a minimal multi-series comparison.`,
    ),
    G(
      t,
      460,
      418,
      356,
      `Stacked column`,
      `Data labels and grouped columns mirror the chart test coverage.`,
    ),
    G(t, 846, 418, 356, `Scatter`, `XY data with connected markers and explicit axis titles.`));
}
function Bn(e, t, n) {
  let r = En(e);
  kn(
    r,
    `Images and treatments`,
    `Contain, cover, crop, and transform behaviors share the same geometry model as other slide elements.`,
  );
  let i = r.images.add({ dataUrl: t, alt: `Aurora contain treatment` });
  ((i.position = { left: 96, top: 188, width: 304, height: 208 }), (i.fit = `contain`));
  let a = r.images.add({ dataUrl: t, alt: `Aurora cover treatment` });
  ((a.position = { left: 486, top: 188, width: 304, height: 208 }), (a.fit = `cover`));
  let o = r.images.add({ dataUrl: n, alt: `Poster cropped treatment` });
  ((o.position = { left: 876, top: 188, width: 304, height: 208 }),
    (o.crop = { left: 0.08, top: 0.14, right: 0.08, bottom: 0.12 }),
    (o.rotation = -6),
    [
      { left: 84, label: `Contain` },
      { left: 474, label: `Cover` },
      { left: 864, label: `Crop + rotate` },
    ].forEach((e) => {
      (An({
        slide: r,
        left: e.left,
        top: 176,
        width: 328,
        height: 232,
        fill: `#FFFFFF`,
      }).sendToBack(),
        G(
          r,
          e.left + 10,
          422,
          308,
          e.label,
          `Image positioning lives in the same frame geometry system as shapes and charts.`,
        ));
    }));
  let s = r.shapes.add({
    geometry: `roundRect`,
    position: { left: 160, top: 520, width: 960, height: 120 },
    fill: `#F8FBFF`,
    line: { style: `solid`, fill: K.border, width: 1 },
  });
  ((s.text = `This slide keeps image workflows visible for future shared-object work: the same frame, transform, selection, and worker redraw mechanics should be reusable across slides, documents, and eventually spreadsheet floating objects.`),
    (s.text.fontSize = 18),
    (s.text.color = K.ink));
}
function Vn(e) {
  let t = En(e, `#F7FAFF`);
  kn(
    t,
    `Image generation state`,
    `Prompt-backed image frames stay visible in the deck so worker/runtime changes can be iterated against an active generating surface.`,
  );
  let n = An({ slide: t, left: 72, top: 154, width: 1136, height: 388, fill: `#FFFFFF` });
  n.line.fill = `#BFDBFE`;
  let r = t.images.add({
    prompt: `Use case: photorealistic-natural
Asset type: presentation panorama
Primary request: four different dogs standing together like a lineup, showing different sizes and personalities
Scene/backdrop: clean studio backdrop with soft shadows
Subject: diverse dog lineup including a corgi, labrador, greyhound, and small terrier
Style/medium: polished editorial photography
Composition/framing: wide panoramic crop, full bodies visible, balanced spacing
Lighting/mood: bright, welcoming, lightly playful
Color palette: warm neutrals with natural fur colors
Constraints: no text, no watermark
Avoid: leashes, collars with readable tags, extra props`,
    alt: `Diverse dog lineup`,
  });
  ((r.position = { left: 96, top: 190, width: 1088, height: 122 }),
    (r.fit = `cover`),
    (r.geometry = `roundRect`),
    r.regenerate({ kind: `content` }),
    G(
      t,
      96,
      334,
      420,
      `Generating panorama`,
      `This specimen intentionally starts from a prompt-only image so the presentation demo can exercise pending/generating image UI without importing a baked asset.`,
    ),
    G(
      t,
      650,
      334,
      534,
      `Iteration target`,
      `Use this slide to tune worker-published generation state, overlay treatments, and frame behavior while the asset is unresolved or being regenerated.`,
    ));
  let i = t.shapes.add({
    geometry: `roundRect`,
    position: { left: 96, top: 572, width: 1088, height: 86 },
    fill: `#EFF6FF`,
    line: { style: `solid`, fill: K.border, width: 1 },
  });
  ((i.text = `The image frame mirrors the requested panorama geometry and explicitly calls regenerate({ kind: 'content' }) so local demo sessions land in a real generating state instead of a static placeholder.`),
    (i.text.fontSize = 18),
    (i.text.color = K.ink));
}
function Hn(e) {
  e.comments.setSelf({
    id: `popcorn-demo-editor`,
    displayName: `Granola Editor`,
    initials: `GE`,
    email: `editor@example.com`,
  });
  let t = e.slides.items[0],
    n = e.slides.items[1],
    r = e.slides.items[2],
    i = e.slides.items[4],
    a = e.slides.items[6];
  if (!t || !n || !r || !i || !a) return;
  let o = {
      id: `popcorn-demo-designer`,
      displayName: `Ivy Designer`,
      initials: `ID`,
      email: `ivy@example.com`,
    },
    s = { id: `popcorn-demo-reviewer`, displayName: `Noah Reviewer`, initials: `NR` },
    c = { id: `popcorn-demo-pm`, displayName: `Mia PM`, initials: `MP` },
    l = { id: `popcorn-demo-content-designer`, displayName: `Avery Chen`, initials: `AC` },
    u =
      t.shapes.items.find((e) => e.text.toString().includes(`Slides Feature Catalog`)) ??
      t.shapes.items[0];
  u &&
    e.comments
      .addThread(
        { element: u },
        `Title copy is approved. Keep this as the default playground marker for stored deck comments.`,
        { position: { x: 112, y: 92 }, createdAt: `2026-04-18T08:30:00.000Z` },
      )
      .addReply(`Leaving it here so slide-level thread overlays are easy to verify in Popcorn.`, {
        author: o,
        createdAt: `2026-04-18T08:47:00.000Z`,
      });
  let d = t.shapes.items.find((e) =>
    e.text.toString().includes(`A presentation design-system deck`),
  );
  d &&
    e.comments
      .addThread(
        { textMatch: { element: d, query: `Granola slide APIs` } },
        `Can we spell out what these APIs support before this deck goes to review?`,
        { position: { x: 446, y: 177 }, author: c, createdAt: `2026-04-18T09:05:00.000Z` },
      )
      .addReply(`Yes — I'll add the short capability summary to the launch notes.`, {
        author: l,
        createdAt: `2026-04-18T09:13:00.000Z`,
      });
  let f = t.images.items[0];
  f &&
    e.comments.addThread(
      { element: f },
      `The hero image reads well here. Let's keep enough contrast around the edges.`,
      { position: { x: 1088, y: 146 }, author: o, createdAt: `2026-04-18T09:22:00.000Z` },
    );
  let p = t.shapes.items.find((e) => e.text.toString() === `Worker-first stage`);
  p &&
    e.comments.addThread(
      { element: p },
      `This card could mention that presentation and spreadsheet previews share the same rendering approach.`,
      { position: { x: 622, y: 350 }, author: s, createdAt: `2026-04-18T09:36:00.000Z` },
    );
  let m = [
    {
      text: `Solid 1px`,
      comment: `This thin blue stroke is the clearest baseline for the component spec.`,
      position: { x: 150, y: 220 },
      author: o,
      createdAt: `2026-04-17T09:08:00.000Z`,
    },
    {
      text: `Dotted 2px`,
      comment: `Please check that dotted borders stay visible at the smallest preview size.`,
      position: { x: 638, y: 274 },
      author: s,
      createdAt: `2026-04-17T09:21:00.000Z`,
    },
    {
      text: `Dash-dot-dot 3px`,
      comment: `The heavier rose border feels slightly stronger than the other samples.`,
      position: { x: 1118, y: 226 },
      author: l,
      createdAt: `2026-04-17T09:43:00.000Z`,
    },
    {
      text: `Mixed borders in one composition`,
      comment: `Good stress test for multiple outline styles in one exported slide.`,
      position: { x: 432, y: 461 },
      author: c,
      createdAt: `2026-04-17T10:02:00.000Z`,
    },
  ];
  for (let t of m) {
    let r = n.shapes.items.find((e) => e.text.toString() === t.text);
    r &&
      e.comments.addThread({ element: r }, t.comment, {
        position: t.position,
        author: t.author,
        createdAt: t.createdAt,
      });
  }
  let h = [
    {
      text: `Solid fill`,
      comment: `The solid treatment should match the primary accent used elsewhere in the deck.`,
      position: { x: 295, y: 230 },
      author: o,
      createdAt: `2026-04-16T13:04:00.000Z`,
    },
    {
      text: `Linear gradient`,
      comment: `I like this gradient direction; let's verify it stays consistent after export.`,
      position: { x: 566, y: 340 },
      author: s,
      createdAt: `2026-04-16T13:18:00.000Z`,
    },
    {
      text: `Path gradient`,
      comment: `Could we soften the center highlight so this specimen feels less saturated?`,
      position: { x: 855, y: 244 },
      author: l,
      createdAt: `2026-04-16T13:32:00.000Z`,
    },
    {
      text: `Pattern fill`,
      comment: `The grid spacing is easy to understand even when the slide is zoomed out.`,
      position: { x: 1126, y: 357 },
      author: c,
      createdAt: `2026-04-16T13:48:00.000Z`,
    },
  ];
  for (let t of h) {
    let n = r.shapes.items.find((e) => e.text.toString() === t.text);
    n &&
      e.comments.addThread({ element: n }, t.comment, {
        position: t.position,
        author: t.author,
        createdAt: t.createdAt,
      });
  }
  let g =
    i.shapes.items.find((e) => e.text.toString().trim() === `Process`) ??
    i.shapes.items.find((e) => e.text.toString().trim().length > 0);
  if (g) {
    let t =
      g.text
        .toString()
        .trim()
        .split(/\s+/)
        .find((e) => e.length > 0) ?? ``;
    t &&
      e.comments
        .addThread(
          { textMatch: { element: g, query: t } },
          `This callout label is useful for text-range comment placement checks.`,
          { position: { x: 856, y: 196 }, author: s, createdAt: `2026-04-17T15:12:00.000Z` },
        )
        .resolve(void 0, `2026-04-17T16:00:00.000Z`);
  }
  let _ = [
    {
      text: `Decision`,
      comment: `Should this decision step use a shorter label in the final template?`,
      position: { x: 246, y: 235 },
      author: c,
      createdAt: `2026-04-17T15:30:00.000Z`,
    },
    {
      text: `Terminator`,
      comment: `This endpoint is the best place to explain what happens when the flow completes.`,
      position: { x: 880, y: 294 },
      author: o,
      createdAt: `2026-04-17T15:44:00.000Z`,
    },
  ];
  for (let t of _) {
    let n = i.shapes.items.find((e) => e.text.toString() === t.text);
    n &&
      e.comments.addThread({ element: n }, t.comment, {
        position: t.position,
        author: t.author,
        createdAt: t.createdAt,
      });
  }
  e.comments
    .addThread(
      { slide: a },
      `Slide-level thread anchored in open space so marker projection can be checked independently of element geometry.`,
      { position: { x: 1110, y: 602 }, author: c, createdAt: `2026-04-16T12:25:00.000Z` },
    )
    .addReply(`Keeping this unresolved gives the deck both active and resolved thread specimens.`, {
      createdAt: `2026-04-16T12:42:00.000Z`,
    });
  let v = [
    {
      text: `Scorecard table`,
      comment: `Let's make sure the merged heading remains readable in the compact preview.`,
      position: { x: 166, y: 213 },
      author: s,
      createdAt: `2026-04-16T14:03:00.000Z`,
    },
    {
      text: `Cell content`,
      comment: `These rich-text examples are useful for showing how inline formatting survives import.`,
      position: { x: 1084, y: 329 },
      author: l,
      createdAt: `2026-04-16T14:21:00.000Z`,
    },
  ];
  for (let t of v) {
    let n = a.shapes.items.find((e) => e.text.toString() === t.text);
    n &&
      e.comments.addThread({ element: n }, t.comment, {
        position: t.position,
        author: t.author,
        createdAt: t.createdAt,
      });
  }
}
function Un() {
  let e = b.create(),
    t = vt(),
    n = H();
  return (jn(e, n), Mn(e), Nn(e), Fn(e), In(e), Ln(e), Rn(e), zn(e), Bn(e, t, n), Vn(e), Hn(e), e);
}
var Wn,
  Gn,
  K,
  Kn,
  qn = e(() => {
    (ne(),
      it(),
      (Wn = 1280),
      (Gn = 720),
      (K = {
        ink: `#0F172A`,
        muted: `#475569`,
        border: `#CBD5E1`,
        panel: `#FFFFFF`,
        canvas: `#F8FAFC`,
        blue: `#2563EB`,
        indigo: `#4F46E5`,
        violet: `#7C3AED`,
        mint: `#0F766E`,
        cyan: `#0891B2`,
        amber: `#D97706`,
        rose: `#E11D48`,
        cloud: `#EFF6FF`,
        lavender: `#F5F3FF`,
        mintTint: `#ECFDF5`,
        amberTint: `#FFFBEB`,
      }),
      (Kn = [
        { type: `lightGrid`, color: K.indigo },
        { type: `smallGrid`, color: K.blue },
        { type: `largeGrid`, color: K.cyan },
        { type: `darkGrid`, color: K.ink },
        { type: `dotGrid`, color: K.violet },
        { type: `cross`, color: K.blue },
        { type: `diagonalCross`, color: K.violet },
        { type: `horizontal`, color: K.mint },
        { type: `vertical`, color: K.rose },
        { type: `lightHorizontal`, color: K.cyan },
        { type: `lightVertical`, color: K.blue },
        { type: `narrowHorizontal`, color: K.ink },
        { type: `narrowVertical`, color: K.muted },
        { type: `dashedHorizontal`, color: K.indigo },
        { type: `dashedVertical`, color: K.rose },
        { type: `upwardDiagonal`, color: K.mint },
        { type: `downwardDiagonal`, color: K.blue },
        { type: `wideUpwardDiagonal`, color: K.cyan },
        { type: `wideDownwardDiagonal`, color: K.violet },
        { type: `dashedUpwardDiagonal`, color: K.amber },
        { type: `dashedDownwardDiagonal`, color: K.rose },
        { type: `smallCheck`, color: K.indigo },
        { type: `largeCheck`, color: K.blue },
        { type: `openDiamond`, color: K.cyan },
        { type: `solidDiamond`, color: K.violet },
        { type: `dottedDiamond`, color: K.amber },
        { type: `plaid`, color: K.rose },
        { type: `weave`, color: K.ink },
        { type: `wave`, color: K.blue },
        { type: `zigZag`, color: K.violet },
        { type: `horizontalBrick`, color: K.amber },
        { type: `diagonalBrick`, color: K.rose },
        { type: `sphere`, color: K.mint },
        { type: `divot`, color: K.indigo },
        { type: `shingle`, color: K.cyan },
        { type: `trellis`, color: K.blue },
        { type: `lightTrellis`, color: K.violet },
        { type: `darkTrellis`, color: K.ink },
        { type: `smallConfetti`, color: K.amber },
        { type: `largeConfetti`, color: K.rose },
        { type: `gray125`, color: K.ink },
        { type: `gray0625`, color: K.muted },
        { type: `percent10`, color: K.indigo },
        { type: `percent20`, color: K.blue },
        { type: `percent30`, color: K.cyan },
        { type: `percent40`, color: K.violet },
        { type: `percent50`, color: K.amber },
        { type: `percent60`, color: K.rose },
        { type: `percent70`, color: K.mint },
        { type: `percent80`, color: K.ink },
        { type: `percent90`, color: K.muted },
        { type: `lightGray`, color: K.ink },
        { type: `mediumGray`, color: K.ink },
        { type: `darkGray`, color: K.ink },
      ]));
  });
function Jn() {
  return new Worker(
    new URL(
      `` + new URL(`runtime.worker-bcedbfe5d9e2.js`, import.meta.url).href,
      `` + import.meta.url,
    ),
    { type: `module`, name: `popcorn-presentation-controller-worker` },
  );
}
var Yn = e(() => {}),
  Xn,
  Zn = e(() => {
    Xn = {
      presentationVersion: 0,
      previewVersion: 0,
      selectedSlideIdx: 0,
      slideIds: [],
      slideLabels: [],
      slideCount: 0,
      zoom: 1,
      fitScale: null,
      selectedSlideFrame: null,
      selectedSlideElementTargets: [],
      hyperlinkTargets: [],
      previewFrames: [],
      selectedElementIds: [],
      primarySelectedElementId: null,
      hoveredElementId: null,
      activeInteractionKind: null,
      selectionMarqueeFrame: null,
      notesText: ``,
      canUndo: !1,
      canRedo: !1,
      localAwarenessCursor: null,
      awarenessCursors: [],
      awarenessSelections: [],
      slideRect: null,
      textLayoutBlocks: [],
      textEditState: null,
      inspector: { slideElements: [], selectedElement: null },
      commentThreads: [],
      camera: null,
    };
  });
function Qn(e = Xn) {
  return new ke(e);
}
var $n = e(() => {
  (ve(), Zn());
});
function er(e, t) {
  return e?.width === t?.width && e?.height === t?.height && e?.dpr === t?.dpr;
}
function tr(e, t, n) {
  ((n?.resizeIntrinsicBitmap ?? !0) &&
    ((e.width = Math.max(1, Math.round(t.width * t.dpr))),
    (e.height = Math.max(1, Math.round(t.height * t.dpr)))),
    (e.style.width = `${t.width}px`),
    (e.style.height = `${t.height}px`));
}
function nr(e) {
  if (
    !(
      typeof window < `u` &&
      typeof Worker < `u` &&
      typeof HTMLCanvasElement < `u` &&
      typeof OffscreenCanvas < `u` &&
      (!e?.requiresCanvasTransfer || `transferControlToOffscreen` in HTMLCanvasElement.prototype)
    )
  )
    throw Error(
      `Popcorn presentation viewport requires Worker and transferControlToOffscreen support.`,
    );
}
function rr(e = {}) {
  return new ar(e);
}
var ir,
  ar,
  or = e(() => {
    (w(),
      C(),
      F(),
      Sn(),
      Tn(),
      qn(),
      Yn(),
      $n(),
      (ir = 1),
      (ar = class {
        id = ir++;
        #e = O(`presentation-main-controller`);
        #t = Qn();
        #n = new Set();
        #r = new Set();
        #i = [];
        #a;
        #o = null;
        #s = null;
        #c = null;
        #l = null;
        #u = null;
        #d = null;
        #f = null;
        #p = null;
        #m = 1;
        #h = null;
        #g = null;
        #_ = null;
        #v;
        #y;
        #b;
        #x = !1;
        #S = !1;
        constructor(e = {}) {
          ((this.#y = e.onImportError), (this.#b = e.onImportReady));
          let t = e.bootstrapSource
              ? null
              : (e.presentationProto ?? e.presentation?.toProto() ?? Un().toProto()),
            n = (e.workerFactory ?? Jn)();
          ((this.#a = new I(
            n,
            (e) => this.#D(e),
            (e) => {
              let t = Error(e);
              if (!this.#S && this.#y) {
                this.#y(t);
                return;
              }
              throw t;
            },
          )),
            this.#e.debug(`bootstrap`, {
              controllerId: this.id,
              slideCount: t?.slides?.length,
              initialSelectedSlideIdx: e.initialSelectedSlideIdx,
              initialZoom: e.initialZoom,
            }));
          let r = {
            initialCrdtState: e.initialCrdtState,
            initialSelectedSlideIdx: e.initialSelectedSlideIdx,
            initialZoom: e.initialZoom,
          };
          if (e.bootstrapSource) {
            let t = e.bootstrapSource;
            this.#a.bootstrap(
              { ...r, bootstrapSource: t },
              t.kind === `source-bytes` ? [t.bytes] : void 0,
            );
          } else t && this.#a.bootstrap({ ...r, presentationProto: t });
          this.#v = bn()
            .then(() => {
              let e = ie();
              (this.#e.debug(`font-render-deps-ready`, {
                fontCount: e.length,
                fonts: e.map((e) => ({
                  family: e.family,
                  style: e.style,
                  weight: e.weight,
                  format: e.format,
                  src: e.src,
                })),
                fontDebug: Ae(),
              }),
                e.length !== 0 &&
                  (this.#a.dispatch({ kind: `install-font-faces`, fonts: e }),
                  this.#e.debug(`font-install-dispatched`, { fontCount: e.length })));
            })
            .catch(() => {});
        }
        subscribe(e) {
          return this.#t.subscribe(e);
        }
        getState() {
          return this.#t.getState();
        }
        getSnapshot() {
          return this.getState();
        }
        dispatch(e) {}
        attachViewport(e) {
          nr({ requiresCanvasTransfer: !!e.overlayCanvas });
          let t = (t) => {
              let n = Cn(e.host, t);
              return {
                width: Math.max(1, n.width),
                height: Math.max(1, n.height),
                dpr: window.devicePixelRatio || 1,
              };
            },
            n = () => {
              ((this.#h = null), this.#w());
            },
            r = (e) => {
              ((this.#f = t(e)),
                this.#h != null && window.cancelAnimationFrame(this.#h),
                (this.#h = window.requestAnimationFrame(n)));
            },
            i = this.#c !== e.canvas;
          if ((i && (this.#c = e.canvas), (this.#l = e.canvas.getContext(`2d`)), !this.#l))
            throw Error(`Presentation viewport canvas 2d context is unavailable.`);
          let a = !!(e.overlayCanvas && this.#u !== e.overlayCanvas);
          a && e.overlayCanvas && (this.#u = e.overlayCanvas);
          let o = t();
          ((this.#d ??= { ...o }),
            (this.#f ??= { ...o }),
            tr(e.canvas, this.#d, { resizeIntrinsicBitmap: !0 }),
            e.overlayCanvas && tr(e.overlayCanvas, this.#d, { resizeIntrinsicBitmap: !0 }),
            this.#v.then(() => {
              if (this.#x) return;
              let n = t();
              if (((this.#f = { ...n }), this.#d ?? this.#C(n), i)) {
                if (this.#c !== e.canvas) return;
                this.#a.dispatch({
                  kind: `attach-canvas`,
                  width: n.width,
                  height: n.height,
                  dpr: n.dpr,
                });
              } else this.#c === e.canvas && r();
              if (e.overlayCanvas)
                if (a) {
                  if (this.#u !== e.overlayCanvas) return;
                  let t = e.overlayCanvas.transferControlToOffscreen();
                  this.#a.dispatch(
                    {
                      kind: `attach-overlay-canvas`,
                      canvas: t,
                      width: n.width,
                      height: n.height,
                      dpr: n.dpr,
                    },
                    [t],
                  );
                } else this.#u === e.overlayCanvas && r();
            }));
          let s =
            typeof ResizeObserver < `u`
              ? new ResizeObserver((t) => {
                  let n = t[0];
                  r(n ? wn(e.host, n) : null);
                })
              : null;
          s?.observe(e.host);
          let c = () => {
            r();
          };
          return (
            window.addEventListener(`resize`, c),
            () => {
              (this.#h != null && (window.cancelAnimationFrame(this.#h), (this.#h = null)),
                s?.disconnect(),
                window.removeEventListener(`resize`, c));
            }
          );
        }
        #C(e) {
          ((this.#d = { ...e }),
            this.#c && (tr(this.#c, e), this.#T()),
            this.#u && tr(this.#u, e, { resizeIntrinsicBitmap: !1 }));
        }
        requestExport(e) {
          return this.#a.request({ kind: `export`, format: e?.format ?? `proto` }).then((e) => {
            if (e.kind !== `export`) throw Error(`Unexpected export response: ${e.kind}`);
            return e.result;
          });
        }
        requestCrdtSnapshot() {
          return this.#a.request({ kind: `crdt-snapshot` }).then((e) => {
            if (e.kind !== `crdt-snapshot`)
              throw Error(`Unexpected CRDT snapshot response: ${e.kind}`);
            return new Uint8Array(e.result);
          });
        }
        loadInitialCrdtState(e) {
          return (
            (this.#s = null),
            this.#a.request({ kind: `load-initial-crdt-state`, update: e }).then((e) => {
              if (e.kind !== `load-initial-crdt-state`)
                throw Error(`Unexpected initial CRDT load response: ${e.kind}`);
            })
          );
        }
        applyCrdtUpdate(e) {
          return (
            (this.#s = null),
            this.#a.request({ kind: `apply-crdt-update`, update: e }).then((e) => {
              if (e.kind !== `apply-crdt-update`)
                throw Error(`Unexpected CRDT apply response: ${e.kind}`);
            })
          );
        }
        hydrateImageAssets(e) {
          return this.#a.request({ kind: `hydrate-image-assets`, assets: e }).then((e) => {
            if (e.kind !== `hydrate-image-assets`)
              throw Error(`Unexpected image hydration response: ${e.kind}`);
          });
        }
        subscribeCrdtUpdates(e) {
          return (
            this.#n.add(e),
            () => {
              this.#n.delete(e);
            }
          );
        }
        subscribeImageHydrationRequests(e) {
          return (
            this.#r.add(e),
            this.#i.length > 0 && e(this.#i),
            () => {
              this.#r.delete(e);
            }
          );
        }
        replaceFromProto(e) {
          return (
            (this.#s = null),
            this.#a.request({ kind: `replace-from-proto`, presentationProto: e }).then((e) => {
              if (e.kind !== `replace-from-proto`)
                throw Error(`Unexpected replace response: ${e.kind}`);
            })
          );
        }
        dispose() {
          this.#x ||
            ((this.#x = !0),
            (this.#c = null),
            (this.#l = null),
            (this.#u = null),
            this.#g?.bitmap.close(),
            (this.#g = null),
            this.#h != null && (window.cancelAnimationFrame(this.#h), (this.#h = null)),
            this.#n.clear(),
            this.#a.dispose());
        }
        #w() {
          let e = this.#f;
          if (!e) return;
          if (er(this.#d, e) && this.#p == null) {
            this.#C(e);
            return;
          }
          if (this.#p != null) return;
          let t = this.#m++;
          ((this.#p = t),
            this.#a.dispatch({
              kind: `resize-viewport`,
              width: e.width,
              height: e.height,
              dpr: e.dpr,
              resizeId: t,
              ...(this.#o ? { camera: { ...this.#o } } : {}),
            }));
        }
        #T() {
          let e = this.#c,
            t = this.#l,
            n = this.#g,
            r = this.#d;
          !e ||
            !t ||
            !n ||
            !r ||
            (t.setTransform(1, 0, 0, 1, 0, 0),
            t.clearRect(0, 0, e.width, e.height),
            t.setTransform(r.dpr, 0, 0, r.dpr, 0, 0),
            t.drawImage(n.bitmap, 0, 0, n.metrics.width, n.metrics.height));
        }
        #E(e) {
          let t = { width: e.width, height: e.height, dpr: e.dpr },
            n = e.resizeId != null,
            r = n && this.#p === e.resizeId,
            i = !n || r,
            a = !this.#f || er(this.#f, t);
          if (!i || !a) {
            (e.bitmap.close(), r && ((this.#p = null), this.#w()));
            return;
          }
          (this.#g?.bitmap.close(),
            (this.#g = { bitmap: e.bitmap, metrics: t }),
            r && (this.#p = null),
            this.#C(t),
            r &&
              e.resizeId != null &&
              (this.#a.dispatch({ kind: `commit-viewport-resize`, resizeId: e.resizeId }),
              this.#w()));
        }
        setSelectedSlideIdx(e) {
          this.#a.dispatch({ kind: `set-selected-slide-idx`, index: e });
        }
        setZoom(e) {
          this.#a.dispatch({ kind: `set-zoom`, zoom: e });
        }
        setEditingEnabled(e) {
          this.#a.dispatch({ kind: `set-editing-enabled`, isEditing: e });
        }
        setStageBackgroundColor(e) {
          let t = e.trim();
          t.length === 0 ||
            t === this.#_ ||
            ((this.#_ = t),
            this.#a.dispatch({ kind: `set-stage-background-color`, backgroundColor: t }));
        }
        setViewportInsets(e, t) {
          ((this.#s = t ? { ...t } : null),
            t && (this.#o = { ...t }),
            this.#a.dispatch({
              kind: `set-viewport-insets`,
              viewportInsets: { ...e },
              ...(t ? { camera: { ...t } } : {}),
            }));
        }
        setViewportCamera(e) {
          let t = this.#s;
          ((this.#s = null),
            !(e && t && t.x === e.x && t.y === e.y && t.k === e.k) &&
              ((this.#o = e ? { ...e } : null),
              e && this.#a.dispatch({ kind: `set-camera`, camera: { ...e } })));
        }
        getViewportCamera() {
          return this.#o ? { ...this.#o } : null;
        }
        setSelectedElementId(e) {
          this.#a.dispatch({ kind: `set-selected-element-id`, elementId: e });
        }
        addCommentThread(e, t, n) {
          return this.#a
            .request({ kind: `add-comment-thread`, slideId: e, body: t, options: n })
            .then((e) => {
              if (e.kind !== `add-comment-thread`)
                throw Error(`Unexpected add comment response: ${e.kind}`);
              return e.threadId;
            });
        }
        replyToCommentThread(e, t, n) {
          return (
            this.#a.dispatch({ kind: `reply-comment-thread`, threadId: e, body: t, author: n }), !0
          );
        }
        resolveCommentThread(e, t) {
          return (this.#a.dispatch({ kind: `resolve-comment-thread`, threadId: e, author: t }), !0);
        }
        reopenCommentThread(e) {
          return (this.#a.dispatch({ kind: `reopen-comment-thread`, threadId: e }), !0);
        }
        deleteCommentThread(e) {
          return (this.#a.dispatch({ kind: `delete-comment-thread`, threadId: e }), !0);
        }
        toggleCommentReaction(e, t, n) {
          return (
            this.#a.dispatch({
              kind: `toggle-comment-reaction`,
              threadId: e,
              commentId: t,
              reactionType: n,
            }),
            !0
          );
        }
        editThreadComment(e, t, n) {
          return (
            this.#a.dispatch({ kind: `edit-thread-comment`, threadId: e, commentId: t, body: n }),
            !0
          );
        }
        deleteThreadComment(e, t) {
          return (
            this.#a.dispatch({ kind: `delete-thread-comment`, threadId: e, commentId: t }), !0
          );
        }
        beginSelectionMarquee(e) {
          return (this.#a.dispatch({ kind: `begin-selection-marquee`, ...e }), !0);
        }
        updateSelectionMarquee(e) {
          return (this.#a.dispatch({ kind: `update-selection-marquee`, ...e }), !0);
        }
        endSelectionMarquee(e) {
          return (this.#a.dispatch({ kind: `end-selection-marquee`, commit: e?.commit }), !0);
        }
        textPointerDown(e, t) {
          return (
            this.#a.dispatch({ kind: `text-pointer-down`, point: e, shiftKey: t?.shiftKey }), !0
          );
        }
        textPointerMove(e) {
          return (this.#a.dispatch({ kind: `text-pointer-move`, point: e }), !0);
        }
        textPointerUp() {
          this.#a.dispatch({ kind: `text-pointer-up` });
        }
        textSelectWordAtPoint(e) {
          return (this.#a.dispatch({ kind: `text-select-word-at-point`, point: e }), !0);
        }
        textSelectParagraphAtPoint(e) {
          return (this.#a.dispatch({ kind: `text-select-paragraph-at-point`, point: e }), !0);
        }
        textActivateBlockEnd(e) {
          return (this.#a.dispatch({ kind: `text-activate-block-end`, blockId: e }), !0);
        }
        textClear() {
          this.#a.dispatch({ kind: `text-clear` });
        }
        textHandleKeyDown(e) {
          return (this.#a.dispatch({ kind: `text-keydown`, event: e }), !0);
        }
        textHandleBeforeInput(e) {
          return (this.#a.dispatch({ kind: `text-before-input`, event: e }), !0);
        }
        textHandleInput(e) {
          return (this.#a.dispatch({ kind: `text-input`, event: e }), !0);
        }
        textHandleCompositionEnd(e) {
          return (this.#a.dispatch({ kind: `text-composition-end`, event: e }), !0);
        }
        setHoveredElementId(e) {
          this.#a.dispatch({ kind: `set-hovered-element-id`, elementId: e });
        }
        setLocalAwarenessCursor(e) {
          this.#a.dispatch({ kind: `set-local-awareness-cursor`, point: e });
        }
        clearLocalAwarenessCursor() {
          this.#a.dispatch({ kind: `clear-local-awareness-cursor` });
        }
        setPresenceCursor(e, t, n) {
          this.#a.dispatch({
            kind: `set-presence-cursor`,
            presenceId: e,
            cursor: t,
            presenceKind: n?.kind,
          });
        }
        setPresenceSelection(e, t, n) {
          this.#a.dispatch({
            kind: `set-presence-selection`,
            presenceId: e,
            selection: t,
            presenceKind: n?.kind,
          });
        }
        clearPresenceCursor(e, t) {
          this.#a.dispatch({ kind: `clear-presence-cursor`, presenceId: e, slideId: t?.slideId });
        }
        clearPresenceSelection(e, t) {
          this.#a.dispatch({
            kind: `clear-presence-selection`,
            presenceId: e,
            slideId: t?.slideId,
          });
        }
        beginElementInteraction(e) {
          return (this.#a.dispatch({ kind: `begin-element-interaction`, ...e }), !0);
        }
        updateElementInteraction(e) {
          return (this.#a.dispatch({ kind: `update-element-interaction`, ...e }), !0);
        }
        endElementInteraction(e) {
          return (this.#a.dispatch({ kind: `end-element-interaction`, commit: e?.commit }), !0);
        }
        nudgeSelectedElements(e) {
          return (this.#a.dispatch({ kind: `nudge-selected-elements`, dx: e.dx, dy: e.dy }), !0);
        }
        clearElementSelection() {
          this.#a.dispatch({ kind: `clear-element-selection` });
        }
        deleteSelectedElement() {
          return (this.#a.dispatch({ kind: `delete-selected-element` }), !0);
        }
        addSlide() {
          ((this.#s = null), this.#a.dispatch({ kind: `add-slide` }));
        }
        duplicateSelectedSlide() {
          ((this.#s = null), this.#a.dispatch({ kind: `duplicate-selected-slide` }));
        }
        moveSlide(e, t) {
          return (this.#a.dispatch({ kind: `move-slide`, fromIndex: e, toIndex: t }), !0);
        }
        deleteSlide(e) {
          return (this.#a.dispatch({ kind: `delete-slide`, index: e }), !0);
        }
        updateSpeakerNotes(e) {
          this.#a.dispatch({ kind: `update-speaker-notes`, value: e });
        }
        updateSelectedElementFrame(e) {
          return (this.#a.dispatch({ kind: `update-selected-element-frame`, framePatch: e }), !0);
        }
        updateSelectedElementStyle(e) {
          return (this.#a.dispatch({ kind: `update-selected-element-style`, stylePatch: e }), !0);
        }
        reorderSelectedElement(e) {
          return (this.#a.dispatch({ kind: `reorder-selected-element`, direction: e }), !0);
        }
        undo() {
          ((this.#s = null), this.#a.dispatch({ kind: `undo` }));
        }
        redo() {
          ((this.#s = null), this.#a.dispatch({ kind: `redo` }));
        }
        exportPresentationProto() {
          return this.requestExport({ format: `proto` }).then((e) => e.presentationProto);
        }
        requestSlideThumbnail(e, t) {
          return this.#v.then(() =>
            this.#a
              .request({
                kind: `slide-thumbnail`,
                index: e,
                cssMaxPx: t?.cssMaxPx,
                pixelRatio: t?.pixelRatio,
              })
              .then((e) => {
                if (e.kind !== `slide-thumbnail`)
                  throw Error(`Unexpected thumbnail response: ${e.kind}`);
                return e.result;
              }),
          );
        }
        #D(e) {
          switch (e.kind) {
            case `bootstrap-status`:
              e.status === `ready` && !this.#S && ((this.#S = !0), this.#b?.());
              return;
            case `crdt-update`: {
              let t = new Uint8Array(e.update);
              for (let e of this.#n) e(t);
              return;
            }
            case `image-hydration-requests`:
              this.#i = e.requests;
              for (let t of this.#r) t(e.requests);
              return;
            case `meta`:
              this.#t.patch(e.state);
              return;
            case `navigation`:
              this.#t.patch(e.state);
              return;
            case `selection`:
              this.#t.patch(e.state);
              return;
            case `preview`:
              this.#t.patch(e.state);
              return;
            case `viewport`:
              this.#t.patch(e.state);
              return;
            case `viewport-resize-ready`:
              if (this.#p !== e.resizeId || this.#f == null) return;
              (this.#C(this.#f),
                this.#a.dispatch({ kind: `commit-viewport-resize`, resizeId: e.resizeId }));
              return;
            case `viewport-frame`:
              this.#E(e);
              return;
            case `viewport-frame-presented`:
              if (this.#p !== e.resizeId) return;
              ((this.#p = null), this.#C({ width: e.width, height: e.height, dpr: e.dpr }));
              return;
            case `editor`:
              this.#t.patch(e.state);
              return;
            case `comments`:
              this.#t.patch(e.state);
              return;
            case `awareness`:
              this.#t.patch(e.state);
              return;
            case `inspector`:
              this.#t.patch(e.state);
              return;
            case `debug-log`:
              O(e.namespace).debug(e.message, e.details);
              return;
            default:
              return e;
          }
        }
      }));
  }),
  sr = e(() => {
    or();
  });
function cr(e) {
  let t = [],
    n = [];
  for (let r of e) (t.push(...(r.panels ?? [])), n.push(...(r.stageOverlays ?? [])));
  return { panels: t, stageOverlays: n };
}
var lr = e(() => {});
function ur(e, t) {
  let n = Math.max(0, t?.left ?? 0),
    r = Math.max(0, t?.top ?? 0),
    i = Math.max(0, t?.right ?? 0),
    a = Math.max(0, t?.bottom ?? 0);
  return {
    left: n,
    top: r,
    right: i,
    bottom: a,
    width: Math.max(1, e.width - n - i),
    height: Math.max(1, e.height - r - a),
  };
}
function dr(e) {
  return { x: Math.max(240, e.width), y: Math.max(180, e.height) };
}
function fr(e, t, n, r) {
  let i = ur(t, r),
    a = Re({ ...e, x: e.x - i.left, y: e.y - i.top }, { width: i.width, height: i.height }, n),
    o = Math.max(0, n.width) * a.k,
    s = Math.max(0, n.height) * a.k;
  return {
    ...a,
    x: o <= i.width ? i.left + (i.width - o) / 2 : i.left + a.x,
    y: s <= i.height ? i.top + (i.height - s) / 2 : i.top + a.y,
  };
}
function pr(e, t = 1) {
  let n = Math.max(t, Tr);
  return Math.min(16 / n, Math.max(wr / n, e));
}
function mr(e) {
  return Math.min(16, Math.max(wr, e));
}
function hr(e, t, n) {
  let r = ur(e, n),
    i = Math.max(0, n?.fitMargin ?? Cr),
    a = Math.max(1, r.width - i * 2),
    o = Math.max(1, r.height - i * 2);
  return Math.max(Tr, Math.min(a / Math.max(t.width, 1), o / Math.max(t.height, 1)));
}
function gr(e) {
  let t = dr(e.viewport),
    n = { x: t.x, y: t.y },
    r = { width: e.frame.width + t.x * 2, height: e.frame.height + t.y * 2 },
    i = We(e.camera, n.x, n.y),
    a = hr(e.viewport, e.frame, e.viewportInsets);
  return {
    fitScale: a,
    zoomFactor: e.camera.k / Math.max(a, 2 ** -52),
    worldSize: r,
    slideOrigin: n,
    slideRect: {
      left: i.x,
      top: i.y,
      width: e.frame.width * e.camera.k,
      height: e.frame.height * e.camera.k,
      scale: e.camera.k,
    },
  };
}
function _r(e) {
  let t = hr(e.viewport, e.frame, e.viewportInsets),
    n = pr(e.zoomFactor ?? 1, t),
    r = gr({
      viewport: e.viewport,
      frame: e.frame,
      camera: { x: 0, y: 0, k: t * n },
      viewportInsets: e.viewportInsets,
    }),
    i = ur(e.viewport, e.viewportInsets),
    a = r.slideOrigin.x + e.frame.width / 2,
    o = r.slideOrigin.y + e.frame.height / 2;
  return fr(
    { k: t * n, x: i.left + i.width / 2 - a * t * n, y: i.top + i.height / 2 - o * t * n },
    e.viewport,
    r.worldSize,
    e.viewportInsets,
  );
}
function vr(e) {
  if (
    e.previousViewport.width <= 0 ||
    e.previousViewport.height <= 0 ||
    e.nextViewport.width <= 0 ||
    e.nextViewport.height <= 0 ||
    e.camera.k <= 0
  )
    return yr({
      camera: e.camera,
      viewport: e.nextViewport,
      frame: e.frame,
      viewportInsets: e.viewportInsets,
    });
  let t = ur(e.previousViewport, e.previousViewportInsets ?? e.viewportInsets),
    n = ur(e.nextViewport, e.viewportInsets),
    r = gr({
      viewport: e.previousViewport,
      frame: e.frame,
      camera: e.camera,
      viewportInsets: e.previousViewportInsets ?? e.viewportInsets,
    }),
    i = { x: t.left + t.width / 2, y: t.top + t.height / 2 },
    a = {
      x: (i.x - r.slideRect.left) / Math.max(e.camera.k, 2 ** -52),
      y: (i.y - r.slideRect.top) / Math.max(e.camera.k, 2 ** -52),
    },
    o = gr({
      viewport: e.nextViewport,
      frame: e.frame,
      camera: { x: 0, y: 0, k: e.camera.k },
      viewportInsets: e.viewportInsets,
    }),
    s = { x: n.left + n.width / 2, y: n.top + n.height / 2 };
  return yr({
    camera: {
      k: e.camera.k,
      x: s.x - (o.slideOrigin.x + a.x) * e.camera.k,
      y: s.y - (o.slideOrigin.y + a.y) * e.camera.k,
    },
    viewport: e.nextViewport,
    frame: e.frame,
    viewportInsets: e.viewportInsets,
  });
}
function yr(e) {
  let t = gr({
    viewport: e.viewport,
    frame: e.frame,
    camera: e.camera,
    viewportInsets: e.viewportInsets,
  });
  return fr(e.camera, e.viewport, t.worldSize, e.viewportInsets);
}
function br(e) {
  let t = { ...e.camera, k: mr(e.camera.k) },
    n = gr({ viewport: e.viewport, frame: e.frame, camera: t, viewportInsets: e.viewportInsets });
  return fr(t, e.viewport, n.worldSize, e.viewportInsets);
}
function xr(e) {
  let t = hr(e.viewport, e.frame, e.viewportInsets);
  return pr(e.camera.k / Math.max(t, 2 ** -52), t);
}
function Sr(e) {
  let t = gr({
      viewport: e.viewport,
      frame: e.frame,
      camera: e.camera,
      viewportInsets: e.viewportInsets,
    }),
    n = Pe(e.camera, e.viewportX, e.viewportY);
  return { x: n.x - t.slideOrigin.x, y: n.y - t.slideOrigin.y };
}
var Cr,
  wr,
  Tr,
  Er = e(() => {
    (Ge(), (Cr = 48), (wr = 0.1), (Tr = 0.05));
  }),
  Dr,
  Or,
  kr = e(() => {
    ((Dr = t(n())), (Or = (0, Dr.createContext)(null)));
  });
function Ar({ controller: e, children: t }) {
  return (0, jr.jsx)(Or.Provider, { value: e, children: t });
}
var jr,
  Mr = e(() => {
    (kr(), (jr = f()));
  });
function Nr() {
  let e = (0, Pr.useContext)(Or);
  if (!e) throw Error(`PopcornPresentationEditorProvider is required`);
  return e;
}
var Pr,
  Fr = e(() => {
    ((Pr = t(n())), kr());
  });
function Ir(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.slideIds === t.slideIds &&
    e.slideLabels === t.slideLabels &&
    e.slideCount === t.slideCount &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.selectedSlideFrame === t.selectedSlideFrame &&
    e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
    e.hyperlinkTargets === t.hyperlinkTargets &&
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.activeInteractionKind === t.activeInteractionKind &&
    e.notesText === t.notesText &&
    e.canUndo === t.canUndo &&
    e.canRedo === t.canRedo &&
    e.slideRect === t.slideRect &&
    e.textLayoutBlocks === t.textLayoutBlocks &&
    e.textEditState === t.textEditState &&
    e.inspector === t.inspector &&
    e.commentThreads === t.commentThreads &&
    e.camera === t.camera
  );
}
function Lr(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.slideIds === t.slideIds &&
    e.slideLabels === t.slideLabels &&
    e.slideCount === t.slideCount &&
    e.notesText.trim().length > 0 == t.notesText.trim().length > 0 &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.slideRect?.scale === t.slideRect?.scale
  );
}
function Rr(e, t) {
  return (
    e.presentationVersion === t.presentationVersion &&
    e.selectedSlideIdx === t.selectedSlideIdx &&
    e.zoom === t.zoom &&
    e.fitScale === t.fitScale &&
    e.selectedSlideFrame === t.selectedSlideFrame &&
    e.selectedSlideElementTargets === t.selectedSlideElementTargets &&
    e.hyperlinkTargets === t.hyperlinkTargets &&
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.activeInteractionKind === t.activeInteractionKind &&
    e.slideRect === t.slideRect &&
    e.textLayoutBlocks === t.textLayoutBlocks &&
    e.textEditState === t.textEditState &&
    e.inspector === t.inspector &&
    e.commentThreads === t.commentThreads &&
    e.camera === t.camera
  );
}
function zr(e, t) {
  return e.notesText === t.notesText;
}
function Br(e, t) {
  return (
    e.selectedElementIds === t.selectedElementIds &&
    e.primarySelectedElementId === t.primarySelectedElementId &&
    e.inspector === t.inspector
  );
}
function Vr(e, t) {
  let n = (0, Yr.useRef)(e.getSnapshot()),
    r = (0, Yr.useCallback)(() => {
      let r = e.getSnapshot(),
        i = n.current;
      return t(i, r) ? i : ((n.current = r), r);
    }, [t, e]);
  return (0, Yr.useSyncExternalStore)((t) => e.subscribe(t), r, r);
}
function Hr(e) {
  return qr(e, `shell`);
}
function Ur(e) {
  return qr(e, `stage`);
}
function Wr(e) {
  return qr(e, `notes`);
}
function Gr() {
  return Kr(Nr());
}
function Kr(e) {
  return qr(e, `inspector`);
}
function qr(e, t) {
  return Vr(e, Jr(t));
}
function Jr(e) {
  switch (e) {
    case `shell`:
      return Lr;
    case `stage`:
      return Rr;
    case `notes`:
      return zr;
    case `inspector`:
      return Br;
    default:
      return Ir;
  }
}
var Yr,
  Xr = e(() => {
    ((Yr = t(n())), Fr());
  }),
  Zr = e(() => {
    n();
  }),
  Qr = e(() => {
    (Mr(), Fr(), Xr(), Zr());
  });
function $r({ comment: e, isReply: t, timestampNow: n }) {
  return (0, q.jsx)(`div`, {
    className: a(`flex min-w-0 items-start`, t && `border-token-border-light mt-4 border-t pt-4`),
    children: (0, q.jsxs)(`span`, {
      className: `min-w-0 flex-1`,
      children: [
        (0, q.jsxs)(`span`, {
          className: `flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5`,
          children: [
            (0, q.jsx)(`span`, {
              className: `text-token-text-primary text-[13px] font-medium`,
              children: e.author.displayName,
            }),
            (0, q.jsx)(`span`, {
              className: `text-token-description-foreground text-[11px]`,
              children: B(e.editedAt ?? e.createdAt, n),
            }),
          ],
        }),
        (0, q.jsx)(`span`, {
          className: a(
            `mt-1 block text-[13px] leading-5 whitespace-pre-wrap`,
            e.isDeleted ? `text-token-description-foreground italic` : `text-token-text-primary`,
          ),
          children: e.isDeleted ? `Comment deleted.` : e.text,
        }),
      ],
    }),
  });
}
function ei({ thread: e, selected: t, onSelect: n, onHover: r, timestampNow: i }) {
  let o = (0, ni.useRef)(null);
  return (
    (0, ni.useEffect)(() => {
      t && o.current?.scrollIntoView?.({ behavior: `smooth`, block: `nearest` });
    }, [t]),
    (0, q.jsx)(`button`, {
      ref: o,
      type: `button`,
      "aria-pressed": t,
      "aria-label": `Select comment thread for ${e.label}`,
      "data-selected": t ? `true` : void 0,
      "data-testid": `popcorn-presentation-comment-sidebar-thread-${e.threadId}`,
      className: a(
        `border-token-border-light w-full rounded-none border px-3 py-3 text-left transition-colors`,
        t ? `bg-token-bg-secondary` : `bg-token-bg-primary hover:bg-token-bg-secondary`,
      ),
      onClick: n,
      onMouseEnter: () => r?.(e.threadId),
      onMouseLeave: () => r?.(null),
      onFocus: () => r?.(e.threadId),
      onBlur: () => r?.(null),
      children: e.comments.map((e, t) =>
        (0, q.jsx)($r, { comment: e, isReply: t > 0, timestampNow: i }, e.id),
      ),
    })
  );
}
function ti({
  controller: e,
  selectedThreadId: t,
  onSelectThread: n,
  onHoverThread: r,
  onClose: i,
}) {
  let a = Ur(e),
    o = et(),
    s = a.slideIds[a.selectedSlideIdx],
    c = (a.commentThreads ?? []).filter((e) => e.slideId === s);
  return (0, q.jsxs)(`aside`, {
    "aria-label": `Slide comments`,
    "data-testid": `popcorn-presentation-comments-sidebar`,
    className: `border-token-border-light bg-token-bg-primary flex h-full min-h-0 min-w-0 shrink-0 flex-col border-l`,
    style: { width: `380px`, maxWidth: `42%` },
    children: [
      (0, q.jsxs)(`div`, {
        className: `border-token-border-light flex h-10 shrink-0 items-center justify-between border-b ps-5 pe-2`,
        children: [
          (0, q.jsx)(`h2`, {
            className: `text-token-text-primary min-w-0 truncate px-0.5 text-lg`,
            children: `Comments`,
          }),
          (0, q.jsx)(`button`, {
            type: `button`,
            "aria-label": `Close comments`,
            className: `text-token-description-foreground hover:bg-token-bg-secondary flex size-9 items-center justify-center rounded-lg transition-colors`,
            onClick: i,
            children: (0, q.jsx)(ce, { className: `size-4` }),
          }),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: `min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4`,
        children:
          c.length > 0
            ? (0, q.jsx)(`div`, {
                className: `flex flex-col gap-3`,
                "data-testid": `popcorn-presentation-comments-slide-${s}`,
                children: c.map((e) =>
                  (0, q.jsx)(
                    ei,
                    {
                      thread: e,
                      selected: e.threadId === t,
                      onSelect: () => n(e.threadId),
                      onHover: r,
                      timestampNow: o,
                    },
                    e.threadId,
                  ),
                ),
              })
            : (0, q.jsx)(`p`, {
                className: `text-token-description-foreground px-1 py-3 text-sm`,
                children: `No comments on this slide.`,
              }),
      }),
    ],
  });
}
var ni,
  q,
  ri = e(() => {
    (y(), (ni = t(n())), j(), _t(), Qr(), (q = f()));
  });
function ii({ title: e, sidebarOpen: t, onToggleSidebar: n }) {
  return (0, li.jsxs)(`div`, {
    className: `flex h-7 max-w-full items-center rounded-lg border border-default bg-primary-soft-alpha px-1.5`,
    children: [
      (0, li.jsx)(`span`, { className: `max-w-52 min-w-0 truncate px-1`, children: e }),
      (0, li.jsx)(`span`, { className: `mx-1.5 h-4 w-px shrink-0 bg-token-border-light` }),
      (0, li.jsx)(V, {
        expanded: t,
        label: t ? `Hide slide sidebar` : `Show slide sidebar`,
        onClick: n,
        showActiveBackground: !1,
        testId: `popcorn-presentation-sidebar-toggle`,
        children: (0, li.jsx)(si, { className: `size-4` }),
      }),
    ],
  });
}
function ai({ annotationControl: e, formatControl: t, onAddSlide: n, trailingContent: r }) {
  return (0, li.jsxs)(nt, {
    ariaLabel: `Presentation tools`,
    trailingContent: r,
    children: [(0, li.jsx)(oi, { onAddSlide: n }), t, e],
  });
}
function oi({ onAddSlide: e }) {
  return (0, li.jsx)(ct, {
    ariaLabel: `Insert`,
    primaryItems: ui,
    secondaryLabel: `New slide`,
    secondaryItems: [
      { id: `blank-slide`, label: `Blank slide`, icon: ci, onSelect: e },
      { id: `template`, label: `From template`, icon: It, disabled: !0 },
      { id: `ask-chat`, label: `Ask chat`, icon: Xe, disabled: !0 },
    ],
    testId: `popcorn-presentation-insert-button`,
  });
}
function si({ className: e, ...t }) {
  return (0, li.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: [
      (0, li.jsx)(`rect`, {
        x: `2.75`,
        y: `3.25`,
        width: `14.5`,
        height: `13.5`,
        rx: `2.25`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
      }),
      (0, li.jsx)(`path`, { d: `M7 3.75V16.25`, stroke: `currentColor`, strokeWidth: `1.5` }),
    ],
  });
}
function ci({ className: e, ...t }) {
  return (0, li.jsxs)(`svg`, {
    viewBox: `0 0 20 20`,
    fill: `none`,
    className: e,
    ...t,
    children: [
      (0, li.jsx)(`rect`, {
        x: `2.75`,
        y: `5.25`,
        width: `14.5`,
        height: `10.5`,
        rx: `2.25`,
        stroke: `currentColor`,
        strokeWidth: `1.5`,
      }),
      (0, li.jsx)(`path`, { d: `M5 2.75H15`, stroke: `currentColor`, strokeWidth: `1.5` }),
    ],
  });
}
var li,
  ui,
  di = e(() => {
    (j(),
      at(),
      ut(),
      (li = f()),
      (ui = [
        { id: `text`, label: `Text`, icon: ot, disabled: !0 },
        { id: `image`, label: `Image`, icon: Rt, disabled: !0 },
        { id: `chart`, label: `Chart`, icon: U, disabled: !0 },
        { id: `table`, label: `Table`, icon: we, disabled: !0 },
        { id: `shape`, label: `Shape`, icon: R, disabled: !0 },
      ]));
  });
function fi({ notesHeight: e, minHeight: t = 80, setNotesHeight: n }) {
  let r = (0, pi.useRef)(null),
    i = (0, pi.useRef)(e),
    a = (0, pi.useRef)(0),
    o = (t) => {
      ((r.current = t.pointerId), (i.current = e), (a.current = t.clientY));
      try {
        t.currentTarget.setPointerCapture(t.pointerId);
      } catch {}
    },
    s = (e) => {
      if (r.current !== e.pointerId) return;
      let o = e.clientY - a.current;
      if (i.current === 0) {
        -o >= gi && n(Math.max(t, gi));
        return;
      }
      let s = Math.max(0, i.current - o);
      if (s < hi) {
        n(0);
        return;
      }
      n(Math.max(t, s));
    },
    c = (e) => {
      if (r.current === e.pointerId) {
        if (e.currentTarget.hasPointerCapture?.(e.pointerId))
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {}
        r.current = null;
      }
    };
  return (0, mi.jsx)(`div`, {
    onPointerDown: o,
    onPointerMove: s,
    onPointerUp: c,
    onPointerCancel: c,
    className: `mx-auto h-2 w-9 cursor-row-resize select-none`,
    "data-testid": `popcorn-presentation-notes-resize`,
    children: (0, mi.jsx)(`div`, { className: `h-[3px] w-full rounded bg-gray-300` }),
  });
}
var pi,
  mi,
  hi,
  gi,
  _i = e(() => {
    ((pi = t(n())), (mi = f()), (hi = 40), (gi = 20));
  });
function vi({
  threads: e,
  slideRect: t,
  isEditing: n,
  nativeCommentStyle: r = !1,
  renderCommentThread: i,
  annotationMarkerPositions: o = [],
  collisionBoundaryElement: s = null,
  commentsSidebarOpen: c = !1,
  selectedCommentThreadId: l = null,
  onSelectCommentThread: u,
  onClearCommentThread: d,
  onReply: f,
  onResolve: p,
  onReopen: m,
  onDeleteThread: h,
  onToggleReaction: g,
  onEditComment: _,
  onDeleteComment: v,
}) {
  let [ee, te] = (0, yi.useState)(null);
  (0, yi.useEffect)(() => {
    ee && (e.some((e) => e.threadId === ee) || te(null));
  }, [ee, e]);
  let y = (0, yi.useMemo)(() => {
    if (!t || (!r && !n && c)) return [];
    let i = new Map();
    return e
      .filter((e) => (r ? n || e.status !== `resolved` : n || e.threadId === l))
      .map((e) => {
        if (r && !n && e.target.kind !== `slide` && e.target.frame != null) {
          let n = e.target.frame,
            r = zt({
              left: t.left + n.left * t.scale,
              top: t.top + n.top * t.scale,
              width: n.width * t.scale,
              height: n.height * t.scale,
            }),
            a = i.get(e.target.elementId) ?? 0;
          return (
            i.set(e.target.elementId, a + 1), { thread: e, left: r.left, top: r.top + a * xi }
          );
        }
        return {
          thread: e,
          left: t.left + e.markerPoint.x * t.scale,
          top: t.top + e.markerPoint.y * t.scale,
        };
      });
  }, [c, n, r, l, t, e]);
  if (i != null) {
    let e = [...o];
    return (0, bi.jsx)(bi.Fragment, {
      children: y.map(({ thread: t, left: n, top: r }) => {
        let a = Lt({ left: n, top: r }, e);
        return (
          e.push(a),
          (0, bi.jsx)(
            yi.Fragment,
            {
              children: i({ threadId: t.threadId, markerPosition: a, collisionBoundaryElement: s }),
            },
            t.threadId,
          )
        );
      }),
    });
  }
  return (0, bi.jsx)(bi.Fragment, {
    children: y.map(({ thread: e, left: t, top: i }) => {
      let o = n ? ee === e.threadId : l === e.threadId,
        s = `Slide ${e.slideIndex + 1}`,
        c = e.target.kind === `slide` ? e.slideLabel : (e.target.elementName ?? e.slideLabel),
        y = (0, bi.jsx)(
          cn,
          {
            open: o,
            onOpenChange: (t) => {
              (te(t ? e.threadId : null), t ? u?.(e.threadId) : l === e.threadId && d?.());
            },
            trigger: n
              ? (0, bi.jsx)(`button`, {
                  type: `button`,
                  "data-testid": `popcorn-presentation-thread-trigger-${e.threadId}`,
                  "aria-label": `Open comment thread for ${e.label}`,
                  className: a(
                    `pointer-events-auto absolute z-[24] flex items-center justify-center border transition-colors`,
                    o
                      ? `size-8 rounded-full border-[var(--color-token-text-link-foreground,#339cff)] bg-token-bg-primary text-token-text-link-foreground shadow-sm`
                      : `size-8 rounded-full border-token-border-light bg-token-bg-primary text-token-text-primary shadow-sm hover:bg-token-bg-secondary`,
                  ),
                  style: { left: t, top: i, transform: `translate(-50%, -50%)` },
                  onMouseDown: (e) => {
                    e.stopPropagation();
                  },
                  onClick: (e) => {
                    e.stopPropagation();
                  },
                  children: (0, bi.jsx)(Ee, { className: `size-4` }),
                })
              : (0, bi.jsx)(`button`, {
                  type: `button`,
                  "aria-hidden": `true`,
                  tabIndex: -1,
                  "data-testid": `popcorn-presentation-thread-anchor-${e.threadId}`,
                  className: `pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0`,
                  style: { left: t, top: i },
                }),
            content: (0, bi.jsx)(ft, {
              targetPrimaryLabel: s,
              targetSecondaryLabel: c,
              showHeader: n,
              relativeTimestamps: !n,
              status: e.status,
              resolvedByName: e.resolvedBy?.displayName ?? null,
              resolvedAt: e.resolvedAt,
              comments: e.comments,
              isEditing: n,
              viewerAuthorId: e.viewerAuthorId,
              onReply: f
                ? (t) => {
                    f(e.threadId, t);
                  }
                : void 0,
              onResolve: p
                ? () => {
                    p(e.threadId);
                  }
                : void 0,
              onReopen: m
                ? () => {
                    m(e.threadId);
                  }
                : void 0,
              onDeleteThread: h
                ? () => {
                    h(e.threadId);
                  }
                : void 0,
              onToggleReaction: g
                ? (t, n) => {
                    g(e.threadId, t, n);
                  }
                : void 0,
              onEditComment: _
                ? (t, n) => {
                    _(e.threadId, t, n);
                  }
                : void 0,
              onDeleteComment: v
                ? (t) => {
                    v(e.threadId, t);
                  }
                : void 0,
            }),
          },
          e.threadId,
        );
      return r
        ? (0, bi.jsx)(
            Ze,
            {
              markerNumber: null,
              icon: (0, bi.jsx)(he, { className: `size-4` }),
              nativePresentationStyle: !0,
              position: { left: t, top: i },
              selected: l === e.threadId,
              testId: `popcorn-presentation-thread-trigger-${e.threadId}`,
              title: `Open comment thread for ${e.label}`,
              onClick: () => u?.(e.threadId),
            },
            e.threadId,
          )
        : y;
    }),
  });
}
var yi,
  bi,
  xi,
  Si = e(() => {
    (y(), (yi = t(n())), j(), z(), _t(), (bi = f()), (xi = 16));
  });
function Ci(e, t, n = 1) {
  let r = null,
    { hitRadius: i } = Ue(n);
  for (let n = 0; n < e.length; n += 1) {
    let a = e[n];
    if (!a) continue;
    let o = a.frame;
    if (!o || (!Ai(o, t) && !Mi(a, t, i))) continue;
    let s = a.zIndex;
    (!r || s > r.z || (s === r.z && n > r.order)) && (r = { id: a.id, z: s, order: n });
  }
  return r?.id ?? null;
}
function wi(e, t) {
  let n = null;
  for (let r = 0; r < e.length; r += 1) {
    let i = e[r];
    if (!i || !Ai(i.frame, t)) continue;
    let a = i.zIndex;
    (!n || a > n.z || (a === n.z && r > n.order)) && (n = { target: i, z: a, order: r });
  }
  return n?.target ?? null;
}
function Ti(e, t, n = 1) {
  let r = null,
    { hitRadius: i } = Ue(n);
  for (let n = 0; n < e.length; n += 1) {
    let a = e[n],
      o = a?.connector;
    if (!(!a || !o))
      for (let e of [`from`, `to`]) {
        let s = o[e];
        if (Math.hypot(t.x - s.x, t.y - s.y) > i) continue;
        let c = a.zIndex;
        (!r || c > r.z || (c === r.z && n > r.order)) &&
          (r = { hit: { elementId: a.id, endpoint: e }, z: c, order: n });
      }
  }
  return r?.hit ?? null;
}
function Ei(e, t) {
  let n = Math.min(e.x, t.x),
    r = Math.min(e.y, t.y),
    i = Math.max(e.x, t.x),
    a = Math.max(e.y, t.y);
  return { left: n, top: r, width: i - n, height: a - r };
}
function Di(e, t) {
  return e
    .filter((e) => ji(t, e.frame))
    .sort((t, n) => (t.zIndex === n.zIndex ? e.indexOf(t) - e.indexOf(n) : t.zIndex - n.zIndex))
    .map((e) => e.id);
}
function Oi(e, t, n = 1) {
  return e ? Fe(e, t, n) : null;
}
function ki(e, t, n = 1) {
  return e ? ze(e, t, n) : !1;
}
function Ai(e, t) {
  return Ve(e, t);
}
function ji(e, t) {
  return He(e, t);
}
function Mi(e, t, n) {
  let r = e.connector;
  return r ? Ni(t, r.from, r.to) <= n : !1;
}
function Ni(e, t, n) {
  let r = n.x - t.x,
    i = n.y - t.y,
    a = e.x - t.x,
    o = e.y - t.y,
    s = r * r + i * i;
  if (s <= 0) return Math.hypot(a, o);
  let c = Math.max(0, Math.min(1, (a * r + o * i) / s)),
    l = t.x + c * r,
    u = t.y + c * i;
  return Math.hypot(e.x - l, e.y - u);
}
var Pi = e(() => {
  (Be(), L());
});
function Fi({
  controller: e,
  runtime: t,
  snapshot: n,
  stageOverlays: r = [],
  panelControls: i = Gi,
  editToolbarRequested: o,
  onEditToolbarRequestedChange: s,
  isEditing: c = !0,
  onInteractionAttempt: l,
  theme: u = `web`,
  viewportInsets: d = Yi,
  annotationMode: f = !1,
  onAnnotationModeChange: p,
  onAnnotationDictationBusyChange: m,
  drawingMode: h = !1,
  onDrawingModeChange: g,
  drawingCommitToken: _ = 0,
  reviewTools: v,
  onHyperlinkClick: ee,
  annotationsEnabled: te = !0,
  drawingAnnotationsEnabled: y = !0,
  commentThreadsEnabled: b = !0,
  commentsSidebarOpen: ne = !1,
  selectedCommentThreadId: re = null,
  hoveredCommentThreadId: ie = null,
  onSelectCommentThread: ae,
  onClearCommentThread: oe,
  annotationPortalContainerElement: se = null,
}) {
  let ce = Ur(e),
    x = n ?? ce,
    le = (0, J.useRef)(null),
    S = (0, J.useRef)(null),
    de = (0, J.useRef)(null),
    fe = (0, J.useRef)(null),
    pe = (0, J.useRef)(null),
    C = (0, J.useRef)(null),
    w = (0, J.useRef)(null),
    T = (0, J.useRef)(null),
    E = (0, J.useRef)(null),
    D = (0, J.useRef)(null),
    O = (0, J.useRef)(null),
    me = (0, J.useRef)(!1),
    he = (0, J.useRef)(null),
    ge = (0, J.useRef)(null),
    [_e, ve] = (0, J.useState)(0),
    [ye, be] = (0, J.useState)(!1),
    xe = o ?? ye,
    k = s ?? be,
    Se = (0, J.useRef)(null),
    Ce = r.length > 0,
    A = te && v?.annotation != null && v.annotation.enabled !== !1,
    j = (() => {
      let e = v && v.annotation;
      if (!(!b || e == null || e.createCommentThreads !== !0)) return e.renderCommentThread;
    })(),
    M = y && v?.drawing != null && v.drawing.enabled !== !1,
    [N, P] = (0, J.useState)(null),
    [we, Te] = (0, J.useState)(null),
    Ee = (0, J.useRef)(N);
  Ee.current = N;
  let Oe = (0, J.useRef)(!1),
    ke = (0, J.useRef)(null),
    F = (0, J.useRef)(!1),
    Ae = (0, J.useRef)(!1),
    I = (0, J.useRef)(null),
    [je, Me] = (0, J.useState)(!1),
    Ne = (0, J.useRef)(null),
    [L, Pe] = (0, J.useState)(null),
    [Fe, Re] = (0, J.useState)(null),
    ze = (0, J.useRef)(null);
  ze.current = Fe;
  let [Be, Ve] = (0, J.useState)([]),
    He = (0, J.useRef)([]);
  He.current = Be;
  let Ue = (0, J.useRef)(null),
    We = (0, J.useRef)(null),
    Ge = (0, J.useRef)(_),
    Ke = (0, J.useCallback)((e) => {
      (I.current === e && (I.current = null),
        Te((t) => (t === e ? null : t)),
        P((t) => (t?.mode === `edit` && t.annotationId === e ? null : t)));
    }, []),
    qe = (0, J.useCallback)(() => {
      ((I.current = null), Te(null), P(null));
    }, []),
    Je = (0, J.useCallback)(
      (e) => {
        (Ke(e), v?.annotation?.onDismiss?.(e));
      },
      [Ke, v?.annotation],
    ),
    R = (0, J.useCallback)((e) => {
      Re((t) => {
        let n = typeof e == `function` ? e(t) : e;
        return ((ze.current = n), n);
      });
    }, []),
    z = (0, J.useSyncExternalStore)(
      (e) => t.subscribeToCameraChanges(e),
      () => t.getCamera(),
      () => t.getCamera(),
    ),
    B = (0, J.useSyncExternalStore)(
      (e) => t.subscribeToLayoutChanges(e),
      () => t.getLayoutSnapshot(),
      () => t.getLayoutSnapshot(),
    ),
    Ye = B.viewportInsets,
    Xe = Vi(B.width, B.height, z, x.selectedSlideFrame, Ye) ?? x.slideRect,
    V = Xe === x.slideRect ? x : { ...x, slideRect: Xe },
    H = x.slideIds[x.selectedSlideIdx] ?? `slide-${x.selectedSlideIdx}`,
    et = x.slideLabels[x.selectedSlideIdx] ?? `Slide ${x.selectedSlideIdx + 1}`,
    tt = (0, J.useMemo)(
      () => (x.commentThreads ?? []).filter((e) => e.slideId === H),
      [H, x.commentThreads],
    ),
    nt = ie ?? re,
    it = (0, J.useMemo)(() => (nt ? (tt.find((e) => e.threadId === nt) ?? null) : null), [tt, nt]),
    at = (0, J.useMemo)(() => {
      let e = V.slideRect;
      if (!e || !it) return null;
      let t = it.target;
      if (t.kind === `slide`) return null;
      let n = t.frame ?? x.selectedSlideElementTargets.find((e) => e.id === t.elementId)?.frame;
      return n
        ? {
            left: e.left + n.left * e.scale,
            top: e.top + n.top * e.scale,
            width: n.width * e.scale,
            height: n.height * e.scale,
          }
        : null;
    }, [it, x.selectedSlideElementTargets, V.slideRect]),
    ot = (0, J.useMemo)(() => Hi(V), [V]),
    st =
      Ce &&
      x.selectedElementIds.length === 1 &&
      x.inspector.selectedElement?.id === x.primarySelectedElementId &&
      !x.textEditState?.activeBlockId &&
      ot != null,
    ct = xe && st,
    U = (0, J.useMemo)(() => _n({ snapshot: x }), [x]),
    lt = U ? JSON.stringify([U.slideId, U.elementIds, U.primaryElementId]) : null;
  (0, J.useEffect)(() => {
    lt ?? (Se.current = null);
  }, [lt]);
  let ut = (0, J.useCallback)(() => {
      let e = v?.annotation?.onAskForEditShown;
      lt == null || Se.current === lt || e == null || ((Se.current = lt), e());
    }, [lt, v?.annotation?.onAskForEditShown]),
    dt = (0, J.useMemo)(() => {
      let e = V.slideRect;
      return e ? { left: e.left, top: e.top, width: e.width, height: e.height } : null;
    }, [V.slideRect]),
    ft = (0, J.useMemo)(
      () => (N?.target ? vn(N.target, V.slideRect) : null),
      [N?.target, V.slideRect],
    ),
    gt = (0, J.useMemo)(
      () => (N?.target ? gn(N.target, V.slideRect) : null),
      [N?.target, V.slideRect],
    ),
    _t = ft ?? gt,
    vt = (0, J.useMemo)(() => (!A || !L ? null : Ei(L.start, L.current)), [A, L]),
    yt = (0, J.useMemo)(() => {
      if (!vt || !L) return null;
      let e = pn({ snapshot: x, frame: vt, anchorPoint: L.current });
      return e ? vn(e, V.slideRect) : null;
    }, [L, vt, x, V.slideRect]),
    bt = (0, J.useMemo)(
      () =>
        vt
          ? Di(x.selectedSlideElementTargets, vt).flatMap((e) => {
              let t = x.selectedSlideElementTargets.find((t) => t.id === e);
              return t
                ? [
                    {
                      elementId: e,
                      frame: {
                        left: t.frame.left,
                        top: t.frame.top,
                        width: t.frame.width,
                        height: t.frame.height,
                        rotation: t.frame.rotation,
                      },
                    },
                  ]
                : [];
            })
          : [],
      [vt, x.selectedSlideElementTargets],
    ),
    xt = (0, J.useMemo)(
      () => (N?.target.type === `presentation-region` ? N.target.containedElements : []),
      [N],
    ),
    St = (0, J.useMemo)(
      () =>
        je && x.hoveredElementId
          ? (x.selectedSlideElementTargets.find((e) => e.id === x.hoveredElementId) ?? null)
          : null,
      [je, x.hoveredElementId, x.selectedSlideElementTargets],
    ),
    wt = (0, J.useMemo)(
      () =>
        yt ||
        ft ||
        (!A || !f
          ? null
          : St
            ? vn(
                {
                  type: `presentation-element-selection`,
                  slideId: H,
                  slideIndex: x.selectedSlideIdx,
                  slideLabel: et,
                  elementIds: [St.id],
                  primaryElementId: St.id,
                  frame: St.frame,
                },
                V.slideRect,
              )
            : null),
      [ft, A, St, f, yt, H, et, x.selectedSlideIdx, V.slideRect],
    ),
    Et = (0, J.useCallback)(
      (e) =>
        Ae.current
          ? ((F.current = !1), Dt(ke.current), !1)
          : ((F.current = !1),
            v?.annotation?.defaultCreateSubmitMode === `direct`
              ? (Te(null), P({ mode: `create`, intent: `ask`, target: e.target, body: `` }), !0)
              : (Te(e.annotationId),
                P({ mode: `edit`, annotationId: e.annotationId, target: e.target, body: e.body }),
                !0)),
      [v?.annotation?.defaultCreateSubmitMode],
    ),
    Ot = (0, J.useCallback)(
      (t) => {
        let n = I.current != null;
        if (((I.current = null), t.target.slideId === H && !n)) return Et(t);
        if (Ae.current) return ((F.current = !1), Dt(ke.current), !1);
        let r = x.slideIds.indexOf(t.target.slideId);
        return r < 0 ? !1 : ((I.current = t.annotationId), e.setSelectedSlideIdx(r), !0);
      },
      [e, H, Et, x.slideIds],
    ),
    {
      annotations: kt,
      addPendingAnnotation: At,
      updatePendingAnnotation: jt,
      dismissAnnotation: Mt,
    } = Yt(v?.annotation?.handleRef, {
      artifactKey: v?.annotation?.artifactKey,
      artifactKind: `presentation`,
      initialAnnotations:
        v?.annotation?.initialAnnotations ??
        v?.annotation?.initialPendingAnnotations?.filter(
          (e) =>
            e.target.type === `presentation-element-selection` ||
            e.target.type === `presentation-region`,
        ),
      onFocusAnnotation: Ot,
      onDismissAnnotation: Je,
      onDismissAllAnnotations: qe,
    }),
    Pt = (0, J.useMemo)(() => kt.filter((e) => e.target.slideId === H), [H, kt]),
    It = (0, J.useMemo)(() => ln(Pt), [Pt]),
    Lt = N?.mode === `edit` ? (It.get(N.annotationId) ?? 0) : 0,
    Rt = (0, J.useMemo)(
      () => (N?.mode !== `edit` || !ft ? gt : { ...zt(ft, `top-right`, Lt), width: 0, height: 0 }),
      [gt, ft, N?.mode, Lt],
    ),
    Bt = (0, J.useMemo)(
      () =>
        Pt.map((e) => ({
          annotation: e,
          stackIndex: It.get(e.annotationId) ?? 0,
          bounds: vn(e.target, V.slideRect),
        })),
      [It, Pt, V.slideRect],
    ),
    Vt = (() => {
      if (j != null) return Bt.map(({ bounds: e, stackIndex: t }) => zt(e, `top-right`, t));
    })(),
    Ht = (0, J.useMemo)(
      () =>
        we == null || N?.mode === `edit`
          ? null
          : (Bt.find(({ annotation: e }) => e.annotationId === we) ?? null),
      [N?.mode, we, Bt],
    ),
    Ut = (0, J.useMemo)(() => (yt ? bt : xt), [xt, bt, yt]),
    { drawings: Wt, addPendingDrawing: Kt } = Qt(v?.drawing?.handleRef),
    Jt = (0, J.useMemo)(() => Wt.filter((e) => e.target.slideId === H), [H, Wt]),
    W = (0, J.useMemo)(
      () =>
        new De(
          {
            onPointerDown: (t, n) => {
              e.textPointerDown(t, n);
            },
            onPointerMove: (t) => {
              e.textPointerMove(t);
            },
            onPointerUp: () => {
              e.textPointerUp();
            },
            onSelectWordAtPoint: (t) => {
              e.textSelectWordAtPoint(t);
            },
            onSelectParagraphAtPoint: (t) => {
              e.textSelectParagraphAtPoint(t);
            },
            onActivateBlockEnd: (t) => {
              e.textActivateBlockEnd(t);
            },
            onClear: () => {
              e.textClear();
            },
            onKeyDown: (t) => {
              e.textHandleKeyDown(t);
            },
            onBeforeInput: (t) => {
              e.textHandleBeforeInput(t);
            },
            onInput: (t) => {
              e.textHandleInput(t);
            },
            onCompositionEnd: (t) => {
              e.textHandleCompositionEnd(t);
            },
          },
          {
            onChange: () => {
              ve((e) => e + 1);
            },
            onUnhandledKeyDown: (t) => {
              if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `z`) {
                (t.shiftKey ? e.redo() : e.undo(), t.preventDefault());
                return;
              }
              (t.metaKey || t.ctrlKey) &&
                t.key.toLowerCase() === `y` &&
                (e.redo(), t.preventDefault());
            },
          },
        ),
      [e],
    );
  ((0, J.useEffect)(
    () => (
      t.setOnCameraSettled(({ zoom: t }) => {
        e.setZoom(t);
      }),
      () => {
        t.setOnCameraSettled(null);
      }
    ),
    [e, t],
  ),
    (0, J.useEffect)(() => {
      t.attachHost(S.current);
      let n =
        S.current && fe.current
          ? e.attachViewport({ host: S.current, canvas: fe.current, overlayCanvas: pe.current })
          : void 0;
      return (
        W?.attachContainer(S.current),
        t.start(),
        () => {
          (n?.(), t.dispose(), W?.dispose());
        }
      );
    }, [e, t, W]),
    (0, J.useEffect)(
      () => () => {
        (he.current != null && window.cancelAnimationFrame(he.current),
          e.clearLocalAwarenessCursor());
      },
      [e],
    ),
    (0, J.useEffect)(() => {
      t.setViewState({
        selectedSlideIdx: x.selectedSlideIdx,
        selectedSlideFrame: x.selectedSlideFrame,
        zoom: x.zoom,
        camera: e.getViewportCamera(),
      });
    }, [e, t, x.selectedSlideIdx, x.selectedSlideFrame, x.zoom]),
    rt(() => {
      (t.setViewportInsets(d),
        typeof e.setViewportInsets == `function` &&
          e.setViewportInsets(d, t.hasInitializedCamera() ? t.getCamera() : void 0));
    }, [e, t, d]),
    (0, J.useEffect)(() => {
      if (x.textEditState?.activeBlockId) {
        E.current = null;
        return;
      }
      (x.selectedElementIds.length !== 1 ||
        !x.primarySelectedElementId ||
        !x.textLayoutBlocks.some((e) => e.id === x.primarySelectedElementId)) &&
        (E.current = null);
    }, [x.primarySelectedElementId, x.selectedElementIds, x.textEditState, x.textLayoutBlocks]),
    (0, J.useEffect)(() => {
      x.selectedSlideFrame &&
        t.hasInitializedCamera() &&
        z === t.getCamera() &&
        e.setViewportCamera(z);
    }, [z, e, t, x.selectedSlideFrame]),
    (0, J.useEffect)(() => {
      let e = S.current;
      !x.selectedSlideFrame ||
        !e ||
        W.updateState({ state: c ? x.textEditState : null, blocks: x.textLayoutBlocks });
    }, [c, z, x.selectedSlideFrame, x.textEditState, x.textLayoutBlocks, W]),
    (0, J.useEffect)(() => {
      typeof e.setEditingEnabled == `function` && e.setEditingEnabled(c);
    }, [e, c]),
    (0, J.useEffect)(() => {
      let t = le.current;
      if (!t) return;
      let n = null,
        r = [],
        i = () => {
          n ??= window.requestAnimationFrame(() => {
            ((n = null), e.setStageBackgroundColor(Ii(t, u)));
          });
        };
      if ((i(), typeof MutationObserver < `u`)) {
        let e = (e) => {
          if (!e) return;
          let t = new MutationObserver(() => {
            i();
          });
          (t.observe(e, { attributes: !0, attributeFilter: [`class`, `data-theme`, `style`] }),
            r.push(t));
        };
        (e(t),
          e(t.closest(`[data-codex-window-type='electron']`)),
          e(document.documentElement),
          e(document.body));
      }
      return () => {
        (n != null && window.cancelAnimationFrame(n), r.forEach((e) => e.disconnect()));
      };
    }, [e, u]),
    (0, J.useEffect)(() => {
      c ||
        (W.clear(),
        (E.current = null),
        (T.current = null),
        (D.current = null),
        (O.current = null),
        (me.current = !1));
    }, [c, W]));
  let Xt = (0, J.useCallback)(() => {
      try {
        S.current?.focus({ preventScroll: !0 });
      } catch {}
    }, []),
    Zt = (0, J.useCallback)(() => {
      (We.current?.(), (We.current = null), R(null));
    }, [R]),
    $t = (0, J.useCallback)(() => {
      ((Ue.current = null), (He.current = []), Ve([]));
    }, []),
    en = (0, J.useCallback)(() => {
      ((I.current = null), (Ae.current = !1), m?.(!1), (F.current = !1), P(null), Pe(null), Xt());
    }, [Xt, m]),
    tn = (0, J.useCallback)(() => (Ae.current ? ((F.current = !1), Dt(ke.current), !0) : !1), []),
    rn = (0, J.useCallback)(
      (e) => {
        ((Ae.current = e), m?.(e), (F.current = !1));
      },
      [m],
    ),
    cn = (0, J.useCallback)(() => {
      tn() || en();
    }, [tn, en]),
    mn = (0, J.useCallback)(() => {
      if (tn()) return !1;
      let e = Ee.current;
      return e?.mode === `create` && e.body.trim().length > 0
        ? F.current
          ? (cn(), !0)
          : ((F.current = !0), Dt(ke.current), !1)
        : (cn(), !0);
    }, [tn, cn]),
    yn = (0, J.useCallback)(
      (e) => {
        let t = V.slideRect;
        return t ? { x: t.left + e.x * t.scale, y: t.top + e.y * t.scale } : { x: e.x, y: e.y };
      },
      [V.slideRect],
    ),
    bn = (0, J.useCallback)(
      (e) => {
        e == null ||
          e.points.length === 0 ||
          !M ||
          !h ||
          ((Ue.current = H), (He.current = [...He.current, e]), Ve(He.current));
      },
      [H, M, h],
    ),
    xn = (0, J.useCallback)(
      (e) => {
        if (e.length === 0) return;
        let t = on(e),
          n = on(e.map((e) => ({ ...e, points: e.points.map(yn) }))),
          r = S.current,
          i = fe.current;
        if (!t || !n || !r || !i || !V.slideRect) return;
        let a = { width: r.clientWidth, height: r.clientHeight },
          o = e.reduce((e, t) => Math.max(e, t.strokeWidth), 0),
          s = sn(
            pt({
              left: n.left - o / 2,
              top: n.top - o / 2,
              width: n.width + o,
              height: n.height + o,
            }),
            a,
          ),
          c = { left: t.left, top: t.top, width: t.width, height: t.height },
          l = Di(x.selectedSlideElementTargets, c).flatMap((e) => {
            let t = x.selectedSlideElementTargets.find((t) => t.id === e);
            return t
              ? [
                  {
                    elementId: e,
                    frame: {
                      left: t.frame.left,
                      top: t.frame.top,
                      width: t.frame.width,
                      height: t.frame.height,
                      rotation: t.frame.rotation,
                    },
                  },
                ]
              : [];
          }),
          u = hn({ snapshot: x, frame: c, viewportBounds: s, containedElements: l });
        if (!u) return;
        let d = qt(`drawing`),
          f = dn(u);
        Kt({ drawingId: d, artifactKind: `presentation`, label: f, target: u, strokes: e });
        let p = { x: s.left + s.width / 2, y: s.top + s.height / 2 };
        nn({
          cropRect: s,
          viewportSize: a,
          baseCanvas: i,
          overlayCanvases: [pe.current, C.current],
          strokes: e,
          projectPoint: yn,
        })
          .then((t) => {
            let n = { ...t, commentId: d },
              r = {
                drawingId: d,
                artifactKind: `presentation`,
                label: f,
                target: u,
                strokes: e,
                screenshot: n,
                browserCompatible: Tt({
                  drawingId: d,
                  screenshot: n,
                  markerViewportPoint: p,
                  viewportSize: a,
                }),
              };
            return v?.drawing?.onSubmit?.(r);
          })
          .catch((e) => {
            console.error(`Failed to capture presentation drawing screenshot`, e);
          });
      },
      [Kt, yn, v?.drawing, x, V.slideRect],
    ),
    Sn = async (t = `saved`, n = `button`, r, i, a = !1) => {
      let o = i ?? Ee.current;
      if (!o?.target) return;
      let s = (r ?? o.body).trim();
      if (s.length === 0) return;
      if (o.mode === `edit`) {
        (jt(o.annotationId, { body: s }),
          v?.annotation?.onUpdate?.({
            annotationId: o.annotationId,
            artifactKind: `presentation`,
            label: fn(o.target),
            body: s,
            target: o.target,
          }),
          en());
        return;
      }
      let c = {
        annotationId: qt(`annotation`),
        artifactKind: `presentation`,
        label: fn(o.target),
        body: s,
        target: o.target,
      };
      if (o.intent === `comment`) {
        let n = v?.annotation?.commentAuthor;
        if (!b || !v?.annotation?.createCommentThreads || n == null) return;
        let r = o.target,
          i =
            r.type === `presentation-element-selection`
              ? (r.primaryElementId ?? r.elementIds[0])
              : void 0;
        if ((r.type === `presentation-element-selection` && i == null) || Oe.current) return;
        Oe.current = !0;
        let l = i == null ? { author: n, position: r.anchorPoint } : { author: n, elementId: i },
          u = a ? `@ChatGPT ${s}` : s,
          d = await e.addCommentThread(r.slideId, u, l).catch(() => null);
        if (((Oe.current = !1), d == null)) return;
        let f = a ? t : `direct`;
        (en(),
          v.annotation?.onCommentSubmitted?.({ ...c, annotationId: d, assignedToChatGpt: a }, f));
        return;
      }
      (At(c),
        t === `direct`
          ? (v?.annotation?.onDirectSubmit ?? v?.annotation?.onSubmit)?.(c)
          : v?.annotation?.onSubmit?.(c),
        v?.annotation?.onSubmitted?.(c, t, n, { annotationMode: f }),
        en());
    },
    Cn = (e, t, n) => {
      if (!U) return;
      let r = v?.annotation?.defaultCreateSubmitMode ?? `direct`;
      Sn(n ? (r === `direct` ? `saved` : `direct`) : r, t, e, {
        mode: `create`,
        intent: `ask`,
        target: U,
        body: e,
      });
    },
    wn = () => {
      tn() ||
        (N?.mode === `edit` &&
          (Mt(N.annotationId), Te((e) => (e === N.annotationId ? null : e)), en()));
    },
    Tn = (e) => {
      F.current = !1;
      let t = Ee.current;
      if (!t) return;
      let n = { ...t, body: e };
      ((Ee.current = n), P(n));
    };
  ((0, J.useEffect)(() => {
    (A || (N?.mode !== `edit` && P(null)), (!A || !f) && (Pe(null), (Ne.current = null)));
  }, [A, N?.mode, f]),
    (0, J.useEffect)(() => {
      if (M && h) {
        (P(null), Pe(null), (Ne.current = null), Me(!1), e.setHoveredElementId(null));
        return;
      }
      let t = _ !== Ge.current;
      (Zt(), He.current.length > 0 && !t && $t());
    }, [Zt, $t, e, _, M, h]),
    (0, J.useEffect)(() => {
      if (_ === Ge.current) return;
      Ge.current = _;
      let e = He.current;
      if (e.length === 0) {
        $t();
        return;
      }
      (xn(e), $t());
    }, [$t, _, xn]),
    (0, J.useEffect)(() => {
      if (!A || !f) {
        (Me(!1), e.setHoveredElementId(null));
        return;
      }
      (Me(!1), e.setHoveredElementId(null));
    }, [A, f, e]),
    (0, J.useEffect)(() => {
      N && N.target.slideId !== H && (Te(null), Pe(null), (Ne.current = null), P(null));
    }, [N, H]),
    (0, J.useEffect)(() => {
      let e = I.current;
      if (e == null) return;
      let t = kt.find((t) => t.annotationId === e);
      !A || t == null || !x.slideIds.includes(t.target.slideId)
        ? (I.current = null)
        : t.target.slideId === H && ((I.current = null), Et(t));
    }, [A, H, Et, kt, x]),
    (0, J.useEffect)(
      () => () => {
        I.current = null;
      },
      [e, v?.annotation?.artifactKey],
    ),
    (0, J.useEffect)(
      () => () => {
        Zt();
      },
      [Zt],
    ),
    (0, J.useEffect)(() => {
      Ue.current == null || Ue.current === H || $t();
    }, [$t, H]),
    (0, J.useEffect)(() => {
      let e = S.current,
        t = C.current,
        n = M && h ? `crosshair` : A && f && !N ? an : ``;
      return (
        e && (e.style.cursor = n),
        t && (t.style.cursor = n),
        () => {
          (e && e.style.cursor === n && (e.style.cursor = ``),
            t && t.style.cursor === n && (t.style.cursor = ``));
        }
      );
    }, [N, A, f, M, h]),
    (0, J.useEffect)(() => {
      if (!N) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node &&
          (ke.current?.contains(t) ||
            (t instanceof HTMLElement && t.closest(`[data-popcorn-annotation-marker='true']`)) ||
            S.current?.contains(t) ||
            mn());
      };
      return (
        document.addEventListener(`mousedown`, e, !0),
        () => {
          document.removeEventListener(`mousedown`, e, !0);
        }
      );
    }, [N, mn]),
    (0, J.useEffect)(() => {
      let e = C.current;
      if (!e) return;
      let t = B.width,
        n = B.height;
      if (t <= 0 || n <= 0) return;
      let r = window.devicePixelRatio || 1,
        i = Math.max(1, Math.round(t * r)),
        a = Math.max(1, Math.round(n * r));
      (e.width !== i || e.height !== a) && ((e.width = i), (e.height = a));
      let o = `${t}px`,
        s = `${n}px`;
      (e.style.width !== o && (e.style.width = o), e.style.height !== s && (e.style.height = s));
      let c = e.getContext(`2d`);
      c &&
        (c.setTransform(r, 0, 0, r, 0, 0),
        c.clearRect(0, 0, t, n),
        V.slideRect &&
          x.selectedSlideFrame &&
          (c.save(),
          c.translate(V.slideRect.left, V.slideRect.top),
          c.scale(V.slideRect.scale, V.slideRect.scale),
          W?.drawOverlay(c),
          c.restore()));
    }, [
      B.height,
      B.width,
      _e,
      V.slideRect,
      x.selectedSlideFrame,
      x.textEditState,
      x.textLayoutBlocks,
      W,
    ]));
  let En = (t) => {
      ((ge.current = t ? { x: Math.round(t.x), y: Math.round(t.y) } : null),
        (he.current ??= window.requestAnimationFrame(() => {
          he.current = null;
          let t = ge.current;
          if (t) {
            e.setLocalAwarenessCursor(t);
            return;
          }
          e.clearLocalAwarenessCursor();
        })));
    },
    Dn = (t) => {
      (k(!1), S.current?.focus());
      let n = zi(t, S.current, z, x, Ye);
      if ((En(n), M && h)) {
        if (!n) return;
        (Ui(t, w),
          (We.current = () => {
            let e = C.current,
              t = w.current;
            if (e && t != null && e.hasPointerCapture?.(t))
              try {
                e.releasePointerCapture(t);
              } catch {}
            w.current === t && (w.current = null);
          }),
          R({ color: Ct, strokeWidth: 3, points: [n] }),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (A && !f && Ee.current && !mn()) {
        (t.preventDefault(), t.stopPropagation());
        return;
      }
      if (A && f) {
        if (tn()) {
          (t.preventDefault(), t.stopPropagation());
          return;
        }
        let r = Ee.current,
          i = r?.mode === `create` ? (r.body.trim().length === 0 ? `close` : `keep`) : `replace`;
        if ((r != null && i === `replace` && P(null), !n)) {
          (r != null && i !== `replace` && mn(), (Ne.current = null), Pe(null));
          return;
        }
        let a = Ci(x.selectedSlideElementTargets, n, z.k);
        e.setHoveredElementId(a);
        let o = a == null ? null : (x.selectedSlideElementTargets.find((e) => e.id === a) ?? null);
        ((Ne.current = {
          pointerId: t.pointerId,
          start: n,
          draftClickAction: i,
          clickedElementTarget: o,
        }),
          Ui(t, w),
          Pe(null),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (!n) {
        if ((b && !c && !ne && oe?.(), W?.isActive())) {
          (W.clear(), (E.current = null));
          return;
        }
        (e.clearElementSelection(), (E.current = null));
        return;
      }
      if (!c) {
        let r = wi(x.hyperlinkTargets, n);
        if (r) {
          let e = { id: r.id, url: r.url, point: { x: n.x, y: n.y } };
          (r.action !== void 0 && (e.action = r.action),
            ee?.(e),
            t.preventDefault(),
            t.stopPropagation());
          return;
        }
        let i = Ci(x.selectedSlideElementTargets, n, z.k);
        if ((e.setSelectedElementId(i), b && !ne && v?.annotation?.createCommentThreads !== !0)) {
          let e = i ? tt.find((e) => e.target.kind !== `slide` && e.target.elementId === i) : null;
          e ? ae?.(e.threadId) : oe?.();
        }
        ((E.current = null),
          (T.current = null),
          (D.current = null),
          (O.current = null),
          (me.current = !1));
        return;
      }
      let r = W.isActive(),
        i =
          !r &&
          x.selectedElementIds.length === 1 &&
          x.primarySelectedElementId &&
          E.current === x.primarySelectedElementId
            ? x.primarySelectedElementId
            : void 0;
      if ((r || i) && W.tryPointerDown(n, { shiftKey: t.shiftKey, restrictToBlockId: i })) {
        (t.preventDefault(),
          (T.current = `text`),
          (D.current = null),
          (O.current = null),
          (me.current = !1),
          (E.current = null),
          Ui(t, w));
        return;
      }
      r && (W.clear(), (E.current = null));
      let a = x.primarySelectedElementId
          ? x.selectedSlideElementTargets.find((e) => e.id === x.primarySelectedElementId)
          : null,
        o = x.selectedElementIds.length === 1 ? (a?.frame ?? null) : null,
        s = x.selectedElementIds.length === 1 && a ? Ti([a], n, z.k) : null,
        l = s ? null : Oi(o, n, z.k),
        u = !s && !l && !!a?.canRotate && ki(o, n, z.k),
        d = s
          ? s.endpoint === `from`
            ? `connector-from`
            : `connector-to`
          : l
            ? `resize`
            : u
              ? `rotate`
              : `move`,
        p =
          s?.elementId ??
          (d === `move` ? Ci(x.selectedSlideElementTargets, n, z.k) : x.primarySelectedElementId);
      if (!p) {
        if (((D.current = null), (O.current = null), (me.current = !1), r)) return;
        (Ui(t, w),
          (T.current = `marquee`),
          (E.current = null),
          e.beginSelectionMarquee({ point: n, additive: t.shiftKey }));
        return;
      }
      (e.beginElementInteraction({
        elementId: p,
        point: n,
        mode: d,
        corner: l,
        preserveRatio: t.shiftKey,
        altKey: t.altKey,
        ctrlKey: t.ctrlKey,
      }),
        Ui(t, w),
        (T.current = `element`),
        (D.current = p),
        (O.current = n),
        (me.current = !1),
        E.current && E.current !== p && (E.current = null));
    },
    On = (t) => {
      let n = zi(t, S.current, z, x, Ye);
      if ((En(n), M && h)) {
        if (w.current != null && w.current !== t.pointerId) return;
        (n &&
          ze.current &&
          R((e) => {
            if (!e) return e;
            let t = e.points[e.points.length - 1];
            return t && Math.hypot(n.x - t.x, n.y - t.y) < 0.5
              ? e
              : { ...e, points: [...e.points, n] };
          }),
          (t.currentTarget.style.cursor = `crosshair`),
          t.preventDefault(),
          t.stopPropagation());
        return;
      }
      if (A && f) {
        let r = Ne.current;
        if (r != null && w.current != null && w.current !== t.pointerId) return;
        if (r != null && n) {
          Me(!0);
          let e = Math.hypot(n.x - r.start.x, n.y - r.start.y) >= Ji;
          if (e && Ee.current) {
            if (Ae.current) {
              (t.preventDefault(), t.stopPropagation());
              return;
            }
            ((F.current = !1), P(null));
          }
          (Pe(e ? { start: r.start, current: n } : null), t.preventDefault(), t.stopPropagation());
        }
        if (!n) {
          (e.setHoveredElementId(null), (t.currentTarget.style.cursor = ``));
          return;
        }
        Me(!0);
        let i = Ci(x.selectedSlideElementTargets, n, z.k);
        (e.setHoveredElementId(i),
          (t.currentTarget.style.cursor = Ee.current ? `` : S.current?.style.cursor || an));
        return;
      }
      if (T.current === `text`) {
        n && W.pointerMove(n);
        return;
      }
      if (T.current === `marquee`) {
        n && e.updateSelectionMarquee({ nextPoint: n });
        return;
      }
      if (T.current === `element` && n) {
        (O.current && Math.hypot(n.x - O.current.x, n.y - O.current.y) > qi && (me.current = !0),
          e.updateElementInteraction({
            nextPoint: n,
            shiftKey: t.shiftKey,
            altKey: t.altKey,
            ctrlKey: t.ctrlKey,
          }));
        return;
      }
      if (!c) {
        if (n && wi(x.hyperlinkTargets, n)) {
          (e.setHoveredElementId(null), (t.currentTarget.style.cursor = `pointer`));
          return;
        }
        let r = n ? Ci(x.selectedSlideElementTargets, n, z.k) : null;
        (e.setHoveredElementId(r), (t.currentTarget.style.cursor = ``));
        return;
      }
      if (!n) {
        (e.setHoveredElementId(null), (t.currentTarget.style.cursor = ``));
        return;
      }
      let r = x.primarySelectedElementId
          ? x.selectedSlideElementTargets.find((e) => e.id === x.primarySelectedElementId)
          : null,
        i = x.selectedElementIds.length === 1 ? (r?.frame ?? null) : null,
        a = x.selectedElementIds.length === 1 && r ? Ti([r], n, z.k) : null;
      if (a) {
        (e.setHoveredElementId(a.elementId), (t.currentTarget.style.cursor = `crosshair`));
        return;
      }
      let o = Oi(i, n, z.k);
      if (o) {
        (e.setHoveredElementId(x.primarySelectedElementId),
          (t.currentTarget.style.cursor = Ie(o) ?? ``));
        return;
      }
      if (i && r?.canRotate && ki(i, n, z.k)) {
        (e.setHoveredElementId(x.primarySelectedElementId), (t.currentTarget.style.cursor = Le()));
        return;
      }
      if (W.isActive() && W.hasTextCursorAtPoint(n)) {
        (e.setHoveredElementId(null), (t.currentTarget.style.cursor = `text`));
        return;
      }
      let s = Ci(x.selectedSlideElementTargets, n, z.k);
      (e.setHoveredElementId(s), (t.currentTarget.style.cursor = s ? `move` : ``));
    },
    kn = (t, n) => {
      if (M && h) {
        if (w.current != null && w.current !== t.pointerId) return;
        En(zi(t, S.current, z, x, Ye));
        let e = ze.current;
        (Wi(t, w), (We.current = null), R(null), n && bn(e));
        return;
      }
      if (A && f) {
        if (w.current != null && w.current !== t.pointerId) return;
        (En(zi(t, S.current, z, x, Ye)), Wi(t, w));
        let r = Ne.current;
        if (((Ne.current = null), Pe(null), !n || !r)) return;
        let i = zi(t, S.current, z, x, Ye);
        if (!i) return;
        let a = Ei(r.start, i),
          o = Math.hypot(i.x - r.start.x, i.y - r.start.y) < Ji;
        if (o) {
          if (r.clickedElementTarget) {
            switch (r.draftClickAction) {
              case `keep`:
              case `close`:
                mn();
                return;
              case `replace`:
                break;
            }
            let t = r.clickedElementTarget,
              n = _n({
                snapshot: x,
                elementIds: [t.id],
                primaryElementId: t.id,
                frame: t.frame,
                anchorPoint: i,
              });
            if (!n) return;
            (e.setHoveredElementId(null),
              Me(!1),
              v?.annotation?.onStart?.(`annotation_mode_pointer`, { annotationMode: f }),
              (F.current = !1),
              P({ mode: `create`, intent: `ask`, target: n, body: `` }));
            return;
          }
          switch (r.draftClickAction) {
            case `keep`:
            case `close`:
              mn();
              return;
            case `replace`:
              break;
          }
        }
        let s = pn({
          snapshot: x,
          frame: o ? { left: i.x, top: i.y, width: 0, height: 0 } : a,
          anchorPoint: i,
          containedElements: o ? [] : bt,
        });
        if (!s) return;
        (v?.annotation?.onStart?.(`annotation_mode_pointer`, { annotationMode: f }),
          (F.current = !1),
          P({ mode: `create`, intent: `ask`, target: s, body: `` }));
        return;
      }
      if (w.current != null && w.current !== t.pointerId) return;
      let r = T.current;
      if (!r) return;
      if ((En(zi(t, S.current, z, x, Ye)), Wi(t, w), r === `text`)) {
        ((T.current = null), W.pointerUp());
        return;
      }
      if (r === `marquee`) {
        ((T.current = null),
          (D.current = null),
          (O.current = null),
          (me.current = !1),
          e.endSelectionMarquee({ commit: n }));
        return;
      }
      T.current = null;
      let i = D.current,
        a = !!n && !me.current && i != null,
        o = a && x.textLayoutBlocks.some((e) => e.id === i);
      ((D.current = null),
        (O.current = null),
        (me.current = !1),
        e.endElementInteraction({ commit: n }),
        (E.current = o ? i : null),
        k(a && Ce));
    },
    G = (t) => {
      if (M && h) {
        t.preventDefault();
        return;
      }
      if (A && f) {
        t.preventDefault();
        return;
      }
      let n = Bi(t.clientX, t.clientY, S.current, z, x, Ye);
      n &&
        ((!c && wi(x.hyperlinkTargets, n)) ||
          (Ci(x.selectedSlideElementTargets, n, z.k) && l?.(`double-click-content`),
          c &&
            (e.endSelectionMarquee({ commit: !1 }),
            e.endElementInteraction({ commit: !1 }),
            W.selectWordAtPoint(n) && t.preventDefault())));
    },
    An = (e) =>
      !e.metaKey && !e.ctrlKey
        ? !1
        : e.key === `0`
          ? (Qe(e, { requirePrimaryModifier: !0 }) && l?.(`fit-to-viewport`),
            t.fitToViewport(1),
            e.preventDefault(),
            !0)
          : e.key === `=` || e.key === `+`
            ? (Qe(e, { allowShift: e.key === `+`, requirePrimaryModifier: !0 }) && l?.(`zoom-in`),
              t.zoomTo(pr(x.zoom + 0.1, x.fitScale ?? 1), { settled: !0 }),
              e.preventDefault(),
              !0)
            : e.key === `-`
              ? (Qe(e, { requirePrimaryModifier: !0 }) && l?.(`zoom-out`),
                t.zoomTo(pr(x.zoom - 0.1, x.fitScale ?? 1), { settled: !0 }),
                e.preventDefault(),
                !0)
              : !1,
    jn = (t) => {
      if (!mt(t.target)) {
        if (
          A &&
          v?.annotation?.onRequestLink &&
          !N &&
          !h &&
          !W.isActive() &&
          (t.metaKey || t.ctrlKey) &&
          !t.altKey &&
          !t.shiftKey &&
          t.key.toLowerCase() === `l`
        ) {
          if (!U) return;
          let e = qt(`selection-link`),
            n = fn(U);
          (At({ annotationId: e, artifactKind: `presentation`, label: n, body: ``, target: U }),
            v.annotation.onRequestLink({
              requestId: e,
              artifactKind: `presentation`,
              label: n,
              target: U,
            }),
            t.preventDefault());
          return;
        }
        if (t.key === `Escape` && ze.current) {
          (Zt(), t.preventDefault());
          return;
        }
        if (t.key === `Escape` && h) {
          (g?.(!1), t.preventDefault());
          return;
        }
        if (
          !t.metaKey &&
          !t.ctrlKey &&
          !t.altKey &&
          !t.shiftKey &&
          x.selectedElementIds.length === 0 &&
          (t.key === `ArrowLeft` || t.key === `ArrowRight`)
        ) {
          let n = t.key === `ArrowLeft` ? -1 : 1;
          if (tn()) {
            t.preventDefault();
            return;
          }
          let r = Math.max(0, Math.min(x.slideCount - 1, x.selectedSlideIdx + n));
          r !== x.selectedSlideIdx && (e.setSelectedSlideIdx(r), t.preventDefault());
          return;
        }
        if (t.key === `Escape` && N) {
          (cn(), t.preventDefault());
          return;
        }
        if (t.key === `Escape` && f) {
          (p?.(!1), Pe(null), t.preventDefault());
          return;
        }
        if (!c) {
          if (An(t)) return;
          Qe(t) &&
            !f &&
            !N &&
            !h &&
            !W.isActive() &&
            x.selectedElementIds.length > 0 &&
            (t.key === `Backspace` || t.key === `Delete`) &&
            l?.(`delete-selection`);
          return;
        }
        if (f) return (An(t), void 0);
        if (W.isActive()) {
          t.key === `Escape` && (W.clear(), t.preventDefault());
          return;
        }
        if (t.key === `/` && !t.metaKey && !t.ctrlKey && !t.altKey) {
          let e = st;
          (k(e), e && t.preventDefault());
          return;
        }
        if (t.key === `Escape` && ct) {
          (k(!1), t.preventDefault());
          return;
        }
        if (t.key === `Enter` && x.selectedElementIds.length === 1 && x.primarySelectedElementId) {
          W.activateBlockEnd(x.primarySelectedElementId) && t.preventDefault();
          return;
        }
        if (t.key === `Backspace` || t.key === `Delete`) {
          (Qe(t) && x.selectedElementIds.length > 0 && l?.(`delete-selection`),
            e.deleteSelectedElement() && t.preventDefault());
          return;
        }
        if (
          !t.metaKey &&
          !t.ctrlKey &&
          !t.altKey &&
          !t.shiftKey &&
          x.selectedElementIds.length > 0
        ) {
          let n = Ri(t.key);
          if (n && e.nudgeSelectedElements(n)) {
            t.preventDefault();
            return;
          }
        }
        if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `z`) {
          (t.shiftKey ? e.redo() : e.undo(), t.preventDefault());
          return;
        }
        if ((t.metaKey || t.ctrlKey) && t.key.toLowerCase() === `y`) {
          (e.redo(), t.preventDefault());
          return;
        }
        An(t);
      }
    },
    Mn = A && !f && !h && !ct && !N && !x.textEditState?.activeBlockId,
    Nn =
      st && A && U && (v?.annotation?.onDirectSubmit != null || v?.annotation?.onSubmit != null)
        ? {
            defaultSubmitMode: v?.annotation?.defaultCreateSubmitMode,
            savedSubmitDisabled: v?.annotation?.savedSubmitDisabled,
            onAskForEditShown: v?.annotation?.onAskForEditShown == null ? void 0 : ut,
            startAskChat: (e) => {
              v?.annotation?.onStart?.(e, { annotationMode: f });
            },
            submitAskChat: Cn,
          }
        : null,
    Pn = (() => {
      if (N?.mode === `create` && b && v?.annotation?.createCommentThreads === !0)
        return v.annotation;
    })(),
    Fn = (() => {
      if (!(Pn == null || N?.mode !== `create` || N.intent !== `comment`))
        return Pn.nativeFileCommentPlaceholder ?? `Add a comment to the file`;
    })(),
    In = b && v?.annotation?.createCommentThreads === !0 ? v.annotation.onCommentDraftOpen : void 0,
    Ln = (() => {
      if (!(N?.mode !== `create` || Pn == null || Pn.renderCommentComposer == null))
        return Pn.renderCommentComposer({
          value: N.body,
          initialAssignedToChatGpt: N.intent !== `comment`,
          onChange: Tn,
          onCancel: cn,
          onSubmit: ({ body: e, assignedToChatGpt: t, submitMode: n, submitSource: r }) => {
            Sn(n, r, e, void 0, t);
          },
        });
    })(),
    Rn = (() => {
      if (N == null) return;
      if (N.mode === `edit`) return N.annotationId;
      let { intent: e, target: t } = N,
        n =
          t.type === `presentation-element-selection`
            ? t.elementIds.join(`,`)
            : [t.frame.left, t.frame.top, t.frame.width, t.frame.height].join(`,`);
      return `${e}:${t.slideId}:${t.type}:${n}`;
    })();
  return (0, Y.jsx)(`div`, {
    ref: le,
    className: `relative flex h-full min-h-0 flex-col bg-token-bg-primary`,
    style: u === `codex` ? ue : void 0,
    children: (0, Y.jsxs)(`div`, {
      ref: S,
      "data-testid": `popcorn-presentation-stage`,
      tabIndex: 0,
      onKeyDown: jn,
      className: `relative min-h-0 flex-1 touch-none overflow-hidden outline-none`,
      children: [
        (0, Y.jsx)(`div`, {
          ref: de,
          className: `pointer-events-none absolute inset-0`,
          style: {
            top: Ye.top ?? 0,
            right: Ye.right ?? 0,
            bottom: Ye.bottom ?? 0,
            left: Ye.left ?? 0,
          },
        }),
        (0, Y.jsx)(`canvas`, {
          ref: fe,
          "data-testid": `popcorn-presentation-canvas`,
          className: a(`absolute inset-0 h-full w-full select-none`),
        }),
        (0, Y.jsx)(`canvas`, {
          ref: pe,
          "data-testid": `popcorn-presentation-worker-overlay`,
          className: `pointer-events-none absolute inset-0 h-full w-full select-none`,
        }),
        (0, Y.jsx)(`canvas`, {
          ref: C,
          "data-testid": `popcorn-presentation-overlay`,
          onPointerDown: Dn,
          onPointerMove: On,
          onPointerLeave: (t) => {
            w.current ??
              (En(null),
              e.setHoveredElementId(null),
              (t.currentTarget.style.cursor = M && h ? `crosshair` : ``));
          },
          onPointerUp: (e) => kn(e, !0),
          onPointerCancel: (e) => kn(e, !1),
          onDoubleClick: G,
          className: `absolute inset-0 h-full w-full touch-none`,
        }),
        b
          ? (0, Y.jsx)(vi, {
              threads: tt,
              slideRect: V.slideRect,
              isEditing: c,
              commentsSidebarOpen: ne,
              nativeCommentStyle: v?.annotation?.createCommentThreads === !0,
              renderCommentThread: j,
              annotationMarkerPositions: Vt,
              collisionBoundaryElement: de.current ?? S.current,
              selectedCommentThreadId: re,
              onSelectCommentThread: ae,
              onClearCommentThread: oe,
              onReply: (t, n) => {
                e.replyToCommentThread(t, n);
              },
              onResolve: (t) => {
                e.resolveCommentThread(t);
              },
              onReopen: (t) => {
                e.reopenCommentThread(t);
              },
              onDeleteThread: (t) => {
                e.deleteCommentThread(t);
              },
              onToggleReaction: (t, n, r) => {
                e.toggleCommentReaction(t, n, r);
              },
              onEditComment: (t, n, r) => {
                e.editThreadComment(t, n, r);
              },
              onDeleteComment: (t, n) => {
                e.deleteThreadComment(t, n);
              },
            })
          : null,
        b && at
          ? (0, Y.jsx)($e, {
              bounds: at,
              borderWidthPx: 3,
              fillColor: `rgba(51, 156, 255, 0.22)`,
              testId: `popcorn-presentation-comment-target-highlight-${nt}`,
            })
          : null,
        Jt.length > 0
          ? (0, Y.jsx)(Nt, {
              testId: `popcorn-presentation-drawing-overlay`,
              strokes: Jt.flatMap((e) => e.strokes),
              projectPoint: yn,
              clipBounds: dt,
            })
          : null,
        Be.length > 0
          ? (0, Y.jsx)(Nt, {
              testId: `popcorn-presentation-drawing-draft-overlay`,
              strokes: Be,
              projectPoint: yn,
              clipBounds: dt,
            })
          : null,
        Fe
          ? (0, Y.jsx)(Nt, {
              testId: `popcorn-presentation-drawing-active-overlay`,
              strokes: [Fe],
              projectPoint: yn,
              clipBounds: dt,
            })
          : null,
        Bt.map(({ annotation: e, bounds: t, stackIndex: n }) => {
          let r = zt(t, `top-right`, n);
          return (0, Y.jsxs)(
            `div`,
            {
              children: [
                (0, Y.jsx)($e, {
                  bounds: t,
                  testId: `popcorn-presentation-annotation-overlay-${e.annotationId}`,
                }),
                (0, Y.jsx)(Ze, {
                  testId: `popcorn-presentation-annotation-marker-${e.annotationId}`,
                  markerNumber: e.annotationNumber,
                  position: r,
                  selected: N?.mode === `edit` && N.annotationId === e.annotationId,
                  title: e.label,
                  onMouseEnter: () => {
                    Te(e.annotationId);
                  },
                  onMouseLeave: () => {
                    Te((t) => (t === e.annotationId ? null : t));
                  },
                  onFocus: () => {
                    Te(e.annotationId);
                  },
                  onBlur: () => {
                    Te((t) => (t === e.annotationId ? null : t));
                  },
                  onClick: () => {
                    v?.annotation?.defaultCreateSubmitMode !== `direct` && Ot(e);
                  },
                }),
              ],
            },
            e.annotationId,
          );
        }),
        Ht
          ? (0, Y.jsx)(Ft, {
              body: Ht.annotation.body,
              markerPosition: zt(Ht.bounds, `top-right`, Ht.stackIndex),
              containerElement: S.current,
              testId: `popcorn-presentation-annotation-preview`,
            })
          : null,
        wt
          ? (0, Y.jsx)($e, {
              bounds: wt,
              testId: yt
                ? `popcorn-presentation-annotation-region-preview`
                : `popcorn-presentation-annotation-highlight`,
              borderWidthPx: yt ? 1 : 2,
            })
          : null,
        Ut.map((e) => {
          let t = vn(
            {
              type: `presentation-element-selection`,
              slideId: H,
              slideIndex: x.selectedSlideIdx,
              slideLabel: et,
              elementIds: [e.elementId],
              primaryElementId: e.elementId,
              frame: e.frame,
            },
            V.slideRect,
          );
          return t
            ? (0, Y.jsx)(
                $e,
                {
                  bounds: t,
                  borderWidthPx: 0.5,
                  fillColor: `transparent`,
                  shadow: !1,
                  testId: `popcorn-presentation-annotation-region-contained-${e.elementId}`,
                },
                e.elementId,
              )
            : null;
        }),
        A && f && N?.mode === `create` && _t
          ? (0, Y.jsx)(Ze, {
              testId: `popcorn-presentation-annotation-draft-marker`,
              markerNumber: N.intent === `comment` ? null : un(kt, N.target),
              nativePresentationStyle: N.intent === `comment`,
              position: zt(_t),
              draft: !0,
            })
          : null,
        Mn && ot && U
          ? (0, Y.jsx)(ht, {
              bounds: ot,
              containerElement: S.current,
              collisionBoundaryElement: de.current,
              assistantIcon: v?.annotation?.commentAssistantIcon,
              label: v?.annotation?.askForEditLabel ?? v?.annotation?.getAskForEditLabel?.(),
              shortcutScopeElement: S.current,
              testId: `popcorn-presentation-ask-for-edit-button`,
              onClick: (e) => {
                tn() ||
                  (v?.annotation?.onStart?.(e, { annotationMode: f }),
                  (F.current = !1),
                  P({ mode: `create`, intent: `ask`, target: U, body: `` }));
              },
              onShown: v?.annotation?.onAskForEditShown == null ? void 0 : ut,
              onCommentClick:
                In &&
                (() => {
                  (In(),
                    v?.annotation?.onStart?.(`ask_codex_button`, { annotationMode: f }),
                    (F.current = !1),
                    P({ mode: `create`, intent: `comment`, target: U, body: `` }));
                }),
            })
          : null,
        Rt
          ? (0, Y.jsx)(
              Gt,
              {
                ref: ke,
                anchorBounds: Rt,
                containerElement: S.current,
                collisionBoundaryElement: de.current,
                portalContainerElement: se,
                mode: N?.mode ?? `create`,
                defaultCreateSubmitMode: v?.annotation?.defaultCreateSubmitMode,
                savedSubmitDisabled:
                  N?.mode === `create` && N.intent === `comment`
                    ? v?.annotation?.commentSavedSubmitDisabled
                    : v?.annotation?.savedSubmitDisabled,
                dictationControls: v?.annotation?.dictationControls,
                placeholder: Fn,
                isComment:
                  Pn != null && ((N?.mode === `create` && N.intent === `comment`) || Ln != null),
                commentComposer: Ln,
                addCommentLabel: Pn?.addCommentLabel,
                nativeFileCommentLabel: Pn?.nativeFileCommentLabel,
                value: N?.body ?? ``,
                onChange: Tn,
                onCancel: cn,
                onDelete: wn,
                onDictationBusyChange: rn,
                onSubmit: Sn,
              },
              Ln == null ? void 0 : Rn,
            )
          : null,
        r.length > 0
          ? (0, Y.jsx)(`div`, {
              className: `pointer-events-none absolute inset-0 z-30`,
              children: r.map((t) =>
                (0, Y.jsx)(
                  `div`,
                  {
                    className: `pointer-events-none absolute inset-0`,
                    children: t.render({
                      controller: e,
                      snapshot: V,
                      selectionBounds: ot,
                      panelControls: i,
                      editToolbarRequested: ct,
                      dismissEditToolbar: () => {
                        (k(!1), Xt());
                      },
                      focusStage: Xt,
                      shortcutScopeElement: S.current,
                      selectionActions: Nn,
                    }),
                  },
                  t.id,
                ),
              ),
            })
          : null,
        v?.reviewBar != null &&
          (0, Y.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 z-30 flex items-end justify-center px-4 pb-4`,
            style: Ye,
            children: (0, Y.jsx)(`div`, {
              className: `pointer-events-auto max-w-full`,
              children: v.reviewBar,
            }),
          }),
      ],
    }),
  });
}
function Ii(e, t) {
  let n = window.getComputedStyle(e),
    r = t === `codex` ? Li(n.getPropertyValue(`--color-background-surface`)) : null;
  if (r) return r;
  let i = n.backgroundColor.trim();
  return i.length > 0 && i !== `transparent` && i !== `rgba(0, 0, 0, 0)` ? i : fe(t);
}
function Li(e) {
  let t = e.trim();
  return t.length === 0 || t === `transparent` || t === `rgba(0, 0, 0, 0)` || t.startsWith(`var(`)
    ? null
    : t;
}
function Ri(e) {
  switch (e) {
    case `ArrowLeft`:
      return { dx: -1, dy: 0 };
    case `ArrowRight`:
      return { dx: Ki, dy: 0 };
    case `ArrowUp`:
      return { dx: 0, dy: -1 };
    case `ArrowDown`:
      return { dx: 0, dy: Ki };
    default:
      return null;
  }
}
function zi(e, t, n, r, i) {
  return Bi(e.clientX, e.clientY, t, n, r, i);
}
function Bi(e, t, n, r, i, a) {
  let o = i.selectedSlideFrame;
  if (!n || !o) return null;
  let s = ge(n, e, t);
  return Sr({
    camera: r,
    viewportX: s.x,
    viewportY: s.y,
    viewport: { width: n.clientWidth, height: n.clientHeight },
    frame: o,
    viewportInsets: a,
  });
}
function Vi(e, t, n, r, i) {
  return !r || e <= 0 || t <= 0
    ? null
    : gr({ viewport: { width: e, height: t }, frame: r, camera: n, viewportInsets: i }).slideRect;
}
function Hi(e) {
  if (e.selectedElementIds.length === 0) return null;
  let t = e.inspector.selectedElement,
    n =
      e.selectedElementIds.length === 1 && e.primarySelectedElementId
        ? t?.id === e.primarySelectedElementId
          ? t.frame
          : e.selectedSlideElementTargets.find((t) => t.id === e.primarySelectedElementId)?.frame
        : mn({
            selectedElementIds: e.selectedElementIds,
            selectedSlideElementTargets: e.selectedSlideElementTargets,
          });
  if (!n) return null;
  let r = e.slideRect;
  return r
    ? {
        left: r.left + n.left * r.scale,
        top: r.top + n.top * r.scale,
        width: n.width * r.scale,
        height: n.height * r.scale,
      }
    : { left: n.left, top: n.top, width: n.width, height: n.height };
}
function Ui(e, t) {
  t.current = e.pointerId;
  try {
    e.currentTarget.setPointerCapture(e.pointerId);
  } catch {}
}
function Wi(e, t) {
  if (e.currentTarget.hasPointerCapture?.(e.pointerId))
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  t.current === e.pointerId && (t.current = null);
}
var J,
  Y,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi = e(() => {
    (y(),
      (J = t(n())),
      Si(),
      Be(),
      Je(),
      yn(),
      rn(),
      se(),
      xe(),
      A(),
      Jt(),
      Er(),
      Pi(),
      Qr(),
      (Y = f()),
      (Gi = {
        isPanelAvailable: () => !1,
        isPanelOpen: () => !1,
        openPanel: () => {},
        closePanel: () => {},
        togglePanel: () => {},
      }),
      (Ki = 1),
      (qi = 3),
      (Ji = 6),
      (Yi = { left: 0, top: 0, right: 0, bottom: 0 }));
  }),
  Zi,
  Qi,
  $i,
  ea = e(() => {
    (P(),
      Sn(),
      Er(),
      Tn(),
      (Zi = 1e-4),
      (Qi = 0.01),
      ($i = class {
        #e;
        #t = !1;
        #n = null;
        #r = null;
        #i = null;
        #a = null;
        #o = !1;
        #s = !1;
        #c = { width: 0, height: 0 };
        #l = { left: 0, top: 0, right: 0, bottom: 0 };
        #u = { selectedSlideIdx: 0, selectedSlideFrame: null, zoom: 1, camera: null };
        #d = null;
        #f = new Set();
        #p = { width: 0, height: 0, viewportInsets: { left: 0, top: 0, right: 0, bottom: 0 } };
        constructor() {
          this.#e = new me({
            enabled: !0,
            initialCamera: { x: 0, y: 0, k: 1 },
            minZoom: 0.01,
            maxZoom: 64,
            getViewportSize: () => ({ width: this.#c.width, height: this.#c.height }),
            getWorldSize: () => {
              let e = this.#v();
              return e
                ? gr({
                    viewport: { width: this.#c.width, height: this.#c.height },
                    frame: e,
                    camera: this.#e.getCamera(),
                    viewportInsets: this.#l,
                  }).worldSize
                : { width: this.#c.width, height: this.#c.height };
            },
            requestDraw: () => {},
            clampCamera: (e) => {
              let t = this.#v();
              return t
                ? br({
                    camera: e,
                    viewport: { width: this.#c.width, height: this.#c.height },
                    frame: t,
                    viewportInsets: this.#l,
                  })
                : e;
            },
            onCameraSettled: (e) => {
              let t = this.#v();
              t &&
                this.#d?.({
                  camera: e,
                  zoom: xr({
                    camera: e,
                    viewport: { width: this.#c.width, height: this.#c.height },
                    frame: t,
                    viewportInsets: this.#l,
                  }),
                });
            },
          });
        }
        start() {
          this.#t ||
            ((this.#t = !0),
            bn().then(() => {
              this.#t && ((this.#o = !0), this.scheduleLayoutSync());
            }));
        }
        attachHost(e) {
          this.#n !== e &&
            (this.#h(),
            (this.#n = e),
            this.#e.attach(e),
            e &&
              (typeof ResizeObserver < `u` &&
                ((this.#r = new ResizeObserver((t) => {
                  let n = t[0];
                  this.scheduleLayoutSync(n ? wn(e, n) : null);
                })),
                this.#r.observe(e)),
              window.addEventListener(`resize`, this.#m),
              this.scheduleLayoutSync()));
        }
        getCamera() {
          return this.#e.getCamera();
        }
        hasInitializedCamera() {
          return this.#s;
        }
        subscribeToCameraChanges(e) {
          return this.#e.subscribeToCameraChanges(e);
        }
        subscribeToLayoutChanges(e) {
          return (
            this.#f.add(e),
            () => {
              this.#f.delete(e);
            }
          );
        }
        getLayoutSnapshot() {
          return this.#p;
        }
        zoomTo(e, t) {
          let n = this.#v();
          if (!n) return;
          let r = _r({
            viewport: { width: this.#c.width, height: this.#c.height },
            frame: n,
            zoomFactor: e,
            viewportInsets: this.#l,
          });
          this.#e.zoomTo(r.k, t);
        }
        fitToViewport(e = 1) {
          let t = this.#v();
          t &&
            this.#e.setCamera(
              _r({
                viewport: { width: this.#c.width, height: this.#c.height },
                frame: t,
                zoomFactor: e,
                viewportInsets: this.#l,
              }),
              { settled: !0 },
            );
        }
        setOnCameraSettled(e) {
          this.#d = e;
        }
        setViewportInsets(e) {
          let t = this.#l;
          (t.left === e.left &&
            t.top === e.top &&
            t.right === e.right &&
            t.bottom === e.bottom &&
            t.fitMargin === e.fitMargin) ||
            ((this.#l = { ...e }),
            this.#s &&
              this.#y(this.#u, this.#u, {
                viewportChanged: !0,
                previousViewport: { width: this.#c.width, height: this.#c.height },
                previousViewportInsets: t,
              }),
            this.#_(),
            this.scheduleLayoutSync());
        }
        setViewState(e) {
          let t = this.#u;
          ((this.#u = e), this.#y(t, e));
        }
        dispose() {
          ((this.#t = !1),
            this.#i != null && (cancelAnimationFrame(this.#i), (this.#i = null)),
            this.#h(),
            this.#e.destroy());
        }
        scheduleLayoutSync(e) {
          (e && (this.#a = e),
            this.#o &&
              (this.#i != null && cancelAnimationFrame(this.#i),
              (this.#i = requestAnimationFrame(() => {
                ((this.#i = null), this.#g());
              }))));
        }
        #m = () => {
          this.scheduleLayoutSync();
        };
        #h() {
          ((this.#r &&= (this.#r.disconnect(), null)),
            this.#n && window.removeEventListener(`resize`, this.#m),
            (this.#n = null),
            this.#e.attach(null));
        }
        #g() {
          let e = this.#n;
          if (!e) return;
          let t = this.#c,
            n = this.#a;
          ((this.#a = null),
            (this.#c = Cn(e, n)),
            this.#_(),
            this.#y(this.#u, this.#u, {
              viewportChanged: t.width !== this.#c.width || t.height !== this.#c.height,
              previousViewport: { width: t.width, height: t.height },
            }));
        }
        #_() {
          let e = this.#p,
            t = { width: this.#c.width, height: this.#c.height, viewportInsets: { ...this.#l } };
          if (
            !(
              e.width === t.width &&
              e.height === t.height &&
              e.viewportInsets.left === t.viewportInsets.left &&
              e.viewportInsets.top === t.viewportInsets.top &&
              e.viewportInsets.right === t.viewportInsets.right &&
              e.viewportInsets.bottom === t.viewportInsets.bottom &&
              e.viewportInsets.fitMargin === t.viewportInsets.fitMargin
            )
          ) {
            this.#p = t;
            for (let e of this.#f) e();
          }
        }
        #v() {
          return this.#u.selectedSlideFrame;
        }
        #y(e, t, n) {
          let r = t.selectedSlideFrame;
          if (!r || this.#c.width <= 0 || this.#c.height <= 0) return;
          let i = n?.viewportChanged ?? !1,
            a = { width: this.#c.width, height: this.#c.height };
          if (i && this.#s) {
            let e = n?.previousViewport ?? a,
              t = this.#e.getCamera(),
              i = _r({
                viewport: e,
                frame: r,
                zoomFactor: 1,
                viewportInsets: n?.previousViewportInsets ?? this.#l,
              }),
              o = Math.abs(t.x - i.x) < Qi && Math.abs(t.y - i.y) < Qi && Math.abs(t.k - i.k) < Zi;
            this.#e.setCamera(
              o
                ? _r({ viewport: a, frame: r, zoomFactor: 1, viewportInsets: this.#l })
                : vr({
                    previousViewport: e,
                    nextViewport: a,
                    frame: r,
                    camera: t,
                    viewportInsets: this.#l,
                    previousViewportInsets: n?.previousViewportInsets,
                  }),
            );
            return;
          }
          if (t.camera) {
            let n = _r({ viewport: a, frame: r, zoomFactor: t.zoom, viewportInsets: this.#l }).k,
              i = xr({ camera: t.camera, viewport: a, frame: r, viewportInsets: this.#l });
            (this.#e.setCamera(t.camera),
              (!this.#s || Math.abs(e.zoom - t.zoom) > 1e-4) &&
                Math.abs(i - t.zoom) > 1e-4 &&
                this.#e.zoomTo(n, { settled: !0 }),
              (this.#s = !0));
            return;
          }
          (!this.#s ||
            e.selectedSlideIdx !== t.selectedSlideIdx ||
            e.selectedSlideFrame?.width !== t.selectedSlideFrame?.width ||
            e.selectedSlideFrame?.height !== t.selectedSlideFrame?.height) &&
            (this.#e.setCamera(
              _r({ viewport: a, frame: r, zoomFactor: t.zoom, viewportInsets: this.#l }),
              {
                settled: !0,
              },
            ),
            (this.#s = !0));
        }
      }));
  }),
  ta = e(() => {});
function na(e) {
  let t = e.lastIndexOf(`.`);
  return t > 0 ? e.slice(0, t) : e;
}
function ra(e, t) {
  return a(
    t === `codex` ? `w-full gap-2` : `w-fit gap-2.5`,
    e === `left` ? `flex-row` : `flex-col`,
    e === `responsive` && `@[749px]/presentation-editor:flex-row`,
  );
}
function ia(e) {
  return e === `left`
    ? `block`
    : e === `bottom`
      ? `hidden`
      : `hidden @[749px]/presentation-editor:block`;
}
function aa(e, t) {
  let n = {
    left: `w-full flex-col`,
    bottom: `w-fit`,
    responsive: `w-fit @[749px]/presentation-editor:h-fit @[749px]/presentation-editor:min-h-full @[749px]/presentation-editor:w-full @[749px]/presentation-editor:flex-col`,
  }[e];
  return a(
    n,
    t === `codex`
      ? `items-start gap-1`
      : {
          left: `h-fit min-h-full items-center gap-2.5 justify-[safe_center]`,
          bottom: `gap-6`,
          responsive: `gap-6 @[749px]/presentation-editor:items-center @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:justify-[safe_center]`,
        }[e],
  );
}
function oa(e) {
  return e === `codex` ? `w-28` : `w-40`;
}
function sa(e) {
  return e === `codex`
    ? `w-[18px] min-w-[18px] shrink-0 pt-0.5 text-right text-[12px] leading-4 font-normal tabular-nums`
    : `pt-0.5 text-right text-sm font-semibold`;
}
function ca(e) {
  return { ...ue, "--popcorn-presentation-thumbnail-rail-bottom-inset": `${e}px` };
}
function la(e, t) {
  return e <= 0 ? 0 : e + wa + (t === `codex` ? 0 : Ta);
}
function ua(e, t, n) {
  let r = [...e],
    [i] = r.splice(t, 1);
  return (i == null || r.splice(n, 0, i), r);
}
function da({
  controller: e,
  plugins: t = [],
  slideThumbnailPlacement: n = `responsive`,
  title: s = `presentation.pptx`,
  fileMenuContent: c,
  headerRightContent: l,
  headerCenterContent: d,
  headerTitleContent: f,
  commentsSidebarContent: p,
  commentsSidebarOpen: m,
  onCommentsSidebarOpenChange: h,
  selectedCommentThreadId: g,
  hoveredCommentThreadId: v,
  onSelectedCommentThreadChange: te,
  zoomToFitLabel: y,
  renderHeaderZoomControl: b,
  onClose: ne,
  onInteractionAttempt: ie,
  renderSlideThumbnailOverlay: oe,
  className: se,
  enablePageNavigation: ce,
  theme: x = `web`,
  isEditing: S = !0,
  hideSpeakerNotes: ue = !1,
  reviewTools: fe,
  onHyperlinkClick: C,
  annotationsEnabled: w = !0,
  drawingAnnotationsEnabled: T = !0,
  commentThreadsEnabled: E = !0,
}) {
  let D = ae(
    e,
    (0, X.useCallback)(() => rr(), []),
  );
  if (!D) return null;
  let O = Hr(D),
    me = (0, X.useCallback)((e) => D.subscribe(e), [D]),
    he = (0, X.useCallback)(() => D.getSnapshot().commentThreads, [D]),
    ge = (0, X.useSyncExternalStore)(me, he, he),
    { panels: _e, stageOverlays: ve } = (0, X.useMemo)(() => cr(t), [t]),
    ye = w && fe?.annotation?.enabled !== !1,
    [be, xe] = (0, X.useState)(!1),
    [k, Ce] = (0, X.useState)(!1),
    [A, j] = (0, X.useState)(!1),
    M = T && fe?.drawing?.enabled !== !1,
    [N, P] = (0, X.useState)(!1),
    [we, Te] = (0, X.useState)(0),
    [Ee, De] = (0, X.useState)(!1),
    [Oe, ke] = (0, X.useState)(null),
    [F, Ae] = (0, X.useState)(null),
    I = (0, X.useRef)(null),
    je = (0, X.useMemo)(() => new $i(), []),
    Me = E && p != null,
    L = (!S && E) || Me,
    Pe = Me && m != null ? m : Ee,
    Fe = L && Pe,
    Ie = (0, X.useMemo)(() => {
      let e = new Map();
      if (!L) return e;
      for (let t of ge ?? []) e.set(t.slideId, (e.get(t.slideId) ?? 0) + 1);
      return e;
    }, [ge, L]),
    Le = (0, X.useCallback)((e) => (k || e < 0 ? !1 : (D.setSelectedSlideIdx(e), !0)), [k, D]);
  ((0, X.useEffect)(() => {
    L || (De(!1), ke(null), Ae(null), (I.current = null));
  }, [L]),
    (0, X.useEffect)(() => {
      Ae(null);
    }, [O.selectedSlideIdx]),
    (0, X.useEffect)(() => {
      if (!Oe) {
        I.current = null;
        return;
      }
      let e = D.getSnapshot().commentThreads?.find((e) => e.threadId === Oe),
        t = O.slideIds[O.selectedSlideIdx];
      if (e?.slideId === t) {
        I.current = null;
        return;
      }
      I.current !== Oe && (ke(null), Ae(null));
    }, [D, Oe, O.selectedSlideIdx, O.slideIds]));
  let Re = (0, X.useCallback)(() => {
      ((I.current = null), ke(null), Ae(null), te?.(null));
    }, [te]),
    ze = (0, X.useCallback)(
      (e) => {
        let t = D.getSnapshot(),
          n = t.commentThreads?.find((t) => t.threadId === e);
        if (n == null) return;
        let r = t.slideIds[t.selectedSlideIdx];
        if (n.slideId !== r) {
          if (k) return;
          I.current = e;
          let r = t.slideIds.indexOf(n.slideId);
          Le(r < 0 ? n.slideIndex : r);
        }
        (n.target.kind === `slide`
          ? D.clearElementSelection()
          : D.setSelectedElementId(n.target.elementId),
          Ae(null),
          ke(e),
          te?.(e));
      },
      [k, D, te, Le],
    );
  ((0, X.useEffect)(() => {
    if (!(g === void 0 || g === Oe)) {
      if (g == null) {
        (D.clearElementSelection(), Re());
        return;
      }
      ze(g);
    }
  }, [Re, D, g, ze, Oe]),
    (0, X.useEffect)(() => {
      ye || xe(!1);
    }, [ye]),
    (0, X.useEffect)(() => {
      M || P(!1);
    }, [M]),
    (0, X.useEffect)(() => {
      !be || !ye || (D.clearElementSelection(), D.setHoveredElementId(null));
    }, [ye, be, D]),
    (0, X.useEffect)(() => {
      !N || !M || (D.clearElementSelection(), D.setHoveredElementId(null));
    }, [D, M, N]),
    (0, X.useEffect)(() => {
      if (!be) return;
      let e = (e) => {
        if (
          e.key === `Escape` &&
          !(
            e.target instanceof HTMLElement &&
            e.target.closest(`[data-testid='popcorn-annotation-editor']`)
          )
        ) {
          if (k) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          xe(!1);
        }
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [k, be]),
    (0, X.useEffect)(() => {
      if (!N) return;
      let e = (e) => {
        e.key === `Escape` && P(!1);
      };
      return (
        window.addEventListener(`keydown`, e, !0),
        () => {
          window.removeEventListener(`keydown`, e, !0);
        }
      );
    }, [N]));
  let [Be, Ve] = (0, X.useState)(() =>
      Object.fromEntries(_e.map((e) => [e.id, e.defaultOpen ?? !1])),
    ),
    [He, Ue] = (0, X.useState)(_a),
    [We, Ge] = (0, X.useState)(() => Object.fromEntries(O.slideIds.map((e) => [e, null]))),
    [qe, Je] = (0, X.useState)(() => Object.fromEntries(O.slideIds.map((e) => [e, null]))),
    [R, z] = (0, X.useState)(() => O.slideIds),
    [B, Xe] = (0, X.useState)(null),
    [Ze, Qe] = (0, X.useState)(!1),
    [$e, H] = (0, X.useState)(!1),
    [et, tt] = (0, X.useState)(!1),
    [nt, it] = (0, X.useState)(!1),
    [at, ot] = (0, X.useState)(!1),
    [st, ct] = (0, X.useState)(!1),
    U = (0, X.useRef)(null),
    lt = (0, X.useRef)(!1),
    ut = (0, X.useRef)(null),
    dt = (0, X.useRef)([]),
    ft = (0, X.useRef)([]),
    pt = (0, X.useRef)(null),
    mt = (0, X.useRef)(new Set()),
    ht = (0, X.useRef)(We),
    _t = (0, X.useRef)(qe),
    vt = (0, X.useRef)(R),
    yt = ee(u(i, { activationConstraint: { distance: 4 } })),
    bt = (0, X.useMemo)(() => [Ke], []),
    xt = n === `left`,
    Ct = n === `bottom`,
    wt = x === `codex`,
    Tt = n === `responsive`,
    Et = Tt && !Me,
    Dt = wt && Tt,
    Ot = (0, X.useCallback)(() => {
      if (!Dt) return !0;
      let { slideRect: e, zoom: t } = D.getSnapshot();
      return !e || Math.abs(t - 1) >= Ea || e.left >= xa;
    }, [D, Dt]),
    At = (0, X.useSyncExternalStore)(me, Ot, Ot),
    jt;
  jt = Dt ? (et && At ? `desktop` : `compact`) : void 0;
  let Mt = et ? !$e : Ze,
    Nt = ce ?? wt,
    Pt = et && (Dt ? !$e : xt || Tt),
    Ft = !ue && (S || O.notesText.trim().length > 0),
    It = Ft && st && He > 0,
    Lt = (0, X.useMemo)(() => {
      let e = 0;
      return (
        Pt && (e = Dt ? xa : ya),
        { left: e, top: 0, right: 0, bottom: It ? la(He, x) : 0, fitMargin: Dt ? Ca : void 0 }
      );
    }, [He, It, Pt, x, Dt]);
  (rt(() => {
    let e = U.current;
    if (!e) return;
    let t = null,
      n = (e) => {
        let t = e >= (Dt ? ba : va),
          n = Et && e > 0 && e <= 688,
          r = e >= Sa;
        (t && !lt.current && (H(!1), Qe(!1)),
          (lt.current = t),
          tt((e) => (e === t ? e : t)),
          it((e) => e || !0),
          ot((e) => (e === n ? e : n)),
          ct((e) => (e === r ? e : r)));
      };
    if (
      (n(e.clientWidth),
      typeof window < `u` &&
        typeof window.requestAnimationFrame == `function` &&
        (t = window.requestAnimationFrame(() => {
          n(e.clientWidth);
        })),
      typeof ResizeObserver > `u`)
    )
      return () => {
        t != null &&
          typeof window.cancelAnimationFrame == `function` &&
          window.cancelAnimationFrame(t);
      };
    let r = new ResizeObserver((t) => {
      let r = t[0];
      n(r?.contentRect.width && r.contentRect.width > 0 ? r.contentRect.width : e.clientWidth);
    });
    return (
      r.observe(e),
      () => {
        (t != null &&
          typeof window.cancelAnimationFrame == `function` &&
          window.cancelAnimationFrame(t),
          r.disconnect());
      }
    );
  }, [Et, n, Dt]),
    (0, X.useEffect)(() => {
      Ve((e) => {
        let t = {},
          n = !1;
        for (let r of _e) {
          let i = e[r.id] ?? r.defaultOpen ?? !1;
          ((t[r.id] = i), Object.is(e[r.id], i) || (n = !0));
        }
        for (let r of Object.keys(e))
          if (!(r in t)) {
            n = !0;
            break;
          }
        return n ? t : e;
      });
    }, [_e]));
  let Rt = (0, X.useMemo)(
    () => ({
      isPanelAvailable: () => !0,
      isPanelOpen: (e) => Be[e] ?? !1,
      openPanel: (e) => {
        Ve((t) => ({ ...t, [e]: !0 }));
      },
      closePanel: (e) => {
        Ve((t) => ({ ...t, [e]: !1 }));
      },
      togglePanel: (e) => {
        Ve((t) => ({ ...t, [e]: !(t[e] ?? !1) }));
      },
    }),
    [Be],
  );
  ((0, X.useEffect)(() => {
    ((ht.current = We), (_t.current = qe));
  }, [qe, We]),
    (0, X.useEffect)(() => {
      vt.current = R;
    }, [R]),
    (0, X.useEffect)(() => {
      (z(O.slideIds),
        Ge((e) => {
          let t = {};
          for (let n of O.slideIds) t[n] = e[n] ?? null;
          return t;
        }),
        Je((e) => {
          let t = {};
          for (let n of O.slideIds) t[n] = e[n] ?? null;
          return t;
        }));
    }, [O.slideIds]));
  let zt = (0, X.useMemo)(
      () => Object.fromEntries(O.slideIds.map((e, t) => [e, O.slideLabels[t] ?? `Slide ${t + 1}`])),
      [O.slideIds, O.slideLabels],
    ),
    Bt = (0, X.useMemo)(() => Object.fromEntries(O.slideIds.map((e, t) => [e, t])), [O.slideIds]),
    Ht = O.slideIds[O.selectedSlideIdx] ?? null,
    Ut = O.fitScale ?? (O.slideRect && O.zoom > 0 ? O.slideRect.scale / O.zoom : null),
    Wt = Ut ? mr(Ut) : null,
    Gt = O.slideRect?.scale ?? mr(Ut ? Ut * O.zoom : O.zoom),
    Kt = Wt != null && Math.abs(O.zoom - 1) < Ea,
    qt = Et && (!nt || at),
    Jt = !qt,
    W = Nt && O.slideCount > 1 && !qt,
    Yt = (e) => {
      let t = mr(e);
      if (Ut && Ut > 0) {
        D.setZoom(t / Ut);
        return;
      }
      D.setZoom(t);
    },
    Xt =
      Wt != null && y != null
        ? {
            label: y,
            selected: Kt,
            onSelect: () => {
              je.fitToViewport(1);
            },
          }
        : void 0,
    Zt = Jt
      ? (b?.({
          fitOption: Xt,
          onZoomPercentChange: (e) => {
            Yt(e / 100);
          },
          triggerTestId: `popcorn-presentation-zoom-select`,
          zoomPercent: Math.round(Gt * 100),
        }) ??
        (0, Z.jsx)(de, {
          zoom: Gt,
          onZoomChange: Yt,
          options: Da,
          fitOption: Xt,
          testId: `popcorn-presentation-zoom-select`,
          variant: wt && S ? `presentationHeader` : `default`,
        }))
      : null,
    Qt = (0, X.useCallback)(
      (e) => {
        if (!Me) {
          Le(e);
          return;
        }
        e !== O.selectedSlideIdx && Le(e) && Re();
      },
      [Re, Me, Le, O.selectedSlideIdx],
    ),
    $t = (0, X.useCallback)(
      (e) => {
        !k && e >= 0 && D.deleteSlide(e);
      },
      [k, D],
    ),
    tn = (0, X.useCallback)((e, t, n) => {
      ((dt.current[e] = t), t && pt.current && n && pt.current.observe(t));
    }, []),
    nn = (0, X.useCallback)(() => {}, []),
    rn = (0, X.useCallback)(() => {
      k || D.addSlide();
    }, [k, D]),
    an = (0, X.useCallback)(
      async (e, t) => {
        if (e < 0 || e >= D.getSnapshot().slideCount) return;
        let n = D.getSnapshot().slideIds[e];
        if (!n) return;
        let r = t?.cacheKind === `stacked-page`,
          i = r ? _t.current[n] : ht.current[n],
          a = `${r ? `stacked-page` : `rail`}:${n}`;
        if (
          !(
            (!t?.force && i != null) ||
            mt.current.has(a) ||
            e < 0 ||
            e >= D.getSnapshot().slideCount
          )
        ) {
          mt.current.add(a);
          try {
            await bn();
            let t = await D.requestSlideThumbnail(e, r ? { cssMaxPx: Oa } : void 0);
            (r ? Je : Ge)((e) => (e[n] === t ? e : { ...e, [n]: t }));
          } finally {
            mt.current.delete(a);
          }
        }
      },
      [D],
    );
  ((0, X.useEffect)(() => {
    let e = O.slideIds[O.selectedSlideIdx];
    (e && (mt.current.delete(`rail:${e}`), mt.current.delete(`stacked-page:${e}`)),
      an(O.selectedSlideIdx, { force: !0 }),
      e &&
        _t.current[e] != null &&
        an(O.selectedSlideIdx, { cacheKind: `stacked-page`, force: !0 }));
  }, [an, O.presentationVersion, O.selectedSlideIdx, O.slideIds]),
    (0, X.useEffect)(() => {
      if (!(typeof IntersectionObserver > `u`)) {
        (pt.current?.disconnect(),
          (pt.current = new IntersectionObserver(
            (e) => {
              for (let t of e) {
                let e = t.target.getAttribute(`data-index`);
                if (!t.isIntersecting || e == null) continue;
                let n = Number(e);
                if (!Number.isFinite(n)) continue;
                let r =
                    t.target.getAttribute(`data-thumbnail-cache-kind`) === `stacked-page`
                      ? `stacked-page`
                      : `rail`,
                  i = r === `stacked-page`;
                (an(n, { cacheKind: r, force: i }),
                  an(n + 1, { cacheKind: r, force: i }),
                  pt.current?.unobserve(t.target));
              }
            },
            { root: U.current, rootMargin: `200px`, threshold: 0.05 },
          )));
        for (let e of [...dt.current, ...ft.current]) e && pt.current.observe(e);
        return () => {
          pt.current?.disconnect();
        };
      }
    }, [an, O.presentationVersion, O.slideCount]));
  let on = (0, X.useCallback)(
      (e) => {
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        let t = 0;
        switch (e.key) {
          case `ArrowUp`:
          case `ArrowLeft`:
            t = -1;
            break;
          case `ArrowDown`:
          case `ArrowRight`:
            t = 1;
            break;
          default:
            return;
        }
        let n = O.selectedSlideIdx,
          r = O.slideIds.length - 1,
          i = t < 0 ? Math.max(0, n - 1) : Math.min(r, n + 1);
        if (i === n) return;
        if (!Le(i)) {
          e.preventDefault();
          return;
        }
        let a = e.currentTarget.classList.contains(`popcorn-presentation-stacked-pages`)
          ? ft.current[i]
          : dt.current[i];
        (a?.scrollIntoView?.({ block: `nearest`, inline: `nearest` }),
          a?.focus(),
          e.preventDefault());
      },
      [Le, O.selectedSlideIdx, O.slideIds.length],
    ),
    sn = (0, X.useCallback)((e) => {
      Xe(typeof e.active.id == `string` ? e.active.id : null);
    }, []),
    cn = (0, X.useCallback)(() => {
      (z(O.slideIds), Xe(null));
    }, [O.slideIds]),
    ln = (0, X.useCallback)(
      (e) => {
        if ((Xe(null), k)) return;
        let t = typeof e.active.id == `string` ? e.active.id : null,
          n = typeof e.over?.id == `string` ? e.over.id : null;
        if (!t || !n || t === n) return;
        let r = vt.current,
          i = r.indexOf(t),
          a = r.indexOf(n);
        i < 0 || a < 0 || i === a || (z((e) => ua(e, i, a)), D.moveSlide(i, a));
      },
      [k, D],
    ),
    un = (0, X.useCallback)((e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || Qe(!1);
    }, []),
    dn = (0, X.useCallback)((e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.parentElement?.contains(t)) || Qe(!1);
    }, []),
    fn = (0, X.useCallback)((e, t, n) => {
      ((ft.current[e] = n), n && pt.current && _t.current[t] == null && pt.current.observe(n));
    }, []),
    pn = (0, X.useCallback)(
      (e, t = `standard`) => {
        let n = aa(e, t);
        return S
          ? (0, Z.jsxs)(r, {
              sensors: yt,
              collisionDetection: _,
              modifiers: bt,
              onDragStart: sn,
              onDragCancel: cn,
              onDragEnd: ln,
              children: [
                (0, Z.jsx)(Ye, {
                  items: R,
                  strategy: gt,
                  children: (0, Z.jsxs)(`div`, {
                    className: a(`flex min-w-full justify-[safe_center]`, n),
                    children: [
                      R.map((n, r) => {
                        let i = We[n] ?? null,
                          a = Bt[n] ?? -1;
                        return (0, Z.jsx)(
                          La,
                          {
                            slideId: n,
                            index: r,
                            snapshotIndex: a,
                            label: zt[n] ?? `Slide ${r + 1}`,
                            thumbnail: i,
                            isSelected: n === Ht,
                            commentThreadCount: Ie.get(n),
                            canDelete: R.length > 1,
                            onSelectSlide: Qt,
                            onDeleteSlide: $t,
                            renderSlideThumbnailOverlay: oe,
                            slideThumbnailPlacement: e,
                            thumbnailVariant: t,
                            onRegisterButtonRef: tn,
                          },
                          n,
                        );
                      }),
                      (0, Z.jsx)(Ra, {
                        onAddSlide: rn,
                        slideThumbnailPlacement: e,
                        thumbnailVariant: t,
                      }),
                    ],
                  }),
                }),
                (0, Z.jsx)(o, {
                  modifiers: bt,
                  children: B
                    ? (0, Z.jsx)(Ia, {
                        slideId: B,
                        index: R.indexOf(B),
                        label: zt[B] ?? `Slide`,
                        thumbnail: We[B] ?? null,
                        isSelected: B === Ht,
                        commentThreadCount: Ie.get(B),
                        onSelect: nn,
                        renderSlideThumbnailOverlay: oe,
                        slideThumbnailPlacement: e,
                        thumbnailVariant: t,
                        isDragging: !0,
                      })
                    : null,
                }),
              ],
            })
          : (0, Z.jsx)(`div`, {
              className: a(`flex min-w-full justify-[safe_center]`, n),
              children: R.map((n, r) => {
                let i = We[n] ?? null,
                  a = Bt[n] ?? -1;
                return (0, Z.jsx)(
                  Ia,
                  {
                    slideId: n,
                    index: r,
                    label: zt[n] ?? `Slide ${r + 1}`,
                    thumbnail: i,
                    isSelected: n === Ht,
                    commentThreadCount: Ie.get(n),
                    onSelect: () => Qt(a),
                    renderSlideThumbnailOverlay: oe,
                    slideThumbnailPlacement: e,
                    thumbnailVariant: t,
                    buttonRef: (e) => {
                      tn(r, e, i == null);
                    },
                  },
                  n,
                );
              }),
            });
      },
      [B, rn, Ie, $t, R, bt, cn, ln, sn, nn, S, tn, oe, Ht, Qt, yt, Bt, zt, We],
    ),
    mn = wt && S,
    hn = () => {
      if (k || !fe?.annotation) return;
      let e = !be;
      (e && (fe.annotation.onModeEnabled?.(), P(!1), !Me && Pe && (De(!1), h?.(!1), Re())), xe(e));
    },
    gn = mn
      ? (0, Z.jsx)(V, {
          activeLabel: `Annotation`,
          disabled: !fe?.annotation || !ye,
          label: `Annotation`,
          onClick: hn,
          pressed: be,
          testId: `popcorn-presentation-annotation-button`,
          children: (0, Z.jsx)(le, { size: `compact` }),
        })
      : fe?.annotation && ye
        ? (0, Z.jsx)(Vt, {
            active: be,
            onClick: hn,
            testId: `popcorn-presentation-annotation-button`,
          })
        : null,
    _n = gn == null ? null : (fe?.annotation?.wrapModeButton?.(gn) ?? gn);
  return (0, Z.jsx)(`div`, {
    className: a(
      `bg-token-bg-primary text-token-text-primary flex h-full min-h-0 flex-col overflow-hidden`,
      se,
    ),
    children: (0, Z.jsxs)(Ar, {
      controller: D,
      children: [
        (0, Z.jsx)(re, {
          title: s,
          headerTitleContent: mn
            ? (0, Z.jsx)(ii, {
                title: f ?? na(s),
                sidebarOpen: Mt,
                onToggleSidebar: () => {
                  et ? H((e) => !e) : Qe((e) => !e);
                },
              })
            : f,
          closeLabel: `Close presentation`,
          onClose: ne,
          testId: `popcorn-presentation-header`,
          className: `border-b-0`,
          compactTitle: wt,
          fileMenuContent: c,
          centeredContent: mn
            ? (0, Z.jsx)(ai, {
                annotationControl: _n,
                formatControl: (0, Z.jsx)(ma, { controller: D, panels: _e, panelControls: Rt }),
                onAddSlide: rn,
                trailingContent: d,
              })
            : W
              ? (0, Z.jsx)(Ne, {
                  currentIndex: O.selectedSlideIdx,
                  totalCount: O.slideCount,
                  itemLabel: `slide`,
                  onChangeIndex: Le,
                  testId: `popcorn-presentation-page-navigation`,
                })
              : null,
          actions: (0, Z.jsxs)(Se, {
            compact: wt,
            children: [
              mn ? null : _n,
              !mn && L
                ? (0, Z.jsx)(en, {
                    active: Pe,
                    onClick: () => {
                      let e = !Pe;
                      if (Me) {
                        (De(e), h?.(e));
                        return;
                      }
                      (e && xe(!1), De(e), h?.(e), Re());
                    },
                  })
                : null,
              !mn && fe?.drawing && M
                ? (0, Z.jsx)(kt, {
                    active: N,
                    onClick: () => {
                      k ||
                        P((e) => {
                          let t = !e;
                          return (t ? xe(!1) : Te((e) => e + 1), t);
                        });
                    },
                    testId: `popcorn-presentation-drawing-button`,
                  })
                : null,
              Zt,
              l,
            ],
          }),
          icon: (0, Z.jsx)(St, {
            kind: `presentation`,
            children: (0, Z.jsx)(pe, { className: `size-4` }),
          }),
        }),
        (0, Z.jsxs)(`div`, {
          className: a(`@container/presentation-editor min-h-0 flex-1`, Fe && `flex min-w-0`),
          children: [
            (0, Z.jsxs)(`div`, {
              ref: U,
              "data-codex-layout": jt,
              className: a(
                `popcorn-presentation-editor-shell relative flex h-full min-h-0 overflow-hidden`,
                Fe && `min-w-0 flex-1`,
                Et && `popcorn-presentation-editor-shell--small-stacked`,
                Ct
                  ? `flex-col`
                  : xt || Dt
                    ? `flex-row`
                    : `flex-col @[749px]/presentation-editor:flex-row`,
              ),
              children: [
                Et
                  ? (0, Z.jsx)(`div`, {
                      className: `popcorn-presentation-stacked-pages`,
                      "data-testid": `popcorn-presentation-stacked-pages`,
                      onKeyDown: on,
                      children: R.map((e, t) =>
                        (0, Z.jsx)(
                          fa,
                          {
                            index: t,
                            label: zt[e] ?? `Slide ${t + 1}`,
                            thumbnail: qe[e] ?? null,
                            isSelected: e === Ht,
                            onSelect: () => Qt(Bt[e] ?? -1),
                            buttonRef: (n) => {
                              fn(t, e, n);
                            },
                          },
                          e,
                        ),
                      ),
                    })
                  : null,
                qt
                  ? (0, Z.jsx)(ha, { controller: D, panels: _e, panelControls: Rt, isEditing: S })
                  : (0, Z.jsxs)(`div`, {
                      className: a(
                        `popcorn-presentation-main-panel relative isolate flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-token-bg-primary`,
                        Ct
                          ? `order-1`
                          : xt
                            ? `order-2`
                            : `order-1 @[749px]/presentation-editor:order-2`,
                        Dt && `popcorn-presentation-main-panel--codex-responsive`,
                      ),
                      children: [
                        (0, Z.jsx)(`div`, {
                          className: `min-h-0 flex-1 overflow-hidden`,
                          children: (0, Z.jsx)(Fi, {
                            controller: D,
                            runtime: je,
                            stageOverlays: S ? ve : [],
                            panelControls: Rt,
                            editToolbarRequested: A,
                            onEditToolbarRequestedChange: j,
                            isEditing: S,
                            onInteractionAttempt: ie,
                            theme: x,
                            viewportInsets: Lt,
                            annotationMode: be,
                            onAnnotationModeChange: xe,
                            onAnnotationDictationBusyChange: Ce,
                            drawingMode: N,
                            onDrawingModeChange: P,
                            drawingCommitToken: we,
                            reviewTools: fe,
                            onHyperlinkClick: C,
                            annotationsEnabled: w,
                            drawingAnnotationsEnabled: T,
                            commentThreadsEnabled: E,
                            commentsSidebarOpen: Fe,
                            selectedCommentThreadId: Oe,
                            hoveredCommentThreadId: v === void 0 ? F : v,
                            onSelectCommentThread: L ? ze : void 0,
                            onClearCommentThread: L ? Re : void 0,
                            annotationPortalContainerElement: U.current,
                          }),
                        }),
                        Ft
                          ? (0, Z.jsx)(pa, {
                              controller: D,
                              notesHeight: He,
                              setNotesHeight: Ue,
                              isEditing: S,
                              theme: x,
                              leftInset: Pt ? Lt.left : 0,
                            })
                          : null,
                        (0, Z.jsx)(ha, {
                          controller: D,
                          panels: _e,
                          panelControls: Rt,
                          isEditing: S,
                        }),
                      ],
                    }),
                Ct
                  ? (0, Z.jsx)(`div`, {
                      ref: ut,
                      className: `order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16`,
                      "data-testid": `popcorn-presentation-thumbnails`,
                      onKeyDown: on,
                      children: pn(`bottom`),
                    })
                  : xt
                    ? (0, Z.jsx)(`div`, {
                        ref: ut,
                        className: `popcorn-presentation-thumbnail-rail--overlay-desktop order-1 flex h-full min-h-0 shrink-0 flex-col gap-2.5 overflow-x-hidden overflow-y-auto px-3 pt-3 pb-12`,
                        style: { width: `220px` },
                        "data-testid": `popcorn-presentation-thumbnails`,
                        onKeyDown: on,
                        children: pn(`left`),
                      })
                    : Dt
                      ? (0, Z.jsxs)(`div`, {
                          "data-testid": `popcorn-presentation-codex-thumbnail-rail`,
                          "data-open": Mt ? `true` : `false`,
                          className: `popcorn-presentation-codex-thumbnail-rail`,
                          style: ca(Lt.bottom),
                          onFocusCapture: () => {
                            et || Qe(!0);
                          },
                          onBlurCapture: et ? void 0 : un,
                          children: [
                            (0, Z.jsx)(`button`, {
                              type: `button`,
                              "aria-label": `Show slide list`,
                              "aria-expanded": Mt,
                              "data-testid": `popcorn-presentation-thumbnail-stack`,
                              className: `popcorn-presentation-codex-thumbnail-stack`,
                              onMouseEnter: () => {
                                et || Qe(!0);
                              },
                              onMouseLeave: et ? void 0 : dn,
                              onClick: () => {
                                et ? H(!1) : Qe(!0);
                              },
                              children: R.map((e) =>
                                (0, Z.jsx)(
                                  `span`,
                                  {
                                    "data-active": e === Ht ? `true` : void 0,
                                    "data-testid": `popcorn-presentation-thumbnail-stack-bar`,
                                    className: `popcorn-presentation-codex-thumbnail-stack-bar`,
                                    style: {
                                      backgroundColor:
                                        e === Ht
                                          ? `var(--color-token-text-primary, rgba(13, 13, 13, 1))`
                                          : `var(--color-token-border-default, rgba(232, 232, 232, 1))`,
                                    },
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, Z.jsx)(`div`, {
                              ref: ut,
                              "aria-hidden": !Mt,
                              inert: !Mt,
                              className: `popcorn-presentation-codex-thumbnail-panel`,
                              "data-testid": `popcorn-presentation-thumbnails`,
                              onMouseEnter: () => {
                                et || Qe(!0);
                              },
                              onMouseLeave: et ? void 0 : dn,
                              onKeyDown: on,
                              children: pn(`left`, `codex`),
                            }),
                          ],
                        })
                      : (0, Z.jsx)(`div`, {
                          ref: ut,
                          className: `popcorn-presentation-thumbnail-rail--overlay-desktop order-2 flex min-h-0 w-full shrink-0 flex-row gap-6 overflow-x-auto overflow-y-hidden px-8 pt-3 pb-16 @[749px]/presentation-editor:order-1 @[749px]/presentation-editor:h-full @[749px]/presentation-editor:w-[220px] @[749px]/presentation-editor:flex-col @[749px]/presentation-editor:gap-2.5 @[749px]/presentation-editor:overflow-x-hidden @[749px]/presentation-editor:overflow-y-auto @[749px]/presentation-editor:px-3 @[749px]/presentation-editor:pt-3 @[749px]/presentation-editor:pb-12`,
                          "data-testid": `popcorn-presentation-thumbnails`,
                          onKeyDown: on,
                          children: pn(`responsive`),
                        }),
              ],
            }),
            Fe &&
              (p ??
                (0, Z.jsx)(ti, {
                  controller: D,
                  selectedThreadId: Oe,
                  onSelectThread: ze,
                  onHoverThread: Ae,
                  onClose: () => {
                    (De(!1), h?.(!1), Re());
                  },
                })),
          ],
        }),
      ],
    }),
  });
}
function fa({ index: e, label: t, thumbnail: n, isSelected: r, onSelect: i, buttonRef: a }) {
  return (0, Z.jsx)(`button`, {
    ref: a,
    type: `button`,
    "data-index": e,
    "data-active": r,
    "data-thumbnail-cache-kind": `stacked-page`,
    "data-testid": `popcorn-presentation-stacked-page-${e}`,
    "aria-label": t,
    className: `popcorn-presentation-stacked-page`,
    onClick: i,
    children: n
      ? (0, Z.jsx)(`img`, {
          src: n,
          alt: ``,
          className: `popcorn-presentation-stacked-page-image`,
          draggable: !1,
        })
      : (0, Z.jsx)(`div`, { className: `popcorn-presentation-stacked-page-placeholder` }),
  });
}
function pa({
  controller: e,
  notesHeight: t,
  setNotesHeight: n,
  isEditing: r,
  theme: i,
  leftInset: a,
}) {
  let o = Wr(e);
  return (0, Z.jsxs)(`div`, {
    className: `popcorn-presentation-notes-panel popcorn-presentation-desktop-only pointer-events-none absolute right-0 bottom-0 z-20 px-6 pt-4 pb-6`,
    style: i === `codex` ? { ...ue, left: `${a}px`, right: 0 } : { left: `${a}px`, right: 0 },
    "data-testid": `popcorn-presentation-notes-panel`,
    children: [
      i === `codex`
        ? null
        : (0, Z.jsx)(`div`, {
            className: `pointer-events-auto pb-3`,
            children: (0, Z.jsx)(fi, { notesHeight: t, setNotesHeight: n }),
          }),
      (0, Z.jsx)(`div`, {
        className: `w-full text-sm`,
        children:
          t > 0
            ? (0, Z.jsx)(`textarea`, {
                "data-testid": `popcorn-presentation-notes`,
                placeholder: r ? `Add speaker notes...` : `No speaker notes`,
                className: `pointer-events-auto h-full w-full resize-none p-4 text-sm text-token-text-primary outline-none placeholder:text-token-text-secondary`,
                style: { ...Fa, height: `${t}px` },
                value: o.notesText,
                readOnly: !r,
                onChange: (t) => {
                  e.updateSpeakerNotes(t.target.value);
                },
              })
            : null,
      }),
    ],
  });
}
function ma({ controller: e, panels: t, panelControls: n }) {
  let r = qr(e, `inspector`),
    i = t.find((t) => t.isVisible?.({ controller: e, snapshot: r }) ?? !0),
    a = i != null && n.isPanelAvailable(i.id),
    o = i != null && n.isPanelOpen(i.id);
  return (0, Z.jsx)(V, {
    disabled: !a,
    expanded: o,
    label: `Format`,
    onClick: () => {
      i && n.togglePanel(i.id);
    },
    testId: `popcorn-presentation-format-button`,
    children: (0, Z.jsx)(x, { size: `compact` }),
  });
}
function ha({ controller: e, panels: t, panelControls: n, isEditing: r }) {
  return !r || t.length === 0
    ? null
    : (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-y-4 right-4 z-20 max-w-full`,
        children: t.map((t) =>
          (0, Z.jsx)(
            ga,
            { controller: e, panel: t, panelControls: n, isPanelOpen: n.isPanelOpen(t.id) },
            t.id,
          ),
        ),
      });
}
function ga({ controller: e, panel: t, panelControls: n, isPanelOpen: r }) {
  let i = qr(e, t.snapshotScope ?? `editor`);
  return (t.isVisible?.({ controller: e, snapshot: i }) ?? !0)
    ? (0, Z.jsx)(`div`, {
        "data-testid": r ? `popcorn-presentation-sidebar` : void 0,
        "aria-hidden": !r,
        inert: !r,
        className: a(
          `max-h-full max-w-full transition-[opacity,transform] duration-200 ease-out`,
          r
            ? `pointer-events-auto translate-x-0 opacity-100`
            : `pointer-events-none translate-x-2 opacity-0`,
        ),
        style: { width: `${t.widthPx ?? 336}px` },
        children: t.render({ controller: e, snapshot: i, panelControls: n }),
      })
    : null;
}
var X,
  Z,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za = e(() => {
    (s(),
      qe(),
      tt(),
      v(),
      y(),
      (X = t(n())),
      j(),
      Je(),
      se(),
      dt(),
      S(),
      bt(),
      Me(),
      Ce(),
      oe(),
      Jt(),
      sr(),
      lr(),
      Er(),
      Sn(),
      Qr(),
      ri(),
      di(),
      _i(),
      Xi(),
      ea(),
      ta(),
      (Z = f()),
      (_a = 104),
      (va = 749),
      (ya = 220),
      (ba = 820),
      (xa = 166),
      (Sa = 900),
      (Ca = 24),
      (wa = 40),
      (Ta = 11),
      (Ea = 1e-4),
      (Da = [0.25, 0.5, 1, 1.5, 2]),
      (Oa = 960),
      (ka = { borderRadius: `8px`, boxShadow: `0px 4px 16px 0px rgba(0, 0, 0, 0.05)` }),
      (Aa = `var(--color-token-interactive-label-accent-default, rgba(2, 133, 255, 1))`),
      (ja = `var(--color-token-interactive-bg-accent-muted-context, rgba(2, 133, 255, 0.10))`),
      (Ma = [
        `0px 0px 0px 1px ${Aa}`,
        `0px 2px 8px 0px rgba(2, 133, 255, 0.16)`,
        `0px 4px 16px 0px rgba(0, 0, 0, 0.05)`,
      ].join(`, `)),
      (Na = `var(--color-token-border-default, var(--color-border, rgba(13, 13, 13, 0.10)))`),
      (Pa = { ...ka, borderColor: Na }),
      (Fa = {
        borderRadius: `16px`,
        border: `1px solid var(--color-token-border-default, rgba(13, 13, 13, 0.1))`,
        backgroundColor: `var(--color-token-bg-secondary, rgba(250, 250, 250, 0.9))`,
        backdropFilter: `blur(28px)`,
        WebkitBackdropFilter: `blur(28px)`,
      }),
      (Ia = (0, X.memo)(function ({
        slideId: e,
        index: t,
        label: n,
        thumbnail: r,
        isSelected: i,
        commentThreadCount: o,
        onSelect: s,
        renderSlideThumbnailOverlay: c,
        slideThumbnailPlacement: l = `responsive`,
        thumbnailVariant: u = `standard`,
        buttonRef: d,
        dragAttributes: f,
        dragListeners: p,
        isDragging: m = !1,
      }) {
        let h = ra(l, u),
          g = ia(l),
          _ = oa(u),
          v = sa(u);
        return (0, Z.jsxs)(`button`, {
          ref: d,
          "data-index": t,
          type: `button`,
          "data-testid": `popcorn-presentation-slide-${t}`,
          "data-active": i,
          "data-dragging": m ? `true` : `false`,
          "aria-label": n,
          onClick: s,
          className: a(
            `flex shrink-0 cursor-interaction touch-none items-start rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none`,
            h,
          ),
          style: i
            ? { backgroundColor: ja, ...(u === `codex` ? { borderRadius: `16px` } : {}) }
            : void 0,
          ...f,
          ...p,
          children: [
            (0, Z.jsx)(`div`, {
              className: a(`text-token-text-primary`, v, g),
              style: i ? { color: Aa } : void 0,
              children: o
                ? (0, Z.jsxs)(`span`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, Z.jsx)(`span`, { children: t + 1 }),
                      (0, Z.jsxs)(`span`, {
                        "aria-label": `${o} comment ${o === 1 ? `thread` : `threads`} on slide ${t + 1}`,
                        "data-testid": `popcorn-presentation-slide-comment-count-${t}`,
                        className: `inline-flex min-h-4 min-w-4 items-center justify-center gap-0.5 rounded bg-token-text-primary px-1 text-[10px] leading-none font-normal text-token-main-surface-primary tabular-nums`,
                        children: [
                          (0, Z.jsx)(Ee, { "aria-hidden": `true`, className: `size-3` }),
                          (0, Z.jsx)(`span`, { "aria-hidden": `true`, children: o }),
                        ],
                      }),
                    ],
                  })
                : t + 1,
            }),
            (0, Z.jsxs)(`div`, {
              "data-testid": `popcorn-presentation-slide-${t}-surface`,
              className: a(`relative overflow-hidden border bg-white`, _, m ? `shadow-lg` : null),
              style: { ...ka, borderColor: i ? Aa : Na, boxShadow: i ? Ma : ka.boxShadow },
              children: [
                r
                  ? (0, Z.jsx)(`img`, { src: r, alt: ``, className: a(`block`, _), draggable: !1 })
                  : (0, Z.jsx)(`div`, {
                      className: a(_, `animate-pulse bg-gray-200`),
                      style: { aspectRatio: 16 / 9 },
                    }),
                c
                  ? (0, Z.jsx)(`div`, {
                      className: `pointer-events-none absolute right-1.5 bottom-1.5 flex items-center justify-end`,
                      children: c(e),
                    })
                  : null,
              ],
            }),
          ],
        });
      })),
      (La = (0, X.memo)(function ({
        slideId: e,
        index: t,
        snapshotIndex: n,
        label: r,
        thumbnail: i,
        isSelected: a,
        commentThreadCount: o,
        canDelete: s,
        onSelectSlide: c,
        onDeleteSlide: l,
        renderSlideThumbnailOverlay: u,
        slideThumbnailPlacement: d = `responsive`,
        thumbnailVariant: f = `standard`,
        onRegisterButtonRef: p,
      }) {
        let {
            attributes: h,
            listeners: g,
            setNodeRef: _,
            transform: v,
            transition: ee,
            isDragging: te,
          } = yt({ id: e }),
          y = (0, X.useCallback)(() => {
            c(n);
          }, [c, n]),
          b = (0, X.useCallback)(() => {
            l(n);
          }, [l, n]),
          ne = (0, X.useCallback)(
            (e) => {
              p(t, e, i == null);
            },
            [t, p, i],
          );
        return (0, Z.jsx)(xt, {
          actions: (0, X.useMemo)(
            () => [
              {
                kind: `item`,
                id: `view`,
                label: r,
                icon: D,
                onSelect: y,
                testId: `popcorn-presentation-slide-view-${t}`,
              },
              { kind: `separator`, id: `slide-actions-separator` },
              {
                kind: `item`,
                id: `delete`,
                label: `Delete slide`,
                icon: _e,
                color: `danger`,
                disabled: !s,
                onSelect: b,
                testId: `popcorn-presentation-slide-delete-${t}`,
              },
            ],
            [s, b, y, t, r],
          ),
          trigger: (0, Z.jsx)(`div`, {
            ref: _,
            style: {
              transform: m.Translate.toString(v),
              transition: te ? void 0 : ee,
              opacity: +!te,
              position: `relative`,
              display: `inline-flex`,
            },
            children: (0, Z.jsx)(Ia, {
              slideId: e,
              index: t,
              label: r,
              thumbnail: i,
              isSelected: a,
              commentThreadCount: o,
              onSelect: y,
              renderSlideThumbnailOverlay: u,
              slideThumbnailPlacement: d,
              thumbnailVariant: f,
              buttonRef: ne,
              dragAttributes: h,
              dragListeners: g,
              isDragging: te,
            }),
          }),
        });
      })),
      (Ra = (0, X.memo)(function ({
        onAddSlide: e,
        slideThumbnailPlacement: t = `responsive`,
        thumbnailVariant: n = `standard`,
      }) {
        let r = ra(t, n),
          i = ia(t),
          o = oa(n),
          s = sa(n);
        return (0, Z.jsxs)(`button`, {
          type: `button`,
          onClick: e,
          "aria-label": `Add slide`,
          title: `Add slide`,
          "data-testid": `popcorn-presentation-add-slide`,
          className: a(
            `flex shrink-0 cursor-interaction items-start rounded-md p-2 text-left outline-none focus:outline-none focus-visible:outline-none`,
            r,
          ),
          children: [
            (0, Z.jsx)(`div`, {
              "aria-hidden": `true`,
              className: a(`text-token-text-primary invisible`, s, i),
              children: `00`,
            }),
            (0, Z.jsx)(`div`, {
              className: a(
                `text-token-text-secondary relative flex items-center justify-center overflow-hidden border border-dashed bg-white`,
                o,
              ),
              style: Pa,
              children: (0, Z.jsx)(`div`, {
                className: `flex w-full items-center justify-center transition-colors hover:bg-token-bg-tertiary`,
                style: { aspectRatio: 16 / 9 },
                children: (0, Z.jsx)(k, { className: `size-4` }),
              }),
            }),
          ],
        });
      })));
  });
function Ba({ className: e, ...t }) {
  return (0, Va.jsxs)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: a(`size-4`, e),
    ...t,
    children: [
      (0, Va.jsx)(`path`, {
        d: `M13 14.1699C13.2761 14.1699 13.5 14.3938 13.5 14.6699C13.5 14.9461 13.2761 15.1699 13 15.1699H3C2.72386 15.1699 2.5 14.9461 2.5 14.6699C2.50003 14.3938 2.72388 14.1699 3 14.1699H13Z`,
        fill: `currentColor`,
      }),
      (0, Va.jsx)(`path`, {
        d: `M11.3301 2.73535C11.6973 2.73544 11.9951 3.03317 11.9951 3.40039V9.65411C11.9949 11.678 10.354 13.3191 8.33008 13.3191H7.66992C5.64598 13.3191 4.00508 11.678 4.00488 9.65411V3.40039C4.00488 3.03316 4.30271 2.73542 4.66992 2.73535C5.03719 2.73535 5.33496 3.03312 5.33496 3.40039V9.65411C5.33516 10.9435 6.38052 11.989 7.66992 11.9891H8.33008C9.61947 11.989 10.6648 10.9435 10.665 9.65411V3.40039C10.665 3.03316 10.9629 2.73542 11.3301 2.73535Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
var Va,
  Ha = e(() => {
    (y(), (Va = f()));
  });
function Ua() {
  let e = Nr(),
    t = Gr(),
    n = (0, Wa.useCallback)(
      (t) => {
        e.setSelectedElementId(t);
      },
      [e],
    );
  return {
    selectedElement: t.inspector.selectedElement,
    slideElements: t.inspector.slideElements,
    selectElement: n,
  };
}
var Wa,
  Ga = e(() => {
    ((Wa = t(n())), Qr());
  });
function Ka() {
  let e = Nr();
  return {
    textStyle: Gr().inspector.selectedElement?.text ?? null,
    updateTextStyle: (0, qa.useCallback)(
      (t) => {
        e.updateSelectedElementStyle(t);
      },
      [e],
    ),
  };
}
var qa,
  Ja = e(() => {
    ((qa = t(n())), Qr());
  }),
  Ya,
  Xa,
  Za,
  Qa = e(() => {
    ((Ya = `hover:bg-black/5 active:bg-black/10 dark:hover:bg-token-interactive-bg-secondary-hover dark:active:bg-token-interactive-bg-secondary-press`),
      `${Ya}`,
      (Xa = `bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover active:bg-token-interactive-bg-accent-muted-press`),
      (Za = `w-full border-0 border-b border-black/10 bg-transparent px-0 py-1.5 text-sm outline-none transition-colors hover:border-black/20 focus:border-token-text-secondary`));
  });
function $a({ value: e, options: t, onChange: n, ariaLabel: r, className: i }) {
  return (0, eo.jsx)(`div`, {
    role: `group`,
    "aria-label": r,
    className: a(`bg-token-bg-primary flex overflow-hidden`, i),
    children: t.map((t) => {
      let r = t.icon,
        i = t.value === e;
      return (0, eo.jsxs)(
        `button`,
        {
          type: `button`,
          "aria-label": t.label,
          "aria-pressed": i,
          onClick: () => {
            n(t.value);
          },
          className: a(
            `flex min-w-0 flex-1 cursor-pointer items-center justify-center gap-1 px-2 py-1.5 text-xs font-medium transition-colors`,
            i ? Xa : Ya,
          ),
          children: [
            r ? (0, eo.jsx)(r, { className: `size-4` }) : null,
            (0, eo.jsx)(`span`, { className: `truncate`, children: t.label }),
          ],
        },
        t.value,
      );
    }),
  });
}
var eo,
  to = e(() => {
    (y(), Qa(), (eo = f()));
  });
function no({ value: e, ariaLabel: t, disabled: n = !1, onChange: r, className: i }) {
  let o = ro(e);
  return (0, ao.jsxs)(`div`, {
    className: a(
      `bg-token-bg-primary relative flex h-9 w-full items-center gap-2 px-2`,
      n ? `opacity-50` : Ya,
      i,
    ),
    children: [
      (0, ao.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `border-token-border-light block size-5 shrink-0 rounded-full border shadow-[0_0_0_1px_rgba(15,23,42,0.08)]`,
        style: { backgroundColor: o },
      }),
      (0, ao.jsx)(`span`, {
        className: `text-token-text-primary min-w-0 flex-1 truncate text-xs font-medium uppercase`,
        children: o,
      }),
      (0, ao.jsx)(`input`, {
        "aria-label": t,
        disabled: n,
        type: `color`,
        value: o,
        onChange: (e) => r(e.target.value),
        className: `absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed`,
      }),
    ],
  });
}
function ro(e) {
  let t = e.trim();
  if (/^#[0-9a-f]{6}$/i.test(t)) return t.toUpperCase();
  if (/^#[0-9a-f]{3}$/i.test(t)) {
    let e = t[1],
      n = t[2],
      r = t[3];
    return `#${e}${e}${n}${n}${r}${r}`.toUpperCase();
  }
  let n = t.match(/^rgba?\(\s*(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})\s*(?:,\s*|\s+)(\d{1,3})/i);
  if (n) {
    let [e, t, r] = n.slice(1, 4).map((e) => Math.min(Math.max(Number(e), 0), 255));
    return `#${io(e ?? 0)}${io(t ?? 0)}${io(r ?? 0)}`;
  }
  return `#0F172A`;
}
function io(e) {
  return Math.round(e).toString(16).padStart(2, `0`).toUpperCase();
}
var ao,
  oo = e(() => {
    (y(), Qa(), (ao = f()));
  });
function so({ label: e, children: t, className: n }) {
  return (0, co.jsxs)(`label`, {
    className: a(`grid grid-cols-[72px_minmax(0,1fr)] items-center gap-2 text-xs`, n),
    children: [
      (0, co.jsx)(`span`, {
        className: `text-token-text-tertiary truncate font-medium`,
        children: e,
      }),
      (0, co.jsx)(`div`, { className: `min-w-0`, children: t }),
    ],
  });
}
var co,
  lo = e(() => {
    (y(), (co = f()));
  });
function uo({ className: e, ...t }) {
  return (0, fo.jsx)(`svg`, {
    "aria-hidden": `true`,
    fill: `none`,
    viewBox: `0 0 16 16`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: a(`size-4`, e),
    ...t,
    children: (0, fo.jsx)(`path`, {
      d: `M6 4L10 8L6 12`,
      stroke: `currentColor`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      strokeWidth: `1.5`,
    }),
  });
}
var fo,
  po = e(() => {
    (y(), (fo = f()));
  });
function mo({ title: e, icon: t, defaultOpen: n = !0, children: r, className: i }) {
  let [o, s] = (0, ho.useState)(n);
  return (0, go.jsxs)(`details`, {
    open: o,
    onToggle: (e) => {
      s(e.currentTarget.open);
    },
    className: a(`group`, i),
    children: [
      (0, go.jsxs)(`summary`, {
        className: `text-token-text-primary flex h-6 cursor-pointer list-none items-center gap-2 text-sm font-semibold [&::-webkit-details-marker]:hidden`,
        children: [
          t ? (0, go.jsx)(t, { className: `size-4` }) : null,
          (0, go.jsx)(`span`, { className: `min-w-0 flex-1 truncate`, children: e }),
          (0, go.jsx)(`span`, {
            className: a(
              `text-token-text-secondary inline-flex size-7 shrink-0 items-center justify-center transition-colors`,
              Ya,
            ),
            children: (0, go.jsx)(uo, {
              className: `size-4 transition-transform duration-150 group-open:rotate-90`,
            }),
          }),
        ],
      }),
      (0, go.jsx)(`div`, { className: `flex flex-col gap-4 pt-4`, children: r }),
    ],
  });
}
var ho,
  go,
  _o = e(() => {
    (y(), (ho = t(n())), Qa(), po(), (go = f()));
  });
function vo() {
  let e = Nr(),
    t = Gr().inspector.selectedElement,
    n = (0, yo.useCallback)(
      (t) => {
        e.updateSelectedElementStyle(t);
      },
      [e],
    );
  return { fill: t?.fill ?? null, line: t?.line ?? null, selectedElement: t, updateStyle: n };
}
var yo,
  bo = e(() => {
    ((yo = t(n())), Qr());
  });
function xo() {
  let { fill: e, line: t, selectedElement: n, updateStyle: r } = vo();
  return !n || (!e && !t)
    ? null
    : (0, So.jsxs)(mo, {
        title: `Appearance`,
        defaultOpen: !0,
        children: [
          e
            ? (0, So.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [
                  (0, So.jsx)(so, {
                    label: `Fill`,
                    children: (0, So.jsx)(no, {
                      value: e.color,
                      ariaLabel: `Fill color`,
                      onChange: (e) => {
                        r({ fillColor: e });
                      },
                    }),
                  }),
                  (0, So.jsx)(so, {
                    label: `Fill opacity`,
                    children: (0, So.jsx)(`input`, {
                      "aria-label": `Fill opacity`,
                      type: `number`,
                      min: 0,
                      max: 100,
                      value: e.opacityPct,
                      onChange: (e) => {
                        let t = e.currentTarget.valueAsNumber;
                        Number.isFinite(t) && r({ fillOpacityPct: t });
                      },
                      className: Za,
                    }),
                  }),
                ],
              })
            : null,
          t
            ? (0, So.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [
                  (0, So.jsx)(so, {
                    label: `Stroke`,
                    children: (0, So.jsx)(no, {
                      value: t.color,
                      ariaLabel: `Stroke color`,
                      onChange: (e) => {
                        r({ strokeColor: e });
                      },
                    }),
                  }),
                  (0, So.jsx)(so, {
                    label: `Stroke opacity`,
                    children: (0, So.jsx)(`input`, {
                      "aria-label": `Stroke opacity`,
                      type: `number`,
                      min: 0,
                      max: 100,
                      value: t.opacityPct,
                      onChange: (e) => {
                        let t = e.currentTarget.valueAsNumber;
                        Number.isFinite(t) && r({ strokeOpacityPct: t });
                      },
                      className: Za,
                    }),
                  }),
                  (0, So.jsx)(so, {
                    label: `Stroke width`,
                    children: (0, So.jsx)(`input`, {
                      "aria-label": `Stroke width`,
                      type: `number`,
                      min: 0,
                      value: Math.round(t.width),
                      onChange: (e) => {
                        let t = e.currentTarget.valueAsNumber;
                        Number.isFinite(t) && r({ strokeWidth: t });
                      },
                      className: Za,
                    }),
                  }),
                  (0, So.jsx)(so, {
                    label: `Stroke style`,
                    children: (0, So.jsx)($a, {
                      ariaLabel: `Stroke style`,
                      value: t.style,
                      options: Co,
                      onChange: (e) => {
                        r({ strokeStyle: e });
                      },
                    }),
                  }),
                ],
              })
            : null,
        ],
      });
}
var So,
  Co,
  wo = e(() => {
    (to(),
      oo(),
      lo(),
      _o(),
      Qa(),
      bo(),
      (So = f()),
      (Co = [
        { value: `solid`, label: `Solid` },
        { value: `dashed`, label: `Dash` },
        { value: `dotted`, label: `Dot` },
        { value: `dash-dot`, label: `D-Dot` },
        { value: `dash-dot-dot`, label: `D-2` },
      ]));
  });
function To({ onClose: e }) {
  let { selectedElement: t } = Ua(),
    { textStyle: n, updateTextStyle: r } = Ka(),
    i = t == null ? `Format` : n && t.kind === `shape` ? `Text` : jo(t.kind);
  return (0, Q.jsxs)(`section`, {
    "aria-label": i,
    className: `flex max-h-full w-60 flex-col gap-4 overflow-x-hidden overflow-y-auto rounded-3xl border border-token-border-default bg-token-main-surface-primary p-4 shadow-xl`,
    children: [
      (0, Q.jsxs)(`header`, {
        className: `flex h-6 shrink-0 items-center justify-between gap-3`,
        children: [
          (0, Q.jsx)(`h2`, {
            className: `truncate text-base font-semibold text-token-text-primary`,
            children: i,
          }),
          (0, Q.jsx)(`button`, {
            type: `button`,
            "aria-label": `Close ${i}`,
            onClick: e,
            className: `flex size-6 cursor-pointer items-center justify-center rounded-full bg-token-bg-tertiary text-token-text-secondary transition-transform duration-100 hover:bg-token-bg-secondary hover:text-token-text-primary active:scale-[0.97]`,
            children: (0, Q.jsx)(ce, { className: `size-4` }),
          }),
        ],
      }),
      (0, Q.jsx)(
        `div`,
        {
          className: `popcorn-inspector-panel-content`,
          children:
            t == null
              ? (0, Q.jsx)(`p`, {
                  className: `select-none text-sm text-token-text-secondary`,
                  children: `Select a component to change its styles`,
                })
              : n
                ? (0, Q.jsxs)(`div`, {
                    className: `flex flex-col gap-4`,
                    children: [
                      (0, Q.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `text-sm text-token-text-secondary`,
                            children: `Typography`,
                          }),
                          (0, Q.jsx)(Do, {
                            fontSize: n.fontSize,
                            onChange: (e) => {
                              r({ textFontSize: e });
                            },
                          }),
                          (0, Q.jsxs)(`div`, {
                            className: `grid grid-cols-4 gap-2`,
                            children: [
                              (0, Q.jsx)(Ao, {
                                label: `Bold`,
                                pressed: n.bold,
                                onClick: () => {
                                  r({ textBold: !n.bold });
                                },
                                children: (0, Q.jsx)(`span`, {
                                  className: `text-base font-bold`,
                                  children: `B`,
                                }),
                              }),
                              (0, Q.jsx)(Ao, {
                                label: `Italic`,
                                pressed: n.italic,
                                onClick: () => {
                                  r({ textItalic: !n.italic });
                                },
                                children: (0, Q.jsx)(`span`, {
                                  className: `text-base italic`,
                                  children: `I`,
                                }),
                              }),
                              (0, Q.jsx)(Ao, {
                                disabled: !0,
                                label: `Strikethrough`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `text-base line-through`,
                                  children: `S`,
                                }),
                              }),
                              (0, Q.jsx)(Ao, {
                                label: `Underline`,
                                pressed: n.underline,
                                onClick: () => {
                                  r({ textUnderline: !n.underline });
                                },
                                children: (0, Q.jsx)(Ba, { className: `size-4` }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `text-sm text-token-text-secondary`,
                            children: `Color`,
                          }),
                          (0, Q.jsx)(Eo, {
                            color: n.color,
                            onChange: (e) => {
                              r({ textColor: e });
                            },
                          }),
                        ],
                      }),
                      (0, Q.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [
                          (0, Q.jsx)(`div`, {
                            className: `text-sm text-token-text-secondary`,
                            children: `Layout`,
                          }),
                          (0, Q.jsx)(`div`, {
                            className: `grid grid-cols-4 gap-2`,
                            children: Po.map(({ value: e, label: t, icon: i }) =>
                              (0, Q.jsx)(
                                Ao,
                                {
                                  label: t,
                                  pressed: n.alignment === e,
                                  onClick: () => {
                                    r({ textAlignment: e });
                                  },
                                  children: (0, Q.jsx)(i, { className: `size-4` }),
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  })
                : t.fill != null || t.line != null
                  ? (0, Q.jsx)(xo, {})
                  : (0, Q.jsx)(`p`, {
                      className: `select-none text-sm text-token-text-secondary`,
                      children: `No editable styles are available for this component.`,
                    }),
        },
        t?.id ?? `empty`,
      ),
    ],
  });
}
function Eo({ color: e, onChange: t }) {
  let n = No.find((t) => t.value.toUpperCase() === e.toUpperCase()) ?? No[0];
  return (0, Q.jsxs)(l, {
    children: [
      (0, Q.jsx)(d, {
        asChild: !0,
        children: (0, Q.jsxs)(`button`, {
          type: `button`,
          className: `flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`,
          children: [
            (0, Q.jsx)(`span`, {
              "aria-hidden": !0,
              className: `size-4 rounded-full border border-token-border-light`,
              style: { backgroundColor: e },
            }),
            (0, Q.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-token-text-primary`,
              children: n.label,
            }),
            (0, Q.jsx)(T, { className: `size-3 text-token-text-secondary` }),
          ],
        }),
      }),
      (0, Q.jsx)(te, {
        children: (0, Q.jsx)(p, {
          align: `end`,
          sideOffset: 6,
          className: `z-50 rounded-xl border border-token-border-default bg-token-main-surface-primary p-3 shadow-xl`,
          children: (0, Q.jsx)(`div`, {
            className: `grid grid-cols-4 gap-2`,
            children: No.map((e) => {
              let r = e.value === n.value;
              return (0, Q.jsx)(
                c,
                {
                  asChild: !0,
                  children: (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": e.label,
                    "aria-pressed": r,
                    onClick: () => t(e.value),
                    className: a(
                      `border-token-border-light size-7 cursor-pointer rounded-lg border`,
                      r ? `ring-2 ring-text-info` : `hover:ring-2 hover:ring-token-border-light`,
                    ),
                    style: { backgroundColor: e.value },
                  }),
                },
                e.value,
              );
            }),
          }),
        }),
      }),
    ],
  });
}
function Do({ fontSize: e, onChange: t }) {
  let n = ko(e);
  return (0, Q.jsxs)(l, {
    children: [
      (0, Q.jsx)(d, {
        asChild: !0,
        children: (0, Q.jsxs)(`button`, {
          type: `button`,
          className: `flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg border border-token-border-default px-2 text-left text-sm hover:bg-primary-ghost-hover data-[state=open]:bg-primary-ghost-hover`,
          children: [
            (0, Q.jsx)(`span`, { className: `text-token-text-secondary`, children: n.shortLabel }),
            (0, Q.jsx)(`span`, {
              className: `min-w-0 flex-1 truncate text-token-text-primary`,
              children: n.label,
            }),
            (0, Q.jsx)(T, { className: `size-3 text-token-text-secondary` }),
          ],
        }),
      }),
      (0, Q.jsx)(te, {
        children: (0, Q.jsx)(p, {
          align: `end`,
          sideOffset: 6,
          className: `z-50`,
          children: (0, Q.jsx)(Oo, { fontSize: e, onChange: t }),
        }),
      }),
    ],
  });
}
function Oo({ fontSize: e, onChange: t }) {
  let n = ko(e);
  return (0, Q.jsx)(`div`, {
    className: `w-52 rounded-xl border border-token-border-default bg-token-main-surface-primary p-1 shadow-xl`,
    children: Mo.map((e) => {
      let r = e.id === n.id;
      return (0, Q.jsx)(
        c,
        {
          asChild: !0,
          children: (0, Q.jsxs)(`button`, {
            type: `button`,
            "aria-pressed": r,
            onClick: () => t(e.fontSize),
            className: a(
              `flex h-7 w-full cursor-pointer items-center gap-2 rounded-lg px-2 text-left text-sm`,
              r ? `bg-info-soft text-info` : `hover:bg-primary-ghost-hover`,
            ),
            children: [
              (0, Q.jsx)(`span`, {
                "aria-hidden": !0,
                className: a(`w-5`, r ? `text-info` : `text-token-text-secondary`),
                children: e.shortLabel,
              }),
              (0, Q.jsx)(`span`, { children: e.label }),
            ],
          }),
        },
        e.id,
      );
    }),
  });
}
function ko(e) {
  return Mo.reduce((t, n) => (Math.abs(n.fontSize - e) < Math.abs(t.fontSize - e) ? n : t));
}
function Ao({ children: e, disabled: t = !1, label: n, pressed: r = !1, onClick: i }) {
  return (0, Q.jsx)(`button`, {
    type: `button`,
    "aria-label": n,
    "aria-pressed": r,
    "data-state": r ? `on` : `off`,
    disabled: t,
    onClick: i,
    className: a(
      `border-token-border-default flex h-7 min-w-0 cursor-pointer items-center justify-center rounded-lg border disabled:cursor-not-allowed disabled:opacity-40`,
      r ? `bg-info-soft text-info` : `text-default enabled:hover:bg-primary-ghost-hover`,
    ),
    children: e,
  });
}
function jo(e) {
  return e ? `${e.charAt(0).toUpperCase()}${e.slice(1)}` : `Element`;
}
var Q,
  Mo,
  No,
  Po,
  Fo = e(() => {
    (g(),
      y(),
      j(),
      Mt(),
      Kt(),
      Ot(),
      Bt(),
      Ha(),
      Ga(),
      Ja(),
      wo(),
      Xt(),
      (Q = f()),
      (Mo = [
        { id: `heading-1`, shortLabel: `H1`, label: `Heading 1`, fontSize: 64 },
        { id: `heading-2`, shortLabel: `H2`, label: `Heading 2`, fontSize: 48 },
        { id: `heading-3`, shortLabel: `H3`, label: `Heading 3`, fontSize: 36 },
        { id: `body`, shortLabel: `P`, label: `Body`, fontSize: 24 },
        { id: `caption`, shortLabel: `S`, label: `Caption`, fontSize: 16 },
      ]),
      (No = [
        { label: `Black`, value: `#000000` },
        { label: `Gray`, value: `#64748B` },
        { label: `Red`, value: `#EF4444` },
        { label: `Orange`, value: `#F97316` },
        { label: `Yellow`, value: `#EAB308` },
        { label: `Green`, value: `#22C55E` },
        { label: `Blue`, value: `#3B82F6` },
        { label: `Purple`, value: `#A855F7` },
      ]),
      (Po = [
        { value: `left`, label: `Align left`, icon: $t },
        { value: `center`, label: `Align center`, icon: Ht },
        { value: `right`, label: `Align right`, icon: Et },
        { value: `justify`, label: `Justify`, icon: At },
      ]));
  });
function Io({
  controller: e,
  editToolbarRequested: t,
  isInspectorAvailable: n,
  isInspectorOpen: r,
  selectedElement: i,
  selectionBounds: o,
  selectionActions: s,
  shortcutScopeElement: l,
  onDismissEditToolbar: u,
  onToggleInspector: d,
}) {
  let [f, p] = (0, Ro.useState)(``),
    [m, h] = (0, Ro.useState)(!1),
    g = (0, Ro.useRef)(!1),
    _ = i?.text,
    v = _ != null || i?.fill != null || i?.line != null,
    ee = n && v,
    te = s?.onAskForEditShown,
    y = t && !m && o != null && s != null;
  (0, Ro.useEffect)(() => {
    !y || g.current || te == null || ((g.current = !0), te());
  }, [y, te]);
  let b = (0, Ro.useCallback)(
    (e) => {
      s && (s.startAskChat(e), h(!0));
    },
    [s],
  );
  st({ enabled: y, onClick: b, shortcutScopeElement: l });
  let ne = () => {
      (p(``), h(!1), u());
    },
    re = (e, t) => {
      !s ||
        !f.trim() ||
        ((t ? s.defaultSubmitMode !== `saved` : s.defaultSubmitMode === `saved`) &&
          s.savedSubmitDisabled) ||
        (s.submitAskChat(f, e, t), p(``), h(!1), u());
    },
    ie = [
      ...(s
        ? [
            {
              kind: `button`,
              id: `ask-chat`,
              label: `Ask Chat`,
              subLabel: (0, Bo.jsx)(`span`, {
                className: `text-[11px] leading-none text-token-text-tertiary`,
                children: lt(),
              }),
              onClick: () => b(`ask_codex_button`),
            },
            ...(_ != null || ee ? [{ kind: `separator`, id: `ask-chat-separator` }] : []),
          ]
        : []),
      ...(_
        ? [
            {
              kind: `button`,
              id: `bold`,
              label: `Bold`,
              icon: E,
              hideLabel: !0,
              isActive: _.bold,
              onClick: () => {
                e.updateSelectedElementStyle({ textBold: !_.bold });
              },
            },
            {
              kind: `popover`,
              id: `text-color`,
              label: `Text color`,
              hideLabel: !0,
              subLabel: (0, Bo.jsx)(`span`, {
                "aria-hidden": !0,
                className: `block size-4 rounded-full border border-black/10`,
                style: { backgroundColor: _.color },
              }),
              align: `center`,
              content: (0, Bo.jsxs)(`div`, {
                className: `rounded-xl border border-token-border-light bg-token-bg-primary p-3 shadow-xl`,
                children: [
                  (0, Bo.jsx)(`p`, {
                    className: `mb-2 text-xs font-medium text-token-text-secondary`,
                    children: `Text color`,
                  }),
                  (0, Bo.jsx)(`div`, {
                    className: `grid grid-cols-4 gap-2`,
                    children: Vo.map((t) => {
                      let n = _.color.toUpperCase() === t.value;
                      return (0, Bo.jsx)(
                        c,
                        {
                          asChild: !0,
                          children: (0, Bo.jsx)(`button`, {
                            type: `button`,
                            "aria-label": t.label,
                            "aria-pressed": n,
                            className: a(
                              `focus-visible:ring-token-focus size-7 cursor-pointer rounded-md border border-black/10 focus:outline-none focus-visible:ring-2`,
                              n
                                ? `ring-2 ring-text-info`
                                : `hover:ring-2 hover:ring-token-border-light`,
                            ),
                            style: { backgroundColor: t.value },
                            onClick: () => {
                              e.updateSelectedElementStyle({ textColor: t.value });
                            },
                          }),
                        },
                        t.value,
                      );
                    }),
                  }),
                ],
              }),
            },
            {
              kind: `popover`,
              id: `text-size`,
              label: `Text size`,
              icon: Lo,
              hideLabel: !0,
              align: `center`,
              content: (0, Bo.jsx)(Oo, {
                fontSize: _.fontSize,
                onChange: (t) => {
                  e.updateSelectedElementStyle({ textFontSize: t });
                },
              }),
            },
          ]
        : []),
      ...(ee
        ? [
            ...(_ ? [{ kind: `separator`, id: `style-picker-separator` }] : []),
            {
              kind: `button`,
              id: `style-picker`,
              label: `Open style picker`,
              icon: x,
              hideLabel: !0,
              isActive: r,
              onClick: d,
            },
          ]
        : []),
    ],
    ae = m
      ? (0, Bo.jsxs)(`form`, {
          className: `flex h-full w-full items-center gap-2 px-1`,
          onSubmit: (e) => {
            (e.preventDefault(), e.stopPropagation(), re(`button`, !1));
          },
          onKeyDown: (e) => {
            if ((e.stopPropagation(), e.key === `Enter` && !e.nativeEvent.isComposing)) {
              (e.preventDefault(), re(`keyboard`, e.metaKey || e.ctrlKey));
              return;
            }
            if (e.key !== `Escape`) return;
            e.preventDefault();
            let t = e.currentTarget.closest(`[role='toolbar']`);
            ((0, zo.flushSync)(() => h(!1)),
              t?.querySelector(`button[data-toolbar-action='ask-chat']`)?.focus());
          },
          children: [
            (0, Bo.jsx)(`input`, {
              autoFocus: !0,
              "aria-label": `Ask Chat about this selection`,
              className: `min-w-0 flex-1 bg-transparent text-sm text-token-text-primary outline-none placeholder:text-token-text-tertiary`,
              placeholder: `Ask Chat about this selection`,
              value: f,
              onChange: (e) => p(e.currentTarget.value),
            }),
            (0, Bo.jsx)(`button`, {
              type: `submit`,
              "aria-label": `Send to Chat`,
              disabled: !f.trim() || (s?.defaultSubmitMode === `saved` && s.savedSubmitDisabled),
              className: `flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-token-text-primary text-token-bg-primary transition-transform duration-100 hover:opacity-80 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:active:scale-100`,
              children: (0, Bo.jsx)(je, { className: `size-4` }),
            }),
          ],
        })
      : null;
  return (0, Bo.jsx)(jt, {
    ariaLabel: m ? `Ask Chat` : `Selection actions`,
    bounds: o,
    isVisible: t,
    items: ie,
    overlayContent: ae,
    overlayVisible: m,
    onKeyDown: (e) => {
      e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), ne());
    },
  });
}
function Lo({ className: e }) {
  return (0, Bo.jsx)(`span`, {
    "aria-hidden": !0,
    className: a(`text-sm font-medium`, e),
    children: `H1`,
  });
}
var Ro,
  zo,
  Bo,
  Vo,
  Ho = e(() => {
    (g(),
      y(),
      (Ro = t(n())),
      (zo = t(h())),
      tn(),
      j(),
      Je(),
      Fo(),
      (Bo = f()),
      (Vo = [
        { label: `Black`, value: `#000000` },
        { label: `Gray`, value: `#64748B` },
        { label: `Red`, value: `#EF4444` },
        { label: `Orange`, value: `#F97316` },
        { label: `Yellow`, value: `#EAB308` },
        { label: `Green`, value: `#22C55E` },
        { label: `Blue`, value: `#3B82F6` },
        { label: `Purple`, value: `#A855F7` },
      ]));
  }),
  Uo,
  Wo = e(() => {
    Uo = `popcorn-presentation-inspector`;
  });
function Go() {
  return {
    id: `popcorn-presentation-inspector-plugin`,
    panels: [
      {
        id: Uo,
        title: `Format`,
        defaultOpen: !1,
        widthPx: 240,
        snapshotScope: `inspector`,
        render: ({ panelControls: e }) =>
          (0, Ko.jsx)(To, {
            onClose: () => {
              e.closePanel(Uo);
            },
          }),
      },
    ],
    stageOverlays: [
      {
        id: `popcorn-presentation-inspector-pill-overlay`,
        render: ({
          controller: e,
          snapshot: t,
          selectionBounds: n,
          panelControls: r,
          editToolbarRequested: i,
          dismissEditToolbar: a,
          focusStage: o,
          shortcutScopeElement: s,
          selectionActions: c,
        }) =>
          (0, Ko.jsx)(
            Io,
            {
              controller: e,
              editToolbarRequested: i,
              isInspectorAvailable: r.isPanelAvailable(Uo),
              isInspectorOpen: r.isPanelOpen(Uo),
              selectedElement: t.inspector.selectedElement,
              selectionBounds: n,
              selectionActions: c,
              shortcutScopeElement: s,
              onDismissEditToolbar: a,
              onToggleInspector: () => {
                (r.togglePanel(Uo), o());
              },
            },
            t.selectedElementIds.length === 1
              ? JSON.stringify([
                  t.slideIds[t.selectedSlideIdx] ?? t.selectedSlideIdx,
                  t.primarySelectedElementId,
                ])
              : `no-single-selection`,
          ),
      },
    ],
  };
}
var Ko,
  qo = e(() => {
    (Ho(), Fo(), Wo(), (Ko = f()));
  }),
  Jo = e(() => {
    qo();
  });
function Yo({
  ref: e,
  className: t,
  externalCrdtUpdates: n,
  headerTitleContent: r,
  headerRightContent: i,
  headerCenterContent: o,
  commentsSidebarContent: s,
  commentsSidebarOpen: c,
  onCommentsSidebarOpenChange: l,
  selectedCommentThreadId: u,
  hoveredCommentThreadId: d,
  onSelectedCommentThreadChange: f,
  zoomToFitLabel: p,
  renderHeaderZoomControl: m,
  initialCrdtState: h,
  initialPresentationProto: g,
  initialSourceBytes: _,
  initialSourceFormat: v = `pptx`,
  initialSelectedSlideIdx: ee,
  initialZoom: te,
  commentControllerRef: y,
  onCommentThreadsChange: b,
  onImportReady: ne,
  onImportError: re,
  onCrdtDrain: ie,
  onCrdtDrainTimeout: oe,
  onCrdtUpdate: se,
  onPresentationEdit: ce,
  onInteractionAttempt: x,
  pendingImageGenerations: le = [],
  resolveImageHydrationAssets: S,
  title: ue = `codex-popcorn-demo.pptx`,
  theme: de = `codex`,
  isEditing: fe = !1,
  hideSpeakerNotes: pe = !1,
  navigationCommand: C,
  reviewTools: w,
  onHyperlinkClick: T,
  annotationsEnabled: E = !1,
  drawingAnnotationsEnabled: D = !1,
  enablePageNavigation: O,
  artifactSearchEnabled: me = !1,
  commentThreadsEnabled: he = !1,
  workerFactory: ge,
}) {
  let _e = wt({ initialCrdtState: h, externalCrdtUpdates: n }),
    ve = (0, $.useRef)(g),
    ye = (0, $.useRef)(null),
    be = () =>
      new ar({
        initialCrdtState: _e.initialCrdtState,
        initialSelectedSlideIdx: ee,
        initialZoom: te,
        presentationProto: _ == null ? (g ?? Xo().toProto()) : void 0,
        bootstrapSource: _ == null ? void 0 : { kind: `source-bytes`, format: v, bytes: Oe(_) },
        onImportReady: ne,
        onImportError: re,
        workerFactory: ge,
      }),
    xe = (0, $.useRef)(null),
    k = (0, $.useRef)(ie);
  k.current = ie;
  let Se = (0, $.useRef)(oe);
  Se.current = oe;
  let Ce = (0, $.useRef)({
      dispose: (e) => {
        let t = xe.current;
        if (t == null) {
          e.dispose();
          return;
        }
        let n;
        Promise.race([
          t.then(() => !1),
          new Promise((e) => {
            n = setTimeout(() => e(!0), ns);
          }),
        ]).then(
          (t) => {
            (clearTimeout(n), t && Se.current?.(), e.dispose());
          },
          () => {
            (clearTimeout(n), e.dispose());
          },
        );
      },
    }),
    A = (0, $.useRef)((e) => {
      xe.current = Promise.all([e, k.current?.(e)]).then(() => void 0);
    }),
    j = ae(void 0, be, Ce.current);
  (0, $.useImperativeHandle)(e, () => ({
    flushEdits: async () => {
      await j?.exportPresentationProto();
    },
  }));
  let M = (0, $.useRef)(0),
    { crdtPublishingReady: N, restoreState: P } = Wt({
      artifactLabel: `Presentation`,
      controller: j,
      externalCrdtUpdates: _e.externalCrdtUpdates,
      onCrdtDrain: A.current,
      onCrdtUpdate:
        ce == null
          ? se
          : (e) => {
              (j != null && ce(() => j.exportPresentationProto()), se?.(e));
            },
    }),
    we = (0, $.useMemo)(() => Qo(le), [le]),
    Te = (0, $.useMemo)(() => $o(we), [we]);
  return (
    (0, $.useEffect)(() => {
      if (!(!he || y == null))
        return (
          (y.current = j),
          () => {
            y.current === j && (y.current = null);
          }
        );
    }, [y, he, j]),
    (0, $.useEffect)(() => {
      if (!he || j == null || b == null) return;
      let e,
        t = () => {
          let t = j.getState().commentThreads;
          t == null || t === e || ((e = t), b(t));
        };
      return (t(), j.subscribe(t));
    }, [he, j, b]),
    (0, $.useEffect)(() => {
      j && ve.current !== g && ((ve.current = g), j.replaceFromProto(g ?? Xo().toProto()));
    }, [j, g]),
    (0, $.useEffect)(() => {
      if (!j || C == null) return;
      let e = () => {
        if (C.requestId === ye.current) return !0;
        let e = null;
        if (C.slideId != null) {
          let t = j.getSnapshot().slideIds.indexOf(C.slideId);
          t >= 0 && (e = t);
        }
        return (
          e == null && C.slideNumber != null && (e = C.slideNumber - 1),
          e == null
            ? C.slideId == null
            : ((ye.current = C.requestId),
              j.setSelectedSlideIdx(e),
              j.setSelectedElementId(C.objectId ?? null),
              !0)
        );
      };
      if (e()) return;
      let t = j.subscribe(() => {
        e() && t();
      });
      return t;
    }, [j, C]),
    (0, $.useEffect)(() => {
      if (j && S)
        return j.subscribeImageHydrationRequests((e) => {
          let t = M.current + 1;
          ((M.current = t),
            S(e)
              .then((e) => {
                if (!(M.current !== t || e.length === 0)) return j.hydrateImageAssets(e);
              })
              .catch(() => {}));
        });
    }, [j, S]),
    j
      ? (0, es.jsxs)(`section`, {
          className: a(`no-drag relative h-full min-h-0 bg-token-bg-primary`, t),
          style: Zt(de),
          "data-codex-popcorn-editor": !0,
          "data-testid": `popcorn-electron-presentation-panel`,
          children: [
            (0, es.jsx)(da, {
              className: `h-full min-h-0`,
              controller: j,
              ...(he
                ? {
                    commentsSidebarContent: s,
                    commentsSidebarOpen: c,
                    hoveredCommentThreadId: d,
                    onCommentsSidebarOpenChange: l,
                    onSelectedCommentThreadChange: f,
                    selectedCommentThreadId: u,
                  }
                : {}),
              headerTitleContent: r,
              headerCenterContent: o,
              headerRightContent:
                we.length > 0
                  ? (0, es.jsxs)(es.Fragment, {
                      children: [(0, es.jsx)(Zo, { count: we.length }), i],
                    })
                  : i,
              renderHeaderZoomControl: m,
              zoomToFitLabel: p,
              renderSlideThumbnailOverlay: (e) => {
                let t = Te[e] ?? 0;
                return t === 0
                  ? null
                  : (0, es.jsx)(`div`, {
                      "data-testid": `popcorn-pending-image-thumb-${e}`,
                      className: `absolute top-2 right-2 rounded-full bg-amber-100/95 px-2 py-0.5 text-[11px] font-semibold text-amber-900 shadow-sm`,
                      children: t,
                    });
              },
              slideThumbnailPlacement: `responsive`,
              plugins: ts,
              title: ue,
              theme: de,
              isEditing: fe && N,
              onInteractionAttempt: x,
              hideSpeakerNotes: pe,
              reviewTools: w,
              onHyperlinkClick: T,
              annotationsEnabled: E,
              drawingAnnotationsEnabled: D,
              enablePageNavigation: O,
              artifactSearchEnabled: me,
              commentThreadsEnabled: he,
            }),
            (0, es.jsx)(W, { artifactLabel: `Presentation`, restoreState: P }),
          ],
        })
      : null
  );
}
function Xo() {
  let e = b.create(),
    t = e.slides.add();
  t.background.fill = `#FFFFFF`;
  let n = t.shapes.add({
    geometry: `textbox`,
    position: { left: 140, top: 188, width: 1e3, height: 88 },
  });
  ((n.text = `Untitled presentation`),
    (n.text.fontSize = 30),
    (n.text.bold = !0),
    (n.text.alignment = `center`),
    (n.text.verticalAlignment = `middle`),
    (n.text.color = `#111111`));
  let r = t.shapes.add({
    geometry: `textbox`,
    position: { left: 220, top: 300, width: 840, height: 56 },
  });
  return (
    (r.text = `Import a presentation to replace this placeholder.`),
    (r.text.fontSize = 18),
    (r.text.alignment = `center`),
    (r.text.verticalAlignment = `middle`),
    (r.text.color = `#666666`),
    e
  );
}
function Zo({ count: e }) {
  return (0, es.jsx)(`div`, {
    "data-testid": `popcorn-pending-image-summary`,
    className: `rounded-full bg-amber-100/90 px-3 py-1 text-xs font-semibold text-amber-900`,
    children: e === 1 ? `1 image pending` : `${e} images pending`,
  });
}
function Qo(e) {
  return e.flatMap((e) =>
    e.status === `failed` ||
    e.target.type !== `presentation` ||
    typeof e.target.aid != `string` ||
    !e.target.aid ||
    !e.slideId ||
    !e.elementId
      ? []
      : [{ requestId: e.requestId, slideId: e.slideId, elementId: e.elementId }],
  );
}
function $o(e) {
  let t = {};
  for (let n of e) t[n.slideId] = (t[n.slideId] ?? 0) + 1;
  return t;
}
var $, es, ts, ns;
e(() => {
  (ne(),
    y(),
    ($ = t(n())),
    za(),
    or(),
    Jo(),
    N(),
    oe(),
    Pt(),
    Ut(),
    (es = f()),
    (ts = [Go()]),
    (ns = 5e3));
})();
export { Yo as PopcornElectronPresentationPanel };
//# sourceMappingURL=PopcornElectronPresentationPanel-cdef5ec57678.js.map
