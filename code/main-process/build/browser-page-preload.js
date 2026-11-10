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
            t(e, d, {
              get: ((e) => i[e]).bind(null, d),
              enumerable: !(s = n(i, d)) || s.enumerable,
            }));
    return e;
  },
  u = (n, r, a) => (
    (a = n == null ? {} : e(i(n))),
    l(r || !n || !n.__esModule ? t(a, `default`, { value: n, enumerable: !0 }) : a, n)
  );
let d = require("electron");
function f(e, t, n) {
  function r(n, r) {
    if (
      (n._zod ||
        Object.defineProperty(n, "_zod", {
          value: { def: r, constr: o, traits: new Set() },
          enumerable: !1,
        }),
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
          (super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = `ZodEncodeError`));
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
      throw Error(`cached value already set`);
    },
  };
}
function ee(e) {
  return e == null;
}
function te(e) {
  let t = +!!e.startsWith(`^`),
    n = e.endsWith(`$`) ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function S(e, t) {
  let n = e / t,
    r = Math.round(n),
    i = 2 ** -52 * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < i ? 0 : n - r;
}
function C(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== j) return (r === void 0 && ((r = j), (r = n())), r);
    },
    set(n) {
      Object.defineProperty(e, t, { value: n });
    },
    configurable: !0,
  });
}
function ne(e, t, n) {
  Object.defineProperty(e, t, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function re(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function ie(e) {
  return JSON.stringify(e);
}
function w(e) {
  return e
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, ``)
    .replace(/[\s_-]+/g, `-`)
    .replace(/^-+|-+$/g, ``);
}
function ae(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function oe(e) {
  if (ae(e) === !1) return !1;
  let t = e.constructor;
  if (t === void 0 || typeof t != `function`) return !0;
  let n = t.prototype;
  return !(ae(n) === !1 || Object.prototype.hasOwnProperty.call(n, `isPrototypeOf`) === !1);
}
function se(e) {
  return oe(e)
    ? { ...e }
    : Array.isArray(e)
      ? [...e]
      : e instanceof Map
        ? new Map(e)
        : e instanceof Set
          ? new Set(e)
          : e;
}
function T(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
function E(e, t, n) {
  let r = new e._zod.constr(t ?? e._zod.def);
  return ((!t || n?.parent) && (r._zod.parent = e), r);
}
function D(e) {
  let t = e;
  if (!t) return {};
  if (typeof t == `string`) return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return (delete t.message, typeof t.error == `string` ? { ...t, error: () => t.error } : t);
}
function ce(e) {
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`,
  );
}
function le(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(`.pick() cannot be used on object schemas containing refinements`);
  return E(
    e,
    re(e._zod.def, {
      get shape() {
        let e = {};
        for (let r in t) {
          if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
          t[r] && (e[r] = n.shape[r]);
        }
        return (ne(this, `shape`, e), e);
      },
      checks: [],
    }),
  );
}
function ue(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(`.omit() cannot be used on object schemas containing refinements`);
  return E(
    e,
    re(e._zod.def, {
      get shape() {
        let r = { ...e._zod.def.shape };
        for (let e in t) {
          if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
          t[e] && delete r[e];
        }
        return (ne(this, `shape`, r), r);
      },
      checks: [],
    }),
  );
}
function de(e, t) {
  if (!oe(t)) throw Error(`Invalid input to extend: expected a plain object`);
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let n = e._zod.def.shape;
    for (let e in t)
      if (Object.getOwnPropertyDescriptor(n, e) !== void 0)
        throw Error(
          "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
        );
  }
  return E(
    e,
    re(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (ne(this, `shape`, n), n);
      },
    }),
  );
}
function O(e, t) {
  if (!oe(t)) throw Error(`Invalid input to safeExtend: expected a plain object`);
  return E(
    e,
    re(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (ne(this, `shape`, n), n);
      },
    }),
  );
}
function fe(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  return E(
    e,
    re(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t._zod.def.shape };
        return (ne(this, `shape`, n), n);
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: t._zod.def.checks ?? [],
    }),
  );
}
function pe(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0)
    throw Error(`.partial() cannot be used on object schemas containing refinements`);
  return E(
    t,
    re(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t]);
          }
        else for (let t in r) i[t] = e ? new e({ type: `optional`, innerType: r[t] }) : r[t];
        return (ne(this, `shape`, i), i);
      },
      checks: [],
    }),
  );
}
function me(e, t, n) {
  return E(
    t,
    re(t._zod.def, {
      get shape() {
        let r = t._zod.def.shape,
          i = { ...r };
        if (n)
          for (let t in n) {
            if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
            n[t] && (i[t] = new e({ type: `nonoptional`, innerType: r[t] }));
          }
        else for (let t in r) i[t] = new e({ type: `nonoptional`, innerType: r[t] });
        return (ne(this, `shape`, i), i);
      },
    }),
  );
}
function he(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function ge(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
  return !1;
}
function _e(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function ve(e) {
  return typeof e == `string` ? e : e?.message;
}
function k(e, t, n) {
  let r = e.message
      ? e.message
      : (ve(e.inst?._zod.def?.error?.(e)) ??
        ve(t?.error?.(e)) ??
        ve(n.customError?.(e)) ??
        ve(n.localeError?.(e)) ??
        `Invalid input`),
    { inst: i, continue: a, input: o, ...s } = e;
  return ((s.path ??= []), (s.message = r), t?.reportInput && (s.input = o), s);
}
function ye(e) {
  return Array.isArray(e) ? `array` : typeof e == `string` ? `string` : `unknown`;
}
function A(...e) {
  let [t, n, r] = e;
  return typeof t == `string` ? { message: t, code: `custom`, input: n, inst: r } : { ...t };
}
var j,
  be,
  xe,
  Se,
  Ce,
  we = o(() => {
    (v(),
      (j = Symbol(`evaluating`)),
      (be = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {}),
      (xe = x(() => {
        if (_.jitless || (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`)))
          return !1;
        try {
          return (Function(``), !0);
        } catch {
          return !1;
        }
      })),
      (Se = new Set([`string`, `number`, `symbol`])),
      (Ce = {
        safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      }));
  });
function Te(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0
      ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
      : r.push(t(i));
  return { formErrors: r, fieldErrors: n };
}
function Ee(e, t = (e) => e.message) {
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
var De,
  Oe,
  ke,
  Ae = o(() => {
    (v(),
      we(),
      (De = (e, t) => {
        ((e.name = `$ZodError`),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, b, 2)),
          Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
      }),
      (Oe = f(`$ZodError`, De)),
      (ke = f(`$ZodError`, De, { Parent: Error })));
  }),
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
  Ve,
  He,
  Ue,
  We,
  Ge = o(() => {
    (v(),
      Ae(),
      we(),
      (je = (e) => (t, n, r, i) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new h();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => k(e, a, p())));
          throw (be(t, i?.callee), t);
        }
        return o.value;
      }),
      (Me = (e) => async (t, n, r, i) => {
        let a = r ? { ...r, async: !0 } : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => k(e, a, p())));
          throw (be(t, i?.callee), t);
        }
        return o.value;
      }),
      (Ne = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new h();
        return a.issues.length
          ? { success: !1, error: new (e ?? Oe)(a.issues.map((e) => k(e, i, p()))) }
          : { success: !0, data: a.value };
      }),
      (Pe = Ne(ke)),
      (Fe = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => k(e, i, p()))) }
            : { success: !0, data: a.value }
        );
      }),
      (Ie = Fe(ke)),
      (Le = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return je(e)(t, n, i);
      }),
      (Re = (e) => (t, n, r) => je(e)(t, n, r)),
      (ze = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Me(e)(t, n, i);
      }),
      (Be = (e) => async (t, n, r) => Me(e)(t, n, r)),
      (Ve = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ne(e)(t, n, i);
      }),
      (He = (e) => (t, n, r) => Ne(e)(t, n, r)),
      (Ue = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Fe(e)(t, n, i);
      }),
      (We = (e) => async (t, n, r) => Fe(e)(t, n, r)));
  });
function Ke() {
  return new RegExp(ot, `u`);
}
function qe(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Je(e) {
  return RegExp(`^${qe(e)}$`);
}
function Ye(e) {
  let t = qe({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``), e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${mt}T(?:${r})$`);
}
var Xe,
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
  M,
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
  bt,
  xt,
  St,
  Ct = o(() => {
    ((Xe = /^[cC][0-9a-z]{6,}$/),
      (Ze = /^[0-9a-z]+$/),
      (Qe = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      ($e = /^[0-9a-vA-V]{20}$/),
      (et = /^[A-Za-z0-9]{27}$/),
      (tt = /^[a-zA-Z0-9_-]{21}$/),
      (nt =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      (rt = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      (it = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (at =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (ot = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`),
      (st =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (ct =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (lt =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (M =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (ut = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (dt = /^[A-Za-z0-9_-]*$/),
      (ft = /^https?$/),
      (pt = /^\+[1-9]\d{6,14}$/),
      (mt = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`),
      (ht = RegExp(`^${mt}$`)),
      (gt = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}` : `[\\s\\S]*`;
        return RegExp(`^${t}$`);
      }),
      (_t = /^-?\d+$/),
      (vt = /^-?\d+(?:\.\d+)?$/),
      (yt = /^(?:true|false)$/i),
      (bt = /^null$/i),
      (xt = /^[^A-Z]*$/),
      (St = /^[^a-z]*$/));
  }),
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
  Bt,
  Vt = o(() => {
    (v(),
      Ct(),
      we(),
      (wt = f(`$ZodCheck`, (e, t) => {
        var n;
        ((e._zod ??= {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
      })),
      (Tt = { number: `number`, bigint: `bigint`, object: `date` }),
      (Et = f(`$ZodCheckLessThan`, (e, t) => {
        wt.init(e, t);
        let n = Tt[typeof t.value];
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
      (Dt = f(`$ZodCheckGreaterThan`, (e, t) => {
        wt.init(e, t);
        let n = Tt[typeof t.value];
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
      (Ot = f(`$ZodCheckMultipleOf`, (e, t) => {
        (wt.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error(`Cannot mix number and bigint in multiple_of check.`);
            (typeof n.value == `bigint`
              ? n.value % t.value === BigInt(0)
              : S(n.value, t.value) === 0) ||
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
      (kt = f(`$ZodCheckNumberFormat`, (e, t) => {
        (wt.init(e, t), (t.format = t.format || `float64`));
        let n = t.format?.includes(`int`),
          r = n ? `int` : `number`,
          [i, a] = Ce[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = _t));
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
      (At = f(`$ZodCheckMaxLength`, (e, t) => {
        var n;
        (wt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !ee(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.maximum ?? 1 / 0;
            t.maximum < n && (e._zod.bag.maximum = t.maximum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length <= t.maximum) return;
            let i = ye(r);
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
      (jt = f(`$ZodCheckMinLength`, (e, t) => {
        var n;
        (wt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !ee(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag.minimum ?? -1 / 0;
            t.minimum > n && (e._zod.bag.minimum = t.minimum);
          }),
          (e._zod.check = (n) => {
            let r = n.value;
            if (r.length >= t.minimum) return;
            let i = ye(r);
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
      (Mt = f(`$ZodCheckLengthEquals`, (e, t) => {
        var n;
        (wt.init(e, t),
          (n = e._zod.def).when ??
            (n.when = (e) => {
              let t = e.value;
              return !ee(t) && t.length !== void 0;
            }),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.minimum = t.length), (n.maximum = t.length), (n.length = t.length));
          }),
          (e._zod.check = (n) => {
            let r = n.value,
              i = r.length;
            if (i === t.length) return;
            let a = ye(r),
              o = i > t.length;
            n.issues.push({
              origin: a,
              ...(o
                ? { code: `too_big`, maximum: t.length }
                : { code: `too_small`, minimum: t.length }),
              inclusive: !0,
              exact: !0,
              input: n.value,
              inst: e,
              continue: !t.abort,
            });
          }));
      })),
      (Nt = f(`$ZodCheckStringFormat`, (e, t) => {
        var n, r;
        (wt.init(e, t),
          e._zod.onattach.push((e) => {
            let n = e._zod.bag;
            ((n.format = t.format),
              t.pattern && ((n.patterns ??= new Set()), n.patterns.add(t.pattern)));
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
      (Pt = f(`$ZodCheckRegex`, (e, t) => {
        (Nt.init(e, t),
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
      (Ft = f(`$ZodCheckLowerCase`, (e, t) => {
        ((t.pattern ??= xt), Nt.init(e, t));
      })),
      (It = f(`$ZodCheckUpperCase`, (e, t) => {
        ((t.pattern ??= St), Nt.init(e, t));
      })),
      (Lt = f(`$ZodCheckIncludes`, (e, t) => {
        wt.init(e, t);
        let n = T(t.includes),
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
      (Rt = f(`$ZodCheckStartsWith`, (e, t) => {
        wt.init(e, t);
        let n = RegExp(`^${T(t.prefix)}.*`);
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
      (zt = f(`$ZodCheckEndsWith`, (e, t) => {
        wt.init(e, t);
        let n = RegExp(`.*${T(t.suffix)}$`);
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
      (Bt = f(`$ZodCheckOverwrite`, (e, t) => {
        (wt.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      })));
  }),
  Ht,
  Ut = o(() => {
    Ht = class {
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
  Wt,
  Gt = o(() => {
    Wt = { major: 4, minor: 4, patch: 3 };
  });
function Kt(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
function qt(e) {
  if (!dt.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Kt(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
function Jt(e, t = null) {
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
function Yt(e, t, n) {
  (e.issues.length && t.issues.push(..._e(n, e.issues)), (t.value[n] = e.value));
}
function Xt(e, t, n, r, i, a) {
  let o = n in r;
  if (e.issues.length) {
    if (i && a && !o) return;
    t.issues.push(..._e(n, e.issues));
  }
  if (!o && !i) {
    e.issues.length ||
      t.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: void 0, path: [n] });
    return;
  }
  e.value === void 0 ? o && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function Zt(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = ce(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function Qt(e, t, n, r, i, a) {
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
    a instanceof Promise ? e.push(a.then((e) => Xt(e, n, i, t, u, d))) : Xt(a, n, i, t, u, d);
  }
  return (
    o.length && n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
function $t(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !he(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => k(e, r, p()))),
      }),
      t);
}
function en(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (oe(e) && oe(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = en(e[n], t[n]);
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
        o = en(i, a);
      if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function tn(e, t, n) {
  let r = new Map(),
    i;
  for (let n of t.issues)
    if (n.code === `unrecognized_keys`) {
      i ??= n;
      for (let e of n.keys) (r.has(e) || r.set(e, {}), (r.get(e).l = !0));
    } else e.issues.push(n);
  for (let t of n.issues)
    if (t.code === `unrecognized_keys`)
      for (let e of t.keys) (r.has(e) || r.set(e, {}), (r.get(e).r = !0));
    else e.issues.push(t);
  let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
  if ((a.length && i && e.issues.push({ ...i, keys: a }), he(e))) return e;
  let o = en(t.value, n.value);
  if (!o.valid)
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return ((e.value = o.data), e);
}
function nn(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
function rn(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
function an(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: e.value, inst: t }),
    e
  );
}
function on(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
function sn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
function cn(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(A(e)));
  }
}
var ln,
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
  rr,
  ir,
  ar,
  or,
  sr = o(() => {
    (Vt(),
      v(),
      Ut(),
      Ge(),
      Ct(),
      we(),
      Gt(),
      (ln = f(`$ZodType`, (e, t) => {
        var n;
        ((e ??= {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = Wt));
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
              let r = he(e),
                i;
              for (let a of t) {
                if (a._zod.def.when) {
                  if (ge(e) || !a._zod.def.when(e)) continue;
                } else if (r) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && n?.async === !1) throw new h();
                if (i || o instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (r ||= he(e, t)));
                  });
                else {
                  if (e.issues.length === t) continue;
                  r ||= he(e, t);
                }
              }
              return i ? i.then(() => e) : e;
            },
            n = (n, i, a) => {
              if (he(n)) return ((n.aborted = !0), n);
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
        C(e, `~standard`, () => ({
          validate: (t) => {
            try {
              let n = Pe(e, t);
              return n.success ? { value: n.data } : { issues: n.error?.issues };
            } catch {
              return Ie(e, t).then((e) =>
                e.success ? { value: e.data } : { issues: e.error?.issues },
              );
            }
          },
          vendor: `zod`,
          version: 1,
        }));
      })),
      (un = f(`$ZodString`, (e, t) => {
        (ln.init(e, t),
          (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? gt(e._zod.bag)),
          (e._zod.parse = (n, r) => {
            if (t.coerce)
              try {
                n.value = String(n.value);
              } catch {}
            return (
              typeof n.value == `string` ||
                n.issues.push({
                  expected: `string`,
                  code: `invalid_type`,
                  input: n.value,
                  inst: e,
                }),
              n
            );
          }));
      })),
      (dn = f(`$ZodStringFormat`, (e, t) => {
        (Nt.init(e, t), un.init(e, t));
      })),
      (fn = f(`$ZodGUID`, (e, t) => {
        ((t.pattern ??= rt), dn.init(e, t));
      })),
      (pn = f(`$ZodUUID`, (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ??= it(e);
        } else t.pattern ??= it();
        dn.init(e, t);
      })),
      (mn = f(`$ZodEmail`, (e, t) => {
        ((t.pattern ??= at), dn.init(e, t));
      })),
      (hn = f(`$ZodURL`, (e, t) => {
        (dn.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim();
              if (!t.normalize && t.protocol?.source === ft.source && !/^https?:\/\//i.test(r)) {
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
                  t.protocol.test(
                    i.protocol.endsWith(`:`) ? i.protocol.slice(0, -1) : i.protocol,
                  ) ||
                    n.issues.push({
                      code: `invalid_format`,
                      format: `url`,
                      note: `Invalid protocol`,
                      pattern: t.protocol.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                t.normalize ? (n.value = i.href) : (n.value = r));
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
      (gn = f(`$ZodEmoji`, (e, t) => {
        ((t.pattern ??= Ke()), dn.init(e, t));
      })),
      (_n = f(`$ZodNanoID`, (e, t) => {
        ((t.pattern ??= tt), dn.init(e, t));
      })),
      (vn = f(`$ZodCUID`, (e, t) => {
        ((t.pattern ??= Xe), dn.init(e, t));
      })),
      (yn = f(`$ZodCUID2`, (e, t) => {
        ((t.pattern ??= Ze), dn.init(e, t));
      })),
      (bn = f(`$ZodULID`, (e, t) => {
        ((t.pattern ??= Qe), dn.init(e, t));
      })),
      (xn = f(`$ZodXID`, (e, t) => {
        ((t.pattern ??= $e), dn.init(e, t));
      })),
      (Sn = f(`$ZodKSUID`, (e, t) => {
        ((t.pattern ??= et), dn.init(e, t));
      })),
      (Cn = f(`$ZodISODateTime`, (e, t) => {
        ((t.pattern ??= Ye(t)), dn.init(e, t));
      })),
      (wn = f(`$ZodISODate`, (e, t) => {
        ((t.pattern ??= ht), dn.init(e, t));
      })),
      (Tn = f(`$ZodISOTime`, (e, t) => {
        ((t.pattern ??= Je(t)), dn.init(e, t));
      })),
      (En = f(`$ZodISODuration`, (e, t) => {
        ((t.pattern ??= nt), dn.init(e, t));
      })),
      (Dn = f(`$ZodIPv4`, (e, t) => {
        ((t.pattern ??= st), dn.init(e, t), (e._zod.bag.format = `ipv4`));
      })),
      (On = f(`$ZodIPv6`, (e, t) => {
        ((t.pattern ??= ct),
          dn.init(e, t),
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
      (kn = f(`$ZodCIDRv4`, (e, t) => {
        ((t.pattern ??= lt), dn.init(e, t));
      })),
      (An = f(`$ZodCIDRv6`, (e, t) => {
        ((t.pattern ??= M),
          dn.init(e, t),
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
      (jn = f(`$ZodBase64`, (e, t) => {
        ((t.pattern ??= ut),
          dn.init(e, t),
          (e._zod.bag.contentEncoding = `base64`),
          (e._zod.check = (n) => {
            Kt(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Mn = f(`$ZodBase64URL`, (e, t) => {
        ((t.pattern ??= dt),
          dn.init(e, t),
          (e._zod.bag.contentEncoding = `base64url`),
          (e._zod.check = (n) => {
            qt(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Nn = f(`$ZodE164`, (e, t) => {
        ((t.pattern ??= pt), dn.init(e, t));
      })),
      (Pn = f(`$ZodJWT`, (e, t) => {
        (dn.init(e, t),
          (e._zod.check = (n) => {
            Jt(n.value, t.alg) ||
              n.issues.push({
                code: `invalid_format`,
                format: `jwt`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Fn = f(`$ZodNumber`, (e, t) => {
        (ln.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? vt),
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
      (In = f(`$ZodNumberFormat`, (e, t) => {
        (kt.init(e, t), Fn.init(e, t));
      })),
      (Ln = f(`$ZodBoolean`, (e, t) => {
        (ln.init(e, t),
          (e._zod.pattern = yt),
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
      (Rn = f(`$ZodNull`, (e, t) => {
        (ln.init(e, t),
          (e._zod.pattern = bt),
          (e._zod.values = new Set([null])),
          (e._zod.parse = (t, n) => {
            let r = t.value;
            return (
              r === null ||
                t.issues.push({ expected: `null`, code: `invalid_type`, input: r, inst: e }),
              t
            );
          }));
      })),
      (zn = f(`$ZodUnknown`, (e, t) => {
        (ln.init(e, t), (e._zod.parse = (e) => e));
      })),
      (Bn = f(`$ZodNever`, (e, t) => {
        (ln.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: `never`, code: `invalid_type`, input: t.value, inst: e }),
            t
          )));
      })),
      (Vn = f(`$ZodArray`, (e, t) => {
        (ln.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (
                n.issues.push({ expected: `array`, code: `invalid_type`, input: i, inst: e }), n
              );
            n.value = Array(i.length);
            let a = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                s = t.element._zod.run({ value: o, issues: [] }, r);
              s instanceof Promise ? a.push(s.then((t) => Yt(t, n, e))) : Yt(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Hn = f(`$ZodObject`, (e, t) => {
        if ((ln.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let n = { ...e };
              return (Object.defineProperty(t, "shape", { value: n }), n);
            },
          });
        }
        let n = x(() => Zt(t));
        C(e._zod, `propValues`, () => {
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
        let r = ae,
          i = t.catchall,
          a;
        e._zod.parse = (t, o) => {
          a ??= n.value;
          let s = t.value;
          if (!r(s))
            return (
              t.issues.push({ expected: `object`, code: `invalid_type`, input: s, inst: e }), t
            );
          t.value = {};
          let c = [],
            l = a.shape;
          for (let e of a.keys) {
            let n = l[e],
              r = n._zod.optin === `optional`,
              i = n._zod.optout === `optional`,
              a = n._zod.run({ value: s[e], issues: [] }, o);
            a instanceof Promise
              ? c.push(a.then((n) => Xt(n, t, e, s, r, i)))
              : Xt(a, t, e, s, r, i);
          }
          return i ? Qt(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
        };
      })),
      (Un = f(`$ZodObjectJIT`, (e, t) => {
        Hn.init(e, t);
        let n = e._zod.parse,
          r = x(() => Zt(t)),
          i = (e) => {
            let t = new Ht([`shape`, `payload`, `ctx`]),
              n = r.value,
              i = (e) => {
                let t = ie(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
              };
            t.write(`const input = payload.value;`);
            let a = Object.create(null),
              o = 0;
            for (let e of n.keys) a[e] = `key_${o++}`;
            t.write(`const newResult = {};`);
            for (let r of n.keys) {
              let n = a[r],
                o = ie(r),
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
          o = ae,
          s = !_.jitless,
          c = s && xe.value,
          l = t.catchall,
          u;
        e._zod.parse = (d, f) => {
          u ??= r.value;
          let p = d.value;
          return o(p)
            ? s && c && f?.async === !1 && f.jitless !== !0
              ? ((a ||= i(t.shape)), (d = a(d, f)), l ? Qt([], p, d, f, u, e) : d)
              : n(d, f)
            : (d.issues.push({ expected: `object`, code: `invalid_type`, input: p, inst: e }), d);
        };
      })),
      (Wn = f(`$ZodUnion`, (e, t) => {
        (ln.init(e, t),
          C(e._zod, `optin`, () =>
            t.options.some((e) => e._zod.optin === `optional`) ? `optional` : void 0,
          ),
          C(e._zod, `optout`, () =>
            t.options.some((e) => e._zod.optout === `optional`) ? `optional` : void 0,
          ),
          C(e._zod, `values`, () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
          }),
          C(e._zod, `pattern`, () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return RegExp(`^(${e.map((e) => te(e.source)).join(`|`)})$`);
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
          return a ? Promise.all(o).then((t) => $t(t, r, e, i)) : $t(o, r, e, i);
        };
      })),
      (Gn = f(`$ZodDiscriminatedUnion`, (e, t) => {
        ((t.inclusive = !1), Wn.init(e, t));
        let n = e._zod.parse;
        C(e._zod, `propValues`, () => {
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
          if (!ae(o))
            return (
              i.issues.push({ code: `invalid_type`, expected: `object`, input: o, inst: e }), i
            );
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
      (Kn = f(`$ZodIntersection`, (e, t) => {
        (ln.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => tn(e, t, n))
              : tn(e, i, a);
          }));
      })),
      (qn = f(`$ZodRecord`, (e, t) => {
        (ln.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!oe(i))
              return (
                n.issues.push({ expected: `record`, code: `invalid_type`, input: i, inst: e }), n
              );
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
                      issues: o.issues.map((e) => k(e, r, p())),
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
                          (e.issues.length && n.issues.push(..._e(c, e.issues)),
                            (n.value[l] = e.value));
                        }),
                      )
                    : (u.issues.length && n.issues.push(..._e(c, u.issues)),
                      (n.value[l] = u.value));
                }
              let c;
              for (let e in i) s.has(e) || ((c ??= []), c.push(e));
              c &&
                c.length > 0 &&
                n.issues.push({ code: `unrecognized_keys`, input: i, inst: e, keys: c });
            } else {
              n.value = {};
              for (let o of Reflect.ownKeys(i)) {
                if (o === `__proto__` || !Object.prototype.propertyIsEnumerable.call(i, o))
                  continue;
                let s = t.keyType._zod.run({ value: o, issues: [] }, r);
                if (s instanceof Promise)
                  throw Error(`Async schemas not supported in object keys currently`);
                if (typeof o == `string` && vt.test(o) && s.issues.length) {
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
                        issues: s.issues.map((e) => k(e, r, p())),
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
                        (e.issues.length && n.issues.push(..._e(o, e.issues)),
                          (n.value[s.value] = e.value));
                      }),
                    )
                  : (c.issues.length && n.issues.push(..._e(o, c.issues)),
                    (n.value[s.value] = c.value));
              }
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Jn = f(`$ZodEnum`, (e, t) => {
        ln.init(e, t);
        let n = y(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => Se.has(typeof e))
              .map((e) => (typeof e == `string` ? T(e) : e.toString()))
              .join(`|`)})$`,
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (
              r.has(a) || t.issues.push({ code: `invalid_value`, values: n, input: a, inst: e }), t
            );
          }));
      })),
      (Yn = f(`$ZodLiteral`, (e, t) => {
        if ((ln.init(e, t), t.values.length === 0))
          throw Error(`Cannot create literal schema with no valid values`);
        let n = new Set(t.values);
        ((e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => (typeof e == `string` ? T(e) : e ? T(e.toString()) : String(e))).join(`|`)})$`,
          )),
          (e._zod.parse = (r, i) => {
            let a = r.value;
            return (
              n.has(a) ||
                r.issues.push({ code: `invalid_value`, values: t.values, input: a, inst: e }),
              r
            );
          }));
      })),
      (Xn = f(`$ZodTransform`, (e, t) => {
        (ln.init(e, t),
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
      (Zn = f(`$ZodOptional`, (e, t) => {
        (ln.init(e, t),
          (e._zod.optin = `optional`),
          (e._zod.optout = `optional`),
          C(e._zod, `values`, () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0,
          ),
          C(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${te(e.source)})?$`) : void 0;
          }),
          (e._zod.parse = (e, n) => {
            if (t.innerType._zod.optin === `optional`) {
              let r = e.value,
                i = t.innerType._zod.run(e, n);
              return i instanceof Promise ? i.then((e) => nn(e, r)) : nn(i, r);
            }
            return e.value === void 0 ? e : t.innerType._zod.run(e, n);
          }));
      })),
      (Qn = f(`$ZodExactOptional`, (e, t) => {
        (Zn.init(e, t),
          C(e._zod, `values`, () => t.innerType._zod.values),
          C(e._zod, `pattern`, () => t.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
      })),
      ($n = f(`$ZodNullable`, (e, t) => {
        (ln.init(e, t),
          C(e._zod, `optin`, () => t.innerType._zod.optin),
          C(e._zod, `optout`, () => t.innerType._zod.optout),
          C(e._zod, `pattern`, () => {
            let e = t.innerType._zod.pattern;
            return e ? RegExp(`^(${te(e.source)}|null)$`) : void 0;
          }),
          C(e._zod, `values`, () =>
            t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0,
          ),
          (e._zod.parse = (e, n) => (e.value === null ? e : t.innerType._zod.run(e, n))));
      })),
      (er = f(`$ZodDefault`, (e, t) => {
        (ln.init(e, t),
          (e._zod.optin = `optional`),
          C(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            if (e.value === void 0) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => rn(e, t)) : rn(r, t);
          }));
      })),
      (tr = f(`$ZodPrefault`, (e, t) => {
        (ln.init(e, t),
          (e._zod.optin = `optional`),
          C(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            n.direction === `backward` || (e.value === void 0 && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      })),
      (nr = f(`$ZodNonOptional`, (e, t) => {
        (ln.init(e, t),
          C(e._zod, `values`, () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => an(t, e)) : an(i, e);
          }));
      })),
      (rr = f(`$ZodCatch`, (e, t) => {
        (ln.init(e, t),
          (e._zod.optin = `optional`),
          C(e._zod, `optout`, () => t.innerType._zod.optout),
          C(e._zod, `values`, () => t.innerType._zod.values),
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
                        error: { issues: r.issues.map((e) => k(e, n, p())) },
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
                    error: { issues: r.issues.map((e) => k(e, n, p())) },
                    input: e.value,
                  })),
                  (e.issues = []),
                  (e.fallback = !0)),
                e);
          }));
      })),
      (ir = f(`$ZodPipe`, (e, t) => {
        (ln.init(e, t),
          C(e._zod, `values`, () => t.in._zod.values),
          C(e._zod, `optin`, () => t.in._zod.optin),
          C(e._zod, `optout`, () => t.out._zod.optout),
          C(e._zod, `propValues`, () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => on(e, t.in, n)) : on(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => on(e, t.out, n)) : on(r, t.out, n);
          }));
      })),
      (ar = f(`$ZodReadonly`, (e, t) => {
        (ln.init(e, t),
          C(e._zod, `propValues`, () => t.innerType._zod.propValues),
          C(e._zod, `values`, () => t.innerType._zod.values),
          C(e._zod, `optin`, () => t.innerType?._zod?.optin),
          C(e._zod, `optout`, () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(sn) : sn(r);
          }));
      })),
      (or = f(`$ZodCustom`, (e, t) => {
        (wt.init(e, t),
          ln.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => cn(t, n, r, e));
            cn(i, n, r, e);
          }));
      })));
  });
function cr() {
  return new ur();
}
var lr,
  ur,
  dr,
  fr = o(() => {
    ((ur = class {
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
      (lr = globalThis).__zod_globalRegistry ?? (lr.__zod_globalRegistry = cr()),
      (dr = globalThis.__zod_globalRegistry));
  });
function pr(e, t) {
  return new e({ type: `string`, ...D(t) });
}
function mr(e, t) {
  return new e({ type: `string`, format: `email`, check: `string_format`, abort: !1, ...D(t) });
}
function hr(e, t) {
  return new e({ type: `string`, format: `guid`, check: `string_format`, abort: !1, ...D(t) });
}
function gr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, ...D(t) });
}
function _r(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...D(t),
  });
}
function vr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...D(t),
  });
}
function yr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...D(t),
  });
}
function br(e, t) {
  return new e({ type: `string`, format: `url`, check: `string_format`, abort: !1, ...D(t) });
}
function xr(e, t) {
  return new e({ type: `string`, format: `emoji`, check: `string_format`, abort: !1, ...D(t) });
}
function Sr(e, t) {
  return new e({ type: `string`, format: `nanoid`, check: `string_format`, abort: !1, ...D(t) });
}
function Cr(e, t) {
  return new e({ type: `string`, format: `cuid`, check: `string_format`, abort: !1, ...D(t) });
}
function wr(e, t) {
  return new e({ type: `string`, format: `cuid2`, check: `string_format`, abort: !1, ...D(t) });
}
function Tr(e, t) {
  return new e({ type: `string`, format: `ulid`, check: `string_format`, abort: !1, ...D(t) });
}
function Er(e, t) {
  return new e({ type: `string`, format: `xid`, check: `string_format`, abort: !1, ...D(t) });
}
function Dr(e, t) {
  return new e({ type: `string`, format: `ksuid`, check: `string_format`, abort: !1, ...D(t) });
}
function Or(e, t) {
  return new e({ type: `string`, format: `ipv4`, check: `string_format`, abort: !1, ...D(t) });
}
function kr(e, t) {
  return new e({ type: `string`, format: `ipv6`, check: `string_format`, abort: !1, ...D(t) });
}
function Ar(e, t) {
  return new e({ type: `string`, format: `cidrv4`, check: `string_format`, abort: !1, ...D(t) });
}
function jr(e, t) {
  return new e({ type: `string`, format: `cidrv6`, check: `string_format`, abort: !1, ...D(t) });
}
function Mr(e, t) {
  return new e({ type: `string`, format: `base64`, check: `string_format`, abort: !1, ...D(t) });
}
function Nr(e, t) {
  return new e({ type: `string`, format: `base64url`, check: `string_format`, abort: !1, ...D(t) });
}
function Pr(e, t) {
  return new e({ type: `string`, format: `e164`, check: `string_format`, abort: !1, ...D(t) });
}
function Fr(e, t) {
  return new e({ type: `string`, format: `jwt`, check: `string_format`, abort: !1, ...D(t) });
}
function Ir(e, t) {
  return new e({
    type: `string`,
    format: `datetime`,
    check: `string_format`,
    offset: !1,
    local: !1,
    precision: null,
    ...D(t),
  });
}
function Lr(e, t) {
  return new e({ type: `string`, format: `date`, check: `string_format`, ...D(t) });
}
function Rr(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...D(t),
  });
}
function zr(e, t) {
  return new e({ type: `string`, format: `duration`, check: `string_format`, ...D(t) });
}
function Br(e, t) {
  return new e({ type: `number`, checks: [], ...D(t) });
}
function Vr(e, t) {
  return new e({ type: `number`, check: `number_format`, abort: !1, format: `safeint`, ...D(t) });
}
function Hr(e, t) {
  return new e({ type: `boolean`, ...D(t) });
}
function Ur(e, t) {
  return new e({ type: `null`, ...D(t) });
}
function Wr(e) {
  return new e({ type: `unknown` });
}
function Gr(e, t) {
  return new e({ type: `never`, ...D(t) });
}
function Kr(e, t) {
  return new Et({ check: `less_than`, ...D(t), value: e, inclusive: !1 });
}
function qr(e, t) {
  return new Et({ check: `less_than`, ...D(t), value: e, inclusive: !0 });
}
function Jr(e, t) {
  return new Dt({ check: `greater_than`, ...D(t), value: e, inclusive: !1 });
}
function Yr(e, t) {
  return new Dt({ check: `greater_than`, ...D(t), value: e, inclusive: !0 });
}
function Xr(e, t) {
  return new Ot({ check: `multiple_of`, ...D(t), value: e });
}
function Zr(e, t) {
  return new At({ check: `max_length`, ...D(t), maximum: e });
}
function Qr(e, t) {
  return new jt({ check: `min_length`, ...D(t), minimum: e });
}
function $r(e, t) {
  return new Mt({ check: `length_equals`, ...D(t), length: e });
}
function ei(e, t) {
  return new Pt({ check: `string_format`, format: `regex`, ...D(t), pattern: e });
}
function ti(e) {
  return new Ft({ check: `string_format`, format: `lowercase`, ...D(e) });
}
function ni(e) {
  return new It({ check: `string_format`, format: `uppercase`, ...D(e) });
}
function ri(e, t) {
  return new Lt({ check: `string_format`, format: `includes`, ...D(t), includes: e });
}
function ii(e, t) {
  return new Rt({ check: `string_format`, format: `starts_with`, ...D(t), prefix: e });
}
function ai(e, t) {
  return new zt({ check: `string_format`, format: `ends_with`, ...D(t), suffix: e });
}
function oi(e) {
  return new Bt({ check: `overwrite`, tx: e });
}
function si(e) {
  return oi((t) => t.normalize(e));
}
function ci() {
  return oi((e) => e.trim());
}
function li() {
  return oi((e) => e.toLowerCase());
}
function ui() {
  return oi((e) => e.toUpperCase());
}
function di() {
  return oi((e) => w(e));
}
function fi(e, t, n) {
  return new e({ type: `array`, element: t, ...D(n) });
}
function pi(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...D(n) });
}
function mi(e, t) {
  let n = hi(
    (t) => (
      (t.addIssue = (e) => {
        if (typeof e == `string`) t.issues.push(A(e, t.value, n._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= t.value),
            (r.inst ??= n),
            (r.continue ??= !n._zod.def.abort),
            t.issues.push(A(r)));
        }
      }),
      e(t.value, t)
    ),
    t,
  );
  return n;
}
function hi(e, t) {
  let n = new wt({ check: `custom`, ...D(t) });
  return ((n._zod.check = e), n);
}
var gi = o(() => {
  (Vt(), we());
});
function _i(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? dr,
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
function vi(e, t, n = { path: [], schemaPath: [] }) {
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
    a && ((o.ref ||= a), vi(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` && xi(e) && (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function yi(e, t) {
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
function bi(e, t) {
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
        (s.$ref &&
        (e.target === `draft-07` || e.target === `draft-04` || e.target === `openapi-3.0`)
          ? ((i.allOf = i.allOf ?? []), i.allOf.push(s))
          : Object.assign(i, s),
        Object.assign(i, a),
        t._zod.parent === o)
      )
        for (let e in i) e === `$ref` || e === `allOf` || e in a || delete i[e];
      if (s.$ref && n.def)
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e]);
    }
    let s = t._zod.parent;
    if (s && s !== o) {
      r(s);
      let t = e.seen.get(s);
      if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
        for (let e in i)
          e === `$ref` ||
            e === `allOf` ||
            (e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e]);
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
    (Object.keys(o).length > 0 &&
      (e.target === `draft-2020-12` ? (i.$defs = o) : (i.definitions = o)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, "~standard", {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: Ci(t, `input`, e.processors),
            output: Ci(t, `output`, e.processors),
          },
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
function xi(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return xi(r.element, n);
  if (r.type === `set`) return xi(r.valueType, n);
  if (r.type === `lazy`) return xi(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault`
  )
    return xi(r.innerType, n);
  if (r.type === `intersection`) return xi(r.left, n) || xi(r.right, n);
  if (r.type === `record` || r.type === `map`) return xi(r.keyType, n) || xi(r.valueType, n);
  if (r.type === `pipe`) return e._zod.traits.has(`$ZodCodec`) ? !0 : xi(r.in, n) || xi(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (xi(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (xi(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (xi(e, n)) return !0;
    return !!(r.rest && xi(r.rest, n));
  }
  return !1;
}
var Si,
  Ci,
  wi = o(() => {
    (fr(),
      (Si =
        (e, t = {}) =>
        (n) => {
          let r = _i({ ...n, processors: t });
          return (vi(e, r), yi(r, e), bi(r, e));
        }),
      (Ci =
        (e, t, n = {}) =>
        (r) => {
          let { libraryOptions: i, target: a } = r ?? {},
            o = _i({ ...(i ?? {}), target: a, io: t, processors: n });
          return (vi(e, o), yi(o, e), bi(o, e));
        }));
  }),
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  N,
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
  Ji = o(() => {
    (wi(),
      we(),
      (Ti = {
        guid: `uuid`,
        url: `uri`,
        datetime: `date-time`,
        json_string: `json-string`,
        regex: ``,
      }),
      (Ei = (e, t, n, r) => {
        let i = n;
        i.type = `string`;
        let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
        if (
          (typeof a == `number` && (i.minLength = a),
          typeof o == `number` && (i.maxLength = o),
          s &&
            ((i.format = Ti[s] ?? s),
            i.format === `` && delete i.format,
            s === `time` && delete i.format),
          l && (i.contentEncoding = l),
          c && c.size > 0)
        ) {
          let e = [...c];
          e.length === 1
            ? (i.pattern = e[0].source)
            : e.length > 1 &&
              (i.allOf = [
                ...e.map((e) => ({
                  ...(t.target === `draft-07` ||
                  t.target === `draft-04` ||
                  t.target === `openapi-3.0`
                    ? { type: `string` }
                    : {}),
                  pattern: e.source,
                })),
              ]);
        }
      }),
      (Di = (e, t, n, r) => {
        let i = n,
          {
            minimum: a,
            maximum: o,
            format: s,
            multipleOf: c,
            exclusiveMaximum: l,
            exclusiveMinimum: u,
          } = e._zod.bag;
        typeof s == `string` && s.includes(`int`) ? (i.type = `integer`) : (i.type = `number`);
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
      (Oi = (e, t, n, r) => {
        n.type = `boolean`;
      }),
      (ki = (e, t, n, r) => {
        t.target === `openapi-3.0`
          ? ((n.type = `string`), (n.nullable = !0), (n.enum = [null]))
          : (n.type = `null`);
      }),
      (Ai = (e, t, n, r) => {
        n.not = {};
      }),
      (ji = (e, t, n, r) => {}),
      (Mi = (e, t, n, r) => {
        let i = e._zod.def,
          a = y(i.entries);
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          (n.enum = a));
      }),
      (Ni = (e, t, n, r) => {
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
        if (a.length !== 0)
          if (a.length === 1) {
            let e = a[0];
            ((n.type = e === null ? `null` : typeof e),
              t.target === `draft-04` || t.target === `openapi-3.0`
                ? (n.enum = [e])
                : (n.const = e));
          } else
            (a.every((e) => typeof e == `number`) && (n.type = `number`),
              a.every((e) => typeof e == `string`) && (n.type = `string`),
              a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
              a.every((e) => e === null) && (n.type = `null`),
              (n.enum = a));
      }),
      (Pi = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Custom types cannot be represented in JSON Schema`);
      }),
      (Fi = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Transforms cannot be represented in JSON Schema`);
      }),
      (Ii = (e, t, n, r) => {
        let i = n,
          a = e._zod.def,
          { minimum: o, maximum: s } = e._zod.bag;
        (typeof o == `number` && (i.minItems = o),
          typeof s == `number` && (i.maxItems = s),
          (i.type = `array`),
          (i.items = vi(a.element, t, { ...r, path: [...r.path, `items`] })));
      }),
      (Li = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        ((i.type = `object`), (i.properties = {}));
        let o = a.shape;
        for (let e in o)
          i.properties[e] = vi(o[e], t, { ...r, path: [...r.path, `properties`, e] });
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
                (i.additionalProperties = vi(a.catchall, t, {
                  ...r,
                  path: [...r.path, `additionalProperties`],
                }))
              : t.io === `output` && (i.additionalProperties = !1));
      }),
      (N = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.inclusive === !1,
          o = i.options.map((e, n) =>
            vi(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }),
          );
        a ? (n.oneOf = o) : (n.anyOf = o);
      }),
      (Ri = (e, t, n, r) => {
        let i = e._zod.def,
          a = vi(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
          o = vi(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
          s = (e) => `allOf` in e && Object.keys(e).length === 1;
        n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
      }),
      (zi = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        i.type = `object`;
        let o = a.keyType,
          s = o._zod.bag?.patterns;
        if (a.mode === `loose` && s && s.size > 0) {
          let e = vi(a.valueType, t, { ...r, path: [...r.path, `patternProperties`, `*`] });
          i.patternProperties = {};
          for (let t of s) i.patternProperties[t.source] = e;
        } else
          ((t.target === `draft-07` || t.target === `draft-2020-12`) &&
            (i.propertyNames = vi(a.keyType, t, { ...r, path: [...r.path, `propertyNames`] })),
            (i.additionalProperties = vi(a.valueType, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            })));
        let c = o._zod.values;
        if (c) {
          let e = [...c].filter((e) => typeof e == `string` || typeof e == `number`);
          e.length > 0 && (i.required = e);
        }
      }),
      (Bi = (e, t, n, r) => {
        let i = e._zod.def,
          a = vi(i.innerType, t, r),
          o = t.seen.get(e);
        t.target === `openapi-3.0`
          ? ((o.ref = i.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: `null` }]);
      }),
      (Vi = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }),
      (Hi = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Ui = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          t.io === `input` && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Wi = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
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
      (Gi = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.in._zod.traits.has(`$ZodTransform`),
          o = t.io === `input` ? (a ? i.out : i.in) : i.out;
        vi(o, t, r);
        let s = t.seen.get(e);
        s.ref = o;
      }),
      (Ki = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.readOnly = !0));
      }),
      (qi = (e, t, n, r) => {
        let i = e._zod.def;
        vi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }));
  }),
  Yi = o(() => {
    (v(), Ge(), Ae(), sr(), Vt(), Gt(), we(), Ct(), fr(), Ut(), gi(), wi(), Ji(), wi());
  }),
  Xi = o(() => {
    Yi();
  });
function Zi(e) {
  return Ir(ta, e);
}
function Qi(e) {
  return Lr(na, e);
}
function $i(e) {
  return Rr(ra, e);
}
function ea(e) {
  return zr(ia, e);
}
var ta,
  na,
  ra,
  ia,
  aa = o(() => {
    (Yi(),
      Ko(),
      (ta = f(`ZodISODateTime`, (e, t) => {
        (Cn.init(e, t), to.init(e, t));
      })),
      (na = f(`ZodISODate`, (e, t) => {
        (wn.init(e, t), to.init(e, t));
      })),
      (ra = f(`ZodISOTime`, (e, t) => {
        (Tn.init(e, t), to.init(e, t));
      })),
      (ia = f(`ZodISODuration`, (e, t) => {
        (En.init(e, t), to.init(e, t));
      })));
  }),
  oa,
  sa,
  ca = o(() => {
    (Yi(),
      we(),
      (oa = (e, t) => {
        (Oe.init(e, t),
          (e.name = `ZodError`),
          Object.defineProperties(e, {
            format: { value: (t) => Ee(e, t) },
            flatten: { value: (t) => Te(e, t) },
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
      (sa = f(`ZodError`, oa, { Parent: Error })));
  }),
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa = o(() => {
    (Yi(),
      ca(),
      (la = je(sa)),
      (ua = Me(sa)),
      (da = Ne(sa)),
      (fa = Fe(sa)),
      (pa = Le(sa)),
      (ma = Re(sa)),
      (ha = ze(sa)),
      (ga = Be(sa)),
      (_a = Ve(sa)),
      (va = He(sa)),
      (ya = Ue(sa)),
      (ba = We(sa)));
  });
function Sa(e, t, n) {
  let r = Object.getPrototypeOf(e),
    i = Za.get(r);
  if ((i || ((i = new Set()), Za.set(r, i)), !i.has(t))) {
    i.add(t);
    for (let e in n) {
      let t = n[e];
      Object.defineProperty(r, e, {
        configurable: !0,
        enumerable: !1,
        get() {
          let n = t.bind(this);
          return (
            Object.defineProperty(this, e, {
              configurable: !0,
              writable: !0,
              enumerable: !0,
              value: n,
            }),
            n
          );
        },
        set(t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: t,
          });
        },
      });
    }
  }
}
function Ca(e) {
  return pr(eo, e);
}
function wa(e) {
  return Br(xo, e);
}
function Ta(e) {
  return Vr(So, e);
}
function Ea(e) {
  return Hr(Co, e);
}
function Da(e) {
  return Ur(wo, e);
}
function Oa() {
  return Wr(To);
}
function ka(e) {
  return Gr(Eo, e);
}
function Aa(e, t) {
  return fi(Do, e, t);
}
function ja(e, t) {
  let n = { type: `object`, shape: e ?? {}, ...D(t) };
  return new Oo(n);
}
function Ma(e, t) {
  return new Oo({ type: `object`, shape: e, catchall: ka(), ...D(t) });
}
function Na(e, t) {
  return new ko({ type: `union`, options: e, ...D(t) });
}
function Pa(e, t, n) {
  return new Ao({ type: `union`, options: t, discriminator: e, ...D(n) });
}
function Fa(e, t) {
  return new jo({ type: `intersection`, left: e, right: t });
}
function Ia(e, t, n) {
  return !t || !t._zod
    ? new Mo({ type: `record`, keyType: Ca(), valueType: e, ...D(t) })
    : new Mo({ type: `record`, keyType: e, valueType: t, ...D(n) });
}
function La(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new No({ type: `enum`, entries: n, ...D(t) });
}
function Ra(e, t) {
  return new Po({ type: `literal`, values: Array.isArray(e) ? e : [e], ...D(t) });
}
function za(e) {
  return new Fo({ type: `transform`, transform: e });
}
function Ba(e) {
  return new Io({ type: `optional`, innerType: e });
}
function Va(e) {
  return new Lo({ type: `optional`, innerType: e });
}
function Ha(e) {
  return new Ro({ type: `nullable`, innerType: e });
}
function Ua(e, t) {
  return new zo({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : se(t);
    },
  });
}
function Wa(e, t) {
  return new Bo({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : se(t);
    },
  });
}
function Ga(e, t) {
  return new Vo({ type: `nonoptional`, innerType: e, ...D(t) });
}
function Ka(e, t) {
  return new Ho({ type: `catch`, innerType: e, catchValue: typeof t == `function` ? t : () => t });
}
function qa(e, t) {
  return new Uo({ type: `pipe`, in: e, out: t });
}
function Ja(e) {
  return new Wo({ type: `readonly`, innerType: e });
}
function Ya(e, t = {}) {
  return pi(Go, e, t);
}
function Xa(e, t) {
  return mi(e, t);
}
var Za,
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
  po,
  mo,
  ho,
  go,
  P,
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
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko = o(() => {
    (Yi(),
      Ji(),
      wi(),
      Xi(),
      aa(),
      xa(),
      (Za = new WeakMap()),
      (Qa = f(
        `ZodType`,
        (e, t) => (
          ln.init(e, t),
          Object.assign(e[`~standard`], {
            jsonSchema: { input: Ci(e, `input`), output: Ci(e, `output`) },
          }),
          (e.toJSONSchema = Si(e, {})),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, "_def", { value: t }),
          (e.parse = (t, n) => la(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => da(e, t, n)),
          (e.parseAsync = async (t, n) => ua(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => fa(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => pa(e, t, n)),
          (e.decode = (t, n) => ma(e, t, n)),
          (e.encodeAsync = async (t, n) => ha(e, t, n)),
          (e.decodeAsync = async (t, n) => ga(e, t, n)),
          (e.safeEncode = (t, n) => _a(e, t, n)),
          (e.safeDecode = (t, n) => va(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => ya(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => ba(e, t, n)),
          Sa(e, `ZodType`, {
            check(...e) {
              let t = this.def;
              return this.clone(
                re(t, {
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
              return E(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return (e.add(this, t), this);
            },
            refine(e, t) {
              return this.check(Ya(e, t));
            },
            superRefine(e, t) {
              return this.check(Xa(e, t));
            },
            overwrite(e) {
              return this.check(oi(e));
            },
            optional() {
              return Ba(this);
            },
            exactOptional() {
              return Va(this);
            },
            nullable() {
              return Ha(this);
            },
            nullish() {
              return Ba(Ha(this));
            },
            nonoptional(e) {
              return Ga(this, e);
            },
            array() {
              return Aa(this);
            },
            or(e) {
              return Na([this, e]);
            },
            and(e) {
              return Fa(this, e);
            },
            transform(e) {
              return qa(this, za(e));
            },
            default(e) {
              return Ua(this, e);
            },
            prefault(e) {
              return Wa(this, e);
            },
            catch(e) {
              return Ka(this, e);
            },
            pipe(e) {
              return qa(this, e);
            },
            readonly() {
              return Ja(this);
            },
            describe(e) {
              let t = this.clone();
              return (dr.add(t, { description: e }), t);
            },
            meta(...e) {
              if (e.length === 0) return dr.get(this);
              let t = this.clone();
              return (dr.add(t, e[0]), t);
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
              return dr.get(e)?.description;
            },
            configurable: !0,
          }),
          e
        ),
      )),
      ($a = f(`_ZodString`, (e, t) => {
        (un.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ei(e, t, n, r)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          Sa(e, `_ZodString`, {
            regex(...e) {
              return this.check(ei(...e));
            },
            includes(...e) {
              return this.check(ri(...e));
            },
            startsWith(...e) {
              return this.check(ii(...e));
            },
            endsWith(...e) {
              return this.check(ai(...e));
            },
            min(...e) {
              return this.check(Qr(...e));
            },
            max(...e) {
              return this.check(Zr(...e));
            },
            length(...e) {
              return this.check($r(...e));
            },
            nonempty(...e) {
              return this.check(Qr(1, ...e));
            },
            lowercase(e) {
              return this.check(ti(e));
            },
            uppercase(e) {
              return this.check(ni(e));
            },
            trim() {
              return this.check(ci());
            },
            normalize(...e) {
              return this.check(si(...e));
            },
            toLowerCase() {
              return this.check(li());
            },
            toUpperCase() {
              return this.check(ui());
            },
            slugify() {
              return this.check(di());
            },
          }));
      })),
      (eo = f(`ZodString`, (e, t) => {
        (un.init(e, t),
          $a.init(e, t),
          (e.email = (t) => e.check(mr(no, t))),
          (e.url = (t) => e.check(br(ao, t))),
          (e.jwt = (t) => e.check(Fr(bo, t))),
          (e.emoji = (t) => e.check(xr(oo, t))),
          (e.guid = (t) => e.check(hr(ro, t))),
          (e.uuid = (t) => e.check(gr(io, t))),
          (e.uuidv4 = (t) => e.check(_r(io, t))),
          (e.uuidv6 = (t) => e.check(vr(io, t))),
          (e.uuidv7 = (t) => e.check(yr(io, t))),
          (e.nanoid = (t) => e.check(Sr(so, t))),
          (e.guid = (t) => e.check(hr(ro, t))),
          (e.cuid = (t) => e.check(Cr(co, t))),
          (e.cuid2 = (t) => e.check(wr(lo, t))),
          (e.ulid = (t) => e.check(Tr(uo, t))),
          (e.base64 = (t) => e.check(Mr(_o, t))),
          (e.base64url = (t) => e.check(Nr(vo, t))),
          (e.xid = (t) => e.check(Er(fo, t))),
          (e.ksuid = (t) => e.check(Dr(po, t))),
          (e.ipv4 = (t) => e.check(Or(mo, t))),
          (e.ipv6 = (t) => e.check(kr(ho, t))),
          (e.cidrv4 = (t) => e.check(Ar(go, t))),
          (e.cidrv6 = (t) => e.check(jr(P, t))),
          (e.e164 = (t) => e.check(Pr(yo, t))),
          (e.datetime = (t) => e.check(Zi(t))),
          (e.date = (t) => e.check(Qi(t))),
          (e.time = (t) => e.check($i(t))),
          (e.duration = (t) => e.check(ea(t))));
      })),
      (to = f(`ZodStringFormat`, (e, t) => {
        (dn.init(e, t), $a.init(e, t));
      })),
      (no = f(`ZodEmail`, (e, t) => {
        (mn.init(e, t), to.init(e, t));
      })),
      (ro = f(`ZodGUID`, (e, t) => {
        (fn.init(e, t), to.init(e, t));
      })),
      (io = f(`ZodUUID`, (e, t) => {
        (pn.init(e, t), to.init(e, t));
      })),
      (ao = f(`ZodURL`, (e, t) => {
        (hn.init(e, t), to.init(e, t));
      })),
      (oo = f(`ZodEmoji`, (e, t) => {
        (gn.init(e, t), to.init(e, t));
      })),
      (so = f(`ZodNanoID`, (e, t) => {
        (_n.init(e, t), to.init(e, t));
      })),
      (co = f(`ZodCUID`, (e, t) => {
        (vn.init(e, t), to.init(e, t));
      })),
      (lo = f(`ZodCUID2`, (e, t) => {
        (yn.init(e, t), to.init(e, t));
      })),
      (uo = f(`ZodULID`, (e, t) => {
        (bn.init(e, t), to.init(e, t));
      })),
      (fo = f(`ZodXID`, (e, t) => {
        (xn.init(e, t), to.init(e, t));
      })),
      (po = f(`ZodKSUID`, (e, t) => {
        (Sn.init(e, t), to.init(e, t));
      })),
      (mo = f(`ZodIPv4`, (e, t) => {
        (Dn.init(e, t), to.init(e, t));
      })),
      (ho = f(`ZodIPv6`, (e, t) => {
        (On.init(e, t), to.init(e, t));
      })),
      (go = f(`ZodCIDRv4`, (e, t) => {
        (kn.init(e, t), to.init(e, t));
      })),
      (P = f(`ZodCIDRv6`, (e, t) => {
        (An.init(e, t), to.init(e, t));
      })),
      (_o = f(`ZodBase64`, (e, t) => {
        (jn.init(e, t), to.init(e, t));
      })),
      (vo = f(`ZodBase64URL`, (e, t) => {
        (Mn.init(e, t), to.init(e, t));
      })),
      (yo = f(`ZodE164`, (e, t) => {
        (Nn.init(e, t), to.init(e, t));
      })),
      (bo = f(`ZodJWT`, (e, t) => {
        (Pn.init(e, t), to.init(e, t));
      })),
      (xo = f(`ZodNumber`, (e, t) => {
        (Fn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Di(e, t, n, r)),
          Sa(e, `ZodNumber`, {
            gt(e, t) {
              return this.check(Jr(e, t));
            },
            gte(e, t) {
              return this.check(Yr(e, t));
            },
            min(e, t) {
              return this.check(Yr(e, t));
            },
            lt(e, t) {
              return this.check(Kr(e, t));
            },
            lte(e, t) {
              return this.check(qr(e, t));
            },
            max(e, t) {
              return this.check(qr(e, t));
            },
            int(e) {
              return this.check(Ta(e));
            },
            safe(e) {
              return this.check(Ta(e));
            },
            positive(e) {
              return this.check(Jr(0, e));
            },
            nonnegative(e) {
              return this.check(Yr(0, e));
            },
            negative(e) {
              return this.check(Kr(0, e));
            },
            nonpositive(e) {
              return this.check(qr(0, e));
            },
            multipleOf(e, t) {
              return this.check(Xr(e, t));
            },
            step(e, t) {
              return this.check(Xr(e, t));
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
      (So = f(`ZodNumberFormat`, (e, t) => {
        (In.init(e, t), xo.init(e, t));
      })),
      (Co = f(`ZodBoolean`, (e, t) => {
        (Ln.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r)));
      })),
      (wo = f(`ZodNull`, (e, t) => {
        (Rn.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => ki(e, t, n, r)));
      })),
      (To = f(`ZodUnknown`, (e, t) => {
        (zn.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => ji(e, t, n, r)));
      })),
      (Eo = f(`ZodNever`, (e, t) => {
        (Bn.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ai(e, t, n, r)));
      })),
      (Do = f(`ZodArray`, (e, t) => {
        (Vn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ii(e, t, n, r)),
          (e.element = t.element),
          Sa(e, `ZodArray`, {
            min(e, t) {
              return this.check(Qr(e, t));
            },
            nonempty(e) {
              return this.check(Qr(1, e));
            },
            max(e, t) {
              return this.check(Zr(e, t));
            },
            length(e, t) {
              return this.check($r(e, t));
            },
            unwrap() {
              return this.element;
            },
          }));
      })),
      (Oo = f(`ZodObject`, (e, t) => {
        (Un.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Li(e, t, n, r)),
          C(e, `shape`, () => t.shape),
          Sa(e, `ZodObject`, {
            keyof() {
              return La(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: Oa() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: Oa() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: ka() });
            },
            strip() {
              return this.clone({ ...this._zod.def, catchall: void 0 });
            },
            extend(e) {
              return de(this, e);
            },
            safeExtend(e) {
              return O(this, e);
            },
            merge(e) {
              return fe(this, e);
            },
            pick(e) {
              return le(this, e);
            },
            omit(e) {
              return ue(this, e);
            },
            partial(...e) {
              return pe(Io, this, e[0]);
            },
            required(...e) {
              return me(Vo, this, e[0]);
            },
          }));
      })),
      (ko = f(`ZodUnion`, (e, t) => {
        (Wn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => N(e, t, n, r)),
          (e.options = t.options));
      })),
      (Ao = f(`ZodDiscriminatedUnion`, (e, t) => {
        (ko.init(e, t), Gn.init(e, t));
      })),
      (jo = f(`ZodIntersection`, (e, t) => {
        (Kn.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ri(e, t, n, r)));
      })),
      (Mo = f(`ZodRecord`, (e, t) => {
        (qn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => zi(e, t, n, r)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType));
      })),
      (No = f(`ZodEnum`, (e, t) => {
        (Jn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Mi(e, t, n, r)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries)));
        let n = new Set(Object.keys(t.entries));
        ((e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new No({ ...t, checks: [], ...D(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new No({ ...t, checks: [], ...D(r), entries: i });
          }));
      })),
      (Po = f(`ZodLiteral`, (e, t) => {
        (Yn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ni(e, t, n, r)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw Error(
                  "This schema contains multiple valid literal values. Use `.values` instead.",
                );
              return t.values[0];
            },
          }));
      })),
      (Fo = f(`ZodTransform`, (e, t) => {
        (Xn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Fi(e, t, n, r)),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new g(e.constructor.name);
            n.addIssue = (r) => {
              if (typeof r == `string`) n.issues.push(A(r, n.value, t));
              else {
                let t = r;
                (t.fatal && (t.continue = !1),
                  (t.code ??= `custom`),
                  (t.input ??= n.value),
                  (t.inst ??= e),
                  n.issues.push(A(t)));
              }
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise
              ? i.then((e) => ((n.value = e), (n.fallback = !0), n))
              : ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (Io = f(`ZodOptional`, (e, t) => {
        (Zn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => qi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Lo = f(`ZodExactOptional`, (e, t) => {
        (Qn.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => qi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Ro = f(`ZodNullable`, (e, t) => {
        ($n.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Bi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (zo = f(`ZodDefault`, (e, t) => {
        (er.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Hi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap));
      })),
      (Bo = f(`ZodPrefault`, (e, t) => {
        (tr.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ui(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Vo = f(`ZodNonOptional`, (e, t) => {
        (nr.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Ho = f(`ZodCatch`, (e, t) => {
        (rr.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Wi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap));
      })),
      (Uo = f(`ZodPipe`, (e, t) => {
        (ir.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Gi(e, t, n, r)),
          (e.in = t.in),
          (e.out = t.out));
      })),
      (Wo = f(`ZodReadonly`, (e, t) => {
        (ar.init(e, t),
          Qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ki(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Go = f(`ZodCustom`, (e, t) => {
        (or.init(e, t), Qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Pi(e, t, n, r)));
      })));
  }),
  qo = o(() => {
    Yi();
  }),
  Jo = o(() => {
    (Yi(), Ko(), Xi(), ca(), xa(), qo(), Ji(), fr(), Xi(), aa(), Ko(), we());
  }),
  Yo = o(() => {
    (Jo(), Jo());
  });
function Xo(e) {
  let t = as.safeParse(e);
  return t.success ? t.data : void 0;
}
function Zo(e) {
  if (!(typeof e != `object` || !e))
    try {
      let t = Object.getPrototypeOf(e);
      if (t !== Object.prototype && t != null) return;
      let n = Object.getOwnPropertyDescriptors(e),
        r = Reflect.ownKeys(n);
      if (
        r.length > es.maxKeys ||
        r.some((e) => !ns.safeParse(e).success) ||
        Object.values(n).some((e) => !e.enumerable || !Object.hasOwn(e, `value`))
      )
        return;
      let i = is.safeParse(Object.fromEntries(Object.entries(n).map(([e, t]) => [e, t.value])));
      return !i.success || !$o(JSON.stringify(i.data)) ? void 0 : i.data;
    } catch {
      return;
    }
}
function Qo(e) {
  if (!(e == null || !$o(e)))
    try {
      return Zo(JSON.parse(e));
    } catch {
      return;
    }
}
function $o(e) {
  return (
    e.length <= es.maxSerializedBytes &&
    new TextEncoder().encode(e).byteLength <= es.maxSerializedBytes
  );
}
var es,
  ts,
  ns,
  rs,
  is,
  as,
  os = o(() => {
    (Yo(),
      (es = {
        maxSerializedBytes: 2 * 1024,
        maxKeys: 6,
        maxKeyLength: 64,
        maxStringValueLength: 256,
      }),
      (ts = Ca().regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)),
      (ns = Ca()
        .max(es.maxKeyLength)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/)
        .refine((e) => e !== `__proto__` && e !== `constructor` && e !== `prototype`)),
      (rs = Na([ts.max(es.maxStringValueLength), wa(), Ea(), Da()])),
      (is = Ia(ns, rs)),
      (as = ts.max(128).refine((e) => e.trim().length > 0)));
  });
function ss(e) {
  return e.length > 0;
}
function cs(e) {
  return e.length;
}
function ls(e, t) {
  return t.map((t) => {
    let n = e.getPropertyValue(t).trim();
    return { property: t, value: n, previousValue: n };
  });
}
function us(e, t) {
  let n = new Map(t.map((e) => [e.property, e]));
  return e.map((e) => {
    let t = n.get(e.property);
    return t == null ? e : { ...e, previousValue: t.previousValue, value: t.value };
  });
}
function ds(e) {
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Vs)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ||
    Array.from(e.children).some((e) => (e.textContent?.replace(/\s+/g, ` `).trim().length ?? 0) > 0)
    ? null
    : t;
}
function fs(e) {
  let t = ds(e);
  if (t != null) return { value: t, previousValue: t };
}
function ps(e) {
  return e.map((e) => ({ property: e.property }));
}
function ms(e, t) {
  switch (e.mode) {
    case `create`:
      return t.mode === `create`;
    case `edit`:
      return t.mode === `edit` && e.commentId === t.commentId;
    case `design`:
      return t.mode === `design` && e.groupId === t.groupId;
  }
}
function hs(e) {
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
  return o == null || o.length === 0 ? null : { documentId: o, tabId: ys(t) ?? void 0 };
}
function gs(e) {
  return hs(e) != null || _s(e) != null;
}
function _s(e) {
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
function vs({ documentTitle: e, pageUrl: t, selectedText: n, visibleText: r }) {
  let i = hs(t);
  if (i == null) return;
  let a = bs(e),
    o = bs(n),
    s = bs(r);
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
function ys(e) {
  let t = bs(e.searchParams.get(`tab`));
  if (t != null) return t;
  let n = e.hash.startsWith(`#`) ? e.hash.slice(1) : e.hash;
  return bs(new URLSearchParams(n).get(`tab`)) ?? null;
}
function bs(e) {
  let t = e?.replace(/\s+/g, ` `).trim();
  return t == null || t.length === 0 ? void 0 : t;
}
function xs(e) {
  return e == null || e <= 0 ? 1 : 1 / e;
}
function Ss(e, { viewport: t, viewportScale: n, zoomFactor: r = 1 }) {
  let i = xs(n),
    a = Ms(e, r),
    o = t.width * r,
    s = t.height * r,
    c = 16 * i,
    l = Us * i,
    u = Math.min(Hs * i, o - c * 2),
    d = Ps(a.x, c, o - u - c),
    f = a.y - l - Ws * i,
    p = a.y + a.height + Ws * i;
  return { x: d, y: f >= c ? f : Ps(p, c, s - l - c), width: u, height: l };
}
function Cs(e, t = qs) {
  return e.flatMap((e) => Es(e, t)).join(`

`);
}
function ws(e) {
  let t = e.trim(),
    n = Os(t);
  if (n != null) return n;
  let r = ks(t);
  return r == null
    ? t
    : `#${js(r.red)}${js(r.green)}${js(r.blue)}${r.alpha == null ? `` : js(r.alpha)}`;
}
function Ts(e, t) {
  if (e.length < 2) return e;
  let n = 28.5,
    r = t - 16 - Gs / 2,
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
    let i = t.reduce((t, n) => t + e[n].x, 0) / t.length - ((t.length - 1) * Ks) / 2,
      o = i + (t.length - 1) * Ks,
      s = i < n ? n - i : o > r ? r - o : 0;
    t.forEach((t, o) => {
      a[t] = { x: Ps(i + o * Ks + s, n, r), y: e[t].y };
    });
  }
  return a;
}
function Es(e, t) {
  let n = e.declarations.filter((e) => e.value.trim() !== e.previousValue.trim());
  return n.length === 0
    ? []
    : [
        [
          `[${t}~="${Ds(e.draftAttribute)}"] {`,
          ...n.map((e) => `  ${e.property}: ${e.value} !important;`),
          `}`,
        ].join(`
`),
      ];
}
function Ds(e) {
  return e.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`);
}
function Os(e) {
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
function ks(e) {
  let t = e.match(/^rgba?\((.*)\)$/i)?.[1];
  if (t == null) return null;
  let [n, r] = t.split(`/`).map((e) => e.trim()),
    i = n.includes(`,`) ? n.split(`,`).map((e) => e.trim()) : n.split(/\s+/),
    a = r ?? i[3],
    o = Number.parseFloat(i[0] ?? ``),
    s = Number.parseFloat(i[1] ?? ``),
    c = Number.parseFloat(i[2] ?? ``);
  return [o, s, c].some(Number.isNaN)
    ? null
    : { alpha: a == null ? null : As(a), blue: c, green: s, red: o };
}
function As(e) {
  return e.endsWith(`%`) ? (Number.parseFloat(e) / 100) * 255 : Number.parseFloat(e) * 255;
}
function js(e) {
  return Math.round(Ps(e, 0, 255))
    .toString(16)
    .padStart(2, `0`)
    .toUpperCase();
}
function Ms(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function Ns(e, t) {
  let n = e ?? [],
    r = t ?? [];
  return (
    n.length === r.length &&
    n.every((e, t) => {
      let n = r[t];
      return (
        n != null &&
        e.selector === n.selector &&
        e.scrollLeft === n.scrollLeft &&
        e.scrollTop === n.scrollTop
      );
    })
  );
}
function Ps(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Fs(e, t) {
  if (
    e.kind !== t.kind ||
    !(
      e.pageUrl === t.pageUrl &&
      e.title === t.title &&
      e.elementPath === t.elementPath &&
      e.frameUrl === t.frameUrl &&
      e.framePath.length === t.framePath.length &&
      e.framePath.every((e, n) => e === t.framePath[n]) &&
      Ns(e.scrollContainers, t.scrollContainers) &&
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
          return (
            r != null && e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height
          );
        })
      );
  }
}
function Is(e, t) {
  return e.x >= 0 && e.y >= 0 && e.x < t.width && e.y < t.height;
}
function Ls(e, t, n = 4) {
  return Math.abs(t.x - e.x) >= n || Math.abs(t.y - e.y) >= n;
}
function Rs(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    width: Math.abs(t.x - e.x),
    height: Math.abs(t.y - e.y),
  };
}
var zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs = o(() => {
    (Yo(),
      os(),
      (zs = Ca().max(240)),
      (Bs = { BATCH: `batch`, QUICK: `quick` }),
      Bs.BATCH,
      Bs.QUICK,
      (Vs = 3),
      (Hs = 240),
      (Us = 72),
      (Ws = 8),
      (Gs = 25),
      (Ks = Gs / 2),
      (qs = `data-codex-browser-design-group`),
      (Js = `
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
      (Ys = { height: 25, hotspot: { x: 4.0791, y: 22.8209 }, width: 26 }),
      (Xs = Ys.width),
      (Zs = { defaultLocale: `en-US`, locale: `en-US`, messages: {} }));
  });
function $s(e) {
  return Math.min(rc, Math.max(nc, e));
}
function ec(e) {
  return $s(e) / 100;
}
var tc,
  nc,
  rc,
  ic = o(() => {
    ((tc = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500]),
      (nc = tc[0]),
      (rc = tc[tc.length - 1]));
  });
(Qs(), ic());
var ac = `codex_desktop:message-for-view`,
  oc = `codex_desktop:browser-sidebar-runtime-message`,
  sc = `codex_desktop:browser-page-event`;
function cc(e) {
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
var lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c,
  vc,
  yc = o(() => {
    (Yo(),
      (lc = Ca()
        .max(512)
        .regex(/^[^\u0000-\u001f\u007f-\u009f\u061c\u200e\u200f\u2028-\u202e\u2066-\u2069]*$/u)),
      (uc = lc.trim().min(1).max(80)),
      (dc = Ca()
        .trim()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*$/)),
      (fc = Ca()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z0-9_./:@$#-]+$/)),
      (pc = wa().min(-1e4).max(1e4)),
      (mc = lc.regex(/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)),
      (hc = Na([lc, pc, Ea()])),
      Aa(
        Ma({ label: uc, reference: fc.optional(), previousValue: hc.optional(), value: hc }).refine(
          (e) => e.previousValue == null || typeof e.previousValue == typeof e.value,
          { message: `Control changes must preserve the original value type`, path: [`value`] },
        ),
      ).max(12),
      (gc = Ma({ callback: dc, label: uc, reference: fc.optional() })),
      (_c = Pa(`type`, [
        gc.extend({ currentValue: mc.optional(), defaultValue: mc.optional(), type: Ra(`color`) }),
        gc.extend({
          currentValue: lc.optional(),
          defaultValue: lc.optional(),
          options: Aa(Ma({ label: uc, value: lc }))
            .min(1)
            .max(12),
          type: Ra(`select`),
        }),
        gc.extend({
          currentValue: pc.optional(),
          defaultValue: pc.optional(),
          max: pc,
          min: pc,
          step: wa().min(0.001).max(1e4),
          type: Ra(`range`),
        }),
        gc.extend({
          currentValue: Ea().optional(),
          defaultValue: Ea().optional(),
          type: Ra(`toggle`),
        }),
      ]).superRefine((e, t) => {
        if (e.type === `range`) {
          (e.min >= e.max || e.step > e.max - e.min) &&
            t.addIssue({
              code: `custom`,
              message: `Ranges require valid bounds and step`,
              path: [`min`],
            });
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
      Ma({ callback: dc, previousValue: hc.optional(), value: hc }).superRefine((e, t) => {
        e.previousValue != null &&
          typeof e.previousValue != typeof e.value &&
          t.addIssue({
            code: `custom`,
            message: `Control changes must preserve the original value type`,
            path: [`value`],
          });
      }),
      (vc = Ma({
        controls: Aa(_c).max(12),
        controlsMode: La([`extend`, `replace`]).optional(),
      }).superRefine(({ controls: e }, t) => {
        new Set(e.map((e) => e.callback)).size !== e.length &&
          t.addIssue({
            code: `custom`,
            message: `Each control must have a unique callback`,
            path: [`controls`],
          });
      })));
  });
(yc(), Yo());
var bc = 64,
  xc = 128,
  Sc = 1024,
  Cc = 16384,
  wc = `codex:register-annotation-controls`,
  Tc = `codex:update-annotation-controls`,
  Ec = `codex:dispose-annotation-controls`,
  Dc = `codex-browser-sidebar-comments-root`,
  Oc = Ma({ controls: vc.shape.controls.optional(), controlsMode: vc.shape.controlsMode });
function kc() {
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
        let r = Ac(t);
        if (r == null) return;
        let s = jc(r, `id`),
          c = jc(r, `payload`),
          l = jc(r, `targets`);
        if (typeof s != `string` || s.length === 0 || s.length > 80 || n.has(s) || n.size >= bc)
          return;
        let u = Mc(c);
        if (u == null) return;
        let d = Nc(e, l);
        if (d == null || d.size === 0 || n.has(s) || n.size >= bc || i + d.size > Sc) return;
        let f = { controls: u, id: s, order: a++, targets: [] };
        (n.set(s, f), o(f, d), t.preventDefault());
      } catch {}
    },
    l = (t) => {
      try {
        let r = Ac(t);
        if (r == null) return;
        let a = jc(r, `id`),
          c = jc(r, `payload`),
          l = jc(r, `targets`);
        if (typeof a != `string`) return;
        let u = n.get(a);
        if (u == null) return;
        let d = l === void 0 ? void 0 : Nc(e, l);
        if ((l !== void 0 && d == null) || n.get(a) !== u) return;
        let f = Mc(c, u.controls);
        if (f == null || (d != null && i - u.targets.length + d.size > Sc)) return;
        ((u.controls = f), d != null && (s(u), o(u, d)), t.preventDefault());
      } catch {}
    },
    u = (e) => {
      try {
        let t = Ac(e);
        if (t == null) return;
        let r = jc(t, `id`);
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
        t.removeEventListener(wc, c),
        t.removeEventListener(Tc, l),
        t.removeEventListener(Ec, u),
        t.removeEventListener(`pagehide`, f));
    },
    f = (e) => {
      e.isTrusted && !e.persisted && d();
    };
  return (
    t.addEventListener(wc, c),
    t.addEventListener(Tc, l),
    t.addEventListener(Ec, u),
    t.addEventListener(`pagehide`, f),
    {
      dispose: d,
      getControls(t) {
        return t.ownerDocument === e ? r.get(t)?.at(-1)?.controls : void 0;
      },
    }
  );
}
function Ac(e) {
  if (!(e instanceof CustomEvent)) return;
  let t = e.detail;
  return typeof t == `object` && t ? t : void 0;
}
function jc(e, t) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n != null && `value` in n ? n.value : void 0;
}
function Mc(e, t) {
  if (!(typeof e != `string` || e.length > Cc))
    try {
      let n = JSON.parse(e);
      if (t != null) {
        let e = Oc.safeParse(n);
        if (!e.success) return;
        n = { ...t, ...e.data };
      }
      let r = vc.safeParse(n);
      return r.success ? r.data : void 0;
    } catch {
      return;
    }
}
function Nc(e, t) {
  if (!Array.isArray(t)) return;
  let n = t.length;
  if (!Number.isSafeInteger(n) || n < 0 || n > xc) return;
  let r = new Set();
  for (let i = 0; i < n; i += 1) {
    let n = jc(t, String(i));
    if (!(n instanceof Element) || n.ownerDocument !== e || Pc(e, n)) return;
    r.add(n);
  }
  return r;
}
function Pc(e, t) {
  let n = e.getElementById?.(Dc);
  return n != null && (n === t || n.contains(t) || n.shadowRoot?.contains(t) === !0);
}
function Fc(e, t) {
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
var Ic = function (e, t, n) {
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
  Lc = s((e) => {
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
    var ee = Array.isArray;
    function te() {}
    var S = { H: null, A: null, T: null, S: null },
      C = Object.prototype.hasOwnProperty;
    function ne(e, n, r) {
      var i = r.ref;
      return { $$typeof: t, type: e, key: n, ref: i === void 0 ? null : i, props: r };
    }
    function re(e, t) {
      return ne(e.type, t, e.props);
    }
    function ie(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function w(e) {
      var t = { "=": `=0`, ":": `=2` };
      return (
        `$` +
        e.replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var ae = /\/+/g;
    function oe(e, t) {
      return typeof e == `object` && e && e.key != null ? w(`` + e.key) : t.toString(36);
    }
    function se(e) {
      switch (e.status) {
        case `fulfilled`:
          return e.value;
        case `rejected`:
          throw e.reason;
        default:
          switch (
            (typeof e.status == `string`
              ? e.then(te, te)
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
    function T(e, r, i, a, o) {
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
                return ((c = e._init), T(c(e._payload), r, i, a, o));
            }
        }
      if (c)
        return (
          (o = o(e)),
          (c = a === `` ? `.` + oe(e, 0) : a),
          ee(o)
            ? ((i = ``),
              c != null && (i = c.replace(ae, `$&/`) + `/`),
              T(o, r, i, ``, function (e) {
                return e;
              }))
            : o != null &&
              (ie(o) &&
                (o = re(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ae, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (ee(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + oe(a, u)), (c += T(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + oe(a, u++)), (c += T(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return T(se(e), r, i, a, o);
        throw (
          (r = String(e)),
          Error(
            `Objects are not valid as a React child (found: ` +
              (r === `[object Object]`
                ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                : r) +
              `). If you meant to render a collection of children, use an array instead.`,
          )
        );
      }
      return c;
    }
    function E(e, t, n) {
      if (e == null) return e;
      var r = [],
        i = 0;
      return (
        T(e, r, ``, ``, function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function D(e) {
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
    var ce =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      le = {
        map: E,
        forEach: function (e, t, n) {
          E(
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
            E(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            E(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!ie(e))
            throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = le),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = a),
      (e.PureComponent = b),
      (e.StrictMode = i),
      (e.Suspense = l),
      (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
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
        if (e == null)
          throw Error(`The argument must be a React element, but you passed ` + e + `.`);
        var r = g({}, e.props),
          i = e.key;
        if (t != null)
          for (a in (t.key !== void 0 && (i = `` + t.key), t))
            !C.call(t, a) ||
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
        return ne(e.type, i, r);
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
            C.call(t, r) && r !== `key` && r !== `__self` && r !== `__source` && (i[r] = t[r]);
        var o = arguments.length - 2;
        if (o === 1) i.children = n;
        else if (1 < o) {
          for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
          i.children = s;
        }
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return ne(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ie),
      (e.lazy = function (e) {
        return { $$typeof: d, _payload: { _status: -1, _result: e }, _init: D };
      }),
      (e.memo = function (e, t) {
        return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
      }),
      (e.startTransition = function (e) {
        var t = S.T,
          n = {};
        S.T = n;
        try {
          var r = e(),
            i = S.S;
          (i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(te, ce));
        } catch (e) {
          ce(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (S.T = t));
        }
      }),
      (e.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (e.use = function (e) {
        return S.H.use(e);
      }),
      (e.useActionState = function (e, t, n) {
        return S.H.useActionState(e, t, n);
      }),
      (e.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (e.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (e.useDebugValue = function () {}),
      (e.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (e.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (e.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (e.useId = function () {
        return S.H.useId();
      }),
      (e.useImperativeHandle = function (e, t, n) {
        return S.H.useImperativeHandle(e, t, n);
      }),
      (e.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (e.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (e.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (e.useReducer = function (e, t, n) {
        return S.H.useReducer(e, t, n);
      }),
      (e.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (e.useState = function (e) {
        return S.H.useState(e);
      }),
      (e.useSyncExternalStore = function (e, t, n) {
        return S.H.useSyncExternalStore(e, t, n);
      }),
      (e.useTransition = function () {
        return S.H.useTransition();
      }),
      (e.version = `19.2.7`));
  }),
  Rc = s((e, t) => {
    t.exports = Lc();
  }),
  zc = s((e) => {
    var t = Rc();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
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
            ? ((t = t.crossOrigin),
              (t = typeof t == `string` ? (t === `use-credentials` ? t : ``) : void 0))
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
        if (typeof e == `string`)
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
        if (typeof e == `string`)
          if (t) {
            var n = c(t.as, t.crossOrigin);
            i.d.m(e, {
              as: typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
            });
          } else i.d.m(e);
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
  Bc = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = zc()));
  }),
  Vc = s((e) => {
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
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
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
    if (
      ((e.unstable_now = void 0),
      typeof performance == `object` && typeof performance.now == `function`)
    ) {
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
      if (((h = !1), b(e), !m))
        if (n(c) !== null) ((m = !0), ee || ((ee = !0), ie()));
        else {
          var t = n(l);
          t !== null && oe(x, t.startTime - e);
        }
    }
    var ee = !1,
      te = -1,
      S = 5,
      C = -1;
    function ne() {
      return g ? !0 : !(e.unstable_now() - C < S);
    }
    function re() {
      if (((g = !1), ee)) {
        var t = e.unstable_now();
        C = t;
        var i = !0;
        try {
          a: {
            ((m = !1), h && ((h = !1), v(te), (te = -1)), (p = !0));
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && ne());) {
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
                  (u !== null && oe(x, u.startTime - t), (i = !1));
                }
              }
              break a;
            } finally {
              ((d = null), (f = a), (p = !1));
            }
            i = void 0;
          }
        } finally {
          i ? ie() : (ee = !1);
        }
      }
    }
    var ie;
    if (typeof y == `function`)
      ie = function () {
        y(re);
      };
    else if (typeof MessageChannel < `u`) {
      var w = new MessageChannel(),
        ae = w.port2;
      ((w.port1.onmessage = re),
        (ie = function () {
          ae.postMessage(null);
        }));
    } else
      ie = function () {
        _(re, 0);
      };
    function oe(t, n) {
      te = _(function () {
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
          : (S = 0 < e ? Math.floor(1e3 / e) : 5);
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
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null && r === n(l) && (h ? (v(te), (te = -1)) : (h = !0), oe(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), ee || ((ee = !0), ie()))),
          r
        );
      }),
      (e.unstable_shouldYield = ne),
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
  Hc = s((e, t) => {
    t.exports = Vc();
  }),
  Uc = s((e) => {
    var t = Hc(),
      n = Rc(),
      r = Bc();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += `&args[]=` + encodeURIComponent(arguments[n]);
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
      ee = Symbol.for(`react.suspense`),
      te = Symbol.for(`react.suspense_list`),
      S = Symbol.for(`react.memo`),
      C = Symbol.for(`react.lazy`),
      ne = Symbol.for(`react.activity`),
      re = Symbol.for(`react.memo_cache_sentinel`),
      ie = Symbol.iterator;
    function w(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ie && e[ie]) || e[`@@iterator`]), typeof e == `function` ? e : null);
    }
    var ae = Symbol.for(`react.client.reference`);
    function oe(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === ae ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case g:
          return `Fragment`;
        case v:
          return `Profiler`;
        case _:
          return `StrictMode`;
        case ee:
          return `Suspense`;
        case te:
          return `SuspenseList`;
        case ne:
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
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case S:
            return ((t = e.displayName || null), t === null ? oe(e.type) || `Memo` : t);
          case C:
            ((t = e._payload), (e = e._init));
            try {
              return oe(e(t));
            } catch {}
        }
      return null;
    }
    var se = Array.isArray,
      T = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      E = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      D = { pending: !1, data: null, method: null, action: null },
      ce = [],
      le = -1;
    function ue(e) {
      return { current: e };
    }
    function de(e) {
      0 > le || ((e.current = ce[le]), (ce[le] = null), le--);
    }
    function O(e, t) {
      (le++, (ce[le] = e.current), (e.current = t));
    }
    var fe = ue(null),
      pe = ue(null),
      me = ue(null),
      he = ue(null);
    function ge(e, t) {
      switch ((O(me, t), O(pe, e), O(fe, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Qd(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Qd(t)), (e = $d(t, e)));
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
      (de(fe), O(fe, e));
    }
    function _e() {
      (de(fe), de(pe), de(me));
    }
    function ve(e) {
      e.memoizedState !== null && O(he, e);
      var t = fe.current,
        n = $d(t, e.type);
      t !== n && (O(pe, e), O(fe, n));
    }
    function k(e) {
      (pe.current === e && (de(fe), de(pe)), he.current === e && (de(he), (cp._currentValue = D)));
    }
    var ye, A;
    function j(e) {
      if (ye === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ye = (t && t[1]) || ``),
            (A =
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
        ye +
        e +
        A
      );
    }
    var be = !1;
    function xe(e, t) {
      if (!e || be) return ``;
      be = !0;
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
        ((be = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? j(n) : ``;
    }
    function Se(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return j(e.type);
        case 16:
          return j(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? j(`Suspense Fallback`) : j(`Suspense`);
        case 19:
          return j(`SuspenseList`);
        case 0:
        case 15:
          return xe(e.type, !1);
        case 11:
          return xe(e.type.render, !1);
        case 1:
          return xe(e.type, !0);
        case 31:
          return j(`Activity`);
        default:
          return ``;
      }
    }
    function Ce(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Se(e, n)), (n = e), (e = e.return));
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
    var we = Object.prototype.hasOwnProperty,
      Te = t.unstable_scheduleCallback,
      Ee = t.unstable_cancelCallback,
      De = t.unstable_shouldYield,
      Oe = t.unstable_requestPaint,
      ke = t.unstable_now,
      Ae = t.unstable_getCurrentPriorityLevel,
      je = t.unstable_ImmediatePriority,
      Me = t.unstable_UserBlockingPriority,
      Ne = t.unstable_NormalPriority,
      Pe = t.unstable_LowPriority,
      Fe = t.unstable_IdlePriority,
      Ie = t.log,
      Le = t.unstable_setDisableYieldValue,
      Re = null,
      ze = null;
    function Be(e) {
      if ((typeof Ie == `function` && Le(e), ze && typeof ze.setStrictMode == `function`))
        try {
          ze.setStrictMode(Re, e);
        } catch {}
    }
    var Ve = Math.clz32 ? Math.clz32 : We,
      He = Math.log,
      Ue = Math.LN2;
    function We(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((He(e) / Ue) | 0)) | 0);
    }
    var Ge = 256,
      Ke = 262144,
      qe = 4194304;
    function Je(e) {
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
    function Ye(e, t, n) {
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
            s === 0
              ? o === 0
                ? n || ((n = r & ~e), n !== 0 && (i = Je(n)))
                : (i = Je(o))
              : (i = Je(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Je(n))) : (i = Je(o)))
              : (i = Je(r))),
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
    function Xe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ze(e, t) {
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
    function Qe() {
      var e = qe;
      return ((qe <<= 1), !(qe & 62914560) && (qe = 4194304), e);
    }
    function $e(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function et(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function tt(e, t, n, r, i, a) {
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
        var u = 31 - Ve(n),
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
      (r !== 0 && nt(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function nt(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Ve(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function rt(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Ve(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function it(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : at(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function at(e) {
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
    function ot(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function st() {
      var e = E.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : wp(e.type)) : e;
    }
    function ct(e, t) {
      var n = E.p;
      try {
        return ((E.p = e), t());
      } finally {
        E.p = n;
      }
    }
    var lt = Math.random().toString(36).slice(2),
      M = `__reactFiber$` + lt,
      ut = `__reactProps$` + lt,
      dt = `__reactContainer$` + lt,
      ft = `__reactEvents$` + lt,
      pt = `__reactListeners$` + lt,
      mt = `__reactHandles$` + lt,
      ht = `__reactResources$` + lt,
      gt = `__reactMarker$` + lt;
    function _t(e) {
      (delete e[M], delete e[ut], delete e[ft], delete e[pt], delete e[mt]);
    }
    function vt(e) {
      var t = e[M];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[dt] || n[M])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = Sf(e); e !== null;) {
              if ((n = e[M])) return n;
              e = Sf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function yt(e) {
      if ((e = e[M] || e[dt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function bt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function xt(e) {
      var t = e[ht];
      return ((t ||= e[ht] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function St(e) {
      e[gt] = !0;
    }
    var Ct = new Set(),
      wt = {};
    function Tt(e, t) {
      (Et(e, t), Et(e + `Capture`, t));
    }
    function Et(e, t) {
      for (wt[e] = t, e = 0; e < t.length; e++) Ct.add(t[e]);
    }
    var Dt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Ot = {},
      kt = {};
    function At(e) {
      return we.call(kt, e)
        ? !0
        : we.call(Ot, e)
          ? !1
          : Dt.test(e)
            ? (kt[e] = !0)
            : ((Ot[e] = !0), !1);
    }
    function jt(e, t, n) {
      if (At(t))
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
    function Mt(e, t, n) {
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
    function Nt(e, t, n, r) {
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
    function Pt(e) {
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
    function Ft(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function It(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (
        !e.hasOwnProperty(t) &&
        r !== void 0 &&
        typeof r.get == `function` &&
        typeof r.set == `function`
      ) {
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
    function Lt(e) {
      if (!e._valueTracker) {
        var t = Ft(e) ? `checked` : `value`;
        e._valueTracker = It(e, t, `` + e[t]);
      }
    }
    function Rt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ft(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e === n ? !1 : (t.setValue(e), !0)
      );
    }
    function zt(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bt = /[\n"\\]/g;
    function Vt(e) {
      return e.replace(Bt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function Ht(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + Pt(t))
            : e.value !== `` + Pt(t) && (e.value = `` + Pt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Wt(e, o, Pt(n))
          : Wt(e, o, Pt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + Pt(s))
          : e.removeAttribute(`name`));
    }
    function Ut(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Lt(e);
          return;
        }
        ((n = n == null ? `` : `` + Pt(n)),
          (t = t == null ? n : `` + Pt(t)),
          s || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r ??= i),
        (r = typeof r != `function` && typeof r != `symbol` && !!r),
        (e.checked = s ? e.checked : !!r),
        (e.defaultChecked = !!r),
        o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean` &&
          (e.name = o),
        Lt(e));
    }
    function Wt(e, t, n) {
      (t === `number` && zt(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Gt(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Pt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Kt(e, t, n) {
      if (t != null && ((t = `` + Pt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + Pt(n);
    }
    function qt(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (se(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        ((n ??= ``), (t = n));
      }
      ((n = Pt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Lt(e));
    }
    function Jt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Yt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function Xt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Yt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Zt(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (((e = e.style), n != null)) {
        for (var r in n)
          !n.hasOwnProperty(r) ||
            (t != null && t.hasOwnProperty(r)) ||
            (r.indexOf(`--`) === 0
              ? e.setProperty(r, ``)
              : r === `float`
                ? (e.cssFloat = ``)
                : (e[r] = ``));
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Xt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && Xt(e, o, t[o]);
    }
    function Qt(e) {
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
    var $t = new Map([
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
      en =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tn(e) {
      return en.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function nn() {}
    var rn = null;
    function an(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var on = null,
      sn = null;
    function cn(e) {
      var t = yt(e);
      if (t && (e = t.stateNode)) {
        var n = e[ut] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (Ht(
                e,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name,
              ),
              (t = n.name),
              n.type === `radio` && t != null)
            ) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(`input[name="` + Vt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ut] || null;
                  if (!a) throw Error(i(90));
                  Ht(
                    r,
                    a.value,
                    a.defaultValue,
                    a.defaultValue,
                    a.checked,
                    a.defaultChecked,
                    a.type,
                    a.name,
                  );
                }
              }
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Rt(r));
            }
            break a;
          case `textarea`:
            Kt(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Gt(e, !!n.multiple, t, !1));
        }
      }
    }
    var ln = !1;
    function un(e, t, n) {
      if (ln) return e(t, n);
      ln = !0;
      try {
        return e(t);
      } finally {
        if (
          ((ln = !1),
          (on !== null || sn !== null) &&
            (ku(), on && ((t = on), (e = sn), (sn = on = null), cn(t), e)))
        )
          for (t = 0; t < e.length; t++) cn(e[t]);
      }
    }
    function dn(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ut] || null;
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
            ((e = e.type),
            (r = !(e === `button` || e === `input` || e === `select` || e === `textarea`))),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var fn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      pn = !1;
    if (fn)
      try {
        var mn = {};
        (Object.defineProperty(mn, "passive", {
          get: function () {
            pn = !0;
          },
        }),
          window.addEventListener(`test`, mn, mn),
          window.removeEventListener(`test`, mn, mn));
      } catch {
        pn = !1;
      }
    var hn = null,
      gn = null,
      _n = null;
    function vn() {
      if (_n) return _n;
      var e,
        t = gn,
        n = t.length,
        r,
        i = `value` in hn ? hn.value : hn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (_n = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function yn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function bn() {
      return !0;
    }
    function xn() {
      return !1;
    }
    function Sn(e) {
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
          (this.isDefaultPrevented = (
            i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented
          )
            ? bn
            : xn),
          (this.isPropagationStopped = xn),
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
              (this.isDefaultPrevented = bn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = bn));
          },
          persist: function () {},
          isPersistent: bn,
        }),
        t
      );
    }
    var Cn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      wn = Sn(Cn),
      Tn = f({}, Cn, { view: 0, detail: 0 }),
      En = Sn(Tn),
      Dn,
      On,
      kn,
      An = f({}, Tn, {
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
        getModifierState: Vn,
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
            : (e !== kn &&
                (kn && e.type === `mousemove`
                  ? ((Dn = e.screenX - kn.screenX), (On = e.screenY - kn.screenY))
                  : (On = Dn = 0),
                (kn = e)),
              Dn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : On;
        },
      }),
      jn = Sn(An),
      Mn = Sn(f({}, An, { dataTransfer: 0 })),
      Nn = Sn(f({}, Tn, { relatedTarget: 0 })),
      Pn = Sn(f({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Fn = Sn(
        f({}, Cn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      In = Sn(f({}, Cn, { data: 0 })),
      Ln = {
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
      Rn = {
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
      zn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Bn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = zn[e]) ? !!t[e] : !1;
    }
    function Vn() {
      return Bn;
    }
    var Hn = Sn(
        f({}, Tn, {
          key: function (e) {
            if (e.key) {
              var t = Ln[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = yn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Rn[e.keyCode] || `Unidentified`
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
          getModifierState: Vn,
          charCode: function (e) {
            return e.type === `keypress` ? yn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? yn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Un = Sn(
        f({}, An, {
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
      Wn = Sn(
        f({}, Tn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Vn,
        }),
      ),
      Gn = Sn(f({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Kn = Sn(
        f({}, An, {
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
      qn = Sn(f({}, Cn, { newState: 0, oldState: 0 })),
      Jn = [9, 13, 27, 32],
      Yn = fn && `CompositionEvent` in window,
      Xn = null;
    fn && `documentMode` in document && (Xn = document.documentMode);
    var Zn = fn && `TextEvent` in window && !Xn,
      Qn = fn && (!Yn || (Xn && 8 < Xn && 11 >= Xn)),
      $n = ` `,
      er = !1;
    function tr(e, t) {
      switch (e) {
        case `keyup`:
          return Jn.indexOf(t.keyCode) !== -1;
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
    function nr(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var rr = !1;
    function ir(e, t) {
      switch (e) {
        case `compositionend`:
          return nr(t);
        case `keypress`:
          return t.which === 32 ? ((er = !0), $n) : null;
        case `textInput`:
          return ((e = t.data), e === $n && er ? null : e);
        default:
          return null;
      }
    }
    function ar(e, t) {
      if (rr)
        return e === `compositionend` || (!Yn && tr(e, t))
          ? ((e = vn()), (_n = gn = hn = null), (rr = !1), e)
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
          return Qn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var or = {
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
    function sr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!or[e.type] : t === `textarea`;
    }
    function cr(e, t, n, r) {
      (on ? (sn ? sn.push(r) : (sn = [r])) : (on = r),
        (t = Id(t, `onChange`)),
        0 < t.length &&
          ((n = new wn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var lr = null,
      ur = null;
    function dr(e) {
      kd(e, 0);
    }
    function fr(e) {
      if (Rt(bt(e))) return e;
    }
    function pr(e, t) {
      if (e === `change`) return t;
    }
    var mr = !1;
    if (fn) {
      var hr;
      if (fn) {
        var gr = `oninput` in document;
        if (!gr) {
          var _r = document.createElement(`div`);
          (_r.setAttribute(`oninput`, `return;`), (gr = typeof _r.oninput == `function`));
        }
        hr = gr;
      } else hr = !1;
      mr = hr && (!document.documentMode || 9 < document.documentMode);
    }
    function vr() {
      lr && (lr.detachEvent(`onpropertychange`, yr), (ur = lr = null));
    }
    function yr(e) {
      if (e.propertyName === `value` && fr(ur)) {
        var t = [];
        (cr(t, ur, e, an(e)), un(dr, t));
      }
    }
    function br(e, t, n) {
      e === `focusin`
        ? (vr(), (lr = t), (ur = n), lr.attachEvent(`onpropertychange`, yr))
        : e === `focusout` && vr();
    }
    function xr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return fr(ur);
    }
    function Sr(e, t) {
      if (e === `click`) return fr(t);
    }
    function Cr(e, t) {
      if (e === `input` || e === `change`) return fr(t);
    }
    function wr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Tr = typeof Object.is == `function` ? Object.is : wr;
    function Er(e, t) {
      if (Tr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!we.call(t, i) || !Tr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Dr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Or(e, t) {
      var n = Dr(e);
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
        n = Dr(n);
      }
    }
    function kr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? kr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ar(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = zt(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = zt(e.document);
      }
      return t;
    }
    function jr(e) {
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
    var Mr = fn && `documentMode` in document && 11 >= document.documentMode,
      Nr = null,
      Pr = null,
      Fr = null,
      Ir = !1;
    function Lr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Ir ||
        Nr == null ||
        Nr !== zt(r) ||
        ((r = Nr),
        `selectionStart` in r && jr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Fr && Er(Fr, r)) ||
          ((Fr = r),
          (r = Id(Pr, `onSelect`)),
          0 < r.length &&
            ((t = new wn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Nr))));
    }
    function Rr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var zr = {
        animationend: Rr(`Animation`, `AnimationEnd`),
        animationiteration: Rr(`Animation`, `AnimationIteration`),
        animationstart: Rr(`Animation`, `AnimationStart`),
        transitionrun: Rr(`Transition`, `TransitionRun`),
        transitionstart: Rr(`Transition`, `TransitionStart`),
        transitioncancel: Rr(`Transition`, `TransitionCancel`),
        transitionend: Rr(`Transition`, `TransitionEnd`),
      },
      Br = {},
      Vr = {};
    fn &&
      ((Vr = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete zr.animationend.animation,
        delete zr.animationiteration.animation,
        delete zr.animationstart.animation),
      `TransitionEvent` in window || delete zr.transitionend.transition);
    function Hr(e) {
      if (Br[e]) return Br[e];
      if (!zr[e]) return e;
      var t = zr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Vr) return (Br[e] = t[n]);
      return e;
    }
    var Ur = Hr(`animationend`),
      Wr = Hr(`animationiteration`),
      Gr = Hr(`animationstart`),
      Kr = Hr(`transitionrun`),
      qr = Hr(`transitionstart`),
      Jr = Hr(`transitioncancel`),
      Yr = Hr(`transitionend`),
      Xr = new Map(),
      Zr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Zr.push(`scrollEnd`);
    function Qr(e, t) {
      (Xr.set(e, t), Tt(t, [e]));
    }
    var $r =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (typeof process == `object` && typeof process.emit == `function`) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            },
      ei = [],
      ti = 0,
      ni = 0;
    function ri() {
      for (var e = ti, t = (ni = ti = 0); t < e;) {
        var n = ei[t];
        ei[t++] = null;
        var r = ei[t];
        ei[t++] = null;
        var i = ei[t];
        ei[t++] = null;
        var a = ei[t];
        if (((ei[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && si(n, i, a);
      }
    }
    function ii(e, t, n, r) {
      ((ei[ti++] = e),
        (ei[ti++] = t),
        (ei[ti++] = n),
        (ei[ti++] = r),
        (ni |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ai(e, t, n, r) {
      return (ii(e, t, n, r), ci(e));
    }
    function oi(e, t) {
      return (ii(e, null, null, t), ci(e));
    }
    function si(e, t, n) {
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
            ((i = 31 - Ve(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ci(e) {
      if (50 < bu) throw ((bu = 0), (xu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var li = {};
    function ui(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
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
    function di(e, t, n, r) {
      return new ui(e, t, n, r);
    }
    function fi(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function pi(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = di(e.tag, t, e.key, e.mode)),
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
    function mi(e, t) {
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
            (e.dependencies =
              t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function hi(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) fi(e) && (s = 1);
      else if (typeof e == `string`)
        s = $f(e, n, fe.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case ne:
            return ((e = di(31, n, t, a)), (e.elementType = ne), (e.lanes = o), e);
          case g:
            return gi(n.children, a, o, t);
          case _:
            ((s = 8), (a |= 24));
            break;
          case v:
            return ((e = di(12, n, t, a | 2)), (e.elementType = v), (e.lanes = o), e);
          case ee:
            return ((e = di(13, n, t, a)), (e.elementType = ee), (e.lanes = o), e);
          case te:
            return ((e = di(19, n, t, a)), (e.elementType = te), (e.lanes = o), e);
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
                case S:
                  s = 14;
                  break a;
                case C:
                  ((s = 16), (r = null));
                  break a;
              }
            ((s = 29), (n = Error(i(130, e === null ? `null` : typeof e, ``))), (r = null));
        }
      return ((t = di(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function gi(e, t, n, r) {
      return ((e = di(7, e, r, t)), (e.lanes = n), e);
    }
    function _i(e, t, n) {
      return ((e = di(6, e, null, t)), (e.lanes = n), e);
    }
    function vi(e) {
      var t = di(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function yi(e, t, n) {
      return (
        (t = di(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var bi = new WeakMap();
    function xi(e, t) {
      if (typeof e == `object` && e) {
        var n = bi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: Ce(t) }), bi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: Ce(t) };
    }
    var Si = [],
      Ci = 0,
      wi = null,
      Ti = 0,
      Ei = [],
      Di = 0,
      Oi = null,
      ki = 1,
      Ai = ``;
    function ji(e, t) {
      ((Si[Ci++] = Ti), (Si[Ci++] = wi), (wi = e), (Ti = t));
    }
    function Mi(e, t, n) {
      ((Ei[Di++] = ki), (Ei[Di++] = Ai), (Ei[Di++] = Oi), (Oi = e));
      var r = ki;
      e = Ai;
      var i = 32 - Ve(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Ve(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (ki = (1 << (32 - Ve(t) + i)) | (n << i) | r),
          (Ai = a + e));
      } else ((ki = (1 << a) | (n << i) | r), (Ai = e));
    }
    function Ni(e) {
      e.return !== null && (ji(e, 1), Mi(e, 1, 0));
    }
    function Pi(e) {
      for (; e === wi;) ((wi = Si[--Ci]), (Si[Ci] = null), (Ti = Si[--Ci]), (Si[Ci] = null));
      for (; e === Oi;)
        ((Oi = Ei[--Di]),
          (Ei[Di] = null),
          (Ai = Ei[--Di]),
          (Ei[Di] = null),
          (ki = Ei[--Di]),
          (Ei[Di] = null));
    }
    function Fi(e, t) {
      ((Ei[Di++] = ki), (Ei[Di++] = Ai), (Ei[Di++] = Oi), (ki = t.id), (Ai = t.overflow), (Oi = e));
    }
    var Ii = null,
      Li = null,
      N = !1,
      Ri = null,
      zi = !1,
      Bi = Error(i(519));
    function Vi(e) {
      throw (
        qi(
          xi(
            Error(
              i(
                418,
                1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`,
                ``,
              ),
            ),
            e,
          ),
        ),
        Bi
      );
    }
    function Hi(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[M] = e), (t[ut] = r), n)) {
        case `dialog`:
          (H(`cancel`, t), H(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          H(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < Dd.length; n++) H(Dd[n], t);
          break;
        case `source`:
          H(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (H(`error`, t), H(`load`, t));
          break;
        case `details`:
          H(`toggle`, t);
          break;
        case `input`:
          (H(`invalid`, t),
            Ut(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          H(`invalid`, t);
          break;
        case `textarea`:
          (H(`invalid`, t), qt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Hd(t.textContent, n)
          ? (r.popover != null && (H(`beforetoggle`, t), H(`toggle`, t)),
            r.onScroll != null && H(`scroll`, t),
            r.onScrollEnd != null && H(`scrollend`, t),
            r.onClick != null && (t.onclick = nn),
            (t = !0))
          : (t = !1),
        t || Vi(e, !0));
    }
    function Ui(e) {
      for (Ii = e.return; Ii;)
        switch (Ii.tag) {
          case 5:
          case 31:
          case 13:
            zi = !1;
            return;
          case 27:
          case 3:
            zi = !0;
            return;
          default:
            Ii = Ii.return;
        }
    }
    function Wi(e) {
      if (e !== Ii) return !1;
      if (!N) return (Ui(e), (N = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = !(n !== `form` && n !== `button`) || ef(e.type, e.memoizedProps))),
          (n = !n)),
        n && Li && Vi(e),
        Ui(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Li = xf(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Li = xf(e);
      } else
        t === 27
          ? ((t = Li), lf(e.type) ? ((e = bf), (bf = null), (Li = e)) : (Li = t))
          : (Li = Ii ? yf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Gi() {
      ((Li = Ii = null), (N = !1));
    }
    function Ki() {
      var e = Ri;
      return (e !== null && (ou === null ? (ou = e) : ou.push.apply(ou, e), (Ri = null)), e);
    }
    function qi(e) {
      Ri === null ? (Ri = [e]) : Ri.push(e);
    }
    var Ji = ue(null),
      Yi = null,
      Xi = null;
    function Zi(e, t, n) {
      (O(Ji, t._currentValue), (t._currentValue = n));
    }
    function Qi(e) {
      ((e._currentValue = Ji.current), de(Ji));
    }
    function $i(e, t, n) {
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
    function ea(e, t, n, r) {
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
                  $i(o.return, n, e),
                  r || (s = null));
                break a;
              }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (((s = a.return), s === null)) throw Error(i(341));
          ((s.lanes |= n),
            (o = s.alternate),
            o !== null && (o.lanes |= n),
            $i(s, n, e),
            (s = null));
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
    function ta(e, t, n, r) {
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
            Tr(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === he.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [cp]) : e.push(cp));
        }
        a = a.return;
      }
      (e !== null && ea(t, e, n, r), (t.flags |= 262144));
    }
    function na(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Tr(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function ra(e) {
      ((Yi = e), (Xi = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function ia(e) {
      return oa(Yi, e);
    }
    function aa(e, t) {
      return (Yi === null && ra(e), oa(e, t));
    }
    function oa(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Xi === null)) {
        if (e === null) throw Error(i(308));
        ((Xi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else Xi = Xi.next = t;
      return n;
    }
    var sa =
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
      ca = t.unstable_scheduleCallback,
      la = t.unstable_NormalPriority,
      ua = {
        $$typeof: b,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function da() {
      return { controller: new sa(), data: new Map(), refCount: 0 };
    }
    function fa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ca(la, function () {
            e.controller.abort();
          }));
    }
    var pa = null,
      ma = 0,
      ha = 0,
      ga = null;
    function _a(e, t) {
      if (pa === null) {
        var n = (pa = []);
        ((ma = 0),
          (ha = xd()),
          (ga = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (ma++, t.then(va, va), t);
    }
    function va() {
      if (--ma === 0 && pa !== null) {
        ga !== null && (ga.status = `fulfilled`);
        var e = pa;
        ((pa = null), (ha = 0), (ga = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ya(e, t) {
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
    var ba = T.S;
    T.S = function (e, t) {
      ((lu = ke()),
        typeof t == `object` && t && typeof t.then == `function` && _a(e, t),
        ba !== null && ba(e, t));
    };
    var xa = ue(null);
    function Sa() {
      var e = xa.current;
      return e === null ? ql.pooledCache : e;
    }
    function Ca(e, t) {
      t === null ? O(xa, xa.current) : O(xa, t.pool);
    }
    function wa() {
      var e = Sa();
      return e === null ? null : { parent: ua._currentValue, pool: e };
    }
    var Ta = Error(i(460)),
      Ea = Error(i(474)),
      Da = Error(i(542)),
      Oa = { then: function () {} };
    function ka(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Aa(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then(nn, nn), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), Pa(e), e);
        default:
          if (typeof t.status == `string`) t.then(nn, nn);
          else {
            if (((e = ql), e !== null && 100 < e.shellSuspendCounter)) throw Error(i(482));
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
              throw ((e = t.reason), Pa(e), e);
          }
          throw ((Ma = t), Ta);
      }
    }
    function ja(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Ma = e), Ta) : e;
      }
    }
    var Ma = null;
    function Na() {
      if (Ma === null) throw Error(i(459));
      var e = Ma;
      return ((Ma = null), e);
    }
    function Pa(e) {
      if (e === Ta || e === Da) throw Error(i(483));
    }
    var Fa = null,
      Ia = 0;
    function La(e) {
      var t = Ia;
      return ((Ia += 1), Fa === null && (Fa = []), Aa(Fa, e, t));
    }
    function Ra(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function za(e, t) {
      throw t.$$typeof === p
        ? Error(i(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            i(
              31,
              e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e,
            ),
          ));
    }
    function Ba(e) {
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
        return ((e = pi(e, t)), (e.index = 0), (e.sibling = null), e);
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
          ? ((t = _i(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === g
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === C && ja(i) === t.type))
            ? ((t = a(t, n.props)), Ra(t, n), (t.return = e), t)
            : ((t = hi(n.type, n.key, n.props, null, e.mode, r)), Ra(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = yi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = gi(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = _i(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case m:
              return (
                (n = hi(t.type, t.key, t.props, null, e.mode, n)), Ra(n, t), (n.return = e), n
              );
            case h:
              return ((t = yi(t, e.mode, n)), (t.return = e), t);
            case C:
              return ((t = ja(t)), f(e, t, n));
          }
          if (se(t) || w(t)) return ((t = gi(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, La(t), n);
          if (t.$$typeof === b) return f(e, aa(e, t), n);
          za(e, t);
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
            case C:
              return ((n = ja(n)), p(e, t, n, r));
          }
          if (se(n) || w(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, La(n), r);
          if (n.$$typeof === b) return p(e, t, aa(e, n), r);
          za(e, n);
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
            case C:
              return ((r = ja(r)), _(e, t, n, r, i));
          }
          if (se(r) || w(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return _(e, t, n, La(r), i);
          if (r.$$typeof === b) return _(e, t, n, aa(t, r), i);
          za(t, r);
        }
        return null;
      }
      function v(i, a, s, c) {
        for (
          var l = null, u = null, d = a, m = (a = 0), h = null;
          d !== null && m < s.length;
          m++
        ) {
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
        if (m === s.length) return (n(i, d), N && ji(i, m), l);
        if (d === null) {
          for (; m < s.length; m++)
            ((d = f(i, s[m], c)),
              d !== null && ((a = o(d, a, m)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (N && ji(i, m), l);
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
          N && ji(i, m),
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
        if (v.done) return (n(a, m), N && ji(a, h), u);
        if (m === null) {
          for (; !v.done; h++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, h)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (N && ji(a, h), u);
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
          N && ji(a, h),
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
                      (typeof l == `object` && l && l.$$typeof === C && ja(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), Ra(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  } else t(e, r);
                  r = r.sibling;
                }
                o.type === g
                  ? ((c = gi(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = hi(o.type, o.key, o.props, null, e.mode, c)),
                    Ra(c, o),
                    (c.return = e),
                    (e = c));
              }
              return s(e);
            case h:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l)
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      (n(e, r.sibling), (c = a(r, o.children || [])), (c.return = e), (e = c));
                      break a;
                    } else {
                      n(e, r);
                      break;
                    }
                  else t(e, r);
                  r = r.sibling;
                }
                ((c = yi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case C:
              return ((o = ja(o)), x(e, r, o, c));
          }
          if (se(o)) return v(e, r, o, c);
          if (w(o)) {
            if (((l = w(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return x(e, r, La(o), c);
          if (o.$$typeof === b) return x(e, r, aa(e, o), c);
          za(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = _i(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          Ia = 0;
          var i = x(e, t, n, r);
          return ((Fa = null), i);
        } catch (t) {
          if (t === Ta || t === Da) throw t;
          var a = di(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Va = Ba(!0),
      Ha = Ba(!1),
      Ua = !1;
    function Wa(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ga(e, t) {
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
    function Ka(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function qa(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), R & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ci(e)),
          si(e, null, n),
          t
        );
      }
      return (ii(e, r, t, n), ci(e));
    }
    function Ja(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), rt(e, n));
      }
    }
    function Ya(e, t) {
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
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    var Xa = !1;
    function Za() {
      if (Xa) {
        var e = ga;
        if (e !== null) throw e;
      }
    }
    function Qa(e, t, n, r) {
      Xa = !1;
      var i = e.updateQueue;
      Ua = !1;
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
          if (m ? (B & p) === p : (r & p) === p) {
            (p !== 0 && p === ha && (Xa = !0),
              u !== null &&
                (u = u.next =
                  { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null }));
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
                  if (
                    ((h = g.payload), (p = typeof h == `function` ? h.call(_, d, p) : h), p == null)
                  )
                    break a;
                  d = f({}, d, p);
                  break a;
                case 2:
                  Ua = !0;
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
            ((m = s),
              (s = m.next),
              (m.next = null),
              (i.lastBaseUpdate = m),
              (i.shared.pending = null));
          }
        } while (1);
        (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          a === null && (i.shared.lanes = 0),
          (eu |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function $a(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function eo(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) $a(n[e], t);
    }
    var to = ue(null),
      no = ue(0);
    function ro(e, t) {
      ((e = Ql), O(no, e), O(to, t), (Ql = e | t.baseLanes));
    }
    function io() {
      (O(no, Ql), O(to, to.current));
    }
    function ao() {
      ((Ql = no.current), de(to), de(no));
    }
    var oo = ue(null),
      so = null;
    function co(e) {
      var t = e.alternate;
      (O(mo, mo.current & 1),
        O(oo, e),
        so === null && (t === null || to.current !== null || t.memoizedState !== null) && (so = e));
    }
    function lo(e) {
      (O(mo, mo.current), O(oo, e), so === null && (so = e));
    }
    function uo(e) {
      e.tag === 22 ? (O(mo, mo.current), O(oo, e), so === null && (so = e)) : fo(e);
    }
    function fo() {
      (O(mo, mo.current), O(oo, oo.current));
    }
    function po(e) {
      (de(oo), so === e && (so = null), de(mo));
    }
    var mo = ue(0);
    function ho(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || gf(n) || _f(n))) return t;
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
    var go = 0,
      P = null,
      _o = null,
      vo = null,
      yo = !1,
      bo = !1,
      xo = !1,
      So = 0,
      Co = 0,
      wo = null,
      To = 0;
    function Eo() {
      throw Error(i(321));
    }
    function Do(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Tr(e[n], t[n])) return !1;
      return !0;
    }
    function Oo(e, t, n, r, i, a) {
      return (
        (go = a),
        (P = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (T.H = e === null || e.memoizedState === null ? Gs : Ks),
        (xo = !1),
        (a = n(r, i)),
        (xo = !1),
        bo && (a = Ao(t, n, r, i)),
        ko(e),
        a
      );
    }
    function ko(e) {
      T.H = Ws;
      var t = _o !== null && _o.next !== null;
      if (((go = 0), (vo = _o = P = null), (yo = !1), (Co = 0), (wo = null), t))
        throw Error(i(300));
      e === null || lc || ((e = e.dependencies), e !== null && na(e) && (lc = !0));
    }
    function Ao(e, t, n, r) {
      P = e;
      var a = 0;
      do {
        if ((bo && (wo = null), (Co = 0), (bo = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (vo = _o = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((T.H = qs), (o = t(n, r)));
      } while (bo);
      return o;
    }
    function jo() {
      var e = T.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? Ro(t) : t),
        (e = e.useState()[0]),
        (_o === null ? null : _o.memoizedState) !== e && (P.flags |= 1024),
        t
      );
    }
    function Mo() {
      var e = So !== 0;
      return ((So = 0), e);
    }
    function No(e, t, n) {
      ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
    }
    function Po(e) {
      if (yo) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          (t !== null && (t.pending = null), (e = e.next));
        }
        yo = !1;
      }
      ((go = 0), (vo = _o = P = null), (bo = !1), (Co = So = 0), (wo = null));
    }
    function Fo() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (vo === null ? (P.memoizedState = vo = e) : (vo = vo.next = e), vo);
    }
    function Io() {
      if (_o === null) {
        var e = P.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = _o.next;
      var t = vo === null ? P.memoizedState : vo.next;
      if (t !== null) ((vo = t), (_o = e));
      else {
        if (e === null) throw P.alternate === null ? Error(i(467)) : Error(i(310));
        ((_o = e),
          (e = {
            memoizedState: _o.memoizedState,
            baseState: _o.baseState,
            baseQueue: _o.baseQueue,
            queue: _o.queue,
            next: null,
          }),
          vo === null ? (P.memoizedState = vo = e) : (vo = vo.next = e));
      }
      return vo;
    }
    function Lo() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Ro(e) {
      var t = Co;
      return (
        (Co += 1),
        wo === null && (wo = []),
        (e = Aa(wo, e, t)),
        (t = P),
        (vo === null ? t.memoizedState : vo.next) === null &&
          ((t = t.alternate), (T.H = t === null || t.memoizedState === null ? Gs : Ks)),
        e
      );
    }
    function zo(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return Ro(e);
        if (e.$$typeof === b) return ia(e);
      }
      throw Error(i(438, String(e)));
    }
    function Bo(e) {
      var t = null,
        n = P.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = P.alternate;
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
        n === null && ((n = Lo()), (P.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = re;
      return (t.index++, n);
    }
    function Vo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Ho(e) {
      return Uo(Io(), _o, e);
    }
    function Uo(e, t, n) {
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
          if (f === u.lane ? (go & f) === f : (B & f) === f) {
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
                f === ha && (d = !0));
            else if ((go & p) === p) {
              ((u = u.next), p === ha && (d = !0));
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
                (P.lanes |= p),
                (eu |= p));
            ((f = u.action), xo && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)));
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
              (P.lanes |= f),
              (eu |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !Tr(o, e.memoizedState) && ((lc = !0), d && ((n = ga), n !== null)))
        )
          throw n;
        ((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o));
      }
      return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
    }
    function Wo(e) {
      var t = Io(),
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
        (Tr(o, t.memoizedState) || (lc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Go(e, t, n) {
      var r = P,
        a = Io(),
        o = N;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Tr((_o || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (lc = !0)),
        (a = a.queue),
        gs(Jo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (vo !== null && vo.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          ds(9, { destroy: void 0 }, qo.bind(null, r, a, n, t), null),
          ql === null)
        )
          throw Error(i(349));
        o || go & 127 || Ko(r, t, n);
      }
      return n;
    }
    function Ko(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = P.updateQueue),
        t === null
          ? ((t = Lo()), (P.updateQueue = t), (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function qo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Yo(t) && Xo(e));
    }
    function Jo(e, t, n) {
      return n(function () {
        Yo(t) && Xo(e);
      });
    }
    function Yo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Tr(e, n);
      } catch {
        return !0;
      }
    }
    function Xo(e) {
      var t = oi(e, 2);
      t !== null && wu(t, e, 2);
    }
    function Zo(e) {
      var t = Fo();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), xo)) {
          Be(!0);
          try {
            n();
          } finally {
            Be(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: e,
        }),
        t
      );
    }
    function Qo(e, t, n, r) {
      return ((e.baseState = n), Uo(e, _o, typeof r == `function` ? r : Vo));
    }
    function $o(e, t, n, r, a) {
      if (Vs(e)) throw Error(i(485));
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
        (T.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), es(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function es(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = T.T,
          o = {};
        T.T = o;
        try {
          var s = n(i, r),
            c = T.S;
          (c !== null && c(o, s), ts(e, t, s));
        } catch (n) {
          rs(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (T.T = a));
        }
      } else
        try {
          ((a = n(i, r)), ts(e, t, a));
        } catch (n) {
          rs(e, t, n);
        }
    }
    function ts(e, t, n) {
      typeof n == `object` && n && typeof n.then == `function`
        ? n.then(
            function (n) {
              ns(e, t, n);
            },
            function (n) {
              return rs(e, t, n);
            },
          )
        : ns(e, t, n);
    }
    function ns(e, t, n) {
      ((t.status = `fulfilled`),
        (t.value = n),
        is(t),
        (e.state = n),
        (t = e.pending),
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), es(e, n))));
    }
    function rs(e, t, n) {
      var r = e.pending;
      if (((e.pending = null), r !== null)) {
        r = r.next;
        do ((t.status = `rejected`), (t.reason = n), is(t), (t = t.next));
        while (t !== r);
      }
      e.action = null;
    }
    function is(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function as(e, t) {
      return t;
    }
    function os(e, t) {
      if (N) {
        var n = ql.formState;
        if (n !== null) {
          a: {
            var r = P;
            if (N) {
              if (Li) {
                b: {
                  for (var i = Li, a = zi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = yf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((Li = yf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Vi(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Fo()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: as,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Rs.bind(null, P, r)),
        (r.dispatch = n),
        (r = Zo(!1)),
        (a = Bs.bind(null, P, !1, r.queue)),
        (r = Fo()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = $o.bind(null, P, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ss(e) {
      return cs(Io(), _o, e);
    }
    function cs(e, t, n) {
      if (
        ((t = Uo(e, t, as)[0]),
        (e = Ho(Vo)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = Ro(t);
        } catch (e) {
          throw e === Ta ? Da : e;
        }
      else r = t;
      t = Io();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((P.flags |= 2048), ds(9, { destroy: void 0 }, ls.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function ls(e, t) {
      e.action = t;
    }
    function us(e) {
      var t = Io(),
        n = _o;
      if (n !== null) return cs(t, n, e);
      (Io(), (t = t.memoizedState), (n = Io()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function ds(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = P.updateQueue),
        t === null && ((t = Lo()), (P.updateQueue = t)),
        (n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      );
    }
    function fs() {
      return Io().memoizedState;
    }
    function ps(e, t, n, r) {
      var i = Fo();
      ((P.flags |= e),
        (i.memoizedState = ds(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function ms(e, t, n, r) {
      var i = Io();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      _o !== null && r !== null && Do(r, _o.memoizedState.deps)
        ? (i.memoizedState = ds(t, a, n, r))
        : ((P.flags |= e), (i.memoizedState = ds(1 | t, a, n, r)));
    }
    function hs(e, t) {
      ps(8390656, 8, e, t);
    }
    function gs(e, t) {
      ms(2048, 8, e, t);
    }
    function _s(e) {
      P.flags |= 4;
      var t = P.updateQueue;
      if (t === null) ((t = Lo()), (P.updateQueue = t), (t.events = [e]));
      else {
        var n = t.events;
        n === null ? (t.events = [e]) : n.push(e);
      }
    }
    function vs(e) {
      var t = Io().memoizedState;
      return (
        _s({ ref: t, nextImpl: e }),
        function () {
          if (R & 2) throw Error(i(440));
          return t.impl.apply(void 0, arguments);
        }
      );
    }
    function ys(e, t) {
      return ms(4, 2, e, t);
    }
    function bs(e, t) {
      return ms(4, 4, e, t);
    }
    function xs(e, t) {
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
    function Ss(e, t, n) {
      ((n = n == null ? null : n.concat([e])), ms(4, 4, xs.bind(null, t, e), n));
    }
    function Cs() {}
    function ws(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return t !== null && Do(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
    }
    function Ts(e, t) {
      var n = Io();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      if (t !== null && Do(t, r[1])) return r[0];
      if (((r = e()), xo)) {
        Be(!0);
        try {
          e();
        } finally {
          Be(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function Es(e, t, n) {
      return n === void 0 || (go & 1073741824 && !(B & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = Cu()), (P.lanes |= e), (eu |= e), n);
    }
    function Ds(e, t, n, r) {
      return Tr(n, t)
        ? n
        : to.current === null
          ? !(go & 42) || (go & 1073741824 && !(B & 261930))
            ? ((lc = !0), (e.memoizedState = n))
            : ((e = Cu()), (P.lanes |= e), (eu |= e), t)
          : ((e = Es(e, n, r)), Tr(e, t) || (lc = !0), e);
    }
    function Os(e, t, n, r, i) {
      var a = E.p;
      E.p = a !== 0 && 8 > a ? a : 8;
      var o = T.T,
        s = {};
      ((T.T = s), Bs(e, !1, t, n));
      try {
        var c = i(),
          l = T.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? zs(e, t, ya(c, r), Su(e))
            : zs(e, t, r, Su(e)));
      } catch (n) {
        zs(e, t, { then: function () {}, status: `rejected`, reason: n }, Su());
      } finally {
        ((E.p = a), o !== null && s.types !== null && (o.types = s.types), (T.T = o));
      }
    }
    function ks() {}
    function As(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = js(e).queue;
      Os(
        e,
        a,
        t,
        D,
        n === null
          ? ks
          : function () {
              return (Ms(e), n(r));
            },
      );
    }
    function js(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: D,
        baseState: D,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Vo,
          lastRenderedState: D,
        },
        next: null,
      };
      var n = {};
      return (
        (t.next = {
          memoizedState: n,
          baseState: n,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vo,
            lastRenderedState: n,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function Ms(e) {
      var t = js(e);
      (t.next === null && (t = e.alternate.memoizedState), zs(e, t.next.queue, {}, Su()));
    }
    function Ns() {
      return ia(cp);
    }
    function Ps() {
      return Io().memoizedState;
    }
    function Fs() {
      return Io().memoizedState;
    }
    function Is(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = Su();
            e = Ka(n);
            var r = qa(t, e, n);
            (r !== null && (wu(r, t, n), Ja(r, t, n)), (t = { cache: da() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ls(e, t, n) {
      var r = Su();
      ((n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Vs(e) ? Hs(t, n) : ((n = ai(e, t, n, r)), n !== null && (wu(n, e, r), Us(n, t, r))));
    }
    function Rs(e, t, n) {
      zs(e, t, n, Su());
    }
    function zs(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Vs(e)) Hs(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Tr(s, o)))
              return (ii(e, t, i, 0), ql === null && ri(), !1);
          } catch {}
        if (((n = ai(e, t, i, r)), n !== null)) return (wu(n, e, r), Us(n, t, r), !0);
      }
      return !1;
    }
    function Bs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: xd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Vs(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ai(e, n, r, 2)), t !== null && wu(t, e, 2));
    }
    function Vs(e) {
      var t = e.alternate;
      return e === P || (t !== null && t === P);
    }
    function Hs(e, t) {
      bo = yo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Us(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), rt(e, n));
      }
    }
    var Ws = {
      readContext: ia,
      use: zo,
      useCallback: Eo,
      useContext: Eo,
      useEffect: Eo,
      useImperativeHandle: Eo,
      useLayoutEffect: Eo,
      useInsertionEffect: Eo,
      useMemo: Eo,
      useReducer: Eo,
      useRef: Eo,
      useState: Eo,
      useDebugValue: Eo,
      useDeferredValue: Eo,
      useTransition: Eo,
      useSyncExternalStore: Eo,
      useId: Eo,
      useHostTransitionStatus: Eo,
      useFormState: Eo,
      useActionState: Eo,
      useOptimistic: Eo,
      useMemoCache: Eo,
      useCacheRefresh: Eo,
    };
    Ws.useEffectEvent = Eo;
    var Gs = {
        readContext: ia,
        use: zo,
        useCallback: function (e, t) {
          return ((Fo().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ia,
        useEffect: hs,
        useImperativeHandle: function (e, t, n) {
          ((n = n == null ? null : n.concat([e])), ps(4194308, 4, xs.bind(null, t, e), n));
        },
        useLayoutEffect: function (e, t) {
          return ps(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          ps(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Fo();
          t = t === void 0 ? null : t;
          var r = e();
          if (xo) {
            Be(!0);
            try {
              e();
            } finally {
              Be(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Fo();
          if (n !== void 0) {
            var i = n(t);
            if (xo) {
              Be(!0);
              try {
                n(t);
              } finally {
                Be(!1);
              }
            }
          } else i = t;
          return (
            (r.memoizedState = r.baseState = i),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: i,
            }),
            (r.queue = e),
            (e = e.dispatch = Ls.bind(null, P, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Fo();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: function (e) {
          e = Zo(e);
          var t = e.queue,
            n = Rs.bind(null, P, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Es(Fo(), e, t);
        },
        useTransition: function () {
          var e = Zo(!1);
          return ((e = Os.bind(null, P, e.queue, !0, !1)), (Fo().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = P,
            a = Fo();
          if (N) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), ql === null)) throw Error(i(349));
            B & 127 || Ko(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            hs(Jo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            ds(9, { destroy: void 0 }, qo.bind(null, r, o, n, t), null),
            n
          );
        },
        useId: function () {
          var e = Fo(),
            t = ql.identifierPrefix;
          if (N) {
            var n = Ai,
              r = ki;
            ((n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
              (t = `_` + t + `R_` + n),
              (n = So++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `_`));
          } else ((n = To++), (t = `_` + t + `r_` + n.toString(32) + `_`));
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: Ns,
        useFormState: os,
        useActionState: os,
        useOptimistic: function (e) {
          var t = Fo();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return ((t.queue = n), (t = Bs.bind(null, P, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Bo,
        useCacheRefresh: function () {
          return (Fo().memoizedState = Is.bind(null, P));
        },
        useEffectEvent: function (e) {
          var t = Fo(),
            n = { impl: e };
          return (
            (t.memoizedState = n),
            function () {
              if (R & 2) throw Error(i(440));
              return n.impl.apply(void 0, arguments);
            }
          );
        },
      },
      Ks = {
        readContext: ia,
        use: zo,
        useCallback: ws,
        useContext: ia,
        useEffect: gs,
        useImperativeHandle: Ss,
        useInsertionEffect: ys,
        useLayoutEffect: bs,
        useMemo: Ts,
        useReducer: Ho,
        useRef: fs,
        useState: function () {
          return Ho(Vo);
        },
        useDebugValue: Cs,
        useDeferredValue: function (e, t) {
          return Ds(Io(), _o.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Ho(Vo)[0],
            t = Io().memoizedState;
          return [typeof e == `boolean` ? e : Ro(e), t];
        },
        useSyncExternalStore: Go,
        useId: Ps,
        useHostTransitionStatus: Ns,
        useFormState: ss,
        useActionState: ss,
        useOptimistic: function (e, t) {
          return Qo(Io(), _o, e, t);
        },
        useMemoCache: Bo,
        useCacheRefresh: Fs,
      };
    Ks.useEffectEvent = vs;
    var qs = {
      readContext: ia,
      use: zo,
      useCallback: ws,
      useContext: ia,
      useEffect: gs,
      useImperativeHandle: Ss,
      useInsertionEffect: ys,
      useLayoutEffect: bs,
      useMemo: Ts,
      useReducer: Wo,
      useRef: fs,
      useState: function () {
        return Wo(Vo);
      },
      useDebugValue: Cs,
      useDeferredValue: function (e, t) {
        var n = Io();
        return _o === null ? Es(n, e, t) : Ds(n, _o.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Wo(Vo)[0],
          t = Io().memoizedState;
        return [typeof e == `boolean` ? e : Ro(e), t];
      },
      useSyncExternalStore: Go,
      useId: Ps,
      useHostTransitionStatus: Ns,
      useFormState: us,
      useActionState: us,
      useOptimistic: function (e, t) {
        var n = Io();
        return _o === null ? ((n.baseState = e), [e, n.queue.dispatch]) : Qo(n, _o, e, t);
      },
      useMemoCache: Bo,
      useCacheRefresh: Fs,
    };
    qs.useEffectEvent = vs;
    function Js(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : f({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ys = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Su(),
          i = Ka(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (wu(t, e, r), Ja(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Su(),
          i = Ka(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = qa(e, i, r)),
          t !== null && (wu(t, e, r), Ja(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Su(),
          r = Ka(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = qa(e, r, n)),
          t !== null && (wu(t, e, n), Ja(t, e, n)));
      },
    };
    function Xs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Er(n, r) || !Er(i, a)
            : !0
      );
    }
    function Zs(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ys.enqueueReplaceState(t, t.state, null));
    }
    function Qs(e, t) {
      var n = t;
      if (`ref` in t) for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
      if ((e = e.defaultProps))
        for (var i in (n === t && (n = f({}, n)), e)) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    function $s(e) {
      $r(e);
    }
    function ec(e) {
      console.error(e);
    }
    function tc(e) {
      $r(e);
    }
    function nc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, { componentStack: t.stack });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function rc(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function ic(e, t, n) {
      return (
        (n = Ka(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          nc(e, t);
        }),
        n
      );
    }
    function ac(e) {
      return ((e = Ka(e)), (e.tag = 3), e);
    }
    function oc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        ((e.payload = function () {
          return i(a);
        }),
          (e.callback = function () {
            rc(t, n, r);
          }));
      }
      var o = n.stateNode;
      o !== null &&
        typeof o.componentDidCatch == `function` &&
        (e.callback = function () {
          (rc(t, n, r),
            typeof i != `function` && (fu === null ? (fu = new Set([this])) : fu.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function sc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && ta(t, n, a, !0), (n = oo.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                so === null ? Iu() : n.alternate === null && $l === 0 && ($l = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Oa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    td(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Oa
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([r]),
                        }),
                        (n.updateQueue = t))
                      : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                    td(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (td(e, r, a), Iu(), !1);
      }
      if (N)
        return (
          (t = oo.current),
          t === null
            ? (r !== Bi && ((t = Error(i(423), { cause: r })), qi(xi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = xi(r, n)),
              (a = ic(e.stateNode, r, a)),
              Ya(e, a),
              $l !== 4 && ($l = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Bi && ((e = Error(i(422), { cause: r })), qi(xi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = xi(o, n)), au === null ? (au = [o]) : au.push(o), $l !== 4 && ($l = 2), t === null))
        return !0;
      ((r = xi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = ic(n.stateNode, r, e)),
              Ya(n, e),
              !1
            );
          case 1:
            if (
              ((t = n.type),
              (o = n.stateNode),
              !(n.flags & 128) &&
                (typeof t.getDerivedStateFromError == `function` ||
                  (o !== null &&
                    typeof o.componentDidCatch == `function` &&
                    (fu === null || !fu.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = ac(a)),
                oc(a, e, n, r),
                Ya(n, a),
                !1
              );
        }
        n = n.return;
      } while (n !== null);
      return !1;
    }
    var cc = Error(i(461)),
      lc = !1;
    function uc(e, t, n, r) {
      t.child = e === null ? Ha(t, null, n, r) : Va(t, e.child, n, r);
    }
    function dc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        ra(t),
        (r = Oo(e, t, n, o, a, i)),
        (s = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (N && s && Ni(t), (t.flags |= 1), uc(e, t, r, i), t.child)
      );
    }
    function fc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !fi(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), pc(e, t, a, r, i))
          : ((e = hi(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Ic(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? Er : n), n(o, r) && e.ref === t.ref))
          return Fc(e, t, i);
      }
      return ((t.flags |= 1), (e = pi(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function pc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Er(a, r) && e.ref === t.ref)
          if (((lc = !1), (t.pendingProps = r = a), Ic(e, i))) e.flags & 131072 && (lc = !0);
          else return ((t.lanes = e.lanes), Fc(e, t, i));
      }
      return xc(e, t, n, r, i);
    }
    function mc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (
        (e === null &&
          t.stateNode === null &&
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        r.mode === `hidden`)
      ) {
        if (t.flags & 128) {
          if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
            for (r = t.child = e.child, i = 0; r !== null;)
              ((i = i | r.lanes | r.childLanes), (r = r.sibling));
            r = i & ~a;
          } else ((r = 0), (t.child = null));
          return gc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && Ca(t, a === null ? null : a.cachePool),
            a === null ? io() : ro(t, a),
            uo(t));
        else return ((r = t.lanes = 536870912), gc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && Ca(t, null), io(), fo(t))
          : (Ca(t, a.cachePool), ro(t, a), fo(t), (t.memoizedState = null));
      return (uc(e, t, i, n), t.child);
    }
    function hc(e, t) {
      return (
        (e !== null && e.tag === 22) ||
          t.stateNode !== null ||
          (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
          }),
        t.sibling
      );
    }
    function gc(e, t, n, r, i) {
      var a = Sa();
      return (
        (a = a === null ? null : { parent: ua._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && Ca(t, null),
        io(),
        uo(t),
        e !== null && ta(e, t, r, !0),
        (t.childLanes = i),
        null
      );
    }
    function _c(e, t) {
      return (
        (t = Ac({ mode: t.mode, children: t.children }, e.mode)),
        (t.ref = e.ref),
        (e.child = t),
        (t.return = e),
        t
      );
    }
    function vc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = _c(t, t.pendingProps)),
        (e.flags |= 2),
        po(t),
        (t.memoizedState = null),
        e
      );
    }
    function yc(e, t, n) {
      var r = t.pendingProps,
        a = (t.flags & 128) != 0;
      if (((t.flags &= -129), e === null)) {
        if (N) {
          if (r.mode === `hidden`) return ((e = _c(t, r)), (t.lanes = 536870912), hc(null, e));
          if (
            (lo(t),
            (e = Li)
              ? ((e = hf(e, zi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (Li = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t);
          return ((t.lanes = 536870912), null);
        }
        return _c(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((lo(t), a))
          if (t.flags & 256) ((t.flags &= -257), (t = vc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        else if ((lc || ta(e, t, n, !1), (a = (n & e.childLanes) !== 0), lc || a)) {
          if (((r = ql), r !== null && ((s = it(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), oi(e, s), wu(r, e, s), cc);
          (Iu(), (t = vc(e, t, n)));
        } else
          ((e = o.treeContext),
            (Li = yf(s.nextSibling)),
            (Ii = t),
            (N = !0),
            (Ri = null),
            (zi = !1),
            e !== null && Fi(t, e),
            (t = _c(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = pi(e.child, { mode: r.mode, children: r.children })),
        (e.ref = t.ref),
        (t.child = e),
        (e.return = t),
        e
      );
    }
    function bc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function xc(e, t, n, r, i) {
      return (
        ra(t),
        (n = Oo(e, t, n, r, void 0, i)),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, i), Fc(e, t, i))
          : (N && r && Ni(t), (t.flags |= 1), uc(e, t, n, i), t.child)
      );
    }
    function Sc(e, t, n, r, i, a) {
      return (
        ra(t),
        (t.updateQueue = null),
        (n = Ao(t, r, n, i)),
        ko(e),
        (r = Mo()),
        e !== null && !lc
          ? (No(e, t, a), Fc(e, t, a))
          : (N && r && Ni(t), (t.flags |= 1), uc(e, t, n, a), t.child)
      );
    }
    function Cc(e, t, n, r, i) {
      if ((ra(t), t.stateNode === null)) {
        var a = li,
          o = n.contextType;
        (typeof o == `object` && o && (a = ia(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ys),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          Wa(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? ia(o) : li),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Js(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Ys.enqueueReplaceState(a, a.state, null),
            Qa(t, r, a, i),
            Za(),
            (a.state = t.memoizedState)),
          typeof a.componentDidMount == `function` && (t.flags |= 4194308),
          (r = !0));
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = Qs(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        ((o = li), typeof u == `object` && u && (o = ia(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Zs(t, a, r, o)),
          (Ua = !1));
        var f = t.memoizedState;
        ((a.state = f),
          Qa(t, r, a, i),
          Za(),
          (l = t.memoizedState),
          s || f !== l || Ua
            ? (typeof d == `function` && (Js(t, n, d, r), (l = t.memoizedState)),
              (c = Ua || Xs(t, n, c, r, f, l, o))
                ? (u ||
                    (typeof a.UNSAFE_componentWillMount != `function` &&
                      typeof a.componentWillMount != `function`) ||
                    (typeof a.componentWillMount == `function` && a.componentWillMount(),
                    typeof a.UNSAFE_componentWillMount == `function` &&
                      a.UNSAFE_componentWillMount()),
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
          Ga(e, t),
          (o = t.memoizedProps),
          (u = Qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = li),
          typeof l == `object` && l && (c = ia(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Zs(t, a, r, c)),
          (Ua = !1),
          (f = t.memoizedState),
          (a.state = f),
          Qa(t, r, a, i),
          Za());
        var p = t.memoizedState;
        o !== d || f !== p || Ua || (e !== null && e.dependencies !== null && na(e.dependencies))
          ? (typeof s == `function` && (Js(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ua ||
              Xs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && na(e.dependencies)))
              ? (l ||
                  (typeof a.UNSAFE_componentWillUpdate != `function` &&
                    typeof a.componentWillUpdate != `function`) ||
                  (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c),
                  typeof a.UNSAFE_componentWillUpdate == `function` &&
                    a.UNSAFE_componentWillUpdate(r, p, c)),
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
        bc(e, t),
        (r = (t.flags & 128) != 0),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Va(t, e.child, null, i)), (t.child = Va(t, null, n, i)))
              : uc(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = Fc(e, t, i)),
        e
      );
    }
    function wc(e, t, n, r) {
      return (Gi(), (t.flags |= 256), uc(e, t, n, r), t.child);
    }
    var Tc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Ec(e) {
      return { baseLanes: e, cachePool: wa() };
    }
    function Dc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= ru), e);
    }
    function Oc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = (t.flags & 128) != 0,
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (mo.current & 2) != 0),
        s && ((a = !0), (t.flags &= -129)),
        (s = (t.flags & 32) != 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (N) {
          if (
            (a ? co(t) : fo(t),
            (e = Li)
              ? ((e = hf(e, zi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Oi === null ? null : { id: ki, overflow: Ai },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = vi(e)),
                  (n.return = t),
                  (t.child = n),
                  (Ii = t),
                  (Li = null)))
              : (e = null),
            e === null)
          )
            throw Vi(t);
          return (_f(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (fo(t),
              (a = t.mode),
              (c = Ac({ mode: `hidden`, children: c }, a)),
              (r = gi(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = Ec(n)),
              (r.childLanes = Dc(e, s, n)),
              (t.memoizedState = Tc),
              hc(null, r))
            : (co(t), kc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (co(t), (t.flags &= -257), (t = jc(e, t, n)))
            : t.memoizedState === null
              ? (fo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = Ac({ mode: `visible`, children: r.children }, a)),
                (c = gi(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Va(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = Ec(n)),
                (r.childLanes = Dc(e, s, n)),
                (t.memoizedState = Tc),
                (t = hc(null, r)))
              : (fo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((co(t), _f(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            qi({ value: r, source: null, stack: null }),
            (t = jc(e, t, n)));
        } else if ((lc || ta(e, t, n, !1), (s = (n & e.childLanes) !== 0), lc || s)) {
          if (((s = ql), s !== null && ((r = it(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), oi(e, r), wu(s, e, r), cc);
          (gf(c) || Iu(), (t = jc(e, t, n)));
        } else
          gf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Li = yf(c.nextSibling)),
              (Ii = t),
              (N = !0),
              (Ri = null),
              (zi = !1),
              e !== null && Fi(t, e),
              (t = kc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (fo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = pi(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = gi(c, a, n, null)), (c.flags |= 2)) : (c = pi(u, c)),
          (c.return = t),
          (r.return = t),
          (r.sibling = c),
          (t.child = r),
          hc(null, r),
          (r = t.child),
          (c = e.child.memoizedState),
          c === null
            ? (c = Ec(n))
            : ((a = c.cachePool),
              a === null
                ? (a = wa())
                : ((l = ua._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = Dc(e, s, n)),
          (t.memoizedState = Tc),
          hc(e.child, r))
        : (co(t),
          (n = e.child),
          (e = n.sibling),
          (n = pi(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function kc(e, t) {
      return ((t = Ac({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function Ac(e, t) {
      return ((e = di(22, e, null, t)), (e.lanes = 0), e);
    }
    function jc(e, t, n) {
      return (
        Va(t, e.child, null, n),
        (e = kc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Mc(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), $i(e.return, t, n));
    }
    function Nc(e, t, n, r, i, a) {
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
    function Pc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = mo.current,
        s = (o & 2) != 0;
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        O(mo, o),
        uc(e, t, r, n),
        (r = N ? Ti : 0),
        !s && e !== null && e.flags & 128)
      )
        a: for (e = t.child; e !== null;) {
          if (e.tag === 13) e.memoizedState !== null && Mc(e, n, t);
          else if (e.tag === 19) Mc(e, n, t);
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
            ((e = n.alternate), e !== null && ho(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Nc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && ho(e) === null)) {
              t.child = i;
              break;
            }
            ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
          }
          Nc(t, !0, n, null, a, r);
          break;
        case `together`:
          Nc(t, !1, null, null, void 0, r);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Fc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies), (eu |= t.lanes), (n & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((ta(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = pi(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = pi(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Ic(e, t) {
      return (e.lanes & t) === 0 ? ((e = e.dependencies), !!(e !== null && na(e))) : !0;
    }
    function Lc(e, t, n) {
      switch (t.tag) {
        case 3:
          (ge(t, t.stateNode.containerInfo), Zi(t, ua, e.memoizedState.cache), Gi());
          break;
        case 27:
        case 5:
          ve(t);
          break;
        case 4:
          ge(t, t.stateNode.containerInfo);
          break;
        case 10:
          Zi(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), lo(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (co(t), (e = Fc(e, t, n)), e === null ? null : e.sibling)
                : Oc(e, t, n)
              : (co(t), (t.flags |= 128), null);
          co(t);
          break;
        case 19:
          var i = (e.flags & 128) != 0;
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (ta(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return Pc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            O(mo, mo.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), mc(e, t, n, t.pendingProps));
        case 24:
          Zi(t, ua, e.memoizedState.cache);
      }
      return Fc(e, t, n);
    }
    function zc(e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) lc = !0;
        else {
          if (!Ic(e, n) && !(t.flags & 128)) return ((lc = !1), Lc(e, t, n));
          lc = !!(e.flags & 131072);
        }
      else ((lc = !1), N && t.flags & 1048576 && Mi(t, Ti, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = ja(t.elementType)), (t.type = e), typeof e == `function`))
              fi(e)
                ? ((r = Qs(e, r)), (t.tag = 1), (t = Cc(null, t, e, r, n)))
                : ((t.tag = 0), (t = xc(null, t, e, r, n)));
            else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === x) {
                  ((t.tag = 11), (t = dc(null, t, e, r, n)));
                  break a;
                } else if (a === S) {
                  ((t.tag = 14), (t = fc(null, t, e, r, n)));
                  break a;
                }
              }
              throw ((t = oe(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return xc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = Qs(r, t.pendingProps)), Cc(e, t, r, a, n));
        case 3:
          a: {
            if ((ge(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ga(e, t), Qa(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Zi(t, ua, r),
              r !== o.cache && ea(t, [ua], n, !0),
              Za(),
              (r = s.element),
              o.isDehydrated)
            )
              if (
                ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                t = wc(e, t, r, n);
                break a;
              } else if (r !== a) {
                ((a = xi(Error(i(424)), t)), qi(a), (t = wc(e, t, r, n)));
                break a;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  Li = yf(e.firstChild),
                    Ii = t,
                    N = !0,
                    Ri = null,
                    zi = !0,
                    n = Ha(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
              }
            else {
              if ((Gi(), r === a)) {
                t = Fc(e, t, n);
                break a;
              }
              uc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            bc(e, t),
            e === null
              ? (n = Bf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : N ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Zd(me.current).createElement(n)),
                  (r[M] = t),
                  (r[ut] = e),
                  Gd(r, n, e),
                  St(r),
                  (t.stateNode = r))
              : (t.memoizedState = Bf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            ve(t),
            e === null &&
              N &&
              ((r = t.stateNode = Cf(t.type, t.pendingProps, me.current)),
              (Ii = t),
              (zi = !0),
              (a = Li),
              lf(t.type) ? ((bf = a), (Li = yf(r.firstChild))) : (Li = a)),
            uc(e, t, t.pendingProps.children, n),
            bc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              N &&
              ((a = r = Li) &&
                ((r = pf(r, t.type, t.pendingProps, zi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (Ii = t), (Li = yf(r.firstChild)), (zi = !1), (a = !0))),
              a || Vi(t)),
            ve(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            ef(a, o) ? (r = null) : s !== null && ef(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Oo(e, t, jo, null, null, n)), (cp._currentValue = a)),
            bc(e, t),
            uc(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              N &&
              ((e = n = Li) &&
                ((n = mf(n, t.pendingProps, zi)),
                n === null ? (e = !1) : ((t.stateNode = n), (Ii = t), (Li = null), (e = !0))),
              e || Vi(t)),
            null
          );
        case 13:
          return Oc(e, t, n);
        case 4:
          return (
            ge(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Va(t, null, r, n)) : uc(e, t, r, n),
            t.child
          );
        case 11:
          return dc(e, t, t.type, t.pendingProps, n);
        case 7:
          return (uc(e, t, t.pendingProps, n), t.child);
        case 8:
          return (uc(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (uc(e, t, t.pendingProps.children, n), t.child);
        case 10:
          return ((r = t.pendingProps), Zi(t, t.type, r.value), uc(e, t, r.children, n), t.child);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            ra(t),
            (a = ia(a)),
            (r = r(a)),
            (t.flags |= 1),
            uc(e, t, r, n),
            t.child
          );
        case 14:
          return fc(e, t, t.type, t.pendingProps, n);
        case 15:
          return pc(e, t, t.type, t.pendingProps, n);
        case 19:
          return Pc(e, t, n);
        case 31:
          return yc(e, t, n);
        case 22:
          return mc(e, t, n, t.pendingProps);
        case 24:
          return (
            ra(t),
            (r = ia(ua)),
            e === null
              ? ((a = Sa()),
                a === null &&
                  ((a = ql),
                  (o = da()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                Wa(t),
                Zi(t, ua, a))
              : ((e.lanes & n) !== 0 && (Ga(e, t), Qa(t, null, null, n), Za()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), Zi(t, ua, r), r !== a.cache && ea(t, [ua], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    Zi(t, ua, r))),
            uc(e, t, t.pendingProps.children, n),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function Vc(e) {
      e.flags |= 4;
    }
    function Uc(e, t, n, r, i) {
      if (((t = (e.mode & 32) != 0) && (t = !1), t)) {
        if (((e.flags |= 16777216), (i & 335544128) === i))
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Nu()) e.flags |= 8192;
          else throw ((Ma = Oa), Ea);
      } else e.flags &= -16777217;
    }
    function Wc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !ep(t)))
        if (Nu()) e.flags |= 8192;
        else throw ((Ma = Oa), Ea);
    }
    function Gc(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : Qe()), (e.lanes |= t), (iu |= t)));
    }
    function Kc(e, t) {
      if (!N)
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
    function F(e) {
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
    function qc(e, t, n) {
      var r = t.pendingProps;
      switch ((Pi(t), t.tag)) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (F(t), null);
        case 1:
          return (F(t), null);
        case 3:
          return (
            (n = t.stateNode),
            (r = null),
            e !== null && (r = e.memoizedState.cache),
            t.memoizedState.cache !== r && (t.flags |= 2048),
            Qi(ua),
            _e(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (Wi(t)
                ? Vc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Ki())),
            F(t),
            null
          );
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return (
            e === null
              ? (Vc(t), o === null ? (F(t), Uc(t, a, null, r, n)) : (F(t), Wc(t, o)))
              : o
                ? o === e.memoizedState
                  ? (F(t), (t.flags &= -16777217))
                  : (Vc(t), F(t), Wc(t, o))
                : ((e = e.memoizedProps), e !== r && Vc(t), F(t), Uc(t, a, e, r, n)),
            null
          );
        case 27:
          if ((k(t), (n = me.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Vc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (F(t), null);
            }
            ((e = fe.current), Wi(t) ? Hi(t, e) : ((e = Cf(a, r, n)), (t.stateNode = e), Vc(t)));
          }
          return (F(t), null);
        case 5:
          if ((k(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Vc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (F(t), null);
            }
            if (((o = fe.current), Wi(t))) Hi(t, o);
            else {
              var s = Zd(me.current);
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
                      o =
                        typeof r.is == `string`
                          ? s.createElement(a, { is: r.is })
                          : s.createElement(a);
                  }
              }
              ((o[M] = t), (o[ut] = r));
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
              a: switch ((Gd(o, a, r), a)) {
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
              r && Vc(t);
            }
          }
          return (
            F(t), Uc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Vc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = me.current), Wi(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Ii), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[M] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Hd(e.nodeValue, n)
                )),
                e || Vi(t, !0));
            } else ((e = Zd(e).createTextNode(r)), (e[M] = t), (t.stateNode = e));
          }
          return (F(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = Wi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(i(557));
                e[M] = t;
              } else (Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (F(t), (e = !1));
            } else
              ((n = Ki()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (po(t), t) : (po(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (F(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = Wi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
                  throw Error(i(317));
                a[M] = t;
              } else (Gi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (F(t), (a = !1));
            } else
              ((a = Ki()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (po(t), t) : (po(t), null);
          }
          return (
            po(t),
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
                Gc(t, t.updateQueue),
                F(t),
                null)
          );
        case 4:
          return (_e(), e === null && Md(t.stateNode.containerInfo), F(t), null);
        case 10:
          return (Qi(t.type), F(t), null);
        case 19:
          if ((de(mo), (r = t.memoizedState), r === null)) return (F(t), null);
          if (((a = (t.flags & 128) != 0), (o = r.rendering), o === null))
            if (a) Kc(r, !1);
            else {
              if ($l !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = ho(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        Kc(r, !1),
                        e = o.updateQueue,
                        t.updateQueue = e,
                        Gc(t, e),
                        t.subtreeFlags = 0,
                        e = n,
                        n = t.child;
                      n !== null;
                    )
                      (mi(n, e), (n = n.sibling));
                    return (O(mo, (mo.current & 1) | 2), N && ji(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                ke() > uu &&
                ((t.flags |= 128), (a = !0), Kc(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!a)
              if (((e = ho(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Gc(t, e),
                  Kc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !N)
                )
                  return (F(t), null);
              } else
                2 * ke() - r.renderingStartTime > uu &&
                  n !== 536870912 &&
                  ((t.flags |= 128), (a = !0), Kc(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o));
          }
          return r.tail === null
            ? (F(t), null)
            : ((e = r.tail),
              (r.rendering = e),
              (r.tail = e.sibling),
              (r.renderingStartTime = ke()),
              (e.sibling = null),
              (n = mo.current),
              O(mo, a ? (n & 1) | 2 : n & 1),
              N && ji(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            po(t),
            ao(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 && !(t.flags & 128) && (F(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : F(t),
            (n = t.updateQueue),
            n !== null && Gc(t, n.retryQueue),
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
            e !== null && de(xa),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Qi(ua),
            F(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function I(e, t) {
      switch ((Pi(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            Qi(ua),
            _e(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (k(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((po(t), t.alternate === null)) throw Error(i(340));
            Gi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((po(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            Gi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (de(mo), null);
        case 4:
          return (_e(), null);
        case 10:
          return (Qi(t.type), null);
        case 22:
        case 23:
          return (
            po(t),
            ao(),
            e !== null && de(xa),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (Qi(ua), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Jc(e, t) {
      switch ((Pi(t), t.tag)) {
        case 3:
          (Qi(ua), _e());
          break;
        case 26:
        case 27:
        case 5:
          k(t);
          break;
        case 4:
          _e();
          break;
        case 31:
          t.memoizedState !== null && po(t);
          break;
        case 13:
          po(t);
          break;
        case 19:
          de(mo);
          break;
        case 10:
          Qi(t.type);
          break;
        case 22:
        case 23:
          (po(t), ao(), e !== null && de(xa));
          break;
        case 24:
          Qi(ua);
      }
    }
    function Yc(e, t) {
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
        ed(t, t.return, e);
      }
    }
    function Xc(e, t, n) {
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
                  ed(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        ed(t, t.return, e);
      }
    }
    function Zc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          eo(t, n);
        } catch (t) {
          ed(e, e.return, t);
        }
      }
    }
    function Qc(e, t, n) {
      ((n.props = Qs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        ed(e, t, n);
      }
    }
    function $c(e, t) {
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
        ed(e, t, n);
      }
    }
    function el(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null)
        if (typeof r == `function`)
          try {
            r();
          } catch (n) {
            ed(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            ed(e, t, n);
          }
        else n.current = null;
    }
    function tl(e) {
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
        ed(e, e.return, t);
      }
    }
    function nl(e, t, n) {
      try {
        var r = e.stateNode;
        (Kd(r, e.type, n, t), (r[ut] = t));
      } catch (t) {
        ed(e, e.return, t);
      }
    }
    function rl(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && lf(e.type)) || e.tag === 4
      );
    }
    function il(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || rl(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && lf(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function al(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = nn)));
      else if (
        r !== 4 &&
        (r === 27 && lf(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (al(e, t, n), e = e.sibling; e !== null;) (al(e, t, n), (e = e.sibling));
    }
    function ol(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && lf(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for (ol(e, t, n), e = e.sibling; e !== null;) (ol(e, t, n), (e = e.sibling));
    }
    function sl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Gd(t, r, n), (t[M] = e), (t[ut] = n));
      } catch (t) {
        ed(e, e.return, t);
      }
    }
    var cl = !1,
      L = !1,
      ll = !1,
      ul = typeof WeakSet == `function` ? WeakSet : Set,
      dl = null;
    function fl(e, t) {
      if (((e = e.containerInfo), (Yd = _p), (e = Ar(e)), jr(e))) {
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
      for (Xd = { focusedElem: e, selectionRange: n }, _p = !1, dl = t; dl !== null;)
        if (((t = dl), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (dl = e));
        else
          for (; dl !== null;) {
            switch (((t = dl), (o = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                if (e & 4 && ((e = t.updateQueue), (e = e === null ? null : e.events), e !== null))
                  for (n = 0; n < e.length; n++) ((a = e[n]), (a.ref.impl = a.nextImpl));
                break;
              case 11:
              case 15:
                break;
              case 1:
                if (e & 1024 && o !== null) {
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = Qs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    ed(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) ff(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        ff(e);
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
              ((e.return = t.return), (dl = e));
              break;
            }
            dl = t.return;
          }
    }
    function pl(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Ol(e, n), r & 4 && Yc(5, n));
          break;
        case 1:
          if ((Ol(e, n), r & 4))
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                ed(n, n.return, e);
              }
            else {
              var i = Qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                ed(n, n.return, e);
              }
            }
          (r & 64 && Zc(n), r & 512 && $c(n, n.return));
          break;
        case 3:
          if ((Ol(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
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
              eo(e, t);
            } catch (e) {
              ed(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && sl(n);
        case 26:
        case 5:
          (Ol(e, n), t === null && r & 4 && tl(n), r & 512 && $c(n, n.return));
          break;
        case 12:
          Ol(e, n);
          break;
        case 31:
          (Ol(e, n), r & 4 && yl(e, n));
          break;
        case 13:
          (Ol(e, n),
            r & 4 && bl(e, n),
            r & 64 &&
              ((e = n.memoizedState),
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = id.bind(null, n)), vf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || cl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || L), (i = cl));
            var a = L;
            ((cl = r),
              (L = t) && !a ? Al(e, n, (n.subtreeFlags & 8772) != 0) : Ol(e, n),
              (cl = i),
              (L = a));
          }
          break;
        case 30:
          break;
        default:
          Ol(e, n);
      }
    }
    function ml(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), ml(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && _t(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var hl = null,
      gl = !1;
    function _l(e, t, n) {
      for (n = n.child; n !== null;) (vl(e, t, n), (n = n.sibling));
    }
    function vl(e, t, n) {
      if (ze && typeof ze.onCommitFiberUnmount == `function`)
        try {
          ze.onCommitFiberUnmount(Re, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (L || el(n, t),
            _l(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          L || el(n, t);
          var r = hl,
            i = gl;
          (lf(n.type) && ((hl = n.stateNode), (gl = !1)),
            _l(e, t, n),
            wf(n.stateNode),
            (hl = r),
            (gl = i));
          break;
        case 5:
          L || el(n, t);
        case 6:
          if (((r = hl), (i = gl), (hl = null), _l(e, t, n), (hl = r), (gl = i), hl !== null))
            if (gl)
              try {
                (hl.nodeType === 9
                  ? hl.body
                  : hl.nodeName === `HTML`
                    ? hl.ownerDocument.body
                    : hl
                ).removeChild(n.stateNode);
              } catch (e) {
                ed(n, t, e);
              }
            else
              try {
                hl.removeChild(n.stateNode);
              } catch (e) {
                ed(n, t, e);
              }
          break;
        case 18:
          hl !== null &&
            (gl
              ? ((e = hl),
                uf(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Up(e))
              : uf(hl, n.stateNode));
          break;
        case 4:
          ((r = hl),
            (i = gl),
            (hl = n.stateNode.containerInfo),
            (gl = !0),
            _l(e, t, n),
            (hl = r),
            (gl = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Xc(2, n, t), L || Xc(4, n, t), _l(e, t, n));
          break;
        case 1:
          (L ||
            (el(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Qc(n, t, r)),
            _l(e, t, n));
          break;
        case 21:
          _l(e, t, n);
          break;
        case 22:
          ((L = (r = L) || n.memoizedState !== null), _l(e, t, n), (L = r));
          break;
        default:
          _l(e, t, n);
      }
    }
    function yl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
      ) {
        e = e.dehydrated;
        try {
          Up(e);
        } catch (e) {
          ed(t, t.return, e);
        }
      }
    }
    function bl(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          Up(e);
        } catch (e) {
          ed(t, t.return, e);
        }
    }
    function xl(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new ul()), t);
        case 22:
          return (
            (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new ul()), t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function Sl(e, t) {
      var n = xl(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = ad.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Cl(e, t) {
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
                if (lf(c.type)) {
                  ((hl = c.stateNode), (gl = !1));
                  break a;
                }
                break;
              case 5:
                ((hl = c.stateNode), (gl = !1));
                break a;
              case 3:
              case 4:
                ((hl = c.stateNode.containerInfo), (gl = !0));
                break a;
            }
            c = c.return;
          }
          if (hl === null) throw Error(i(160));
          (vl(o, s, a),
            (hl = null),
            (gl = !1),
            (o = a.alternate),
            o !== null && (o.return = null),
            (a.return = null));
        }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) (Tl(t, e), (t = t.sibling));
    }
    var wl = null;
    function Tl(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Cl(t, e), El(e), r & 4 && (Xc(3, e, e.return), Yc(3, e), Xc(5, e, e.return)));
          break;
        case 1:
          (Cl(t, e),
            El(e),
            r & 512 && (L || n === null || el(n, n.return)),
            r & 64 &&
              cl &&
              ((e = e.updateQueue),
              e !== null &&
                ((r = e.callbacks),
                r !== null &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = n === null ? r : n.concat(r))))));
          break;
        case 26:
          var a = wl;
          if ((Cl(t, e), El(e), r & 512 && (L || n === null || el(n, n.return)), r & 4)) {
            var o = n === null ? null : n.memoizedState;
            if (((r = e.memoizedState), n === null))
              if (r === null)
                if (e.stateNode === null) {
                  a: {
                    ((r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a));
                    b: switch (r) {
                      case `title`:
                        ((o = a.getElementsByTagName(`title`)[0]),
                          (!o ||
                            o[gt] ||
                            o[M] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Gd(o, r, n),
                          (o[M] = e),
                          St(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Zf(`link`, `href`, a).get(r + (n.href || ``));
                        if (s) {
                          for (var c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`href`) ===
                                (n.href == null || n.href === `` ? null : n.href) &&
                                o.getAttribute(`rel`) === (n.rel == null ? null : n.rel) &&
                                o.getAttribute(`title`) === (n.title == null ? null : n.title) &&
                                o.getAttribute(`crossorigin`) ===
                                  (n.crossOrigin == null ? null : n.crossOrigin))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Gd(o, r, n), a.head.appendChild(o));
                        break;
                      case `meta`:
                        if ((s = Zf(`meta`, `content`, a).get(r + (n.content || ``)))) {
                          for (c = 0; c < s.length; c++)
                            if (
                              ((o = s[c]),
                              o.getAttribute(`content`) ===
                                (n.content == null ? null : `` + n.content) &&
                                o.getAttribute(`name`) === (n.name == null ? null : n.name) &&
                                o.getAttribute(`property`) ===
                                  (n.property == null ? null : n.property) &&
                                o.getAttribute(`http-equiv`) ===
                                  (n.httpEquiv == null ? null : n.httpEquiv) &&
                                o.getAttribute(`charset`) ===
                                  (n.charSet == null ? null : n.charSet))
                            ) {
                              s.splice(c, 1);
                              break b;
                            }
                        }
                        ((o = a.createElement(r)), Gd(o, r, n), a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[M] = e), St(o), (r = o));
                  }
                  e.stateNode = r;
                } else Qf(a, e.type, e.stateNode);
              else e.stateNode = Kf(a, r, e.memoizedProps);
            else
              o === r
                ? r === null && e.stateNode !== null && nl(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Qf(a, e.type, e.stateNode) : Kf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (Cl(t, e),
            El(e),
            r & 512 && (L || n === null || el(n, n.return)),
            n !== null && r & 4 && nl(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((Cl(t, e), El(e), r & 512 && (L || n === null || el(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              Jt(a, ``);
            } catch (t) {
              ed(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), nl(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (ll = !0));
          break;
        case 6:
          if ((Cl(t, e), El(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              ed(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Xf = null),
            (a = wl),
            (wl = Df(t.containerInfo)),
            Cl(t, e),
            (wl = a),
            El(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Up(t.containerInfo);
            } catch (t) {
              ed(e, e.return, t);
            }
          ll && ((ll = !1), Dl(e));
          break;
        case 4:
          ((r = wl), (wl = Df(e.stateNode.containerInfo)), Cl(t, e), El(e), (wl = r));
          break;
        case 12:
          (Cl(t, e), El(e));
          break;
        case 31:
          (Cl(t, e),
            El(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), Sl(e, r))));
          break;
        case 13:
          (Cl(t, e),
            El(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (cu = ke()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), Sl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = cl,
            d = L;
          if (((cl = u || a), (L = d || l), Cl(t, e), (L = d), (cl = u), El(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || cl || L || kl(e)),
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
                    ed(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    ed(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? df(m, !0) : df(l.stateNode, !1);
                  } catch (e) {
                    ed(l, l.return, e);
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
            r !== null && ((n = r.retryQueue), n !== null && ((r.retryQueue = null), Sl(e, n))));
          break;
        case 19:
          (Cl(t, e),
            El(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), Sl(e, r))));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          (Cl(t, e), El(e));
      }
    }
    function El(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (rl(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var a = n.stateNode;
              ol(e, il(e), a);
              break;
            case 5:
              var o = n.stateNode;
              (n.flags & 32 && (Jt(o, ``), (n.flags &= -33)), ol(e, il(e), o));
              break;
            case 3:
            case 4:
              var s = n.stateNode.containerInfo;
              al(e, il(e), s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          ed(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Dl(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null;) {
          var t = e;
          (Dl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
        }
    }
    function Ol(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (pl(e, t.alternate, t), (t = t.sibling));
    }
    function kl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Xc(4, t, t.return), kl(t));
            break;
          case 1:
            el(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Qc(t, t.return, n), kl(t));
            break;
          case 27:
            wf(t.stateNode);
          case 26:
          case 5:
            (el(t, t.return), kl(t));
            break;
          case 22:
            t.memoizedState === null && kl(t);
            break;
          case 30:
            kl(t);
            break;
          default:
            kl(t);
        }
        e = e.sibling;
      }
    }
    function Al(e, t, n) {
      for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            (Al(i, a, n), Yc(4, a));
            break;
          case 1:
            if ((Al(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                ed(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) $a(c[i], s);
              } catch (e) {
                ed(r, r.return, e);
              }
            }
            (n && o & 64 && Zc(a), $c(a, a.return));
            break;
          case 27:
            sl(a);
          case 26:
          case 5:
            (Al(i, a, n), n && r === null && o & 4 && tl(a), $c(a, a.return));
            break;
          case 12:
            Al(i, a, n);
            break;
          case 31:
            (Al(i, a, n), n && o & 4 && yl(i, a));
            break;
          case 13:
            (Al(i, a, n), n && o & 4 && bl(i, a));
            break;
          case 22:
            (a.memoizedState === null && Al(i, a, n), $c(a, a.return));
            break;
          case 30:
            break;
          default:
            Al(i, a, n);
        }
        t = t.sibling;
      }
    }
    function jl(e, t) {
      var n = null;
      (e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (n = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== n && (e != null && e.refCount++, n != null && fa(n)));
    }
    function Ml(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && fa(e)));
    }
    function Nl(e, t, n, r) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) (Pl(e, t, n, r), (t = t.sibling));
    }
    function Pl(e, t, n, r) {
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (Nl(e, t, n, r), i & 2048 && Yc(9, t));
          break;
        case 1:
          Nl(e, t, n, r);
          break;
        case 3:
          (Nl(e, t, n, r),
            i & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && fa(e))));
          break;
        case 12:
          if (i & 2048) {
            (Nl(e, t, n, r), (e = t.stateNode));
            try {
              var a = t.memoizedProps,
                o = a.id,
                s = a.onPostCommit;
              typeof s == `function` &&
                s(o, t.alternate === null ? `mount` : `update`, e.passiveEffectDuration, -0);
            } catch (e) {
              ed(t, t.return, e);
            }
          } else Nl(e, t, n, r);
          break;
        case 31:
          Nl(e, t, n, r);
          break;
        case 13:
          Nl(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          ((a = t.stateNode),
            (o = t.alternate),
            t.memoizedState === null
              ? a._visibility & 2
                ? Nl(e, t, n, r)
                : ((a._visibility |= 2), Fl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1))
              : a._visibility & 2
                ? Nl(e, t, n, r)
                : Il(e, t),
            i & 2048 && jl(o, t));
          break;
        case 24:
          (Nl(e, t, n, r), i & 2048 && Ml(t.alternate, t));
          break;
        default:
          Nl(e, t, n, r);
      }
    }
    function Fl(e, t, n, r, i) {
      for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            (Fl(a, o, s, c, i), Yc(8, o));
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            (o.memoizedState === null
              ? ((u._visibility |= 2), Fl(a, o, s, c, i))
              : u._visibility & 2
                ? Fl(a, o, s, c, i)
                : Il(a, o),
              i && l & 2048 && jl(o.alternate, o));
            break;
          case 24:
            (Fl(a, o, s, c, i), i && l & 2048 && Ml(o.alternate, o));
            break;
          default:
            Fl(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Il(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null;) {
          var n = e,
            r = t,
            i = r.flags;
          switch (r.tag) {
            case 22:
              (Il(n, r), i & 2048 && jl(r.alternate, r));
              break;
            case 24:
              (Il(n, r), i & 2048 && Ml(r.alternate, r));
              break;
            default:
              Il(n, r);
          }
          t = t.sibling;
        }
    }
    var Ll = 8192;
    function Rl(e, t, n) {
      if (e.subtreeFlags & Ll) for (e = e.child; e !== null;) (zl(e, t, n), (e = e.sibling));
    }
    function zl(e, t, n) {
      switch (e.tag) {
        case 26:
          (Rl(e, t, n),
            e.flags & Ll &&
              e.memoizedState !== null &&
              tp(n, wl, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Rl(e, t, n);
          break;
        case 3:
        case 4:
          var r = wl;
          ((wl = Df(e.stateNode.containerInfo)), Rl(e, t, n), (wl = r));
          break;
        case 22:
          e.memoizedState === null &&
            ((r = e.alternate),
            r !== null && r.memoizedState !== null
              ? ((r = Ll), (Ll = 16777216), Rl(e, t, n), (Ll = r))
              : Rl(e, t, n));
          break;
        default:
          Rl(e, t, n);
      }
    }
    function Bl(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do ((t = e.sibling), (e.sibling = null), (e = t));
        while (e !== null);
      }
    }
    function Vl(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((dl = r), Wl(r, e));
          }
        Bl(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Hl(e), (e = e.sibling));
    }
    function Hl(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          (Vl(e), e.flags & 2048 && Xc(9, e, e.return));
          break;
        case 3:
          Vl(e);
          break;
        case 12:
          Vl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Ul(e))
            : Vl(e);
          break;
        default:
          Vl(e);
      }
    }
    function Ul(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null)
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            ((dl = r), Wl(r, e));
          }
        Bl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Xc(8, t, t.return), Ul(t));
            break;
          case 22:
            ((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Ul(t)));
            break;
          default:
            Ul(t);
        }
        e = e.sibling;
      }
    }
    function Wl(e, t) {
      for (; dl !== null;) {
        var n = dl;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Xc(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            fa(n.memoizedState.cache);
        }
        if (((r = n.child), r !== null)) ((r.return = n), (dl = r));
        else
          a: for (n = e; dl !== null;) {
            r = dl;
            var i = r.sibling,
              a = r.return;
            if ((ml(r), r === n)) {
              dl = null;
              break a;
            }
            if (i !== null) {
              ((i.return = a), (dl = i));
              break a;
            }
            dl = a;
          }
      }
    }
    var Gl = {
        getCacheForType: function (e) {
          var t = ia(ua),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return ia(ua).controller.signal;
        },
      },
      Kl = typeof WeakMap == `function` ? WeakMap : Map,
      R = 0,
      ql = null,
      z = null,
      B = 0,
      V = 0,
      Jl = null,
      Yl = !1,
      Xl = !1,
      Zl = !1,
      Ql = 0,
      $l = 0,
      eu = 0,
      tu = 0,
      nu = 0,
      ru = 0,
      iu = 0,
      au = null,
      ou = null,
      su = !1,
      cu = 0,
      lu = 0,
      uu = 1 / 0,
      du = null,
      fu = null,
      pu = 0,
      mu = null,
      hu = null,
      gu = 0,
      _u = 0,
      vu = null,
      yu = null,
      bu = 0,
      xu = null;
    function Su() {
      return R & 2 && B !== 0 ? B & -B : T.T === null ? st() : xd();
    }
    function Cu() {
      if (ru === 0)
        if (!(B & 536870912) || N) {
          var e = Ke;
          ((Ke <<= 1), !(Ke & 3932160) && (Ke = 262144), (ru = e));
        } else ru = 536870912;
      return ((e = oo.current), e !== null && (e.flags |= 32), ru);
    }
    function wu(e, t, n) {
      (((e === ql && (V === 2 || V === 9)) || e.cancelPendingCommit !== null) &&
        (ju(e, 0), Ou(e, B, ru, !1)),
        et(e, n),
        (!(R & 2) || e !== ql) &&
          (e === ql && (!(R & 2) && (tu |= n), $l === 4 && Ou(e, B, ru, !1)), pd(e)));
    }
    function Tu(e, t, n) {
      if (R & 6) throw Error(i(327));
      var r = (!n && (t & 127) == 0 && (t & e.expiredLanes) === 0) || Xe(e, t),
        a = r ? zu(e, t) : Lu(e, t, !0),
        o = r;
      do {
        if (a === 0) {
          Xl && !r && Ou(e, t, 0, !1);
          break;
        } else {
          if (((n = e.current.alternate), o && !Du(n))) {
            ((a = Lu(e, t, !1)), (o = !1));
            continue;
          }
          if (a === 2) {
            if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
            else
              ((s = e.pendingLanes & -536870913),
                (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
            if (s !== 0) {
              t = s;
              a: {
                var c = e;
                a = au;
                var l = c.current.memoizedState.isDehydrated;
                if ((l && (ju(c, s).flags |= 256), (s = Lu(c, s, !1)), s !== 2)) {
                  if (Zl && !l) {
                    ((c.errorRecoveryDisabledLanes |= o), (tu |= o), (a = 4));
                    break a;
                  }
                  ((o = ou),
                    (ou = a),
                    o !== null && (ou === null ? (ou = o) : ou.push.apply(ou, o)));
                }
                a = s;
              }
              if (((o = !1), a !== 2)) continue;
            }
          }
          if (a === 1) {
            (ju(e, 0), Ou(e, t, 0, !0));
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
                Ou(r, t, ru, !Yl);
                break a;
              case 2:
                ou = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i(329));
            }
            if ((t & 62914560) === t && ((a = cu + 300 - ke()), 10 < a)) {
              if ((Ou(r, t, ru, !Yl), Ye(r, 0, !0) !== 0)) break a;
              ((gu = t),
                (r.timeoutHandle = rf(
                  Eu.bind(null, r, n, ou, du, su, t, ru, tu, iu, Yl, o, `Throttled`, -0, 0),
                  a,
                )));
              break a;
            }
            Eu(r, n, ou, du, su, t, ru, tu, iu, Yl, o, null, -0, 0);
          }
        }
        break;
      } while (1);
      pd(e);
    }
    function Eu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      if (((e.timeoutHandle = -1), (d = t.subtreeFlags), d & 8192 || (d & 16785408) == 16785408)) {
        ((d = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: nn,
        }),
          zl(t, a, d));
        var m = (a & 62914560) === a ? cu - ke() : (a & 4194048) === a ? lu - ke() : 0;
        if (((m = rp(d, m)), m !== null)) {
          ((gu = a),
            (e.cancelPendingCommit = m(Ku.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p))),
            Ou(e, a, o, !l));
          return;
        }
      }
      Ku(e, t, a, n, r, i, o, s, c);
    }
    function Du(e) {
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
              if (!Tr(a(), i)) return !1;
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
    function Ou(e, t, n, r) {
      ((t &= ~nu),
        (t &= ~tu),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        r && (e.warmLanes |= t),
        (r = e.expirationTimes));
      for (var i = t; 0 < i;) {
        var a = 31 - Ve(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && nt(e, n, t);
    }
    function ku() {
      return R & 6 ? !0 : (md(0, !1), !1);
    }
    function Au() {
      if (z !== null) {
        if (V === 0) var e = z.return;
        else ((e = z), (Xi = Yi = null), Po(e), (Fa = null), (Ia = 0), (e = z));
        for (; e !== null;) (Jc(e.alternate, e), (e = e.return));
        z = null;
      }
    }
    function ju(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), af(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (gu = 0),
        Au(),
        (ql = e),
        (z = n = pi(e.current, null)),
        (B = t),
        (V = 0),
        (Jl = null),
        (Yl = !1),
        (Xl = Xe(e, t)),
        (Zl = !1),
        (iu = ru = nu = tu = eu = $l = 0),
        (ou = au = null),
        (su = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Ve(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Ql = t), ri(), n);
    }
    function Mu(e, t) {
      ((P = null),
        (T.H = Ws),
        t === Ta || t === Da
          ? ((t = Na()), (V = 3))
          : t === Ea
            ? ((t = Na()), (V = 4))
            : (V = t === cc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Jl = t),
        z === null && (($l = 1), nc(e, xi(t, e.current))));
    }
    function Nu() {
      var e = oo.current;
      return e === null
        ? !0
        : (B & 4194048) === B
          ? so === null
          : (B & 62914560) === B || B & 536870912
            ? e === so
            : !1;
    }
    function Pu() {
      var e = T.H;
      return ((T.H = Ws), e === null ? Ws : e);
    }
    function Fu() {
      var e = T.A;
      return ((T.A = Gl), e);
    }
    function Iu() {
      (($l = 4),
        Yl || ((B & 4194048) !== B && oo.current !== null) || (Xl = !0),
        (!(eu & 134217727) && !(tu & 134217727)) || ql === null || Ou(ql, B, ru, !1));
    }
    function Lu(e, t, n) {
      var r = R;
      R |= 2;
      var i = Pu(),
        a = Fu();
      ((ql !== e || B !== t) && ((du = null), ju(e, t)), (t = !1));
      var o = $l;
      a: do
        try {
          if (V !== 0 && z !== null) {
            var s = z,
              c = Jl;
            switch (V) {
              case 8:
                (Au(), (o = 6));
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                oo.current === null && (t = !0);
                var l = V;
                if (((V = 0), (Jl = null), Uu(e, s, c, l), n && Xl)) {
                  o = 0;
                  break a;
                }
                break;
              default:
                ((l = V), (V = 0), (Jl = null), Uu(e, s, c, l));
            }
          }
          (Ru(), (o = $l));
          break;
        } catch (t) {
          Mu(e, t);
        }
      while (1);
      return (
        t && e.shellSuspendCounter++,
        (Xi = Yi = null),
        (R = r),
        (T.H = i),
        (T.A = a),
        z === null && ((ql = null), (B = 0), ri()),
        o
      );
    }
    function Ru() {
      for (; z !== null;) Vu(z);
    }
    function zu(e, t) {
      var n = R;
      R |= 2;
      var r = Pu(),
        a = Fu();
      ql !== e || B !== t ? ((du = null), (uu = ke() + 500), ju(e, t)) : (Xl = Xe(e, t));
      a: do
        try {
          if (V !== 0 && z !== null) {
            t = z;
            var o = Jl;
            b: switch (V) {
              case 1:
                ((V = 0), (Jl = null), Uu(e, t, o, 1));
                break;
              case 2:
              case 9:
                if (ka(o)) {
                  ((V = 0), (Jl = null), Hu(t));
                  break;
                }
                ((t = function () {
                  ((V !== 2 && V !== 9) || ql !== e || (V = 7), pd(e));
                }),
                  o.then(t, t));
                break a;
              case 3:
                V = 7;
                break a;
              case 4:
                V = 5;
                break a;
              case 7:
                ka(o) ? ((V = 0), (Jl = null), Hu(t)) : ((V = 0), (Jl = null), Uu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (z.tag) {
                  case 26:
                    s = z.memoizedState;
                  case 5:
                  case 27:
                    var c = z;
                    if (s ? ep(s) : c.stateNode.complete) {
                      ((V = 0), (Jl = null));
                      var l = c.sibling;
                      if (l !== null) z = l;
                      else {
                        var u = c.return;
                        u === null ? (z = null) : ((z = u), Wu(u));
                      }
                      break b;
                    }
                }
                ((V = 0), (Jl = null), Uu(e, t, o, 5));
                break;
              case 6:
                ((V = 0), (Jl = null), Uu(e, t, o, 6));
                break;
              case 8:
                (Au(), ($l = 6));
                break a;
              default:
                throw Error(i(462));
            }
          }
          Bu();
          break;
        } catch (t) {
          Mu(e, t);
        }
      while (1);
      return (
        (Xi = Yi = null),
        (T.H = r),
        (T.A = a),
        (R = n),
        z === null ? ((ql = null), (B = 0), ri(), $l) : 0
      );
    }
    function Bu() {
      for (; z !== null && !De();) Vu(z);
    }
    function Vu(e) {
      var t = zc(e.alternate, e, Ql);
      ((e.memoizedProps = e.pendingProps), t === null ? Wu(e) : (z = t));
    }
    function Hu(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Sc(n, t, t.pendingProps, t.type, void 0, B);
          break;
        case 11:
          t = Sc(n, t, t.pendingProps, t.type.render, t.ref, B);
          break;
        case 5:
          Po(t);
        default:
          (Jc(n, t), (t = z = mi(t, Ql)), (t = zc(n, t, Ql)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Wu(e) : (z = t));
    }
    function Uu(e, t, n, r) {
      ((Xi = Yi = null), Po(t), (Fa = null), (Ia = 0));
      var i = t.return;
      try {
        if (sc(e, i, t, n, B)) {
          (($l = 1), nc(e, xi(n, e.current)), (z = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((z = i), t);
        (($l = 1), nc(e, xi(n, e.current)), (z = null));
        return;
      }
      t.flags & 32768
        ? (N || r === 1
            ? (e = !0)
            : Xl || B & 536870912
              ? (e = !1)
              : ((Yl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = oo.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
          Gu(t, e))
        : Wu(t);
    }
    function Wu(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          Gu(t, Yl);
          return;
        }
        e = t.return;
        var n = qc(t.alternate, t, Ql);
        if (n !== null) {
          z = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          z = t;
          return;
        }
        z = t = e;
      } while (t !== null);
      $l === 0 && ($l = 5);
    }
    function Gu(e, t) {
      do {
        var n = I(e.alternate, e);
        if (n !== null) {
          ((n.flags &= 32767), (z = n));
          return;
        }
        if (
          ((n = e.return),
          n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          z = e;
          return;
        }
        z = e = n;
      } while (e !== null);
      (($l = 6), (z = null));
    }
    function Ku(e, t, n, r, a, o, s, c, l) {
      e.cancelPendingCommit = null;
      do Zu();
      while (pu !== 0);
      if (R & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        if (
          ((o = t.lanes | t.childLanes),
          (o |= ni),
          tt(e, n, o, s, c, l),
          e === ql && ((z = ql = null), (B = 0)),
          (hu = t),
          (mu = e),
          (gu = n),
          (_u = o),
          (vu = a),
          (yu = r),
          t.subtreeFlags & 10256 || t.flags & 10256
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              od(Ne, function () {
                return (Qu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = (t.flags & 13878) != 0),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = T.T), (T.T = null), (a = E.p), (E.p = 2), (s = R), (R |= 4));
          try {
            fl(e, t, n);
          } finally {
            ((R = s), (E.p = a), (T.T = r));
          }
        }
        ((pu = 1), qu(), Ju(), Yu());
      }
    }
    function qu() {
      if (pu === 1) {
        pu = 0;
        var e = mu,
          t = hu,
          n = (t.flags & 13878) != 0;
        if (t.subtreeFlags & 13878 || n) {
          ((n = T.T), (T.T = null));
          var r = E.p;
          E.p = 2;
          var i = R;
          R |= 4;
          try {
            Tl(t, e);
            var a = Xd,
              o = Ar(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && kr(s.ownerDocument.documentElement, s)) {
              if (c !== null && jr(s)) {
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
                    var _ = Or(s, h),
                      v = Or(s, g);
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
            ((_p = !!Yd), (Xd = Yd = null));
          } finally {
            ((R = i), (E.p = r), (T.T = n));
          }
        }
        ((e.current = t), (pu = 2));
      }
    }
    function Ju() {
      if (pu === 2) {
        pu = 0;
        var e = mu,
          t = hu,
          n = (t.flags & 8772) != 0;
        if (t.subtreeFlags & 8772 || n) {
          ((n = T.T), (T.T = null));
          var r = E.p;
          E.p = 2;
          var i = R;
          R |= 4;
          try {
            pl(e, t.alternate, t);
          } finally {
            ((R = i), (E.p = r), (T.T = n));
          }
        }
        pu = 3;
      }
    }
    function Yu() {
      if (pu === 4 || pu === 3) {
        ((pu = 0), Oe());
        var e = mu,
          t = hu,
          n = gu,
          r = yu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (pu = 5)
          : ((pu = 0), (hu = mu = null), Xu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (fu = null),
          ot(n),
          (t = t.stateNode),
          ze && typeof ze.onCommitFiberRoot == `function`)
        )
          try {
            ze.onCommitFiberRoot(Re, t, void 0, (t.current.flags & 128) == 128);
          } catch {}
        if (r !== null) {
          ((t = T.T), (i = E.p), (E.p = 2), (T.T = null));
          try {
            for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
              var s = r[o];
              a(s.value, { componentStack: s.stack });
            }
          } finally {
            ((T.T = t), (E.p = i));
          }
        }
        (gu & 3 && Zu(),
          pd(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === xu ? bu++ : ((bu = 0), (xu = e))) : (bu = 0),
          md(0, !1));
      }
    }
    function Xu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), fa(t)));
    }
    function Zu() {
      return (qu(), Ju(), Yu(), Qu());
    }
    function Qu() {
      if (pu !== 5) return !1;
      var e = mu,
        t = _u;
      _u = 0;
      var n = ot(gu),
        r = T.T,
        a = E.p;
      try {
        ((E.p = 32 > n ? 32 : n), (T.T = null), (n = vu), (vu = null));
        var o = mu,
          s = gu;
        if (((pu = 0), (hu = mu = null), (gu = 0), R & 6)) throw Error(i(331));
        var c = R;
        if (
          ((R |= 4),
          Hl(o.current),
          Pl(o, o.current, s, n),
          (R = c),
          md(0, !1),
          ze && typeof ze.onPostCommitFiberRoot == `function`)
        )
          try {
            ze.onPostCommitFiberRoot(Re, o);
          } catch {}
        return !0;
      } finally {
        ((E.p = a), (T.T = r), Xu(e, t));
      }
    }
    function $u(e, t, n) {
      ((t = xi(n, t)),
        (t = ic(e.stateNode, t, 2)),
        (e = qa(e, t, 2)),
        e !== null && (et(e, 2), pd(e)));
    }
    function ed(e, t, n) {
      if (e.tag === 3) $u(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            $u(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` && (fu === null || !fu.has(r)))
            ) {
              ((e = xi(n, e)),
                (n = ac(2)),
                (r = qa(t, n, 2)),
                r !== null && (oc(n, r, t, e), et(r, 2), pd(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function td(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Kl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Zl = !0), i.add(n), (e = nd.bind(null, e, t, n)), t.then(e, e));
    }
    function nd(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        ql === e &&
          (B & n) === n &&
          ($l === 4 || ($l === 3 && (B & 62914560) === B && 300 > ke() - cu)
            ? !(R & 2) && ju(e, 0)
            : (nu |= n),
          iu === B && (iu = 0)),
        pd(e));
    }
    function rd(e, t) {
      (t === 0 && (t = Qe()), (e = oi(e, t)), e !== null && (et(e, t), pd(e)));
    }
    function id(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), rd(e, n));
    }
    function ad(e, t) {
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
      (r !== null && r.delete(t), rd(e, n));
    }
    function od(e, t) {
      return Te(e, t);
    }
    var sd = null,
      cd = null,
      ld = !1,
      ud = !1,
      dd = !1,
      fd = 0;
    function pd(e) {
      (e !== cd && e.next === null && (cd === null ? (sd = cd = e) : (cd = cd.next = e)),
        (ud = !0),
        ld || ((ld = !0), bd()));
    }
    function md(e, t) {
      if (!dd && ud) {
        dd = !0;
        do
          for (var n = !1, r = sd; r !== null;) {
            if (!t)
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Ve(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), yd(r, a));
              } else
                ((a = B),
                  (a = Ye(
                    r,
                    r === ql ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || Xe(r, a) || ((n = !0), yd(r, a)));
            r = r.next;
          }
        while (n);
        dd = !1;
      }
    }
    function hd() {
      gd();
    }
    function gd() {
      ud = ld = !1;
      var e = 0;
      fd !== 0 && nf() && (e = fd);
      for (var t = ke(), n = null, r = sd; r !== null;) {
        var i = r.next,
          a = _d(r, t);
        (a === 0
          ? ((r.next = null), n === null ? (sd = i) : (n.next = i), i === null && (cd = n))
          : ((n = r), (e !== 0 || a & 3) && (ud = !0)),
          (r = i));
      }
      ((pu !== 0 && pu !== 5) || md(e, !1), fd !== 0 && (fd = 0));
    }
    function _d(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Ve(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Ze(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = ql),
        (n = B),
        (n = Ye(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (V === 2 || V === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Ee(r), (e.callbackNode = null), (e.callbackPriority = 0)
        );
      if (!(n & 3) || Xe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Ee(r), ot(n))) {
          case 2:
          case 8:
            n = Me;
            break;
          case 32:
            n = Ne;
            break;
          case 268435456:
            n = Fe;
            break;
          default:
            n = Ne;
        }
        return (
          (r = vd.bind(null, e)), (n = Te(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t
        );
      }
      return (
        r !== null && r !== null && Ee(r), (e.callbackPriority = 2), (e.callbackNode = null), 2
      );
    }
    function vd(e, t) {
      if (pu !== 0 && pu !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Zu() && e.callbackNode !== n) return null;
      var r = B;
      return (
        (r = Ye(e, e === ql ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (Tu(e, r, t),
            _d(e, ke()),
            e.callbackNode != null && e.callbackNode === n ? vd.bind(null, e) : null)
      );
    }
    function yd(e, t) {
      if (Zu()) return null;
      Tu(e, t, !0);
    }
    function bd() {
      sf(function () {
        R & 6 ? Te(je, hd) : gd();
      });
    }
    function xd() {
      if (fd === 0) {
        var e = ha;
        (e === 0 && ((e = Ge), (Ge <<= 1), !(Ge & 261888) && (Ge = 256)), (fd = e));
      }
      return fd;
    }
    function Sd(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : tn(`` + e);
    }
    function Cd(e, t) {
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
    function wd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Sd((i[ut] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ut] || null) ? Sd(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new wn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (fd !== 0) {
                    var e = o ? Cd(i, o) : new FormData(i);
                    As(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? Cd(i, o) : new FormData(i)),
                    As(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var Td = 0; Td < Zr.length; Td++) {
      var Ed = Zr[Td];
      Qr(Ed.toLowerCase(), `on` + (Ed[0].toUpperCase() + Ed.slice(1)));
    }
    (Qr(Ur, `onAnimationEnd`),
      Qr(Wr, `onAnimationIteration`),
      Qr(Gr, `onAnimationStart`),
      Qr(`dblclick`, `onDoubleClick`),
      Qr(`focusin`, `onFocus`),
      Qr(`focusout`, `onBlur`),
      Qr(Kr, `onTransitionRun`),
      Qr(qr, `onTransitionStart`),
      Qr(Jr, `onTransitionCancel`),
      Qr(Yr, `onTransitionEnd`),
      Et(`onMouseEnter`, [`mouseout`, `mouseover`]),
      Et(`onMouseLeave`, [`mouseout`, `mouseover`]),
      Et(`onPointerEnter`, [`pointerout`, `pointerover`]),
      Et(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Tt(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Tt(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Tt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Tt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Tt(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Tt(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var Dd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      Od = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Dd),
      );
    function kd(e, t) {
      t = (t & 4) != 0;
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
                $r(e);
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
                $r(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function H(e, t) {
      var n = t[ft];
      n === void 0 && (n = t[ft] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Nd(t, e, 2, !1), n.add(r));
    }
    function Ad(e, t, n) {
      var r = 0;
      (t && (r |= 4), Nd(n, e, r, t));
    }
    var jd = `_reactListening` + Math.random().toString(36).slice(2);
    function Md(e) {
      if (!e[jd]) {
        ((e[jd] = !0),
          Ct.forEach(function (t) {
            t !== `selectionchange` && (Od.has(t) || Ad(t, !1, e), Ad(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[jd] || ((t[jd] = !0), Ad(`selectionchange`, !1, t));
      }
    }
    function Nd(e, t, n, r) {
      switch (wp(t)) {
        case 2:
          var i = vp;
          break;
        case 8:
          i = yp;
          break;
        default:
          i = bp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !pn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Pd(e, t, n, r, i) {
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
              if (((s = vt(c)), s === null)) return;
              if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                r = a = s;
                continue a;
              }
              c = c.parentNode;
            }
          }
          r = r.return;
        }
      un(function () {
        var r = a,
          i = an(n),
          s = [];
        a: {
          var c = Xr.get(e);
          if (c !== void 0) {
            var l = wn,
              u = e;
            switch (e) {
              case `keypress`:
                if (yn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Hn;
                break;
              case `focusin`:
                ((u = `focus`), (l = Nn));
                break;
              case `focusout`:
                ((u = `blur`), (l = Nn));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = Nn;
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
                l = jn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Mn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = Wn;
                break;
              case Ur:
              case Wr:
              case Gr:
                l = Pn;
                break;
              case Yr:
                l = Gn;
                break;
              case `scroll`:
              case `scrollend`:
                l = En;
                break;
              case `wheel`:
                l = Kn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Fn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Un;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = qn;
            }
            var d = (t & 4) != 0,
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
                  ((g = dn(m, p)), g != null && d.push(Fd(m, g, h))),
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
              c && n !== rn && (u = n.relatedTarget || n.fromElement) && (vt(u) || u[dt]))
            )
              break a;
            if (
              (l || c) &&
              ((c =
                i.window === i
                  ? i
                  : (c = i.ownerDocument)
                    ? c.defaultView || c.parentWindow
                    : window),
              l
                ? ((u = n.relatedTarget || n.toElement),
                  (l = r),
                  (u = u ? vt(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = jn),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Un), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : bt(l)),
                (h = u == null ? c : bt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                vt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = Ld, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
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
              (l !== null && Rd(s, c, l, d, !1), u !== null && f !== null && Rd(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? bt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = pr;
            else if (sr(c))
              if (mr) v = Cr;
              else {
                v = xr;
                var y = br;
              }
            else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Qt(r.elementType) && (v = pr)
                  : (v = Sr));
            if ((v &&= v(e, r))) {
              cr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Wt(c, `number`, c.value));
          }
          switch (((y = r ? bt(r) : window), e)) {
            case `focusin`:
              (sr(y) || y.contentEditable === `true`) && ((Nr = y), (Pr = r), (Fr = null));
              break;
            case `focusout`:
              Fr = Pr = Nr = null;
              break;
            case `mousedown`:
              Ir = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((Ir = !1), Lr(s, n, i));
              break;
            case `selectionchange`:
              if (Mr) break;
            case `keydown`:
            case `keyup`:
              Lr(s, n, i);
          }
          var b;
          if (Yn)
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
            rr
              ? tr(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (Qn &&
              n.locale !== `ko` &&
              (rr || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && rr && (b = vn())
                : ((hn = i), (gn = `value` in hn ? hn.value : hn.textContent), (rr = !0))),
            (y = Id(r, x)),
            0 < y.length &&
              ((x = new In(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = nr(n)), b !== null && (x.data = b)))),
            (b = Zn ? ir(e, n) : ar(e, n)) &&
              ((x = Id(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new In(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            wd(s, e, r, n, i));
        }
        kd(s, t);
      });
    }
    function Fd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Id(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = dn(e, n)),
            i != null && r.unshift(Fd(e, i, a)),
            (i = dn(e, t)),
            i != null && r.push(Fd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function Ld(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Rd(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = dn(n, a)), l != null && o.unshift(Fd(n, l, c)))
            : i || ((l = dn(n, a)), l != null && o.push(Fd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var zd = /\r\n?/g,
      Bd = /\u0000|\uFFFD/g;
    function Vd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          zd,
          `
`,
        )
        .replace(Bd, ``);
    }
    function Hd(e, t) {
      return ((t = Vd(t)), Vd(e) === t);
    }
    function Ud(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Jt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Jt(e, `` + r);
          break;
        case `className`:
          Mt(e, `class`, r);
          break;
        case `tabIndex`:
          Mt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Mt(e, n, r);
          break;
        case `style`:
          Zt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            Mt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            typeof r == `boolean`
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = tn(`` + r)), e.setAttribute(n, r));
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(
              n,
              `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
            );
            break;
          } else
            typeof o == `function` &&
              (n === `formAction`
                ? (t !== `input` && Ud(e, t, `name`, a.name, a, null),
                  Ud(e, t, `formEncType`, a.formEncType, a, null),
                  Ud(e, t, `formMethod`, a.formMethod, a, null),
                  Ud(e, t, `formTarget`, a.formTarget, a, null))
                : (Ud(e, t, `encType`, a.encType, a, null),
                  Ud(e, t, `method`, a.method, a, null),
                  Ud(e, t, `target`, a.target, a, null)));
          if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          ((r = tn(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = nn);
          break;
        case `onScroll`:
          r != null && H(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && H(`scrollend`, e);
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
          if (
            r == null ||
            typeof r == `function` ||
            typeof r == `boolean` ||
            typeof r == `symbol`
          ) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          ((n = tn(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
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
          r && typeof r != `function` && typeof r != `symbol`
            ? e.setAttribute(n, ``)
            : e.removeAttribute(n);
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
          (H(`beforetoggle`, e), H(`toggle`, e), jt(e, `popover`, r));
          break;
        case `xlinkActuate`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Nt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Nt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          jt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = $t.get(n) || n), jt(e, n, r));
      }
    }
    function Wd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Zt(e, r, o);
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
          typeof r == `string`
            ? Jt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Jt(e, `` + r);
          break;
        case `onScroll`:
          r != null && H(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && H(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = nn);
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
          if (!wt.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ut] || null),
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
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : jt(e, n, r);
            }
      }
    }
    function Gd(e, t, n) {
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
          (H(`error`, e), H(`load`, e));
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
                    Ud(e, t, o, s, n, null);
                }
            }
          (a && Ud(e, t, `srcSet`, n.srcSet, n, null), r && Ud(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          H(`invalid`, e);
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
                    Ud(e, t, r, d, n, null);
                }
            }
          Ut(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (H(`invalid`, e), (r = s = o = null), n))
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
                  Ud(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Gt(e, !!r, n, !0) : Gt(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (H(`invalid`, e), (o = a = r = null), n))
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
                  Ud(e, t, s, c, n, null);
              }
          qt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  Ud(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (H(`beforetoggle`, e), H(`toggle`, e), H(`cancel`, e), H(`close`, e));
          break;
        case `iframe`:
        case `object`:
          H(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < Dd.length; r++) H(Dd[r], e);
          break;
        case `image`:
          (H(`error`, e), H(`load`, e));
          break;
        case `details`:
          H(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (H(`error`, e), H(`load`, e));
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
                  Ud(e, t, u, r, n, null);
              }
          return;
        default:
          if (Qt(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Wd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && Ud(e, t, c, r, n, null));
    }
    function Kd(e, t, n, r) {
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
                  r.hasOwnProperty(m) || Ud(e, t, m, null, r, f);
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
                  m !== f && Ud(e, t, p, m, r, f);
              }
          }
          Ht(e, s, c, l, u, d, o, a);
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
                  r.hasOwnProperty(o) || Ud(e, t, o, null, r, l);
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
                  o !== l && Ud(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Gt(e, !!n, n ? [] : ``, !1) : Gt(e, !!n, t, !0))
              : Gt(e, !!n, p, !1));
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
                  Ud(e, t, c, null, r, a);
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
                  a !== o && Ud(e, t, s, a, r, o);
              }
          Kt(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  Ud(e, t, h, null, r, p);
              }
          for (l in r)
            if (
              ((p = r[l]), (m = n[l]), r.hasOwnProperty(l) && p !== m && (p != null || m != null))
            )
              switch (l) {
                case `selected`:
                  e.selected = p && typeof p != `function` && typeof p != `symbol`;
                  break;
                default:
                  Ud(e, t, l, p, r, m);
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
            ((p = n[g]),
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Ud(e, t, g, null, r, p));
          for (u in r)
            if (
              ((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (p != null || m != null))
            )
              switch (u) {
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (p != null) throw Error(i(137, t));
                  break;
                default:
                  Ud(e, t, u, p, r, m);
              }
          return;
        default:
          if (Qt(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Wd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Wd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Ud(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || Ud(e, t, f, p, r, m));
    }
    function qd(e) {
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
    function Jd() {
      if (typeof performance.getEntriesByType == `function`) {
        for (
          var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0;
          r < n.length;
          r++
        ) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && qd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && qd(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
            }
            if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e)) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && ((e = navigator.connection.downlink), typeof e == `number`)
        ? e
        : 5;
    }
    var Yd = null,
      Xd = null;
    function Zd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Qd(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function $d(e, t) {
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
    function ef(e, t) {
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
    var tf = null;
    function nf() {
      var e = window.event;
      return e && e.type === `popstate` ? (e === tf ? !1 : ((tf = e), !0)) : ((tf = null), !1);
    }
    var rf = typeof setTimeout == `function` ? setTimeout : void 0,
      af = typeof clearTimeout == `function` ? clearTimeout : void 0,
      of = typeof Promise == `function` ? Promise : void 0,
      sf =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : of === void 0
            ? rf
            : function (e) {
                return of.resolve(null).then(e).catch(cf);
              };
    function cf(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function lf(e) {
      return e === `head`;
    }
    function uf(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
          if (((n = i.data), n === `/$` || n === `/&`)) {
            if (r === 0) {
              (e.removeChild(i), Up(t));
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;
          else if (n === `html`) wf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), wf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[gt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && wf(e.ownerDocument.body);
        n = i;
      } while (n);
      Up(t);
    }
    function df(e, t) {
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
        )
          if (((n = r.data), n === `/$`)) {
            if (e === 0) break;
            e--;
          } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
        n = r;
      } while (n);
    }
    function ff(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (ff(n), _t(n));
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
    function pf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r)
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        else if (!e[gt])
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
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin) ||
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
                  e.getAttribute(`crossorigin`) !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  a &&
                  e.hasAttribute(`async`) &&
                  !e.hasAttribute(`itemprop`))
              )
                break;
              return e;
            default:
              return e;
          }
        if (((e = yf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function mf(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = yf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function hf(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = yf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function gf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function _f(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function vf(e, t) {
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
    function yf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === `$` ||
              t === `$!` ||
              t === `$?` ||
              t === `$~` ||
              t === `&` ||
              t === `F!` ||
              t === `F`)
          )
            break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var bf = null;
    function xf(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return yf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Sf(e) {
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
    function Cf(e, t, n) {
      switch (((t = Zd(n)), e)) {
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
    function wf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      _t(e);
    }
    var Tf = new Map(),
      Ef = new Set();
    function Df(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var Of = E.d;
    E.d = { f: kf, r: Af, D: Nf, C: Pf, L: Ff, m: If, X: Rf, S: Lf, M: zf };
    function kf() {
      var e = Of.f(),
        t = ku();
      return e || t;
    }
    function Af(e) {
      var t = yt(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ms(t) : Of.r(e);
    }
    var jf = typeof document > `u` ? null : document;
    function Mf(e, t, n) {
      var r = jf;
      if (r && typeof t == `string` && t) {
        var i = Vt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          Ef.has(i) ||
            (Ef.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Gd(t, `link`, e), St(t), r.head.appendChild(t))));
      }
    }
    function Nf(e) {
      (Of.D(e), Mf(`dns-prefetch`, e, null));
    }
    function Pf(e, t) {
      (Of.C(e, t), Mf(`preconnect`, e, t));
    }
    function Ff(e, t, n) {
      Of.L(e, t, n);
      var r = jf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Vt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Vt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Vt(n.imageSizes) + `"]`))
          : (i += `[href="` + Vt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Vf(e);
            break;
          case `script`:
            a = Wf(e);
        }
        Tf.has(a) ||
          ((e = f(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          Tf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Hf(a))) ||
            (t === `script` && r.querySelector(Gf(a))) ||
            ((t = r.createElement(`link`)), Gd(t, `link`, e), St(t), r.head.appendChild(t)));
      }
    }
    function If(e, t) {
      Of.m(e, t);
      var n = jf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Vt(r) + `"][href="` + Vt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Wf(e);
        }
        if (
          !Tf.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)), Tf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Gf(a))) return;
          }
          ((r = n.createElement(`link`)), Gd(r, `link`, e), St(r), n.head.appendChild(r));
        }
      }
    }
    function Lf(e, t, n) {
      Of.S(e, t, n);
      var r = jf;
      if (r && e) {
        var i = xt(r).hoistableStyles,
          a = Vf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Hf(a)))) s.loading = 5;
          else {
            ((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = Tf.get(a)) && Jf(e, n));
            var c = (o = r.createElement(`link`));
            (St(c),
              Gd(c, `link`, e),
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
              qf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function Rf(e, t) {
      Of.X(e, t);
      var n = jf;
      if (n && e) {
        var r = xt(n).hoistableScripts,
          i = Wf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Gf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = Tf.get(i)) && Yf(e, t),
            (a = n.createElement(`script`)),
            St(a),
            Gd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function zf(e, t) {
      Of.M(e, t);
      var n = jf;
      if (n && e) {
        var r = xt(n).hoistableScripts,
          i = Wf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Gf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = Tf.get(i)) && Yf(e, t),
            (a = n.createElement(`script`)),
            St(a),
            Gd(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Bf(e, t, n, r) {
      var a = (a = me.current) ? Df(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Vf(n.href)),
              (n = xt(a).hoistableStyles),
              (r = n.get(t)),
              r || ((r = { type: `style`, instance: null, count: 0, state: null }), n.set(t, r)),
              r)
            : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (
            n.rel === `stylesheet` &&
            typeof n.href == `string` &&
            typeof n.precedence == `string`
          ) {
            e = Vf(n.href);
            var o = xt(a).hoistableStyles,
              s = o.get(e);
            if (
              (s ||
                ((a = a.ownerDocument || a),
                (s = {
                  type: `stylesheet`,
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                o.set(e, s),
                (o = a.querySelector(Hf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                Tf.has(e) ||
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
                  Tf.set(e, n),
                  o || U(a, e, n, s.state))),
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
              ? ((t = Wf(n)),
                (n = xt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Vf(e) {
      return `href="` + Vt(e) + `"`;
    }
    function Hf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Uf(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function U(e, t, n, r) {
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
          Gd(t, `link`, n),
          St(t),
          e.head.appendChild(t));
    }
    function Wf(e) {
      return `[src="` + Vt(e) + `"]`;
    }
    function Gf(e) {
      return `script[async]` + e;
    }
    function Kf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Vt(n.href) + `"]`);
            if (r) return ((t.instance = r), St(r), r);
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              St(r),
              Gd(r, `style`, a),
              qf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Vf(n.href);
            var o = e.querySelector(Hf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), St(o), o);
            ((r = Uf(n)),
              (a = Tf.get(a)) && Jf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              St(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Gd(o, `link`, r),
              (t.state.loading |= 4),
              qf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = Wf(n.src)),
              (a = e.querySelector(Gf(o)))
                ? ((t.instance = a), St(a), a)
                : ((r = n),
                  (a = Tf.get(o)) && ((r = f({}, n)), Yf(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  St(a),
                  Gd(a, `link`, r),
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
          ((r = t.instance), (t.state.loading |= 4), qf(r, n.precedence, e));
      return t.instance;
    }
    function qf(e, t, n) {
      for (
        var r = n.querySelectorAll(
            `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
          ),
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
    function Jf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Yf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Xf = null;
    function Zf(e, t, n) {
      if (Xf === null) {
        var r = new Map(),
          i = (Xf = new Map());
        i.set(n, r);
      } else ((i = Xf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[gt] || a[M] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
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
    function Qf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function $f(e, t, n) {
      if (n === 1 || t.itemProp != null) return !1;
      switch (e) {
        case `meta`:
        case `title`:
          return !0;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return !0;
        case `link`:
          if (
            typeof t.rel != `string` ||
            typeof t.href != `string` ||
            t.href === `` ||
            t.onLoad ||
            t.onError
          )
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
    function ep(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function tp(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Vf(r.href),
            a = t.querySelector(Hf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = ip.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              St(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = Uf(r)),
            (i = Tf.get(i)) && Jf(r, i),
            (a = a.createElement(`link`)),
            St(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Gd(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = ip.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var np = 0;
    function rp(e, t) {
      return (
        e.stylesheets && e.count === 0 && op(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && op(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && np === 0 && (np = 62500 * Jd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && op(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > np ? 50 : 800) + t,
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
    function ip() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) op(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var ap = null;
    function op(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, (ap = new Map()), t.forEach(sp, e), (ap = null), ip.call(e)));
    }
    function sp(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ap.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), ap.set(e, n));
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
          (r = ip.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var cp = {
      $$typeof: b,
      Provider: null,
      Consumer: null,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
    };
    function lp(e, t, n, r, i, a, o, s, c) {
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
        (this.expirationTimes = $e(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = $e(0)),
        (this.hiddenUpdates = $e(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function up(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new lp(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = di(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = da()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        Wa(a),
        e
      );
    }
    function dp(e) {
      return e ? ((e = li), e) : li;
    }
    function fp(e, t, n, r, i, a) {
      ((i = dp(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Ka(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = qa(e, r, t)),
        n !== null && (wu(n, e, t), Ja(n, e, t)));
    }
    function pp(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function mp(e, t) {
      (pp(e, t), (e = e.alternate) && pp(e, t));
    }
    function hp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = oi(e, 67108864);
        (t !== null && wu(t, e, 67108864), mp(e, 67108864));
      }
    }
    function gp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Su();
        t = at(t);
        var n = oi(e, t);
        (n !== null && wu(n, e, t), mp(e, t));
      }
    }
    var _p = !0;
    function vp(e, t, n, r) {
      var i = T.T;
      T.T = null;
      var a = E.p;
      try {
        ((E.p = 2), bp(e, t, n, r));
      } finally {
        ((E.p = a), (T.T = i));
      }
    }
    function yp(e, t, n, r) {
      var i = T.T;
      T.T = null;
      var a = E.p;
      try {
        ((E.p = 8), bp(e, t, n, r));
      } finally {
        ((E.p = a), (T.T = i));
      }
    }
    function bp(e, t, n, r) {
      if (_p) {
        var i = xp(r);
        if (i === null) (Pd(e, t, r, Sp, n), Np(e, r));
        else if (Fp(i, e, t, n, r)) r.stopPropagation();
        else if ((Np(e, r), t & 4 && -1 < Mp.indexOf(e))) {
          for (; i !== null;) {
            var a = yt(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = Je(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Ve(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (pd(a), !(R & 6) && ((uu = ke() + 500), md(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = oi(a, 2)), s !== null && wu(s, a, 2), ku(), mp(a, 2));
              }
            if (((a = xp(r)), a === null && Pd(e, t, r, Sp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Pd(e, t, r, null, n);
      }
    }
    function xp(e) {
      return ((e = an(e)), Cp(e));
    }
    var Sp = null;
    function Cp(e) {
      if (((Sp = null), (e = vt(e)), e !== null)) {
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
      return ((Sp = e), null);
    }
    function wp(e) {
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
          switch (Ae()) {
            case je:
              return 2;
            case Me:
              return 8;
            case Ne:
            case Pe:
              return 32;
            case Fe:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Tp = !1,
      Ep = null,
      Dp = null,
      Op = null,
      kp = new Map(),
      Ap = new Map(),
      jp = [],
      Mp =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
          ` `,
        );
    function Np(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Ep = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Dp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Op = null;
          break;
        case `pointerover`:
        case `pointerout`:
          kp.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          Ap.delete(t.pointerId);
      }
    }
    function Pp(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = yt(t)), t !== null && hp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Fp(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((Ep = Pp(Ep, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((Dp = Pp(Dp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((Op = Pp(Op, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (kp.set(a, Pp(kp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), Ap.set(a, Pp(Ap.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function Ip(e) {
      var t = vt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                ct(e.priority, function () {
                  gp(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                ct(e.priority, function () {
                  gp(n);
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
    function Lp(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = xp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((rn = r), n.target.dispatchEvent(r), (rn = null));
        } else return ((t = yt(n)), t !== null && hp(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Rp(e, t, n) {
      Lp(e) && n.delete(t);
    }
    function zp() {
      ((Tp = !1),
        Ep !== null && Lp(Ep) && (Ep = null),
        Dp !== null && Lp(Dp) && (Dp = null),
        Op !== null && Lp(Op) && (Op = null),
        kp.forEach(Rp),
        Ap.forEach(Rp));
    }
    function Bp(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        Tp || ((Tp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, zp)));
    }
    var Vp = null;
    function Hp(e) {
      Vp !== e &&
        ((Vp = e),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
          Vp === e && (Vp = null);
          for (var t = 0; t < e.length; t += 3) {
            var n = e[t],
              r = e[t + 1],
              i = e[t + 2];
            if (typeof r != `function`) {
              if (Cp(r || n) === null) continue;
              break;
            }
            var a = yt(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              As(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Up(e) {
      function t(t) {
        return Bp(t, e);
      }
      (Ep !== null && Bp(Ep, e),
        Dp !== null && Bp(Dp, e),
        Op !== null && Bp(Op, e),
        kp.forEach(t),
        Ap.forEach(t));
      for (var n = 0; n < jp.length; n++) {
        var r = jp[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < jp.length && ((n = jp[0]), n.blockedOn === null);)
        (Ip(n), n.blockedOn === null && jp.shift());
      if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
        for (r = 0; r < n.length; r += 3) {
          var i = n[r],
            a = n[r + 1],
            o = i[ut] || null;
          if (typeof a == `function`) o || Hp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ut] || null))) s = o.formAction;
              else if (Cp(i) !== null) continue;
            } else s = o.action;
            (typeof s == `function` ? (n[r + 1] = s) : (n.splice(r, 3), (r -= 3)), Hp(n));
          }
        }
    }
    function Wp() {
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
            navigation.navigate(e.url, {
              state: e.getState(),
              info: `react-transition`,
              history: `replace`,
            });
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
    function Gp(e) {
      this._internalRoot = e;
    }
    ((Kp.prototype.render = Gp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        fp(n, Su(), e, t, null, null);
      }),
      (Kp.prototype.unmount = Gp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (fp(e.current, 2, null, e, null, null), ku(), (t[dt] = null));
          }
        }));
    function Kp(e) {
      this._internalRoot = e;
    }
    Kp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = st();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < jp.length && t !== 0 && t < jp[n].priority; n++);
        (jp.splice(n, 0, e), n === 0 && Ip(e));
      }
    };
    var qp = n.version;
    if (qp !== `19.2.7`) throw Error(i(527, qp, `19.2.7`));
    E.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == `function`
          ? Error(i(188))
          : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
      return ((e = u(t)), (e = e === null ? null : d(e)), (e = e === null ? null : e.stateNode), e);
    };
    var Jp = {
      bundleType: 0,
      version: `19.2.7`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: T,
      reconcilerVersion: `19.2.7`,
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Yp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Yp.isDisabled && Yp.supportsFiber)
        try {
          ((Re = Yp.inject(Jp)), (ze = Yp));
        } catch {}
    }
    e.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = !1,
        r = ``,
        o = $s,
        s = ec,
        c = tc;
      return (
        t != null &&
          (!0 === t.unstable_strictMode && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = up(e, 1, !1, null, null, n, r, null, o, s, c, Wp)),
        (e[dt] = t.current),
        Md(e),
        new Gp(t)
      );
    };
  }),
  Wc = s((e, t) => {
    function n() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = Uc()));
  });
function Gc(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  qc(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Kc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function F(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var qc,
  I,
  Jc = o(() => {
    ((qc = function (e, t) {
      return (
        (qc =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        qc(e, t)
      );
    }),
      (I = function () {
        return (
          (I =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          I.apply(this, arguments)
        );
      }));
  }),
  Yc = o(() => {});
function Xc(e, t) {
  var n = t && t.cache ? t.cache : ol,
    r = t && t.serializer ? t.serializer : il;
  return (t && t.strategy ? t.strategy : tl)(e, { cache: n, serializer: r });
}
function Zc(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function Qc(e, t, n, r) {
  var i = Zc(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function $c(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function el(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function tl(e, t) {
  var n = e.length === 1 ? Qc : $c;
  return el(e, this, n, t.cache.create(), t.serializer);
}
function nl(e, t) {
  return el(e, this, $c, t.cache.create(), t.serializer);
}
function rl(e, t) {
  return el(e, this, Qc, t.cache.create(), t.serializer);
}
var il,
  al,
  ol,
  sl,
  cl = o(() => {
    ((il = function () {
      return JSON.stringify(arguments);
    }),
      (al = (function () {
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
      (ol = {
        create: function () {
          return new al();
        },
      }),
      (sl = { variadic: nl, monadic: rl }));
  }),
  L,
  ll = o(() => {
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
        (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
          `EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT`),
        (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
          `EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT`),
        (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] = `INVALID_PLURAL_ARGUMENT_SELECTOR`),
        (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] = `DUPLICATE_PLURAL_ARGUMENT_SELECTOR`),
        (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] = `DUPLICATE_SELECT_ARGUMENT_SELECTOR`),
        (e[(e.MISSING_OTHER_CLAUSE = 22)] = `MISSING_OTHER_CLAUSE`),
        (e[(e.INVALID_TAG = 23)] = `INVALID_TAG`),
        (e[(e.INVALID_TAG_NAME = 25)] = `INVALID_TAG_NAME`),
        (e[(e.UNMATCHED_CLOSING_TAG = 26)] = `UNMATCHED_CLOSING_TAG`),
        (e[(e.UNCLOSED_TAG = 27)] = `UNCLOSED_TAG`));
    })((L ||= {}));
  });
function ul(e) {
  return e.type === xl.literal;
}
function dl(e) {
  return e.type === xl.argument;
}
function fl(e) {
  return e.type === xl.number;
}
function pl(e) {
  return e.type === xl.date;
}
function ml(e) {
  return e.type === xl.time;
}
function hl(e) {
  return e.type === xl.select;
}
function gl(e) {
  return e.type === xl.plural;
}
function _l(e) {
  return e.type === xl.pound;
}
function vl(e) {
  return e.type === xl.tag;
}
function yl(e) {
  return !!(e && typeof e == `object` && e.type === Sl.number);
}
function bl(e) {
  return !!(e && typeof e == `object` && e.type === Sl.dateTime);
}
var xl,
  Sl,
  Cl = o(() => {
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
    })((xl ||= {})),
      (function (e) {
        ((e[(e.number = 0)] = `number`), (e[(e.dateTime = 1)] = `dateTime`));
      })((Sl ||= {})));
  }),
  wl,
  Tl = o(() => {
    wl = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  });
function El(e) {
  var t = {};
  return (
    e.replace(Dl, function (e) {
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
var Dl,
  Ol = o(() => {
    Dl =
      /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  }),
  kl,
  Al = o(() => {
    kl = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  });
function jl(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  for (
    var t = e.split(kl).filter(function (e) {
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
function Ml(e) {
  return e.replace(/^(.*?)-/, ``);
}
function Nl(e) {
  var t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(zl, function (e, n, r) {
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
function Pl(e) {
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
function Fl(e) {
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
      !Vl.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Il(e) {
  return Pl(e) || {};
}
function Ll(e) {
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
        ((t.style = `unit`), (t.unit = Ml(i.options[0])));
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
        t = I(
          I(I({}, t), { notation: `scientific` }),
          i.options.reduce(function (e, t) {
            return I(I({}, e), Il(t));
          }, {}),
        );
        continue;
      case `engineering`:
        t = I(
          I(I({}, t), { notation: `engineering` }),
          i.options.reduce(function (e, t) {
            return I(I({}, e), Il(t));
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
        i.options[0].replace(Bl, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a) throw Error(`We currently do not support maximum integer digits`);
          else if (o) throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (Vl.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Rl.test(i.stem)) {
      if (i.options.length > 1)
        throw RangeError(`Fraction-precision stems only accept a single optional option`);
      i.stem.replace(Rl, function (e, n, r, i, a, o) {
        return (
          r === `*`
            ? (t.minimumFractionDigits = n.length)
            : i && i[0] === `#`
              ? (t.maximumFractionDigits = i.length)
              : a && o
                ? ((t.minimumFractionDigits = a.length),
                  (t.maximumFractionDigits = a.length + o.length))
                : ((t.minimumFractionDigits = n.length), (t.maximumFractionDigits = n.length)),
          ``
        );
      });
      var a = i.options[0];
      a === `w`
        ? (t = I(I({}, t), { trailingZeroDisplay: `stripIfInteger` }))
        : a && (t = I(I({}, t), Nl(a)));
      continue;
    }
    if (zl.test(i.stem)) {
      t = I(I({}, t), Nl(i.stem));
      continue;
    }
    var o = Pl(i.stem);
    o && (t = I(I({}, t), o));
    var s = Fl(i.stem);
    s && (t = I(I({}, t), s));
  }
  return t;
}
var Rl,
  zl,
  Bl,
  Vl,
  Hl = o(() => {
    (Jc(),
      Al(),
      (Rl = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g),
      (zl = /^(@+)?(\+|#+)?[rs]?$/g),
      (Bl = /(\*)(0+)|(#+)(0+)|(0+)/g),
      (Vl = /^(0+)$/));
  }),
  Ul = o(() => {
    (Ol(), Hl());
  }),
  Wl,
  Gl = o(() => {
    Wl = {
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
function Kl(e, t) {
  for (var n = ``, r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === `j`) {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) (a++, r++);
      var o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = `a`,
        l = R(t);
      for ((l == `H` || l == `k`) && (s = 0); s-- > 0;) n += c;
      for (; o-- > 0;) n = l + n;
    } else i === `J` ? (n += `H`) : (n += i);
  }
  return n;
}
function R(e) {
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
    (Wl[r || ``] || Wl[n || ``] || Wl[`${n}-001`] || Wl[`001`])[0]
  );
}
var ql = o(() => {
  Gl();
});
function z(e, t) {
  return { start: e, end: t };
}
function B(e, t) {
  return new RegExp(e, t);
}
function V(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Jl(e) {
  return V(e) || e === 47;
}
function Yl(e) {
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
function Xl(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  );
}
function Zl(e) {
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
var Ql,
  $l,
  eu,
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
  fu,
  pu,
  mu,
  hu,
  gu,
  _u = o(() => {
    (Jc(),
      ll(),
      Cl(),
      Tl(),
      Ul(),
      ql(),
      (Ql = RegExp(`^${wl.source}*`)),
      ($l = RegExp(`${wl.source}*\$`)),
      (eu = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1)),
      (tu = !!String.fromCodePoint),
      (nu = !!Object.fromEntries),
      (ru = !!String.prototype.codePointAt),
      (iu = !!String.prototype.trimStart),
      (au = !!String.prototype.trimEnd),
      (ou = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
            return (
              typeof e == `number` &&
              isFinite(e) &&
              Math.floor(e) === e &&
              Math.abs(e) <= 9007199254740991
            );
          }),
      (su = !0));
    try {
      su = B(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] === `a`;
    } catch {
      su = !1;
    }
    ((cu = eu
      ? function (e, t, n) {
          return e.startsWith(t, n);
        }
      : function (e, t, n) {
          return e.slice(n, n + t.length) === t;
        }),
      (lu = tu
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
      (uu = nu
        ? Object.fromEntries
        : function (e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                a = i[0];
              t[a] = i[1];
            }
            return t;
          }),
      (du = ru
        ? function (e, t) {
            return e.codePointAt(t);
          }
        : function (e, t) {
            var n = e.length;
            if (!(t < 0 || t >= n)) {
              var r = e.charCodeAt(t),
                i;
              return r < 55296 ||
                r > 56319 ||
                t + 1 === n ||
                (i = e.charCodeAt(t + 1)) < 56320 ||
                i > 57343
                ? r
                : ((r - 55296) << 10) + (i - 56320) + 65536;
            }
          }),
      (fu = iu
        ? function (e) {
            return e.trimStart();
          }
        : function (e) {
            return e.replace(Ql, ``);
          }),
      (pu = au
        ? function (e) {
            return e.trimEnd();
          }
        : function (e) {
            return e.replace($l, ``);
          }),
      su
        ? ((hu = B(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`)),
          (mu = function (e, t) {
            return ((hu.lastIndex = t), hu.exec(e)[1] ?? ``);
          }))
        : (mu = function (e, t) {
            for (var n = []; ;) {
              var r = du(e, t);
              if (r === void 0 || Xl(r) || Zl(r)) break;
              (n.push(r), (t += r >= 65536 ? 2 : 1));
            }
            return lu.apply(void 0, n);
          }),
      (gu = (function () {
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
                (this.bump(), r.push({ type: xl.pound, location: z(o, this.clonePosition()) }));
              } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
                if (n) break;
                return this.error(
                  L.UNMATCHED_CLOSING_TAG,
                  z(this.clonePosition(), this.clonePosition()),
                );
              } else if (i === 60 && !this.ignoreTag && V(this.peek() || 0)) {
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
                val: { type: xl.literal, value: `<${r}/>`, location: z(n, this.clonePosition()) },
                err: null,
              };
            if (this.bumpIf(`>`)) {
              var i = this.parseMessage(e + 1, t, !0);
              if (i.err) return i;
              var a = i.val,
                o = this.clonePosition();
              if (this.bumpIf(`</`)) {
                if (this.isEOF() || !V(this.char()))
                  return this.error(L.INVALID_TAG, z(o, this.clonePosition()));
                var s = this.clonePosition();
                return r === this.parseTagName()
                  ? (this.bumpSpace(),
                    this.bumpIf(`>`)
                      ? {
                          val: {
                            type: xl.tag,
                            value: r,
                            children: a,
                            location: z(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(L.INVALID_TAG, z(o, this.clonePosition())))
                  : this.error(L.UNMATCHED_CLOSING_TAG, z(s, this.clonePosition()));
              } else return this.error(L.UNCLOSED_TAG, z(n, this.clonePosition()));
            } else return this.error(L.INVALID_TAG, z(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && Yl(this.char());) this.bump();
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
            var s = z(n, this.clonePosition());
            return { val: { type: xl.literal, value: r, location: s }, err: null };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !Jl(this.peek() || 0))
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
              if (n === 39)
                if (this.peek() === 39) (t.push(39), this.bump());
                else {
                  this.bump();
                  break;
                }
              else t.push(n);
              this.bump();
            }
            return lu.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return n === 60 ||
              n === 123 ||
              (n === 35 && (t === `plural` || t === `selectordinal`)) ||
              (n === 125 && e > 0)
              ? null
              : (this.bump(), lu(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
            if (this.char() === 125)
              return (this.bump(), this.error(L.EMPTY_ARGUMENT, z(n, this.clonePosition())));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(L.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: { type: xl.argument, value: r, location: z(n, this.clonePosition()) },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, z(n, this.clonePosition()))
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(L.MALFORMED_ARGUMENT, z(n, this.clonePosition()));
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = mu(this.message, t),
              r = t + n.length;
            return (this.bumpTo(r), { value: n, location: z(e, this.clonePosition()) });
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              o = this.clonePosition();
            switch (a) {
              case ``:
                return this.error(L.EXPECT_ARGUMENT_TYPE, z(i, o));
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
                  var u = pu(l.val);
                  if (u.length === 0)
                    return this.error(
                      L.EXPECT_ARGUMENT_STYLE,
                      z(this.clonePosition(), this.clonePosition()),
                    );
                  s = { style: u, styleLocation: z(c, this.clonePosition()) };
                }
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var f = z(r, this.clonePosition());
                if (s && cu(s?.style, `::`, 0)) {
                  var p = fu(s.style.slice(2));
                  if (a === `number`) {
                    var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
                    return l.err
                      ? l
                      : {
                          val: { type: xl.number, value: n, location: f, style: l.val },
                          err: null,
                        };
                  } else {
                    if (p.length === 0) return this.error(L.EXPECT_DATE_TIME_SKELETON, f);
                    var m = p;
                    this.locale && (m = Kl(p, this.locale));
                    var u = {
                      type: Sl.dateTime,
                      pattern: m,
                      location: s.styleLocation,
                      parsedOptions: this.shouldParseSkeletons ? El(m) : {},
                    };
                    return {
                      val: {
                        type: a === `date` ? xl.date : xl.time,
                        value: n,
                        location: f,
                        style: u,
                      },
                      err: null,
                    };
                  }
                }
                return {
                  val: {
                    type: a === `number` ? xl.number : a === `date` ? xl.date : xl.time,
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
                  return this.error(L.EXPECT_SELECT_ARGUMENT_OPTIONS, z(h, I({}, h)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if (a !== `select` && g.value === `offset`) {
                  if (!this.bumpIf(`:`))
                    return this.error(
                      L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      z(this.clonePosition(), this.clonePosition()),
                    );
                  this.bumpSpace();
                  var l = this.tryParseDecimalInteger(
                    L.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    L.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                  );
                  if (l.err) return l;
                  (this.bumpSpace(), (g = this.parseIdentifierIfPossible()), (_ = l.val));
                }
                var v = this.tryParsePluralOrSelectOptions(e, a, t, g);
                if (v.err) return v;
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var y = z(r, this.clonePosition());
                return a === `select`
                  ? {
                      val: { type: xl.select, value: n, options: uu(v.val), location: y },
                      err: null,
                    }
                  : {
                      val: {
                        type: xl.plural,
                        value: n,
                        options: uu(v.val),
                        offset: _,
                        pluralType: a === `plural` ? `cardinal` : `ordinal`,
                        location: y,
                      },
                      err: null,
                    };
              default:
                return this.error(L.INVALID_ARGUMENT_TYPE, z(i, o));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || this.char() !== 125
              ? this.error(L.EXPECT_ARGUMENT_CLOSING_BRACE, z(e, this.clonePosition()))
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF();)
              switch (this.char()) {
                case 39:
                  this.bump();
                  var n = this.clonePosition();
                  if (!this.bumpUntil(`'`))
                    return this.error(
                      L.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      z(n, this.clonePosition()),
                    );
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
                  break;
              }
            return { val: this.message.slice(t.offset, this.offset()), err: null };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = jl(e);
            } catch {
              return this.error(L.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: Sl.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Ll(n) : {},
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
                    L.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    L.INVALID_PLURAL_ARGUMENT_SELECTOR,
                  );
                  if (d.err) return d;
                  ((l = z(u, this.clonePosition())),
                    (c = this.message.slice(u.offset, this.offset())));
                } else break;
              }
              if (s.has(c))
                return this.error(
                  t === `select`
                    ? L.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : L.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              (c === `other` && (a = !0), this.bumpSpace());
              var f = this.clonePosition();
              if (!this.bumpIf(`{`))
                return this.error(
                  t === `select`
                    ? L.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : L.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  z(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(e + 1, t, n);
              if (p.err) return p;
              var m = this.tryParseArgumentClose(f);
              if (m.err) return m;
              (o.push([c, { value: p.val, location: z(f, this.clonePosition()) }]),
                s.add(c),
                this.bumpSpace(),
                (i = this.parseIdentifierIfPossible()),
                (c = i.value),
                (l = i.location));
            }
            return o.length === 0
              ? this.error(
                  t === `select`
                    ? L.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : L.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  z(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !a
                ? this.error(L.MISSING_OTHER_CLAUSE, z(this.clonePosition(), this.clonePosition()))
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
            var s = z(r, this.clonePosition());
            return i
              ? ((a *= n), ou(a) ? { val: a, err: null } : this.error(t, s))
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error(`out of bound`);
            var t = du(this.message, e);
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
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1), (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (cu(this.message, e, this.offset())) {
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
            for (; !this.isEOF() && Xl(this.char());) this.bump();
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
  vu = o(() => {
    Cl();
  });
function yu(e) {
  e.forEach(function (e) {
    if ((delete e.location, hl(e) || gl(e)))
      for (var t in e.options) (delete e.options[t].location, yu(e.options[t].value));
    else
      (fl(e) && yl(e.style)) || ((pl(e) || ml(e)) && bl(e.style))
        ? delete e.style.location
        : vl(e) && yu(e.children);
  });
}
function bu(e, t) {
  (t === void 0 && (t = {}), (t = I({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)));
  var n = new gu(e, t).parse();
  if (n.err) {
    var r = SyntaxError(L[n.err.kind]);
    throw ((r.location = n.err.location), (r.originalMessage = n.err.message), r);
  }
  return (t?.captureLocation || yu(n.val), n.val);
}
var xu = o(() => {
    (Jc(), ll(), _u(), Cl(), Cl(), vu());
  }),
  Su,
  Cu,
  wu,
  Tu,
  Eu,
  Du = o(() => {
    (Jc(),
      (function (e) {
        ((e.MISSING_VALUE = `MISSING_VALUE`),
          (e.INVALID_VALUE = `INVALID_VALUE`),
          (e.MISSING_INTL_API = `MISSING_INTL_API`));
      })((Su ||= {})),
      (Cu = (function (e) {
        Gc(t, e);
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
      (wu = (function (e) {
        Gc(t, e);
        function t(t, n, r, i) {
          return (
            e.call(
              this,
              `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`,
              Su.INVALID_VALUE,
              i,
            ) || this
          );
        }
        return t;
      })(Cu)),
      (Tu = (function (e) {
        Gc(t, e);
        function t(t, n, r) {
          return e.call(this, `Value for "${t}" must be of type ${n}`, Su.INVALID_VALUE, r) || this;
        }
        return t;
      })(Cu)),
      (Eu = (function (e) {
        Gc(t, e);
        function t(t, n) {
          return (
            e.call(
              this,
              `The intl string context variable "${t}" was not provided to the string "${n}"`,
              Su.MISSING_VALUE,
              n,
            ) || this
          );
        }
        return t;
      })(Cu)));
  });
function Ou(e) {
  return e.length < 2
    ? e
    : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (
          !n || n.type !== ju.literal || t.type !== ju.literal ? e.push(t) : (n.value += t.value), e
        );
      }, []);
}
function ku(e) {
  return typeof e == `function`;
}
function Au(e, t, n, r, i, a, o) {
  if (e.length === 1 && ul(e[0])) return [{ type: ju.literal, value: e[0].value }];
  for (var s = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c];
    if (ul(u)) {
      s.push({ type: ju.literal, value: u.value });
      continue;
    }
    if (_l(u)) {
      typeof a == `number` && s.push({ type: ju.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    var d = u.value;
    if (!(i && d in i)) throw new Eu(d, o);
    var f = i[d];
    if (dl(u)) {
      ((!f || typeof f == `string` || typeof f == `number`) &&
        (f = typeof f == `string` || typeof f == `number` ? String(f) : ``),
        s.push({ type: typeof f == `string` ? ju.literal : ju.object, value: f }));
      continue;
    }
    if (pl(u)) {
      var p =
        typeof u.style == `string` ? r.date[u.style] : bl(u.style) ? u.style.parsedOptions : void 0;
      s.push({ type: ju.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (ml(u)) {
      var p =
        typeof u.style == `string`
          ? r.time[u.style]
          : bl(u.style)
            ? u.style.parsedOptions
            : r.time.medium;
      s.push({ type: ju.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (fl(u)) {
      var p =
        typeof u.style == `string`
          ? r.number[u.style]
          : yl(u.style)
            ? u.style.parsedOptions
            : void 0;
      (p && p.scale && (f *= p.scale || 1),
        s.push({ type: ju.literal, value: n.getNumberFormat(t, p).format(f) }));
      continue;
    }
    if (vl(u)) {
      var m = u.children,
        h = u.value,
        g = i[h];
      if (!ku(g)) throw new Tu(h, `function`, o);
      var _ = g(
        Au(m, t, n, r, i, a).map(function (e) {
          return e.value;
        }),
      );
      (Array.isArray(_) || (_ = [_]),
        s.push.apply(
          s,
          _.map(function (e) {
            return { type: typeof e == `string` ? ju.literal : ju.object, value: e };
          }),
        ));
    }
    if (hl(u)) {
      var v = u.options[f] || u.options.other;
      if (!v) throw new wu(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Au(v.value, t, n, r, i));
      continue;
    }
    if (gl(u)) {
      var v = u.options[`=${f}`];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Cu(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            Su.MISSING_INTL_API,
            o,
          );
        var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        v = u.options[y] || u.options.other;
      }
      if (!v) throw new wu(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, Au(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return Ou(s);
}
var ju,
  Mu = o(() => {
    (xu(),
      Du(),
      (function (e) {
        ((e[(e.literal = 0)] = `literal`), (e[(e.object = 1)] = `object`));
      })((ju ||= {})));
  });
function Nu(e, t) {
  return t
    ? I(
        I(I({}, e || {}), t || {}),
        Object.keys(e).reduce(function (n, r) {
          return ((n[r] = I(I({}, e[r]), t[r] || {})), n);
        }, {}),
      )
    : e;
}
function Pu(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (n, r) {
          return ((n[r] = Nu(e[r], t[r])), n);
        },
        I({}, e),
      )
    : e;
}
function Fu(e) {
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
function Iu(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: Xc(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(e, F([void 0], t, !1)))();
        },
        { cache: Fu(e.number), strategy: sl.variadic },
      ),
      getDateTimeFormat: Xc(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(e, F([void 0], t, !1)))();
        },
        { cache: Fu(e.dateTime), strategy: sl.variadic },
      ),
      getPluralRules: Xc(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(e, F([void 0], t, !1)))();
        },
        { cache: Fu(e.pluralRules), strategy: sl.variadic },
      ),
    }
  );
}
var Lu,
  Ru = o(() => {
    (Jc(),
      cl(),
      xu(),
      Mu(),
      (Lu = (function () {
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
                  !e.length || t.type !== ju.literal || typeof e[e.length - 1] != `string`
                    ? e.push(t.value)
                    : (e[e.length - 1] += t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || `` : n;
            }),
            (this.formatToParts = function (e) {
              return Au(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
            }),
            (this.resolvedOptions = function () {
              return {
                locale:
                  a.resolvedLocale?.toString() ||
                  Intl.NumberFormat.supportedLocalesOf(a.locales)[0],
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
              throw TypeError(
                "IntlMessageFormat.__parse must be set to process `message` of type `string`",
              );
            var o = i || {};
            o.formatters;
            var s = Kc(o, [`formatters`]);
            this.ast = e.__parse(t, I(I({}, s), { locale: this.resolvedLocale }));
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw TypeError(`A message must be provided as a String or AST.`);
          ((this.formats = Pu(e.formats, r)),
            (this.formatters = (i && i.formatters) || Iu(this.formatterCache)));
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
              return t.length > 0
                ? new Intl.Locale(t[0])
                : new Intl.Locale(typeof e == `string` ? e : e[0]);
            }
          }),
          (e.__parse = bu),
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
              long: {
                hour: `numeric`,
                minute: `numeric`,
                second: `numeric`,
                timeZoneName: `short`,
              },
              full: {
                hour: `numeric`,
                minute: `numeric`,
                second: `numeric`,
                timeZoneName: `short`,
              },
            },
          }),
          e
        );
      })()));
  }),
  zu = o(() => {
    (Ru(), Ru(), Du(), Mu());
  }),
  Bu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju = o(() => {
    (Jc(),
      (function (e) {
        ((e.FORMAT_ERROR = `FORMAT_ERROR`),
          (e.UNSUPPORTED_FORMATTER = `UNSUPPORTED_FORMATTER`),
          (e.INVALID_CONFIG = `INVALID_CONFIG`),
          (e.MISSING_DATA = `MISSING_DATA`),
          (e.MISSING_TRANSLATION = `MISSING_TRANSLATION`));
      })((Bu ||= {})),
      (Vu = (function (e) {
        Gc(t, e);
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
      (Hu = (function (e) {
        Gc(t, e);
        function t(t, n) {
          return e.call(this, Bu.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return t;
      })(Vu)),
      (Uu = (function (e) {
        Gc(t, e);
        function t(t, n) {
          return e.call(this, Bu.INVALID_CONFIG, t, n) || this;
        }
        return t;
      })(Vu)),
      (Wu = (function (e) {
        Gc(t, e);
        function t(t, n) {
          return e.call(this, Bu.MISSING_DATA, t, n) || this;
        }
        return t;
      })(Vu)),
      (Gu = (function (e) {
        Gc(t, e);
        function t(t, n, r) {
          var i =
            e.call(
              this,
              Bu.FORMAT_ERROR,
              `${t}
Locale: ${n}
`,
              r,
            ) || this;
          return ((i.locale = n), i);
        }
        return t;
      })(Vu)),
      (Ku = (function (e) {
        Gc(t, e);
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
      })(Gu)),
      (qu = (function (e) {
        Gc(t, e);
        function t(t, n) {
          var r =
            e.call(
              this,
              Bu.MISSING_TRANSLATION,
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
      })(Vu)));
  });
function Yu(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Xu(e, t, n) {
  return (
    n === void 0 && (n = {}),
    t.reduce(function (t, r) {
      return (r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t);
    }, {})
  );
}
function Zu() {
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
function Qu(e) {
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
function $u(e) {
  e === void 0 && (e = Zu());
  var t = Intl.RelativeTimeFormat,
    n = Intl.ListFormat,
    r = Intl.DisplayNames,
    i = Xc(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(e, F([void 0], t, !1)))();
      },
      { cache: Qu(e.dateTime), strategy: sl.variadic },
    ),
    a = Xc(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, F([void 0], t, !1)))();
      },
      { cache: Qu(e.number), strategy: sl.variadic },
    ),
    o = Xc(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, F([void 0], t, !1)))();
      },
      { cache: Qu(e.pluralRules), strategy: sl.variadic },
    );
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: Xc(
      function (e, t, n, r) {
        return new Lu(
          e,
          t,
          n,
          I(
            { formatters: { getNumberFormat: a, getDateTimeFormat: i, getPluralRules: o } },
            r || {},
          ),
        );
      },
      { cache: Qu(e.message), strategy: sl.variadic },
    ),
    getRelativeTimeFormat: Xc(
      function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return new (t.bind.apply(t, F([void 0], e, !1)))();
      },
      { cache: Qu(e.relativeTime), strategy: sl.variadic },
    ),
    getPluralRules: o,
    getListFormat: Xc(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (n.bind.apply(n, F([void 0], e, !1)))();
      },
      { cache: Qu(e.list), strategy: sl.variadic },
    ),
    getDisplayNames: Xc(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (r.bind.apply(r, F([void 0], e, !1)))();
      },
      { cache: Qu(e.displayNames), strategy: sl.variadic },
    ),
  };
}
function ed(e, t, n, r) {
  var i = e && e[t],
    a;
  if ((i && (a = i[n]), a)) return a;
  r(new Hu(`No ${t} format named: ${n}`));
}
var td,
  nd,
  rd,
  id = o(() => {
    (Jc(),
      cl(),
      zu(),
      Ju(),
      (td = function (e) {}),
      (nd = function (e) {}),
      (rd = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: `en`,
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: td,
        onWarn: nd,
      }));
  });
function ad(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    return ((n[r] = I({ timeZone: t }, e[r])), n);
  }, {});
}
function od(e, t) {
  return Object.keys(I(I({}, e), t)).reduce(function (n, r) {
    return ((n[r] = I(I({}, e[r] || {}), t[r] || {})), n);
  }, {});
}
function sd(e, t) {
  if (!t) return e;
  var n = Lu.formats;
  return I(I(I({}, n), e), {
    date: od(ad(n.date, t), ad(e.date || {}, t)),
    time: od(ad(n.time, t), ad(e.time || {}, t)),
  });
}
var cd,
  ld = o(() => {
    (Jc(),
      xu(),
      zu(),
      Ju(),
      id(),
      (cd = function (e, t, n, r, i) {
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
        Yu(
          !!m,
          `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`,
        );
        var g = String(m),
          _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
        if (Array.isArray(_) && _.length === 1 && _[0].type === xl.literal) return _[0].value;
        if (!r && _ && typeof _ == `string` && !p) return _.replace(/'\{(.*?)\}'/gi, `{$1}`);
        if (((r = I(I({}, p), r || {})), (o = sd(o, f)), (l = sd(l, f)), !_)) {
          if (u === !1 && _ === ``) return _;
          if (((!h || (a && a.toLowerCase() !== c.toLowerCase())) && d(new qu(n, a)), h))
            try {
              var v = t.getMessageFormat(h, c, l, i);
              return v.format(r);
            } catch (e) {
              return (
                d(
                  new Ku(
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
          var v = t.getMessageFormat(_, a, o, I({ formatters: t }, i || {}));
          return v.format(r);
        } catch (e) {
          d(
            new Ku(
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
              new Ku(
                `Error formatting the default message for: "${g}", rendering message verbatim`,
                a,
                n,
                e,
              ),
            );
          }
        return typeof _ == `string` ? _ : typeof h == `string` ? h : g;
      }));
  });
function ud(e, t, n, r) {
  var i = e.locale,
    a = e.formats,
    o = e.onError,
    s = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format,
    l = I(I({}, s && { timeZone: s }), c && ed(a, t, c, o)),
    u = Xu(r, gd, l);
  return (
    t === `time` &&
      !u.hour &&
      !u.minute &&
      !u.second &&
      !u.timeStyle &&
      !u.dateStyle &&
      (u = I(I({}, u), { hour: `numeric`, minute: `numeric` })),
    n(i, u)
  );
}
function dd(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ud(e, `date`, t, o).format(s);
  } catch (t) {
    e.onError(new Gu(`Error formatting date.`, e.locale, t));
  }
  return String(s);
}
function fd(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ud(e, `time`, t, o).format(s);
  } catch (t) {
    e.onError(new Gu(`Error formatting time.`, e.locale, t));
  }
  return String(s);
}
function pd(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = n[2],
    s = o === void 0 ? {} : o,
    c = typeof i == `string` ? new Date(i || 0) : i,
    l = typeof a == `string` ? new Date(a || 0) : a;
  try {
    return ud(e, `dateTimeRange`, t, s).formatRange(c, l);
  } catch (t) {
    e.onError(new Gu(`Error formatting date time range.`, e.locale, t));
  }
  return String(c);
}
function md(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ud(e, `date`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Gu(`Error formatting date.`, e.locale, t));
  }
  return [];
}
function hd(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return ud(e, `time`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Gu(`Error formatting time.`, e.locale, t));
  }
  return [];
}
var gd,
  _d = o(() => {
    (Jc(),
      Ju(),
      id(),
      (gd = [
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
function vd(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  Intl.DisplayNames ||
    a(
      new Cu(
        `Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,
        Su.MISSING_INTL_API,
      ),
    );
  var o = Xu(r, yd);
  try {
    return t(i, o).of(n);
  } catch (e) {
    a(new Gu(`Error formatting display name.`, i, e));
  }
}
var yd,
  bd = o(() => {
    (id(), zu(), Ju(), (yd = [`style`, `type`, `fallback`, `languageDisplay`]));
  });
function xd(e) {
  return `${Td}_${e}_${Td}`;
}
function Sd(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Cd(e, t, n, r).reduce(function (e, t) {
    var n = t.value;
    return (
      typeof n == `string` && typeof e[e.length - 1] == `string`
        ? (e[e.length - 1] += n)
        : e.push(n),
      e
    );
  }, []);
  return i.length === 1 ? i[0] : i.length === 0 ? `` : i;
}
function Cd(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.ListFormat ||
      a(
        new Cu(
          `Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,
          Su.MISSING_INTL_API,
        ),
      ));
  var o = Xu(r, wd);
  try {
    var s = {},
      c = Array.from(n).map(function (e, t) {
        if (typeof e == `object` && e) {
          var n = xd(t);
          return ((s[n] = e), n);
        }
        return String(e);
      });
    return t(i, o)
      .formatToParts(c)
      .map(function (e) {
        return e.type === `literal` ? e : I(I({}, e), { value: s[e.value] || e.value });
      });
  } catch (e) {
    a(new Gu(`Error formatting list.`, i, e));
  }
  return n;
}
var wd,
  Td,
  Ed = o(() => {
    (Jc(), zu(), Ju(), id(), (wd = [`type`, `style`]), (Td = Date.now()));
  });
function Dd(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.PluralRules ||
      a(
        new Cu(
          `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
          Su.MISSING_INTL_API,
        ),
      ));
  var o = Xu(r, Od);
  try {
    return t(i, o).select(n);
  } catch (e) {
    a(new Gu(`Error formatting plural.`, i, e));
  }
  return `other`;
}
var Od,
  kd = o(() => {
    (zu(), Ju(), id(), (Od = [`type`]));
  });
function H(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (!!o && ed(i, `relative`, o, a)) || {};
  return t(r, Xu(n, jd, s));
}
function Ad(e, t, n, r, i) {
  (i === void 0 && (i = {}),
    (r ||= `second`),
    Intl.RelativeTimeFormat ||
      e.onError(
        new Cu(
          `Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,
          Su.MISSING_INTL_API,
        ),
      ));
  try {
    return H(e, t, i).format(n, r);
  } catch (t) {
    e.onError(new Gu(`Error formatting relative time.`, e.locale, t));
  }
  return String(n);
}
var jd,
  Md = o(() => {
    (id(), zu(), Ju(), (jd = [`numeric`, `style`]));
  });
function Nd(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (o && ed(i, `number`, o, a)) || {};
  return t(r, Xu(n, Id, s));
}
function Pd(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Nd(e, t, r).format(n);
  } catch (t) {
    e.onError(new Gu(`Error formatting number.`, e.locale, t));
  }
  return String(n);
}
function Fd(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Nd(e, t, r).formatToParts(n);
  } catch (t) {
    e.onError(new Gu(`Error formatting number.`, e.locale, t));
  }
  return [];
}
var Id,
  Ld = o(() => {
    (Ju(),
      id(),
      (Id = [
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
function Rd(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == `string`;
}
function zd(e) {
  e.onWarn &&
    e.defaultRichTextElements &&
    Rd(e.messages || {}) &&
    e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function Bd(e, t) {
  var n = $u(t),
    r = I(I({}, rd), e),
    i = r.locale,
    a = r.defaultLocale,
    o = r.onError;
  return (
    i
      ? !Intl.NumberFormat.supportedLocalesOf(i).length && o
        ? o(
            new Wu(
              `Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
        : !Intl.DateTimeFormat.supportedLocalesOf(i).length &&
          o &&
          o(
            new Wu(
              `Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
      : (o &&
          o(
            new Uu(
              `"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`,
            ),
          ),
        (r.locale = r.defaultLocale || `en`)),
    zd(r),
    I(I({}, r), {
      formatters: n,
      formatNumber: Pd.bind(null, r, n.getNumberFormat),
      formatNumberToParts: Fd.bind(null, r, n.getNumberFormat),
      formatRelativeTime: Ad.bind(null, r, n.getRelativeTimeFormat),
      formatDate: dd.bind(null, r, n.getDateTimeFormat),
      formatDateToParts: md.bind(null, r, n.getDateTimeFormat),
      formatTime: fd.bind(null, r, n.getDateTimeFormat),
      formatDateTimeRange: pd.bind(null, r, n.getDateTimeFormat),
      formatTimeToParts: hd.bind(null, r, n.getDateTimeFormat),
      formatPlural: Dd.bind(null, r, n.getPluralRules),
      formatMessage: cd.bind(null, r, n),
      $t: cd.bind(null, r, n),
      formatList: Sd.bind(null, r, n.getListFormat),
      formatListToParts: Cd.bind(null, r, n.getListFormat),
      formatDisplayName: vd.bind(null, r, n.getDisplayNames),
    })
  );
}
var Vd = o(() => {
    (Jc(), _d(), bd(), Ju(), Ed(), ld(), Ld(), kd(), Md(), id());
  }),
  Hd = o(() => {
    (Yc(), id(), Ju(), ld(), _d(), bd(), Ed(), kd(), Md(), Ld(), Vd());
  });
function Ud(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Wd(e) {
  Ud(
    e,
    "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
  );
}
function Gd(e) {
  return function (t) {
    return e(Xd(t));
  };
}
function Kd(e, t) {
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
var qd,
  Jd,
  Yd,
  Xd,
  Zd = o(() => {
    (Jc(),
      (qd = u(Rc())),
      Hd(),
      (Jd = I(I({}, rd), { textComponent: qd.Fragment })),
      (Yd = function (e, t) {
        return qd.isValidElement(e) ? qd.cloneElement(e, { key: t }) : e;
      }),
      (Xd = function (e) {
        return qd.Children.map(e, Yd) ?? [];
      }));
  }),
  Qd = s((e) => {
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
  $d = s((e, t) => {
    t.exports = Qd();
  }),
  ef = s((e, t) => {
    var n = $d(),
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
  tf,
  nf,
  rf,
  af,
  of,
  sf = o(() => {
    (ef(),
      (tf = u(Rc())),
      (nf =
        typeof window < `u` && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
          ? window.__REACT_INTL_CONTEXT__ ||
            (window.__REACT_INTL_CONTEXT__ = tf.createContext(null))
          : tf.createContext(null)),
      nf.Consumer,
      (rf = nf.Provider),
      (af = rf),
      (of = nf));
  });
function cf() {
  var e = lf.useContext(of);
  return (Wd(e), e);
}
var lf,
  uf = o(() => {
    ((lf = u(Rc())), Zd(), sf());
  });
function df(e) {
  return (
    e &&
    Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      return ((t[n] = ku(r) ? Gd(r) : r), t);
    }, {})
  );
}
var ff,
  pf,
  mf = o(() => {
    (Jc(),
      Hd(),
      zu(),
      Zd(),
      (ff = function (e, t, n, r) {
        for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
        var o = df(r),
          s = cd.apply(void 0, F([e, t, n, o], i, !1));
        return Array.isArray(s) ? Xd(s) : s;
      }),
      (pf = function (e, t) {
        var n = e.defaultRichTextElements,
          r = Kc(e, [`defaultRichTextElements`]),
          i = df(n),
          a = Bd(I(I(I({}, Jd), r), { defaultRichTextElements: i }), t),
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
        return I(I({}, a), {
          formatMessage: ff.bind(null, o, a.formatters),
          $t: ff.bind(null, o, a.formatters),
        });
      }));
  });
function hf(e, t) {
  var n = e.values,
    r = Kc(e, [`values`]),
    i = t.values,
    a = Kc(t, [`values`]);
  return Kd(i, n) && Kd(r, a);
}
function gf(e) {
  var t = cf(),
    n = t.formatMessage,
    r = t.textComponent,
    i = r === void 0 ? _f.Fragment : r,
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
      ? _f.createElement(d, null, p)
      : _f.createElement(_f.Fragment, null, p);
}
var _f,
  vf,
  yf = o(() => {
    (Jc(),
      (_f = u(Rc())),
      Zd(),
      uf(),
      (gf.displayName = `FormattedMessage`),
      (vf = _f.memo(gf, hf)),
      (vf.displayName = `MemoizedFormattedMessage`));
  });
function bf(e) {
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
var xf,
  Sf,
  Cf = o(() => {
    (Jc(),
      Hd(),
      (xf = u(Rc())),
      Zd(),
      mf(),
      sf(),
      (Sf = (function (e) {
        Gc(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          return (
            (t.cache = Zu()),
            (t.state = { cache: t.cache, intl: pf(bf(t.props), t.cache), prevConfig: bf(t.props) }),
            t
          );
        }
        return (
          (t.getDerivedStateFromProps = function (e, t) {
            var n = t.prevConfig,
              r = t.cache,
              i = bf(e);
            return Kd(n, i) ? null : { intl: pf(i, r), prevConfig: i };
          }),
          (t.prototype.render = function () {
            return (
              Wd(this.state.intl),
              xf.createElement(af, { value: this.state.intl }, this.props.children)
            );
          }),
          (t.displayName = `IntlProvider`),
          (t.defaultProps = Jd),
          t
        );
      })(xf.PureComponent)));
  }),
  wf = o(() => {
    (yf(), Cf(), uf(), Hd(), Jc());
  }),
  Tf,
  Ef = o(() => {
    Tf = 2147483647;
  });
function Df(e, t = 0) {
  return (
    Of[e[t + 0]] +
    Of[e[t + 1]] +
    Of[e[t + 2]] +
    Of[e[t + 3]] +
    `-` +
    Of[e[t + 4]] +
    Of[e[t + 5]] +
    `-` +
    Of[e[t + 6]] +
    Of[e[t + 7]] +
    `-` +
    Of[e[t + 8]] +
    Of[e[t + 9]] +
    `-` +
    Of[e[t + 10]] +
    Of[e[t + 11]] +
    Of[e[t + 12]] +
    Of[e[t + 13]] +
    Of[e[t + 14]] +
    Of[e[t + 15]]
  ).toLowerCase();
}
var Of,
  kf = o(() => {
    Of = [];
    for (let e = 0; e < 256; ++e) Of.push((e + 256).toString(16).slice(1));
  });
function Af() {
  if (!jf) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    jf = crypto.getRandomValues.bind(crypto);
  }
  return jf(Mf);
}
var jf,
  Mf,
  Nf = o(() => {
    Mf = new Uint8Array(16);
  }),
  Pf,
  Ff,
  If = o(() => {
    ((Pf = typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto)),
      (Ff = { randomUUID: Pf }));
  });
function Lf(e, t, n) {
  if (Ff.randomUUID && !t && !e) return Ff.randomUUID();
  e ||= {};
  let r = e.random ?? e.rng?.() ?? Af();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return Df(r);
}
var Rf = o(() => {
    (If(), Nf(), kf());
  }),
  zf = o(() => {
    (kf(), Nf(), Rf());
  });
function Bf(e) {
  if (e == null) return null;
  let t = [],
    n = e;
  for (; n !== window;) {
    let e = n.frameElement;
    if (!Gf(e)) return null;
    let r = wp(e);
    if (r == null) return null;
    t.unshift(r);
    let i = e.ownerDocument.defaultView;
    if (i == null) return null;
    n = i;
  }
  return t;
}
function Vf(e) {
  return e === `auto` || e === `scroll` || e === `overlay`;
}
function Hf(e) {
  return Vf(e) || e === `clip` || e === `hidden`;
}
function Uf(e) {
  return e === document.documentElement || e === document.body;
}
function U(e) {
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
function Wf(e) {
  if (e.assignedSlot != null) return e.assignedSlot;
  if (e.parentElement != null) return e.parentElement;
  let t = e.getRootNode();
  return Dp(t) ? t.host : null;
}
function Gf(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n =
      t.ownerDocument?.defaultView?.HTMLIFrameElement ??
      (typeof HTMLIFrameElement > `u` ? null : HTMLIFrameElement);
  return (
    (n != null && e instanceof n) || (t.tagName?.toLowerCase() === `iframe` && `contentWindow` in t)
  );
}
function Kf(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function qf(e) {
  if (!Gf(e)) return null;
  try {
    let t = e.contentWindow;
    return t?.document == null ? null : t;
  } catch {
    return null;
  }
}
function Jf(e, t, n) {
  let r = Yf(window, e, t, n);
  return r === Fp ? null : r;
}
function Yf(e, t, n, r) {
  let i = e.document.elementFromPoint(t, n);
  if (i == null) return null;
  for (; i.shadowRoot != null;) {
    let e = i.shadowRoot.elementFromPoint(t, n);
    if (!U(e) || e === i) break;
    i = e;
  }
  if (Gf(i)) {
    let e = r?.(i, { x: t, y: n });
    if (e !== void 0) return e ?? Fp;
    let a = qf(i);
    if (a != null) {
      let e = i.getBoundingClientRect(),
        o = Yf(a, t - e.left, n - e.top, r);
      if (o != null) return o;
    }
  }
  return i;
}
function Xf(e = window) {
  let t = [],
    n = [e],
    r = new Set();
  for (; n.length > 0;) {
    let e = n.pop();
    if (e == null || r.has(e)) continue;
    (r.add(e), t.push(e));
    let i = Kf(e);
    if (i != null)
      for (let e of Tp(i)) {
        let t = qf(e);
        t != null && n.push(t);
      }
  }
  return t;
}
function Zf(e) {
  let t = new Map(),
    n = () => {
      let e = Xf(),
        i = new Set(e);
      for (let i of e) {
        let e = Kf(i);
        if (e == null) continue;
        let a = t.get(i),
          o = e.documentElement;
        (a?.document === e && a.documentElement === o) ||
          (Ep(a?.cleanup), t.set(i, { cleanup: r(e, i, n), document: e, documentElement: o }));
      }
      for (let [e, n] of t) i.has(e) || (Ep(n.cleanup), t.delete(e));
    },
    r = (t, n, r) => {
      let i = e(t, n, r),
        a = (e) => {
          Gf(e.target) && r();
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
          Ep(i);
        }
      );
    };
  return (
    n(),
    () => {
      for (let { cleanup: e } of t.values()) Ep(e);
      t.clear();
    }
  );
}
function Qf(e, t) {
  let n = `html, body, body *, #${t}, #${t} *`,
    r = e.querySelector(`style[${Pp}]`),
    i = `${n} { cursor: none !important; -webkit-user-select: none !important; user-select: none !important; }`;
  if (r != null) {
    let t = r.sheet?.cssRules,
      a = t?.item(0),
      o = e.defaultView?.CSSStyleRule;
    return (
      (r.textContent !== i ||
        t?.length !== 1 ||
        o == null ||
        !(a instanceof o) ||
        a.selectorText !== n ||
        a.style.length !== 2 ||
        a.style.getPropertyValue(`cursor`) !== `none` ||
        a.style.getPropertyPriority(`cursor`) !== `important` ||
        a.style.getPropertyValue(`user-select`) !== `none` ||
        a.style.getPropertyPriority(`user-select`) !== `important`) &&
        (r.textContent = i),
      r
    );
  }
  let a = e.createElement(`style`);
  return (
    a.setAttribute(Pp, `true`), (a.textContent = i), (e.head ?? e.documentElement).append(a), a
  );
}
function $f(e) {
  e.querySelectorAll(`style[${Pp}]`).forEach((e) => {
    e.remove();
  });
}
function ep() {
  for (let e of Xf()) {
    let t = Kf(e);
    t != null && $f(t);
  }
}
function tp(e, t, n) {
  let r = new MutationObserver((i) => {
    r.disconnect();
    try {
      let r = i.some((t) => Array.from(t.removedNodes).some((t) => t.contains(e))),
        a = document.documentElement,
        o = e.parentElement !== a;
      (o && a.appendChild(e),
        (r || o) &&
          (np(e, n),
          e.shadowRoot?.querySelector(`[data-browser-comment-annotation-selection-cursor]`) !=
            null && Qf(document, t)));
    } finally {
      (r.observe(document, { childList: !0 }),
        r.observe(document.documentElement, { childList: !0 }));
    }
  });
  return (
    r.observe(document, { childList: !0 }),
    r.observe(document.documentElement, { childList: !0 }),
    () => r.disconnect()
  );
}
function np(e, t) {
  let n = e.shadowRoot?.querySelector(`[${t}]`);
  return n != null && rp(n, !0);
}
function rp(e, t) {
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
function ip(e) {
  if (typeof e.hidePopover == `function`)
    try {
      e.matches(`:popover-open`) && e.hidePopover();
    } catch {}
}
function ap(e) {
  return e.getAttribute(`aria-label`) || op(e) || e.tagName.toLowerCase();
}
function op(e) {
  if (Uf(e)) return e.tagName.toLowerCase();
  let t = (e.innerText || e.textContent || ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function sp(e) {
  let t = op(e);
  if (t) return t;
  let n = e.closest(`section,article,main,form,nav,aside,header,footer`);
  return U(n) ? op(n) : null;
}
function cp(e) {
  let t = [],
    n = e,
    r = 0;
  for (; n && r < 4;) {
    let e = n.tagName.toLowerCase();
    if (e === `html` || e === `body`) {
      t.length === 0 && t.unshift(e);
      break;
    }
    (t.unshift(e), (n = Wf(n)), (r += 1));
  }
  return t.join(` > `);
}
function lp(e) {
  return Bf(e.ownerDocument.defaultView);
}
function up(e) {
  let t = window,
    n = document;
  for (let r of e) {
    let e = dp(n, r);
    if (e == null) return null;
    let i = qf(e);
    if (i == null) return null;
    ((t = i), (n = i.document));
  }
  return t;
}
function dp(e, t) {
  let n = fp(e, t);
  return Gf(n) ? n : null;
}
function fp(e, t) {
  let n = t.startsWith(Mp) ? t.slice(7).split(Np) : [t],
    r = e;
  for (let [e, t] of n.entries()) {
    let i = r.querySelector(t);
    if (e === n.length - 1) return U(i) ? i : null;
    if (!U(i) || i.shadowRoot == null) return null;
    r = i.shadowRoot;
  }
  return null;
}
function pp(e) {
  let t = up(e);
  return t == null ? null : t.document;
}
function mp(e, { requireUnique: t = !1 } = {}) {
  let n = [],
    r = e,
    i = 0;
  for (; r != null && (t || i < 4);) {
    let a = r.tagName.toLowerCase(),
      o = r.tagName;
    if (r.id) {
      a += `#${jp(r.id)}`;
      let i = [a, ...n].join(` > `);
      if (!t || Op(e, i)) return i;
    }
    let s = Array.from(r.classList)
      .filter((e) => /^[a-zA-Z0-9_-]+$/.test(e))
      .slice(0, 2);
    s.length > 0 && (a += `.${s.map(jp).join(`.`)}`);
    let c = r.parentElement;
    if (c != null) {
      let e = Array.from(c.children).filter((e) => U(e) && e.tagName === o);
      e.length > 1 && (a += `:nth-of-type(${e.indexOf(r) + 1})`);
    }
    n.unshift(a);
    let l = n.join(` > `);
    if (t && Op(e, l)) return l;
    ((r = c), (i += 1));
  }
  return t || n.length === 0 ? null : n.join(` > `);
}
function hp(e, { requireUnique: t = !0 } = {}) {
  let n = [],
    r = e;
  for (;;) {
    let e = mp(r, { requireUnique: t });
    if (e == null) return null;
    n.unshift(e);
    let i = r.getRootNode();
    if (i.nodeType === Node.DOCUMENT_NODE) break;
    if (!Dp(i)) return null;
    r = i.host;
  }
  return n.length === 1 ? n[0] : `${Mp}${n.join(Np)}`;
}
function gp(e) {
  let t = e.ownerDocument.defaultView ?? window;
  if (t !== window) return !1;
  let n = e;
  for (; n && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = Wf(n);
  }
  return !1;
}
function _p(e, t) {
  if (typeof e.document.elementFromPoint != `function`) return [];
  let n = e.document.elementFromPoint(t.x, t.y);
  return U(n) ? vp(n, { includeElement: !0 }) : [];
}
function vp(e, { includeElement: t = !1 } = {}) {
  let n = xp(e),
    r = [],
    i = t ? e : Wf(e);
  for (; i != null && i !== n.document.body && i !== n.document.documentElement;) {
    if (Ap(i, n)) {
      let e = hp(i);
      e != null && r.push({ selector: e, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop });
    }
    i = Wf(i);
  }
  return r;
}
function yp(e, t) {
  let n = 0,
    r = 0;
  for (let i of e.scrollContainers ?? []) {
    let e = fp(t.document, i.selector);
    U(e) && ((n += e.scrollLeft - i.scrollLeft), (r += e.scrollTop - i.scrollTop));
  }
  return { x: n, y: r };
}
function bp(e, t, n) {
  let r = new Set();
  for (let n of t)
    if (!(n.scrollContainers == null || up(n.framePath) !== e))
      for (let t of n.scrollContainers) {
        let n = fp(e.document, t.selector);
        n != null && r.add(n);
      }
  for (let e of r) e.addEventListener(`scroll`, n);
  return () => {
    for (let e of r) e.removeEventListener(`scroll`, n);
  };
}
function xp(e) {
  return e.ownerDocument.defaultView ?? window;
}
function Sp(e) {
  if (e === window) return { x: 0, y: 0 };
  let t = e.frameElement;
  if (!Gf(t)) return { x: 0, y: 0 };
  let n = t.ownerDocument.defaultView;
  if (n == null) return { x: 0, y: 0 };
  let r = Sp(n),
    i = t.getBoundingClientRect();
  return { x: r.x + i.left, y: r.y + i.top };
}
function Cp(e, t) {
  let n = Sp(e);
  return { x: t.x + n.x, y: t.y + n.y };
}
function wp(e) {
  return hp(e);
}
function Tp(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    (Gf(n) && t.push(n), U(n) && n.shadowRoot != null && t.push(...Tp(n.shadowRoot)));
  return t;
}
function Ep(e) {
  if (e != null)
    try {
      e();
    } catch {}
}
function Dp(e) {
  return (
    e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
    `host` in e &&
    U(e.host) &&
    e.host.shadowRoot === e
  );
}
function Op(e, t) {
  let n = e.getRootNode();
  if (!kp(n)) return !1;
  let r = n.querySelectorAll(t);
  return r.length === 1 && r[0] === e;
}
function kp(e) {
  return (
    e.nodeType === Node.DOCUMENT_NODE ||
    (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `querySelectorAll` in e)
  );
}
function Ap(e, t) {
  let n = t.getComputedStyle(e);
  return [n.overflow, n.overflowX, n.overflowY].some(Hf);
}
function jp(e) {
  return typeof CSS < `u` && typeof CSS.escape == `function`
    ? CSS.escape(e)
    : e.replace(/[^a-zA-Z0-9_-]/g, `\\$&`);
}
var Mp,
  Np,
  Pp,
  Fp,
  Ip = o(() => {
    ((Mp = `shadow:`),
      (Np = `>>>`),
      (Pp = `data-browser-comment-cursor-style`),
      (Fp = Symbol(`denied-browser-frame-target`)));
  });
function Lp(e) {
  let t = (e ?? ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, Gp);
}
function Rp(e) {
  if (!Hp(e)) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (n != null && e instanceof n) || (r != null && e instanceof r);
}
function zp(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function Bp(e) {
  if (e.closest(`script,style,noscript,template,[hidden],[aria-hidden='true']`) != null) return !1;
  let t = Vp(e).getComputedStyle(e);
  return t.display !== `none` && t.visibility !== `hidden` && t.opacity !== `0`;
}
function Vp(e) {
  return e.ownerDocument.defaultView ?? window;
}
function Hp(e) {
  return e != null && e instanceof (e.ownerDocument.defaultView?.HTMLElement ?? HTMLElement);
}
function Up(e, t, n) {
  let r = e.createRange();
  return (r.selectNodeContents(t), Array.from(r.getClientRects()).some((e) => Wp(e, n)));
}
function Wp(e, t) {
  return e.right >= t.x && e.left <= t.x + t.width && e.bottom >= t.y && e.top <= t.y + t.height;
}
var Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp = o(() => {
    ((Gp = 2e3),
      (Kp = 4),
      (qp = 1),
      (Jp = 2),
      (Yp = class {
        pageUrl;
        constructor(e) {
          this.pageUrl = e;
        }
        isGoogleDocsPage() {
          return hs(this.pageUrl) != null;
        }
        getDocumentContext({ documentTitle: e, selectedText: t, visibleText: n }) {
          return vs({ documentTitle: e, pageUrl: this.pageUrl, selectedText: t, visibleText: n });
        }
        getElementDocumentContext({ documentTitle: e, elementWindow: t, fallbackWindow: n }) {
          return this.getDocumentContext({
            documentTitle: e,
            selectedText: this.getWindowSelectionText(t) ?? this.getWindowSelectionText(n),
          });
        }
        getRegionDocumentContext({
          documentTitle: e,
          fallbackWindow: t,
          frameWindow: n,
          viewportRect: r,
        }) {
          if (this.isGoogleDocsPage())
            return this.getDocumentContext({
              documentTitle: e,
              selectedText: this.getWindowSelectionText(n) ?? this.getWindowSelectionText(t),
              visibleText: this.getVisibleTextInViewportRect(n, r),
            });
        }
        static isGoogleDocsAnchor(e) {
          return e.documentContext?.kind === `google-docs` || hs(e.pageUrl) != null;
        }
        getWindowSelectionText(e) {
          try {
            return Lp(e.getSelection()?.toString()) ?? this.getActiveElementSelectionText(e);
          } catch {
            return null;
          }
        }
        getActiveElementSelectionText(e) {
          let t = e.document.activeElement;
          if (!Rp(t)) return null;
          let n = t.selectionStart,
            r = t.selectionEnd;
          return n == null || r == null || r <= n ? null : Lp(t.value.slice(n, r));
        }
        getVisibleTextInViewportRect(e, t) {
          let n = zp(e),
            r = n?.body;
          if (n == null || r == null) return null;
          let i = ``,
            a = n.createTreeWalker(r, Kp, {
              acceptNode: (e) => {
                if (Lp(e.textContent) == null) return Jp;
                let t = e.parentElement;
                return !Hp(t) || !Bp(t) ? Jp : qp;
              },
            }),
            o = a.nextNode();
          for (; o != null;) {
            let e = Lp(o.textContent);
            if (
              e != null &&
              Up(n, o, t) &&
              ((i = i.length === 0 ? e : `${i} ${e}`), i.length >= Gp)
            )
              break;
            o = a.nextNode();
          }
          return Lp(i);
        }
      }));
  });
function Zp(e) {
  let t = e.commonAncestorContainer.getRootNode();
  if (!em(t)) return null;
  let n = `defaultView` in t ? t.defaultView : t.ownerDocument.defaultView;
  return n != null && $p(n) ? { ownerWindow: n, range: e, styleRoot: t } : null;
}
function Qp({ color: e, name: t, ownerWindow: n, range: r, styleRoot: i }) {
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
function $p(e) {
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
function em(e) {
  return (
    `adoptedStyleSheets` in e &&
    (e.nodeType === Node.DOCUMENT_NODE ||
      (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e))
  );
}
var tm = o(() => {});
function nm(e, t, n) {
  let r = e.ownerDocument.createRange();
  try {
    return (r.selectNodeContents(e), r.setEnd(t, n), r.toString().length);
  } catch {
    return null;
  }
}
function rm(e, t) {
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
var im = o(() => {});
function am(e) {
  let t = e ?? window;
  if (e == null)
    for (;;) {
      let e = wm(t.document),
        n = e == null ? null : qf(e);
      if (n == null) {
        if (Gf(e)) return null;
        break;
      }
      t = n;
    }
  let n = Cm(t) ?? hm(t);
  return n == null ? null : Em(n);
}
function om(e) {
  let t = up(e.framePath);
  if (t == null || !fm(e.frameUrl, t)) return null;
  let n = km(t, e.textLocator);
  if (n == null) return null;
  let r = Sm(n, e.textLocator);
  return r?.toString() === e.textLocator.rangeText ? { range: r, target: n } : null;
}
function sm(e) {
  let t = up(e.framePath);
  if (t == null || !fm(e.frameUrl, t)) return null;
  let n = km(t, e.textLocator);
  if (n == null) return null;
  let r;
  switch (e.textLocator.kind) {
    case `dom`:
      r = xm(t, n, e.textLocator, e.selectedText);
      break;
    case `form-control`:
      r =
        U(n) && Wm(n)
          ? Tm(t, n, e.textLocator.startOffset, e.textLocator.endOffset, e.textLocator.direction)
          : null;
      break;
  }
  return r == null || r.selectedText !== e.selectedText ? null : Em(r);
}
function cm(e, t) {
  let n = new Map();
  for (let t of e) {
    if (t.anchor.kind !== `text`) continue;
    let e = sm(t.anchor)?.anchor;
    e?.kind === `text` && n.set(t.id, { sourceAnchor: t.anchor, value: e });
  }
  return t?.size === n.size &&
    Array.from(n).every(([e, n]) => {
      let r = t.get(e);
      return r?.sourceAnchor === n.sourceAnchor && Fs(r.value, n.value);
    })
    ? t
    : n;
}
function lm(e, t) {
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
      (e.type === `load` && Gf(e.target) && f(), s());
    },
    d = new MutationObserver((e) => {
      e.every(zm) ||
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
      for (let e of i) for (let t of Ym) e.removeEventListener(t, u, !0);
      ((n = new Set()), (r = new Set()), (i = new Set()), (a = !1));
      let t = new Set(),
        o = new Set();
      for (let s of e) {
        for (let e of Am(s.framePath)) (i.add(e), t.add(e.documentElement));
        let e = up(s.framePath);
        if (e == null) {
          a = !0;
          continue;
        }
        let c = km(e, s.textLocator);
        if (c == null) {
          a = !0;
          let n = jm(e, s.textLocator);
          (t.add(n), Nm(n) && i.add(n));
          continue;
        }
        (n.add(c), t.add(c), Nm(c) && i.add(c));
        let l = c.parentNode ?? Mm(c);
        for (; l != null;) (Nm(l) ? (t.add(l), i.add(l)) : o.add(l), (l = l.parentNode ?? Mm(l)));
        let u = U(c) ? c : Mm(c);
        for (; u != null;) (r.add(u), (u = u.parentElement ?? Mm(u.getRootNode())));
      }
      for (let e of t) d.observe(e, Jm);
      for (let e of o)
        t.has(e) || d.observe(e, { ...(U(e) ? { attributes: !0 } : {}), childList: !0 });
      for (let e of n) e.addEventListener(`input`, l);
      for (let e of r) e.addEventListener(`scroll`, c);
      for (let e of i) for (let t of Ym) e.addEventListener(t, u, !0);
    };
  return (
    f(),
    () => {
      d.disconnect();
      for (let e of n) e.removeEventListener(`input`, l);
      for (let e of r) e.removeEventListener(`scroll`, c);
      for (let e of i) for (let t of Ym) e.removeEventListener(t, u, !0);
      o != null && window.cancelAnimationFrame(o);
    }
  );
}
function um(e) {
  if (e.textLocator.kind !== `dom`) return null;
  let t = om({ framePath: e.framePath, frameUrl: e.frameUrl, textLocator: e.textLocator });
  return t == null ? null : Zp(t.range);
}
function dm(e) {
  return Qp({ ...e, color: `#128dff66`, name: qm });
}
function fm(e, t) {
  return e == null || t.location.href === e;
}
function pm() {
  for (let e of Xf())
    try {
      e.getSelection()?.removeAllRanges();
      let t = wm(e.document);
      Wm(t) && t.setSelectionRange(t.selectionEnd, t.selectionEnd);
    } catch {}
}
function mm(e, t) {
  return e.kind === `text` && !e.isFixed ? t.scrollX : 0;
}
function hm(e) {
  let t = e.getSelection();
  if (t == null || t.rangeCount === 0) return null;
  let n = t.toString();
  if (n.trim().length === 0 || n.length > 2e4) return null;
  let r = gm(e, t);
  if (r == null) return null;
  let i = Dm(r.commonAncestorContainer);
  if (i == null || Fm(r, e)) return null;
  let a = Om(i);
  if (a == null) return null;
  let o = nm(i, r.startContainer, r.startOffset),
    s = nm(i, r.endContainer, r.endOffset);
  if (o == null || s == null || s <= o) return null;
  let c = Lm(r);
  if (c.length === 0) return null;
  let l = bm(t, r) === `forward`;
  return {
    frameWindow: e,
    isFixed: Pm(i, e),
    locator: {
      ...a,
      kind: `dom`,
      direction: l ? `forward` : `backward`,
      rangeText: r.toString(),
      startOffset: o,
      endOffset: s,
    },
    rects: c,
    selectedText: n,
    viewportPoint: Um(c, l),
  };
}
function gm(e, t) {
  let n = t.getRangeAt(0);
  if (!n.collapsed && _m(t, n)) return n;
  if (!vm(t)) return null;
  let r = t.getComposedRanges({ shadowRoots: ym(e.document) })[0];
  if (r == null) return null;
  let i = e.document.createRange();
  return (
    i.setStart(r.startContainer, r.startOffset),
    i.setEnd(r.endContainer, r.endOffset),
    i.collapsed ? null : i
  );
}
function _m(e, t) {
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
function vm(e) {
  return `getComposedRanges` in e && typeof e.getComposedRanges == `function`;
}
function ym(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    !U(n) || n.shadowRoot == null || t.push(n.shadowRoot, ...ym(n.shadowRoot));
  return t;
}
function bm(e, t) {
  return e.anchorNode === t.startContainer && e.anchorOffset === t.startOffset
    ? `forward`
    : (e.focusNode === t.startContainer && e.focusOffset === t.startOffset) ||
        (`direction` in e && e.direction === `backward`)
      ? `backward`
      : `forward`;
}
function xm(e, t, n, r) {
  let i = Sm(t, n);
  if (i == null || i.toString() !== n.rangeText || Fm(i, e) || r.length > 2e4) return null;
  let a = Lm(i);
  return a.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Pm(t, e),
        locator: n,
        rects: a,
        selectedText: r,
        viewportPoint: Um(a, n.direction === `forward`),
      };
}
function Sm(e, t) {
  let n = rm(e, t.startOffset),
    r = rm(e, t.endOffset);
  if (n == null || r == null) return null;
  let i = e.ownerDocument.createRange();
  return (i.setStart(n.node, n.offset), i.setEnd(r.node, r.offset), i);
}
function Cm(e) {
  let t = wm(e.document);
  if (!Wm(t) || Im(t, e)) return null;
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
    : Tm(e, t, n, r, t.selectionDirection === `backward` ? `backward` : `forward`);
}
function wm(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
  return t;
}
function Tm(e, t, n, r, i) {
  let a = Om(t),
    o = t.value.slice(n, r);
  if (a?.selector == null || Im(t, e) || o.trim().length === 0 || o.length > 2e4) return null;
  let s = Rm(t, n, r);
  return s.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Pm(t, e),
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
        viewportPoint: Um(s, i === `forward`),
      };
}
function Em(e) {
  let t = Bf(e.frameWindow);
  if (t == null) return null;
  let n = Sp(e.frameWindow),
    r = Hm(e.rects),
    i = e.isFixed ? 0 : e.frameWindow.scrollX,
    a = e.rects.map((t) => ({
      ...t,
      x: t.x + i,
      y: e.isFixed ? t.y : t.y + e.frameWindow.scrollY,
    })),
    o = Hm(a),
    s = _p(e.frameWindow, e.viewportPoint),
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
function Dm(e) {
  if (Nm(e)) return e;
  let t = e.nodeType === 1 ? e : e.parentElement;
  for (; U(t);) {
    if (mp(t) != null) return t;
    t = t.parentElement;
  }
  return null;
}
function Om(e) {
  let t = U(e) ? mp(e, { requireUnique: !0 }) : null;
  if (U(e) && t == null) return null;
  let n = [],
    r = e.getRootNode();
  for (; r !== e.ownerDocument;) {
    let e = Mm(r);
    if (e == null || e.shadowRoot !== r) return null;
    let t = mp(e, { requireUnique: !0 });
    if (t == null) return null;
    (n.unshift(t), (r = e.getRootNode()));
  }
  return { selector: t, shadowHosts: n };
}
function km(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!U(t) || t.shadowRoot == null) return null;
    n = t.shadowRoot;
  }
  let r = t.selector;
  if (t.kind === `dom` && r == null) return Nm(n) ? n : null;
  if (r == null) return null;
  let i = n.querySelector(r);
  return U(i) ? i : null;
}
function Am(e) {
  let t = window,
    n = [t.document];
  for (let r of e) {
    let e = dp(t.document, r);
    if (e == null) break;
    let i = qf(e);
    if (i == null) break;
    ((t = i), n.push(t.document));
  }
  return n;
}
function jm(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!U(t) || t.shadowRoot == null) return n;
    n = t.shadowRoot;
  }
  return n;
}
function Mm(e) {
  return Nm(e) ? e.host : null;
}
function Nm(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && U(e.host);
}
function Pm(e, t) {
  let n = U(e) ? e : Mm(e);
  for (; n != null && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = n.parentElement ?? Mm(n.getRootNode());
  }
  return !1;
}
function Fm(e, t) {
  let n = e.commonAncestorContainer;
  if (n.nodeType === Node.TEXT_NODE) return n.parentElement != null && Im(n.parentElement, t);
  let r = t.document.createTreeWalker(n, NodeFilter.SHOW_TEXT),
    i = r.nextNode();
  for (; i != null;) {
    if (e.intersectsNode(i) && i.parentElement != null && Im(i.parentElement, t)) return !0;
    i = r.nextNode();
  }
  return !1;
}
function Im(e, t) {
  let n = t.getComputedStyle(e).getPropertyValue(`-webkit-text-security`);
  return n.length > 0 && n !== `none`;
}
function Lm(e) {
  if (typeof e.getClientRects != `function`) return [];
  let t = e.getClientRects();
  return t.length > 1e3
    ? []
    : Array.from(t)
        .filter((e) => e.width > 0 && e.height > 0)
        .map((e) => ({ x: e.left, y: e.top, width: e.width, height: e.height }));
}
function Rm(e, t, n) {
  let r = e.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return [];
  let i = e.ownerDocument.defaultView;
  if (i == null || Bm(e, i)) return [];
  let a = i.getComputedStyle(e),
    o = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
    s = e.offsetHeight > 0 ? r.height / e.offsetHeight : 1,
    c = e.ownerDocument.createElement(`div`);
  (c.setAttribute(Xm, ``),
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
  for (let e of Km) c.style[e] = a[e];
  ((c.style.boxSizing = `border-box`), c.append(e.value.slice(0, t)));
  let l = e.ownerDocument.createElement(`span`);
  ((l.textContent = e.value.slice(t, n) || `​`),
    c.append(l, e.value.slice(n)),
    e.ownerDocument.body.append(c),
    (c.scrollLeft = e.scrollLeft),
    (c.scrollTop = e.scrollTop));
  let u = l.getClientRects(),
    d = Array.from(u.length > 1e3 ? [] : u)
      .map((e) => Vm(e, r))
      .filter((e) => e != null);
  return (c.remove(), d);
}
function zm(e) {
  if (e.type !== `childList`) return !1;
  let t = [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)];
  return t.length > 0 && t.every((e) => U(e) && e.hasAttribute(Xm));
}
function Bm(e, t) {
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
    n = n.parentElement ?? Mm(n.getRootNode());
  }
  return !1;
}
function Vm(e, t) {
  let n = Math.max(e.left, t.left),
    r = Math.max(e.top, t.top),
    i = Math.min(e.right, t.right),
    a = Math.min(e.bottom, t.bottom);
  return i <= n || a <= r ? null : { x: n, y: r, width: i - n, height: a - r };
}
function Hm(e) {
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function Um(e, t) {
  let n = t ? e.at(-1) : e[0];
  return n == null ? { x: 0, y: 0 } : { x: t ? n.x + n.width : n.x, y: n.y + n.height / 2 };
}
function Wm(e) {
  if (e == null) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (r != null && e instanceof r) || (n != null && e instanceof n && Gm.has(e.type));
}
var Gm,
  Km,
  qm,
  Jm,
  Ym,
  Xm,
  Zm = o(() => {
    (Qs(),
      tm(),
      im(),
      Ip(),
      (Gm = new Set([`email`, `search`, `tel`, `text`, `url`])),
      (Km =
        `borderBottomStyle.borderBottomWidth.borderLeftStyle.borderLeftWidth.borderRightStyle.borderRightWidth.borderTopStyle.borderTopWidth.boxSizing.direction.fontFamily.fontFeatureSettings.fontKerning.fontSize.fontStretch.fontStyle.fontVariant.fontWeight.letterSpacing.lineHeight.paddingBottom.paddingLeft.paddingRight.paddingTop.tabSize.textAlign.textIndent.textTransform.wordBreak.wordSpacing`.split(
          `.`,
        )),
      (qm = `codex-browser-text-selection`),
      (Jm = { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      (Ym = [`animationcancel`, `animationend`, `load`, `transitioncancel`, `transitionend`]),
      (Xm = `data-browser-comment-text-selection-mirror`));
  });
function Qm(e) {
  let t = ih(e);
  if (t == null) return null;
  let n = xp(e).getComputedStyle(e);
  return {
    borderRadius: n.borderRadius.length === 0 ? `0px` : n.borderRadius,
    color: ws(n.color),
    font: `${n.fontSize} ${n.fontFamily}`.trim(),
    styles: ls(n, n.display === `flex` || n.display === `inline-flex` ? [..._h, ...vh] : _h),
    rect: t,
    size: `${Math.round(t.width)}x${Math.round(t.height)}`,
    tagName: e.tagName.toLowerCase(),
  };
}
function $m(e) {
  return (
    e.kind === `element` &&
    e.framePath.length === 0 &&
    (e.elementPath === `html` || e.elementPath === `body`)
  );
}
function eh(e, t, n, r, i = window.innerWidth) {
  let a = yh.get(e.ownerDocument);
  a ?? ((a = new WeakMap()), yh.set(e.ownerDocument, a));
  let o = a.get(e);
  o ?? ((o = Lf()), a.set(e, o));
  let s = xp(e),
    c = lp(e),
    l = c == null ? null : hp(e, { requireUnique: !1 }),
    u = vp(e),
    d = ch(),
    f = new Yp(d).getElementDocumentContext({
      documentTitle: document.title,
      elementWindow: s,
      fallbackWindow: window,
    });
  return {
    kind: `element`,
    runtimeElementId: o,
    pageUrl: d,
    frameUrl: lh(s, c),
    title: ap(e),
    elementPath: cp(e),
    point: { xPercent: (n.x / i) * 100, y: r ? n.y : n.y + window.scrollY },
    rect: { x: t.x, y: r ? t.y : t.y + window.scrollY, width: t.width, height: t.height },
    isFixed: r,
    role: e.getAttribute(`role`),
    name: e.getAttribute(`aria-label`) ?? op(e),
    selector: l,
    framePath: c ?? [],
    nearbyText: sp(e),
    immediateText: mh(e),
    documentContext: f,
    ...(u.length === 0 ? {} : { scrollContainers: u }),
  };
}
function th(e, t, n, r) {
  let i = ih(e);
  return i == null
    ? t
    : {
        ...eh(e, i, dh(t, i, n, r), gp(e), n?.width),
        elementMetadata: t.elementMetadata,
        elementName: t.elementName,
      };
}
function nh(e, t, n, r) {
  let i =
      n &&
      window.top === window &&
      e.ownerDocument === document &&
      e.namespaceURI === `http://www.w3.org/1999/xhtml` &&
      !Uf(e) &&
      ih(e) != null,
    a,
    o;
  return (
    i &&
      ((a = r),
      e.hasAttribute(`data-openai-annotatable`) &&
        ((o = Xo(e.getAttribute(`data-openai-annotatable`))),
        (a ??= Qo(e.getAttribute(`data-openai-annotation-metadata`))))),
    { ...t, elementMetadata: a, elementName: o }
  );
}
function rh(e, t, n) {
  if (e.kind !== `element`) return null;
  if (t != null) {
    let e = n.get(t) ?? null;
    if (e?.isConnected) return ih(e) == null ? null : e;
    e != null && n.delete(t);
  }
  if (e.selector == null || !uh(e.pageUrl, ch())) return null;
  try {
    let t = pp(e.framePath);
    return t == null ? null : oh(t, e);
  } catch {
    return null;
  }
}
function ih(e) {
  if (!e.isConnected || !ph(e)) return null;
  let t = xp(e),
    n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = Sp(t);
  return { x: n.left + r.x, y: n.top + r.y, width: n.width, height: n.height };
}
function ah(e) {
  return e.getAttribute(`aria-label`) ?? op(e);
}
function oh(e, t) {
  if (t.selector == null) return null;
  let n = t.selector.startsWith(`shadow:`)
    ? [fp(e, t.selector)].filter(U)
    : Array.from(e.querySelectorAll(t.selector)).filter(U);
  if (n.length === 0) return null;
  let r = n.filter((e) => ih(e) != null);
  if (r.length === 0) return null;
  let i = r;
  if (t.name != null) {
    let e = i.filter((e) => ah(e) === t.name);
    e.length > 0 && (i = e);
  }
  if (t.nearbyText != null) {
    let e = i.filter((e) => sp(e) === t.nearbyText);
    e.length > 0 && (i = e);
  }
  if (i.length === 1) return i[0] ?? null;
  let a = null,
    o = -1 / 0;
  for (let e of i) {
    let n = fh(t, e);
    n > o && ((a = e), (o = n));
  }
  return a;
}
function sh(e) {
  if (e == null) return null;
  let t = up(e.framePath),
    n = yp(e, t ?? window),
    r = n.x + mm(e, t ?? window);
  if (e.kind !== `element` && t != null && t !== window) {
    let i = Sp(t);
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
function ch() {
  return window.location.href;
}
function lh(e, t) {
  if (t == null || t.length === 0) return null;
  let n = e.location.href;
  if (n !== ch()) return n;
  let r = e.frameElement;
  return Gf(r) && r.src !== `` ? r.src : n;
}
function uh(e, t) {
  let n = hh(e),
    r = hh(t);
  return n == null || r == null
    ? e === t
    : (n.protocol === `http:` || n.protocol === `https:`) &&
        (r.protocol === `http:` || r.protocol === `https:`)
      ? n.origin === r.origin && n.pathname === r.pathname && n.search === r.search
      : n.protocol === `file:` && r.protocol === `file:`
        ? n.pathname === r.pathname && n.search === r.search
        : e === t;
}
function dh(e, t, n, r) {
  let i = r?.x ?? (e.point.xPercent / 100) * (n?.width ?? window.innerWidth),
    a = e.rect.width === 0 ? 0.5 : (i - e.rect.x) / e.rect.width,
    o = e.rect.height === 0 ? 0.5 : (e.point.y - e.rect.y) / e.rect.height;
  return { x: t.x + gh(a, 0, 1) * t.width, y: t.y + gh(o, 0, 1) * t.height };
}
function fh(e, t) {
  let n = 0,
    r = ah(t);
  (e.name != null && r === e.name && (n += 1e3),
    e.nearbyText != null && sp(t) === e.nearbyText && (n += 500),
    e.title === ap(t) && (n += 250),
    e.elementPath === cp(t) && (n += 25));
  let i = ih(t),
    a = sh(e);
  return i == null || a == null ? n : n - Math.abs(i.x - a.x) - Math.abs(i.y - a.y);
}
function ph(e) {
  for (let t = e; t != null; t = t.parentElement) {
    let e = xp(t).getComputedStyle(t);
    if (
      e.display === `none` ||
      e.visibility === `hidden` ||
      e.visibility === `collapse` ||
      Number.parseFloat(e.opacity) === 0
    )
      return !1;
  }
  return (
    typeof e.checkVisibility != `function` ||
    e.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 })
  );
}
function mh(e) {
  if (Uf(e)) return null;
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Node.TEXT_NODE)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function hh(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function gh(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var _h,
  vh,
  yh,
  bh = o(() => {
    (Qs(),
      zf(),
      Ip(),
      Xp(),
      Zm(),
      (_h = [
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
      (vh = [`flex-direction`, `justify-content`, `align-items`, `gap`, `row-gap`, `column-gap`]),
      (yh = new WeakMap()));
  });
function xh() {
  let e = new Map(),
    t = null,
    n = new Map(),
    r = () => {
      let r = n;
      ((n = new Map()), e.clear(), (t = null));
      for (let [e, t] of r)
        for (let n of t.values())
          Sh(e, { callback: n.callback, value: n.resetValue, action: `reset` });
    };
  return {
    rememberTarget(n, r) {
      (e.has(n) || e.set(n, new WeakRef(r)), (t = n));
    },
    sync(i) {
      if (
        i.canUseSiteAnnotationApi !== !0 ||
        i.canUseTweaks === !1 ||
        i.isAgentControllingBrowser
      ) {
        r();
        return;
      }
      let a = i.comments.flatMap((e) =>
        e.designChange == null || e.designChange.id === i.activeDesignChange?.id
          ? []
          : [e.designChange],
      );
      i.activeDesignChange != null && a.push(i.activeDesignChange);
      let o = i.isOriginalViewEnabled === !0 || i.interactionMode !== `comment`,
        s = new Map(),
        c = new Set(a.map((e) => e.id));
      for (let n of e.keys()) n !== t && !c.has(n) && e.delete(n);
      for (let t of a) {
        let n = e.get(t.id)?.deref();
        if (
          !(
            n == null ||
            !n.isConnected ||
            !uh(t.anchor.pageUrl, window.location.href) ||
            pp(t.anchor.framePath) !== n.ownerDocument ||
            (t.anchor.frameUrl != null && !uh(t.anchor.frameUrl, n.ownerDocument.location.href))
          )
        )
          for (let e of t.annotationControlChanges ?? []) {
            let r = t.annotationControls?.controls.find((t) => t.callback === e.callback);
            if (r == null) continue;
            let i = e.previousValue ?? cc(r);
            if (e.value === i) continue;
            let a = s.get(n) ?? new Map();
            (a.set(e.callback, {
              callback: e.callback,
              resetValue: i,
              value: o ? i : e.value,
              action: o ? `preview-original` : `preview`,
            }),
              s.set(n, a));
          }
      }
      let l = n;
      n = s;
      for (let [e, t] of l)
        for (let [n, r] of t)
          s.get(e)?.has(n) || Sh(e, { callback: n, value: r.resetValue, action: `reset` });
      for (let [e, t] of s)
        for (let [n, r] of t) {
          let t = l.get(e)?.get(n);
          (t?.value !== r.value || t.action !== r.action) && Sh(e, r);
        }
    },
    clear: r,
  };
}
function Sh(e, { callback: t, value: n, action: r }) {
  (!e.isConnected && r !== `reset`) ||
    e.dispatchEvent(
      new CustomEvent(`openai:annotation-control-change`, {
        bubbles: !0,
        detail: { callback: t, value: n, action: r },
      }),
    );
}
var Ch = o(() => {
  (yc(), bh(), Ip());
});
function wh(e) {
  let t = e.toLowerCase();
  return t.endsWith(`.localhost`) || Eh.has(t);
}
function Th(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  return t.protocol !== `http:` && t.protocol !== `https:` ? !1 : wh(t.hostname);
}
var Eh,
  Dh = o(() => {
    Eh = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `[::1]`, `::1`]);
  });
function Oh(e) {
  return Th(e);
}
var kh = o(() => {
  Dh();
});
function Ah(e, t) {
  return jh(e, t) ?? Ph(e);
}
function jh(e, t) {
  let n = e.ownerDocument,
    r = n.defaultView,
    i = e,
    a = null;
  for (; i?.ownerDocument === n;) {
    let e = i === n.body || i === n.documentElement,
      o = i.hasAttribute(`data-openai-annotation-container`);
    if (!e && !o && a == null && i.hasAttribute(`data-openai-annotatable`)) {
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
    i = Wf(i);
  }
}
function Mh(e, t, n) {
  if (!n) return { additional: [], primary: t };
  let r = [e.primary, ...e.additional],
    i = r.findIndex((e) => Nh(e, t));
  if (i === -1) return { additional: [...e.additional, t], primary: e.primary };
  let [a, ...o] = r.filter((e, t) => t !== i);
  return a == null ? null : { additional: o, primary: a };
}
function Nh(e, t) {
  return e.anchor.kind === `element` &&
    t.anchor.kind === `element` &&
    e.liveElement?.isConnected &&
    t.liveElement?.isConnected
    ? e.liveElement === t.liveElement
    : e.anchor.kind === t.anchor.kind &&
        e.anchor.pageUrl === t.anchor.pageUrl &&
        e.anchor.frameUrl === t.anchor.frameUrl &&
        (e.anchor.kind === `element`
          ? e.anchor.selector === t.anchor.selector && e.anchor.elementPath === t.anchor.elementPath
          : e.anchor.rect.x === t.anchor.rect.x &&
            e.anchor.rect.y === t.anchor.rect.y &&
            e.anchor.rect.width === t.anchor.rect.width &&
            e.anchor.rect.height === t.anchor.rect.height) &&
        e.anchor.framePath.length === t.anchor.framePath.length &&
        e.anchor.framePath.every((e, n) => e === t.anchor.framePath[n]);
}
function Ph(e) {
  let t = e.ownerDocument,
    n = e,
    r = null;
  for (; n?.ownerDocument === t && n !== t.body && n !== t.documentElement;) {
    let e = n.getBoundingClientRect();
    if (e.width > 0 && e.height > 0) {
      if (((r ??= n), Fh(n, e))) return n;
      e.width >= Ih.width && e.height >= Ih.height && (r = n);
    }
    n = n.parentElement;
  }
  return r;
}
function Fh(e, t) {
  let n = e.tagName.toLowerCase();
  return [`a`, `button`, `input`, `textarea`, `select`, `label`, `img`].includes(n) ||
    e.getAttribute(`role`) != null
    ? !0
    : op(e) != null && t.width >= Lh.width && t.height >= Lh.height;
}
var Ih,
  Lh,
  Rh = o(() => {
    (Ip(), (Ih = { width: 48, height: 24 }), (Lh = { width: 24, height: 16 }));
  });
function zh(e, t, n, r, i = `annotation`) {
  let a = r == null ? Jf(e, t, i === `annotation` && n ? jh : void 0) : Vh(e, t, r, i, n),
    o = a?.ownerDocument.defaultView;
  if (a == null || o == null) return null;
  let s = Cp(o, { x: 0, y: 0 });
  return Uh(a, { x: e - s.x, y: t - s.y }, i, n);
}
function Bh(e, t, n = `annotation`) {
  let r = e.composedPath().find((e) => U(e) && e.namespaceURI === `http://www.w3.org/1999/xhtml`);
  if (r == null) return null;
  let i = { x: e.clientX, y: e.clientY };
  if (n === `annotation` && t && r.ownerDocument !== document) {
    let e = r.ownerDocument.defaultView;
    if (e == null) return null;
    let a = Cp(e, i),
      o = [],
      s = e;
    for (; s !== window;) {
      let e = s.frameElement;
      if (!Gf(e)) return null;
      let t = e.ownerDocument.defaultView;
      if (t == null) return null;
      let n = Cp(t, { x: 0, y: 0 });
      (o.unshift({ frame: e, point: { x: a.x - n.x, y: a.y - n.y } }), (s = t));
    }
    for (let { frame: e, point: r } of o) {
      let i = jh(e, r);
      if (i !== void 0) return Uh(i, r, n, t);
    }
  }
  return Uh(r, i, n, t);
}
function Vh(e, t, n, r = `design`, i = !1) {
  let a = n.shadowRoot?.querySelector(`[data-browser-comment-root]`),
    o = r === `annotation` && i ? jh : void 0;
  if (!(a instanceof HTMLElement)) return Jf(e, t, o);
  let s = n.shadowRoot?.querySelector(`[${Gh}]`),
    c = n.shadowRoot?.querySelector(`[${Kh}]`),
    l = n.style.pointerEvents,
    u = a.style.pointerEvents,
    d = c instanceof HTMLElement ? c.style.pointerEvents : void 0,
    f = s instanceof HTMLElement ? s.style.pointerEvents : void 0;
  ((n.style.pointerEvents = `none`),
    (a.style.pointerEvents = `none`),
    c instanceof HTMLElement && (c.style.pointerEvents = `none`),
    s instanceof HTMLElement && (s.style.pointerEvents = `none`));
  try {
    return Jf(e, t, o);
  } finally {
    ((n.style.pointerEvents = l),
      (a.style.pointerEvents = u),
      c instanceof HTMLElement && (c.style.pointerEvents = d ?? ``),
      s instanceof HTMLElement && (s.style.pointerEvents = f ?? ``));
  }
}
function Hh(e) {
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
function Uh(e, t, n, r) {
  if (Hh(e)) return null;
  if (Uf(e)) return e;
  let i = n === `design` || !r ? Ph(e) : Ah(e, t);
  return i == null || Hh(i) ? null : i;
}
var Wh,
  Gh,
  Kh,
  qh = o(() => {
    (Rh(),
      Ip(),
      (Wh = `codex-browser-sidebar-comments-root`),
      (Gh = `data-browser-comment-interaction-blocker`),
      (Kh = `data-browser-comment-interaction-layer`));
  });
function Jh(e) {
  if (e.length === 0) return null;
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function Yh(e, t = sh(e), n = null) {
  if (t == null) return null;
  let r = hg(t, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  if (r == null) return null;
  let i = document,
    a = window;
  for (let t of e.framePath) {
    let e = dp(i, t);
    if (e == null || ((r = dg(r, e)), r == null)) return null;
    let n = e.getBoundingClientRect(),
      o = Sp(a);
    if (
      ((r = hg(r, { x: o.x + n.left, y: o.y + n.top, width: n.width, height: n.height })),
      r == null)
    )
      return null;
    let s = qf(e);
    if (s == null) return null;
    ((a = s), (i = s.document));
  }
  let o = Sp(a),
    s =
      n?.isConnected === !0 && n.ownerDocument === i
        ? n
        : e.kind === `element` && e.selector != null
          ? fp(i, e.selector)
          : null,
    c = s == null ? null : fg(s, a);
  for (let t of e.scrollContainers ?? []) {
    let e = fp(i, t.selector);
    if (e == null || (c != null && !c.has(e))) continue;
    let n = a.getComputedStyle(e);
    if (
      ((r = gg(r, mg(e, o), {
        x: Hf(n.overflowX || n.overflow),
        y: Hf(n.overflowY || n.overflow),
      })),
      r == null)
    )
      return null;
  }
  return r;
}
function Xh(e, t, { framePath: n = [], frameUrl: r = null } = {}) {
  let i = up(n) ?? window,
    a = Sp(i),
    o = { x: t.x - a.x, y: t.y - a.y },
    s = { x: e.x - a.x, y: e.y - a.y, width: e.width, height: e.height },
    c = _p(i, o),
    l = ch(),
    u = new Yp(l).getRegionDocumentContext({
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
function Zh(e) {
  let t = _g(e.anchor, e.markerViewportPoint);
  return e.viewportSize == null
    ? t
    : t == null
      ? e.viewportSize
      : {
          height: Math.max(e.viewportSize.height, t.height),
          width: Math.max(e.viewportSize.width, t.width),
        };
}
function Qh() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`;
}
function $h() {
  return { height: window.innerHeight, width: window.innerWidth };
}
function eg(e, t, n, r) {
  return vg(e, t, n, r)
    ? `hover-box google-docs-annotation-box google-docs-element-box`
    : `hover-box`;
}
function tg(e, t = lg(), { includeElementFrameScroll: n = !1, markerPointInset: r = Sg } = {}) {
  let i = up(e.framePath),
    a = yp(e, i ?? window),
    o = a.x + mm(e, i ?? window);
  if (e.kind !== `element` && i != null && i !== window) {
    let n = Sp(i);
    return {
      x: xg(n.x + (e.point.xPercent / 100) * i.innerWidth - o, r, t.width - r),
      y: n.y + e.point.y - (e.isFixed ? 0 : i.scrollY) - a.y,
    };
  }
  let s = n && e.kind === `element` && i != null && i !== window ? i.scrollY : 0;
  return {
    x: xg((e.point.xPercent / 100) * t.width - o, r, t.width - r),
    y: (e.isFixed ? e.point.y : e.point.y - t.scrollY - s) - a.y,
  };
}
function ng(e, t) {
  return t == null ? e : { ...e, height: t.height, width: t.width };
}
function rg(e, t, { includeElementFrameScroll: n = !1, viewportSize: r, zoomFactor: i }) {
  let a = tg(e, ng(t, r), { includeElementFrameScroll: n, markerPointInset: Sg / i });
  return { x: a.x * i, y: a.y * i };
}
function ig(e, t, n) {
  let r = sh(e),
    i =
      r == null
        ? null
        : hg(r, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }),
    a = Yh(e, r, n.liveElement);
  if (a == null || i == null) return null;
  let o = rg(e, t, n),
    s = a.x !== i.x || a.width !== i.width,
    c = a.y !== i.y || a.height !== i.height,
    l = ug(a, n.zoomFactor);
  return (!s || (o.x >= l.x && o.x <= l.x + l.width)) &&
    (!c || (o.y >= l.y && o.y <= l.y + l.height))
    ? o
    : null;
}
function ag(e, t, n) {
  let r = ng(lg(), n),
    i = Sg / t,
    a = tg(e, r, { markerPointInset: i });
  return { x: a.x, y: xg(a.y, i, r.height - i) };
}
function og(e, t, n, r) {
  return vg(e, t, n, r)
    ? `posted-region-highlight google-docs-annotation-box google-docs-region-box`
    : `posted-region-highlight`;
}
function sg(e, t, n) {
  let r = ug(e, t);
  return { borderRadius: n, left: r.x, top: r.y, width: r.width, height: r.height };
}
function cg(e, t, n, r) {
  return vg(e, t, n, r)
    ? `hover-box region-box google-docs-annotation-box google-docs-region-box`
    : `hover-box region-box`;
}
function lg() {
  let e = window.visualViewport,
    t = e != null && (e.offsetLeft !== 0 || e.offsetTop !== 0 || e.scale !== 1);
  return {
    height: window.innerHeight,
    scrollY: window.scrollY,
    ...(t
      ? { visualViewport: { offsetLeft: e.offsetLeft, offsetTop: e.offsetTop, scale: e.scale } }
      : {}),
    width: window.innerWidth,
  };
}
function ug(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function dg(e, t) {
  let n = t.ownerDocument.defaultView ?? window,
    r = Sp(n),
    i = e,
    a = fg(t, n),
    o = Wf(t);
  for (; o != null && o !== n.document.body && o !== n.document.documentElement;) {
    if (!a.has(o)) {
      o = Wf(o);
      continue;
    }
    let e = n.getComputedStyle(o),
      t = Hf(e.overflowX || e.overflow),
      s = Hf(e.overflowY || e.overflow);
    if ((t || s) && ((i = gg(i, mg(o, r), { x: t, y: s })), i == null)) return null;
    o = Wf(o);
  }
  return i;
}
function fg(e, t) {
  let n = new Set(),
    r = e;
  for (; r != null;) {
    let e = t.getComputedStyle(r).position,
      i = Wf(r);
    if (e === `absolute` || e === `fixed`)
      for (
        ;
        i != null &&
        i !== t.document.body &&
        i !== t.document.documentElement &&
        !pg(t.getComputedStyle(i), e);
      )
        i = Wf(i);
    if (i == null || i === t.document.body || i === t.document.documentElement) break;
    (n.add(i), (r = i));
  }
  return n;
}
function pg(e, t) {
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
function mg(e, t) {
  let n = e.getBoundingClientRect();
  return {
    x: t.x + n.left + e.clientLeft,
    y: t.y + n.top + e.clientTop,
    width: e.clientWidth,
    height: e.clientHeight,
  };
}
function hg(e, t) {
  return gg(e, t, { x: !0, y: !0 });
}
function gg(e, t, n) {
  let r = n.x ? Math.max(e.x, t.x) : e.x,
    i = n.y ? Math.max(e.y, t.y) : e.y,
    a = n.x ? Math.min(e.x + e.width, t.x + t.width) : e.x + e.width,
    o = n.y ? Math.min(e.y + e.height, t.y + t.height) : e.y + e.height;
  return a <= r || o <= i ? null : { x: r, y: i, width: a - r, height: o - i };
}
function _g(e, t) {
  if (t == null) return;
  let n = e.point.xPercent <= 0 ? 0 : t.x / (e.point.xPercent / 100);
  return {
    height: Math.max(window.innerHeight, t.y + Sg),
    width: Math.max(window.innerWidth, n, t.x + Sg, e.rect.x + e.rect.width),
  };
}
function vg(e, t, n, r) {
  return yg(e) && bg(t, n, r);
}
function yg(e) {
  return e == null ? gs(ch()) : Yp.isGoogleDocsAnchor(e) || gs(e.pageUrl);
}
function bg(e, t, n) {
  return e == null || t <= 0 || n <= 0 ? !1 : e.width >= t * Cg && e.height >= n * wg;
}
function xg(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Sg,
  Cg,
  wg,
  Tg = o(() => {
    (Qs(), bh(), Ip(), Xp(), Zm(), (Sg = 16 + Xs / 2), (Cg = 0.45), (wg = 0.3));
  });
function Eg(e, t, n) {
  return e.anchor.kind === `text`
    ? { type: `text`, themeVariant: e.themeVariant ?? Qh(), value: e.anchor }
    : e.anchor.kind === `region`
      ? {
          type: `region`,
          additionalSelections: (e.additionalAnchors ?? []).map((e) => Dg(e, n)),
          themeVariant: e.themeVariant ?? Qh(),
          value: e.anchor,
          viewportSize: $h(),
        }
      : {
          type: `element`,
          additionalSelections: (e.additionalAnchors ?? []).map((e) => Dg(e, n)),
          element: t,
          markerViewportPoint: e.markerViewportPoint,
          themeVariant: e.themeVariant ?? Qh(),
          value: e.anchor,
          viewportSize: $h(),
        };
}
function Dg(e, t) {
  return e.kind === `region`
    ? { anchor: e, liveElement: null }
    : { anchor: e, liveElement: rh(e, void 0, t) };
}
function Og(e, t) {
  let n = e.anchorState.anchor;
  if (n.kind === `text`)
    return {
      target: e.target,
      anchor: {
        type: `text`,
        ...(e.anchorState.themeVariant == null ? {} : { themeVariant: e.anchorState.themeVariant }),
        value: n,
      },
    };
  let r = (e.anchorState.additionalAnchors ?? []).map((e) => Dg(e, t));
  if (n.kind === `region`)
    return {
      target: e.target,
      anchor: {
        type: `region`,
        additionalSelections: r,
        themeVariant: e.anchorState.themeVariant,
        value: n,
        viewportSize: e.anchorState.viewportSize,
      },
    };
  let i = rh(n, void 0, t);
  return {
    target: e.target,
    anchor: {
      type: `element`,
      additionalSelections: r,
      cardViewportRect: e.anchorState.cardViewportRect,
      element: i,
      markerViewportPoint: e.anchorState.viewportPoint,
      themeVariant: e.anchorState.themeVariant,
      viewportSize: e.anchorState.viewportSize,
      value: n,
    },
  };
}
function kg(e) {
  return e.type === `element` ? Fg(e.element, e.value, e.viewportSize) : e.value;
}
function Ag(e, t) {
  return e.type === `element`
    ? e.element?.isConnected && e.element.ownerDocument === pp(e.value.framePath)
      ? e.element
      : rh(e.value, void 0, t)
    : null;
}
function jg(e) {
  return {
    additional: e.additionalSelections,
    primary:
      e.type === `element`
        ? { anchor: e.value, liveElement: e.element }
        : { anchor: e.value, liveElement: null },
  };
}
function Mg(e, t, n) {
  let r = n?.themeVariant ?? e.themeVariant,
    i = n?.viewportSize ?? e.viewportSize;
  return t.primary.anchor.kind === `region`
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
function Ng(e, t) {
  return e.anchor.kind === `region` ? e.anchor : Fg(e.liveElement, e.anchor, t);
}
function Pg(
  e,
  t,
  { clipToVisibleArea: n = !1, selectionIndexOffset: r = 0, viewportSize: i } = {},
) {
  return e.flatMap((e, a) => {
    let o = Ng(e, i),
      s = e.anchor.kind === `element` && e.liveElement != null ? Qm(e.liveElement) : null,
      c = s?.rect ?? sh(o),
      l = c == null ? null : n ? Yh(o, c, e.liveElement) : c;
    return l == null
      ? []
      : [
          {
            borderRadius: s?.borderRadius,
            className:
              o.kind === `region` ? cg(o, c, t.width, t.height) : eg(o, c, t.width, t.height),
            isPageAnnotation: $m(o),
            key: `${e.anchor.kind}:${e.anchor.framePath.join(`>`)}:${e.anchor.selector ?? e.anchor.elementPath}:${e.anchor.rect.x}:${e.anchor.rect.y}:${a}`,
            rect: l,
            selectionIndex: r + a,
          },
        ];
  });
}
function Fg(e, t, n) {
  return e == null || !e.isConnected ? t : th(e, t, n);
}
var Ig = o(() => {
  (bh(), Tg(), Ip());
});
function Lg(e, t) {
  return e.anchor.kind === `element` ? rh(e.anchor, e.id, t) : null;
}
function Rg(e, t, n = !1, r = null) {
  if (e.anchor.kind === `text`)
    return { ...e, ...(r == null ? {} : { anchor: r }), selectionSourceIndexes: [0] };
  let i = Zh(e),
    a = [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((r, a) => {
      if (r.kind === `region`) return [{ anchor: r, sourceIndex: a }];
      let o = rh(r, a === 0 ? e.id : void 0, t);
      return o == null
        ? !n && r.selector != null && uh(r.pageUrl, ch())
          ? []
          : [{ anchor: r, sourceIndex: a }]
        : (a === 0 && t.set(e.id, o),
          [{ anchor: th(o, r, i, a === 0 ? e.markerViewportPoint : void 0), sourceIndex: a }]);
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
function zg(e, t, n) {
  if (e.anchor.kind === `text` || t.kind === `text`) return e;
  let r = [e.anchor, ...(e.additionalAnchors ?? [])].filter((e, t) => t !== n);
  return {
    ...e,
    anchor: t,
    additionalAnchors: r.length === 0 ? void 0 : r,
    markerViewportPoint: n === 0 ? e.markerViewportPoint : void 0,
  };
}
var Bg = o(() => {
  (bh(), Tg());
});
function Vg(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Vg(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function Hg() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Vg(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Ug = o(() => {});
function Wg(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  let i = Ss(e, { viewport: t, viewportScale: n, zoomFactor: r });
  return xs(n) === 1
    ? { left: i.x, top: i.y, width: i.width }
    : { height: i.height, left: i.x, top: i.y, width: i.width };
}
var Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g = o(() => {
    (Qs(),
      (Gg = `#000000`),
      (Kg = `#0069FB`),
      (qg = {
        ...Ys,
        fill: `#0285FF`,
        hotspotByMode: { add: { x: Ys.width / 2, y: Ys.height / 2 }, comment: Ys.hotspot },
        path: `M12.6504 0.824799C6.21496 0.824799 0.825466 5.77554 0.825195 12.0885C0.825245 14.2375 1.46183 16.2421 2.55176 17.943L2.02148 20.235L1.99316 20.3756C1.77603 21.655 2.78945 22.7791 4.02832 22.7691L4.0791 22.8209L4.53418 22.7047L7.12305 22.0426C8.77593 22.8778 10.6577 23.3531 12.6504 23.3531C19.086 23.3531 24.4754 18.4014 24.4756 12.0885C24.4753 5.77554 19.0858 0.824799 12.6504 0.824799Z`,
        stroke: `white`,
        strokeWidth: 1.65,
      }),
      (Jg = (qg.hotspotByMode.comment.x / qg.width) * 100),
      (Yg = ((qg.hotspotByMode.comment.y + (qg.width - qg.height) / 2) / qg.width) * 100),
      (Xg = `translate(-${Jg}%,-${Yg}%)`),
      (Zg = {
        position: `fixed`,
        inset: 0,
        pointerEvents: `none`,
        fontSize: `13px`,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
      }),
      (Qg = `
.hover-box{position:fixed;box-sizing:border-box;border-radius:0;border:2px solid ${Kg};background:color-mix(in srgb,${Kg} 3%,transparent);box-shadow:inset 0 0 0 1px rgba(255,255,255,.28);pointer-events:none}
.text-selection-highlight{position:fixed;box-sizing:border-box;background:#128dff66;pointer-events:none}
.flex-item-overlay{position:fixed;box-sizing:border-box;border-radius:0;border:1px solid rgba(2,133,255,.52);background:rgba(18,141,255,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);pointer-events:none}
.interaction-layer{position:fixed;inset:0;z-index:0;width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border:0;padding:0;background:transparent;pointer-events:none}
.interaction-layer::backdrop{background:transparent}
.interaction-blocker{position:absolute;inset:0;z-index:0;pointer-events:auto;touch-action:pan-x pan-y}
.annotation-selection-cursor{position:fixed;z-index:1;display:block}
.annotation-selection-modifier-cursor{z-index:2;color:${Gg};paint-order:stroke fill;stroke:${qg.stroke};stroke-linejoin:round;stroke-width:2px}
[data-browser-comment-annotation-selection-modifier-active] .marker{cursor:none}
.annotation-selection-target-hover{border-color:color-mix(in srgb,${Kg} 80%,black)}
.annotation-selection-remove-hover{background:color-mix(in srgb,${Kg} 20%,transparent)}
.region-box{border-width:2px;border-style:dashed}
.posted-region-highlight{position:fixed;box-sizing:border-box;border-radius:0;background:color-mix(in srgb,${Kg} 3%,transparent);pointer-events:none}
.google-docs-annotation-box{background:transparent;box-shadow:none}
.google-docs-element-box{border-color:transparent}
.markers-layer{position:fixed;inset:0;z-index:1;pointer-events:none}
.marker{position:fixed;border:0;background:transparent;transform:${Xg};transform-origin:${Jg}% ${Yg}%;pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.marker-icon{position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none}
.saved-marker{width:var(--browser-sidebar-saved-marker-size);height:var(--browser-sidebar-saved-marker-size)}
.draft-marker{width:var(--browser-sidebar-draft-marker-size);height:var(--browser-sidebar-draft-marker-size)}
.marker-label{position:relative;color:${qg.stroke};font-size:var(--browser-sidebar-marker-label-font-size);font-weight:700;line-height:1;pointer-events:none;transform:translate(var(--browser-sidebar-marker-label-offset),var(--browser-sidebar-marker-label-offset))}
.marker[data-selected="true"]{transform:${Xg} scale(1.08)}
${Js}
`));
  }),
  e_ = s((e) => {
    var t = Symbol.for(`react.transitional.element`),
      n = Symbol.for(`react.fragment`);
    function r(e, n, r) {
      var i = null;
      if ((r !== void 0 && (i = `` + r), n.key !== void 0 && (i = `` + n.key), `key` in n))
        for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
      else r = n;
      return (
        (n = r.ref), { $$typeof: t, type: e, key: i, ref: n === void 0 ? null : n, props: r }
      );
    }
    ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
  }),
  t_ = s((e, t) => {
    t.exports = e_();
  });
function n_({ className: e, fillColor: t = qg.fill, ...n }) {
  return (0, c_.jsx)(`svg`, {
    ...n,
    "aria-hidden": `true`,
    className: e,
    height: qg.height,
    viewBox: `0 0 ${qg.width} ${qg.height}`,
    width: qg.width,
    children: (0, c_.jsx)(`path`, {
      d: qg.path,
      fill: t,
      stroke: qg.stroke,
      strokeWidth: qg.strokeWidth,
    }),
  });
}
function r_({ className: e, mode: t, ...n }) {
  return t === `comment`
    ? (0, c_.jsx)(n_, {
        ...n,
        className: e,
        "data-browser-comment-annotation-selection-cursor-mode": `comment`,
      })
    : (0, c_.jsx)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: Hg(e, `annotation-selection-modifier-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: qg.height,
        viewBox: `0 0 20 20`,
        width: qg.width,
        children: (0, c_.jsx)(`path`, {
          d: `M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z`,
          fill: `currentColor`,
        }),
      });
}
function i_({
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
  return (0, c_.jsxs)(c_.Fragment, {
    children: [
      e.map((e) =>
        (0, c_.jsx)(
          `div`,
          {
            className: `${e.className}${o === e.selectionIndex ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover":
              o === e.selectionIndex ? e.selectionIndex : void 0,
            style: sg(e.rect, l, e.borderRadius),
          },
          e.key,
        ),
      ),
      r == null
        ? null
        : (0, c_.jsx)(`div`, {
            className: `${n}${o === 0 ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover": o === 0 ? 0 : void 0,
            style: sg(r, l, t),
          }),
      i == null
        ? null
        : (0, c_.jsx)(`div`, {
            className: `${eg(null, i.rect, c, s)}${a ? ` annotation-selection-target-hover annotation-selection-remove-hover` : ``}`,
            "data-browser-comment-annotation-selection-hover": !0,
            "data-browser-comment-annotation-selection-remove-hover": a || void 0,
            style: sg(i.rect, l, i.borderRadius),
          }),
    ],
  });
}
function a_({
  commentNumber: e,
  isSelected: t,
  markerPoint: n,
  onClick: r,
  onMouseEnter: i,
  onMouseLeave: a,
}) {
  return (0, c_.jsxs)(`button`, {
    type: `button`,
    "aria-label": cf().formatMessage(
      {
        id: `browserSidebarCommentRuntime.commentMarkerLabel`,
        defaultMessage: `Browser comment {commentNumber}`,
        description: `Accessible label for a placed browser comment marker`,
      },
      { commentNumber: e },
    ),
    "data-browser-comment-marker": !0,
    className: `marker saved-marker`,
    "data-selected": String(t),
    style: { left: n.x, top: n.y },
    onMouseEnter: i,
    onMouseLeave: a,
    onClick: r,
    children: [
      (0, c_.jsx)(n_, { className: `marker-icon`, fillColor: Kg }),
      (0, c_.jsx)(`span`, { className: `marker-label`, children: e }),
    ],
  });
}
function o_({ commentNumber: e, markerPoint: t, onFocusEditor: n }) {
  return (0, c_.jsxs)(`button`, {
    type: `button`,
    "aria-label": cf().formatMessage({
      id: `browserSidebarCommentRuntime.draftCommentMarkerLabel`,
      defaultMessage: `Focus unsaved browser comment`,
      description: `Accessible label for the temporary marker shown while creating a browser comment`,
    }),
    "data-browser-comment-draft-marker": !0,
    "data-browser-comment-marker": !0,
    className: `marker draft-marker`,
    "data-selected": `false`,
    style: { left: t.x, top: t.y },
    onClick: (e) => {
      (e.preventDefault(), e.stopPropagation(), n());
    },
    children: [
      (0, c_.jsx)(n_, { className: `marker-icon`, fillColor: Kg }),
      e == null ? null : (0, c_.jsx)(`span`, { className: `marker-label`, children: e }),
    ],
  });
}
function s_({ snapshot: e, viewportScale: t, zoomFactor: n }) {
  return (0, c_.jsxs)(`div`, {
    className: `element-metadata-tooltip`,
    style: Wg(e.rect, { viewportScale: t, zoomFactor: n }),
    children: [
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-tag`,
        children: e.tagName,
      }),
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.size,
      }),
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, c_.jsx)(vf, {
          id: `browserSidebarCommentRuntime.elementMetadata.color`,
          defaultMessage: `color`,
          description: `Label for the computed text color row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.color,
      }),
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, c_.jsx)(vf, {
          id: `browserSidebarCommentRuntime.elementMetadata.font`,
          defaultMessage: `font`,
          description: `Label for the computed font row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, c_.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.font,
      }),
    ],
  });
}
var c_,
  l_ = o(() => {
    (Ug(), wf(), Tg(), $g(), (c_ = t_()));
  });
function u_(
  e,
  {
    canUseSiteAnnotationApi: t,
    canUseTweaks: n,
    hasActiveEditor: r,
    isAgentControllingBrowser: i,
    openEditor: a,
  },
) {
  if (
    globalThis.isSecureContext !== !0 ||
    !t ||
    navigator.userActivation?.isActive !== !0 ||
    i ||
    r
  )
    return;
  let o = d_(e);
  if (o == null) return;
  let { enterAnnotationMode: s, initialComment: c, mode: l } = o;
  if (l === `advanced` && !n) return;
  let u = e.composedPath()[0] ?? e.target;
  if (
    !(u instanceof HTMLElement) ||
    u.ownerDocument !== document ||
    !u.isConnected ||
    Hh(u) ||
    Ph(u) == null
  )
    return;
  let d = ih(u);
  if (
    d == null ||
    !Number.isFinite(d.x) ||
    !Number.isFinite(d.y) ||
    !Number.isFinite(d.width) ||
    !Number.isFinite(d.height) ||
    d.width <= 0 ||
    d.height <= 0 ||
    d.x >= window.innerWidth ||
    d.x + d.width <= 0 ||
    d.y >= window.innerHeight ||
    d.y + d.height <= 0
  )
    return;
  let f = { initialComment: c, siteInitiated: !0 };
  (s && (f.enterAnnotationMode = !0),
    l === `advanced` && (f.openTweaks = !0),
    a(
      u,
      { x: d.x + d.width / 2, y: d.y + d.height / 2 },
      f,
      o.metadata != null && u.getRootNode() === document ? o.metadata : void 0,
    ) && e.preventDefault());
}
function d_(e) {
  try {
    let t = `detail` in e ? (e.detail ?? {}) : {};
    if (typeof t != `object`) return;
    let n = Object.getPrototypeOf(t);
    if (n !== Object.prototype && n != null) return;
    let r = f_.safeParse(
      Object.fromEntries(
        [`mode`, `enterAnnotationMode`, `initialComment`, `metadata`].map((e) => {
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
var f_,
  p_ = o(() => {
    (Qs(),
      Yo(),
      qh(),
      Rh(),
      bh(),
      (f_ = ja({
        enterAnnotationMode: Ea().catch(!1),
        initialComment: zs.optional().catch(void 0),
        metadata: Oa().transform((e) => {
          let t = Zo(e);
          return t == null || Object.keys(t).length === 0 ? void 0 : t;
        }),
        mode: La([`default`, `advanced`]).catch(`default`),
      })));
  });
function m_(e, t) {
  if (e == null) return !1;
  if (g_(e, t)) return !0;
  let n = xp(e),
    r = __(e, t, n);
  return r == null
    ? n === window
      ? !1
      : (n.scrollBy(t.x, t.y), !0)
    : ((r.scrollLeft += t.x), (r.scrollTop += t.y), !0);
}
function h_(e, t) {
  return e.deltaMode === b_
    ? { x: e.deltaX * S_, y: e.deltaY * S_ }
    : e.deltaMode === x_
      ? { x: e.deltaX * t.innerWidth, y: e.deltaY * t.innerHeight }
      : { x: e.deltaX, y: e.deltaY };
}
function g_(e, t) {
  let n = e.closest(`#waffle-grid-container`);
  if (!U(n)) return !1;
  let r = n.querySelector(`.native-scrollbar-x`),
    i = n.querySelector(`.native-scrollbar-y`),
    a = !1;
  return (
    U(r) && t.x !== 0 && ((r.scrollLeft += t.x), (a = !0)),
    U(i) && t.y !== 0 && ((i.scrollTop += t.y), (a = !0)),
    a
  );
}
function __(e, t, n) {
  let r = e;
  for (; r != null;) {
    if (v_(r, t, n)) return r;
    if (r === n.document.body || r === n.document.documentElement) return null;
    r = r.parentElement;
  }
  return null;
}
function v_(e, t, n) {
  let r = n.getComputedStyle(e);
  return (
    (Vf(r.overflowY) && y_(t.y, e.scrollTop, e.clientHeight, e.scrollHeight)) ||
    (Vf(r.overflowX) && y_(t.x, e.scrollLeft, e.clientWidth, e.scrollWidth))
  );
}
function y_(e, t, n, r) {
  return e < 0 ? t > 0 : e > 0 && t < r - n;
}
var b_,
  x_,
  S_,
  C_ = o(() => {
    (Ip(), (b_ = 1), (x_ = 2), (S_ = 16));
  });
function w_(e, t, n, r, i) {
  let a = i ?? Qm(e),
    o = r?.id ?? globalThis.crypto?.randomUUID?.() ?? `design-${Date.now()}`,
    s = fs(e),
    c = r?.annotationControls ?? n,
    l = us(a?.styles ?? [], r?.declarations ?? []),
    u =
      r == null
        ? c?.controls.map((e) => ({
            callback: e.callback,
            previousValue: e.currentValue,
            value: cc(e),
          }))
        : r.annotationControlChanges,
    d =
      s == null
        ? r?.text
        : r?.text == null
          ? s
          : { previousValue: s.previousValue, value: r.text.value };
  return {
    id: o,
    anchor: t.anchor,
    annotationControls: c,
    annotationControlChanges: u,
    declarations: l,
    draftAttribute: r?.draftAttribute ?? o,
    markerViewportPoint: t.viewportPoint,
    provenance: ps(a?.styles ?? []),
    selector: t.anchor.selector,
    targetLabel: E_(e),
    text: d,
    ...(r?.themeVariant == null
      ? t.themeVariant == null
        ? {}
        : { themeVariant: t.themeVariant }
      : { themeVariant: r.themeVariant }),
    viewportSize: t.viewportSize,
  };
}
function T_(e) {
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
    text: e.text,
    themeVariant: e.themeVariant,
    viewportSize: e.viewportSize,
  };
}
function E_(e) {
  let t = e.tagName.toLowerCase(),
    n = ah(e);
  return n == null ? t : `${t}: ${n}`;
}
var D_ = o(() => {
  (yc(), Qs(), bh());
});
function O_(e, t) {
  let n = e.head?.querySelectorAll(`meta[name="${t.name}"]`);
  if (n != null)
    for (let e of n) {
      let n = e.getAttribute(`content`),
        r = t.values.find((e) => e === n);
      if (r != null) return r;
    }
}
var k_ = o(() => {}),
  A_ = c({
    buildRegionAnchor: () => Xh,
    getBrowserCommentElementSnapshot: () => Qm,
    getMarkerPoint: () => tg,
    mountBrowserCommentRuntime: () => j_,
  });
function j_(e) {
  let t = V_(),
    n = tp(t, Wh, Kh),
    r = t.shadowRoot ?? t.attachShadow({ mode: `open` });
  r.replaceChildren();
  let i = document.createElement(`div`);
  r.appendChild(i);
  let a = {
      ...e,
      sendMessageToHost(t) {
        let n = lg().visualViewport;
        if (n == null || !(`anchorState` in t) || t.anchorState == null) {
          e.sendMessageToHost(t);
          return;
        }
        e.sendMessageToHost({ ...t, anchorState: { ...t.anchorState, visualViewport: n } });
      },
    },
    o = (0, Tv.createRoot)(i);
  return (
    o.render((0, Ev.jsx)(M_, { rootHost: t, bridge: a })),
    {
      dispose() {
        (n(), o.unmount(), ep(), t.remove());
      },
    }
  );
}
function M_({ rootHost: e, bridge: t }) {
  let [n, r] = (0, W.useState)(t.initialState),
    [i] = (0, W.useState)(xh),
    [a, o] = (0, W.useState)(null),
    [s, c] = (0, W.useState)(null),
    [l, u] = (0, W.useState)(null),
    [d, f] = (0, W.useState)(null),
    [p, m] = (0, W.useState)(!1),
    [h, g] = (0, W.useState)(t.initialState.isDesignModifierPressed === !0),
    [_, v] = (0, W.useState)(null),
    [y, b] = (0, W.useState)(null),
    [x, ee] = (0, W.useState)(null),
    [te, S] = (0, W.useState)(null),
    [C, ne] = (0, W.useState)(null),
    [re, ie] = (0, W.useState)(null),
    [w, ae] = (0, W.useState)(lg),
    oe = (0, W.useRef)(null),
    se = (0, W.useRef)(null),
    T = (0, W.useRef)(null),
    E = (0, W.useRef)(null),
    [D, ce] = (0, W.useState)(() => cm([])),
    le = (0, W.useRef)(null),
    ue = (0, W.useRef)(0),
    de = (0, W.useRef)(null),
    O = (0, W.useRef)(null),
    fe = (0, W.useRef)(!1),
    pe = (0, W.useRef)(!1),
    me = (0, W.useRef)(!1),
    he = (0, W.useRef)(!1),
    ge = (0, W.useRef)(!1),
    _e = (0, W.useRef)(null),
    { comments: ve, interactionMode: k } = n,
    ye = n.canUseAnnotationMultiSelect === !0,
    A = n.canUseSiteAnnotationApi === !0,
    j = ec(n.zoomPercent),
    be = xs(n.viewportScale),
    xe = ch(),
    Se = Oh(xe),
    Ce = n.canUseTweaks !== !1,
    we = new Map(ve.map((e, t) => [e.id, t + 1])),
    Te = ve.filter(Y_),
    Ee = Z_(e),
    De = Te.flatMap((e) => {
      let t = D.get(e.id),
        n = Rg(e, Ee, e.id === te, t?.sourceAnchor === e.anchor ? t.value : null);
      return n == null ? [] : [n];
    }),
    Oe = n.activeDesignChange,
    ke = ve.flatMap((e) => (e.designChange == null ? [] : [e.designChange])),
    Ae = Ce ? (Oe == null ? ke : [...ke.filter((e) => e.id !== Oe.id), Oe]) : Bv,
    je = n.isOriginalViewEnabled === !0 ? Bv : Ae,
    Me = ss(ve),
    Ne = Ce && Me && n.annotationEditorMode === `design`,
    Pe = je.flatMap((e) => {
      let t = q_(e, Ee);
      return t == null ? [] : [t];
    }),
    Fe = De.some((e) => [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => !e.isFixed)),
    Ie = Te.some((e) =>
      [e.anchor, ...(e.additionalAnchors ?? [])].some(
        (e) => e.kind === `element` && e.selector != null,
      ),
    ),
    Le = (0, W.useCallback)(
      (n, r, a, s) => {
        let l = { ...r, anchor: nh(n, r.anchor, A, s) };
        _ != null &&
          (t.sendMessageToHost({
            type: `browser-sidebar-runtime-close-comment-preview`,
            commentId: _,
          }),
          v(null));
        let u = w_(n, l, A ? t.getAnnotationControls?.(n) : void 0);
        return (
          A && i.rememberTarget(u.id, n),
          Z_(e).set(u.id, n),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: l,
            annotationEditorDefault: O_(document, Dv),
            designEditorState: u,
            ...a,
          }),
          (pe.current = !1),
          m(!1),
          f(null),
          ae(lg()),
          ee({
            target: { mode: `create` },
            anchor: {
              type: `element`,
              additionalSelections: [],
              element: n,
              themeVariant: l.themeVariant,
              value: l.anchor,
              viewportSize: l.viewportSize,
            },
          }),
          o(null),
          c(null),
          pm(),
          !0
        );
      },
      [i, t, A, _, e],
    ),
    Re = (0, W.useCallback)(
      (e) =>
        e.anchor.kind === `text`
          ? (_ != null &&
              (t.sendMessageToHost({
                type: `browser-sidebar-runtime-close-comment-preview`,
                commentId: _,
              }),
              v(null)),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-open-editor`,
              target: { mode: `create` },
              anchorState: e,
              wantsScreenshot: !0,
            }),
            ae(lg()),
            ee({
              target: { mode: `create` },
              anchor: {
                type: `text`,
                ...(e.themeVariant == null ? {} : { themeVariant: e.themeVariant }),
                value: e.anchor,
              },
            }),
            o(null),
            c(null),
            pm(),
            !0)
          : !1,
      [t, _],
    ),
    ze = (0, W.useCallback)(
      (n, r, a = 0) => {
        let o = r ?? n.anchor,
          s = Z_(e),
          c = ve.find((e) => e.id === n.id) ?? n,
          l = zg(c, o, a),
          u = a === 0,
          d = rh(o, u ? c.id : void 0, s) ?? null;
        (d != null && (u && s.set(c.id, d), l.designChange != null && ov(d, l.designChange.id)),
          _ != null &&
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-close-comment-preview`,
              commentId: _,
            }));
        let f = L_(l, d, j),
          p =
            l.designChange != null && d == null
              ? T_(l.designChange)
              : d == null || f.anchor.kind !== `element`
                ? void 0
                : w_(d, f, A ? t.getAnnotationControls?.(d) : void 0, l.designChange);
        (p != null &&
          d != null &&
          (A &&
            (l.designChange == null ||
              (l.designChange.anchor.kind === `element` &&
                f.anchor.kind === `element` &&
                l.designChange.anchor.runtimeElementId != null &&
                l.designChange.anchor.runtimeElementId === f.anchor.runtimeElementId)) &&
            i.rememberTarget(p.id, d),
          s.set(p.id, d)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `edit`, commentId: c.id },
            anchorState: f,
            designEditorState: p,
          }),
          ae(lg()),
          ee({
            target: { mode: `edit`, commentId: c.id },
            anchor: Eg({ ...l, anchor: f.anchor }, d, s),
          }),
          v(null));
      },
      [i, t, A, ve, _, e, j],
    ),
    Be = (0, W.useCallback)(
      (n, r, i) => {
        let a = Z_(e),
          o = ve.find((e) => e.id === n.id) ?? n,
          s = i === 0,
          c = rh(r, s ? o.id : void 0, a) ?? null;
        (c != null && s && a.set(o.id, c), v(o.id), ae(lg()));
        let l = L_(zg(o, r, i), c, j);
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-open-comment-preview`,
          commentId: o.id,
          anchorState: l,
        });
      },
      [t, ve, e, j],
    ),
    Ve = (0, W.useCallback)(
      (r, a) => {
        let s = Qm(r);
        if (s == null) return !1;
        let c = {
            ...a,
            anchor: nh(r, a.anchor, A),
            cardViewportRect: pv(e, s.rect, { viewportScale: n.viewportScale, zoomFactor: j }),
          },
          l = w_(r, c, A ? t.getAnnotationControls?.(r) : void 0, void 0, s);
        return (
          A && i.rememberTarget(l.id, r),
          Z_(e).set(l.id, r),
          ov(r, l.id),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-design-editor`,
            anchorState: c,
            designEditorState: l,
          }),
          ae(lg()),
          ee({
            target: { mode: `design`, groupId: l.id },
            anchor: {
              type: `element`,
              additionalSelections: [],
              cardViewportRect: c.cardViewportRect,
              element: r,
              themeVariant: c.themeVariant,
              value: c.anchor,
              viewportSize: c.viewportSize,
            },
          }),
          o(s),
          g(!1),
          !0
        );
      },
      [i, t, A, e, n.viewportScale, j],
    ),
    He = (0, W.useEffectEvent)((e) => {
      u_(e, {
        canUseSiteAnnotationApi: A,
        canUseTweaks: Ce,
        hasActiveEditor: x != null,
        isAgentControllingBrowser: n.isAgentControllingBrowser,
        openEditor: (e, t, n, r) => Le(e, I_(e, t.x, t.y), n, r),
      });
    });
  (0, W.useEffect)(() => {
    let e = (e) => {
      He(e);
    };
    return (
      document.addEventListener(`codex:open-annotation`, e),
      () => {
        document.removeEventListener(`codex:open-annotation`, e);
      }
    );
  }, []);
  let Ue = (0, W.useCallback)(
      (e) => {
        (v((t) => (t === e ? null : t)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-close-comment-preview`,
            commentId: e,
          }));
      },
      [t],
    ),
    We = (0, W.useCallback)(
      (n) => {
        if (x != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let r = T.current;
        if (((T.current = null), r != null && Date.now() - r.capturedAt <= Fv))
          return Le(r.element, r.anchorState);
        let i = zh(n.x, n.y, A, e);
        if (i == null) return !1;
        let a = I_(i, n.x, n.y);
        return Le(i, a);
      },
      [x, t, A, Le, e],
    ),
    Ge = (0, W.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            We(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [We],
    ),
    Ke = (0, W.useCallback)(
      (e) => {
        if (x != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        T.current = null;
        let n = E.current;
        E.current = null;
        let r = (n?.anchor.kind === `text` ? n : null) ?? am();
        return r == null
          ? (pm(), e.fallbackViewportPoint != null && We(e.fallbackViewportPoint))
          : Re(r);
      },
      [x, t, Re, We],
    ),
    qe = (0, W.useCallback)((e) => {
      E.current = am(e);
    }, []),
    Je = (0, W.useCallback)(
      (n, r = `design`) => {
        if (x != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let i = T.current;
        if (
          ((T.current = null),
          i != null && Date.now() - i.capturedAt <= Fv && i.designElement != null)
        ) {
          let e = i.designElement;
          return Ve(e, e === i.element ? i.anchorState : I_(e, n.x, n.y));
        }
        let a = zh(n.x, n.y, A, e, r);
        if (a == null) return !1;
        let o = I_(a, n.x, n.y);
        return Ve(a, o);
      },
      [x, t, A, Ve, e],
    ),
    Ye = (0, W.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            Je(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [Je],
    ),
    Xe = (0, W.useCallback)(() => {
      (O.current != null && window.cancelAnimationFrame(O.current),
        (O.current = window.requestAnimationFrame(() => {
          ((O.current = null), ae(lg()));
        })));
    }, []),
    Ze = (0, W.useCallback)(
      (e, r, i) => {
        if (e.target.mode !== `create` || e.anchor.type === `text`) return;
        if (r == null) {
          (t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (pe.current = !1),
            m(!1),
            f(null),
            ep(),
            o(null),
            c(null),
            u(null));
          return;
        }
        if (!ye && r.additional.length > 0) return;
        let a = { ...e, anchor: Mg(e.anchor, r, i) };
        (t.sendMessageToHost({
          type: `browser-sidebar-runtime-update-anchor`,
          target: a.target,
          anchorState: z_(a, j, n.viewportScale),
        }),
          ae(lg()),
          u(null),
          ee(a));
      },
      [t, ye, n.viewportScale, j],
    ),
    Qe = (0, W.useEffectEvent)((e) => {
      if (!ye || x?.target.mode !== `create` || x.anchor.type === `text`) return;
      let t = jg(x.anchor),
        n = [t.primary, ...t.additional][e];
      n != null && Ze(x, Mh(t, n, !0));
    }),
    $e = (0, W.useEffectEvent)((e) => {
      (t.sendMessageToHost({ type: `browser-sidebar-runtime-close-comment-preview`, commentId: e }),
        v(null));
    }),
    et = (0, W.useEffectEvent)((e) => {
      ee((t) => {
        if (t == null) return t;
        let n = t.target;
        return n.mode === `design` || !(`commentId` in n) || e.some((e) => e.id === n.commentId)
          ? t
          : null;
      });
    }),
    tt = (0, W.useEffectEvent)((e) => {
      (e != null &&
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-close-comment-preview`,
          commentId: e,
        }),
        (pe.current = !1),
        m(!1),
        f(null),
        ep(),
        (E.current = null),
        o(null),
        c(null),
        u(null),
        v(null),
        (ge.current = !1),
        b(null),
        ee(null),
        (ue.current += 1),
        (me.current = !1),
        (he.current = !1),
        (le.current = null),
        ie(null));
    }),
    nt = (0, W.useEffectEvent)((e) => {
      (ze(e), b(null));
    }),
    rt = (0, W.useEffectEvent)((t) => {
      if (t.interactionMode === `comment` && k !== `comment` && x == null) {
        let n = oe.current,
          r =
            t.canUseTweaks !== !1 &&
            (t.isDesignModifierPressed === !0 ||
              (ss(t.comments) && t.annotationEditorMode === `design`)),
          i = n == null ? null : zh(n.x, n.y, t.canUseSiteAnnotationApi === !0, e);
        (f(n), o(W_(i, r)));
      }
    }),
    it = (0, W.useEffectEvent)((t) => {
      ee(Og(t, Z_(e)));
    }),
    at = (0, W.useEffectEvent)((t) => {
      let n = ye && t;
      if (((pe.current = n), m(n), !n)) {
        (f(null), o(null), c(null), ep());
        return;
      }
      if (x?.target.mode !== `create` || x.anchor.type === `text`) return;
      let r = oe.current;
      if (r == null || ge.current) return;
      K_(r, e);
      let i = U_(r, e, A);
      if (i == null) {
        (f(null), o(null), c(null), ep());
        return;
      }
      (Qf(i.ownerDocument, Wh),
        f(r),
        c({ anchor: I_(i, r.x, r.y).anchor, liveElement: i }),
        o(W_(i)));
    });
  ((0, W.useEffect)(() => {
    let e = t.subscribeToHostMessages((e) => {
      switch (e.type) {
        case `browser-sidebar-runtime-sync`:
          (i.sync(e),
            rt(e),
            e.interactionMode !== `comment` &&
              ((pe.current = !1),
              m(!1),
              f(null),
              o(null),
              c(null),
              u(null),
              ep(),
              (me.current = !1),
              (he.current = !1)),
            e.canUseAnnotationMultiSelect !== !0 && u(null),
            r(
              (t) => (
                t.zoomPercent !== e.zoomPercent && Xe(),
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
                  isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
                  viewportScale: e.viewportScale ?? 1,
                  zoomPercent: e.zoomPercent,
                }
              ),
            ),
            ae(lg()),
            g(e.interactionMode === `comment` && e.isDesignModifierPressed === !0),
            (e.interactionMode !== `comment` ||
              e.canUseTweaks === !1 ||
              e.isTweaksEditorOpen !== !0) &&
              ne(null),
            S((t) => (t != null && !e.comments.some((e) => e.id === t) ? null : t)));
          return;
        case `browser-sidebar-runtime-prepare-comment-screenshot`:
          S(e.commentId);
          return;
        case `browser-sidebar-runtime-clear-comment-screenshot`:
          S(null);
          return;
        case `browser-sidebar-runtime-capture-text-selection`:
          qe();
          return;
        case `browser-sidebar-runtime-select-comment`:
          b(e.commentId);
          return;
        case `browser-sidebar-runtime-close-editor`:
          (ep(),
            (0, wv.flushSync)(() => {
              ((pe.current = !1),
                m(!1),
                f(null),
                (ue.current += 1),
                (me.current = !1),
                (he.current = !1),
                ne(null),
                S(null),
                o(null),
                c(null),
                u(null),
                (le.current = null),
                ie(null),
                ee((t) => (t == null || e.target == null || ms(t.target, e.target) ? null : t)));
            }));
          return;
        case `browser-sidebar-runtime-design-scrub-changed`:
          ne(e.property);
          return;
        case `browser-sidebar-runtime-create-comment-at-point`:
          (u(null), We(e.viewportPoint) || Ge(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-create-comment-from-selection`:
          (u(null), Ke(e));
          return;
        case `browser-sidebar-runtime-open-design-editor-at-point`:
          if ((u(null), !Ce)) return;
          Je(e.viewportPoint) || Ye(e.viewportPoint);
          return;
        case `browser-sidebar-runtime-annotation-selection-modifier-state`:
          at(e.pressed);
          return;
        case `browser-sidebar-runtime-annotation-selection-hover-state`:
          u(ye ? e.selectionIndex : null);
          return;
        case `browser-sidebar-runtime-remove-annotation-selection`:
          if (!ye) return;
          Qe(e.selectionIndex);
          return;
        case `browser-sidebar-runtime-restore-editor`:
          ((pe.current = !1),
            m(!1),
            (oe.current = null),
            f(null),
            ep(),
            o(null),
            c(null),
            u(null),
            it(e));
          return;
      }
    });
    return () => {
      (O.current != null && (window.cancelAnimationFrame(O.current), (O.current = null)), e());
    };
  }, [i, t, ye, Ce, qe, Je, Xe, Ge, Ye, e, We, Ke]),
    (0, W.useEffect)(() => {
      let t = Z_(e);
      (t.forEach((e, n) => {
        ((!ve.some((e) => e.id === n) &&
          n !== Oe?.id &&
          (x?.anchor.type !== `element` || x.anchor.element !== e)) ||
          !e.isConnected) &&
          t.delete(n);
      }),
        _ != null && !Te.some((e) => e.id === _) && $e(_),
        et(Te));
    }, [Oe, x, ve, _, e, Te]),
    (0, W.useEffect)(() => {
      k === `browse` && tt(_);
    }, [_, k]),
    (0, W.useLayoutEffect)(() => {
      if (!(k !== `comment` || x != null))
        return Zf(
          (e) => (
            Qf(e, Wh),
            () => {
              $f(e);
            }
          ),
        );
    }, [x, k]),
    (0, W.useEffect)(() => {
      if (y == null) return;
      let e = Te.find((e) => e.id === y) ?? null;
      e != null && nt(e);
    }, [y, Te]),
    (0, W.useEffect)(() => {
      let n = () => {
          ((oe.current = null), f(null), o(null), c(null));
        },
        r = (e) => {
          let n = ye && e;
          (at(n),
            !(x?.target.mode !== `create` || x.anchor.type === `text`) &&
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: n,
              }));
        },
        i = (t, i) => {
          g(i.altKey);
          let a = x?.target.mode === `create` && x.anchor.type !== `text` && _v(i),
            s = a && (i.shiftKey || pe.current);
          if (!i.isTrusted || (gv(i, e) && !a)) {
            n();
            return;
          }
          let l = Cp(t, { x: i.clientX, y: i.clientY });
          if (((oe.current = l), k !== `comment`)) return;
          let u = se.current;
          if (((se.current = l), a && !s)) {
            (f(null), o(null), c(null), ep());
            return;
          }
          yv(i, { preventDefault: !1 });
          let d = u == null || u.x !== l.x || u.y !== l.y;
          ye && i.shiftKey && !pe.current && d && r(!0);
          let p = ye && x?.target.mode === `create` && x.anchor.type !== `text` && pe.current;
          if (x != null && !p) {
            (f(null), o(null), c(null), ep());
            return;
          }
          if (le.current != null) {
            (f(l), o(null), c(null));
            return;
          }
          if ((Qf(t.document, Wh), K_(l, e), f(l), ge.current)) {
            (o(null), c(null));
            return;
          }
          let m = Ce && (Ne || i.altKey),
            h = m ? zh(l.x, l.y, A, e) : H_(l, e, i, A);
          if (!h) {
            n();
            return;
          }
          (c({ anchor: I_(h, l.x, l.y).anchor, liveElement: h }), o(W_(h, m)));
        },
        a = (t, r, i) => {
          i.isTrusted && k === `comment` && x == null && !gv(i, e) && yv(i, { preventDefault: !1 });
          let a = i.relatedTarget;
          if (a instanceof Node && t.documentElement?.contains(a)) return;
          let o = Cp(r, { x: i.clientX, y: i.clientY });
          (a != null && bv(o)) || n();
        },
        s = () => {
          (g(!1), n(), r(!1));
        },
        l = ({ currentDragSelection: e, suppressFollowUpClick: r }) => {
          if (!e.isDraggingRegion || e.rect == null) return !1;
          ue.current += 1;
          let i = ue.current;
          ((me.current = r), (he.current = r));
          let a = Xh(e.rect, e.current, { framePath: e.framePath, frameUrl: e.frameUrl });
          if (
            ((le.current = null),
            ie(e),
            ye && x?.target.mode === `create` && x.anchor.type !== `text`)
          )
            return (
              Ze(x, Mh(jg(x.anchor), { anchor: a, liveElement: null }, !0)), ie(null), n(), !0
            );
          let o = R_(a, j);
          return (
            window.requestAnimationFrame(() => {
              ue.current === i &&
                (t.sendMessageToHost({
                  type: `browser-sidebar-runtime-open-editor`,
                  target: { mode: `create` },
                  anchorState: o,
                  wantsScreenshot: !0,
                }),
                pe.current &&
                  t.sendMessageToHost({
                    type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                    pressed: !0,
                  }),
                ae(lg()),
                ee({
                  target: { mode: `create` },
                  anchor: {
                    type: `region`,
                    additionalSelections: [],
                    themeVariant: o.themeVariant,
                    value: a,
                    viewportSize: o.viewportSize,
                  },
                }),
                ie(null),
                n());
            }),
            !0
          );
        },
        u = (t, n) => {
          ((T.current = null), (E.current = null));
          let i =
            ye &&
            x?.target.mode === `create` &&
            x.anchor.type !== `text` &&
            (n.shiftKey || pe.current);
          if (
            !n.isTrusted ||
            !n.isPrimary ||
            n.button !== 0 ||
            gv(n, e) ||
            k !== `comment` ||
            ((me.current = !1), (he.current = !1), x != null && !i)
          )
            return;
          if (
            (ye &&
              n.shiftKey &&
              !pe.current &&
              (x?.target.mode === `create` && x.anchor.type !== `text`
                ? r(!0)
                : ((pe.current = !0), m(!0))),
            Ce && (Ne || n.altKey))
          ) {
            yv(n);
            return;
          }
          let a = Cp(t, { x: n.clientX, y: n.clientY });
          if (
            le.current != null &&
            l({ currentDragSelection: Cv(le.current, a), suppressFollowUpClick: !0 })
          ) {
            yv(n);
            return;
          }
          ((ue.current += 1), pm(), yv(n));
          let o = Bf(t) ?? [],
            s = {
              pointerId: n.pointerId,
              start: a,
              current: a,
              rect: null,
              isDraggingRegion: !1,
              framePath: o,
              frameUrl: lh(t, o),
            };
          ((le.current = s), ie(s));
        },
        d = (t, n) => {
          if (!n.isTrusted || gv(n, e)) {
            ((T.current = null), (E.current = null));
            return;
          }
          let r = Cp(t, { x: n.clientX, y: n.clientY }),
            i = Bh(n, A) ?? zh(r.x, r.y, A, e);
          if (i == null) {
            ((T.current = null), (E.current = null));
            return;
          }
          (k === `comment` && yv(n),
            (T.current = {
              anchorState: I_(i, r.x, r.y),
              capturedAt: Date.now(),
              designElement: Bh(n, !1, `design`),
              element: i,
            }),
            qe(t));
        },
        p = (e, t) => {
          if (!t.isTrusted) return;
          let n = le.current;
          if (n == null || t.pointerId !== n.pointerId) return;
          yv(t);
          let r = Cp(e, { x: t.clientX, y: t.clientY }),
            i = Cv(n, r);
          ((le.current = i), ie(i), (oe.current = r), f(r), o(null), c(null));
        },
        h = (e, n) => {
          let r = le.current;
          if (r == null || n.pointerId !== r.pointerId) return;
          let i = Cv(r, Cp(e, { x: n.clientX, y: n.clientY }));
          if (
            ((le.current = null),
            ie(null),
            n.isTrusted &&
              (yv(n), !l({ currentDragSelection: i, suppressFollowUpClick: !0 }) && x == null))
          ) {
            if (((me.current = !0), (he.current = !1), Ce && (Ne || n.altKey))) {
              Je(i.current, `annotation`);
              return;
            }
            We(i.current) &&
              ye &&
              n.shiftKey &&
              ((pe.current = !0),
              m(!0),
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: !0,
              }));
          }
        },
        _ = (e) => {
          e.pointerId === le.current?.pointerId && ((le.current = null), ie(null), n());
        },
        v = (e) => {
          (t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (pe.current = !1),
            m(!1),
            f(null),
            ep(),
            o(null),
            c(null));
        },
        y = (e) => {
          if (!(e.key !== `Escape` || !e.isTrusted)) {
            if (le.current != null) {
              (yv(e), (me.current = !0), (he.current = !1), (le.current = null), ie(null), n());
              return;
            }
            if (x?.target.mode === `create` && x.anchor.type !== `text`) {
              (yv(e), v(x));
              return;
            }
            x == null &&
              k === `comment` &&
              (yv(e), t.sendMessageToHost({ type: `browser-sidebar-runtime-exit-comment-mode` }));
          }
        },
        b = (t) => {
          let n = x?.target.mode === `create`;
          !t.isTrusted || k !== `comment` || (x != null && !n) || gv(t, e) || yv(t);
        },
        te = (n, i) => {
          if (me.current && ((me.current = !1), (he.current = !1), k === `comment`)) {
            yv(i);
            return;
          }
          let a = ye && (i.shiftKey || pe.current),
            s = x?.target.mode === `create` && x.anchor.type !== `text` && a && _v(i);
          if (!i.isTrusted || (gv(i, e) && !s) || k !== `comment`) return;
          if (x != null) {
            if ((yv(i), x.target.mode === `create` && !a)) {
              v(x);
              return;
            }
            if (x.target.mode === `create` && x.anchor.type !== `text`) {
              r(a);
              let t = Cp(n, { x: i.clientX, y: i.clientY }),
                s = H_(t, e, i, A);
              if (s == null) return;
              let l = I_(s, t.x, t.y),
                u = Mh(jg(x.anchor), { anchor: nh(s, l.anchor, A), liveElement: s }, a);
              (Ze(x, u, a ? void 0 : l),
                u != null &&
                  ((oe.current = t), f(t), o(W_(s)), c({ anchor: l.anchor, liveElement: s })));
            }
            return;
          }
          let u = Cp(n, { x: i.clientX, y: i.clientY }),
            d = le.current;
          if (d != null) {
            let e = Cv(d, u);
            if (
              ((le.current = null),
              ie(null),
              l({ currentDragSelection: e, suppressFollowUpClick: !1 }))
            ) {
              yv(i);
              return;
            }
          }
          if ((yv(i), Ce && (Ne || i.altKey))) {
            let t = zh(u.x, u.y, A, e);
            t != null && Ve(t, I_(t, u.x, u.y));
            return;
          }
          We(u) &&
            ye &&
            i.shiftKey &&
            ((pe.current = !0),
            m(!0),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
              pressed: !0,
            }));
        },
        S = (t, n) => {
          if (
            !n.isTrusted ||
            n.ctrlKey ||
            k !== `comment` ||
            (x != null && (x.target.mode !== `create` || x.anchor.type === `text`)) ||
            gv(n, e)
          )
            return;
          let r = Cp(t, { x: n.clientX, y: n.clientY });
          m_(Vh(r.x, r.y, e), h_(n, t)) && yv(n);
        };
      return Zf((e, t) => {
        let n = (e) => {
            u(t, e);
          },
          o = (e) => {
            p(t, e);
          },
          c = (e) => {
            h(t, e);
          },
          l = (e) => {
            i(t, e);
          },
          f = (n) => {
            a(e, t, n);
          },
          m = (e) => {
            te(t, e);
          },
          v = (e) => {
            d(t, e);
          },
          x = (e) => {
            S(t, e);
          };
        (e.addEventListener(`pointerdown`, n, !0),
          e.addEventListener(`pointermove`, o, !0),
          e.addEventListener(`pointerup`, c, !0));
        for (let t of Nv) e.addEventListener(t, b, !0);
        (e.addEventListener(`pointercancel`, _, !0),
          e.addEventListener(`mousemove`, l, !0),
          e.addEventListener(`mouseout`, f, !0));
        let ee = (e) => {
            (e.key === `Alt` && g(!1), !e.shiftKey && pe.current && r(!1));
          },
          C = (e) => {
            (e.key === `Alt` && g(!0), y(e));
          };
        return (
          e.addEventListener(`keydown`, C, !0),
          e.addEventListener(`keyup`, ee, !0),
          e.addEventListener(`click`, m, !0),
          e.addEventListener(`contextmenu`, v, !0),
          e.addEventListener(`wheel`, x, !0),
          t.addEventListener(`blur`, s),
          () => {
            (e.removeEventListener(`pointerdown`, n, !0),
              e.removeEventListener(`pointermove`, o, !0),
              e.removeEventListener(`pointerup`, c, !0));
            for (let t of Nv) e.removeEventListener(t, b, !0);
            (e.removeEventListener(`pointercancel`, _, !0),
              e.removeEventListener(`mousemove`, l, !0),
              e.removeEventListener(`mouseout`, f, !0),
              e.removeEventListener(`keydown`, C, !0),
              e.removeEventListener(`keyup`, ee, !0),
              e.removeEventListener(`click`, m, !0),
              e.removeEventListener(`contextmenu`, v, !0),
              e.removeEventListener(`wheel`, x, !0),
              t.removeEventListener(`blur`, s));
          }
        );
      });
    }, [x, t, ye, A, Ce, Ze, qe, k, Ne, e, Je, Ve, Re, n.viewportScale, Se, We, j]),
    (0, W.useEffect)(() => {
      if (k !== `comment` || x != null) return;
      let t = () => {
          let t = G_(oe.current, e, A);
          (o(W_(t)), c(null), t != null && ae(lg()));
        },
        n = () => {
          (_e.current != null && window.clearTimeout(_e.current),
            (ge.current = !0),
            o(null),
            c(null),
            ae(lg()),
            (_e.current = window.setTimeout(() => {
              ((_e.current = null), (ge.current = !1), t());
            }, Pv)));
        },
        r = Zf(
          (e, r) => (
            r.addEventListener(`resize`, t),
            e.addEventListener(`scroll`, n, !0),
            () => {
              (r.removeEventListener(`resize`, t), e.removeEventListener(`scroll`, n, !0));
            }
          ),
        );
      return () => {
        (r(),
          (ge.current = !1),
          _e.current != null && (window.clearTimeout(_e.current), (_e.current = null)));
      };
    }, [x, A, k, e, Se]),
    (0, W.useEffect)(() => {
      if (x == null && _ == null) return;
      let r = () => {
          let r = _ == null ? null : { mode: `edit`, commentId: _ },
            i = x?.target ?? r;
          if (i == null) return;
          let a,
            o = Z_(e);
          if (x == null) {
            let e = ve.find((e) => e.id === _) ?? null;
            if (e == null) return;
            let t = Lg(e, o) ?? null;
            (t != null && o.set(e.id, t), (a = L_(e, t, j)));
          } else
            a =
              x.target.mode === `create` || x.target.mode === `design`
                ? z_(x, j, n.viewportScale)
                : B_(x, ve, o, j);
          if (a == null && x == null) return;
          if (
            (t.sendMessageToHost({
              type: `browser-sidebar-runtime-update-anchor`,
              target: i,
              anchorState: a,
            }),
            ae(lg()),
            x?.anchor.type === `text` && a?.anchor.kind === `text`)
          ) {
            let e = a.anchor;
            ee((t) =>
              t?.anchor.type !== `text` || Fs(t.anchor.value, e)
                ? t
                : { ...t, anchor: { ...t.anchor, value: e } },
            );
          }
          if (a == null || x == null) {
            if (x == null) return;
            ee((e) =>
              e == null ||
              !ms(e.target, x.target) ||
              e.anchor.type !== `element` ||
              e.anchor.element == null
                ? e
                : { ...e, anchor: { ...e.anchor, element: null } },
            );
            return;
          }
          let s = x.target;
          if (s.mode !== `edit`) return;
          let c = Ag(x.anchor, o);
          ee((e) =>
            e == null || !ms(e.target, s) || e.anchor.type !== `element` || e.anchor.element === c
              ? e
              : { ...e, anchor: { ...e.anchor, element: c } },
          );
        },
        i = () => {
          r();
        },
        a = () => {
          (x?.target.mode === `create` &&
            x.anchor.type !== `text` &&
            ((oe.current = null), o(null), c(null)),
            r());
        },
        s =
          x == null
            ? []
            : x.anchor.type === `text`
              ? [x.anchor.value]
              : [x.anchor.value, ...x.anchor.additionalSelections.map((e) => e.anchor)],
        l = window.visualViewport;
      (l?.addEventListener(`resize`, i), l?.addEventListener(`scroll`, a));
      let u = Zf((e, t) => {
          (t.addEventListener(`resize`, i),
            t.addEventListener(`scroll`, a),
            e.addEventListener(`scroll`, a, !0));
          let n = bp(t, s, a);
          return () => {
            (t.removeEventListener(`resize`, i),
              t.removeEventListener(`scroll`, a),
              e.removeEventListener(`scroll`, a, !0),
              n());
          };
        }),
        d = x?.anchor.type === `text` ? lm([x.anchor.value], r) : null;
      return (
        r(),
        () => {
          (l?.removeEventListener(`resize`, i), l?.removeEventListener(`scroll`, a), u(), d?.());
        }
      );
    }, [x, t, ve, _, e, n.viewportScale, j]),
    (0, W.useEffect)(() => {
      let e = k === `comment` && x == null && Ce && h;
      fe.current !== e &&
        ((fe.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-design-modifier-state`, pressed: e }));
    }, [x, t, Ce, k, h]),
    (0, W.useEffect)(() => () => i.clear(), [i]),
    (0, W.useEffect)(() => Q_(k === `comment` ? je : Bv, Ee), [k, Ee, je]),
    (0, W.useLayoutEffect)(() => {
      if (x != null || Te.length === 0 || (k !== `comment` && te == null)) return;
      let t = ve.filter((e) => e.anchor.kind === `text` && Y_(e)),
        n = () => {
          ce((e) => cm(t, e));
        },
        r = null,
        i = () => {
          r ??= window.requestAnimationFrame(() => {
            ((r = null), n());
          });
        },
        a = () => {
          (n(),
            (0, wv.flushSync)(() => {
              ae(lg());
            }));
        },
        o = () => {
          (i(), ae(lg()));
        },
        s = () => o(),
        c = ve.flatMap((e) => (Y_(e) ? [e.anchor, ...(e.additionalAnchors ?? [])] : []));
      (window.addEventListener(`resize`, a), Fe && document.addEventListener(`scroll`, s, !0));
      let l = Ie ? uv(document, e, Xe) : null,
        u = bp(window, c, s),
        d = Zf((t, n) => {
          if (n === window) return () => {};
          let r = () => o();
          (n.addEventListener(`resize`, a),
            n.addEventListener(`scroll`, r),
            Fe && t.addEventListener(`scroll`, r, !0));
          let i = bp(n, c, r),
            s = Ie ? uv(t, e, Xe) : null;
          return () => {
            (n.removeEventListener(`resize`, a),
              n.removeEventListener(`scroll`, r),
              Fe && t.removeEventListener(`scroll`, r, !0),
              i(),
              s?.());
          };
        });
      i();
      let f = lm(
        t.flatMap((e) => (e.anchor.kind === `text` ? [e.anchor] : [])),
        n,
      );
      return () => {
        (window.removeEventListener(`resize`, a),
          Fe && document.removeEventListener(`scroll`, s, !0),
          l?.(),
          u(),
          d(),
          r != null && window.cancelAnimationFrame(r),
          f());
      };
    }, [x, te, ve, Fe, Ie, k, Xe, e, Te.length]));
  let ot = k === `comment` && n.isOriginalViewEnabled !== !0,
    st = k === `comment` && (x == null || x.target.mode === `create`);
  (0, W.useLayoutEffect)(() => {
    let e = document.getElementById(Wh);
    if (e instanceof HTMLDivElement)
      return (
        (e.style.pointerEvents = st ? `auto` : `none`),
        () => {
          e.style.pointerEvents = `none`;
        }
      );
  }, [e, st]);
  let ct = te == null ? null : (De.find((e) => e.id === te) ?? null),
    lt = te == null ? null : (Pe.find((e) => e.id === te) ?? null),
    M =
      ct == null
        ? lt == null
          ? null
          : { kind: `design`, annotation: lt }
        : { kind: `comment`, annotation: ct },
    ut = M?.annotation.id ?? null,
    dt = M?.kind === `comment` ? [M.annotation] : De,
    ft = M != null && te != null,
    pt = x?.target.mode === `create` ? kg(x.anchor) : null,
    mt = x?.target.mode === `create` && x.anchor.type === `text` ? x.anchor.value : null,
    ht =
      x?.target.mode === `create` && x.anchor.type !== `text`
        ? [jg(x.anchor).primary, ...x.anchor.additionalSelections]
        : [],
    gt = x?.target.mode === `create` && x.anchor.type !== `text` ? x.anchor.viewportSize : void 0,
    _t =
      ye &&
      !ft &&
      re == null &&
      x?.target.mode === `create` &&
      x.anchor.type !== `text` &&
      l != null &&
      l >= 0 &&
      l < ht.length
        ? l
        : null,
    vt = (e) =>
      [e.anchor, ...(e.additionalAnchors ?? [])].some((e) =>
        mt == null ? e.kind !== `text` && ht.some((t) => Nh(Dg(e, Ee), t)) : Fs(e, mt),
      ),
    yt = mt == null && ht.length === 0 ? null : (De.find(vt) ?? Te.find(vt) ?? null),
    bt = gs(xe),
    xt = De;
  M?.kind === `comment`
    ? (xt = bt ? [M.annotation] : De)
    : bt || ft
      ? (xt = [])
      : yt != null && (xt = De.filter((e) => e.id !== yt.id));
  let St = xt.flatMap((e) => {
      let t = we.get(e.id);
      return t == null
        ? []
        : (e.anchor.kind === `text`
            ? [e.anchor]
            : [e.anchor, ...(e.additionalAnchors ?? [])]
          ).flatMap((n, r) => {
            let i = e.selectionSourceIndexes[r] ?? r,
              a = n.kind === `element` ? rh(n, i === 0 ? e.id : void 0, Ee) : null,
              o = ig(n, w, { liveElement: a, viewportSize: e.markerViewportSize, zoomFactor: j });
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
          });
    }),
    Ct = Ts(
      St.map(({ markerPoint: e }) => e),
      w.width * j,
    ),
    wt = M?.kind === `comment` ? St.findIndex(({ comment: e }) => e.id === M.annotation.id) : -1,
    Tt = wt === -1 ? void 0 : Ct[wt],
    Et = Tt == null ? void 0 : { x: Tt.x / j, y: Tt.y / j },
    Dt =
      M?.annotation.anchor.kind === `element`
        ? M.kind === `comment`
          ? (Lg(M.annotation, Ee) ?? null)
          : (rh(M.annotation.anchor, M.annotation.id, Ee) ?? null)
        : null,
    Ot =
      M?.kind === `comment` && M.annotation.anchor.kind !== `text`
        ? (M.annotation.additionalAnchors ?? []).map((e) => Dg(e, Ee))
        : [],
    kt =
      M?.kind === `comment` &&
      M.annotation.anchor.kind === `element` &&
      Dt == null &&
      Ot.every((e) => e.anchor.kind === `element` && e.liveElement == null) &&
      !gs(M.annotation.anchor.pageUrl),
    At = _ == null ? null : (De.find((e) => e.id === _) ?? null),
    jt =
      ot || (ft && M?.kind === `comment`)
        ? dt.flatMap((e) =>
            mv(e, x, M?.kind === `comment` ? M.annotation : null)
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
    Mt = null;
  ft && M?.annotation.anchor.kind === `text`
    ? (Mt = M.annotation.anchor)
    : !ft && x?.anchor.type === `text`
      ? (Mt = x.anchor.value)
      : !ft && At?.anchor.kind === `text` && (Mt = At.anchor);
  let Nt = Mt == null ? null : um(Mt);
  (0, W.useLayoutEffect)(() => (Nt == null ? void 0 : dm(Nt)), [Nt]);
  let Pt = Mt == null ? [] : dv(Mt),
    Ft = Nt == null ? Pt : [],
    It = null,
    Lt = !1,
    Rt = `hover-box`,
    zt,
    Bt = [];
  if (ft && M?.annotation.anchor.kind === `element`) {
    let e = Dt == null ? null : Qm(Dt),
      t = e?.rect ?? sh(M.annotation.anchor);
    ((zt = e?.borderRadius),
      (Rt = eg(M.annotation.anchor, t, w.width, w.height)),
      (It = Yh(M.annotation.anchor, t, Dt)),
      (Lt = M.kind === `comment` && $m(M.annotation.anchor)),
      (Bt = Pg(Ot, w, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: M.annotation.viewportSize,
      })));
  } else if (ft && M?.kind === `comment` && M.annotation.anchor.kind === `region`) {
    let e = sh(M.annotation.anchor);
    ((Rt = cg(M.annotation.anchor, e, w.width, w.height)),
      (It = Yh(M.annotation.anchor, e)),
      (Bt = Pg(Ot, w, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: M.annotation.viewportSize,
      })));
  } else if (!ft)
    if (((It = re?.rect ?? null), It != null)) {
      if (
        ((Rt = cg(null, It, w.width, w.height)),
        x?.target.mode === `create` && x.anchor.type !== `text`)
      ) {
        let e = jg(x.anchor);
        Bt = Pg([e.primary, ...e.additional], w, {
          clipToVisibleArea: !0,
          viewportSize: x.anchor.viewportSize,
        });
      }
    } else if (x?.anchor.type === `element`) {
      let e = kg(x.anchor),
        t = x.anchor.element == null ? null : Qm(x.anchor.element),
        n = t?.rect ?? sh(e);
      ((zt = t?.borderRadius),
        (Rt = x.target.mode === `design` ? `hover-box` : eg(e, n, w.width, w.height)),
        (It = x.target.mode === `design` ? n : Yh(e, n, x.anchor.element)),
        (Lt = x.target.mode !== `design` && $m(e)),
        (Bt = Pg(x.anchor.additionalSelections, w, {
          clipToVisibleArea: x.target.mode !== `design`,
          selectionIndexOffset: 1,
          viewportSize: x.anchor.viewportSize,
        })));
    } else if (x?.anchor.type === `region` && x.target.mode !== `design`) {
      let e = sh(x.anchor.value);
      ((Rt = cg(x.anchor.value, e, w.width, w.height)),
        (It = Yh(x.anchor.value, e)),
        (Bt = Pg(x.anchor.additionalSelections, w, {
          clipToVisibleArea: !0,
          selectionIndexOffset: 1,
          viewportSize: x.anchor.viewportSize,
        })));
    } else
      a != null && ((It = a.rect), (zt = a.borderRadius), (Rt = eg(null, It, w.width, w.height)));
  let Vt =
      M == null ? null : Jh([...Pt, ...(It == null ? [] : [It]), ...Bt.map(({ rect: e }) => e)]),
    Ht = ft ? [] : X_(C, x, Oe, Ee),
    Ut = Se && !ft && x == null && re == null && At == null ? a : null,
    Wt = !ft && x?.target.mode === `create` && x.anchor.type !== `text` ? a : null,
    Gt = p && Wt != null && s != null && ht.some((e) => Nh(e, s)),
    Kt = p ? `add` : `comment`,
    qt =
      !ft && pt != null && (!bt || yt == null)
        ? ig(pt, w, {
            includeElementFrameScroll: !0,
            liveElement: ht[0]?.liveElement ?? null,
            viewportSize: gt,
            zoomFactor: j,
          })
        : null,
    Jt = cs(ve),
    Yt = qt == null ? null : yt == null ? (Jt === 0 ? null : Jt + 1) : (we.get(yt.id) ?? null),
    Xt =
      j === 1
        ? {}
        : {
            height: `${j * 100}vh`,
            transform: `scale(${1 / j})`,
            transformOrigin: `top left`,
            width: `${j * 100}vw`,
          },
    Zt = {
      ...Zg,
      ...Xt,
      [jv]: String(be),
      "--browser-sidebar-draft-marker-size": `${Xs * be}px`,
      "--browser-sidebar-marker-label-font-size": `${10 * be}px`,
      "--browser-sidebar-marker-label-offset": `${-0.5 * be}px`,
      "--browser-sidebar-metadata-column-gap": `${12 * be}px`,
      "--browser-sidebar-metadata-height": `${kv * be}px`,
      "--browser-sidebar-metadata-padding-x": `${10 * be}px`,
      "--browser-sidebar-metadata-padding-y": `${8 * be}px`,
      "--browser-sidebar-metadata-radius": `${12 * be}px`,
      "--browser-sidebar-metadata-row-gap": `${3 * be}px`,
      "--browser-sidebar-overlay-font-size": `${13 * be}px`,
      "--browser-sidebar-saved-marker-size": `${Xs * be}px`,
    };
  k === `comment` && x == null && ((Zt.cursor = `none`), (Zt.pointerEvents = `auto`));
  let Qt = (0, W.useEffectEvent)((e) => {
    t.sendMessageToHost({
      type: `browser-sidebar-runtime-comment-screenshot-ready`,
      commentId: e,
      annotationViewportRect: Vt,
      markerViewportPoint: Et,
      ...(kt ? { skipScreenshotCapture: !0 } : {}),
    });
  });
  (0, W.useEffect)(() => {
    if (ut == null || te == null) {
      de.current = null;
      return;
    }
    if (de.current === ut) return;
    de.current = ut;
    let e = window.requestAnimationFrame(() => {
      Qt(ut);
    });
    return () => {
      window.cancelAnimationFrame(e);
    };
  }, [te, ut]);
  let $t = (0, Ev.jsxs)(Ev.Fragment, {
    children: [
      st ? (0, Ev.jsx)(F_, {}) : null,
      jt.map(({ anchor: e, key: t }) => {
        let n = sh(e);
        if (n == null) return null;
        let r = Yh(e, n);
        return r == null
          ? null
          : (0, Ev.jsx)(`div`, { className: og(e, n, w.width, w.height), style: sg(r, j) }, t);
      }),
      (0, Ev.jsx)(i_, {
        additionalHighlights: Bt.filter((e) => !e.isPageAnnotation),
        highlightBorderRadius: zt,
        highlightClassName: Rt,
        highlightRect: Lt ? null : It,
        hoverSnapshot: Wt,
        isRemoveHover: Gt,
        linkedSelectionIndex: _t,
        viewportHeight: w.height,
        viewportWidth: w.width,
        zoomFactor: j,
      }),
      !ft && d != null && (x == null || (x.target.mode === `create` && x.anchor.type !== `text`))
        ? (0, Ev.jsx)(r_, {
            className: `annotation-selection-cursor`,
            "data-browser-comment-annotation-selection-cursor": !0,
            mode: Kt,
            pointerEvents: `none`,
            style: {
              height: qg.height * be,
              left: d.x * j - qg.hotspotByMode[Kt].x * be,
              top: d.y * j - qg.hotspotByMode[Kt].y * be,
              width: qg.width * be,
            },
          })
        : null,
      Ft.map((e, t) =>
        (0, Ev.jsx)(
          `div`,
          { className: `text-selection-highlight`, style: sg(e, j) },
          `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
        ),
      ),
      Ht.map((e) =>
        (0, Ev.jsx)(
          `div`,
          {
            className: `flex-item-overlay`,
            "data-browser-comment-flex-item-overlay": !0,
            style: sg(e.rect, j, e.borderRadius),
          },
          e.key,
        ),
      ),
      Ut == null
        ? null
        : (0, Ev.jsx)(s_, { snapshot: Ut, viewportScale: n.viewportScale, zoomFactor: j }),
      ot || ft
        ? (0, Ev.jsxs)(`div`, {
            className: `markers-layer`,
            children: [
              qt == null
                ? null
                : (0, Ev.jsx)(o_, {
                    commentNumber: Yt,
                    markerPoint: qt,
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  }),
              St.map(
                ({ anchor: e, comment: n, commentNumber: r, key: i, savedSelectionIndex: a }, o) =>
                  (0, Ev.jsx)(
                    a_,
                    {
                      commentNumber: r,
                      isSelected: x?.target.mode === `edit` && x.target.commentId === n.id,
                      markerPoint: Ct[o],
                      onMouseEnter: () => {
                        ft || x != null || Be(n, e, a);
                      },
                      onMouseLeave: () => {
                        Ue(n.id);
                      },
                      onClick: (r) => {
                        if (r.isTrusted) {
                          if ((r.preventDefault(), r.stopPropagation(), x != null)) {
                            t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                            return;
                          }
                          ze(n, e, a);
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
  return (0, Ev.jsx)(N_, {
    config: n.intlConfig,
    children: (0, Ev.jsxs)(`div`, {
      "data-browser-comment-annotation-selection-modifier-active": (p && d != null) || void 0,
      "data-browser-comment-root": !0,
      style: Zt,
      children: [
        (0, Ev.jsx)(`style`, { children: Qg }),
        st ? (0, Ev.jsx)(P_, { style: Xt, children: $t }) : $t,
      ],
    }),
  });
}
function N_({ children: e, config: t }) {
  return (0, Ev.jsx)(Sf, {
    defaultLocale: t.defaultLocale,
    locale: t.locale,
    messages: t.messages,
    onError: zv,
    children: e,
  });
}
function P_({ children: e, style: t }) {
  let n = (0, W.useRef)(null),
    [r, i] = (0, W.useState)(!1);
  return (
    (0, W.useLayoutEffect)(() => {
      let e = n.current;
      if (e == null) return;
      let t = null,
        r = () => {
          let t = rp(e, !1);
          return (i(t), t);
        };
      return (
        r() || (t = window.requestAnimationFrame(r)),
        () => {
          (t != null && window.cancelAnimationFrame(t), ip(e));
        }
      );
    }, []),
    (0, Ev.jsx)(`div`, {
      ref: n,
      popover: `manual`,
      className: `interaction-layer`,
      style: r ? t : void 0,
      "data-browser-comment-interaction-layer": !0,
      children: e,
    })
  );
}
function F_() {
  return (0, Ev.jsx)(`div`, {
    className: `interaction-blocker`,
    "data-browser-comment-interaction-blocker": !0,
  });
}
function I_(e, t, n) {
  let r = $h(),
    i = ih(e),
    a = { x: t, y: n };
  return {
    anchor: eh(e, i ?? { x: t, y: n, width: 0, height: 0 }, a, i != null && gp(e), r.width),
    themeVariant: Qh(),
    viewportRect: i,
    viewportPoint: a,
    viewportSize: r,
  };
}
function L_(e, t, n) {
  if (e.anchor.kind === `text`) return sm(e.anchor) ?? R_(e.anchor, n, e.themeVariant);
  if (e.anchor.kind === `region`)
    return {
      ...R_(e.anchor, n, e.themeVariant),
      additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    };
  let r = $h(),
    i = t == null ? e.anchor : th(t, e.anchor, r, e.markerViewportPoint),
    a = ag(i, n);
  return {
    anchor: i,
    additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    themeVariant: e.themeVariant ?? Qh(),
    viewportRect: t == null ? sh(e.anchor) : ih(t),
    viewportPoint: a,
    viewportSize: r,
  };
}
function R_(e, t, n) {
  let r = lg();
  return {
    anchor: e,
    themeVariant: n ?? Qh(),
    viewportRect: sh(e),
    viewportPoint: ag(e, t),
    viewportSize: { width: r.width, height: r.height },
  };
}
function z_(e, t, n) {
  if (e.anchor.type === `text`)
    return sm(e.anchor.value) ?? R_(e.anchor.value, t, e.anchor.themeVariant);
  if (e.anchor.type === `region`) {
    let n = $h();
    return {
      ...R_(e.anchor.value, t, e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => Ng(e, n)),
    };
  }
  let r = e.anchor.element?.isConnected ? e.anchor.element : null,
    i = r == null ? null : ih(r),
    a = $h(),
    o = r == null ? e.anchor.value : th(r, e.anchor.value, a);
  return {
    anchor: o,
    additionalAnchors: e.anchor.additionalSelections.map((e) => Ng(e, a)),
    cardViewportRect:
      e.target.mode === `design`
        ? (e.anchor.cardViewportRect ??
          (i == null ? void 0 : fv(i, { viewportScale: n, zoomFactor: t })))
        : void 0,
    themeVariant: e.anchor.themeVariant ?? Qh(),
    viewportRect: i,
    viewportPoint: ag(o, t),
    viewportSize: a,
  };
}
function B_(e, t, n, r) {
  let i = e.target;
  if (i.mode !== `edit`) return null;
  let a = t.find((e) => e.id === i.commentId) ?? null;
  if (a == null) return null;
  if (e.anchor.type === `text`)
    return sm(e.anchor.value) ?? R_(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant);
  if (e.anchor.type === `region`) {
    let t = $h();
    return {
      ...R_(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => Ng(e, t)),
    };
  }
  let o = Ag(e.anchor, n),
    s = $h(),
    c = o == null ? e.anchor.value : th(o, e.anchor.value, s, e.anchor.markerViewportPoint);
  return {
    anchor: c,
    additionalAnchors: e.anchor.additionalSelections.map((e) => Ng(e, s)),
    themeVariant: a.themeVariant,
    viewportRect: o == null ? sh(c) : ih(o),
    viewportPoint: ag(c, r),
    viewportSize: s,
  };
}
function V_() {
  let e = document.getElementById(Wh);
  if (e instanceof HTMLDivElement) return e;
  let t = document.createElement(`div`);
  return (
    (t.id = Wh),
    (t.style.position = `fixed`),
    (t.style.inset = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.zIndex = String(Tf)),
    document.documentElement.appendChild(t),
    t
  );
}
function H_(e, t, n, r) {
  return _v(n) ? U_(e, t, r) : zh(e.x, e.y, r, t);
}
function U_(e, t, n) {
  let r = t.shadowRoot?.querySelectorAll(`[data-browser-comment-marker]`);
  if (r == null || r.length === 0) return zh(e.x, e.y, n, t);
  let i = Array.from(r, (e) => {
    let t = e.style.pointerEvents;
    return ((e.style.pointerEvents = `none`), t);
  });
  try {
    return zh(e.x, e.y, n, t);
  } finally {
    r.forEach((e, t) => {
      e.style.pointerEvents = i[t] ?? ``;
    });
  }
}
function W_(e, t = !1) {
  return e == null || (!t && Uf(e)) ? null : Qm(e);
}
function G_(e, t, n) {
  return e == null ? null : zh(e.x, e.y, n, t);
}
function K_(e, t) {
  let n = Jf(e.x, e.y);
  n == null || Hh(n) || np(t, Kh);
}
function q_(e, t) {
  if (!J_(e) || e.anchor.kind !== `element`) return null;
  let n = rh(e.anchor, e.id, t);
  return n == null
    ? null
    : (t.set(e.id, n), { ...e, anchor: th(n, e.anchor, e.viewportSize, e.markerViewportPoint) });
}
function J_(e) {
  return uh(e.anchor.pageUrl, window.location.href);
}
function Y_(e) {
  return uh(e.anchor.pageUrl, window.location.href);
}
function X_(e, t, n, r) {
  if (e == null || (e !== `gap` && e !== `row-gap` && e !== `column-gap`)) return [];
  let i =
    t?.anchor.type === `element` ? t.anchor.element : n == null ? null : (r.get(n.id) ?? null);
  if (i == null) return [];
  let a = xp(i).getComputedStyle(i);
  if (a.display !== `flex` && a.display !== `inline-flex`) return [];
  let o = Array.from(i.children).flatMap((e, t) => {
    if (!U(e)) return [];
    let n = xp(e).getComputedStyle(e);
    if (n.position === `absolute` || n.position === `fixed`) return [];
    let r = ih(e);
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
function Z_(e) {
  let t = Av.get(e);
  if (t != null) return t;
  let n = new Map();
  return (Av.set(e, n), n);
}
function Q_(e, t) {
  return Zf((n) => {
    let r = () => {
      ($_(n, e, t), tv(n, e), ev(n, e));
    };
    r();
    let i = new MutationObserver(r);
    return (
      i.observe(n.documentElement, Mv),
      () => {
        (i.disconnect(), rv(n), n.getElementById(Rv)?.remove());
        for (let e of n.querySelectorAll(`[${Iv}]`)) e.removeAttribute(Iv);
      }
    );
  });
}
function $_(e, t, n) {
  let r = new Map();
  for (let i of t) {
    if (
      !J_(i) ||
      i.anchor.kind !== `element` ||
      i.anchor.selector == null ||
      pp(i.anchor.framePath) !== e
    )
      continue;
    let t = n.get(i.id),
      a = t?.isConnected && t.ownerDocument === e ? t : oh(e, i.anchor);
    if (a != null) {
      n.set(i.id, a);
      let e = r.get(a) ?? new Set();
      (e.add(i.draftAttribute), r.set(a, e));
    }
  }
  for (let t of e.querySelectorAll(`[${Iv}]`)) U(t) && (sv(t, r.get(t)), r.delete(t));
  for (let [e, t] of r) sv(e, t);
}
function ev(e, t) {
  let n = lv(
      t.filter(
        (t) =>
          J_(t) &&
          pp(t.anchor.framePath) === e &&
          (t.anchor.frameUrl == null || uh(t.anchor.frameUrl, e.location.href)),
      ),
    ),
    r = e.getElementById(Rv);
  if (n.length === 0) {
    r?.remove();
    return;
  }
  let i = r instanceof HTMLStyleElement ? r : e.createElement(`style`);
  ((i.id = Rv),
    i.textContent !== n && (i.textContent = n),
    i.parentElement ?? (e.head ?? e.documentElement).append(i));
}
function tv(e, t) {
  let n = new Map(t.map((e) => [e.draftAttribute, e]));
  for (let t of e.querySelectorAll(`[${Iv}], [${Lv}]`)) {
    if (!U(t)) continue;
    let e = nv(
      cv(t)
        .map((e) => n.get(e))
        .filter((e) => e != null),
    );
    if (e == null) {
      iv(t);
      continue;
    }
    (t.hasAttribute(Lv) || t.setAttribute(Lv, e.previousValue), av(t, e.value));
  }
}
function nv(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t]?.text;
    if (n != null && n.value !== n.previousValue) return n;
  }
  return null;
}
function rv(e) {
  for (let t of e.querySelectorAll(`[${Lv}]`)) U(t) && iv(t);
}
function iv(e) {
  let t = e.getAttribute(Lv);
  t != null && (av(e, t), e.removeAttribute(Lv));
}
function av(e, t) {
  e.textContent !== t && (e.textContent = t);
}
function ov(e, t) {
  let n = new Set(cv(e));
  (n.add(t), e.setAttribute(Iv, Array.from(n).join(` `)));
}
function sv(e, t) {
  let n = t == null ? `` : Array.from(t).join(` `);
  if (n.length === 0) {
    e.removeAttribute(Iv);
    return;
  }
  e.getAttribute(Iv) !== n && e.setAttribute(Iv, n);
}
function cv(e) {
  return (e.getAttribute(Iv) ?? ``).split(/\s+/).filter((e) => e.length > 0);
}
function lv(e) {
  return Cs(e, Iv);
}
function uv(e, t, n) {
  let r = new MutationObserver((e) => {
    e.every((e) => e.target instanceof Node && t.contains(e.target)) || n();
  });
  return (
    r.observe(e.documentElement, Mv),
    () => {
      r.disconnect();
    }
  );
}
function dv(e) {
  return e.selectionRects.flatMap((t) => {
    let n = sh({ ...e, rect: t });
    return n == null ? [] : [n];
  });
}
function fv(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  return Ss(e, { viewport: t, viewportScale: n, zoomFactor: r });
}
function pv(e, t, { viewportScale: n, zoomFactor: r }) {
  let i = fv(t, { viewportScale: n, zoomFactor: r }),
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
function mv(e, t, n) {
  if (e.id === n?.id) return !0;
  if (t == null || t.anchor.type === `text` || t.target.mode !== `create`) return !1;
  let r = jg(t.anchor),
    i = [r.primary, ...r.additional].map(({ anchor: e }) => e);
  return [e.anchor, ...(e.additionalAnchors ?? [])].some(
    (e) => e.kind === `region` && i.some((t) => Fs(e, t)),
  );
}
function hv(e, t) {
  return e.composedPath().includes(t);
}
function gv(e, t) {
  return hv(e, t) && !vv(e);
}
function _v(e) {
  return e
    .composedPath()
    .some((e) => e instanceof HTMLElement && e.hasAttribute(`data-browser-comment-marker`));
}
function vv(e) {
  return e
    .composedPath()
    .some(
      (e) => e instanceof HTMLElement && e.hasAttribute(`data-browser-comment-interaction-blocker`),
    );
}
function yv(e, { preventDefault: t = !0 } = {}) {
  (t && e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation?.());
}
function bv(e) {
  return Is(e, { width: window.innerWidth, height: window.innerHeight });
}
function xv(e, t) {
  return Ls(e, t, Ov);
}
function Sv(e, t) {
  return Rs(e, t);
}
function Cv(e, t) {
  let n = e.isDraggingRegion || xv(e.start, t);
  return { ...e, current: t, rect: n ? Sv(e.start, t) : null, isDraggingRegion: n };
}
var W,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv = o(() => {
    (Qs(),
      (W = u(Rc(), 1)),
      (wv = Bc()),
      (Tv = Wc()),
      wf(),
      Ef(),
      Ch(),
      kh(),
      qh(),
      Rh(),
      Ig(),
      Bg(),
      bh(),
      Tg(),
      l_(),
      $g(),
      Ip(),
      p_(),
      C_(),
      D_(),
      k_(),
      Zm(),
      (Ev = t_()),
      (Dv = { name: `openai:browser-annotation-default-editor`, values: [`advanced`] }),
      (Ov = 4),
      (kv = 72),
      (Av = new WeakMap()),
      (jv = `--browser-sidebar-overlay-size-scale`),
      (Mv = {
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
      (Nv = [
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
      (Pv = 100),
      (Fv = 5e3),
      (Iv = `data-codex-browser-design-group`),
      (Lv = `data-codex-browser-design-original-text`),
      (Rv = `codex-browser-design-draft-style`),
      (zv = () => {}),
      (Bv = []));
  });
(Qs(), ic());
var Hv = null,
  Uv = {
    interactionMode: `browse`,
    annotationEditorMode: `comment`,
    isAgentControllingBrowser: !1,
    canUseTweaks: !1,
    canUseAnnotationMultiSelect: !1,
    canUseSiteAnnotationApi: !1,
    isDesignModifierPressed: !1,
    isTweaksEditorOpen: !1,
    comments: [],
    intlConfig: Zs,
    viewportScale: 1,
    zoomPercent: 100,
  },
  Wv = !1,
  Gv = null,
  Kv = null,
  qv = !1,
  Jv = null,
  Yv = null,
  Xv = null;
function Zv() {
  (document.readyState === `loading`
    ? window.addEventListener(`DOMContentLoaded`, $v, { once: !0 })
    : $v(),
    d.ipcRenderer.on(ac, ty));
}
function Qv(e) {
  return d.contextBridge.executeInMainWorld({
    func: (e, t, n) => {
      let r = 0,
        i = (e) => {
          if (typeof e != `object` || !e) throw TypeError(`Invalid annotation controls`);
          let t = JSON.stringify({ controls: e.controls, controlsMode: e.controlsMode }, (e, t) => {
            if (typeof t == `function` || typeof t == `symbol` || typeof t == `bigint`)
              throw TypeError(`Annotation controls must contain only data`);
            return t;
          });
          if (t.length > 16384) throw RangeError(`Annotation controls exceed the maximum size`);
          return t;
        },
        a = {
          open: (n = {}) => {
            if (typeof n != `object` || !n) return !1;
            let { target: r } = n;
            if (!c() || !(r instanceof Element) || r.ownerDocument !== document || !r.isConnected)
              return !1;
            let i = u(`initialComment`),
              a = typeof i == `string` && i.length <= t ? i : void 0,
              o = u(`mode`) === `advanced` ? `advanced` : `default`,
              s = u(`enterAnnotationMode`) === !0,
              l = (() => {
                try {
                  let t = u(`metadata`);
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
            return (
              l != null && r.getRootNode() !== document && (l = void 0),
              !r.dispatchEvent(
                new CustomEvent(`codex:open-annotation`, {
                  bubbles: !0,
                  cancelable: !0,
                  composed: !0,
                  detail: { mode: o, enterAnnotationMode: s, metadata: l, initialComment: a },
                }),
              )
            );
            function u(e) {
              try {
                let t = Object.getOwnPropertyDescriptor(n, e);
                return t != null && Object.hasOwn(t, `value`) ? t.value : void 0;
              } catch {
                return;
              }
            }
          },
          registerControls: (e) => {
            if (typeof e != `object` || !e)
              throw TypeError(`Invalid annotation controls registration`);
            let t = o(e.targets);
            if (t.length === 0) throw TypeError(`Annotation controls require element targets`);
            let a = i(e);
            r += 1;
            let c = String(r);
            if (!n(`register`, { id: c, payload: a, targets: t }))
              throw TypeError(`Invalid annotation controls registration`);
            return s(c);
          },
        };
      try {
        let e = Reflect.get(document, `openai`),
          t = e ?? {};
        if (
          (typeof t != `object` && typeof t != `function`) ||
          Reflect.get(t, `annotations`) != null
        )
          return null;
        let n = Reflect.getOwnPropertyDescriptor(document, `openai`),
          r = Reflect.getOwnPropertyDescriptor(t, `annotations`);
        if (
          !Reflect.defineProperty(t, "annotations", {
            configurable: !0,
            enumerable: !1,
            value: a,
          }) ||
          (e == null &&
            !Reflect.defineProperty(document, "openai", {
              configurable: !0,
              enumerable: !1,
              value: t,
            }))
        )
          return null;
        let i = a.open,
          o = a.registerControls;
        return () => {
          try {
            (l(a, `registerControls`, o, void 0),
              l(a, `open`, i, void 0),
              Reflect.ownKeys(a).length === 0 && l(t, `annotations`, a, r),
              e == null && Reflect.ownKeys(t).length === 0 && l(document, `openai`, t, n));
          } catch {}
        };
      } catch {
        return null;
      }
      function o(e) {
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
      function s(e) {
        let t = !1;
        return Object.freeze({
          update(r) {
            if (t) throw TypeError(`Annotation controls have been disposed`);
            let a = i(r),
              s = r.targets;
            if (!n(`update`, { id: e, payload: a, targets: s === void 0 ? void 0 : o(s) }))
              throw TypeError(`Invalid annotation controls update`);
          },
          dispose() {
            t || ((t = !0), n(`dispose`, { id: e }));
          },
        });
      }
      function c() {
        return navigator.userActivation?.isActive === !0;
      }
      function l(e, t, n, r) {
        Reflect.getOwnPropertyDescriptor(e, t)?.value === n &&
          (r == null ? Reflect.deleteProperty(e, t) : Reflect.defineProperty(e, t, r));
      }
    },
    args: [
      es,
      240,
      (t, n) =>
        Xv !== e || (t !== `register` && t !== `update` && t !== `dispose`)
          ? !1
          : !window.dispatchEvent(
              new CustomEvent(`codex:${t}-annotation-controls`, { cancelable: !0, detail: n }),
            ),
    ],
  });
}
function $v() {
  Hv ??
    Ic(
      async () => {
        let { mountBrowserCommentRuntime: e } = await Promise.resolve().then(() => (Vv(), A_));
        return { mountBrowserCommentRuntime: e };
      },
      void 0,
    ).then(({ mountBrowserCommentRuntime: e }) => {
      Hv = e(ey());
    });
}
function ey() {
  let e = Uv;
  return (
    (Gv = null),
    {
      initialState: e,
      getAnnotationControls(e) {
        return Xv?.getControls(e);
      },
      sendMessageToHost(e) {
        d.ipcRenderer.invoke(oc, e);
      },
      subscribeToHostMessages(e) {
        Wv = !0;
        let t = (t, n) => {
          switch (n.type) {
            case `browser-sidebar-runtime-sync`:
              (ry(n), e(n));
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
          d.ipcRenderer.on(ac, t),
          Gv != null && (e(Gv), (Gv = null)),
          (qv &&= (e({ type: `browser-sidebar-runtime-capture-text-selection` }), !1)),
          Kv != null && (e(Kv), (Kv = null)),
          () => {
            ((Wv = !1), d.ipcRenderer.removeListener(ac, t));
          }
        );
      },
    }
  );
}
function ty(e, t) {
  switch (t.type) {
    case `browser-sidebar-runtime-sync`:
      (ry(t), Wv || (Gv = t));
      return;
    case `browser-sidebar-runtime-capture-text-selection`:
      Wv || (qv = !0);
      return;
    case `browser-sidebar-runtime-select-comment`:
    case `browser-sidebar-runtime-create-comment-at-point`:
    case `browser-sidebar-runtime-create-comment-from-selection`:
    case `browser-sidebar-runtime-open-design-editor-at-point`:
    case `browser-sidebar-runtime-restore-editor`:
      Wv || ny(t);
      return;
    case `browser-sidebar-runtime-close-editor`:
      ny(t);
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
function ny(e) {
  Kv = Fc(Kv, e);
}
function ry(e) {
  ((Uv = {
    interactionMode: e.interactionMode,
    annotationEditorMode: e.annotationEditorMode ?? `comment`,
    isAgentControllingBrowser: e.isAgentControllingBrowser,
    canUseTweaks: e.canUseTweaks !== !1,
    canUseAnnotationMultiSelect: e.canUseAnnotationMultiSelect === !0,
    canUseSiteAnnotationApi: e.canUseSiteAnnotationApi === !0,
    isDesignModifierPressed: e.isDesignModifierPressed === !0,
    isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
    comments: e.comments,
    intlConfig: e.intlConfig,
    viewportScale: e.viewportScale ?? 1,
    zoomPercent: e.zoomPercent,
  }),
    e.canUseSiteAnnotationApi !== !0 || globalThis.isSecureContext !== !0
      ? (Yv?.(), Xv?.dispose(), (Xv = null), (Yv = null), (Jv = null))
      : Jv !== document &&
        (Xv?.dispose(),
        (Xv = kc()),
        (Jv = document),
        (Yv = Qv(Xv)),
        Yv ?? (Xv.dispose(), (Xv = null))));
}
var iy = !1;
function ay() {
  (window.addEventListener(`dragstart`, oy, !0), window.addEventListener(`dragend`, sy, !0));
}
function oy(e) {
  if (!e.isTrusted) return;
  let t = cy(e),
    n = t?.currentSrc || t?.src;
  n == null ||
    n.length === 0 ||
    ((iy = !0),
    d.ipcRenderer.invoke(oc, { type: `browser-sidebar-runtime-image-drag-started`, sourceUrl: n }));
}
function sy(e) {
  !e.isTrusted ||
    !iy ||
    ((iy = !1), d.ipcRenderer.invoke(oc, { type: `browser-sidebar-runtime-image-drag-ended` }));
}
function cy(e) {
  for (let t of e.composedPath()) if (t instanceof HTMLImageElement) return t;
  return e.target instanceof HTMLImageElement ? e.target : null;
}
function ly() {
  (window.addEventListener(`mousedown`, dy, !0),
    window.addEventListener(`mouseup`, uy, !0),
    window.addEventListener(`auxclick`, dy, !0));
}
function uy(e) {
  let t = fy(e);
  t == null ||
    !e.isTrusted ||
    (dy(e),
    d.ipcRenderer.invoke(oc, { type: `browser-sidebar-runtime-mouse-navigation`, direction: t }));
}
function dy(e) {
  fy(e) != null && (e.preventDefault(), e.stopPropagation());
}
function fy(e) {
  return e.button === 3 ? `back` : e.button === 4 ? `forward` : null;
}
var py = {
    distribution: `chrome-web-store`,
    extensionIds: [`lfkehkpjohcoelkpembgemeipeppanef`],
    outputModes: [],
    releaseChannel: `beta`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef`,
  },
  my = {
    distribution: `chrome-web-store`,
    extensionIds: [`hehggadaopoacecdllhhajmbjkdcmajg`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg`,
  },
  hy = {
    distribution: `microsoft-edge-add-ons`,
    extensionIds: [`odlomjlbamekndcpllcnffbgeohgkmjh`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh`,
  },
  gy = {
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
        py,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        py,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        my,
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
        py,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        hy,
        py,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        hy,
        my,
      ],
    },
  };
(gy.chrome.dev, gy.chrome.internal, gy.chrome.prod, gy.edge.dev, gy.edge.internal, gy.edge.prod);
var _y = { type: `webmcp_changed`, version: 1 },
  vy = /^[A-Za-z0-9_.-]{1,128}$/;
function yy({ locationLike: e = location, onToolsChanged: t } = {}) {
  let n = new Map(),
    r = crypto.getRandomValues.bind(crypto),
    i = () => {
      let e = r(new Uint32Array(4));
      return `${e[0]}-${e[1]}-${e[2]}-${e[3]}`;
    },
    a = n.delete.bind(n),
    o = n.forEach.bind(n),
    s = n.get.bind(n),
    c = n.set.bind(n),
    l = JSON.parse,
    u = JSON.stringify,
    d = globalThis.setTimeout.bind(globalThis),
    f = {
      async requestUserInteraction() {
        throw Error(`requestUserInteraction is not supported by the Codex WebMCP shim.`);
      },
    },
    p = async (n, r) => {
      by(e);
      let o = Sy(n?.name);
      if (s(o) != null)
        throw new DOMException(
          `WebMCP tool ${JSON.stringify(o)} is already registered.`,
          `InvalidStateError`,
        );
      let l = n?.description;
      if (typeof l != `string` || l.length === 0)
        throw new DOMException(
          `WebMCP tools must have a non-empty description.`,
          `InvalidStateError`,
        );
      let f = n.execute;
      if (typeof f != `function`) throw Error(`WebMCP tool ${o} is missing an execute callback.`);
      let p = n.inputSchema;
      if (p !== void 0 && (typeof p != `object` || !p))
        throw TypeError(`WebMCP tool inputSchema must be an object.`);
      let m = p === void 0 ? void 0 : u(p);
      if (p !== void 0 && m === void 0)
        throw Error(`WebMCP tool inputSchema must be JSON-serializable.`);
      let h = r?.signal;
      if (h?.aborted) throw h.reason;
      if (h != null && typeof h.addEventListener != `function`)
        throw Error(`WebMCP tool registration signal must support abort events.`);
      let g = {
        name: o,
        registrationId: i(),
        description: l,
        execute: f,
        ...(h == null ? {} : { signal: h }),
        ...(n.title == null ? {} : { title: n.title }),
        ...(m === void 0 ? {} : { inputSchema: m }),
        ...(n.annotations == null ? {} : { annotations: { ...n.annotations } }),
      };
      return new Promise((e, n) => {
        if (
          h != null &&
          (h.addEventListener(
            `abort`,
            () => {
              (n(h?.reason), s(o) === g && (a(o), xy(t)));
            },
            { once: !0 },
          ),
          h.aborted)
        ) {
          n(h.reason);
          return;
        }
        (c(o, g), xy(t), d(e, 0));
      });
    },
    m = (t) => ({
      name: t.name,
      description: t.description,
      inputSchema: t.inputSchema ?? null,
      ...(t.title == null ? {} : { title: t.title }),
      ...(t.annotations == null ? {} : { annotations: { ...t.annotations } }),
      ...(e.origin == null ? {} : { origin: e.origin }),
      ...(e.href == null ? {} : { pageUrl: e.href }),
    }),
    h = async () => {
      by(e);
      let t = [];
      return (
        o((e) => {
          e.signal?.aborted || (t[t.length] = m(e));
        }),
        t
      );
    },
    g = () => {
      by(e);
      let t = [];
      return (
        o((e) => {
          e.signal?.aborted || (t[t.length] = { ...m(e), registrationId: e.registrationId });
        }),
        t
      );
    },
    _ = async (e, t) => {
      let n;
      try {
        let e = u(t);
        if (e === void 0) throw Error();
        n = l(e);
      } catch {
        throw Error(`WebMCP executeTool requires a JSON-serializable object input.`);
      }
      return y(e, n, !1);
    },
    v = async (e, t) => {
      let n;
      try {
        n = l(t);
      } catch {
        throw Error(`WebMCP executeTool requires a JSON-stringified input.`);
      }
      return y(e, n, !0);
    },
    y = async (t, n, r) => {
      if ((by(e), typeof n != `object` || !n))
        throw Error(`WebMCP executeTool requires an object input.`);
      let i = Sy(t?.name),
        a = s(i);
      if (a == null || a.signal?.aborted)
        throw Error(
          r
            ? `WebMCP tool ${JSON.stringify(i)} is stale. Call fetchTools() again.`
            : `WebMCP tool not found: ${i}`,
        );
      if (r && a.registrationId !== t?.registrationId)
        throw Error(`WebMCP tool ${JSON.stringify(i)} is stale. Call fetchTools() again.`);
      return Cy(await a.execute(n, f), u);
    };
  return Object.freeze({
    codexExecuteTool: v,
    codexGetTools: g,
    executeTool: _,
    getTools: h,
    registerTool: p,
  });
}
function by(e) {
  if (globalThis.isSecureContext !== !0)
    throw new DOMException(`WebMCP requires a secure context.`, `SecurityError`);
  if (e.protocol !== `file:` && globalThis.originAgentCluster !== !0)
    throw new DOMException(`WebMCP requires an origin-keyed agent cluster.`, `SecurityError`);
}
function xy(e) {
  try {
    e?.();
  } catch {}
}
function Sy(e) {
  if (typeof e != `string` || !vy.test(e))
    throw new DOMException(
      `WebMCP tool names must contain 1-128 ASCII letters, digits, underscores, hyphens, or periods.`,
      `InvalidStateError`,
    );
  return e;
}
function Cy(e, t) {
  let n = e === void 0 ? null : e;
  try {
    let e = t(n);
    if (e === void 0) throw Error(`WebMCP tool result is not JSON-serializable.`);
    return e;
  } catch {
    throw Error(`WebMCP tool result is not JSON-serializable.`);
  }
}
var wy = {
    Dev: `dev`,
    Agent: `agent`,
    Nightly: `nightly`,
    InternalAlpha: `internal-alpha`,
    PublicBeta: `public-beta`,
    Prod: `prod`,
  },
  Ty = Object.values(wy),
  Ey = [wy.Dev, wy.Agent, wy.Nightly, wy.InternalAlpha],
  Dy = {
    ...wy,
    values: Ty,
    help: Ty.join(`, `),
    isValid(e) {
      return Ty.includes(e);
    },
    parse(e) {
      let t = e?.trim();
      return t && Dy.isValid(t) ? t : null;
    },
    isInternal(e) {
      return Ey.includes(e);
    },
    allowDebugMenu(e) {
      return Dy.isInternal(e);
    },
    supportsReactScan(e) {
      return e === Dy.Dev || e === Dy.Agent || e === Dy.Nightly;
    },
  },
  Oy = `codex_desktop:get-browser-webmcp-policy`,
  G;
(function (e) {
  e.assertEqual = (e) => {};
  function t(e) {}
  e.assertIs = t;
  function n(e) {
    throw Error();
  }
  ((e.assertNever = n),
    (e.arrayToEnum = (e) => {
      let t = {};
      for (let n of e) t[n] = n;
      return t;
    }),
    (e.getValidEnumValues = (t) => {
      let n = e.objectKeys(t).filter((e) => typeof t[t[e]] != `number`),
        r = {};
      for (let e of n) r[e] = t[e];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (e) {
        return t[e];
      })),
    (e.objectKeys =
      typeof Object.keys == `function`
        ? (e) => Object.keys(e)
        : (e) => {
            let t = [];
            for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          }),
    (e.find = (e, t) => {
      for (let n of e) if (t(n)) return n;
    }),
    (e.isInteger =
      typeof Number.isInteger == `function`
        ? (e) => Number.isInteger(e)
        : (e) => typeof e == `number` && Number.isFinite(e) && Math.floor(e) === e));
  function r(e, t = ` | `) {
    return e.map((e) => (typeof e == `string` ? `'${e}'` : e)).join(t);
  }
  ((e.joinValues = r),
    (e.jsonStringifyReplacer = (e, t) => (typeof t == `bigint` ? t.toString() : t)));
})((G ||= {}));
var ky;
(function (e) {
  e.mergeShapes = (e, t) => ({ ...e, ...t });
})((ky ||= {}));
var K = G.arrayToEnum([
    `string`,
    `nan`,
    `number`,
    `integer`,
    `float`,
    `boolean`,
    `date`,
    `bigint`,
    `symbol`,
    `function`,
    `undefined`,
    `null`,
    `array`,
    `object`,
    `unknown`,
    `promise`,
    `void`,
    `never`,
    `map`,
    `set`,
  ]),
  Ay = (e) => {
    switch (typeof e) {
      case `undefined`:
        return K.undefined;
      case `string`:
        return K.string;
      case `number`:
        return Number.isNaN(e) ? K.nan : K.number;
      case `boolean`:
        return K.boolean;
      case `function`:
        return K.function;
      case `bigint`:
        return K.bigint;
      case `symbol`:
        return K.symbol;
      case `object`:
        return Array.isArray(e)
          ? K.array
          : e === null
            ? K.null
            : e.then && typeof e.then == `function` && e.catch && typeof e.catch == `function`
              ? K.promise
              : typeof Map < `u` && e instanceof Map
                ? K.map
                : typeof Set < `u` && e instanceof Set
                  ? K.set
                  : typeof Date < `u` && e instanceof Date
                    ? K.date
                    : K.object;
      default:
        return K.unknown;
    }
  },
  q = G.arrayToEnum([
    `invalid_type`,
    `invalid_literal`,
    `custom`,
    `invalid_union`,
    `invalid_union_discriminator`,
    `invalid_enum_value`,
    `unrecognized_keys`,
    `invalid_arguments`,
    `invalid_return_type`,
    `invalid_date`,
    `invalid_string`,
    `too_small`,
    `too_big`,
    `invalid_intersection_types`,
    `not_multiple_of`,
    `not_finite`,
  ]),
  jy = class e extends Error {
    get errors() {
      return this.issues;
    }
    constructor(e) {
      (super(),
        (this.issues = []),
        (this.addIssue = (e) => {
          this.issues = [...this.issues, e];
        }),
        (this.addIssues = (e = []) => {
          this.issues = [...this.issues, ...e];
        }));
      let t = new.target.prototype;
      (Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
        (this.name = `ZodError`),
        (this.issues = e));
    }
    format(e) {
      let t =
          e ||
          function (e) {
            return e.message;
          },
        n = { _errors: [] },
        r = (e) => {
          for (let i of e.issues)
            if (i.code === `invalid_union`) i.unionErrors.map(r);
            else if (i.code === `invalid_return_type`) r(i.returnTypeError);
            else if (i.code === `invalid_arguments`) r(i.argumentsError);
            else if (i.path.length === 0) n._errors.push(t(i));
            else {
              let e = n,
                r = 0;
              for (; r < i.path.length;) {
                let n = i.path[r];
                (r === i.path.length - 1
                  ? ((e[n] = e[n] || { _errors: [] }), e[n]._errors.push(t(i)))
                  : (e[n] = e[n] || { _errors: [] }),
                  (e = e[n]),
                  r++);
              }
            }
        };
      return (r(this), n);
    }
    static assert(t) {
      if (!(t instanceof e)) throw Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, G.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(e = (e) => e.message) {
      let t = {},
        n = [];
      for (let r of this.issues)
        if (r.path.length > 0) {
          let n = r.path[0];
          ((t[n] = t[n] || []), t[n].push(e(r)));
        } else n.push(e(r));
      return { formErrors: n, fieldErrors: t };
    }
    get formErrors() {
      return this.flatten();
    }
  };
jy.create = (e) => new jy(e);
var My = (e, t) => {
    let n;
    switch (e.code) {
      case q.invalid_type:
        n =
          e.received === K.undefined
            ? `Required`
            : `Expected ${e.expected}, received ${e.received}`;
        break;
      case q.invalid_literal:
        n = `Invalid literal value, expected ${JSON.stringify(e.expected, G.jsonStringifyReplacer)}`;
        break;
      case q.unrecognized_keys:
        n = `Unrecognized key(s) in object: ${G.joinValues(e.keys, `, `)}`;
        break;
      case q.invalid_union:
        n = `Invalid input`;
        break;
      case q.invalid_union_discriminator:
        n = `Invalid discriminator value. Expected ${G.joinValues(e.options)}`;
        break;
      case q.invalid_enum_value:
        n = `Invalid enum value. Expected ${G.joinValues(e.options)}, received '${e.received}'`;
        break;
      case q.invalid_arguments:
        n = `Invalid function arguments`;
        break;
      case q.invalid_return_type:
        n = `Invalid function return type`;
        break;
      case q.invalid_date:
        n = `Invalid date`;
        break;
      case q.invalid_string:
        typeof e.validation == `object`
          ? `includes` in e.validation
            ? ((n = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == `number` &&
                (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
            : `startsWith` in e.validation
              ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
              : `endsWith` in e.validation
                ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
                : G.assertNever(e.validation)
          : (n = e.validation === `regex` ? `Invalid` : `Invalid ${e.validation}`);
        break;
      case q.too_small:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`
              : e.type === `number` || e.type === `bigint`
                ? `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`
                : e.type === `date`
                  ? `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`
                  : `Invalid input`;
        break;
      case q.too_big:
        n =
          e.type === `array`
            ? `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`
            : e.type === `string`
              ? `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`
              : e.type === `number`
                ? `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                : e.type === `bigint`
                  ? `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`
                  : e.type === `date`
                    ? `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`
                    : `Invalid input`;
        break;
      case q.custom:
        n = `Invalid input`;
        break;
      case q.invalid_intersection_types:
        n = `Intersection results could not be merged`;
        break;
      case q.not_multiple_of:
        n = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case q.not_finite:
        n = `Number must be finite`;
        break;
      default:
        ((n = t.defaultError), G.assertNever(e));
    }
    return { message: n };
  },
  Ny = My;
function Py() {
  return Ny;
}
var Fy = (e) => {
  let { data: t, path: n, errorMaps: r, issueData: i } = e,
    a = [...n, ...(i.path || [])],
    o = { ...i, path: a };
  if (i.message !== void 0) return { ...i, path: a, message: i.message };
  let s = ``,
    c = r
      .filter((e) => !!e)
      .slice()
      .reverse();
  for (let e of c) s = e(o, { data: t, defaultError: s }).message;
  return { ...i, path: a, message: s };
};
function J(e, t) {
  let n = Py(),
    r = Fy({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, n, n === My ? void 0 : My].filter(
        (e) => !!e,
      ),
    });
  e.common.issues.push(r);
}
var Iy = class e {
    constructor() {
      this.value = `valid`;
    }
    dirty() {
      this.value === `valid` && (this.value = `dirty`);
    }
    abort() {
      this.value !== `aborted` && (this.value = `aborted`);
    }
    static mergeArray(e, t) {
      let n = [];
      for (let r of t) {
        if (r.status === `aborted`) return Y;
        (r.status === `dirty` && e.dirty(), n.push(r.value));
      }
      return { status: e.value, value: n };
    }
    static async mergeObjectAsync(t, n) {
      let r = [];
      for (let e of n) {
        let t = await e.key,
          n = await e.value;
        r.push({ key: t, value: n });
      }
      return e.mergeObjectSync(t, r);
    }
    static mergeObjectSync(e, t) {
      let n = {};
      for (let r of t) {
        let { key: t, value: i } = r;
        if (t.status === `aborted` || i.status === `aborted`) return Y;
        (t.status === `dirty` && e.dirty(),
          i.status === `dirty` && e.dirty(),
          t.value !== `__proto__` && (i.value !== void 0 || r.alwaysSet) && (n[t.value] = i.value));
      }
      return { status: e.value, value: n };
    }
  },
  Y = Object.freeze({ status: `aborted` }),
  Ly = (e) => ({ status: `dirty`, value: e }),
  Ry = (e) => ({ status: `valid`, value: e }),
  zy = (e) => e.status === `aborted`,
  By = (e) => e.status === `dirty`,
  Vy = (e) => e.status === `valid`,
  Hy = (e) => typeof Promise < `u` && e instanceof Promise,
  X;
(function (e) {
  ((e.errToObj = (e) => (typeof e == `string` ? { message: e } : e || {})),
    (e.toString = (e) => (typeof e == `string` ? e : e?.message)));
})((X ||= {}));
var Uy = class {
    constructor(e, t, n, r) {
      ((this._cachedPath = []),
        (this.parent = e),
        (this.data = t),
        (this._path = n),
        (this._key = r));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Wy = (e, t) => {
    if (Vy(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length) throw Error(`Validation failed but no issues detected.`);
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let t = new jy(e.common.issues);
        return ((this._error = t), this._error);
      },
    };
  };
function Z(e) {
  if (!e) return {};
  let { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (t, i) => {
          let { message: a } = e;
          return t.code === `invalid_enum_value`
            ? { message: a ?? i.defaultError }
            : i.data === void 0
              ? { message: a ?? r ?? i.defaultError }
              : t.code === `invalid_type`
                ? { message: a ?? n ?? i.defaultError }
                : { message: i.defaultError };
        },
        description: i,
      };
}
var Q = class {
    get description() {
      return this._def.description;
    }
    _getType(e) {
      return Ay(e.data);
    }
    _getOrReturnCtx(e, t) {
      return (
        t || {
          common: e.parent.common,
          data: e.data,
          parsedType: Ay(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        }
      );
    }
    _processInputParams(e) {
      return {
        status: new Iy(),
        ctx: {
          common: e.parent.common,
          data: e.data,
          parsedType: Ay(e.data),
          schemaErrorMap: this._def.errorMap,
          path: e.path,
          parent: e.parent,
        },
      };
    }
    _parseSync(e) {
      let t = this._parse(e);
      if (Hy(t)) throw Error(`Synchronous parse encountered promise.`);
      return t;
    }
    _parseAsync(e) {
      let t = this._parse(e);
      return Promise.resolve(t);
    }
    parse(e, t) {
      let n = this.safeParse(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    safeParse(e, t) {
      let n = {
        common: { issues: [], async: t?.async ?? !1, contextualErrorMap: t?.errorMap },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Ay(e),
      };
      return Wy(n, this._parseSync({ data: e, path: n.path, parent: n }));
    }
    "~validate"(e) {
      let t = {
        common: { issues: [], async: !!this[`~standard`].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Ay(e),
      };
      if (!this[`~standard`].async)
        try {
          let n = this._parseSync({ data: e, path: [], parent: t });
          return Vy(n) ? { value: n.value } : { issues: t.common.issues };
        } catch (e) {
          (e?.message?.toLowerCase()?.includes(`encountered`) && (this[`~standard`].async = !0),
            (t.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: e, path: [], parent: t }).then((e) =>
        Vy(e) ? { value: e.value } : { issues: t.common.issues },
      );
    }
    async parseAsync(e, t) {
      let n = await this.safeParseAsync(e, t);
      if (n.success) return n.data;
      throw n.error;
    }
    async safeParseAsync(e, t) {
      let n = {
          common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
          path: t?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: e,
          parsedType: Ay(e),
        },
        r = this._parse({ data: e, path: n.path, parent: n });
      return Wy(n, await (Hy(r) ? r : Promise.resolve(r)));
    }
    refine(e, t) {
      let n = (e) =>
        typeof t == `string` || t === void 0 ? { message: t } : typeof t == `function` ? t(e) : t;
      return this._refinement((t, r) => {
        let i = e(t),
          a = () => r.addIssue({ code: q.custom, ...n(t) });
        return typeof Promise < `u` && i instanceof Promise
          ? i.then((e) => (e ? !0 : (a(), !1)))
          : i
            ? !0
            : (a(), !1);
      });
    }
    refinement(e, t) {
      return this._refinement((n, r) =>
        e(n) ? !0 : (r.addIssue(typeof t == `function` ? t(n, r) : t), !1),
      );
    }
    _refinement(e) {
      return new qb({
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `refinement`, refinement: e },
      });
    }
    superRefine(e) {
      return this._refinement(e);
    }
    constructor(e) {
      ((this.spa = this.safeParseAsync),
        (this._def = e),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this[`~standard`] = { version: 1, vendor: `zod`, validate: (e) => this[`~validate`](e) }));
    }
    optional() {
      return Jb.create(this, this._def);
    }
    nullable() {
      return Yb.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Ob.create(this);
    }
    promise() {
      return Kb.create(this, this._def);
    }
    or(e) {
      return jb.create([this, e], this._def);
    }
    and(e) {
      return Fb.create(this, e, this._def);
    }
    transform(e) {
      return new qb({
        ...Z(this._def),
        schema: this,
        typeName: $.ZodEffects,
        effect: { type: `transform`, transform: e },
      });
    }
    default(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Xb({ ...Z(this._def), innerType: this, defaultValue: t, typeName: $.ZodDefault });
    }
    brand() {
      return new $b({ typeName: $.ZodBranded, type: this, ...Z(this._def) });
    }
    catch(e) {
      let t = typeof e == `function` ? e : () => e;
      return new Zb({ ...Z(this._def), innerType: this, catchValue: t, typeName: $.ZodCatch });
    }
    describe(e) {
      let t = this.constructor;
      return new t({ ...this._def, description: e });
    }
    pipe(e) {
      return ex.create(this, e);
    }
    readonly() {
      return tx.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  Gy = /^c[^\s-]{8,}$/i,
  Ky = /^[0-9a-z]+$/,
  qy = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Jy = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Yy = /^[a-z0-9_-]{21}$/i,
  Xy = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Zy =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Qy = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  $y = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,
  eb,
  tb =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  nb =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  rb =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  ib =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  ab = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  ob = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  sb = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,
  cb = RegExp(`^${sb}$`);
function lb(e) {
  let t = `[0-5]\\d`;
  e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : (e.precision ?? (t = `${t}(\\.\\d+)?`));
  let n = e.precision ? `+` : `?`;
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`;
}
function ub(e) {
  return RegExp(`^${lb(e)}$`);
}
function db(e) {
  let t = `${sb}T${lb(e)}`,
    n = [];
  return (
    n.push(e.local ? `Z?` : `Z`),
    e.offset && n.push(`([+-]\\d{2}:?\\d{2})`),
    (t = `${t}(${n.join(`|`)})`),
    RegExp(`^${t}$`)
  );
}
function fb(e, t) {
  return !!(((t === `v4` || !t) && tb.test(e)) || ((t === `v6` || !t) && rb.test(e)));
}
function pb(e, t) {
  if (!Xy.test(e)) return !1;
  try {
    let [n] = e.split(`.`);
    if (!n) return !1;
    let r = n
        .replace(/-/g, `+`)
        .replace(/_/g, `/`)
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), `=`),
      i = JSON.parse(atob(r));
    return !(
      typeof i != `object` ||
      !i ||
      (`typ` in i && i?.typ !== `JWT`) ||
      !i.alg ||
      (t && i.alg !== t)
    );
  } catch {
    return !1;
  }
}
function mb(e, t) {
  return !!(((t === `v4` || !t) && nb.test(e)) || ((t === `v6` || !t) && ib.test(e)));
}
var hb = class e extends Q {
  _parse(e) {
    if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== K.string)) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.string, received: t.parsedType }), Y);
    }
    let t = new Iy(),
      n;
    for (let r of this._def.checks)
      if (r.kind === `min`)
        e.data.length < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_small,
            minimum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `max`)
        e.data.length > r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_big,
            maximum: r.value,
            type: `string`,
            inclusive: !0,
            exact: !1,
            message: r.message,
          }),
          t.dirty());
      else if (r.kind === `length`) {
        let i = e.data.length > r.value,
          a = e.data.length < r.value;
        (i || a) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? J(n, {
                code: q.too_big,
                maximum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              })
            : a &&
              J(n, {
                code: q.too_small,
                minimum: r.value,
                type: `string`,
                inclusive: !0,
                exact: !0,
                message: r.message,
              }),
          t.dirty());
      } else if (r.kind === `email`)
        Qy.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `email`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `emoji`)
        ((eb ||= new RegExp($y, `u`)),
          eb.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            J(n, { validation: `emoji`, code: q.invalid_string, message: r.message }),
            t.dirty()));
      else if (r.kind === `uuid`)
        Jy.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `uuid`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `nanoid`)
        Yy.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `nanoid`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid`)
        Gy.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `cuid`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `cuid2`)
        Ky.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `cuid2`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `ulid`)
        qy.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          J(n, { validation: `ulid`, code: q.invalid_string, message: r.message }),
          t.dirty());
      else if (r.kind === `url`)
        try {
          new URL(e.data);
        } catch {
          ((n = this._getOrReturnCtx(e, n)),
            J(n, { validation: `url`, code: q.invalid_string, message: r.message }),
            t.dirty());
        }
      else
        r.kind === `regex`
          ? ((r.regex.lastIndex = 0),
            r.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              J(n, { validation: `regex`, code: q.invalid_string, message: r.message }),
              t.dirty()))
          : r.kind === `trim`
            ? (e.data = e.data.trim())
            : r.kind === `includes`
              ? e.data.includes(r.value, r.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                J(n, {
                  code: q.invalid_string,
                  validation: { includes: r.value, position: r.position },
                  message: r.message,
                }),
                t.dirty())
              : r.kind === `toLowerCase`
                ? (e.data = e.data.toLowerCase())
                : r.kind === `toUpperCase`
                  ? (e.data = e.data.toUpperCase())
                  : r.kind === `startsWith`
                    ? e.data.startsWith(r.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      J(n, {
                        code: q.invalid_string,
                        validation: { startsWith: r.value },
                        message: r.message,
                      }),
                      t.dirty())
                    : r.kind === `endsWith`
                      ? e.data.endsWith(r.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        J(n, {
                          code: q.invalid_string,
                          validation: { endsWith: r.value },
                          message: r.message,
                        }),
                        t.dirty())
                      : r.kind === `datetime`
                        ? db(r).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          J(n, {
                            code: q.invalid_string,
                            validation: `datetime`,
                            message: r.message,
                          }),
                          t.dirty())
                        : r.kind === `date`
                          ? cb.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            J(n, {
                              code: q.invalid_string,
                              validation: `date`,
                              message: r.message,
                            }),
                            t.dirty())
                          : r.kind === `time`
                            ? ub(r).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              J(n, {
                                code: q.invalid_string,
                                validation: `time`,
                                message: r.message,
                              }),
                              t.dirty())
                            : r.kind === `duration`
                              ? Zy.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                J(n, {
                                  validation: `duration`,
                                  code: q.invalid_string,
                                  message: r.message,
                                }),
                                t.dirty())
                              : r.kind === `ip`
                                ? fb(e.data, r.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  J(n, {
                                    validation: `ip`,
                                    code: q.invalid_string,
                                    message: r.message,
                                  }),
                                  t.dirty())
                                : r.kind === `jwt`
                                  ? pb(e.data, r.alg) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    J(n, {
                                      validation: `jwt`,
                                      code: q.invalid_string,
                                      message: r.message,
                                    }),
                                    t.dirty())
                                  : r.kind === `cidr`
                                    ? mb(e.data, r.version) ||
                                      ((n = this._getOrReturnCtx(e, n)),
                                      J(n, {
                                        validation: `cidr`,
                                        code: q.invalid_string,
                                        message: r.message,
                                      }),
                                      t.dirty())
                                    : r.kind === `base64`
                                      ? ab.test(e.data) ||
                                        ((n = this._getOrReturnCtx(e, n)),
                                        J(n, {
                                          validation: `base64`,
                                          code: q.invalid_string,
                                          message: r.message,
                                        }),
                                        t.dirty())
                                      : r.kind === `base64url`
                                        ? ob.test(e.data) ||
                                          ((n = this._getOrReturnCtx(e, n)),
                                          J(n, {
                                            validation: `base64url`,
                                            code: q.invalid_string,
                                            message: r.message,
                                          }),
                                          t.dirty())
                                        : G.assertNever(r);
    return { status: t.value, value: e.data };
  }
  _regex(e, t, n) {
    return this.refinement((t) => e.test(t), {
      validation: t,
      code: q.invalid_string,
      ...X.errToObj(n),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(e) {
    return this._addCheck({ kind: `email`, ...X.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: `url`, ...X.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: `emoji`, ...X.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: `uuid`, ...X.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: `nanoid`, ...X.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: `cuid`, ...X.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: `cuid2`, ...X.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: `ulid`, ...X.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: `base64`, ...X.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: `base64url`, ...X.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: `jwt`, ...X.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: `ip`, ...X.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: `cidr`, ...X.errToObj(e) });
  }
  datetime(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `datetime`, precision: null, offset: !1, local: !1, message: e })
      : this._addCheck({
          kind: `datetime`,
          precision: e?.precision === void 0 ? null : e?.precision,
          offset: e?.offset ?? !1,
          local: e?.local ?? !1,
          ...X.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: `date`, message: e });
  }
  time(e) {
    return typeof e == `string`
      ? this._addCheck({ kind: `time`, precision: null, message: e })
      : this._addCheck({
          kind: `time`,
          precision: e?.precision === void 0 ? null : e?.precision,
          ...X.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: `duration`, ...X.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: `regex`, regex: e, ...X.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({
      kind: `includes`,
      value: e,
      position: t?.position,
      ...X.errToObj(t?.message),
    });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: `startsWith`, value: e, ...X.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: `endsWith`, value: e, ...X.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e, ...X.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e, ...X.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: `length`, value: e, ...X.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, X.errToObj(e));
  }
  trim() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `trim` }] });
  }
  toLowerCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toLowerCase` }] });
  }
  toUpperCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: `toUpperCase` }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === `datetime`);
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === `date`);
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === `time`);
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === `duration`);
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === `email`);
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === `url`);
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === `emoji`);
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === `uuid`);
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === `nanoid`);
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === `cuid`);
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === `cuid2`);
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === `ulid`);
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === `ip`);
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === `cidr`);
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === `base64`);
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === `base64url`);
  }
  get minLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
hb.create = (e) => new hb({ checks: [], typeName: $.ZodString, coerce: e?.coerce ?? !1, ...Z(e) });
function gb(e, t) {
  let n = (e.toString().split(`.`)[1] || ``).length,
    r = (t.toString().split(`.`)[1] || ``).length,
    i = n > r ? n : r;
  return (
    (Number.parseInt(e.toFixed(i).replace(`.`, ``)) %
      Number.parseInt(t.toFixed(i).replace(`.`, ``))) /
    10 ** i
  );
}
var _b = class e extends Q {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== K.number)) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.number, received: t.parsedType }), Y);
    }
    let t,
      n = new Iy();
    for (let r of this._def.checks)
      r.kind === `int`
        ? G.isInteger(e.data) ||
          ((t = this._getOrReturnCtx(e, t)),
          J(t, {
            code: q.invalid_type,
            expected: `integer`,
            received: `float`,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `min`
          ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            J(t, {
              code: q.too_small,
              minimum: r.value,
              type: `number`,
              inclusive: r.inclusive,
              exact: !1,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `max`
            ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
              ((t = this._getOrReturnCtx(e, t)),
              J(t, {
                code: q.too_big,
                maximum: r.value,
                type: `number`,
                inclusive: r.inclusive,
                exact: !1,
                message: r.message,
              }),
              n.dirty())
            : r.kind === `multipleOf`
              ? gb(e.data, r.value) !== 0 &&
                ((t = this._getOrReturnCtx(e, t)),
                J(t, { code: q.not_multiple_of, multipleOf: r.value, message: r.message }),
                n.dirty())
              : r.kind === `finite`
                ? Number.isFinite(e.data) ||
                  ((t = this._getOrReturnCtx(e, t)),
                  J(t, { code: q.not_finite, message: r.message }),
                  n.dirty())
                : G.assertNever(r);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, X.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: X.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(e) {
    return this._addCheck({ kind: `int`, message: X.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !1, message: X.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !1, message: X.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: 0, inclusive: !0, message: X.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: 0, inclusive: !0, message: X.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: X.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: `finite`, message: X.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: `min`,
      inclusive: !0,
      value: -(2 ** 53 - 1),
      message: X.toString(e),
    })._addCheck({ kind: `max`, inclusive: !0, value: 2 ** 53 - 1, message: X.toString(e) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) => e.kind === `int` || (e.kind === `multipleOf` && G.isInteger(e.value)),
    );
  }
  get isFinite() {
    let e = null,
      t = null;
    for (let n of this._def.checks)
      if (n.kind === `finite` || n.kind === `int` || n.kind === `multipleOf`) return !0;
      else
        n.kind === `min`
          ? (t === null || n.value > t) && (t = n.value)
          : n.kind === `max` && (e === null || n.value < e) && (e = n.value);
    return Number.isFinite(t) && Number.isFinite(e);
  }
};
_b.create = (e) => new _b({ checks: [], typeName: $.ZodNumber, coerce: e?.coerce || !1, ...Z(e) });
var vb = class e extends Q {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== K.bigint) return this._getInvalidInput(e);
    let t,
      n = new Iy();
    for (let r of this._def.checks)
      r.kind === `min`
        ? (r.inclusive ? e.data < r.value : e.data <= r.value) &&
          ((t = this._getOrReturnCtx(e, t)),
          J(t, {
            code: q.too_small,
            type: `bigint`,
            minimum: r.value,
            inclusive: r.inclusive,
            message: r.message,
          }),
          n.dirty())
        : r.kind === `max`
          ? (r.inclusive ? e.data > r.value : e.data >= r.value) &&
            ((t = this._getOrReturnCtx(e, t)),
            J(t, {
              code: q.too_big,
              type: `bigint`,
              maximum: r.value,
              inclusive: r.inclusive,
              message: r.message,
            }),
            n.dirty())
          : r.kind === `multipleOf`
            ? e.data % r.value !== BigInt(0) &&
              ((t = this._getOrReturnCtx(e, t)),
              J(t, { code: q.not_multiple_of, multipleOf: r.value, message: r.message }),
              n.dirty())
            : G.assertNever(r);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    let t = this._getOrReturnCtx(e);
    return (J(t, { code: q.invalid_type, expected: K.bigint, received: t.parsedType }), Y);
  }
  gte(e, t) {
    return this.setLimit(`min`, e, !0, X.toString(t));
  }
  gt(e, t) {
    return this.setLimit(`min`, e, !1, X.toString(t));
  }
  lte(e, t) {
    return this.setLimit(`max`, e, !0, X.toString(t));
  }
  lt(e, t) {
    return this.setLimit(`max`, e, !1, X.toString(t));
  }
  setLimit(t, n, r, i) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: n, inclusive: r, message: X.toString(i) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !1, message: X.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !1, message: X.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: `max`, value: BigInt(0), inclusive: !0, message: X.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: `min`, value: BigInt(0), inclusive: !0, message: X.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: `multipleOf`, value: e, message: X.toString(t) });
  }
  get minValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e;
  }
};
vb.create = (e) => new vb({ checks: [], typeName: $.ZodBigInt, coerce: e?.coerce ?? !1, ...Z(e) });
var yb = class extends Q {
  _parse(e) {
    if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== K.boolean)) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.boolean, received: t.parsedType }), Y);
    }
    return Ry(e.data);
  }
};
yb.create = (e) => new yb({ typeName: $.ZodBoolean, coerce: e?.coerce || !1, ...Z(e) });
var bb = class e extends Q {
  _parse(e) {
    if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== K.date)) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.date, received: t.parsedType }), Y);
    }
    if (Number.isNaN(e.data.getTime()))
      return (J(this._getOrReturnCtx(e), { code: q.invalid_date }), Y);
    let t = new Iy(),
      n;
    for (let r of this._def.checks)
      r.kind === `min`
        ? e.data.getTime() < r.value &&
          ((n = this._getOrReturnCtx(e, n)),
          J(n, {
            code: q.too_small,
            message: r.message,
            inclusive: !0,
            exact: !1,
            minimum: r.value,
            type: `date`,
          }),
          t.dirty())
        : r.kind === `max`
          ? e.data.getTime() > r.value &&
            ((n = this._getOrReturnCtx(e, n)),
            J(n, {
              code: q.too_big,
              message: r.message,
              inclusive: !0,
              exact: !1,
              maximum: r.value,
              type: `date`,
            }),
            t.dirty())
          : G.assertNever(r);
    return { status: t.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(e, t) {
    return this._addCheck({ kind: `min`, value: e.getTime(), message: X.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: `max`, value: e.getTime(), message: X.toString(t) });
  }
  get minDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `min` && (e === null || t.value > e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
  get maxDate() {
    let e = null;
    for (let t of this._def.checks)
      t.kind === `max` && (e === null || t.value < e) && (e = t.value);
    return e == null ? null : new Date(e);
  }
};
bb.create = (e) => new bb({ checks: [], coerce: e?.coerce || !1, typeName: $.ZodDate, ...Z(e) });
var xb = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.symbol) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.symbol, received: t.parsedType }), Y);
    }
    return Ry(e.data);
  }
};
xb.create = (e) => new xb({ typeName: $.ZodSymbol, ...Z(e) });
var Sb = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.undefined, received: t.parsedType }), Y);
    }
    return Ry(e.data);
  }
};
Sb.create = (e) => new Sb({ typeName: $.ZodUndefined, ...Z(e) });
var Cb = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.null) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.null, received: t.parsedType }), Y);
    }
    return Ry(e.data);
  }
};
Cb.create = (e) => new Cb({ typeName: $.ZodNull, ...Z(e) });
var wb = class extends Q {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(e) {
    return Ry(e.data);
  }
};
wb.create = (e) => new wb({ typeName: $.ZodAny, ...Z(e) });
var Tb = class extends Q {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(e) {
    return Ry(e.data);
  }
};
Tb.create = (e) => new Tb({ typeName: $.ZodUnknown, ...Z(e) });
var Eb = class extends Q {
  _parse(e) {
    let t = this._getOrReturnCtx(e);
    return (J(t, { code: q.invalid_type, expected: K.never, received: t.parsedType }), Y);
  }
};
Eb.create = (e) => new Eb({ typeName: $.ZodNever, ...Z(e) });
var Db = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.undefined) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.void, received: t.parsedType }), Y);
    }
    return Ry(e.data);
  }
};
Db.create = (e) => new Db({ typeName: $.ZodVoid, ...Z(e) });
var Ob = class e extends Q {
  _parse(e) {
    let { ctx: t, status: n } = this._processInputParams(e),
      r = this._def;
    if (t.parsedType !== K.array)
      return (J(t, { code: q.invalid_type, expected: K.array, received: t.parsedType }), Y);
    if (r.exactLength !== null) {
      let e = t.data.length > r.exactLength.value,
        i = t.data.length < r.exactLength.value;
      (e || i) &&
        (J(t, {
          code: e ? q.too_big : q.too_small,
          minimum: i ? r.exactLength.value : void 0,
          maximum: e ? r.exactLength.value : void 0,
          type: `array`,
          inclusive: !0,
          exact: !0,
          message: r.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (r.minLength !== null &&
        t.data.length < r.minLength.value &&
        (J(t, {
          code: q.too_small,
          minimum: r.minLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.minLength.message,
        }),
        n.dirty()),
      r.maxLength !== null &&
        t.data.length > r.maxLength.value &&
        (J(t, {
          code: q.too_big,
          maximum: r.maxLength.value,
          type: `array`,
          inclusive: !0,
          exact: !1,
          message: r.maxLength.message,
        }),
        n.dirty()),
      t.common.async)
    )
      return Promise.all(
        [...t.data].map((e, n) => r.type._parseAsync(new Uy(t, e, t.path, n))),
      ).then((e) => Iy.mergeArray(n, e));
    let i = [...t.data].map((e, n) => r.type._parseSync(new Uy(t, e, t.path, n)));
    return Iy.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new e({ ...this._def, minLength: { value: t, message: X.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxLength: { value: t, message: X.toString(n) } });
  }
  length(t, n) {
    return new e({ ...this._def, exactLength: { value: t, message: X.toString(n) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
Ob.create = (e, t) =>
  new Ob({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: $.ZodArray,
    ...Z(t),
  });
function kb(e) {
  if (e instanceof Ab) {
    let t = {};
    for (let n in e.shape) {
      let r = e.shape[n];
      t[n] = Jb.create(kb(r));
    }
    return new Ab({ ...e._def, shape: () => t });
  } else if (e instanceof Ob) return new Ob({ ...e._def, type: kb(e.element) });
  else if (e instanceof Jb) return Jb.create(kb(e.unwrap()));
  else if (e instanceof Yb) return Yb.create(kb(e.unwrap()));
  else if (e instanceof Ib) return Ib.create(e.items.map((e) => kb(e)));
  else return e;
}
var Ab = class e extends Q {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let e = this._def.shape(),
      t = G.objectKeys(e);
    return ((this._cached = { shape: e, keys: t }), this._cached);
  }
  _parse(e) {
    if (this._getType(e) !== K.object) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.object, received: t.parsedType }), Y);
    }
    let { status: t, ctx: n } = this._processInputParams(e),
      { shape: r, keys: i } = this._getCached(),
      a = [];
    if (!(this._def.catchall instanceof Eb && this._def.unknownKeys === `strip`))
      for (let e in n.data) i.includes(e) || a.push(e);
    let o = [];
    for (let e of i) {
      let t = r[e],
        i = n.data[e];
      o.push({
        key: { status: `valid`, value: e },
        value: t._parse(new Uy(n, i, n.path, e)),
        alwaysSet: e in n.data,
      });
    }
    if (this._def.catchall instanceof Eb) {
      let e = this._def.unknownKeys;
      if (e === `passthrough`)
        for (let e of a)
          o.push({
            key: { status: `valid`, value: e },
            value: { status: `valid`, value: n.data[e] },
          });
      else if (e === `strict`)
        a.length > 0 && (J(n, { code: q.unrecognized_keys, keys: a }), t.dirty());
      else if (e !== `strip`) throw Error(`Internal ZodObject error: invalid unknownKeys value.`);
    } else {
      let e = this._def.catchall;
      for (let t of a) {
        let r = n.data[t];
        o.push({
          key: { status: `valid`, value: t },
          value: e._parse(new Uy(n, r, n.path, t)),
          alwaysSet: t in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let e = [];
            for (let t of o) {
              let n = await t.key,
                r = await t.value;
              e.push({ key: n, value: r, alwaysSet: t.alwaysSet });
            }
            return e;
          })
          .then((e) => Iy.mergeObjectSync(t, e))
      : Iy.mergeObjectSync(t, o);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      X.errToObj,
      new e({
        ...this._def,
        unknownKeys: `strict`,
        ...(t === void 0
          ? {}
          : {
              errorMap: (e, n) => {
                let r = this._def.errorMap?.(e, n).message ?? n.defaultError;
                return e.code === `unrecognized_keys`
                  ? { message: X.errToObj(t).message ?? r }
                  : { message: r };
              },
            }),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: `strip` });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: `passthrough` });
  }
  extend(t) {
    return new e({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: $.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let n = {};
    for (let e of G.objectKeys(t)) t[e] && this.shape[e] && (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  omit(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape)) t[e] || (n[e] = this.shape[e]);
    return new e({ ...this._def, shape: () => n });
  }
  deepPartial() {
    return kb(this);
  }
  partial(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape)) {
      let r = this.shape[e];
      t && !t[e] ? (n[e] = r) : (n[e] = r.optional());
    }
    return new e({ ...this._def, shape: () => n });
  }
  required(t) {
    let n = {};
    for (let e of G.objectKeys(this.shape))
      if (t && !t[e]) n[e] = this.shape[e];
      else {
        let t = this.shape[e];
        for (; t instanceof Jb;) t = t._def.innerType;
        n[e] = t;
      }
    return new e({ ...this._def, shape: () => n });
  }
  keyof() {
    return Ub(G.objectKeys(this.shape));
  }
};
((Ab.create = (e, t) =>
  new Ab({
    shape: () => e,
    unknownKeys: `strip`,
    catchall: Eb.create(),
    typeName: $.ZodObject,
    ...Z(t),
  })),
  (Ab.strictCreate = (e, t) =>
    new Ab({
      shape: () => e,
      unknownKeys: `strict`,
      catchall: Eb.create(),
      typeName: $.ZodObject,
      ...Z(t),
    })),
  (Ab.lazycreate = (e, t) =>
    new Ab({
      shape: e,
      unknownKeys: `strip`,
      catchall: Eb.create(),
      typeName: $.ZodObject,
      ...Z(t),
    })));
var jb = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = this._def.options;
    function r(e) {
      for (let t of e) if (t.result.status === `valid`) return t.result;
      for (let n of e)
        if (n.result.status === `dirty`)
          return (t.common.issues.push(...n.ctx.common.issues), n.result);
      let n = e.map((e) => new jy(e.ctx.common.issues));
      return (J(t, { code: q.invalid_union, unionErrors: n }), Y);
    }
    if (t.common.async)
      return Promise.all(
        n.map(async (e) => {
          let n = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return { result: await e._parseAsync({ data: t.data, path: t.path, parent: n }), ctx: n };
        }),
      ).then(r);
    {
      let e,
        r = [];
      for (let i of n) {
        let n = { ...t, common: { ...t.common, issues: [] }, parent: null },
          a = i._parseSync({ data: t.data, path: t.path, parent: n });
        if (a.status === `valid`) return a;
        (a.status === `dirty` && !e && (e = { result: a, ctx: n }),
          n.common.issues.length && r.push(n.common.issues));
      }
      if (e) return (t.common.issues.push(...e.ctx.common.issues), e.result);
      let i = r.map((e) => new jy(e));
      return (J(t, { code: q.invalid_union, unionErrors: i }), Y);
    }
  }
  get options() {
    return this._def.options;
  }
};
jb.create = (e, t) => new jb({ options: e, typeName: $.ZodUnion, ...Z(t) });
var Mb = (e) =>
    e instanceof Vb
      ? Mb(e.schema)
      : e instanceof qb
        ? Mb(e.innerType())
        : e instanceof Hb
          ? [e.value]
          : e instanceof Wb
            ? e.options
            : e instanceof Gb
              ? G.objectValues(e.enum)
              : e instanceof Xb
                ? Mb(e._def.innerType)
                : e instanceof Sb
                  ? [void 0]
                  : e instanceof Cb
                    ? [null]
                    : e instanceof Jb
                      ? [void 0, ...Mb(e.unwrap())]
                      : e instanceof Yb
                        ? [null, ...Mb(e.unwrap())]
                        : e instanceof $b || e instanceof tx
                          ? Mb(e.unwrap())
                          : e instanceof Zb
                            ? Mb(e._def.innerType)
                            : [],
  Nb = class e extends Q {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== K.object)
        return (J(t, { code: q.invalid_type, expected: K.object, received: t.parsedType }), Y);
      let n = this.discriminator,
        r = t.data[n],
        i = this.optionsMap.get(r);
      return i
        ? t.common.async
          ? i._parseAsync({ data: t.data, path: t.path, parent: t })
          : i._parseSync({ data: t.data, path: t.path, parent: t })
        : (J(t, {
            code: q.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [n],
          }),
          Y);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, n, r) {
      let i = new Map();
      for (let e of n) {
        let n = Mb(e.shape[t]);
        if (!n.length)
          throw Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
          );
        for (let r of n) {
          if (i.has(r))
            throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);
          i.set(r, e);
        }
      }
      return new e({
        typeName: $.ZodDiscriminatedUnion,
        discriminator: t,
        options: n,
        optionsMap: i,
        ...Z(r),
      });
    }
  };
function Pb(e, t) {
  let n = Ay(e),
    r = Ay(t);
  if (e === t) return { valid: !0, data: e };
  if (n === K.object && r === K.object) {
    let n = G.objectKeys(t),
      r = G.objectKeys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Pb(e[n], t[n]);
      if (!r.valid) return { valid: !1 };
      i[n] = r.data;
    }
    return { valid: !0, data: i };
  } else if (n === K.array && r === K.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let r = 0; r < e.length; r++) {
      let i = e[r],
        a = t[r],
        o = Pb(i, a);
      if (!o.valid) return { valid: !1 };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  } else if (n === K.date && r === K.date && +e == +t) return { valid: !0, data: e };
  else return { valid: !1 };
}
var Fb = class extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = (e, r) => {
        if (zy(e) || zy(r)) return Y;
        let i = Pb(e.value, r.value);
        return i.valid
          ? ((By(e) || By(r)) && t.dirty(), { status: t.value, value: i.data })
          : (J(n, { code: q.invalid_intersection_types }), Y);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({ data: n.data, path: n.path, parent: n }),
        ]).then(([e, t]) => r(e, t))
      : r(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n }),
        );
  }
};
Fb.create = (e, t, n) => new Fb({ left: e, right: t, typeName: $.ZodIntersection, ...Z(n) });
var Ib = class e extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.array)
      return (J(n, { code: q.invalid_type, expected: K.array, received: n.parsedType }), Y);
    if (n.data.length < this._def.items.length)
      return (
        J(n, {
          code: q.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: `array`,
        }),
        Y
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (J(n, {
        code: q.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: `array`,
      }),
      t.dirty());
    let r = [...n.data]
      .map((e, t) => {
        let r = this._def.items[t] || this._def.rest;
        return r ? r._parse(new Uy(n, e, n.path, t)) : null;
      })
      .filter((e) => !!e);
    return n.common.async ? Promise.all(r).then((e) => Iy.mergeArray(t, e)) : Iy.mergeArray(t, r);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
Ib.create = (e, t) => {
  if (!Array.isArray(e)) throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);
  return new Ib({ items: e, typeName: $.ZodTuple, rest: null, ...Z(t) });
};
var Lb = class e extends Q {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== K.object)
        return (J(n, { code: q.invalid_type, expected: K.object, received: n.parsedType }), Y);
      let r = [],
        i = this._def.keyType,
        a = this._def.valueType;
      for (let e in n.data)
        r.push({
          key: i._parse(new Uy(n, e, n.path, e)),
          value: a._parse(new Uy(n, n.data[e], n.path, e)),
          alwaysSet: e in n.data,
        });
      return n.common.async ? Iy.mergeObjectAsync(t, r) : Iy.mergeObjectSync(t, r);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, n, r) {
      return n instanceof Q
        ? new e({ keyType: t, valueType: n, typeName: $.ZodRecord, ...Z(r) })
        : new e({ keyType: hb.create(), valueType: t, typeName: $.ZodRecord, ...Z(n) });
    }
  },
  Rb = class extends Q {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.parsedType !== K.map)
        return (J(n, { code: q.invalid_type, expected: K.map, received: n.parsedType }), Y);
      let r = this._def.keyType,
        i = this._def.valueType,
        a = [...n.data.entries()].map(([e, t], a) => ({
          key: r._parse(new Uy(n, e, n.path, [a, `key`])),
          value: i._parse(new Uy(n, t, n.path, [a, `value`])),
        }));
      if (n.common.async) {
        let e = new Map();
        return Promise.resolve().then(async () => {
          for (let n of a) {
            let r = await n.key,
              i = await n.value;
            if (r.status === `aborted` || i.status === `aborted`) return Y;
            ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
          }
          return { status: t.value, value: e };
        });
      } else {
        let e = new Map();
        for (let n of a) {
          let r = n.key,
            i = n.value;
          if (r.status === `aborted` || i.status === `aborted`) return Y;
          ((r.status === `dirty` || i.status === `dirty`) && t.dirty(), e.set(r.value, i.value));
        }
        return { status: t.value, value: e };
      }
    }
  };
Rb.create = (e, t, n) => new Rb({ valueType: t, keyType: e, typeName: $.ZodMap, ...Z(n) });
var zb = class e extends Q {
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== K.set)
      return (J(n, { code: q.invalid_type, expected: K.set, received: n.parsedType }), Y);
    let r = this._def;
    (r.minSize !== null &&
      n.data.size < r.minSize.value &&
      (J(n, {
        code: q.too_small,
        minimum: r.minSize.value,
        type: `set`,
        inclusive: !0,
        exact: !1,
        message: r.minSize.message,
      }),
      t.dirty()),
      r.maxSize !== null &&
        n.data.size > r.maxSize.value &&
        (J(n, {
          code: q.too_big,
          maximum: r.maxSize.value,
          type: `set`,
          inclusive: !0,
          exact: !1,
          message: r.maxSize.message,
        }),
        t.dirty()));
    let i = this._def.valueType;
    function a(e) {
      let n = new Set();
      for (let r of e) {
        if (r.status === `aborted`) return Y;
        (r.status === `dirty` && t.dirty(), n.add(r.value));
      }
      return { status: t.value, value: n };
    }
    let o = [...n.data.values()].map((e, t) => i._parse(new Uy(n, e, n.path, t)));
    return n.common.async ? Promise.all(o).then((e) => a(e)) : a(o);
  }
  min(t, n) {
    return new e({ ...this._def, minSize: { value: t, message: X.toString(n) } });
  }
  max(t, n) {
    return new e({ ...this._def, maxSize: { value: t, message: X.toString(n) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
};
zb.create = (e, t) =>
  new zb({ valueType: e, minSize: null, maxSize: null, typeName: $.ZodSet, ...Z(t) });
var Bb = class e extends Q {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      if (t.parsedType !== K.function)
        return (J(t, { code: q.invalid_type, expected: K.function, received: t.parsedType }), Y);
      function n(e, n) {
        return Fy({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Py(), My].filter((e) => !!e),
          issueData: { code: q.invalid_arguments, argumentsError: n },
        });
      }
      function r(e, n) {
        return Fy({
          data: e,
          path: t.path,
          errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, Py(), My].filter((e) => !!e),
          issueData: { code: q.invalid_return_type, returnTypeError: n },
        });
      }
      let i = { errorMap: t.common.contextualErrorMap },
        a = t.data;
      if (this._def.returns instanceof Kb) {
        let e = this;
        return Ry(async function (...t) {
          let o = new jy([]),
            s = await e._def.args.parseAsync(t, i).catch((e) => {
              throw (o.addIssue(n(t, e)), o);
            }),
            c = await Reflect.apply(a, this, s);
          return await e._def.returns._def.type.parseAsync(c, i).catch((e) => {
            throw (o.addIssue(r(c, e)), o);
          });
        });
      } else {
        let e = this;
        return Ry(function (...t) {
          let o = e._def.args.safeParse(t, i);
          if (!o.success) throw new jy([n(t, o.error)]);
          let s = Reflect.apply(a, this, o.data),
            c = e._def.returns.safeParse(s, i);
          if (!c.success) throw new jy([r(s, c.error)]);
          return c.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: Ib.create(t).rest(Tb.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(e) {
      return this.parse(e);
    }
    strictImplement(e) {
      return this.parse(e);
    }
    static create(t, n, r) {
      return new e({
        args: t || Ib.create([]).rest(Tb.create()),
        returns: n || Tb.create(),
        typeName: $.ZodFunction,
        ...Z(r),
      });
    }
  },
  Vb = class extends Q {
    get schema() {
      return this._def.getter();
    }
    _parse(e) {
      let { ctx: t } = this._processInputParams(e);
      return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
    }
  };
Vb.create = (e, t) => new Vb({ getter: e, typeName: $.ZodLazy, ...Z(t) });
var Hb = class extends Q {
  _parse(e) {
    if (e.data !== this._def.value) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { received: t.data, code: q.invalid_literal, expected: this._def.value }), Y);
    }
    return { status: `valid`, value: e.data };
  }
  get value() {
    return this._def.value;
  }
};
Hb.create = (e, t) => new Hb({ value: e, typeName: $.ZodLiteral, ...Z(t) });
function Ub(e, t) {
  return new Wb({ values: e, typeName: $.ZodEnum, ...Z(t) });
}
var Wb = class e extends Q {
  _parse(e) {
    if (typeof e.data != `string`) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (J(t, { expected: G.joinValues(n), received: t.parsedType, code: q.invalid_type }), Y);
    }
    if (((this._cache ||= new Set(this._def.values)), !this._cache.has(e.data))) {
      let t = this._getOrReturnCtx(e),
        n = this._def.values;
      return (J(t, { received: t.data, code: q.invalid_enum_value, options: n }), Y);
    }
    return Ry(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    let e = {};
    for (let t of this._def.values) e[t] = t;
    return e;
  }
  extract(t, n = this._def) {
    return e.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return e.create(
      this.options.filter((e) => !t.includes(e)),
      { ...this._def, ...n },
    );
  }
};
Wb.create = Ub;
var Gb = class extends Q {
  _parse(e) {
    let t = G.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== K.string && n.parsedType !== K.number) {
      let e = G.objectValues(t);
      return (J(n, { expected: G.joinValues(e), received: n.parsedType, code: q.invalid_type }), Y);
    }
    if (
      ((this._cache ||= new Set(G.getValidEnumValues(this._def.values))), !this._cache.has(e.data))
    ) {
      let e = G.objectValues(t);
      return (J(n, { received: n.data, code: q.invalid_enum_value, options: e }), Y);
    }
    return Ry(e.data);
  }
  get enum() {
    return this._def.values;
  }
};
Gb.create = (e, t) => new Gb({ values: e, typeName: $.ZodNativeEnum, ...Z(t) });
var Kb = class extends Q {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    let { ctx: t } = this._processInputParams(e);
    return t.parsedType !== K.promise && t.common.async === !1
      ? (J(t, { code: q.invalid_type, expected: K.promise, received: t.parsedType }), Y)
      : Ry(
          (t.parsedType === K.promise ? t.data : Promise.resolve(t.data)).then((e) =>
            this._def.type.parseAsync(e, { path: t.path, errorMap: t.common.contextualErrorMap }),
          ),
        );
  }
};
Kb.create = (e, t) => new Kb({ type: e, typeName: $.ZodPromise, ...Z(t) });
var qb = class extends Q {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === $.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    let { status: t, ctx: n } = this._processInputParams(e),
      r = this._def.effect || null,
      i = {
        addIssue: (e) => {
          (J(n, e), e.fatal ? t.abort() : t.dirty());
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), r.type === `preprocess`)) {
      let e = r.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(e).then(async (e) => {
          if (t.value === `aborted`) return Y;
          let r = await this._def.schema._parseAsync({ data: e, path: n.path, parent: n });
          return r.status === `aborted`
            ? Y
            : r.status === `dirty` || t.value === `dirty`
              ? Ly(r.value)
              : r;
        });
      {
        if (t.value === `aborted`) return Y;
        let r = this._def.schema._parseSync({ data: e, path: n.path, parent: n });
        return r.status === `aborted`
          ? Y
          : r.status === `dirty` || t.value === `dirty`
            ? Ly(r.value)
            : r;
      }
    }
    if (r.type === `refinement`) {
      let e = (e) => {
        let t = r.refinement(e, i);
        if (n.common.async) return Promise.resolve(t);
        if (t instanceof Promise)
          throw Error(
            `Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return e;
      };
      if (n.common.async === !1) {
        let r = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        return r.status === `aborted`
          ? Y
          : (r.status === `dirty` && t.dirty(), e(r.value), { status: t.value, value: r.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((n) =>
            n.status === `aborted`
              ? Y
              : (n.status === `dirty` && t.dirty(),
                e(n.value).then(() => ({ status: t.value, value: n.value }))),
          );
    }
    if (r.type === `transform`)
      if (n.common.async === !1) {
        let e = this._def.schema._parseSync({ data: n.data, path: n.path, parent: n });
        if (!Vy(e)) return Y;
        let a = r.transform(e.value, i);
        if (a instanceof Promise)
          throw Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`,
          );
        return { status: t.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((e) =>
            Vy(e)
              ? Promise.resolve(r.transform(e.value, i)).then((e) => ({
                  status: t.value,
                  value: e,
                }))
              : Y,
          );
    G.assertNever(r);
  }
};
((qb.create = (e, t, n) => new qb({ schema: e, typeName: $.ZodEffects, effect: t, ...Z(n) })),
  (qb.createWithPreprocess = (e, t, n) =>
    new qb({
      schema: t,
      effect: { type: `preprocess`, transform: e },
      typeName: $.ZodEffects,
      ...Z(n),
    })));
var Jb = class extends Q {
  _parse(e) {
    return this._getType(e) === K.undefined ? Ry(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Jb.create = (e, t) => new Jb({ innerType: e, typeName: $.ZodOptional, ...Z(t) });
var Yb = class extends Q {
  _parse(e) {
    return this._getType(e) === K.null ? Ry(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Yb.create = (e, t) => new Yb({ innerType: e, typeName: $.ZodNullable, ...Z(t) });
var Xb = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = t.data;
    return (
      t.parsedType === K.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
Xb.create = (e, t) =>
  new Xb({
    innerType: e,
    typeName: $.ZodDefault,
    defaultValue: typeof t.default == `function` ? t.default : () => t.default,
    ...Z(t),
  });
var Zb = class extends Q {
  _parse(e) {
    let { ctx: t } = this._processInputParams(e),
      n = { ...t, common: { ...t.common, issues: [] } },
      r = this._def.innerType._parse({ data: n.data, path: n.path, parent: { ...n } });
    return Hy(r)
      ? r.then((e) => ({
          status: `valid`,
          value:
            e.status === `valid`
              ? e.value
              : this._def.catchValue({
                  get error() {
                    return new jy(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: `valid`,
          value:
            r.status === `valid`
              ? r.value
              : this._def.catchValue({
                  get error() {
                    return new jy(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Zb.create = (e, t) =>
  new Zb({
    innerType: e,
    typeName: $.ZodCatch,
    catchValue: typeof t.catch == `function` ? t.catch : () => t.catch,
    ...Z(t),
  });
var Qb = class extends Q {
  _parse(e) {
    if (this._getType(e) !== K.nan) {
      let t = this._getOrReturnCtx(e);
      return (J(t, { code: q.invalid_type, expected: K.nan, received: t.parsedType }), Y);
    }
    return { status: `valid`, value: e.data };
  }
};
Qb.create = (e) => new Qb({ typeName: $.ZodNaN, ...Z(e) });
var $b = class extends Q {
    _parse(e) {
      let { ctx: t } = this._processInputParams(e),
        n = t.data;
      return this._def.type._parse({ data: n, path: t.path, parent: t });
    }
    unwrap() {
      return this._def.type;
    }
  },
  ex = class e extends Q {
    _parse(e) {
      let { status: t, ctx: n } = this._processInputParams(e);
      if (n.common.async)
        return (async () => {
          let e = await this._def.in._parseAsync({ data: n.data, path: n.path, parent: n });
          return e.status === `aborted`
            ? Y
            : e.status === `dirty`
              ? (t.dirty(), Ly(e.value))
              : this._def.out._parseAsync({ data: e.value, path: n.path, parent: n });
        })();
      {
        let e = this._def.in._parseSync({ data: n.data, path: n.path, parent: n });
        return e.status === `aborted`
          ? Y
          : e.status === `dirty`
            ? (t.dirty(), { status: `dirty`, value: e.value })
            : this._def.out._parseSync({ data: e.value, path: n.path, parent: n });
      }
    }
    static create(t, n) {
      return new e({ in: t, out: n, typeName: $.ZodPipeline });
    }
  },
  tx = class extends Q {
    _parse(e) {
      let t = this._def.innerType._parse(e),
        n = (e) => (Vy(e) && (e.value = Object.freeze(e.value)), e);
      return Hy(t) ? t.then((e) => n(e)) : n(t);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
((tx.create = (e, t) => new tx({ innerType: e, typeName: $.ZodReadonly, ...Z(t) })), Ab.lazycreate);
var $;
(function (e) {
  ((e.ZodString = `ZodString`),
    (e.ZodNumber = `ZodNumber`),
    (e.ZodNaN = `ZodNaN`),
    (e.ZodBigInt = `ZodBigInt`),
    (e.ZodBoolean = `ZodBoolean`),
    (e.ZodDate = `ZodDate`),
    (e.ZodSymbol = `ZodSymbol`),
    (e.ZodUndefined = `ZodUndefined`),
    (e.ZodNull = `ZodNull`),
    (e.ZodAny = `ZodAny`),
    (e.ZodUnknown = `ZodUnknown`),
    (e.ZodNever = `ZodNever`),
    (e.ZodVoid = `ZodVoid`),
    (e.ZodArray = `ZodArray`),
    (e.ZodObject = `ZodObject`),
    (e.ZodUnion = `ZodUnion`),
    (e.ZodDiscriminatedUnion = `ZodDiscriminatedUnion`),
    (e.ZodIntersection = `ZodIntersection`),
    (e.ZodTuple = `ZodTuple`),
    (e.ZodRecord = `ZodRecord`),
    (e.ZodMap = `ZodMap`),
    (e.ZodSet = `ZodSet`),
    (e.ZodFunction = `ZodFunction`),
    (e.ZodLazy = `ZodLazy`),
    (e.ZodLiteral = `ZodLiteral`),
    (e.ZodEnum = `ZodEnum`),
    (e.ZodEffects = `ZodEffects`),
    (e.ZodNativeEnum = `ZodNativeEnum`),
    (e.ZodOptional = `ZodOptional`),
    (e.ZodNullable = `ZodNullable`),
    (e.ZodDefault = `ZodDefault`),
    (e.ZodCatch = `ZodCatch`),
    (e.ZodPromise = `ZodPromise`),
    (e.ZodBranded = `ZodBranded`),
    (e.ZodPipeline = `ZodPipeline`),
    (e.ZodReadonly = `ZodReadonly`));
})(($ ||= {}));
var nx = hb.create;
(_b.create, Qb.create, vb.create);
var rx = yb.create;
(bb.create, xb.create, Sb.create, Cb.create, wb.create);
var ix = Tb.create;
(Eb.create, Db.create, Ob.create);
var ax = Ab.create;
(Ab.strictCreate,
  jb.create,
  Nb.create,
  Fb.create,
  Ib.create,
  Lb.create,
  Rb.create,
  zb.create,
  Bb.create,
  Vb.create,
  Hb.create,
  Wb.create,
  Gb.create,
  Kb.create,
  qb.create,
  Jb.create,
  Yb.create,
  qb.createWithPreprocess,
  ex.create);
var ox = ax({ readOnlyHint: rx().optional(), untrustedContentHint: rx().optional() }),
  sx = ax({
    name: nx(),
    registration_id: nx(),
    title: nx().optional(),
    description: nx().optional(),
    input_schema: ix(),
    annotations: ox.optional(),
    origin: nx().optional(),
    pageUrl: nx().optional(),
  });
function cx(e) {
  return new TextEncoder().encode(JSON.stringify(e)).byteLength;
}
var lx = { type: `webmcp_ui_tools_changed`, version: 1 },
  ux = sx
    .omit({ registration_id: !0, input_schema: !0 })
    .extend({ inputSchema: sx.shape.input_schema, name: sx.shape.name.min(1) })
    .array();
function dx(e, t) {
  return e.length > t.maxTools
    ? []
    : (fx(
        e.map((e) => ({
          ...e,
          inputSchema: e.inputSchema == null ? null : JSON.parse(e.inputSchema),
        })),
        t,
      ) ?? []);
}
function fx(e, t) {
  if (e.length === 0) return [];
  if (e.length > t.maxTools) return null;
  let n = ux.safeParse(e);
  if (!n.success) return null;
  let r;
  try {
    r = cx(n.data);
  } catch {
    return null;
  }
  return r <= t.maxTotalDescriptorBytes ? n.data : null;
}
var px = `__codexWebMcpModelContext`;
function mx() {
  if (
    globalThis.isSecureContext !== !0 ||
    !d.ipcRenderer.sendSync(`codex_desktop:get-browser-webmcp-policy`).enabled
  )
    return;
  let e,
    t = () => {
      e ??
        new Promise((t) => {
          e = setTimeout(t, 0);
        })
          .then(() => ((e = void 0), n.codexGetTools()))
          .catch((e) => {
            if (e instanceof DOMException && e.name === `SecurityError`) return [];
            throw e;
          })
          .then((e) => {
            let t = d.ipcRenderer.sendSync(Oy);
            d.ipcRenderer.send(sc, { ...lx, payload: { tools: t.enabled ? dx(e, t.limits) : [] } });
          });
    },
    n = yy({
      onToolsChanged() {
        (d.ipcRenderer.send(sc, _y), t());
      },
    }),
    r = (e) => {
      e.from.url !== window.location.href && t();
    };
  (window.addEventListener(`pageshow`, t),
    window.navigation.addEventListener(`currententrychange`, r),
    window.addEventListener(`pagehide`, (n) => {
      n.persisted ||
        (clearTimeout(e),
        (e = void 0),
        window.removeEventListener(`pageshow`, t),
        window.navigation.removeEventListener(`currententrychange`, r));
    }));
  let i = d.contextBridge.internalContextBridge;
  (i?.overrideGlobalPropertyFromIsolatedWorld == null
    ? (d.contextBridge.exposeInMainWorld(px, n),
      d.contextBridge.executeInMainWorld({
        args: [px],
        func: (e) => {
          let t = window[e],
            n = Object.freeze({
              ...t,
              async registerTool(e, n) {
                let r = n?.signal,
                  i = t.registerTool(
                    e,
                    r == null
                      ? n
                      : {
                          ...n,
                          signal: Object.assign({}, r, {
                            aborted: r.aborted,
                            reason: r.reason,
                            addEventListener: (...e) => {
                              if ((r.addEventListener(...e), r.aborted)) throw r.reason;
                            },
                          }),
                        },
                  );
                return r == null
                  ? i
                  : new Promise((e, t) => {
                      let n = () => t(r.reason);
                      (r.addEventListener(`abort`, n, { once: !0 }),
                        i.finally(() => r.removeEventListener(`abort`, n)).then(e, t));
                    });
              },
            });
          Object.defineProperty(document, "modelContext", {
            configurable: !1,
            enumerable: !1,
            value: n,
            writable: !1,
          });
        },
      }))
    : i.overrideGlobalPropertyFromIsolatedWorld([`document`, `modelContext`], () => n),
    d.ipcRenderer.send(sc, _y));
}
(mx(), d.webFrame.setVisualZoomLevelLimits?.(1, 3), Zv(), ly(), ay());
//# sourceMappingURL=browser-page-preload.js.map
