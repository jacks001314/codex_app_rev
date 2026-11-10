import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $S as r,
  AO as i,
  AS as a,
  BE as o,
  CJ as s,
  CS as c,
  Cot as l,
  Cz as u,
  DV as d,
  Dz as f,
  FCt as p,
  Fat as m,
  HE as h,
  HNt as g,
  IDt as _,
  Ixt as v,
  MO as y,
  MS as b,
  MV as x,
  Mot as S,
  Mz as C,
  NO as w,
  NV as T,
  Not as E,
  Nz as D,
  PO as O,
  PS as k,
  Pat as A,
  Pxt as j,
  RE as M,
  SJ as N,
  TDt as P,
  TJ as F,
  TO as I,
  Tz as ee,
  UE as L,
  VCt as te,
  VDt as ne,
  VE as R,
  Vxt as z,
  Xot as re,
  Yot as B,
  _Mt as V,
  _O as ie,
  cCt as ae,
  cE as oe,
  cO as H,
  cf as U,
  cz as W,
  fO as G,
  gMt as se,
  gO as ce,
  hrt as le,
  i3 as ue,
  iCt as de,
  jDt as K,
  jO as fe,
  kz as q,
  lCt as pe,
  lO as me,
  mCt as he,
  mO as ge,
  nCt as _e,
  nE as ve,
  oE as ye,
  oO as be,
  r3 as xe,
  sO as Se,
  sf as Ce,
  sz as we,
  t3 as Te,
  tCt as Ee,
  vO as De,
  vrt as Oe,
  vzt as ke,
  wot as Ae,
  wz as je,
  xMt as Me,
  yMt as Ne,
  yzt as Pe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3n as Fe,
  $4 as Ie,
  $Nr as Le,
  $ct as Re,
  $m as ze,
  Brn as Be,
  D3 as Ve,
  DGr as He,
  Dh as Ue,
  Dor as We,
  Ern as Ge,
  F3 as Ke,
  HCn as qe,
  Iur as Je,
  J3 as Ye,
  J5t as Xe,
  JPn as Ze,
  K5t as Qe,
  Lfn as $e,
  O3 as et,
  Oh as tt,
  Oor as nt,
  P3 as rt,
  Q3n as it,
  Q4 as at,
  QNr as ot,
  Qm as st,
  Qtn as ct,
  Rc as lt,
  Urn as ut,
  VGr as dt,
  WCn as ft,
  XMr as pt,
  XPn as mt,
  Xct as ht,
  Zpn as gt,
  Ztn as _t,
  d3 as vt,
  dRr as yt,
  e6n as bt,
  ePr as xt,
  emn as St,
  epn as Ct,
  f3 as wt,
  h3 as Tt,
  i5 as Et,
  iPr as Dt,
  ipn as Ot,
  l3 as kt,
  ltt as At,
  mKr as jt,
  mmr as Mt,
  o5 as Nt,
  pmr as Pt,
  ppn as Ft,
  ptt as It,
  rRr as Lt,
  rpn as Rt,
  rtt as zt,
  sPr as Bt,
  t3 as Vt,
  tNr as Ht,
  tmn as Ut,
  vpn as Wt,
  wrn as Gt,
  xsn as Kt,
  zc as qt,
  zfn as Jt,
} from "./app-initial-5851df3f6cb1.js";
import { Fl as Yt, Nl as Xt, Pl as Zt } from "./app-primary-fe8a450b3b04.js";
import { n as Qt, t as $t } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as en, t as tn } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as nn, t as rn } from "./checkboxes-e2ffcb23d363.js";
import { O as an, k as on, n as sn, t as cn } from "./preview-3e5329112556.js";
import { n as ln, t as un } from "./editor.module-79b8a30b4fbe.js";
import { i as dn, n as fn, r as pn, t as mn } from "./images-7c1b1f09d7e2.js";
import { i as hn, t as gn } from "./presentation-a8c851b59c58.js";
import { a as _n, n as vn, o as yn, t as bn } from "./page-activity-panel-4c5c6ff94e28.js";
import { n as xn, t as Sn } from "./checkpoint-1ecd1fe25b9c.js";
import { i as Cn, n as wn, r as Tn, t as En } from "./editors-6970ffed9531.js";
function Dn(e) {
  let t = (0, On.c)(9),
    { change: n, target: r, view: i } = e,
    a = (0, kn.useRef)(null),
    o,
    s;
  (t[0] !== n || t[1] !== r || t[2] !== i
    ? ((o = () => {
        let e = a.current,
          t = e?.parentElement,
          o = n?.id === `title` ? t?.querySelector(`h1`) : r,
          s = t?.querySelector(`[data-page-reading-column]`);
        if (n == null || o == null || e == null || t == null || s == null) return;
        let c = [o],
          l = i.current;
        n.id !== `title` &&
          n.mode !== `diff` &&
          n.kind !== `removed` &&
          n.after != null &&
          l != null &&
          l.state.doc.nodesBetween(n.from, n.to, (e, t) => {
            let n = l.nodeDOM(t);
            return (n instanceof HTMLElement && c.push(n), !1);
          });
        let u = () => {
          let n = t.getBoundingClientRect(),
            r = o.getBoundingClientRect(),
            i = s.getBoundingClientRect(),
            a = t.currentCSSZoom || 1,
            l = i.left,
            u = i.right,
            d = r.bottom;
          for (let e of c) {
            d = Math.max(d, e.getBoundingClientRect().bottom);
            for (let t of e.querySelectorAll(`[data-page-block-viewport]`)) {
              let e = t.getBoundingClientRect();
              ((l = Math.min(l, e.left)), (u = Math.max(u, e.right)));
            }
          }
          ((e.style.top = `${(r.top - n.top) / a + t.scrollTop}px`),
            (e.style.left = `${(l - n.left) / a + t.scrollLeft}px`),
            (e.style.width = `${(u - l) / a}px`),
            (e.style.height = `${(d - r.top) / a}px`));
        };
        u();
        let d = new ResizeObserver(u);
        return (
          c.forEach((e) => d.observe(e)),
          d.observe(t),
          s.parentElement != null && d.observe(s.parentElement),
          () => d.disconnect()
        );
      }),
      (s = [n, r, i]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = s))
    : ((o = t[3]), (s = t[4])),
    (0, kn.useLayoutEffect)(o, s));
  let c = n == null,
    l,
    u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, An.jsx)(`span`, { className: `absolute -inset-x-2 -inset-y-1 rounded-md bg-text/5` })),
      (u = (0, An.jsx)(`span`, {
        className: `absolute inset-y-0 end-full me-4 w-0.5 rounded-full bg-text-info`,
      })),
      (t[5] = l),
      (t[6] = u))
    : ((l = t[5]), (u = t[6]));
  let d;
  return (
    t[7] === c
      ? (d = t[8])
      : ((d = (0, An.jsxs)(`span`, {
          ref: a,
          className: `pointer-events-none absolute select-none`,
          hidden: c,
          "aria-hidden": !0,
          "data-markdown-copy": `exclude`,
          children: [l, u],
        })),
        (t[7] = c),
        (t[8] = d)),
    d
  );
}
var On, kn, An;
function jn() {
  return (jn = e(() => {
    ((On = ke()), (kn = Pe()), (An = Me()));
  }))();
}
function Mn(e) {
  let t = (0, Pn.c)(16),
    { change: n } = e,
    r = n.after ?? n.before,
    i;
  t[0] === r ? (i = t[1]) : ((i = Nn(r)), (t[0] = r), (t[1] = i));
  let a = i;
  if (n.kind === `added`) {
    let e;
    return (
      t[2] === a
        ? (e = t[3])
        : ((e = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.contentAdded`,
            defaultMessage: `{content, select, paragraph {Paragraph added} heading {Heading added} table {Table added} checklist {Checklist added} list {List added} code {Code added} sections {Sections added} other {Content added}}`,
            description: `Names the kind of content added from the comparison's starting version to the selected version`,
            values: { content: a },
          })),
          (t[2] = a),
          (t[3] = e)),
      e
    );
  }
  if (n.kind === `removed`) {
    let e;
    t[4] === n.before ? (e = t[5]) : ((e = Nn(n.before)), (t[4] = n.before), (t[5] = e));
    let r;
    return (
      t[6] === e
        ? (r = t[7])
        : ((r = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.contentRemoved`,
            defaultMessage: `{content, select, paragraph {Paragraph removed} heading {Heading removed} table {Table removed} checklist {Checklist removed} list {List removed} code {Code removed} sections {Sections removed} other {Content removed}}`,
            description: `Names content that exists in the comparison's starting version but is absent from the selected version; also labels an expandable preview of large removals`,
            values: { content: e },
          })),
          (t[6] = e),
          (t[7] = r)),
      r
    );
  }
  if (
    n.blockIds.length > 1 &&
    n.mode === `before` &&
    (n.before?.type.name === `doc` || n.after?.type.name === `doc`)
  ) {
    let e;
    return (
      t[8] === a
        ? (e = t[9])
        : ((e = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.groupedContentChanged`,
            defaultMessage: `{content, select, sections {Content changed across sections} other {Several passages changed}}`,
            description: `Expandable label for a group of changed Page content shown together; individual block correspondence may be uncertain, so this does not claim a particular movement or replacement`,
            values: { content: a },
          })),
          (t[8] = a),
          (t[9] = e)),
      e
    );
  }
  if (n.formattingRanges.length > 0 && n.mode === `marker`) {
    let e;
    return (
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.inlineFormattingChanged`,
            defaultMessage: `Formatting changed`,
            description: `The highlighted text has different inline formatting, such as bold or italic, without changing its words`,
          })),
          (t[10] = e))
        : (e = t[10]),
      e
    );
  }
  if (n.blockPresentationChanged) {
    if (n.contentChanged) {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Fn.jsx)(_, {
              id: `codex.page.versions.comparison.contentAndLayoutChanged`,
              defaultMessage: `Content and layout changed`,
              description: `Expandable label when a Page block's content and its width, image size, table column width, or code wrapping both changed`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    let e;
    return (
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.layoutChanged`,
            defaultMessage: `Layout changed`,
            description: `Expandable label for a Page block whose width, image size, table column width, or code wrapping changed`,
          })),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  if (n.tableStructureChanged && n.before?.type.name === `table` && n.after?.type.name === `table`) {
    let e;
    return (
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Fn.jsx)(_, {
            id: `codex.page.versions.comparison.tableStructure`,
            defaultMessage: `Table structure changed`,
            description: `Expandable label for a table whose rows, columns, or merged cells changed; opening shows both table versions`,
          })),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  let o = n.before != null && n.after != null && n.before.type !== n.after.type ? `content` : a,
    s;
  return (
    t[14] === o
      ? (s = t[15])
      : ((s = (0, Fn.jsx)(_, {
          id: `codex.page.versions.comparison.contentEdited`,
          defaultMessage: `{content, select, paragraph {Paragraph edited} heading {Heading changed} table {Table changed} checklist {Checklist changed} list {List changed} code {Code changed} sections {Sections changed} other {Content changed}}`,
          description: `Names the kind of Page content that changed; when expandable, opens the exact content before the change alongside the selected content`,
          values: { content: o },
        })),
        (t[14] = o),
        (t[15] = s)),
    s
  );
}
function Nn(e) {
  if (e == null) return `content`;
  if (e.type.name === `doc`)
    return e.content.content.some((e) => e.type.name === `heading`) ? `sections` : `content`;
  if (e.type.name === `paragraph` && e.content.content.some((e) => !e.isText && e.type.name !== `hard_break`))
    return `content`;
  if ([`list`, `ordered_list`].includes(e.type.name)) {
    let t = !1;
    return (e.descendants((e) => ((t ||= e.type.name === `task_list_item`), !t)), t ? `checklist` : `list`);
  }
  return e.type.name === `code_block` ? `code` : e.type.name;
}
var Pn, Fn;
function In() {
  return (In = e(() => {
    ((Pn = ke()), K(), (Fn = Me()));
  }))();
}
function Ln(e) {
  let t = (0, Hn.c)(28),
    { links: r } = e,
    [i, a] = (0, Un.useState)(!1),
    s = (0, Un.useId)(),
    c;
  t[0] !== r.after || t[1] !== r.before
    ? ((c = [...r.before, ...r.after].every(zn)), (t[0] = r.after), (t[1] = r.before), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, J.jsx)(_, {
        id: `codex.page.versions.comparison.linkTargetsChanged`,
        defaultMessage: `Link updated`,
        description: `Opens the previous and new destinations of changed links, relative to the selected comparison direction`,
      })),
      (t[3] = u))
    : (u = t[3]);
  let d = u;
  if (l && r.before.length === 1 && r.after.length === 1) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.fileReferencesChanged`,
          defaultMessage: `File replaced`,
          description: `Opens details of changed file references between Page versions, showing saved filenames instead of internal file IDs`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (d = e));
  } else if (l && r.before.length === 0) {
    let e;
    (t[5] === r.after.length
      ? (e = t[6])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.filesAdded`,
          defaultMessage: `{count, plural, one {File added} other {Files added}}`,
          description: `Opens the saved file references added between the comparison baseline and selected Page version`,
          values: { count: r.after.length },
        })),
        (t[5] = r.after.length),
        (t[6] = e)),
      (d = e));
  } else if (l && r.after.length === 0) {
    let e;
    (t[7] === r.before.length
      ? (e = t[8])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.filesRemoved`,
          defaultMessage: `{count, plural, one {File removed} other {Files removed}}`,
          description: `Opens the saved file references removed between the comparison baseline and selected Page version`,
          values: { count: r.before.length },
        })),
        (t[7] = r.before.length),
        (t[8] = e)),
      (d = e));
  } else if (r.before.length === 0) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.linkAdded`,
          defaultMessage: `Link added`,
          description: `Opens the destination of a hyperlink added to existing Page content`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (d = e));
  } else if (r.after.length === 0) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.linkRemoved`,
          defaultMessage: `Link removed`,
          description: `Opens the original destination of a hyperlink removed from existing Page content`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (d = e));
  } else if (l) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.filesChanged`,
          defaultMessage: `Files changed`,
          description: `Opens saved comparison-version and selected-version file references when several attachments changed in one Page passage`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (d = e));
  }
  let f;
  t[12] === d
    ? (f = t[13])
    : ((f = (0, J.jsx)(h, {
        asChild: !0,
        children: (0, J.jsx)(n, { color: `ghostSecondary`, size: `inline`, children: d }),
      })),
      (t[12] = d),
      (t[13] = f));
  let p;
  t[14] !== l || t[15] !== d || t[16] !== r.after || t[17] !== r.before || t[18] !== i || t[19] !== s
    ? ((p = i
        ? (0, J.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-3 p-2 text-sm`,
            children: [
              (0, J.jsx)(R, { id: s, className: `sr-only`, children: d }),
              l && r.before.length === 1 && r.after.length === 1 && r.before[0].text === r.after[0].text
                ? (0, J.jsx)(`p`, {
                    className: `text-secondary`,
                    children: (0, J.jsx)(_, {
                      id: `codex.page.versions.comparison.sameNameReplacement`,
                      defaultMessage: `The linked file was replaced with a different file of the same name`,
                      description: `Explains why two identical filenames appear in before/after details: the saved file reference was replaced, not merely renamed`,
                    }),
                  })
                : null,
              r.before.length > 0
                ? (0, J.jsx)(Bn, { links: r.before, before: !0, changed: r.after.length > 0, filesOnly: l })
                : null,
              r.after.length > 0
                ? (0, J.jsx)(Bn, { links: r.after, before: !1, changed: r.before.length > 0, filesOnly: l })
                : null,
            ],
          })
        : null),
      (t[14] = l),
      (t[15] = d),
      (t[16] = r.after),
      (t[17] = r.before),
      (t[18] = i),
      (t[19] = s),
      (t[20] = p))
    : (p = t[20]);
  let m;
  t[21] !== p || t[22] !== s
    ? ((m = (0, J.jsx)(o, { "aria-labelledby": s, opaque: !0, onEscapeKeyDown: Rn, children: p })),
      (t[21] = p),
      (t[22] = s),
      (t[23] = m))
    : (m = t[23]);
  let g;
  return (
    t[24] !== i || t[25] !== f || t[26] !== m
      ? ((g = (0, J.jsxs)(M, { open: i, onOpenChange: a, children: [f, m] })),
        (t[24] = i),
        (t[25] = f),
        (t[26] = m),
        (t[27] = g))
      : (g = t[27]),
    g
  );
}
function Rn(e) {
  return e.stopPropagation();
}
function zn(e) {
  let { href: t } = e;
  return Rt(t) != null;
}
function Bn(e) {
  let t = (0, Hn.c)(23),
    { links: n, before: r, changed: i, filesOnly: a } = e,
    o;
  if (a && i && r) {
    let e;
    (t[0] === n.length
      ? (e = t[1])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.previousFiles`,
          defaultMessage: `{count, plural, one {Previous file} other {Previous files}}`,
          description: `Heading for saved file references in the comparison baseline, regardless of the chronological order of the two compared versions`,
          values: { count: n.length },
        })),
        (t[0] = n.length),
        (t[1] = e)),
      (o = e));
  } else if (a && i) {
    let e;
    (t[2] === n.length
      ? (e = t[3])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.newFiles`,
          defaultMessage: `{count, plural, one {New file} other {New files}}`,
          description: `Heading for saved file references in the selected Page version, which is the destination of the comparison even when chronologically older`,
          values: { count: n.length },
        })),
        (t[2] = n.length),
        (t[3] = e)),
      (o = e));
  } else if (a && r) {
    let e;
    (t[4] === n.length
      ? (e = t[5])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.removedFiles`,
          defaultMessage: `{count, plural, one {Removed file} other {Removed files}}`,
          description: `Heading for saved file references removed between the comparison baseline and selected Page version`,
          values: { count: n.length },
        })),
        (t[4] = n.length),
        (t[5] = e)),
      (o = e));
  } else if (a) {
    let e;
    (t[6] === n.length
      ? (e = t[7])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.addedFiles`,
          defaultMessage: `{count, plural, one {Added file} other {Added files}}`,
          description: `Heading for saved file references added between the comparison baseline and selected Page version`,
          values: { count: n.length },
        })),
        (t[6] = n.length),
        (t[7] = e)),
      (o = e));
  } else if (i && r) {
    let e;
    (t[8] === n.length
      ? (e = t[9])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.previousDestinations`,
          defaultMessage: `{count, plural, one {Previous destination} other {Previous destinations}}`,
          description: `Heading for hyperlink destinations in the comparison baseline, regardless of the chronological order of the two compared versions`,
          values: { count: n.length },
        })),
        (t[8] = n.length),
        (t[9] = e)),
      (o = e));
  } else if (i) {
    let e;
    (t[10] === n.length
      ? (e = t[11])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.newDestinations`,
          defaultMessage: `{count, plural, one {New destination} other {New destinations}}`,
          description: `Heading for hyperlink destinations in the selected Page version, which is the destination of the comparison even when chronologically older`,
          values: { count: n.length },
        })),
        (t[10] = n.length),
        (t[11] = e)),
      (o = e));
  } else if (r) {
    let e;
    (t[12] === n.length
      ? (e = t[13])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.removedDestinations`,
          defaultMessage: `{count, plural, one {Removed destination} other {Removed destinations}}`,
          description: `Heading for saved destinations of hyperlinks removed between the comparison baseline and selected Page version`,
          values: { count: n.length },
        })),
        (t[12] = n.length),
        (t[13] = e)),
      (o = e));
  } else {
    let e;
    (t[14] === n.length
      ? (e = t[15])
      : ((e = (0, J.jsx)(_, {
          id: `codex.page.versions.comparison.addedDestinations`,
          defaultMessage: `{count, plural, one {Added destination} other {Added destinations}}`,
          description: `Heading for saved destinations of hyperlinks added between the comparison baseline and selected Page version`,
          values: { count: n.length },
        })),
        (t[14] = n.length),
        (t[15] = e)),
      (o = e));
  }
  let s;
  t[16] === o
    ? (s = t[17])
    : ((s = (0, J.jsx)(`div`, { className: `text-xs text-secondary select-none`, children: o })),
      (t[16] = o),
      (t[17] = s));
  let c;
  t[18] === n ? (c = t[19]) : ((c = n.map(Vn)), (t[18] = n), (t[19] = c));
  let l;
  return (
    t[20] !== s || t[21] !== c
      ? ((l = (0, J.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-1`, children: [s, c] })),
        (t[20] = s),
        (t[21] = c),
        (t[22] = l))
      : (l = t[22]),
    l
  );
}
function Vn(e, t) {
  let { href: n, text: r } = e,
    i = r;
  return (
    (!r || r === n) &&
      (i =
        Rt(n) == null
          ? (0, J.jsx)(_, {
              id: `codex.page.versions.comparison.unnamedLink`,
              defaultMessage: `Linked content`,
              description: `Fallback name for an internal historical link without a readable saved label`,
            })
          : (0, J.jsx)(_, {
              id: `codex.page.versions.comparison.unnamedFile`,
              defaultMessage: `File`,
              description: `Fallback name for a historical file reference without a readable saved filename`,
            })),
    (0, J.jsxs)(
      `div`,
      {
        className: `flex min-w-0 flex-col gap-1`,
        children: [
          /^https?:\/\//iu.test(n)
            ? (0, J.jsx)(`a`, {
                className: `break-words underline`,
                href: n,
                onClick: (e) => mt({ event: e, href: n, initiator: `markdown_link_click` }),
                children: r || n,
              })
            : (0, J.jsx)(`span`, { className: `break-words`, children: i }),
          !/^(?:project-file|library-file|visualize|page|space|chatgpt-conversation):/u.test(n) && n !== r
            ? (0, J.jsx)(`span`, { className: `text-xs break-all text-secondary`, children: n })
            : null,
        ],
      },
      t,
    )
  );
}
var Hn, Un, J;
function Wn() {
  return (Wn = e(() => {
    ((Hn = ke()), (Un = Pe()), K(), Te(), Ze(), L(), Ct(), (J = Me()));
  }))();
}
function Gn(e, t, n) {
  let r = { text: ``, spans: [] },
    i = (e, i) =>
      i > t && n.has(i)
        ? !1
        : !e.isTextblock ||
          (r.spans.length > 0 &&
            (r.text += `
`),
          e.forEach((e, t) => {
            let n = r.text.length;
            ((r.text += e.isText ? (e.text ?? ``) : `￼`),
              r.spans.push({
                start: n,
                end: r.text.length,
                from: i + 1 + t,
                to: i + 1 + t + e.nodeSize,
                marks: e.marks,
              }));
          }),
          !1);
  return (i(e, t) && e.descendants((e, n) => i(e, t + 1 + n)), r);
}
function Kn(e, t) {
  let n =
    e.length === 0 ? [{ value: t.text, added: !0, removed: !1 }] : yt(e, t.text, { maxEditLength: 128 });
  if (n == null) return null;
  let r = [],
    i = 0,
    a = 0,
    o = 0;
  for (let e of n) {
    if (e.removed) continue;
    let n = i + e.value.length;
    if (e.added)
      for (; a < t.spans.length;) {
        let e = t.spans[a];
        if (e.start >= n) break;
        if (e.end > i) {
          let a = e.from + Math.max(0, i - e.start),
            s = e.to - Math.max(0, e.end - n),
            c = r.at(-1),
            l = Math.max(i, e.start);
          (c != null && a - c.to === l - o && t.text.slice(o, l).trim() === ``
            ? (c.to = s)
            : r.push({ from: a, to: s }),
            (o = Math.min(n, e.end)));
        }
        if (e.end > n) break;
        a++;
      }
    i = n;
  }
  return r;
}
function qn(e, t) {
  if (e.text !== t.text) return [];
  let n = [],
    r = 0,
    i = 0;
  for (; r < e.spans.length && i < t.spans.length;) {
    let a = e.spans[r],
      o = t.spans[i],
      s = Math.max(a.start, o.start),
      c = Math.min(a.end, o.end);
    if (s < c && !Jn(a.marks, o.marks)) {
      let e = o.from + s - o.start,
        t = o.to - (o.end - c),
        r = n.at(-1);
      r?.to === e ? (r.to = t) : n.push({ from: e, to: t });
    }
    (a.end <= o.end && r++, o.end <= a.end && i++);
  }
  return n;
}
function Jn(e, t) {
  let n = e.filter(Yn),
    r = t.filter(Yn);
  return n.length === r.length && n.every((e, t) => e.eq(r[t]));
}
function Yn(e) {
  return e.type.name !== `startend` && e.type.name !== `link`;
}
function Xn() {
  return (Xn = e(() => {
    Lt();
  }))();
}
function Zn(e, t) {
  let n = new Map(e.blocks.map((e, t) => [e.id, t])),
    r = new Map(t.blocks.map((e, t) => [e.id, t])),
    i = Qn(
      t.blocks.flatMap(({ id: e }) => {
        let t = n.get(e);
        return t == null ? [] : [{ id: e, index: t }];
      }),
    ),
    a = [];
  for (let r = 0; r < t.blocks.length; r++) {
    let { id: o, unit: s } = t.blocks[r],
      c = n.get(o) ?? null,
      l = c == null ? null : e.blocks[c].unit,
      u = l == null || l.kind !== s.kind || l.markdown !== s.markdown,
      d = l != null && !(0, $n.default)({ ...l, markdown: ``, kind: s.kind }, { ...s, markdown: `` }),
      f = c != null && !i.has(o);
    (u || d || f) &&
      a.push({
        blockId: o,
        beforeIndex: c,
        afterIndex: r,
        contentChanged: u,
        presentationChanged: d,
        moved: f,
      });
  }
  let o = [];
  for (let t = 0; t < e.blocks.length; t++) {
    let n = e.blocks[t].id;
    r.has(n) ||
      o.push({
        blockId: n,
        beforeIndex: t,
        afterIndex: null,
        contentChanged: !0,
        presentationChanged: !1,
        moved: !1,
      });
  }
  return [...a, ...o];
}
function Qn(e) {
  let t = [],
    n = [];
  for (let r = 0; r < e.length; r++) {
    let i = 0,
      a = t.length;
    for (; i < a;) {
      let n = Math.floor((i + a) / 2);
      e[t[n]].index < e[r].index ? (i = n + 1) : (a = n);
    }
    (n.push(i === 0 ? -1 : t[i - 1]), (t[i] = r));
  }
  let r = new Set(),
    i = t.at(-1) ?? -1;
  for (; i >= 0;) (r.add(e[i].id), (i = n[i]));
  return r;
}
var $n;
function er() {
  return (er = e(() => {
    $n = t(g(), 1);
  }))();
}
function tr(e, t) {
  let n = new Map(),
    r = 0,
    i = (e) => {
      let t = e,
        r = n.get(t);
      for (; r != null;) {
        let e = n.get(r);
        (e != null && n.set(t, e), (t = r), (r = e));
      }
      return (t !== e && n.set(e, t), t);
    },
    a = (e, t) => {
      let a = i(e),
        o = i(t);
      a !== o && (n.set(a, o), r++);
    };
  for (let [n, r] of e.blocks) {
    let e = t.blocks.get(n);
    e != null && a(r, e);
  }
  let o = (e) => {
    let t = new Map();
    e.roots.forEach((e, n) => {
      let r = i(e),
        a = t.get(r);
      a == null ? t.set(r, { root: e, start: n, end: n }) : (a.end = n);
    });
    let n = [...t.values()].sort((e, t) => e.start - t.start),
      r = n[0];
    for (let t = 1; t <= n.length; t++) {
      let i = n[t];
      if (i != null && i.start <= r.end) {
        r.end = Math.max(r.end, i.end);
        continue;
      }
      if (r != null) for (let t = r.start; t <= r.end; t++) a(r.root, e.roots[t]);
      r = i;
    }
  };
  for (let n = 0; n < 4; n++) {
    let i = r;
    if ((o(e), o(t), r === i)) break;
    if (n === 3) {
      let n = [...e.roots, ...t.roots];
      for (let e of n) a(n[0], e);
    }
  }
  let s = (e, t) => {
    let n = new Set(t.roots.map(i)),
      r = null;
    for (let t of e.roots) n.has(i(t)) ? (r = null) : (r != null && a(t, r), (r = t));
  };
  (s(e, t), s(t, e));
  let c = new Map();
  for (let [n, r] of [
    [`before`, e],
    [`after`, t],
  ])
    for (let e of r.roots) {
      let t = i(e),
        r = c.get(t);
      (r ?? ((r = { before: [], after: [] }), c.set(t, r)), r[n].push(e));
    }
  let l = new Map();
  for (let [n, r] of c) {
    let i = r.after[0]?.from ?? t.document.content.size;
    l.set(n, {
      before: rr(r.before, e.document),
      after: rr(r.after, t.document),
      from: i,
      to: r.after.at(-1)?.to ?? i,
    });
  }
  let u = new Map();
  for (let n of [e, t])
    for (let [e, t] of n.blocks) {
      let n = l.get(i(t));
      n != null && u.set(e, n);
    }
  return u;
}
function nr(e, t) {
  let n = ir.get(e);
  if (n?.markdown === t) return n.projection;
  let r = vt(
      t.parse(``),
      e.blocks.map(({ unit: e }) => e),
      t,
    ),
    i = wt(r, t, e.blocks.length),
    a = kt(r),
    o = [];
  a.forEach((e, t) => o.push({ from: t, to: t + e.nodeSize, node: e }));
  let s = new Map(),
    c = new Map();
  (i.length !== e.blocks.length || i.some((e) => e == null) || (o.length === 0 && e.blocks.length > 0)) &&
    o.splice(0, o.length, { from: 0, to: a.content.size, node: a });
  let l = 0;
  for (let t = 0; t < e.blocks.length; t++) {
    let n = i[t];
    for (; l + 1 < o.length && o[l + 1].from <= (n?.from ?? 0);) l++;
    let r = o[l];
    (r != null && s.set(e.blocks[t].id, r),
      n != null &&
        i.length === e.blocks.length &&
        c.set(e.blocks[t].id, { from: n.from, to: n.from + n.node.nodeSize, node: n.node }));
  }
  let u = { document: a, blocks: s, blockRanges: c, roots: o };
  return (ir.set(e, { markdown: t, projection: u }), u);
}
function rr(e, t) {
  return e.length === 0
    ? null
    : e.length === 1
      ? e[0].node
      : t.copy(p.fromArray(e.flatMap(({ node: e }) => (e.type === t.type ? [...e.content.content] : [e]))));
}
var ir;
function ar() {
  return (ar = e(() => {
    (te(), Tt(), (ir = new WeakMap()));
  }))();
}
function or(e, t, n, r) {
  let i = new Map(t.blocks.map((e, t) => [e.id, t])),
    a = new Map(),
    o = new Set(),
    s = (e, t) => {
      (a.set(e, t), o.add(t));
    };
  e.blocks.forEach((e, n) => {
    let r = i.get(e.id);
    r != null && (0, fr.default)(e.unit, t.blocks[r].unit) && s(n, r);
  });
  let c = ur(e, new Set(a.keys())),
    l = ur(t, o);
  for (let [e, t] of c) {
    let n = l.get(e);
    t.length === 1 && n?.length === 1 && s(t[0], n[0]);
  }
  e.blocks.forEach((e, t) => {
    let c = i.get(e.id);
    if (a.has(t) || c == null || o.has(c)) return;
    let l = n.blockRanges.get(e.id)?.node,
      u = r.blockRanges.get(e.id)?.node;
    (l == null ||
      u == null ||
      l.type === u.type ||
      (l.textContent.length > 0 && l.textContent === u.textContent)) &&
      s(t, c);
  });
  let u = pr,
    d = mr,
    f = [],
    p = t.blocks.length;
  for (let t = e.blocks.length - 1; t >= 0; t--) ((f[t] = p), (p = a.get(t) ?? p));
  let m = -1;
  e.blocks.forEach((c, l) => {
    let p = a.get(l);
    if (p != null) {
      m = p;
      return;
    }
    let h = i.get(c.id),
      g = n.blockRanges.get(c.id)?.node,
      _ = r.blockRanges.get(c.id)?.node;
    if (
      h != null &&
      !o.has(h) &&
      g != null &&
      _ != null &&
      m < h &&
      h < f[l] &&
      (m >= 0 || f[l] < t.blocks.length || (e.blocks.length === 1 && t.blocks.length === 1))
    ) {
      let e = g.nodeSize + _.nodeSize;
      if (e > u || d === 0) return;
      ((u -= e), d--, cr(g, _) && (s(l, h), (m = h)));
    }
  });
  let h = new Map(),
    g = new Map(),
    _ = new Map();
  t.blocks.forEach((e, t) => {
    let n = r.blockRanges.get(e.id)?.node;
    if (o.has(t) || n == null) return;
    let i = _.get(n.type);
    i == null ? _.set(n.type, [{ after: t, node: n }]) : i.push({ after: t, node: n });
  });
  let v = [],
    y = 0,
    b = !0;
  matching: for (let t = 0; t < e.blocks.length; t++) {
    if (a.has(t)) continue;
    let r = n.blockRanges.get(e.blocks[t].id)?.node;
    if (r == null) continue;
    let i = lr(r);
    for (let { after: e, node: n } of _.get(r.type) ?? []) {
      if (((y += i.length + lr(n).length), v.length === d || y > u)) {
        b = !1;
        break matching;
      }
      v.push({ before: t, after: e, beforeNode: r, afterNode: n, beforeText: i });
    }
  }
  for (let e of b ? v : []) {
    if (!sr(e.beforeNode, e.afterNode, e.beforeText)) continue;
    let t = h.get(e.before);
    (t == null ? h.set(e.before, [e.after]) : t.push(e.after), g.set(e.after, (g.get(e.after) ?? 0) + 1));
  }
  for (let [e, t] of h) t.length === 1 && g.get(t[0]) === 1 && s(e, t[0]);
  let x = new Set([...e.blocks.map(({ id: e }) => e), ...t.blocks.map(({ id: e }) => e)]),
    S = e.blocks.map((e, n) => {
      let r = a.get(n);
      if (r != null) {
        let n = t.blocks[r].id;
        return n === e.id ? e : { ...e, id: n };
      }
      if (!i.has(e.id)) return e;
      let o = `before:${e.id}`;
      for (; x.has(o);) o = `before:${o}`;
      return (x.add(o), { ...e, id: o });
    });
  if (S.every((t, n) => t === e.blocks[n])) return { baseline: e, projection: n };
  let C = (t) =>
    new Map(
      e.blocks.flatMap((e, n) => {
        let r = t.get(e.id);
        return r == null ? [] : [[S[n].id, r]];
      }),
    );
  return {
    baseline: { ...e, blocks: S },
    projection: { ...n, blocks: C(n.blocks), blockRanges: C(n.blockRanges) },
  };
}
function sr(e, t, n) {
  let r = lr(t),
    i = yt(n, r, { maxEditLength: 128 });
  if (i == null) return !1;
  let a = i.filter((e) => !e.added && !e.removed),
    o = a.reduce((e, t) => e + t.value.length, 0),
    s = Math.min(n.length, r.length);
  return e.type.name === `table`
    ? e.firstChild != null &&
        t.firstChild != null &&
        lr(e.firstChild) === lr(t.firstChild) &&
        o >= 40 &&
        o / s >= 0.5
    : o >= 80 && o / s >= 0.8 && a.some((e) => e.value.trim().length >= 40);
}
function cr(e, t) {
  if (![e, t].every((e) => e.isTextblock || (e.type.spec.group ?? ``).includes(`list_item`))) return !1;
  let n = lr(e),
    r = lr(t);
  if (n.length + r.length > 4e3) return !1;
  let i =
    yt(n, r, { maxEditLength: 32 })?.reduce((e, t) => e + (!t.added && !t.removed ? t.value.length : 0), 0) ??
    0;
  return i >= 8 && i / Math.min(n.length, r.length) >= 0.8;
}
function lr(e) {
  return e.textBetween(0, e.content.size, ` `, ` `);
}
function ur(e, t) {
  let n = new Map();
  return (
    e.blocks.forEach(({ unit: e }, r) => {
      if (t.has(r)) return;
      let i = `${e.kind}\u0000${dr(e.markdown)}`,
        a = n.get(i);
      a == null ? n.set(i, [r]) : a.push(r);
    }),
    n
  );
}
function dr(e) {
  let t = e.trim().split(`
`);
  if (
    t.length < 2 ||
    t.some((e) => {
      let t = e.trim();
      return !t.startsWith(`|`) || !t.endsWith(`|`);
    })
  )
    return e;
  let n = t.map((e, t) =>
    e
      .trim()
      .split(/(?<!\\)\|/u)
      .map((e) => {
        let n = e.trim();
        return t === 1 ? n.replace(/^(:?)-+(:?)$/u, `$1---$2`) : n;
      })
      .join(`|`),
  );
  return /^\|(?::?-+:?\|)+$/u.test(n[1])
    ? n.join(`
`)
    : e;
}
var fr, pr, mr;
function hr() {
  return (hr = e(() => {
    (Lt(), (fr = t(g(), 1)), (pr = 8e4), (mr = 256));
  }))();
}
async function gr({ snapshot: e, baseline: t, markdown: n, signal: r }) {
  r.throwIfAborted();
  let i = nr(e, n),
    a = {
      snapshot: e,
      baseline: t,
      document: i.document,
      changes: [],
      titleChanged: t.title !== e.title,
      detailed: !0,
    };
  if (e === t) return a;
  await Tr(r);
  let { baseline: o, projection: s } = or(t, e, nr(t, n), i),
    c = Zn(o, e),
    l = tr(s, i),
    u = new Map(),
    d = new Map(),
    f = new Map(),
    p = new Map();
  for (let e of c) {
    let t = e.moved ? s.blocks.get(e.blockId) : null;
    if (t != null) {
      p.set(e.blockId, e.contentChanged || e.presentationChanged);
      let n = f.get(t.from);
      n == null ? f.set(t.from, [e.blockId]) : n.push(e.blockId);
    }
  }
  let m = new Map(),
    h = new Map();
  if (f.size > 0) {
    let e = new Map(),
      t = null;
    for (let n of i.roots) (e.set(n.from, t), n.node.type.name === `heading` && (t = n.node.textContent));
    let n = new Map(),
      r = null;
    s.roots.forEach((t, a) => {
      let o = f.get(t.from),
        c = o == null ? null : l.get(o[0]);
      if (o != null && c != null) {
        let l = {
            id: o[0],
            section: r,
            before: s.roots[a - 1]?.node ?? null,
            content: t.node,
            after: s.roots[a + 1]?.node ?? null,
            movedRanges: o
              .flatMap((e) => {
                let n = s.blockRanges.get(e);
                return n == null ? [] : [{ from: n.from - t.from, to: n.to - t.from }];
              })
              .sort((e, t) => e.from - t.from),
          },
          u = m.get(c);
        u == null ? m.set(c, [l]) : u.push(l);
        let d = l.movedRanges[0],
          f = i.blocks.get(l.id),
          g = i.blockRanges.get(l.id);
        if (
          t.node.type !== s.document.type &&
          t.node.type.name !== `heading` &&
          l.movedRanges.length === 1 &&
          d.from === 0 &&
          d.to === t.node.nodeSize &&
          f != null &&
          f.node.type === t.node.type &&
          g?.from === f.from &&
          g.to === f.to
        ) {
          let r = n.get(c);
          if (r == null) {
            let e = new Map();
            (c.before?.type === s.document.type
              ? c.before.forEach((t, n) => e.set(t, n))
              : c.before != null && e.set(c.before, 0),
              n.set(c, e),
              (r = e));
          }
          let i = r.get(t.node);
          if (i != null) {
            let t = { from: i, section: e.get(f.from) ?? null, edited: p.get(l.id) ?? !1 },
              n = h.get(c);
            n == null ? h.set(c, [t]) : n.push(t);
          }
        }
      }
      t.node.type.name === `heading` && (r = t.node.textContent);
    });
  }
  let g = new Set(c.filter(({ moved: e }) => e).map(({ blockId: e }) => e)),
    _ = i.document.content.size;
  for (let e = o.blocks.length - 1; e >= 0; e--) {
    let { id: t } = o.blocks[e];
    (g.has(t) || (_ = i.blocks.get(t)?.from ?? _), d.set(t, _));
  }
  let v = Dr,
    y = performance.now() + Or;
  for (let e = 0; e < c.length; e++) {
    e % 32 == 0 && performance.now() >= y && (await Tr(r), (y = performance.now() + Or));
    let t = c[e],
      n = l.get(t.blockId);
    if (n == null) throw Error(`Page comparison could not place a saved block`);
    let i = u.get(n);
    if (i != null) {
      (i.blockIds.push(t.blockId),
        (i.moved = i.moved || t.moved),
        (i.contentChanged = i.contentChanged || t.contentChanged),
        (i.presentationChanged = i.presentationChanged || t.presentationChanged),
        (i.blockPresentationChanged = i.blockPresentationChanged || t.presentationChanged),
        i.kind === `moved` && i.presentationChanged && (i.kind = `modified`));
      continue;
    }
    let { before: a, after: o } = n,
      s = a != null && o != null && a.eq(o);
    if (s && !t.moved && !t.presentationChanged) continue;
    let f = o == null ? (d.get(t.blockId) ?? n.from) : n.from,
      p = Cr(a),
      g = Cr(o),
      _ = p.length !== g.length || p.some(({ href: e }, t) => (Rt(e) ?? e) !== (Rt(g[t].href) ?? g[t].href)),
      v =
        t.presentationChanged ||
        (a != null && o != null && !s && !_ && a.textContent === o.textContent && !br(a) && !br(o)),
      b = `modified`;
    a == null
      ? (b = `added`)
      : o == null
        ? (b = `removed`)
        : xr(a) && (o.isLeaf || o.childCount > 0)
          ? (b = `added`)
          : xr(o) && (a.isLeaf || a.childCount > 0)
            ? (b = `removed`)
            : s && t.moved && !v && (b = `moved`);
    let x = vr(a) || vr(o);
    u.set(n, {
      id: `block:${t.blockId}`,
      blockIds: [t.blockId],
      kind: b,
      moved: t.moved,
      contentChanged: t.contentChanged,
      moveOrigins: m.get(n) ?? [],
      beforeMoves: h.get(n) ?? [],
      blockPresentationChanged: t.presentationChanged,
      presentationChanged: v,
      tableChanged: x,
      tableStructureChanged: !s && yr(a, o),
      links: _ ? { before: p, after: g } : null,
      linkOnly: !1,
      from: f,
      to: o == null ? f : n.to,
      before: a,
      after: o,
      mode: `marker`,
      detailLimited: !1,
      addedRanges: [],
      formattingRanges: [],
    });
  }
  for (let e of u.values()) {
    let t =
      e.moved &&
      e.blockIds.length === 1 &&
      e.before != null &&
      e.after != null &&
      e.before.type !== e.after.type;
    t && ((e.moved = !1), (e.moveOrigins = []), (e.beforeMoves = []));
    let n = (e.before?.nodeSize ?? 0) + (e.after?.nodeSize ?? 0),
      r = n <= Er && n <= v,
      i = !1;
    r &&
      e.links != null &&
      !e.presentationChanged &&
      e.before != null &&
      e.after != null &&
      e.before.textContent === e.after.textContent &&
      ((i = !0), (e.linkOnly = wr(e.before).eq(wr(e.after))));
    let o = e.kind !== `moved` && !e.presentationChanged && !e.linkOnly,
      s =
        o &&
        !e.moved &&
        !t &&
        r &&
        !br(e.before) &&
        !br(e.after) &&
        !e.tableStructureChanged &&
        (!e.tableChanged || (e.before?.type.name === `table` && e.after?.type.name === `table`));
    (s
      ? (e.mode = `diff`)
      : e.before != null && e.kind !== `added` && e.kind !== `moved` && !e.linkOnly && (e.mode = `before`),
      s || i ? (v -= n) : o && (n > Er || n > v) && ((a.detailed = !1), (e.detailLimited = !0)));
  }
  let b = c.filter(({ contentChanged: e, afterIndex: t }) => e && t != null);
  if (b.length > 0) {
    let e = new Map(),
      t = new Map(),
      n = new Set(),
      o = new Set(),
      c = new Set(),
      d = new Set();
    for (let e of i.blockRanges.values()) (n.has(e.from) && o.add(e.from), n.add(e.from));
    for (let e of s.blockRanges.values()) (c.has(e.from) && d.add(e.from), c.add(e.from));
    for (let [f, { blockId: p, beforeIndex: m }] of b.entries()) {
      f % 32 == 0 && performance.now() >= y && (await Tr(r), (y = performance.now() + Or));
      let h = l.get(p),
        g = h == null ? null : u.get(h),
        _ = i.blockRanges.get(p),
        b = s.blockRanges.get(p);
      if (
        (g != null && e.set(g, (e.get(g) ?? 0) + 1),
        g != null &&
          _ != null &&
          b != null &&
          !g.blockPresentationChanged &&
          g.links == null &&
          !br(b.node) &&
          !br(_.node) &&
          !o.has(_.from) &&
          !d.has(b.from))
      ) {
        let e = qn(Gn(b.node, b.from, c), Gn(_.node, _.from, n));
        e.length > 0 && (g.formattingRanges.push(...e), t.set(g, (t.get(g) ?? 0) + 1));
      }
      if (
        g?.mode !== `before` ||
        _ == null ||
        o.has(_.from) ||
        (m != null && (b == null || d.has(b.from))) ||
        (g.tableChanged && (b?.node.type.name === `table` || _.node.type.name === `table`))
      )
        continue;
      let x = (b?.node.nodeSize ?? 0) + _.node.nodeSize;
      if (b != null && (x > Er || x > v)) {
        ((a.detailed = !1), (g.detailLimited = !0));
        continue;
      }
      let S = Gn(_.node, _.from, n),
        C = Kn(b == null ? `` : Gn(b.node, b.from, c).text, S);
      (b != null && (v -= x),
        C == null ? ((a.detailed = !1), (g.detailLimited = !0)) : g.addedRanges.push(...C));
    }
    for (let [n, r] of e)
      t.get(n) === r && n.before != null && n.after != null && Sr(n.before).eq(Sr(n.after))
        ? (n.mode = `marker`)
        : (n.formattingRanges = []);
  }
  return (
    (a.changes = [...u.values()].sort(
      (e, t) => e.from - t.from || (e.after == null ? 0 : 1) - (t.after == null ? 0 : 1),
    )),
    a.titleChanged &&
      a.changes.unshift({
        id: `title`,
        blockIds: [],
        kind: `modified`,
        moved: !1,
        contentChanged: !0,
        moveOrigins: [],
        beforeMoves: [],
        blockPresentationChanged: !1,
        presentationChanged: !1,
        tableChanged: !1,
        tableStructureChanged: !1,
        links: null,
        linkOnly: !1,
        from: 0,
        to: 0,
        before: null,
        after: null,
        mode: `marker`,
        detailLimited: !1,
        addedRanges: [],
        formattingRanges: [],
      }),
    r.throwIfAborted(),
    a
  );
}
function _r(e, t) {
  if (e.type === t.type) return e;
  let n = kr.get(e);
  if (n != null) return n;
  let r = t.copy(p.from(e));
  return (kr.set(e, r), r);
}
function vr(e) {
  if (e?.type.name === `table`) return !0;
  let t = !1;
  return (e?.descendants((e) => (e.type.name === `table` && (t = !0), !t)), t);
}
function yr(e, t) {
  if (e == null || t == null) return !1;
  let n = (e) => {
    let t = [],
      n = (e) =>
        e.type.name !== `table` ||
        (t.push(
          JSON.stringify(
            e.content.content.map((e) =>
              e.content.content.map((e) => [
                typeof e.attrs.colspan == `number` ? e.attrs.colspan : 1,
                typeof e.attrs.rowspan == `number` ? e.attrs.rowspan : 1,
              ]),
            ),
          ),
        ),
        !1);
    return (n(e) && e.descendants(n), t);
  };
  return JSON.stringify(n(e)) !== JSON.stringify(n(t));
}
function br(e) {
  if (e?.type.spec.leafText != null || e?.type.spec.inlineMention) return !0;
  let t = !1;
  return (
    e?.descendants((e) => ((e.type.spec.leafText != null || e.type.spec.inlineMention) && (t = !0), !t)),
    t
  );
}
function xr(e) {
  return e.type.name === `paragraph` && e.childCount === 0;
}
function Sr(e) {
  return e.isText ? e.mark([]) : e.copy(p.fromArray(e.content.content.map(Sr)));
}
function Cr(e) {
  let t = [],
    n = -1;
  return (
    e?.descendants((e, r) => {
      let i = Gt(e);
      i != null && (t.push(i), (n = -1));
      let a = e.marks.find((e) => e.type.name === `link`)?.attrs.href;
      if (typeof a != `string` || a === i?.href) return;
      let o = i?.text ?? e.textContent,
        s = t.at(-1);
      (s?.href === a && n === r ? (s.text += o) : t.push({ href: a, text: o }),
        (n = i == null ? r + e.nodeSize : -1));
    }),
    t
  );
}
function wr(e) {
  let t = e.marks.map((e) => {
    if (e.type.name !== `link`) return e;
    let t = e.attrs.href;
    return e.type.create({ ...e.attrs, href: typeof t == `string` && Rt(t) != null ? (Ot(t) ?? ``) : `` });
  });
  return e.isText ? e.mark(t) : e.type.create(e.attrs, p.fromArray(e.content.content.map(wr)), t);
}
async function Tr(e) {
  (e.throwIfAborted(), await new Promise((e) => setTimeout(e, 0)), e.throwIfAborted());
}
var Er, Dr, Or, kr;
function Ar() {
  return (Ar = e(() => {
    (te(), Ge(), Ct(), Xn(), er(), ar(), hr(), (Er = 16e3), (Dr = 8e4), (Or = 8), (kr = new WeakMap()));
  }))();
}
function jr(e) {
  return new ae({
    props: {
      nodeViews: {
        [Ye]: (t, n) => {
          let { fileId: r, title: i } = Ke.parse(t.attrs),
            a = n.dom.ownerDocument.createElement(`div`);
          ((a.className = `flex flex-col gap-1 py-2 text-sm`),
            a.setAttribute(`data-markdown-copy`, `code-block`),
            a.setAttribute(`data-markdown-copy-text`, $e(r, i)));
          let o = n.dom.ownerDocument.createElement(`div`);
          o.textContent = i;
          let s = n.dom.ownerDocument.createElement(`div`);
          return (
            (s.className = `text-secondary`),
            (s.textContent = e.formatMessage({
              id: `codex.page.versions.comparison.visualizationUnavailable`,
              defaultMessage: `Interactive content can’t be previewed in version history`,
              description: `Explanation beneath a saved visualization title; version history does not execute interactive content or replace it with the live version`,
            })),
            a.append(o, s),
            { dom: a }
          );
        },
      },
    },
  });
}
function Mr() {
  return (Mr = e(() => {
    (he(), Jt(), rt());
  }))();
}
function Nr(e) {
  let t = (0, Lr.c)(26),
    { pageId: n, content: r, movedRanges: i, moves: a } = e,
    o = v(l),
    s = ne(),
    c = (0, Rr.useId)(),
    u;
  t[0] === c ? (u = t[1]) : ((u = () => new an(c)), (t[0] = c), (t[1] = u));
  let [d] = (0, Rr.useState)(u),
    [f] = (0, Rr.useState)(Ir),
    [p] = (0, Rr.useState)(Fr),
    m;
  t[2] !== d ||
  t[3] !== r ||
  t[4] !== f ||
  t[5] !== s ||
  t[6] !== p ||
  t[7] !== i ||
  t[8] !== a ||
  t[9] !== n ||
  t[10] !== o
    ? ((m = (e) => {
        if (e == null) return;
        let t = [];
        for (let n of a ?? []) {
          let r = e.ownerDocument.createElement(`div`);
          ((r.className = `${un.PageReadingColumn} mx-auto text-xs text-secondary select-none`),
            r.setAttribute(`data-markdown-copy`, `exclude`),
            (r.textContent =
              n.section == null
                ? s.formatMessage(
                    {
                      id: `codex.page.versions.comparison.movedElsewhere`,
                      defaultMessage: `{edited, select, true {Moved elsewhere and edited} other {Moved elsewhere}}`,
                      description: `Label above an old passage inside a grouped comparison; it still exists at a different position in the selected version, outside a named section`,
                    },
                    { edited: n.edited },
                  )
                : s.formatMessage(
                    {
                      id: `codex.page.versions.comparison.movedToSection`,
                      defaultMessage: `{edited, select, true {Moved to {section} and edited} other {Moved to {section}}}`,
                      description: `Label above an old passage inside a grouped comparison naming the section where it appears in the selected version; edited means its content or formatting also changed`,
                    },
                    { edited: n.edited, section: n.section },
                  )),
            t.push(Ee.widget(n.from, r, { side: -1, ignoreSelection: !0 })));
        }
        for (let e of i ?? [])
          r.nodesBetween(e.from, e.to, (n, r) =>
            r >= e.from && r + n.nodeSize <= e.to
              ? (t.push(Ee.node(r, r + n.nodeSize, { class: `bg-text-info/10` })), !1)
              : !0,
          );
        let c = _e.create(r, t),
          l = cn(e, r, {
            pageLinks: { scope: o, pageId: n, intl: s, icons: p },
            checkboxes: d,
            onOpenLink: Pr,
            plugins: [
              p.createPlugin(r.type.schema),
              f.plugin,
              jr(s),
              new ae({ props: { decorations: () => c } }),
            ],
          });
        return () => l.destroy();
      }),
      (t[2] = d),
      (t[3] = r),
      (t[4] = f),
      (t[5] = s),
      (t[6] = p),
      (t[7] = i),
      (t[8] = a),
      (t[9] = n),
      (t[10] = o),
      (t[11] = m))
    : (m = t[11]);
  let h = m,
    g;
  t[12] === h
    ? (g = t[13])
    : ((g = (0, zr.jsx)(`div`, { ref: h, className: `${en.root} p-0`, style: Qt })),
      (t[12] = h),
      (t[13] = g));
  let _;
  t[14] === d
    ? (_ = t[15])
    : ((_ = (0, zr.jsx)(rn, { editable: !1, registry: d })), (t[14] = d), (t[15] = _));
  let y;
  t[16] === p ? (y = t[17]) : ((y = (0, zr.jsx)(st, { registry: p })), (t[16] = p), (t[17] = y));
  let b;
  t[18] !== f || t[19] !== n
    ? ((b = (0, zr.jsx)(mn, { pageId: n, registry: f })), (t[18] = f), (t[19] = n), (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== g || t[22] !== _ || t[23] !== y || t[24] !== b
      ? ((x = (0, zr.jsxs)(zr.Fragment, { children: [g, _, y, b] })),
        (t[21] = g),
        (t[22] = _),
        (t[23] = y),
        (t[24] = b),
        (t[25] = x))
      : (x = t[25]),
    x
  );
}
function Pr(e, t) {
  return mt({ event: e, href: t, initiator: `markdown_link_click` });
}
function Fr() {
  return new Ue();
}
function Ir() {
  return new pn();
}
var Lr, Rr, zr;
function Br() {
  return (Br = e(() => {
    ((Lr = ke()),
      tn(),
      $t(),
      j(),
      he(),
      de(),
      (Rr = Pe()),
      K(),
      Ze(),
      ze(),
      tt(),
      nn(),
      on(),
      sn(),
      dn(),
      fn(),
      Ae(),
      Mr(),
      ln(),
      (zr = Me()));
  }))();
}
function Vr(e) {
  let t = (0, Ur.c)(25),
    { pageId: r, origin: i, document: a, edited: s } = e,
    [c, l] = (0, Wr.useState)(!1),
    u = (0, Wr.useId)(),
    d;
  if (i.section == null && s) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Gr.jsx)(_, {
          id: `codex.page.versions.comparison.viewEditedMoveOrigin`,
          defaultMessage: `Moved and edited · View original location`,
          description: `Button beside Page content that moved and changed between the two compared versions; opens its exact content and location in the comparison baseline`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (d = e));
  } else if (i.section == null) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Gr.jsx)(_, {
          id: `codex.page.versions.comparison.viewMoveOrigin`,
          defaultMessage: `Moved · View original location`,
          description: `Button beside moved Page content that previews its location in the comparison baseline, regardless of the chronological order of the two compared versions`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (d = e));
  } else if (s) {
    let e;
    (t[2] === i.section
      ? (e = t[3])
      : ((e = (0, Gr.jsx)(_, {
          id: `codex.page.versions.comparison.viewNamedEditedMoveOrigin`,
          defaultMessage: `Moved from {section} · Edited`,
          description: `Button beside Page content that moved from the named section and also changed between compared versions; opens its exact content and location in the comparison baseline`,
          values: { section: i.section },
        })),
        (t[2] = i.section),
        (t[3] = e)),
      (d = e));
  } else {
    let e;
    (t[4] === i.section
      ? (e = t[5])
      : ((e = (0, Gr.jsx)(_, {
          id: `codex.page.versions.comparison.viewNamedMoveOrigin`,
          defaultMessage: `Moved from {section}`,
          description: `Button beside moved Page content that names its section in the comparison version and opens a preview of that location`,
          values: { section: i.section },
        })),
        (t[4] = i.section),
        (t[5] = e)),
      (d = e));
  }
  let f;
  t[6] === d
    ? (f = t[7])
    : ((f = (0, Gr.jsx)(h, {
        asChild: !0,
        children: (0, Gr.jsx)(n, { color: `ghostSecondary`, size: `inline`, children: d }),
      })),
      (t[6] = d),
      (t[7] = f));
  let p;
  t[8] !== a ||
  t[9] !== c ||
  t[10] !== i.after ||
  t[11] !== i.before ||
  t[12] !== i.content ||
  t[13] !== i.movedRanges ||
  t[14] !== i.section ||
  t[15] !== r ||
  t[16] !== u
    ? ((p = c
        ? (0, Gr.jsxs)(`div`, {
            className: `${un.PageDocumentTheme} flex min-h-0 flex-col gap-3 p-2 text-sm`,
            children: [
              (0, Gr.jsx)(R, {
                id: u,
                className: `select-none`,
                children: (0, Gr.jsx)(_, {
                  id: `codex.page.versions.comparison.originalLocation`,
                  defaultMessage: `Original location`,
                  description: `Title of a preview showing moved content at its source location in the comparison baseline, regardless of the chronological order of the two compared versions`,
                }),
              }),
              (0, Gr.jsxs)(`section`, {
                className: `flex min-w-0 flex-col gap-3`,
                children: [
                  i.section == null
                    ? null
                    : (0, Gr.jsx)(`p`, { className: `font-medium`, children: i.section }),
                  i.before != null && i.before.textContent !== i.section
                    ? (0, Gr.jsx)(`p`, {
                        className: `line-clamp-3 text-secondary`,
                        children: i.before.textBetween(0, i.before.content.size, ` · `),
                      })
                    : null,
                  (0, Gr.jsx)(Nr, { pageId: r, content: _r(i.content, a), movedRanges: i.movedRanges }),
                  i.after == null
                    ? null
                    : (0, Gr.jsx)(`p`, {
                        className: `line-clamp-3 text-secondary`,
                        children: i.after.textBetween(0, i.after.content.size, ` · `),
                      }),
                ],
              }),
            ],
          })
        : null),
      (t[8] = a),
      (t[9] = c),
      (t[10] = i.after),
      (t[11] = i.before),
      (t[12] = i.content),
      (t[13] = i.movedRanges),
      (t[14] = i.section),
      (t[15] = r),
      (t[16] = u),
      (t[17] = p))
    : (p = t[17]);
  let m;
  t[18] !== p || t[19] !== u
    ? ((m = (0, Gr.jsx)(o, {
        "aria-labelledby": u,
        opaque: !0,
        size: `extraLarge`,
        onEscapeKeyDown: Hr,
        children: p,
      })),
      (t[18] = p),
      (t[19] = u),
      (t[20] = m))
    : (m = t[20]);
  let g;
  return (
    t[21] !== c || t[22] !== f || t[23] !== m
      ? ((g = (0, Gr.jsxs)(M, { open: c, onOpenChange: l, children: [f, m] })),
        (t[21] = c),
        (t[22] = f),
        (t[23] = m),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function Hr(e) {
  return e.stopPropagation();
}
var Ur, Wr, Gr;
function Kr() {
  return (Kr = e(() => {
    ((Ur = ke()), (Wr = Pe()), K(), Te(), L(), Ar(), Br(), ln(), (Gr = Me()));
  }))();
}
function qr(e) {
  let t = (0, Zr.c)(40),
    { pageId: n, change: r, document: i, active: a, visible: o, baselineDate: s, selectedDate: c } = e,
    l = r.links != null && r.kind === `modified` && r.mode !== `before`,
    u;
  t[0] !== r.after || t[1] !== r.before || t[2] !== i
    ? ((u = (e) => {
        if (e == null) return;
        let t = i.copy(p.empty),
          n = yn(
            r.before == null ? t : _r(r.before, i),
            r.after == null ? t : _r(r.after, i),
            e.ownerDocument,
          );
        return (n.querySelectorAll(`del.line-through`).forEach(Jr), e.append(n), () => n.remove());
      }),
      (t[0] = r.after),
      (t[1] = r.before),
      (t[2] = i),
      (t[3] = u))
    : (u = t[3]);
  let d = u,
    f = a ? `step` : void 0,
    m =
      (r.mode === `diff` || r.mode === `before`) && !r.moved && !l
        ? `sr-only`
        : `${un.PageReadingColumn} flex flex-wrap items-center gap-2 self-center text-xs text-secondary select-none`,
    h;
  t[4] !== r || t[5] !== l
    ? ((h =
        r.kind !== `moved` && r.mode !== `before` && !l
          ? (0, Y.jsx)(`span`, {
              className: r.mode === `marker` && r.presentationChanged ? void 0 : `sr-only`,
              children: (0, Y.jsx)(Mn, { change: r }),
            })
          : null),
      (t[4] = r),
      (t[5] = l),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] !== r.links || t[8] !== l || t[9] !== o
    ? ((g = o && l && r.links != null ? (0, Y.jsx)(Ln, { links: r.links }) : null),
      (t[7] = r.links),
      (t[8] = l),
      (t[9] = o),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] !== r.blockIds ||
  t[12] !== r.blockPresentationChanged ||
  t[13] !== r.contentChanged ||
  t[14] !== r.moveOrigins ||
  t[15] !== r.moved ||
  t[16] !== i ||
  t[17] !== n ||
  t[18] !== o
    ? ((_ =
        o && r.moved && r.blockIds.length === 1 && r.moveOrigins[0] != null
          ? (0, Y.jsx)(Vr, {
              pageId: n,
              origin: r.moveOrigins[0],
              document: i,
              edited: r.contentChanged || r.blockPresentationChanged,
            })
          : null),
      (t[11] = r.blockIds),
      (t[12] = r.blockPresentationChanged),
      (t[13] = r.contentChanged),
      (t[14] = r.moveOrigins),
      (t[15] = r.moved),
      (t[16] = i),
      (t[17] = n),
      (t[18] = o),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  t[20] !== m || t[21] !== h || t[22] !== g || t[23] !== _
    ? ((v = (0, Y.jsxs)(`div`, { className: m, "data-markdown-copy": `exclude`, children: [h, g, _] })),
      (t[20] = m),
      (t[21] = h),
      (t[22] = g),
      (t[23] = _),
      (t[24] = v))
    : (v = t[24]);
  let y;
  t[25] !== r.mode || t[26] !== d
    ? ((y = r.mode === `diff` ? (0, Y.jsx)(`div`, { ref: d }) : null),
      (t[25] = r.mode),
      (t[26] = d),
      (t[27] = y))
    : (y = t[27]);
  let b;
  t[28] !== s || t[29] !== r || t[30] !== i || t[31] !== n || t[32] !== c || t[33] !== o
    ? ((b =
        r.mode === `before` && r.before != null && !(r.moved && r.blockIds.length === 1)
          ? (0, Y.jsx)(Yr, {
              pageId: n,
              content: _r(r.before, i),
              change: r,
              visible: o,
              baselineDate: s,
              selectedDate: c,
            })
          : null),
      (t[28] = s),
      (t[29] = r),
      (t[30] = i),
      (t[31] = n),
      (t[32] = c),
      (t[33] = o),
      (t[34] = b))
    : (b = t[34]);
  let x;
  return (
    t[35] !== f || t[36] !== v || t[37] !== y || t[38] !== b
      ? ((x = (0, Y.jsxs)(`div`, {
          className: `relative flex min-w-0 flex-col gap-1`,
          "aria-current": f,
          children: [v, y, b],
        })),
        (t[35] = f),
        (t[36] = v),
        (t[37] = y),
        (t[38] = b),
        (t[39] = x))
      : (x = t[39]),
    x
  );
}
function Jr(e) {
  return e.setAttribute(`data-page-version-deleted`, ``);
}
function Yr(e) {
  let t = (0, Zr.c)(25),
    { pageId: n, content: r, change: i, visible: a, baselineDate: o, selectedDate: s } = e,
    [c, l] = (0, Qr.useState)(!1);
  if (i.kind !== `removed` || i.detailLimited) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) => l(e.currentTarget.open)), (t[0] = e))
      : (e = t[0]);
    let u;
    t[1] === i
      ? (u = t[2])
      : ((u = (0, Y.jsx)(`summary`, {
          className: `${un.PageReadingColumn} mx-auto cursor-interaction text-xs text-secondary select-none`,
          "data-markdown-copy": `exclude`,
          children: (0, Y.jsx)(Mn, { change: i }),
        })),
        (t[1] = i),
        (t[2] = u));
    let d;
    t[3] !== o ||
    t[4] !== i.beforeMoves ||
    t[5] !== i.kind ||
    t[6] !== i.links ||
    t[7] !== r ||
    t[8] !== c ||
    t[9] !== n ||
    t[10] !== s ||
    t[11] !== a
      ? ((d = c
          ? (0, Y.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-2`,
              "data-page-version-before": !0,
              children: [
                (0, Y.jsx)(`div`, {
                  className: `${un.PageReadingColumn} flex flex-col gap-1 self-center text-xs text-secondary select-none`,
                  "data-markdown-copy": `exclude`,
                  children: (0, Y.jsx)(`span`, { children: (0, Y.jsx)(Xr, { date: o, before: !0 }) }),
                }),
                a && i.links != null
                  ? (0, Y.jsx)(`div`, {
                      className: `${un.PageReadingColumn} self-center text-xs text-secondary select-none`,
                      "data-markdown-copy": `exclude`,
                      children: (0, Y.jsx)(Ln, { links: i.links }),
                    })
                  : null,
                (0, Y.jsx)(Nr, { pageId: n, content: r, moves: i.beforeMoves }),
                i.kind === `removed`
                  ? null
                  : (0, Y.jsx)(`div`, {
                      className: `${un.PageReadingColumn} self-center text-xs text-secondary select-none`,
                      "data-markdown-copy": `exclude`,
                      children: (0, Y.jsx)(Xr, { date: s, before: !1 }),
                    }),
              ],
            })
          : null),
        (t[3] = o),
        (t[4] = i.beforeMoves),
        (t[5] = i.kind),
        (t[6] = i.links),
        (t[7] = r),
        (t[8] = c),
        (t[9] = n),
        (t[10] = s),
        (t[11] = a),
        (t[12] = d))
      : (d = t[12]);
    let f;
    return (
      t[13] !== c || t[14] !== u || t[15] !== d
        ? ((f = (0, Y.jsxs)(`details`, { open: c, onToggle: e, children: [u, d] })),
          (t[13] = c),
          (t[14] = u),
          (t[15] = d),
          (t[16] = f))
        : (f = t[16]),
      f
    );
  }
  let u;
  t[17] === i
    ? (u = t[18])
    : ((u = (0, Y.jsx)(`div`, {
        className: `${un.PageReadingColumn} self-center text-xs text-secondary select-none`,
        "data-markdown-copy": `exclude`,
        children: (0, Y.jsx)(Mn, { change: i }),
      })),
      (t[17] = i),
      (t[18] = u));
  let d;
  t[19] !== r || t[20] !== n
    ? ((d = (0, Y.jsx)(`div`, {
        className: `text-secondary line-through`,
        "data-page-version-before": !0,
        children: (0, Y.jsx)(Nr, { pageId: n, content: r }),
      })),
      (t[19] = r),
      (t[20] = n),
      (t[21] = d))
    : (d = t[21]);
  let f;
  return (
    t[22] !== u || t[23] !== d
      ? ((f = (0, Y.jsxs)(Y.Fragment, { children: [u, d] })), (t[22] = u), (t[23] = d), (t[24] = f))
      : (f = t[24]),
    f
  );
}
function Xr(e) {
  let t = (0, Zr.c)(8),
    { date: n, before: r } = e;
  if (n === void 0) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, Y.jsx)(_, {
            id: `codex.page.versions.comparison.changeSide`,
            defaultMessage: `{before, select, true {Before these changes} other {After these changes}}`,
            description: `Boundary for the reference content (Before) or selected content (After) inside an expanded change; direction follows Compare from to Selected version, including reverse chronological comparisons`,
            values: { before: r },
          })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let i = n == null,
    a;
  t[2] === n
    ? (a = t[3])
    : ((a =
        n == null
          ? null
          : (0, Y.jsx)(P, {
              value: n,
              month: `short`,
              day: `numeric`,
              year: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
              second: `2-digit`,
            })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== r || t[5] !== i || t[6] !== a
      ? ((o = (0, Y.jsx)(_, {
          id: `codex.page.versions.comparison.datedChangeSide`,
          defaultMessage: `{before, select, true {Before} other {After}} · {current, select, true {Current version} other {{date}}}`,
          description: `Identifies exact version content within an expanded change. Before is Compare from and After is Selected version, even when the comparison runs backwards in time. Current version is a frozen local capture.`,
          values: { before: r, current: i, date: a },
        })),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var Zr, Qr, Y;
function $r() {
  return ($r = e(() => {
    ((Zr = ke()), te(), (Qr = Pe()), K(), _n(), In(), Wn(), Kr(), Ar(), Br(), ln(), (Y = Me()));
  }))();
}
function ei(e, t) {
  let n = e.ownerDocument.getSelection();
  if (n == null || n.isCollapsed || n.rangeCount === 0) return !1;
  let r = n.getRangeAt(0);
  if (!e.contains(r.startContainer) || !e.contains(r.endContainer)) return !1;
  let i = (r.startContainer instanceof Element ? r.startContainer : r.startContainer.parentElement)?.closest(
      `[data-page-version-before], [data-page-version-deleted]`,
    ),
    a = e.ownerDocument.createElement(`div`);
  (a.append(r.cloneContents()),
    a.querySelectorAll(`[data-page-section-hidden]`).forEach((e) => e.remove()),
    (i == null || !i.contains(r.endContainer)) &&
      a
        .querySelectorAll(`[data-page-version-before], [data-page-version-deleted]`)
        .forEach((e) => e.remove()));
  let o = Be(a);
  return o != null && (t.setData(`text/html`, o.htmlText), t.setData(`text/plain`, o.plainText), !0);
}
function ti() {
  return (ti = e(() => {
    ut();
  }))();
}
function ni(e) {
  return new ae({
    key: ai,
    state: {
      init: () => e,
      apply(e, t) {
        let n = e.getMeta(ai);
        return n instanceof _e ? n : t;
      },
    },
    props: { decorations: (e) => ai.getState(e) },
  });
}
function ri(e, t) {
  e.dispatch(e.state.tr.setMeta(ai, t).setMeta(`addToHistory`, !1));
}
function ii(e, t) {
  let n = [],
    r = [];
  for (let i of e.changes) {
    if (i.id === `title`) continue;
    let a = t.createElement(`div`);
    ((a.dataset.pageVersionChange = i.id),
      a.setAttribute(`data-markdown-copy`, `contents`),
      (a.className = `min-w-0`),
      n.push({ change: i, container: a }),
      r.push(Ee.widget(i.from, a, { side: -1, ignoreSelection: !0 })));
    for (let { from: e, to: t } of i.addedRanges)
      r.push(Ee.inline(e, t, { nodeName: `ins`, class: `bg-text-info/10 text-info no-underline` }));
    for (let { from: e, to: t } of i.formattingRanges)
      r.push(Ee.inline(e, t, { "data-page-version-formatting": ``, class: `bg-text-info/10` }));
    i.after != null &&
      (i.mode === `diff` || i.kind === `removed` || i.kind === `added`) &&
      e.document.nodesBetween(i.from, i.to, (e, t) =>
        i.kind === `added` && i.mode !== `diff`
          ? (e.isTextblock &&
              e.content.size > 0 &&
              r.push(Ee.inline(t + 1, t + e.nodeSize - 1, { class: `bg-text-info/10` })),
            !e.isTextblock)
          : (t >= i.from &&
              t + e.nodeSize <= i.to &&
              r.push(Ee.node(t, t + e.nodeSize, { "data-page-section-hidden": `true` })),
            !1),
      );
  }
  return { slots: n, decorations: _e.create(e.document, r) };
}
var ai;
function oi() {
  return (oi = e(() => {
    (he(), de(), (ai = new pe(`pageVersionComparison`)));
  }))();
}
function si(e) {
  let t = (0, di.c)(100),
    { pageId: n, comparison: r, showChanges: i, activeChangeId: a, baselineDate: o, selectedDate: s } = e,
    c = v(l),
    u = ne(),
    d = (0, fi.useId)(),
    f;
  t[0] === d ? (f = t[1]) : ((f = () => new an(d)), (t[0] = d), (t[1] = f));
  let [p] = (0, fi.useState)(f),
    [m] = (0, fi.useState)(ui),
    [h] = (0, fi.useState)(li),
    g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = []), (t[2] = g)) : (g = t[2]);
  let y;
  t[3] === i ? (y = t[4]) : ((y = { slots: g, visible: i }), (t[3] = i), (t[4] = y));
  let [b, x] = (0, fi.useState)(y),
    { slots: S, visible: C } = b,
    w = (0, fi.useRef)(null),
    T = (0, fi.useRef)(null),
    E = (0, fi.useRef)(null),
    D = (0, fi.useRef)(null),
    O = (0, fi.useRef)(null),
    k = (0, fi.useRef)(null),
    A = (0, fi.useRef)(0),
    j = r.document,
    M;
  if (t[5] !== a || t[6] !== r.changes) {
    let e;
    (t[8] === a ? (e = t[9]) : ((e = (e) => e.id === a), (t[8] = a), (t[9] = e)),
      (M = r.changes.find(e)),
      (t[5] = a),
      (t[6] = r.changes),
      (t[7] = M));
  } else M = t[7];
  let N = M,
    P;
  t[10] !== p ||
  t[11] !== r ||
  t[12] !== j ||
  t[13] !== m.plugin ||
  t[14] !== u ||
  t[15] !== h ||
  t[16] !== n ||
  t[17] !== c ||
  t[18] !== i
    ? ((P = (e) => {
        let t = i ? ii(r, e.ownerDocument) : null,
          a = cn(e, j, {
            pageLinks: { scope: c, pageId: n, intl: u, icons: h },
            checkboxes: p,
            onOpenLink: ci,
            plugins: [h.createPlugin(j.type.schema), m.plugin, ni(t?.decorations ?? _e.empty), jr(u)],
          });
        return (
          (k.current = { comparison: r, showChanges: i, review: t }),
          x({ slots: t?.slots ?? [], visible: i }),
          a
        );
      }),
      (t[10] = p),
      (t[11] = r),
      (t[12] = j),
      (t[13] = m.plugin),
      (t[14] = u),
      (t[15] = h),
      (t[16] = n),
      (t[17] = c),
      (t[18] = i),
      (t[19] = P))
    : (P = t[19]);
  let F = (0, fi.useEffectEvent)(P),
    I;
  t[20] === F
    ? (I = t[21])
    : ((I = () => {
        if (T.current == null) return;
        let e = F(T.current);
        return (
          (w.current = e),
          () => {
            (e.destroy(), (w.current = null), (k.current = null));
          }
        );
      }),
      (t[20] = F),
      (t[21] = I));
  let ee;
  (t[22] !== j || t[23] !== u || t[24] !== n || t[25] !== c
    ? ((ee = [j, u, n, c]), (t[22] = j), (t[23] = u), (t[24] = n), (t[25] = c), (t[26] = ee))
    : (ee = t[26]),
    (0, fi.useLayoutEffect)(I, ee));
  let L;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        let e = w.current,
          t = E.current;
        if (e == null || t == null || A.current === 0) return;
        let n = t.getBoundingClientRect().top;
        for (let t of e.dom.children) {
          let r = t.getBoundingClientRect();
          if (r.height > 0 && r.bottom > n) {
            let n = e.state.doc.resolve(e.posAtDOM(t, 0));
            D.current = { position: n.depth > 0 ? n.before(1) : n.pos, top: r.top };
            break;
          }
        }
      }),
      (t[27] = L))
    : (L = t[27]);
  let te = (0, fi.useEffectEvent)(L),
    R;
  t[28] !== te || t[29] !== r || t[30] !== i
    ? ((R = () => {
        if (w.current == null || (k.current?.comparison === r && k.current.showChanges === i)) return;
        k.current != null && te();
        let e =
          (k.current?.comparison === r ? k.current.review : null) ??
          (i ? ii(r, w.current.dom.ownerDocument) : null);
        ((k.current = { comparison: r, showChanges: i, review: e }),
          ri(w.current, i ? (e?.decorations ?? _e.empty) : _e.empty),
          x({ slots: e?.slots ?? [], visible: i }));
      }),
      (t[28] = te),
      (t[29] = r),
      (t[30] = i),
      (t[31] = R))
    : (R = t[31]);
  let z = (0, fi.useEffectEvent)(R),
    re;
  t[32] === z
    ? (re = t[33])
    : ((re = () => {
        z();
      }),
      (t[32] = z),
      (t[33] = re));
  let B;
  (t[34] !== r || t[35] !== i ? ((B = [r, i]), (t[34] = r), (t[35] = i), (t[36] = B)) : (B = t[36]),
    (0, fi.useLayoutEffect)(re, B));
  let V, ie;
  (t[37] !== S || t[38] !== C
    ? ((V = () => {
        let e = D.current;
        if (((D.current = null), e != null && w.current != null && E.current != null)) {
          let t =
            (C
              ? S.find((t) => {
                  let { change: n } = t;
                  return n.from === e.position;
                })?.container
              : void 0) ?? w.current.nodeDOM(e.position);
          if (t instanceof HTMLElement) {
            let n = E.current,
              r = n.currentCSSZoom || 1;
            ((n.scrollTop += (t.getBoundingClientRect().top - e.top) / r), (A.current = n.scrollTop));
          }
        }
      }),
      (ie = [S, C]),
      (t[37] = S),
      (t[38] = C),
      (t[39] = V),
      (t[40] = ie))
    : ((V = t[39]), (ie = t[40])),
    (0, fi.useLayoutEffect)(V, ie));
  let ae, oe;
  (t[41] !== a || t[42] !== i || t[43] !== S
    ? ((ae = () => {
        if (a == null) {
          O.current = null;
          return;
        }
        if (!i || E.current == null || O.current === a) return;
        let e = S.find((e) => {
            let { change: t } = e;
            return t.id === a;
          }),
          t = e?.container;
        if (
          (a === `title`
            ? (t = E.current.querySelector(`h1`))
            : e != null &&
              e.change.mode !== `diff` &&
              e.change.kind !== `removed` &&
              e.change.after != null &&
              w.current != null &&
              (t = w.current.nodeDOM(e.change.from)),
          t instanceof HTMLElement)
        ) {
          let e = E.current,
            n = e.getBoundingClientRect(),
            r = e.currentCSSZoom || 1;
          (e.scrollTo({
            top: Math.max(
              0,
              e.scrollTop +
                (t.getBoundingClientRect().top - n.top) / r -
                Math.max(e.clientHeight / 4, Number.parseFloat(getComputedStyle(e).scrollPaddingTop) || 0),
            ),
            behavior: `instant`,
          }),
            (A.current = e.scrollTop),
            (O.current = a));
        }
      }),
      (oe = [a, i, S]),
      (t[41] = a),
      (t[42] = i),
      (t[43] = S),
      (t[44] = ae),
      (t[45] = oe))
    : ((ae = t[44]), (oe = t[45])),
    (0, fi.useLayoutEffect)(ae, oe));
  let H;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        A.current = e.currentTarget.scrollTop;
      }),
      (t[46] = H))
    : (H = t[46]);
  let U;
  t[47] === i
    ? (U = t[48])
    : ((U = (e) => {
        i && ei(e.currentTarget, e.clipboardData) && (e.preventDefault(), e.stopPropagation());
      }),
      (t[47] = i),
      (t[48] = U));
  let W = i && a === `title` ? `step` : void 0,
    G;
  t[49] !== r.baseline || t[50] !== r.snapshot.title || t[51] !== r.titleChanged || t[52] !== i
    ? ((G =
        i && r.titleChanged
          ? (0, mi.jsxs)(mi.Fragment, {
              children: [
                (0, mi.jsx)(`del`, {
                  className: `text-secondary`,
                  "data-page-version-deleted": !0,
                  children: r.baseline.title,
                }),
                ` `,
                (0, mi.jsx)(`ins`, {
                  className: `bg-text-info/10 text-info no-underline`,
                  children: r.snapshot.title,
                }),
              ],
            })
          : r.snapshot.title || (0, mi.jsx)(_, { ...ct.untitled })),
      (t[49] = r.baseline),
      (t[50] = r.snapshot.title),
      (t[51] = r.titleChanged),
      (t[52] = i),
      (t[53] = G))
    : (G = t[53]);
  let se;
  t[54] !== W || t[55] !== G
    ? ((se = (0, mi.jsx)(`h1`, {
        className: `${un.PageTitle} relative font-semibold break-words text-default`,
        "aria-current": W,
        children: G,
      })),
      (t[54] = W),
      (t[55] = G),
      (t[56] = se))
    : (se = t[56]);
  let ce;
  t[57] !== r.detailed || t[58] !== i
    ? ((ce =
        i && !r.detailed
          ? (0, mi.jsx)(`p`, {
              className: `${un.PageReadingColumn} text-sm text-secondary`,
              role: `status`,
              children: (0, mi.jsx)(_, {
                id: `codex.page.versions.comparison.detailLimitSelected`,
                defaultMessage: `Some large changes aren’t highlighted word by word. Expand a change to compare the full content before and after.`,
                description: `Explains the word-level comparison limit without suggesting that any saved content is missing; full before and after content remains available in each expandable change`,
              }),
            })
          : null),
      (t[57] = r.detailed),
      (t[58] = i),
      (t[59] = ce))
    : (ce = t[59]);
  let le;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, mi.jsx)(`div`, {
        ref: T,
        className: `${en.root} min-w-0 px-0`,
        "data-page-document-selection": !0,
        style: Qt,
      })),
      (t[60] = le))
    : (le = t[60]);
  let ue;
  t[61] !== se || t[62] !== ce
    ? ((ue = (0, mi.jsxs)(gn, { heading: se, children: [ce, le] })), (t[61] = se), (t[62] = ce), (t[63] = ue))
    : (ue = t[63]);
  let de = C ? N : void 0,
    K;
  t[64] !== a || t[65] !== S
    ? ((K = S.find((e) => {
        let { change: t } = e;
        return t.id === a;
      })?.container),
      (t[64] = a),
      (t[65] = S),
      (t[66] = K))
    : (K = t[66]);
  let fe;
  t[67] !== de || t[68] !== K
    ? ((fe = (0, mi.jsx)(Dn, { change: de, target: K, view: w })), (t[67] = de), (t[68] = K), (t[69] = fe))
    : (fe = t[69]);
  let q;
  t[70] === p
    ? (q = t[71])
    : ((q = (0, mi.jsx)(rn, { editable: !1, registry: p })), (t[70] = p), (t[71] = q));
  let pe;
  t[72] === h ? (pe = t[73]) : ((pe = (0, mi.jsx)(st, { registry: h })), (t[72] = h), (t[73] = pe));
  let me;
  t[74] !== m || t[75] !== n
    ? ((me = (0, mi.jsx)(mn, { pageId: n, registry: m })), (t[74] = m), (t[75] = n), (t[76] = me))
    : (me = t[76]);
  let he;
  if (t[77] !== a || t[78] !== o || t[79] !== j || t[80] !== n || t[81] !== s || t[82] !== S || t[83] !== C) {
    let e;
    (t[85] !== a || t[86] !== o || t[87] !== j || t[88] !== n || t[89] !== s || t[90] !== C
      ? ((e = (e) => {
          let { change: t, container: r } = e;
          return (0, pi.createPortal)(
            (0, mi.jsx)(qr, {
              pageId: n,
              change: t,
              document: j,
              active: C && t.id === a,
              visible: C,
              baselineDate: o,
              selectedDate: s,
            }),
            r,
            t.id,
          );
        }),
        (t[85] = a),
        (t[86] = o),
        (t[87] = j),
        (t[88] = n),
        (t[89] = s),
        (t[90] = C),
        (t[91] = e))
      : (e = t[91]),
      (he = S.map(e)),
      (t[77] = a),
      (t[78] = o),
      (t[79] = j),
      (t[80] = n),
      (t[81] = s),
      (t[82] = S),
      (t[83] = C),
      (t[84] = he));
  } else he = t[84];
  let ge;
  return (
    t[92] !== U || t[93] !== ue || t[94] !== fe || t[95] !== q || t[96] !== pe || t[97] !== me || t[98] !== he
      ? ((ge = (0, mi.jsxs)(`div`, {
          ref: E,
          className: `${un.PageDocumentTheme} relative min-h-0 flex-1 scroll-pt-[var(--pane-overlay-header-height,0px)] overflow-y-auto pt-[var(--pane-overlay-header-height,0px)]`,
          onScroll: H,
          onCopyCapture: U,
          children: [ue, fe, q, pe, me, he],
        })),
        (t[92] = U),
        (t[93] = ue),
        (t[94] = fe),
        (t[95] = q),
        (t[96] = pe),
        (t[97] = me),
        (t[98] = he),
        (t[99] = ge))
      : (ge = t[99]),
    ge
  );
}
function ci(e, t) {
  return mt({ event: e, href: t, initiator: `markdown_link_click` });
}
function li() {
  return new Ue();
}
function ui() {
  return new pn();
}
var di, fi, pi, mi;
function hi() {
  return (hi = e(() => {
    ((di = ke()),
      tn(),
      $t(),
      j(),
      de(),
      (fi = Pe()),
      (pi = Ne()),
      K(),
      Ze(),
      ze(),
      tt(),
      nn(),
      on(),
      hn(),
      sn(),
      dn(),
      fn(),
      _t(),
      Ae(),
      jn(),
      $r(),
      ti(),
      oi(),
      Mr(),
      ln(),
      (mi = Me()));
  }))();
}
function gi(e) {
  let t = (0, _i.c)(8),
    { comparison: n } = e,
    r = n !== void 0 && n,
    i = ne(),
    a;
  t[0] !== r || t[1] !== i
    ? ((a = r
        ? i.formatMessage({
            id: `codex.page.versions.loadingComparison`,
            defaultMessage: `Loading comparison…`,
            description: `Status while the requested Page comparison is loading; document content and changes appear together when ready`,
          })
        : i.formatMessage({
            id: `codex.page.versions.loadingPreview`,
            defaultMessage: `Loading version…`,
            description: `Status while downloading and verifying a historical Page checkpoint`,
          })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, vi.jsx)(it, { size: `lg`, widthPercent: 55 })), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, vi.jsx)(Fe, { lines: 3, seed: `page-version-introduction` })), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, vi.jsx)(gn, {
        heading: o,
        children: (0, vi.jsxs)(`div`, {
          className: `${un.PageReadingColumn} flex flex-col gap-6`,
          children: [
            s,
            (0, vi.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, vi.jsx)(it, { size: `lg`, widthPercent: 40 }),
                (0, vi.jsx)(Fe, { lines: 4, seed: `page-version-body` }),
              ],
            }),
          ],
        }),
      })),
      (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] === a
      ? (l = t[7])
      : ((l = (0, vi.jsx)(`div`, {
          className: `${un.PageDocumentTheme} min-h-0 flex-1 overflow-hidden`,
          role: `status`,
          "aria-label": a,
          children: c,
        })),
        (t[6] = a),
        (t[7] = l)),
    l
  );
}
var _i, vi;
function yi() {
  return (yi = e(() => {
    ((_i = ke()), K(), bt(), hn(), ln(), (vi = Me()));
  }))();
}
function bi() {
  let e = (0, Si.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Ci.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Ci.jsx)(_, {
          id: `codex.page.versions.loadingHistory`,
          defaultMessage: `Loading history…`,
          description: `Status while the list of saved Page versions loads`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Ci.jsxs)(`div`, {
          className: `-mx-[var(--padding-row-x)]`,
          role: `status`,
          children: [
            t,
            (0, Ci.jsx)(`div`, { "aria-hidden": !0, inert: !0, children: [1, 2, 3, 4, 5].map(xi) }),
          ],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function xi(e) {
  return (0, Ci.jsx)(
    ht,
    {
      compactSecondLine: !0,
      density: `row`,
      hasInteractiveContent: !0,
      buttonProps: { disabled: !0 },
      isSelected: !1,
      title: (0, Ci.jsx)(it, { as: `span`, className: `block w-16`, size: `sm` }),
      rightText: (0, Ci.jsx)(it, { as: `span`, className: `block w-24`, size: `sm` }),
    },
    e,
  );
}
var Si, Ci;
function wi() {
  return (wi = e(() => {
    ((Si = ke()), K(), Re(), bt(), (Ci = Me()));
  }))();
}
function Ti(e) {
  let t = (0, Ei.c)(49),
    {
      endpoint: r,
      index: i,
      minIndex: a,
      maxIndex: o,
      timeline: s,
      label: c,
      pressed: l,
      previewLabel: u,
      previewMethod: d,
      onChoose: f,
      onPreview: p,
      onCommit: m,
      onCancel: h,
    } = e,
    g = (0, Di.useRef)(null),
    v = (0, Di.useRef)(!1),
    y,
    b;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => () => g.current?.()), (b = []), (t[0] = y), (t[1] = b))
    : ((y = t[0]), (b = t[1])),
    (0, Di.useEffect)(y, b));
  let x;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Oi.jsx)(_, {
        id: `codex.page.versions.timelineHandleHint`,
        defaultMessage: `Click or drag to change version`,
        description: `Tooltip for a Page version comparison handle; clicking lets the user choose a version from the list, and dragging moves the comparison endpoint`,
      })),
      (t[2] = x))
    : (x = t[2]);
  let S = l ? `open` : void 0,
    C;
  t[3] === f
    ? (C = t[4])
    : ((C = (e) => {
        ((!v.current || e.detail === 0) && f(e.currentTarget, e.detail > 0), (v.current = !1));
      }),
      (t[3] = f),
      (t[4] = C));
  let w;
  t[5] !== h || t[6] !== d
    ? ((w = () => {
        d === `keyboard` && h(!1);
      }),
      (t[5] = h),
      (t[6] = d),
      (t[7] = w))
    : (w = t[7]);
  let T;
  t[8] !== i ||
  t[9] !== o ||
  t[10] !== a ||
  t[11] !== h ||
  t[12] !== m ||
  t[13] !== p ||
  t[14] !== d ||
  t[15] !== s
    ? ((T = (e) => {
        if (e.key === `Tab` && d === `keyboard`) h(!1);
        else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
          (e.preventDefault(), e.stopPropagation());
          let t = s.current?.querySelectorAll(`[data-version-history-index]`);
          if (t == null || t.length === 0) return;
          let n = Math.max(a, Math.min(o, i + (e.key === `ArrowUp` ? -1 : 1)));
          (p(n, `keyboard`, e.currentTarget), t[n]?.scrollIntoView({ block: `nearest` }));
        } else
          (e.key === `Enter` || e.key === ` `) &&
            d === `keyboard` &&
            (e.preventDefault(), e.stopPropagation(), m(i, !1));
      }),
      (t[8] = i),
      (t[9] = o),
      (t[10] = a),
      (t[11] = h),
      (t[12] = m),
      (t[13] = p),
      (t[14] = d),
      (t[15] = s),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== i || t[18] !== o || t[19] !== a || t[20] !== h || t[21] !== m || t[22] !== p || t[23] !== s
    ? ((E = (e) => {
        if (e.button !== 0 || e.isPrimary === !1 || g.current != null) return;
        let t = s.current,
          n = t?.closest(`[role="region"]`),
          r = e.currentTarget,
          c = r.ownerDocument,
          l = c.defaultView;
        if (t == null || n == null || l == null) return;
        (r.focus({ preventScroll: !0 }), (v.current = !1));
        let u = n.getBoundingClientRect(),
          d = 0,
          f = 1,
          _ = [],
          y = !1,
          b = (e) => {
            ((u = e),
              (d = Number.parseFloat(l.getComputedStyle(n).scrollPaddingBottom) || 0),
              (f = n.offsetHeight > 0 ? u.height / n.offsetHeight : 1),
              (_ = Array.from(t.querySelectorAll(`[data-version-history-index]`), (e) => {
                let t = e.getBoundingClientRect();
                return {
                  index: Number(e.dataset.versionHistoryIndex),
                  center: t.top + t.height / 2 + n.scrollTop * f,
                };
              })),
              (y = !1));
          };
        if ((b(u), _.length === 0)) return;
        let x = new AbortController(),
          S = e.pointerId,
          C = e.clientX,
          w = e.clientY,
          T = w,
          E = !1,
          D = i,
          O = !1,
          k = 0,
          A = 0,
          j = () => {
            (x.abort(),
              I.disconnect(),
              l.cancelAnimationFrame(k),
              (g.current = null),
              r.hasPointerCapture?.(S) && r.releasePointerCapture(S));
          },
          M = () => {
            (j(), E && h());
          },
          N = () => {
            let e = T + n.scrollTop * f,
              t = _.reduce((t, n) => (Math.abs(n.center - e) < Math.abs(t.center - e) ? n : t)),
              i = Math.max(a, Math.min(o, t.index));
            (!O || D !== i) && ((D = i), (O = !0), p(D, `pointer`, r));
          },
          P = (e) => {
            k = 0;
            let t = n.getBoundingClientRect();
            (y || u.top !== t.top || u.width !== t.width || u.height !== t.height) && b(t);
            let r = t.top + 32 * f,
              i = t.bottom - (32 + d) * f,
              a = 0;
            (T < r && (a = T - r), T > i && (a = T - i));
            let o = Math.max(-1, Math.min(1, a / (32 * f))) * Math.min(e - (A || e - 16), 32) * 0.5,
              s = n.scrollTop;
            (o !== 0 && (n.scrollTop += o),
              N(),
              n.scrollTop === s ? (A = 0) : ((A = e), (k = l.requestAnimationFrame(P))));
          },
          F = () => {
            ((y = !0), E && k === 0 && (k = l.requestAnimationFrame(P)));
          },
          I = new ResizeObserver(F);
        (I.observe(t),
          I.observe(n),
          l.addEventListener(`resize`, F, { signal: x.signal }),
          (g.current = j),
          r.setPointerCapture?.(S),
          c.addEventListener(
            `pointermove`,
            (e) => {
              if (e.pointerId === S) {
                if (((T = e.clientY), !E)) {
                  if (Math.hypot(e.clientX - C, T - w) < 4) return;
                  ((E = !0), (v.current = !0));
                }
                (e.preventDefault(), k === 0 && (k = l.requestAnimationFrame(P)));
              }
            },
            { capture: !0, signal: x.signal },
          ),
          n.addEventListener(
            `scroll`,
            () => {
              E && k === 0 && (k = l.requestAnimationFrame(P));
            },
            { passive: !0, signal: x.signal },
          ),
          c.addEventListener(
            `pointerup`,
            (e) => {
              e.pointerId === S &&
                (E && ((T = e.clientY), b(n.getBoundingClientRect()), N()), j(), E && m(D, !0));
            },
            { capture: !0, signal: x.signal },
          ),
          r.addEventListener(`lostpointercapture`, M, { signal: x.signal }),
          c.addEventListener(
            `pointercancel`,
            (e) => {
              e.pointerId === S && M();
            },
            { signal: x.signal },
          ),
          c.addEventListener(
            `keydown`,
            (e) => {
              e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), j(), h());
            },
            { capture: !0, signal: x.signal },
          ),
          l.addEventListener(`blur`, M, { signal: x.signal }));
      }),
      (t[17] = i),
      (t[18] = o),
      (t[19] = a),
      (t[20] = h),
      (t[21] = m),
      (t[22] = p),
      (t[23] = s),
      (t[24] = E))
    : (E = t[24]);
  let D = r === `from` && `border border-strong`,
    O;
  t[25] === D
    ? (O = t[26])
    : ((O = se(
        `relative size-4 rounded-full bg-surface-elevated-secondary shadow-sm transition-transform duration-basic ease-enter-snappy group-hover/endpoint:scale-110 group-focus-visible/endpoint:scale-110 group-data-[state=open]/endpoint:scale-110 group-active/endpoint:scale-95 motion-reduce:transition-none`,
        D,
      )),
      (t[25] = D),
      (t[26] = O));
  let k;
  t[27] === r
    ? (k = t[28])
    : ((k =
        r === `to`
          ? (0, Oi.jsx)(`span`, { className: `absolute inset-0 rounded-full bg-text-secondary` })
          : null),
      (t[27] = r),
      (t[28] = k));
  let A;
  t[29] !== O || t[30] !== k
    ? ((A = (0, Oi.jsx)(`span`, { "aria-hidden": !0, className: O, children: k })),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== c ||
  t[33] !== l ||
  t[34] !== A ||
  t[35] !== S ||
  t[36] !== C ||
  t[37] !== w ||
  t[38] !== T ||
  t[39] !== E
    ? ((j = (0, Oi.jsx)(n, {
        className: `group/endpoint touch-none hover:cursor-grab active:cursor-grabbing`,
        color: `ghostMuted`,
        size: `dragHandle`,
        radius: `full`,
        "data-state": S,
        "aria-label": c,
        "aria-pressed": l,
        onClick: C,
        onBlur: w,
        onKeyDown: T,
        onPointerDown: E,
        children: A,
      })),
      (t[32] = c),
      (t[33] = l),
      (t[34] = A),
      (t[35] = S),
      (t[36] = C),
      (t[37] = w),
      (t[38] = T),
      (t[39] = E),
      (t[40] = j))
    : (j = t[40]);
  let M;
  t[41] !== l || t[42] !== j
    ? ((M = (0, Oi.jsx)(we, { tooltipContent: x, triggerPopupOpen: l, side: `right`, children: j })),
      (t[41] = l),
      (t[42] = j),
      (t[43] = M))
    : (M = t[43]);
  let N = d === `keyboard` ? u : null,
    P;
  t[44] === N
    ? (P = t[45])
    : ((P = (0, Oi.jsx)(`span`, {
        className: `sr-only`,
        role: `status`,
        "aria-atomic": `true`,
        children: N,
      })),
      (t[44] = N),
      (t[45] = P));
  let F;
  return (
    t[46] !== M || t[47] !== P
      ? ((F = (0, Oi.jsxs)(Oi.Fragment, { children: [M, P] })), (t[46] = M), (t[47] = P), (t[48] = F))
      : (F = t[48]),
    F
  );
}
var Ei, Di, Oi;
function ki() {
  return (ki = e(() => {
    ((Ei = ke()), V(), (Di = Pe()), K(), Te(), W(), (Oi = Me()));
  }))();
}
function Ai(e, t) {
  let n = new Map(),
    r = e.map((e) => {
      let r = t.formatTime(e.created_at, { hour: `numeric`, minute: `2-digit` }),
        i = t.formatDate(e.created_at, { year: `numeric`, month: `2-digit`, day: `2-digit` }),
        a = JSON.stringify([i, r]);
      return (n.set(a, (n.get(a) ?? 0) + 1), { version: e, label: r, minute: a });
    });
  return new Map(
    r.map(({ version: e, label: r, minute: i }) => [
      e.checkpoint_id,
      (n.get(i) ?? 0) > 1
        ? t.formatTime(e.created_at, { hour: `numeric`, minute: `2-digit`, second: `2-digit` })
        : r,
    ]),
  );
}
function ji(e) {
  let t = (0, Ii.c)(179),
    {
      showHeader: i,
      selectedId: a,
      baselineId: o,
      showChanges: c,
      versions: l,
      names: u,
      currentSummary: d,
      renderControls: p,
      children: m,
      onLoadMore: h,
      isLoadingMore: g,
      isLoadMoreError: v,
      onSelect: y,
      onSelectEnd: b,
      onBaselineChange: x,
      onClose: S,
    } = e,
    C = i === void 0 || i,
    T = g !== void 0 && g,
    E = v !== void 0 && v,
    D = ne(),
    O = (0, Li.useId)(),
    [A, j] = (0, Li.useState)(null),
    [M, P] = (0, Li.useState)(null),
    F = (0, Li.useRef)(null),
    I = (0, Li.useRef)(null),
    L = (0, Li.useRef)(null),
    te = (0, Li.useRef)(!1),
    R = (0, Li.useRef)(null),
    [re, B] = (0, Li.useState)(!0),
    V = z(It),
    ie = ee(),
    ae = (0, Li.useSyncExternalStore)(k, Fi, Pi),
    oe;
  t[0] !== V || t[1] !== ae || t[2] !== ie
    ? ((oe = V > 0 ? je(ae, ie) : 0), (t[0] = V), (t[1] = ae), (t[2] = ie), (t[3] = oe))
    : (oe = t[3]);
  let H = Math.max(V, oe, zt),
    U;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        te.current &&
          L.current != null &&
          (L.current.scrollTop = L.current.scrollHeight - L.current.clientHeight);
      }),
      (t[4] = U))
    : (U = t[4]);
  let W;
  (t[5] === H ? (W = t[6]) : ((W = [H]), (t[5] = H), (t[6] = W)), (0, Li.useLayoutEffect)(U, W));
  let G;
  t[7] !== D || t[8] !== l ? ((G = Ai(l, D)), (t[7] = D), (t[8] = l), (t[9] = G)) : (G = t[9]);
  let se = G,
    ce = o === null,
    le;
  if (t[10] !== o || t[11] !== l) {
    let e;
    (t[13] === o ? (e = t[14]) : ((e = (e) => e.checkpoint_id === o), (t[13] = o), (t[14] = e)),
      (le = l.find(e)),
      (t[10] = o),
      (t[11] = l),
      (t[12] = le));
  } else le = t[12];
  let ue = le,
    de;
  if (t[15] !== a || t[16] !== l) {
    let e;
    (t[18] === a ? (e = t[19]) : ((e = (e) => e.checkpoint_id === a), (t[18] = a), (t[19] = e)),
      (de = l.find(e)),
      (t[15] = a),
      (t[16] = l),
      (t[17] = de));
  } else de = t[17];
  let K = de,
    fe = c ? o : a,
    q = fe === null,
    pe;
  t[20] === l.length
    ? (pe = t[21])
    : ((pe = () => {
        let e = R.current;
        if (e == null || l.length <= e.count) return;
        R.current = null;
        let { activeElement: t } = e.trigger.ownerDocument;
        if (t !== e.trigger && (e.trigger.isConnected || t !== document.body)) return;
        let n =
          I.current?.querySelector(
            `[data-version-history-index="${e.count + 1}"] [role="button"]:not([aria-disabled="true"])`,
          ) ?? I.current?.querySelector(`[aria-current="true"][role="button"]:not([aria-disabled="true"])`);
        (n?.focus({ preventScroll: !0 }), n?.scrollIntoView({ block: `nearest` }));
      }),
      (t[20] = l.length),
      (t[21] = pe));
  let me;
  (t[22] === l ? (me = t[23]) : ((me = [l]), (t[22] = l), (t[23] = me)), (0, Li.useLayoutEffect)(pe, me));
  let he;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, X.jsx)(_, {
        id: `codex.page.versions.currentCaptureDetail`,
        defaultMessage: `Captured when history opened; may include unsaved changes and does not update with live edits`,
        description: `Tooltip and accessible description for the current Page version captured when history was opened; it may contain local edits that have not been saved`,
      })),
      (t[24] = he))
    : (he = t[24]);
  let ge = he,
    _e;
  t[25] !== A || t[26] !== O || t[27] !== M?.method
    ? ((_e = function (e, t) {
        let n = e === void 0 ? (A ?? void 0) : e;
        ((t === void 0 || t) &&
          (F.current?.focus({ preventScroll: !0 }),
          n != null &&
            I.current
              ?.querySelector(
                n === `from`
                  ? `[aria-describedby~="${O}-comparison-start"]`
                  : `[aria-describedby~="${O}-viewing"]`,
              )
              ?.scrollIntoView({ block: `nearest` })),
          B(M?.method !== `keyboard`),
          P(null),
          j(null));
      }),
      (t[25] = A),
      (t[26] = O),
      (t[27] = M?.method),
      (t[28] = _e))
    : (_e = t[28]);
  let ye = _e,
    be;
  t[29] !== o || t[30] !== A || t[31] !== O || t[32] !== x || t[33] !== y || t[34] !== b || t[35] !== a
    ? ((be = function (e, t, n) {
        let r = n === void 0 ? (A ?? void 0) : n;
        if ((B(t), r != null)) {
          let t = r === `from` ? a : o,
            n = F.current;
          ((e?.checkpoint_id ?? null) === t &&
            (n = I.current?.querySelector(
              r === `from`
                ? `[aria-describedby~="${O}-viewing"]`
                : `[aria-describedby~="${O}-comparison-start"]`,
            )),
            n?.focus({ preventScroll: !0 }));
        }
        (r === `from` ? x(e?.checkpoint_id ?? null) : r === `to` ? b(e) : y(e), P(null), j(null));
      }),
      (t[29] = o),
      (t[30] = A),
      (t[31] = O),
      (t[32] = x),
      (t[33] = y),
      (t[34] = b),
      (t[35] = a),
      (t[36] = be))
    : (be = t[36]);
  let Se = be,
    Ce;
  t[37] !== ue || t[38] !== A || t[39] !== ce || t[40] !== K || t[41] !== c
    ? ((Ce = function (e) {
        return c
          ? A === `to`
            ? e != null && (ce || (ue != null && e.through_sequence < ue.through_sequence))
            : K != null && (e == null || e.through_sequence > K.through_sequence)
          : !1;
      }),
      (t[37] = ue),
      (t[38] = A),
      (t[39] = ce),
      (t[40] = K),
      (t[41] = c),
      (t[42] = Ce))
    : (Ce = t[42]);
  let Te = Ce,
    Ee;
  t[43] === D
    ? (Ee = t[44])
    : ((Ee = function (e, t) {
        return e == null
          ? D.formatMessage(
              {
                id: `codex.page.versions.selectCurrentComparisonNode`,
                defaultMessage: `{endpoint, select, from {Use current version for comparison} other {Select current version}}`,
                description: `Choose the frozen Current snapshot using its timeline node, either as the comparison version or the selected version`,
              },
              { endpoint: t },
            )
          : D.formatMessage(
              {
                id: `codex.page.versions.selectComparisonNode`,
                defaultMessage: `{endpoint, select, from {Use {date} for comparison} other {Select version from {date}}}`,
                description: `Accessible label for a timeline node when moving a comparison endpoint; date is the full checkpoint date and time`,
              },
              { endpoint: t, date: D.formatDate(e.created_at, { dateStyle: `full`, timeStyle: `medium` }) },
            );
      }),
      (t[43] = D),
      (t[44] = Ee));
  let De = Ee,
    Oe;
  t[45] !== A || t[46] !== Te || t[47] !== De || t[48] !== Se
    ? ((Oe = function (e) {
        if (A == null || Te(e)) return null;
        let t = De(e, A);
        return (0, X.jsx)(we, {
          tooltipContent: t,
          children: (0, X.jsx)(n, {
            unstyled: !0,
            className: `group/node flex h-7 w-6 shrink-0 items-center justify-center rounded-full`,
            "aria-label": t,
            onClick: (t) => Se(e, t.detail > 0),
            children: (0, X.jsx)(`span`, {
              "aria-hidden": !0,
              className: `relative size-1.5 rounded-full bg-surface transition-transform duration-basic ease-enter-snappy group-hover/node:scale-150 group-focus-visible/node:scale-150 group-active/node:scale-125 motion-reduce:transition-none`,
              children: (0, X.jsx)(`span`, { className: `absolute inset-0 rounded-full bg-text-tertiary` }),
            }),
          }),
        });
      }),
      (t[45] = A),
      (t[46] = Te),
      (t[47] = De),
      (t[48] = Se),
      (t[49] = Oe))
    : (Oe = t[49]);
  let ke = Oe,
    Ae;
  t[50] === l
    ? (Ae = t[51])
    : ((Ae = function (e) {
        let t = I.current?.querySelector(`[data-version-history-index="${e}"]`);
        if (t != null) return e === 0 ? null : l.find((e) => e.checkpoint_id === t.dataset.versionHistoryKey);
      }),
      (t[50] = l),
      (t[51] = Ae));
  let Me = Ae,
    Ne;
  t[52] !== o ||
  t[53] !== ye ||
  t[54] !== A ||
  t[55] !== D ||
  t[56] !== De ||
  t[57] !== M ||
  t[58] !== Se ||
  t[59] !== a ||
  t[60] !== Me ||
  t[61] !== l
    ? ((Ne = function (e, t) {
        let n = A != null && A !== e,
          r = e === `from` ? o : a,
          i = r == null ? null : l.find((e) => e.checkpoint_id === r),
          s = e === `from` ? a : o,
          c = s == null ? 0 : l.findIndex((e) => e.checkpoint_id === s) + 1,
          u =
            e === `from`
              ? D.formatMessage({
                  id: `codex.page.versions.adjustComparisonStart`,
                  defaultMessage: `Adjust comparison start`,
                  description: `Accessible label and tooltip for the outlined comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the earlier version`,
                })
              : D.formatMessage({
                  id: `codex.page.versions.adjustComparisonEnd`,
                  defaultMessage: `Adjust comparison end`,
                  description: `Accessible label and tooltip for the filled comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the later displayed version`,
                }),
          d = M?.endpoint === e ? M : null,
          f = null;
        return (
          d != null &&
            (f =
              d.version == null
                ? D.formatMessage({
                    id: `codex.page.versions.current`,
                    defaultMessage: `Current version`,
                    description: `The current live Page document captured when its version preview was opened`,
                  })
                : D.formatDate(d.version.created_at, {
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `numeric`,
                    second: `numeric`,
                  })),
          (0, X.jsx)(Ti, {
            endpoint: e,
            index: t,
            minIndex: e === `from` ? c : 0,
            maxIndex: e === `to` ? c : l.length,
            timeline: I,
            label: n ? De(i ?? null, A) : u,
            pressed: A === e,
            previewLabel: f,
            previewMethod: d?.method ?? null,
            onChoose: (t, r) => {
              n ? Se(i ?? null, r) : ((F.current = t), P(null), j(A === e ? null : e));
            },
            onPreview: (t, n, r) => {
              let i = Me(t);
              i !== void 0 &&
                ((F.current = r),
                B(!1),
                j(e),
                P((t) =>
                  t?.endpoint === e && t.version === i && t.method === n
                    ? t
                    : { endpoint: e, version: i, method: n },
                ));
            },
            onCommit: (t, n) => {
              let r = Me(t);
              r !== void 0 && Se(r, n, e);
            },
            onCancel: (t) => ye(e, t),
          })
        );
      }),
      (t[52] = o),
      (t[53] = ye),
      (t[54] = A),
      (t[55] = D),
      (t[56] = De),
      (t[57] = M),
      (t[58] = Se),
      (t[59] = a),
      (t[60] = Me),
      (t[61] = l),
      (t[62] = Ne))
    : (Ne = t[62]);
  let Pe = Ne,
    Fe;
  t[63] === H ? (Fe = t[64]) : ((Fe = { paddingBottom: H }), (t[63] = H), (t[64] = Fe));
  let Ie;
  t[65] !== ye || t[66] !== A || t[67] !== S || t[68] !== M
    ? ((Ie = (e) => {
        e.key === `Escape` &&
          !e.defaultPrevented &&
          (e.stopPropagation(), A != null || M != null ? ye(M?.endpoint ?? A ?? void 0) : S());
      }),
      (t[65] = ye),
      (t[66] = A),
      (t[67] = S),
      (t[68] = M),
      (t[69] = Ie))
    : (Ie = t[69]);
  let Le;
  t[70] !== O || t[71] !== D || t[72] !== S || t[73] !== C
    ? ((Le = C
        ? (0, X.jsx)(r, {
            density: `surface`,
            leading: [
              {
                id: `title`,
                content: (0, X.jsx)(`h2`, {
                  id: `${O}-title`,
                  className: `truncate text-sm font-medium select-none`,
                  children: (0, X.jsx)(_, {
                    id: `codex.page.versions.title`,
                    defaultMessage: `Version history`,
                    description: `Title of the Page side panel listing saved checkpoints`,
                  }),
                }),
              },
            ],
            trailing: [
              {
                id: `close`,
                content: (0, X.jsx)(ve, {
                  "aria-label": D.formatMessage({
                    id: `codex.page.versions.closeHistory`,
                    defaultMessage: `Close version history`,
                    description: `Close version history and show the document's current contents`,
                  }),
                  uniform: !0,
                  onClick: S,
                  children: (0, X.jsx)(f, { icon: { 16: N, 20: s } }),
                }),
              },
            ],
          })
        : (0, X.jsx)(`h2`, {
            id: `${O}-title`,
            className: `sr-only`,
            children: (0, X.jsx)(_, {
              id: `codex.page.versions.title`,
              defaultMessage: `Version history`,
              description: `Title of the Page side panel listing saved checkpoints`,
            }),
          })),
      (t[70] = O),
      (t[71] = D),
      (t[72] = S),
      (t[73] = C),
      (t[74] = Le))
    : (Le = t[74]);
  let Re = `${O}-read-only`,
    ze;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, X.jsx)(_, {
        id: `codex.page.versions.readOnlyDescription`,
        defaultMessage: `History previews are read only`,
        description: `Accessible description of the Page version history region, which previews versions without editing the live document`,
      })),
      (t[75] = ze))
    : (ze = t[75]);
  let Be;
  t[76] === Re
    ? (Be = t[77])
    : ((Be = (0, X.jsx)(`span`, { id: Re, className: `sr-only`, children: ze })), (t[76] = Re), (t[77] = Be));
  let Ve = `${O}-comparison-start`,
    He;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, X.jsx)(_, {
        id: `codex.page.versions.comparisonVersionDescription`,
        defaultMessage: `Version used for comparison`,
        description: `Accessible description identifying the Page version used as the baseline for comparison highlights`,
      })),
      (t[78] = He))
    : (He = t[78]);
  let Ue;
  t[79] === Ve
    ? (Ue = t[80])
    : ((Ue = (0, X.jsx)(`span`, { id: Ve, hidden: !0, children: He })), (t[79] = Ve), (t[80] = Ue));
  let We = `${O}-viewing`,
    Ge;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, X.jsx)(_, {
        id: `codex.page.versions.viewingDescription`,
        defaultMessage: `Version shown in the document`,
        description: `Accessible description identifying the selected Page version displayed in the document canvas`,
      })),
      (t[81] = Ge))
    : (Ge = t[81]);
  let Ke;
  t[82] === We
    ? (Ke = t[83])
    : ((Ke = (0, X.jsx)(`span`, { id: We, hidden: !0, children: Ge })), (t[82] = We), (t[83] = Ke));
  let qe;
  t[84] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qe = (e) => {
        (B(e.detail > 0), P(null), j(null));
      }),
      (t[84] = qe))
    : (qe = t[84]);
  let Je;
  t[85] !== ye || t[86] !== A || t[87] !== M
    ? ((Je =
        A != null || M != null
          ? (0, X.jsxs)(`div`, {
              className: `flex min-h-8 items-center justify-between gap-2`,
              children: [
                (0, X.jsxs)(`span`, {
                  className: `text-xs text-secondary`,
                  role: `status`,
                  children: [
                    M?.method === `keyboard`
                      ? (0, X.jsx)(_, {
                          id: `codex.page.versions.confirmKeyboardRange`,
                          defaultMessage: `Arrow keys to adjust · Enter to compare`,
                          description: `Instruction while a timeline endpoint is being adjusted with the keyboard; Enter confirms and loads the comparison`,
                        })
                      : null,
                    M?.method === `pointer`
                      ? (0, X.jsx)(_, {
                          id: `codex.page.versions.confirmDraggedRange`,
                          defaultMessage: `Release to compare`,
                          description: `Instruction while dragging a comparison endpoint along the Page revision timeline`,
                        })
                      : null,
                    M == null && A === `from`
                      ? (0, X.jsx)(_, {
                          id: `codex.page.versions.chooseComparisonRow`,
                          defaultMessage: `Choose a comparison version`,
                          description: `Instruction while choosing a new comparison version directly in the Page history timeline`,
                        })
                      : null,
                    M == null && A === `to`
                      ? (0, X.jsx)(_, {
                          id: `codex.page.versions.chooseSelectedVersion`,
                          defaultMessage: `Choose the selected version`,
                          description: `Instruction while choosing which Page version to show directly in the history timeline`,
                        })
                      : null,
                  ],
                }),
                M?.method === `pointer`
                  ? (0, X.jsx)(`span`, {
                      className: `text-xs text-secondary select-none`,
                      children: (0, X.jsx)(_, {
                        id: `codex.page.versions.cancelDraggedRange`,
                        defaultMessage: `Esc to cancel`,
                        description: `Keyboard hint while dragging a Page comparison timeline endpoint: press Escape to discard the drag and keep the previous comparison`,
                      }),
                    })
                  : (0, X.jsx)(n, {
                      color: `ghostSecondary`,
                      size: `compact`,
                      onClick: () => ye(),
                      children: (0, X.jsx)(_, {
                        id: `codex.page.versions.cancelEndpointSelection`,
                        defaultMessage: `Cancel`,
                        description: `Cancel changing a Page comparison timeline endpoint without changing either selected version`,
                      }),
                    }),
              ],
            })
          : void 0),
      (t[85] = ye),
      (t[86] = A),
      (t[87] = M),
      (t[88] = Je))
    : (Je = t[88]);
  let Ye;
  t[89] !== p || t[90] !== Je ? ((Ye = p(Je)), (t[89] = p), (t[90] = Je), (t[91] = Ye)) : (Ye = t[91]);
  let Xe;
  t[92] === Ye
    ? (Xe = t[93])
    : ((Xe = (0, X.jsx)(`div`, {
        className: `shrink-0 px-toolbar pt-3`,
        role: `presentation`,
        onClick: qe,
        children: Ye,
      })),
      (t[92] = Ye),
      (t[93] = Xe));
  let Ze = `${O}-title`,
    Qe = `${O}-read-only`,
    $e;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (e) => {
        let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget;
        te.current = n - r - t <= 1;
      }),
      (t[94] = $e))
    : ($e = t[94]);
  let et;
  t[95] !== Ze || t[96] !== Qe
    ? ((et = {
        ref: L,
        "aria-labelledby": Ze,
        "aria-describedby": Qe,
        role: `region`,
        tabIndex: 0,
        onScroll: $e,
      }),
      (t[95] = Ze),
      (t[96] = Qe),
      (t[97] = et))
    : (et = t[97]);
  let tt = `${O}-timeline`,
    nt;
  t[98] === D
    ? (nt = t[99])
    : ((nt = D.formatMessage({
        id: `codex.page.versions.listLabel`,
        defaultMessage: `Page versions`,
        description: `Accessible label for the current Page and its saved checkpoints grouped by date`,
      })),
      (t[98] = D),
      (t[99] = nt));
  let rt = M?.endpoint === `from` ? (M.version?.checkpoint_id ?? null) : o,
    it = M?.endpoint === `to` ? (M.version?.checkpoint_id ?? null) : a,
    at = M?.endpoint ?? (o === a ? `from` : void 0),
    ot,
    st;
  t[100] === Pe
    ? ((ot = t[101]), (st = t[102]))
    : ((ot = (e) => Pe(`from`, e)), (st = (e) => Pe(`to`, e)), (t[100] = Pe), (t[101] = ot), (t[102] = st));
  let ct;
  t[103] !== re ||
  t[104] !== ke ||
  t[105] !== c ||
  t[106] !== rt ||
  t[107] !== it ||
  t[108] !== at ||
  t[109] !== ot ||
  t[110] !== st
    ? ((ct = {
        showChanges: c,
        animate: re,
        fromKey: rt,
        toKey: it,
        activeEndpoint: at,
        fromControl: ot,
        toControl: st,
        renderNodeControl: ke,
      }),
      (t[103] = re),
      (t[104] = ke),
      (t[105] = c),
      (t[106] = rt),
      (t[107] = it),
      (t[108] = at),
      (t[109] = ot),
      (t[110] = st),
      (t[111] = ct))
    : (ct = t[111]);
  let lt;
  t[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, X.jsx)(_, {
        id: `codex.page.versions.currentCaptureTooltip`,
        defaultMessage: `Captured on opening. May include unsaved edits`,
        description: `Brief tooltip for the frozen current Page snapshot, captured when version history opened`,
      })),
      (t[112] = lt))
    : (lt = t[112]);
  let ut;
  t[113] === D
    ? (ut = t[114])
    : ((ut = D.formatMessage({
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (t[113] = D),
      (t[114] = ut));
  let dt = `${O}-current ${O}-current-editors${c && ce ? ` ${O}-comparison-start` : ``}${c && a == null ? ` ${O}-viewing` : ``}`,
    ft = Te(null),
    pt;
  t[115] === Se ? (pt = t[116]) : ((pt = (e) => Se(null, e.detail > 0)), (t[115] = Se), (t[116] = pt));
  let mt = q ? `font-medium` : void 0,
    gt;
  t[117] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (0, X.jsx)(_, {
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (t[117] = gt))
    : (gt = t[117]);
  let _t;
  t[118] === mt
    ? (_t = t[119])
    : ((_t = (0, X.jsx)(`span`, { className: mt, children: gt })), (t[118] = mt), (t[119] = _t));
  let vt = `${O}-current-editors`,
    yt;
  t[120] !== d || t[121] !== u
    ? ((yt = (0, X.jsx)(En, { compact: !0, current: !0, summary: d, names: u })),
      (t[120] = d),
      (t[121] = u),
      (t[122] = yt))
    : (yt = t[122]);
  let bt;
  t[123] !== vt || t[124] !== yt
    ? ((bt = (0, X.jsx)(`span`, { id: vt, className: `max-w-40 min-w-0`, children: yt })),
      (t[123] = vt),
      (t[124] = yt),
      (t[125] = bt))
    : (bt = t[125]);
  let xt;
  t[126] !== q ||
  t[127] !== ut ||
  t[128] !== dt ||
  t[129] !== ft ||
  t[130] !== pt ||
  t[131] !== _t ||
  t[132] !== bt
    ? ((xt = (0, X.jsx)(we, {
        tooltipContent: lt,
        side: `bottom`,
        align: `start`,
        children: (0, X.jsx)(ht, {
          ariaCurrent: q,
          ariaLabel: ut,
          ariaDescribedBy: dt,
          compactSecondLine: !0,
          density: `row`,
          isSelected: q,
          isDisabled: ft,
          onSelect: pt,
          title: _t,
          rightText: bt,
        }),
      })),
      (t[126] = q),
      (t[127] = ut),
      (t[128] = dt),
      (t[129] = ft),
      (t[130] = pt),
      (t[131] = _t),
      (t[132] = bt),
      (t[133] = xt))
    : (xt = t[133]);
  let St = `${O}-current`,
    Ct;
  t[134] === St
    ? (Ct = t[135])
    : ((Ct = (0, X.jsx)(`span`, { id: St, className: `sr-only`, children: ge })),
      (t[134] = St),
      (t[135] = Ct));
  let wt;
  t[136] !== xt || t[137] !== Ct
    ? ((wt = (0, X.jsxs)(X.Fragment, { children: [xt, Ct] })), (t[136] = xt), (t[137] = Ct), (t[138] = wt))
    : (wt = t[138]);
  let Tt;
  t[139] !== o ||
  t[140] !== fe ||
  t[141] !== O ||
  t[142] !== D ||
  t[143] !== Te ||
  t[144] !== u ||
  t[145] !== Se ||
  t[146] !== a ||
  t[147] !== c ||
  t[148] !== se
    ? ((Tt = (e) =>
        (0, X.jsx)(ht, {
          ariaCurrent: fe === e.checkpoint_id,
          ariaLabel: D.formatDate(e.created_at, { dateStyle: `full`, timeStyle: `medium` }),
          ariaDescribedBy: `${O}-${e.checkpoint_id}${c && e.checkpoint_id === o ? ` ${O}-comparison-start` : ``}${c && e.checkpoint_id === a ? ` ${O}-viewing` : ``}`,
          compactSecondLine: !0,
          density: `row`,
          isSelected: fe === e.checkpoint_id,
          isDisabled: Te(e),
          onSelect: (t) => Se(e, t.detail > 0),
          title: (0, X.jsx)(`span`, {
            className: fe === e.checkpoint_id ? `font-medium` : void 0,
            children: se.get(e.checkpoint_id),
          }),
          rightText: (0, X.jsx)(`span`, {
            id: `${O}-${e.checkpoint_id}`,
            className: `max-w-40 min-w-0`,
            children: (0, X.jsx)(En, { compact: !0, summary: e, names: u }),
          }),
        })),
      (t[139] = o),
      (t[140] = fe),
      (t[141] = O),
      (t[142] = D),
      (t[143] = Te),
      (t[144] = u),
      (t[145] = Se),
      (t[146] = a),
      (t[147] = c),
      (t[148] = se),
      (t[149] = Tt))
    : (Tt = t[149]);
  let Et;
  t[150] !== O || t[151] !== E || t[152] !== T || t[153] !== h || t[154] !== l.length
    ? ((Et =
        h == null
          ? null
          : (0, X.jsxs)(n, {
              className: `w-full shrink-0 justify-center`,
              color: `ghost`,
              size: `compact`,
              "aria-labelledby": `${O}-load-older`,
              "aria-busy": T,
              "aria-disabled": T,
              onBlur: () => {
                R.current = null;
              },
              onClick: (e) => {
                T || ((R.current = { trigger: e.currentTarget, count: l.length }), h());
              },
              children: [
                T ? (0, X.jsx)(xe, { className: `icon-xxs` }) : null,
                (0, X.jsx)(`span`, {
                  id: `${O}-load-older`,
                  role: `status`,
                  children: E
                    ? (0, X.jsx)(_, {
                        id: `codex.page.versions.retryOlder`,
                        defaultMessage: `Retry loading older versions`,
                        description: `Retry action after loading older Page versions failed`,
                      })
                    : (0, X.jsx)(_, {
                        id: `codex.page.versions.loadOlder`,
                        defaultMessage: `Load older versions`,
                        description: `Load older checkpoints in the Page version history panel`,
                      }),
                }),
              ],
            })),
      (t[150] = O),
      (t[151] = E),
      (t[152] = T),
      (t[153] = h),
      (t[154] = l.length),
      (t[155] = Et))
    : (Et = t[155]);
  let Dt;
  t[156] !== nt || t[157] !== ct || t[158] !== wt || t[159] !== Tt || t[160] !== Et || t[161] !== l
    ? ((Dt = (0, X.jsx)(Tn, {
        label: nt,
        items: l,
        getDate: Ni,
        getKey: Mi,
        comparison: ct,
        current: wt,
        renderItem: Tt,
        continuation: Et,
      })),
      (t[156] = nt),
      (t[157] = ct),
      (t[158] = wt),
      (t[159] = Tt),
      (t[160] = Et),
      (t[161] = l),
      (t[162] = Dt))
    : (Dt = t[162]);
  let Ot;
  t[163] !== m || t[164] !== tt || t[165] !== Dt
    ? ((Ot = (0, X.jsxs)(`div`, { id: tt, ref: I, children: [Dt, m] })),
      (t[163] = m),
      (t[164] = tt),
      (t[165] = Dt),
      (t[166] = Ot))
    : (Ot = t[166]);
  let kt;
  t[167] !== et || t[168] !== Ot
    ? ((kt = (0, X.jsx)(w, {
        className: `relative grid min-h-0 flex-1 overflow-hidden`,
        fade: `mask`,
        scrollClassName: `min-h-0 overflow-y-auto overscroll-contain px-toolbar py-3 focus-visible:outline-2 focus-visible:outline-ring`,
        scrollProps: et,
        children: Ot,
      })),
      (t[167] = et),
      (t[168] = Ot),
      (t[169] = kt))
    : (kt = t[169]);
  let At;
  return (
    t[170] !== Fe ||
    t[171] !== Ie ||
    t[172] !== Le ||
    t[173] !== Be ||
    t[174] !== Ue ||
    t[175] !== Ke ||
    t[176] !== Xe ||
    t[177] !== kt
      ? ((At = (0, X.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col`,
          style: Fe,
          role: `presentation`,
          onKeyDown: Ie,
          children: [Le, Be, Ue, Ke, Xe, kt],
        })),
        (t[170] = Fe),
        (t[171] = Ie),
        (t[172] = Le),
        (t[173] = Be),
        (t[174] = Ue),
        (t[175] = Ke),
        (t[176] = Xe),
        (t[177] = kt),
        (t[178] = At))
      : (At = t[178]),
    At
  );
}
function Mi(e) {
  return e.checkpoint_id;
}
function Ni(e) {
  return e.created_at;
}
function Pi() {
  return 0;
}
function Fi() {
  return a().reduce((e, t) => Math.max(e, window.innerHeight - t.top), 0);
}
var Ii, Li, X;
function Ri() {
  return (Ri = e(() => {
    ((Ii = ke()),
      j(),
      (Li = Pe()),
      K(),
      u(),
      Te(),
      F(),
      O(),
      Re(),
      ue(),
      q(),
      W(),
      b(),
      At(),
      c(),
      Cn(),
      wn(),
      ki(),
      (X = Me()));
  }))();
}
function zi(e) {
  let t = (0, Vi.c)(59),
    { pageId: r, streamKind: i, version: a, ready: o, signal: s, onRestore: c, onRestored: u } = e,
    d = v(l),
    f = ne(),
    p;
  t[0] !== f || t[1] !== a.created_at
    ? ((p = f.formatMessage(
        {
          id: `codex.page.versions.restore.target`,
          defaultMessage: `Restore version from {date}`,
          description: `Accessible label and tooltip identifying the exact saved Page version that the Restore button will restore`,
        },
        { date: f.formatDate(a.created_at, { dateStyle: `medium`, timeStyle: `medium` }) },
      )),
      (t[0] = f),
      (t[1] = a.created_at),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    [h, g] = (0, Hi.useState)(!1),
    [y, b] = (0, Hi.useState)(!1),
    [x, S] = (0, Hi.useState)(null),
    C = x !== `unsupported` && x !== `limit_exceeded`,
    w = (0, Hi.useRef)(null),
    T,
    E;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => () => w.current?.abort()), (E = []), (t[3] = T), (t[4] = E))
    : ((T = t[3]), (E = t[4])),
    (0, Hi.useEffect)(T, E));
  let D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        (w.current?.abort(), (w.current = null), b(!1), g(!1));
      }),
      (t[5] = D))
    : (D = t[5]);
  let O = D,
    k;
  t[6] !== C ||
  t[7] !== c ||
  t[8] !== u ||
  t[9] !== r ||
  t[10] !== d ||
  t[11] !== s ||
  t[12] !== i ||
  t[13] !== a.checkpoint_id
    ? ((k = async () => {
        if (!C || w.current != null || s.aborted) return;
        let e = new AbortController();
        w.current = e;
        let t = AbortSignal.any([s, e.signal]),
          n = lt(d, `version_restore`, { stream_kind: i }, t);
        (b(!0), S(null));
        try {
          let e = await Sn({ pageId: r, checkpointId: a.checkpoint_id, streamKind: i, signal: t });
          t.throwIfAborted();
          let o = await c(e, t);
          (t.throwIfAborted(), n(o), o === `restored` ? u() : S(o));
        } catch {
          (n(t.aborted ? `canceled` : `failure`), t.aborted || S(`unavailable`));
        }
        w.current === e && ((w.current = null), b(!1));
      }),
      (t[6] = C),
      (t[7] = c),
      (t[8] = u),
      (t[9] = r),
      (t[10] = d),
      (t[11] = s),
      (t[12] = i),
      (t[13] = a.checkpoint_id),
      (t[14] = k))
    : (k = t[14]);
  let A = k,
    j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = { onEscapeKeyDown: Bi }), (t[15] = j))
    : (j = t[15]);
  let M = !o,
    N;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Ui.jsx)(_, {
        id: `codex.page.versions.restore.open`,
        defaultMessage: `Restore`,
        description: `Open confirmation to restore the saved Page version beside this button`,
      })),
      (t[16] = N))
    : (N = t[16]);
  let P;
  t[17] !== m || t[18] !== M
    ? ((P = (0, Ui.jsx)(n, {
        color: `ghostSecondary`,
        size: `actionSm`,
        radius: `full`,
        disabled: M,
        "aria-label": m,
        children: N,
      })),
      (t[17] = m),
      (t[18] = M),
      (t[19] = P))
    : (P = t[19]);
  let F;
  t[20] !== h || t[21] !== m || t[22] !== P
    ? ((F = (0, Ui.jsx)(we, { cloneCustomTrigger: !0, triggerPopupOpen: h, tooltipContent: m, children: P })),
      (t[20] = h),
      (t[21] = m),
      (t[22] = P),
      (t[23] = F))
    : (F = t[23]);
  let I;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (e) => {
        e ? (S(null), g(!0)) : O();
      }),
      (t[24] = I))
    : (I = t[24]);
  let ee;
  t[25] === A
    ? (ee = t[26])
    : ((ee = (e) => {
        (e.preventDefault(), A());
      }),
      (t[25] = A),
      (t[26] = ee));
  let L;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Ui.jsx)(ie, {
        className: `contents`,
        children: (0, Ui.jsx)(_, {
          id: `codex.page.versions.restore.title`,
          defaultMessage: `Restore this version?`,
          description: `Confirmation title before restoring a historical Page version`,
        }),
      })),
      (t[27] = L))
    : (L = t[27]);
  let te;
  t[28] !== f || t[29] !== a.created_at
    ? ((te = f.formatDate(a.created_at, { dateStyle: `long`, timeStyle: `medium` })),
      (t[28] = f),
      (t[29] = a.created_at),
      (t[30] = te))
    : (te = t[30]);
  let R;
  t[31] === te
    ? (R = t[32])
    : ((R = (0, Ui.jsx)(H, {
        subtitleTone: `secondary`,
        title: L,
        subtitle: (0, Ui.jsx)(ce, {
          className: `contents`,
          children: (0, Ui.jsx)(_, {
            id: `codex.page.versions.restore.description`,
            defaultMessage: `Replace the current page content with the version from {date}. Current comments will be kept.`,
            description: `Confirmation explaining which historical Page version will replace the current content, while preserving current comments`,
            values: { date: te },
          }),
        }),
      })),
      (t[31] = te),
      (t[32] = R));
  let z;
  t[33] === x
    ? (z = t[34])
    : ((z =
        x == null
          ? null
          : (0, Ui.jsxs)(`p`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children: [
                x === `unsupported`
                  ? (0, Ui.jsx)(_, {
                      id: `codex.page.versions.restore.unsupported`,
                      defaultMessage: `This version includes changes that can’t be restored. Choose another version`,
                      description: `Error when a historical Page version cannot be restored because its changes conflict with protected document content or current editing capabilities`,
                    })
                  : null,
                x === `limit_exceeded`
                  ? (0, Ui.jsx)(_, {
                      id: `codex.page.versions.restore.limitExceeded`,
                      defaultMessage: `This version is too large to restore in one edit. Choose another version`,
                      description: `Error when restoring a historical Page version would exceed the document update size limit`,
                    })
                  : null,
                x === `unavailable`
                  ? (0, Ui.jsx)(_, {
                      id: `codex.page.versions.restore.error`,
                      defaultMessage: `Could not restore this version. Check your connection and editing access, then try again`,
                      description: `Error when downloading or applying a historical Page version fails; the dialog remains open for retry`,
                    })
                  : null,
              ],
            })),
      (t[33] = x),
      (t[34] = z));
  let re;
  t[35] === y
    ? (re = t[36])
    : ((re = y
        ? (0, Ui.jsx)(_, {
            id: `codex.page.versions.restore.pending`,
            defaultMessage: `Restoring version…`,
            description: `Status while preparing and applying the selected historical Page version`,
          })
        : null),
      (t[35] = y),
      (t[36] = re));
  let B;
  t[37] === re
    ? (B = t[38])
    : ((B = (0, Ui.jsx)(`p`, {
        role: `status`,
        "aria-atomic": !0,
        className: `text-sm text-secondary`,
        children: re,
      })),
      (t[37] = re),
      (t[38] = B));
  let V;
  t[39] !== R || t[40] !== z || t[41] !== B
    ? ((V = (0, Ui.jsxs)(me, { children: [R, z, B] })), (t[39] = R), (t[40] = z), (t[41] = B), (t[42] = V))
    : (V = t[42]);
  let ae;
  t[43] === C
    ? (ae = t[44])
    : ((ae = C
        ? (0, Ui.jsx)(n, {
            color: `secondary`,
            type: `button`,
            onClick: O,
            children: (0, Ui.jsx)(_, {
              id: `codex.page.versions.restore.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel restoring a historical Page version`,
            }),
          })
        : null),
      (t[43] = C),
      (t[44] = ae));
  let oe;
  t[45] !== C || t[46] !== y
    ? ((oe = C
        ? (0, Ui.jsx)(n, {
            color: `primary`,
            type: `submit`,
            loading: y,
            children: (0, Ui.jsx)(_, {
              id: `codex.page.versions.restore.confirm`,
              defaultMessage: `Restore version`,
              description: `Confirm replacing the current Page content with the selected historical version`,
            }),
          })
        : (0, Ui.jsx)(n, {
            color: `primary`,
            type: `button`,
            onClick: O,
            children: (0, Ui.jsx)(_, {
              id: `codex.page.versions.restore.chooseAnother`,
              defaultMessage: `Choose another version`,
              description: `Return to Page version history after the selected version cannot be restored`,
            }),
          })),
      (t[45] = C),
      (t[46] = y),
      (t[47] = oe))
    : (oe = t[47]);
  let U;
  t[48] !== ae || t[49] !== oe
    ? ((U = (0, Ui.jsx)(me, { children: (0, Ui.jsxs)(Se, { children: [ae, oe] }) })),
      (t[48] = ae),
      (t[49] = oe),
      (t[50] = U))
    : (U = t[50]);
  let W;
  t[51] !== ee || t[52] !== V || t[53] !== U
    ? ((W = (0, Ui.jsxs)(be, { as: `form`, onSubmit: ee, children: [V, U] })),
      (t[51] = ee),
      (t[52] = V),
      (t[53] = U),
      (t[54] = W))
    : (W = t[54]);
  let G;
  return (
    t[55] !== h || t[56] !== F || t[57] !== W
      ? ((G = (0, Ui.jsx)(ge, {
          open: h,
          size: `compact`,
          contentProps: j,
          triggerContent: F,
          onOpenChange: I,
          children: W,
        })),
        (t[55] = h),
        (t[56] = F),
        (t[57] = W),
        (t[58] = G))
      : (G = t[58]),
    G
  );
}
function Bi(e) {
  return e.stopPropagation();
}
var Vi, Hi, Ui;
function Wi() {
  return (Wi = e(() => {
    ((Vi = ke()), j(), (Hi = Pe()), K(), qt(), Te(), De(), G(), W(), Ae(), xn(), (Ui = Me()));
  }))();
}
function Gi(e) {
  let t = new He();
  try {
    if ((gt(t), dt(t, e), Vt(t))) return null;
    Wt(t);
    let n = Ut(t);
    return { title: n.title.toJSON(), blocks: St(n).map((e) => ({ id: e.id, unit: Nt(e) })) };
  } catch {
    return null;
  } finally {
    t.destroy();
  }
}
function Ki() {
  return (Ki = e(() => {
    (Ft(), jt(), Et(), Ie(), at());
  }))();
}
function qi({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i }) {
  let a = new Pt({ max: Xi, maxSize: Zi, sizeCalculation: Yi }),
    o = new Map(),
    s = new Set(),
    c = new Set(),
    u = new AbortController(),
    d,
    f = !1,
    p = !1,
    m = 0;
  function h() {
    if (d != null || f) return;
    let a = nt(e, t, n),
      o = xt((n, a, o, s, c) => {
        (n.chain.get(l.id) ?? n.node) === (e.chain.get(l.id) ?? e.node) &&
          a === t &&
          o === r &&
          (c?.streamKind ?? `content`) === i &&
          _();
      });
    ((d = () => {
      (a.stop(), o(), a.signal.removeEventListener(`abort`, _));
    }),
      a.signal.addEventListener(`abort`, _, { once: !0 }),
      a.signal.aborted && _());
  }
  function g() {
    ((f = !0), u.abort(), d?.(), (d = void 0), a.clear());
    for (let e of o.values()) v(e);
  }
  function _() {
    if (!f) {
      ((p = !0), g());
      for (let e of c) e();
    }
  }
  function v(e) {
    e.controller.abort();
    for (let t of e.subscribers) t.reject(Ji(e.controller.signal));
    o.delete(e.checkpointId);
  }
  function y(e, t) {
    let n = {
      checkpointId: e,
      controller: new AbortController(),
      subscribers: new Set(),
      prefetch: t,
      started: !1,
    };
    return (o.set(e, n), n);
  }
  function b() {
    for (; !f && s.size < Qi;) {
      let e = [...o.values()].filter((e) => !e.started),
        t =
          e.find((e) => !e.prefetch) ?? ([...s].some((e) => e.prefetch) ? void 0 : e.find((e) => e.prefetch));
      if (t == null) return;
      ((t.started = !0), s.add(t), x(t));
    }
  }
  async function x(t) {
    let n = lt(
      e,
      `version_snapshot`,
      { stream_kind: i, source: t.prefetch ? `prefetch` : `requested` },
      t.controller.signal,
    );
    try {
      let e = await Sn({
        pageId: r,
        checkpointId: t.checkpointId,
        streamKind: i,
        signal: t.controller.signal,
      });
      t.controller.signal.throwIfAborted();
      let o = Gi(e);
      if (o == null) throw Error(`The Page checkpoint contains an invalid document`);
      (a.set(t.checkpointId, o), n(`success`));
      for (let e of t.subscribers) e.resolve(o);
    } catch (e) {
      (n(t.controller.signal.aborted ? `canceled` : `failure`),
        !t.controller.signal.aborted && e instanceof le && (e.status === 401 || e.status === 403) && _());
      let r = e instanceof Error ? e : Error(`The Page version could not be loaded`, { cause: e });
      for (let e of t.subscribers) e.reject(r);
    } finally {
      (o.get(t.checkpointId) === t && o.delete(t.checkpointId), s.delete(t), b());
    }
  }
  return {
    signal: u.signal,
    retain() {
      return (
        (m += 1),
        h(),
        () => {
          (--m,
            queueMicrotask(() => {
              m === 0 && g();
            }));
        }
      );
    },
    subscribeInvalidation: (e) => (
      c.add(e),
      h(),
      () => {
        c.delete(e);
      }
    ),
    getInvalidated: () => p,
    peek(e) {
      return a.get(e);
    },
    read(e, t) {
      if ((h(), f || t.aborted)) return Promise.reject(Ji(t));
      let n = a.get(e);
      if (n != null) return Promise.resolve(n);
      let r = o.get(e);
      if (
        (r == null || (!r.started && r.prefetch)) &&
        [...o.values()].filter((e) => !e.started && !e.prefetch).length >= $i
      )
        return Promise.reject(new DOMException(`Page version request superseded`, `AbortError`));
      let i = r ?? y(e, !1);
      return (
        (i.prefetch = !1),
        new Promise((e, n) => {
          let r = {
              resolve: (t) => {
                (a(), e(t));
              },
              reject: (e) => {
                (a(), n(e));
              },
            },
            a = () => {
              (t.removeEventListener(`abort`, o), i.subscribers.delete(r));
            },
            o = () => {
              (r.reject(Ji(t)), i.subscribers.size === 0 && !i.prefetch && v(i));
            };
          (i.subscribers.add(r), t.addEventListener(`abort`, o, { once: !0 }), b());
        })
      );
    },
    prefetch(e) {
      if ((h(), f)) return;
      let t = new Set(e.slice(0, ea));
      for (let e of o.values()) e.prefetch && !t.has(e.checkpointId) && v(e);
      for (let e of t) !a.has(e) && !o.has(e) && y(e, !0);
      b();
    },
    dispose: g,
  };
}
function Ji(e) {
  return e.reason instanceof Error ? e.reason : new DOMException(`Aborted`, `AbortError`);
}
function Yi(e) {
  let t = 128 + e.title.length * 2;
  for (let { id: n, unit: r } of e.blocks) {
    ((t += 256 + (n.length + r.markdown.length) * 2), (t += (r.codeWrap?.length ?? 0) * 8));
    for (let e of r.tableWidths ?? []) t += 32 + e.length * 8;
    ((t += (r.image?.file_id.length ?? 0) * 2),
      (t += (r.image?.blurhash?.length ?? 0) * 2),
      (t += (r.visualization?.file_id.length ?? 0) * 2));
  }
  return t;
}
var Xi, Zi, Qi, $i, ea;
function ta() {
  return (ta = e(() => {
    (Mt(), qt(), ot(), Kt(), Ae(), Oe(), xn(), Ki(), (Xi = 12), (Zi = 8388608), (Qi = 2), ($i = 2), (ea = 2));
  }))();
}
function na({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i, markdown: a }) {
  let o = null,
    s,
    c = new Map(),
    l = qi({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i });
  l.signal.addEventListener(
    `abort`,
    () => {
      ((o = null), (s = void 0), c.clear());
    },
    { once: !0 },
  );
  function u(e) {
    let t = c.get(e);
    return (t != null && (c.delete(e), c.set(e, t)), t);
  }
  return {
    loader: l,
    peekSnapshot(e) {
      if (e !== void 0) return e == null ? s : l.peek(e);
    },
    peekComparison: u,
    readCurrent(e) {
      return (
        (o ??= Promise.resolve()
          .then(async () => {
            if ((l.signal.throwIfAborted(), e == null)) throw Error(`The current Page is not available`);
            let t = await e();
            l.signal.throwIfAborted();
            let n = Gi(t);
            if (n == null) throw Error(`The current Page snapshot is invalid`);
            return ((s = n), n);
          })
          .catch((e) => {
            throw ((o = null), e);
          })),
        o
      );
    },
    async prepare(e, t, n, r) {
      let i = AbortSignal.any([r, l.signal]);
      i.throwIfAborted();
      let o = u(n);
      if (o != null) return o;
      let s = await gr({ snapshot: t, baseline: e, markdown: a, signal: i });
      i.throwIfAborted();
      let d = e === t ? 0 : nr(e, a).document.nodeSize;
      if (s.document.nodeSize + d <= 25e4)
        for (c.set(n, s); c.size > 4;) {
          let e = c.keys().next().value;
          e != null && c.delete(e);
        }
      return s;
    },
  };
}
function ra() {
  return (ra = e(() => {
    (ar(), Ar(), ta(), Ki());
  }))();
}
function ia(e) {
  let t = (0, aa.c)(22),
    { version: n, timeLabel: r, pickerOpen: i } = e,
    a = i !== void 0 && i,
    o = ne(),
    s = Xe(),
    c;
  t[0] !== o || t[1] !== n.created_at
    ? ((c = o.formatDate(n.created_at, { dateStyle: `full`, timeStyle: `medium` })),
      (t[0] = o),
      (t[1] = n.created_at),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u = n.created_at,
    d;
  t[3] !== o || t[4] !== s || t[5] !== n.created_at
    ? ((d = o.formatDate(n.created_at, {
        month: `short`,
        day: `numeric`,
        year:
          o.formatDate(n.created_at, { year: `numeric` }) === o.formatDate(s, { year: `numeric` })
            ? void 0
            : `numeric`,
      })),
      (t[3] = o),
      (t[4] = s),
      (t[5] = n.created_at),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] !== o || t[8] !== r || t[9] !== n.created_at
    ? ((f = r ?? o.formatDate(n.created_at, { timeStyle: `medium` })),
      (t[7] = o),
      (t[8] = r),
      (t[9] = n.created_at),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== d || t[12] !== f
    ? ((p = (0, oa.jsx)(_, {
        id: `codex.page.versions.timestamp.compact`,
        defaultMessage: `{date} · {time}`,
        description: `Compact date and time identifying one saved Page version; time may include seconds to distinguish versions saved within the same minute`,
        values: { date: d, time: f },
      })),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== l || t[15] !== p || t[16] !== n.created_at
    ? ((m = (0, oa.jsx)(`time`, {
        className: `block min-w-0 truncate text-start text-sm tabular-nums`,
        "aria-label": l,
        dateTime: u,
        children: p,
      })),
      (t[14] = l),
      (t[15] = p),
      (t[16] = n.created_at),
      (t[17] = m))
    : (m = t[17]);
  let h;
  return (
    t[18] !== l || t[19] !== a || t[20] !== m
      ? ((h = (0, oa.jsx)(we, { tooltipContent: l, triggerPopupOpen: a, children: m })),
        (t[18] = l),
        (t[19] = a),
        (t[20] = m),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
var aa, oa;
function sa() {
  return (sa = e(() => {
    ((aa = ke()), K(), W(), Qe(), (oa = Me()));
  }))();
}
function ca(e) {
  let t = (0, da.c)(96),
    {
      versions: n,
      selectedId: r,
      endpoint: i,
      allowCurrent: a,
      onSelect: o,
      onLoadMore: s,
      isLoadingMore: c,
      isLoadMoreError: l,
    } = e,
    u = c !== void 0 && c,
    f = l !== void 0 && l,
    p = ne(),
    m = Xe(),
    [h, g] = (0, pa.useState)(!1),
    [v, y] = (0, pa.useState)(``),
    b = (0, pa.useId)(),
    S = r == null && r !== void 0,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    ee,
    L,
    te;
  if (
    t[0] !== a ||
    t[1] !== i ||
    t[2] !== p ||
    t[3] !== S ||
    t[4] !== m ||
    t[5] !== o ||
    t[6] !== h ||
    t[7] !== v ||
    t[8] !== r ||
    t[9] !== b ||
    t[10] !== n
  ) {
    let e;
    t[27] === r ? (e = t[28]) : ((e = (e) => e.checkpoint_id === r), (t[27] = r), (t[28] = e));
    let s = n.find(e),
      c;
    t[29] !== p || t[30] !== m
      ? ((c = p.formatDate(m, { year: `numeric` })), (t[29] = p), (t[30] = m), (t[31] = c))
      : (c = t[31]);
    let l = c,
      u,
      f;
    t[32] !== p || t[33] !== h || t[34] !== n || t[35] !== l
      ? ((f = Ai(n, p)),
        (u = h
          ? n.map((e) => {
              let t = p.formatDate(e.created_at, {
                  month: `long`,
                  day: `numeric`,
                  year: p.formatDate(e.created_at, { year: `numeric` }) === l ? void 0 : `numeric`,
                }),
                n = p.formatDate(e.created_at, { dateStyle: `full`, timeStyle: `medium` }),
                r = f.get(e.checkpoint_id);
              return {
                version: e,
                date: t,
                fullDate: n,
                timeLabel: r,
                searchable: [
                  n,
                  p.formatDate(e.created_at, { dateStyle: `medium` }),
                  `${t} ${r}`,
                  `${p.formatDate(e.created_at, { month: `short`, day: `numeric` })} ${r}`,
                ]
                  .join(` `)
                  .replace(/\s+/g, ` `)
                  .toLocaleLowerCase(p.locale),
              };
            })
          : []),
        (t[32] = p),
        (t[33] = h),
        (t[34] = n),
        (t[35] = l),
        (t[36] = u),
        (t[37] = f))
      : ((u = t[36]), (f = t[37]));
    let ne = u,
      R;
    t[38] !== ne || t[39] !== f
      ? ((R = { timeLabels: f, options: ne }), (t[38] = ne), (t[39] = f), (t[40] = R))
      : (R = t[40]);
    let { timeLabels: z, options: re } = R;
    ((D = v.trim().replace(/\s+/g, ` `).toLocaleLowerCase(p.locale)),
      (E = (0, fa.default)(
        re.filter((e) => e.searchable.includes(D)),
        ua,
      )));
    let B;
    t[41] !== i || t[42] !== p
      ? ((B =
          i === `from`
            ? p.formatMessage({
                id: `codex.page.versions.toolbar.chooseStartVersion`,
                defaultMessage: `Choose start version`,
                description: `Open the menu to choose the earlier Page version at the start of a comparison`,
              })
            : p.formatMessage({
                id: `codex.page.versions.toolbar.chooseEndVersion`,
                defaultMessage: `Choose end version`,
                description: `Open the menu to choose the later Page version at the end of a comparison`,
              })),
        (t[41] = i),
        (t[42] = p),
        (t[43] = B))
      : (B = t[43]);
    let V = B;
    ((T = Xt),
      (ee = h),
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = (e) => {
            (y(``), g(e));
          }),
          (t[44] = L))
        : (L = t[44]),
      (te = `end`),
      (O = `panel`),
      (k = `list`),
      (A = la));
    let ie;
    t[45] === r
      ? (ie = t[46])
      : ((ie =
          r === void 0
            ? (0, Z.jsx)(_, {
                id: `codex.page.versions.toolbar.chooseVersion`,
                defaultMessage: `Choose version`,
                description: `Placeholder for a Page comparison endpoint before a version is selected`,
              })
            : null),
        (t[45] = r),
        (t[46] = ie));
    let ae =
        s == null ? null : (0, Z.jsx)(ia, { version: s, timeLabel: z.get(s.checkpoint_id), pickerOpen: h }),
      oe;
    t[47] === S
      ? (oe = t[48])
      : ((oe = S
          ? (0, Z.jsx)(_, {
              id: `codex.page.versions.current`,
              defaultMessage: `Current version`,
              description: `The current live Page document captured when its version preview was opened`,
            })
          : null),
        (t[47] = S),
        (t[48] = oe));
    let H;
    t[49] !== r || t[50] !== s
      ? ((H =
          r != null && s == null
            ? (0, Z.jsx)(_, {
                id: `codex.page.versions.toolbar.chosenVersion`,
                defaultMessage: `Chosen version`,
                description: `Comparison endpoint selector when the chosen version is outside the loaded version history`,
              })
            : null),
        (t[49] = r),
        (t[50] = s),
        (t[51] = H))
      : (H = t[51]);
    let U;
    t[52] !== ie || t[53] !== ae || t[54] !== oe || t[55] !== H || t[56] !== b
      ? ((U = (0, Z.jsxs)(`span`, {
          id: b,
          className: `min-w-0 flex-1 truncate text-start`,
          children: [ie, ae, oe, H],
        })),
        (t[52] = ie),
        (t[53] = ae),
        (t[54] = oe),
        (t[55] = H),
        (t[56] = b),
        (t[57] = U))
      : (U = t[57]);
    let W;
    (t[58] === Symbol.for(`react.memo_cache_sentinel`) ? ((W = (0, Z.jsx)(x, {})), (t[58] = W)) : (W = t[58]),
      t[59] !== V || t[60] !== U || t[61] !== b
        ? ((j = (0, Z.jsxs)(ve, {
            className: `max-w-full min-w-0`,
            variant: `dropdown`,
            "aria-label": V,
            "aria-describedby": b,
            children: [U, W],
          })),
          (t[59] = V),
          (t[60] = U),
          (t[61] = b),
          (t[62] = j))
        : (j = t[62]),
      (w = Zt.Root),
      (P = V));
    let G;
    (t[63] === p
      ? (G = t[64])
      : ((G = p.formatMessage({
          id: `codex.page.versions.baseline.search`,
          defaultMessage: `Find a date or time…`,
          description: `Placeholder for filtering the loaded Page version history by its local date or time`,
        })),
        (t[63] = p),
        (t[64] = G)),
      t[65] !== v || t[66] !== G
        ? ((F = (0, Z.jsx)(Zt.Input, { placeholder: G, value: v, onValueChange: y })),
          (t[65] = v),
          (t[66] = G),
          (t[67] = F))
        : (F = t[67]),
      (C = Zt.List),
      (M =
        a && D === ``
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(Zt.Item, {
                  value: `current`,
                  "aria-current": S ? !0 : void 0,
                  rightIcon: S ? (0, Z.jsx)(d, {}) : void 0,
                  onSelect: () => {
                    (o(null), g(!1));
                  },
                  children: (0, Z.jsx)(_, {
                    id: `codex.page.versions.current`,
                    defaultMessage: `Current version`,
                    description: `The current live Page document captured when its version preview was opened`,
                  }),
                }),
                (0, Z.jsx)(I.Separator, {}),
              ],
            })
          : null),
      (N = Object.entries(E).map((e) => {
        let [t, n] = e;
        return (0, Z.jsxs)(
          pa.Fragment,
          {
            children: [
              (0, Z.jsx)(I.SectionLabel, { children: t }),
              n.map((e) => {
                let { version: t, fullDate: n, timeLabel: i } = e;
                return (0, Z.jsx)(
                  Zt.Item,
                  {
                    value: t.checkpoint_id,
                    "aria-label": n,
                    "aria-current": t.checkpoint_id === r || void 0,
                    tooltipText: n,
                    rightIcon: t.checkpoint_id === r ? (0, Z.jsx)(d, {}) : void 0,
                    onSelect: () => {
                      (o(t), g(!1));
                    },
                    children: (0, Z.jsx)(`span`, { className: `tabular-nums`, children: i }),
                  },
                  t.checkpoint_id,
                );
              }),
            ],
          },
          t,
        );
      })),
      (t[0] = a),
      (t[1] = i),
      (t[2] = p),
      (t[3] = S),
      (t[4] = m),
      (t[5] = o),
      (t[6] = h),
      (t[7] = v),
      (t[8] = r),
      (t[9] = b),
      (t[10] = n),
      (t[11] = C),
      (t[12] = w),
      (t[13] = T),
      (t[14] = E),
      (t[15] = D),
      (t[16] = O),
      (t[17] = k),
      (t[18] = A),
      (t[19] = j),
      (t[20] = M),
      (t[21] = N),
      (t[22] = P),
      (t[23] = F),
      (t[24] = ee),
      (t[25] = L),
      (t[26] = te));
  } else
    ((C = t[11]),
      (w = t[12]),
      (T = t[13]),
      (E = t[14]),
      (D = t[15]),
      (O = t[16]),
      (k = t[17]),
      (A = t[18]),
      (j = t[19]),
      (M = t[20]),
      (N = t[21]),
      (P = t[22]),
      (F = t[23]),
      (ee = t[24]),
      (L = t[25]),
      (te = t[26]));
  let R;
  t[68] !== E || t[69] !== D
    ? ((R =
        D !== `` && Object.keys(E).length === 0
          ? (0, Z.jsx)(I.Message, {
              compact: !0,
              children: (0, Z.jsx)(_, {
                id: `codex.page.versions.baseline.empty`,
                defaultMessage: `No matching versions`,
                description: `Empty state when no loaded saved Page versions match the entered date or time`,
              }),
            })
          : null),
      (t[68] = E),
      (t[69] = D),
      (t[70] = R))
    : (R = t[70]);
  let z;
  t[71] !== f || t[72] !== u || t[73] !== s
    ? ((z =
        s == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(I.Separator, {}),
                f && !u
                  ? (0, Z.jsx)(I.Message, {
                      compact: !0,
                      children: (0, Z.jsx)(_, {
                        id: `codex.page.versions.baseline.loadMoreError`,
                        defaultMessage: `Couldn’t load older versions`,
                        description: `Error in the comparison picker when fetching another page of revision metadata failed; the action below retries the request`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(Zt.Item, {
                  value: `load-older`,
                  disabled: u,
                  onSelect: s,
                  children: u
                    ? (0, Z.jsx)(_, {
                        id: `codex.page.versions.baseline.loadingMore`,
                        defaultMessage: `Loading older versions…`,
                        description: `Status while fetching another page of older saved Page revision metadata`,
                      })
                    : (0, Z.jsx)(_, {
                        id: `codex.page.versions.baseline.loadMore`,
                        defaultMessage: `Load older versions`,
                        description: `Fetch earlier saved Page revisions to browse or search in the comparison picker`,
                      }),
                }),
              ],
            })),
      (t[71] = f),
      (t[72] = u),
      (t[73] = s),
      (t[74] = z))
    : (z = t[74]);
  let re;
  t[75] !== C || t[76] !== R || t[77] !== z || t[78] !== M || t[79] !== N
    ? ((re = (0, Z.jsxs)(C, { children: [M, N, R, z] })),
      (t[75] = C),
      (t[76] = R),
      (t[77] = z),
      (t[78] = M),
      (t[79] = N),
      (t[80] = re))
    : (re = t[80]);
  let B;
  t[81] !== w || t[82] !== re || t[83] !== P || t[84] !== F
    ? ((B = (0, Z.jsxs)(w, { label: P, children: [F, re] })),
      (t[81] = w),
      (t[82] = re),
      (t[83] = P),
      (t[84] = F),
      (t[85] = B))
    : (B = t[85]);
  let V;
  return (
    t[86] !== T ||
    t[87] !== O ||
    t[88] !== k ||
    t[89] !== A ||
    t[90] !== j ||
    t[91] !== B ||
    t[92] !== ee ||
    t[93] !== L ||
    t[94] !== te
      ? ((V = (0, Z.jsx)(T, {
          open: ee,
          onOpenChange: L,
          align: te,
          contentWidth: O,
          contentMaxHeight: k,
          onEscapeKeyDown: A,
          triggerButton: j,
          children: B,
        })),
        (t[86] = T),
        (t[87] = O),
        (t[88] = k),
        (t[89] = A),
        (t[90] = j),
        (t[91] = B),
        (t[92] = ee),
        (t[93] = L),
        (t[94] = te),
        (t[95] = V))
      : (V = t[95]),
    V
  );
}
function la(e) {
  return e.stopPropagation();
}
function ua(e) {
  return e.date;
}
var da, fa, pa, Z;
function ma() {
  return (ma = e(() => {
    ((da = ke()), (fa = t(Je(), 1)), (pa = Pe()), K(), Yt(), i(), F(), Qe(), c(), sa(), (Z = Me()));
  }))();
}
function ha(e) {
  let t = (0, ga.c)(46),
    {
      showChanges: n,
      onShowChangesChange: r,
      versions: i,
      selectedVersion: a,
      previousVersion: o,
      baselineSelection: s,
      onBaselineChange: c,
      onLoadMore: l,
      isLoadingMore: u,
      isLoadMoreError: d,
      activeChange: f,
      changeCount: p,
      onNavigateChange: m,
      onSelectVersion: h,
      comparisonStatus: g,
      selectionControls: v,
      restoreAction: y,
    } = e,
    b = ne(),
    x = (0, _a.useId)(),
    S = g === `ready` && p != null && p > 0,
    w;
  t[0] !== s.checkpointId || t[1] !== s.kind || t[2] !== o?.checkpoint_id
    ? ((w = o?.checkpoint_id),
      s.kind === `checkpoint` ? (w = s.checkpointId) : s.kind === `current` && (w = null),
      (t[0] = s.checkpointId),
      (t[1] = s.kind),
      (t[2] = o?.checkpoint_id),
      (t[3] = w))
    : (w = t[3]);
  let E;
  if (t[4] !== w || t[5] !== i) {
    let e;
    (t[7] === w ? (e = t[8]) : ((e = (e) => e.checkpoint_id === w), (t[7] = w), (t[8] = e)),
      (E = i.find(e)),
      (t[4] = w),
      (t[5] = i),
      (t[6] = E));
  } else E = t[6];
  let D = E,
    O;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(_, {
        id: `codex.page.versions.toolbar.showChanges`,
        defaultMessage: `Show changes`,
        description: `Toggle comparison highlights on the selected historical Page version`,
      })),
      (t[9] = O))
    : (O = t[9]);
  let k;
  t[10] === x
    ? (k = t[11])
    : ((k = (0, Q.jsx)(`label`, { className: `text-sm`, htmlFor: x, children: O })),
      (t[10] = x),
      (t[11] = k));
  let A;
  t[12] !== r || t[13] !== n || t[14] !== x
    ? ((A = (0, Q.jsx)(fe, { id: x, checked: n, onChange: r })),
      (t[12] = r),
      (t[13] = n),
      (t[14] = x),
      (t[15] = A))
    : (A = t[15]);
  let j;
  t[16] !== k || t[17] !== A
    ? ((j = (0, Q.jsxs)(`div`, {
        className: `flex min-h-8 items-center justify-between gap-2`,
        children: [k, A],
      })),
      (t[16] = k),
      (t[17] = A),
      (t[18] = j))
    : (j = t[18]);
  let M;
  t[19] !== y || t[20] !== a || t[21] !== n
    ? ((M =
        !n && a != null
          ? (0, Q.jsxs)(`div`, {
              className: `grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2`,
              children: [(0, Q.jsx)(ia, { version: a, timeLabel: void 0 }), y],
            })
          : null),
      (t[19] = y),
      (t[20] = a),
      (t[21] = n),
      (t[22] = M))
    : (M = t[22]);
  let N;
  t[23] !== f ||
  t[24] !== w ||
  t[25] !== D ||
  t[26] !== S ||
  t[27] !== p ||
  t[28] !== g ||
  t[29] !== b ||
  t[30] !== d ||
  t[31] !== u ||
  t[32] !== c ||
  t[33] !== l ||
  t[34] !== m ||
  t[35] !== h ||
  t[36] !== y ||
  t[37] !== a ||
  t[38] !== v ||
  t[39] !== n ||
  t[40] !== i
    ? ((N = n
        ? (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-xs text-secondary`,
                    children: (0, Q.jsx)(_, {
                      id: `codex.page.versions.fromLabel`,
                      defaultMessage: `From`,
                      description: `Label for the earlier endpoint of a Page version comparison`,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `flex min-h-7 min-w-0 items-center`,
                    children: (0, Q.jsx)(ca, {
                      endpoint: `from`,
                      versions: i.filter((e) => a == null || e.through_sequence <= a.through_sequence),
                      selectedId: w,
                      allowCurrent: a == null,
                      onSelect: (e) =>
                        c(
                          e == null
                            ? { kind: `current` }
                            : { kind: `checkpoint`, checkpointId: e.checkpoint_id },
                        ),
                      onLoadMore: l,
                      isLoadingMore: u,
                      isLoadMoreError: d,
                    }),
                  }),
                  (0, Q.jsx)(`div`, { className: `flex items-center`, children: y }),
                  (0, Q.jsx)(`span`, {
                    className: `text-xs text-secondary`,
                    children: (0, Q.jsx)(_, {
                      id: `codex.page.versions.toLabel`,
                      defaultMessage: `To`,
                      description: `Label for the later endpoint of a Page version comparison, which is displayed in the document`,
                    }),
                  }),
                  (0, Q.jsx)(`div`, {
                    className: `col-span-2 flex min-h-7 min-w-0 items-center`,
                    children: (0, Q.jsx)(ca, {
                      endpoint: `to`,
                      versions: i.filter(
                        (e) => w === void 0 || (D != null && e.through_sequence >= D.through_sequence),
                      ),
                      selectedId: a?.checkpoint_id ?? null,
                      allowCurrent: !0,
                      onSelect: h,
                    }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `grid`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: se(
                      `col-start-1 row-start-1 flex min-h-8 min-w-0 items-center justify-between gap-2`,
                      v != null && `invisible`,
                    ),
                    inert: v != null,
                    "aria-hidden": v != null,
                    children: [
                      (0, Q.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums`,
                        role: `status`,
                        "aria-atomic": !0,
                        children: [
                          g === `loading` || g === `pending`
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.comparing`,
                                defaultMessage: `Comparing…`,
                                description: `Status while fetching Page versions and computing the differences between them`,
                              })
                            : null,
                          g === `error`
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.comparisonError`,
                                defaultMessage: `Comparison unavailable`,
                                description: `Status when a Page comparison failed; detailed error and retry controls appear in the document area`,
                              })
                            : null,
                          g === `ready` && p == null
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.chooseComparison`,
                                defaultMessage: `Choose a comparison version`,
                                description: `Status when no valid baseline is available for the selected Page version`,
                              })
                            : null,
                          g === `unavailable`
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.noEarlierComparison`,
                                defaultMessage: `No earlier version to compare`,
                                description: `Status when automatic Page comparison has no earlier saved version; this does not mean the document has no changes`,
                              })
                            : null,
                          g === `ready` && p === 0
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.noChanges`,
                                defaultMessage: `No changes`,
                                description: `Status when two compared Page versions have identical document content`,
                              })
                            : null,
                          g === `same`
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.sameVersion`,
                                defaultMessage: `Same version selected`,
                                description: `Status when the viewed Page version and the comparison version are identical`,
                              })
                            : null,
                          S && f == null
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.changeCount`,
                                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                                description: `Number of changed sections between two Page versions before navigating to a particular change`,
                                values: { count: p },
                              })
                            : null,
                          S && f != null
                            ? (0, Q.jsx)(_, {
                                id: `codex.page.versions.toolbar.changePosition`,
                                defaultMessage: `{position} of {count}`,
                                description: `Position of the active changed section within the Page comparison`,
                                values: { position: f + 1, count: p },
                              })
                            : null,
                        ],
                      }),
                      (0, Q.jsxs)(oe, {
                        label: b.formatMessage({
                          id: `codex.page.versions.toolbar.navigateChanges`,
                          defaultMessage: `Navigate changes`,
                          description: `Accessible label for the previous and next change controls in Page version history`,
                        }),
                        children: [
                          (0, Q.jsx)(ye, {
                            uniform: !0,
                            disabled: !S || f == null || f === 0,
                            "aria-label": b.formatMessage({
                              id: `codex.page.versions.toolbar.previousChange`,
                              defaultMessage: `Previous change`,
                              description: `Navigate to the preceding changed section in the formatted Page comparison`,
                            }),
                            onClick: () => {
                              f != null && m(f - 1);
                            },
                            children: (0, Q.jsx)(C, { asset: Ce }),
                          }),
                          (0, Q.jsx)(ye, {
                            uniform: !0,
                            disabled: !S || (f != null && p != null && f >= p - 1),
                            "aria-label": b.formatMessage({
                              id: `codex.page.versions.toolbar.nextChange`,
                              defaultMessage: `Next change`,
                              description: `Navigate to the next changed section in the formatted Page comparison`,
                            }),
                            onClick: () => m((f ?? -1) + 1),
                            children: (0, Q.jsx)(T, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  v == null
                    ? null
                    : (0, Q.jsx)(`div`, {
                        className: `col-start-1 row-start-1 grid items-center`,
                        children: v,
                      }),
                ],
              }),
            ],
          })
        : null),
      (t[23] = f),
      (t[24] = w),
      (t[25] = D),
      (t[26] = S),
      (t[27] = p),
      (t[28] = g),
      (t[29] = b),
      (t[30] = d),
      (t[31] = u),
      (t[32] = c),
      (t[33] = l),
      (t[34] = m),
      (t[35] = h),
      (t[36] = y),
      (t[37] = a),
      (t[38] = v),
      (t[39] = n),
      (t[40] = i),
      (t[41] = N))
    : (N = t[41]);
  let P;
  return (
    t[42] !== j || t[43] !== M || t[44] !== N
      ? ((P = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-3 select-none`, children: [j, M, N] })),
        (t[42] = j),
        (t[43] = M),
        (t[44] = N),
        (t[45] = P))
      : (P = t[45]),
    P
  );
}
var ga, _a, Q;
function va() {
  return (va = e(() => {
    ((ga = ke()), U(), V(), (_a = Pe()), K(), D(), F(), y(), c(), sa(), ma(), (Q = Me()));
  }))();
}
function ya(e) {
  let t = (0, ja.c)(4),
    n = z(We),
    r = z(pt),
    i;
  return (
    t[0] !== n || t[1] !== e || t[2] !== r
      ? ((i =
          n == null
            ? (0, $.jsx)(ka, { onClose: e.onClose })
            : (0, $.jsx)(
                ba,
                { ...e, accountId: n, userId: r },
                JSON.stringify([n, r, e.pageId, e.streamKind]),
              )),
        (t[0] = n),
        (t[1] = e),
        (t[2] = r),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
function ba(e) {
  let t = (0, ja.c)(15),
    n = v(l),
    r = ne(),
    i;
  t[0] !== r.formatMessage ||
  t[1] !== e.accountId ||
  t[2] !== e.pageId ||
  t[3] !== e.streamKind ||
  t[4] !== e.userId ||
  t[5] !== n
    ? ((i = () =>
        na({
          scope: n,
          accountId: e.accountId,
          userId: e.userId,
          pageId: e.pageId,
          streamKind: e.streamKind,
          markdown: Ve(r.formatMessage),
        })),
      (t[0] = r.formatMessage),
      (t[1] = e.accountId),
      (t[2] = e.pageId),
      (t[3] = e.streamKind),
      (t[4] = e.userId),
      (t[5] = n),
      (t[6] = i))
    : (i = t[6]);
  let [a] = (0, Ma.useState)(i),
    o;
  t[7] === a.loader ? (o = t[8]) : ((o = () => a.loader.retain()), (t[7] = a.loader), (t[8] = o));
  let s;
  (t[9] === a ? (s = t[10]) : ((s = [a]), (t[9] = a), (t[10] = s)), (0, Ma.useEffect)(o, s));
  let c = (0, Ma.useSyncExternalStore)(
      a.loader.subscribeInvalidation,
      a.loader.getInvalidated,
      a.loader.getInvalidated,
    ),
    u;
  return (
    t[11] !== c || t[12] !== e || t[13] !== a
      ? ((u = c ? (0, $.jsx)(ka, { onClose: e.onClose }) : (0, $.jsx)(xa, { ...e, session: a })),
        (t[11] = c),
        (t[12] = e),
        (t[13] = a),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function xa(e) {
  let t = (0, ja.c)(143),
    {
      accountId: n,
      userId: r,
      pageId: i,
      streamKind: a,
      getCurrentUpdate: o,
      isPanelOpen: s,
      renderPanel: c,
      onClose: u,
      onRestore: d,
      session: f,
    } = e,
    p = v(l),
    m = ne(),
    h = (0, Ma.useId)(),
    { loader: g, readCurrent: y, prepare: b } = f,
    [x, S] = (0, Ma.useState)(null),
    [C, w] = (0, Ma.useState)(null),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { kind: `previous` }), (t[0] = T)) : (T = t[0]);
  let [D, O] = (0, Ma.useState)(T),
    [k, j] = (0, Ma.useState)(!1),
    M = k ? C : x,
    N = M?.checkpoint_id ?? null,
    [P, F] = (0, Ma.useState)(null),
    I;
  t[1] !== n || t[2] !== i || t[3] !== a || t[4] !== r
    ? ((I = [`space`, `page-version-history`, n, i, a, r]),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = r),
      (t[5] = I))
    : (I = t[5]);
  let ee;
  t[6] !== n || t[7] !== g || t[8] !== i || t[9] !== p || t[10] !== a
    ? ((ee = async (e) => {
        let { pageParam: t, signal: r } = e,
          o = lt(
            p,
            `version_history`,
            { stream_kind: a, page: t ? `older` : `initial` },
            AbortSignal.any([r, g.signal]),
          );
        try {
          let e = await Dt.safeGet(`/pages/{page_id}/versions`, {
            parameters: { path: { page_id: i }, query: { cursor: t || void 0, limit: 20, stream_kind: a } },
            signal: AbortSignal.any([r, g.signal]),
          });
          return (o(`success`), e);
        } catch (e) {
          let t = e;
          throw (
            o(r.aborted || g.signal.aborted ? `canceled` : `failure`),
            !r.aborted &&
              !g.signal.aborted &&
              t instanceof le &&
              (t.status === 401 || t.status === 403) &&
              Le(p, n, i, `page_read_forbidden`, { definitive: !0, streamKind: a, error: t }),
            t
          );
        }
      }),
      (t[6] = n),
      (t[7] = g),
      (t[8] = i),
      (t[9] = p),
      (t[10] = a),
      (t[11] = ee))
    : (ee = t[11]);
  let L;
  t[12] !== I || t[13] !== ee
    ? ((L = {
        queryKey: I,
        initialPageParam: ``,
        getNextPageParam: Oa,
        queryFn: ee,
        staleTime: A.THIRTY_SECONDS,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
      }),
      (t[12] = I),
      (t[13] = ee),
      (t[14] = L))
    : (L = t[14]);
  let {
      data: te,
      fetchNextPage: R,
      hasNextPage: z,
      isFetchingNextPage: B,
      isFetchNextPageError: V,
      isPending: ie,
      isError: ae,
      refetch: oe,
    } = E(L),
    H = te?.pages.flatMap(Da).sort(Ea),
    U = H?.findIndex((e) => e.checkpoint_id === N) ?? -1,
    W = H?.[0];
  N != null && (W = U < 0 ? void 0 : H?.[U + 1]);
  let G = W?.checkpoint_id;
  D.kind === `current` ? (G = null) : D.kind === `checkpoint` && (G = D.checkpointId);
  let ce = N != null && U >= 0 && W == null && z,
    ue;
  t[15] === te?.pages
    ? (ue = t[16])
    : ((ue = new Map(te?.pages.flatMap(wa))), (t[15] = te?.pages), (t[16] = ue));
  let de = ue,
    K = [`space`, `page-version-review`, n, r, i, a, h],
    fe;
  t[17] !== N || t[18] !== f
    ? ((fe = () => f.peekSnapshot(N)), (t[17] = N), (t[18] = f), (t[19] = fe))
    : (fe = t[19]);
  let {
      data: q,
      isError: pe,
      refetch: me,
    } = re({
      enabled: N != null || o != null,
      initialData: fe,
      queryKey: [...K, `snapshot`, { checkpointId: N }],
      queryFn: async (e) => {
        let { signal: t } = e,
          n = N == null ? await y(o) : await g.read(N, t);
        return (
          t.throwIfAborted(),
          g.signal.throwIfAborted(),
          g.prefetch([W?.checkpoint_id, H?.[U - 1]?.checkpoint_id].filter(Ca)),
          n
        );
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    {
      data: he,
      isError: ge,
      refetch: _e,
    } = re({
      enabled: k && G !== void 0 && (D.kind !== `current` || o != null),
      initialData: () => f.peekSnapshot(G),
      queryKey: [...K, `snapshot`, { checkpointId: G }],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (G === void 0) throw Error(`No comparison version selected`);
        let n = G == null ? await y(o) : await g.read(G, t);
        return (t.throwIfAborted(), g.signal.throwIfAborted(), n);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    ve = JSON.stringify({ selectedId: N, baseline: G }),
    ye;
  t[20] === q ? (ye = t[21]) : ((ye = (e) => (e?.snapshot === q ? e : void 0)), (t[20] = q), (t[21] = ye));
  let {
      data: be,
      isPlaceholderData: xe,
      isError: Se,
      refetch: Ce,
    } = re({
      enabled: k && G !== void 0 && q != null && he != null,
      initialData: () => f.peekComparison(ve),
      queryKey: [...K, `comparison`, { selectedId: N, baseline: G }],
      queryFn: (e) => {
        let { signal: t } = e;
        if (q == null || he == null) throw Error(`The comparison snapshots are unavailable`);
        return b(he, q, ve, t);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      placeholderData: ye,
    }),
    we;
  t[22] !== b || t[23] !== N || t[24] !== q
    ? ((we = (e) => {
        let { signal: t } = e;
        if (q == null) throw Error(`No Page snapshot loaded`);
        return b(q, q, JSON.stringify([N]), t);
      }),
      (t[22] = b),
      (t[23] = N),
      (t[24] = q),
      (t[25] = we))
    : (we = t[25]);
  let {
      data: Te,
      isError: Ee,
      refetch: De,
    } = re({
      enabled:
        q != null &&
        be == null &&
        (!k || ge || Se || (G === void 0 && !ce && !ie) || (D.kind === `previous` && ce && ae)),
      initialData: () => f.peekComparison(ve) ?? f.peekComparison(JSON.stringify([N])),
      queryKey: [...K, `document`, N],
      queryFn: we,
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    Oe = xe ? void 0 : be,
    ke = P?.pair === ve ? P.index : null,
    Ae = Oe == null ? `pending` : `ready`;
  (Oe == null && (q == null || he == null) && (Ae = `loading`),
    pe || Ee || ge || Se || (D.kind === `previous` && ce && ae)
      ? (Ae = `error`)
      : G === void 0 && !ce && !ie
        ? (Ae = `unavailable`)
        : Oe != null && N === G && (Ae = `same`));
  let je = k && (Ae === `loading` || Ae === `pending`),
    Me = Oe ?? (je ? be : void 0),
    [Ne, Pe] = (0, Ma.useState)(),
    Fe = Ne?.snapshot === q ? Ne : void 0,
    Ie = Fe ?? Te ?? Oe;
  (k && Me != null ? (Ie = Me) : je && (Ie = Fe), Ne !== Ie && Pe(Ie));
  let Re = !pe && !Ee && (Ie == null || je),
    ze;
  t[26] === u
    ? (ze = t[27])
    : ((ze = (e) => {
        e.key === `Escape` && !e.defaultPrevented && (e.stopPropagation(), u());
      }),
      (t[26] = u),
      (t[27] = ze));
  let Be = ze,
    Ve;
  t[28] !== C || t[29] !== k
    ? ((Ve = (e) => {
        (O(e == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: e.checkpoint_id }),
          k || (S(e), C != null && (e == null || e.through_sequence > C.through_sequence) && w(null)));
      }),
      (t[28] = C),
      (t[29] = k),
      (t[30] = Ve))
    : (Ve = t[30]);
  let He = Ve,
    Ue = function (e) {
      (D.kind === `previous` &&
        G !== void 0 &&
        O(G == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: G }),
        w(e),
        G === void 0 && e != null && e === H?.at(-1) && z && R());
    },
    We = k ? H?.find((e) => e.checkpoint_id === G) : M,
    Ge = k ? he != null && !ge : q != null && !pe,
    Ke;
  t[31] === H ? (Ke = t[32]) : ((Ke = H ?? []), (t[31] = H), (t[32] = Ke));
  let Je = te?.pages[0]?.current_editor_summary,
    Ye;
  t[33] !== R || t[34] !== z
    ? ((Ye = z
        ? () => {
            R();
          }
        : void 0),
      (t[33] = R),
      (t[34] = z),
      (t[35] = Ye))
    : (Ye = t[35]);
  let Xe;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (e) => O(e == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: e })),
      (t[36] = Xe))
    : (Xe = t[36]);
  let Ze;
  t[37] !== ke ||
  t[38] !== D ||
  t[39] !== Oe?.changes.length ||
  t[40] !== Ae ||
  t[41] !== Re ||
  t[42] !== R ||
  t[43] !== z ||
  t[44] !== V ||
  t[45] !== B ||
  t[46] !== g ||
  t[47] !== ce ||
  t[48] !== u ||
  t[49] !== d ||
  t[50] !== i ||
  t[51] !== ve ||
  t[52] !== x ||
  t[53] !== W ||
  t[54] !== Ge ||
  t[55] !== We ||
  t[56] !== Ue ||
  t[57] !== M ||
  t[58] !== k ||
  t[59] !== a ||
  t[60] !== H
    ? ((Ze = (e) =>
        (0, $.jsx)(ha, {
          restoreAction:
            We != null && d != null
              ? (0, $.jsx)(
                  zi,
                  {
                    pageId: i,
                    streamKind: a,
                    version: We,
                    ready: Ge && !Re,
                    signal: g.signal,
                    onRestore: d,
                    onRestored: u,
                  },
                  We.checkpoint_id,
                )
              : null,
          selectionControls: e,
          versions: H ?? [],
          selectedVersion: M,
          previousVersion: W,
          showChanges: k,
          onShowChangesChange: (e) => {
            (e ? x != null && O({ kind: `checkpoint`, checkpointId: x.checkpoint_id }) : S(We ?? null),
              j(e),
              e && D.kind === `previous` && ce && R());
          },
          baselineSelection: D,
          onLoadMore: z
            ? () => {
                R();
              }
            : void 0,
          isLoadingMore: B,
          isLoadMoreError: V,
          onBaselineChange: (e) => {
            (O(e), e.kind === `previous` && ce && R());
          },
          activeChange: ke,
          changeCount: Oe?.changes.length ?? null,
          onNavigateChange: (e) => F({ pair: ve, index: e }),
          onSelectVersion: Ue,
          comparisonStatus: Ae,
        })),
      (t[37] = ke),
      (t[38] = D),
      (t[39] = Oe?.changes.length),
      (t[40] = Ae),
      (t[41] = Re),
      (t[42] = R),
      (t[43] = z),
      (t[44] = V),
      (t[45] = B),
      (t[46] = g),
      (t[47] = ce),
      (t[48] = u),
      (t[49] = d),
      (t[50] = i),
      (t[51] = ve),
      (t[52] = x),
      (t[53] = W),
      (t[54] = Ge),
      (t[55] = We),
      (t[56] = Ue),
      (t[57] = M),
      (t[58] = k),
      (t[59] = a),
      (t[60] = H),
      (t[61] = Ze))
    : (Ze = t[61]);
  let Qe;
  t[62] === ie ? (Qe = t[63]) : ((Qe = ie ? (0, $.jsx)(bi, {}) : null), (t[62] = ie), (t[63] = Qe));
  let $e;
  t[64] !== ae || t[65] !== V || t[66] !== oe
    ? (($e =
        ae && !V
          ? (0, $.jsx)(Aa, {
              kind: `history`,
              onRetry: () => {
                oe();
              },
            })
          : null),
      (t[64] = ae),
      (t[65] = V),
      (t[66] = oe),
      (t[67] = $e))
    : ($e = t[67]);
  let et;
  t[68] === H?.length
    ? (et = t[69])
    : ((et =
        H?.length === 0
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(_, {
                id: `codex.page.versions.noSavedVersions`,
                defaultMessage: `No saved versions yet`,
                description: `Empty state when a Page has no stored historical checkpoints`,
              }),
            })
          : null),
      (t[68] = H?.length),
      (t[69] = et));
  let tt;
  t[70] !== G ||
  t[71] !== V ||
  t[72] !== B ||
  t[73] !== de ||
  t[74] !== u ||
  t[75] !== Ue ||
  t[76] !== He ||
  t[77] !== N ||
  t[78] !== k ||
  t[79] !== Ke ||
  t[80] !== Je ||
  t[81] !== Ye ||
  t[82] !== Ze ||
  t[83] !== Qe ||
  t[84] !== $e ||
  t[85] !== et
    ? ((tt = (0, $.jsxs)(ji, {
        showHeader: !1,
        selectedId: N,
        baselineId: G,
        showChanges: k,
        versions: Ke,
        names: de,
        currentSummary: Je,
        onLoadMore: Ye,
        isLoadingMore: B,
        isLoadMoreError: V,
        onBaselineChange: Xe,
        onSelect: He,
        onSelectEnd: Ue,
        onClose: u,
        renderControls: Ze,
        children: [Qe, $e, et],
      })),
      (t[70] = G),
      (t[71] = V),
      (t[72] = B),
      (t[73] = de),
      (t[74] = u),
      (t[75] = Ue),
      (t[76] = He),
      (t[77] = N),
      (t[78] = k),
      (t[79] = Ke),
      (t[80] = Je),
      (t[81] = Ye),
      (t[82] = Ze),
      (t[83] = Qe),
      (t[84] = $e),
      (t[85] = et),
      (t[86] = tt))
    : (tt = t[86]);
  let nt = tt,
    rt = k && ((ge && G !== N) || Se || (D.kind === `previous` && ce && ae)),
    it = pe || Ee,
    at;
  t[87] === m
    ? (at = t[88])
    : ((at = m.formatMessage({
        id: `codex.page.versions.workspaceLabel`,
        defaultMessage: `Page version history`,
        description: `Accessible label for the read-only Page history and comparison workspace`,
      })),
      (t[87] = m),
      (t[88] = at));
  let ot;
  t[89] !== ge ||
  t[90] !== Se ||
  t[91] !== rt ||
  t[92] !== it ||
  t[93] !== R ||
  t[94] !== ce ||
  t[95] !== _e ||
  t[96] !== De ||
  t[97] !== Ce ||
  t[98] !== me ||
  t[99] !== pe
    ? ((ot =
        rt || it
          ? (0, $.jsxs)(`div`, {
              className: `pt-[var(--pane-overlay-header-height,0px)]`,
              children: [
                rt
                  ? (0, $.jsx)(Aa, {
                      kind: `comparison`,
                      onRetry: () => {
                        (ge ? _e() : Se && Ce(), ce && R());
                      },
                    })
                  : null,
                it
                  ? (0, $.jsx)(Aa, {
                      onRetry: () => {
                        pe ? me() : De();
                      },
                    })
                  : null,
              ],
            })
          : null),
      (t[89] = ge),
      (t[90] = Se),
      (t[91] = rt),
      (t[92] = it),
      (t[93] = R),
      (t[94] = ce),
      (t[95] = _e),
      (t[96] = De),
      (t[97] = Ce),
      (t[98] = me),
      (t[99] = pe),
      (t[100] = ot))
    : (ot = t[100]);
  let st = (rt || it) && `[--pane-overlay-header-height:0px]`,
    ct;
  t[101] === st
    ? (ct = t[102])
    : ((ct = se(`relative flex min-h-0 flex-1 flex-col`, st)), (t[101] = st), (t[102] = ct));
  let ut = `flex min-h-0 flex-1 flex-col${je ? ` invisible` : ``}`,
    dt = je || void 0,
    ft;
  t[103] !== ke ||
  t[104] !== G ||
  t[105] !== Ee ||
  t[106] !== Oe?.changes ||
  t[107] !== Ie ||
  t[108] !== Me ||
  t[109] !== i ||
  t[110] !== N ||
  t[111] !== M?.created_at ||
  t[112] !== k ||
  t[113] !== pe ||
  t[114] !== H
    ? ((ft =
        !pe && !Ee && Ie != null
          ? (0, $.jsx)(
              qe,
              {
                name: `PageVersionComparison`,
                fallback: Sa,
                children: (0, $.jsx)(si, {
                  pageId: i,
                  comparison: Ie,
                  baselineDate:
                    G == null
                      ? G
                      : H?.find((e) => {
                          let { checkpoint_id: t } = e;
                          return t === G;
                        })?.created_at,
                  selectedDate: M?.created_at ?? null,
                  showChanges: k && Me != null,
                  activeChangeId: ke == null ? null : (Oe?.changes[ke]?.id ?? null),
                }),
              },
              N,
            )
          : null),
      (t[103] = ke),
      (t[104] = G),
      (t[105] = Ee),
      (t[106] = Oe?.changes),
      (t[107] = Ie),
      (t[108] = Me),
      (t[109] = i),
      (t[110] = N),
      (t[111] = M?.created_at),
      (t[112] = k),
      (t[113] = pe),
      (t[114] = H),
      (t[115] = ft))
    : (ft = t[115]);
  let pt;
  t[116] !== je || t[117] !== ut || t[118] !== dt || t[119] !== ft
    ? ((pt = (0, $.jsx)(`div`, { className: ut, "aria-hidden": dt, inert: je, children: ft })),
      (t[116] = je),
      (t[117] = ut),
      (t[118] = dt),
      (t[119] = ft),
      (t[120] = pt))
    : (pt = t[120]);
  let mt;
  t[121] !== je || t[122] !== Re
    ? ((mt = Re
        ? (0, $.jsx)(`div`, {
            className: `absolute inset-0 flex flex-col pt-[var(--pane-overlay-header-height,0px)]`,
            children: (0, $.jsx)(gi, { comparison: je }),
          })
        : null),
      (t[121] = je),
      (t[122] = Re),
      (t[123] = mt))
    : (mt = t[123]);
  let ht;
  t[124] !== Re || t[125] !== ct || t[126] !== pt || t[127] !== mt
    ? ((ht = (0, $.jsxs)(`div`, { className: ct, "aria-busy": Re, children: [pt, mt] })),
      (t[124] = Re),
      (t[125] = ct),
      (t[126] = pt),
      (t[127] = mt),
      (t[128] = ht))
    : (ht = t[128]);
  let gt;
  t[129] !== Be || t[130] !== at || t[131] !== ot || t[132] !== ht
    ? ((gt = (0, $.jsxs)(`section`, {
        className: `flex min-h-0 min-w-0 flex-1 flex-col`,
        "aria-label": at,
        "data-page-version-history": !0,
        onKeyDown: Be,
        children: [ot, ht],
      })),
      (t[129] = Be),
      (t[130] = at),
      (t[131] = ot),
      (t[132] = ht),
      (t[133] = gt))
    : (gt = t[133]);
  let _t;
  t[134] !== s || t[135] !== u || t[136] !== i || t[137] !== c || t[138] !== nt
    ? ((_t =
        c == null
          ? (0, $.jsx)(bn, {
              open: s,
              pageId: i,
              view: `versions`,
              canViewEdits: !1,
              canViewHistory: !1,
              onClose: u,
              versions: nt,
            })
          : c(nt)),
      (t[134] = s),
      (t[135] = u),
      (t[136] = i),
      (t[137] = c),
      (t[138] = nt),
      (t[139] = _t))
    : (_t = t[139]);
  let vt;
  return (
    t[140] !== gt || t[141] !== _t
      ? ((vt = (0, $.jsxs)(`div`, {
          className: `@container/page-activity relative flex min-h-0 flex-1`,
          children: [gt, _t],
        })),
        (t[140] = gt),
        (t[141] = _t),
        (t[142] = vt))
      : (vt = t[142]),
    vt
  );
}
function Sa(e) {
  return (0, $.jsx)(`div`, {
    className: `pt-[var(--pane-overlay-header-height,0px)]`,
    children: (0, $.jsx)(Aa, { onRetry: () => e.resetError() }),
  });
}
function Ca(e) {
  return e != null;
}
function wa(e) {
  return e.actor_displays?.map(Ta) ?? [];
}
function Ta(e) {
  return [e.account_user_id, e.display_name];
}
function Ea(e, t) {
  return t.through_sequence - e.through_sequence;
}
function Da(e) {
  return e.items;
}
function Oa(e) {
  return e.next_cursor ?? void 0;
}
function ka(e) {
  let t = (0, ja.c)(4),
    { onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(_, {
        id: `codex.page.versions.sessionUnavailable`,
        defaultMessage: `Version history is no longer available. Your account or Page access may have changed`,
        description: `Shown when Page version history loses its account context or authorization, requiring the user to leave the history session`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(_, {
        id: `codex.space.page.activity.close`,
        defaultMessage: `Close page activity`,
        description: `Accessible label for closing the Page activity side panel`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] === r
      ? (o = t[3])
      : ((o = (0, $.jsxs)(`div`, {
          className: `mt-[var(--pane-overlay-header-height,0px)] flex items-center justify-between gap-3 p-panel text-sm text-secondary select-none`,
          role: `alert`,
          children: [
            i,
            (0, $.jsx)(n, { autoFocus: !0, color: `secondary`, size: `compact`, onClick: r, children: a }),
          ],
        })),
        (t[2] = r),
        (t[3] = o)),
    o
  );
}
function Aa(e) {
  let t = (0, ja.c)(14),
    { kind: r, onRetry: i } = e,
    a = r === void 0 ? `preview` : r,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o =
        a === `history`
          ? (0, $.jsx)(_, {
              id: `codex.page.versions.historyError`,
              defaultMessage: `Could not load version history`,
              description: `Error when the list of saved Page versions could not be loaded; the adjacent action retries`,
            })
          : null),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === a
    ? (s = t[3])
    : ((s =
        a === `comparison`
          ? (0, $.jsx)(_, {
              id: `codex.page.versions.comparisonError`,
              defaultMessage: `Could not compare these versions`,
              description: `Error when loading or comparing Page versions failed; the adjacent action retries`,
            })
          : null),
      (t[2] = a),
      (t[3] = s));
  let c;
  t[4] === a
    ? (c = t[5])
    : ((c =
        a === `preview`
          ? (0, $.jsx)(_, {
              id: `codex.page.versions.previewError`,
              defaultMessage: `Could not load this version`,
              description: `Error when a saved Page checkpoint is unavailable or cannot be verified`,
            })
          : null),
      (t[4] = a),
      (t[5] = c));
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(_, {
        id: `codex.page.versions.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading Page version history or a historical checkpoint after a failure`,
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === i
    ? (u = t[8])
    : ((u = (0, $.jsx)(n, { color: `secondary`, size: `compact`, onClick: i, children: l })),
      (t[7] = i),
      (t[8] = u));
  let d;
  return (
    t[9] !== o || t[10] !== s || t[11] !== c || t[12] !== u
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 p-panel text-sm text-secondary`,
          role: `alert`,
          children: [o, s, c, u],
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
var ja, Ma, $;
function Na() {
  return (Na = e(() => {
    ((ja = ke()),
      S(),
      B(),
      V(),
      j(),
      (Ma = Pe()),
      K(),
      qt(),
      Ht(),
      Te(),
      ft(),
      et(),
      vn(),
      ot(),
      Kt(),
      Ae(),
      m(),
      Bt(),
      Oe(),
      hi(),
      yi(),
      wi(),
      Ri(),
      Wi(),
      ra(),
      va(),
      ($ = Me()));
  }))();
}
Na();
export { ya as PageVersionHistory };
//# sourceMappingURL=workspace-e2c423bd7432.js.map
