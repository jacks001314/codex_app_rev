var e = Object.create,
  t = Object.defineProperty,
  n = Object.getOwnPropertyDescriptor,
  r = Object.getOwnPropertyNames,
  i = Object.getPrototypeOf,
  a = Object.prototype.hasOwnProperty,
  o = (e, t, n) => () => {
    if (n) throw n[0];
    try {
      return (e && (t = e((e = 0))), t);
    } catch (e) {
      throw ((n = [e]), e);
    }
  },
  s = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), (e = null)), t.exports),
  c = (e, n) => {
    let r = {};
    for (var i in e) t(r, i, { get: e[i], enumerable: !0 });
    return (n || t(r, Symbol.toStringTag, { value: `Module` }), r);
  },
  l = (e, i, o, s) => {
    if ((i && typeof i == `object`) || typeof i == `function`)
      for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
        ((d = c[l]),
          !a.call(e, d) &&
            d !== o &&
            t(e, d, { get: ((e) => i[e]).bind(null, d), enumerable: !(s = n(i, d)) || s.enumerable }));
    return e;
  },
  u = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, { value: n, enumerable: !0 }) : o,
      n,
    )
  );
let d = require("electron");
function f(e, t, n) {
  function r(n, r) {
    if (
      (n._zod ||
        Object.defineProperty(n, "_zod", { value: { def: r, constr: o, traits: new Set() }, enumerable: !1 }),
      n._zod.traits.has(e))
    )
      return;
    (n._zod.traits.add(e), t(n, r));
    let i = o.prototype,
      a = Object.keys(i);
    for (let e = 0; e < a.length; e++) {
      let t = a[e];
      t in n || (n[t] = i[t].bind(n));
    }
  }
  let i = n?.Parent ?? Object;
  class a extends i {}
  Object.defineProperty(a, "name", { value: e });
  function o(e) {
    var t;
    let i = n?.Parent ? new a() : this;
    (r(i, e), (t = i._zod).deferred ?? (t.deferred = []));
    for (let e of i._zod.deferred) e();
    return i;
  }
  return (
    Object.defineProperty(o, "init", { value: r }),
    Object.defineProperty(o, Symbol.hasInstance, {
      value: (t) => (n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e)),
    }),
    Object.defineProperty(o, "name", { value: e }),
    o
  );
}
function p(e) {
  return (e && Object.assign(_, e), _);
}
var m,
  h,
  g,
  _,
  v = o(() => {
    ((h = class extends Error {
      constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
      }
    }),
      (g = class extends Error {
        constructor(e) {
          (super(`Encountered unidirectional transform during encode: ${e}`), (this.name = `ZodEncodeError`));
        }
      }),
      (m = globalThis).__zod_globalConfig ?? (m.__zod_globalConfig = {}),
      (_ = globalThis.__zod_globalConfig));
  });
function y(e) {
  let t = Object.values(e).filter((e) => typeof e == `number`);
  return Object.entries(e)
    .filter(([e, n]) => t.indexOf(+e) === -1)
    .map(([e, t]) => t);
}
function b(e, t) {
  return typeof t == `bigint` ? t.toString() : t;
}
function x(e) {
  return {
    get value() {
      {
        let t = e();
        return (Object.defineProperty(this, "value", { value: t }), t);
      }
    },
  };
}
function S(e) {
  return e == null;
}
function C(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function w(e, t) {
  let n = e / t,
    r = Math.round(n),
    i = 2 ** -52 * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < i ? 0 : n - r;
}
function T(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== ve) return (r === void 0 && ((r = ve), (r = n())), r);
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function ee(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function te(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function E(e) {
  return JSON.stringify(e);
}
function D(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
function ne(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function re(e) {
  if (ne(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return ne(n) !== !1 && Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) !== !1;
}
function ie(e) {
  return re(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
function O(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function k(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function A(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (delete t.message, typeof t.error == `string` ? { ...t, error: () => t.error } : t);
}
function ae(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`);
}
function j(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0) throw Error(`.pick() cannot be used on object schemas containing refinements`);
  return k(
    e,
    te(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (ee(this, `shape`, e), e);
      },
      checks: [],
    }),
  );
}
function oe(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0) throw Error(`.omit() cannot be used on object schemas containing refinements`);
  return k(
    e,
    te(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (ee(this, `shape`, r), r);
      },
      checks: [],
    }),
  );
}
function M(e, t) {
  if (!re(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return k(
    e,
    te(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (ee(this, `shape`, n), n);
      },
    }),
  );
}
function se(e, t) {
  if (!re(t)) throw Error(`Invalid input to safeExtend: expected a plain object`);
  return k(
    e,
    te(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (ee(this, `shape`, n), n);
      },
    }),
  );
}
function ce(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  return k(
    e,
    te(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (ee(this, `shape`, n), n);
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: t._zod.def.checks ?? [],
    }),
  );
}
function le(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0) throw Error(`.partial() cannot be used on object schemas containing refinements`);
  return k(
    t,
    te(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else for (let t in r) i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (ee(this, `shape`, i), i);
      },
      checks: [],
    }),
  );
}
function ue(e, t, n) {
  return k(
    t,
    te(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else for (let t in r) i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (ee(this, `shape`, i), i);
      },
    }),
  );
}
function de(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function fe(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
  return !1;
}
function pe(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function me(e) {
  return typeof e == `string` ? e : e?.message;
}
function he(e, t, n) {
  let r = e.message
      ? e.message
      : (me(e.inst?._zod.def?.error?.(e)) ??
        me(t?.error?.(e)) ??
        me(n.customError?.(e)) ??
        me(n.localeError?.(e)) ??
        `Invalid input`),
    { inst: i, continue: a, input: o, ...s } = e;
  return ((s.path ??= []), (s.message = r), t?.reportInput && (s.input = o), s);
}
function ge(e) {
  return Array.isArray(e) ? `array` : typeof e == `string` ? `string` : `unknown`;
}
function _e(...e) {
  let [t, n, r] = e;
  return typeof t == `string` ? { message: t, code: `custom`, input: n, inst: r } : { ...t };
}
var ve,
  ye,
  be,
  xe,
  Se,
  Ce = o(() => {
    (v(),
      (ve = Symbol(`evaluating`)),
      (ye = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {}),
      (be = x(() => {
        if (_.jitless || (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`))) return !1;
        try {
          return (Function(``), !0);
        } catch {
          return !1;
        }
      })),
      (xe = new Set([`string`, `number`, `symbol`])),
      (Se = {
        safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      }));
  });
function we(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0 ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i))) : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function Te(e, t = (e) => e.message) {
  let n = { _errors: [] },
    r = (e, i = []) => {
      for (let a of e.issues)
        if (a.code === `invalid_union` && a.errors.length)
          a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
        else if (a.code === `invalid_key`) r({ issues: a.issues }, [...i, ...a.path]);
        else if (a.code === `invalid_element`) r({ issues: a.issues }, [...i, ...a.path]);
        else {
          let e = [...i, ...a.path];
          if (e.length === 0) n._errors.push(t(a));
          else {
            let r = n,
              i = 0;
            for (; i < e.length;) {
              let n = e[i];
              (i === e.length - 1
                ? ((r[n] = r[n] || { _errors: [] }), r[n]._errors.push(t(a)))
                : (r[n] = r[n] || { _errors: [] }),
                (r = r[n]),
                i++);
            }
          }
        }
    };
  return (r(e), n);
}
var Ee,
  De,
  N,
  Oe = o(() => {
    (v(),
      Ce(),
      (Ee = (e, t) => {
        ((e.name = `$ZodError`),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, b, 2)),
          Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
      }),
      (De = f(`$ZodError`, Ee)),
      (N = f(`$ZodError`, Ee, { Parent: Error })));
  }),
  ke,
  P,
  Ae,
  F,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve = o(() => {
    (v(),
      Oe(),
      Ce(),
      (ke = (e) => (t, n, r, i) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new h();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => he(e, a, p())));
          throw (ye(t, i?.callee), t);
        }
        return o.value;
      }),
      (P = (e) => async (t, n, r, i) => {
        let a = r ? { ...r, async: !0 } : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => he(e, a, p())));
          throw (ye(t, i?.callee), t);
        }
        return o.value;
      }),
      (Ae = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new h();
        return a.issues.length
          ? { success: !1, error: new (e ?? De)(a.issues.map((e) => he(e, i, p()))) }
          : { success: !0, data: a.value };
      }),
      (F = Ae(N)),
      (je = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => he(e, i, p()))) }
            : { success: !0, data: a.value }
        );
      }),
      (Me = je(N)),
      (Ne = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return ke(e)(t, n, i);
      }),
      (Pe = (e) => (t, n, r) => ke(e)(t, n, r)),
      (Fe = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return P(e)(t, n, i);
      }),
      (Ie = (e) => async (t, n, r) => P(e)(t, n, r)),
      (Le = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ae(e)(t, n, i);
      }),
      (Re = (e) => (t, n, r) => Ae(e)(t, n, r)),
      (ze = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return je(e)(t, n, i);
      }),
      (Be = (e) => async (t, n, r) => je(e)(t, n, r)));
  });
function He() {
  return new RegExp(nt, `u`);
}
function Ue(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function We(e) {
  return RegExp(`^${Ue(e)}$`);
}
function Ge(e) {
  let t = Ue({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``), e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${dt}T(?:${r})$`);
}
var Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt = o(() => {
    ((Ke = /^[cC][0-9a-z]{6,}$/),
      (qe = /^[0-9a-z]+$/),
      (Je = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      (Ye = /^[0-9a-vA-V]{20}$/),
      (Xe = /^[A-Za-z0-9]{27}$/),
      (Ze = /^[a-zA-Z0-9_-]{21}$/),
      (Qe = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      ($e = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      (et = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (tt =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (nt = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`),
      (rt =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (it =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (at =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (ot =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (st = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (ct = /^[A-Za-z0-9_-]*$/),
      (lt = /^https?$/),
      (ut = /^\+[1-9]\d{6,14}$/),
      (dt = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`),
      (ft = RegExp(`^${dt}$`)),
      (pt = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}` : `[\\s\\S]*`;
        return RegExp(`^${t}$`);
      }),
      (mt = /^-?\d+$/),
      (ht = /^-?\d+(?:\.\d+)?$/),
      (gt = /^(?:true|false)$/i),
      (_t = /^null$/i),
      (vt = /^[^A-Z]*$/),
      (yt = /^[^a-z]*$/));
  }),
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  I,
  Ot,
  kt,
  L,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It = o(() => {
    (v(),
      bt(),
      Ce(),
      (xt = f(`$ZodCheck`, (e, t) => {
        var n;
        ((e._zod ??= {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
      })),
      (St = { number: `number`, bigint: `bigint`, object: `date` }),
      (Ct = f(`$ZodCheckLessThan`, (e, t) => {
        xt.init(e, t);
        let n = St[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
          t.value < r && (t.inclusive ? (n.maximum = t.value) : (n.exclusiveMaximum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value <= t.value : r.value < t.value) ||
              r.issues.push({
                origin: n,
                code: `too_big`,
                maximum: typeof t.value == `object` ? t.value.getTime() : t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (wt = f(`$ZodCheckGreaterThan`, (e, t) => {
        xt.init(e, t);
        let n = St[typeof t.value];
        (e._zod.onattach.push((e) => {
          let n = e._zod.bag,
            r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
          t.value > r && (t.inclusive ? (n.minimum = t.value) : (n.exclusiveMinimum = t.value));
        }),
          (e._zod.check = (r) => {
            (t.inclusive ? r.value >= t.value : r.value > t.value) ||
              r.issues.push({
                origin: n,
                code: `too_small`,
                minimum: typeof t.value == `object` ? t.value.getTime() : t.value,
                input: r.value,
                inclusive: t.inclusive,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Tt = f(`$ZodCheckMultipleOf`, (e, t) => {
        (xt.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error(`Cannot mix number and bigint in multiple_of check.`);
            (typeof n.value == `bigint` ? n.value % t.value === BigInt(0) : w(n.value, t.value) === 0) ||
              n.issues.push({
                origin: typeof n.value,
                code: `not_multiple_of`,
                divisor: t.value,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Et = f(`$ZodCheckNumberFormat`, (e, t) => {
        (xt.init(e, t), (t.format = t.format || `float64`));
        let n = t.format?.includes(`int`),
          r = n ? `int` : `number`,
          [i, a] = Se[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = mt));
        }),
          (e._zod.check = (o) => {
            let s = o.value;
            if (n) {
              if (!Number.isInteger(s)) {
                o.issues.push({
                  expected: r,
                  format: t.format,
                  code: `invalid_type`,
                  continue: !1,
                  input: s,
                  inst: e,
                });
                return;
              }
              if (!Number.isSafeInteger(s)) {
                s > 0
                  ? o.issues.push({
                      input: s,
                      code: `too_big`,
                      maximum: 2 ** 53 - 1,
                      note: `Integers must be within the safe integer range.`,
                      inst: e,
                      origin: r,
                      inclusive: !0,
                      continue: !t.abort,
                    })
                  : o.issues.push({
                      input: s,
                      code: `too_small`,
                      minimum: -(2 ** 53 - 1),
                      note: `Integers must be within the safe integer range.`,
                      inst: e,
                      origin: r,
                      inclusive: !0,
                      continue: !t.abort,
                    });
                return;
              }
            }
            (s < i &&
              o.issues.push({
                origin: `number`,
                input: s,
                code: `too_small`,
                minimum: i,
                inclusive: !0,
                inst: e,
                continue: !t.abort,
              }),
              s > a &&
                o.issues.push({
                  origin: `number`,
                  input: s,
                  code: `too_big`,
                  maximum: a,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }));
          }));
      })),
      (Dt = f(`$ZodCheckMaxLength`, (e, t) => {
        var n;
        (xt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !S(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < n && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length <= t.maximum) return;
            let i = ge(r);
            n.issues.push({
              origin: i,
              code: `too_big`,
              maximum: t.maximum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (I = f(`$ZodCheckMinLength`, (e, t) => {
        var n;
        (xt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !S(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > n && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length >= t.minimum) return;
            let i = ge(r);
            n.issues.push({
              origin: i,
              code: `too_small`,
              minimum: t.minimum,
              inclusive: !0,
              input: r,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (Ot = f(`$ZodCheckLengthEquals`, (e, t) => {
        var n;
        (xt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !S(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.length;
            if (i === t.length) return;
            let a = ge(r),
              o = i > t.length;
            n.issues.push({
              origin: a,
              ...(o ? { code: `too_big`, maximum: t.length } : { code: `too_small`, minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (kt = f(`$ZodCheckStringFormat`, (e, t) => {
        var n, r;
        (xt.init(e, t),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.format = t.format), t.pattern && ((n.patterns ??= new Set()), n.patterns.add(t.pattern)));
          }),
          t.pattern
            ? ((n = e._zod).check ??
              (n.check = (n) => {
                ((t.pattern.lastIndex = 0),
                  !t.pattern.test(n.value) &&
                    n.issues.push({
                      origin: `string`,
                      code: `invalid_format`,
                      format: t.format,
                      input: n.value,
                      ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                      inst: e,
                      continue: !t.abort,
                    }));
              }))
            : ((r = e._zod).check ?? (r.check = () => {})));
      })),
      (L = f(`$ZodCheckRegex`, (e, t) => {
        (kt.init(e, t),
          (e._zod.check = (n) => {
            ((t.pattern.lastIndex = 0),
              !t.pattern.test(n.value) &&
                n.issues.push({
                  origin: `string`,
                  code: `invalid_format`,
                  format: `regex`,
                  input: n.value,
                  pattern: t.pattern.toString(),
                  inst: e,
                  continue: !t.abort,
                }));
          }));
      })),
      (At = f(`$ZodCheckLowerCase`, (e, t) => {
        ((t.pattern ??= vt), kt.init(e, t));
      })),
      (jt = f(`$ZodCheckUpperCase`, (e, t) => {
        ((t.pattern ??= yt), kt.init(e, t));
      })),
      (Mt = f(`$ZodCheckIncludes`, (e, t) => {
        xt.init(e, t);
        let n = O(t.includes),
          r = new RegExp(typeof t.position == `number` ? `^.{${t.position}}${n}` : n);
        ((t.pattern = r),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(r));
          }),
          (e._zod.check = (n) => {
            n.value.includes(t.includes, t.position) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `includes`,
                includes: t.includes,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Nt = f(`$ZodCheckStartsWith`, (e, t) => {
        xt.init(e, t);
        let n = RegExp(`^${O(t.prefix)}.*`);
        ((t.pattern ??= n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.startsWith(t.prefix) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `starts_with`,
                prefix: t.prefix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Pt = f(`$ZodCheckEndsWith`, (e, t) => {
        xt.init(e, t);
        let n = RegExp(`.*${O(t.suffix)}$`);
        ((t.pattern ??= n),
          e._zod.onattach.push((e) => {
            let t = e._zod.bag;
            ((t.patterns ??= new Set()), t.patterns.add(n));
          }),
          (e._zod.check = (n) => {
            n.value.endsWith(t.suffix) ||
              n.issues.push({
                origin: `string`,
                code: `invalid_format`,
                format: `ends_with`,
                suffix: t.suffix,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Ft = f(`$ZodCheckOverwrite`, (e, t) => {
        (xt.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      })));
  }),
  Lt,
  Rt = o(() => {
    Lt = class {
      constructor(e = []) {
        ((this.content = []), (this.indent = 0), this && (this.args = e));
      }
      indented(e) {
        ((this.indent += 1), e(this), --this.indent);
      }
      write(e) {
        if (typeof e == `function`) {
          (e(this, { execution: `sync` }), e(this, { execution: `async` }));
          return;
        }
        let t = e
            .split(
              `
`,
            )
            .filter((e) => e),
          n = Math.min(...t.map((e) => e.length - e.trimStart().length)),
          r = t.map((e) => e.slice(n)).map((e) => ` `.repeat(this.indent * 2) + e);
        for (let e of r) this.content.push(e);
      }
      compile() {
        let e = Function,
          t = this?.args,
          n = [...(this?.content ?? [``]).map((e) => `  ${e}`)];
        return new e(
          ...t,
          n.join(`
`),
        );
      }
    };
  }),
  zt,
  Bt = o(() => {
    zt = { major: 4, minor: 4, patch: 3 };
  });
function Vt(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
function Ht(e) {
  if (!ct.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Vt(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
function Ut(e, t = null) {
  try {
    let n = e.split(`.`);
    if (n.length !== 3) return !1;
    let [r] = n;
    if (!r) return !1;
    let i = JSON.parse(atob(r));
    return !((`typ` in i && i?.typ !== `JWT`) || !i.alg || (t && (!(`alg` in i) || i.alg !== t)));
  } catch {
    return !1;
  }
}
function Wt(e, t, n) {
  (e.issues.length && t.issues.push(...pe(n, e.issues)), (t.value[n] = e.value));
}
function Gt(e, t, n, r, i, a) {
  let o = n in r;
  if (e.issues.length) {
    if (i && a && !o) return;
    t.issues.push(...pe(n, e.issues));
  }
  if (!o && !i) {
    e.issues.length ||
      t.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: void 0, path: [n] });
    return;
  }
  e.value === void 0 ? o && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function Kt(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = ae(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function qt(e, t, n, r, i, a) {
  let o = [],
    s = i.keySet,
    c = i.catchall._zod,
    l = c.def.type,
    u = c.optin === `optional`,
    d = c.optout === `optional`;
  for (let i in t) {
    if (i === `__proto__` || s.has(i)) continue;
    if (l === `never`) {
      o.push(i);
      continue;
    }
    let a = c.run({ value: t[i], issues: [] }, r);
    a instanceof Promise ? e.push(a.then((e) => Gt(e, n, i, t, u, d))) : Gt(a, n, i, t, u, d);
  }
  return (
    o.length && n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
function Jt(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !de(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => he(e, r, p()))),
      }),
      t);
}
function Yt(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t)) return { valid: !0, data: e };
  if (re(e) && re(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Yt(e[n], t[n]);
      if (!r.valid) return { valid: !1, mergeErrorPath: [n, ...r.mergeErrorPath] };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = Yt(i, a);
      if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Xt(e, t, n) {
  let r = new Map(),
    i;
  for (let n of t.issues)
    if (n.code === `unrecognized_keys`) {
      i ??= n;
      for (let e of n.keys) (r.has(e) || r.set(e, {}), (r.get(e).l = !0));
    } else e.issues.push(n);
  for (let t of n.issues)
    if (t.code === `unrecognized_keys`) for (let e of t.keys) (r.has(e) || r.set(e, {}), (r.get(e).r = !0));
    else e.issues.push(t);
  let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if ((a.length && i && e.issues.push({ ...i, keys: a }), de(e))) return e;
  let o = Yt(t.value, n.value);
  if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return ((e.value = o.data), e);
}
function Zt(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
function Qt(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
function $t(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: e.value, inst: t }),
    e
  );
}
function en(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
function tn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
function nn(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(_e(e)));
  }
}
var rn,
  an,
  R,
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
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr = o(() => {
    (It(),
      v(),
      Rt(),
      Ve(),
      bt(),
      Ce(),
      Bt(),
      (rn = f(`$ZodType`, (e, t) => {
        var n;
        ((e ??= {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = zt));
        let r = [...(e._zod.def.checks ?? [])];
        e._zod.traits.has(`$ZodCheck`) && r.unshift(e);
        for (let t of r) for (let n of t._zod.onattach) n(e);
        if (r.length === 0)
          ((n = e._zod).deferred ?? (n.deferred = []),
            e._zod.deferred?.push(() => {
              e._zod.run = e._zod.parse;
            }));
        else {
          let t = (e, t, n) => {
              let r = de(e),
                i;
              for (let a of t) {
                if (a._zod.def.when) {
                  if (fe(e) || !a._zod.def.when(e)) continue;
                } else if (r) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && n?.async === !1) throw new h();
                if (i || o instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (r ||= de(e, t)));
                  });
                else {
                  if (e.issues.length === t) continue;
                  r ||= de(e, t);
                }
              }
              return i ? i.then(() => e) : e;
            },
            n = (n, i, a) => {
              if (de(n)) return ((n.aborted = !0), n);
              let o = t(i, r, a);
              if (o instanceof Promise) {
                if (a.async === !1) throw new h();
                return o.then((t) => e._zod.parse(t, a));
              }
              return e._zod.parse(o, a);
            };
          e._zod.run = (i, a) => {
            if (a.skipChecks) return e._zod.parse(i, a);
            if (a.direction === `backward`) {
              let t = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
              return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
            }
            let o = e._zod.parse(i, a);
            if (o instanceof Promise) {
              if (a.async === !1) throw new h();
              return o.then((e) => t(e, r, a));
            }
            return t(o, r, a);
          };
        }
        T(e, `~standard`, () => ({
          validate: (t) => {
            try {
              let n = F(e, t);
              return n.success ? { value: n.data } : { issues: n.error?.issues };
            } catch {
              return Me(e, t).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
            }
          },
          vendor: `zod`,
          version: 1,
        }));
      })),
      (an = f(`$ZodString`, (e, t) => {
        (rn.init(e, t),
          (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? pt(e._zod.bag)),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = String(n.value);
              } catch {}
            return (
              typeof n.value == `string` ||
                n.issues.push({ expected: `string`, code: `invalid_type`, input: n.value, inst: e }),
              n
            );
          }));
      })),
      (R = f(`$ZodStringFormat`, (e, t) => {
        (kt.init(e, t), an.init(e, t));
      })),
      (on = f(`$ZodGUID`, (e, t) => {
        ((t.pattern ??= $e), R.init(e, t));
      })),
      (sn = f(`$ZodUUID`, (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ??= et(e);
        } else t.pattern ??= et();
        R.init(e, t);
      })),
      (cn = f(`$ZodEmail`, (e, t) => {
        ((t.pattern ??= tt), R.init(e, t));
      })),
      (ln = f(`$ZodURL`, (e, t) => {
        (R.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim();
              if (!t.normalize && t.protocol?.source === lt.source && !/^https?:\/\//i.test(r)) {
                n.issues.push({
                  code: `invalid_format`,
                  format: `url`,
                  note: `Invalid URL format`,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
                return;
              }
              let i = new URL(r);
              (t.hostname &&
                ((t.hostname.lastIndex = 0),
                t.hostname.test(i.hostname) ||
                  n.issues.push({
                    code: `invalid_format`,
                    format: `url`,
                    note: `Invalid hostname`,
                    pattern: t.hostname.source,
                    input: n.value,
                    inst: e,
                    continue: !t.abort,
                  })),
                t.protocol &&
                  ((t.protocol.lastIndex = 0),
                  t.protocol.test(i.protocol.endsWith(`:`) ? i.protocol.slice(0, -1) : i.protocol) ||
                    n.issues.push({
                      code: `invalid_format`,
                      format: `url`,
                      note: `Invalid protocol`,
                      pattern: t.protocol.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                (n.value = t.normalize ? i.href : r));
              return;
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (un = f(`$ZodEmoji`, (e, t) => {
        ((t.pattern ??= He()), R.init(e, t));
      })),
      (dn = f(`$ZodNanoID`, (e, t) => {
        ((t.pattern ??= Ze), R.init(e, t));
      })),
      (fn = f(`$ZodCUID`, (e, t) => {
        ((t.pattern ??= Ke), R.init(e, t));
      })),
      (pn = f(`$ZodCUID2`, (e, t) => {
        ((t.pattern ??= qe), R.init(e, t));
      })),
      (mn = f(`$ZodULID`, (e, t) => {
        ((t.pattern ??= Je), R.init(e, t));
      })),
      (hn = f(`$ZodXID`, (e, t) => {
        ((t.pattern ??= Ye), R.init(e, t));
      })),
      (gn = f(`$ZodKSUID`, (e, t) => {
        ((t.pattern ??= Xe), R.init(e, t));
      })),
      (_n = f(`$ZodISODateTime`, (e, t) => {
        ((t.pattern ??= Ge(t)), R.init(e, t));
      })),
      (vn = f(`$ZodISODate`, (e, t) => {
        ((t.pattern ??= ft), R.init(e, t));
      })),
      (yn = f(`$ZodISOTime`, (e, t) => {
        ((t.pattern ??= We(t)), R.init(e, t));
      })),
      (bn = f(`$ZodISODuration`, (e, t) => {
        ((t.pattern ??= Qe), R.init(e, t));
      })),
      (xn = f(`$ZodIPv4`, (e, t) => {
        ((t.pattern ??= rt), R.init(e, t), (e._zod.bag.format = `ipv4`));
      })),
      (Sn = f(`$ZodIPv6`, (e, t) => {
        ((t.pattern ??= it),
          R.init(e, t),
          (e._zod.bag.format = `ipv6`),
          (e._zod.check = (n) => {
            try {
              new URL(`http://[${n.value}]`);
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `ipv6`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (Cn = f(`$ZodCIDRv4`, (e, t) => {
        ((t.pattern ??= at), R.init(e, t));
      })),
      (wn = f(`$ZodCIDRv6`, (e, t) => {
        ((t.pattern ??= ot),
          R.init(e, t),
          (e._zod.check = (n) => {
            let r = n.value.split(`/`);
            try {
              if (r.length !== 2) throw Error();
              let [e, t] = r;
              if (!t) throw Error();
              let n = Number(t);
              if (`${n}` !== t || n < 0 || n > 128) throw Error();
              new URL(`http://[${e}]`);
            } catch {
              n.issues.push({
                code: `invalid_format`,
                format: `cidrv6`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            }
          }));
      })),
      (Tn = f(`$ZodBase64`, (e, t) => {
        ((t.pattern ??= st),
          R.init(e, t),
          (e._zod.bag.contentEncoding = `base64`),
          (e._zod.check = (n) => {
            Vt(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (En = f(`$ZodBase64URL`, (e, t) => {
        ((t.pattern ??= ct),
          R.init(e, t),
          (e._zod.bag.contentEncoding = `base64url`),
          (e._zod.check = (n) => {
            Ht(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Dn = f(`$ZodE164`, (e, t) => {
        ((t.pattern ??= ut), R.init(e, t));
      })),
      (On = f(`$ZodJWT`, (e, t) => {
        (R.init(e, t),
          (e._zod.check = (n) => {
            Ut(n.value, t.alg) ||
              n.issues.push({
                code: `invalid_format`,
                format: `jwt`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (kn = f(`$ZodNumber`, (e, t) => {
        (rn.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? ht),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = Number(n.value);
              } catch {}
            let i = n.value;
            if (typeof i == `number` && !Number.isNaN(i) && Number.isFinite(i)) return n;
            let a =
              typeof i == `number`
                ? Number.isNaN(i)
                  ? `NaN`
                  : Number.isFinite(i)
                    ? void 0
                    : `Infinity`
                : void 0;
            return (
              n.issues.push({
                expected: `number`,
                code: `invalid_type`,
                input: i,
                inst: e,
                ...(a ? { received: a } : {}),
              }),
              n
            );
          }));
      })),
      (An = f(`$ZodNumberFormat`, (e, t) => {
        (Et.init(e, t), kn.init(e, t));
      })),
      (jn = f(`$ZodBoolean`, (e, t) => {
        (rn.init(e, t),
          (e._zod.pattern = gt),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = !!n.value;
              } catch {}
            let i = n.value;
            return (
              typeof i == `boolean` ||
                n.issues.push({ expected: `boolean`, code: `invalid_type`, input: i, inst: e }),
              n
            );
          }));
      })),
      (Mn = f(`$ZodNull`, (e, t) => {
        (rn.init(e, t),
          (e._zod.pattern = _t),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              r === null || t.issues.push({ expected: `null`, code: `invalid_type`, input: r, inst: e }),
              t
            );
          }));
      })),
      (Nn = f(`$ZodUnknown`, (e, t) => {
        (rn.init(e, t), (e._zod.parse = (e) => e));
      })),
      (Pn = f(`$ZodNever`, (e, t) => {
        (rn.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: `never`, code: `invalid_type`, input: t.value, inst: e }),
            t
          )));
      })),
      (Fn = f(`$ZodArray`, (e, t) => {
        (rn.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (n.issues.push({ expected: `array`, code: `invalid_type`, input: i, inst: e }), n);
            n.value = Array(i.length);
            let a = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                s = t.element._zod.run({ value: o, issues: [] }, r);
              s instanceof Promise ? a.push(s.then((t) => Wt(t, n, e))) : Wt(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (In = f(`$ZodObject`, (e, t) => {
        if ((rn.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let n = { ...e };
              return (Object.defineProperty(t, "shape", { value: n }), n);
            },
          });
        }
        let n = x(() => Kt(t));
        T(e._zod, `propValues`, () => {
          let e = t.shape,
            n = {};
          for (let t in e) {
            let r = e[t]._zod;
            if (r.values) {
              n[t] ?? (n[t] = new Set());
              for (let e of r.values) n[t].add(e);
            }
          }
          return n;
        });
        let r = ne,
          i = t.catchall,
          a;
        e._zod.parse = (t, o) => {
          a ??= n.value;
          let s = t.value;
          if (!r(s))
            return (t.issues.push({ expected: `object`, code: `invalid_type`, input: s, inst: e }), t);
          t.value = {};
          let c = [],
            l = a.shape;
          for (let e of a.keys) {
            let n = l[e],
              r = n._zod.optin === `optional`,
              i = n._zod.optout === `optional`,
              a = n._zod.run({ value: s[e], issues: [] }, o);
            a instanceof Promise ? c.push(a.then((n) => Gt(n, t, e, s, r, i))) : Gt(a, t, e, s, r, i);
          }
          return i ? qt(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
        };
      })),
      (Ln = f(`$ZodObjectJIT`, (e, t) => {
        In.init(e, t);
        let n = e._zod.parse,
          r = x(() => Kt(t)),
          i = (e) => {
            let t = new Lt([`shape`, `payload`, `ctx`]),
              n = r.value,
              i = (e) => {
                let t = E(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
              };
            t.write(`const input = payload.value;`);
            let a = Object.create(null),
              o = 0;
            for (let e of n.keys) a[e] = `key_${o++}`;
            t.write(`const newResult = {};`);
            for (let r of n.keys) {
              let n = a[r],
                o = E(r),
                s = e[r],
                c = s?._zod?.optin === `optional`,
                l = s?._zod?.optout === `optional`;
              (t.write(`const ${n} = ${i(r)};`),
                c && l
                  ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                  : c
                    ? t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                    : t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `));
            }
            (t.write(`payload.value = newResult;`), t.write(`return payload;`));
            let s = t.compile();
            return (t, n) => s(e, t, n);
          },
          a,
          o = ne,
          s = !_.jitless,
          c = s && be.value,
          l = t.catchall,
          u;
        e._zod.parse = (d, f) => {
          u ??= r.value;
          let p = d.value;
          return o(p)
            ? s && c && f?.async === !1 && f.jitless !== !0
              ? ((a ||= i(t.shape)), (d = a(d, f)), l ? qt([], p, d, f, u, e) : d)
              : n(d, f)
            : (d.issues.push({ expected: `object`, code: `invalid_type`, input: p, inst: e }), d);
        };
      })),
      (Rn = f(`$ZodUnion`, (e, t) => {
        (rn.init(e, t),
          T(e._zod, `optin`, () =>
            t.options.some((e) => e._zod.optin === `optional`) ? `optional` : void 0,
          ),
          T(e._zod, `optout`, () =>
            t.options.some((e) => e._zod.optout === `optional`) ? `optional` : void 0,
          ),
          T(e._zod, `values`, () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
          }),
          T(e._zod, `pattern`, () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return RegExp(`^(${e.map((e) => C(e.source)).join(`|`)})$`);
            }
          }));
        let n = t.options.length === 1 ? t.options[0]._zod.run : null;
        e._zod.parse = (r, i) => {
          if (n) return n(r, i);
          let a = !1,
            o = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: r.value, issues: [] }, i);
            if (t instanceof Promise) (o.push(t), (a = !0));
            else {
              if (t.issues.length === 0) return t;
              o.push(t);
            }
          }
          return a ? Promise.all(o).then((t) => Jt(t, r, e, i)) : Jt(o, r, e, i);
        };
      })),
      (zn = f(`$ZodDiscriminatedUnion`, (e, t) => {
        ((t.inclusive = !1), Rn.init(e, t));
        let n = e._zod.parse;
        T(e._zod, `propValues`, () => {
          let e = {};
          for (let n of t.options) {
            let r = n._zod.propValues;
            if (!r || Object.keys(r).length === 0)
              throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
            for (let [t, n] of Object.entries(r)) {
              e[t] || (e[t] = new Set());
              for (let r of n) e[t].add(r);
            }
          }
          return e;
        });
        let r = x(() => {
          let e = t.options,
            n = new Map();
          for (let r of e) {
            let e = r._zod.propValues?.[t.discriminator];
            if (!e || e.size === 0)
              throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
            for (let t of e) {
              if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
              n.set(t, r);
            }
          }
          return n;
        });
        e._zod.parse = (i, a) => {
          let o = i.value;
          if (!ne(o))
            return (i.issues.push({ code: `invalid_type`, expected: `object`, input: o, inst: e }), i);
          let s = r.value.get(o?.[t.discriminator]);
          return s
            ? s._zod.run(i, a)
            : t.unionFallback || a.direction === `backward`
              ? n(i, a)
              : (i.issues.push({
                  code: `invalid_union`,
                  errors: [],
                  note: `No matching discriminator`,
                  discriminator: t.discriminator,
                  options: Array.from(r.value.keys()),
                  input: o,
                  path: [t.discriminator],
                  inst: e,
                }),
                i);
        };
      })),
      (Bn = f(`$ZodIntersection`, (e, t) => {
        (rn.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => Xt(e, t, n))
              : Xt(e, i, a);
          }));
      })),
      (Vn = f(`$ZodRecord`, (e, t) => {
        (rn.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!re(i))
              return (n.issues.push({ expected: `record`, code: `invalid_type`, input: i, inst: e }), n);
            let a = [],
              o = t.keyType._zod.values;
            if (o) {
              n.value = {};
              let s = new Set();
              for (let c of o)
                if (typeof c == `string` || typeof c == `number` || typeof c == `symbol`) {
                  s.add(typeof c == `number` ? c.toString() : c);
                  let o = t.keyType._zod.run({ value: c, issues: [] }, r);
                  if (o instanceof Promise)
                    throw Error(`Async schemas not supported in object keys currently`);
                  if (o.issues.length) {
                    n.issues.push({
                      code: `invalid_key`,
                      origin: `record`,
                      issues: o.issues.map((e) => he(e, r, p())),
                      input: c,
                      path: [c],
                      inst: e,
                    });
                    continue;
                  }
                  let l = o.value,
                    u = t.valueType._zod.run({ value: i[c], issues: [] }, r);
                  u instanceof Promise
                    ? a.push(
                        u.then((e) => {
                          (e.issues.length && n.issues.push(...pe(c, e.issues)), (n.value[l] = e.value));
                        }),
                      )
                    : (u.issues.length && n.issues.push(...pe(c, u.issues)), (n.value[l] = u.value));
                }
              let c;
              for (let e in i) s.has(e) || ((c ??= []), c.push(e));
              c && c.length > 0 && n.issues.push({ code: `unrecognized_keys`, input: i, inst: e, keys: c });
            } else {
              n.value = {};
              for (let o of Reflect.ownKeys(i)) {
                if (o === `__proto__` || !Object.prototype.propertyIsEnumerable.call(i, o)) continue;
                let s = t.keyType._zod.run({ value: o, issues: [] }, r);
                if (s instanceof Promise) throw Error(`Async schemas not supported in object keys currently`);
                if (typeof o == `string` && ht.test(o) && s.issues.length) {
                  let e = t.keyType._zod.run({ value: Number(o), issues: [] }, r);
                  if (e instanceof Promise)
                    throw Error(`Async schemas not supported in object keys currently`);
                  e.issues.length === 0 && (s = e);
                }
                if (s.issues.length) {
                  t.mode === `loose`
                    ? (n.value[o] = i[o])
                    : n.issues.push({
                        code: `invalid_key`,
                        origin: `record`,
                        issues: s.issues.map((e) => he(e, r, p())),
                        input: o,
                        path: [o],
                        inst: e,
                      });
                  continue;
                }
                let c = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                c instanceof Promise
                  ? a.push(
                      c.then((e) => {
                        (e.issues.length && n.issues.push(...pe(o, e.issues)), (n.value[s.value] = e.value));
                      }),
                    )
                  : (c.issues.length && n.issues.push(...pe(o, c.issues)), (n.value[s.value] = c.value));
              }
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Hn = f(`$ZodEnum`, (e, t) => {
        rn.init(e, t);
        let n = y(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => xe.has(typeof e))
              .map((e) => (typeof e == `string` ? O(e) : e.toString()))
              .join(`|`)})$`,
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (r.has(a) || t.issues.push({ code: `invalid_value`, values: n, input: a, inst: e }), t);
          }));
      })),
      (Un = f(`$ZodLiteral`, (e, t) => {
        if ((rn.init(e, t), t.values.length === 0))
          throw Error(`Cannot create literal schema with no valid values`);
        let n = new Set(t.values);
        ((e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => (typeof e == `string` ? O(e) : e ? O(e.toString()) : String(e))).join(`|`)})$`,
          )),
          (e._zod.parse = (r, i) => {
            let a = r.value;
            return (
              n.has(a) || r.issues.push({ code: `invalid_value`, values: t.values, input: a, inst: e }),
              r
            );
          }));
      })),
      (Wn = f(`$ZodTransform`, (e, t) => {
        (rn.init(e, t),
          (e._zod.optin = `optional`),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new g(e.constructor.name);
            let i = t.transform(n.value, n);
            if (r.async)
              return (i instanceof Promise ? i : Promise.resolve(i)).then(
                (e) => ((n.value = e), (n.fallback = !0), n),
              );
            if (i instanceof Promise) throw new h();
            return ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (Gn = f(`$ZodOptional`, (e, t) => {
        (rn.init(e, t),
          (e._zod.optin = `optional`),
          (e._zod.optout = `optional`),
          T(e._zod, `values`, () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
          ),
          T(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${C(e.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if (t.innerType._zod.optin === `optional`) {
              let r = e.value,
                i = t.innerType._zod.run(e, n);
              return i instanceof Promise ? i.then((e) => Zt(e, r)) : Zt(i, r);
            }
            return e.value === void 0 ? e : t.innerType._zod.run(e, n);
          }));
      })),
      (Kn = f(`$ZodExactOptional`, (e, t) => {
        (Gn.init(e, t),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `pattern`, () => t.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
      })),
      (qn = f(`$ZodNullable`, (e, t) => {
        (rn.init(e, t),
          T(e._zod, `optin`, () => t.innerType._zod.optin),
          T(e._zod, `optout`, () => t.innerType._zod.optout),
          T(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${C(e.source)}|null)$`) : void 0;
          }),
          T(e._zod, `values`, () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0,
          ),
          (e._zod.parse = (e, n) => (e.value === null ? e : t.innerType._zod.run(e, n))));
      })),
      (Jn = f(`$ZodDefault`, (e, t) => {
        (rn.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            if (e.value === void 0) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => Qt(e, t)) : Qt(r, t);
          }));
      })),
      (Yn = f(`$ZodPrefault`, (e, t) => {
        (rn.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            n.direction === `backward` || (e.value === void 0 && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      })),
      (Xn = f(`$ZodNonOptional`, (e, t) => {
        (rn.init(e, t),
          T(e._zod, `values`, () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => $t(t, e)) : $t(i, e);
          }));
      })),
      (Zn = f(`$ZodCatch`, (e, t) => {
        (rn.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `optout`, () => t.innerType._zod.optout),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise
              ? r.then(
                  (r) => (
                    (e.value = r.value),
                    r.issues.length &&
                      ((e.value = t.catchValue({
                        ...e,
                        error: { issues: r.issues.map((e) => he(e, n, p())) },
                        input: e.value,
                      })),
                      (e.issues = []),
                      (e.fallback = !0)),
                    e
                  ),
                )
              : ((e.value = r.value),
                r.issues.length &&
                  ((e.value = t.catchValue({
                    ...e,
                    error: { issues: r.issues.map((e) => he(e, n, p())) },
                    input: e.value,
                  })),
                  (e.issues = []),
                  (e.fallback = !0)),
                e);
          }));
      })),
      (Qn = f(`$ZodPipe`, (e, t) => {
        (rn.init(e, t),
          T(e._zod, `values`, () => t.in._zod.values),
          T(e._zod, `optin`, () => t.in._zod.optin),
          T(e._zod, `optout`, () => t.out._zod.optout),
          T(e._zod, `propValues`, () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => en(e, t.in, n)) : en(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => en(e, t.out, n)) : en(r, t.out, n);
          }));
      })),
      ($n = f(`$ZodReadonly`, (e, t) => {
        (rn.init(e, t),
          T(e._zod, `propValues`, () => t.innerType._zod.propValues),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `optin`, () => t.innerType?._zod?.optin),
          T(e._zod, `optout`, () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(tn) : tn(r);
          }));
      })),
      (er = f(`$ZodCustom`, (e, t) => {
        (xt.init(e, t),
          rn.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => nn(t, n, r, e));
            nn(i, n, r, e);
          }));
      })));
  });
function nr() {
  return new ir();
}
var rr,
  ir,
  ar,
  or = o(() => {
    ((ir = class {
      constructor() {
        ((this._map = new WeakMap()), (this._idmap = new Map()));
      }
      add(e, ...t) {
        let n = t[0];
        return (
          this._map.set(e, n),
          n && typeof n == `object` && `id` in n && this._idmap.set(n.id, e),
          this
        );
      }
      clear() {
        return ((this._map = new WeakMap()), (this._idmap = new Map()), this);
      }
      remove(e) {
        let t = this._map.get(e);
        return (
          t && typeof t == `object` && `id` in t && this._idmap.delete(t.id),
          this._map.delete(e),
          this
        );
      }
      get(e) {
        let t = e._zod.parent;
        if (t) {
          let n = { ...(this.get(t) ?? {}) };
          delete n.id;
          let r = { ...n, ...this._map.get(e) };
          return Object.keys(r).length ? r : void 0;
        }
        return this._map.get(e);
      }
      has(e) {
        return this._map.has(e);
      }
    }),
      (rr = globalThis).__zod_globalRegistry ?? (rr.__zod_globalRegistry = nr()),
      (ar = globalThis.__zod_globalRegistry));
  });
function sr(e, t) {
  return new e({ type: `string`, ...A(t) });
}
function cr(e, t) {
  return new e({ type: `string`, format: `email`, check: `string_format`, abort: !1, ...A(t) });
}
function lr(e, t) {
  return new e({ type: `string`, format: `guid`, check: `string_format`, abort: !1, ...A(t) });
}
function ur(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, ...A(t) });
}
function dr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v4`, ...A(t) });
}
function fr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v6`, ...A(t) });
}
function pr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v7`, ...A(t) });
}
function mr(e, t) {
  return new e({ type: `string`, format: `url`, check: `string_format`, abort: !1, ...A(t) });
}
function hr(e, t) {
  return new e({ type: `string`, format: `emoji`, check: `string_format`, abort: !1, ...A(t) });
}
function gr(e, t) {
  return new e({ type: `string`, format: `nanoid`, check: `string_format`, abort: !1, ...A(t) });
}
function _r(e, t) {
  return new e({ type: `string`, format: `cuid`, check: `string_format`, abort: !1, ...A(t) });
}
function vr(e, t) {
  return new e({ type: `string`, format: `cuid2`, check: `string_format`, abort: !1, ...A(t) });
}
function yr(e, t) {
  return new e({ type: `string`, format: `ulid`, check: `string_format`, abort: !1, ...A(t) });
}
function br(e, t) {
  return new e({ type: `string`, format: `xid`, check: `string_format`, abort: !1, ...A(t) });
}
function xr(e, t) {
  return new e({ type: `string`, format: `ksuid`, check: `string_format`, abort: !1, ...A(t) });
}
function Sr(e, t) {
  return new e({ type: `string`, format: `ipv4`, check: `string_format`, abort: !1, ...A(t) });
}
function Cr(e, t) {
  return new e({ type: `string`, format: `ipv6`, check: `string_format`, abort: !1, ...A(t) });
}
function wr(e, t) {
  return new e({ type: `string`, format: `cidrv4`, check: `string_format`, abort: !1, ...A(t) });
}
function Tr(e, t) {
  return new e({ type: `string`, format: `cidrv6`, check: `string_format`, abort: !1, ...A(t) });
}
function Er(e, t) {
  return new e({ type: `string`, format: `base64`, check: `string_format`, abort: !1, ...A(t) });
}
function Dr(e, t) {
  return new e({ type: `string`, format: `base64url`, check: `string_format`, abort: !1, ...A(t) });
}
function Or(e, t) {
  return new e({ type: `string`, format: `e164`, check: `string_format`, abort: !1, ...A(t) });
}
function kr(e, t) {
  return new e({ type: `string`, format: `jwt`, check: `string_format`, abort: !1, ...A(t) });
}
function Ar(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...A(t),
  });
}
function jr(e, t) {
  return new e({ type: `string`, format: `date`, check: `string_format`, ...A(t) });
}
function Mr(e, t) {
  return new e({ type: `string`, format: `time`, check: `string_format`, precision: null, ...A(t) });
}
function Nr(e, t) {
  return new e({ type: `string`, format: `duration`, check: `string_format`, ...A(t) });
}
function Pr(e, t) {
  return new e({ type: `number`, checks: [], ...A(t) });
}
function Fr(e, t) {
  return new e({ type: `number`, check: `number_format`, abort: !1, format: `safeint`, ...A(t) });
}
function Ir(e, t) {
  return new e({ type: `boolean`, ...A(t) });
}
function Lr(e, t) {
  return new e({ type: `null`, ...A(t) });
}
function Rr(e) {
  return new e({ type: `unknown` });
}
function zr(e, t) {
  return new e({ type: `never`, ...A(t) });
}
function Br(e, t) {
  return new Ct({ check: `less_than`, ...A(t), value: e, inclusive: !1 });
}
function Vr(e, t) {
  return new Ct({ check: `less_than`, ...A(t), value: e, inclusive: !0 });
}
function Hr(e, t) {
  return new wt({ check: `greater_than`, ...A(t), value: e, inclusive: !1 });
}
function Ur(e, t) {
  return new wt({ check: `greater_than`, ...A(t), value: e, inclusive: !0 });
}
function Wr(e, t) {
  return new Tt({ check: `multiple_of`, ...A(t), value: e });
}
function Gr(e, t) {
  return new Dt({ check: `max_length`, ...A(t), maximum: e });
}
function Kr(e, t) {
  return new I({ check: `min_length`, ...A(t), minimum: e });
}
function qr(e, t) {
  return new Ot({ check: `length_equals`, ...A(t), length: e });
}
function Jr(e, t) {
  return new L({ check: `string_format`, format: `regex`, ...A(t), pattern: e });
}
function Yr(e) {
  return new At({ check: `string_format`, format: `lowercase`, ...A(e) });
}
function Xr(e) {
  return new jt({ check: `string_format`, format: `uppercase`, ...A(e) });
}
function Zr(e, t) {
  return new Mt({ check: `string_format`, format: `includes`, ...A(t), includes: e });
}
function Qr(e, t) {
  return new Nt({ check: `string_format`, format: `starts_with`, ...A(t), prefix: e });
}
function $r(e, t) {
  return new Pt({ check: `string_format`, format: `ends_with`, ...A(t), suffix: e });
}
function ei(e) {
  return new Ft({ check: `overwrite`, tx: e });
}
function ti(e) {
  return ei((t) => t.normalize(e));
}
function ni() {
  return ei((e) => e.trim());
}
function ri() {
  return ei((e) => e.toLowerCase());
}
function ii() {
  return ei((e) => e.toUpperCase());
}
function ai() {
  return ei((e) => D(e));
}
function oi(e, t, n) {
  return new e({ type: `array`, element: t, ...A(n) });
}
function si(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...A(n) });
}
function ci(e, t) {
  let n = li(
    (t) => (
      (t.addIssue = (e) => {
        if (typeof e == `string`) t.issues.push(_e(e, t.value, n._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= t.value),
            (r.inst ??= n),
            (r.continue ??= !n._zod.def.abort),
            t.issues.push(_e(r)));
        }
      }),
      e(t.value, t)
    ),
    t,
  );
  return n;
}
function li(e, t) {
  let n = new xt({ check: `custom`, ...A(t) });
  return ((n._zod.check = e), n);
}
var ui = o(() => {
  (It(), Ce());
});
function di(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? ar,
      target: t,
      unrepresentable: e?.unrepresentable ?? `throw`,
      override: e?.override ?? (() => {}),
      io: e?.io ?? `output`,
      counter: 0,
      seen: new Map(),
      cycles: e?.cycles ?? `ref`,
      reused: e?.reused ?? `inline`,
      external: e?.external ?? void 0,
    }
  );
}
function fi(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  let i = e._zod.def,
    a = t.seen.get(e);
  if (a) return (a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema);
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, o);
  let s = e._zod.toJSONSchema?.();
  if (s) o.schema = s;
  else {
    let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
    else {
      let n = o.schema,
        a = t.processors[i.type];
      if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
      a(e, t, n, r);
    }
    let a = e._zod.parent;
    a && ((o.ref ||= a), fi(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` && hi(e) && (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function pi(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = new Map();
  for (let t of e.seen.entries()) {
    let n = e.metadataRegistry.get(t[0])?.id;
    if (n) {
      let e = r.get(n);
      if (e && e !== t[0])
        throw Error(
          `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
        );
      r.set(n, t[0]);
    }
  }
  let i = (t) => {
      let r = e.target === `draft-2020-12` ? `$defs` : `definitions`;
      if (e.external) {
        let n = e.external.registry.get(t[0])?.id,
          i = e.external.uri ?? ((e) => e);
        if (n) return { ref: i(n) };
        let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
        return ((t[1].defId = a), { defId: a, ref: `${i(`__shared`)}#/${r}/${a}` });
      }
      if (t[1] === n) return { ref: `#` };
      let i = `#/${r}/`,
        a = t[1].schema.id ?? `__schema${e.counter++}`;
      return { defId: a, ref: i + a };
    },
    a = (e) => {
      if (e[1].schema.$ref) return;
      let t = e[1],
        { ref: n, defId: r } = i(e);
      ((t.def = { ...t.schema }), r && (t.defId = r));
      let a = t.schema;
      for (let e in a) delete a[e];
      a.$ref = n;
    };
  if (e.cycles === `throw`)
    for (let t of e.seen.entries()) {
      let e = t[1];
      if (e.cycle)
        throw Error(`Cycle detected: #/${e.cycle?.join(`/`)}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (let n of e.seen.entries()) {
    let r = n[1];
    if (t === n[0]) {
      a(n);
      continue;
    }
    if (e.external) {
      let r = e.external.registry.get(n[0])?.id;
      if (t !== n[0] && r) {
        a(n);
        continue;
      }
    }
    if (e.metadataRegistry.get(n[0])?.id) {
      a(n);
      continue;
    }
    if (r.cycle) {
      a(n);
      continue;
    }
    if (r.count > 1 && e.reused === `ref`) {
      a(n);
      continue;
    }
  }
}
function mi(e, t) {
  let n = e.seen.get(t);
  if (!n) throw Error(`Unprocessed schema. This is a bug in Zod.`);
  let r = (t) => {
    let n = e.seen.get(t);
    if (n.ref === null) return;
    let i = n.def ?? n.schema,
      a = { ...i },
      o = n.ref;
    if (((n.ref = null), o)) {
      r(o);
      let n = e.seen.get(o),
        s = n.schema;
      if (
        (s.$ref && (e.target === `draft-07` || e.target === `draft-04` || e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : Object.assign(i, s),
        Object.assign(i, a),
        t._zod.parent === o)
      )
        for (let e in i) e !== `$ref` && e !== `allOf` && (e in a || delete i[e]);
      if (s.$ref && n.def)
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in n.def &&
            JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
            delete i[e];
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e !== `$ref` &&
            e !== `allOf` &&
            e in t.def &&
            JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
            delete i[e];
    }
    e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
  };
  for (let t of [...e.seen.entries()].reverse()) r(t[0]);
  let i = {};
  if (
    (e.target === `draft-2020-12`
      ? (i.$schema = `https://json-schema.org/draft/2020-12/schema`)
      : e.target === `draft-07`
        ? (i.$schema = `http://json-schema.org/draft-07/schema#`)
        : e.target === `draft-04`
          ? (i.$schema = `http://json-schema.org/draft-04/schema#`)
          : e.target,
    e.external?.uri)
  ) {
    let n = e.external.registry.get(t)?.id;
    if (!n) throw Error("Schema is missing an `id` property");
    i.$id = e.external.uri(n);
  }
  Object.assign(i, n.def ?? n.schema);
  let a = e.metadataRegistry.get(t)?.id;
  a !== void 0 && i.id === a && delete i.id;
  let o = e.external?.defs ?? {};
  for (let t of e.seen.entries()) {
    let e = t[1];
    e.def && e.defId && (e.def.id === e.defId && delete e.def.id, (o[e.defId] = e.def));
  }
  e.external ||
    (Object.keys(o).length > 0 && (e.target === `draft-2020-12` ? (i.$defs = o) : (i.definitions = o)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, "~standard", {
        value: {
          ...t[`~standard`],
          jsonSchema: { input: _i(t, `input`, e.processors), output: _i(t, `output`, e.processors) },
        },
        enumerable: !1,
        writable: !1,
      }),
      n
    );
  } catch {
    throw Error(`Error converting schema to JSON.`);
  }
}
function hi(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return hi(r.element, n);
  if (r.type === `set`) return hi(r.valueType, n);
  if (r.type === `lazy`) return hi(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault`
  )
    return hi(r.innerType, n);
  if (r.type === `intersection`) return hi(r.left, n) || hi(r.right, n);
  if (r.type === `record` || r.type === `map`) return hi(r.keyType, n) || hi(r.valueType, n);
  if (r.type === `pipe`) return e._zod.traits.has(`$ZodCodec`) ? !0 : hi(r.in, n) || hi(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (hi(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (hi(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (hi(e, n)) return !0;
    return !!(r.rest && hi(r.rest, n));
  }
  return !1;
}
var gi,
  _i,
  vi = o(() => {
    (or(),
      (gi =
        (e, t = {}) =>
        (n) => {
          let r = di({ ...n, processors: t });
          return (fi(e, r), pi(r, e), mi(r, e));
        }),
      (_i =
        (e, t, n = {}) =>
        (r) => {
          let { libraryOptions: i, target: a } = r ?? {},
            o = di({ ...(i ?? {}), target: a, io: t, processors: n });
          return (fi(e, o), pi(o, e), mi(o, e));
        }));
  }),
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  z,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi = o(() => {
    (vi(),
      Ce(),
      (yi = { guid: `uuid`, url: `uri`, datetime: `date-time`, json_string: `json-string`, regex: `` }),
      (bi = (e, t, n, r) => {
        let i = n;
        i.type = `string`;
        let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
        if (
          (typeof a == `number` && (i.minLength = a),
          typeof o == `number` && (i.maxLength = o),
          s && ((i.format = yi[s] ?? s), i.format === `` && delete i.format, s === `time` && delete i.format),
          l && (i.contentEncoding = l),
          c && c.size > 0)
        ) {
          let e = [...c];
          e.length === 1
            ? (i.pattern = e[0].source)
            : e.length > 1 &&
              (i.allOf = [
                ...e.map((e) => ({
                  ...(t.target === `draft-07` || t.target === `draft-04` || t.target === `openapi-3.0`
                    ? { type: `string` }
                    : {}),
                  pattern: e.source,
                })),
              ]);
        }
      }),
      (xi = (e, t, n, r) => {
        let i = n,
          {
            minimum: a,
            maximum: o,
            format: s,
            multipleOf: c,
            exclusiveMaximum: l,
            exclusiveMinimum: u,
          } = e._zod.bag;
        i.type = typeof s == `string` && s.includes(`int`) ? `integer` : `number`;
        let d = typeof u == `number` && u >= (a ?? -1 / 0),
          f = typeof l == `number` && l <= (o ?? 1 / 0),
          p = t.target === `draft-04` || t.target === `openapi-3.0`;
        (d
          ? p
            ? ((i.minimum = u), (i.exclusiveMinimum = !0))
            : (i.exclusiveMinimum = u)
          : typeof a == `number` && (i.minimum = a),
          f
            ? p
              ? ((i.maximum = l), (i.exclusiveMaximum = !0))
              : (i.exclusiveMaximum = l)
            : typeof o == `number` && (i.maximum = o),
          typeof c == `number` && (i.multipleOf = c));
      }),
      (Si = (e, t, n, r) => {
        n.type = `boolean`;
      }),
      (Ci = (e, t, n, r) => {
        t.target === `openapi-3.0`
          ? ((n.type = `string`), (n.nullable = !0), (n.enum = [null]))
          : (n.type = `null`);
      }),
      (wi = (e, t, n, r) => {
        n.not = {};
      }),
      (Ti = (e, t, n, r) => {}),
      (Ei = (e, t, n, r) => {
        let i = e._zod.def,
          a = y(i.entries);
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          (n.enum = a));
      }),
      (Di = (e, t, n, r) => {
        let i = e._zod.def,
          a = [];
        for (let e of i.values)
          if (e === void 0) {
            if (t.unrepresentable === `throw`)
              throw Error("Literal `undefined` cannot be represented in JSON Schema");
          } else if (typeof e == `bigint`) {
            if (t.unrepresentable === `throw`)
              throw Error(`BigInt literals cannot be represented in JSON Schema`);
            a.push(Number(e));
          } else a.push(e);
        if (a.length !== 0) {
          if (a.length === 1) {
            let e = a[0];
            ((n.type = e === null ? `null` : typeof e),
              t.target === `draft-04` || t.target === `openapi-3.0` ? (n.enum = [e]) : (n.const = e));
          } else
            (a.every((e) => typeof e == `number`) && (n.type = `number`),
              a.every((e) => typeof e == `string`) && (n.type = `string`),
              a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
              a.every((e) => e === null) && (n.type = `null`),
              (n.enum = a));
        }
      }),
      (Oi = (e, t, n, r) => {
        if (t.unrepresentable === `throw`) throw Error(`Custom types cannot be represented in JSON Schema`);
      }),
      (ki = (e, t, n, r) => {
        if (t.unrepresentable === `throw`) throw Error(`Transforms cannot be represented in JSON Schema`);
      }),
      (Ai = (e, t, n, r) => {
        let i = n,
          a = e._zod.def,
          { minimum: o, maximum: s } = e._zod.bag;
        (typeof o == `number` && (i.minItems = o),
          typeof s == `number` && (i.maxItems = s),
          (i.type = `array`),
          (i.items = fi(a.element, t, { ...r, path: [...r.path, `items`] })));
      }),
      (ji = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        ((i.type = `object`), (i.properties = {}));
        let o = a.shape;
        for (let e in o) i.properties[e] = fi(o[e], t, { ...r, path: [...r.path, `properties`, e] });
        let s = new Set(Object.keys(o)),
          c = new Set(
            [...s].filter((e) => {
              let n = a.shape[e]._zod;
              return t.io === `input` ? n.optin === void 0 : n.optout === void 0;
            }),
          );
        (c.size > 0 && (i.required = Array.from(c)),
          a.catchall?._zod.def.type === `never`
            ? (i.additionalProperties = !1)
            : a.catchall
              ? a.catchall &&
                (i.additionalProperties = fi(a.catchall, t, {
                  ...r,
                  path: [...r.path, `additionalProperties`],
                }))
              : t.io === `output` && (i.additionalProperties = !1));
      }),
      (z = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.inclusive === !1,
          o = i.options.map((e, n) => fi(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }));
        a ? (n.oneOf = o) : (n.anyOf = o);
      }),
      (Mi = (e, t, n, r) => {
        let i = e._zod.def,
          a = fi(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
          o = fi(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
          s = (e) => `allOf` in e && Object.keys(e).length === 1;
        n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
      }),
      (Ni = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        i.type = `object`;
        let o = a.keyType,
          s = o._zod.bag?.patterns;
        if (a.mode === `loose` && s && s.size > 0) {
          let e = fi(a.valueType, t, { ...r, path: [...r.path, `patternProperties`, `*`] });
          i.patternProperties = {};
          for (let t of s) i.patternProperties[t.source] = e;
        } else
          ((t.target === `draft-07` || t.target === `draft-2020-12`) &&
            (i.propertyNames = fi(a.keyType, t, { ...r, path: [...r.path, `propertyNames`] })),
            (i.additionalProperties = fi(a.valueType, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            })));
        let c = o._zod.values;
        if (c) {
          let e = [...c].filter((e) => typeof e == `string` || typeof e == `number`);
          e.length > 0 && (i.required = e);
        }
      }),
      (Pi = (e, t, n, r) => {
        let i = e._zod.def,
          a = fi(i.innerType, t, r),
          o = t.seen.get(e);
        t.target === `openapi-3.0`
          ? ((o.ref = i.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: `null` }]);
      }),
      (Fi = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }),
      (Ii = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Li = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          t.io === `input` && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Ri = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
        let o;
        try {
          o = i.catchValue(void 0);
        } catch {
          throw Error(`Dynamic catch values are not supported in JSON Schema`);
        }
        n.default = o;
      }),
      (zi = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.in._zod.traits.has(`$ZodTransform`),
          o = t.io === `input` ? (a ? i.out : i.in) : i.out;
        fi(o, t, r);
        let s = t.seen.get(e);
        s.ref = o;
      }),
      (Bi = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.readOnly = !0));
      }),
      (Vi = (e, t, n, r) => {
        let i = e._zod.def;
        fi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }));
  }),
  Ui = o(() => {
    (v(), Ve(), Oe(), tr(), It(), Bt(), Ce(), bt(), or(), Rt(), ui(), vi(), Hi(), vi());
  }),
  Wi = o(() => {
    Ui();
  });
function Gi(e) {
  return Ar(Yi, e);
}
function Ki(e) {
  return jr(Xi, e);
}
function qi(e) {
  return Mr(Zi, e);
}
function Ji(e) {
  return Nr(Qi, e);
}
var Yi,
  Xi,
  Zi,
  Qi,
  $i = o(() => {
    (Ui(),
      Bo(),
      (Yi = f(`ZodISODateTime`, (e, t) => {
        (_n.init(e, t), Ya.init(e, t));
      })),
      (Xi = f(`ZodISODate`, (e, t) => {
        (vn.init(e, t), Ya.init(e, t));
      })),
      (Zi = f(`ZodISOTime`, (e, t) => {
        (yn.init(e, t), Ya.init(e, t));
      })),
      (Qi = f(`ZodISODuration`, (e, t) => {
        (bn.init(e, t), Ya.init(e, t));
      })));
  }),
  ea,
  ta,
  na = o(() => {
    (Ui(),
      Ce(),
      (ea = (e, t) => {
        (De.init(e, t),
          (e.name = `ZodError`),
          Object.defineProperties(e, {
            format: { value: (t) => Te(e, t) },
            flatten: { value: (t) => we(e, t) },
            addIssue: {
              value: (t) => {
                (e.issues.push(t), (e.message = JSON.stringify(e.issues, b, 2)));
              },
            },
            addIssues: {
              value: (t) => {
                (e.issues.push(...t), (e.message = JSON.stringify(e.issues, b, 2)));
              },
            },
            isEmpty: {
              get() {
                return e.issues.length === 0;
              },
            },
          }));
      }),
      (ta = f(`ZodError`, ea, { Parent: Error })));
  }),
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
  ha = o(() => {
    (Ui(),
      na(),
      (ra = ke(ta)),
      (ia = P(ta)),
      (aa = Ae(ta)),
      (oa = je(ta)),
      (sa = Ne(ta)),
      (ca = Pe(ta)),
      (la = Fe(ta)),
      (ua = Ie(ta)),
      (da = Le(ta)),
      (fa = Re(ta)),
      (pa = ze(ta)),
      (ma = Be(ta)));
  });
function ga(e, t, n) {
  let r = Object.getPrototypeOf(e),
    i = Ga.get(r);
  if ((i || ((i = new Set()), Ga.set(r, i)), !i.has(t))) {
    i.add(t);
    for (let e in n) {
      let t = n[e];
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !1,
        get() {
          let n = t.bind(this);
          return (
            Object.defineProperty(this, e, { configurable: !0, writable: !0, enumerable: !0, value: n }),
            n
          );
        },
        set(t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, enumerable: !0, value: t });
        },
      });
    }
  }
}
function _a(e) {
  return sr(Ja, e);
}
function va(e) {
  return Pr(ho, e);
}
function ya(e) {
  return Fr(go, e);
}
function ba(e) {
  return Ir(_o, e);
}
function xa(e) {
  return Lr(vo, e);
}
function Sa() {
  return Rr(yo);
}
function Ca(e) {
  return zr(bo, e);
}
function wa(e, t) {
  return oi(xo, e, t);
}
function Ta(e, t) {
  let n = { type: `object`, shape: e ?? {}, ...A(t) };
  return new So(n);
}
function Ea(e, t) {
  return new So({ type: `object`, shape: e, catchall: Ca(), ...A(t) });
}
function Da(e, t) {
  return new Co({ type: `union`, options: e, ...A(t) });
}
function Oa(e, t, n) {
  return new wo({ type: `union`, options: t, discriminator: e, ...A(n) });
}
function ka(e, t) {
  return new To({ type: `intersection`, left: e, right: t });
}
function Aa(e, t, n) {
  return !t || !t._zod
    ? new Eo({ type: `record`, keyType: _a(), valueType: e, ...A(t) })
    : new Eo({ type: `record`, keyType: e, valueType: t, ...A(n) });
}
function ja(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new Do({ type: `enum`, entries: n, ...A(t) });
}
function Ma(e, t) {
  return new Oo({ type: `literal`, values: Array.isArray(e) ? e : [e], ...A(t) });
}
function Na(e) {
  return new ko({ type: `transform`, transform: e });
}
function Pa(e) {
  return new Ao({ type: `optional`, innerType: e });
}
function Fa(e) {
  return new jo({ type: `optional`, innerType: e });
}
function Ia(e) {
  return new Mo({ type: `nullable`, innerType: e });
}
function La(e, t) {
  return new No({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ie(t);
    },
  });
}
function Ra(e, t) {
  return new Po({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ie(t);
    },
  });
}
function za(e, t) {
  return new Fo({ type: `nonoptional`, innerType: e, ...A(t) });
}
function Ba(e, t) {
  return new Io({ type: `catch`, innerType: e, catchValue: typeof t == `function` ? t : () => t });
}
function Va(e, t) {
  return new Lo({ type: `pipe`, in: e, out: t });
}
function Ha(e) {
  return new Ro({ type: `readonly`, innerType: e });
}
function Ua(e, t = {}) {
  return si(zo, e, t);
}
function Wa(e, t) {
  return ci(e, t);
}
var Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  B,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo = o(() => {
    (Ui(),
      Hi(),
      vi(),
      Wi(),
      $i(),
      ha(),
      (Ga = new WeakMap()),
      (Ka = f(
        `ZodType`,
        (e, t) => (
          rn.init(e, t),
          Object.assign(e[`~standard`], { jsonSchema: { input: _i(e, `input`), output: _i(e, `output`) } }),
          (e.toJSONSchema = gi(e, {})),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, "_def", { value: t }),
          (e.parse = (t, n) => ra(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => aa(e, t, n)),
          (e.parseAsync = async (t, n) => ia(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => oa(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => sa(e, t, n)),
          (e.decode = (t, n) => ca(e, t, n)),
          (e.encodeAsync = async (t, n) => la(e, t, n)),
          (e.decodeAsync = async (t, n) => ua(e, t, n)),
          (e.safeEncode = (t, n) => da(e, t, n)),
          (e.safeDecode = (t, n) => fa(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => pa(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => ma(e, t, n)),
          ga(e, `ZodType`, {
            check(...e) {
              let t = this.def;
              return this.clone(
                te(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...e.map((e) =>
                      typeof e == `function`
                        ? { _zod: { check: e, def: { check: `custom` }, onattach: [] } }
                        : e,
                    ),
                  ],
                }),
                { parent: !0 },
              );
            },
            with(...e) {
              return this.check(...e);
            },
            clone(e, t) {
              return k(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return (e.add(this, t), this);
            },
            refine(e, t) {
              return this.check(Ua(e, t));
            },
            superRefine(e, t) {
              return this.check(Wa(e, t));
            },
            overwrite(e) {
              return this.check(ei(e));
            },
            optional() {
              return Pa(this);
            },
            exactOptional() {
              return Fa(this);
            },
            nullable() {
              return Ia(this);
            },
            nullish() {
              return Pa(Ia(this));
            },
            nonoptional(e) {
              return za(this, e);
            },
            array() {
              return wa(this);
            },
            or(e) {
              return Da([this, e]);
            },
            and(e) {
              return ka(this, e);
            },
            transform(e) {
              return Va(this, Na(e));
            },
            default(e) {
              return La(this, e);
            },
            prefault(e) {
              return Ra(this, e);
            },
            catch(e) {
              return Ba(this, e);
            },
            pipe(e) {
              return Va(this, e);
            },
            readonly() {
              return Ha(this);
            },
            describe(e) {
              let t = this.clone();
              return (ar.add(t, { description: e }), t);
            },
            meta(...e) {
              if (e.length === 0) return ar.get(this);
              let t = this.clone();
              return (ar.add(t, e[0]), t);
            },
            isOptional() {
              return this.safeParse(void 0).success;
            },
            isNullable() {
              return this.safeParse(null).success;
            },
            apply(e) {
              return e(this);
            },
          }),
          Object.defineProperty(e, "description", {
            get() {
              return ar.get(e)?.description;
            },
            configurable: !0,
          }),
          e
        ),
      )),
      (qa = f(`_ZodString`, (e, t) => {
        (an.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => bi(e, t, n, r)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          ga(e, `_ZodString`, {
            regex(...e) {
              return this.check(Jr(...e));
            },
            includes(...e) {
              return this.check(Zr(...e));
            },
            startsWith(...e) {
              return this.check(Qr(...e));
            },
            endsWith(...e) {
              return this.check($r(...e));
            },
            min(...e) {
              return this.check(Kr(...e));
            },
            max(...e) {
              return this.check(Gr(...e));
            },
            length(...e) {
              return this.check(qr(...e));
            },
            nonempty(...e) {
              return this.check(Kr(1, ...e));
            },
            lowercase(e) {
              return this.check(Yr(e));
            },
            uppercase(e) {
              return this.check(Xr(e));
            },
            trim() {
              return this.check(ni());
            },
            normalize(...e) {
              return this.check(ti(...e));
            },
            toLowerCase() {
              return this.check(ri());
            },
            toUpperCase() {
              return this.check(ii());
            },
            slugify() {
              return this.check(ai());
            },
          }));
      })),
      (Ja = f(`ZodString`, (e, t) => {
        (an.init(e, t),
          qa.init(e, t),
          (e.email = (t) => e.check(cr(Xa, t))),
          (e.url = (t) => e.check(mr($a, t))),
          (e.jwt = (t) => e.check(kr(mo, t))),
          (e.emoji = (t) => e.check(hr(eo, t))),
          (e.guid = (t) => e.check(lr(Za, t))),
          (e.uuid = (t) => e.check(ur(Qa, t))),
          (e.uuidv4 = (t) => e.check(dr(Qa, t))),
          (e.uuidv6 = (t) => e.check(fr(Qa, t))),
          (e.uuidv7 = (t) => e.check(pr(Qa, t))),
          (e.nanoid = (t) => e.check(gr(to, t))),
          (e.guid = (t) => e.check(lr(Za, t))),
          (e.cuid = (t) => e.check(_r(no, t))),
          (e.cuid2 = (t) => e.check(vr(ro, t))),
          (e.ulid = (t) => e.check(yr(io, t))),
          (e.base64 = (t) => e.check(Er(uo, t))),
          (e.base64url = (t) => e.check(Dr(fo, t))),
          (e.xid = (t) => e.check(br(ao, t))),
          (e.ksuid = (t) => e.check(xr(oo, t))),
          (e.ipv4 = (t) => e.check(Sr(so, t))),
          (e.ipv6 = (t) => e.check(Cr(co, t))),
          (e.cidrv4 = (t) => e.check(wr(lo, t))),
          (e.cidrv6 = (t) => e.check(Tr(B, t))),
          (e.e164 = (t) => e.check(Or(po, t))),
          (e.datetime = (t) => e.check(Gi(t))),
          (e.date = (t) => e.check(Ki(t))),
          (e.time = (t) => e.check(qi(t))),
          (e.duration = (t) => e.check(Ji(t))));
      })),
      (Ya = f(`ZodStringFormat`, (e, t) => {
        (R.init(e, t), qa.init(e, t));
      })),
      (Xa = f(`ZodEmail`, (e, t) => {
        (cn.init(e, t), Ya.init(e, t));
      })),
      (Za = f(`ZodGUID`, (e, t) => {
        (on.init(e, t), Ya.init(e, t));
      })),
      (Qa = f(`ZodUUID`, (e, t) => {
        (sn.init(e, t), Ya.init(e, t));
      })),
      ($a = f(`ZodURL`, (e, t) => {
        (ln.init(e, t), Ya.init(e, t));
      })),
      (eo = f(`ZodEmoji`, (e, t) => {
        (un.init(e, t), Ya.init(e, t));
      })),
      (to = f(`ZodNanoID`, (e, t) => {
        (dn.init(e, t), Ya.init(e, t));
      })),
      (no = f(`ZodCUID`, (e, t) => {
        (fn.init(e, t), Ya.init(e, t));
      })),
      (ro = f(`ZodCUID2`, (e, t) => {
        (pn.init(e, t), Ya.init(e, t));
      })),
      (io = f(`ZodULID`, (e, t) => {
        (mn.init(e, t), Ya.init(e, t));
      })),
      (ao = f(`ZodXID`, (e, t) => {
        (hn.init(e, t), Ya.init(e, t));
      })),
      (oo = f(`ZodKSUID`, (e, t) => {
        (gn.init(e, t), Ya.init(e, t));
      })),
      (so = f(`ZodIPv4`, (e, t) => {
        (xn.init(e, t), Ya.init(e, t));
      })),
      (co = f(`ZodIPv6`, (e, t) => {
        (Sn.init(e, t), Ya.init(e, t));
      })),
      (lo = f(`ZodCIDRv4`, (e, t) => {
        (Cn.init(e, t), Ya.init(e, t));
      })),
      (B = f(`ZodCIDRv6`, (e, t) => {
        (wn.init(e, t), Ya.init(e, t));
      })),
      (uo = f(`ZodBase64`, (e, t) => {
        (Tn.init(e, t), Ya.init(e, t));
      })),
      (fo = f(`ZodBase64URL`, (e, t) => {
        (En.init(e, t), Ya.init(e, t));
      })),
      (po = f(`ZodE164`, (e, t) => {
        (Dn.init(e, t), Ya.init(e, t));
      })),
      (mo = f(`ZodJWT`, (e, t) => {
        (On.init(e, t), Ya.init(e, t));
      })),
      (ho = f(`ZodNumber`, (e, t) => {
        (kn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => xi(e, t, n, r)),
          ga(e, `ZodNumber`, {
            gt(e, t) {
              return this.check(Hr(e, t));
            },
            gte(e, t) {
              return this.check(Ur(e, t));
            },
            min(e, t) {
              return this.check(Ur(e, t));
            },
            lt(e, t) {
              return this.check(Br(e, t));
            },
            lte(e, t) {
              return this.check(Vr(e, t));
            },
            max(e, t) {
              return this.check(Vr(e, t));
            },
            int(e) {
              return this.check(ya(e));
            },
            safe(e) {
              return this.check(ya(e));
            },
            positive(e) {
              return this.check(Hr(0, e));
            },
            nonnegative(e) {
              return this.check(Ur(0, e));
            },
            negative(e) {
              return this.check(Br(0, e));
            },
            nonpositive(e) {
              return this.check(Vr(0, e));
            },
            multipleOf(e, t) {
              return this.check(Wr(e, t));
            },
            step(e, t) {
              return this.check(Wr(e, t));
            },
            finite() {
              return this;
            },
          }));
        let n = e._zod.bag;
        ((e.minValue = Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
          (e.maxValue = Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
          (e.isInt = (n.format ?? ``).includes(`int`) || Number.isSafeInteger(n.multipleOf ?? 0.5)),
          (e.isFinite = !0),
          (e.format = n.format ?? null));
      })),
      (go = f(`ZodNumberFormat`, (e, t) => {
        (An.init(e, t), ho.init(e, t));
      })),
      (_o = f(`ZodBoolean`, (e, t) => {
        (jn.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Si(e, t, n, r)));
      })),
      (vo = f(`ZodNull`, (e, t) => {
        (Mn.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ci(e, t, n, r)));
      })),
      (yo = f(`ZodUnknown`, (e, t) => {
        (Nn.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ti(e, t, n, r)));
      })),
      (bo = f(`ZodNever`, (e, t) => {
        (Pn.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => wi(e, t, n, r)));
      })),
      (xo = f(`ZodArray`, (e, t) => {
        (Fn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ai(e, t, n, r)),
          (e.element = t.element),
          ga(e, `ZodArray`, {
            min(e, t) {
              return this.check(Kr(e, t));
            },
            nonempty(e) {
              return this.check(Kr(1, e));
            },
            max(e, t) {
              return this.check(Gr(e, t));
            },
            length(e, t) {
              return this.check(qr(e, t));
            },
            unwrap() {
              return this.element;
            },
          }));
      })),
      (So = f(`ZodObject`, (e, t) => {
        (Ln.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ji(e, t, n, r)),
          T(e, `shape`, () => t.shape),
          ga(e, `ZodObject`, {
            keyof() {
              return ja(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: Sa() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: Sa() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: Ca() });
            },
            strip() {
              return this.clone({ ...this._zod.def, catchall: void 0 });
            },
            extend(e) {
              return M(this, e);
            },
            safeExtend(e) {
              return se(this, e);
            },
            merge(e) {
              return ce(this, e);
            },
            pick(e) {
              return j(this, e);
            },
            omit(e) {
              return oe(this, e);
            },
            partial(...e) {
              return le(Ao, this, e[0]);
            },
            required(...e) {
              return ue(Fo, this, e[0]);
            },
          }));
      })),
      (Co = f(`ZodUnion`, (e, t) => {
        (Rn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => z(e, t, n, r)),
          (e.options = t.options));
      })),
      (wo = f(`ZodDiscriminatedUnion`, (e, t) => {
        (Co.init(e, t), zn.init(e, t));
      })),
      (To = f(`ZodIntersection`, (e, t) => {
        (Bn.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Mi(e, t, n, r)));
      })),
      (Eo = f(`ZodRecord`, (e, t) => {
        (Vn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ni(e, t, n, r)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType));
      })),
      (Do = f(`ZodEnum`, (e, t) => {
        (Hn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ei(e, t, n, r)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries)));
        let n = new Set(Object.keys(t.entries));
        ((e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new Do({ ...t, checks: [], ...A(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new Do({ ...t, checks: [], ...A(r), entries: i });
          }));
      })),
      (Oo = f(`ZodLiteral`, (e, t) => {
        (Un.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Di(e, t, n, r)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
              return t.values[0];
            },
          }));
      })),
      (ko = f(`ZodTransform`, (e, t) => {
        (Wn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ki(e, t, n, r)),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new g(e.constructor.name);
            n.addIssue = (r) => {
              if (typeof r == `string`) n.issues.push(_e(r, n.value, t));
              else {
                let t = r;
                (t.fatal && (t.continue = !1),
                  (t.code ??= `custom`),
                  (t.input ??= n.value),
                  (t.inst ??= e),
                  n.issues.push(_e(t)));
              }
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise
              ? i.then((e) => ((n.value = e), (n.fallback = !0), n))
              : ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (Ao = f(`ZodOptional`, (e, t) => {
        (Gn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (jo = f(`ZodExactOptional`, (e, t) => {
        (Kn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Mo = f(`ZodNullable`, (e, t) => {
        (qn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Pi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (No = f(`ZodDefault`, (e, t) => {
        (Jn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ii(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap));
      })),
      (Po = f(`ZodPrefault`, (e, t) => {
        (Yn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Li(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Fo = f(`ZodNonOptional`, (e, t) => {
        (Xn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Fi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Io = f(`ZodCatch`, (e, t) => {
        (Zn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ri(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap));
      })),
      (Lo = f(`ZodPipe`, (e, t) => {
        (Qn.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => zi(e, t, n, r)),
          (e.in = t.in),
          (e.out = t.out));
      })),
      (Ro = f(`ZodReadonly`, (e, t) => {
        ($n.init(e, t),
          Ka.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Bi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (zo = f(`ZodCustom`, (e, t) => {
        (er.init(e, t), Ka.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r)));
      })));
  }),
  Vo = o(() => {
    Ui();
  }),
  Ho = o(() => {
    (Ui(), Bo(), Wi(), na(), ha(), Vo(), Hi(), or(), Wi(), $i(), Bo(), Ce());
  }),
  Uo = o(() => {
    (Ho(), Ho());
  });
function Wo(e) {
  let t = $o.safeParse(e);
  return t.success ? t.data : void 0;
}
function Go(e) {
  if (typeof e == `object` && e)
    try {
      let t = Object.getPrototypeOf(e);
      if (t !== Object.prototype && t != null) return;
      let n = Object.getOwnPropertyDescriptors(e),
        r = Reflect.ownKeys(n);
      if (
        r.length > Jo.maxKeys ||
        r.some((e) => !Xo.safeParse(e).success) ||
        Object.values(n).some((e) => !e.enumerable || !Object.hasOwn(e, `value`))
      )
        return;
      let i = Qo.safeParse(Object.fromEntries(Object.entries(n).map(([e, t]) => [e, t.value])));
      return !i.success || !qo(JSON.stringify(i.data)) ? void 0 : i.data;
    } catch {
      return;
    }
}
function Ko(e) {
  if (e != null && qo(e))
    try {
      return Go(JSON.parse(e));
    } catch {
      return;
    }
}
function qo(e) {
  return e.length <= Jo.maxSerializedBytes && new TextEncoder().encode(e).byteLength <= Jo.maxSerializedBytes;
}
var Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es = o(() => {
    (Uo(),
      (Jo = { maxSerializedBytes: 2048, maxKeys: 6, maxKeyLength: 64, maxStringValueLength: 256 }),
      (Yo = _a().regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)),
      (Xo = _a()
        .max(Jo.maxKeyLength)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/)
        .refine((e) => e !== `__proto__` && e !== `constructor` && e !== `prototype`)),
      (Zo = Da([Yo.max(Jo.maxStringValueLength), va(), ba(), xa()])),
      (Qo = Aa(Xo, Zo)),
      ($o = Yo.max(128).refine((e) => e.trim().length > 0)));
  });
function ts(e) {
  return e.length > 0;
}
function ns(e) {
  return e.length;
}
function rs(e, t) {
  return t.map((t) => {
    let n = e.getPropertyValue(t).trim();
    return { property: t, value: n, previousValue: n };
  });
}
function is(e, t) {
  let n = new Map(t.map((e) => [e.property, e]));
  return e.map((e) => {
    let t = n.get(e.property);
    return t == null ? e : { ...e, previousValue: t.previousValue, value: t.value };
  });
}
function as(e) {
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Fs)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ||
    Array.from(e.children).some((e) => (e.textContent?.replace(/\s+/g, ` `).trim().length ?? 0) > 0)
    ? null
    : t;
}
function os(e) {
  let t = as(e);
  if (t != null) return { value: t, previousValue: t };
}
function ss(e) {
  return e.map((e) => ({ property: e.property }));
}
function cs(e, t) {
  switch (e.mode) {
    case `create`:
      return t.mode === `create`;
    case `edit`:
      return t.mode === `edit` && e.commentId === t.commentId;
    case `design`:
      return t.mode === `design` && e.groupId === t.groupId;
  }
}
function ls(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (t.hostname !== `docs.google.com`) return null;
  let n = t.pathname.split(`/`).filter((e) => e.length > 0),
    r = n.indexOf(`document`),
    i = r === -1 ? -1 : n.indexOf(`d`, r + 1),
    a = i === -1 ? void 0 : n[i + 1],
    o = a === `e` && n[i + 3] === `pub` ? n[i + 2] : a;
  return o == null || o.length === 0 ? null : { documentId: o, tabId: ps(t) ?? void 0 };
}
function us(e) {
  return ls(e) != null || ds(e) != null;
}
function ds(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return null;
  }
  if (t.hostname !== `docs.google.com`) return null;
  let n = t.pathname.split(`/`).filter((e) => e.length > 0),
    r = n.indexOf(`spreadsheets`),
    i = r === -1 ? -1 : n.indexOf(`d`, r + 1);
  return i === -1 ? null : (n[i + 1] ?? null);
}
function fs({ documentTitle: e, pageUrl: t, selectedText: n, visibleText: r }) {
  let i = ls(t);
  if (i == null) return;
  let a = ms(e),
    o = ms(n),
    s = ms(r);
  return {
    provider: `google-docs`,
    kind: `google-docs`,
    documentId: i.documentId,
    tabId: i.tabId,
    documentTitle: a,
    selectedText: o,
    visibleText: s,
  };
}
function ps(e) {
  let t = ms(e.searchParams.get(`tab`));
  if (t != null) return t;
  let n = e.hash.startsWith(`#`) ? e.hash.slice(1) : e.hash;
  return ms(new URLSearchParams(n).get(`tab`)) ?? null;
}
function ms(e) {
  let t = e?.replace(/\s+/g, ` `).trim();
  return t == null || t.length === 0 ? void 0 : t;
}
function hs(e) {
  return e == null || e <= 0 ? 1 : 1 / e;
}
function gs(e, { viewport: t, viewportScale: n, zoomFactor: r = 1 }) {
  let i = hs(n),
    a = Es(e, r),
    o = t.width * r,
    s = t.height * r,
    c = 16 * i,
    l = Rs * i,
    u = Math.min(Ls * i, o - c * 2),
    d = Os(a.x, c, o - u - c),
    f = a.y - l - zs * i,
    p = a.y + a.height + zs * i;
  return { x: d, y: f >= c ? f : Os(p, c, s - l - c), width: u, height: l };
}
function _s(e, t = Hs) {
  return e.flatMap((e) => bs(e, t)).join(`

`);
}
function vs(e) {
  let t = e.trim(),
    n = Ss(t);
  if (n != null) return n;
  let r = Cs(t);
  return r == null ? t : `#${Ts(r.red)}${Ts(r.green)}${Ts(r.blue)}${r.alpha == null ? `` : Ts(r.alpha)}`;
}
function ys(e, t) {
  if (e.length < 2) return e;
  let n = 28.5,
    r = t - 16 - Bs / 2,
    i = new Map();
  e.forEach((e, t) => {
    let n = `${Math.round(e.x)}:${Math.round(e.y)}`,
      r = i.get(n);
    if (r == null) {
      i.set(n, [t]);
      return;
    }
    r.push(t);
  });
  let a = e.map((e) => ({ ...e }));
  for (let t of i.values()) {
    if (t.length < 2) continue;
    let i = t.reduce((t, n) => t + e[n].x, 0) / t.length - ((t.length - 1) * Vs) / 2,
      o = i + (t.length - 1) * Vs,
      s = i < n ? n - i : o > r ? r - o : 0;
    t.forEach((t, o) => {
      a[t] = { x: Os(i + o * Vs + s, n, r), y: e[t].y };
    });
  }
  return a;
}
function bs(e, t) {
  let n = e.declarations.filter((e) => e.value.trim() !== e.previousValue.trim());
  return n.length === 0
    ? []
    : [
        [
          `[${t}~="${xs(e.draftAttribute)}"] {`,
          ...n.map((e) => `  ${e.property}: ${e.value} !important;`),
          `}`,
        ].join(`
`),
      ];
}
function xs(e) {
  return e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`);
}
function Ss(e) {
  let t = e.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)?.[1];
  return t == null
    ? null
    : t.length === 3 || t.length === 4
      ? `#${Array.from(t)
          .map((e) => e + e)
          .join(``)
          .toUpperCase()}`
      : `#${t.toUpperCase()}`;
}
function Cs(e) {
  let t = e.match(/^rgba?\((.*)\)$/i)?.[1];
  if (t == null) return null;
  let [n, r] = t.split(`/`).map((e) => e.trim()),
    i = n.includes(`,`) ? n.split(`,`).map((e) => e.trim()) : n.split(/\s+/),
    a = r ?? i[3],
    o = Number.parseFloat(i[0] ?? ``),
    s = Number.parseFloat(i[1] ?? ``),
    c = Number.parseFloat(i[2] ?? ``);
  return [o, s, c].some(Number.isNaN) ? null : { alpha: a == null ? null : ws(a), blue: c, green: s, red: o };
}
function ws(e) {
  return e.endsWith(`%`) ? (Number.parseFloat(e) / 100) * 255 : Number.parseFloat(e) * 255;
}
function Ts(e) {
  return Math.round(Os(e, 0, 255))
    .toString(16)
    .padStart(2, `0`)
    .toUpperCase();
}
function Es(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function Ds(e, t) {
  let n = e ?? [],
    r = t ?? [];
  return (
    n.length === r.length &&
    n.every((e, t) => {
      let n = r[t];
      return (
        n != null && e.selector === n.selector && e.scrollLeft === n.scrollLeft && e.scrollTop === n.scrollTop
      );
    })
  );
}
function Os(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function ks(e, t) {
  if (
    e.kind !== t.kind ||
    !(
      e.pageUrl === t.pageUrl &&
      e.title === t.title &&
      e.elementPath === t.elementPath &&
      e.frameUrl === t.frameUrl &&
      e.framePath.length === t.framePath.length &&
      e.framePath.every((e, n) => e === t.framePath[n]) &&
      Ds(e.scrollContainers, t.scrollContainers) &&
      e.isFixed === t.isFixed &&
      e.point.xPercent === t.point.xPercent &&
      e.point.y === t.point.y &&
      e.rect.x === t.rect.x &&
      e.rect.y === t.rect.y &&
      e.rect.width === t.rect.width &&
      e.rect.height === t.rect.height &&
      e.role === t.role &&
      e.name === t.name &&
      e.selector === t.selector &&
      e.nearbyText === t.nearbyText
    )
  )
    return !1;
  switch (e.kind) {
    case `virtual`:
      return t.kind === `virtual` && e.surfaceId === t.surfaceId && e.targetId === t.targetId;
    case `element`:
      return t.kind === `element` && e.runtimeElementId === t.runtimeElementId;
    case `region`:
      return !0;
    case `text`:
      return (
        t.kind === `text` &&
        e.selectedText === t.selectedText &&
        e.textLocator.kind === t.textLocator.kind &&
        e.textLocator.direction === t.textLocator.direction &&
        (e.textLocator.kind === `form-control` ||
          (t.textLocator.kind === `dom` && e.textLocator.rangeText === t.textLocator.rangeText)) &&
        e.textLocator.selector === t.textLocator.selector &&
        e.textLocator.shadowHosts.length === t.textLocator.shadowHosts.length &&
        e.textLocator.shadowHosts.every((e, n) => e === t.textLocator.shadowHosts[n]) &&
        e.textLocator.startOffset === t.textLocator.startOffset &&
        e.textLocator.endOffset === t.textLocator.endOffset &&
        e.selectionRects.length === t.selectionRects.length &&
        e.selectionRects.every((e, n) => {
          let r = t.selectionRects[n];
          return r != null && e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height;
        })
      );
  }
}
function As(e, t) {
  return e.x >= 0 && e.y >= 0 && e.x < t.width && e.y < t.height;
}
function js(e, t, n = 4) {
  return Math.abs(t.x - e.x) >= n || Math.abs(t.y - e.y) >= n;
}
function Ms(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(t.x - e.x),
    height: Math.abs(t.y - e.y),
  };
}
var Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs = o(() => {
    (Uo(),
      es(),
      (Ns = _a().max(240)),
      (Ps = { BATCH: `batch`, QUICK: `quick` }),
      Ps.BATCH,
      Ps.QUICK,
      (Fs = 3),
      (Is = 2e4),
      (Ls = 240),
      (Rs = 72),
      (zs = 8),
      (Bs = 25),
      (Vs = Bs / 2),
      (Hs = `data-codex-browser-design-group`),
      (Us = `
  .element-metadata-tooltip {
    position: fixed;
    z-index: 2;
    display: grid;
    grid-template-columns: minmax(56px, auto) minmax(0, 1fr);
    align-items: baseline;
    gap: var(--browser-sidebar-metadata-row-gap) var(--browser-sidebar-metadata-column-gap);
    height: var(--browser-sidebar-metadata-height);
    border-radius: var(--browser-sidebar-metadata-radius);
    outline: 1px solid rgba(15, 23, 42, 0.08);
    outline-offset: 0;
    background: white;
    color: rgb(15, 23, 42);
    padding: var(--browser-sidebar-metadata-padding-y) var(--browser-sidebar-metadata-padding-x);
    box-sizing: border-box;
    font-size: var(--browser-sidebar-overlay-font-size);
    line-height: 1.25;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.08);
    pointer-events: none;
  }

  .element-metadata-cell {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .element-metadata-tag {
    color: rgb(28, 28, 28);
  }

  .element-metadata-label {
    color: rgb(125, 125, 125);
    text-transform: lowercase;
  }

  .element-metadata-value {
    color: rgb(15, 23, 42);
    text-align: right;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  }

  @media (prefers-color-scheme: dark) {
    .element-metadata-tooltip {
      border-color: rgba(255, 255, 255, 0.04);
      background: rgba(15, 23, 42, 0.95);
      color: white;
    }

    .element-metadata-tag,
    .element-metadata-value {
      color: white;
    }

    .element-metadata-label {
      color: rgba(226, 232, 240, 0.62);
    }
  }
`),
      (Ws = { height: 26, hotspot: { x: 0, y: 26 }, width: 26 }),
      (Gs = Ws.width),
      (Ks = { defaultLocale: `en-US`, locale: `en-US`, messages: {} }));
  });
function Js(e) {
  if (e == null) return null;
  let t = [],
    n = e;
  for (; n !== window;) {
    let e = n.frameElement;
    if (!$s(e)) return null;
    let r = Nc(e);
    if (r == null) return null;
    t.unshift(r);
    let i = e.ownerDocument.defaultView;
    if (i == null) return null;
    n = i;
  }
  return t;
}
function Ys(e) {
  return e === `auto` || e === `scroll` || e === `overlay`;
}
function Xs(e) {
  return Ys(e) || e === `clip` || e === `hidden`;
}
function Zs(e) {
  return e === document.documentElement || e === document.body;
}
function V(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n = t.ownerDocument?.defaultView,
    r = n?.HTMLElement ?? (typeof HTMLElement > `u` ? null : HTMLElement);
  if (r != null && e instanceof r) return !0;
  let i = n?.Node ?? (typeof Node > `u` ? null : Node);
  return (
    i != null &&
    t.nodeType === i.ELEMENT_NODE &&
    t.ownerDocument != null &&
    typeof t.getBoundingClientRect == `function` &&
    typeof t.tagName == `string`
  );
}
function Qs(e) {
  if (e.assignedSlot != null) return e.assignedSlot;
  if (e.parentElement != null) return e.parentElement;
  let t = e.getRootNode();
  return Rc(t) ? t.host : null;
}
function $s(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n =
      t.ownerDocument?.defaultView?.HTMLIFrameElement ??
      (typeof HTMLIFrameElement > `u` ? null : HTMLIFrameElement);
  return (n != null && e instanceof n) || (t.tagName?.toLowerCase() === `iframe` && `contentWindow` in t);
}
function ec(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function tc(e) {
  if (!$s(e)) return null;
  try {
    let t = e.contentWindow;
    return t?.document == null ? null : t;
  } catch {
    return null;
  }
}
function nc(e, t, n) {
  let r = rc(window, e, t, n);
  return r === Yc ? null : r;
}
function rc(e, t, n, r) {
  let i = e.document.elementFromPoint(t, n);
  if (i == null) return null;
  for (; i.shadowRoot != null;) {
    let e = i.shadowRoot.elementFromPoint(t, n);
    if (!V(e) || e === i) break;
    i = e;
  }
  if ($s(i)) {
    let e = r?.(i, { x: t, y: n });
    if (e !== void 0) return e ?? Yc;
    let a = tc(i);
    if (a != null) {
      let e = i.getBoundingClientRect(),
        o = rc(a, t - e.left, n - e.top, r);
      if (o != null) return o;
    }
  }
  return i;
}
function ic(e = window) {
  let t = [],
    n = [e],
    r = new Set();
  for (; n.length > 0;) {
    let e = n.pop();
    if (e == null || r.has(e)) continue;
    (r.add(e), t.push(e));
    let i = ec(e);
    if (i != null)
      for (let e of Pc(i)) {
        let t = tc(e);
        t != null && n.push(t);
      }
  }
  return t;
}
function ac(e) {
  let t = new Map(),
    n = () => {
      let e = ic(),
        i = new Set(e);
      for (let i of e) {
        let e = ec(i);
        if (e == null) continue;
        let a = t.get(i),
          o = e.documentElement;
        (a?.document !== e || a.documentElement !== o) &&
          (Lc(a?.cleanup), t.set(i, { cleanup: r(e, i, n), document: e, documentElement: o }));
      }
      for (let [e, n] of t) i.has(e) || (Lc(n.cleanup), t.delete(e));
    },
    r = (t, n, r) => {
      let i = e(t, n, r),
        a = (e) => {
          $s(e.target) && r();
        };
      t.addEventListener(`load`, a, !0);
      let o = new MutationObserver(r);
      return (
        o.observe(t, { childList: !0 }),
        () => {
          o.disconnect();
          try {
            t.removeEventListener(`load`, a, !0);
          } catch {}
          Lc(i);
        }
      );
    };
  return (
    n(),
    () => {
      for (let { cleanup: e } of t.values()) Lc(e);
      t.clear();
    }
  );
}
function oc(e, t, n = !1, r) {
  n ? r != null && Fc(r) : Ic(e);
  let i = `html, body, body *, #${t}, #${t} *`,
    a = e.querySelector(`style[${qc}]`),
    o = `${i} { cursor: none !important;${n ? `` : ` -webkit-user-select: none !important; user-select: none !important;`} }`;
  if (a != null) {
    let t = a.sheet?.cssRules,
      r = t?.item(0),
      s = e.defaultView?.CSSStyleRule;
    return (
      (a.textContent !== o ||
        t?.length !== 1 ||
        s == null ||
        !(r instanceof s) ||
        r.selectorText !== i ||
        r.style.length !== (n ? 1 : 2) ||
        r.style.getPropertyValue(`cursor`) !== `none` ||
        r.style.getPropertyPriority(`cursor`) !== `important` ||
        r.style.getPropertyValue(`user-select`) !== (n ? `` : `none`) ||
        r.style.getPropertyPriority(`user-select`) !== (n ? `` : `important`)) &&
        (a.textContent = o),
      a
    );
  }
  let s = e.createElement(`style`);
  return (s.setAttribute(qc, `true`), (s.textContent = o), (e.head ?? e.documentElement).append(s), s);
}
function sc(e) {
  (Ic(e),
    e.querySelectorAll(`style[${qc}]`).forEach((e) => {
      e.remove();
    }));
}
function cc() {
  for (let e of ic()) {
    let t = ec(e);
    t != null && sc(t);
  }
}
function lc(e, t, n) {
  let r = new MutationObserver((i) => {
    r.disconnect();
    try {
      let r = i.some((t) => Array.from(t.removedNodes).some((t) => t.contains(e))),
        a = document.documentElement,
        o = e.parentElement !== a;
      if ((o && a.appendChild(e), r || o)) {
        uc(e, n);
        let r = e.shadowRoot?.querySelector(`[data-browser-comment-annotation-selection-cursor]`);
        r != null && oc(document, t, r.hasAttribute(`data-browser-comment-native-text-selection`));
      }
    } finally {
      (r.observe(document, { childList: !0 }), r.observe(document.documentElement, { childList: !0 }));
    }
  });
  return (
    r.observe(document, { childList: !0 }),
    r.observe(document.documentElement, { childList: !0 }),
    () => r.disconnect()
  );
}
function uc(e, t) {
  let n = e.shadowRoot?.querySelector(`[${t}]`);
  return n != null && dc(n, !0);
}
function dc(e, t) {
  if (!e.isConnected || typeof e.showPopover != `function`) return !1;
  try {
    if (t && e.matches(`:popover-open`)) {
      if (typeof e.hidePopover != `function`) return !1;
      e.hidePopover();
    }
    return (e.matches(`:popover-open`) || e.showPopover(), e.matches(`:popover-open`));
  } catch {
    return !1;
  }
}
function fc(e) {
  if (typeof e.hidePopover == `function`)
    try {
      e.matches(`:popover-open`) && e.hidePopover();
    } catch {}
}
function pc(e) {
  return e.getAttribute(`aria-label`) || mc(e) || e.tagName.toLowerCase();
}
function mc(e) {
  if (Zs(e)) return e.tagName.toLowerCase();
  let t = (e.innerText || e.textContent || ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function hc(e) {
  let t = mc(e);
  if (t) return t;
  let n = e.closest(`section,article,main,form,nav,aside,header,footer`);
  return V(n) ? mc(n) : null;
}
function gc(e) {
  let t = [],
    n = e,
    r = 0;
  for (; n && r < 4;) {
    let e = n.tagName.toLowerCase();
    if (e === `html` || e === `body`) {
      t.length === 0 && t.unshift(e);
      break;
    }
    (t.unshift(e), (n = Qs(n)), (r += 1));
  }
  return t.join(` > `);
}
function _c(e) {
  return Js(e.ownerDocument.defaultView);
}
function vc(e) {
  let t = window,
    n = document;
  for (let r of e) {
    let e = yc(n, r);
    if (e == null) return null;
    let i = tc(e);
    if (i == null) return null;
    ((t = i), (n = i.document));
  }
  return t;
}
function yc(e, t) {
  let n = bc(e, t);
  return $s(n) ? n : null;
}
function bc(e, t) {
  let n = t.startsWith(Gc) ? t.slice(7).split(Kc) : [t],
    r = e;
  for (let [e, t] of n.entries()) {
    let i = r.querySelector(t);
    if (e === n.length - 1) return V(i) ? i : null;
    if (!V(i) || i.shadowRoot == null) return null;
    r = i.shadowRoot;
  }
  return null;
}
function xc(e, t) {
  let n = t.startsWith(Gc) ? t.slice(7).split(Kc) : [t],
    r = [e];
  for (let [e, t] of n.entries()) {
    let i = r.flatMap((e) => Array.from(e.querySelectorAll(t)).filter(V));
    if (e === n.length - 1) return i;
    r = i.flatMap((e) => (e.shadowRoot == null ? [] : [e.shadowRoot]));
  }
  return [];
}
function Sc(e) {
  let t = vc(e);
  return t == null ? null : t.document;
}
function Cc(e, { requireUnique: t = !1 } = {}) {
  let n = [],
    r = e,
    i = 0;
  for (; r != null && (t || i < 4);) {
    let a = r.tagName.toLowerCase(),
      o = r.tagName;
    if (r.id) {
      a += `#${Hc(r.id)}`;
      let i = [a, ...n].join(` > `);
      if (!t || zc(e, i)) return i;
    }
    let s = Array.from(r.classList)
      .filter((e) => /^[a-zA-Z0-9_-]+$/.test(e))
      .slice(0, 2);
    s.length > 0 && (a += `.${s.map(Hc).join(`.`)}`);
    let c = r.parentElement;
    if (c != null) {
      let e = Array.from(c.children).filter((e) => V(e) && e.tagName === o);
      e.length > 1 && (a += `:nth-of-type(${e.indexOf(r) + 1})`);
    }
    n.unshift(a);
    let l = n.join(` > `);
    if (t && zc(e, l)) return l;
    ((r = c), (i += 1));
  }
  return t || n.length === 0 ? null : n.join(` > `);
}
function wc(e, { requireUnique: t = !0 } = {}) {
  let n = [],
    r = e;
  for (;;) {
    let e = Cc(r, { requireUnique: t });
    if (e == null) return null;
    n.unshift(e);
    let i = r.getRootNode();
    if (i.nodeType === Node.DOCUMENT_NODE) break;
    if (!Rc(i)) return null;
    r = i.host;
  }
  return n.length === 1 ? n[0] : `${Gc}${n.join(Kc)}`;
}
function Tc(e) {
  let t = e.ownerDocument.defaultView ?? window;
  if (t !== window) return !1;
  let n = e;
  for (; n && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = Qs(n);
  }
  return !1;
}
function Ec(e, t) {
  if (typeof e.document.elementFromPoint != `function`) return [];
  let n = e.document.elementFromPoint(t.x, t.y);
  return V(n) ? Dc(n, { includeElement: !0 }) : [];
}
function Dc(e, { includeElement: t = !1 } = {}) {
  let n = Ac(e),
    r = [],
    i = t ? e : Qs(e);
  for (; i != null && i !== n.document.body && i !== n.document.documentElement;) {
    if (Vc(i, n)) {
      let e = wc(i);
      e != null && r.push({ selector: e, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop });
    }
    i = Qs(i);
  }
  return r;
}
function Oc(e, t) {
  let n = 0,
    r = 0;
  for (let i of e.scrollContainers ?? []) {
    let e = bc(t.document, i.selector);
    V(e) && ((n += e.scrollLeft - i.scrollLeft), (r += e.scrollTop - i.scrollTop));
  }
  return { x: n, y: r };
}
function kc(e, t, n) {
  let r = new Set();
  for (let n of t)
    if (n.scrollContainers != null && vc(n.framePath) === e)
      for (let t of n.scrollContainers) {
        let n = bc(e.document, t.selector);
        n != null && r.add(n);
      }
  for (let e of r) e.addEventListener(`scroll`, n);
  return () => {
    for (let e of r) e.removeEventListener(`scroll`, n);
  };
}
function Ac(e) {
  return e.ownerDocument.defaultView ?? window;
}
function jc(e) {
  if (e === window) return { x: 0, y: 0 };
  let t = e.frameElement;
  if (!$s(t)) return { x: 0, y: 0 };
  let n = t.ownerDocument.defaultView;
  if (n == null) return { x: 0, y: 0 };
  let r = jc(n),
    i = t.getBoundingClientRect();
  return { x: r.x + i.left, y: r.y + i.top };
}
function Mc(e, t) {
  let n = jc(e);
  return { x: t.x + n.x, y: t.y + n.y };
}
function Nc(e) {
  return wc(e);
}
function Pc(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    ($s(n) && t.push(n), V(n) && n.shadowRoot != null && t.push(...Pc(n.shadowRoot)));
  return t;
}
function Fc(e) {
  let t = e.ownerDocument;
  Jc.get(t)?.element !== e && Ic(t);
  let n = e.style.getPropertyValue(`cursor`),
    r = e.style.getPropertyPriority(`cursor`);
  (n !== `none` || r !== `important`) &&
    (Jc.set(t, { element: e, cursor: n, priority: r }), e.style.setProperty(`cursor`, `none`, `important`));
}
function Ic(e) {
  let t = Jc.get(e);
  t != null &&
    (Jc.delete(e),
    t.element.style.getPropertyValue(`cursor`) === `none` &&
      t.element.style.getPropertyPriority(`cursor`) === `important` &&
      t.element.style.setProperty(`cursor`, t.cursor, t.priority));
}
function Lc(e) {
  if (e != null)
    try {
      e();
    } catch {}
}
function Rc(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && V(e.host) && e.host.shadowRoot === e;
}
function zc(e, t) {
  let n = e.getRootNode();
  if (!Bc(n)) return !1;
  let r = n.querySelectorAll(t);
  return r.length === 1 && r[0] === e;
}
function Bc(e) {
  return (
    e.nodeType === Node.DOCUMENT_NODE ||
    (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `querySelectorAll` in e)
  );
}
function Vc(e, t) {
  let n = t.getComputedStyle(e);
  return [n.overflow, n.overflowX, n.overflowY].some(Xs);
}
function Hc(e) {
  return typeof CSS < `u` && typeof CSS.escape == `function`
    ? CSS.escape(e)
    : e.replace(/[^a-zA-Z0-9_-]/g, `\\$&`);
}
function Uc(e, { preventDefault: t = !0 } = {}) {
  (t && e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation?.());
}
var Wc,
  Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc = o(() => {
    ((Wc = {
      attributeFilter: [
        `aria-hidden`,
        `aria-expanded`,
        `class`,
        `data-state`,
        `hidden`,
        `inert`,
        `open`,
        `popover`,
        `style`,
      ],
      attributes: !0,
      childList: !0,
      subtree: !0,
    }),
      (Gc = `shadow:`),
      (Kc = `>>>`),
      (qc = `data-browser-comment-cursor-style`),
      (Jc = new WeakMap()),
      (Yc = Symbol(`denied-browser-frame-target`)));
  });
function Zc(e) {
  let t = e?.ownerDocument,
    n = e;
  for (; n != null && n.ownerDocument === t;) {
    if (n.hasAttribute(`oai-annotation-container-text`)) return n;
    if (n.hasAttribute(`oai-annotation-container`)) return null;
    n = Qs(n);
  }
  return null;
}
function Qc(e, t) {
  let n = e.ownerDocument,
    r = n.defaultView,
    i = e,
    a = null;
  for (; i?.ownerDocument === n;) {
    if (i.hasAttribute(`oai-annotation-container-text`)) return null;
    let e = i === n.body || i === n.documentElement,
      o = i.hasAttribute(`oai-annotation-container`);
    if (!e && !o && a == null && i.hasAttribute(`oai-annotatable`)) {
      let e = i.getBoundingClientRect();
      r != null &&
        Number.isFinite(e.left) &&
        Number.isFinite(e.top) &&
        Number.isFinite(e.right) &&
        Number.isFinite(e.bottom) &&
        e.width > 0 &&
        e.height > 0 &&
        e.left < r.innerWidth &&
        e.right > 0 &&
        e.top < r.innerHeight &&
        e.bottom > 0 &&
        (t == null || (t.x >= e.left && t.x <= e.right && t.y >= e.top && t.y <= e.bottom)) &&
        (typeof i.checkVisibility != `function` ||
          i.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 })) &&
        (a = i);
    }
    if (o) return a ?? document.documentElement;
    i = Qs(i);
  }
}
function $c(e, t, n) {
  if (e.primary.anchor.kind === `virtual` || t.anchor.kind === `virtual`)
    return n ? e : { additional: [], primary: t };
  if (!n) return { additional: [], primary: t };
  let r = [e.primary, ...e.additional],
    i = r.findIndex((e) => el(e, t));
  if (i === -1) return { additional: [...e.additional, t], primary: e.primary };
  let [a, ...o] = r.filter((e, t) => t !== i);
  return a == null ? null : { additional: o, primary: a };
}
function el(e, t) {
  return e.anchor.kind === `element` &&
    t.anchor.kind === `element` &&
    e.liveElement?.isConnected &&
    t.liveElement?.isConnected
    ? e.liveElement === t.liveElement
    : e.anchor.kind === t.anchor.kind
      ? e.anchor.kind === `virtual`
        ? t.anchor.kind === `virtual` &&
          e.anchor.pageUrl === t.anchor.pageUrl &&
          e.anchor.surfaceId === t.anchor.surfaceId &&
          e.anchor.targetId === t.anchor.targetId
        : e.anchor.pageUrl === t.anchor.pageUrl &&
          e.anchor.frameUrl === t.anchor.frameUrl &&
          (e.anchor.kind === `element`
            ? e.anchor.selector === t.anchor.selector && e.anchor.elementPath === t.anchor.elementPath
            : e.anchor.rect.x === t.anchor.rect.x &&
              e.anchor.rect.y === t.anchor.rect.y &&
              e.anchor.rect.width === t.anchor.rect.width &&
              e.anchor.rect.height === t.anchor.rect.height) &&
          e.anchor.framePath.length === t.anchor.framePath.length &&
          e.anchor.framePath.every((e, n) => e === t.anchor.framePath[n])
      : !1;
}
function tl(e) {
  let t = e.ownerDocument,
    n = e,
    r = null;
  for (; n?.ownerDocument === t && n !== t.body && n !== t.documentElement;) {
    let e = n.getBoundingClientRect();
    if (e.width > 0 && e.height > 0) {
      if (((r ??= n), nl(n, e))) return n;
      e.width >= rl.width && e.height >= rl.height && (r = n);
    }
    n = n.parentElement;
  }
  return r;
}
function nl(e, t) {
  let n = e.tagName.toLowerCase();
  return [`a`, `button`, `input`, `textarea`, `select`, `label`, `img`].includes(n) ||
    e.getAttribute(`role`) != null
    ? !0
    : mc(e) != null && t.width >= il.width && t.height >= il.height;
}
var rl,
  il,
  al = o(() => {
    (Xc(), (rl = { width: 48, height: 24 }), (il = { width: 24, height: 16 }));
  });
function ol(e, t, n, r, i) {
  return !r && !i
    ? null
    : gl(e, t, n, `text`, r, void 0, (n) => {
        let a = n?.ownerDocument.defaultView;
        if (n == null || a == null || ul(n)) return null;
        if (r && Zc(n) != null) return { element: n, usesTextContainer: !0 };
        let o = Mc(a, { x: 0, y: 0 }),
          s = { x: e - o.x, y: t - o.y };
        if (!i || Zs(n) || (r && Qc(n, s) !== void 0)) return null;
        let c = [];
        for (let e = n; e != null; e = Qs(e)) {
          if (
            e.isContentEditable ||
            e.matches(
              `a[href],button,input,textarea,select,label,audio,video,[role="button"],[role="link"],[role="checkbox"],[role="radio"],[role="switch"],[role="slider"],[role="textbox"],[role="combobox"]`,
            )
          )
            return null;
          e.shadowRoot != null && c.push(e.shadowRoot);
        }
        let l = n.ownerDocument.caretPositionFromPoint?.(s.x, s.y, { shadowRoots: c }),
          u = l?.offsetNode;
        if (l == null || !(u instanceof a.Text) || !n.contains(u)) return null;
        let d = n.ownerDocument.createRange();
        return (
          d.setStart(u, Math.max(0, l.offset - 1)),
          d.setEnd(u, Math.min(u.length, l.offset + 1)),
          Array.from(d.getClientRects()).some(
            (e) =>
              e.width > 0 &&
              e.height > 0 &&
              s.x >= e.left &&
              s.x <= e.right &&
              s.y >= e.top &&
              s.y <= e.bottom,
          )
            ? { element: n, usesTextContainer: !1 }
            : null
        );
      });
}
function sl(e, t, n, r, i = `annotation`) {
  let a = !1,
    o =
      i === `annotation` && n
        ? (e, t) => {
            let n = Qc(e, t);
            return ((a = n != null), n);
          }
        : void 0,
    s = r == null ? nc(e, t, o) : ll(e, t, r, i, n, o),
    c = s?.ownerDocument.defaultView;
  if (s == null || c == null) return null;
  let l = Mc(c, { x: 0, y: 0 }),
    u = _l(s, { x: e - l.x, y: t - l.y }, i, n);
  return (u != null && a && (u.usesSelectableContainer = !0), u);
}
function cl(e, t, n = `annotation`) {
  let r = e.composedPath().find((e) => V(e) && e.namespaceURI === `http://www.w3.org/1999/xhtml`);
  if (r == null) return null;
  let i = { x: e.clientX, y: e.clientY };
  if (n === `annotation` && t && r.ownerDocument !== document) {
    let e = r.ownerDocument.defaultView;
    if (e == null) return null;
    let a = Mc(e, i),
      o = [],
      s = e;
    for (; s !== window;) {
      let e = s.frameElement;
      if (!$s(e)) return null;
      let t = e.ownerDocument.defaultView;
      if (t == null) return null;
      let n = Mc(t, { x: 0, y: 0 });
      (o.unshift({ frame: e, point: { x: a.x - n.x, y: a.y - n.y } }), (s = t));
    }
    for (let { frame: e, point: r } of o) {
      let i = Qc(e, r);
      if (i !== void 0) {
        let e = i == null ? null : _l(i, r, n, t);
        return (e != null && (e.usesSelectableContainer = !0), e);
      }
    }
  }
  return _l(r, i, n, t);
}
function ll(e, t, n, r = `design`, i = !1, a) {
  return gl(e, t, n, r, i, a, (e) => e);
}
function ul(e) {
  if (
    e.id === `codex-browser-sidebar-comments-root` ||
    e.closest(`#codex-browser-sidebar-comments-root`) != null
  )
    return !0;
  let t = e.getRootNode();
  return (
    t instanceof ShadowRoot &&
    t.host instanceof HTMLElement &&
    t.host.id === `codex-browser-sidebar-comments-root`
  );
}
function dl(e, t) {
  let n = nc(e.x, e.y);
  n == null || ul(n) || uc(t, xl);
}
function fl(e, t, n, r) {
  return hl(n) ? pl(e, t, r) : sl(e.x, e.y, r, t);
}
function pl(e, t, n) {
  let r = t.shadowRoot?.querySelectorAll(`[data-browser-comment-marker]`);
  if (r == null || r.length === 0) return sl(e.x, e.y, n, t);
  let i = Array.from(r, (e) => {
    let t = e.style.pointerEvents;
    return ((e.style.pointerEvents = `none`), t);
  });
  try {
    return sl(e.x, e.y, n, t);
  } finally {
    r.forEach((e, t) => {
      e.style.pointerEvents = i[t] ?? ``;
    });
  }
}
function ml(e, t) {
  return e.composedPath().includes(t) && !vl(e);
}
function hl(e) {
  return e
    .composedPath()
    .some((e) => e instanceof HTMLElement && e.hasAttribute(`data-browser-comment-marker`));
}
function gl(e, t, n, r, i, a, o) {
  let s = n.shadowRoot?.querySelector(`[data-browser-comment-root]`),
    c = a ?? (r === `annotation` && i ? Qc : void 0);
  if (
    (r === `text` && i && (c = (e, t) => (Qc(e, t) === void 0 ? void 0 : null)), !(s instanceof HTMLElement))
  )
    return o(nc(e, t, c));
  let l = n.shadowRoot?.querySelector(`[${bl}]`),
    u = n.shadowRoot?.querySelector(`[${xl}]`),
    d = n.style.pointerEvents,
    f = s.style.pointerEvents,
    p = u instanceof HTMLElement ? u.style.pointerEvents : void 0,
    m = l instanceof HTMLElement ? l.style.pointerEvents : void 0;
  ((n.style.pointerEvents = `none`),
    (s.style.pointerEvents = `none`),
    u instanceof HTMLElement && (u.style.pointerEvents = `none`),
    l instanceof HTMLElement && (l.style.pointerEvents = `none`));
  try {
    return o(nc(e, t, c));
  } finally {
    ((n.style.pointerEvents = d),
      (s.style.pointerEvents = f),
      u instanceof HTMLElement && (u.style.pointerEvents = p ?? ``),
      l instanceof HTMLElement && (l.style.pointerEvents = m ?? ``));
  }
}
function _l(e, t, n, r) {
  if (ul(e)) return null;
  let i = n === `annotation` && r ? Qc(e, t) : void 0,
    a;
  return (
    (a = Zs(e) ? (n === `annotation` && r && Zc(e) != null ? null : e) : i === void 0 ? tl(e) : i),
    a == null || ul(a) ? null : { element: a, usesSelectableContainer: i != null }
  );
}
function vl(e) {
  return e.composedPath().some((e) => e instanceof HTMLElement && e.hasAttribute(bl));
}
var yl,
  bl,
  xl,
  Sl = o(() => {
    (al(),
      Xc(),
      (yl = `codex-browser-sidebar-comments-root`),
      (bl = `data-browser-comment-interaction-blocker`),
      (xl = `data-browser-comment-interaction-layer`));
  });
function Cl(e, t = 0) {
  return (
    wl[e[t + 0]] +
    wl[e[t + 1]] +
    wl[e[t + 2]] +
    wl[e[t + 3]] +
    `-` +
    wl[e[t + 4]] +
    wl[e[t + 5]] +
    `-` +
    wl[e[t + 6]] +
    wl[e[t + 7]] +
    `-` +
    wl[e[t + 8]] +
    wl[e[t + 9]] +
    `-` +
    wl[e[t + 10]] +
    wl[e[t + 11]] +
    wl[e[t + 12]] +
    wl[e[t + 13]] +
    wl[e[t + 14]] +
    wl[e[t + 15]]
  ).toLowerCase();
}
var wl,
  Tl = o(() => {
    wl = [];
    for (let e = 0; e < 256; ++e) wl.push((e + 256).toString(16).slice(1));
  });
function El() {
  if (!Dl) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    Dl = crypto.getRandomValues.bind(crypto);
  }
  return Dl(Ol);
}
var Dl,
  Ol,
  kl = o(() => {
    Ol = new Uint8Array(16);
  }),
  Al,
  jl,
  Ml = o(() => {
    ((Al = typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto)),
      (jl = { randomUUID: Al }));
  });
function Nl(e, t, n) {
  if (jl.randomUUID && !t && !e) return jl.randomUUID();
  e ||= {};
  let r = e.random ?? e.rng?.() ?? El();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return Cl(r);
}
var Pl = o(() => {
    (Ml(), kl(), Tl());
  }),
  Fl = o(() => {
    (Tl(), kl(), Pl());
  });
function Il(e) {
  let t = (e ?? ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, G);
}
function Ll(e) {
  if (!Bl(e)) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (n != null && e instanceof n) || (r != null && e instanceof r);
}
function Rl(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function zl(e) {
  if (e.closest(`script,style,noscript,template,[hidden],[aria-hidden='true']`) != null) return !1;
  let t = H(e).getComputedStyle(e);
  return t.display !== `none` && t.visibility !== `hidden` && t.opacity !== `0`;
}
function H(e) {
  return e.ownerDocument.defaultView ?? window;
}
function Bl(e) {
  return e != null && e instanceof (e.ownerDocument.defaultView?.HTMLElement ?? HTMLElement);
}
function U(e, t, n) {
  let r = e.createRange();
  return (r.selectNodeContents(t), Array.from(r.getClientRects()).some((e) => W(e, n)));
}
function W(e, t) {
  return e.right >= t.x && e.left <= t.x + t.width && e.bottom >= t.y && e.top <= t.y + t.height;
}
var G,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl = o(() => {
    (qs(),
      (G = 2e3),
      (Vl = 4),
      (Hl = 1),
      (Ul = 2),
      (Wl = class {
        pageUrl;
        constructor(e) {
          this.pageUrl = e;
        }
        isGoogleDocsPage() {
          return ls(this.pageUrl) != null;
        }
        getDocumentContext({ documentTitle: e, selectedText: t, visibleText: n }) {
          return fs({ documentTitle: e, pageUrl: this.pageUrl, selectedText: t, visibleText: n });
        }
        getElementDocumentContext({ documentTitle: e, elementWindow: t, fallbackWindow: n }) {
          return this.getDocumentContext({
            documentTitle: e,
            selectedText: this.getWindowSelectionText(t) ?? this.getWindowSelectionText(n),
          });
        }
        getRegionDocumentContext({ documentTitle: e, fallbackWindow: t, frameWindow: n, viewportRect: r }) {
          if (this.isGoogleDocsPage())
            return this.getDocumentContext({
              documentTitle: e,
              selectedText: this.getWindowSelectionText(n) ?? this.getWindowSelectionText(t),
              visibleText: this.getVisibleTextInViewportRect(n, r),
            });
        }
        static isGoogleDocsAnchor(e) {
          return e.documentContext?.kind === `google-docs` || ls(e.pageUrl) != null;
        }
        getWindowSelectionText(e) {
          try {
            return Il(e.getSelection()?.toString()) ?? this.getActiveElementSelectionText(e);
          } catch {
            return null;
          }
        }
        getActiveElementSelectionText(e) {
          let t = e.document.activeElement;
          if (!Ll(t)) return null;
          let n = t.selectionStart,
            r = t.selectionEnd;
          return n == null || r == null || r <= n ? null : Il(t.value.slice(n, r));
        }
        getVisibleTextInViewportRect(e, t) {
          let n = Rl(e),
            r = n?.body;
          if (n == null || r == null) return null;
          let i = ``,
            a = n.createTreeWalker(r, Vl, {
              acceptNode: (e) => {
                if (Il(e.textContent) == null) return Ul;
                let t = e.parentElement;
                return !Bl(t) || !zl(t) ? Ul : Hl;
              },
            }),
            o = a.nextNode();
          for (; o != null;) {
            let e = Il(o.textContent);
            if (e != null && U(n, o, t) && ((i = i.length === 0 ? e : `${i} ${e}`), i.length >= G)) break;
            o = a.nextNode();
          }
          return Il(i);
        }
      }));
  });
function Kl(e) {
  let t = e.commonAncestorContainer.getRootNode();
  if (!Yl(t)) return null;
  let n = `defaultView` in t ? t.defaultView : t.ownerDocument.defaultView;
  return n != null && Jl(n) ? { ownerWindow: n, range: e, styleRoot: t } : null;
}
function ql({ color: e, name: t, ownerWindow: n, range: r, styleRoot: i }) {
  let a = new n.Highlight(r),
    o = n.CSS.highlights,
    s = o.get(t),
    c = new n.CSSStyleSheet();
  return (
    c.replaceSync(`::highlight(${t}) { background-color: ${e} !important; }`),
    (i.adoptedStyleSheets = [...i.adoptedStyleSheets, c]),
    o.set(t, a),
    () => {
      (o.get(t) === a && (s == null ? o.delete(t) : o.set(t, s)),
        (i.adoptedStyleSheets = i.adoptedStyleSheets.filter((e) => e !== c)));
    }
  );
}
function Jl(e) {
  return (
    `CSS` in e &&
    typeof e.CSS == `object` &&
    e.CSS != null &&
    `highlights` in e.CSS &&
    `Highlight` in e &&
    typeof e.Highlight == `function` &&
    `CSSStyleSheet` in e &&
    typeof e.CSSStyleSheet == `function` &&
    typeof e.CSSStyleSheet.prototype.replaceSync == `function`
  );
}
function Yl(e) {
  return (
    `adoptedStyleSheets` in e &&
    (e.nodeType === Node.DOCUMENT_NODE || (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e))
  );
}
var Xl = o(() => {});
function Zl(e, t, n) {
  let r = e.ownerDocument.createRange();
  try {
    return (r.selectNodeContents(e), r.setEnd(t, n), r.toString().length);
  } catch {
    return null;
  }
}
function Ql(e, t) {
  if (t < 0) return null;
  let n = e.ownerDocument.createTreeWalker(e, 4),
    r = 0,
    i = n.nextNode();
  for (; i != null;) {
    let e = i.textContent ?? ``;
    if (r + e.length >= t) return { node: i, offset: t - r };
    ((r += e.length), (i = n.nextNode()));
  }
  return null;
}
var $l = o(() => {});
function eu(e) {
  let t = e ?? window;
  if (e == null)
    for (;;) {
      let e = Su(t.document),
        n = e == null ? null : tc(e);
      if (n == null) {
        if ($s(e)) return null;
        break;
      }
      t = n;
    }
  let n = xu(t) ?? fu(t);
  return n == null ? null : wu(n);
}
function tu(e) {
  let t = e.startContainer.ownerDocument?.defaultView;
  if (t == null) return null;
  let n = pu(t, e, e.toString(), `forward`);
  return n == null ? null : wu(n);
}
function nu(e) {
  let t = vc(e.framePath);
  if (t == null || !lu(e.frameUrl, t)) return null;
  let n = Du(t, e.textLocator);
  if (n == null) return null;
  let r = bu(n, e.textLocator);
  return r?.toString() === e.textLocator.rangeText ? { range: r, target: n } : null;
}
function ru(e) {
  let t = vc(e.framePath);
  if (t == null || !lu(e.frameUrl, t)) return null;
  let n = Du(t, e.textLocator);
  if (n == null) return null;
  let r;
  switch (e.textLocator.kind) {
    case `dom`:
      r = yu(t, n, e.textLocator, e.selectedText);
      break;
    case `form-control`:
      r =
        V(n) && Hu(n)
          ? Cu(t, n, e.textLocator.startOffset, e.textLocator.endOffset, e.textLocator.direction)
          : null;
  }
  if (r == null || r.selectedText !== e.selectedText) return null;
  let i = wu(r);
  return i == null
    ? null
    : {
        ...i,
        anchor: {
          ...i.anchor,
          annotationFeatures: e.annotationFeatures,
          annotationRequestIncludesPrompt: e.annotationRequestIncludesPrompt,
        },
      };
}
function iu(e, t) {
  let n = new Map();
  for (let t of e) {
    if (t.anchor.kind !== `text`) continue;
    let e = ru(t.anchor)?.anchor;
    e?.kind === `text` && n.set(t.id, { sourceAnchor: t.anchor, value: e });
  }
  return t?.size === n.size &&
    Array.from(n).every(([e, n]) => {
      let r = t.get(e);
      return r?.sourceAnchor === n.sourceAnchor && ks(r.value, n.value);
    })
    ? t
    : n;
}
function au(e, t) {
  let n = new Set(),
    r = new Set(),
    i = new Set(),
    a = !1,
    o = null,
    s = () => {
      o ??= window.requestAnimationFrame(() => {
        ((o = null), t());
      });
    },
    c = () => {
      s();
    },
    l = () => {
      (f(), s());
    },
    u = (e) => {
      (e.type === `load` && $s(e.target) && f(), s());
    },
    d = new MutationObserver((e) => {
      e.every(Lu) ||
        ((a ||
          Array.from(n).some((e) => !e.isConnected) ||
          e.some((e) => e.type === `attributes` && Array.from(n).some((t) => t === e.target))) &&
          f(),
        s());
    }),
    f = () => {
      d.disconnect();
      for (let e of n) e.removeEventListener(`input`, l);
      for (let e of r) e.removeEventListener(`scroll`, c);
      for (let e of i) for (let t of Ju) e.removeEventListener(t, u, !0);
      ((n = new Set()), (r = new Set()), (i = new Set()), (a = !1));
      let t = new Set(),
        o = new Set();
      for (let s of e) {
        for (let e of Ou(s.framePath)) (i.add(e), t.add(e.documentElement));
        let e = vc(s.framePath);
        if (e == null) {
          a = !0;
          continue;
        }
        let c = Du(e, s.textLocator);
        if (c == null) {
          a = !0;
          let n = ku(e, s.textLocator);
          (t.add(n), ju(n) && i.add(n));
          continue;
        }
        (n.add(c), t.add(c), ju(c) && i.add(c));
        let l = c.parentNode ?? Au(c);
        for (; l != null;) (ju(l) ? (t.add(l), i.add(l)) : o.add(l), (l = l.parentNode ?? Au(l)));
        let u = V(c) ? c : Au(c);
        for (; u != null;) (r.add(u), (u = u.parentElement ?? Au(u.getRootNode())));
      }
      for (let e of t) d.observe(e, qu);
      for (let e of o) t.has(e) || d.observe(e, { ...(V(e) ? { attributes: !0 } : {}), childList: !0 });
      for (let e of n) e.addEventListener(`input`, l);
      for (let e of r) e.addEventListener(`scroll`, c);
      for (let e of i) for (let t of Ju) e.addEventListener(t, u, !0);
    };
  return (
    f(),
    () => {
      d.disconnect();
      for (let e of n) e.removeEventListener(`input`, l);
      for (let e of r) e.removeEventListener(`scroll`, c);
      for (let e of i) for (let t of Ju) e.removeEventListener(t, u, !0);
      o != null && window.cancelAnimationFrame(o);
    }
  );
}
function ou(e) {
  if (e.textLocator.kind !== `dom`) return null;
  let t = nu({ framePath: e.framePath, frameUrl: e.frameUrl, textLocator: e.textLocator });
  return t == null ? null : Kl(t.range);
}
function su(e) {
  return ql({ ...e, color: Ku, name: Gu });
}
function cu(e) {
  let t = e.document,
    n = null,
    r = () => {
      (n?.dispose(), (n = null));
    },
    i = () => {
      let i = e.getSelection(),
        a = i != null && i.rangeCount > 0 && !Hu(Su(t)) ? mu(e, i) : null,
        o = a == null ? null : Kl(a);
      if (o == null) {
        r();
        return;
      }
      if (n?.target.styleRoot === o.styleRoot) {
        (n.target.range.setStart(o.range.startContainer, o.range.startOffset),
          n.target.range.setEnd(o.range.endContainer, o.range.endOffset));
        return;
      }
      (r(), (o.range = o.range.cloneRange()));
      let s = ql({ ...o, color: Ku, name: `${Gu}-drag` }),
        c = new o.ownerWindow.CSSStyleSheet();
      (c.replaceSync(
        `::selection { background-color: transparent !important; color: currentColor !important; }`,
      ),
        (o.styleRoot.adoptedStyleSheets = [...o.styleRoot.adoptedStyleSheets, c]),
        (n = {
          target: o,
          dispose: () => {
            (s(), (o.styleRoot.adoptedStyleSheets = o.styleRoot.adoptedStyleSheets.filter((e) => e !== c)));
          },
        }));
    };
  return (
    t.addEventListener(`selectionchange`, i),
    i(),
    () => {
      (t.removeEventListener(`selectionchange`, i), r());
    }
  );
}
function lu(e, t) {
  return e == null || t.location.href === e;
}
function uu() {
  for (let e of ic())
    try {
      e.getSelection()?.removeAllRanges();
      let t = Su(e.document);
      Hu(t) && t.setSelectionRange(t.selectionEnd, t.selectionEnd);
    } catch {}
}
function du(e, t) {
  return e.kind === `text` && !e.isFixed ? t.scrollX : 0;
}
function fu(e) {
  let t = e.getSelection();
  if (t == null || t.rangeCount === 0) return null;
  let n = mu(e, t);
  return n == null ? null : pu(e, n, t.toString(), vu(t, n));
}
function pu(e, t, n, r) {
  if (
    t.collapsed ||
    !t.startContainer.isConnected ||
    !t.endContainer.isConnected ||
    t.startContainer.ownerDocument !== e.document ||
    t.endContainer.ownerDocument !== e.document ||
    n.trim().length === 0 ||
    n.length > 2e4 ||
    t.toString().length > 2e4
  )
    return null;
  let i = Tu(t.commonAncestorContainer);
  if (i == null || Nu(t, e)) return null;
  let a = Eu(i);
  if (a == null) return null;
  let o = Zl(i, t.startContainer, t.startOffset),
    s = Zl(i, t.endContainer, t.endOffset);
  if (o == null || s == null || s <= o) return null;
  let c = Fu(t);
  if (c.length === 0) return null;
  let l = r === `forward`;
  return {
    frameWindow: e,
    isFixed: Mu(i, e),
    locator: { ...a, kind: `dom`, direction: r, rangeText: t.toString(), startOffset: o, endOffset: s },
    rects: c,
    selectedText: n,
    viewportPoint: Vu(c, l),
  };
}
function mu(e, t) {
  let n = t.getRangeAt(0);
  if (!n.collapsed && hu(t, n)) return n;
  if (!gu(t)) return null;
  let r = t.getComposedRanges({ shadowRoots: _u(e.document) })[0];
  if (r == null) return null;
  let i = e.document.createRange();
  return (
    i.setStart(r.startContainer, r.startOffset),
    i.setEnd(r.endContainer, r.endOffset),
    i.collapsed ? null : i
  );
}
function hu(e, t) {
  return (
    (e.anchorNode === t.startContainer &&
      e.anchorOffset === t.startOffset &&
      e.focusNode === t.endContainer &&
      e.focusOffset === t.endOffset) ||
    (e.focusNode === t.startContainer &&
      e.focusOffset === t.startOffset &&
      e.anchorNode === t.endContainer &&
      e.anchorOffset === t.endOffset)
  );
}
function gu(e) {
  return `getComposedRanges` in e && typeof e.getComposedRanges == `function`;
}
function _u(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    V(n) && n.shadowRoot != null && t.push(n.shadowRoot, ..._u(n.shadowRoot));
  return t;
}
function vu(e, t) {
  return e.anchorNode === t.startContainer && e.anchorOffset === t.startOffset
    ? `forward`
    : (e.focusNode === t.startContainer && e.focusOffset === t.startOffset) ||
        (`direction` in e && e.direction === `backward`)
      ? `backward`
      : `forward`;
}
function yu(e, t, n, r) {
  let i = bu(t, n);
  if (i == null || i.toString() !== n.rangeText || Nu(i, e) || r.length > 2e4) return null;
  let a = Fu(i);
  return a.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Mu(t, e),
        locator: n,
        rects: a,
        selectedText: r,
        viewportPoint: Vu(a, n.direction === `forward`),
      };
}
function bu(e, t) {
  let n = Ql(e, t.startOffset),
    r = Ql(e, t.endOffset);
  if (n == null || r == null) return null;
  let i = e.ownerDocument.createRange();
  return (i.setStart(n.node, n.offset), i.setEnd(r.node, r.offset), i);
}
function xu(e) {
  let t = Su(e.document);
  if (!Hu(t) || Pu(t, e)) return null;
  let n = t.selectionStart,
    r = t.selectionEnd;
  if (n == null || r == null) {
    let i = e.getSelection()?.toString() ?? ``;
    if (
      ((n = t.value.indexOf(i)),
      (r = n + i.length),
      i.length === 0 || n === -1 || t.value.indexOf(i, n + 1) !== -1)
    )
      return null;
  }
  return r <= n || t.value.slice(n, r).trim().length === 0
    ? null
    : Cu(e, t, n, r, t.selectionDirection === `backward` ? `backward` : `forward`);
}
function Su(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
  return t;
}
function Cu(e, t, n, r, i) {
  let a = Eu(t),
    o = t.value.slice(n, r);
  if (a?.selector == null || Pu(t, e) || o.trim().length === 0 || o.length > 2e4) return null;
  let s = Iu(t, n, r);
  return s.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Mu(t, e),
        locator: {
          ...a,
          selector: a.selector,
          kind: `form-control`,
          direction: i,
          startOffset: n,
          endOffset: r,
        },
        rects: s,
        selectedText: o,
        viewportPoint: Vu(s, i === `forward`),
      };
}
function wu(e) {
  let t = Js(e.frameWindow);
  if (t == null) return null;
  let n = jc(e.frameWindow),
    r = Bu(e.rects),
    i = e.isFixed ? 0 : e.frameWindow.scrollX,
    a = e.rects.map((t) => ({ ...t, x: t.x + i, y: e.isFixed ? t.y : t.y + e.frameWindow.scrollY })),
    o = Bu(a),
    s = Ec(e.frameWindow, e.viewportPoint),
    c = { x: e.viewportPoint.x + n.x, y: e.viewportPoint.y + n.y };
  return {
    anchor: {
      kind: `text`,
      pageUrl: window.location.href,
      frameUrl: e.frameWindow === window ? null : e.frameWindow.location.href,
      title: `Selected text`,
      elementPath: `browser text selection`,
      point: {
        xPercent: ((e.viewportPoint.x + i) / e.frameWindow.innerWidth) * 100,
        y: e.isFixed ? e.viewportPoint.y : e.viewportPoint.y + e.frameWindow.scrollY,
      },
      rect: o,
      isFixed: e.isFixed,
      role: null,
      name: null,
      selector: null,
      framePath: t,
      nearbyText: null,
      selectedText: e.selectedText,
      selectionRects: a,
      textLocator: e.locator,
      ...(s.length === 0 ? {} : { scrollContainers: s }),
    },
    themeVariant: window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`,
    viewportRect: { ...r, x: r.x + n.x, y: r.y + n.y },
    viewportPoint: c,
    viewportSize: { width: window.innerWidth, height: window.innerHeight },
  };
}
function Tu(e) {
  if (ju(e)) return e;
  let t = e.nodeType === 1 ? e : e.parentElement;
  for (; V(t);) {
    if (Cc(t) != null) return t;
    t = t.parentElement;
  }
  return null;
}
function Eu(e) {
  let t = V(e) ? Cc(e, { requireUnique: !0 }) : null;
  if (V(e) && t == null) return null;
  let n = [],
    r = e.getRootNode();
  for (; r !== e.ownerDocument;) {
    let e = Au(r);
    if (e == null || e.shadowRoot !== r) return null;
    let t = Cc(e, { requireUnique: !0 });
    if (t == null) return null;
    (n.unshift(t), (r = e.getRootNode()));
  }
  return { selector: t, shadowHosts: n };
}
function Du(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!V(t) || t.shadowRoot == null) return null;
    n = t.shadowRoot;
  }
  let r = t.selector;
  if (t.kind === `dom` && r == null) return ju(n) ? n : null;
  if (r == null) return null;
  let i = n.querySelector(r);
  return V(i) ? i : null;
}
function Ou(e) {
  let t = window,
    n = [t.document];
  for (let r of e) {
    let e = yc(t.document, r);
    if (e == null) break;
    let i = tc(e);
    if (i == null) break;
    ((t = i), n.push(t.document));
  }
  return n;
}
function ku(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!V(t) || t.shadowRoot == null) return n;
    n = t.shadowRoot;
  }
  return n;
}
function Au(e) {
  return ju(e) ? e.host : null;
}
function ju(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && V(e.host);
}
function Mu(e, t) {
  let n = V(e) ? e : Au(e);
  for (; n != null && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = n.parentElement ?? Au(n.getRootNode());
  }
  return !1;
}
function Nu(e, t) {
  let n = e.commonAncestorContainer;
  if (n.nodeType === Node.TEXT_NODE) return n.parentElement != null && Pu(n.parentElement, t);
  let r = t.document.createTreeWalker(n, NodeFilter.SHOW_TEXT),
    i = r.nextNode();
  for (; i != null;) {
    if (e.intersectsNode(i) && i.parentElement != null && Pu(i.parentElement, t)) return !0;
    i = r.nextNode();
  }
  return !1;
}
function Pu(e, t) {
  let n = t.getComputedStyle(e).getPropertyValue(`-webkit-text-security`);
  return n.length > 0 && n !== `none`;
}
function Fu(e) {
  if (typeof e.getClientRects != `function`) return [];
  let t = e.getClientRects();
  return t.length > 1e3
    ? []
    : Array.from(t)
        .filter((e) => e.width > 0 && e.height > 0)
        .map((e) => ({ x: e.left, y: e.top, width: e.width, height: e.height }));
}
function Iu(e, t, n) {
  let r = e.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return [];
  let i = e.ownerDocument.defaultView;
  if (i == null || Ru(e, i)) return [];
  let a = i.getComputedStyle(e),
    o = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
    s = e.offsetHeight > 0 ? r.height / e.offsetHeight : 1,
    c = e.ownerDocument.createElement(`div`);
  (c.setAttribute(Yu, ``),
    (c.style.position = `fixed`),
    (c.style.left = `${r.left}px`),
    (c.style.top = `${r.top}px`),
    (c.style.width = `${r.width / o}px`),
    (c.style.height = `${r.height / s}px`),
    (c.style.overflow = `auto`),
    (c.style.visibility = `hidden`),
    (c.style.pointerEvents = `none`),
    (c.style.whiteSpace = e.tagName === `TEXTAREA` ? `pre-wrap` : `pre`),
    (c.style.overflowWrap = e.tagName === `TEXTAREA` ? `break-word` : `normal`),
    (o !== 1 || s !== 1) &&
      ((c.style.transform = `scale(${o}, ${s})`), (c.style.transformOrigin = `top left`)));
  for (let e of Wu) c.style[e] = a[e];
  ((c.style.boxSizing = `border-box`), c.append(e.value.slice(0, t)));
  let l = e.ownerDocument.createElement(`span`);
  ((l.textContent = e.value.slice(t, n) || `​`),
    c.append(l, e.value.slice(n)),
    e.ownerDocument.body.append(c),
    (c.scrollLeft = e.scrollLeft),
    (c.scrollTop = e.scrollTop));
  let u = l.getClientRects(),
    d = Array.from(u.length > 1e3 ? [] : u)
      .map((e) => zu(e, r))
      .filter((e) => e != null);
  return (c.remove(), d);
}
function Lu(e) {
  if (e.type !== `childList`) return !1;
  let t = [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)];
  return t.length > 0 && t.every((e) => V(e) && e.hasAttribute(Yu));
}
function Ru(e, t) {
  let n = e;
  for (; n != null;) {
    let e = t.getComputedStyle(n),
      r = e.transform;
    if (r !== `` && r !== `none`) {
      let e = /^matrix\(([^)]+)\)$/.exec(r);
      if (e == null) return !0;
      let t = e[1]?.split(`,`).map(Number);
      if (t?.length !== 6 || Math.abs(t[1] ?? 0) > 1e-6 || Math.abs(t[2] ?? 0) > 1e-6) return !0;
    }
    let i = e.getPropertyValue(`rotate`);
    if (i !== `` && i !== `none` && i !== `0deg`) return !0;
    n = n.parentElement ?? Au(n.getRootNode());
  }
  return !1;
}
function zu(e, t) {
  let n = Math.max(e.left, t.left),
    r = Math.max(e.top, t.top),
    i = Math.min(e.right, t.right),
    a = Math.min(e.bottom, t.bottom);
  return i <= n || a <= r ? null : { x: n, y: r, width: i - n, height: a - r };
}
function Bu(e) {
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function Vu(e, t) {
  let n = t ? e.at(-1) : e[0];
  return n == null ? { x: 0, y: 0 } : { x: t ? n.x + n.width : n.x, y: n.y + n.height / 2 };
}
function Hu(e) {
  if (e == null) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (r != null && e instanceof r) || (n != null && e instanceof n && Uu.has(e.type));
}
var Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu = o(() => {
    (qs(),
      Xl(),
      $l(),
      Xc(),
      (Uu = new Set([`email`, `search`, `tel`, `text`, `url`])),
      (Wu =
        `borderBottomStyle.borderBottomWidth.borderLeftStyle.borderLeftWidth.borderRightStyle.borderRightWidth.borderTopStyle.borderTopWidth.boxSizing.direction.fontFamily.fontFeatureSettings.fontKerning.fontSize.fontStretch.fontStyle.fontVariant.fontWeight.letterSpacing.lineHeight.paddingBottom.paddingLeft.paddingRight.paddingTop.tabSize.textAlign.textIndent.textTransform.wordBreak.wordSpacing`.split(
          `.`,
        )),
      (Gu = `codex-browser-text-selection`),
      (Ku = `#128dff66`),
      (qu = { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      (Ju = [`animationcancel`, `animationend`, `load`, `transitioncancel`, `transitionend`]),
      (Yu = `data-browser-comment-text-selection-mirror`));
  });
function Zu(e) {
  let t = rd(e);
  if (t == null) return null;
  let n = Ac(e).getComputedStyle(e);
  return {
    borderRadius: n.borderRadius.length === 0 ? `0px` : n.borderRadius,
    color: vs(n.color),
    font: `${n.fontSize} ${n.fontFamily}`.trim(),
    styles: rs(n, n.display === `flex` || n.display === `inline-flex` ? [...gd, ..._d] : gd),
    rect: t,
    size: `${Math.round(t.width)}x${Math.round(t.height)}`,
    tagName: e.tagName.toLowerCase(),
  };
}
function Qu(e) {
  return (
    e.kind === `element` && e.framePath.length === 0 && (e.elementPath === `html` || e.elementPath === `body`)
  );
}
function $u(e, t, n, r, i = window.innerWidth) {
  let a = vd.get(e.ownerDocument);
  a ?? ((a = new WeakMap()), vd.set(e.ownerDocument, a));
  let o = a.get(e);
  o ?? ((o = Nl()), a.set(e, o));
  let s = Ac(e),
    c = _c(e),
    l = c == null ? null : wc(e, { requireUnique: !1 }),
    u = Dc(e),
    d = sd(),
    f = new Wl(d).getElementDocumentContext({
      documentTitle: document.title,
      elementWindow: s,
      fallbackWindow: window,
    });
  return {
    kind: `element`,
    runtimeElementId: o,
    pageUrl: d,
    frameUrl: cd(s, c),
    title: pc(e),
    elementPath: gc(e),
    point: { xPercent: (n.x / i) * 100, y: r ? n.y : n.y + window.scrollY },
    rect: { x: t.x, y: r ? t.y : t.y + window.scrollY, width: t.width, height: t.height },
    isFixed: r,
    role: e.getAttribute(`role`),
    name: e.getAttribute(`aria-label`) ?? mc(e),
    selector: l,
    framePath: c ?? [],
    nearbyText: hc(e),
    immediateText: pd(e),
    documentContext: f,
    ...(u.length === 0 ? {} : { scrollContainers: u }),
  };
}
function ed(e, t, n, r) {
  let i = rd(e);
  return i == null
    ? t
    : {
        ...$u(e, i, ud(t, i, n, r), Tc(e), n?.width),
        annotationFeatures: t.annotationFeatures,
        annotationRequestIncludesPrompt: t.annotationRequestIncludesPrompt,
        elementMetadata: t.elementMetadata,
        elementName: t.elementName,
      };
}
function td(e, t, n, r) {
  let i =
      n &&
      window.top === window &&
      e.ownerDocument === document &&
      e.namespaceURI === `http://www.w3.org/1999/xhtml` &&
      !Zs(e) &&
      rd(e) != null,
    a,
    o;
  return (
    i &&
      ((a = r),
      e.hasAttribute(`oai-annotatable`) &&
        ((o = Wo(e.getAttribute(`oai-annotatable`))), (a ??= Ko(e.getAttribute(`oai-annotation-metadata`))))),
    {
      ...t,
      annotationFeatures:
        t.annotationFeatures ??
        (n && e.hasAttribute(`oai-annotatable`) && Qc(e) === e ? [`selectable-containers`] : []),
      elementMetadata: a,
      elementName: o,
    }
  );
}
function nd(e, t, n) {
  if (e.kind !== `element`) return null;
  if (t != null) {
    let e = n.get(t) ?? null;
    if (e?.isConnected) return rd(e) == null ? null : e;
    e != null && n.delete(t);
  }
  if (e.selector == null || !ld(e.pageUrl, sd())) return null;
  try {
    let t = Sc(e.framePath);
    return t == null ? null : ad(t, e);
  } catch {
    return null;
  }
}
function rd(e) {
  if (!e.isConnected || !fd(e)) return null;
  let t = Ac(e),
    n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = jc(t);
  return { x: n.left + r.x, y: n.top + r.y, width: n.width, height: n.height };
}
function id(e) {
  return e.getAttribute(`aria-label`) ?? mc(e);
}
function ad(e, t) {
  if (t.selector == null) return null;
  let n = xc(e, t.selector);
  if (n.length === 0) return null;
  let r = n.filter((e) => rd(e) != null);
  if (r.length === 0) return null;
  let i = r;
  if (t.name != null) {
    let e = i.filter((e) => id(e) === t.name);
    e.length > 0 && (i = e);
  }
  if (t.nearbyText != null) {
    let e = i.filter((e) => hc(e) === t.nearbyText);
    e.length > 0 && (i = e);
  }
  if (i.length === 1) return i[0] ?? null;
  let a = null,
    o = -1 / 0;
  for (let e of i) {
    let n = dd(t, e);
    n > o && ((a = e), (o = n));
  }
  return a;
}
function od(e) {
  if (e == null) return null;
  if (e.kind === `virtual`) return e.rect;
  let t = vc(e.framePath),
    n = Oc(e, t ?? window),
    r = n.x + du(e, t ?? window);
  if (e.kind !== `element` && t != null && t !== window) {
    let i = jc(t);
    return {
      x: e.rect.x + i.x - r,
      y: e.rect.y + i.y - (e.isFixed ? 0 : t.scrollY) - n.y,
      width: e.rect.width,
      height: e.rect.height,
    };
  }
  return {
    x: e.rect.x - r,
    y: (e.isFixed ? e.rect.y : e.rect.y - window.scrollY) - n.y,
    width: e.rect.width,
    height: e.rect.height,
  };
}
function sd() {
  return window.location.href;
}
function cd(e, t) {
  if (t == null || t.length === 0) return null;
  let n = e.location.href;
  if (n !== sd()) return n;
  let r = e.frameElement;
  return $s(r) && r.src !== `` ? r.src : n;
}
function ld(e, t) {
  let n = md(e),
    r = md(t);
  return n == null || r == null
    ? e === t
    : (n.protocol === `http:` || n.protocol === `https:`) &&
        (r.protocol === `http:` || r.protocol === `https:`)
      ? n.origin === r.origin && n.pathname === r.pathname && n.search === r.search
      : n.protocol === `file:` && r.protocol === `file:`
        ? n.pathname === r.pathname && n.search === r.search
        : e === t;
}
function ud(e, t, n, r) {
  let i = r?.x ?? (e.point.xPercent / 100) * (n?.width ?? window.innerWidth),
    a = e.rect.width === 0 ? 0.5 : (i - e.rect.x) / e.rect.width,
    o = e.rect.height === 0 ? 0.5 : (e.point.y - e.rect.y) / e.rect.height;
  return { x: t.x + hd(a, 0, 1) * t.width, y: t.y + hd(o, 0, 1) * t.height };
}
function dd(e, t) {
  let n = 0,
    r = id(t);
  (e.name != null && r === e.name && (n += 1e3),
    e.nearbyText != null && hc(t) === e.nearbyText && (n += 500),
    e.title === pc(t) && (n += 250),
    e.elementPath === gc(t) && (n += 25));
  let i = rd(t),
    a = od(e);
  return i == null || a == null ? n : n - Math.abs(i.x - a.x) - Math.abs(i.y - a.y);
}
function fd(e) {
  for (let t = e; t != null; t = t.parentElement) {
    let e = Ac(t).getComputedStyle(t);
    if (
      e.display === `none` ||
      e.visibility === `hidden` ||
      e.visibility === `collapse` ||
      Number.parseFloat(e.opacity) === 0
    )
      return !1;
  }
  return (
    typeof e.checkVisibility != `function` || e.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 })
  );
}
function pd(e) {
  if (Zs(e)) return null;
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Node.TEXT_NODE)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function md(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function hd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var gd,
  _d,
  vd,
  yd = o(() => {
    (qs(),
      Fl(),
      al(),
      Xc(),
      Gl(),
      Xu(),
      (gd = [
        `color`,
        `background-color`,
        `font-size`,
        `font-family`,
        `font-weight`,
        `border-radius`,
        `border-color`,
        `border-width`,
        `padding-top`,
        `padding-right`,
        `padding-bottom`,
        `padding-left`,
        `margin-top`,
        `margin-right`,
        `margin-bottom`,
        `margin-left`,
        `width`,
        `height`,
        `opacity`,
      ]),
      (_d = [`flex-direction`, `justify-content`, `align-items`, `gap`, `row-gap`, `column-gap`]),
      (vd = new WeakMap()));
  });
(qs(), Uo(), Sl(), al(), yd(), Xc(), Xu());
var bd = Ta({
  enterAnnotationMode: ba().catch(!1),
  initialComment: Ns.optional().catch(void 0),
  metadata: Sa().transform((e) => {
    let t = Go(e);
    return t == null || Object.keys(t).length === 0 ? void 0 : t;
  }),
  mode: ja([`default`, `advanced`]).catch(`default`),
  range: Ta({
    startPath: wa(va().int().nonnegative()).max(128),
    endPath: wa(va().int().nonnegative()).max(128),
    startOffset: va().int().nonnegative(),
    endOffset: va().int().nonnegative(),
    rangeText: _a().min(1).max(Is),
  }).optional(),
});
function xd({ getState: e, requestPermission: t }) {
  let n = null,
    r = null,
    i = !1,
    a = !1,
    o = !1,
    s = () => {
      r = null;
    },
    c = (t) => {
      let r = Sd(t, e());
      if (n == null || r == null || a || o) return !1;
      i = !0;
      try {
        return n(
          t.target,
          r,
          t.request,
          t.target instanceof HTMLElement && t.target.getRootNode() === document ? t.metadata : void 0,
        );
      } finally {
        i = !1;
      }
    },
    l = (l) => {
      if (o || a || r != null || i || navigator.userActivation?.isActive !== !0 || !Ed(e())) return;
      let u = Dd(l),
        d = l.composedPath()[0] ?? l.target;
      if (u == null || !(d instanceof HTMLElement) || ul(d)) return;
      let f = u.range == null ? null : wd(d, u.range);
      if (u.range != null && f == null) return;
      let p = { initialComment: u.initialComment, siteInitiated: !0 };
      (u.enterAnnotationMode && (p.enterAnnotationMode = !0), u.mode === `advanced` && (p.openTweaks = !0));
      let m = {
        target: f ?? d,
        rangeText: u.range?.rangeText,
        request: p,
        metadata: u.range == null && d.getRootNode() === document ? u.metadata : void 0,
        permissionGranted: !1,
      };
      if (Sd(m, e()) == null) return;
      r = m;
      let h = t();
      if (typeof h == `boolean`) {
        if (((m.permissionGranted = h), !h)) {
          s();
          return;
        }
        if (n != null && (s(), !c(m))) return;
        l.preventDefault();
        return;
      }
      (l.preventDefault(),
        h.then(
          (e) => {
            if (!(r !== m || o || a)) {
              if (!e) {
                s();
                return;
              }
              ((m.permissionGranted = !0), n != null && (s(), c(m)));
            }
          },
          () => {
            r === m && s();
          },
        ));
    },
    u = (e) => {
      e.isTrusted && ((a = !0), s(), e.persisted || p());
    },
    d = (e) => {
      e.isTrusted && (a = !1);
    },
    f = (e) => {
      e.isTrusted && e.key === `Escape` && s();
    },
    p = () => {
      ((o = !0),
        s(),
        (n = null),
        document.removeEventListener(`codex:open-annotation`, l),
        window.removeEventListener(`pagehide`, u),
        window.removeEventListener(`pageshow`, d),
        window.removeEventListener(`keydown`, f, !0));
    };
  return (
    document.addEventListener(`codex:open-annotation`, l),
    window.addEventListener(`pagehide`, u),
    window.addEventListener(`pageshow`, d),
    window.addEventListener(`keydown`, f, !0),
    {
      subscribe(e) {
        if (!o) {
          n = e;
          let t = r;
          t?.permissionGranted &&
            queueMicrotask(() => {
              n === e && r === t && !o && (s(), c(t));
            });
        }
        return () => {
          n === e && ((n = null), s());
        };
      },
      clear: s,
      dispose: p,
    }
  );
}
function Sd({ target: e, request: t, rangeText: n }, r) {
  if (!Ed(r)) return null;
  if (e instanceof Range) {
    let r = e.commonAncestorContainer,
      i = r instanceof HTMLElement ? r : r.parentElement;
    if (
      t.openTweaks ||
      i == null ||
      ul(i) ||
      e.startContainer.ownerDocument !== document ||
      e.toString() !== n ||
      !K(e)
    )
      return null;
    let a = tu(e);
    return a != null &&
      Array.from(e.getClientRects()).some(
        (e) =>
          e.width > 0 &&
          e.height > 0 &&
          e.x < window.innerWidth &&
          e.x + e.width > 0 &&
          e.y < window.innerHeight &&
          e.y + e.height > 0,
      )
      ? a.viewportPoint
      : null;
  }
  if (e.ownerDocument !== document || !e.isConnected || ul(e) || tl(e) == null) return null;
  let i = rd(e);
  return i == null ||
    !Number.isFinite(i.x) ||
    !Number.isFinite(i.y) ||
    !Number.isFinite(i.width) ||
    !Number.isFinite(i.height) ||
    i.width <= 0 ||
    i.height <= 0 ||
    i.x >= window.innerWidth ||
    i.x + i.width <= 0 ||
    i.y >= window.innerHeight ||
    i.y + i.height <= 0
    ? null
    : { x: i.x + i.width / 2, y: i.y + i.height / 2 };
}
function K(e) {
  let t = e.commonAncestorContainer,
    n = document.createTreeWalker(t, NodeFilter.SHOW_TEXT),
    r = t.nodeType === Node.TEXT_NODE ? t : n.nextNode();
  for (; r != null;) {
    let t = r.textContent ?? ``,
      i = r === e.startContainer ? e.startOffset : 0,
      a = r === e.endContainer ? e.endOffset : t.length,
      o = r instanceof Text ? (r.assignedSlot ?? r.parentElement) : r.parentElement;
    if (a > i && e.intersectsNode(r) && (o == null || !Cd(o))) return !1;
    r = n.nextNode();
  }
  return !0;
}
function Cd(e) {
  let t = window.getComputedStyle(e).visibility;
  if (t === `hidden` || t === `collapse`) return !1;
  for (let t = e; t != null; t = Qs(t)) {
    let e = window.getComputedStyle(t);
    if (e.display === `none` || e.contentVisibility === `hidden` || Number.parseFloat(e.opacity) === 0)
      return !1;
  }
  return !0;
}
function wd(e, t) {
  let n = Td(e, t.startPath),
    r = Td(e, t.endPath);
  if (n == null || r == null) return null;
  let i = document.createRange();
  try {
    (i.setStart(n, t.startOffset), i.setEnd(r, t.endOffset));
  } catch {
    return null;
  }
  return !i.collapsed && i.toString() === t.rangeText ? i : null;
}
function Td(e, t) {
  let n = e;
  for (let e of t) {
    let t = n.childNodes[e];
    if (t == null) return null;
    n = t;
  }
  return n;
}
function Ed({ canUseSiteAnnotationApi: e, hasActiveEditor: t, isAgentControllingBrowser: n }) {
  return globalThis.isSecureContext === !0 && e && !n && !t;
}
function Dd(e) {
  try {
    let t = `detail` in e ? (e.detail ?? {}) : {};
    if (typeof t != `object`) return;
    let n = Object.getPrototypeOf(t);
    if (n !== Object.prototype && n != null) return;
    let r = bd.safeParse(
      Object.fromEntries(
        [`mode`, `enterAnnotationMode`, `initialComment`, `metadata`, `range`].map((e) => {
          try {
            let n = Object.getOwnPropertyDescriptor(t, e);
            return n != null && !Object.hasOwn(n, `value`) ? [e, void 0] : [e, n?.value];
          } catch {
            return [e, void 0];
          }
        }),
      ),
    );
    return r.success ? r.data : void 0;
  } catch {
    return;
  }
}
function Od(e) {
  let t = e.defaultValue ?? e.currentValue;
  if (t != null) return t;
  switch (e.type) {
    case `color`:
      return `#ffffff`;
    case `select`:
      return e.options[0].value;
    case `range`:
      return e.min;
    case `toggle`:
      return !1;
  }
}
var kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  q,
  Id,
  Ld,
  Rd = o(() => {
    (Uo(),
      (kd = _a()
        .max(512)
        .regex(/^[^\u0000-\u001f\u007f-\u009f\u061c\u200e\u200f\u2028-\u202e\u2066-\u2069]*$/u)),
      (Ad = kd.trim().min(1).max(80)),
      (jd = _a()
        .trim()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*$/)),
      (Md = _a()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z0-9_./:@$#-]+$/)),
      (Nd = va().min(-1e4).max(1e4)),
      (Pd = kd.regex(/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)),
      (Fd = Da([kd, Nd, ba()])),
      wa(
        Ea({ label: Ad, reference: Md.optional(), previousValue: Fd.optional(), value: Fd }).refine(
          (e) => e.previousValue == null || typeof e.previousValue == typeof e.value,
          { message: `Control changes must preserve the original value type`, path: [`value`] },
        ),
      ).max(12),
      (q = Ea({ callback: jd, label: Ad, reference: Md.optional() })),
      (Id = Oa(`type`, [
        q.extend({ currentValue: Pd.optional(), defaultValue: Pd.optional(), type: Ma(`color`) }),
        q.extend({
          currentValue: kd.optional(),
          defaultValue: kd.optional(),
          options: wa(Ea({ label: Ad, value: kd }))
            .min(1)
            .max(12),
          type: Ma(`select`),
        }),
        q.extend({
          currentValue: Nd.optional(),
          defaultValue: Nd.optional(),
          max: Nd,
          min: Nd,
          step: va().min(0.001).max(1e4),
          type: Ma(`range`),
        }),
        q.extend({ currentValue: ba().optional(), defaultValue: ba().optional(), type: Ma(`toggle`) }),
      ]).superRefine((e, t) => {
        if (e.type === `range`) {
          (e.min >= e.max || e.step > e.max - e.min) &&
            t.addIssue({ code: `custom`, message: `Ranges require valid bounds and step`, path: [`min`] });
          for (let n of [`currentValue`, `defaultValue`]) {
            let r = e[n];
            r != null &&
              (r < e.min || r > e.max) &&
              t.addIssue({
                code: `custom`,
                message: `Range control values must be within bounds`,
                path: [n],
              });
          }
          return;
        }
        if (e.type !== `select`) return;
        let n = new Set(e.options.map((e) => e.value));
        n.size !== e.options.length &&
          t.addIssue({
            code: `custom`,
            message: `Selection controls require distinct options`,
            path: [`options`],
          });
        for (let r of [`currentValue`, `defaultValue`]) {
          let i = e[r];
          i != null &&
            !n.has(i) &&
            t.addIssue({
              code: `custom`,
              message: `Selection control values must match an option`,
              path: [r],
            });
        }
      })),
      Ea({ callback: jd, previousValue: Fd.optional(), value: Fd }).superRefine((e, t) => {
        e.previousValue != null &&
          typeof e.previousValue != typeof e.value &&
          t.addIssue({
            code: `custom`,
            message: `Control changes must preserve the original value type`,
            path: [`value`],
          });
      }),
      (Ld = Ea({
        controls: wa(Id).max(12),
        controlsHeading: Ad.optional(),
        controlsMode: ja([`extend`, `replace`]).optional(),
      }).superRefine(({ controls: e }, t) => {
        new Set(e.map((e) => e.callback)).size !== e.length &&
          t.addIssue({
            code: `custom`,
            message: `Each control must have a unique callback`,
            path: [`controls`],
          });
      })));
  });
(Uo(), Rd());
var zd = 64,
  Bd = 128,
  Vd = 1024,
  Hd = 16384,
  Ud = `codex:register-annotation-controls`,
  Wd = `codex:update-annotation-controls`,
  Gd = `codex:dispose-annotation-controls`,
  Kd = `codex-browser-sidebar-comments-root`,
  qd = Ea({
    controls: Ld.shape.controls.optional(),
    controlsHeading: Ld.shape.controlsHeading,
    controlsMode: Ld.shape.controlsMode,
  });
function Jd() {
  let e = document,
    t = window,
    n = new Map(),
    r = new WeakMap(),
    i = 0,
    a = 0,
    o = (e, t) => {
      ((e.targets = Array.from(t, (e) => new WeakRef(e))), (i += t.size));
      for (let n of t) {
        let t = r.get(n);
        t == null ? r.set(n, [e]) : (t.push(e), t.sort((e, t) => e.order - t.order));
      }
    },
    s = (e) => {
      i -= e.targets.length;
      for (let t of e.targets) {
        let n = t.deref();
        if (n == null) continue;
        let i = r.get(n);
        if (i == null) continue;
        let a = i.indexOf(e);
        (a !== -1 && i.splice(a, 1), i.length === 0 && r.delete(n));
      }
    },
    c = (t) => {
      try {
        let r = Yd(t);
        if (r == null) return;
        let s = Xd(r, `id`),
          c = Xd(r, `payload`),
          l = Xd(r, `targets`);
        if (typeof s != `string` || s.length === 0 || s.length > 80 || n.has(s) || n.size >= zd) return;
        let u = Zd(c);
        if (u == null) return;
        let d = Qd(e, l);
        if (d == null || d.size === 0 || n.has(s) || n.size >= zd || i + d.size > Vd) return;
        let f = { controls: u, id: s, order: a++, targets: [] };
        (n.set(s, f), o(f, d), t.preventDefault());
      } catch {}
    },
    l = (t) => {
      try {
        let r = Yd(t);
        if (r == null) return;
        let a = Xd(r, `id`),
          c = Xd(r, `payload`),
          l = Xd(r, `targets`);
        if (typeof a != `string`) return;
        let u = n.get(a);
        if (u == null) return;
        let d = l === void 0 ? void 0 : Qd(e, l);
        if ((l !== void 0 && d == null) || n.get(a) !== u) return;
        let f = Zd(c, u.controls);
        if (f == null || (d != null && i - u.targets.length + d.size > Vd)) return;
        ((u.controls = f), d != null && (s(u), o(u, d)), t.preventDefault());
      } catch {}
    },
    u = (e) => {
      try {
        let t = Yd(e);
        if (t == null) return;
        let r = Xd(t, `id`);
        if (typeof r != `string`) return;
        let i = n.get(r);
        if (i == null) return;
        (n.delete(r), s(i), e.preventDefault());
      } catch {}
    },
    d = () => {
      (n.clear(),
        (r = new WeakMap()),
        (i = 0),
        t.removeEventListener(Ud, c),
        t.removeEventListener(Wd, l),
        t.removeEventListener(Gd, u),
        t.removeEventListener(`pagehide`, f));
    },
    f = (e) => {
      e.isTrusted && !e.persisted && d();
    };
  return (
    t.addEventListener(Ud, c),
    t.addEventListener(Wd, l),
    t.addEventListener(Gd, u),
    t.addEventListener(`pagehide`, f),
    {
      dispose: d,
      getTargets() {
        let t = new Set();
        for (let r of n.values())
          for (let n of r.targets) {
            let r = n.deref();
            r instanceof HTMLElement && r.isConnected && r.ownerDocument === e && t.add(r);
          }
        return [...t];
      },
      getControls(t) {
        return t.ownerDocument === e ? r.get(t)?.at(-1)?.controls : void 0;
      },
    }
  );
}
function Yd(e) {
  if (!(e instanceof CustomEvent)) return;
  let t = e.detail;
  return typeof t == `object` && t ? t : void 0;
}
function Xd(e, t) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n != null && `value` in n ? n.value : void 0;
}
function Zd(e, t) {
  if (!(typeof e != `string` || e.length > Hd))
    try {
      let n = JSON.parse(e);
      if (t != null) {
        let e = qd.safeParse(n);
        if (!e.success) return;
        n = { ...t, ...e.data };
      }
      let r = Ld.safeParse(n);
      return r.success ? r.data : void 0;
    } catch {
      return;
    }
}
function Qd(e, t) {
  if (!Array.isArray(t)) return;
  let n = t.length;
  if (!Number.isSafeInteger(n) || n < 0 || n > Bd) return;
  let r = new Set();
  for (let i = 0; i < n; i += 1) {
    let n = Xd(t, String(i));
    if (!(n instanceof Element) || n.ownerDocument !== e || $d(e, n)) return;
    r.add(n);
  }
  return r;
}
function $d(e, t) {
  let n = e.getElementById?.(Kd);
  return n != null && (n === t || n.contains(t) || n.shadowRoot?.contains(t) === !0);
}
function ef(e, t) {
  switch (t.type) {
    case `browser-sidebar-runtime-select-comment`:
    case `browser-sidebar-runtime-create-comment-at-point`:
    case `browser-sidebar-runtime-create-comment-from-selection`:
    case `browser-sidebar-runtime-open-design-editor-at-point`:
      return t;
    case `browser-sidebar-runtime-restore-editor`:
      return e?.type === `browser-sidebar-runtime-select-comment` ||
        e?.type === `browser-sidebar-runtime-create-comment-at-point` ||
        e?.type === `browser-sidebar-runtime-create-comment-from-selection` ||
        e?.type === `browser-sidebar-runtime-open-design-editor-at-point`
        ? e
        : t;
    case `browser-sidebar-runtime-close-editor`:
      return null;
    case `browser-sidebar-runtime-sync`:
    case `browser-sidebar-runtime-prepare-comment-screenshot`:
    case `browser-sidebar-runtime-clear-comment-screenshot`:
      return e;
  }
}
function tf() {
  let e = null,
    t = null,
    n = !1;
  return {
    buffer(r) {
      switch (r.type) {
        case `browser-sidebar-runtime-sync`:
          e = r;
          return;
        case `browser-sidebar-runtime-capture-text-selection`:
          n = !0;
          return;
        case `browser-sidebar-runtime-select-comment`:
        case `browser-sidebar-runtime-create-comment-at-point`:
        case `browser-sidebar-runtime-create-comment-from-selection`:
        case `browser-sidebar-runtime-open-design-editor-at-point`:
        case `browser-sidebar-runtime-restore-editor`:
        case `browser-sidebar-runtime-close-editor`:
          t = ef(t, r);
          return;
        case `browser-sidebar-runtime-design-scrub-changed`:
        case `browser-sidebar-runtime-annotation-selection-hover-state`:
        case `browser-sidebar-runtime-annotation-selection-modifier-state`:
        case `browser-sidebar-runtime-remove-annotation-selection`:
        case `browser-sidebar-runtime-prepare-comment-screenshot`:
        case `browser-sidebar-runtime-clear-comment-screenshot`:
          return;
      }
    },
    flush(r) {
      (e != null && (r(e), (e = null)),
        (n &&= (r({ type: `browser-sidebar-runtime-capture-text-selection` }), !1)),
        t != null && (r(t), (t = null)));
    },
    clearSync() {
      e = null;
    },
    clear() {
      ((e = null), (t = null), (n = !1));
    },
    get hasPendingEditor() {
      return t != null;
    },
  };
}
function nf(e) {
  return Math.min(sf, Math.max(of, e));
}
function rf(e) {
  return nf(e) / 100;
}
var af,
  of,
  sf,
  cf = o(() => {
    ((af = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500]),
      (of = af[0]),
      (sf = af[af.length - 1]));
  });
cf();
var lf = `codex_desktop:message-for-view`,
  uf = `codex_desktop:browser-sidebar-runtime-message`,
  df = `codex_desktop:browser-page-event`,
  ff = `codex_desktop:get-browser-annotation-api-policy`;
Uo();
var pf = { type: `site_annotation_features_changed`, version: 1 },
  mf = Da([
    Ta({
      feature: ja([
        `selectable-containers`,
        `text-containers`,
        `custom-controls`,
        `registered-surface`,
        `metadata`,
        `mode-toggle`,
      ]),
      includesPrompt: Ca().optional(),
    }),
    Ta({ feature: Ma(`requests`), includesPrompt: ba() }),
  ]);
Ta({
  type: Ma(pf.type),
  version: Ma(pf.version),
  payload: Ta({
    detections: wa(mf).max(8),
    used: ka(mf, Ta({ interactionType: ja([`opened`, `invoked`]) })).optional(),
    features: wa(
      ja([
        `containers`,
        `controls`,
        `surfaces`,
        `metadata`,
        `metadata-with-targets`,
        `mode-toggle`,
        `requests`,
        `requests-with-prompts`,
      ]),
    )
      .max(6)
      .refine((e) => !e.includes(`requests`) || !e.includes(`requests-with-prompts`))
      .refine((e) => !e.includes(`metadata`) || !e.includes(`metadata-with-targets`)),
  }),
});
function hf(e, t, n, r, i, a, o) {
  let s = 0,
    c = !1,
    l = (e) => {
      if (typeof e != `object` || !e) throw TypeError(`Invalid annotation controls`);
      let t = JSON.stringify(
        { controls: e.controls, controlsHeading: e.controlsHeading, controlsMode: e.controlsMode },
        (e, t) => {
          if (typeof t == `function` || typeof t == `symbol` || typeof t == `bigint`)
            throw TypeError(`Annotation controls must contain only data`);
          return t;
        },
      );
      if (t.length > 16384) throw RangeError(`Annotation controls exceed the maximum size`);
      return t;
    },
    u = {
      toggle: (e) => ({ accepted: !c && (e === void 0 || typeof e == `boolean`) && m() && i(e) }),
      isActive: () => !c && a(),
      request: (r, i = {}) => {
        if (typeof i != `object` || !i || c || !m() || (!(r instanceof Element) && !(r instanceof Range)))
          return { accepted: !1 };
        let a = r instanceof Range ? r : void 0,
          s = r instanceof Range ? r.commonAncestorContainer : r,
          l = s instanceof Element ? s : s.parentElement;
        if (l == null || l.ownerDocument !== document || !l.isConnected || a?.collapsed)
          return { accepted: !1 };
        let u = l.getRootNode();
        if (a != null && u instanceof ShadowRoot && u.mode === `closed`) return { accepted: !1 };
        let f = a == null ? void 0 : d(a.startContainer, l),
          p = a == null ? void 0 : d(a.endContainer, l),
          h = a?.toString();
        if (a != null && (f == null || p == null || h == null || h.trim().length === 0 || h.length > n))
          return { accepted: !1 };
        let g = S(`initialComment`),
          _ = typeof g == `string` && g.length <= t ? g : void 0,
          v = S(`mode`) === `advanced` ? `advanced` : `default`,
          y = S(`enterAnnotationMode`) === !0,
          b = (() => {
            try {
              let t = S(`metadata`);
              if (typeof t != `object` || !t) return;
              let n = Object.getPrototypeOf(t);
              if (n !== Object.prototype && n != null) return;
              let r = Object.getOwnPropertyDescriptors(t),
                i = Reflect.ownKeys(r);
              if (i.length > e.maxKeys) return;
              let a = [];
              for (let t of i) {
                if (typeof t != `string` || t.length > e.maxKeyLength) return;
                let n = r[t];
                if (!n.enumerable || !Object.hasOwn(n, `value`)) return;
                let i = n.value;
                if (
                  i === void 0 ||
                  (i != null &&
                    typeof i != `string` &&
                    typeof i != `boolean` &&
                    (typeof i != `number` || !Number.isFinite(i))) ||
                  (typeof i == `string` && i.length > e.maxStringValueLength)
                )
                  return;
                a.push([t, i]);
              }
              return a.length === 0 ? void 0 : Object.fromEntries(a);
            } catch {
              return;
            }
          })();
        (a != null || l.getRootNode() !== document) && (b = void 0);
        let x = !l.dispatchEvent(
          new CustomEvent(`codex:open-annotation`, {
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            detail: {
              mode: v,
              enterAnnotationMode: y,
              metadata: b,
              initialComment: _,
              range:
                a == null
                  ? void 0
                  : {
                      startPath: f,
                      endPath: p,
                      startOffset: a.startOffset,
                      endOffset: a.endOffset,
                      rangeText: h,
                    },
            },
          }),
        );
        return (o(b, _, x), { accepted: x });
        function S(e) {
          try {
            let t = Object.getOwnPropertyDescriptor(i, e);
            return t != null && Object.hasOwn(t, `value`) ? t.value : void 0;
          } catch {
            return;
          }
        }
      },
      registerControls: (e) => {
        if (typeof e != `object` || !e) throw TypeError(`Invalid annotation controls registration`);
        let t = f(e.targets);
        if (t.length === 0) throw TypeError(`Annotation controls require element targets`);
        let n = l(e);
        s += 1;
        let i = String(s);
        if (!r(`register`, { id: i, payload: n, targets: t }))
          throw TypeError(`Invalid annotation controls registration`);
        return p(i);
      },
    };
  try {
    let e = Reflect.get(document, `oai`);
    if (e != null && typeof e != `object` && typeof e != `function`) return null;
    let t = e ?? {};
    if (Reflect.get(t, `annotation`) != null) return null;
    let n = Reflect.getOwnPropertyDescriptor(document, `oai`),
      r = Reflect.getOwnPropertyDescriptor(t, `annotation`);
    if (
      !Reflect.defineProperty(t, "annotation", { configurable: !0, enumerable: !1, value: u }) ||
      (e == null && !Reflect.defineProperty(document, "oai", { configurable: !0, enumerable: !1, value: t }))
    )
      return null;
    let i = u.toggle,
      a = u.isActive,
      o = u.request,
      s = u.registerControls;
    return () => {
      c = !0;
      try {
        (h(u, `toggle`, i, void 0),
          h(u, `isActive`, a, void 0),
          h(u, `registerControls`, s, void 0),
          h(u, `request`, o, void 0),
          Reflect.ownKeys(u).length === 0 && h(t, `annotation`, u, r),
          e == null && Reflect.ownKeys(t).length === 0 && h(document, `oai`, t, n));
      } catch {}
    };
  } catch {
    return null;
  }
  function d(e, t) {
    let n = [],
      r = e;
    for (; r !== t;) {
      let e = r.parentNode;
      if (e == null || n.length >= 128) return null;
      (n.unshift(Array.from(e.childNodes).findIndex((e) => e === r)), (r = e));
    }
    return n;
  }
  function f(e) {
    if (!(e instanceof Element) && (e == null || typeof e[Symbol.iterator] != `function`))
      throw TypeError(`Annotation controls require element targets`);
    let t = e instanceof Element ? [e] : e,
      n = new Set(),
      r = 0;
    for (let e of t) {
      if (((r += 1), r > 128)) throw RangeError(`Too many annotation control targets`);
      if (!(e instanceof Element) || e.ownerDocument !== document)
        throw TypeError(`Annotation control targets must belong to this document`);
      n.add(e);
    }
    return Array.from(n);
  }
  function p(e) {
    let t = !1;
    return Object.freeze({
      update(n) {
        if (t) throw TypeError(`Annotation controls have been disposed`);
        let i = l(n),
          a = n.targets;
        if (!r(`update`, { id: e, payload: i, targets: a === void 0 ? void 0 : f(a) }))
          throw TypeError(`Invalid annotation controls update`);
      },
      dispose() {
        t || ((t = !0), r(`dispose`, { id: e }));
      },
    });
  }
  function m() {
    return navigator.userActivation?.isActive === !0;
  }
  function h(e, t, n, r) {
    Reflect.getOwnPropertyDescriptor(e, t)?.value === n &&
      (r == null ? Reflect.deleteProperty(e, t) : Reflect.defineProperty(e, t, r));
  }
}
function gf(e, t) {
  let n = new Map(),
    r = null,
    i = null,
    a = !1,
    o = 0;
  if (window !== window.top || !globalThis.isSecureContext) return !1;
  let s = crypto.randomUUID(),
    c = new RegExp(e.rolePattern),
    l = Symbol.for(e.busySlot),
    u = m();
  if (u == null) return !1;
  let d = (e) => {
    if (
      a ||
      e == null ||
      !(e.element instanceof HTMLElement) ||
      !h(e.element) ||
      typeof e.hitTest != `function` ||
      (e.renderSelection != null && typeof e.renderSelection != `function`)
    )
      throw TypeError(`Annotation surfaces require a connected top-document element and hitTest callback.`);
    let c = e.element,
      l = n.get(c);
    l != null && C(l);
    let u = {
      id: `${s}-${++o}`,
      options: { element: c, hitTest: e.hitTest, renderSelection: e.renderSelection },
      renderFailed: !1,
      selection: { hoveredId: null, selectedId: null },
    };
    return (
      n.set(c, u),
      t(`surfaces`),
      w(u, `registered`),
      {
        invalidate() {
          n.get(c) === u && (r?.registration === u && y(), i?.registration === u && b(), w(u, `invalidated`));
        },
        dispose() {
          n.get(c) === u && C(u);
        },
      }
    );
  };
  try {
    if (!Reflect.defineProperty(u, "registerSurface", { configurable: !0, enumerable: !1, value: d }))
      return !1;
  } catch {
    return !1;
  }
  let f = () => {
    a = !0;
    for (let e of n.values()) C(e);
    (p.disconnect(),
      document.removeEventListener(e.requestEvent, g),
      document.removeEventListener(e.removeEvent, f),
      document.removeEventListener(e.availableEvent, _),
      Reflect.getOwnPropertyDescriptor(u, `registerSurface`)?.value === d &&
        Reflect.deleteProperty(u, `registerSurface`));
  };
  (document.addEventListener(e.requestEvent, g),
    document.addEventListener(e.removeEvent, f),
    document.addEventListener(e.availableEvent, _));
  let p = new MutationObserver(() => {
    for (let e of n.values()) h(e.options.element) || C(e);
  });
  return (p.observe(document, { childList: !0, subtree: !0 }), !0);
  function m() {
    try {
      let e = Reflect.get(document, `oai`);
      if (e == null || (typeof e != `object` && typeof e != `function`)) return null;
      let t = Reflect.get(e, `annotation`);
      return typeof t == `object` && t && !Reflect.has(t, `registerSurface`) ? t : null;
    } catch {
      return null;
    }
  }
  function h(e) {
    return (
      !(e instanceof HTMLIFrameElement) &&
      e.isConnected &&
      e.ownerDocument === document &&
      e.getRootNode() === document
    );
  }
  function g(t) {
    if (!(t instanceof CustomEvent) || typeof t.detail != `string` || t.detail.length > e.maxPayloadLength)
      return;
    let r;
    try {
      r = te(JSON.parse(t.detail), 6);
    } catch {
      return;
    }
    if (r == null || a) return;
    if (r.type === `list`) {
      for (let e of n.values()) h(e.options.element) && w(e, `registered`);
      return;
    }
    if (r.type === `cancel` || r.type === `clear`) {
      if ((y(), b(), r.type === `clear`))
        for (let e of n.values()) x(e, { hoveredId: null, selectedId: null });
      return;
    }
    let o = t.target instanceof HTMLElement ? n.get(t.target) : null;
    if (o != null && h(o.options.element)) {
      if (r.type === `probe`) {
        w(o, `registered`);
        return;
      }
      if (r.registrationId === o.id) {
        if (r.type === `render`) {
          ee(r.hoveredId) && ee(r.selectedId) && x(o, { hoveredId: r.hoveredId, selectedId: r.selectedId });
          return;
        }
        r.type !== `hit-test` ||
          typeof r.requestId != `string` ||
          r.requestId.length > 128 ||
          typeof r.x != `number` ||
          !Number.isFinite(r.x) ||
          typeof r.y != `number` ||
          !Number.isFinite(r.y) ||
          (b(),
          (i = {
            registration: o,
            requestId: r.requestId,
            x: r.x,
            y: r.y,
            deadline: performance.now() + e.deadlineMs,
            timer: setTimeout(b, e.deadlineMs),
          }),
          _());
      }
    }
  }
  function _() {
    if (r != null || i == null || Reflect.getOwnPropertyDescriptor(document, l) != null) return;
    let e = i;
    ((i = null), clearTimeout(e.timer));
    let { registration: t } = e,
      n = e.deadline - performance.now();
    if (n <= 0) {
      w(t, `result`, e.requestId);
      return;
    }
    if (!Reflect.defineProperty(document, l, { configurable: !0, value: s })) {
      w(t, `result`, e.requestId);
      return;
    }
    let a = {
      registration: t,
      requestId: e.requestId,
      controller: new AbortController(),
      timer: setTimeout(y, n),
      deadline: e.deadline,
      answered: !1,
    };
    r = a;
    try {
      let n = t.options.hitTest({ clientX: e.x, clientY: e.y, signal: a.controller.signal });
      Promise.resolve(n).then(
        (e) => v(a, e),
        () => v(a, void 0),
      );
    } catch {
      v(a, void 0);
    }
  }
  function v(t, o) {
    (clearTimeout(t.timer),
      r === t &&
        (performance.now() >= t.deadline && y(),
        (r = null),
        Reflect.getOwnPropertyDescriptor(document, l)?.value === s && Reflect.deleteProperty(document, l),
        t.answered
          ? i == null
            ? !a &&
              n.get(t.registration.options.element) === t.registration &&
              w(t.registration, `invalidated`)
            : _()
          : ((t.answered = !0), w(t.registration, `result`, t.requestId, E(o)), _()),
        document.dispatchEvent(new Event(e.availableEvent))));
  }
  function y() {
    r == null ||
      r.answered ||
      ((r.answered = !0),
      clearTimeout(r.timer),
      r.controller.abort(),
      w(r.registration, `result`, r.requestId));
  }
  function b() {
    if (i == null) return;
    let e = i;
    ((i = null), clearTimeout(e.timer), w(e.registration, `result`, e.requestId));
  }
  function x(e, t) {
    let n = e.options.renderSelection;
    if (!(
      n == null ||
      (e.renderFailed && (t.hoveredId != null || t.selectedId != null)) ||
      (e.selection.hoveredId === t.hoveredId && e.selection.selectedId === t.selectedId)
    )) {
      e.selection = t;
      try {
        let r = n({ ...t });
        r != null && Promise.resolve(r).catch(() => S(e));
      } catch {
        S(e);
      }
    }
  }
  function S(e) {
    e.renderFailed ||
      ((e.renderFailed = !0), x(e, { hoveredId: null, selectedId: null }), w(e, `rendering-failed`));
  }
  function C(e) {
    (n.delete(e.options.element),
      r?.registration === e && y(),
      i?.registration === e && b(),
      x(e, { hoveredId: null, selectedId: null }),
      w(e, `disposed`));
  }
  function w(n, r, i, a) {
    (a?.metadata != null && Object.keys(a.metadata).length > 0 && t(`metadata`),
      n.options.element.dispatchEvent(
        new CustomEvent(e.responseEvent, {
          bubbles: !0,
          detail: JSON.stringify({
            type: r,
            registrationId: n.id,
            customRendering: n.options.renderSelection != null && !n.renderFailed,
            requestId: i,
            hit: a,
          }),
        }),
      ));
  }
  function T(t) {
    return (
      typeof t == `string` &&
      t.length > 0 &&
      t.length <= e.maxIdLength &&
      /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(t)
    );
  }
  function ee(e) {
    return e === null || T(e);
  }
  function te(e, t) {
    if (typeof e != `object` || !e) return null;
    let n = Object.getPrototypeOf(e);
    if (n !== Object.prototype && n != null) return null;
    let r = Object.getOwnPropertyDescriptors(e);
    if (Reflect.ownKeys(r).length > t || Reflect.ownKeys(r).some((e) => typeof e != `string`)) return null;
    let i = Object.create(null);
    for (let [e, t] of Object.entries(r)) {
      if (
        !t.enumerable ||
        !Object.hasOwn(t, `value`) ||
        e === `__proto__` ||
        e === `constructor` ||
        e === `prototype`
      )
        return null;
      i[e] = t.value;
    }
    return i;
  }
  function E(t) {
    if (t === null) return null;
    try {
      let n = te(t, 5);
      if (n == null || !T(n.id)) return;
      let r = { id: n.id };
      if (
        (typeof n.name == `string` &&
          n.name.trim().length > 0 &&
          n.name.length <= 128 &&
          /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(n.name) &&
          (r.name = n.name),
        typeof n.role == `string` && n.role.length <= e.maxRoleLength && c.test(n.role) && (r.role = n.role),
        n.rect !== void 0)
      ) {
        let e = te(n.rect, 4);
        if (
          e == null ||
          typeof e.x != `number` ||
          !Number.isFinite(e.x) ||
          typeof e.y != `number` ||
          !Number.isFinite(e.y) ||
          typeof e.width != `number` ||
          !Number.isFinite(e.width) ||
          e.width <= 0 ||
          typeof e.height != `number` ||
          !Number.isFinite(e.height) ||
          e.height <= 0
        )
          return;
        r.rect = { x: e.x, y: e.y, width: e.width, height: e.height };
      }
      let i = te(n.metadata, e.metadataLimits.maxKeys);
      if (
        i != null &&
        Object.entries(i).every(
          ([t, n]) =>
            t.length <= e.metadataLimits.maxKeyLength &&
            /^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/.test(t) &&
            (n === null ||
              typeof n == `boolean` ||
              (typeof n == `number` && Number.isFinite(n)) ||
              (typeof n == `string` &&
                n.length <= e.metadataLimits.maxStringValueLength &&
                /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(n))),
        )
      ) {
        let t = JSON.stringify(i);
        new TextEncoder().encode(t).byteLength <= e.metadataLimits.maxSerializedBytes &&
          (r.metadata = JSON.parse(t));
      }
      return r;
    } catch {
      return;
    }
  }
}
var _f,
  vf = o(() => {
    (Uo(),
      (_f = _a()
        .min(1)
        .max(128)
        .regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)));
  });
function yf(e) {
  let t = xf.safeParse(e);
  return t.success ? t.data : void 0;
}
var bf,
  xf,
  Sf,
  Cf,
  wf = o(() => {
    (Uo(),
      es(),
      vf(),
      (bf = {
        requestEvent: `codex:annotation-surface-request`,
        responseEvent: `codex:annotation-surface-response`,
        removeEvent: `codex:annotation-surfaces-remove`,
        availableEvent: `codex:annotation-surface-available`,
        busySlot: `codex:annotation-surface-pending`,
        deadlineMs: 250,
        maxPayloadLength: 8192,
        maxIdLength: 128,
        maxRoleLength: 64,
        rolePattern: `^[a-z][a-z0-9-]*(?![\\s\\S])`,
        metadataLimits: Jo,
      }),
      (xf = _a().max(bf.maxRoleLength).regex(new RegExp(bf.rolePattern))),
      (Sf = Ta({
        id: _f,
        name: Sa().optional(),
        role: Sa().optional(),
        metadata: Sa().optional(),
        rect: Ta({ x: va(), y: va(), width: va().positive(), height: va().positive() }).optional(),
      })),
      (Cf = Ta({
        type: ja([`registered`, `invalidated`, `disposed`, `rendering-failed`, `result`]),
        registrationId: _f,
        requestId: _a().max(128).optional(),
        customRendering: ba().optional(),
        hit: Sf.nullable().optional(),
      })));
  });
(wf(), qs());
function Tf(e, t, n, r) {
  let i = !0,
    a = Ef(() => i, e, t, n, r);
  if (a == null) return null;
  let o = !1;
  try {
    o =
      d.contextBridge.executeInMainWorld({
        func: gf,
        args: [
          bf,
          (e) => {
            i && n(e, !1);
          },
        ],
      }) === !0;
  } catch {}
  return () => {
    ((i = !1), o && document.dispatchEvent(new Event(bf.removeEvent)), a());
  };
}
function Ef(e, t, n, r, i) {
  return d.contextBridge.executeInMainWorld({
    func: hf,
    args: [
      Jo,
      240,
      Is,
      (t, n) => {
        if (!e() || (t !== `register` && t !== `update` && t !== `dispose`)) return !1;
        let i = !window.dispatchEvent(
          new CustomEvent(`codex:${t}-annotation-controls`, { cancelable: !0, detail: n }),
        );
        return (i && (t === `register` || t === `update`) && r(`controls`, !1), i);
      },
      (n) => {
        if (!e()) return !1;
        let a = t(n);
        return ((a || !i()) && r(`mode-toggle`, a && i()), a);
      },
      n,
      (t, n, a) => {
        if (!e() || (!a && i())) return;
        r(
          typeof n == `string` && n.length <= 240 && n.trim().length > 0
            ? `requests-with-prompts`
            : `requests`,
          a && i(),
        );
        let o = Go(t);
        o != null && Object.keys(o).length > 0 && r(`metadata`, a && i());
      },
    ],
  });
}
qs();
var Df = `oai-annotation-container`,
  Of = `oai-annotation-container-text`,
  kf = `oai-annotation-metadata`,
  Af = `oai-annotatable`,
  jf = `codex:annotation-shadow-root-attached`,
  Mf = {
    containers: null,
    controls: { feature: `custom-controls` },
    surfaces: { feature: `registered-surface` },
    metadata: { feature: `metadata` },
    "metadata-with-targets": null,
    "mode-toggle": { feature: `mode-toggle` },
    requests: { feature: `requests`, includesPrompt: !1 },
    "requests-with-prompts": { feature: `requests`, includesPrompt: !0 },
  },
  Nf = { childList: !0, subtree: !0, attributes: !0, attributeFilter: [Df, Of, kf, Af] };
function Pf(e) {
  let t = new Set(),
    n = [],
    r = new Set(),
    i = new Set(),
    a = new Map(),
    o = !1,
    s = !1,
    c = (r) => e([...t], [...n], r),
    l = (e) =>
      !n.some((t) => t.feature === e.feature && t.includesPrompt === e.includesPrompt) && (n.push(e), !0),
    u = (e = !1, n) => {
      let o = e;
      for (let e of r)
        !e.isConnected || e.ownerDocument !== document || (!e.hasAttribute(Df) && !e.hasAttribute(Of))
          ? r.delete(e)
          : (o = l({ feature: e.hasAttribute(Of) ? `text-containers` : `selectable-containers` }) || o);
      for (let e of i) (!e.isConnected || e.ownerDocument !== document) && i.delete(e);
      for (let [e, t] of a)
        (!e.host.isConnected || e.host.ownerDocument !== document) && (t.disconnect(), a.delete(e));
      let u = t.has(`containers`);
      i.size > 0 && (o = l({ feature: `metadata` }) || o);
      let d = i.size > 0 ? `metadata-with-targets` : `metadata`,
        f = t.has(d),
        p = i.size > 0 || s,
        m = t.delete(d === `metadata` ? `metadata-with-targets` : `metadata`);
      (r.size > 0 ? t.add(`containers`) : t.delete(`containers`),
        p ? t.add(d) : t.delete(d),
        (u !== t.has(`containers`) || f !== p || m || o || n != null) && c(n));
    },
    f = (e) => {
      if (!e.isConnected || e.ownerDocument !== document) return;
      (e.hasAttribute(Df) || e.hasAttribute(Of)) && r.add(e);
      let t =
        e instanceof HTMLElement &&
        e !== document.body &&
        e !== document.documentElement &&
        e.hasAttribute(Af)
          ? Ko(e.getAttribute(kf))
          : void 0;
      t != null && Object.keys(t).length > 0 ? i.add(e) : i.delete(e);
      let n = e.shadowRoot;
      if (n != null && !a.has(n)) {
        let e = new MutationObserver(m);
        (e.observe(n, Nf), a.set(n, e), n.querySelectorAll(`*`).forEach(f));
      }
    },
    p = (e) => {
      e.isConnected && e.ownerDocument === document && (f(e), e.querySelectorAll(`*`).forEach(f));
    };
  function m(e) {
    for (let t of e)
      if (t.type === `attributes` && t.target instanceof Element) f(t.target);
      else for (let e of t.addedNodes) e instanceof Element && p(e);
    u();
  }
  let h = (e) => {
      let t = e.composedPath()[0];
      t instanceof Element && (p(t), u());
    },
    g = new MutationObserver(m);
  (g.observe(document, Nf), document.addEventListener(jf, h));
  let _ = d.contextBridge.executeInMainWorld({ func: Ff, args: [jf] });
  (document.querySelectorAll(`*`).forEach(f), u());
  let v = () => c();
  return (
    window.addEventListener(`pageshow`, v),
    {
      recordAnnotationOpened(e, t) {
        if (o) return;
        let n = e === `requests` ? { feature: e, includesPrompt: t === !0 } : { feature: e };
        (l(n), c({ ...n, interactionType: `opened` }));
      },
      recordUse(e, n) {
        if (o) return;
        let r = Mf[e],
          i = r != null && l(r),
          a = n && r != null ? { ...r, interactionType: `invoked` } : void 0;
        if (e === `metadata`) {
          ((s = !0), u(i, a));
          return;
        }
        if (e === `requests` && t.has(`requests-with-prompts`)) {
          (i || a != null) && c(a);
          return;
        }
        e === `requests-with-prompts` && t.delete(`requests`);
        let d = !t.has(e);
        (d && t.add(e), (d || a != null) && c(a));
      },
      dispose() {
        ((o = !0), g.disconnect());
        for (let e of a.values()) e.disconnect();
        (a.clear(),
          r.clear(),
          i.clear(),
          _?.(),
          document.removeEventListener(jf, h),
          window.removeEventListener(`pageshow`, v),
          t.clear(),
          (n.length = 0),
          c());
      },
    }
  );
}
function Ff(e) {
  let t = Object.getOwnPropertyDescriptor(Element.prototype, `attachShadow`),
    n = Element.prototype.attachShadow;
  if (t?.configurable !== !0 || typeof n != `function`) return null;
  let r = !0;
  function i(t) {
    let i = Reflect.apply(n, this, [t]);
    return (r && i.mode === `open` && this.dispatchEvent(new Event(e, { bubbles: !0, composed: !0 })), i);
  }
  return Reflect.defineProperty(Element.prototype, "attachShadow", { ...t, value: i })
    ? () => {
        ((r = !1),
          Reflect.getOwnPropertyDescriptor(Element.prototype, `attachShadow`)?.value === i &&
            Reflect.defineProperty(Element.prototype, "attachShadow", t));
      }
    : null;
}
var If = function (e, t, n) {
    let r = Promise.resolve();
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Lf = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.portal`),
      r = Symbol.for(`react.fragment`),
      i = Symbol.for(`react.strict_mode`),
      a = Symbol.for(`react.profiler`),
      o = Symbol.for(`react.consumer`),
      s = Symbol.for(`react.context`),
      c = Symbol.for(`react.forward_ref`),
      l = Symbol.for(`react.suspense`),
      u = Symbol.for(`react.memo`),
      d = Symbol.for(`react.lazy`),
      f = Symbol.for(`react.activity`),
      p = Symbol.iterator;
    function m(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (p && e[p]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var h = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      _ = {};
    function v(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h));
    }
    ((v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if (typeof e != `object` && typeof e != `function` && e != null)
          throw Error(
            `takes an object of state variables to update or a function which returns an object of state variables.`,
          );
        this.updater.enqueueSetState(this, e, t, `setState`);
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
      }));
    function y() {}
    y.prototype = v.prototype;
    function b(e, t, n) {
      ((this.props = e), (this.context = t), (this.refs = _), (this.updater = n || h));
    }
    var x = (b.prototype = new y());
    ((x.constructor = b), g(x, v.prototype), (x.isPureReactComponent = !0));
    var S = Array.isArray;
    function C() {}
    var w = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function ee(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function te(e, t) {
      return ee(e.type, t, e.props);
    }
    function E(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function D(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ne = /\/+/g;
    function re(e, t) {
      return typeof e == `object` && e && e.key != null ? D(`` + e.key) : t.toString(36);
    }
    function ie(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(C, C)
              : ((e.status = `pending`),
                e.then(
                  function (t) {
                    e.status === `pending` && ((e.status = `fulfilled`), (e.value = t));
                  },
                  function (t) {
                    e.status === `pending` && ((e.status = `rejected`), (e.reason = t));
                  },
                )),
            e.status)
          ) {
            case `fulfilled`:
              return e.value;
            case `rejected`:
              throw e.reason;
          }
      }
      throw e;
    }
    function O(e, r, i, a, o) {
      var s = typeof e;
      (s === `undefined` || s === `boolean`) && (e = null);
      var c = !1;
      if (e === null) c = !0;
      else
        switch (s) {
          case `bigint`:
          case `string`:
          case `number`:
            c = !0;
            break;
          case `object`:
            switch (e.$$typeof) {
              case t:
              case n:
                c = !0;
                break;
              case d:
                return ((c = e._init), O(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + re(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(ne, `$&/`) + `/`),
              O(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (E(o) &&
                (o = te(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key) ? `` : (`` + o.key).replace(ne, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e)) for (var u = 0; u < e.length; u++) ((a = e[u]), (s = l + re(a, u)), (c += O(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + re(a, u++)), (c += O(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return O(ie(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]` ? `object with keys {` + Object.keys(e).join(`, `) + `}` : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function k(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        O(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function A(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = t));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var ae =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      j = {
        map: k,
        forEach: function (e, t, n) {
          k(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            k(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            k(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!E(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = j),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (e.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (e.cacheSignal = function () {
        return null;
      }),
      (e.cloneElement = function (e, t, n) {
        if (e == null) throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !T.call(t, a) ||
              a === `key` ||
              a === `__self` ||
              a === `__source` ||
              (a === `ref` && t.ref === void 0) ||
              (r[a] = t[a]);
        var a = arguments.length - 2;
        if (a === 1) r.children = n;
        else if (1 < a) {
          for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
          r.children = o;
        }
        return ee(e.type, i, r);
      }),
      (e.createContext = function (e) {
        return (
          (e = {
            $$typeof: s,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (e.Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (e.createElement = function (e, t, n) {
        var r,
          i = {},
          a = null;
        if (t != null)
          for (r in (t.key !== void 0 && (a = `` + t.key), t))
            T.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps) for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return ee(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = E),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: A };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            i = w.S;
          (i !== null && i(n, r), typeof r == `object` && r && typeof r.then == `function` && r.then(C, ae));
        } catch (e) {
          ae(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (w.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return w.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return w.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (e.useState = function (e) {
        return w.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return w.H.useTransition();
      }),
      (e.version = `19.2.7`));
  }),
  Rf = s((e, t) => {
    t.exports = Lf();
  }),
  zf = s((e) => {
    var t = Rf();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r,
        },
        p: 0,
        findDOMNode: null,
      },
      a = Symbol.for(`react.portal`);
    function o(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    var s = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function c(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
      (e.createPortal = function (e, t) {
        var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(n(299));
        return o(e, t, null, r);
      }),
      (e.flushSync = function (e) {
        var t = s.T,
          n = i.p;
        try {
          if (((s.T = null), (i.p = 2), e)) return e();
        } finally {
          ((s.T = t), (i.p = n), i.d.f());
        }
      }),
      (e.preconnect = function (e, t) {
        typeof e == `string` &&
          (t
            ? ((t = t.crossOrigin), (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
            : (t = null),
          i.d.C(e, t));
      }),
      (e.prefetchDNS = function (e) {
        typeof e == `string` && i.d.D(e);
      }),
      (e.preinit = function (e, t) {
        if (typeof e == `string` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin),
            a = typeof t.integrity == `string` ? t.integrity : void 0,
            o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
          n === `style`
            ? i.d.S(e, typeof t.precedence == `string` ? t.precedence : void 0, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
              })
            : n === `script` &&
              i.d.X(e, {
                crossOrigin: r,
                integrity: a,
                fetchPriority: o,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
        }
      }),
      (e.preinitModule = function (e, t) {
        if (typeof e == `string`) {
          if (typeof t == `object` && t) {
            if (t.as == null || t.as === `script`) {
              var n = c(t.as, t.crossOrigin);
              i.d.M(e, {
                crossOrigin: n,
                integrity: typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              });
            }
          } else t ?? i.d.M(e);
        }
      }),
      (e.preload = function (e, t) {
        if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
          var n = t.as,
            r = c(n, t.crossOrigin);
          i.d.L(e, n, {
            crossOrigin: r,
            integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            nonce: typeof t.nonce == `string` ? t.nonce : void 0,
            type: typeof t.type == `string` ? t.type : void 0,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
            referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
            imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
            imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : void 0,
            media: typeof t.media == `string` ? t.media : void 0,
          });
        }
      }),
      (e.preloadModule = function (e, t) {
        if (typeof e == `string`) {
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
        }
      }),
      (e.requestFormReset = function (e) {
        i.d.r(e);
      }),
      (e.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (e.useFormState = function (e, t, n) {
        return s.H.useFormState(e, t, n);
      }),
      (e.useFormStatus = function () {
        return s.H.useHostTransitionStatus();
      }),
      (e.version = `19.2.7`));
  }),
  Bf = s((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = zf()));
  }),
  Vf = s((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c) ? ((e[r] = u), (e[l] = n), (r = l)) : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (((e.unstable_now = void 0), typeof performance == `object` && typeof performance.now == `function`)) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = !1,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e) (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function x(e) {
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), E()));
        else {
          var t = n(l);
          t !== null && re(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function ee() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function te() {
      if (((g = !1), S)) {
        var t = e.unstable_now();
        T = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ee());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var s = o(d.expirationTime <= t);
                    if (((t = e.unstable_now()), typeof s == `function`)) {
                      ((d.callback = s), b(t), (i = !0));
                      break b;
                    }
                    (d === n(c) && r(c), b(t));
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = !0;
                else {
                  var u = n(l);
                  (u !== null && re(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? E() : (S = !1);
        }
      }
    }
    var E;
    if (typeof y == `function`)
      E = function () {
        y(te);
      };
    else if (typeof MessageChannel < `u`) {
      var D = new MessageChannel(),
        ne = D.port2;
      ((D.port1.onmessage = te),
        (E = function () {
          ne.postMessage(null);
        }));
    } else
      E = function () {
        _(te, 0);
      };
    function re(t, n) {
      C = _(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (w = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_requestPaint = function () {
        g = !0;
      }),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = { id: u++, callback: i, priorityLevel: r, startTime: a, expirationTime: s, sortIndex: -1 }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), re(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), E()))),
          r
        );
      }),
      (e.unstable_shouldYield = ee),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  Hf = s((e, t) => {
    t.exports = Vf();
  }),
  Uf = s((e) => {
    var t = Hf(),
      n = Rf(),
      r = Bf();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    function a(e) {
      return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
    }
    function o(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
          return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return (l(a), e);
            if (s === r) return (l(a), t);
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = s));
        else {
          for (var c = !1, u = a.child; u;) {
            if (u === n) {
              ((c = !0), (n = a), (r = s));
              break;
            }
            if (u === r) {
              ((c = !0), (r = a), (n = s));
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                ((c = !0), (n = s), (r = a));
                break;
              }
              if (u === r) {
                ((c = !0), (r = s), (n = a));
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (((t = d(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var f = Object.assign,
      p = Symbol.for(`react.element`),
      m = Symbol.for(`react.transitional.element`),
      h = Symbol.for(`react.portal`),
      g = Symbol.for(`react.fragment`),
      _ = Symbol.for(`react.strict_mode`),
      v = Symbol.for(`react.profiler`),
      y = Symbol.for(`react.consumer`),
      b = Symbol.for(`react.context`),
      x = Symbol.for(`react.forward_ref`),
      S = Symbol.for(`react.suspense`),
      C = Symbol.for(`react.suspense_list`),
      w = Symbol.for(`react.memo`),
      T = Symbol.for(`react.lazy`),
      ee = Symbol.for(`react.activity`),
      te = Symbol.for(`react.memo_cache_sentinel`),
      E = Symbol.iterator;
    function D(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (E && e[E]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var ne = Symbol.for(`react.client.reference`);
    function re(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case g:
          return `Fragment`;
        case v:
          return `Profiler`;
        case _:
          return `StrictMode`;
        case S:
          return `Suspense`;
        case C:
          return `SuspenseList`;
        case ee:
          return `Activity`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case h:
            return `Portal`;
          case b:
            return e.displayName || `Context`;
          case y:
            return (e._context.displayName || `Context`) + `.Consumer`;
          case x:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``), e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case w:
            return ((t = e.displayName || null), t === null ? re(e.type) || `Memo` : t);
          case T:
            ((t = e._payload), (e = e._init));
            try {
              return re(e(t));
            } catch {}
        }
      return null;
    }
    var ie = Array.isArray,
      O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = { pending: !1, data: null, method: null, action: null },
      ae = [],
      j = -1;
    function oe(e) {
      return { current: e };
    }
    function M(e) {
      0 > j || ((e.current = ae[j]), (ae[j] = null), j--);
    }
    function se(e, t) {
      (j++, (ae[j] = e.current), (e.current = t));
    }
    var ce = oe(null),
      le = oe(null),
      ue = oe(null),
      de = oe(null);
    function fe(e, t) {
      switch ((se(ue, t), se(le, e), se(ce, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Wd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Wd(t)), (e = Gd(t, e)));
          else
            switch (e) {
              case `svg`:
                e = 1;
                break;
              case `math`:
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      (M(ce), se(ce, e));
    }
    function pe() {
      (M(ce), M(le), M(ue));
    }
    function me(e) {
      e.memoizedState !== null && se(de, e);
      var t = ce.current,
        n = Gd(t, e.type);
      t !== n && (se(le, e), se(ce, n));
    }
    function he(e) {
      (le.current === e && (M(ce), M(le)), de.current === e && (M(de), (rp._currentValue = A)));
    }
    var ge, _e;
    function ve(e) {
      if (ge === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ge = (t && t[1]) || ``),
            (_e =
              -1 <
              e.stack.indexOf(`
    at`)
                ? ` (<anonymous>)`
                : -1 < e.stack.indexOf(`@`)
                  ? `@unknown:0:0`
                  : ``));
        }
      return (
        `
` +
        ge +
        e +
        _e
      );
    }
    var ye = !1;
    function be(e, t) {
      if (!e || ye) return ``;
      ye = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(n.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == `object` && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  e.call(n.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          },
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i &&
          i.configurable &&
          Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
            value: `DetermineComponentFrameRoot`,
          });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length)
            for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--)
            if (c[r] !== l[i]) {
              if (r !== 1 || i !== 1)
                do
                  if ((r--, i--, 0 > i || c[r] !== l[i])) {
                    var u =
                      `
` + c[r].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        u.includes(`<anonymous>`) &&
                        (u = u.replace(`<anonymous>`, e.displayName)),
                      u
                    );
                  }
                while (1 <= r && 0 <= i);
              break;
            }
        }
      } finally {
        ((ye = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? ve(n) : ``;
    }
    function xe(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ve(e.type);
        case 16:
          return ve(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? ve(`Suspense Fallback`) : ve(`Suspense`);
        case 19:
          return ve(`SuspenseList`);
        case 0:
        case 15:
          return be(e.type, !1);
        case 11:
          return be(e.type.render, !1);
        case 1:
          return be(e.type, !0);
        case 31:
          return ve(`Activity`);
        default:
          return ``;
      }
    }
    function Se(e) {
      try {
        var t = ``,
          n = null;
        do ((t += xe(e, n)), (n = e), (e = e.return));
        while (e);
        return t;
      } catch (e) {
        return (
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack
        );
      }
    }
    var Ce = Object.prototype.hasOwnProperty,
      we = t.unstable_scheduleCallback,
      Te = t.unstable_cancelCallback,
      Ee = t.unstable_shouldYield,
      De = t.unstable_requestPaint,
      N = t.unstable_now,
      Oe = t.unstable_getCurrentPriorityLevel,
      ke = t.unstable_ImmediatePriority,
      P = t.unstable_UserBlockingPriority,
      Ae = t.unstable_NormalPriority,
      F = t.unstable_LowPriority,
      je = t.unstable_IdlePriority,
      Me = t.log,
      Ne = t.unstable_setDisableYieldValue,
      Pe = null,
      Fe = null;
    function Ie(e) {
      if ((typeof Me == `function` && Ne(e), Fe && typeof Fe.setStrictMode == `function`))
        try {
          Fe.setStrictMode(Pe, e);
        } catch {}
    }
    var Le = Math.clz32 ? Math.clz32 : Be,
      Re = Math.log,
      ze = Math.LN2;
    function Be(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Re(e) / ze) | 0)) | 0);
    }
    var Ve = 256,
      He = 262144,
      Ue = 4194304;
    function We(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Ge(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return (
        s === 0
          ? ((s = r & ~a),
            s === 0 ? (o === 0 ? n || ((n = r & ~e), n !== 0 && (i = We(n))) : (i = We(o))) : (i = We(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = We(n))) : (i = We(o)))
              : (i = We(r))),
        i === 0
          ? 0
          : t !== 0 &&
              t !== i &&
              (t & a) === 0 &&
              ((a = i & -i), (n = t & -t), a >= n || (a === 32 && n & 4194048))
            ? t
            : i
      );
    }
    function Ke(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function qe(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Je() {
      var e = Ue;
      return ((Ue <<= 1), !(Ue & 62914560) && (Ue = 4194304), e);
    }
    function Ye(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Xe(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Ze(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      ((e.pendingLanes = n),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= n),
        (e.entangledLanes &= n),
        (e.errorRecoveryDisabledLanes &= n),
        (e.shellSuspendCounter = 0));
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - Le(n),
          d = 1 << u;
        ((s[u] = 0), (c[u] = -1));
        var f = l[u];
        if (f !== null)
          for (l[u] = null, u = 0; u < f.length; u++) {
            var p = f[u];
            p !== null && (p.lane &= -536870913);
          }
        n &= ~d;
      }
      (r !== 0 && Qe(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function Qe(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Le(t);
      ((e.entangledLanes |= t), (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function $e(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Le(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function et(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : tt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function tt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function nt(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function rt() {
      var e = k.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : vp(e.type)) : e;
    }
    function it(e, t) {
      var n = k.p;
      try {
        return ((k.p = e), t());
      } finally {
        k.p = n;
      }
    }
    var at = Math.random().toString(36).slice(2),
      ot = `__reactFiber$` + at,
      st = `__reactProps$` + at,
      ct = `__reactContainer$` + at,
      lt = `__reactEvents$` + at,
      ut = `__reactListeners$` + at,
      dt = `__reactHandles$` + at,
      ft = `__reactResources$` + at,
      pt = `__reactMarker$` + at;
    function mt(e) {
      (delete e[ot], delete e[st], delete e[lt], delete e[ut], delete e[dt]);
    }
    function ht(e) {
      var t = e[ot];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[ct] || n[ot])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = mf(e); e !== null;) {
              if ((n = e[ot])) return n;
              e = mf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function gt(e) {
      if ((e = e[ot] || e[ct])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function _t(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function vt(e) {
      var t = e[ft];
      return ((t ||= e[ft] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function yt(e) {
      e[pt] = !0;
    }
    var bt = new Set(),
      xt = {};
    function St(e, t) {
      (Ct(e, t), Ct(e + `Capture`, t));
    }
    function Ct(e, t) {
      for (xt[e] = t, e = 0; e < t.length; e++) bt.add(t[e]);
    }
    var wt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Tt = {},
      Et = {};
    function Dt(e) {
      return Ce.call(Et, e) ? !0 : Ce.call(Tt, e) ? !1 : wt.test(e) ? (Et[e] = !0) : ((Tt[e] = !0), !1);
    }
    function I(e, t, n) {
      if (Dt(t)) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, `` + n);
        }
      }
    }
    function Ot(e, t, n) {
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, `` + n);
      }
    }
    function kt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, `` + r);
      }
    }
    function L(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function At(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function jt(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == `function` && typeof r.set == `function`) {
        var i = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((n = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (e) {
              n = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Mt(e) {
      if (!e._valueTracker) {
        var t = At(e) ? `checked` : `value`;
        e._valueTracker = jt(e, t, `` + e[t]);
      }
    }
    function Nt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = At(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Pt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ft = /[\n"\\]/g;
    function It(e) {
      return e.replace(Ft, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Lt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + L(t))
            : e.value !== `` + L(t) && (e.value = `` + L(t)),
        t == null ? (n == null ? r != null && e.removeAttribute(`value`) : zt(e, o, L(n))) : zt(e, o, L(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + L(s))
          : e.removeAttribute(`name`));
    }
    function Rt(e, t, n, r, i, a, o, s) {
      if (
        (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Mt(e);
          return;
        }
        ((n = n == null ? `` : `` + L(n)),
          (t = t == null ? n : `` + L(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
        Mt(e));
    }
    function zt(e, t, n) {
      (t === `number` && Pt(e.ownerDocument) === e) || e.defaultValue === `` + n || (e.defaultValue = `` + n);
    }
    function Bt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + L(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Vt(e, t, n) {
      if (t != null && ((t = `` + L(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + L(n);
    }
    function Ht(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (ie(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = L(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Mt(e));
    }
    function Ut(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Wt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Gt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Wt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Kt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? (e.cssFloat = ``) : (e[r] = ``));
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Gt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Gt(e, o, t[o]);
    }
    function qt(e) {
      if (e.indexOf(`-`) === -1) return !1;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Jt = new Map([
        [`acceptCharset`, `accept-charset`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
        [`crossOrigin`, `crossorigin`],
        [`accentHeight`, `accent-height`],
        [`alignmentBaseline`, `alignment-baseline`],
        [`arabicForm`, `arabic-form`],
        [`baselineShift`, `baseline-shift`],
        [`capHeight`, `cap-height`],
        [`clipPath`, `clip-path`],
        [`clipRule`, `clip-rule`],
        [`colorInterpolation`, `color-interpolation`],
        [`colorInterpolationFilters`, `color-interpolation-filters`],
        [`colorProfile`, `color-profile`],
        [`colorRendering`, `color-rendering`],
        [`dominantBaseline`, `dominant-baseline`],
        [`enableBackground`, `enable-background`],
        [`fillOpacity`, `fill-opacity`],
        [`fillRule`, `fill-rule`],
        [`floodColor`, `flood-color`],
        [`floodOpacity`, `flood-opacity`],
        [`fontFamily`, `font-family`],
        [`fontSize`, `font-size`],
        [`fontSizeAdjust`, `font-size-adjust`],
        [`fontStretch`, `font-stretch`],
        [`fontStyle`, `font-style`],
        [`fontVariant`, `font-variant`],
        [`fontWeight`, `font-weight`],
        [`glyphName`, `glyph-name`],
        [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
        [`glyphOrientationVertical`, `glyph-orientation-vertical`],
        [`horizAdvX`, `horiz-adv-x`],
        [`horizOriginX`, `horiz-origin-x`],
        [`imageRendering`, `image-rendering`],
        [`letterSpacing`, `letter-spacing`],
        [`lightingColor`, `lighting-color`],
        [`markerEnd`, `marker-end`],
        [`markerMid`, `marker-mid`],
        [`markerStart`, `marker-start`],
        [`overlinePosition`, `overline-position`],
        [`overlineThickness`, `overline-thickness`],
        [`paintOrder`, `paint-order`],
        [`panose-1`, `panose-1`],
        [`pointerEvents`, `pointer-events`],
        [`renderingIntent`, `rendering-intent`],
        [`shapeRendering`, `shape-rendering`],
        [`stopColor`, `stop-color`],
        [`stopOpacity`, `stop-opacity`],
        [`strikethroughPosition`, `strikethrough-position`],
        [`strikethroughThickness`, `strikethrough-thickness`],
        [`strokeDasharray`, `stroke-dasharray`],
        [`strokeDashoffset`, `stroke-dashoffset`],
        [`strokeLinecap`, `stroke-linecap`],
        [`strokeLinejoin`, `stroke-linejoin`],
        [`strokeMiterlimit`, `stroke-miterlimit`],
        [`strokeOpacity`, `stroke-opacity`],
        [`strokeWidth`, `stroke-width`],
        [`textAnchor`, `text-anchor`],
        [`textDecoration`, `text-decoration`],
        [`textRendering`, `text-rendering`],
        [`transformOrigin`, `transform-origin`],
        [`underlinePosition`, `underline-position`],
        [`underlineThickness`, `underline-thickness`],
        [`unicodeBidi`, `unicode-bidi`],
        [`unicodeRange`, `unicode-range`],
        [`unitsPerEm`, `units-per-em`],
        [`vAlphabetic`, `v-alphabetic`],
        [`vHanging`, `v-hanging`],
        [`vIdeographic`, `v-ideographic`],
        [`vMathematical`, `v-mathematical`],
        [`vectorEffect`, `vector-effect`],
        [`vertAdvY`, `vert-adv-y`],
        [`vertOriginX`, `vert-origin-x`],
        [`vertOriginY`, `vert-origin-y`],
        [`wordSpacing`, `word-spacing`],
        [`writingMode`, `writing-mode`],
        [`xmlnsXlink`, `xmlns:xlink`],
        [`xHeight`, `x-height`],
      ]),
      Yt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Xt(e) {
      return Yt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function Zt() {}
    var Qt = null;
    function $t(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var en = null,
      tn = null;
    function nn(e) {
      var t = gt(e);
      if (t && (e = t.stateNode)) {
        var n = e[st] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Lt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + It(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[st] || null;
                  if (!a) throw Error(i(90));
                  Lt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Nt(r));
            }
            break a;
          case `textarea`:
            Vt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Bt(e, !!n.multiple, t, !1));
        }
      }
    }
    var rn = !1;
    function an(e, t, n) {
      if (rn) return e(t, n);
      rn = !0;
      try {
        return e(t);
      } finally {
        if (
          ((rn = !1),
          (en !== null || tn !== null) && (Su(), en && ((t = en), (e = tn), (tn = en = null), nn(t), e)))
        )
          for (t = 0; t < e.length; t++) nn(e[t]);
      }
    }
    function R(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[st] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type), (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var on = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0),
      sn = !1;
    if (on)
      try {
        var cn = {};
        (Object.defineProperty(cn, "passive", {
          get: function () {
            sn = !0;
          },
        }),
          window.addEventListener(`test`, cn, cn),
          window.removeEventListener(`test`, cn, cn));
      } catch {
        sn = !1;
      }
    var ln = null,
      un = null,
      dn = null;
    function fn() {
      if (dn) return dn;
      var e,
        t = un,
        n = t.length,
        r,
        i = `value` in ln ? ln.value : ln.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (dn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function pn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function mn() {
      return !0;
    }
    function hn() {
      return !1;
    }
    function gn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented)
            ? mn
            : hn),
          (this.isPropagationStopped = hn),
          this
        );
      }
      return (
        f(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = mn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = mn));
          },
          persist: function () {},
          isPersistent: mn,
        }),
        t
      );
    }
    var _n = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      vn = gn(_n),
      yn = f({}, _n, { view: 0, detail: 0 }),
      bn = gn(yn),
      xn,
      Sn,
      Cn,
      wn = f({}, yn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Cn &&
                (Cn && e.type === `mousemove`
                  ? ((xn = e.screenX - Cn.screenX), (Sn = e.screenY - Cn.screenY))
                  : (Sn = xn = 0),
                (Cn = e)),
              xn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Sn;
        },
      }),
      Tn = gn(wn),
      En = gn(f({}, wn, { dataTransfer: 0 })),
      Dn = gn(f({}, yn, { relatedTarget: 0 })),
      On = gn(f({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      kn = gn(
        f({}, _n, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      An = gn(f({}, _n, { data: 0 })),
      jn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      Mn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      Nn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Pn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Nn[e]) ? !!t[e] : !1;
    }
    function Fn() {
      return Pn;
    }
    var In = gn(
        f({}, yn, {
          key: function (e) {
            if (e.key) {
              var t = jn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = pn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Mn[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Fn,
          charCode: function (e) {
            return e.type === `keypress` ? pn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress` ? pn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
        }),
      ),
      Ln = gn(
        f({}, wn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      Rn = gn(
        f({}, yn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Fn,
        }),
      ),
      zn = gn(f({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Bn = gn(
        f({}, wn, {
          deltaX: function (e) {
            return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      Vn = gn(f({}, _n, { newState: 0, oldState: 0 })),
      Hn = [9, 13, 27, 32],
      Un = on && `CompositionEvent` in window,
      Wn = null;
    on && `documentMode` in document && (Wn = document.documentMode);
    var Gn = on && `TextEvent` in window && !Wn,
      Kn = on && (!Un || (Wn && 8 < Wn && 11 >= Wn)),
      qn = ` `,
      Jn = !1;
    function Yn(e, t) {
      switch (e) {
        case `keyup`:
          return Hn.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function Xn(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var Zn = !1;
    function Qn(e, t) {
      switch (e) {
        case `compositionend`:
          return Xn(t);
        case `keypress`:
          return t.which === 32 ? ((Jn = !0), qn) : null;
        case `textInput`:
          return ((e = t.data), e === qn && Jn ? null : e);
        default:
          return null;
      }
    }
    function $n(e, t) {
      if (Zn)
        return e === `compositionend` || (!Un && Yn(e, t))
          ? ((e = fn()), (dn = un = ln = null), (Zn = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return Kn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var er = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function tr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!er[e.type] : t === `textarea`;
    }
    function nr(e, t, n, r) {
      (en ? (tn ? tn.push(r) : (tn = [r])) : (en = r),
        (t = kd(t, `onChange`)),
        0 < t.length && ((n = new vn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var rr = null,
      ir = null;
    function ar(e) {
      Sd(e, 0);
    }
    function or(e) {
      if (Nt(_t(e))) return e;
    }
    function sr(e, t) {
      if (e === `change`) return t;
    }
    var cr = !1;
    if (on) {
      var lr;
      if (on) {
        var ur = `oninput` in document;
        if (!ur) {
          var dr = document.createElement(`div`);
          (dr.setAttribute(`oninput`, `return;`), (ur = typeof dr.oninput == `function`));
        }
        lr = ur;
      } else lr = !1;
      cr = lr && (!document.documentMode || 9 < document.documentMode);
    }
    function fr() {
      rr && (rr.detachEvent(`onpropertychange`, pr), (ir = rr = null));
    }
    function pr(e) {
      if (e.propertyName === `value` && or(ir)) {
        var t = [];
        (nr(t, ir, e, $t(e)), an(ar, t));
      }
    }
    function mr(e, t, n) {
      e === `focusin`
        ? (fr(), (rr = t), (ir = n), rr.attachEvent(`onpropertychange`, pr))
        : e === `focusout` && fr();
    }
    function hr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return or(ir);
    }
    function gr(e, t) {
      if (e === `click`) return or(t);
    }
    function _r(e, t) {
      if (e === `input` || e === `change`) return or(t);
    }
    function vr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var yr = typeof Object.is == `function` ? Object.is : vr;
    function br(e, t) {
      if (yr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ce.call(t, i) || !yr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function xr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Sr(e, t) {
      var n = xr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = xr(n);
      }
    }
    function Cr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Cr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function wr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Pt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Pt(e.document);
      }
      return t;
    }
    function Tr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    var Er = on && `documentMode` in document && 11 >= document.documentMode,
      Dr = null,
      Or = null,
      kr = null,
      Ar = !1;
    function jr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ar ||
        Dr == null ||
        Dr !== Pt(r) ||
        ((r = Dr),
        `selectionStart` in r && Tr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (kr && br(kr, r)) ||
          ((kr = r),
          (r = kd(Or, `onSelect`)),
          0 < r.length &&
            ((t = new vn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Dr))));
    }
    function Mr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Nr = {
        animationend: Mr(`Animation`, `AnimationEnd`),
        animationiteration: Mr(`Animation`, `AnimationIteration`),
        animationstart: Mr(`Animation`, `AnimationStart`),
        transitionrun: Mr(`Transition`, `TransitionRun`),
        transitionstart: Mr(`Transition`, `TransitionStart`),
        transitioncancel: Mr(`Transition`, `TransitionCancel`),
        transitionend: Mr(`Transition`, `TransitionEnd`),
      },
      Pr = {},
      Fr = {};
    on &&
      ((Fr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Nr.animationend.animation,
        delete Nr.animationiteration.animation,
        delete Nr.animationstart.animation),
      `TransitionEvent` in window || delete Nr.transitionend.transition);
    function Ir(e) {
      if (Pr[e]) return Pr[e];
      if (!Nr[e]) return e;
      var t = Nr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Fr) return (Pr[e] = t[n]);
      return e;
    }
    var Lr = Ir(`animationend`),
      Rr = Ir(`animationiteration`),
      zr = Ir(`animationstart`),
      Br = Ir(`transitionrun`),
      Vr = Ir(`transitionstart`),
      Hr = Ir(`transitioncancel`),
      Ur = Ir(`transitionend`),
      Wr = new Map(),
      Gr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Gr.push(`scrollEnd`);
    function Kr(e, t) {
      (Wr.set(e, t), St(t, [e]));
    }
    var qr =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      Jr = [],
      Yr = 0,
      Xr = 0;
    function Zr() {
      for (var e = Yr, t = (Xr = Yr = 0); t < e;) {
        var n = Jr[t];
        Jr[t++] = null;
        var r = Jr[t];
        Jr[t++] = null;
        var i = Jr[t];
        Jr[t++] = null;
        var a = Jr[t];
        if (((Jr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && ti(n, i, a);
      }
    }
    function Qr(e, t, n, r) {
      ((Jr[Yr++] = e),
        (Jr[Yr++] = t),
        (Jr[Yr++] = n),
        (Jr[Yr++] = r),
        (Xr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function $r(e, t, n, r) {
      return (Qr(e, t, n, r), ni(e));
    }
    function ei(e, t) {
      return (Qr(e, null, null, t), ni(e));
    }
    function ti(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = !1, a = e.return; a !== null;)
        ((a.childLanes |= n),
          (r = a.alternate),
          r !== null && (r.childLanes |= n),
          a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
          (e = a),
          (a = a.return));
      return e.tag === 3
        ? ((a = e.stateNode),
          i &&
            t !== null &&
            ((i = 31 - Le(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ni(e) {
      if (50 < pu) throw ((pu = 0), (mu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var ri = {};
    function ii(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ai(e, t, n, r) {
      return new ii(e, t, n, r);
    }
    function oi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function si(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = ai(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 65011712),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        (n.refCleanup = e.refCleanup),
        n
      );
    }
    function ci(e, t) {
      e.flags &= 65011714;
      var n = e.alternate;
      return (
        n === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = n.childLanes),
            (e.lanes = n.lanes),
            (e.child = n.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = n.memoizedProps),
            (e.memoizedState = n.memoizedState),
            (e.updateQueue = n.updateQueue),
            (e.type = n.type),
            (t = n.dependencies),
            (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function li(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) oi(e) && (s = 1);
      else if (typeof e == `string`)
        s = J(e, n, ce.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ee:
            return ((e = ai(31, n, t, a)), (e.elementType = ee), (e.lanes = o), e);
          case g:
            return ui(n.children, a, o, t);
          case _:
            ((s = 8), (a |= 24));
            break;
          case v:
            return ((e = ai(12, n, t, a | 2)), (e.elementType = v), (e.lanes = o), e);
          case S:
            return ((e = ai(13, n, t, a)), (e.elementType = S), (e.lanes = o), e);
          case C:
            return ((e = ai(19, n, t, a)), (e.elementType = C), (e.lanes = o), e);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case b:
                  s = 10;
                  break a;
                case y:
                  s = 9;
                  break a;
                case x:
                  s = 11;
                  break a;
                case w:
                  s = 14;
                  break a;
                case T:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = ai(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function ui(e, t, n, r) {
      return ((e = ai(7, e, r, t)), (e.lanes = n), e);
    }
    function di(e, t, n) {
      return ((e = ai(6, e, null, t)), (e.lanes = n), e);
    }
    function fi(e) {
      var t = ai(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function pi(e, t, n) {
      return (
        (t = ai(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var mi = new WeakMap();
    function hi(e, t) {
      if (typeof e == `object` && e) {
        var n = mi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: Se(t) }), mi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: Se(t) };
    }
    var gi = [],
      _i = 0,
      vi = null,
      yi = 0,
      bi = [],
      xi = 0,
      Si = null,
      Ci = 1,
      wi = ``;
    function Ti(e, t) {
      ((gi[_i++] = yi), (gi[_i++] = vi), (vi = e), (yi = t));
    }
    function Ei(e, t, n) {
      ((bi[xi++] = Ci), (bi[xi++] = wi), (bi[xi++] = Si), (Si = e));
      var r = Ci;
      e = wi;
      var i = 32 - Le(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Le(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ci = (1 << (32 - Le(t) + i)) | (n << i) | r),
          (wi = a + e));
      } else ((Ci = (1 << a) | (n << i) | r), (wi = e));
    }
    function Di(e) {
      e.return !== null && (Ti(e, 1), Ei(e, 1, 0));
    }
    function Oi(e) {
      for (; e === vi;) ((vi = gi[--_i]), (gi[_i] = null), (yi = gi[--_i]), (gi[_i] = null));
      for (; e === Si;)
        ((Si = bi[--xi]),
          (bi[xi] = null),
          (wi = bi[--xi]),
          (bi[xi] = null),
          (Ci = bi[--xi]),
          (bi[xi] = null));
    }
    function ki(e, t) {
      ((bi[xi++] = Ci), (bi[xi++] = wi), (bi[xi++] = Si), (Ci = t.id), (wi = t.overflow), (Si = e));
    }
    var Ai = null,
      ji = null,
      z = !1,
      Mi = null,
      Ni = !1,
      Pi = Error(i(519));
    function Fi(e) {
      throw (
        Vi(
          hi(
            Error(
              i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``),
            ),
            e,
          ),
        ),
        Pi
      );
    }
    function Ii(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[ot] = e), (t[st] = r), n)) {
        case `dialog`:
          (K(`cancel`, t), K(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          K(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < bd.length; n++) K(bd[n], t);
          break;
        case `source`:
          K(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (K(`error`, t), K(`load`, t));
          break;
        case `details`:
          K(`toggle`, t);
          break;
        case `input`:
          (K(`invalid`, t), Rt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          K(`invalid`, t);
          break;
        case `textarea`:
          (K(`invalid`, t), Ht(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Fd(t.textContent, n)
          ? (r.popover != null && (K(`beforetoggle`, t), K(`toggle`, t)),
            r.onScroll != null && K(`scroll`, t),
            r.onScrollEnd != null && K(`scrollend`, t),
            r.onClick != null && (t.onclick = Zt),
            (t = !0))
          : (t = !1),
        t || Fi(e, !0));
    }
    function Li(e) {
      for (Ai = e.return; Ai;)
        switch (Ai.tag) {
          case 5:
          case 31:
          case 13:
            Ni = !1;
            return;
          case 27:
          case 3:
            Ni = !0;
            return;
          default:
            Ai = Ai.return;
        }
    }
    function Ri(e) {
      if (e !== Ai) return !1;
      if (!z) return (Li(e), (z = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Kd(e.type, e.memoizedProps))),
          (n = !n)),
        n && ji && Fi(e),
        Li(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        ji = pf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        ji = pf(e);
      } else
        t === 27
          ? ((t = ji), ef(e.type) ? ((e = ff), (ff = null), (ji = e)) : (ji = t))
          : (ji = Ai ? df(e.stateNode.nextSibling) : null);
      return !0;
    }
    function zi() {
      ((ji = Ai = null), (z = !1));
    }
    function Bi() {
      var e = Mi;
      return (e !== null && ($l === null ? ($l = e) : $l.push.apply($l, e), (Mi = null)), e);
    }
    function Vi(e) {
      Mi === null ? (Mi = [e]) : Mi.push(e);
    }
    var Hi = oe(null),
      Ui = null,
      Wi = null;
    function Gi(e, t, n) {
      (se(Hi, t._currentValue), (t._currentValue = n));
    }
    function Ki(e) {
      ((e._currentValue = Hi.current), M(Hi));
    }
    function qi(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Ji(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++)
              if (c.context === t[l]) {
                ((o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  qi(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n), (o = s.alternate), o !== null && (o.lanes |= n), qi(s, n, e), (s = null));
        } else s = a.child;
        if (s !== null) s.return = a;
        else
          for (s = a; s !== null;) {
            if (s === e) {
              s = null;
              break;
            }
            if (((a = s.sibling), a !== null)) {
              ((a.return = s.return), (s = a));
              break;
            }
            s = s.return;
          }
        a = s;
      }
    }
    function Yi(e, t, n, r) {
      e = null;
      for (var a = t, o = !1; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = !0;
          else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (((s = s.memoizedProps), s !== null)) {
            var c = a.type;
            yr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === de.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [rp]) : e.push(rp));
        }
        a = a.return;
      }
      (e !== null && Ji(t, e, n, r), (t.flags |= 262144));
    }
    function Xi(e) {
      for (e = e.firstContext; e !== null;) {
        if (!yr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Zi(e) {
      ((Ui = e), (Wi = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function Qi(e) {
      return ea(Ui, e);
    }
    function $i(e, t) {
      return (Ui === null && Zi(e), ea(e, t));
    }
    function ea(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Wi === null)) {
        if (e === null) throw Error(i(308));
        ((Wi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else Wi = Wi.next = t;
      return n;
    }
    var ta =
        typeof AbortController < `u`
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (t, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                ((t.aborted = !0),
                  e.forEach(function (e) {
                    return e();
                  }));
              };
            },
      na = t.unstable_scheduleCallback,
      ra = t.unstable_NormalPriority,
      ia = {
        $$typeof: b,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function aa() {
      return { controller: new ta(), data: new Map(), refCount: 0 };
    }
    function oa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          na(ra, function () {
            e.controller.abort();
          }));
    }
    var sa = null,
      ca = 0,
      la = 0,
      ua = null;
    function da(e, t) {
      if (sa === null) {
        var n = (sa = []);
        ((ca = 0),
          (la = md()),
          (ua = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ca++, t.then(fa, fa), t);
    }
    function fa() {
      if (--ca === 0 && sa !== null) {
        ua !== null && (ua.status = `fulfilled`);
        var e = sa;
        ((sa = null), (la = 0), (ua = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function pa(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          },
        };
      return (
        e.then(
          function () {
            ((r.status = `fulfilled`), (r.value = t));
            for (var e = 0; e < n.length; e++) (0, n[e])(t);
          },
          function (e) {
            for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
          },
        ),
        r
      );
    }
    var ma = O.S;
    O.S = function (e, t) {
      ((nu = N()),
        typeof t == `object` && t && typeof t.then == `function` && da(e, t),
        ma !== null && ma(e, t));
    };
    var ha = oe(null);
    function ga() {
      var e = ha.current;
      return e === null ? Bl.pooledCache : e;
    }
    function _a(e, t) {
      t === null ? se(ha, ha.current) : se(ha, t.pool);
    }
    function va() {
      var e = ga();
      return e === null ? null : { parent: ia._currentValue, pool: e };
    }
    var ya = Error(i(460)),
      ba = Error(i(474)),
      xa = Error(i(542)),
      Sa = { then: function () {} };
    function Ca(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function wa(e, t, n) {
      switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Zt, Zt), (t = n)), t.status)) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Oa(e), e);
        default:
          if (typeof t.status == `string`) t.then(Zt, Zt);
          else {
            if (((e = Bl), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
            ((e = t),
              (e.status = `pending`),
              e.then(
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `fulfilled`), (n.value = e));
                  }
                },
                function (e) {
                  if (t.status === `pending`) {
                    var n = t;
                    ((n.status = `rejected`), (n.reason = e));
                  }
                },
              ));
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw ((e = t.reason), Oa(e), e);
          }
          throw ((Ea = t), ya);
      }
    }
    function Ta(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Ea = e), ya) : e;
      }
    }
    var Ea = null;
    function Da() {
      if (Ea === null) throw Error(i(459));
      var e = Ea;
      return ((Ea = null), e);
    }
    function Oa(e) {
      if (e === ya || e === xa) throw Error(i(483));
    }
    var ka = null,
      Aa = 0;
    function ja(e) {
      var t = Aa;
      return ((Aa += 1), ka === null && (ka = []), wa(ka, e, t));
    }
    function Ma(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Na(e, t) {
      throw t.$$typeof === p
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
    }
    function Pa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;)
          (e.key === null ? t.set(e.index, e) : t.set(e.key, e), (e = e.sibling));
        return t;
      }
      function a(e, t) {
        return ((e = si(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 67108866), n)
                : ((r = r.index), r < n ? ((t.flags |= 67108866), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 67108866), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = di(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === g
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i || (typeof i == `object` && i && i.$$typeof === T && Ta(i) === t.type))
            ? ((t = a(t, n.props)), Ma(t, n), (t.return = e), t)
            : ((t = li(n.type, n.key, n.props, null, e.mode, r)), Ma(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = pi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = ui(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = di(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case m:
              return ((n = li(t.type, t.key, t.props, null, e.mode, n)), Ma(n, t), (n.return = e), n);
            case h:
              return ((t = pi(t, e.mode, n)), (t.return = e), t);
            case T:
              return ((t = Ta(t)), f(e, t, n));
          }
          if (ie(t) || D(t)) return ((t = ui(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, ja(t), n);
          if (t.$$typeof === b) return f(e, $i(e, t), n);
          Na(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case m:
              return n.key === i ? l(e, t, n, r) : null;
            case h:
              return n.key === i ? u(e, t, n, r) : null;
            case T:
              return ((n = Ta(n)), p(e, t, n, r));
          }
          if (ie(n) || D(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, ja(n), r);
          if (n.$$typeof === b) return p(e, t, $i(e, n), r);
          Na(e, n);
        }
        return null;
      }
      function _(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case m:
              return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i));
            case h:
              return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i));
            case T:
              return ((r = Ta(r)), _(e, t, n, r, i));
          }
          if (ie(r) || D(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return _(e, t, n, ja(r), i);
          if (r.$$typeof === b) return _(e, t, n, $i(t, r), i);
          Na(t, r);
        }
        return null;
      }
      function v(i, a, s, c) {
        for (var l = null, u = null, d = a, m = (a = 0), h = null; d !== null && m < s.length; m++) {
          d.index > m ? ((h = d), (d = null)) : (h = d.sibling);
          var g = p(i, d, s[m], c);
          if (g === null) {
            d === null && (d = h);
            break;
          }
          (e && d && g.alternate === null && t(i, d),
            (a = o(g, a, m)),
            u === null ? (l = g) : (u.sibling = g),
            (u = g),
            (d = h));
        }
        if (m === s.length) return (n(i, d), z && Ti(i, m), l);
        if (d === null) {
          for (; m < s.length; m++)
            ((d = f(i, s[m], c)),
              d !== null && ((a = o(d, a, m)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (z && Ti(i, m), l);
        }
        for (d = r(d); m < s.length; m++)
          ((h = _(d, i, m, s[m], c)),
            h !== null &&
              (e && h.alternate !== null && d.delete(h.key === null ? m : h.key),
              (a = o(h, a, m)),
              u === null ? (l = h) : (u.sibling = h),
              (u = h)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          z && Ti(i, m),
          l
        );
      }
      function y(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (
          var u = null, d = null, m = s, h = (s = 0), g = null, v = c.next();
          m !== null && !v.done;
          h++, v = c.next()
        ) {
          m.index > h ? ((g = m), (m = null)) : (g = m.sibling);
          var y = p(a, m, v.value, l);
          if (y === null) {
            m === null && (m = g);
            break;
          }
          (e && m && y.alternate === null && t(a, m),
            (s = o(y, s, h)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (m = g));
        }
        if (v.done) return (n(a, m), z && Ti(a, h), u);
        if (m === null) {
          for (; !v.done; h++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, h)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (z && Ti(a, h), u);
        }
        for (m = r(m); !v.done; h++, v = c.next())
          ((v = _(m, a, h, v.value, l)),
            v !== null &&
              (e && v.alternate !== null && m.delete(v.key === null ? h : v.key),
              (s = o(v, s, h)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            m.forEach(function (e) {
              return t(a, e);
            }),
          z && Ti(a, h),
          u
        );
      }
      function x(e, r, o, c) {
        if (
          (typeof o == `object` && o && o.type === g && o.key === null && (o = o.props.children),
          typeof o == `object` && o)
        ) {
          switch (o.$$typeof) {
            case m:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (((l = o.type), l === g)) {
                      if (r.tag === 7) {
                        (n(e, r.sibling), (c = a(r, o.props.children)), (c.return = e), (e = c));
                        break a;
                      }
                    } else if (
                      r.elementType === l ||
                      (typeof l == `object` && l && l.$$typeof === T && Ta(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), Ma(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === g
                  ? ((c = ui(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = li(o.type, o.key, o.props, null, e.mode, c)), Ma(c, o), (c.return = e), (e = c));
              }
              return s(e);
            case h:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((c = pi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case T:
              return ((o = Ta(o)), x(e, r, o, c));
          }
          if (ie(o)) return v(e, r, o, c);
          if (D(o)) {
            if (((l = D(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return x(e, r, ja(o), c);
          if (o.$$typeof === b) return x(e, r, $i(e, o), c);
          Na(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = di(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Aa = 0;
          var i = x(e, t, n, r);
          return ((ka = null), i);
        } catch (t) {
          if (t === ya || t === xa) throw t;
          var a = ai(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Fa = Pa(!0),
      Ia = Pa(!1),
      La = !1;
    function Ra(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function za(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          }));
    }
    function Ba(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Va(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), H & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ni(e)),
          ti(e, null, n),
          t
        );
      }
      return (Qr(e, r, t, n), ni(e));
    }
    function Ha(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), $e(e, n));
      }
    }
    function Ua(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t));
    }
    var Wa = !1;
    function Ga() {
      if (Wa) {
        var e = ua;
        if (e !== null) throw e;
      }
    }
    function Ka(e, t, n, r) {
      Wa = !1;
      var i = e.updateQueue;
      La = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o && (s === null ? (u.firstBaseUpdate = l) : (s.next = l), (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var p = s.lane & -536870913,
            m = p !== s.lane;
          if (m ? (W & p) === p : (r & p) === p) {
            (p !== 0 && p === la && (Wa = !0),
              u !== null &&
                (u = u.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
            a: {
              var h = e,
                g = s;
              p = t;
              var _ = n;
              switch (g.tag) {
                case 1:
                  if (((h = g.payload), typeof h == `function`)) {
                    d = h.call(_, d, p);
                    break a;
                  }
                  d = h;
                  break a;
                case 3:
                  h.flags = (h.flags & -65537) | 128;
                case 0:
                  if (((h = g.payload), (p = typeof h == `function` ? h.call(_, d, p) : h), p == null))
                    break a;
                  d = f({}, d, p);
                  break a;
                case 2:
                  La = !0;
              }
            }
            ((p = s.callback),
              p !== null &&
                ((e.flags |= 64),
                m && (e.flags |= 8192),
                (m = i.callbacks),
                m === null ? (i.callbacks = [p]) : m.push(p)));
          } else
            ((m = { lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
              u === null ? ((l = u = m), (c = d)) : (u = u.next = m),
              (o |= p));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((m = s), (s = m.next), (m.next = null), (i.lastBaseUpdate = m), (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (ql |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function qa(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ja(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) qa(n[e], t);
    }
    var Ya = oe(null),
      Xa = oe(0);
    function Za(e, t) {
      ((e = Gl), se(Xa, e), se(Ya, t), (Gl = e | t.baseLanes));
    }
    function Qa() {
      (se(Xa, Gl), se(Ya, Ya.current));
    }
    function $a() {
      ((Gl = Xa.current), M(Ya), M(Xa));
    }
    var eo = oe(null),
      to = null;
    function no(e) {
      var t = e.alternate;
      (se(so, so.current & 1),
        se(eo, e),
        to === null && (t === null || Ya.current !== null || t.memoizedState !== null) && (to = e));
    }
    function ro(e) {
      (se(so, so.current), se(eo, e), to === null && (to = e));
    }
    function io(e) {
      e.tag === 22 ? (se(so, so.current), se(eo, e), to === null && (to = e)) : ao(e);
    }
    function ao() {
      (se(so, so.current), se(eo, eo.current));
    }
    function oo(e) {
      (M(eo), to === e && (to = null), M(so));
    }
    var so = oe(0);
    function co(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || cf(n) || lf(n))) return t;
        } else if (
          t.tag === 19 &&
          (t.memoizedProps.revealOrder === `forwards` ||
            t.memoizedProps.revealOrder === `backwards` ||
            t.memoizedProps.revealOrder === `unstable_legacy-backwards` ||
            t.memoizedProps.revealOrder === `together`)
        ) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var lo = 0,
      B = null,
      uo = null,
      fo = null,
      po = !1,
      mo = !1,
      ho = !1,
      go = 0,
      _o = 0,
      vo = null,
      yo = 0;
    function bo() {
      throw Error(i(321));
    }
    function xo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!yr(e[n], t[n])) return !1;
      return !0;
    }
    function So(e, t, n, r, i, a) {
      return (
        (lo = a),
        (B = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (O.H = e === null || e.memoizedState === null ? zs : Bs),
        (ho = !1),
        (a = n(r, i)),
        (ho = !1),
        mo && (a = wo(t, n, r, i)),
        Co(e),
        a
      );
    }
    function Co(e) {
      O.H = Rs;
      var t = uo !== null && uo.next !== null;
      if (((lo = 0), (fo = uo = B = null), (po = !1), (_o = 0), (vo = null), t)) throw Error(i(300));
      e === null || nc || ((e = e.dependencies), e !== null && Xi(e) && (nc = !0));
    }
    function wo(e, t, n, r) {
      B = e;
      var a = 0;
      do {
        if ((mo && (vo = null), (_o = 0), (mo = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (fo = uo = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((O.H = Vs), (o = t(n, r)));
      } while (mo);
      return o;
    }
    function To() {
      var e = O.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Mo(t) : t),
        (e = e.useState()[0]),
        (uo === null ? null : uo.memoizedState) !== e && (B.flags |= 1024),
        t
      );
    }
    function Eo() {
      var e = go !== 0;
      return ((go = 0), e);
    }
    function Do(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Oo(e) {
      if (po) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        po = !1;
      }
      ((lo = 0), (fo = uo = B = null), (mo = !1), (_o = go = 0), (vo = null));
    }
    function ko() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (fo === null ? (B.memoizedState = fo = e) : (fo = fo.next = e), fo);
    }
    function Ao() {
      if (uo === null) {
        var e = B.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = uo.next;
      var t = fo === null ? B.memoizedState : fo.next;
      if (t !== null) ((fo = t), (uo = e));
      else {
        if (e === null) throw B.alternate === null ? Error(i(467)) : Error(i(310));
        ((uo = e),
          (e = {
            memoizedState: uo.memoizedState,
            baseState: uo.baseState,
            baseQueue: uo.baseQueue,
            queue: uo.queue,
            next: null,
          }),
          fo === null ? (B.memoizedState = fo = e) : (fo = fo.next = e));
      }
      return fo;
    }
    function jo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Mo(e) {
      var t = _o;
      return (
        (_o += 1),
        vo === null && (vo = []),
        (e = wa(vo, e, t)),
        (t = B),
        (fo === null ? t.memoizedState : fo.next) === null &&
          ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? zs : Bs)),
        e
      );
    }
    function No(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Mo(e);
        if (e.$$typeof === b) return Qi(e);
      }
      throw Error(i(438, String(e)));
    }
    function Po(e) {
      var t = null,
        n = B.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = B.alternate;
        r !== null &&
          ((r = r.updateQueue),
          r !== null &&
            ((r = r.memoCache),
            r != null &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              })));
      }
      if (
        ((t ??= { data: [], index: 0 }),
        n === null && ((n = jo()), (B.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = te;
      return (t.index++, n);
    }
    function Fo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Io(e) {
      return Lo(Ao(), uo, e);
    }
    function Lo(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((t.baseQueue = a = o), (r.pending = null));
      }
      if (((o = e.baseState), a === null)) e.memoizedState = o;
      else {
        t = a.next;
        var c = (s = null),
          l = null,
          u = t,
          d = !1;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (lo & f) === f : (W & f) === f) {
            var p = u.revertLane;
            if (p === 0)
              (l !== null &&
                (l = l.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                f === la && (d = !0));
            else if ((lo & p) === p) {
              ((u = u.next), p === la && (d = !0));
              continue;
            } else
              ((f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                (B.lanes |= p),
                (ql |= p));
            ((f = u.action), ho && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
          } else
            ((p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
              (B.lanes |= f),
              (ql |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !yr(o, e.memoizedState) && ((nc = !0), d && ((n = ua), n !== null)))
        )
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Ro(e) {
      var t = Ao(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (yr(o, t.memoizedState) || (nc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function zo(e, t, n) {
      var r = B,
        a = Ao(),
        o = z;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !yr((uo || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (nc = !0)),
        (a = a.queue),
        us(Ho.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (fo !== null && fo.memoizedState.tag & 1))
      ) {
        if (((r.flags |= 2048), as(9, { destroy: void 0 }, Vo.bind(null, r, a, n, t), null), Bl === null))
          throw Error(i(349));
        o || lo & 127 || Bo(r, t, n);
      }
      return n;
    }
    function Bo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = B.updateQueue),
        t === null
          ? ((t = jo()), (B.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Vo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Uo(t) && Wo(e));
    }
    function Ho(e, t, n) {
      return n(function () {
        Uo(t) && Wo(e);
      });
    }
    function Uo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !yr(e, n);
      } catch {
        return !0;
      }
    }
    function Wo(e) {
      var t = ei(e, 2);
      t !== null && _u(t, e, 2);
    }
    function Go(e) {
      var t = ko();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), ho)) {
          Ie(!0);
          try {
            n();
          } finally {
            Ie(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Fo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Ko(e, t, n, r) {
      return ((e.baseState = n), Lo(e, uo, typeof r == `function` ? r : Fo));
    }
    function qo(e, t, n, r, a) {
      if (Fs(e)) throw Error(i(485));
      if (((e = t.action), e !== null)) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: !0,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          },
        };
        (O.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null ? ((o.next = t.pending = o), Jo(t, o)) : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Jo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = O.T,
          o = {};
        O.T = o;
        try {
          var s = n(i, r),
            c = O.S;
          (c !== null && c(o, s), Yo(e, t, s));
        } catch (n) {
          Zo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (O.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Yo(e, t, a));
        } catch (n) {
          Zo(e, t, n);
        }
    }
    function Yo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Xo(e, t, n);
            },
            function (n) {
              return Zo(e, t, n);
            },
          )
        : Xo(e, t, n);
    }
    function Xo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        Qo(t),
        (e.state = n),
        (t = e.pending),
        t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Jo(e, n))));
    }
    function Zo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), Qo(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function Qo(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function $o(e, t) {
      return t;
    }
    function es(e, t) {
      if (z) {
        var n = Bl.formState;
        if (n !== null) {
          a: {
            var r = B;
            if (z) {
              if (ji) {
                b: {
                  for (var i = ji, a = Ni; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = df(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((ji = df(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Fi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = ko()),
        (n.memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: $o, lastRenderedState: t }),
        (n.queue = r),
        (n = Ms.bind(null, B, r)),
        (r.dispatch = n),
        (r = Go(!1)),
        (a = Ps.bind(null, B, !1, r.queue)),
        (r = ko()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = qo.bind(null, B, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ts(e) {
      return ns(Ao(), uo, e);
    }
    function ns(e, t, n) {
      if (((t = Lo(e, t, $o)[0]), (e = Io(Fo)[0]), typeof t == `object` && t && typeof t.then == `function`))
        try {
          var r = Mo(t);
        } catch (e) {
          throw e === ya ? xa : e;
        }
      else r = t;
      t = Ao();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState && ((B.flags |= 2048), as(9, { destroy: void 0 }, rs.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function rs(e, t) {
      e.action = t;
    }
    function is(e) {
      var t = Ao(),
        n = uo;
      if (n !== null) return ns(t, n, e);
      (Ao(), (t = t.memoizedState), (n = Ao()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function as(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = B.updateQueue),
        t === null && ((t = jo()), (B.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function os() {
      return Ao().memoizedState;
    }
    function ss(e, t, n, r) {
      var i = ko();
      ((B.flags |= e), (i.memoizedState = as(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function cs(e, t, n, r) {
      var i = Ao();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      uo !== null && r !== null && xo(r, uo.memoizedState.deps)
        ? (i.memoizedState = as(t, a, n, r))
        : ((B.flags |= e), (i.memoizedState = as(1 | t, a, n, r)));
    }
    function ls(e, t) {
      ss(8390656, 8, e, t);
    }
    function us(e, t) {
      cs(2048, 8, e, t);
    }
    function ds(e) {
      B.flags |= 4;
      var t = B.updateQueue;
      if (t === null) ((t = jo()), (B.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function fs(e) {
      var t = Ao().memoizedState;
      return (
        ds({ ref: t, nextImpl: e }),
        function () {
          if (H & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ps(e, t) {
      return cs(4, 2, e, t);
    }
    function ms(e, t) {
      return cs(4, 4, e, t);
    }
    function hs(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          typeof n == `function` ? n() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function gs(e, t, n) {
      ((n = n == null ? null : n.concat([e])), cs(4, 4, hs.bind(null, t, e), n));
    }
    function _s() {}
    function vs(e, t) {
      var n = Ao();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && xo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function ys(e, t) {
      var n = Ao();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && xo(t, r[1])) return r[0];
      if (((r = e()), ho)) {
        Ie(!0);
        try {
          e();
        } finally {
          Ie(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function bs(e, t, n) {
      return n === void 0 || (lo & 1073741824 && !(W & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = gu()), (B.lanes |= e), (ql |= e), n);
    }
    function xs(e, t, n, r) {
      return yr(n, t)
        ? n
        : Ya.current === null
          ? !(lo & 42) || (lo & 1073741824 && !(W & 261930))
            ? ((nc = !0), (e.memoizedState = n))
            : ((e = gu()), (B.lanes |= e), (ql |= e), t)
          : ((e = bs(e, n, r)), yr(e, t) || (nc = !0), e);
    }
    function Ss(e, t, n, r, i) {
      var a = k.p;
      k.p = a !== 0 && 8 > a ? a : 8;
      var o = O.T,
        s = {};
      ((O.T = s), Ps(e, !1, t, n));
      try {
        var c = i(),
          l = O.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ns(e, t, pa(c, r), hu(e))
            : Ns(e, t, r, hu(e)));
      } catch (n) {
        Ns(e, t, { then: function () {}, status: `rejected`, reason: n }, hu());
      } finally {
        ((k.p = a), o !== null && s.types !== null && (o.types = s.types), (O.T = o));
      }
    }
    function Cs() {}
    function ws(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Ts(e).queue;
      Ss(
        e,
        a,
        t,
        A,
        n === null
          ? Cs
          : function () {
              return (Es(e), n(r));
            },
      );
    }
    function Ts(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: A,
        baseState: A,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: A },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Fo, lastRenderedState: n },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Es(e) {
      var t = Ts(e);
      (t.next === null && (t = e.alternate.memoizedState), Ns(e, t.next.queue, {}, hu()));
    }
    function Ds() {
      return Qi(rp);
    }
    function Os() {
      return Ao().memoizedState;
    }
    function ks() {
      return Ao().memoizedState;
    }
    function As(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = hu();
            e = Ba(n);
            var r = Va(t, e, n);
            (r !== null && (_u(r, t, n), Ha(r, t, n)), (t = { cache: aa() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function js(e, t, n) {
      var r = hu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Fs(e) ? Is(t, n) : ((n = $r(e, t, n, r)), n !== null && (_u(n, e, r), Ls(n, t, r))));
    }
    function Ms(e, t, n) {
      Ns(e, t, n, hu());
    }
    function Ns(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Fs(e)) Is(t, i);
      else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), yr(s, o)))
              return (Qr(e, t, i, 0), Bl === null && Zr(), !1);
          } catch {}
        if (((n = $r(e, t, i, r)), n !== null)) return (_u(n, e, r), Ls(n, t, r), !0);
      }
      return !1;
    }
    function Ps(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: md(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Fs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = $r(e, n, r, 2)), t !== null && _u(t, e, 2));
    }
    function Fs(e) {
      var t = e.alternate;
      return e === B || (t !== null && t === B);
    }
    function Is(e, t) {
      mo = po = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Ls(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), $e(e, n));
      }
    }
    var Rs = {
      readContext: Qi,
      use: No,
      useCallback: bo,
      useContext: bo,
      useEffect: bo,
      useImperativeHandle: bo,
      useLayoutEffect: bo,
      useInsertionEffect: bo,
      useMemo: bo,
      useReducer: bo,
      useRef: bo,
      useState: bo,
      useDebugValue: bo,
      useDeferredValue: bo,
      useTransition: bo,
      useSyncExternalStore: bo,
      useId: bo,
      useHostTransitionStatus: bo,
      useFormState: bo,
      useActionState: bo,
      useOptimistic: bo,
      useMemoCache: bo,
      useCacheRefresh: bo,
    };
    Rs.useEffectEvent = bo;
    var zs = {
        readContext: Qi,
        use: No,
        useCallback: function (e, t) {
          return ((ko().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: Qi,
        useEffect: ls,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), ss(4194308, 4, hs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return ss(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ss(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = ko();
          t = t === void 0 ? null : t;
          var r = e();
          if (ho) {
            Ie(!0);
            try {
              e();
            } finally {
              Ie(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = ko();
          if (n !== void 0) {
            var i = n(t);
            if (ho) {
              Ie(!0);
              try {
                n(t);
              } finally {
                Ie(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
            (r.queue = e),
            (e = e.dispatch = js.bind(null, B, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = ko();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Go(e);
          var t = e.queue,
            n = Ms.bind(null, B, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: _s,
        useDeferredValue: function (e, t) {
          return bs(ko(), e, t);
        },
        useTransition: function () {
          var e = Go(!1);
          return ((e = Ss.bind(null, B, e.queue, !0, !1)), (ko().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = B,
            a = ko();
          if (z) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), Bl === null)) throw Error(i(349));
            W & 127 || Bo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            ls(Ho.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            as(9, { destroy: void 0 }, Vo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = ko(),
            t = Bl.identifierPrefix;
          if (z) {
            var n = wi,
              r = Ci;
            ((n = (r & ~(1 << (32 - Le(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = go++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = yo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ds,
        useFormState: es,
        useActionState: es,
        useOptimistic: function (e) {
          var t = ko();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Ps.bind(null, B, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Po,
        useCacheRefresh: function () {
          return (ko().memoizedState = As.bind(null, B));
        },
        useEffectEvent: function (e) {
          var t = ko(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (H & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Bs = {
        readContext: Qi,
        use: No,
        useCallback: vs,
        useContext: Qi,
        useEffect: us,
        useImperativeHandle: gs,
        useInsertionEffect: ps,
        useLayoutEffect: ms,
        useMemo: ys,
        useReducer: Io,
        useRef: os,
        useState: function () {
          return Io(Fo);
        },
        useDebugValue: _s,
        useDeferredValue: function (e, t) {
          return xs(Ao(), uo.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Io(Fo)[0],
            t = Ao().memoizedState;
          return [typeof e == `boolean` ? e : Mo(e), t];
        },
        useSyncExternalStore: zo,
        useId: Os,
        useHostTransitionStatus: Ds,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: function (e, t) {
          return Ko(Ao(), uo, e, t);
        },
        useMemoCache: Po,
        useCacheRefresh: ks,
      };
    Bs.useEffectEvent = fs;
    var Vs = {
      readContext: Qi,
      use: No,
      useCallback: vs,
      useContext: Qi,
      useEffect: us,
      useImperativeHandle: gs,
      useInsertionEffect: ps,
      useLayoutEffect: ms,
      useMemo: ys,
      useReducer: Ro,
      useRef: os,
      useState: function () {
        return Ro(Fo);
      },
      useDebugValue: _s,
      useDeferredValue: function (e, t) {
        var n = Ao();
        return uo === null ? bs(n, e, t) : xs(n, uo.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Ro(Fo)[0],
          t = Ao().memoizedState;
        return [typeof e == `boolean` ? e : Mo(e), t];
      },
      useSyncExternalStore: zo,
      useId: Os,
      useHostTransitionStatus: Ds,
      useFormState: is,
      useActionState: is,
      useOptimistic: function (e, t) {
        var n = Ao();
        return uo === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Ko(n, uo, e, t);
      },
      useMemoCache: Po,
      useCacheRefresh: ks,
    };
    Vs.useEffectEvent = fs;
    function Hs(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Us = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = hu(),
          i = Ba(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Va(e, i, r)),
          t !== null && (_u(t, e, r), Ha(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = hu(),
          i = Ba(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Va(e, i, r)),
          t !== null && (_u(t, e, r), Ha(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = hu(),
          r = Ba(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Va(e, r, n)),
          t !== null && (_u(t, e, n), Ha(t, e, n)));
      },
    };
    function Ws(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !br(n, r) || !br(i, a)
            : !0
      );
    }
    function Gs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Us.enqueueReplaceState(t, t.state, null));
    }
    function Ks(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function qs(e) {
      qr(e);
    }
    function Js(e) {
      console.error(e);
    }
    function Ys(e) {
      qr(e);
    }
    function Xs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Zs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function V(e, t, n) {
      return (
        (n = Ba(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Xs(e, t);
        }),
        n
      );
    }
    function Qs(e) {
      return ((e = Ba(e)), (e.tag = 3), e);
    }
    function $s(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Zs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Zs(t, n, r), typeof i != `function` && (au === null ? (au = new Set([this])) : au.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function ec(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && Yi(t, n, a, !0), (n = eo.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                to === null ? ku() : n.alternate === null && Kl === 0 && (Kl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Sa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Ju(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Sa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    Ju(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (Ju(e, r, a), ku(), !1);
      }
      if (z)
        return (
          (t = eo.current),
          t === null
            ? (r !== Pi && ((t = Error(i(423), { cause: r })), Vi(hi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = hi(r, n)),
              (a = V(e.stateNode, r, a)),
              Ua(e, a),
              Kl !== 4 && (Kl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Pi && ((e = Error(i(422), { cause: r })), Vi(hi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = hi(o, n)), Ql === null ? (Ql = [o]) : Ql.push(o), Kl !== 4 && (Kl = 2), t === null))
        return !0;
      ((r = hi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = V(n.stateNode, r, e)),
              Ua(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null && typeof o.componentDidCatch == `function` && (au === null || !au.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = Qs(a)),
                $s(a, e, n, r),
                Ua(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var tc = Error(i(461)),
      nc = !1;
    function rc(e, t, n, r) {
      t.child = e === null ? Ia(t, null, n, r) : Fa(t, e.child, n, r);
    }
    function ic(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Zi(t),
        (r = So(e, t, n, o, a, i)),
        (s = Eo()),
        e !== null && !nc
          ? (Do(e, t, i), Oc(e, t, i))
          : (z && s && Di(t), (t.flags |= 1), rc(e, t, r, i), t.child)
      );
    }
    function ac(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !oi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), oc(e, t, a, r, i))
          : ((e = li(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
      }
      if (((a = e.child), !kc(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? br : n), n(o, r) && e.ref === t.ref)) return Oc(e, t, i);
      }
      return ((t.flags |= 1), (e = si(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function oc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (br(a, r) && e.ref === t.ref) {
          if (((nc = !1), (t.pendingProps = r = a), kc(e, i))) e.flags & 131072 && (nc = !0);
          else return ((t.lanes = e.lanes), Oc(e, t, i));
        }
      }
      return mc(e, t, n, r, i);
    }
    function sc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return lc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && _a(t, a === null ? null : a.cachePool),
            a === null ? Qa() : Za(t, a),
            io(t));
        else return ((r = t.lanes = 536870912), lc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && _a(t, null), Qa(), ao(t))
          : (_a(t, a.cachePool), Za(t, a), ao(t), (t.memoizedState = null));
      return (rc(e, t, i, n), t.child);
    }
    function cc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        t.sibling
      );
    }
    function lc(e, t, n, r, i) {
      var a = ga();
      return (
        (a = a === null ? null : { parent: ia._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && _a(t, null),
        Qa(),
        io(t),
        e !== null && Yi(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function uc(e, t) {
      return (
        (t = Cc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function dc(e, t, n) {
      return (
        Fa(t, e.child, null, n),
        (e = uc(t, t.pendingProps)),
        (e.flags |= 2),
        oo(t),
        (t.memoizedState = null),
        e
      );
    }
    function fc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (z) {
          if (r.mode === `hidden`) return ((e = uc(t, r)), (t.lanes = 536870912), cc(null, e));
          if (
            (ro(t),
            (e = ji)
              ? ((e = sf(e, Ni)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Si === null ? null : { id: Ci, overflow: wi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = fi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ai = t),
                  (ji = null)))
              : (e = null),
            e === null)
          )
            throw Fi(t);
          return ((t.lanes = 536870912), null);
        }
        return uc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((ro(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = dc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if ((nc || Yi(e, t, n, !1), (a = (n & e.childLanes) !== 0), nc || a)) {
          if (((r = Bl), r !== null && ((s = et(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), ei(e, s), _u(r, e, s), tc);
          (ku(), (t = dc(e, t, n)));
        } else
          ((e = o.treeContext),
            (ji = df(s.nextSibling)),
            (Ai = t),
            (z = !0),
            (Mi = null),
            (Ni = !1),
            e !== null && ki(t, e),
            (t = uc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = si(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function pc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function mc(e, t, n, r, i) {
      return (
        Zi(t),
        (n = So(e, t, n, r, void 0, i)),
        (r = Eo()),
        e !== null && !nc
          ? (Do(e, t, i), Oc(e, t, i))
          : (z && r && Di(t), (t.flags |= 1), rc(e, t, n, i), t.child)
      );
    }
    function hc(e, t, n, r, i, a) {
      return (
        Zi(t),
        (t.updateQueue = null),
        (n = wo(t, r, n, i)),
        Co(e),
        (r = Eo()),
        e !== null && !nc
          ? (Do(e, t, a), Oc(e, t, a))
          : (z && r && Di(t), (t.flags |= 1), rc(e, t, n, a), t.child)
      );
    }
    function gc(e, t, n, r, i) {
      if ((Zi(t), t.stateNode === null)) {
        var a = ri,
          o = n.contextType;
        (typeof o == `object` && o && (a = Qi(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Us),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ra(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? Qi(o) : ri),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Hs(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Us.enqueueReplaceState(a, a.state, null),
            Ka(t, r, a, i),
            Ga(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Ks(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = ri), typeof u == `object` && u && (o = Qi(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Gs(t, a, r, o)),
          (La = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Ka(t, r, a, i),
          Ga(),
          (l = t.memoizedState),
          s || f !== l || La
            ? (typeof d == `function` && (Hs(t, n, d, r), (l = t.memoizedState)),
              (c = La || Ws(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount()),
                  typeof a.componentDidMount == `function` && (t.flags |= 4194308))
                : (typeof a.componentDidMount == `function` && (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (a.props = r),
              (a.state = l),
              (a.context = o),
              (r = c))
            : (typeof a.componentDidMount == `function` && (t.flags |= 4194308), (r = !1)));
      } else {
        ((a = t.stateNode),
          za(e, t),
          (o = t.memoizedProps),
          (u = Ks(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ri),
          typeof l == `object` && l && (c = Qi(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Gs(t, a, r, c)),
          (La = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ka(t, r, a, i),
          Ga());
        var p = t.memoizedState;
        o !== d || f !== p || La || (e !== null && e.dependencies !== null && Xi(e.dependencies))
          ? (typeof s == `function` && (Hs(t, n, s, r), (p = t.memoizedState)),
            (u =
              La || Ws(t, n, u, r, f, p, c) || (e !== null && e.dependencies !== null && Xi(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c)),
                typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024))
              : (typeof a.componentDidUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof a.getSnapshotBeforeUpdate != `function` ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = p)),
            (a.props = r),
            (a.state = p),
            (a.context = c),
            (r = u))
          : (typeof a.componentDidUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != `function` ||
              (o === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return (
        (a = r),
        pc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Fa(t, e.child, null, i)), (t.child = Fa(t, null, n, i)))
              : rc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Oc(e, t, i)),
        e
      );
    }
    function _c(e, t, n, r) {
      return (zi(), (t.flags |= 256), rc(e, t, n, r), t.child);
    }
    var vc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function yc(e) {
      return { baseLanes: e, cachePool: va() };
    }
    function bc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Xl), e);
    }
    function xc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(so.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (z) {
          if (
            (a ? no(t) : ao(t),
            (e = ji)
              ? ((e = sf(e, Ni)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Si === null ? null : { id: Ci, overflow: wi },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = fi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ai = t),
                  (ji = null)))
              : (e = null),
            e === null)
          )
            throw Fi(t);
          return (lf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (ao(t),
              (a = t.mode),
              (c = Cc({ mode: `hidden`, children: c }, a)),
              (r = ui(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = yc(n)),
              (r.childLanes = bc(e, s, n)),
              (t.memoizedState = vc),
              cc(null, r))
            : (no(t), Sc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (no(t), (t.flags &= -257), (t = wc(e, t, n)))
            : t.memoizedState === null
              ? (ao(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Cc({ mode: `visible`, children: r.children }, a)),
                (c = ui(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Fa(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = yc(n)),
                (r.childLanes = bc(e, s, n)),
                (t.memoizedState = vc),
                (t = cc(null, r)))
              : (ao(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((no(t), lf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Vi({ value: r, source: null, stack: null }),
            (t = wc(e, t, n)));
        } else if ((nc || Yi(e, t, n, !1), (s = (n & e.childLanes) !== 0), nc || s)) {
          if (((s = Bl), s !== null && ((r = et(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ei(e, r), _u(s, e, r), tc);
          (cf(c) || ku(), (t = wc(e, t, n)));
        } else
          cf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (ji = df(c.nextSibling)),
              (Ai = t),
              (z = !0),
              (Mi = null),
              (Ni = !1),
              e !== null && ki(t, e),
              (t = Sc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (ao(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = si(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = ui(c, a, n, null)), (c.flags |= 2)) : (c = si(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          cc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = yc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = va())
                : ((l = ia._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = bc(e, s, n)),
          (t.memoizedState = vc),
          cc(e.child, r))
        : (no(t),
          (n = e.child),
          (e = n.sibling),
          (n = si(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null && ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Sc(e, t) {
      return ((t = Cc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Cc(e, t) {
      return ((e = ai(22, e, null, t)), (e.lanes = 0), e);
    }
    function wc(e, t, n) {
      return (
        Fa(t, e.child, null, n),
        (e = Sc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Tc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), qi(e.return, t, n));
    }
    function Ec(e, t, n, r, i, a) {
      var o = e.memoizedState;
      o === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
            treeForkCount: a,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = i),
          (o.treeForkCount = a));
    }
    function Dc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = so.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        se(so, o),
        rc(e, t, r, n),
        (r = z ? yi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
          else if (e.tag === 19) Tc(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break a;
          for (; e.sibling === null;) {
            if (e.return === null || e.return === t) break a;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      switch (i) {
        case `forwards`:
          for (n = t.child, i = null; n !== null;)
            ((e = n.alternate), e !== null && co(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Ec(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && co(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Ec(t, !0, n, null, a, r);
          break;
        case `together`:
          Ec(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Oc(e, t, n) {
      if ((e !== null && (t.dependencies = e.dependencies), (ql |= t.lanes), (n & t.childLanes) === 0)) {
        if (e !== null) {
          if ((Yi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = si(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = si(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function kc(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Xi(e)));
    }
    function Ac(e, t, n) {
      switch (t.tag) {
        case 3:
          (fe(t, t.stateNode.containerInfo), Gi(t, ia, e.memoizedState.cache), zi());
          break;
        case 27:
        case 5:
          me(t);
          break;
        case 4:
          fe(t, t.stateNode.containerInfo);
          break;
        case 10:
          Gi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), ro(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (no(t), (e = Oc(e, t, n)), e === null ? null : e.sibling)
                : xc(e, t, n)
              : (no(t), (t.flags |= 128), null);
          no(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (((r = (n & t.childLanes) !== 0), (r ||= (Yi(e, t, n, !1), (n & t.childLanes) !== 0)), i)) {
            if (r) return Dc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            se(so, so.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), sc(e, t, n, t.pendingProps));
        case 24:
          Gi(t, ia, e.memoizedState.cache);
      }
      return Oc(e, t, n);
    }
    function jc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) nc = !0;
        else {
          if (!kc(e, n) && !(t.flags & 128)) return ((nc = !1), Ac(e, t, n));
          nc = !!(e.flags & 131072);
        }
      } else ((nc = !1), z && t.flags & 1048576 && Ei(t, yi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ta(t.elementType)), (t.type = e), typeof e == `function`))
              oi(e)
                ? ((r = Ks(e, r)), (t.tag = 1), (t = gc(null, t, e, r, n)))
                : ((t.tag = 0), (t = mc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === x) {
                  ((t.tag = 11), (t = ic(null, t, e, r, n)));
                  break a;
                }
                if (a === w) {
                  ((t.tag = 14), (t = ac(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = re(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return mc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Ks(r, t.pendingProps)), gc(e, t, r, a, n));
        case 3:
          a: {
            if ((fe(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), za(e, t), Ka(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Gi(t, ia, r),
              r !== o.cache && Ji(t, [ia], n, !0),
              Ga(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = _c(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = hi(Error(i(424)), t)), Vi(a), (t = _c(e, t, r, n)));
                break a;
              }
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (
                ji = df(e.firstChild), Ai = t, z = !0, Mi = null, Ni = !0, n = Ia(t, null, r, n), t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((zi(), r === a)) {
                t = Oc(e, t, n);
                break a;
              }
              rc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            pc(e, t),
            e === null
              ? (n = Mf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : z ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Ud(ue.current).createElement(n)),
                  (r[ot] = t),
                  (r[st] = e),
                  Ld(r, n, e),
                  yt(r),
                  (t.stateNode = r))
              : (t.memoizedState = Mf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            me(t),
            e === null &&
              z &&
              ((r = t.stateNode = hf(t.type, t.pendingProps, ue.current)),
              (Ai = t),
              (Ni = !0),
              (a = ji),
              ef(t.type) ? ((ff = a), (ji = df(r.firstChild))) : (ji = a)),
            rc(e, t, t.pendingProps.children, n),
            pc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              z &&
              ((a = r = ji) &&
                ((r = af(r, t.type, t.pendingProps, Ni)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (Ai = t), (ji = df(r.firstChild)), (Ni = !1), (a = !0))),
              a || Fi(t)),
            me(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Kd(a, o) ? (r = null) : s !== null && Kd(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = So(e, t, To, null, null, n)), (rp._currentValue = a)),
            pc(e, t),
            rc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              z &&
              ((e = n = ji) &&
                ((n = of(n, t.pendingProps, Ni)),
                n === null ? (e = !1) : ((t.stateNode = n), (Ai = t), (ji = null), (e = !0))),
              e || Fi(t)),
            null
          );
        case 13:
          return xc(e, t, n);
        case 4:
          return (
            fe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Fa(t, null, r, n)) : rc(e, t, r, n),
            t.child
          );
        case 11:
          return ic(e, t, t.type, t.pendingProps, n);
        case 7:
          return (rc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (rc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), Gi(t, t.type, r.value), rc(e, t, r.children, n), t.child);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            Zi(t),
            (a = Qi(a)),
            (r = r(a)),
            (t.flags |= 1),
            rc(e, t, r, n),
            t.child
          );
        case 14:
          return ac(e, t, t.type, t.pendingProps, n);
        case 15:
          return oc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Dc(e, t, n);
        case 31:
          return fc(e, t, n);
        case 22:
          return sc(e, t, n, t.pendingProps);
        case 24:
          return (
            Zi(t),
            (r = Qi(ia)),
            e === null
              ? ((a = ga()),
                a === null &&
                  ((a = Bl),
                  (o = aa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ra(t),
                Gi(t, ia, a))
              : ((e.lanes & n) !== 0 && (za(e, t), Ka(t, null, null, n), Ga()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), Gi(t, ia, r), r !== a.cache && Ji(t, [ia], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    Gi(t, ia, r))),
            rc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Mc(e) {
      e.flags |= 4;
    }
    function Nc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Eu()) e.flags |= 8192;
          else throw ((Ea = Sa), ba);
        }
      } else e.flags &= -16777217;
    }
    function Pc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Yf(t))) {
        if (Eu()) e.flags |= 8192;
        else throw ((Ea = Sa), ba);
      }
    }
    function Fc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : Je()), (e.lanes |= t), (Zl |= t)));
    }
    function Ic(e, t) {
      if (!z)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;) (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;) (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Lc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 65011712),
            (r |= i.flags & 65011712),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function Rc(e, t, n) {
      var r = t.pendingProps;
      switch ((Oi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Lc(t), null);
        case 1:
          return (Lc(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ki(ia),
            pe(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ri(t)
                ? Mc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Bi())),
            Lc(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Mc(t), o === null ? (Lc(t), Nc(t, a, null, r, n)) : (Lc(t), Pc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Lc(t), (t.flags &= -16777217))
                  : (Mc(t), Lc(t), Pc(t, o))
                : ((e = e.memoizedProps), e !== r && Mc(t), Lc(t), Nc(t, a, e, r, n)),
            null
          );
        case 27:
          if ((he(t), (n = ue.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Lc(t), null);
            }
            ((e = ce.current), Ri(t) ? Ii(t, e) : ((e = hf(a, r, n)), (t.stateNode = e), Mc(t)));
          }
          return (Lc(t), null);
        case 5:
          if ((he(t), (a = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== r && Mc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Lc(t), null);
            }
            if (((o = ce.current), Ri(t))) Ii(t, o);
            else {
              var s = Ud(ue.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                      break;
                    case `script`:
                      ((o = s.createElement(`div`)),
                        (o.innerHTML = `<script><\/script>`),
                        (o = o.removeChild(o.firstChild)));
                      break;
                    case `select`:
                      ((o =
                        typeof r.is == `string`
                          ? s.createElement(`select`, { is: r.is })
                          : s.createElement(`select`)),
                        r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size));
                      break;
                    default:
                      o = typeof r.is == `string` ? s.createElement(a, { is: r.is }) : s.createElement(a);
                  }
              }
              ((o[ot] = t), (o[st] = r));
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  ((s.child.return = s), (s = s.child));
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                ((s.sibling.return = s.return), (s = s.sibling));
              }
              t.stateNode = o;
              a: switch ((Ld(o, a, r), a)) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = !0;
                  break a;
                default:
                  r = !1;
              }
              r && Mc(t);
            }
          }
          return (Lc(t), Nc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Mc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = ue.current), Ri(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Ai), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[ot] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Fd(e.nodeValue, n)
                )),
                e || Fi(t, !0));
            } else ((e = Ud(e).createTextNode(r)), (e[ot] = t), (t.stateNode = e));
          }
          return (Lc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Ri(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(557));
                e[ot] = t;
              } else (zi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Lc(t), (e = !1));
            } else
              ((n = Bi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (oo(t), t) : (oo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (Lc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Ri(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a)) throw Error(i(317));
                a[ot] = t;
              } else (zi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Lc(t), (a = !1));
            } else
              ((a = Bi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (oo(t), t) : (oo(t), null);
          }
          return (
            oo(t),
            t.flags & 128
              ? ((t.lanes = n), t)
              : ((n = r !== null),
                (e = e !== null && e.memoizedState !== null),
                n &&
                  ((r = t.child),
                  (a = null),
                  r.alternate !== null &&
                    r.alternate.memoizedState !== null &&
                    r.alternate.memoizedState.cachePool !== null &&
                    (a = r.alternate.memoizedState.cachePool.pool),
                  (o = null),
                  r.memoizedState !== null &&
                    r.memoizedState.cachePool !== null &&
                    (o = r.memoizedState.cachePool.pool),
                  o !== a && (r.flags |= 2048)),
                n !== e && n && (t.child.flags |= 8192),
                Fc(t, t.updateQueue),
                Lc(t),
                null)
          );
        case 4:
          return (pe(), e === null && Td(t.stateNode.containerInfo), Lc(t), null);
        case 10:
          return (Ki(t.type), Lc(t), null);
        case 19:
          if ((M(so), (r = t.memoizedState), r === null)) return (Lc(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) Ic(r, !1);
            else {
              if (Kl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = co(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Ic(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Fc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (ci(n, e), (n = n.sibling));
                    return (se(so, (so.current & 1) | 2), z && Ti(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null && N() > ru && ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = co(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Fc(t, e),
                  Ic(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !z)
                )
                  return (Lc(t), null);
              } else
                2 * N() - r.renderingStartTime > ru &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Ic(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (Lc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = N()),
              (e.sibling = null),
              (n = so.current),
              se(so, a ? (n & 1) | 2 : n & 1),
              z && Ti(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            oo(t),
            $a(),
            (r = t.memoizedState !== null),
            e === null ? r && (t.flags |= 8192) : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r ? n & 536870912 && !(t.flags & 128) && (Lc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lc(t),
            (n = t.updateQueue),
            n !== null && Fc(t, n.retryQueue),
            (n = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (n = e.memoizedState.cachePool.pool),
            (r = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (r = t.memoizedState.cachePool.pool),
            r !== n && (t.flags |= 2048),
            e !== null && M(ha),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ki(ia),
            Lc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function zc(e, t) {
      switch ((Oi(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            Ki(ia),
            pe(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (he(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((oo(t), t.alternate === null)) throw Error(i(340));
            zi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((oo(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            zi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (M(so), null);
        case 4:
          return (pe(), null);
        case 10:
          return (Ki(t.type), null);
        case 22:
        case 23:
          return (
            oo(t),
            $a(),
            e !== null && M(ha),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ki(ia), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Bc(e, t) {
      switch ((Oi(t), t.tag)) {
        case 3:
          (Ki(ia), pe());
          break;
        case 26:
        case 27:
        case 5:
          he(t);
          break;
        case 4:
          pe();
          break;
        case 31:
          t.memoizedState !== null && oo(t);
          break;
        case 13:
          oo(t);
          break;
        case 19:
          M(so);
          break;
        case 10:
          Ki(t.type);
          break;
        case 22:
        case 23:
          (oo(t), $a(), e !== null && M(ha));
          break;
        case 24:
          Ki(ia);
      }
    }
    function Vc(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = void 0;
              var a = n.create,
                o = n.inst;
              ((r = a()), (o.destroy = r));
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        qu(t, t.return, e);
      }
    }
    function Hc(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== void 0) {
                ((o.destroy = void 0), (i = t));
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  qu(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        qu(t, t.return, e);
      }
    }
    function Uc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ja(t, n);
        } catch (t) {
          qu(e, e.return, t);
        }
      }
    }
    function Wc(e, t, n) {
      ((n.props = Ks(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        qu(e, t, n);
      }
    }
    function Gc(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
        }
      } catch (n) {
        qu(e, t, n);
      }
    }
    function Kc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            qu(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            qu(e, t, n);
          }
        else n.current = null;
      }
    }
    function qc(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
        }
      } catch (t) {
        qu(e, e.return, t);
      }
    }
    function Jc(e, t, n) {
      try {
        var r = e.stateNode;
        (Rd(r, e.type, n, t), (r[st] = t));
      } catch (t) {
        qu(e, e.return, t);
      }
    }
    function Yc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ef(e.type)) || e.tag === 4;
    }
    function Xc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Yc(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if ((e.tag === 27 && ef(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Zc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(
                e,
                t,
              )
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Zt)));
      else if (
        r !== 4 &&
        (r === 27 && ef(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Zc(e, t, n), e = e.sibling; e !== null;) (Zc(e, t, n), (e = e.sibling));
    }
    function Qc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && ef(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for (Qc(e, t, n), e = e.sibling; e !== null;) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Ld(t, r, n), (t[ot] = e), (t[st] = n));
      } catch (t) {
        qu(e, e.return, t);
      }
    }
    var el = !1,
      tl = !1,
      nl = !1,
      rl = typeof WeakSet == `function` ? WeakSet : Set,
      il = null;
    function al(e, t) {
      if (((e = e.containerInfo), (Vd = dp), (e = wr(e)), Tr(e))) {
        if (`selectionStart` in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (Hd = { focusedElem: e, selectionRange: n }, dp = !1, il = t; il !== null;)
        if (((t = il), (e = t.child), t.subtreeFlags & 1028 && e !== null)) ((e.return = t), (il = e));
        else
          for (; il !== null;) {
            switch (((t = il), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0), (n = t), (a = o.memoizedProps), (o = o.memoizedState), (r = n.stateNode));
                  try {
                    var h = Ks(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)), (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    qu(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) rf(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        rf(e);
                        break;
                      default:
                        e.textContent = ``;
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if (e & 1024) throw Error(i(163));
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (il = e));
              break;
            }
            il = t.return;
          }
    }
    function ol(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (xl(e, n), r & 4 && Vc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                qu(n, n.return, e);
              }
            else {
              var i = Ks(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                qu(n, n.return, e);
              }
            }
          }
          (r & 64 && Uc(n), r & 512 && Gc(n, n.return));
          break;
        case 3:
          if ((xl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
            if (((t = null), n.child !== null))
              switch (n.child.tag) {
                case 27:
                case 5:
                  t = n.child.stateNode;
                  break;
                case 1:
                  t = n.child.stateNode;
              }
            try {
              Ja(e, t);
            } catch (e) {
              qu(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && $c(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && qc(n), r & 512 && Gc(n, n.return));
          break;
        case 12:
          xl(e, n);
          break;
        case 31:
          (xl(e, n), r & 4 && fl(e, n));
          break;
        case 13:
          (xl(e, n),
            r & 4 && pl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null && ((e = e.dehydrated), e !== null && ((n = Zu.bind(null, n)), uf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || el), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || tl), (i = el));
            var a = tl;
            ((el = r), (tl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n), (el = i), (tl = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function sl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), sl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && mt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var cl = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (Fe && typeof Fe.onCommitFiberUnmount == `function`)
        try {
          Fe.onCommitFiberUnmount(Pe, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (tl || Kc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          tl || Kc(n, t);
          var r = cl,
            i = ll;
          (ef(n.type) && ((cl = n.stateNode), (ll = !1)), ul(e, t, n), gf(n.stateNode), (cl = r), (ll = i));
          break;
        case 5:
          tl || Kc(n, t);
        case 6:
          if (((r = cl), (i = ll), (cl = null), ul(e, t, n), (cl = r), (ll = i), cl !== null)) {
            if (ll)
              try {
                (cl.nodeType === 9
                  ? cl.body
                  : cl.nodeName === `HTML`
                    ? cl.ownerDocument.body
                    : cl
                ).removeChild(n.stateNode);
              } catch (e) {
                qu(n, t, e);
              }
            else
              try {
                cl.removeChild(n.stateNode);
              } catch (e) {
                qu(n, t, e);
              }
          }
          break;
        case 18:
          cl !== null &&
            (ll
              ? ((e = cl),
                tf(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
                Ip(e))
              : tf(cl, n.stateNode));
          break;
        case 4:
          ((r = cl), (i = ll), (cl = n.stateNode.containerInfo), (ll = !0), ul(e, t, n), (cl = r), (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Hc(2, n, t), tl || Hc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (tl || (Kc(n, t), (r = n.stateNode), typeof r.componentWillUnmount == `function` && Wc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((tl = (r = tl) || n.memoizedState !== null), ul(e, t, n), (tl = r));
          break;
        default:
          ul(e, t, n);
      }
    }
    function fl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Ip(e);
        } catch (e) {
          qu(t, t.return, e);
        }
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Ip(e);
        } catch (e) {
          qu(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new rl()), t);
        case 22:
          return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new rl()), t);
        default:
          throw Error(i(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Qu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function gl(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            o = e,
            s = t,
            c = s;
          a: for (; c !== null;) {
            switch (c.tag) {
              case 27:
                if (ef(c.type)) {
                  ((cl = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((cl = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((cl = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (cl === null) throw Error(i(160));
          (dl(o, s, a),
            (cl = null),
            (ll = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (vl(t, e), (t = t.sibling));
    }
    var _l = null;
    function vl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (gl(t, e), yl(e), r & 4 && (Hc(3, e, e.return), Vc(3, e), Hc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            r & 64 &&
              el &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = _l;
          if ((gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null)) {
              if (r === null) {
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[pt] ||
                            o[ot] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Ld(o, r, n),
                          (o[ot] = e),
                          yt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = qf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Ld(o, r, n), a.head.appendChild(o));
                        break;
                      case `meta`:
                        if ((s = qf(`meta`, `content`, a).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) === (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) === (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Ld(o, r, n), a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[ot] = e), yt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Jf(a, e.type, e.stateNode);
              } else e.stateNode = Vf(a, r, e.memoizedProps);
            } else
              o === r
                ? r === null && e.stateNode !== null && Jc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Jf(a, e.type, e.stateNode) : Vf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (tl || n === null || Kc(n, n.return)),
            n !== null && r & 4 && Jc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((gl(t, e), yl(e), r & 512 && (tl || n === null || Kc(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              Ut(a, ``);
            } catch (t) {
              qu(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Jc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (nl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              qu(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Kf = null),
            (a = _l),
            (_l = yf(t.containerInfo)),
            gl(t, e),
            (_l = a),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Ip(t.containerInfo);
            } catch (t) {
              qu(e, e.return, t);
            }
          nl && ((nl = !1), bl(e));
          break;
        case 4:
          ((r = _l), (_l = yf(e.stateNode.containerInfo)), gl(t, e), yl(e), (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e), yl(e), r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (tu = N()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = el,
            d = tl;
          if (((el = u || a), (tl = d || l), gl(t, e), (tl = d), (el = u), yl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || el || tl || Sl(e)),
                n = null,
                t = e;
              ;
            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (n === null) {
                  l = n = t;
                  try {
                    if (((o = l.stateNode), a))
                      ((s = o.style),
                        typeof s.setProperty == `function`
                          ? s.setProperty(`display`, `none`, `important`)
                          : (s.display = `none`));
                    else {
                      c = l.stateNode;
                      var f = l.memoizedProps.style,
                        p = f != null && f.hasOwnProperty(`display`) ? f.display : null;
                      c.style.display = p == null || typeof p == `boolean` ? `` : (`` + p).trim();
                    }
                  } catch (e) {
                    qu(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    qu(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? nf(m, !0) : nf(l.stateNode, !1);
                  } catch (e) {
                    qu(l, l.return, e);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
                t.child !== null
              ) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
              if (t === e) break a;
              for (; t.sibling === null;) {
                if (t.return === null || t.return === e) break a;
                (n === t && (n = null), (t = t.return));
              }
              (n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling));
            }
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), hl(e, n))));
          break;
        case 19:
          (gl(t, e), yl(e), r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (gl(t, e), yl(e));
      }
    }
    function yl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Yc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              Qc(e, Xc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Ut(o, ``), (n.flags &= -33)), Qc(e, Xc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Zc(e, Xc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          qu(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function bl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (bl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function xl(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) (ol(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Hc(4, t, t.return), Sl(t));
            break;
          case 1:
            Kc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Wc(t, t.return, n), Sl(t));
            break;
          case 27:
            gf(t.stateNode);
          case 26:
          case 5:
            (Kc(t, t.return), Sl(t));
            break;
          case 22:
            t.memoizedState === null && Sl(t);
            break;
          case 30:
            Sl(t);
            break;
          default:
            Sl(t);
        }
        e = e.sibling;
      }
    }
    function Cl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Cl(i, a, n), Vc(4, a));
            break;
          case 1:
            if ((Cl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                qu(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) qa(c[i], s);
              } catch (e) {
                qu(r, r.return, e);
              }
            }
            (n && o & 64 && Uc(a), Gc(a, a.return));
            break;
          case 27:
            $c(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && qc(a), Gc(a, a.return));
            break;
          case 12:
            Cl(i, a, n);
            break;
          case 31:
            (Cl(i, a, n), n && o & 4 && fl(i, a));
            break;
          case 13:
            (Cl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Cl(i, a, n), Gc(a, a.return));
            break;
          case 30:
            break;
          default:
            Cl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function wl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && oa(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && oa(e)));
    }
    function El(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Dl(e, t, n, r), (t = t.sibling));
    }
    function Dl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (El(e, t, n, r), i & 2048 && Vc(9, t));
          break;
        case 1:
          El(e, t, n, r);
          break;
        case 3:
          (El(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && oa(e))));
          break;
        case 12:
          if (i & 2048) {
            (El(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              qu(t, t.return, e);
            }
          } else El(e, t, n, r);
          break;
        case 31:
          El(e, t, n, r);
          break;
        case 13:
          El(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? El(e, t, n, r)
                : ((a._visibility |= 2), Ol(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? El(e, t, n, r)
                : kl(e, t),
            i & 2048 && wl(o, t));
          break;
        case 24:
          (El(e, t, n, r), i & 2048 && Tl(t.alternate, t));
          break;
        default:
          El(e, t, n, r);
      }
    }
    function Ol(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Ol(a, o, s, c, i), Vc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Ol(a, o, s, c, i))
              : u._visibility & 2
                ? Ol(a, o, s, c, i)
                : kl(a, o),
              i && l & 2048 && wl(o.alternate, o));
            break;
          case 24:
            (Ol(a, o, s, c, i), i && l & 2048 && Tl(o.alternate, o));
            break;
          default:
            Ol(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function kl(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (kl(n, r), i & 2048 && wl(r.alternate, r));
              break;
            case 24:
              (kl(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            default:
              kl(n, r);
          }
          t = t.sibling;
        }
    }
    var Al = 8192;
    function jl(e, t, n) {
      if (e.subtreeFlags & Al) for (e = e.child; e !== null;) (Ml(e, t, n), (e = e.sibling));
    }
    function Ml(e, t, n) {
      switch (e.tag) {
        case 26:
          (jl(e, t, n),
            e.flags & Al && e.memoizedState !== null && Xf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = yf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Al), (Al = 16777216), jl(e, t, n), (Al = r))
              : jl(e, t, n));
          break;
        default:
          jl(e, t, n);
      }
    }
    function Nl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Pl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Ll(r, e));
          }
        Nl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Fl(e), (e = e.sibling));
    }
    function Fl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Pl(e), e.flags & 2048 && Hc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Il(e))
            : Pl(e);
          break;
        default:
          Pl(e);
      }
    }
    function Il(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((il = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Hc(8, t, t.return), Il(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Il(t)));
            break;
          default:
            Il(t);
        }
        e = e.sibling;
      }
    }
    function Ll(e, t) {
      for (; il !== null;) {
        var n = il;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Hc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            oa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (il = r));
        else
          a: for (n = e; il !== null;) {
            r = il;
            var i = r.sibling,
              a = r.return;
            if ((sl(r), r === n)) {
              il = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (il = i));
              break a;
            }
            il = a;
          }
      }
    }
    var Rl = {
        getCacheForType: function (e) {
          var t = Qi(ia),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return Qi(ia).controller.signal;
        },
      },
      zl = typeof WeakMap == `function` ? WeakMap : Map,
      H = 0,
      Bl = null,
      U = null,
      W = 0,
      G = 0,
      Vl = null,
      Hl = !1,
      Ul = !1,
      Wl = !1,
      Gl = 0,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = null,
      $l = null,
      eu = !1,
      tu = 0,
      nu = 0,
      ru = 1 / 0,
      iu = null,
      au = null,
      ou = 0,
      su = null,
      cu = null,
      lu = 0,
      uu = 0,
      du = null,
      fu = null,
      pu = 0,
      mu = null;
    function hu() {
      return H & 2 && W !== 0 ? W & -W : O.T === null ? rt() : md();
    }
    function gu() {
      if (Xl === 0) {
        if (!(W & 536870912) || z) {
          var e = He;
          ((He <<= 1), !(He & 3932160) && (He = 262144), (Xl = e));
        } else Xl = 536870912;
      }
      return ((e = eo.current), e !== null && (e.flags |= 32), Xl);
    }
    function _u(e, t, n) {
      (((e === Bl && (G === 2 || G === 9)) || e.cancelPendingCommit !== null) && (wu(e, 0), xu(e, W, Xl, !1)),
        Xe(e, n),
        (!(H & 2) || e !== Bl) && (e === Bl && (!(H & 2) && (Jl |= n), Kl === 4 && xu(e, W, Xl, !1)), od(e)));
    }
    function vu(e, t, n) {
      if (H & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Ke(e, t),
        a = r ? Mu(e, t) : Au(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Ul && !r && xu(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !bu(n))) {
          ((a = Au(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else ((s = e.pendingLanes & -536870913), (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = Ql;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (wu(c, s).flags |= 256), (s = Au(c, s, !1)), s !== 2)) {
                if (Wl && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (Jl |= o), (a = 4));
                  break a;
                }
                ((o = $l), ($l = a), o !== null && ($l === null ? ($l = o) : $l.push.apply($l, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (wu(e, 0), xu(e, t, 0, !0));
          break;
        }
        a: {
          switch (((r = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              xu(r, t, Xl, !Hl);
              break a;
            case 2:
              $l = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = tu + 300 - N()), 10 < a)) {
            if ((xu(r, t, Xl, !Hl), Ge(r, 0, !0) !== 0)) break a;
            ((lu = t),
              (r.timeoutHandle = Yd(
                yu.bind(null, r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, `Throttled`, -0, 0),
                a,
              )));
            break a;
          }
          yu(r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, null, -0, 0);
        }
        break;
      } while (1);
      od(e);
    }
    function yu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Zt,
        }),
          Ml(t, a, d));
        var m = (a & 62914560) === a ? tu - N() : (a & 4194048) === a ? nu - N() : 0;
        if (((m = Qf(d, m)), m !== null)) {
          ((lu = a),
            (e.cancelPendingCommit = m(zu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            xu(e, a, o, !l));
          return;
        }
      }
      zu(e, t, a, n, r, i, o, s, c);
    }
    function bu(e) {
      for (var t = e; ;) {
        var n = t.tag;
        if (
          (n === 0 || n === 11 || n === 15) &&
          t.flags & 16384 &&
          ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
        )
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              a = i.getSnapshot;
            i = i.value;
            try {
              if (!yr(a(), i)) return !1;
            } catch {
              return !1;
            }
          }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function xu(e, t, n, r) {
      ((t &= ~Yl),
        (t &= ~Jl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Le(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && Qe(e, n, t);
    }
    function Su() {
      return H & 6 ? !0 : (sd(0, !1), !1);
    }
    function Cu() {
      if (U !== null) {
        if (G === 0) var e = U.return;
        else ((e = U), (Wi = Ui = null), Oo(e), (ka = null), (Aa = 0), (e = U));
        for (; e !== null;) (Bc(e.alternate, e), (e = e.return));
        U = null;
      }
    }
    function wu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Xd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (lu = 0),
        Cu(),
        (Bl = e),
        (U = n = si(e.current, null)),
        (W = t),
        (G = 0),
        (Vl = null),
        (Hl = !1),
        (Ul = Ke(e, t)),
        (Wl = !1),
        (Zl = Xl = Yl = Jl = ql = Kl = 0),
        ($l = Ql = null),
        (eu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Le(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Gl = t), Zr(), n);
    }
    function Tu(e, t) {
      ((B = null),
        (O.H = Rs),
        t === ya || t === xa
          ? ((t = Da()), (G = 3))
          : t === ba
            ? ((t = Da()), (G = 4))
            : (G = t === tc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Vl = t),
        U === null && ((Kl = 1), Xs(e, hi(t, e.current))));
    }
    function Eu() {
      var e = eo.current;
      return e === null
        ? !0
        : (W & 4194048) === W
          ? to === null
          : (W & 62914560) === W || W & 536870912
            ? e === to
            : !1;
    }
    function Du() {
      var e = O.H;
      return ((O.H = Rs), e === null ? Rs : e);
    }
    function Ou() {
      var e = O.A;
      return ((O.A = Rl), e);
    }
    function ku() {
      ((Kl = 4),
        Hl || ((W & 4194048) !== W && eo.current !== null) || (Ul = !0),
        (!(ql & 134217727) && !(Jl & 134217727)) || Bl === null || xu(Bl, W, Xl, !1));
    }
    function Au(e, t, n) {
      var r = H;
      H |= 2;
      var i = Du(),
        a = Ou();
      ((Bl !== e || W !== t) && ((iu = null), wu(e, t)), (t = !1));
      var o = Kl;
      a: do
        try {
          if (G !== 0 && U !== null) {
            var s = U,
              c = Vl;
            switch (G) {
              case 8:
                (Cu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                eo.current === null && (t = !0);
                var l = G;
                if (((G = 0), (Vl = null), Iu(e, s, c, l), n && Ul)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = G), (G = 0), (Vl = null), Iu(e, s, c, l));
            }
          }
          (ju(), (o = Kl));
          break;
        } catch (t) {
          Tu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Wi = Ui = null),
        (H = r),
        (O.H = i),
        (O.A = a),
        U === null && ((Bl = null), (W = 0), Zr()),
        o
      );
    }
    function ju() {
      for (; U !== null;) Pu(U);
    }
    function Mu(e, t) {
      var n = H;
      H |= 2;
      var r = Du(),
        a = Ou();
      Bl !== e || W !== t ? ((iu = null), (ru = N() + 500), wu(e, t)) : (Ul = Ke(e, t));
      a: do
        try {
          if (G !== 0 && U !== null) {
            t = U;
            var o = Vl;
            b: switch (G) {
              case 1:
                ((G = 0), (Vl = null), Iu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Ca(o)) {
                  ((G = 0), (Vl = null), Fu(t));
                  break;
                }
                ((t = function () {
                  ((G !== 2 && G !== 9) || Bl !== e || (G = 7), od(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                G = 7;
                break a;
              case 4:
                G = 5;
                break a;
              case 7:
                Ca(o) ? ((G = 0), (Vl = null), Fu(t)) : ((G = 0), (Vl = null), Iu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (U.tag) {
                  case 26:
                    s = U.memoizedState;
                  case 5:
                  case 27:
                    var c = U;
                    if (s ? Yf(s) : c.stateNode.complete) {
                      ((G = 0), (Vl = null));
                      var l = c.sibling;
                      if (l !== null) U = l;
                      else {
                        var u = c.return;
                        u === null ? (U = null) : ((U = u), Lu(u));
                      }
                      break b;
                    }
                }
                ((G = 0), (Vl = null), Iu(e, t, o, 5));
                break;
              case 6:
                ((G = 0), (Vl = null), Iu(e, t, o, 6));
                break;
              case 8:
                (Cu(), (Kl = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Nu();
          break;
        } catch (t) {
          Tu(e, t);
        }
      while (1);
      return (
        (Wi = Ui = null),
        (O.H = r),
        (O.A = a),
        (H = n),
        U === null ? ((Bl = null), (W = 0), Zr(), Kl) : 0
      );
    }
    function Nu() {
      for (; U !== null && !Ee();) Pu(U);
    }
    function Pu(e) {
      var t = jc(e.alternate, e, Gl);
      ((e.memoizedProps = e.pendingProps), t === null ? Lu(e) : (U = t));
    }
    function Fu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = hc(n, t, t.pendingProps, t.type, void 0, W);
          break;
        case 11:
          t = hc(n, t, t.pendingProps, t.type.render, t.ref, W);
          break;
        case 5:
          Oo(t);
        default:
          (Bc(n, t), (t = U = ci(t, Gl)), (t = jc(n, t, Gl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Lu(e) : (U = t));
    }
    function Iu(e, t, n, r) {
      ((Wi = Ui = null), Oo(t), (ka = null), (Aa = 0));
      var i = t.return;
      try {
        if (ec(e, i, t, n, W)) {
          ((Kl = 1), Xs(e, hi(n, e.current)), (U = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((U = i), t);
        ((Kl = 1), Xs(e, hi(n, e.current)), (U = null));
        return;
      }
      t.flags & 32768
        ? (z || r === 1
            ? (e = !0)
            : Ul || W & 536870912
              ? (e = !1)
              : ((Hl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = eo.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Ru(t, e))
        : Lu(t);
    }
    function Lu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Ru(t, Hl);
          return;
        }
        e = t.return;
        var n = Rc(t.alternate, t, Gl);
        if (n !== null) {
          U = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          U = t;
          return;
        }
        U = t = e;
      } while (t !== null);
      Kl === 0 && (Kl = 5);
    }
    function Ru(e, t) {
      do {
        var n = zc(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (U = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          U = e;
          return;
        }
        U = e = n;
      } while (e !== null);
      ((Kl = 6), (U = null));
    }
    function zu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Wu();
      while (ou !== 0);
      if (H & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= Xr),
          Ze(e, n, o, s, c, l),
          e === Bl && ((U = Bl = null), (W = 0)),
          (cu = t),
          (su = e),
          (lu = n),
          (uu = o),
          (du = a),
          (fu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              $u(Ae, function () {
                return (Gu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = O.T), (O.T = null), (a = k.p), (k.p = 2), (s = H), (H |= 4));
          try {
            al(e, t, n);
          } finally {
            ((H = s), (k.p = a), (O.T = r));
          }
        }
        ((ou = 1), Bu(), Vu(), Hu());
      }
    }
    function Bu() {
      if (ou === 1) {
        ou = 0;
        var e = su,
          t = cu,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = O.T), (O.T = null));
          var r = k.p;
          k.p = 2;
          var i = H;
          H |= 4;
          try {
            vl(t, e);
            var a = Hd,
              o = wr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Cr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Tr(s)) {
                var l = c.start,
                  u = c.end;
                if ((u === void 0 && (u = l), `selectionStart` in s))
                  ((s.selectionStart = l), (s.selectionEnd = Math.min(u, s.value.length)));
                else {
                  var d = s.ownerDocument || document,
                    f = (d && d.defaultView) || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === void 0 ? h : Math.min(c.end, m);
                    !p.extend && h > g && ((o = g), (g = h), (h = o));
                    var _ = Sr(s, h),
                      v = Sr(s, g);
                    if (
                      _ &&
                      v &&
                      (p.rangeCount !== 1 ||
                        p.anchorNode !== _.node ||
                        p.anchorOffset !== _.offset ||
                        p.focusNode !== v.node ||
                        p.focusOffset !== v.offset)
                    ) {
                      var y = d.createRange();
                      (y.setStart(_.node, _.offset),
                        p.removeAllRanges(),
                        h > g
                          ? (p.addRange(y), p.extend(v.node, v.offset))
                          : (y.setEnd(v.node, v.offset), p.addRange(y)));
                    }
                  }
                }
              }
              for (d = [], p = s; (p = p.parentNode);)
                p.nodeType === 1 && d.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
              }
            }
            ((dp = !!Vd), (Hd = Vd = null));
          } finally {
            ((H = i), (k.p = r), (O.T = n));
          }
        }
        ((e.current = t), (ou = 2));
      }
    }
    function Vu() {
      if (ou === 2) {
        ou = 0;
        var e = su,
          t = cu,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = O.T), (O.T = null));
          var r = k.p;
          k.p = 2;
          var i = H;
          H |= 4;
          try {
            ol(e, t.alternate, t);
          } finally {
            ((H = i), (k.p = r), (O.T = n));
          }
        }
        ou = 3;
      }
    }
    function Hu() {
      if (ou === 4 || ou === 3) {
        ((ou = 0), De());
        var e = su,
          t = cu,
          n = lu,
          r = fu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (ou = 5)
          : ((ou = 0), (cu = su = null), Uu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (au = null), nt(n), (t = t.stateNode), Fe && typeof Fe.onCommitFiberRoot == `function`)
        )
          try {
            Fe.onCommitFiberRoot(Pe, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = O.T), (i = k.p), (k.p = 2), (O.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((O.T = t), (k.p = i));
          }
        }
        (lu & 3 && Wu(),
          od(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === mu ? pu++ : ((pu = 0), (mu = e))) : (pu = 0),
          sd(0, !1));
      }
    }
    function Uu(e, t) {
      (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), oa(t)));
    }
    function Wu() {
      return (Bu(), Vu(), Hu(), Gu());
    }
    function Gu() {
      if (ou !== 5) return !1;
      var e = su,
        t = uu;
      uu = 0;
      var n = nt(lu),
        r = O.T,
        a = k.p;
      try {
        ((k.p = 32 > n ? 32 : n), (O.T = null), (n = du), (du = null));
        var o = su,
          s = lu;
        if (((ou = 0), (cu = su = null), (lu = 0), H & 6)) throw Error(i(331));
        var c = H;
        if (
          ((H |= 4),
          Fl(o.current),
          Dl(o, o.current, s, n),
          (H = c),
          sd(0, !1),
          Fe && typeof Fe.onPostCommitFiberRoot == `function`)
        )
          try {
            Fe.onPostCommitFiberRoot(Pe, o);
          } catch {}
        return !0;
      } finally {
        ((k.p = a), (O.T = r), Uu(e, t));
      }
    }
    function Ku(e, t, n) {
      ((t = hi(n, t)), (t = V(e.stateNode, t, 2)), (e = Va(e, t, 2)), e !== null && (Xe(e, 2), od(e)));
    }
    function qu(e, t, n) {
      if (e.tag === 3) Ku(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Ku(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (au === null || !au.has(r)))
            ) {
              ((e = hi(n, e)),
                (n = Qs(2)),
                (r = Va(t, n, 2)),
                r !== null && ($s(n, r, t, e), Xe(r, 2), od(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Ju(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Wl = !0), i.add(n), (e = Yu.bind(null, e, t, n)), t.then(e, e));
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        Bl === e &&
          (W & n) === n &&
          (Kl === 4 || (Kl === 3 && (W & 62914560) === W && 300 > N() - tu)
            ? !(H & 2) && wu(e, 0)
            : (Yl |= n),
          Zl === W && (Zl = 0)),
        od(e));
    }
    function Xu(e, t) {
      (t === 0 && (t = Je()), (e = ei(e, t)), e !== null && (Xe(e, t), od(e)));
    }
    function Zu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Xu(e, n));
    }
    function Qu(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Xu(e, n));
    }
    function $u(e, t) {
      return we(e, t);
    }
    var ed = null,
      td = null,
      nd = !1,
      rd = !1,
      id = !1,
      ad = 0;
    function od(e) {
      (e !== td && e.next === null && (td === null ? (ed = td = e) : (td = td.next = e)),
        (rd = !0),
        nd || ((nd = !0), pd()));
    }
    function sd(e, t) {
      if (!id && rd) {
        id = !0;
        do
          for (var n = !1, r = ed; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Le(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), fd(r, a));
              } else
                ((a = W),
                  (a = Ge(r, r === Bl ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1)),
                  !(a & 3) || Ke(r, a) || ((n = !0), fd(r, a)));
            }
            r = r.next;
          }
        while (n);
        id = !1;
      }
    }
    function cd() {
      ld();
    }
    function ld() {
      rd = nd = !1;
      var e = 0;
      ad !== 0 && Jd() && (e = ad);
      for (var t = N(), n = null, r = ed; r !== null;) {
        var i = r.next,
          a = ud(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (ed = i) : (n.next = i), i === null && (td = n))
          : ((n = r), (e !== 0 || a & 3) && (rd = !0)),
          (r = i));
      }
      ((ou !== 0 && ou !== 5) || sd(e, !1), ad !== 0 && (ad = 0));
    }
    function ud(e, t) {
      for (
        var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Le(a),
          s = 1 << o,
          c = i[o];
        (c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = qe(s, t)) : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = Bl),
        (n = W),
        (n = Ge(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (G === 2 || G === 9)) || e.cancelPendingCommit !== null)
      )
        return (r !== null && r !== null && Te(r), (e.callbackNode = null), (e.callbackPriority = 0));
      if (!(n & 3) || Ke(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Te(r), nt(n))) {
          case 2:
          case 8:
            n = P;
            break;
          case 32:
            n = Ae;
            break;
          case 268435456:
            n = je;
            break;
          default:
            n = Ae;
        }
        return ((r = dd.bind(null, e)), (n = we(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
      }
      return (r !== null && r !== null && Te(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function dd(e, t) {
      if (ou !== 0 && ou !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Wu() && e.callbackNode !== n) return null;
      var r = W;
      return (
        (r = Ge(e, e === Bl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (vu(e, r, t),
            ud(e, N()),
            e.callbackNode != null && e.callbackNode === n ? dd.bind(null, e) : null)
      );
    }
    function fd(e, t) {
      if (Wu()) return null;
      vu(e, t, !0);
    }
    function pd() {
      Qd(function () {
        H & 6 ? we(ke, cd) : ld();
      });
    }
    function md() {
      if (ad === 0) {
        var e = la;
        (e === 0 && ((e = Ve), (Ve <<= 1), !(Ve & 261888) && (Ve = 256)), (ad = e));
      }
      return ad;
    }
    function hd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Xt(`` + e);
    }
    function gd(e, t) {
      var n = t.ownerDocument.createElement(`input`);
      return (
        (n.name = t.name),
        (n.value = t.value),
        e.id && n.setAttribute(`form`, e.id),
        t.parentNode.insertBefore(n, t),
        (e = new FormData(e)),
        n.parentNode.removeChild(n),
        e
      );
    }
    function _d(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = hd((i[st] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[st] || null) ? hd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new vn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (ad !== 0) {
                    var e = o ? gd(i, o) : new FormData(i);
                    ws(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? gd(i, o) : new FormData(i)),
                    ws(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var vd = 0; vd < Gr.length; vd++) {
      var yd = Gr[vd];
      Kr(yd.toLowerCase(), `on` + (yd[0].toUpperCase() + yd.slice(1)));
    }
    (Kr(Lr, `onAnimationEnd`),
      Kr(Rr, `onAnimationIteration`),
      Kr(zr, `onAnimationStart`),
      Kr(`dblclick`, `onDoubleClick`),
      Kr(`focusin`, `onFocus`),
      Kr(`focusout`, `onBlur`),
      Kr(Br, `onTransitionRun`),
      Kr(Vr, `onTransitionStart`),
      Kr(Hr, `onTransitionCancel`),
      Kr(Ur, `onTransitionEnd`),
      Ct(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Ct(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Ct(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Ct(`onPointerLeave`, [`pointerout`, `pointerover`]),
      St(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
      St(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `),
      ),
      St(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      St(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      St(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
      St(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)));
    var bd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      xd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(bd));
    function Sd(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped())) break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                qr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              ((a = s), (i.currentTarget = l));
              try {
                a(i);
              } catch (e) {
                qr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function K(e, t) {
      var n = t[lt];
      n === void 0 && (n = t[lt] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Ed(t, e, 2, !1), n.add(r));
    }
    function Cd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Ed(n, e, r, t));
    }
    var wd = `_reactListening` + Math.random().toString(36).slice(2);
    function Td(e) {
      if (!e[wd]) {
        ((e[wd] = !0),
          bt.forEach(function (t) {
            t !== `selectionchange` && (xd.has(t) || Cd(t, !1, e), Cd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[wd] || ((t[wd] = !0), Cd(`selectionchange`, !1, t));
      }
    }
    function Ed(e, t, n, r) {
      switch (vp(t)) {
        case 2:
          var i = fp;
          break;
        case 8:
          i = pp;
          break;
        default:
          i = mp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !sn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Dd(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var s = r.tag;
          if (s === 3 || s === 4) {
            var c = r.stateNode.containerInfo;
            if (c === i) break;
            if (s === 4)
              for (s = r.return; s !== null;) {
                var l = s.tag;
                if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
                s = s.return;
              }
            for (; c !== null;) {
              if (((s = ht(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      an(function () {
        var r = a,
          i = $t(n),
          s = [];
        a: {
          var c = Wr.get(e);
          if (c !== void 0) {
            var l = vn,
              u = e;
            switch (e) {
              case `keypress`:
                if (pn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = In;
                break;
              case `focusin`:
                ((u = `focus`), (l = Dn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Dn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Dn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Tn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = En;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Rn;
                break;
              case Lr:
              case Rr:
              case zr:
                l = On;
                break;
              case Ur:
                l = zn;
                break;
              case `scroll`:
              case `scrollend`:
                l = bn;
                break;
              case `wheel`:
                l = Bn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = kn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Ln;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Vn;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? (c === null ? null : c + `Capture`) : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (
                ((h = g.stateNode),
                (g = g.tag),
                (g !== 5 && g !== 26 && g !== 27) ||
                  h === null ||
                  p === null ||
                  ((g = R(m, p)), g != null && d.push(Od(m, g, h))),
                f)
              )
                break;
              m = m.return;
            }
            0 < d.length && ((c = new l(c, u, null, n, i)), s.push({ event: c, listeners: d }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((c = e === `mouseover` || e === `pointerover`),
              (l = e === `mouseout` || e === `pointerout`),
              c && n !== Qt && (u = n.relatedTarget || n.fromElement) && (ht(u) || u[ct]))
            )
              break a;
            if (
              (l || c) &&
              ((c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? ht(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Tn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Ln), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : _t(l)),
                (h = u == null ? c : _t(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                ht(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)), (d.target = h), (d.relatedTarget = f), (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Ad, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
                  g = 0;
                  for (var _ = m; _; _ = d(_)) g++;
                  for (; 0 < h - g;) ((p = d(p)), h--);
                  for (; 0 < g - h;) ((m = d(m)), g--);
                  for (; h--;) {
                    if (p === m || (m !== null && p === m.alternate)) {
                      d = p;
                      break b;
                    }
                    ((p = d(p)), (m = d(m)));
                  }
                  d = null;
                }
              else d = null;
              (l !== null && jd(s, c, l, d, !1), u !== null && f !== null && jd(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? _t(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = sr;
            else if (tr(c)) {
              if (cr) v = _r;
              else {
                v = hr;
                var y = mr;
              }
            } else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && qt(r.elementType) && (v = sr)
                  : (v = gr));
            if ((v &&= v(e, r))) {
              nr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                zt(c, `number`, c.value));
          }
          switch (((y = r ? _t(r) : window), e)) {
            case `focusin`:
              (tr(y) || y.contentEditable === `true`) && ((Dr = y), (Or = r), (kr = null));
              break;
            case `focusout`:
              kr = Or = Dr = null;
              break;
            case `mousedown`:
              Ar = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Ar = !1), jr(s, n, i));
              break;
            case `selectionchange`:
              if (Er) break;
            case `keydown`:
            case `keyup`:
              jr(s, n, i);
          }
          var b;
          if (Un)
            b: {
              switch (e) {
                case `compositionstart`:
                  var x = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  x = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  x = `onCompositionUpdate`;
                  break b;
              }
              x = void 0;
            }
          else
            Zn
              ? Yn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (Kn &&
              n.locale !== `ko` &&
              (Zn || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && Zn && (b = fn())
                : ((ln = i), (un = `value` in ln ? ln.value : ln.textContent), (Zn = !0))),
            (y = kd(r, x)),
            0 < y.length &&
              ((x = new An(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = Xn(n)), b !== null && (x.data = b)))),
            (b = Gn ? Qn(e, n) : $n(e, n)) &&
              ((x = kd(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new An(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            _d(s, e, r, n, i));
        }
        Sd(s, t);
      });
    }
    function Od(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function kd(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = R(e, n)),
            i != null && r.unshift(Od(e, i, a)),
            (i = R(e, t)),
            i != null && r.push(Od(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Ad(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function jd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = R(n, a)), l != null && o.unshift(Od(n, l, c)))
            : i || ((l = R(n, a)), l != null && o.push(Od(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Md = /\r\n?/g,
      Nd = /\u0000|\uFFFD/g;
    function Pd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Md,
          `
`,
        )
        .replace(Nd, ``);
    }
    function Fd(e, t) {
      return ((t = Pd(t)), Pd(e) === t);
    }
    function q(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Ut(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Ut(e, `` + r);
          break;
        case `className`:
          Ot(e, `class`, r);
          break;
        case `tabIndex`:
          Ot(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Ot(e, n, r);
          break;
        case `style`:
          Kt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Ot(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = Xt(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          }
          if (
            (typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && q(e, t, `name`, a.name, a, null),
                  q(e, t, `formEncType`, a.formEncType, a, null),
                  q(e, t, `formMethod`, a.formMethod, a, null),
                  q(e, t, `formTarget`, a.formTarget, a, null))
                : (q(e, t, `encType`, a.encType, a, null),
                  q(e, t, `method`, a.method, a, null),
                  q(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Xt(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = Zt);
          break;
        case `onScroll`:
          r != null && K(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && K(`scrollend`, e);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = Xt(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r != null && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, `` + r)
            : e.removeAttribute(n);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r && typeof r != `function` && typeof r != `symbol` ? e.setAttribute(n, ``) : e.removeAttribute(n);
          break;
        case `capture`:
        case `download`:
          !0 === r
            ? e.setAttribute(n, ``)
            : !1 !== r && r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r
            ? e.setAttribute(n, r)
            : e.removeAttribute(n);
          break;
        case `rowSpan`:
        case `start`:
          r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)
            ? e.removeAttribute(n)
            : e.setAttribute(n, r);
          break;
        case `popover`:
          (K(`beforetoggle`, e), K(`toggle`, e), I(e, `popover`, r));
          break;
        case `xlinkActuate`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          kt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          kt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          I(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Jt.get(n) || n), I(e, n, r));
      }
    }
    function Id(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Kt(e, r, o);
          break;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (((n = r.__html), n != null)) {
              if (a.children != null) throw Error(i(60));
              e.innerHTML = n;
            }
          }
          break;
        case `children`:
          typeof r == `string` ? Ut(e, r) : (typeof r == `number` || typeof r == `bigint`) && Ut(e, `` + r);
          break;
        case `onScroll`:
          r != null && K(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && K(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = Zt);
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          if (!xt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[st] || null),
                (o = o == null ? null : o[n]),
                typeof o == `function` && e.removeEventListener(t, o, a),
                typeof r == `function`)
              ) {
                (typeof o != `function` &&
                  o !== null &&
                  (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a));
                break a;
              }
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : I(e, n, r);
            }
      }
    }
    function Ld(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          (K(`error`, e), K(`load`, e));
          var r = !1,
            a = !1,
            o;
          for (o in n)
            if (n.hasOwnProperty(o)) {
              var s = n[o];
              if (s != null)
                switch (o) {
                  case `src`:
                    r = !0;
                    break;
                  case `srcSet`:
                    a = !0;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    q(e, t, o, s, n, null);
                }
            }
          (a && q(e, t, `srcSet`, n.srcSet, n, null), r && q(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          K(`invalid`, e);
          var c = (o = s = a = null),
            l = null,
            u = null;
          for (r in n)
            if (n.hasOwnProperty(r)) {
              var d = n[r];
              if (d != null)
                switch (r) {
                  case `name`:
                    a = d;
                    break;
                  case `type`:
                    s = d;
                    break;
                  case `checked`:
                    l = d;
                    break;
                  case `defaultChecked`:
                    u = d;
                    break;
                  case `value`:
                    o = d;
                    break;
                  case `defaultValue`:
                    c = d;
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (d != null) throw Error(i(137, t));
                    break;
                  default:
                    q(e, t, r, d, n, null);
                }
            }
          Rt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (K(`invalid`, e), (r = s = o = null), n))
            if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
              switch (a) {
                case `value`:
                  o = c;
                  break;
                case `defaultValue`:
                  s = c;
                  break;
                case `multiple`:
                  r = c;
                default:
                  q(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Bt(e, !!r, n, !0) : Bt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (K(`invalid`, e), (o = a = r = null), n))
            if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
              switch (s) {
                case `value`:
                  r = c;
                  break;
                case `defaultValue`:
                  a = c;
                  break;
                case `children`:
                  o = c;
                  break;
                case `dangerouslySetInnerHTML`:
                  if (c != null) throw Error(i(91));
                  break;
                default:
                  q(e, t, s, c, n, null);
              }
          Ht(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  q(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (K(`beforetoggle`, e), K(`toggle`, e), K(`cancel`, e), K(`close`, e));
          break;
        case `iframe`:
        case `object`:
          K(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < bd.length; r++) K(bd[r], e);
          break;
        case `image`:
          (K(`error`, e), K(`load`, e));
          break;
        case `details`:
          K(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (K(`error`, e), K(`load`, e));
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n)
            if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(i(137, t));
                default:
                  q(e, t, u, r, n, null);
              }
          return;
        default:
          if (qt(t)) {
            for (d in n) n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Id(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && q(e, t, c, r, n, null));
    }
    function Rd(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null)
              switch (m) {
                case `checked`:
                  break;
                case `value`:
                  break;
                case `defaultValue`:
                  l = f;
                default:
                  r.hasOwnProperty(m) || q(e, t, m, null, r, f);
              }
          }
          for (var p in r) {
            var m = r[p];
            if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
              switch (p) {
                case `type`:
                  o = m;
                  break;
                case `name`:
                  a = m;
                  break;
                case `checked`:
                  u = m;
                  break;
                case `defaultChecked`:
                  d = m;
                  break;
                case `value`:
                  s = m;
                  break;
                case `defaultValue`:
                  c = m;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (m != null) throw Error(i(137, t));
                  break;
                default:
                  m !== f && q(e, t, p, m, r, f);
              }
          }
          Lt(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in ((m = s = c = p = null), n))
            if (((l = n[o]), n.hasOwnProperty(o) && l != null))
              switch (o) {
                case `value`:
                  break;
                case `multiple`:
                  m = l;
                default:
                  r.hasOwnProperty(o) || q(e, t, o, null, r, l);
              }
          for (a in r)
            if (((o = r[a]), (l = n[a]), r.hasOwnProperty(a) && (o != null || l != null)))
              switch (a) {
                case `value`:
                  p = o;
                  break;
                case `defaultValue`:
                  c = o;
                  break;
                case `multiple`:
                  s = o;
                default:
                  o !== l && q(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Bt(e, !!n, n ? [] : ``, !1) : Bt(e, !!n, t, !0))
              : Bt(e, !!n, p, !1));
          return;
        case `textarea`:
          for (c in ((m = p = null), n))
            if (((a = n[c]), n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)))
              switch (c) {
                case `value`:
                  break;
                case `children`:
                  break;
                default:
                  q(e, t, c, null, r, a);
              }
          for (s in r)
            if (((a = r[s]), (o = n[s]), r.hasOwnProperty(s) && (a != null || o != null)))
              switch (s) {
                case `value`:
                  p = a;
                  break;
                case `defaultValue`:
                  m = a;
                  break;
                case `children`:
                  break;
                case `dangerouslySetInnerHTML`:
                  if (a != null) throw Error(i(91));
                  break;
                default:
                  a !== o && q(e, t, s, a, r, o);
              }
          Vt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  q(e, t, h, null, r, p);
              }
          for (l in r)
            if (((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null)))
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  q(e, t, l, p, r, m);
              }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n)
            ((p = n[g]), n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && q(e, t, g, null, r, p));
          for (u in r)
            if (((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null)))
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  q(e, t, u, p, r, m);
              }
          return;
        default:
          if (qt(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Id(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) || p === m || (p === void 0 && m === void 0) || Id(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]), n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && q(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || q(e, t, f, p, r, m));
    }
    function zd(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return !0;
        default:
          return !1;
      }
    }
    function Bd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && zd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && zd(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`) ? e : 5;
    }
    var Vd = null,
      Hd = null;
    function Ud(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Wd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Gd(e, t) {
      if (e === 0)
        switch (t) {
          case `svg`:
            return 1;
          case `math`:
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function Kd(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        typeof t.children == `bigint` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var qd = null;
    function Jd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== qd && ((qd = e), !0) : ((qd = null), !1);
    }
    var Yd = typeof setTimeout == `function` ? setTimeout : void 0,
      Xd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Zd = typeof Promise == `function` ? Promise : void 0,
      Qd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Zd === void 0
            ? Yd
            : function (e) {
                return Zd.resolve(null).then(e).catch($d);
              };
    function $d(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function ef(e) {
      return e === `head`;
    }
    function tf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Ip(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) gf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), gf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[pt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && gf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Ip(t);
    }
    function nf(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (
          (n.nodeType === 1
            ? t
              ? ((n._stashedDisplay = n.style.display), (n.style.display = `none`))
              : ((n.style.display = n._stashedDisplay || ``),
                n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
            : n.nodeType === 3 &&
              (t
                ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                : (n.nodeValue = n._stashedText || ``)),
          r && r.nodeType === 8)
        ) {
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        }
        n = r;
      } while (n);
    }
    function rf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (rf(n), mt(n));
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function af(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[pt])
          switch (t) {
            case `meta`:
              if (!e.hasAttribute(`itemprop`)) break;
              return e;
            case `link`:
              if (
                ((a = e.getAttribute(`rel`)),
                (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                  a !== i.rel ||
                  e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) ||
                  e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) ||
                  e.getAttribute(`title`) !== (i.title == null ? null : i.title))
              )
                break;
              return e;
            case `style`:
              if (e.hasAttribute(`data-precedence`)) break;
              return e;
            case `script`:
              if (
                ((a = e.getAttribute(`src`)),
                (a !== (i.src == null ? null : i.src) ||
                  e.getAttribute(`type`) !== (i.type == null ? null : i.type) ||
                  e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = df(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function of(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = df(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function sf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = df(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function cf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function lf(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function uf(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;
      else if (e.data !== `$?` || n.readyState !== `loading`) t();
      else {
        var r = function () {
          (t(), n.removeEventListener(`DOMContentLoaded`, r));
        };
        (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
      }
    }
    function df(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var ff = null;
    function pf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return df(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function mf(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else (n !== `/$` && n !== `/&`) || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function hf(e, t, n) {
      switch (((t = Ud(n)), e)) {
        case `html`:
          if (((e = t.documentElement), !e)) throw Error(i(452));
          return e;
        case `head`:
          if (((e = t.head), !e)) throw Error(i(453));
          return e;
        case `body`:
          if (((e = t.body), !e)) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      mt(e);
    }
    var _f = new Map(),
      vf = new Set();
    function yf(e) {
      return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var bf = k.d;
    k.d = { f: xf, r: Sf, D: Tf, C: Ef, L: Df, m: Of, X: Af, S: kf, M: jf };
    function xf() {
      var e = bf.f(),
        t = Su();
      return e || t;
    }
    function Sf(e) {
      var t = gt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Es(t) : bf.r(e);
    }
    var Cf = typeof document > `u` ? null : document;
    function wf(e, t, n) {
      var r = Cf;
      if (r && typeof t == `string` && t) {
        var i = It(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          vf.has(i) ||
            (vf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Ld(t, `link`, e), yt(t), r.head.appendChild(t))));
      }
    }
    function Tf(e) {
      (bf.D(e), wf(`dns-prefetch`, e, null));
    }
    function Ef(e, t) {
      (bf.C(e, t), wf(`preconnect`, e, t));
    }
    function Df(e, t, n) {
      bf.L(e, t, n);
      var r = Cf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + It(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + It(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + It(n.imageSizes) + `"]`))
          : (i += `[href="` + It(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Nf(e);
            break;
          case `script`:
            a = Lf(e);
        }
        _f.has(a) ||
          ((e = f({ rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
          _f.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Pf(a))) ||
            (t === `script` && r.querySelector(zf(a))) ||
            ((t = r.createElement(`link`)), Ld(t, `link`, e), yt(t), r.head.appendChild(t)));
      }
    }
    function Of(e, t) {
      bf.m(e, t);
      var n = Cf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + It(r) + `"][href="` + It(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Lf(e);
        }
        if (
          !_f.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)), _f.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zf(a))) return;
          }
          ((r = n.createElement(`link`)), Ld(r, `link`, e), yt(r), n.head.appendChild(r));
        }
      }
    }
    function kf(e, t, n) {
      bf.S(e, t, n);
      var r = Cf;
      if (r && e) {
        var i = vt(r).hoistableStyles,
          a = Nf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Pf(a)))) s.loading = 5;
          else {
            ((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)), (n = _f.get(a)) && Wf(e, n));
            var c = (o = r.createElement(`link`));
            (yt(c),
              Ld(c, `link`, e),
              (c._p = new Promise(function (e, t) {
                ((c.onload = e), (c.onerror = t));
              })),
              c.addEventListener(`load`, function () {
                s.loading |= 1;
              }),
              c.addEventListener(`error`, function () {
                s.loading |= 2;
              }),
              (s.loading |= 4),
              Uf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Af(e, t) {
      bf.X(e, t);
      var n = Cf;
      if (n && e) {
        var r = vt(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = _f.get(i)) && Gf(e, t),
            (a = n.createElement(`script`)),
            yt(a),
            Ld(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function jf(e, t) {
      bf.M(e, t);
      var n = Cf;
      if (n && e) {
        var r = vt(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(zf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = _f.get(i)) && Gf(e, t),
            (a = n.createElement(`script`)),
            yt(a),
            Ld(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Mf(e, t, n, r) {
      var a = (a = ue.current) ? yf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Nf(n.href)),
              (n = vt(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
            e = Nf(n.href);
            var o = vt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }),
                o.set(e, s),
                (o = a.querySelector(Pf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                _f.has(e) ||
                  ((n = {
                    rel: `preload`,
                    as: `style`,
                    href: n.href,
                    crossOrigin: n.crossOrigin,
                    integrity: n.integrity,
                    media: n.media,
                    hrefLang: n.hrefLang,
                    referrerPolicy: n.referrerPolicy,
                  }),
                  _f.set(e, n),
                  o || If(a, e, n, s.state))),
              t && r === null)
            )
              throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return (
            (t = n.async),
            (n = n.src),
            typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`
              ? ((t = Lf(n)),
                (n = vt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Nf(e) {
      return `href="` + It(e) + `"`;
    }
    function Pf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Ff(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function If(e, t, n, r) {
      e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)
        ? (r.loading = 1)
        : ((t = e.createElement(`link`)),
          (r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }),
          Ld(t, `link`, n),
          yt(t),
          e.head.appendChild(t));
    }
    function Lf(e) {
      return `[src="` + It(e) + `"]`;
    }
    function zf(e) {
      return `script[async]` + e;
    }
    function Vf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + It(n.href) + `"]`);
            if (r) return ((t.instance = r), yt(r), r);
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              yt(r),
              Ld(r, `style`, a),
              Uf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Nf(n.href);
            var o = e.querySelector(Pf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), yt(o), o);
            ((r = Ff(n)),
              (a = _f.get(a)) && Wf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              yt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Ld(o, `link`, r),
              (t.state.loading |= 4),
              Uf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Lf(n.src)),
              (a = e.querySelector(zf(o)))
                ? ((t.instance = a), yt(a), a)
                : ((r = n),
                  (a = _f.get(o)) && ((r = f({}, n)), Gf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  yt(a),
                  Ld(a, `link`, r),
                  e.head.appendChild(a),
                  (t.instance = a))
            );
          case `void`:
            return null;
          default:
            throw Error(i(443, t.type));
        }
      else
        t.type === `stylesheet` &&
          !(t.state.loading & 4) &&
          ((r = t.instance), (t.state.loading |= 4), Uf(r, n.precedence, e));
      return t.instance;
    }
    function Uf(e, t, n) {
      for (
        var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),
          i = r.length ? r[r.length - 1] : null,
          a = i,
          o = 0;
        o < r.length;
        o++
      ) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;
        else if (a !== i) break;
      }
      a
        ? a.parentNode.insertBefore(e, a.nextSibling)
        : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
    }
    function Wf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin), (e.referrerPolicy ??= t.referrerPolicy), (e.title ??= t.title));
    }
    function Gf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Kf = null;
    function qf(e, t, n) {
      if (Kf === null) {
        var r = new Map(),
          i = (Kf = new Map());
        i.set(n, r);
      } else ((i = Kf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[pt] || a[ot] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
          a.namespaceURI !== `http://www.w3.org/2000/svg`
        ) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          s ? s.push(a) : r.set(o, [a]);
        }
      }
      return r;
    }
    function Jf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function J(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError)
            break;
          switch (t.rel) {
            case `stylesheet`:
              return ((e = t.disabled), typeof t.precedence == `string` && e == null);
            default:
              return !0;
          }
        case `script`:
          if (
            t.async &&
            typeof t.async != `function` &&
            typeof t.async != `symbol` &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == `string`
          )
            return !0;
      }
      return !1;
    }
    function Yf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Nf(r.href),
            a = t.querySelector(Pf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = $f.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              yt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Ff(r)),
            (i = _f.get(i)) && Wf(r, i),
            (a = a.createElement(`link`)),
            yt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Ld(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++, (n = $f.bind(e)), t.addEventListener(`load`, n), t.addEventListener(`error`, n)));
      }
    }
    var Zf = 0;
    function Qf(e, t) {
      return (
        e.stylesheets && e.count === 0 && tp(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && tp(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Zf === 0 && (Zf = 62500 * Bd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && tp(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Zf ? 50 : 800) + t,
              );
              return (
                (e.unsuspend = n),
                function () {
                  ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                }
              );
            }
          : null
      );
    }
    function $f() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) tp(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var ep = null;
    function tp(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null && (e.count++, (ep = new Map()), t.forEach(np, e), (ep = null), $f.call(e)));
    }
    function np(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ep.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ep.set(e, n));
          for (
            var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0;
            a < i.length;
            a++
          ) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) &&
              (n.set(o.dataset.precedence, o), (r = o));
          }
          r && n.set(null, r);
        }
        ((i = t.instance),
          (o = i.getAttribute(`data-precedence`)),
          (a = n.get(o) || r),
          a === r && n.set(null, i),
          n.set(o, i),
          this.count++,
          (r = $f.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var rp = {
      $$typeof: b,
      Provider: null,
      Consumer: null,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
    };
    function ip(e, t, n, r, i, a, o, s, c) {
      ((this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = Ye(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Ye(0)),
        (this.hiddenUpdates = Ye(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ap(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new ip(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = ai(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = aa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ra(a),
        e
      );
    }
    function op(e) {
      return e ? ((e = ri), e) : ri;
    }
    function sp(e, t, n, r, i, a) {
      ((i = op(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ba(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Va(e, r, t)),
        n !== null && (_u(n, e, t), Ha(n, e, t)));
    }
    function cp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function lp(e, t) {
      (cp(e, t), (e = e.alternate) && cp(e, t));
    }
    function Y(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ei(e, 67108864);
        (t !== null && _u(t, e, 67108864), lp(e, 67108864));
      }
    }
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = hu();
        t = tt(t);
        var n = ei(e, t);
        (n !== null && _u(n, e, t), lp(e, t));
      }
    }
    var dp = !0;
    function fp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        ((k.p = 2), mp(e, t, n, r));
      } finally {
        ((k.p = a), (O.T = i));
      }
    }
    function pp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        ((k.p = 8), mp(e, t, n, r));
      } finally {
        ((k.p = a), (O.T = i));
      }
    }
    function mp(e, t, n, r) {
      if (dp) {
        var i = hp(r);
        if (i === null) (Dd(e, t, r, gp, n), Ep(e, r));
        else if (Op(i, e, t, n, r)) r.stopPropagation();
        else if ((Ep(e, r), t & 4 && -1 < Tp.indexOf(e))) {
          for (; i !== null;) {
            var a = gt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = We(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Le(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (od(a), !(H & 6) && ((ru = N() + 500), sd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ei(a, 2)), s !== null && _u(s, a, 2), Su(), lp(a, 2));
              }
            if (((a = hp(r)), a === null && Dd(e, t, r, gp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Dd(e, t, r, null, n);
      }
    }
    function hp(e) {
      return ((e = $t(e)), _p(e));
    }
    var gp = null;
    function _p(e) {
      if (((gp = null), (e = ht(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var n = t.tag;
          if (n === 13) {
            if (((e = s(t)), e !== null)) return e;
            e = null;
          } else if (n === 31) {
            if (((e = c(t)), e !== null)) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ((gp = e), null);
    }
    function vp(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Oe()) {
            case ke:
              return 2;
            case P:
              return 8;
            case Ae:
            case F:
              return 32;
            case je:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var yp = !1,
      bp = null,
      xp = null,
      X = null,
      Sp = new Map(),
      Cp = new Map(),
      wp = [],
      Tp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Ep(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          bp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          xp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          X = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Sp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          Cp.delete(t.pointerId);
      }
    }
    function Dp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = gt(t)), t !== null && Y(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Op(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((bp = Dp(bp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((xp = Dp(xp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((X = Dp(X, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Sp.set(a, Dp(Sp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), Cp.set(a, Dp(Cp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function kp(e) {
      var t = ht(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                it(e.priority, function () {
                  up(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                it(e.priority, function () {
                  up(n);
                }));
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ap(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = hp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Qt = r), n.target.dispatchEvent(r), (Qt = null));
        } else return ((t = gt(n)), t !== null && Y(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function jp(e, t, n) {
      Ap(e) && n.delete(t);
    }
    function Mp() {
      ((yp = !1),
        bp !== null && Ap(bp) && (bp = null),
        xp !== null && Ap(xp) && (xp = null),
        X !== null && Ap(X) && (X = null),
        Sp.forEach(jp),
        Cp.forEach(jp));
    }
    function Np(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null), yp || ((yp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Mp)));
    }
    var Pp = null;
    function Fp(e) {
      Pp !== e &&
        ((Pp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Pp === e && (Pp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (_p(r || n) === null) continue;
              break;
            }
            var a = gt(n);
            a !== null &&
              (e.splice(t, 3), (t -= 3), ws(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Ip(e) {
      function t(t) {
        return Np(t, e);
      }
      (bp !== null && Np(bp, e),
        xp !== null && Np(xp, e),
        X !== null && Np(X, e),
        Sp.forEach(t),
        Cp.forEach(t));
      for (var n = 0; n < wp.length; n++) {
        var r = wp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < wp.length && ((n = wp[0]), n.blockedOn === null);)
        (kp(n), n.blockedOn === null && wp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[st] || null;
          if (typeof a == `function`) o || Fp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[st] || null))) s = o.formAction;
              else if (_p(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Fp(n));
          }
        }
    }
    function Lp() {
      function e(e) {
        e.canIntercept &&
          e.info === `react-transition` &&
          e.intercept({
            handler: function () {
              return new Promise(function (e) {
                return (i = e);
              });
            },
            focusReset: `manual`,
            scroll: `manual`,
          });
      }
      function t() {
        (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e &&
            e.url != null &&
            navigation.navigate(e.url, { state: e.getState(), info: `react-transition`, history: `replace` });
        }
      }
      if (typeof navigation == `object`) {
        var r = !1,
          i = null;
        return (
          navigation.addEventListener(`navigate`, e),
          navigation.addEventListener(`navigatesuccess`, t),
          navigation.addEventListener(`navigateerror`, t),
          setTimeout(n, 100),
          function () {
            ((r = !0),
              navigation.removeEventListener(`navigate`, e),
              navigation.removeEventListener(`navigatesuccess`, t),
              navigation.removeEventListener(`navigateerror`, t),
              i !== null && (i(), (i = null)));
          }
        );
      }
    }
    function Rp(e) {
      this._internalRoot = e;
    }
    ((zp.prototype.render = Rp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        sp(n, hu(), e, t, null, null);
      }),
      (zp.prototype.unmount = Rp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (sp(e.current, 2, null, e, null, null), Su(), (t[ct] = null));
          }
        }));
    function zp(e) {
      this._internalRoot = e;
    }
    zp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = rt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < wp.length && t !== 0 && t < wp[n].priority; n++);
        (wp.splice(n, 0, e), n === 0 && kp(e));
      }
    };
    var Bp = n.version;
    if (Bp !== `19.2.7`) throw Error(i(527, Bp, `19.2.7`));
    k.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return ((e = u(t)), (e = e === null ? null : d(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Vp = {
      bundleType: 0,
      version: `19.2.7`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: O,
      reconcilerVersion: `19.2.7`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Hp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Hp.isDisabled && Hp.supportsFiber)
        try {
          ((Pe = Hp.inject(Vp)), (Fe = Hp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = qs,
        s = Js,
        c = Ys;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ap(e, 1, !1, null, null, n, r, null, o, s, c, Lp)),
        (e[ct] = t.current),
        Td(e),
        new Rp(t)
      );
    };
  }),
  Wf = s((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = Uf()));
  });
function Gf(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Jf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Kf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function qf(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Jf,
  J,
  Yf = o(() => {
    ((Jf = function (e, t) {
      return (
        (Jf =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        Jf(e, t)
      );
    }),
      (J = function () {
        return (
          (J =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          J.apply(this, arguments)
        );
      }));
  }),
  Xf = o(() => {});
function Zf(e, t) {
  var n = t && t.cache ? t.cache : sp,
    r = t && t.serializer ? t.serializer : ap;
  return (t && t.strategy ? t.strategy : np)(e, { cache: n, serializer: r });
}
function Qf(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function $f(e, t, n, r) {
  var i = Qf(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function ep(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function tp(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function np(e, t) {
  var n = e.length === 1 ? $f : ep;
  return tp(e, this, n, t.cache.create(), t.serializer);
}
function rp(e, t) {
  return tp(e, this, ep, t.cache.create(), t.serializer);
}
function ip(e, t) {
  return tp(e, this, $f, t.cache.create(), t.serializer);
}
var ap,
  op,
  sp,
  cp,
  lp = o(() => {
    ((ap = function () {
      return JSON.stringify(arguments);
    }),
      (op = (function () {
        function e() {
          this.cache = Object.create(null);
        }
        return (
          (e.prototype.get = function (e) {
            return this.cache[e];
          }),
          (e.prototype.set = function (e, t) {
            this.cache[e] = t;
          }),
          e
        );
      })()),
      (sp = {
        create: function () {
          return new op();
        },
      }),
      (cp = { variadic: rp, monadic: ip }));
  }),
  Y,
  up = o(() => {
    (function (e) {
      ((e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] = `EXPECT_ARGUMENT_CLOSING_BRACE`),
        (e[(e.EMPTY_ARGUMENT = 2)] = `EMPTY_ARGUMENT`),
        (e[(e.MALFORMED_ARGUMENT = 3)] = `MALFORMED_ARGUMENT`),
        (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = `EXPECT_ARGUMENT_TYPE`),
        (e[(e.INVALID_ARGUMENT_TYPE = 5)] = `INVALID_ARGUMENT_TYPE`),
        (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = `EXPECT_ARGUMENT_STYLE`),
        (e[(e.INVALID_NUMBER_SKELETON = 7)] = `INVALID_NUMBER_SKELETON`),
        (e[(e.INVALID_DATE_TIME_SKELETON = 8)] = `INVALID_DATE_TIME_SKELETON`),
        (e[(e.EXPECT_NUMBER_SKELETON = 9)] = `EXPECT_NUMBER_SKELETON`),
        (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = `EXPECT_DATE_TIME_SKELETON`),
        (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] = `UNCLOSED_QUOTE_IN_ARGUMENT_STYLE`),
        (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] = `EXPECT_SELECT_ARGUMENT_OPTIONS`),
        (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] = `EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE`),
        (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] = `INVALID_PLURAL_ARGUMENT_OFFSET_VALUE`),
        (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] = `EXPECT_SELECT_ARGUMENT_SELECTOR`),
        (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] = `EXPECT_PLURAL_ARGUMENT_SELECTOR`),
        (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] = `EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT`),
        (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] = `EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT`),
        (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = `INVALID_PLURAL_ARGUMENT_SELECTOR`),
        (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = `DUPLICATE_PLURAL_ARGUMENT_SELECTOR`),
        (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = `DUPLICATE_SELECT_ARGUMENT_SELECTOR`),
        (e[(e.MISSING_OTHER_CLAUSE = 22)] = `MISSING_OTHER_CLAUSE`),
        (e[(e.INVALID_TAG = 23)] = `INVALID_TAG`),
        (e[(e.INVALID_TAG_NAME = 25)] = `INVALID_TAG_NAME`),
        (e[(e.UNMATCHED_CLOSING_TAG = 26)] = `UNMATCHED_CLOSING_TAG`),
        (e[(e.UNCLOSED_TAG = 27)] = `UNCLOSED_TAG`));
    })((Y ||= {}));
  });
function dp(e) {
  return e.type === X.literal;
}
function fp(e) {
  return e.type === X.argument;
}
function pp(e) {
  return e.type === X.number;
}
function mp(e) {
  return e.type === X.date;
}
function hp(e) {
  return e.type === X.time;
}
function gp(e) {
  return e.type === X.select;
}
function _p(e) {
  return e.type === X.plural;
}
function vp(e) {
  return e.type === X.pound;
}
function yp(e) {
  return e.type === X.tag;
}
function bp(e) {
  return !!(e && typeof e == `object` && e.type === Sp.number);
}
function xp(e) {
  return !!(e && typeof e == `object` && e.type === Sp.dateTime);
}
var X,
  Sp,
  Cp = o(() => {
    ((function (e) {
      ((e[(e.literal = 0)] = `literal`),
        (e[(e.argument = 1)] = `argument`),
        (e[(e.number = 2)] = `number`),
        (e[(e.date = 3)] = `date`),
        (e[(e.time = 4)] = `time`),
        (e[(e.select = 5)] = `select`),
        (e[(e.plural = 6)] = `plural`),
        (e[(e.pound = 7)] = `pound`),
        (e[(e.tag = 8)] = `tag`));
    })((X ||= {})),
      (function (e) {
        ((e[(e.number = 0)] = `number`), (e[(e.dateTime = 1)] = `dateTime`));
      })((Sp ||= {})));
  }),
  wp,
  Tp = o(() => {
    wp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  });
function Ep(e) {
  var t = {};
  return (
    e.replace(Dp, function (e) {
      var n = e.length;
      switch (e[0]) {
        case `G`:
          t.era = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `y`:
          t.year = n === 2 ? `2-digit` : `numeric`;
          break;
        case `Y`:
        case `u`:
        case `U`:
        case `r`:
          throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        case `q`:
        case `Q`:
          throw RangeError("`q/Q` (quarter) patterns are not supported");
        case `M`:
        case `L`:
          t.month = [`numeric`, `2-digit`, `short`, `long`, `narrow`][n - 1];
          break;
        case `w`:
        case `W`:
          throw RangeError("`w/W` (week) patterns are not supported");
        case `d`:
          t.day = [`numeric`, `2-digit`][n - 1];
          break;
        case `D`:
        case `F`:
        case `g`:
          throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        case `E`:
          t.weekday = n === 4 ? `long` : n === 5 ? `narrow` : `short`;
          break;
        case `e`:
          if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `c`:
          if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
          t.weekday = [`short`, `long`, `narrow`, `short`][n - 4];
          break;
        case `a`:
          t.hour12 = !0;
          break;
        case `b`:
        case `B`:
          throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        case `h`:
          ((t.hourCycle = `h12`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `H`:
          ((t.hourCycle = `h23`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `K`:
          ((t.hourCycle = `h11`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `k`:
          ((t.hourCycle = `h24`), (t.hour = [`numeric`, `2-digit`][n - 1]));
          break;
        case `j`:
        case `J`:
        case `C`:
          throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        case `m`:
          t.minute = [`numeric`, `2-digit`][n - 1];
          break;
        case `s`:
          t.second = [`numeric`, `2-digit`][n - 1];
          break;
        case `S`:
        case `A`:
          throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        case `z`:
          t.timeZoneName = n < 4 ? `short` : `long`;
          break;
        case `Z`:
        case `O`:
        case `v`:
        case `V`:
        case `X`:
        case `x`:
          throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
      }
      return ``;
    }),
    t
  );
}
var Dp,
  Op = o(() => {
    Dp =
      /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  }),
  kp,
  Ap = o(() => {
    kp = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  });
function jp(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  for (
    var t = e.split(kp).filter(function (e) {
        return e.length > 0;
      }),
      n = [],
      r = 0,
      i = t;
    r < i.length;
    r++
  ) {
    var a = i[r].split(`/`);
    if (a.length === 0) throw Error(`Invalid number skeleton`);
    for (var o = a[0], s = a.slice(1), c = 0, l = s; c < l.length; c++)
      if (l[c].length === 0) throw Error(`Invalid number skeleton`);
    n.push({ stem: o, options: s });
  }
  return n;
}
function Mp(e) {
  return e.replace(/^(.*?)-/, ``);
}
function Np(e) {
  var t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(zp, function (e, n, r) {
      return (
        typeof r == `string`
          ? r === `+`
            ? (t.minimumSignificantDigits = n.length)
            : n[0] === `#`
              ? (t.maximumSignificantDigits = n.length)
              : ((t.minimumSignificantDigits = n.length),
                (t.maximumSignificantDigits = n.length + (typeof r == `string` ? r.length : 0)))
          : ((t.minimumSignificantDigits = n.length), (t.maximumSignificantDigits = n.length)),
        ``
      );
    }),
    t
  );
}
function Pp(e) {
  switch (e) {
    case `sign-auto`:
      return { signDisplay: `auto` };
    case `sign-accounting`:
    case `()`:
      return { currencySign: `accounting` };
    case `sign-always`:
    case `+!`:
      return { signDisplay: `always` };
    case `sign-accounting-always`:
    case `()!`:
      return { signDisplay: `always`, currencySign: `accounting` };
    case `sign-except-zero`:
    case `+?`:
      return { signDisplay: `exceptZero` };
    case `sign-accounting-except-zero`:
    case `()?`:
      return { signDisplay: `exceptZero`, currencySign: `accounting` };
    case `sign-never`:
    case `+_`:
      return { signDisplay: `never` };
  }
}
function Fp(e) {
  var t;
  if (
    (e[0] === `E` && e[1] === `E`
      ? ((t = { notation: `engineering` }), (e = e.slice(2)))
      : e[0] === `E` && ((t = { notation: `scientific` }), (e = e.slice(1))),
    t)
  ) {
    var n = e.slice(0, 2);
    if (
      (n === `+!`
        ? ((t.signDisplay = `always`), (e = e.slice(2)))
        : n === `+?` && ((t.signDisplay = `exceptZero`), (e = e.slice(2))),
      !Vp.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Ip(e) {
  return Pp(e) || {};
}
function Lp(e) {
  for (var t = {}, n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    switch (i.stem) {
      case `percent`:
      case `%`:
        t.style = `percent`;
        continue;
      case `%x100`:
        ((t.style = `percent`), (t.scale = 100));
        continue;
      case `currency`:
        ((t.style = `currency`), (t.currency = i.options[0]));
        continue;
      case `group-off`:
      case `,_`:
        t.useGrouping = !1;
        continue;
      case `precision-integer`:
      case `.`:
        t.maximumFractionDigits = 0;
        continue;
      case `measure-unit`:
      case `unit`:
        ((t.style = `unit`), (t.unit = Mp(i.options[0])));
        continue;
      case `compact-short`:
      case `K`:
        ((t.notation = `compact`), (t.compactDisplay = `short`));
        continue;
      case `compact-long`:
      case `KK`:
        ((t.notation = `compact`), (t.compactDisplay = `long`));
        continue;
      case `scientific`:
        t = J(
          J(J({}, t), { notation: `scientific` }),
          i.options.reduce(function (e, t) {
            return J(J({}, e), Ip(t));
          }, {}),
        );
        continue;
      case `engineering`:
        t = J(
          J(J({}, t), { notation: `engineering` }),
          i.options.reduce(function (e, t) {
            return J(J({}, e), Ip(t));
          }, {}),
        );
        continue;
      case `notation-simple`:
        t.notation = `standard`;
        continue;
      case `unit-width-narrow`:
        ((t.currencyDisplay = `narrowSymbol`), (t.unitDisplay = `narrow`));
        continue;
      case `unit-width-short`:
        ((t.currencyDisplay = `code`), (t.unitDisplay = `short`));
        continue;
      case `unit-width-full-name`:
        ((t.currencyDisplay = `name`), (t.unitDisplay = `long`));
        continue;
      case `unit-width-iso-code`:
        t.currencyDisplay = `symbol`;
        continue;
      case `scale`:
        t.scale = parseFloat(i.options[0]);
        continue;
      case `rounding-mode-floor`:
        t.roundingMode = `floor`;
        continue;
      case `rounding-mode-ceiling`:
        t.roundingMode = `ceil`;
        continue;
      case `rounding-mode-down`:
        t.roundingMode = `trunc`;
        continue;
      case `rounding-mode-up`:
        t.roundingMode = `expand`;
        continue;
      case `rounding-mode-half-even`:
        t.roundingMode = `halfEven`;
        continue;
      case `rounding-mode-half-down`:
        t.roundingMode = `halfTrunc`;
        continue;
      case `rounding-mode-half-up`:
        t.roundingMode = `halfExpand`;
        continue;
      case `integer-width`:
        if (i.options.length > 1)
          throw RangeError(`integer-width stems only accept a single optional option`);
        i.options[0].replace(Bp, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a) throw Error(`We currently do not support maximum integer digits`);
          else if (o) throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (Vp.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Rp.test(i.stem)) {
      if (i.options.length > 1)
        throw RangeError(`Fraction-precision stems only accept a single optional option`);
      i.stem.replace(Rp, function (e, n, r, i, a, o) {
        return (
          r === `*`
            ? (t.minimumFractionDigits = n.length)
            : i && i[0] === `#`
              ? (t.maximumFractionDigits = i.length)
              : a && o
                ? ((t.minimumFractionDigits = a.length), (t.maximumFractionDigits = a.length + o.length))
                : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)),
          ``
        );
      });
      var a = i.options[0];
      a === `w`
        ? (t = J(J({}, t), { trailingZeroDisplay: `stripIfInteger` }))
        : a && (t = J(J({}, t), Np(a)));
      continue;
    }
    if (zp.test(i.stem)) {
      t = J(J({}, t), Np(i.stem));
      continue;
    }
    var o = Pp(i.stem);
    o && (t = J(J({}, t), o));
    var s = Fp(i.stem);
    s && (t = J(J({}, t), s));
  }
  return t;
}
var Rp,
  zp,
  Bp,
  Vp,
  Hp = o(() => {
    (Yf(),
      Ap(),
      (Rp = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g),
      (zp = /^(@+)?(\+|#+)?[rs]?$/g),
      (Bp = /(\*)(0+)|(#+)(0+)|(0+)/g),
      (Vp = /^(0+)$/));
  }),
  Up = o(() => {
    (Op(), Hp());
  }),
  Wp,
  Gp = o(() => {
    Wp = {
      "001": [`H`, `h`],
      419: [`h`, `H`, `hB`, `hb`],
      AC: [`H`, `h`, `hb`, `hB`],
      AD: [`H`, `hB`],
      AE: [`h`, `hB`, `hb`, `H`],
      AF: [`H`, `hb`, `hB`, `h`],
      AG: [`h`, `hb`, `H`, `hB`],
      AI: [`H`, `h`, `hb`, `hB`],
      AL: [`h`, `H`, `hB`],
      AM: [`H`, `hB`],
      AO: [`H`, `hB`],
      AR: [`h`, `H`, `hB`, `hb`],
      AS: [`h`, `H`],
      AT: [`H`, `hB`],
      AU: [`h`, `hb`, `H`, `hB`],
      AW: [`H`, `hB`],
      AX: [`H`],
      AZ: [`H`, `hB`, `h`],
      BA: [`H`, `hB`, `h`],
      BB: [`h`, `hb`, `H`, `hB`],
      BD: [`h`, `hB`, `H`],
      BE: [`H`, `hB`],
      BF: [`H`, `hB`],
      BG: [`H`, `hB`, `h`],
      BH: [`h`, `hB`, `hb`, `H`],
      BI: [`H`, `h`],
      BJ: [`H`, `hB`],
      BL: [`H`, `hB`],
      BM: [`h`, `hb`, `H`, `hB`],
      BN: [`hb`, `hB`, `h`, `H`],
      BO: [`h`, `H`, `hB`, `hb`],
      BQ: [`H`],
      BR: [`H`, `hB`],
      BS: [`h`, `hb`, `H`, `hB`],
      BT: [`h`, `H`],
      BW: [`H`, `h`, `hb`, `hB`],
      BY: [`H`, `h`],
      BZ: [`H`, `h`, `hb`, `hB`],
      CA: [`h`, `hb`, `H`, `hB`],
      CC: [`H`, `h`, `hb`, `hB`],
      CD: [`hB`, `H`],
      CF: [`H`, `h`, `hB`],
      CG: [`H`, `hB`],
      CH: [`H`, `hB`, `h`],
      CI: [`H`, `hB`],
      CK: [`H`, `h`, `hb`, `hB`],
      CL: [`h`, `H`, `hB`, `hb`],
      CM: [`H`, `h`, `hB`],
      CN: [`H`, `hB`, `hb`, `h`],
      CO: [`h`, `H`, `hB`, `hb`],
      CP: [`H`],
      CR: [`h`, `H`, `hB`, `hb`],
      CU: [`h`, `H`, `hB`, `hb`],
      CV: [`H`, `hB`],
      CW: [`H`, `hB`],
      CX: [`H`, `h`, `hb`, `hB`],
      CY: [`h`, `H`, `hb`, `hB`],
      CZ: [`H`],
      DE: [`H`, `hB`],
      DG: [`H`, `h`, `hb`, `hB`],
      DJ: [`h`, `H`],
      DK: [`H`],
      DM: [`h`, `hb`, `H`, `hB`],
      DO: [`h`, `H`, `hB`, `hb`],
      DZ: [`h`, `hB`, `hb`, `H`],
      EA: [`H`, `h`, `hB`, `hb`],
      EC: [`h`, `H`, `hB`, `hb`],
      EE: [`H`, `hB`],
      EG: [`h`, `hB`, `hb`, `H`],
      EH: [`h`, `hB`, `hb`, `H`],
      ER: [`h`, `H`],
      ES: [`H`, `hB`, `h`, `hb`],
      ET: [`hB`, `hb`, `h`, `H`],
      FI: [`H`],
      FJ: [`h`, `hb`, `H`, `hB`],
      FK: [`H`, `h`, `hb`, `hB`],
      FM: [`h`, `hb`, `H`, `hB`],
      FO: [`H`, `h`],
      FR: [`H`, `hB`],
      GA: [`H`, `hB`],
      GB: [`H`, `h`, `hb`, `hB`],
      GD: [`h`, `hb`, `H`, `hB`],
      GE: [`H`, `hB`, `h`],
      GF: [`H`, `hB`],
      GG: [`H`, `h`, `hb`, `hB`],
      GH: [`h`, `H`],
      GI: [`H`, `h`, `hb`, `hB`],
      GL: [`H`, `h`],
      GM: [`h`, `hb`, `H`, `hB`],
      GN: [`H`, `hB`],
      GP: [`H`, `hB`],
      GQ: [`H`, `hB`, `h`, `hb`],
      GR: [`h`, `H`, `hb`, `hB`],
      GT: [`h`, `H`, `hB`, `hb`],
      GU: [`h`, `hb`, `H`, `hB`],
      GW: [`H`, `hB`],
      GY: [`h`, `hb`, `H`, `hB`],
      HK: [`h`, `hB`, `hb`, `H`],
      HN: [`h`, `H`, `hB`, `hb`],
      HR: [`H`, `hB`],
      HU: [`H`, `h`],
      IC: [`H`, `h`, `hB`, `hb`],
      ID: [`H`],
      IE: [`H`, `h`, `hb`, `hB`],
      IL: [`H`, `hB`],
      IM: [`H`, `h`, `hb`, `hB`],
      IN: [`h`, `H`],
      IO: [`H`, `h`, `hb`, `hB`],
      IQ: [`h`, `hB`, `hb`, `H`],
      IR: [`hB`, `H`],
      IS: [`H`],
      IT: [`H`, `hB`],
      JE: [`H`, `h`, `hb`, `hB`],
      JM: [`h`, `hb`, `H`, `hB`],
      JO: [`h`, `hB`, `hb`, `H`],
      JP: [`H`, `K`, `h`],
      KE: [`hB`, `hb`, `H`, `h`],
      KG: [`H`, `h`, `hB`, `hb`],
      KH: [`hB`, `h`, `H`, `hb`],
      KI: [`h`, `hb`, `H`, `hB`],
      KM: [`H`, `h`, `hB`, `hb`],
      KN: [`h`, `hb`, `H`, `hB`],
      KP: [`h`, `H`, `hB`, `hb`],
      KR: [`h`, `H`, `hB`, `hb`],
      KW: [`h`, `hB`, `hb`, `H`],
      KY: [`h`, `hb`, `H`, `hB`],
      KZ: [`H`, `hB`],
      LA: [`H`, `hb`, `hB`, `h`],
      LB: [`h`, `hB`, `hb`, `H`],
      LC: [`h`, `hb`, `H`, `hB`],
      LI: [`H`, `hB`, `h`],
      LK: [`H`, `h`, `hB`, `hb`],
      LR: [`h`, `hb`, `H`, `hB`],
      LS: [`h`, `H`],
      LT: [`H`, `h`, `hb`, `hB`],
      LU: [`H`, `h`, `hB`],
      LV: [`H`, `hB`, `hb`, `h`],
      LY: [`h`, `hB`, `hb`, `H`],
      MA: [`H`, `h`, `hB`, `hb`],
      MC: [`H`, `hB`],
      MD: [`H`, `hB`],
      ME: [`H`, `hB`, `h`],
      MF: [`H`, `hB`],
      MG: [`H`, `h`],
      MH: [`h`, `hb`, `H`, `hB`],
      MK: [`H`, `h`, `hb`, `hB`],
      ML: [`H`],
      MM: [`hB`, `hb`, `H`, `h`],
      MN: [`H`, `h`, `hb`, `hB`],
      MO: [`h`, `hB`, `hb`, `H`],
      MP: [`h`, `hb`, `H`, `hB`],
      MQ: [`H`, `hB`],
      MR: [`h`, `hB`, `hb`, `H`],
      MS: [`H`, `h`, `hb`, `hB`],
      MT: [`H`, `h`],
      MU: [`H`, `h`],
      MV: [`H`, `h`],
      MW: [`h`, `hb`, `H`, `hB`],
      MX: [`h`, `H`, `hB`, `hb`],
      MY: [`hb`, `hB`, `h`, `H`],
      MZ: [`H`, `hB`],
      NA: [`h`, `H`, `hB`, `hb`],
      NC: [`H`, `hB`],
      NE: [`H`],
      NF: [`H`, `h`, `hb`, `hB`],
      NG: [`H`, `h`, `hb`, `hB`],
      NI: [`h`, `H`, `hB`, `hb`],
      NL: [`H`, `hB`],
      NO: [`H`, `h`],
      NP: [`H`, `h`, `hB`],
      NR: [`H`, `h`, `hb`, `hB`],
      NU: [`H`, `h`, `hb`, `hB`],
      NZ: [`h`, `hb`, `H`, `hB`],
      OM: [`h`, `hB`, `hb`, `H`],
      PA: [`h`, `H`, `hB`, `hb`],
      PE: [`h`, `H`, `hB`, `hb`],
      PF: [`H`, `h`, `hB`],
      PG: [`h`, `H`],
      PH: [`h`, `hB`, `hb`, `H`],
      PK: [`h`, `hB`, `H`],
      PL: [`H`, `h`],
      PM: [`H`, `hB`],
      PN: [`H`, `h`, `hb`, `hB`],
      PR: [`h`, `H`, `hB`, `hb`],
      PS: [`h`, `hB`, `hb`, `H`],
      PT: [`H`, `hB`],
      PW: [`h`, `H`],
      PY: [`h`, `H`, `hB`, `hb`],
      QA: [`h`, `hB`, `hb`, `H`],
      RE: [`H`, `hB`],
      RO: [`H`, `hB`],
      RS: [`H`, `hB`, `h`],
      RU: [`H`],
      RW: [`H`, `h`],
      SA: [`h`, `hB`, `hb`, `H`],
      SB: [`h`, `hb`, `H`, `hB`],
      SC: [`H`, `h`, `hB`],
      SD: [`h`, `hB`, `hb`, `H`],
      SE: [`H`],
      SG: [`h`, `hb`, `H`, `hB`],
      SH: [`H`, `h`, `hb`, `hB`],
      SI: [`H`, `hB`],
      SJ: [`H`],
      SK: [`H`],
      SL: [`h`, `hb`, `H`, `hB`],
      SM: [`H`, `h`, `hB`],
      SN: [`H`, `h`, `hB`],
      SO: [`h`, `H`],
      SR: [`H`, `hB`],
      SS: [`h`, `hb`, `H`, `hB`],
      ST: [`H`, `hB`],
      SV: [`h`, `H`, `hB`, `hb`],
      SX: [`H`, `h`, `hb`, `hB`],
      SY: [`h`, `hB`, `hb`, `H`],
      SZ: [`h`, `hb`, `H`, `hB`],
      TA: [`H`, `h`, `hb`, `hB`],
      TC: [`h`, `hb`, `H`, `hB`],
      TD: [`h`, `H`, `hB`],
      TF: [`H`, `h`, `hB`],
      TG: [`H`, `hB`],
      TH: [`H`, `h`],
      TJ: [`H`, `h`],
      TL: [`H`, `hB`, `hb`, `h`],
      TM: [`H`, `h`],
      TN: [`h`, `hB`, `hb`, `H`],
      TO: [`h`, `H`],
      TR: [`H`, `hB`],
      TT: [`h`, `hb`, `H`, `hB`],
      TW: [`hB`, `hb`, `h`, `H`],
      TZ: [`hB`, `hb`, `H`, `h`],
      UA: [`H`, `hB`, `h`],
      UG: [`hB`, `hb`, `H`, `h`],
      UM: [`h`, `hb`, `H`, `hB`],
      US: [`h`, `hb`, `H`, `hB`],
      UY: [`h`, `H`, `hB`, `hb`],
      UZ: [`H`, `hB`, `h`],
      VA: [`H`, `h`, `hB`],
      VC: [`h`, `hb`, `H`, `hB`],
      VE: [`h`, `H`, `hB`, `hb`],
      VG: [`h`, `hb`, `H`, `hB`],
      VI: [`h`, `hb`, `H`, `hB`],
      VN: [`H`, `h`],
      VU: [`h`, `H`],
      WF: [`H`, `hB`],
      WS: [`h`, `H`],
      XK: [`H`, `hB`, `h`],
      YE: [`h`, `hB`, `hb`, `H`],
      YT: [`H`, `hB`],
      ZA: [`H`, `h`, `hb`, `hB`],
      ZM: [`h`, `hb`, `H`, `hB`],
      ZW: [`H`, `h`],
      "af-ZA": [`H`, `h`, `hB`, `hb`],
      "ar-001": [`h`, `hB`, `hb`, `H`],
      "ca-ES": [`H`, `h`, `hB`],
      "en-001": [`h`, `hb`, `H`, `hB`],
      "en-HK": [`h`, `hb`, `H`, `hB`],
      "en-IL": [`H`, `h`, `hb`, `hB`],
      "en-MY": [`h`, `hb`, `H`, `hB`],
      "es-BR": [`H`, `h`, `hB`, `hb`],
      "es-ES": [`H`, `h`, `hB`, `hb`],
      "es-GQ": [`H`, `h`, `hB`, `hb`],
      "fr-CA": [`H`, `h`, `hB`],
      "gl-ES": [`H`, `h`, `hB`],
      "gu-IN": [`hB`, `hb`, `h`, `H`],
      "hi-IN": [`hB`, `h`, `H`],
      "it-CH": [`H`, `h`, `hB`],
      "it-IT": [`H`, `h`, `hB`],
      "kn-IN": [`hB`, `h`, `H`],
      "ml-IN": [`hB`, `h`, `H`],
      "mr-IN": [`hB`, `hb`, `h`, `H`],
      "pa-IN": [`hB`, `hb`, `h`, `H`],
      "ta-IN": [`hB`, `h`, `hb`, `H`],
      "te-IN": [`hB`, `h`, `H`],
      "zu-ZA": [`H`, `hB`, `hb`, `h`],
    };
  });
function Kp(e, t) {
  for (var n = ``, r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === `j`) {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) (a++, r++);
      var o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = `a`,
        l = qp(t);
      for ((l == `H` || l == `k`) && (s = 0); s-- > 0;) n += c;
      for (; o-- > 0;) n = l + n;
    } else n += i === `J` ? `H` : i;
  }
  return n;
}
function qp(e) {
  var t = e.hourCycle;
  if ((t === void 0 && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t))
    switch (t) {
      case `h24`:
        return `k`;
      case `h23`:
        return `H`;
      case `h12`:
        return `h`;
      case `h11`:
        return `K`;
      default:
        throw Error(`Invalid hourCycle`);
    }
  var n = e.language,
    r;
  return (
    n !== `root` && (r = e.maximize().region),
    (Wp[r || ``] || Wp[n || ``] || Wp[`${n}-001`] || Wp[`001`])[0]
  );
}
var Jp = o(() => {
  Gp();
});
function Z(e, t) {
  return { start: e, end: t };
}
function Yp(e, t) {
  return new RegExp(e, t);
}
function Xp(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Zp(e) {
  return Xp(e) || e === 47;
}
function Qp(e) {
  return (
    e === 45 ||
    e === 46 ||
    (e >= 48 && e <= 57) ||
    e === 95 ||
    (e >= 97 && e <= 122) ||
    (e >= 65 && e <= 90) ||
    e == 183 ||
    (e >= 192 && e <= 214) ||
    (e >= 216 && e <= 246) ||
    (e >= 248 && e <= 893) ||
    (e >= 895 && e <= 8191) ||
    (e >= 8204 && e <= 8205) ||
    (e >= 8255 && e <= 8256) ||
    (e >= 8304 && e <= 8591) ||
    (e >= 11264 && e <= 12271) ||
    (e >= 12289 && e <= 55295) ||
    (e >= 63744 && e <= 64975) ||
    (e >= 65008 && e <= 65533) ||
    (e >= 65536 && e <= 983039)
  );
}
function $p(e) {
  return (e >= 9 && e <= 13) || e === 32 || e === 133 || (e >= 8206 && e <= 8207) || e === 8232 || e === 8233;
}
function em(e) {
  return (
    (e >= 33 && e <= 35) ||
    e === 36 ||
    (e >= 37 && e <= 39) ||
    e === 40 ||
    e === 41 ||
    e === 42 ||
    e === 43 ||
    e === 44 ||
    e === 45 ||
    (e >= 46 && e <= 47) ||
    (e >= 58 && e <= 59) ||
    (e >= 60 && e <= 62) ||
    (e >= 63 && e <= 64) ||
    e === 91 ||
    e === 92 ||
    e === 93 ||
    e === 94 ||
    e === 96 ||
    e === 123 ||
    e === 124 ||
    e === 125 ||
    e === 126 ||
    e === 161 ||
    (e >= 162 && e <= 165) ||
    e === 166 ||
    e === 167 ||
    e === 169 ||
    e === 171 ||
    e === 172 ||
    e === 174 ||
    e === 176 ||
    e === 177 ||
    e === 182 ||
    e === 187 ||
    e === 191 ||
    e === 215 ||
    e === 247 ||
    (e >= 8208 && e <= 8213) ||
    (e >= 8214 && e <= 8215) ||
    e === 8216 ||
    e === 8217 ||
    e === 8218 ||
    (e >= 8219 && e <= 8220) ||
    e === 8221 ||
    e === 8222 ||
    e === 8223 ||
    (e >= 8224 && e <= 8231) ||
    (e >= 8240 && e <= 8248) ||
    e === 8249 ||
    e === 8250 ||
    (e >= 8251 && e <= 8254) ||
    (e >= 8257 && e <= 8259) ||
    e === 8260 ||
    e === 8261 ||
    e === 8262 ||
    (e >= 8263 && e <= 8273) ||
    e === 8274 ||
    e === 8275 ||
    (e >= 8277 && e <= 8286) ||
    (e >= 8592 && e <= 8596) ||
    (e >= 8597 && e <= 8601) ||
    (e >= 8602 && e <= 8603) ||
    (e >= 8604 && e <= 8607) ||
    e === 8608 ||
    (e >= 8609 && e <= 8610) ||
    e === 8611 ||
    (e >= 8612 && e <= 8613) ||
    e === 8614 ||
    (e >= 8615 && e <= 8621) ||
    e === 8622 ||
    (e >= 8623 && e <= 8653) ||
    (e >= 8654 && e <= 8655) ||
    (e >= 8656 && e <= 8657) ||
    e === 8658 ||
    e === 8659 ||
    e === 8660 ||
    (e >= 8661 && e <= 8691) ||
    (e >= 8692 && e <= 8959) ||
    (e >= 8960 && e <= 8967) ||
    e === 8968 ||
    e === 8969 ||
    e === 8970 ||
    e === 8971 ||
    (e >= 8972 && e <= 8991) ||
    (e >= 8992 && e <= 8993) ||
    (e >= 8994 && e <= 9e3) ||
    e === 9001 ||
    e === 9002 ||
    (e >= 9003 && e <= 9083) ||
    e === 9084 ||
    (e >= 9085 && e <= 9114) ||
    (e >= 9115 && e <= 9139) ||
    (e >= 9140 && e <= 9179) ||
    (e >= 9180 && e <= 9185) ||
    (e >= 9186 && e <= 9254) ||
    (e >= 9255 && e <= 9279) ||
    (e >= 9280 && e <= 9290) ||
    (e >= 9291 && e <= 9311) ||
    (e >= 9472 && e <= 9654) ||
    e === 9655 ||
    (e >= 9656 && e <= 9664) ||
    e === 9665 ||
    (e >= 9666 && e <= 9719) ||
    (e >= 9720 && e <= 9727) ||
    (e >= 9728 && e <= 9838) ||
    e === 9839 ||
    (e >= 9840 && e <= 10087) ||
    e === 10088 ||
    e === 10089 ||
    e === 10090 ||
    e === 10091 ||
    e === 10092 ||
    e === 10093 ||
    e === 10094 ||
    e === 10095 ||
    e === 10096 ||
    e === 10097 ||
    e === 10098 ||
    e === 10099 ||
    e === 10100 ||
    e === 10101 ||
    (e >= 10132 && e <= 10175) ||
    (e >= 10176 && e <= 10180) ||
    e === 10181 ||
    e === 10182 ||
    (e >= 10183 && e <= 10213) ||
    e === 10214 ||
    e === 10215 ||
    e === 10216 ||
    e === 10217 ||
    e === 10218 ||
    e === 10219 ||
    e === 10220 ||
    e === 10221 ||
    e === 10222 ||
    e === 10223 ||
    (e >= 10224 && e <= 10239) ||
    (e >= 10240 && e <= 10495) ||
    (e >= 10496 && e <= 10626) ||
    e === 10627 ||
    e === 10628 ||
    e === 10629 ||
    e === 10630 ||
    e === 10631 ||
    e === 10632 ||
    e === 10633 ||
    e === 10634 ||
    e === 10635 ||
    e === 10636 ||
    e === 10637 ||
    e === 10638 ||
    e === 10639 ||
    e === 10640 ||
    e === 10641 ||
    e === 10642 ||
    e === 10643 ||
    e === 10644 ||
    e === 10645 ||
    e === 10646 ||
    e === 10647 ||
    e === 10648 ||
    (e >= 10649 && e <= 10711) ||
    e === 10712 ||
    e === 10713 ||
    e === 10714 ||
    e === 10715 ||
    (e >= 10716 && e <= 10747) ||
    e === 10748 ||
    e === 10749 ||
    (e >= 10750 && e <= 11007) ||
    (e >= 11008 && e <= 11055) ||
    (e >= 11056 && e <= 11076) ||
    (e >= 11077 && e <= 11078) ||
    (e >= 11079 && e <= 11084) ||
    (e >= 11085 && e <= 11123) ||
    (e >= 11124 && e <= 11125) ||
    (e >= 11126 && e <= 11157) ||
    e === 11158 ||
    (e >= 11159 && e <= 11263) ||
    (e >= 11776 && e <= 11777) ||
    e === 11778 ||
    e === 11779 ||
    e === 11780 ||
    e === 11781 ||
    (e >= 11782 && e <= 11784) ||
    e === 11785 ||
    e === 11786 ||
    e === 11787 ||
    e === 11788 ||
    e === 11789 ||
    (e >= 11790 && e <= 11798) ||
    e === 11799 ||
    (e >= 11800 && e <= 11801) ||
    e === 11802 ||
    e === 11803 ||
    e === 11804 ||
    e === 11805 ||
    (e >= 11806 && e <= 11807) ||
    e === 11808 ||
    e === 11809 ||
    e === 11810 ||
    e === 11811 ||
    e === 11812 ||
    e === 11813 ||
    e === 11814 ||
    e === 11815 ||
    e === 11816 ||
    e === 11817 ||
    (e >= 11818 && e <= 11822) ||
    e === 11823 ||
    (e >= 11824 && e <= 11833) ||
    (e >= 11834 && e <= 11835) ||
    (e >= 11836 && e <= 11839) ||
    e === 11840 ||
    e === 11841 ||
    e === 11842 ||
    (e >= 11843 && e <= 11855) ||
    (e >= 11856 && e <= 11857) ||
    e === 11858 ||
    (e >= 11859 && e <= 11903) ||
    (e >= 12289 && e <= 12291) ||
    e === 12296 ||
    e === 12297 ||
    e === 12298 ||
    e === 12299 ||
    e === 12300 ||
    e === 12301 ||
    e === 12302 ||
    e === 12303 ||
    e === 12304 ||
    e === 12305 ||
    (e >= 12306 && e <= 12307) ||
    e === 12308 ||
    e === 12309 ||
    e === 12310 ||
    e === 12311 ||
    e === 12312 ||
    e === 12313 ||
    e === 12314 ||
    e === 12315 ||
    e === 12316 ||
    e === 12317 ||
    (e >= 12318 && e <= 12319) ||
    e === 12320 ||
    e === 12336 ||
    e === 64830 ||
    e === 64831 ||
    (e >= 65093 && e <= 65094)
  );
}
var tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm = o(() => {
    (Yf(),
      up(),
      Cp(),
      Tp(),
      Up(),
      Jp(),
      (tm = RegExp(`^${wp.source}*`)),
      (nm = RegExp(`${wp.source}*\$`)),
      (rm = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1)),
      (im = !!String.fromCodePoint),
      (am = !!Object.fromEntries),
      (om = !!String.prototype.codePointAt),
      (sm = !!String.prototype.trimStart),
      (cm = !!String.prototype.trimEnd),
      (lm = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
            return (
              typeof e == `number` && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
            );
          }),
      (um = !0));
    try {
      um = Yp(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] === `a`;
    } catch {
      um = !1;
    }
    ((dm = rm
      ? function (e, t, n) {
          return e.startsWith(t, n);
        }
      : function (e, t, n) {
          return e.slice(n, n + t.length) === t;
        }),
      (fm = im
        ? String.fromCodePoint
        : function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (var n = ``, r = e.length, i = 0, a; r > i;) {
              if (((a = e[i++]), a > 1114111)) throw RangeError(a + ` is not a valid code point`);
              n +=
                a < 65536
                  ? String.fromCharCode(a)
                  : String.fromCharCode(((a -= 65536) >> 10) + 55296, (a % 1024) + 56320);
            }
            return n;
          }),
      (pm = am
        ? Object.fromEntries
        : function (e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                a = i[0];
              t[a] = i[1];
            }
            return t;
          }),
      (mm = om
        ? function (e, t) {
            return e.codePointAt(t);
          }
        : function (e, t) {
            var n = e.length;
            if (!(t < 0 || t >= n)) {
              var r = e.charCodeAt(t),
                i;
              return r < 55296 || r > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343
                ? r
                : ((r - 55296) << 10) + (i - 56320) + 65536;
            }
          }),
      (hm = sm
        ? function (e) {
            return e.trimStart();
          }
        : function (e) {
            return e.replace(tm, ``);
          }),
      (gm = cm
        ? function (e) {
            return e.trimEnd();
          }
        : function (e) {
            return e.replace(nm, ``);
          }),
      um
        ? ((vm = Yp(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`)),
          (_m = function (e, t) {
            return ((vm.lastIndex = t), vm.exec(e)[1] ?? ``);
          }))
        : (_m = function (e, t) {
            for (var n = []; ;) {
              var r = mm(e, t);
              if (r === void 0 || $p(r) || em(r)) break;
              (n.push(r), (t += r >= 65536 ? 2 : 1));
            }
            return fm.apply(void 0, n);
          }),
      (ym = (function () {
        function e(e, t) {
          (t === void 0 && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons));
        }
        return (
          (e.prototype.parse = function () {
            if (this.offset() !== 0) throw Error(`parser can only be used once`);
            return this.parseMessage(0, ``, !1);
          }),
          (e.prototype.parseMessage = function (e, t, n) {
            for (var r = []; !this.isEOF();) {
              var i = this.char();
              if (i === 123) {
                var a = this.parseArgument(e, n);
                if (a.err) return a;
                r.push(a.val);
              } else if (i === 125 && e > 0) break;
              else if (i === 35 && (t === `plural` || t === `selectordinal`)) {
                var o = this.clonePosition();
                (this.bump(), r.push({ type: X.pound, location: Z(o, this.clonePosition()) }));
              } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
                if (n) break;
                return this.error(Y.UNMATCHED_CLOSING_TAG, Z(this.clonePosition(), this.clonePosition()));
              } else if (i === 60 && !this.ignoreTag && Xp(this.peek() || 0)) {
                var a = this.parseTag(e, t);
                if (a.err) return a;
                r.push(a.val);
              } else {
                var a = this.parseLiteral(e, t);
                if (a.err) return a;
                r.push(a.val);
              }
            }
            return { val: r, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var n = this.clonePosition();
            this.bump();
            var r = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf(`/>`)))
              return {
                val: { type: X.literal, value: `<${r}/>`, location: Z(n, this.clonePosition()) },
                err: null,
              };
            if (this.bumpIf(`>`)) {
              var i = this.parseMessage(e + 1, t, !0);
              if (i.err) return i;
              var a = i.val,
                o = this.clonePosition();
              if (this.bumpIf(`</`)) {
                if (this.isEOF() || !Xp(this.char()))
                  return this.error(Y.INVALID_TAG, Z(o, this.clonePosition()));
                var s = this.clonePosition();
                return r === this.parseTagName()
                  ? (this.bumpSpace(),
                    this.bumpIf(`>`)
                      ? {
                          val: { type: X.tag, value: r, children: a, location: Z(n, this.clonePosition()) },
                          err: null,
                        }
                      : this.error(Y.INVALID_TAG, Z(o, this.clonePosition())))
                  : this.error(Y.UNMATCHED_CLOSING_TAG, Z(s, this.clonePosition()));
              }
              return this.error(Y.UNCLOSED_TAG, Z(n, this.clonePosition()));
            }
            return this.error(Y.INVALID_TAG, Z(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && Qp(this.char());) this.bump();
            return this.message.slice(e, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var n = this.clonePosition(), r = ``; ;) {
              var i = this.tryParseQuote(t);
              if (i) {
                r += i;
                continue;
              }
              var a = this.tryParseUnquoted(e, t);
              if (a) {
                r += a;
                continue;
              }
              var o = this.tryParseLeftAngleBracket();
              if (o) {
                r += o;
                continue;
              }
              break;
            }
            var s = Z(n, this.clonePosition());
            return { val: { type: X.literal, value: r, location: s }, err: null };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Zp(this.peek() || 0))
              ? (this.bump(), `<`)
              : null;
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || this.char() !== 39) return null;
            switch (this.peek()) {
              case 39:
                return (this.bump(), this.bump(), `'`);
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if (e === `plural` || e === `selectordinal`) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF();) {
              var n = this.char();
              if (n === 39) {
                if (this.peek() === 39) (t.push(39), this.bump());
                else {
                  this.bump();
                  break;
                }
              } else t.push(n);
              this.bump();
            }
            return fm.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return n === 60 ||
              n === 123 ||
              (n === 35 && (t === `plural` || t === `selectordinal`)) ||
              (n === 125 && e > 0)
              ? null
              : (this.bump(), fm(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
            if (this.char() === 125)
              return (this.bump(), this.error(Y.EMPTY_ARGUMENT, Z(n, this.clonePosition())));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(Y.MALFORMED_ARGUMENT, Z(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  { val: { type: X.argument, value: r, location: Z(n, this.clonePosition()) }, err: null }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()))
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(Y.MALFORMED_ARGUMENT, Z(n, this.clonePosition()));
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = _m(this.message, t),
              r = t + n.length;
            return (this.bumpTo(r), { value: n, location: Z(e, this.clonePosition()) });
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              o = this.clonePosition();
            switch (a) {
              case ``:
                return this.error(Y.EXPECT_ARGUMENT_TYPE, Z(i, o));
              case `number`:
              case `date`:
              case `time`:
                this.bumpSpace();
                var s = null;
                if (this.bumpIf(`,`)) {
                  this.bumpSpace();
                  var c = this.clonePosition(),
                    l = this.parseSimpleArgStyleIfPossible();
                  if (l.err) return l;
                  var u = gm(l.val);
                  if (u.length === 0)
                    return this.error(Y.EXPECT_ARGUMENT_STYLE, Z(this.clonePosition(), this.clonePosition()));
                  s = { style: u, styleLocation: Z(c, this.clonePosition()) };
                }
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var f = Z(r, this.clonePosition());
                if (s && dm(s?.style, `::`, 0)) {
                  var p = hm(s.style.slice(2));
                  if (a === `number`) {
                    var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
                    return l.err
                      ? l
                      : { val: { type: X.number, value: n, location: f, style: l.val }, err: null };
                  }
                  if (p.length === 0) return this.error(Y.EXPECT_DATE_TIME_SKELETON, f);
                  var m = p;
                  this.locale && (m = Kp(p, this.locale));
                  var u = {
                    type: Sp.dateTime,
                    pattern: m,
                    location: s.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? Ep(m) : {},
                  };
                  return {
                    val: { type: a === `date` ? X.date : X.time, value: n, location: f, style: u },
                    err: null,
                  };
                }
                return {
                  val: {
                    type: a === `number` ? X.number : a === `date` ? X.date : X.time,
                    value: n,
                    location: f,
                    style: s?.style ?? null,
                  },
                  err: null,
                };
              case `plural`:
              case `selectordinal`:
              case `select`:
                var h = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(`,`)))
                  return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, Z(h, J({}, h)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if (a !== `select` && g.value === `offset`) {
                  if (!this.bumpIf(`:`))
                    return this.error(
                      Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      Z(this.clonePosition(), this.clonePosition()),
                    );
                  this.bumpSpace();
                  var l = this.tryParseDecimalInteger(
                    Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    Y.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                  );
                  if (l.err) return l;
                  (this.bumpSpace(), (g = this.parseIdentifierIfPossible()), (_ = l.val));
                }
                var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
                if (v.err) return v;
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var y = Z(r, this.clonePosition());
                return a === `select`
                  ? { val: { type: X.select, value: n, options: pm(v.val), location: y }, err: null }
                  : {
                      val: {
                        type: X.plural,
                        value: n,
                        options: pm(v.val),
                        offset: _,
                        pluralType: a === `plural` ? `cardinal` : `ordinal`,
                        location: y,
                      },
                      err: null,
                    };
              default:
                return this.error(Y.INVALID_ARGUMENT_TYPE, Z(i, o));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || this.char() !== 125
              ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, Z(e, this.clonePosition()))
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF();)
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil(`'`))
                    return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Z(n, this.clonePosition()));
                  this.bump();
                  break;
                case 123:
                  ((e += 1), this.bump());
                  break;
                case 125:
                  if (e > 0) --e;
                  else return { val: this.message.slice(t.offset, this.offset()), err: null };
                  break;
                default:
                  this.bump();
              }
            return { val: this.message.slice(t.offset, this.offset()), err: null };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = jp(e);
            } catch {
              return this.error(Y.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: Sp.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Lp(n) : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, n, r) {
            for (var i, a = !1, o = [], s = new Set(), c = r.value, l = r.location; ;) {
              if (c.length === 0) {
                var u = this.clonePosition();
                if (t !== `select` && this.bumpIf(`=`)) {
                  var d = this.tryParseDecimalInteger(
                    Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    Y.INVALID_PLURAL_ARGUMENT_SELECTOR,
                  );
                  if (d.err) return d;
                  ((l = Z(u, this.clonePosition())), (c = this.message.slice(u.offset, this.offset())));
                } else break;
              }
              if (s.has(c))
                return this.error(
                  t === `select`
                    ? Y.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : Y.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              (c === `other` && (a = !0), this.bumpSpace());
              var f = this.clonePosition();
              if (!this.bumpIf(`{`))
                return this.error(
                  t === `select`
                    ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  Z(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(e + 1, t, n);
              if (p.err) return p;
              var m = this.tryParseArgumentClose(f);
              if (m.err) return m;
              (o.push([c, { value: p.val, location: Z(f, this.clonePosition()) }]),
                s.add(c),
                this.bumpSpace(),
                (i = this.parseIdentifierIfPossible()),
                (c = i.value),
                (l = i.location));
            }
            return o.length === 0
              ? this.error(
                  t === `select` ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  Z(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !a
                ? this.error(Y.MISSING_OTHER_CLAUSE, Z(this.clonePosition(), this.clonePosition()))
                : { val: o, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var n = 1,
              r = this.clonePosition();
            this.bumpIf(`+`) || (this.bumpIf(`-`) && (n = -1));
            for (var i = !1, a = 0; !this.isEOF();) {
              var o = this.char();
              if (o >= 48 && o <= 57) ((i = !0), (a = a * 10 + (o - 48)), this.bump());
              else break;
            }
            var s = Z(r, this.clonePosition());
            return i ? ((a *= n), lm(a) ? { val: a, err: null } : this.error(t, s)) : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return { offset: this.position.offset, line: this.position.line, column: this.position.column };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error(`out of bound`);
            var t = mm(this.message, e);
            if (t === void 0) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return { val: null, err: { kind: e, message: this.message, location: t } };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              e === 10
                ? ((this.position.line += 1), (this.position.column = 1), (this.position.offset += 1))
                : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (dm(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              n = this.message.indexOf(e, t);
            return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                `targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`,
              );
            for (e = Math.min(e, this.message.length); ;) {
              var t = this.offset();
              if (t === e) break;
              if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && $p(this.char());) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset();
            return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null;
          }),
          e
        );
      })()));
  }),
  xm = o(() => {
    Cp();
  });
function Sm(e) {
  e.forEach(function (e) {
    if ((delete e.location, gp(e) || _p(e)))
      for (var t in e.options) (delete e.options[t].location, Sm(e.options[t].value));
    else
      (pp(e) && bp(e.style)) || ((mp(e) || hp(e)) && xp(e.style))
        ? delete e.style.location
        : yp(e) && Sm(e.children);
  });
}
function Cm(e, t) {
  (t === void 0 && (t = {}), (t = J({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)));
  var n = new ym(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Y[n.err.kind]);
    throw ((r.location = n.err.location), (r.originalMessage = n.err.message), r);
  }
  return (t?.captureLocation || Sm(n.val), n.val);
}
var wm = o(() => {
    (Yf(), up(), bm(), Cp(), Cp(), xm());
  }),
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am = o(() => {
    (Yf(),
      (function (e) {
        ((e.MISSING_VALUE = `MISSING_VALUE`),
          (e.INVALID_VALUE = `INVALID_VALUE`),
          (e.MISSING_INTL_API = `MISSING_INTL_API`));
      })((Tm ||= {})),
      (Em = (function (e) {
        Gf(t, e);
        function t(t, n, r) {
          var i = e.call(this, t) || this;
          return ((i.code = n), (i.originalMessage = r), i);
        }
        return (
          (t.prototype.toString = function () {
            return `[formatjs Error: ${this.code}] ${this.message}`;
          }),
          t
        );
      })(Error)),
      (Dm = (function (e) {
        Gf(t, e);
        function t(t, n, r, i) {
          return (
            e.call(
              this,
              `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`,
              Tm.INVALID_VALUE,
              i,
            ) || this
          );
        }
        return t;
      })(Em)),
      (Om = (function (e) {
        Gf(t, e);
        function t(t, n, r) {
          return e.call(this, `Value for "${t}" must be of type ${n}`, Tm.INVALID_VALUE, r) || this;
        }
        return t;
      })(Em)),
      (km = (function (e) {
        Gf(t, e);
        function t(t, n) {
          return (
            e.call(
              this,
              `The intl string context variable "${t}" was not provided to the string "${n}"`,
              Tm.MISSING_VALUE,
              n,
            ) || this
          );
        }
        return t;
      })(Em)));
  });
function jm(e) {
  return e.length < 2
    ? e
    : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (!n || n.type !== Pm.literal || t.type !== Pm.literal ? e.push(t) : (n.value += t.value), e);
      }, []);
}
function Mm(e) {
  return typeof e == `function`;
}
function Nm(e, t, n, r, i, a, o) {
  if (e.length === 1 && dp(e[0])) return [{ type: Pm.literal, value: e[0].value }];
  for (var s = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c];
    if (dp(u)) {
      s.push({ type: Pm.literal, value: u.value });
      continue;
    }
    if (vp(u)) {
      typeof a == `number` && s.push({ type: Pm.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    var d = u.value;
    if (!(i && d in i)) throw new km(d, o);
    var f = i[d];
    if (fp(u)) {
      ((!f || typeof f == `string` || typeof f == `number`) &&
        (f = typeof f == `string` || typeof f == `number` ? String(f) : ``),
        s.push({ type: typeof f == `string` ? Pm.literal : Pm.object, value: f }));
      continue;
    }
    if (mp(u)) {
      var p = typeof u.style == `string` ? r.date[u.style] : xp(u.style) ? u.style.parsedOptions : void 0;
      s.push({ type: Pm.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (hp(u)) {
      var p =
        typeof u.style == `string` ? r.time[u.style] : xp(u.style) ? u.style.parsedOptions : r.time.medium;
      s.push({ type: Pm.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (pp(u)) {
      var p = typeof u.style == `string` ? r.number[u.style] : bp(u.style) ? u.style.parsedOptions : void 0;
      (p && p.scale && (f *= p.scale || 1),
        s.push({ type: Pm.literal, value: n.getNumberFormat(t, p).format(f) }));
      continue;
    }
    if (yp(u)) {
      var m = u.children,
        h = u.value,
        g = i[h];
      if (!Mm(g)) throw new Om(h, `function`, o);
      var _ = g(
        Nm(m, t, n, r, i, a).map(function (e) {
          return e.value;
        }),
      );
      (Array.isArray(_) || (_ = [_]),
        s.push.apply(
          s,
          _.map(function (e) {
            return { type: typeof e == `string` ? Pm.literal : Pm.object, value: e };
          }),
        ));
    }
    if (gp(u)) {
      var v = u.options[f] || u.options.other;
      if (!v) throw new Dm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Nm(v.value, t, n, r, i));
      continue;
    }
    if (_p(u)) {
      var v = u.options[`=${f}`];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Em(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            Tm.MISSING_INTL_API,
            o,
          );
        var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        v = u.options[y] || u.options.other;
      }
      if (!v) throw new Dm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Nm(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return jm(s);
}
var Pm,
  Fm = o(() => {
    (wm(),
      Am(),
      (function (e) {
        ((e[(e.literal = 0)] = `literal`), (e[(e.object = 1)] = `object`));
      })((Pm ||= {})));
  });
function Im(e, t) {
  return t
    ? J(
        J(J({}, e || {}), t || {}),
        Object.keys(e).reduce(function (n, r) {
          return ((n[r] = J(J({}, e[r]), t[r] || {})), n);
        }, {}),
      )
    : e;
}
function Lm(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (n, r) {
          return ((n[r] = Im(e[r], t[r])), n);
        },
        J({}, e),
      )
    : e;
}
function Rm(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
      };
    },
  };
}
function zm(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: Zf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(e, qf([void 0], t, !1)))();
        },
        { cache: Rm(e.number), strategy: cp.variadic },
      ),
      getDateTimeFormat: Zf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(e, qf([void 0], t, !1)))();
        },
        { cache: Rm(e.dateTime), strategy: cp.variadic },
      ),
      getPluralRules: Zf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(e, qf([void 0], t, !1)))();
        },
        { cache: Rm(e.pluralRules), strategy: cp.variadic },
      ),
    }
  );
}
var Bm,
  Vm = o(() => {
    (Yf(),
      lp(),
      wm(),
      Fm(),
      (Bm = (function () {
        function e(t, n, r, i) {
          n === void 0 && (n = e.defaultLocale);
          var a = this;
          if (
            ((this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
            (this.format = function (e) {
              var t = a.formatToParts(e);
              if (t.length === 1) return t[0].value;
              var n = t.reduce(function (e, t) {
                return (
                  !e.length || t.type !== Pm.literal || typeof e[e.length - 1] != `string`
                    ? e.push(t.value)
                    : (e[e.length - 1] += t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || `` : n;
            }),
            (this.formatToParts = function (e) {
              return Nm(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
            }),
            (this.resolvedOptions = function () {
              return {
                locale: a.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(a.locales)[0],
              };
            }),
            (this.getAst = function () {
              return a.ast;
            }),
            (this.locales = n),
            (this.resolvedLocale = e.resolveLocale(n)),
            typeof t == `string`)
          ) {
            if (((this.message = t), !e.__parse))
              throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var o = i || {};
            o.formatters;
            var s = Kf(o, [`formatters`]);
            this.ast = e.__parse(t, J(J({}, s), { locale: this.resolvedLocale }));
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw TypeError(`A message must be provided as a String or AST.`);
          ((this.formats = Lm(e.formats, r)),
            (this.formatters = (i && i.formatters) || zm(this.formatterCache)));
        }
        return (
          Object.defineProperty(e, "defaultLocale", {
            get: function () {
              return (
                (e.memoizedDefaultLocale ||= new Intl.NumberFormat().resolvedOptions().locale),
                e.memoizedDefaultLocale
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.memoizedDefaultLocale = null),
          (e.resolveLocale = function (e) {
            if (Intl.Locale !== void 0) {
              var t = Intl.NumberFormat.supportedLocalesOf(e);
              return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale(typeof e == `string` ? e : e[0]);
            }
          }),
          (e.__parse = Cm),
          (e.formats = {
            number: {
              integer: { maximumFractionDigits: 0 },
              currency: { style: `currency` },
              percent: { style: `percent` },
            },
            date: {
              short: { month: `numeric`, day: `numeric`, year: `2-digit` },
              medium: { month: `short`, day: `numeric`, year: `numeric` },
              long: { month: `long`, day: `numeric`, year: `numeric` },
              full: { weekday: `long`, month: `long`, day: `numeric`, year: `numeric` },
            },
            time: {
              short: { hour: `numeric`, minute: `numeric` },
              medium: { hour: `numeric`, minute: `numeric`, second: `numeric` },
              long: { hour: `numeric`, minute: `numeric`, second: `numeric`, timeZoneName: `short` },
              full: { hour: `numeric`, minute: `numeric`, second: `numeric`, timeZoneName: `short` },
            },
          }),
          e
        );
      })()));
  }),
  Hm = o(() => {
    (Vm(), Vm(), Am(), Fm());
  }),
  Um,
  Wm,
  Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm = o(() => {
    (Yf(),
      (function (e) {
        ((e.FORMAT_ERROR = `FORMAT_ERROR`),
          (e.UNSUPPORTED_FORMATTER = `UNSUPPORTED_FORMATTER`),
          (e.INVALID_CONFIG = `INVALID_CONFIG`),
          (e.MISSING_DATA = `MISSING_DATA`),
          (e.MISSING_TRANSLATION = `MISSING_TRANSLATION`));
      })((Um ||= {})),
      (Wm = (function (e) {
        Gf(t, e);
        function t(n, r, i) {
          var a = this,
            o = i ? (i instanceof Error ? i : Error(String(i))) : void 0;
          return (
            (a =
              e.call(
                this,
                `[@formatjs/intl Error ${n}] ${r}
${
  o
    ? `
${o.message}
${o.stack}`
    : ``
}`,
              ) || this),
            (a.code = n),
            typeof Error.captureStackTrace == `function` && Error.captureStackTrace(a, t),
            a
          );
        }
        return t;
      })(Error)),
      (Gm = (function (e) {
        Gf(t, e);
        function t(t, n) {
          return e.call(this, Um.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return t;
      })(Wm)),
      (Km = (function (e) {
        Gf(t, e);
        function t(t, n) {
          return e.call(this, Um.INVALID_CONFIG, t, n) || this;
        }
        return t;
      })(Wm)),
      (qm = (function (e) {
        Gf(t, e);
        function t(t, n) {
          return e.call(this, Um.MISSING_DATA, t, n) || this;
        }
        return t;
      })(Wm)),
      (Jm = (function (e) {
        Gf(t, e);
        function t(t, n, r) {
          var i =
            e.call(
              this,
              Um.FORMAT_ERROR,
              `${t}
Locale: ${n}
`,
              r,
            ) || this;
          return ((i.locale = n), i);
        }
        return t;
      })(Wm)),
      (Ym = (function (e) {
        Gf(t, e);
        function t(t, n, r, i) {
          var a =
            e.call(
              this,
              `${t}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`,
              n,
              i,
            ) || this;
          return ((a.descriptor = r), (a.locale = n), a);
        }
        return t;
      })(Jm)),
      (Xm = (function (e) {
        Gf(t, e);
        function t(t, n) {
          var r =
            e.call(
              this,
              Um.MISSING_TRANSLATION,
              `Missing message: "${t.id}" for locale "${n}", using ${
                t.defaultMessage
                  ? `default message (${
                      typeof t.defaultMessage == `string`
                        ? t.defaultMessage
                        : t.defaultMessage
                            .map(function (e) {
                              return e.value ?? JSON.stringify(e);
                            })
                            .join()
                    })`
                  : `id`
              } as fallback.`,
            ) || this;
          return ((r.descriptor = t), r);
        }
        return t;
      })(Wm)));
  });
function Qm(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function $m(e, t, n) {
  return (
    n === void 0 && (n = {}),
    t.reduce(function (t, r) {
      return (r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t);
    }, {})
  );
}
function eh() {
  return {
    dateTime: {},
    number: {},
    message: {},
    relativeTime: {},
    pluralRules: {},
    list: {},
    displayNames: {},
  };
}
function th(e) {
  return {
    create: function () {
      return {
        get: function (t) {
          return e[t];
        },
        set: function (t, n) {
          e[t] = n;
        },
      };
    },
  };
}
function nh(e) {
  e === void 0 && (e = eh());
  var t = Intl.RelativeTimeFormat,
    n = Intl.ListFormat,
    r = Intl.DisplayNames,
    i = Zf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(e, qf([void 0], t, !1)))();
      },
      { cache: th(e.dateTime), strategy: cp.variadic },
    ),
    a = Zf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, qf([void 0], t, !1)))();
      },
      { cache: th(e.number), strategy: cp.variadic },
    ),
    o = Zf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, qf([void 0], t, !1)))();
      },
      { cache: th(e.pluralRules), strategy: cp.variadic },
    );
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: Zf(
      function (e, t, n, r) {
        return new Bm(
          e,
          t,
          n,
          J({ formatters: { getNumberFormat: a, getDateTimeFormat: i, getPluralRules: o } }, r || {}),
        );
      },
      { cache: th(e.message), strategy: cp.variadic },
    ),
    getRelativeTimeFormat: Zf(
      function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return new (t.bind.apply(t, qf([void 0], e, !1)))();
      },
      { cache: th(e.relativeTime), strategy: cp.variadic },
    ),
    getPluralRules: o,
    getListFormat: Zf(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (n.bind.apply(n, qf([void 0], e, !1)))();
      },
      { cache: th(e.list), strategy: cp.variadic },
    ),
    getDisplayNames: Zf(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (r.bind.apply(r, qf([void 0], e, !1)))();
      },
      { cache: th(e.displayNames), strategy: cp.variadic },
    ),
  };
}
function rh(e, t, n, r) {
  var i = e && e[t],
    a;
  if ((i && (a = i[n]), a)) return a;
  r(new Gm(`No ${t} format named: ${n}`));
}
var ih,
  ah,
  oh,
  sh = o(() => {
    (Yf(),
      lp(),
      Hm(),
      Zm(),
      (ih = function (e) {}),
      (ah = function (e) {}),
      (oh = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: `en`,
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: ih,
        onWarn: ah,
      }));
  });
function ch(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    return ((n[r] = J({ timeZone: t }, e[r])), n);
  }, {});
}
function lh(e, t) {
  return Object.keys(J(J({}, e), t)).reduce(function (n, r) {
    return ((n[r] = J(J({}, e[r] || {}), t[r] || {})), n);
  }, {});
}
function uh(e, t) {
  if (!t) return e;
  var n = Bm.formats;
  return J(J(J({}, n), e), {
    date: lh(ch(n.date, t), ch(e.date || {}, t)),
    time: lh(ch(n.time, t), ch(e.time || {}, t)),
  });
}
var dh,
  fh = o(() => {
    (Yf(),
      wm(),
      Hm(),
      Zm(),
      sh(),
      (dh = function (e, t, n, r, i) {
        var a = e.locale,
          o = e.formats,
          s = e.messages,
          c = e.defaultLocale,
          l = e.defaultFormats,
          u = e.fallbackOnEmptyString,
          d = e.onError,
          f = e.timeZone,
          p = e.defaultRichTextElements;
        n === void 0 && (n = { id: `` });
        var m = n.id,
          h = n.defaultMessage;
        Qm(
          !!m,
          `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`,
        );
        var g = String(m),
          _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
        if (Array.isArray(_) && _.length === 1 && _[0].type === X.literal) return _[0].value;
        if (!r && _ && typeof _ == `string` && !p) return _.replace(/'\{(.*?)\}'/gi, `{$1}`);
        if (((r = J(J({}, p), r || {})), (o = uh(o, f)), (l = uh(l, f)), !_)) {
          if (u === !1 && _ === ``) return _;
          if (((!h || (a && a.toLowerCase() !== c.toLowerCase())) && d(new Xm(n, a)), h))
            try {
              var v = t.getMessageFormat(h, c, l, i);
              return v.format(r);
            } catch (e) {
              return (
                d(
                  new Ym(
                    `Error formatting default message for: "${g}", rendering default message verbatim`,
                    a,
                    n,
                    e,
                  ),
                ),
                typeof h == `string` ? h : g
              );
            }
          return g;
        }
        try {
          var v = t.getMessageFormat(_, a, o, J({ formatters: t }, i || {}));
          return v.format(r);
        } catch (e) {
          d(
            new Ym(
              `Error formatting message: "${g}", using ${h ? `default message` : `id`} as fallback.`,
              a,
              n,
              e,
            ),
          );
        }
        if (h)
          try {
            var v = t.getMessageFormat(h, c, l, i);
            return v.format(r);
          } catch (e) {
            d(
              new Ym(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e),
            );
          }
        return typeof _ == `string` ? _ : typeof h == `string` ? h : g;
      }));
  });
function ph(e, t, n, r) {
  var i = e.locale,
    a = e.formats,
    o = e.onError,
    s = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format,
    l = J(J({}, s && { timeZone: s }), c && rh(a, t, c, o)),
    u = $m(r, yh, l);
  return (
    t === `time` &&
      !u.hour &&
      !u.minute &&
      !u.second &&
      !u.timeStyle &&
      !u.dateStyle &&
      (u = J(J({}, u), { hour: `numeric`, minute: `numeric` })),
    n(i, u)
  );
}
function mh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ph(e, `date`, t, o).format(s);
  } catch (t) {
    e.onError(new Jm(`Error formatting date.`, e.locale, t));
  }
  return String(s);
}
function hh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ph(e, `time`, t, o).format(s);
  } catch (t) {
    e.onError(new Jm(`Error formatting time.`, e.locale, t));
  }
  return String(s);
}
function gh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = n[2],
    s = o === void 0 ? {} : o,
    c = typeof i == `string` ? new Date(i || 0) : i,
    l = typeof a == `string` ? new Date(a || 0) : a;
  try {
    return ph(e, `dateTimeRange`, t, s).formatRange(c, l);
  } catch (t) {
    e.onError(new Jm(`Error formatting date time range.`, e.locale, t));
  }
  return String(c);
}
function _h(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ph(e, `date`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Jm(`Error formatting date.`, e.locale, t));
  }
  return [];
}
function vh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ph(e, `time`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Jm(`Error formatting time.`, e.locale, t));
  }
  return [];
}
var yh,
  bh = o(() => {
    (Yf(),
      Zm(),
      sh(),
      (yh = [
        `formatMatcher`,
        `timeZone`,
        `hour12`,
        `weekday`,
        `era`,
        `year`,
        `month`,
        `day`,
        `hour`,
        `minute`,
        `second`,
        `timeZoneName`,
        `hourCycle`,
        `dateStyle`,
        `timeStyle`,
        `calendar`,
        `numberingSystem`,
        `fractionalSecondDigits`,
      ]));
  });
function xh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  Intl.DisplayNames ||
    a(
      new Em(
        `Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,
        Tm.MISSING_INTL_API,
      ),
    );
  var o = $m(r, Sh);
  try {
    return t(i, o).of(n);
  } catch (e) {
    a(new Jm(`Error formatting display name.`, i, e));
  }
}
var Sh,
  Ch = o(() => {
    (sh(), Hm(), Zm(), (Sh = [`style`, `type`, `fallback`, `languageDisplay`]));
  });
function wh(e) {
  return `${Oh}_${e}_${Oh}`;
}
function Th(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Eh(e, t, n, r).reduce(function (e, t) {
    var n = t.value;
    return (
      typeof n == `string` && typeof e[e.length - 1] == `string` ? (e[e.length - 1] += n) : e.push(n),
      e
    );
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? `` : i;
}
function Eh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.ListFormat ||
      a(
        new Em(
          `Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,
          Tm.MISSING_INTL_API,
        ),
      ));
  var o = $m(r, Dh);
  try {
    var s = {},
      c = Array.from(n).map(function (e, t) {
        if (typeof e == `object` && e) {
          var n = wh(t);
          return ((s[n] = e), n);
        }
        return String(e);
      });
    return t(i, o)
      .formatToParts(c)
      .map(function (e) {
        return e.type === `literal` ? e : J(J({}, e), { value: s[e.value] || e.value });
      });
  } catch (e) {
    a(new Jm(`Error formatting list.`, i, e));
  }
  return n;
}
var Dh,
  Oh,
  kh = o(() => {
    (Yf(), Hm(), Zm(), sh(), (Dh = [`type`, `style`]), (Oh = Date.now()));
  });
function Ah(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.PluralRules ||
      a(
        new Em(
          `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
          Tm.MISSING_INTL_API,
        ),
      ));
  var o = $m(r, jh);
  try {
    return t(i, o).select(n);
  } catch (e) {
    a(new Jm(`Error formatting plural.`, i, e));
  }
  return `other`;
}
var jh,
  Mh = o(() => {
    (Hm(), Zm(), sh(), (jh = [`type`]));
  });
function Nh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (!!o && rh(i, `relative`, o, a)) || {};
  return t(r, $m(n, Fh, s));
}
function Ph(e, t, n, r, i) {
  (i === void 0 && (i = {}),
    (r ||= `second`),
    Intl.RelativeTimeFormat ||
      e.onError(
        new Em(
          `Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,
          Tm.MISSING_INTL_API,
        ),
      ));
  try {
    return Nh(e, t, i).format(n, r);
  } catch (t) {
    e.onError(new Jm(`Error formatting relative time.`, e.locale, t));
  }
  return String(n);
}
var Fh,
  Ih = o(() => {
    (sh(), Hm(), Zm(), (Fh = [`numeric`, `style`]));
  });
function Lh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (o && rh(i, `number`, o, a)) || {};
  return t(r, $m(n, Bh, s));
}
function Rh(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Lh(e, t, r).format(n);
  } catch (t) {
    e.onError(new Jm(`Error formatting number.`, e.locale, t));
  }
  return String(n);
}
function zh(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Lh(e, t, r).formatToParts(n);
  } catch (t) {
    e.onError(new Jm(`Error formatting number.`, e.locale, t));
  }
  return [];
}
var Bh,
  Vh = o(() => {
    (Zm(),
      sh(),
      (Bh = [
        `style`,
        `currency`,
        `unit`,
        `unitDisplay`,
        `useGrouping`,
        `minimumIntegerDigits`,
        `minimumFractionDigits`,
        `maximumFractionDigits`,
        `minimumSignificantDigits`,
        `maximumSignificantDigits`,
        `compactDisplay`,
        `currencyDisplay`,
        `currencySign`,
        `notation`,
        `signDisplay`,
        `unit`,
        `unitDisplay`,
        `numberingSystem`,
        `trailingZeroDisplay`,
        `roundingPriority`,
        `roundingIncrement`,
        `roundingMode`,
      ]));
  });
function Hh(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == `string`;
}
function Uh(e) {
  e.onWarn &&
    e.defaultRichTextElements &&
    Hh(e.messages || {}) &&
    e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function Wh(e, t) {
  var n = nh(t),
    r = J(J({}, oh), e),
    i = r.locale,
    a = r.defaultLocale,
    o = r.onError;
  return (
    i
      ? !Intl.NumberFormat.supportedLocalesOf(i).length && o
        ? o(
            new qm(
              `Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
        : !Intl.DateTimeFormat.supportedLocalesOf(i).length &&
          o &&
          o(
            new qm(
              `Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
      : (o &&
          o(
            new Km(
              `"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`,
            ),
          ),
        (r.locale = r.defaultLocale || `en`)),
    Uh(r),
    J(J({}, r), {
      formatters: n,
      formatNumber: Rh.bind(null, r, n.getNumberFormat),
      formatNumberToParts: zh.bind(null, r, n.getNumberFormat),
      formatRelativeTime: Ph.bind(null, r, n.getRelativeTimeFormat),
      formatDate: mh.bind(null, r, n.getDateTimeFormat),
      formatDateToParts: _h.bind(null, r, n.getDateTimeFormat),
      formatTime: hh.bind(null, r, n.getDateTimeFormat),
      formatDateTimeRange: gh.bind(null, r, n.getDateTimeFormat),
      formatTimeToParts: vh.bind(null, r, n.getDateTimeFormat),
      formatPlural: Ah.bind(null, r, n.getPluralRules),
      formatMessage: dh.bind(null, r, n),
      $t: dh.bind(null, r, n),
      formatList: Th.bind(null, r, n.getListFormat),
      formatListToParts: Eh.bind(null, r, n.getListFormat),
      formatDisplayName: xh.bind(null, r, n.getDisplayNames),
    })
  );
}
var Gh = o(() => {
    (Yf(), bh(), Ch(), Zm(), kh(), fh(), Vh(), Mh(), Ih(), sh());
  }),
  Kh = o(() => {
    (Xf(), sh(), Zm(), fh(), bh(), Ch(), kh(), Mh(), Ih(), Vh(), Gh());
  });
function qh(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Jh(e) {
  qh(
    e,
    "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
  );
}
function Yh(e) {
  return function (t) {
    return e(eg(t));
  };
}
function Xh(e, t) {
  if (e === t) return !0;
  if (!e || !t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t),
    i = n.length;
  if (r.length !== i) return !1;
  for (var a = 0; a < i; a++) {
    var o = n[a];
    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1;
  }
  return !0;
}
var Zh,
  Qh,
  $h,
  eg,
  tg = o(() => {
    (Yf(),
      (Zh = u(Rf())),
      Kh(),
      (Qh = J(J({}, oh), { textComponent: Zh.Fragment })),
      ($h = function (e, t) {
        return Zh.isValidElement(e) ? Zh.cloneElement(e, { key: t }) : e;
      }),
      (eg = function (e) {
        return Zh.Children.map(e, $h) ?? [];
      }));
  }),
  ng = s((e) => {
    var t = typeof Symbol == `function` && Symbol.for,
      n = t ? Symbol.for(`react.element`) : 60103,
      r = t ? Symbol.for(`react.portal`) : 60106,
      i = t ? Symbol.for(`react.fragment`) : 60107,
      a = t ? Symbol.for(`react.strict_mode`) : 60108,
      o = t ? Symbol.for(`react.profiler`) : 60114,
      s = t ? Symbol.for(`react.provider`) : 60109,
      c = t ? Symbol.for(`react.context`) : 60110,
      l = t ? Symbol.for(`react.async_mode`) : 60111,
      u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
      d = t ? Symbol.for(`react.forward_ref`) : 60112,
      f = t ? Symbol.for(`react.suspense`) : 60113,
      p = t ? Symbol.for(`react.suspense_list`) : 60120,
      m = t ? Symbol.for(`react.memo`) : 60115,
      h = t ? Symbol.for(`react.lazy`) : 60116,
      g = t ? Symbol.for(`react.block`) : 60121,
      _ = t ? Symbol.for(`react.fundamental`) : 60117,
      v = t ? Symbol.for(`react.responder`) : 60118,
      y = t ? Symbol.for(`react.scope`) : 60119;
    function b(e) {
      if (typeof e == `object` && e) {
        var t = e.$$typeof;
        switch (t) {
          case n:
            switch (((e = e.type), e)) {
              case l:
              case u:
              case i:
              case o:
              case a:
              case f:
                return e;
              default:
                switch (((e &&= e.$$typeof), e)) {
                  case c:
                  case d:
                  case h:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case r:
            return t;
        }
      }
    }
    function x(e) {
      return b(e) === u;
    }
    ((e.AsyncMode = l),
      (e.ConcurrentMode = u),
      (e.ContextConsumer = c),
      (e.ContextProvider = s),
      (e.Element = n),
      (e.ForwardRef = d),
      (e.Fragment = i),
      (e.Lazy = h),
      (e.Memo = m),
      (e.Portal = r),
      (e.Profiler = o),
      (e.StrictMode = a),
      (e.Suspense = f),
      (e.isAsyncMode = function (e) {
        return x(e) || b(e) === l;
      }),
      (e.isConcurrentMode = x),
      (e.isContextConsumer = function (e) {
        return b(e) === c;
      }),
      (e.isContextProvider = function (e) {
        return b(e) === s;
      }),
      (e.isElement = function (e) {
        return typeof e == `object` && !!e && e.$$typeof === n;
      }),
      (e.isForwardRef = function (e) {
        return b(e) === d;
      }),
      (e.isFragment = function (e) {
        return b(e) === i;
      }),
      (e.isLazy = function (e) {
        return b(e) === h;
      }),
      (e.isMemo = function (e) {
        return b(e) === m;
      }),
      (e.isPortal = function (e) {
        return b(e) === r;
      }),
      (e.isProfiler = function (e) {
        return b(e) === o;
      }),
      (e.isStrictMode = function (e) {
        return b(e) === a;
      }),
      (e.isSuspense = function (e) {
        return b(e) === f;
      }),
      (e.isValidElementType = function (e) {
        return (
          typeof e == `string` ||
          typeof e == `function` ||
          e === i ||
          e === u ||
          e === o ||
          e === a ||
          e === f ||
          e === p ||
          (typeof e == `object` &&
            !!e &&
            (e.$$typeof === h ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === c ||
              e.$$typeof === d ||
              e.$$typeof === _ ||
              e.$$typeof === v ||
              e.$$typeof === y ||
              e.$$typeof === g))
        );
      }),
      (e.typeOf = b));
  }),
  rg = s((e, t) => {
    t.exports = ng();
  }),
  ig = s((e, t) => {
    var n = rg(),
      r = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
      a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
      o = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
      s = {};
    ((s[n.ForwardRef] = a), (s[n.Memo] = o));
    function c(e) {
      return n.isMemo(e) ? o : s[e.$$typeof] || r;
    }
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      d = Object.getOwnPropertySymbols,
      f = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      m = Object.prototype;
    function h(e, t, n) {
      if (typeof t != `string`) {
        if (m) {
          var r = p(t);
          r && r !== m && h(e, r, n);
        }
        var a = u(t);
        d && (a = a.concat(d(t)));
        for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
          var _ = a[g];
          if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
            var v = f(t, _);
            try {
              l(e, _, v);
            } catch {}
          }
        }
      }
      return e;
    }
    t.exports = h;
  }),
  ag,
  og,
  sg,
  cg,
  lg,
  ug = o(() => {
    (ig(),
      (ag = u(Rf())),
      (og =
        typeof window < `u` && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
          ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = ag.createContext(null))
          : ag.createContext(null)),
      og.Consumer,
      (sg = og.Provider),
      (cg = sg),
      (lg = og));
  });
function dg() {
  var e = fg.useContext(lg);
  return (Jh(e), e);
}
var fg,
  pg = o(() => {
    ((fg = u(Rf())), tg(), ug());
  });
function mg(e) {
  return (
    e &&
    Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      return ((t[n] = Mm(r) ? Yh(r) : r), t);
    }, {})
  );
}
var hg,
  gg,
  _g = o(() => {
    (Yf(),
      Kh(),
      Hm(),
      tg(),
      (hg = function (e, t, n, r) {
        for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
        var o = mg(r),
          s = dh.apply(void 0, qf([e, t, n, o], i, !1));
        return Array.isArray(s) ? eg(s) : s;
      }),
      (gg = function (e, t) {
        var n = e.defaultRichTextElements,
          r = Kf(e, [`defaultRichTextElements`]),
          i = mg(n),
          a = Wh(J(J(J({}, Qh), r), { defaultRichTextElements: i }), t),
          o = {
            locale: a.locale,
            timeZone: a.timeZone,
            fallbackOnEmptyString: a.fallbackOnEmptyString,
            formats: a.formats,
            defaultLocale: a.defaultLocale,
            defaultFormats: a.defaultFormats,
            messages: a.messages,
            onError: a.onError,
            defaultRichTextElements: i,
          };
        return J(J({}, a), {
          formatMessage: hg.bind(null, o, a.formatters),
          $t: hg.bind(null, o, a.formatters),
        });
      }));
  });
function vg(e, t) {
  var n = e.values,
    r = Kf(e, [`values`]),
    i = t.values,
    a = Kf(t, [`values`]);
  return Xh(i, n) && Xh(r, a);
}
function yg(e) {
  var t = dg(),
    n = t.formatMessage,
    r = t.textComponent,
    i = r === void 0 ? bg.Fragment : r,
    a = e.id,
    o = e.description,
    s = e.defaultMessage,
    c = e.values,
    l = e.children,
    u = e.tagName,
    d = u === void 0 ? i : u,
    f = e.ignoreTag,
    p = n({ id: a, description: o, defaultMessage: s }, c, { ignoreTag: f });
  return typeof l == `function`
    ? l(Array.isArray(p) ? p : [p])
    : d
      ? bg.createElement(d, null, p)
      : bg.createElement(bg.Fragment, null, p);
}
var bg,
  xg,
  Sg = o(() => {
    (Yf(),
      (bg = u(Rf())),
      tg(),
      pg(),
      (yg.displayName = `FormattedMessage`),
      (xg = bg.memo(yg, vg)),
      (xg.displayName = `MemoizedFormattedMessage`));
  });
function Cg(e) {
  return {
    locale: e.locale,
    timeZone: e.timeZone,
    fallbackOnEmptyString: e.fallbackOnEmptyString,
    formats: e.formats,
    textComponent: e.textComponent,
    messages: e.messages,
    defaultLocale: e.defaultLocale,
    defaultFormats: e.defaultFormats,
    onError: e.onError,
    onWarn: e.onWarn,
    wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
    defaultRichTextElements: e.defaultRichTextElements,
  };
}
var wg,
  Tg,
  Eg = o(() => {
    (Yf(),
      Kh(),
      (wg = u(Rf())),
      tg(),
      _g(),
      ug(),
      (Tg = (function (e) {
        Gf(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          return (
            (t.cache = eh()),
            (t.state = { cache: t.cache, intl: gg(Cg(t.props), t.cache), prevConfig: Cg(t.props) }),
            t
          );
        }
        return (
          (t.getDerivedStateFromProps = function (e, t) {
            var n = t.prevConfig,
              r = t.cache,
              i = Cg(e);
            return Xh(n, i) ? null : { intl: gg(i, r), prevConfig: i };
          }),
          (t.prototype.render = function () {
            return (
              Jh(this.state.intl),
              wg.createElement(cg, { value: this.state.intl }, this.props.children)
            );
          }),
          (t.displayName = `IntlProvider`),
          (t.defaultProps = Qh),
          t
        );
      })(wg.PureComponent)));
  }),
  Dg = o(() => {
    (Sg(), Eg(), pg(), Kh(), Yf());
  }),
  Og,
  kg = o(() => {
    Og = 2147483647;
  });
function Ag(e, t) {
  let n = new Set([e]),
    r = new MutationObserver((a) => {
      let o = n.size;
      for (let e of a) for (let t of e.addedNodes) V(t) && i(t);
      let s = !1;
      for (let t of n) t !== e && (!t.isConnected || t.ownerDocument !== e) && (n.delete(t), (s = !0));
      if (s) {
        r.disconnect();
        for (let e of n) r.observe(e, Mg);
      }
      (s ||
        n.size !== o ||
        a.some(
          (e) =>
            e.type === `attributes` ||
            [...e.addedNodes, ...e.removedNodes].some(
              (e) => V(e) && (e.matches(jg) || e.querySelector(jg) != null),
            ),
        )) &&
        t();
    });
  function i(e) {
    let t = e.querySelectorAll(`*`);
    for (let a of V(e) ? [e, ...t] : t)
      !V(a) ||
        ul(a) ||
        a.shadowRoot == null ||
        n.has(a.shadowRoot) ||
        (n.add(a.shadowRoot), r.observe(a.shadowRoot, Mg), i(a.shadowRoot));
  }
  let a = (e) => {
    let n = e.composedPath()[0];
    V(n) && !ul(n) && (i(n), t());
  };
  return (
    r.observe(e, Mg),
    i(e),
    e.addEventListener(Ng, a),
    () => {
      (r.disconnect(), e.removeEventListener(Ng, a));
    }
  );
}
var jg,
  Mg,
  Ng,
  Pg = o(() => {
    (Sl(),
      Xc(),
      (jg = `[oai-annotation-container], [oai-annotation-container-text]`),
      (Mg = {
        attributes: !0,
        attributeFilter: [`oai-annotation-container`, `oai-annotation-container-text`],
        childList: !0,
        subtree: !0,
      }),
      (Ng = `codex:annotation-shadow-root-attached`));
  });
function Fg() {
  let e = new Map(),
    t = null,
    n = new Map(),
    r = () => {
      let r = n;
      ((n = new Map()), e.clear(), (t = null));
      for (let [e, t] of r)
        for (let n of t.values())
          Ig(e, {
            callback: n.callback,
            value: n.resetValue,
            action: `reset`,
            virtualTarget: n.virtualTarget,
          });
    };
  return {
    rememberTarget(n, r) {
      (e.has(n) || e.set(n, new WeakRef(r)), (t = n));
    },
    sync(i) {
      if (i.canUseSiteAnnotationApi !== !0 || i.isAgentControllingBrowser) {
        r();
        return;
      }
      let a = i.comments.flatMap((e) =>
        e.designChange == null || e.designChange.id === i.activeDesignChange?.id ? [] : [e.designChange],
      );
      i.activeDesignChange != null && a.push(i.activeDesignChange);
      let o = i.isOriginalViewEnabled === !0 || i.interactionMode !== `comment`,
        s = new Map(),
        c = new Set(a.map((e) => e.id));
      for (let n of e.keys()) n !== t && !c.has(n) && e.delete(n);
      for (let t of a) {
        let r = e.get(t.id)?.deref();
        if (
          r == null ||
          !r.isConnected ||
          !ld(t.anchor.pageUrl, window.location.href) ||
          Sc(t.anchor.framePath) !== r.ownerDocument ||
          (t.anchor.frameUrl != null && !ld(t.anchor.frameUrl, r.ownerDocument.location.href))
        )
          continue;
        let i =
          t.anchor.kind === `virtual`
            ? { surfaceId: t.anchor.surfaceId, targetId: t.anchor.targetId }
            : void 0;
        for (let e of t.annotationControlChanges ?? []) {
          let a = t.annotationControls?.controls.find((t) => t.callback === e.callback);
          if (a == null) continue;
          let c = e.previousValue ?? Od(a);
          if (e.value === c) continue;
          let l = s.get(r) ?? new Map(),
            u = i == null ? e.callback : JSON.stringify([i.surfaceId, i.targetId, e.callback]),
            d = n.get(r)?.get(u)?.resetValue ?? l.get(u)?.resetValue ?? c;
          (l.set(u, {
            callback: e.callback,
            resetValue: d,
            value: o ? d : e.value,
            action: o ? `preview-original` : `preview`,
            virtualTarget: i,
          }),
            s.set(r, l));
        }
      }
      let l = n;
      n = s;
      for (let [e, t] of l)
        for (let [n, r] of t)
          s.get(e)?.has(n) ||
            Ig(e, {
              callback: r.callback,
              value: r.resetValue,
              action: `reset`,
              virtualTarget: r.virtualTarget,
            });
      for (let [e, t] of s)
        for (let [n, r] of t) {
          let t = l.get(e)?.get(n);
          (t?.value !== r.value || t.action !== r.action) && Ig(e, r);
        }
    },
    clear: r,
  };
}
function Ig(e, { callback: t, value: n, action: r, virtualTarget: i }) {
  (e.isConnected || r === `reset`) &&
    e.dispatchEvent(
      new CustomEvent(`oaiannotationcontrolchange`, {
        bubbles: !0,
        detail: { callback: t, value: n, action: r, ...(i == null ? {} : { virtualTarget: { ...i } }) },
      }),
    );
}
var Lg = o(() => {
  (Rd(), yd(), Xc());
});
function Rg(e, t) {
  (t?.controls.length ?? 0) > 0 &&
    !e.annotationFeatures?.includes(`custom-controls`) &&
    (e.annotationFeatures = [...(e.annotationFeatures ?? []), `custom-controls`]);
}
function zg(e, t, n) {
  (e.annotationFeatures?.includes(`requests`) && t?.(`requests`, e.annotationRequestIncludesPrompt),
    e.kind === `virtual` && t?.(`registered-surface`),
    (n?.controls.length ?? 0) > 0 && t?.(`custom-controls`),
    e.annotationFeatures?.includes(`selectable-containers`) && t?.(`selectable-containers`),
    e.elementMetadata != null && Object.keys(e.elementMetadata).length > 0 && t?.(`metadata`));
}
function Bg(e) {
  let t = vc(e.framePath);
  if (t == null) return !1;
  let n = Du(t, e.textLocator),
    r = n != null && `host` in n ? n.host : n;
  return V(r) && Zc(r) != null;
}
var Vg = o(() => {
  (al(), Xc(), Xu());
});
function Hg() {
  return ac((e, t, n) => {
    let r = new Map(),
      i = new Set(),
      a = (e) => {
        let t = r.get(e);
        t != null &&
          (r.delete(e),
          e.style.getPropertyValue(`pointer-events`) === `none` &&
            e.style.getPropertyPriority(`pointer-events`) === `important` &&
            e.style.setProperty(`pointer-events`, t.value, t.priority));
      },
      o = (e) => {
        if (tc(e) != null) {
          a(e);
          return;
        }
        r.has(e) ||
          (r.set(e, {
            value: e.style.getPropertyValue(`pointer-events`),
            priority: e.style.getPropertyPriority(`pointer-events`),
          }),
          e.style.setProperty(`pointer-events`, `none`, `important`));
      },
      s = (e) => {
        if (V(e) && ul(e)) return !1;
        let t = !1;
        !V(e) &&
          !i.has(e) &&
          (i.add(e), c.observe(e, { childList: !0, subtree: !0 }), e.addEventListener(`load`, l, !0));
        for (let n of V(e) ? [e, ...e.querySelectorAll(`*`)] : e.querySelectorAll(`*`))
          V(n) &&
            !ul(n) &&
            ($s(n) && (o(n), (t = !0)),
            n.shadowRoot != null && !i.has(n.shadowRoot) && (t = s(n.shadowRoot) || t));
        return t;
      },
      c = new MutationObserver((e) => {
        let t = !1;
        for (let n of e) for (let e of n.addedNodes) V(e) && (t = s(e) || t);
        t && n();
      }),
      l = (e) => {
        $s(e.target) && (o(e.target), n());
      };
    return (
      s(e),
      () => {
        c.disconnect();
        for (let e of i) e.removeEventListener(`load`, l, !0);
        for (let e of r.keys()) a(e);
      }
    );
  });
}
var Ug = o(() => {
  (Sl(), Xc());
});
function Wg(e) {
  let t = e.toLowerCase();
  return t.endsWith(`.localhost`) || Kg.has(t);
}
function Gg(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  return t.protocol !== `http:` && t.protocol !== `https:` ? !1 : Wg(t.hostname);
}
var Kg,
  qg = o(() => {
    Kg = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `[::1]`, `::1`]);
  });
function Jg(e) {
  return Gg(e);
}
var Yg = o(() => {
  qg();
});
function Xg({ getElementAtPoint: e, onInvalidated: t, onRenderingFailed: n }) {
  let r = new Map(),
    i = new WeakSet(),
    a = Nl(),
    o = 0,
    s = null,
    c = !1,
    l = !1;
  document.addEventListener(e_.responseEvent, v);
  let u = new MutationObserver(() => {
    for (let e of r.keys())
      Qg(e) || (r.delete(e), r.size === 0 && u.disconnect(), s?.element === e && h(), t(e));
  });
  function d(e) {
    if (c || !Qg(e)) return !1;
    if (!r.has(e) && !i.has(e)) {
      (i.add(e), (l = !0));
      try {
        Zg(e, { type: `probe` });
      } finally {
        l = !1;
      }
    }
    return r.has(e);
  }
  function f(e, t) {
    if ((h(), !d(e) || !p(e, t))) return Promise.resolve(void 0);
    let n = r.get(e);
    if (n == null) return Promise.resolve(void 0);
    let i = `${a}-${++o}`;
    return new Promise((r) => {
      ((s = {
        element: e,
        registrationId: n.id,
        requestId: i,
        point: { ...t },
        surfaceRect: e.getBoundingClientRect(),
        timer: setTimeout(h, e_.deadlineMs),
        finish: r,
      }),
        Zg(e, { type: `hit-test`, registrationId: n.id, requestId: i, x: t.x, y: t.y }));
    });
  }
  function p(t, n) {
    let r = $g(t, t.getBoundingClientRect());
    return (
      r != null &&
      Number.isFinite(n.x) &&
      Number.isFinite(n.y) &&
      n.x >= r.x &&
      n.y >= r.y &&
      n.x <= r.x + r.width &&
      n.y <= r.y + r.height &&
      e(n) === t
    );
  }
  function m(e, t, n) {
    let i = r.get(e);
    return c || !Qg(e) || i?.id !== t || !i.customRendering
      ? !1
      : (Zg(e, { type: `render`, registrationId: t, ...n }), i.customRendering);
  }
  function h() {
    if (s == null) return;
    let e = s;
    ((s = null), clearTimeout(e.timer), e.finish(void 0), Zg(document, { type: `cancel` }));
  }
  function g() {
    (h(), c || Zg(document, { type: `clear` }));
  }
  function _() {
    (g(), (c = !0), u.disconnect(), r.clear(), document.removeEventListener(e_.responseEvent, v));
  }
  function v(e) {
    if (
      c ||
      !(e instanceof CustomEvent) ||
      typeof e.detail != `string` ||
      e.detail.length > e_.maxPayloadLength ||
      !(e.target instanceof Element) ||
      !Qg(e.target)
    )
      return;
    let i;
    try {
      i = Cf.safeParse(JSON.parse(e.detail));
    } catch {
      return;
    }
    if (!i.success) return;
    let a = e.target,
      o = i.data;
    if (o.type === `registered`) {
      let e = r.get(a);
      (r.size === 0 && u.observe(document, { childList: !0, subtree: !0 }),
        r.set(a, { id: o.registrationId, customRendering: o.customRendering === !0 }),
        !l && e?.id !== o.registrationId && (s?.element === a && h(), t(a)));
      return;
    }
    let d = r.get(a);
    if (d?.id !== o.registrationId) return;
    if (o.type === `rendering-failed`) {
      ((d.customRendering = !1), n?.(a));
      return;
    }
    if (o.type === `invalidated` || o.type === `disposed`) {
      (o.type === `disposed` && (r.delete(a), r.size === 0 && u.disconnect()), s?.element === a && h(), t(a));
      return;
    }
    if (s == null || s.element !== a || s.registrationId !== o.registrationId || s.requestId !== o.requestId)
      return;
    let f = s;
    ((s = null), clearTimeout(f.timer));
    let m = a.getBoundingClientRect();
    if (
      m.x !== f.surfaceRect.x ||
      m.y !== f.surfaceRect.y ||
      m.width !== f.surfaceRect.width ||
      m.height !== f.surfaceRect.height ||
      !p(a, f.point)
    ) {
      f.finish(void 0);
      return;
    }
    if (o.hit == null) {
      f.finish(o.hit);
      return;
    }
    let g = o.hit.rect == null ? void 0 : $g(a, o.hit.rect);
    if (o.hit.rect != null && g == null) {
      f.finish(void 0);
      return;
    }
    f.finish({
      registrationId: d.id,
      id: o.hit.id,
      name: Wo(o.hit.name),
      role: yf(o.hit.role),
      metadata: Go(o.hit.metadata),
      rect: g ?? void 0,
      customRendering: d.customRendering,
    });
  }
  return { hasSurface: d, hitTest: f, renderSelection: m, cancel: h, clear: g, dispose: _ };
}
function Zg(e, t) {
  e.dispatchEvent(new CustomEvent(e_.requestEvent, { bubbles: !0, detail: JSON.stringify(t) }));
}
function Qg(e) {
  return (
    window === window.top &&
    globalThis.isSecureContext &&
    e instanceof HTMLElement &&
    !(e instanceof HTMLIFrameElement) &&
    e.isConnected &&
    e.ownerDocument === document &&
    e.getRootNode() === document
  );
}
function $g(e, t) {
  let n = e.getBoundingClientRect(),
    r = Math.max(0, n.x, t.x),
    i = Math.max(0, n.y, t.y),
    a = Math.min(window.innerWidth, n.right, t.x + t.width),
    o = Math.min(window.innerHeight, n.bottom, t.y + t.height);
  return a > r && o > i ? { x: r, y: i, width: a - r, height: o - i } : null;
}
var e_,
  t_ = o(() => {
    (wf(), qs(), Fl(), (e_ = bf));
  });
function n_({ rootHost: e, onClearDomHover: t, onFeedback: n, onSelected: r, onFallback: i }) {
  let a = !1,
    o = 0,
    s = null,
    c = null,
    l = null,
    u = null,
    d = null,
    f = !1,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = () => {
      let e = m?.getBoundingClientRect();
      e != null && h != null && (e.width !== h.width || e.height !== h.height) && ((h = e), w());
    },
    v = Xg({
      getElementAtPoint: x,
      onInvalidated: (e) => {
        (d == null || d.element === e) && T();
      },
      onRenderingFailed: (e) => {
        (d ?? u)?.element === e && n(p);
      },
    }),
    y = () => {
      document.visibilityState === `hidden` && D();
    };
  return (
    window.addEventListener(`resize`, w),
    document.addEventListener(`scroll`, w, !0),
    document.addEventListener(`visibilitychange`, y),
    window.addEventListener(`pagehide`, D),
    window.visualViewport?.addEventListener(`resize`, w),
    window.visualViewport?.addEventListener(`scroll`, w),
    {
      setEnabled(e) {
        a !== e && ((a = e), e || D());
      },
      hasSurfaceAtPoint(e) {
        return b(e) != null;
      },
      hover(e) {
        return f || d != null ? !0 : ((l = e), b(e) == null ? (E(), !1) : ((o += 1), v.cancel(), S(), !0));
      },
      select(e) {
        let n = b(e);
        if (n == null) return (D(), !1);
        (D(), ee(n), (f = !0));
        let s = o;
        return (
          v.hitTest(n, e).then((u) => {
            if (!a || s !== o) return;
            if (((f = !1), u === void 0 || b(e) !== n)) {
              i(e, !0);
              return;
            }
            if ((t(), u == null)) {
              l = e;
              return;
            }
            d = { element: n, hit: u, point: e };
            let p = d;
            (C(d, !0),
              (c = window.requestAnimationFrame(() => {
                if (!a || d !== p) {
                  c = null;
                  return;
                }
                c = window.requestAnimationFrame(() => {
                  ((c = null), a && d === p && r(r_(p), p.element));
                });
              })));
          }),
          !0
        );
      },
      clearHover: E,
      clear: D,
      invalidate: w,
      dispose() {
        (D(),
          v.dispose(),
          g?.disconnect(),
          window.removeEventListener(`resize`, w),
          document.removeEventListener(`scroll`, w, !0),
          document.removeEventListener(`visibilitychange`, y),
          window.removeEventListener(`pagehide`, D),
          window.visualViewport?.removeEventListener(`resize`, w),
          window.visualViewport?.removeEventListener(`scroll`, w));
      },
    }
  );
  function b(e) {
    if (!a || document.visibilityState === `hidden`) return null;
    let t = x(e);
    return t != null && v.hasSurface(t) ? t : null;
  }
  function x(t) {
    return ll(t.x, t.y, e, `design`, !1);
  }
  function S() {
    s != null ||
      f ||
      d != null ||
      l == null ||
      (s = window.requestAnimationFrame(() => {
        s = null;
        let e = l,
          r = e == null ? null : b(e);
        if (e == null || r == null) return;
        let c = o;
        (ee(r),
          v.hitTest(r, e).then((s) => {
            if (a && c === o && !f && d == null) {
              if ((te(), (p = null), n(null), s === void 0 || b(e) !== r)) {
                i(e, !1);
                return;
              }
              (t(), s != null && ((u = { element: r, hit: s, point: e }), C(u, !1)));
            }
          }));
      }));
  }
  function C(e, t) {
    ((p = { point: e.point, rect: e.hit.rect ?? null, selected: t }),
      n(
        v.renderSelection(e.element, e.hit.registrationId, {
          hoveredId: t ? null : e.hit.id,
          selectedId: t ? e.hit.id : null,
        })
          ? null
          : p,
      ));
  }
  function w() {
    if (c != null) {
      D();
      return;
    }
    (te(), T());
  }
  function T() {
    if (((o += 1), v.cancel(), (f = !1), (p = null), n(null), d != null && !v.hasSurface(d.element))) {
      D();
      return;
    }
    (u != null &&
      !v.renderSelection(u.element, u.hit.registrationId, { hoveredId: u.hit.id, selectedId: null }) &&
      te(),
      S());
  }
  function ee(e) {
    m !== e &&
      ((g ??= new ResizeObserver(_)), g.disconnect(), (m = e), (h = e.getBoundingClientRect()), g.observe(e));
  }
  function te() {
    u != null &&
      (v.renderSelection(u.element, u.hit.registrationId, { hoveredId: null, selectedId: null }), (u = null));
  }
  function E() {
    ((l = null),
      !(d != null || f) &&
        ((o += 1),
        v.cancel(),
        s != null && (window.cancelAnimationFrame(s), (s = null)),
        te(),
        (p = null),
        n(null)));
  }
  function D() {
    ((f = !1),
      (d = null),
      c != null && (window.cancelAnimationFrame(c), (c = null)),
      E(),
      v.clear(),
      g?.disconnect(),
      (m = null),
      (h = null));
  }
}
function r_({ hit: e, point: t }) {
  return {
    kind: `virtual`,
    surfaceId: e.registrationId,
    targetId: e.id,
    elementName: e.name,
    elementMetadata: e.metadata,
    pageUrl: sd(),
    frameUrl: null,
    framePath: [],
    title: e.name ?? document.title,
    elementPath: `virtual object`,
    selector: null,
    role: e.role ?? null,
    name: null,
    nearbyText: null,
    isFixed: !0,
    point: { xPercent: (t.x / window.innerWidth) * 100, y: t.y },
    rect: e.rect ?? { x: t.x, y: t.y, width: 1, height: 1 },
  };
}
var i_ = o(() => {
  (Sl(), yd(), t_());
});
function a_(e, t, { preserveTyping: n }) {
  if (
    e.isTrusted &&
    e.code === `Space` &&
    !(
      !t &&
      (e.isComposing ||
        e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        (n &&
          e
            .composedPath()
            .some(
              (e) =>
                V(e) &&
                (e.isContentEditable ||
                  e.closest(
                    `input,textarea,select,[role='textbox'],[data-codex-composer],[data-codex-terminal]`,
                  ) != null),
            )))
    )
  )
    return (e.preventDefault(), e.stopImmediatePropagation(), e.type === `keydown`);
}
var o_ = o(() => {
  Xc();
});
function s_(e, t) {
  let n = e.isDraggingRegion || js(e.start, t, 4);
  return { ...e, current: t, rect: n ? Ms(e.start, t) : null, isDraggingRegion: n };
}
function c_(e) {
  return e.selectionRects.flatMap((t) => {
    let n = od({ ...e, rect: t });
    return n == null ? [] : [n];
  });
}
function l_(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  return gs(e, { viewport: t, viewportScale: n, zoomFactor: r });
}
function u_(e) {
  if (e.length === 0) return null;
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function d_(e, t = od(e), n = null) {
  if (t == null) return null;
  let r = M_(t, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  if (r == null) return null;
  let i = document,
    a = window;
  for (let t of e.framePath) {
    let e = yc(i, t);
    if (e == null || ((r = O_(r, e)), r == null)) return null;
    let n = e.getBoundingClientRect(),
      o = jc(a);
    if (((r = M_(r, { x: o.x + n.left, y: o.y + n.top, width: n.width, height: n.height })), r == null))
      return null;
    let s = tc(e);
    if (s == null) return null;
    ((a = s), (i = s.document));
  }
  let o = jc(a),
    s =
      n?.isConnected === !0 && n.ownerDocument === i
        ? n
        : e.kind === `element` && e.selector != null
          ? bc(i, e.selector)
          : null,
    c = s == null ? null : k_(s, a);
  for (let t of e.scrollContainers ?? []) {
    let e = bc(i, t.selector);
    if (e == null || (c != null && !c.has(e))) continue;
    let n = a.getComputedStyle(e);
    if (
      ((r = N_(r, j_(e, o), { x: Xs(n.overflowX || n.overflow), y: Xs(n.overflowY || n.overflow) })),
      r == null)
    )
      return null;
  }
  return r;
}
function f_(e) {
  let t = e.ownerDocument.defaultView;
  if (t == null) return null;
  let n = e.getBoundingClientRect(),
    r = { x: n.x, y: n.y, width: n.width, height: n.height },
    i = { x: 0, y: 0, width: t.innerWidth, height: t.innerHeight },
    a = {
      x: e.offsetWidth > 0 ? n.width / e.offsetWidth : 1,
      y: e.offsetHeight > 0 ? n.height / e.offsetHeight : 1,
    },
    o = e;
  for (; i != null && t != null;) {
    if (((i = O_(i, o, { x: 0, y: 0 }, !0)), i == null)) return null;
    if (t === window) return { rect: r, clipRect: i, radiusScale: a };
    let e = t.frameElement;
    if (!$s(e) || !e.isConnected) return null;
    let n = e.getBoundingClientRect(),
      s = {
        x: e.offsetWidth > 0 ? n.width / e.offsetWidth : 1,
        y: e.offsetHeight > 0 ? n.height / e.offsetHeight : 1,
      },
      c = (t) => ({
        x: n.x + (e.clientLeft + t.x) * s.x,
        y: n.y + (e.clientTop + t.y) * s.y,
        width: t.width * s.x,
        height: t.height * s.y,
      });
    ((r = c(r)),
      (i = M_(c(i), {
        x: n.x + e.clientLeft * s.x,
        y: n.y + e.clientTop * s.y,
        width: e.clientWidth * s.x,
        height: e.clientHeight * s.y,
      })),
      (a.x *= s.x),
      (a.y *= s.y),
      (o = e));
    let l = e.ownerDocument.defaultView;
    if (l == null) return null;
    t = l;
  }
  return null;
}
function p_(e, t, { framePath: n = [], frameUrl: r = null } = {}) {
  let i = vc(n) ?? window,
    a = jc(i),
    o = { x: t.x - a.x, y: t.y - a.y },
    s = { x: e.x - a.x, y: e.y - a.y, width: e.width, height: e.height },
    c = Ec(i, o),
    l = sd(),
    u = new Wl(l).getRegionDocumentContext({
      documentTitle: document.title,
      fallbackWindow: window,
      frameWindow: i,
      viewportRect: s,
    });
  return {
    kind: `region`,
    pageUrl: l,
    frameUrl: r,
    title: `Selected browser region`,
    elementPath: `browser region`,
    point: { xPercent: (o.x / i.innerWidth) * 100, y: o.y + i.scrollY },
    rect: { x: s.x, y: s.y + i.scrollY, width: s.width, height: s.height },
    isFixed: !1,
    role: null,
    name: null,
    selector: null,
    framePath: n,
    nearbyText: null,
    documentContext: u,
    ...(c.length === 0 ? {} : { scrollContainers: c }),
  };
}
function m_(e) {
  let t = P_(e.anchor, e.markerViewportPoint);
  return e.viewportSize == null
    ? t
    : t == null
      ? e.viewportSize
      : { height: Math.max(e.viewportSize.height, t.height), width: Math.max(e.viewportSize.width, t.width) };
}
function h_() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`;
}
function g_() {
  return { height: window.innerHeight, width: window.innerWidth };
}
function __(e, t, n, r) {
  return F_(e, t, n, r) ? `hover-box google-docs-annotation-box google-docs-element-box` : `hover-box`;
}
function v_(e, t = E_(), { includeElementFrameScroll: n = !1, markerPointInset: r = z_ } = {}) {
  let i = vc(e.framePath),
    a = Oc(e, i ?? window),
    o = a.x + du(e, i ?? window);
  if (e.kind !== `element` && i != null && i !== window) {
    let n = jc(i);
    return {
      x: R_(n.x + (e.point.xPercent / 100) * i.innerWidth - o, r, t.width - r),
      y: n.y + e.point.y - (e.isFixed ? 0 : i.scrollY) - a.y,
    };
  }
  let s = n && e.kind === `element` && i != null && i !== window ? i.scrollY : 0;
  return {
    x: R_((e.point.xPercent / 100) * t.width - o, r, t.width - r),
    y: (e.isFixed ? e.point.y : e.point.y - t.scrollY - s) - a.y,
  };
}
function y_(e, t) {
  return t == null ? e : { ...e, height: t.height, width: t.width };
}
function b_(e, t, { includeElementFrameScroll: n = !1, viewportSize: r, zoomFactor: i }) {
  let a = v_(e, y_(t, r), { includeElementFrameScroll: n, markerPointInset: z_ / i });
  return { x: a.x * i, y: a.y * i };
}
function x_(e, t, n) {
  let r = od(e),
    i = r == null ? null : M_(r, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }),
    a = d_(e, r, n.liveElement);
  if (a == null || i == null) return null;
  let o = b_(e, t, n),
    s = a.x !== i.x || a.width !== i.width,
    c = a.y !== i.y || a.height !== i.height,
    l = D_(a, n.zoomFactor);
  return (!s || (o.x >= l.x && o.x <= l.x + l.width)) && (!c || (o.y >= l.y && o.y <= l.y + l.height))
    ? o
    : null;
}
function S_(e, t, n) {
  let r = y_(E_(), n),
    i = z_ / t,
    a = v_(e, r, { markerPointInset: i });
  return { x: a.x, y: R_(a.y, i, r.height - i) };
}
function C_(e, t, n, r) {
  return F_(e, t, n, r)
    ? `posted-region-highlight google-docs-annotation-box google-docs-region-box`
    : `posted-region-highlight`;
}
function w_(e, t, n) {
  let r = D_(e, t);
  return { borderRadius: n, left: r.x, top: r.y, width: r.width, height: r.height };
}
function T_(e, t, n, r) {
  return F_(e, t, n, r)
    ? `hover-box region-box google-docs-annotation-box google-docs-region-box`
    : `hover-box region-box`;
}
function E_() {
  let e = window.visualViewport,
    t = e != null && (e.offsetLeft !== 0 || e.offsetTop !== 0 || e.scale !== 1);
  return {
    height: window.innerHeight,
    scrollY: window.scrollY,
    ...(t ? { visualViewport: { offsetLeft: e.offsetLeft, offsetTop: e.offsetTop, scale: e.scale } } : {}),
    width: window.innerWidth,
  };
}
function D_(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function O_(e, t, n = jc(t.ownerDocument.defaultView ?? window), r = !1) {
  let i = t.ownerDocument.defaultView ?? window,
    a = e,
    o = k_(t, i),
    s = Qs(t);
  for (; s != null && s !== i.document.body && s !== i.document.documentElement;) {
    if (!o.has(s)) {
      s = Qs(s);
      continue;
    }
    let e = i.getComputedStyle(s),
      t = Xs(e.overflowX || e.overflow),
      c = Xs(e.overflowY || e.overflow);
    if ((t || c) && ((a = N_(a, j_(s, n, r), { x: t, y: c })), a == null)) return null;
    s = Qs(s);
  }
  return a;
}
function k_(e, t) {
  let n = new Set(),
    r = e;
  for (; r != null;) {
    let e = t.getComputedStyle(r).position,
      i = Qs(r);
    if (e === `absolute` || e === `fixed`)
      for (
        ;
        i != null &&
        i !== t.document.body &&
        i !== t.document.documentElement &&
        !A_(t.getComputedStyle(i), e);
      )
        i = Qs(i);
    if (i == null || i === t.document.body || i === t.document.documentElement) break;
    (n.add(i), (r = i));
  }
  return n;
}
function A_(e, t) {
  return (t === `absolute` && e.position != null && e.position !== `` && e.position !== `static`) ||
    [e.transform, e.translate, e.rotate, e.scale, e.perspective, e.filter, e.backdropFilter].some(
      (e) => e != null && e !== `` && e !== `none`,
    ) ||
    e.contentVisibility === `auto` ||
    (e.containerType != null && e.containerType !== `` && e.containerType !== `normal`) ||
    e.contain.split(/\s+/).some((e) => [`content`, `layout`, `paint`, `strict`].includes(e))
    ? !0
    : e.willChange
        .split(/\s*,\s*/)
        .some((e) =>
          [
            `backdrop-filter`,
            `contain`,
            `filter`,
            `perspective`,
            `rotate`,
            `scale`,
            `transform`,
            `translate`,
          ].includes(e),
        );
}
function j_(e, t, n = !1) {
  let r = e.getBoundingClientRect(),
    i = n && e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
    a = n && e.offsetHeight > 0 ? r.height / e.offsetHeight : 1;
  return {
    x: t.x + r.left + e.clientLeft * i,
    y: t.y + r.top + e.clientTop * a,
    width: e.clientWidth * i,
    height: e.clientHeight * a,
  };
}
function M_(e, t) {
  return N_(e, t, { x: !0, y: !0 });
}
function N_(e, t, n) {
  let r = n.x ? Math.max(e.x, t.x) : e.x,
    i = n.y ? Math.max(e.y, t.y) : e.y,
    a = n.x ? Math.min(e.x + e.width, t.x + t.width) : e.x + e.width,
    o = n.y ? Math.min(e.y + e.height, t.y + t.height) : e.y + e.height;
  return a <= r || o <= i ? null : { x: r, y: i, width: a - r, height: o - i };
}
function P_(e, t) {
  if (t == null) return;
  let n = e.point.xPercent <= 0 ? 0 : t.x / (e.point.xPercent / 100);
  return {
    height: Math.max(window.innerHeight, t.y + z_),
    width: Math.max(window.innerWidth, n, t.x + z_, e.rect.x + e.rect.width),
  };
}
function F_(e, t, n, r) {
  return I_(e) && L_(t, n, r);
}
function I_(e) {
  return e == null ? us(sd()) : Wl.isGoogleDocsAnchor(e) || us(e.pageUrl);
}
function L_(e, t, n) {
  return e == null || t <= 0 || n <= 0 ? !1 : e.width >= t * B_ && e.height >= n * V_;
}
function R_(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var z_,
  B_,
  V_,
  H_ = o(() => {
    (qs(), yd(), Xc(), Gl(), Xu(), (z_ = 16 + Gs / 2), (B_ = 0.45), (V_ = 0.3));
  });
function U_(e, t, n) {
  if (e.id === n?.id) return !0;
  if (t == null || t.anchor.type === `text` || t.target.mode !== `create`) return !1;
  let r = X_(t.anchor),
    i = [r.primary, ...r.additional].map(({ anchor: e }) => e);
  return [e.anchor, ...(e.additionalAnchors ?? [])].some(
    (e) => e.kind === `region` && i.some((t) => ks(e, t)),
  );
}
function W_(e, t, n) {
  return e.anchor.kind === `virtual`
    ? {
        type: `virtual`,
        additionalSelections: [],
        themeVariant: e.themeVariant ?? h_(),
        value: e.anchor,
        viewportSize: e.viewportSize,
      }
    : e.anchor.kind === `text`
      ? { type: `text`, themeVariant: e.themeVariant ?? h_(), value: e.anchor }
      : e.anchor.kind === `region`
        ? {
            type: `region`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => G_(e, n)),
            themeVariant: e.themeVariant ?? h_(),
            value: e.anchor,
            viewportSize: g_(),
          }
        : {
            type: `element`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => G_(e, n)),
            element: t,
            markerViewportPoint: e.markerViewportPoint,
            themeVariant: e.themeVariant ?? h_(),
            value: e.anchor,
            viewportSize: g_(),
          };
}
function G_(e, t) {
  return e.kind === `element`
    ? { anchor: e, liveElement: nd(e, void 0, t) }
    : { anchor: e, liveElement: null };
}
function K_(e, t, n) {
  let r = e.anchorState.anchor,
    i = new Set(n.map((e) => e.id));
  if (r.kind === `virtual`)
    return {
      target: e.target,
      commentIdsAtOpen: i,
      anchor: {
        type: `virtual`,
        additionalSelections: [],
        themeVariant: e.anchorState.themeVariant,
        value: r,
        viewportSize: e.anchorState.viewportSize,
      },
    };
  if (r.kind === `text`)
    return {
      target: e.target,
      commentIdsAtOpen: i,
      anchor: {
        type: `text`,
        ...(e.anchorState.themeVariant == null ? {} : { themeVariant: e.anchorState.themeVariant }),
        value: r,
      },
    };
  let a = (e.anchorState.additionalAnchors ?? []).map((e) => G_(e, t));
  if (r.kind === `region`)
    return {
      target: e.target,
      commentIdsAtOpen: i,
      anchor: {
        type: `region`,
        additionalSelections: a,
        themeVariant: e.anchorState.themeVariant,
        value: r,
        viewportSize: e.anchorState.viewportSize,
      },
    };
  let o = nd(r, void 0, t);
  return {
    target: e.target,
    commentIdsAtOpen: i,
    anchor: {
      type: `element`,
      additionalSelections: a,
      cardViewportRect: e.anchorState.cardViewportRect,
      element: o,
      markerViewportPoint: e.anchorState.viewportPoint,
      themeVariant: e.anchorState.themeVariant,
      viewportSize: e.anchorState.viewportSize,
      value: r,
    },
  };
}
function q_(e, t, n) {
  if (e?.target.mode !== `create`) return null;
  let r = e.anchor,
    i = r.type === `text` ? [] : [X_(r).primary, ...r.additionalSelections];
  return (
    t.find(
      (t) =>
        !e.commentIdsAtOpen.has(t.id) &&
        [t.anchor, ...(t.additionalAnchors ?? [])].some((e) =>
          r.type === `text` ? ks(e, r.value) : e.kind !== `text` && i.some((t) => el(G_(e, n), t)),
        ),
    ) ?? null
  );
}
function J_(e) {
  return e.type === `element` ? ev(e.element, e.value, e.viewportSize) : e.value;
}
function Y_(e, t) {
  return e.type === `element`
    ? e.element?.isConnected && e.element.ownerDocument === Sc(e.value.framePath)
      ? e.element
      : nd(e.value, void 0, t)
    : null;
}
function X_(e) {
  return {
    additional: e.additionalSelections,
    primary:
      e.type === `element`
        ? { anchor: e.value, liveElement: e.element }
        : { anchor: e.value, liveElement: null },
  };
}
function Z_(e, t, n) {
  let r = n?.themeVariant ?? e.themeVariant,
    i = n?.viewportSize ?? e.viewportSize;
  return t.primary.anchor.kind === `virtual`
    ? { type: `virtual`, additionalSelections: [], themeVariant: r, value: t.primary.anchor, viewportSize: i }
    : t.primary.anchor.kind === `region`
      ? {
          type: `region`,
          additionalSelections: t.additional,
          themeVariant: r,
          value: t.primary.anchor,
          viewportSize: i,
        }
      : {
          type: `element`,
          additionalSelections: t.additional,
          ...(e.type === `element` && e.cardViewportRect != null
            ? { cardViewportRect: e.cardViewportRect }
            : {}),
          element: t.primary.liveElement,
          markerViewportPoint: e.type === `element` ? e.markerViewportPoint : void 0,
          themeVariant: r,
          value: t.primary.anchor,
          viewportSize: i,
        };
}
function Q_(e, t) {
  return e.anchor.kind === `element` ? ev(e.liveElement, e.anchor, t) : e.anchor;
}
function $_(e, t, { clipToVisibleArea: n = !1, selectionIndexOffset: r = 0, viewportSize: i } = {}) {
  return e.flatMap((e, a) => {
    let o = Q_(e, i),
      s = e.anchor.kind === `element` && e.liveElement != null ? Zu(e.liveElement) : null,
      c = s?.rect ?? od(o),
      l = c == null ? null : n ? d_(o, c, e.liveElement) : c;
    return l == null
      ? []
      : [
          {
            borderRadius: s?.borderRadius,
            className: o.kind === `region` ? T_(o, c, t.width, t.height) : __(o, c, t.width, t.height),
            isPageAnnotation: Qu(o),
            key: `${e.anchor.kind}:${e.anchor.framePath.join(`>`)}:${e.anchor.selector ?? e.anchor.elementPath}:${e.anchor.rect.x}:${e.anchor.rect.y}:${a}`,
            rect: l,
            selectionIndex: r + a,
          },
        ];
  });
}
function ev(e, t, n) {
  return e == null || !e.isConnected ? t : ed(e, t, n);
}
var tv = o(() => {
  (qs(), al(), yd(), H_(), Xc());
});
function nv(e, t) {
  return e.anchor.kind === `element` ? nd(e.anchor, e.id, t) : null;
}
function rv(e, t, n = !1, r = null) {
  if (e.anchor.kind === `text`)
    return { ...e, ...(r == null ? {} : { anchor: r }), selectionSourceIndexes: [0] };
  let i = m_(e),
    a = [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((r, a) => {
      if (r.kind !== `element`) return [{ anchor: r, sourceIndex: a }];
      let o = nd(r, a === 0 ? e.id : void 0, t);
      return o == null
        ? !n && r.selector != null && ld(r.pageUrl, sd())
          ? []
          : [{ anchor: r, sourceIndex: a }]
        : (a === 0 && t.set(e.id, o),
          [{ anchor: ed(o, r, i, a === 0 ? e.markerViewportPoint : void 0), sourceIndex: a }]);
    }),
    [o, ...s] = a;
  return o == null
    ? null
    : {
        ...e,
        anchor: o.anchor,
        additionalAnchors: s.length === 0 ? void 0 : s.map(({ anchor: e }) => e),
        markerViewportPoint: o.sourceIndex === 0 ? e.markerViewportPoint : void 0,
        markerViewportSize: i,
        selectionSourceIndexes: a.map(({ sourceIndex: e }) => e),
      };
}
function iv(e, t, n) {
  if (e.anchor.kind === `text` || t.kind === `text`) return e;
  let r = [e.anchor, ...(e.additionalAnchors ?? [])].filter((e, t) => t !== n);
  return {
    ...e,
    anchor: t,
    additionalAnchors: r.length === 0 ? void 0 : r,
    markerViewportPoint: n === 0 ? e.markerViewportPoint : void 0,
  };
}
var av = o(() => {
    (yd(), H_());
  }),
  ov = s((e, t) => {
    function n() {
      ((this.__data__ = []), (this.size = 0));
    }
    t.exports = n;
  }),
  sv = s((e, t) => {
    function n(e, t) {
      return e === t || (e !== e && t !== t);
    }
    t.exports = n;
  }),
  cv = s((e, t) => {
    var n = sv();
    function r(e, t) {
      for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
      return -1;
    }
    t.exports = r;
  }),
  lv = s((e, t) => {
    var n = cv(),
      r = Array.prototype.splice;
    function i(e) {
      var t = this.__data__,
        i = n(t, e);
      return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
    }
    t.exports = i;
  }),
  uv = s((e, t) => {
    var n = cv();
    function r(e) {
      var t = this.__data__,
        r = n(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    t.exports = r;
  }),
  dv = s((e, t) => {
    var n = cv();
    function r(e) {
      return n(this.__data__, e) > -1;
    }
    t.exports = r;
  }),
  fv = s((e, t) => {
    var n = cv();
    function r(e, t) {
      var r = this.__data__,
        i = n(r, e);
      return (i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this);
    }
    t.exports = r;
  }),
  pv = s((e, t) => {
    var n = ov(),
      r = lv(),
      i = uv(),
      a = dv(),
      o = fv();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  mv = s((e, t) => {
    var n = pv();
    function r() {
      ((this.__data__ = new n()), (this.size = 0));
    }
    t.exports = r;
  }),
  hv = s((e, t) => {
    function n(e) {
      var t = this.__data__,
        n = t.delete(e);
      return ((this.size = t.size), n);
    }
    t.exports = n;
  }),
  gv = s((e, t) => {
    function n(e) {
      return this.__data__.get(e);
    }
    t.exports = n;
  }),
  _v = s((e, t) => {
    function n(e) {
      return this.__data__.has(e);
    }
    t.exports = n;
  }),
  vv = s((e, t) => {
    t.exports = typeof global == `object` && global && global.Object === Object && global;
  }),
  yv = s((e, t) => {
    var n = vv(),
      r = typeof self == `object` && self && self.Object === Object && self;
    t.exports = n || r || Function(`return this`)();
  }),
  bv = s((e, t) => {
    t.exports = yv().Symbol;
  }),
  xv = s((e, t) => {
    var n = bv(),
      r = Object.prototype,
      i = r.hasOwnProperty,
      a = r.toString,
      o = n ? n.toStringTag : void 0;
    function s(e) {
      var t = i.call(e, o),
        n = e[o];
      try {
        e[o] = void 0;
        var r = !0;
      } catch {}
      var s = a.call(e);
      return (r && (t ? (e[o] = n) : delete e[o]), s);
    }
    t.exports = s;
  }),
  Sv = s((e, t) => {
    var n = Object.prototype.toString;
    function r(e) {
      return n.call(e);
    }
    t.exports = r;
  }),
  Cv = s((e, t) => {
    var n = bv(),
      r = xv(),
      i = Sv(),
      a = `[object Null]`,
      o = `[object Undefined]`,
      s = n ? n.toStringTag : void 0;
    function c(e) {
      return e == null ? (e === void 0 ? o : a) : s && s in Object(e) ? r(e) : i(e);
    }
    t.exports = c;
  }),
  wv = s((e, t) => {
    function n(e) {
      var t = typeof e;
      return e != null && (t == `object` || t == `function`);
    }
    t.exports = n;
  }),
  Tv = s((e, t) => {
    var n = Cv(),
      r = wv(),
      i = `[object AsyncFunction]`,
      a = `[object Function]`,
      o = `[object GeneratorFunction]`,
      s = `[object Proxy]`;
    function c(e) {
      if (!r(e)) return !1;
      var t = n(e);
      return t == a || t == o || t == i || t == s;
    }
    t.exports = c;
  }),
  Ev = s((e, t) => {
    t.exports = yv()[`__core-js_shared__`];
  }),
  Dv = s((e, t) => {
    var n = Ev(),
      r = (function () {
        var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ``);
        return e ? `Symbol(src)_1.` + e : ``;
      })();
    function i(e) {
      return !!r && r in e;
    }
    t.exports = i;
  }),
  Ov = s((e, t) => {
    var n = Function.prototype.toString;
    function r(e) {
      if (e != null) {
        try {
          return n.call(e);
        } catch {}
        try {
          return e + ``;
        } catch {}
      }
      return ``;
    }
    t.exports = r;
  }),
  kv = s((e, t) => {
    var n = Tv(),
      r = Dv(),
      i = wv(),
      a = Ov(),
      o = /[\\^$.*+?()[\]{}|]/g,
      s = /^\[object .+?Constructor\]$/,
      c = Function.prototype,
      l = Object.prototype,
      u = c.toString,
      d = l.hasOwnProperty,
      f = RegExp(
        `^` +
          u
            .call(d)
            .replace(o, `\\$&`)
            .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, `$1.*?`) +
          `$`,
      );
    function p(e) {
      return !i(e) || r(e) ? !1 : (n(e) ? f : s).test(a(e));
    }
    t.exports = p;
  }),
  Av = s((e, t) => {
    function n(e, t) {
      return e?.[t];
    }
    t.exports = n;
  }),
  jv = s((e, t) => {
    var n = kv(),
      r = Av();
    function i(e, t) {
      var i = r(e, t);
      return n(i) ? i : void 0;
    }
    t.exports = i;
  }),
  Mv = s((e, t) => {
    t.exports = jv()(yv(), `Map`);
  }),
  Nv = s((e, t) => {
    t.exports = jv()(Object, `create`);
  }),
  Pv = s((e, t) => {
    var n = Nv();
    function r() {
      ((this.__data__ = n ? n(null) : {}), (this.size = 0));
    }
    t.exports = r;
  }),
  Fv = s((e, t) => {
    function n(e) {
      var t = this.has(e) && delete this.__data__[e];
      return ((this.size -= +!!t), t);
    }
    t.exports = n;
  }),
  Iv = s((e, t) => {
    var n = Nv(),
      r = `__lodash_hash_undefined__`,
      i = Object.prototype.hasOwnProperty;
    function a(e) {
      var t = this.__data__;
      if (n) {
        var a = t[e];
        return a === r ? void 0 : a;
      }
      return i.call(t, e) ? t[e] : void 0;
    }
    t.exports = a;
  }),
  Lv = s((e, t) => {
    var n = Nv(),
      r = Object.prototype.hasOwnProperty;
    function i(e) {
      var t = this.__data__;
      return n ? t[e] !== void 0 : r.call(t, e);
    }
    t.exports = i;
  }),
  Rv = s((e, t) => {
    var n = Nv(),
      r = `__lodash_hash_undefined__`;
    function i(e, t) {
      var i = this.__data__;
      return ((this.size += +!this.has(e)), (i[e] = n && t === void 0 ? r : t), this);
    }
    t.exports = i;
  }),
  zv = s((e, t) => {
    var n = Pv(),
      r = Fv(),
      i = Iv(),
      a = Lv(),
      o = Rv();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  Bv = s((e, t) => {
    var n = zv(),
      r = pv(),
      i = Mv();
    function a() {
      ((this.size = 0), (this.__data__ = { hash: new n(), map: new (i || r)(), string: new n() }));
    }
    t.exports = a;
  }),
  Vv = s((e, t) => {
    function n(e) {
      var t = typeof e;
      return t == `string` || t == `number` || t == `symbol` || t == `boolean`
        ? e !== `__proto__`
        : e === null;
    }
    t.exports = n;
  }),
  Hv = s((e, t) => {
    var n = Vv();
    function r(e, t) {
      var r = e.__data__;
      return n(t) ? r[typeof t == `string` ? `string` : `hash`] : r.map;
    }
    t.exports = r;
  }),
  Uv = s((e, t) => {
    var n = Hv();
    function r(e) {
      var t = n(this, e).delete(e);
      return ((this.size -= +!!t), t);
    }
    t.exports = r;
  }),
  Wv = s((e, t) => {
    var n = Hv();
    function r(e) {
      return n(this, e).get(e);
    }
    t.exports = r;
  }),
  Gv = s((e, t) => {
    var n = Hv();
    function r(e) {
      return n(this, e).has(e);
    }
    t.exports = r;
  }),
  Kv = s((e, t) => {
    var n = Hv();
    function r(e, t) {
      var r = n(this, e),
        i = r.size;
      return (r.set(e, t), (this.size += r.size == i ? 0 : 1), this);
    }
    t.exports = r;
  }),
  qv = s((e, t) => {
    var n = Bv(),
      r = Uv(),
      i = Wv(),
      a = Gv(),
      o = Kv();
    function s(e) {
      var t = -1,
        n = e == null ? 0 : e.length;
      for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1]);
      }
    }
    ((s.prototype.clear = n),
      (s.prototype.delete = r),
      (s.prototype.get = i),
      (s.prototype.has = a),
      (s.prototype.set = o),
      (t.exports = s));
  }),
  Jv = s((e, t) => {
    var n = pv(),
      r = Mv(),
      i = qv(),
      a = 200;
    function o(e, t) {
      var o = this.__data__;
      if (o instanceof n) {
        var s = o.__data__;
        if (!r || s.length < a - 1) return (s.push([e, t]), (this.size = ++o.size), this);
        o = this.__data__ = new i(s);
      }
      return (o.set(e, t), (this.size = o.size), this);
    }
    t.exports = o;
  }),
  Yv = s((e, t) => {
    var n = pv(),
      r = mv(),
      i = hv(),
      a = gv(),
      o = _v(),
      s = Jv();
    function c(e) {
      var t = (this.__data__ = new n(e));
      this.size = t.size;
    }
    ((c.prototype.clear = r),
      (c.prototype.delete = i),
      (c.prototype.get = a),
      (c.prototype.has = o),
      (c.prototype.set = s),
      (t.exports = c));
  }),
  Xv = s((e, t) => {
    function n(e) {
      return (this.__data__.set(e, `__lodash_hash_undefined__`), this);
    }
    t.exports = n;
  }),
  Zv = s((e, t) => {
    function n(e) {
      return this.__data__.has(e);
    }
    t.exports = n;
  }),
  Qv = s((e, t) => {
    var n = qv(),
      r = Xv(),
      i = Zv();
    function a(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
    }
    ((a.prototype.add = a.prototype.push = r), (a.prototype.has = i), (t.exports = a));
  }),
  $v = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
      return !1;
    }
    t.exports = n;
  }),
  ey = s((e, t) => {
    function n(e, t) {
      return e.has(t);
    }
    t.exports = n;
  }),
  ty = s((e, t) => {
    var n = Qv(),
      r = $v(),
      i = ey(),
      a = 1,
      o = 2;
    function s(e, t, s, c, l, u) {
      var d = s & a,
        f = e.length,
        p = t.length;
      if (f != p && !(d && p > f)) return !1;
      var m = u.get(e),
        h = u.get(t);
      if (m && h) return m == t && h == e;
      var g = -1,
        _ = !0,
        v = s & o ? new n() : void 0;
      for (u.set(e, t), u.set(t, e); ++g < f;) {
        var y = e[g],
          b = t[g];
        if (c) var x = d ? c(b, y, g, t, e, u) : c(y, b, g, e, t, u);
        if (x !== void 0) {
          if (x) continue;
          _ = !1;
          break;
        }
        if (v) {
          if (
            !r(t, function (e, t) {
              if (!i(v, t) && (y === e || l(y, e, s, c, u))) return v.push(t);
            })
          ) {
            _ = !1;
            break;
          }
        } else if (!(y === b || l(y, b, s, c, u))) {
          _ = !1;
          break;
        }
      }
      return (u.delete(e), u.delete(t), _);
    }
    t.exports = s;
  }),
  ny = s((e, t) => {
    t.exports = yv().Uint8Array;
  }),
  ry = s((e, t) => {
    function n(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e, r) {
          n[++t] = [r, e];
        }),
        n
      );
    }
    t.exports = n;
  }),
  iy = s((e, t) => {
    function n(e) {
      var t = -1,
        n = Array(e.size);
      return (
        e.forEach(function (e) {
          n[++t] = e;
        }),
        n
      );
    }
    t.exports = n;
  }),
  ay = s((e, t) => {
    var n = bv(),
      r = ny(),
      i = sv(),
      a = ty(),
      o = ry(),
      s = iy(),
      c = 1,
      l = 2,
      u = `[object Boolean]`,
      d = `[object Date]`,
      f = `[object Error]`,
      p = `[object Map]`,
      m = `[object Number]`,
      h = `[object RegExp]`,
      g = `[object Set]`,
      _ = `[object String]`,
      v = `[object Symbol]`,
      y = `[object ArrayBuffer]`,
      b = `[object DataView]`,
      x = n ? n.prototype : void 0,
      S = x ? x.valueOf : void 0;
    function C(e, t, n, x, C, w, T) {
      switch (n) {
        case b:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          ((e = e.buffer), (t = t.buffer));
        case y:
          return !(e.byteLength != t.byteLength || !w(new r(e), new r(t)));
        case u:
        case d:
        case m:
          return i(+e, +t);
        case f:
          return e.name == t.name && e.message == t.message;
        case h:
        case _:
          return e == t + ``;
        case p:
          var ee = o;
        case g:
          var te = x & c;
          if (((ee ||= s), e.size != t.size && !te)) return !1;
          var E = T.get(e);
          if (E) return E == t;
          ((x |= l), T.set(e, t));
          var D = a(ee(e), ee(t), x, C, w, T);
          return (T.delete(e), D);
        case v:
          if (S) return S.call(e) == S.call(t);
      }
      return !1;
    }
    t.exports = C;
  }),
  oy = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
      return e;
    }
    t.exports = n;
  }),
  sy = s((e, t) => {
    t.exports = Array.isArray;
  }),
  cy = s((e, t) => {
    var n = oy(),
      r = sy();
    function i(e, t, i) {
      var a = t(e);
      return r(e) ? a : n(a, i(e));
    }
    t.exports = i;
  }),
  ly = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
        var o = e[n];
        t(o, n, e) && (a[i++] = o);
      }
      return a;
    }
    t.exports = n;
  }),
  uy = s((e, t) => {
    function n() {
      return [];
    }
    t.exports = n;
  }),
  dy = s((e, t) => {
    var n = ly(),
      r = uy(),
      i = Object.prototype.propertyIsEnumerable,
      a = Object.getOwnPropertySymbols;
    t.exports = a
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              n(a(e), function (t) {
                return i.call(e, t);
              }));
        }
      : r;
  }),
  fy = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
      return r;
    }
    t.exports = n;
  }),
  py = s((e, t) => {
    function n(e) {
      return typeof e == `object` && !!e;
    }
    t.exports = n;
  }),
  my = s((e, t) => {
    var n = Cv(),
      r = py(),
      i = `[object Arguments]`;
    function a(e) {
      return r(e) && n(e) == i;
    }
    t.exports = a;
  }),
  hy = s((e, t) => {
    var n = my(),
      r = py(),
      i = Object.prototype,
      a = i.hasOwnProperty,
      o = i.propertyIsEnumerable;
    t.exports = n(
      (function () {
        return arguments;
      })(),
    )
      ? n
      : function (e) {
          return r(e) && a.call(e, `callee`) && !o.call(e, `callee`);
        };
  }),
  gy = s((e, t) => {
    function n() {
      return !1;
    }
    t.exports = n;
  }),
  _y = s((e, t) => {
    var n = yv(),
      r = gy(),
      i = typeof e == `object` && e && !e.nodeType && e,
      a = i && typeof t == `object` && t && !t.nodeType && t,
      o = a && a.exports === i ? n.Buffer : void 0;
    t.exports = (o ? o.isBuffer : void 0) || r;
  }),
  vy = s((e, t) => {
    var n = /^(?:0|[1-9]\d*)$/;
    function r(e, t) {
      var r = typeof e;
      return (
        (t ??= 9007199254740991),
        !!t && (r == `number` || (r != `symbol` && n.test(e))) && e > -1 && e % 1 == 0 && e < t
      );
    }
    t.exports = r;
  }),
  yy = s((e, t) => {
    function n(e) {
      return typeof e == `number` && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    t.exports = n;
  }),
  by = s((e, t) => {
    var n = Cv(),
      r = yy(),
      i = py(),
      a = `[object Arguments]`,
      o = `[object Array]`,
      s = `[object Boolean]`,
      c = `[object Date]`,
      l = `[object Error]`,
      u = `[object Function]`,
      d = `[object Map]`,
      f = `[object Number]`,
      p = `[object Object]`,
      m = `[object RegExp]`,
      h = `[object Set]`,
      g = `[object String]`,
      _ = `[object WeakMap]`,
      v = `[object ArrayBuffer]`,
      y = `[object DataView]`,
      b = `[object Float32Array]`,
      x = `[object Float64Array]`,
      S = `[object Int8Array]`,
      C = `[object Int16Array]`,
      w = `[object Int32Array]`,
      T = `[object Uint8Array]`,
      ee = `[object Uint8ClampedArray]`,
      te = `[object Uint16Array]`,
      E = `[object Uint32Array]`,
      D = {};
    ((D[b] = D[x] = D[S] = D[C] = D[w] = D[T] = D[ee] = D[te] = D[E] = !0),
      (D[a] =
        D[o] =
        D[v] =
        D[s] =
        D[y] =
        D[c] =
        D[l] =
        D[u] =
        D[d] =
        D[f] =
        D[p] =
        D[m] =
        D[h] =
        D[g] =
        D[_] =
          !1));
    function ne(e) {
      return i(e) && r(e.length) && !!D[n(e)];
    }
    t.exports = ne;
  }),
  xy = s((e, t) => {
    function n(e) {
      return function (t) {
        return e(t);
      };
    }
    t.exports = n;
  }),
  Sy = s((e, t) => {
    var n = vv(),
      r = typeof e == `object` && e && !e.nodeType && e,
      i = r && typeof t == `object` && t && !t.nodeType && t,
      a = i && i.exports === r && n.process;
    t.exports = (function () {
      try {
        return (i && i.require && i.require(`util`).types) || (a && a.binding && a.binding(`util`));
      } catch {}
    })();
  }),
  Cy = s((e, t) => {
    var n = by(),
      r = xy(),
      i = Sy(),
      a = i && i.isTypedArray;
    t.exports = a ? r(a) : n;
  }),
  wy = s((e, t) => {
    var n = fy(),
      r = hy(),
      i = sy(),
      a = _y(),
      o = vy(),
      s = Cy(),
      c = Object.prototype.hasOwnProperty;
    function l(e, t) {
      var l = i(e),
        u = !l && r(e),
        d = !l && !u && a(e),
        f = !l && !u && !d && s(e),
        p = l || u || d || f,
        m = p ? n(e.length, String) : [],
        h = m.length;
      for (var g in e)
        (t || c.call(e, g)) &&
          !(
            p &&
            (g == `length` ||
              (d && (g == `offset` || g == `parent`)) ||
              (f && (g == `buffer` || g == `byteLength` || g == `byteOffset`)) ||
              o(g, h))
          ) &&
          m.push(g);
      return m;
    }
    t.exports = l;
  }),
  Ty = s((e, t) => {
    var n = Object.prototype;
    function r(e) {
      var t = e && e.constructor;
      return e === ((typeof t == `function` && t.prototype) || n);
    }
    t.exports = r;
  }),
  Ey = s((e, t) => {
    function n(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    t.exports = n;
  }),
  Dy = s((e, t) => {
    t.exports = Ey()(Object.keys, Object);
  }),
  Oy = s((e, t) => {
    var n = Ty(),
      r = Dy(),
      i = Object.prototype.hasOwnProperty;
    function a(e) {
      if (!n(e)) return r(e);
      var t = [];
      for (var a in Object(e)) i.call(e, a) && a != `constructor` && t.push(a);
      return t;
    }
    t.exports = a;
  }),
  ky = s((e, t) => {
    var n = Tv(),
      r = yy();
    function i(e) {
      return e != null && r(e.length) && !n(e);
    }
    t.exports = i;
  }),
  Ay = s((e, t) => {
    var n = wy(),
      r = Oy(),
      i = ky();
    function a(e) {
      return i(e) ? n(e) : r(e);
    }
    t.exports = a;
  }),
  jy = s((e, t) => {
    var n = cy(),
      r = dy(),
      i = Ay();
    function a(e) {
      return n(e, i, r);
    }
    t.exports = a;
  }),
  My = s((e, t) => {
    var n = jy(),
      r = 1,
      i = Object.prototype.hasOwnProperty;
    function a(e, t, a, o, s, c) {
      var l = a & r,
        u = n(e),
        d = u.length;
      if (d != n(t).length && !l) return !1;
      for (var f = d; f--;) {
        var p = u[f];
        if (!(l ? p in t : i.call(t, p))) return !1;
      }
      var m = c.get(e),
        h = c.get(t);
      if (m && h) return m == t && h == e;
      var g = !0;
      (c.set(e, t), c.set(t, e));
      for (var _ = l; ++f < d;) {
        p = u[f];
        var v = e[p],
          y = t[p];
        if (o) var b = l ? o(y, v, p, t, e, c) : o(v, y, p, e, t, c);
        if (!(b === void 0 ? v === y || s(v, y, a, o, c) : b)) {
          g = !1;
          break;
        }
        _ ||= p == `constructor`;
      }
      if (g && !_) {
        var x = e.constructor,
          S = t.constructor;
        x != S &&
          `constructor` in e &&
          `constructor` in t &&
          !(typeof x == `function` && x instanceof x && typeof S == `function` && S instanceof S) &&
          (g = !1);
      }
      return (c.delete(e), c.delete(t), g);
    }
    t.exports = a;
  }),
  Ny = s((e, t) => {
    t.exports = jv()(yv(), `DataView`);
  }),
  Py = s((e, t) => {
    t.exports = jv()(yv(), `Promise`);
  }),
  Fy = s((e, t) => {
    t.exports = jv()(yv(), `Set`);
  }),
  Iy = s((e, t) => {
    t.exports = jv()(yv(), `WeakMap`);
  }),
  Ly = s((e, t) => {
    var n = Ny(),
      r = Mv(),
      i = Py(),
      a = Fy(),
      o = Iy(),
      s = Cv(),
      c = Ov(),
      l = `[object Map]`,
      u = `[object Object]`,
      d = `[object Promise]`,
      f = `[object Set]`,
      p = `[object WeakMap]`,
      m = `[object DataView]`,
      h = c(n),
      g = c(r),
      _ = c(i),
      v = c(a),
      y = c(o),
      b = s;
    (((n && b(new n(new ArrayBuffer(1))) != m) ||
      (r && b(new r()) != l) ||
      (i && b(i.resolve()) != d) ||
      (a && b(new a()) != f) ||
      (o && b(new o()) != p)) &&
      (b = function (e) {
        var t = s(e),
          n = t == u ? e.constructor : void 0,
          r = n ? c(n) : ``;
        if (r)
          switch (r) {
            case h:
              return m;
            case g:
              return l;
            case _:
              return d;
            case v:
              return f;
            case y:
              return p;
          }
        return t;
      }),
      (t.exports = b));
  }),
  Ry = s((e, t) => {
    var n = Yv(),
      r = ty(),
      i = ay(),
      a = My(),
      o = Ly(),
      s = sy(),
      c = _y(),
      l = Cy(),
      u = 1,
      d = `[object Arguments]`,
      f = `[object Array]`,
      p = `[object Object]`,
      m = Object.prototype.hasOwnProperty;
    function h(e, t, h, g, _, v) {
      var y = s(e),
        b = s(t),
        x = y ? f : o(e),
        S = b ? f : o(t);
      ((x = x == d ? p : x), (S = S == d ? p : S));
      var C = x == p,
        w = S == p,
        T = x == S;
      if (T && c(e)) {
        if (!c(t)) return !1;
        ((y = !0), (C = !1));
      }
      if (T && !C) return ((v ||= new n()), y || l(e) ? r(e, t, h, g, _, v) : i(e, t, x, h, g, _, v));
      if (!(h & u)) {
        var ee = C && m.call(e, `__wrapped__`),
          te = w && m.call(t, `__wrapped__`);
        if (ee || te) {
          var E = ee ? e.value() : e,
            D = te ? t.value() : t;
          return ((v ||= new n()), _(E, D, h, g, v));
        }
      }
      return T ? ((v ||= new n()), a(e, t, h, g, _, v)) : !1;
    }
    t.exports = h;
  }),
  zy = s((e, t) => {
    var n = Ry(),
      r = py();
    function i(e, t, a, o, s) {
      return e === t
        ? !0
        : e == null || t == null || (!r(e) && !r(t))
          ? e !== e && t !== t
          : n(e, t, a, o, i, s);
    }
    t.exports = i;
  }),
  By = s((e, t) => {
    var n = zy();
    function r(e, t) {
      return n(e, t);
    }
    t.exports = r;
  });
function Vy(e, t, n, r, i) {
  let a = () => i.map((e) => ({ rect: rd(e), borderRadius: Ac(e).getComputedStyle(e).borderRadius })),
    o = a(),
    s = null,
    c = !1,
    l = (e = []) => {
      ((c ||= e.some((e) => i.some((t) => t.contains(e.target) || e.target.contains(t)))),
        (s ??= window.requestAnimationFrame(() => {
          s = null;
          let e = a();
          ((i.length === 0 || i.some((e) => !e.isConnected) || c || !(0, Uy.default)(o, e)) && n(),
            (o = e),
            (c = !1));
        })));
    },
    u = () => l(),
    d = window.visualViewport;
  (d?.addEventListener(`resize`, n), d?.addEventListener(`scroll`, r));
  let f = ac((i, a) => {
    (a.addEventListener(`resize`, n),
      a.addEventListener(`scroll`, r),
      i.addEventListener(`scroll`, r, !0),
      i.addEventListener(`transitionend`, u, !0));
    let o = Hy(i, e, l),
      s = kc(a, t, r);
    return () => {
      (a.removeEventListener(`resize`, n),
        a.removeEventListener(`scroll`, r),
        i.removeEventListener(`scroll`, r, !0),
        i.removeEventListener(`transitionend`, u, !0),
        o(),
        s());
    };
  });
  return () => {
    (d?.removeEventListener(`resize`, n),
      d?.removeEventListener(`scroll`, r),
      f(),
      s != null && window.cancelAnimationFrame(s));
  };
}
function Hy(e, t, n) {
  let r = new MutationObserver((e) => {
    e.every(
      (e) =>
        t.contains(e.target) || (e.type === `characterData` && e.target.parentElement?.localName !== `style`),
    ) || n(e);
  });
  return (
    r.observe(e.documentElement, { ...Wc, characterData: !0 }),
    () => {
      r.disconnect();
    }
  );
}
var Uy,
  Wy = o(() => {
    ((Uy = u(By(), 1)), yd(), Xc());
  });
function Gy(e, t, n, r = !1) {
  let i = g_(),
    a = rd(e),
    o = { x: t, y: n },
    s = $u(e, a ?? { x: t, y: n, width: 0, height: 0 }, o, a != null && Tc(e), i.width);
  return (
    r && (s.annotationFeatures = [`selectable-containers`]),
    { anchor: s, themeVariant: h_(), viewportRect: a, viewportPoint: o, viewportSize: i }
  );
}
function Ky(e, t) {
  let { anchor: n } = e;
  return (ld(n.pageUrl, sd()) && (n.kind !== `element` || t != null) && (n.kind !== `text` || ru(n) != null)
    ? d_(n, e.viewportRect, t)
    : null) == null
    ? { ...e, placement: `top-left`, viewportRect: null, viewportPoint: { x: 0, y: 0 } }
    : e;
}
function qy(e, t, n) {
  if (e.anchor.kind === `text`) return ru(e.anchor) ?? Jy(e.anchor, n, e.themeVariant);
  if (e.anchor.kind === `region` || e.anchor.kind === `virtual`)
    return {
      ...Jy(e.anchor, n, e.themeVariant),
      additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    };
  let r = g_(),
    i = t == null ? e.anchor : ed(t, e.anchor, r, e.markerViewportPoint),
    a = S_(i, n);
  return {
    anchor: i,
    additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    themeVariant: e.themeVariant ?? h_(),
    viewportRect: t == null ? od(e.anchor) : rd(t),
    viewportPoint: a,
    viewportSize: r,
  };
}
function Jy(e, t, n) {
  let r = E_();
  return {
    anchor: e,
    themeVariant: n ?? h_(),
    viewportRect: od(e),
    viewportPoint: S_(e, t),
    viewportSize: { width: r.width, height: r.height },
  };
}
function Yy(e, t, n) {
  if (e.anchor.type === `text`) return ru(e.anchor.value) ?? Jy(e.anchor.value, t, e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let n = g_();
    return {
      ...Jy(e.anchor.value, t, e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => Q_(e, n)),
    };
  }
  let r = e.anchor.element?.isConnected ? e.anchor.element : null,
    i = r == null ? null : rd(r),
    a = g_(),
    o = r == null ? e.anchor.value : ed(r, e.anchor.value, a);
  return {
    anchor: o,
    additionalAnchors: e.anchor.additionalSelections.map((e) => Q_(e, a)),
    cardViewportRect:
      e.target.mode === `design`
        ? (e.anchor.cardViewportRect ?? (i == null ? void 0 : l_(i, { viewportScale: n, zoomFactor: t })))
        : void 0,
    themeVariant: e.anchor.themeVariant ?? h_(),
    viewportRect: i,
    viewportPoint: S_(o, t),
    viewportSize: a,
  };
}
function Xy(e, t, n, r) {
  let i = e.target;
  if (i.mode !== `edit`) return null;
  let a = t.find((e) => e.id === i.commentId) ?? null;
  if (a == null) return null;
  if (e.anchor.type === `text`)
    return ru(e.anchor.value) ?? Jy(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let t = g_();
    return {
      ...Jy(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => Q_(e, t)),
    };
  }
  let o = Y_(e.anchor, n),
    s = g_(),
    c = o == null ? e.anchor.value : ed(o, e.anchor.value, s, e.anchor.markerViewportPoint);
  return {
    anchor: c,
    additionalAnchors: e.anchor.additionalSelections.map((e) => Q_(e, s)),
    themeVariant: a.themeVariant,
    viewportRect: o == null ? od(c) : rd(o),
    viewportPoint: S_(c, r),
    viewportSize: s,
  };
}
var Zy = o(() => {
    (tv(), yd(), Xc(), Xu(), H_());
  }),
  Qy = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return ((n = r.ref), { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r });
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  $y = s((e, t) => {
    t.exports = Qy();
  });
function eb({ className: e, appearance: t = `numbered`, fillColor: n, children: r }) {
  let i = t === `avatar` || t === `unread-avatar`,
    a = {
      avatar: `var(--color-surface)`,
      "unread-avatar": `var(--color-background-info-solid)`,
      review: n ?? `currentColor`,
      numbered: n ?? `currentColor`,
    }[t];
  return (0, nb.jsxs)(`span`, {
    "aria-hidden": `true`,
    className: e,
    style: {
      display: `grid`,
      isolation: `isolate`,
      pointerEvents: `none`,
      borderRadius: `50% 50% 50% ${rb}px`,
      backgroundColor: a,
      boxShadow:
        i || t === `review` ? `var(--shadow-lg-stronger, 0px 4px 8px -2px rgb(0 0 0 / 16%))` : void 0,
    },
    children: [
      (0, nb.jsx)(`span`, {
        style: {
          gridArea: `1 / 1`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          overflow: `hidden`,
          margin: i ? 2 : void 0,
          borderRadius: i ? `50%` : `inherit`,
          backgroundColor: i
            ? t === `unread-avatar`
              ? `color-mix(in srgb, var(--color-background-info-solid) 88%, var(--white, white))`
              : `var(--alpha-10)`
            : void 0,
          color: i ? (t === `unread-avatar` ? `var(--color-text-info-solid)` : `var(--color-text)`) : void 0,
        },
        children: r,
      }),
      (0, nb.jsx)(`span`, {
        style: {
          gridArea: `1 / 1`,
          borderRadius: `inherit`,
          boxShadow: `0 0 0 1px ${t === `avatar` ? `var(--color-border)` : `var(--white, white)`}`,
          mixBlendMode: t === `avatar` ? `multiply` : `normal`,
        },
      }),
    ],
  });
}
function tb({ width: e, height: t, strokeWidth: n }) {
  let r = n / 2,
    i = e / 2 - r,
    a = t / 2 - r,
    o = rb - r;
  return `M${e / 2} ${r}a${i} ${a} 0 0 1 0 ${t - n}H${rb}a${o} ${o} 0 0 1-${o}-${o}V${t / 2}A${i} ${a} 0 0 1 ${e / 2} ${r}Z`;
}
var nb,
  rb,
  ib,
  ab = o(() => {
    ((nb = $y()), (rb = 3), (ib = `#339cff`), `${ib}`);
  });
function ob(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = ob(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function sb() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = ob(e)) && (r && (r += ` `), (r += t));
  return r;
}
var cb = o(() => {}),
  lb,
  ub,
  db,
  fb = o(() => {
    ((lb = [0.4, 0, 0.2, 1]),
      (ub = { rotate: 0, y: 0, scale: 1 }),
      (db = { duration: 0.52, ease: lb, times: [0, 0.22, 0.72, 1] }),
      { ...db },
      { ...db },
      { ...ub });
  }),
  pb,
  mb = o(() => {
    (fb(), (pb = [0.23, 1, 0.32, 1]));
  });
function hb(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  let i = gs(e, { viewport: t, viewportScale: n, zoomFactor: r });
  return hs(n) === 1
    ? { left: i.x, top: i.y, width: i.width }
    : { height: i.height, left: i.x, top: i.y, width: i.width };
}
var gb,
  _b,
  Q,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb = o(() => {
    (ab(),
      qs(),
      mb(),
      (gb = `#000000`),
      (_b = `#0069FB`),
      (Q = {
        ...Ws,
        fill: ib,
        hotspotByMode: {
          add: { x: Ws.width / 2, y: Ws.height / 2 },
          comment: Ws.hotspot,
          text: { x: 7, y: 13.5 },
        },
        path: tb({ width: Ws.width, height: Ws.height, strokeWidth: 1.65 }),
        stroke: `white`,
        strokeWidth: 1.65,
      }),
      (vb = (Q.hotspotByMode.comment.x / Q.width) * 100),
      (yb = ((Q.hotspotByMode.comment.y + (Q.width - Q.height) / 2) / Q.width) * 100),
      (bb = `translate(-${vb}%,-${yb}%)`),
      (xb = {
        position: `fixed`,
        inset: 0,
        pointerEvents: `none`,
        fontSize: `13px`,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
      }),
      (Sb = `
.hover-box{position:fixed;box-sizing:border-box;border-radius:0;border:2px solid ${_b};background:color-mix(in srgb,${_b} 3%,transparent);box-shadow:inset 0 0 0 1px rgba(255,255,255,.28);pointer-events:none;transition:opacity 150ms cubic-bezier(${pb.join(`,`)})}
[data-browser-comment-control-editing] .hover-box{opacity:0}
@media(prefers-reduced-motion:reduce){.hover-box{transition:none}}
.text-selection-highlight{position:fixed;box-sizing:border-box;background:#128dff66;pointer-events:none}
.flex-item-overlay{position:fixed;box-sizing:border-box;border-radius:0;border:1px solid rgba(2,133,255,.52);background:rgba(18,141,255,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);pointer-events:none}
.interaction-layer{position:fixed;inset:0;z-index:0;width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border:0;padding:0;background:transparent;pointer-events:none}
.interaction-layer::backdrop{background:transparent}
.interaction-blocker{position:absolute;inset:0;z-index:0;pointer-events:auto;touch-action:pan-x pan-y}
.annotation-selection-cursor{position:fixed;z-index:1;display:block}
.annotation-selection-modifier-cursor{z-index:2;color:${gb};paint-order:stroke fill;stroke:${Q.stroke};stroke-linejoin:round;stroke-width:2px}
.annotation-selection-comment-cursor{overflow:visible}
.annotation-selection-comment-cursor[data-browser-comment-annotation-selection-cursor-mode="text"]{z-index:2}
.annotation-selection-cursor-bubble{transform:translate(0,0) scale(1);transform-box:view-box;transform-origin:0 0;transition:transform 150ms cubic-bezier(${pb.join(`,`)})}
.annotation-selection-cursor-beam{opacity:0;transition:opacity 150ms cubic-bezier(${pb.join(`,`)})}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-bubble{transform:translate(${12 + Q.hotspotByMode.comment.x - Q.hotspotByMode.text.x}px,${-2 + Q.hotspotByMode.comment.y - Q.hotspotByMode.text.y}px) scale(.55)}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-beam{opacity:1}
@media(prefers-reduced-motion:reduce){.annotation-selection-cursor-bubble,.annotation-selection-cursor-beam{transition:none}}
[data-browser-comment-annotation-selection-modifier-active] .marker{cursor:none}
.annotation-selection-target-hover{border-color:color-mix(in srgb,${_b} 80%,black)}
.annotation-selection-remove-hover{background:color-mix(in srgb,${_b} 20%,transparent)}
.region-box{border-width:2px;border-style:dashed}
.posted-region-highlight{position:fixed;box-sizing:border-box;border-radius:0;background:color-mix(in srgb,${_b} 3%,transparent);pointer-events:none}
.google-docs-annotation-box{background:transparent;box-shadow:none}
.google-docs-element-box{border-color:transparent}
.markers-layer{position:fixed;inset:0;z-index:1;pointer-events:none}
.marker{position:fixed;border:0;background:transparent;transform:${bb};transform-origin:${vb}% ${yb}%;pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.marker-icon{position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none}
.saved-marker{width:var(--browser-sidebar-saved-marker-size);height:var(--browser-sidebar-saved-marker-size)}
.draft-marker{width:var(--browser-sidebar-draft-marker-size);height:var(--browser-sidebar-draft-marker-size)}
.marker-label{position:relative;color:${Q.stroke};font-size:var(--browser-sidebar-marker-label-font-size);font-weight:700;line-height:1;pointer-events:none}
.marker-motion{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;pointer-events:none;transform-origin:bottom left;scale:1;transition:scale 150ms cubic-bezier(${pb.join(`,`)})}
.marker:hover .marker-motion,.marker[data-selected="true"] .marker-motion{scale:1.08}
@media(prefers-reduced-motion:reduce){.marker-motion{transition:none}}
${Us}
`));
  });
function wb({ className: e, mode: t, ...n }) {
  return t === `add`
    ? (0, kb.jsx)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: sb(e, `annotation-selection-modifier-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Q.height,
        viewBox: `0 0 20 20`,
        width: Q.width,
        children: (0, kb.jsx)(`path`, {
          d: `M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z`,
          fill: `currentColor`,
        }),
      })
    : (0, kb.jsxs)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: sb(e, `annotation-selection-comment-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Q.height,
        viewBox: `0 0 ${Q.width} ${Q.height}`,
        width: Q.width,
        children: [
          (0, kb.jsx)(`g`, {
            className: `annotation-selection-cursor-beam annotation-selection-modifier-cursor`,
            transform: `translate(${Q.hotspotByMode.comment.x - Q.hotspotByMode.text.x} ${Q.hotspotByMode.comment.y - Q.hotspotByMode.text.y})`,
            children: (0, kb.jsx)(`path`, {
              d: `M3 5H5C5.81 5 6.54 5.35 7 5.91C7.46 5.35 8.19 5 9 5H11V6.5H9C8.31 6.5 7.75 7.06 7.75 7.75V19.25C7.75 19.94 8.31 20.5 9 20.5H11V22H9C8.19 22 7.46 21.65 7 21.09C6.54 21.65 5.81 22 5 22H3V20.5H5C5.69 20.5 6.25 19.94 6.25 19.25V7.75C6.25 7.06 5.69 6.5 5 6.5H3Z`,
              fill: `currentColor`,
            }),
          }),
          (0, kb.jsx)(`path`, {
            className: `annotation-selection-cursor-bubble`,
            d: Q.path,
            fill: Q.fill,
            stroke: Q.stroke,
            strokeWidth: Q.strokeWidth,
          }),
        ],
      });
}
function Tb({
  additionalHighlights: e,
  highlightBorderRadius: t,
  highlightClassName: n,
  highlightRect: r,
  hoverSnapshot: i,
  isRemoveHover: a,
  linkedSelectionIndex: o,
  viewportHeight: s,
  viewportWidth: c,
  zoomFactor: l,
}) {
  return (0, kb.jsxs)(kb.Fragment, {
    children: [
      e.map((e) =>
        (0, kb.jsx)(
          `div`,
          {
            className: `${e.className}${o === e.selectionIndex ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover":
              o === e.selectionIndex ? e.selectionIndex : void 0,
            style: w_(e.rect, l, e.borderRadius),
          },
          e.key,
        ),
      ),
      r == null
        ? null
        : (0, kb.jsx)(`div`, {
            className: `${n}${o === 0 ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover": o === 0 ? 0 : void 0,
            style: w_(r, l, t),
          }),
      i == null
        ? null
        : (0, kb.jsx)(`div`, {
            className: `${__(null, i.rect, c, s)}${a ? ` annotation-selection-target-hover annotation-selection-remove-hover` : ``}`,
            "data-browser-comment-annotation-selection-hover": !0,
            "data-browser-comment-annotation-selection-remove-hover": a || void 0,
            style: w_(i.rect, l, i.borderRadius),
          }),
    ],
  });
}
function Eb({
  commentNumber: e,
  isSelected: t,
  markerPoint: n,
  onClick: r,
  onMouseEnter: i,
  onMouseLeave: a,
}) {
  let o = dg().formatMessage(
    {
      id: `browserSidebarCommentRuntime.commentMarkerLabel`,
      defaultMessage: `Browser comment {commentNumber}`,
      description: `Accessible label for a placed browser comment marker`,
    },
    { commentNumber: e },
  );
  return (0, kb.jsx)(`button`, {
    type: `button`,
    "aria-label": o,
    "data-browser-comment-marker": !0,
    className: `marker saved-marker`,
    "data-selected": String(t),
    style: { left: n.x, top: n.y },
    onMouseEnter: i,
    onMouseLeave: a,
    onMouseDown: (e) => e.preventDefault(),
    onClick: r,
    children: (0, kb.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, kb.jsx)(eb, { className: `marker-icon`, fillColor: Q.fill }),
        (0, kb.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Db({ commentNumber: e, markerPoint: t, onFocusEditor: n }) {
  let r = dg().formatMessage({
    id: `browserSidebarCommentRuntime.draftCommentMarkerLabel`,
    defaultMessage: `Focus unsaved browser comment`,
    description: `Accessible label for the temporary marker shown while creating a browser comment`,
  });
  return (0, kb.jsx)(`button`, {
    type: `button`,
    "aria-label": r,
    "data-browser-comment-draft-marker": !0,
    "data-browser-comment-marker": !0,
    className: `marker draft-marker`,
    "data-selected": `false`,
    style: { left: t.x, top: t.y },
    onMouseDown: (e) => e.preventDefault(),
    onClick: (e) => {
      (e.preventDefault(), e.stopPropagation(), n());
    },
    children: (0, kb.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, kb.jsx)(eb, { className: `marker-icon`, fillColor: Q.fill }),
        e == null ? null : (0, kb.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Ob({ snapshot: e, viewportScale: t, zoomFactor: n }) {
  return (0, kb.jsxs)(`div`, {
    className: `element-metadata-tooltip`,
    style: hb(e.rect, { viewportScale: t, zoomFactor: n }),
    children: [
      (0, kb.jsx)(`div`, { className: `element-metadata-cell element-metadata-tag`, children: e.tagName }),
      (0, kb.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.size }),
      (0, kb.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, kb.jsx)(xg, {
          id: `browserSidebarCommentRuntime.elementMetadata.color`,
          defaultMessage: `color`,
          description: `Label for the computed text color row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, kb.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.color }),
      (0, kb.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, kb.jsx)(xg, {
          id: `browserSidebarCommentRuntime.elementMetadata.font`,
          defaultMessage: `font`,
          description: `Label for the computed font row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, kb.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.font }),
    ],
  });
}
var kb,
  Ab = o(() => {
    (ab(), cb(), Dg(), H_(), Cb(), (kb = $y()));
  });
function jb(e, t) {
  if (e == null) return !1;
  if (Nb(e, t)) return !0;
  let n = Ac(e),
    r = Pb(e, t, n);
  return r == null
    ? n !== window && (n.scrollBy(t.x, t.y), !0)
    : ((r.scrollLeft += t.x), (r.scrollTop += t.y), !0);
}
function Mb(e, t) {
  return e.deltaMode === Lb
    ? { x: e.deltaX * zb, y: e.deltaY * zb }
    : e.deltaMode === Rb
      ? { x: e.deltaX * t.innerWidth, y: e.deltaY * t.innerHeight }
      : { x: e.deltaX, y: e.deltaY };
}
function Nb(e, t) {
  let n = e.closest(`#waffle-grid-container`);
  if (!V(n)) return !1;
  let r = n.querySelector(`.native-scrollbar-x`),
    i = n.querySelector(`.native-scrollbar-y`),
    a = !1;
  return (
    V(r) && t.x !== 0 && ((r.scrollLeft += t.x), (a = !0)),
    V(i) && t.y !== 0 && ((i.scrollTop += t.y), (a = !0)),
    a
  );
}
function Pb(e, t, n) {
  let r = e;
  for (; r != null;) {
    if (Fb(r, t, n)) return r;
    if (r === n.document.body || r === n.document.documentElement) return null;
    r = Qs(r);
  }
  return null;
}
function Fb(e, t, n) {
  let r = n.getComputedStyle(e);
  return (
    (Ys(r.overflowY) && Ib(t.y, e.scrollTop, e.clientHeight, e.scrollHeight)) ||
    (Ys(r.overflowX) && Ib(t.x, e.scrollLeft, e.clientWidth, e.scrollWidth))
  );
}
function Ib(e, t, n, r) {
  return e < 0 ? t > 0 : e > 0 && t < r - n;
}
var Lb,
  Rb,
  zb,
  Bb = o(() => {
    (Xc(), (Lb = 1), (Rb = 2), (zb = 16));
  });
function Vb(e, t) {
  return ac((n) => {
    let r = () => {
      (Ub(n, e, t), Gb(n, e), Wb(n, e));
    };
    r();
    let i = new MutationObserver(r);
    return (
      i.observe(n.documentElement, Wc),
      () => {
        (i.disconnect(), qb(n), n.getElementById(ex)?.remove());
        for (let e of n.querySelectorAll(`[${Qb}]`)) e.removeAttribute(Qb);
      }
    );
  });
}
function Hb(e, t) {
  let n = new Set(Zb(e));
  (n.add(t), e.setAttribute(Qb, Array.from(n).join(` `)));
}
function Ub(e, t, n) {
  let r = new Map();
  for (let i of t) {
    if (
      !ld(i.anchor.pageUrl, window.location.href) ||
      i.anchor.kind !== `element` ||
      i.anchor.selector == null ||
      Sc(i.anchor.framePath) !== e
    )
      continue;
    let t = n.get(i.id),
      a = t?.isConnected && t.ownerDocument === e ? t : ad(e, i.anchor);
    if (a != null) {
      n.set(i.id, a);
      let e = r.get(a) ?? new Set();
      (e.add(i.draftAttribute), r.set(a, e));
    }
  }
  for (let t of e.querySelectorAll(`[${Qb}]`)) V(t) && (Xb(t, r.get(t)), r.delete(t));
  for (let [e, t] of r) Xb(e, t);
}
function Wb(e, t) {
  let n = _s(
      t.filter(
        (t) =>
          ld(t.anchor.pageUrl, window.location.href) &&
          Sc(t.anchor.framePath) === e &&
          (t.anchor.frameUrl == null || ld(t.anchor.frameUrl, e.location.href)),
      ),
      Qb,
    ),
    r = e.getElementById(ex);
  if (n.length === 0) {
    r?.remove();
    return;
  }
  let i = r instanceof HTMLStyleElement ? r : e.createElement(`style`);
  ((i.id = ex),
    i.textContent !== n && (i.textContent = n),
    i.parentElement ?? (e.head ?? e.documentElement).append(i));
}
function Gb(e, t) {
  let n = new Map(t.map((e) => [e.draftAttribute, e]));
  for (let t of e.querySelectorAll(`[${Qb}], [${$b}]`)) {
    if (!V(t)) continue;
    let e = Kb(
      Zb(t)
        .map((e) => n.get(e))
        .filter((e) => e != null),
    );
    if (e == null) {
      Jb(t);
      continue;
    }
    (t.hasAttribute($b) || t.setAttribute($b, e.previousValue), Yb(t, e.value));
  }
}
function Kb(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t]?.text;
    if (n != null && n.value !== n.previousValue) return n;
  }
  return null;
}
function qb(e) {
  for (let t of e.querySelectorAll(`[${$b}]`)) V(t) && Jb(t);
}
function Jb(e) {
  let t = e.getAttribute($b);
  t != null && (Yb(e, t), e.removeAttribute($b));
}
function Yb(e, t) {
  e.textContent !== t && (e.textContent = t);
}
function Xb(e, t) {
  let n = t == null ? `` : Array.from(t).join(` `);
  if (n.length === 0) {
    e.removeAttribute(Qb);
    return;
  }
  e.getAttribute(Qb) !== n && e.setAttribute(Qb, n);
}
function Zb(e) {
  return (e.getAttribute(Qb) ?? ``).split(/\s+/).filter((e) => e.length > 0);
}
var Qb,
  $b,
  ex,
  tx = o(() => {
    (qs(),
      yd(),
      Xc(),
      (Qb = `data-codex-browser-design-group`),
      ($b = `data-codex-browser-design-original-text`),
      (ex = `codex-browser-design-draft-style`));
  });
function nx(e, t, n, r, i) {
  let a = t.anchor.kind === `virtual`,
    o = a ? null : (i ?? Zu(e)),
    s = r?.id ?? globalThis.crypto?.randomUUID?.() ?? `design-${Date.now()}`,
    c = a ? null : os(e),
    l = r?.annotationControls ?? n,
    u = is(o?.styles ?? [], r?.declarations ?? []),
    d =
      r == null
        ? l?.controls.map((e) => ({ callback: e.callback, previousValue: e.currentValue, value: Od(e) }))
        : r.annotationControlChanges,
    f = c == null ? r?.text : r?.text == null ? c : { previousValue: c.previousValue, value: r.text.value };
  return {
    id: s,
    anchor: t.anchor,
    annotationControls: l,
    annotationControlChanges: d,
    declarations: u,
    draftAttribute: r?.draftAttribute ?? s,
    markerViewportPoint: t.viewportPoint,
    provenance: ss(o?.styles ?? []),
    selector: t.anchor.selector,
    targetLabel: t.anchor.kind === `virtual` ? (t.anchor.elementName ?? t.anchor.targetId) : ix(e),
    elementTagName: e.tagName.toLowerCase(),
    text: f,
    ...(r?.themeVariant == null
      ? t.themeVariant == null
        ? {}
        : { themeVariant: t.themeVariant }
      : { themeVariant: r.themeVariant }),
    viewportSize: t.viewportSize,
  };
}
function rx(e) {
  return {
    id: e.id,
    anchor: e.anchor,
    annotationControls: e.annotationControls,
    annotationControlChanges: e.annotationControlChanges,
    declarations: e.declarations,
    draftAttribute: e.draftAttribute,
    markerViewportPoint: e.markerViewportPoint,
    provenance: e.provenance,
    selector: e.selector,
    targetLabel: e.targetLabel,
    elementTagName: e.elementTagName,
    text: e.text,
    themeVariant: e.themeVariant,
    viewportSize: e.viewportSize,
  };
}
function ix(e) {
  let t = e.tagName.toLowerCase(),
    n = id(e);
  return n == null ? t : `${t}: ${n}`;
}
var ax = o(() => {
  (Rd(), qs(), yd());
});
function ox() {
  let e = `codex-site-annotation-preview-mask`,
    t = cx(`svg`, { width: `0`, height: `0`, "aria-hidden": `true` }),
    n = cx(`mask`, {
      id: e,
      maskUnits: `userSpaceOnUse`,
      maskContentUnits: `userSpaceOnUse`,
      "mask-type": `luminance`,
      x: `0`,
      y: `0`,
    }),
    r = cx(`rect`, { fill: `white` });
  (n.append(r), t.append(n));
  let i = ``;
  return {
    element: t,
    id: e,
    update({ viewport: a, targets: o }) {
      let s = o.map((e) => ({ path: lx(e), clip: e.clipRect })),
        c = JSON.stringify({ viewport: a, shapes: s });
      if (c !== i) {
        i = c;
        for (let e of [n, r])
          (e.setAttribute(`width`, String(a.width)), e.setAttribute(`height`, String(a.height)));
        (n.replaceChildren(r),
          t.replaceChildren(n),
          s.forEach(({ path: r, clip: i }, a) => {
            let o = `${e}-clip-${a}`,
              s = cx(`clipPath`, { id: o, clipPathUnits: `userSpaceOnUse` });
            (s.append(cx(`rect`, i)),
              t.append(s),
              n.append(cx(`path`, { d: r, fill: `black`, "clip-path": `url(#${o})` })));
          }));
      }
    },
  };
}
function sx({ rect: e, style: t, radiusScale: n }) {
  let { width: r, height: i } = e,
    a = [
      t.borderTopLeftRadius,
      t.borderTopRightRadius,
      t.borderBottomRightRadius,
      t.borderBottomLeftRadius,
    ].map((e) => {
      let [t, a = t] = e.trim().split(/\s+/);
      return { x: ux(t, r, n?.x ?? 1), y: ux(a, i, n?.y ?? 1) };
    }),
    [o, s, c, l] = a,
    u = Math.min(1, r / (o.x + s.x), r / (l.x + c.x), i / (o.y + l.y), i / (s.y + c.y));
  for (let e of a) ((e.x *= u), (e.y *= u));
  return a;
}
function cx(e, t) {
  let n = document.createElementNS(`http://www.w3.org/2000/svg`, e);
  for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
  return n;
}
function lx(e) {
  let { x: t, y: n, width: r, height: i } = e.rect,
    [a, o, s, c] = sx(e),
    l = t + r,
    u = n + i;
  return [
    `M${t + a.x} ${n}`,
    `H${l - o.x}`,
    `A${o.x} ${o.y} 0 0 1 ${l} ${n + o.y}`,
    `V${u - s.y}`,
    `A${s.x} ${s.y} 0 0 1 ${l - s.x} ${u}`,
    `H${t + c.x}`,
    `A${c.x} ${c.y} 0 0 1 ${t} ${u - c.y}`,
    `V${n + a.y}`,
    `A${a.x} ${a.y} 0 0 1 ${t + a.x} ${n}`,
    `Z`,
  ].join(` `);
}
function ux(e, t, n) {
  let r = Number.parseFloat(e);
  return Number.isFinite(r) ? Math.max(0, e.endsWith(`%`) ? (r * t) / 100 : r * n) : 0;
}
var dx = o(() => {});
function fx({ layer: e, color: t }) {
  let n = e.ownerDocument,
    r = n.createElement(`style`);
  ((r.textContent = px), (e.style.color = t));
  let i = ox(),
    a = n.createElement(`div`);
  ((a.className = `annotation-feature-backdrop`),
    (a.style.maskImage = `url("#${i.id}")`),
    e.append(r, i.element, a));
  let o = new Map();
  return {
    update(t) {
      let r = {
          width: n.defaultView?.innerWidth ?? n.documentElement.clientWidth,
          height: n.defaultView?.innerHeight ?? n.documentElement.clientHeight,
        },
        s = new Set(t.map(({ element: e }) => e));
      for (let r of t) {
        let { element: t, rect: i, clipRect: a } = r,
          [s, c, l, u] = sx(r),
          d = o.get(t);
        if (d == null) {
          let r = n.createElement(`div`);
          r.className = `annotation-feature-clip`;
          let i = n.createElement(`div`);
          ((i.className = `annotation-feature-glow`),
            r.append(i),
            e.append(r),
            (d = { clip: r, glow: i }),
            o.set(t, d));
        }
        (Object.assign(d.clip.style, {
          left: `${a.x}px`,
          top: `${a.y}px`,
          width: `${a.width}px`,
          height: `${a.height}px`,
        }),
          Object.assign(d.glow.style, {
            left: `${i.x - a.x}px`,
            top: `${i.y - a.y}px`,
            width: `${i.width}px`,
            height: `${i.height}px`,
            borderTopLeftRadius: `${s.x}px ${s.y}px`,
            borderTopRightRadius: `${c.x}px ${c.y}px`,
            borderBottomLeftRadius: `${u.x}px ${u.y}px`,
            borderBottomRightRadius: `${l.x}px ${l.y}px`,
          }));
      }
      for (let [e, t] of o) s.has(e) || (t.clip.remove(), o.delete(e));
      ((a.hidden = t.length === 0), i.update({ viewport: r, targets: t }));
    },
    dispose() {
      (e.replaceChildren(), o.clear());
    },
  };
}
var px,
  mx = o(() => {
    (mb(),
      dx(),
      (px = `
[data-site-annotation-preview]{position:fixed;inset:0;width:auto;height:auto;max-width:none;max-height:none;margin:0;border:0;padding:0;background:transparent;overflow:visible;pointer-events:none;contain:layout style}
[data-site-annotation-preview]::backdrop{background:transparent;pointer-events:none}
.annotation-feature-backdrop{position:absolute;inset:0;pointer-events:none;backdrop-filter:grayscale(1);background:color-mix(in srgb,Canvas 50%,transparent);mask-repeat:no-repeat}
.annotation-feature-clip{position:fixed;overflow:clip;pointer-events:none}
.annotation-feature-glow{position:absolute;pointer-events:none;animation:annotation-preview-appear 150ms ease-out both}
.annotation-feature-glow::before {
  content:"";
  position:absolute;
  inset:0;
  border-radius:inherit;
  box-shadow:0 0 12px color-mix(in srgb,currentColor 32%,transparent),
    inset 0 0 16px color-mix(in srgb,currentColor 20%,transparent);
  filter:blur(3px);
}
@keyframes annotation-preview-appear{from{opacity:0}to{opacity:1}}
@media (prefers-reduced-motion:reduce){.annotation-feature-glow{animation:none}}
`));
  });
function hx(e) {
  let t = new Map();
  for (let n of e) {
    let e = `host` in n ? n.ownerDocument : n,
      r = t.get(e) ?? { boundaries: [], modals: [], popovers: [] };
    (t.set(e, r), n.fullscreenElement != null && r.boundaries.push(n.fullscreenElement));
    for (let e of n.querySelectorAll(`dialog[open], [popover]`))
      e.matches(`:modal`)
        ? r.modals.push(e)
        : e.matches(`:popover-open`) && r.popovers.push({ element: e, rect: e.getBoundingClientRect() });
  }
  for (let [e, n] of t) {
    let t = gx(e, n.modals);
    n.boundaries.push(...(t == null ? n.modals : [t]));
  }
  return (e) => {
    let n = e;
    for (; n != null;) {
      let e = t.get(n.ownerDocument);
      if (e != null) {
        let { boundaries: t, popovers: r } = e;
        for (let e of t) if (!_x(e, n)) return !1;
        let i;
        for (let e of r)
          if (
            !_x(e.element, n) &&
            ((i ??= n.getBoundingClientRect()),
            i.left < e.rect.right && i.right > e.rect.left && i.top < e.rect.bottom && i.bottom > e.rect.top)
          )
            return !1;
      }
      let r = n.ownerDocument.defaultView?.frameElement;
      n = V(r) ? r : null;
    }
    return !0;
  };
}
function gx(e, t) {
  if (t.length < 2) return t[0];
  for (let n of [e.activeElement, e.elementFromPoint?.(0, 0)]) {
    for (; n?.shadowRoot?.activeElement != null;) n = n.shadowRoot.activeElement;
    for (; V(n);) {
      if (t.includes(n)) return n;
      n = Qs(n);
    }
  }
}
function _x(e, t) {
  let n = t;
  for (; n != null;) {
    if (n === e) return !0;
    n = Qs(n);
  }
  return !1;
}
var vx = o(() => {
  Xc();
});
function yx(e) {
  let t = null;
  function n() {
    (t?.(), (t = null));
  }
  return {
    setPreview(r) {
      (n(), r != null && (t = bx(e, r)));
    },
    dispose: n,
  };
}
function bx({ shadowRoot: e, getControlTargets: t }, n) {
  let r = document.createElement(`div`);
  ((r.dataset.siteAnnotationPreview = n.feature),
    r.setAttribute(`aria-hidden`, `true`),
    (r.popover = `manual`));
  let i = fx({ layer: r, color: n.color });
  (e.append(r), dc(r, !1));
  let a = !0,
    o = null,
    s = null,
    c = new Set(),
    l = new Set(),
    u = new Map(),
    d = new Set(),
    f = new Map(),
    p = new ResizeObserver(h),
    m = new IntersectionObserver((e) => {
      for (let { target: t, isIntersecting: n } of e)
        V(t) && c.has(t) && (n ? (l.add(t), p.observe(t)) : (l.delete(t), p.unobserve(t)));
      h();
    });
  function h() {
    ((s = null), g());
  }
  function g() {
    a && o == null && (o = window.requestAnimationFrame(y));
  }
  function _(e, t) {
    t && !c.has(e)
      ? (c.add(e), m.observe(e))
      : !t && c.delete(e) && (l.delete(e), m.unobserve(e), p.unobserve(e));
  }
  function v() {
    let e = new Set(t());
    for (let t of c) _(t, e.has(t));
    for (let t of e) _(t, t.isConnected && t.ownerDocument === document && !ul(t));
  }
  function y() {
    if (((o = null), !a)) return;
    if (s == null) {
      (n.feature === `controls` && v(),
        (s = { candidates: l.values(), targets: [], hasMotion: !1, isVisible: hx(d) }));
      for (let [e, t] of f) (!t.isConnected || e.playState !== `running`) && f.delete(e);
    }
    let { targets: e } = s,
      t = !1;
    for (let r = 0; r < wx; r++) {
      let r = s.candidates.next();
      if (r.done) {
        t = !0;
        break;
      }
      let i = r.value;
      if (
        ((s.hasMotion = s.hasMotion || Sx(i)),
        !i.isConnected ||
          !s.isVisible(i) ||
          (n.feature === `controls` && u.has(i)) ||
          (n.feature === `containers` && !xx(i)) ||
          rd(i) == null)
      )
        continue;
      let a = f_(i);
      if (a == null) continue;
      let { rect: o, clipRect: c, radiusScale: l } = a;
      if (
        !(o.x + o.width <= c.x || o.y + o.height <= c.y || o.x >= c.x + c.width || o.y >= c.y + c.height) &&
        (e.push({
          element: i,
          rect: o,
          clipRect: c,
          radiusScale: l,
          style: (i.ownerDocument.defaultView ?? window).getComputedStyle(i),
        }),
        e.length === wx)
      ) {
        t = !0;
        break;
      }
    }
    (dc(r, !1),
      i.update(e),
      t
        ? s.hasMotion || e.some(({ element: e }) => Array.from(f.values()).some((t) => Cx(t, e)))
          ? h()
          : (s = null)
        : g());
  }
  function b(e, t, i) {
    let a = new Set(),
      o = new Set(),
      s = !1,
      l = new MutationObserver((t) => {
        s = !1;
        let r = !1;
        for (let e of t)
          if (e.type === `attributes` && V(e.target)) u(e.target);
          else if (e.type === `childList`) {
            r = !0;
            for (let t of e.addedNodes) V(t) && (u(t), f(t));
          }
        if (r) {
          for (let e of c) e.isConnected || _(e, !1);
          l.disconnect();
          for (let t of a)
            if (t !== e && !t.isConnected) {
              t.removeEventListener(`toggle`, y, !0);
              for (let e of Ox) t.removeEventListener(e, g, !0);
              (a.delete(t), d.delete(t));
            } else l.observe(t, kx);
          for (let e of o) e.isConnected || (o.delete(e), (s = !0));
          (s && i(), n.feature === `controls` && C());
        }
        h();
      });
    function u(t) {
      if (!ul(t)) {
        if (($s(t) && !o.has(t) && (o.add(t), (s = !0)), n.feature !== `controls`)) {
          let r = n.feature === `metadata` ? Ko(t.getAttribute(`oai-annotation-metadata`)) : null;
          _(
            t,
            t.hasAttribute(`oai-annotatable`) &&
              t !== e.body &&
              t !== e.documentElement &&
              (n.feature !== `metadata` || (r != null && Object.keys(r).length > 0)),
          );
        }
        t.shadowRoot != null && !a.has(t.shadowRoot) && m(t.shadowRoot);
      }
    }
    function f(e) {
      for (let t of e.querySelectorAll(`*`)) V(t) && u(t);
    }
    function m(e) {
      (a.add(e), d.add(e), l.observe(e, kx), e.addEventListener(`toggle`, y, !0));
      for (let t of Ox) e.addEventListener(t, g, !0);
      f(e);
    }
    function g(e) {
      let n = e.composedPath()[0];
      if (!(V(n) && ul(n))) {
        if (V(n) && (e.type === `animationstart` || e.type === `transitionrun`))
          for (let e of n.getAnimations?.() ?? []) x(e, t);
        (e.type === `load` && $s(e.target) && i(), h());
      }
    }
    function v(e) {
      let t = e.composedPath()[0];
      V(t) && (u(t), i(), h());
    }
    function y(e) {
      let t = e.composedPath()[0];
      (V(t) && ul(t)) || (dc(r, !0), h());
    }
    m(e);
    for (let n of e.getAnimations?.() ?? []) x(n, t);
    let b = e.documentElement;
    return (
      b != null && p.observe(b),
      e.addEventListener(Ex, v),
      e.addEventListener(`fullscreenchange`, y),
      t.addEventListener(`resize`, h),
      t.visualViewport?.addEventListener(`resize`, h),
      t.visualViewport?.addEventListener(`scroll`, h),
      () => {
        l.disconnect();
        for (let t of c) t.ownerDocument === e && _(t, !1);
        b != null && p.unobserve(b);
        for (let e of a) {
          (d.delete(e), e.removeEventListener(`toggle`, y, !0));
          for (let t of Ox) e.removeEventListener(t, g, !0);
        }
        (e.removeEventListener(Ex, v),
          e.removeEventListener(`fullscreenchange`, y),
          t.removeEventListener(`resize`, h),
          t.visualViewport?.removeEventListener(`resize`, h),
          t.visualViewport?.removeEventListener(`scroll`, h),
          h());
      }
    );
  }
  function x(e, t) {
    let n = e.effect,
      r = t.document.defaultView?.KeyframeEffect;
    if (r == null || !(n instanceof r)) return;
    let i = n.target;
    V(i) && !ul(i) && n.getKeyframes().some((e) => Object.keys(e).some((e) => Tx.test(e))) && f.set(e, i);
  }
  function S(e) {
    if (!(
      !(e instanceof CustomEvent) ||
      typeof e.detail != `string` ||
      e.detail.length > bf.maxPayloadLength ||
      !(e.target instanceof HTMLElement) ||
      !e.target.isConnected ||
      e.target.ownerDocument !== document ||
      e.target.getRootNode() !== document
    ))
      try {
        let t = Cf.safeParse(JSON.parse(e.detail));
        if (!t.success) return;
        (t.data.type === `registered`
          ? u.set(e.target, t.data.registrationId)
          : t.data.type === `disposed` && u.get(e.target) === t.data.registrationId && u.delete(e.target),
          h());
      } catch {}
  }
  function C() {
    (u.clear(),
      document.dispatchEvent(new CustomEvent(bf.requestEvent, { detail: JSON.stringify({ type: `list` }) })));
  }
  let w = n.feature === `containers` ? ac(b) : b(document, window, () => {});
  if (n.feature === `controls`) {
    for (let e of Dx) window.addEventListener(e, h);
    (document.addEventListener(bf.responseEvent, S), v(), C());
  }
  return (
    h(),
    () => {
      ((a = !1), o != null && window.cancelAnimationFrame(o), w(), m.disconnect(), p.disconnect());
      for (let e of Dx) window.removeEventListener(e, h);
      (document.removeEventListener(bf.responseEvent, S), fc(r), i.dispose(), r.remove());
    }
  );
}
function xx(e) {
  if (Qc(e) !== e) return !1;
  let t = e.ownerDocument.defaultView;
  for (; t != null && t !== window;) {
    let e = t.frameElement;
    if (!$s(e) || Qc(e) !== void 0) return !1;
    t = e.ownerDocument.defaultView;
  }
  return t === window;
}
function Sx(e) {
  let t = e;
  for (; t != null;) {
    if (t.getAnimations?.().some((e) => e.playState === `running`)) return !0;
    let e = Qs(t);
    if (e != null) t = e;
    else {
      let e = t.ownerDocument.defaultView?.frameElement;
      t = V(e) ? e : null;
    }
  }
  return !1;
}
function Cx(e, t) {
  let n = e.ownerDocument.defaultView;
  if (n == null) return !1;
  let r = e;
  for (; r != null;) {
    let e = n.getComputedStyle(r);
    if (e.position === `absolute` || e.position === `fixed`) return !1;
    let i = Qs(r);
    if (i == null) return !1;
    let a = t;
    for (; a != null;) {
      if (i === a) return !0;
      let e = Qs(a);
      if (e != null) a = e;
      else {
        let e = a.ownerDocument.defaultView?.frameElement;
        a = V(e) ? e : null;
      }
    }
    if (
      n
        .getComputedStyle(i)
        .contain.split(/\s+/)
        .some((e) => e === `size` || e === `strict`)
    )
      return !1;
    r = i;
  }
  return !1;
}
var wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax = o(() => {
    (wf(),
      qs(),
      Sl(),
      al(),
      yd(),
      H_(),
      Xc(),
      mx(),
      vx(),
      (wx = 128),
      (Tx =
        /^(width|height|minWidth|maxWidth|minHeight|maxHeight|margin.*|padding.*|border.*Width|fontSize|fontWeight|lineHeight|letterSpacing|wordSpacing|flex.*|grid.*|gap|rowGap|columnGap|display|position|float|clear|order|align.*|justify.*)$/),
      (Ex = `codex:annotation-shadow-root-attached`),
      (Dx = [
        `codex:register-annotation-controls`,
        `codex:update-annotation-controls`,
        `codex:dispose-annotation-controls`,
      ]),
      (Ox = [
        `scroll`,
        `load`,
        `animationstart`,
        `animationend`,
        `animationcancel`,
        `transitionrun`,
        `transitionend`,
        `transitioncancel`,
      ]),
      (kx = {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0,
        attributeFilter: [
          `oai-annotatable`,
          `oai-annotation-container`,
          `oai-annotation-container-text`,
          `oai-annotation-metadata`,
          `class`,
          `style`,
          `hidden`,
          `open`,
        ],
      }));
  });
function jx(e, t) {
  let n = e.head?.querySelectorAll(`meta[name="${t.name}"]`);
  if (n != null)
    for (let e of n) {
      let n = e.getAttribute(`content`),
        r = t.values.find((e) => e === n);
      if (r != null) return r;
    }
}
var Mx = o(() => {});
function Nx({
  dragThresholdPx: e,
  rootHost: t,
  onPointerModeChange: n,
  onPointerChange: r,
  onClearHover: i,
}) {
  let a = null,
    o = () => {
      (a?.disposeHighlight(), (a = null));
    },
    s = () => a != null && (o(), uu(), !0),
    c = (e, o, s, c) => {
      let l = o && e != null && a == null ? ol(e.x, e.y, t, s, c) : null,
        u = o && (a != null || (l != null && !Ix(l.element)));
      return (u && l != null && (u = Fx(l)), n(u), u && (i(), r(e), e != null && dl(e, t)), u);
    };
  return {
    get isDragging() {
      return a != null;
    },
    get usesTextContainer() {
      return a?.usesTextContainer ?? !1;
    },
    updatePointer: c,
    dispose: o,
    cancel: s,
    disposeFrame(e) {
      a?.frameWindow === e && o();
    },
    handlePointerDown(e, n, r, i, s, l) {
      let u = ol(r.x, r.y, t, s, l);
      return u == null
        ? !1
        : !i || Ix(u.element)
          ? u.usesTextContainer
            ? (Uc(n), !0)
            : !1
          : Fx(u)
            ? (uu(),
              o(),
              (a = {
                pointerId: n.pointerId,
                frameWindow: e,
                usesTextContainer: u.usesTextContainer,
                startPoint: r,
                hasMoved: !1,
                disposeHighlight: cu(e),
              }),
              c(r, !0, s, l),
              Uc(n, { preventDefault: !1 }),
              !0)
            : !1;
    },
    handlePointerMove(t, n) {
      if (a?.pointerId !== n.pointerId) return !1;
      if (!(n.buttons & 1)) return (s(), !1);
      let i = Mc(t, { x: n.clientX, y: n.clientY });
      return (
        (a.hasMoved = a.hasMoved || Math.hypot(i.x - a.startPoint.x, i.y - a.startPoint.y) >= e),
        r(i),
        Uc(n, { preventDefault: !1 }),
        !0
      );
    },
    handlePointerUp(e, t) {
      if (!e.isTrusted || a?.pointerId !== e.pointerId) return !1;
      let { frameWindow: n, usesTextContainer: r, hasMoved: i } = a;
      (o(), Uc(e, { preventDefault: !1 }));
      let s;
      try {
        s = r || i ? eu(n) : null;
      } catch (e) {
        if (!(e instanceof DOMException && e.name === `SecurityError`)) throw e;
        s = null;
      }
      return (t(s, r), !0);
    },
    handlePointerCancel(e) {
      return a?.pointerId === e.pointerId && s();
    },
  };
}
function Px(e, t, n, r) {
  let i = n && t != null ? ll(t.x, t.y, e, `text`, r) : null;
  return ac(
    (e) => (
      oc(e, yl, n, i?.ownerDocument === e ? i : void 0),
      () => {
        sc(e);
      }
    ),
  );
}
function Fx(e) {
  let { element: t, usesTextContainer: n } = e,
    r = t.ownerDocument;
  return (
    oc(r, yl, !0, t),
    !n && r.defaultView?.getComputedStyle(t).userSelect === `none` ? (oc(r, yl, !1), !1) : !0
  );
}
function Ix(e) {
  let t = e;
  for (; t != null;) {
    if (t.matches(`input, button, select, audio, video`)) return !Hu(t);
    t = Qs(t);
  }
  return !1;
}
var Lx = o(() => {
    (Sl(), Xc(), Xu());
  }),
  Rx = c({
    buildRegionAnchor: () => p_,
    getBrowserCommentElementSnapshot: () => Zu,
    getMarkerPoint: () => v_,
    mountBrowserCommentRuntime: () => zx,
  });
function zx(e) {
  let t = Wx(),
    n = lc(t, yl, xl),
    r = t.shadowRoot ?? t.attachShadow({ mode: `open` });
  r.replaceChildren();
  let i = document.createElement(`div`);
  r.appendChild(i);
  let a = yx({ shadowRoot: r, getControlTargets: () => e.getAnnotationControlTargets?.() ?? [] }),
    o = {
      ...e,
      sendMessageToHost(t) {
        let n = E_().visualViewport;
        if (n == null || !(`anchorState` in t) || t.anchorState == null) {
          e.sendMessageToHost(t);
          return;
        }
        e.sendMessageToHost({ ...t, anchorState: { ...t.anchorState, visualViewport: n } });
      },
    },
    s = (0, eS.createRoot)(i);
  return (
    s.render((0, tS.jsx)(Bx, { rootHost: t, bridge: o })),
    {
      setSiteAnnotationPreview: a.setPreview,
      dispose() {
        (a.dispose(), n(), s.unmount(), cc(), t.remove());
      },
    }
  );
}
function Bx({ rootHost: e, bridge: t }) {
  let [n, r] = (0, $.useState)(t.initialState),
    i = (0, $.useRef)(t.initialState.comments),
    [a] = (0, $.useState)(Fg),
    [o, s] = (0, $.useState)(null),
    [c, l] = (0, $.useState)(null),
    [u, d] = (0, $.useState)(null),
    [f, p] = (0, $.useState)(null),
    [m, h] = (0, $.useState)(!1),
    [g, _] = (0, $.useState)(t.initialState.isDesignModifierPressed === !0),
    [v, y] = (0, $.useState)(null),
    [b, x] = (0, $.useState)(null),
    [S, C] = (0, $.useState)(null),
    [w, T] = (0, $.useState)(null),
    [ee, te] = (0, $.useState)(null),
    E = (0, $.useRef)(null),
    [D, ne] = (0, $.useState)(null),
    [re, ie] = (0, $.useState)(null),
    [O, k] = (0, $.useState)(!1),
    [A, ae] = (0, $.useState)(null),
    [j, oe] = (0, $.useState)(E_),
    M = (0, $.useRef)(null),
    se = (0, $.useRef)(null),
    ce = (0, $.useRef)(null),
    le = (0, $.useRef)(null),
    [ue, de] = (0, $.useState)(() => iu([])),
    fe = (0, $.useRef)(null),
    [pe, me] = (0, $.useState)(!1),
    he = (0, $.useRef)(0),
    ge = (0, $.useRef)(null),
    _e = (0, $.useRef)(null),
    ve = (0, $.useRef)(!1),
    ye = (0, $.useRef)(!1),
    be = (0, $.useRef)(!1),
    xe = (0, $.useRef)(!1),
    Se = (0, $.useRef)(!1),
    Ce = (0, $.useRef)(!1),
    we = (0, $.useRef)(!1),
    Te = (0, $.useRef)(null),
    [Ee] = (0, $.useState)(() =>
      Nx({
        rootHost: e,
        dragThresholdPx: 4,
        onPointerModeChange: me,
        onPointerChange: p,
        onClearHover: () => {
          (s(null), l(null));
        },
      }),
    ),
    { comments: De, interactionMode: N } = n,
    Oe = N === `comment` && n.isAnnotationSuspended === !0,
    ke = n.canUseAnnotationMultiSelect === !0 && S?.anchor.type !== `virtual`,
    P = n.canUseSiteAnnotationApi === !0,
    Ae = N === `comment` && !Oe && S == null && pe,
    F = rf(n.zoomPercent),
    je = hs(n.viewportScale),
    Me = sd(),
    Ne = Jg(Me),
    Pe = n.canUseTweaks !== !1,
    Fe = new Map(De.map((e, t) => [e.id, t + 1])),
    Ie = De.filter(Jx),
    Le = Xx(e),
    Re = Ie.flatMap((e) => {
      let t = ue.get(e.id),
        n = rv(e, Le, e.id === D, t?.sourceAnchor === e.anchor ? t.value : null);
      return n == null ? [] : [n];
    }),
    ze = n.activeDesignChange,
    Be = De.flatMap((e) => (e.designChange == null ? [] : [e.designChange])),
    Ve = ze == null ? Be : [...Be.filter((e) => e.id !== ze.id), ze],
    He = n.isOriginalViewEnabled === !0 ? uS : Ve,
    Ue = ts(De),
    We = Pe && Ue && n.annotationEditorMode === `design`,
    Ge = He.flatMap((e) => {
      let t = qx(e, Le);
      return t == null ? [] : [t];
    }),
    Ke = Re.some((e) => [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => !e.isFixed)),
    qe = Ie.some((e) =>
      [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => e.kind === `element` && e.selector != null),
    ),
    Je = (0, $.useCallback)(
      (n, r, o, c) => {
        E.current?.clear();
        let u = { ...r, anchor: td(n, r.anchor, P, c) };
        (o != null &&
          ((u.anchor.annotationRequestIncludesPrompt = !!o.initialComment?.trim()),
          (u.anchor.annotationFeatures = [...(u.anchor.annotationFeatures ?? []), `requests`])),
          v != null &&
            (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: v }),
            y(null)));
        let d = nx(n, u, P ? t.getAnnotationControls?.(n) : void 0);
        return (
          P && a.rememberTarget(d.id, n),
          Xx(e).set(d.id, n),
          Rg(u.anchor, d.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: u,
            annotationEditorDefault: jx(document, nS),
            designEditorState: d,
            ...o,
          }),
          (xe.current = !1),
          h(!1),
          p(null),
          oe(E_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `create` },
            anchor: {
              type: `element`,
              additionalSelections: [],
              element: n,
              themeVariant: u.themeVariant,
              value: u.anchor,
              viewportSize: u.viewportSize,
            },
          }),
          s(null),
          l(null),
          uu(),
          P && zg(u.anchor, t.recordAnnotationFeatureUse, d.annotationControls),
          !0
        );
      },
      [a, t, P, v, e],
    ),
    Ye = (0, $.useCallback)(
      (e, n, r = !1) => {
        if (e.anchor.kind !== `text`) return !1;
        let a = P && (r || Bg(e.anchor)),
          o = [];
        (a && o.push(`text-containers`), n != null && o.push(`requests`));
        let c = {
          ...e.anchor,
          annotationFeatures: o,
          annotationRequestIncludesPrompt: n == null ? void 0 : !!n.initialComment?.trim(),
        };
        return (
          E.current?.clear(),
          v != null &&
            (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: v }),
            y(null)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: { ...e, anchor: c },
            wantsScreenshot: !0,
            ...n,
          }),
          oe(E_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `create` },
            anchor: {
              type: `text`,
              ...(e.themeVariant == null ? {} : { themeVariant: e.themeVariant }),
              value: c,
            },
          }),
          s(null),
          l(null),
          uu(),
          a && t.recordAnnotationFeatureUse?.(`text-containers`),
          n != null && t.recordAnnotationFeatureUse?.(`requests`, c.annotationRequestIncludesPrompt),
          !0
        );
      },
      [t, P, v],
    ),
    Xe = (0, $.useCallback)(
      (n, r, o = 0) => {
        let s = r ?? n.anchor,
          c = Xx(e),
          l = De.find((e) => e.id === n.id) ?? n,
          u = iv(l, s, o),
          d = o === 0,
          f = nd(s, d ? l.id : void 0, c) ?? null;
        (f != null && (d && c.set(l.id, f), u.designChange != null && Hb(f, u.designChange.id)),
          v != null &&
            t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: v }));
        let p = Ky(qy(u, f, F), f),
          m =
            u.designChange != null && f == null
              ? rx(u.designChange)
              : f == null || p.anchor.kind !== `element`
                ? void 0
                : nx(f, p, P ? t.getAnnotationControls?.(f) : void 0, u.designChange);
        (m != null &&
          f != null &&
          (P &&
            (u.designChange == null ||
              (u.designChange.anchor.kind === `element` &&
                p.anchor.kind === `element` &&
                u.designChange.anchor.runtimeElementId != null &&
                u.designChange.anchor.runtimeElementId === p.anchor.runtimeElementId)) &&
            a.rememberTarget(m.id, f),
          c.set(m.id, f)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `edit`, commentId: l.id },
            anchorState: p,
            designEditorState: m,
          }),
          oe(E_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `edit`, commentId: l.id },
            anchor: W_({ ...u, anchor: p.anchor }, f, c),
          }),
          y(null));
      },
      [a, t, P, De, v, e, F],
    ),
    Ze = (0, $.useCallback)(
      (n, r, i) => {
        let a = Xx(e),
          o = De.find((e) => e.id === n.id) ?? n,
          s = i === 0,
          c = nd(r, s ? o.id : void 0, a) ?? null;
        (c != null && s && a.set(o.id, c), y(o.id), oe(E_()));
        let l = qy(iv(o, r, i), c, F);
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-open-comment-preview`,
          commentId: o.id,
          anchorState: l,
        });
      },
      [t, De, e, F],
    ),
    Qe = (0, $.useCallback)(
      (r, o) => {
        let c = Zu(r);
        if (c == null) return !1;
        let l = {
            ...o,
            anchor: td(r, o.anchor, P),
            cardViewportRect: Zx(e, c.rect, { viewportScale: n.viewportScale, zoomFactor: F }),
          },
          u = nx(r, l, P ? t.getAnnotationControls?.(r) : void 0, void 0, c);
        return (
          P && a.rememberTarget(u.id, r),
          Xx(e).set(u.id, r),
          Hb(r, u.id),
          Rg(l.anchor, u.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-design-editor`,
            anchorState: l,
            designEditorState: u,
          }),
          oe(E_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `design`, groupId: u.id },
            anchor: {
              type: `element`,
              additionalSelections: [],
              cardViewportRect: l.cardViewportRect,
              element: r,
              themeVariant: l.themeVariant,
              value: l.anchor,
              viewportSize: l.viewportSize,
            },
          }),
          s(c),
          _(!1),
          P && zg(l.anchor, t.recordAnnotationFeatureUse, u.annotationControls),
          !0
        );
      },
      [a, t, P, e, n.viewportScale, F],
    ),
    $e = (0, $.useEffectEvent)((e, t, n, r) => {
      if (S != null) return !1;
      if (e instanceof Range) {
        let t = tu(e);
        return t != null && Ye(t, n);
      }
      return Je(e, Gy(e, t.x, t.y), n, r);
    });
  (0, $.useEffect)(() => t.subscribeToSiteAnnotationRequests?.((e, t, n, r) => $e(e, t, n, r)), [t]);
  let et = (0, $.useCallback)(
      (e) => {
        (y((t) => (t === e ? null : t)),
          t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }));
      },
      [t],
    ),
    tt = (0, $.useEffectEvent)((e, n) => {
      if (S != null) {
        E.current?.clear();
        return;
      }
      v != null && et(v);
      let r = Jy(e, F),
        o = t.getAnnotationControls?.(n),
        c = o?.controls.length ? nx(n, r, o) : void 0;
      (c != null && a.rememberTarget(c.id, n),
        Rg(e, c?.annotationControls),
        (xe.current = !1),
        h(!1),
        p(null),
        s(null),
        l(null),
        uu(),
        C({
          commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
          target: { mode: `create` },
          anchor: {
            type: `virtual`,
            additionalSelections: [],
            value: e,
            themeVariant: r.themeVariant,
            viewportSize: r.viewportSize,
          },
        }),
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-open-editor`,
          target: { mode: `create` },
          anchorState: r,
          designEditorState: c,
          wantsScreenshot: !0,
        }),
        P && zg(e, t.recordAnnotationFeatureUse, c?.annotationControls));
    }),
    nt = (0, $.useEffectEvent)((t, n) => {
      if (S != null || N !== `comment`) return;
      let r = sl(t.x, t.y, P, e);
      r != null && (n ? Je(r.element, Gy(r.element, t.x, t.y, r.usesSelectableContainer)) : s(Gx(r.element)));
    });
  ((0, $.useEffect)(() => {
    let t = n_({
      rootHost: e,
      onClearDomHover: () => {
        (s(null), l(null));
      },
      onFeedback: te,
      onSelected: tt,
      onFallback: nt,
    });
    return (
      (E.current = t),
      () => {
        (t.dispose(), (E.current = null));
      }
    );
  }, [e]),
    (0, $.useEffect)(() => {
      E.current?.setEnabled(P && N === `comment` && !Oe && !n.isAgentControllingBrowser);
    }, [P, N, Oe, n.isAgentControllingBrowser]),
    (0, $.useEffect)(() => {
      S?.anchor.type !== `virtual` && E.current?.clear();
    }, [S]));
  let rt = (0, $.useEffectEvent)((e) => {
      (E.current?.setEnabled(
        e.canUseSiteAnnotationApi === !0 &&
          e.interactionMode === `comment` &&
          e.isAnnotationSuspended !== !0 &&
          !e.isAgentControllingBrowser,
      ),
        n.zoomPercent !== e.zoomPercent && E.current?.invalidate());
    }),
    it = (0, $.useCallback)(
      (n) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let r = ce.current;
        if (((ce.current = null), r != null && Date.now() - r.capturedAt <= cS))
          return E.current?.select(r.viewportPoint) ? !0 : Je(r.element, r.anchorState);
        if (E.current?.select(n)) return !0;
        let i = sl(n.x, n.y, P, e);
        if (i == null) return !1;
        let a = Gy(i.element, n.x, n.y, i.usesSelectableContainer);
        return Je(i.element, a);
      },
      [S, t, P, Je, e],
    ),
    at = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            it(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [it],
    ),
    ot = (0, $.useCallback)(
      (e) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        ce.current = null;
        let n = le.current;
        le.current = null;
        let r = (n?.anchor.kind === `text` ? n : null) ?? eu();
        return r == null ? (uu(), e.fallbackViewportPoint != null && it(e.fallbackViewportPoint)) : Ye(r);
      },
      [S, t, Ye, it],
    ),
    st = (0, $.useCallback)((e) => {
      le.current = eu(e);
    }, []),
    ct = (0, $.useCallback)(
      (n, r = `design`) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let i = ce.current;
        if (((ce.current = null), i != null && Date.now() - i.capturedAt <= cS && i.designElement != null)) {
          let e = i.designElement;
          return Qe(e, e === i.element ? i.anchorState : Gy(e, n.x, n.y));
        }
        let a = sl(n.x, n.y, P, e, r);
        if (a == null) return !1;
        let o = Gy(a.element, n.x, n.y, a.usesSelectableContainer);
        return Qe(a.element, o);
      },
      [S, t, P, Qe, e],
    ),
    lt = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            ct(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [ct],
    ),
    ut = (0, $.useCallback)(() => {
      (_e.current != null && window.cancelAnimationFrame(_e.current),
        (_e.current = window.requestAnimationFrame(() => {
          ((_e.current = null), oe(E_()));
        })));
    }, []),
    dt = (0, $.useCallback)(
      (e, r, i) => {
        if (e.target.mode !== `create` || e.anchor.type === `text`) return;
        if (r == null) {
          (t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (xe.current = !1),
            h(!1),
            p(null),
            cc(),
            s(null),
            l(null),
            d(null));
          return;
        }
        if (!ke && r.additional.length > 0) return;
        let a = { ...e, anchor: Z_(e.anchor, r, i) };
        (t.sendMessageToHost({
          type: `browser-sidebar-runtime-update-anchor`,
          target: a.target,
          anchorState: Yy(a, F, n.viewportScale),
        }),
          oe(E_()),
          d(null),
          C(a));
      },
      [t, ke, n.viewportScale, F],
    ),
    ft = (0, $.useEffectEvent)((e) => {
      if (!ke || S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let t = X_(S.anchor),
        n = [t.primary, ...t.additional][e];
      n != null && dt(S, $c(t, n, !0));
    }),
    pt = (0, $.useEffectEvent)((e = v) => {
      e != null &&
        (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }),
        y(null));
    }),
    mt = (0, $.useEffectEvent)((e) => {
      C((t) => {
        if (t == null) return t;
        let n = t.target;
        return n.mode === `design` || !(`commentId` in n) || e.some((e) => e.id === n.commentId) ? t : null;
      });
    }),
    ht = (0, $.useEffectEvent)((e) => {
      (e != null &&
        t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }),
        (xe.current = !1),
        h(!1),
        p(null),
        cc(),
        (le.current = null),
        s(null),
        l(null),
        d(null),
        y(null),
        (we.current = !1),
        x(null),
        C(null),
        (he.current += 1),
        (Se.current = !1),
        (Ce.current = !1),
        (fe.current = null),
        ae(null));
    }),
    gt = (0, $.useEffectEvent)((e) => {
      (Xe(e), x(null));
    }),
    _t = (0, $.useEffectEvent)((e, t, n, r = P) => {
      let i = Ee.updatePointer(
        e,
        t,
        r,
        (n ?? (!g && !xe.current)) && (e == null || !E.current?.hasSurfaceAtPoint(e)),
      );
      return (i && E.current?.clearHover(), i);
    }),
    vt = (0, $.useEffectEvent)((t) => {
      if (
        t.interactionMode === `comment` &&
        t.isAnnotationSuspended !== !0 &&
        (N !== `comment` || Oe || (t.canUseSiteAnnotationApi === !0) !== P) &&
        S == null
      ) {
        let n = M.current;
        if (_t(n, !0, t.isDesignModifierPressed !== !0, t.canUseSiteAnnotationApi === !0)) return;
        if (n != null && (t.canUseTweaks === !1 || t.isDesignModifierPressed !== !0) && E.current?.hover(n)) {
          (p(n), s(null), l(null));
          return;
        }
        let r =
            t.canUseTweaks !== !1 &&
            (t.isDesignModifierPressed === !0 || (ts(t.comments) && t.annotationEditorMode === `design`)),
          i = n == null ? null : (sl(n.x, n.y, t.canUseSiteAnnotationApi === !0, e)?.element ?? null);
        (p(n), s(Gx(i, r)));
      }
    }),
    yt = (0, $.useEffectEvent)((t) => {
      C(K_(t, Xx(e), i.current));
    }),
    bt = (0, $.useEffectEvent)((t) => {
      let n = ke && t;
      if (((xe.current = n), h(n), !n)) {
        (p(null), s(null), l(null), cc());
        return;
      }
      if (S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let r = M.current;
      if (r == null || we.current) return;
      dl(r, e);
      let i = pl(r, e, P)?.element ?? null;
      if (i == null) {
        (p(null), s(null), l(null), cc());
        return;
      }
      (oc(i.ownerDocument, yl), p(r), l({ anchor: Gy(i, r.x, r.y).anchor, liveElement: i }), s(Gx(i)));
    });
  ((0, $.useEffect)(() => {
    let e = t.subscribeToHostMessages((e) => {
      switch (e.type) {
        case `browser-sidebar-runtime-sync`:
          ((i.current = e.comments),
            a.sync(e),
            rt(e),
            vt(e),
            e.canUseSiteAnnotationApi !== !0 &&
              Ee.usesTextContainer &&
              (Ee.cancel() && (Se.current = !0), me(!1)),
            e.interactionMode !== `comment` && (ye.current = !1),
            (e.isAnnotationSuspended === !0 || e.areAnnotationMarkersVisible === !1) && pt(),
            (e.interactionMode !== `comment` || e.isAnnotationSuspended === !0) &&
              (Ee.dispose(),
              me(!1),
              (xe.current = !1),
              h(!1),
              p(null),
              s(null),
              l(null),
              d(null),
              cc(),
              (Se.current = !1),
              (Ce.current = !1),
              (he.current += 1),
              (fe.current = null),
              ae(null)),
            e.canUseAnnotationMultiSelect !== !0 && d(null),
            r(
              (t) => (
                t.zoomPercent !== e.zoomPercent && ut(),
                {
                  activeDesignChange: e.activeDesignChange,
                  comments: e.comments,
                  intlConfig: e.intlConfig,
                  interactionMode: e.interactionMode,
                  annotationEditorMode: e.annotationEditorMode ?? `comment`,
                  isAgentControllingBrowser: e.isAgentControllingBrowser,
                  canUseAnnotationMultiSelect: e.canUseAnnotationMultiSelect === !0,
                  canUseSiteAnnotationApi: e.canUseSiteAnnotationApi === !0,
                  canUseTweaks: e.canUseTweaks !== !1,
                  isDesignModifierPressed: e.isDesignModifierPressed === !0,
                  isOriginalViewEnabled: e.isOriginalViewEnabled === !0,
                  areAnnotationMarkersVisible: e.areAnnotationMarkersVisible !== !1,
                  isAnnotationSuspended: e.isAnnotationSuspended === !0,
                  isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
                  viewportScale: e.viewportScale ?? 1,
                  zoomPercent: e.zoomPercent,
                }
              ),
            ),
            oe(E_()),
            _(e.interactionMode === `comment` && e.canUseTweaks !== !1 && e.isDesignModifierPressed === !0),
            (e.interactionMode !== `comment` ||
              e.isAnnotationSuspended === !0 ||
              e.isTweaksEditorOpen !== !0) &&
              (ie(null), k(!1)),
            ne((t) => (t != null && !e.comments.some((e) => e.id === t) ? null : t)));
          return;
        case `browser-sidebar-runtime-prepare-comment-screenshot`:
          ne(e.commentId);
          return;
        case `browser-sidebar-runtime-clear-comment-screenshot`:
          ne(null);
          return;
        case `browser-sidebar-runtime-capture-text-selection`:
          st();
          return;
        case `browser-sidebar-runtime-select-comment`:
          x(e.commentId);
          return;
        case `browser-sidebar-runtime-close-editor`:
          (E.current?.clear(),
            cc(),
            (0, $x.flushSync)(() => {
              ((xe.current = !1),
                h(!1),
                p(null),
                (he.current += 1),
                (Se.current = !1),
                (Ce.current = !1),
                ie(null),
                k(!1),
                ne(null),
                s(null),
                l(null),
                d(null),
                (fe.current = null),
                ae(null),
                C((t) => (t == null || e.target == null || cs(t.target, e.target) ? null : t)));
            }));
          return;
        case `browser-sidebar-runtime-design-scrub-changed`:
          (ie(e.property), k(e.isEditingControl));
          return;
        case `browser-sidebar-runtime-create-comment-at-point`:
          (d(null), it(e.viewportPoint) || at(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-create-comment-from-selection`:
          (d(null), ot(e));
          return;
        case `browser-sidebar-runtime-open-design-editor-at-point`:
          (d(null), ct(e.viewportPoint) || lt(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-annotation-selection-modifier-state`:
          bt(e.pressed);
          return;
        case `browser-sidebar-runtime-annotation-selection-hover-state`:
          d(ke ? e.selectionIndex : null);
          return;
        case `browser-sidebar-runtime-remove-annotation-selection`:
          if (!ke) return;
          ft(e.selectionIndex);
          return;
        case `browser-sidebar-runtime-restore-editor`:
          (E.current?.clear(),
            (xe.current = !1),
            h(!1),
            (M.current = null),
            p(null),
            cc(),
            s(null),
            l(null),
            d(null),
            yt(e));
          return;
      }
    });
    return () => {
      (_e.current != null && (window.cancelAnimationFrame(_e.current), (_e.current = null)), e());
    };
  }, [a, t, ke, st, ct, ut, at, lt, Ee, e, it, ot]),
    (0, $.useEffect)(() => {
      let t = Xx(e);
      (t.forEach((e, n) => {
        ((!De.some((e) => e.id === n) &&
          n !== ze?.id &&
          (S?.anchor.type !== `element` || S.anchor.element !== e)) ||
          !e.isConnected) &&
          t.delete(n);
      }),
        v != null && !Ie.some((e) => e.id === v) && pt(v),
        mt(Ie));
    }, [ze, S, De, v, e, Ie]),
    (0, $.useEffect)(() => {
      N === `browse` && ht(v);
    }, [v, N]),
    (0, $.useEffect)(() => () => Ee.dispose(), [Ee]),
    (0, $.useLayoutEffect)(() => {
      if (!(N !== `comment` || Oe || S != null)) return Px(e, M.current, Ae, P);
    }, [S, P, N, Oe, e, Ae]),
    (0, $.useEffect)(() => {
      if (b == null) return;
      let e = De.find((e) => e.id === b) ?? null;
      e != null && gt(e);
    }, [De, b]));
  let xt = (0, $.useEffectEvent)((e) => {
      N !== `comment` ||
        (Oe === e && ye.current === e) ||
        ((ye.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-annotation-suspension`, suspended: e }));
    }),
    St = (0, $.useEffectEvent)((e) => {
      e.isTrusted && e.code === `Space` && e.type === `keydown` && !e.repeat && (be.current = !1);
      let t = be.current && e.code === `Space`;
      if (N !== `comment` && !t) return;
      let n = a_(e, t || Oe || ye.current, { preserveTyping: e.composedPath().some((e) => V(e) && ul(e)) });
      n != null && ((be.current = n), xt(n));
    });
  ((0, $.useEffect)(
    () =>
      ac((e, t) => {
        let n = (e) => {
            e.isTrusted && (M.current = Mc(t, { x: e.clientX, y: e.clientY }));
          },
          r = () => {
            ((M.current = null), document.hasFocus() || ((ye.current = !1), (be.current = !1)));
          };
        return (
          t.addEventListener(`keydown`, St, !0),
          t.addEventListener(`keyup`, St, !0),
          t.addEventListener(`mousemove`, n, !0),
          t.addEventListener(`blur`, r),
          () => {
            (t.removeEventListener(`keydown`, St, !0),
              t.removeEventListener(`keyup`, St, !0),
              t.removeEventListener(`mousemove`, n, !0),
              t.removeEventListener(`blur`, r));
          }
        );
      }),
    [],
  ),
    (0, $.useEffect)(() => {
      if (Oe) return;
      let n = () => {
          (_t(null, !1), E.current?.clearHover(), (M.current = null), p(null), s(null), l(null));
        },
        r = (e, t) => Pe && (t || (We && !E.current?.hasSurfaceAtPoint(e))),
        a = (e) => {
          let n = ke && e;
          (bt(n),
            S?.target.mode === `create` &&
              S.anchor.type !== `text` &&
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: n,
              }));
        },
        o = (t, i) => {
          _(Pe && i.altKey);
          let o = S?.target.mode === `create` && S.anchor.type !== `text` && hl(i),
            c = o && (i.shiftKey || xe.current);
          if (!i.isTrusted || (ml(i, e) && !o)) {
            n();
            return;
          }
          let u = Mc(t, { x: i.clientX, y: i.clientY });
          if (((M.current = u), N !== `comment`)) return;
          let d = se.current;
          if (((se.current = u), o && !c)) {
            (p(null), s(null), l(null), cc());
            return;
          }
          Uc(i, { preventDefault: !1 });
          let f = d == null || d.x !== u.x || d.y !== u.y;
          ke && i.shiftKey && !xe.current && f && a(!0);
          let m = ke && S?.target.mode === `create` && S.anchor.type !== `text` && xe.current;
          if (S != null && !m) {
            (p(null), s(null), l(null), cc());
            return;
          }
          if (fe.current != null) {
            (p(u), s(null), l(null));
            return;
          }
          if (_t(u, S == null, !i.altKey && !i.shiftKey && !i.metaKey && !i.ctrlKey)) return;
          if ((oc(t.document, yl), dl(u, e), p(u), we.current)) {
            (s(null), l(null));
            return;
          }
          let h = r(u, i.altKey);
          if (!h && S == null && E.current?.hover(u)) {
            (s(null), l(null));
            return;
          }
          E.current?.clearHover();
          let g = h ? (sl(u.x, u.y, P, e)?.element ?? null) : (fl(u, e, i, P)?.element ?? null);
          if (!g) {
            (s(null), l(null));
            return;
          }
          (l({ anchor: Gy(g, u.x, u.y).anchor, liveElement: g }), s(Gx(g, h)));
        },
        c = (t, r, i) => {
          i.isTrusted && N === `comment` && S == null && !ml(i, e) && Uc(i, { preventDefault: !1 });
          let a = i.relatedTarget;
          if (a instanceof (t.defaultView?.Node ?? Node) && t.documentElement?.contains(a)) {
            $s(a) && (Ee.cancel() && (Se.current = !0), n());
            return;
          }
          let o = Mc(r, { x: i.clientX, y: i.clientY });
          (a != null && Qx(o)) || n();
        },
        u = () => {
          (Ee.isDragging && document.hasFocus()) || (Ee.cancel() && (Se.current = !0), _(!1), n(), a(!1));
        },
        d = ({ currentDragSelection: e, suppressFollowUpClick: r }) => {
          if (!e.isDraggingRegion || e.rect == null) return !1;
          he.current += 1;
          let a = he.current;
          (E.current?.clear(), (Se.current = r), (Ce.current = r));
          let o = p_(e.rect, e.current, { framePath: e.framePath, frameUrl: e.frameUrl });
          if (((fe.current = null), ae(e), ke && S?.target.mode === `create` && S.anchor.type !== `text`))
            return (dt(S, $c(X_(S.anchor), { anchor: o, liveElement: null }, !0)), ae(null), n(), !0);
          let s = Jy(o, F);
          return (
            window.requestAnimationFrame(() => {
              he.current === a &&
                (t.sendMessageToHost({
                  type: `browser-sidebar-runtime-open-editor`,
                  target: { mode: `create` },
                  anchorState: s,
                  wantsScreenshot: !0,
                }),
                xe.current &&
                  t.sendMessageToHost({
                    type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                    pressed: !0,
                  }),
                oe(E_()),
                C({
                  commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
                  target: { mode: `create` },
                  anchor: {
                    type: `region`,
                    additionalSelections: [],
                    themeVariant: s.themeVariant,
                    value: o,
                    viewportSize: s.viewportSize,
                  },
                }),
                ae(null),
                n());
            }),
            !0
          );
        },
        f = (t, n) => {
          ((ce.current = null), (le.current = null));
          let i = ke && S?.target.mode === `create` && S.anchor.type !== `text` && (n.shiftKey || xe.current);
          if (
            !n.isTrusted ||
            !n.isPrimary ||
            n.button !== 0 ||
            ml(n, e) ||
            N !== `comment` ||
            ((Se.current = !1), (Ce.current = !1), S != null && !i)
          )
            return;
          (S ?? E.current?.clear(),
            ke &&
              n.shiftKey &&
              !xe.current &&
              (S?.target.mode === `create` && S.anchor.type !== `text` ? a(!0) : ((xe.current = !0), h(!0))));
          let o = Mc(t, { x: n.clientX, y: n.clientY });
          if (
            Ee.handlePointerDown(
              t,
              n,
              o,
              S == null,
              P,
              !n.altKey && !n.shiftKey && !n.metaKey && !n.ctrlKey && !E.current?.hasSurfaceAtPoint(o),
            )
          ) {
            S ?? (M.current = o);
            return;
          }
          if ((me(!1), r(o, n.altKey))) {
            Uc(n);
            return;
          }
          if (
            fe.current != null &&
            d({ currentDragSelection: s_(fe.current, o), suppressFollowUpClick: !0 })
          ) {
            Uc(n);
            return;
          }
          ((he.current += 1), uu(), Uc(n));
          let s = Js(t) ?? [],
            c = {
              pointerId: n.pointerId,
              start: o,
              current: o,
              rect: null,
              isDraggingRegion: !1,
              framePath: s,
              frameUrl: cd(t, s),
            };
          ((fe.current = c), ae(c));
        },
        m = (t, n) => {
          if (!n.isTrusted || ml(n, e)) {
            ((ce.current = null), (le.current = null));
            return;
          }
          let r = Mc(t, { x: n.clientX, y: n.clientY });
          st(t);
          let i = cl(n, P) ?? sl(r.x, r.y, P, e);
          if (i == null) {
            ce.current = null;
            return;
          }
          (N === `comment` && Uc(n),
            (ce.current = {
              anchorState: Gy(i.element, r.x, r.y, i.usesSelectableContainer),
              capturedAt: Date.now(),
              designElement: cl(n, !1, `design`)?.element ?? null,
              element: i.element,
              viewportPoint: r,
            }));
        },
        g = (e, t) => {
          if (!t.isTrusted || Ee.handlePointerMove(e, t)) return;
          let n = fe.current;
          if (n == null || t.pointerId !== n.pointerId) return;
          Uc(t);
          let r = Mc(e, { x: t.clientX, y: t.clientY }),
            i = s_(n, r);
          ((fe.current = i), ae(i), (M.current = r), p(r), s(null), l(null));
        },
        v = (e, n) => {
          if (
            Ee.handlePointerUp(n, (e, t) => {
              ((Se.current = e != null || t), e != null && Ye(e, void 0, t));
            })
          )
            return;
          let i = fe.current;
          if (i == null || n.pointerId !== i.pointerId) return;
          let a = s_(i, Mc(e, { x: n.clientX, y: n.clientY }));
          if (
            ((fe.current = null),
            ae(null),
            n.isTrusted && (Uc(n), !d({ currentDragSelection: a, suppressFollowUpClick: !0 }) && S == null))
          ) {
            if (((Se.current = !0), (Ce.current = !1), r(a.current, n.altKey))) {
              ct(a.current, `annotation`);
              return;
            }
            it(a.current) &&
              ke &&
              n.shiftKey &&
              ((xe.current = !0),
              h(!0),
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: !0,
              }));
          }
        },
        y = (e) => {
          (Ee.handlePointerCancel(e) && (Se.current = !0),
            e.pointerId === fe.current?.pointerId && ((fe.current = null), ae(null), n()));
        },
        b = (e) => {
          (E.current?.clear(),
            t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (xe.current = !1),
            h(!1),
            p(null),
            cc(),
            s(null),
            l(null));
        },
        x = (e) => {
          if (e.key === `Escape` && e.isTrusted) {
            if ((E.current?.clear(), Ee.cancel())) {
              ((Se.current = !0), Uc(e));
              return;
            }
            if (fe.current != null) {
              (Uc(e), (Se.current = !0), (Ce.current = !1), (fe.current = null), ae(null), n());
              return;
            }
            if (S?.target.mode === `create` && S.anchor.type !== `text`) {
              (Uc(e), b(S));
              return;
            }
            S == null &&
              N === `comment` &&
              (Uc(e), t.sendMessageToHost({ type: `browser-sidebar-runtime-exit-comment-mode` }));
          }
        },
        w = (t) => {
          let n = S?.target.mode === `create`;
          !t.isTrusted ||
            N !== `comment` ||
            (S != null && !n) ||
            ml(t, e) ||
            Uc(t, { preventDefault: !Ee.isDragging });
        },
        T = (n, i) => {
          if (Se.current && ((Se.current = !1), (Ce.current = !1), N === `comment`)) {
            Uc(i);
            return;
          }
          let o = ke && (i.shiftKey || xe.current),
            c = S?.target.mode === `create` && S.anchor.type !== `text` && o && hl(i);
          if (!i.isTrusted || (ml(i, e) && !c) || N !== `comment`) return;
          if (S != null) {
            if ((Uc(i), S.target.mode === `create` && !o)) {
              b(S);
              return;
            }
            if (S.target.mode === `create` && S.anchor.type !== `text`) {
              a(o);
              let t = Mc(n, { x: i.clientX, y: i.clientY });
              if (E.current?.hasSurfaceAtPoint(t)) return;
              let r = fl(t, e, i, P);
              if (r == null) return;
              let c = Gy(r.element, t.x, t.y, r.usesSelectableContainer),
                u = $c(X_(S.anchor), { anchor: td(r.element, c.anchor, P), liveElement: r.element }, o);
              (dt(S, u, o ? void 0 : c),
                u != null &&
                  ((M.current = t), p(t), s(Gx(r.element)), l({ anchor: c.anchor, liveElement: r.element })));
            }
            return;
          }
          let u = Mc(n, { x: i.clientX, y: i.clientY }),
            f = fe.current;
          if (f != null) {
            let e = s_(f, u);
            if (((fe.current = null), ae(null), d({ currentDragSelection: e, suppressFollowUpClick: !1 }))) {
              Uc(i);
              return;
            }
          }
          if ((Uc(i), r(u, i.altKey))) {
            let t = sl(u.x, u.y, P, e);
            t != null && Qe(t.element, Gy(t.element, u.x, u.y, t.usesSelectableContainer));
            return;
          }
          it(u) &&
            ke &&
            i.shiftKey &&
            ((xe.current = !0),
            h(!0),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
              pressed: !0,
            }));
        },
        ee = (t, n) => {
          if (
            !n.isTrusted ||
            n.ctrlKey ||
            N !== `comment` ||
            (S != null && (S.target.mode !== `create` || S.anchor.type === `text`)) ||
            ml(n, e)
          )
            return;
          let r = Mc(t, { x: n.clientX, y: n.clientY });
          jb(ll(r.x, r.y, e), Mb(n, t)) && Uc(n);
        },
        te = !1,
        D = ac((e, t) => {
          let n = (e) => {
              f(t, e);
            },
            r = (e) => {
              g(t, e);
            },
            i = (e) => {
              v(t, e);
            },
            s = (e) => {
              o(t, e);
            },
            l = (n) => {
              c(e, t, n);
            },
            d = (e) => {
              T(t, e);
            },
            p = (e) => {
              m(t, e);
            },
            h = (e) => {
              ee(t, e);
            };
          (e.addEventListener(`pointerdown`, n, !0),
            e.addEventListener(`pointermove`, r, !0),
            e.addEventListener(`pointerup`, i, !0));
          for (let t of oS) e.addEventListener(t, w, !0);
          (e.addEventListener(`pointercancel`, y, !0),
            e.addEventListener(`mousemove`, s, !0),
            e.addEventListener(`mouseout`, l, !0));
          let b = (e) => {
              (e.key === `Alt` && _(!1),
                !e.shiftKey && xe.current && a(!1),
                N === `comment` &&
                  S == null &&
                  [`Alt`, `Shift`, `Meta`, `Control`].includes(e.key) &&
                  _t(M.current, !0, !e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey));
            },
            C = (e) => {
              (e.key === `Alt` && _(Pe),
                N === `comment` &&
                  S == null &&
                  [`Alt`, `Shift`, `Meta`, `Control`].includes(e.key) &&
                  _t(M.current, !0, !1),
                x(e));
            };
          return (
            e.addEventListener(`keydown`, C, !0),
            e.addEventListener(`keyup`, b, !0),
            e.addEventListener(`click`, d, !0),
            e.addEventListener(`contextmenu`, p, !0),
            e.addEventListener(`wheel`, h, !0),
            t.addEventListener(`blur`, u),
            () => {
              (te || Ee.disposeFrame(t),
                e.removeEventListener(`pointerdown`, n, !0),
                e.removeEventListener(`pointermove`, r, !0),
                e.removeEventListener(`pointerup`, i, !0));
              for (let t of oS) e.removeEventListener(t, w, !0);
              (e.removeEventListener(`pointercancel`, y, !0),
                e.removeEventListener(`mousemove`, s, !0),
                e.removeEventListener(`mouseout`, l, !0),
                e.removeEventListener(`keydown`, C, !0),
                e.removeEventListener(`keyup`, b, !0),
                e.removeEventListener(`click`, d, !0),
                e.removeEventListener(`contextmenu`, p, !0),
                e.removeEventListener(`wheel`, h, !0),
                t.removeEventListener(`blur`, u));
            }
          );
        });
      return () => {
        ((te = !0), D());
      };
    }, [S, t, ke, P, Pe, dt, st, N, Oe, We, Ee, e, ct, Qe, Ye, n.viewportScale, Ne, it, F]),
    (0, $.useEffect)(() => {
      if (N !== `comment` || Oe || S != null) return;
      let t = () => {
          if (_t(M.current, !0)) return;
          if (M.current != null && E.current?.hover(M.current)) {
            (s(null), l(null));
            return;
          }
          let t = Kx(M.current, e, P);
          (s(Gx(t)), l(null), t != null && oe(E_()));
        },
        n = () => {
          (Te.current != null && window.clearTimeout(Te.current),
            (we.current = !0),
            s(null),
            l(null),
            oe(E_()),
            (Te.current = window.setTimeout(() => {
              ((Te.current = null), (we.current = !1), t());
            }, sS)));
        },
        r = ac((e, r) => {
          (r.addEventListener(`resize`, t), e.addEventListener(`scroll`, n, !0));
          let i = P ? Ag(e, () => (0, $x.flushSync)(t)) : void 0;
          return () => {
            (i?.(), r.removeEventListener(`resize`, t), e.removeEventListener(`scroll`, n, !0));
          };
        });
      return () => {
        (r(),
          (we.current = !1),
          Te.current != null && (window.clearTimeout(Te.current), (Te.current = null)));
      };
    }, [S, P, N, Oe, e, Ne]),
    (0, $.useLayoutEffect)(() => {
      if ((S == null && v == null) || S?.anchor.type === `virtual`) return;
      let r = () => {
          let r = v == null ? null : { mode: `edit`, commentId: v },
            i = S?.target ?? r;
          if (i == null) return;
          let a,
            o = Xx(e);
          if (S == null) {
            let e = De.find((e) => e.id === v) ?? null;
            if (e == null) return;
            let t = nv(e, o) ?? null;
            (t != null && o.set(e.id, t), (a = qy(e, t, F)));
          } else
            S.target.mode === `create` || S.target.mode === `design`
              ? (a = Yy(S, F, n.viewportScale))
              : ((a = Xy(S, De, o, F)), a != null && (a = Ky(a, nd(a.anchor, void 0, o))));
          if (a == null && S == null) return;
          t.sendMessageToHost({ type: `browser-sidebar-runtime-update-anchor`, target: i, anchorState: a });
          let s = S?.anchor.type === `element` ? Y_(S.anchor, o) : null;
          if (
            (T(s == null ? null : { element: s, snapshot: Zu(s) }),
            oe(E_()),
            S?.anchor.type === `text` && a?.anchor.kind === `text`)
          ) {
            let e = a.anchor;
            C((t) =>
              t?.anchor.type !== `text` || ks(t.anchor.value, e)
                ? t
                : { ...t, anchor: { ...t.anchor, value: e } },
            );
          }
          if (a == null || S == null) {
            if (S == null) return;
            C((e) =>
              e == null || !cs(e.target, S.target) || e.anchor.type !== `element` || e.anchor.element == null
                ? e
                : { ...e, anchor: { ...e.anchor, element: null } },
            );
            return;
          }
          let c = S.target;
          if (c.mode !== `edit`) return;
          let l = Y_(S.anchor, o);
          C((e) =>
            e == null || !cs(e.target, c) || e.anchor.type !== `element` || e.anchor.element === l
              ? e
              : { ...e, anchor: { ...e.anchor, element: l } },
          );
        },
        i = () => {
          (S?.target.mode === `create` && S.anchor.type !== `text` && ((M.current = null), s(null), l(null)),
            r());
        },
        a =
          S == null
            ? []
            : S.anchor.type === `text`
              ? [S.anchor.value]
              : [S.anchor.value, ...S.anchor.additionalSelections.map((e) => e.anchor)];
      if ((r(), N !== `comment` || Oe)) return;
      let o =
          S?.anchor.type === `element`
            ? [S.anchor.element, ...S.anchor.additionalSelections.map((e) => e.liveElement)]
            : [],
        c = Vy(e, a, r, i, o.every((e) => e != null) ? o : []),
        u = S?.anchor.type === `text` ? au([S.anchor.value], r) : null;
      return () => {
        (c(), u?.());
      };
    }, [S, t, De, v, N, Oe, e, n.viewportScale, F]),
    (0, $.useEffect)(() => {
      let e = N === `comment` && S == null && Pe && g;
      ve.current !== e &&
        ((ve.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-design-modifier-state`, pressed: e }));
    }, [S, t, Pe, N, g]),
    (0, $.useEffect)(() => () => a.clear(), [a]));
  let Ct = (0, $.useEffectEvent)(() => Vb(N === `comment` ? He : uS, Le));
  ((0, $.useEffect)(() => Ct(), [ze, De, N, Le, n.isOriginalViewEnabled]),
    (0, $.useLayoutEffect)(() => {
      if (S != null || Ie.length === 0 || (N !== `comment` && D == null)) return;
      let t = De.filter((e) => e.anchor.kind === `text` && Jx(e)),
        n = () => {
          de((e) => iu(t, e));
        },
        r = null,
        i = () => {
          r ??= window.requestAnimationFrame(() => {
            ((r = null), n());
          });
        },
        a = () => {
          (n(),
            (0, $x.flushSync)(() => {
              oe(E_());
            }));
        },
        o = () => {
          (i(), oe(E_()));
        },
        s = () => o(),
        c = De.flatMap((e) => (Jx(e) ? [e.anchor, ...(e.additionalAnchors ?? [])] : []));
      (window.addEventListener(`resize`, a), Ke && document.addEventListener(`scroll`, s, !0));
      let l = qe ? Hy(document, e, ut) : null,
        u = kc(window, c, s),
        d = ac((t, n) => {
          if (n === window) return () => {};
          let r = () => o();
          (n.addEventListener(`resize`, a),
            n.addEventListener(`scroll`, r),
            Ke && t.addEventListener(`scroll`, r, !0));
          let i = kc(n, c, r),
            s = qe ? Hy(t, e, ut) : null;
          return () => {
            (n.removeEventListener(`resize`, a),
              n.removeEventListener(`scroll`, r),
              Ke && t.removeEventListener(`scroll`, r, !0),
              i(),
              s?.());
          };
        });
      i();
      let f = au(
        t.flatMap((e) => (e.anchor.kind === `text` ? [e.anchor] : [])),
        n,
      );
      return () => {
        (window.removeEventListener(`resize`, a),
          Ke && document.removeEventListener(`scroll`, s, !0),
          l?.(),
          u(),
          d(),
          r != null && window.cancelAnimationFrame(r),
          f());
      };
    }, [S, D, De, Ke, qe, N, ut, e, Ie.length]));
  let wt = N === `comment` && !Oe && n.isOriginalViewEnabled !== !0,
    Tt = N === `comment` && !Oe && !Ae && (S == null || S.target.mode === `create`);
  ((0, $.useLayoutEffect)(() => {
    if (Ae) return Hg();
  }, [Ae]),
    (0, $.useLayoutEffect)(() => {
      let e = document.getElementById(yl);
      if (e instanceof HTMLDivElement)
        return (
          (e.style.pointerEvents = Tt ? `auto` : `none`),
          () => {
            e.style.pointerEvents = `none`;
          }
        );
    }, [e, Tt]));
  let Et = D == null ? null : (Re.find((e) => e.id === D) ?? null),
    Dt = D == null ? null : (Ge.find((e) => e.id === D) ?? null),
    I =
      Et == null
        ? Dt == null
          ? null
          : { kind: `design`, annotation: Dt }
        : { kind: `comment`, annotation: Et },
    Ot = I?.annotation.id ?? null,
    kt = I?.kind === `comment` ? [I.annotation] : Re,
    L = I != null && D != null,
    At = S?.target.mode === `create` ? J_(S.anchor) : null,
    jt =
      S?.target.mode === `create` && S.anchor.type !== `text`
        ? [X_(S.anchor).primary, ...S.anchor.additionalSelections]
        : [],
    Mt = S?.target.mode === `create` && S.anchor.type !== `text` ? S.anchor.viewportSize : void 0,
    Nt =
      ke &&
      !L &&
      A == null &&
      S?.target.mode === `create` &&
      S.anchor.type !== `text` &&
      u != null &&
      u >= 0 &&
      u < jt.length
        ? u
        : null,
    Pt = q_(S, [...Re, ...Ie], Le),
    Ft = us(Me),
    It = Re;
  I?.kind === `comment`
    ? (It = Ft ? [I.annotation] : Re)
    : Ft || L
      ? (It = [])
      : Pt != null && (It = Re.filter((e) => e.id !== Pt.id));
  let Lt = It.flatMap((e) => {
      let t = Fe.get(e.id);
      return t == null
        ? []
        : (e.anchor.kind === `text` ? [e.anchor] : [e.anchor, ...(e.additionalAnchors ?? [])]).flatMap(
            (n, r) => {
              if (n.kind === `virtual`) return [];
              let i = e.selectionSourceIndexes[r] ?? r,
                a = n.kind === `element` ? nd(n, i === 0 ? e.id : void 0, Le) : null,
                o = x_(n, j, { liveElement: a, viewportSize: e.markerViewportSize, zoomFactor: F });
              return o == null
                ? []
                : [
                    {
                      anchor: n,
                      comment: e,
                      commentNumber: t,
                      key: `${e.id}:${n.framePath.join(`>`)}:${n.selector ?? n.elementPath}:${r}`,
                      markerPoint: o,
                      savedSelectionIndex: i,
                    },
                  ];
            },
          );
    }),
    Rt = ys(
      Lt.map(({ markerPoint: e }) => e),
      j.width * F,
    ),
    zt = I?.kind === `comment` ? Lt.findIndex(({ comment: e }) => e.id === I.annotation.id) : -1,
    Bt = zt === -1 ? void 0 : Rt[zt],
    Vt = Bt == null ? void 0 : { x: Bt.x / F, y: Bt.y / F },
    Ht =
      I?.annotation.anchor.kind === `element`
        ? I.kind === `comment`
          ? (nv(I.annotation, Le) ?? null)
          : (nd(I.annotation.anchor, I.annotation.id, Le) ?? null)
        : null,
    Ut =
      I?.kind === `comment` && I.annotation.anchor.kind !== `text`
        ? (I.annotation.additionalAnchors ?? []).map((e) => G_(e, Le))
        : [],
    Wt =
      I?.kind === `comment` &&
      I.annotation.anchor.kind === `element` &&
      Ht == null &&
      Ut.every((e) => e.anchor.kind === `element` && e.liveElement == null) &&
      !us(I.annotation.anchor.pageUrl),
    Gt = v == null ? null : (Re.find((e) => e.id === v) ?? null),
    Kt =
      (wt && n.areAnnotationMarkersVisible !== !1) || (L && I?.kind === `comment`)
        ? kt.flatMap((e) =>
            U_(e, S, I?.kind === `comment` ? I.annotation : null)
              ? []
              : [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((t, n) =>
                  t.kind === `region`
                    ? [
                        {
                          anchor: t,
                          key: `${e.id}:region:${t.framePath.join(`>`)}:${t.rect.x}:${t.rect.y}:${n}`,
                        },
                      ]
                    : [],
                ),
          )
        : [],
    qt = null;
  L && I?.annotation.anchor.kind === `text`
    ? (qt = I.annotation.anchor)
    : !L && !Oe && S?.anchor.type === `text`
      ? (qt = S.anchor.value)
      : !L && !Oe && n.areAnnotationMarkersVisible !== !1 && Gt?.anchor.kind === `text` && (qt = Gt.anchor);
  let Jt = qt == null ? null : ou(qt);
  (0, $.useLayoutEffect)(() => (Jt == null ? void 0 : su(Jt)), [Jt]);
  let Yt = qt == null ? [] : c_(qt),
    Xt = Jt == null ? Yt : [],
    Zt = null,
    Qt = !1,
    $t = `hover-box`,
    en,
    tn = [];
  if (L && I?.annotation.anchor.kind === `element`) {
    let e = Ht == null ? null : Zu(Ht),
      t = e?.rect ?? od(I.annotation.anchor);
    ((en = e?.borderRadius),
      ($t = __(I.annotation.anchor, t, j.width, j.height)),
      (Zt = d_(I.annotation.anchor, t, Ht)),
      (Qt = I.kind === `comment` && Qu(I.annotation.anchor)),
      (tn = $_(Ut, j, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: I.annotation.viewportSize,
      })));
  } else if (L && I?.kind === `comment` && I.annotation.anchor.kind === `region`) {
    let e = od(I.annotation.anchor);
    (($t = T_(I.annotation.anchor, e, j.width, j.height)),
      (Zt = d_(I.annotation.anchor, e)),
      (tn = $_(Ut, j, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: I.annotation.viewportSize,
      })));
  } else if (!L) {
    if (((Zt = A?.rect ?? null), Zt != null)) {
      if ((($t = T_(null, Zt, j.width, j.height)), S?.target.mode === `create` && S.anchor.type !== `text`)) {
        let e = X_(S.anchor);
        tn = $_([e.primary, ...e.additional], j, {
          clipToVisibleArea: !0,
          viewportSize: S.anchor.viewportSize,
        });
      }
    } else if (S?.anchor.type === `element`) {
      let e = J_(S.anchor),
        t = S.anchor.element === w?.element ? w.snapshot : null,
        n = t?.rect ?? od(e);
      ((en = t?.borderRadius),
        ($t = S.target.mode === `design` ? `hover-box` : __(e, n, j.width, j.height)),
        (Zt = S.target.mode === `design` ? n : d_(e, n, S.anchor.element)),
        (Qt = S.target.mode !== `design` && Qu(e)),
        (tn = $_(S.anchor.additionalSelections, j, {
          clipToVisibleArea: S.target.mode !== `design`,
          selectionIndexOffset: 1,
          viewportSize: S.anchor.viewportSize,
        })));
    } else if (S?.anchor.type === `region` && S.target.mode !== `design`) {
      let e = od(S.anchor.value);
      (($t = T_(S.anchor.value, e, j.width, j.height)),
        (Zt = d_(S.anchor.value, e)),
        (tn = $_(S.anchor.additionalSelections, j, {
          clipToVisibleArea: !0,
          selectionIndexOffset: 1,
          viewportSize: S.anchor.viewportSize,
        })));
    } else
      S?.anchor.type === `virtual` || ee != null
        ? (Zt = ee?.rect ?? null)
        : o != null && ((Zt = o.rect), (en = o.borderRadius), ($t = __(null, Zt, j.width, j.height)));
  }
  let nn = I == null ? null : u_([...Yt, ...(Zt == null ? [] : [Zt]), ...tn.map(({ rect: e }) => e)]),
    rn = L ? [] : Yx(re, S, ze, Le),
    an = Ne && !L && S == null && A == null && Gt == null ? o : null,
    R = !L && S?.target.mode === `create` && S.anchor.type !== `text` ? o : null,
    on = m && R != null && c != null && jt.some((e) => el(e, c)),
    sn = m ? `add` : `comment`;
  Ae && (sn = `text`);
  let cn = Q.hotspotByMode[sn === `add` ? `add` : `comment`],
    ln =
      !L && At != null && At.kind !== `virtual` && (!Ft || Pt == null)
        ? x_(At, j, {
            includeElementFrameScroll: !0,
            liveElement: jt[0]?.liveElement ?? null,
            viewportSize: Mt,
            zoomFactor: F,
          })
        : null,
    un = ns(De),
    dn = ln == null ? null : Pt == null ? (un === 0 ? null : un + 1) : (Fe.get(Pt.id) ?? null),
    fn =
      F === 1
        ? {}
        : {
            height: `${F * 100}vh`,
            transform: `scale(${1 / F})`,
            transformOrigin: `top left`,
            width: `${F * 100}vw`,
          },
    pn = {
      ...xb,
      ...fn,
      [aS]: String(je),
      "--browser-sidebar-draft-marker-size": `${Gs * je}px`,
      "--browser-sidebar-marker-label-font-size": `${11 * je}px`,
      "--browser-sidebar-metadata-column-gap": `${12 * je}px`,
      "--browser-sidebar-metadata-height": `${rS * je}px`,
      "--browser-sidebar-metadata-padding-x": `${10 * je}px`,
      "--browser-sidebar-metadata-padding-y": `${8 * je}px`,
      "--browser-sidebar-metadata-radius": `${12 * je}px`,
      "--browser-sidebar-metadata-row-gap": `${3 * je}px`,
      "--browser-sidebar-overlay-font-size": `${13 * je}px`,
      "--browser-sidebar-saved-marker-size": `${Gs * je}px`,
    };
  N === `comment` && !Oe && S == null && ((pn.cursor = `none`), Ae || (pn.pointerEvents = `auto`));
  let mn = (0, $.useEffectEvent)((e) => {
    t.sendMessageToHost({
      type: `browser-sidebar-runtime-comment-screenshot-ready`,
      commentId: e,
      annotationViewportRect: nn,
      markerViewportPoint: Vt,
      ...(Wt ? { skipScreenshotCapture: !0 } : {}),
    });
  });
  (0, $.useEffect)(() => {
    if (Ot == null || D == null) {
      ge.current = null;
      return;
    }
    if (ge.current === Ot) return;
    ge.current = Ot;
    let e = window.requestAnimationFrame(() => {
      mn(Ot);
    });
    return () => {
      window.cancelAnimationFrame(e);
    };
  }, [D, Ot]);
  let hn = (0, tS.jsxs)(tS.Fragment, {
    children: [
      Tt ? (0, tS.jsx)(Ux, {}) : null,
      Kt.map(({ anchor: e, key: t }) => {
        let n = od(e);
        if (n == null) return null;
        let r = d_(e, n);
        return r == null
          ? null
          : (0, tS.jsx)(`div`, { className: C_(e, n, j.width, j.height), style: w_(r, F) }, t);
      }),
      (0, tS.jsx)(Tb, {
        additionalHighlights: tn.filter((e) => !e.isPageAnnotation),
        highlightBorderRadius: en,
        highlightClassName: $t,
        highlightRect: Qt ? null : Zt,
        hoverSnapshot: R,
        isRemoveHover: on,
        linkedSelectionIndex: Nt,
        viewportHeight: j.height,
        viewportWidth: j.width,
        zoomFactor: F,
      }),
      !L && f != null && (S == null || (S.target.mode === `create` && S.anchor.type !== `text`))
        ? (0, tS.jsx)(wb, {
            className: `annotation-selection-cursor`,
            "data-browser-comment-annotation-selection-cursor": !0,
            "data-browser-comment-native-text-selection": Ae || void 0,
            mode: sn,
            pointerEvents: `none`,
            style: {
              height: Q.height * je,
              left: f.x * F - cn.x * je,
              top: f.y * F - cn.y * je,
              width: Q.width * je,
            },
          })
        : null,
      Xt.map((e, t) =>
        (0, tS.jsx)(
          `div`,
          { className: `text-selection-highlight`, style: w_(e, F) },
          `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
        ),
      ),
      rn.map((e) =>
        (0, tS.jsx)(
          `div`,
          {
            className: `flex-item-overlay`,
            "data-browser-comment-flex-item-overlay": !0,
            style: w_(e.rect, F, e.borderRadius),
          },
          e.key,
        ),
      ),
      an == null ? null : (0, tS.jsx)(Ob, { snapshot: an, viewportScale: n.viewportScale, zoomFactor: F }),
      wt || L
        ? (0, tS.jsxs)(`div`, {
            className: `markers-layer`,
            children: [
              ee?.selected === !0
                ? (0, tS.jsx)(Db, {
                    commentNumber: null,
                    markerPoint: { x: ee.point.x * F, y: ee.point.y * F },
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  })
                : null,
              ln == null
                ? null
                : (0, tS.jsx)(Db, {
                    commentNumber: dn,
                    markerPoint: ln,
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  }),
              (n.areAnnotationMarkersVisible !== !1 || L ? Lt : []).map(
                ({ anchor: e, comment: n, commentNumber: r, key: i, savedSelectionIndex: a }, o) =>
                  (0, tS.jsx)(
                    Eb,
                    {
                      commentNumber: r,
                      isSelected: S?.target.mode === `edit` && S.target.commentId === n.id,
                      markerPoint: Rt[o],
                      onMouseEnter: () => {
                        L || S != null || Ze(n, e, a);
                      },
                      onMouseLeave: () => {
                        et(n.id);
                      },
                      onClick: (r) => {
                        if (r.isTrusted) {
                          if ((r.preventDefault(), r.stopPropagation(), S != null)) {
                            t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                            return;
                          }
                          Xe(n, e, a);
                        }
                      },
                    },
                    i,
                  ),
              ),
            ],
          })
        : null,
    ],
  });
  return (0, tS.jsx)(Vx, {
    config: n.intlConfig,
    children: (0, tS.jsxs)(`div`, {
      "data-browser-comment-annotation-selection-modifier-active": (m && f != null) || void 0,
      "data-browser-comment-root": !0,
      "data-browser-comment-control-editing": (!L && O) || void 0,
      style: pn,
      children: [
        (0, tS.jsx)(`style`, { children: Sb }),
        (!Oe || L) && (Tt || Ae ? (0, tS.jsx)(Hx, { style: fn, children: hn }) : hn),
      ],
    }),
  });
}
function Vx({ children: e, config: t }) {
  return (0, tS.jsx)(Tg, {
    defaultLocale: t.defaultLocale,
    locale: t.locale,
    messages: t.messages,
    onError: lS,
    children: e,
  });
}
function Hx({ children: e, style: t }) {
  let n = (0, $.useRef)(null),
    [r, i] = (0, $.useState)(!1);
  return (
    (0, $.useLayoutEffect)(() => {
      let e = n.current;
      if (e == null) return;
      let t = null,
        r = () => {
          let t = dc(e, !1);
          return (i(t), t);
        };
      return (
        r() || (t = window.requestAnimationFrame(r)),
        () => {
          (t != null && window.cancelAnimationFrame(t), fc(e));
        }
      );
    }, []),
    (0, tS.jsx)(`div`, {
      ref: n,
      popover: `manual`,
      className: `interaction-layer`,
      style: r ? t : void 0,
      "data-browser-comment-interaction-layer": !0,
      children: e,
    })
  );
}
function Ux() {
  return (0, tS.jsx)(`div`, {
    className: `interaction-blocker`,
    "data-browser-comment-interaction-blocker": !0,
  });
}
function Wx() {
  let e = document.getElementById(yl);
  if (e instanceof HTMLDivElement) return e;
  let t = document.createElement(`div`);
  return (
    (t.id = yl),
    (t.style.position = `fixed`),
    (t.style.inset = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.zIndex = String(Og)),
    document.documentElement.appendChild(t),
    t
  );
}
function Gx(e, t = !1) {
  return e == null || (!t && Zs(e)) ? null : Zu(e);
}
function Kx(e, t, n) {
  return e == null ? null : (sl(e.x, e.y, n, t)?.element ?? null);
}
function qx(e, t) {
  if (!ld(e.anchor.pageUrl, window.location.href) || e.anchor.kind !== `element`) return null;
  let n = nd(e.anchor, e.id, t);
  return n == null
    ? null
    : (t.set(e.id, n), { ...e, anchor: ed(n, e.anchor, e.viewportSize, e.markerViewportPoint) });
}
function Jx(e) {
  return ld(e.anchor.pageUrl, window.location.href);
}
function Yx(e, t, n, r) {
  if (e == null || (e !== `gap` && e !== `row-gap` && e !== `column-gap`)) return [];
  let i = t?.anchor.type === `element` ? t.anchor.element : n == null ? null : (r.get(n.id) ?? null);
  if (i == null) return [];
  let a = Ac(i).getComputedStyle(i);
  if (a.display !== `flex` && a.display !== `inline-flex`) return [];
  let o = Array.from(i.children).flatMap((e, t) => {
    if (!V(e)) return [];
    let n = Ac(e).getComputedStyle(e);
    if (n.position === `absolute` || n.position === `fixed`) return [];
    let r = rd(e);
    return r == null
      ? []
      : [
          {
            borderRadius: n.borderRadius.length === 0 ? `0px` : n.borderRadius,
            key: `${t}-${Math.round(r.x)}-${Math.round(r.y)}-${Math.round(r.width)}-${Math.round(r.height)}`,
            rect: r,
          },
        ];
  });
  return o.length > 1 ? o : [];
}
function Xx(e) {
  let t = iS.get(e);
  if (t != null) return t;
  let n = new Map();
  return (iS.set(e, n), n);
}
function Zx(e, t, { viewportScale: n, zoomFactor: r }) {
  let i = l_(t, { viewportScale: n, zoomFactor: r }),
    a = e.shadowRoot?.querySelector(`.element-metadata-tooltip`);
  if (
    a instanceof HTMLElement &&
    Number.parseFloat(a.style.left) === i.x &&
    Number.parseFloat(a.style.top) === i.y
  ) {
    let e = a.getBoundingClientRect();
    return { x: e.x, y: e.y, width: e.width, height: e.height };
  }
  return i;
}
function Qx(e) {
  return As(e, { width: window.innerWidth, height: window.innerHeight });
}
var $,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS = o(() => {
    (qs(),
      ($ = u(Rf(), 1)),
      ($x = Bf()),
      (eS = Wf()),
      Dg(),
      kg(),
      Pg(),
      Lg(),
      Vg(),
      Ug(),
      Yg(),
      Sl(),
      al(),
      i_(),
      o_(),
      tv(),
      av(),
      yd(),
      Wy(),
      Zy(),
      H_(),
      Ab(),
      Cb(),
      Xc(),
      Bb(),
      tx(),
      ax(),
      Ax(),
      Mx(),
      Lx(),
      Xu(),
      (tS = $y()),
      (nS = { name: `oai-annotation-editor-default-mode`, values: [`advanced`] }),
      (rS = 72),
      (iS = new WeakMap()),
      (aS = `--browser-sidebar-overlay-size-scale`),
      (oS = [
        `auxclick`,
        `dblclick`,
        `mousedown`,
        `mouseenter`,
        `mouseleave`,
        `mouseover`,
        `mouseup`,
        `pointerdown`,
        `pointerenter`,
        `pointerleave`,
        `pointermove`,
        `pointerover`,
        `pointerout`,
        `pointerup`,
      ]),
      (sS = 100),
      (cS = 5e3),
      (lS = () => {}),
      (uS = []));
  });
(qs(), cf());
var fS = null,
  pS = null,
  mS = {
    interactionMode: `browse`,
    annotationEditorMode: `comment`,
    isAgentControllingBrowser: !1,
    canUseTweaks: !1,
    canUseAnnotationMultiSelect: !1,
    canUseSiteAnnotationApi: !1,
    isDesignModifierPressed: !1,
    isTweaksEditorOpen: !1,
    comments: [],
    intlConfig: Ks,
    viewportScale: 1,
    zoomPercent: 100,
  },
  hS = !1,
  gS = tf(),
  _S = !1,
  vS = !1,
  yS = !1,
  bS = !1,
  xS = !1,
  SS = null,
  CS = null,
  wS = null,
  TS = null,
  ES = null;
function DS() {
  if ((d.ipcRenderer.on(lf, jS), globalThis.isSecureContext === !0 && window === window.top)) {
    let e = d.ipcRenderer.sendSync(ff);
    ((_S = e.enabled),
      (xS = e.siteAnnotationPermissionGranted),
      (mS = {
        ...mS,
        canUseSiteAnnotationApi: e.enabled && e.siteAnnotationFeaturesEnabled,
        isAgentControllingBrowser: e.isAgentControllingBrowser,
        interactionMode: e.isAnnotationModeActive ? `comment` : `browse`,
      }),
      e.enabled &&
        ((ES = Jd()),
        (CS = xd({
          requestPermission: MS,
          getState: () => ({
            canUseSiteAnnotationApi: mS.canUseSiteAnnotationApi === !0,
            isAgentControllingBrowser: mS.isAgentControllingBrowser,
            hasActiveEditor: bS || gS.hasPendingEditor,
          }),
        })),
        (TS = Pf((e, t, n) => {
          d.ipcRenderer.send(df, { ...pf, payload: { features: e, detections: t, used: n } });
        })),
        (wS = Tf(
          (e) =>
            yS ||
            mS.canUseSiteAnnotationApi !== !0 ||
            mS.isAgentControllingBrowser ||
            navigator.userActivation?.isActive !== !0
              ? !1
              : (e !== !0 && CS?.clear(),
                d.ipcRenderer.invoke(uf, {
                  type: `browser-sidebar-runtime-toggle-annotation-mode`,
                  force: e,
                }),
                !0),
          PS,
          TS.recordUse,
          () => mS.canUseSiteAnnotationApi === !0,
        )),
        wS ?? (ES.dispose(), (ES = null), CS.dispose(), (CS = null))));
  }
  (document.readyState === `loading` ? window.addEventListener(`DOMContentLoaded`, kS, { once: !0 }) : kS(),
    window.addEventListener(`pagehide`, (e) => {
      (FS(null),
        e.isTrusted && (SS?.resolve(!1), (SS = null)),
        e.isTrusted &&
          !e.persisted &&
          ((yS = !0),
          OS(),
          window.removeEventListener(`DOMContentLoaded`, kS),
          d.ipcRenderer.removeListener(lf, jS),
          fS?.dispose(),
          gS.clear()));
    }));
}
function OS() {
  (SS?.resolve(!1),
    (SS = null),
    (xS = !1),
    FS(null),
    (_S = !1),
    TS?.dispose(),
    (TS = null),
    CS?.dispose(),
    (CS = null),
    wS?.(),
    (wS = null),
    ES?.dispose(),
    (ES = null));
}
function kS() {
  vS ||
    yS ||
    ((vS = !0),
    If(
      async () => {
        let { mountBrowserCommentRuntime: e } = await Promise.resolve().then(() => (dS(), Rx));
        return { mountBrowserCommentRuntime: e };
      },
      void 0,
    ).then(({ mountBrowserCommentRuntime: e }) => {
      yS || ((fS = e(AS())), fS.setSiteAnnotationPreview(pS), (pS = null));
    }));
}
function AS() {
  let e = mS;
  return (
    gS.clearSync(),
    {
      initialState: e,
      recordAnnotationFeatureUse(e, t) {
        mS.canUseSiteAnnotationApi && !mS.isAgentControllingBrowser && TS?.recordAnnotationOpened(e, t);
      },
      subscribeToSiteAnnotationRequests: CS?.subscribe,
      getAnnotationControlTargets: () => ES?.getTargets() ?? [],
      getAnnotationControls(e) {
        return mS.canUseSiteAnnotationApi ? ES?.getControls(e) : void 0;
      },
      sendMessageToHost(e) {
        (e.type === `browser-sidebar-runtime-open-editor` ||
        e.type === `browser-sidebar-runtime-open-design-editor`
          ? (bS = !0)
          : (e.type === `browser-sidebar-runtime-cancel-editor` ||
              e.type === `browser-sidebar-runtime-exit-comment-mode`) &&
            ((bS = !1), CS?.clear()),
          d.ipcRenderer.invoke(uf, e));
      },
      subscribeToHostMessages(e) {
        hS = !0;
        let t = (t, n) => {
          switch (n.type) {
            case `browser-sidebar-runtime-annotation-permission-result`:
            case `browser-site-annotation-feature-preview`:
              return;
            case `browser-sidebar-runtime-sync`:
              e({ ...n, canUseSiteAnnotationApi: mS.canUseSiteAnnotationApi });
              return;
            case `browser-sidebar-runtime-prepare-comment-screenshot`:
            case `browser-sidebar-runtime-clear-comment-screenshot`:
            case `browser-sidebar-runtime-capture-text-selection`:
            case `browser-sidebar-runtime-select-comment`:
            case `browser-sidebar-runtime-close-editor`:
            case `browser-sidebar-runtime-design-scrub-changed`:
            case `browser-sidebar-runtime-create-comment-at-point`:
            case `browser-sidebar-runtime-create-comment-from-selection`:
            case `browser-sidebar-runtime-open-design-editor-at-point`:
            case `browser-sidebar-runtime-annotation-selection-hover-state`:
            case `browser-sidebar-runtime-annotation-selection-modifier-state`:
            case `browser-sidebar-runtime-remove-annotation-selection`:
            case `browser-sidebar-runtime-restore-editor`:
              e(n);
              return;
          }
        };
        return (
          d.ipcRenderer.on(lf, t),
          gS.flush(e),
          () => {
            ((hS = !1), d.ipcRenderer.removeListener(lf, t));
          }
        );
      },
    }
  );
}
function jS(e, t) {
  switch (t.type) {
    case `browser-sidebar-runtime-annotation-permission-result`:
      SS?.requestId === t.requestId && (SS.resolve(t.allowed), (SS = null));
      return;
    case `browser-site-annotation-feature-preview`:
      FS(mS.canUseSiteAnnotationApi && !mS.isAgentControllingBrowser ? t.preview : null);
      return;
    case `browser-sidebar-runtime-sync`:
      (NS(t), hS || gS.buffer({ ...t, canUseSiteAnnotationApi: mS.canUseSiteAnnotationApi }));
      return;
    case `browser-sidebar-runtime-capture-text-selection`:
      hS || gS.buffer(t);
      return;
    case `browser-sidebar-runtime-select-comment`:
    case `browser-sidebar-runtime-create-comment-at-point`:
    case `browser-sidebar-runtime-create-comment-from-selection`:
    case `browser-sidebar-runtime-open-design-editor-at-point`:
    case `browser-sidebar-runtime-restore-editor`:
      (CS?.clear(), hS || gS.buffer(t));
      return;
    case `browser-sidebar-runtime-close-editor`:
      ((bS = !1), CS?.clear(), gS.buffer(t));
      return;
    case `browser-sidebar-runtime-design-scrub-changed`:
    case `browser-sidebar-runtime-annotation-selection-hover-state`:
    case `browser-sidebar-runtime-annotation-selection-modifier-state`:
    case `browser-sidebar-runtime-remove-annotation-selection`:
    case `browser-sidebar-runtime-prepare-comment-screenshot`:
    case `browser-sidebar-runtime-clear-comment-screenshot`:
      return;
  }
}
function MS() {
  if (xS) return !0;
  if (SS != null) return SS.promise;
  let e = { ...Promise.withResolvers(), requestId: crypto.randomUUID() };
  return (
    (SS = e),
    d.ipcRenderer
      .invoke(uf, { type: `browser-sidebar-runtime-request-annotation-permission`, requestId: e.requestId })
      .catch(() => {
        SS === e && ((SS = null), e.resolve(!1));
      }),
    e.promise
  );
}
function NS(e) {
  let t = wS != null && PS();
  (e.canUseSiteAnnotationApi === !1 && OS(),
    (e.isAgentControllingBrowser || e.siteAnnotationFeaturesEnabled === !1) && (CS?.clear(), FS(null)),
    (mS = {
      interactionMode: e.interactionMode,
      annotationEditorMode: e.annotationEditorMode ?? `comment`,
      isAgentControllingBrowser: e.isAgentControllingBrowser,
      canUseTweaks: e.canUseTweaks !== !1,
      canUseAnnotationMultiSelect: e.canUseAnnotationMultiSelect === !0,
      canUseSiteAnnotationApi: _S && e.siteAnnotationFeaturesEnabled !== !1,
      isDesignModifierPressed: e.isDesignModifierPressed === !0,
      areAnnotationMarkersVisible: e.areAnnotationMarkersVisible !== !1,
      isAnnotationSuspended: e.isAnnotationSuspended === !0,
      isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
      comments: e.comments,
      intlConfig: e.intlConfig,
      viewportScale: e.viewportScale ?? 1,
      zoomPercent: e.zoomPercent,
    }));
  let n = wS != null && PS();
  n !== t && document.dispatchEvent(new CustomEvent(`oaiannotationmodechange`, { detail: { active: n } }));
}
function PS() {
  return mS.canUseSiteAnnotationApi === !0 && mS.interactionMode === `comment`;
}
function FS(e) {
  fS == null ? (pS = e) : fS.setSiteAnnotationPreview(e);
}
var IS = !1;
function LS() {
  (window.addEventListener(`dragstart`, RS, !0), window.addEventListener(`dragend`, zS, !0));
}
function RS(e) {
  if (!e.isTrusted) return;
  let t = BS(e),
    n = t?.currentSrc || t?.src;
  n != null &&
    n.length !== 0 &&
    ((IS = !0),
    d.ipcRenderer.invoke(uf, { type: `browser-sidebar-runtime-image-drag-started`, sourceUrl: n }));
}
function zS(e) {
  e.isTrusted &&
    IS &&
    ((IS = !1), d.ipcRenderer.invoke(uf, { type: `browser-sidebar-runtime-image-drag-ended` }));
}
function BS(e) {
  for (let t of e.composedPath()) if (t instanceof HTMLImageElement) return t;
  return e.target instanceof HTMLImageElement ? e.target : null;
}
function VS() {
  (window.addEventListener(`mousedown`, US, !0),
    window.addEventListener(`mouseup`, HS, !0),
    window.addEventListener(`auxclick`, US, !0));
}
function HS(e) {
  let t = WS(e);
  t != null &&
    e.isTrusted &&
    (US(e), d.ipcRenderer.invoke(uf, { type: `browser-sidebar-runtime-mouse-navigation`, direction: t }));
}
function US(e) {
  WS(e) != null && (e.preventDefault(), e.stopPropagation());
}
function WS(e) {
  return e.button === 3 ? `back` : e.button === 4 ? `forward` : null;
}
(Object.freeze([`http:`, `https:`]), new TextEncoder());
var GS = {
    distribution: `chrome-web-store`,
    extensionIds: [`lfkehkpjohcoelkpembgemeipeppanef`],
    outputModes: [],
    releaseChannel: `beta`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef`,
  },
  KS = {
    distribution: `chrome-web-store`,
    extensionIds: [`hehggadaopoacecdllhhajmbjkdcmajg`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg`,
  },
  qS = {
    distribution: `microsoft-edge-add-ons`,
    extensionIds: [`odlomjlbamekndcpllcnffbgeohgkmjh`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh`,
  },
  JS = {
    chrome: {
      dev: [
        {
          distribution: `local-development`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `dev`,
          signingIdentity: `development`,
        },
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `dev`,
          signingIdentity: `development`,
        },
        GS,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        GS,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        KS,
      ],
    },
    edge: {
      dev: [
        {
          distribution: `local-development`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `dev`,
          signingIdentity: `development`,
        },
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `dev`,
          signingIdentity: `development`,
        },
        GS,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        qS,
        GS,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        qS,
        KS,
      ],
    },
  };
(JS.chrome.dev, JS.chrome.internal, JS.chrome.prod, JS.edge.dev, JS.edge.internal, JS.edge.prod);
var YS = { type: `webmcp_changed`, version: 1 };
function XS() {
  if (!d.ipcRenderer.sendSync(`codex_desktop:get-browser-webmcp-policy`).enabled) return;
  let e = Reflect.get(document, `modelContext`);
  if (!(e instanceof EventTarget)) return;
  let t = () => {
    d.ipcRenderer.send(df, YS);
  };
  (e.addEventListener(`toolchange`, t),
    window.addEventListener(`pagehide`, (n) => {
      n.persisted || e.removeEventListener(`toolchange`, t);
    }),
    t());
}
(XS(), d.webFrame.setVisualZoomLevelLimits?.(1, 3), DS(), VS(), LS());
//# sourceMappingURL=browser-page-preload.js.map
