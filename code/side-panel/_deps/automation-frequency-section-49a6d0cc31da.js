import { n as e, o as t, t as n } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as r,
  Amn as i,
  Aun as a,
  Az as o,
  CW as s,
  Cpn as c,
  Dz as l,
  Ez as u,
  Fpn as d,
  Fun as f,
  Hu as p,
  Ipn as m,
  Iun as h,
  JG as g,
  JK as _,
  Jrt as v,
  KG as y,
  Lpn as b,
  Lun as x,
  Mun as S,
  Nun as C,
  Opn as w,
  Oun as T,
  Oz as ee,
  Pun as te,
  Rpn as E,
  Spn as ne,
  TW as re,
  Tz as ie,
  Vu as ae,
  Xrt as oe,
  Xu as se,
  Yrt as ce,
  ZG as D,
  Zrt as le,
  _un as O,
  bpn as k,
  eit as ue,
  gMt as de,
  gun as fe,
  hMt as pe,
  hmn as A,
  hpn as me,
  hun as he,
  iit as ge,
  jpn as _e,
  jun as ve,
  kMt as ye,
  kmn as be,
  kun as xe,
  mpn as j,
  mun as Se,
  nit as Ce,
  pmn as we,
  qK as Te,
  qu as M,
  rit as Ee,
  tit as De,
  vit as Oe,
  xpn as ke,
  xz as Ae,
  yit as je,
  yz as Me,
  zpn as Ne,
} from "./app-initial-f094ef01c64d.js";
import {
  CT as Pe,
  DT as Fe,
  ET as Ie,
  Jh as Le,
  ST as Re,
  TT as ze,
  _T as Be,
  bT as Ve,
  gT as He,
  qh as Ue,
  vT as We,
  wT as Ge,
  xT as Ke,
  yT as qe,
} from "./app-primary-4c40d73a1074.js";
import {
  a as Je,
  c as Ye,
  d as Xe,
  f as Ze,
  i as Qe,
  l as $e,
  m as et,
  n as tt,
  o as nt,
  p as rt,
  r as it,
  s as at,
  t as ot,
  u as st,
} from "./ChevronRight-9ebd4395b90f.js";
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  N,
  mt,
  ht = e(() => {
    ((ct = class extends Error {}),
      (lt = class extends ct {
        constructor(e) {
          super(`Invalid DateTime: ${e.toMessage()}`);
        }
      }),
      (ut = class extends ct {
        constructor(e) {
          super(`Invalid Interval: ${e.toMessage()}`);
        }
      }),
      (dt = class extends ct {
        constructor(e) {
          super(`Invalid Duration: ${e.toMessage()}`);
        }
      }),
      (ft = class extends ct {}),
      (pt = class extends ct {
        constructor(e) {
          super(`Invalid unit ${e}`);
        }
      }),
      (N = class extends ct {}),
      (mt = class extends ct {
        constructor() {
          super(`Zone is an abstract class`);
        }
      }));
  }),
  P,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt = e(() => {
    ((P = `numeric`),
      (gt = `short`),
      (_t = `long`),
      (vt = { year: P, month: P, day: P }),
      (yt = { year: P, month: gt, day: P }),
      (bt = { year: P, month: gt, day: P, weekday: gt }),
      (xt = { year: P, month: _t, day: P }),
      (St = { year: P, month: _t, day: P, weekday: _t }),
      (Ct = { hour: P, minute: P }),
      (wt = { hour: P, minute: P, second: P }),
      (Tt = { hour: P, minute: P, second: P, timeZoneName: gt }),
      (Et = { hour: P, minute: P, second: P, timeZoneName: _t }),
      (Dt = { hour: P, minute: P, hourCycle: `h23` }),
      (Ot = { hour: P, minute: P, second: P, hourCycle: `h23` }),
      (kt = { hour: P, minute: P, second: P, hourCycle: `h23`, timeZoneName: gt }),
      (At = { hour: P, minute: P, second: P, hourCycle: `h23`, timeZoneName: _t }),
      (jt = { year: P, month: P, day: P, hour: P, minute: P }),
      (Mt = { year: P, month: P, day: P, hour: P, minute: P, second: P }),
      (Nt = { year: P, month: gt, day: P, hour: P, minute: P }),
      (Pt = { year: P, month: gt, day: P, hour: P, minute: P, second: P }),
      (Ft = { year: P, month: gt, day: P, weekday: gt, hour: P, minute: P }),
      (It = { year: P, month: _t, day: P, hour: P, minute: P, timeZoneName: gt }),
      (Lt = { year: P, month: _t, day: P, hour: P, minute: P, second: P, timeZoneName: gt }),
      (Rt = { year: P, month: _t, day: P, weekday: _t, hour: P, minute: P, timeZoneName: _t }),
      (zt = {
        year: P,
        month: _t,
        day: P,
        weekday: _t,
        hour: P,
        minute: P,
        second: P,
        timeZoneName: _t,
      }));
  }),
  Vt,
  Ht = e(() => {
    (ht(),
      (Vt = class {
        get type() {
          throw new mt();
        }
        get name() {
          throw new mt();
        }
        get ianaName() {
          return this.name;
        }
        get isUniversal() {
          throw new mt();
        }
        offsetName(e, t) {
          throw new mt();
        }
        formatOffset(e, t) {
          throw new mt();
        }
        offset(e) {
          throw new mt();
        }
        equals(e) {
          throw new mt();
        }
        get isValid() {
          throw new mt();
        }
      }));
  }),
  Ut,
  Wt,
  Gt = e(() => {
    (Gr(),
      Ht(),
      (Ut = null),
      (Wt = class e extends Vt {
        static get instance() {
          return (Ut === null && (Ut = new e()), Ut);
        }
        get type() {
          return `system`;
        }
        get name() {
          return new Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(e, { format: t, locale: n }) {
          return zr(e, t, n);
        }
        formatOffset(e, t) {
          return Ur(this.offset(e), t);
        }
        offset(e) {
          return -new Date(e).getTimezoneOffset();
        }
        equals(e) {
          return e.type === `system`;
        }
        get isValid() {
          return !0;
        }
      }));
  });
function Kt(e) {
  let t = Yt.get(e);
  return (
    t === void 0 &&
      ((t = new Intl.DateTimeFormat(`en-US`, {
        hour12: !1,
        timeZone: e,
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        era: `short`,
      })),
      Yt.set(e, t)),
    t
  );
}
function qt(e, t) {
  let n = e.format(t).replace(/\u200E/g, ``),
    [, r, i, a, o, s, c, l] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(n);
  return [a, r, i, o, s, c, l];
}
function Jt(e, t) {
  let n = e.formatToParts(t),
    r = [];
  for (let e = 0; e < n.length; e++) {
    let { type: t, value: i } = n[e],
      a = Xt[t];
    t === `era` ? (r[a] = i) : L(a) || (r[a] = parseInt(i, 10));
  }
  return r;
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t = e(() => {
    (Gr(),
      Ht(),
      (Yt = new Map()),
      (Xt = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 }),
      (Zt = new Map()),
      (Qt = class e extends Vt {
        static create(t) {
          let n = Zt.get(t);
          return (n === void 0 && Zt.set(t, (n = new e(t))), n);
        }
        static resetCache() {
          (Zt.clear(), Yt.clear());
        }
        static isValidSpecifier(e) {
          return this.isValidZone(e);
        }
        static isValidZone(e) {
          if (!e) return !1;
          try {
            return (new Intl.DateTimeFormat(`en-US`, { timeZone: e }).format(), !0);
          } catch {
            return !1;
          }
        }
        constructor(t) {
          (super(), (this.zoneName = t), (this.valid = e.isValidZone(t)));
        }
        get type() {
          return `iana`;
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName(e, { format: t, locale: n }) {
          return zr(e, t, n, this.name);
        }
        formatOffset(e, t) {
          return Ur(this.offset(e), t);
        }
        offset(e) {
          if (!this.valid) return NaN;
          let t = new Date(e);
          if (isNaN(t)) return NaN;
          let n = Kt(this.name),
            [r, i, a, o, s, c, l] = n.formatToParts ? Jt(n, t) : qt(n, t);
          o === `BC` && (r = -Math.abs(r) + 1);
          let u = Fr({
              year: r,
              month: i,
              day: a,
              hour: s === 24 ? 0 : s,
              minute: c,
              second: l,
              millisecond: 0,
            }),
            d = +t,
            f = d % 1e3;
          return ((d -= f >= 0 ? f : 1e3 + f), (u - d) / (60 * 1e3));
        }
        equals(e) {
          return e.type === `iana` && e.name === this.name;
        }
        get isValid() {
          return this.valid;
        }
      }));
  });
function en(e, t = {}) {
  let n = JSON.stringify([e, t]),
    r = mn[n];
  return (r || ((r = new Intl.ListFormat(e, t)), (mn[n] = r)), r);
}
function tn(e, t = {}) {
  let n = JSON.stringify([e, t]),
    r = hn.get(n);
  return (r === void 0 && ((r = new Intl.DateTimeFormat(e, t)), hn.set(n, r)), r);
}
function nn(e, t = {}) {
  let n = JSON.stringify([e, t]),
    r = gn.get(n);
  return (r === void 0 && ((r = new Intl.NumberFormat(e, t)), gn.set(n, r)), r);
}
function rn(e, t = {}) {
  let { base: n, ...r } = t,
    i = JSON.stringify([e, r]),
    a = _n.get(i);
  return (a === void 0 && ((a = new Intl.RelativeTimeFormat(e, t)), _n.set(i, a)), a);
}
function an() {
  return vn || ((vn = new Intl.DateTimeFormat().resolvedOptions().locale), vn);
}
function on(e) {
  let t = yn.get(e);
  return (t === void 0 && ((t = new Intl.DateTimeFormat(e).resolvedOptions()), yn.set(e, t)), t);
}
function sn(e) {
  let t = bn.get(e);
  if (!t) {
    let n = new Intl.Locale(e);
    ((t = `getWeekInfo` in n ? n.getWeekInfo() : n.weekInfo),
      `minimalDays` in t || (t = { ...wn, ...t }),
      bn.set(e, t));
  }
  return t;
}
function cn(e) {
  let t = e.indexOf(`-x-`);
  t !== -1 && (e = e.substring(0, t));
  let n = e.indexOf(`-u-`);
  if (n === -1) return [e];
  {
    let t, r;
    try {
      ((t = tn(e).resolvedOptions()), (r = e));
    } catch {
      let i = e.substring(0, n);
      ((t = tn(i).resolvedOptions()), (r = i));
    }
    let { numberingSystem: i, calendar: a } = t;
    return [r, i, a];
  }
}
function ln(e, t, n) {
  return n || t
    ? (e.includes(`-u-`) || (e += `-u`), n && (e += `-ca-${n}`), t && (e += `-nu-${t}`), e)
    : e;
}
function un(e) {
  let t = [];
  for (let n = 1; n <= 12; n++) {
    let r = V.utc(2009, n, 1);
    t.push(e(r));
  }
  return t;
}
function dn(e) {
  let t = [];
  for (let n = 1; n <= 7; n++) {
    let r = V.utc(2016, 11, 13 + n);
    t.push(e(r));
  }
  return t;
}
function fn(e, t, n, r) {
  let i = e.listingMode();
  return i === `error` ? null : i === `en` ? n(t) : r(t);
}
function pn(e) {
  return e.numberingSystem && e.numberingSystem !== `latn`
    ? !1
    : e.numberingSystem === `latn` ||
        !e.locale ||
        e.locale.startsWith(`en`) ||
        on(e.locale).numberingSystem === `latn`;
}
var mn,
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
  F,
  Tn = e(() => {
    (Gr(),
      ui(),
      Yn(),
      zo(),
      $t(),
      (mn = {}),
      (hn = new Map()),
      (gn = new Map()),
      (_n = new Map()),
      (vn = null),
      (yn = new Map()),
      (bn = new Map()),
      (xn = class {
        constructor(e, t, n) {
          ((this.padTo = n.padTo || 0), (this.floor = n.floor || !1));
          let { padTo: r, floor: i, ...a } = n;
          if (!t || Object.keys(a).length > 0) {
            let t = { useGrouping: !1, ...n };
            (n.padTo > 0 && (t.minimumIntegerDigits = n.padTo), (this.inf = nn(e, t)));
          }
        }
        format(e) {
          if (this.inf) {
            let t = this.floor ? Math.floor(e) : e;
            return this.inf.format(t);
          } else return R(this.floor ? Math.floor(e) : jr(e, 3), this.padTo);
        }
      }),
      (Sn = class {
        constructor(e, t, n) {
          ((this.opts = n), (this.originalZone = void 0));
          let r;
          if (this.opts.timeZone) this.dt = e;
          else if (e.zone.type === `fixed`) {
            let t = -1 * (e.offset / 60),
              n = t >= 0 ? `Etc/GMT+${t}` : `Etc/GMT${t}`;
            e.offset !== 0 && Qt.create(n).valid
              ? ((r = n), (this.dt = e))
              : ((r = `UTC`),
                (this.dt = e.offset === 0 ? e : e.setZone(`UTC`).plus({ minutes: e.offset })),
                (this.originalZone = e.zone));
          } else
            e.zone.type === `system`
              ? (this.dt = e)
              : e.zone.type === `iana`
                ? ((this.dt = e), (r = e.zone.name))
                : ((r = `UTC`),
                  (this.dt = e.setZone(`UTC`).plus({ minutes: e.offset })),
                  (this.originalZone = e.zone));
          let i = { ...this.opts };
          ((i.timeZone = i.timeZone || r), (this.dtf = tn(t, i)));
        }
        format() {
          return this.originalZone
            ? this.formatToParts()
                .map(({ value: e }) => e)
                .join(``)
            : this.dtf.format(this.dt.toJSDate());
        }
        formatToParts() {
          let e = this.dtf.formatToParts(this.dt.toJSDate());
          return this.originalZone
            ? e.map((e) => {
                if (e.type === `timeZoneName`) {
                  let t = this.originalZone.offsetName(this.dt.ts, {
                    locale: this.dt.locale,
                    format: this.opts.timeZoneName,
                  });
                  return { ...e, value: t };
                } else return e;
              })
            : e;
        }
        resolvedOptions() {
          return this.dtf.resolvedOptions();
        }
      }),
      (Cn = class {
        constructor(e, t, n) {
          ((this.opts = { style: `long`, ...n }), !t && yr() && (this.rtf = rn(e, n)));
        }
        format(e, t) {
          return this.rtf
            ? this.rtf.format(e, t)
            : $r(t, e, this.opts.numeric, this.opts.style !== `long`);
        }
        formatToParts(e, t) {
          return this.rtf ? this.rtf.formatToParts(e, t) : [];
        }
      }),
      (wn = { firstDay: 1, minimalDays: 4, weekend: [6, 7] }),
      (F = class e {
        static fromOpts(t) {
          return e.create(
            t.locale,
            t.numberingSystem,
            t.outputCalendar,
            t.weekSettings,
            t.defaultToEN,
          );
        }
        static create(t, n, r, i, a = !1) {
          let o = t || I.defaultLocale,
            s = o || (a ? `en-US` : an()),
            c = n || I.defaultNumberingSystem,
            l = r || I.defaultOutputCalendar,
            u = Tr(i) || I.defaultWeekSettings;
          return new e(s, c, l, u, o);
        }
        static resetCache() {
          ((vn = null), hn.clear(), gn.clear(), _n.clear(), yn.clear(), bn.clear());
        }
        static fromObject({
          locale: t,
          numberingSystem: n,
          outputCalendar: r,
          weekSettings: i,
        } = {}) {
          return e.create(t, n, r, i);
        }
        constructor(e, t, n, r, i) {
          let [a, o, s] = cn(e);
          ((this.locale = a),
            (this.numberingSystem = t || o || null),
            (this.outputCalendar = n || s || null),
            (this.weekSettings = r),
            (this.intl = ln(this.locale, this.numberingSystem, this.outputCalendar)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = i),
            (this.fastNumbersCached = null));
        }
        get fastNumbers() {
          return ((this.fastNumbersCached ??= pn(this)), this.fastNumbersCached);
        }
        listingMode() {
          let e = this.isEnglish(),
            t =
              (this.numberingSystem === null || this.numberingSystem === `latn`) &&
              (this.outputCalendar === null || this.outputCalendar === `gregory`);
          return e && t ? `en` : `intl`;
        }
        clone(t) {
          return !t || Object.getOwnPropertyNames(t).length === 0
            ? this
            : e.create(
                t.locale || this.specifiedLocale,
                t.numberingSystem || this.numberingSystem,
                t.outputCalendar || this.outputCalendar,
                Tr(t.weekSettings) || this.weekSettings,
                t.defaultToEN || !1,
              );
        }
        redefaultToEN(e = {}) {
          return this.clone({ ...e, defaultToEN: !0 });
        }
        redefaultToSystem(e = {}) {
          return this.clone({ ...e, defaultToEN: !1 });
        }
        months(e, t = !1) {
          return fn(this, e, Kr, () => {
            let n = this.intl === `ja` || this.intl.startsWith(`ja-`);
            t &= !n;
            let r = t ? { month: e, day: `numeric` } : { month: e },
              i = t ? `format` : `standalone`;
            if (!this.monthsCache[i][e]) {
              let t = n
                ? (e) => this.dtFormatter(e, r).format()
                : (e) => this.extract(e, r, `month`);
              this.monthsCache[i][e] = un(t);
            }
            return this.monthsCache[i][e];
          });
        }
        weekdays(e, t = !1) {
          return fn(this, e, qr, () => {
            let n = t
                ? { weekday: e, year: `numeric`, month: `long`, day: `numeric` }
                : { weekday: e },
              r = t ? `format` : `standalone`;
            return (
              this.weekdaysCache[r][e] ||
                (this.weekdaysCache[r][e] = dn((e) => this.extract(e, n, `weekday`))),
              this.weekdaysCache[r][e]
            );
          });
        }
        meridiems() {
          return fn(
            this,
            void 0,
            () => oi,
            () => {
              if (!this.meridiemCache) {
                let e = { hour: `numeric`, hourCycle: `h12` };
                this.meridiemCache = [V.utc(2016, 11, 13, 9), V.utc(2016, 11, 13, 19)].map((t) =>
                  this.extract(t, e, `dayperiod`),
                );
              }
              return this.meridiemCache;
            },
          );
        }
        eras(e) {
          return fn(this, e, Jr, () => {
            let t = { era: e };
            return (
              this.eraCache[e] ||
                (this.eraCache[e] = [V.utc(-40, 1, 1), V.utc(2017, 1, 1)].map((e) =>
                  this.extract(e, t, `era`),
                )),
              this.eraCache[e]
            );
          });
        }
        extract(e, t, n) {
          let r = this.dtFormatter(e, t)
            .formatToParts()
            .find((e) => e.type.toLowerCase() === n);
          return r ? r.value : null;
        }
        numberFormatter(e = {}) {
          return new xn(this.intl, e.forceSimple || this.fastNumbers, e);
        }
        dtFormatter(e, t = {}) {
          return new Sn(e, this.intl, t);
        }
        relFormatter(e = {}) {
          return new Cn(this.intl, this.isEnglish(), e);
        }
        listFormatter(e = {}) {
          return en(this.intl, e);
        }
        isEnglish() {
          return (
            this.locale === `en` ||
            this.locale.toLowerCase() === `en-us` ||
            on(this.intl).locale.startsWith(`en-us`)
          );
        }
        getWeekSettings() {
          return this.weekSettings ? this.weekSettings : br() ? sn(this.locale) : wn;
        }
        getStartOfWeek() {
          return this.getWeekSettings().firstDay;
        }
        getMinDaysInFirstWeek() {
          return this.getWeekSettings().minimalDays;
        }
        getWeekendDays() {
          return this.getWeekSettings().weekend;
        }
        equals(e) {
          return (
            this.locale === e.locale &&
            this.numberingSystem === e.numberingSystem &&
            this.outputCalendar === e.outputCalendar
          );
        }
        toString() {
          return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
        }
      }));
  }),
  En,
  Dn,
  On = e(() => {
    (Gr(),
      Ht(),
      (En = null),
      (Dn = class e extends Vt {
        static get utcInstance() {
          return (En === null && (En = new e(0)), En);
        }
        static instance(t) {
          return t === 0 ? e.utcInstance : new e(t);
        }
        static parseSpecifier(t) {
          if (t) {
            let n = t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
            if (n) return new e(Br(n[1], n[2]));
          }
          return null;
        }
        constructor(e) {
          (super(), (this.fixed = e));
        }
        get type() {
          return `fixed`;
        }
        get name() {
          return this.fixed === 0 ? `UTC` : `UTC${Ur(this.fixed, `narrow`)}`;
        }
        get ianaName() {
          return this.fixed === 0 ? `Etc/UTC` : `Etc/GMT${Ur(-this.fixed, `narrow`)}`;
        }
        offsetName() {
          return this.name;
        }
        formatOffset(e, t) {
          return Ur(this.fixed, t);
        }
        get isUniversal() {
          return !0;
        }
        offset() {
          return this.fixed;
        }
        equals(e) {
          return e.type === `fixed` && e.fixed === this.fixed;
        }
        get isValid() {
          return !0;
        }
      }));
  }),
  kn,
  An = e(() => {
    (Ht(),
      (kn = class extends Vt {
        constructor(e) {
          (super(), (this.zoneName = e));
        }
        get type() {
          return `invalid`;
        }
        get name() {
          return this.zoneName;
        }
        get isUniversal() {
          return !1;
        }
        offsetName() {
          return null;
        }
        formatOffset() {
          return ``;
        }
        offset() {
          return NaN;
        }
        equals() {
          return !1;
        }
        get isValid() {
          return !1;
        }
      }));
  });
function jn(e, t) {
  if (L(e) || e === null) return t;
  if (e instanceof Vt) return e;
  if (_r(e)) {
    let n = e.toLowerCase();
    return n === "default"
      ? t
      : n === `local` || n === `system`
        ? Wt.instance
        : n === `utc` || n === `gmt`
          ? Dn.utcInstance
          : Dn.parseSpecifier(n) || Qt.create(e);
  } else if (hr(e)) return Dn.instance(e);
  else if (typeof e == `object` && `offset` in e && typeof e.offset == `function`) return e;
  else return new kn(e);
}
var Mn = e(() => {
  (Ht(), $t(), On(), An(), Gr(), Gt());
});
function Nn(e) {
  let t = parseInt(e, 10);
  if (isNaN(t)) {
    t = ``;
    for (let n = 0; n < e.length; n++) {
      let r = e.charCodeAt(n);
      if (e[n].search(In.hanidec) !== -1) t += Rn.indexOf(e[n]);
      else
        for (let e in Ln) {
          let [n, i] = Ln[e];
          r >= n && r <= i && (t += r - n);
        }
    }
    return parseInt(t, 10);
  } else return t;
}
function Pn() {
  zn.clear();
}
function Fn({ numberingSystem: e }, t = ``) {
  let n = e || `latn`,
    r = zn.get(n);
  r === void 0 && ((r = new Map()), zn.set(n, r));
  let i = r.get(t);
  return (i === void 0 && ((i = RegExp(`${In[n]}${t}`)), r.set(t, i)), i);
}
var In,
  Ln,
  Rn,
  zn,
  Bn = e(() => {
    ((In = {
      arab: `[٠-٩]`,
      arabext: `[۰-۹]`,
      bali: `[᭐-᭙]`,
      beng: `[০-৯]`,
      deva: `[०-९]`,
      fullwide: `[０-９]`,
      gujr: `[૦-૯]`,
      hanidec: `[〇|一|二|三|四|五|六|七|八|九]`,
      khmr: `[០-៩]`,
      knda: `[೦-೯]`,
      laoo: `[໐-໙]`,
      limb: `[᥆-᥏]`,
      mlym: `[൦-൯]`,
      mong: `[᠐-᠙]`,
      mymr: `[၀-၉]`,
      orya: `[୦-୯]`,
      tamldec: `[௦-௯]`,
      telu: `[౦-౯]`,
      thai: `[๐-๙]`,
      tibt: `[༠-༩]`,
      latn: `\\d`,
    }),
      (Ln = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
      }),
      (Rn = In.hanidec.replace(/[\[|\]]/g, ``).split(``)),
      (zn = new Map()));
  }),
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  I,
  Yn = e(() => {
    (Gt(),
      $t(),
      Tn(),
      zo(),
      Mn(),
      Gr(),
      Bn(),
      (Vn = () => Date.now()),
      (Hn = `system`),
      (Un = null),
      (Wn = null),
      (Gn = null),
      (Kn = 60),
      (Jn = null),
      (I = class {
        static get now() {
          return Vn;
        }
        static set now(e) {
          Vn = e;
        }
        static set defaultZone(e) {
          Hn = e;
        }
        static get defaultZone() {
          return jn(Hn, Wt.instance);
        }
        static get defaultLocale() {
          return Un;
        }
        static set defaultLocale(e) {
          Un = e;
        }
        static get defaultNumberingSystem() {
          return Wn;
        }
        static set defaultNumberingSystem(e) {
          Wn = e;
        }
        static get defaultOutputCalendar() {
          return Gn;
        }
        static set defaultOutputCalendar(e) {
          Gn = e;
        }
        static get defaultWeekSettings() {
          return Jn;
        }
        static set defaultWeekSettings(e) {
          Jn = Tr(e);
        }
        static get twoDigitCutoffYear() {
          return Kn;
        }
        static set twoDigitCutoffYear(e) {
          Kn = e % 100;
        }
        static get throwOnInvalid() {
          return qn;
        }
        static set throwOnInvalid(e) {
          qn = e;
        }
        static resetCaches() {
          (F.resetCache(), Qt.resetCache(), V.resetCache(), Pn());
        }
      }));
  }),
  Xn,
  Zn = e(() => {
    Xn = class {
      constructor(e, t) {
        ((this.reason = e), (this.explanation = t));
      }
      toMessage() {
        return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
      }
    };
  });
function Qn(e, t) {
  return new Xn(
    `unit out of range`,
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`,
  );
}
function $n(e, t, n) {
  let r = new Date(Date.UTC(e, t - 1, n));
  e < 100 && e >= 0 && r.setUTCFullYear(r.getUTCFullYear() - 1900);
  let i = r.getUTCDay();
  return i === 0 ? 7 : i;
}
function er(e, t, n) {
  return n + (Mr(e) ? pr : fr)[t - 1];
}
function tr(e, t) {
  let n = Mr(e) ? pr : fr,
    r = n.findIndex((e) => e < t),
    i = t - n[r];
  return { month: r + 1, day: i };
}
function nr(e, t) {
  return ((e - t + 7) % 7) + 1;
}
function rr(e, t = 4, n = 1) {
  let { year: r, month: i, day: a } = e,
    o = er(r, i, a),
    s = nr($n(r, i, a), n),
    c = Math.floor((o - s + 14 - t) / 7),
    l;
  return (
    c < 1 ? ((l = r - 1), (c = Lr(l, t, n))) : c > Lr(r, t, n) ? ((l = r + 1), (c = 1)) : (l = r),
    { weekYear: l, weekNumber: c, weekday: s, ...Wr(e) }
  );
}
function ir(e, t = 4, n = 1) {
  let { weekYear: r, weekNumber: i, weekday: a } = e,
    o = nr($n(r, 1, t), n),
    s = Nr(r),
    c = i * 7 + a - o - 7 + t,
    l;
  c < 1 ? ((l = r - 1), (c += Nr(l))) : c > s ? ((l = r + 1), (c -= Nr(r))) : (l = r);
  let { month: u, day: d } = tr(l, c);
  return { year: l, month: u, day: d, ...Wr(e) };
}
function ar(e) {
  let { year: t, month: n, day: r } = e;
  return { year: t, ordinal: er(t, n, r), ...Wr(e) };
}
function or(e) {
  let { year: t, ordinal: n } = e,
    { month: r, day: i } = tr(t, n);
  return { year: t, month: r, day: i, ...Wr(e) };
}
function sr(e, t) {
  if (!L(e.localWeekday) || !L(e.localWeekNumber) || !L(e.localWeekYear)) {
    if (!L(e.weekday) || !L(e.weekNumber) || !L(e.weekYear))
      throw new ft(`Cannot mix locale-based week fields with ISO-based week fields`);
    return (
      L(e.localWeekday) || (e.weekday = e.localWeekday),
      L(e.localWeekNumber) || (e.weekNumber = e.localWeekNumber),
      L(e.localWeekYear) || (e.weekYear = e.localWeekYear),
      delete e.localWeekday,
      delete e.localWeekNumber,
      delete e.localWeekYear,
      { minDaysInFirstWeek: t.getMinDaysInFirstWeek(), startOfWeek: t.getStartOfWeek() }
    );
  } else return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function cr(e, t = 4, n = 1) {
  let r = gr(e.weekYear),
    i = Er(e.weekNumber, 1, Lr(e.weekYear, t, n)),
    a = Er(e.weekday, 1, 7);
  return r
    ? i
      ? !a && Qn(`weekday`, e.weekday)
      : Qn(`week`, e.weekNumber)
    : Qn(`weekYear`, e.weekYear);
}
function lr(e) {
  let t = gr(e.year),
    n = Er(e.ordinal, 1, Nr(e.year));
  return t ? !n && Qn(`ordinal`, e.ordinal) : Qn(`year`, e.year);
}
function ur(e) {
  let t = gr(e.year),
    n = Er(e.month, 1, 12),
    r = Er(e.day, 1, Pr(e.year, e.month));
  return t ? (n ? !r && Qn(`day`, e.day) : Qn(`month`, e.month)) : Qn(`year`, e.year);
}
function dr(e) {
  let { hour: t, minute: n, second: r, millisecond: i } = e,
    a = Er(t, 0, 23) || (t === 24 && n === 0 && r === 0 && i === 0),
    o = Er(n, 0, 59),
    s = Er(r, 0, 59),
    c = Er(i, 0, 999);
  return a
    ? o
      ? s
        ? !c && Qn(`millisecond`, i)
        : Qn(`second`, r)
      : Qn(`minute`, n)
    : Qn(`hour`, t);
}
var fr,
  pr,
  mr = e(() => {
    (Gr(),
      Zn(),
      ht(),
      (fr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]),
      (pr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]));
  });
function L(e) {
  return e === void 0;
}
function hr(e) {
  return typeof e == `number`;
}
function gr(e) {
  return typeof e == `number` && e % 1 == 0;
}
function _r(e) {
  return typeof e == `string`;
}
function vr(e) {
  return Object.prototype.toString.call(e) === `[object Date]`;
}
function yr() {
  try {
    return typeof Intl < `u` && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function br() {
  try {
    return (
      typeof Intl < `u` &&
      !!Intl.Locale &&
      (`weekInfo` in Intl.Locale.prototype || `getWeekInfo` in Intl.Locale.prototype)
    );
  } catch {
    return !1;
  }
}
function xr(e) {
  return Array.isArray(e) ? e : [e];
}
function Sr(e, t, n) {
  if (e.length !== 0)
    return e.reduce((e, r) => {
      let i = [t(r), r];
      return e && n(e[0], i[0]) === e[0] ? e : i;
    }, null)[1];
}
function Cr(e, t) {
  return t.reduce((t, n) => ((t[n] = e[n]), t), {});
}
function wr(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tr(e) {
  if (e == null) return null;
  if (typeof e != `object`) throw new N(`Week settings must be an object`);
  if (
    !Er(e.firstDay, 1, 7) ||
    !Er(e.minimalDays, 1, 7) ||
    !Array.isArray(e.weekend) ||
    e.weekend.some((e) => !Er(e, 1, 7))
  )
    throw new N(`Invalid week settings`);
  return { firstDay: e.firstDay, minimalDays: e.minimalDays, weekend: Array.from(e.weekend) };
}
function Er(e, t, n) {
  return gr(e) && e >= t && e <= n;
}
function Dr(e, t) {
  return e - t * Math.floor(e / t);
}
function R(e, t = 2) {
  let n = e < 0,
    r;
  return ((r = n ? `-` + (`` + -e).padStart(t, `0`) : (`` + e).padStart(t, `0`)), r);
}
function Or(e) {
  if (!(L(e) || e === null || e === ``)) return parseInt(e, 10);
}
function kr(e) {
  if (!(L(e) || e === null || e === ``)) return parseFloat(e);
}
function Ar(e) {
  if (!(L(e) || e === null || e === ``)) {
    let t = parseFloat(`0.` + e) * 1e3;
    return Math.floor(t);
  }
}
function jr(e, t, n = `round`) {
  let r = 10 ** t;
  switch (n) {
    case `expand`:
      return e > 0 ? Math.ceil(e * r) / r : Math.floor(e * r) / r;
    case `trunc`:
      return Math.trunc(e * r) / r;
    case `round`:
      return Math.round(e * r) / r;
    case `floor`:
      return Math.floor(e * r) / r;
    case `ceil`:
      return Math.ceil(e * r) / r;
    default:
      throw RangeError(`Value rounding ${n} is out of range`);
  }
}
function Mr(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function Nr(e) {
  return Mr(e) ? 366 : 365;
}
function Pr(e, t) {
  let n = Dr(t - 1, 12) + 1,
    r = e + (t - n) / 12;
  return n === 2 ? (Mr(r) ? 29 : 28) : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function Fr(e) {
  let t = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
  return (
    e.year < 100 &&
      e.year >= 0 &&
      ((t = new Date(t)), t.setUTCFullYear(e.year, e.month - 1, e.day)),
    +t
  );
}
function Ir(e, t, n) {
  return -nr($n(e, 1, t), n) + t - 1;
}
function Lr(e, t = 4, n = 1) {
  let r = Ir(e, t, n),
    i = Ir(e + 1, t, n);
  return (Nr(e) - r + i) / 7;
}
function Rr(e) {
  return e > 99 ? e : e > I.twoDigitCutoffYear ? 1900 + e : 2e3 + e;
}
function zr(e, t, n, r = null) {
  let i = new Date(e),
    a = {
      hourCycle: `h23`,
      year: `numeric`,
      month: `2-digit`,
      day: `2-digit`,
      hour: `2-digit`,
      minute: `2-digit`,
    };
  r && (a.timeZone = r);
  let o = { timeZoneName: t, ...a },
    s = new Intl.DateTimeFormat(n, o)
      .formatToParts(i)
      .find((e) => e.type.toLowerCase() === `timezonename`);
  return s ? s.value : null;
}
function Br(e, t) {
  let n = parseInt(e, 10);
  Number.isNaN(n) && (n = 0);
  let r = parseInt(t, 10) || 0,
    i = n < 0 || Object.is(n, -0) ? -r : r;
  return n * 60 + i;
}
function Vr(e) {
  let t = Number(e);
  if (typeof e == `boolean` || e === `` || !Number.isFinite(t))
    throw new N(`Invalid unit value ${e}`);
  return t;
}
function Hr(e, t) {
  let n = {};
  for (let r in e)
    if (wr(e, r)) {
      let i = e[r];
      if (i == null) continue;
      n[t(r)] = Vr(i);
    }
  return n;
}
function Ur(e, t) {
  let n = Math.trunc(Math.abs(e / 60)),
    r = Math.trunc(Math.abs(e % 60)),
    i = e >= 0 ? `+` : `-`;
  switch (t) {
    case `short`:
      return `${i}${R(n, 2)}:${R(r, 2)}`;
    case `narrow`:
      return `${i}${n}${r > 0 ? `:${r}` : ``}`;
    case `techie`:
      return `${i}${R(n, 2)}${R(r, 2)}`;
    default:
      throw RangeError(`Value format ${t} is out of range for property format`);
  }
}
function Wr(e) {
  return Cr(e, [`hour`, `minute`, `second`, `millisecond`]);
}
var Gr = e(() => {
  (ht(), Yn(), mr());
});
function Kr(e) {
  switch (e) {
    case `narrow`:
      return [...ni];
    case `short`:
      return [...ti];
    case `long`:
      return [...ei];
    case `numeric`:
      return [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`];
    case `2-digit`:
      return [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`];
    default:
      return null;
  }
}
function qr(e) {
  switch (e) {
    case `narrow`:
      return [...ai];
    case `short`:
      return [...ii];
    case `long`:
      return [...ri];
    case `numeric`:
      return [`1`, `2`, `3`, `4`, `5`, `6`, `7`];
    default:
      return null;
  }
}
function Jr(e) {
  switch (e) {
    case `narrow`:
      return [...li];
    case `short`:
      return [...ci];
    case `long`:
      return [...si];
    default:
      return null;
  }
}
function Yr(e) {
  return oi[e.hour < 12 ? 0 : 1];
}
function Xr(e, t) {
  return qr(t)[e.weekday - 1];
}
function Zr(e, t) {
  return Kr(t)[e.month - 1];
}
function Qr(e, t) {
  return Jr(t)[e.year < 0 ? 0 : 1];
}
function $r(e, t, n = `always`, r = !1) {
  let i = {
      years: [`year`, `yr.`],
      quarters: [`quarter`, `qtr.`],
      months: [`month`, `mo.`],
      weeks: [`week`, `wk.`],
      days: [`day`, `day`, `days`],
      hours: [`hour`, `hr.`],
      minutes: [`minute`, `min.`],
      seconds: [`second`, `sec.`],
    },
    a = [`hours`, `minutes`, `seconds`].indexOf(e) === -1;
  if (n === `auto` && a) {
    let n = e === `days`;
    switch (t) {
      case 1:
        return n ? `tomorrow` : `next ${i[e][0]}`;
      case -1:
        return n ? `yesterday` : `last ${i[e][0]}`;
      case 0:
        return n ? `today` : `this ${i[e][0]}`;
      default:
    }
  }
  let o = Object.is(t, -0) || t < 0,
    s = Math.abs(t),
    c = s === 1,
    l = i[e],
    u = r ? (c ? l[1] : l[2] || l[1]) : c ? i[e][0] : e;
  return o ? `${s} ${u} ago` : `in ${s} ${u}`;
}
var ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui = e(() => {
    ((ei = [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`,
    ]),
      (ti = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`]),
      (ni = [`J`, `F`, `M`, `A`, `M`, `J`, `J`, `A`, `S`, `O`, `N`, `D`]),
      (ri = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`]),
      (ii = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`]),
      (ai = [`M`, `T`, `W`, `T`, `F`, `S`, `S`]),
      (oi = [`AM`, `PM`]),
      (si = [`Before Christ`, `Anno Domini`]),
      (ci = [`BC`, `AD`]),
      (li = [`B`, `A`]));
  });
function di(e, t) {
  let n = ``;
  for (let r of e) r.literal ? (n += r.val) : (n += t(r.val));
  return n;
}
var fi,
  pi,
  mi = e(() => {
    (ui(),
      Bt(),
      Gr(),
      (fi = {
        D: vt,
        DD: yt,
        DDD: xt,
        DDDD: St,
        t: Ct,
        tt: wt,
        ttt: Tt,
        tttt: Et,
        T: Dt,
        TT: Ot,
        TTT: kt,
        TTTT: At,
        f: jt,
        ff: Nt,
        fff: It,
        ffff: Rt,
        F: Mt,
        FF: Pt,
        FFF: Lt,
        FFFF: zt,
      }),
      (pi = class e {
        static create(t, n = {}) {
          return new e(t, n);
        }
        static parseFormat(e) {
          let t = null,
            n = ``,
            r = !1,
            i = [];
          for (let a = 0; a < e.length; a++) {
            let o = e.charAt(a);
            o === `'`
              ? ((n.length > 0 || r) &&
                  i.push({ literal: r || /^\s+$/.test(n), val: n === `` ? `'` : n }),
                (t = null),
                (n = ``),
                (r = !r))
              : r || o === t
                ? (n += o)
                : (n.length > 0 && i.push({ literal: /^\s+$/.test(n), val: n }), (n = o), (t = o));
          }
          return (n.length > 0 && i.push({ literal: r || /^\s+$/.test(n), val: n }), i);
        }
        static macroTokenToFormatOpts(e) {
          return fi[e];
        }
        constructor(e, t) {
          ((this.opts = t), (this.loc = e), (this.systemLoc = null));
        }
        formatWithSystemDefault(e, t) {
          return (
            this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()),
            this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format()
          );
        }
        dtFormatter(e, t = {}) {
          return this.loc.dtFormatter(e, { ...this.opts, ...t });
        }
        formatDateTime(e, t) {
          return this.dtFormatter(e, t).format();
        }
        formatDateTimeParts(e, t) {
          return this.dtFormatter(e, t).formatToParts();
        }
        formatInterval(e, t) {
          return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
        }
        resolvedOptions(e, t) {
          return this.dtFormatter(e, t).resolvedOptions();
        }
        num(e, t = 0, n = void 0) {
          if (this.opts.forceSimple) return R(e, t);
          let r = { ...this.opts };
          return (
            t > 0 && (r.padTo = t), n && (r.signDisplay = n), this.loc.numberFormatter(r).format(e)
          );
        }
        formatDateTimeFromString(t, n) {
          let r = this.loc.listingMode() === `en`,
            i = this.loc.outputCalendar && this.loc.outputCalendar !== `gregory`,
            a = (e, n) => this.loc.extract(t, e, n),
            o = (e) =>
              t.isOffsetFixed && t.offset === 0 && e.allowZ
                ? `Z`
                : t.isValid
                  ? t.zone.formatOffset(t.ts, e.format)
                  : ``,
            s = () => (r ? Yr(t) : a({ hour: `numeric`, hourCycle: `h12` }, `dayperiod`)),
            c = (e, n) =>
              r ? Zr(t, e) : a(n ? { month: e } : { month: e, day: `numeric` }, `month`),
            l = (e, n) =>
              r
                ? Xr(t, e)
                : a(n ? { weekday: e } : { weekday: e, month: `long`, day: `numeric` }, `weekday`),
            u = (n) => {
              let r = e.macroTokenToFormatOpts(n);
              return r ? this.formatWithSystemDefault(t, r) : n;
            },
            d = (e) => (r ? Qr(t, e) : a({ era: e }, `era`));
          return di(e.parseFormat(n), (e) => {
            switch (e) {
              case `S`:
                return this.num(t.millisecond);
              case `u`:
              case `SSS`:
                return this.num(t.millisecond, 3);
              case `s`:
                return this.num(t.second);
              case `ss`:
                return this.num(t.second, 2);
              case `uu`:
                return this.num(Math.floor(t.millisecond / 10), 2);
              case `uuu`:
                return this.num(Math.floor(t.millisecond / 100));
              case `m`:
                return this.num(t.minute);
              case `mm`:
                return this.num(t.minute, 2);
              case `h`:
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12);
              case `hh`:
                return this.num(t.hour % 12 == 0 ? 12 : t.hour % 12, 2);
              case `H`:
                return this.num(t.hour);
              case `HH`:
                return this.num(t.hour, 2);
              case `Z`:
                return o({ format: `narrow`, allowZ: this.opts.allowZ });
              case `ZZ`:
                return o({ format: `short`, allowZ: this.opts.allowZ });
              case `ZZZ`:
                return o({ format: `techie`, allowZ: this.opts.allowZ });
              case `ZZZZ`:
                return t.zone.offsetName(t.ts, { format: `short`, locale: this.loc.locale });
              case `ZZZZZ`:
                return t.zone.offsetName(t.ts, { format: `long`, locale: this.loc.locale });
              case `z`:
                return t.zoneName;
              case `a`:
                return s();
              case `d`:
                return i ? a({ day: `numeric` }, `day`) : this.num(t.day);
              case `dd`:
                return i ? a({ day: `2-digit` }, `day`) : this.num(t.day, 2);
              case `c`:
                return this.num(t.weekday);
              case `ccc`:
                return l(`short`, !0);
              case `cccc`:
                return l(`long`, !0);
              case `ccccc`:
                return l(`narrow`, !0);
              case `E`:
                return this.num(t.weekday);
              case `EEE`:
                return l(`short`, !1);
              case `EEEE`:
                return l(`long`, !1);
              case `EEEEE`:
                return l(`narrow`, !1);
              case `L`:
                return i ? a({ month: `numeric`, day: `numeric` }, `month`) : this.num(t.month);
              case `LL`:
                return i ? a({ month: `2-digit`, day: `numeric` }, `month`) : this.num(t.month, 2);
              case `LLL`:
                return c(`short`, !0);
              case `LLLL`:
                return c(`long`, !0);
              case `LLLLL`:
                return c(`narrow`, !0);
              case `M`:
                return i ? a({ month: `numeric` }, `month`) : this.num(t.month);
              case `MM`:
                return i ? a({ month: `2-digit` }, `month`) : this.num(t.month, 2);
              case `MMM`:
                return c(`short`, !1);
              case `MMMM`:
                return c(`long`, !1);
              case `MMMMM`:
                return c(`narrow`, !1);
              case `y`:
                return i ? a({ year: `numeric` }, `year`) : this.num(t.year);
              case `yy`:
                return i
                  ? a({ year: `2-digit` }, `year`)
                  : this.num(t.year.toString().slice(-2), 2);
              case `yyyy`:
                return i ? a({ year: `numeric` }, `year`) : this.num(t.year, 4);
              case `yyyyyy`:
                return i ? a({ year: `numeric` }, `year`) : this.num(t.year, 6);
              case `G`:
                return d(`short`);
              case `GG`:
                return d(`long`);
              case `GGGGG`:
                return d(`narrow`);
              case `kk`:
                return this.num(t.weekYear.toString().slice(-2), 2);
              case `kkkk`:
                return this.num(t.weekYear, 4);
              case `W`:
                return this.num(t.weekNumber);
              case `WW`:
                return this.num(t.weekNumber, 2);
              case `n`:
                return this.num(t.localWeekNumber);
              case `nn`:
                return this.num(t.localWeekNumber, 2);
              case `ii`:
                return this.num(t.localWeekYear.toString().slice(-2), 2);
              case `iiii`:
                return this.num(t.localWeekYear, 4);
              case `o`:
                return this.num(t.ordinal);
              case `ooo`:
                return this.num(t.ordinal, 3);
              case `q`:
                return this.num(t.quarter);
              case `qq`:
                return this.num(t.quarter, 2);
              case `X`:
                return this.num(Math.floor(t.ts / 1e3));
              case `x`:
                return this.num(t.ts);
              default:
                return u(e);
            }
          });
        }
        formatDurationFromString(t, n) {
          let r = this.opts.signMode === `negativeLargestOnly` ? -1 : 1,
            i = (e) => {
              switch (e[0]) {
                case `S`:
                  return `milliseconds`;
                case `s`:
                  return `seconds`;
                case `m`:
                  return `minutes`;
                case `h`:
                  return `hours`;
                case `d`:
                  return `days`;
                case `w`:
                  return `weeks`;
                case `M`:
                  return `months`;
                case `y`:
                  return `years`;
                default:
                  return null;
              }
            },
            a = (e, t) => (n) => {
              let a = i(n);
              if (a) {
                let i = t.isNegativeDuration && a !== t.largestUnit ? r : 1,
                  o;
                return (
                  (o =
                    this.opts.signMode === `negativeLargestOnly` && a !== t.largestUnit
                      ? `never`
                      : this.opts.signMode === `all`
                        ? `always`
                        : `auto`),
                  this.num(e.get(a) * i, n.length, o)
                );
              } else return n;
            },
            o = e.parseFormat(n),
            s = o.reduce((e, { literal: t, val: n }) => (t ? e : e.concat(n)), []),
            c = t.shiftTo(...s.map(i).filter((e) => e));
          return di(o, a(c, { isNegativeDuration: c < 0, largestUnit: Object.keys(c.values)[0] }));
        }
      }));
  });
function hi(...e) {
  let t = e.reduce((e, t) => e + t.source, ``);
  return RegExp(`^${t}$`);
}
function gi(...e) {
  return (t) =>
    e
      .reduce(
        ([e, n, r], i) => {
          let [a, o, s] = i(t, r);
          return [{ ...e, ...a }, o || n, s];
        },
        [{}, null, 1],
      )
      .slice(0, 2);
}
function _i(e, ...t) {
  if (e == null) return [null, null];
  for (let [n, r] of t) {
    let t = n.exec(e);
    if (t) return r(t);
  }
  return [null, null];
}
function vi(...e) {
  return (t, n) => {
    let r = {},
      i;
    for (i = 0; i < e.length; i++) r[e[i]] = Or(t[n + i]);
    return [r, null, n + i];
  };
}
function yi(e, t, n) {
  let r = e[t];
  return L(r) ? n : Or(r);
}
function bi(e, t) {
  return [{ year: yi(e, t), month: yi(e, t + 1, 1), day: yi(e, t + 2, 1) }, null, t + 3];
}
function xi(e, t) {
  return [
    {
      hours: yi(e, t, 0),
      minutes: yi(e, t + 1, 0),
      seconds: yi(e, t + 2, 0),
      milliseconds: Ar(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function Si(e, t) {
  let n = !e[t] && !e[t + 1],
    r = Br(e[t + 1], e[t + 2]);
  return [{}, n ? null : Dn.instance(r), t + 3];
}
function Ci(e, t) {
  return [{}, e[t] ? Qt.create(e[t]) : null, t + 1];
}
function wi(e) {
  let [t, n, r, i, a, o, s, c, l] = e,
    u = t[0] === `-`,
    d = c && c[0] === `-`,
    f = (e, t = !1) => (e !== void 0 && (t || (e && u)) ? -e : e);
  return [
    {
      years: f(kr(n)),
      months: f(kr(r)),
      weeks: f(kr(i)),
      days: f(kr(a)),
      hours: f(kr(o)),
      minutes: f(kr(s)),
      seconds: f(kr(c), c === `-0`),
      milliseconds: f(Ar(l), d),
    },
  ];
}
function Ti(e, t, n, r, i, a, o) {
  let s = {
    year: t.length === 2 ? Rr(Or(t)) : Or(t),
    month: ti.indexOf(n) + 1,
    day: Or(r),
    hour: Or(i),
    minute: Or(a),
  };
  return (
    o && (s.second = Or(o)),
    e && (s.weekday = e.length > 3 ? ri.indexOf(e) + 1 : ii.indexOf(e) + 1),
    s
  );
}
function Ei(e) {
  let [, t, n, r, i, a, o, s, c, l, u, d] = e,
    f = Ti(t, i, r, n, a, o, s),
    p;
  return ((p = c ? Qi[c] : l ? 0 : Br(u, d)), [f, new Dn(p)]);
}
function Di(e) {
  return e
    .replace(/\([^()]*\)|[\n\t]/g, ` `)
    .replace(/(\s\s+)/g, ` `)
    .trim();
}
function Oi(e) {
  let [, t, n, r, i, a, o, s] = e;
  return [Ti(t, i, r, n, a, o, s), Dn.utcInstance];
}
function ki(e) {
  let [, t, n, r, i, a, o, s] = e;
  return [Ti(t, s, n, r, i, a, o), Dn.utcInstance];
}
function Ai(e) {
  return _i(e, [ra, sa], [ia, ca], [aa, la], [oa, ua]);
}
function ji(e) {
  return _i(Di(e), [$i, Ei]);
}
function Mi(e) {
  return _i(e, [ea, Oi], [ta, Oi], [na, ki]);
}
function Ni(e) {
  return _i(e, [Zi, wi]);
}
function Pi(e) {
  return _i(e, [Xi, da]);
}
function Fi(e) {
  return _i(e, [fa, sa], [pa, ma]);
}
var Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha = e(() => {
    (Gr(),
      ui(),
      On(),
      $t(),
      (Ii = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/),
      (Li = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/),
      (Ri = `(?:${Li.source}?(?:\\[(${Ii.source})\\])?)?`),
      (zi = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/),
      (Bi = RegExp(`${zi.source}${Ri}`)),
      (Vi = RegExp(`(?:[Tt]${Bi.source})?`)),
      (Hi = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/),
      (Ui = /(\d{4})-?W(\d\d)(?:-?(\d))?/),
      (Wi = /(\d{4})-?(\d{3})/),
      (Gi = vi(`weekYear`, `weekNumber`, `weekDay`)),
      (Ki = vi(`year`, `ordinal`)),
      (qi = /(\d{4})-(\d\d)-(\d\d)/),
      (Ji = RegExp(`${zi.source} ?(?:${Li.source}|(${Ii.source}))?`)),
      (Yi = RegExp(`(?: ${Ji.source})?`)),
      (Xi = RegExp(`^T?${zi.source}$`)),
      (Zi =
        /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/),
      (Qi = {
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480,
      }),
      ($i =
        /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/),
      (ea =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/),
      (ta =
        /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/),
      (na =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/),
      (ra = hi(Hi, Vi)),
      (ia = hi(Ui, Vi)),
      (aa = hi(Wi, Vi)),
      (oa = hi(Bi)),
      (sa = gi(bi, xi, Si, Ci)),
      (ca = gi(Gi, xi, Si, Ci)),
      (la = gi(Ki, xi, Si, Ci)),
      (ua = gi(xi, Si, Ci)),
      (da = gi(xi)),
      (fa = hi(qi, Yi)),
      (pa = hi(Ji)),
      (ma = gi(xi, Si, Ci)));
  });
function ga(e, t, n = !1) {
  let r = {
    values: n ? t.values : { ...e.values, ...(t.values || {}) },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
    matrix: t.matrix || e.matrix,
  };
  return new z(r);
}
function _a(e, t) {
  let n = t.milliseconds ?? 0;
  for (let r of Da.slice(1)) t[r] && (n += t[r] * e[r].milliseconds);
  return n;
}
function va(e, t) {
  let n = _a(e, t) < 0 ? -1 : 1;
  (Ea.reduceRight((r, i) => {
    if (L(t[i])) return r;
    if (r) {
      let a = t[r] * n,
        o = e[i][r],
        s = Math.floor(a / o);
      ((t[i] += s * n), (t[r] -= s * o * n));
    }
    return i;
  }, null),
    Ea.reduce((n, r) => {
      if (L(t[r])) return n;
      if (n) {
        let i = t[n] % 1;
        ((t[n] -= i), (t[r] += i * e[n][r]));
      }
      return r;
    }, null));
}
function ya(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) r !== 0 && (t[n] = r);
  return t;
}
var ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  z,
  Oa = e(() => {
    (ht(),
      mi(),
      Zn(),
      Tn(),
      ha(),
      Gr(),
      Yn(),
      zo(),
      (ba = `Invalid Duration`),
      (xa = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 10080 * 60,
          milliseconds: 10080 * 60 * 1e3,
        },
        days: { hours: 24, minutes: 1440, seconds: 1440 * 60, milliseconds: 1440 * 60 * 1e3 },
        hours: { minutes: 60, seconds: 3600, milliseconds: 3600 * 1e3 },
        minutes: { seconds: 60, milliseconds: 60 * 1e3 },
        seconds: { milliseconds: 1e3 },
      }),
      (Sa = {
        years: {
          quarters: 4,
          months: 12,
          weeks: 52,
          days: 365,
          hours: 365 * 24,
          minutes: 365 * 24 * 60,
          seconds: 365 * 24 * 60 * 60,
          milliseconds: 365 * 24 * 60 * 60 * 1e3,
        },
        quarters: {
          months: 3,
          weeks: 13,
          days: 91,
          hours: 2184,
          minutes: 2184 * 60,
          seconds: 2184 * 60 * 60,
          milliseconds: 2184 * 60 * 60 * 1e3,
        },
        months: {
          weeks: 4,
          days: 30,
          hours: 720,
          minutes: 720 * 60,
          seconds: 720 * 60 * 60,
          milliseconds: 720 * 60 * 60 * 1e3,
        },
        ...xa,
      }),
      (Ca = 146097 / 400),
      (wa = 146097 / 4800),
      (Ta = {
        years: {
          quarters: 4,
          months: 12,
          weeks: Ca / 7,
          days: Ca,
          hours: Ca * 24,
          minutes: Ca * 24 * 60,
          seconds: Ca * 24 * 60 * 60,
          milliseconds: Ca * 24 * 60 * 60 * 1e3,
        },
        quarters: {
          months: 3,
          weeks: Ca / 28,
          days: Ca / 4,
          hours: (Ca * 24) / 4,
          minutes: (Ca * 24 * 60) / 4,
          seconds: (Ca * 24 * 60 * 60) / 4,
          milliseconds: (Ca * 24 * 60 * 60 * 1e3) / 4,
        },
        months: {
          weeks: wa / 7,
          days: wa,
          hours: wa * 24,
          minutes: wa * 24 * 60,
          seconds: wa * 24 * 60 * 60,
          milliseconds: wa * 24 * 60 * 60 * 1e3,
        },
        ...xa,
      }),
      (Ea = [
        `years`,
        `quarters`,
        `months`,
        `weeks`,
        `days`,
        `hours`,
        `minutes`,
        `seconds`,
        `milliseconds`,
      ]),
      (Da = Ea.slice(0).reverse()),
      (z = class e {
        constructor(e) {
          let t = e.conversionAccuracy === `longterm` || !1,
            n = t ? Ta : Sa;
          (e.matrix && (n = e.matrix),
            (this.values = e.values),
            (this.loc = e.loc || F.create()),
            (this.conversionAccuracy = t ? `longterm` : `casual`),
            (this.invalid = e.invalid || null),
            (this.matrix = n),
            (this.isLuxonDuration = !0));
        }
        static fromMillis(t, n) {
          return e.fromObject({ milliseconds: t }, n);
        }
        static fromObject(t, n = {}) {
          if (typeof t != `object` || !t)
            throw new N(
              `Duration.fromObject: argument expected to be an object, got ${t === null ? `null` : typeof t}`,
            );
          return new e({
            values: Hr(t, e.normalizeUnit),
            loc: F.fromObject(n),
            conversionAccuracy: n.conversionAccuracy,
            matrix: n.matrix,
          });
        }
        static fromDurationLike(t) {
          if (hr(t)) return e.fromMillis(t);
          if (e.isDuration(t)) return t;
          if (typeof t == `object`) return e.fromObject(t);
          throw new N(`Unknown duration argument ${t} of type ${typeof t}`);
        }
        static fromISO(t, n) {
          let [r] = Ni(t);
          return r
            ? e.fromObject(r, n)
            : e.invalid(`unparsable`, `the input "${t}" can't be parsed as ISO 8601`);
        }
        static fromISOTime(t, n) {
          let [r] = Pi(t);
          return r
            ? e.fromObject(r, n)
            : e.invalid(`unparsable`, `the input "${t}" can't be parsed as ISO 8601`);
        }
        static invalid(t, n = null) {
          if (!t) throw new N(`need to specify a reason the Duration is invalid`);
          let r = t instanceof Xn ? t : new Xn(t, n);
          if (I.throwOnInvalid) throw new dt(r);
          return new e({ invalid: r });
        }
        static normalizeUnit(e) {
          let t = {
            year: `years`,
            years: `years`,
            quarter: `quarters`,
            quarters: `quarters`,
            month: `months`,
            months: `months`,
            week: `weeks`,
            weeks: `weeks`,
            day: `days`,
            days: `days`,
            hour: `hours`,
            hours: `hours`,
            minute: `minutes`,
            minutes: `minutes`,
            second: `seconds`,
            seconds: `seconds`,
            millisecond: `milliseconds`,
            milliseconds: `milliseconds`,
          }[e && e.toLowerCase()];
          if (!t) throw new pt(e);
          return t;
        }
        static isDuration(e) {
          return (e && e.isLuxonDuration) || !1;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        toFormat(e, t = {}) {
          let n = { ...t, floor: t.round !== !1 && t.floor !== !1 };
          return this.isValid ? pi.create(this.loc, n).formatDurationFromString(this, e) : ba;
        }
        toHuman(e = {}) {
          if (!this.isValid) return ba;
          let t = e.showZeros !== !1,
            n = Ea.map((n) => {
              let r = this.values[n];
              return L(r) || (r === 0 && !t)
                ? null
                : this.loc
                    .numberFormatter({
                      style: `unit`,
                      unitDisplay: `long`,
                      ...e,
                      unit: n.slice(0, -1),
                    })
                    .format(r);
            }).filter((e) => e);
          return this.loc
            .listFormatter({ type: `conjunction`, style: e.listStyle || `narrow`, ...e })
            .format(n);
        }
        toObject() {
          return this.isValid ? { ...this.values } : {};
        }
        toISO() {
          if (!this.isValid) return null;
          let e = `P`;
          return (
            this.years !== 0 && (e += this.years + `Y`),
            (this.months !== 0 || this.quarters !== 0) &&
              (e += this.months + this.quarters * 3 + `M`),
            this.weeks !== 0 && (e += this.weeks + `W`),
            this.days !== 0 && (e += this.days + `D`),
            (this.hours !== 0 ||
              this.minutes !== 0 ||
              this.seconds !== 0 ||
              this.milliseconds !== 0) &&
              (e += `T`),
            this.hours !== 0 && (e += this.hours + `H`),
            this.minutes !== 0 && (e += this.minutes + `M`),
            (this.seconds !== 0 || this.milliseconds !== 0) &&
              (e += jr(this.seconds + this.milliseconds / 1e3, 3) + `S`),
            e === `P` && (e += `T0S`),
            e
          );
        }
        toISOTime(e = {}) {
          if (!this.isValid) return null;
          let t = this.toMillis();
          return t < 0 || t >= 864e5
            ? null
            : ((e = {
                suppressMilliseconds: !1,
                suppressSeconds: !1,
                includePrefix: !1,
                format: `extended`,
                ...e,
                includeOffset: !1,
              }),
              V.fromMillis(t, { zone: `UTC` }).toISOTime(e));
        }
        toJSON() {
          return this.toISO();
        }
        toString() {
          return this.toISO();
        }
        [Symbol.for(`nodejs.util.inspect.custom`)]() {
          return this.isValid
            ? `Duration { values: ${JSON.stringify(this.values)} }`
            : `Duration { Invalid, reason: ${this.invalidReason} }`;
        }
        toMillis() {
          return this.isValid ? _a(this.matrix, this.values) : NaN;
        }
        valueOf() {
          return this.toMillis();
        }
        plus(t) {
          if (!this.isValid) return this;
          let n = e.fromDurationLike(t),
            r = {};
          for (let e of Ea)
            (wr(n.values, e) || wr(this.values, e)) && (r[e] = n.get(e) + this.get(e));
          return ga(this, { values: r }, !0);
        }
        minus(t) {
          if (!this.isValid) return this;
          let n = e.fromDurationLike(t);
          return this.plus(n.negate());
        }
        mapUnits(e) {
          if (!this.isValid) return this;
          let t = {};
          for (let n of Object.keys(this.values)) t[n] = Vr(e(this.values[n], n));
          return ga(this, { values: t }, !0);
        }
        get(t) {
          return this[e.normalizeUnit(t)];
        }
        set(t) {
          if (!this.isValid) return this;
          let n = { ...this.values, ...Hr(t, e.normalizeUnit) };
          return ga(this, { values: n });
        }
        reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: n, matrix: r } = {}) {
          let i = {
            loc: this.loc.clone({ locale: e, numberingSystem: t }),
            matrix: r,
            conversionAccuracy: n,
          };
          return ga(this, i);
        }
        as(e) {
          return this.isValid ? this.shiftTo(e).get(e) : NaN;
        }
        normalize() {
          if (!this.isValid) return this;
          let e = this.toObject();
          return (va(this.matrix, e), ga(this, { values: e }, !0));
        }
        rescale() {
          if (!this.isValid) return this;
          let e = ya(this.normalize().shiftToAll().toObject());
          return ga(this, { values: e }, !0);
        }
        shiftTo(...t) {
          if (!this.isValid || t.length === 0) return this;
          t = t.map((t) => e.normalizeUnit(t));
          let n = {},
            r = {},
            i = this.toObject(),
            a;
          for (let e of Ea)
            if (t.indexOf(e) >= 0) {
              a = e;
              let t = 0;
              for (let n in r) ((t += this.matrix[n][e] * r[n]), (r[n] = 0));
              hr(i[e]) && (t += i[e]);
              let o = Math.trunc(t);
              ((n[e] = o), (r[e] = (t * 1e3 - o * 1e3) / 1e3));
            } else hr(i[e]) && (r[e] = i[e]);
          for (let e in r) r[e] !== 0 && (n[a] += e === a ? r[e] : r[e] / this.matrix[a][e]);
          return (va(this.matrix, n), ga(this, { values: n }, !0));
        }
        shiftToAll() {
          return this.isValid
            ? this.shiftTo(
                `years`,
                `months`,
                `weeks`,
                `days`,
                `hours`,
                `minutes`,
                `seconds`,
                `milliseconds`,
              )
            : this;
        }
        negate() {
          if (!this.isValid) return this;
          let e = {};
          for (let t of Object.keys(this.values)) e[t] = this.values[t] === 0 ? 0 : -this.values[t];
          return ga(this, { values: e }, !0);
        }
        removeZeros() {
          if (!this.isValid) return this;
          let e = ya(this.values);
          return ga(this, { values: e }, !0);
        }
        get years() {
          return this.isValid ? this.values.years || 0 : NaN;
        }
        get quarters() {
          return this.isValid ? this.values.quarters || 0 : NaN;
        }
        get months() {
          return this.isValid ? this.values.months || 0 : NaN;
        }
        get weeks() {
          return this.isValid ? this.values.weeks || 0 : NaN;
        }
        get days() {
          return this.isValid ? this.values.days || 0 : NaN;
        }
        get hours() {
          return this.isValid ? this.values.hours || 0 : NaN;
        }
        get minutes() {
          return this.isValid ? this.values.minutes || 0 : NaN;
        }
        get seconds() {
          return this.isValid ? this.values.seconds || 0 : NaN;
        }
        get milliseconds() {
          return this.isValid ? this.values.milliseconds || 0 : NaN;
        }
        get isValid() {
          return this.invalid === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        equals(e) {
          if (!this.isValid || !e.isValid || !this.loc.equals(e.loc)) return !1;
          function t(e, t) {
            return e === void 0 || e === 0 ? t === void 0 || t === 0 : e === t;
          }
          for (let n of Ea) if (!t(this.values[n], e.values[n])) return !1;
          return !0;
        }
      }));
  });
function ka(e, t) {
  return !e || !e.isValid
    ? ja.invalid(`missing or invalid start`)
    : !t || !t.isValid
      ? ja.invalid(`missing or invalid end`)
      : t < e
        ? ja.invalid(
            `end before start`,
            `The end of an interval must be after its start, but you had start=${e.toISO()} and end=${t.toISO()}`,
          )
        : null;
}
var Aa,
  ja,
  Ma = e(() => {
    (zo(),
      Oa(),
      Yn(),
      ht(),
      Zn(),
      mi(),
      Bt(),
      (Aa = `Invalid Interval`),
      (ja = class e {
        constructor(e) {
          ((this.s = e.start),
            (this.e = e.end),
            (this.invalid = e.invalid || null),
            (this.isLuxonInterval = !0));
        }
        static invalid(t, n = null) {
          if (!t) throw new N(`need to specify a reason the Interval is invalid`);
          let r = t instanceof Xn ? t : new Xn(t, n);
          if (I.throwOnInvalid) throw new ut(r);
          return new e({ invalid: r });
        }
        static fromDateTimes(t, n) {
          let r = Oo(t),
            i = Oo(n);
          return ka(r, i) ?? new e({ start: r, end: i });
        }
        static after(t, n) {
          let r = z.fromDurationLike(n),
            i = Oo(t);
          return e.fromDateTimes(i, i.plus(r));
        }
        static before(t, n) {
          let r = z.fromDurationLike(n),
            i = Oo(t);
          return e.fromDateTimes(i.minus(r), i);
        }
        static fromISO(t, n) {
          let [r, i] = (t || ``).split(`/`, 2);
          if (r && i) {
            let t, a;
            try {
              ((t = V.fromISO(r, n)), (a = t.isValid));
            } catch {
              a = !1;
            }
            let o, s;
            try {
              ((o = V.fromISO(i, n)), (s = o.isValid));
            } catch {
              s = !1;
            }
            if (a && s) return e.fromDateTimes(t, o);
            if (a) {
              let r = z.fromISO(i, n);
              if (r.isValid) return e.after(t, r);
            } else if (s) {
              let t = z.fromISO(r, n);
              if (t.isValid) return e.before(o, t);
            }
          }
          return e.invalid(`unparsable`, `the input "${t}" can't be parsed as ISO 8601`);
        }
        static isInterval(e) {
          return (e && e.isLuxonInterval) || !1;
        }
        get start() {
          return this.isValid ? this.s : null;
        }
        get end() {
          return this.isValid ? this.e : null;
        }
        get lastDateTime() {
          return this.isValid && this.e ? this.e.minus(1) : null;
        }
        get isValid() {
          return this.invalidReason === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        length(e = `milliseconds`) {
          return this.isValid ? this.toDuration(e).get(e) : NaN;
        }
        count(e = `milliseconds`, t) {
          if (!this.isValid) return NaN;
          let n = this.start.startOf(e, t),
            r;
          return (
            (r = t?.useLocaleWeeks ? this.end.reconfigure({ locale: n.locale }) : this.end),
            (r = r.startOf(e, t)),
            Math.floor(r.diff(n, e).get(e)) + (r.valueOf() !== this.end.valueOf())
          );
        }
        hasSame(e) {
          return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
        }
        isEmpty() {
          return this.s.valueOf() === this.e.valueOf();
        }
        isAfter(e) {
          return this.isValid ? this.s > e : !1;
        }
        isBefore(e) {
          return this.isValid ? this.e <= e : !1;
        }
        contains(e) {
          return this.isValid ? this.s <= e && this.e > e : !1;
        }
        set({ start: t, end: n } = {}) {
          return this.isValid ? e.fromDateTimes(t || this.s, n || this.e) : this;
        }
        splitAt(...t) {
          if (!this.isValid) return [];
          let n = t
              .map(Oo)
              .filter((e) => this.contains(e))
              .sort((e, t) => e.toMillis() - t.toMillis()),
            r = [],
            { s: i } = this,
            a = 0;
          for (; i < this.e;) {
            let t = n[a] || this.e,
              o = +t > +this.e ? this.e : t;
            (r.push(e.fromDateTimes(i, o)), (i = o), (a += 1));
          }
          return r;
        }
        splitBy(t) {
          let n = z.fromDurationLike(t);
          if (!this.isValid || !n.isValid || n.as(`milliseconds`) === 0) return [];
          let { s: r } = this,
            i = 1,
            a,
            o = [];
          for (; r < this.e;) {
            let t = this.start.plus(n.mapUnits((e) => e * i));
            ((a = +t > +this.e ? this.e : t), o.push(e.fromDateTimes(r, a)), (r = a), (i += 1));
          }
          return o;
        }
        divideEqually(e) {
          return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
        }
        overlaps(e) {
          return this.e > e.s && this.s < e.e;
        }
        abutsStart(e) {
          return this.isValid ? +this.e == +e.s : !1;
        }
        abutsEnd(e) {
          return this.isValid ? +e.e == +this.s : !1;
        }
        engulfs(e) {
          return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
        }
        equals(e) {
          return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
        }
        intersection(t) {
          if (!this.isValid) return this;
          let n = this.s > t.s ? this.s : t.s,
            r = this.e < t.e ? this.e : t.e;
          return n >= r ? null : e.fromDateTimes(n, r);
        }
        union(t) {
          if (!this.isValid) return this;
          let n = this.s < t.s ? this.s : t.s,
            r = this.e > t.e ? this.e : t.e;
          return e.fromDateTimes(n, r);
        }
        static merge(e) {
          let [t, n] = e
            .sort((e, t) => e.s - t.s)
            .reduce(
              ([e, t], n) =>
                t
                  ? t.overlaps(n) || t.abutsStart(n)
                    ? [e, t.union(n)]
                    : [e.concat([t]), n]
                  : [e, n],
              [[], null],
            );
          return (n && t.push(n), t);
        }
        static xor(t) {
          let n = null,
            r = 0,
            i = [],
            a = t.map((e) => [
              { time: e.s, type: `s` },
              { time: e.e, type: `e` },
            ]),
            o = Array.prototype.concat(...a).sort((e, t) => e.time - t.time);
          for (let t of o)
            ((r += t.type === `s` ? 1 : -1),
              r === 1
                ? (n = t.time)
                : (n && +n != +t.time && i.push(e.fromDateTimes(n, t.time)), (n = null)));
          return e.merge(i);
        }
        difference(...t) {
          return e
            .xor([this].concat(t))
            .map((e) => this.intersection(e))
            .filter((e) => e && !e.isEmpty());
        }
        toString() {
          return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Aa;
        }
        [Symbol.for(`nodejs.util.inspect.custom`)]() {
          return this.isValid
            ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`
            : `Interval { Invalid, reason: ${this.invalidReason} }`;
        }
        toLocaleString(e = vt, t = {}) {
          return this.isValid ? pi.create(this.s.loc.clone(t), e).formatInterval(this) : Aa;
        }
        toISO(e) {
          return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : Aa;
        }
        toISODate() {
          return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Aa;
        }
        toISOTime(e) {
          return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : Aa;
        }
        toFormat(e, { separator: t = ` – ` } = {}) {
          return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : Aa;
        }
        toDuration(e, t) {
          return this.isValid ? this.e.diff(this.s, e, t) : z.invalid(this.invalidReason);
        }
        mapEndpoints(t) {
          return e.fromDateTimes(t(this.s), t(this.e));
        }
      }));
  }),
  Na,
  Pa = e(() => {
    (zo(),
      Yn(),
      Tn(),
      $t(),
      Mn(),
      Gr(),
      (Na = class {
        static hasDST(e = I.defaultZone) {
          let t = V.now().setZone(e).set({ month: 12 });
          return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
        }
        static isValidIANAZone(e) {
          return Qt.isValidZone(e);
        }
        static normalizeZone(e) {
          return jn(e, I.defaultZone);
        }
        static getStartOfWeek({ locale: e = null, locObj: t = null } = {}) {
          return (t || F.create(e)).getStartOfWeek();
        }
        static getMinimumDaysInFirstWeek({ locale: e = null, locObj: t = null } = {}) {
          return (t || F.create(e)).getMinDaysInFirstWeek();
        }
        static getWeekendWeekdays({ locale: e = null, locObj: t = null } = {}) {
          return (t || F.create(e)).getWeekendDays().slice();
        }
        static months(
          e = `long`,
          {
            locale: t = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: i = `gregory`,
          } = {},
        ) {
          return (r || F.create(t, n, i)).months(e);
        }
        static monthsFormat(
          e = `long`,
          {
            locale: t = null,
            numberingSystem: n = null,
            locObj: r = null,
            outputCalendar: i = `gregory`,
          } = {},
        ) {
          return (r || F.create(t, n, i)).months(e, !0);
        }
        static weekdays(
          e = `long`,
          { locale: t = null, numberingSystem: n = null, locObj: r = null } = {},
        ) {
          return (r || F.create(t, n, null)).weekdays(e);
        }
        static weekdaysFormat(
          e = `long`,
          { locale: t = null, numberingSystem: n = null, locObj: r = null } = {},
        ) {
          return (r || F.create(t, n, null)).weekdays(e, !0);
        }
        static meridiems({ locale: e = null } = {}) {
          return F.create(e).meridiems();
        }
        static eras(e = `short`, { locale: t = null } = {}) {
          return F.create(t, null, `gregory`).eras(e);
        }
        static features() {
          return { relative: yr(), localeWeek: br() };
        }
      }));
  });
function Fa(e, t) {
  let n = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf(`day`).valueOf(),
    r = n(t) - n(e);
  return Math.floor(z.fromMillis(r).as(`days`));
}
function Ia(e, t, n) {
  let r = [
      [`years`, (e, t) => t.year - e.year],
      [`quarters`, (e, t) => t.quarter - e.quarter + (t.year - e.year) * 4],
      [`months`, (e, t) => t.month - e.month + (t.year - e.year) * 12],
      [
        `weeks`,
        (e, t) => {
          let n = Fa(e, t);
          return (n - (n % 7)) / 7;
        },
      ],
      [`days`, Fa],
    ],
    i = {},
    a = e,
    o,
    s;
  for (let [c, l] of r)
    n.indexOf(c) >= 0 &&
      ((o = c),
      (i[c] = l(e, t)),
      (s = a.plus(i)),
      s > t ? (i[c]--, (e = a.plus(i)), e > t && ((s = e), i[c]--, (e = a.plus(i)))) : (e = s));
  return [e, i, s, o];
}
function La(e, t, n, r) {
  let [i, a, o, s] = Ia(e, t, n),
    c = t - i,
    l = n.filter((e) => [`hours`, `minutes`, `seconds`, `milliseconds`].indexOf(e) >= 0);
  l.length === 0 &&
    (o < t && (o = i.plus({ [s]: 1 })), o !== i && (a[s] = (a[s] || 0) + c / (o - i)));
  let u = z.fromObject(a, r);
  return l.length > 0
    ? z
        .fromMillis(c, r)
        .shiftTo(...l)
        .plus(u)
    : u;
}
var Ra = e(() => {
  Oa();
});
function B(e, t = (e) => e) {
  return { regex: e, deser: ([e]) => t(Nn(e)) };
}
function za(e) {
  return e.replace(/\./g, `\\.?`).replace(io, ro);
}
function Ba(e) {
  return e.replace(/\./g, ``).replace(io, ` `).toLowerCase();
}
function Va(e, t) {
  return e === null
    ? null
    : {
        regex: RegExp(e.map(za).join(`|`)),
        deser: ([n]) => e.findIndex((e) => Ba(n) === Ba(e)) + t,
      };
}
function Ha(e, t) {
  return { regex: e, deser: ([, e, t]) => Br(e, t), groups: t };
}
function Ua(e) {
  return { regex: e, deser: ([e]) => e };
}
function Wa(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, `\\$&`);
}
function Ga(e, t) {
  let n = Fn(t),
    r = Fn(t, `{2}`),
    i = Fn(t, `{3}`),
    a = Fn(t, `{4}`),
    o = Fn(t, `{6}`),
    s = Fn(t, `{1,2}`),
    c = Fn(t, `{1,3}`),
    l = Fn(t, `{1,6}`),
    u = Fn(t, `{1,9}`),
    d = Fn(t, `{2,4}`),
    f = Fn(t, `{4,6}`),
    p = (e) => ({ regex: RegExp(Wa(e.val)), deser: ([e]) => e, literal: !0 }),
    m = ((m) => {
      if (e.literal) return p(m);
      switch (m.val) {
        case `G`:
          return Va(t.eras(`short`), 0);
        case `GG`:
          return Va(t.eras(`long`), 0);
        case `y`:
          return B(l);
        case `yy`:
          return B(d, Rr);
        case `yyyy`:
          return B(a);
        case `yyyyy`:
          return B(f);
        case `yyyyyy`:
          return B(o);
        case `M`:
          return B(s);
        case `MM`:
          return B(r);
        case `MMM`:
          return Va(t.months(`short`, !0), 1);
        case `MMMM`:
          return Va(t.months(`long`, !0), 1);
        case `L`:
          return B(s);
        case `LL`:
          return B(r);
        case `LLL`:
          return Va(t.months(`short`, !1), 1);
        case `LLLL`:
          return Va(t.months(`long`, !1), 1);
        case `d`:
          return B(s);
        case `dd`:
          return B(r);
        case `o`:
          return B(c);
        case `ooo`:
          return B(i);
        case `HH`:
          return B(r);
        case `H`:
          return B(s);
        case `hh`:
          return B(r);
        case `h`:
          return B(s);
        case `mm`:
          return B(r);
        case `m`:
          return B(s);
        case `q`:
          return B(s);
        case `qq`:
          return B(r);
        case `s`:
          return B(s);
        case `ss`:
          return B(r);
        case `S`:
          return B(c);
        case `SSS`:
          return B(i);
        case `u`:
          return Ua(u);
        case `uu`:
          return Ua(s);
        case `uuu`:
          return B(n);
        case `a`:
          return Va(t.meridiems(), 0);
        case `kkkk`:
          return B(a);
        case `kk`:
          return B(d, Rr);
        case `W`:
          return B(s);
        case `WW`:
          return B(r);
        case `E`:
        case `c`:
          return B(n);
        case `EEE`:
          return Va(t.weekdays(`short`, !1), 1);
        case `EEEE`:
          return Va(t.weekdays(`long`, !1), 1);
        case `ccc`:
          return Va(t.weekdays(`short`, !0), 1);
        case `cccc`:
          return Va(t.weekdays(`long`, !0), 1);
        case `Z`:
        case `ZZ`:
          return Ha(RegExp(`([+-]${s.source})(?::(${r.source}))?`), 2);
        case `ZZZ`:
          return Ha(RegExp(`([+-]${s.source})(${r.source})?`), 2);
        case `z`:
          return Ua(/[a-z_+-/]{1,256}?/i);
        case ` `:
          return Ua(/[^\S\n\r]/);
        default:
          return p(m);
      }
    })(e) || { invalidReason: no };
  return ((m.token = e), m);
}
function Ka(e, t, n) {
  let { type: r, value: i } = e;
  if (r === `literal`) {
    let e = /^\s+$/.test(i);
    return { literal: !e, val: e ? ` ` : i };
  }
  let a = t[r],
    o = r;
  r === `hour` &&
    (o =
      t.hour12 == null
        ? t.hourCycle == null
          ? n.hour12
            ? `hour12`
            : `hour24`
          : t.hourCycle === `h11` || t.hourCycle === `h12`
            ? `hour12`
            : `hour24`
        : t.hour12
          ? `hour12`
          : `hour24`);
  let s = ao[o];
  if ((typeof s == `object` && (s = s[a]), s)) return { literal: !1, val: s };
}
function qa(e) {
  return [`^${e.map((e) => e.regex).reduce((e, t) => `${e}(${t.source})`, ``)}$`, e];
}
function Ja(e, t, n) {
  let r = e.match(t);
  if (r) {
    let e = {},
      t = 1;
    for (let i in n)
      if (wr(n, i)) {
        let a = n[i],
          o = a.groups ? a.groups + 1 : 1;
        (!a.literal && a.token && (e[a.token.val[0]] = a.deser(r.slice(t, t + o))), (t += o));
      }
    return [r, e];
  } else return [r, {}];
}
function Ya(e) {
  let t = (e) => {
      switch (e) {
        case `S`:
          return `millisecond`;
        case `s`:
          return `second`;
        case `m`:
          return `minute`;
        case `h`:
        case `H`:
          return `hour`;
        case `d`:
          return `day`;
        case `o`:
          return `ordinal`;
        case `L`:
        case `M`:
          return `month`;
        case `y`:
          return `year`;
        case `E`:
        case `c`:
          return `weekday`;
        case `W`:
          return `weekNumber`;
        case `k`:
          return `weekYear`;
        case `q`:
          return `quarter`;
        default:
          return null;
      }
    },
    n = null,
    r;
  return (
    L(e.z) || (n = Qt.create(e.z)),
    L(e.Z) || ((n ||= new Dn(e.Z)), (r = e.Z)),
    L(e.q) || (e.M = (e.q - 1) * 3 + 1),
    L(e.h) || (e.h < 12 && e.a === 1 ? (e.h += 12) : e.h === 12 && e.a === 0 && (e.h = 0)),
    e.G === 0 && e.y && (e.y = -e.y),
    L(e.u) || (e.S = Ar(e.u)),
    [
      Object.keys(e).reduce((n, r) => {
        let i = t(r);
        return (i && (n[i] = e[r]), n);
      }, {}),
      n,
      r,
    ]
  );
}
function Xa() {
  return ((oo ||= V.fromMillis(1555555555555)), oo);
}
function Za(e, t) {
  if (e.literal) return e;
  let n = to(pi.macroTokenToFormatOpts(e.val), t);
  return n == null || n.includes(void 0) ? e : n;
}
function Qa(e, t) {
  return Array.prototype.concat(...e.map((e) => Za(e, t)));
}
function $a(e, t, n) {
  return new so(e, n).explainFromTokens(t);
}
function eo(e, t, n) {
  let { result: r, zone: i, specificOffset: a, invalidReason: o } = $a(e, t, n);
  return [r, i, a, o];
}
function to(e, t) {
  if (!e) return null;
  let n = pi.create(t, e).dtFormatter(Xa()),
    r = n.formatToParts(),
    i = n.resolvedOptions();
  return r.map((t) => Ka(t, e, i));
}
var no,
  ro,
  io,
  ao,
  oo,
  so,
  co = e(() => {
    (Gr(),
      mi(),
      On(),
      $t(),
      zo(),
      Bn(),
      ht(),
      (no = `missing Intl.DateTimeFormat.formatToParts support`),
      (ro = `[ \xA0]`),
      (io = new RegExp(ro, `g`)),
      (ao = {
        year: { "2-digit": `yy`, numeric: `yyyyy` },
        month: { numeric: `M`, "2-digit": `MM`, short: `MMM`, long: `MMMM` },
        day: { numeric: `d`, "2-digit": `dd` },
        weekday: { short: `EEE`, long: `EEEE` },
        dayperiod: `a`,
        dayPeriod: `a`,
        hour12: { numeric: `h`, "2-digit": `hh` },
        hour24: { numeric: `H`, "2-digit": `HH` },
        minute: { numeric: `m`, "2-digit": `mm` },
        second: { numeric: `s`, "2-digit": `ss` },
        timeZoneName: { long: `ZZZZZ`, short: `ZZZ` },
      }),
      (oo = null),
      (so = class {
        constructor(e, t) {
          if (
            ((this.locale = e),
            (this.format = t),
            (this.tokens = Qa(pi.parseFormat(t), e)),
            (this.units = this.tokens.map((t) => Ga(t, e))),
            (this.disqualifyingUnit = this.units.find((e) => e.invalidReason)),
            !this.disqualifyingUnit)
          ) {
            let [e, t] = qa(this.units);
            ((this.regex = RegExp(e, `i`)), (this.handlers = t));
          }
        }
        explainFromTokens(e) {
          if (this.isValid) {
            let [t, n] = Ja(e, this.regex, this.handlers),
              [r, i, a] = n ? Ya(n) : [null, null, void 0];
            if (wr(n, `a`) && wr(n, `H`))
              throw new ft(`Can't include meridiem when specifying 24-hour format`);
            return {
              input: e,
              tokens: this.tokens,
              regex: this.regex,
              rawMatches: t,
              matches: n,
              result: r,
              zone: i,
              specificOffset: a,
            };
          } else return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
        }
        get isValid() {
          return !this.disqualifyingUnit;
        }
        get invalidReason() {
          return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
        }
      }));
  });
function lo(e) {
  return new Xn(`unsupported zone`, `the zone "${e.name}" is not supported`);
}
function uo(e) {
  return (e.weekData === null && (e.weekData = rr(e.c)), e.weekData);
}
function fo(e) {
  return (
    e.localWeekData === null &&
      (e.localWeekData = rr(e.c, e.loc.getMinDaysInFirstWeek(), e.loc.getStartOfWeek())),
    e.localWeekData
  );
}
function po(e, t) {
  let n = { ts: e.ts, zone: e.zone, c: e.c, o: e.o, loc: e.loc, invalid: e.invalid };
  return new V({ ...n, ...t, old: n });
}
function mo(e, t, n) {
  let r = e - t * 60 * 1e3,
    i = n.offset(r);
  if (t === i) return [r, t];
  r -= (i - t) * 60 * 1e3;
  let a = n.offset(r);
  return i === a ? [r, i] : [e - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function ho(e, t) {
  e += t * 60 * 1e3;
  let n = new Date(e);
  return {
    year: n.getUTCFullYear(),
    month: n.getUTCMonth() + 1,
    day: n.getUTCDate(),
    hour: n.getUTCHours(),
    minute: n.getUTCMinutes(),
    second: n.getUTCSeconds(),
    millisecond: n.getUTCMilliseconds(),
  };
}
function go(e, t, n) {
  return mo(Fr(e), t, n);
}
function _o(e, t) {
  let n = e.o,
    r = e.c.year + Math.trunc(t.years),
    i = e.c.month + Math.trunc(t.months) + Math.trunc(t.quarters) * 3,
    a = {
      ...e.c,
      year: r,
      month: i,
      day: Math.min(e.c.day, Pr(r, i)) + Math.trunc(t.days) + Math.trunc(t.weeks) * 7,
    },
    o = z
      .fromObject({
        years: t.years - Math.trunc(t.years),
        quarters: t.quarters - Math.trunc(t.quarters),
        months: t.months - Math.trunc(t.months),
        weeks: t.weeks - Math.trunc(t.weeks),
        days: t.days - Math.trunc(t.days),
        hours: t.hours,
        minutes: t.minutes,
        seconds: t.seconds,
        milliseconds: t.milliseconds,
      })
      .as(`milliseconds`),
    [s, c] = mo(Fr(a), n, e.zone);
  return (o !== 0 && ((s += o), (c = e.zone.offset(s))), { ts: s, o: c });
}
function vo(e, t, n, r, i, a) {
  let { setZone: o, zone: s } = n;
  if ((e && Object.keys(e).length !== 0) || t) {
    let r = t || s,
      i = V.fromObject(e, { ...n, zone: r, specificOffset: a });
    return o ? i : i.setZone(s);
  } else return V.invalid(new Xn(`unparsable`, `the input "${i}" can't be parsed as ${r}`));
}
function yo(e, t, n = !0) {
  return e.isValid
    ? pi.create(F.create(`en-US`), { allowZ: n, forceSimple: !0 }).formatDateTimeFromString(e, t)
    : null;
}
function bo(e, t, n) {
  let r = e.c.year > 9999 || e.c.year < 0,
    i = ``;
  if ((r && e.c.year >= 0 && (i += `+`), (i += R(e.c.year, r ? 6 : 4)), n === `year`)) return i;
  if (t) {
    if (((i += `-`), (i += R(e.c.month)), n === `month`)) return i;
    i += `-`;
  } else if (((i += R(e.c.month)), n === `month`)) return i;
  return ((i += R(e.c.day)), i);
}
function xo(e, t, n, r, i, a, o) {
  let s = !n || e.c.millisecond !== 0 || e.c.second !== 0,
    c = ``;
  switch (o) {
    case `day`:
    case `month`:
    case `year`:
      break;
    default:
      if (((c += R(e.c.hour)), o === `hour`)) break;
      if (t) {
        if (((c += `:`), (c += R(e.c.minute)), o === `minute`)) break;
        s && ((c += `:`), (c += R(e.c.second)));
      } else {
        if (((c += R(e.c.minute)), o === `minute`)) break;
        s && (c += R(e.c.second));
      }
      if (o === `second`) break;
      s && (!r || e.c.millisecond !== 0) && ((c += `.`), (c += R(e.c.millisecond, 3)));
  }
  return (
    i &&
      (e.isOffsetFixed && e.offset === 0 && !a
        ? (c += `Z`)
        : e.o < 0
          ? ((c += `-`),
            (c += R(Math.trunc(-e.o / 60))),
            (c += `:`),
            (c += R(Math.trunc(-e.o % 60))))
          : ((c += `+`),
            (c += R(Math.trunc(e.o / 60))),
            (c += `:`),
            (c += R(Math.trunc(e.o % 60))))),
    a && (c += `[` + e.zone.ianaName + `]`),
    c
  );
}
function So(e) {
  let t = {
    year: `year`,
    years: `year`,
    month: `month`,
    months: `month`,
    day: `day`,
    days: `day`,
    hour: `hour`,
    hours: `hour`,
    minute: `minute`,
    minutes: `minute`,
    quarter: `quarter`,
    quarters: `quarter`,
    second: `second`,
    seconds: `second`,
    millisecond: `millisecond`,
    milliseconds: `millisecond`,
    weekday: `weekday`,
    weekdays: `weekday`,
    weeknumber: `weekNumber`,
    weeksnumber: `weekNumber`,
    weeknumbers: `weekNumber`,
    weekyear: `weekYear`,
    weekyears: `weekYear`,
    ordinal: `ordinal`,
  }[e.toLowerCase()];
  if (!t) throw new pt(e);
  return t;
}
function Co(e) {
  switch (e.toLowerCase()) {
    case `localweekday`:
    case `localweekdays`:
      return `localWeekday`;
    case `localweeknumber`:
    case `localweeknumbers`:
      return `localWeekNumber`;
    case `localweekyear`:
    case `localweekyears`:
      return `localWeekYear`;
    default:
      return So(e);
  }
}
function wo(e) {
  if ((Lo === void 0 && (Lo = I.now()), e.type !== `iana`)) return e.offset(Lo);
  let t = e.name,
    n = Ro.get(t);
  return (n === void 0 && ((n = e.offset(Lo)), Ro.set(t, n)), n);
}
function To(e, t) {
  let n = jn(t.zone, I.defaultZone);
  if (!n.isValid) return V.invalid(lo(n));
  let r = F.fromObject(t),
    i,
    a;
  if (L(e.year)) i = I.now();
  else {
    for (let t of Po) L(e[t]) && (e[t] = jo[t]);
    let t = ur(e) || dr(e);
    if (t) return V.invalid(t);
    let r = wo(n);
    [i, a] = go(e, r, n);
  }
  return new V({ ts: i, zone: n, loc: r, o: a });
}
function Eo(e, t, n) {
  let r = L(n.round) ? !0 : n.round,
    i = L(n.rounding) ? `trunc` : n.rounding,
    a = (e, a) => (
      (e = jr(e, r || n.calendary ? 0 : 2, n.calendary ? `round` : i)),
      t.loc.clone(n).relFormatter(n).format(e, a)
    ),
    o = (r) =>
      n.calendary
        ? t.hasSame(e, r)
          ? 0
          : t.startOf(r).diff(e.startOf(r), r).get(r)
        : t.diff(e, r).get(r);
  if (n.unit) return a(o(n.unit), n.unit);
  for (let e of n.units) {
    let t = o(e);
    if (Math.abs(t) >= 1) return a(t, e);
  }
  return a(e > t ? -0 : 0, n.units[n.units.length - 1]);
}
function Do(e) {
  let t = {},
    n;
  return (
    e.length > 0 && typeof e[e.length - 1] == `object`
      ? ((t = e[e.length - 1]), (n = Array.from(e).slice(0, e.length - 1)))
      : (n = Array.from(e)),
    [t, n]
  );
}
function Oo(e) {
  if (V.isDateTime(e)) return e;
  if (e && e.valueOf && hr(e.valueOf())) return V.fromJSDate(e);
  if (e && typeof e == `object`) return V.fromObject(e);
  throw new N(`Unknown datetime argument: ${e}, of type ${typeof e}`);
}
var ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  V,
  zo = e(() => {
    (Oa(),
      Ma(),
      Yn(),
      Pa(),
      mi(),
      On(),
      Tn(),
      Gr(),
      Mn(),
      Ra(),
      ha(),
      co(),
      mr(),
      Bt(),
      ht(),
      Zn(),
      (ko = `Invalid DateTime`),
      (Ao = 864e13),
      (jo = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }),
      (Mo = { weekNumber: 1, weekday: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }),
      (No = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }),
      (Po = [`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`]),
      (Fo = [`weekYear`, `weekNumber`, `weekday`, `hour`, `minute`, `second`, `millisecond`]),
      (Io = [`year`, `ordinal`, `hour`, `minute`, `second`, `millisecond`]),
      (Ro = new Map()),
      (V = class e {
        constructor(e) {
          let t = e.zone || I.defaultZone,
            n =
              e.invalid ||
              (Number.isNaN(e.ts) ? new Xn(`invalid input`) : null) ||
              (t.isValid ? null : lo(t));
          this.ts = L(e.ts) ? I.now() : e.ts;
          let r = null,
            i = null;
          if (!n)
            if (e.old && e.old.ts === this.ts && e.old.zone.equals(t)) [r, i] = [e.old.c, e.old.o];
            else {
              let a = hr(e.o) && !e.old ? e.o : t.offset(this.ts);
              ((r = ho(this.ts, a)),
                (n = Number.isNaN(r.year) ? new Xn(`invalid input`) : null),
                (r = n ? null : r),
                (i = n ? null : a));
            }
          ((this._zone = t),
            (this.loc = e.loc || F.create()),
            (this.invalid = n),
            (this.weekData = null),
            (this.localWeekData = null),
            (this.c = r),
            (this.o = i),
            (this.isLuxonDateTime = !0));
        }
        static now() {
          return new e({});
        }
        static local() {
          let [e, t] = Do(arguments),
            [n, r, i, a, o, s, c] = t;
          return To(
            { year: n, month: r, day: i, hour: a, minute: o, second: s, millisecond: c },
            e,
          );
        }
        static utc() {
          let [e, t] = Do(arguments),
            [n, r, i, a, o, s, c] = t;
          return (
            (e.zone = Dn.utcInstance),
            To({ year: n, month: r, day: i, hour: a, minute: o, second: s, millisecond: c }, e)
          );
        }
        static fromJSDate(t, n = {}) {
          let r = vr(t) ? t.valueOf() : NaN;
          if (Number.isNaN(r)) return e.invalid(`invalid input`);
          let i = jn(n.zone, I.defaultZone);
          return i.isValid ? new e({ ts: r, zone: i, loc: F.fromObject(n) }) : e.invalid(lo(i));
        }
        static fromMillis(t, n = {}) {
          if (!hr(t))
            throw new N(
              `fromMillis requires a numerical input, but received a ${typeof t} with value ${t}`,
            );
          return t < -864e13 || t > Ao
            ? e.invalid(`Timestamp out of range`)
            : new e({ ts: t, zone: jn(n.zone, I.defaultZone), loc: F.fromObject(n) });
        }
        static fromSeconds(t, n = {}) {
          if (hr(t))
            return new e({ ts: t * 1e3, zone: jn(n.zone, I.defaultZone), loc: F.fromObject(n) });
          throw new N(`fromSeconds requires a numerical input`);
        }
        static fromObject(t, n = {}) {
          t ||= {};
          let r = jn(n.zone, I.defaultZone);
          if (!r.isValid) return e.invalid(lo(r));
          let i = F.fromObject(n),
            a = Hr(t, Co),
            { minDaysInFirstWeek: o, startOfWeek: s } = sr(a, i),
            c = I.now(),
            l = L(n.specificOffset) ? r.offset(c) : n.specificOffset,
            u = !L(a.ordinal),
            d = !L(a.year),
            f = !L(a.month) || !L(a.day),
            p = d || f,
            m = a.weekYear || a.weekNumber;
          if ((p || u) && m)
            throw new ft(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
          if (f && u) throw new ft(`Can't mix ordinal dates with month/day`);
          let h = m || (a.weekday && !p),
            g,
            _,
            v = ho(c, l);
          h
            ? ((g = Fo), (_ = Mo), (v = rr(v, o, s)))
            : u
              ? ((g = Io), (_ = No), (v = ar(v)))
              : ((g = Po), (_ = jo));
          let y = !1;
          for (let e of g) {
            let t = a[e];
            L(t) ? (y ? (a[e] = _[e]) : (a[e] = v[e])) : (y = !0);
          }
          let b = (h ? cr(a, o, s) : u ? lr(a) : ur(a)) || dr(a);
          if (b) return e.invalid(b);
          let [x, S] = go(h ? ir(a, o, s) : u ? or(a) : a, l, r),
            C = new e({ ts: x, zone: r, o: S, loc: i });
          return a.weekday && p && t.weekday !== C.weekday
            ? e.invalid(
                `mismatched weekday`,
                `you can't specify both a weekday of ${a.weekday} and a date of ${C.toISO()}`,
              )
            : C.isValid
              ? C
              : e.invalid(C.invalid);
        }
        static fromISO(e, t = {}) {
          let [n, r] = Ai(e);
          return vo(n, r, t, `ISO 8601`, e);
        }
        static fromRFC2822(e, t = {}) {
          let [n, r] = ji(e);
          return vo(n, r, t, `RFC 2822`, e);
        }
        static fromHTTP(e, t = {}) {
          let [n, r] = Mi(e);
          return vo(n, r, t, `HTTP`, t);
        }
        static fromFormat(t, n, r = {}) {
          if (L(t) || L(n)) throw new N(`fromFormat requires an input string and a format`);
          let { locale: i = null, numberingSystem: a = null } = r,
            [o, s, c, l] = eo(F.fromOpts({ locale: i, numberingSystem: a, defaultToEN: !0 }), t, n);
          return l ? e.invalid(l) : vo(o, s, r, `format ${n}`, t, c);
        }
        static fromString(t, n, r = {}) {
          return e.fromFormat(t, n, r);
        }
        static fromSQL(e, t = {}) {
          let [n, r] = Fi(e);
          return vo(n, r, t, `SQL`, e);
        }
        static invalid(t, n = null) {
          if (!t) throw new N(`need to specify a reason the DateTime is invalid`);
          let r = t instanceof Xn ? t : new Xn(t, n);
          if (I.throwOnInvalid) throw new lt(r);
          return new e({ invalid: r });
        }
        static isDateTime(e) {
          return (e && e.isLuxonDateTime) || !1;
        }
        static parseFormatForOpts(e, t = {}) {
          let n = to(e, F.fromObject(t));
          return n ? n.map((e) => (e ? e.val : null)).join(``) : null;
        }
        static expandFormat(e, t = {}) {
          return Qa(pi.parseFormat(e), F.fromObject(t))
            .map((e) => e.val)
            .join(``);
        }
        static resetCache() {
          ((Lo = void 0), Ro.clear());
        }
        get(e) {
          return this[e];
        }
        get isValid() {
          return this.invalid === null;
        }
        get invalidReason() {
          return this.invalid ? this.invalid.reason : null;
        }
        get invalidExplanation() {
          return this.invalid ? this.invalid.explanation : null;
        }
        get locale() {
          return this.isValid ? this.loc.locale : null;
        }
        get numberingSystem() {
          return this.isValid ? this.loc.numberingSystem : null;
        }
        get outputCalendar() {
          return this.isValid ? this.loc.outputCalendar : null;
        }
        get zone() {
          return this._zone;
        }
        get zoneName() {
          return this.isValid ? this.zone.name : null;
        }
        get year() {
          return this.isValid ? this.c.year : NaN;
        }
        get quarter() {
          return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
        }
        get month() {
          return this.isValid ? this.c.month : NaN;
        }
        get day() {
          return this.isValid ? this.c.day : NaN;
        }
        get hour() {
          return this.isValid ? this.c.hour : NaN;
        }
        get minute() {
          return this.isValid ? this.c.minute : NaN;
        }
        get second() {
          return this.isValid ? this.c.second : NaN;
        }
        get millisecond() {
          return this.isValid ? this.c.millisecond : NaN;
        }
        get weekYear() {
          return this.isValid ? uo(this).weekYear : NaN;
        }
        get weekNumber() {
          return this.isValid ? uo(this).weekNumber : NaN;
        }
        get weekday() {
          return this.isValid ? uo(this).weekday : NaN;
        }
        get isWeekend() {
          return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
        }
        get localWeekday() {
          return this.isValid ? fo(this).weekday : NaN;
        }
        get localWeekNumber() {
          return this.isValid ? fo(this).weekNumber : NaN;
        }
        get localWeekYear() {
          return this.isValid ? fo(this).weekYear : NaN;
        }
        get ordinal() {
          return this.isValid ? ar(this.c).ordinal : NaN;
        }
        get monthShort() {
          return this.isValid ? Na.months(`short`, { locObj: this.loc })[this.month - 1] : null;
        }
        get monthLong() {
          return this.isValid ? Na.months(`long`, { locObj: this.loc })[this.month - 1] : null;
        }
        get weekdayShort() {
          return this.isValid ? Na.weekdays(`short`, { locObj: this.loc })[this.weekday - 1] : null;
        }
        get weekdayLong() {
          return this.isValid ? Na.weekdays(`long`, { locObj: this.loc })[this.weekday - 1] : null;
        }
        get offset() {
          return this.isValid ? +this.o : NaN;
        }
        get offsetNameShort() {
          return this.isValid
            ? this.zone.offsetName(this.ts, { format: `short`, locale: this.locale })
            : null;
        }
        get offsetNameLong() {
          return this.isValid
            ? this.zone.offsetName(this.ts, { format: `long`, locale: this.locale })
            : null;
        }
        get isOffsetFixed() {
          return this.isValid ? this.zone.isUniversal : null;
        }
        get isInDST() {
          return this.isOffsetFixed
            ? !1
            : this.offset > this.set({ month: 1, day: 1 }).offset ||
                this.offset > this.set({ month: 5 }).offset;
        }
        getPossibleOffsets() {
          if (!this.isValid || this.isOffsetFixed) return [this];
          let e = 864e5,
            t = 6e4,
            n = Fr(this.c),
            r = this.zone.offset(n - e),
            i = this.zone.offset(n + e),
            a = this.zone.offset(n - r * t),
            o = this.zone.offset(n - i * t);
          if (a === o) return [this];
          let s = n - a * t,
            c = n - o * t,
            l = ho(s, a),
            u = ho(c, o);
          return l.hour === u.hour &&
            l.minute === u.minute &&
            l.second === u.second &&
            l.millisecond === u.millisecond
            ? [po(this, { ts: s }), po(this, { ts: c })]
            : [this];
        }
        get isInLeapYear() {
          return Mr(this.year);
        }
        get daysInMonth() {
          return Pr(this.year, this.month);
        }
        get daysInYear() {
          return this.isValid ? Nr(this.year) : NaN;
        }
        get weeksInWeekYear() {
          return this.isValid ? Lr(this.weekYear) : NaN;
        }
        get weeksInLocalWeekYear() {
          return this.isValid
            ? Lr(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek())
            : NaN;
        }
        resolvedLocaleOptions(e = {}) {
          let {
            locale: t,
            numberingSystem: n,
            calendar: r,
          } = pi.create(this.loc.clone(e), e).resolvedOptions(this);
          return { locale: t, numberingSystem: n, outputCalendar: r };
        }
        toUTC(e = 0, t = {}) {
          return this.setZone(Dn.instance(e), t);
        }
        toLocal() {
          return this.setZone(I.defaultZone);
        }
        setZone(t, { keepLocalTime: n = !1, keepCalendarTime: r = !1 } = {}) {
          if (((t = jn(t, I.defaultZone)), t.equals(this.zone))) return this;
          if (t.isValid) {
            let e = this.ts;
            if (n || r) {
              let n = t.offset(this.ts),
                r = this.toObject();
              [e] = go(r, n, t);
            }
            return po(this, { ts: e, zone: t });
          } else return e.invalid(lo(t));
        }
        reconfigure({ locale: e, numberingSystem: t, outputCalendar: n } = {}) {
          let r = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: n });
          return po(this, { loc: r });
        }
        setLocale(e) {
          return this.reconfigure({ locale: e });
        }
        set(e) {
          if (!this.isValid) return this;
          let t = Hr(e, Co),
            { minDaysInFirstWeek: n, startOfWeek: r } = sr(t, this.loc),
            i = !L(t.weekYear) || !L(t.weekNumber) || !L(t.weekday),
            a = !L(t.ordinal),
            o = !L(t.year),
            s = !L(t.month) || !L(t.day),
            c = o || s,
            l = t.weekYear || t.weekNumber;
          if ((c || a) && l)
            throw new ft(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
          if (s && a) throw new ft(`Can't mix ordinal dates with month/day`);
          let u;
          i
            ? (u = ir({ ...rr(this.c, n, r), ...t }, n, r))
            : L(t.ordinal)
              ? ((u = { ...this.toObject(), ...t }),
                L(t.day) && (u.day = Math.min(Pr(u.year, u.month), u.day)))
              : (u = or({ ...ar(this.c), ...t }));
          let [d, f] = go(u, this.o, this.zone);
          return po(this, { ts: d, o: f });
        }
        plus(e) {
          if (!this.isValid) return this;
          let t = z.fromDurationLike(e);
          return po(this, _o(this, t));
        }
        minus(e) {
          if (!this.isValid) return this;
          let t = z.fromDurationLike(e).negate();
          return po(this, _o(this, t));
        }
        startOf(e, { useLocaleWeeks: t = !1 } = {}) {
          if (!this.isValid) return this;
          let n = {},
            r = z.normalizeUnit(e);
          switch (r) {
            case `years`:
              n.month = 1;
            case `quarters`:
            case `months`:
              n.day = 1;
            case `weeks`:
            case `days`:
              n.hour = 0;
            case `hours`:
              n.minute = 0;
            case `minutes`:
              n.second = 0;
            case `seconds`:
              n.millisecond = 0;
              break;
            case `milliseconds`:
              break;
          }
          if (r === `weeks`)
            if (t) {
              let e = this.loc.getStartOfWeek(),
                { weekday: t } = this;
              (t < e && (n.weekNumber = this.weekNumber - 1), (n.weekday = e));
            } else n.weekday = 1;
          return (
            r === `quarters` && (n.month = (Math.ceil(this.month / 3) - 1) * 3 + 1), this.set(n)
          );
        }
        endOf(e, t) {
          return this.isValid
            ? this.plus({ [e]: 1 })
                .startOf(e, t)
                .minus(1)
            : this;
        }
        toFormat(e, t = {}) {
          return this.isValid
            ? pi.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e)
            : ko;
        }
        toLocaleString(e = vt, t = {}) {
          return this.isValid ? pi.create(this.loc.clone(t), e).formatDateTime(this) : ko;
        }
        toLocaleParts(e = {}) {
          return this.isValid ? pi.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
        }
        toISO({
          format: e = `extended`,
          suppressSeconds: t = !1,
          suppressMilliseconds: n = !1,
          includeOffset: r = !0,
          extendedZone: i = !1,
          precision: a = `milliseconds`,
        } = {}) {
          if (!this.isValid) return null;
          a = So(a);
          let o = e === `extended`,
            s = bo(this, o, a);
          return (Po.indexOf(a) >= 3 && (s += `T`), (s += xo(this, o, t, n, r, i, a)), s);
        }
        toISODate({ format: e = `extended`, precision: t = `day` } = {}) {
          return this.isValid ? bo(this, e === `extended`, So(t)) : null;
        }
        toISOWeekDate() {
          return yo(this, `kkkk-'W'WW-c`);
        }
        toISOTime({
          suppressMilliseconds: e = !1,
          suppressSeconds: t = !1,
          includeOffset: n = !0,
          includePrefix: r = !1,
          extendedZone: i = !1,
          format: a = `extended`,
          precision: o = `milliseconds`,
        } = {}) {
          return this.isValid
            ? ((o = So(o)),
              (r && Po.indexOf(o) >= 3 ? `T` : ``) + xo(this, a === `extended`, t, e, n, i, o))
            : null;
        }
        toRFC2822() {
          return yo(this, `EEE, dd LLL yyyy HH:mm:ss ZZZ`, !1);
        }
        toHTTP() {
          return yo(this.toUTC(), `EEE, dd LLL yyyy HH:mm:ss 'GMT'`);
        }
        toSQLDate() {
          return this.isValid ? bo(this, !0) : null;
        }
        toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: n = !0 } = {}) {
          let r = `HH:mm:ss.SSS`;
          return (
            (t || e) && (n && (r += ` `), t ? (r += `z`) : e && (r += `ZZ`)), yo(this, r, !0)
          );
        }
        toSQL(e = {}) {
          return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
        }
        toString() {
          return this.isValid ? this.toISO() : ko;
        }
        [Symbol.for(`nodejs.util.inspect.custom`)]() {
          return this.isValid
            ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`
            : `DateTime { Invalid, reason: ${this.invalidReason} }`;
        }
        valueOf() {
          return this.toMillis();
        }
        toMillis() {
          return this.isValid ? this.ts : NaN;
        }
        toSeconds() {
          return this.isValid ? this.ts / 1e3 : NaN;
        }
        toUnixInteger() {
          return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
        }
        toJSON() {
          return this.toISO();
        }
        toBSON() {
          return this.toJSDate();
        }
        toObject(e = {}) {
          if (!this.isValid) return {};
          let t = { ...this.c };
          return (
            e.includeConfig &&
              ((t.outputCalendar = this.outputCalendar),
              (t.numberingSystem = this.loc.numberingSystem),
              (t.locale = this.loc.locale)),
            t
          );
        }
        toJSDate() {
          return new Date(this.isValid ? this.ts : NaN);
        }
        diff(e, t = `milliseconds`, n = {}) {
          if (!this.isValid || !e.isValid)
            return z.invalid(`created by diffing an invalid DateTime`);
          let r = { locale: this.locale, numberingSystem: this.numberingSystem, ...n },
            i = xr(t).map(z.normalizeUnit),
            a = e.valueOf() > this.valueOf(),
            o = La(a ? this : e, a ? e : this, i, r);
          return a ? o.negate() : o;
        }
        diffNow(t = `milliseconds`, n = {}) {
          return this.diff(e.now(), t, n);
        }
        until(e) {
          return this.isValid ? ja.fromDateTimes(this, e) : this;
        }
        hasSame(e, t, n) {
          if (!this.isValid) return !1;
          let r = e.valueOf(),
            i = this.setZone(e.zone, { keepLocalTime: !0 });
          return i.startOf(t, n) <= r && r <= i.endOf(t, n);
        }
        equals(e) {
          return (
            this.isValid &&
            e.isValid &&
            this.valueOf() === e.valueOf() &&
            this.zone.equals(e.zone) &&
            this.loc.equals(e.loc)
          );
        }
        toRelative(t = {}) {
          if (!this.isValid) return null;
          let n = t.base || e.fromObject({}, { zone: this.zone }),
            r = t.padding ? (this < n ? -t.padding : t.padding) : 0,
            i = [`years`, `months`, `days`, `hours`, `minutes`, `seconds`],
            a = t.unit;
          return (
            Array.isArray(t.unit) && ((i = t.unit), (a = void 0)),
            Eo(n, this.plus(r), { ...t, numeric: `always`, units: i, unit: a })
          );
        }
        toRelativeCalendar(t = {}) {
          return this.isValid
            ? Eo(t.base || e.fromObject({}, { zone: this.zone }), this, {
                ...t,
                numeric: `auto`,
                units: [`years`, `months`, `days`],
                calendary: !0,
              })
            : null;
        }
        static min(...t) {
          if (!t.every(e.isDateTime)) throw new N(`min requires all arguments be DateTimes`);
          return Sr(t, (e) => e.valueOf(), Math.min);
        }
        static max(...t) {
          if (!t.every(e.isDateTime)) throw new N(`max requires all arguments be DateTimes`);
          return Sr(t, (e) => e.valueOf(), Math.max);
        }
        static fromFormatExplain(e, t, n = {}) {
          let { locale: r = null, numberingSystem: i = null } = n;
          return $a(F.fromOpts({ locale: r, numberingSystem: i, defaultToEN: !0 }), e, t);
        }
        static fromStringExplain(t, n, r = {}) {
          return e.fromFormatExplain(t, n, r);
        }
        static buildFormatParser(e, t = {}) {
          let { locale: n = null, numberingSystem: r = null } = t;
          return new so(F.fromOpts({ locale: n, numberingSystem: r, defaultToEN: !0 }), e);
        }
        static fromFormatParser(t, n, r = {}) {
          if (L(t) || L(n))
            throw new N(`fromFormatParser requires an input string and a format parser`);
          let { locale: i = null, numberingSystem: a = null } = r,
            o = F.fromOpts({ locale: i, numberingSystem: a, defaultToEN: !0 });
          if (!o.equals(n.locale))
            throw new N(
              `fromFormatParser called with a locale of ${o}, but the format parser was created for ${n.locale}`,
            );
          let { result: s, zone: c, specificOffset: l, invalidReason: u } = n.explainFromTokens(t);
          return u ? e.invalid(u) : vo(s, c, r, `format ${n.format}`, t, l);
        }
        static get DATE_SHORT() {
          return vt;
        }
        static get DATE_MED() {
          return yt;
        }
        static get DATE_MED_WITH_WEEKDAY() {
          return bt;
        }
        static get DATE_FULL() {
          return xt;
        }
        static get DATE_HUGE() {
          return St;
        }
        static get TIME_SIMPLE() {
          return Ct;
        }
        static get TIME_WITH_SECONDS() {
          return wt;
        }
        static get TIME_WITH_SHORT_OFFSET() {
          return Tt;
        }
        static get TIME_WITH_LONG_OFFSET() {
          return Et;
        }
        static get TIME_24_SIMPLE() {
          return Dt;
        }
        static get TIME_24_WITH_SECONDS() {
          return Ot;
        }
        static get TIME_24_WITH_SHORT_OFFSET() {
          return kt;
        }
        static get TIME_24_WITH_LONG_OFFSET() {
          return At;
        }
        static get DATETIME_SHORT() {
          return jt;
        }
        static get DATETIME_SHORT_WITH_SECONDS() {
          return Mt;
        }
        static get DATETIME_MED() {
          return Nt;
        }
        static get DATETIME_MED_WITH_SECONDS() {
          return Pt;
        }
        static get DATETIME_MED_WITH_WEEKDAY() {
          return Ft;
        }
        static get DATETIME_FULL() {
          return It;
        }
        static get DATETIME_FULL_WITH_SECONDS() {
          return Lt;
        }
        static get DATETIME_HUGE() {
          return Rt;
        }
        static get DATETIME_HUGE_WITH_SECONDS() {
          return zt;
        }
      }));
  }),
  Bo = e(() => {
    (zo(), Ma());
  });
function Vo(e) {
  let t = (0, Ho.useRef)(e);
  return ((t.current = e), t);
}
var Ho,
  Uo = e(() => {
    Ho = t(i());
  }),
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo = e(() => {
    (Bo(),
      (Wo = (e) => {
        let t = e.startOf(`month`),
          n = t.daysInMonth ?? 31,
          r = [];
        for (let e = 0; e < n; e++) {
          let n = t.plus({ days: e }).startOf(`day`);
          r.push(n);
        }
        return r;
      }),
      (Go = (e, t) => e.toMillis() < t?.toMillis()),
      (Ko = (e, t) => e.hasSame(t, `day`)),
      (qo = (e) => Ko(e, V.local())),
      (Jo = (e, t = 7) => {
        let n = [];
        for (let r = 0; r < e.length; r += t) n.push(e.slice(r, r + t));
        return n;
      }),
      (Yo = (e) => (e ? (V.isDateTime(e) ? e : V.fromJSDate(e)) : null)));
  });
function Zo(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
function Qo(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = Zo(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : Zo(e[t], null);
        }
      };
  };
}
function $o(...e) {
  return es.useCallback(Qo(...e), e);
}
var es,
  ts = e(() => {
    es = t(i(), 1);
  });
function ns(e) {
  let t = rs(e),
    n = H.forwardRef((e, n) => {
      let { children: r, ...i } = e,
        a = H.Children.toArray(r),
        o = a.find(as);
      if (o) {
        let e = o.props.children,
          r = a.map((t) =>
            t === o
              ? H.Children.count(e) > 1
                ? H.Children.only(null)
                : H.isValidElement(e)
                  ? e.props.children
                  : null
              : t,
          );
        return (0, cs.jsx)(t, {
          ...i,
          ref: n,
          children: H.isValidElement(e) ? H.cloneElement(e, void 0, r) : null,
        });
      }
      return (0, cs.jsx)(t, { ...i, ref: n, children: r });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function rs(e) {
  let t = H.forwardRef((e, t) => {
    let { children: n, ...r } = e;
    if (H.isValidElement(n)) {
      let e = ss(n),
        i = os(r, n.props);
      return (n.type !== H.Fragment && (i.ref = t ? Qo(t, e) : e), H.cloneElement(n, i));
    }
    return H.Children.count(n) > 1 ? H.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
function is(e) {
  let t = ({ children: e }) => (0, cs.jsx)(cs.Fragment, { children: e });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = us), t);
}
function as(e) {
  return (
    H.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === us
  );
}
function os(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
function ss(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var H,
  cs,
  ls,
  us,
  ds = e(() => {
    ((H = t(i(), 1)), ts(), (cs = A()), (ls = ns(`Slot`)), (us = Symbol(`radix.slottable`)));
  });
function fs(e, t) {
  e && ms.flushSync(() => e.dispatchEvent(t));
}
var ps,
  ms,
  hs,
  gs,
  _s = e(() => {
    ((ps = t(i(), 1)),
      (ms = t(we(), 1)),
      ds(),
      (hs = A()),
      (gs = [
        `a`,
        `button`,
        `div`,
        `form`,
        `h2`,
        `h3`,
        `img`,
        `input`,
        `label`,
        `li`,
        `nav`,
        `ol`,
        `p`,
        `select`,
        `span`,
        `svg`,
        `ul`,
      ].reduce((e, t) => {
        let n = ns(`Primitive.${t}`),
          r = ps.forwardRef((e, r) => {
            let { asChild: i, ...a } = e,
              o = i ? n : t;
            return (
              typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0),
              (0, hs.jsx)(o, { ...a, ref: r })
            );
          });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
      }, {})));
  }),
  vs,
  ys,
  bs,
  xs,
  Ss,
  Cs,
  ws = e(() => {
    ((vs = t(i(), 1)),
      _s(),
      (ys = A()),
      (bs = Object.freeze({
        position: `absolute`,
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`,
      })),
      (xs = `VisuallyHidden`),
      (Ss = vs.forwardRef((e, t) =>
        (0, ys.jsx)(gs.span, { ...e, ref: t, style: { ...bs, ...e.style } }),
      )),
      (Ss.displayName = xs),
      (Cs = Ss));
  });
function Ts(e, t = []) {
  let n = [];
  function r(t, r) {
    let i = Ds.createContext(r),
      a = n.length;
    n = [...n, r];
    let o = (t) => {
      let { scope: n, children: r, ...o } = t,
        s = n?.[e]?.[a] || i,
        c = Ds.useMemo(() => o, Object.values(o));
      return (0, Os.jsx)(s.Provider, { value: c, children: r });
    };
    o.displayName = t + `Provider`;
    function s(n, o) {
      let s = o?.[e]?.[a] || i,
        c = Ds.useContext(s);
      if (c) return c;
      if (r !== void 0) return r;
      throw Error(`\`${n}\` must be used within \`${t}\``);
    }
    return [o, s];
  }
  let i = () => {
    let t = n.map((e) => Ds.createContext(e));
    return function (n) {
      let r = n?.[e] || t;
      return Ds.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: r } }), [n, r]);
    };
  };
  return ((i.scopeName = e), [r, Es(i, ...t)]);
}
function Es(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let n = () => {
    let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
    return function (e) {
      let r = n.reduce((t, { useScope: n, scopeName: r }) => {
        let i = n(e)[`__scope${r}`];
        return { ...t, ...i };
      }, {});
      return Ds.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var Ds,
  Os,
  ks = e(() => {
    ((Ds = t(i(), 1)), (Os = A()));
  }),
  As,
  js,
  Ms = e(() => {
    ((As = t(i(), 1)), (js = globalThis?.document ? As.useLayoutEffect : () => {}));
  });
function Ns({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  let [i, a, o] = Ps({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    c = s ? e : i;
  {
    let t = Is.useRef(e !== void 0);
    Is.useEffect(() => {
      let e = t.current;
      (e !== s &&
        console.warn(
          `${r} is changing from ${e ? `controlled` : `uncontrolled`} to ${s ? `controlled` : `uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (t.current = s));
    }, [s, r]);
  }
  return [
    c,
    Is.useCallback(
      (t) => {
        if (s) {
          let n = Fs(t) ? t(e) : t;
          n !== e && o.current?.(n);
        } else a(t);
      },
      [s, e, a, o],
    ),
  ];
}
function Ps({ defaultProp: e, onChange: t }) {
  let [n, r] = Is.useState(e),
    i = Is.useRef(n),
    a = Is.useRef(t);
  return (
    Ls(() => {
      a.current = t;
    }, [t]),
    Is.useEffect(() => {
      i.current !== n && (a.current?.(n), (i.current = n));
    }, [n, i]),
    [n, r, a]
  );
}
function Fs(e) {
  return typeof e == `function`;
}
var Is,
  Ls,
  Rs = e(() => {
    ((Is = t(i(), 1)), Ms(), i(), (Ls = Is.useInsertionEffect || js));
  });
function zs(e, t) {
  return Ws.useReducer((e, n) => t[e][n] ?? e, e);
}
function Bs(e) {
  let [t, n] = Us.useState(),
    r = Us.useRef(null),
    i = Us.useRef(e),
    a = Us.useRef(`none`),
    [o, s] = zs(e ? `mounted` : `unmounted`, {
      mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` },
      unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` },
      unmounted: { MOUNT: `mounted` },
    });
  return (
    Us.useEffect(() => {
      let e = Vs(r.current);
      a.current = o === `mounted` ? e : `none`;
    }, [o]),
    js(() => {
      let t = r.current,
        n = i.current;
      if (n !== e) {
        let r = a.current,
          o = Vs(t);
        (e
          ? s(`MOUNT`)
          : o === `none` || t?.display === `none`
            ? s(`UNMOUNT`)
            : s(n && r !== o ? `ANIMATION_OUT` : `UNMOUNT`),
          (i.current = e));
      }
    }, [e, s]),
    js(() => {
      if (t) {
        let e,
          n = t.ownerDocument.defaultView ?? window,
          o = (a) => {
            let o = Vs(r.current).includes(CSS.escape(a.animationName));
            if (a.target === t && o && (s(`ANIMATION_END`), !i.current)) {
              let r = t.style.animationFillMode;
              ((t.style.animationFillMode = `forwards`),
                (e = n.setTimeout(() => {
                  t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r);
                })));
            }
          },
          c = (e) => {
            e.target === t && (a.current = Vs(r.current));
          };
        return (
          t.addEventListener(`animationstart`, c),
          t.addEventListener(`animationcancel`, o),
          t.addEventListener(`animationend`, o),
          () => {
            (n.clearTimeout(e),
              t.removeEventListener(`animationstart`, c),
              t.removeEventListener(`animationcancel`, o),
              t.removeEventListener(`animationend`, o));
          }
        );
      } else s(`ANIMATION_END`);
    }, [t, s]),
    {
      isPresent: [`mounted`, `unmountSuspended`].includes(o),
      ref: Us.useCallback((e) => {
        ((r.current = e ? getComputedStyle(e) : null), n(e));
      }, []),
    }
  );
}
function Vs(e) {
  return e?.animationName || `none`;
}
function Hs(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Us,
  Ws,
  Gs,
  Ks = e(() => {
    ((Us = t(i(), 1)),
      ts(),
      Ms(),
      (Ws = t(i(), 1)),
      (Gs = (e) => {
        let { present: t, children: n } = e,
          r = Bs(t),
          i = typeof n == `function` ? n({ present: r.isPresent }) : Us.Children.only(n),
          a = $o(r.ref, Hs(i));
        return typeof n == `function` || r.isPresent ? Us.cloneElement(i, { ref: a }) : null;
      }),
      (Gs.displayName = `Presence`));
  });
function qs(e) {
  let [t, n] = Js.useState(Ys());
  return (
    js(() => {
      e || n((e) => e ?? String(Xs++));
    }, [e]),
    e || (t ? `radix-${t}` : ``)
  );
}
var Js,
  Ys,
  Xs,
  Zs = e(() => {
    ((Js = t(i(), 1)), Ms(), (Ys = Js.useId || (() => void 0)), (Xs = 0));
  });
function Qs(e) {
  let t = $s.useRef(e);
  return (
    $s.useEffect(() => {
      t.current = e;
    }),
    $s.useMemo(
      () =>
        (...e) =>
          t.current?.(...e),
      [],
    )
  );
}
var $s,
  ec = e(() => {
    $s = t(i(), 1);
  });
function tc(e, t = globalThis?.document) {
  let n = Qs(e);
  nc.useEffect(() => {
    let e = (e) => {
      e.key === `Escape` && n(e);
    };
    return (
      t.addEventListener(`keydown`, e, { capture: !0 }),
      () => t.removeEventListener(`keydown`, e, { capture: !0 })
    );
  }, [n, t]);
}
var nc,
  rc = e(() => {
    ((nc = t(i(), 1)), ec());
  });
function ic(e, t = globalThis?.document) {
  let n = Qs(e),
    r = U.useRef(!1),
    i = U.useRef(() => {});
  return (
    U.useEffect(() => {
      let e = (e) => {
          if (e.target && !r.current) {
            let r = function () {
                sc(dc, n, a, { discrete: !0 });
              },
              a = { originalEvent: e };
            e.pointerType === `touch`
              ? (t.removeEventListener(`click`, i.current),
                (i.current = r),
                t.addEventListener(`click`, i.current, { once: !0 }))
              : r();
          } else t.removeEventListener(`click`, i.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener(`pointerdown`, e);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener(`pointerdown`, e),
          t.removeEventListener(`click`, i.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ac(e, t = globalThis?.document) {
  let n = Qs(e),
    r = U.useRef(!1);
  return (
    U.useEffect(() => {
      let e = (e) => {
        e.target && !r.current && sc(fc, n, { originalEvent: e }, { discrete: !1 });
      };
      return (t.addEventListener(`focusin`, e), () => t.removeEventListener(`focusin`, e));
    }, [t, n]),
    { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
  );
}
function oc() {
  let e = new CustomEvent(uc);
  document.dispatchEvent(e);
}
function sc(e, t, n, { discrete: r }) {
  let i = n.originalEvent.target,
    a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && i.addEventListener(e, t, { once: !0 }), r ? fs(i, a) : i.dispatchEvent(a));
}
var U,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc = e(() => {
    ((U = t(i(), 1)),
      me(),
      _s(),
      ts(),
      ec(),
      rc(),
      (cc = A()),
      (lc = `DismissableLayer`),
      (uc = `dismissableLayer.update`),
      (dc = `dismissableLayer.pointerDownOutside`),
      (fc = `dismissableLayer.focusOutside`),
      (mc = U.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      })),
      (hc = U.forwardRef((e, t) => {
        let {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: i,
            onFocusOutside: a,
            onInteractOutside: o,
            onDismiss: s,
            ...c
          } = e,
          l = U.useContext(mc),
          [u, d] = U.useState(null),
          f = u?.ownerDocument ?? globalThis?.document,
          [, p] = U.useState({}),
          m = $o(t, (e) => d(e)),
          h = Array.from(l.layers),
          [g] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1),
          _ = h.indexOf(g),
          v = u ? h.indexOf(u) : -1,
          y = l.layersWithOutsidePointerEventsDisabled.size > 0,
          b = v >= _,
          x = ic((e) => {
            let t = e.target,
              n = [...l.branches].some((e) => e.contains(t));
            !b || n || (i?.(e), o?.(e), e.defaultPrevented || s?.());
          }, f),
          S = ac((e) => {
            let t = e.target;
            [...l.branches].some((e) => e.contains(t)) ||
              (a?.(e), o?.(e), e.defaultPrevented || s?.());
          }, f);
        return (
          tc((e) => {
            v === l.layers.size - 1 &&
              (r?.(e), !e.defaultPrevented && s && (e.preventDefault(), s()));
          }, f),
          U.useEffect(() => {
            if (u)
              return (
                n &&
                  (l.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    ((pc = f.body.style.pointerEvents), (f.body.style.pointerEvents = `none`)),
                  l.layersWithOutsidePointerEventsDisabled.add(u)),
                l.layers.add(u),
                oc(),
                () => {
                  n &&
                    l.layersWithOutsidePointerEventsDisabled.size === 1 &&
                    (f.body.style.pointerEvents = pc);
                }
              );
          }, [u, f, n, l]),
          U.useEffect(
            () => () => {
              u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), oc());
            },
            [u, l],
          ),
          U.useEffect(() => {
            let e = () => p({});
            return (document.addEventListener(uc, e), () => document.removeEventListener(uc, e));
          }, []),
          (0, cc.jsx)(gs.div, {
            ...c,
            ref: m,
            style: { pointerEvents: y ? (b ? `auto` : `none`) : void 0, ...e.style },
            onFocusCapture: j(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: j(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: j(e.onPointerDownCapture, x.onPointerDownCapture),
          })
        );
      })),
      (hc.displayName = lc),
      (gc = `DismissableLayerBranch`),
      (_c = U.forwardRef((e, t) => {
        let n = U.useContext(mc),
          r = U.useRef(null),
          i = $o(t, r);
        return (
          U.useEffect(() => {
            let e = r.current;
            if (e)
              return (
                n.branches.add(e),
                () => {
                  n.branches.delete(e);
                }
              );
          }, [n.branches]),
          (0, cc.jsx)(gs.div, { ...e, ref: i })
        );
      })),
      (_c.displayName = gc));
  });
function yc(e, { select: t = !1 } = {}) {
  let n = document.activeElement;
  for (let r of e) if ((Tc(r, { select: t }), document.activeElement !== n)) return;
}
function bc(e) {
  let t = xc(e);
  return [Sc(t, e), Sc(t.reverse(), e)];
}
function xc(e) {
  let t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (e) => {
        let t = e.tagName === `INPUT` && e.type === `hidden`;
        return e.disabled || e.hidden || t
          ? NodeFilter.FILTER_SKIP
          : e.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Sc(e, t) {
  for (let n of e) if (!Cc(n, { upTo: t })) return n;
}
function Cc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === `hidden`) return !0;
  for (; e;) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === `none`) return !0;
    e = e.parentElement;
  }
  return !1;
}
function wc(e) {
  return e instanceof HTMLInputElement && `select` in e;
}
function Tc(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && wc(e) && t && e.select());
  }
}
function Ec() {
  let e = [];
  return {
    add(t) {
      let n = e[0];
      (t !== n && n?.pause(), (e = Dc(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = Dc(e, t)), e[0]?.resume());
    },
  };
}
function Dc(e, t) {
  let n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function Oc(e) {
  return e.filter((e) => e.tagName !== `A`);
}
var kc,
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc = e(() => {
    ((kc = t(i(), 1)),
      ts(),
      _s(),
      ec(),
      (Ac = A()),
      (jc = `focusScope.autoFocusOnMount`),
      (Mc = `focusScope.autoFocusOnUnmount`),
      (Nc = { bubbles: !1, cancelable: !0 }),
      (Pc = `FocusScope`),
      (Fc = kc.forwardRef((e, t) => {
        let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: a, ...o } = e,
          [s, c] = kc.useState(null),
          l = Qs(i),
          u = Qs(a),
          d = kc.useRef(null),
          f = $o(t, (e) => c(e)),
          p = kc.useRef({
            paused: !1,
            pause() {
              this.paused = !0;
            },
            resume() {
              this.paused = !1;
            },
          }).current;
        (kc.useEffect(() => {
          if (r) {
            let e = function (e) {
                if (p.paused || !s) return;
                let t = e.target;
                s.contains(t) ? (d.current = t) : Tc(d.current, { select: !0 });
              },
              t = function (e) {
                if (p.paused || !s) return;
                let t = e.relatedTarget;
                t !== null && (s.contains(t) || Tc(d.current, { select: !0 }));
              },
              n = function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && Tc(s);
              };
            (document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, t));
            let r = new MutationObserver(n);
            return (
              s && r.observe(s, { childList: !0, subtree: !0 }),
              () => {
                (document.removeEventListener(`focusin`, e),
                  document.removeEventListener(`focusout`, t),
                  r.disconnect());
              }
            );
          }
        }, [r, s, p.paused]),
          kc.useEffect(() => {
            if (s) {
              Ic.add(p);
              let e = document.activeElement;
              if (!s.contains(e)) {
                let t = new CustomEvent(jc, Nc);
                (s.addEventListener(jc, l),
                  s.dispatchEvent(t),
                  t.defaultPrevented ||
                    (yc(Oc(xc(s)), { select: !0 }), document.activeElement === e && Tc(s)));
              }
              return () => {
                (s.removeEventListener(jc, l),
                  setTimeout(() => {
                    let t = new CustomEvent(Mc, Nc);
                    (s.addEventListener(Mc, u),
                      s.dispatchEvent(t),
                      t.defaultPrevented || Tc(e ?? document.body, { select: !0 }),
                      s.removeEventListener(Mc, u),
                      Ic.remove(p));
                  }, 0));
              };
            }
          }, [s, l, u, p]));
        let m = kc.useCallback(
          (e) => {
            if ((!n && !r) || p.paused) return;
            let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
              i = document.activeElement;
            if (t && i) {
              let t = e.currentTarget,
                [r, a] = bc(t);
              r && a
                ? !e.shiftKey && i === a
                  ? (e.preventDefault(), n && Tc(r, { select: !0 }))
                  : e.shiftKey && i === r && (e.preventDefault(), n && Tc(a, { select: !0 }))
                : i === t && e.preventDefault();
            }
          },
          [n, r, p.paused],
        );
        return (0, Ac.jsx)(gs.div, { tabIndex: -1, ...o, ref: f, onKeyDown: m });
      })),
      (Fc.displayName = Pc),
      (Ic = Ec()));
  }),
  Rc,
  zc,
  Bc,
  Vc,
  Hc,
  Uc = e(() => {
    ((Rc = t(i(), 1)),
      (zc = t(we(), 1)),
      _s(),
      Ms(),
      (Bc = A()),
      (Vc = `Portal`),
      (Hc = Rc.forwardRef((e, t) => {
        let { container: n, ...r } = e,
          [i, a] = Rc.useState(!1);
        js(() => a(!0), []);
        let o = n || (i && globalThis?.document?.body);
        return o ? zc.createPortal((0, Bc.jsx)(gs.div, { ...r, ref: t }), o) : null;
      })),
      (Hc.displayName = Vc));
  });
function Wc() {
  Kc.useEffect(() => {
    let e = document.querySelectorAll(`[data-radix-focus-guard]`);
    return (
      document.body.insertAdjacentElement(`afterbegin`, e[0] ?? Gc()),
      document.body.insertAdjacentElement(`beforeend`, e[1] ?? Gc()),
      qc++,
      () => {
        (qc === 1 &&
          document.querySelectorAll(`[data-radix-focus-guard]`).forEach((e) => e.remove()),
          qc--);
      }
    );
  }, []);
}
function Gc() {
  let e = document.createElement(`span`);
  return (
    e.setAttribute(`data-radix-focus-guard`, ``),
    (e.tabIndex = 0),
    (e.style.outline = `none`),
    (e.style.opacity = `0`),
    (e.style.position = `fixed`),
    (e.style.pointerEvents = `none`),
    e
  );
}
var Kc,
  qc,
  Jc = e(() => {
    ((Kc = t(i(), 1)), (qc = 0));
  }),
  Yc,
  Xc,
  Zc,
  Qc,
  $c = e(() => {
    ((Yc = `right-scroll-bar-position`),
      (Xc = `width-before-scroll-bar`),
      (Zc = `with-scroll-bars-hidden`),
      (Qc = `--removed-body-scroll-bar-size`));
  });
function el(e, t) {
  return (typeof e == `function` ? e(t) : e && (e.current = t), e);
}
var tl = e(() => {});
function nl(e, t) {
  var n = (0, rl.useState)(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(e) {
          var t = n.value;
          t !== e && ((n.value = e), n.callback(e, t));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var rl,
  il = e(() => {
    rl = t(i());
  });
function al(e, t) {
  var n = nl(t || null, function (t) {
    return e.forEach(function (e) {
      return el(e, t);
    });
  });
  return (
    sl(
      function () {
        var t = cl.get(n);
        if (t) {
          var r = new Set(t),
            i = new Set(e),
            a = n.current;
          (r.forEach(function (e) {
            i.has(e) || el(e, null);
          }),
            i.forEach(function (e) {
              r.has(e) || el(e, a);
            }));
        }
        cl.set(n, e);
      },
      [e],
    ),
    n
  );
}
var ol,
  sl,
  cl,
  ll = e(() => {
    ((ol = t(i())),
      tl(),
      il(),
      (sl = typeof window < `u` ? ol.useLayoutEffect : ol.useEffect),
      (cl = new WeakMap()));
  }),
  ul = e(() => {
    (il(), ll());
  });
function dl(e) {
  return e;
}
function fl(e, t) {
  t === void 0 && (t = dl);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r)
        throw Error(
          "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
        );
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (e) {
      var i = t(e, r);
      return (
        n.push(i),
        function () {
          n = n.filter(function (e) {
            return e !== i;
          });
        }
      );
    },
    assignSyncMedium: function (e) {
      for (r = !0; n.length;) {
        var t = n;
        ((n = []), t.forEach(e));
      }
      n = {
        push: function (t) {
          return e(t);
        },
        filter: function () {
          return n;
        },
      };
    },
    assignMedium: function (e) {
      r = !0;
      var t = [];
      if (n.length) {
        var i = n;
        ((n = []), i.forEach(e), (t = n));
      }
      var a = function () {
          var n = t;
          ((t = []), n.forEach(e));
        },
        o = function () {
          return Promise.resolve().then(a);
        };
      (o(),
        (n = {
          push: function (e) {
            (t.push(e), o());
          },
          filter: function (e) {
            return ((t = t.filter(e)), n);
          },
        }));
    },
  };
}
function pl(e) {
  e === void 0 && (e = {});
  var t = fl(null);
  return ((t.options = _e({ async: !0, ssr: !1 }, e)), t);
}
var ml = e(() => {
  b();
});
function hl(e, t) {
  return (e.useMedium(t), _l);
}
var gl,
  _l,
  vl = e(() => {
    (b(),
      (gl = t(i())),
      (_l = function (e) {
        var t = e.sideCar,
          n = d(e, [`sideCar`]);
        if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
        var r = t.read();
        if (!r) throw Error(`Sidecar medium not found`);
        return gl.createElement(r, _e({}, n));
      }),
      (_l.isSideCarExport = !0));
  }),
  yl = e(() => {
    (ml(), vl());
  }),
  bl,
  xl = e(() => {
    (yl(), (bl = pl()));
  }),
  Sl,
  Cl,
  wl,
  Tl = e(() => {
    (b(),
      (Sl = t(i())),
      $c(),
      ul(),
      xl(),
      (Cl = function () {}),
      (wl = Sl.forwardRef(function (e, t) {
        var n = Sl.useRef(null),
          r = Sl.useState({ onScrollCapture: Cl, onWheelCapture: Cl, onTouchMoveCapture: Cl }),
          i = r[0],
          a = r[1],
          o = e.forwardProps,
          s = e.children,
          c = e.className,
          l = e.removeScrollBar,
          u = e.enabled,
          f = e.shards,
          p = e.sideCar,
          m = e.noRelative,
          h = e.noIsolation,
          g = e.inert,
          _ = e.allowPinchZoom,
          v = e.as,
          y = v === void 0 ? `div` : v,
          b = e.gapMode,
          x = d(e, [
            `forwardProps`,
            `children`,
            `className`,
            `removeScrollBar`,
            `enabled`,
            `shards`,
            `sideCar`,
            `noRelative`,
            `noIsolation`,
            `inert`,
            `allowPinchZoom`,
            `as`,
            `gapMode`,
          ]),
          S = p,
          C = al([n, t]),
          w = _e(_e({}, x), i);
        return Sl.createElement(
          Sl.Fragment,
          null,
          u &&
            Sl.createElement(S, {
              sideCar: bl,
              removeScrollBar: l,
              shards: f,
              noRelative: m,
              noIsolation: h,
              inert: g,
              setCallbacks: a,
              allowPinchZoom: !!_,
              lockRef: n,
              gapMode: b,
            }),
          o
            ? Sl.cloneElement(Sl.Children.only(s), _e(_e({}, w), { ref: C }))
            : Sl.createElement(y, _e({}, w, { className: c, ref: C }), s),
        );
      })),
      (wl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (wl.classNames = { fullWidth: Xc, zeroRight: Yc }));
  });
function El() {
  if (!document) return null;
  var e = document.createElement(`style`);
  e.type = `text/css`;
  var t = Se();
  return (t && e.setAttribute(`nonce`, t), e);
}
function Dl(e, t) {
  e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function Ol(e) {
  (document.head || document.getElementsByTagName(`head`)[0]).appendChild(e);
}
var kl,
  Al = e(() => {
    (he(),
      (kl = function () {
        var e = 0,
          t = null;
        return {
          add: function (n) {
            (e == 0 && (t = El()) && (Dl(t, n), Ol(t)), e++);
          },
          remove: function () {
            (e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
          },
        };
      }));
  }),
  jl,
  Ml,
  Nl = e(() => {
    ((jl = t(i())),
      Al(),
      (Ml = function () {
        var e = kl();
        return function (t, n) {
          jl.useEffect(
            function () {
              return (
                e.add(t),
                function () {
                  e.remove();
                }
              );
            },
            [t && n],
          );
        };
      }));
  }),
  Pl,
  Fl = e(() => {
    (Nl(),
      (Pl = function () {
        var e = Ml();
        return function (t) {
          var n = t.styles,
            r = t.dynamic;
          return (e(n, r), null);
        };
      }));
  }),
  Il = e(() => {
    (Fl(), Al(), Nl());
  }),
  Ll,
  Rl,
  zl,
  Bl,
  Vl = e(() => {
    ((Ll = { left: 0, top: 0, right: 0, gap: 0 }),
      (Rl = function (e) {
        return parseInt(e || ``, 10) || 0;
      }),
      (zl = function (e) {
        var t = window.getComputedStyle(document.body),
          n = t[e === `padding` ? `paddingLeft` : `marginLeft`],
          r = t[e === `padding` ? `paddingTop` : `marginTop`],
          i = t[e === `padding` ? `paddingRight` : `marginRight`];
        return [Rl(n), Rl(r), Rl(i)];
      }),
      (Bl = function (e) {
        if ((e === void 0 && (e = `margin`), typeof window > `u`)) return Ll;
        var t = zl(e),
          n = document.documentElement.clientWidth,
          r = window.innerWidth;
        return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
      }));
  }),
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl = e(() => {
    ((Hl = t(i())),
      Il(),
      $c(),
      Vl(),
      (Ul = Pl()),
      (Wl = `data-scroll-locked`),
      (Gl = function (e, t, n, r) {
        var i = e.left,
          a = e.top,
          o = e.right,
          s = e.gap;
        return (
          n === void 0 && (n = `margin`),
          `
  .${Zc} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Wl}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
      t && `position: relative ${r};`,
      n === `margin` &&
        `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
      n === `padding` && `padding-right: ${s}px ${r};`,
    ]
      .filter(Boolean)
      .join(``)}
  }
  
  .${Yc} {
    right: ${s}px ${r};
  }
  
  .${Xc} {
    margin-right: ${s}px ${r};
  }
  
  .${Yc} .${Yc} {
    right: 0 ${r};
  }
  
  .${Xc} .${Xc} {
    margin-right: 0 ${r};
  }
  
  body[${Wl}] {
    ${Qc}: ${s}px;
  }
`
        );
      }),
      (Kl = function () {
        var e = parseInt(document.body.getAttribute(`data-scroll-locked`) || `0`, 10);
        return isFinite(e) ? e : 0;
      }),
      (ql = function () {
        Hl.useEffect(function () {
          return (
            document.body.setAttribute(Wl, (Kl() + 1).toString()),
            function () {
              var e = Kl() - 1;
              e <= 0
                ? document.body.removeAttribute(Wl)
                : document.body.setAttribute(Wl, e.toString());
            }
          );
        }, []);
      }),
      (Jl = function (e) {
        var t = e.noRelative,
          n = e.noImportant,
          r = e.gapMode,
          i = r === void 0 ? `margin` : r;
        ql();
        var a = Hl.useMemo(
          function () {
            return Bl(i);
          },
          [i],
        );
        return Hl.createElement(Ul, { styles: Gl(a, !t, i, n ? `` : `!important`) });
      }));
  }),
  Xl = e(() => {
    Yl();
  }),
  Zl,
  Ql,
  $l,
  eu = e(() => {
    if (((Zl = !1), typeof window < `u`))
      try {
        ((Ql = Object.defineProperty({}, "passive", {
          get: function () {
            return ((Zl = !0), !0);
          },
        })),
          window.addEventListener(`test`, Ql, Ql),
          window.removeEventListener(`test`, Ql, Ql));
      } catch {
        Zl = !1;
      }
    $l = Zl ? { passive: !1 } : !1;
  }),
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu = e(() => {
    ((tu = function (e) {
      return e.tagName === `TEXTAREA`;
    }),
      (nu = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== `hidden` && !(n.overflowY === n.overflowX && !tu(e) && n[t] === `visible`);
      }),
      (ru = function (e) {
        return nu(e, `overflowY`);
      }),
      (iu = function (e) {
        return nu(e, `overflowX`);
      }),
      (au = function (e, t) {
        var n = t.ownerDocument,
          r = t;
        do {
          if ((typeof ShadowRoot < `u` && r instanceof ShadowRoot && (r = r.host), cu(e, r))) {
            var i = lu(e, r);
            if (i[1] > i[2]) return !0;
          }
          r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
      }),
      (ou = function (e) {
        return [e.scrollTop, e.scrollHeight, e.clientHeight];
      }),
      (su = function (e) {
        return [e.scrollLeft, e.scrollWidth, e.clientWidth];
      }),
      (cu = function (e, t) {
        return e === `v` ? ru(t) : iu(t);
      }),
      (lu = function (e, t) {
        return e === `v` ? ou(t) : su(t);
      }),
      (uu = function (e, t) {
        return e === `h` && t === `rtl` ? -1 : 1;
      }),
      (du = function (e, t, n, r, i) {
        var a = uu(e, window.getComputedStyle(t).direction),
          o = a * r,
          s = n.target,
          c = t.contains(s),
          l = !1,
          u = o > 0,
          d = 0,
          f = 0;
        do {
          if (!s) break;
          var p = lu(e, s),
            m = p[0],
            h = p[1] - p[2] - a * m;
          (m || h) && cu(e, s) && ((d += h), (f += m));
          var g = s.parentNode;
          s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
        } while ((!c && s !== document.body) || (c && (t.contains(s) || t === s)));
        return (
          ((u && ((i && Math.abs(d) < 1) || (!i && o > d))) ||
            (!u && ((i && Math.abs(f) < 1) || (!i && -o > f)))) &&
            (l = !0),
          l
        );
      }));
  });
function pu(e) {
  var t = W.useRef([]),
    n = W.useRef([0, 0]),
    r = W.useRef(),
    i = W.useState(bu++)[0],
    a = W.useState(Pl)[0],
    o = W.useRef(e);
  (W.useEffect(
    function () {
      o.current = e;
    },
    [e],
  ),
    W.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add(`block-interactivity-${i}`);
          var t = m([e.lockRef.current], (e.shards || []).map(_u), !0).filter(Boolean);
          return (
            t.forEach(function (e) {
              return e.classList.add(`allow-interactivity-${i}`);
            }),
            function () {
              (document.body.classList.remove(`block-interactivity-${i}`),
                t.forEach(function (e) {
                  return e.classList.remove(`allow-interactivity-${i}`);
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var s = W.useCallback(function (e, t) {
      if ((`touches` in e && e.touches.length === 2) || (e.type === `wheel` && e.ctrlKey))
        return !o.current.allowPinchZoom;
      var i = hu(e),
        a = n.current,
        s = `deltaX` in e ? e.deltaX : a[0] - i[0],
        c = `deltaY` in e ? e.deltaY : a[1] - i[1],
        l,
        u = e.target,
        d = Math.abs(s) > Math.abs(c) ? `h` : `v`;
      if (`touches` in e && d === `h` && u.type === `range`) return !1;
      var f = au(d, u);
      if (!f) return !0;
      if ((f ? (l = d) : ((l = d === `v` ? `h` : `v`), (f = au(d, u))), !f)) return !1;
      if ((!r.current && `changedTouches` in e && (s || c) && (r.current = l), !l)) return !0;
      var p = r.current || l;
      return du(p, t, e, p === `h` ? s : c, !0);
    }, []),
    c = W.useCallback(function (e) {
      var n = e;
      if (!(!xu.length || xu[xu.length - 1] !== a)) {
        var r = `deltaY` in n ? gu(n) : hu(n),
          i = t.current.filter(function (e) {
            return (
              e.name === n.type &&
              (e.target === n.target || n.target === e.shadowParent) &&
              vu(e.delta, r)
            );
          })[0];
        if (i && i.should) {
          n.cancelable && n.preventDefault();
          return;
        }
        if (!i) {
          var c = (o.current.shards || [])
            .map(_u)
            .filter(Boolean)
            .filter(function (e) {
              return e.contains(n.target);
            });
          (c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) &&
            n.cancelable &&
            n.preventDefault();
        }
      }
    }, []),
    l = W.useCallback(function (e, n, r, i) {
      var a = { name: e, delta: n, target: r, should: i, shadowParent: mu(r) };
      (t.current.push(a),
        setTimeout(function () {
          t.current = t.current.filter(function (e) {
            return e !== a;
          });
        }, 1));
    }, []),
    u = W.useCallback(function (e) {
      ((n.current = hu(e)), (r.current = void 0));
    }, []),
    d = W.useCallback(function (t) {
      l(t.type, gu(t), t.target, s(t, e.lockRef.current));
    }, []),
    f = W.useCallback(function (t) {
      l(t.type, hu(t), t.target, s(t, e.lockRef.current));
    }, []);
  W.useEffect(function () {
    return (
      xu.push(a),
      e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: f }),
      document.addEventListener(`wheel`, c, $l),
      document.addEventListener(`touchmove`, c, $l),
      document.addEventListener(`touchstart`, u, $l),
      function () {
        ((xu = xu.filter(function (e) {
          return e !== a;
        })),
          document.removeEventListener(`wheel`, c, $l),
          document.removeEventListener(`touchmove`, c, $l),
          document.removeEventListener(`touchstart`, u, $l));
      }
    );
  }, []);
  var p = e.removeScrollBar,
    h = e.inert;
  return W.createElement(
    W.Fragment,
    null,
    h ? W.createElement(a, { styles: yu(i) }) : null,
    p ? W.createElement(Jl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null,
  );
}
function mu(e) {
  for (var t = null; e !== null;)
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode));
  return t;
}
var W,
  hu,
  gu,
  _u,
  vu,
  yu,
  bu,
  xu,
  Su = e(() => {
    (b(),
      (W = t(i())),
      Xl(),
      Il(),
      eu(),
      fu(),
      (hu = function (e) {
        return `changedTouches` in e
          ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
          : [0, 0];
      }),
      (gu = function (e) {
        return [e.deltaX, e.deltaY];
      }),
      (_u = function (e) {
        return e && `current` in e ? e.current : e;
      }),
      (vu = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
      }),
      (yu = function (e) {
        return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
      }),
      (bu = 0),
      (xu = []));
  }),
  Cu,
  wu = e(() => {
    (yl(), Su(), xl(), (Cu = hl(bl, pu)));
  }),
  Tu,
  Eu,
  Du = e(() => {
    (b(),
      (Tu = t(i())),
      Tl(),
      wu(),
      (Eu = Tu.forwardRef(function (e, t) {
        return Tu.createElement(wl, _e({}, e, { ref: t, sideCar: Cu }));
      })),
      (Eu.classNames = wl.classNames));
  }),
  Ou = e(() => {
    Du();
  });
function ku(e) {
  let [t, n] = Au.useState(void 0);
  return (
    js(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        let t = new ResizeObserver((t) => {
          if (!Array.isArray(t) || !t.length) return;
          let r = t[0],
            i,
            a;
          if (`borderBoxSize` in r) {
            let e = r.borderBoxSize,
              t = Array.isArray(e) ? e[0] : e;
            ((i = t.inlineSize), (a = t.blockSize));
          } else ((i = e.offsetWidth), (a = e.offsetHeight));
          n({ width: i, height: a });
        });
        return (t.observe(e, { box: `border-box` }), () => t.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Au,
  ju = e(() => {
    ((Au = t(i(), 1)), Ms());
  }),
  Mu,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu = e(() => {
    ((Mu = t(i(), 1)),
      _s(),
      (Nu = A()),
      (Pu = `Arrow`),
      (Fu = Mu.forwardRef((e, t) => {
        let { children: n, width: r = 10, height: i = 5, ...a } = e;
        return (0, Nu.jsx)(gs.svg, {
          ...a,
          ref: t,
          width: r,
          height: i,
          viewBox: `0 0 30 10`,
          preserveAspectRatio: `none`,
          children: e.asChild ? n : (0, Nu.jsx)(`polygon`, { points: `0,0 30,0 15,10` }),
        });
      })),
      (Fu.displayName = Pu),
      (Iu = Fu));
  });
function Ru(e) {
  return e !== null;
}
function zu(e) {
  let [t, n = `center`] = e.split(`-`);
  return [t, n];
}
var Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  rd,
  id,
  ad,
  od,
  sd,
  cd = e(() => {
    ((Bu = t(i(), 1)),
      ve(),
      Lu(),
      ts(),
      ks(),
      _s(),
      ec(),
      Ms(),
      ju(),
      (Vu = A()),
      (Hu = `Popper`),
      ([Uu, Wu] = Ts(Hu)),
      ([Gu, Ku] = Uu(Hu)),
      (qu = (e) => {
        let { __scopePopper: t, children: n } = e,
          [r, i] = Bu.useState(null);
        return (0, Vu.jsx)(Gu, { scope: t, anchor: r, onAnchorChange: i, children: n });
      }),
      (qu.displayName = Hu),
      (Ju = `PopperAnchor`),
      (Yu = Bu.forwardRef((e, t) => {
        let { __scopePopper: n, virtualRef: r, ...i } = e,
          a = Ku(Ju, n),
          o = Bu.useRef(null),
          s = $o(t, o),
          c = Bu.useRef(null);
        return (
          Bu.useEffect(() => {
            let e = c.current;
            ((c.current = r?.current || o.current), e !== c.current && a.onAnchorChange(c.current));
          }),
          r ? null : (0, Vu.jsx)(gs.div, { ...i, ref: s })
        );
      })),
      (Yu.displayName = Ju),
      (Xu = `PopperContent`),
      ([Zu, Qu] = Uu(Xu)),
      ($u = Bu.forwardRef((e, t) => {
        let {
            __scopePopper: n,
            side: r = `bottom`,
            sideOffset: i = 0,
            align: o = `center`,
            alignOffset: s = 0,
            arrowPadding: c = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: p = `partial`,
            hideWhenDetached: m = !1,
            updatePositionStrategy: g = `optimized`,
            onPlaced: _,
            ...v
          } = e,
          y = Ku(Xu, n),
          [b, w] = Bu.useState(null),
          ee = $o(t, (e) => w(e)),
          [E, ne] = Bu.useState(null),
          re = ku(E),
          ie = re?.width ?? 0,
          ae = re?.height ?? 0,
          oe = r + (o === `center` ? `` : `-` + o),
          se = typeof d == `number` ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d },
          ce = Array.isArray(u) ? u : [u],
          D = ce.length > 0,
          le = { padding: se, boundary: ce.filter(Ru), altBoundary: D },
          {
            refs: O,
            floatingStyles: k,
            placement: ue,
            isPositioned: de,
            middlewareData: fe,
          } = h({
            strategy: `fixed`,
            placement: oe,
            whileElementsMounted: (...e) => x(...e, { animationFrame: g === `always` }),
            elements: { reference: y.anchor },
            middleware: [
              C({ mainAxis: i + ae, alignmentAxis: s }),
              l &&
                te({ mainAxis: !0, crossAxis: !1, limiter: p === `partial` ? S() : void 0, ...le }),
              l && xe({ ...le }),
              f({
                ...le,
                apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
                  let { width: i, height: a } = t.reference,
                    o = e.floating.style;
                  (o.setProperty(`--radix-popper-available-width`, `${n}px`),
                    o.setProperty(`--radix-popper-available-height`, `${r}px`),
                    o.setProperty(`--radix-popper-anchor-width`, `${i}px`),
                    o.setProperty(`--radix-popper-anchor-height`, `${a}px`));
                },
              }),
              E && T({ element: E, padding: c }),
              rd({ arrowWidth: ie, arrowHeight: ae }),
              m && a({ strategy: `referenceHidden`, ...le }),
            ],
          }),
          [pe, A] = zu(ue),
          me = Qs(_);
        js(() => {
          de && me?.();
        }, [de, me]);
        let he = fe.arrow?.x,
          ge = fe.arrow?.y,
          _e = fe.arrow?.centerOffset !== 0,
          [ve, ye] = Bu.useState();
        return (
          js(() => {
            b && ye(window.getComputedStyle(b).zIndex);
          }, [b]),
          (0, Vu.jsx)(`div`, {
            ref: O.setFloating,
            "data-radix-popper-content-wrapper": ``,
            style: {
              ...k,
              transform: de ? k.transform : `translate(0, -200%)`,
              minWidth: `max-content`,
              zIndex: ve,
              "--radix-popper-transform-origin": [
                fe.transformOrigin?.x,
                fe.transformOrigin?.y,
              ].join(` `),
              ...(fe.hide?.referenceHidden && { visibility: `hidden`, pointerEvents: `none` }),
            },
            dir: e.dir,
            children: (0, Vu.jsx)(Zu, {
              scope: n,
              placedSide: pe,
              onArrowChange: ne,
              arrowX: he,
              arrowY: ge,
              shouldHideArrow: _e,
              children: (0, Vu.jsx)(gs.div, {
                "data-side": pe,
                "data-align": A,
                ...v,
                ref: ee,
                style: { ...v.style, animation: de ? void 0 : `none` },
              }),
            }),
          })
        );
      })),
      ($u.displayName = Xu),
      (ed = `PopperArrow`),
      (td = { top: `bottom`, right: `left`, bottom: `top`, left: `right` }),
      (nd = Bu.forwardRef(function (e, t) {
        let { __scopePopper: n, ...r } = e,
          i = Qu(ed, n),
          a = td[i.placedSide];
        return (0, Vu.jsx)(`span`, {
          ref: i.onArrowChange,
          style: {
            position: `absolute`,
            left: i.arrowX,
            top: i.arrowY,
            [a]: 0,
            transformOrigin: { top: ``, right: `0 0`, bottom: `center 0`, left: `100% 0` }[
              i.placedSide
            ],
            transform: {
              top: `translateY(100%)`,
              right: `translateY(50%) rotate(90deg) translateX(-50%)`,
              bottom: `rotate(180deg)`,
              left: `translateY(50%) rotate(-90deg) translateX(50%)`,
            }[i.placedSide],
            visibility: i.shouldHideArrow ? `hidden` : void 0,
          },
          children: (0, Vu.jsx)(Iu, { ...r, ref: t, style: { ...r.style, display: `block` } }),
        });
      })),
      (nd.displayName = ed),
      (rd = (e) => ({
        name: `transformOrigin`,
        options: e,
        fn(t) {
          let { placement: n, rects: r, middlewareData: i } = t,
            a = i.arrow?.centerOffset !== 0,
            o = a ? 0 : e.arrowWidth,
            s = a ? 0 : e.arrowHeight,
            [c, l] = zu(n),
            u = { start: `0%`, center: `50%`, end: `100%` }[l],
            d = (i.arrow?.x ?? 0) + o / 2,
            f = (i.arrow?.y ?? 0) + s / 2,
            p = ``,
            m = ``;
          return (
            c === `bottom`
              ? ((p = a ? u : `${d}px`), (m = `${-s}px`))
              : c === `top`
                ? ((p = a ? u : `${d}px`), (m = `${r.floating.height + s}px`))
                : c === `right`
                  ? ((p = `${-s}px`), (m = a ? u : `${f}px`))
                  : c === `left` && ((p = `${r.floating.width + s}px`), (m = a ? u : `${f}px`)),
            { data: { x: p, y: m } }
          );
        },
      })),
      (id = qu),
      (ad = Yu),
      (od = $u),
      (sd = nd));
  });
function ld(e) {
  return e ? `open` : `closed`;
}
var G,
  K,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd = e(() => {
    ((G = t(i(), 1)),
      me(),
      ts(),
      ks(),
      vc(),
      Jc(),
      Lc(),
      Zs(),
      cd(),
      Uc(),
      Ks(),
      _s(),
      ds(),
      Rs(),
      O(),
      Ou(),
      (K = A()),
      (ud = `Popover`),
      ([dd, fd] = Ts(ud, [Wu])),
      (pd = Wu()),
      ([md, hd] = dd(ud)),
      (gd = (e) => {
        let {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            modal: o = !1,
          } = e,
          s = pd(t),
          c = G.useRef(null),
          [l, u] = G.useState(!1),
          [d, f] = Ns({ prop: r, defaultProp: i ?? !1, onChange: a, caller: ud });
        return (0, K.jsx)(id, {
          ...s,
          children: (0, K.jsx)(md, {
            scope: t,
            contentId: qs(),
            triggerRef: c,
            open: d,
            onOpenChange: f,
            onOpenToggle: G.useCallback(() => f((e) => !e), [f]),
            hasCustomAnchor: l,
            onCustomAnchorAdd: G.useCallback(() => u(!0), []),
            onCustomAnchorRemove: G.useCallback(() => u(!1), []),
            modal: o,
            children: n,
          }),
        });
      }),
      (gd.displayName = ud),
      (_d = `PopoverAnchor`),
      (vd = G.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = hd(_d, n),
          a = pd(n),
          { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
        return (
          G.useEffect(() => (o(), () => s()), [o, s]), (0, K.jsx)(ad, { ...a, ...r, ref: t })
        );
      })),
      (vd.displayName = _d),
      (yd = `PopoverTrigger`),
      (bd = G.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = hd(yd, n),
          a = pd(n),
          o = $o(t, i.triggerRef),
          s = (0, K.jsx)(gs.button, {
            type: `button`,
            "aria-haspopup": `dialog`,
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": ld(i.open),
            ...r,
            ref: o,
            onClick: j(e.onClick, i.onOpenToggle),
          });
        return i.hasCustomAnchor ? s : (0, K.jsx)(ad, { asChild: !0, ...a, children: s });
      })),
      (bd.displayName = yd),
      (xd = `PopoverPortal`),
      ([Sd, Cd] = dd(xd, { forceMount: void 0 })),
      (wd = (e) => {
        let { __scopePopover: t, forceMount: n, children: r, container: i } = e,
          a = hd(xd, t);
        return (0, K.jsx)(Sd, {
          scope: t,
          forceMount: n,
          children: (0, K.jsx)(Gs, {
            present: n || a.open,
            children: (0, K.jsx)(Hc, { asChild: !0, container: i, children: r }),
          }),
        });
      }),
      (wd.displayName = xd),
      (Td = `PopoverContent`),
      (Ed = G.forwardRef((e, t) => {
        let n = Cd(Td, e.__scopePopover),
          { forceMount: r = n.forceMount, ...i } = e,
          a = hd(Td, e.__scopePopover);
        return (0, K.jsx)(Gs, {
          present: r || a.open,
          children: a.modal ? (0, K.jsx)(Od, { ...i, ref: t }) : (0, K.jsx)(kd, { ...i, ref: t }),
        });
      })),
      (Ed.displayName = Td),
      (Dd = ns(`PopoverContent.RemoveScroll`)),
      (Od = G.forwardRef((e, t) => {
        let n = hd(Td, e.__scopePopover),
          r = G.useRef(null),
          i = $o(t, r),
          a = G.useRef(!1);
        return (
          G.useEffect(() => {
            let e = r.current;
            if (e) return fe(e);
          }, []),
          (0, K.jsx)(Eu, {
            as: Dd,
            allowPinchZoom: !0,
            children: (0, K.jsx)(Ad, {
              ...e,
              ref: i,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: j(e.onCloseAutoFocus, (e) => {
                (e.preventDefault(), a.current || n.triggerRef.current?.focus());
              }),
              onPointerDownOutside: j(
                e.onPointerDownOutside,
                (e) => {
                  let t = e.detail.originalEvent,
                    n = t.button === 0 && t.ctrlKey === !0,
                    r = t.button === 2 || n;
                  a.current = r;
                },
                { checkForDefaultPrevented: !1 },
              ),
              onFocusOutside: j(e.onFocusOutside, (e) => e.preventDefault(), {
                checkForDefaultPrevented: !1,
              }),
            }),
          })
        );
      })),
      (kd = G.forwardRef((e, t) => {
        let n = hd(Td, e.__scopePopover),
          r = G.useRef(!1),
          i = G.useRef(!1);
        return (0, K.jsx)(Ad, {
          ...e,
          ref: t,
          trapFocus: !1,
          disableOutsidePointerEvents: !1,
          onCloseAutoFocus: (t) => {
            (e.onCloseAutoFocus?.(t),
              t.defaultPrevented ||
                (r.current || n.triggerRef.current?.focus(), t.preventDefault()),
              (r.current = !1),
              (i.current = !1));
          },
          onInteractOutside: (t) => {
            (e.onInteractOutside?.(t),
              t.defaultPrevented ||
                ((r.current = !0),
                t.detail.originalEvent.type === `pointerdown` && (i.current = !0)));
            let a = t.target;
            (n.triggerRef.current?.contains(a) && t.preventDefault(),
              t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault());
          },
        });
      })),
      (Ad = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onInteractOutside: u,
            ...d
          } = e,
          f = hd(Td, n),
          p = pd(n);
        return (
          Wc(),
          (0, K.jsx)(Fc, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, K.jsx)(hc, {
              asChild: !0,
              disableOutsidePointerEvents: o,
              onInteractOutside: u,
              onEscapeKeyDown: s,
              onPointerDownOutside: c,
              onFocusOutside: l,
              onDismiss: () => f.onOpenChange(!1),
              children: (0, K.jsx)(od, {
                "data-state": ld(f.open),
                role: `dialog`,
                id: f.contentId,
                ...p,
                ...d,
                ref: t,
                style: {
                  ...d.style,
                  "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
                  "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
                  "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
                  "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
                  "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`,
                },
              }),
            }),
          })
        );
      })),
      (jd = `PopoverClose`),
      (Md = G.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = hd(jd, n);
        return (0, K.jsx)(gs.button, {
          type: `button`,
          ...r,
          ref: t,
          onClick: j(e.onClick, () => i.onOpenChange(!1)),
        });
      })),
      (Md.displayName = jd),
      (Nd = `PopoverArrow`),
      (Pd = G.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = pd(n);
        return (0, K.jsx)(sd, { ...i, ...r, ref: t });
      })),
      (Pd.displayName = Nd),
      (Fd = gd),
      (Id = bd),
      (Ld = wd),
      (Rd = Ed));
  });
function Bd(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function Vd(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Hd(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Ud(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function Wd(e) {
  let t = e.slice();
  return (
    t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y))), Gd(t)
  );
}
function Gd(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2;) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2;) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
  );
}
var q,
  J,
  Kd,
  qd,
  Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af,
  of,
  sf,
  cf,
  lf,
  uf,
  df,
  ff,
  pf,
  mf,
  hf,
  gf,
  _f,
  vf,
  yf,
  bf,
  xf,
  Sf,
  Cf,
  wf,
  Tf,
  Ef = e(() => {
    ((q = t(i(), 1)),
      me(),
      ts(),
      ks(),
      vc(),
      Zs(),
      cd(),
      Uc(),
      Ks(),
      _s(),
      ds(),
      Rs(),
      ws(),
      (J = A()),
      ([Kd, qd] = Ts(`Tooltip`, [Wu])),
      (Jd = Wu()),
      (Yd = `TooltipProvider`),
      (Xd = 700),
      (Zd = `tooltip.open`),
      ([Qd, $d] = Kd(Yd)),
      (ef = (e) => {
        let {
            __scopeTooltip: t,
            delayDuration: n = Xd,
            skipDelayDuration: r = 300,
            disableHoverableContent: i = !1,
            children: a,
          } = e,
          o = q.useRef(!0),
          s = q.useRef(!1),
          c = q.useRef(0);
        return (
          q.useEffect(() => {
            let e = c.current;
            return () => window.clearTimeout(e);
          }, []),
          (0, J.jsx)(Qd, {
            scope: t,
            isOpenDelayedRef: o,
            delayDuration: n,
            onOpen: q.useCallback(() => {
              (window.clearTimeout(c.current), (o.current = !1));
            }, []),
            onClose: q.useCallback(() => {
              (window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => (o.current = !0), r)));
            }, [r]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: q.useCallback((e) => {
              s.current = e;
            }, []),
            disableHoverableContent: i,
            children: a,
          })
        );
      }),
      (ef.displayName = Yd),
      (tf = `Tooltip`),
      ([nf, rf] = Kd(tf)),
      (af = (e) => {
        let {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            disableHoverableContent: o,
            delayDuration: s,
          } = e,
          c = $d(tf, e.__scopeTooltip),
          l = Jd(t),
          [u, d] = q.useState(null),
          f = qs(),
          p = q.useRef(0),
          m = o ?? c.disableHoverableContent,
          h = s ?? c.delayDuration,
          g = q.useRef(!1),
          [_, v] = Ns({
            prop: r,
            defaultProp: i ?? !1,
            onChange: (e) => {
              (e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Zd))) : c.onClose(), a?.(e));
            },
            caller: tf,
          }),
          y = q.useMemo(() => (_ ? (g.current ? `delayed-open` : `instant-open`) : `closed`), [_]),
          b = q.useCallback(() => {
            (window.clearTimeout(p.current), (p.current = 0), (g.current = !1), v(!0));
          }, [v]),
          x = q.useCallback(() => {
            (window.clearTimeout(p.current), (p.current = 0), v(!1));
          }, [v]),
          S = q.useCallback(() => {
            (window.clearTimeout(p.current),
              (p.current = window.setTimeout(() => {
                ((g.current = !0), v(!0), (p.current = 0));
              }, h)));
          }, [h, v]);
        return (
          q.useEffect(
            () => () => {
              p.current &&= (window.clearTimeout(p.current), 0);
            },
            [],
          ),
          (0, J.jsx)(id, {
            ...l,
            children: (0, J.jsx)(nf, {
              scope: t,
              contentId: f,
              open: _,
              stateAttribute: y,
              trigger: u,
              onTriggerChange: d,
              onTriggerEnter: q.useCallback(() => {
                c.isOpenDelayedRef.current ? S() : b();
              }, [c.isOpenDelayedRef, S, b]),
              onTriggerLeave: q.useCallback(() => {
                m ? x() : (window.clearTimeout(p.current), (p.current = 0));
              }, [x, m]),
              onOpen: b,
              onClose: x,
              disableHoverableContent: m,
              children: n,
            }),
          })
        );
      }),
      (af.displayName = tf),
      (of = `TooltipTrigger`),
      (sf = q.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
          i = rf(of, n),
          a = $d(of, n),
          o = Jd(n),
          s = $o(t, q.useRef(null), i.onTriggerChange),
          c = q.useRef(!1),
          l = q.useRef(!1),
          u = q.useCallback(() => (c.current = !1), []);
        return (
          q.useEffect(() => () => document.removeEventListener(`pointerup`, u), [u]),
          (0, J.jsx)(ad, {
            asChild: !0,
            ...o,
            children: (0, J.jsx)(gs.button, {
              "aria-describedby": i.open ? i.contentId : void 0,
              "data-state": i.stateAttribute,
              ...r,
              ref: s,
              onPointerMove: j(e.onPointerMove, (e) => {
                e.pointerType !== `touch` &&
                  !l.current &&
                  !a.isPointerInTransitRef.current &&
                  (i.onTriggerEnter(), (l.current = !0));
              }),
              onPointerLeave: j(e.onPointerLeave, () => {
                (i.onTriggerLeave(), (l.current = !1));
              }),
              onPointerDown: j(e.onPointerDown, () => {
                (i.open && i.onClose(),
                  (c.current = !0),
                  document.addEventListener(`pointerup`, u, { once: !0 }));
              }),
              onFocus: j(e.onFocus, () => {
                c.current || i.onOpen();
              }),
              onBlur: j(e.onBlur, i.onClose),
              onClick: j(e.onClick, i.onClose),
            }),
          })
        );
      })),
      (sf.displayName = of),
      (cf = `TooltipPortal`),
      ([lf, uf] = Kd(cf, { forceMount: void 0 })),
      (df = (e) => {
        let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e,
          a = rf(cf, t);
        return (0, J.jsx)(lf, {
          scope: t,
          forceMount: n,
          children: (0, J.jsx)(Gs, {
            present: n || a.open,
            children: (0, J.jsx)(Hc, { asChild: !0, container: i, children: r }),
          }),
        });
      }),
      (df.displayName = cf),
      (ff = `TooltipContent`),
      (pf = q.forwardRef((e, t) => {
        let n = uf(ff, e.__scopeTooltip),
          { forceMount: r = n.forceMount, side: i = `top`, ...a } = e,
          o = rf(ff, e.__scopeTooltip);
        return (0, J.jsx)(Gs, {
          present: r || o.open,
          children: o.disableHoverableContent
            ? (0, J.jsx)(vf, { side: i, ...a, ref: t })
            : (0, J.jsx)(mf, { side: i, ...a, ref: t }),
        });
      })),
      (mf = q.forwardRef((e, t) => {
        let n = rf(ff, e.__scopeTooltip),
          r = $d(ff, e.__scopeTooltip),
          i = q.useRef(null),
          a = $o(t, i),
          [o, s] = q.useState(null),
          { trigger: c, onClose: l } = n,
          u = i.current,
          { onPointerInTransitChange: d } = r,
          f = q.useCallback(() => {
            (s(null), d(!1));
          }, [d]),
          p = q.useCallback(
            (e, t) => {
              let n = e.currentTarget,
                r = { x: e.clientX, y: e.clientY },
                i = Vd(r, Bd(r, n.getBoundingClientRect())),
                a = Hd(t.getBoundingClientRect()),
                o = Wd([...i, ...a]);
              (s(o), d(!0));
            },
            [d],
          );
        return (
          q.useEffect(() => () => f(), [f]),
          q.useEffect(() => {
            if (c && u) {
              let e = (e) => p(e, u),
                t = (e) => p(e, c);
              return (
                c.addEventListener(`pointerleave`, e),
                u.addEventListener(`pointerleave`, t),
                () => {
                  (c.removeEventListener(`pointerleave`, e),
                    u.removeEventListener(`pointerleave`, t));
                }
              );
            }
          }, [c, u, p, f]),
          q.useEffect(() => {
            if (o) {
              let e = (e) => {
                let t = e.target,
                  n = { x: e.clientX, y: e.clientY },
                  r = c?.contains(t) || u?.contains(t),
                  i = !Ud(n, o);
                r ? f() : i && (f(), l());
              };
              return (
                document.addEventListener(`pointermove`, e),
                () => document.removeEventListener(`pointermove`, e)
              );
            }
          }, [c, u, o, l, f]),
          (0, J.jsx)(vf, { ...e, ref: a })
        );
      })),
      ([hf, gf] = Kd(tf, { isInside: !1 })),
      (_f = is(`TooltipContent`)),
      (vf = q.forwardRef((e, t) => {
        let {
            __scopeTooltip: n,
            children: r,
            "aria-label": i,
            onEscapeKeyDown: a,
            onPointerDownOutside: o,
            ...s
          } = e,
          c = rf(ff, n),
          l = Jd(n),
          { onClose: u } = c;
        return (
          q.useEffect(
            () => (document.addEventListener(Zd, u), () => document.removeEventListener(Zd, u)),
            [u],
          ),
          q.useEffect(() => {
            if (c.trigger) {
              let e = (e) => {
                e.target?.contains(c.trigger) && u();
              };
              return (
                window.addEventListener(`scroll`, e, { capture: !0 }),
                () => window.removeEventListener(`scroll`, e, { capture: !0 })
              );
            }
          }, [c.trigger, u]),
          (0, J.jsx)(hc, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: o,
            onFocusOutside: (e) => e.preventDefault(),
            onDismiss: u,
            children: (0, J.jsxs)(od, {
              "data-state": c.stateAttribute,
              ...l,
              ...s,
              ref: t,
              style: {
                ...s.style,
                "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
                "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
                "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
                "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
                "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`,
              },
              children: [
                (0, J.jsx)(_f, { children: r }),
                (0, J.jsx)(hf, {
                  scope: n,
                  isInside: !0,
                  children: (0, J.jsx)(Cs, { id: c.contentId, role: `tooltip`, children: i || r }),
                }),
              ],
            }),
          })
        );
      })),
      (pf.displayName = ff),
      (yf = `TooltipArrow`),
      (bf = q.forwardRef((e, t) => {
        let { __scopeTooltip: n, ...r } = e,
          i = Jd(n);
        return gf(yf, n).isInside ? null : (0, J.jsx)(sd, { ...i, ...r, ref: t });
      })),
      (bf.displayName = yf),
      (xf = ef),
      (Sf = af),
      (Cf = sf),
      (wf = df),
      (Tf = pf));
  }),
  Df = e(() => {
    (zd(), ds(), Ef());
  }),
  Of = n((e, t) => {
    var n = NaN,
      r = /^\s+|\s+$/g,
      i = /^[-+]0x[0-9a-f]+$/i,
      a = /^0b[01]+$/i,
      o = /^0o[0-7]+$/i,
      s = parseInt,
      c = typeof global == `object` && global && global.Object === Object && global,
      l = typeof self == `object` && self && self.Object === Object && self,
      u = c || l || Function(`return this`)(),
      d = Object.prototype.toString,
      f = Math.max,
      p = Math.min,
      m = function () {
        return u.Date.now();
      };
    function h(e, t, n) {
      var r,
        i,
        a,
        o,
        s,
        c,
        l = 0,
        u = !1,
        d = !1,
        h = !0;
      if (typeof e != `function`) throw TypeError(`Expected a function`);
      ((t = y(t) || 0),
        g(n) &&
          ((u = !!n.leading),
          (d = `maxWait` in n),
          (a = d ? f(y(n.maxWait) || 0, t) : a),
          (h = `trailing` in n ? !!n.trailing : h)));
      function _(t) {
        var n = r,
          a = i;
        return ((r = i = void 0), (l = t), (o = e.apply(a, n)), o);
      }
      function v(e) {
        return ((l = e), (s = setTimeout(S, t)), u ? _(e) : o);
      }
      function b(e) {
        var n = e - c,
          r = e - l,
          i = t - n;
        return d ? p(i, a - r) : i;
      }
      function x(e) {
        var n = e - c,
          r = e - l;
        return c === void 0 || n >= t || n < 0 || (d && r >= a);
      }
      function S() {
        var e = m();
        if (x(e)) return C(e);
        s = setTimeout(S, b(e));
      }
      function C(e) {
        return ((s = void 0), h && r ? _(e) : ((r = i = void 0), o));
      }
      function w() {
        (s !== void 0 && clearTimeout(s), (l = 0), (r = c = i = s = void 0));
      }
      function T() {
        return s === void 0 ? o : C(m());
      }
      function ee() {
        var e = m(),
          n = x(e);
        if (((r = arguments), (i = this), (c = e), n)) {
          if (s === void 0) return v(c);
          if (d) return ((s = setTimeout(S, t)), _(c));
        }
        return (s === void 0 && (s = setTimeout(S, t)), o);
      }
      return ((ee.cancel = w), (ee.flush = T), ee);
    }
    function g(e) {
      var t = typeof e;
      return !!e && (t == `object` || t == `function`);
    }
    function _(e) {
      return !!e && typeof e == `object`;
    }
    function v(e) {
      return typeof e == `symbol` || (_(e) && d.call(e) == `[object Symbol]`);
    }
    function y(e) {
      if (typeof e == `number`) return e;
      if (v(e)) return n;
      if (g(e)) {
        var t = typeof e.valueOf == `function` ? e.valueOf() : e;
        e = g(t) ? t + `` : t;
      }
      if (typeof e != `string`) return e === 0 ? e : +e;
      e = e.replace(r, ``);
      var c = a.test(e);
      return c || o.test(e) ? s(e.slice(2), c ? 2 : 8) : i.test(e) ? n : +e;
    }
    t.exports = h;
  });
function kf(e, t) {
  let n = (0, Af.useRef)(e);
  (jf(() => {
    n.current = e;
  }, [e]),
    (0, Af.useEffect)(() => {
      if (!t && t !== 0) return;
      let e = setTimeout(() => {
        n.current();
      }, t);
      return () => {
        clearTimeout(e);
      };
    }, [t]));
}
var Af,
  jf,
  Mf = e(() => {
    ((Af = t(i(), 1)), Of(), (jf = typeof window < `u` ? Af.useLayoutEffect : Af.useEffect));
  }),
  Nf,
  Pf,
  Ff,
  If,
  Lf,
  Rf,
  zf,
  Bf,
  Vf = e(() => {
    ((Nf = t(i())),
      Uo(),
      (Pf = []),
      (Ff = !1),
      (If = (e) => {
        if (e.key === `Escape`) {
          let [t] = Pf;
          t && (e.preventDefault(), t.callback.current?.());
        }
      }),
      (Lf = () => {
        Pf.length > 0 && !Ff
          ? (document.body.addEventListener(`keydown`, If), (Ff = !0))
          : Pf.length === 0 && Ff && (document.body.removeEventListener(`keydown`, If), (Ff = !1));
      }),
      (Rf = (e) => {
        (Pf.unshift(e), Lf());
      }),
      (zf = ({ id: e }) => {
        ((Pf = Pf.filter((t) => t.id !== e)), Lf());
      }),
      (Bf = (e, t) => {
        let n = (0, Nf.useId)(),
          r = Vo(t);
        (0, Nf.useEffect)(() => {
          if (!e) return;
          let t = { id: n, callback: r };
          return (Rf(t), () => zf(t));
        }, [n, e, r]);
      }));
  }),
  Hf,
  Uf,
  Wf = e(() => {
    ((Hf = t(i())), (Uf = (0, Hf.createContext)(null)));
  });
function Gf() {
  return (0, Kf.useContext)(Uf)?.radixPortalContainer;
}
var Kf,
  qf = e(() => {
    ((Kf = t(i())), Wf());
  });
function Jf(e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
var Yf = e(() => {}),
  Xf = e(() => {
    Pe();
  }),
  Zf,
  Qf = e(() => {
    (Xf(), We(), (Zf = () => ze || qe()));
  });
function $f(e, t, n, r) {
  let i = e.reduce((e, t) => ({ ...e, [t.key]: 1 }), {}),
    a = t.reduce((e, t) => ({ ...e, [t.component.key]: 1 }), {}),
    o = e.filter((e) => !a[e.key]).map(n),
    s = t.map((t) => ({
      ...t,
      component: e.find(({ key: e }) => e === t.component.key) || t.component,
      shouldRender: !!i[t.component.key],
    }));
  return r === `append` ? s.concat(o) : o.concat(s);
}
function ep(e, t, n) {
  if ((ze || Ge) && t && n > 1)
    throw Error(`Cannot use forwardRef with multiple children in <${e} />`);
}
var tp,
  np,
  rp,
  ip,
  ap = e(() => {
    ((tp = t(i())),
      Xf(),
      (np = (e, t = !1, n = `TransitionGroup`) => {
        let r = [];
        return (
          tp.Children.forEach(e, (e) => {
            if (e && typeof e == `object` && `key` in e && e.key) r.push(e);
            else if (t) throw Error(`Child elements of <${n} /> must include a \`key\``);
          }),
          r
        );
      }),
      (rp = () => {}),
      (ip = (e) => {
        let t = (0, tp.useRef)(e);
        return ((t.current = e), (0, tp.useCallback)((e) => t.current(e), []));
      }));
  }),
  op,
  sp,
  cp = e(() => {
    ((op = `_TransitionGroupChild_1d6a5_1`), (sp = { TransitionGroupChild: op }));
  }),
  lp,
  up,
  dp,
  fp = e(() => {
    ((lp = { enter: !1, enterActive: !1, exit: !1, exitActive: !1, interrupted: !1 }),
      (up = (e) => ({ ...lp, enter: !e })),
      (dp = (e, t) => {
        switch (t.type) {
          case `enter-before`:
            return {
              enter: !0,
              enterActive: !1,
              exit: !1,
              exitActive: !1,
              interrupted: e.interrupted || e.exit,
            };
          case `enter-active`:
            return { enter: !0, enterActive: !0, exit: !1, exitActive: !1, interrupted: !1 };
          case `exit-before`:
            return {
              enter: !1,
              enterActive: !1,
              exit: !0,
              exitActive: !1,
              interrupted: e.interrupted || e.enter,
            };
          case `exit-active`:
            return { enter: !1, enterActive: !1, exit: !0, exitActive: !0, interrupted: !1 };
          default:
            return lp;
        }
      }));
  }),
  pp,
  Y,
  mp,
  hp,
  gp,
  _p = e(() => {
    ((pp = A()),
      (Y = t(i())),
      Yf(),
      We(),
      Ne(),
      Mf(),
      Qf(),
      ap(),
      cp(),
      fp(),
      (mp = ({
        ref: e,
        as: t,
        children: n,
        className: r,
        transitionId: i,
        style: a,
        preventMountTransition: o,
        shouldRender: s,
        enterDuration: c,
        exitDuration: l,
        removeChild: u,
        onEnter: d,
        onEnterActive: f,
        onEnterComplete: p,
        onExit: m,
        onExitActive: h,
        onExitComplete: g,
      }) => {
        let [_, v] = (0, Y.useReducer)(dp, up(o || !1)),
          y = (0, Y.useRef)(!1),
          b = (0, Y.useRef)(null),
          x = (0, Y.useRef)(c);
        x.current = c;
        let S = (0, Y.useRef)(l);
        S.current = l;
        let C = (0, Y.useRef)(null),
          w = (0, Y.useCallback)(
            (e) => {
              let t = b.current;
              if (!(!t || e === C.current))
                switch (((C.current = e), e)) {
                  case `enter`:
                    d(t);
                    break;
                  case `enter-active`:
                    f(t);
                    break;
                  case `enter-complete`:
                    p(t);
                    break;
                  case `exit`:
                    m(t);
                    break;
                  case `exit-active`:
                    h(t);
                    break;
                  case `exit-complete`:
                    g(t);
                    break;
                  default:
                    break;
                }
            },
            [d, f, p, m, h, g],
          );
        return (
          Y.useLayoutEffect(() => {
            if (!s) {
              let e;
              (v({ type: `exit-before` }), w(`exit`));
              let t = Re(() => {
                (v({ type: `exit-active` }),
                  w(`exit-active`),
                  (e = window.setTimeout(() => {
                    (w(`exit-complete`), u());
                  }, S.current)));
              });
              return () => {
                (t(), e !== void 0 && clearTimeout(e));
              };
            }
            if (o && !y.current) {
              y.current = !0;
              return;
            }
            let e;
            (v({ type: `enter-before` }), w(`enter`));
            let t = Re(() => {
              (v({ type: `enter-active` }),
                w(`enter-active`),
                (e = window.setTimeout(() => {
                  (v({ type: `done` }), w(`enter-complete`));
                }, x.current)));
            });
            return () => {
              (t(), e !== void 0 && clearTimeout(e));
            };
          }, [s, o, u, w]),
          (0, Y.useEffect)(
            () => () => {
              y.current = !1;
            },
            [],
          ),
          (0, pp.jsx)(t, {
            ref: Jf([b, e]),
            className: E(r, sp.TransitionGroupChild),
            "data-transition-id": i,
            style: a,
            "data-entering": _.enter ? `` : void 0,
            "data-entering-active": _.enterActive ? `` : void 0,
            "data-exiting": _.exit ? `` : void 0,
            "data-exiting-active": _.exitActive ? `` : void 0,
            "data-interrupted": _.interrupted ? `` : void 0,
            children: n,
          })
        );
      }),
      (hp = (e) => {
        let { enterMountDelay: t, preventMountTransition: n } = e,
          r = !n && t != null ? t : null,
          [i, a] = (0, Y.useState)(r == null);
        return (kf(() => a(!0), i ? null : r), i ? (0, pp.jsx)(mp, { ...e }) : null);
      }),
      (gp = (e) => {
        let {
            ref: t,
            as: n = `span`,
            children: r,
            className: i,
            transitionId: a,
            style: o,
            enterDuration: s = 0,
            exitDuration: c = 0,
            preventInitialTransition: l = !0,
            enterMountDelay: u,
            insertMethod: d = `append`,
            disableAnimations: f = Zf(),
          } = e,
          p = ip(e.onEnter ?? rp),
          m = ip(e.onEnterActive ?? rp),
          h = ip(e.onEnterComplete ?? rp),
          g = ip(e.onExit ?? rp),
          _ = ip(e.onExitActive ?? rp),
          v = ip(e.onExitComplete ?? rp);
        Y.Children.forEach(r, (e) => {
          if (e && !e.key)
            throw Error("Child elements of <TransitionGroup /> must include a `key`");
        });
        let y = (0, Y.useCallback)(
            (e) => ({
              component: e,
              shouldRender: !0,
              removeChild: () => {
                x((t) => t.filter((t) => e.key !== t.component.key));
              },
              onEnter: p,
              onEnterActive: m,
              onEnterComplete: h,
              onExit: g,
              onExitActive: _,
              onExitComplete: v,
            }),
            [p, m, h, g, _, v],
          ),
          [b, x] = (0, Y.useState)(() =>
            np(r).map((e) => ({ ...y(e), preventMountTransition: l })),
          );
        return (
          (0, Y.useLayoutEffect)(() => {
            x((e) => $f(np(r), e, y, d));
          }, [r, d, y]),
          ep(`TransitionGroup`, t, Y.Children.count(r)),
          f
            ? (0, pp.jsx)(pp.Fragment, {
                children: np(r).map((e) =>
                  (0, pp.jsx)(
                    n,
                    { ref: t, className: i, style: o, "data-transition-id": a, children: e },
                    e.key,
                  ),
                ),
              })
            : (0, pp.jsx)(pp.Fragment, {
                children: b.map(({ component: e, ...r }) =>
                  (0, pp.jsx)(
                    hp,
                    {
                      ...r,
                      as: n,
                      className: i,
                      transitionId: a,
                      enterDuration: s,
                      exitDuration: c,
                      enterMountDelay: u,
                      style: o,
                      ref: t,
                      children: e,
                    },
                    e.key,
                  ),
                ),
              })
        );
      }));
  }),
  vp = e(() => {
    (A(), _p(), i(), We(), ap());
  }),
  yp = e(() => {
    (A(), i(), We(), _p(), ap());
  }),
  bp = e(() => {
    (A(), _p(), i(), We(), ap());
  }),
  xp = e(() => {
    (A(), i(), We(), Qf(), ap());
  }),
  Sp = e(() => {
    (vp(), yp(), bp(), xp(), _p());
  });
function Cp(e, t) {
  let n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, a)) {
    case a:
      return `left`;
    case i:
      return `right`;
    case n:
      return `top`;
    case r:
      return `bottom`;
    default:
      throw Error(`unreachable`);
  }
}
function wp(e, t, n = 5) {
  let r = [];
  switch (t) {
    case `top`:
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case `bottom`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case `left`:
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case `right`:
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Tp(e) {
  let { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function Ep(e, t) {
  let { x: n, y: r } = e,
    i = !1;
  for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
    let o = t[e],
      s = t[a],
      c = o.x,
      l = o.y,
      u = s.x,
      d = s.y;
    l > r != d > r && n < ((u - c) * (r - l)) / (d - l) + c && (i = !i);
  }
  return i;
}
function Dp(e) {
  let t = e.slice();
  return (
    t.sort((e, t) => (e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y))), Op(t)
  );
}
function Op(e) {
  if (e.length <= 1) return e.slice();
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    for (; t.length >= 2;) {
      let e = t[t.length - 1],
        n = t[t.length - 2];
      if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
      else break;
    }
    t.push(r);
  }
  t.pop();
  let n = [];
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    for (; n.length >= 2;) {
      let e = n[n.length - 1],
        t = n[n.length - 2];
      if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
      else break;
    }
    n.push(r);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
  );
}
var kp,
  Ap = e(() => {
    kp = (e, t) => {
      let n = e.currentTarget,
        r = { x: e.clientX, y: e.clientY },
        i = wp(r, Cp(r, n.getBoundingClientRect())),
        a = Tp(t.getBoundingClientRect());
      return Dp([...i, ...a]);
    };
  }),
  jp,
  Mp,
  Np,
  Pp,
  Fp = e(() => {
    ((jp = `_Transition_fr5vm_1`),
      (Mp = `_Popover_fr5vm_5`),
      (Np = `_shake_fr5vm_1`),
      (Pp = { Transition: jp, Popover: Mp, shake: Np }));
  }),
  Ip,
  Lp,
  Rp,
  zp = e(() => {
    ((Ip = t(i())),
      (Lp = (0, Ip.createContext)(null)),
      (Rp = () => {
        let e = (0, Ip.use)(Lp);
        if (!e) throw Error(`Popover components must be wrapped in <Popover />`);
        return e;
      }));
  }),
  Bp,
  X,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp = e(() => {
    ((Bp = A()),
      Ne(),
      Df(),
      (X = t(i())),
      Mf(),
      Vf(),
      Uo(),
      We(),
      qf(),
      Sp(),
      Ap(),
      Fp(),
      zp(),
      (Vp = ({
        open: e,
        onOpenChange: t,
        showOnHover: n = !1,
        hoverOpenDelay: r = 150,
        children: i,
      }) => {
        let [a, o] = (0, X.useState)(!1),
          [s, c] = (0, X.useState)(!1),
          l = (0, X.useRef)(null),
          u = (0, X.useRef)(null),
          d = (0, X.useRef)(void 0),
          f = (0, X.useRef)(!1),
          p = (0, X.useRef)(!1),
          m = e ?? a,
          [h, g] = (0, X.useState)(!1);
        kf(() => g(!1), h ? 500 : null);
        let _ = Vo(t),
          v = Vo((e) => {
            (clearTimeout(d.current),
              m !== e &&
                (e || (c(!1), n && f.current && l.current?.focus(), (f.current = !1)),
                _.current?.(e),
                o(e),
                n && g(e)));
          }),
          y = (0, X.useCallback)(
            (e) => {
              v.current(e);
            },
            [v],
          ),
          b = (0, X.useCallback)(() => {
            d.current = setTimeout(() => y(!0), r);
          }, [y, r]),
          x = (0, X.useCallback)(() => {
            clearTimeout(d.current);
          }, []);
        return (
          (0, X.useEffect)(
            () => () => {
              clearTimeout(d.current);
            },
            [],
          ),
          (0, Bp.jsx)(Lp, {
            value: (0, X.useMemo)(
              () => ({
                open: m,
                setOpen: y,
                shake: s,
                setShake: c,
                showOnHover: n,
                temporarilyPreventClickToClose: h,
                onTriggerEnter: b,
                onTriggerLeave: x,
                isPointerInTransitRef: p,
                triggerRef: l,
                contentRef: u,
                hoverOpenFocusedWithTab: f,
              }),
              [m, y, s, c, n, h, f, p, b, x],
            ),
            children: (0, Bp.jsx)(Fd, { open: m, onOpenChange: y, modal: !1, children: i }),
          })
        );
      }),
      (Hp = ({ children: e, onPointerDown: t, onClick: n }) => {
        let {
            setOpen: r,
            showOnHover: i,
            temporarilyPreventClickToClose: a,
            onTriggerEnter: o,
            onTriggerLeave: s,
            isPointerInTransitRef: c,
            triggerRef: l,
            contentRef: u,
          } = Rp(),
          d = (0, X.useRef)(!1),
          f = (e) => {
            e.currentTarget.nodeName.toLocaleLowerCase() !== `a` &&
              a &&
              (e.preventDefault(), e.stopPropagation());
          };
        return (0, Bp.jsx)(Id, {
          asChild: !0,
          ref: l,
          onPointerDown: (e) => {
            (f(e), t?.(e));
          },
          onClick: (e) => {
            (f(e), n?.(e));
          },
          onPointerMove: i
            ? (e) => {
                e.pointerType !== `touch` && !d.current && !c.current && (o(), (d.current = !0));
              }
            : void 0,
          onPointerLeave: i
            ? () => {
                d.current &&= (s(), !1);
              }
            : void 0,
          onFocus: i ? () => r(!0) : void 0,
          onBlur: i
            ? () => {
                setTimeout(() => {
                  u.current?.contains(document.activeElement) || r(!1);
                }, 50);
              }
            : void 0,
          children: e,
        });
      }),
      (Up = ({
        children: e,
        avoidCollisions: t,
        width: n,
        minWidth: r,
        maxWidth: i,
        side: a,
        sideOffset: o = 8,
        align: s,
        alignOffset: c,
        translucent: l,
        className: u,
        autoFocus: d = !0,
        preventCloseOnFocusOutside: f = !1,
      }) => {
        let { showOnHover: p, shake: m, contentRef: h } = Rp();
        return (
          (0, X.useEffect)(() => {
            let e = h.current;
            !e || !d || e?.contains(document.activeElement) || p || e.focus({ preventScroll: !0 });
          }, [h, p, d]),
          (0, Bp.jsx)(Rd, {
            forceMount: !0,
            ref: h,
            className: E(Pp.Popover, u),
            style: Ke({ "popover-width": n, "popover-min-width": r, "popover-max-width": i }),
            onCloseAutoFocus: p ? Ve : void 0,
            "data-animate": m ? `shake` : void 0,
            "data-translucent": l ? `true` : void 0,
            side: a,
            sideOffset: o,
            align: s,
            alignOffset: c ?? (s === `center` ? 0 : -5),
            avoidCollisions: t ?? !0,
            hideWhenDetached: !0,
            collisionPadding: 20,
            onFocusOutside: f ? Ve : void 0,
            onOpenAutoFocus: Ve,
            onEscapeKeyDown: Ve,
            onKeyDown: (e) => {
              let t = h.current;
              if (t && e.target === t && e.key === `Tab` && e.shiftKey) {
                (e.preventDefault(), e.stopPropagation());
                let n = He(t);
                n[n.length - 1]?.focus();
              }
            },
            children: e,
          })
        );
      }),
      (Wp = (e) => {
        let {
            setOpen: t,
            triggerRef: n,
            contentRef: r,
            isPointerInTransitRef: i,
            hoverOpenFocusedWithTab: a,
          } = Rp(),
          [o, s] = (0, X.useState)(null),
          c = (0, X.useCallback)(() => {
            (s(null), (i.current = !1));
          }, [i]),
          l = (0, X.useCallback)(
            (e, t) => {
              let n = kp(e, t);
              (s(n), (i.current = !0));
            },
            [i],
          );
        return (
          (0, X.useEffect)(() => () => c(), [c]),
          (0, X.useEffect)(() => {
            let e = n.current,
              t = r.current;
            if (!e || !t) return;
            let i = (e) => l(e, t),
              a = (t) => l(t, e);
            return (
              e.addEventListener(`pointerleave`, i),
              t.addEventListener(`pointerleave`, a),
              () => {
                (e.removeEventListener(`pointerleave`, i),
                  t.removeEventListener(`pointerleave`, a));
              }
            );
          }, [r, n, l, c]),
          (0, X.useEffect)(() => {
            if (!o) return;
            let e = (e) => {
              let i = n.current,
                a = r.current,
                s = e.target,
                l = { x: e.clientX, y: e.clientY },
                u = i?.contains(s) || a?.contains(s),
                d = !Ep(l, o),
                f = s.hasAttribute(`aria-haspopup`);
              u ? c() : (d || f) && (c(), t(!1));
            };
            return (
              document.addEventListener(`pointermove`, e),
              () => document.removeEventListener(`pointermove`, e)
            );
          }, [o, t, c, n, r]),
          (0, X.useEffect)(() => {
            let e = (t) => {
              if (r.current && t.key === `Tab` && !t.shiftKey) {
                let [n] = He(r.current);
                n &&
                  (t.preventDefault(),
                  n.focus(),
                  (a.current = !0),
                  document.removeEventListener(`keydown`, e));
              }
            };
            return (
              document.addEventListener(`keydown`, e),
              () => {
                document.removeEventListener(`keydown`, e);
              }
            );
          }, [r, a]),
          (0, Bp.jsx)(Up, { ...e })
        );
      }),
      (Gp = (e) => {
        let { open: t, showOnHover: n, setOpen: r } = Rp(),
          i = Gf();
        return (
          Bf(t, () => {
            r(!1);
          }),
          (0, Bp.jsx)(Ld, {
            forceMount: !0,
            container: i,
            children: (0, Bp.jsx)(gp, {
              enterDuration: 600,
              exitDuration: 300,
              className: Pp.Transition,
              children:
                t &&
                (n
                  ? (0, Bp.jsx)(Wp, { ...e }, `popover-hover`)
                  : (0, Bp.jsx)(Up, { ...e }, `popover`)),
            }),
          })
        );
      }),
      (Vp.Trigger = Hp),
      (Vp.Content = Gp));
  }),
  qp,
  Jp,
  Yp = e(() => {
    ((qp = t(i())),
      we(),
      We(),
      zp(),
      (Jp = () => {
        let { setOpen: e } = Rp();
        return (0, qp.useCallback)(() => e(!1), [e]);
      }));
  }),
  Xp = e(() => {
    (Kp(), Yp());
  }),
  Zp,
  Qp,
  $p,
  em,
  tm = e(() => {
    ((Zp = A()),
      (Qp = t(i())),
      ($p = (e) => {
        let t = Qp.Children.toArray(e),
          n = [],
          r = ``,
          i = () => {
            r !== `` && (n.push(r), (r = ``));
          };
        for (let e of t)
          if (!(e == null || typeof e == `boolean`)) {
            if (typeof e == `string` || typeof e == `number`) {
              r += String(e);
              continue;
            }
            (i(), n.push(e));
          }
        return (i(), n);
      }),
      (em = (e) => {
        let t = $p(e),
          n = Qp.Children.count(t);
        return Qp.Children.map(t, (e) => {
          if (typeof e == `string` && e.trim())
            return n <= 1 ? e : (0, Zp.jsx)(`span`, { children: e });
          if ((0, Qp.isValidElement)(e)) {
            let t = e,
              { children: n, ...r } = t.props;
            return n == null ? t : (0, Qp.cloneElement)(t, r, em(n));
          }
          return e;
        });
      }));
  }),
  nm = e(() => {}),
  rm = e(() => {
    nm();
  }),
  im = e(() => {
    i();
  }),
  am = e(() => {
    (A(), i(), im(), We());
  }),
  om = e(() => {
    A();
  }),
  sm,
  cm,
  lm,
  um = e(() => {
    ((sm = `_LoadingIndicator_aet99_1`),
      (cm = `_rotate_aet99_1`),
      (lm = { LoadingIndicator: sm, rotate: cm }));
  }),
  dm,
  fm,
  pm = e(() => {
    ((dm = A()),
      Ne(),
      We(),
      um(),
      (fm = ({ className: e, size: t, strokeWidth: n, style: r, ...i }) =>
        (0, dm.jsx)(`div`, {
          ...i,
          className: E(lm.LoadingIndicator, e),
          style: r || Ke({ "indicator-size": t, "indicator-stroke": n }),
        })));
  }),
  mm = e(() => {
    (am(), om(), pm());
  }),
  hm,
  gm,
  _m,
  vm,
  ym = e(() => {
    ((hm = `_Button_6dmow_1`),
      (gm = `_ButtonInner_6dmow_4`),
      (_m = `_ButtonLoader_6dmow_794`),
      (vm = { Button: hm, ButtonInner: gm, ButtonLoader: _m }));
  }),
  bm,
  xm,
  Sm,
  Cm = e(() => {
    ((bm = A()),
      Ne(),
      (xm = t(i())),
      Fe(),
      We(),
      tm(),
      rm(),
      mm(),
      qf(),
      _p(),
      ym(),
      (Sm = (e) => {
        let {
            type: t = `button`,
            color: n = `primary`,
            variant: r = `solid`,
            pill: i = Ie.pill,
            uniform: a = !1,
            size: o = `md`,
            iconSize: s,
            gutterSize: c,
            loading: l,
            selected: u,
            block: d,
            opticallyAlign: f,
            children: p,
            className: m,
            onClick: h,
            disabled: g,
            disabledTone: _,
            inert: v = l,
            ...y
          } = e,
          b = g || v,
          x = (0, xm.useCallback)(
            (e) => {
              g || h?.(e);
            },
            [h, g],
          );
        return (0, bm.jsxs)(`button`, {
          type: t,
          className: E(vm.Button, m),
          "data-color": n,
          "data-variant": r,
          "data-pill": i ? `` : void 0,
          "data-uniform": a ? `` : void 0,
          "data-size": o,
          "data-gutter-size": c,
          "data-icon-size": s,
          "data-loading": l ? `` : void 0,
          "data-selected": u ? `` : void 0,
          "data-block": d ? `` : void 0,
          "data-optically-align": f,
          onPointerEnter: Be,
          disabled: b,
          "aria-disabled": b,
          tabIndex: b ? -1 : void 0,
          "data-disabled": g ? `` : void 0,
          "data-disabled-tone": g ? _ : void 0,
          onClick: x,
          ...y,
          children: [
            (0, bm.jsx)(gp, {
              className: vm.ButtonLoader,
              enterDuration: 250,
              exitDuration: 150,
              children: l && (0, bm.jsx)(fm, {}, `loader`),
            }),
            (0, bm.jsx)(`span`, { className: vm.ButtonInner, children: em(p) }),
          ],
        });
      }));
  }),
  wm = e(() => {
    Pe();
  }),
  Tm,
  Em,
  Dm,
  Om = e(() => {
    ((Tm = `_Tooltip_purug_1`),
      (Em = `_TriggerDecorator_purug_84`),
      (Dm = {
        Tooltip: Tm,
        "scale-in": `_scale-in_purug_1`,
        "scale-out": `_scale-out_purug_1`,
        TriggerDecorator: Em,
      }));
  }),
  km,
  Am,
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im = e(() => {
    ((km = A()),
      Ne(),
      Df(),
      (Am = t(i())),
      Mf(),
      Vf(),
      We(),
      qf(),
      Om(),
      (jm = (e) => {
        let {
            ref: t,
            children: n,
            content: r,
            forceOpen: i = r !== null && void 0,
            maxWidth: a = 300,
            openDelay: o = 150,
            interactive: s = !1,
            compact: c = !1,
            preventUnintentionalClickToClose: l,
            align: u,
            alignOffset: d = 0,
            side: f,
            sideOffset: p = 5,
            gutterSize: m = `md`,
            contentClassName: h,
            onPointerDown: g,
            onClick: _,
            ...v
          } = e,
          [y, b] = (0, Am.useState)(!1),
          [x, S] = (0, Am.useState)(!1);
        kf(() => S(!1), x ? 400 : null);
        let C = i ?? y,
          w = (e) => {
            typeof i != `boolean` && (b(e), l && S(e));
          },
          T = (e) => {
            l && x && (e.preventDefault(), e.stopPropagation());
          };
        return (0, km.jsxs)(Mm, {
          open: C,
          delayDuration: o,
          onOpenChange: w,
          disableHoverableContent: !s,
          children: [
            (0, km.jsx)(Cf, {
              asChild: !0,
              children: (0, km.jsx)(ls, {
                ...v,
                ref: t,
                onPointerDown: (e) => {
                  (T(e), g?.(e));
                },
                onClick: (e) => {
                  (T(e), _?.(e));
                },
                children: n,
              }),
            }),
            (0, km.jsx)(Nm, {
              maxWidth: a,
              compact: c,
              align: u,
              alignOffset: d,
              side: f,
              sideOffset: p,
              gutterSize: m,
              className: h,
              children: r,
            }),
          ],
        });
      }),
      (Mm = ({ children: e, open: t, onOpenChange: n, ...r }) => (
        Bf(t, () => {
          n(!1);
        }),
        (0, km.jsx)(xf, {
          children: (0, km.jsx)(Sf, { open: t, onOpenChange: n, ...r, children: e }),
        })
      )),
      (Nm = ({
        children: e,
        maxWidth: t = 300,
        compact: n = !1,
        clickable: r = void 0,
        alignOffset: i = 0,
        sideOffset: a = 5,
        gutterSize: o = `md`,
        className: s,
        style: c,
        ...l
      }) => {
        let u = Gf();
        return (0, km.jsx)(wf, {
          container: u,
          children: (0, km.jsx)(Tf, {
            ...l,
            className: E(Dm.Tooltip, s),
            "data-compact": n,
            "data-clickable": r,
            "data-gutter-size": o,
            alignOffset: i,
            sideOffset: a,
            collisionPadding: 15,
            hideWhenDetached: !0,
            style: { ...c, maxWidth: t },
            onEscapeKeyDown: Ve,
            children: e,
          }),
        });
      }),
      (Pm = ({ children: e, asChild: t = !0, ...n }) =>
        (0, km.jsx)(Cf, { asChild: t, ...n, children: e })),
      (Fm = (e) => {
        let { children: t, className: n, focusable: r = !0, ref: i, ...a } = e,
          o = typeof t == `string`;
        return (0, km.jsx)(ls, {
          ref: i,
          ...a,
          className: E(Dm.TriggerDecorator, n),
          tabIndex: r ? 0 : void 0,
          children: o ? (0, km.jsx)(`span`, { children: t }) : t,
        });
      }),
      (jm.Root = Mm),
      (jm.Content = Nm),
      (jm.Trigger = Pm),
      (jm.TriggerDecorator = Fm));
  }),
  Lm = e(() => {
    (A(), i(), wm(), Ze(), Xe(), Im());
  }),
  Rm = e(() => {
    (Lm(), Im());
  }),
  zm = e(() => {
    (A(), i(), wm(), Ze(), Xe(), Rm(), Sp(), Cm());
  }),
  Bm = e(() => {
    (Cm(), zm());
  }),
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm = e(() => {
    ((Vm = `_SelectControl_x887o_1`),
      (Hm = `_Clear_x887o_474`),
      (Um = `_DropdownIcon_x887o_475`),
      (Wm = `_TriggerText_x887o_510`),
      (Gm = `_IndicatorWrapper_x887o_520`),
      (Km = `_StartIcon_x887o_528`),
      (qm = `_DropdownIconChevron_x887o_586`),
      (Jm = `_LoadingIndicator_x887o_592`),
      (Ym = {
        SelectControl: Vm,
        Clear: Hm,
        DropdownIcon: Um,
        TriggerText: Wm,
        IndicatorWrapper: Gm,
        StartIcon: Km,
        DropdownIconChevron: qm,
        LoadingIndicator: Jm,
      }));
  }),
  Zm,
  Qm,
  $m,
  eh,
  th = e(() => {
    ((Zm = A()),
      Ne(),
      (Qm = t(i())),
      Yf(),
      Fe(),
      We(),
      Bm(),
      st(),
      Ye(),
      nt(),
      mm(),
      Xm(),
      ($m = ({
        ref: e,
        onPointerDown: t,
        onKeyDown: n,
        onPointerEnter: r,
        onInteract: i,
        invalid: a,
        disabled: o,
        children: s,
        className: c,
        variant: l = `outline`,
        size: u = `md`,
        block: d,
        disablePressable: f,
        opticallyAlign: p,
        pill: m = Ie.pill,
        loading: h,
        onClearClick: g,
        selected: _ = !1,
        StartIcon: v,
        dropdownIconType: y = `dropdown`,
        ...b
      }) => {
        let x = (0, Qm.useRef)(null),
          S = !!g && _ && !h && !o,
          C = y && y !== `none` && !h,
          w = S || h || C,
          T = !h && !o;
        return (0, Zm.jsxs)(`span`, {
          ref: Jf([x, e]),
          className: E(Ym.SelectControl, c),
          role: `button`,
          tabIndex: o ? -1 : 0,
          onPointerEnter: (e) => {
            (f || Be(e), r?.(e));
          },
          onPointerDown: T
            ? (e) => {
                e.button !== 2 &&
                  (e.stopPropagation(), i ? (e.preventDefault(), i()) : (t?.(e), b.onClick?.(e)));
              }
            : void 0,
          onKeyDown: T
            ? (e) => {
                switch (e.key) {
                  case `ArrowDown`:
                  case `ArrowUp`:
                  case ` `:
                    (e.stopPropagation(),
                      e.preventDefault(),
                      i
                        ? i()
                        : x.current?.dispatchEvent(
                            new PointerEvent(`pointerdown`, {
                              bubbles: !0,
                              cancelable: !0,
                              pointerType: `mouse`,
                            }),
                          ));
                    break;
                  case `Enter`:
                    break;
                  default:
                    n?.(e);
                }
              }
            : void 0,
          "data-variant": l,
          "data-block": d ? `` : void 0,
          "data-disable-pressable": f ? `` : void 0,
          "data-pill": m ? `` : void 0,
          "data-size": u,
          "data-optically-align": p,
          "aria-busy": h ? `true` : void 0,
          "data-selected": _,
          "data-loading": h ? `` : void 0,
          "data-invalid": a ? `` : void 0,
          "data-disabled": o ? `` : void 0,
          "aria-disabled": o,
          ...b,
          onClick: void 0,
          children: [
            v && (0, Zm.jsx)(v, { className: Ym.StartIcon }),
            (0, Zm.jsx)(`span`, { className: Ym.TriggerText, children: s }),
            w &&
              (0, Zm.jsxs)(`div`, {
                className: Ym.IndicatorWrapper,
                children: [
                  S &&
                    (0, Zm.jsx)(Sm, {
                      "aria-label": `Clear current value`,
                      className: Ym.Clear,
                      onPointerDown: (e) => {
                        e.stopPropagation();
                      },
                      onClick: (e) => {
                        (e.stopPropagation(), e.preventDefault(), g());
                      },
                      color: `secondary`,
                      variant: C ? `ghost` : `solid`,
                      size: `3xs`,
                      uniform: !0,
                      pill: m,
                      "data-only-child": C ? void 0 : ``,
                      children: (0, Zm.jsx)(Je, {}),
                    }),
                  h && (0, Zm.jsx)(fm, { className: Ym.LoadingIndicator }),
                  C && (0, Zm.jsx)(eh, { iconType: y }),
                ],
              }),
          ],
        });
      }),
      (eh = ({ iconType: e }) =>
        e === `chevronDown`
          ? (0, Zm.jsx)($e, { className: E(Ym.DropdownIcon, Ym.DropdownIconChevron) })
          : (0, Zm.jsx)(at, { className: Ym.DropdownIcon })));
  }),
  nh = e(() => {
    th();
  }),
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh = e(() => {
    ((rh = `_CalendarContainer_5xeql_1`),
      (ih = `_Previous_5xeql_9`),
      (ah = `_Next_5xeql_42`),
      (oh = `_CalendarWrapper_5xeql_81`),
      (sh = `_CalendarRange_5xeql_86`),
      (ch = `_Calendar_5xeql_1`),
      (lh = `_Week_5xeql_100`),
      (uh = `_DayLabel_5xeql_109`),
      (dh = `_MonthLabel_5xeql_121`),
      (fh = `_Day_5xeql_109`),
      (ph = `_InteractiveDay_5xeql_146`),
      (mh = `_TodayDot_5xeql_193`),
      (hh = {
        CalendarContainer: rh,
        Previous: ih,
        Next: ah,
        CalendarWrapper: oh,
        CalendarRange: sh,
        Calendar: ch,
        Week: lh,
        DayLabel: uh,
        MonthLabel: dh,
        Day: fh,
        InteractiveDay: ph,
        TodayDot: mh,
      }));
  }),
  _h,
  vh,
  yh,
  bh = e(() => {
    ((_h = t(i())),
      (vh = (0, _h.createContext)(null)),
      (yh = () => {
        let e = (0, _h.use)(vh);
        if (!e) throw Error(`Date components must be wrapped in <DatePicker />`);
        return e;
      }));
  }),
  Z,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh = e(() => {
    ((Z = A()),
      Bo(),
      (xh = t(i())),
      Xo(),
      We(),
      Bm(),
      Qe(),
      tt(),
      Yp(),
      Sp(),
      gh(),
      bh(),
      (Sh = 242),
      (Ch = () => {
        let { value: e, min: t, max: n, onChangeRef: r } = yh(),
          i = Jp(),
          a = (0, xh.useRef)(null),
          [o, s] = (0, xh.useState)(0),
          [c, l] = (0, xh.useState)(0),
          [u, d] = (0, xh.useState)(() => e ?? V.now()),
          f = !t || Go(t, u.startOf(`month`)),
          p = !n || Go(u.endOf(`month`), n);
        return (
          (0, xh.useEffect)(() => {
            e &&
              (ja.fromDateTimes(u.startOf(`month`), u.endOf(`month`)).contains(e) ||
                (s(0), d(e), l((e) => e + 1)));
          }, [e]),
          (0, xh.useEffect)(() => {
            Re(() => {
              let e = a.current;
              if (!e) return;
              let t = -1 / 0;
              (e.querySelectorAll(`[data-calendar]`)?.forEach((e) => {
                let n = e.clientHeight;
                e.closest(`[data-exiting`) || (n > t && (t = n));
              }),
                (e.style.height = `${t}px`),
                e.style.transition ||
                  Re(() => {
                    e.style.transition = `height 0.25s var(--cubic-move)`;
                  }));
            });
          }, [u]),
          (0, Z.jsx)(
            `div`,
            {
              className: hh.CalendarWrapper,
              children: (0, Z.jsxs)(`div`, {
                ref: a,
                className: hh.CalendarContainer,
                children: [
                  (0, Z.jsx)(`div`, {
                    className: hh.Previous,
                    children: (0, Z.jsx)(Sm, {
                      variant: `ghost`,
                      color: `secondary`,
                      size: `sm`,
                      gutterSize: `2xs`,
                      iconSize: `sm`,
                      onClick: () => {
                        (s((e) => e - 1), d((e) => e.minus({ months: 1 })));
                      },
                      disabled: !f,
                      children: (0, Z.jsx)(it, {}),
                    }),
                  }),
                  (0, Z.jsx)(`div`, {
                    className: hh.Next,
                    children: (0, Z.jsx)(Sm, {
                      variant: `ghost`,
                      color: `secondary`,
                      size: `sm`,
                      gutterSize: `2xs`,
                      iconSize: `sm`,
                      onClick: () => {
                        (s((e) => e + 1), d((e) => e.plus({ months: 1 })));
                      },
                      disabled: !p,
                      children: (0, Z.jsx)(ot, {}),
                    }),
                  }),
                  (0, Z.jsx)(`div`, {
                    className: hh.CalendarRange,
                    style: { transform: `translate(${o * -1 * Sh}px, 0)` },
                    children: (0, Z.jsx)(gp, {
                      enterDuration: 400,
                      exitDuration: 400,
                      children: (0, Z.jsx)(
                        Th,
                        {
                          stepPosition: o,
                          date: u,
                          selectedDate: e,
                          min: t,
                          max: n,
                          onDateSelect: (e) => {
                            (r.current(e), i());
                          },
                        },
                        u.toLocaleString({ month: `long`, year: `numeric` }),
                      ),
                    }),
                  }),
                ],
              }),
            },
            `stable-view-${c}`,
          )
        );
      }),
      (wh = [`Su`, `Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`]),
      (Th = ({ date: e, selectedDate: t, min: n, max: r, onDateSelect: i, stepPosition: a }) => {
        let [o] = (0, xh.useState)(a),
          {
            startOfMonth: s,
            weeks: c,
            enabledInterval: l,
          } = (0, xh.useMemo)(() => {
            let t = e.startOf(`month`),
              i = e.endOf(`month`),
              a = t.weekday % 7,
              o = Array(a).fill(null),
              s = Wo(t),
              c = [...o, ...s],
              l = ja.fromDateTimes(n || t, r || i);
            return { startOfMonth: t, endOfMonth: i, weeks: Jo(c, 7), enabledInterval: l };
          }, [e, n, r]);
        return (0, Z.jsxs)(`div`, {
          className: hh.Calendar,
          style: { left: o * Sh },
          "data-calendar": !0,
          children: [
            (0, Z.jsxs)(`p`, { className: hh.MonthLabel, children: [s.monthLong, ` `, s.year] }),
            (0, Z.jsx)(`div`, {
              className: hh.Week,
              children: wh.map((e) =>
                (0, Z.jsx)(`div`, { className: hh.DayLabel, children: e }, e),
              ),
            }),
            c.map((e, n) =>
              (0, Z.jsx)(
                `div`,
                {
                  className: hh.Week,
                  children: e.map((e, r) => {
                    if (!e) return (0, Z.jsx)(`div`, { className: hh.Day }, `${n}-${r}`);
                    let a = l.contains(e),
                      o = a && t && Ko(e, t),
                      s = qo(e);
                    return (0, Z.jsx)(
                      `div`,
                      {
                        className: hh.Day,
                        "data-is-selected": o ? `` : void 0,
                        children: (0, Z.jsxs)(`button`, {
                          className: hh.InteractiveDay,
                          disabled: !a,
                          onClick: () => e && i?.(e),
                          children: [e.day, s && (0, Z.jsx)(`span`, { className: hh.TodayDot })],
                        }),
                      },
                      r,
                    );
                  }),
                },
                n,
              ),
            ),
          ],
        });
      }));
  }),
  Dh,
  Oh,
  kh,
  Ah = e(() => {
    ((Dh = A()),
      (Oh = t(i())),
      Fe(),
      Uo(),
      Xo(),
      et(),
      Xp(),
      nh(),
      Eh(),
      bh(),
      (kh = (e) => {
        let {
            id: t,
            value: n,
            min: r,
            max: i,
            side: a = `bottom`,
            sideOffset: o = 8,
            align: s = `center`,
            alignOffset: c,
            variant: l = `outline`,
            size: u = `md`,
            clearable: d = !1,
            disabled: f = !1,
            dropdownIconType: p,
            placeholder: m = `Select date...`,
            pill: h = Ie.pill,
            disablePressable: g,
            block: _ = !1,
            triggerClassName: v,
            triggerShowIcon: y = !0,
            triggerDateFormat: b = `MM/dd/yy`,
            invalid: x,
            valueType: S = `luxon`,
            onChange: C,
          } = e,
          w = (0, Oh.useMemo)(() => Yo(r) ?? void 0, [r]),
          T = (0, Oh.useMemo)(() => Yo(i) ?? void 0, [i]),
          ee = (0, Oh.useMemo)(() => Yo(n), [n]);
        if (w && T && !Go(w, T))
          throw Error("DatePicker error: `min` date must be before the `max` date");
        let te = Vo((e) => {
            if (S === `date`) {
              C(e ? e.toJSDate() : null);
              return;
            }
            C(e);
          }),
          E = (0, Oh.useMemo)(
            () => ({
              value: ee,
              min: w,
              max: T,
              variant: l,
              size: u,
              dropdownIconType: p,
              clearable: d,
              disabled: f,
              placeholder: m,
              block: _,
              pill: h,
              triggerClassName: v,
              triggerShowIcon: y,
              triggerDateFormat: b,
              onChangeRef: te,
            }),
            [ee, w, T, l, u, p, d, f, m, _, h, v, y, b, te],
          );
        return (0, Dh.jsx)(vh, {
          value: E,
          children: (0, Dh.jsxs)(Vp, {
            children: [
              (0, Dh.jsx)(Vp.Trigger, {
                children: (0, Dh.jsx)($m, {
                  id: t,
                  className: v,
                  selected: !!ee,
                  variant: l,
                  pill: h,
                  disablePressable: g,
                  block: _,
                  size: u,
                  disabled: f,
                  invalid: x,
                  StartIcon: y ? rt : void 0,
                  dropdownIconType: p,
                  onClearClick: d
                    ? () => {
                        te.current(null);
                      }
                    : void 0,
                  children: (0, Dh.jsx)(`span`, {
                    className: `tabular-nums`,
                    children: ee?.toFormat(b) ?? m,
                  }),
                }),
              }),
              (0, Dh.jsx)(Vp.Content, {
                minWidth: 230,
                side: a,
                sideOffset: o,
                align: s,
                alignOffset: c ?? (s === `center` ? 0 : -5),
                children: (0, Dh.jsx)(Ch, {}),
              }),
            ],
          }),
        });
      }));
  }),
  jh = e(() => {
    Ah();
  });
function Mh(e, t) {
  let n = u(e);
  return n
    ? t.formatTime(new Date(2024, 0, 1, n.hour, n.minute), { hour: `numeric`, minute: `2-digit` })
    : e;
}
var Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  Bh,
  Vh,
  Hh,
  Uh = e(() => {
    (ne(),
      l(),
      (Nh = 1440),
      (Ph = 15),
      (Fh = Array.from({ length: Nh / Ph }, (e, t) => {
        let n = t * Ph;
        return ie(Math.floor(n / 60), n % 60);
      })),
      (Ih = [
        {
          id: `hourly`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.hourly`,
            defaultMessage: `Hourly`,
            description: `Dropdown label for an hourly automation schedule`,
          }),
        },
        {
          id: `daily`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.daily`,
            defaultMessage: `Daily`,
            description: `Dropdown label for a daily automation schedule`,
          }),
        },
        {
          id: `weekdays`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.weekdays`,
            defaultMessage: `Weekdays`,
            description: `Dropdown label for a weekdays-only automation schedule`,
          }),
        },
        {
          id: `weekly`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.weekly`,
            defaultMessage: `Weekly`,
            description: `Dropdown label for a weekly automation schedule`,
          }),
        },
      ]),
      (Lh = {
        id: `custom`,
        labelMessage: k({
          id: `settings.automations.scheduleMode.custom`,
          defaultMessage: `Custom`,
          description: `Dropdown label for a custom automation schedule`,
        }),
      }),
      (Rh = [...Ih, Lh]),
      (zh = [
        ...Ih,
        {
          id: `monthly`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.monthly`,
            defaultMessage: `Monthly`,
            description: `Dropdown label for a monthly cloud automation schedule`,
          }),
        },
        Lh,
      ]),
      (Bh = [
        {
          id: `hourly`,
          labelMessage: k({
            id: `settings.automations.scheduleMode.interval`,
            defaultMessage: `Interval`,
            description: `Dropdown label for a heartbeat automation interval schedule`,
          }),
        },
        ...Rh.filter((e) => e.id !== `hourly`),
      ]),
      (Vh = Array.from({ length: 31 }, (e, t) => t + 1)),
      (Hh = [
        {
          id: `MO`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.mon`,
            defaultMessage: `Mo`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.monday`,
            defaultMessage: `Monday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TU`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.tue`,
            defaultMessage: `Tu`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.tuesday`,
            defaultMessage: `Tuesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `WE`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.wed`,
            defaultMessage: `We`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.wednesday`,
            defaultMessage: `Wednesday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `TH`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.thu`,
            defaultMessage: `Th`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.thursday`,
            defaultMessage: `Thursday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `FR`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.fri`,
            defaultMessage: `Fr`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.friday`,
            defaultMessage: `Friday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SA`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.sat`,
            defaultMessage: `Sa`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.saturday`,
            defaultMessage: `Saturday`,
            description: `RRULE weekday long label`,
          }),
        },
        {
          id: `SU`,
          labelMessage: k({
            id: `settings.automations.rrule.weekday.sun`,
            defaultMessage: `Su`,
            description: `RRULE weekday short label`,
          }),
          longLabelMessage: k({
            id: `settings.automations.rrule.weekday.sunday`,
            defaultMessage: `Sunday`,
            description: `RRULE weekday long label`,
          }),
        },
      ]));
  });
function Wh(e) {
  let t = (0, Kh.c)(17),
    { value: n, onChange: r } = e,
    i = w(),
    a;
  t[0] !== i || t[1] !== n
    ? ((a =
        n.length <= 3
          ? n.join(`, `)
          : i.formatMessage(
              {
                id: `inbox.automations.customMonthDays.summary`,
                defaultMessage: `{count, plural, one {# day} other {# days}}`,
                description: `Summary of selected days in a custom monthly schedule`,
              },
              { count: n.length },
            )),
      (t[0] = i),
      (t[1] = n),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === i
    ? (s = t[4])
    : ((s = i.formatMessage({
        id: `inbox.automations.customMonthDays.ariaLabel`,
        defaultMessage: `Days of the month`,
        description: `Accessible label for the custom schedule days of month selector`,
      })),
      (t[3] = i),
      (t[4] = s));
  let c;
  t[5] === o
    ? (c = t[6])
    : ((c = (0, qh.jsx)(`span`, {
        className: `max-w-40 truncate text-default tabular-nums`,
        children: o,
      })),
      (t[5] = o),
      (t[6] = c));
  let l;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, qh.jsx)(Oe, { className: `icon-2xs shrink-0 text-tertiary` })), (t[7] = l))
    : (l = t[7]);
  let u;
  t[8] !== s || t[9] !== c
    ? ((u = (0, qh.jsxs)(ye, {
        "aria-label": s,
        className: `max-w-full min-w-0 !text-base`,
        color: `ghost`,
        size: `composerSm`,
        children: [c, l],
      })),
      (t[8] = s),
      (t[9] = c),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] !== r || t[12] !== n
    ? ((d = Vh.map((e) => {
        let t = n.includes(e);
        return (0, qh.jsx)(
          g.CheckboxItem,
          {
            checked: t,
            onCheckedChange: (t) => {
              let i = t === !0 ? [...n, e].sort(Gh) : n.filter((t) => t !== e);
              i.length > 0 && r(i);
            },
            children: e,
          },
          e,
        );
      })),
      (t[11] = r),
      (t[12] = n),
      (t[13] = d))
    : (d = t[13]);
  let f;
  return (
    t[14] !== u || t[15] !== d
      ? ((f = (0, qh.jsx)(y, {
          align: `end`,
          contentMaxHeight: `tall`,
          contentWidth: `sm`,
          triggerButton: u,
          children: d,
        })),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function Gh(e, t) {
  return e - t;
}
var Kh,
  qh,
  Jh = e(() => {
    ((Kh = be()), ne(), Uh(), r(), D(), je(), (qh = A()));
  });
function Yh(e) {
  let t = (0, Zh.c)(15),
    { ariaLabel: n, max: r, min: i, suffix: a, value: o, onChange: s } = e,
    c = String(o),
    l;
  t[0] !== r || t[1] !== i || t[2] !== s || t[3] !== o
    ? ((l = (e) => {
        if (e.currentTarget.value.length === 0) {
          e.currentTarget.value = String(o);
          return;
        }
        let t = Math.min(r, Math.max(i, Math.round(Number(e.currentTarget.value))));
        ((e.currentTarget.value = String(t)), t !== o && s(t));
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = s),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== n || t[6] !== c || t[7] !== l || t[8] !== o
    ? ((u = (0, Qh.jsx)(
        `input`,
        {
          "aria-label": n,
          className: `w-12 bg-transparent text-end tabular-nums outline-none`,
          defaultValue: c,
          inputMode: `numeric`,
          pattern: `[0-9]*`,
          type: `text`,
          onBlur: l,
          onChange: Xh,
        },
        o,
      )),
      (t[5] = n),
      (t[6] = c),
      (t[7] = l),
      (t[8] = o),
      (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] === a
    ? (d = t[11])
    : ((d =
        a == null
          ? null
          : (0, Qh.jsx)(`span`, { className: `text-codex-description`, children: a })),
      (t[10] = a),
      (t[11] = d));
  let f;
  return (
    t[12] !== u || t[13] !== d
      ? ((f = (0, Qh.jsxs)(`label`, {
          className: `flex items-center gap-1.5 text-base text-default`,
          children: [u, d],
        })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function Xh(e) {
  e.currentTarget.value = e.currentTarget.value.replaceAll(/[^0-9]/g, ``);
}
var Zh,
  Qh,
  $h = e(() => {
    ((Zh = be()), (Qh = A()));
  });
function eg(e) {
  let t = (0, tg.c)(20),
    { value: n, onChange: r } = e,
    i = w(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage({
        id: `settings.automations.scheduleTime`,
        defaultMessage: `Time`,
        description: `Accessible label for the automation schedule time input`,
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] !== i || t[3] !== n ? ((o = Mh(n, i)), (t[2] = i), (t[3] = n), (t[4] = o)) : (o = t[4]);
  let s;
  t[5] === o
    ? (s = t[6])
    : ((s = (0, ng.jsx)(`span`, { className: `truncate text-default tabular-nums`, children: o })),
      (t[5] = o),
      (t[6] = s));
  let c;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, ng.jsx)(Oe, { className: `icon-2xs shrink-0 text-tertiary` })), (t[7] = c))
    : (c = t[7]);
  let l;
  t[8] !== a || t[9] !== s
    ? ((l = (0, ng.jsxs)(ye, {
        "aria-label": a,
        className: `max-w-full min-w-0 !text-base`,
        color: `ghost`,
        size: `composerSm`,
        children: [s, c],
      })),
      (t[8] = a),
      (t[9] = s),
      (t[10] = l))
    : (l = t[10]);
  let u;
  t[11] !== i || t[12] !== r || t[13] !== n
    ? ((u = Fh.map((e) =>
        (0, ng.jsx)(
          g.Item,
          {
            RightIcon: e === n ? Te : void 0,
            onSelect: () => {
              r(e);
            },
            children: (0, ng.jsx)(`span`, { className: `tabular-nums`, children: Mh(e, i) }),
          },
          e,
        ),
      )),
      (t[11] = i),
      (t[12] = r),
      (t[13] = n),
      (t[14] = u))
    : (u = t[14]);
  let d;
  t[15] === u
    ? (d = t[16])
    : ((d = (0, ng.jsx)(g.Section, {
        className: `vertical-scroll-fade-mask flex flex-col [--edge-fade-distance:1.5rem]`,
        children: u,
      })),
      (t[15] = u),
      (t[16] = d));
  let f;
  return (
    t[17] !== l || t[18] !== d
      ? ((f = (0, ng.jsx)(y, {
          align: `end`,
          contentMaxHeight: `tall`,
          contentWidth: `sm`,
          triggerButton: l,
          children: d,
        })),
        (t[17] = l),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
var tg,
  ng,
  rg = e(() => {
    ((tg = be()), ne(), Uh(), r(), D(), _(), je(), (ng = A()));
  });
function ig(e) {
  let t = (0, ag.c)(16),
    { ariaLabel: n, options: r, selectedId: i, selectedLabel: a, onSelect: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (0, og.jsx)(`span`, { className: `truncate text-default`, children: a })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, og.jsx)(Oe, { className: `icon-2xs shrink-0 text-tertiary` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n || t[4] !== s
    ? ((l = (0, og.jsxs)(ye, {
        "aria-label": n,
        className: `max-w-full min-w-0 !text-base`,
        color: `ghost`,
        size: `composerSm`,
        children: [s, c],
      })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  if (t[6] !== o || t[7] !== r || t[8] !== i) {
    let e;
    (t[10] !== o || t[11] !== i
      ? ((e = (e) =>
          (0, og.jsx)(
            g.Item,
            {
              RightIcon: e.id === i ? Te : void 0,
              onSelect: () => {
                o(e.id);
              },
              children: e.label,
            },
            e.id,
          )),
        (t[10] = o),
        (t[11] = i),
        (t[12] = e))
      : (e = t[12]),
      (u = r.map(e)),
      (t[6] = o),
      (t[7] = r),
      (t[8] = i),
      (t[9] = u));
  } else u = t[9];
  let d;
  return (
    t[13] !== l || t[14] !== u
      ? ((d = (0, og.jsx)(y, { align: `end`, contentWidth: `sm`, triggerButton: l, children: u })),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
var ag,
  og,
  sg = e(() => {
    ((ag = be()), r(), D(), _(), je(), (og = A()));
  });
function cg(e) {
  let t = (0, lg.c)(39),
    { value: n, onChange: r } = e,
    i = w(),
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  if (t[0] !== i || t[1] !== n) {
    let e;
    t[12] === n ? (e = t[13]) : ((e = (e) => n.includes(e.id)), (t[12] = n), (t[13] = e));
    let r;
    t[14] === i
      ? (r = t[15])
      : ((r = (e) => i.formatMessage(e.labelMessage)), (t[14] = i), (t[15] = r));
    let h = Hh.filter(e).map(r);
    ((o = y),
      (p = `end`),
      (m = `sm`),
      (a = ye),
      t[16] === i
        ? (l = t[17])
        : ((l = i.formatMessage({
            id: `inbox.automations.customWeekdays.ariaLabel`,
            defaultMessage: `Days of the week`,
            description: `Accessible label for the custom schedule weekdays selector`,
          })),
          (t[16] = i),
          (t[17] = l)),
      (u = `max-w-full min-w-0 !text-base`),
      (d = `ghost`),
      (f = `composerSm`),
      (s = `truncate text-default`),
      (c = i.formatList(h, { type: `conjunction` })),
      (t[0] = i),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m));
  } else
    ((a = t[2]),
      (o = t[3]),
      (s = t[4]),
      (c = t[5]),
      (l = t[6]),
      (u = t[7]),
      (d = t[8]),
      (f = t[9]),
      (p = t[10]),
      (m = t[11]));
  let h;
  t[18] !== s || t[19] !== c
    ? ((h = (0, ug.jsx)(`span`, { className: s, children: c })),
      (t[18] = s),
      (t[19] = c),
      (t[20] = h))
    : (h = t[20]);
  let _;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, ug.jsx)(Oe, { className: `icon-2xs shrink-0 text-tertiary` })), (t[21] = _))
    : (_ = t[21]);
  let v;
  t[22] !== a || t[23] !== l || t[24] !== u || t[25] !== d || t[26] !== f || t[27] !== h
    ? ((v = (0, ug.jsxs)(a, {
        "aria-label": l,
        className: u,
        color: d,
        size: f,
        children: [h, _],
      })),
      (t[22] = a),
      (t[23] = l),
      (t[24] = u),
      (t[25] = d),
      (t[26] = f),
      (t[27] = h),
      (t[28] = v))
    : (v = t[28]);
  let b;
  t[29] !== i || t[30] !== r || t[31] !== n
    ? ((b = Hh.map((e) => {
        let t = n.includes(e.id);
        return (0, ug.jsx)(
          g.CheckboxItem,
          {
            checked: t,
            onCheckedChange: (t) => {
              let i = t === !0 ? [...n, e.id] : n.filter((t) => t !== e.id);
              i.length > 0 && r(i);
            },
            children: i.formatMessage(e.labelMessage),
          },
          e.id,
        );
      })),
      (t[29] = i),
      (t[30] = r),
      (t[31] = n),
      (t[32] = b))
    : (b = t[32]);
  let x;
  return (
    t[33] !== o || t[34] !== v || t[35] !== b || t[36] !== p || t[37] !== m
      ? ((x = (0, ug.jsx)(o, { align: p, contentWidth: m, triggerButton: v, children: b })),
        (t[33] = o),
        (t[34] = v),
        (t[35] = b),
        (t[36] = p),
        (t[37] = m),
        (t[38] = x))
      : (x = t[38]),
    x
  );
}
var lg,
  ug,
  dg = e(() => {
    ((lg = be()), ne(), Uh(), r(), D(), je(), (ug = A()));
  });
function fg(e) {
  let t = (0, pg.c)(10),
    { actions: n, children: r, title: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, mg.jsx)(`span`, { className: `opacity-75`, children: i })), (t[0] = i), (t[1] = a));
  let o;
  t[2] !== n || t[3] !== a
    ? ((o = (0, mg.jsxs)(`div`, {
        className: `flex h-8 shrink-0 items-center justify-between gap-2 px-1 text-base text-tertiary`,
        children: [a, n],
      })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] === r
    ? (s = t[6])
    : ((s = (0, mg.jsx)(`div`, { className: `flex min-h-0 flex-col`, children: r })),
      (t[5] = r),
      (t[6] = s));
  let c;
  return (
    t[7] !== o || t[8] !== s
      ? ((c = (0, mg.jsxs)(`section`, { className: `flex min-h-0 flex-col`, children: [o, s] })),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c))
      : (c = t[9]),
    c
  );
}
var pg,
  mg,
  hg = e(() => {
    ((pg = be()), (mg = A()));
  });
function gg(e) {
  let t = (0, yg.c)(119),
    {
      afterScheduleRows: n,
      scheduleConfig: r,
      intervalStyle: i,
      scheduleSource: a,
      timeZone: l,
      onUpdateScheduleDraft: u,
    } = e,
    d = w(),
    [f, p] = (0, bg.useState)(!1),
    [m, h] = (0, bg.useState)(``),
    g = i === `heartbeat`,
    _ = g ? Bh : Rh;
  a === `cloud` && (_ = zh);
  let y, b, x, S, C, T, te, E, ne, re, ie, se, D, O;
  if (
    t[0] !== d ||
    t[1] !== g ||
    t[2] !== u ||
    t[3] !== m ||
    t[4] !== r ||
    t[5] !== _ ||
    t[6] !== a ||
    t[7] !== l
  ) {
    let e = _.find((e) => e.id === r.mode) ?? _[0],
      n = r.weekdays[0] ?? Hh[0].id;
    C = r.monthDay ?? 1;
    let i = Hh.find((e) => e.id === n) ?? Hh[0];
    T =
      r.oneTimeDate != null ||
      r.mode === `daily` ||
      r.mode === `weekdays` ||
      r.mode === `weekly` ||
      r.mode === `monthly`;
    let s;
    (t[22] !== r.customRrule || t[23] !== r.mode
      ? ((s = r.mode === `custom` ? o(r.customRrule) : null),
        (t[22] = r.customRrule),
        (t[23] = r.mode),
        (t[24] = s))
      : (s = t[24]),
      (x = s));
    let f;
    (t[25] !== m || t[26] !== r
      ? ((f = ee({ ...r, mode: `custom`, customRrule: m })), (t[25] = m), (t[26] = r), (t[27] = f))
      : (f = t[27]),
      (S = f));
    let v;
    (t[28] !== u || t[29] !== r
      ? ((v = (e) => {
          u({ ...r, ...e });
        }),
        (t[28] = u),
        (t[29] = r),
        (t[30] = v))
      : (v = t[30]),
      (O = v));
    let w;
    (t[31] !== x || t[32] !== O
      ? ((w = (e) => {
          x != null && O({ customRrule: Me({ ...x, ...e }) });
        }),
        (t[31] = x),
        (t[32] = O),
        (t[33] = w))
      : (w = t[33]),
      (D = w),
      (b = fg),
      t[34] !== d || t[35] !== r.customRrule || t[36] !== r.mode
        ? ((ie =
            r.mode === `custom`
              ? (0, Q.jsx)(ye, {
                  "aria-label": d.formatMessage({
                    id: `inbox.automations.scheduleRule.open`,
                    defaultMessage: `Edit schedule rule`,
                    description: `Accessible label for opening the custom schedule RRULE dialog`,
                  }),
                  className: `h-7 w-7 rounded-md !p-1 text-default opacity-75 hover:opacity-100`,
                  color: `ghostActive`,
                  size: `icon`,
                  onClick: () => {
                    (h(r.customRrule), p(!0));
                  },
                  children: (0, Q.jsx)(pe, { asset: Ue }),
                })
              : null),
          (t[34] = d),
          (t[35] = r.customRrule),
          (t[36] = r.mode),
          (t[37] = ie))
        : (ie = t[37]),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((se = (0, Q.jsx)(c, {
            id: `inbox.automations.frequency`,
            defaultMessage: `Frequency`,
            description: `Section label above scheduled task frequency controls`,
          })),
          (t[38] = se))
        : (se = t[38]),
      (y = ae),
      (te =
        r.oneTimeDate == null
          ? (0, Q.jsx)(M, {
              control: (0, Q.jsx)(ig, {
                ariaLabel: d.formatMessage({
                  id: `settings.automations.scheduleModeLabel`,
                  defaultMessage: `Repeat schedule`,
                  description: `Aria label for schedule type dropdown`,
                }),
                options: _.map((e) => ({ id: e.id, label: d.formatMessage(e.labelMessage) })),
                selectedId: r.mode,
                selectedLabel: d.formatMessage(e.labelMessage),
                onSelect: (e) => {
                  u(Ae(r, e));
                },
              }),
              label: d.formatMessage({
                id: `inbox.automations.repeat.label`,
                defaultMessage: `Repeat`,
                description: `Label for the scheduled task repeat mode row`,
              }),
              variant: `nested`,
            })
          : (0, Q.jsx)(M, {
              control: (0, Q.jsx)(vg, {
                ariaLabel: d.formatMessage({
                  id: `inbox.automations.oneTimeDate.ariaLabel`,
                  defaultMessage: `Scheduled date`,
                  description: `Accessible label for choosing the date of a one-time cloud scheduled task`,
                }),
                timeZone: l,
                value: r.oneTimeDate,
                onChange: (e) => {
                  O({ oneTimeDate: e });
                },
              }),
              label: d.formatMessage({
                id: `inbox.automations.oneTimeDate.label`,
                defaultMessage: `Date`,
                description: `Label for the date of a one-time scheduled task`,
              }),
              variant: `nested`,
            })),
      t[39] !== d || t[40] !== g || t[41] !== r.intervalMinutes || t[42] !== r.mode || t[43] !== O
        ? ((E =
            g && r.mode === `hourly`
              ? (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(Yh, {
                    ariaLabel: d.formatMessage({
                      id: `settings.automations.scheduleIntervalMinutes`,
                      defaultMessage: `Interval minutes`,
                      description: `Accessible label for the heartbeat interval minutes input`,
                    }),
                    max: 999,
                    min: 1,
                    suffix:
                      r.intervalMinutes === 1
                        ? d.formatMessage({
                            id: `settings.automations.scheduleIntervalMinuteSuffix`,
                            defaultMessage: `minute`,
                            description: `Singular suffix label for the heartbeat automation interval minutes input`,
                          })
                        : d.formatMessage({
                            id: `settings.automations.scheduleIntervalMinutesSuffix`,
                            defaultMessage: `minutes`,
                            description: `Plural suffix label for the heartbeat automation interval minutes input`,
                          }),
                    value: r.intervalMinutes ?? 30,
                    onChange: (e) => {
                      O({ intervalMinutes: e });
                    },
                  }),
                  label: d.formatMessage({
                    id: `settings.automations.scheduleIntervalLabel`,
                    defaultMessage: `Every`,
                    description: `Label for the automation interval input`,
                  }),
                  variant: `nested`,
                })
              : null),
          (t[39] = d),
          (t[40] = g),
          (t[41] = r.intervalMinutes),
          (t[42] = r.mode),
          (t[43] = O),
          (t[44] = E))
        : (E = t[44]),
      t[45] !== d || t[46] !== r.intervalHours || t[47] !== r.mode || t[48] !== a || t[49] !== O
        ? ((ne =
            a === `cloud` && r.mode === `hourly`
              ? (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(Yh, {
                    ariaLabel: d.formatMessage({
                      id: `inbox.automations.customInterval.ariaLabel`,
                      defaultMessage: `Repeat interval`,
                      description: `Accessible label for the custom schedule interval input`,
                    }),
                    max: 23,
                    min: 1,
                    suffix: d.formatMessage($.hourlyUnit, { count: r.intervalHours }),
                    value: r.intervalHours,
                    onChange: (e) => {
                      O({ intervalHours: e });
                    },
                  }),
                  label: d.formatMessage({
                    id: `settings.automations.scheduleIntervalLabel`,
                    defaultMessage: `Every`,
                    description: `Label for the automation interval input`,
                  }),
                  variant: `nested`,
                })
              : null),
          (t[45] = d),
          (t[46] = r.intervalHours),
          (t[47] = r.mode),
          (t[48] = a),
          (t[49] = O),
          (t[50] = ne))
        : (ne = t[50]),
      (re =
        r.mode === `weekly`
          ? (0, Q.jsx)(M, {
              control:
                a === `cloud` || r.weekdays.length > 1
                  ? (0, Q.jsx)(cg, {
                      value: r.weekdays,
                      onChange: (e) => {
                        O({ weekdays: e });
                      },
                    })
                  : (0, Q.jsx)(ig, {
                      ariaLabel: d.formatMessage({
                        id: `inbox.automations.scheduleWeekday.ariaLabel`,
                        defaultMessage: `Day of the week`,
                        description: `Accessible label for the weekly automation day selector`,
                      }),
                      options: Hh.map((e) => ({
                        id: e.id,
                        label: d.formatMessage(e.longLabelMessage),
                      })),
                      selectedId: i.id,
                      selectedLabel: d.formatMessage(i.longLabelMessage),
                      onSelect: (e) => {
                        O({ weekdays: [e] });
                      },
                    }),
              label: d.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              labelSizing: `content`,
              variant: `nested`,
            })
          : null),
      (t[0] = d),
      (t[1] = g),
      (t[2] = u),
      (t[3] = m),
      (t[4] = r),
      (t[5] = _),
      (t[6] = a),
      (t[7] = l),
      (t[8] = y),
      (t[9] = b),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = T),
      (t[14] = te),
      (t[15] = E),
      (t[16] = ne),
      (t[17] = re),
      (t[18] = ie),
      (t[19] = se),
      (t[20] = D),
      (t[21] = O));
  } else
    ((y = t[8]),
      (b = t[9]),
      (x = t[10]),
      (S = t[11]),
      (C = t[12]),
      (T = t[13]),
      (te = t[14]),
      (E = t[15]),
      (ne = t[16]),
      (re = t[17]),
      (ie = t[18]),
      (se = t[19]),
      (D = t[20]),
      (O = t[21]));
  let k;
  t[51] !== d || t[52] !== r.mode || t[53] !== C || t[54] !== O
    ? ((k =
        r.mode === `monthly`
          ? (0, Q.jsx)(M, {
              control: (0, Q.jsx)(ig, {
                ariaLabel: d.formatMessage({
                  id: `inbox.automations.monthDay.ariaLabel`,
                  defaultMessage: `Day of the month`,
                  description: `Accessible label for the monthly scheduled task day-of-month selector`,
                }),
                options: Vh.map(_g),
                selectedId: String(C),
                selectedLabel: String(C),
                onSelect: (e) => {
                  O({ monthDay: Number(e) });
                },
              }),
              label: d.formatMessage({
                id: `inbox.automations.day.label`,
                defaultMessage: `On`,
                description: `Label for the scheduled task weekday row`,
              }),
              variant: `nested`,
            })
          : null),
      (t[51] = d),
      (t[52] = r.mode),
      (t[53] = C),
      (t[54] = O),
      (t[55] = k))
    : (k = t[55]);
  let ue;
  t[56] !== d || t[57] !== r.time || t[58] !== T || t[59] !== O
    ? ((ue = T
        ? (0, Q.jsx)(M, {
            control: (0, Q.jsx)(eg, {
              value: r.time,
              onChange: (e) => {
                O({ time: e });
              },
            }),
            label: d.formatMessage({
              id: `inbox.automations.time.label`,
              defaultMessage: `At`,
              description: `Label for the scheduled task time row`,
            }),
            variant: `nested`,
          })
        : null),
      (t[56] = d),
      (t[57] = r.time),
      (t[58] = T),
      (t[59] = O),
      (t[60] = ue))
    : (ue = t[60]);
  let de;
  t[61] !== x || t[62] !== d || t[63] !== D
    ? ((de =
        x == null
          ? null
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(ig, {
                    ariaLabel: d.formatMessage({
                      id: `inbox.automations.customFrequency.ariaLabel`,
                      defaultMessage: `Repeat frequency`,
                      description: `Accessible label for the custom scheduled task frequency selector`,
                    }),
                    options: xg.map((e) => ({ id: e, label: d.formatMessage(Cg[e]) })),
                    selectedId: x.frequency,
                    selectedLabel: d.formatMessage(Cg[x.frequency]),
                    onSelect: (e) => {
                      D({ frequency: e });
                    },
                  }),
                  label: d.formatMessage({
                    id: `inbox.automations.customFrequency.label`,
                    defaultMessage: `Repeats`,
                    description: `Label for the custom schedule frequency row`,
                  }),
                  variant: `nested`,
                }),
                (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(Yh, {
                    ariaLabel: d.formatMessage({
                      id: `inbox.automations.customInterval.ariaLabel`,
                      defaultMessage: `Repeat interval`,
                      description: `Accessible label for the custom schedule interval input`,
                    }),
                    max: 999,
                    min: 1,
                    suffix: d.formatMessage(wg[x.frequency], { count: x.interval }),
                    value: x.interval,
                    onChange: (e) => {
                      D({ interval: e });
                    },
                  }),
                  label: d.formatMessage({
                    id: `inbox.automations.customInterval.label`,
                    defaultMessage: `Every`,
                    description: `Label for the custom schedule interval row`,
                  }),
                  variant: `nested`,
                }),
                x.frequency === `weekly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(cg, {
                        value: x.weekdays,
                        onChange: (e) => {
                          D({ weekdays: e });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.customWeekdays.label`,
                        defaultMessage: `On`,
                        description: `Label for the custom schedule weekdays row`,
                      }),
                      labelSizing: `content`,
                      variant: `nested`,
                    })
                  : null,
                x.frequency === `yearly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(ig, {
                        ariaLabel: d.formatMessage({
                          id: `inbox.automations.customMonth.ariaLabel`,
                          defaultMessage: `Month`,
                          description: `Accessible label for the custom schedule month selector`,
                        }),
                        options: Sg.map((e) => ({
                          id: String(e),
                          label: d.formatDate(new Date(2024, e - 1, 1), { month: `long` }),
                        })),
                        selectedId: String(x.month),
                        selectedLabel: d.formatDate(new Date(2024, x.month - 1, 1), {
                          month: `long`,
                        }),
                        onSelect: (e) => {
                          D({ month: Number(e) });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.customMonth.label`,
                        defaultMessage: `In`,
                        description: `Label for the custom schedule month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                x.frequency === `monthly` || x.frequency === `yearly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Wh, {
                        value: x.monthDays,
                        onChange: (e) => {
                          D({ monthDays: e });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.customMonthDay.label`,
                        defaultMessage: `On days`,
                        description: `Label for the custom schedule days of month row`,
                      }),
                      variant: `nested`,
                    })
                  : null,
                x.frequency === `hourly`
                  ? (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(Yh, {
                        ariaLabel: d.formatMessage({
                          id: `inbox.automations.customMinute.ariaLabel`,
                          defaultMessage: `Minute past the hour`,
                          description: `Accessible label for the custom hourly schedule minute input`,
                        }),
                        max: 59,
                        min: 0,
                        value: x.minute,
                        onChange: (e) => {
                          D({ minute: e });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.customMinute.label`,
                        defaultMessage: `At minute`,
                        description: `Label for the custom hourly schedule minute row`,
                      }),
                      variant: `nested`,
                    })
                  : (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(eg, {
                        value: x.time,
                        onChange: (e) => {
                          D({ time: e });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.time.label`,
                        defaultMessage: `At`,
                        description: `Label for the scheduled task time row`,
                      }),
                      variant: `nested`,
                    }),
              ],
            })),
      (t[61] = x),
      (t[62] = d),
      (t[63] = D),
      (t[64] = de))
    : (de = t[64]);
  let fe;
  t[65] !== y ||
  t[66] !== n ||
  t[67] !== te ||
  t[68] !== E ||
  t[69] !== ne ||
  t[70] !== re ||
  t[71] !== k ||
  t[72] !== ue ||
  t[73] !== de
    ? ((fe = (0, Q.jsxs)(y, { children: [te, E, ne, re, k, ue, de, n] })),
      (t[65] = y),
      (t[66] = n),
      (t[67] = te),
      (t[68] = E),
      (t[69] = ne),
      (t[70] = re),
      (t[71] = k),
      (t[72] = ue),
      (t[73] = de),
      (t[74] = fe))
    : (fe = t[74]);
  let A;
  t[75] !== d ||
  t[76] !== r.oneTimeDate ||
  t[77] !== r.untilDate ||
  t[78] !== a ||
  t[79] !== l ||
  t[80] !== O
    ? ((A =
        a === `cloud` && r.oneTimeDate == null
          ? (0, Q.jsxs)(ae, {
              className: `mt-2`,
              children: [
                (0, Q.jsx)(M, {
                  control: (0, Q.jsx)(ig, {
                    ariaLabel: d.formatMessage({
                      id: `inbox.automations.endRepeat.ariaLabel`,
                      defaultMessage: `End repeat`,
                      description: `Accessible label for choosing when a cloud scheduled task stops repeating`,
                    }),
                    options: [
                      { id: `never`, label: d.formatMessage($.endRepeatNever) },
                      { id: `on-date`, label: d.formatMessage($.endRepeatOnDate) },
                    ],
                    selectedId: r.untilDate == null ? `never` : `on-date`,
                    selectedLabel: d.formatMessage(
                      r.untilDate == null ? $.endRepeatNever : $.endRepeatOnDate,
                    ),
                    onSelect: (e) => {
                      if (e === `never`) {
                        O({ untilDate: void 0 });
                        return;
                      }
                      let t = new Date();
                      (t.setMonth(t.getMonth() + 1),
                        O({
                          untilDate: new Intl.DateTimeFormat(`en-CA`, {
                            timeZone: l,
                            year: `numeric`,
                            month: `2-digit`,
                            day: `2-digit`,
                          }).format(t),
                        }));
                    },
                  }),
                  label: d.formatMessage({
                    id: `inbox.automations.endRepeat.label`,
                    defaultMessage: `End repeat`,
                    description: `Label for choosing when a cloud scheduled task stops repeating`,
                  }),
                  variant: `nested`,
                }),
                r.untilDate == null
                  ? null
                  : (0, Q.jsx)(M, {
                      control: (0, Q.jsx)(vg, {
                        ariaLabel: d.formatMessage({
                          id: `inbox.automations.endRepeatDate.ariaLabel`,
                          defaultMessage: `End date`,
                          description: `Accessible label for the date when a cloud scheduled task stops repeating`,
                        }),
                        timeZone: l,
                        value: r.untilDate,
                        onChange: (e) => {
                          O({ untilDate: e });
                        },
                      }),
                      label: d.formatMessage({
                        id: `inbox.automations.endRepeatDate.label`,
                        defaultMessage: `Date`,
                        description: `Label for the date when a cloud scheduled task stops repeating`,
                      }),
                      variant: `nested`,
                    }),
              ],
            })
          : null),
      (t[75] = d),
      (t[76] = r.oneTimeDate),
      (t[77] = r.untilDate),
      (t[78] = a),
      (t[79] = l),
      (t[80] = O),
      (t[81] = A))
    : (A = t[81]);
  let me;
  t[82] !== S || t[83] !== m || t[84] !== O
    ? ((me = (e) => {
        (e.preventDefault(), S && (O({ customRrule: m }), p(!1)));
      }),
      (t[82] = S),
      (t[83] = m),
      (t[84] = O),
      (t[85] = me))
    : (me = t[85]);
  let he;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(Ee, {
        className: `contents`,
        children: (0, Q.jsx)(c, {
          id: `inbox.automations.scheduleRule.title`,
          defaultMessage: `Edit schedule rule`,
          description: `Title of the custom schedule RRULE dialog`,
        }),
      })),
      (t[86] = he))
    : (he = t[86]);
  let ge;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = (0, Q.jsx)(le, {
        children: (0, Q.jsx)(oe, {
          title: he,
          subtitle: (0, Q.jsx)(Ce, {
            className: `contents`,
            children: (0, Q.jsx)(c, {
              id: `inbox.automations.scheduleRule.description`,
              defaultMessage: `Use an RRULE to define a custom schedule`,
              description: `Description of the custom schedule RRULE dialog`,
            }),
          }),
        }),
      })),
      (t[87] = ge))
    : (ge = t[87]);
  let _e;
  t[88] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, Q.jsx)(`span`, {
        className: `text-sm font-medium text-default`,
        children: (0, Q.jsx)(c, {
          id: `inbox.automations.scheduleRule.inputLabel`,
          defaultMessage: `RRULE`,
          description: `Label for the custom schedule RRULE input`,
        }),
      })),
      (t[88] = _e))
    : (_e = t[88]);
  let ve = !S,
    be;
  t[89] === d
    ? (be = t[90])
    : ((be = d.formatMessage({
        id: `settings.automations.scheduleCustomPlaceholder`,
        defaultMessage: `RRULE:FREQ=MONTHLY;BYMONTHDAY=1;BYHOUR=9;BYMINUTE=0`,
        description: `Placeholder text for the custom automation RRULE editor`,
      })),
      (t[89] = d),
      (t[90] = be));
  let xe;
  t[91] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = (e) => {
        h(e.currentTarget.value);
      }),
      (t[91] = xe))
    : (xe = t[91]);
  let j;
  t[92] !== m || t[93] !== ve || t[94] !== be
    ? ((j = (0, Q.jsx)(s, {
        variant: `code`,
        autoFocus: !0,
        "aria-invalid": ve,
        placeholder: be,
        spellCheck: !1,
        value: m,
        onChange: xe,
      })),
      (t[92] = m),
      (t[93] = ve),
      (t[94] = be),
      (t[95] = j))
    : (j = t[95]);
  let Se;
  t[96] === S
    ? (Se = t[97])
    : ((Se = S
        ? null
        : (0, Q.jsx)(`span`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, Q.jsx)(c, {
              id: `inbox.automations.scheduleRule.invalid`,
              defaultMessage: `Enter a valid RRULE`,
              description: `Validation error shown for an invalid custom schedule RRULE`,
            }),
          })),
      (t[96] = S),
      (t[97] = Se));
  let we;
  t[98] !== j || t[99] !== Se
    ? ((we = (0, Q.jsx)(le, {
        children: (0, Q.jsxs)(`label`, { className: `flex flex-col gap-2`, children: [_e, j, Se] }),
      })),
      (t[98] = j),
      (t[99] = Se),
      (t[100] = we))
    : (we = t[100]);
  let Te;
  t[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = (0, Q.jsx)(ye, {
        color: `ghost`,
        type: `button`,
        onClick: () => {
          p(!1);
        },
        children: (0, Q.jsx)(c, {
          id: `inbox.automations.scheduleRule.cancel`,
          defaultMessage: `Cancel`,
          description: `Button label for closing the schedule rule dialog without saving`,
        }),
      })),
      (t[101] = Te))
    : (Te = t[101]);
  let Oe = !S,
    ke;
  t[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, Q.jsx)(c, {
        id: `inbox.automations.scheduleRule.save`,
        defaultMessage: `Save`,
        description: `Button label for saving a custom schedule RRULE`,
      })),
      (t[102] = ke))
    : (ke = t[102]);
  let je;
  t[103] === Oe
    ? (je = t[104])
    : ((je = (0, Q.jsx)(le, {
        children: (0, Q.jsxs)(ce, {
          children: [Te, (0, Q.jsx)(ye, { disabled: Oe, type: `submit`, children: ke })],
        }),
      })),
      (t[103] = Oe),
      (t[104] = je));
  let Ne;
  t[105] !== me || t[106] !== we || t[107] !== je
    ? ((Ne = (0, Q.jsxs)(v, { as: `form`, onSubmit: me, children: [ge, we, je] })),
      (t[105] = me),
      (t[106] = we),
      (t[107] = je),
      (t[108] = Ne))
    : (Ne = t[108]);
  let Pe;
  t[109] !== f || t[110] !== Ne
    ? ((Pe = (0, Q.jsx)(De, { open: f, size: `compact`, onOpenChange: p, children: Ne })),
      (t[109] = f),
      (t[110] = Ne),
      (t[111] = Pe))
    : (Pe = t[111]);
  let Fe;
  return (
    t[112] !== b || t[113] !== fe || t[114] !== A || t[115] !== Pe || t[116] !== ie || t[117] !== se
      ? ((Fe = (0, Q.jsxs)(b, { actions: ie, title: se, children: [fe, A, Pe] })),
        (t[112] = b),
        (t[113] = fe),
        (t[114] = A),
        (t[115] = Pe),
        (t[116] = ie),
        (t[117] = se),
        (t[118] = Fe))
      : (Fe = t[118]),
    Fe
  );
}
function _g(e) {
  return { id: String(e), label: String(e) };
}
function vg(e) {
  let t = (0, yg.c)(16),
    { ariaLabel: n, timeZone: r, value: i, onChange: a } = e,
    o = (0, bg.useId)(),
    s;
  t[0] === r
    ? (s = t[1])
    : ((s = new Intl.DateTimeFormat(`en-CA`, {
        timeZone: r,
        year: `numeric`,
        month: `2-digit`,
        day: `2-digit`,
      }).format(new Date())),
      (t[0] = r),
      (t[1] = s));
  let c = `${s}T00:00:00`,
    l;
  t[2] === c ? (l = t[3]) : ((l = new Date(c)), (t[2] = c), (t[3] = l));
  let u = `${i}T00:00:00`,
    d;
  t[4] === u ? (d = t[5]) : ((d = new Date(u)), (t[4] = u), (t[5] = d));
  let f;
  t[6] === a
    ? (f = t[7])
    : ((f = (e) => {
        e != null &&
          a(
            new Intl.DateTimeFormat(`en-CA`, {
              year: `numeric`,
              month: `2-digit`,
              day: `2-digit`,
            }).format(e),
          );
      }),
      (t[6] = a),
      (t[7] = f));
  let p;
  t[8] !== o || t[9] !== l || t[10] !== d || t[11] !== f
    ? ((p = (0, Q.jsx)(kh, {
        id: o,
        align: `end`,
        dropdownIconType: `chevronDown`,
        min: l,
        size: `sm`,
        triggerDateFormat: `MMM d, yyyy`,
        triggerShowIcon: !1,
        value: d,
        valueType: `date`,
        variant: `ghost`,
        onChange: f,
      })),
      (t[8] = o),
      (t[9] = l),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  return (
    t[13] !== n || t[14] !== p
      ? ((m = (0, Q.jsx)(`div`, {
          "aria-label": n,
          className: `text-base`,
          role: `group`,
          children: p,
        })),
        (t[13] = n),
        (t[14] = p),
        (t[15] = m))
      : (m = t[15]),
    m
  );
}
var yg,
  bg,
  Q,
  xg,
  Sg,
  $,
  Cg,
  wg,
  Tg = e(() => {
    ((yg = be()),
      Le(),
      jh(),
      (bg = t(i(), 1)),
      ne(),
      l(),
      Jh(),
      $h(),
      Uh(),
      rg(),
      sg(),
      dg(),
      hg(),
      r(),
      ge(),
      ue(),
      de(),
      re(),
      se(),
      p(),
      (Q = A()),
      (xg = [`hourly`, `daily`, `weekly`, `monthly`, `yearly`]),
      (Sg = Array.from({ length: 12 }, (e, t) => t + 1)),
      ($ = ke({
        endRepeatNever: {
          id: `inbox.automations.endRepeat.never`,
          defaultMessage: `Never`,
          description: `Dropdown option indicating that a cloud scheduled task repeats indefinitely`,
        },
        endRepeatOnDate: {
          id: `inbox.automations.endRepeat.onDate`,
          defaultMessage: `On date`,
          description: `Dropdown option indicating that a cloud scheduled task stops repeating on a selected date`,
        },
        hourly: {
          id: `inbox.automations.customFrequency.hourly`,
          defaultMessage: `Hourly`,
          description: `Custom scheduled task frequency option for hours`,
        },
        daily: {
          id: `inbox.automations.customFrequency.daily`,
          defaultMessage: `Daily`,
          description: `Custom scheduled task frequency option for days`,
        },
        weekly: {
          id: `inbox.automations.customFrequency.weekly`,
          defaultMessage: `Weekly`,
          description: `Custom scheduled task frequency option for weeks`,
        },
        monthly: {
          id: `inbox.automations.customFrequency.monthly`,
          defaultMessage: `Monthly`,
          description: `Custom scheduled task frequency option for months`,
        },
        yearly: {
          id: `inbox.automations.customFrequency.yearly`,
          defaultMessage: `Yearly`,
          description: `Custom scheduled task frequency option for years`,
        },
        hourlyUnit: {
          id: `inbox.automations.customFrequencyUnit.hours`,
          defaultMessage: `{count, plural, one {hour} other {hours}}`,
          description: `Unit shown after a custom hourly schedule interval`,
        },
        dailyUnit: {
          id: `inbox.automations.customFrequencyUnit.days`,
          defaultMessage: `{count, plural, one {day} other {days}}`,
          description: `Unit shown after a custom daily schedule interval`,
        },
        weeklyUnit: {
          id: `inbox.automations.customFrequencyUnit.weeks`,
          defaultMessage: `{count, plural, one {week} other {weeks}}`,
          description: `Unit shown after a custom weekly schedule interval`,
        },
        monthlyUnit: {
          id: `inbox.automations.customFrequencyUnit.months`,
          defaultMessage: `{count, plural, one {month} other {months}}`,
          description: `Unit shown after a custom monthly schedule interval`,
        },
        yearlyUnit: {
          id: `inbox.automations.customFrequencyUnit.years`,
          defaultMessage: `{count, plural, one {year} other {years}}`,
          description: `Unit shown after a custom yearly schedule interval`,
        },
      })),
      (Cg = {
        hourly: $.hourly,
        daily: $.daily,
        weekly: $.weekly,
        monthly: $.monthly,
        yearly: $.yearly,
      }),
      (wg = {
        hourly: $.hourlyUnit,
        daily: $.dailyUnit,
        weekly: $.weeklyUnit,
        monthly: $.monthlyUnit,
        yearly: $.yearlyUnit,
      }));
  });
export { ig as a, Hh as c, hg as i, Mh as l, Tg as n, sg as o, fg as r, Rh as s, gg as t, Uh as u };
//# sourceMappingURL=automation-frequency-section-49a6d0cc31da.js.map
