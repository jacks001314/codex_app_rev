import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $G as n,
  A3t as r,
  A7 as i,
  AMt as a,
  Amn as o,
  Aw as s,
  B6t as c,
  BO as l,
  BS as u,
  Bp as d,
  Bqt as f,
  CP as p,
  Cpn as m,
  D1 as h,
  D8t as g,
  DMt as _,
  Dht as v,
  Dmn as y,
  Dqt as b,
  E$ as x,
  E1 as S,
  EG as C,
  Eqt as w,
  F3t as T,
  FO as E,
  GKt as D,
  HYt as O,
  Hu as k,
  IXt as A,
  JG as j,
  JK as M,
  JS as N,
  KG as P,
  KXt as ee,
  KYt as te,
  Kyt as F,
  N3t as ne,
  O3t as I,
  OMt as re,
  OW as L,
  Omn as R,
  Opn as ie,
  Oqt as ae,
  Ow as oe,
  PO as se,
  Pqt as ce,
  QG as le,
  QKt as ue,
  QXt as z,
  Qu as de,
  Qz as fe,
  RS as B,
  S3t as pe,
  SP as V,
  Spn as H,
  T$ as U,
  TG as me,
  TJt as he,
  Tqt as ge,
  VS as W,
  Vp as _e,
  Vu as ve,
  WKt as G,
  XS as ye,
  XYt as be,
  Xu as xe,
  Xz as Se,
  YKt as Ce,
  ZG as we,
  ZYt as Te,
  Zu as K,
  Zz as Ee,
  _7 as De,
  _Jt as Oe,
  _K as ke,
  _P as Ae,
  _ht as je,
  a2 as Me,
  a3t as Ne,
  aYt as Pe,
  bP as Fe,
  bht as Ie,
  c$t as Le,
  c2 as Re,
  c9t as ze,
  cKt as Be,
  cz as Ve,
  d3t as He,
  dit as Ue,
  e0t as We,
  e9t as Ge,
  eZt as Ke,
  fKt as qe,
  fP as Je,
  fit as q,
  fs as Ye,
  hmn as Xe,
  hz as Ze,
  i2 as Qe,
  jXt as $e,
  jqt as et,
  kMt as tt,
  kW as nt,
  kXt as rt,
  kmn as it,
  l$t as J,
  l2 as at,
  l9t as ot,
  ll as st,
  lz as ct,
  mz as lt,
  nH as ut,
  ni as dt,
  o$t as ft,
  o2 as pt,
  o3t as mt,
  pJt as ht,
  pP as gt,
  ps as _t,
  qK as vt,
  qKt as yt,
  qYt as bt,
  qqt as xt,
  qu as St,
  qyt as Ct,
  rTt as wt,
  ri as Tt,
  s$t as Et,
  s2 as Dt,
  s3t as Ot,
  sYt as kt,
  sz as At,
  tH as jt,
  u9t as Mt,
  uYt as Nt,
  ul as Pt,
  vK as Ft,
  wJt as It,
  xP as Lt,
  xqt as Rt,
  yP as zt,
  zO as Bt,
  zqt as Vt,
} from "./app-initial-f094ef01c64d.js";
import { Ct as Y, KS as Ht, US as Ut, wt as Wt } from "./app-primary-4c40d73a1074.js";
import { n as Gt, t as Kt } from "./model-and-reasoning-effort-translations-550629a13cba.js";
import { n as qt, t as Jt } from "./settings-loading-row-de4ab81779d6.js";
import { n as Yt, t as Xt } from "./experimental-feature-visibility-ceccd69526a3.js";
import { n as Zt, t as Qt } from "./plugins-settings-row-b1558f4c4634.js";
import { i as $t, r as en } from "./settings-route-state-24ba1ff4c511.js";
function tn({ diagnostics: e, durationMs: t }) {
  return {
    durationMs: t,
    problemCount: e.problems.length,
    status: e.installed
      ? Et.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK
      : Et.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM,
    ...on(e.bundleVersion),
  };
}
function nn({ durationMs: e }) {
  return { durationMs: e, status: Et.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED };
}
function rn({ bundleVersion: e, durationMs: t, status: n }) {
  return { durationMs: t, status: an(n), ...on(e) };
}
function an(e) {
  switch (e) {
    case `already-current`:
      return J.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_ALREADY_CURRENT;
    case `canceled`:
      return J.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_CANCELED;
    case `failed`:
      return J.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_FAILED;
    case `installed`:
      return J.CODEX_PRIMARY_RUNTIME_DEPENDENCIES_RESET_STATUS_INSTALLED;
  }
}
function on(e) {
  return e == null || e.length === 0 ? {} : { bundleVersion: e };
}
var sn = e(() => {
  We();
});
function cn(e) {
  return e instanceof Error || e instanceof DOMException
    ? e.name === `AbortError` || e.message.toLowerCase().includes(`aborted`)
    : !1;
}
var ln = e(() => {}),
  un,
  dn = e(() => {
    un = `3026692602`;
  });
function fn(e) {
  if (e == null) return 0;
  switch (e.phase) {
    case `checking`:
      return 0;
    case `downloading`:
      return e.downloadedBytes == null || e.totalBytes == null
        ? 0
        : Math.floor(Math.min((e.downloadedBytes / e.totalBytes) * 100, 100));
    case `verifying`:
    case `extracting`:
      return 98;
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return 100;
    case `error`:
      return 0;
  }
}
function pn(e, t) {
  switch (e?.phase) {
    case void 0:
    case `checking`:
    case `downloading`:
    case `error`:
      return (0, mn.jsx)(m, {
        id: `localConversation.primaryRuntimeInstallStatus.downloading`,
        defaultMessage: `Setting up your workspace: {percent}%`,
        description: `Thread status shown while Codex downloads required local runtime tools before starting a response`,
        values: { percent: t },
      });
    case `extracting`:
      return (0, mn.jsx)(m, {
        id: `localConversation.primaryRuntimeInstallStatus.extracting`,
        defaultMessage: `Preparing your workspace`,
        description: `Thread status shown while Codex extracts required local runtime tools before starting a response`,
      });
    case `verifying`:
    case `validating`:
    case `installed`:
    case `configuring`:
    case `ready`:
      return (0, mn.jsx)(m, {
        id: `localConversation.primaryRuntimeInstallStatus.finalizing`,
        defaultMessage: `Finalizing your workspace`,
        description: `Thread status shown while Codex finalizes required local runtime tools before starting a response`,
      });
  }
}
var mn,
  hn = e(() => {
    (H(), (mn = Xe()));
  }),
  gn,
  _n,
  vn = e(() => {
    ((gn =
      /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i),
      (_n = class e extends Date {
        #e = !1;
        #t = !1;
        #n = null;
        constructor(e) {
          let t = !0,
            n = !0,
            r = `Z`;
          if (typeof e == `string`) {
            let i = e.match(gn);
            i
              ? (i[1] || ((t = !1), (e = `0000-01-01T${e}`)),
                (n = !!i[2]),
                n && e[10] === ` ` && (e = e.replace(` `, `T`)),
                i[2] && +i[2] > 23
                  ? (e = ``)
                  : ((r = i[3] || null), (e = e.toUpperCase()), !r && n && (e += `Z`)))
              : (e = ``);
          }
          (super(e), isNaN(this.getTime()) || ((this.#e = t), (this.#t = n), (this.#n = r)));
        }
        isDateTime() {
          return this.#e && this.#t;
        }
        isLocal() {
          return !this.#e || !this.#t || !this.#n;
        }
        isDate() {
          return this.#e && !this.#t;
        }
        isTime() {
          return this.#t && !this.#e;
        }
        isValid() {
          return this.#e || this.#t;
        }
        toISOString() {
          let e = super.toISOString();
          if (this.isDate()) return e.slice(0, 10);
          if (this.isTime()) return e.slice(11, 23);
          if (this.#n === null) return e.slice(0, -1);
          if (this.#n === `Z`) return e;
          let t = this.#n.slice(1, 3) * 60 + +this.#n.slice(4, 6);
          return (
            (t = this.#n[0] === `-` ? t : -t),
            new Date(this.getTime() - t * 6e4).toISOString().slice(0, -1) + this.#n
          );
        }
        static wrapAsOffsetDateTime(t, n = `Z`) {
          let r = new e(t);
          return ((r.#n = n), r);
        }
        static wrapAsLocalDateTime(t) {
          let n = new e(t);
          return ((n.#n = null), n);
        }
        static wrapAsLocalDate(t) {
          let n = new e(t);
          return ((n.#t = !1), (n.#n = null), n);
        }
        static wrapAsLocalTime(t) {
          let n = new e(t);
          return ((n.#e = !1), (n.#n = null), n);
        }
      }));
  });
function yn(e, t) {
  let n = e.slice(0, t).split(/\r\n|\n|\r/g);
  return [n.length, n.pop().length + 1];
}
function bn(e, t, n) {
  let r = e.split(/\r\n|\n|\r/g),
    i = ``,
    a = (Math.log10(t + 1) | 0) + 1;
  for (let e = t - 1; e <= t + 1; e++) {
    let o = r[e - 1];
    o &&
      ((i += e.toString().padEnd(a, ` `)),
      (i += `:  `),
      (i += o),
      (i += `
`),
      e === t &&
        ((i += ` `.repeat(a + n + 2)),
        (i += `^
`)));
  }
  return i;
}
var X,
  xn = e(() => {
    X = class extends Error {
      line;
      column;
      codeblock;
      constructor(e, t) {
        let [n, r] = yn(t.toml, t.ptr),
          i = bn(t.toml, n, r);
        (super(`Invalid TOML document: ${e}\n\n${i}`, t),
          (this.line = n),
          (this.column = r),
          (this.codeblock = i));
      }
    };
  });
function Sn(e, t) {
  let n = e[t++],
    r = n,
    i = n === `'`,
    a = n === e[t] && n === e[t + 1];
  a &&
    (e[(t += 2)] ===
    `
`
      ? t++
      : e[t] === `\r` &&
        e[t + 1] ===
          `
` &&
        (t += 2));
  let o = ``,
    s = t,
    c = 0;
  for (let l = t; l < e.length; l++)
    if (
      ((n = e[l]),
      a &&
        (n ===
          `
` ||
          (n === `\r` &&
            e[l + 1] ===
              `
`)))
    )
      c &&= 3;
    else if ((n < ` ` && n !== `	`) || n === ``)
      throw new X(`control characters are not allowed in strings`, { toml: e, ptr: l });
    else if ((!c || c === 3) && n === r && (!a || (e[l + 1] === r && e[l + 2] === r)))
      return (
        a && (e[l + 3] === r && l++, e[l + 3] === r && l++),
        [c ? o : o + e.slice(s, l), l + (a ? 3 : 1)]
      );
    else if (!c) !i && n === `\\` && ((o += e.slice(s, (s = l))), (c = 1));
    else if (c === 1)
      if (n === `x` || n === `u` || n === `U`) {
        let t = 0,
          r = n === `x` ? 2 : n === `u` ? 4 : 8;
        for (let n = 0; n < r; n++, l++) {
          let n = e.charCodeAt(l + 1),
            r =
              n >= 48 && n <= 57
                ? n - 48
                : n >= 65 && n <= 70
                  ? n - 65 + 10
                  : n >= 97 && n <= 102
                    ? n - 97 + 10
                    : -1;
          if (r < 0)
            throw new X(`invalid non-hex character in unicode escape`, { toml: e, ptr: l + 1 });
          t = (t << 4) | r;
        }
        if (t < 0 || t > 1114111 || (t >= 55296 && t <= 57343))
          throw new X(`invalid unicode escape`, { toml: e, ptr: l });
        ((o += String.fromCodePoint(t)), (s = l + 1), (c = 0));
      } else if (n === ` ` || n === `	`) c = 2;
      else {
        if (n === `b`) o += `\b`;
        else if (n === `t`) o += `	`;
        else if (n === `n`)
          o += `
`;
        else if (n === `f`) o += `\f`;
        else if (n === `r`) o += `\r`;
        else if (n === `e`) o += `\x1B`;
        else if (n === `"`) o += `"`;
        else if (n === `\\`) o += `\\`;
        else throw new X(`unrecognized escape sequence`, { toml: e, ptr: l });
        ((s = l + 1), (c = 0));
      }
    else if (n !== ` ` && n !== `	`) {
      if (c === 2)
        throw new X(`invalid escape: only line-ending whitespace may be escaped`, {
          toml: e,
          ptr: s,
        });
      ((c = +(!i && n === `\\`)), (s = l));
    }
  throw new X(`unfinished string`, { toml: e, ptr: t });
}
function Cn(e, t, n, r) {
  if (e === `true`) return !0;
  if (e === `false`) return !1;
  if (e === `-inf`) return -1 / 0;
  if (e === `inf` || e === `+inf`) return 1 / 0;
  if (e === `nan` || e === `+nan` || e === `-nan`) return NaN;
  if (e === `-0`) return r ? 0n : 0;
  let i = wn.test(e);
  if (i || Tn.test(e)) {
    if (En.test(e)) throw new X(`leading zeroes are not allowed`, { toml: t, ptr: n });
    e = e.replace(/_/g, ``);
    let a = +e;
    if (isNaN(a)) throw new X(`invalid number`, { toml: t, ptr: n });
    if (i) {
      if ((i = !Number.isSafeInteger(a)) && !r)
        throw new X(`integer value cannot be represented losslessly`, { toml: t, ptr: n });
      (i || r === !0) && (a = BigInt(e));
    }
    return a;
  }
  let a = new _n(e);
  if (!a.isValid()) throw new X(`invalid value`, { toml: t, ptr: n });
  return a;
}
var wn,
  Tn,
  En,
  Dn = e(() => {
    (vn(),
      xn(),
      (wn = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/),
      (Tn = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/),
      (En = /^[+-]?0[0-9_]/));
  });
function On(e, t = 0, n = e.length) {
  let r = e.indexOf(
    `
`,
    t,
  );
  return (e[r - 1] === `\r` && r--, r <= n ? r : -1);
}
function kn(e, t) {
  for (let n = t; n < e.length; n++) {
    let r = e[n];
    if (
      r ===
      `
`
    )
      return n;
    if (
      r === `\r` &&
      e[n + 1] ===
        `
`
    )
      return n + 1;
    if ((r < ` ` && r !== `	`) || r === ``)
      throw new X(`control characters are not allowed in comments`, { toml: e, ptr: t });
  }
  return e.length;
}
function An(e, t, n, r) {
  let i;
  for (;;) {
    for (
      ;
      (i = e[t]) === ` ` ||
      i === `	` ||
      (!n &&
        (i ===
          `
` ||
          (i === `\r` &&
            e[t + 1] ===
              `
`)));
    )
      t++;
    if (r || i !== `#`) break;
    t = kn(e, t);
  }
  return t;
}
function jn(e, t, n, r, i = !1) {
  if (!r) return ((t = On(e, t)), t < 0 ? e.length : t);
  for (let a = t; a < e.length; a++) {
    let t = e[a];
    if (t === `#`) a = On(e, a);
    else if (t === n) return a + 1;
    else if (
      t === r ||
      (i &&
        (t ===
          `
` ||
          (t === `\r` &&
            e[a + 1] ===
              `
`)))
    )
      return a;
  }
  throw new X(`cannot find end of structure`, { toml: e, ptr: t });
}
var Mn = e(() => {
  xn();
});
function Nn(e, t, n) {
  let r = e.slice(t, n),
    i = r.indexOf(`#`);
  return (i > -1 && (kn(e, i), (r = r.slice(0, i))), [r.trimEnd(), i]);
}
function Pn(e, t, n, r, i) {
  if (r === 0)
    throw new X(`document contains excessively nested structures. aborting.`, { toml: e, ptr: t });
  let a = e[t];
  if (a === `[` || a === `{`) {
    let [o, s] = a === `[` ? Rn(e, t, r, i) : Ln(e, t, r, i);
    if (n) {
      if (((s = An(e, s)), e[s] === `,`)) s++;
      else if (e[s] !== n) throw new X(`expected comma or end of structure`, { toml: e, ptr: s });
    }
    return [o, s];
  }
  if (a === `"` || a === `'`) {
    let [r, i] = Sn(e, t);
    if (n) {
      if (
        ((i = An(e, i)),
        e[i] &&
          e[i] !== `,` &&
          e[i] !== n &&
          e[i] !==
            `
` &&
          e[i] !== `\r`)
      )
        throw new X(`unexpected character encountered`, { toml: e, ptr: i });
      e[i] === `,` && i++;
    }
    return [r, i];
  }
  let o = jn(e, t, `,`, n),
    s = Nn(e, t, o - +(e[o - 1] === `,`));
  if (!s[0])
    throw new X(`incomplete key-value declaration: no value specified`, { toml: e, ptr: t });
  return (n && s[1] > -1 && ((o = An(e, t + s[1])), e[o] === `,` && o++), [Cn(s[0], e, t, i), o]);
}
var Fn = e(() => {
  (Dn(), Bn(), Mn(), xn());
});
function In(e, t, n = `=`) {
  let r = t - 1,
    i = [],
    a = e.indexOf(n, t);
  if (a < 0) throw new X(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
  do {
    let o = e[(t = ++r)];
    if (o !== ` ` && o !== `	`)
      if (o === `"` || o === `'`) {
        if (o === e[t + 1] && o === e[t + 2])
          throw new X(`multiline strings are not allowed in keys`, { toml: e, ptr: t });
        let [s, c] = Sn(e, t);
        r = e.indexOf(`.`, c);
        let l = e.slice(c, r < 0 || r > a ? a : r),
          u = On(l);
        if (u > -1) throw new X(`newlines are not allowed in keys`, { toml: e, ptr: t + r + u });
        if (l.trimStart())
          throw new X(`found extra tokens after the string part`, { toml: e, ptr: c });
        if (a < c && ((a = e.indexOf(n, c)), a < 0))
          throw new X(`incomplete key-value: cannot find end of key`, { toml: e, ptr: t });
        i.push(s);
      } else {
        r = e.indexOf(`.`, t);
        let n = e.slice(t, r < 0 || r > a ? a : r);
        if (!zn.test(n))
          throw new X(`only letter, numbers, dashes and underscores are allowed in keys`, {
            toml: e,
            ptr: t,
          });
        i.push(n.trimEnd());
      }
  } while (r + 1 && r < a);
  return [i, An(e, a + 1, !0, !0)];
}
function Ln(e, t, n, r) {
  let i = {},
    a = new Set(),
    o;
  for (t++; (o = e[t++]) !== `}` && o;)
    if (o === `,`) throw new X(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (o === `#`) t = kn(e, t);
    else if (
      o !== ` ` &&
      o !== `	` &&
      o !==
        `
` &&
      o !== `\r`
    ) {
      let o,
        s = i,
        c = !1,
        [l, u] = In(e, t - 1);
      for (let n = 0; n < l.length; n++) {
        if (
          (n && (s = c ? s[o] : (s[o] = {})),
          (o = l[n]),
          (c = Object.hasOwn(s, o)) && (typeof s[o] != `object` || a.has(s[o])))
        )
          throw new X(`trying to redefine an already defined value`, { toml: e, ptr: t });
        !c &&
          o === `__proto__` &&
          Object.defineProperty(s, o, { enumerable: !0, configurable: !0, writable: !0 });
      }
      if (c) throw new X(`trying to redefine an already defined value`, { toml: e, ptr: t });
      let [d, f] = Pn(e, u, `}`, n - 1, r);
      (a.add(d), (s[o] = d), (t = f));
    }
  if (!o) throw new X(`unfinished table encountered`, { toml: e, ptr: t });
  return [i, t];
}
function Rn(e, t, n, r) {
  let i = [],
    a;
  for (t++; (a = e[t++]) !== `]` && a;)
    if (a === `,`) throw new X(`expected value, found comma`, { toml: e, ptr: t - 1 });
    else if (a === `#`) t = kn(e, t);
    else if (
      a !== ` ` &&
      a !== `	` &&
      a !==
        `
` &&
      a !== `\r`
    ) {
      let a = Pn(e, t - 1, `]`, n - 1, r);
      (i.push(a[0]), (t = a[1]));
    }
  if (!a) throw new X(`unfinished array encountered`, { toml: e, ptr: t });
  return [i, t];
}
var zn,
  Bn = e(() => {
    (Dn(), Fn(), Mn(), xn(), (zn = /^[a-zA-Z0-9-_]+[ \t]*$/));
  });
function Vn(e, t, n, r) {
  let i = t,
    a = n,
    o,
    s = !1,
    c;
  for (let t = 0; t < e.length; t++) {
    if (t) {
      if (((i = s ? i[o] : (i[o] = {})), (a = (c = a[o]).c), r === 0 && (c.t === 1 || c.t === 2)))
        return null;
      if (c.t === 2) {
        let e = i.length - 1;
        ((i = i[e]), (a = a[e].c));
      }
    }
    if (((o = e[t]), (s = Object.hasOwn(i, o)) && a[o]?.t === 0 && a[o]?.d)) return null;
    s ||
      (o === `__proto__` &&
        (Object.defineProperty(i, o, { enumerable: !0, configurable: !0, writable: !0 }),
        Object.defineProperty(a, o, { enumerable: !0, configurable: !0, writable: !0 })),
      (a[o] = { t: t < e.length - 1 && r === 2 ? 3 : r, d: !1, i: 0, c: {} }));
  }
  if (
    ((c = a[o]),
    (c.t !== r && !(r === 1 && c.t === 3)) ||
      (r === 2 &&
        (c.d || ((c.d = !0), (i[o] = [])),
        i[o].push((i = {})),
        (c.c[c.i++] = c = { t: 1, d: !1, i: 0, c: {} })),
      c.d))
  )
    return null;
  if (((c.d = !0), r === 1)) i = s ? i[o] : (i[o] = {});
  else if (r === 0 && s) return null;
  return [o, i, c.c];
}
function Hn(e, { maxDepth: t = 1e3, integersAsBigInt: n } = {}) {
  let r = {},
    i = {},
    a = r,
    o = i;
  for (let s = An(e, 0); s < e.length;) {
    if (e[s] === `[`) {
      let t = e[++s] === `[`,
        n = In(e, (s += +t), `]`);
      if (t) {
        if (e[n[1] - 1] !== `]`)
          throw new X(`expected end of table declaration`, { toml: e, ptr: n[1] - 1 });
        n[1]++;
      }
      let c = Vn(n[0], r, i, t ? 2 : 1);
      if (!c)
        throw new X(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      ((o = c[2]), (a = c[1]), (s = n[1]));
    } else {
      let r = In(e, s),
        i = Vn(r[0], a, o, 0);
      if (!i)
        throw new X(`trying to redefine an already defined table or value`, { toml: e, ptr: s });
      let c = Pn(e, r[1], void 0, t, n);
      ((i[1][i[0]] = c[0]), (s = c[1]));
    }
    if (
      ((s = An(e, s, !0)),
      e[s] &&
        e[s] !==
          `
` &&
        e[s] !== `\r`)
    )
      throw new X(`each key-value declaration must be followed by an end-of-line`, {
        toml: e,
        ptr: s,
      });
    s = An(e, s);
  }
  return r;
}
var Un = e(() => {
    (Bn(), Fn(), Mn(), xn());
  }),
  Wn = e(() => {
    Un();
  });
async function Gn({ filePath: e, hostId: t, keyPath: n, value: r }) {
  let i = Kn(n, r);
  if (i == null) throw Error(`Unsupported config key for project config write.`);
  let a = ``;
  try {
    a = (await ht(`read-file`, { params: { hostId: t, path: e } })).contents;
  } catch (e) {
    if (!er(e)) throw Error(`Failed to read project config.`);
  }
  try {
    Hn(a);
  } catch {
    throw Error(`The project config.toml file is invalid.`);
  }
  let o = qn(a, i.name, i.value);
  try {
    Hn(o);
  } catch {
    throw Error(`The updated project config.toml file is invalid.`);
  }
  if (o !== a)
    try {
      await ht(`local-environment-config-save`, { params: { configPath: e, hostId: t, raw: o } });
    } catch {
      throw Error(`Failed to save project config.`);
    }
}
function Kn(e, t) {
  return e === `approval_policy` && (t === `on-request` || t === `never`)
    ? { name: `approval_policy`, value: t }
    : e === `sandbox_mode` &&
        (t === `read-only` || t === `workspace-write` || t === `danger-full-access`)
      ? { name: `sandbox_mode`, value: t }
      : e === `web_search` &&
          (t === `disabled` || t === `cached` || t === `indexed` || t === `live` || t == null)
        ? { name: `web_search`, value: t }
        : e === `model_verbosity` && (t === `low` || t === `medium` || t === `high` || t == null)
          ? { name: `model_verbosity`, value: t }
          : e === `model_reasoning_summary` &&
              (t === `auto` || t === `concise` || t === `detailed` || t === `none` || t == null)
            ? { name: `model_reasoning_summary`, value: t }
            : e === `sandbox_workspace_write.network_access` && typeof t == `boolean`
              ? { name: `network_access`, value: t }
              : null;
}
function qn(e, t, n) {
  return t === `network_access` ? Yn(e, n === !0) : Jn(e, t, n == null ? null : String(n));
}
function Jn(e, t, n) {
  let r =
      e.length > 0
        ? e.split(`
`)
        : [],
    i = null,
    a = null,
    o = -1,
    s = !1;
  for (let [e, c] of r.entries()) {
    let l = Qn(c, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = Zn(c);
    if (d != null) {
      (o === -1 && (o = e), (i = d));
      continue;
    }
    if (i == null && RegExp(`^\\s*(?:${t}|"${t}"|'${t}')\\s*=`).test(c)) {
      (n == null
        ? l.commentIndex === -1
          ? r.splice(e, 1)
          : (r[e] = `${c.match(/^\s*/)?.[0] ?? ``}${c.slice(l.commentIndex)}`)
        : (r[e] = $n(c, `${t} = "${n}"`, l.commentIndex)),
        (s = !0));
      break;
    }
  }
  if (!s) {
    if (n == null) return e;
    let i = o;
    (i === -1 && (i = r.at(-1) === `` ? r.length - 1 : r.length), r.splice(i, 0, `${t} = "${n}"`));
  }
  return Xn(
    r.join(`
`),
  );
}
function Yn(e, t) {
  let n =
      e.length > 0
        ? e.split(`
`)
        : [],
    r = !1,
    i = null,
    a = null,
    o = n.length,
    s = !1,
    c = t ? `true` : `false`;
  for (let [e, t] of n.entries()) {
    let l = Qn(t, a),
      u = a != null;
    if (((a = l.multilineString), u || a != null)) continue;
    let d = Zn(t);
    if (d != null) {
      if (r) {
        o = e;
        break;
      }
      (d === `sandbox_workspace_write` && (r = !0), (i = d));
      continue;
    }
    if (
      i == null &&
      /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*\.\s*(?:network_access|"network_access"|'network_access')\s*=/.test(
        t,
      )
    ) {
      ((n[e] = $n(t, `sandbox_workspace_write.network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
    if (
      i == null &&
      /^\s*(?:sandbox_workspace_write|"sandbox_workspace_write"|'sandbox_workspace_write')\s*=\s*\{/.test(
        t,
      )
    )
      throw Error(`The sandbox_workspace_write inline table cannot be updated safely.`);
    if (r && /^\s*(?:network_access|"network_access"|'network_access')\s*=/.test(t)) {
      ((n[e] = $n(t, `network_access = ${c}`, l.commentIndex)), (s = !0));
      break;
    }
  }
  if (r && !s)
    return (
      n.splice(o, 0, `network_access = ${t ? `true` : `false`}`),
      Xn(
        n.join(`
`),
      )
    );
  if (s)
    return Xn(
      n.join(`
`),
    );
  let l =
    e.length > 0 &&
    !e.endsWith(`
`)
      ? `${e}\n`
      : e;
  return `${l}${
    l.trim().length === 0
      ? ``
      : `
`
  }[sandbox_workspace_write]\nnetwork_access = ${t ? `true` : `false`}\n`;
}
function Xn(e) {
  return e.endsWith(`
`)
    ? e
    : `${e}\n`;
}
function Zn(e) {
  let { commentIndex: t } = Qn(e, null),
    n = (t === -1 ? e : e.slice(0, t)).match(/^\s*\[(?:\[(.+)\]|(.+))\]\s*$/),
    r = n?.[1] ?? n?.[2];
  return r == null ? null : r.trim().replace(/^(["'])(.*)\1$/, `$2`);
}
function Qn(e, t) {
  let n = t;
  for (let t = 0; t < e.length; t += 1) {
    let r = e[t];
    if (n != null) {
      if (n === `"""` || n === `'''`) {
        if (n === `"""` && r === `\\`) {
          t += 1;
          continue;
        }
        e.startsWith(n, t) && ((t += 2), (n = null));
        continue;
      }
      if (n === `"` && r === `\\`) {
        t += 1;
        continue;
      }
      r === n && (n = null);
      continue;
    }
    if (r === `#`) return { multilineString: null, commentIndex: t };
    if (e.startsWith(`"""`, t)) {
      ((n = `"""`), (t += 2));
      continue;
    }
    if (e.startsWith(`'''`, t)) {
      ((n = `'''`), (t += 2));
      continue;
    }
    (r === `"` || r === `'`) && (n = r);
  }
  return { multilineString: n === `"""` || n === `'''` ? n : null, commentIndex: -1 };
}
function $n(e, t, n) {
  let r = e.match(/^\s*/)?.[0] ?? ``;
  return n === -1 ? `${r}${t}` : `${r}${t}${e.slice(0, n).match(/\s*$/)?.[0] ?? ``}${e.slice(n)}`;
}
function er(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.message.trim().toLowerCase();
  return t === `enoent` || t.includes(`no such file`) || t.includes(`not found`);
}
var tr = e(() => {
  (Wn(), Oe());
});
function nr(e) {
  let t = (0, ar.c)(26),
    { hostId: n } = e,
    i = r(Ne),
    a = ie(),
    [o, s] = (0, or.useState)(!1),
    [c] = Te(`statsig_default_enable_features`),
    l = c?.features,
    u = ue(g.defaultModeRequestUserInput),
    { data: d, isLoading: f } = ne(At, n),
    p = d === void 0 ? [] : d,
    h;
  t[0] === n ? (h = t[1]) : ((h = { hostId: n }), (t[0] = n), (t[1] = h));
  let _ = ct(h),
    v = p.filter(ir),
    y = l?.[ze] === !0,
    b;
  t[2] === _
    ? (b = t[3])
    : ((b = (e) => ({
        key: e.name,
        label: e.displayName ?? e.name,
        description: e.description ?? void 0,
        enabled: e.enabled,
        onChange: (t) => {
          _.mutate(
            { featureName: e.name, enabled: t },
            {
              onSuccess: () => {
                s(!0);
              },
            },
          );
        },
      })),
      (t[2] = _),
      (t[3] = b));
  let x = [
      ...(y && !f
        ? [
            {
              key: ze,
              label: a.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.label`,
                defaultMessage: `Request user input`,
                description: `Label for the request user input experimental feature toggle`,
              }),
              description: a.formatMessage({
                id: `settings.general.experimentalFeatures.requestUserInput.description`,
                defaultMessage: `Allow Codex to ask questions outside Plan mode. Changes apply only to new threads`,
                description: `Description for the request user input experimental feature toggle`,
              }),
              enabled: u,
              onChange: (e) => {
                Ce(i, g.defaultModeRequestUserInput, e).catch(rr);
              },
            },
          ]
        : []),
      ...v.map(b),
    ],
    S = x.length > 0,
    C = K,
    w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(m, {
        id: `settings.general.experimentalFeatures`,
        defaultMessage: `Experimental features (Beta)`,
        description: `Heading for beta experimental features settings group`,
      })),
      (t[4] = w))
    : (w = t[4]);
  let T;
  t[5] === o
    ? (T = t[6])
    : ((T = o
        ? (0, Z.jsx)(`div`, {
            className: `mb-2 block font-medium text-danger`,
            children: (0, Z.jsx)(m, {
              id: `settings.general.experimentalFeatures.restartNote`,
              defaultMessage: `Restart {appName} to apply experimental feature changes`,
              description: `Notice shown after changing an experimental feature to indicate restart is required`,
              values: { appName: G },
            }),
          })
        : void 0),
      (t[5] = o),
      (t[6] = T));
  let E;
  t[7] === T
    ? (E = t[8])
    : ((E = (0, Z.jsx)(K.Header, { title: w, subtitle: T })), (t[7] = T), (t[8] = E));
  let D = K,
    O = ve,
    k;
  t[9] === f
    ? (k = t[10])
    : ((k = f
        ? (0, Z.jsx)(Jt, {
            children: (0, Z.jsx)(m, {
              id: `settings.general.experimentalFeatures.loading`,
              defaultMessage: `Loading experimental features…`,
              description: `Loading label for beta experimental features settings group`,
            }),
          })
        : null),
      (t[9] = f),
      (t[10] = k));
  let A;
  t[11] !== S || t[12] !== f
    ? ((A =
        !f && !S
          ? (0, Z.jsx)(L, {
              layout: `settings-row`,
              children: (0, Z.jsx)(m, {
                id: `settings.general.experimentalFeatures.empty`,
                defaultMessage: `No beta experimental features available`,
                description: `Empty label for beta experimental features settings group`,
              }),
            })
          : null),
      (t[11] = S),
      (t[12] = f),
      (t[13] = A))
    : (A = t[13]);
  let j = x.map((e) =>
      (0, Z.jsx)(
        St,
        {
          label: e.label,
          description: e.description,
          control: (0, Z.jsx)(le, {
            checked: e.enabled,
            disabled: _.isPending,
            onChange: e.onChange,
            ariaLabel: a.formatMessage(
              {
                id: `settings.general.experimentalFeatures.toggle`,
                defaultMessage: `Toggle {featureName}`,
                description: `Aria label for toggling a beta experimental feature`,
              },
              { featureName: e.label },
            ),
          }),
        },
        e.key,
      ),
    ),
    M;
  t[14] !== O || t[15] !== j || t[16] !== k || t[17] !== A
    ? ((M = (0, Z.jsxs)(O, { children: [k, A, j] })),
      (t[14] = O),
      (t[15] = j),
      (t[16] = k),
      (t[17] = A),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] !== M || t[20] !== D.Content
    ? ((N = (0, Z.jsx)(D.Content, { children: M })), (t[19] = M), (t[20] = D.Content), (t[21] = N))
    : (N = t[21]);
  let P;
  return (
    t[22] !== C || t[23] !== N || t[24] !== E
      ? ((P = (0, Z.jsxs)(C, { children: [E, N] })),
        (t[22] = C),
        (t[23] = N),
        (t[24] = E),
        (t[25] = P))
      : (P = t[25]),
    P
  );
}
function rr(e) {
  R.warning(`Failed to update request-user-input preference`, {
    safe: {},
    sensitive: { error: e },
  });
}
function ir(e) {
  return Yt(e) && e.name !== `default_mode_request_user_input`;
}
var ar,
  or,
  Z,
  sr = e(() => {
    ((ar = it()),
      I(),
      c(),
      Mt(),
      (or = t(o(), 1)),
      H(),
      D(),
      nt(),
      n(),
      Ve(),
      mt(),
      yt(),
      Xt(),
      de(),
      qt(),
      xe(),
      k(),
      be(),
      y(),
      (Z = Xe()));
  });
function cr(e) {
  let t = (0, fr.c)(58),
    { hostId: n } = e,
    i = r(Ne),
    a = ie(),
    o = T(Lt),
    { data: s } = T(v),
    c = T(Ie),
    l;
  t[0] === n ? (l = t[1]) : ((l = { hostId: n }), (t[0] = n), (t[1] = l));
  let { data: u } = zt(l),
    d,
    f,
    h,
    g,
    _,
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    D,
    O;
  if (t[2] !== o || t[3] !== n || t[4] !== u || t[5] !== i) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[20] !== u?.hasModelSupportingMaxReasoningEffort ||
      t[21] !== u?.hasModelSupportingUltraReasoningEffort
        ? ((e = (e) =>
            e === `max`
              ? u?.hasModelSupportingMaxReasoningEffort === !0
              : u?.hasModelSupportingUltraReasoningEffort === !0),
          (t[20] = u?.hasModelSupportingMaxReasoningEffort),
          (t[21] = u?.hasModelSupportingUltraReasoningEffort),
          (t[22] = e))
        : (e = t[22]);
      let r = pr.filter(e),
        a = u?.models.some(ur);
      if (u == null || (r.length === 0 && !a)) {
        y = null;
        break bb0;
      }
      let s = a ? [...Fe, `persistent`] : Fe,
        c;
      t[23] === o ? (c = t[24]) : ((c = (e) => o.has(e)), (t[23] = o), (t[24] = c));
      let l = s.length + r.filter(c).length;
      ((_ = K),
        t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((O = (0, Q.jsx)(K.Header, {
              title: (0, Q.jsx)(m, {
                id: `settings.agent.modelFeatures.title`,
                defaultMessage: `Model features`,
                description: `Title for model feature settings`,
              }),
            })),
            (t[25] = O))
          : (O = t[25]),
        (g = K.Content),
        (h = ve),
        (f = St),
        t[26] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((E = (0, Q.jsx)(m, {
              id: `settings.agent.modelFeatures.reasoningEfforts.label`,
              defaultMessage: `Available reasoning efforts`,
              description: `Label for the available reasoning efforts setting`,
            })),
            (D = (0, Q.jsx)(m, {
              id: `settings.agent.modelFeatures.reasoningEfforts.description`,
              defaultMessage: `Choose which reasoning effort levels appear in model controls. Availability varies by model`,
              description: `Description for the available reasoning efforts setting`,
            })),
            (t[26] = E),
            (t[27] = D))
          : ((E = t[26]), (D = t[27])),
        (d = P),
        (b = `end`),
        (x = `menuWide`),
        t[28] === l
          ? (S = t[29])
          : ((S = (0, Q.jsx)(B, {
              children: (0, Q.jsx)(m, {
                id: `settings.agent.modelFeatures.reasoningEfforts.selectedCount`,
                defaultMessage: `{count, plural, one {# selected} other {# selected}}`,
                description: `Number of available reasoning efforts selected`,
                values: { count: l },
              }),
            })),
            (t[28] = l),
            (t[29] = S)),
        (C = s.map(lr)),
        (w = r.map((e) =>
          (0, Q.jsx)(
            j.CheckboxItem,
            {
              checked: o.has(e),
              onCheckedChange: (t) => {
                p(i, { enabled: t, hostId: n, listModelsData: u, reasoningEffort: e });
              },
              children: (0, Q.jsx)(Kt, { effort: e }),
            },
            e,
          ),
        )));
    }
    ((t[2] = o),
      (t[3] = n),
      (t[4] = u),
      (t[5] = i),
      (t[6] = d),
      (t[7] = f),
      (t[8] = h),
      (t[9] = g),
      (t[10] = _),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = E),
      (t[18] = D),
      (t[19] = O));
  } else
    ((d = t[6]),
      (f = t[7]),
      (h = t[8]),
      (g = t[9]),
      (_ = t[10]),
      (y = t[11]),
      (b = t[12]),
      (x = t[13]),
      (S = t[14]),
      (C = t[15]),
      (w = t[16]),
      (E = t[17]),
      (D = t[18]),
      (O = t[19]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let k;
  t[30] !== d || t[31] !== b || t[32] !== x || t[33] !== S || t[34] !== C || t[35] !== w
    ? ((k = (0, Q.jsxs)(d, { align: b, contentWidth: x, triggerButton: S, children: [C, w] })),
      (t[30] = d),
      (t[31] = b),
      (t[32] = x),
      (t[33] = S),
      (t[34] = C),
      (t[35] = w),
      (t[36] = k))
    : (k = t[36]);
  let A;
  t[37] !== f || t[38] !== k || t[39] !== E || t[40] !== D
    ? ((A = (0, Q.jsx)(f, { label: E, description: D, control: k })),
      (t[37] = f),
      (t[38] = k),
      (t[39] = E),
      (t[40] = D),
      (t[41] = A))
    : (A = t[41]);
  let M;
  t[42] !== a || t[43] !== u.hasModelSupportingUltraReasoningEffort || t[44] !== c || t[45] !== s
    ? ((M = u.hasModelSupportingUltraReasoningEffort
        ? (0, Q.jsx)(St, {
            label: (0, Q.jsx)(m, {
              id: `settings.agent.modelFeatures.modelPickerSliderUltra.label`,
              defaultMessage: `Ultra in model picker slider`,
              description: `Label for the setting that adds Ultra to the model picker slider`,
            }),
            description: (0, Q.jsx)(m, {
              id: `settings.agent.modelFeatures.modelPickerSliderUltra.description`,
              defaultMessage: `Show Ultra as the highest slider option`,
              description: `Description for the setting that adds Ultra to the model picker slider`,
            }),
            control: (0, Q.jsx)(le, {
              "aria-busy": c.isPending || void 0,
              checked: s?.ultraEffortEnabled === !0,
              disabled: s == null || c.isPending,
              onChange: (e) => {
                c.mutate(e);
              },
              ariaLabel: a.formatMessage({
                id: `settings.agent.modelFeatures.modelPickerSliderUltra.ariaLabel`,
                defaultMessage: `Show Ultra in the model picker slider`,
                description: `Accessible label for the Ultra model picker slider setting toggle`,
              }),
            }),
          })
        : null),
      (t[42] = a),
      (t[43] = u.hasModelSupportingUltraReasoningEffort),
      (t[44] = c),
      (t[45] = s),
      (t[46] = M))
    : (M = t[46]);
  let N;
  t[47] !== h || t[48] !== A || t[49] !== M
    ? ((N = (0, Q.jsxs)(h, { children: [A, M] })),
      (t[47] = h),
      (t[48] = A),
      (t[49] = M),
      (t[50] = N))
    : (N = t[50]);
  let ee;
  t[51] !== g || t[52] !== N
    ? ((ee = (0, Q.jsx)(g, { children: N })), (t[51] = g), (t[52] = N), (t[53] = ee))
    : (ee = t[53]);
  let te;
  return (
    t[54] !== _ || t[55] !== ee || t[56] !== O
      ? ((te = (0, Q.jsxs)(_, { children: [O, ee] })),
        (t[54] = _),
        (t[55] = ee),
        (t[56] = O),
        (t[57] = te))
      : (te = t[57]),
    te
  );
}
function lr(e) {
  return (0, Q.jsx)(
    j.CheckboxItem,
    { checked: !0, disabled: !0, children: (0, Q.jsx)(Kt, { effort: e }) },
    e,
  );
}
function ur(e) {
  return e.supportedReasoningEfforts.some(dr);
}
function dr(e) {
  let { reasoningEffort: t } = e;
  return t === `persistent`;
}
var fr,
  Q,
  pr,
  mr = e(() => {
    ((fr = it()),
      I(),
      H(),
      je(),
      Gt(),
      we(),
      n(),
      Ae(),
      V(),
      mt(),
      de(),
      xe(),
      W(),
      k(),
      (Q = Xe()),
      (pr = [`max`, `ultra`]));
  });
function hr() {
  let e = (0, Nr.c)(28),
    { selectedHostId: t } = s(),
    n = bt(t),
    r = ne(st, t),
    i = T(Be),
    a = kt(un),
    o = kt(`2106641128`),
    c = kt(`3693343337`),
    l;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(u, { slug: `agent` })), (e[0] = l))
    : (l = e[0]);
  let d;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsxs)($.Fragment, {
        children: [
          (0, $.jsx)($.Fragment, {
            children: (0, $.jsx)(m, {
              id: `settings.agent.configuration.subtitle.summary.electron`,
              defaultMessage: `Configure permissions, web access, and agent responses for new chats <a>Learn more</a>`,
              description: `Summary text for the desktop configuration settings subtitle`,
              values: { a: gr },
            }),
          }),
          null,
        ],
      })),
      (e[1] = d))
    : (d = e[1]);
  let f;
  e[2] !== i || e[3] !== r || e[4] !== t
    ? ((f = i
        ? (0, $.jsxs)(K, {
            children: [
              (0, $.jsx)(K.Header, {
                title: (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)($.Fragment, { children: (0, $.jsx)(m, { ...Y.agentDefaults }) }),
                    null,
                  ],
                }),
              }),
              (0, $.jsxs)(K.Content, {
                children: [
                  r.map((e, n) =>
                    (0, $.jsx)(
                      Bt,
                      {
                        content: (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(Ht, {
                              cwd: null,
                              className: `[&>p]:my-0`,
                              textStyle: { kind: `small` },
                              children: e.summary,
                            }),
                            e.details != null && e.details.length > 0
                              ? (0, $.jsx)(Ht, {
                                  cwd: null,
                                  className: `[&>p]:my-0`,
                                  textStyle: { kind: `small` },
                                  children: e.details,
                                })
                              : null,
                            e.path == null
                              ? null
                              : (0, $.jsx)(m, {
                                  id: `settings.agent.configuration.notice.fileContext`,
                                  defaultMessage: `File: {path}{location}`,
                                  description: `File path and optional location for a config or rules warning shown in settings`,
                                  values: {
                                    path: (0, $.jsx)(`code`, { children: e.path }),
                                    location:
                                      e.range == null
                                        ? ``
                                        : (0, $.jsx)(m, {
                                            id: `settings.agent.configuration.notice.fileLocationSuffix`,
                                            defaultMessage: ` (line {line}, column {column})`,
                                            description: `Suffix showing the line and column for a config warning in settings`,
                                            values: {
                                              line: e.range.start.line,
                                              column: e.range.start.column,
                                            },
                                          }),
                                  },
                                }),
                          ],
                        }),
                        Icon: _,
                        onPrimaryCtaClick: () => {
                          e.path != null &&
                            gt({
                              hostId: t,
                              path: e.path,
                              ...(e.range == null ? {} : { range: e.range }),
                            });
                        },
                        primaryCtaText:
                          e.path == null
                            ? void 0
                            : (0, $.jsx)(m, {
                                id: `settings.agent.configuration.notice.openFile`,
                                defaultMessage: `Open file`,
                                description: `Button label to open the file associated with a config or rules warning`,
                              }),
                        role: `alert`,
                        type: `warning`,
                      },
                      `${n}:${e.kind}:${e.summary}:${e.path ?? ``}`,
                    ),
                  ),
                  (0, $.jsx)($.Fragment, { children: (0, $.jsx)(br, { hostId: t }) }),
                  null,
                ],
              }),
            ],
          })
        : null),
      (e[2] = i),
      (e[3] = r),
      (e[4] = t),
      (e[5] = f))
    : (f = e[5]);
  let p;
  e[6] !== c || e[7] !== t
    ? ((p = c ? (0, $.jsx)(cr, { hostId: t }) : null), (e[6] = c), (e[7] = t), (e[8] = p))
    : (p = e[8]);
  let h;
  e[9] !== o || e[10] !== t
    ? ((h = o ? (0, $.jsx)(`div`, { children: (0, $.jsx)(nr, { hostId: t }) }) : null),
      (e[9] = o),
      (e[10] = t),
      (e[11] = h))
    : (h = e[11]);
  let g;
  e[12] === t ? (g = e[13]) : ((g = null), (e[12] = t), (e[13] = g));
  let v;
  e[14] !== h || e[15] !== g
    ? ((v = (0, $.jsxs)($.Fragment, { children: [h, g] })), (e[14] = h), (e[15] = g), (e[16] = v))
    : (v = e[16]);
  let y;
  e[17] !== a || e[18] !== n || e[19] !== t
    ? ((y = a && n.kind === `local` ? (0, $.jsx)(_r, { hostId: t }) : null),
      (e[17] = a),
      (e[18] = n),
      (e[19] = t),
      (e[20] = y))
    : (y = e[20]);
  let b;
  e[21] === y
    ? (b = e[22])
    : ((b = (0, $.jsx)($.Fragment, { children: y })), (e[21] = y), (e[22] = b));
  let x;
  return (
    e[23] !== f || e[24] !== p || e[25] !== v || e[26] !== b
      ? ((x = (0, $.jsx)($.Fragment, {
          children: (0, $.jsxs)(N, { title: l, subtitle: d, children: [f, p, v, b] }),
        })),
        (e[23] = f),
        (e[24] = p),
        (e[25] = v),
        (e[26] = b),
        (e[27] = x))
      : (x = e[27]),
    x
  );
}
function gr(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-info`,
    href: De,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function _r(e) {
  let t = (0, Nr.c)(2),
    { hostId: n } = e,
    r = lt.primaryRuntime;
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(vr, { hostId: n, primaryRuntime: r })), (t[0] = n), (t[1] = i)),
    i
  );
}
function vr(e) {
  let t = (0, Nr.c)(98),
    { hostId: n, primaryRuntime: i } = e,
    a = r(Ne),
    o = ie(),
    s = Nt(),
    { data: c, isLoading: l } = ne(At, n),
    u;
  t[0] === n ? (u = t[1]) : ((u = { hostId: n }), (t[0] = n), (t[1] = u));
  let f = ct(u),
    p;
  t[2] === c ? (p = t[3]) : ((p = c?.find(yr)), (t[2] = c), (t[3] = p));
  let h = p,
    g = h?.enabled === !0,
    _;
  t[4] !== n || t[5] !== i
    ? ((_ = () => i.diagnoseDependencies({ hostId: n })), (t[4] = n), (t[5] = i), (t[6] = _))
    : (_ = t[6]);
  let v;
  t[7] === n ? (v = t[8]) : ((v = d(n)), (t[7] = n), (t[8] = v));
  let y;
  t[9] !== _ || t[10] !== v
    ? ((y = { queryFn: _, queryKey: v, staleTime: It.FIVE_SECONDS }),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b = pe(y),
    x;
  t[12] !== n || t[13] !== i
    ? ((x = { mutationFn: () => i.diagnoseDependencies({ hostId: n }) }),
      (t[12] = n),
      (t[13] = i),
      (t[14] = x))
    : (x = t[14]);
  let S = He(x),
    C;
  t[15] !== i || t[16] !== s
    ? ((C = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Tt(s), i.runUpdateNow({ release: t }));
        },
      }),
      (t[15] = i),
      (t[16] = s),
      (t[17] = C))
    : (C = t[17]);
  let w = He(C),
    E;
  t[18] !== n || t[19] !== i || t[20] !== s
    ? ((E = {
        mutationFn: async (e) => {
          let { release: t } = e;
          return (await Tt(s), i.resetDependencies({ hostId: n, release: t }));
        },
      }),
      (t[18] = n),
      (t[19] = i),
      (t[20] = s),
      (t[21] = E))
    : (E = t[21]);
  let D = He(E),
    O;
  t[22] === n
    ? (O = t[23])
    : ((O = { mutationFn: () => Re({ hostId: n }) }), (t[22] = n), (t[23] = O));
  let k = He(O),
    A = T(Dt),
    j = T(pt),
    M = A?.hostId === n ? A : null,
    N;
  t[24] === a ? (N = t[25]) : ((N = a.get($e)), (t[24] = a), (t[25] = N));
  let P = N,
    ee = l || f.isPending || S.isPending || w.isPending || D.isPending || k.isPending,
    te;
  t[26] === M ? (te = t[27]) : ((te = Me(M)), (t[26] = M), (t[27] = te));
  let F = te,
    I =
      b.data?.bundleVersion == null || b.data.bundleVersion.length === 0
        ? null
        : b.data.bundleVersion,
    re;
  t[28] !== S || t[29] !== b || t[30] !== o || t[31] !== a || t[32] !== P
    ? ((re = () => {
        let e = Date.now();
        S.mutateAsync()
          .then((t) => {
            if (
              (Ke(a, ft, tn({ diagnostics: t, durationMs: Date.now() - e })),
              b.refetch(),
              t.installed)
            ) {
              P.success(
                o.formatMessage({
                  id: `settings.agent.dependencies.diagnose.ok`,
                  defaultMessage: `Codex dependencies look healthy`,
                  description: `Toast shown when dependency diagnostics find no problems`,
                }),
              );
              return;
            }
            P.warning(
              o.formatMessage({
                id: `settings.agent.dependencies.diagnose.problem`,
                defaultMessage: `Codex dependencies may need repair. Send /feedback if this keeps happening`,
                description: `Toast shown when dependency diagnostics find problems`,
              }),
            );
          })
          .catch(() => {
            (Ke(a, ft, nn({ durationMs: Date.now() - e })),
              P.danger(
                o.formatMessage({
                  id: `settings.agent.dependencies.diagnose.failed`,
                  defaultMessage: `Couldn’t diagnose Codex dependencies`,
                  description: `Toast shown when dependency diagnostics fail`,
                }),
              ));
          });
      }),
      (t[28] = S),
      (t[29] = b),
      (t[30] = o),
      (t[31] = a),
      (t[32] = P),
      (t[33] = re))
    : (re = t[33]);
  let L = re,
    R;
  t[34] !== b || t[35] !== o || t[36] !== j || t[37] !== D || t[38] !== a || t[39] !== P
    ? ((R = () => {
        let e = Date.now();
        D.mutateAsync({ release: j })
          .then((t) => {
            (Ke(
              a,
              Le,
              rn({ bundleVersion: t.bundleVersion, durationMs: Date.now() - e, status: t.status }),
            ),
              b.refetch(),
              P.success(
                o.formatMessage({
                  id: `settings.agent.dependencies.reset.installed`,
                  defaultMessage: `Codex dependencies were reinstalled`,
                  description: `Toast shown when dependency reset and reinstall succeeds`,
                }),
              ));
          })
          .catch((t) => {
            if (cn(t)) {
              (a.set(Dt, null),
                b.refetch(),
                Ke(
                  a,
                  Le,
                  rn({ bundleVersion: null, durationMs: Date.now() - e, status: `canceled` }),
                ),
                P.info(
                  o.formatMessage({
                    id: `settings.agent.dependencies.reset.canceled`,
                    defaultMessage: `Codex dependency download canceled`,
                    description: `Toast shown when dependency reset and reinstall is canceled`,
                  }),
                  { id: `install-primary-runtime` },
                ));
              return;
            }
            (Ke(a, Le, rn({ bundleVersion: null, durationMs: Date.now() - e, status: `failed` })),
              P.danger(
                o.formatMessage({
                  id: `settings.agent.dependencies.reset.failed`,
                  defaultMessage: `Couldn’t reinstall Codex dependencies`,
                  description: `Toast shown when dependency reset fails`,
                }),
              ));
          });
      }),
      (t[34] = b),
      (t[35] = o),
      (t[36] = j),
      (t[37] = D),
      (t[38] = a),
      (t[39] = P),
      (t[40] = R))
    : (R = t[40]);
  let ae = R,
    oe;
  t[41] !== k || t[42] !== b || t[43] !== o || t[44] !== a || t[45] !== P
    ? ((oe = () => {
        k.mutateAsync()
          .then((e) => {
            let { canceled: t } = e;
            if ((a.set(Dt, null), b.refetch(), !t)) {
              P.info(
                o.formatMessage({
                  id: `settings.agent.dependencies.cancel.noop`,
                  defaultMessage: `No Codex dependency download is running`,
                  description: `Toast shown when canceling a Codex dependency download but no download is running`,
                }),
              );
              return;
            }
            P.info(
              o.formatMessage({
                id: `settings.agent.dependencies.cancel.canceled`,
                defaultMessage: `Canceling Codex dependency download`,
                description: `Toast shown after requesting cancellation of a Codex dependency download`,
              }),
              { id: `install-primary-runtime` },
            );
          })
          .catch(() => {
            P.danger(
              o.formatMessage({
                id: `settings.agent.dependencies.cancel.failed`,
                defaultMessage: `Couldn’t cancel Codex dependency download`,
                description: `Toast shown when canceling a Codex dependency download fails`,
              }),
            );
          });
      }),
      (t[41] = k),
      (t[42] = b),
      (t[43] = o),
      (t[44] = a),
      (t[45] = P),
      (t[46] = oe))
    : (oe = t[46]);
  let se = oe,
    ce;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, $.jsx)(K.Header, { title: (0, $.jsx)(m, { ...Y.workspaceDependencies }) })),
      (t[47] = ce))
    : (ce = t[47]);
  let ue, z;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(m, { ...Y.codexDependencies })),
      (z = (0, $.jsx)(m, {
        id: `settings.agent.dependencies.enabled.description`,
        defaultMessage: `Allow ChatGPT to install and expose bundled Node.js and Python tools`,
        description: `Description for the Codex dependencies enabled toggle`,
      })),
      (t[48] = ue),
      (t[49] = z))
    : ((ue = t[48]), (z = t[49]));
  let de = l || f.isPending || h == null,
    fe;
  t[50] !== j || t[51] !== w || t[52] !== f
    ? ((fe = (e) => {
        f.mutate(
          { enabled: e, featureName: ot },
          {
            onSuccess: () => {
              e && w.mutate({ release: j });
            },
          },
        );
      }),
      (t[50] = j),
      (t[51] = w),
      (t[52] = f),
      (t[53] = fe))
    : (fe = t[53]);
  let B;
  t[54] === o
    ? (B = t[55])
    : ((B = o.formatMessage({
        id: `settings.agent.dependencies.enabled.ariaLabel`,
        defaultMessage: `Enable Codex dependencies`,
        description: `Aria label for the Codex dependencies enabled toggle`,
      })),
      (t[54] = o),
      (t[55] = B));
  let V;
  t[56] !== g || t[57] !== de || t[58] !== fe || t[59] !== B
    ? ((V = (0, $.jsx)(St, {
        label: ue,
        description: z,
        control: (0, $.jsx)(le, { checked: g, disabled: de, onChange: fe, ariaLabel: B }),
      })),
      (t[56] = g),
      (t[57] = de),
      (t[58] = fe),
      (t[59] = B),
      (t[60] = V))
    : (V = t[60]);
  let H, U;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(m, { ...Y.diagnoseWorkspaceDependencies })),
      (U = (0, $.jsx)(m, {
        id: `settings.agent.dependencies.diagnose.description`,
        defaultMessage: `Checks the current bundle and records diagnostic logs`,
        description: `Description for dependency diagnostics in settings`,
      })),
      (t[61] = H),
      (t[62] = U))
    : ((H = t[61]), (U = t[62]));
  let me, he;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(ke, { className: `icon-2xs` })),
      (he = (0, $.jsx)(m, {
        id: `settings.agent.dependencies.diagnose.button`,
        defaultMessage: `Diagnose`,
        description: `Button label for dependency diagnostics`,
      })),
      (t[63] = me),
      (t[64] = he))
    : ((me = t[63]), (he = t[64]));
  let ge;
  t[65] !== S.isPending || t[66] !== L || t[67] !== D.isPending
    ? ((ge = (0, $.jsx)(St, {
        label: H,
        description: U,
        control: (0, $.jsxs)(tt, {
          color: `secondary`,
          size: `toolbar`,
          loading: S.isPending,
          disabled: D.isPending,
          onClick: L,
          children: [me, he],
        }),
      })),
      (t[65] = S.isPending),
      (t[66] = L),
      (t[67] = D.isPending),
      (t[68] = ge))
    : (ge = t[68]);
  let W, _e;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, $.jsx)(m, { ...Y.resetWorkspaceDependencies })),
      (_e = (0, $.jsx)(m, {
        id: `settings.agent.dependencies.reset.description`,
        defaultMessage: `Downloads a fresh bundle, installs it, and reloads tools`,
        description: `Description for resetting and reinstalling dependencies in settings`,
      })),
      (t[69] = W),
      (t[70] = _e))
    : ((W = t[69]), (_e = t[70]));
  let G = F ? k.isPending : D.isPending,
    ye = !g || (F ? k.isPending : ee),
    be = F ? se : ae,
    xe;
  t[71] === F
    ? (xe = t[72])
    : ((xe = F
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(Ue, { className: `icon-2xs` }),
              (0, $.jsx)(m, {
                id: `settings.agent.dependencies.cancel.button`,
                defaultMessage: `Cancel download`,
                description: `Button label for canceling dependency download`,
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(jt, { className: `icon-2xs` }),
              (0, $.jsx)(m, {
                id: `settings.agent.dependencies.reset.button`,
                defaultMessage: `Reinstall`,
                description: `Button label for resetting and reinstalling dependencies`,
              }),
            ],
          })),
      (t[71] = F),
      (t[72] = xe));
  let Se;
  t[73] !== G || t[74] !== ye || t[75] !== be || t[76] !== xe
    ? ((Se = (0, $.jsx)(St, {
        label: W,
        description: _e,
        control: (0, $.jsx)(tt, {
          color: `danger`,
          size: `toolbar`,
          loading: G,
          disabled: ye,
          onClick: be,
          children: xe,
        }),
      })),
      (t[73] = G),
      (t[74] = ye),
      (t[75] = be),
      (t[76] = xe),
      (t[77] = Se))
    : (Se = t[77]);
  let Ce;
  t[78] !== V || t[79] !== ge || t[80] !== Se
    ? ((Ce = (0, $.jsx)(K.Content, { children: (0, $.jsxs)(ve, { children: [V, ge, Se] }) })),
      (t[78] = V),
      (t[79] = ge),
      (t[80] = Se),
      (t[81] = Ce))
    : (Ce = t[81]);
  let we;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, $.jsx)(m, { ...Y.currentDependencyVersion })), (t[82] = we))
    : (we = t[82]);
  let Te;
  t[83] !== I || t[84] !== b.isLoading || t[85] !== F || t[86] !== M
    ? ((Te = F
        ? pn(M, fn(M))
        : b.isLoading
          ? (0, $.jsx)(m, {
              id: `settings.agent.dependencies.bundleVersion.loading`,
              defaultMessage: `Checking…`,
              description: `Status while loading the current dependency bundle version`,
            })
          : (I ??
            (0, $.jsx)(m, {
              id: `settings.agent.dependencies.bundleVersion.notInstalled`,
              defaultMessage: `Not installed`,
              description: `Status when dependency bundle version is unavailable`,
            }))),
      (t[83] = I),
      (t[84] = b.isLoading),
      (t[85] = F),
      (t[86] = M),
      (t[87] = Te))
    : (Te = t[87]);
  let Ee;
  t[88] === Te
    ? (Ee = t[89])
    : ((Ee = (0, $.jsxs)(`span`, {
        className: `inline-flex flex-wrap gap-x-1`,
        children: [we, (0, $.jsx)(`span`, { children: Te })],
      })),
      (t[88] = Te),
      (t[89] = Ee));
  let De;
  t[90] === b.data?.problems.length
    ? (De = t[91])
    : ((De = b.data?.problems.length
        ? (0, $.jsx)(`span`, {
            children: (0, $.jsx)(m, {
              id: `settings.agent.dependencies.bundleVersion.problemDescription`,
              defaultMessage: `Run diagnostics or reinstall if tool calls fail`,
              description: `Description shown when dependency diagnostics have problems`,
            }),
          })
        : null),
      (t[90] = b.data?.problems.length),
      (t[91] = De));
  let Oe;
  t[92] !== Ee || t[93] !== De
    ? ((Oe = (0, $.jsxs)(K.Footer, { className: `flex flex-col gap-1`, children: [Ee, De] })),
      (t[92] = Ee),
      (t[93] = De),
      (t[94] = Oe))
    : (Oe = t[94]);
  let Ae;
  return (
    t[95] !== Ce || t[96] !== Oe
      ? ((Ae = (0, $.jsxs)(K, { children: [ce, Ce, Oe] })),
        (t[95] = Ce),
        (t[96] = Oe),
        (t[97] = Ae))
      : (Ae = t[97]),
    Ae
  );
}
function yr(e) {
  return e.name === ot;
}
function br(e) {
  let t = (0, Nr.c)(72),
    { hostId: n } = e,
    i = r(Ne),
    a = ie(),
    o = ee(),
    [s, c] = (0, Pr.useState)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = []), (t[0] = l)) : (l = t[0]);
  let [u, d] = (0, Pr.useState)(l),
    p;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = {}), (t[1] = p)) : (p = t[1]);
  let [g, _] = (0, Pr.useState)(p),
    v = T(f),
    y;
  t[2] === o.state ? (y = t[3]) : ((y = en(o.state)), (t[2] = o.state), (t[3] = y));
  let b = y,
    S = b.hasValue ? (n === `local` ? b.workspaceRoot : null) : n === `local` ? v : null,
    C = Ct(n),
    E = ne(O, n),
    D = n === `local` ? `fallback-to-workspace` : `preserve-null`,
    k;
  t[4] !== n || t[5] !== D
    ? ((k = { hostId: n, cwdMode: D }), (t[4] = n), (t[5] = D), (t[6] = k))
    : (k = t[6]);
  let { data: A, isPending: M } = ce(S, k),
    N;
  t[7] === n ? (N = t[8]) : ((N = { hostId: n }), (t[7] = n), (t[8] = N));
  let { data: te, isPending: F } = ne(Rt, N),
    I = A?.config ?? null,
    re = A?.layers ?? null,
    L = A?.origins ?? null,
    R = te?.requirements ?? null,
    oe = wr(re, a),
    ue = ge(re),
    z = null,
    de = null;
  for (let e of re ?? []) ae(e.name) ? (z = e) : e.name.type === `enterpriseManaged` && (de = e);
  z ??= de;
  let fe = C == null ? null : `${C}/config.toml`,
    pe = ue == null ? fe : w(ue.name),
    V = {
      key: `user`,
      kind: `user`,
      label: a.formatMessage(Y.userConfig),
      tooltipText: pe ?? `~/.codex/config.toml`,
      filePath: pe,
      expectedVersion: ue?.version ?? null,
      workspaceRoot: null,
      layer: ue,
    },
    H =
      z == null
        ? null
        : {
            key: `managed`,
            kind: `managed`,
            label: a.formatMessage(Y.adminConfig),
            tooltipText: a.formatMessage({
              id: `settings.agent.configuration.scope.managedDescription`,
              defaultMessage: `Managed by admin policy`,
              description: `Tooltip text for the admin config scope in configuration settings`,
            }),
            filePath: w(z.name),
            expectedVersion: z.version,
            workspaceRoot: null,
            layer: z,
          },
    U = [...oe, V, ...(H == null ? [] : [H])],
    me = oe.length > 0,
    he = S == null ? (U[0]?.key ?? null) : `project:${S}`,
    W = U.find((e) => e.key === s) ?? U.find((e) => e.key === he) ?? U[0] ?? null,
    { data: _e } = ne(h, {
      cwd: W?.workspaceRoot == null ? (S == null ? null : Ge(S)) : Ge(W.workspaceRoot),
      hostId: n,
    }),
    G = Dr(W?.layer?.config ?? null),
    ye = Mr(I?.approval_policy ?? null) ?? `on-request`,
    be = I?.sandbox_mode ?? `read-only`,
    xe = G.sandboxMode == null && be === `workspace-write`,
    Ce = G.sandboxMode === `workspace-write` || xe,
    we = G.approvalPolicy ?? ye,
    Te = G.sandboxMode ?? be,
    De = Ar(we),
    Oe = jr(Te),
    ke = G.networkAccess ?? I?.sandbox_workspace_write?.network_access ?? !1,
    Ae = G.webSearch ?? I?.web_search ?? Ee(Te),
    je = G.modelVerbosity ?? I?.model_verbosity ?? null,
    Me = G.reasoningSummary ?? I?.model_reasoning_summary ?? `auto`,
    Pe = L == null ? null : et(L, `approval_policy`, [`approvalPolicy`]),
    Fe = L == null ? null : et(L, `sandbox_mode`),
    Ie = L == null ? null : et(L, `sandbox_workspace_write`, [`network_access`]),
    Le = L == null ? null : et(L, `web_search`),
    Re = L == null ? null : et(L, `model_verbosity`),
    ze = L == null ? null : et(L, `model_reasoning_summary`),
    Be = W?.kind === `project` ? (W.layer?.disabledReason ?? null) : null,
    Ve = Or(W, a),
    He;
  t[9] === R
    ? (He = t[10])
    : ((He = (e) =>
        R?.allowedApprovalPolicies == null || R.allowedApprovalPolicies.includes(e.value)),
      (t[9] = R),
      (t[10] = He));
  let Ue = Fr.filter(He),
    We;
  t[11] === R
    ? (We = t[12])
    : ((We = (e) => R?.allowedSandboxModes == null || R.allowedSandboxModes.includes(e.value)),
      (t[11] = R),
      (t[12] = We));
  let Ke = Lr.filter(We),
    qe;
  if (t[13] !== E || t[14] !== R?.allowedWebSearchModes) {
    let e = Se({ allowedModes: R?.allowedWebSearchModes ?? null, appServerVersion: E });
    ((qe = Rr.filter((t) => e.includes(t.value))),
      (t[13] = E),
      (t[14] = R?.allowedWebSearchModes),
      (t[15] = qe));
  } else qe = t[15];
  let Je = qe,
    q = async function (e, t, r) {
      if (W?.filePath == null || u.includes(e)) return;
      let o = W.filePath;
      (d((t) => [...t, e]),
        _((t) => ({ ...t, [e]: void 0 })),
        await (async () => {
          try {
            await i.get(Vt, n).mutateAsync({
              cwd: n === `local` ? (S ?? v) : null,
              expectedVersion: W.expectedVersion,
              filePath: o,
              keyPath: t,
              kind: W.kind,
              projectWrite:
                W.kind === `project`
                  ? () => Gn({ filePath: o, hostId: n, keyPath: t, value: r })
                  : void 0,
              value: r,
            });
          } catch (t) {
            let n = t,
              r =
                n instanceof Error &&
                n.message === `The sandbox_workspace_write inline table cannot be updated safely.`
                  ? a.formatMessage({
                      id: `settings.agent.configuration.inlineSandboxWriteError`,
                      defaultMessage: `This project uses an inline sandbox table. Edit config.toml directly to change network access`,
                      description: `Error shown when a project uses an inline sandbox table that cannot be edited safely`,
                    })
                  : a.formatMessage({
                      id: `settings.agent.configuration.writeError`,
                      defaultMessage: `Couldn't update this setting. Check config.toml for errors and try again`,
                      description: `Error shown when a configuration setting cannot be saved`,
                    });
            _((t) => ({ ...t, [e]: r }));
          }
        })().finally(() => {
          d((t) => t.filter((t) => t !== e));
        }));
    },
    Xe = M || F,
    Ze = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: Pe,
      selectedScope: W,
      hasOptions: Ue.length > 0,
      restrictedMessage: a.formatMessage({
        id: `settings.agent.configuration.approval.restricted`,
        defaultMessage: `Approval policy is restricted by this installation.`,
        description: `Restriction message for approval policy in configuration settings`,
      }),
    }),
    Qe = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: Fe,
      selectedScope: W,
      hasOptions: Ke.length > 0,
      restrictedMessage: a.formatMessage({
        id: `settings.agent.configuration.sandbox.restricted`,
        defaultMessage: `Sandbox mode is restricted by this installation.`,
        description: `Restriction message for sandbox mode in configuration settings`,
      }),
    }),
    $e = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: Ie,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    nt = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: Le,
      selectedScope: W,
      hasOptions: Je.length > 0,
      restrictedMessage: a.formatMessage({
        id: `settings.agent.configuration.webSearch.restricted`,
        defaultMessage: `Web search is restricted by this installation`,
        description: `Restriction message for web search in configuration settings`,
      }),
    }),
    rt = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: Re,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    it = kr({
      intl: a,
      scopeLockReason: Ve,
      origin: ze,
      selectedScope: W,
      hasOptions: !0,
      restrictedMessage: ``,
    }),
    J = Xe || Be != null,
    at = J || u.includes(`approval`) || Ze != null,
    ot = J || u.includes(`sandbox`) || Qe != null,
    st;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => {
        (c(e), _({}));
      }),
      (t[16] = st))
    : (st = t[16]);
  let ct = st,
    lt;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, $.jsx)(j.SectionLabel, { children: (0, $.jsx)(m, { ...Y.globalConfig }) })),
      (t[17] = lt))
    : (lt = t[17]);
  let ut, dt;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ut = (0, $.jsx)(m, {
        id: `settings.agent.configuration.scope.open`,
        defaultMessage: `Open config.toml`,
        description: `Button label to open the selected config file`,
      })),
      (dt = (0, $.jsx)(Ye, { className: `icon-2xs` })),
      (t[18] = ut),
      (t[19] = dt))
    : ((ut = t[18]), (dt = t[19]));
  let ft;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, $.jsx)(m, { ...Y.approvalPolicy })), (t[20] = ft))
    : (ft = t[20]);
  let pt;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pt = (0, $.jsx)(m, {
        id: `settings.agent.configuration.approval.definition`,
        defaultMessage: `Choose when ChatGPT asks for approval`,
        description: `Definition for approval policy in configuration settings`,
      })),
      (t[21] = pt))
    : (pt = t[21]);
  let mt;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, $.jsx)(m, { ...Y.sandboxSettings })), (t[22] = mt))
    : (mt = t[22]);
  let ht;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, $.jsx)(m, {
        id: `settings.agent.configuration.sandbox.definition`,
        defaultMessage: `Choose how much ChatGPT can do when running commands`,
        description: `Explains that the sandbox setting chooses the file-access permissions used for commands run by ChatGPT`,
      })),
      (t[23] = ht))
    : (ht = t[23]);
  let gt;
  t[24] !== J ||
  t[25] !== ke ||
  t[26] !== g.network ||
  t[27] !== a ||
  t[28] !== $e ||
  t[29] !== u ||
  t[30] !== Ce ||
  t[31] !== q
    ? ((gt = Ce
        ? (0, $.jsx)(St, {
            label: (0, $.jsx)(m, { ...Y.networkAccess }),
            description: (0, $.jsx)(Cr, {
              error: g.network,
              lockReason: $e,
              children: (0, $.jsx)(m, {
                id: `settings.agent.configuration.network.definition`,
                defaultMessage: `Allow network access when the sandbox is set to workspace write`,
                description: `Explains that this toggle controls network access specifically while the command sandbox is in workspace-write mode`,
              }),
            }),
            control: (0, $.jsx)(le, {
              checked: ke,
              disabled: J || u.includes(`network`) || $e != null,
              onChange: (e) => {
                q(`network`, `sandbox_workspace_write.network_access`, e);
              },
              ariaLabel: a.formatMessage({
                id: `settings.agent.configuration.network.ariaLabel`,
                defaultMessage: `Allow network access`,
                description: `Accessible label for toggling network access for commands run in the workspace-write sandbox`,
              }),
            }),
          })
        : null),
      (t[24] = J),
      (t[25] = ke),
      (t[26] = g.network),
      (t[27] = a),
      (t[28] = $e),
      (t[29] = u),
      (t[30] = Ce),
      (t[31] = q),
      (t[32] = gt))
    : (gt = t[32]);
  let _t;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_t = (0, $.jsx)(m, {
        id: `settings.agent.configuration.webSearch.definition`,
        defaultMessage: `Choose how ChatGPT accesses the web`,
        description: `Definition for web search in configuration settings`,
      })),
      (t[33] = _t))
    : (_t = t[33]);
  let yt;
  t[34] !== J || t[35] !== u
    ? ((yt = J || u.includes(`webSearch`)), (t[34] = J), (t[35] = u), (t[36] = yt))
    : (yt = t[36]);
  let bt;
  t[37] === q
    ? (bt = t[38])
    : ((bt = (e) => {
        q(`webSearch`, `web_search`, e);
      }),
      (t[37] = q),
      (t[38] = bt));
  let xt;
  t[39] !== Ae ||
  t[40] !== g.webSearch ||
  t[41] !== yt ||
  t[42] !== bt ||
  t[43] !== nt ||
  t[44] !== Je
    ? ((xt = (0, $.jsx)(xr, {
        label: Y.webSearch,
        description: _t,
        error: g.webSearch,
        lockReason: nt,
        options: Je,
        value: Ae,
        disabled: yt,
        onSelect: bt,
      })),
      (t[39] = Ae),
      (t[40] = g.webSearch),
      (t[41] = yt),
      (t[42] = bt),
      (t[43] = nt),
      (t[44] = Je),
      (t[45] = xt))
    : (xt = t[45]);
  let wt;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, $.jsx)(m, {
        id: `settings.agent.configuration.modelVerbosity.definition`,
        defaultMessage: `Choose how much detail ChatGPT includes in responses`,
        description: `Definition for model verbosity in configuration settings`,
      })),
      (t[46] = wt))
    : (wt = t[46]);
  let Tt;
  t[47] !== J || t[48] !== u
    ? ((Tt = J || u.includes(`modelVerbosity`)), (t[47] = J), (t[48] = u), (t[49] = Tt))
    : (Tt = t[49]);
  let Et;
  t[50] === q
    ? (Et = t[51])
    : ((Et = (e) => {
        q(`modelVerbosity`, `model_verbosity`, e);
      }),
      (t[50] = q),
      (t[51] = Et));
  let Dt;
  t[52] !== je || t[53] !== g.modelVerbosity || t[54] !== rt || t[55] !== Tt || t[56] !== Et
    ? ((Dt = (0, $.jsx)(xr, {
        label: Y.modelVerbosity,
        description: wt,
        error: g.modelVerbosity,
        lockReason: rt,
        options: zr,
        value: je,
        disabled: Tt,
        onSelect: Et,
      })),
      (t[52] = je),
      (t[53] = g.modelVerbosity),
      (t[54] = rt),
      (t[55] = Tt),
      (t[56] = Et),
      (t[57] = Dt))
    : (Dt = t[57]);
  let Ot;
  t[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = (0, $.jsx)(m, {
        id: `settings.agent.configuration.reasoningSummary.definition`,
        defaultMessage: `Choose how ChatGPT summarizes its reasoning`,
        description: `Definition for reasoning summary in configuration settings`,
      })),
      (t[58] = Ot))
    : (Ot = t[58]);
  let kt;
  t[59] !== J || t[60] !== u
    ? ((kt = J || u.includes(`reasoningSummary`)), (t[59] = J), (t[60] = u), (t[61] = kt))
    : (kt = t[61]);
  let At;
  t[62] === q
    ? (At = t[63])
    : ((At = (e) => {
        q(`reasoningSummary`, `model_reasoning_summary`, e);
      }),
      (t[62] = q),
      (t[63] = At));
  let jt;
  t[64] !== Me || t[65] !== g.reasoningSummary || t[66] !== it || t[67] !== kt || t[68] !== At
    ? ((jt = (0, $.jsx)(xr, {
        label: Y.reasoningSummary,
        description: Ot,
        error: g.reasoningSummary,
        lockReason: it,
        options: Br,
        value: Me,
        disabled: kt,
        onSelect: At,
      })),
      (t[64] = Me),
      (t[65] = g.reasoningSummary),
      (t[66] = it),
      (t[67] = kt),
      (t[68] = At),
      (t[69] = jt))
    : (jt = t[69]);
  let Mt;
  return (
    t[70] === n
      ? (Mt = t[71])
      : ((Mt = n === `local` ? null : (0, $.jsx)(Qt, { hostId: n })), (t[70] = n), (t[71] = Mt)),
    (0, $.jsxs)(K, {
      children: [
        (0, $.jsx)(K.Header, {
          title: (0, $.jsxs)(P, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: U.length === 0,
            triggerButton: (0, $.jsx)(B, {
              disabled: U.length === 0,
              contentClassName: `truncate`,
              children:
                W?.label ??
                a.formatMessage({
                  id: `settings.agent.configuration.scope.loading`,
                  defaultMessage: `Loading…`,
                  description: `Fallback label while config scope options are loading`,
                }),
            }),
            children: [
              me
                ? (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsxs)(j.Section, {
                        children: [
                          (0, $.jsx)(j.SectionLabel, {
                            children: (0, $.jsx)(m, { ...Y.projectConfig }),
                          }),
                          oe.map((e) =>
                            (0, $.jsx)(
                              Sr,
                              {
                                scopeOption: e,
                                selected: W?.key === e.key,
                                onSelect: () => {
                                  ct(e.key);
                                },
                              },
                              e.key,
                            ),
                          ),
                        ],
                      }),
                      (0, $.jsx)(j.Separator, {}),
                    ],
                  })
                : null,
              (0, $.jsxs)(j.Section, {
                children: [
                  lt,
                  (0, $.jsx)(Sr, {
                    scopeOption: V,
                    selected: W?.key === V.key,
                    onSelect: () => {
                      ct(V.key);
                    },
                  }),
                  H == null
                    ? null
                    : (0, $.jsx)(Sr, {
                        scopeOption: H,
                        selected: W?.key === H.key,
                        onSelect: () => {
                          ct(H.key);
                        },
                      }),
                ],
              }),
            ],
          }),
          actions: (0, $.jsxs)(tt, {
            color: `ghost`,
            size: `toolbar`,
            disabled: W?.filePath == null,
            onClick: () => {
              W?.filePath != null &&
                x({
                  path: W.filePath,
                  cwd: W.workspaceRoot == null ? null : Ge(W.workspaceRoot),
                  hostId: n,
                  target: _e?.preferredTarget,
                });
            },
            children: [ut, dt],
          }),
        }),
        (0, $.jsxs)(K.Content, {
          children: [
            Be == null ? null : (0, $.jsx)(Bt, { content: Be, Icon: se, type: `warning` }),
            (0, $.jsxs)(ve, {
              children: [
                (0, $.jsx)(St, {
                  label: ft,
                  description: (0, $.jsx)(Cr, { error: g.approval, lockReason: Ze, children: pt }),
                  control: (0, $.jsx)(P, {
                    align: `end`,
                    contentWidth: `panelWide`,
                    disabled: at,
                    triggerButton: (0, $.jsx)(B, {
                      disabled: at,
                      contentClassName: `truncate`,
                      children: De == null ? we : a.formatMessage(De.label),
                    }),
                    children: Ue.map((e) =>
                      (0, $.jsx)(
                        j.Item,
                        {
                          RightIcon: e.value === we ? vt : void 0,
                          subTextAllowWrap: !0,
                          onSelect: () => {
                            q(`approval`, `approval_policy`, e.value);
                          },
                          SubText: (0, $.jsx)(`div`, {
                            className: `pt-1 text-sm text-secondary`,
                            children: e.description,
                          }),
                          children: (0, $.jsx)(`span`, {
                            className: `text-sm`,
                            children: a.formatMessage(e.label),
                          }),
                        },
                        e.value,
                      ),
                    ),
                  }),
                }),
                (0, $.jsx)(St, {
                  label: mt,
                  description: (0, $.jsx)(Cr, { error: g.sandbox, lockReason: Qe, children: ht }),
                  control: (0, $.jsx)(P, {
                    align: `end`,
                    contentWidth: `panelWide`,
                    disabled: ot,
                    triggerButton: (0, $.jsx)(B, {
                      disabled: ot,
                      contentClassName: `truncate`,
                      children: Oe == null ? Te : a.formatMessage(Oe.label),
                    }),
                    children: Ke.map((e) =>
                      (0, $.jsx)(
                        j.Item,
                        {
                          RightIcon: e.value === Te ? vt : void 0,
                          subTextAllowWrap: !0,
                          onSelect: () => {
                            q(`sandbox`, `sandbox_mode`, e.value);
                          },
                          SubText: (0, $.jsx)(`div`, {
                            className: `pt-1 text-sm text-secondary`,
                            children: e.description,
                          }),
                          children: (0, $.jsx)(`span`, {
                            className: `text-sm`,
                            children: a.formatMessage(e.label),
                          }),
                        },
                        e.value,
                      ),
                    ),
                  }),
                }),
                gt,
                xt,
                Dt,
                jt,
                Mt,
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function xr(e) {
  let t = (0, Nr.c)(36),
    {
      description: n,
      disabled: r,
      error: i,
      label: a,
      lockReason: o,
      onSelect: s,
      options: c,
      value: l,
    } = e,
    u = ie(),
    d;
  if (t[0] !== c || t[1] !== l) {
    let e;
    (t[3] === l ? (e = t[4]) : ((e = (e) => e.value === l), (t[3] = l), (t[4] = e)),
      (d = c.find(e)),
      (t[0] = c),
      (t[1] = l),
      (t[2] = d));
  } else d = t[2];
  let f = d,
    p = r || o != null,
    h;
  t[5] === a ? (h = t[6]) : ((h = (0, $.jsx)(m, { ...a })), (t[5] = a), (t[6] = h));
  let g;
  t[7] !== n || t[8] !== i || t[9] !== o
    ? ((g = (0, $.jsx)(Cr, { error: i, lockReason: o, children: n })),
      (t[7] = n),
      (t[8] = i),
      (t[9] = o),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] !== u || t[12] !== a
    ? ((_ = u.formatMessage(a)), (t[11] = u), (t[12] = a), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== f || t[15] !== l
    ? ((v = f == null ? l : (0, $.jsx)(m, { ...f.label })), (t[14] = f), (t[15] = l), (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== p || t[18] !== _ || t[19] !== v
    ? ((y = (0, $.jsx)(B, {
        disabled: p,
        contentClassName: `truncate`,
        "aria-label": _,
        children: v,
      })),
      (t[17] = p),
      (t[18] = _),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let b;
  if (t[21] !== s || t[22] !== c || t[23] !== l) {
    let e;
    (t[25] !== s || t[26] !== l
      ? ((e = (e) =>
          (0, $.jsx)(
            j.Item,
            {
              RightIcon: e.value === l ? vt : void 0,
              subTextAllowWrap: !0,
              onSelect: () => {
                s(e.value);
              },
              SubText:
                e.description == null
                  ? void 0
                  : (0, $.jsx)(`div`, {
                      className: `pt-1 text-sm text-secondary`,
                      children: (0, $.jsx)(m, { ...e.description }),
                    }),
              children: (0, $.jsx)(`span`, {
                className: `text-sm`,
                children: (0, $.jsx)(m, { ...e.label }),
              }),
            },
            e.value ?? `model-default`,
          )),
        (t[25] = s),
        (t[26] = l),
        (t[27] = e))
      : (e = t[27]),
      (b = c.map(e)),
      (t[21] = s),
      (t[22] = c),
      (t[23] = l),
      (t[24] = b));
  } else b = t[24];
  let x;
  t[28] !== p || t[29] !== y || t[30] !== b
    ? ((x = (0, $.jsx)(P, {
        align: `end`,
        contentWidth: `panelWide`,
        disabled: p,
        triggerButton: y,
        children: b,
      })),
      (t[28] = p),
      (t[29] = y),
      (t[30] = b),
      (t[31] = x))
    : (x = t[31]);
  let S;
  return (
    t[32] !== h || t[33] !== g || t[34] !== x
      ? ((S = (0, $.jsx)(St, { label: h, description: g, control: x })),
        (t[32] = h),
        (t[33] = g),
        (t[34] = x),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function Sr(e) {
  let t = (0, Nr.c)(7),
    { onSelect: n, scopeOption: r, selected: i } = e,
    a = i ? vt : void 0,
    o;
  t[0] === r.label
    ? (o = t[1])
    : ((o = (0, $.jsx)(`span`, { className: `truncate text-sm`, children: r.label })),
      (t[0] = r.label),
      (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== r.tooltipText || t[4] !== a || t[5] !== o
      ? ((s = (0, $.jsx)(j.Item, {
          RightIcon: a,
          tooltipText: r.tooltipText,
          tooltipSide: `right`,
          onSelect: n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = r.tooltipText),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Cr(e) {
  let t = (0, Nr.c)(10),
    { children: n, error: r, lockReason: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = (0, $.jsx)(`div`, { children: n })), (t[0] = n), (t[1] = a));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o =
        i == null
          ? null
          : (0, $.jsxs)(`div`, {
              className: `inline-flex items-center gap-1 text-sm text-warning`,
              children: [
                (0, $.jsx)(me, { className: `icon-2xs` }),
                (0, $.jsx)(`span`, { children: i }),
              ],
            })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s =
        r == null ? null : (0, $.jsx)(`div`, { className: `text-sm text-danger`, children: r })),
      (t[4] = r),
      (t[5] = s));
  let c;
  return (
    t[6] !== a || t[7] !== o || t[8] !== s
      ? ((c = (0, $.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [a, o, s] })),
        (t[6] = a),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
function wr(e, t) {
  if (e == null) return [];
  let n = [];
  for (let r of e) {
    if (r.name.type !== `project`) continue;
    let e = Tr(r.name.dotCodexFolder);
    n.push({
      key: `project:${e ?? r.name.dotCodexFolder}`,
      kind: `project`,
      label: t.formatMessage(
        {
          id: `settings.agent.configuration.scope.project`,
          defaultMessage: `{repoName}`,
          description: `Label for a project config scope in configuration settings`,
        },
        { repoName: Er(e ?? r.name.dotCodexFolder) },
      ),
      tooltipText: w(r.name) ?? r.name.dotCodexFolder,
      filePath: w(r.name),
      expectedVersion: r.version,
      workspaceRoot: e,
      layer: r,
    });
  }
  return n;
}
function Tr(e) {
  return e.endsWith(`/.codex`) || e.endsWith(`\\.codex`) ? e.slice(0, -7) : null;
}
function Er(e) {
  return e.split(/[/\\]/).at(-1) || e;
}
function Dr(e) {
  if (typeof e != `object` || !e || Array.isArray(e))
    return {
      approvalPolicy: null,
      sandboxMode: null,
      networkAccess: null,
      webSearch: null,
      modelVerbosity: null,
      reasoningSummary: null,
    };
  let t = e.approval_policy,
    n = e.sandbox_mode,
    r = e.sandbox_workspace_write,
    i = e.web_search,
    a = e.model_verbosity,
    o = e.model_reasoning_summary;
  return {
    approvalPolicy: Mr(t ?? null),
    sandboxMode:
      n === `read-only` || n === `workspace-write` || n === `danger-full-access` ? n : null,
    networkAccess:
      typeof r == `object` && r && !Array.isArray(r) && typeof r.network_access == `boolean`
        ? r.network_access
        : null,
    webSearch: i === `disabled` || i === `cached` || i === `indexed` || i === `live` ? i : null,
    modelVerbosity: a === `low` || a === `medium` || a === `high` ? a : null,
    reasoningSummary:
      o === `auto` || o === `concise` || o === `detailed` || o === `none` ? o : null,
  };
}
function Or(e, t) {
  return e == null
    ? t.formatMessage({
        id: `settings.agent.configuration.scope.unavailable`,
        defaultMessage: `Config scope unavailable.`,
        description: `Message shown when no config scope is available in configuration settings`,
      })
    : e.kind === `managed` || e.filePath == null
      ? t.formatMessage({
          id: `settings.agent.configuration.scope.readOnly`,
          defaultMessage: `This config source cannot be edited here.`,
          description: `Message shown when the selected config scope cannot be edited`,
        })
      : null;
}
function kr({
  intl: e,
  scopeLockReason: t,
  origin: n,
  selectedScope: r,
  hasOptions: i,
  restrictedMessage: a,
}) {
  return (
    t ??
    (i
      ? r?.kind !== `managed` && n != null && ae(n.name)
        ? e.formatMessage({
            id: `settings.agent.configuration.control.managed`,
            defaultMessage: `This value is managed by admin policy.`,
            description: `Message shown when a configuration control is managed by admin policy`,
          })
        : null
      : a)
  );
}
function Ar(e) {
  return Fr.find((t) => t.value === e) ?? Ir.find((t) => t.value === e) ?? null;
}
function jr(e) {
  return Lr.find((t) => t.value === e) ?? null;
}
function Mr(e) {
  return e === `untrusted` || e === `on-request` || e === `never` || e === `on-failure` ? e : null;
}
var Nr, Pr, $, Fr, Ir, Lr, Rr, zr, Br;
e(() => {
  ((Nr = it()),
    We(),
    Ot(),
    I(),
    c(),
    (Pr = t(o(), 1)),
    H(),
    A(),
    Pt(),
    wt(),
    qe(),
    sn(),
    ln(),
    dn(),
    at(),
    Qe(),
    hn(),
    _e(),
    i(),
    l(),
    a(),
    we(),
    rt(),
    n(),
    S(),
    U(),
    F(),
    re(),
    _t(),
    M(),
    ut(),
    C(),
    Ft(),
    E(),
    q(),
    Ut(),
    z(),
    b(),
    Ve(),
    Ze(),
    mt(),
    xt(),
    ye(),
    Wt(),
    fe(),
    tr(),
    sr(),
    mr(),
    Zt(),
    de(),
    oe(),
    $t(),
    xe(),
    W(),
    k(),
    te(),
    dt(),
    Pe(),
    Je(),
    he(),
    ($ = Xe()),
    (Fr = [
      { value: `on-request`, label: Y.onRequest, description: `Ask when escalation is requested` },
      {
        value: `never`,
        label: Y.never,
        description: `Blocked actions fail instead of requesting approval`,
      },
    ]),
    (Ir = [
      { value: `on-failure`, label: Y.onFailure },
      { value: `untrusted`, label: Y.untrusted },
    ]),
    (Lr = [
      {
        value: `read-only`,
        label: Y.readOnly,
        description: `Can read files, but cannot edit them`,
      },
      {
        value: `workspace-write`,
        label: Y.workspaceWrite,
        description: `Can edit files, but only in this workspace`,
      },
      {
        value: `danger-full-access`,
        label: Y.fullAccess,
        description: `Can edit files outside this workspace`,
      },
    ]),
    (Rr = [
      {
        value: `disabled`,
        label: Y.webSearchDisabled,
        description: Y.webSearchDisabledDescription,
      },
      { value: `cached`, label: Y.webSearchCached, description: Y.webSearchCachedDescription },
      { value: `indexed`, label: Y.webSearchIndexed, description: Y.webSearchIndexedDescription },
      { value: `live`, label: Y.webSearchLive, description: Y.webSearchLiveDescription },
    ]),
    (zr = [
      { value: null, label: Y.modelDefault, description: null },
      { value: `low`, label: Y.modelVerbosityLow, description: Y.modelVerbosityLowDescription },
      {
        value: `medium`,
        label: Y.modelVerbosityMedium,
        description: Y.modelVerbosityMediumDescription,
      },
      { value: `high`, label: Y.modelVerbosityHigh, description: Y.modelVerbosityHighDescription },
    ]),
    (Br = [
      {
        value: `auto`,
        label: Y.reasoningSummaryAuto,
        description: Y.reasoningSummaryAutoDescription,
      },
      {
        value: `concise`,
        label: Y.reasoningSummaryConcise,
        description: Y.reasoningSummaryConciseDescription,
      },
      {
        value: `detailed`,
        label: Y.reasoningSummaryDetailed,
        description: Y.reasoningSummaryDetailedDescription,
      },
      {
        value: `none`,
        label: Y.reasoningSummaryNone,
        description: Y.reasoningSummaryNoneDescription,
      },
    ]));
})();
export { hr as AgentSettings };
//# sourceMappingURL=agent-settings-bfb770313a62.js.map
