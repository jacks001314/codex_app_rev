import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Rt as n,
  A3t as r,
  A8 as i,
  AHt as a,
  AMt as o,
  AQ as s,
  Amn as c,
  Atn as l,
  B6t as u,
  B8 as d,
  BH as f,
  BIt as p,
  Bx as m,
  Bz as h,
  Cpn as g,
  DHt as _,
  E$ as v,
  ELt as y,
  EX as b,
  F$ as x,
  F3t as S,
  FE as C,
  FH as w,
  FV as T,
  Fit as E,
  GY as D,
  GZt as O,
  H4t as k,
  HD as A,
  HH as j,
  HLt as M,
  Hx as N,
  IH as P,
  IV as F,
  IZ as I,
  J4t as L,
  JG as R,
  JIt as z,
  JK as B,
  Jft as V,
  Jit as H,
  KD as U,
  KG as ee,
  KIt as te,
  KYt as W,
  Kit as G,
  LH as ne,
  LIt as re,
  LZ as ie,
  Lj as ae,
  M6t as oe,
  ME as se,
  MH as ce,
  Md as K,
  Mit as le,
  Mtn as ue,
  N3t as de,
  N6t as fe,
  Nit as q,
  O3t as pe,
  Opn as me,
  Pit as he,
  QKt as ge,
  QRt as _e,
  QXt as ve,
  Qit as ye,
  RH as be,
  RIt as xe,
  Rj as Se,
  Rz as Ce,
  Spn as we,
  T$ as Te,
  TJt as Ee,
  UQ as De,
  VH as Oe,
  VLt as ke,
  VQ as Ae,
  Vx as je,
  Vz as Me,
  W8t as Ne,
  WD as Pe,
  WY as Fe,
  Xdt as Ie,
  YD as Le,
  YT as Re,
  ZG as ze,
  Zit as Be,
  _Jt as Ve,
  _O as He,
  _Q as Ue,
  _zt as We,
  a9t as J,
  aYt as Ge,
  d1 as Ke,
  dlt as qe,
  e0t as Je,
  e4t as Ye,
  e9t as Xe,
  eZt as Ze,
  f1 as Qe,
  fmn as $e,
  gMt as et,
  gRt as tt,
  gin as nt,
  gwt as rt,
  hMt as it,
  hmn as at,
  i1 as ot,
  i3t as st,
  j$ as ct,
  jH as lt,
  jQ as ut,
  jd as dt,
  k8 as ft,
  kMt as pt,
  kin as mt,
  kmn as ht,
  lW as gt,
  m1 as _t,
  mLt as vt,
  n1 as yt,
  njt as bt,
  p1 as xt,
  pmn as St,
  qD as Ct,
  qIt as wt,
  qK as Tt,
  qKt as Et,
  qYt as Dt,
  qft as Ot,
  r1 as kt,
  r3t as At,
  rE as jt,
  sW as Mt,
  sYt as Nt,
  tjt as Pt,
  uE as Ft,
  vJt as It,
  vLt as Lt,
  vRt as Rt,
  vwt as zt,
  wJt as Bt,
  wX as Vt,
  xRt as Ht,
  yO as Ut,
  yQ as Wt,
  yRt as Gt,
  yzt as Kt,
  z8 as qt,
  zH as Jt,
  zIt as Yt,
} from "./app-initial-f094ef01c64d.js";
import {
  Ey as Xt,
  GT as Zt,
  HS as Qt,
  Qy as $t,
  Ty as en,
  VS as tn,
  WT as nn,
  aw as rn,
  dw as an,
  eb as on,
  fw as sn,
  mw as cn,
  ow as ln,
} from "./app-primary-4c40d73a1074.js";
import { n as un, r as dn } from "./github-file-url-de7160c14b01.js";
import { n as fn, r as pn } from "./artifact-preview-header-abbff5f8a3ae.js";
import { i as mn, n as hn, r as gn, t as _n } from "./diff-source-a588acc09b83.js";
import { n as vn, t as yn } from "./compact-empty-state-9a2953b7acb0.js";
import {
  a as bn,
  c as xn,
  d as Sn,
  f as Cn,
  l as wn,
  o as Tn,
  s as En,
  u as Dn,
} from "./review-preferences-model-c2edfefe5a2c.js";
import {
  d as On,
  f as kn,
  l as An,
  m as jn,
  n as Mn,
  p as Nn,
  t as Pn,
  u as Fn,
} from "./use-code-diff-context-menu-6d352d781f8f.js";
import { a as In, n as Ln, o as Rn, t as zn } from "./review-file-tree-side-pane-b99602290612.js";
import {
  a as Bn,
  c as Vn,
  i as Hn,
  l as Un,
  n as Wn,
  o as Gn,
  r as Kn,
  s as qn,
  t as Jn,
  u as Yn,
} from "./review-file-source-breadcrumb-8f9dc59debc0.js";
import { n as Xn, t as Zn } from "./file-blank-6ef6808eff9a.js";
import { n as Qn, t as $n } from "./history-7a399655a3e6.js";
import { n as er, t as tr } from "./mcp-extension-view-frame-71a0f1e67dc5.js";
import { i as nr, n as rr, t as ir } from "./review-diff-virtualizer-metrics-92681c84005e.js";
import { r as ar, t as or } from "./scroll-to-match-9d10be663eba.js";
function sr(e) {
  let t = e.split(/[\\/]/).pop()?.toLowerCase() ?? ``,
    n = cr.get(t);
  if (n != null) return n;
  for (let [e, n] of lr) if (t.endsWith(e)) return n;
}
var cr,
  lr,
  ur = e(() => {
    ((cr = new Map([
      [`.babelrc`, `jsonc`],
      [`.babelrc.json`, `jsonc`],
      [`.devcontainer.json`, `jsonc`],
      [`.ember-cli`, `jsonc`],
      [`.envrc`, `bash`],
      [`.eslintrc`, `jsonc`],
      [`.eslintrc.json`, `jsonc`],
      [`.flaskenv`, `dotenv`],
      [`.hintrc`, `jsonc`],
      [`.hushlogin`, `bash`],
      [`.jsfmtrc`, `jsonc`],
      [`.jshintrc`, `jsonc`],
      [`.profile`, `bash`],
      [`.swcrc`, `jsonc`],
      [`.watchmanconfig`, `json`],
      [`.xprofile`, `bash`],
      [`.xsession`, `bash`],
      [`.xsessionrc`, `bash`],
      [`.zlogin`, `bash`],
      [`.zlogout`, `bash`],
      [`.zprofile`, `bash`],
      [`.zsh-theme`, `bash`],
      [`.zshenv`, `bash`],
      [`.zshrc`, `bash`],
      [`apkbuild`, `bash`],
      [`appfile`, `ruby`],
      [`appraisals`, `ruby`],
      [`argv.json`, `jsonc`],
      [`babel.config.json`, `jsonc`],
      [`bashrc_apple_terminal`, `bash`],
      [`berksfile`, `ruby`],
      [`berksfile.lock`, `ruby`],
      [`brewfile`, `ruby`],
      [`bun.lock`, `jsonc`],
      [`capfile`, `ruby`],
      [`cheffile`, `ruby`],
      [`codeowners`, `codeowners`],
      [`composer.lock`, `json`],
      [`containerfile`, `dockerfile`],
      [`dangerfile`, `ruby`],
      [`deliverfile`, `ruby`],
      [`devcontainer.json`, `jsonc`],
      [`extensions.json`, `jsonc`],
      [`fastfile`, `ruby`],
      [`gemfile`, `ruby`],
      [`git-rebase-todo`, `git-rebase`],
      [`gnumakefile`, `makefile`],
      [`guardfile`, `ruby`],
      [`gymfile`, `ruby`],
      [`jakefile`, `javascript`],
      [`jenkinsfile`, `groovy`],
      [`jsconfig.json`, `jsonc`],
      [`keybindings.json`, `jsonc`],
      [`language-configuration.json`, `jsonc`],
      [`launch.json`, `jsonc`],
      [`mcp.json`, `jsonc`],
      [`merge_msg`, `git-commit`],
      [`ocamlmakefile`, `makefile`],
      [`pkgbuild`, `bash`],
      [`podfile`, `ruby`],
      [`profiles.json`, `jsonc`],
      [`puppetfile`, `ruby`],
      [`rakefile`, `ruby`],
      [`rantfile`, `ruby`],
      [`sconscript`, `python`],
      [`sconstruct`, `python`],
      [`settings.json`, `jsonc`],
      [`snapfile`, `ruby`],
      [`tasks.json`, `jsonc`],
      [`thorfile`, `ruby`],
      [`tsconfig.json`, `jsonc`],
      [`typedoc.json`, `jsonc`],
      [`user-dirs.dirs`, `dotenv`],
      [`vagrantfile`, `ruby`],
      [`zlogin`, `bash`],
      [`zlogout`, `bash`],
      [`zprofile`, `bash`],
      [`zshenv`, `bash`],
      [`zshrc`, `bash`],
    ])),
      (lr = new Map([
        [`.agent.md`, `markdown`],
        [`.aspx`, `html`],
        [`.bash_aliases`, `bash`],
        [`.bash_login`, `bash`],
        [`.bash_logout`, `bash`],
        [`.bash_profile`, `bash`],
        [`.bashrc`, `bash`],
        [`.bowerrc`, `json`],
        [`.cake`, `csharp`],
        [`.ccm`, `cpp`],
        [`.chatmode.md`, `markdown`],
        [`.code-profile`, `json`],
        [`.code-snippets`, `jsonc`],
        [`.code-workspace`, `jsonc`],
        [`.containerfile`, `dockerfile`],
        [`.cpy`, `python`],
        [`.cppm`, `cpp`],
        [`.css.map`, `json`],
        [`.csx`, `csharp`],
        [`.cts`, `typescript`],
        [`.ctx`, `tex`],
        [`.cxxm`, `cpp`],
        [`.dsql`, `sql`],
        [`.ejs`, `html`],
        [`.es6`, `javascript`],
        [`.eyaml`, `yaml`],
        [`.eyml`, `yaml`],
        [`.geojson`, `json`],
        [`.gyp`, `python`],
        [`.gypi`, `python`],
        [`.h++`, `cpp`],
        [`.h.in`, `cpp`],
        [`.har`, `json`],
        [`.hpp.in`, `cpp`],
        [`.htm`, `html`],
        [`.ino`, `cpp`],
        [`.instructions.md`, `markdown`],
        [`.inl`, `cpp`],
        [`.ipy`, `python`],
        [`.ipp`, `cpp`],
        [`.ixx`, `cpp`],
        [`.js.map`, `json`],
        [`.jshtm`, `html`],
        [`.jsonld`, `json`],
        [`.litcoffee`, `markdown`],
        [`.mak`, `makefile`],
        [`.markdown`, `markdown`],
        [`.markdn`, `markdown`],
        [`.mdoc`, `html`],
        [`.mdown`, `markdown`],
        [`.mdtext`, `markdown`],
        [`.mdtxt`, `markdown`],
        [`.mdwn`, `markdown`],
        [`.mkd`, `markdown`],
        [`.mkdn`, `markdown`],
        [`.mts`, `typescript`],
        [`.ndjson`, `jsonl`],
        [`.pac`, `javascript`],
        [`.php4`, `php`],
        [`.php5`, `php`],
        [`.prompt.md`, `markdown`],
        [`.psrc`, `powershell`],
        [`.pssc`, `powershell`],
        [`.pyt`, `python`],
        [`.rbx`, `ruby`],
        [`.rhtml`, `html`],
        [`.rjs`, `ruby`],
        [`.ron`, `markdown`],
        [`.ronn`, `markdown`],
        [`.rpy`, `python`],
        [`.ru`, `ruby`],
        [`.shtml`, `html`],
        [`.ts.map`, `json`],
        [`.tpp`, `cpp`],
        [`.txx`, `cpp`],
        [`.vba`, `vb`],
        [`.volt`, `html`],
        [`.webmanifest`, `json`],
        [`.workbook`, `markdown`],
        [`.xht`, `html`],
        [`.xhtml`, `html`],
      ])));
  });
function dr(e) {
  let t = (0, fr.c)(10),
    { className: n, filePath: r, fileViewer: i, hostId: a, instanceId: o } = e,
    s;
  bb0: {
    if (o != null) {
      s = o;
      break bb0;
    }
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = crypto.randomUUID()), (t[0] = e))
      : (e = t[0]),
      (s = `codex-resource://${e}`));
  }
  let c = s,
    l;
  t[1] !== r || t[2] !== i || t[3] !== a || t[4] !== c
    ? ((l = yt({ fileViewer: i, hostId: a, path: r, resourceUri: c })),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  return (
    t[6] !== n || t[7] !== i || t[8] !== u
      ? ((d = (0, pr.jsx)(tr, { className: n, ...u, view: i })),
        (t[6] = n),
        (t[7] = i),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var fr,
  pr,
  mr = e(() => {
    ((fr = ht()), ot(), er(), (pr = at()));
  });
function hr(e) {
  let t = (0, Ar.c)(22),
    {
      isExpanded: n,
      labels: r,
      line: i,
      lineNumber: a,
      onOpenBlameLink: o,
      onToggleExpandedBlameLine: s,
      repositoryWebUrl: c,
    } = e,
    l;
  t[0] === i ? (l = t[1]) : ((l = Cr(i)), (t[0] = i), (t[1] = l));
  let u;
  t[2] !== a || t[3] !== s
    ? ((u = (e) => {
        (e.preventDefault(), e.stopPropagation(), s(a));
      }),
      (t[2] = a),
      (t[3] = s),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === i ? (d = t[6]) : ((d = wr(i)), (t[5] = i), (t[6] = d));
  let f;
  t[7] === d
    ? (f = t[8])
    : ((f = (0, Y.jsx)(`span`, { "data-file-blame-author": ``, children: d })),
      (t[7] = d),
      (t[8] = f));
  let p;
  t[9] !== n || t[10] !== l || t[11] !== u || t[12] !== f
    ? ((p = (0, Y.jsx)(`button`, {
        type: `button`,
        "data-file-blame-trigger": ``,
        "aria-expanded": n,
        "aria-haspopup": `dialog`,
        "aria-label": l,
        onClick: u,
        children: f,
      })),
      (t[9] = n),
      (t[10] = l),
      (t[11] = u),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== r || t[15] !== i || t[16] !== o || t[17] !== c
    ? ((m = (0, Y.jsx)(gr, { labels: r, line: i, onOpenBlameLink: o, repositoryWebUrl: c })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = o),
      (t[17] = c),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== p || t[20] !== m
      ? ((h = (0, Y.jsxs)(Y.Fragment, { children: [p, m] })), (t[19] = p), (t[20] = m), (t[21] = h))
      : (h = t[21]),
    h
  );
}
function gr(e) {
  let t = (0, Ar.c)(45),
    { labels: n, line: r, onOpenBlameLink: i, repositoryWebUrl: a } = e,
    o;
  t[0] !== r.commitSha || t[1] !== r.summary
    ? ((o = r.summary ?? r.commitSha.slice(0, 8)),
      (t[0] = r.commitSha),
      (t[1] = r.summary),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === r ? (c = t[4]) : ((c = yr(r)), (t[3] = r), (t[4] = c));
  let l = c,
    u;
  t[5] !== r || t[6] !== a ? ((u = br(r, a)), (t[5] = r), (t[6] = a), (t[7] = u)) : (u = t[7]);
  let d = u,
    f;
  t[8] !== r || t[9] !== a ? ((f = xr(r, a)), (t[8] = r), (t[9] = a), (t[10] = f)) : (f = t[10]);
  let p = f,
    m;
  t[11] === r.authorTime
    ? (m = t[12])
    : ((m = kr(r.authorTime)), (t[11] = r.authorTime), (t[12] = m));
  let h = m,
    g;
  t[13] === s
    ? (g = t[14])
    : ((g = (0, Y.jsx)(`span`, { "data-file-blame-tooltip-title": ``, children: s })),
      (t[13] = s),
      (t[14] = g));
  let _;
  t[15] !== l || t[16] !== r || t[17] !== i
    ? ((_ = l == null ? wr(r) : (0, Y.jsx)(vr, { link: l, onOpenBlameLink: i })),
      (t[15] = l),
      (t[16] = r),
      (t[17] = i),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== n.author || t[20] !== _
    ? ((v = (0, Y.jsx)(_r, { label: n.author, children: _ })),
      (t[19] = n.author),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] !== h || t[23] !== n.date
    ? ((y = h && (0, Y.jsx)(_r, { label: n.date, children: h })),
      (t[22] = h),
      (t[23] = n.date),
      (t[24] = y))
    : (y = t[24]);
  let b;
  t[25] !== d || t[26] !== r.commitSha || t[27] !== i
    ? ((b = d == null ? r.commitSha.slice(0, 8) : (0, Y.jsx)(vr, { link: d, onOpenBlameLink: i })),
      (t[25] = d),
      (t[26] = r.commitSha),
      (t[27] = i),
      (t[28] = b))
    : (b = t[28]);
  let x;
  t[29] !== n.commit || t[30] !== b
    ? ((x = (0, Y.jsx)(_r, { label: n.commit, children: b })),
      (t[29] = n.commit),
      (t[30] = b),
      (t[31] = x))
    : (x = t[31]);
  let S;
  t[32] !== n.pullRequest || t[33] !== i || t[34] !== p
    ? ((S =
        p &&
        (0, Y.jsx)(_r, {
          label: n.pullRequest,
          children: (0, Y.jsx)(vr, { link: p, onOpenBlameLink: i }),
        })),
      (t[32] = n.pullRequest),
      (t[33] = i),
      (t[34] = p),
      (t[35] = S))
    : (S = t[35]);
  let C;
  t[36] !== x || t[37] !== S || t[38] !== v || t[39] !== y
    ? ((C = (0, Y.jsxs)(`span`, { "data-file-blame-tooltip-meta": ``, children: [v, y, x, S] })),
      (t[36] = x),
      (t[37] = S),
      (t[38] = v),
      (t[39] = y),
      (t[40] = C))
    : (C = t[40]);
  let w;
  return (
    t[41] !== C || t[42] !== g || t[43] !== s
      ? ((w = (0, Y.jsxs)(`span`, {
          "data-file-blame-tooltip": ``,
          role: `dialog`,
          "aria-label": s,
          children: [g, C],
        })),
        (t[41] = C),
        (t[42] = g),
        (t[43] = s),
        (t[44] = w))
      : (w = t[44]),
    w
  );
}
function _r(e) {
  let t = (0, Ar.c)(7),
    { children: n, label: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`span`, { "data-file-blame-tooltip-label": ``, children: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Y.jsx)(`span`, { "data-file-blame-tooltip-value": ``, children: n })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Y.jsxs)(Y.Fragment, { children: [i, a] })), (t[4] = i), (t[5] = a), (t[6] = o))
      : (o = t[6]),
    o
  );
}
function vr(e) {
  let t = (0, Ar.c)(8),
    { link: n, onOpenBlameLink: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = function (e) {
        e.stopPropagation();
      }),
      (t[0] = i))
    : (i = t[0]);
  let a = i,
    o;
  t[1] !== n.url || t[2] !== r
    ? ((o = function (e) {
        (e.preventDefault(), e.stopPropagation(), r(n.url, e));
      }),
      (t[1] = n.url),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c;
  return (
    t[4] !== s || t[5] !== n.label || t[6] !== n.url
      ? ((c = (0, Y.jsx)(`button`, {
          type: `button`,
          "data-file-blame-link": ``,
          "data-file-blame-url": n.url,
          role: `link`,
          onPointerDown: a,
          onClick: s,
          children: n.label,
        })),
        (t[4] = s),
        (t[5] = n.label),
        (t[6] = n.url),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function yr(e) {
  return e.authorLogin == null
    ? null
    : {
        label: `@${e.authorLogin}`,
        url: `https://github.com/${encodeURIComponent(e.authorLogin)}`,
      };
}
function br(e, t) {
  return Er(e.commitSha)
    ? Sr(t, `commit/${encodeURIComponent(e.commitSha)}`, e.commitSha.slice(0, 8))
    : null;
}
function xr(e, t) {
  let n = Or(e.summary);
  return n == null ? null : Sr(t, `pull/${n}`, `#${n}`);
}
function Sr(e, t, n) {
  return e == null || !Dr(e) ? null : { label: n, url: `${e.replace(/\/+$/, ``)}/${t}` };
}
function Cr(e) {
  return [wr(e), kr(e.authorTime), Tr(e)].filter((e) => !!e).join(` `);
}
function wr(e) {
  return e.author ?? e.commitSha.slice(0, 8);
}
function Tr(e) {
  let t = e.commitSha.slice(0, 8);
  return e.summary == null ? t : `${t} ${e.summary}`;
}
function Er(e) {
  return e.length > 0 && !/^0+$/.test(e);
}
function Dr(e) {
  try {
    let t = new URL(e);
    return t.hostname === `github.com` || t.hostname.endsWith(`.github.com`);
  } catch {
    return !1;
  }
}
function Or(e) {
  if (e == null) return null;
  let t = /\(#(\d+)\)\s*$/.exec(e)?.[1] ?? /^Merge pull request #(\d+)\b/.exec(e)?.[1];
  return t == null ? null : Number.parseInt(t, 10);
}
function kr(e) {
  return e == null ? null : new Date(e * 1e3).toISOString().slice(0, 10);
}
var Ar,
  Y,
  jr = e(() => {
    ((Ar = ht()), (Y = at()));
  });
function Mr(e) {
  let t =
    e.dataset.columnNumber ||
    e.closest(`[data-line]`)?.getAttribute(`data-line`) ||
    e.querySelector(`[data-line-number-content]`)?.textContent;
  if (t == null) return null;
  let n = Number.parseInt(t, 10);
  return Number.isNaN(n) ? null : n;
}
var Nr = e(() => {});
function Pr(e, t, n, r, i, a, o) {
  let s = (e.shadowRoot ?? e).querySelector(`[data-file]`);
  if (s == null) return;
  let c = s.querySelectorAll(`[data-column-number]`);
  if (t == null) {
    for (let e of c) Lr(e);
    s.toggleAttribute(`data-file-blame-visible`, !1);
    return;
  }
  let l = !1;
  ((0, zr.flushSync)(() => {
    for (let e of c) {
      let s = Mr(e);
      if (s == null) {
        Lr(e);
        continue;
      }
      let c = t.get(s);
      if (c == null) {
        Lr(e);
        continue;
      }
      let u = Fr(e),
        d = r === s;
      (u.toggleAttribute(`data-file-blame-expanded`, d),
        Ir(u).render(
          (0, Rr.createElement)(hr, {
            isExpanded: d,
            labels: i,
            line: c,
            lineNumber: s,
            onOpenBlameLink: a,
            onToggleExpandedBlameLine: o,
            repositoryWebUrl: n,
          }),
        ),
        (l = !0));
    }
  }),
    s.toggleAttribute(`data-file-blame-visible`, l));
}
function Fr(e) {
  let t = e.querySelector(`[data-file-blame-gutter]`);
  if (t != null) return t;
  let n = document.createElement(`span`);
  return ((n.dataset.fileBlameGutter = ``), e.append(n), n);
}
function Ir(e) {
  let t = Vr.get(e);
  if (t != null) return t;
  let n = (0, Br.createRoot)(e);
  return (Vr.set(e, n), n);
}
function Lr(e) {
  let t = e.querySelector(`[data-file-blame-gutter]`);
  t != null && (Vr.get(t)?.unmount(), Vr.delete(t), t.remove());
}
var Rr,
  zr,
  Br,
  Vr,
  Hr = e(() => {
    ((Rr = t(c(), 1)), (zr = t(St(), 1)), (Br = t($e(), 1)), jr(), Nr(), (Vr = new WeakMap()));
  });
function Ur(e) {
  return e.metadata.hunks.flatMap((e) => {
    let t = [],
      n = e.additionStart;
    for (let r of e.hunkContent) {
      if (r.type === `context`) {
        n += r.lines;
        continue;
      }
      if (r.additions > 0) {
        let e = r.deletions > 0 ? `modification` : `addition`;
        for (let i = 0; i < r.additions; i += 1)
          t.push({ kind: e, lineNumber: n + i, placement: `line` });
      } else r.deletions > 0 && t.push(Kr(e, n));
      n += r.additions;
    }
    return t;
  });
}
function Wr(e) {
  if (e == null) return null;
  let t = new Map();
  for (let n of Ur(e)) {
    let e = t.get(n.lineNumber);
    if (e == null) {
      t.set(n.lineNumber, [n]);
      continue;
    }
    e.push(n);
  }
  return t;
}
function Gr(e, t) {
  let n = (e.shadowRoot ?? e).querySelector(`[data-file]`);
  if (n == null) return;
  let r = n.querySelectorAll(`[data-column-number]`);
  for (let e of r) {
    let n = Mr(e),
      r = n == null ? void 0 : t?.get(n);
    if (r == null || r.length === 0) {
      Jr(e);
      continue;
    }
    qr(e).replaceChildren(
      ...r.map((e) => {
        let n = document.createElement(`span`);
        if (
          ((n.dataset.fileChangeGutterMarker = ``),
          (n.dataset.fileChangeKind = e.kind),
          (n.dataset.fileChangePlacement = e.placement),
          e.placement === `line`)
        ) {
          let r = t?.get(e.lineNumber - 1),
            i = t?.get(e.lineNumber + 1);
          (r?.some((t) => t.placement === `line` && t.kind === e.kind) !== !0 &&
            (n.dataset.fileChangeRunStart = ``),
            i?.some((t) => t.placement === `line` && t.kind === e.kind) !== !0 &&
              (n.dataset.fileChangeRunEnd = ``));
        }
        return ((n.ariaHidden = `true`), n);
      }),
    );
  }
  n.toggleAttribute(`data-file-change-gutter-visible`, t != null && t.size > 0);
}
function Kr(e, t) {
  return t <= e.additionStart + e.additionCount - 1 || t <= 1
    ? { kind: `deletion`, lineNumber: Math.max(t, 1), placement: `before` }
    : { kind: `deletion`, lineNumber: Math.max(t - 1, 1), placement: `after` };
}
function qr(e) {
  let t = e.querySelector(`[data-file-change-gutter]`);
  if (t != null) return t;
  let n = document.createElement(`span`);
  return ((n.dataset.fileChangeGutter = ``), e.prepend(n), n);
}
function Jr(e) {
  e.querySelector(`[data-file-change-gutter]`)?.remove();
}
var Yr = e(() => {
  Nr();
});
function Xr(e) {
  let t = (0, Zr.c)(58),
    { cwd: n, hostId: r, path: i, projectRoot: a } = e,
    o = me(),
    s = Dt(r),
    c;
  t[0] === a ? (c = t[1]) : ((c = a == null ? [] : [a]), (t[0] = a), (t[1] = c));
  let l;
  t[2] !== r || t[3] !== c
    ? ((l = { params: { dirs: c, hostId: r }, source: `review_model` }),
      (t[2] = r),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let { data: u, isPending: d } = de(qt, l),
    f = ft(u?.origins, a),
    { data: p } = Zt(f?.root, s, `review_model`),
    m =
      a == null || f == null
        ? null
        : un({ branch: p, cwd: n ?? a, path: i, remoteUrl: f.originUrl, root: f.root }),
    h = Ae({ cwd: n, path: i, projectRoot: a, repoRoot: f?.root ?? null }),
    _ = h.repoRelative ?? h.projectRelative ?? h.absolute ?? i,
    v;
  if (h.repoRelative != null) {
    let e;
    (t[5] === o
      ? (e = t[6])
      : ((e = o.formatMessage({
          id: `review.fileSource.copyRepoRelativePathButton`,
          defaultMessage: `Copy repo-relative path`,
          description: `Tooltip and accessible label for copying a file path relative to the Git repository root`,
        })),
        (t[5] = o),
        (t[6] = e)),
      (v = e));
  } else if (h.projectRelative != null) {
    let e;
    (t[7] === o
      ? (e = t[8])
      : ((e = o.formatMessage({
          id: `review.fileSource.copyProjectRelativePathButton`,
          defaultMessage: `Copy project-relative path`,
          description: `Tooltip and accessible label for copying a file path relative to its project root`,
        })),
        (t[7] = o),
        (t[8] = e)),
      (v = e));
  } else {
    let e;
    (t[9] === o
      ? (e = t[10])
      : ((e = o.formatMessage({
          id: `review.fileSource.copyPathButton`,
          defaultMessage: `Copy path`,
          description: `Tooltip and accessible label for copying the file viewer's path`,
        })),
        (t[9] = o),
        (t[10] = e)),
      (v = e));
  }
  let y;
  t[11] === o
    ? (y = t[12])
    : ((y = o.formatMessage({
        id: `review.fileSource.openInGitHubButton`,
        defaultMessage: `Open in GitHub`,
        description: `Tooltip and accessible label for opening the viewed file on GitHub`,
      })),
      (t[11] = o),
      (t[12] = y));
  let b = y,
    x = a != null && d,
    S;
  t[13] === _
    ? (S = t[14])
    : ((S = (e) => {
        xt(_, e);
      }),
      (t[13] = _),
      (t[14] = S));
  let C;
  t[15] !== v || t[16] !== _ || t[17] !== x || t[18] !== S
    ? ((C = (0, X.jsx)(
        lt,
        { ariaLabel: v, buttonText: v, iconOnly: !0, isDisabled: x, onCopy: S },
        _,
      )),
      (t[15] = v),
      (t[16] = _),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C))
    : (C = t[19]);
  let w;
  t[20] === o
    ? (w = t[21])
    : ((w = o.formatMessage({
        id: `review.fileSource.copyPathOptions`,
        defaultMessage: `Copy path options`,
        description: `Accessible label for the file viewer menu offering different path formats to copy`,
      })),
      (t[20] = o),
      (t[21] = w));
  let T;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, X.jsx)(qe, {})), (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] === w
    ? (E = t[24])
    : ((E = (0, X.jsx)(pt, {
        "aria-label": w,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        children: T,
      })),
      (t[23] = w),
      (t[24] = E));
  let D = h.absolute == null,
    O;
  t[25] === h.absolute
    ? (O = t[26])
    : ((O = () => {
        h.absolute != null && xt(h.absolute);
      }),
      (t[25] = h.absolute),
      (t[26] = O));
  let k;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(g, {
        id: `review.fileSource.copyAbsolutePath`,
        defaultMessage: `Absolute path`,
        description: `Menu item to copy the full absolute filesystem path of a file`,
      })),
      (t[27] = k))
    : (k = t[27]);
  let A;
  t[28] !== D || t[29] !== O
    ? ((A = (0, X.jsx)(R.Item, { disabled: D, onSelect: O, children: k })),
      (t[28] = D),
      (t[29] = O),
      (t[30] = A))
    : (A = t[30]);
  let j = h.projectRelative == null,
    M;
  t[31] === h.projectRelative
    ? (M = t[32])
    : ((M = () => {
        h.projectRelative != null && xt(h.projectRelative);
      }),
      (t[31] = h.projectRelative),
      (t[32] = M));
  let N;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(g, {
        id: `review.fileSource.copyPathRelativeToProject`,
        defaultMessage: `Relative to project`,
        description: `Menu item to copy a file path relative to its project root`,
      })),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] !== j || t[35] !== M
    ? ((P = (0, X.jsx)(R.Item, { disabled: j, onSelect: M, children: N })),
      (t[34] = j),
      (t[35] = M),
      (t[36] = P))
    : (P = t[36]);
  let F = h.repoRelative == null,
    I;
  t[37] === h.repoRelative
    ? (I = t[38])
    : ((I = () => {
        h.repoRelative != null && xt(h.repoRelative);
      }),
      (t[37] = h.repoRelative),
      (t[38] = I));
  let L;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, X.jsx)(g, {
        id: `review.fileSource.copyPathRelativeToRepo`,
        defaultMessage: `Relative to repo`,
        description: `Menu item to copy a file path relative to the Git repository root`,
      })),
      (t[39] = L))
    : (L = t[39]);
  let z;
  t[40] !== F || t[41] !== I
    ? ((z = (0, X.jsx)(R.Item, { disabled: F, onSelect: I, children: L })),
      (t[40] = F),
      (t[41] = I),
      (t[42] = z))
    : (z = t[42]);
  let B;
  t[43] !== A || t[44] !== P || t[45] !== z || t[46] !== E
    ? ((B = (0, X.jsxs)(ee, {
        align: `start`,
        contentWidth: `menu`,
        triggerButton: E,
        children: [A, P, z],
      })),
      (t[43] = A),
      (t[44] = P),
      (t[45] = z),
      (t[46] = E),
      (t[47] = B))
    : (B = t[47]);
  let V;
  t[48] !== B || t[49] !== C
    ? ((V = (0, X.jsxs)(`div`, { className: `flex items-center`, children: [C, B] })),
      (t[48] = B),
      (t[49] = C),
      (t[50] = V))
    : (V = t[50]);
  let H;
  t[51] !== b || t[52] !== m || t[53] !== r
    ? ((H =
        m == null
          ? null
          : (0, X.jsx)(G, {
              tooltipContent: b,
              children: (0, X.jsx)(pt, {
                "aria-label": b,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                onClick: (e) => {
                  fe({ event: e, href: m, initiator: `side_panel_menu`, originHostId: r });
                },
                children: (0, X.jsx)(ae, { className: `icon-sm` }),
              }),
            })),
      (t[51] = b),
      (t[52] = m),
      (t[53] = r),
      (t[54] = H))
    : (H = t[54]);
  let U;
  return (
    t[55] !== V || t[56] !== H
      ? ((U = (0, X.jsxs)(X.Fragment, { children: [V, H] })), (t[55] = V), (t[56] = H), (t[57] = U))
      : (U = t[57]),
    U
  );
}
var Zr,
  X,
  Qr = e(() => {
    ((Zr = ht()),
      pe(),
      we(),
      o(),
      ce(),
      ze(),
      oe(),
      Ie(),
      H(),
      d(),
      dn(),
      nn(),
      i(),
      Se(),
      W(),
      _t(),
      De(),
      (X = at()));
  });
function $r({ contents: e, getFileContainer: t, onScrollToLocation: n, path: r, windowZoom: i }) {
  return _n({
    contextId: `file:${r}`,
    getFiles: () => [
      {
        path: r,
        hunks: [
          { hunkId: `source`, lineMapping: `contiguous`, lineEnd: Un(e), lineStart: 1, text: e },
        ],
      },
    ],
    scrollAdapter: {
      getFileContainer: (e) => (e === r ? t() : null),
      scrollToFile: async (e, n) => {
        e !== r ||
          n?.signal?.aborted ||
          t()?.scrollIntoView({ behavior: `auto`, block: `nearest` });
      },
      scrollToLocation: async (e, a) => {
        if (e.path !== r || a?.signal?.aborted || e.lineStart < 1) return;
        let o = t();
        o != null && (n?.(), await ei(o, e.lineStart, i, a));
      },
    },
  });
}
async function ei(e, t, n, r) {
  for (let i = 0; i < oi; i++) {
    if (r?.signal?.aborted || !ti(e, t, n)) return;
    await ar();
  }
}
function ti(e, t, n) {
  let r = e.querySelector(`diffs-container`)?.shadowRoot ?? null;
  if (r == null) return !1;
  let i = r.querySelector(`[data-line="${t}"]`);
  if (i != null) return (ni(e, i, n), !1);
  let a = ri(r, t);
  if (a == null) return !1;
  let o = Number(a.dataset.line);
  if (!Number.isFinite(o)) return !1;
  let s = n > 0 ? n : 1,
    c = ii(a, s),
    l = e.getBoundingClientRect(),
    u = (a.getBoundingClientRect().top - l.top) / s,
    d = e.scrollTop + u + (t - o) * c;
  return (e.scrollTo({ top: Math.max(0, d - (e.clientHeight - c) / 2), behavior: `auto` }), !0);
}
function ni(e, t, n) {
  let r = n > 0 ? n : 1,
    i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect(),
    o = (a.top + a.height / 2 - i.top) / r;
  e.scrollTo({ top: Math.max(0, e.scrollTop + o - e.clientHeight / 2), behavior: `auto` });
}
function ri(e, t) {
  let n = null,
    r = 1 / 0;
  for (let i of e.querySelectorAll(`[data-line]`)) {
    let e = Number(i.dataset.line);
    if (!Number.isFinite(e)) continue;
    let a = Math.abs(t - e);
    a < r && ((n = i), (r = a));
  }
  return n;
}
function ii(e, t) {
  let n = e.getBoundingClientRect().height;
  if (n > 0) return n / t;
  let r = Number.parseFloat(window.getComputedStyle(e).lineHeight);
  return Number.isFinite(r) ? r : ai;
}
var ai,
  oi,
  si = e(() => {
    (nt(), hn(), or(), Yn(), (ai = 20), (oi = 8));
  });
function ci(e) {
  let t = (0, ui.c)(6),
    { type: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(Zn, {})), (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n ? (i = t[2]) : ((i = (0, Z.jsx)(li, { type: n })), (t[1] = n), (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(g, {
        id: `review.fileSource.unsupportedDetail`,
        defaultMessage: `Open this file in another app to view it`,
        description: `Detail shown when a workspace file tab cannot preview an unsupported file type`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === i
      ? (o = t[5])
      : ((o = (0, Z.jsx)(yn, {
          className: `h-full min-h-0 px-4`,
          icon: r,
          title: i,
          description: a,
        })),
        (t[4] = i),
        (t[5] = o)),
    o
  );
}
function li(e) {
  let t = (0, ui.c)(14),
    { type: n } = e;
  switch (n) {
    case `archive`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.archive`,
              defaultMessage: `Archive previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an archive file`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `audio`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.audio`,
              defaultMessage: `Audio previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an audio file`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `binary`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.binary`,
              defaultMessage: `Binary file previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a binary file`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `excel-spreadsheet`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.excelSpreadsheet`,
              defaultMessage: `Excel spreadsheet previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an Excel spreadsheet`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `keynote-deck`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.keynoteDeck`,
              defaultMessage: `Keynote deck previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a Keynote deck`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `numbers-spreadsheet`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.numbersSpreadsheet`,
              defaultMessage: `Numbers spreadsheet previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a Numbers spreadsheet`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `opendocument-presentation`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.opendocumentPresentation`,
              defaultMessage: `OpenDocument presentation previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an OpenDocument presentation`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `opendocument-spreadsheet`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.opendocumentSpreadsheet`,
              defaultMessage: `OpenDocument spreadsheet previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an OpenDocument spreadsheet`,
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `opendocument-text`: {
      let e;
      return (
        t[8] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.opendocumentText`,
              defaultMessage: `OpenDocument text previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview an OpenDocument text file`,
            })),
            (t[8] = e))
          : (e = t[8]),
        e
      );
    }
    case `pages-document`: {
      let e;
      return (
        t[9] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.pagesDocument`,
              defaultMessage: `Pages document previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a Pages document`,
            })),
            (t[9] = e))
          : (e = t[9]),
        e
      );
    }
    case `powerpoint-deck`: {
      let e;
      return (
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.powerpointDeck`,
              defaultMessage: `PowerPoint deck previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a PowerPoint deck`,
            })),
            (t[10] = e))
          : (e = t[10]),
        e
      );
    }
    case `rich-text-document`: {
      let e;
      return (
        t[11] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.richTextDocument`,
              defaultMessage: `Rich Text document previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a Rich Text document`,
            })),
            (t[11] = e))
          : (e = t[11]),
        e
      );
    }
    case `video`: {
      let e;
      return (
        t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.video`,
              defaultMessage: `Video previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a video file`,
            })),
            (t[12] = e))
          : (e = t[12]),
        e
      );
    }
    case `word-document`: {
      let e;
      return (
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(g, {
              id: `review.fileSource.unsupported.wordDocument`,
              defaultMessage: `Word document previews aren't supported yet`,
              description: `Message shown when a workspace file tab cannot preview a Word document`,
            })),
            (t[13] = e))
          : (e = t[13]),
        e
      );
    }
  }
}
var ui,
  Z,
  di = e(() => {
    ((ui = ht()), we(), vn(), Xn(), (Z = at()));
  }),
  fi,
  pi = e(() => {
    fi = `[data-file][data-file-blame-visible] [data-column-number] {
  --codex-file-blame-gutter-width: 10ch;
  min-width: calc(
    var(
        --diffs-min-number-column-width,
        var(--diffs-min-number-column-width-default, 3ch)
      ) +
      var(--codex-file-blame-gutter-width) + 1ch + 3ch
  );
  display: grid;
  grid-template-columns:
    minmax(var(--diffs-min-number-column-width, 3ch), max-content)
    minmax(0, var(--codex-file-blame-gutter-width));
  column-gap: 1ch;
  align-items: baseline;
  overflow: visible;
}

[data-file][data-file-blame-visible] [data-line-number-content] {
  grid-column: 1;
}

[data-file-blame-gutter] {
  --codex-file-blame-tooltip-width: 32ch;
  --codex-file-blame-tooltip-max-width: 42vw;
  position: relative;
  grid-column: 2;
  min-width: 0;
  width: 100%;
  max-width: var(--codex-file-blame-gutter-width);
  display: inline-block;
  overflow: visible;
}

[data-file-blame-gutter]::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 19;
  width: var(--codex-file-blame-tooltip-width);
  max-width: var(--codex-file-blame-tooltip-max-width);
  height: 6px;
  display: none;
}

[data-file-blame-trigger] {
  min-width: 0;
  width: 100%;
  max-width: var(--codex-file-blame-gutter-width);
  display: block;
  border: 0;
  border-radius: 4px;
  padding: 0 0.5ch;
  background: transparent;
  cursor: var(--cursor-interaction);
  font: inherit;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--color-text-tertiary);
}

[data-file-blame-trigger]:hover,
[data-file-blame-trigger][aria-expanded="true"] {
  background: color-mix(in srgb, var(--color-text) 6%, transparent);
  color: var(--color-text);
}

[data-file-blame-trigger]:focus-visible {
  outline: 1px solid var(--color-ring);
  outline-offset: -1px;
}

[data-file-blame-author] {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

[data-file-blame-tooltip] {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 20;
  width: var(--codex-file-blame-tooltip-width);
  max-width: var(--codex-file-blame-tooltip-max-width);
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 8px 10px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-surface-secondary);
  box-shadow: 0 8px 24px rgb(0 0 0 / 16%);
  color: var(--color-text);
  font-family: var(
    --diffs-header-font-family,
    var(--diffs-header-font-fallback)
  );
  font-size: 12px;
  line-height: 1.35;
  text-align: left;
  white-space: normal;
}

[data-file-blame-gutter]:hover [data-file-blame-tooltip],
[data-file-blame-gutter]:focus-within [data-file-blame-tooltip],
[data-file-blame-gutter][data-file-blame-expanded] [data-file-blame-tooltip] {
  display: flex;
}

[data-file-blame-gutter]:hover::after,
[data-file-blame-gutter]:focus-within::after,
[data-file-blame-gutter][data-file-blame-expanded]::after {
  display: block;
}

[data-file-blame-tooltip-title] {
  color: var(--color-text);
  font-weight: 500;
  overflow-wrap: anywhere;
}

[data-file-blame-tooltip-meta] {
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 4px 10px;
}

[data-file-blame-tooltip-label] {
  color: var(--color-text-tertiary);
}

[data-file-blame-tooltip-value] {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text-secondary);
}

[data-file-blame-link] {
  max-width: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  color: var(--color-text-info);
  cursor: var(--cursor-interaction);
  font: inherit;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

[data-file-blame-link]:hover {
  text-decoration: underline;
}

[data-file-blame-link]:focus-visible {
  outline: 1px solid var(--color-ring);
  outline-offset: 2px;
}
`;
  }),
  mi,
  hi = e(() => {
    mi = `[data-file-change-gutter] {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 5px;
}

[data-file][data-file-change-gutter-visible] [data-column-number] {
  position: relative;
}

[data-file-change-gutter-marker] {
  --codex-file-change-gutter-width: 4px;
  position: absolute;
  left: 0;
  width: var(--codex-file-change-gutter-width);
}

[data-file-change-placement="line"][data-file-change-run-start] {
  border-start-start-radius: 999px;
  border-start-end-radius: 999px;
}

[data-file-change-placement="line"][data-file-change-run-end] {
  border-end-start-radius: 999px;
  border-end-end-radius: 999px;
}

[data-file-change-kind="addition"],
[data-file-change-kind="modification"] {
  top: 0;
  bottom: 0;
}

[data-file-change-kind="addition"] {
  background: var(--diffs-addition-color-override);
}

[data-file-change-kind="modification"] {
  background: var(--color-codex-git-modified);
}

[data-file-change-kind="deletion"] {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 6px;
  border-color: transparent transparent transparent
    var(--diffs-deletion-color-override);
  border-radius: 0;
}

[data-file-change-kind="deletion"][data-file-change-placement="before"] {
  top: -5px;
}

[data-file-change-kind="deletion"][data-file-change-placement="after"] {
  bottom: -5px;
}
`;
  });
function gi(e) {
  let t = (0, Li.c)(79),
    {
      cwd: n,
      headerActions: r,
      hostId: i,
      environmentId: a,
      initialColumn: o,
      initialEndLine: s,
      initialLine: c,
      isActive: u,
      onOpenLocation: d,
      onSelectFile: f,
      panelId: p,
      path: m,
      setTabState: h,
      tabId: g,
      tabState: _,
      workspaceRoot: v,
    } = e,
    y = i === void 0 ? Ye : i,
    b = u === void 0 || u,
    C = S(Pt),
    w;
  t[0] !== a || t[1] !== m
    ? ((w =
        a == null || m == null
          ? null
          : { environmentId: a, path: m, contentSampleByteLimit: J, contentSampleMaxFileBytes: l }),
      (t[0] = a),
      (t[1] = m),
      (t[2] = w))
    : (w = t[2]);
  let T = de(null, w),
    E = m ?? ``,
    D;
  t[3] !== y || t[4] !== E
    ? ((D = { hostId: y, path: E, contentSampleByteLimit: J, contentSampleMaxFileBytes: l }),
      (t[3] = y),
      (t[4] = E),
      (t[5] = D))
    : (D = t[5]);
  let O = m != null && !0,
    k;
  t[6] === O ? (k = t[7]) : ((k = { enabled: O }), (t[6] = O), (t[7] = k));
  let A;
  t[8] !== D || t[9] !== k
    ? ((A = { params: D, queryConfig: k }), (t[8] = D), (t[9] = k), (t[10] = A))
    : (A = t[10]);
  let j = It(`read-file-metadata`, A),
    { data: M, isError: N } = T ?? j,
    P;
  if (t[11] !== a || t[12] !== m) {
    let e = m == null ? null : te(m);
    ((P = a == null && e != null && z(e.importKind)), (t[11] = a), (t[12] = m), (t[13] = P));
  } else P = t[13];
  let F = P,
    I;
  t[14] !== M?.contentKind || t[15] !== m
    ? ((I = m == null ? null : re(m, M?.contentKind)),
      (t[14] = M?.contentKind),
      (t[15] = m),
      (t[16] = I))
    : (I = t[16]);
  let R = I,
    B;
  t[17] !== M?.contentKind || t[18] !== m
    ? ((B = m == null ? null : xe(m, M?.contentKind)),
      (t[17] = M?.contentKind),
      (t[18] = m),
      (t[19] = B))
    : (B = t[19]);
  let V = B,
    H = S(U),
    ee = de(x, y),
    W;
  t[20] !== a || t[21] !== ee || t[22] !== m
    ? ((W = m == null || a != null ? null : kt(m, ee)),
      (t[20] = a),
      (t[21] = ee),
      (t[22] = m),
      (t[23] = W))
    : (W = t[23]);
  let G = W,
    ne = Nt(`1420162012`),
    ie = a == null && C === `full` && ne,
    ae = G != null && c == null,
    oe = (V === `toggle` || ae) && c == null,
    se;
  t[24] !== M?.contentKind || t[25] !== m
    ? ((se = m == null ? null : Yt(m, M?.contentKind)),
      (t[24] = M?.contentKind),
      (t[25] = m),
      (t[26] = se))
    : (se = t[26]);
  let ce = se,
    K,
    le = !1,
    fe = !1,
    q = !1,
    pe = !1;
  if (m == null) {
    let e;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(vi, {})), (t[27] = e))
      : (e = t[27]),
      (K = e));
  } else if (N || (M && !M.isFile)) {
    let e;
    (t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Pi, { isError: !0, isLoading: !1 })), (t[28] = e))
      : (e = t[28]),
      (K = e));
  } else if (M == null) {
    let e;
    (t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(Pi, { isError: !1, isLoading: !0 })), (t[29] = e))
      : (e = t[29]),
      (K = e));
  } else if (G != null && oe && H) {
    q = !0;
    let e;
    (t[30] !== y || t[31] !== G || t[32] !== m
      ? ((e = (0, $.jsx)(wi, { fileViewer: G, hostId: y, path: m })),
        (t[30] = y),
        (t[31] = G),
        (t[32] = m),
        (t[33] = e))
      : (e = t[33]),
      (K = e));
  } else if (ce != null) {
    q = ae;
    let e;
    (t[34] === ce ? (e = t[35]) : ((e = (0, $.jsx)(ci, { type: ce })), (t[34] = ce), (t[35] = e)),
      (K = e));
  } else if (M?.sizeBytes != null && ue(M.sizeBytes)) {
    let e;
    (t[36] === M.sizeBytes
      ? (e = t[37])
      : ((e = (0, $.jsx)(Ni, { sizeBytes: M.sizeBytes })), (t[36] = M.sizeBytes), (t[37] = e)),
      (K = e));
  } else if (R != null && (V === `always` || (oe && H))) {
    q = oe;
    let e;
    t[38] !== n || t[39] !== m || t[40] !== R || t[41] !== v
      ? ((e = R === `audio` || R === `video` ? L(n ?? v ?? ``, m) : m),
        (t[38] = n),
        (t[39] = m),
        (t[40] = R),
        (t[41] = v),
        (t[42] = e))
      : (e = t[42]);
    let r;
    (t[43] !== a || t[44] !== ie || t[45] !== y || t[46] !== p || t[47] !== R || t[48] !== e
      ? ((r = (0, $.jsx)(Si, {
          gitBlameFeatureEnabled: ie,
          hostId: y,
          environmentId: a,
          panelId: p,
          path: e,
          previewKind: R,
        })),
        (t[43] = a),
        (t[44] = ie),
        (t[45] = y),
        (t[46] = p),
        (t[47] = R),
        (t[48] = e),
        (t[49] = r))
      : (r = t[49]),
      (K = r));
  } else {
    ((le = ie), (fe = F), (q = oe), (pe = !0));
    let e;
    (t[50] !== n ||
    t[51] !== a ||
    t[52] !== ie ||
    t[53] !== y ||
    t[54] !== o ||
    t[55] !== s ||
    t[56] !== c ||
    t[57] !== b ||
    t[58] !== d ||
    t[59] !== p ||
    t[60] !== m ||
    t[61] !== h ||
    t[62] !== _ ||
    t[63] !== v
      ? ((e = (0, $.jsx)(xi, {
          cwd: n,
          gitBlameFeatureEnabled: ie,
          hostId: y,
          environmentId: a,
          initialColumn: o,
          initialEndLine: s,
          initialLine: c,
          isActive: b,
          onOpenLocation: d,
          panelId: p,
          path: m,
          setTabState: h,
          tabState: _,
          workspaceRoot: v,
        })),
        (t[50] = n),
        (t[51] = a),
        (t[52] = ie),
        (t[53] = y),
        (t[54] = o),
        (t[55] = s),
        (t[56] = c),
        (t[57] = b),
        (t[58] = d),
        (t[59] = p),
        (t[60] = m),
        (t[61] = h),
        (t[62] = _),
        (t[63] = v),
        (t[64] = e))
      : (e = t[64]),
      (K = e));
  }
  let me;
  return (
    t[65] !== n ||
    t[66] !== a ||
    t[67] !== r ||
    t[68] !== y ||
    t[69] !== f ||
    t[70] !== m ||
    t[71] !== K ||
    t[72] !== fe ||
    t[73] !== le ||
    t[74] !== q ||
    t[75] !== pe ||
    t[76] !== g ||
    t[77] !== v
      ? ((me = (0, $.jsx)(_i, {
          cwd: n,
          headerActions: r,
          hostId: y,
          environmentId: a,
          onSelectFile: f,
          path: m,
          showGitBlameControl: le,
          showArtifactPreviewControl: fe,
          showRichPreviewControl: q,
          showWordWrapControl: pe,
          tabId: g,
          workspaceRoot: v,
          children: K,
        })),
        (t[65] = n),
        (t[66] = a),
        (t[67] = r),
        (t[68] = y),
        (t[69] = f),
        (t[70] = m),
        (t[71] = K),
        (t[72] = fe),
        (t[73] = le),
        (t[74] = q),
        (t[75] = pe),
        (t[76] = g),
        (t[77] = v),
        (t[78] = me))
      : (me = t[78]),
    me
  );
}
function _i(e) {
  let t = (0, Li.c)(54),
    {
      children: n,
      cwd: i,
      headerActions: a,
      hostId: o,
      environmentId: s,
      onSelectFile: c,
      path: l,
      showGitBlameControl: u,
      showArtifactPreviewControl: d,
      showRichPreviewControl: f,
      showWordWrapControl: p,
      tabId: m,
      workspaceRoot: h,
    } = e,
    g = d !== void 0 && d,
    _ = f !== void 0 && f,
    v = p !== void 0 && p,
    b = r(tt),
    x = me(),
    C = S(Wt),
    w = S(Vt),
    T = i ?? (C == null ? null : Xe(C)),
    E;
  t[0] !== s || t[1] !== h || t[2] !== w
    ? ((E = s != null && h != null ? [h] : w), (t[0] = s), (t[1] = h), (t[2] = w), (t[3] = E))
    : (E = t[3]);
  let D = E,
    O = l != null && (u || g || _ || v),
    k = S(vt),
    A =
      l == null || s != null
        ? null
        : (0, $.jsx)(Xr, {
            cwd: T,
            hostId: o,
            path: l,
            projectRoot: h ?? Fe({ cwd: T, path: l, workspaceRoots: w }),
          }),
    j;
  t[4] === a
    ? (j = t[5])
    : ((j = a == null ? null : (0, $.jsx)(Q.Fragment, { children: a }, `header-actions`)),
      (t[4] = a),
      (t[5] = j));
  let M;
  t[6] !== T ||
  t[7] !== s ||
  t[8] !== O ||
  t[9] !== o ||
  t[10] !== l ||
  t[11] !== g ||
  t[12] !== u ||
  t[13] !== _ ||
  t[14] !== v ||
  t[15] !== m
    ? ((M =
        l == null
          ? null
          : (0, $.jsx)(
              yi,
              {
                cwd: T,
                hasOptionsMenu: O,
                hostId: o,
                environmentId: s,
                path: l,
                showGitBlameControl: u,
                showArtifactPreviewControl: g,
                showRichPreviewControl: _,
                showWordWrapControl: v,
                tabId: m,
              },
              `file-actions`,
            )),
      (t[6] = T),
      (t[7] = s),
      (t[8] = O),
      (t[9] = o),
      (t[10] = l),
      (t[11] = g),
      (t[12] = u),
      (t[13] = _),
      (t[14] = v),
      (t[15] = m),
      (t[16] = M))
    : (M = t[16]);
  let N;
  t[17] === x
    ? (N = t[18])
    : ((N = x.formatMessage({
        id: `review.fileSource.browser.toggleFileTree`,
        defaultMessage: `Toggle file tree`,
        description: `Accessible label for a button that toggles the workspace file tree`,
      })),
      (t[17] = x),
      (t[18] = N));
  let P = k ? `secondary` : `ghost`,
    F;
  t[19] !== k || t[20] !== b
    ? ((F = () => {
        y(b, !k);
      }),
      (t[19] = k),
      (t[20] = b),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(dt, { "aria-hidden": !0, className: `icon-sm` })), (t[22] = I))
    : (I = t[22]);
  let L;
  t[23] !== N || t[24] !== P || t[25] !== F
    ? ((L = (0, $.jsx)(
        pt,
        {
          "aria-label": N,
          className: `ms-auto`,
          color: P,
          size: `toolbar`,
          uniform: !0,
          onClick: F,
          children: I,
        },
        `open-files-button`,
      )),
      (t[23] = N),
      (t[24] = P),
      (t[25] = F),
      (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] !== L || t[28] !== j || t[29] !== M
    ? ((R = [j, M, L]), (t[27] = L), (t[28] = j), (t[29] = M), (t[30] = R))
    : (R = t[30]);
  let z = R,
    B = s == null ? o : void 0,
    V = h ?? T,
    H;
  t[31] !== T ||
  t[32] !== c ||
  t[33] !== l ||
  t[34] !== A ||
  t[35] !== B ||
  t[36] !== V ||
  t[37] !== z
    ? ((H = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(Jn, {
          cwd: T,
          hostId: B,
          onSelectFile: c,
          path: l,
          pathActions: A,
          trailingContent: z,
          workspaceRoot: V,
        }),
      })),
      (t[31] = T),
      (t[32] = c),
      (t[33] = l),
      (t[34] = A),
      (t[35] = B),
      (t[36] = V),
      (t[37] = z),
      (t[38] = H))
    : (H = t[38]);
  let U = `${o}:${s ?? ``}:${l}`,
    ee;
  t[39] !== n || t[40] !== U
    ? ((ee = (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: n }, U)),
      (t[39] = n),
      (t[40] = U),
      (t[41] = ee))
    : (ee = t[41]);
  let te;
  t[42] !== s || t[43] !== D || t[44] !== o || t[45] !== c || t[46] !== l
    ? ((te =
        c == null
          ? null
          : (0, $.jsx)(zn, {
              activeFilePath: l,
              autoFocusSearch: l == null,
              hostId: o,
              environmentId: s,
              onSelectFile: c,
              roots: D,
              type: `workspace`,
            })),
      (t[42] = s),
      (t[43] = D),
      (t[44] = o),
      (t[45] = c),
      (t[46] = l),
      (t[47] = te))
    : (te = t[47]);
  let W;
  t[48] !== ee || t[49] !== te
    ? ((W = (0, $.jsxs)(`div`, { className: `flex min-h-0 flex-1`, children: [ee, te] })),
      (t[48] = ee),
      (t[49] = te),
      (t[50] = W))
    : (W = t[50]);
  let G;
  return (
    t[51] !== H || t[52] !== W
      ? ((G = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: [H, null, W],
        })),
        (t[51] = H),
        (t[52] = W),
        (t[53] = G))
      : (G = t[53]),
    G
  );
}
function vi() {
  let e = (0, Li.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(yn, {
          className: `h-full min-h-0 p-6`,
          icon: (0, $.jsx)(dt, {}),
          title: (0, $.jsx)(`h2`, {
            children: (0, $.jsx)(g, {
              id: `review.fileSource.browser.heading`,
              defaultMessage: `Open file`,
              description: `Heading for an empty file tab that lets users choose a workspace file`,
            }),
          }),
          description: (0, $.jsx)(g, {
            id: `review.fileSource.browser.description`,
            defaultMessage: `Select a file from the workspace tree`,
            description: `Description for an empty file tab that lets users choose a workspace file`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function yi(e) {
  let t = (0, Li.c)(23),
    {
      cwd: n,
      hasOptionsMenu: i,
      hostId: a,
      environmentId: o,
      path: s,
      showGitBlameControl: c,
      showArtifactPreviewControl: l,
      showRichPreviewControl: u,
      showWordWrapControl: d,
      tabId: f,
    } = e,
    p = r(tt),
    m;
  if (t[0] !== a || t[1] !== s || t[2] !== p) {
    let e = te(s);
    ((m =
      e != null && ut(e.artifactType)
        ? () => {
            if (p.value.routeKind === `local-thread`)
              return At(p, a).ignoreOpenFileChangeEvents(p.value.conversationId, {
                hostId: a,
                path: s,
              });
          }
        : void 0),
      (t[0] = a),
      (t[1] = s),
      (t[2] = p),
      (t[3] = m));
  } else m = t[3];
  let h = m,
    g;
  t[4] !== o ||
  t[5] !== i ||
  t[6] !== a ||
  t[7] !== s ||
  t[8] !== l ||
  t[9] !== c ||
  t[10] !== u ||
  t[11] !== d ||
  t[12] !== f
    ? ((g =
        i &&
        (0, $.jsx)(bi, {
          hostId: a,
          environmentId: o,
          path: s,
          showGitBlameControl: c,
          showArtifactPreviewControl: l,
          showRichPreviewControl: u,
          showWordWrapControl: d,
          tabId: f,
        })),
      (t[4] = o),
      (t[5] = i),
      (t[6] = a),
      (t[7] = s),
      (t[8] = l),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== n || t[15] !== o || t[16] !== h || t[17] !== a || t[18] !== s
    ? ((_ =
        o == null
          ? (0, $.jsx)(fn, {
              cwd: n,
              hostId: a,
              onBeforeOpen: h,
              path: s,
              persistPreferredTarget: !0,
              showLabel: !0,
            })
          : null),
      (t[14] = n),
      (t[15] = o),
      (t[16] = h),
      (t[17] = a),
      (t[18] = s),
      (t[19] = _))
    : (_ = t[19]);
  let v;
  return (
    t[20] !== g || t[21] !== _
      ? ((v = (0, $.jsxs)($.Fragment, { children: [g, _] })), (t[20] = g), (t[21] = _), (t[22] = v))
      : (v = t[22]),
    v
  );
}
function bi(e) {
  let t = (0, Li.c)(68),
    {
      hostId: n,
      environmentId: i,
      path: a,
      showGitBlameControl: o,
      showArtifactPreviewControl: s,
      showRichPreviewControl: c,
      showWordWrapControl: l,
      tabId: u,
    } = e,
    d = r(tt),
    f = me(),
    p = S(A),
    m = S(U),
    h = S(Le),
    [_, v] = (0, Q.useState)(!1),
    y;
  t[0] === f
    ? (y = t[1])
    : ((y = f.formatMessage({
        id: `review.fileSource.options`,
        defaultMessage: `File viewer options`,
        description: `Aria label for the workspace file preview options menu`,
      })),
      (t[0] = f),
      (t[1] = y));
  let b = y,
    x;
  t[2] === h
    ? (x = t[3])
    : ((x = h
        ? (0, $.jsx)(g, {
            id: `review.fileSource.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Menu item to disable word wrap in a workspace file preview`,
          })
        : (0, $.jsx)(g, {
            id: `review.fileSource.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Menu item to enable word wrap in a workspace file preview`,
          })),
      (t[2] = h),
      (t[3] = x));
  let C = x,
    T;
  t[4] === m
    ? (T = t[5])
    : ((T = m
        ? (0, $.jsx)(g, {
            id: `review.fileSource.richPreview.disable`,
            defaultMessage: `Disable rich view`,
            description: `Menu item to disable rich rendering for a workspace file preview`,
          })
        : (0, $.jsx)(g, {
            id: `review.fileSource.richPreview.enable`,
            defaultMessage: `Enable rich view`,
            description: `Menu item to enable rich rendering for a workspace file preview`,
          })),
      (t[4] = m),
      (t[5] = T));
  let E = T,
    D;
  t[6] === p
    ? (D = t[7])
    : ((D = p
        ? (0, $.jsx)(g, {
            id: `review.fileSource.gitBlame.disable`,
            defaultMessage: `Hide git blame`,
            description: `Menu item to hide git blame metadata in a workspace file preview gutter`,
          })
        : (0, $.jsx)(g, {
            id: `review.fileSource.gitBlame.enable`,
            defaultMessage: `Show git blame`,
            description: `Menu item to show git blame metadata in a workspace file preview gutter`,
          })),
      (t[6] = p),
      (t[7] = D));
  let k = D,
    j;
  t[8] === f
    ? (j = t[9])
    : ((j = f.formatMessage({
        id: `review.fileSource.gitBlame.tooltip`,
        defaultMessage: `Show author, date, and commit details in the line gutter`,
        description: `Tooltip for the workspace file preview menu item that toggles git blame metadata in the gutter`,
      })),
      (t[8] = f),
      (t[9] = j));
  let M = j,
    N;
  t[10] !== n || t[11] !== a || t[12] !== d || t[13] !== u
    ? ((N = function (e) {
        (e.preventDefault(), ie(d, a, { hostId: n, tabId: u }) && v(!1));
      }),
      (t[10] = n),
      (t[11] = a),
      (t[12] = d),
      (t[13] = u),
      (t[14] = N))
    : (N = t[14]);
  let P = N,
    F;
  t[15] !== m || t[16] !== d
    ? ((F = function (e) {
        (e.preventDefault(), Ct(d, !m), v(!1));
      }),
      (t[15] = m),
      (t[16] = d),
      (t[17] = F))
    : (F = t[17]);
  let I = F,
    L;
  t[18] !== d || t[19] !== h
    ? ((L = function (e) {
        (e.preventDefault(), d.set(Le, !h), v(!1));
      }),
      (t[18] = d),
      (t[19] = h),
      (t[20] = L))
    : (L = t[20]);
  let z = L,
    B;
  t[21] !== p || t[22] !== d
    ? ((B = function (e) {
        e.preventDefault();
        let t = !p;
        (d.set(A, t), t && Ze(d, O, {}), v(!1));
      }),
      (t[21] = p),
      (t[22] = d),
      (t[23] = B))
    : (B = t[23]);
  let V = B,
    H;
  t[24] === a
    ? (H = t[25])
    : ((H = function (e) {
        (e.preventDefault(), xt(a), v(!1));
      }),
      (t[24] = a),
      (t[25] = H));
  let te = H,
    W;
  t[26] !== i || t[27] !== n || t[28] !== a || t[29] !== d.queryClient
    ? ((W = function (e) {
        (e.preventDefault(), Ke(d.queryClient, { hostId: n, environmentId: i, path: a }), v(!1));
      }),
      (t[26] = i),
      (t[27] = n),
      (t[28] = a),
      (t[29] = d.queryClient),
      (t[30] = W))
    : (W = t[30]);
  let G = W,
    ne;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, $.jsx)(it, { "aria-hidden": !1, asset: Ot })), (t[31] = ne))
    : (ne = t[31]);
  let re;
  t[32] === b
    ? (re = t[33])
    : ((re = (0, $.jsx)(pt, {
        "aria-label": b,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        children: ne,
      })),
      (t[32] = b),
      (t[33] = re));
  let ae;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(g, {
        id: `review.fileSource.copyPath`,
        defaultMessage: `Copy path`,
        description: `Menu item to copy the path of a workspace file preview`,
      })),
      (t[34] = ae))
    : (ae = t[34]);
  let oe;
  t[35] === te
    ? (oe = t[36])
    : ((oe = (0, $.jsx)(R.Item, { onSelect: te, LeftIcon: w, children: ae })),
      (t[35] = te),
      (t[36] = oe));
  let se;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, $.jsx)(g, {
        id: `review.fileSource.copyFileContents`,
        defaultMessage: `Copy file contents`,
        description: `Menu item to copy the contents of a workspace file preview`,
      })),
      (t[37] = se))
    : (se = t[37]);
  let ce;
  t[38] === G
    ? (ce = t[39])
    : ((ce = (0, $.jsx)(R.Item, { onSelect: G, LeftIcon: w, children: se })),
      (t[38] = G),
      (t[39] = ce));
  let K;
  t[40] !== P || t[41] !== s
    ? ((K = s
        ? (0, $.jsx)(R.Item, {
            onSelect: P,
            LeftIcon: he,
            children: (0, $.jsx)(g, {
              id: `review.fileSource.richPreview.enable`,
              defaultMessage: `Enable rich view`,
              description: `Menu item to enable rich rendering for a workspace file preview`,
            }),
          })
        : null),
      (t[40] = P),
      (t[41] = s),
      (t[42] = K))
    : (K = t[42]);
  let ue;
  t[43] !== I || t[44] !== m || t[45] !== E || t[46] !== c
    ? ((ue = c ? (0, $.jsx)(R.Item, { onSelect: I, LeftIcon: m ? le : he, children: E }) : null),
      (t[43] = I),
      (t[44] = m),
      (t[45] = E),
      (t[46] = c),
      (t[47] = ue))
    : (ue = t[47]);
  let de;
  t[48] !== z || t[49] !== l || t[50] !== C || t[51] !== h
    ? ((de = l ? (0, $.jsx)(R.Item, { onSelect: z, LeftIcon: h ? Jt : Oe, children: C }) : null),
      (t[48] = z),
      (t[49] = l),
      (t[50] = C),
      (t[51] = h),
      (t[52] = de))
    : (de = t[52]);
  let fe;
  t[53] !== p || t[54] !== k || t[55] !== M || t[56] !== V || t[57] !== o
    ? ((fe = o
        ? (0, $.jsx)(R.Item, {
            onSelect: V,
            LeftIcon: $n,
            RightIcon: p ? Tt : void 0,
            tooltipText: M,
            children: k,
          })
        : null),
      (t[53] = p),
      (t[54] = k),
      (t[55] = M),
      (t[56] = V),
      (t[57] = o),
      (t[58] = fe))
    : (fe = t[58]);
  let q;
  return (
    t[59] !== _ ||
    t[60] !== re ||
    t[61] !== oe ||
    t[62] !== ce ||
    t[63] !== K ||
    t[64] !== ue ||
    t[65] !== de ||
    t[66] !== fe
      ? ((q = (0, $.jsxs)(ee, {
          open: _,
          onOpenChange: v,
          align: `end`,
          contentWidth: `menu`,
          triggerButton: re,
          children: [oe, ce, K, ue, de, fe],
        })),
        (t[59] = _),
        (t[60] = re),
        (t[61] = oe),
        (t[62] = ce),
        (t[63] = K),
        (t[64] = ue),
        (t[65] = de),
        (t[66] = fe),
        (t[67] = q))
      : (q = t[67]),
    q
  );
}
function xi(e) {
  let t = (0, Li.c)(46),
    {
      cwd: n,
      gitBlameFeatureEnabled: r,
      hostId: i,
      environmentId: a,
      initialColumn: o,
      initialEndLine: s,
      initialLine: c,
      isActive: l,
      onOpenLocation: u,
      panelId: d,
      path: f,
      setTabState: p,
      tabState: m,
      workspaceRoot: h,
    } = e,
    g = l === void 0 || l,
    _ = S(Wt),
    v = n ?? _,
    y = S(Vt),
    b;
  t[0] !== a || t[1] !== f
    ? ((b = a == null ? null : { environmentId: a, path: f }), (t[0] = a), (t[1] = f), (t[2] = b))
    : (b = t[2]);
  let x = de(null, b),
    C;
  t[3] !== i || t[4] !== f
    ? ((C = { hostId: i, path: f }), (t[3] = i), (t[4] = f), (t[5] = C))
    : (C = t[5]);
  let w;
  t[6] === !0 ? (w = t[7]) : ((w = { enabled: !0 }), (t[6] = !0), (t[7] = w));
  let T;
  t[8] !== C || t[9] !== w
    ? ((T = { params: C, queryConfig: w }), (t[8] = C), (t[9] = w), (t[10] = T))
    : (T = t[10]);
  let E = It(`read-file`, T),
    { data: D, isError: O, isLoading: k } = x ?? E;
  if (D == null) {
    let e;
    return (
      t[11] !== O || t[12] !== k
        ? ((e = (0, $.jsx)(Pi, { isError: O, isLoading: k })),
          (t[11] = O),
          (t[12] = k),
          (t[13] = e))
        : (e = t[13]),
      e
    );
  }
  let A = h ?? v,
    j;
  t[14] !== f || t[15] !== A || t[16] !== y
    ? ((j = Fe({ cwd: A, path: f, workspaceRoots: y })),
      (t[14] = f),
      (t[15] = A),
      (t[16] = y),
      (t[17] = j))
    : (j = t[17]);
  let M = j,
    N = g && a == null,
    P = D.contents,
    F;
  t[18] === f ? (F = t[19]) : ((F = en(f)), (t[18] = f), (t[19] = F));
  let I = M ?? v ?? ``,
    R;
  t[20] !== f || t[21] !== I ? ((R = L(I, f)), (t[20] = f), (t[21] = I), (t[22] = R)) : (R = t[22]);
  let z;
  t[23] !== D.contents || t[24] !== i || t[25] !== M || t[26] !== F || t[27] !== R
    ? ((z = { contents: P, hostId: i, languageId: F, path: R, workspaceRoot: M }),
      (t[23] = D.contents),
      (t[24] = i),
      (t[25] = M),
      (t[26] = F),
      (t[27] = R),
      (t[28] = z))
    : (z = t[28]);
  let B;
  t[29] !== a ||
  t[30] !== D.contents ||
  t[31] !== r ||
  t[32] !== i ||
  t[33] !== o ||
  t[34] !== s ||
  t[35] !== c ||
  t[36] !== f ||
  t[37] !== p ||
  t[38] !== m
    ? ((B = (e) =>
        (0, $.jsx)(
          Ti,
          {
            contents: D.contents,
            gitBlameFeatureEnabled: r,
            hostId: i,
            environmentId: a,
            initialColumn: o,
            initialEndLine: s,
            initialLine: c,
            languageFeatures: e,
            path: f,
            setTabState: p,
            tabState: m,
          },
          f,
        )),
      (t[29] = a),
      (t[30] = D.contents),
      (t[31] = r),
      (t[32] = i),
      (t[33] = o),
      (t[34] = s),
      (t[35] = c),
      (t[36] = f),
      (t[37] = p),
      (t[38] = m),
      (t[39] = B))
    : (B = t[39]);
  let V;
  return (
    t[40] !== u || t[41] !== d || t[42] !== z || t[43] !== B || t[44] !== N
      ? ((V = (0, $.jsx)(Kn, {
          isActive: N,
          languageFile: z,
          onOpenLocation: u,
          panelId: d,
          children: B,
        })),
        (t[40] = u),
        (t[41] = d),
        (t[42] = z),
        (t[43] = B),
        (t[44] = N),
        (t[45] = V))
      : (V = t[45]),
    V
  );
}
function Si(e) {
  let t = (0, Li.c)(25),
    {
      gitBlameFeatureEnabled: n,
      hostId: r,
      environmentId: i,
      panelId: a,
      path: o,
      previewKind: s,
    } = e,
    c;
  t[0] !== i || t[1] !== r || t[2] !== o
    ? ((c = { before: null, after: { kind: `worktree`, hostId: r, environmentId: i, path: o } }),
      (t[0] = i),
      (t[1] = r),
      (t[2] = o),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(Pi, { isError: !0, isLoading: !1 })), (t[4] = u))
    : (u = t[4]);
  let d = u;
  switch (s) {
    case `image`: {
      let e;
      return (
        t[5] !== l || t[6] !== a
          ? ((e = (0, $.jsx)(Nn, {
              className: `h-full bg-surface`,
              imagePreview: l,
              panelId: a,
              fallback: d,
              showMissingPreview: !0,
            })),
            (t[5] = l),
            (t[6] = a),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
    case `markdown`: {
      let e;
      t[8] !== i || t[9] !== n || t[10] !== r || t[11] !== o
        ? ((e = (0, $.jsx)(xi, {
            gitBlameFeatureEnabled: n,
            hostId: r,
            environmentId: i,
            path: o,
          })),
          (t[8] = i),
          (t[9] = n),
          (t[10] = r),
          (t[11] = o),
          (t[12] = e))
        : (e = t[12]);
      let a;
      return (
        t[13] !== i || t[14] !== r || t[15] !== o || t[16] !== e
          ? ((a = (0, $.jsx)(On, {
              className: `h-full bg-surface`,
              hostId: r,
              environmentId: i,
              path: o,
              fallback: e,
              scrollable: !0,
            })),
            (t[13] = i),
            (t[14] = r),
            (t[15] = o),
            (t[16] = e),
            (t[17] = a))
          : (a = t[17]),
        a
      );
    }
    case `pdf`: {
      let e;
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Pi, { isError: !1, isLoading: !0 })), (t[18] = e))
        : (e = t[18]);
      let n;
      return (
        t[19] === l
          ? (n = t[20])
          : ((n = (0, $.jsx)(An, {
              className: `h-full bg-surface`,
              imagePreview: l,
              fallback: d,
              loadingFallback: e,
              showMissingPreview: !0,
            })),
            (t[19] = l),
            (t[20] = n)),
        n
      );
    }
    case `audio`:
    case `video`: {
      let e;
      return (
        t[21] !== i || t[22] !== r || t[23] !== o
          ? ((e = (0, $.jsx)(Ci, { hostId: r, environmentId: i, path: o })),
            (t[21] = i),
            (t[22] = r),
            (t[23] = o),
            (t[24] = e))
          : (e = t[24]),
        e
      );
    }
  }
}
function Ci(e) {
  let t = (0, Li.c)(4),
    { hostId: n, environmentId: r, path: i } = e,
    a = (0, Q.useRef)(null),
    o;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((o = (0, $.jsx)(`div`, {
          ref: a,
          className: `flex h-full items-center justify-center`,
          children: (0, $.jsx)(T, {
            allowWide: !0,
            hostId: n,
            environmentId: r,
            maxFileBytes: zi,
            mediaPresentation: `scrollable`,
            rootRef: a,
            src: i,
          }),
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function wi(e) {
  let t = (0, Li.c)(4),
    { fileViewer: n, hostId: r, path: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = (0, $.jsx)(dr, { className: `bg-surface`, filePath: i, fileViewer: n, hostId: r })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Ti(e) {
  let t = (0, Li.c)(231),
    {
      contents: n,
      gitBlameFeatureEnabled: i,
      hostId: o,
      environmentId: s,
      initialColumn: c,
      initialEndLine: l,
      initialLine: u,
      languageFeatures: d,
      path: f,
      setTabState: p,
      tabState: m,
    } = e,
    g = r(tt),
    _ = me(),
    y = S(Wt),
    b;
  t[0] !== y || t[1] !== s
    ? ((b = y == null || s != null ? null : Xe(y)), (t[0] = y), (t[1] = s), (t[2] = b))
    : (b = t[2]);
  let x = b,
    w = S(Vt),
    T = S(A),
    E = S(Pt) === `full` && i && T === !0,
    D = Dt(o),
    O = de(C, f),
    k = S(M),
    j = (0, Q.useRef)(null),
    P = (0, Q.useRef)(null),
    F = (0, Q.useRef)(null),
    I = (0, Q.useRef)(null),
    L;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        (P.current?.abort(), (P.current = null), (I.current = null));
      }),
      (t[3] = L))
    : (L = t[3]);
  let R = ye(L),
    z = (0, Q.useRef)(!1),
    B = (0, Q.useRef)(m),
    [V] = (0, Q.useState)(Oi),
    H = Kt(),
    [U, ee] = (0, Q.useState)(null),
    [te, W] = (0, Q.useState)(null),
    G,
    ne;
  (t[4] === R
    ? ((G = t[5]), (ne = t[6]))
    : ((G = () => () => {
        (R(), (F.current = null));
      }),
      (ne = [R]),
      (t[4] = R),
      (t[5] = G),
      (t[6] = ne)),
    (0, Q.useEffect)(G, ne));
  let re;
  t[7] === f ? (re = t[8]) : ((re = { path: f }), (t[7] = f), (t[8] = re));
  let ie = mn(re),
    ae;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (e) => {
        if (e == null) return;
        let t = rr(e);
        ee((e) => (e != null && ir(e, t) ? e : t));
      }),
      (t[9] = ae))
    : (ae = t[9]);
  let oe = ae,
    se;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (e, t) => {
        oe(t);
      }),
      (t[10] = se))
    : (se = t[10]);
  let ce = gt(se),
    K;
  t[11] === ce
    ? (K = t[12])
    : ((K = (e) => {
        (ce(e), oe(e));
      }),
      (t[11] = ce),
      (t[12] = K));
  let le = K,
    ue;
  t[13] !== x || t[14] !== f
    ? ((ue = (e) => ({ cwd: x ?? Xe(e.root), operationSource: `review_model`, path: f })),
      (t[13] = x),
      (t[14] = f),
      (t[15] = ue))
    : (ue = t[15]);
  let fe = E && x != null,
    q;
  t[16] === fe
    ? (q = t[17])
    : ((q = { enabled: fe, staleTime: Bt.FIVE_SECONDS }), (t[16] = fe), (t[17] = q));
  let { data: pe } = a(x, D, `blame-file`, ue, `review_model`, q),
    he = E && pe?.type === `success` ? pe : null,
    ve;
  bb0: {
    if (he == null) {
      ve = null;
      break bb0;
    }
    let e;
    if (t[18] !== he.lines) {
      e = new Map();
      for (let t of he.lines) e.set(t.lineNumber, t);
      ((t[18] = he.lines), (t[19] = e));
    } else e = t[19];
    ve = e;
  }
  let xe = ve,
    Se = he?.repositoryWebUrl ?? null;
  O?.diff;
  let we = O?.diff ?? null,
    Te;
  t[20] === we ? (Te = t[21]) : ((Te = Wr(we)), (t[20] = we), (t[21] = Te));
  let Ee = Te,
    De = te?.path === f ? te.lineNumber : null,
    Oe = (0, Q.useRef)(null),
    ke = (0, Q.useRef)(null),
    Ae = N(je()),
    Me;
  t[22] === g.value
    ? (Me = t[23])
    : ((Me = Gt(g.value) ?? _e({ entrypoint: `home` })), (t[22] = g.value), (t[23] = Me));
  let Pe = Me,
    Ie = S(Ut) !== `last-turn`,
    Re;
  t[24] === g.value ? (Re = t[25]) : ((Re = Rt(g.value)), (t[24] = g.value), (t[25] = Re));
  let ze;
  t[26] !== Pe || t[27] !== Ie || t[28] !== Re
    ? ((ze = { conversationId: Pe, enablePullRequestComments: Ie, localConversationId: Re }),
      (t[26] = Pe),
      (t[27] = Ie),
      (t[28] = Re),
      (t[29] = ze))
    : (ze = t[29]);
  let { commentProps: Be } = Rn(ze),
    Ve;
  t[30] !== n || t[31] !== u
    ? ((Ve =
        u == null
          ? null
          : Math.max(
              1,
              Math.min(
                u,
                n.split(`
`).length,
              ),
            )),
      (t[30] = n),
      (t[31] = u),
      (t[32] = Ve))
    : (Ve = t[32]);
  let He = Ve,
    Ue;
  t[33] !== l || t[34] !== He
    ? ((Ue = He == null ? null : { end: l ?? He, start: He }),
      (t[33] = l),
      (t[34] = He),
      (t[35] = Ue))
    : (Ue = t[35]);
  let We = Ue,
    J = `${f}:${u ?? ``}:${l ?? ``}`,
    [Ge, Ke] = (0, Q.useState)(null),
    qe = Ge?.key === J ? Ge.lines : We,
    Je;
  t[36] === n ? (Je = t[37]) : ((Je = Un(n)), (t[36] = n), (t[37] = Je));
  let Ye = Je,
    Ze = S(Le),
    Qe = ge(Ne.lightCodeThemeId),
    $e = ge(Ne.darkCodeThemeId),
    et = be(),
    nt;
  t[38] !== Ae || t[39] !== $e || t[40] !== Qe
    ? ((nt = Ae === `light` ? h(Qe, `light`) : h($e, `dark`)),
      (t[38] = Ae),
      (t[39] = $e),
      (t[40] = Qe),
      (t[41] = nt))
    : (nt = t[41]);
  let it = nt;
  Ce(void 0);
  let at;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = () => j.current), (t[42] = at))
    : (at = t[42]);
  let ot = ye(at),
    st;
  t[43] !== R || t[44] !== n || t[45] !== ot || t[46] !== f || t[47] !== H
    ? ((st = $r({
        contents: n,
        getFileContainer: ot,
        onScrollToLocation: R,
        path: f,
        windowZoom: H,
      })),
      (t[43] = R),
      (t[44] = n),
      (t[45] = ot),
      (t[46] = f),
      (t[47] = H),
      (t[48] = st))
    : (st = t[48]);
  let ct = st,
    lt;
  t[49] === f ? (lt = t[50]) : ((lt = sr(f)), (t[49] = f), (t[50] = lt));
  let ut = lt,
    dt;
  t[51] === o ? (dt = t[52]) : ((dt = rt(o)), (t[51] = o), (t[52] = dt));
  let ft;
  t[53] === f ? (ft = t[54]) : ((ft = rt(f)), (t[53] = f), (t[54] = ft));
  let pt;
  t[55] === n ? (pt = t[56]) : ((pt = rt(n)), (t[55] = n), (t[56] = pt));
  let mt = `review-file-source:${dt}:${ft}:${pt}`,
    ht;
  t[57] !== n || t[58] !== ut || t[59] !== f || t[60] !== mt
    ? ((ht = { cacheKey: mt, contents: n, name: f, lang: ut }),
      (t[57] = n),
      (t[58] = ut),
      (t[59] = f),
      (t[60] = mt),
      (t[61] = ht))
    : (ht = t[61]);
  let _t = ht,
    vt;
  t[62] === n ? (vt = t[63]) : ((vt = Ii(n)), (t[62] = n), (t[63] = vt));
  let yt = vt,
    bt;
  t[64] !== y || t[65] !== f || t[66] !== w
    ? ((bt = Fe({ cwd: y, path: f, workspaceRoots: w })),
      (t[64] = y),
      (t[65] = f),
      (t[66] = w),
      (t[67] = bt))
    : (bt = t[67]);
  let St;
  t[68] === J
    ? (St = t[69])
    : ((St = () => {
        Ke({ key: J, lines: null });
      }),
      (t[68] = J),
      (t[69] = St));
  let Ct;
  t[70] !== Be || t[71] !== Pe || t[72] !== x || t[73] !== f || t[74] !== bt || t[75] !== St
    ? ((Ct = {
        cwd: x,
        diffPath: f,
        workspaceRoot: bt,
        onSelectionClear: St,
        conversationId: Pe,
        ...Be,
      }),
      (t[70] = Be),
      (t[71] = Pe),
      (t[72] = x),
      (t[73] = f),
      (t[74] = bt),
      (t[75] = St),
      (t[76] = Ct))
    : (Ct = t[76]);
  let {
      annotations: wt,
      annotationKeys: Tt,
      addDraftComment: Et,
      renderCommentAnnotation: Ot,
    } = Tn(Ct),
    kt;
  t[77] === wt ? (kt = t[78]) : ((kt = wn(wt)), (t[77] = wt), (t[78] = kt));
  let At = kt,
    jt;
  t[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = function () {
        ke.current = null;
      }),
      (t[79] = jt))
    : (jt = t[79]);
  let Mt = jt,
    Nt;
  t[80] !== s || t[81] !== x || t[82] !== o || t[83] !== f
    ? ((Nt = function (e) {
        let { event: t, lineNumber: n } = e;
        s != null || !(t.metaKey || t.ctrlKey) || v({ cwd: x, hostId: o, line: n, path: f });
      }),
      (t[80] = s),
      (t[81] = x),
      (t[82] = o),
      (t[83] = f),
      (t[84] = Nt))
    : (Nt = t[84]);
  let It = Nt,
    Lt;
  t[85] !== Et || t[86] !== Tt
    ? ((Lt = function (e, t) {
        Tt.has(En(`additions`, e)) ||
          Et({
            side: `additions`,
            lineNumber: e,
            ...(t != null && t !== e ? { startLine: t } : {}),
          });
      }),
      (t[85] = Et),
      (t[86] = Tt),
      (t[87] = Lt))
    : (Lt = t[87]);
  let zt = Lt,
    Ht;
  t[88] !== zt || t[89] !== J
    ? ((Ht = function (e) {
        let t = Math.max(e.start, e.end);
        (Ke({ key: J, lines: e }), zt(t, Math.min(e.start, e.end)));
      }),
      (t[88] = zt),
      (t[89] = J),
      (t[90] = Ht))
    : (Ht = t[90]);
  let qt = Ht,
    Jt;
  t[91] === zt
    ? (Jt = t[92])
    : ((Jt = function () {
        let e = Oe.current ?? ke.current?.lineNumber;
        ((Oe.current = null), e != null && zt(e));
      }),
      (t[91] = zt),
      (t[92] = Jt));
  let Yt = Jt,
    Xt;
  t[93] !== R || t[94] !== H
    ? ((Xt = function (e) {
        let t = j.current;
        if (t == null) return;
        R();
        let n = new AbortController();
        ((P.current = n),
          ei(t, e, H, { signal: n.signal }).finally(() => {
            P.current === n && (P.current = null);
          }));
      }),
      (t[93] = R),
      (t[94] = H),
      (t[95] = Xt))
    : (Xt = t[95]);
  let Zt = Xt,
    Qt;
  t[96] !== Zt || t[97] !== J || t[98] !== Ye
    ? ((Qt = function (e) {
        let t = Math.min(Math.max(e, 1), Ye);
        (Ke({ key: J, lines: { start: t, end: t } }), Zt(t));
      }),
      (t[96] = Zt),
      (t[97] = J),
      (t[98] = Ye),
      (t[99] = Qt))
    : (Qt = t[99]);
  let en = Qt,
    nn;
  t[100] === en
    ? (nn = t[101])
    : ((nn = function (e) {
        ((F.current = null), en(e));
      }),
      (t[100] = en),
      (t[101] = nn));
  let rn = nn,
    an;
  t[102] === en
    ? (an = t[103])
    : ((an = function (e) {
        (F.current != null && (F.current.didNavigate = !0), en(e));
      }),
      (t[102] = en),
      (t[103] = an));
  let on = an,
    ln;
  t[104] === qe
    ? (ln = t[105])
    : ((ln = function () {
        F.current = { didNavigate: !1, lines: qe, scrollTop: j.current?.scrollTop ?? null };
      }),
      (t[104] = qe),
      (t[105] = ln));
  let un = ln,
    dn;
  t[106] !== R || t[107] !== Zt || t[108] !== J
    ? ((dn = function () {
        let e = F.current;
        if (((F.current = null), !(e == null || !e.didNavigate)))
          if ((Ke({ key: J, lines: e.lines }), e.scrollTop != null)) {
            R();
            let t = j.current;
            t != null && ((I.current = e.scrollTop), Ai(t, e.scrollTop));
          } else e.lines != null && Zt(Math.max(e.lines.start, e.lines.end));
      }),
      (t[106] = R),
      (t[107] = Zt),
      (t[108] = J),
      (t[109] = dn))
    : (dn = t[109]);
  let fn = dn,
    pn;
  t[110] === Ot
    ? (pn = t[111])
    : ((pn = function (e) {
        return Ot(xn(e));
      }),
      (t[110] = Ot),
      (t[111] = pn));
  let hn = pn,
    gn;
  t[112] === d
    ? (gn = t[113])
    : ((gn = function (e) {
        d.onContextMenu(e);
        let t =
          typeof e.nativeEvent.composedPath == `function`
            ? e.nativeEvent.composedPath()
            : [e.target];
        Oe.current = Sn(t);
      }),
      (t[112] = d),
      (t[113] = gn));
  let _n = gn,
    vn;
  t[114] !== xe || t[115] !== Se || t[116] !== De || t[117] !== _ || t[118] !== f
    ? ((vn = (e) => {
        Pr(
          e,
          xe,
          Se,
          De,
          {
            author: _.formatMessage({
              id: `review.fileSource.gitBlame.tooltip.author`,
              defaultMessage: `Author`,
              description: `Label for the author row in the git blame tooltip`,
            }),
            commit: _.formatMessage({
              id: `review.fileSource.gitBlame.tooltip.commit`,
              defaultMessage: `Commit`,
              description: `Label for the commit row in the git blame tooltip`,
            }),
            date: _.formatMessage({
              id: `review.fileSource.gitBlame.tooltip.date`,
              defaultMessage: `Date`,
              description: `Label for the date row in the git blame tooltip`,
            }),
            pullRequest: _.formatMessage({
              id: `review.fileSource.gitBlame.tooltip.pullRequest`,
              defaultMessage: `PR`,
              description: `Label for the pull request row in the git blame tooltip`,
            }),
          },
          Di,
          (e) => {
            W((t) => (t?.path === f && t.lineNumber === e ? null : { path: f, lineNumber: e }));
          },
        );
      }),
      (t[114] = xe),
      (t[115] = Se),
      (t[116] = De),
      (t[117] = _),
      (t[118] = f),
      (t[119] = vn))
    : (vn = t[119]);
  let yn = vn,
    bn = (0, Q.useRef)(null),
    Cn;
  t[120] === p
    ? (Cn = t[121])
    : ((Cn = (e) => {
        let t = Mi(e);
        if (!t || !(t instanceof HTMLElement)) return;
        bn.current?.();
        let n = (e) => {
          let { target: t } = e;
          if (!t || !(t instanceof HTMLElement)) return;
          let { scrollLeft: n } = t;
          p?.((e) => ({ ...e, scrollLeft: n }));
        };
        (t.addEventListener(`scroll`, n), (bn.current = () => t.removeEventListener(`scroll`, n)));
      }),
      (t[120] = p),
      (t[121] = Cn));
  let Dn = ye(Cn),
    On;
  t[122] !== c || t[123] !== u || t[124] !== He || t[125] !== H
    ? ((On = (e) => {
        let t = j.current,
          n = Mi(e);
        if (!t || !n || z.current) return;
        let { scrollLeft: r, scrollTop: i } = B.current ?? {};
        requestAnimationFrame(() => {
          let a = u == null || c == null || Gn(e, u, c);
          if (r != null || i != null) {
            let e = i == null || Ai(t, i),
              o = r == null || ji(n, r);
            z.current = e && o && a;
          } else He != null && ((z.current = a), ei(t, He, H));
        });
      }),
      (t[122] = c),
      (t[123] = u),
      (t[124] = He),
      (t[125] = H),
      (t[126] = On))
    : (On = t[126]);
  let kn = ye(On),
    An;
  t[127] === p
    ? (An = t[128])
    : ((An = function (e) {
        let { scrollTop: t } = e.currentTarget,
          n = I.current;
        if (n != null && t !== n) {
          Ai(e.currentTarget, n);
          return;
        }
        p?.((e) => ({ ...e, scrollTop: t }));
      }),
      (t[127] = p),
      (t[128] = An));
  let jn = An,
    Mn,
    Nn;
  (t[129] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mn = () => () => {
        bn.current?.();
      }),
      (Nn = []),
      (t[129] = Mn),
      (t[130] = Nn))
    : ((Mn = t[129]), (Nn = t[130])),
    (0, Q.useEffect)(Mn, Nn));
  let Fn;
  t[131] !== Dn || t[132] !== Ee || t[133] !== kn || t[134] !== ie || t[135] !== yn
    ? ((Fn = (e) => {
        (Dn(e), kn(e), ie(e), Gr(e, Ee), yn(e));
        let t = I.current;
        t != null && Ai(j.current, t);
      }),
      (t[131] = Dn),
      (t[132] = Ee),
      (t[133] = kn),
      (t[134] = ie),
      (t[135] = yn),
      (t[136] = Fn))
    : (Fn = t[136]);
  let In = Fn,
    Ln,
    zn;
  (t[137] !== Ee || t[138] !== yn
    ? ((Ln = () => {
        let e = j.current?.querySelector(`diffs-container`) ?? null;
        e != null && (Gr(e, Ee), yn(e));
      }),
      (zn = [Ee, yn]),
      (t[137] = Ee),
      (t[138] = yn),
      (t[139] = Ln),
      (t[140] = zn))
    : ((Ln = t[139]), (zn = t[140])),
    (0, Q.useEffect)(Ln, zn));
  let Bn;
  t[141] === V
    ? (Bn = t[142])
    : ((Bn = (e) => {
        if (e?.parentElement != null) {
          V.setup(e.parentElement, e);
          return;
        }
        V.cleanUp();
      }),
      (t[141] = V),
      (t[142] = Bn));
  let Vn = Bn,
    Hn;
  t[143] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Hn = (e) => {
        let { lineNumber: t } = e;
        ke.current = { lineNumber: t };
      }),
      (t[143] = Hn))
    : (Hn = t[143]);
  let Wn;
  t[144] === J
    ? (Wn = t[145])
    : ((Wn = (e) => {
        Ke({ key: J, lines: e });
      }),
      (t[144] = J),
      (t[145] = Wn));
  let Kn = Ze ? `wrap` : `scroll`,
    Jn;
  t[146] !== It || t[147] !== d.definitionNavigationEnabled || t[148] !== d.fileOptions
    ? ((Jn = {
        onLineClick: d.definitionNavigationEnabled ? void 0 : It,
        onLineNumberClick: It,
        ...d.fileOptions,
      }),
      (t[146] = It),
      (t[147] = d.definitionNavigationEnabled),
      (t[148] = d.fileOptions),
      (t[149] = Jn))
    : (Jn = t[149]);
  let Yn = it.name,
    Xn = Ae,
    Zn;
  t[150] !== qt ||
  t[151] !== Mt ||
  t[152] !== In ||
  t[153] !== Hn ||
  t[154] !== Wn ||
  t[155] !== Kn ||
  t[156] !== Jn ||
  t[157] !== Yn ||
  t[158] !== Xn
    ? ((Zn = {
        disableFileHeader: !0,
        enableGutterUtility: !0,
        enableLineSelection: !0,
        onGutterUtilityClick: qt,
        onLineEnter: Hn,
        onLineLeave: Mt,
        onLineSelected: Wn,
        onPostRender: In,
        overflow: Kn,
        ...Jn,
        theme: Yn,
        themeType: Xn,
        unsafeCSS: Bi,
      }),
      (t[150] = qt),
      (t[151] = Mt),
      (t[152] = In),
      (t[153] = Hn),
      (t[154] = Wn),
      (t[155] = Kn),
      (t[156] = Jn),
      (t[157] = Yn),
      (t[158] = Xn),
      (t[159] = Zn))
    : (Zn = t[159]);
  let Qn = Zn,
    $n = s == null,
    er;
  t[160] !== x || t[161] !== D || t[162] !== f
    ? ((er = x == null ? null : { cwd: x, hostConfig: D, path: f }),
      (t[160] = x),
      (t[161] = D),
      (t[162] = f),
      (t[163] = er))
    : (er = t[163]);
  let tr;
  t[164] === f
    ? (tr = t[165])
    : ((tr = () => {
        xt(f);
      }),
      (t[164] = f),
      (t[165] = tr));
  let nr;
  t[166] !== g || t[167] !== Ze
    ? ((nr = () => {
        g.set(Le, !Ze);
      }),
      (t[166] = g),
      (t[167] = Ze),
      (t[168] = nr))
    : (nr = t[168]);
  let ar = et ? `dark` : `light`,
    or;
  t[169] === k
    ? (or = t[170])
    : ((or = k ? { paddingBottom: $t } : void 0), (t[169] = k), (t[170] = or));
  let cr;
  t[171] === g
    ? (cr = t[172])
    : ((cr = () => {
        Ft(g, `diff`);
      }),
      (t[171] = g),
      (t[172] = cr));
  let lr;
  t[173] !== R || t[174] !== g
    ? ((lr = (e) => {
        (R(),
          Ft(g, `diff`),
          e.button === 0 && j.current?.closest(`[role="tabpanel"]`)?.focus({ preventScroll: !0 }));
      }),
      (t[173] = R),
      (t[174] = g),
      (t[175] = lr))
    : (lr = t[175]);
  let ur;
  t[176] === R
    ? (ur = t[177])
    : ((ur = (e) => {
        e.key !== `Escape` && R();
      }),
      (t[176] = R),
      (t[177] = ur));
  let dr;
  t[178] !== Ae ||
  t[179] !== yt ||
  t[180] !== fn ||
  t[181] !== rn ||
  t[182] !== un ||
  t[183] !== on ||
  t[184] !== it ||
  t[185] !== Ye ||
  t[186] !== U
    ? ((dr =
        U == null
          ? null
          : (0, $.jsx)($.Fragment, {
              children: (0, $.jsx)(qn, {
                appearance: `pierre`,
                getKeyboardOwner: () => j.current?.closest(`[role="tabpanel"]`) ?? null,
                getLineCount: () => Ye,
                onCancelPreview: fn,
                onGoToLine: rn,
                onOpen: un,
                onPreviewLine: on,
                pierreThemeKey: `${Ae}:${it.name}:${U.lineHeight}:${yt}`,
                restoreFocus: () => {
                  j.current?.closest(`[role="tabpanel"]`)?.focus({ preventScroll: !0 });
                },
              }),
            })),
      (t[178] = Ae),
      (t[179] = yt),
      (t[180] = fn),
      (t[181] = rn),
      (t[182] = un),
      (t[183] = on),
      (t[184] = it),
      (t[185] = Ye),
      (t[186] = U),
      (t[187] = dr))
    : (dr = t[187]);
  let fr;
  t[188] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fr = {
        fontFamily: `var(--diffs-font-family)`,
        fontSize: `var(--diffs-font-size)`,
        height: `var(--diffs-line-height)`,
        lineHeight: `var(--diffs-line-height)`,
      }),
      (t[188] = fr))
    : (fr = t[188]);
  let pr;
  t[189] !== le || t[190] !== H
    ? ((pr = (0, $.jsx)(
        `span`,
        {
          ref: le,
          "aria-hidden": !0,
          "data-review-file-source-metrics-probe": ``,
          className: `pointer-events-none invisible absolute top-0 left-0 block whitespace-pre`,
          style: fr,
        },
        H,
      )),
      (t[189] = le),
      (t[190] = H),
      (t[191] = pr))
    : (pr = t[191]);
  let mr;
  t[192] === ct
    ? (mr = t[193])
    : ((mr = (0, $.jsx)(ki, { sourceSearchSource: ct })), (t[192] = ct), (t[193] = mr));
  let hr;
  t[194] !== yt ||
  t[195] !== At ||
  t[196] !== _t ||
  t[197] !== Qn ||
  t[198] !== hn ||
  t[199] !== qe ||
  t[200] !== U
    ? ((hr =
        U == null
          ? null
          : (0, $.jsx)(tn, {
              children: (0, $.jsx)(
                sn,
                {
                  disableWorkerPool: yt,
                  file: _t,
                  lineAnnotations: At,
                  metrics: U,
                  renderAnnotation: hn,
                  selectedLines: qe,
                  options: Qn,
                },
                `${U.lineHeight}:${yt}`,
              ),
            })),
      (t[194] = yt),
      (t[195] = At),
      (t[196] = _t),
      (t[197] = Qn),
      (t[198] = hn),
      (t[199] = qe),
      (t[200] = U),
      (t[201] = hr))
    : (hr = t[201]);
  let gr;
  t[202] !== f || t[203] !== Vn || t[204] !== hr
    ? ((gr = (0, $.jsx)(`div`, { ref: Vn, "data-review-path": f, children: hr })),
      (t[202] = f),
      (t[203] = Vn),
      (t[204] = hr),
      (t[205] = gr))
    : (gr = t[205]);
  let _r;
  t[206] !== R ||
  t[207] !== _n ||
  t[208] !== Mt ||
  t[209] !== jn ||
  t[210] !== ar ||
  t[211] !== or ||
  t[212] !== cr ||
  t[213] !== lr ||
  t[214] !== ur ||
  t[215] !== dr ||
  t[216] !== pr ||
  t[217] !== mr ||
  t[218] !== gr
    ? ((_r = (0, $.jsxs)(`div`, {
        ref: j,
        className: `h-full overflow-auto bg-surface`,
        "data-theme": ar,
        style: or,
        onContextMenu: _n,
        onFocusCapture: cr,
        onMouseDownCapture: lr,
        onKeyDownCapture: ur,
        onMouseLeave: Mt,
        onScroll: jn,
        onWheelCapture: R,
        children: [dr, pr, mr, gr],
      })),
      (t[206] = R),
      (t[207] = _n),
      (t[208] = Mt),
      (t[209] = jn),
      (t[210] = ar),
      (t[211] = or),
      (t[212] = cr),
      (t[213] = lr),
      (t[214] = ur),
      (t[215] = dr),
      (t[216] = pr),
      (t[217] = mr),
      (t[218] = gr),
      (t[219] = _r))
    : (_r = t[219]);
  let vr;
  t[220] !== Yt ||
  t[221] !== d.getContextMenuItems ||
  t[222] !== $n ||
  t[223] !== er ||
  t[224] !== tr ||
  t[225] !== nr ||
  t[226] !== _r
    ? ((vr = (0, $.jsx)(Pn, {
        canOpenFile: $n,
        githubFileLookup: er,
        getPriorityItems: d.getContextMenuItems,
        onRequestChanges: Yt,
        onCopyPath: tr,
        onToggleWrap: nr,
        handleOpenInTarget: Ei,
        children: _r,
      })),
      (t[220] = Yt),
      (t[221] = d.getContextMenuItems),
      (t[222] = $n),
      (t[223] = er),
      (t[224] = tr),
      (t[225] = nr),
      (t[226] = _r),
      (t[227] = vr))
    : (vr = t[227]);
  let yr;
  return (
    t[228] !== vr || t[229] !== V
      ? ((yr = (0, $.jsx)(cn.Provider, { value: V, children: vr })),
        (t[228] = vr),
        (t[229] = V),
        (t[230] = yr))
      : (yr = t[230]),
    yr
  );
}
function Ei(e) {}
function Di(e, t) {
  fe({ event: t, href: e, initiator: `pull_request_link` });
}
function Oi() {
  return new mt();
}
function ki(e) {
  let t = (0, Li.c)(4),
    { sourceSearchSource: n } = e,
    i = r(tt),
    a,
    o;
  return (
    t[0] !== i || t[1] !== n
      ? ((a = () => {
          let e = i.get(Re);
          return (
            i.set(Re, n),
            Ft(i, `diff`),
            () => {
              i.get(Re) === n && i.set(Re, e);
            }
          );
        }),
        (o = [i, n]),
        (t[0] = i),
        (t[1] = n),
        (t[2] = a),
        (t[3] = o))
      : ((a = t[2]), (o = t[3])),
    (0, Q.useEffect)(a, o),
    null
  );
}
function Ai(e, t) {
  return t == null ? !0 : e == null ? !1 : ((e.scrollTop = t), e.scrollTop === t);
}
function ji(e, t) {
  return t == null ? !0 : e == null ? !1 : ((e.scrollLeft = t), e.scrollLeft === t);
}
function Mi(e) {
  return e.shadowRoot?.querySelector(`[data-code]`) ?? null;
}
function Ni(e) {
  let t = (0, Li.c)(7),
    { sizeBytes: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(Zn, { "aria-hidden": !0 })),
      (i = (0, $.jsx)(g, {
        id: `review.fileSource.tooLarge`,
        defaultMessage: `File is too large to preview`,
        description: `Message shown when a workspace file tab blocks previewing a large file`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = Fi(l)), (t[2] = a)) : (a = t[2]);
  let o;
  t[3] === n ? (o = t[4]) : ((o = Fi(n)), (t[3] = n), (t[4] = o));
  let s;
  return (
    t[5] === o
      ? (s = t[6])
      : ((s = (0, $.jsx)(yn, {
          className: `h-full min-h-0 px-4`,
          icon: r,
          title: i,
          description: (0, $.jsx)(g, {
            id: `review.fileSource.tooLargeDetail`,
            defaultMessage: `{size} exceeds the {limit} preview limit`,
            description: `Detail shown when a workspace file tab blocks previewing a large file`,
            values: { limit: a, size: o },
          }),
        })),
        (t[5] = o),
        (t[6] = s)),
    s
  );
}
function Pi(e) {
  let t = (0, Li.c)(2),
    { isError: n, isLoading: r } = e;
  if (r && !n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`div`, {
            className: `flex h-full items-center justify-center px-4 text-sm text-codex-description`,
            children: (0, $.jsx)(g, {
              id: `review.fileSource.loading`,
              defaultMessage: `Loading file…`,
              description: `Loading message shown while a workspace file tab loads file contents`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  return (
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(yn, {
          className: `h-full min-h-0 px-4`,
          icon: (0, $.jsx)(Zn, {}),
          title: (0, $.jsx)(g, {
            id: `review.fileSource.error`,
            defaultMessage: `Unable to load file`,
            description: `Error shown when a workspace file tab cannot load file contents`,
          }),
        })),
        (t[1] = i))
      : (i = t[1]),
    i
  );
}
function Fi(e) {
  return e >= 1024 * 1024
    ? `${(e / (1024 * 1024)).toFixed(1)} MB`
    : e >= 1024
      ? `${(e / 1024).toFixed(1)} KB`
      : `${e} B`;
}
function Ii(e) {
  let t = 1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e.charCodeAt(n);
    if (
      !(r !== 10 && r !== 13) &&
      (r === 13 && e.charCodeAt(n + 1) === 10 && (n += 1), (t += 1), t > Ri)
    )
      return !0;
  }
  return !1;
}
var Li,
  Q,
  $,
  Ri,
  zi,
  Bi,
  Vi = e(() => {
    ((Li = ht()),
      Je(),
      V(),
      nt(),
      an(),
      pe(),
      u(),
      (Q = t(c(), 1)),
      we(),
      st(),
      ke(),
      Lt(),
      We(),
      pn(),
      wt(),
      I(),
      jt(),
      gn(),
      o(),
      vn(),
      ze(),
      oe(),
      et(),
      Cn(),
      ln(),
      Dn(),
      Pe(),
      jn(),
      kn(),
      Fn(),
      ur(),
      Qt(),
      Mn(),
      bn(),
      In(),
      n(),
      Qe(),
      Yn(),
      Vn(),
      Te(),
      _(),
      B(),
      P(),
      Xn(),
      K(),
      Qn(),
      E(),
      q(),
      j(),
      f(),
      F(),
      ot(),
      mr(),
      ct(),
      ve(),
      b(),
      Mt(),
      Ht(),
      Ue(),
      Et(),
      W(),
      Ge(),
      Me(),
      m(),
      on(),
      _t(),
      Xt(),
      zt(),
      k(),
      Ee(),
      ne(),
      Be(),
      Ve(),
      He(),
      Bn(),
      Hn(),
      bt(),
      nr(),
      Hr(),
      Yr(),
      D(),
      Wn(),
      Qr(),
      p(),
      si(),
      s(),
      di(),
      Ln(),
      se(),
      pi(),
      hi(),
      ($ = at()),
      (Ri = 738),
      (zi = l / 2),
      (Bi = `${rn({ includeDiffHeader: !1, includeSimpleLineSeparators: !1, rootSelector: `[data-file]`, surface: `var(--color-surface)` })}
${fi}
${mi}
`));
  });
export { Vi as n, gi as t };
//# sourceMappingURL=review-file-source-item-c54b527a729c.js.map
