import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $st as i,
  Bst as a,
  CH as o,
  CY as s,
  Cwt as c,
  DB as l,
  Dwt as u,
  FBt as d,
  FE as f,
  FNt as p,
  HO as m,
  IO as h,
  JO as g,
  KO as _,
  LNt as v,
  LO as y,
  MNt as b,
  Mst as x,
  NNt as S,
  Nwt as C,
  OB as w,
  OC as T,
  OE as E,
  OH as D,
  Owt as O,
  PBt as k,
  Pit as A,
  Qst as j,
  RO as M,
  SB as N,
  SY as P,
  TE as ee,
  TY as F,
  Uf as I,
  WO as te,
  WOt as L,
  Wf as R,
  XOt as z,
  XS as B,
  Y3 as V,
  Z3 as H,
  ZSt as U,
  _D as W,
  aC as ne,
  bB as re,
  bwt as G,
  ck as K,
  dk as ie,
  e6 as ae,
  eTt as oe,
  fD as se,
  fk as ce,
  gD as le,
  hD as ue,
  hst as de,
  iCt as fe,
  iFt as pe,
  jit as me,
  jst as he,
  kH as ge,
  lC as _e,
  lk as ve,
  mD as ye,
  mst as be,
  nB as xe,
  oTt as Se,
  okt as Ce,
  qO as we,
  rB as Te,
  rk as Ee,
  sC as De,
  tkt as q,
  uk as Oe,
  vB as ke,
  wB as Ae,
  xwt as je,
  yB as Me,
  zO as Ne,
  zst as Pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Lr as Fe,
  BRr as Ie,
  Bc as Le,
  D7 as Re,
  Dmr as ze,
  F6 as Be,
  F7n as Ve,
  FXr as He,
  Fnt as Ue,
  Gon as We,
  I7n as Ge,
  Jh as Ke,
  L7n as qe,
  M6 as Je,
  Nhn as Ye,
  Ohn as Xe,
  P6 as Ze,
  QLr as Qe,
  Qmn as $e,
  R6 as et,
  S6 as tt,
  SRn as nt,
  Vc as rt,
  X6 as it,
  Z6 as at,
  ZHr as ot,
  _8 as st,
  _ur as ct,
  _vr as lt,
  aUr as ut,
  bRn as dt,
  cZr as ft,
  eRr as pt,
  ehn as mt,
  fgn as ht,
  ggn as gt,
  gur as _t,
  gvr as vt,
  hdn as yt,
  hen as bt,
  hgn as xt,
  hhn as St,
  i8 as Ct,
  iRr as wt,
  iut as Tt,
  k7 as Et,
  knt as Dt,
  lDn as Ot,
  pen as kt,
  qh as At,
  qon as jt,
  r8 as Mt,
  sDn as Nt,
  sRr as Pt,
  ssn as Ft,
  tut as It,
  usn as Lt,
  van as Rt,
  vh as zt,
  vhn as Bt,
  w6 as Vt,
  wLr as Ht,
  x6 as Ut,
  xXr as Wt,
  yan as Gt,
  yh as Kt,
  yhn as qt,
  znt as Jt,
} from "./app-initial-ad16eaadf81f.js";
import { Gl as Yt, Kl as Xt, Wl as Zt } from "./app-primary-3e00728c2a4c.js";
import { n as Qt, t as $t } from "./writing-block-theme-61c0ed2a12ed.js";
import { n as en, t as tn } from "./writing-block-editor-styles-90146127a9c9.js";
import { n as nn, t as rn } from "./checkboxes-894c9e9cf353.js";
import { O as an, k as on, n as sn, t as cn } from "./preview-3690797c434b.js";
import { n as ln, t as un } from "./editor.module-9d0afa74ff72.js";
import { i as dn, n as fn, r as pn, t as mn } from "./images-8ae6089f5332.js";
import { n as hn, t as gn } from "./render-eeb97bbe7199.js";
import { i as _n, t as vn } from "./presentation-f202ffb8d1c1.js";
import { n as yn, t as bn } from "./page-activity-panel-4bd0082c62fe.js";
import { n as xn, t as Sn } from "./checkpoint-99fd81089ab5.js";
import { i as Cn, n as wn, r as Tn, t as En } from "./editors-d2fdaf12f5f6.js";
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
    ((On = k()), (kn = d()), (An = v()));
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
        : ((e = (0, Fn.jsx)(q, {
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
        : ((r = (0, Fn.jsx)(q, {
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
        : ((e = (0, Fn.jsx)(q, {
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
        ? ((e = (0, Fn.jsx)(q, {
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
          ? ((e = (0, Fn.jsx)(q, {
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
        ? ((e = (0, Fn.jsx)(q, {
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
        ? ((e = (0, Fn.jsx)(q, {
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
      : ((s = (0, Fn.jsx)(q, {
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
    ((Pn = k()), z(), (Fn = v()));
  }))();
}
function Ln(e) {
  let t = (0, Hn.c)(28),
    { links: n } = e,
    [r, i] = (0, Un.useState)(!1),
    a = (0, Un.useId)(),
    o;
  t[0] !== n.after || t[1] !== n.before
    ? ((o = [...n.before, ...n.after].every(zn)), (t[0] = n.after), (t[1] = n.before), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, J.jsx)(q, {
        id: `codex.page.versions.comparison.linkTargetsChanged`,
        defaultMessage: `Link updated`,
        description: `Opens the previous and new destinations of changed links, relative to the selected comparison direction`,
      })),
      (t[3] = c))
    : (c = t[3]);
  let l = c;
  if (s && n.before.length === 1 && n.after.length === 1) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.fileReferencesChanged`,
          defaultMessage: `File replaced`,
          description: `Opens details of changed file references between Page versions, showing saved filenames instead of internal file IDs`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (l = e));
  } else if (s && n.before.length === 0) {
    let e;
    (t[5] === n.after.length
      ? (e = t[6])
      : ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.filesAdded`,
          defaultMessage: `{count, plural, one {File added} other {Files added}}`,
          description: `Opens the saved file references added between the comparison baseline and selected Page version`,
          values: { count: n.after.length },
        })),
        (t[5] = n.after.length),
        (t[6] = e)),
      (l = e));
  } else if (s && n.after.length === 0) {
    let e;
    (t[7] === n.before.length
      ? (e = t[8])
      : ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.filesRemoved`,
          defaultMessage: `{count, plural, one {File removed} other {Files removed}}`,
          description: `Opens the saved file references removed between the comparison baseline and selected Page version`,
          values: { count: n.before.length },
        })),
        (t[7] = n.before.length),
        (t[8] = e)),
      (l = e));
  } else if (n.before.length === 0) {
    let e;
    (t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.linkAdded`,
          defaultMessage: `Link added`,
          description: `Opens the destination of a hyperlink added to existing Page content`,
        })),
        (t[9] = e))
      : (e = t[9]),
      (l = e));
  } else if (n.after.length === 0) {
    let e;
    (t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.linkRemoved`,
          defaultMessage: `Link removed`,
          description: `Opens the original destination of a hyperlink removed from existing Page content`,
        })),
        (t[10] = e))
      : (e = t[10]),
      (l = e));
  } else if (s) {
    let e;
    (t[11] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, J.jsx)(q, {
          id: `codex.page.versions.comparison.filesChanged`,
          defaultMessage: `Files changed`,
          description: `Opens saved comparison-version and selected-version file references when several attachments changed in one Page passage`,
        })),
        (t[11] = e))
      : (e = t[11]),
      (l = e));
  }
  let u;
  t[12] === l
    ? (u = t[13])
    : ((u = (0, J.jsx)(le, {
        asChild: !0,
        children: (0, J.jsx)(V, { color: `ghostSecondary`, size: `inline`, children: l }),
      })),
      (t[12] = l),
      (t[13] = u));
  let d;
  t[14] !== s || t[15] !== l || t[16] !== n.after || t[17] !== n.before || t[18] !== r || t[19] !== a
    ? ((d = r
        ? (0, J.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-3 p-2 text-sm`,
            children: [
              (0, J.jsx)(ue, { id: a, className: `sr-only`, children: l }),
              s && n.before.length === 1 && n.after.length === 1 && n.before[0].text === n.after[0].text
                ? (0, J.jsx)(`p`, {
                    className: `text-secondary`,
                    children: (0, J.jsx)(q, {
                      id: `codex.page.versions.comparison.sameNameReplacement`,
                      defaultMessage: `The linked file was replaced with a different file of the same name`,
                      description: `Explains why two identical filenames appear in before/after details: the saved file reference was replaced, not merely renamed`,
                    }),
                  })
                : null,
              n.before.length > 0
                ? (0, J.jsx)(Bn, { links: n.before, before: !0, changed: n.after.length > 0, filesOnly: s })
                : null,
              n.after.length > 0
                ? (0, J.jsx)(Bn, { links: n.after, before: !1, changed: n.before.length > 0, filesOnly: s })
                : null,
            ],
          })
        : null),
      (t[14] = s),
      (t[15] = l),
      (t[16] = n.after),
      (t[17] = n.before),
      (t[18] = r),
      (t[19] = a),
      (t[20] = d))
    : (d = t[20]);
  let f;
  t[21] !== d || t[22] !== a
    ? ((f = (0, J.jsx)(ye, { "aria-labelledby": a, opaque: !0, onEscapeKeyDown: Rn, children: d })),
      (t[21] = d),
      (t[22] = a),
      (t[23] = f))
    : (f = t[23]);
  let p;
  return (
    t[24] !== r || t[25] !== u || t[26] !== f
      ? ((p = (0, J.jsxs)(se, { open: r, onOpenChange: i, children: [u, f] })),
        (t[24] = r),
        (t[25] = u),
        (t[26] = f),
        (t[27] = p))
      : (p = t[27]),
    p
  );
}
function Rn(e) {
  return e.stopPropagation();
}
function zn(e) {
  let { href: t } = e;
  return Bt(t) != null;
}
function Bn(e) {
  let t = (0, Hn.c)(23),
    { links: n, before: r, changed: i, filesOnly: a } = e,
    o;
  if (a && i && r) {
    let e;
    (t[0] === n.length
      ? (e = t[1])
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
      : ((e = (0, J.jsx)(q, {
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
        Bt(n) == null
          ? (0, J.jsx)(q, {
              id: `codex.page.versions.comparison.unnamedLink`,
              defaultMessage: `Linked content`,
              description: `Fallback name for an internal historical link without a readable saved label`,
            })
          : (0, J.jsx)(q, {
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
                onClick: (e) => nt({ event: e, href: n, initiator: `markdown_link_click` }),
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
    ((Hn = k()), (Un = d()), z(), H(), dt(), W(), St(), (J = v()));
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
    e.length === 0 ? [{ value: t.text, added: !0, removed: !1 }] : ut(e, t.text, { maxEditLength: 128 });
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
    ot();
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
    $n = t(pe(), 1);
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
  let r = Ze(
      t.parse(``),
      e.blocks.map(({ unit: e }) => e),
      t,
    ),
    i = Be(r, t, e.blocks.length),
    a = Je(r),
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
      : t.copy(oe.fromArray(e.flatMap(({ node: e }) => (e.type === t.type ? [...e.content.content] : [e]))));
}
var ir;
function ar() {
  return (ar = e(() => {
    (Se(), et(), (ir = new WeakMap()));
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
    i = ut(n, r, { maxEditLength: 128 });
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
    ut(n, r, { maxEditLength: 32 })?.reduce((e, t) => e + (!t.added && !t.removed ? t.value.length : 0), 0) ??
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
  let n = t.map((e, t) => {
    let n = e.trim(),
      r = [],
      i = 0;
    for (let e = 0; e < n.length; e++)
      n[e] === `|` && n[e - 1] !== `\\` && (r.push(n.slice(i, e)), (i = e + 1));
    return (
      r.push(n.slice(i)),
      r
        .map((e) => {
          let n = e.trim();
          return t === 1 ? n.replace(/^(:?)-+(:?)$/u, `$1---$2`) : n;
        })
        .join(`|`)
    );
  });
  return /^\|(?::?-+:?\|)+$/u.test(n[1])
    ? n.join(`
`)
    : e;
}
var fr, pr, mr;
function hr() {
  return (hr = e(() => {
    (ot(), (fr = t(pe(), 1)), (pr = 8e4), (mr = 256));
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
      _ = p.length !== g.length || p.some(({ href: e }, t) => (Bt(e) ?? e) !== (Bt(g[t].href) ?? g[t].href)),
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
  let r = t.copy(oe.from(e));
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
  return e.isText ? e.mark([]) : e.copy(oe.fromArray(e.content.content.map(Sr)));
}
function Cr(e) {
  let t = [],
    n = -1;
  return (
    e?.descendants((e, r) => {
      let i = We(e);
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
    return e.type.create({ ...e.attrs, href: typeof t == `string` && Bt(t) != null ? (qt(t) ?? ``) : `` });
  });
  return e.isText ? e.mark(t) : e.type.create(e.attrs, oe.fromArray(e.content.content.map(wr)), t);
}
async function Tr(e) {
  (e.throwIfAborted(), await new Promise((e) => setTimeout(e, 0)), e.throwIfAborted());
}
var Er, Dr, Or, kr;
function Ar() {
  return (Ar = e(() => {
    (Se(), jt(), St(), Xn(), er(), ar(), hr(), (Er = 16e3), (Dr = 8e4), (Or = 8), (kr = new WeakMap()));
  }))();
}
function jr(e) {
  return new u({
    props: {
      nodeViews: {
        [st]: (t, n) => {
          let { fileId: r, title: i } = Ct.parse(t.attrs),
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
    (C(), mt(), Mt());
  }))();
}
function Nr(e) {
  let t = (0, Lr.c)(26),
    { pageId: n, content: i, movedRanges: a, moves: o } = e,
    s = r(j),
    c = Ce(),
    l = (0, Rr.useId)(),
    d;
  t[0] === l ? (d = t[1]) : ((d = () => new an(l)), (t[0] = l), (t[1] = d));
  let [f] = (0, Rr.useState)(d),
    [p] = (0, Rr.useState)(Ir),
    [m] = (0, Rr.useState)(Fr),
    h;
  t[2] !== f ||
  t[3] !== i ||
  t[4] !== p ||
  t[5] !== c ||
  t[6] !== m ||
  t[7] !== a ||
  t[8] !== o ||
  t[9] !== n ||
  t[10] !== s
    ? ((h = (e) => {
        if (e == null) return;
        let t = [];
        for (let n of o ?? []) {
          let r = e.ownerDocument.createElement(`div`);
          ((r.className = `${un.PageReadingColumn} mx-auto text-xs text-secondary select-none`),
            r.setAttribute(`data-markdown-copy`, `exclude`),
            (r.textContent =
              n.section == null
                ? c.formatMessage(
                    {
                      id: `codex.page.versions.comparison.movedElsewhere`,
                      defaultMessage: `{edited, select, true {Moved elsewhere and edited} other {Moved elsewhere}}`,
                      description: `Label above an old passage inside a grouped comparison; it still exists at a different position in the selected version, outside a named section`,
                    },
                    { edited: n.edited },
                  )
                : c.formatMessage(
                    {
                      id: `codex.page.versions.comparison.movedToSection`,
                      defaultMessage: `{edited, select, true {Moved to {section} and edited} other {Moved to {section}}}`,
                      description: `Label above an old passage inside a grouped comparison naming the section where it appears in the selected version; edited means its content or formatting also changed`,
                    },
                    { edited: n.edited, section: n.section },
                  )),
            t.push(G.widget(n.from, r, { side: -1, ignoreSelection: !0 })));
        }
        for (let e of a ?? [])
          i.nodesBetween(e.from, e.to, (n, r) =>
            r >= e.from && r + n.nodeSize <= e.to
              ? (t.push(G.node(r, r + n.nodeSize, { class: `bg-text-info/10` })), !1)
              : !0,
          );
        let r = je.create(i, t),
          l = cn(e, i, {
            pageLinks: { scope: s, pageId: n, intl: c, icons: m },
            checkboxes: f,
            onOpenLink: Pr,
            plugins: [
              m.createPlugin(i.type.schema),
              p.plugin,
              jr(c),
              new u({ props: { decorations: () => r } }),
            ],
          });
        return () => l.destroy();
      }),
      (t[2] = f),
      (t[3] = i),
      (t[4] = p),
      (t[5] = c),
      (t[6] = m),
      (t[7] = a),
      (t[8] = o),
      (t[9] = n),
      (t[10] = s),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  t[12] === g
    ? (_ = t[13])
    : ((_ = (0, zr.jsx)(`div`, { ref: g, className: `${en.root} p-0`, style: Qt })),
      (t[12] = g),
      (t[13] = _));
  let v;
  t[14] === f
    ? (v = t[15])
    : ((v = (0, zr.jsx)(rn, { editable: !1, registry: f })), (t[14] = f), (t[15] = v));
  let y;
  t[16] === m ? (y = t[17]) : ((y = (0, zr.jsx)(zt, { registry: m })), (t[16] = m), (t[17] = y));
  let b;
  t[18] !== p || t[19] !== n
    ? ((b = (0, zr.jsx)(mn, { pageId: n, registry: p })), (t[18] = p), (t[19] = n), (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== _ || t[22] !== v || t[23] !== y || t[24] !== b
      ? ((x = (0, zr.jsxs)(zr.Fragment, { children: [_, v, y, b] })),
        (t[21] = _),
        (t[22] = v),
        (t[23] = y),
        (t[24] = b),
        (t[25] = x))
      : (x = t[25]),
    x
  );
}
function Pr(e, t) {
  return nt({ event: e, href: t, initiator: `markdown_link_click` });
}
function Fr() {
  return new At();
}
function Ir() {
  return new pn();
}
var Lr, Rr, zr;
function Br() {
  return (Br = e(() => {
    ((Lr = k()),
      tn(),
      $t(),
      U(),
      C(),
      c(),
      (Rr = d()),
      z(),
      dt(),
      Kt(),
      Ke(),
      nn(),
      on(),
      sn(),
      dn(),
      fn(),
      i(),
      Mr(),
      ln(),
      (zr = v()));
  }))();
}
function Vr(e) {
  let t = (0, Ur.c)(25),
    { pageId: n, origin: r, document: i, edited: a } = e,
    [o, s] = (0, Wr.useState)(!1),
    c = (0, Wr.useId)(),
    l;
  if (r.section == null && a) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Gr.jsx)(q, {
          id: `codex.page.versions.comparison.viewEditedMoveOrigin`,
          defaultMessage: `Moved and edited · View original location`,
          description: `Button beside Page content that moved and changed between the two compared versions; opens its exact content and location in the comparison baseline`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (l = e));
  } else if (r.section == null) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Gr.jsx)(q, {
          id: `codex.page.versions.comparison.viewMoveOrigin`,
          defaultMessage: `Moved · View original location`,
          description: `Button beside moved Page content that previews its location in the comparison baseline, regardless of the chronological order of the two compared versions`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (l = e));
  } else if (a) {
    let e;
    (t[2] === r.section
      ? (e = t[3])
      : ((e = (0, Gr.jsx)(q, {
          id: `codex.page.versions.comparison.viewNamedEditedMoveOrigin`,
          defaultMessage: `Moved from {section} · Edited`,
          description: `Button beside Page content that moved from the named section and also changed between compared versions; opens its exact content and location in the comparison baseline`,
          values: { section: r.section },
        })),
        (t[2] = r.section),
        (t[3] = e)),
      (l = e));
  } else {
    let e;
    (t[4] === r.section
      ? (e = t[5])
      : ((e = (0, Gr.jsx)(q, {
          id: `codex.page.versions.comparison.viewNamedMoveOrigin`,
          defaultMessage: `Moved from {section}`,
          description: `Button beside moved Page content that names its section in the comparison version and opens a preview of that location`,
          values: { section: r.section },
        })),
        (t[4] = r.section),
        (t[5] = e)),
      (l = e));
  }
  let u;
  t[6] === l
    ? (u = t[7])
    : ((u = (0, Gr.jsx)(le, {
        asChild: !0,
        children: (0, Gr.jsx)(V, { color: `ghostSecondary`, size: `inline`, children: l }),
      })),
      (t[6] = l),
      (t[7] = u));
  let d;
  t[8] !== i ||
  t[9] !== o ||
  t[10] !== r.after ||
  t[11] !== r.before ||
  t[12] !== r.content ||
  t[13] !== r.movedRanges ||
  t[14] !== r.section ||
  t[15] !== n ||
  t[16] !== c
    ? ((d = o
        ? (0, Gr.jsxs)(`div`, {
            className: `${un.PageDocumentTheme} flex min-h-0 flex-col gap-3 p-2 text-sm`,
            children: [
              (0, Gr.jsx)(ue, {
                id: c,
                className: `select-none`,
                children: (0, Gr.jsx)(q, {
                  id: `codex.page.versions.comparison.originalLocation`,
                  defaultMessage: `Original location`,
                  description: `Title of a preview showing moved content at its source location in the comparison baseline, regardless of the chronological order of the two compared versions`,
                }),
              }),
              (0, Gr.jsxs)(`section`, {
                className: `flex min-w-0 flex-col gap-3`,
                children: [
                  r.section == null
                    ? null
                    : (0, Gr.jsx)(`p`, { className: `font-medium`, children: r.section }),
                  r.before != null && r.before.textContent !== r.section
                    ? (0, Gr.jsx)(`p`, {
                        className: `line-clamp-3 text-secondary`,
                        children: r.before.textBetween(0, r.before.content.size, ` · `),
                      })
                    : null,
                  (0, Gr.jsx)(Nr, { pageId: n, content: _r(r.content, i), movedRanges: r.movedRanges }),
                  r.after == null
                    ? null
                    : (0, Gr.jsx)(`p`, {
                        className: `line-clamp-3 text-secondary`,
                        children: r.after.textBetween(0, r.after.content.size, ` · `),
                      }),
                ],
              }),
            ],
          })
        : null),
      (t[8] = i),
      (t[9] = o),
      (t[10] = r.after),
      (t[11] = r.before),
      (t[12] = r.content),
      (t[13] = r.movedRanges),
      (t[14] = r.section),
      (t[15] = n),
      (t[16] = c),
      (t[17] = d))
    : (d = t[17]);
  let f;
  t[18] !== d || t[19] !== c
    ? ((f = (0, Gr.jsx)(ye, {
        "aria-labelledby": c,
        opaque: !0,
        size: `extraLarge`,
        onEscapeKeyDown: Hr,
        children: d,
      })),
      (t[18] = d),
      (t[19] = c),
      (t[20] = f))
    : (f = t[20]);
  let p;
  return (
    t[21] !== o || t[22] !== u || t[23] !== f
      ? ((p = (0, Gr.jsxs)(se, { open: o, onOpenChange: s, children: [u, f] })),
        (t[21] = o),
        (t[22] = u),
        (t[23] = f),
        (t[24] = p))
      : (p = t[24]),
    p
  );
}
function Hr(e) {
  return e.stopPropagation();
}
var Ur, Wr, Gr;
function Kr() {
  return (Kr = e(() => {
    ((Ur = k()), (Wr = d()), z(), H(), W(), Ar(), Br(), ln(), (Gr = v()));
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
        let t = i.copy(oe.empty),
          n = hn(
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
    p =
      (r.mode === `diff` || r.mode === `before`) && !r.moved && !l
        ? `sr-only`
        : `${un.PageReadingColumn} flex flex-wrap items-center gap-2 self-center text-xs text-secondary select-none`,
    m;
  t[4] !== r || t[5] !== l
    ? ((m =
        r.kind !== `moved` && r.mode !== `before` && !l
          ? (0, Y.jsx)(`span`, {
              className: r.mode === `marker` && r.presentationChanged ? void 0 : `sr-only`,
              children: (0, Y.jsx)(Mn, { change: r }),
            })
          : null),
      (t[4] = r),
      (t[5] = l),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== r.links || t[8] !== l || t[9] !== o
    ? ((h = o && l && r.links != null ? (0, Y.jsx)(Ln, { links: r.links }) : null),
      (t[7] = r.links),
      (t[8] = l),
      (t[9] = o),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== r.blockIds ||
  t[12] !== r.blockPresentationChanged ||
  t[13] !== r.contentChanged ||
  t[14] !== r.moveOrigins ||
  t[15] !== r.moved ||
  t[16] !== i ||
  t[17] !== n ||
  t[18] !== o
    ? ((g =
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
      (t[19] = g))
    : (g = t[19]);
  let _;
  t[20] !== p || t[21] !== m || t[22] !== h || t[23] !== g
    ? ((_ = (0, Y.jsxs)(`div`, { className: p, "data-markdown-copy": `exclude`, children: [m, h, g] })),
      (t[20] = p),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g),
      (t[24] = _))
    : (_ = t[24]);
  let v;
  t[25] !== r.mode || t[26] !== d
    ? ((v = r.mode === `diff` ? (0, Y.jsx)(`div`, { ref: d }) : null),
      (t[25] = r.mode),
      (t[26] = d),
      (t[27] = v))
    : (v = t[27]);
  let y;
  t[28] !== s || t[29] !== r || t[30] !== i || t[31] !== n || t[32] !== c || t[33] !== o
    ? ((y =
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
      (t[34] = y))
    : (y = t[34]);
  let b;
  return (
    t[35] !== f || t[36] !== _ || t[37] !== v || t[38] !== y
      ? ((b = (0, Y.jsxs)(`div`, {
          className: `relative flex min-w-0 flex-col gap-1`,
          "aria-current": f,
          children: [_, v, y],
        })),
        (t[35] = f),
        (t[36] = _),
        (t[37] = v),
        (t[38] = y),
        (t[39] = b))
      : (b = t[39]),
    b
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
        : ((e = (0, Y.jsx)(q, {
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
          : (0, Y.jsx)(L, {
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
      ? ((o = (0, Y.jsx)(q, {
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
    ((Zr = k()), Se(), (Qr = d()), z(), gn(), In(), Wn(), Kr(), Ar(), Br(), ln(), (Y = v()));
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
  let o = Ft(a);
  return o != null && (t.setData(`text/html`, o.htmlText), t.setData(`text/plain`, o.plainText), !0);
}
function ti() {
  return (ti = e(() => {
    Lt();
  }))();
}
function ni(e) {
  return new u({
    key: ai,
    state: {
      init: () => e,
      apply(e, t) {
        let n = e.getMeta(ai);
        return n instanceof je ? n : t;
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
      r.push(G.widget(i.from, a, { side: -1, ignoreSelection: !0 })));
    for (let { from: e, to: t } of i.addedRanges)
      r.push(G.inline(e, t, { nodeName: `ins`, class: `bg-text-info/10 text-info no-underline` }));
    for (let { from: e, to: t } of i.formattingRanges)
      r.push(G.inline(e, t, { "data-page-version-formatting": ``, class: `bg-text-info/10` }));
    i.after != null &&
      (i.mode === `diff` || i.kind === `removed` || i.kind === `added`) &&
      e.document.nodesBetween(i.from, i.to, (e, t) =>
        i.kind === `added` && i.mode !== `diff`
          ? (e.isTextblock &&
              e.content.size > 0 &&
              r.push(G.inline(t + 1, t + e.nodeSize - 1, { class: `bg-text-info/10` })),
            !e.isTextblock)
          : (t >= i.from &&
              t + e.nodeSize <= i.to &&
              r.push(G.node(t, t + e.nodeSize, { "data-page-section-hidden": `true` })),
            !1),
      );
  }
  return { slots: n, decorations: je.create(e.document, r) };
}
var ai;
function oi() {
  return (oi = e(() => {
    (C(), c(), (ai = new O(`pageVersionComparison`)));
  }))();
}
function si(e) {
  let t = (0, di.c)(100),
    { pageId: n, comparison: i, showChanges: a, activeChangeId: o, baselineDate: s, selectedDate: c } = e,
    l = r(j),
    u = Ce(),
    d = (0, fi.useId)(),
    f;
  t[0] === d ? (f = t[1]) : ((f = () => new an(d)), (t[0] = d), (t[1] = f));
  let [p] = (0, fi.useState)(f),
    [m] = (0, fi.useState)(ui),
    [h] = (0, fi.useState)(li),
    g;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = []), (t[2] = g)) : (g = t[2]);
  let _;
  t[3] === a ? (_ = t[4]) : ((_ = { slots: g, visible: a }), (t[3] = a), (t[4] = _));
  let [v, y] = (0, fi.useState)(_),
    { slots: b, visible: x } = v,
    S = (0, fi.useRef)(null),
    C = (0, fi.useRef)(null),
    w = (0, fi.useRef)(null),
    T = (0, fi.useRef)(null),
    E = (0, fi.useRef)(null),
    D = (0, fi.useRef)(null),
    O = (0, fi.useRef)(0),
    k = i.document,
    A;
  if (t[5] !== o || t[6] !== i.changes) {
    let e;
    (t[8] === o ? (e = t[9]) : ((e = (e) => e.id === o), (t[8] = o), (t[9] = e)),
      (A = i.changes.find(e)),
      (t[5] = o),
      (t[6] = i.changes),
      (t[7] = A));
  } else A = t[7];
  let M = A,
    N;
  t[10] !== p ||
  t[11] !== i ||
  t[12] !== k ||
  t[13] !== m.plugin ||
  t[14] !== u ||
  t[15] !== h ||
  t[16] !== n ||
  t[17] !== l ||
  t[18] !== a
    ? ((N = (e) => {
        let t = a ? ii(i, e.ownerDocument) : null,
          r = cn(e, k, {
            pageLinks: { scope: l, pageId: n, intl: u, icons: h },
            checkboxes: p,
            onOpenLink: ci,
            plugins: [h.createPlugin(k.type.schema), m.plugin, ni(t?.decorations ?? je.empty), jr(u)],
          });
        return (
          (D.current = { comparison: i, showChanges: a, review: t }),
          y({ slots: t?.slots ?? [], visible: a }),
          r
        );
      }),
      (t[10] = p),
      (t[11] = i),
      (t[12] = k),
      (t[13] = m.plugin),
      (t[14] = u),
      (t[15] = h),
      (t[16] = n),
      (t[17] = l),
      (t[18] = a),
      (t[19] = N))
    : (N = t[19]);
  let P = (0, fi.useEffectEvent)(N),
    ee;
  t[20] === P
    ? (ee = t[21])
    : ((ee = () => {
        if (C.current == null) return;
        let e = P(C.current);
        return (
          (S.current = e),
          () => {
            (e.destroy(), (S.current = null), (D.current = null));
          }
        );
      }),
      (t[20] = P),
      (t[21] = ee));
  let F;
  (t[22] !== k || t[23] !== u || t[24] !== n || t[25] !== l
    ? ((F = [k, u, n, l]), (t[22] = k), (t[23] = u), (t[24] = n), (t[25] = l), (t[26] = F))
    : (F = t[26]),
    (0, fi.useLayoutEffect)(ee, F));
  let I;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        let e = S.current,
          t = w.current;
        if (e == null || t == null || O.current === 0) return;
        let n = t.getBoundingClientRect().top;
        for (let t of e.dom.children) {
          let r = t.getBoundingClientRect();
          if (r.height > 0 && r.bottom > n) {
            let n = e.state.doc.resolve(e.posAtDOM(t, 0));
            T.current = { position: n.depth > 0 ? n.before(1) : n.pos, top: r.top };
            break;
          }
        }
      }),
      (t[27] = I))
    : (I = t[27]);
  let te = (0, fi.useEffectEvent)(I),
    L;
  t[28] !== te || t[29] !== i || t[30] !== a
    ? ((L = () => {
        if (S.current == null || (D.current?.comparison === i && D.current.showChanges === a)) return;
        D.current != null && te();
        let e =
          (D.current?.comparison === i ? D.current.review : null) ??
          (a ? ii(i, S.current.dom.ownerDocument) : null);
        ((D.current = { comparison: i, showChanges: a, review: e }),
          ri(S.current, a ? (e?.decorations ?? je.empty) : je.empty),
          y({ slots: e?.slots ?? [], visible: a }));
      }),
      (t[28] = te),
      (t[29] = i),
      (t[30] = a),
      (t[31] = L))
    : (L = t[31]);
  let R = (0, fi.useEffectEvent)(L),
    z;
  t[32] === R
    ? (z = t[33])
    : ((z = () => {
        R();
      }),
      (t[32] = R),
      (t[33] = z));
  let B;
  (t[34] !== i || t[35] !== a ? ((B = [i, a]), (t[34] = i), (t[35] = a), (t[36] = B)) : (B = t[36]),
    (0, fi.useLayoutEffect)(z, B));
  let V, H;
  (t[37] !== b || t[38] !== x
    ? ((V = () => {
        let e = T.current;
        if (((T.current = null), e != null && S.current != null && w.current != null)) {
          let t =
            (x
              ? b.find((t) => {
                  let { change: n } = t;
                  return n.from === e.position;
                })?.container
              : void 0) ?? S.current.nodeDOM(e.position);
          if (t instanceof HTMLElement) {
            let n = w.current,
              r = n.currentCSSZoom || 1;
            ((n.scrollTop += (t.getBoundingClientRect().top - e.top) / r), (O.current = n.scrollTop));
          }
        }
      }),
      (H = [b, x]),
      (t[37] = b),
      (t[38] = x),
      (t[39] = V),
      (t[40] = H))
    : ((V = t[39]), (H = t[40])),
    (0, fi.useLayoutEffect)(V, H));
  let U, W;
  (t[41] !== o || t[42] !== a || t[43] !== b
    ? ((U = () => {
        if (o == null) {
          E.current = null;
          return;
        }
        if (!a || w.current == null || E.current === o) return;
        let e = b.find((e) => {
            let { change: t } = e;
            return t.id === o;
          }),
          t = e?.container;
        if (
          (o === `title`
            ? (t = w.current.querySelector(`h1`))
            : e != null &&
              e.change.mode !== `diff` &&
              e.change.kind !== `removed` &&
              e.change.after != null &&
              S.current != null &&
              (t = S.current.nodeDOM(e.change.from)),
          t instanceof HTMLElement)
        ) {
          let e = w.current,
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
            (O.current = e.scrollTop),
            (E.current = o));
        }
      }),
      (W = [o, a, b]),
      (t[41] = o),
      (t[42] = a),
      (t[43] = b),
      (t[44] = U),
      (t[45] = W))
    : ((U = t[44]), (W = t[45])),
    (0, fi.useLayoutEffect)(U, W));
  let ne;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (e) => {
        O.current = e.currentTarget.scrollTop;
      }),
      (t[46] = ne))
    : (ne = t[46]);
  let re;
  t[47] === a
    ? (re = t[48])
    : ((re = (e) => {
        a && ei(e.currentTarget, e.clipboardData) && (e.preventDefault(), e.stopPropagation());
      }),
      (t[47] = a),
      (t[48] = re));
  let G = a && o === `title` ? `step` : void 0,
    K;
  t[49] !== i.baseline || t[50] !== i.snapshot.title || t[51] !== i.titleChanged || t[52] !== a
    ? ((K =
        a && i.titleChanged
          ? (0, mi.jsxs)(mi.Fragment, {
              children: [
                (0, mi.jsx)(`del`, {
                  className: `text-secondary`,
                  "data-page-version-deleted": !0,
                  children: i.baseline.title,
                }),
                ` `,
                (0, mi.jsx)(`ins`, {
                  className: `bg-text-info/10 text-info no-underline`,
                  children: i.snapshot.title,
                }),
              ],
            })
          : i.snapshot.title || (0, mi.jsx)(q, { ...Gt.untitled })),
      (t[49] = i.baseline),
      (t[50] = i.snapshot.title),
      (t[51] = i.titleChanged),
      (t[52] = a),
      (t[53] = K))
    : (K = t[53]);
  let ie;
  t[54] !== G || t[55] !== K
    ? ((ie = (0, mi.jsx)(`h1`, {
        className: `${un.PageTitle} relative font-semibold break-words text-default`,
        "aria-current": G,
        children: K,
      })),
      (t[54] = G),
      (t[55] = K),
      (t[56] = ie))
    : (ie = t[56]);
  let ae;
  t[57] !== i.detailed || t[58] !== a
    ? ((ae =
        a && !i.detailed
          ? (0, mi.jsx)(`p`, {
              className: `${un.PageReadingColumn} text-sm text-secondary`,
              role: `status`,
              children: (0, mi.jsx)(q, {
                id: `codex.page.versions.comparison.detailLimitSelected`,
                defaultMessage: `Some large changes aren’t highlighted word by word. Expand a change to compare the full content before and after.`,
                description: `Explains the word-level comparison limit without suggesting that any saved content is missing; full before and after content remains available in each expandable change`,
              }),
            })
          : null),
      (t[57] = i.detailed),
      (t[58] = a),
      (t[59] = ae))
    : (ae = t[59]);
  let oe;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, mi.jsx)(`div`, {
        ref: C,
        className: `${en.root} min-w-0 px-0`,
        "data-page-document-selection": !0,
        style: Qt,
      })),
      (t[60] = oe))
    : (oe = t[60]);
  let se;
  t[61] !== ie || t[62] !== ae
    ? ((se = (0, mi.jsxs)(vn, { heading: ie, children: [ae, oe] })), (t[61] = ie), (t[62] = ae), (t[63] = se))
    : (se = t[63]);
  let ce = x ? M : void 0,
    le;
  t[64] !== o || t[65] !== b
    ? ((le = b.find((e) => {
        let { change: t } = e;
        return t.id === o;
      })?.container),
      (t[64] = o),
      (t[65] = b),
      (t[66] = le))
    : (le = t[66]);
  let ue;
  t[67] !== ce || t[68] !== le
    ? ((ue = (0, mi.jsx)(Dn, { change: ce, target: le, view: S })), (t[67] = ce), (t[68] = le), (t[69] = ue))
    : (ue = t[69]);
  let de;
  t[70] === p
    ? (de = t[71])
    : ((de = (0, mi.jsx)(rn, { editable: !1, registry: p })), (t[70] = p), (t[71] = de));
  let fe;
  t[72] === h ? (fe = t[73]) : ((fe = (0, mi.jsx)(zt, { registry: h })), (t[72] = h), (t[73] = fe));
  let pe;
  t[74] !== m || t[75] !== n
    ? ((pe = (0, mi.jsx)(mn, { pageId: n, registry: m })), (t[74] = m), (t[75] = n), (t[76] = pe))
    : (pe = t[76]);
  let me;
  if (t[77] !== o || t[78] !== s || t[79] !== k || t[80] !== n || t[81] !== c || t[82] !== b || t[83] !== x) {
    let e;
    (t[85] !== o || t[86] !== s || t[87] !== k || t[88] !== n || t[89] !== c || t[90] !== x
      ? ((e = (e) => {
          let { change: t, container: r } = e;
          return (0, pi.createPortal)(
            (0, mi.jsx)(qr, {
              pageId: n,
              change: t,
              document: k,
              active: x && t.id === o,
              visible: x,
              baselineDate: s,
              selectedDate: c,
            }),
            r,
            t.id,
          );
        }),
        (t[85] = o),
        (t[86] = s),
        (t[87] = k),
        (t[88] = n),
        (t[89] = c),
        (t[90] = x),
        (t[91] = e))
      : (e = t[91]),
      (me = b.map(e)),
      (t[77] = o),
      (t[78] = s),
      (t[79] = k),
      (t[80] = n),
      (t[81] = c),
      (t[82] = b),
      (t[83] = x),
      (t[84] = me));
  } else me = t[84];
  let he;
  return (
    t[92] !== re ||
    t[93] !== se ||
    t[94] !== ue ||
    t[95] !== de ||
    t[96] !== fe ||
    t[97] !== pe ||
    t[98] !== me
      ? ((he = (0, mi.jsxs)(`div`, {
          ref: w,
          className: `${un.PageDocumentTheme} relative min-h-0 flex-1 scroll-pt-[var(--pane-overlay-header-height,0px)] overflow-y-auto pt-[var(--pane-overlay-header-height,0px)]`,
          onScroll: ne,
          onCopyCapture: re,
          children: [se, ue, de, fe, pe, me],
        })),
        (t[92] = re),
        (t[93] = se),
        (t[94] = ue),
        (t[95] = de),
        (t[96] = fe),
        (t[97] = pe),
        (t[98] = me),
        (t[99] = he))
      : (he = t[99]),
    he
  );
}
function ci(e, t) {
  return nt({ event: e, href: t, initiator: `markdown_link_click` });
}
function li() {
  return new At();
}
function ui() {
  return new pn();
}
var di, fi, pi, mi;
function hi() {
  return (hi = e(() => {
    ((di = k()),
      tn(),
      $t(),
      U(),
      c(),
      (fi = d()),
      (pi = p()),
      z(),
      dt(),
      Kt(),
      Ke(),
      nn(),
      on(),
      _n(),
      sn(),
      dn(),
      fn(),
      Rt(),
      i(),
      jn(),
      $r(),
      ti(),
      oi(),
      Mr(),
      ln(),
      (mi = v()));
  }))();
}
function gi(e) {
  let t = (0, _i.c)(8),
    { comparison: n } = e,
    r = n !== void 0 && n,
    i = Ce(),
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
    ? ((o = (0, vi.jsx)(Ve, { size: `lg`, widthPercent: 55 })), (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, vi.jsx)(Ge, { lines: 3, seed: `page-version-introduction` })), (t[4] = s))
    : (s = t[4]);
  let c;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, vi.jsx)(vn, {
        heading: o,
        children: (0, vi.jsxs)(`div`, {
          className: `${un.PageReadingColumn} flex flex-col gap-6`,
          children: [
            s,
            (0, vi.jsxs)(`div`, {
              className: `flex flex-col gap-4`,
              children: [
                (0, vi.jsx)(Ve, { size: `lg`, widthPercent: 40 }),
                (0, vi.jsx)(Ge, { lines: 4, seed: `page-version-body` }),
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
    ((_i = k()), z(), qe(), _n(), ln(), (vi = v()));
  }))();
}
function bi() {
  let e = (0, Si.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Ci.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Ci.jsx)(q, {
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
    It,
    {
      compactSecondLine: !0,
      density: `row`,
      hasInteractiveContent: !0,
      buttonProps: { disabled: !0 },
      isSelected: !1,
      title: (0, Ci.jsx)(Ve, { as: `span`, className: `block w-16`, size: `sm` }),
      rightText: (0, Ci.jsx)(Ve, { as: `span`, className: `block w-24`, size: `sm` }),
    },
    e,
  );
}
var Si, Ci;
function wi() {
  return (wi = e(() => {
    ((Si = k()), z(), Tt(), qe(), (Ci = v()));
  }))();
}
function Ti(e) {
  let t = (0, Ei.c)(49),
    {
      endpoint: n,
      index: r,
      minIndex: i,
      maxIndex: a,
      timeline: o,
      label: s,
      pressed: c,
      previewLabel: l,
      previewMethod: u,
      onChoose: d,
      onPreview: f,
      onCommit: p,
      onCancel: m,
    } = e,
    h = (0, Di.useRef)(null),
    g = (0, Di.useRef)(!1),
    _,
    v;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => () => h.current?.()), (v = []), (t[0] = _), (t[1] = v))
    : ((_ = t[0]), (v = t[1])),
    (0, Di.useEffect)(_, v));
  let y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Oi.jsx)(q, {
        id: `codex.page.versions.timelineHandleHint`,
        defaultMessage: `Click or drag to change version`,
        description: `Tooltip for a Page version comparison handle; clicking lets the user choose a version from the list, and dragging moves the comparison endpoint`,
      })),
      (t[2] = y))
    : (y = t[2]);
  let x = c ? `open` : void 0,
    S;
  t[3] === d
    ? (S = t[4])
    : ((S = (e) => {
        ((!g.current || e.detail === 0) && d(e.currentTarget, e.detail > 0), (g.current = !1));
      }),
      (t[3] = d),
      (t[4] = S));
  let C;
  t[5] !== m || t[6] !== u
    ? ((C = () => {
        u === `keyboard` && m(!1);
      }),
      (t[5] = m),
      (t[6] = u),
      (t[7] = C))
    : (C = t[7]);
  let w;
  t[8] !== r ||
  t[9] !== a ||
  t[10] !== i ||
  t[11] !== m ||
  t[12] !== p ||
  t[13] !== f ||
  t[14] !== u ||
  t[15] !== o
    ? ((w = (e) => {
        if (e.key === `Tab` && u === `keyboard`) m(!1);
        else if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
          (e.preventDefault(), e.stopPropagation());
          let t = o.current?.querySelectorAll(`[data-version-history-index]`);
          if (t == null || t.length === 0) return;
          let n = Math.max(i, Math.min(a, r + (e.key === `ArrowUp` ? -1 : 1)));
          (f(n, `keyboard`, e.currentTarget), t[n]?.scrollIntoView({ block: `nearest` }));
        } else
          (e.key === `Enter` || e.key === ` `) &&
            u === `keyboard` &&
            (e.preventDefault(), e.stopPropagation(), p(r, !1));
      }),
      (t[8] = r),
      (t[9] = a),
      (t[10] = i),
      (t[11] = m),
      (t[12] = p),
      (t[13] = f),
      (t[14] = u),
      (t[15] = o),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== r || t[18] !== a || t[19] !== i || t[20] !== m || t[21] !== p || t[22] !== f || t[23] !== o
    ? ((T = (e) => {
        if (e.button !== 0 || e.isPrimary === !1 || h.current != null) return;
        let t = o.current,
          n = t?.closest(`[role="region"]`),
          s = e.currentTarget,
          c = s.ownerDocument,
          l = c.defaultView;
        if (t == null || n == null || l == null) return;
        (s.focus({ preventScroll: !0 }), (g.current = !1));
        let u = n.getBoundingClientRect(),
          d = 0,
          _ = 1,
          v = [],
          y = !1,
          b = (e) => {
            ((u = e),
              (d = Number.parseFloat(l.getComputedStyle(n).scrollPaddingBottom) || 0),
              (_ = n.offsetHeight > 0 ? u.height / n.offsetHeight : 1),
              (v = Array.from(t.querySelectorAll(`[data-version-history-index]`), (e) => {
                let t = e.getBoundingClientRect();
                return {
                  index: Number(e.dataset.versionHistoryIndex),
                  center: t.top + t.height / 2 + n.scrollTop * _,
                };
              })),
              (y = !1));
          };
        if ((b(u), v.length === 0)) return;
        let x = new AbortController(),
          S = e.pointerId,
          C = e.clientX,
          w = e.clientY,
          T = w,
          E = !1,
          D = r,
          O = !1,
          k = 0,
          A = 0,
          j = () => {
            (x.abort(),
              F.disconnect(),
              l.cancelAnimationFrame(k),
              (h.current = null),
              s.hasPointerCapture?.(S) && s.releasePointerCapture(S));
          },
          M = () => {
            (j(), E && m());
          },
          N = () => {
            let e = T + n.scrollTop * _,
              t = v.reduce((t, n) => (Math.abs(n.center - e) < Math.abs(t.center - e) ? n : t)),
              r = Math.max(i, Math.min(a, t.index));
            (!O || D !== r) && ((D = r), (O = !0), f(D, `pointer`, s));
          },
          P = (e) => {
            k = 0;
            let t = n.getBoundingClientRect();
            (y || u.top !== t.top || u.width !== t.width || u.height !== t.height) && b(t);
            let r = t.top + 32 * _,
              i = t.bottom - (32 + d) * _,
              a = 0;
            (T < r && (a = T - r), T > i && (a = T - i));
            let o = Math.max(-1, Math.min(1, a / (32 * _))) * Math.min(e - (A || e - 16), 32) * 0.5,
              s = n.scrollTop;
            (o !== 0 && (n.scrollTop += o),
              N(),
              n.scrollTop === s ? (A = 0) : ((A = e), (k = l.requestAnimationFrame(P))));
          },
          ee = () => {
            ((y = !0), E && k === 0 && (k = l.requestAnimationFrame(P)));
          },
          F = new ResizeObserver(ee);
        (F.observe(t),
          F.observe(n),
          l.addEventListener(`resize`, ee, { signal: x.signal }),
          (h.current = j),
          s.setPointerCapture?.(S),
          c.addEventListener(
            `pointermove`,
            (e) => {
              if (e.pointerId === S) {
                if (((T = e.clientY), !E)) {
                  if (Math.hypot(e.clientX - C, T - w) < 4) return;
                  ((E = !0), (g.current = !0));
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
                (E && ((T = e.clientY), b(n.getBoundingClientRect()), N()), j(), E && p(D, !0));
            },
            { capture: !0, signal: x.signal },
          ),
          s.addEventListener(`lostpointercapture`, M, { signal: x.signal }),
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
              e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), j(), m());
            },
            { capture: !0, signal: x.signal },
          ),
          l.addEventListener(`blur`, M, { signal: x.signal }));
      }),
      (t[17] = r),
      (t[18] = a),
      (t[19] = i),
      (t[20] = m),
      (t[21] = p),
      (t[22] = f),
      (t[23] = o),
      (t[24] = T))
    : (T = t[24]);
  let E = n === `from` && `border border-strong`,
    D;
  t[25] === E
    ? (D = t[26])
    : ((D = b(
        `relative size-4 rounded-full bg-surface-elevated-secondary shadow-sm transition-transform duration-basic ease-enter-snappy group-hover/endpoint:scale-110 group-focus-visible/endpoint:scale-110 group-data-[state=open]/endpoint:scale-110 group-active/endpoint:scale-95 motion-reduce:transition-none`,
        E,
      )),
      (t[25] = E),
      (t[26] = D));
  let O;
  t[27] === n
    ? (O = t[28])
    : ((O =
        n === `to`
          ? (0, Oi.jsx)(`span`, { className: `absolute inset-0 rounded-full bg-text-secondary` })
          : null),
      (t[27] = n),
      (t[28] = O));
  let k;
  t[29] !== D || t[30] !== O
    ? ((k = (0, Oi.jsx)(`span`, { "aria-hidden": !0, className: D, children: O })),
      (t[29] = D),
      (t[30] = O),
      (t[31] = k))
    : (k = t[31]);
  let A;
  t[32] !== s ||
  t[33] !== c ||
  t[34] !== k ||
  t[35] !== x ||
  t[36] !== S ||
  t[37] !== C ||
  t[38] !== w ||
  t[39] !== T
    ? ((A = (0, Oi.jsx)(V, {
        className: `group/endpoint touch-none hover:cursor-grab active:cursor-grabbing`,
        color: `ghostMuted`,
        size: `dragHandle`,
        radius: `full`,
        "data-state": x,
        "aria-label": s,
        "aria-pressed": c,
        onClick: S,
        onBlur: C,
        onKeyDown: w,
        onPointerDown: T,
        children: k,
      })),
      (t[32] = s),
      (t[33] = c),
      (t[34] = k),
      (t[35] = x),
      (t[36] = S),
      (t[37] = C),
      (t[38] = w),
      (t[39] = T),
      (t[40] = A))
    : (A = t[40]);
  let j;
  t[41] !== c || t[42] !== A
    ? ((j = (0, Oi.jsx)(xe, { tooltipContent: y, triggerPopupOpen: c, side: `right`, children: A })),
      (t[41] = c),
      (t[42] = A),
      (t[43] = j))
    : (j = t[43]);
  let M = u === `keyboard` ? l : null,
    N;
  t[44] === M
    ? (N = t[45])
    : ((N = (0, Oi.jsx)(`span`, {
        className: `sr-only`,
        role: `status`,
        "aria-atomic": `true`,
        children: M,
      })),
      (t[44] = M),
      (t[45] = N));
  let P;
  return (
    t[46] !== j || t[47] !== N
      ? ((P = (0, Oi.jsxs)(Oi.Fragment, { children: [j, N] })), (t[46] = j), (t[47] = N), (t[48] = P))
      : (P = t[48]),
    P
  );
}
var Ei, Di, Oi;
function ki() {
  return (ki = e(() => {
    ((Ei = k()), S(), (Di = d()), z(), H(), Te(), (Oi = v()));
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
      showHeader: r,
      selectedId: i,
      baselineId: a,
      showChanges: o,
      versions: c,
      names: l,
      currentSummary: u,
      renderControls: d,
      children: f,
      onLoadMore: p,
      isLoadingMore: m,
      isLoadMoreError: h,
      onSelect: g,
      onSelectEnd: _,
      onBaselineChange: v,
      onClose: y,
    } = e,
    b = r === void 0 || r,
    x = m !== void 0 && m,
    S = h !== void 0 && h,
    C = Ce(),
    w = (0, Li.useId)(),
    [E, D] = (0, Li.useState)(null),
    [O, k] = (0, Li.useState)(null),
    A = (0, Li.useRef)(null),
    j = (0, Li.useRef)(null),
    M = (0, Li.useRef)(null),
    F = (0, Li.useRef)(!1),
    I = (0, Li.useRef)(null),
    [te, L] = (0, Li.useState)(!0),
    R = fe(Jt),
    z = re(),
    B = (0, Li.useSyncExternalStore)(_e, Fi, Pi),
    H;
  t[0] !== R || t[1] !== B || t[2] !== z
    ? ((H = R > 0 ? Me(B, z) : 0), (t[0] = R), (t[1] = B), (t[2] = z), (t[3] = H))
    : (H = t[3]);
  let U = Math.max(R, H, Dt),
    W;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        F.current &&
          M.current != null &&
          (M.current.scrollTop = M.current.scrollHeight - M.current.clientHeight);
      }),
      (t[4] = W))
    : (W = t[4]);
  let ne;
  (t[5] === U ? (ne = t[6]) : ((ne = [U]), (t[5] = U), (t[6] = ne)), (0, Li.useLayoutEffect)(W, ne));
  let G;
  t[7] !== C || t[8] !== c ? ((G = Ai(c, C)), (t[7] = C), (t[8] = c), (t[9] = G)) : (G = t[9]);
  let K = G,
    ae = a === null,
    oe;
  if (t[10] !== a || t[11] !== c) {
    let e;
    (t[13] === a ? (e = t[14]) : ((e = (e) => e.checkpoint_id === a), (t[13] = a), (t[14] = e)),
      (oe = c.find(e)),
      (t[10] = a),
      (t[11] = c),
      (t[12] = oe));
  } else oe = t[12];
  let se = oe,
    ce;
  if (t[15] !== i || t[16] !== c) {
    let e;
    (t[18] === i ? (e = t[19]) : ((e = (e) => e.checkpoint_id === i), (t[18] = i), (t[19] = e)),
      (ce = c.find(e)),
      (t[15] = i),
      (t[16] = c),
      (t[17] = ce));
  } else ce = t[17];
  let le = ce,
    ue = o ? a : i,
    de = ue === null,
    pe;
  t[20] === c.length
    ? (pe = t[21])
    : ((pe = () => {
        let e = I.current;
        if (e == null || c.length <= e.count) return;
        I.current = null;
        let { activeElement: t } = e.trigger.ownerDocument;
        if (t !== e.trigger && (e.trigger.isConnected || t !== document.body)) return;
        let n =
          j.current?.querySelector(
            `[data-version-history-index="${e.count + 1}"] [role="button"]:not([aria-disabled="true"])`,
          ) ?? j.current?.querySelector(`[aria-current="true"][role="button"]:not([aria-disabled="true"])`);
        (n?.focus({ preventScroll: !0 }), n?.scrollIntoView({ block: `nearest` }));
      }),
      (t[20] = c.length),
      (t[21] = pe));
  let me;
  (t[22] === c ? (me = t[23]) : ((me = [c]), (t[22] = c), (t[23] = me)), (0, Li.useLayoutEffect)(pe, me));
  let he;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, X.jsx)(q, {
        id: `codex.page.versions.currentCaptureDetail`,
        defaultMessage: `Captured when history opened; may include unsaved changes and does not update with live edits`,
        description: `Tooltip and accessible description for the current Page version captured when history was opened; it may contain local edits that have not been saved`,
      })),
      (t[24] = he))
    : (he = t[24]);
  let ge = he,
    ve;
  t[25] !== E || t[26] !== w || t[27] !== O?.method
    ? ((ve = function (e, t) {
        let n = e === void 0 ? (E ?? void 0) : e;
        ((t === void 0 || t) &&
          (A.current?.focus({ preventScroll: !0 }),
          n != null &&
            j.current
              ?.querySelector(
                n === `from`
                  ? `[aria-describedby~="${w}-comparison-start"]`
                  : `[aria-describedby~="${w}-viewing"]`,
              )
              ?.scrollIntoView({ block: `nearest` })),
          L(O?.method !== `keyboard`),
          k(null),
          D(null));
      }),
      (t[25] = E),
      (t[26] = w),
      (t[27] = O?.method),
      (t[28] = ve))
    : (ve = t[28]);
  let ye = ve,
    be;
  t[29] !== a || t[30] !== E || t[31] !== w || t[32] !== v || t[33] !== g || t[34] !== _ || t[35] !== i
    ? ((be = function (e, t, n) {
        let r = n === void 0 ? (E ?? void 0) : n;
        if ((L(t), r != null)) {
          let t = r === `from` ? i : a,
            n = A.current;
          ((e?.checkpoint_id ?? null) === t &&
            (n = j.current?.querySelector(
              r === `from`
                ? `[aria-describedby~="${w}-viewing"]`
                : `[aria-describedby~="${w}-comparison-start"]`,
            )),
            n?.focus({ preventScroll: !0 }));
        }
        (r === `from` ? v(e?.checkpoint_id ?? null) : r === `to` ? _(e) : g(e), k(null), D(null));
      }),
      (t[29] = a),
      (t[30] = E),
      (t[31] = w),
      (t[32] = v),
      (t[33] = g),
      (t[34] = _),
      (t[35] = i),
      (t[36] = be))
    : (be = t[36]);
  let Se = be,
    we;
  t[37] !== se || t[38] !== E || t[39] !== ae || t[40] !== le || t[41] !== o
    ? ((we = function (e) {
        return o
          ? E === `to`
            ? e != null && (ae || (se != null && e.through_sequence < se.through_sequence))
            : le != null && (e == null || e.through_sequence > le.through_sequence)
          : !1;
      }),
      (t[37] = se),
      (t[38] = E),
      (t[39] = ae),
      (t[40] = le),
      (t[41] = o),
      (t[42] = we))
    : (we = t[42]);
  let Te = we,
    Ee;
  t[43] === C
    ? (Ee = t[44])
    : ((Ee = function (e, t) {
        return e == null
          ? C.formatMessage(
              {
                id: `codex.page.versions.selectCurrentComparisonNode`,
                defaultMessage: `{endpoint, select, from {Use current version for comparison} other {Select current version}}`,
                description: `Choose the frozen Current snapshot using its timeline node, either as the comparison version or the selected version`,
              },
              { endpoint: t },
            )
          : C.formatMessage(
              {
                id: `codex.page.versions.selectComparisonNode`,
                defaultMessage: `{endpoint, select, from {Use {date} for comparison} other {Select version from {date}}}`,
                description: `Accessible label for a timeline node when moving a comparison endpoint; date is the full checkpoint date and time`,
              },
              { endpoint: t, date: C.formatDate(e.created_at, { dateStyle: `full`, timeStyle: `medium` }) },
            );
      }),
      (t[43] = C),
      (t[44] = Ee));
  let De = Ee,
    Oe;
  t[45] !== E || t[46] !== Te || t[47] !== De || t[48] !== Se
    ? ((Oe = function (e) {
        if (E == null || Te(e)) return null;
        let t = De(e, E);
        return (0, X.jsx)(xe, {
          tooltipContent: t,
          children: (0, X.jsx)(V, {
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
      (t[45] = E),
      (t[46] = Te),
      (t[47] = De),
      (t[48] = Se),
      (t[49] = Oe))
    : (Oe = t[49]);
  let ke = Oe,
    Ae;
  t[50] === c
    ? (Ae = t[51])
    : ((Ae = function (e) {
        let t = j.current?.querySelector(`[data-version-history-index="${e}"]`);
        if (t != null) return e === 0 ? null : c.find((e) => e.checkpoint_id === t.dataset.versionHistoryKey);
      }),
      (t[50] = c),
      (t[51] = Ae));
  let je = Ae,
    Ne;
  t[52] !== a ||
  t[53] !== ye ||
  t[54] !== E ||
  t[55] !== C ||
  t[56] !== De ||
  t[57] !== O ||
  t[58] !== Se ||
  t[59] !== i ||
  t[60] !== je ||
  t[61] !== c
    ? ((Ne = function (e, t) {
        let n = E != null && E !== e,
          r = e === `from` ? a : i,
          o = r == null ? null : c.find((e) => e.checkpoint_id === r),
          s = e === `from` ? i : a,
          l = s == null ? 0 : c.findIndex((e) => e.checkpoint_id === s) + 1,
          u =
            e === `from`
              ? C.formatMessage({
                  id: `codex.page.versions.adjustComparisonStart`,
                  defaultMessage: `Adjust comparison start`,
                  description: `Accessible label and tooltip for the outlined comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the earlier version`,
                })
              : C.formatMessage({
                  id: `codex.page.versions.adjustComparisonEnd`,
                  defaultMessage: `Adjust comparison end`,
                  description: `Accessible label and tooltip for the filled comparison timeline handle; click then choose a version, drag, or use arrow keys and Enter to change the later displayed version`,
                }),
          d = O?.endpoint === e ? O : null,
          f = null;
        return (
          d != null &&
            (f =
              d.version == null
                ? C.formatMessage({
                    id: `codex.page.versions.current`,
                    defaultMessage: `Current version`,
                    description: `The current live Page document captured when its version preview was opened`,
                  })
                : C.formatDate(d.version.created_at, {
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `numeric`,
                    second: `numeric`,
                  })),
          (0, X.jsx)(Ti, {
            endpoint: e,
            index: t,
            minIndex: e === `from` ? l : 0,
            maxIndex: e === `to` ? l : c.length,
            timeline: j,
            label: n ? De(o ?? null, E) : u,
            pressed: E === e,
            previewLabel: f,
            previewMethod: d?.method ?? null,
            onChoose: (t, r) => {
              n ? Se(o ?? null, r) : ((A.current = t), k(null), D(E === e ? null : e));
            },
            onPreview: (t, n, r) => {
              let i = je(t);
              i !== void 0 &&
                ((A.current = r),
                L(!1),
                D(e),
                k((t) =>
                  t?.endpoint === e && t.version === i && t.method === n
                    ? t
                    : { endpoint: e, version: i, method: n },
                ));
            },
            onCommit: (t, n) => {
              let r = je(t);
              r !== void 0 && Se(r, n, e);
            },
            onCancel: (t) => ye(e, t),
          })
        );
      }),
      (t[52] = a),
      (t[53] = ye),
      (t[54] = E),
      (t[55] = C),
      (t[56] = De),
      (t[57] = O),
      (t[58] = Se),
      (t[59] = i),
      (t[60] = je),
      (t[61] = c),
      (t[62] = Ne))
    : (Ne = t[62]);
  let Pe = Ne,
    Fe;
  t[63] === U ? (Fe = t[64]) : ((Fe = { paddingBottom: U }), (t[63] = U), (t[64] = Fe));
  let Ie;
  t[65] !== ye || t[66] !== E || t[67] !== y || t[68] !== O
    ? ((Ie = (e) => {
        e.key === `Escape` &&
          !e.defaultPrevented &&
          (e.stopPropagation(), E != null || O != null ? ye(O?.endpoint ?? E ?? void 0) : y());
      }),
      (t[65] = ye),
      (t[66] = E),
      (t[67] = y),
      (t[68] = O),
      (t[69] = Ie))
    : (Ie = t[69]);
  let Le;
  t[70] !== w || t[71] !== C || t[72] !== y || t[73] !== b
    ? ((Le = b
        ? (0, X.jsx)(T, {
            density: `surface`,
            leading: [
              {
                id: `title`,
                content: (0, X.jsx)(`h2`, {
                  id: `${w}-title`,
                  className: `truncate text-sm font-medium select-none`,
                  children: (0, X.jsx)(q, {
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
                content: (0, X.jsx)(ee, {
                  "aria-label": C.formatMessage({
                    id: `codex.page.versions.closeHistory`,
                    defaultMessage: `Close version history`,
                    description: `Close version history and show the document's current contents`,
                  }),
                  uniform: !0,
                  onClick: y,
                  children: (0, X.jsx)(N, { icon: { 16: P, 20: s } }),
                }),
              },
            ],
          })
        : (0, X.jsx)(`h2`, {
            id: `${w}-title`,
            className: `sr-only`,
            children: (0, X.jsx)(q, {
              id: `codex.page.versions.title`,
              defaultMessage: `Version history`,
              description: `Title of the Page side panel listing saved checkpoints`,
            }),
          })),
      (t[70] = w),
      (t[71] = C),
      (t[72] = y),
      (t[73] = b),
      (t[74] = Le))
    : (Le = t[74]);
  let Re = `${w}-read-only`,
    ze;
  t[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, X.jsx)(q, {
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
  let Ve = `${w}-comparison-start`,
    He;
  t[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, X.jsx)(q, {
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
  let We = `${w}-viewing`,
    Ge;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = (0, X.jsx)(q, {
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
        (L(e.detail > 0), k(null), D(null));
      }),
      (t[84] = qe))
    : (qe = t[84]);
  let Je;
  t[85] !== ye || t[86] !== E || t[87] !== O
    ? ((Je =
        E != null || O != null
          ? (0, X.jsxs)(`div`, {
              className: `flex min-h-8 items-center justify-between gap-2`,
              children: [
                (0, X.jsxs)(`span`, {
                  className: `text-xs text-secondary`,
                  role: `status`,
                  children: [
                    O?.method === `keyboard`
                      ? (0, X.jsx)(q, {
                          id: `codex.page.versions.confirmKeyboardRange`,
                          defaultMessage: `Arrow keys to adjust · Enter to compare`,
                          description: `Instruction while a timeline endpoint is being adjusted with the keyboard; Enter confirms and loads the comparison`,
                        })
                      : null,
                    O?.method === `pointer`
                      ? (0, X.jsx)(q, {
                          id: `codex.page.versions.confirmDraggedRange`,
                          defaultMessage: `Release to compare`,
                          description: `Instruction while dragging a comparison endpoint along the Page revision timeline`,
                        })
                      : null,
                    O == null && E === `from`
                      ? (0, X.jsx)(q, {
                          id: `codex.page.versions.chooseComparisonRow`,
                          defaultMessage: `Choose a comparison version`,
                          description: `Instruction while choosing a new comparison version directly in the Page history timeline`,
                        })
                      : null,
                    O == null && E === `to`
                      ? (0, X.jsx)(q, {
                          id: `codex.page.versions.chooseSelectedVersion`,
                          defaultMessage: `Choose the selected version`,
                          description: `Instruction while choosing which Page version to show directly in the history timeline`,
                        })
                      : null,
                  ],
                }),
                O?.method === `pointer`
                  ? (0, X.jsx)(`span`, {
                      className: `text-xs text-secondary select-none`,
                      children: (0, X.jsx)(q, {
                        id: `codex.page.versions.cancelDraggedRange`,
                        defaultMessage: `Esc to cancel`,
                        description: `Keyboard hint while dragging a Page comparison timeline endpoint: press Escape to discard the drag and keep the previous comparison`,
                      }),
                    })
                  : (0, X.jsx)(V, {
                      color: `ghostSecondary`,
                      size: `compact`,
                      onClick: () => ye(),
                      children: (0, X.jsx)(q, {
                        id: `codex.page.versions.cancelEndpointSelection`,
                        defaultMessage: `Cancel`,
                        description: `Cancel changing a Page comparison timeline endpoint without changing either selected version`,
                      }),
                    }),
              ],
            })
          : void 0),
      (t[85] = ye),
      (t[86] = E),
      (t[87] = O),
      (t[88] = Je))
    : (Je = t[88]);
  let Ye;
  t[89] !== d || t[90] !== Je ? ((Ye = d(Je)), (t[89] = d), (t[90] = Je), (t[91] = Ye)) : (Ye = t[91]);
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
  let Ze = `${w}-title`,
    Qe = `${w}-read-only`,
    $e;
  t[94] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = (e) => {
        let { scrollTop: t, scrollHeight: n, clientHeight: r } = e.currentTarget;
        F.current = n - r - t <= 1;
      }),
      (t[94] = $e))
    : ($e = t[94]);
  let et;
  t[95] !== Ze || t[96] !== Qe
    ? ((et = {
        ref: M,
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
  let tt = `${w}-timeline`,
    nt;
  t[98] === C
    ? (nt = t[99])
    : ((nt = C.formatMessage({
        id: `codex.page.versions.listLabel`,
        defaultMessage: `Page versions`,
        description: `Accessible label for the current Page and its saved checkpoints grouped by date`,
      })),
      (t[98] = C),
      (t[99] = nt));
  let rt = O?.endpoint === `from` ? (O.version?.checkpoint_id ?? null) : a,
    it = O?.endpoint === `to` ? (O.version?.checkpoint_id ?? null) : i,
    at = O?.endpoint ?? (a === i ? `from` : void 0),
    ot,
    st;
  t[100] === Pe
    ? ((ot = t[101]), (st = t[102]))
    : ((ot = (e) => Pe(`from`, e)), (st = (e) => Pe(`to`, e)), (t[100] = Pe), (t[101] = ot), (t[102] = st));
  let ct;
  t[103] !== te ||
  t[104] !== ke ||
  t[105] !== o ||
  t[106] !== rt ||
  t[107] !== it ||
  t[108] !== at ||
  t[109] !== ot ||
  t[110] !== st
    ? ((ct = {
        showChanges: o,
        animate: te,
        fromKey: rt,
        toKey: it,
        activeEndpoint: at,
        fromControl: ot,
        toControl: st,
        renderNodeControl: ke,
      }),
      (t[103] = te),
      (t[104] = ke),
      (t[105] = o),
      (t[106] = rt),
      (t[107] = it),
      (t[108] = at),
      (t[109] = ot),
      (t[110] = st),
      (t[111] = ct))
    : (ct = t[111]);
  let lt;
  t[112] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, X.jsx)(q, {
        id: `codex.page.versions.currentCaptureTooltip`,
        defaultMessage: `Captured on opening. May include unsaved edits`,
        description: `Brief tooltip for the frozen current Page snapshot, captured when version history opened`,
      })),
      (t[112] = lt))
    : (lt = t[112]);
  let ut;
  t[113] === C
    ? (ut = t[114])
    : ((ut = C.formatMessage({
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (t[113] = C),
      (t[114] = ut));
  let dt = `${w}-current ${w}-current-editors${o && ae ? ` ${w}-comparison-start` : ``}${o && i == null ? ` ${w}-viewing` : ``}`,
    ft = Te(null),
    pt;
  t[115] === Se ? (pt = t[116]) : ((pt = (e) => Se(null, e.detail > 0)), (t[115] = Se), (t[116] = pt));
  let mt = de ? `font-medium` : void 0,
    ht;
  t[117] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, X.jsx)(q, {
        id: `codex.page.versions.current`,
        defaultMessage: `Current version`,
        description: `The current live Page document captured when its version preview was opened`,
      })),
      (t[117] = ht))
    : (ht = t[117]);
  let gt;
  t[118] === mt
    ? (gt = t[119])
    : ((gt = (0, X.jsx)(`span`, { className: mt, children: ht })), (t[118] = mt), (t[119] = gt));
  let _t = `${w}-current-editors`,
    vt;
  t[120] !== u || t[121] !== l
    ? ((vt = (0, X.jsx)(En, { compact: !0, current: !0, summary: u, names: l })),
      (t[120] = u),
      (t[121] = l),
      (t[122] = vt))
    : (vt = t[122]);
  let yt;
  t[123] !== _t || t[124] !== vt
    ? ((yt = (0, X.jsx)(`span`, { id: _t, className: `max-w-40 min-w-0`, children: vt })),
      (t[123] = _t),
      (t[124] = vt),
      (t[125] = yt))
    : (yt = t[125]);
  let bt;
  t[126] !== de ||
  t[127] !== ut ||
  t[128] !== dt ||
  t[129] !== ft ||
  t[130] !== pt ||
  t[131] !== gt ||
  t[132] !== yt
    ? ((bt = (0, X.jsx)(xe, {
        tooltipContent: lt,
        side: `bottom`,
        align: `start`,
        children: (0, X.jsx)(It, {
          ariaCurrent: de,
          ariaLabel: ut,
          ariaDescribedBy: dt,
          compactSecondLine: !0,
          density: `row`,
          isSelected: de,
          isDisabled: ft,
          onSelect: pt,
          title: gt,
          rightText: yt,
        }),
      })),
      (t[126] = de),
      (t[127] = ut),
      (t[128] = dt),
      (t[129] = ft),
      (t[130] = pt),
      (t[131] = gt),
      (t[132] = yt),
      (t[133] = bt))
    : (bt = t[133]);
  let xt = `${w}-current`,
    St;
  t[134] === xt
    ? (St = t[135])
    : ((St = (0, X.jsx)(`span`, { id: xt, className: `sr-only`, children: ge })),
      (t[134] = xt),
      (t[135] = St));
  let Ct;
  t[136] !== bt || t[137] !== St
    ? ((Ct = (0, X.jsxs)(X.Fragment, { children: [bt, St] })), (t[136] = bt), (t[137] = St), (t[138] = Ct))
    : (Ct = t[138]);
  let wt;
  t[139] !== a ||
  t[140] !== ue ||
  t[141] !== w ||
  t[142] !== C ||
  t[143] !== Te ||
  t[144] !== l ||
  t[145] !== Se ||
  t[146] !== i ||
  t[147] !== o ||
  t[148] !== K
    ? ((wt = (e) =>
        (0, X.jsx)(It, {
          ariaCurrent: ue === e.checkpoint_id,
          ariaLabel: C.formatDate(e.created_at, { dateStyle: `full`, timeStyle: `medium` }),
          ariaDescribedBy: `${w}-${e.checkpoint_id}${o && e.checkpoint_id === a ? ` ${w}-comparison-start` : ``}${o && e.checkpoint_id === i ? ` ${w}-viewing` : ``}`,
          compactSecondLine: !0,
          density: `row`,
          isSelected: ue === e.checkpoint_id,
          isDisabled: Te(e),
          onSelect: (t) => Se(e, t.detail > 0),
          title: (0, X.jsx)(`span`, {
            className: ue === e.checkpoint_id ? `font-medium` : void 0,
            children: K.get(e.checkpoint_id),
          }),
          rightText: (0, X.jsx)(`span`, {
            id: `${w}-${e.checkpoint_id}`,
            className: `max-w-40 min-w-0`,
            children: (0, X.jsx)(En, { compact: !0, summary: e, names: l }),
          }),
        })),
      (t[139] = a),
      (t[140] = ue),
      (t[141] = w),
      (t[142] = C),
      (t[143] = Te),
      (t[144] = l),
      (t[145] = Se),
      (t[146] = i),
      (t[147] = o),
      (t[148] = K),
      (t[149] = wt))
    : (wt = t[149]);
  let Tt;
  t[150] !== w || t[151] !== S || t[152] !== x || t[153] !== p || t[154] !== c.length
    ? ((Tt =
        p == null
          ? null
          : (0, X.jsxs)(V, {
              className: `w-full shrink-0 justify-center`,
              color: `ghost`,
              size: `compact`,
              "aria-labelledby": `${w}-load-older`,
              "aria-busy": x,
              "aria-disabled": x,
              onBlur: () => {
                I.current = null;
              },
              onClick: (e) => {
                x || ((I.current = { trigger: e.currentTarget, count: c.length }), p());
              },
              children: [
                x ? (0, X.jsx)(n, { className: `icon-xxs` }) : null,
                (0, X.jsx)(`span`, {
                  id: `${w}-load-older`,
                  role: `status`,
                  children: S
                    ? (0, X.jsx)(q, {
                        id: `codex.page.versions.retryOlder`,
                        defaultMessage: `Retry loading older versions`,
                        description: `Retry action after loading older Page versions failed`,
                      })
                    : (0, X.jsx)(q, {
                        id: `codex.page.versions.loadOlder`,
                        defaultMessage: `Load older versions`,
                        description: `Load older checkpoints in the Page version history panel`,
                      }),
                }),
              ],
            })),
      (t[150] = w),
      (t[151] = S),
      (t[152] = x),
      (t[153] = p),
      (t[154] = c.length),
      (t[155] = Tt))
    : (Tt = t[155]);
  let Et;
  t[156] !== nt || t[157] !== ct || t[158] !== Ct || t[159] !== wt || t[160] !== Tt || t[161] !== c
    ? ((Et = (0, X.jsx)(Tn, {
        label: nt,
        items: c,
        getDate: Ni,
        getKey: Mi,
        comparison: ct,
        current: Ct,
        renderItem: wt,
        continuation: Tt,
      })),
      (t[156] = nt),
      (t[157] = ct),
      (t[158] = Ct),
      (t[159] = wt),
      (t[160] = Tt),
      (t[161] = c),
      (t[162] = Et))
    : (Et = t[162]);
  let Ot;
  t[163] !== f || t[164] !== tt || t[165] !== Et
    ? ((Ot = (0, X.jsxs)(`div`, { id: tt, ref: j, children: [Et, f] })),
      (t[163] = f),
      (t[164] = tt),
      (t[165] = Et),
      (t[166] = Ot))
    : (Ot = t[166]);
  let kt;
  t[167] !== et || t[168] !== Ot
    ? ((kt = (0, X.jsx)(ie, {
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
  return ne().reduce((e, t) => Math.max(e, window.innerHeight - t.top), 0);
}
var Ii, Li, X;
function Ri() {
  return (Ri = e(() => {
    ((Ii = k()),
      U(),
      (Li = d()),
      z(),
      ke(),
      De(),
      H(),
      F(),
      ce(),
      Tt(),
      ae(),
      Ae(),
      Te(),
      Ue(),
      B(),
      Cn(),
      wn(),
      ki(),
      (X = v()));
  }))();
}
function zi(e) {
  let t = (0, Vi.c)(59),
    { pageId: n, streamKind: i, version: a, ready: o, signal: s, onRestore: c, onRestored: l } = e,
    u = r(j),
    d = Ce(),
    f;
  t[0] !== d || t[1] !== a.created_at
    ? ((f = d.formatMessage(
        {
          id: `codex.page.versions.restore.target`,
          defaultMessage: `Restore version from {date}`,
          description: `Accessible label and tooltip identifying the exact saved Page version that the Restore button will restore`,
        },
        { date: d.formatDate(a.created_at, { dateStyle: `medium`, timeStyle: `medium` }) },
      )),
      (t[0] = d),
      (t[1] = a.created_at),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    [m, g] = (0, Hi.useState)(!1),
    [v, b] = (0, Hi.useState)(!1),
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
  t[8] !== l ||
  t[9] !== n ||
  t[10] !== u ||
  t[11] !== s ||
  t[12] !== i ||
  t[13] !== a.checkpoint_id
    ? ((k = async () => {
        if (!C || w.current != null || s.aborted) return;
        let e = new AbortController();
        w.current = e;
        let t = AbortSignal.any([s, e.signal]),
          r = Le(u, `version_restore`, { stream_kind: i }, t);
        (b(!0), S(null));
        try {
          let e = await Sn({ pageId: n, checkpointId: a.checkpoint_id, streamKind: i, signal: t });
          t.throwIfAborted();
          let o = await c(e, t);
          (t.throwIfAborted(), r(o), o === `restored` ? l() : S(o));
        } catch {
          (r(t.aborted ? `canceled` : `failure`), t.aborted || S(`unavailable`));
        }
        w.current === e && ((w.current = null), b(!1));
      }),
      (t[6] = C),
      (t[7] = c),
      (t[8] = l),
      (t[9] = n),
      (t[10] = u),
      (t[11] = s),
      (t[12] = i),
      (t[13] = a.checkpoint_id),
      (t[14] = k))
    : (k = t[14]);
  let A = k,
    N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = { onEscapeKeyDown: Bi }), (t[15] = N))
    : (N = t[15]);
  let P = !o,
    ee;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Ui.jsx)(q, {
        id: `codex.page.versions.restore.open`,
        defaultMessage: `Restore`,
        description: `Open confirmation to restore the saved Page version beside this button`,
      })),
      (t[16] = ee))
    : (ee = t[16]);
  let F;
  t[17] !== p || t[18] !== P
    ? ((F = (0, Ui.jsx)(V, {
        color: `ghostSecondary`,
        size: `actionSm`,
        radius: `full`,
        disabled: P,
        "aria-label": p,
        children: ee,
      })),
      (t[17] = p),
      (t[18] = P),
      (t[19] = F))
    : (F = t[19]);
  let I;
  t[20] !== m || t[21] !== p || t[22] !== F
    ? ((I = (0, Ui.jsx)(xe, { cloneCustomTrigger: !0, triggerPopupOpen: m, tooltipContent: p, children: F })),
      (t[20] = m),
      (t[21] = p),
      (t[22] = F),
      (t[23] = I))
    : (I = t[23]);
  let L;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        e ? (S(null), g(!0)) : O();
      }),
      (t[24] = L))
    : (L = t[24]);
  let R;
  t[25] === A
    ? (R = t[26])
    : ((R = (e) => {
        (e.preventDefault(), A());
      }),
      (t[25] = A),
      (t[26] = R));
  let z;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Ui.jsx)(we, {
        className: `contents`,
        children: (0, Ui.jsx)(q, {
          id: `codex.page.versions.restore.title`,
          defaultMessage: `Restore this version?`,
          description: `Confirmation title before restoring a historical Page version`,
        }),
      })),
      (t[27] = z))
    : (z = t[27]);
  let B;
  t[28] !== d || t[29] !== a.created_at
    ? ((B = d.formatDate(a.created_at, { dateStyle: `long`, timeStyle: `medium` })),
      (t[28] = d),
      (t[29] = a.created_at),
      (t[30] = B))
    : (B = t[30]);
  let H;
  t[31] === B
    ? (H = t[32])
    : ((H = (0, Ui.jsx)(M, {
        subtitleTone: `secondary`,
        title: z,
        subtitle: (0, Ui.jsx)(_, {
          className: `contents`,
          children: (0, Ui.jsx)(q, {
            id: `codex.page.versions.restore.description`,
            defaultMessage: `Replace the current page content with the version from {date}. Current comments will be kept.`,
            description: `Confirmation explaining which historical Page version will replace the current content, while preserving current comments`,
            values: { date: B },
          }),
        }),
      })),
      (t[31] = B),
      (t[32] = H));
  let U;
  t[33] === x
    ? (U = t[34])
    : ((U =
        x == null
          ? null
          : (0, Ui.jsxs)(`p`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children: [
                x === `unsupported`
                  ? (0, Ui.jsx)(q, {
                      id: `codex.page.versions.restore.unsupported`,
                      defaultMessage: `This version includes changes that can’t be restored. Choose another version`,
                      description: `Error when a historical Page version cannot be restored because its changes conflict with protected document content or current editing capabilities`,
                    })
                  : null,
                x === `limit_exceeded`
                  ? (0, Ui.jsx)(q, {
                      id: `codex.page.versions.restore.limitExceeded`,
                      defaultMessage: `This version is too large to restore in one edit. Choose another version`,
                      description: `Error when restoring a historical Page version would exceed the document update size limit`,
                    })
                  : null,
                x === `unavailable`
                  ? (0, Ui.jsx)(q, {
                      id: `codex.page.versions.restore.error`,
                      defaultMessage: `Could not restore this version. Check your connection and editing access, then try again`,
                      description: `Error when downloading or applying a historical Page version fails; the dialog remains open for retry`,
                    })
                  : null,
              ],
            })),
      (t[33] = x),
      (t[34] = U));
  let W;
  t[35] === v
    ? (W = t[36])
    : ((W = v
        ? (0, Ui.jsx)(q, {
            id: `codex.page.versions.restore.pending`,
            defaultMessage: `Restoring version…`,
            description: `Status while preparing and applying the selected historical Page version`,
          })
        : null),
      (t[35] = v),
      (t[36] = W));
  let ne;
  t[37] === W
    ? (ne = t[38])
    : ((ne = (0, Ui.jsx)(`p`, {
        role: `status`,
        "aria-atomic": !0,
        className: `text-sm text-secondary`,
        children: W,
      })),
      (t[37] = W),
      (t[38] = ne));
  let re;
  t[39] !== H || t[40] !== U || t[41] !== ne
    ? ((re = (0, Ui.jsxs)(Ne, { children: [H, U, ne] })),
      (t[39] = H),
      (t[40] = U),
      (t[41] = ne),
      (t[42] = re))
    : (re = t[42]);
  let G;
  t[43] === C
    ? (G = t[44])
    : ((G = C
        ? (0, Ui.jsx)(V, {
            color: `secondary`,
            type: `button`,
            onClick: O,
            children: (0, Ui.jsx)(q, {
              id: `codex.page.versions.restore.cancel`,
              defaultMessage: `Cancel`,
              description: `Cancel restoring a historical Page version`,
            }),
          })
        : null),
      (t[43] = C),
      (t[44] = G));
  let K;
  t[45] !== C || t[46] !== v
    ? ((K = C
        ? (0, Ui.jsx)(V, {
            color: `primary`,
            type: `submit`,
            loading: v,
            children: (0, Ui.jsx)(q, {
              id: `codex.page.versions.restore.confirm`,
              defaultMessage: `Restore version`,
              description: `Confirm replacing the current Page content with the selected historical version`,
            }),
          })
        : (0, Ui.jsx)(V, {
            color: `primary`,
            type: `button`,
            onClick: O,
            children: (0, Ui.jsx)(q, {
              id: `codex.page.versions.restore.chooseAnother`,
              defaultMessage: `Choose another version`,
              description: `Return to Page version history after the selected version cannot be restored`,
            }),
          })),
      (t[45] = C),
      (t[46] = v),
      (t[47] = K))
    : (K = t[47]);
  let ie;
  t[48] !== G || t[49] !== K
    ? ((ie = (0, Ui.jsx)(Ne, { children: (0, Ui.jsxs)(y, { children: [G, K] }) })),
      (t[48] = G),
      (t[49] = K),
      (t[50] = ie))
    : (ie = t[50]);
  let ae;
  t[51] !== R || t[52] !== re || t[53] !== ie
    ? ((ae = (0, Ui.jsxs)(h, { as: `form`, onSubmit: R, children: [re, ie] })),
      (t[51] = R),
      (t[52] = re),
      (t[53] = ie),
      (t[54] = ae))
    : (ae = t[54]);
  let oe;
  return (
    t[55] !== m || t[56] !== I || t[57] !== ae
      ? ((oe = (0, Ui.jsx)(te, {
          open: m,
          size: `compact`,
          contentProps: N,
          triggerContent: I,
          onOpenChange: L,
          children: ae,
        })),
        (t[55] = m),
        (t[56] = I),
        (t[57] = ae),
        (t[58] = oe))
      : (oe = t[58]),
    oe
  );
}
function Bi(e) {
  return e.stopPropagation();
}
var Vi, Hi, Ui;
function Wi() {
  return (Wi = e(() => {
    ((Vi = k()), U(), (Hi = d()), z(), rt(), H(), g(), m(), Te(), i(), xn(), (Ui = v()));
  }))();
}
function Gi(e) {
  let t = new Wt();
  try {
    if ((ht(t), He(t, e), Vt(t))) return null;
    Ye(t);
    let n = gt(t);
    return { title: n.title.toJSON(), blocks: xt(n).map((e) => ({ id: e.id, unit: Et(e) })) };
  } catch {
    return null;
  } finally {
    t.destroy();
  }
}
function Ki() {
  return (Ki = e(() => {
    (Xe(), ft(), Re(), tt(), Ut());
  }))();
}
function qi({ scope: e, accountId: t, userId: n, pageId: r, streamKind: i }) {
  let a = new vt({ max: Xi, maxSize: Zi, sizeCalculation: Yi }),
    o = new Map(),
    s = new Set(),
    c = new Set(),
    l = new AbortController(),
    u,
    d = !1,
    f = !1,
    p = 0;
  function m() {
    if (u != null || d) return;
    let a = ct(e, t, n),
      o = pt((n, a, o, s, c) => {
        (n.chain.get(j.id) ?? n.node) === (e.chain.get(j.id) ?? e.node) &&
          a === t &&
          o === r &&
          (c?.streamKind ?? `content`) === i &&
          g();
      });
    ((u = () => {
      (a.stop(), o(), a.signal.removeEventListener(`abort`, g));
    }),
      a.signal.addEventListener(`abort`, g, { once: !0 }),
      a.signal.aborted && g());
  }
  function h() {
    ((d = !0), l.abort(), u?.(), (u = void 0), a.clear());
    for (let e of o.values()) _(e);
  }
  function g() {
    if (!d) {
      ((f = !0), h());
      for (let e of c) e();
    }
  }
  function _(e) {
    e.controller.abort();
    for (let t of e.subscribers) t.reject(Ji(e.controller.signal));
    o.delete(e.checkpointId);
  }
  function v(e, t) {
    let n = {
      checkpointId: e,
      controller: new AbortController(),
      subscribers: new Set(),
      prefetch: t,
      started: !1,
    };
    return (o.set(e, n), n);
  }
  function y() {
    for (; !d && s.size < Qi;) {
      let e = [...o.values()].filter((e) => !e.started),
        t =
          e.find((e) => !e.prefetch) ?? ([...s].some((e) => e.prefetch) ? void 0 : e.find((e) => e.prefetch));
      if (t == null) return;
      ((t.started = !0), s.add(t), b(t));
    }
  }
  async function b(t) {
    let n = Le(
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
        !t.controller.signal.aborted && e instanceof me && (e.status === 401 || e.status === 403) && g());
      let r = e instanceof Error ? e : Error(`The Page version could not be loaded`, { cause: e });
      for (let e of t.subscribers) e.reject(r);
    } finally {
      (o.get(t.checkpointId) === t && o.delete(t.checkpointId), s.delete(t), y());
    }
  }
  return {
    signal: l.signal,
    retain() {
      return (
        (p += 1),
        m(),
        () => {
          (--p,
            queueMicrotask(() => {
              p === 0 && h();
            }));
        }
      );
    },
    subscribeInvalidation: (e) => (
      c.add(e),
      m(),
      () => {
        c.delete(e);
      }
    ),
    getInvalidated: () => f,
    peek(e) {
      return a.get(e);
    },
    read(e, t) {
      if ((m(), d || t.aborted)) return Promise.reject(Ji(t));
      let n = a.get(e);
      if (n != null) return Promise.resolve(n);
      let r = o.get(e);
      if (
        (r == null || (!r.started && r.prefetch)) &&
        [...o.values()].filter((e) => !e.started && !e.prefetch).length >= $i
      )
        return Promise.reject(new DOMException(`Page version request superseded`, `AbortError`));
      let i = r ?? v(e, !1);
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
              (r.reject(Ji(t)), i.subscribers.size === 0 && !i.prefetch && _(i));
            };
          (i.subscribers.add(r), t.addEventListener(`abort`, o, { once: !0 }), y());
        })
      );
    },
    prefetch(e) {
      if ((m(), d)) return;
      let t = new Set(e.slice(0, ea));
      for (let e of o.values()) e.prefetch && !t.has(e.checkpointId) && _(e);
      for (let e of t) !a.has(e) && !o.has(e) && v(e, !0);
      y();
    },
    dispose: h,
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
    (lt(), rt(), Qe(), yt(), i(), A(), xn(), Ki(), (Xi = 12), (Zi = 8388608), (Qi = 2), ($i = 2), (ea = 2));
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
    o = Ce(),
    s = bt(),
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
    ? ((p = (0, oa.jsx)(q, {
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
      ? ((h = (0, oa.jsx)(xe, { tooltipContent: l, triggerPopupOpen: a, children: m })),
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
    ((aa = k()), z(), Te(), kt(), (oa = v()));
  }))();
}
function ca(e) {
  let t = (0, da.c)(96),
    {
      versions: n,
      selectedId: r,
      endpoint: i,
      allowCurrent: a,
      onSelect: s,
      onLoadMore: c,
      isLoadingMore: l,
      isLoadMoreError: u,
    } = e,
    d = l !== void 0 && l,
    f = u !== void 0 && u,
    p = Ce(),
    m = bt(),
    [h, g] = (0, pa.useState)(!1),
    [_, v] = (0, pa.useState)(``),
    y = (0, pa.useId)(),
    b = r == null && r !== void 0,
    x,
    S,
    C,
    w,
    T,
    E,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    te;
  if (
    t[0] !== a ||
    t[1] !== i ||
    t[2] !== p ||
    t[3] !== b ||
    t[4] !== m ||
    t[5] !== s ||
    t[6] !== h ||
    t[7] !== _ ||
    t[8] !== r ||
    t[9] !== y ||
    t[10] !== n
  ) {
    let e;
    t[27] === r ? (e = t[28]) : ((e = (e) => e.checkpoint_id === r), (t[27] = r), (t[28] = e));
    let c = n.find(e),
      l;
    t[29] !== p || t[30] !== m
      ? ((l = p.formatDate(m, { year: `numeric` })), (t[29] = p), (t[30] = m), (t[31] = l))
      : (l = t[31]);
    let u = l,
      d,
      f;
    t[32] !== p || t[33] !== h || t[34] !== n || t[35] !== u
      ? ((f = Ai(n, p)),
        (d = h
          ? n.map((e) => {
              let t = p.formatDate(e.created_at, {
                  month: `long`,
                  day: `numeric`,
                  year: p.formatDate(e.created_at, { year: `numeric` }) === u ? void 0 : `numeric`,
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
        (t[35] = u),
        (t[36] = d),
        (t[37] = f))
      : ((d = t[36]), (f = t[37]));
    let L = d,
      R;
    t[38] !== L || t[39] !== f
      ? ((R = { timeLabels: f, options: L }), (t[38] = L), (t[39] = f), (t[40] = R))
      : (R = t[40]);
    let { timeLabels: z, options: B } = R;
    ((T = _.trim().replace(/\s+/g, ` `).toLocaleLowerCase(p.locale)),
      (w = (0, fa.default)(
        B.filter((e) => e.searchable.includes(T)),
        ua,
      )));
    let V;
    t[41] !== i || t[42] !== p
      ? ((V =
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
        (t[43] = V))
      : (V = t[43]);
    let H = V;
    ((C = Zt),
      (F = h),
      t[44] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((I = (e) => {
            (v(``), g(e));
          }),
          (t[44] = I))
        : (I = t[44]),
      (te = `end`),
      (E = `panel`),
      (O = `list`),
      (k = la));
    let U;
    t[45] === r
      ? (U = t[46])
      : ((U =
          r === void 0
            ? (0, Z.jsx)(q, {
                id: `codex.page.versions.toolbar.chooseVersion`,
                defaultMessage: `Choose version`,
                description: `Placeholder for a Page comparison endpoint before a version is selected`,
              })
            : null),
        (t[45] = r),
        (t[46] = U));
    let W =
        c == null ? null : (0, Z.jsx)(ia, { version: c, timeLabel: z.get(c.checkpoint_id), pickerOpen: h }),
      ne;
    t[47] === b
      ? (ne = t[48])
      : ((ne = b
          ? (0, Z.jsx)(q, {
              id: `codex.page.versions.current`,
              defaultMessage: `Current version`,
              description: `The current live Page document captured when its version preview was opened`,
            })
          : null),
        (t[47] = b),
        (t[48] = ne));
    let re;
    t[49] !== r || t[50] !== c
      ? ((re =
          r != null && c == null
            ? (0, Z.jsx)(q, {
                id: `codex.page.versions.toolbar.chosenVersion`,
                defaultMessage: `Chosen version`,
                description: `Comparison endpoint selector when the chosen version is outside the loaded version history`,
              })
            : null),
        (t[49] = r),
        (t[50] = c),
        (t[51] = re))
      : (re = t[51]);
    let G;
    t[52] !== U || t[53] !== W || t[54] !== ne || t[55] !== re || t[56] !== y
      ? ((G = (0, Z.jsxs)(`span`, {
          id: y,
          className: `min-w-0 flex-1 truncate text-start`,
          children: [U, W, ne, re],
        })),
        (t[52] = U),
        (t[53] = W),
        (t[54] = ne),
        (t[55] = re),
        (t[56] = y),
        (t[57] = G))
      : (G = t[57]);
    let K;
    (t[58] === Symbol.for(`react.memo_cache_sentinel`) ? ((K = (0, Z.jsx)(D, {})), (t[58] = K)) : (K = t[58]),
      t[59] !== H || t[60] !== G || t[61] !== y
        ? ((A = (0, Z.jsxs)(ee, {
            className: `max-w-full min-w-0`,
            variant: `dropdown`,
            "aria-label": H,
            "aria-describedby": y,
            children: [G, K],
          })),
          (t[59] = H),
          (t[60] = G),
          (t[61] = y),
          (t[62] = A))
        : (A = t[62]),
      (S = Yt.Root),
      (N = H));
    let ie;
    (t[63] === p
      ? (ie = t[64])
      : ((ie = p.formatMessage({
          id: `codex.page.versions.baseline.search`,
          defaultMessage: `Find a date or time…`,
          description: `Placeholder for filtering the loaded Page version history by its local date or time`,
        })),
        (t[63] = p),
        (t[64] = ie)),
      t[65] !== _ || t[66] !== ie
        ? ((P = (0, Z.jsx)(Yt.Input, { placeholder: ie, value: _, onValueChange: v })),
          (t[65] = _),
          (t[66] = ie),
          (t[67] = P))
        : (P = t[67]),
      (x = Yt.List),
      (j =
        a && T === ``
          ? (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(Yt.Item, {
                  value: `current`,
                  "aria-current": b ? !0 : void 0,
                  rightIcon: b ? (0, Z.jsx)(o, {}) : void 0,
                  onSelect: () => {
                    (s(null), g(!1));
                  },
                  children: (0, Z.jsx)(q, {
                    id: `codex.page.versions.current`,
                    defaultMessage: `Current version`,
                    description: `The current live Page document captured when its version preview was opened`,
                  }),
                }),
                (0, Z.jsx)(Ee.Separator, {}),
              ],
            })
          : null),
      (M = Object.entries(w).map((e) => {
        let [t, n] = e;
        return (0, Z.jsxs)(
          pa.Fragment,
          {
            children: [
              (0, Z.jsx)(Ee.SectionLabel, { children: t }),
              n.map((e) => {
                let { version: t, fullDate: n, timeLabel: i } = e;
                return (0, Z.jsx)(
                  Yt.Item,
                  {
                    value: t.checkpoint_id,
                    "aria-label": n,
                    "aria-current": t.checkpoint_id === r || void 0,
                    tooltipText: n,
                    rightIcon: t.checkpoint_id === r ? (0, Z.jsx)(o, {}) : void 0,
                    onSelect: () => {
                      (s(t), g(!1));
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
      (t[3] = b),
      (t[4] = m),
      (t[5] = s),
      (t[6] = h),
      (t[7] = _),
      (t[8] = r),
      (t[9] = y),
      (t[10] = n),
      (t[11] = x),
      (t[12] = S),
      (t[13] = C),
      (t[14] = w),
      (t[15] = T),
      (t[16] = E),
      (t[17] = O),
      (t[18] = k),
      (t[19] = A),
      (t[20] = j),
      (t[21] = M),
      (t[22] = N),
      (t[23] = P),
      (t[24] = F),
      (t[25] = I),
      (t[26] = te));
  } else
    ((x = t[11]),
      (S = t[12]),
      (C = t[13]),
      (w = t[14]),
      (T = t[15]),
      (E = t[16]),
      (O = t[17]),
      (k = t[18]),
      (A = t[19]),
      (j = t[20]),
      (M = t[21]),
      (N = t[22]),
      (P = t[23]),
      (F = t[24]),
      (I = t[25]),
      (te = t[26]));
  let L;
  t[68] !== w || t[69] !== T
    ? ((L =
        T !== `` && Object.keys(w).length === 0
          ? (0, Z.jsx)(Ee.Message, {
              compact: !0,
              children: (0, Z.jsx)(q, {
                id: `codex.page.versions.baseline.empty`,
                defaultMessage: `No matching versions`,
                description: `Empty state when no loaded saved Page versions match the entered date or time`,
              }),
            })
          : null),
      (t[68] = w),
      (t[69] = T),
      (t[70] = L))
    : (L = t[70]);
  let R;
  t[71] !== f || t[72] !== d || t[73] !== c
    ? ((R =
        c == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(Ee.Separator, {}),
                f && !d
                  ? (0, Z.jsx)(Ee.Message, {
                      compact: !0,
                      children: (0, Z.jsx)(q, {
                        id: `codex.page.versions.baseline.loadMoreError`,
                        defaultMessage: `Couldn’t load older versions`,
                        description: `Error in the comparison picker when fetching another page of revision metadata failed; the action below retries the request`,
                      }),
                    })
                  : null,
                (0, Z.jsx)(Yt.Item, {
                  value: `load-older`,
                  disabled: d,
                  onSelect: c,
                  children: d
                    ? (0, Z.jsx)(q, {
                        id: `codex.page.versions.baseline.loadingMore`,
                        defaultMessage: `Loading older versions…`,
                        description: `Status while fetching another page of older saved Page revision metadata`,
                      })
                    : (0, Z.jsx)(q, {
                        id: `codex.page.versions.baseline.loadMore`,
                        defaultMessage: `Load older versions`,
                        description: `Fetch earlier saved Page revisions to browse or search in the comparison picker`,
                      }),
                }),
              ],
            })),
      (t[71] = f),
      (t[72] = d),
      (t[73] = c),
      (t[74] = R))
    : (R = t[74]);
  let z;
  t[75] !== x || t[76] !== L || t[77] !== R || t[78] !== j || t[79] !== M
    ? ((z = (0, Z.jsxs)(x, { children: [j, M, L, R] })),
      (t[75] = x),
      (t[76] = L),
      (t[77] = R),
      (t[78] = j),
      (t[79] = M),
      (t[80] = z))
    : (z = t[80]);
  let B;
  t[81] !== S || t[82] !== z || t[83] !== N || t[84] !== P
    ? ((B = (0, Z.jsxs)(S, { label: N, children: [P, z] })),
      (t[81] = S),
      (t[82] = z),
      (t[83] = N),
      (t[84] = P),
      (t[85] = B))
    : (B = t[85]);
  let V;
  return (
    t[86] !== C ||
    t[87] !== E ||
    t[88] !== O ||
    t[89] !== k ||
    t[90] !== A ||
    t[91] !== B ||
    t[92] !== F ||
    t[93] !== I ||
    t[94] !== te
      ? ((V = (0, Z.jsx)(C, {
          open: F,
          onOpenChange: I,
          align: te,
          contentWidth: E,
          contentMaxHeight: O,
          onEscapeKeyDown: k,
          triggerButton: A,
          children: B,
        })),
        (t[86] = C),
        (t[87] = E),
        (t[88] = O),
        (t[89] = k),
        (t[90] = A),
        (t[91] = B),
        (t[92] = F),
        (t[93] = I),
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
    ((da = k()), (fa = t(ze(), 1)), (pa = d()), z(), Xt(), K(), F(), kt(), B(), sa(), (Z = v()));
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
      onLoadMore: u,
      isLoadingMore: d,
      isLoadMoreError: p,
      activeChange: m,
      changeCount: h,
      onNavigateChange: g,
      onSelectVersion: _,
      comparisonStatus: v,
      selectionControls: y,
      restoreAction: x,
    } = e,
    S = Ce(),
    C = (0, _a.useId)(),
    w = v === `ready` && h != null && h > 0,
    T;
  t[0] !== s.checkpointId || t[1] !== s.kind || t[2] !== o?.checkpoint_id
    ? ((T = o?.checkpoint_id),
      s.kind === `checkpoint` ? (T = s.checkpointId) : s.kind === `current` && (T = null),
      (t[0] = s.checkpointId),
      (t[1] = s.kind),
      (t[2] = o?.checkpoint_id),
      (t[3] = T))
    : (T = t[3]);
  let D;
  if (t[4] !== T || t[5] !== i) {
    let e;
    (t[7] === T ? (e = t[8]) : ((e = (e) => e.checkpoint_id === T), (t[7] = T), (t[8] = e)),
      (D = i.find(e)),
      (t[4] = T),
      (t[5] = i),
      (t[6] = D));
  } else D = t[6];
  let O = D,
    k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(q, {
        id: `codex.page.versions.toolbar.showChanges`,
        defaultMessage: `Show changes`,
        description: `Toggle comparison highlights on the selected historical Page version`,
      })),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] === C
    ? (A = t[11])
    : ((A = (0, Q.jsx)(`label`, { className: `text-sm`, htmlFor: C, children: k })),
      (t[10] = C),
      (t[11] = A));
  let j;
  t[12] !== r || t[13] !== n || t[14] !== C
    ? ((j = (0, Q.jsx)(ve, { id: C, checked: n, onChange: r })),
      (t[12] = r),
      (t[13] = n),
      (t[14] = C),
      (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] !== A || t[17] !== j
    ? ((M = (0, Q.jsxs)(`div`, {
        className: `flex min-h-8 items-center justify-between gap-2`,
        children: [A, j],
      })),
      (t[16] = A),
      (t[17] = j),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] !== x || t[20] !== a || t[21] !== n
    ? ((N =
        !n && a != null
          ? (0, Q.jsxs)(`div`, {
              className: `grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2`,
              children: [(0, Q.jsx)(ia, { version: a, timeLabel: void 0 }), x],
            })
          : null),
      (t[19] = x),
      (t[20] = a),
      (t[21] = n),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] !== m ||
  t[24] !== T ||
  t[25] !== O ||
  t[26] !== w ||
  t[27] !== h ||
  t[28] !== v ||
  t[29] !== S ||
  t[30] !== p ||
  t[31] !== d ||
  t[32] !== c ||
  t[33] !== u ||
  t[34] !== g ||
  t[35] !== _ ||
  t[36] !== x ||
  t[37] !== a ||
  t[38] !== y ||
  t[39] !== n ||
  t[40] !== i
    ? ((P = n
        ? (0, Q.jsxs)(`div`, {
            className: `flex min-w-0 flex-col gap-2`,
            children: [
              (0, Q.jsxs)(`div`, {
                className: `grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2`,
                children: [
                  (0, Q.jsx)(`span`, {
                    className: `text-xs text-secondary`,
                    children: (0, Q.jsx)(q, {
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
                      selectedId: T,
                      allowCurrent: a == null,
                      onSelect: (e) =>
                        c(
                          e == null
                            ? { kind: `current` }
                            : { kind: `checkpoint`, checkpointId: e.checkpoint_id },
                        ),
                      onLoadMore: u,
                      isLoadingMore: d,
                      isLoadMoreError: p,
                    }),
                  }),
                  (0, Q.jsx)(`div`, { className: `flex items-center`, children: x }),
                  (0, Q.jsx)(`span`, {
                    className: `text-xs text-secondary`,
                    children: (0, Q.jsx)(q, {
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
                        (e) => T === void 0 || (O != null && e.through_sequence >= O.through_sequence),
                      ),
                      selectedId: a?.checkpoint_id ?? null,
                      allowCurrent: !0,
                      onSelect: _,
                    }),
                  }),
                ],
              }),
              (0, Q.jsxs)(`div`, {
                className: `grid`,
                children: [
                  (0, Q.jsxs)(`div`, {
                    className: b(
                      `col-start-1 row-start-1 flex min-h-8 min-w-0 items-center justify-between gap-2`,
                      y != null && `invisible`,
                    ),
                    inert: y != null,
                    "aria-hidden": y != null,
                    children: [
                      (0, Q.jsxs)(`span`, {
                        className: `flex min-w-0 items-center gap-2 text-xs text-secondary tabular-nums`,
                        role: `status`,
                        "aria-atomic": !0,
                        children: [
                          v === `loading` || v === `pending`
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.comparing`,
                                defaultMessage: `Comparing…`,
                                description: `Status while fetching Page versions and computing the differences between them`,
                              })
                            : null,
                          v === `error`
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.comparisonError`,
                                defaultMessage: `Comparison unavailable`,
                                description: `Status when a Page comparison failed; detailed error and retry controls appear in the document area`,
                              })
                            : null,
                          v === `ready` && h == null
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.chooseComparison`,
                                defaultMessage: `Choose a comparison version`,
                                description: `Status when no valid baseline is available for the selected Page version`,
                              })
                            : null,
                          v === `unavailable`
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.noEarlierComparison`,
                                defaultMessage: `No earlier version to compare`,
                                description: `Status when automatic Page comparison has no earlier saved version; this does not mean the document has no changes`,
                              })
                            : null,
                          v === `ready` && h === 0
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.noChanges`,
                                defaultMessage: `No changes`,
                                description: `Status when two compared Page versions have identical document content`,
                              })
                            : null,
                          v === `same`
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.sameVersion`,
                                defaultMessage: `Same version selected`,
                                description: `Status when the viewed Page version and the comparison version are identical`,
                              })
                            : null,
                          w && m == null
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.changeCount`,
                                defaultMessage: `{count, plural, one {# change} other {# changes}}`,
                                description: `Number of changed sections between two Page versions before navigating to a particular change`,
                                values: { count: h },
                              })
                            : null,
                          w && m != null
                            ? (0, Q.jsx)(q, {
                                id: `codex.page.versions.toolbar.changePosition`,
                                defaultMessage: `{position} of {count}`,
                                description: `Position of the active changed section within the Page comparison`,
                                values: { position: m + 1, count: h },
                              })
                            : null,
                        ],
                      }),
                      (0, Q.jsxs)(f, {
                        label: S.formatMessage({
                          id: `codex.page.versions.toolbar.navigateChanges`,
                          defaultMessage: `Navigate changes`,
                          description: `Accessible label for the previous and next change controls in Page version history`,
                        }),
                        children: [
                          (0, Q.jsx)(E, {
                            uniform: !0,
                            disabled: !w || m == null || m === 0,
                            "aria-label": S.formatMessage({
                              id: `codex.page.versions.toolbar.previousChange`,
                              defaultMessage: `Previous change`,
                              description: `Navigate to the preceding changed section in the formatted Page comparison`,
                            }),
                            onClick: () => {
                              m != null && g(m - 1);
                            },
                            children: (0, Q.jsx)(l, { asset: I }),
                          }),
                          (0, Q.jsx)(E, {
                            uniform: !0,
                            disabled: !w || (m != null && h != null && m >= h - 1),
                            "aria-label": S.formatMessage({
                              id: `codex.page.versions.toolbar.nextChange`,
                              defaultMessage: `Next change`,
                              description: `Navigate to the next changed section in the formatted Page comparison`,
                            }),
                            onClick: () => g((m ?? -1) + 1),
                            children: (0, Q.jsx)(ge, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  y == null
                    ? null
                    : (0, Q.jsx)(`div`, {
                        className: `col-start-1 row-start-1 grid items-center`,
                        children: y,
                      }),
                ],
              }),
            ],
          })
        : null),
      (t[23] = m),
      (t[24] = T),
      (t[25] = O),
      (t[26] = w),
      (t[27] = h),
      (t[28] = v),
      (t[29] = S),
      (t[30] = p),
      (t[31] = d),
      (t[32] = c),
      (t[33] = u),
      (t[34] = g),
      (t[35] = _),
      (t[36] = x),
      (t[37] = a),
      (t[38] = y),
      (t[39] = n),
      (t[40] = i),
      (t[41] = P))
    : (P = t[41]);
  let ee;
  return (
    t[42] !== M || t[43] !== N || t[44] !== P
      ? ((ee = (0, Q.jsxs)(`div`, { className: `flex flex-col gap-3 select-none`, children: [M, N, P] })),
        (t[42] = M),
        (t[43] = N),
        (t[44] = P),
        (t[45] = ee))
      : (ee = t[45]),
    ee
  );
}
var ga, _a, Q;
function va() {
  return (va = e(() => {
    ((ga = k()), R(), S(), (_a = d()), z(), w(), F(), Oe(), B(), sa(), ma(), (Q = v()));
  }))();
}
function ya(e) {
  let t = (0, ja.c)(4),
    n = fe(_t),
    r = fe(Ie),
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
    n = r(j),
    i = Ce(),
    a;
  t[0] !== i.formatMessage ||
  t[1] !== e.accountId ||
  t[2] !== e.pageId ||
  t[3] !== e.streamKind ||
  t[4] !== e.userId ||
  t[5] !== n
    ? ((a = () =>
        na({
          scope: n,
          accountId: e.accountId,
          userId: e.userId,
          pageId: e.pageId,
          streamKind: e.streamKind,
          markdown: it(i.formatMessage),
        })),
      (t[0] = i.formatMessage),
      (t[1] = e.accountId),
      (t[2] = e.pageId),
      (t[3] = e.streamKind),
      (t[4] = e.userId),
      (t[5] = n),
      (t[6] = a))
    : (a = t[6]);
  let [o] = (0, Ma.useState)(a),
    s;
  t[7] === o.loader ? (s = t[8]) : ((s = () => o.loader.retain()), (t[7] = o.loader), (t[8] = s));
  let c;
  (t[9] === o ? (c = t[10]) : ((c = [o]), (t[9] = o), (t[10] = c)), (0, Ma.useEffect)(s, c));
  let l = (0, Ma.useSyncExternalStore)(
      o.loader.subscribeInvalidation,
      o.loader.getInvalidated,
      o.loader.getInvalidated,
    ),
    u;
  return (
    t[11] !== l || t[12] !== e || t[13] !== o
      ? ((u = l ? (0, $.jsx)(ka, { onClose: e.onClose }) : (0, $.jsx)(xa, { ...e, session: o })),
        (t[11] = l),
        (t[12] = e),
        (t[13] = o),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function xa(e) {
  let t = (0, ja.c)(143),
    {
      accountId: n,
      userId: i,
      pageId: a,
      streamKind: o,
      getCurrentUpdate: s,
      isPanelOpen: c,
      renderPanel: l,
      onClose: u,
      onRestore: d,
      session: f,
    } = e,
    p = r(j),
    m = Ce(),
    h = (0, Ma.useId)(),
    { loader: g, readCurrent: _, prepare: v } = f,
    [y, S] = (0, Ma.useState)(null),
    [C, w] = (0, Ma.useState)(null),
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = { kind: `previous` }), (t[0] = T)) : (T = t[0]);
  let [E, D] = (0, Ma.useState)(T),
    [O, k] = (0, Ma.useState)(!1),
    A = O ? C : y,
    M = A?.checkpoint_id ?? null,
    [N, P] = (0, Ma.useState)(null),
    ee;
  t[1] !== n || t[2] !== a || t[3] !== o || t[4] !== i
    ? ((ee = [`space`, `page-version-history`, n, a, o, i]),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = i),
      (t[5] = ee))
    : (ee = t[5]);
  let F;
  t[6] !== n || t[7] !== g || t[8] !== a || t[9] !== p || t[10] !== o
    ? ((F = async (e) => {
        let { pageParam: t, signal: r } = e,
          i = Le(
            p,
            `version_history`,
            { stream_kind: o, page: t ? `older` : `initial` },
            AbortSignal.any([r, g.signal]),
          );
        try {
          let e = await wt.safeGet(`/pages/{page_id}/versions`, {
            parameters: { path: { page_id: a }, query: { cursor: t || void 0, limit: 20, stream_kind: o } },
            signal: AbortSignal.any([r, g.signal]),
          });
          return (i(`success`), e);
        } catch (e) {
          let t = e;
          throw (
            i(r.aborted || g.signal.aborted ? `canceled` : `failure`),
            !r.aborted &&
              !g.signal.aborted &&
              t instanceof me &&
              (t.status === 401 || t.status === 403) &&
              Fe(p, n, a, `page_read_forbidden`, { definitive: !0, streamKind: o, error: t }),
            t
          );
        }
      }),
      (t[6] = n),
      (t[7] = g),
      (t[8] = a),
      (t[9] = p),
      (t[10] = o),
      (t[11] = F))
    : (F = t[11]);
  let I;
  t[12] !== ee || t[13] !== F
    ? ((I = {
        queryKey: ee,
        initialPageParam: ``,
        getNextPageParam: Oa,
        queryFn: F,
        staleTime: Pe.THIRTY_SECONDS,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
      }),
      (t[12] = ee),
      (t[13] = F),
      (t[14] = I))
    : (I = t[14]);
  let {
      data: te,
      fetchNextPage: L,
      hasNextPage: R,
      isFetchingNextPage: z,
      isFetchNextPageError: B,
      isPending: V,
      isError: H,
      refetch: U,
    } = de(I),
    W = te?.pages.flatMap(Da).sort(Ea),
    ne = W?.findIndex((e) => e.checkpoint_id === M) ?? -1,
    re = W?.[0];
  M != null && (re = ne < 0 ? void 0 : W?.[ne + 1]);
  let G = re?.checkpoint_id;
  E.kind === `current` ? (G = null) : E.kind === `checkpoint` && (G = E.checkpointId);
  let K = M != null && ne >= 0 && re == null && R,
    ie;
  t[15] === te?.pages
    ? (ie = t[16])
    : ((ie = new Map(te?.pages.flatMap(wa))), (t[15] = te?.pages), (t[16] = ie));
  let ae = ie,
    oe = [`space`, `page-version-review`, n, i, a, o, h],
    se;
  t[17] !== M || t[18] !== f
    ? ((se = () => f.peekSnapshot(M)), (t[17] = M), (t[18] = f), (t[19] = se))
    : (se = t[19]);
  let {
      data: ce,
      isError: le,
      refetch: ue,
    } = x({
      enabled: M != null || s != null,
      initialData: se,
      queryKey: [...oe, `snapshot`, { checkpointId: M }],
      queryFn: async (e) => {
        let { signal: t } = e,
          n = M == null ? await _(s) : await g.read(M, t);
        return (
          t.throwIfAborted(),
          g.signal.throwIfAborted(),
          g.prefetch([re?.checkpoint_id, W?.[ne - 1]?.checkpoint_id].filter(Ca)),
          n
        );
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    {
      data: fe,
      isError: pe,
      refetch: he,
    } = x({
      enabled: O && G !== void 0 && (E.kind !== `current` || s != null),
      initialData: () => f.peekSnapshot(G),
      queryKey: [...oe, `snapshot`, { checkpointId: G }],
      queryFn: async (e) => {
        let { signal: t } = e;
        if (G === void 0) throw Error(`No comparison version selected`);
        let n = G == null ? await _(s) : await g.read(G, t);
        return (t.throwIfAborted(), g.signal.throwIfAborted(), n);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    ge = JSON.stringify({ selectedId: M, baseline: G }),
    _e;
  t[20] === ce ? (_e = t[21]) : ((_e = (e) => (e?.snapshot === ce ? e : void 0)), (t[20] = ce), (t[21] = _e));
  let {
      data: ve,
      isPlaceholderData: ye,
      isError: be,
      refetch: xe,
    } = x({
      enabled: O && G !== void 0 && ce != null && fe != null,
      initialData: () => f.peekComparison(ge),
      queryKey: [...oe, `comparison`, { selectedId: M, baseline: G }],
      queryFn: (e) => {
        let { signal: t } = e;
        if (ce == null || fe == null) throw Error(`The comparison snapshots are unavailable`);
        return v(fe, ce, ge, t);
      },
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
      placeholderData: _e,
    }),
    Se;
  t[22] !== v || t[23] !== M || t[24] !== ce
    ? ((Se = (e) => {
        let { signal: t } = e;
        if (ce == null) throw Error(`No Page snapshot loaded`);
        return v(ce, ce, JSON.stringify([M]), t);
      }),
      (t[22] = v),
      (t[23] = M),
      (t[24] = ce),
      (t[25] = Se))
    : (Se = t[25]);
  let {
      data: we,
      isError: Te,
      refetch: Ee,
    } = x({
      enabled:
        ce != null &&
        ve == null &&
        (!O || pe || be || (G === void 0 && !K && !V) || (E.kind === `previous` && K && H)),
      initialData: () => f.peekComparison(ge) ?? f.peekComparison(JSON.stringify([M])),
      queryKey: [...oe, `document`, M],
      queryFn: Se,
      staleTime: 1 / 0,
      gcTime: 0,
      retry: !1,
    }),
    De = ye ? void 0 : ve,
    Oe = N?.pair === ge ? N.index : null,
    ke = De == null ? `pending` : `ready`;
  (De == null && (ce == null || fe == null) && (ke = `loading`),
    le || Te || pe || be || (E.kind === `previous` && K && H)
      ? (ke = `error`)
      : G === void 0 && !K && !V
        ? (ke = `unavailable`)
        : De != null && M === G && (ke = `same`));
  let Ae = O && (ke === `loading` || ke === `pending`),
    je = De ?? (Ae ? ve : void 0),
    [Me, Ne] = (0, Ma.useState)(),
    Ie = Me?.snapshot === ce ? Me : void 0,
    Re = Ie ?? we ?? De;
  (O && je != null ? (Re = je) : Ae && (Re = Ie), Me !== Re && Ne(Re));
  let ze = !le && !Te && (Re == null || Ae),
    Be;
  t[26] === u
    ? (Be = t[27])
    : ((Be = (e) => {
        e.key === `Escape` && !e.defaultPrevented && (e.stopPropagation(), u());
      }),
      (t[26] = u),
      (t[27] = Be));
  let Ve = Be,
    He;
  t[28] !== C || t[29] !== O
    ? ((He = (e) => {
        (D(e == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: e.checkpoint_id }),
          O || (S(e), C != null && (e == null || e.through_sequence > C.through_sequence) && w(null)));
      }),
      (t[28] = C),
      (t[29] = O),
      (t[30] = He))
    : (He = t[30]);
  let Ue = He,
    We = function (e) {
      (E.kind === `previous` &&
        G !== void 0 &&
        D(G == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: G }),
        w(e),
        G === void 0 && e != null && e === W?.at(-1) && R && L());
    },
    Ge = O ? W?.find((e) => e.checkpoint_id === G) : A,
    Ke = O ? fe != null && !pe : ce != null && !le,
    qe;
  t[31] === W ? (qe = t[32]) : ((qe = W ?? []), (t[31] = W), (t[32] = qe));
  let Je = te?.pages[0]?.current_editor_summary,
    Ye;
  t[33] !== L || t[34] !== R
    ? ((Ye = R
        ? () => {
            L();
          }
        : void 0),
      (t[33] = L),
      (t[34] = R),
      (t[35] = Ye))
    : (Ye = t[35]);
  let Xe;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xe = (e) => D(e == null ? { kind: `current` } : { kind: `checkpoint`, checkpointId: e })),
      (t[36] = Xe))
    : (Xe = t[36]);
  let Ze;
  t[37] !== Oe ||
  t[38] !== E ||
  t[39] !== De?.changes.length ||
  t[40] !== ke ||
  t[41] !== ze ||
  t[42] !== L ||
  t[43] !== R ||
  t[44] !== B ||
  t[45] !== z ||
  t[46] !== g ||
  t[47] !== K ||
  t[48] !== u ||
  t[49] !== d ||
  t[50] !== a ||
  t[51] !== ge ||
  t[52] !== y ||
  t[53] !== re ||
  t[54] !== Ke ||
  t[55] !== Ge ||
  t[56] !== We ||
  t[57] !== A ||
  t[58] !== O ||
  t[59] !== o ||
  t[60] !== W
    ? ((Ze = (e) =>
        (0, $.jsx)(ha, {
          restoreAction:
            Ge != null && d != null
              ? (0, $.jsx)(
                  zi,
                  {
                    pageId: a,
                    streamKind: o,
                    version: Ge,
                    ready: Ke && !ze,
                    signal: g.signal,
                    onRestore: d,
                    onRestored: u,
                  },
                  Ge.checkpoint_id,
                )
              : null,
          selectionControls: e,
          versions: W ?? [],
          selectedVersion: A,
          previousVersion: re,
          showChanges: O,
          onShowChangesChange: (e) => {
            (e ? y != null && D({ kind: `checkpoint`, checkpointId: y.checkpoint_id }) : S(Ge ?? null),
              k(e),
              e && E.kind === `previous` && K && L());
          },
          baselineSelection: E,
          onLoadMore: R
            ? () => {
                L();
              }
            : void 0,
          isLoadingMore: z,
          isLoadMoreError: B,
          onBaselineChange: (e) => {
            (D(e), e.kind === `previous` && K && L());
          },
          activeChange: Oe,
          changeCount: De?.changes.length ?? null,
          onNavigateChange: (e) => P({ pair: ge, index: e }),
          onSelectVersion: We,
          comparisonStatus: ke,
        })),
      (t[37] = Oe),
      (t[38] = E),
      (t[39] = De?.changes.length),
      (t[40] = ke),
      (t[41] = ze),
      (t[42] = L),
      (t[43] = R),
      (t[44] = B),
      (t[45] = z),
      (t[46] = g),
      (t[47] = K),
      (t[48] = u),
      (t[49] = d),
      (t[50] = a),
      (t[51] = ge),
      (t[52] = y),
      (t[53] = re),
      (t[54] = Ke),
      (t[55] = Ge),
      (t[56] = We),
      (t[57] = A),
      (t[58] = O),
      (t[59] = o),
      (t[60] = W),
      (t[61] = Ze))
    : (Ze = t[61]);
  let Qe;
  t[62] === V ? (Qe = t[63]) : ((Qe = V ? (0, $.jsx)(bi, {}) : null), (t[62] = V), (t[63] = Qe));
  let $e;
  t[64] !== H || t[65] !== B || t[66] !== U
    ? (($e =
        H && !B
          ? (0, $.jsx)(Aa, {
              kind: `history`,
              onRetry: () => {
                U();
              },
            })
          : null),
      (t[64] = H),
      (t[65] = B),
      (t[66] = U),
      (t[67] = $e))
    : ($e = t[67]);
  let et;
  t[68] === W?.length
    ? (et = t[69])
    : ((et =
        W?.length === 0
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-secondary`,
              children: (0, $.jsx)(q, {
                id: `codex.page.versions.noSavedVersions`,
                defaultMessage: `No saved versions yet`,
                description: `Empty state when a Page has no stored historical checkpoints`,
              }),
            })
          : null),
      (t[68] = W?.length),
      (t[69] = et));
  let tt;
  t[70] !== G ||
  t[71] !== B ||
  t[72] !== z ||
  t[73] !== ae ||
  t[74] !== u ||
  t[75] !== We ||
  t[76] !== Ue ||
  t[77] !== M ||
  t[78] !== O ||
  t[79] !== qe ||
  t[80] !== Je ||
  t[81] !== Ye ||
  t[82] !== Ze ||
  t[83] !== Qe ||
  t[84] !== $e ||
  t[85] !== et
    ? ((tt = (0, $.jsxs)(ji, {
        showHeader: !1,
        selectedId: M,
        baselineId: G,
        showChanges: O,
        versions: qe,
        names: ae,
        currentSummary: Je,
        onLoadMore: Ye,
        isLoadingMore: z,
        isLoadMoreError: B,
        onBaselineChange: Xe,
        onSelect: Ue,
        onSelectEnd: We,
        onClose: u,
        renderControls: Ze,
        children: [Qe, $e, et],
      })),
      (t[70] = G),
      (t[71] = B),
      (t[72] = z),
      (t[73] = ae),
      (t[74] = u),
      (t[75] = We),
      (t[76] = Ue),
      (t[77] = M),
      (t[78] = O),
      (t[79] = qe),
      (t[80] = Je),
      (t[81] = Ye),
      (t[82] = Ze),
      (t[83] = Qe),
      (t[84] = $e),
      (t[85] = et),
      (t[86] = tt))
    : (tt = t[86]);
  let nt = tt,
    rt = O && ((pe && G !== M) || be || (E.kind === `previous` && K && H)),
    it = le || Te,
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
  t[89] !== pe ||
  t[90] !== be ||
  t[91] !== rt ||
  t[92] !== it ||
  t[93] !== L ||
  t[94] !== K ||
  t[95] !== he ||
  t[96] !== Ee ||
  t[97] !== xe ||
  t[98] !== ue ||
  t[99] !== le
    ? ((ot =
        rt || it
          ? (0, $.jsxs)(`div`, {
              className: `pt-[var(--pane-overlay-header-height,0px)]`,
              children: [
                rt
                  ? (0, $.jsx)(Aa, {
                      kind: `comparison`,
                      onRetry: () => {
                        (pe ? he() : be && xe(), K && L());
                      },
                    })
                  : null,
                it
                  ? (0, $.jsx)(Aa, {
                      onRetry: () => {
                        le ? ue() : Ee();
                      },
                    })
                  : null,
              ],
            })
          : null),
      (t[89] = pe),
      (t[90] = be),
      (t[91] = rt),
      (t[92] = it),
      (t[93] = L),
      (t[94] = K),
      (t[95] = he),
      (t[96] = Ee),
      (t[97] = xe),
      (t[98] = ue),
      (t[99] = le),
      (t[100] = ot))
    : (ot = t[100]);
  let st = (rt || it) && `[--pane-overlay-header-height:0px]`,
    ct;
  t[101] === st
    ? (ct = t[102])
    : ((ct = b(`relative flex min-h-0 flex-1 flex-col`, st)), (t[101] = st), (t[102] = ct));
  let lt = `flex min-h-0 flex-1 flex-col${Ae ? ` invisible` : ``}`,
    ut = Ae || void 0,
    dt;
  t[103] !== Oe ||
  t[104] !== G ||
  t[105] !== Te ||
  t[106] !== De?.changes ||
  t[107] !== Re ||
  t[108] !== je ||
  t[109] !== a ||
  t[110] !== M ||
  t[111] !== A?.created_at ||
  t[112] !== O ||
  t[113] !== le ||
  t[114] !== W
    ? ((dt =
        !le && !Te && Re != null
          ? (0, $.jsx)(
              Nt,
              {
                name: `PageVersionComparison`,
                fallback: Sa,
                children: (0, $.jsx)(si, {
                  pageId: a,
                  comparison: Re,
                  baselineDate:
                    G == null
                      ? G
                      : W?.find((e) => {
                          let { checkpoint_id: t } = e;
                          return t === G;
                        })?.created_at,
                  selectedDate: A?.created_at ?? null,
                  showChanges: O && je != null,
                  activeChangeId: Oe == null ? null : (De?.changes[Oe]?.id ?? null),
                }),
              },
              M,
            )
          : null),
      (t[103] = Oe),
      (t[104] = G),
      (t[105] = Te),
      (t[106] = De?.changes),
      (t[107] = Re),
      (t[108] = je),
      (t[109] = a),
      (t[110] = M),
      (t[111] = A?.created_at),
      (t[112] = O),
      (t[113] = le),
      (t[114] = W),
      (t[115] = dt))
    : (dt = t[115]);
  let ft;
  t[116] !== Ae || t[117] !== lt || t[118] !== ut || t[119] !== dt
    ? ((ft = (0, $.jsx)(`div`, { className: lt, "aria-hidden": ut, inert: Ae, children: dt })),
      (t[116] = Ae),
      (t[117] = lt),
      (t[118] = ut),
      (t[119] = dt),
      (t[120] = ft))
    : (ft = t[120]);
  let pt;
  t[121] !== Ae || t[122] !== ze
    ? ((pt = ze
        ? (0, $.jsx)(`div`, {
            className: `absolute inset-0 flex flex-col pt-[var(--pane-overlay-header-height,0px)]`,
            children: (0, $.jsx)(gi, { comparison: Ae }),
          })
        : null),
      (t[121] = Ae),
      (t[122] = ze),
      (t[123] = pt))
    : (pt = t[123]);
  let mt;
  t[124] !== ze || t[125] !== ct || t[126] !== ft || t[127] !== pt
    ? ((mt = (0, $.jsxs)(`div`, { className: ct, "aria-busy": ze, children: [ft, pt] })),
      (t[124] = ze),
      (t[125] = ct),
      (t[126] = ft),
      (t[127] = pt),
      (t[128] = mt))
    : (mt = t[128]);
  let ht;
  t[129] !== Ve || t[130] !== at || t[131] !== ot || t[132] !== mt
    ? ((ht = (0, $.jsxs)(`section`, {
        className: `flex min-h-0 min-w-0 flex-1 flex-col`,
        "aria-label": at,
        "data-page-version-history": !0,
        onKeyDown: Ve,
        children: [ot, mt],
      })),
      (t[129] = Ve),
      (t[130] = at),
      (t[131] = ot),
      (t[132] = mt),
      (t[133] = ht))
    : (ht = t[133]);
  let gt;
  t[134] !== c || t[135] !== u || t[136] !== a || t[137] !== l || t[138] !== nt
    ? ((gt =
        l == null
          ? (0, $.jsx)(bn, {
              open: c,
              pageId: a,
              view: `versions`,
              canViewEdits: !1,
              canViewHistory: !1,
              onClose: u,
              versions: nt,
            })
          : l(nt)),
      (t[134] = c),
      (t[135] = u),
      (t[136] = a),
      (t[137] = l),
      (t[138] = nt),
      (t[139] = gt))
    : (gt = t[139]);
  let _t;
  return (
    t[140] !== ht || t[141] !== gt
      ? ((_t = (0, $.jsxs)(`div`, {
          className: `@container/page-activity relative flex min-h-0 flex-1`,
          children: [ht, gt],
        })),
        (t[140] = ht),
        (t[141] = gt),
        (t[142] = _t))
      : (_t = t[142]),
    _t
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
    { onClose: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(q, {
        id: `codex.page.versions.sessionUnavailable`,
        defaultMessage: `Version history is no longer available. Your account or Page access may have changed`,
        description: `Shown when Page version history loses its account context or authorization, requiring the user to leave the history session`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(q, {
        id: `codex.space.page.activity.close`,
        defaultMessage: `Close page activity`,
        description: `Accessible label for closing the Page activity side panel`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsxs)(`div`, {
          className: `mt-[var(--pane-overlay-header-height,0px)] flex items-center justify-between gap-3 p-panel text-sm text-secondary select-none`,
          role: `alert`,
          children: [
            r,
            (0, $.jsx)(V, { autoFocus: !0, color: `secondary`, size: `compact`, onClick: n, children: i }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function Aa(e) {
  let t = (0, ja.c)(14),
    { kind: n, onRetry: r } = e,
    i = n === void 0 ? `preview` : n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i === `history`
          ? (0, $.jsx)(q, {
              id: `codex.page.versions.historyError`,
              defaultMessage: `Could not load version history`,
              description: `Error when the list of saved Page versions could not be loaded; the adjacent action retries`,
            })
          : null),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i === `comparison`
          ? (0, $.jsx)(q, {
              id: `codex.page.versions.comparisonError`,
              defaultMessage: `Could not compare these versions`,
              description: `Error when loading or comparing Page versions failed; the adjacent action retries`,
            })
          : null),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === i
    ? (s = t[5])
    : ((s =
        i === `preview`
          ? (0, $.jsx)(q, {
              id: `codex.page.versions.previewError`,
              defaultMessage: `Could not load this version`,
              description: `Error when a saved Page checkpoint is unavailable or cannot be verified`,
            })
          : null),
      (t[4] = i),
      (t[5] = s));
  let c;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(q, {
        id: `codex.page.versions.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading Page version history or a historical checkpoint after a failure`,
      })),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] === r
    ? (l = t[8])
    : ((l = (0, $.jsx)(V, { color: `secondary`, size: `compact`, onClick: r, children: c })),
      (t[7] = r),
      (t[8] = l));
  let u;
  return (
    t[9] !== a || t[10] !== o || t[11] !== s || t[12] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 p-panel text-sm text-secondary`,
          role: `alert`,
          children: [a, o, s, l],
        })),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
var ja, Ma, $;
function Na() {
  return (Na = e(() => {
    ((ja = k()),
      be(),
      he(),
      S(),
      U(),
      (Ma = d()),
      z(),
      rt(),
      Ht(),
      H(),
      Ot(),
      at(),
      yn(),
      Qe(),
      yt(),
      i(),
      a(),
      Pt(),
      A(),
      hi(),
      yi(),
      wi(),
      Ri(),
      Wi(),
      ra(),
      va(),
      ($ = v()));
  }))();
}
Na();
export { ya as PageVersionHistory };
//# sourceMappingURL=workspace-46dfe1530674.js.map
