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
function E(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function ee(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function D(e) {
  return JSON.stringify(e);
}
function O(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
function te(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function ne(e) {
  if (te(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return te(n) !== !1 && Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) !== !1;
}
function re(e) {
  return ne(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
function k(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function A(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function j(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (delete t.message, typeof t.error == `string` ? { ...t, error: () => t.error } : t);
}
function ie(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`);
}
function ae(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0) throw Error(`.pick() cannot be used on object schemas containing refinements`);
  return A(
    e,
    ee(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (E(this, `shape`, e), e);
      },
      checks: [],
    }),
  );
}
function oe(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0) throw Error(`.omit() cannot be used on object schemas containing refinements`);
  return A(
    e,
    ee(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (E(this, `shape`, r), r);
      },
      checks: [],
    }),
  );
}
function M(e, t) {
  if (!ne(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return A(
    e,
    ee(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (E(this, `shape`, n), n);
      },
    }),
  );
}
function se(e, t) {
  if (!ne(t)) throw Error(`Invalid input to safeExtend: expected a plain object`);
  return A(
    e,
    ee(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (E(this, `shape`, n), n);
      },
    }),
  );
}
function ce(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  return A(
    e,
    ee(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (E(this, `shape`, n), n);
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
  return A(
    t,
    ee(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else for (let t in r) i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (E(this, `shape`, i), i);
      },
      checks: [],
    }),
  );
}
function ue(e, t, n) {
  return A(
    t,
    ee(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else for (let t in r) i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (E(this, `shape`, i), i);
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
  N,
  xe,
  Se = o(() => {
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
      (N = new Set([`string`, `number`, `symbol`])),
      (xe = {
        safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      }));
  });
function Ce(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0 ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i))) : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function we(e, t = (e) => e.message) {
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
var Te,
  Ee,
  P,
  De = o(() => {
    (v(),
      Se(),
      (Te = (e, t) => {
        ((e.name = `$ZodError`),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, b, 2)),
          Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
      }),
      (Ee = f(`$ZodError`, Te)),
      (P = f(`$ZodError`, Te, { Parent: Error })));
  }),
  Oe,
  F,
  ke,
  I,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be = o(() => {
    (v(),
      De(),
      Se(),
      (Oe = (e) => (t, n, r, i) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new h();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => he(e, a, p())));
          throw (ye(t, i?.callee), t);
        }
        return o.value;
      }),
      (F = (e) => async (t, n, r, i) => {
        let a = r ? { ...r, async: !0 } : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => he(e, a, p())));
          throw (ye(t, i?.callee), t);
        }
        return o.value;
      }),
      (ke = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new h();
        return a.issues.length
          ? { success: !1, error: new (e ?? Ee)(a.issues.map((e) => he(e, i, p()))) }
          : { success: !0, data: a.value };
      }),
      (I = ke(P)),
      (Ae = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => he(e, i, p()))) }
            : { success: !0, data: a.value }
        );
      }),
      (je = Ae(P)),
      (Me = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Oe(e)(t, n, i);
      }),
      (Ne = (e) => (t, n, r) => Oe(e)(t, n, r)),
      (Pe = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return F(e)(t, n, i);
      }),
      (Fe = (e) => async (t, n, r) => F(e)(t, n, r)),
      (Ie = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return ke(e)(t, n, i);
      }),
      (Le = (e) => (t, n, r) => ke(e)(t, n, r)),
      (Re = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ae(e)(t, n, i);
      }),
      (ze = (e) => async (t, n, r) => Ae(e)(t, n, r)));
  });
function Ve() {
  return new RegExp(tt, `u`);
}
function He(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ue(e) {
  return RegExp(`^${He(e)}$`);
}
function We(e) {
  let t = He({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``), e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${ut}T(?:${r})$`);
}
var Ge,
  Ke,
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
  yt = o(() => {
    ((Ge = /^[cC][0-9a-z]{6,}$/),
      (Ke = /^[0-9a-z]+$/),
      (qe = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      (Je = /^[0-9a-vA-V]{20}$/),
      (Ye = /^[A-Za-z0-9]{27}$/),
      (Xe = /^[a-zA-Z0-9_-]{21}$/),
      (Ze = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      (Qe = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      ($e = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (et =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (tt = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`),
      (nt =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (rt =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (it =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (at =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (ot = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (st = /^[A-Za-z0-9_-]*$/),
      (ct = /^https?$/),
      (lt = /^\+[1-9]\d{6,14}$/),
      (ut = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`),
      (dt = RegExp(`^${ut}$`)),
      (ft = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}` : `[\\s\\S]*`;
        return RegExp(`^${t}$`);
      }),
      (pt = /^-?\d+$/),
      (mt = /^-?\d+(?:\.\d+)?$/),
      (ht = /^(?:true|false)$/i),
      (gt = /^null$/i),
      (_t = /^[^A-Z]*$/),
      (vt = /^[^a-z]*$/));
  }),
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
  Lt = o(() => {
    (v(),
      yt(),
      Se(),
      (bt = f(`$ZodCheck`, (e, t) => {
        var n;
        ((e._zod ??= {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
      })),
      (xt = { number: `number`, bigint: `bigint`, object: `date` }),
      (St = f(`$ZodCheckLessThan`, (e, t) => {
        bt.init(e, t);
        let n = xt[typeof t.value];
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
      (Ct = f(`$ZodCheckGreaterThan`, (e, t) => {
        bt.init(e, t);
        let n = xt[typeof t.value];
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
      (wt = f(`$ZodCheckMultipleOf`, (e, t) => {
        (bt.init(e, t),
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
      (Tt = f(`$ZodCheckNumberFormat`, (e, t) => {
        (bt.init(e, t), (t.format = t.format || `float64`));
        let n = t.format?.includes(`int`),
          r = n ? `int` : `number`,
          [i, a] = xe[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = pt));
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
      (Et = f(`$ZodCheckMaxLength`, (e, t) => {
        var n;
        (bt.init(e, t),
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
      (Dt = f(`$ZodCheckMinLength`, (e, t) => {
        var n;
        (bt.init(e, t),
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
        (bt.init(e, t),
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
        (bt.init(e, t),
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
      (At = f(`$ZodCheckRegex`, (e, t) => {
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
      (jt = f(`$ZodCheckLowerCase`, (e, t) => {
        ((t.pattern ??= _t), kt.init(e, t));
      })),
      (Mt = f(`$ZodCheckUpperCase`, (e, t) => {
        ((t.pattern ??= vt), kt.init(e, t));
      })),
      (Nt = f(`$ZodCheckIncludes`, (e, t) => {
        bt.init(e, t);
        let n = k(t.includes),
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
      (Pt = f(`$ZodCheckStartsWith`, (e, t) => {
        bt.init(e, t);
        let n = RegExp(`^${k(t.prefix)}.*`);
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
      (Ft = f(`$ZodCheckEndsWith`, (e, t) => {
        bt.init(e, t);
        let n = RegExp(`.*${k(t.suffix)}$`);
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
      (It = f(`$ZodCheckOverwrite`, (e, t) => {
        (bt.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      })));
  }),
  Rt,
  zt = o(() => {
    Rt = class {
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
  Bt,
  Vt = o(() => {
    Bt = { major: 4, minor: 4, patch: 3 };
  });
function Ht(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
function Ut(e) {
  if (!st.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Ht(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
function Wt(e, t = null) {
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
function Gt(e, t, n) {
  (e.issues.length && t.issues.push(...pe(n, e.issues)), (t.value[n] = e.value));
}
function Kt(e, t, n, r, i, a) {
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
function qt(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = ie(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function Jt(e, t, n, r, i, a) {
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
    a instanceof Promise ? e.push(a.then((e) => Kt(e, n, i, t, u, d))) : Kt(a, n, i, t, u, d);
  }
  return (
    o.length && n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
function Yt(e, t, n, r) {
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
function Xt(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t)) return { valid: !0, data: e };
  if (ne(e) && ne(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Xt(e[n], t[n]);
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
        o = Xt(i, a);
      if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Zt(e, t, n) {
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
  let o = Xt(t.value, n.value);
  if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return ((e.value = o.data), e);
}
function Qt(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
function $t(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
function en(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: e.value, inst: t }),
    e
  );
}
function tn(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
function nn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
function rn(e, t, n, r) {
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
var an,
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
  tr,
  nr,
  rr = o(() => {
    (Lt(),
      v(),
      zt(),
      Be(),
      yt(),
      Se(),
      Vt(),
      (an = f(`$ZodType`, (e, t) => {
        var n;
        ((e ??= {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = Bt));
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
              let n = I(e, t);
              return n.success ? { value: n.data } : { issues: n.error?.issues };
            } catch {
              return je(e, t).then((e) => (e.success ? { value: e.data } : { issues: e.error?.issues }));
            }
          },
          vendor: `zod`,
          version: 1,
        }));
      })),
      (on = f(`$ZodString`, (e, t) => {
        (an.init(e, t),
          (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? ft(e._zod.bag)),
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
      (sn = f(`$ZodStringFormat`, (e, t) => {
        (kt.init(e, t), on.init(e, t));
      })),
      (cn = f(`$ZodGUID`, (e, t) => {
        ((t.pattern ??= Qe), sn.init(e, t));
      })),
      (ln = f(`$ZodUUID`, (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ??= $e(e);
        } else t.pattern ??= $e();
        sn.init(e, t);
      })),
      (un = f(`$ZodEmail`, (e, t) => {
        ((t.pattern ??= et), sn.init(e, t));
      })),
      (dn = f(`$ZodURL`, (e, t) => {
        (sn.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim();
              if (!t.normalize && t.protocol?.source === ct.source && !/^https?:\/\//i.test(r)) {
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
      (fn = f(`$ZodEmoji`, (e, t) => {
        ((t.pattern ??= Ve()), sn.init(e, t));
      })),
      (pn = f(`$ZodNanoID`, (e, t) => {
        ((t.pattern ??= Xe), sn.init(e, t));
      })),
      (mn = f(`$ZodCUID`, (e, t) => {
        ((t.pattern ??= Ge), sn.init(e, t));
      })),
      (hn = f(`$ZodCUID2`, (e, t) => {
        ((t.pattern ??= Ke), sn.init(e, t));
      })),
      (gn = f(`$ZodULID`, (e, t) => {
        ((t.pattern ??= qe), sn.init(e, t));
      })),
      (_n = f(`$ZodXID`, (e, t) => {
        ((t.pattern ??= Je), sn.init(e, t));
      })),
      (vn = f(`$ZodKSUID`, (e, t) => {
        ((t.pattern ??= Ye), sn.init(e, t));
      })),
      (yn = f(`$ZodISODateTime`, (e, t) => {
        ((t.pattern ??= We(t)), sn.init(e, t));
      })),
      (bn = f(`$ZodISODate`, (e, t) => {
        ((t.pattern ??= dt), sn.init(e, t));
      })),
      (xn = f(`$ZodISOTime`, (e, t) => {
        ((t.pattern ??= Ue(t)), sn.init(e, t));
      })),
      (Sn = f(`$ZodISODuration`, (e, t) => {
        ((t.pattern ??= Ze), sn.init(e, t));
      })),
      (Cn = f(`$ZodIPv4`, (e, t) => {
        ((t.pattern ??= nt), sn.init(e, t), (e._zod.bag.format = `ipv4`));
      })),
      (wn = f(`$ZodIPv6`, (e, t) => {
        ((t.pattern ??= rt),
          sn.init(e, t),
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
      (Tn = f(`$ZodCIDRv4`, (e, t) => {
        ((t.pattern ??= it), sn.init(e, t));
      })),
      (En = f(`$ZodCIDRv6`, (e, t) => {
        ((t.pattern ??= at),
          sn.init(e, t),
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
      (Dn = f(`$ZodBase64`, (e, t) => {
        ((t.pattern ??= ot),
          sn.init(e, t),
          (e._zod.bag.contentEncoding = `base64`),
          (e._zod.check = (n) => {
            Ht(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (On = f(`$ZodBase64URL`, (e, t) => {
        ((t.pattern ??= st),
          sn.init(e, t),
          (e._zod.bag.contentEncoding = `base64url`),
          (e._zod.check = (n) => {
            Ut(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (kn = f(`$ZodE164`, (e, t) => {
        ((t.pattern ??= lt), sn.init(e, t));
      })),
      (An = f(`$ZodJWT`, (e, t) => {
        (sn.init(e, t),
          (e._zod.check = (n) => {
            Wt(n.value, t.alg) ||
              n.issues.push({
                code: `invalid_format`,
                format: `jwt`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (jn = f(`$ZodNumber`, (e, t) => {
        (an.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? mt),
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
      (Mn = f(`$ZodNumberFormat`, (e, t) => {
        (Tt.init(e, t), jn.init(e, t));
      })),
      (Nn = f(`$ZodBoolean`, (e, t) => {
        (an.init(e, t),
          (e._zod.pattern = ht),
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
      (Pn = f(`$ZodNull`, (e, t) => {
        (an.init(e, t),
          (e._zod.pattern = gt),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              r === null || t.issues.push({ expected: `null`, code: `invalid_type`, input: r, inst: e }),
              t
            );
          }));
      })),
      (Fn = f(`$ZodUnknown`, (e, t) => {
        (an.init(e, t), (e._zod.parse = (e) => e));
      })),
      (In = f(`$ZodNever`, (e, t) => {
        (an.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: `never`, code: `invalid_type`, input: t.value, inst: e }),
            t
          )));
      })),
      (Ln = f(`$ZodArray`, (e, t) => {
        (an.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (n.issues.push({ expected: `array`, code: `invalid_type`, input: i, inst: e }), n);
            n.value = Array(i.length);
            let a = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                s = t.element._zod.run({ value: o, issues: [] }, r);
              s instanceof Promise ? a.push(s.then((t) => Gt(t, n, e))) : Gt(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Rn = f(`$ZodObject`, (e, t) => {
        if ((an.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let n = { ...e };
              return (Object.defineProperty(t, "shape", { value: n }), n);
            },
          });
        }
        let n = x(() => qt(t));
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
        let r = te,
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
            a instanceof Promise ? c.push(a.then((n) => Kt(n, t, e, s, r, i))) : Kt(a, t, e, s, r, i);
          }
          return i ? Jt(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
        };
      })),
      (zn = f(`$ZodObjectJIT`, (e, t) => {
        Rn.init(e, t);
        let n = e._zod.parse,
          r = x(() => qt(t)),
          i = (e) => {
            let t = new Rt([`shape`, `payload`, `ctx`]),
              n = r.value,
              i = (e) => {
                let t = D(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
              };
            t.write(`const input = payload.value;`);
            let a = Object.create(null),
              o = 0;
            for (let e of n.keys) a[e] = `key_${o++}`;
            t.write(`const newResult = {};`);
            for (let r of n.keys) {
              let n = a[r],
                o = D(r),
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
          o = te,
          s = !_.jitless,
          c = s && be.value,
          l = t.catchall,
          u;
        e._zod.parse = (d, f) => {
          u ??= r.value;
          let p = d.value;
          return o(p)
            ? s && c && f?.async === !1 && f.jitless !== !0
              ? ((a ||= i(t.shape)), (d = a(d, f)), l ? Jt([], p, d, f, u, e) : d)
              : n(d, f)
            : (d.issues.push({ expected: `object`, code: `invalid_type`, input: p, inst: e }), d);
        };
      })),
      (Bn = f(`$ZodUnion`, (e, t) => {
        (an.init(e, t),
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
          return a ? Promise.all(o).then((t) => Yt(t, r, e, i)) : Yt(o, r, e, i);
        };
      })),
      (Vn = f(`$ZodDiscriminatedUnion`, (e, t) => {
        ((t.inclusive = !1), Bn.init(e, t));
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
          if (!te(o))
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
      (Hn = f(`$ZodIntersection`, (e, t) => {
        (an.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => Zt(e, t, n))
              : Zt(e, i, a);
          }));
      })),
      (Un = f(`$ZodRecord`, (e, t) => {
        (an.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!ne(i))
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
                if (typeof o == `string` && mt.test(o) && s.issues.length) {
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
      (Wn = f(`$ZodEnum`, (e, t) => {
        an.init(e, t);
        let n = y(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => N.has(typeof e))
              .map((e) => (typeof e == `string` ? k(e) : e.toString()))
              .join(`|`)})$`,
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (r.has(a) || t.issues.push({ code: `invalid_value`, values: n, input: a, inst: e }), t);
          }));
      })),
      (Gn = f(`$ZodLiteral`, (e, t) => {
        if ((an.init(e, t), t.values.length === 0))
          throw Error(`Cannot create literal schema with no valid values`);
        let n = new Set(t.values);
        ((e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => (typeof e == `string` ? k(e) : e ? k(e.toString()) : String(e))).join(`|`)})$`,
          )),
          (e._zod.parse = (r, i) => {
            let a = r.value;
            return (
              n.has(a) || r.issues.push({ code: `invalid_value`, values: t.values, input: a, inst: e }),
              r
            );
          }));
      })),
      (Kn = f(`$ZodTransform`, (e, t) => {
        (an.init(e, t),
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
      (qn = f(`$ZodOptional`, (e, t) => {
        (an.init(e, t),
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
              return i instanceof Promise ? i.then((e) => Qt(e, r)) : Qt(i, r);
            }
            return e.value === void 0 ? e : t.innerType._zod.run(e, n);
          }));
      })),
      (Jn = f(`$ZodExactOptional`, (e, t) => {
        (qn.init(e, t),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `pattern`, () => t.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
      })),
      (Yn = f(`$ZodNullable`, (e, t) => {
        (an.init(e, t),
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
      (Xn = f(`$ZodDefault`, (e, t) => {
        (an.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            if (e.value === void 0) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => $t(e, t)) : $t(r, t);
          }));
      })),
      (Zn = f(`$ZodPrefault`, (e, t) => {
        (an.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            n.direction === `backward` || (e.value === void 0 && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      })),
      (Qn = f(`$ZodNonOptional`, (e, t) => {
        (an.init(e, t),
          T(e._zod, `values`, () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => en(t, e)) : en(i, e);
          }));
      })),
      ($n = f(`$ZodCatch`, (e, t) => {
        (an.init(e, t),
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
      (er = f(`$ZodPipe`, (e, t) => {
        (an.init(e, t),
          T(e._zod, `values`, () => t.in._zod.values),
          T(e._zod, `optin`, () => t.in._zod.optin),
          T(e._zod, `optout`, () => t.out._zod.optout),
          T(e._zod, `propValues`, () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => tn(e, t.in, n)) : tn(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => tn(e, t.out, n)) : tn(r, t.out, n);
          }));
      })),
      (tr = f(`$ZodReadonly`, (e, t) => {
        (an.init(e, t),
          T(e._zod, `propValues`, () => t.innerType._zod.propValues),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `optin`, () => t.innerType?._zod?.optin),
          T(e._zod, `optout`, () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(nn) : nn(r);
          }));
      })),
      (nr = f(`$ZodCustom`, (e, t) => {
        (bt.init(e, t),
          an.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => rn(t, n, r, e));
            rn(i, n, r, e);
          }));
      })));
  });
function ir() {
  return new or();
}
var ar,
  or,
  sr,
  cr = o(() => {
    ((or = class {
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
      (ar = globalThis).__zod_globalRegistry ?? (ar.__zod_globalRegistry = ir()),
      (sr = globalThis.__zod_globalRegistry));
  });
function lr(e, t) {
  return new e({ type: `string`, ...j(t) });
}
function ur(e, t) {
  return new e({ type: `string`, format: `email`, check: `string_format`, abort: !1, ...j(t) });
}
function dr(e, t) {
  return new e({ type: `string`, format: `guid`, check: `string_format`, abort: !1, ...j(t) });
}
function fr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, ...j(t) });
}
function pr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v4`, ...j(t) });
}
function mr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v6`, ...j(t) });
}
function hr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, version: `v7`, ...j(t) });
}
function gr(e, t) {
  return new e({ type: `string`, format: `url`, check: `string_format`, abort: !1, ...j(t) });
}
function _r(e, t) {
  return new e({ type: `string`, format: `emoji`, check: `string_format`, abort: !1, ...j(t) });
}
function vr(e, t) {
  return new e({ type: `string`, format: `nanoid`, check: `string_format`, abort: !1, ...j(t) });
}
function yr(e, t) {
  return new e({ type: `string`, format: `cuid`, check: `string_format`, abort: !1, ...j(t) });
}
function br(e, t) {
  return new e({ type: `string`, format: `cuid2`, check: `string_format`, abort: !1, ...j(t) });
}
function xr(e, t) {
  return new e({ type: `string`, format: `ulid`, check: `string_format`, abort: !1, ...j(t) });
}
function Sr(e, t) {
  return new e({ type: `string`, format: `xid`, check: `string_format`, abort: !1, ...j(t) });
}
function Cr(e, t) {
  return new e({ type: `string`, format: `ksuid`, check: `string_format`, abort: !1, ...j(t) });
}
function wr(e, t) {
  return new e({ type: `string`, format: `ipv4`, check: `string_format`, abort: !1, ...j(t) });
}
function Tr(e, t) {
  return new e({ type: `string`, format: `ipv6`, check: `string_format`, abort: !1, ...j(t) });
}
function Er(e, t) {
  return new e({ type: `string`, format: `cidrv4`, check: `string_format`, abort: !1, ...j(t) });
}
function Dr(e, t) {
  return new e({ type: `string`, format: `cidrv6`, check: `string_format`, abort: !1, ...j(t) });
}
function Or(e, t) {
  return new e({ type: `string`, format: `base64`, check: `string_format`, abort: !1, ...j(t) });
}
function kr(e, t) {
  return new e({ type: `string`, format: `base64url`, check: `string_format`, abort: !1, ...j(t) });
}
function Ar(e, t) {
  return new e({ type: `string`, format: `e164`, check: `string_format`, abort: !1, ...j(t) });
}
function jr(e, t) {
  return new e({ type: `string`, format: `jwt`, check: `string_format`, abort: !1, ...j(t) });
}
function Mr(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...j(t),
  });
}
function Nr(e, t) {
  return new e({ type: `string`, format: `date`, check: `string_format`, ...j(t) });
}
function Pr(e, t) {
  return new e({ type: `string`, format: `time`, check: `string_format`, precision: null, ...j(t) });
}
function Fr(e, t) {
  return new e({ type: `string`, format: `duration`, check: `string_format`, ...j(t) });
}
function Ir(e, t) {
  return new e({ type: `number`, checks: [], ...j(t) });
}
function Lr(e, t) {
  return new e({ type: `number`, check: `number_format`, abort: !1, format: `safeint`, ...j(t) });
}
function Rr(e, t) {
  return new e({ type: `boolean`, ...j(t) });
}
function zr(e, t) {
  return new e({ type: `null`, ...j(t) });
}
function Br(e) {
  return new e({ type: `unknown` });
}
function Vr(e, t) {
  return new e({ type: `never`, ...j(t) });
}
function Hr(e, t) {
  return new St({ check: `less_than`, ...j(t), value: e, inclusive: !1 });
}
function Ur(e, t) {
  return new St({ check: `less_than`, ...j(t), value: e, inclusive: !0 });
}
function Wr(e, t) {
  return new Ct({ check: `greater_than`, ...j(t), value: e, inclusive: !1 });
}
function Gr(e, t) {
  return new Ct({ check: `greater_than`, ...j(t), value: e, inclusive: !0 });
}
function Kr(e, t) {
  return new wt({ check: `multiple_of`, ...j(t), value: e });
}
function qr(e, t) {
  return new Et({ check: `max_length`, ...j(t), maximum: e });
}
function Jr(e, t) {
  return new Dt({ check: `min_length`, ...j(t), minimum: e });
}
function Yr(e, t) {
  return new Ot({ check: `length_equals`, ...j(t), length: e });
}
function Xr(e, t) {
  return new At({ check: `string_format`, format: `regex`, ...j(t), pattern: e });
}
function Zr(e) {
  return new jt({ check: `string_format`, format: `lowercase`, ...j(e) });
}
function Qr(e) {
  return new Mt({ check: `string_format`, format: `uppercase`, ...j(e) });
}
function $r(e, t) {
  return new Nt({ check: `string_format`, format: `includes`, ...j(t), includes: e });
}
function ei(e, t) {
  return new Pt({ check: `string_format`, format: `starts_with`, ...j(t), prefix: e });
}
function ti(e, t) {
  return new Ft({ check: `string_format`, format: `ends_with`, ...j(t), suffix: e });
}
function ni(e) {
  return new It({ check: `overwrite`, tx: e });
}
function ri(e) {
  return ni((t) => t.normalize(e));
}
function ii() {
  return ni((e) => e.trim());
}
function ai() {
  return ni((e) => e.toLowerCase());
}
function oi() {
  return ni((e) => e.toUpperCase());
}
function si() {
  return ni((e) => O(e));
}
function ci(e, t, n) {
  return new e({ type: `array`, element: t, ...j(n) });
}
function li(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...j(n) });
}
function ui(e, t) {
  let n = di(
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
function di(e, t) {
  let n = new bt({ check: `custom`, ...j(t) });
  return ((n._zod.check = e), n);
}
var fi = o(() => {
  (Lt(), Se());
});
function pi(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? sr,
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
function mi(e, t, n = { path: [], schemaPath: [] }) {
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
    a && ((o.ref ||= a), mi(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` && _i(e) && (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function hi(e, t) {
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
function gi(e, t) {
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
          jsonSchema: { input: yi(t, `input`, e.processors), output: yi(t, `output`, e.processors) },
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
function _i(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return _i(r.element, n);
  if (r.type === `set`) return _i(r.valueType, n);
  if (r.type === `lazy`) return _i(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault`
  )
    return _i(r.innerType, n);
  if (r.type === `intersection`) return _i(r.left, n) || _i(r.right, n);
  if (r.type === `record` || r.type === `map`) return _i(r.keyType, n) || _i(r.valueType, n);
  if (r.type === `pipe`) return e._zod.traits.has(`$ZodCodec`) ? !0 : _i(r.in, n) || _i(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (_i(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (_i(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (_i(e, n)) return !0;
    return !!(r.rest && _i(r.rest, n));
  }
  return !1;
}
var vi,
  yi,
  bi = o(() => {
    (cr(),
      (vi =
        (e, t = {}) =>
        (n) => {
          let r = pi({ ...n, processors: t });
          return (mi(e, r), hi(r, e), gi(r, e));
        }),
      (yi =
        (e, t, n = {}) =>
        (r) => {
          let { libraryOptions: i, target: a } = r ?? {},
            o = pi({ ...(i ?? {}), target: a, io: t, processors: n });
          return (mi(e, o), hi(o, e), gi(o, e));
        }));
  }),
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
  Mi,
  Ni,
  L,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi = o(() => {
    (bi(),
      Se(),
      (xi = { guid: `uuid`, url: `uri`, datetime: `date-time`, json_string: `json-string`, regex: `` }),
      (Si = (e, t, n, r) => {
        let i = n;
        i.type = `string`;
        let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
        if (
          (typeof a == `number` && (i.minLength = a),
          typeof o == `number` && (i.maxLength = o),
          s && ((i.format = xi[s] ?? s), i.format === `` && delete i.format, s === `time` && delete i.format),
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
      (Ci = (e, t, n, r) => {
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
      (wi = (e, t, n, r) => {
        n.type = `boolean`;
      }),
      (Ti = (e, t, n, r) => {
        t.target === `openapi-3.0`
          ? ((n.type = `string`), (n.nullable = !0), (n.enum = [null]))
          : (n.type = `null`);
      }),
      (Ei = (e, t, n, r) => {
        n.not = {};
      }),
      (Di = (e, t, n, r) => {}),
      (Oi = (e, t, n, r) => {
        let i = e._zod.def,
          a = y(i.entries);
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          (n.enum = a));
      }),
      (ki = (e, t, n, r) => {
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
      (Ai = (e, t, n, r) => {
        if (t.unrepresentable === `throw`) throw Error(`Custom types cannot be represented in JSON Schema`);
      }),
      (ji = (e, t, n, r) => {
        if (t.unrepresentable === `throw`) throw Error(`Transforms cannot be represented in JSON Schema`);
      }),
      (Mi = (e, t, n, r) => {
        let i = n,
          a = e._zod.def,
          { minimum: o, maximum: s } = e._zod.bag;
        (typeof o == `number` && (i.minItems = o),
          typeof s == `number` && (i.maxItems = s),
          (i.type = `array`),
          (i.items = mi(a.element, t, { ...r, path: [...r.path, `items`] })));
      }),
      (Ni = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        ((i.type = `object`), (i.properties = {}));
        let o = a.shape;
        for (let e in o) i.properties[e] = mi(o[e], t, { ...r, path: [...r.path, `properties`, e] });
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
                (i.additionalProperties = mi(a.catchall, t, {
                  ...r,
                  path: [...r.path, `additionalProperties`],
                }))
              : t.io === `output` && (i.additionalProperties = !1));
      }),
      (L = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.inclusive === !1,
          o = i.options.map((e, n) => mi(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }));
        a ? (n.oneOf = o) : (n.anyOf = o);
      }),
      (Pi = (e, t, n, r) => {
        let i = e._zod.def,
          a = mi(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
          o = mi(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
          s = (e) => `allOf` in e && Object.keys(e).length === 1;
        n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
      }),
      (Fi = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        i.type = `object`;
        let o = a.keyType,
          s = o._zod.bag?.patterns;
        if (a.mode === `loose` && s && s.size > 0) {
          let e = mi(a.valueType, t, { ...r, path: [...r.path, `patternProperties`, `*`] });
          i.patternProperties = {};
          for (let t of s) i.patternProperties[t.source] = e;
        } else
          ((t.target === `draft-07` || t.target === `draft-2020-12`) &&
            (i.propertyNames = mi(a.keyType, t, { ...r, path: [...r.path, `propertyNames`] })),
            (i.additionalProperties = mi(a.valueType, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            })));
        let c = o._zod.values;
        if (c) {
          let e = [...c].filter((e) => typeof e == `string` || typeof e == `number`);
          e.length > 0 && (i.required = e);
        }
      }),
      (Ii = (e, t, n, r) => {
        let i = e._zod.def,
          a = mi(i.innerType, t, r),
          o = t.seen.get(e);
        t.target === `openapi-3.0`
          ? ((o.ref = i.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: `null` }]);
      }),
      (Li = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }),
      (Ri = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (zi = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          t.io === `input` && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Bi = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
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
      (Vi = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.in._zod.traits.has(`$ZodTransform`),
          o = t.io === `input` ? (a ? i.out : i.in) : i.out;
        mi(o, t, r);
        let s = t.seen.get(e);
        s.ref = o;
      }),
      (Hi = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.readOnly = !0));
      }),
      (Ui = (e, t, n, r) => {
        let i = e._zod.def;
        mi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }));
  }),
  Gi = o(() => {
    (v(), Be(), De(), rr(), Lt(), Vt(), Se(), yt(), cr(), zt(), fi(), bi(), Wi(), bi());
  }),
  Ki = o(() => {
    Gi();
  });
function qi(e) {
  return Mr(Zi, e);
}
function Ji(e) {
  return Nr(Qi, e);
}
function Yi(e) {
  return Pr($i, e);
}
function Xi(e) {
  return Fr(ea, e);
}
var Zi,
  Qi,
  $i,
  ea,
  ta = o(() => {
    (Gi(),
      Vo(),
      (Zi = f(`ZodISODateTime`, (e, t) => {
        (yn.init(e, t), Za.init(e, t));
      })),
      (Qi = f(`ZodISODate`, (e, t) => {
        (bn.init(e, t), Za.init(e, t));
      })),
      ($i = f(`ZodISOTime`, (e, t) => {
        (xn.init(e, t), Za.init(e, t));
      })),
      (ea = f(`ZodISODuration`, (e, t) => {
        (Sn.init(e, t), Za.init(e, t));
      })));
  }),
  na,
  ra,
  ia = o(() => {
    (Gi(),
      Se(),
      (na = (e, t) => {
        (Ee.init(e, t),
          (e.name = `ZodError`),
          Object.defineProperties(e, {
            format: { value: (t) => we(e, t) },
            flatten: { value: (t) => Ce(e, t) },
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
      (ra = f(`ZodError`, na, { Parent: Error })));
  }),
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
  ha,
  ga,
  _a = o(() => {
    (Gi(),
      ia(),
      (aa = Oe(ra)),
      (oa = F(ra)),
      (sa = ke(ra)),
      (ca = Ae(ra)),
      (la = Me(ra)),
      (ua = Ne(ra)),
      (da = Pe(ra)),
      (fa = Fe(ra)),
      (pa = Ie(ra)),
      (ma = Le(ra)),
      (ha = Re(ra)),
      (ga = ze(ra)));
  });
function va(e, t, n) {
  let r = Object.getPrototypeOf(e),
    i = qa.get(r);
  if ((i || ((i = new Set()), qa.set(r, i)), !i.has(t))) {
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
function ya(e) {
  return lr(Xa, e);
}
function ba(e) {
  return Ir(go, e);
}
function xa(e) {
  return Lr(_o, e);
}
function Sa(e) {
  return Rr(vo, e);
}
function Ca(e) {
  return zr(yo, e);
}
function wa() {
  return Br(bo);
}
function Ta(e) {
  return Vr(xo, e);
}
function Ea(e, t) {
  return ci(So, e, t);
}
function Da(e, t) {
  let n = { type: `object`, shape: e ?? {}, ...j(t) };
  return new Co(n);
}
function Oa(e, t) {
  return new Co({ type: `object`, shape: e, catchall: Ta(), ...j(t) });
}
function ka(e, t) {
  return new wo({ type: `union`, options: e, ...j(t) });
}
function Aa(e, t, n) {
  return new To({ type: `union`, options: t, discriminator: e, ...j(n) });
}
function ja(e, t) {
  return new Eo({ type: `intersection`, left: e, right: t });
}
function Ma(e, t, n) {
  return !t || !t._zod
    ? new Do({ type: `record`, keyType: ya(), valueType: e, ...j(t) })
    : new Do({ type: `record`, keyType: e, valueType: t, ...j(n) });
}
function Na(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new Oo({ type: `enum`, entries: n, ...j(t) });
}
function Pa(e, t) {
  return new ko({ type: `literal`, values: Array.isArray(e) ? e : [e], ...j(t) });
}
function Fa(e) {
  return new Ao({ type: `transform`, transform: e });
}
function Ia(e) {
  return new jo({ type: `optional`, innerType: e });
}
function La(e) {
  return new Mo({ type: `optional`, innerType: e });
}
function Ra(e) {
  return new No({ type: `nullable`, innerType: e });
}
function za(e, t) {
  return new Po({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : re(t);
    },
  });
}
function Ba(e, t) {
  return new Fo({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : re(t);
    },
  });
}
function Va(e, t) {
  return new Io({ type: `nonoptional`, innerType: e, ...j(t) });
}
function Ha(e, t) {
  return new Lo({ type: `catch`, innerType: e, catchValue: typeof t == `function` ? t : () => t });
}
function Ua(e, t) {
  return new Ro({ type: `pipe`, in: e, out: t });
}
function Wa(e) {
  return new zo({ type: `readonly`, innerType: e });
}
function Ga(e, t = {}) {
  return li(Bo, e, t);
}
function Ka(e, t) {
  return ui(e, t);
}
var qa,
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
  uo,
  fo,
  R,
  z,
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
  Bo,
  Vo = o(() => {
    (Gi(),
      Wi(),
      bi(),
      Ki(),
      ta(),
      _a(),
      (qa = new WeakMap()),
      (Ja = f(
        `ZodType`,
        (e, t) => (
          an.init(e, t),
          Object.assign(e[`~standard`], { jsonSchema: { input: yi(e, `input`), output: yi(e, `output`) } }),
          (e.toJSONSchema = vi(e, {})),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, "_def", { value: t }),
          (e.parse = (t, n) => aa(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => sa(e, t, n)),
          (e.parseAsync = async (t, n) => oa(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => ca(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => la(e, t, n)),
          (e.decode = (t, n) => ua(e, t, n)),
          (e.encodeAsync = async (t, n) => da(e, t, n)),
          (e.decodeAsync = async (t, n) => fa(e, t, n)),
          (e.safeEncode = (t, n) => pa(e, t, n)),
          (e.safeDecode = (t, n) => ma(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => ha(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => ga(e, t, n)),
          va(e, `ZodType`, {
            check(...e) {
              let t = this.def;
              return this.clone(
                ee(t, {
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
              return A(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return (e.add(this, t), this);
            },
            refine(e, t) {
              return this.check(Ga(e, t));
            },
            superRefine(e, t) {
              return this.check(Ka(e, t));
            },
            overwrite(e) {
              return this.check(ni(e));
            },
            optional() {
              return Ia(this);
            },
            exactOptional() {
              return La(this);
            },
            nullable() {
              return Ra(this);
            },
            nullish() {
              return Ia(Ra(this));
            },
            nonoptional(e) {
              return Va(this, e);
            },
            array() {
              return Ea(this);
            },
            or(e) {
              return ka([this, e]);
            },
            and(e) {
              return ja(this, e);
            },
            transform(e) {
              return Ua(this, Fa(e));
            },
            default(e) {
              return za(this, e);
            },
            prefault(e) {
              return Ba(this, e);
            },
            catch(e) {
              return Ha(this, e);
            },
            pipe(e) {
              return Ua(this, e);
            },
            readonly() {
              return Wa(this);
            },
            describe(e) {
              let t = this.clone();
              return (sr.add(t, { description: e }), t);
            },
            meta(...e) {
              if (e.length === 0) return sr.get(this);
              let t = this.clone();
              return (sr.add(t, e[0]), t);
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
              return sr.get(e)?.description;
            },
            configurable: !0,
          }),
          e
        ),
      )),
      (Ya = f(`_ZodString`, (e, t) => {
        (on.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Si(e, t, n, r)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          va(e, `_ZodString`, {
            regex(...e) {
              return this.check(Xr(...e));
            },
            includes(...e) {
              return this.check($r(...e));
            },
            startsWith(...e) {
              return this.check(ei(...e));
            },
            endsWith(...e) {
              return this.check(ti(...e));
            },
            min(...e) {
              return this.check(Jr(...e));
            },
            max(...e) {
              return this.check(qr(...e));
            },
            length(...e) {
              return this.check(Yr(...e));
            },
            nonempty(...e) {
              return this.check(Jr(1, ...e));
            },
            lowercase(e) {
              return this.check(Zr(e));
            },
            uppercase(e) {
              return this.check(Qr(e));
            },
            trim() {
              return this.check(ii());
            },
            normalize(...e) {
              return this.check(ri(...e));
            },
            toLowerCase() {
              return this.check(ai());
            },
            toUpperCase() {
              return this.check(oi());
            },
            slugify() {
              return this.check(si());
            },
          }));
      })),
      (Xa = f(`ZodString`, (e, t) => {
        (on.init(e, t),
          Ya.init(e, t),
          (e.email = (t) => e.check(ur(Qa, t))),
          (e.url = (t) => e.check(gr(to, t))),
          (e.jwt = (t) => e.check(jr(ho, t))),
          (e.emoji = (t) => e.check(_r(no, t))),
          (e.guid = (t) => e.check(dr($a, t))),
          (e.uuid = (t) => e.check(fr(eo, t))),
          (e.uuidv4 = (t) => e.check(pr(eo, t))),
          (e.uuidv6 = (t) => e.check(mr(eo, t))),
          (e.uuidv7 = (t) => e.check(hr(eo, t))),
          (e.nanoid = (t) => e.check(vr(ro, t))),
          (e.guid = (t) => e.check(dr($a, t))),
          (e.cuid = (t) => e.check(yr(io, t))),
          (e.cuid2 = (t) => e.check(br(ao, t))),
          (e.ulid = (t) => e.check(xr(oo, t))),
          (e.base64 = (t) => e.check(Or(z, t))),
          (e.base64url = (t) => e.check(kr(po, t))),
          (e.xid = (t) => e.check(Sr(so, t))),
          (e.ksuid = (t) => e.check(Cr(co, t))),
          (e.ipv4 = (t) => e.check(wr(lo, t))),
          (e.ipv6 = (t) => e.check(Tr(uo, t))),
          (e.cidrv4 = (t) => e.check(Er(fo, t))),
          (e.cidrv6 = (t) => e.check(Dr(R, t))),
          (e.e164 = (t) => e.check(Ar(mo, t))),
          (e.datetime = (t) => e.check(qi(t))),
          (e.date = (t) => e.check(Ji(t))),
          (e.time = (t) => e.check(Yi(t))),
          (e.duration = (t) => e.check(Xi(t))));
      })),
      (Za = f(`ZodStringFormat`, (e, t) => {
        (sn.init(e, t), Ya.init(e, t));
      })),
      (Qa = f(`ZodEmail`, (e, t) => {
        (un.init(e, t), Za.init(e, t));
      })),
      ($a = f(`ZodGUID`, (e, t) => {
        (cn.init(e, t), Za.init(e, t));
      })),
      (eo = f(`ZodUUID`, (e, t) => {
        (ln.init(e, t), Za.init(e, t));
      })),
      (to = f(`ZodURL`, (e, t) => {
        (dn.init(e, t), Za.init(e, t));
      })),
      (no = f(`ZodEmoji`, (e, t) => {
        (fn.init(e, t), Za.init(e, t));
      })),
      (ro = f(`ZodNanoID`, (e, t) => {
        (pn.init(e, t), Za.init(e, t));
      })),
      (io = f(`ZodCUID`, (e, t) => {
        (mn.init(e, t), Za.init(e, t));
      })),
      (ao = f(`ZodCUID2`, (e, t) => {
        (hn.init(e, t), Za.init(e, t));
      })),
      (oo = f(`ZodULID`, (e, t) => {
        (gn.init(e, t), Za.init(e, t));
      })),
      (so = f(`ZodXID`, (e, t) => {
        (_n.init(e, t), Za.init(e, t));
      })),
      (co = f(`ZodKSUID`, (e, t) => {
        (vn.init(e, t), Za.init(e, t));
      })),
      (lo = f(`ZodIPv4`, (e, t) => {
        (Cn.init(e, t), Za.init(e, t));
      })),
      (uo = f(`ZodIPv6`, (e, t) => {
        (wn.init(e, t), Za.init(e, t));
      })),
      (fo = f(`ZodCIDRv4`, (e, t) => {
        (Tn.init(e, t), Za.init(e, t));
      })),
      (R = f(`ZodCIDRv6`, (e, t) => {
        (En.init(e, t), Za.init(e, t));
      })),
      (z = f(`ZodBase64`, (e, t) => {
        (Dn.init(e, t), Za.init(e, t));
      })),
      (po = f(`ZodBase64URL`, (e, t) => {
        (On.init(e, t), Za.init(e, t));
      })),
      (mo = f(`ZodE164`, (e, t) => {
        (kn.init(e, t), Za.init(e, t));
      })),
      (ho = f(`ZodJWT`, (e, t) => {
        (An.init(e, t), Za.init(e, t));
      })),
      (go = f(`ZodNumber`, (e, t) => {
        (jn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ci(e, t, n, r)),
          va(e, `ZodNumber`, {
            gt(e, t) {
              return this.check(Wr(e, t));
            },
            gte(e, t) {
              return this.check(Gr(e, t));
            },
            min(e, t) {
              return this.check(Gr(e, t));
            },
            lt(e, t) {
              return this.check(Hr(e, t));
            },
            lte(e, t) {
              return this.check(Ur(e, t));
            },
            max(e, t) {
              return this.check(Ur(e, t));
            },
            int(e) {
              return this.check(xa(e));
            },
            safe(e) {
              return this.check(xa(e));
            },
            positive(e) {
              return this.check(Wr(0, e));
            },
            nonnegative(e) {
              return this.check(Gr(0, e));
            },
            negative(e) {
              return this.check(Hr(0, e));
            },
            nonpositive(e) {
              return this.check(Ur(0, e));
            },
            multipleOf(e, t) {
              return this.check(Kr(e, t));
            },
            step(e, t) {
              return this.check(Kr(e, t));
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
      (_o = f(`ZodNumberFormat`, (e, t) => {
        (Mn.init(e, t), go.init(e, t));
      })),
      (vo = f(`ZodBoolean`, (e, t) => {
        (Nn.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => wi(e, t, n, r)));
      })),
      (yo = f(`ZodNull`, (e, t) => {
        (Pn.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ti(e, t, n, r)));
      })),
      (bo = f(`ZodUnknown`, (e, t) => {
        (Fn.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Di(e, t, n, r)));
      })),
      (xo = f(`ZodNever`, (e, t) => {
        (In.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ei(e, t, n, r)));
      })),
      (So = f(`ZodArray`, (e, t) => {
        (Ln.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Mi(e, t, n, r)),
          (e.element = t.element),
          va(e, `ZodArray`, {
            min(e, t) {
              return this.check(Jr(e, t));
            },
            nonempty(e) {
              return this.check(Jr(1, e));
            },
            max(e, t) {
              return this.check(qr(e, t));
            },
            length(e, t) {
              return this.check(Yr(e, t));
            },
            unwrap() {
              return this.element;
            },
          }));
      })),
      (Co = f(`ZodObject`, (e, t) => {
        (zn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ni(e, t, n, r)),
          T(e, `shape`, () => t.shape),
          va(e, `ZodObject`, {
            keyof() {
              return Na(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: wa() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: wa() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: Ta() });
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
              return ae(this, e);
            },
            omit(e) {
              return oe(this, e);
            },
            partial(...e) {
              return le(jo, this, e[0]);
            },
            required(...e) {
              return ue(Io, this, e[0]);
            },
          }));
      })),
      (wo = f(`ZodUnion`, (e, t) => {
        (Bn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => L(e, t, n, r)),
          (e.options = t.options));
      })),
      (To = f(`ZodDiscriminatedUnion`, (e, t) => {
        (wo.init(e, t), Vn.init(e, t));
      })),
      (Eo = f(`ZodIntersection`, (e, t) => {
        (Hn.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Pi(e, t, n, r)));
      })),
      (Do = f(`ZodRecord`, (e, t) => {
        (Un.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Fi(e, t, n, r)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType));
      })),
      (Oo = f(`ZodEnum`, (e, t) => {
        (Wn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries)));
        let n = new Set(Object.keys(t.entries));
        ((e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new Oo({ ...t, checks: [], ...j(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new Oo({ ...t, checks: [], ...j(r), entries: i });
          }));
      })),
      (ko = f(`ZodLiteral`, (e, t) => {
        (Gn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ki(e, t, n, r)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
              return t.values[0];
            },
          }));
      })),
      (Ao = f(`ZodTransform`, (e, t) => {
        (Kn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ji(e, t, n, r)),
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
      (jo = f(`ZodOptional`, (e, t) => {
        (qn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ui(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Mo = f(`ZodExactOptional`, (e, t) => {
        (Jn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ui(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (No = f(`ZodNullable`, (e, t) => {
        (Yn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ii(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Po = f(`ZodDefault`, (e, t) => {
        (Xn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ri(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap));
      })),
      (Fo = f(`ZodPrefault`, (e, t) => {
        (Zn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => zi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Io = f(`ZodNonOptional`, (e, t) => {
        (Qn.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Li(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Lo = f(`ZodCatch`, (e, t) => {
        ($n.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Bi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap));
      })),
      (Ro = f(`ZodPipe`, (e, t) => {
        (er.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.in = t.in),
          (e.out = t.out));
      })),
      (zo = f(`ZodReadonly`, (e, t) => {
        (tr.init(e, t),
          Ja.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Hi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Bo = f(`ZodCustom`, (e, t) => {
        (nr.init(e, t), Ja.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ai(e, t, n, r)));
      })));
  }),
  Ho = o(() => {
    Gi();
  }),
  Uo = o(() => {
    (Gi(), Vo(), Ki(), ia(), _a(), Ho(), Wi(), cr(), Ki(), ta(), Vo(), Se());
  }),
  Wo = o(() => {
    (Uo(), Uo());
  });
function Go(e) {
  let t = es.safeParse(e);
  return t.success ? t.data : void 0;
}
function Ko(e) {
  if (typeof e == `object` && e)
    try {
      let t = Object.getPrototypeOf(e);
      if (t !== Object.prototype && t != null) return;
      let n = Object.getOwnPropertyDescriptors(e),
        r = Reflect.ownKeys(n);
      if (
        r.length > Yo.maxKeys ||
        r.some((e) => !Zo.safeParse(e).success) ||
        Object.values(n).some((e) => !e.enumerable || !Object.hasOwn(e, `value`))
      )
        return;
      let i = $o.safeParse(Object.fromEntries(Object.entries(n).map(([e, t]) => [e, t.value])));
      return !i.success || !Jo(JSON.stringify(i.data)) ? void 0 : i.data;
    } catch {
      return;
    }
}
function qo(e) {
  if (e != null && Jo(e))
    try {
      return Ko(JSON.parse(e));
    } catch {
      return;
    }
}
function Jo(e) {
  return e.length <= Yo.maxSerializedBytes && new TextEncoder().encode(e).byteLength <= Yo.maxSerializedBytes;
}
var Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts = o(() => {
    (Wo(),
      (Yo = { maxSerializedBytes: 2048, maxKeys: 6, maxKeyLength: 64, maxStringValueLength: 256 }),
      (Xo = ya().regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)),
      (Zo = ya()
        .max(Yo.maxKeyLength)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/)
        .refine((e) => e !== `__proto__` && e !== `constructor` && e !== `prototype`)),
      (Qo = ka([Xo.max(Yo.maxStringValueLength), ba(), Sa(), Ca()])),
      ($o = Ma(Zo, Qo)),
      (es = Xo.max(128).refine((e) => e.trim().length > 0)));
  });
function ns(e) {
  return e.length > 0;
}
function rs(e) {
  return e.length;
}
function is(e, t) {
  return t.map((t) => {
    let n = e.getPropertyValue(t).trim();
    return { property: t, value: n, previousValue: n };
  });
}
function as(e, t) {
  let n = new Map(t.map((e) => [e.property, e]));
  return e.map((e) => {
    let t = n.get(e.property);
    return t == null ? e : { ...e, previousValue: t.previousValue, value: t.value };
  });
}
function os(e) {
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Is)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ||
    Array.from(e.children).some((e) => (e.textContent?.replace(/\s+/g, ` `).trim().length ?? 0) > 0)
    ? null
    : t;
}
function ss(e) {
  let t = os(e);
  if (t != null) return { value: t, previousValue: t };
}
function cs(e) {
  return e.map((e) => ({ property: e.property }));
}
function ls(e, t) {
  switch (e.mode) {
    case `create`:
      return t.mode === `create`;
    case `edit`:
      return t.mode === `edit` && e.commentId === t.commentId;
    case `design`:
      return t.mode === `design` && e.groupId === t.groupId;
  }
}
function us(e) {
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
  return o == null || o.length === 0 ? null : { documentId: o, tabId: ms(t) ?? void 0 };
}
function ds(e) {
  return us(e) != null || fs(e) != null;
}
function fs(e) {
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
function ps({ documentTitle: e, pageUrl: t, selectedText: n, visibleText: r }) {
  let i = us(t);
  if (i == null) return;
  let a = hs(e),
    o = hs(n),
    s = hs(r);
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
function ms(e) {
  let t = hs(e.searchParams.get(`tab`));
  if (t != null) return t;
  let n = e.hash.startsWith(`#`) ? e.hash.slice(1) : e.hash;
  return hs(new URLSearchParams(n).get(`tab`)) ?? null;
}
function hs(e) {
  let t = e?.replace(/\s+/g, ` `).trim();
  return t == null || t.length === 0 ? void 0 : t;
}
function gs(e) {
  return e == null || e <= 0 ? 1 : 1 / e;
}
function _s(e, { viewport: t, viewportScale: n, zoomFactor: r = 1 }) {
  let i = gs(n),
    a = Ds(e, r),
    o = t.width * r,
    s = t.height * r,
    c = 16 * i,
    l = zs * i,
    u = Math.min(Rs * i, o - c * 2),
    d = ks(a.x, c, o - u - c),
    f = a.y - l - Bs * i,
    p = a.y + a.height + Bs * i;
  return { x: d, y: f >= c ? f : ks(p, c, s - l - c), width: u, height: l };
}
function vs(e, t = Us) {
  return e.flatMap((e) => xs(e, t)).join(`

`);
}
function ys(e) {
  let t = e.trim(),
    n = Cs(t);
  if (n != null) return n;
  let r = ws(t);
  return r == null ? t : `#${Es(r.red)}${Es(r.green)}${Es(r.blue)}${r.alpha == null ? `` : Es(r.alpha)}`;
}
function bs(e, t) {
  if (e.length < 2) return e;
  let n = 28.5,
    r = t - 16 - Vs / 2,
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
    let i = t.reduce((t, n) => t + e[n].x, 0) / t.length - ((t.length - 1) * Hs) / 2,
      o = i + (t.length - 1) * Hs,
      s = i < n ? n - i : o > r ? r - o : 0;
    t.forEach((t, o) => {
      a[t] = { x: ks(i + o * Hs + s, n, r), y: e[t].y };
    });
  }
  return a;
}
function xs(e, t) {
  let n = e.declarations.filter((e) => e.value.trim() !== e.previousValue.trim());
  return n.length === 0
    ? []
    : [
        [
          `[${t}~="${Ss(e.draftAttribute)}"] {`,
          ...n.map((e) => `  ${e.property}: ${e.value} !important;`),
          `}`,
        ].join(`
`),
      ];
}
function Ss(e) {
  return e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`);
}
function Cs(e) {
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
function ws(e) {
  let t = e.match(/^rgba?\((.*)\)$/i)?.[1];
  if (t == null) return null;
  let [n, r] = t.split(`/`).map((e) => e.trim()),
    i = n.includes(`,`) ? n.split(`,`).map((e) => e.trim()) : n.split(/\s+/),
    a = r ?? i[3],
    o = Number.parseFloat(i[0] ?? ``),
    s = Number.parseFloat(i[1] ?? ``),
    c = Number.parseFloat(i[2] ?? ``);
  return [o, s, c].some(Number.isNaN) ? null : { alpha: a == null ? null : Ts(a), blue: c, green: s, red: o };
}
function Ts(e) {
  return e.endsWith(`%`) ? (Number.parseFloat(e) / 100) * 255 : Number.parseFloat(e) * 255;
}
function Es(e) {
  return Math.round(ks(e, 0, 255))
    .toString(16)
    .padStart(2, `0`)
    .toUpperCase();
}
function Ds(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function Os(e, t) {
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
function ks(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function As(e, t) {
  if (
    e.kind !== t.kind ||
    !(
      e.documentId === t.documentId &&
      e.pageUrl === t.pageUrl &&
      e.title === t.title &&
      e.elementPath === t.elementPath &&
      e.frameUrl === t.frameUrl &&
      e.framePath.length === t.framePath.length &&
      e.framePath.every((e, n) => e === t.framePath[n]) &&
      Os(e.scrollContainers, t.scrollContainers) &&
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
function js(e, t) {
  return e.x >= 0 && e.y >= 0 && e.x < t.width && e.y < t.height;
}
function Ms(e, t, n = 4) {
  return Math.abs(t.x - e.x) >= n || Math.abs(t.y - e.y) >= n;
}
function Ns(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(t.x - e.x),
    height: Math.abs(t.y - e.y),
  };
}
var Ps,
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
  qs,
  Js = o(() => {
    (Wo(),
      ts(),
      (Ps = ya().max(240)),
      (Fs = { BATCH: `batch`, QUICK: `quick` }),
      Fs.BATCH,
      Fs.QUICK,
      (Is = 3),
      (Ls = 2e4),
      (Rs = 240),
      (zs = 72),
      (Bs = 8),
      (Vs = 25),
      (Hs = Vs / 2),
      (Us = `data-codex-browser-design-group`),
      (Ws = `
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
      (Gs = { height: 26, hotspot: { x: 0, y: 26 }, width: 26 }),
      (Ks = Gs.width),
      (qs = { defaultLocale: `en-US`, locale: `en-US`, messages: {} }));
  });
function Ys(e) {
  if (e == null) return null;
  let t = [],
    n = e;
  for (; n !== window;) {
    let e = n.frameElement;
    if (!ec(e)) return null;
    let r = Pc(e);
    if (r == null) return null;
    t.unshift(r);
    let i = e.ownerDocument.defaultView;
    if (i == null) return null;
    n = i;
  }
  return t;
}
function Xs(e) {
  return e === `auto` || e === `scroll` || e === `overlay`;
}
function Zs(e) {
  return Xs(e) || e === `clip` || e === `hidden`;
}
function Qs(e) {
  return e === document.documentElement || e === document.body;
}
function B(e) {
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
function $s(e) {
  if (e.assignedSlot != null) return e.assignedSlot;
  if (e.parentElement != null) return e.parentElement;
  let t = e.getRootNode();
  return zc(t) ? t.host : null;
}
function ec(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n =
      t.ownerDocument?.defaultView?.HTMLIFrameElement ??
      (typeof HTMLIFrameElement > `u` ? null : HTMLIFrameElement);
  return (n != null && e instanceof n) || (t.tagName?.toLowerCase() === `iframe` && `contentWindow` in t);
}
function tc(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function nc(e) {
  if (!ec(e)) return null;
  try {
    let t = e.contentWindow;
    return t?.document == null ? null : t;
  } catch {
    return null;
  }
}
function rc(e, t, n) {
  let r = ic(window, e, t, n);
  return r === Xc ? null : r;
}
function ic(e, t, n, r) {
  let i = e.document.elementFromPoint(t, n);
  if (i == null) return null;
  for (; i.shadowRoot != null;) {
    let e = i.shadowRoot.elementFromPoint(t, n);
    if (!B(e) || e === i) break;
    i = e;
  }
  if (ec(i)) {
    let e = r?.(i, { x: t, y: n });
    if (e !== void 0) return e ?? Xc;
    let a = nc(i);
    if (a != null) {
      let e = i.getBoundingClientRect(),
        o = ic(a, t - e.left, n - e.top, r);
      if (o != null) return o;
    }
  }
  return i;
}
function ac(e = window) {
  let t = [],
    n = [e],
    r = new Set();
  for (; n.length > 0;) {
    let e = n.pop();
    if (e == null || r.has(e)) continue;
    (r.add(e), t.push(e));
    let i = tc(e);
    if (i != null)
      for (let e of Fc(i)) {
        let t = nc(e);
        t != null && n.push(t);
      }
  }
  return t;
}
function oc(e) {
  let t = new Map(),
    n = () => {
      let e = ac(),
        i = new Set(e);
      for (let i of e) {
        let e = tc(i);
        if (e == null) continue;
        let a = t.get(i),
          o = e.documentElement;
        (a?.document !== e || a.documentElement !== o) &&
          (Rc(a?.cleanup), t.set(i, { cleanup: r(e, i, n), document: e, documentElement: o }));
      }
      for (let [e, n] of t) i.has(e) || (Rc(n.cleanup), t.delete(e));
    },
    r = (t, n, r) => {
      let i = e(t, n, r),
        a = (e) => {
          ec(e.target) && r();
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
          Rc(i);
        }
      );
    };
  return (
    n(),
    () => {
      for (let { cleanup: e } of t.values()) Rc(e);
      t.clear();
    }
  );
}
function sc(e, t, n = !1, r) {
  n ? r != null && Ic(r) : Lc(e);
  let i = `html, body, body *, #${t}, #${t} *`,
    a = e.querySelector(`style[${Jc}]`),
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
  return (s.setAttribute(Jc, `true`), (s.textContent = o), (e.head ?? e.documentElement).append(s), s);
}
function cc(e) {
  (Lc(e),
    e.querySelectorAll(`style[${Jc}]`).forEach((e) => {
      e.remove();
    }));
}
function lc() {
  for (let e of ac()) {
    let t = tc(e);
    t != null && cc(t);
  }
}
function uc(e, t, n) {
  let r = new MutationObserver((i) => {
    r.disconnect();
    try {
      let r = i.some((t) => Array.from(t.removedNodes).some((t) => t.contains(e))),
        a = document.documentElement,
        o = e.parentElement !== a;
      if ((o && a.appendChild(e), r || o)) {
        dc(e, n);
        let r = e.shadowRoot?.querySelector(`[data-browser-comment-annotation-selection-cursor]`);
        r != null && sc(document, t, r.hasAttribute(`data-browser-comment-native-text-selection`));
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
function dc(e, t) {
  let n = e.shadowRoot?.querySelector(`[${t}]`);
  return n != null && fc(n, !0);
}
function fc(e, t) {
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
function pc(e) {
  if (typeof e.hidePopover == `function`)
    try {
      e.matches(`:popover-open`) && e.hidePopover();
    } catch {}
}
function mc(e) {
  return e.getAttribute(`aria-label`) || hc(e) || e.tagName.toLowerCase();
}
function hc(e) {
  if (Qs(e)) return e.tagName.toLowerCase();
  let t = (e.innerText || e.textContent || ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function gc(e) {
  let t = hc(e);
  if (t) return t;
  let n = e.closest(`section,article,main,form,nav,aside,header,footer`);
  return B(n) ? hc(n) : null;
}
function _c(e) {
  let t = [],
    n = e,
    r = 0;
  for (; n && r < 4;) {
    let e = n.tagName.toLowerCase();
    if (e === `html` || e === `body`) {
      t.length === 0 && t.unshift(e);
      break;
    }
    (t.unshift(e), (n = $s(n)), (r += 1));
  }
  return t.join(` > `);
}
function vc(e) {
  return Ys(e.ownerDocument.defaultView);
}
function yc(e) {
  let t = window,
    n = document;
  for (let r of e) {
    let e = bc(n, r);
    if (e == null) return null;
    let i = nc(e);
    if (i == null) return null;
    ((t = i), (n = i.document));
  }
  return t;
}
function bc(e, t) {
  let n = xc(e, t);
  return ec(n) ? n : null;
}
function xc(e, t) {
  let n = t.startsWith(Kc) ? t.slice(7).split(qc) : [t],
    r = e;
  for (let [e, t] of n.entries()) {
    let i = r.querySelector(t);
    if (e === n.length - 1) return B(i) ? i : null;
    if (!B(i) || i.shadowRoot == null) return null;
    r = i.shadowRoot;
  }
  return null;
}
function Sc(e, t) {
  let n = t.startsWith(Kc) ? t.slice(7).split(qc) : [t],
    r = [e];
  for (let [e, t] of n.entries()) {
    let i = r.flatMap((e) => Array.from(e.querySelectorAll(t)).filter(B));
    if (e === n.length - 1) return i;
    r = i.flatMap((e) => (e.shadowRoot == null ? [] : [e.shadowRoot]));
  }
  return [];
}
function Cc(e) {
  let t = yc(e);
  return t == null ? null : t.document;
}
function wc(e, { requireUnique: t = !1 } = {}) {
  let n = [],
    r = e,
    i = 0;
  for (; r != null && (t || i < 4);) {
    let a = r.tagName.toLowerCase(),
      o = r.tagName;
    if (r.id) {
      a += `#${Uc(r.id)}`;
      let i = [a, ...n].join(` > `);
      if (!t || Bc(e, i)) return i;
    }
    let s = Array.from(r.classList)
      .filter((e) => /^[a-zA-Z0-9_-]+$/.test(e))
      .slice(0, 2);
    s.length > 0 && (a += `.${s.map(Uc).join(`.`)}`);
    let c = r.parentElement;
    if (c != null) {
      let e = Array.from(c.children).filter((e) => B(e) && e.tagName === o);
      e.length > 1 && (a += `:nth-of-type(${e.indexOf(r) + 1})`);
    }
    n.unshift(a);
    let l = n.join(` > `);
    if (t && Bc(e, l)) return l;
    ((r = c), (i += 1));
  }
  return t || n.length === 0 ? null : n.join(` > `);
}
function Tc(e, { requireUnique: t = !0 } = {}) {
  let n = [],
    r = e;
  for (;;) {
    let e = wc(r, { requireUnique: t });
    if (e == null) return null;
    n.unshift(e);
    let i = r.getRootNode();
    if (i.nodeType === Node.DOCUMENT_NODE) break;
    if (!zc(i)) return null;
    r = i.host;
  }
  return n.length === 1 ? n[0] : `${Kc}${n.join(qc)}`;
}
function Ec(e) {
  let t = e.ownerDocument.defaultView ?? window;
  if (t !== window) return !1;
  let n = e;
  for (; n && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = $s(n);
  }
  return !1;
}
function Dc(e, t) {
  if (typeof e.document.elementFromPoint != `function`) return [];
  let n = e.document.elementFromPoint(t.x, t.y);
  return B(n) ? Oc(n, { includeElement: !0 }) : [];
}
function Oc(e, { includeElement: t = !1 } = {}) {
  let n = jc(e),
    r = [],
    i = t ? e : $s(e);
  for (; i != null && i !== n.document.body && i !== n.document.documentElement;) {
    if (Hc(i, n)) {
      let e = Tc(i);
      e != null && r.push({ selector: e, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop });
    }
    i = $s(i);
  }
  return r;
}
function kc(e, t) {
  let n = 0,
    r = 0;
  for (let i of e.scrollContainers ?? []) {
    let e = xc(t.document, i.selector);
    B(e) && ((n += e.scrollLeft - i.scrollLeft), (r += e.scrollTop - i.scrollTop));
  }
  return { x: n, y: r };
}
function Ac(e, t, n) {
  let r = new Set();
  for (let n of t)
    if (n.scrollContainers != null && yc(n.framePath) === e)
      for (let t of n.scrollContainers) {
        let n = xc(e.document, t.selector);
        n != null && r.add(n);
      }
  for (let e of r) e.addEventListener(`scroll`, n);
  return () => {
    for (let e of r) e.removeEventListener(`scroll`, n);
  };
}
function jc(e) {
  return e.ownerDocument.defaultView ?? window;
}
function Mc(e) {
  if (e === window) return { x: 0, y: 0 };
  let t = e.frameElement;
  if (!ec(t)) return { x: 0, y: 0 };
  let n = t.ownerDocument.defaultView;
  if (n == null) return { x: 0, y: 0 };
  let r = Mc(n),
    i = t.getBoundingClientRect();
  return { x: r.x + i.left, y: r.y + i.top };
}
function Nc(e, t) {
  let n = Mc(e);
  return { x: t.x + n.x, y: t.y + n.y };
}
function Pc(e) {
  return Tc(e);
}
function Fc(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    (ec(n) && t.push(n), B(n) && n.shadowRoot != null && t.push(...Fc(n.shadowRoot)));
  return t;
}
function Ic(e) {
  let t = e.ownerDocument;
  Yc.get(t)?.element !== e && Lc(t);
  let n = e.style.getPropertyValue(`cursor`),
    r = e.style.getPropertyPriority(`cursor`);
  (n !== `none` || r !== `important`) &&
    (Yc.set(t, { element: e, cursor: n, priority: r }), e.style.setProperty(`cursor`, `none`, `important`));
}
function Lc(e) {
  let t = Yc.get(e);
  t != null &&
    (Yc.delete(e),
    t.element.style.getPropertyValue(`cursor`) === `none` &&
      t.element.style.getPropertyPriority(`cursor`) === `important` &&
      t.element.style.setProperty(`cursor`, t.cursor, t.priority));
}
function Rc(e) {
  if (e != null)
    try {
      e();
    } catch {}
}
function zc(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && B(e.host) && e.host.shadowRoot === e;
}
function Bc(e, t) {
  let n = e.getRootNode();
  if (!Vc(n)) return !1;
  let r = n.querySelectorAll(t);
  return r.length === 1 && r[0] === e;
}
function Vc(e) {
  return (
    e.nodeType === Node.DOCUMENT_NODE ||
    (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `querySelectorAll` in e)
  );
}
function Hc(e, t) {
  let n = t.getComputedStyle(e);
  return [n.overflow, n.overflowX, n.overflowY].some(Zs);
}
function Uc(e) {
  return typeof CSS < `u` && typeof CSS.escape == `function`
    ? CSS.escape(e)
    : e.replace(/[^a-zA-Z0-9_-]/g, `\\$&`);
}
function Wc(e, { preventDefault: t = !0 } = {}) {
  (t && e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation?.());
}
var Gc,
  Kc,
  qc,
  Jc,
  Yc,
  Xc,
  Zc = o(() => {
    ((Gc = {
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
      (Kc = `shadow:`),
      (qc = `>>>`),
      (Jc = `data-browser-comment-cursor-style`),
      (Yc = new WeakMap()),
      (Xc = Symbol(`denied-browser-frame-target`)));
  });
function Qc(e) {
  let t = e?.ownerDocument,
    n = e;
  for (; n != null && n.ownerDocument === t;) {
    if (n.hasAttribute(`oai-annotation-container-text`)) return n;
    if (n.hasAttribute(`oai-annotation-container`)) return null;
    n = $s(n);
  }
  return null;
}
function $c(e, t) {
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
    i = $s(i);
  }
}
function el(e, t, n) {
  if (e.primary.anchor.kind === `virtual` || t.anchor.kind === `virtual`)
    return n ? e : { additional: [], primary: t };
  if (!n) return { additional: [], primary: t };
  let r = [e.primary, ...e.additional],
    i = r.findIndex((e) => tl(e, t));
  if (i === -1) return { additional: [...e.additional, t], primary: e.primary };
  let [a, ...o] = r.filter((e, t) => t !== i);
  return a == null ? null : { additional: o, primary: a };
}
function tl(e, t) {
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
function nl(e) {
  let t = e.ownerDocument,
    n = e,
    r = null;
  for (; n?.ownerDocument === t && n !== t.body && n !== t.documentElement;) {
    let e = n.getBoundingClientRect();
    if (e.width > 0 && e.height > 0) {
      if (((r ??= n), rl(n, e))) return n;
      e.width >= il.width && e.height >= il.height && (r = n);
    }
    n = n.parentElement;
  }
  return r;
}
function rl(e, t) {
  let n = e.tagName.toLowerCase();
  return [`a`, `button`, `input`, `textarea`, `select`, `label`, `img`].includes(n) ||
    e.getAttribute(`role`) != null
    ? !0
    : hc(e) != null && t.width >= al.width && t.height >= al.height;
}
var il,
  al,
  ol = o(() => {
    (Zc(), (il = { width: 48, height: 24 }), (al = { width: 24, height: 16 }));
  });
function sl(e, t, n, r, i) {
  return !r && !i
    ? null
    : _l(e, t, n, `text`, r, void 0, (n) => {
        let a = n?.ownerDocument.defaultView;
        if (n == null || a == null || dl(n)) return null;
        if (r && Qc(n) != null) return { element: n, usesTextContainer: !0 };
        let o = Nc(a, { x: 0, y: 0 }),
          s = { x: e - o.x, y: t - o.y };
        if (!i || Qs(n) || (r && $c(n, s) !== void 0)) return null;
        let c = [];
        for (let e = n; e != null; e = $s(e)) {
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
function cl(e, t, n, r, i = `annotation`) {
  let a = !1,
    o =
      i === `annotation` && n
        ? (e, t) => {
            let n = $c(e, t);
            return ((a = n != null), n);
          }
        : void 0,
    s = r == null ? rc(e, t, o) : ul(e, t, r, i, n, o),
    c = s?.ownerDocument.defaultView;
  if (s == null || c == null) return null;
  let l = Nc(c, { x: 0, y: 0 }),
    u = vl(s, { x: e - l.x, y: t - l.y }, i, n);
  return (u != null && a && (u.usesSelectableContainer = !0), u);
}
function ll(e, t, n = `annotation`) {
  let r = e.composedPath().find((e) => B(e) && e.namespaceURI === `http://www.w3.org/1999/xhtml`);
  if (r == null) return null;
  let i = { x: e.clientX, y: e.clientY };
  if (n === `annotation` && t && r.ownerDocument !== document) {
    let e = r.ownerDocument.defaultView;
    if (e == null) return null;
    let a = Nc(e, i),
      o = [],
      s = e;
    for (; s !== window;) {
      let e = s.frameElement;
      if (!ec(e)) return null;
      let t = e.ownerDocument.defaultView;
      if (t == null) return null;
      let n = Nc(t, { x: 0, y: 0 });
      (o.unshift({ frame: e, point: { x: a.x - n.x, y: a.y - n.y } }), (s = t));
    }
    for (let { frame: e, point: r } of o) {
      let i = $c(e, r);
      if (i !== void 0) {
        let e = i == null ? null : vl(i, r, n, t);
        return (e != null && (e.usesSelectableContainer = !0), e);
      }
    }
  }
  return vl(r, i, n, t);
}
function ul(e, t, n, r = `design`, i = !1, a) {
  return _l(e, t, n, r, i, a, (e) => e);
}
function dl(e) {
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
function fl(e, t) {
  let n = rc(e.x, e.y);
  n == null || dl(n) || dc(t, Sl);
}
function pl(e, t, n, r) {
  return gl(n) ? ml(e, t, r) : cl(e.x, e.y, r, t);
}
function ml(e, t, n) {
  let r = t.shadowRoot?.querySelectorAll(`[data-browser-comment-marker]`);
  if (r == null || r.length === 0) return cl(e.x, e.y, n, t);
  let i = Array.from(r, (e) => {
    let t = e.style.pointerEvents;
    return ((e.style.pointerEvents = `none`), t);
  });
  try {
    return cl(e.x, e.y, n, t);
  } finally {
    r.forEach((e, t) => {
      e.style.pointerEvents = i[t] ?? ``;
    });
  }
}
function hl(e, t) {
  return e.composedPath().includes(t) && !yl(e);
}
function gl(e) {
  return e
    .composedPath()
    .some((e) => e instanceof HTMLElement && e.hasAttribute(`data-browser-comment-marker`));
}
function _l(e, t, n, r, i, a, o) {
  let s = n.shadowRoot?.querySelector(`[data-browser-comment-root]`),
    c = a ?? (r === `annotation` && i ? $c : void 0);
  if (
    (r === `text` && i && (c = (e, t) => ($c(e, t) === void 0 ? void 0 : null)), !(s instanceof HTMLElement))
  )
    return o(rc(e, t, c));
  let l = n.shadowRoot?.querySelector(`[${xl}]`),
    u = n.shadowRoot?.querySelector(`[${Sl}]`),
    d = n.style.pointerEvents,
    f = s.style.pointerEvents,
    p = u instanceof HTMLElement ? u.style.pointerEvents : void 0,
    m = l instanceof HTMLElement ? l.style.pointerEvents : void 0;
  ((n.style.pointerEvents = `none`),
    (s.style.pointerEvents = `none`),
    u instanceof HTMLElement && (u.style.pointerEvents = `none`),
    l instanceof HTMLElement && (l.style.pointerEvents = `none`));
  try {
    return o(rc(e, t, c));
  } finally {
    ((n.style.pointerEvents = d),
      (s.style.pointerEvents = f),
      u instanceof HTMLElement && (u.style.pointerEvents = p ?? ``),
      l instanceof HTMLElement && (l.style.pointerEvents = m ?? ``));
  }
}
function vl(e, t, n, r) {
  if (dl(e)) return null;
  let i = n === `annotation` && r ? $c(e, t) : void 0,
    a;
  return (
    (a = Qs(e) ? (n === `annotation` && r && Qc(e) != null ? null : e) : i === void 0 ? nl(e) : i),
    a == null || dl(a) ? null : { element: a, usesSelectableContainer: i != null }
  );
}
function yl(e) {
  return e.composedPath().some((e) => e instanceof HTMLElement && e.hasAttribute(xl));
}
var bl,
  xl,
  Sl,
  Cl = o(() => {
    (ol(),
      Zc(),
      (bl = `codex-browser-sidebar-comments-root`),
      (xl = `data-browser-comment-interaction-blocker`),
      (Sl = `data-browser-comment-interaction-layer`));
  });
function wl(e) {
  let t = document;
  return (
    e == null ? Dl.delete(t) : Dl.set(t, e),
    () => {
      Dl.get(t) === e && Dl.delete(t);
    }
  );
}
function Tl(e) {
  let t = Dl.get(document);
  return t == null ? e : { ...e, documentId: t };
}
function El(e) {
  return e.documentId === Dl.get(document);
}
var Dl,
  Ol = o(() => {
    Dl = new WeakMap();
  });
function kl(e, t = 0) {
  return (
    Al[e[t + 0]] +
    Al[e[t + 1]] +
    Al[e[t + 2]] +
    Al[e[t + 3]] +
    `-` +
    Al[e[t + 4]] +
    Al[e[t + 5]] +
    `-` +
    Al[e[t + 6]] +
    Al[e[t + 7]] +
    `-` +
    Al[e[t + 8]] +
    Al[e[t + 9]] +
    `-` +
    Al[e[t + 10]] +
    Al[e[t + 11]] +
    Al[e[t + 12]] +
    Al[e[t + 13]] +
    Al[e[t + 14]] +
    Al[e[t + 15]]
  ).toLowerCase();
}
var Al,
  jl = o(() => {
    Al = [];
    for (let e = 0; e < 256; ++e) Al.push((e + 256).toString(16).slice(1));
  });
function Ml() {
  if (!Nl) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    Nl = crypto.getRandomValues.bind(crypto);
  }
  return Nl(Pl);
}
var Nl,
  Pl,
  Fl = o(() => {
    Pl = new Uint8Array(16);
  }),
  Il,
  Ll,
  Rl = o(() => {
    ((Il = typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto)),
      (Ll = { randomUUID: Il }));
  });
function zl(e, t, n) {
  if (Ll.randomUUID && !t && !e) return Ll.randomUUID();
  e ||= {};
  let r = e.random ?? e.rng?.() ?? Ml();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return kl(r);
}
var Bl = o(() => {
    (Rl(), Fl(), jl());
  }),
  V = o(() => {
    (jl(), Fl(), Bl());
  });
function H(e) {
  let t = (e ?? ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, Kl);
}
function U(e) {
  if (!Ul(e)) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (n != null && e instanceof n) || (r != null && e instanceof r);
}
function W(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function Vl(e) {
  if (e.closest(`script,style,noscript,template,[hidden],[aria-hidden='true']`) != null) return !1;
  let t = Hl(e).getComputedStyle(e);
  return t.display !== `none` && t.visibility !== `hidden` && t.opacity !== `0`;
}
function Hl(e) {
  return e.ownerDocument.defaultView ?? window;
}
function Ul(e) {
  return e != null && e instanceof (e.ownerDocument.defaultView?.HTMLElement ?? HTMLElement);
}
function Wl(e, t, n) {
  let r = e.createRange();
  return (r.selectNodeContents(t), Array.from(r.getClientRects()).some((e) => Gl(e, n)));
}
function Gl(e, t) {
  return e.right >= t.x && e.left <= t.x + t.width && e.bottom >= t.y && e.top <= t.y + t.height;
}
var Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl = o(() => {
    (Js(),
      (Kl = 2e3),
      (ql = 4),
      (Jl = 1),
      (Yl = 2),
      (Xl = class {
        pageUrl;
        constructor(e) {
          this.pageUrl = e;
        }
        isGoogleDocsPage() {
          return us(this.pageUrl) != null;
        }
        getDocumentContext({ documentTitle: e, selectedText: t, visibleText: n }) {
          return ps({ documentTitle: e, pageUrl: this.pageUrl, selectedText: t, visibleText: n });
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
          return e.documentContext?.kind === `google-docs` || us(e.pageUrl) != null;
        }
        getWindowSelectionText(e) {
          try {
            return H(e.getSelection()?.toString()) ?? this.getActiveElementSelectionText(e);
          } catch {
            return null;
          }
        }
        getActiveElementSelectionText(e) {
          let t = e.document.activeElement;
          if (!U(t)) return null;
          let n = t.selectionStart,
            r = t.selectionEnd;
          return n == null || r == null || r <= n ? null : H(t.value.slice(n, r));
        }
        getVisibleTextInViewportRect(e, t) {
          let n = W(e),
            r = n?.body;
          if (n == null || r == null) return null;
          let i = ``,
            a = n.createTreeWalker(r, ql, {
              acceptNode: (e) => {
                if (H(e.textContent) == null) return Yl;
                let t = e.parentElement;
                return !Ul(t) || !Vl(t) ? Yl : Jl;
              },
            }),
            o = a.nextNode();
          for (; o != null;) {
            let e = H(o.textContent);
            if (e != null && Wl(n, o, t) && ((i = i.length === 0 ? e : `${i} ${e}`), i.length >= Kl)) break;
            o = a.nextNode();
          }
          return H(i);
        }
      }));
  });
function Ql(e) {
  let t = e.commonAncestorContainer.getRootNode();
  if (!tu(t)) return null;
  let n = `defaultView` in t ? t.defaultView : t.ownerDocument.defaultView;
  return n != null && eu(n) ? { ownerWindow: n, range: e, styleRoot: t } : null;
}
function $l({ color: e, name: t, ownerWindow: n, range: r, styleRoot: i }) {
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
function eu(e) {
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
function tu(e) {
  return (
    `adoptedStyleSheets` in e &&
    (e.nodeType === Node.DOCUMENT_NODE || (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e))
  );
}
var nu = o(() => {});
function ru(e, t, n) {
  let r = e.ownerDocument.createRange();
  try {
    return (r.selectNodeContents(e), r.setEnd(t, n), r.toString().length);
  } catch {
    return null;
  }
}
function iu(e, t) {
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
var au = o(() => {});
function ou(e) {
  let t = e ?? window;
  if (e == null)
    for (;;) {
      let e = Ou(t.document),
        n = e == null ? null : nc(e);
      if (n == null) {
        if (ec(e)) return null;
        break;
      }
      t = n;
    }
  let n = Du(t) ?? vu(t);
  return n == null ? null : Au(n);
}
function su(e) {
  let t = e.startContainer.ownerDocument?.defaultView;
  if (t == null) return null;
  let n = yu(t, e, e.toString(), `forward`);
  return n == null ? null : Au(n);
}
function cu(e) {
  let t = yc(e.framePath);
  if (t == null || !hu(e.frameUrl, t)) return null;
  let n = Nu(t, e.textLocator);
  if (n == null) return null;
  let r = Eu(n, e.textLocator);
  return r?.toString() === e.textLocator.rangeText ? { range: r, target: n } : null;
}
function lu(e) {
  let t = yc(e.framePath);
  if (t == null || !hu(e.frameUrl, t)) return null;
  let n = Nu(t, e.textLocator);
  if (n == null) return null;
  let r;
  switch (e.textLocator.kind) {
    case `dom`:
      r = Tu(t, n, e.textLocator, e.selectedText);
      break;
    case `form-control`:
      r =
        B(n) && G(n)
          ? ku(t, n, e.textLocator.startOffset, e.textLocator.endOffset, e.textLocator.direction)
          : null;
  }
  if (r == null || r.selectedText !== e.selectedText) return null;
  let i = Au(r);
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
function uu(e, t) {
  let n = new Map();
  for (let t of e) {
    if (t.anchor.kind !== `text`) continue;
    let e = lu(t.anchor)?.anchor;
    e?.kind === `text` && n.set(t.id, { sourceAnchor: t.anchor, value: e });
  }
  return t?.size === n.size &&
    Array.from(n).every(([e, n]) => {
      let r = t.get(e);
      return r?.sourceAnchor === n.sourceAnchor && As(r.value, n.value);
    })
    ? t
    : n;
}
function du(e, t) {
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
      (e.type === `load` && ec(e.target) && f(), s());
    },
    d = new MutationObserver((e) => {
      e.every(Uu) ||
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
      for (let e of i) for (let t of $u) e.removeEventListener(t, u, !0);
      ((n = new Set()), (r = new Set()), (i = new Set()), (a = !1));
      let t = new Set(),
        o = new Set();
      for (let s of e) {
        for (let e of Pu(s.framePath)) (i.add(e), t.add(e.documentElement));
        let e = yc(s.framePath);
        if (e == null) {
          a = !0;
          continue;
        }
        let c = Nu(e, s.textLocator);
        if (c == null) {
          a = !0;
          let n = Fu(e, s.textLocator);
          (t.add(n), Lu(n) && i.add(n));
          continue;
        }
        (n.add(c), t.add(c), Lu(c) && i.add(c));
        let l = c.parentNode ?? Iu(c);
        for (; l != null;) (Lu(l) ? (t.add(l), i.add(l)) : o.add(l), (l = l.parentNode ?? Iu(l)));
        let u = B(c) ? c : Iu(c);
        for (; u != null;) (r.add(u), (u = u.parentElement ?? Iu(u.getRootNode())));
      }
      for (let e of t) d.observe(e, Qu);
      for (let e of o) t.has(e) || d.observe(e, { ...(B(e) ? { attributes: !0 } : {}), childList: !0 });
      for (let e of n) e.addEventListener(`input`, l);
      for (let e of r) e.addEventListener(`scroll`, c);
      for (let e of i) for (let t of $u) e.addEventListener(t, u, !0);
    };
  return (
    f(),
    () => {
      d.disconnect();
      for (let e of n) e.removeEventListener(`input`, l);
      for (let e of r) e.removeEventListener(`scroll`, c);
      for (let e of i) for (let t of $u) e.removeEventListener(t, u, !0);
      o != null && window.cancelAnimationFrame(o);
    }
  );
}
function fu(e) {
  if (e.textLocator.kind !== `dom`) return null;
  let t = cu({ framePath: e.framePath, frameUrl: e.frameUrl, textLocator: e.textLocator });
  return t == null ? null : Ql(t.range);
}
function pu(e) {
  return $l({ ...e, color: Zu, name: Xu });
}
function mu(e) {
  let t = e.document,
    n = null,
    r = () => {
      (n?.dispose(), (n = null));
    },
    i = () => {
      let i = e.getSelection(),
        a = i != null && i.rangeCount > 0 && !G(Ou(t)) ? bu(e, i) : null,
        o = a == null ? null : Ql(a);
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
      let s = $l({ ...o, color: Zu, name: `${Xu}-drag` }),
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
function hu(e, t) {
  return e == null || t.location.href === e;
}
function gu() {
  for (let e of ac())
    try {
      e.getSelection()?.removeAllRanges();
      let t = Ou(e.document);
      G(t) && t.setSelectionRange(t.selectionEnd, t.selectionEnd);
    } catch {}
}
function _u(e, t) {
  return e.kind === `text` && !e.isFixed ? t.scrollX : 0;
}
function vu(e) {
  let t = e.getSelection();
  if (t == null || t.rangeCount === 0) return null;
  let n = bu(e, t);
  return n == null ? null : yu(e, n, t.toString(), wu(t, n));
}
function yu(e, t, n, r) {
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
  let i = ju(t.commonAncestorContainer);
  if (i == null || zu(t, e)) return null;
  let a = Mu(i);
  if (a == null) return null;
  let o = ru(i, t.startContainer, t.startOffset),
    s = ru(i, t.endContainer, t.endOffset);
  if (o == null || s == null || s <= o) return null;
  let c = Vu(t);
  if (c.length === 0) return null;
  let l = r === `forward`;
  return {
    frameWindow: e,
    isFixed: Ru(i, e),
    locator: { ...a, kind: `dom`, direction: r, rangeText: t.toString(), startOffset: o, endOffset: s },
    rects: c,
    selectedText: n,
    viewportPoint: qu(c, l),
  };
}
function bu(e, t) {
  let n = t.getRangeAt(0);
  if (!n.collapsed && xu(t, n)) return n;
  if (!Su(t)) return null;
  let r = t.getComposedRanges({ shadowRoots: Cu(e.document) })[0];
  if (r == null) return null;
  let i = e.document.createRange();
  return (
    i.setStart(r.startContainer, r.startOffset),
    i.setEnd(r.endContainer, r.endOffset),
    i.collapsed ? null : i
  );
}
function xu(e, t) {
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
function Su(e) {
  return `getComposedRanges` in e && typeof e.getComposedRanges == `function`;
}
function Cu(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    B(n) && n.shadowRoot != null && t.push(n.shadowRoot, ...Cu(n.shadowRoot));
  return t;
}
function wu(e, t) {
  return e.anchorNode === t.startContainer && e.anchorOffset === t.startOffset
    ? `forward`
    : (e.focusNode === t.startContainer && e.focusOffset === t.startOffset) ||
        (`direction` in e && e.direction === `backward`)
      ? `backward`
      : `forward`;
}
function Tu(e, t, n, r) {
  let i = Eu(t, n);
  if (i == null || i.toString() !== n.rangeText || zu(i, e) || r.length > 2e4) return null;
  let a = Vu(i);
  return a.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Ru(t, e),
        locator: n,
        rects: a,
        selectedText: r,
        viewportPoint: qu(a, n.direction === `forward`),
      };
}
function Eu(e, t) {
  let n = iu(e, t.startOffset),
    r = iu(e, t.endOffset);
  if (n == null || r == null) return null;
  let i = e.ownerDocument.createRange();
  return (i.setStart(n.node, n.offset), i.setEnd(r.node, r.offset), i);
}
function Du(e) {
  let t = Ou(e.document);
  if (!G(t) || Bu(t, e)) return null;
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
    : ku(e, t, n, r, t.selectionDirection === `backward` ? `backward` : `forward`);
}
function Ou(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
  return t;
}
function ku(e, t, n, r, i) {
  let a = Mu(t),
    o = t.value.slice(n, r);
  if (a?.selector == null || Bu(t, e) || o.trim().length === 0 || o.length > 2e4) return null;
  let s = Hu(t, n, r);
  return s.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Ru(t, e),
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
        viewportPoint: qu(s, i === `forward`),
      };
}
function Au(e) {
  let t = Ys(e.frameWindow);
  if (t == null) return null;
  let n = Mc(e.frameWindow),
    r = Ku(e.rects),
    i = e.isFixed ? 0 : e.frameWindow.scrollX,
    a = e.rects.map((t) => ({ ...t, x: t.x + i, y: e.isFixed ? t.y : t.y + e.frameWindow.scrollY })),
    o = Ku(a),
    s = Dc(e.frameWindow, e.viewportPoint),
    c = { x: e.viewportPoint.x + n.x, y: e.viewportPoint.y + n.y };
  return {
    anchor: Tl({
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
    }),
    themeVariant: window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`,
    viewportRect: { ...r, x: r.x + n.x, y: r.y + n.y },
    viewportPoint: c,
    viewportSize: { width: window.innerWidth, height: window.innerHeight },
  };
}
function ju(e) {
  if (Lu(e)) return e;
  let t = e.nodeType === 1 ? e : e.parentElement;
  for (; B(t);) {
    if (wc(t) != null) return t;
    t = t.parentElement;
  }
  return null;
}
function Mu(e) {
  let t = B(e) ? wc(e, { requireUnique: !0 }) : null;
  if (B(e) && t == null) return null;
  let n = [],
    r = e.getRootNode();
  for (; r !== e.ownerDocument;) {
    let e = Iu(r);
    if (e == null || e.shadowRoot !== r) return null;
    let t = wc(e, { requireUnique: !0 });
    if (t == null) return null;
    (n.unshift(t), (r = e.getRootNode()));
  }
  return { selector: t, shadowHosts: n };
}
function Nu(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!B(t) || t.shadowRoot == null) return null;
    n = t.shadowRoot;
  }
  let r = t.selector;
  if (t.kind === `dom` && r == null) return Lu(n) ? n : null;
  if (r == null) return null;
  let i = n.querySelector(r);
  return B(i) ? i : null;
}
function Pu(e) {
  let t = window,
    n = [t.document];
  for (let r of e) {
    let e = bc(t.document, r);
    if (e == null) break;
    let i = nc(e);
    if (i == null) break;
    ((t = i), n.push(t.document));
  }
  return n;
}
function Fu(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!B(t) || t.shadowRoot == null) return n;
    n = t.shadowRoot;
  }
  return n;
}
function Iu(e) {
  return Lu(e) ? e.host : null;
}
function Lu(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && B(e.host);
}
function Ru(e, t) {
  let n = B(e) ? e : Iu(e);
  for (; n != null && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = n.parentElement ?? Iu(n.getRootNode());
  }
  return !1;
}
function zu(e, t) {
  let n = e.commonAncestorContainer;
  if (n.nodeType === Node.TEXT_NODE) return n.parentElement != null && Bu(n.parentElement, t);
  let r = t.document.createTreeWalker(n, NodeFilter.SHOW_TEXT),
    i = r.nextNode();
  for (; i != null;) {
    if (e.intersectsNode(i) && i.parentElement != null && Bu(i.parentElement, t)) return !0;
    i = r.nextNode();
  }
  return !1;
}
function Bu(e, t) {
  let n = t.getComputedStyle(e).getPropertyValue(`-webkit-text-security`);
  return n.length > 0 && n !== `none`;
}
function Vu(e) {
  if (typeof e.getClientRects != `function`) return [];
  let t = e.getClientRects();
  return t.length > 1e3
    ? []
    : Array.from(t)
        .filter((e) => e.width > 0 && e.height > 0)
        .map((e) => ({ x: e.left, y: e.top, width: e.width, height: e.height }));
}
function Hu(e, t, n) {
  let r = e.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return [];
  let i = e.ownerDocument.defaultView;
  if (i == null || Wu(e, i)) return [];
  let a = i.getComputedStyle(e),
    o = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
    s = e.offsetHeight > 0 ? r.height / e.offsetHeight : 1,
    c = e.ownerDocument.createElement(`div`);
  (c.setAttribute(ed, ``),
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
  for (let e of Yu) c.style[e] = a[e];
  ((c.style.boxSizing = `border-box`), c.append(e.value.slice(0, t)));
  let l = e.ownerDocument.createElement(`span`);
  ((l.textContent = e.value.slice(t, n) || `​`),
    c.append(l, e.value.slice(n)),
    e.ownerDocument.body.append(c),
    (c.scrollLeft = e.scrollLeft),
    (c.scrollTop = e.scrollTop));
  let u = l.getClientRects(),
    d = Array.from(u.length > 1e3 ? [] : u)
      .map((e) => Gu(e, r))
      .filter((e) => e != null);
  return (c.remove(), d);
}
function Uu(e) {
  if (e.type !== `childList`) return !1;
  let t = [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)];
  return t.length > 0 && t.every((e) => B(e) && e.hasAttribute(ed));
}
function Wu(e, t) {
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
    n = n.parentElement ?? Iu(n.getRootNode());
  }
  return !1;
}
function Gu(e, t) {
  let n = Math.max(e.left, t.left),
    r = Math.max(e.top, t.top),
    i = Math.min(e.right, t.right),
    a = Math.min(e.bottom, t.bottom);
  return i <= n || a <= r ? null : { x: n, y: r, width: i - n, height: a - r };
}
function Ku(e) {
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function qu(e, t) {
  let n = t ? e.at(-1) : e[0];
  return n == null ? { x: 0, y: 0 } : { x: t ? n.x + n.width : n.x, y: n.y + n.height / 2 };
}
function G(e) {
  if (e == null) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (r != null && e instanceof r) || (n != null && e instanceof n && Ju.has(e.type));
}
var Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td = o(() => {
    (Ol(),
      Js(),
      nu(),
      au(),
      Zc(),
      (Ju = new Set([`email`, `search`, `tel`, `text`, `url`])),
      (Yu =
        `borderBottomStyle.borderBottomWidth.borderLeftStyle.borderLeftWidth.borderRightStyle.borderRightWidth.borderTopStyle.borderTopWidth.boxSizing.direction.fontFamily.fontFeatureSettings.fontKerning.fontSize.fontStretch.fontStyle.fontVariant.fontWeight.letterSpacing.lineHeight.paddingBottom.paddingLeft.paddingRight.paddingTop.tabSize.textAlign.textIndent.textTransform.wordBreak.wordSpacing`.split(
          `.`,
        )),
      (Xu = `codex-browser-text-selection`),
      (Zu = `#128dff66`),
      (Qu = { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      ($u = [`animationcancel`, `animationend`, `load`, `transitioncancel`, `transitionend`]),
      (ed = `data-browser-comment-text-selection-mirror`));
  });
function nd(e) {
  let t = cd(e);
  if (t == null) return null;
  let n = jc(e).getComputedStyle(e);
  return {
    borderRadius: n.borderRadius.length === 0 ? `0px` : n.borderRadius,
    color: ys(n.color),
    font: `${n.fontSize} ${n.fontFamily}`.trim(),
    styles: is(n, n.display === `flex` || n.display === `inline-flex` ? [...xd, ...Sd] : xd),
    rect: t,
    size: `${Math.round(t.width)}x${Math.round(t.height)}`,
    tagName: e.tagName.toLowerCase(),
  };
}
function rd(e) {
  return (
    e.kind === `element` && e.framePath.length === 0 && (e.elementPath === `html` || e.elementPath === `body`)
  );
}
function id(e, t, n, r, i = window.innerWidth) {
  let a = K.get(e.ownerDocument);
  a ?? ((a = new WeakMap()), K.set(e.ownerDocument, a));
  let o = a.get(e);
  o ?? ((o = zl()), a.set(e, o));
  let s = jc(e),
    c = vc(e),
    l = c == null ? null : Tc(e, { requireUnique: !1 }),
    u = Oc(e),
    d = fd(),
    f = new Xl(d).getElementDocumentContext({
      documentTitle: document.title,
      elementWindow: s,
      fallbackWindow: window,
    });
  return Tl({
    kind: `element`,
    runtimeElementId: o,
    pageUrl: d,
    frameUrl: pd(s, c),
    title: mc(e),
    elementPath: _c(e),
    point: { xPercent: (n.x / i) * 100, y: r ? n.y : n.y + window.scrollY },
    rect: { x: t.x, y: r ? t.y : t.y + window.scrollY, width: t.width, height: t.height },
    isFixed: r,
    role: e.getAttribute(`role`),
    name: e.getAttribute(`aria-label`) ?? hc(e),
    selector: l,
    framePath: c ?? [],
    nearbyText: gc(e),
    immediateText: vd(e),
    documentContext: f,
    ...(u.length === 0 ? {} : { scrollContainers: u }),
  });
}
function ad(e, t, n, r) {
  let i = cd(e);
  return i == null
    ? t
    : {
        ...id(e, i, hd(t, i, n, r), Ec(e), n?.width),
        annotationFeatures: t.annotationFeatures,
        annotationRequestIncludesPrompt: t.annotationRequestIncludesPrompt,
        elementMetadata: t.elementMetadata,
        elementName: t.elementName,
      };
}
function od(e, t, n, r, i = !1) {
  let a =
      n &&
      (i || window.top === window) &&
      e.ownerDocument === document &&
      e.namespaceURI === `http://www.w3.org/1999/xhtml` &&
      !Qs(e) &&
      cd(e) != null,
    o,
    s;
  return (
    a &&
      ((o = r),
      e.hasAttribute(`oai-annotatable`) &&
        ((s = Go(e.getAttribute(`oai-annotatable`))), (o ??= qo(e.getAttribute(`oai-annotation-metadata`))))),
    {
      ...t,
      annotationFeatures:
        t.annotationFeatures ??
        (n && e.hasAttribute(`oai-annotatable`) && $c(e) === e ? [`selectable-containers`] : []),
      elementMetadata: o,
      elementName: s,
    }
  );
}
function sd(e, t, n) {
  if (e.kind !== `element` || !El(e)) return null;
  if (t != null) {
    let e = n.get(t) ?? null;
    if (e?.isConnected) return cd(e) == null ? null : e;
    e != null && n.delete(t);
  }
  if (e.selector == null || !md(e.pageUrl, fd())) return null;
  try {
    let t = Cc(e.framePath);
    return t == null ? null : ud(t, e);
  } catch {
    return null;
  }
}
function cd(e) {
  if (!e.isConnected || !_d(e)) return null;
  let t = jc(e),
    n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = Mc(t);
  return { x: n.left + r.x, y: n.top + r.y, width: n.width, height: n.height };
}
function ld(e) {
  return e.getAttribute(`aria-label`) ?? hc(e);
}
function ud(e, t) {
  if (t.selector == null) return null;
  let n = Sc(e, t.selector);
  if (n.length === 0) return null;
  let r = n.filter((e) => cd(e) != null);
  if (r.length === 0) return null;
  let i = r;
  if (t.name != null) {
    let e = i.filter((e) => ld(e) === t.name);
    e.length > 0 && (i = e);
  }
  if (t.nearbyText != null) {
    let e = i.filter((e) => gc(e) === t.nearbyText);
    e.length > 0 && (i = e);
  }
  if (i.length === 1) return i[0] ?? null;
  let a = null,
    o = -1 / 0;
  for (let e of i) {
    let n = gd(t, e);
    n > o && ((a = e), (o = n));
  }
  return a;
}
function dd(e) {
  if (e == null) return null;
  if (e.kind === `virtual`) return e.rect;
  let t = yc(e.framePath),
    n = kc(e, t ?? window),
    r = n.x + _u(e, t ?? window);
  if (e.kind !== `element` && t != null && t !== window) {
    let i = Mc(t);
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
function fd() {
  return window.location.href;
}
function pd(e, t) {
  if (t == null || t.length === 0) return null;
  let n = e.location.href;
  if (n !== fd()) return n;
  let r = e.frameElement;
  return ec(r) && r.src !== `` ? r.src : n;
}
function md(e, t) {
  let n = yd(e),
    r = yd(t);
  return n == null || r == null
    ? e === t
    : (n.protocol === `http:` || n.protocol === `https:`) &&
        (r.protocol === `http:` || r.protocol === `https:`)
      ? n.origin === r.origin && n.pathname === r.pathname && n.search === r.search
      : n.protocol === `file:` && r.protocol === `file:`
        ? n.pathname === r.pathname && n.search === r.search
        : e === t;
}
function hd(e, t, n, r) {
  let i = r?.x ?? (e.point.xPercent / 100) * (n?.width ?? window.innerWidth),
    a = e.rect.width === 0 ? 0.5 : (i - e.rect.x) / e.rect.width,
    o = e.rect.height === 0 ? 0.5 : (e.point.y - e.rect.y) / e.rect.height;
  return { x: t.x + bd(a, 0, 1) * t.width, y: t.y + bd(o, 0, 1) * t.height };
}
function gd(e, t) {
  let n = 0,
    r = ld(t);
  (e.name != null && r === e.name && (n += 1e3),
    e.nearbyText != null && gc(t) === e.nearbyText && (n += 500),
    e.title === mc(t) && (n += 250),
    e.elementPath === _c(t) && (n += 25));
  let i = cd(t),
    a = dd(e);
  return i == null || a == null ? n : n - Math.abs(i.x - a.x) - Math.abs(i.y - a.y);
}
function _d(e) {
  for (let t = e; t != null; t = t.parentElement) {
    let e = jc(t).getComputedStyle(t);
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
function vd(e) {
  if (Qs(e)) return null;
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Node.TEXT_NODE)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function yd(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function bd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var xd,
  Sd,
  K,
  Cd = o(() => {
    (Ol(),
      Js(),
      V(),
      ol(),
      Zc(),
      Zl(),
      td(),
      (xd = [
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
      (Sd = [`flex-direction`, `justify-content`, `align-items`, `gap`, `row-gap`, `column-gap`]),
      (K = new WeakMap()));
  });
(Js(), Wo(), Cl(), ol(), Cd(), Zc(), td());
var wd = Da({
  enterAnnotationMode: Sa().catch(!1),
  initialComment: Ps.optional().catch(void 0),
  metadata: wa().transform((e) => {
    let t = Ko(e);
    return t == null || Object.keys(t).length === 0 ? void 0 : t;
  }),
  mode: Na([`default`, `advanced`]).catch(`default`),
  range: Da({
    startPath: Ea(ba().int().nonnegative()).max(128),
    endPath: Ea(ba().int().nonnegative()).max(128),
    startOffset: ba().int().nonnegative(),
    endOffset: ba().int().nonnegative(),
    rangeText: ya().min(1).max(Ls),
  }).optional(),
});
function Td({ getState: e, requestPermission: t }) {
  let n = null,
    r = null,
    i = !1,
    a = !1,
    o = !1,
    s = () => {
      r = null;
    },
    c = (t) => {
      let r = Ed(t, e());
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
      if (o || a || r != null || i || navigator.userActivation?.isActive !== !0 || !jd(e())) return;
      let u = Md(l),
        d = l.composedPath()[0] ?? l.target;
      if (u == null || !(d instanceof HTMLElement) || dl(d)) return;
      let f = u.range == null ? null : kd(d, u.range);
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
      if (Ed(m, e()) == null) return;
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
function Ed({ target: e, request: t, rangeText: n }, r) {
  if (!jd(r)) return null;
  if (e instanceof Range) {
    let r = e.commonAncestorContainer,
      i = r instanceof HTMLElement ? r : r.parentElement;
    if (
      t.openTweaks ||
      i == null ||
      dl(i) ||
      e.startContainer.ownerDocument !== document ||
      e.toString() !== n ||
      !Dd(e)
    )
      return null;
    let a = su(e);
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
  if (e.ownerDocument !== document || !e.isConnected || dl(e) || nl(e) == null) return null;
  let i = cd(e);
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
function Dd(e) {
  let t = e.commonAncestorContainer,
    n = document.createTreeWalker(t, NodeFilter.SHOW_TEXT),
    r = t.nodeType === Node.TEXT_NODE ? t : n.nextNode();
  for (; r != null;) {
    let t = r.textContent ?? ``,
      i = r === e.startContainer ? e.startOffset : 0,
      a = r === e.endContainer ? e.endOffset : t.length,
      o = r instanceof Text ? (r.assignedSlot ?? r.parentElement) : r.parentElement;
    if (a > i && e.intersectsNode(r) && (o == null || !Od(o))) return !1;
    r = n.nextNode();
  }
  return !0;
}
function Od(e) {
  let t = window.getComputedStyle(e).visibility;
  if (t === `hidden` || t === `collapse`) return !1;
  for (let t = e; t != null; t = $s(t)) {
    let e = window.getComputedStyle(t);
    if (e.display === `none` || e.contentVisibility === `hidden` || Number.parseFloat(e.opacity) === 0)
      return !1;
  }
  return !0;
}
function kd(e, t) {
  let n = Ad(e, t.startPath),
    r = Ad(e, t.endPath);
  if (n == null || r == null) return null;
  let i = document.createRange();
  try {
    (i.setStart(n, t.startOffset), i.setEnd(r, t.endOffset));
  } catch {
    return null;
  }
  return !i.collapsed && i.toString() === t.rangeText ? i : null;
}
function Ad(e, t) {
  let n = e;
  for (let e of t) {
    let t = n.childNodes[e];
    if (t == null) return null;
    n = t;
  }
  return n;
}
function jd({ canUseSiteAnnotationApi: e, hasActiveEditor: t, isAgentControllingBrowser: n }) {
  return globalThis.isSecureContext === !0 && e && !n && !t;
}
function Md(e) {
  try {
    let t = `detail` in e ? (e.detail ?? {}) : {};
    if (typeof t != `object`) return;
    let n = Object.getPrototypeOf(t);
    if (n !== Object.prototype && n != null) return;
    let r = wd.safeParse(
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
function Nd(e) {
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
var Pd,
  Fd,
  q,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud = o(() => {
    (Wo(),
      (Pd = ya()
        .max(512)
        .regex(/^[^\u0000-\u001f\u007f-\u009f\u061c\u200e\u200f\u2028-\u202e\u2066-\u2069]*$/u)),
      (Fd = Pd.trim().min(1).max(80)),
      (q = ya()
        .trim()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*$/)),
      (Id = ya()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z0-9_./:@$#-]+$/)),
      (Ld = ba().min(-1e4).max(1e4)),
      (Rd = Pd.regex(/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)),
      (zd = ka([Pd, Ld, Sa()])),
      Ea(
        Oa({ label: Fd, reference: Id.optional(), previousValue: zd.optional(), value: zd }).refine(
          (e) => e.previousValue == null || typeof e.previousValue == typeof e.value,
          { message: `Control changes must preserve the original value type`, path: [`value`] },
        ),
      ).max(12),
      (Bd = Oa({ callback: q, label: Fd, reference: Id.optional() })),
      (Vd = Aa(`type`, [
        Bd.extend({ currentValue: Rd.optional(), defaultValue: Rd.optional(), type: Pa(`color`) }),
        Bd.extend({
          currentValue: Pd.optional(),
          defaultValue: Pd.optional(),
          options: Ea(Oa({ label: Fd, value: Pd }))
            .min(1)
            .max(12),
          type: Pa(`select`),
        }),
        Bd.extend({
          currentValue: Ld.optional(),
          defaultValue: Ld.optional(),
          max: Ld,
          min: Ld,
          step: ba().min(0.001).max(1e4),
          type: Pa(`range`),
        }),
        Bd.extend({ currentValue: Sa().optional(), defaultValue: Sa().optional(), type: Pa(`toggle`) }),
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
      Oa({ callback: q, previousValue: zd.optional(), value: zd }).superRefine((e, t) => {
        e.previousValue != null &&
          typeof e.previousValue != typeof e.value &&
          t.addIssue({
            code: `custom`,
            message: `Control changes must preserve the original value type`,
            path: [`value`],
          });
      }),
      (Hd = Oa({
        controls: Ea(Vd).max(12),
        controlsHeading: Fd.optional(),
        controlsMode: Na([`extend`, `replace`]).optional(),
      }).superRefine(({ controls: e }, t) => {
        new Set(e.map((e) => e.callback)).size !== e.length &&
          t.addIssue({
            code: `custom`,
            message: `Each control must have a unique callback`,
            path: [`controls`],
          });
      })));
  });
(Wo(), Ud());
var Wd = 64,
  Gd = 128,
  Kd = 1024,
  qd = 16384,
  Jd = `codex:register-annotation-controls`,
  Yd = `codex:update-annotation-controls`,
  Xd = `codex:dispose-annotation-controls`,
  Zd = `codex-browser-sidebar-comments-root`,
  Qd = Oa({
    controls: Hd.shape.controls.optional(),
    controlsHeading: Hd.shape.controlsHeading,
    controlsMode: Hd.shape.controlsMode,
  });
function $d() {
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
        let r = ef(t);
        if (r == null) return;
        let s = tf(r, `id`),
          c = tf(r, `payload`),
          l = tf(r, `targets`);
        if (typeof s != `string` || s.length === 0 || s.length > 80 || n.has(s) || n.size >= Wd) return;
        let u = nf(c);
        if (u == null) return;
        let d = rf(e, l);
        if (d == null || d.size === 0 || n.has(s) || n.size >= Wd || i + d.size > Kd) return;
        let f = { controls: u, id: s, order: a++, targets: [] };
        (n.set(s, f), o(f, d), t.preventDefault());
      } catch {}
    },
    l = (t) => {
      try {
        let r = ef(t);
        if (r == null) return;
        let a = tf(r, `id`),
          c = tf(r, `payload`),
          l = tf(r, `targets`);
        if (typeof a != `string`) return;
        let u = n.get(a);
        if (u == null) return;
        let d = l === void 0 ? void 0 : rf(e, l);
        if ((l !== void 0 && d == null) || n.get(a) !== u) return;
        let f = nf(c, u.controls);
        if (f == null || (d != null && i - u.targets.length + d.size > Kd)) return;
        ((u.controls = f), d != null && (s(u), o(u, d)), t.preventDefault());
      } catch {}
    },
    u = (e) => {
      try {
        let t = ef(e);
        if (t == null) return;
        let r = tf(t, `id`);
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
        t.removeEventListener(Jd, c),
        t.removeEventListener(Yd, l),
        t.removeEventListener(Xd, u),
        t.removeEventListener(`pagehide`, f));
    },
    f = (e) => {
      e.isTrusted && !e.persisted && d();
    };
  return (
    t.addEventListener(Jd, c),
    t.addEventListener(Yd, l),
    t.addEventListener(Xd, u),
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
function ef(e) {
  if (!(e instanceof CustomEvent)) return;
  let t = e.detail;
  return typeof t == `object` && t ? t : void 0;
}
function tf(e, t) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n != null && `value` in n ? n.value : void 0;
}
function nf(e, t) {
  if (!(typeof e != `string` || e.length > qd))
    try {
      let n = JSON.parse(e);
      if (t != null) {
        let e = Qd.safeParse(n);
        if (!e.success) return;
        n = { ...t, ...e.data };
      }
      let r = Hd.safeParse(n);
      return r.success ? r.data : void 0;
    } catch {
      return;
    }
}
function rf(e, t) {
  if (!Array.isArray(t)) return;
  let n = t.length;
  if (!Number.isSafeInteger(n) || n < 0 || n > Gd) return;
  let r = new Set();
  for (let i = 0; i < n; i += 1) {
    let n = tf(t, String(i));
    if (!(n instanceof Element) || n.ownerDocument !== e || af(e, n)) return;
    r.add(n);
  }
  return r;
}
function af(e, t) {
  let n = e.getElementById?.(Zd);
  return n != null && (n === t || n.contains(t) || n.shadowRoot?.contains(t) === !0);
}
function of(e, t) {
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
function sf() {
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
          t = of(t, r);
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
function cf(e) {
  return Math.min(ff, Math.max(df, e));
}
function lf(e) {
  return cf(e) / 100;
}
var uf,
  df,
  ff,
  pf = o(() => {
    ((uf = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500]),
      (df = uf[0]),
      (ff = uf[uf.length - 1]));
  });
pf();
var mf = `codex_desktop:message-for-view`,
  hf = `codex_desktop:browser-sidebar-runtime-message`,
  gf = `codex_desktop:browser-page-event`,
  _f = `codex_desktop:get-browser-annotation-api-policy`;
Wo();
var vf = { type: `site_annotation_features_changed`, version: 1 },
  yf = ka([
    Da({
      feature: Na([
        `selectable-containers`,
        `text-containers`,
        `custom-controls`,
        `registered-surface`,
        `metadata`,
        `mode-toggle`,
      ]),
      includesPrompt: Ta().optional(),
    }),
    Da({ feature: Pa(`requests`), includesPrompt: Sa() }),
  ]);
Da({
  type: Pa(vf.type),
  version: Pa(vf.version),
  payload: Da({
    detections: Ea(yf).max(8),
    used: ja(yf, Da({ interactionType: Na([`opened`, `invoked`]) })).optional(),
    features: Ea(
      Na([
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
function bf(e, t, n, r, i, a, o) {
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
function xf(e, t, n = !1) {
  let r = new Map(),
    i = null,
    a = null,
    o = !1,
    s = 0;
  if ((!n && window !== window.top) || !globalThis.isSecureContext) return !1;
  let c = crypto.randomUUID(),
    l = new RegExp(e.rolePattern),
    u = Symbol.for(e.busySlot),
    d = h();
  if (d == null) return !1;
  let f = (e) => {
    if (
      o ||
      e == null ||
      !(e.element instanceof HTMLElement) ||
      !g(e.element) ||
      typeof e.hitTest != `function` ||
      (e.renderSelection != null && typeof e.renderSelection != `function`)
    )
      throw TypeError(`Annotation surfaces require a connected top-document element and hitTest callback.`);
    let n = e.element,
      l = r.get(n);
    l != null && w(l);
    let u = {
      id: `${c}-${++s}`,
      options: { element: n, hitTest: e.hitTest, renderSelection: e.renderSelection },
      renderFailed: !1,
      selection: { hoveredId: null, selectedId: null },
    };
    return (
      r.set(n, u),
      t(`surfaces`),
      T(u, `registered`),
      {
        invalidate() {
          r.get(n) === u && (i?.registration === u && b(), a?.registration === u && x(), T(u, `invalidated`));
        },
        dispose() {
          r.get(n) === u && w(u);
        },
      }
    );
  };
  try {
    if (!Reflect.defineProperty(d, "registerSurface", { configurable: !0, enumerable: !1, value: f }))
      return !1;
  } catch {
    return !1;
  }
  let p = () => {
    o = !0;
    for (let e of r.values()) w(e);
    (m.disconnect(),
      document.removeEventListener(e.requestEvent, _),
      document.removeEventListener(e.removeEvent, p),
      document.removeEventListener(e.availableEvent, v),
      Reflect.getOwnPropertyDescriptor(d, `registerSurface`)?.value === f &&
        Reflect.deleteProperty(d, `registerSurface`));
  };
  (document.addEventListener(e.requestEvent, _),
    document.addEventListener(e.removeEvent, p),
    document.addEventListener(e.availableEvent, v));
  let m = new MutationObserver(() => {
    for (let e of r.values()) g(e.options.element) || w(e);
  });
  return (m.observe(document, { childList: !0, subtree: !0 }), !0);
  function h() {
    try {
      let e = Reflect.get(document, `oai`);
      if (e == null || (typeof e != `object` && typeof e != `function`)) return null;
      let t = Reflect.get(e, `annotation`);
      return typeof t == `object` && t && !Reflect.has(t, `registerSurface`) ? t : null;
    } catch {
      return null;
    }
  }
  function g(e) {
    return (
      !(e instanceof HTMLIFrameElement) &&
      e.isConnected &&
      e.ownerDocument === document &&
      e.getRootNode() === document
    );
  }
  function _(t) {
    if (!(t instanceof CustomEvent) || typeof t.detail != `string` || t.detail.length > e.maxPayloadLength)
      return;
    let n;
    try {
      n = D(JSON.parse(t.detail), 6);
    } catch {
      return;
    }
    if (n == null || o) return;
    if (n.type === `list`) {
      for (let e of r.values()) g(e.options.element) && T(e, `registered`);
      return;
    }
    if (n.type === `cancel` || n.type === `clear`) {
      if ((b(), x(), n.type === `clear`))
        for (let e of r.values()) S(e, { hoveredId: null, selectedId: null });
      return;
    }
    let i = t.target instanceof HTMLElement ? r.get(t.target) : null;
    if (i != null && g(i.options.element)) {
      if (n.type === `probe`) {
        T(i, `registered`);
        return;
      }
      if (n.registrationId === i.id) {
        if (n.type === `render`) {
          ee(n.hoveredId) && ee(n.selectedId) && S(i, { hoveredId: n.hoveredId, selectedId: n.selectedId });
          return;
        }
        n.type !== `hit-test` ||
          typeof n.requestId != `string` ||
          n.requestId.length > 128 ||
          typeof n.x != `number` ||
          !Number.isFinite(n.x) ||
          typeof n.y != `number` ||
          !Number.isFinite(n.y) ||
          (x(),
          (a = {
            registration: i,
            requestId: n.requestId,
            x: n.x,
            y: n.y,
            deadline: performance.now() + e.deadlineMs,
            timer: setTimeout(x, e.deadlineMs),
          }),
          v());
      }
    }
  }
  function v() {
    if (i != null || a == null || Reflect.getOwnPropertyDescriptor(document, u) != null) return;
    let e = a;
    ((a = null), clearTimeout(e.timer));
    let { registration: t } = e,
      n = e.deadline - performance.now();
    if (n <= 0) {
      T(t, `result`, e.requestId);
      return;
    }
    if (!Reflect.defineProperty(document, u, { configurable: !0, value: c })) {
      T(t, `result`, e.requestId);
      return;
    }
    let r = {
      registration: t,
      requestId: e.requestId,
      controller: new AbortController(),
      timer: setTimeout(b, n),
      deadline: e.deadline,
      answered: !1,
    };
    i = r;
    try {
      let n = t.options.hitTest({ clientX: e.x, clientY: e.y, signal: r.controller.signal });
      Promise.resolve(n).then(
        (e) => y(r, e),
        () => y(r, void 0),
      );
    } catch {
      y(r, void 0);
    }
  }
  function y(t, n) {
    (clearTimeout(t.timer),
      i === t &&
        (performance.now() >= t.deadline && b(),
        (i = null),
        Reflect.getOwnPropertyDescriptor(document, u)?.value === c && Reflect.deleteProperty(document, u),
        t.answered
          ? a == null
            ? !o &&
              r.get(t.registration.options.element) === t.registration &&
              T(t.registration, `invalidated`)
            : v()
          : ((t.answered = !0), T(t.registration, `result`, t.requestId, O(n)), v()),
        document.dispatchEvent(new Event(e.availableEvent))));
  }
  function b() {
    i == null ||
      i.answered ||
      ((i.answered = !0),
      clearTimeout(i.timer),
      i.controller.abort(),
      T(i.registration, `result`, i.requestId));
  }
  function x() {
    if (a == null) return;
    let e = a;
    ((a = null), clearTimeout(e.timer), T(e.registration, `result`, e.requestId));
  }
  function S(e, t) {
    let n = e.options.renderSelection;
    if (!(
      n == null ||
      (e.renderFailed && (t.hoveredId != null || t.selectedId != null)) ||
      (e.selection.hoveredId === t.hoveredId && e.selection.selectedId === t.selectedId)
    )) {
      e.selection = t;
      try {
        let r = n({ ...t });
        r != null && Promise.resolve(r).catch(() => C(e));
      } catch {
        C(e);
      }
    }
  }
  function C(e) {
    e.renderFailed ||
      ((e.renderFailed = !0), S(e, { hoveredId: null, selectedId: null }), T(e, `rendering-failed`));
  }
  function w(e) {
    (r.delete(e.options.element),
      i?.registration === e && b(),
      a?.registration === e && x(),
      S(e, { hoveredId: null, selectedId: null }),
      T(e, `disposed`));
  }
  function T(n, r, i, a) {
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
  function E(t) {
    return (
      typeof t == `string` &&
      t.length > 0 &&
      t.length <= e.maxIdLength &&
      /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(t)
    );
  }
  function ee(e) {
    return e === null || E(e);
  }
  function D(e, t) {
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
  function O(t) {
    if (t === null) return null;
    try {
      let n = D(t, 5);
      if (n == null || !E(n.id)) return;
      let r = { id: n.id };
      if (
        (typeof n.name == `string` &&
          n.name.trim().length > 0 &&
          n.name.length <= 128 &&
          /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(n.name) &&
          (r.name = n.name),
        typeof n.role == `string` && n.role.length <= e.maxRoleLength && l.test(n.role) && (r.role = n.role),
        n.rect !== void 0)
      ) {
        let e = D(n.rect, 4);
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
      let i = D(n.metadata, e.metadataLimits.maxKeys);
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
var Sf,
  Cf = o(() => {
    (Wo(),
      (Sf = ya()
        .min(1)
        .max(128)
        .regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)));
  });
function wf(e) {
  let t = Ef.safeParse(e);
  return t.success ? t.data : void 0;
}
var Tf,
  Ef,
  Df,
  Of,
  kf = o(() => {
    (Wo(),
      ts(),
      Cf(),
      (Tf = {
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
        metadataLimits: Yo,
      }),
      (Ef = ya().max(Tf.maxRoleLength).regex(new RegExp(Tf.rolePattern))),
      (Df = Da({
        id: Sf,
        name: wa().optional(),
        role: wa().optional(),
        metadata: wa().optional(),
        rect: Da({ x: ba(), y: ba(), width: ba().positive(), height: ba().positive() }).optional(),
      })),
      (Of = Da({
        type: Na([`registered`, `invalidated`, `disposed`, `rendering-failed`, `result`]),
        registrationId: Sf,
        requestId: ya().max(128).optional(),
        customRendering: Sa().optional(),
        hit: Df.nullable().optional(),
      })));
  });
(kf(), Js());
function Af(e, t, n, r) {
  let i = !0,
    a = jf(() => i, e, t, n, r);
  if (a == null) return null;
  let o = !1;
  try {
    o =
      d.contextBridge.executeInMainWorld({
        func: xf,
        args: [
          Tf,
          (e) => {
            i && n(e, !1);
          },
        ],
      }) === !0;
  } catch {}
  return () => {
    ((i = !1), o && document.dispatchEvent(new Event(Tf.removeEvent)), a());
  };
}
function jf(e, t, n, r, i) {
  return d.contextBridge.executeInMainWorld({
    func: bf,
    args: [
      Yo,
      240,
      Ls,
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
        let o = Ko(t);
        o != null && Object.keys(o).length > 0 && r(`metadata`, a && i());
      },
    ],
  });
}
Js();
var Mf = `oai-annotation-container`,
  Nf = `oai-annotation-container-text`,
  Pf = `oai-annotation-metadata`,
  Ff = `oai-annotatable`,
  If = `codex:annotation-shadow-root-attached`,
  Lf = {
    containers: null,
    controls: { feature: `custom-controls` },
    surfaces: { feature: `registered-surface` },
    metadata: { feature: `metadata` },
    "metadata-with-targets": null,
    "mode-toggle": { feature: `mode-toggle` },
    requests: { feature: `requests`, includesPrompt: !1 },
    "requests-with-prompts": { feature: `requests`, includesPrompt: !0 },
  },
  Rf = { childList: !0, subtree: !0, attributes: !0, attributeFilter: [Mf, Nf, Pf, Ff] };
function zf(e) {
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
        !e.isConnected || e.ownerDocument !== document || (!e.hasAttribute(Mf) && !e.hasAttribute(Nf))
          ? r.delete(e)
          : (o = l({ feature: e.hasAttribute(Nf) ? `text-containers` : `selectable-containers` }) || o);
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
      (e.hasAttribute(Mf) || e.hasAttribute(Nf)) && r.add(e);
      let t =
        e instanceof HTMLElement &&
        e !== document.body &&
        e !== document.documentElement &&
        e.hasAttribute(Ff)
          ? qo(e.getAttribute(Pf))
          : void 0;
      t != null && Object.keys(t).length > 0 ? i.add(e) : i.delete(e);
      let n = e.shadowRoot;
      if (n != null && !a.has(n)) {
        let e = new MutationObserver(m);
        (e.observe(n, Rf), a.set(n, e), n.querySelectorAll(`*`).forEach(f));
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
  (g.observe(document, Rf), document.addEventListener(If, h));
  let _ = d.contextBridge.executeInMainWorld({ func: Bf, args: [If] });
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
        let r = Lf[e],
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
          document.removeEventListener(If, h),
          window.removeEventListener(`pageshow`, v),
          t.clear(),
          (n.length = 0),
          c());
      },
    }
  );
}
function Bf(e) {
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
var Vf = function (e, t, n) {
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
  Hf = s((e) => {
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
    function E(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function ee(e, t) {
      return E(e.type, t, e.props);
    }
    function D(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function O(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var te = /\/+/g;
    function ne(e, t) {
      return typeof e == `object` && e && e.key != null ? O(`` + e.key) : t.toString(36);
    }
    function re(e) {
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
    function k(e, r, i, a, o) {
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
                return ((c = e._init), k(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + ne(e, 0) : a),
          S(o)
            ? ((i = ``),
              c != null && (i = c.replace(te, `$&/`) + `/`),
              k(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (D(o) &&
                (o = ee(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key) ? `` : (`` + o.key).replace(te, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e)) for (var u = 0; u < e.length; u++) ((a = e[u]), (s = l + ne(a, u)), (c += k(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + ne(a, u++)), (c += k(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return k(re(e), r, i, a, o);
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
    function A(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        k(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function j(e) {
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
    var ie =
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
      ae = {
        map: A,
        forEach: function (e, t, n) {
          A(
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
            A(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            A(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!D(e)) throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = ae),
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
        return E(e.type, i, r);
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
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = D),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: j };
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
          (i !== null && i(n, r), typeof r == `object` && r && typeof r.then == `function` && r.then(C, ie));
        } catch (e) {
          ie(e);
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
  Uf = s((e, t) => {
    t.exports = Hf();
  }),
  Wf = s((e) => {
    var t = Uf();
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
  Gf = s((e, t) => {
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
    (n(), (t.exports = Wf()));
  }),
  Kf = s((e) => {
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
        if (n(c) !== null) ((m = !0), S || ((S = !0), D()));
        else {
          var t = n(l);
          t !== null && ne(x, t.startTime - e);
        }
      }
    }
    var S = !1,
      C = -1,
      w = 5,
      T = -1;
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function ee() {
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
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
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
                  (u !== null && ne(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? D() : (S = !1);
        }
      }
    }
    var D;
    if (typeof y == `function`)
      D = function () {
        y(ee);
      };
    else if (typeof MessageChannel < `u`) {
      var O = new MessageChannel(),
        te = O.port2;
      ((O.port1.onmessage = ee),
        (D = function () {
          te.postMessage(null);
        }));
    } else
      D = function () {
        _(ee, 0);
      };
    function ne(t, n) {
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
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), ne(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), D()))),
          r
        );
      }),
      (e.unstable_shouldYield = E),
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
  qf = s((e, t) => {
    t.exports = Kf();
  }),
  Jf = s((e) => {
    var t = qf(),
      n = Uf(),
      r = Gf();
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
      E = Symbol.for(`react.activity`),
      ee = Symbol.for(`react.memo_cache_sentinel`),
      D = Symbol.iterator;
    function O(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (D && e[D]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var te = Symbol.for(`react.client.reference`);
    function ne(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === te ? null : e.displayName || e.name || null;
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
        case E:
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
            return ((t = e.displayName || null), t === null ? ne(e.type) || `Memo` : t);
          case T:
            ((t = e._payload), (e = e._init));
            try {
              return ne(e(t));
            } catch {}
        }
      return null;
    }
    var re = Array.isArray,
      k = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      A = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      j = { pending: !1, data: null, method: null, action: null },
      ie = [],
      ae = -1;
    function oe(e) {
      return { current: e };
    }
    function M(e) {
      0 > ae || ((e.current = ie[ae]), (ie[ae] = null), ae--);
    }
    function se(e, t) {
      (ae++, (ie[ae] = e.current), (e.current = t));
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
      (le.current === e && (M(ce), M(le)), de.current === e && (M(de), (rp._currentValue = j)));
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
    function N(e, t) {
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
    function xe(e) {
      try {
        var t = ``,
          n = null;
        do ((t += N(e, n)), (n = e), (e = e.return));
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
    var Se = Object.prototype.hasOwnProperty,
      Ce = t.unstable_scheduleCallback,
      we = t.unstable_cancelCallback,
      Te = t.unstable_shouldYield,
      Ee = t.unstable_requestPaint,
      P = t.unstable_now,
      De = t.unstable_getCurrentPriorityLevel,
      Oe = t.unstable_ImmediatePriority,
      F = t.unstable_UserBlockingPriority,
      ke = t.unstable_NormalPriority,
      I = t.unstable_LowPriority,
      Ae = t.unstable_IdlePriority,
      je = t.log,
      Me = t.unstable_setDisableYieldValue,
      Ne = null,
      Pe = null;
    function Fe(e) {
      if ((typeof je == `function` && Me(e), Pe && typeof Pe.setStrictMode == `function`))
        try {
          Pe.setStrictMode(Ne, e);
        } catch {}
    }
    var Ie = Math.clz32 ? Math.clz32 : ze,
      Le = Math.log,
      Re = Math.LN2;
    function ze(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Le(e) / Re) | 0)) | 0);
    }
    var Be = 256,
      Ve = 262144,
      He = 4194304;
    function Ue(e) {
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
    function We(e, t, n) {
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
            s === 0 ? (o === 0 ? n || ((n = r & ~e), n !== 0 && (i = Ue(n))) : (i = Ue(o))) : (i = Ue(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Ue(n))) : (i = Ue(o)))
              : (i = Ue(r))),
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
    function Ge(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ke(e, t) {
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
    function qe() {
      var e = He;
      return ((He <<= 1), !(He & 62914560) && (He = 4194304), e);
    }
    function Je(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ye(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Xe(e, t, n, r, i, a) {
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
        var u = 31 - Ie(n),
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
      (r !== 0 && Ze(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function Ze(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ie(t);
      ((e.entangledLanes |= t), (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function Qe(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Ie(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function $e(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : et(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function et(e) {
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
    function tt(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function nt() {
      var e = A.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : vp(e.type)) : e;
    }
    function rt(e, t) {
      var n = A.p;
      try {
        return ((A.p = e), t());
      } finally {
        A.p = n;
      }
    }
    var it = Math.random().toString(36).slice(2),
      at = `__reactFiber$` + it,
      ot = `__reactProps$` + it,
      st = `__reactContainer$` + it,
      ct = `__reactEvents$` + it,
      lt = `__reactListeners$` + it,
      ut = `__reactHandles$` + it,
      dt = `__reactResources$` + it,
      ft = `__reactMarker$` + it;
    function pt(e) {
      (delete e[at], delete e[ot], delete e[ct], delete e[lt], delete e[ut]);
    }
    function mt(e) {
      var t = e[at];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[st] || n[at])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = mf(e); e !== null;) {
              if ((n = e[at])) return n;
              e = mf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function ht(e) {
      if ((e = e[at] || e[st])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function gt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function _t(e) {
      var t = e[dt];
      return ((t ||= e[dt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function vt(e) {
      e[ft] = !0;
    }
    var yt = new Set(),
      bt = {};
    function xt(e, t) {
      (St(e, t), St(e + `Capture`, t));
    }
    function St(e, t) {
      for (bt[e] = t, e = 0; e < t.length; e++) yt.add(t[e]);
    }
    var Ct = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      wt = {},
      Tt = {};
    function Et(e) {
      return Se.call(Tt, e) ? !0 : Se.call(wt, e) ? !1 : Ct.test(e) ? (Tt[e] = !0) : ((wt[e] = !0), !1);
    }
    function Dt(e, t, n) {
      if (Et(t)) {
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
    function At(e) {
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
    function jt(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Mt(e, t, n) {
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
    function Nt(e) {
      if (!e._valueTracker) {
        var t = jt(e) ? `checked` : `value`;
        e._valueTracker = Mt(e, t, `` + e[t]);
      }
    }
    function Pt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = jt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function Ft(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var It = /[\n"\\]/g;
    function Lt(e) {
      return e.replace(It, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Rt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + At(t))
            : e.value !== `` + At(t) && (e.value = `` + At(t)),
        t == null ? (n == null ? r != null && e.removeAttribute(`value`) : Bt(e, o, At(n))) : Bt(e, o, At(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + At(s))
          : e.removeAttribute(`name`));
    }
    function zt(e, t, n, r, i, a, o, s) {
      if (
        (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Nt(e);
          return;
        }
        ((n = n == null ? `` : `` + At(n)),
          (t = t == null ? n : `` + At(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o),
        Nt(e));
    }
    function Bt(e, t, n) {
      (t === `number` && Ft(e.ownerDocument) === e) || e.defaultValue === `` + n || (e.defaultValue = `` + n);
    }
    function Vt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + At(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ht(e, t, n) {
      if (t != null && ((t = `` + At(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + At(n);
    }
    function Ut(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (re(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = At(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Nt(e));
    }
    function Wt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Kt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Gt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function qt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? (e.cssFloat = ``) : (e[r] = ``));
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Kt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Kt(e, o, t[o]);
    }
    function Jt(e) {
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
    var Yt = new Map([
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
      Xt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Zt(e) {
      return Xt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function Qt() {}
    var $t = null;
    function en(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var tn = null,
      nn = null;
    function rn(e) {
      var t = ht(e);
      if (t && (e = t.stateNode)) {
        var n = e[ot] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Rt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Lt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ot] || null;
                  if (!a) throw Error(i(90));
                  Rt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Pt(r));
            }
            break a;
          case `textarea`:
            Ht(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Vt(e, !!n.multiple, t, !1));
        }
      }
    }
    var an = !1;
    function on(e, t, n) {
      if (an) return e(t, n);
      an = !0;
      try {
        return e(t);
      } finally {
        if (
          ((an = !1),
          (tn !== null || nn !== null) && (Cu(), tn && ((t = tn), (e = nn), (nn = tn = null), rn(t), e)))
        )
          for (t = 0; t < e.length; t++) rn(e[t]);
      }
    }
    function sn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ot] || null;
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
    var cn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0),
      ln = !1;
    if (cn)
      try {
        var un = {};
        (Object.defineProperty(un, "passive", {
          get: function () {
            ln = !0;
          },
        }),
          window.addEventListener(`test`, un, un),
          window.removeEventListener(`test`, un, un));
      } catch {
        ln = !1;
      }
    var dn = null,
      fn = null,
      pn = null;
    function mn() {
      if (pn) return pn;
      var e,
        t = fn,
        n = t.length,
        r,
        i = `value` in dn ? dn.value : dn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (pn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function hn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function gn() {
      return !0;
    }
    function _n() {
      return !1;
    }
    function vn(e) {
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
            ? gn
            : _n),
          (this.isPropagationStopped = _n),
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
              (this.isDefaultPrevented = gn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = gn));
          },
          persist: function () {},
          isPersistent: gn,
        }),
        t
      );
    }
    var yn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      bn = vn(yn),
      xn = f({}, yn, { view: 0, detail: 0 }),
      Sn = vn(xn),
      Cn,
      wn,
      Tn,
      En = f({}, xn, {
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
        getModifierState: Ln,
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
            : (e !== Tn &&
                (Tn && e.type === `mousemove`
                  ? ((Cn = e.screenX - Tn.screenX), (wn = e.screenY - Tn.screenY))
                  : (wn = Cn = 0),
                (Tn = e)),
              Cn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : wn;
        },
      }),
      Dn = vn(En),
      On = vn(f({}, En, { dataTransfer: 0 })),
      kn = vn(f({}, xn, { relatedTarget: 0 })),
      An = vn(f({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      jn = vn(
        f({}, yn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      Mn = vn(f({}, yn, { data: 0 })),
      Nn = {
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
      Pn = {
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
      Fn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function In(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Fn[e]) ? !!t[e] : !1;
    }
    function Ln() {
      return In;
    }
    var Rn = vn(
        f({}, xn, {
          key: function (e) {
            if (e.key) {
              var t = Nn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = hn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Pn[e.keyCode] || `Unidentified`
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
          getModifierState: Ln,
          charCode: function (e) {
            return e.type === `keypress` ? hn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress` ? hn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
        }),
      ),
      zn = vn(
        f({}, En, {
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
      Bn = vn(
        f({}, xn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Ln,
        }),
      ),
      Vn = vn(f({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = vn(
        f({}, En, {
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
      Un = vn(f({}, yn, { newState: 0, oldState: 0 })),
      Wn = [9, 13, 27, 32],
      Gn = cn && `CompositionEvent` in window,
      Kn = null;
    cn && `documentMode` in document && (Kn = document.documentMode);
    var qn = cn && `TextEvent` in window && !Kn,
      Jn = cn && (!Gn || (Kn && 8 < Kn && 11 >= Kn)),
      Yn = ` `,
      Xn = !1;
    function Zn(e, t) {
      switch (e) {
        case `keyup`:
          return Wn.indexOf(t.keyCode) !== -1;
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
    function Qn(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var $n = !1;
    function er(e, t) {
      switch (e) {
        case `compositionend`:
          return Qn(t);
        case `keypress`:
          return t.which === 32 ? ((Xn = !0), Yn) : null;
        case `textInput`:
          return ((e = t.data), e === Yn && Xn ? null : e);
        default:
          return null;
      }
    }
    function tr(e, t) {
      if ($n)
        return e === `compositionend` || (!Gn && Zn(e, t))
          ? ((e = mn()), (pn = fn = dn = null), ($n = !1), e)
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
          return Jn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var nr = {
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
    function rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!nr[e.type] : t === `textarea`;
    }
    function ir(e, t, n, r) {
      (tn ? (nn ? nn.push(r) : (nn = [r])) : (tn = r),
        (t = kd(t, `onChange`)),
        0 < t.length && ((n = new bn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var ar = null,
      or = null;
    function sr(e) {
      Sd(e, 0);
    }
    function cr(e) {
      if (Pt(gt(e))) return e;
    }
    function lr(e, t) {
      if (e === `change`) return t;
    }
    var ur = !1;
    if (cn) {
      var dr;
      if (cn) {
        var fr = `oninput` in document;
        if (!fr) {
          var pr = document.createElement(`div`);
          (pr.setAttribute(`oninput`, `return;`), (fr = typeof pr.oninput == `function`));
        }
        dr = fr;
      } else dr = !1;
      ur = dr && (!document.documentMode || 9 < document.documentMode);
    }
    function mr() {
      ar && (ar.detachEvent(`onpropertychange`, hr), (or = ar = null));
    }
    function hr(e) {
      if (e.propertyName === `value` && cr(or)) {
        var t = [];
        (ir(t, or, e, en(e)), on(sr, t));
      }
    }
    function gr(e, t, n) {
      e === `focusin`
        ? (mr(), (ar = t), (or = n), ar.attachEvent(`onpropertychange`, hr))
        : e === `focusout` && mr();
    }
    function _r(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return cr(or);
    }
    function vr(e, t) {
      if (e === `click`) return cr(t);
    }
    function yr(e, t) {
      if (e === `input` || e === `change`) return cr(t);
    }
    function br(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var xr = typeof Object.is == `function` ? Object.is : br;
    function Sr(e, t) {
      if (xr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Se.call(t, i) || !xr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Cr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function wr(e, t) {
      var n = Cr(e);
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
        n = Cr(n);
      }
    }
    function Tr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Tr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Er(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Ft(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ft(e.document);
      }
      return t;
    }
    function Dr(e) {
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
    var Or = cn && `documentMode` in document && 11 >= document.documentMode,
      kr = null,
      Ar = null,
      jr = null,
      Mr = !1;
    function Nr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Mr ||
        kr == null ||
        kr !== Ft(r) ||
        ((r = kr),
        `selectionStart` in r && Dr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (jr && Sr(jr, r)) ||
          ((jr = r),
          (r = kd(Ar, `onSelect`)),
          0 < r.length &&
            ((t = new bn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = kr))));
    }
    function Pr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Fr = {
        animationend: Pr(`Animation`, `AnimationEnd`),
        animationiteration: Pr(`Animation`, `AnimationIteration`),
        animationstart: Pr(`Animation`, `AnimationStart`),
        transitionrun: Pr(`Transition`, `TransitionRun`),
        transitionstart: Pr(`Transition`, `TransitionStart`),
        transitioncancel: Pr(`Transition`, `TransitionCancel`),
        transitionend: Pr(`Transition`, `TransitionEnd`),
      },
      Ir = {},
      Lr = {};
    cn &&
      ((Lr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Fr.animationend.animation,
        delete Fr.animationiteration.animation,
        delete Fr.animationstart.animation),
      `TransitionEvent` in window || delete Fr.transitionend.transition);
    function Rr(e) {
      if (Ir[e]) return Ir[e];
      if (!Fr[e]) return e;
      var t = Fr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Lr) return (Ir[e] = t[n]);
      return e;
    }
    var zr = Rr(`animationend`),
      Br = Rr(`animationiteration`),
      Vr = Rr(`animationstart`),
      Hr = Rr(`transitionrun`),
      Ur = Rr(`transitionstart`),
      Wr = Rr(`transitioncancel`),
      Gr = Rr(`transitionend`),
      Kr = new Map(),
      qr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    qr.push(`scrollEnd`);
    function Jr(e, t) {
      (Kr.set(e, t), xt(t, [e]));
    }
    var Yr =
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
      Xr = [],
      Zr = 0,
      Qr = 0;
    function $r() {
      for (var e = Zr, t = (Qr = Zr = 0); t < e;) {
        var n = Xr[t];
        Xr[t++] = null;
        var r = Xr[t];
        Xr[t++] = null;
        var i = Xr[t];
        Xr[t++] = null;
        var a = Xr[t];
        if (((Xr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && ri(n, i, a);
      }
    }
    function ei(e, t, n, r) {
      ((Xr[Zr++] = e),
        (Xr[Zr++] = t),
        (Xr[Zr++] = n),
        (Xr[Zr++] = r),
        (Qr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ti(e, t, n, r) {
      return (ei(e, t, n, r), ii(e));
    }
    function ni(e, t) {
      return (ei(e, null, null, t), ii(e));
    }
    function ri(e, t, n) {
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
            ((i = 31 - Ie(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ii(e) {
      if (50 < mu) throw ((mu = 0), (hu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var ai = {};
    function oi(e, t, n, r) {
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
    function si(e, t, n, r) {
      return new oi(e, t, n, r);
    }
    function ci(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function li(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = si(e.tag, t, e.key, e.mode)),
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
    function ui(e, t) {
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
    function di(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) ci(e) && (s = 1);
      else if (typeof e == `string`)
        s = Yf(e, n, ce.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case E:
            return ((e = si(31, n, t, a)), (e.elementType = E), (e.lanes = o), e);
          case g:
            return fi(n.children, a, o, t);
          case _:
            ((s = 8), (a |= 24));
            break;
          case v:
            return ((e = si(12, n, t, a | 2)), (e.elementType = v), (e.lanes = o), e);
          case S:
            return ((e = si(13, n, t, a)), (e.elementType = S), (e.lanes = o), e);
          case C:
            return ((e = si(19, n, t, a)), (e.elementType = C), (e.lanes = o), e);
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
      return ((t = si(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function fi(e, t, n, r) {
      return ((e = si(7, e, r, t)), (e.lanes = n), e);
    }
    function pi(e, t, n) {
      return ((e = si(6, e, null, t)), (e.lanes = n), e);
    }
    function mi(e) {
      var t = si(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function hi(e, t, n) {
      return (
        (t = si(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var gi = new WeakMap();
    function _i(e, t) {
      if (typeof e == `object` && e) {
        var n = gi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: xe(t) }), gi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: xe(t) };
    }
    var vi = [],
      yi = 0,
      bi = null,
      xi = 0,
      Si = [],
      Ci = 0,
      wi = null,
      Ti = 1,
      Ei = ``;
    function Di(e, t) {
      ((vi[yi++] = xi), (vi[yi++] = bi), (bi = e), (xi = t));
    }
    function Oi(e, t, n) {
      ((Si[Ci++] = Ti), (Si[Ci++] = Ei), (Si[Ci++] = wi), (wi = e));
      var r = Ti;
      e = Ei;
      var i = 32 - Ie(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ie(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Ti = (1 << (32 - Ie(t) + i)) | (n << i) | r),
          (Ei = a + e));
      } else ((Ti = (1 << a) | (n << i) | r), (Ei = e));
    }
    function ki(e) {
      e.return !== null && (Di(e, 1), Oi(e, 1, 0));
    }
    function Ai(e) {
      for (; e === bi;) ((bi = vi[--yi]), (vi[yi] = null), (xi = vi[--yi]), (vi[yi] = null));
      for (; e === wi;)
        ((wi = Si[--Ci]),
          (Si[Ci] = null),
          (Ei = Si[--Ci]),
          (Si[Ci] = null),
          (Ti = Si[--Ci]),
          (Si[Ci] = null));
    }
    function ji(e, t) {
      ((Si[Ci++] = Ti), (Si[Ci++] = Ei), (Si[Ci++] = wi), (Ti = t.id), (Ei = t.overflow), (wi = e));
    }
    var Mi = null,
      Ni = null,
      L = !1,
      Pi = null,
      Fi = !1,
      Ii = Error(i(519));
    function Li(e) {
      throw (
        Ui(
          _i(
            Error(
              i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``),
            ),
            e,
          ),
        ),
        Ii
      );
    }
    function Ri(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[at] = e), (t[ot] = r), n)) {
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
          (K(`invalid`, t), zt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          K(`invalid`, t);
          break;
        case `textarea`:
          (K(`invalid`, t), Ut(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Fd(t.textContent, n)
          ? (r.popover != null && (K(`beforetoggle`, t), K(`toggle`, t)),
            r.onScroll != null && K(`scroll`, t),
            r.onScrollEnd != null && K(`scrollend`, t),
            r.onClick != null && (t.onclick = Qt),
            (t = !0))
          : (t = !1),
        t || Li(e, !0));
    }
    function zi(e) {
      for (Mi = e.return; Mi;)
        switch (Mi.tag) {
          case 5:
          case 31:
          case 13:
            Fi = !1;
            return;
          case 27:
          case 3:
            Fi = !0;
            return;
          default:
            Mi = Mi.return;
        }
    }
    function Bi(e) {
      if (e !== Mi) return !1;
      if (!L) return (zi(e), (L = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Kd(e.type, e.memoizedProps))),
          (n = !n)),
        n && Ni && Li(e),
        zi(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        Ni = pf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(317));
        Ni = pf(e);
      } else
        t === 27
          ? ((t = Ni), ef(e.type) ? ((e = ff), (ff = null), (Ni = e)) : (Ni = t))
          : (Ni = Mi ? df(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Vi() {
      ((Ni = Mi = null), (L = !1));
    }
    function Hi() {
      var e = Pi;
      return (e !== null && (eu === null ? (eu = e) : eu.push.apply(eu, e), (Pi = null)), e);
    }
    function Ui(e) {
      Pi === null ? (Pi = [e]) : Pi.push(e);
    }
    var Wi = oe(null),
      Gi = null,
      Ki = null;
    function qi(e, t, n) {
      (se(Wi, t._currentValue), (t._currentValue = n));
    }
    function Ji(e) {
      ((e._currentValue = Wi.current), M(Wi));
    }
    function Yi(e, t, n) {
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
    function Xi(e, t, n, r) {
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
                  Yi(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n), (o = s.alternate), o !== null && (o.lanes |= n), Yi(s, n, e), (s = null));
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
    function Zi(e, t, n, r) {
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
            xr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === de.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [rp]) : e.push(rp));
        }
        a = a.return;
      }
      (e !== null && Xi(t, e, n, r), (t.flags |= 262144));
    }
    function Qi(e) {
      for (e = e.firstContext; e !== null;) {
        if (!xr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function $i(e) {
      ((Gi = e), (Ki = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ea(e) {
      return na(Gi, e);
    }
    function ta(e, t) {
      return (Gi === null && $i(e), na(e, t));
    }
    function na(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Ki === null)) {
        if (e === null) throw Error(i(308));
        ((Ki = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else Ki = Ki.next = t;
      return n;
    }
    var ra =
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
      ia = t.unstable_scheduleCallback,
      aa = t.unstable_NormalPriority,
      oa = {
        $$typeof: b,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function sa() {
      return { controller: new ra(), data: new Map(), refCount: 0 };
    }
    function ca(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ia(aa, function () {
            e.controller.abort();
          }));
    }
    var la = null,
      ua = 0,
      da = 0,
      fa = null;
    function pa(e, t) {
      if (la === null) {
        var n = (la = []);
        ((ua = 0),
          (da = md()),
          (fa = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ua++, t.then(ma, ma), t);
    }
    function ma() {
      if (--ua === 0 && la !== null) {
        fa !== null && (fa.status = `fulfilled`);
        var e = la;
        ((la = null), (da = 0), (fa = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ha(e, t) {
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
    var ga = k.S;
    k.S = function (e, t) {
      ((ru = P()),
        typeof t == `object` && t && typeof t.then == `function` && pa(e, t),
        ga !== null && ga(e, t));
    };
    var _a = oe(null);
    function va() {
      var e = _a.current;
      return e === null ? H.pooledCache : e;
    }
    function ya(e, t) {
      t === null ? se(_a, _a.current) : se(_a, t.pool);
    }
    function ba() {
      var e = va();
      return e === null ? null : { parent: oa._currentValue, pool: e };
    }
    var xa = Error(i(460)),
      Sa = Error(i(474)),
      Ca = Error(i(542)),
      wa = { then: function () {} };
    function Ta(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ea(e, t, n) {
      switch (((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(Qt, Qt), (t = n)), t.status)) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Aa(e), e);
        default:
          if (typeof t.status == `string`) t.then(Qt, Qt);
          else {
            if (((e = H), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
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
              throw ((e = t.reason), Aa(e), e);
          }
          throw ((Oa = t), xa);
      }
    }
    function Da(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Oa = e), xa) : e;
      }
    }
    var Oa = null;
    function ka() {
      if (Oa === null) throw Error(i(459));
      var e = Oa;
      return ((Oa = null), e);
    }
    function Aa(e) {
      if (e === xa || e === Ca) throw Error(i(483));
    }
    var ja = null,
      Ma = 0;
    function Na(e) {
      var t = Ma;
      return ((Ma += 1), ja === null && (ja = []), Ea(ja, e, t));
    }
    function Pa(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Fa(e, t) {
      throw t.$$typeof === p
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
    }
    function Ia(e) {
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
        return ((e = li(e, t)), (e.index = 0), (e.sibling = null), e);
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
          ? ((t = pi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === g
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i || (typeof i == `object` && i && i.$$typeof === T && Da(i) === t.type))
            ? ((t = a(t, n.props)), Pa(t, n), (t.return = e), t)
            : ((t = di(n.type, n.key, n.props, null, e.mode, r)), Pa(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = hi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = fi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = pi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case m:
              return ((n = di(t.type, t.key, t.props, null, e.mode, n)), Pa(n, t), (n.return = e), n);
            case h:
              return ((t = hi(t, e.mode, n)), (t.return = e), t);
            case T:
              return ((t = Da(t)), f(e, t, n));
          }
          if (re(t) || O(t)) return ((t = fi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Na(t), n);
          if (t.$$typeof === b) return f(e, ta(e, t), n);
          Fa(e, t);
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
              return ((n = Da(n)), p(e, t, n, r));
          }
          if (re(n) || O(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Na(n), r);
          if (n.$$typeof === b) return p(e, t, ta(e, n), r);
          Fa(e, n);
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
              return ((r = Da(r)), _(e, t, n, r, i));
          }
          if (re(r) || O(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return _(e, t, n, Na(r), i);
          if (r.$$typeof === b) return _(e, t, n, ta(t, r), i);
          Fa(t, r);
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
        if (m === s.length) return (n(i, d), L && Di(i, m), l);
        if (d === null) {
          for (; m < s.length; m++)
            ((d = f(i, s[m], c)),
              d !== null && ((a = o(d, a, m)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (L && Di(i, m), l);
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
          L && Di(i, m),
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
        if (v.done) return (n(a, m), L && Di(a, h), u);
        if (m === null) {
          for (; !v.done; h++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, h)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (L && Di(a, h), u);
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
          L && Di(a, h),
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
                      (typeof l == `object` && l && l.$$typeof === T && Da(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), Pa(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === g
                  ? ((c = fi(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = di(o.type, o.key, o.props, null, e.mode, c)), Pa(c, o), (c.return = e), (e = c));
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
                ((c = hi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case T:
              return ((o = Da(o)), x(e, r, o, c));
          }
          if (re(o)) return v(e, r, o, c);
          if (O(o)) {
            if (((l = O(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return x(e, r, Na(o), c);
          if (o.$$typeof === b) return x(e, r, ta(e, o), c);
          Fa(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = pi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ma = 0;
          var i = x(e, t, n, r);
          return ((ja = null), i);
        } catch (t) {
          if (t === xa || t === Ca) throw t;
          var a = si(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var La = Ia(!0),
      Ra = Ia(!1),
      za = !1;
    function Ba(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Va(e, t) {
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
    function Ha(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ua(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), V & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ii(e)),
          ri(e, null, n),
          t
        );
      }
      return (ei(e, r, t, n), ii(e));
    }
    function Wa(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Qe(e, n));
      }
    }
    function Ga(e, t) {
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
    var Ka = !1;
    function qa() {
      if (Ka) {
        var e = fa;
        if (e !== null) throw e;
      }
    }
    function Ja(e, t, n, r) {
      Ka = !1;
      var i = e.updateQueue;
      za = !1;
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
            (p !== 0 && p === da && (Ka = !0),
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
                  za = !0;
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
          (Jl |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ya(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Xa(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ya(n[e], t);
    }
    var Za = oe(null),
      Qa = oe(0);
    function $a(e, t) {
      ((e = Kl), se(Qa, e), se(Za, t), (Kl = e | t.baseLanes));
    }
    function eo() {
      (se(Qa, Kl), se(Za, Za.current));
    }
    function to() {
      ((Kl = Qa.current), M(Za), M(Qa));
    }
    var no = oe(null),
      ro = null;
    function io(e) {
      var t = e.alternate;
      (se(lo, lo.current & 1),
        se(no, e),
        ro === null && (t === null || Za.current !== null || t.memoizedState !== null) && (ro = e));
    }
    function ao(e) {
      (se(lo, lo.current), se(no, e), ro === null && (ro = e));
    }
    function oo(e) {
      e.tag === 22 ? (se(lo, lo.current), se(no, e), ro === null && (ro = e)) : so(e);
    }
    function so() {
      (se(lo, lo.current), se(no, no.current));
    }
    function co(e) {
      (M(no), ro === e && (ro = null), M(lo));
    }
    var lo = oe(0);
    function uo(e) {
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
    var fo = 0,
      R = null,
      z = null,
      po = null,
      mo = !1,
      ho = !1,
      go = !1,
      _o = 0,
      vo = 0,
      yo = null,
      bo = 0;
    function xo() {
      throw Error(i(321));
    }
    function So(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!xr(e[n], t[n])) return !1;
      return !0;
    }
    function Co(e, t, n, r, i, a) {
      return (
        (fo = a),
        (R = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (k.H = e === null || e.memoizedState === null ? Bs : Vs),
        (go = !1),
        (a = n(r, i)),
        (go = !1),
        ho && (a = To(t, n, r, i)),
        wo(e),
        a
      );
    }
    function wo(e) {
      k.H = zs;
      var t = z !== null && z.next !== null;
      if (((fo = 0), (po = z = R = null), (mo = !1), (vo = 0), (yo = null), t)) throw Error(i(300));
      e === null || rc || ((e = e.dependencies), e !== null && Qi(e) && (rc = !0));
    }
    function To(e, t, n, r) {
      R = e;
      var a = 0;
      do {
        if ((ho && (yo = null), (vo = 0), (ho = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (po = z = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((k.H = Hs), (o = t(n, r)));
      } while (ho);
      return o;
    }
    function Eo() {
      var e = k.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? No(t) : t),
        (e = e.useState()[0]),
        (z === null ? null : z.memoizedState) !== e && (R.flags |= 1024),
        t
      );
    }
    function Do() {
      var e = _o !== 0;
      return ((_o = 0), e);
    }
    function Oo(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function ko(e) {
      if (mo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        mo = !1;
      }
      ((fo = 0), (po = z = R = null), (ho = !1), (vo = _o = 0), (yo = null));
    }
    function Ao() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (po === null ? (R.memoizedState = po = e) : (po = po.next = e), po);
    }
    function jo() {
      if (z === null) {
        var e = R.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = z.next;
      var t = po === null ? R.memoizedState : po.next;
      if (t !== null) ((po = t), (z = e));
      else {
        if (e === null) throw R.alternate === null ? Error(i(467)) : Error(i(310));
        ((z = e),
          (e = {
            memoizedState: z.memoizedState,
            baseState: z.baseState,
            baseQueue: z.baseQueue,
            queue: z.queue,
            next: null,
          }),
          po === null ? (R.memoizedState = po = e) : (po = po.next = e));
      }
      return po;
    }
    function Mo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function No(e) {
      var t = vo;
      return (
        (vo += 1),
        yo === null && (yo = []),
        (e = Ea(yo, e, t)),
        (t = R),
        (po === null ? t.memoizedState : po.next) === null &&
          ((t = t.alternate), (k.H = t === null || t.memoizedState === null ? Bs : Vs)),
        e
      );
    }
    function Po(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return No(e);
        if (e.$$typeof === b) return ea(e);
      }
      throw Error(i(438, String(e)));
    }
    function Fo(e) {
      var t = null,
        n = R.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = R.alternate;
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
        n === null && ((n = Mo()), (R.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ee;
      return (t.index++, n);
    }
    function Io(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Lo(e) {
      return Ro(jo(), z, e);
    }
    function Ro(e, t, n) {
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
          if (f === u.lane ? (fo & f) === f : (W & f) === f) {
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
                f === da && (d = !0));
            else if ((fo & p) === p) {
              ((u = u.next), p === da && (d = !0));
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
                (R.lanes |= p),
                (Jl |= p));
            ((f = u.action), go && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
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
              (R.lanes |= f),
              (Jl |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !xr(o, e.memoizedState) && ((rc = !0), d && ((n = fa), n !== null)))
        )
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function zo(e) {
      var t = jo(),
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
        (xr(o, t.memoizedState) || (rc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Bo(e, t, n) {
      var r = R,
        a = jo(),
        o = L;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !xr((z || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (rc = !0)),
        (a = a.queue),
        ds(Uo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (po !== null && po.memoizedState.tag & 1))
      ) {
        if (((r.flags |= 2048), os(9, { destroy: void 0 }, Ho.bind(null, r, a, n, t), null), H === null))
          throw Error(i(349));
        o || fo & 127 || Vo(r, t, n);
      }
      return n;
    }
    function Vo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = R.updateQueue),
        t === null
          ? ((t = Mo()), (R.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Ho(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Wo(t) && Go(e));
    }
    function Uo(e, t, n) {
      return n(function () {
        Wo(t) && Go(e);
      });
    }
    function Wo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !xr(e, n);
      } catch {
        return !0;
      }
    }
    function Go(e) {
      var t = ni(e, 2);
      t !== null && vu(t, e, 2);
    }
    function Ko(e) {
      var t = Ao();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), go)) {
          Fe(!0);
          try {
            n();
          } finally {
            Fe(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Io,
          lastRenderedState: e,
        }),
        t
      );
    }
    function qo(e, t, n, r) {
      return ((e.baseState = n), Ro(e, z, typeof r == `function` ? r : Io));
    }
    function Jo(e, t, n, r, a) {
      if (Is(e)) throw Error(i(485));
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
        (k.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null ? ((o.next = t.pending = o), Yo(t, o)) : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Yo(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = k.T,
          o = {};
        k.T = o;
        try {
          var s = n(i, r),
            c = k.S;
          (c !== null && c(o, s), Xo(e, t, s));
        } catch (n) {
          Qo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (k.T = a));
        }
      } else
        try {
          ((a = n(i, r)), Xo(e, t, a));
        } catch (n) {
          Qo(e, t, n);
        }
    }
    function Xo(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              Zo(e, t, n);
            },
            function (n) {
              return Qo(e, t, n);
            },
          )
        : Zo(e, t, n);
    }
    function Zo(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        $o(t),
        (e.state = n),
        (t = e.pending),
        t !== null && ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Yo(e, n))));
    }
    function Qo(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), $o(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function $o(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function es(e, t) {
      return t;
    }
    function ts(e, t) {
      if (L) {
        var n = H.formState;
        if (n !== null) {
          a: {
            var r = R;
            if (L) {
              if (Ni) {
                b: {
                  for (var i = Ni, a = Fi; i.nodeType !== 8;) {
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
                  ((Ni = df(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Li(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Ao()),
        (n.memoizedState = n.baseState = t),
        (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: es, lastRenderedState: t }),
        (n.queue = r),
        (n = Ns.bind(null, R, r)),
        (r.dispatch = n),
        (r = Ko(!1)),
        (a = Fs.bind(null, R, !1, r.queue)),
        (r = Ao()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Jo.bind(null, R, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ns(e) {
      return rs(jo(), z, e);
    }
    function rs(e, t, n) {
      if (((t = Ro(e, t, es)[0]), (e = Lo(Io)[0]), typeof t == `object` && t && typeof t.then == `function`))
        try {
          var r = No(t);
        } catch (e) {
          throw e === xa ? Ca : e;
        }
      else r = t;
      t = jo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState && ((R.flags |= 2048), os(9, { destroy: void 0 }, is.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function is(e, t) {
      e.action = t;
    }
    function as(e) {
      var t = jo(),
        n = z;
      if (n !== null) return rs(t, n, e);
      (jo(), (t = t.memoizedState), (n = jo()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function os(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = R.updateQueue),
        t === null && ((t = Mo()), (R.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function ss() {
      return jo().memoizedState;
    }
    function cs(e, t, n, r) {
      var i = Ao();
      ((R.flags |= e), (i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function ls(e, t, n, r) {
      var i = jo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      z !== null && r !== null && So(r, z.memoizedState.deps)
        ? (i.memoizedState = os(t, a, n, r))
        : ((R.flags |= e), (i.memoizedState = os(1 | t, a, n, r)));
    }
    function us(e, t) {
      cs(8390656, 8, e, t);
    }
    function ds(e, t) {
      ls(2048, 8, e, t);
    }
    function fs(e) {
      R.flags |= 4;
      var t = R.updateQueue;
      if (t === null) ((t = Mo()), (R.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function ps(e) {
      var t = jo().memoizedState;
      return (
        fs({ ref: t, nextImpl: e }),
        function () {
          if (V & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ms(e, t) {
      return ls(4, 2, e, t);
    }
    function hs(e, t) {
      return ls(4, 4, e, t);
    }
    function gs(e, t) {
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
    function _s(e, t, n) {
      ((n = n == null ? null : n.concat([e])), ls(4, 4, gs.bind(null, t, e), n));
    }
    function vs() {}
    function ys(e, t) {
      var n = jo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && So(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function bs(e, t) {
      var n = jo();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && So(t, r[1])) return r[0];
      if (((r = e()), go)) {
        Fe(!0);
        try {
          e();
        } finally {
          Fe(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function xs(e, t, n) {
      return n === void 0 || (fo & 1073741824 && !(W & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = _u()), (R.lanes |= e), (Jl |= e), n);
    }
    function Ss(e, t, n, r) {
      return xr(n, t)
        ? n
        : Za.current === null
          ? !(fo & 42) || (fo & 1073741824 && !(W & 261930))
            ? ((rc = !0), (e.memoizedState = n))
            : ((e = _u()), (R.lanes |= e), (Jl |= e), t)
          : ((e = xs(e, n, r)), xr(e, t) || (rc = !0), e);
    }
    function Cs(e, t, n, r, i) {
      var a = A.p;
      A.p = a !== 0 && 8 > a ? a : 8;
      var o = k.T,
        s = {};
      ((k.T = s), Fs(e, !1, t, n));
      try {
        var c = i(),
          l = k.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ps(e, t, ha(c, r), gu(e))
            : Ps(e, t, r, gu(e)));
      } catch (n) {
        Ps(e, t, { then: function () {}, status: `rejected`, reason: n }, gu());
      } finally {
        ((A.p = a), o !== null && s.types !== null && (o.types = s.types), (k.T = o));
      }
    }
    function ws() {}
    function Ts(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = Es(e).queue;
      Cs(
        e,
        a,
        t,
        j,
        n === null
          ? ws
          : function () {
              return (Ds(e), n(r));
            },
      );
    }
    function Es(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: j,
        baseState: j,
        baseQueue: null,
        queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Io, lastRenderedState: j },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Io, lastRenderedState: n },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ds(e) {
      var t = Es(e);
      (t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, gu()));
    }
    function Os() {
      return ea(rp);
    }
    function ks() {
      return jo().memoizedState;
    }
    function As() {
      return jo().memoizedState;
    }
    function js(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = gu();
            e = Ha(n);
            var r = Ua(t, e, n);
            (r !== null && (vu(r, t, n), Wa(r, t, n)), (t = { cache: sa() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ms(e, t, n) {
      var r = gu();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Is(e) ? Ls(t, n) : ((n = ti(e, t, n, r)), n !== null && (vu(n, e, r), Rs(n, t, r))));
    }
    function Ns(e, t, n) {
      Ps(e, t, n, gu());
    }
    function Ps(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Is(e)) Ls(t, i);
      else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), xr(s, o)))
              return (ei(e, t, i, 0), H === null && $r(), !1);
          } catch {}
        if (((n = ti(e, t, i, r)), n !== null)) return (vu(n, e, r), Rs(n, t, r), !0);
      }
      return !1;
    }
    function Fs(e, t, n, r) {
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
        Is(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ti(e, n, r, 2)), t !== null && vu(t, e, 2));
    }
    function Is(e) {
      var t = e.alternate;
      return e === R || (t !== null && t === R);
    }
    function Ls(e, t) {
      ho = mo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Rs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Qe(e, n));
      }
    }
    var zs = {
      readContext: ea,
      use: Po,
      useCallback: xo,
      useContext: xo,
      useEffect: xo,
      useImperativeHandle: xo,
      useLayoutEffect: xo,
      useInsertionEffect: xo,
      useMemo: xo,
      useReducer: xo,
      useRef: xo,
      useState: xo,
      useDebugValue: xo,
      useDeferredValue: xo,
      useTransition: xo,
      useSyncExternalStore: xo,
      useId: xo,
      useHostTransitionStatus: xo,
      useFormState: xo,
      useActionState: xo,
      useOptimistic: xo,
      useMemoCache: xo,
      useCacheRefresh: xo,
    };
    zs.useEffectEvent = xo;
    var Bs = {
        readContext: ea,
        use: Po,
        useCallback: function (e, t) {
          return ((Ao().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ea,
        useEffect: us,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), cs(4194308, 4, gs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return cs(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          cs(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Ao();
          t = t === void 0 ? null : t;
          var r = e();
          if (go) {
            Fe(!0);
            try {
              e();
            } finally {
              Fe(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Ao();
          if (n !== void 0) {
            var i = n(t);
            if (go) {
              Fe(!0);
              try {
                n(t);
              } finally {
                Fe(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: i }),
            (r.queue = e),
            (e = e.dispatch = Ms.bind(null, R, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Ao();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Ko(e);
          var t = e.queue,
            n = Ns.bind(null, R, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: vs,
        useDeferredValue: function (e, t) {
          return xs(Ao(), e, t);
        },
        useTransition: function () {
          var e = Ko(!1);
          return ((e = Cs.bind(null, R, e.queue, !0, !1)), (Ao().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = R,
            a = Ao();
          if (L) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), H === null)) throw Error(i(349));
            W & 127 || Vo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            us(Uo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            os(9, { destroy: void 0 }, Ho.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Ao(),
            t = H.identifierPrefix;
          if (L) {
            var n = Ei,
              r = Ti;
            ((n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = _o++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = bo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Os,
        useFormState: ts,
        useActionState: ts,
        useOptimistic: function (e) {
          var t = Ao();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Fs.bind(null, R, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Fo,
        useCacheRefresh: function () {
          return (Ao().memoizedState = js.bind(null, R));
        },
        useEffectEvent: function (e) {
          var t = Ao(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (V & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Vs = {
        readContext: ea,
        use: Po,
        useCallback: ys,
        useContext: ea,
        useEffect: ds,
        useImperativeHandle: _s,
        useInsertionEffect: ms,
        useLayoutEffect: hs,
        useMemo: bs,
        useReducer: Lo,
        useRef: ss,
        useState: function () {
          return Lo(Io);
        },
        useDebugValue: vs,
        useDeferredValue: function (e, t) {
          return Ss(jo(), z.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Lo(Io)[0],
            t = jo().memoizedState;
          return [typeof e == `boolean` ? e : No(e), t];
        },
        useSyncExternalStore: Bo,
        useId: ks,
        useHostTransitionStatus: Os,
        useFormState: ns,
        useActionState: ns,
        useOptimistic: function (e, t) {
          return qo(jo(), z, e, t);
        },
        useMemoCache: Fo,
        useCacheRefresh: As,
      };
    Vs.useEffectEvent = ps;
    var Hs = {
      readContext: ea,
      use: Po,
      useCallback: ys,
      useContext: ea,
      useEffect: ds,
      useImperativeHandle: _s,
      useInsertionEffect: ms,
      useLayoutEffect: hs,
      useMemo: bs,
      useReducer: zo,
      useRef: ss,
      useState: function () {
        return zo(Io);
      },
      useDebugValue: vs,
      useDeferredValue: function (e, t) {
        var n = jo();
        return z === null ? xs(n, e, t) : Ss(n, z.memoizedState, e, t);
      },
      useTransition: function () {
        var e = zo(Io)[0],
          t = jo().memoizedState;
        return [typeof e == `boolean` ? e : No(e), t];
      },
      useSyncExternalStore: Bo,
      useId: ks,
      useHostTransitionStatus: Os,
      useFormState: as,
      useActionState: as,
      useOptimistic: function (e, t) {
        var n = jo();
        return z === null ? ((n.baseState = e), [e, n.queue.dispatch]) : qo(n, z, e, t);
      },
      useMemoCache: Fo,
      useCacheRefresh: As,
    };
    Hs.useEffectEvent = ps;
    function Us(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ws = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = gu(),
          i = Ha(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ua(e, i, r)),
          t !== null && (vu(t, e, r), Wa(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = gu(),
          i = Ha(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ua(e, i, r)),
          t !== null && (vu(t, e, r), Wa(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = gu(),
          r = Ha(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ua(e, r, n)),
          t !== null && (vu(t, e, n), Wa(t, e, n)));
      },
    };
    function Gs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Sr(n, r) || !Sr(i, a)
            : !0
      );
    }
    function Ks(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ws.enqueueReplaceState(t, t.state, null));
    }
    function qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function Js(e) {
      Yr(e);
    }
    function Ys(e) {
      console.error(e);
    }
    function Xs(e) {
      Yr(e);
    }
    function Zs(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Qs(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function B(e, t, n) {
      return (
        (n = Ha(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Zs(e, t);
        }),
        n
      );
    }
    function $s(e) {
      return ((e = Ha(e)), (e.tag = 3), e);
    }
    function ec(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            Qs(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (Qs(t, n, r), typeof i != `function` && (ou === null ? (ou = new Set([this])) : ou.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function tc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && Zi(t, n, a, !0), (n = no.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                ro === null ? Au() : n.alternate === null && ql === 0 && (ql = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === wa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    Ju(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === wa
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
        return (Ju(e, r, a), Au(), !1);
      }
      if (L)
        return (
          (t = no.current),
          t === null
            ? (r !== Ii && ((t = Error(i(423), { cause: r })), Ui(_i(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = _i(r, n)),
              (a = B(e.stateNode, r, a)),
              Ga(e, a),
              ql !== 4 && (ql = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Ii && ((e = Error(i(422), { cause: r })), Ui(_i(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = _i(o, n)), $l === null ? ($l = [o]) : $l.push(o), ql !== 4 && (ql = 2), t === null))
        return !0;
      ((r = _i(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = B(n.stateNode, r, e)),
              Ga(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null && typeof o.componentDidCatch == `function` && (ou === null || !ou.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = $s(a)),
                ec(a, e, n, r),
                Ga(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var nc = Error(i(461)),
      rc = !1;
    function ic(e, t, n, r) {
      t.child = e === null ? Ra(t, null, n, r) : La(t, e.child, n, r);
    }
    function ac(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        $i(t),
        (r = Co(e, t, n, o, a, i)),
        (s = Do()),
        e !== null && !rc
          ? (Oo(e, t, i), kc(e, t, i))
          : (L && s && ki(t), (t.flags |= 1), ic(e, t, r, i), t.child)
      );
    }
    function oc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !ci(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), sc(e, t, a, r, i))
          : ((e = di(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
      }
      if (((a = e.child), !Ac(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Sr : n), n(o, r) && e.ref === t.ref)) return kc(e, t, i);
      }
      return ((t.flags |= 1), (e = li(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function sc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Sr(a, r) && e.ref === t.ref) {
          if (((rc = !1), (t.pendingProps = r = a), Ac(e, i))) e.flags & 131072 && (rc = !0);
          else return ((t.lanes = e.lanes), kc(e, t, i));
        }
      }
      return hc(e, t, n, r, i);
    }
    function cc(e, t, n, r) {
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
          return uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && ya(t, a === null ? null : a.cachePool),
            a === null ? eo() : $a(t, a),
            oo(t));
        else return ((r = t.lanes = 536870912), uc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && ya(t, null), eo(), so(t))
          : (ya(t, a.cachePool), $a(t, a), so(t), (t.memoizedState = null));
      return (ic(e, t, i, n), t.child);
    }
    function lc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }),
        t.sibling
      );
    }
    function uc(e, t, n, r, i) {
      var a = va();
      return (
        (a = a === null ? null : { parent: oa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && ya(t, null),
        eo(),
        oo(t),
        e !== null && Zi(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function dc(e, t) {
      return (
        (t = wc({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function fc(e, t, n) {
      return (
        La(t, e.child, null, n),
        (e = dc(t, t.pendingProps)),
        (e.flags |= 2),
        co(t),
        (t.memoizedState = null),
        e
      );
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (L) {
          if (r.mode === `hidden`) return ((e = dc(t, r)), (t.lanes = 536870912), lc(null, e));
          if (
            (ao(t),
            (e = Ni)
              ? ((e = sf(e, Fi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: wi === null ? null : { id: Ti, overflow: Ei },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = mi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Mi = t),
                  (Ni = null)))
              : (e = null),
            e === null)
          )
            throw Li(t);
          return ((t.lanes = 536870912), null);
        }
        return dc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((ao(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = fc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if ((rc || Zi(e, t, n, !1), (a = (n & e.childLanes) !== 0), rc || a)) {
          if (((r = H), r !== null && ((s = $e(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), ni(e, s), vu(r, e, s), nc);
          (Au(), (t = fc(e, t, n)));
        } else
          ((e = o.treeContext),
            (Ni = df(s.nextSibling)),
            (Mi = t),
            (L = !0),
            (Pi = null),
            (Fi = !1),
            e !== null && ji(t, e),
            (t = dc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = li(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function mc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function hc(e, t, n, r, i) {
      return (
        $i(t),
        (n = Co(e, t, n, r, void 0, i)),
        (r = Do()),
        e !== null && !rc
          ? (Oo(e, t, i), kc(e, t, i))
          : (L && r && ki(t), (t.flags |= 1), ic(e, t, n, i), t.child)
      );
    }
    function gc(e, t, n, r, i, a) {
      return (
        $i(t),
        (t.updateQueue = null),
        (n = To(t, r, n, i)),
        wo(e),
        (r = Do()),
        e !== null && !rc
          ? (Oo(e, t, a), kc(e, t, a))
          : (L && r && ki(t), (t.flags |= 1), ic(e, t, n, a), t.child)
      );
    }
    function _c(e, t, n, r, i) {
      if (($i(t), t.stateNode === null)) {
        var a = ai,
          o = n.contextType;
        (typeof o == `object` && o && (a = ea(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ws),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Ba(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ea(o) : ai),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Us(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Ws.enqueueReplaceState(a, a.state, null),
            Ja(t, r, a, i),
            qa(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = ai), typeof u == `object` && u && (o = ea(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ks(t, a, r, o)),
          (za = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Ja(t, r, a, i),
          qa(),
          (l = t.memoizedState),
          s || f !== l || za
            ? (typeof d == `function` && (Us(t, n, d, r), (l = t.memoizedState)),
              (c = za || Gs(t, n, c, r, f, l, o))
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
          Va(e, t),
          (o = t.memoizedProps),
          (u = qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ai),
          typeof l == `object` && l && (c = ea(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ks(t, a, r, c)),
          (za = !1),
          (f = t.memoizedState),
          (a.state = f),
          Ja(t, r, a, i),
          qa());
        var p = t.memoizedState;
        o !== d || f !== p || za || (e !== null && e.dependencies !== null && Qi(e.dependencies))
          ? (typeof s == `function` && (Us(t, n, s, r), (p = t.memoizedState)),
            (u =
              za || Gs(t, n, u, r, f, p, c) || (e !== null && e.dependencies !== null && Qi(e.dependencies)))
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
        mc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = La(t, e.child, null, i)), (t.child = La(t, null, n, i)))
              : ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = kc(e, t, i)),
        e
      );
    }
    function vc(e, t, n, r) {
      return (Vi(), (t.flags |= 256), ic(e, t, n, r), t.child);
    }
    var yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function bc(e) {
      return { baseLanes: e, cachePool: ba() };
    }
    function xc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Zl), e);
    }
    function Sc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(lo.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (L) {
          if (
            (a ? io(t) : so(t),
            (e = Ni)
              ? ((e = sf(e, Fi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: wi === null ? null : { id: Ti, overflow: Ei },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = mi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Mi = t),
                  (Ni = null)))
              : (e = null),
            e === null)
          )
            throw Li(t);
          return (lf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (so(t),
              (a = t.mode),
              (c = wc({ mode: `hidden`, children: c }, a)),
              (r = fi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = bc(n)),
              (r.childLanes = xc(e, s, n)),
              (t.memoizedState = yc),
              lc(null, r))
            : (io(t), Cc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (io(t), (t.flags &= -257), (t = Tc(e, t, n)))
            : t.memoizedState === null
              ? (so(t),
                (c = r.fallback),
                (a = t.mode),
                (r = wc({ mode: `visible`, children: r.children }, a)),
                (c = fi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                La(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = bc(n)),
                (r.childLanes = xc(e, s, n)),
                (t.memoizedState = yc),
                (t = lc(null, r)))
              : (so(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((io(t), lf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Ui({ value: r, source: null, stack: null }),
            (t = Tc(e, t, n)));
        } else if ((rc || Zi(e, t, n, !1), (s = (n & e.childLanes) !== 0), rc || s)) {
          if (((s = H), s !== null && ((r = $e(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ni(e, r), vu(s, e, r), nc);
          (cf(c) || Au(), (t = Tc(e, t, n)));
        } else
          cf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Ni = df(c.nextSibling)),
              (Mi = t),
              (L = !0),
              (Pi = null),
              (Fi = !1),
              e !== null && ji(t, e),
              (t = Cc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (so(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = li(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = fi(c, a, n, null)), (c.flags |= 2)) : (c = li(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          lc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = bc(n))
            : ((a = c.cachePool),
              a === null
                ? (a = ba())
                : ((l = oa._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = xc(e, s, n)),
          (t.memoizedState = yc),
          lc(e.child, r))
        : (io(t),
          (n = e.child),
          (e = n.sibling),
          (n = li(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null && ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Cc(e, t) {
      return ((t = wc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function wc(e, t) {
      return ((e = si(22, e, null, t)), (e.lanes = 0), e);
    }
    function Tc(e, t, n) {
      return (
        La(t, e.child, null, n),
        (e = Cc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ec(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Yi(e.return, t, n));
    }
    function Dc(e, t, n, r, i, a) {
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
    function Oc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = lo.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        se(lo, o),
        ic(e, t, r, n),
        (r = L ? xi : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Ec(e, n, t);
          else if (e.tag === 19) Ec(e, n, t);
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
            ((e = n.alternate), e !== null && uo(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Dc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && uo(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Dc(t, !0, n, null, a, r);
          break;
        case `together`:
          Dc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function kc(e, t, n) {
      if ((e !== null && (t.dependencies = e.dependencies), (Jl |= t.lanes), (n & t.childLanes) === 0)) {
        if (e !== null) {
          if ((Zi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = li(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = li(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Ac(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Qi(e)));
    }
    function jc(e, t, n) {
      switch (t.tag) {
        case 3:
          (fe(t, t.stateNode.containerInfo), qi(t, oa, e.memoizedState.cache), Vi());
          break;
        case 27:
        case 5:
          me(t);
          break;
        case 4:
          fe(t, t.stateNode.containerInfo);
          break;
        case 10:
          qi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), ao(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (io(t), (e = kc(e, t, n)), e === null ? null : e.sibling)
                : Sc(e, t, n)
              : (io(t), (t.flags |= 128), null);
          io(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (((r = (n & t.childLanes) !== 0), (r ||= (Zi(e, t, n, !1), (n & t.childLanes) !== 0)), i)) {
            if (r) return Oc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            se(lo, lo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), cc(e, t, n, t.pendingProps));
        case 24:
          qi(t, oa, e.memoizedState.cache);
      }
      return kc(e, t, n);
    }
    function Mc(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) rc = !0;
        else {
          if (!Ac(e, n) && !(t.flags & 128)) return ((rc = !1), jc(e, t, n));
          rc = !!(e.flags & 131072);
        }
      } else ((rc = !1), L && t.flags & 1048576 && Oi(t, xi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Da(t.elementType)), (t.type = e), typeof e == `function`))
              ci(e)
                ? ((r = qs(e, r)), (t.tag = 1), (t = _c(null, t, e, r, n)))
                : ((t.tag = 0), (t = hc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === x) {
                  ((t.tag = 11), (t = ac(null, t, e, r, n)));
                  break a;
                }
                if (a === w) {
                  ((t.tag = 14), (t = oc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = ne(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return hc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = qs(r, t.pendingProps)), _c(e, t, r, a, n));
        case 3:
          a: {
            if ((fe(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Va(e, t), Ja(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              qi(t, oa, r),
              r !== o.cache && Xi(t, [oa], n, !0),
              qa(),
              (r = s.element),
              o.isDehydrated)
            ) {
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = vc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                ((a = _i(Error(i(424)), t)), Ui(a), (t = vc(e, t, r, n)));
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
                Ni = df(e.firstChild), Mi = t, L = !0, Pi = null, Fi = !0, n = Ra(t, null, r, n), t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Vi(), r === a)) {
                t = kc(e, t, n);
                break a;
              }
              ic(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            mc(e, t),
            e === null
              ? (n = Mf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : L ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Ud(ue.current).createElement(n)),
                  (r[at] = t),
                  (r[ot] = e),
                  Ld(r, n, e),
                  vt(r),
                  (t.stateNode = r))
              : (t.memoizedState = Mf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            me(t),
            e === null &&
              L &&
              ((r = t.stateNode = hf(t.type, t.pendingProps, ue.current)),
              (Mi = t),
              (Fi = !0),
              (a = Ni),
              ef(t.type) ? ((ff = a), (Ni = df(r.firstChild))) : (Ni = a)),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              L &&
              ((a = r = Ni) &&
                ((r = af(r, t.type, t.pendingProps, Fi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (Mi = t), (Ni = df(r.firstChild)), (Fi = !1), (a = !0))),
              a || Li(t)),
            me(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Kd(a, o) ? (r = null) : s !== null && Kd(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Co(e, t, Eo, null, null, n)), (rp._currentValue = a)),
            mc(e, t),
            ic(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              L &&
              ((e = n = Ni) &&
                ((n = of(n, t.pendingProps, Fi)),
                n === null ? (e = !1) : ((t.stateNode = n), (Mi = t), (Ni = null), (e = !0))),
              e || Li(t)),
            null
          );
        case 13:
          return Sc(e, t, n);
        case 4:
          return (
            fe(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = La(t, null, r, n)) : ic(e, t, r, n),
            t.child
          );
        case 11:
          return ac(e, t, t.type, t.pendingProps, n);
        case 7:
          return (ic(e, t, t.pendingProps, n), t.child);
        case 8:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (ic(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), qi(t, t.type, r.value), ic(e, t, r.children, n), t.child);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            $i(t),
            (a = ea(a)),
            (r = r(a)),
            (t.flags |= 1),
            ic(e, t, r, n),
            t.child
          );
        case 14:
          return oc(e, t, t.type, t.pendingProps, n);
        case 15:
          return sc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Oc(e, t, n);
        case 31:
          return pc(e, t, n);
        case 22:
          return cc(e, t, n, t.pendingProps);
        case 24:
          return (
            $i(t),
            (r = ea(oa)),
            e === null
              ? ((a = va()),
                a === null &&
                  ((a = H),
                  (o = sa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Ba(t),
                qi(t, oa, a))
              : ((e.lanes & n) !== 0 && (Va(e, t), Ja(t, null, null, n), qa()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), qi(t, oa, r), r !== a.cache && Xi(t, [oa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    qi(t, oa, r))),
            ic(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Nc(e) {
      e.flags |= 4;
    }
    function Pc(e, t, n, r, i) {
      if (((t = !!(e.mode & 32)) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i)) {
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Du()) e.flags |= 8192;
          else throw ((Oa = wa), Sa);
        }
      } else e.flags &= -16777217;
    }
    function Fc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Xf(t))) {
        if (Du()) e.flags |= 8192;
        else throw ((Oa = wa), Sa);
      }
    }
    function Ic(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : qe()), (e.lanes |= t), (Ql |= t)));
    }
    function Lc(e, t) {
      if (!L)
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
    function Rc(e) {
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
    function zc(e, t, n) {
      var r = t.pendingProps;
      switch ((Ai(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Rc(t), null);
        case 1:
          return (Rc(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Ji(oa),
            pe(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Bi(t)
                ? Nc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Hi())),
            Rc(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Nc(t), o === null ? (Rc(t), Pc(t, a, null, r, n)) : (Rc(t), Fc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (Rc(t), (t.flags &= -16777217))
                  : (Nc(t), Rc(t), Fc(t, o))
                : ((e = e.memoizedProps), e !== r && Nc(t), Rc(t), Pc(t, a, e, r, n)),
            null
          );
        case 27:
          if ((he(t), (n = ue.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Rc(t), null);
            }
            ((e = ce.current), Bi(t) ? Ri(t, e) : ((e = hf(a, r, n)), (t.stateNode = e), Nc(t)));
          }
          return (Rc(t), null);
        case 5:
          if ((he(t), (a = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Rc(t), null);
            }
            if (((o = ce.current), Bi(t))) Ri(t, o);
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
              ((o[at] = t), (o[ot] = r));
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
              r && Nc(t);
            }
          }
          return (Rc(t), Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = ue.current), Bi(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Mi), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[at] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Fd(e.nodeValue, n)
                )),
                e || Li(t, !0));
            } else ((e = Ud(e).createTextNode(r)), (e[at] = t), (t.stateNode = e));
          }
          return (Rc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Bi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e)) throw Error(i(557));
                e[at] = t;
              } else (Vi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Rc(t), (e = !1));
            } else
              ((n = Hi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (co(t), t) : (co(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (Rc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Bi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a)) throw Error(i(317));
                a[at] = t;
              } else (Vi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Rc(t), (a = !1));
            } else
              ((a = Hi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (co(t), t) : (co(t), null);
          }
          return (
            co(t),
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
                Ic(t, t.updateQueue),
                Rc(t),
                null)
          );
        case 4:
          return (pe(), e === null && Td(t.stateNode.containerInfo), Rc(t), null);
        case 10:
          return (Ji(t.type), Rc(t), null);
        case 19:
          if ((M(lo), (r = t.memoizedState), r === null)) return (Rc(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) Lc(r, !1);
            else {
              if (ql !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = uo(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Lc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Ic(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (ui(n, e), (n = n.sibling));
                    return (se(lo, (lo.current & 1) | 2), L && Di(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null && P() > iu && ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = uo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ic(t, e),
                  Lc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !L)
                )
                  return (Rc(t), null);
              } else
                2 * P() - r.renderingStartTime > iu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304));
            }
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (Rc(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = P()),
              (e.sibling = null),
              (n = lo.current),
              se(lo, a ? (n & 1) | 2 : n & 1),
              L && Di(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            co(t),
            to(),
            (r = t.memoizedState !== null),
            e === null ? r && (t.flags |= 8192) : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r ? n & 536870912 && !(t.flags & 128) && (Rc(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rc(t),
            (n = t.updateQueue),
            n !== null && Ic(t, n.retryQueue),
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
            e !== null && M(_a),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Ji(oa),
            Rc(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function Bc(e, t) {
      switch ((Ai(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            Ji(oa),
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
            if ((co(t), t.alternate === null)) throw Error(i(340));
            Vi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((co(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            Vi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (M(lo), null);
        case 4:
          return (pe(), null);
        case 10:
          return (Ji(t.type), null);
        case 22:
        case 23:
          return (
            co(t),
            to(),
            e !== null && M(_a),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Ji(oa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((Ai(t), t.tag)) {
        case 3:
          (Ji(oa), pe());
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
          t.memoizedState !== null && co(t);
          break;
        case 13:
          co(t);
          break;
        case 19:
          M(lo);
          break;
        case 10:
          Ji(t.type);
          break;
        case 22:
        case 23:
          (co(t), to(), e !== null && M(_a));
          break;
        case 24:
          Ji(oa);
      }
    }
    function Hc(e, t) {
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
        G(t, t.return, e);
      }
    }
    function Uc(e, t, n) {
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
                  G(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        G(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Xa(t, n);
        } catch (t) {
          G(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = qs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        G(e, t, n);
      }
    }
    function Kc(e, t) {
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
        G(e, t, n);
      }
    }
    function qc(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            G(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            G(e, t, n);
          }
        else n.current = null;
      }
    }
    function Jc(e) {
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
        G(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Rd(r, e.type, n, t), (r[ot] = t));
      } catch (t) {
        G(e, e.return, t);
      }
    }
    function Xc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ef(e.type)) || e.tag === 4;
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if ((e.tag === 27 && ef(e.type)) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, n) {
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
              n != null || t.onclick !== null || (t.onclick = Qt)));
      else if (
        r !== 4 &&
        (r === 27 && ef(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && ef(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null;) ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Ld(t, r, n), (t[at] = e), (t[ot] = n));
      } catch (t) {
        G(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Vd = fp), (e = Er(e)), Dr(e))) {
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
      for (Hd = { focusedElem: e, selectionRange: n }, fp = !1, al = t; al !== null;)
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null)) ((e.return = t), (al = e));
        else
          for (; al !== null;) {
            switch (((t = al), (o = t.alternate), (e = t.flags), t.tag)) {
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
                    var h = qs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)), (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    G(n, n.return, e);
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
              ((e.return = t.return), (al = e));
              break;
            }
            al = t.return;
          }
    }
    function sl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Sl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((Sl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                G(n, n.return, e);
              }
            else {
              var i = qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                G(n, n.return, e);
              }
            }
          }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
          break;
        case 3:
          if ((Sl(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
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
              Xa(e, t);
            } catch (e) {
              G(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (Sl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
          break;
        case 12:
          Sl(e, n);
          break;
        case 31:
          (Sl(e, n), r & 4 && pl(e, n));
          break;
        case 13:
          (Sl(e, n),
            r & 4 && ml(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null && ((e = e.dehydrated), e !== null && ((n = Zu.bind(null, n)), uf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r), (nl = t) && !a ? wl(e, n, !!(n.subtreeFlags & 8772)) : Sl(e, n), (tl = i), (nl = a));
          }
          break;
        case 30:
          break;
        default:
          Sl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && pt(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var ll = null,
      ul = !1;
    function dl(e, t, n) {
      for (n = n.child; n !== null;) (fl(e, t, n), (n = n.sibling));
    }
    function fl(e, t, n) {
      if (Pe && typeof Pe.onCommitFiberUnmount == `function`)
        try {
          Pe.onCommitFiberUnmount(Ne, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || qc(n, t),
            dl(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || qc(n, t);
          var r = ll,
            i = ul;
          (ef(n.type) && ((ll = n.stateNode), (ul = !1)), dl(e, t, n), gf(n.stateNode), (ll = r), (ul = i));
          break;
        case 5:
          nl || qc(n, t);
        case 6:
          if (((r = ll), (i = ul), (ll = null), dl(e, t, n), (ll = r), (ul = i), ll !== null)) {
            if (ul)
              try {
                (ll.nodeType === 9
                  ? ll.body
                  : ll.nodeName === `HTML`
                    ? ll.ownerDocument.body
                    : ll
                ).removeChild(n.stateNode);
              } catch (e) {
                G(n, t, e);
              }
            else
              try {
                ll.removeChild(n.stateNode);
              } catch (e) {
                G(n, t, e);
              }
          }
          break;
        case 18:
          ll !== null &&
            (ul
              ? ((e = ll),
                tf(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode),
                Lp(e))
              : tf(ll, n.stateNode));
          break;
        case 4:
          ((r = ll), (i = ul), (ll = n.stateNode.containerInfo), (ul = !0), dl(e, t, n), (ll = r), (ul = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), nl || Uc(4, n, t), dl(e, t, n));
          break;
        case 1:
          (nl || (qc(n, t), (r = n.stateNode), typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            dl(e, t, n));
          break;
        case 21:
          dl(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), dl(e, t, n), (nl = r));
          break;
        default:
          dl(e, t, n);
      }
    }
    function pl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Lp(e);
        } catch (e) {
          G(t, t.return, e);
        }
      }
    }
    function ml(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Lp(e);
        } catch (e) {
          G(t, t.return, e);
        }
    }
    function hl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return ((e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new il()), t);
        default:
          throw Error(i(435, e.tag));
      }
    }
    function gl(e, t) {
      var n = hl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Qu.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function _l(e, t) {
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
                  ((ll = c.stateNode), (ul = !1));
                  break a;
                }
                break;
              case 5:
                ((ll = c.stateNode), (ul = !1));
                break a;
              case 3:
              case 4:
                ((ll = c.stateNode.containerInfo), (ul = !0));
                break a;
            }
            c = c.return;
          }
          if (ll === null) throw Error(i(160));
          (fl(o, s, a),
            (ll = null),
            (ul = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (yl(t, e), (t = t.sibling));
    }
    var vl = null;
    function yl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (_l(t, e), bl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (_l(t, e),
            bl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            r & 64 &&
              tl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = vl;
          if ((_l(t, e), bl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4)) {
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
                            o[ft] ||
                            o[at] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Ld(o, r, n),
                          (o[at] = e),
                          vt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Kf(`link`, `href`, a).get(r + (n.href || ``));
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
                        if ((s = Kf(`meta`, `content`, a).get(r + (n.content || ``)))) {
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
                    ((o[at] = e), vt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Jf(a, e.type, e.stateNode);
              } else e.stateNode = zf(a, r, e.memoizedProps);
            } else
              o === r
                ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Jf(a, e.type, e.stateNode) : zf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (_l(t, e),
            bl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((_l(t, e), bl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              Wt(a, ``);
            } catch (t) {
              G(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Yc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((_l(t, e), bl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              G(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Wf = null),
            (a = vl),
            (vl = yf(t.containerInfo)),
            _l(t, e),
            (vl = a),
            bl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Lp(t.containerInfo);
            } catch (t) {
              G(e, e.return, t);
            }
          rl && ((rl = !1), xl(e));
          break;
        case 4:
          ((r = vl), (vl = yf(e.stateNode.containerInfo)), _l(t, e), bl(e), (vl = r));
          break;
        case 12:
          (_l(t, e), bl(e));
          break;
        case 31:
          (_l(t, e), bl(e), r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r))));
          break;
        case 13:
          (_l(t, e),
            bl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (nu = P()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (((tl = u || a), (nl = d || l), _l(t, e), (nl = d), (tl = u), bl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || tl || nl || Cl(e)),
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
                    G(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    G(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? nf(m, !0) : nf(l.stateNode, !1);
                  } catch (e) {
                    G(l, l.return, e);
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
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), gl(e, n))));
          break;
        case 19:
          (_l(t, e), bl(e), r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), gl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (_l(t, e), bl(e));
      }
    }
    function bl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Xc(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              $c(e, Zc(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Wt(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              Qc(e, Zc(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          G(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function xl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (xl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function Sl(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Cl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), Cl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n), Cl(t));
            break;
          case 27:
            gf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), Cl(t));
            break;
          case 22:
            t.memoizedState === null && Cl(t);
            break;
          case 30:
            Cl(t);
            break;
          default:
            Cl(t);
        }
        e = e.sibling;
      }
    }
    function wl(e, t, n) {
      for (n &&= !!(t.subtreeFlags & 8772), t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (wl(i, a, n), Hc(4, a));
            break;
          case 1:
            if ((wl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                G(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Ya(c[i], s);
              } catch (e) {
                G(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (wl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
            break;
          case 12:
            wl(i, a, n);
            break;
          case 31:
            (wl(i, a, n), n && o & 4 && pl(i, a));
            break;
          case 13:
            (wl(i, a, n), n && o & 4 && ml(i, a));
            break;
          case 22:
            (a.memoizedState === null && wl(i, a, n), Kc(a, a.return));
            break;
          case 30:
            break;
          default:
            wl(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Tl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && ca(n)));
    }
    function El(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && ca(e)));
    }
    function Dl(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Ol(e, t, n, r), (t = t.sibling));
    }
    function Ol(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Dl(e, t, n, r), i & 2048 && Hc(9, t));
          break;
        case 1:
          Dl(e, t, n, r);
          break;
        case 3:
          (Dl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && ca(e))));
          break;
        case 12:
          if (i & 2048) {
            (Dl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              G(t, t.return, e);
            }
          } else Dl(e, t, n, r);
          break;
        case 31:
          Dl(e, t, n, r);
          break;
        case 13:
          Dl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Dl(e, t, n, r)
                : ((a._visibility |= 2), kl(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))
              : a._visibility & 2
                ? Dl(e, t, n, r)
                : Al(e, t),
            i & 2048 && Tl(o, t));
          break;
        case 24:
          (Dl(e, t, n, r), i & 2048 && El(t.alternate, t));
          break;
        default:
          Dl(e, t, n, r);
      }
    }
    function kl(e, t, n, r, i) {
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
            (kl(a, o, s, c, i), Hc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), kl(a, o, s, c, i))
              : u._visibility & 2
                ? kl(a, o, s, c, i)
                : Al(a, o),
              i && l & 2048 && Tl(o.alternate, o));
            break;
          case 24:
            (kl(a, o, s, c, i), i && l & 2048 && El(o.alternate, o));
            break;
          default:
            kl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Al(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Al(n, r), i & 2048 && Tl(r.alternate, r));
              break;
            case 24:
              (Al(n, r), i & 2048 && El(r.alternate, r));
              break;
            default:
              Al(n, r);
          }
          t = t.sibling;
        }
    }
    var jl = 8192;
    function Ml(e, t, n) {
      if (e.subtreeFlags & jl) for (e = e.child; e !== null;) (Nl(e, t, n), (e = e.sibling));
    }
    function Nl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Ml(e, t, n),
            e.flags & jl && e.memoizedState !== null && Zf(n, vl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Ml(e, t, n);
          break;
        case 3:
        case 4:
          var r = vl;
          ((vl = yf(e.stateNode.containerInfo)), Ml(e, t, n), (vl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = jl), (jl = 16777216), Ml(e, t, n), (jl = r))
              : Ml(e, t, n));
          break;
        default:
          Ml(e, t, n);
      }
    }
    function Pl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Fl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Rl(r, e));
          }
        Pl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Il(e), (e = e.sibling));
    }
    function Il(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Fl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Fl(e);
          break;
        case 12:
          Fl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Ll(e))
            : Fl(e);
          break;
        default:
          Fl(e);
      }
    }
    function Ll(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((al = r), Rl(r, e));
          }
        Pl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Ll(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Ll(t)));
            break;
          default:
            Ll(t);
        }
        e = e.sibling;
      }
    }
    function Rl(e, t) {
      for (; al !== null;) {
        var n = al;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Uc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ca(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (al = r));
        else
          a: for (n = e; al !== null;) {
            r = al;
            var i = r.sibling,
              a = r.return;
            if ((cl(r), r === n)) {
              al = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (al = i));
              break a;
            }
            al = a;
          }
      }
    }
    var zl = {
        getCacheForType: function (e) {
          var t = ea(oa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return ea(oa).controller.signal;
        },
      },
      Bl = typeof WeakMap == `function` ? WeakMap : Map,
      V = 0,
      H = null,
      U = null,
      W = 0,
      Vl = 0,
      Hl = null,
      Ul = !1,
      Wl = !1,
      Gl = !1,
      Kl = 0,
      ql = 0,
      Jl = 0,
      Yl = 0,
      Xl = 0,
      Zl = 0,
      Ql = 0,
      $l = null,
      eu = null,
      tu = !1,
      nu = 0,
      ru = 0,
      iu = 1 / 0,
      au = null,
      ou = null,
      su = 0,
      cu = null,
      lu = null,
      uu = 0,
      du = 0,
      fu = null,
      pu = null,
      mu = 0,
      hu = null;
    function gu() {
      return V & 2 && W !== 0 ? W & -W : k.T === null ? nt() : md();
    }
    function _u() {
      if (Zl === 0) {
        if (!(W & 536870912) || L) {
          var e = Ve;
          ((Ve <<= 1), !(Ve & 3932160) && (Ve = 262144), (Zl = e));
        } else Zl = 536870912;
      }
      return ((e = no.current), e !== null && (e.flags |= 32), Zl);
    }
    function vu(e, t, n) {
      (((e === H && (Vl === 2 || Vl === 9)) || e.cancelPendingCommit !== null) &&
        (Tu(e, 0), Su(e, W, Zl, !1)),
        Ye(e, n),
        (!(V & 2) || e !== H) && (e === H && (!(V & 2) && (Yl |= n), ql === 4 && Su(e, W, Zl, !1)), od(e)));
    }
    function yu(e, t, n) {
      if (V & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || Ge(e, t),
        a = r ? Nu(e, t) : ju(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Wl && !r && Su(e, t, 0, !1);
          break;
        }
        if (((n = e.current.alternate), o && !xu(n))) {
          ((a = ju(e, t, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
          else ((s = e.pendingLanes & -536870913), (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = $l;
              var l = c.current.memoizedState.isDehydrated;
              if ((l && (Tu(c, s).flags |= 256), (s = ju(c, s, !1)), s !== 2)) {
                if (Gl && !l) {
                  ((c.errorRecoveryDisabledLanes |= o), (Yl |= o), (a = 4));
                  break a;
                }
                ((o = eu), (eu = a), o !== null && (eu === null ? (eu = o) : eu.push.apply(eu, o)));
              }
              a = s;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (Tu(e, 0), Su(e, t, 0, !0));
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
              Su(r, t, Zl, !Ul);
              break a;
            case 2:
              eu = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((a = nu + 300 - P()), 10 < a)) {
            if ((Su(r, t, Zl, !Ul), We(r, 0, !0) !== 0)) break a;
            ((uu = t),
              (r.timeoutHandle = Yd(
                bu.bind(null, r, n, eu, au, tu, t, Zl, Yl, Ql, Ul, o, `Throttled`, -0, 0),
                a,
              )));
            break a;
          }
          bu(r, n, eu, au, tu, t, Zl, Yl, Ql, Ul, o, null, -0, 0);
        }
        break;
      } while (1);
      od(e);
    }
    function bu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Qt,
        }),
          Nl(t, a, d));
        var m = (a & 62914560) === a ? nu - P() : (a & 4194048) === a ? ru - P() : 0;
        if (((m = $f(d, m)), m !== null)) {
          ((uu = a),
            (e.cancelPendingCommit = m(Bu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            Su(e, a, o, !l));
          return;
        }
      }
      Bu(e, t, a, n, r, i, o, s, c);
    }
    function xu(e) {
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
              if (!xr(a(), i)) return !1;
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
    function Su(e, t, n, r) {
      ((t &= ~Xl),
        (t &= ~Yl),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Ie(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && Ze(e, n, t);
    }
    function Cu() {
      return V & 6 ? !0 : (sd(0, !1), !1);
    }
    function wu() {
      if (U !== null) {
        if (Vl === 0) var e = U.return;
        else ((e = U), (Ki = Gi = null), ko(e), (ja = null), (Ma = 0), (e = U));
        for (; e !== null;) (Vc(e.alternate, e), (e = e.return));
        U = null;
      }
    }
    function Tu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Xd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (uu = 0),
        wu(),
        (H = e),
        (U = n = li(e.current, null)),
        (W = t),
        (Vl = 0),
        (Hl = null),
        (Ul = !1),
        (Wl = Ge(e, t)),
        (Gl = !1),
        (Ql = Zl = Xl = Yl = Jl = ql = 0),
        (eu = $l = null),
        (tu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Ie(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Kl = t), $r(), n);
    }
    function Eu(e, t) {
      ((R = null),
        (k.H = zs),
        t === xa || t === Ca
          ? ((t = ka()), (Vl = 3))
          : t === Sa
            ? ((t = ka()), (Vl = 4))
            : (Vl = t === nc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Hl = t),
        U === null && ((ql = 1), Zs(e, _i(t, e.current))));
    }
    function Du() {
      var e = no.current;
      return e === null
        ? !0
        : (W & 4194048) === W
          ? ro === null
          : (W & 62914560) === W || W & 536870912
            ? e === ro
            : !1;
    }
    function Ou() {
      var e = k.H;
      return ((k.H = zs), e === null ? zs : e);
    }
    function ku() {
      var e = k.A;
      return ((k.A = zl), e);
    }
    function Au() {
      ((ql = 4),
        Ul || ((W & 4194048) !== W && no.current !== null) || (Wl = !0),
        (!(Jl & 134217727) && !(Yl & 134217727)) || H === null || Su(H, W, Zl, !1));
    }
    function ju(e, t, n) {
      var r = V;
      V |= 2;
      var i = Ou(),
        a = ku();
      ((H !== e || W !== t) && ((au = null), Tu(e, t)), (t = !1));
      var o = ql;
      a: do
        try {
          if (Vl !== 0 && U !== null) {
            var s = U,
              c = Hl;
            switch (Vl) {
              case 8:
                (wu(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                no.current === null && (t = !0);
                var l = Vl;
                if (((Vl = 0), (Hl = null), Lu(e, s, c, l), n && Wl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = Vl), (Vl = 0), (Hl = null), Lu(e, s, c, l));
            }
          }
          (Mu(), (o = ql));
          break;
        } catch (t) {
          Eu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Ki = Gi = null),
        (V = r),
        (k.H = i),
        (k.A = a),
        U === null && ((H = null), (W = 0), $r()),
        o
      );
    }
    function Mu() {
      for (; U !== null;) Fu(U);
    }
    function Nu(e, t) {
      var n = V;
      V |= 2;
      var r = Ou(),
        a = ku();
      H !== e || W !== t ? ((au = null), (iu = P() + 500), Tu(e, t)) : (Wl = Ge(e, t));
      a: do
        try {
          if (Vl !== 0 && U !== null) {
            t = U;
            var o = Hl;
            b: switch (Vl) {
              case 1:
                ((Vl = 0), (Hl = null), Lu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (Ta(o)) {
                  ((Vl = 0), (Hl = null), Iu(t));
                  break;
                }
                ((t = function () {
                  ((Vl !== 2 && Vl !== 9) || H !== e || (Vl = 7), od(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                Vl = 7;
                break a;
              case 4:
                Vl = 5;
                break a;
              case 7:
                Ta(o) ? ((Vl = 0), (Hl = null), Iu(t)) : ((Vl = 0), (Hl = null), Lu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (U.tag) {
                  case 26:
                    s = U.memoizedState;
                  case 5:
                  case 27:
                    var c = U;
                    if (s ? Xf(s) : c.stateNode.complete) {
                      ((Vl = 0), (Hl = null));
                      var l = c.sibling;
                      if (l !== null) U = l;
                      else {
                        var u = c.return;
                        u === null ? (U = null) : ((U = u), Ru(u));
                      }
                      break b;
                    }
                }
                ((Vl = 0), (Hl = null), Lu(e, t, o, 5));
                break;
              case 6:
                ((Vl = 0), (Hl = null), Lu(e, t, o, 6));
                break;
              case 8:
                (wu(), (ql = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Pu();
          break;
        } catch (t) {
          Eu(e, t);
        }
      while (1);
      return (
        (Ki = Gi = null),
        (k.H = r),
        (k.A = a),
        (V = n),
        U === null ? ((H = null), (W = 0), $r(), ql) : 0
      );
    }
    function Pu() {
      for (; U !== null && !Te();) Fu(U);
    }
    function Fu(e) {
      var t = Mc(e.alternate, e, Kl);
      ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (U = t));
    }
    function Iu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = gc(n, t, t.pendingProps, t.type, void 0, W);
          break;
        case 11:
          t = gc(n, t, t.pendingProps, t.type.render, t.ref, W);
          break;
        case 5:
          ko(t);
        default:
          (Vc(n, t), (t = U = ui(t, Kl)), (t = Mc(n, t, Kl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Ru(e) : (U = t));
    }
    function Lu(e, t, n, r) {
      ((Ki = Gi = null), ko(t), (ja = null), (Ma = 0));
      var i = t.return;
      try {
        if (tc(e, i, t, n, W)) {
          ((ql = 1), Zs(e, _i(n, e.current)), (U = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((U = i), t);
        ((ql = 1), Zs(e, _i(n, e.current)), (U = null));
        return;
      }
      t.flags & 32768
        ? (L || r === 1
            ? (e = !0)
            : Wl || W & 536870912
              ? (e = !1)
              : ((Ul = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = no.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          zu(t, e))
        : Ru(t);
    }
    function Ru(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          zu(t, Ul);
          return;
        }
        e = t.return;
        var n = zc(t.alternate, t, Kl);
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
      ql === 0 && (ql = 5);
    }
    function zu(e, t) {
      do {
        var n = Bc(e.alternate, e);
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
      ((ql = 6), (U = null));
    }
    function Bu(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Gu();
      while (su !== 0);
      if (V & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= Qr),
          Xe(e, n, o, s, c, l),
          e === H && ((U = H = null), (W = 0)),
          (lu = t),
          (cu = e),
          (uu = n),
          (du = o),
          (fu = a),
          (pu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              $u(ke, function () {
                return (Ku(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = k.T), (k.T = null), (a = A.p), (A.p = 2), (s = V), (V |= 4));
          try {
            ol(e, t, n);
          } finally {
            ((V = s), (A.p = a), (k.T = r));
          }
        }
        ((su = 1), Vu(), Hu(), Uu());
      }
    }
    function Vu() {
      if (su === 1) {
        su = 0;
        var e = cu,
          t = lu,
          n = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = V;
          V |= 4;
          try {
            yl(t, e);
            var a = Hd,
              o = Er(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && Tr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Dr(s)) {
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
                    var _ = wr(s, h),
                      v = wr(s, g);
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
            ((fp = !!Vd), (Hd = Vd = null));
          } finally {
            ((V = i), (A.p = r), (k.T = n));
          }
        }
        ((e.current = t), (su = 2));
      }
    }
    function Hu() {
      if (su === 2) {
        su = 0;
        var e = cu,
          t = lu,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          ((n = k.T), (k.T = null));
          var r = A.p;
          A.p = 2;
          var i = V;
          V |= 4;
          try {
            sl(e, t.alternate, t);
          } finally {
            ((V = i), (A.p = r), (k.T = n));
          }
        }
        su = 3;
      }
    }
    function Uu() {
      if (su === 4 || su === 3) {
        ((su = 0), Ee());
        var e = cu,
          t = lu,
          n = uu,
          r = pu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (su = 5)
          : ((su = 0), (lu = cu = null), Wu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (ou = null), tt(n), (t = t.stateNode), Pe && typeof Pe.onCommitFiberRoot == `function`)
        )
          try {
            Pe.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = k.T), (i = A.p), (A.p = 2), (k.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((k.T = t), (A.p = i));
          }
        }
        (uu & 3 && Gu(),
          od(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === hu ? mu++ : ((mu = 0), (hu = e))) : (mu = 0),
          sd(0, !1));
      }
    }
    function Wu(e, t) {
      (e.pooledCacheLanes &= t) === 0 && ((t = e.pooledCache), t != null && ((e.pooledCache = null), ca(t)));
    }
    function Gu() {
      return (Vu(), Hu(), Uu(), Ku());
    }
    function Ku() {
      if (su !== 5) return !1;
      var e = cu,
        t = du;
      du = 0;
      var n = tt(uu),
        r = k.T,
        a = A.p;
      try {
        ((A.p = 32 > n ? 32 : n), (k.T = null), (n = fu), (fu = null));
        var o = cu,
          s = uu;
        if (((su = 0), (lu = cu = null), (uu = 0), V & 6)) throw Error(i(331));
        var c = V;
        if (
          ((V |= 4),
          Il(o.current),
          Ol(o, o.current, s, n),
          (V = c),
          sd(0, !1),
          Pe && typeof Pe.onPostCommitFiberRoot == `function`)
        )
          try {
            Pe.onPostCommitFiberRoot(Ne, o);
          } catch {}
        return !0;
      } finally {
        ((A.p = a), (k.T = r), Wu(e, t));
      }
    }
    function qu(e, t, n) {
      ((t = _i(n, t)), (t = B(e.stateNode, t, 2)), (e = Ua(e, t, 2)), e !== null && (Ye(e, 2), od(e)));
    }
    function G(e, t, n) {
      if (e.tag === 3) qu(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            qu(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (ou === null || !ou.has(r)))
            ) {
              ((e = _i(n, e)),
                (n = $s(2)),
                (r = Ua(t, n, 2)),
                r !== null && (ec(n, r, t, e), Ye(r, 2), od(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Ju(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Bl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Gl = !0), i.add(n), (e = Yu.bind(null, e, t, n)), t.then(e, e));
    }
    function Yu(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        H === e &&
          (W & n) === n &&
          (ql === 4 || (ql === 3 && (W & 62914560) === W && 300 > P() - nu)
            ? !(V & 2) && Tu(e, 0)
            : (Xl |= n),
          Ql === W && (Ql = 0)),
        od(e));
    }
    function Xu(e, t) {
      (t === 0 && (t = qe()), (e = ni(e, t)), e !== null && (Ye(e, t), od(e)));
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
      return Ce(e, t);
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
                  ((a = (1 << (31 - Ie(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), fd(r, a));
              } else
                ((a = W),
                  (a = We(r, r === H ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1)),
                  !(a & 3) || Ge(r, a) || ((n = !0), fd(r, a)));
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
      for (var t = P(), n = null, r = ed; r !== null;) {
        var i = r.next,
          a = ud(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (ed = i) : (n.next = i), i === null && (td = n))
          : ((n = r), (e !== 0 || a & 3) && (rd = !0)),
          (r = i));
      }
      ((su !== 0 && su !== 5) || sd(e, !1), ad !== 0 && (ad = 0));
    }
    function ud(e, t) {
      for (
        var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ie(a),
          s = 1 << o,
          c = i[o];
        (c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ke(s, t)) : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = H),
        (n = W),
        (n = We(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (Vl === 2 || Vl === 9)) || e.cancelPendingCommit !== null)
      )
        return (r !== null && r !== null && we(r), (e.callbackNode = null), (e.callbackPriority = 0));
      if (!(n & 3) || Ge(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && we(r), tt(n))) {
          case 2:
          case 8:
            n = F;
            break;
          case 32:
            n = ke;
            break;
          case 268435456:
            n = Ae;
            break;
          default:
            n = ke;
        }
        return ((r = dd.bind(null, e)), (n = Ce(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t);
      }
      return (r !== null && r !== null && we(r), (e.callbackPriority = 2), (e.callbackNode = null), 2);
    }
    function dd(e, t) {
      if (su !== 0 && su !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Gu() && e.callbackNode !== n) return null;
      var r = W;
      return (
        (r = We(e, e === H ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (yu(e, r, t),
            ud(e, P()),
            e.callbackNode != null && e.callbackNode === n ? dd.bind(null, e) : null)
      );
    }
    function fd(e, t) {
      if (Gu()) return null;
      yu(e, t, !0);
    }
    function pd() {
      Qd(function () {
        V & 6 ? Ce(Oe, cd) : ld();
      });
    }
    function md() {
      if (ad === 0) {
        var e = da;
        (e === 0 && ((e = Be), (Be <<= 1), !(Be & 261888) && (Be = 256)), (ad = e));
      }
      return ad;
    }
    function hd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Zt(`` + e);
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
        var a = hd((i[ot] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ot] || null) ? hd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new bn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (ad !== 0) {
                    var e = o ? gd(i, o) : new FormData(i);
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? gd(i, o) : new FormData(i)),
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var vd = 0; vd < qr.length; vd++) {
      var yd = qr[vd];
      Jr(yd.toLowerCase(), `on` + (yd[0].toUpperCase() + yd.slice(1)));
    }
    (Jr(zr, `onAnimationEnd`),
      Jr(Br, `onAnimationIteration`),
      Jr(Vr, `onAnimationStart`),
      Jr(`dblclick`, `onDoubleClick`),
      Jr(`focusin`, `onFocus`),
      Jr(`focusout`, `onBlur`),
      Jr(Hr, `onTransitionRun`),
      Jr(Ur, `onTransitionStart`),
      Jr(Wr, `onTransitionCancel`),
      Jr(Gr, `onTransitionEnd`),
      St(`onMouseEnter`, [`mouseout`, `mouseover`]),
      St(`onMouseLeave`, [`mouseout`, `mouseover`]),
      St(`onPointerEnter`, [`pointerout`, `pointerover`]),
      St(`onPointerLeave`, [`pointerout`, `pointerover`]),
      xt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)),
      xt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `),
      ),
      xt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      xt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      xt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)),
      xt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `)));
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
                Yr(e);
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
                Yr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function K(e, t) {
      var n = t[ct];
      n === void 0 && (n = t[ct] = new Set());
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
          yt.forEach(function (t) {
            t !== `selectionchange` && (xd.has(t) || Cd(t, !1, e), Cd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[wd] || ((t[wd] = !0), Cd(`selectionchange`, !1, t));
      }
    }
    function Ed(e, t, n, r) {
      switch (vp(t)) {
        case 2:
          var i = pp;
          break;
        case 8:
          i = mp;
          break;
        default:
          i = Y;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !ln || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
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
              if (((s = mt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      on(function () {
        var r = a,
          i = en(n),
          s = [];
        a: {
          var c = Kr.get(e);
          if (c !== void 0) {
            var l = bn,
              u = e;
            switch (e) {
              case `keypress`:
                if (hn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Rn;
                break;
              case `focusin`:
                ((u = `focus`), (l = kn));
                break;
              case `focusout`:
                ((u = `blur`), (l = kn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = kn;
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
                l = Dn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = On;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Bn;
                break;
              case zr:
              case Br:
              case Vr:
                l = An;
                break;
              case Gr:
                l = Vn;
                break;
              case `scroll`:
              case `scrollend`:
                l = Sn;
                break;
              case `wheel`:
                l = Hn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = jn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = zn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Un;
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
                  ((g = sn(m, p)), g != null && d.push(Od(m, g, h))),
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
              c && n !== $t && (u = n.relatedTarget || n.fromElement) && (mt(u) || u[st]))
            )
              break a;
            if (
              (l || c) &&
              ((c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? mt(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = Dn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = zn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : gt(l)),
                (h = u == null ? c : gt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                mt(i) === r &&
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
              ((c = r ? gt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = lr;
            else if (rr(c)) {
              if (ur) v = yr;
              else {
                v = _r;
                var y = gr;
              }
            } else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Jt(r.elementType) && (v = lr)
                  : (v = vr));
            if ((v &&= v(e, r))) {
              ir(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Bt(c, `number`, c.value));
          }
          switch (((y = r ? gt(r) : window), e)) {
            case `focusin`:
              (rr(y) || y.contentEditable === `true`) && ((kr = y), (Ar = r), (jr = null));
              break;
            case `focusout`:
              jr = Ar = kr = null;
              break;
            case `mousedown`:
              Mr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Mr = !1), Nr(s, n, i));
              break;
            case `selectionchange`:
              if (Or) break;
            case `keydown`:
            case `keyup`:
              Nr(s, n, i);
          }
          var b;
          if (Gn)
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
            $n
              ? Zn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (Jn &&
              n.locale !== `ko` &&
              ($n || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && $n && (b = mn())
                : ((dn = i), (fn = `value` in dn ? dn.value : dn.textContent), ($n = !0))),
            (y = kd(r, x)),
            0 < y.length &&
              ((x = new Mn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = Qn(n)), b !== null && (x.data = b)))),
            (b = qn ? er(e, n) : tr(e, n)) &&
              ((x = kd(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new Mn(`onBeforeInput`, `beforeinput`, null, n, i)),
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
            ((i = sn(e, n)),
            i != null && r.unshift(Od(e, i, a)),
            (i = sn(e, t)),
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
            ? ((l = sn(n, a)), l != null && o.unshift(Od(n, l, c)))
            : i || ((l = sn(n, a)), l != null && o.push(Od(n, l, c)))),
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
            ? t === `body` || (t === `textarea` && r === ``) || Wt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Wt(e, `` + r);
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
          qt(e, r, o);
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
          ((r = Zt(`` + r)), e.setAttribute(n, r));
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
          ((r = Zt(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = Qt);
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
          ((n = Zt(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
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
          (K(`beforetoggle`, e), K(`toggle`, e), Dt(e, `popover`, r));
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
          Dt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Yt.get(n) || n), Dt(e, n, r));
      }
    }
    function Id(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          qt(e, r, o);
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
          typeof r == `string` ? Wt(e, r) : (typeof r == `number` || typeof r == `bigint`) && Wt(e, `` + r);
          break;
        case `onScroll`:
          r != null && K(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && K(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = Qt);
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
          if (!bt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ot] || null),
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
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Dt(e, n, r);
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
          zt(e, o, c, l, u, s, a, !1);
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
            t == null ? n != null && Vt(e, !!r, n, !0) : Vt(e, !!r, t, !1));
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
          Ut(e, r, a, o);
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
          if (Jt(t)) {
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
          Rt(e, s, c, l, u, d, o, a);
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
              ? !!r != !!n && (t == null ? Vt(e, !!n, n ? [] : ``, !1) : Vt(e, !!n, t, !0))
              : Vt(e, !!n, p, !1));
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
          Ht(e, p, m);
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
          if (Jt(t)) {
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
              (e.removeChild(i), Lp(t));
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
              (a[ft] ||
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
      Lp(t);
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
            (rf(n), pt(n));
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
        } else if (!e[ft])
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
      pt(e);
    }
    var _f = new Map(),
      vf = new Set();
    function yf(e) {
      return typeof e.getRootNode == `function` ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var bf = A.d;
    A.d = { f: xf, r: Sf, D: Tf, C: Ef, L: Df, m: Of, X: Af, S: kf, M: jf };
    function xf() {
      var e = bf.f(),
        t = Cu();
      return e || t;
    }
    function Sf(e) {
      var t = ht(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ds(t) : bf.r(e);
    }
    var Cf = typeof document > `u` ? null : document;
    function wf(e, t, n) {
      var r = Cf;
      if (r && typeof t == `string` && t) {
        var i = Lt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          vf.has(i) ||
            (vf.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Ld(t, `link`, e), vt(t), r.head.appendChild(t))));
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
        var i = `link[rel="preload"][as="` + Lt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Lt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Lt(n.imageSizes) + `"]`))
          : (i += `[href="` + Lt(e) + `"]`);
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
            (t === `script` && r.querySelector(Rf(a))) ||
            ((t = r.createElement(`link`)), Ld(t, `link`, e), vt(t), r.head.appendChild(t)));
      }
    }
    function Of(e, t) {
      bf.m(e, t);
      var n = Cf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Lt(r) + `"][href="` + Lt(e) + `"]`,
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
              if (n.querySelector(Rf(a))) return;
          }
          ((r = n.createElement(`link`)), Ld(r, `link`, e), vt(r), n.head.appendChild(r));
        }
      }
    }
    function kf(e, t, n) {
      bf.S(e, t, n);
      var r = Cf;
      if (r && e) {
        var i = _t(r).hoistableStyles,
          a = Nf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Pf(a)))) s.loading = 5;
          else {
            ((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)), (n = _f.get(a)) && Vf(e, n));
            var c = (o = r.createElement(`link`));
            (vt(c),
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
              Bf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Af(e, t) {
      bf.X(e, t);
      var n = Cf;
      if (n && e) {
        var r = _t(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Rf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = _f.get(i)) && Hf(e, t),
            (a = n.createElement(`script`)),
            vt(a),
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
        var r = _t(n).hoistableScripts,
          i = Lf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Rf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = _f.get(i)) && Hf(e, t),
            (a = n.createElement(`script`)),
            vt(a),
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
              (n = _t(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
            e = Nf(n.href);
            var o = _t(a).hoistableStyles,
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
                (n = _t(a).hoistableScripts),
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
      return `href="` + Lt(e) + `"`;
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
          vt(t),
          e.head.appendChild(t));
    }
    function Lf(e) {
      return `[src="` + Lt(e) + `"]`;
    }
    function Rf(e) {
      return `script[async]` + e;
    }
    function zf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Lt(n.href) + `"]`);
            if (r) return ((t.instance = r), vt(r), r);
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              vt(r),
              Ld(r, `style`, a),
              Bf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Nf(n.href);
            var o = e.querySelector(Pf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), vt(o), o);
            ((r = Ff(n)),
              (a = _f.get(a)) && Vf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              vt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Ld(o, `link`, r),
              (t.state.loading |= 4),
              Bf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Lf(n.src)),
              (a = e.querySelector(Rf(o)))
                ? ((t.instance = a), vt(a), a)
                : ((r = n),
                  (a = _f.get(o)) && ((r = f({}, n)), Hf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  vt(a),
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
          ((r = t.instance), (t.state.loading |= 4), Bf(r, n.precedence, e));
      return t.instance;
    }
    function Bf(e, t, n) {
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
    function Vf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin), (e.referrerPolicy ??= t.referrerPolicy), (e.title ??= t.title));
    }
    function Hf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wf = null;
    function Kf(e, t, n) {
      if (Wf === null) {
        var r = new Map(),
          i = (Wf = new Map());
        i.set(n, r);
      } else ((i = Wf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[ft] || a[at] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
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
    function Yf(e, t, n) {
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
    function Xf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Zf(e, t, n, r) {
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
                (e.count++, (e = J.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              vt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Ff(r)),
            (i = _f.get(i)) && Vf(r, i),
            (a = a.createElement(`link`)),
            vt(a));
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
            (e.count++, (n = J.bind(e)), t.addEventListener(`load`, n), t.addEventListener(`error`, n)));
      }
    }
    var Qf = 0;
    function $f(e, t) {
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
              0 < e.imgBytes && Qf === 0 && (Qf = 62500 * Bd());
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
                (e.imgBytes > Qf ? 50 : 800) + t,
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
    function J() {
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
        e.unsuspend !== null && (e.count++, (ep = new Map()), t.forEach(np, e), (ep = null), J.call(e)));
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
          (r = J.bind(this)),
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
      _currentValue: j,
      _currentValue2: j,
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
        (this.expirationTimes = Je(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Je(0)),
        (this.hiddenUpdates = Je(null)),
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
        (a = si(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = sa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Ba(a),
        e
      );
    }
    function op(e) {
      return e ? ((e = ai), e) : ai;
    }
    function sp(e, t, n, r, i, a) {
      ((i = op(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ha(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ua(e, r, t)),
        n !== null && (vu(n, e, t), Wa(n, e, t)));
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
    function up(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ni(e, 67108864);
        (t !== null && vu(t, e, 67108864), lp(e, 67108864));
      }
    }
    function dp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = gu();
        t = et(t);
        var n = ni(e, t);
        (n !== null && vu(n, e, t), lp(e, t));
      }
    }
    var fp = !0;
    function pp(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 2), Y(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function mp(e, t, n, r) {
      var i = k.T;
      k.T = null;
      var a = A.p;
      try {
        ((A.p = 8), Y(e, t, n, r));
      } finally {
        ((A.p = a), (k.T = i));
      }
    }
    function Y(e, t, n, r) {
      if (fp) {
        var i = hp(r);
        if (i === null) (Dd(e, t, r, gp, n), Dp(e, r));
        else if (kp(i, e, t, n, r)) r.stopPropagation();
        else if ((Dp(e, r), t & 4 && -1 < Ep.indexOf(e))) {
          for (; i !== null;) {
            var a = ht(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = Ue(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Ie(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (od(a), !(V & 6) && ((iu = P() + 500), sd(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ni(a, 2)), s !== null && vu(s, a, 2), Cu(), lp(a, 2));
              }
            if (((a = hp(r)), a === null && Dd(e, t, r, gp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Dd(e, t, r, null, n);
      }
    }
    function hp(e) {
      return ((e = en(e)), _p(e));
    }
    var gp = null;
    function _p(e) {
      if (((gp = null), (e = mt(e)), e !== null)) {
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
          switch (De()) {
            case Oe:
              return 2;
            case F:
              return 8;
            case ke:
            case I:
              return 32;
            case Ae:
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
      Sp = null,
      Cp = new Map(),
      wp = new Map(),
      Tp = [],
      Ep =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Dp(e, t) {
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
          Sp = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Cp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          wp.delete(t.pointerId);
      }
    }
    function Op(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = ht(t)), t !== null && up(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function kp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((bp = Op(bp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((xp = Op(xp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Sp = Op(Sp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Cp.set(a, Op(Cp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), wp.set(a, Op(wp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ap(e) {
      var t = mt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                rt(e.priority, function () {
                  dp(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                rt(e.priority, function () {
                  dp(n);
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
    function jp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = hp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          (($t = r), n.target.dispatchEvent(r), ($t = null));
        } else return ((t = ht(n)), t !== null && up(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Mp(e, t, n) {
      jp(e) && n.delete(t);
    }
    function Np() {
      ((yp = !1),
        bp !== null && jp(bp) && (bp = null),
        xp !== null && jp(xp) && (xp = null),
        Sp !== null && jp(Sp) && (Sp = null),
        Cp.forEach(Mp),
        wp.forEach(Mp));
    }
    function Pp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null), yp || ((yp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Np)));
    }
    var Fp = null;
    function Ip(e) {
      Fp !== e &&
        ((Fp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Fp === e && (Fp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (_p(r || n) === null) continue;
              break;
            }
            var a = ht(n);
            a !== null &&
              (e.splice(t, 3), (t -= 3), Ts(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Lp(e) {
      function t(t) {
        return Pp(t, e);
      }
      (bp !== null && Pp(bp, e),
        xp !== null && Pp(xp, e),
        Sp !== null && Pp(Sp, e),
        Cp.forEach(t),
        wp.forEach(t));
      for (var n = 0; n < Tp.length; n++) {
        var r = Tp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Tp.length && ((n = Tp[0]), n.blockedOn === null);)
        (Ap(n), n.blockedOn === null && Tp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ot] || null;
          if (typeof a == `function`) o || Ip(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ot] || null))) s = o.formAction;
              else if (_p(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Ip(n));
          }
        }
    }
    function Rp() {
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
    function zp(e) {
      this._internalRoot = e;
    }
    ((Bp.prototype.render = zp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        sp(n, gu(), e, t, null, null);
      }),
      (Bp.prototype.unmount = zp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (sp(e.current, 2, null, e, null, null), Cu(), (t[st] = null));
          }
        }));
    function Bp(e) {
      this._internalRoot = e;
    }
    Bp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = nt();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Tp.length && t !== 0 && t < Tp[n].priority; n++);
        (Tp.splice(n, 0, e), n === 0 && Ap(e));
      }
    };
    var Vp = n.version;
    if (Vp !== `19.2.7`) throw Error(i(527, Vp, `19.2.7`));
    A.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return ((e = u(t)), (e = e === null ? null : d(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Hp = {
      bundleType: 0,
      version: `19.2.7`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: k,
      reconcilerVersion: `19.2.7`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Up = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Up.isDisabled && Up.supportsFiber)
        try {
          ((Ne = Up.inject(Hp)), (Pe = Up));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = Js,
        s = Ys,
        c = Xs;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = ap(e, 1, !1, null, null, n, r, null, o, s, c, Rp)),
        (e[st] = t.current),
        Td(e),
        new zp(t)
      );
    };
  }),
  Yf = s((e, t) => {
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
    (n(), (t.exports = Jf()));
  });
function Xf(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  $f(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Zf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Qf(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var $f,
  J,
  ep = o(() => {
    (($f = function (e, t) {
      return (
        ($f =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        $f(e, t)
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
  tp = o(() => {});
function np(e, t) {
  var n = t && t.cache ? t.cache : fp,
    r = t && t.serializer ? t.serializer : up;
  return (t && t.strategy ? t.strategy : sp)(e, { cache: n, serializer: r });
}
function rp(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function ip(e, t, n, r) {
  var i = rp(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function ap(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function op(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function sp(e, t) {
  var n = e.length === 1 ? ip : ap;
  return op(e, this, n, t.cache.create(), t.serializer);
}
function cp(e, t) {
  return op(e, this, ap, t.cache.create(), t.serializer);
}
function lp(e, t) {
  return op(e, this, ip, t.cache.create(), t.serializer);
}
var up,
  dp,
  fp,
  pp,
  mp = o(() => {
    ((up = function () {
      return JSON.stringify(arguments);
    }),
      (dp = (function () {
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
      (fp = {
        create: function () {
          return new dp();
        },
      }),
      (pp = { variadic: cp, monadic: lp }));
  }),
  Y,
  hp = o(() => {
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
function gp(e) {
  return e.type === Dp.literal;
}
function _p(e) {
  return e.type === Dp.argument;
}
function vp(e) {
  return e.type === Dp.number;
}
function yp(e) {
  return e.type === Dp.date;
}
function bp(e) {
  return e.type === Dp.time;
}
function xp(e) {
  return e.type === Dp.select;
}
function Sp(e) {
  return e.type === Dp.plural;
}
function Cp(e) {
  return e.type === Dp.pound;
}
function wp(e) {
  return e.type === Dp.tag;
}
function Tp(e) {
  return !!(e && typeof e == `object` && e.type === Op.number);
}
function Ep(e) {
  return !!(e && typeof e == `object` && e.type === Op.dateTime);
}
var Dp,
  Op,
  kp = o(() => {
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
    })((Dp ||= {})),
      (function (e) {
        ((e[(e.number = 0)] = `number`), (e[(e.dateTime = 1)] = `dateTime`));
      })((Op ||= {})));
  }),
  Ap,
  jp = o(() => {
    Ap = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  });
function Mp(e) {
  var t = {};
  return (
    e.replace(Np, function (e) {
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
var Np,
  Pp = o(() => {
    Np =
      /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  }),
  Fp,
  Ip = o(() => {
    Fp = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  });
function Lp(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  for (
    var t = e.split(Fp).filter(function (e) {
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
function Rp(e) {
  return e.replace(/^(.*?)-/, ``);
}
function zp(e) {
  var t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(Gp, function (e, n, r) {
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
function Bp(e) {
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
function Vp(e) {
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
      !qp.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Hp(e) {
  return Bp(e) || {};
}
function Up(e) {
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
        ((t.style = `unit`), (t.unit = Rp(i.options[0])));
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
            return J(J({}, e), Hp(t));
          }, {}),
        );
        continue;
      case `engineering`:
        t = J(
          J(J({}, t), { notation: `engineering` }),
          i.options.reduce(function (e, t) {
            return J(J({}, e), Hp(t));
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
        i.options[0].replace(Kp, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a) throw Error(`We currently do not support maximum integer digits`);
          else if (o) throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (qp.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Wp.test(i.stem)) {
      if (i.options.length > 1)
        throw RangeError(`Fraction-precision stems only accept a single optional option`);
      i.stem.replace(Wp, function (e, n, r, i, a, o) {
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
        : a && (t = J(J({}, t), zp(a)));
      continue;
    }
    if (Gp.test(i.stem)) {
      t = J(J({}, t), zp(i.stem));
      continue;
    }
    var o = Bp(i.stem);
    o && (t = J(J({}, t), o));
    var s = Vp(i.stem);
    s && (t = J(J({}, t), s));
  }
  return t;
}
var Wp,
  Gp,
  Kp,
  qp,
  Jp = o(() => {
    (ep(),
      Ip(),
      (Wp = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g),
      (Gp = /^(@+)?(\+|#+)?[rs]?$/g),
      (Kp = /(\*)(0+)|(#+)(0+)|(0+)/g),
      (qp = /^(0+)$/));
  }),
  Yp = o(() => {
    (Pp(), Jp());
  }),
  Xp,
  Zp = o(() => {
    Xp = {
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
function Qp(e, t) {
  for (var n = ``, r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === `j`) {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) (a++, r++);
      var o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = `a`,
        l = $p(t);
      for ((l == `H` || l == `k`) && (s = 0); s-- > 0;) n += c;
      for (; o-- > 0;) n = l + n;
    } else n += i === `J` ? `H` : i;
  }
  return n;
}
function $p(e) {
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
    (Xp[r || ``] || Xp[n || ``] || Xp[`${n}-001`] || Xp[`001`])[0]
  );
}
var em = o(() => {
  Zp();
});
function X(e, t) {
  return { start: e, end: t };
}
function tm(e, t) {
  return new RegExp(e, t);
}
function nm(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function rm(e) {
  return nm(e) || e === 47;
}
function im(e) {
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
function am(e) {
  return (e >= 9 && e <= 13) || e === 32 || e === 133 || (e >= 8206 && e <= 8207) || e === 8232 || e === 8233;
}
function om(e) {
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
var sm,
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
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em = o(() => {
    (ep(),
      hp(),
      kp(),
      jp(),
      Yp(),
      em(),
      (sm = RegExp(`^${Ap.source}*`)),
      (cm = RegExp(`${Ap.source}*\$`)),
      (lm = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1)),
      (um = !!String.fromCodePoint),
      (dm = !!Object.fromEntries),
      (fm = !!String.prototype.codePointAt),
      (pm = !!String.prototype.trimStart),
      (mm = !!String.prototype.trimEnd),
      (hm = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
            return (
              typeof e == `number` && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
            );
          }),
      (gm = !0));
    try {
      gm = tm(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] === `a`;
    } catch {
      gm = !1;
    }
    ((_m = lm
      ? function (e, t, n) {
          return e.startsWith(t, n);
        }
      : function (e, t, n) {
          return e.slice(n, n + t.length) === t;
        }),
      (vm = um
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
      (ym = dm
        ? Object.fromEntries
        : function (e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                a = i[0];
              t[a] = i[1];
            }
            return t;
          }),
      (bm = fm
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
      (xm = pm
        ? function (e) {
            return e.trimStart();
          }
        : function (e) {
            return e.replace(sm, ``);
          }),
      (Sm = mm
        ? function (e) {
            return e.trimEnd();
          }
        : function (e) {
            return e.replace(cm, ``);
          }),
      gm
        ? ((wm = tm(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`)),
          (Cm = function (e, t) {
            return ((wm.lastIndex = t), wm.exec(e)[1] ?? ``);
          }))
        : (Cm = function (e, t) {
            for (var n = []; ;) {
              var r = bm(e, t);
              if (r === void 0 || am(r) || om(r)) break;
              (n.push(r), (t += r >= 65536 ? 2 : 1));
            }
            return vm.apply(void 0, n);
          }),
      (Tm = (function () {
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
                (this.bump(), r.push({ type: Dp.pound, location: X(o, this.clonePosition()) }));
              } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
                if (n) break;
                return this.error(Y.UNMATCHED_CLOSING_TAG, X(this.clonePosition(), this.clonePosition()));
              } else if (i === 60 && !this.ignoreTag && nm(this.peek() || 0)) {
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
                val: { type: Dp.literal, value: `<${r}/>`, location: X(n, this.clonePosition()) },
                err: null,
              };
            if (this.bumpIf(`>`)) {
              var i = this.parseMessage(e + 1, t, !0);
              if (i.err) return i;
              var a = i.val,
                o = this.clonePosition();
              if (this.bumpIf(`</`)) {
                if (this.isEOF() || !nm(this.char()))
                  return this.error(Y.INVALID_TAG, X(o, this.clonePosition()));
                var s = this.clonePosition();
                return r === this.parseTagName()
                  ? (this.bumpSpace(),
                    this.bumpIf(`>`)
                      ? {
                          val: { type: Dp.tag, value: r, children: a, location: X(n, this.clonePosition()) },
                          err: null,
                        }
                      : this.error(Y.INVALID_TAG, X(o, this.clonePosition())))
                  : this.error(Y.UNMATCHED_CLOSING_TAG, X(s, this.clonePosition()));
              }
              return this.error(Y.UNCLOSED_TAG, X(n, this.clonePosition()));
            }
            return this.error(Y.INVALID_TAG, X(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && im(this.char());) this.bump();
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
            var s = X(n, this.clonePosition());
            return { val: { type: Dp.literal, value: r, location: s }, err: null };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !rm(this.peek() || 0))
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
            return vm.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return n === 60 ||
              n === 123 ||
              (n === 35 && (t === `plural` || t === `selectordinal`)) ||
              (n === 125 && e > 0)
              ? null
              : (this.bump(), vm(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, X(n, this.clonePosition()));
            if (this.char() === 125)
              return (this.bump(), this.error(Y.EMPTY_ARGUMENT, X(n, this.clonePosition())));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(Y.MALFORMED_ARGUMENT, X(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, X(n, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  { val: { type: Dp.argument, value: r, location: X(n, this.clonePosition()) }, err: null }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, X(n, this.clonePosition()))
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(Y.MALFORMED_ARGUMENT, X(n, this.clonePosition()));
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = Cm(this.message, t),
              r = t + n.length;
            return (this.bumpTo(r), { value: n, location: X(e, this.clonePosition()) });
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              o = this.clonePosition();
            switch (a) {
              case ``:
                return this.error(Y.EXPECT_ARGUMENT_TYPE, X(i, o));
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
                  var u = Sm(l.val);
                  if (u.length === 0)
                    return this.error(Y.EXPECT_ARGUMENT_STYLE, X(this.clonePosition(), this.clonePosition()));
                  s = { style: u, styleLocation: X(c, this.clonePosition()) };
                }
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var f = X(r, this.clonePosition());
                if (s && _m(s?.style, `::`, 0)) {
                  var p = xm(s.style.slice(2));
                  if (a === `number`) {
                    var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
                    return l.err
                      ? l
                      : { val: { type: Dp.number, value: n, location: f, style: l.val }, err: null };
                  }
                  if (p.length === 0) return this.error(Y.EXPECT_DATE_TIME_SKELETON, f);
                  var m = p;
                  this.locale && (m = Qp(p, this.locale));
                  var u = {
                    type: Op.dateTime,
                    pattern: m,
                    location: s.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? Mp(m) : {},
                  };
                  return {
                    val: { type: a === `date` ? Dp.date : Dp.time, value: n, location: f, style: u },
                    err: null,
                  };
                }
                return {
                  val: {
                    type: a === `number` ? Dp.number : a === `date` ? Dp.date : Dp.time,
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
                  return this.error(Y.EXPECT_SELECT_ARGUMENT_OPTIONS, X(h, J({}, h)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if (a !== `select` && g.value === `offset`) {
                  if (!this.bumpIf(`:`))
                    return this.error(
                      Y.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      X(this.clonePosition(), this.clonePosition()),
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
                var y = X(r, this.clonePosition());
                return a === `select`
                  ? { val: { type: Dp.select, value: n, options: ym(v.val), location: y }, err: null }
                  : {
                      val: {
                        type: Dp.plural,
                        value: n,
                        options: ym(v.val),
                        offset: _,
                        pluralType: a === `plural` ? `cardinal` : `ordinal`,
                        location: y,
                      },
                      err: null,
                    };
              default:
                return this.error(Y.INVALID_ARGUMENT_TYPE, X(i, o));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || this.char() !== 125
              ? this.error(Y.EXPECT_ARGUMENT_CLOSING_BRACE, X(e, this.clonePosition()))
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF();)
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil(`'`))
                    return this.error(Y.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, X(n, this.clonePosition()));
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
              n = Lp(e);
            } catch {
              return this.error(Y.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: Op.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Up(n) : {},
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
                  ((l = X(u, this.clonePosition())), (c = this.message.slice(u.offset, this.offset())));
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
                  X(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(e + 1, t, n);
              if (p.err) return p;
              var m = this.tryParseArgumentClose(f);
              if (m.err) return m;
              (o.push([c, { value: p.val, location: X(f, this.clonePosition()) }]),
                s.add(c),
                this.bumpSpace(),
                (i = this.parseIdentifierIfPossible()),
                (c = i.value),
                (l = i.location));
            }
            return o.length === 0
              ? this.error(
                  t === `select` ? Y.EXPECT_SELECT_ARGUMENT_SELECTOR : Y.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  X(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !a
                ? this.error(Y.MISSING_OTHER_CLAUSE, X(this.clonePosition(), this.clonePosition()))
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
            var s = X(r, this.clonePosition());
            return i ? ((a *= n), hm(a) ? { val: a, err: null } : this.error(t, s)) : this.error(e, s);
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
            var t = bm(this.message, e);
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
            if (_m(this.message, e, this.offset())) {
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
            for (; !this.isEOF() && am(this.char());) this.bump();
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
  Dm = o(() => {
    kp();
  });
function Om(e) {
  e.forEach(function (e) {
    if ((delete e.location, xp(e) || Sp(e)))
      for (var t in e.options) (delete e.options[t].location, Om(e.options[t].value));
    else
      (vp(e) && Tp(e.style)) || ((yp(e) || bp(e)) && Ep(e.style))
        ? delete e.style.location
        : wp(e) && Om(e.children);
  });
}
function km(e, t) {
  (t === void 0 && (t = {}), (t = J({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)));
  var n = new Tm(e, t).parse();
  if (n.err) {
    var r = SyntaxError(Y[n.err.kind]);
    throw ((r.location = n.err.location), (r.originalMessage = n.err.message), r);
  }
  return (t?.captureLocation || Om(n.val), n.val);
}
var Am = o(() => {
    (ep(), hp(), Em(), kp(), kp(), Dm());
  }),
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im = o(() => {
    (ep(),
      (function (e) {
        ((e.MISSING_VALUE = `MISSING_VALUE`),
          (e.INVALID_VALUE = `INVALID_VALUE`),
          (e.MISSING_INTL_API = `MISSING_INTL_API`));
      })((jm ||= {})),
      (Mm = (function (e) {
        Xf(t, e);
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
      (Nm = (function (e) {
        Xf(t, e);
        function t(t, n, r, i) {
          return (
            e.call(
              this,
              `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`,
              jm.INVALID_VALUE,
              i,
            ) || this
          );
        }
        return t;
      })(Mm)),
      (Pm = (function (e) {
        Xf(t, e);
        function t(t, n, r) {
          return e.call(this, `Value for "${t}" must be of type ${n}`, jm.INVALID_VALUE, r) || this;
        }
        return t;
      })(Mm)),
      (Fm = (function (e) {
        Xf(t, e);
        function t(t, n) {
          return (
            e.call(
              this,
              `The intl string context variable "${t}" was not provided to the string "${n}"`,
              jm.MISSING_VALUE,
              n,
            ) || this
          );
        }
        return t;
      })(Mm)));
  });
function Lm(e) {
  return e.length < 2
    ? e
    : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (!n || n.type !== Bm.literal || t.type !== Bm.literal ? e.push(t) : (n.value += t.value), e);
      }, []);
}
function Rm(e) {
  return typeof e == `function`;
}
function zm(e, t, n, r, i, a, o) {
  if (e.length === 1 && gp(e[0])) return [{ type: Bm.literal, value: e[0].value }];
  for (var s = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c];
    if (gp(u)) {
      s.push({ type: Bm.literal, value: u.value });
      continue;
    }
    if (Cp(u)) {
      typeof a == `number` && s.push({ type: Bm.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    var d = u.value;
    if (!(i && d in i)) throw new Fm(d, o);
    var f = i[d];
    if (_p(u)) {
      ((!f || typeof f == `string` || typeof f == `number`) &&
        (f = typeof f == `string` || typeof f == `number` ? String(f) : ``),
        s.push({ type: typeof f == `string` ? Bm.literal : Bm.object, value: f }));
      continue;
    }
    if (yp(u)) {
      var p = typeof u.style == `string` ? r.date[u.style] : Ep(u.style) ? u.style.parsedOptions : void 0;
      s.push({ type: Bm.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (bp(u)) {
      var p =
        typeof u.style == `string` ? r.time[u.style] : Ep(u.style) ? u.style.parsedOptions : r.time.medium;
      s.push({ type: Bm.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (vp(u)) {
      var p = typeof u.style == `string` ? r.number[u.style] : Tp(u.style) ? u.style.parsedOptions : void 0;
      (p && p.scale && (f *= p.scale || 1),
        s.push({ type: Bm.literal, value: n.getNumberFormat(t, p).format(f) }));
      continue;
    }
    if (wp(u)) {
      var m = u.children,
        h = u.value,
        g = i[h];
      if (!Rm(g)) throw new Pm(h, `function`, o);
      var _ = g(
        zm(m, t, n, r, i, a).map(function (e) {
          return e.value;
        }),
      );
      (Array.isArray(_) || (_ = [_]),
        s.push.apply(
          s,
          _.map(function (e) {
            return { type: typeof e == `string` ? Bm.literal : Bm.object, value: e };
          }),
        ));
    }
    if (xp(u)) {
      var v = u.options[f] || u.options.other;
      if (!v) throw new Nm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, zm(v.value, t, n, r, i));
      continue;
    }
    if (Sp(u)) {
      var v = u.options[`=${f}`];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Mm(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            jm.MISSING_INTL_API,
            o,
          );
        var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        v = u.options[y] || u.options.other;
      }
      if (!v) throw new Nm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, zm(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return Lm(s);
}
var Bm,
  Vm = o(() => {
    (Am(),
      Im(),
      (function (e) {
        ((e[(e.literal = 0)] = `literal`), (e[(e.object = 1)] = `object`));
      })((Bm ||= {})));
  });
function Hm(e, t) {
  return t
    ? J(
        J(J({}, e || {}), t || {}),
        Object.keys(e).reduce(function (n, r) {
          return ((n[r] = J(J({}, e[r]), t[r] || {})), n);
        }, {}),
      )
    : e;
}
function Um(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (n, r) {
          return ((n[r] = Hm(e[r], t[r])), n);
        },
        J({}, e),
      )
    : e;
}
function Wm(e) {
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
function Gm(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: np(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(e, Qf([void 0], t, !1)))();
        },
        { cache: Wm(e.number), strategy: pp.variadic },
      ),
      getDateTimeFormat: np(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(e, Qf([void 0], t, !1)))();
        },
        { cache: Wm(e.dateTime), strategy: pp.variadic },
      ),
      getPluralRules: np(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(e, Qf([void 0], t, !1)))();
        },
        { cache: Wm(e.pluralRules), strategy: pp.variadic },
      ),
    }
  );
}
var Km,
  qm = o(() => {
    (ep(),
      mp(),
      Am(),
      Vm(),
      (Km = (function () {
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
                  !e.length || t.type !== Bm.literal || typeof e[e.length - 1] != `string`
                    ? e.push(t.value)
                    : (e[e.length - 1] += t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || `` : n;
            }),
            (this.formatToParts = function (e) {
              return zm(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
            var s = Zf(o, [`formatters`]);
            this.ast = e.__parse(t, J(J({}, s), { locale: this.resolvedLocale }));
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw TypeError(`A message must be provided as a String or AST.`);
          ((this.formats = Um(e.formats, r)),
            (this.formatters = (i && i.formatters) || Gm(this.formatterCache)));
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
          (e.__parse = km),
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
  Jm = o(() => {
    (qm(), qm(), Im(), Vm());
  }),
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh = o(() => {
    (ep(),
      (function (e) {
        ((e.FORMAT_ERROR = `FORMAT_ERROR`),
          (e.UNSUPPORTED_FORMATTER = `UNSUPPORTED_FORMATTER`),
          (e.INVALID_CONFIG = `INVALID_CONFIG`),
          (e.MISSING_DATA = `MISSING_DATA`),
          (e.MISSING_TRANSLATION = `MISSING_TRANSLATION`));
      })((Ym ||= {})),
      (Xm = (function (e) {
        Xf(t, e);
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
      (Zm = (function (e) {
        Xf(t, e);
        function t(t, n) {
          return e.call(this, Ym.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return t;
      })(Xm)),
      (Qm = (function (e) {
        Xf(t, e);
        function t(t, n) {
          return e.call(this, Ym.INVALID_CONFIG, t, n) || this;
        }
        return t;
      })(Xm)),
      ($m = (function (e) {
        Xf(t, e);
        function t(t, n) {
          return e.call(this, Ym.MISSING_DATA, t, n) || this;
        }
        return t;
      })(Xm)),
      (eh = (function (e) {
        Xf(t, e);
        function t(t, n, r) {
          var i =
            e.call(
              this,
              Ym.FORMAT_ERROR,
              `${t}
Locale: ${n}
`,
              r,
            ) || this;
          return ((i.locale = n), i);
        }
        return t;
      })(Xm)),
      (th = (function (e) {
        Xf(t, e);
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
      })(eh)),
      (nh = (function (e) {
        Xf(t, e);
        function t(t, n) {
          var r =
            e.call(
              this,
              Ym.MISSING_TRANSLATION,
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
      })(Xm)));
  });
function ih(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function ah(e, t, n) {
  return (
    n === void 0 && (n = {}),
    t.reduce(function (t, r) {
      return (r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t);
    }, {})
  );
}
function oh() {
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
function sh(e) {
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
function ch(e) {
  e === void 0 && (e = oh());
  var t = Intl.RelativeTimeFormat,
    n = Intl.ListFormat,
    r = Intl.DisplayNames,
    i = np(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(e, Qf([void 0], t, !1)))();
      },
      { cache: sh(e.dateTime), strategy: pp.variadic },
    ),
    a = np(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, Qf([void 0], t, !1)))();
      },
      { cache: sh(e.number), strategy: pp.variadic },
    ),
    o = np(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, Qf([void 0], t, !1)))();
      },
      { cache: sh(e.pluralRules), strategy: pp.variadic },
    );
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: np(
      function (e, t, n, r) {
        return new Km(
          e,
          t,
          n,
          J({ formatters: { getNumberFormat: a, getDateTimeFormat: i, getPluralRules: o } }, r || {}),
        );
      },
      { cache: sh(e.message), strategy: pp.variadic },
    ),
    getRelativeTimeFormat: np(
      function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return new (t.bind.apply(t, Qf([void 0], e, !1)))();
      },
      { cache: sh(e.relativeTime), strategy: pp.variadic },
    ),
    getPluralRules: o,
    getListFormat: np(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (n.bind.apply(n, Qf([void 0], e, !1)))();
      },
      { cache: sh(e.list), strategy: pp.variadic },
    ),
    getDisplayNames: np(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (r.bind.apply(r, Qf([void 0], e, !1)))();
      },
      { cache: sh(e.displayNames), strategy: pp.variadic },
    ),
  };
}
function lh(e, t, n, r) {
  var i = e && e[t],
    a;
  if ((i && (a = i[n]), a)) return a;
  r(new Zm(`No ${t} format named: ${n}`));
}
var uh,
  dh,
  fh,
  ph = o(() => {
    (ep(),
      mp(),
      Jm(),
      rh(),
      (uh = function (e) {}),
      (dh = function (e) {}),
      (fh = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: `en`,
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: uh,
        onWarn: dh,
      }));
  });
function mh(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    return ((n[r] = J({ timeZone: t }, e[r])), n);
  }, {});
}
function hh(e, t) {
  return Object.keys(J(J({}, e), t)).reduce(function (n, r) {
    return ((n[r] = J(J({}, e[r] || {}), t[r] || {})), n);
  }, {});
}
function gh(e, t) {
  if (!t) return e;
  var n = Km.formats;
  return J(J(J({}, n), e), {
    date: hh(mh(n.date, t), mh(e.date || {}, t)),
    time: hh(mh(n.time, t), mh(e.time || {}, t)),
  });
}
var _h,
  vh = o(() => {
    (ep(),
      Am(),
      Jm(),
      rh(),
      ph(),
      (_h = function (e, t, n, r, i) {
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
        ih(
          !!m,
          `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`,
        );
        var g = String(m),
          _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
        if (Array.isArray(_) && _.length === 1 && _[0].type === Dp.literal) return _[0].value;
        if (!r && _ && typeof _ == `string` && !p) return _.replace(/'\{(.*?)\}'/gi, `{$1}`);
        if (((r = J(J({}, p), r || {})), (o = gh(o, f)), (l = gh(l, f)), !_)) {
          if (u === !1 && _ === ``) return _;
          if (((!h || (a && a.toLowerCase() !== c.toLowerCase())) && d(new nh(n, a)), h))
            try {
              var v = t.getMessageFormat(h, c, l, i);
              return v.format(r);
            } catch (e) {
              return (
                d(
                  new th(
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
            new th(
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
              new th(`Error formatting the default message for: "${g}", rendering message verbatim`, a, n, e),
            );
          }
        return typeof _ == `string` ? _ : typeof h == `string` ? h : g;
      }));
  });
function yh(e, t, n, r) {
  var i = e.locale,
    a = e.formats,
    o = e.onError,
    s = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format,
    l = J(J({}, s && { timeZone: s }), c && lh(a, t, c, o)),
    u = ah(r, Th, l);
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
function bh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return yh(e, `date`, t, o).format(s);
  } catch (t) {
    e.onError(new eh(`Error formatting date.`, e.locale, t));
  }
  return String(s);
}
function xh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return yh(e, `time`, t, o).format(s);
  } catch (t) {
    e.onError(new eh(`Error formatting time.`, e.locale, t));
  }
  return String(s);
}
function Sh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = n[2],
    s = o === void 0 ? {} : o,
    c = typeof i == `string` ? new Date(i || 0) : i,
    l = typeof a == `string` ? new Date(a || 0) : a;
  try {
    return yh(e, `dateTimeRange`, t, s).formatRange(c, l);
  } catch (t) {
    e.onError(new eh(`Error formatting date time range.`, e.locale, t));
  }
  return String(c);
}
function Ch(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return yh(e, `date`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new eh(`Error formatting date.`, e.locale, t));
  }
  return [];
}
function wh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return yh(e, `time`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new eh(`Error formatting time.`, e.locale, t));
  }
  return [];
}
var Th,
  Eh = o(() => {
    (ep(),
      rh(),
      ph(),
      (Th = [
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
function Dh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  Intl.DisplayNames ||
    a(
      new Mm(
        `Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,
        jm.MISSING_INTL_API,
      ),
    );
  var o = ah(r, Oh);
  try {
    return t(i, o).of(n);
  } catch (e) {
    a(new eh(`Error formatting display name.`, i, e));
  }
}
var Oh,
  kh = o(() => {
    (ph(), Jm(), rh(), (Oh = [`style`, `type`, `fallback`, `languageDisplay`]));
  });
function Ah(e) {
  return `${Ph}_${e}_${Ph}`;
}
function jh(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Mh(e, t, n, r).reduce(function (e, t) {
    var n = t.value;
    return (
      typeof n == `string` && typeof e[e.length - 1] == `string` ? (e[e.length - 1] += n) : e.push(n),
      e
    );
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? `` : i;
}
function Mh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.ListFormat ||
      a(
        new Mm(
          `Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,
          jm.MISSING_INTL_API,
        ),
      ));
  var o = ah(r, Nh);
  try {
    var s = {},
      c = Array.from(n).map(function (e, t) {
        if (typeof e == `object` && e) {
          var n = Ah(t);
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
    a(new eh(`Error formatting list.`, i, e));
  }
  return n;
}
var Nh,
  Ph,
  Fh = o(() => {
    (ep(), Jm(), rh(), ph(), (Nh = [`type`, `style`]), (Ph = Date.now()));
  });
function Ih(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.PluralRules ||
      a(
        new Mm(
          `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
          jm.MISSING_INTL_API,
        ),
      ));
  var o = ah(r, Lh);
  try {
    return t(i, o).select(n);
  } catch (e) {
    a(new eh(`Error formatting plural.`, i, e));
  }
  return `other`;
}
var Lh,
  Rh = o(() => {
    (Jm(), rh(), ph(), (Lh = [`type`]));
  });
function zh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (!!o && lh(i, `relative`, o, a)) || {};
  return t(r, ah(n, Vh, s));
}
function Bh(e, t, n, r, i) {
  (i === void 0 && (i = {}),
    (r ||= `second`),
    Intl.RelativeTimeFormat ||
      e.onError(
        new Mm(
          `Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,
          jm.MISSING_INTL_API,
        ),
      ));
  try {
    return zh(e, t, i).format(n, r);
  } catch (t) {
    e.onError(new eh(`Error formatting relative time.`, e.locale, t));
  }
  return String(n);
}
var Vh,
  Hh = o(() => {
    (ph(), Jm(), rh(), (Vh = [`numeric`, `style`]));
  });
function Uh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (o && lh(i, `number`, o, a)) || {};
  return t(r, ah(n, Kh, s));
}
function Wh(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Uh(e, t, r).format(n);
  } catch (t) {
    e.onError(new eh(`Error formatting number.`, e.locale, t));
  }
  return String(n);
}
function Gh(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Uh(e, t, r).formatToParts(n);
  } catch (t) {
    e.onError(new eh(`Error formatting number.`, e.locale, t));
  }
  return [];
}
var Kh,
  qh = o(() => {
    (rh(),
      ph(),
      (Kh = [
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
function Jh(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == `string`;
}
function Yh(e) {
  e.onWarn &&
    e.defaultRichTextElements &&
    Jh(e.messages || {}) &&
    e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function Xh(e, t) {
  var n = ch(t),
    r = J(J({}, fh), e),
    i = r.locale,
    a = r.defaultLocale,
    o = r.onError;
  return (
    i
      ? !Intl.NumberFormat.supportedLocalesOf(i).length && o
        ? o(
            new $m(
              `Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
        : !Intl.DateTimeFormat.supportedLocalesOf(i).length &&
          o &&
          o(
            new $m(
              `Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
      : (o &&
          o(
            new Qm(
              `"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`,
            ),
          ),
        (r.locale = r.defaultLocale || `en`)),
    Yh(r),
    J(J({}, r), {
      formatters: n,
      formatNumber: Wh.bind(null, r, n.getNumberFormat),
      formatNumberToParts: Gh.bind(null, r, n.getNumberFormat),
      formatRelativeTime: Bh.bind(null, r, n.getRelativeTimeFormat),
      formatDate: bh.bind(null, r, n.getDateTimeFormat),
      formatDateToParts: Ch.bind(null, r, n.getDateTimeFormat),
      formatTime: xh.bind(null, r, n.getDateTimeFormat),
      formatDateTimeRange: Sh.bind(null, r, n.getDateTimeFormat),
      formatTimeToParts: wh.bind(null, r, n.getDateTimeFormat),
      formatPlural: Ih.bind(null, r, n.getPluralRules),
      formatMessage: _h.bind(null, r, n),
      $t: _h.bind(null, r, n),
      formatList: jh.bind(null, r, n.getListFormat),
      formatListToParts: Mh.bind(null, r, n.getListFormat),
      formatDisplayName: Dh.bind(null, r, n.getDisplayNames),
    })
  );
}
var Zh = o(() => {
    (ep(), Eh(), kh(), rh(), Fh(), vh(), qh(), Rh(), Hh(), ph());
  }),
  Qh = o(() => {
    (tp(), ph(), rh(), vh(), Eh(), kh(), Fh(), Rh(), Hh(), qh(), Zh());
  });
function $h(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function eg(e) {
  $h(
    e,
    "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
  );
}
function tg(e) {
  return function (t) {
    return e(og(t));
  };
}
function ng(e, t) {
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
var rg,
  ig,
  ag,
  og,
  sg = o(() => {
    (ep(),
      (rg = u(Uf())),
      Qh(),
      (ig = J(J({}, fh), { textComponent: rg.Fragment })),
      (ag = function (e, t) {
        return rg.isValidElement(e) ? rg.cloneElement(e, { key: t }) : e;
      }),
      (og = function (e) {
        return rg.Children.map(e, ag) ?? [];
      }));
  }),
  cg = s((e) => {
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
  lg = s((e, t) => {
    t.exports = cg();
  }),
  ug = s((e, t) => {
    var n = lg(),
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
  dg,
  fg,
  pg,
  mg,
  hg,
  gg = o(() => {
    (ug(),
      (dg = u(Uf())),
      (fg =
        typeof window < `u` && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
          ? window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = dg.createContext(null))
          : dg.createContext(null)),
      fg.Consumer,
      (pg = fg.Provider),
      (mg = pg),
      (hg = fg));
  });
function _g() {
  var e = vg.useContext(hg);
  return (eg(e), e);
}
var vg,
  yg = o(() => {
    ((vg = u(Uf())), sg(), gg());
  });
function bg(e) {
  var t = function (t) {
    var n = _g(),
      r = t.value,
      i = t.children,
      a = Zf(t, [`value`, `children`]),
      o = typeof r == `string` ? new Date(r || 0) : r;
    return i(e === `formatDate` ? n.formatDateToParts(o, a) : n.formatTimeToParts(o, a));
  };
  return ((t.displayName = wg[e]), t);
}
function xg(e) {
  var t = function (t) {
    var n = _g(),
      r = t.value,
      i = t.children,
      a = Zf(t, [`value`, `children`]),
      o = n[e](r, a);
    if (typeof i == `function`) return i(o);
    var s = n.textComponent || Sg.Fragment;
    return Sg.createElement(s, null, o);
  };
  return ((t.displayName = Cg[e]), t);
}
var Sg,
  Cg,
  wg,
  Tg,
  Eg = o(() => {
    (ep(),
      (Sg = u(Uf())),
      yg(),
      (function (e) {
        ((e.formatDate = `FormattedDate`),
          (e.formatTime = `FormattedTime`),
          (e.formatNumber = `FormattedNumber`),
          (e.formatList = `FormattedList`),
          (e.formatDisplayName = `FormattedDisplayName`));
      })((Cg ||= {})),
      (function (e) {
        ((e.formatDate = `FormattedDateParts`),
          (e.formatTime = `FormattedTimeParts`),
          (e.formatNumber = `FormattedNumberParts`),
          (e.formatList = `FormattedListParts`));
      })((wg ||= {})),
      (Tg = function (e) {
        var t = _g(),
          n = e.value,
          r = e.children,
          i = Zf(e, [`value`, `children`]);
        return r(t.formatNumberToParts(n, i));
      }),
      (Tg.displayName = `FormattedNumberParts`),
      (Tg.displayName = `FormattedNumberParts`));
  });
function Dg(e) {
  return (
    e &&
    Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      return ((t[n] = Rm(r) ? tg(r) : r), t);
    }, {})
  );
}
var Og,
  kg,
  Ag = o(() => {
    (ep(),
      Qh(),
      Jm(),
      sg(),
      (Og = function (e, t, n, r) {
        for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
        var o = Dg(r),
          s = _h.apply(void 0, Qf([e, t, n, o], i, !1));
        return Array.isArray(s) ? og(s) : s;
      }),
      (kg = function (e, t) {
        var n = e.defaultRichTextElements,
          r = Zf(e, [`defaultRichTextElements`]),
          i = Dg(n),
          a = Xh(J(J(J({}, ig), r), { defaultRichTextElements: i }), t),
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
          formatMessage: Og.bind(null, o, a.formatters),
          $t: Og.bind(null, o, a.formatters),
        });
      }));
  });
function jg(e, t) {
  var n = e.values,
    r = Zf(e, [`values`]),
    i = t.values,
    a = Zf(t, [`values`]);
  return ng(i, n) && ng(r, a);
}
function Mg(e) {
  var t = _g(),
    n = t.formatMessage,
    r = t.textComponent,
    i = r === void 0 ? Ng.Fragment : r,
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
      ? Ng.createElement(d, null, p)
      : Ng.createElement(Ng.Fragment, null, p);
}
var Ng,
  Pg,
  Fg = o(() => {
    (ep(),
      (Ng = u(Uf())),
      sg(),
      yg(),
      (Mg.displayName = `FormattedMessage`),
      (Pg = Ng.memo(Mg, jg)),
      (Pg.displayName = `MemoizedFormattedMessage`));
  });
function Ig(e) {
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
var Lg,
  Rg,
  zg = o(() => {
    (ep(),
      Qh(),
      (Lg = u(Uf())),
      sg(),
      Ag(),
      gg(),
      (Rg = (function (e) {
        Xf(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          return (
            (t.cache = oh()),
            (t.state = { cache: t.cache, intl: kg(Ig(t.props), t.cache), prevConfig: Ig(t.props) }),
            t
          );
        }
        return (
          (t.getDerivedStateFromProps = function (e, t) {
            var n = t.prevConfig,
              r = t.cache,
              i = Ig(e);
            return ng(n, i) ? null : { intl: kg(i, r), prevConfig: i };
          }),
          (t.prototype.render = function () {
            return (
              eg(this.state.intl),
              Lg.createElement(mg, { value: this.state.intl }, this.props.children)
            );
          }),
          (t.displayName = `IntlProvider`),
          (t.defaultProps = ig),
          t
        );
      })(Lg.PureComponent)));
  });
function Bg(e) {
  return e;
}
var Vg = o(() => {
    (Eg(),
      Fg(),
      zg(),
      yg(),
      Qh(),
      xg(`formatDate`),
      xg(`formatTime`),
      xg(`formatNumber`),
      xg(`formatList`),
      xg(`formatDisplayName`),
      bg(`formatDate`),
      bg(`formatTime`));
  }),
  Hg,
  Ug = o(() => {
    Hg = 2147483647;
  });
function Wg(e, t) {
  let n = new Set([e]),
    r = new MutationObserver((a) => {
      let o = n.size;
      for (let e of a) for (let t of e.addedNodes) B(t) && i(t);
      let s = !1;
      for (let t of n) t !== e && (!t.isConnected || t.ownerDocument !== e) && (n.delete(t), (s = !0));
      if (s) {
        r.disconnect();
        for (let e of n) r.observe(e, Kg);
      }
      (s ||
        n.size !== o ||
        a.some(
          (e) =>
            e.type === `attributes` ||
            [...e.addedNodes, ...e.removedNodes].some(
              (e) => B(e) && (e.matches(Gg) || e.querySelector(Gg) != null),
            ),
        )) &&
        t();
    });
  function i(e) {
    let t = e.querySelectorAll(`*`);
    for (let a of B(e) ? [e, ...t] : t)
      !B(a) ||
        dl(a) ||
        a.shadowRoot == null ||
        n.has(a.shadowRoot) ||
        (n.add(a.shadowRoot), r.observe(a.shadowRoot, Kg), i(a.shadowRoot));
  }
  let a = (e) => {
    let n = e.composedPath()[0];
    B(n) && !dl(n) && (i(n), t());
  };
  return (
    r.observe(e, Kg),
    i(e),
    e.addEventListener(qg, a),
    () => {
      (r.disconnect(), e.removeEventListener(qg, a));
    }
  );
}
var Gg,
  Kg,
  qg,
  Jg = o(() => {
    (Cl(),
      Zc(),
      (Gg = `[oai-annotation-container], [oai-annotation-container-text]`),
      (Kg = {
        attributes: !0,
        attributeFilter: [`oai-annotation-container`, `oai-annotation-container-text`],
        childList: !0,
        subtree: !0,
      }),
      (qg = `codex:annotation-shadow-root-attached`));
  });
function Yg() {
  let e = new Map(),
    t = null,
    n = new Map(),
    r = () => {
      let r = n;
      ((n = new Map()), e.clear(), (t = null));
      for (let [e, t] of r)
        for (let n of t.values())
          Xg(e, {
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
          !md(t.anchor.pageUrl, window.location.href) ||
          Cc(t.anchor.framePath) !== r.ownerDocument ||
          (t.anchor.frameUrl != null && !md(t.anchor.frameUrl, r.ownerDocument.location.href))
        )
          continue;
        let i =
          t.anchor.kind === `virtual`
            ? { surfaceId: t.anchor.surfaceId, targetId: t.anchor.targetId }
            : void 0;
        for (let e of t.annotationControlChanges ?? []) {
          let a = t.annotationControls?.controls.find((t) => t.callback === e.callback);
          if (a == null) continue;
          let c = e.previousValue ?? Nd(a);
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
            Xg(e, {
              callback: r.callback,
              value: r.resetValue,
              action: `reset`,
              virtualTarget: r.virtualTarget,
            });
      for (let [e, t] of s)
        for (let [n, r] of t) {
          let t = l.get(e)?.get(n);
          (t?.value !== r.value || t.action !== r.action) && Xg(e, r);
        }
    },
    clear: r,
  };
}
function Xg(e, { callback: t, value: n, action: r, virtualTarget: i }) {
  (e.isConnected || r === `reset`) &&
    e.dispatchEvent(
      new CustomEvent(`oaiannotationcontrolchange`, {
        bubbles: !0,
        detail: { callback: t, value: n, action: r, ...(i == null ? {} : { virtualTarget: { ...i } }) },
      }),
    );
}
var Zg = o(() => {
  (Ud(), Cd(), Zc());
});
function Qg(e, t) {
  (t?.controls.length ?? 0) > 0 &&
    !e.annotationFeatures?.includes(`custom-controls`) &&
    (e.annotationFeatures = [...(e.annotationFeatures ?? []), `custom-controls`]);
}
function $g(e, t, n) {
  (e.annotationFeatures?.includes(`requests`) && t?.(`requests`, e.annotationRequestIncludesPrompt),
    e.kind === `virtual` && t?.(`registered-surface`),
    (n?.controls.length ?? 0) > 0 && t?.(`custom-controls`),
    e.annotationFeatures?.includes(`selectable-containers`) && t?.(`selectable-containers`),
    e.elementMetadata != null && Object.keys(e.elementMetadata).length > 0 && t?.(`metadata`));
}
function e_(e) {
  let t = yc(e.framePath);
  if (t == null) return !1;
  let n = Nu(t, e.textLocator),
    r = n != null && `host` in n ? n.host : n;
  return B(r) && Qc(r) != null;
}
var t_ = o(() => {
  (ol(), Zc(), td());
});
function n_() {
  return oc((e, t, n) => {
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
        if (nc(e) != null) {
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
        if (B(e) && dl(e)) return !1;
        let t = !1;
        !B(e) &&
          !i.has(e) &&
          (i.add(e), c.observe(e, { childList: !0, subtree: !0 }), e.addEventListener(`load`, l, !0));
        for (let n of B(e) ? [e, ...e.querySelectorAll(`*`)] : e.querySelectorAll(`*`))
          B(n) &&
            !dl(n) &&
            (ec(n) && (o(n), (t = !0)),
            n.shadowRoot != null && !i.has(n.shadowRoot) && (t = s(n.shadowRoot) || t));
        return t;
      },
      c = new MutationObserver((e) => {
        let t = !1;
        for (let n of e) for (let e of n.addedNodes) B(e) && (t = s(e) || t);
        t && n();
      }),
      l = (e) => {
        ec(e.target) && (o(e.target), n());
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
var r_ = o(() => {
  (Cl(), Zc());
});
function i_(e) {
  let t = e.toLowerCase();
  return t.endsWith(`.localhost`) || o_.has(t);
}
function a_(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  return t.protocol !== `http:` && t.protocol !== `https:` ? !1 : i_(t.hostname);
}
var o_,
  s_ = o(() => {
    o_ = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `[::1]`, `::1`]);
  });
function c_(e) {
  return a_(e);
}
var l_ = o(() => {
  s_();
});
function u_({
  allowEmbeddedAnnotationDocument: e = !1,
  getElementAtPoint: t,
  onInvalidated: n,
  onRenderingFailed: r,
}) {
  let i = new Map(),
    a = new WeakSet(),
    o = zl(),
    s = 0,
    c = null,
    l = !1,
    u = !1;
  document.addEventListener(m_.responseEvent, y);
  let d = new MutationObserver(() => {
    for (let t of i.keys())
      f_(t, e) || (i.delete(t), i.size === 0 && d.disconnect(), c?.element === t && g(), n(t));
  });
  function f(t) {
    if (l || !f_(t, e)) return !1;
    if (!i.has(t) && !a.has(t)) {
      (a.add(t), (u = !0));
      try {
        d_(t, { type: `probe` });
      } finally {
        u = !1;
      }
    }
    return i.has(t);
  }
  function p(e, t) {
    if ((g(), !f(e) || !m(e, t))) return Promise.resolve(void 0);
    let n = i.get(e);
    if (n == null) return Promise.resolve(void 0);
    let r = `${o}-${++s}`;
    return new Promise((i) => {
      ((c = {
        element: e,
        registrationId: n.id,
        requestId: r,
        point: { ...t },
        surfaceRect: e.getBoundingClientRect(),
        timer: setTimeout(g, m_.deadlineMs),
        finish: i,
      }),
        d_(e, { type: `hit-test`, registrationId: n.id, requestId: r, x: t.x, y: t.y }));
    });
  }
  function m(e, n) {
    let r = p_(e, e.getBoundingClientRect());
    return (
      r != null &&
      Number.isFinite(n.x) &&
      Number.isFinite(n.y) &&
      n.x >= r.x &&
      n.y >= r.y &&
      n.x <= r.x + r.width &&
      n.y <= r.y + r.height &&
      t(n) === e
    );
  }
  function h(t, n, r) {
    let a = i.get(t);
    return l || !f_(t, e) || a?.id !== n || !a.customRendering
      ? !1
      : (d_(t, { type: `render`, registrationId: n, ...r }), a.customRendering);
  }
  function g() {
    if (c == null) return;
    let e = c;
    ((c = null), clearTimeout(e.timer), e.finish(void 0), d_(document, { type: `cancel` }));
  }
  function _() {
    (g(), l || d_(document, { type: `clear` }));
  }
  function v() {
    (_(), (l = !0), d.disconnect(), i.clear(), document.removeEventListener(m_.responseEvent, y));
  }
  function y(t) {
    if (
      l ||
      !(t instanceof CustomEvent) ||
      typeof t.detail != `string` ||
      t.detail.length > m_.maxPayloadLength ||
      !(t.target instanceof Element) ||
      !f_(t.target, e)
    )
      return;
    let a;
    try {
      a = Of.safeParse(JSON.parse(t.detail));
    } catch {
      return;
    }
    if (!a.success) return;
    let o = t.target,
      s = a.data;
    if (s.type === `registered`) {
      let e = i.get(o);
      (i.size === 0 && d.observe(document, { childList: !0, subtree: !0 }),
        i.set(o, { id: s.registrationId, customRendering: s.customRendering === !0 }),
        !u && e?.id !== s.registrationId && (c?.element === o && g(), n(o)));
      return;
    }
    let f = i.get(o);
    if (f?.id !== s.registrationId) return;
    if (s.type === `rendering-failed`) {
      ((f.customRendering = !1), r?.(o));
      return;
    }
    if (s.type === `invalidated` || s.type === `disposed`) {
      (s.type === `disposed` && (i.delete(o), i.size === 0 && d.disconnect()), c?.element === o && g(), n(o));
      return;
    }
    if (c == null || c.element !== o || c.registrationId !== s.registrationId || c.requestId !== s.requestId)
      return;
    let p = c;
    ((c = null), clearTimeout(p.timer));
    let h = o.getBoundingClientRect();
    if (
      h.x !== p.surfaceRect.x ||
      h.y !== p.surfaceRect.y ||
      h.width !== p.surfaceRect.width ||
      h.height !== p.surfaceRect.height ||
      !m(o, p.point)
    ) {
      p.finish(void 0);
      return;
    }
    if (s.hit == null) {
      p.finish(s.hit);
      return;
    }
    let _ = s.hit.rect == null ? void 0 : p_(o, s.hit.rect);
    if (s.hit.rect != null && _ == null) {
      p.finish(void 0);
      return;
    }
    p.finish({
      registrationId: f.id,
      id: s.hit.id,
      name: Go(s.hit.name),
      role: wf(s.hit.role),
      metadata: Ko(s.hit.metadata),
      rect: _ ?? void 0,
      customRendering: f.customRendering,
    });
  }
  return { hasSurface: f, hitTest: p, renderSelection: h, cancel: g, clear: _, dispose: v };
}
function d_(e, t) {
  e.dispatchEvent(new CustomEvent(m_.requestEvent, { bubbles: !0, detail: JSON.stringify(t) }));
}
function f_(e, t) {
  return (
    (t || window === window.top) &&
    globalThis.isSecureContext &&
    e instanceof HTMLElement &&
    !(e instanceof HTMLIFrameElement) &&
    e.isConnected &&
    e.ownerDocument === document &&
    e.getRootNode() === document
  );
}
function p_(e, t) {
  let n = e.getBoundingClientRect(),
    r = Math.max(0, n.x, t.x),
    i = Math.max(0, n.y, t.y),
    a = Math.min(window.innerWidth, n.right, t.x + t.width),
    o = Math.min(window.innerHeight, n.bottom, t.y + t.height);
  return a > r && o > i ? { x: r, y: i, width: a - r, height: o - i } : null;
}
var m_,
  h_ = o(() => {
    (kf(), Js(), V(), (m_ = Tf));
  });
function g_({
  allowEmbeddedAnnotationDocument: e = !1,
  rootHost: t,
  onClearDomHover: n,
  onFeedback: r,
  onSelected: i,
  onFallback: a,
}) {
  let o = !1,
    s = 0,
    c = null,
    l = null,
    u = null,
    d = null,
    f = null,
    p = !1,
    m = null,
    h = null,
    g = null,
    _ = null,
    v = () => {
      let e = h?.getBoundingClientRect();
      e != null && g != null && (e.width !== g.width || e.height !== g.height) && ((g = e), T());
    },
    y = u_({
      allowEmbeddedAnnotationDocument: e,
      getElementAtPoint: S,
      onInvalidated: (e) => {
        (f == null || f.element === e) && E();
      },
      onRenderingFailed: (e) => {
        (f ?? d)?.element === e && r(m);
      },
    }),
    b = () => {
      document.visibilityState === `hidden` && te();
    };
  return (
    window.addEventListener(`resize`, T),
    document.addEventListener(`scroll`, T, !0),
    document.addEventListener(`visibilitychange`, b),
    window.addEventListener(`pagehide`, te),
    window.visualViewport?.addEventListener(`resize`, T),
    window.visualViewport?.addEventListener(`scroll`, T),
    {
      setEnabled(e) {
        o !== e && ((o = e), e || te());
      },
      hasSurfaceAtPoint(e) {
        return x(e) != null;
      },
      hover(e) {
        return p || f != null ? !0 : ((u = e), x(e) == null ? (O(), !1) : ((s += 1), y.cancel(), C(), !0));
      },
      select(e) {
        let t = x(e);
        if (t == null) return (te(), !1);
        (te(), ee(t), (p = !0));
        let r = s;
        return (
          y.hitTest(t, e).then((c) => {
            if (!o || r !== s) return;
            if (((p = !1), c === void 0 || x(e) !== t)) {
              a(e, !0);
              return;
            }
            if ((n(), c == null)) {
              u = e;
              return;
            }
            f = { element: t, hit: c, point: e };
            let d = f;
            (w(f, !0),
              (l = window.requestAnimationFrame(() => {
                if (!o || f !== d) {
                  l = null;
                  return;
                }
                l = window.requestAnimationFrame(() => {
                  ((l = null), o && f === d && i(__(d), d.element));
                });
              })));
          }),
          !0
        );
      },
      clearHover: O,
      clear: te,
      invalidate: T,
      dispose() {
        (te(),
          y.dispose(),
          _?.disconnect(),
          window.removeEventListener(`resize`, T),
          document.removeEventListener(`scroll`, T, !0),
          document.removeEventListener(`visibilitychange`, b),
          window.removeEventListener(`pagehide`, te),
          window.visualViewport?.removeEventListener(`resize`, T),
          window.visualViewport?.removeEventListener(`scroll`, T));
      },
    }
  );
  function x(e) {
    if (!o || document.visibilityState === `hidden`) return null;
    let t = S(e);
    return t != null && y.hasSurface(t) ? t : null;
  }
  function S(e) {
    return ul(e.x, e.y, t, `design`, !1);
  }
  function C() {
    c != null ||
      p ||
      f != null ||
      u == null ||
      (c = window.requestAnimationFrame(() => {
        c = null;
        let e = u,
          t = e == null ? null : x(e);
        if (e == null || t == null) return;
        let i = s;
        (ee(t),
          y.hitTest(t, e).then((c) => {
            if (o && i === s && !p && f == null) {
              if ((D(), (m = null), r(null), c === void 0 || x(e) !== t)) {
                a(e, !1);
                return;
              }
              (n(), c != null && ((d = { element: t, hit: c, point: e }), w(d, !1)));
            }
          }));
      }));
  }
  function w(e, t) {
    ((m = { point: e.point, rect: e.hit.rect ?? null, selected: t }),
      r(
        y.renderSelection(e.element, e.hit.registrationId, {
          hoveredId: t ? null : e.hit.id,
          selectedId: t ? e.hit.id : null,
        })
          ? null
          : m,
      ));
  }
  function T() {
    if (l != null) {
      te();
      return;
    }
    (D(), E());
  }
  function E() {
    if (((s += 1), y.cancel(), (p = !1), (m = null), r(null), f != null && !y.hasSurface(f.element))) {
      te();
      return;
    }
    (d != null &&
      !y.renderSelection(d.element, d.hit.registrationId, { hoveredId: d.hit.id, selectedId: null }) &&
      D(),
      C());
  }
  function ee(e) {
    h !== e &&
      ((_ ??= new ResizeObserver(v)), _.disconnect(), (h = e), (g = e.getBoundingClientRect()), _.observe(e));
  }
  function D() {
    d != null &&
      (y.renderSelection(d.element, d.hit.registrationId, { hoveredId: null, selectedId: null }), (d = null));
  }
  function O() {
    ((u = null),
      !(f != null || p) &&
        ((s += 1),
        y.cancel(),
        c != null && (window.cancelAnimationFrame(c), (c = null)),
        D(),
        (m = null),
        r(null)));
  }
  function te() {
    ((p = !1),
      (f = null),
      l != null && (window.cancelAnimationFrame(l), (l = null)),
      O(),
      y.clear(),
      _?.disconnect(),
      (h = null),
      (g = null));
  }
}
function __({ hit: e, point: t }) {
  return Tl({
    kind: `virtual`,
    surfaceId: e.registrationId,
    targetId: e.id,
    elementName: e.name,
    elementMetadata: e.metadata,
    pageUrl: fd(),
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
  });
}
var v_ = o(() => {
  (Ol(), Cl(), Cd(), h_());
});
function y_(e, t, { preserveTyping: n }) {
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
                B(e) &&
                (e.isContentEditable ||
                  e.closest(
                    `input,textarea,select,[role='textbox'],[data-codex-composer],[data-codex-terminal]`,
                  ) != null),
            )))
    )
  )
    return (e.preventDefault(), e.stopImmediatePropagation(), e.type === `keydown`);
}
var b_ = o(() => {
  Zc();
});
function x_(e, t) {
  let n = e.isDraggingRegion || Ms(e.start, t, 4);
  return { ...e, current: t, rect: n ? Ns(e.start, t) : null, isDraggingRegion: n };
}
function S_(e) {
  return e.selectionRects.flatMap((t) => {
    let n = dd({ ...e, rect: t });
    return n == null ? [] : [n];
  });
}
function C_(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  return _s(e, { viewport: t, viewportScale: n, zoomFactor: r });
}
function w_(e) {
  if (e.length === 0) return null;
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function T_(e, t = dd(e), n = null) {
  if (t == null) return null;
  let r = K_(t, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  if (r == null) return null;
  let i = document,
    a = window;
  for (let t of e.framePath) {
    let e = bc(i, t);
    if (e == null || ((r = H_(r, e)), r == null)) return null;
    let n = e.getBoundingClientRect(),
      o = Mc(a);
    if (((r = K_(r, { x: o.x + n.left, y: o.y + n.top, width: n.width, height: n.height })), r == null))
      return null;
    let s = nc(e);
    if (s == null) return null;
    ((a = s), (i = s.document));
  }
  let o = Mc(a),
    s =
      n?.isConnected === !0 && n.ownerDocument === i
        ? n
        : e.kind === `element` && e.selector != null
          ? xc(i, e.selector)
          : null,
    c = s == null ? null : U_(s, a);
  for (let t of e.scrollContainers ?? []) {
    let e = xc(i, t.selector);
    if (e == null || (c != null && !c.has(e))) continue;
    let n = a.getComputedStyle(e);
    if (
      ((r = q_(r, G_(e, o), { x: Zs(n.overflowX || n.overflow), y: Zs(n.overflowY || n.overflow) })),
      r == null)
    )
      return null;
  }
  return r;
}
function E_(e) {
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
    if (((i = H_(i, o, { x: 0, y: 0 }, !0)), i == null)) return null;
    if (t === window) return { rect: r, clipRect: i, radiusScale: a };
    let e = t.frameElement;
    if (!ec(e) || !e.isConnected) return null;
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
      (i = K_(c(i), {
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
function D_(e, t, { framePath: n = [], frameUrl: r = null } = {}) {
  let i = yc(n) ?? window,
    a = Mc(i),
    o = { x: t.x - a.x, y: t.y - a.y },
    s = { x: e.x - a.x, y: e.y - a.y, width: e.width, height: e.height },
    c = Dc(i, o),
    l = fd(),
    u = new Xl(l).getRegionDocumentContext({
      documentTitle: document.title,
      fallbackWindow: window,
      frameWindow: i,
      viewportRect: s,
    });
  return Tl({
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
  });
}
function O_(e) {
  let t = J_(e.anchor, e.markerViewportPoint);
  return e.viewportSize == null
    ? t
    : t == null
      ? e.viewportSize
      : { height: Math.max(e.viewportSize.height, t.height), width: Math.max(e.viewportSize.width, t.width) };
}
function k_() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`;
}
function A_() {
  return { height: window.innerHeight, width: window.innerWidth };
}
function j_(e, t, n, r) {
  return Y_(e, t, n, r) ? `hover-box google-docs-annotation-box google-docs-element-box` : `hover-box`;
}
function M_(e, t = B_(), { includeElementFrameScroll: n = !1, markerPointInset: r = $_ } = {}) {
  let i = yc(e.framePath),
    a = kc(e, i ?? window),
    o = a.x + _u(e, i ?? window);
  if (e.kind !== `element` && i != null && i !== window) {
    let n = Mc(i);
    return {
      x: Q_(n.x + (e.point.xPercent / 100) * i.innerWidth - o, r, t.width - r),
      y: n.y + e.point.y - (e.isFixed ? 0 : i.scrollY) - a.y,
    };
  }
  let s = n && e.kind === `element` && i != null && i !== window ? i.scrollY : 0;
  return {
    x: Q_((e.point.xPercent / 100) * t.width - o, r, t.width - r),
    y: (e.isFixed ? e.point.y : e.point.y - t.scrollY - s) - a.y,
  };
}
function N_(e, t) {
  return t == null ? e : { ...e, height: t.height, width: t.width };
}
function P_(e, t, { includeElementFrameScroll: n = !1, viewportSize: r, zoomFactor: i }) {
  let a = M_(e, N_(t, r), { includeElementFrameScroll: n, markerPointInset: $_ / i });
  return { x: a.x * i, y: a.y * i };
}
function F_(e, t, n) {
  let r = dd(e),
    i = r == null ? null : K_(r, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }),
    a = T_(e, r, n.liveElement);
  if (a == null || i == null) return null;
  let o = P_(e, t, n),
    s = a.x !== i.x || a.width !== i.width,
    c = a.y !== i.y || a.height !== i.height,
    l = V_(a, n.zoomFactor);
  return (!s || (o.x >= l.x && o.x <= l.x + l.width)) && (!c || (o.y >= l.y && o.y <= l.y + l.height))
    ? o
    : null;
}
function I_(e, t, n) {
  let r = N_(B_(), n),
    i = $_ / t,
    a = M_(e, r, { markerPointInset: i });
  return { x: a.x, y: Q_(a.y, i, r.height - i) };
}
function L_(e, t, n, r) {
  return Y_(e, t, n, r)
    ? `posted-region-highlight google-docs-annotation-box google-docs-region-box`
    : `posted-region-highlight`;
}
function R_(e, t, n) {
  let r = V_(e, t);
  return { borderRadius: n, left: r.x, top: r.y, width: r.width, height: r.height };
}
function z_(e, t, n, r) {
  return Y_(e, t, n, r)
    ? `hover-box region-box google-docs-annotation-box google-docs-region-box`
    : `hover-box region-box`;
}
function B_() {
  let e = window.visualViewport,
    t = e != null && (e.offsetLeft !== 0 || e.offsetTop !== 0 || e.scale !== 1);
  return {
    height: window.innerHeight,
    scrollY: window.scrollY,
    ...(t ? { visualViewport: { offsetLeft: e.offsetLeft, offsetTop: e.offsetTop, scale: e.scale } } : {}),
    width: window.innerWidth,
  };
}
function V_(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function H_(e, t, n = Mc(t.ownerDocument.defaultView ?? window), r = !1) {
  let i = t.ownerDocument.defaultView ?? window,
    a = e,
    o = U_(t, i),
    s = $s(t);
  for (; s != null && s !== i.document.body && s !== i.document.documentElement;) {
    if (!o.has(s)) {
      s = $s(s);
      continue;
    }
    let e = i.getComputedStyle(s),
      t = Zs(e.overflowX || e.overflow),
      c = Zs(e.overflowY || e.overflow);
    if ((t || c) && ((a = q_(a, G_(s, n, r), { x: t, y: c })), a == null)) return null;
    s = $s(s);
  }
  return a;
}
function U_(e, t) {
  let n = new Set(),
    r = e;
  for (; r != null;) {
    let e = t.getComputedStyle(r).position,
      i = $s(r);
    if (e === `absolute` || e === `fixed`)
      for (
        ;
        i != null &&
        i !== t.document.body &&
        i !== t.document.documentElement &&
        !W_(t.getComputedStyle(i), e);
      )
        i = $s(i);
    if (i == null || i === t.document.body || i === t.document.documentElement) break;
    (n.add(i), (r = i));
  }
  return n;
}
function W_(e, t) {
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
function G_(e, t, n = !1) {
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
function K_(e, t) {
  return q_(e, t, { x: !0, y: !0 });
}
function q_(e, t, n) {
  let r = n.x ? Math.max(e.x, t.x) : e.x,
    i = n.y ? Math.max(e.y, t.y) : e.y,
    a = n.x ? Math.min(e.x + e.width, t.x + t.width) : e.x + e.width,
    o = n.y ? Math.min(e.y + e.height, t.y + t.height) : e.y + e.height;
  return a <= r || o <= i ? null : { x: r, y: i, width: a - r, height: o - i };
}
function J_(e, t) {
  if (t == null) return;
  let n = e.point.xPercent <= 0 ? 0 : t.x / (e.point.xPercent / 100);
  return {
    height: Math.max(window.innerHeight, t.y + $_),
    width: Math.max(window.innerWidth, n, t.x + $_, e.rect.x + e.rect.width),
  };
}
function Y_(e, t, n, r) {
  return X_(e) && Z_(t, n, r);
}
function X_(e) {
  return e == null ? ds(fd()) : Xl.isGoogleDocsAnchor(e) || ds(e.pageUrl);
}
function Z_(e, t, n) {
  return e == null || t <= 0 || n <= 0 ? !1 : e.width >= t * ev && e.height >= n * tv;
}
function Q_(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var $_,
  ev,
  tv,
  nv = o(() => {
    (Ol(), Js(), Cd(), Zc(), Zl(), td(), ($_ = 16 + Ks / 2), (ev = 0.45), (tv = 0.3));
  });
function rv(e, t, n) {
  if (e.id === n?.id) return !0;
  if (t == null || t.anchor.type === `text` || t.target.mode !== `create`) return !1;
  let r = uv(t.anchor),
    i = [r.primary, ...r.additional].map(({ anchor: e }) => e);
  return [e.anchor, ...(e.additionalAnchors ?? [])].some(
    (e) => e.kind === `region` && i.some((t) => As(e, t)),
  );
}
function iv(e, t, n) {
  return e.anchor.kind === `virtual`
    ? {
        type: `virtual`,
        additionalSelections: [],
        themeVariant: e.themeVariant ?? k_(),
        value: e.anchor,
        viewportSize: e.viewportSize,
      }
    : e.anchor.kind === `text`
      ? { type: `text`, themeVariant: e.themeVariant ?? k_(), value: e.anchor }
      : e.anchor.kind === `region`
        ? {
            type: `region`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => av(e, n)),
            themeVariant: e.themeVariant ?? k_(),
            value: e.anchor,
            viewportSize: A_(),
          }
        : {
            type: `element`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => av(e, n)),
            element: t,
            markerViewportPoint: e.markerViewportPoint,
            themeVariant: e.themeVariant ?? k_(),
            value: e.anchor,
            viewportSize: A_(),
          };
}
function av(e, t) {
  return e.kind === `element`
    ? { anchor: e, liveElement: sd(e, void 0, t) }
    : { anchor: e, liveElement: null };
}
function ov(e, t, n) {
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
  let a = (e.anchorState.additionalAnchors ?? []).map((e) => av(e, t));
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
  let o = sd(r, void 0, t);
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
function sv(e, t, n) {
  if (e?.target.mode !== `create`) return null;
  let r = e.anchor,
    i = r.type === `text` ? [] : [uv(r).primary, ...r.additionalSelections];
  return (
    t.find(
      (t) =>
        !e.commentIdsAtOpen.has(t.id) &&
        [t.anchor, ...(t.additionalAnchors ?? [])].some((e) =>
          r.type === `text` ? As(e, r.value) : e.kind !== `text` && i.some((t) => tl(av(e, n), t)),
        ),
    ) ?? null
  );
}
function cv(e) {
  return e.type === `element` ? mv(e.element, e.value, e.viewportSize) : e.value;
}
function lv(e, t) {
  return e.type === `element`
    ? e.element?.isConnected && e.element.ownerDocument === Cc(e.value.framePath)
      ? e.element
      : sd(e.value, void 0, t)
    : null;
}
function uv(e) {
  return {
    additional: e.additionalSelections,
    primary:
      e.type === `element`
        ? { anchor: e.value, liveElement: e.element }
        : { anchor: e.value, liveElement: null },
  };
}
function dv(e, t, n) {
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
function fv(e, t) {
  return e.anchor.kind === `element` ? mv(e.liveElement, e.anchor, t) : e.anchor;
}
function pv(e, t, { clipToVisibleArea: n = !1, selectionIndexOffset: r = 0, viewportSize: i } = {}) {
  return e.flatMap((e, a) => {
    let o = fv(e, i),
      s = e.anchor.kind === `element` && e.liveElement != null ? nd(e.liveElement) : null,
      c = s?.rect ?? dd(o),
      l = c == null ? null : n ? T_(o, c, e.liveElement) : c;
    return l == null
      ? []
      : [
          {
            borderRadius: s?.borderRadius,
            className: o.kind === `region` ? z_(o, c, t.width, t.height) : j_(o, c, t.width, t.height),
            isPageAnnotation: rd(o),
            key: `${e.anchor.kind}:${e.anchor.framePath.join(`>`)}:${e.anchor.selector ?? e.anchor.elementPath}:${e.anchor.rect.x}:${e.anchor.rect.y}:${a}`,
            rect: l,
            selectionIndex: r + a,
          },
        ];
  });
}
function mv(e, t, n) {
  return e == null || !e.isConnected ? t : ad(e, t, n);
}
var hv = o(() => {
  (Js(), ol(), Cd(), nv(), Zc());
});
function gv(e) {
  return El(e.anchor) && md(e.anchor.pageUrl, window.location.href);
}
function _v(e, t) {
  if (!md(e.anchor.pageUrl, window.location.href) || e.anchor.kind !== `element`) return null;
  let n = sd(e.anchor, e.id, t);
  return n == null
    ? null
    : (t.set(e.id, n), { ...e, anchor: ad(n, e.anchor, e.viewportSize, e.markerViewportPoint) });
}
function vv(e, t) {
  return e.anchor.kind === `element` ? sd(e.anchor, e.id, t) : null;
}
function yv(e, t, n = !1, r = null) {
  if (e.anchor.kind === `text`)
    return { ...e, ...(r == null ? {} : { anchor: r }), selectionSourceIndexes: [0] };
  let i = O_(e),
    a = [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((r, a) => {
      if (r.kind !== `element`) return [{ anchor: r, sourceIndex: a }];
      let o = sd(r, a === 0 ? e.id : void 0, t);
      return o == null
        ? !n && r.selector != null && md(r.pageUrl, fd())
          ? []
          : [{ anchor: r, sourceIndex: a }]
        : (a === 0 && t.set(e.id, o),
          [{ anchor: ad(o, r, i, a === 0 ? e.markerViewportPoint : void 0), sourceIndex: a }]);
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
function bv(e, t, n) {
  if (e.anchor.kind === `text` || t.kind === `text`) return e;
  let r = [e.anchor, ...(e.additionalAnchors ?? [])].filter((e, t) => t !== n);
  return {
    ...e,
    anchor: t,
    additionalAnchors: r.length === 0 ? void 0 : r,
    markerViewportPoint: n === 0 ? e.markerViewportPoint : void 0,
  };
}
var xv = o(() => {
    (Ol(), Cd(), nv());
  }),
  Sv = s((e, t) => {
    function n() {
      ((this.__data__ = []), (this.size = 0));
    }
    t.exports = n;
  }),
  Cv = s((e, t) => {
    function n(e, t) {
      return e === t || (e !== e && t !== t);
    }
    t.exports = n;
  }),
  wv = s((e, t) => {
    var n = Cv();
    function r(e, t) {
      for (var r = e.length; r--;) if (n(e[r][0], t)) return r;
      return -1;
    }
    t.exports = r;
  }),
  Tv = s((e, t) => {
    var n = wv(),
      r = Array.prototype.splice;
    function i(e) {
      var t = this.__data__,
        i = n(t, e);
      return i < 0 ? !1 : (i == t.length - 1 ? t.pop() : r.call(t, i, 1), --this.size, !0);
    }
    t.exports = i;
  }),
  Ev = s((e, t) => {
    var n = wv();
    function r(e) {
      var t = this.__data__,
        r = n(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    t.exports = r;
  }),
  Dv = s((e, t) => {
    var n = wv();
    function r(e) {
      return n(this.__data__, e) > -1;
    }
    t.exports = r;
  }),
  Ov = s((e, t) => {
    var n = wv();
    function r(e, t) {
      var r = this.__data__,
        i = n(r, e);
      return (i < 0 ? (++this.size, r.push([e, t])) : (r[i][1] = t), this);
    }
    t.exports = r;
  }),
  kv = s((e, t) => {
    var n = Sv(),
      r = Tv(),
      i = Ev(),
      a = Dv(),
      o = Ov();
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
  Av = s((e, t) => {
    var n = kv();
    function r() {
      ((this.__data__ = new n()), (this.size = 0));
    }
    t.exports = r;
  }),
  jv = s((e, t) => {
    function n(e) {
      var t = this.__data__,
        n = t.delete(e);
      return ((this.size = t.size), n);
    }
    t.exports = n;
  }),
  Mv = s((e, t) => {
    function n(e) {
      return this.__data__.get(e);
    }
    t.exports = n;
  }),
  Nv = s((e, t) => {
    function n(e) {
      return this.__data__.has(e);
    }
    t.exports = n;
  }),
  Pv = s((e, t) => {
    t.exports = typeof global == `object` && global && global.Object === Object && global;
  }),
  Fv = s((e, t) => {
    var n = Pv(),
      r = typeof self == `object` && self && self.Object === Object && self;
    t.exports = n || r || Function(`return this`)();
  }),
  Iv = s((e, t) => {
    t.exports = Fv().Symbol;
  }),
  Lv = s((e, t) => {
    var n = Iv(),
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
  Rv = s((e, t) => {
    var n = Object.prototype.toString;
    function r(e) {
      return n.call(e);
    }
    t.exports = r;
  }),
  zv = s((e, t) => {
    var n = Iv(),
      r = Lv(),
      i = Rv(),
      a = `[object Null]`,
      o = `[object Undefined]`,
      s = n ? n.toStringTag : void 0;
    function c(e) {
      return e == null ? (e === void 0 ? o : a) : s && s in Object(e) ? r(e) : i(e);
    }
    t.exports = c;
  }),
  Bv = s((e, t) => {
    function n(e) {
      var t = typeof e;
      return e != null && (t == `object` || t == `function`);
    }
    t.exports = n;
  }),
  Vv = s((e, t) => {
    var n = zv(),
      r = Bv(),
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
  Hv = s((e, t) => {
    t.exports = Fv()[`__core-js_shared__`];
  }),
  Uv = s((e, t) => {
    var n = Hv(),
      r = (function () {
        var e = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ``);
        return e ? `Symbol(src)_1.` + e : ``;
      })();
    function i(e) {
      return !!r && r in e;
    }
    t.exports = i;
  }),
  Wv = s((e, t) => {
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
  Gv = s((e, t) => {
    var n = Vv(),
      r = Uv(),
      i = Bv(),
      a = Wv(),
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
  Kv = s((e, t) => {
    function n(e, t) {
      return e?.[t];
    }
    t.exports = n;
  }),
  qv = s((e, t) => {
    var n = Gv(),
      r = Kv();
    function i(e, t) {
      var i = r(e, t);
      return n(i) ? i : void 0;
    }
    t.exports = i;
  }),
  Jv = s((e, t) => {
    t.exports = qv()(Fv(), `Map`);
  }),
  Yv = s((e, t) => {
    t.exports = qv()(Object, `create`);
  }),
  Xv = s((e, t) => {
    var n = Yv();
    function r() {
      ((this.__data__ = n ? n(null) : {}), (this.size = 0));
    }
    t.exports = r;
  }),
  Zv = s((e, t) => {
    function n(e) {
      var t = this.has(e) && delete this.__data__[e];
      return ((this.size -= +!!t), t);
    }
    t.exports = n;
  }),
  Qv = s((e, t) => {
    var n = Yv(),
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
  $v = s((e, t) => {
    var n = Yv(),
      r = Object.prototype.hasOwnProperty;
    function i(e) {
      var t = this.__data__;
      return n ? t[e] !== void 0 : r.call(t, e);
    }
    t.exports = i;
  }),
  ey = s((e, t) => {
    var n = Yv(),
      r = `__lodash_hash_undefined__`;
    function i(e, t) {
      var i = this.__data__;
      return ((this.size += +!this.has(e)), (i[e] = n && t === void 0 ? r : t), this);
    }
    t.exports = i;
  }),
  ty = s((e, t) => {
    var n = Xv(),
      r = Zv(),
      i = Qv(),
      a = $v(),
      o = ey();
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
  ny = s((e, t) => {
    var n = ty(),
      r = kv(),
      i = Jv();
    function a() {
      ((this.size = 0), (this.__data__ = { hash: new n(), map: new (i || r)(), string: new n() }));
    }
    t.exports = a;
  }),
  ry = s((e, t) => {
    function n(e) {
      var t = typeof e;
      return t == `string` || t == `number` || t == `symbol` || t == `boolean`
        ? e !== `__proto__`
        : e === null;
    }
    t.exports = n;
  }),
  iy = s((e, t) => {
    var n = ry();
    function r(e, t) {
      var r = e.__data__;
      return n(t) ? r[typeof t == `string` ? `string` : `hash`] : r.map;
    }
    t.exports = r;
  }),
  ay = s((e, t) => {
    var n = iy();
    function r(e) {
      var t = n(this, e).delete(e);
      return ((this.size -= +!!t), t);
    }
    t.exports = r;
  }),
  oy = s((e, t) => {
    var n = iy();
    function r(e) {
      return n(this, e).get(e);
    }
    t.exports = r;
  }),
  sy = s((e, t) => {
    var n = iy();
    function r(e) {
      return n(this, e).has(e);
    }
    t.exports = r;
  }),
  cy = s((e, t) => {
    var n = iy();
    function r(e, t) {
      var r = n(this, e),
        i = r.size;
      return (r.set(e, t), (this.size += r.size == i ? 0 : 1), this);
    }
    t.exports = r;
  }),
  ly = s((e, t) => {
    var n = ny(),
      r = ay(),
      i = oy(),
      a = sy(),
      o = cy();
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
  uy = s((e, t) => {
    var n = kv(),
      r = Jv(),
      i = ly(),
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
  dy = s((e, t) => {
    var n = kv(),
      r = Av(),
      i = jv(),
      a = Mv(),
      o = Nv(),
      s = uy();
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
  fy = s((e, t) => {
    function n(e) {
      return (this.__data__.set(e, `__lodash_hash_undefined__`), this);
    }
    t.exports = n;
  }),
  py = s((e, t) => {
    function n(e) {
      return this.__data__.has(e);
    }
    t.exports = n;
  }),
  my = s((e, t) => {
    var n = ly(),
      r = fy(),
      i = py();
    function a(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
    }
    ((a.prototype.add = a.prototype.push = r), (a.prototype.has = i), (t.exports = a));
  }),
  hy = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
      return !1;
    }
    t.exports = n;
  }),
  gy = s((e, t) => {
    function n(e, t) {
      return e.has(t);
    }
    t.exports = n;
  }),
  _y = s((e, t) => {
    var n = my(),
      r = hy(),
      i = gy(),
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
  vy = s((e, t) => {
    t.exports = Fv().Uint8Array;
  }),
  yy = s((e, t) => {
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
  by = s((e, t) => {
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
  xy = s((e, t) => {
    var n = Iv(),
      r = vy(),
      i = Cv(),
      a = _y(),
      o = yy(),
      s = by(),
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
          var E = o;
        case g:
          var ee = x & c;
          if (((E ||= s), e.size != t.size && !ee)) return !1;
          var D = T.get(e);
          if (D) return D == t;
          ((x |= l), T.set(e, t));
          var O = a(E(e), E(t), x, C, w, T);
          return (T.delete(e), O);
        case v:
          if (S) return S.call(e) == S.call(t);
      }
      return !1;
    }
    t.exports = C;
  }),
  Sy = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
      return e;
    }
    t.exports = n;
  }),
  Cy = s((e, t) => {
    t.exports = Array.isArray;
  }),
  wy = s((e, t) => {
    var n = Sy(),
      r = Cy();
    function i(e, t, i) {
      var a = t(e);
      return r(e) ? a : n(a, i(e));
    }
    t.exports = i;
  }),
  Ty = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
        var o = e[n];
        t(o, n, e) && (a[i++] = o);
      }
      return a;
    }
    t.exports = n;
  }),
  Ey = s((e, t) => {
    function n() {
      return [];
    }
    t.exports = n;
  }),
  Dy = s((e, t) => {
    var n = Ty(),
      r = Ey(),
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
  Oy = s((e, t) => {
    function n(e, t) {
      for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
      return r;
    }
    t.exports = n;
  }),
  ky = s((e, t) => {
    function n(e) {
      return typeof e == `object` && !!e;
    }
    t.exports = n;
  }),
  Ay = s((e, t) => {
    var n = zv(),
      r = ky(),
      i = `[object Arguments]`;
    function a(e) {
      return r(e) && n(e) == i;
    }
    t.exports = a;
  }),
  jy = s((e, t) => {
    var n = Ay(),
      r = ky(),
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
  My = s((e, t) => {
    function n() {
      return !1;
    }
    t.exports = n;
  }),
  Ny = s((e, t) => {
    var n = Fv(),
      r = My(),
      i = typeof e == `object` && e && !e.nodeType && e,
      a = i && typeof t == `object` && t && !t.nodeType && t,
      o = a && a.exports === i ? n.Buffer : void 0;
    t.exports = (o ? o.isBuffer : void 0) || r;
  }),
  Py = s((e, t) => {
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
  Fy = s((e, t) => {
    function n(e) {
      return typeof e == `number` && e > -1 && e % 1 == 0 && e <= 9007199254740991;
    }
    t.exports = n;
  }),
  Iy = s((e, t) => {
    var n = zv(),
      r = Fy(),
      i = ky(),
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
      E = `[object Uint8ClampedArray]`,
      ee = `[object Uint16Array]`,
      D = `[object Uint32Array]`,
      O = {};
    ((O[b] = O[x] = O[S] = O[C] = O[w] = O[T] = O[E] = O[ee] = O[D] = !0),
      (O[a] =
        O[o] =
        O[v] =
        O[s] =
        O[y] =
        O[c] =
        O[l] =
        O[u] =
        O[d] =
        O[f] =
        O[p] =
        O[m] =
        O[h] =
        O[g] =
        O[_] =
          !1));
    function te(e) {
      return i(e) && r(e.length) && !!O[n(e)];
    }
    t.exports = te;
  }),
  Ly = s((e, t) => {
    function n(e) {
      return function (t) {
        return e(t);
      };
    }
    t.exports = n;
  }),
  Ry = s((e, t) => {
    var n = Pv(),
      r = typeof e == `object` && e && !e.nodeType && e,
      i = r && typeof t == `object` && t && !t.nodeType && t,
      a = i && i.exports === r && n.process;
    t.exports = (function () {
      try {
        return (i && i.require && i.require(`util`).types) || (a && a.binding && a.binding(`util`));
      } catch {}
    })();
  }),
  zy = s((e, t) => {
    var n = Iy(),
      r = Ly(),
      i = Ry(),
      a = i && i.isTypedArray;
    t.exports = a ? r(a) : n;
  }),
  By = s((e, t) => {
    var n = Oy(),
      r = jy(),
      i = Cy(),
      a = Ny(),
      o = Py(),
      s = zy(),
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
  Vy = s((e, t) => {
    var n = Object.prototype;
    function r(e) {
      var t = e && e.constructor;
      return e === ((typeof t == `function` && t.prototype) || n);
    }
    t.exports = r;
  }),
  Hy = s((e, t) => {
    function n(e, t) {
      return function (n) {
        return e(t(n));
      };
    }
    t.exports = n;
  }),
  Uy = s((e, t) => {
    t.exports = Hy()(Object.keys, Object);
  }),
  Wy = s((e, t) => {
    var n = Vy(),
      r = Uy(),
      i = Object.prototype.hasOwnProperty;
    function a(e) {
      if (!n(e)) return r(e);
      var t = [];
      for (var a in Object(e)) i.call(e, a) && a != `constructor` && t.push(a);
      return t;
    }
    t.exports = a;
  }),
  Gy = s((e, t) => {
    var n = Vv(),
      r = Fy();
    function i(e) {
      return e != null && r(e.length) && !n(e);
    }
    t.exports = i;
  }),
  Ky = s((e, t) => {
    var n = By(),
      r = Wy(),
      i = Gy();
    function a(e) {
      return i(e) ? n(e) : r(e);
    }
    t.exports = a;
  }),
  qy = s((e, t) => {
    var n = wy(),
      r = Dy(),
      i = Ky();
    function a(e) {
      return n(e, i, r);
    }
    t.exports = a;
  }),
  Jy = s((e, t) => {
    var n = qy(),
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
  Yy = s((e, t) => {
    t.exports = qv()(Fv(), `DataView`);
  }),
  Xy = s((e, t) => {
    t.exports = qv()(Fv(), `Promise`);
  }),
  Zy = s((e, t) => {
    t.exports = qv()(Fv(), `Set`);
  }),
  Qy = s((e, t) => {
    t.exports = qv()(Fv(), `WeakMap`);
  }),
  $y = s((e, t) => {
    var n = Yy(),
      r = Jv(),
      i = Xy(),
      a = Zy(),
      o = Qy(),
      s = zv(),
      c = Wv(),
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
  eb = s((e, t) => {
    var n = dy(),
      r = _y(),
      i = xy(),
      a = Jy(),
      o = $y(),
      s = Cy(),
      c = Ny(),
      l = zy(),
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
        var E = C && m.call(e, `__wrapped__`),
          ee = w && m.call(t, `__wrapped__`);
        if (E || ee) {
          var D = E ? e.value() : e,
            O = ee ? t.value() : t;
          return ((v ||= new n()), _(D, O, h, g, v));
        }
      }
      return T ? ((v ||= new n()), a(e, t, h, g, _, v)) : !1;
    }
    t.exports = h;
  }),
  tb = s((e, t) => {
    var n = eb(),
      r = ky();
    function i(e, t, a, o, s) {
      return e === t
        ? !0
        : e == null || t == null || (!r(e) && !r(t))
          ? e !== e && t !== t
          : n(e, t, a, o, i, s);
    }
    t.exports = i;
  }),
  nb = s((e, t) => {
    var n = tb();
    function r(e, t) {
      return n(e, t);
    }
    t.exports = r;
  });
function rb(e, t, n, r, i) {
  let a = () => i.map((e) => ({ rect: cd(e), borderRadius: jc(e).getComputedStyle(e).borderRadius })),
    o = a(),
    s = null,
    c = !1,
    l = (e = []) => {
      ((c ||= e.some((e) => i.some((t) => t.contains(e.target) || e.target.contains(t)))),
        (s ??= window.requestAnimationFrame(() => {
          s = null;
          let e = a();
          ((i.length === 0 || i.some((e) => !e.isConnected) || c || !(0, ab.default)(o, e)) && n(),
            (o = e),
            (c = !1));
        })));
    },
    u = () => l(),
    d = window.visualViewport;
  (d?.addEventListener(`resize`, n), d?.addEventListener(`scroll`, r));
  let f = oc((i, a) => {
    (a.addEventListener(`resize`, n),
      a.addEventListener(`scroll`, r),
      i.addEventListener(`scroll`, r, !0),
      i.addEventListener(`transitionend`, u, !0));
    let o = ib(i, e, l),
      s = Ac(a, t, r);
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
function ib(e, t, n) {
  let r = new MutationObserver((e) => {
    e.every(
      (e) =>
        t.contains(e.target) || (e.type === `characterData` && e.target.parentElement?.localName !== `style`),
    ) || n(e);
  });
  return (
    r.observe(e.documentElement, { ...Gc, characterData: !0 }),
    () => {
      r.disconnect();
    }
  );
}
var ab,
  ob = o(() => {
    ((ab = u(nb(), 1)), Cd(), Zc());
  });
function sb(e, t, n, r = !1) {
  let i = A_(),
    a = cd(e),
    o = { x: t, y: n },
    s = id(e, a ?? { x: t, y: n, width: 0, height: 0 }, o, a != null && Ec(e), i.width);
  return (
    r && (s.annotationFeatures = [`selectable-containers`]),
    { anchor: s, themeVariant: k_(), viewportRect: a, viewportPoint: o, viewportSize: i }
  );
}
function cb(e, t) {
  let { anchor: n } = e;
  return (md(n.pageUrl, fd()) && (n.kind !== `element` || t != null) && (n.kind !== `text` || lu(n) != null)
    ? T_(n, e.viewportRect, t)
    : null) == null
    ? { ...e, placement: `top-left`, viewportRect: null, viewportPoint: { x: 0, y: 0 } }
    : e;
}
function lb(e, t, n) {
  if (e.anchor.kind === `text`) return lu(e.anchor) ?? ub(e.anchor, n, e.themeVariant);
  if (e.anchor.kind === `region` || e.anchor.kind === `virtual`)
    return {
      ...ub(e.anchor, n, e.themeVariant),
      additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    };
  let r = A_(),
    i = t == null ? e.anchor : ad(t, e.anchor, r, e.markerViewportPoint),
    a = I_(i, n);
  return {
    anchor: i,
    additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    themeVariant: e.themeVariant ?? k_(),
    viewportRect: t == null ? dd(e.anchor) : cd(t),
    viewportPoint: a,
    viewportSize: r,
  };
}
function ub(e, t, n) {
  let r = B_();
  return {
    anchor: e,
    themeVariant: n ?? k_(),
    viewportRect: dd(e),
    viewportPoint: I_(e, t),
    viewportSize: { width: r.width, height: r.height },
  };
}
function db(e, t, n) {
  if (e.anchor.type === `text`) return lu(e.anchor.value) ?? ub(e.anchor.value, t, e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let n = A_();
    return {
      ...ub(e.anchor.value, t, e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => fv(e, n)),
    };
  }
  let r = e.anchor.element?.isConnected ? e.anchor.element : null,
    i = r == null ? null : cd(r),
    a = A_(),
    o = r == null ? e.anchor.value : ad(r, e.anchor.value, a);
  return {
    anchor: o,
    additionalAnchors: e.anchor.additionalSelections.map((e) => fv(e, a)),
    cardViewportRect:
      e.target.mode === `design`
        ? (e.anchor.cardViewportRect ?? (i == null ? void 0 : C_(i, { viewportScale: n, zoomFactor: t })))
        : void 0,
    themeVariant: e.anchor.themeVariant ?? k_(),
    viewportRect: i,
    viewportPoint: I_(o, t),
    viewportSize: a,
  };
}
function fb(e, t, n, r) {
  let i = e.target;
  if (i.mode !== `edit`) return null;
  let a = t.find((e) => e.id === i.commentId) ?? null;
  if (a == null) return null;
  if (e.anchor.type === `text`)
    return lu(e.anchor.value) ?? ub(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let t = A_();
    return {
      ...ub(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => fv(e, t)),
    };
  }
  let o = lv(e.anchor, n),
    s = A_(),
    c = o == null ? e.anchor.value : ad(o, e.anchor.value, s, e.anchor.markerViewportPoint);
  return {
    anchor: c,
    additionalAnchors: e.anchor.additionalSelections.map((e) => fv(e, s)),
    themeVariant: a.themeVariant,
    viewportRect: o == null ? dd(c) : cd(o),
    viewportPoint: I_(c, r),
    viewportSize: s,
  };
}
var pb = o(() => {
  (hv(), Cd(), Zc(), td(), nv());
});
function mb({
  comments: e,
  activeDesignChange: t,
  areAnnotationMarkersVisible: n,
  activeEditor: r,
  dragSelection: i,
  commentScreenshotCommentId: a,
  renderedVisibleComments: o,
  renderedVisibleDesignChanges: s,
  visibleComments: c,
  commentNumbersById: l,
  renderedLiveCommentElements: u,
  currentPageUrl: d,
  viewportSnapshot: f,
  zoomFactor: p,
  canUseAnnotationMultiSelect: m,
  hoveredEditorAnnotationSelectionIndex: h,
  hoveredCommentId: g,
  shouldShowSavedCommentMarks: _,
  isAnnotationSuspended: v,
  activeElementSnapshot: y,
  virtualFeedback: b,
  hoveredElementSnapshot: x,
  activeDesignScrubProperty: S,
}) {
  let C = a == null ? null : (o.find((e) => e.id === a) ?? null),
    w = a == null ? null : (s.find((e) => e.id === a) ?? null),
    T =
      C == null ? (w == null ? null : { kind: `design`, annotation: w }) : { kind: `comment`, annotation: C },
    E = T?.annotation.id ?? null,
    ee = T?.kind === `comment` ? [T.annotation] : o,
    D = T != null && a != null,
    O = r?.target.mode === `create` ? cv(r.anchor) : null,
    te =
      r?.target.mode === `create` && r.anchor.type !== `text`
        ? [uv(r.anchor).primary, ...r.anchor.additionalSelections]
        : [],
    ne = r?.target.mode === `create` && r.anchor.type !== `text` ? r.anchor.viewportSize : void 0,
    re =
      m &&
      !D &&
      i == null &&
      r?.target.mode === `create` &&
      r.anchor.type !== `text` &&
      h != null &&
      h >= 0 &&
      h < te.length
        ? h
        : null,
    k = sv(r, [...o, ...c], u),
    A = ds(d),
    j = o;
  T?.kind === `comment`
    ? (j = A ? [T.annotation] : o)
    : A || D
      ? (j = [])
      : k != null && (j = o.filter((e) => e.id !== k.id));
  let ie = j.flatMap((e) => {
      let t = l.get(e.id);
      return t == null
        ? []
        : (e.anchor.kind === `text` ? [e.anchor] : [e.anchor, ...(e.additionalAnchors ?? [])]).flatMap(
            (n, r) => {
              if (n.kind === `virtual`) return [];
              let i = e.selectionSourceIndexes[r] ?? r,
                a = F_(n, f, {
                  liveElement: n.kind === `element` ? sd(n, i === 0 ? e.id : void 0, u) : null,
                  viewportSize: e.markerViewportSize,
                  zoomFactor: p,
                });
              return a == null
                ? []
                : [
                    {
                      anchor: n,
                      comment: e,
                      commentNumber: t,
                      key: `${e.id}:${n.framePath.join(`>`)}:${n.selector ?? n.elementPath}:${r}`,
                      markerPoint: a,
                      savedSelectionIndex: i,
                    },
                  ];
            },
          );
    }),
    ae = bs(
      ie.map(({ markerPoint: e }) => e),
      f.width * p,
    ),
    oe = T?.kind === `comment` ? ie.findIndex(({ comment: e }) => e.id === T.annotation.id) : -1,
    M = oe === -1 ? void 0 : ae[oe],
    se = M == null ? void 0 : { x: M.x / p, y: M.y / p },
    ce =
      T?.annotation.anchor.kind === `element`
        ? T.kind === `comment`
          ? (vv(T.annotation, u) ?? null)
          : (sd(T.annotation.anchor, T.annotation.id, u) ?? null)
        : null,
    le =
      T?.kind === `comment` && T.annotation.anchor.kind !== `text`
        ? (T.annotation.additionalAnchors ?? []).map((e) => av(e, u))
        : [],
    ue =
      T?.kind === `comment` &&
      T.annotation.anchor.kind === `element` &&
      ce == null &&
      le.every((e) => e.anchor.kind === `element` && e.liveElement == null) &&
      !ds(T.annotation.anchor.pageUrl),
    de = g == null ? null : (o.find((e) => e.id === g) ?? null),
    fe =
      (_ && n !== !1) || (D && T?.kind === `comment`)
        ? ee.flatMap((e) =>
            rv(e, r, T?.kind === `comment` ? T.annotation : null)
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
    pe = null;
  D && T?.annotation.anchor.kind === `text`
    ? (pe = T.annotation.anchor)
    : !D && !v && r?.anchor.type === `text`
      ? (pe = r.anchor.value)
      : !D && !v && n !== !1 && de?.anchor.kind === `text` && (pe = de.anchor);
  let me = pe == null ? null : fu(pe),
    he = pe == null ? [] : S_(pe),
    ge = me == null ? he : [],
    _e = null,
    ve = !1,
    ye = `hover-box`,
    be,
    N = [];
  if (D && T?.annotation.anchor.kind === `element`) {
    let e = ce == null ? null : nd(ce),
      t = e?.rect ?? dd(T.annotation.anchor);
    ((be = e?.borderRadius),
      (ye = j_(T.annotation.anchor, t, f.width, f.height)),
      (_e = T_(T.annotation.anchor, t, ce)),
      (ve = T.kind === `comment` && rd(T.annotation.anchor)),
      (N = pv(le, f, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: T.annotation.viewportSize,
      })));
  } else if (D && T?.kind === `comment` && T.annotation.anchor.kind === `region`) {
    let e = dd(T.annotation.anchor);
    ((ye = z_(T.annotation.anchor, e, f.width, f.height)),
      (_e = T_(T.annotation.anchor, e)),
      (N = pv(le, f, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: T.annotation.viewportSize,
      })));
  } else if (!D) {
    if (((_e = i?.rect ?? null), _e != null)) {
      if (((ye = z_(null, _e, f.width, f.height)), r?.target.mode === `create` && r.anchor.type !== `text`)) {
        let e = uv(r.anchor);
        N = pv([e.primary, ...e.additional], f, {
          clipToVisibleArea: !0,
          viewportSize: r.anchor.viewportSize,
        });
      }
    } else if (r?.anchor.type === `element`) {
      let e = cv(r.anchor),
        t = r.anchor.element === y?.element ? y.snapshot : null,
        n = t?.rect ?? dd(e);
      ((be = t?.borderRadius),
        (ye = r.target.mode === `design` ? `hover-box` : j_(e, n, f.width, f.height)),
        (_e = r.target.mode === `design` ? n : T_(e, n, r.anchor.element)),
        (ve = r.target.mode !== `design` && rd(e)),
        (N = pv(r.anchor.additionalSelections, f, {
          clipToVisibleArea: r.target.mode !== `design`,
          selectionIndexOffset: 1,
          viewportSize: r.anchor.viewportSize,
        })));
    } else if (r?.anchor.type === `region` && r.target.mode !== `design`) {
      let e = dd(r.anchor.value);
      ((ye = z_(r.anchor.value, e, f.width, f.height)),
        (_e = T_(r.anchor.value, e)),
        (N = pv(r.anchor.additionalSelections, f, {
          clipToVisibleArea: !0,
          selectionIndexOffset: 1,
          viewportSize: r.anchor.viewportSize,
        })));
    } else
      r?.anchor.type === `virtual` || b != null
        ? (_e = b?.rect ?? null)
        : x != null && ((_e = x.rect), (be = x.borderRadius), (ye = j_(null, _e, f.width, f.height)));
  }
  let xe = T == null ? null : w_([...he, ...(_e == null ? [] : [_e]), ...N.map(({ rect: e }) => e)]),
    Se = D ? [] : hb(S, r, t, u),
    Ce =
      !D && O != null && O.kind !== `virtual` && (!A || k == null)
        ? F_(O, f, {
            includeElementFrameScroll: !0,
            liveElement: te[0]?.liveElement ?? null,
            viewportSize: ne,
            zoomFactor: p,
          })
        : null,
    we = rs(e),
    Te = Ce == null ? null : k == null ? (we === 0 ? null : we + 1) : (l.get(k.id) ?? null);
  return {
    screenshotCaptureId: E,
    isScreenshotCaptureActive: D,
    activeCreateAnnotationSelections: te,
    linkedAnnotationSelectionIndex: re,
    visibleMarkerComments: ie,
    spreadMarkerPoints: ae,
    screenshotMarkerViewportPoint: se,
    shouldSkipScreenshotCapture: ue,
    hoveredPreviewComment: de,
    regionCommentAnchors: fe,
    overlayTextHighlightRects: ge,
    highlightRect: _e,
    isPageAnnotationHighlight: ve,
    highlightClassName: ye,
    highlightBorderRadius: be,
    additionalSelectionHighlights: N,
    screenshotAnnotationViewportRect: xe,
    activeDesignScrubItemOverlays: Se,
    activeCreateMarkerPoint: Ce,
    activeCreateCommentNumber: Te,
    textHighlightTarget: me,
  };
}
function hb(e, t, n, r) {
  if (e == null || (e !== `gap` && e !== `row-gap` && e !== `column-gap`)) return [];
  let i = t?.anchor.type === `element` ? t.anchor.element : n == null ? null : (r.get(n.id) ?? null);
  if (i == null) return [];
  let a = jc(i).getComputedStyle(i);
  if (a.display !== `flex` && a.display !== `inline-flex`) return [];
  let o = Array.from(i.children).flatMap((e, t) => {
    if (!B(e)) return [];
    let n = jc(e).getComputedStyle(e);
    if (n.position === `absolute` || n.position === `fixed`) return [];
    let r = cd(e);
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
var gb = o(() => {
    (Js(), hv(), xv(), Cd(), Zc(), td(), nv());
  }),
  _b = s((e) => {
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
  vb = s((e, t) => {
    t.exports = _b();
  });
function yb({ className: e, appearance: t = `numbered`, fillColor: n, children: r }) {
  let i = t === `avatar` || t === `unread-avatar`,
    a = {
      avatar: `var(--color-surface)`,
      "unread-avatar": `var(--color-background-info-solid)`,
      review: n ?? `currentColor`,
      numbered: n ?? `currentColor`,
    }[t];
  return (0, xb.jsxs)(`span`, {
    "aria-hidden": `true`,
    className: e,
    style: {
      display: `grid`,
      isolation: `isolate`,
      pointerEvents: `none`,
      borderRadius: `50% 50% 50% ${Sb}px`,
      backgroundColor: a,
      boxShadow:
        i || t === `review` ? `var(--shadow-lg-stronger, 0px 4px 8px -2px rgb(0 0 0 / 16%))` : void 0,
    },
    children: [
      (0, xb.jsx)(`span`, {
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
      (0, xb.jsx)(`span`, {
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
function bb({ width: e, height: t, strokeWidth: n }) {
  let r = n / 2,
    i = e / 2 - r,
    a = t / 2 - r,
    o = Sb - r;
  return `M${e / 2} ${r}a${i} ${a} 0 0 1 0 ${t - n}H${Sb}a${o} ${o} 0 0 1-${o}-${o}V${t / 2}A${i} ${a} 0 0 1 ${e / 2} ${r}Z`;
}
var xb,
  Sb,
  Cb,
  wb = o(() => {
    ((xb = vb()), (Sb = 3), (Cb = `#339cff`), `${Cb}`);
  });
function Tb(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Tb(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function Eb() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Tb(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Db = o(() => {}),
  Ob,
  kb = o(() => {
    (Vg(),
      (Ob = Bg({
        commentMarker: {
          id: `browserSidebarCommentRuntime.commentMarkerLabel`,
          defaultMessage: `Browser comment {commentNumber}`,
          description: `Accessible label for a placed browser comment marker`,
        },
        draftCommentMarker: {
          id: `browserSidebarCommentRuntime.draftCommentMarkerLabel`,
          defaultMessage: `Focus unsaved browser comment`,
          description: `Accessible label for the temporary marker shown while creating a browser comment`,
        },
        color: {
          id: `browserSidebarCommentRuntime.elementMetadata.color`,
          defaultMessage: `color`,
          description: `Label for the computed text color row in the browser comment hover metadata tooltip`,
        },
        font: {
          id: `browserSidebarCommentRuntime.elementMetadata.font`,
          defaultMessage: `font`,
          description: `Label for the computed font row in the browser comment hover metadata tooltip`,
        },
      })));
  }),
  Ab,
  jb,
  Mb,
  Nb = o(() => {
    ((Ab = [0.4, 0, 0.2, 1]),
      (jb = { rotate: 0, y: 0, scale: 1 }),
      (Mb = { duration: 0.52, ease: Ab, times: [0, 0.22, 0.72, 1] }),
      { ...Mb },
      { ...Mb },
      { ...jb });
  }),
  Pb,
  Fb = o(() => {
    (Nb(), (Pb = [0.23, 1, 0.32, 1]));
  });
function Ib(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  let i = _s(e, { viewport: t, viewportScale: n, zoomFactor: r });
  return gs(n) === 1
    ? { left: i.x, top: i.y, width: i.width }
    : { height: i.height, left: i.x, top: i.y, width: i.width };
}
var Lb,
  Rb,
  Z,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb = o(() => {
    (wb(),
      Js(),
      Fb(),
      (Lb = `#000000`),
      (Rb = `#0069FB`),
      (Z = {
        ...Gs,
        fill: Cb,
        hotspotByMode: {
          add: { x: Gs.width / 2, y: Gs.height / 2 },
          comment: Gs.hotspot,
          text: { x: 7, y: 13.5 },
        },
        path: bb({ width: Gs.width, height: Gs.height, strokeWidth: 1.65 }),
        stroke: `white`,
        strokeWidth: 1.65,
      }),
      (zb = (Z.hotspotByMode.comment.x / Z.width) * 100),
      (Bb = ((Z.hotspotByMode.comment.y + (Z.width - Z.height) / 2) / Z.width) * 100),
      (Vb = `translate(-${zb}%,-${Bb}%)`),
      (Hb = {
        position: `fixed`,
        inset: 0,
        pointerEvents: `none`,
        fontSize: `13px`,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
      }),
      (Ub = `
.hover-box{position:fixed;box-sizing:border-box;border-radius:0;border:2px solid ${Rb};background:color-mix(in srgb,${Rb} 3%,transparent);box-shadow:inset 0 0 0 1px rgba(255,255,255,.28);pointer-events:none;transition:opacity 150ms cubic-bezier(${Pb.join(`,`)})}
[data-browser-comment-control-editing] .hover-box{opacity:0}
@media(prefers-reduced-motion:reduce){.hover-box{transition:none}}
.text-selection-highlight{position:fixed;box-sizing:border-box;background:#128dff66;pointer-events:none}
.flex-item-overlay{position:fixed;box-sizing:border-box;border-radius:0;border:1px solid rgba(2,133,255,.52);background:rgba(18,141,255,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);pointer-events:none}
.interaction-layer{position:fixed;inset:0;z-index:0;width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border:0;padding:0;background:transparent;pointer-events:none}
.interaction-layer::backdrop{background:transparent}
.interaction-blocker{position:absolute;inset:0;z-index:0;pointer-events:auto;touch-action:pan-x pan-y}
.annotation-selection-cursor{position:fixed;z-index:1;display:block}
.annotation-selection-modifier-cursor{z-index:2;color:${Lb};paint-order:stroke fill;stroke:${Z.stroke};stroke-linejoin:round;stroke-width:2px}
.annotation-selection-comment-cursor{overflow:visible}
.annotation-selection-comment-cursor[data-browser-comment-annotation-selection-cursor-mode="text"]{z-index:2}
.annotation-selection-cursor-bubble{transform:translate(0,0) scale(1);transform-box:view-box;transform-origin:0 0;transition:transform 150ms cubic-bezier(${Pb.join(`,`)})}
.annotation-selection-cursor-beam{opacity:0;transition:opacity 150ms cubic-bezier(${Pb.join(`,`)})}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-bubble{transform:translate(${12 + Z.hotspotByMode.comment.x - Z.hotspotByMode.text.x}px,${-2 + Z.hotspotByMode.comment.y - Z.hotspotByMode.text.y}px) scale(.55)}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-beam{opacity:1}
@media(prefers-reduced-motion:reduce){.annotation-selection-cursor-bubble,.annotation-selection-cursor-beam{transition:none}}
[data-browser-comment-annotation-selection-modifier-active] .marker{cursor:none}
.annotation-selection-target-hover{border-color:color-mix(in srgb,${Rb} 80%,black)}
.annotation-selection-remove-hover{background:color-mix(in srgb,${Rb} 20%,transparent)}
.region-box{border-width:2px;border-style:dashed}
.posted-region-highlight{position:fixed;box-sizing:border-box;border-radius:0;background:color-mix(in srgb,${Rb} 3%,transparent);pointer-events:none}
.google-docs-annotation-box{background:transparent;box-shadow:none}
.google-docs-element-box{border-color:transparent}
.markers-layer{position:fixed;inset:0;z-index:1;pointer-events:none}
.marker{position:fixed;border:0;background:transparent;transform:${Vb};transform-origin:${zb}% ${Bb}%;pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.marker-icon{position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none}
.saved-marker{width:var(--browser-sidebar-saved-marker-size);height:var(--browser-sidebar-saved-marker-size)}
.draft-marker{width:var(--browser-sidebar-draft-marker-size);height:var(--browser-sidebar-draft-marker-size)}
.marker-label{position:relative;color:${Z.stroke};font-size:var(--browser-sidebar-marker-label-font-size);font-weight:700;line-height:1;pointer-events:none}
.marker-motion{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;pointer-events:none;transform-origin:bottom left;scale:1;transition:scale 150ms cubic-bezier(${Pb.join(`,`)})}
.marker:hover .marker-motion,.marker[data-selected="true"] .marker-motion{scale:1.08}
@media(prefers-reduced-motion:reduce){.marker-motion{transition:none}}
${Ws}
`));
  });
function Gb({ className: e, mode: t, ...n }) {
  return t === `add`
    ? (0, Q.jsx)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: Eb(e, `annotation-selection-modifier-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Z.height,
        viewBox: `0 0 20 20`,
        width: Z.width,
        children: (0, Q.jsx)(`path`, {
          d: `M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z`,
          fill: `currentColor`,
        }),
      })
    : (0, Q.jsxs)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: Eb(e, `annotation-selection-comment-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Z.height,
        viewBox: `0 0 ${Z.width} ${Z.height}`,
        width: Z.width,
        children: [
          (0, Q.jsx)(`g`, {
            className: `annotation-selection-cursor-beam annotation-selection-modifier-cursor`,
            transform: `translate(${Z.hotspotByMode.comment.x - Z.hotspotByMode.text.x} ${Z.hotspotByMode.comment.y - Z.hotspotByMode.text.y})`,
            children: (0, Q.jsx)(`path`, {
              d: `M3 5H5C5.81 5 6.54 5.35 7 5.91C7.46 5.35 8.19 5 9 5H11V6.5H9C8.31 6.5 7.75 7.06 7.75 7.75V19.25C7.75 19.94 8.31 20.5 9 20.5H11V22H9C8.19 22 7.46 21.65 7 21.09C6.54 21.65 5.81 22 5 22H3V20.5H5C5.69 20.5 6.25 19.94 6.25 19.25V7.75C6.25 7.06 5.69 6.5 5 6.5H3Z`,
              fill: `currentColor`,
            }),
          }),
          (0, Q.jsx)(`path`, {
            className: `annotation-selection-cursor-bubble`,
            d: Z.path,
            fill: Z.fill,
            stroke: Z.stroke,
            strokeWidth: Z.strokeWidth,
          }),
        ],
      });
}
function Kb({
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
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      e.map((e) =>
        (0, Q.jsx)(
          `div`,
          {
            className: `${e.className}${o === e.selectionIndex ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover":
              o === e.selectionIndex ? e.selectionIndex : void 0,
            style: R_(e.rect, l, e.borderRadius),
          },
          e.key,
        ),
      ),
      r == null
        ? null
        : (0, Q.jsx)(`div`, {
            className: `${n}${o === 0 ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover": o === 0 ? 0 : void 0,
            style: R_(r, l, t),
          }),
      i == null
        ? null
        : (0, Q.jsx)(`div`, {
            className: `${j_(null, i.rect, c, s)}${a ? ` annotation-selection-target-hover annotation-selection-remove-hover` : ``}`,
            "data-browser-comment-annotation-selection-hover": !0,
            "data-browser-comment-annotation-selection-remove-hover": a || void 0,
            style: R_(i.rect, l, i.borderRadius),
          }),
    ],
  });
}
function qb({
  commentNumber: e,
  isSelected: t,
  markerPoint: n,
  onClick: r,
  onMouseEnter: i,
  onMouseLeave: a,
}) {
  let o = _g().formatMessage(Ob.commentMarker, { commentNumber: e });
  return (0, Q.jsx)(`button`, {
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
    children: (0, Q.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, Q.jsx)(yb, { className: `marker-icon`, fillColor: Z.fill }),
        (0, Q.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Jb({ commentNumber: e, markerPoint: t, onFocusEditor: n }) {
  let r = _g().formatMessage(Ob.draftCommentMarker);
  return (0, Q.jsx)(`button`, {
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
    children: (0, Q.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, Q.jsx)(yb, { className: `marker-icon`, fillColor: Z.fill }),
        e == null ? null : (0, Q.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Yb({ snapshot: e, viewportScale: t, zoomFactor: n }) {
  return (0, Q.jsxs)(`div`, {
    className: `element-metadata-tooltip`,
    style: Ib(e.rect, { viewportScale: t, zoomFactor: n }),
    children: [
      (0, Q.jsx)(`div`, { className: `element-metadata-cell element-metadata-tag`, children: e.tagName }),
      (0, Q.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.size }),
      (0, Q.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, Q.jsx)(Pg, { ...Ob.color }),
      }),
      (0, Q.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.color }),
      (0, Q.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, Q.jsx)(Pg, { ...Ob.font }),
      }),
      (0, Q.jsx)(`div`, { className: `element-metadata-cell element-metadata-value`, children: e.font }),
    ],
  });
}
function Xb({ children: e, style: t }) {
  let n = (0, Qb.useRef)(null),
    [r, i] = (0, Qb.useState)(!1);
  return (
    (0, Qb.useLayoutEffect)(() => {
      let e = n.current;
      if (e == null) return;
      let t = null,
        r = () => {
          let t = fc(e, !1);
          return (i(t), t);
        };
      return (
        r() || (t = window.requestAnimationFrame(r)),
        () => {
          (t != null && window.cancelAnimationFrame(t), pc(e));
        }
      );
    }, []),
    (0, Q.jsx)(`div`, {
      ref: n,
      popover: `manual`,
      className: `interaction-layer`,
      style: r ? t : void 0,
      "data-browser-comment-interaction-layer": !0,
      children: e,
    })
  );
}
function Zb() {
  return (0, Q.jsx)(`div`, {
    className: `interaction-blocker`,
    "data-browser-comment-interaction-blocker": !0,
  });
}
var Qb,
  Q,
  $b = o(() => {
    (wb(), Db(), (Qb = u(Uf(), 1)), Vg(), Zc(), nv(), kb(), Wb(), (Q = vb()));
  });
function ex(e, t) {
  if (e == null) return !1;
  if (nx(e, t)) return !0;
  let n = jc(e),
    r = rx(e, t, n);
  return r == null
    ? n !== window && (n.scrollBy(t.x, t.y), !0)
    : ((r.scrollLeft += t.x), (r.scrollTop += t.y), !0);
}
function tx(e, t) {
  return e.deltaMode === ox
    ? { x: e.deltaX * cx, y: e.deltaY * cx }
    : e.deltaMode === sx
      ? { x: e.deltaX * t.innerWidth, y: e.deltaY * t.innerHeight }
      : { x: e.deltaX, y: e.deltaY };
}
function nx(e, t) {
  let n = e.closest(`#waffle-grid-container`);
  if (!B(n)) return !1;
  let r = n.querySelector(`.native-scrollbar-x`),
    i = n.querySelector(`.native-scrollbar-y`),
    a = !1;
  return (
    B(r) && t.x !== 0 && ((r.scrollLeft += t.x), (a = !0)),
    B(i) && t.y !== 0 && ((i.scrollTop += t.y), (a = !0)),
    a
  );
}
function rx(e, t, n) {
  let r = e;
  for (; r != null;) {
    if (ix(r, t, n)) return r;
    if (r === n.document.body || r === n.document.documentElement) return null;
    r = $s(r);
  }
  return null;
}
function ix(e, t, n) {
  let r = n.getComputedStyle(e);
  return (
    (Xs(r.overflowY) && ax(t.y, e.scrollTop, e.clientHeight, e.scrollHeight)) ||
    (Xs(r.overflowX) && ax(t.x, e.scrollLeft, e.clientWidth, e.scrollWidth))
  );
}
function ax(e, t, n, r) {
  return e < 0 ? t > 0 : e > 0 && t < r - n;
}
var ox,
  sx,
  cx,
  lx = o(() => {
    (Zc(), (ox = 1), (sx = 2), (cx = 16));
  });
function ux(e, t) {
  return oc((n) => {
    let r = () => {
      (fx(n, e, t), mx(n, e), px(n, e));
    };
    r();
    let i = new MutationObserver(r);
    return (
      i.observe(n.documentElement, Gc),
      () => {
        (i.disconnect(), gx(n), n.getElementById(Cx)?.remove());
        for (let e of n.querySelectorAll(`[${xx}]`)) e.removeAttribute(xx);
      }
    );
  });
}
function dx(e, t) {
  let n = new Set(bx(e));
  (n.add(t), e.setAttribute(xx, Array.from(n).join(` `)));
}
function fx(e, t, n) {
  let r = new Map();
  for (let i of t) {
    if (
      !md(i.anchor.pageUrl, window.location.href) ||
      i.anchor.kind !== `element` ||
      i.anchor.selector == null ||
      Cc(i.anchor.framePath) !== e
    )
      continue;
    let t = n.get(i.id),
      a = t?.isConnected && t.ownerDocument === e ? t : ud(e, i.anchor);
    if (a != null) {
      n.set(i.id, a);
      let e = r.get(a) ?? new Set();
      (e.add(i.draftAttribute), r.set(a, e));
    }
  }
  for (let t of e.querySelectorAll(`[${xx}]`)) B(t) && (yx(t, r.get(t)), r.delete(t));
  for (let [e, t] of r) yx(e, t);
}
function px(e, t) {
  let n = vs(
      t.filter(
        (t) =>
          md(t.anchor.pageUrl, window.location.href) &&
          Cc(t.anchor.framePath) === e &&
          (t.anchor.frameUrl == null || md(t.anchor.frameUrl, e.location.href)),
      ),
      xx,
    ),
    r = e.getElementById(Cx);
  if (n.length === 0) {
    r?.remove();
    return;
  }
  let i = r instanceof HTMLStyleElement ? r : e.createElement(`style`);
  ((i.id = Cx),
    i.textContent !== n && (i.textContent = n),
    i.parentElement ?? (e.head ?? e.documentElement).append(i));
}
function mx(e, t) {
  let n = new Map(t.map((e) => [e.draftAttribute, e]));
  for (let t of e.querySelectorAll(`[${xx}], [${Sx}]`)) {
    if (!B(t)) continue;
    let e = hx(
      bx(t)
        .map((e) => n.get(e))
        .filter((e) => e != null),
    );
    if (e == null) {
      _x(t);
      continue;
    }
    (t.hasAttribute(Sx) || t.setAttribute(Sx, e.previousValue), vx(t, e.value));
  }
}
function hx(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t]?.text;
    if (n != null && n.value !== n.previousValue) return n;
  }
  return null;
}
function gx(e) {
  for (let t of e.querySelectorAll(`[${Sx}]`)) B(t) && _x(t);
}
function _x(e) {
  let t = e.getAttribute(Sx);
  t != null && (vx(e, t), e.removeAttribute(Sx));
}
function vx(e, t) {
  e.textContent !== t && (e.textContent = t);
}
function yx(e, t) {
  let n = t == null ? `` : Array.from(t).join(` `);
  if (n.length === 0) {
    e.removeAttribute(xx);
    return;
  }
  e.getAttribute(xx) !== n && e.setAttribute(xx, n);
}
function bx(e) {
  return (e.getAttribute(xx) ?? ``).split(/\s+/).filter((e) => e.length > 0);
}
var xx,
  Sx,
  Cx,
  wx = o(() => {
    (Js(),
      Cd(),
      Zc(),
      (xx = `data-codex-browser-design-group`),
      (Sx = `data-codex-browser-design-original-text`),
      (Cx = `codex-browser-design-draft-style`));
  });
function Tx(e, t, n, r, i) {
  let a = t.anchor.kind === `virtual`,
    o = a ? null : (i ?? nd(e)),
    s = r?.id ?? globalThis.crypto?.randomUUID?.() ?? `design-${Date.now()}`,
    c = a ? null : ss(e),
    l = r?.annotationControls ?? n,
    u = as(o?.styles ?? [], r?.declarations ?? []),
    d =
      r == null
        ? l?.controls.map((e) => ({ callback: e.callback, previousValue: e.currentValue, value: Nd(e) }))
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
    provenance: cs(o?.styles ?? []),
    selector: t.anchor.selector,
    targetLabel: t.anchor.kind === `virtual` ? (t.anchor.elementName ?? t.anchor.targetId) : Dx(e),
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
function Ex(e) {
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
function Dx(e) {
  let t = e.tagName.toLowerCase(),
    n = ld(e);
  return n == null ? t : `${t}: ${n}`;
}
var Ox = o(() => {
  (Ud(), Js(), Cd());
});
function kx() {
  let e = `codex-site-annotation-preview-mask`,
    t = jx(`svg`, { width: `0`, height: `0`, "aria-hidden": `true` }),
    n = jx(`mask`, {
      id: e,
      maskUnits: `userSpaceOnUse`,
      maskContentUnits: `userSpaceOnUse`,
      "mask-type": `luminance`,
      x: `0`,
      y: `0`,
    }),
    r = jx(`rect`, { fill: `white` });
  (n.append(r), t.append(n));
  let i = ``;
  return {
    element: t,
    id: e,
    update({ viewport: a, targets: o }) {
      let s = o.map((e) => ({ path: Mx(e), clip: e.clipRect })),
        c = JSON.stringify({ viewport: a, shapes: s });
      if (c !== i) {
        i = c;
        for (let e of [n, r])
          (e.setAttribute(`width`, String(a.width)), e.setAttribute(`height`, String(a.height)));
        (n.replaceChildren(r),
          t.replaceChildren(n),
          s.forEach(({ path: r, clip: i }, a) => {
            let o = `${e}-clip-${a}`,
              s = jx(`clipPath`, { id: o, clipPathUnits: `userSpaceOnUse` });
            (s.append(jx(`rect`, i)),
              t.append(s),
              n.append(jx(`path`, { d: r, fill: `black`, "clip-path": `url(#${o})` })));
          }));
      }
    },
  };
}
function Ax({ rect: e, style: t, radiusScale: n }) {
  let { width: r, height: i } = e,
    a = [
      t.borderTopLeftRadius,
      t.borderTopRightRadius,
      t.borderBottomRightRadius,
      t.borderBottomLeftRadius,
    ].map((e) => {
      let [t, a = t] = e.trim().split(/\s+/);
      return { x: Nx(t, r, n?.x ?? 1), y: Nx(a, i, n?.y ?? 1) };
    }),
    [o, s, c, l] = a,
    u = Math.min(1, r / (o.x + s.x), r / (l.x + c.x), i / (o.y + l.y), i / (s.y + c.y));
  for (let e of a) ((e.x *= u), (e.y *= u));
  return a;
}
function jx(e, t) {
  let n = document.createElementNS(`http://www.w3.org/2000/svg`, e);
  for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
  return n;
}
function Mx(e) {
  let { x: t, y: n, width: r, height: i } = e.rect,
    [a, o, s, c] = Ax(e),
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
function Nx(e, t, n) {
  let r = Number.parseFloat(e);
  return Number.isFinite(r) ? Math.max(0, e.endsWith(`%`) ? (r * t) / 100 : r * n) : 0;
}
var Px = o(() => {});
function Fx({ layer: e, color: t }) {
  let n = e.ownerDocument,
    r = n.createElement(`style`);
  ((r.textContent = Ix), (e.style.color = t));
  let i = kx(),
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
          [s, c, l, u] = Ax(r),
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
var Ix,
  Lx = o(() => {
    (Fb(),
      Px(),
      (Ix = `
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
function Rx(e) {
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
    let t = zx(e, n.modals);
    n.boundaries.push(...(t == null ? n.modals : [t]));
  }
  return (e) => {
    let n = e;
    for (; n != null;) {
      let e = t.get(n.ownerDocument);
      if (e != null) {
        let { boundaries: t, popovers: r } = e;
        for (let e of t) if (!Bx(e, n)) return !1;
        let i;
        for (let e of r)
          if (
            !Bx(e.element, n) &&
            ((i ??= n.getBoundingClientRect()),
            i.left < e.rect.right && i.right > e.rect.left && i.top < e.rect.bottom && i.bottom > e.rect.top)
          )
            return !1;
      }
      let r = n.ownerDocument.defaultView?.frameElement;
      n = B(r) ? r : null;
    }
    return !0;
  };
}
function zx(e, t) {
  if (t.length < 2) return t[0];
  for (let n of [e.activeElement, e.elementFromPoint?.(0, 0)]) {
    for (; n?.shadowRoot?.activeElement != null;) n = n.shadowRoot.activeElement;
    for (; B(n);) {
      if (t.includes(n)) return n;
      n = $s(n);
    }
  }
}
function Bx(e, t) {
  let n = t;
  for (; n != null;) {
    if (n === e) return !0;
    n = $s(n);
  }
  return !1;
}
var Vx = o(() => {
  Zc();
});
function Hx(e) {
  let t = null;
  function n() {
    (t?.(), (t = null));
  }
  return {
    setPreview(r) {
      (n(), r != null && (t = Ux(e, r)));
    },
    dispose: n,
  };
}
function Ux({ shadowRoot: e, getControlTargets: t }, n) {
  let r = document.createElement(`div`);
  ((r.dataset.siteAnnotationPreview = n.feature),
    r.setAttribute(`aria-hidden`, `true`),
    (r.popover = `manual`));
  let i = Fx({ layer: r, color: n.color });
  (e.append(r), fc(r, !1));
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
        B(t) && c.has(t) && (n ? (l.add(t), p.observe(t)) : (l.delete(t), p.unobserve(t)));
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
    for (let t of e) _(t, t.isConnected && t.ownerDocument === document && !dl(t));
  }
  function y() {
    if (((o = null), !a)) return;
    if (s == null) {
      (n.feature === `controls` && v(),
        (s = { candidates: l.values(), targets: [], hasMotion: !1, isVisible: Rx(d) }));
      for (let [e, t] of f) (!t.isConnected || e.playState !== `running`) && f.delete(e);
    }
    let { targets: e } = s,
      t = !1;
    for (let r = 0; r < qx; r++) {
      let r = s.candidates.next();
      if (r.done) {
        t = !0;
        break;
      }
      let i = r.value;
      if (
        ((s.hasMotion = s.hasMotion || Gx(i)),
        !i.isConnected ||
          !s.isVisible(i) ||
          (n.feature === `controls` && u.has(i)) ||
          (n.feature === `containers` && !Wx(i)) ||
          cd(i) == null)
      )
        continue;
      let a = E_(i);
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
        e.length === qx)
      ) {
        t = !0;
        break;
      }
    }
    (fc(r, !1),
      i.update(e),
      t
        ? s.hasMotion || e.some(({ element: e }) => Array.from(f.values()).some((t) => Kx(t, e)))
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
          if (e.type === `attributes` && B(e.target)) u(e.target);
          else if (e.type === `childList`) {
            r = !0;
            for (let t of e.addedNodes) B(t) && (u(t), f(t));
          }
        if (r) {
          for (let e of c) e.isConnected || _(e, !1);
          l.disconnect();
          for (let t of a)
            if (t !== e && !t.isConnected) {
              t.removeEventListener(`toggle`, y, !0);
              for (let e of Zx) t.removeEventListener(e, g, !0);
              (a.delete(t), d.delete(t));
            } else l.observe(t, Qx);
          for (let e of o) e.isConnected || (o.delete(e), (s = !0));
          (s && i(), n.feature === `controls` && C());
        }
        h();
      });
    function u(t) {
      if (!dl(t)) {
        if ((ec(t) && !o.has(t) && (o.add(t), (s = !0)), n.feature !== `controls`)) {
          let r = n.feature === `metadata` ? qo(t.getAttribute(`oai-annotation-metadata`)) : null;
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
      for (let t of e.querySelectorAll(`*`)) B(t) && u(t);
    }
    function m(e) {
      (a.add(e), d.add(e), l.observe(e, Qx), e.addEventListener(`toggle`, y, !0));
      for (let t of Zx) e.addEventListener(t, g, !0);
      f(e);
    }
    function g(e) {
      let n = e.composedPath()[0];
      if (!(B(n) && dl(n))) {
        if (B(n) && (e.type === `animationstart` || e.type === `transitionrun`))
          for (let e of n.getAnimations?.() ?? []) x(e, t);
        (e.type === `load` && ec(e.target) && i(), h());
      }
    }
    function v(e) {
      let t = e.composedPath()[0];
      B(t) && (u(t), i(), h());
    }
    function y(e) {
      let t = e.composedPath()[0];
      (B(t) && dl(t)) || (fc(r, !0), h());
    }
    m(e);
    for (let n of e.getAnimations?.() ?? []) x(n, t);
    let b = e.documentElement;
    return (
      b != null && p.observe(b),
      e.addEventListener(Yx, v),
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
          for (let t of Zx) e.removeEventListener(t, g, !0);
        }
        (e.removeEventListener(Yx, v),
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
    B(i) && !dl(i) && n.getKeyframes().some((e) => Object.keys(e).some((e) => Jx.test(e))) && f.set(e, i);
  }
  function S(e) {
    if (!(
      !(e instanceof CustomEvent) ||
      typeof e.detail != `string` ||
      e.detail.length > Tf.maxPayloadLength ||
      !(e.target instanceof HTMLElement) ||
      !e.target.isConnected ||
      e.target.ownerDocument !== document ||
      e.target.getRootNode() !== document
    ))
      try {
        let t = Of.safeParse(JSON.parse(e.detail));
        if (!t.success) return;
        (t.data.type === `registered`
          ? u.set(e.target, t.data.registrationId)
          : t.data.type === `disposed` && u.get(e.target) === t.data.registrationId && u.delete(e.target),
          h());
      } catch {}
  }
  function C() {
    (u.clear(),
      document.dispatchEvent(new CustomEvent(Tf.requestEvent, { detail: JSON.stringify({ type: `list` }) })));
  }
  let w = n.feature === `containers` ? oc(b) : b(document, window, () => {});
  if (n.feature === `controls`) {
    for (let e of Xx) window.addEventListener(e, h);
    (document.addEventListener(Tf.responseEvent, S), v(), C());
  }
  return (
    h(),
    () => {
      ((a = !1), o != null && window.cancelAnimationFrame(o), w(), m.disconnect(), p.disconnect());
      for (let e of Xx) window.removeEventListener(e, h);
      (document.removeEventListener(Tf.responseEvent, S), pc(r), i.dispose(), r.remove());
    }
  );
}
function Wx(e) {
  if ($c(e) !== e) return !1;
  let t = e.ownerDocument.defaultView;
  for (; t != null && t !== window;) {
    let e = t.frameElement;
    if (!ec(e) || $c(e) !== void 0) return !1;
    t = e.ownerDocument.defaultView;
  }
  return t === window;
}
function Gx(e) {
  let t = e;
  for (; t != null;) {
    if (t.getAnimations?.().some((e) => e.playState === `running`)) return !0;
    let e = $s(t);
    if (e != null) t = e;
    else {
      let e = t.ownerDocument.defaultView?.frameElement;
      t = B(e) ? e : null;
    }
  }
  return !1;
}
function Kx(e, t) {
  let n = e.ownerDocument.defaultView;
  if (n == null) return !1;
  let r = e;
  for (; r != null;) {
    let e = n.getComputedStyle(r);
    if (e.position === `absolute` || e.position === `fixed`) return !1;
    let i = $s(r);
    if (i == null) return !1;
    let a = t;
    for (; a != null;) {
      if (i === a) return !0;
      let e = $s(a);
      if (e != null) a = e;
      else {
        let e = a.ownerDocument.defaultView?.frameElement;
        a = B(e) ? e : null;
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
var qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x = o(() => {
    (kf(),
      Js(),
      Cl(),
      ol(),
      Cd(),
      nv(),
      Zc(),
      Lx(),
      Vx(),
      (qx = 128),
      (Jx =
        /^(width|height|minWidth|maxWidth|minHeight|maxHeight|margin.*|padding.*|border.*Width|fontSize|fontWeight|lineHeight|letterSpacing|wordSpacing|flex.*|grid.*|gap|rowGap|columnGap|display|position|float|clear|order|align.*|justify.*)$/),
      (Yx = `codex:annotation-shadow-root-attached`),
      (Xx = [
        `codex:register-annotation-controls`,
        `codex:update-annotation-controls`,
        `codex:dispose-annotation-controls`,
      ]),
      (Zx = [
        `scroll`,
        `load`,
        `animationstart`,
        `animationend`,
        `animationcancel`,
        `transitionrun`,
        `transitionend`,
        `transitioncancel`,
      ]),
      (Qx = {
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
function eS(e, t) {
  let n = e.head?.querySelectorAll(`meta[name="${t.name}"]`);
  if (n != null)
    for (let e of n) {
      let n = e.getAttribute(`content`),
        r = t.values.find((e) => e === n);
      if (r != null) return r;
    }
}
var tS = o(() => {});
function nS({
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
    s = () => a != null && (o(), gu(), !0),
    c = (e, o, s, c) => {
      let l = o && e != null && a == null ? sl(e.x, e.y, t, s, c) : null,
        u = o && (a != null || (l != null && !aS(l.element)));
      return (u && l != null && (u = iS(l)), n(u), u && (i(), r(e), e != null && fl(e, t)), u);
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
      let u = sl(r.x, r.y, t, s, l);
      return u == null
        ? !1
        : !i || aS(u.element)
          ? u.usesTextContainer
            ? (Wc(n), !0)
            : !1
          : iS(u)
            ? (gu(),
              o(),
              (a = {
                pointerId: n.pointerId,
                frameWindow: e,
                usesTextContainer: u.usesTextContainer,
                startPoint: r,
                hasMoved: !1,
                disposeHighlight: mu(e),
              }),
              c(r, !0, s, l),
              Wc(n, { preventDefault: !1 }),
              !0)
            : !1;
    },
    handlePointerMove(t, n) {
      if (a?.pointerId !== n.pointerId) return !1;
      if (!(n.buttons & 1)) return (s(), !1);
      let i = Nc(t, { x: n.clientX, y: n.clientY });
      return (
        (a.hasMoved = a.hasMoved || Math.hypot(i.x - a.startPoint.x, i.y - a.startPoint.y) >= e),
        r(i),
        Wc(n, { preventDefault: !1 }),
        !0
      );
    },
    handlePointerUp(e, t) {
      if (!e.isTrusted || a?.pointerId !== e.pointerId) return !1;
      let { frameWindow: n, usesTextContainer: r, hasMoved: i } = a;
      (o(), Wc(e, { preventDefault: !1 }));
      let s;
      try {
        s = r || i ? ou(n) : null;
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
function rS(e, t, n, r) {
  let i = n && t != null ? ul(t.x, t.y, e, `text`, r) : null;
  return oc(
    (e) => (
      sc(e, bl, n, i?.ownerDocument === e ? i : void 0),
      () => {
        cc(e);
      }
    ),
  );
}
function iS(e) {
  let { element: t, usesTextContainer: n } = e,
    r = t.ownerDocument;
  return (
    sc(r, bl, !0, t),
    !n && r.defaultView?.getComputedStyle(t).userSelect === `none` ? (sc(r, bl, !1), !1) : !0
  );
}
function aS(e) {
  let t = e;
  for (; t != null;) {
    if (t.matches(`input, button, select, audio, video`)) return !G(t);
    t = $s(t);
  }
  return !1;
}
var oS = o(() => {
    (Cl(), Zc(), td());
  }),
  sS = c({
    buildRegionAnchor: () => D_,
    getBrowserCommentElementSnapshot: () => nd,
    getMarkerPoint: () => M_,
    mountBrowserCommentRuntime: () => cS,
  });
function cS(e) {
  let t = wl(e.annotationDocumentId),
    n = dS(),
    r = uc(n, bl, Sl),
    i = n.shadowRoot ?? n.attachShadow({ mode: `open` });
  i.replaceChildren();
  let a = document.createElement(`div`);
  i.appendChild(a);
  let o = Hx({ shadowRoot: i, getControlTargets: () => e.getAnnotationControlTargets?.() ?? [] }),
    s = {
      ...e,
      sendMessageToHost(t) {
        let n = B_().visualViewport;
        if (n == null || !(`anchorState` in t) || t.anchorState == null) {
          e.sendMessageToHost(t);
          return;
        }
        e.sendMessageToHost({ ...t, anchorState: { ...t.anchorState, visualViewport: n } });
      },
    },
    c = (0, vS.createRoot)(a);
  return (
    c.render((0, yS.jsx)(lS, { rootHost: n, bridge: s })),
    {
      setSiteAnnotationPreview: o.setPreview,
      dispose() {
        (o.dispose(), r(), c.unmount(), lc(), n.remove(), t());
      },
    }
  );
}
function lS({ rootHost: e, bridge: t }) {
  let [n, r] = (0, $.useState)(t.initialState),
    i = (0, $.useRef)(t.initialState.comments),
    [a] = (0, $.useState)(Yg),
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
    [E, ee] = (0, $.useState)(null),
    D = (0, $.useRef)(null),
    [O, te] = (0, $.useState)(null),
    [ne, re] = (0, $.useState)(null),
    [k, A] = (0, $.useState)(!1),
    [j, ie] = (0, $.useState)(null),
    [ae, oe] = (0, $.useState)(B_),
    M = (0, $.useRef)(null),
    se = (0, $.useRef)(null),
    ce = (0, $.useRef)(null),
    le = (0, $.useRef)(null),
    [ue, de] = (0, $.useState)(() => uu([])),
    fe = (0, $.useRef)(null),
    [pe, me] = (0, $.useState)(!1),
    he = (0, $.useRef)(0),
    ge = (0, $.useRef)(null),
    _e = (0, $.useRef)(null),
    ve = (0, $.useRef)(!1),
    ye = (0, $.useRef)(!1),
    be = (0, $.useRef)(!1),
    N = (0, $.useRef)(!1),
    xe = (0, $.useRef)(!1),
    Se = (0, $.useRef)(!1),
    Ce = (0, $.useRef)(!1),
    we = (0, $.useRef)(null),
    [Te] = (0, $.useState)(() =>
      nS({
        rootHost: e,
        dragThresholdPx: 4,
        onPointerModeChange: me,
        onPointerChange: p,
        onClearHover: () => {
          (s(null), l(null));
        },
      }),
    ),
    { comments: Ee, interactionMode: P } = n,
    De = P === `comment` && n.isAnnotationSuspended === !0,
    Oe = n.canUseAnnotationMultiSelect === !0 && S?.anchor.type !== `virtual`,
    F = n.canUseSiteAnnotationApi === !0,
    ke = P === `comment` && !De && S == null && pe,
    I = lf(n.zoomPercent),
    Ae = gs(n.viewportScale),
    je = fd(),
    Me = c_(je),
    Ne = n.canUseTweaks !== !1,
    Pe = new Map(Ee.map((e, t) => [e.id, t + 1])),
    Fe = Ee.filter(gv),
    Ie = mS(e),
    Le = Fe.flatMap((e) => {
      let t = ue.get(e.id),
        n = yv(e, Ie, e.id === O, t?.sourceAnchor === e.anchor ? t.value : null);
      return n == null ? [] : [n];
    }),
    Re = n.activeDesignChange,
    ze = Ee.flatMap((e) => (e.designChange == null ? [] : [e.designChange])),
    Be = Re == null ? ze : [...ze.filter((e) => e.id !== Re.id), Re],
    Ve = n.isOriginalViewEnabled === !0 ? OS : Be.filter((e) => El(e.anchor)),
    He = ns(Ee),
    Ue = Ne && He && n.annotationEditorMode === `design`,
    We = Ve.flatMap((e) => {
      let t = _v(e, Ie);
      return t == null ? [] : [t];
    }),
    Ge = Le.some((e) => [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => !e.isFixed)),
    Ke = Fe.some((e) =>
      [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => e.kind === `element` && e.selector != null),
    ),
    qe = (0, $.useCallback)(
      (n, r, o, c) => {
        D.current?.clear();
        let u = { ...r, anchor: od(n, r.anchor, F, c, t.allowEmbeddedAnnotationDocument) };
        (o != null &&
          ((u.anchor.annotationRequestIncludesPrompt = !!o.initialComment?.trim()),
          (u.anchor.annotationFeatures = [...(u.anchor.annotationFeatures ?? []), `requests`])),
          v != null &&
            (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: v }),
            y(null)));
        let d = Tx(n, u, F ? t.getAnnotationControls?.(n) : void 0);
        return (
          F && a.rememberTarget(d.id, n),
          mS(e).set(d.id, n),
          Qg(u.anchor, d.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: u,
            annotationEditorDefault: eS(document, bS),
            designEditorState: d,
            ...o,
          }),
          (N.current = !1),
          h(!1),
          p(null),
          oe(B_()),
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
          gu(),
          F && $g(u.anchor, t.recordAnnotationFeatureUse, d.annotationControls),
          !0
        );
      },
      [a, t, F, v, e],
    ),
    Je = (0, $.useCallback)(
      (e, n, r = !1) => {
        if (e.anchor.kind !== `text`) return !1;
        let a = F && (r || e_(e.anchor)),
          o = [];
        (a && o.push(`text-containers`), n != null && o.push(`requests`));
        let c = {
          ...e.anchor,
          annotationFeatures: o,
          annotationRequestIncludesPrompt: n == null ? void 0 : !!n.initialComment?.trim(),
        };
        return (
          D.current?.clear(),
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
          oe(B_()),
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
          gu(),
          a && t.recordAnnotationFeatureUse?.(`text-containers`),
          n != null && t.recordAnnotationFeatureUse?.(`requests`, c.annotationRequestIncludesPrompt),
          !0
        );
      },
      [t, F, v],
    ),
    Ye = (0, $.useCallback)(
      (n, r, o = 0) => {
        if (!El(n.anchor)) return;
        let s = r ?? n.anchor,
          c = mS(e),
          l = Ee.find((e) => e.id === n.id) ?? n,
          u = bv(l, s, o),
          d = o === 0,
          f = sd(s, d ? l.id : void 0, c) ?? null;
        (f != null && (d && c.set(l.id, f), u.designChange != null && dx(f, u.designChange.id)),
          v != null &&
            t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: v }));
        let p = cb(lb(u, f, I), f),
          m =
            u.designChange != null && f == null
              ? Ex(u.designChange)
              : f == null || p.anchor.kind !== `element`
                ? void 0
                : Tx(f, p, F ? t.getAnnotationControls?.(f) : void 0, u.designChange);
        (m != null &&
          f != null &&
          (F &&
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
          oe(B_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `edit`, commentId: l.id },
            anchor: iv({ ...u, anchor: p.anchor }, f, c),
          }),
          y(null));
      },
      [a, t, F, Ee, v, e, I],
    ),
    Xe = (0, $.useCallback)(
      (n, r, i) => {
        let a = mS(e),
          o = Ee.find((e) => e.id === n.id) ?? n,
          s = i === 0,
          c = sd(r, s ? o.id : void 0, a) ?? null;
        (c != null && s && a.set(o.id, c), y(o.id), oe(B_()));
        let l = lb(bv(o, r, i), c, I);
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-open-comment-preview`,
          commentId: o.id,
          anchorState: l,
        });
      },
      [t, Ee, e, I],
    ),
    Ze = (0, $.useCallback)(
      (r, o) => {
        let c = nd(r);
        if (c == null) return !1;
        let l = {
            ...o,
            anchor: od(r, o.anchor, F, void 0, t.allowEmbeddedAnnotationDocument),
            cardViewportRect: hS(e, c.rect, { viewportScale: n.viewportScale, zoomFactor: I }),
          },
          u = Tx(r, l, F ? t.getAnnotationControls?.(r) : void 0, void 0, c);
        return (
          F && a.rememberTarget(u.id, r),
          mS(e).set(u.id, r),
          dx(r, u.id),
          Qg(l.anchor, u.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-design-editor`,
            anchorState: l,
            designEditorState: u,
          }),
          oe(B_()),
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
          F && $g(l.anchor, t.recordAnnotationFeatureUse, u.annotationControls),
          !0
        );
      },
      [a, t, F, e, n.viewportScale, I],
    ),
    Qe = (0, $.useEffectEvent)((e, t, n, r) => {
      if (S != null) return !1;
      if (e instanceof Range) {
        let t = su(e);
        return t != null && Je(t, n);
      }
      return qe(e, sb(e, t.x, t.y), n, r);
    });
  (0, $.useEffect)(() => t.subscribeToSiteAnnotationRequests?.((e, t, n, r) => Qe(e, t, n, r)), [t]);
  let $e = (0, $.useCallback)(
      (e) => {
        (y((t) => (t === e ? null : t)),
          t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }));
      },
      [t],
    ),
    et = (0, $.useEffectEvent)((e, n) => {
      if (S != null) {
        D.current?.clear();
        return;
      }
      v != null && $e(v);
      let r = ub(e, I),
        o = t.getAnnotationControls?.(n),
        c = o?.controls.length ? Tx(n, r, o) : void 0;
      (c != null && a.rememberTarget(c.id, n),
        Qg(e, c?.annotationControls),
        (N.current = !1),
        h(!1),
        p(null),
        s(null),
        l(null),
        gu(),
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
        F && $g(e, t.recordAnnotationFeatureUse, c?.annotationControls));
    }),
    tt = (0, $.useEffectEvent)((t, n) => {
      if (S != null || P !== `comment`) return;
      let r = cl(t.x, t.y, F, e);
      r != null && (n ? qe(r.element, sb(r.element, t.x, t.y, r.usesSelectableContainer)) : s(fS(r.element)));
    });
  ((0, $.useEffect)(() => {
    let n = g_({
      allowEmbeddedAnnotationDocument: t.allowEmbeddedAnnotationDocument,
      rootHost: e,
      onClearDomHover: () => {
        (s(null), l(null));
      },
      onFeedback: ee,
      onSelected: et,
      onFallback: tt,
    });
    return (
      (D.current = n),
      () => {
        (n.dispose(), (D.current = null));
      }
    );
  }, [t.allowEmbeddedAnnotationDocument, e]),
    (0, $.useEffect)(() => {
      D.current?.setEnabled(F && P === `comment` && !De && !n.isAgentControllingBrowser);
    }, [F, P, De, n.isAgentControllingBrowser]),
    (0, $.useEffect)(() => {
      S?.anchor.type !== `virtual` && D.current?.clear();
    }, [S]));
  let nt = (0, $.useEffectEvent)((e) => {
      (D.current?.setEnabled(
        e.canUseSiteAnnotationApi === !0 &&
          e.interactionMode === `comment` &&
          e.isAnnotationSuspended !== !0 &&
          !e.isAgentControllingBrowser,
      ),
        n.zoomPercent !== e.zoomPercent && D.current?.invalidate());
    }),
    rt = (0, $.useCallback)(
      (n) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let r = ce.current;
        if (((ce.current = null), r != null && Date.now() - r.capturedAt <= ES))
          return D.current?.select(r.viewportPoint) ? !0 : qe(r.element, r.anchorState);
        if (D.current?.select(n)) return !0;
        let i = cl(n.x, n.y, F, e);
        if (i == null) return !1;
        let a = sb(i.element, n.x, n.y, i.usesSelectableContainer);
        return qe(i.element, a);
      },
      [S, t, F, qe, e],
    ),
    it = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            rt(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [rt],
    ),
    at = (0, $.useCallback)(
      (e) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        ce.current = null;
        let n = le.current;
        le.current = null;
        let r = (n?.anchor.kind === `text` ? n : null) ?? ou();
        return r == null ? (gu(), e.fallbackViewportPoint != null && rt(e.fallbackViewportPoint)) : Je(r);
      },
      [S, t, Je, rt],
    ),
    ot = (0, $.useCallback)((e) => {
      le.current = ou(e);
    }, []),
    st = (0, $.useCallback)(
      (n, r = `design`) => {
        if (S != null) return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let i = ce.current;
        if (((ce.current = null), i != null && Date.now() - i.capturedAt <= ES && i.designElement != null)) {
          let e = i.designElement;
          return Ze(e, e === i.element ? i.anchorState : sb(e, n.x, n.y));
        }
        let a = cl(n.x, n.y, F, e, r);
        if (a == null) return !1;
        let o = sb(a.element, n.x, n.y, a.usesSelectableContainer);
        return Ze(a.element, o);
      },
      [S, t, F, Ze, e],
    ),
    ct = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            st(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [st],
    ),
    lt = (0, $.useCallback)(() => {
      (_e.current != null && window.cancelAnimationFrame(_e.current),
        (_e.current = window.requestAnimationFrame(() => {
          ((_e.current = null), oe(B_()));
        })));
    }, []),
    ut = (0, $.useCallback)(
      (e, r, i) => {
        if (e.target.mode !== `create` || e.anchor.type === `text`) return;
        if (r == null) {
          (t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (N.current = !1),
            h(!1),
            p(null),
            lc(),
            s(null),
            l(null),
            d(null));
          return;
        }
        if (!Oe && r.additional.length > 0) return;
        let a = { ...e, anchor: dv(e.anchor, r, i) };
        (t.sendMessageToHost({
          type: `browser-sidebar-runtime-update-anchor`,
          target: a.target,
          anchorState: db(a, I, n.viewportScale),
        }),
          oe(B_()),
          d(null),
          C(a));
      },
      [t, Oe, n.viewportScale, I],
    ),
    dt = (0, $.useEffectEvent)((e) => {
      if (!Oe || S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let t = uv(S.anchor),
        n = [t.primary, ...t.additional][e];
      n != null && ut(S, el(t, n, !0));
    }),
    ft = (0, $.useEffectEvent)((e = v) => {
      e != null &&
        (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }),
        y(null));
    }),
    pt = (0, $.useEffectEvent)((e) => {
      C((t) => {
        if (t == null) return t;
        let n = t.target;
        return n.mode === `design` || !(`commentId` in n) || e.some((e) => e.id === n.commentId) ? t : null;
      });
    }),
    mt = (0, $.useEffectEvent)((e) => {
      (e != null &&
        t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }),
        (N.current = !1),
        h(!1),
        p(null),
        lc(),
        (le.current = null),
        s(null),
        l(null),
        d(null),
        y(null),
        (Ce.current = !1),
        x(null),
        C(null),
        (he.current += 1),
        (xe.current = !1),
        (Se.current = !1),
        (fe.current = null),
        ie(null));
    }),
    ht = (0, $.useEffectEvent)((e) => {
      (Ye(e), x(null));
    }),
    gt = (0, $.useEffectEvent)((e, t, n, r = F) => {
      let i = Te.updatePointer(
        e,
        t,
        r,
        (n ?? (!g && !N.current)) && (e == null || !D.current?.hasSurfaceAtPoint(e)),
      );
      return (i && D.current?.clearHover(), i);
    }),
    _t = (0, $.useEffectEvent)((t) => {
      if (
        t.interactionMode === `comment` &&
        t.isAnnotationSuspended !== !0 &&
        (P !== `comment` || De || (t.canUseSiteAnnotationApi === !0) !== F) &&
        S == null
      ) {
        let n = M.current;
        if (gt(n, !0, t.isDesignModifierPressed !== !0, t.canUseSiteAnnotationApi === !0)) return;
        if (n != null && (t.canUseTweaks === !1 || t.isDesignModifierPressed !== !0) && D.current?.hover(n)) {
          (p(n), s(null), l(null));
          return;
        }
        let r =
            t.canUseTweaks !== !1 &&
            (t.isDesignModifierPressed === !0 || (ns(t.comments) && t.annotationEditorMode === `design`)),
          i = n == null ? null : (cl(n.x, n.y, t.canUseSiteAnnotationApi === !0, e)?.element ?? null);
        (p(n), s(fS(i, r)));
      }
    }),
    vt = (0, $.useEffectEvent)((t) => {
      C(ov(t, mS(e), i.current));
    }),
    yt = (0, $.useEffectEvent)((t) => {
      let n = Oe && t;
      if (((N.current = n), h(n), !n)) {
        (p(null), s(null), l(null), lc());
        return;
      }
      if (S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let r = M.current;
      if (r == null || Ce.current) return;
      fl(r, e);
      let i = ml(r, e, F)?.element ?? null;
      if (i == null) {
        (p(null), s(null), l(null), lc());
        return;
      }
      (sc(i.ownerDocument, bl), p(r), l({ anchor: sb(i, r.x, r.y).anchor, liveElement: i }), s(fS(i)));
    });
  ((0, $.useEffect)(() => {
    let e = t.subscribeToHostMessages((e) => {
      switch (e.type) {
        case `browser-sidebar-runtime-sync`:
          ((i.current = e.comments),
            a.sync(e),
            nt(e),
            _t(e),
            e.canUseSiteAnnotationApi !== !0 &&
              Te.usesTextContainer &&
              (Te.cancel() && (xe.current = !0), me(!1)),
            e.interactionMode !== `comment` && (ye.current = !1),
            (e.isAnnotationSuspended === !0 || e.areAnnotationMarkersVisible === !1) && ft(),
            (e.interactionMode !== `comment` || e.isAnnotationSuspended === !0) &&
              (Te.dispose(),
              me(!1),
              (N.current = !1),
              h(!1),
              p(null),
              s(null),
              l(null),
              d(null),
              lc(),
              (xe.current = !1),
              (Se.current = !1),
              (he.current += 1),
              (fe.current = null),
              ie(null)),
            e.canUseAnnotationMultiSelect !== !0 && d(null),
            r(
              (t) => (
                t.zoomPercent !== e.zoomPercent && lt(),
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
            oe(B_()),
            _(e.interactionMode === `comment` && e.canUseTweaks !== !1 && e.isDesignModifierPressed === !0),
            (e.interactionMode !== `comment` ||
              e.isAnnotationSuspended === !0 ||
              e.isTweaksEditorOpen !== !0) &&
              (re(null), A(!1)),
            te((t) => (t != null && !e.comments.some((e) => e.id === t) ? null : t)));
          return;
        case `browser-sidebar-runtime-prepare-comment-screenshot`:
          te(e.commentId);
          return;
        case `browser-sidebar-runtime-clear-comment-screenshot`:
          te(null);
          return;
        case `browser-sidebar-runtime-capture-text-selection`:
          ot();
          return;
        case `browser-sidebar-runtime-select-comment`:
          x(e.commentId);
          return;
        case `browser-sidebar-runtime-close-editor`:
          (D.current?.clear(),
            lc(),
            (0, _S.flushSync)(() => {
              ((N.current = !1),
                h(!1),
                p(null),
                (he.current += 1),
                (xe.current = !1),
                (Se.current = !1),
                re(null),
                A(!1),
                te(null),
                s(null),
                l(null),
                d(null),
                (fe.current = null),
                ie(null),
                C((t) => (t == null || e.target == null || ls(t.target, e.target) ? null : t)));
            }));
          return;
        case `browser-sidebar-runtime-design-scrub-changed`:
          (re(e.property), A(e.isEditingControl));
          return;
        case `browser-sidebar-runtime-create-comment-at-point`:
          (d(null), rt(e.viewportPoint) || it(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-create-comment-from-selection`:
          (d(null), at(e));
          return;
        case `browser-sidebar-runtime-open-design-editor-at-point`:
          (d(null), st(e.viewportPoint) || ct(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-annotation-selection-modifier-state`:
          yt(e.pressed);
          return;
        case `browser-sidebar-runtime-annotation-selection-hover-state`:
          d(Oe ? e.selectionIndex : null);
          return;
        case `browser-sidebar-runtime-remove-annotation-selection`:
          if (!Oe) return;
          dt(e.selectionIndex);
          return;
        case `browser-sidebar-runtime-restore-editor`:
          if (!El(e.anchorState.anchor)) return;
          (D.current?.clear(),
            (N.current = !1),
            h(!1),
            (M.current = null),
            p(null),
            lc(),
            s(null),
            l(null),
            d(null),
            vt(e));
          return;
      }
    });
    return () => {
      (_e.current != null && (window.cancelAnimationFrame(_e.current), (_e.current = null)), e());
    };
  }, [a, t, Oe, ot, st, lt, it, ct, Te, e, rt, at]),
    (0, $.useEffect)(() => {
      let t = mS(e);
      (t.forEach((e, n) => {
        ((!Ee.some((e) => e.id === n) &&
          n !== Re?.id &&
          (S?.anchor.type !== `element` || S.anchor.element !== e)) ||
          !e.isConnected) &&
          t.delete(n);
      }),
        v != null && !Fe.some((e) => e.id === v) && ft(v),
        pt(Fe));
    }, [Re, S, Ee, v, e, Fe]),
    (0, $.useEffect)(() => {
      P === `browse` && mt(v);
    }, [v, P]),
    (0, $.useEffect)(() => () => Te.dispose(), [Te]),
    (0, $.useLayoutEffect)(() => {
      if (!(P !== `comment` || De || S != null)) return rS(e, M.current, ke, F);
    }, [S, F, P, De, e, ke]),
    (0, $.useEffect)(() => {
      if (b == null) return;
      let e = Ee.find((e) => e.id === b) ?? null;
      e != null && ht(e);
    }, [Ee, b]));
  let bt = (0, $.useEffectEvent)((e) => {
      P !== `comment` ||
        (De === e && ye.current === e) ||
        ((ye.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-annotation-suspension`, suspended: e }));
    }),
    xt = (0, $.useEffectEvent)((e) => {
      e.isTrusted && e.code === `Space` && e.type === `keydown` && !e.repeat && (be.current = !1);
      let t = be.current && e.code === `Space`;
      if (P !== `comment` && !t) return;
      let n = y_(e, t || De || ye.current, { preserveTyping: e.composedPath().some((e) => B(e) && dl(e)) });
      n != null && ((be.current = n), bt(n));
    });
  ((0, $.useEffect)(
    () =>
      oc((e, t) => {
        let n = (e) => {
            e.isTrusted && (M.current = Nc(t, { x: e.clientX, y: e.clientY }));
          },
          r = () => {
            ((M.current = null), document.hasFocus() || ((ye.current = !1), (be.current = !1)));
          };
        return (
          t.addEventListener(`keydown`, xt, !0),
          t.addEventListener(`keyup`, xt, !0),
          t.addEventListener(`mousemove`, n, !0),
          t.addEventListener(`blur`, r),
          () => {
            (t.removeEventListener(`keydown`, xt, !0),
              t.removeEventListener(`keyup`, xt, !0),
              t.removeEventListener(`mousemove`, n, !0),
              t.removeEventListener(`blur`, r));
          }
        );
      }),
    [],
  ),
    (0, $.useEffect)(() => {
      if (De) return;
      let n = () => {
          (gt(null, !1), D.current?.clearHover(), (M.current = null), p(null), s(null), l(null));
        },
        r = (e, t) => Ne && (t || (Ue && !D.current?.hasSurfaceAtPoint(e))),
        a = (e) => {
          let n = Oe && e;
          (yt(n),
            S?.target.mode === `create` &&
              S.anchor.type !== `text` &&
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: n,
              }));
        },
        o = (t, i) => {
          _(Ne && i.altKey);
          let o = S?.target.mode === `create` && S.anchor.type !== `text` && gl(i),
            c = o && (i.shiftKey || N.current);
          if (!i.isTrusted || (hl(i, e) && !o)) {
            n();
            return;
          }
          let u = Nc(t, { x: i.clientX, y: i.clientY });
          if (((M.current = u), P !== `comment`)) return;
          let d = se.current;
          if (((se.current = u), o && !c)) {
            (p(null), s(null), l(null), lc());
            return;
          }
          Wc(i, { preventDefault: !1 });
          let f = d == null || d.x !== u.x || d.y !== u.y;
          Oe && i.shiftKey && !N.current && f && a(!0);
          let m = Oe && S?.target.mode === `create` && S.anchor.type !== `text` && N.current;
          if (S != null && !m) {
            (p(null), s(null), l(null), lc());
            return;
          }
          if (fe.current != null) {
            (p(u), s(null), l(null));
            return;
          }
          if (gt(u, S == null, !i.altKey && !i.shiftKey && !i.metaKey && !i.ctrlKey)) return;
          if ((sc(t.document, bl), fl(u, e), p(u), Ce.current)) {
            (s(null), l(null));
            return;
          }
          let h = r(u, i.altKey);
          if (!h && S == null && D.current?.hover(u)) {
            (s(null), l(null));
            return;
          }
          D.current?.clearHover();
          let g = h ? (cl(u.x, u.y, F, e)?.element ?? null) : (pl(u, e, i, F)?.element ?? null);
          if (!g) {
            (s(null), l(null));
            return;
          }
          (l({ anchor: sb(g, u.x, u.y).anchor, liveElement: g }), s(fS(g, h)));
        },
        c = (t, r, i) => {
          i.isTrusted && P === `comment` && S == null && !hl(i, e) && Wc(i, { preventDefault: !1 });
          let a = i.relatedTarget;
          if (a instanceof (t.defaultView?.Node ?? Node) && t.documentElement?.contains(a)) {
            ec(a) && (Te.cancel() && (xe.current = !0), n());
            return;
          }
          let o = Nc(r, { x: i.clientX, y: i.clientY });
          (a != null && gS(o)) || n();
        },
        u = () => {
          (Te.isDragging && document.hasFocus()) || (Te.cancel() && (xe.current = !0), _(!1), n(), a(!1));
        },
        d = ({ currentDragSelection: e, suppressFollowUpClick: r }) => {
          if (!e.isDraggingRegion || e.rect == null) return !1;
          he.current += 1;
          let a = he.current;
          (D.current?.clear(), (xe.current = r), (Se.current = r));
          let o = D_(e.rect, e.current, { framePath: e.framePath, frameUrl: e.frameUrl });
          if (((fe.current = null), ie(e), Oe && S?.target.mode === `create` && S.anchor.type !== `text`))
            return (ut(S, el(uv(S.anchor), { anchor: o, liveElement: null }, !0)), ie(null), n(), !0);
          let s = ub(o, I);
          return (
            window.requestAnimationFrame(() => {
              he.current === a &&
                (t.sendMessageToHost({
                  type: `browser-sidebar-runtime-open-editor`,
                  target: { mode: `create` },
                  anchorState: s,
                  wantsScreenshot: !0,
                }),
                N.current &&
                  t.sendMessageToHost({
                    type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                    pressed: !0,
                  }),
                oe(B_()),
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
                ie(null),
                n());
            }),
            !0
          );
        },
        f = (t, n) => {
          ((ce.current = null), (le.current = null));
          let i = Oe && S?.target.mode === `create` && S.anchor.type !== `text` && (n.shiftKey || N.current);
          if (
            !n.isTrusted ||
            !n.isPrimary ||
            n.button !== 0 ||
            hl(n, e) ||
            P !== `comment` ||
            ((xe.current = !1), (Se.current = !1), S != null && !i)
          )
            return;
          (S ?? D.current?.clear(),
            Oe &&
              n.shiftKey &&
              !N.current &&
              (S?.target.mode === `create` && S.anchor.type !== `text` ? a(!0) : ((N.current = !0), h(!0))));
          let o = Nc(t, { x: n.clientX, y: n.clientY });
          if (
            Te.handlePointerDown(
              t,
              n,
              o,
              S == null,
              F,
              !n.altKey && !n.shiftKey && !n.metaKey && !n.ctrlKey && !D.current?.hasSurfaceAtPoint(o),
            )
          ) {
            S ?? (M.current = o);
            return;
          }
          if ((me(!1), r(o, n.altKey))) {
            Wc(n);
            return;
          }
          if (
            fe.current != null &&
            d({ currentDragSelection: x_(fe.current, o), suppressFollowUpClick: !0 })
          ) {
            Wc(n);
            return;
          }
          ((he.current += 1), gu(), Wc(n));
          let s = Ys(t) ?? [],
            c = {
              pointerId: n.pointerId,
              start: o,
              current: o,
              rect: null,
              isDraggingRegion: !1,
              framePath: s,
              frameUrl: pd(t, s),
            };
          ((fe.current = c), ie(c));
        },
        m = (t, n) => {
          if (!n.isTrusted || hl(n, e)) {
            ((ce.current = null), (le.current = null));
            return;
          }
          let r = Nc(t, { x: n.clientX, y: n.clientY });
          ot(t);
          let i = ll(n, F) ?? cl(r.x, r.y, F, e);
          if (i == null) {
            ce.current = null;
            return;
          }
          (P === `comment` && Wc(n),
            (ce.current = {
              anchorState: sb(i.element, r.x, r.y, i.usesSelectableContainer),
              capturedAt: Date.now(),
              designElement: ll(n, !1, `design`)?.element ?? null,
              element: i.element,
              viewportPoint: r,
            }));
        },
        g = (e, t) => {
          if (!t.isTrusted || Te.handlePointerMove(e, t)) return;
          let n = fe.current;
          if (n == null || t.pointerId !== n.pointerId) return;
          Wc(t);
          let r = Nc(e, { x: t.clientX, y: t.clientY }),
            i = x_(n, r);
          ((fe.current = i), ie(i), (M.current = r), p(r), s(null), l(null));
        },
        v = (e, n) => {
          if (
            Te.handlePointerUp(n, (e, t) => {
              ((xe.current = e != null || t), e != null && Je(e, void 0, t));
            })
          )
            return;
          let i = fe.current;
          if (i == null || n.pointerId !== i.pointerId) return;
          let a = x_(i, Nc(e, { x: n.clientX, y: n.clientY }));
          if (
            ((fe.current = null),
            ie(null),
            n.isTrusted && (Wc(n), !d({ currentDragSelection: a, suppressFollowUpClick: !0 }) && S == null))
          ) {
            if (((xe.current = !0), (Se.current = !1), r(a.current, n.altKey))) {
              st(a.current, `annotation`);
              return;
            }
            rt(a.current) &&
              Oe &&
              n.shiftKey &&
              ((N.current = !0),
              h(!0),
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: !0,
              }));
          }
        },
        y = (e) => {
          (Te.handlePointerCancel(e) && (xe.current = !0),
            e.pointerId === fe.current?.pointerId && ((fe.current = null), ie(null), n()));
        },
        b = (e) => {
          (D.current?.clear(),
            t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (N.current = !1),
            h(!1),
            p(null),
            lc(),
            s(null),
            l(null));
        },
        x = (e) => {
          if (e.key === `Escape` && e.isTrusted) {
            if ((D.current?.clear(), Te.cancel())) {
              ((xe.current = !0), Wc(e));
              return;
            }
            if (fe.current != null) {
              (Wc(e), (xe.current = !0), (Se.current = !1), (fe.current = null), ie(null), n());
              return;
            }
            if (S?.target.mode === `create` && S.anchor.type !== `text`) {
              (Wc(e), b(S));
              return;
            }
            S == null &&
              P === `comment` &&
              (Wc(e), t.sendMessageToHost({ type: `browser-sidebar-runtime-exit-comment-mode` }));
          }
        },
        w = (t) => {
          let n = S?.target.mode === `create`;
          !t.isTrusted ||
            P !== `comment` ||
            (S != null && !n) ||
            hl(t, e) ||
            Wc(t, { preventDefault: !Te.isDragging });
        },
        T = (n, i) => {
          if (xe.current && ((xe.current = !1), (Se.current = !1), P === `comment`)) {
            Wc(i);
            return;
          }
          let o = Oe && (i.shiftKey || N.current),
            c = S?.target.mode === `create` && S.anchor.type !== `text` && o && gl(i);
          if (!i.isTrusted || (hl(i, e) && !c) || P !== `comment`) return;
          if (S != null) {
            if ((Wc(i), S.target.mode === `create` && !o)) {
              b(S);
              return;
            }
            if (S.target.mode === `create` && S.anchor.type !== `text`) {
              a(o);
              let r = Nc(n, { x: i.clientX, y: i.clientY });
              if (D.current?.hasSurfaceAtPoint(r)) return;
              let c = pl(r, e, i, F);
              if (c == null) return;
              let u = sb(c.element, r.x, r.y, c.usesSelectableContainer),
                d = el(
                  uv(S.anchor),
                  {
                    anchor: od(c.element, u.anchor, F, void 0, t.allowEmbeddedAnnotationDocument),
                    liveElement: c.element,
                  },
                  o,
                );
              (ut(S, d, o ? void 0 : u),
                d != null &&
                  ((M.current = r), p(r), s(fS(c.element)), l({ anchor: u.anchor, liveElement: c.element })));
            }
            return;
          }
          let u = Nc(n, { x: i.clientX, y: i.clientY }),
            f = fe.current;
          if (f != null) {
            let e = x_(f, u);
            if (((fe.current = null), ie(null), d({ currentDragSelection: e, suppressFollowUpClick: !1 }))) {
              Wc(i);
              return;
            }
          }
          if ((Wc(i), r(u, i.altKey))) {
            let t = cl(u.x, u.y, F, e);
            t != null && Ze(t.element, sb(t.element, u.x, u.y, t.usesSelectableContainer));
            return;
          }
          rt(u) &&
            Oe &&
            i.shiftKey &&
            ((N.current = !0),
            h(!0),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
              pressed: !0,
            }));
        },
        E = (t, n) => {
          if (
            !n.isTrusted ||
            n.ctrlKey ||
            P !== `comment` ||
            (S != null && (S.target.mode !== `create` || S.anchor.type === `text`)) ||
            hl(n, e)
          )
            return;
          let r = Nc(t, { x: n.clientX, y: n.clientY });
          ex(ul(r.x, r.y, e), tx(n, t)) && Wc(n);
        },
        ee = !1,
        O = oc((e, t) => {
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
              E(t, e);
            };
          (e.addEventListener(`pointerdown`, n, !0),
            e.addEventListener(`pointermove`, r, !0),
            e.addEventListener(`pointerup`, i, !0));
          for (let t of wS) e.addEventListener(t, w, !0);
          (e.addEventListener(`pointercancel`, y, !0),
            e.addEventListener(`mousemove`, s, !0),
            e.addEventListener(`mouseout`, l, !0));
          let b = (e) => {
              (e.key === `Alt` && _(!1),
                !e.shiftKey && N.current && a(!1),
                P === `comment` &&
                  S == null &&
                  [`Alt`, `Shift`, `Meta`, `Control`].includes(e.key) &&
                  gt(M.current, !0, !e.altKey && !e.shiftKey && !e.metaKey && !e.ctrlKey));
            },
            C = (e) => {
              (e.key === `Alt` && _(Ne),
                P === `comment` &&
                  S == null &&
                  [`Alt`, `Shift`, `Meta`, `Control`].includes(e.key) &&
                  gt(M.current, !0, !1),
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
              (ee || Te.disposeFrame(t),
                e.removeEventListener(`pointerdown`, n, !0),
                e.removeEventListener(`pointermove`, r, !0),
                e.removeEventListener(`pointerup`, i, !0));
              for (let t of wS) e.removeEventListener(t, w, !0);
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
        ((ee = !0), O());
      };
    }, [S, t, Oe, F, Ne, ut, ot, P, De, Ue, Te, e, st, Ze, Je, n.viewportScale, Me, rt, I]),
    (0, $.useEffect)(() => {
      if (P !== `comment` || De || S != null) return;
      let t = () => {
          if (gt(M.current, !0)) return;
          if (M.current != null && D.current?.hover(M.current)) {
            (s(null), l(null));
            return;
          }
          let t = pS(M.current, e, F);
          (s(fS(t)), l(null), t != null && oe(B_()));
        },
        n = () => {
          (we.current != null && window.clearTimeout(we.current),
            (Ce.current = !0),
            s(null),
            l(null),
            oe(B_()),
            (we.current = window.setTimeout(() => {
              ((we.current = null), (Ce.current = !1), t());
            }, TS)));
        },
        r = oc((e, r) => {
          (r.addEventListener(`resize`, t), e.addEventListener(`scroll`, n, !0));
          let i = F ? Wg(e, () => (0, _S.flushSync)(t)) : void 0;
          return () => {
            (i?.(), r.removeEventListener(`resize`, t), e.removeEventListener(`scroll`, n, !0));
          };
        });
      return () => {
        (r(),
          (Ce.current = !1),
          we.current != null && (window.clearTimeout(we.current), (we.current = null)));
      };
    }, [S, F, P, De, e, Me]),
    (0, $.useLayoutEffect)(() => {
      if ((S == null && v == null) || S?.anchor.type === `virtual`) return;
      let r = () => {
          let r = v == null ? null : { mode: `edit`, commentId: v },
            i = S?.target ?? r;
          if (i == null) return;
          let a,
            o = mS(e);
          if (S == null) {
            let e = Ee.find((e) => e.id === v) ?? null;
            if (e == null) return;
            let t = vv(e, o) ?? null;
            (t != null && o.set(e.id, t), (a = lb(e, t, I)));
          } else
            S.target.mode === `create` || S.target.mode === `design`
              ? (a = db(S, I, n.viewportScale))
              : ((a = fb(S, Ee, o, I)), a != null && (a = cb(a, sd(a.anchor, void 0, o))));
          if (a == null && S == null) return;
          t.sendMessageToHost({ type: `browser-sidebar-runtime-update-anchor`, target: i, anchorState: a });
          let s = S?.anchor.type === `element` ? lv(S.anchor, o) : null;
          if (
            (T(s == null ? null : { element: s, snapshot: nd(s) }),
            oe(B_()),
            S?.anchor.type === `text` && a?.anchor.kind === `text`)
          ) {
            let e = a.anchor;
            C((t) =>
              t?.anchor.type !== `text` || As(t.anchor.value, e)
                ? t
                : { ...t, anchor: { ...t.anchor, value: e } },
            );
          }
          if (a == null || S == null) {
            if (S == null) return;
            C((e) =>
              e == null || !ls(e.target, S.target) || e.anchor.type !== `element` || e.anchor.element == null
                ? e
                : { ...e, anchor: { ...e.anchor, element: null } },
            );
            return;
          }
          let c = S.target;
          if (c.mode !== `edit`) return;
          let l = lv(S.anchor, o);
          C((e) =>
            e == null || !ls(e.target, c) || e.anchor.type !== `element` || e.anchor.element === l
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
      if ((r(), P !== `comment` || De)) return;
      let o =
          S?.anchor.type === `element`
            ? [S.anchor.element, ...S.anchor.additionalSelections.map((e) => e.liveElement)]
            : [],
        c = rb(e, a, r, i, o.every((e) => e != null) ? o : []),
        u = S?.anchor.type === `text` ? du([S.anchor.value], r) : null;
      return () => {
        (c(), u?.());
      };
    }, [S, t, Ee, v, P, De, e, n.viewportScale, I]),
    (0, $.useEffect)(() => {
      let e = P === `comment` && S == null && Ne && g;
      ve.current !== e &&
        ((ve.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-design-modifier-state`, pressed: e }));
    }, [S, t, Ne, P, g]),
    (0, $.useEffect)(() => () => a.clear(), [a]));
  let St = (0, $.useEffectEvent)(() => ux(P === `comment` ? Ve : OS, Ie));
  ((0, $.useEffect)(() => St(), [Re, Ee, P, Ie, n.isOriginalViewEnabled]),
    (0, $.useLayoutEffect)(() => {
      if (S != null || Fe.length === 0 || (P !== `comment` && O == null)) return;
      let t = Ee.filter((e) => e.anchor.kind === `text` && gv(e)),
        n = () => {
          de((e) => uu(t, e));
        },
        r = null,
        i = () => {
          r ??= window.requestAnimationFrame(() => {
            ((r = null), n());
          });
        },
        a = () => {
          (n(),
            (0, _S.flushSync)(() => {
              oe(B_());
            }));
        },
        o = () => {
          (i(), oe(B_()));
        },
        s = () => o(),
        c = Ee.flatMap((e) => (gv(e) ? [e.anchor, ...(e.additionalAnchors ?? [])] : []));
      (window.addEventListener(`resize`, a), Ge && document.addEventListener(`scroll`, s, !0));
      let l = Ke ? ib(document, e, lt) : null,
        u = Ac(window, c, s),
        d = oc((t, n) => {
          if (n === window) return () => {};
          let r = () => o();
          (n.addEventListener(`resize`, a),
            n.addEventListener(`scroll`, r),
            Ge && t.addEventListener(`scroll`, r, !0));
          let i = Ac(n, c, r),
            s = Ke ? ib(t, e, lt) : null;
          return () => {
            (n.removeEventListener(`resize`, a),
              n.removeEventListener(`scroll`, r),
              Ge && t.removeEventListener(`scroll`, r, !0),
              i(),
              s?.());
          };
        });
      i();
      let f = du(
        t.flatMap((e) => (e.anchor.kind === `text` ? [e.anchor] : [])),
        n,
      );
      return () => {
        (window.removeEventListener(`resize`, a),
          Ge && document.removeEventListener(`scroll`, s, !0),
          l?.(),
          u(),
          d(),
          r != null && window.cancelAnimationFrame(r),
          f());
      };
    }, [S, O, Ee, Ge, Ke, P, lt, e, Fe.length]));
  let Ct = P === `comment` && !De && n.isOriginalViewEnabled !== !0,
    wt = P === `comment` && !De && !ke && (S == null || S.target.mode === `create`);
  ((0, $.useLayoutEffect)(() => {
    if (ke) return n_();
  }, [ke]),
    (0, $.useLayoutEffect)(() => {
      let e = document.getElementById(bl);
      if (e instanceof HTMLDivElement)
        return (
          (e.style.pointerEvents = wt ? `auto` : `none`),
          () => {
            e.style.pointerEvents = `none`;
          }
        );
    }, [e, wt]));
  let {
    screenshotCaptureId: Tt,
    isScreenshotCaptureActive: Et,
    activeCreateAnnotationSelections: Dt,
    linkedAnnotationSelectionIndex: Ot,
    visibleMarkerComments: kt,
    spreadMarkerPoints: At,
    screenshotMarkerViewportPoint: jt,
    shouldSkipScreenshotCapture: Mt,
    hoveredPreviewComment: Nt,
    regionCommentAnchors: Pt,
    overlayTextHighlightRects: Ft,
    highlightRect: It,
    isPageAnnotationHighlight: Lt,
    highlightClassName: Rt,
    highlightBorderRadius: zt,
    additionalSelectionHighlights: Bt,
    screenshotAnnotationViewportRect: Vt,
    activeDesignScrubItemOverlays: Ht,
    activeCreateMarkerPoint: Ut,
    activeCreateCommentNumber: Wt,
    textHighlightTarget: Gt,
  } = mb({
    comments: Ee,
    activeDesignChange: Re,
    areAnnotationMarkersVisible: n.areAnnotationMarkersVisible,
    activeEditor: S,
    dragSelection: j,
    commentScreenshotCommentId: O,
    renderedVisibleComments: Le,
    renderedVisibleDesignChanges: We,
    visibleComments: Fe,
    commentNumbersById: Pe,
    renderedLiveCommentElements: Ie,
    currentPageUrl: je,
    viewportSnapshot: ae,
    zoomFactor: I,
    canUseAnnotationMultiSelect: Oe,
    hoveredEditorAnnotationSelectionIndex: u,
    hoveredCommentId: v,
    shouldShowSavedCommentMarks: Ct,
    isAnnotationSuspended: De,
    activeElementSnapshot: w,
    virtualFeedback: E,
    hoveredElementSnapshot: o,
    activeDesignScrubProperty: ne,
  });
  (0, $.useLayoutEffect)(() => (Gt == null ? void 0 : pu(Gt)), [Gt]);
  let Kt = Me && !Et && S == null && j == null && Nt == null ? o : null,
    qt = !Et && S?.target.mode === `create` && S.anchor.type !== `text` ? o : null,
    Jt = m && qt != null && c != null && Dt.some((e) => tl(e, c)),
    Yt = m ? `add` : `comment`;
  ke && (Yt = `text`);
  let Xt = Z.hotspotByMode[Yt === `add` ? `add` : `comment`],
    Zt =
      I === 1
        ? {}
        : {
            height: `${I * 100}vh`,
            transform: `scale(${1 / I})`,
            transformOrigin: `top left`,
            width: `${I * 100}vw`,
          },
    Qt = {
      ...Hb,
      ...Zt,
      [CS]: String(Ae),
      "--browser-sidebar-draft-marker-size": `${Ks * Ae}px`,
      "--browser-sidebar-marker-label-font-size": `${11 * Ae}px`,
      "--browser-sidebar-metadata-column-gap": `${12 * Ae}px`,
      "--browser-sidebar-metadata-height": `${xS * Ae}px`,
      "--browser-sidebar-metadata-padding-x": `${10 * Ae}px`,
      "--browser-sidebar-metadata-padding-y": `${8 * Ae}px`,
      "--browser-sidebar-metadata-radius": `${12 * Ae}px`,
      "--browser-sidebar-metadata-row-gap": `${3 * Ae}px`,
      "--browser-sidebar-overlay-font-size": `${13 * Ae}px`,
      "--browser-sidebar-saved-marker-size": `${Ks * Ae}px`,
    };
  P === `comment` && !De && S == null && ((Qt.cursor = `none`), ke || (Qt.pointerEvents = `auto`));
  let $t = (0, $.useEffectEvent)((e) => {
    t.sendMessageToHost({
      type: `browser-sidebar-runtime-comment-screenshot-ready`,
      commentId: e,
      annotationViewportRect: Vt,
      markerViewportPoint: jt,
      ...(Mt ? { skipScreenshotCapture: !0 } : {}),
    });
  });
  (0, $.useEffect)(() => {
    if (Tt == null || O == null) {
      ge.current = null;
      return;
    }
    if (ge.current === Tt) return;
    ge.current = Tt;
    let e = window.requestAnimationFrame(() => {
      $t(Tt);
    });
    return () => {
      window.cancelAnimationFrame(e);
    };
  }, [O, Tt]);
  let en = (0, yS.jsxs)(yS.Fragment, {
    children: [
      wt ? (0, yS.jsx)(Zb, {}) : null,
      Pt.map(({ anchor: e, key: t }) => {
        let n = dd(e);
        if (n == null) return null;
        let r = T_(e, n);
        return r == null
          ? null
          : (0, yS.jsx)(`div`, { className: L_(e, n, ae.width, ae.height), style: R_(r, I) }, t);
      }),
      (0, yS.jsx)(Kb, {
        additionalHighlights: Bt.filter((e) => !e.isPageAnnotation),
        highlightBorderRadius: zt,
        highlightClassName: Rt,
        highlightRect: Lt ? null : It,
        hoverSnapshot: qt,
        isRemoveHover: Jt,
        linkedSelectionIndex: Ot,
        viewportHeight: ae.height,
        viewportWidth: ae.width,
        zoomFactor: I,
      }),
      !Et && f != null && (S == null || (S.target.mode === `create` && S.anchor.type !== `text`))
        ? (0, yS.jsx)(Gb, {
            className: `annotation-selection-cursor`,
            "data-browser-comment-annotation-selection-cursor": !0,
            "data-browser-comment-native-text-selection": ke || void 0,
            mode: Yt,
            pointerEvents: `none`,
            style: {
              height: Z.height * Ae,
              left: f.x * I - Xt.x * Ae,
              top: f.y * I - Xt.y * Ae,
              width: Z.width * Ae,
            },
          })
        : null,
      Ft.map((e, t) =>
        (0, yS.jsx)(
          `div`,
          { className: `text-selection-highlight`, style: R_(e, I) },
          `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
        ),
      ),
      Ht.map((e) =>
        (0, yS.jsx)(
          `div`,
          {
            className: `flex-item-overlay`,
            "data-browser-comment-flex-item-overlay": !0,
            style: R_(e.rect, I, e.borderRadius),
          },
          e.key,
        ),
      ),
      Kt == null ? null : (0, yS.jsx)(Yb, { snapshot: Kt, viewportScale: n.viewportScale, zoomFactor: I }),
      Ct || Et
        ? (0, yS.jsxs)(`div`, {
            className: `markers-layer`,
            children: [
              E?.selected === !0
                ? (0, yS.jsx)(Jb, {
                    commentNumber: null,
                    markerPoint: { x: E.point.x * I, y: E.point.y * I },
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  })
                : null,
              Ut == null
                ? null
                : (0, yS.jsx)(Jb, {
                    commentNumber: Wt,
                    markerPoint: Ut,
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  }),
              (n.areAnnotationMarkersVisible !== !1 || Et ? kt : []).map(
                ({ anchor: e, comment: n, commentNumber: r, key: i, savedSelectionIndex: a }, o) =>
                  (0, yS.jsx)(
                    qb,
                    {
                      commentNumber: r,
                      isSelected: S?.target.mode === `edit` && S.target.commentId === n.id,
                      markerPoint: At[o],
                      onMouseEnter: () => {
                        Et || S != null || Xe(n, e, a);
                      },
                      onMouseLeave: () => {
                        $e(n.id);
                      },
                      onClick: (r) => {
                        if (r.isTrusted) {
                          if ((r.preventDefault(), r.stopPropagation(), S != null)) {
                            t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                            return;
                          }
                          Ye(n, e, a);
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
  return (0, yS.jsx)(uS, {
    config: n.intlConfig,
    children: (0, yS.jsxs)(`div`, {
      "data-browser-comment-annotation-selection-modifier-active": (m && f != null) || void 0,
      "data-browser-comment-root": !0,
      "data-browser-comment-control-editing": (!Et && k) || void 0,
      style: Qt,
      children: [
        (0, yS.jsx)(`style`, { children: Ub }),
        (!De || Et) && (wt || ke ? (0, yS.jsx)(Xb, { style: Zt, children: en }) : en),
      ],
    }),
  });
}
function uS({ children: e, config: t }) {
  return (0, yS.jsx)(Rg, {
    defaultLocale: t.defaultLocale,
    locale: t.locale,
    messages: t.messages,
    onError: DS,
    children: e,
  });
}
function dS() {
  let e = document.getElementById(bl);
  if (e instanceof HTMLDivElement) return e;
  let t = document.createElement(`div`);
  return (
    (t.id = bl),
    (t.style.position = `fixed`),
    (t.style.inset = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.zIndex = String(Hg)),
    document.documentElement.appendChild(t),
    t
  );
}
function fS(e, t = !1) {
  return e == null || (!t && Qs(e)) ? null : nd(e);
}
function pS(e, t, n) {
  return e == null ? null : (cl(e.x, e.y, n, t)?.element ?? null);
}
function mS(e) {
  let t = SS.get(e);
  if (t != null) return t;
  let n = new Map();
  return (SS.set(e, n), n);
}
function hS(e, t, { viewportScale: n, zoomFactor: r }) {
  let i = C_(t, { viewportScale: n, zoomFactor: r }),
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
function gS(e) {
  return js(e, { width: window.innerWidth, height: window.innerHeight });
}
var $,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS = o(() => {
    (Ol(),
      Js(),
      ($ = u(Uf(), 1)),
      (_S = Gf()),
      (vS = Yf()),
      Vg(),
      Ug(),
      Jg(),
      Zg(),
      t_(),
      r_(),
      l_(),
      Cl(),
      ol(),
      v_(),
      b_(),
      hv(),
      xv(),
      Cd(),
      ob(),
      pb(),
      gb(),
      nv(),
      $b(),
      Wb(),
      Zc(),
      lx(),
      wx(),
      Ox(),
      $x(),
      tS(),
      oS(),
      td(),
      (yS = vb()),
      (bS = { name: `oai-annotation-editor-default-mode`, values: [`advanced`] }),
      (xS = 72),
      (SS = new WeakMap()),
      (CS = `--browser-sidebar-overlay-size-scale`),
      (wS = [
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
      (TS = 100),
      (ES = 5e3),
      (DS = () => {}),
      (OS = []));
  });
(Js(), pf());
var AS = null,
  jS = null,
  MS = {
    interactionMode: `browse`,
    annotationEditorMode: `comment`,
    isAgentControllingBrowser: !1,
    canUseTweaks: !1,
    canUseAnnotationMultiSelect: !1,
    canUseSiteAnnotationApi: !1,
    isDesignModifierPressed: !1,
    isTweaksEditorOpen: !1,
    comments: [],
    intlConfig: qs,
    viewportScale: 1,
    zoomPercent: 100,
  },
  NS = !1,
  PS = sf(),
  FS = !1,
  IS = !1,
  LS = !1,
  RS = !1,
  zS = !1,
  BS = null,
  VS = null,
  HS = null,
  US = null,
  WS = null;
function GS() {
  if ((d.ipcRenderer.on(mf, YS), globalThis.isSecureContext === !0 && window === window.top)) {
    let e = d.ipcRenderer.sendSync(_f);
    ((FS = e.enabled),
      (zS = e.siteAnnotationPermissionGranted),
      (MS = {
        ...MS,
        canUseSiteAnnotationApi: e.enabled && e.siteAnnotationFeaturesEnabled,
        isAgentControllingBrowser: e.isAgentControllingBrowser,
        interactionMode: e.isAnnotationModeActive ? `comment` : `browse`,
      }),
      e.enabled &&
        ((WS = $d()),
        (VS = Td({
          requestPermission: XS,
          getState: () => ({
            canUseSiteAnnotationApi: MS.canUseSiteAnnotationApi === !0,
            isAgentControllingBrowser: MS.isAgentControllingBrowser,
            hasActiveEditor: RS || PS.hasPendingEditor,
          }),
        })),
        (US = zf((e, t, n) => {
          d.ipcRenderer.send(gf, { ...vf, payload: { features: e, detections: t, used: n } });
        })),
        (HS = Af(
          (e) =>
            LS ||
            MS.canUseSiteAnnotationApi !== !0 ||
            MS.isAgentControllingBrowser ||
            navigator.userActivation?.isActive !== !0
              ? !1
              : (e !== !0 && VS?.clear(),
                d.ipcRenderer.invoke(hf, {
                  type: `browser-sidebar-runtime-toggle-annotation-mode`,
                  force: e,
                }),
                !0),
          QS,
          US.recordUse,
          () => MS.canUseSiteAnnotationApi === !0,
        )),
        HS ?? (WS.dispose(), (WS = null), VS.dispose(), (VS = null))));
  }
  (document.readyState === `loading` ? window.addEventListener(`DOMContentLoaded`, qS, { once: !0 }) : qS(),
    window.addEventListener(`pagehide`, (e) => {
      ($S(null),
        e.isTrusted && (BS?.resolve(!1), (BS = null)),
        e.isTrusted &&
          !e.persisted &&
          ((LS = !0),
          KS(),
          window.removeEventListener(`DOMContentLoaded`, qS),
          d.ipcRenderer.removeListener(mf, YS),
          AS?.dispose(),
          PS.clear()));
    }));
}
function KS() {
  (BS?.resolve(!1),
    (BS = null),
    (zS = !1),
    $S(null),
    (FS = !1),
    US?.dispose(),
    (US = null),
    VS?.dispose(),
    (VS = null),
    HS?.(),
    (HS = null),
    WS?.dispose(),
    (WS = null));
}
function qS() {
  IS ||
    LS ||
    ((IS = !0),
    Vf(
      async () => {
        let { mountBrowserCommentRuntime: e } = await Promise.resolve().then(() => (kS(), sS));
        return { mountBrowserCommentRuntime: e };
      },
      void 0,
    ).then(({ mountBrowserCommentRuntime: e }) => {
      LS || ((AS = e(JS())), AS.setSiteAnnotationPreview(jS), (jS = null));
    }));
}
function JS() {
  let e = MS;
  return (
    PS.clearSync(),
    {
      initialState: e,
      recordAnnotationFeatureUse(e, t) {
        MS.canUseSiteAnnotationApi && !MS.isAgentControllingBrowser && US?.recordAnnotationOpened(e, t);
      },
      subscribeToSiteAnnotationRequests: VS?.subscribe,
      getAnnotationControlTargets: () => WS?.getTargets() ?? [],
      getAnnotationControls(e) {
        return MS.canUseSiteAnnotationApi ? WS?.getControls(e) : void 0;
      },
      sendMessageToHost(e) {
        (e.type === `browser-sidebar-runtime-open-editor` ||
        e.type === `browser-sidebar-runtime-open-design-editor`
          ? (RS = !0)
          : (e.type === `browser-sidebar-runtime-cancel-editor` ||
              e.type === `browser-sidebar-runtime-exit-comment-mode`) &&
            ((RS = !1), VS?.clear()),
          d.ipcRenderer.invoke(hf, e));
      },
      subscribeToHostMessages(e) {
        NS = !0;
        let t = (t, n) => {
          switch (n.type) {
            case `browser-sidebar-runtime-annotation-permission-result`:
            case `browser-site-annotation-feature-preview`:
              return;
            case `browser-sidebar-runtime-sync`:
              e({ ...n, canUseSiteAnnotationApi: MS.canUseSiteAnnotationApi });
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
          d.ipcRenderer.on(mf, t),
          PS.flush(e),
          () => {
            ((NS = !1), d.ipcRenderer.removeListener(mf, t));
          }
        );
      },
    }
  );
}
function YS(e, t) {
  switch (t.type) {
    case `browser-sidebar-runtime-annotation-permission-result`:
      BS?.requestId === t.requestId && (BS.resolve(t.allowed), (BS = null));
      return;
    case `browser-site-annotation-feature-preview`:
      $S(MS.canUseSiteAnnotationApi && !MS.isAgentControllingBrowser ? t.preview : null);
      return;
    case `browser-sidebar-runtime-sync`:
      (ZS(t), NS || PS.buffer({ ...t, canUseSiteAnnotationApi: MS.canUseSiteAnnotationApi }));
      return;
    case `browser-sidebar-runtime-capture-text-selection`:
      NS || PS.buffer(t);
      return;
    case `browser-sidebar-runtime-select-comment`:
    case `browser-sidebar-runtime-create-comment-at-point`:
    case `browser-sidebar-runtime-create-comment-from-selection`:
    case `browser-sidebar-runtime-open-design-editor-at-point`:
    case `browser-sidebar-runtime-restore-editor`:
      (VS?.clear(), NS || PS.buffer(t));
      return;
    case `browser-sidebar-runtime-close-editor`:
      ((RS = !1), VS?.clear(), PS.buffer(t));
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
function XS() {
  if (zS) return !0;
  if (BS != null) return BS.promise;
  let e = { ...Promise.withResolvers(), requestId: crypto.randomUUID() };
  return (
    (BS = e),
    d.ipcRenderer
      .invoke(hf, { type: `browser-sidebar-runtime-request-annotation-permission`, requestId: e.requestId })
      .catch(() => {
        BS === e && ((BS = null), e.resolve(!1));
      }),
    e.promise
  );
}
function ZS(e) {
  let t = HS != null && QS();
  (e.canUseSiteAnnotationApi === !1 && KS(),
    (e.isAgentControllingBrowser || e.siteAnnotationFeaturesEnabled === !1) && (VS?.clear(), $S(null)),
    (MS = {
      interactionMode: e.interactionMode,
      annotationEditorMode: e.annotationEditorMode ?? `comment`,
      isAgentControllingBrowser: e.isAgentControllingBrowser,
      canUseTweaks: e.canUseTweaks !== !1,
      canUseAnnotationMultiSelect: e.canUseAnnotationMultiSelect === !0,
      canUseSiteAnnotationApi: FS && e.siteAnnotationFeaturesEnabled !== !1,
      isDesignModifierPressed: e.isDesignModifierPressed === !0,
      areAnnotationMarkersVisible: e.areAnnotationMarkersVisible !== !1,
      isAnnotationSuspended: e.isAnnotationSuspended === !0,
      isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
      comments: e.comments,
      intlConfig: e.intlConfig,
      viewportScale: e.viewportScale ?? 1,
      zoomPercent: e.zoomPercent,
    }));
  let n = HS != null && QS();
  n !== t && document.dispatchEvent(new CustomEvent(`oaiannotationmodechange`, { detail: { active: n } }));
}
function QS() {
  return MS.canUseSiteAnnotationApi === !0 && MS.interactionMode === `comment`;
}
function $S(e) {
  AS == null ? (jS = e) : AS.setSiteAnnotationPreview(e);
}
var eC = !1;
function tC() {
  (window.addEventListener(`dragstart`, nC, !0), window.addEventListener(`dragend`, rC, !0));
}
function nC(e) {
  if (!e.isTrusted) return;
  let t = iC(e),
    n = t?.currentSrc || t?.src;
  n != null &&
    n.length !== 0 &&
    ((eC = !0),
    d.ipcRenderer.invoke(hf, { type: `browser-sidebar-runtime-image-drag-started`, sourceUrl: n }));
}
function rC(e) {
  e.isTrusted &&
    eC &&
    ((eC = !1), d.ipcRenderer.invoke(hf, { type: `browser-sidebar-runtime-image-drag-ended` }));
}
function iC(e) {
  for (let t of e.composedPath()) if (t instanceof HTMLImageElement) return t;
  return e.target instanceof HTMLImageElement ? e.target : null;
}
function aC() {
  (window.addEventListener(`mousedown`, sC, !0),
    window.addEventListener(`mouseup`, oC, !0),
    window.addEventListener(`auxclick`, sC, !0));
}
function oC(e) {
  let t = cC(e);
  t != null &&
    e.isTrusted &&
    (sC(e), d.ipcRenderer.invoke(hf, { type: `browser-sidebar-runtime-mouse-navigation`, direction: t }));
}
function sC(e) {
  cC(e) != null && (e.preventDefault(), e.stopPropagation());
}
function cC(e) {
  return e.button === 3 ? `back` : e.button === 4 ? `forward` : null;
}
(Object.freeze([`http:`, `https:`]), new TextEncoder());
var lC = {
    distribution: `chrome-web-store`,
    extensionIds: [`lfkehkpjohcoelkpembgemeipeppanef`],
    outputModes: [],
    releaseChannel: `beta`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef`,
  },
  uC = {
    distribution: `chrome-web-store`,
    extensionIds: [`hehggadaopoacecdllhhajmbjkdcmajg`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg`,
  },
  dC = {
    distribution: `microsoft-edge-add-ons`,
    extensionIds: [`odlomjlbamekndcpllcnffbgeohgkmjh`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh`,
  },
  fC = {
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
        lC,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        lC,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        uC,
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
        lC,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        dC,
        lC,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        dC,
        uC,
      ],
    },
  };
(fC.chrome.dev, fC.chrome.internal, fC.chrome.prod, fC.edge.dev, fC.edge.internal, fC.edge.prod);
var pC = { type: `webmcp_changed`, version: 1 };
function mC() {
  if (!d.ipcRenderer.sendSync(`codex_desktop:get-browser-webmcp-policy`).enabled) return;
  let e = Reflect.get(document, `modelContext`);
  if (!(e instanceof EventTarget)) return;
  let t = () => {
    d.ipcRenderer.send(gf, pC);
  };
  (e.addEventListener(`toolchange`, t),
    window.addEventListener(`pagehide`, (n) => {
      n.persisted || e.removeEventListener(`toolchange`, t);
    }),
    t());
}
(mC(), d.webFrame.setVisualZoomLevelLimits?.(1, 3), GS(), aC(), tC());
//# sourceMappingURL=browser-page-preload.js.map
