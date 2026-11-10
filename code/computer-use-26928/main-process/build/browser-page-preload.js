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
  u = (n, r, o) => (
    (o = n == null ? {} : e(i(n))),
    l(
      r || !n || !n.__esModule || !a.call(n, `default`)
        ? t(o, `default`, { value: n, enumerable: !0 })
        : o,
      n,
    )
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
      if (r !== be) return (r === void 0 && ((r = be), (r = n())), r);
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
function D(...e) {
  let t = {};
  for (let n of e) {
    let e = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, e);
  }
  return Object.defineProperties({}, t);
}
function ee(e) {
  return JSON.stringify(e);
}
function te(e) {
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
  return Object.keys(e).filter(
    (t) => e[t]._zod.optin === `optional` && e[t]._zod.optout === `optional`,
  );
}
function oe(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(`.pick() cannot be used on object schemas containing refinements`);
  return k(
    e,
    D(e._zod.def, {
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
function se(e, t) {
  let n = e._zod.def,
    r = n.checks;
  if (r && r.length > 0)
    throw Error(`.omit() cannot be used on object schemas containing refinements`);
  return k(
    e,
    D(e._zod.def, {
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
function ce(e, t) {
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
    D(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (E(this, `shape`, n), n);
      },
    }),
  );
}
function le(e, t) {
  if (!re(t)) throw Error(`Invalid input to safeExtend: expected a plain object`);
  return k(
    e,
    D(e._zod.def, {
      get shape() {
        let n = { ...e._zod.def.shape, ...t };
        return (E(this, `shape`, n), n);
      },
    }),
  );
}
function ue(e, t) {
  if (e._zod.def.checks?.length)
    throw Error(
      `.merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.`,
    );
  return k(
    e,
    D(e._zod.def, {
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
function de(e, t, n) {
  let r = t._zod.def.checks;
  if (r && r.length > 0)
    throw Error(`.partial() cannot be used on object schemas containing refinements`);
  return k(
    t,
    D(t._zod.def, {
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
function fe(e, t, n) {
  return k(
    t,
    D(t._zod.def, {
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
function pe(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
  return !1;
}
function me(e, t = 0) {
  if (e.aborted === !0) return !0;
  for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
  return !1;
}
function he(e, t) {
  return t.map((t) => {
    var n;
    return ((n = t).path ?? (n.path = []), t.path.unshift(e), t);
  });
}
function ge(e) {
  return typeof e == `string` ? e : e?.message;
}
function _e(e, t, n) {
  let r = e.message
      ? e.message
      : (ge(e.inst?._zod.def?.error?.(e)) ??
        ge(t?.error?.(e)) ??
        ge(n.customError?.(e)) ??
        ge(n.localeError?.(e)) ??
        `Invalid input`),
    { inst: i, continue: a, input: o, ...s } = e;
  return ((s.path ??= []), (s.message = r), t?.reportInput && (s.input = o), s);
}
function ve(e) {
  return Array.isArray(e) ? `array` : typeof e == `string` ? `string` : `unknown`;
}
function ye(...e) {
  let [t, n, r] = e;
  return typeof t == `string` ? { message: t, code: `custom`, input: n, inst: r } : { ...t };
}
var be,
  xe,
  Se,
  Ce,
  we,
  j = o(() => {
    (v(),
      (be = Symbol(`evaluating`)),
      (xe = `captureStackTrace` in Error ? Error.captureStackTrace : (...e) => {}),
      (Se = x(() => {
        if (_.jitless || (typeof navigator < `u` && navigator?.userAgent?.includes(`Cloudflare`)))
          return !1;
        try {
          return (Function(``), !0);
        } catch {
          return !1;
        }
      })),
      (Ce = new Set([`string`, `number`, `symbol`])),
      (we = {
        safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
        int32: [-2147483648, 2147483647],
        uint32: [0, 4294967295],
        float32: [-34028234663852886e22, 34028234663852886e22],
        float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
      }));
  });
function M(e, t = (e) => e.message) {
  let n = {},
    r = [];
  for (let i of e.issues)
    i.path.length > 0
      ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
      : r.push(t(i));
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
  N,
  De,
  P = o(() => {
    (v(),
      j(),
      (Ee = (e, t) => {
        ((e.name = `$ZodError`),
          Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
          Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
          (e.message = JSON.stringify(t, b, 2)),
          Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 }));
      }),
      (N = f(`$ZodError`, Ee)),
      (De = f(`$ZodError`, Ee, { Parent: Error })));
  }),
  Oe,
  ke,
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
  Be,
  Ve,
  He = o(() => {
    (v(),
      P(),
      j(),
      (Oe = (e) => (t, n, r, i) => {
        let a = r ? { ...r, async: !1 } : { async: !1 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if (o instanceof Promise) throw new h();
        if (o.issues.length) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => _e(e, a, p())));
          throw (xe(t, i?.callee), t);
        }
        return o.value;
      }),
      (ke = (e) => async (t, n, r, i) => {
        let a = r ? { ...r, async: !0 } : { async: !0 },
          o = t._zod.run({ value: n, issues: [] }, a);
        if ((o instanceof Promise && (o = await o), o.issues.length)) {
          let t = new (i?.Err ?? e)(o.issues.map((e) => _e(e, a, p())));
          throw (xe(t, i?.callee), t);
        }
        return o.value;
      }),
      (Ae = (e) => (t, n, r) => {
        let i = r ? { ...r, async: !1 } : { async: !1 },
          a = t._zod.run({ value: n, issues: [] }, i);
        if (a instanceof Promise) throw new h();
        return a.issues.length
          ? { success: !1, error: new (e ?? N)(a.issues.map((e) => _e(e, i, p()))) }
          : { success: !0, data: a.value };
      }),
      (je = Ae(De)),
      (Me = (e) => async (t, n, r) => {
        let i = r ? { ...r, async: !0 } : { async: !0 },
          a = t._zod.run({ value: n, issues: [] }, i);
        return (
          a instanceof Promise && (a = await a),
          a.issues.length
            ? { success: !1, error: new e(a.issues.map((e) => _e(e, i, p()))) }
            : { success: !0, data: a.value }
        );
      }),
      (Ne = Me(De)),
      (Pe = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Oe(e)(t, n, i);
      }),
      (Fe = (e) => (t, n, r) => Oe(e)(t, n, r)),
      (Ie = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return ke(e)(t, n, i);
      }),
      (Le = (e) => async (t, n, r) => ke(e)(t, n, r)),
      (Re = (e) => (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Ae(e)(t, n, i);
      }),
      (ze = (e) => (t, n, r) => Ae(e)(t, n, r)),
      (Be = (e) => async (t, n, r) => {
        let i = r ? { ...r, direction: `backward` } : { direction: `backward` };
        return Me(e)(t, n, i);
      }),
      (Ve = (e) => async (t, n, r) => Me(e)(t, n, r)));
  });
function Ue() {
  return new RegExp(rt, `u`);
}
function We(e) {
  let t = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  return typeof e.precision == `number`
    ? e.precision === -1
      ? `${t}`
      : e.precision === 0
        ? `${t}:[0-5]\\d`
        : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
    : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ge(e) {
  return RegExp(`^${We(e)}$`);
}
function Ke(e) {
  let t = We({ precision: e.precision }),
    n = [`Z`];
  (e.local && n.push(``), e.offset && n.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`));
  let r = `${t}(?:${n.join(`|`)})`;
  return RegExp(`^${ft}T(?:${r})$`);
}
var qe,
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
  bt,
  xt = o(() => {
    ((qe = /^[cC][0-9a-z]{6,}$/),
      (Je = /^[0-9a-z]+$/),
      (Ye = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/),
      (Xe = /^[0-9a-vA-V]{20}$/),
      (Ze = /^[A-Za-z0-9]{27}$/),
      (Qe = /^[a-zA-Z0-9_-]{21}$/),
      ($e =
        /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/),
      (et = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/),
      (tt = (e) =>
        e
          ? RegExp(
              `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
            )
          : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/),
      (nt =
        /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/),
      (rt = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`),
      (it =
        /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/),
      (at =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/),
      (ot =
        /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/),
      (st =
        /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/),
      (ct = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/),
      (lt = /^[A-Za-z0-9_-]*$/),
      (ut = /^https?$/),
      (dt = /^\+[1-9]\d{6,14}$/),
      (ft = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`),
      (pt = RegExp(`^${ft}$`)),
      (mt = (e) => {
        let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ``}}` : `[\\s\\S]*`;
        return RegExp(`^${t}$`);
      }),
      (ht = /^-?\d+$/),
      (gt = /^-?\d+(?:\.\d+)?$/),
      (_t = /^(?:true|false)$/i),
      (vt = /^null$/i),
      (yt = /^[^A-Z]*$/),
      (bt = /^[^a-z]*$/));
  }),
  St,
  Ct,
  F,
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
  Rt = o(() => {
    (v(),
      xt(),
      j(),
      (St = f(`$ZodCheck`, (e, t) => {
        var n;
        ((e._zod ??= {}), (e._zod.def = t), (n = e._zod).onattach ?? (n.onattach = []));
      })),
      (Ct = { number: `number`, bigint: `bigint`, object: `date` }),
      (F = f(`$ZodCheckLessThan`, (e, t) => {
        St.init(e, t);
        let n = Ct[typeof t.value];
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
        St.init(e, t);
        let n = Ct[typeof t.value];
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
        (St.init(e, t),
          e._zod.onattach.push((e) => {
            var n;
            (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
          }),
          (e._zod.check = (n) => {
            if (typeof n.value != typeof t.value)
              throw Error(`Cannot mix number and bigint in multiple_of check.`);
            (typeof n.value == `bigint`
              ? n.value % t.value === BigInt(0)
              : w(n.value, t.value) === 0) ||
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
        (St.init(e, t), (t.format = t.format || `float64`));
        let n = t.format?.includes(`int`),
          r = n ? `int` : `number`,
          [i, a] = we[t.format];
        (e._zod.onattach.push((e) => {
          let r = e._zod.bag;
          ((r.format = t.format), (r.minimum = i), (r.maximum = a), n && (r.pattern = ht));
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
        (St.init(e, t),
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
            let i = ve(r);
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
      (Ot = f(`$ZodCheckMinLength`, (e, t) => {
        var n;
        (St.init(e, t),
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
            let i = ve(r);
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
      (kt = f(`$ZodCheckLengthEquals`, (e, t) => {
        var n;
        (St.init(e, t),
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
            let a = ve(r),
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
      (At = f(`$ZodCheckStringFormat`, (e, t) => {
        var n, r;
        (St.init(e, t),
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
      (jt = f(`$ZodCheckRegex`, (e, t) => {
        (At.init(e, t),
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
      (Mt = f(`$ZodCheckLowerCase`, (e, t) => {
        ((t.pattern ??= yt), At.init(e, t));
      })),
      (Nt = f(`$ZodCheckUpperCase`, (e, t) => {
        ((t.pattern ??= bt), At.init(e, t));
      })),
      (Pt = f(`$ZodCheckIncludes`, (e, t) => {
        St.init(e, t);
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
      (Ft = f(`$ZodCheckStartsWith`, (e, t) => {
        St.init(e, t);
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
      (It = f(`$ZodCheckEndsWith`, (e, t) => {
        St.init(e, t);
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
      (Lt = f(`$ZodCheckOverwrite`, (e, t) => {
        (St.init(e, t),
          (e._zod.check = (e) => {
            e.value = t.tx(e.value);
          }));
      })));
  }),
  zt,
  Bt = o(() => {
    zt = class {
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
  Vt,
  Ht = o(() => {
    Vt = { major: 4, minor: 4, patch: 3 };
  });
function Ut(e) {
  if (e === ``) return !0;
  if (/\s/.test(e) || e.length % 4 != 0) return !1;
  try {
    return (atob(e), !0);
  } catch {
    return !1;
  }
}
function Wt(e) {
  if (!lt.test(e)) return !1;
  let t = e.replace(/[-_]/g, (e) => (e === `-` ? `+` : `/`));
  return Ut(t.padEnd(Math.ceil(t.length / 4) * 4, `=`));
}
function Gt(e, t = null) {
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
function Kt(e, t, n) {
  (e.issues.length && t.issues.push(...he(n, e.issues)), (t.value[n] = e.value));
}
function qt(e, t, n, r, i, a) {
  let o = n in r;
  if (e.issues.length) {
    if (i && a && !o) return;
    t.issues.push(...he(n, e.issues));
  }
  if (!o && !i) {
    e.issues.length ||
      t.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: void 0, path: [n] });
    return;
  }
  e.value === void 0 ? o && (t.value[n] = void 0) : (t.value[n] = e.value);
}
function Jt(e) {
  let t = Object.keys(e.shape);
  for (let n of t)
    if (!e.shape?.[n]?._zod?.traits?.has(`$ZodType`))
      throw Error(`Invalid element at key "${n}": expected a Zod schema`);
  let n = ae(e.shape);
  return { ...e, keys: t, keySet: new Set(t), numKeys: t.length, optionalKeys: new Set(n) };
}
function Yt(e, t, n, r, i, a) {
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
    a instanceof Promise ? e.push(a.then((e) => qt(e, n, i, t, u, d))) : qt(a, n, i, t, u, d);
  }
  return (
    o.length && n.issues.push({ code: `unrecognized_keys`, keys: o, input: t, inst: a }),
    e.length ? Promise.all(e).then(() => n) : n
  );
}
function Xt(e, t, n, r) {
  for (let n of e) if (n.issues.length === 0) return ((t.value = n.value), t);
  let i = e.filter((e) => !pe(e));
  return i.length === 1
    ? ((t.value = i[0].value), i[0])
    : (t.issues.push({
        code: `invalid_union`,
        input: t.value,
        inst: n,
        errors: e.map((e) => e.issues.map((e) => _e(e, r, p()))),
      }),
      t);
}
function Zt(e, t) {
  if (e === t || (e instanceof Date && t instanceof Date && +e == +t))
    return { valid: !0, data: e };
  if (re(e) && re(t)) {
    let n = Object.keys(t),
      r = Object.keys(e).filter((e) => n.indexOf(e) !== -1),
      i = { ...e, ...t };
    for (let n of r) {
      let r = Zt(e[n], t[n]);
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
        o = Zt(i, a);
      if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Qt(e, t, n) {
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
  if ((a.length && i && e.issues.push({ ...i, keys: a }), pe(e))) return e;
  let o = Zt(t.value, n.value);
  if (!o.valid)
    throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return ((e.value = o.data), e);
}
function $t(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
function en(e, t) {
  return (e.value === void 0 && (e.value = t.defaultValue), e);
}
function tn(e, t) {
  return (
    !e.issues.length &&
      e.value === void 0 &&
      e.issues.push({ code: `invalid_type`, expected: `nonoptional`, input: e.value, inst: t }),
    e
  );
}
function nn(e, t, n) {
  return e.issues.length
    ? ((e.aborted = !0), e)
    : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
function rn(e) {
  return ((e.value = Object.freeze(e.value)), e);
}
function an(e, t, n, r) {
  if (!e) {
    let e = {
      code: `custom`,
      input: n,
      inst: r,
      path: [...(r._zod.def.path ?? [])],
      continue: !r._zod.def.abort,
    };
    (r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ye(e)));
  }
}
var I,
  on,
  L,
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
  nr = o(() => {
    (Rt(),
      v(),
      Bt(),
      He(),
      xt(),
      j(),
      Ht(),
      (I = f(`$ZodType`, (e, t) => {
        var n;
        ((e ??= {}), (e._zod.def = t), (e._zod.bag = e._zod.bag || {}), (e._zod.version = Vt));
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
              let r = pe(e),
                i;
              for (let a of t) {
                if (a._zod.def.when) {
                  if (me(e) || !a._zod.def.when(e)) continue;
                } else if (r) continue;
                let t = e.issues.length,
                  o = a._zod.check(e);
                if (o instanceof Promise && n?.async === !1) throw new h();
                if (i || o instanceof Promise)
                  i = (i ?? Promise.resolve()).then(async () => {
                    (await o, e.issues.length !== t && (r ||= pe(e, t)));
                  });
                else {
                  if (e.issues.length === t) continue;
                  r ||= pe(e, t);
                }
              }
              return i ? i.then(() => e) : e;
            },
            n = (n, i, a) => {
              if (pe(n)) return ((n.aborted = !0), n);
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
              let n = je(e, t);
              return n.success ? { value: n.data } : { issues: n.error?.issues };
            } catch {
              return Ne(e, t).then((e) =>
                e.success ? { value: e.data } : { issues: e.error?.issues },
              );
            }
          },
          vendor: `zod`,
          version: 1,
        }));
      })),
      (on = f(`$ZodString`, (e, t) => {
        (I.init(e, t),
          (e._zod.pattern = [...(e?._zod.bag?.patterns ?? [])].pop() ?? mt(e._zod.bag)),
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
      (L = f(`$ZodStringFormat`, (e, t) => {
        (At.init(e, t), on.init(e, t));
      })),
      (sn = f(`$ZodGUID`, (e, t) => {
        ((t.pattern ??= et), L.init(e, t));
      })),
      (cn = f(`$ZodUUID`, (e, t) => {
        if (t.version) {
          let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[t.version];
          if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
          t.pattern ??= tt(e);
        } else t.pattern ??= tt();
        L.init(e, t);
      })),
      (ln = f(`$ZodEmail`, (e, t) => {
        ((t.pattern ??= nt), L.init(e, t));
      })),
      (un = f(`$ZodURL`, (e, t) => {
        (L.init(e, t),
          (e._zod.check = (n) => {
            try {
              let r = n.value.trim();
              if (!t.normalize && t.protocol?.source === ut.source && !/^https?:\/\//i.test(r)) {
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
      (dn = f(`$ZodEmoji`, (e, t) => {
        ((t.pattern ??= Ue()), L.init(e, t));
      })),
      (fn = f(`$ZodNanoID`, (e, t) => {
        ((t.pattern ??= Qe), L.init(e, t));
      })),
      (pn = f(`$ZodCUID`, (e, t) => {
        ((t.pattern ??= qe), L.init(e, t));
      })),
      (mn = f(`$ZodCUID2`, (e, t) => {
        ((t.pattern ??= Je), L.init(e, t));
      })),
      (hn = f(`$ZodULID`, (e, t) => {
        ((t.pattern ??= Ye), L.init(e, t));
      })),
      (gn = f(`$ZodXID`, (e, t) => {
        ((t.pattern ??= Xe), L.init(e, t));
      })),
      (_n = f(`$ZodKSUID`, (e, t) => {
        ((t.pattern ??= Ze), L.init(e, t));
      })),
      (vn = f(`$ZodISODateTime`, (e, t) => {
        ((t.pattern ??= Ke(t)), L.init(e, t));
      })),
      (yn = f(`$ZodISODate`, (e, t) => {
        ((t.pattern ??= pt), L.init(e, t));
      })),
      (bn = f(`$ZodISOTime`, (e, t) => {
        ((t.pattern ??= Ge(t)), L.init(e, t));
      })),
      (xn = f(`$ZodISODuration`, (e, t) => {
        ((t.pattern ??= $e), L.init(e, t));
      })),
      (Sn = f(`$ZodIPv4`, (e, t) => {
        ((t.pattern ??= it), L.init(e, t), (e._zod.bag.format = `ipv4`));
      })),
      (Cn = f(`$ZodIPv6`, (e, t) => {
        ((t.pattern ??= at),
          L.init(e, t),
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
      (wn = f(`$ZodCIDRv4`, (e, t) => {
        ((t.pattern ??= ot), L.init(e, t));
      })),
      (Tn = f(`$ZodCIDRv6`, (e, t) => {
        ((t.pattern ??= st),
          L.init(e, t),
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
      (En = f(`$ZodBase64`, (e, t) => {
        ((t.pattern ??= ct),
          L.init(e, t),
          (e._zod.bag.contentEncoding = `base64`),
          (e._zod.check = (n) => {
            Ut(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (Dn = f(`$ZodBase64URL`, (e, t) => {
        ((t.pattern ??= lt),
          L.init(e, t),
          (e._zod.bag.contentEncoding = `base64url`),
          (e._zod.check = (n) => {
            Wt(n.value) ||
              n.issues.push({
                code: `invalid_format`,
                format: `base64url`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (On = f(`$ZodE164`, (e, t) => {
        ((t.pattern ??= dt), L.init(e, t));
      })),
      (kn = f(`$ZodJWT`, (e, t) => {
        (L.init(e, t),
          (e._zod.check = (n) => {
            Gt(n.value, t.alg) ||
              n.issues.push({
                code: `invalid_format`,
                format: `jwt`,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
          }));
      })),
      (An = f(`$ZodNumber`, (e, t) => {
        (I.init(e, t),
          (e._zod.pattern = e._zod.bag.pattern ?? gt),
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
      (jn = f(`$ZodNumberFormat`, (e, t) => {
        (Et.init(e, t), An.init(e, t));
      })),
      (Mn = f(`$ZodBoolean`, (e, t) => {
        (I.init(e, t),
          (e._zod.pattern = _t),
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
      (Nn = f(`$ZodNull`, (e, t) => {
        (I.init(e, t),
          (e._zod.pattern = vt),
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
      (Pn = f(`$ZodUnknown`, (e, t) => {
        (I.init(e, t), (e._zod.parse = (e) => e));
      })),
      (Fn = f(`$ZodNever`, (e, t) => {
        (I.init(e, t),
          (e._zod.parse = (t, n) => (
            t.issues.push({ expected: `never`, code: `invalid_type`, input: t.value, inst: e }),
            t
          )));
      })),
      (In = f(`$ZodArray`, (e, t) => {
        (I.init(e, t),
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
              s instanceof Promise ? a.push(s.then((t) => Kt(t, n, e))) : Kt(s, n, e);
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Ln = f(`$ZodObject`, (e, t) => {
        if ((I.init(e, t), !Object.getOwnPropertyDescriptor(t, `shape`)?.get)) {
          let e = t.shape;
          Object.defineProperty(t, "shape", {
            get: () => {
              let n = { ...e };
              return (Object.defineProperty(t, "shape", { value: n }), n);
            },
          });
        }
        let n = x(() => Jt(t));
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
              ? c.push(a.then((n) => qt(n, t, e, s, r, i)))
              : qt(a, t, e, s, r, i);
          }
          return i ? Yt(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
        };
      })),
      (Rn = f(`$ZodObjectJIT`, (e, t) => {
        Ln.init(e, t);
        let n = e._zod.parse,
          r = x(() => Jt(t)),
          i = (e) => {
            let t = new zt([`shape`, `payload`, `ctx`]),
              n = r.value,
              i = (e) => {
                let t = ee(e);
                return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
              };
            t.write(`const input = payload.value;`);
            let a = Object.create(null),
              o = 0;
            for (let e of n.keys) a[e] = `key_${o++}`;
            t.write(`const newResult = {};`);
            for (let r of n.keys) {
              let n = a[r],
                o = ee(r),
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
          c = s && Se.value,
          l = t.catchall,
          u;
        e._zod.parse = (d, f) => {
          u ??= r.value;
          let p = d.value;
          return o(p)
            ? s && c && f?.async === !1 && f.jitless !== !0
              ? ((a ||= i(t.shape)), (d = a(d, f)), l ? Yt([], p, d, f, u, e) : d)
              : n(d, f)
            : (d.issues.push({ expected: `object`, code: `invalid_type`, input: p, inst: e }), d);
        };
      })),
      (zn = f(`$ZodUnion`, (e, t) => {
        (I.init(e, t),
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
          return a ? Promise.all(o).then((t) => Xt(t, r, e, i)) : Xt(o, r, e, i);
        };
      })),
      (Bn = f(`$ZodDiscriminatedUnion`, (e, t) => {
        ((t.inclusive = !1), zn.init(e, t));
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
      (Vn = f(`$ZodIntersection`, (e, t) => {
        (I.init(e, t),
          (e._zod.parse = (e, n) => {
            let r = e.value,
              i = t.left._zod.run({ value: r, issues: [] }, n),
              a = t.right._zod.run({ value: r, issues: [] }, n);
            return i instanceof Promise || a instanceof Promise
              ? Promise.all([i, a]).then(([t, n]) => Qt(e, t, n))
              : Qt(e, i, a);
          }));
      })),
      (Hn = f(`$ZodRecord`, (e, t) => {
        (I.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!re(i))
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
                      issues: o.issues.map((e) => _e(e, r, p())),
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
                          (e.issues.length && n.issues.push(...he(c, e.issues)),
                            (n.value[l] = e.value));
                        }),
                      )
                    : (u.issues.length && n.issues.push(...he(c, u.issues)),
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
                if (typeof o == `string` && gt.test(o) && s.issues.length) {
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
                        issues: s.issues.map((e) => _e(e, r, p())),
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
                        (e.issues.length && n.issues.push(...he(o, e.issues)),
                          (n.value[s.value] = e.value));
                      }),
                    )
                  : (c.issues.length && n.issues.push(...he(o, c.issues)),
                    (n.value[s.value] = c.value));
              }
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }));
      })),
      (Un = f(`$ZodEnum`, (e, t) => {
        I.init(e, t);
        let n = y(t.entries),
          r = new Set(n);
        ((e._zod.values = r),
          (e._zod.pattern = RegExp(
            `^(${n
              .filter((e) => Ce.has(typeof e))
              .map((e) => (typeof e == `string` ? O(e) : e.toString()))
              .join(`|`)})$`,
          )),
          (e._zod.parse = (t, i) => {
            let a = t.value;
            return (
              r.has(a) || t.issues.push({ code: `invalid_value`, values: n, input: a, inst: e }), t
            );
          }));
      })),
      (Wn = f(`$ZodLiteral`, (e, t) => {
        if ((I.init(e, t), t.values.length === 0))
          throw Error(`Cannot create literal schema with no valid values`);
        let n = new Set(t.values);
        ((e._zod.values = n),
          (e._zod.pattern = RegExp(
            `^(${t.values.map((e) => (typeof e == `string` ? O(e) : e ? O(e.toString()) : String(e))).join(`|`)})$`,
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
      (Gn = f(`$ZodTransform`, (e, t) => {
        (I.init(e, t),
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
      (Kn = f(`$ZodOptional`, (e, t) => {
        (I.init(e, t),
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
              return i instanceof Promise ? i.then((e) => $t(e, r)) : $t(i, r);
            }
            return e.value === void 0 ? e : t.innerType._zod.run(e, n);
          }));
      })),
      (qn = f(`$ZodExactOptional`, (e, t) => {
        (Kn.init(e, t),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `pattern`, () => t.innerType._zod.pattern),
          (e._zod.parse = (e, n) => t.innerType._zod.run(e, n)));
      })),
      (Jn = f(`$ZodNullable`, (e, t) => {
        (I.init(e, t),
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
      (Yn = f(`$ZodDefault`, (e, t) => {
        (I.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            if (e.value === void 0) return ((e.value = t.defaultValue), e);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => en(e, t)) : en(r, t);
          }));
      })),
      (Xn = f(`$ZodPrefault`, (e, t) => {
        (I.init(e, t),
          (e._zod.optin = `optional`),
          T(e._zod, `values`, () => t.innerType._zod.values),
          (e._zod.parse = (e, n) => (
            n.direction === `backward` || (e.value === void 0 && (e.value = t.defaultValue)),
            t.innerType._zod.run(e, n)
          )));
      })),
      (Zn = f(`$ZodNonOptional`, (e, t) => {
        (I.init(e, t),
          T(e._zod, `values`, () => {
            let e = t.innerType._zod.values;
            return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
          }),
          (e._zod.parse = (n, r) => {
            let i = t.innerType._zod.run(n, r);
            return i instanceof Promise ? i.then((t) => tn(t, e)) : tn(i, e);
          }));
      })),
      (Qn = f(`$ZodCatch`, (e, t) => {
        (I.init(e, t),
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
                        error: { issues: r.issues.map((e) => _e(e, n, p())) },
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
                    error: { issues: r.issues.map((e) => _e(e, n, p())) },
                    input: e.value,
                  })),
                  (e.issues = []),
                  (e.fallback = !0)),
                e);
          }));
      })),
      ($n = f(`$ZodPipe`, (e, t) => {
        (I.init(e, t),
          T(e._zod, `values`, () => t.in._zod.values),
          T(e._zod, `optin`, () => t.in._zod.optin),
          T(e._zod, `optout`, () => t.out._zod.optout),
          T(e._zod, `propValues`, () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => nn(e, t.in, n)) : nn(r, t.in, n);
            }
            let r = t.in._zod.run(e, n);
            return r instanceof Promise ? r.then((e) => nn(e, t.out, n)) : nn(r, t.out, n);
          }));
      })),
      (er = f(`$ZodReadonly`, (e, t) => {
        (I.init(e, t),
          T(e._zod, `propValues`, () => t.innerType._zod.propValues),
          T(e._zod, `values`, () => t.innerType._zod.values),
          T(e._zod, `optin`, () => t.innerType?._zod?.optin),
          T(e._zod, `optout`, () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if (n.direction === `backward`) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(rn) : rn(r);
          }));
      })),
      (tr = f(`$ZodCustom`, (e, t) => {
        (St.init(e, t),
          I.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (n) => {
            let r = n.value,
              i = t.fn(r);
            if (i instanceof Promise) return i.then((t) => an(t, n, r, e));
            an(i, n, r, e);
          }));
      })));
  });
function rr() {
  return new ar();
}
var ir,
  ar,
  or,
  sr = o(() => {
    ((ar = class {
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
      (ir = globalThis).__zod_globalRegistry ?? (ir.__zod_globalRegistry = rr()),
      (or = globalThis.__zod_globalRegistry));
  });
function cr(e, t) {
  return new e({ type: `string`, ...A(t) });
}
function lr(e, t) {
  return new e({ type: `string`, format: `email`, check: `string_format`, abort: !1, ...A(t) });
}
function ur(e, t) {
  return new e({ type: `string`, format: `guid`, check: `string_format`, abort: !1, ...A(t) });
}
function dr(e, t) {
  return new e({ type: `string`, format: `uuid`, check: `string_format`, abort: !1, ...A(t) });
}
function fr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v4`,
    ...A(t),
  });
}
function pr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v6`,
    ...A(t),
  });
}
function mr(e, t) {
  return new e({
    type: `string`,
    format: `uuid`,
    check: `string_format`,
    abort: !1,
    version: `v7`,
    ...A(t),
  });
}
function hr(e, t) {
  return new e({ type: `string`, format: `url`, check: `string_format`, abort: !1, ...A(t) });
}
function gr(e, t) {
  return new e({ type: `string`, format: `emoji`, check: `string_format`, abort: !1, ...A(t) });
}
function _r(e, t) {
  return new e({ type: `string`, format: `nanoid`, check: `string_format`, abort: !1, ...A(t) });
}
function vr(e, t) {
  return new e({ type: `string`, format: `cuid`, check: `string_format`, abort: !1, ...A(t) });
}
function yr(e, t) {
  return new e({ type: `string`, format: `cuid2`, check: `string_format`, abort: !1, ...A(t) });
}
function br(e, t) {
  return new e({ type: `string`, format: `ulid`, check: `string_format`, abort: !1, ...A(t) });
}
function xr(e, t) {
  return new e({ type: `string`, format: `xid`, check: `string_format`, abort: !1, ...A(t) });
}
function Sr(e, t) {
  return new e({ type: `string`, format: `ksuid`, check: `string_format`, abort: !1, ...A(t) });
}
function Cr(e, t) {
  return new e({ type: `string`, format: `ipv4`, check: `string_format`, abort: !1, ...A(t) });
}
function wr(e, t) {
  return new e({ type: `string`, format: `ipv6`, check: `string_format`, abort: !1, ...A(t) });
}
function Tr(e, t) {
  return new e({ type: `string`, format: `cidrv4`, check: `string_format`, abort: !1, ...A(t) });
}
function Er(e, t) {
  return new e({ type: `string`, format: `cidrv6`, check: `string_format`, abort: !1, ...A(t) });
}
function Dr(e, t) {
  return new e({ type: `string`, format: `base64`, check: `string_format`, abort: !1, ...A(t) });
}
function Or(e, t) {
  return new e({ type: `string`, format: `base64url`, check: `string_format`, abort: !1, ...A(t) });
}
function kr(e, t) {
  return new e({ type: `string`, format: `e164`, check: `string_format`, abort: !1, ...A(t) });
}
function Ar(e, t) {
  return new e({ type: `string`, format: `jwt`, check: `string_format`, abort: !1, ...A(t) });
}
function jr(e, t) {
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
function Mr(e, t) {
  return new e({ type: `string`, format: `date`, check: `string_format`, ...A(t) });
}
function Nr(e, t) {
  return new e({
    type: `string`,
    format: `time`,
    check: `string_format`,
    precision: null,
    ...A(t),
  });
}
function Pr(e, t) {
  return new e({ type: `string`, format: `duration`, check: `string_format`, ...A(t) });
}
function Fr(e, t) {
  return new e({ type: `number`, checks: [], ...A(t) });
}
function Ir(e, t) {
  return new e({ type: `number`, check: `number_format`, abort: !1, format: `safeint`, ...A(t) });
}
function Lr(e, t) {
  return new e({ type: `boolean`, ...A(t) });
}
function Rr(e, t) {
  return new e({ type: `null`, ...A(t) });
}
function zr(e) {
  return new e({ type: `unknown` });
}
function Br(e, t) {
  return new e({ type: `never`, ...A(t) });
}
function Vr(e, t) {
  return new F({ check: `less_than`, ...A(t), value: e, inclusive: !1 });
}
function Hr(e, t) {
  return new F({ check: `less_than`, ...A(t), value: e, inclusive: !0 });
}
function Ur(e, t) {
  return new wt({ check: `greater_than`, ...A(t), value: e, inclusive: !1 });
}
function Wr(e, t) {
  return new wt({ check: `greater_than`, ...A(t), value: e, inclusive: !0 });
}
function Gr(e, t) {
  return new Tt({ check: `multiple_of`, ...A(t), value: e });
}
function Kr(e, t) {
  return new Dt({ check: `max_length`, ...A(t), maximum: e });
}
function qr(e, t) {
  return new Ot({ check: `min_length`, ...A(t), minimum: e });
}
function Jr(e, t) {
  return new kt({ check: `length_equals`, ...A(t), length: e });
}
function Yr(e, t) {
  return new jt({ check: `string_format`, format: `regex`, ...A(t), pattern: e });
}
function Xr(e) {
  return new Mt({ check: `string_format`, format: `lowercase`, ...A(e) });
}
function Zr(e) {
  return new Nt({ check: `string_format`, format: `uppercase`, ...A(e) });
}
function Qr(e, t) {
  return new Pt({ check: `string_format`, format: `includes`, ...A(t), includes: e });
}
function $r(e, t) {
  return new Ft({ check: `string_format`, format: `starts_with`, ...A(t), prefix: e });
}
function ei(e, t) {
  return new It({ check: `string_format`, format: `ends_with`, ...A(t), suffix: e });
}
function ti(e) {
  return new Lt({ check: `overwrite`, tx: e });
}
function ni(e) {
  return ti((t) => t.normalize(e));
}
function ri() {
  return ti((e) => e.trim());
}
function ii() {
  return ti((e) => e.toLowerCase());
}
function ai() {
  return ti((e) => e.toUpperCase());
}
function oi() {
  return ti((e) => te(e));
}
function si(e, t, n) {
  return new e({ type: `array`, element: t, ...A(n) });
}
function ci(e, t, n) {
  return new e({ type: `custom`, check: `custom`, fn: t, ...A(n) });
}
function li(e, t) {
  let n = ui(
    (t) => (
      (t.addIssue = (e) => {
        if (typeof e == `string`) t.issues.push(ye(e, t.value, n._zod.def));
        else {
          let r = e;
          (r.fatal && (r.continue = !1),
            (r.code ??= `custom`),
            (r.input ??= t.value),
            (r.inst ??= n),
            (r.continue ??= !n._zod.def.abort),
            t.issues.push(ye(r)));
        }
      }),
      e(t.value, t)
    ),
    t,
  );
  return n;
}
function ui(e, t) {
  let n = new St({ check: `custom`, ...A(t) });
  return ((n._zod.check = e), n);
}
var di = o(() => {
  (Rt(), j());
});
function fi(e) {
  let t = e?.target ?? `draft-2020-12`;
  return (
    t === `draft-4` && (t = `draft-04`),
    t === `draft-7` && (t = `draft-07`),
    {
      processors: e.processors ?? {},
      metadataRegistry: e?.metadata ?? or,
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
function pi(e, t, n = { path: [], schemaPath: [] }) {
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
    a && ((o.ref ||= a), pi(a, t, r), (t.seen.get(a).isParent = !0));
  }
  let c = t.metadataRegistry.get(e);
  return (
    c && Object.assign(o.schema, c),
    t.io === `input` && gi(e) && (delete o.schema.examples, delete o.schema.default),
    t.io === `input` &&
      `_prefault` in o.schema &&
      ((r = o.schema).default ?? (r.default = o.schema._prefault)),
    delete o.schema._prefault,
    t.seen.get(e).schema
  );
}
function mi(e, t) {
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
function hi(e, t) {
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
    (Object.keys(o).length > 0 &&
      (e.target === `draft-2020-12` ? (i.$defs = o) : (i.definitions = o)));
  try {
    let n = JSON.parse(JSON.stringify(i));
    return (
      Object.defineProperty(n, "~standard", {
        value: {
          ...t[`~standard`],
          jsonSchema: {
            input: vi(t, `input`, e.processors),
            output: vi(t, `output`, e.processors),
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
function gi(e, t) {
  let n = t ?? { seen: new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let r = e._zod.def;
  if (r.type === `transform`) return !0;
  if (r.type === `array`) return gi(r.element, n);
  if (r.type === `set`) return gi(r.valueType, n);
  if (r.type === `lazy`) return gi(r.getter(), n);
  if (
    r.type === `promise` ||
    r.type === `optional` ||
    r.type === `nonoptional` ||
    r.type === `nullable` ||
    r.type === `readonly` ||
    r.type === "default" ||
    r.type === `prefault`
  )
    return gi(r.innerType, n);
  if (r.type === `intersection`) return gi(r.left, n) || gi(r.right, n);
  if (r.type === `record` || r.type === `map`) return gi(r.keyType, n) || gi(r.valueType, n);
  if (r.type === `pipe`) return e._zod.traits.has(`$ZodCodec`) ? !0 : gi(r.in, n) || gi(r.out, n);
  if (r.type === `object`) {
    for (let e in r.shape) if (gi(r.shape[e], n)) return !0;
    return !1;
  }
  if (r.type === `union`) {
    for (let e of r.options) if (gi(e, n)) return !0;
    return !1;
  }
  if (r.type === `tuple`) {
    for (let e of r.items) if (gi(e, n)) return !0;
    return !!(r.rest && gi(r.rest, n));
  }
  return !1;
}
var _i,
  vi,
  yi = o(() => {
    (sr(),
      (_i =
        (e, t = {}) =>
        (n) => {
          let r = fi({ ...n, processors: t });
          return (pi(e, r), mi(r, e), hi(r, e));
        }),
      (vi =
        (e, t, n = {}) =>
        (r) => {
          let { libraryOptions: i, target: a } = r ?? {},
            o = fi({ ...(i ?? {}), target: a, io: t, processors: n });
          return (pi(e, o), mi(o, e), hi(o, e));
        }));
  }),
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
  Mi,
  R,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui = o(() => {
    (yi(),
      j(),
      (bi = {
        guid: `uuid`,
        url: `uri`,
        datetime: `date-time`,
        json_string: `json-string`,
        regex: ``,
      }),
      (xi = (e, t, n, r) => {
        let i = n;
        i.type = `string`;
        let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
        if (
          (typeof a == `number` && (i.minLength = a),
          typeof o == `number` && (i.maxLength = o),
          s &&
            ((i.format = bi[s] ?? s),
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
      (Si = (e, t, n, r) => {
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
      (Ci = (e, t, n, r) => {
        n.type = `boolean`;
      }),
      (wi = (e, t, n, r) => {
        t.target === `openapi-3.0`
          ? ((n.type = `string`), (n.nullable = !0), (n.enum = [null]))
          : (n.type = `null`);
      }),
      (Ti = (e, t, n, r) => {
        n.not = {};
      }),
      (Ei = (e, t, n, r) => {}),
      (Di = (e, t, n, r) => {
        let i = e._zod.def,
          a = y(i.entries);
        (a.every((e) => typeof e == `number`) && (n.type = `number`),
          a.every((e) => typeof e == `string`) && (n.type = `string`),
          (n.enum = a));
      }),
      (Oi = (e, t, n, r) => {
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
              t.target === `draft-04` || t.target === `openapi-3.0`
                ? (n.enum = [e])
                : (n.const = e));
          } else
            (a.every((e) => typeof e == `number`) && (n.type = `number`),
              a.every((e) => typeof e == `string`) && (n.type = `string`),
              a.every((e) => typeof e == `boolean`) && (n.type = `boolean`),
              a.every((e) => e === null) && (n.type = `null`),
              (n.enum = a));
        }
      }),
      (ki = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Custom types cannot be represented in JSON Schema`);
      }),
      (Ai = (e, t, n, r) => {
        if (t.unrepresentable === `throw`)
          throw Error(`Transforms cannot be represented in JSON Schema`);
      }),
      (ji = (e, t, n, r) => {
        let i = n,
          a = e._zod.def,
          { minimum: o, maximum: s } = e._zod.bag;
        (typeof o == `number` && (i.minItems = o),
          typeof s == `number` && (i.maxItems = s),
          (i.type = `array`),
          (i.items = pi(a.element, t, { ...r, path: [...r.path, `items`] })));
      }),
      (Mi = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        ((i.type = `object`), (i.properties = {}));
        let o = a.shape;
        for (let e in o)
          i.properties[e] = pi(o[e], t, { ...r, path: [...r.path, `properties`, e] });
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
                (i.additionalProperties = pi(a.catchall, t, {
                  ...r,
                  path: [...r.path, `additionalProperties`],
                }))
              : t.io === `output` && (i.additionalProperties = !1));
      }),
      (R = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.inclusive === !1,
          o = i.options.map((e, n) =>
            pi(e, t, { ...r, path: [...r.path, a ? `oneOf` : `anyOf`, n] }),
          );
        a ? (n.oneOf = o) : (n.anyOf = o);
      }),
      (Ni = (e, t, n, r) => {
        let i = e._zod.def,
          a = pi(i.left, t, { ...r, path: [...r.path, `allOf`, 0] }),
          o = pi(i.right, t, { ...r, path: [...r.path, `allOf`, 1] }),
          s = (e) => `allOf` in e && Object.keys(e).length === 1;
        n.allOf = [...(s(a) ? a.allOf : [a]), ...(s(o) ? o.allOf : [o])];
      }),
      (Pi = (e, t, n, r) => {
        let i = n,
          a = e._zod.def;
        i.type = `object`;
        let o = a.keyType,
          s = o._zod.bag?.patterns;
        if (a.mode === `loose` && s && s.size > 0) {
          let e = pi(a.valueType, t, { ...r, path: [...r.path, `patternProperties`, `*`] });
          i.patternProperties = {};
          for (let t of s) i.patternProperties[t.source] = e;
        } else
          ((t.target === `draft-07` || t.target === `draft-2020-12`) &&
            (i.propertyNames = pi(a.keyType, t, { ...r, path: [...r.path, `propertyNames`] })),
            (i.additionalProperties = pi(a.valueType, t, {
              ...r,
              path: [...r.path, `additionalProperties`],
            })));
        let c = o._zod.values;
        if (c) {
          let e = [...c].filter((e) => typeof e == `string` || typeof e == `number`);
          e.length > 0 && (i.required = e);
        }
      }),
      (Fi = (e, t, n, r) => {
        let i = e._zod.def,
          a = pi(i.innerType, t, r),
          o = t.seen.get(e);
        t.target === `openapi-3.0`
          ? ((o.ref = i.innerType), (n.nullable = !0))
          : (n.anyOf = [a, { type: `null` }]);
      }),
      (Ii = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }),
      (Li = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.default = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (Ri = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType),
          t.io === `input` && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue))));
      }),
      (zi = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
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
      (Bi = (e, t, n, r) => {
        let i = e._zod.def,
          a = i.in._zod.traits.has(`$ZodTransform`),
          o = t.io === `input` ? (a ? i.out : i.in) : i.out;
        pi(o, t, r);
        let s = t.seen.get(e);
        s.ref = o;
      }),
      (Vi = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
        let a = t.seen.get(e);
        ((a.ref = i.innerType), (n.readOnly = !0));
      }),
      (Hi = (e, t, n, r) => {
        let i = e._zod.def;
        pi(i.innerType, t, r);
        let a = t.seen.get(e);
        a.ref = i.innerType;
      }));
  }),
  Wi = o(() => {
    (v(), He(), P(), nr(), Rt(), Ht(), j(), xt(), sr(), Bt(), di(), yi(), Ui(), yi());
  }),
  Gi = o(() => {
    Wi();
  });
function Ki(e) {
  return jr(Xi, e);
}
function qi(e) {
  return Mr(Zi, e);
}
function Ji(e) {
  return Nr(Qi, e);
}
function Yi(e) {
  return Pr($i, e);
}
var Xi,
  Zi,
  Qi,
  $i,
  ea = o(() => {
    (Wi(),
      Vo(),
      (Xi = f(`ZodISODateTime`, (e, t) => {
        (vn.init(e, t), Xa.init(e, t));
      })),
      (Zi = f(`ZodISODate`, (e, t) => {
        (yn.init(e, t), Xa.init(e, t));
      })),
      (Qi = f(`ZodISOTime`, (e, t) => {
        (bn.init(e, t), Xa.init(e, t));
      })),
      ($i = f(`ZodISODuration`, (e, t) => {
        (xn.init(e, t), Xa.init(e, t));
      })));
  }),
  ta,
  na,
  ra = o(() => {
    (Wi(),
      j(),
      (ta = (e, t) => {
        (N.init(e, t),
          (e.name = `ZodError`),
          Object.defineProperties(e, {
            format: { value: (t) => Te(e, t) },
            flatten: { value: (t) => M(e, t) },
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
      (na = f(`ZodError`, ta, { Parent: Error })));
  }),
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
  ha,
  ga = o(() => {
    (Wi(),
      ra(),
      (ia = Oe(na)),
      (aa = ke(na)),
      (oa = Ae(na)),
      (sa = Me(na)),
      (ca = Pe(na)),
      (la = Fe(na)),
      (ua = Ie(na)),
      (da = Le(na)),
      (fa = Re(na)),
      (pa = ze(na)),
      (ma = Be(na)),
      (ha = Ve(na)));
  });
function _a(e, t, n) {
  let r = Object.getPrototypeOf(e),
    i = Ka.get(r);
  if ((i || ((i = new Set()), Ka.set(r, i)), !i.has(t))) {
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
function va(e) {
  return cr(Ya, e);
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
function Sa(e) {
  return Rr(yo, e);
}
function Ca() {
  return zr(bo);
}
function wa(e) {
  return Br(xo, e);
}
function Ta(e, t) {
  return si(So, e, t);
}
function Ea(e, t) {
  let n = { type: `object`, shape: e ?? {}, ...A(t) };
  return new Co(n);
}
function Da(e, t) {
  return new Co({ type: `object`, shape: e, catchall: wa(), ...A(t) });
}
function Oa(e, t) {
  return new wo({ type: `union`, options: e, ...A(t) });
}
function ka(e, t, n) {
  return new To({ type: `union`, options: t, discriminator: e, ...A(n) });
}
function Aa(e, t) {
  return new Eo({ type: `intersection`, left: e, right: t });
}
function ja(e, t, n) {
  return !t || !t._zod
    ? new Do({ type: `record`, keyType: va(), valueType: e, ...A(t) })
    : new Do({ type: `record`, keyType: e, valueType: t, ...A(n) });
}
function Ma(e, t) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
  return new Oo({ type: `enum`, entries: n, ...A(t) });
}
function Na(e, t) {
  return new ko({ type: `literal`, values: Array.isArray(e) ? e : [e], ...A(t) });
}
function Pa(e) {
  return new Ao({ type: `transform`, transform: e });
}
function Fa(e) {
  return new jo({ type: `optional`, innerType: e });
}
function Ia(e) {
  return new Mo({ type: `optional`, innerType: e });
}
function La(e) {
  return new No({ type: `nullable`, innerType: e });
}
function Ra(e, t) {
  return new Po({
    type: `default`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ie(t);
    },
  });
}
function za(e, t) {
  return new Fo({
    type: `prefault`,
    innerType: e,
    get defaultValue() {
      return typeof t == `function` ? t() : ie(t);
    },
  });
}
function Ba(e, t) {
  return new Io({ type: `nonoptional`, innerType: e, ...A(t) });
}
function Va(e, t) {
  return new Lo({ type: `catch`, innerType: e, catchValue: typeof t == `function` ? t : () => t });
}
function Ha(e, t) {
  return new Ro({ type: `pipe`, in: e, out: t });
}
function Ua(e) {
  return new zo({ type: `readonly`, innerType: e });
}
function Wa(e, t = {}) {
  return ci(Bo, e, t);
}
function Ga(e, t) {
  return li(e, t);
}
var Ka,
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
  uo,
  z,
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
  Bo,
  Vo = o(() => {
    (Wi(),
      Ui(),
      yi(),
      Gi(),
      ea(),
      ga(),
      (Ka = new WeakMap()),
      (qa = f(
        `ZodType`,
        (e, t) => (
          I.init(e, t),
          Object.assign(e[`~standard`], {
            jsonSchema: { input: vi(e, `input`), output: vi(e, `output`) },
          }),
          (e.toJSONSchema = _i(e, {})),
          (e.def = t),
          (e.type = t.type),
          Object.defineProperty(e, "_def", { value: t }),
          (e.parse = (t, n) => ia(e, t, n, { callee: e.parse })),
          (e.safeParse = (t, n) => oa(e, t, n)),
          (e.parseAsync = async (t, n) => aa(e, t, n, { callee: e.parseAsync })),
          (e.safeParseAsync = async (t, n) => sa(e, t, n)),
          (e.spa = e.safeParseAsync),
          (e.encode = (t, n) => ca(e, t, n)),
          (e.decode = (t, n) => la(e, t, n)),
          (e.encodeAsync = async (t, n) => ua(e, t, n)),
          (e.decodeAsync = async (t, n) => da(e, t, n)),
          (e.safeEncode = (t, n) => fa(e, t, n)),
          (e.safeDecode = (t, n) => pa(e, t, n)),
          (e.safeEncodeAsync = async (t, n) => ma(e, t, n)),
          (e.safeDecodeAsync = async (t, n) => ha(e, t, n)),
          _a(e, `ZodType`, {
            check(...e) {
              let t = this.def;
              return this.clone(
                D(t, {
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
              return this.check(Wa(e, t));
            },
            superRefine(e, t) {
              return this.check(Ga(e, t));
            },
            overwrite(e) {
              return this.check(ti(e));
            },
            optional() {
              return Fa(this);
            },
            exactOptional() {
              return Ia(this);
            },
            nullable() {
              return La(this);
            },
            nullish() {
              return Fa(La(this));
            },
            nonoptional(e) {
              return Ba(this, e);
            },
            array() {
              return Ta(this);
            },
            or(e) {
              return Oa([this, e]);
            },
            and(e) {
              return Aa(this, e);
            },
            transform(e) {
              return Ha(this, Pa(e));
            },
            default(e) {
              return Ra(this, e);
            },
            prefault(e) {
              return za(this, e);
            },
            catch(e) {
              return Va(this, e);
            },
            pipe(e) {
              return Ha(this, e);
            },
            readonly() {
              return Ua(this);
            },
            describe(e) {
              let t = this.clone();
              return (or.add(t, { description: e }), t);
            },
            meta(...e) {
              if (e.length === 0) return or.get(this);
              let t = this.clone();
              return (or.add(t, e[0]), t);
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
              return or.get(e)?.description;
            },
            configurable: !0,
          }),
          e
        ),
      )),
      (Ja = f(`_ZodString`, (e, t) => {
        (on.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => xi(e, t, n, r)));
        let n = e._zod.bag;
        ((e.format = n.format ?? null),
          (e.minLength = n.minimum ?? null),
          (e.maxLength = n.maximum ?? null),
          _a(e, `_ZodString`, {
            regex(...e) {
              return this.check(Yr(...e));
            },
            includes(...e) {
              return this.check(Qr(...e));
            },
            startsWith(...e) {
              return this.check($r(...e));
            },
            endsWith(...e) {
              return this.check(ei(...e));
            },
            min(...e) {
              return this.check(qr(...e));
            },
            max(...e) {
              return this.check(Kr(...e));
            },
            length(...e) {
              return this.check(Jr(...e));
            },
            nonempty(...e) {
              return this.check(qr(1, ...e));
            },
            lowercase(e) {
              return this.check(Xr(e));
            },
            uppercase(e) {
              return this.check(Zr(e));
            },
            trim() {
              return this.check(ri());
            },
            normalize(...e) {
              return this.check(ni(...e));
            },
            toLowerCase() {
              return this.check(ii());
            },
            toUpperCase() {
              return this.check(ai());
            },
            slugify() {
              return this.check(oi());
            },
          }));
      })),
      (Ya = f(`ZodString`, (e, t) => {
        (on.init(e, t),
          Ja.init(e, t),
          (e.email = (t) => e.check(lr(Za, t))),
          (e.url = (t) => e.check(hr(eo, t))),
          (e.jwt = (t) => e.check(Ar(ho, t))),
          (e.emoji = (t) => e.check(gr(to, t))),
          (e.guid = (t) => e.check(ur(Qa, t))),
          (e.uuid = (t) => e.check(dr($a, t))),
          (e.uuidv4 = (t) => e.check(fr($a, t))),
          (e.uuidv6 = (t) => e.check(pr($a, t))),
          (e.uuidv7 = (t) => e.check(mr($a, t))),
          (e.nanoid = (t) => e.check(_r(no, t))),
          (e.guid = (t) => e.check(ur(Qa, t))),
          (e.cuid = (t) => e.check(vr(ro, t))),
          (e.cuid2 = (t) => e.check(yr(io, t))),
          (e.ulid = (t) => e.check(br(ao, t))),
          (e.base64 = (t) => e.check(Dr(fo, t))),
          (e.base64url = (t) => e.check(Or(po, t))),
          (e.xid = (t) => e.check(xr(oo, t))),
          (e.ksuid = (t) => e.check(Sr(so, t))),
          (e.ipv4 = (t) => e.check(Cr(co, t))),
          (e.ipv6 = (t) => e.check(wr(lo, t))),
          (e.cidrv4 = (t) => e.check(Tr(uo, t))),
          (e.cidrv6 = (t) => e.check(Er(z, t))),
          (e.e164 = (t) => e.check(kr(mo, t))),
          (e.datetime = (t) => e.check(Ki(t))),
          (e.date = (t) => e.check(qi(t))),
          (e.time = (t) => e.check(Ji(t))),
          (e.duration = (t) => e.check(Yi(t))));
      })),
      (Xa = f(`ZodStringFormat`, (e, t) => {
        (L.init(e, t), Ja.init(e, t));
      })),
      (Za = f(`ZodEmail`, (e, t) => {
        (ln.init(e, t), Xa.init(e, t));
      })),
      (Qa = f(`ZodGUID`, (e, t) => {
        (sn.init(e, t), Xa.init(e, t));
      })),
      ($a = f(`ZodUUID`, (e, t) => {
        (cn.init(e, t), Xa.init(e, t));
      })),
      (eo = f(`ZodURL`, (e, t) => {
        (un.init(e, t), Xa.init(e, t));
      })),
      (to = f(`ZodEmoji`, (e, t) => {
        (dn.init(e, t), Xa.init(e, t));
      })),
      (no = f(`ZodNanoID`, (e, t) => {
        (fn.init(e, t), Xa.init(e, t));
      })),
      (ro = f(`ZodCUID`, (e, t) => {
        (pn.init(e, t), Xa.init(e, t));
      })),
      (io = f(`ZodCUID2`, (e, t) => {
        (mn.init(e, t), Xa.init(e, t));
      })),
      (ao = f(`ZodULID`, (e, t) => {
        (hn.init(e, t), Xa.init(e, t));
      })),
      (oo = f(`ZodXID`, (e, t) => {
        (gn.init(e, t), Xa.init(e, t));
      })),
      (so = f(`ZodKSUID`, (e, t) => {
        (_n.init(e, t), Xa.init(e, t));
      })),
      (co = f(`ZodIPv4`, (e, t) => {
        (Sn.init(e, t), Xa.init(e, t));
      })),
      (lo = f(`ZodIPv6`, (e, t) => {
        (Cn.init(e, t), Xa.init(e, t));
      })),
      (uo = f(`ZodCIDRv4`, (e, t) => {
        (wn.init(e, t), Xa.init(e, t));
      })),
      (z = f(`ZodCIDRv6`, (e, t) => {
        (Tn.init(e, t), Xa.init(e, t));
      })),
      (fo = f(`ZodBase64`, (e, t) => {
        (En.init(e, t), Xa.init(e, t));
      })),
      (po = f(`ZodBase64URL`, (e, t) => {
        (Dn.init(e, t), Xa.init(e, t));
      })),
      (mo = f(`ZodE164`, (e, t) => {
        (On.init(e, t), Xa.init(e, t));
      })),
      (ho = f(`ZodJWT`, (e, t) => {
        (kn.init(e, t), Xa.init(e, t));
      })),
      (go = f(`ZodNumber`, (e, t) => {
        (An.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Si(e, t, n, r)),
          _a(e, `ZodNumber`, {
            gt(e, t) {
              return this.check(Ur(e, t));
            },
            gte(e, t) {
              return this.check(Wr(e, t));
            },
            min(e, t) {
              return this.check(Wr(e, t));
            },
            lt(e, t) {
              return this.check(Vr(e, t));
            },
            lte(e, t) {
              return this.check(Hr(e, t));
            },
            max(e, t) {
              return this.check(Hr(e, t));
            },
            int(e) {
              return this.check(ba(e));
            },
            safe(e) {
              return this.check(ba(e));
            },
            positive(e) {
              return this.check(Ur(0, e));
            },
            nonnegative(e) {
              return this.check(Wr(0, e));
            },
            negative(e) {
              return this.check(Vr(0, e));
            },
            nonpositive(e) {
              return this.check(Hr(0, e));
            },
            multipleOf(e, t) {
              return this.check(Gr(e, t));
            },
            step(e, t) {
              return this.check(Gr(e, t));
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
        (jn.init(e, t), go.init(e, t));
      })),
      (vo = f(`ZodBoolean`, (e, t) => {
        (Mn.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ci(e, t, n, r)));
      })),
      (yo = f(`ZodNull`, (e, t) => {
        (Nn.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => wi(e, t, n, r)));
      })),
      (bo = f(`ZodUnknown`, (e, t) => {
        (Pn.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ei(e, t, n, r)));
      })),
      (xo = f(`ZodNever`, (e, t) => {
        (Fn.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ti(e, t, n, r)));
      })),
      (So = f(`ZodArray`, (e, t) => {
        (In.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => ji(e, t, n, r)),
          (e.element = t.element),
          _a(e, `ZodArray`, {
            min(e, t) {
              return this.check(qr(e, t));
            },
            nonempty(e) {
              return this.check(qr(1, e));
            },
            max(e, t) {
              return this.check(Kr(e, t));
            },
            length(e, t) {
              return this.check(Jr(e, t));
            },
            unwrap() {
              return this.element;
            },
          }));
      })),
      (Co = f(`ZodObject`, (e, t) => {
        (Rn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Mi(e, t, n, r)),
          T(e, `shape`, () => t.shape),
          _a(e, `ZodObject`, {
            keyof() {
              return Ma(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone({ ...this._zod.def, catchall: e });
            },
            passthrough() {
              return this.clone({ ...this._zod.def, catchall: Ca() });
            },
            loose() {
              return this.clone({ ...this._zod.def, catchall: Ca() });
            },
            strict() {
              return this.clone({ ...this._zod.def, catchall: wa() });
            },
            strip() {
              return this.clone({ ...this._zod.def, catchall: void 0 });
            },
            extend(e) {
              return ce(this, e);
            },
            safeExtend(e) {
              return le(this, e);
            },
            merge(e) {
              return ue(this, e);
            },
            pick(e) {
              return oe(this, e);
            },
            omit(e) {
              return se(this, e);
            },
            partial(...e) {
              return de(jo, this, e[0]);
            },
            required(...e) {
              return fe(Io, this, e[0]);
            },
          }));
      })),
      (wo = f(`ZodUnion`, (e, t) => {
        (zn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => R(e, t, n, r)),
          (e.options = t.options));
      })),
      (To = f(`ZodDiscriminatedUnion`, (e, t) => {
        (wo.init(e, t), Bn.init(e, t));
      })),
      (Eo = f(`ZodIntersection`, (e, t) => {
        (Vn.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => Ni(e, t, n, r)));
      })),
      (Do = f(`ZodRecord`, (e, t) => {
        (Hn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Pi(e, t, n, r)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType));
      })),
      (Oo = f(`ZodEnum`, (e, t) => {
        (Un.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Di(e, t, n, r)),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries)));
        let n = new Set(Object.keys(t.entries));
        ((e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new Oo({ ...t, checks: [], ...A(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new Oo({ ...t, checks: [], ...A(r), entries: i });
          }));
      })),
      (ko = f(`ZodLiteral`, (e, t) => {
        (Wn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r)),
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
      (Ao = f(`ZodTransform`, (e, t) => {
        (Gn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ai(e, t, n, r)),
          (e._zod.parse = (n, r) => {
            if (r.direction === `backward`) throw new g(e.constructor.name);
            n.addIssue = (r) => {
              if (typeof r == `string`) n.issues.push(ye(r, n.value, t));
              else {
                let t = r;
                (t.fatal && (t.continue = !1),
                  (t.code ??= `custom`),
                  (t.input ??= n.value),
                  (t.inst ??= e),
                  n.issues.push(ye(t)));
              }
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise
              ? i.then((e) => ((n.value = e), (n.fallback = !0), n))
              : ((n.value = i), (n.fallback = !0), n);
          }));
      })),
      (jo = f(`ZodOptional`, (e, t) => {
        (Kn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Hi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Mo = f(`ZodExactOptional`, (e, t) => {
        (qn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Hi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (No = f(`ZodNullable`, (e, t) => {
        (Jn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Fi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Po = f(`ZodDefault`, (e, t) => {
        (Yn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Li(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap));
      })),
      (Fo = f(`ZodPrefault`, (e, t) => {
        (Xn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ri(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Io = f(`ZodNonOptional`, (e, t) => {
        (Zn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Ii(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Lo = f(`ZodCatch`, (e, t) => {
        (Qn.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => zi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap));
      })),
      (Ro = f(`ZodPipe`, (e, t) => {
        ($n.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Bi(e, t, n, r)),
          (e.in = t.in),
          (e.out = t.out));
      })),
      (zo = f(`ZodReadonly`, (e, t) => {
        (er.init(e, t),
          qa.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => Vi(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType));
      })),
      (Bo = f(`ZodCustom`, (e, t) => {
        (tr.init(e, t), qa.init(e, t), (e._zod.processJSONSchema = (t, n, r) => ki(e, t, n, r)));
      })));
  }),
  Ho = o(() => {
    Wi();
  }),
  Uo = o(() => {
    (Wi(), Vo(), Gi(), ra(), ga(), Ho(), Ui(), sr(), Gi(), ea(), Vo(), j());
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
  return (
    e.length <= Yo.maxSerializedBytes &&
    new TextEncoder().encode(e).byteLength <= Yo.maxSerializedBytes
  );
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
      (Xo = va().regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)),
      (Zo = va()
        .max(Yo.maxKeyLength)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*(?: [A-Za-z0-9_-]+)*$/)
        .refine((e) => e !== `__proto__` && e !== `constructor` && e !== `prototype`)),
      (Qo = Oa([Xo.max(Yo.maxStringValueLength), ya(), xa(), Sa()])),
      ($o = ja(Zo, Qo)),
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
  return r == null
    ? t
    : `#${Es(r.red)}${Es(r.green)}${Es(r.blue)}${r.alpha == null ? `` : Es(r.alpha)}`;
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
  return [o, s, c].some(Number.isNaN)
    ? null
    : { alpha: a == null ? null : Ts(a), blue: c, green: s, red: o };
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
        n != null &&
        e.selector === n.selector &&
        e.scrollLeft === n.scrollLeft &&
        e.scrollTop === n.scrollTop
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
          return (
            r != null && e.x === r.x && e.y === r.y && e.width === r.width && e.height === r.height
          );
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
      (Ps = va().max(240)),
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
    let r = Nc(e);
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
  return Rc(t) ? t.host : null;
}
function ec(e) {
  if (typeof e != `object` || !e) return !1;
  let t = e,
    n =
      t.ownerDocument?.defaultView?.HTMLIFrameElement ??
      (typeof HTMLIFrameElement > `u` ? null : HTMLIFrameElement);
  return (
    (n != null && e instanceof n) || (t.tagName?.toLowerCase() === `iframe` && `contentWindow` in t)
  );
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
  return r === Yc ? null : r;
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
    if (e !== void 0) return e ?? Yc;
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
      for (let e of Pc(i)) {
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
          (Lc(a?.cleanup), t.set(i, { cleanup: r(e, i, n), document: e, documentElement: o }));
      }
      for (let [e, n] of t) i.has(e) || (Lc(n.cleanup), t.delete(e));
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
function sc(e, t, n = !1, r) {
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
  return (
    s.setAttribute(qc, `true`), (s.textContent = o), (e.head ?? e.documentElement).append(s), s
  );
}
function cc(e) {
  (Ic(e),
    e.querySelectorAll(`style[${qc}]`).forEach((e) => {
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
  let n = t.startsWith(Gc) ? t.slice(7).split(Kc) : [t],
    r = e;
  for (let [e, t] of n.entries()) {
    let i = r.querySelector(t);
    if (e === n.length - 1) return B(i) ? i : null;
    if (!B(i) || i.shadowRoot == null) return null;
    r = i.shadowRoot;
  }
  return null;
}
function Sc(e) {
  let t = yc(e);
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
      let e = Array.from(c.children).filter((e) => B(e) && e.tagName === o);
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
    n = $s(n);
  }
  return !1;
}
function Ec(e, t) {
  if (typeof e.document.elementFromPoint != `function`) return [];
  let n = e.document.elementFromPoint(t.x, t.y);
  return B(n) ? Dc(n, { includeElement: !0 }) : [];
}
function Dc(e, { includeElement: t = !1 } = {}) {
  let n = Ac(e),
    r = [],
    i = t ? e : $s(e);
  for (; i != null && i !== n.document.body && i !== n.document.documentElement;) {
    if (Vc(i, n)) {
      let e = wc(i);
      e != null && r.push({ selector: e, scrollLeft: i.scrollLeft, scrollTop: i.scrollTop });
    }
    i = $s(i);
  }
  return r;
}
function Oc(e, t) {
  let n = 0,
    r = 0;
  for (let i of e.scrollContainers ?? []) {
    let e = xc(t.document, i.selector);
    B(e) && ((n += e.scrollLeft - i.scrollLeft), (r += e.scrollTop - i.scrollTop));
  }
  return { x: n, y: r };
}
function kc(e, t, n) {
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
function Ac(e) {
  return e.ownerDocument.defaultView ?? window;
}
function jc(e) {
  if (e === window) return { x: 0, y: 0 };
  let t = e.frameElement;
  if (!ec(t)) return { x: 0, y: 0 };
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
    (ec(n) && t.push(n), B(n) && n.shadowRoot != null && t.push(...Pc(n.shadowRoot)));
  return t;
}
function Fc(e) {
  let t = e.ownerDocument;
  Jc.get(t)?.element !== e && Ic(t);
  let n = e.style.getPropertyValue(`cursor`),
    r = e.style.getPropertyPriority(`cursor`);
  (n !== `none` || r !== `important`) &&
    (Jc.set(t, { element: e, cursor: n, priority: r }),
    e.style.setProperty(`cursor`, `none`, `important`));
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
  return (
    e.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
    `host` in e &&
    B(e.host) &&
    e.host.shadowRoot === e
  );
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
  return [n.overflow, n.overflowX, n.overflowY].some(Zs);
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
    n = $s(n);
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
    i = $s(i);
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
            ? e.anchor.selector === t.anchor.selector &&
              e.anchor.elementPath === t.anchor.elementPath
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
    : hc(e) != null && t.width >= il.width && t.height >= il.height;
}
var rl,
  il,
  al = o(() => {
    (Xc(), (rl = { width: 48, height: 24 }), (il = { width: 24, height: 16 }));
  });
function ol(e, t, n) {
  return Zc(V(e, t, n, `text`));
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
    s = r == null ? rc(e, t, o) : V(e, t, r, i, n, o),
    c = s?.ownerDocument.defaultView;
  if (s == null || c == null) return null;
  let l = Mc(c, { x: 0, y: 0 }),
    u = hl(s, { x: e - l.x, y: t - l.y }, i, n);
  return (u != null && a && (u.usesSelectableContainer = !0), u);
}
function cl(e, t, n = `annotation`) {
  let r = e.composedPath().find((e) => B(e) && e.namespaceURI === `http://www.w3.org/1999/xhtml`);
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
      if (!ec(e)) return null;
      let t = e.ownerDocument.defaultView;
      if (t == null) return null;
      let n = Mc(t, { x: 0, y: 0 });
      (o.unshift({ frame: e, point: { x: a.x - n.x, y: a.y - n.y } }), (s = t));
    }
    for (let { frame: e, point: r } of o) {
      let i = Qc(e, r);
      if (i !== void 0) {
        let e = i == null ? null : hl(i, r, n, t);
        return (e != null && (e.usesSelectableContainer = !0), e);
      }
    }
  }
  return hl(r, i, n, t);
}
function V(e, t, n, r = `design`, i = !1, a) {
  let o = n.shadowRoot?.querySelector(`[data-browser-comment-root]`),
    s = a ?? (r === `annotation` && i ? Qc : void 0);
  if (
    (r === `text` && (s = (e, t) => (Qc(e, t) === void 0 ? void 0 : null)),
    !(o instanceof HTMLElement))
  )
    return rc(e, t, s);
  let c = n.shadowRoot?.querySelector(`[${vl}]`),
    l = n.shadowRoot?.querySelector(`[${yl}]`),
    u = n.style.pointerEvents,
    d = o.style.pointerEvents,
    f = l instanceof HTMLElement ? l.style.pointerEvents : void 0,
    p = c instanceof HTMLElement ? c.style.pointerEvents : void 0;
  ((n.style.pointerEvents = `none`),
    (o.style.pointerEvents = `none`),
    l instanceof HTMLElement && (l.style.pointerEvents = `none`),
    c instanceof HTMLElement && (c.style.pointerEvents = `none`));
  try {
    return rc(e, t, s);
  } finally {
    ((n.style.pointerEvents = u),
      (o.style.pointerEvents = d),
      l instanceof HTMLElement && (l.style.pointerEvents = f ?? ``),
      c instanceof HTMLElement && (c.style.pointerEvents = p ?? ``));
  }
}
function ll(e) {
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
function ul(e, t) {
  let n = rc(e.x, e.y);
  n == null || ll(n) || dc(t, yl);
}
function dl(e, t, n, r) {
  return ml(n) ? fl(e, t, r) : sl(e.x, e.y, r, t);
}
function fl(e, t, n) {
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
function pl(e, t) {
  return e.composedPath().includes(t) && !gl(e);
}
function ml(e) {
  return e
    .composedPath()
    .some((e) => e instanceof HTMLElement && e.hasAttribute(`data-browser-comment-marker`));
}
function hl(e, t, n, r) {
  if (ll(e)) return null;
  let i = n === `annotation` && r ? Qc(e, t) : void 0,
    a;
  return (
    (a = Qs(e) ? (n === `annotation` && r && Zc(e) != null ? null : e) : i === void 0 ? tl(e) : i),
    a == null || ll(a) ? null : { element: a, usesSelectableContainer: i != null }
  );
}
function gl(e) {
  return e.composedPath().some((e) => e instanceof HTMLElement && e.hasAttribute(vl));
}
var _l,
  vl,
  yl,
  bl = o(() => {
    (al(),
      Xc(),
      (_l = `codex-browser-sidebar-comments-root`),
      (vl = `data-browser-comment-interaction-blocker`),
      (yl = `data-browser-comment-interaction-layer`));
  });
function xl(e, t = 0) {
  return (
    Sl[e[t + 0]] +
    Sl[e[t + 1]] +
    Sl[e[t + 2]] +
    Sl[e[t + 3]] +
    `-` +
    Sl[e[t + 4]] +
    Sl[e[t + 5]] +
    `-` +
    Sl[e[t + 6]] +
    Sl[e[t + 7]] +
    `-` +
    Sl[e[t + 8]] +
    Sl[e[t + 9]] +
    `-` +
    Sl[e[t + 10]] +
    Sl[e[t + 11]] +
    Sl[e[t + 12]] +
    Sl[e[t + 13]] +
    Sl[e[t + 14]] +
    Sl[e[t + 15]]
  ).toLowerCase();
}
var Sl,
  Cl = o(() => {
    Sl = [];
    for (let e = 0; e < 256; ++e) Sl.push((e + 256).toString(16).slice(1));
  });
function wl() {
  if (!Tl) {
    if (typeof crypto > `u` || !crypto.getRandomValues)
      throw Error(
        `crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported`,
      );
    Tl = crypto.getRandomValues.bind(crypto);
  }
  return Tl(El);
}
var Tl,
  El,
  Dl = o(() => {
    El = new Uint8Array(16);
  }),
  Ol,
  kl,
  Al = o(() => {
    ((Ol = typeof crypto < `u` && crypto.randomUUID && crypto.randomUUID.bind(crypto)),
      (kl = { randomUUID: Ol }));
  });
function jl(e, t, n) {
  if (kl.randomUUID && !t && !e) return kl.randomUUID();
  e ||= {};
  let r = e.random ?? e.rng?.() ?? wl();
  if (r.length < 16) throw Error(`Random bytes length must be >= 16`);
  if (((r[6] = (r[6] & 15) | 64), (r[8] = (r[8] & 63) | 128), t)) {
    if (((n ||= 0), n < 0 || n + 16 > t.length))
      throw RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let e = 0; e < 16; ++e) t[n + e] = r[e];
    return t;
  }
  return xl(r);
}
var Ml = o(() => {
    (Al(), Dl(), Cl());
  }),
  Nl = o(() => {
    (Cl(), Dl(), Ml());
  });
function Pl(e) {
  let t = (e ?? ``).replace(/\s+/g, ` `).trim();
  return t.length === 0 ? null : t.slice(0, U);
}
function Fl(e) {
  if (!zl(e)) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (n != null && e instanceof n) || (r != null && e instanceof r);
}
function Il(e) {
  try {
    return e.document;
  } catch {
    return null;
  }
}
function Ll(e) {
  if (e.closest(`script,style,noscript,template,[hidden],[aria-hidden='true']`) != null) return !1;
  let t = Rl(e).getComputedStyle(e);
  return t.display !== `none` && t.visibility !== `hidden` && t.opacity !== `0`;
}
function Rl(e) {
  return e.ownerDocument.defaultView ?? window;
}
function zl(e) {
  return e != null && e instanceof (e.ownerDocument.defaultView?.HTMLElement ?? HTMLElement);
}
function H(e, t, n) {
  let r = e.createRange();
  return (r.selectNodeContents(t), Array.from(r.getClientRects()).some((e) => Bl(e, n)));
}
function Bl(e, t) {
  return e.right >= t.x && e.left <= t.x + t.width && e.bottom >= t.y && e.top <= t.y + t.height;
}
var U,
  W,
  G,
  Vl,
  Hl,
  Ul = o(() => {
    (Js(),
      (U = 2e3),
      (W = 4),
      (G = 1),
      (Vl = 2),
      (Hl = class {
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
          return e.documentContext?.kind === `google-docs` || us(e.pageUrl) != null;
        }
        getWindowSelectionText(e) {
          try {
            return Pl(e.getSelection()?.toString()) ?? this.getActiveElementSelectionText(e);
          } catch {
            return null;
          }
        }
        getActiveElementSelectionText(e) {
          let t = e.document.activeElement;
          if (!Fl(t)) return null;
          let n = t.selectionStart,
            r = t.selectionEnd;
          return n == null || r == null || r <= n ? null : Pl(t.value.slice(n, r));
        }
        getVisibleTextInViewportRect(e, t) {
          let n = Il(e),
            r = n?.body;
          if (n == null || r == null) return null;
          let i = ``,
            a = n.createTreeWalker(r, W, {
              acceptNode: (e) => {
                if (Pl(e.textContent) == null) return Vl;
                let t = e.parentElement;
                return !zl(t) || !Ll(t) ? Vl : G;
              },
            }),
            o = a.nextNode();
          for (; o != null;) {
            let e = Pl(o.textContent);
            if (e != null && H(n, o, t) && ((i = i.length === 0 ? e : `${i} ${e}`), i.length >= U))
              break;
            o = a.nextNode();
          }
          return Pl(i);
        }
      }));
  });
function Wl(e) {
  let t = e.commonAncestorContainer.getRootNode();
  if (!ql(t)) return null;
  let n = `defaultView` in t ? t.defaultView : t.ownerDocument.defaultView;
  return n != null && Kl(n) ? { ownerWindow: n, range: e, styleRoot: t } : null;
}
function Gl({ color: e, name: t, ownerWindow: n, range: r, styleRoot: i }) {
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
function Kl(e) {
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
function ql(e) {
  return (
    `adoptedStyleSheets` in e &&
    (e.nodeType === Node.DOCUMENT_NODE ||
      (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e))
  );
}
var Jl = o(() => {});
function Yl(e, t, n) {
  let r = e.ownerDocument.createRange();
  try {
    return (r.selectNodeContents(e), r.setEnd(t, n), r.toString().length);
  } catch {
    return null;
  }
}
function Xl(e, t) {
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
var Zl = o(() => {});
function Ql(e) {
  let t = e ?? window;
  if (e == null)
    for (;;) {
      let e = bu(t.document),
        n = e == null ? null : nc(e);
      if (n == null) {
        if (ec(e)) return null;
        break;
      }
      t = n;
    }
  let n = yu(t) ?? uu(t);
  return n == null ? null : Su(n);
}
function $l(e) {
  let t = e.startContainer.ownerDocument?.defaultView;
  if (t == null) return null;
  let n = du(t, e, e.toString(), `forward`);
  return n == null ? null : Su(n);
}
function eu(e) {
  let t = yc(e.framePath);
  if (t == null || !su(e.frameUrl, t)) return null;
  let n = Tu(t, e.textLocator);
  if (n == null) return null;
  let r = vu(n, e.textLocator);
  return r?.toString() === e.textLocator.rangeText ? { range: r, target: n } : null;
}
function tu(e) {
  let t = yc(e.framePath);
  if (t == null || !su(e.frameUrl, t)) return null;
  let n = Tu(t, e.textLocator);
  if (n == null) return null;
  let r;
  switch (e.textLocator.kind) {
    case `dom`:
      r = _u(t, n, e.textLocator, e.selectedText);
      break;
    case `form-control`:
      r =
        B(n) && Bu(n)
          ? xu(t, n, e.textLocator.startOffset, e.textLocator.endOffset, e.textLocator.direction)
          : null;
  }
  if (r == null || r.selectedText !== e.selectedText) return null;
  let i = Su(r);
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
function nu(e, t) {
  let n = new Map();
  for (let t of e) {
    if (t.anchor.kind !== `text`) continue;
    let e = tu(t.anchor)?.anchor;
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
function ru(e, t) {
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
      e.every(Fu) ||
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
      for (let e of i) for (let t of Ku) e.removeEventListener(t, u, !0);
      ((n = new Set()), (r = new Set()), (i = new Set()), (a = !1));
      let t = new Set(),
        o = new Set();
      for (let s of e) {
        for (let e of Eu(s.framePath)) (i.add(e), t.add(e.documentElement));
        let e = yc(s.framePath);
        if (e == null) {
          a = !0;
          continue;
        }
        let c = Tu(e, s.textLocator);
        if (c == null) {
          a = !0;
          let n = Du(e, s.textLocator);
          (t.add(n), ku(n) && i.add(n));
          continue;
        }
        (n.add(c), t.add(c), ku(c) && i.add(c));
        let l = c.parentNode ?? Ou(c);
        for (; l != null;) (ku(l) ? (t.add(l), i.add(l)) : o.add(l), (l = l.parentNode ?? Ou(l)));
        let u = B(c) ? c : Ou(c);
        for (; u != null;) (r.add(u), (u = u.parentElement ?? Ou(u.getRootNode())));
      }
      for (let e of t) d.observe(e, Gu);
      for (let e of o)
        t.has(e) || d.observe(e, { ...(B(e) ? { attributes: !0 } : {}), childList: !0 });
      for (let e of n) e.addEventListener(`input`, l);
      for (let e of r) e.addEventListener(`scroll`, c);
      for (let e of i) for (let t of Ku) e.addEventListener(t, u, !0);
    };
  return (
    f(),
    () => {
      d.disconnect();
      for (let e of n) e.removeEventListener(`input`, l);
      for (let e of r) e.removeEventListener(`scroll`, c);
      for (let e of i) for (let t of Ku) e.removeEventListener(t, u, !0);
      o != null && window.cancelAnimationFrame(o);
    }
  );
}
function iu(e) {
  if (e.textLocator.kind !== `dom`) return null;
  let t = eu({ framePath: e.framePath, frameUrl: e.frameUrl, textLocator: e.textLocator });
  return t == null ? null : Wl(t.range);
}
function au(e) {
  return Gl({ ...e, color: Wu, name: Uu });
}
function ou(e) {
  let t = e.document,
    n = null,
    r = () => {
      (n?.dispose(), (n = null));
    },
    i = () => {
      let i = e.getSelection(),
        a = i != null && i.rangeCount > 0 && !Bu(bu(t)) ? fu(e, i) : null,
        o = a == null ? null : Wl(a);
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
      let s = Gl({ ...o, color: Wu, name: `${Uu}-drag` }),
        c = new o.ownerWindow.CSSStyleSheet();
      (c.replaceSync(
        `::selection { background-color: transparent !important; color: currentColor !important; }`,
      ),
        (o.styleRoot.adoptedStyleSheets = [...o.styleRoot.adoptedStyleSheets, c]),
        (n = {
          target: o,
          dispose: () => {
            (s(),
              (o.styleRoot.adoptedStyleSheets = o.styleRoot.adoptedStyleSheets.filter(
                (e) => e !== c,
              )));
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
function su(e, t) {
  return e == null || t.location.href === e;
}
function cu() {
  for (let e of ac())
    try {
      e.getSelection()?.removeAllRanges();
      let t = bu(e.document);
      Bu(t) && t.setSelectionRange(t.selectionEnd, t.selectionEnd);
    } catch {}
}
function lu(e, t) {
  return e.kind === `text` && !e.isFixed ? t.scrollX : 0;
}
function uu(e) {
  let t = e.getSelection();
  if (t == null || t.rangeCount === 0) return null;
  let n = fu(e, t);
  return n == null ? null : du(e, n, t.toString(), gu(t, n));
}
function du(e, t, n, r) {
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
  let i = Cu(t.commonAncestorContainer);
  if (i == null || ju(t, e)) return null;
  let a = wu(i);
  if (a == null) return null;
  let o = Yl(i, t.startContainer, t.startOffset),
    s = Yl(i, t.endContainer, t.endOffset);
  if (o == null || s == null || s <= o) return null;
  let c = Nu(t);
  if (c.length === 0) return null;
  let l = r === `forward`;
  return {
    frameWindow: e,
    isFixed: Au(i, e),
    locator: {
      ...a,
      kind: `dom`,
      direction: r,
      rangeText: t.toString(),
      startOffset: o,
      endOffset: s,
    },
    rects: c,
    selectedText: n,
    viewportPoint: zu(c, l),
  };
}
function fu(e, t) {
  let n = t.getRangeAt(0);
  if (!n.collapsed && pu(t, n)) return n;
  if (!mu(t)) return null;
  let r = t.getComposedRanges({ shadowRoots: hu(e.document) })[0];
  if (r == null) return null;
  let i = e.document.createRange();
  return (
    i.setStart(r.startContainer, r.startOffset),
    i.setEnd(r.endContainer, r.endOffset),
    i.collapsed ? null : i
  );
}
function pu(e, t) {
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
function mu(e) {
  return `getComposedRanges` in e && typeof e.getComposedRanges == `function`;
}
function hu(e) {
  let t = [];
  for (let n of e.querySelectorAll(`*`))
    B(n) && n.shadowRoot != null && t.push(n.shadowRoot, ...hu(n.shadowRoot));
  return t;
}
function gu(e, t) {
  return e.anchorNode === t.startContainer && e.anchorOffset === t.startOffset
    ? `forward`
    : (e.focusNode === t.startContainer && e.focusOffset === t.startOffset) ||
        (`direction` in e && e.direction === `backward`)
      ? `backward`
      : `forward`;
}
function _u(e, t, n, r) {
  let i = vu(t, n);
  if (i == null || i.toString() !== n.rangeText || ju(i, e) || r.length > 2e4) return null;
  let a = Nu(i);
  return a.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Au(t, e),
        locator: n,
        rects: a,
        selectedText: r,
        viewportPoint: zu(a, n.direction === `forward`),
      };
}
function vu(e, t) {
  let n = Xl(e, t.startOffset),
    r = Xl(e, t.endOffset);
  if (n == null || r == null) return null;
  let i = e.ownerDocument.createRange();
  return (i.setStart(n.node, n.offset), i.setEnd(r.node, r.offset), i);
}
function yu(e) {
  let t = bu(e.document);
  if (!Bu(t) || Mu(t, e)) return null;
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
    : xu(e, t, n, r, t.selectionDirection === `backward` ? `backward` : `forward`);
}
function bu(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null;) t = t.shadowRoot.activeElement;
  return t;
}
function xu(e, t, n, r, i) {
  let a = wu(t),
    o = t.value.slice(n, r);
  if (a?.selector == null || Mu(t, e) || o.trim().length === 0 || o.length > 2e4) return null;
  let s = Pu(t, n, r);
  return s.length === 0
    ? null
    : {
        frameWindow: e,
        isFixed: Au(t, e),
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
        viewportPoint: zu(s, i === `forward`),
      };
}
function Su(e) {
  let t = Ys(e.frameWindow);
  if (t == null) return null;
  let n = jc(e.frameWindow),
    r = Ru(e.rects),
    i = e.isFixed ? 0 : e.frameWindow.scrollX,
    a = e.rects.map((t) => ({
      ...t,
      x: t.x + i,
      y: e.isFixed ? t.y : t.y + e.frameWindow.scrollY,
    })),
    o = Ru(a),
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
function Cu(e) {
  if (ku(e)) return e;
  let t = e.nodeType === 1 ? e : e.parentElement;
  for (; B(t);) {
    if (Cc(t) != null) return t;
    t = t.parentElement;
  }
  return null;
}
function wu(e) {
  let t = B(e) ? Cc(e, { requireUnique: !0 }) : null;
  if (B(e) && t == null) return null;
  let n = [],
    r = e.getRootNode();
  for (; r !== e.ownerDocument;) {
    let e = Ou(r);
    if (e == null || e.shadowRoot !== r) return null;
    let t = Cc(e, { requireUnique: !0 });
    if (t == null) return null;
    (n.unshift(t), (r = e.getRootNode()));
  }
  return { selector: t, shadowHosts: n };
}
function Tu(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!B(t) || t.shadowRoot == null) return null;
    n = t.shadowRoot;
  }
  let r = t.selector;
  if (t.kind === `dom` && r == null) return ku(n) ? n : null;
  if (r == null) return null;
  let i = n.querySelector(r);
  return B(i) ? i : null;
}
function Eu(e) {
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
function Du(e, t) {
  let n = e.document;
  for (let e of t.shadowHosts) {
    let t = n.querySelector(e);
    if (!B(t) || t.shadowRoot == null) return n;
    n = t.shadowRoot;
  }
  return n;
}
function Ou(e) {
  return ku(e) ? e.host : null;
}
function ku(e) {
  return e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && `host` in e && B(e.host);
}
function Au(e, t) {
  let n = B(e) ? e : Ou(e);
  for (; n != null && n !== t.document.body;) {
    let e = t.getComputedStyle(n).position;
    if (e === `fixed` || e === `sticky`) return !0;
    n = n.parentElement ?? Ou(n.getRootNode());
  }
  return !1;
}
function ju(e, t) {
  let n = e.commonAncestorContainer;
  if (n.nodeType === Node.TEXT_NODE) return n.parentElement != null && Mu(n.parentElement, t);
  let r = t.document.createTreeWalker(n, NodeFilter.SHOW_TEXT),
    i = r.nextNode();
  for (; i != null;) {
    if (e.intersectsNode(i) && i.parentElement != null && Mu(i.parentElement, t)) return !0;
    i = r.nextNode();
  }
  return !1;
}
function Mu(e, t) {
  let n = t.getComputedStyle(e).getPropertyValue(`-webkit-text-security`);
  return n.length > 0 && n !== `none`;
}
function Nu(e) {
  if (typeof e.getClientRects != `function`) return [];
  let t = e.getClientRects();
  return t.length > 1e3
    ? []
    : Array.from(t)
        .filter((e) => e.width > 0 && e.height > 0)
        .map((e) => ({ x: e.left, y: e.top, width: e.width, height: e.height }));
}
function Pu(e, t, n) {
  let r = e.getBoundingClientRect();
  if (r.width <= 0 || r.height <= 0) return [];
  let i = e.ownerDocument.defaultView;
  if (i == null || Iu(e, i)) return [];
  let a = i.getComputedStyle(e),
    o = e.offsetWidth > 0 ? r.width / e.offsetWidth : 1,
    s = e.offsetHeight > 0 ? r.height / e.offsetHeight : 1,
    c = e.ownerDocument.createElement(`div`);
  (c.setAttribute(K, ``),
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
  for (let e of Hu) c.style[e] = a[e];
  ((c.style.boxSizing = `border-box`), c.append(e.value.slice(0, t)));
  let l = e.ownerDocument.createElement(`span`);
  ((l.textContent = e.value.slice(t, n) || `​`),
    c.append(l, e.value.slice(n)),
    e.ownerDocument.body.append(c),
    (c.scrollLeft = e.scrollLeft),
    (c.scrollTop = e.scrollTop));
  let u = l.getClientRects(),
    d = Array.from(u.length > 1e3 ? [] : u)
      .map((e) => Lu(e, r))
      .filter((e) => e != null);
  return (c.remove(), d);
}
function Fu(e) {
  if (e.type !== `childList`) return !1;
  let t = [...Array.from(e.addedNodes), ...Array.from(e.removedNodes)];
  return t.length > 0 && t.every((e) => B(e) && e.hasAttribute(K));
}
function Iu(e, t) {
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
    n = n.parentElement ?? Ou(n.getRootNode());
  }
  return !1;
}
function Lu(e, t) {
  let n = Math.max(e.left, t.left),
    r = Math.max(e.top, t.top),
    i = Math.min(e.right, t.right),
    a = Math.min(e.bottom, t.bottom);
  return i <= n || a <= r ? null : { x: n, y: r, width: i - n, height: a - r };
}
function Ru(e) {
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function zu(e, t) {
  let n = t ? e.at(-1) : e[0];
  return n == null ? { x: 0, y: 0 } : { x: t ? n.x + n.width : n.x, y: n.y + n.height / 2 };
}
function Bu(e) {
  if (e == null) return !1;
  let t = e.ownerDocument.defaultView,
    n = t?.HTMLInputElement,
    r = t?.HTMLTextAreaElement;
  return (r != null && e instanceof r) || (n != null && e instanceof n && Vu.has(e.type));
}
var Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  K,
  qu = o(() => {
    (Js(),
      Jl(),
      Zl(),
      Xc(),
      (Vu = new Set([`email`, `search`, `tel`, `text`, `url`])),
      (Hu =
        `borderBottomStyle.borderBottomWidth.borderLeftStyle.borderLeftWidth.borderRightStyle.borderRightWidth.borderTopStyle.borderTopWidth.boxSizing.direction.fontFamily.fontFeatureSettings.fontKerning.fontSize.fontStretch.fontStyle.fontVariant.fontWeight.letterSpacing.lineHeight.paddingBottom.paddingLeft.paddingRight.paddingTop.tabSize.textAlign.textIndent.textTransform.wordBreak.wordSpacing`.split(
          `.`,
        )),
      (Uu = `codex-browser-text-selection`),
      (Wu = `#128dff66`),
      (Gu = { attributes: !0, childList: !0, characterData: !0, subtree: !0 }),
      (Ku = [`animationcancel`, `animationend`, `load`, `transitioncancel`, `transitionend`]),
      (K = `data-browser-comment-text-selection-mirror`));
  });
function Ju(e) {
  let t = ed(e);
  if (t == null) return null;
  let n = Ac(e).getComputedStyle(e);
  return {
    borderRadius: n.borderRadius.length === 0 ? `0px` : n.borderRadius,
    color: ys(n.color),
    font: `${n.fontSize} ${n.fontFamily}`.trim(),
    styles: is(n, n.display === `flex` || n.display === `inline-flex` ? [...pd, ...md] : pd),
    rect: t,
    size: `${Math.round(t.width)}x${Math.round(t.height)}`,
    tagName: e.tagName.toLowerCase(),
  };
}
function Yu(e) {
  return (
    e.kind === `element` &&
    e.framePath.length === 0 &&
    (e.elementPath === `html` || e.elementPath === `body`)
  );
}
function Xu(e, t, n, r, i = window.innerWidth) {
  let a = hd.get(e.ownerDocument);
  a ?? ((a = new WeakMap()), hd.set(e.ownerDocument, a));
  let o = a.get(e);
  o ?? ((o = jl()), a.set(e, o));
  let s = Ac(e),
    c = vc(e),
    l = c == null ? null : wc(e, { requireUnique: !1 }),
    u = Dc(e),
    d = id(),
    f = new Hl(d).getElementDocumentContext({
      documentTitle: document.title,
      elementWindow: s,
      fallbackWindow: window,
    });
  return {
    kind: `element`,
    runtimeElementId: o,
    pageUrl: d,
    frameUrl: ad(s, c),
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
    immediateText: ud(e),
    documentContext: f,
    ...(u.length === 0 ? {} : { scrollContainers: u }),
  };
}
function Zu(e, t, n, r) {
  let i = ed(e);
  return i == null
    ? t
    : {
        ...Xu(e, i, sd(t, i, n, r), Tc(e), n?.width),
        annotationFeatures: t.annotationFeatures,
        annotationRequestIncludesPrompt: t.annotationRequestIncludesPrompt,
        elementMetadata: t.elementMetadata,
        elementName: t.elementName,
      };
}
function Qu(e, t, n, r) {
  let i =
      n &&
      window.top === window &&
      e.ownerDocument === document &&
      e.namespaceURI === `http://www.w3.org/1999/xhtml` &&
      !Qs(e) &&
      ed(e) != null,
    a,
    o;
  return (
    i &&
      ((a = r),
      e.hasAttribute(`oai-annotatable`) &&
        ((o = Go(e.getAttribute(`oai-annotatable`))),
        (a ??= qo(e.getAttribute(`oai-annotation-metadata`))))),
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
function $u(e, t, n) {
  if (e.kind !== `element`) return null;
  if (t != null) {
    let e = n.get(t) ?? null;
    if (e?.isConnected) return ed(e) == null ? null : e;
    e != null && n.delete(t);
  }
  if (e.selector == null || !od(e.pageUrl, id())) return null;
  try {
    let t = Sc(e.framePath);
    return t == null ? null : nd(t, e);
  } catch {
    return null;
  }
}
function ed(e) {
  if (!e.isConnected || !ld(e)) return null;
  let t = Ac(e),
    n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = jc(t);
  return { x: n.left + r.x, y: n.top + r.y, width: n.width, height: n.height };
}
function td(e) {
  return e.getAttribute(`aria-label`) ?? hc(e);
}
function nd(e, t) {
  if (t.selector == null) return null;
  let n = t.selector.startsWith(`shadow:`)
    ? [xc(e, t.selector)].filter(B)
    : Array.from(e.querySelectorAll(t.selector)).filter(B);
  if (n.length === 0) return null;
  let r = n.filter((e) => ed(e) != null);
  if (r.length === 0) return null;
  let i = r;
  if (t.name != null) {
    let e = i.filter((e) => td(e) === t.name);
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
    let n = cd(t, e);
    n > o && ((a = e), (o = n));
  }
  return a;
}
function rd(e) {
  if (e == null) return null;
  if (e.kind === `virtual`) return e.rect;
  let t = yc(e.framePath),
    n = Oc(e, t ?? window),
    r = n.x + lu(e, t ?? window);
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
function id() {
  return window.location.href;
}
function ad(e, t) {
  if (t == null || t.length === 0) return null;
  let n = e.location.href;
  if (n !== id()) return n;
  let r = e.frameElement;
  return ec(r) && r.src !== `` ? r.src : n;
}
function od(e, t) {
  let n = dd(e),
    r = dd(t);
  return n == null || r == null
    ? e === t
    : (n.protocol === `http:` || n.protocol === `https:`) &&
        (r.protocol === `http:` || r.protocol === `https:`)
      ? n.origin === r.origin && n.pathname === r.pathname && n.search === r.search
      : n.protocol === `file:` && r.protocol === `file:`
        ? n.pathname === r.pathname && n.search === r.search
        : e === t;
}
function sd(e, t, n, r) {
  let i = r?.x ?? (e.point.xPercent / 100) * (n?.width ?? window.innerWidth),
    a = e.rect.width === 0 ? 0.5 : (i - e.rect.x) / e.rect.width,
    o = e.rect.height === 0 ? 0.5 : (e.point.y - e.rect.y) / e.rect.height;
  return { x: t.x + fd(a, 0, 1) * t.width, y: t.y + fd(o, 0, 1) * t.height };
}
function cd(e, t) {
  let n = 0,
    r = td(t);
  (e.name != null && r === e.name && (n += 1e3),
    e.nearbyText != null && gc(t) === e.nearbyText && (n += 500),
    e.title === mc(t) && (n += 250),
    e.elementPath === _c(t) && (n += 25));
  let i = ed(t),
    a = rd(e);
  return i == null || a == null ? n : n - Math.abs(i.x - a.x) - Math.abs(i.y - a.y);
}
function ld(e) {
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
    typeof e.checkVisibility != `function` ||
    e.checkVisibility({ checkOpacity: !0, checkVisibilityCSS: !0 })
  );
}
function ud(e) {
  if (Qs(e)) return null;
  let t = Array.from(e.childNodes)
    .filter((e) => e.nodeType === Node.TEXT_NODE)
    .map((e) => e.textContent?.replace(/\s+/g, ` `).trim() ?? ``)
    .join(` `)
    .replace(/\s+/g, ` `)
    .trim();
  return t.length === 0 ? null : t.slice(0, 80);
}
function dd(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function fd(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var pd,
  md,
  hd,
  gd = o(() => {
    (Js(),
      Nl(),
      al(),
      Xc(),
      Ul(),
      qu(),
      (pd = [
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
      (md = [`flex-direction`, `justify-content`, `align-items`, `gap`, `row-gap`, `column-gap`]),
      (hd = new WeakMap()));
  });
(Js(), Wo(), bl(), al(), gd(), Xc(), qu());
var _d = Ea({
  enterAnnotationMode: xa().catch(!1),
  initialComment: Ps.optional().catch(void 0),
  metadata: Ca().transform((e) => {
    let t = Ko(e);
    return t == null || Object.keys(t).length === 0 ? void 0 : t;
  }),
  mode: Ma([`default`, `advanced`]).catch(`default`),
  range: Ea({
    startPath: Ta(ya().int().nonnegative()).max(128),
    endPath: Ta(ya().int().nonnegative()).max(128),
    startOffset: ya().int().nonnegative(),
    endOffset: ya().int().nonnegative(),
    rangeText: va().min(1).max(Ls),
  }).optional(),
});
function vd({ getState: e, requestPermission: t }) {
  let n = null,
    r = null,
    i = !1,
    a = !1,
    o = !1,
    s = () => {
      r = null;
    },
    c = (t) => {
      let r = yd(t, e());
      if (n == null || r == null || a || o) return !1;
      i = !0;
      try {
        return n(
          t.target,
          r,
          t.request,
          t.target instanceof HTMLElement && t.target.getRootNode() === document
            ? t.metadata
            : void 0,
        );
      } finally {
        i = !1;
      }
    },
    l = (l) => {
      if (o || a || r != null || i || navigator.userActivation?.isActive !== !0 || !Cd(e())) return;
      let u = wd(l),
        d = l.composedPath()[0] ?? l.target;
      if (u == null || !(d instanceof HTMLElement) || ll(d)) return;
      let f = u.range == null ? null : q(d, u.range);
      if (u.range != null && f == null) return;
      let p = { initialComment: u.initialComment, siteInitiated: !0 };
      (u.enterAnnotationMode && (p.enterAnnotationMode = !0),
        u.mode === `advanced` && (p.openTweaks = !0));
      let m = {
        target: f ?? d,
        rangeText: u.range?.rangeText,
        request: p,
        metadata: u.range == null && d.getRootNode() === document ? u.metadata : void 0,
        permissionGranted: !1,
      };
      if (yd(m, e()) == null) return;
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
function yd({ target: e, request: t, rangeText: n }, r) {
  if (!Cd(r)) return null;
  if (e instanceof Range) {
    let r = e.commonAncestorContainer,
      i = r instanceof HTMLElement ? r : r.parentElement;
    if (
      t.openTweaks ||
      i == null ||
      ll(i) ||
      e.startContainer.ownerDocument !== document ||
      e.toString() !== n ||
      !bd(e)
    )
      return null;
    let a = $l(e);
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
  if (e.ownerDocument !== document || !e.isConnected || ll(e) || tl(e) == null) return null;
  let i = ed(e);
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
function bd(e) {
  let t = e.commonAncestorContainer,
    n = document.createTreeWalker(t, NodeFilter.SHOW_TEXT),
    r = t.nodeType === Node.TEXT_NODE ? t : n.nextNode();
  for (; r != null;) {
    let t = r.textContent ?? ``,
      i = r === e.startContainer ? e.startOffset : 0,
      a = r === e.endContainer ? e.endOffset : t.length,
      o = r instanceof Text ? (r.assignedSlot ?? r.parentElement) : r.parentElement;
    if (a > i && e.intersectsNode(r) && (o == null || !xd(o))) return !1;
    r = n.nextNode();
  }
  return !0;
}
function xd(e) {
  let t = window.getComputedStyle(e).visibility;
  if (t === `hidden` || t === `collapse`) return !1;
  for (let t = e; t != null; t = $s(t)) {
    let e = window.getComputedStyle(t);
    if (
      e.display === `none` ||
      e.contentVisibility === `hidden` ||
      Number.parseFloat(e.opacity) === 0
    )
      return !1;
  }
  return !0;
}
function q(e, t) {
  let n = Sd(e, t.startPath),
    r = Sd(e, t.endPath);
  if (n == null || r == null) return null;
  let i = document.createRange();
  try {
    (i.setStart(n, t.startOffset), i.setEnd(r, t.endOffset));
  } catch {
    return null;
  }
  return !i.collapsed && i.toString() === t.rangeText ? i : null;
}
function Sd(e, t) {
  let n = e;
  for (let e of t) {
    let t = n.childNodes[e];
    if (t == null) return null;
    n = t;
  }
  return n;
}
function Cd({ canUseSiteAnnotationApi: e, hasActiveEditor: t, isAgentControllingBrowser: n }) {
  return globalThis.isSecureContext === !0 && e && !n && !t;
}
function wd(e) {
  try {
    let t = `detail` in e ? (e.detail ?? {}) : {};
    if (typeof t != `object`) return;
    let n = Object.getPrototypeOf(t);
    if (n !== Object.prototype && n != null) return;
    let r = _d.safeParse(
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
function Td(e) {
  return Math.min(kd, Math.max(Od, e));
}
function Ed(e) {
  return Td(e) / 100;
}
var Dd,
  Od,
  kd,
  Ad = o(() => {
    ((Dd = [25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500]),
      (Od = Dd[0]),
      (kd = Dd[Dd.length - 1]));
  });
Ad();
var jd = `codex_desktop:message-for-view`,
  Md = `codex_desktop:browser-sidebar-runtime-message`,
  Nd = `codex_desktop:browser-page-event`,
  Pd = `codex_desktop:get-browser-annotation-api-policy`;
Wo();
var J = { type: `site_annotation_features_changed`, version: 1 },
  Fd = Oa([
    Ea({
      feature: Ma([
        `selectable-containers`,
        `text-containers`,
        `custom-controls`,
        `registered-surface`,
        `metadata`,
        `mode-toggle`,
      ]),
      includesPrompt: wa().optional(),
    }),
    Ea({ feature: Na(`requests`), includesPrompt: xa() }),
  ]);
Ea({
  type: Na(J.type),
  version: Na(J.version),
  payload: Ea({
    detections: Ta(Fd).max(8),
    used: Aa(Fd, Ea({ interactionType: Ma([`opened`, `invoked`]) })).optional(),
    features: Ta(
      Ma([
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
var Id,
  Ld = o(() => {
    (Wo(),
      (Id = va()
        .min(1)
        .max(128)
        .regex(/^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u)));
  });
function Rd(e) {
  let t = Bd.safeParse(e);
  return t.success ? t.data : void 0;
}
var zd,
  Bd,
  Vd,
  Hd,
  Ud = o(() => {
    (Wo(),
      ts(),
      Ld(),
      (zd = {
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
      (Bd = va().max(zd.maxRoleLength).regex(new RegExp(zd.rolePattern))),
      (Vd = Ea({
        id: Id,
        name: Ca().optional(),
        role: Ca().optional(),
        metadata: Ca().optional(),
        rect: Ea({ x: ya(), y: ya(), width: ya().positive(), height: ya().positive() }).optional(),
      })),
      (Hd = Ea({
        type: Ma([`registered`, `invalidated`, `disposed`, `rendering-failed`, `result`]),
        registrationId: Id,
        requestId: va().max(128).optional(),
        customRendering: xa().optional(),
        hit: Vd.nullable().optional(),
      })));
  });
Ud();
function Wd(e, t) {
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
      throw TypeError(
        `Annotation surfaces require a connected top-document element and hitTest callback.`,
      );
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
          n.get(c) === u &&
            (r?.registration === u && y(), i?.registration === u && b(), w(u, `invalidated`));
        },
        dispose() {
          n.get(c) === u && C(u);
        },
      }
    );
  };
  try {
    if (
      !Reflect.defineProperty(u, "registerSurface", { configurable: !0, enumerable: !1, value: d })
    )
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
    if (
      !(t instanceof CustomEvent) ||
      typeof t.detail != `string` ||
      t.detail.length > e.maxPayloadLength
    )
      return;
    let r;
    try {
      r = D(JSON.parse(t.detail), 6);
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
          E(r.hoveredId) &&
            E(r.selectedId) &&
            x(o, { hoveredId: r.hoveredId, selectedId: r.selectedId });
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
        Reflect.getOwnPropertyDescriptor(document, l)?.value === s &&
          Reflect.deleteProperty(document, l),
        t.answered
          ? i == null
            ? !a &&
              n.get(t.registration.options.element) === t.registration &&
              w(t.registration, `invalidated`)
            : _()
          : ((t.answered = !0), w(t.registration, `result`, t.requestId, ee(o)), _()),
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
    if (
      !(
        n == null ||
        (e.renderFailed && (t.hoveredId != null || t.selectedId != null)) ||
        (e.selection.hoveredId === t.hoveredId && e.selection.selectedId === t.selectedId)
      )
    ) {
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
      ((e.renderFailed = !0),
      x(e, { hoveredId: null, selectedId: null }),
      w(e, `rendering-failed`));
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
  function E(e) {
    return e === null || T(e);
  }
  function D(e, t) {
    if (typeof e != `object` || !e) return null;
    let n = Object.getPrototypeOf(e);
    if (n !== Object.prototype && n != null) return null;
    let r = Object.getOwnPropertyDescriptors(e);
    if (Reflect.ownKeys(r).length > t || Reflect.ownKeys(r).some((e) => typeof e != `string`))
      return null;
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
  function ee(t) {
    if (t === null) return null;
    try {
      let n = D(t, 5);
      if (n == null || !T(n.id)) return;
      let r = { id: n.id };
      if (
        (typeof n.name == `string` &&
          n.name.trim().length > 0 &&
          n.name.length <= 128 &&
          /^[^\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]*$/u.test(n.name) &&
          (r.name = n.name),
        typeof n.role == `string` &&
          n.role.length <= e.maxRoleLength &&
          c.test(n.role) &&
          (r.role = n.role),
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
Js();
function Gd(e, t, n, r) {
  let i = !0,
    a = Kd(() => i, e, t, n, r);
  if (a == null) return null;
  let o = !1;
  try {
    o =
      d.contextBridge.executeInMainWorld({
        func: Wd,
        args: [
          zd,
          (e) => {
            i && n(e, !1);
          },
        ],
      }) === !0;
  } catch {}
  return () => {
    ((i = !1), o && document.dispatchEvent(new Event(zd.removeEvent)), a());
  };
}
function Kd(e, t, n, r, i) {
  return d.contextBridge.executeInMainWorld({
    func: (e, t, n, r, i, a, o) => {
      let s = 0,
        c = !1,
        l = (e) => {
          if (typeof e != `object` || !e) throw TypeError(`Invalid annotation controls`);
          let t = JSON.stringify(
            {
              controls: e.controls,
              controlsHeading: e.controlsHeading,
              controlsMode: e.controlsMode,
            },
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
          toggle: (e) => ({
            accepted: !c && (e === void 0 || typeof e == `boolean`) && m() && i(e),
          }),
          isActive: () => !c && a(),
          request: (r, i = {}) => {
            if (
              typeof i != `object` ||
              !i ||
              c ||
              !m() ||
              (!(r instanceof Element) && !(r instanceof Range))
            )
              return { accepted: !1 };
            let a = r instanceof Range ? r : void 0,
              s = r instanceof Range ? r.commonAncestorContainer : r,
              l = s instanceof Element ? s : s.parentElement;
            if (l == null || l.ownerDocument !== document || !l.isConnected || a?.collapsed)
              return { accepted: !1 };
            let u = l.getRootNode();
            if (a != null && u instanceof ShadowRoot && u.mode === `closed`)
              return { accepted: !1 };
            let f = a == null ? void 0 : d(a.startContainer, l),
              p = a == null ? void 0 : d(a.endContainer, l),
              h = a?.toString();
            if (
              a != null &&
              (f == null || p == null || h == null || h.trim().length === 0 || h.length > n)
            )
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
            if (typeof e != `object` || !e)
              throw TypeError(`Invalid annotation controls registration`);
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
          !Reflect.defineProperty(t, "annotation", {
            configurable: !0,
            enumerable: !1,
            value: u,
          }) ||
          (e == null &&
            !Reflect.defineProperty(document, "oai", {
              configurable: !0,
              enumerable: !1,
              value: t,
            }))
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
    },
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
function qd(e) {
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
var Jd,
  Yd,
  Xd,
  Zd,
  Qd,
  $d,
  ef,
  tf,
  nf,
  rf,
  af = o(() => {
    (Wo(),
      (Jd = va()
        .max(512)
        .regex(/^[^\u0000-\u001f\u007f-\u009f\u061c\u200e\u200f\u2028-\u202e\u2066-\u2069]*$/u)),
      (Yd = Jd.trim().min(1).max(80)),
      (Xd = va()
        .trim()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z][A-Za-z0-9_-]*$/)),
      (Zd = va()
        .min(1)
        .max(80)
        .regex(/^[A-Za-z0-9_./:@$#-]+$/)),
      (Qd = ya().min(-1e4).max(1e4)),
      ($d = Jd.regex(/^#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i)),
      (ef = Oa([Jd, Qd, xa()])),
      Ta(
        Da({ label: Yd, reference: Zd.optional(), previousValue: ef.optional(), value: ef }).refine(
          (e) => e.previousValue == null || typeof e.previousValue == typeof e.value,
          { message: `Control changes must preserve the original value type`, path: [`value`] },
        ),
      ).max(12),
      (tf = Da({ callback: Xd, label: Yd, reference: Zd.optional() })),
      (nf = ka(`type`, [
        tf.extend({ currentValue: $d.optional(), defaultValue: $d.optional(), type: Na(`color`) }),
        tf.extend({
          currentValue: Jd.optional(),
          defaultValue: Jd.optional(),
          options: Ta(Da({ label: Yd, value: Jd }))
            .min(1)
            .max(12),
          type: Na(`select`),
        }),
        tf.extend({
          currentValue: Qd.optional(),
          defaultValue: Qd.optional(),
          max: Qd,
          min: Qd,
          step: ya().min(0.001).max(1e4),
          type: Na(`range`),
        }),
        tf.extend({
          currentValue: xa().optional(),
          defaultValue: xa().optional(),
          type: Na(`toggle`),
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
      Da({ callback: Xd, previousValue: ef.optional(), value: ef }).superRefine((e, t) => {
        e.previousValue != null &&
          typeof e.previousValue != typeof e.value &&
          t.addIssue({
            code: `custom`,
            message: `Control changes must preserve the original value type`,
            path: [`value`],
          });
      }),
      (rf = Da({
        controls: Ta(nf).max(12),
        controlsHeading: Yd.optional(),
        controlsMode: Ma([`extend`, `replace`]).optional(),
      }).superRefine(({ controls: e }, t) => {
        new Set(e.map((e) => e.callback)).size !== e.length &&
          t.addIssue({
            code: `custom`,
            message: `Each control must have a unique callback`,
            path: [`controls`],
          });
      })));
  });
(af(), Wo());
var of = 64,
  sf = 128,
  cf = 1024,
  lf = 16384,
  uf = `codex:register-annotation-controls`,
  df = `codex:update-annotation-controls`,
  ff = `codex:dispose-annotation-controls`,
  pf = `codex-browser-sidebar-comments-root`,
  mf = Da({
    controls: rf.shape.controls.optional(),
    controlsHeading: rf.shape.controlsHeading,
    controlsMode: rf.shape.controlsMode,
  });
function hf() {
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
        let r = gf(t);
        if (r == null) return;
        let s = _f(r, `id`),
          c = _f(r, `payload`),
          l = _f(r, `targets`);
        if (typeof s != `string` || s.length === 0 || s.length > 80 || n.has(s) || n.size >= of)
          return;
        let u = vf(c);
        if (u == null) return;
        let d = yf(e, l);
        if (d == null || d.size === 0 || n.has(s) || n.size >= of || i + d.size > cf) return;
        let f = { controls: u, id: s, order: a++, targets: [] };
        (n.set(s, f), o(f, d), t.preventDefault());
      } catch {}
    },
    l = (t) => {
      try {
        let r = gf(t);
        if (r == null) return;
        let a = _f(r, `id`),
          c = _f(r, `payload`),
          l = _f(r, `targets`);
        if (typeof a != `string`) return;
        let u = n.get(a);
        if (u == null) return;
        let d = l === void 0 ? void 0 : yf(e, l);
        if ((l !== void 0 && d == null) || n.get(a) !== u) return;
        let f = vf(c, u.controls);
        if (f == null || (d != null && i - u.targets.length + d.size > cf)) return;
        ((u.controls = f), d != null && (s(u), o(u, d)), t.preventDefault());
      } catch {}
    },
    u = (e) => {
      try {
        let t = gf(e);
        if (t == null) return;
        let r = _f(t, `id`);
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
        t.removeEventListener(uf, c),
        t.removeEventListener(df, l),
        t.removeEventListener(ff, u),
        t.removeEventListener(`pagehide`, f));
    },
    f = (e) => {
      e.isTrusted && !e.persisted && d();
    };
  return (
    t.addEventListener(uf, c),
    t.addEventListener(df, l),
    t.addEventListener(ff, u),
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
function gf(e) {
  if (!(e instanceof CustomEvent)) return;
  let t = e.detail;
  return typeof t == `object` && t ? t : void 0;
}
function _f(e, t) {
  let n = Object.getOwnPropertyDescriptor(e, t);
  return n != null && `value` in n ? n.value : void 0;
}
function vf(e, t) {
  if (!(typeof e != `string` || e.length > lf))
    try {
      let n = JSON.parse(e);
      if (t != null) {
        let e = mf.safeParse(n);
        if (!e.success) return;
        n = { ...t, ...e.data };
      }
      let r = rf.safeParse(n);
      return r.success ? r.data : void 0;
    } catch {
      return;
    }
}
function yf(e, t) {
  if (!Array.isArray(t)) return;
  let n = t.length;
  if (!Number.isSafeInteger(n) || n < 0 || n > sf) return;
  let r = new Set();
  for (let i = 0; i < n; i += 1) {
    let n = _f(t, String(i));
    if (!(n instanceof Element) || n.ownerDocument !== e || bf(e, n)) return;
    r.add(n);
  }
  return r;
}
function bf(e, t) {
  let n = e.getElementById?.(pf);
  return n != null && (n === t || n.contains(t) || n.shadowRoot?.contains(t) === !0);
}
Js();
var xf = `oai-annotation-container`,
  Sf = `oai-annotation-container-text`,
  Cf = `oai-annotation-metadata`,
  wf = `oai-annotatable`,
  Tf = `codex:annotation-shadow-root-attached`,
  Ef = {
    containers: null,
    controls: { feature: `custom-controls` },
    surfaces: { feature: `registered-surface` },
    metadata: { feature: `metadata` },
    "metadata-with-targets": null,
    "mode-toggle": { feature: `mode-toggle` },
    requests: { feature: `requests`, includesPrompt: !1 },
    "requests-with-prompts": { feature: `requests`, includesPrompt: !0 },
  },
  Df = { childList: !0, subtree: !0, attributes: !0, attributeFilter: [xf, Sf, Cf, wf] };
function Of(e) {
  let t = new Set(),
    n = [],
    r = new Set(),
    i = new Set(),
    a = new Map(),
    o = !1,
    s = !1,
    c = (r) => e([...t], [...n], r),
    l = (e) =>
      !n.some((t) => t.feature === e.feature && t.includesPrompt === e.includesPrompt) &&
      (n.push(e), !0),
    u = (e = !1, n) => {
      let o = e;
      for (let e of r)
        !e.isConnected ||
        e.ownerDocument !== document ||
        (!e.hasAttribute(xf) && !e.hasAttribute(Sf))
          ? r.delete(e)
          : (o =
              l({ feature: e.hasAttribute(Sf) ? `text-containers` : `selectable-containers` }) ||
              o);
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
      (e.hasAttribute(xf) || e.hasAttribute(Sf)) && r.add(e);
      let t =
        e instanceof HTMLElement &&
        e !== document.body &&
        e !== document.documentElement &&
        e.hasAttribute(wf)
          ? qo(e.getAttribute(Cf))
          : void 0;
      t != null && Object.keys(t).length > 0 ? i.add(e) : i.delete(e);
      let n = e.shadowRoot;
      if (n != null && !a.has(n)) {
        let e = new MutationObserver(m);
        (e.observe(n, Df), a.set(n, e), n.querySelectorAll(`*`).forEach(f));
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
  (g.observe(document, Df), document.addEventListener(Tf, h));
  let _ = d.contextBridge.executeInMainWorld({ func: kf, args: [Tf] });
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
        let r = Ef[e],
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
          document.removeEventListener(Tf, h),
          window.removeEventListener(`pageshow`, v),
          t.clear(),
          (n.length = 0),
          c());
      },
    }
  );
}
function kf(e) {
  let t = Object.getOwnPropertyDescriptor(Element.prototype, `attachShadow`),
    n = Element.prototype.attachShadow;
  if (t?.configurable !== !0 || typeof n != `function`) return null;
  let r = !0;
  function i(t) {
    let i = Reflect.apply(n, this, [t]);
    return (
      r && i.mode === `open` && this.dispatchEvent(new Event(e, { bubbles: !0, composed: !0 })), i
    );
  }
  return Reflect.defineProperty(Element.prototype, "attachShadow", { ...t, value: i })
    ? () => {
        ((r = !1),
          Reflect.getOwnPropertyDescriptor(Element.prototype, `attachShadow`)?.value === i &&
            Reflect.defineProperty(Element.prototype, "attachShadow", t));
      }
    : null;
}
function Af(e, t) {
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
var jf = function (e, t, n) {
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
  Mf = s((e) => {
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
    function D(e, t) {
      return E(e.type, t, e.props);
    }
    function ee(e) {
      return typeof e == `object` && !!e && e.$$typeof === t;
    }
    function te(e) {
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
      return typeof e == `object` && e && e.key != null ? te(`` + e.key) : t.toString(36);
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
              (ee(o) &&
                (o = D(
                  o,
                  i +
                    (o.key == null || (e && e.key === o.key)
                      ? ``
                      : (`` + o.key).replace(ne, `$&/`) + `/`) +
                    c,
                )),
              r.push(o)),
          1
        );
      c = 0;
      var l = a === `` ? `.` : a + `:`;
      if (S(e))
        for (var u = 0; u < e.length; u++)
          ((a = e[u]), (s = l + re(a, u)), (c += O(a, r, i, s, o)));
      else if (((u = m(e)), typeof u == `function`))
        for (e = u.call(e), u = 0; !(a = e.next()).done;)
          ((a = a.value), (s = l + re(a, u++)), (c += O(a, r, i, s, o)));
      else if (s === `object`) {
        if (typeof e.then == `function`) return O(ie(e), r, i, a, o);
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
      oe = {
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
          if (!ee(e))
            throw Error(`React.Children.only expected to receive a single React element child.`);
          return e;
        },
      };
    ((e.Activity = f),
      (e.Children = oe),
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
        if (e == null)
          throw Error(`The argument must be a React element, but you passed ` + e + `.`);
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
        if (e && e.defaultProps)
          for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
        return E(e, a, i);
      }),
      (e.createRef = function () {
        return { current: null };
      }),
      (e.forwardRef = function (e) {
        return { $$typeof: c, render: e };
      }),
      (e.isValidElement = ee),
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
          (i !== null && i(n, r),
            typeof r == `object` && r && typeof r.then == `function` && r.then(C, ae));
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
  Nf = s((e, t) => {
    t.exports = Mf();
  }),
  Pf = s((e) => {
    var t = Nf();
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
  Ff = s((e, t) => {
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
    (n(), (t.exports = Pf()));
  }),
  If = s((e) => {
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
      if (((h = !1), b(e), !m)) {
        if (n(c) !== null) ((m = !0), S || ((S = !0), ee()));
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
    function E() {
      return g ? !0 : !(e.unstable_now() - T < w);
    }
    function D() {
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
          i ? ee() : (S = !1);
        }
      }
    }
    var ee;
    if (typeof y == `function`)
      ee = function () {
        y(D);
      };
    else if (typeof MessageChannel < `u`) {
      var te = new MessageChannel(),
        ne = te.port2;
      ((te.port1.onmessage = D),
        (ee = function () {
          ne.postMessage(null);
        }));
    } else
      ee = function () {
        _(D, 0);
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
              n(c) === null && r === n(l) && (h ? (v(C), (C = -1)) : (h = !0), re(x, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), S || ((S = !0), ee()))),
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
  Lf = s((e, t) => {
    t.exports = If();
  }),
  Rf = s((e) => {
    var t = Lf(),
      n = Nf(),
      r = Ff();
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
      S = Symbol.for(`react.suspense`),
      C = Symbol.for(`react.suspense_list`),
      w = Symbol.for(`react.memo`),
      T = Symbol.for(`react.lazy`),
      E = Symbol.for(`react.activity`),
      D = Symbol.for(`react.memo_cache_sentinel`),
      ee = Symbol.iterator;
    function te(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (ee && e[ee]) || e[`@@iterator`]), typeof e == `function` ? e : null);
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
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
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
      oe = -1;
    function se(e) {
      return { current: e };
    }
    function ce(e) {
      0 > oe || ((e.current = ae[oe]), (ae[oe] = null), oe--);
    }
    function le(e, t) {
      (oe++, (ae[oe] = e.current), (e.current = t));
    }
    var ue = se(null),
      de = se(null),
      fe = se(null),
      pe = se(null);
    function me(e, t) {
      switch ((le(fe, t), le(de, e), le(ue, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? Ud(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI))) ((t = Ud(t)), (e = Wd(t, e)));
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
      (ce(ue), le(ue, e));
    }
    function he() {
      (ce(ue), ce(de), ce(fe));
    }
    function ge(e) {
      e.memoizedState !== null && le(pe, e);
      var t = ue.current,
        n = Wd(t, e.type);
      t !== n && (le(de, e), le(ue, n));
    }
    function _e(e) {
      (de.current === e && (ce(ue), ce(de)), pe.current === e && (ce(pe), (np._currentValue = A)));
    }
    var ve, ye;
    function be(e) {
      if (ve === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          ((ve = (t && t[1]) || ``),
            (ye =
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
        ve +
        e +
        ye
      );
    }
    var xe = !1;
    function Se(e, t) {
      if (!e || xe) return ``;
      xe = !0;
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
        ((xe = !1), (Error.prepareStackTrace = n));
      }
      return (n = e ? e.displayName || e.name : ``) ? be(n) : ``;
    }
    function Ce(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return be(e.type);
        case 16:
          return be(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? be(`Suspense Fallback`) : be(`Suspense`);
        case 19:
          return be(`SuspenseList`);
        case 0:
        case 15:
          return Se(e.type, !1);
        case 11:
          return Se(e.type.render, !1);
        case 1:
          return Se(e.type, !0);
        case 31:
          return be(`Activity`);
        default:
          return ``;
      }
    }
    function we(e) {
      try {
        var t = ``,
          n = null;
        do ((t += Ce(e, n)), (n = e), (e = e.return));
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
    var j = Object.prototype.hasOwnProperty,
      M = t.unstable_scheduleCallback,
      Te = t.unstable_cancelCallback,
      Ee = t.unstable_shouldYield,
      N = t.unstable_requestPaint,
      De = t.unstable_now,
      P = t.unstable_getCurrentPriorityLevel,
      Oe = t.unstable_ImmediatePriority,
      ke = t.unstable_UserBlockingPriority,
      Ae = t.unstable_NormalPriority,
      je = t.unstable_LowPriority,
      Me = t.unstable_IdlePriority,
      Ne = t.log,
      Pe = t.unstable_setDisableYieldValue,
      Fe = null,
      Ie = null;
    function Le(e) {
      if ((typeof Ne == `function` && Pe(e), Ie && typeof Ie.setStrictMode == `function`))
        try {
          Ie.setStrictMode(Fe, e);
        } catch {}
    }
    var Re = Math.clz32 ? Math.clz32 : Ve,
      ze = Math.log,
      Be = Math.LN2;
    function Ve(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((ze(e) / Be) | 0)) | 0);
    }
    var He = 256,
      Ue = 262144,
      We = 4194304;
    function Ge(e) {
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
    function Ke(e, t, n) {
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
                ? n || ((n = r & ~e), n !== 0 && (i = Ge(n)))
                : (i = Ge(o))
              : (i = Ge(s)))
          : ((r = s & ~a),
            r === 0
              ? ((o &= s), o === 0 ? n || ((n = s & ~e), n !== 0 && (i = Ge(n))) : (i = Ge(o)))
              : (i = Ge(r))),
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
    function qe(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Je(e, t) {
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
    function Ye() {
      var e = We;
      return ((We <<= 1), !(We & 62914560) && (We = 4194304), e);
    }
    function Xe(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function Ze(e, t) {
      ((e.pendingLanes |= t),
        t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
    }
    function Qe(e, t, n, r, i, a) {
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
        var u = 31 - Re(n),
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
      (r !== 0 && $e(e, r, 0),
        a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)));
    }
    function $e(e, t, n) {
      ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
      var r = 31 - Re(t);
      ((e.entangledLanes |= t),
        (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)));
    }
    function et(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Re(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    function tt(e, t) {
      var n = t & -t;
      return ((n = n & 42 ? 1 : nt(n)), (n & (e.suspendedLanes | t)) === 0 ? n : 0);
    }
    function nt(e) {
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
    function rt(e) {
      return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
    }
    function it() {
      var e = k.p;
      return e === 0 ? ((e = window.event), e === void 0 ? 32 : _p(e.type)) : e;
    }
    function at(e, t) {
      var n = k.p;
      try {
        return ((k.p = e), t());
      } finally {
        k.p = n;
      }
    }
    var ot = Math.random().toString(36).slice(2),
      st = `__reactFiber$` + ot,
      ct = `__reactProps$` + ot,
      lt = `__reactContainer$` + ot,
      ut = `__reactEvents$` + ot,
      dt = `__reactListeners$` + ot,
      ft = `__reactHandles$` + ot,
      pt = `__reactResources$` + ot,
      mt = `__reactMarker$` + ot;
    function ht(e) {
      (delete e[st], delete e[ct], delete e[ut], delete e[dt], delete e[ft]);
    }
    function gt(e) {
      var t = e[st];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[lt] || n[st])) {
          if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
            for (e = pf(e); e !== null;) {
              if ((n = e[st])) return n;
              e = pf(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function _t(e) {
      if ((e = e[st] || e[lt])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function vt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function yt(e) {
      var t = e[pt];
      return ((t ||= e[pt] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
    }
    function bt(e) {
      e[mt] = !0;
    }
    var xt = new Set(),
      St = {};
    function Ct(e, t) {
      (F(e, t), F(e + `Capture`, t));
    }
    function F(e, t) {
      for (St[e] = t, e = 0; e < t.length; e++) xt.add(t[e]);
    }
    var wt = RegExp(
        `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
      ),
      Tt = {},
      Et = {};
    function Dt(e) {
      return j.call(Et, e)
        ? !0
        : j.call(Tt, e)
          ? !1
          : wt.test(e)
            ? (Et[e] = !0)
            : ((Tt[e] = !0), !1);
    }
    function Ot(e, t, n) {
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
    function kt(e, t, n) {
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
    function At(e, t, n, r) {
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
    function jt(e) {
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
    function Mt(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function Nt(e, t, n) {
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
    function Pt(e) {
      if (!e._valueTracker) {
        var t = Mt(e) ? `checked` : `value`;
        e._valueTracker = Nt(e, t, `` + e[t]);
      }
    }
    function Ft(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Mt(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function It(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0)) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Lt = /[\n"\\]/g;
    function Rt(e) {
      return e.replace(Lt, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function zt(e, t, n, r, i, a, o, s) {
      ((e.name = ``),
        o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`
          ? (e.type = o)
          : e.removeAttribute(`type`),
        t == null
          ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
          : o === `number`
            ? ((t === 0 && e.value === ``) || e.value != t) && (e.value = `` + jt(t))
            : e.value !== `` + jt(t) && (e.value = `` + jt(t)),
        t == null
          ? n == null
            ? r != null && e.removeAttribute(`value`)
            : Vt(e, o, jt(n))
          : Vt(e, o, jt(t)),
        i == null && a != null && (e.defaultChecked = !!a),
        i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`),
        s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`
          ? (e.name = `` + jt(s))
          : e.removeAttribute(`name`));
    }
    function Bt(e, t, n, r, i, a, o, s) {
      if (
        (a != null &&
          typeof a != `function` &&
          typeof a != `symbol` &&
          typeof a != `boolean` &&
          (e.type = a),
        t != null || n != null)
      ) {
        if (!((a !== `submit` && a !== `reset`) || t != null)) {
          Pt(e);
          return;
        }
        ((n = n == null ? `` : `` + jt(n)),
          (t = t == null ? n : `` + jt(t)),
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
        Pt(e));
    }
    function Vt(e, t, n) {
      (t === `number` && It(e.ownerDocument) === e) ||
        e.defaultValue === `` + n ||
        (e.defaultValue = `` + n);
    }
    function Ht(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + jt(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ut(e, t, n) {
      if (t != null && ((t = `` + jt(t)), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + jt(n);
    }
    function Wt(e, t, n, r) {
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
      ((n = jt(t)),
        (e.defaultValue = n),
        (r = e.textContent),
        r === n && r !== `` && r !== null && (e.value = r),
        Pt(e));
    }
    function Gt(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Kt = new Set(
      `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
        ` `,
      ),
    );
    function qt(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      n == null || typeof n == `boolean` || n === ``
        ? r
          ? e.setProperty(t, ``)
          : t === `float`
            ? (e.cssFloat = ``)
            : (e[t] = ``)
        : r
          ? e.setProperty(t, n)
          : typeof n != `number` || n === 0 || Kt.has(t)
            ? t === `float`
              ? (e.cssFloat = n)
              : (e[t] = (`` + n).trim())
            : (e[t] = n + `px`);
    }
    function Jt(e, t, n) {
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
        for (var a in t) ((r = t[a]), t.hasOwnProperty(a) && n[a] !== r && qt(e, a, r));
      } else for (var o in t) t.hasOwnProperty(o) && qt(e, o, t[o]);
    }
    function Yt(e) {
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
    var Xt = new Map([
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
      Zt =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Qt(e) {
      return Zt.test(`` + e)
        ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
        : e;
    }
    function $t() {}
    var en = null;
    function tn(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var nn = null,
      rn = null;
    function an(e) {
      var t = _t(e);
      if (t && (e = t.stateNode)) {
        var n = e[ct] || null;
        a: switch (((e = t.stateNode), t.type)) {
          case `input`:
            if (
              (zt(
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
                n = n.querySelectorAll(`input[name="` + Rt(`` + t) + `"][type="radio"]`), t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[ct] || null;
                  if (!a) throw Error(i(90));
                  zt(
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
              for (t = 0; t < n.length; t++) ((r = n[t]), r.form === e.form && Ft(r));
            }
            break a;
          case `textarea`:
            Ut(e, n.value, n.defaultValue);
            break a;
          case `select`:
            ((t = n.value), t != null && Ht(e, !!n.multiple, t, !1));
        }
      }
    }
    var I = !1;
    function on(e, t, n) {
      if (I) return e(t, n);
      I = !0;
      try {
        return e(t);
      } finally {
        if (
          ((I = !1),
          (nn !== null || rn !== null) &&
            (Su(), nn && ((t = nn), (e = rn), (rn = nn = null), an(t), e)))
        )
          for (t = 0; t < e.length; t++) an(e[t]);
      }
    }
    function L(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[ct] || null;
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
            (r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var sn = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      cn = !1;
    if (sn)
      try {
        var ln = {};
        (Object.defineProperty(ln, "passive", {
          get: function () {
            cn = !0;
          },
        }),
          window.addEventListener(`test`, ln, ln),
          window.removeEventListener(`test`, ln, ln));
      } catch {
        cn = !1;
      }
    var un = null,
      dn = null,
      fn = null;
    function pn() {
      if (fn) return fn;
      var e,
        t = dn,
        n = t.length,
        r,
        i = `value` in un ? un.value : un.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (fn = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function mn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function hn() {
      return !0;
    }
    function gn() {
      return !1;
    }
    function _n(e) {
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
            ? hn
            : gn),
          (this.isPropagationStopped = gn),
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
              (this.isDefaultPrevented = hn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = hn));
          },
          persist: function () {},
          isPersistent: hn,
        }),
        t
      );
    }
    var vn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      yn = _n(vn),
      bn = f({}, vn, { view: 0, detail: 0 }),
      xn = _n(bn),
      Sn,
      Cn,
      wn,
      Tn = f({}, bn, {
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
        getModifierState: In,
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
            : (e !== wn &&
                (wn && e.type === `mousemove`
                  ? ((Sn = e.screenX - wn.screenX), (Cn = e.screenY - wn.screenY))
                  : (Cn = Sn = 0),
                (wn = e)),
              Sn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Cn;
        },
      }),
      En = _n(Tn),
      Dn = _n(f({}, Tn, { dataTransfer: 0 })),
      On = _n(f({}, bn, { relatedTarget: 0 })),
      kn = _n(f({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
      An = _n(
        f({}, vn, {
          clipboardData: function (e) {
            return `clipboardData` in e ? e.clipboardData : window.clipboardData;
          },
        }),
      ),
      jn = _n(f({}, vn, { data: 0 })),
      Mn = {
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
      Nn = {
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
      Pn = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function Fn(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Pn[e]) ? !!t[e] : !1;
    }
    function In() {
      return Fn;
    }
    var Ln = _n(
        f({}, bn, {
          key: function (e) {
            if (e.key) {
              var t = Mn[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = mn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? Nn[e.keyCode] || `Unidentified`
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
          getModifierState: In,
          charCode: function (e) {
            return e.type === `keypress` ? mn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? mn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      Rn = _n(
        f({}, Tn, {
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
      zn = _n(
        f({}, bn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: In,
        }),
      ),
      Bn = _n(f({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Vn = _n(
        f({}, Tn, {
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
      Hn = _n(f({}, vn, { newState: 0, oldState: 0 })),
      Un = [9, 13, 27, 32],
      Wn = sn && `CompositionEvent` in window,
      Gn = null;
    sn && `documentMode` in document && (Gn = document.documentMode);
    var Kn = sn && `TextEvent` in window && !Gn,
      qn = sn && (!Wn || (Gn && 8 < Gn && 11 >= Gn)),
      Jn = ` `,
      Yn = !1;
    function Xn(e, t) {
      switch (e) {
        case `keyup`:
          return Un.indexOf(t.keyCode) !== -1;
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
    function Zn(e) {
      return ((e = e.detail), typeof e == `object` && `data` in e ? e.data : null);
    }
    var Qn = !1;
    function $n(e, t) {
      switch (e) {
        case `compositionend`:
          return Zn(t);
        case `keypress`:
          return t.which === 32 ? ((Yn = !0), Jn) : null;
        case `textInput`:
          return ((e = t.data), e === Jn && Yn ? null : e);
        default:
          return null;
      }
    }
    function er(e, t) {
      if (Qn)
        return e === `compositionend` || (!Wn && Xn(e, t))
          ? ((e = pn()), (fn = dn = un = null), (Qn = !1), e)
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
          return qn && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var tr = {
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
    function nr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!tr[e.type] : t === `textarea`;
    }
    function rr(e, t, n, r) {
      (nn ? (rn ? rn.push(r) : (rn = [r])) : (nn = r),
        (t = Od(t, `onChange`)),
        0 < t.length &&
          ((n = new yn(`onChange`, `change`, null, n, r)), e.push({ event: n, listeners: t })));
    }
    var ir = null,
      ar = null;
    function or(e) {
      xd(e, 0);
    }
    function sr(e) {
      if (Ft(vt(e))) return e;
    }
    function cr(e, t) {
      if (e === `change`) return t;
    }
    var lr = !1;
    if (sn) {
      var ur;
      if (sn) {
        var dr = `oninput` in document;
        if (!dr) {
          var fr = document.createElement(`div`);
          (fr.setAttribute(`oninput`, `return;`), (dr = typeof fr.oninput == `function`));
        }
        ur = dr;
      } else ur = !1;
      lr = ur && (!document.documentMode || 9 < document.documentMode);
    }
    function pr() {
      ir && (ir.detachEvent(`onpropertychange`, mr), (ar = ir = null));
    }
    function mr(e) {
      if (e.propertyName === `value` && sr(ar)) {
        var t = [];
        (rr(t, ar, e, tn(e)), on(or, t));
      }
    }
    function hr(e, t, n) {
      e === `focusin`
        ? (pr(), (ir = t), (ar = n), ir.attachEvent(`onpropertychange`, mr))
        : e === `focusout` && pr();
    }
    function gr(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return sr(ar);
    }
    function _r(e, t) {
      if (e === `click`) return sr(t);
    }
    function vr(e, t) {
      if (e === `input` || e === `change`) return sr(t);
    }
    function yr(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var br = typeof Object.is == `function` ? Object.is : yr;
    function xr(e, t) {
      if (br(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!j.call(t, i) || !br(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Sr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Cr(e, t) {
      var n = Sr(e);
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
        n = Sr(n);
      }
    }
    function wr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? wr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Tr(e) {
      e =
        e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = It(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = It(e.document);
      }
      return t;
    }
    function Er(e) {
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
    var Dr = sn && `documentMode` in document && 11 >= document.documentMode,
      Or = null,
      kr = null,
      Ar = null,
      jr = !1;
    function Mr(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      jr ||
        Or == null ||
        Or !== It(r) ||
        ((r = Or),
        `selectionStart` in r && Er(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Ar && xr(Ar, r)) ||
          ((Ar = r),
          (r = Od(kr, `onSelect`)),
          0 < r.length &&
            ((t = new yn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Or))));
    }
    function Nr(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var Pr = {
        animationend: Nr(`Animation`, `AnimationEnd`),
        animationiteration: Nr(`Animation`, `AnimationIteration`),
        animationstart: Nr(`Animation`, `AnimationStart`),
        transitionrun: Nr(`Transition`, `TransitionRun`),
        transitionstart: Nr(`Transition`, `TransitionStart`),
        transitioncancel: Nr(`Transition`, `TransitionCancel`),
        transitionend: Nr(`Transition`, `TransitionEnd`),
      },
      Fr = {},
      Ir = {};
    sn &&
      ((Ir = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete Pr.animationend.animation,
        delete Pr.animationiteration.animation,
        delete Pr.animationstart.animation),
      `TransitionEvent` in window || delete Pr.transitionend.transition);
    function Lr(e) {
      if (Fr[e]) return Fr[e];
      if (!Pr[e]) return e;
      var t = Pr[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Ir) return (Fr[e] = t[n]);
      return e;
    }
    var Rr = Lr(`animationend`),
      zr = Lr(`animationiteration`),
      Br = Lr(`animationstart`),
      Vr = Lr(`transitionrun`),
      Hr = Lr(`transitionstart`),
      Ur = Lr(`transitioncancel`),
      Wr = Lr(`transitionend`),
      Gr = new Map(),
      Kr =
        `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    Kr.push(`scrollEnd`);
    function qr(e, t) {
      (Gr.set(e, t), Ct(t, [e]));
    }
    var Jr =
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
      Yr = [],
      Xr = 0,
      Zr = 0;
    function Qr() {
      for (var e = Xr, t = (Zr = Xr = 0); t < e;) {
        var n = Yr[t];
        Yr[t++] = null;
        var r = Yr[t];
        Yr[t++] = null;
        var i = Yr[t];
        Yr[t++] = null;
        var a = Yr[t];
        if (((Yr[t++] = null), r !== null && i !== null)) {
          var o = r.pending;
          (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i));
        }
        a !== 0 && ni(n, i, a);
      }
    }
    function $r(e, t, n, r) {
      ((Yr[Xr++] = e),
        (Yr[Xr++] = t),
        (Yr[Xr++] = n),
        (Yr[Xr++] = r),
        (Zr |= r),
        (e.lanes |= r),
        (e = e.alternate),
        e !== null && (e.lanes |= r));
    }
    function ei(e, t, n, r) {
      return ($r(e, t, n, r), ri(e));
    }
    function ti(e, t) {
      return ($r(e, null, null, t), ri(e));
    }
    function ni(e, t, n) {
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
            ((i = 31 - Re(n)),
            (e = a.hiddenUpdates),
            (r = e[i]),
            r === null ? (e[i] = [t]) : r.push(t),
            (t.lane = n | 536870912)),
          a)
        : null;
    }
    function ri(e) {
      if (50 < pu) throw ((pu = 0), (mu = null), Error(i(185)));
      for (var t = e.return; t !== null;) ((e = t), (t = e.return));
      return e.tag === 3 ? e.stateNode : null;
    }
    var ii = {};
    function ai(e, t, n, r) {
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
    function oi(e, t, n, r) {
      return new ai(e, t, n, r);
    }
    function si(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function ci(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = oi(e.tag, t, e.key, e.mode)),
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
    function li(e, t) {
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
    function ui(e, t, n, r, a, o) {
      var s = 0;
      if (((r = e), typeof e == `function`)) si(e) && (s = 1);
      else if (typeof e == `string`)
        s = qf(e, n, ue.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
      else
        a: switch (e) {
          case E:
            return ((e = oi(31, n, t, a)), (e.elementType = E), (e.lanes = o), e);
          case g:
            return di(n.children, a, o, t);
          case _:
            ((s = 8), (a |= 24));
            break;
          case v:
            return ((e = oi(12, n, t, a | 2)), (e.elementType = v), (e.lanes = o), e);
          case S:
            return ((e = oi(13, n, t, a)), (e.elementType = S), (e.lanes = o), e);
          case C:
            return ((e = oi(19, n, t, a)), (e.elementType = C), (e.lanes = o), e);
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
      return ((t = oi(s, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
    }
    function di(e, t, n, r) {
      return ((e = oi(7, e, r, t)), (e.lanes = n), e);
    }
    function fi(e, t, n) {
      return ((e = oi(6, e, null, t)), (e.lanes = n), e);
    }
    function pi(e) {
      var t = oi(18, null, null, 0);
      return ((t.stateNode = e), t);
    }
    function mi(e, t, n) {
      return (
        (t = oi(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var hi = new WeakMap();
    function gi(e, t) {
      if (typeof e == `object` && e) {
        var n = hi.get(e);
        return n === void 0 ? ((t = { value: e, source: t, stack: we(t) }), hi.set(e, t), t) : n;
      }
      return { value: e, source: t, stack: we(t) };
    }
    var _i = [],
      vi = 0,
      yi = null,
      bi = 0,
      xi = [],
      Si = 0,
      Ci = null,
      wi = 1,
      Ti = ``;
    function Ei(e, t) {
      ((_i[vi++] = bi), (_i[vi++] = yi), (yi = e), (bi = t));
    }
    function Di(e, t, n) {
      ((xi[Si++] = wi), (xi[Si++] = Ti), (xi[Si++] = Ci), (Ci = e));
      var r = wi;
      e = Ti;
      var i = 32 - Re(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Re(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (wi = (1 << (32 - Re(t) + i)) | (n << i) | r),
          (Ti = a + e));
      } else ((wi = (1 << a) | (n << i) | r), (Ti = e));
    }
    function Oi(e) {
      e.return !== null && (Ei(e, 1), Di(e, 1, 0));
    }
    function ki(e) {
      for (; e === yi;) ((yi = _i[--vi]), (_i[vi] = null), (bi = _i[--vi]), (_i[vi] = null));
      for (; e === Ci;)
        ((Ci = xi[--Si]),
          (xi[Si] = null),
          (Ti = xi[--Si]),
          (xi[Si] = null),
          (wi = xi[--Si]),
          (xi[Si] = null));
    }
    function Ai(e, t) {
      ((xi[Si++] = wi), (xi[Si++] = Ti), (xi[Si++] = Ci), (wi = t.id), (Ti = t.overflow), (Ci = e));
    }
    var ji = null,
      Mi = null,
      R = !1,
      Ni = null,
      Pi = !1,
      Fi = Error(i(519));
    function Ii(e) {
      throw (
        Hi(
          gi(
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
        Fi
      );
    }
    function Li(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (((t[st] = e), (t[ct] = r), n)) {
        case `dialog`:
          (q(`cancel`, t), q(`close`, t));
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < yd.length; n++) q(yd[n], t);
          break;
        case `source`:
          q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          (q(`error`, t), q(`load`, t));
          break;
        case `details`:
          q(`toggle`, t);
          break;
        case `input`:
          (q(`invalid`, t),
            Bt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0));
          break;
        case `select`:
          q(`invalid`, t);
          break;
        case `textarea`:
          (q(`invalid`, t), Wt(t, r.value, r.defaultValue, r.children));
      }
      ((n = r.children),
        (typeof n != `string` && typeof n != `number` && typeof n != `bigint`) ||
        t.textContent === `` + n ||
        !0 === r.suppressHydrationWarning ||
        Pd(t.textContent, n)
          ? (r.popover != null && (q(`beforetoggle`, t), q(`toggle`, t)),
            r.onScroll != null && q(`scroll`, t),
            r.onScrollEnd != null && q(`scrollend`, t),
            r.onClick != null && (t.onclick = $t),
            (t = !0))
          : (t = !1),
        t || Ii(e, !0));
    }
    function Ri(e) {
      for (ji = e.return; ji;)
        switch (ji.tag) {
          case 5:
          case 31:
          case 13:
            Pi = !1;
            return;
          case 27:
          case 3:
            Pi = !0;
            return;
          default:
            ji = ji.return;
        }
    }
    function zi(e) {
      if (e !== ji) return !1;
      if (!R) return (Ri(e), (R = !0), !1);
      var t = e.tag,
        n;
      if (
        ((n = t !== 3 && t !== 27) &&
          ((n = t === 5) &&
            ((n = e.type), (n = n === `form` || n === `button` || Gd(e.type, e.memoizedProps))),
          (n = !n)),
        n && Mi && Ii(e),
        Ri(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Mi = ff(e);
      } else if (t === 31) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        Mi = ff(e);
      } else
        t === 27
          ? ((t = Mi), $d(e.type) ? ((e = df), (df = null), (Mi = e)) : (Mi = t))
          : (Mi = ji ? uf(e.stateNode.nextSibling) : null);
      return !0;
    }
    function Bi() {
      ((Mi = ji = null), (R = !1));
    }
    function Vi() {
      var e = Ni;
      return (e !== null && ($l === null ? ($l = e) : $l.push.apply($l, e), (Ni = null)), e);
    }
    function Hi(e) {
      Ni === null ? (Ni = [e]) : Ni.push(e);
    }
    var Ui = se(null),
      Wi = null,
      Gi = null;
    function Ki(e, t, n) {
      (le(Ui, t._currentValue), (t._currentValue = n));
    }
    function qi(e) {
      ((e._currentValue = Ui.current), ce(Ui));
    }
    function Ji(e, t, n) {
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
    function Yi(e, t, n, r) {
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
                  Ji(o.return, n, e),
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
            Ji(s, n, e),
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
    function Xi(e, t, n, r) {
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
            br(a.pendingProps.value, s.value) || (e === null ? (e = [c]) : e.push(c));
          }
        } else if (a === pe.current) {
          if (((s = a.alternate), s === null)) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
            (e === null ? (e = [np]) : e.push(np));
        }
        a = a.return;
      }
      (e !== null && Yi(t, e, n, r), (t.flags |= 262144));
    }
    function Zi(e) {
      for (e = e.firstContext; e !== null;) {
        if (!br(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function Qi(e) {
      ((Wi = e), (Gi = null), (e = e.dependencies), e !== null && (e.firstContext = null));
    }
    function $i(e) {
      return ta(Wi, e);
    }
    function ea(e, t) {
      return (Wi === null && Qi(e), ta(e, t));
    }
    function ta(e, t) {
      var n = t._currentValue;
      if (((t = { context: t, memoizedValue: n, next: null }), Gi === null)) {
        if (e === null) throw Error(i(308));
        ((Gi = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
      } else Gi = Gi.next = t;
      return n;
    }
    var na =
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
      ra = t.unstable_scheduleCallback,
      ia = t.unstable_NormalPriority,
      aa = {
        $$typeof: b,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function oa() {
      return { controller: new na(), data: new Map(), refCount: 0 };
    }
    function sa(e) {
      (e.refCount--,
        e.refCount === 0 &&
          ra(ia, function () {
            e.controller.abort();
          }));
    }
    var ca = null,
      la = 0,
      ua = 0,
      da = null;
    function fa(e, t) {
      if (ca === null) {
        var n = (ca = []);
        ((la = 0),
          (ua = pd()),
          (da = {
            status: `pending`,
            value: void 0,
            then: function (e) {
              n.push(e);
            },
          }));
      }
      return (la++, t.then(pa, pa), t);
    }
    function pa() {
      if (--la === 0 && ca !== null) {
        da !== null && (da.status = `fulfilled`);
        var e = ca;
        ((ca = null), (ua = 0), (da = null));
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function ma(e, t) {
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
    var ha = O.S;
    O.S = function (e, t) {
      ((nu = De()),
        typeof t == `object` && t && typeof t.then == `function` && fa(e, t),
        ha !== null && ha(e, t));
    };
    var ga = se(null);
    function _a() {
      var e = ga.current;
      return e === null ? Bl.pooledCache : e;
    }
    function va(e, t) {
      t === null ? le(ga, ga.current) : le(ga, t.pool);
    }
    function ya() {
      var e = _a();
      return e === null ? null : { parent: aa._currentValue, pool: e };
    }
    var ba = Error(i(460)),
      xa = Error(i(474)),
      Sa = Error(i(542)),
      Ca = { then: function () {} };
    function wa(e) {
      return ((e = e.status), e === `fulfilled` || e === `rejected`);
    }
    function Ta(e, t, n) {
      switch (
        ((n = e[n]), n === void 0 ? e.push(t) : n !== t && (t.then($t, $t), (t = n)), t.status)
      ) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw ((e = t.reason), ka(e), e);
        default:
          if (typeof t.status == `string`) t.then($t, $t);
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
              throw ((e = t.reason), ka(e), e);
          }
          throw ((Da = t), ba);
      }
    }
    function Ea(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? ((Da = e), ba) : e;
      }
    }
    var Da = null;
    function Oa() {
      if (Da === null) throw Error(i(459));
      var e = Da;
      return ((Da = null), e);
    }
    function ka(e) {
      if (e === ba || e === Sa) throw Error(i(483));
    }
    var Aa = null,
      ja = 0;
    function Ma(e) {
      var t = ja;
      return ((ja += 1), Aa === null && (Aa = []), Ta(Aa, e, t));
    }
    function Na(e, t) {
      ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
    }
    function Pa(e, t) {
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
    function Fa(e) {
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
        return ((e = ci(e, t)), (e.index = 0), (e.sibling = null), e);
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
          ? ((t = fi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === g
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` && i && i.$$typeof === T && Ea(i) === t.type))
            ? ((t = a(t, n.props)), Na(t, n), (t.return = e), t)
            : ((t = ui(n.type, n.key, n.props, null, e.mode, r)), Na(t, n), (t.return = e), t);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = mi(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = di(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
          return ((t = fi(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case m:
              return (
                (n = ui(t.type, t.key, t.props, null, e.mode, n)), Na(n, t), (n.return = e), n
              );
            case h:
              return ((t = mi(t, e.mode, n)), (t.return = e), t);
            case T:
              return ((t = Ea(t)), f(e, t, n));
          }
          if (ie(t) || te(t)) return ((t = di(t, e.mode, n, null)), (t.return = e), t);
          if (typeof t.then == `function`) return f(e, Ma(t), n);
          if (t.$$typeof === b) return f(e, ea(e, t), n);
          Pa(e, t);
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
              return ((n = Ea(n)), p(e, t, n, r));
          }
          if (ie(n) || te(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, Ma(n), r);
          if (n.$$typeof === b) return p(e, t, ea(e, n), r);
          Pa(e, n);
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
              return ((r = Ea(r)), _(e, t, n, r, i));
          }
          if (ie(r) || te(r)) return ((e = e.get(n) || null), d(t, e, r, i, null));
          if (typeof r.then == `function`) return _(e, t, n, Ma(r), i);
          if (r.$$typeof === b) return _(e, t, n, ea(t, r), i);
          Pa(t, r);
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
        if (m === s.length) return (n(i, d), R && Ei(i, m), l);
        if (d === null) {
          for (; m < s.length; m++)
            ((d = f(i, s[m], c)),
              d !== null && ((a = o(d, a, m)), u === null ? (l = d) : (u.sibling = d), (u = d)));
          return (R && Ei(i, m), l);
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
          R && Ei(i, m),
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
        if (v.done) return (n(a, m), R && Ei(a, h), u);
        if (m === null) {
          for (; !v.done; h++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null && ((s = o(v, s, h)), d === null ? (u = v) : (d.sibling = v), (d = v)));
          return (R && Ei(a, h), u);
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
          R && Ei(a, h),
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
                      (typeof l == `object` && l && l.$$typeof === T && Ea(l) === r.type)
                    ) {
                      (n(e, r.sibling), (c = a(r, o.props)), Na(c, o), (c.return = e), (e = c));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                o.type === g
                  ? ((c = di(o.props.children, e.mode, c, o.key)), (c.return = e), (e = c))
                  : ((c = ui(o.type, o.key, o.props, null, e.mode, c)),
                    Na(c, o),
                    (c.return = e),
                    (e = c));
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
                ((c = mi(o, e.mode, c)), (c.return = e), (e = c));
              }
              return s(e);
            case T:
              return ((o = Ea(o)), x(e, r, o, c));
          }
          if (ie(o)) return v(e, r, o, c);
          if (te(o)) {
            if (((l = te(o)), typeof l != `function`)) throw Error(i(150));
            return ((o = l.call(o)), y(e, r, o, c));
          }
          if (typeof o.then == `function`) return x(e, r, Ma(o), c);
          if (o.$$typeof === b) return x(e, r, ea(e, o), c);
          Pa(e, o);
        }
        return (typeof o == `string` && o !== ``) || typeof o == `number` || typeof o == `bigint`
          ? ((o = `` + o),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
              : (n(e, r), (c = fi(o, e.mode, c)), (c.return = e), (e = c)),
            s(e))
          : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          ja = 0;
          var i = x(e, t, n, r);
          return ((Aa = null), i);
        } catch (t) {
          if (t === ba || t === Sa) throw t;
          var a = oi(29, t, null, e.mode);
          return ((a.lanes = r), (a.return = e), a);
        }
      };
    }
    var Ia = Fa(!0),
      La = Fa(!1),
      Ra = !1;
    function za(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Ba(e, t) {
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
    function Va(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Ha(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), H & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          (t = ri(e)),
          ni(e, null, n),
          t
        );
      }
      return ($r(e, r, t, n), ri(e));
    }
    function Ua(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), et(e, n));
      }
    }
    function Wa(e, t) {
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
    var Ga = !1;
    function Ka() {
      if (Ga) {
        var e = da;
        if (e !== null) throw e;
      }
    }
    function qa(e, t, n, r) {
      Ga = !1;
      var i = e.updateQueue;
      Ra = !1;
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
            (p !== 0 && p === ua && (Ga = !0),
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
                  Ra = !0;
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
          (ql |= o),
          (e.lanes = o),
          (e.memoizedState = d));
      }
    }
    function Ja(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Ya(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Ja(n[e], t);
    }
    var Xa = se(null),
      Za = se(0);
    function Qa(e, t) {
      ((e = Gl), le(Za, e), le(Xa, t), (Gl = e | t.baseLanes));
    }
    function $a() {
      (le(Za, Gl), le(Xa, Xa.current));
    }
    function eo() {
      ((Gl = Za.current), ce(Xa), ce(Za));
    }
    var to = se(null),
      no = null;
    function ro(e) {
      var t = e.alternate;
      (le(co, co.current & 1),
        le(to, e),
        no === null && (t === null || Xa.current !== null || t.memoizedState !== null) && (no = e));
    }
    function io(e) {
      (le(co, co.current), le(to, e), no === null && (no = e));
    }
    function ao(e) {
      e.tag === 22 ? (le(co, co.current), le(to, e), no === null && (no = e)) : oo(e);
    }
    function oo() {
      (le(co, co.current), le(to, to.current));
    }
    function so(e) {
      (ce(to), no === e && (no = null), ce(co));
    }
    var co = se(0);
    function lo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && ((n = n.dehydrated), n === null || sf(n) || cf(n))) return t;
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
    var uo = 0,
      z = null,
      fo = null,
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
      for (var n = 0; n < t.length && n < e.length; n++) if (!br(e[n], t[n])) return !1;
      return !0;
    }
    function Co(e, t, n, r, i, a) {
      return (
        (uo = a),
        (z = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (O.H = e === null || e.memoizedState === null ? Bs : Vs),
        (go = !1),
        (a = n(r, i)),
        (go = !1),
        ho && (a = To(t, n, r, i)),
        wo(e),
        a
      );
    }
    function wo(e) {
      O.H = zs;
      var t = fo !== null && fo.next !== null;
      if (((uo = 0), (po = fo = z = null), (mo = !1), (vo = 0), (yo = null), t))
        throw Error(i(300));
      e === null || rc || ((e = e.dependencies), e !== null && Zi(e) && (rc = !0));
    }
    function To(e, t, n, r) {
      z = e;
      var a = 0;
      do {
        if ((ho && (yo = null), (vo = 0), (ho = !1), 25 <= a)) throw Error(i(301));
        if (((a += 1), (po = fo = null), e.updateQueue != null)) {
          var o = e.updateQueue;
          ((o.lastEffect = null),
            (o.events = null),
            (o.stores = null),
            o.memoCache != null && (o.memoCache.index = 0));
        }
        ((O.H = Hs), (o = t(n, r)));
      } while (ho);
      return o;
    }
    function Eo() {
      var e = O.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == `function` ? No(t) : t),
        (e = e.useState()[0]),
        (fo === null ? null : fo.memoizedState) !== e && (z.flags |= 1024),
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
      ((uo = 0), (po = fo = z = null), (ho = !1), (vo = _o = 0), (yo = null));
    }
    function Ao() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return (po === null ? (z.memoizedState = po = e) : (po = po.next = e), po);
    }
    function jo() {
      if (fo === null) {
        var e = z.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = fo.next;
      var t = po === null ? z.memoizedState : po.next;
      if (t !== null) ((po = t), (fo = e));
      else {
        if (e === null) throw z.alternate === null ? Error(i(467)) : Error(i(310));
        ((fo = e),
          (e = {
            memoizedState: fo.memoizedState,
            baseState: fo.baseState,
            baseQueue: fo.baseQueue,
            queue: fo.queue,
            next: null,
          }),
          po === null ? (z.memoizedState = po = e) : (po = po.next = e));
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
        (e = Ta(yo, e, t)),
        (t = z),
        (po === null ? t.memoizedState : po.next) === null &&
          ((t = t.alternate), (O.H = t === null || t.memoizedState === null ? Bs : Vs)),
        e
      );
    }
    function Po(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return No(e);
        if (e.$$typeof === b) return $i(e);
      }
      throw Error(i(438, String(e)));
    }
    function Fo(e) {
      var t = null,
        n = z.updateQueue;
      if ((n !== null && (t = n.memoCache), t == null)) {
        var r = z.alternate;
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
        n === null && ((n = Mo()), (z.updateQueue = n)),
        (n.memoCache = t),
        (n = t.data[t.index]),
        n === void 0)
      )
        for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = D;
      return (t.index++, n);
    }
    function Io(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Lo(e) {
      return Ro(jo(), fo, e);
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
          if (f === u.lane ? (uo & f) === f : (W & f) === f) {
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
                f === ua && (d = !0));
            else if ((uo & p) === p) {
              ((u = u.next), p === ua && (d = !0));
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
                (z.lanes |= p),
                (ql |= p));
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
              (z.lanes |= f),
              (ql |= f));
          u = u.next;
        } while (u !== null && u !== t);
        if (
          (l === null ? (s = o) : (l.next = c),
          !br(o, e.memoizedState) && ((rc = !0), d && ((n = da), n !== null)))
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
        (br(o, t.memoizedState) || (rc = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Bo(e, t, n) {
      var r = z,
        a = jo(),
        o = R;
      if (o) {
        if (n === void 0) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !br((fo || a).memoizedState, n);
      if (
        (s && ((a.memoizedState = n), (rc = !0)),
        (a = a.queue),
        ds(Uo.bind(null, r, a, e), [e]),
        a.getSnapshot !== t || s || (po !== null && po.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          os(9, { destroy: void 0 }, Ho.bind(null, r, a, n, t), null),
          Bl === null)
        )
          throw Error(i(349));
        o || uo & 127 || Vo(r, t, n);
      }
      return n;
    }
    function Vo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = z.updateQueue),
        t === null
          ? ((t = Mo()), (z.updateQueue = t), (t.stores = [e]))
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
        return !br(e, n);
      } catch {
        return !0;
      }
    }
    function Go(e) {
      var t = ti(e, 2);
      t !== null && _u(t, e, 2);
    }
    function Ko(e) {
      var t = Ao();
      if (typeof e == `function`) {
        var n = e;
        if (((e = n()), go)) {
          Le(!0);
          try {
            n();
          } finally {
            Le(!1);
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
      return ((e.baseState = n), Ro(e, fo, typeof r == `function` ? r : Io));
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
        (O.T === null ? (o.isTransition = !1) : n(!0),
          r(o),
          (n = t.pending),
          n === null
            ? ((o.next = t.pending = o), Yo(t, o))
            : ((o.next = n.next), (t.pending = n.next = o)));
      }
    }
    function Yo(e, t) {
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
          (c !== null && c(o, s), Xo(e, t, s));
        } catch (n) {
          Qo(e, t, n);
        } finally {
          (a !== null && o.types !== null && (a.types = o.types), (O.T = a));
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
        t !== null &&
          ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Yo(e, n))));
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
      if (R) {
        var n = Bl.formState;
        if (n !== null) {
          a: {
            var r = z;
            if (R) {
              if (Mi) {
                b: {
                  for (var i = Mi, a = Pi; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (((i = uf(i.nextSibling)), i === null)) {
                      i = null;
                      break b;
                    }
                  }
                  ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                }
                if (i) {
                  ((Mi = uf(i.nextSibling)), (r = i.data === `F!`));
                  break a;
                }
              }
              Ii(r);
            }
            r = !1;
          }
          r && (t = n[0]);
        }
      }
      return (
        (n = Ao()),
        (n.memoizedState = n.baseState = t),
        (r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: es,
          lastRenderedState: t,
        }),
        (n.queue = r),
        (n = Ns.bind(null, z, r)),
        (r.dispatch = n),
        (r = Ko(!1)),
        (a = Fs.bind(null, z, !1, r.queue)),
        (r = Ao()),
        (i = { state: t, dispatch: null, action: e, pending: null }),
        (r.queue = i),
        (n = Jo.bind(null, z, i, a, n)),
        (i.dispatch = n),
        (r.memoizedState = e),
        [t, n, !1]
      );
    }
    function ns(e) {
      return rs(jo(), fo, e);
    }
    function rs(e, t, n) {
      if (
        ((t = Ro(e, t, es)[0]),
        (e = Lo(Io)[0]),
        typeof t == `object` && t && typeof t.then == `function`)
      )
        try {
          var r = No(t);
        } catch (e) {
          throw e === ba ? Sa : e;
        }
      else r = t;
      t = jo();
      var i = t.queue,
        a = i.dispatch;
      return (
        n !== t.memoizedState &&
          ((z.flags |= 2048), os(9, { destroy: void 0 }, is.bind(null, i, n), null)),
        [r, a, e]
      );
    }
    function is(e, t) {
      e.action = t;
    }
    function as(e) {
      var t = jo(),
        n = fo;
      if (n !== null) return rs(t, n, e);
      (jo(), (t = t.memoizedState), (n = jo()));
      var r = n.queue.dispatch;
      return ((n.memoizedState = e), [t, r, !1]);
    }
    function os(e, t, n, r) {
      return (
        (e = { tag: e, create: n, deps: r, inst: t, next: null }),
        (t = z.updateQueue),
        t === null && ((t = Mo()), (z.updateQueue = t)),
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
      ((z.flags |= e),
        (i.memoizedState = os(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r)));
    }
    function ls(e, t, n, r) {
      var i = jo();
      r = r === void 0 ? null : r;
      var a = i.memoizedState.inst;
      fo !== null && r !== null && So(r, fo.memoizedState.deps)
        ? (i.memoizedState = os(t, a, n, r))
        : ((z.flags |= e), (i.memoizedState = os(1 | t, a, n, r)));
    }
    function us(e, t) {
      cs(8390656, 8, e, t);
    }
    function ds(e, t) {
      ls(2048, 8, e, t);
    }
    function fs(e) {
      z.flags |= 4;
      var t = z.updateQueue;
      if (t === null) ((t = Mo()), (z.updateQueue = t), (t.events = [e]));
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
          if (H & 2) throw Error(i(440));
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
        Le(!0);
        try {
          e();
        } finally {
          Le(!1);
        }
      }
      return ((n.memoizedState = [r, t]), r);
    }
    function xs(e, t, n) {
      return n === void 0 || (uo & 1073741824 && !(W & 261930))
        ? (e.memoizedState = t)
        : ((e.memoizedState = n), (e = gu()), (z.lanes |= e), (ql |= e), n);
    }
    function Ss(e, t, n, r) {
      return br(n, t)
        ? n
        : Xa.current === null
          ? !(uo & 42) || (uo & 1073741824 && !(W & 261930))
            ? ((rc = !0), (e.memoizedState = n))
            : ((e = gu()), (z.lanes |= e), (ql |= e), t)
          : ((e = xs(e, n, r)), br(e, t) || (rc = !0), e);
    }
    function Cs(e, t, n, r, i) {
      var a = k.p;
      k.p = a !== 0 && 8 > a ? a : 8;
      var o = O.T,
        s = {};
      ((O.T = s), Fs(e, !1, t, n));
      try {
        var c = i(),
          l = O.S;
        (l !== null && l(s, c),
          typeof c == `object` && c && typeof c.then == `function`
            ? Ps(e, t, ma(c, r), hu(e))
            : Ps(e, t, r, hu(e)));
      } catch (n) {
        Ps(e, t, { then: function () {}, status: `rejected`, reason: n }, hu());
      } finally {
        ((k.p = a), o !== null && s.types !== null && (o.types = s.types), (O.T = o));
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
        A,
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
        memoizedState: A,
        baseState: A,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Io,
          lastRenderedState: A,
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
            lastRenderedReducer: Io,
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
    function Ds(e) {
      var t = Es(e);
      (t.next === null && (t = e.alternate.memoizedState), Ps(e, t.next.queue, {}, hu()));
    }
    function Os() {
      return $i(np);
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
            var n = hu();
            e = Va(n);
            var r = Ha(t, e, n);
            (r !== null && (_u(r, t, n), Ua(r, t, n)), (t = { cache: oa() }), (e.payload = t));
            return;
        }
        t = t.return;
      }
    }
    function Ms(e, t, n) {
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
        Is(e) ? Ls(t, n) : ((n = ei(e, t, n, r)), n !== null && (_u(n, e, r), Rs(n, t, r))));
    }
    function Ns(e, t, n) {
      Ps(e, t, n, hu());
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
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), br(s, o)))
              return ($r(e, t, i, 0), Bl === null && Qr(), !1);
          } catch {}
        if (((n = ei(e, t, i, r)), n !== null)) return (_u(n, e, r), Rs(n, t, r), !0);
      }
      return !1;
    }
    function Fs(e, t, n, r) {
      if (
        ((r = {
          lane: 2,
          revertLane: pd(),
          gesture: null,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Is(e))
      ) {
        if (t) throw Error(i(479));
      } else ((t = ei(e, n, r, 2)), t !== null && _u(t, e, 2));
    }
    function Is(e) {
      var t = e.alternate;
      return e === z || (t !== null && t === z);
    }
    function Ls(e, t) {
      ho = mo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
    }
    function Rs(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), et(e, n));
      }
    }
    var zs = {
      readContext: $i,
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
        readContext: $i,
        use: Po,
        useCallback: function (e, t) {
          return ((Ao().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: $i,
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
            Le(!0);
            try {
              e();
            } finally {
              Le(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        },
        useReducer: function (e, t, n) {
          var r = Ao();
          if (n !== void 0) {
            var i = n(t);
            if (go) {
              Le(!0);
              try {
                n(t);
              } finally {
                Le(!1);
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
            (e = e.dispatch = Ms.bind(null, z, e)),
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
            n = Ns.bind(null, z, t);
          return ((t.dispatch = n), [e.memoizedState, n]);
        },
        useDebugValue: vs,
        useDeferredValue: function (e, t) {
          return xs(Ao(), e, t);
        },
        useTransition: function () {
          var e = Ko(!1);
          return ((e = Cs.bind(null, z, e.queue, !0, !1)), (Ao().memoizedState = e), [!1, e]);
        },
        useSyncExternalStore: function (e, t, n) {
          var r = z,
            a = Ao();
          if (R) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), Bl === null)) throw Error(i(349));
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
            t = Bl.identifierPrefix;
          if (R) {
            var n = Ti,
              r = wi;
            ((n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
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
          return ((t.queue = n), (t = Fs.bind(null, z, !0, n)), (n.dispatch = t), [e, t]);
        },
        useMemoCache: Fo,
        useCacheRefresh: function () {
          return (Ao().memoizedState = js.bind(null, z));
        },
        useEffectEvent: function (e) {
          var t = Ao(),
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
      Vs = {
        readContext: $i,
        use: Po,
        useCallback: ys,
        useContext: $i,
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
          return Ss(jo(), fo.memoizedState, e, t);
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
          return qo(jo(), fo, e, t);
        },
        useMemoCache: Fo,
        useCacheRefresh: As,
      };
    Vs.useEffectEvent = ps;
    var Hs = {
      readContext: $i,
      use: Po,
      useCallback: ys,
      useContext: $i,
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
        return fo === null ? xs(n, e, t) : Ss(n, fo.memoizedState, e, t);
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
        return fo === null ? ((n.baseState = e), [e, n.queue.dispatch]) : qo(n, fo, e, t);
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
        var r = hu(),
          i = Va(r);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = Ha(e, i, r)),
          t !== null && (_u(t, e, r), Ua(t, e, r)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = hu(),
          i = Va(r);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = Ha(e, i, r)),
          t !== null && (_u(t, e, r), Ua(t, e, r)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = hu(),
          r = Va(n);
        ((r.tag = 2),
          t != null && (r.callback = t),
          (t = Ha(e, r, n)),
          t !== null && (_u(t, e, n), Ua(t, e, n)));
      },
    };
    function Gs(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !xr(n, r) || !xr(i, a)
            : !0
      );
    }
    function Ks(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
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
      Jr(e);
    }
    function Ys(e) {
      console.error(e);
    }
    function Xs(e) {
      Jr(e);
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
        (n = Va(n)),
        (n.tag = 3),
        (n.payload = { element: null }),
        (n.callback = function () {
          Zs(e, t);
        }),
        n
      );
    }
    function $s(e) {
      return ((e = Va(e)), (e.tag = 3), e);
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
          (Qs(t, n, r),
            typeof i != `function` && (au === null ? (au = new Set([this])) : au.add(this)));
          var e = r.stack;
          this.componentDidCatch(r.value, { componentStack: e === null ? `` : e });
        });
    }
    function tc(e, t, n, r, a) {
      if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
        if (((t = n.alternate), t !== null && Xi(t, n, a, !0), (n = to.current), n !== null)) {
          switch (n.tag) {
            case 31:
            case 13:
              return (
                no === null ? ku() : n.alternate === null && Kl === 0 && (Kl = 3),
                (n.flags &= -257),
                (n.flags |= 65536),
                (n.lanes = a),
                r === Ca
                  ? (n.flags |= 16384)
                  : ((t = n.updateQueue),
                    t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                    qu(e, r, a)),
                !1
              );
            case 22:
              return (
                (n.flags |= 65536),
                r === Ca
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
                    qu(e, r, a)),
                !1
              );
          }
          throw Error(i(435, n.tag));
        }
        return (qu(e, r, a), ku(), !1);
      }
      if (R)
        return (
          (t = to.current),
          t === null
            ? (r !== Fi && ((t = Error(i(423), { cause: r })), Hi(gi(t, n))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (a &= -a),
              (e.lanes |= a),
              (r = gi(r, n)),
              (a = B(e.stateNode, r, a)),
              Wa(e, a),
              Kl !== 4 && (Kl = 2))
            : (!(t.flags & 65536) && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = a),
              r !== Fi && ((e = Error(i(422), { cause: r })), Hi(gi(e, n)))),
          !1
        );
      var o = Error(i(520), { cause: r });
      if (((o = gi(o, n)), Ql === null ? (Ql = [o]) : Ql.push(o), Kl !== 4 && (Kl = 2), t === null))
        return !0;
      ((r = gi(r, n)), (n = t));
      do {
        switch (n.tag) {
          case 3:
            return (
              (n.flags |= 65536),
              (e = a & -a),
              (n.lanes |= e),
              (e = B(n.stateNode, r, e)),
              Wa(n, e),
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
                    (au === null || !au.has(o)))))
            )
              return (
                (n.flags |= 65536),
                (a &= -a),
                (n.lanes |= a),
                (a = $s(a)),
                ec(a, e, n, r),
                Wa(n, a),
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
      t.child = e === null ? La(t, null, n, r) : Ia(t, e.child, n, r);
    }
    function ac(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return (
        Qi(t),
        (r = Co(e, t, n, o, a, i)),
        (s = Do()),
        e !== null && !rc
          ? (Oo(e, t, i), kc(e, t, i))
          : (R && s && Oi(t), (t.flags |= 1), ic(e, t, r, i), t.child)
      );
    }
    function oc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !si(a) && a.defaultProps === void 0 && n.compare === null
          ? ((t.tag = 15), (t.type = a), sc(e, t, a, r, i))
          : ((e = ui(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), !Ac(e, i))) {
        var o = a.memoizedProps;
        if (((n = n.compare), (n = n === null ? xr : n), n(o, r) && e.ref === t.ref))
          return kc(e, t, i);
      }
      return ((t.flags |= 1), (e = ci(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    function sc(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (xr(a, r) && e.ref === t.ref) {
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
          return uc(e, t, a, n, r);
        }
        if (n & 536870912)
          ((t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && va(t, a === null ? null : a.cachePool),
            a === null ? $a() : Qa(t, a),
            ao(t));
        else return ((r = t.lanes = 536870912), uc(e, t, a === null ? n : a.baseLanes | n, n, r));
      } else
        a === null
          ? (e !== null && va(t, null), $a(), oo(t))
          : (va(t, a.cachePool), Qa(t, a), oo(t), (t.memoizedState = null));
      return (ic(e, t, i, n), t.child);
    }
    function lc(e, t) {
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
    function uc(e, t, n, r, i) {
      var a = _a();
      return (
        (a = a === null ? null : { parent: aa._currentValue, pool: a }),
        (t.memoizedState = { baseLanes: n, cachePool: a }),
        e !== null && va(t, null),
        $a(),
        ao(t),
        e !== null && Xi(e, t, r, !0),
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
        Ia(t, e.child, null, n),
        (e = dc(t, t.pendingProps)),
        (e.flags |= 2),
        so(t),
        (t.memoizedState = null),
        e
      );
    }
    function pc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (((t.flags &= -129), e === null)) {
        if (R) {
          if (r.mode === `hidden`) return ((e = dc(t, r)), (t.lanes = 536870912), lc(null, e));
          if (
            (io(t),
            (e = Mi)
              ? ((e = of(e, Pi)),
                (e = e !== null && e.data === `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ci === null ? null : { id: wi, overflow: Ti },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = pi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ji = t),
                  (Mi = null)))
              : (e = null),
            e === null)
          )
            throw Ii(t);
          return ((t.lanes = 536870912), null);
        }
        return dc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if ((io(t), a)) {
          if (t.flags & 256) ((t.flags &= -257), (t = fc(e, t, n)));
          else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
          else throw Error(i(558));
        } else if ((rc || Xi(e, t, n, !1), (a = (n & e.childLanes) !== 0), rc || a)) {
          if (((r = Bl), r !== null && ((s = tt(r, n)), s !== 0 && s !== o.retryLane)))
            throw ((o.retryLane = s), ti(e, s), _u(r, e, s), nc);
          (ku(), (t = fc(e, t, n)));
        } else
          ((e = o.treeContext),
            (Mi = uf(s.nextSibling)),
            (ji = t),
            (R = !0),
            (Ni = null),
            (Pi = !1),
            e !== null && Ai(t, e),
            (t = dc(t, r)),
            (t.flags |= 4096));
        return t;
      }
      return (
        (e = ci(e.child, { mode: r.mode, children: r.children })),
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
        Qi(t),
        (n = Co(e, t, n, r, void 0, i)),
        (r = Do()),
        e !== null && !rc
          ? (Oo(e, t, i), kc(e, t, i))
          : (R && r && Oi(t), (t.flags |= 1), ic(e, t, n, i), t.child)
      );
    }
    function gc(e, t, n, r, i, a) {
      return (
        Qi(t),
        (t.updateQueue = null),
        (n = To(t, r, n, i)),
        wo(e),
        (r = Do()),
        e !== null && !rc
          ? (Oo(e, t, a), kc(e, t, a))
          : (R && r && Oi(t), (t.flags |= 1), ic(e, t, n, a), t.child)
      );
    }
    function _c(e, t, n, r, i) {
      if ((Qi(t), t.stateNode === null)) {
        var a = ii,
          o = n.contextType;
        (typeof o == `object` && o && (a = $i(o)),
          (a = new n(r, a)),
          (t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null),
          (a.updater = Ws),
          (t.stateNode = a),
          (a._reactInternals = t),
          (a = t.stateNode),
          (a.props = r),
          (a.state = t.memoizedState),
          (a.refs = {}),
          za(t),
          (o = n.contextType),
          (a.context = typeof o == `object` && o ? $i(o) : ii),
          (a.state = t.memoizedState),
          (o = n.getDerivedStateFromProps),
          typeof o == `function` && (Us(t, n, o, r), (a.state = t.memoizedState)),
          typeof n.getDerivedStateFromProps == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function` ||
            (typeof a.UNSAFE_componentWillMount != `function` &&
              typeof a.componentWillMount != `function`) ||
            ((o = a.state),
            typeof a.componentWillMount == `function` && a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(),
            o !== a.state && Ws.enqueueReplaceState(a, a.state, null),
            qa(t, r, a, i),
            Ka(),
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
        ((o = ii), typeof u == `object` && u && (o = $i(u)));
        var d = n.getDerivedStateFromProps;
        ((u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`),
          (s = t.pendingProps !== s),
          u ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((s || l !== o) && Ks(t, a, r, o)),
          (Ra = !1));
        var f = t.memoizedState;
        ((a.state = f),
          qa(t, r, a, i),
          Ka(),
          (l = t.memoizedState),
          s || f !== l || Ra
            ? (typeof d == `function` && (Us(t, n, d, r), (l = t.memoizedState)),
              (c = Ra || Gs(t, n, c, r, f, l, o))
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
          Ba(e, t),
          (o = t.memoizedProps),
          (u = qs(n, o)),
          (a.props = u),
          (d = t.pendingProps),
          (f = a.context),
          (l = n.contextType),
          (c = ii),
          typeof l == `object` && l && (c = $i(l)),
          (s = n.getDerivedStateFromProps),
          (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) ||
            (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
              typeof a.componentWillReceiveProps != `function`) ||
            ((o !== d || f !== c) && Ks(t, a, r, c)),
          (Ra = !1),
          (f = t.memoizedState),
          (a.state = f),
          qa(t, r, a, i),
          Ka());
        var p = t.memoizedState;
        o !== d || f !== p || Ra || (e !== null && e.dependencies !== null && Zi(e.dependencies))
          ? (typeof s == `function` && (Us(t, n, s, r), (p = t.memoizedState)),
            (u =
              Ra ||
              Gs(t, n, u, r, f, p, c) ||
              (e !== null && e.dependencies !== null && Zi(e.dependencies)))
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
        mc(e, t),
        (r = !!(t.flags & 128)),
        a || r
          ? ((a = t.stateNode),
            (n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render()),
            (t.flags |= 1),
            e !== null && r
              ? ((t.child = Ia(t, e.child, null, i)), (t.child = Ia(t, null, n, i)))
              : ic(e, t, n, i),
            (t.memoizedState = a.state),
            (e = t.child))
          : (e = kc(e, t, i)),
        e
      );
    }
    function vc(e, t, n, r) {
      return (Bi(), (t.flags |= 256), ic(e, t, n, r), t.child);
    }
    var yc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function bc(e) {
      return { baseLanes: e, cachePool: ya() };
    }
    function xc(e, t, n) {
      return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= Xl), e);
    }
    function Sc(e, t, n) {
      var r = t.pendingProps,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : !!(co.current & 2)),
        s && ((a = !0), (t.flags &= -129)),
        (s = !!(t.flags & 32)),
        (t.flags &= -33),
        e === null)
      ) {
        if (R) {
          if (
            (a ? ro(t) : oo(t),
            (e = Mi)
              ? ((e = of(e, Pi)),
                (e = e !== null && e.data !== `&` ? e : null),
                e !== null &&
                  ((t.memoizedState = {
                    dehydrated: e,
                    treeContext: Ci === null ? null : { id: wi, overflow: Ti },
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (n = pi(e)),
                  (n.return = t),
                  (t.child = n),
                  (ji = t),
                  (Mi = null)))
              : (e = null),
            e === null)
          )
            throw Ii(t);
          return (cf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
        }
        var c = r.children;
        return (
          (r = r.fallback),
          a
            ? (oo(t),
              (a = t.mode),
              (c = wc({ mode: `hidden`, children: c }, a)),
              (r = di(r, a, n, null)),
              (c.return = t),
              (r.return = t),
              (c.sibling = r),
              (t.child = c),
              (r = t.child),
              (r.memoizedState = bc(n)),
              (r.childLanes = xc(e, s, n)),
              (t.memoizedState = yc),
              lc(null, r))
            : (ro(t), Cc(t, c))
        );
      }
      var l = e.memoizedState;
      if (l !== null && ((c = l.dehydrated), c !== null)) {
        if (o)
          t.flags & 256
            ? (ro(t), (t.flags &= -257), (t = Tc(e, t, n)))
            : t.memoizedState === null
              ? (oo(t),
                (c = r.fallback),
                (a = t.mode),
                (r = wc({ mode: `visible`, children: r.children }, a)),
                (c = di(c, a, n, null)),
                (c.flags |= 2),
                (r.return = t),
                (c.return = t),
                (r.sibling = c),
                (t.child = r),
                Ia(t, e.child, null, n),
                (r = t.child),
                (r.memoizedState = bc(n)),
                (r.childLanes = xc(e, s, n)),
                (t.memoizedState = yc),
                (t = lc(null, r)))
              : (oo(t), (t.child = e.child), (t.flags |= 128), (t = null));
        else if ((ro(t), cf(c))) {
          if (((s = c.nextSibling && c.nextSibling.dataset), s)) var u = s.dgst;
          ((s = u),
            (r = Error(i(419))),
            (r.stack = ``),
            (r.digest = s),
            Hi({ value: r, source: null, stack: null }),
            (t = Tc(e, t, n)));
        } else if ((rc || Xi(e, t, n, !1), (s = (n & e.childLanes) !== 0), rc || s)) {
          if (((s = Bl), s !== null && ((r = tt(s, n)), r !== 0 && r !== l.retryLane)))
            throw ((l.retryLane = r), ti(e, r), _u(s, e, r), nc);
          (sf(c) || ku(), (t = Tc(e, t, n)));
        } else
          sf(c)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = l.treeContext),
              (Mi = uf(c.nextSibling)),
              (ji = t),
              (R = !0),
              (Ni = null),
              (Pi = !1),
              e !== null && Ai(t, e),
              (t = Cc(t, r.children)),
              (t.flags |= 4096));
        return t;
      }
      return a
        ? (oo(t),
          (c = r.fallback),
          (a = t.mode),
          (l = e.child),
          (u = l.sibling),
          (r = ci(l, { mode: `hidden`, children: r.children })),
          (r.subtreeFlags = l.subtreeFlags & 65011712),
          u === null ? ((c = di(c, a, n, null)), (c.flags |= 2)) : (c = ci(u, c)),
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
                ? (a = ya())
                : ((l = aa._currentValue), (a = a.parent === l ? a : { parent: l, pool: l })),
              (c = { baseLanes: c.baseLanes | n, cachePool: a })),
          (r.memoizedState = c),
          (r.childLanes = xc(e, s, n)),
          (t.memoizedState = yc),
          lc(e.child, r))
        : (ro(t),
          (n = e.child),
          (e = n.sibling),
          (n = ci(n, { mode: `visible`, children: r.children })),
          (n.return = t),
          (n.sibling = null),
          e !== null &&
            ((s = t.deletions), s === null ? ((t.deletions = [e]), (t.flags |= 16)) : s.push(e)),
          (t.child = n),
          (t.memoizedState = null),
          n);
    }
    function Cc(e, t) {
      return ((t = wc({ mode: `visible`, children: t }, e.mode)), (t.return = e), (e.child = t));
    }
    function wc(e, t) {
      return ((e = oi(22, e, null, t)), (e.lanes = 0), e);
    }
    function Tc(e, t, n) {
      return (
        Ia(t, e.child, null, n),
        (e = Cc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function Ec(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Ji(e.return, t, n));
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
      var o = co.current,
        s = !!(o & 2);
      if (
        (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
        le(co, o),
        ic(e, t, r, n),
        (r = R ? bi : 0),
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
            ((e = n.alternate), e !== null && lo(e) === null && (i = n), (n = n.sibling));
          ((n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Dc(t, !1, i, n, a, r));
          break;
        case `backwards`:
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (((e = i.alternate), e !== null && lo(e) === null)) {
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
      if (
        (e !== null && (t.dependencies = e.dependencies), (ql |= t.lanes), (n & t.childLanes) === 0)
      ) {
        if (e !== null) {
          if ((Xi(e, t, n, !1), (n & t.childLanes) === 0)) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = ci(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
          ((e = e.sibling), (n = n.sibling = ci(e, e.pendingProps)), (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function Ac(e, t) {
      return (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && Zi(e)));
    }
    function jc(e, t, n) {
      switch (t.tag) {
        case 3:
          (me(t, t.stateNode.containerInfo), Ki(t, aa, e.memoizedState.cache), Bi());
          break;
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          me(t, t.stateNode.containerInfo);
          break;
        case 10:
          Ki(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return ((t.flags |= 128), io(t), null);
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null)
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (ro(t), (e = kc(e, t, n)), e === null ? null : e.sibling)
                : Sc(e, t, n)
              : (ro(t), (t.flags |= 128), null);
          ro(t);
          break;
        case 19:
          var i = !!(e.flags & 128);
          if (
            ((r = (n & t.childLanes) !== 0), (r ||= (Xi(e, t, n, !1), (n & t.childLanes) !== 0)), i)
          ) {
            if (r) return Oc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            le(co, co.current),
            r)
          )
            break;
          return null;
        case 22:
          return ((t.lanes = 0), cc(e, t, n, t.pendingProps));
        case 24:
          Ki(t, aa, e.memoizedState.cache);
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
      } else ((rc = !1), R && t.flags & 1048576 && Di(t, bi, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (((e = Ea(t.elementType)), (t.type = e), typeof e == `function`))
              si(e)
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
              throw ((t = re(e) || e), Error(i(306, t, ``)));
            }
          }
          return t;
        case 0:
          return hc(e, t, t.type, t.pendingProps, n);
        case 1:
          return ((r = t.type), (a = qs(r, t.pendingProps)), _c(e, t, r, a, n));
        case 3:
          a: {
            if ((me(t, t.stateNode.containerInfo), e === null)) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            ((a = o.element), Ba(e, t), qa(t, r, null, n));
            var s = t.memoizedState;
            if (
              ((r = s.cache),
              Ki(t, aa, r),
              r !== o.cache && Yi(t, [aa], n, !0),
              Ka(),
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
                ((a = gi(Error(i(424)), t)), Hi(a), (t = vc(e, t, r, n)));
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
                Mi = uf(e.firstChild),
                  ji = t,
                  R = !0,
                  Ni = null,
                  Pi = !0,
                  n = La(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Bi(), r === a)) {
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
              ? (n = jf(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = n)
                : R ||
                  ((n = t.type),
                  (e = t.pendingProps),
                  (r = Hd(fe.current).createElement(n)),
                  (r[st] = t),
                  (r[ct] = e),
                  Id(r, n, e),
                  bt(r),
                  (t.stateNode = r))
              : (t.memoizedState = jf(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
            null
          );
        case 27:
          return (
            ge(t),
            e === null &&
              R &&
              ((r = t.stateNode = mf(t.type, t.pendingProps, fe.current)),
              (ji = t),
              (Pi = !0),
              (a = Mi),
              $d(t.type) ? ((df = a), (Mi = uf(r.firstChild))) : (Mi = a)),
            ic(e, t, t.pendingProps.children, n),
            mc(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              R &&
              ((a = r = Mi) &&
                ((r = rf(r, t.type, t.pendingProps, Pi)),
                r === null
                  ? (a = !1)
                  : ((t.stateNode = r), (ji = t), (Mi = uf(r.firstChild)), (Pi = !1), (a = !0))),
              a || Ii(t)),
            ge(t),
            (a = t.type),
            (o = t.pendingProps),
            (s = e === null ? null : e.memoizedProps),
            (r = o.children),
            Gd(a, o) ? (r = null) : s !== null && Gd(a, s) && (t.flags |= 32),
            t.memoizedState !== null && ((a = Co(e, t, Eo, null, null, n)), (np._currentValue = a)),
            mc(e, t),
            ic(e, t, r, n),
            t.child
          );
        case 6:
          return (
            e === null &&
              R &&
              ((e = n = Mi) &&
                ((n = af(n, t.pendingProps, Pi)),
                n === null ? (e = !1) : ((t.stateNode = n), (ji = t), (Mi = null), (e = !0))),
              e || Ii(t)),
            null
          );
        case 13:
          return Sc(e, t, n);
        case 4:
          return (
            me(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ia(t, null, r, n)) : ic(e, t, r, n),
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
          return ((r = t.pendingProps), Ki(t, t.type, r.value), ic(e, t, r.children, n), t.child);
        case 9:
          return (
            (a = t.type._context),
            (r = t.pendingProps.children),
            Qi(t),
            (a = $i(a)),
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
            Qi(t),
            (r = $i(aa)),
            e === null
              ? ((a = _a()),
                a === null &&
                  ((a = Bl),
                  (o = oa()),
                  (a.pooledCache = o),
                  o.refCount++,
                  o !== null && (a.pooledCacheLanes |= n),
                  (a = o)),
                (t.memoizedState = { parent: r, cache: a }),
                za(t),
                Ki(t, aa, a))
              : ((e.lanes & n) !== 0 && (Ba(e, t), qa(t, null, null, n), Ka()),
                (a = e.memoizedState),
                (o = t.memoizedState),
                a.parent === r
                  ? ((r = o.cache), Ki(t, aa, r), r !== a.cache && Yi(t, [aa], n, !0))
                  : ((a = { parent: r, cache: r }),
                    (t.memoizedState = a),
                    t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                    Ki(t, aa, r))),
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
          else if (Eu()) e.flags |= 8192;
          else throw ((Da = Ca), xa);
        }
      } else e.flags &= -16777217;
    }
    function Fc(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Jf(t))) {
        if (Eu()) e.flags |= 8192;
        else throw ((Da = Ca), xa);
      }
    }
    function Ic(e, t) {
      (t !== null && (e.flags |= 4),
        e.flags & 16384 && ((t = e.tag === 22 ? 536870912 : Ye()), (e.lanes |= t), (Zl |= t)));
    }
    function Lc(e, t) {
      if (!R)
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
      switch ((ki(t), t.tag)) {
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
            qi(aa),
            he(),
            n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
              (zi(t)
                ? Nc(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Vi())),
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
          if ((_e(t), (n = fe.current), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Rc(t), null);
            }
            ((e = ue.current), zi(t) ? Li(t, e) : ((e = mf(a, r, n)), (t.stateNode = e), Nc(t)));
          }
          return (Rc(t), null);
        case 5:
          if ((_e(t), (a = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== r && Nc(t);
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (Rc(t), null);
            }
            if (((o = ue.current), zi(t))) Li(t, o);
            else {
              var s = Hd(fe.current);
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
              ((o[st] = t), (o[ct] = r));
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
              a: switch ((Id(o, a, r), a)) {
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
          return (
            Rc(t), Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null
          );
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && Nc(t);
          else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (((e = fe.current), zi(t))) {
              if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = ji), a !== null))
                switch (a.tag) {
                  case 27:
                  case 5:
                    r = a.memoizedProps;
                }
              ((e[st] = t),
                (e = !!(
                  e.nodeValue === n ||
                  (r !== null && !0 === r.suppressHydrationWarning) ||
                  Pd(e.nodeValue, n)
                )),
                e || Ii(t, !0));
            } else ((e = Hd(e).createTextNode(r)), (e[st] = t), (t.stateNode = e));
          }
          return (Rc(t), null);
        case 31:
          if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
            if (((r = zi(t)), n !== null)) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
                  throw Error(i(557));
                e[st] = t;
              } else (Bi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Rc(t), (e = !1));
            } else
              ((n = Vi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
                (e = !0));
            if (!e) return t.flags & 256 ? (so(t), t) : (so(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return (Rc(t), null);
        case 13:
          if (
            ((r = t.memoizedState),
            e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((a = zi(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
                  throw Error(i(317));
                a[st] = t;
              } else (Bi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
              (Rc(t), (a = !1));
            } else
              ((a = Vi()),
                e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
                (a = !0));
            if (!a) return t.flags & 256 ? (so(t), t) : (so(t), null);
          }
          return (
            so(t),
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
          return (he(), e === null && wd(t.stateNode.containerInfo), Rc(t), null);
        case 10:
          return (qi(t.type), Rc(t), null);
        case 19:
          if ((ce(co), (r = t.memoizedState), r === null)) return (Rc(t), null);
          if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
            if (a) Lc(r, !1);
            else {
              if (Kl !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((o = lo(e)), o !== null)) {
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
                      (li(n, e), (n = n.sibling));
                    return (le(co, (co.current & 1) | 2), R && Ei(t, r.treeForkCount), t.child);
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                De() > ru &&
                ((t.flags |= 128), (a = !0), Lc(r, !1), (t.lanes = 4194304));
            }
          } else {
            if (!a) {
              if (((e = lo(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (a = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ic(t, e),
                  Lc(r, !0),
                  r.tail === null && r.tailMode === `hidden` && !o.alternate && !R)
                )
                  return (Rc(t), null);
              } else
                2 * De() - r.renderingStartTime > ru &&
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
              (r.renderingStartTime = De()),
              (e.sibling = null),
              (n = co.current),
              le(co, a ? (n & 1) | 2 : n & 1),
              R && Ei(t, r.treeForkCount),
              e);
        case 22:
        case 23:
          return (
            so(t),
            eo(),
            (r = t.memoizedState !== null),
            e === null
              ? r && (t.flags |= 8192)
              : (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r
              ? n & 536870912 &&
                !(t.flags & 128) &&
                (Rc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Rc(t),
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
            e !== null && ce(ga),
            null
          );
        case 24:
          return (
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            qi(aa),
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
      switch ((ki(t), t.tag)) {
        case 1:
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 3:
          return (
            qi(aa),
            he(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 26:
        case 27:
        case 5:
          return (_e(t), null);
        case 31:
          if (t.memoizedState !== null) {
            if ((so(t), t.alternate === null)) throw Error(i(340));
            Bi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 13:
          if ((so(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
            if (t.alternate === null) throw Error(i(340));
            Bi();
          }
          return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
        case 19:
          return (ce(co), null);
        case 4:
          return (he(), null);
        case 10:
          return (qi(t.type), null);
        case 22:
        case 23:
          return (
            so(t),
            eo(),
            e !== null && ce(ga),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return (qi(aa), null);
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Vc(e, t) {
      switch ((ki(t), t.tag)) {
        case 3:
          (qi(aa), he());
          break;
        case 26:
        case 27:
        case 5:
          _e(t);
          break;
        case 4:
          he();
          break;
        case 31:
          t.memoizedState !== null && so(t);
          break;
        case 13:
          so(t);
          break;
        case 19:
          ce(co);
          break;
        case 10:
          qi(t.type);
          break;
        case 22:
        case 23:
          (so(t), eo(), e !== null && ce(ga));
          break;
        case 24:
          qi(aa);
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
        K(t, t.return, e);
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
                  K(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        K(t, t.return, e);
      }
    }
    function Wc(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Ya(t, n);
        } catch (t) {
          K(e, e.return, t);
        }
      }
    }
    function Gc(e, t, n) {
      ((n.props = qs(e.type, e.memoizedProps)), (n.state = e.memoizedState));
      try {
        n.componentWillUnmount();
      } catch (n) {
        K(e, t, n);
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
        K(e, t, n);
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
            K(e, t, n);
          } finally {
            ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
          }
        else if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            K(e, t, n);
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
        K(e, e.return, t);
      }
    }
    function Yc(e, t, n) {
      try {
        var r = e.stateNode;
        (Ld(r, e.type, n, t), (r[ct] = t));
      } catch (t) {
        K(e, e.return, t);
      }
    }
    function Xc(e) {
      return (
        e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && $d(e.type)) || e.tag === 4
      );
    }
    function Zc(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Xc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if ((e.tag === 27 && $d(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
            continue a;
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
            ? (n.nodeType === 9
                ? n.body
                : n.nodeName === `HTML`
                  ? n.ownerDocument.body
                  : n
              ).insertBefore(e, t)
            : ((t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n),
              t.appendChild(e),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = $t)));
      else if (
        r !== 4 &&
        (r === 27 && $d(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
      )
        for (Qc(e, t, n), e = e.sibling; e !== null;) (Qc(e, t, n), (e = e.sibling));
    }
    function $c(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && (r === 27 && $d(e.type) && (n = e.stateNode), (e = e.child), e !== null))
        for ($c(e, t, n), e = e.sibling; e !== null;) ($c(e, t, n), (e = e.sibling));
    }
    function el(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        (Id(t, r, n), (t[st] = e), (t[ct] = n));
      } catch (t) {
        K(e, e.return, t);
      }
    }
    var tl = !1,
      nl = !1,
      rl = !1,
      il = typeof WeakSet == `function` ? WeakSet : Set,
      al = null;
    function ol(e, t) {
      if (((e = e.containerInfo), (Bd = up), (e = Tr(e)), Er(e))) {
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
      for (Vd = { focusedElem: e, selectionRange: n }, up = !1, al = t; al !== null;)
        if (((t = al), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (al = e));
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
                  ((e = void 0),
                    (n = t),
                    (a = o.memoizedProps),
                    (o = o.memoizedState),
                    (r = n.stateNode));
                  try {
                    var h = qs(n.type, a);
                    ((e = r.getSnapshotBeforeUpdate(h, o)),
                      (r.__reactInternalSnapshotBeforeUpdate = e));
                  } catch (e) {
                    K(n, n.return, e);
                  }
                }
                break;
              case 3:
                if (e & 1024) {
                  if (((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)) nf(e);
                  else if (n === 1)
                    switch (e.nodeName) {
                      case `HEAD`:
                      case `HTML`:
                      case `BODY`:
                        nf(e);
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
          (xl(e, n), r & 4 && Hc(5, n));
          break;
        case 1:
          if ((xl(e, n), r & 4)) {
            if (((e = n.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (e) {
                K(n, n.return, e);
              }
            else {
              var i = qs(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                K(n, n.return, e);
              }
            }
          }
          (r & 64 && Wc(n), r & 512 && Kc(n, n.return));
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
              Ya(e, t);
            } catch (e) {
              K(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && el(n);
        case 26:
        case 5:
          (xl(e, n), t === null && r & 4 && Jc(n), r & 512 && Kc(n, n.return));
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
              e !== null &&
                ((e = e.dehydrated), e !== null && ((n = Xu.bind(null, n)), lf(e, n)))));
          break;
        case 22:
          if (((r = n.memoizedState !== null || tl), !r)) {
            ((t = (t !== null && t.memoizedState !== null) || nl), (i = tl));
            var a = nl;
            ((tl = r),
              (nl = t) && !a ? Cl(e, n, !!(n.subtreeFlags & 8772)) : xl(e, n),
              (tl = i),
              (nl = a));
          }
          break;
        case 30:
          break;
        default:
          xl(e, n);
      }
    }
    function cl(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), cl(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && ht(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    var V = null,
      ll = !1;
    function ul(e, t, n) {
      for (n = n.child; n !== null;) (dl(e, t, n), (n = n.sibling));
    }
    function dl(e, t, n) {
      if (Ie && typeof Ie.onCommitFiberUnmount == `function`)
        try {
          Ie.onCommitFiberUnmount(Fe, n);
        } catch {}
      switch (n.tag) {
        case 26:
          (nl || qc(n, t),
            ul(e, t, n),
            n.memoizedState
              ? n.memoizedState.count--
              : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
          break;
        case 27:
          nl || qc(n, t);
          var r = V,
            i = ll;
          ($d(n.type) && ((V = n.stateNode), (ll = !1)),
            ul(e, t, n),
            hf(n.stateNode),
            (V = r),
            (ll = i));
          break;
        case 5:
          nl || qc(n, t);
        case 6:
          if (((r = V), (i = ll), (V = null), ul(e, t, n), (V = r), (ll = i), V !== null)) {
            if (ll)
              try {
                (V.nodeType === 9
                  ? V.body
                  : V.nodeName === `HTML`
                    ? V.ownerDocument.body
                    : V
                ).removeChild(n.stateNode);
              } catch (e) {
                K(n, t, e);
              }
            else
              try {
                V.removeChild(n.stateNode);
              } catch (e) {
                K(n, t, e);
              }
          }
          break;
        case 18:
          V !== null &&
            (ll
              ? ((e = V),
                ef(
                  e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
                  n.stateNode,
                ),
                Ip(e))
              : ef(V, n.stateNode));
          break;
        case 4:
          ((r = V),
            (i = ll),
            (V = n.stateNode.containerInfo),
            (ll = !0),
            ul(e, t, n),
            (V = r),
            (ll = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          (Uc(2, n, t), nl || Uc(4, n, t), ul(e, t, n));
          break;
        case 1:
          (nl ||
            (qc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function` && Gc(n, t, r)),
            ul(e, t, n));
          break;
        case 21:
          ul(e, t, n);
          break;
        case 22:
          ((nl = (r = nl) || n.memoizedState !== null), ul(e, t, n), (nl = r));
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
          K(t, t.return, e);
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
          K(t, t.return, e);
        }
    }
    function ml(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return (t === null && (t = e.stateNode = new il()), t);
        case 22:
          return (
            (e = e.stateNode), (t = e._retryCache), t === null && (t = e._retryCache = new il()), t
          );
        default:
          throw Error(i(435, e.tag));
      }
    }
    function hl(e, t) {
      var n = ml(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = Zu.bind(null, e, t);
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
                if ($d(c.type)) {
                  ((V = c.stateNode), (ll = !1));
                  break a;
                }
                break;
              case 5:
                ((V = c.stateNode), (ll = !1));
                break a;
              case 3:
              case 4:
                ((V = c.stateNode.containerInfo), (ll = !0));
                break a;
            }
            c = c.return;
          }
          if (V === null) throw Error(i(160));
          (dl(o, s, a),
            (V = null),
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
          (gl(t, e), yl(e), r & 4 && (Uc(3, e, e.return), Hc(3, e), Uc(5, e, e.return)));
          break;
        case 1:
          (gl(t, e),
            yl(e),
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
          var a = _l;
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), r & 4)) {
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
                            o[mt] ||
                            o[st] ||
                            o.namespaceURI === `http://www.w3.org/2000/svg` ||
                            o.hasAttribute(`itemprop`)) &&
                            ((o = a.createElement(r)),
                            a.head.insertBefore(o, a.querySelector(`head > title`))),
                          Id(o, r, n),
                          (o[st] = e),
                          bt(o),
                          (r = o));
                        break a;
                      case `link`:
                        var s = Gf(`link`, `href`, a).get(r + (n.href || ``));
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
                        ((o = a.createElement(r)), Id(o, r, n), a.head.appendChild(o));
                        break;
                      case `meta`:
                        if ((s = Gf(`meta`, `content`, a).get(r + (n.content || ``)))) {
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
                        ((o = a.createElement(r)), Id(o, r, n), a.head.appendChild(o));
                        break;
                      default:
                        throw Error(i(468, r));
                    }
                    ((o[st] = e), bt(o), (r = o));
                  }
                  e.stateNode = r;
                } else Kf(a, e.type, e.stateNode);
              } else e.stateNode = Vf(a, r, e.memoizedProps);
            } else
              o === r
                ? r === null && e.stateNode !== null && Yc(e, e.memoizedProps, n.memoizedProps)
                : (o === null
                    ? n.stateNode !== null && ((n = n.stateNode), n.parentNode.removeChild(n))
                    : o.count--,
                  r === null ? Kf(a, e.type, e.stateNode) : Vf(a, r, e.memoizedProps));
          }
          break;
        case 27:
          (gl(t, e),
            yl(e),
            r & 512 && (nl || n === null || qc(n, n.return)),
            n !== null && r & 4 && Yc(e, e.memoizedProps, n.memoizedProps));
          break;
        case 5:
          if ((gl(t, e), yl(e), r & 512 && (nl || n === null || qc(n, n.return)), e.flags & 32)) {
            a = e.stateNode;
            try {
              Gt(a, ``);
            } catch (t) {
              K(e, e.return, t);
            }
          }
          (r & 4 &&
            e.stateNode != null &&
            ((a = e.memoizedProps), Yc(e, a, n === null ? a : n.memoizedProps)),
            r & 1024 && (rl = !0));
          break;
        case 6:
          if ((gl(t, e), yl(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((r = e.memoizedProps), (n = e.stateNode));
            try {
              n.nodeValue = r;
            } catch (t) {
              K(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            ((Wf = null),
            (a = _l),
            (_l = vf(t.containerInfo)),
            gl(t, e),
            (_l = a),
            yl(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              Ip(t.containerInfo);
            } catch (t) {
              K(e, e.return, t);
            }
          rl && ((rl = !1), bl(e));
          break;
        case 4:
          ((r = _l), (_l = vf(e.stateNode.containerInfo)), gl(t, e), yl(e), (_l = r));
          break;
        case 12:
          (gl(t, e), yl(e));
          break;
        case 31:
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 13:
          (gl(t, e),
            yl(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) != (n !== null && n.memoizedState !== null) &&
              (tu = De()),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
          break;
        case 22:
          a = e.memoizedState !== null;
          var l = n !== null && n.memoizedState !== null,
            u = tl,
            d = nl;
          if (((tl = u || a), (nl = d || l), gl(t, e), (nl = d), (tl = u), yl(e), r & 8192))
            a: for (
              t = e.stateNode,
                t._visibility = a ? t._visibility & -2 : t._visibility | 1,
                a && (n === null || l || tl || nl || Sl(e)),
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
                    K(l, l.return, e);
                  }
                }
              } else if (t.tag === 6) {
                if (n === null) {
                  l = t;
                  try {
                    l.stateNode.nodeValue = a ? `` : l.memoizedProps;
                  } catch (e) {
                    K(l, l.return, e);
                  }
                }
              } else if (t.tag === 18) {
                if (n === null) {
                  l = t;
                  try {
                    var m = l.stateNode;
                    a ? tf(m, !0) : tf(l.stateNode, !1);
                  } catch (e) {
                    K(l, l.return, e);
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
          (gl(t, e),
            yl(e),
            r & 4 && ((r = e.updateQueue), r !== null && ((e.updateQueue = null), hl(e, r))));
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
              (n.flags & 32 && (Gt(o, ``), (n.flags &= -33)), $c(e, Zc(e), o));
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
          K(e, e.return, t);
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
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null;) (sl(e, t.alternate, t), (t = t.sibling));
    }
    function Sl(e) {
      for (e = e.child; e !== null;) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            (Uc(4, t, t.return), Sl(t));
            break;
          case 1:
            qc(t, t.return);
            var n = t.stateNode;
            (typeof n.componentWillUnmount == `function` && Gc(t, t.return, n), Sl(t));
            break;
          case 27:
            hf(t.stateNode);
          case 26:
          case 5:
            (qc(t, t.return), Sl(t));
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
            (Cl(i, a, n), Hc(4, a));
            break;
          case 1:
            if ((Cl(i, a, n), (r = a), (i = r.stateNode), typeof i.componentDidMount == `function`))
              try {
                i.componentDidMount();
              } catch (e) {
                K(r, r.return, e);
              }
            if (((r = a), (i = r.updateQueue), i !== null)) {
              var s = r.stateNode;
              try {
                var c = i.shared.hiddenCallbacks;
                if (c !== null)
                  for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) Ja(c[i], s);
              } catch (e) {
                K(r, r.return, e);
              }
            }
            (n && o & 64 && Wc(a), Kc(a, a.return));
            break;
          case 27:
            el(a);
          case 26:
          case 5:
            (Cl(i, a, n), n && r === null && o & 4 && Jc(a), Kc(a, a.return));
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
            (a.memoizedState === null && Cl(i, a, n), Kc(a, a.return));
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
        e !== n && (e != null && e.refCount++, n != null && sa(n)));
    }
    function Tl(e, t) {
      ((e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && sa(e)));
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
          (El(e, t, n, r), i & 2048 && Hc(9, t));
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
              t !== e && (t.refCount++, e != null && sa(e))));
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
              K(t, t.return, e);
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
            (Ol(a, o, s, c, i), Hc(8, o));
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
            e.flags & Al &&
              e.memoizedState !== null &&
              Yf(n, _l, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          jl(e, t, n);
          break;
        case 3:
        case 4:
          var r = _l;
          ((_l = vf(e.stateNode.containerInfo)), jl(e, t, n), (_l = r));
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
            ((al = r), Ll(r, e));
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
          (Pl(e), e.flags & 2048 && Uc(9, e, e.return));
          break;
        case 3:
          Pl(e);
          break;
        case 12:
          Pl(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
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
            ((al = r), Ll(r, e));
          }
        Nl(e);
      }
      for (e = e.child; e !== null;) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            (Uc(8, t, t.return), Il(t));
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
            sa(n.memoizedState.cache);
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
    var Rl = {
        getCacheForType: function (e) {
          var t = $i(aa),
            n = t.data.get(e);
          return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
        },
        cacheSignal: function () {
          return $i(aa).controller.signal;
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
      return H & 2 && W !== 0 ? W & -W : O.T === null ? it() : pd();
    }
    function gu() {
      if (Xl === 0) {
        if (!(W & 536870912) || R) {
          var e = Ue;
          ((Ue <<= 1), !(Ue & 3932160) && (Ue = 262144), (Xl = e));
        } else Xl = 536870912;
      }
      return ((e = to.current), e !== null && (e.flags |= 32), Xl);
    }
    function _u(e, t, n) {
      (((e === Bl && (G === 2 || G === 9)) || e.cancelPendingCommit !== null) &&
        (wu(e, 0), xu(e, W, Xl, !1)),
        Ze(e, n),
        (!(H & 2) || e !== Bl) &&
          (e === Bl && (!(H & 2) && (Jl |= n), Kl === 4 && xu(e, W, Xl, !1)), ad(e)));
    }
    function vu(e, t, n) {
      if (H & 6) throw Error(i(327));
      var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || qe(e, t),
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
          else
            ((s = e.pendingLanes & -536870913),
              (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
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
          if ((t & 62914560) === t && ((a = tu + 300 - De()), 10 < a)) {
            if ((xu(r, t, Xl, !Hl), Ke(r, 0, !0) !== 0)) break a;
            ((lu = t),
              (r.timeoutHandle = Jd(
                yu.bind(null, r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, `Throttled`, -0, 0),
                a,
              )));
            break a;
          }
          yu(r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, null, -0, 0);
        }
        break;
      } while (1);
      ad(e);
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
          unsuspend: $t,
        }),
          Ml(t, a, d));
        var m = (a & 62914560) === a ? tu - De() : (a & 4194048) === a ? nu - De() : 0;
        if (((m = Zf(d, m)), m !== null)) {
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
              if (!br(a(), i)) return !1;
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
        var a = 31 - Re(i),
          o = 1 << a;
        ((r[a] = -1), (i &= ~o));
      }
      n !== 0 && $e(e, n, t);
    }
    function Su() {
      return H & 6 ? !0 : (od(0, !1), !1);
    }
    function Cu() {
      if (U !== null) {
        if (G === 0) var e = U.return;
        else ((e = U), (Gi = Wi = null), ko(e), (Aa = null), (ja = 0), (e = U));
        for (; e !== null;) (Vc(e.alternate, e), (e = e.return));
        U = null;
      }
    }
    function wu(e, t) {
      var n = e.timeoutHandle;
      (n !== -1 && ((e.timeoutHandle = -1), Yd(n)),
        (n = e.cancelPendingCommit),
        n !== null && ((e.cancelPendingCommit = null), n()),
        (lu = 0),
        Cu(),
        (Bl = e),
        (U = n = ci(e.current, null)),
        (W = t),
        (G = 0),
        (Vl = null),
        (Hl = !1),
        (Ul = qe(e, t)),
        (Wl = !1),
        (Zl = Xl = Yl = Jl = ql = Kl = 0),
        ($l = Ql = null),
        (eu = !1),
        t & 8 && (t |= t & 32));
      var r = e.entangledLanes;
      if (r !== 0)
        for (e = e.entanglements, r &= t; 0 < r;) {
          var i = 31 - Re(r),
            a = 1 << i;
          ((t |= e[i]), (r &= ~a));
        }
      return ((Gl = t), Qr(), n);
    }
    function Tu(e, t) {
      ((z = null),
        (O.H = zs),
        t === ba || t === Sa
          ? ((t = Oa()), (G = 3))
          : t === xa
            ? ((t = Oa()), (G = 4))
            : (G = t === nc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1),
        (Vl = t),
        U === null && ((Kl = 1), Zs(e, gi(t, e.current))));
    }
    function Eu() {
      var e = to.current;
      return e === null
        ? !0
        : (W & 4194048) === W
          ? no === null
          : (W & 62914560) === W || W & 536870912
            ? e === no
            : !1;
    }
    function Du() {
      var e = O.H;
      return ((O.H = zs), e === null ? zs : e);
    }
    function Ou() {
      var e = O.A;
      return ((O.A = Rl), e);
    }
    function ku() {
      ((Kl = 4),
        Hl || ((W & 4194048) !== W && to.current !== null) || (Ul = !0),
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
                to.current === null && (t = !0);
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
        (Gi = Wi = null),
        (H = r),
        (O.H = i),
        (O.A = a),
        U === null && ((Bl = null), (W = 0), Qr()),
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
      Bl !== e || W !== t ? ((iu = null), (ru = De() + 500), wu(e, t)) : (Ul = qe(e, t));
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
                if (wa(o)) {
                  ((G = 0), (Vl = null), Fu(t));
                  break;
                }
                ((t = function () {
                  ((G !== 2 && G !== 9) || Bl !== e || (G = 7), ad(e));
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
                wa(o) ? ((G = 0), (Vl = null), Fu(t)) : ((G = 0), (Vl = null), Iu(e, t, o, 7));
                break;
              case 5:
                var s = null;
                switch (U.tag) {
                  case 26:
                    s = U.memoizedState;
                  case 5:
                  case 27:
                    var c = U;
                    if (s ? Jf(s) : c.stateNode.complete) {
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
        (Gi = Wi = null),
        (O.H = r),
        (O.A = a),
        (H = n),
        U === null ? ((Bl = null), (W = 0), Qr(), Kl) : 0
      );
    }
    function Nu() {
      for (; U !== null && !Ee();) Pu(U);
    }
    function Pu(e) {
      var t = Mc(e.alternate, e, Gl);
      ((e.memoizedProps = e.pendingProps), t === null ? Lu(e) : (U = t));
    }
    function Fu(e) {
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
          (Vc(n, t), (t = U = li(t, Gl)), (t = Mc(n, t, Gl)));
      }
      ((e.memoizedProps = e.pendingProps), t === null ? Lu(e) : (U = t));
    }
    function Iu(e, t, n, r) {
      ((Gi = Wi = null), ko(t), (Aa = null), (ja = 0));
      var i = t.return;
      try {
        if (tc(e, i, t, n, W)) {
          ((Kl = 1), Zs(e, gi(n, e.current)), (U = null));
          return;
        }
      } catch (t) {
        if (i !== null) throw ((U = i), t);
        ((Kl = 1), Zs(e, gi(n, e.current)), (U = null));
        return;
      }
      t.flags & 32768
        ? (R || r === 1
            ? (e = !0)
            : Ul || W & 536870912
              ? (e = !1)
              : ((Hl = e = !0),
                (r === 2 || r === 9 || r === 3 || r === 6) &&
                  ((r = to.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
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
        var n = zc(t.alternate, t, Gl);
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
          (o |= Zr),
          Qe(e, n, o, s, c, l),
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
              Qu(Ae, function () {
                return (Gu(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = O.T), (O.T = null), (a = k.p), (k.p = 2), (s = H), (H |= 4));
          try {
            ol(e, t, n);
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
            var a = Vd,
              o = Tr(e.containerInfo),
              s = a.focusedElem,
              c = a.selectionRange;
            if (o !== s && s && s.ownerDocument && wr(s.ownerDocument.documentElement, s)) {
              if (c !== null && Er(s)) {
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
                    var _ = Cr(s, h),
                      v = Cr(s, g);
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
            ((up = !!Bd), (Vd = Bd = null));
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
            sl(e, t.alternate, t);
          } finally {
            ((H = i), (k.p = r), (O.T = n));
          }
        }
        ou = 3;
      }
    }
    function Hu() {
      if (ou === 4 || ou === 3) {
        ((ou = 0), N());
        var e = su,
          t = cu,
          n = lu,
          r = fu;
        t.subtreeFlags & 10256 || t.flags & 10256
          ? (ou = 5)
          : ((ou = 0), (cu = su = null), Uu(e, e.pendingLanes));
        var i = e.pendingLanes;
        if (
          (i === 0 && (au = null),
          rt(n),
          (t = t.stateNode),
          Ie && typeof Ie.onCommitFiberRoot == `function`)
        )
          try {
            Ie.onCommitFiberRoot(Fe, t, void 0, (t.current.flags & 128) == 128);
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
          ad(e),
          (i = e.pendingLanes),
          n & 261930 && i & 42 ? (e === mu ? pu++ : ((pu = 0), (mu = e))) : (pu = 0),
          od(0, !1));
      }
    }
    function Uu(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), sa(t)));
    }
    function Wu() {
      return (Bu(), Vu(), Hu(), Gu());
    }
    function Gu() {
      if (ou !== 5) return !1;
      var e = su,
        t = uu;
      uu = 0;
      var n = rt(lu),
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
          od(0, !1),
          Ie && typeof Ie.onPostCommitFiberRoot == `function`)
        )
          try {
            Ie.onPostCommitFiberRoot(Fe, o);
          } catch {}
        return !0;
      } finally {
        ((k.p = a), (O.T = r), Uu(e, t));
      }
    }
    function Ku(e, t, n) {
      ((t = gi(n, t)),
        (t = B(e.stateNode, t, 2)),
        (e = Ha(e, t, 2)),
        e !== null && (Ze(e, 2), ad(e)));
    }
    function K(e, t, n) {
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
              ((e = gi(n, e)),
                (n = $s(2)),
                (r = Ha(t, n, 2)),
                r !== null && (ec(n, r, t, e), Ze(r, 2), ad(r)));
              break;
            }
          }
          t = t.return;
        }
    }
    function qu(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new zl();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || ((Wl = !0), i.add(n), (e = Ju.bind(null, e, t, n)), t.then(e, e));
    }
    function Ju(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (e.pingedLanes |= e.suspendedLanes & n),
        (e.warmLanes &= ~n),
        Bl === e &&
          (W & n) === n &&
          (Kl === 4 || (Kl === 3 && (W & 62914560) === W && 300 > De() - tu)
            ? !(H & 2) && wu(e, 0)
            : (Yl |= n),
          Zl === W && (Zl = 0)),
        ad(e));
    }
    function Yu(e, t) {
      (t === 0 && (t = Ye()), (e = ti(e, t)), e !== null && (Ze(e, t), ad(e)));
    }
    function Xu(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Yu(e, n));
    }
    function Zu(e, t) {
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
      (r !== null && r.delete(t), Yu(e, n));
    }
    function Qu(e, t) {
      return M(e, t);
    }
    var $u = null,
      ed = null,
      td = !1,
      nd = !1,
      rd = !1,
      id = 0;
    function ad(e) {
      (e !== ed && e.next === null && (ed === null ? ($u = ed = e) : (ed = ed.next = e)),
        (nd = !0),
        td || ((td = !0), fd()));
    }
    function od(e, t) {
      if (!rd && nd) {
        rd = !0;
        do
          for (var n = !1, r = $u; r !== null;) {
            if (!t) {
              if (e !== 0) {
                var i = r.pendingLanes;
                if (i === 0) var a = 0;
                else {
                  var o = r.suspendedLanes,
                    s = r.pingedLanes;
                  ((a = (1 << (31 - Re(42 | e) + 1)) - 1),
                    (a &= i & ~(o & ~s)),
                    (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                }
                a !== 0 && ((n = !0), dd(r, a));
              } else
                ((a = W),
                  (a = Ke(
                    r,
                    r === Bl ? a : 0,
                    r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                  )),
                  !(a & 3) || qe(r, a) || ((n = !0), dd(r, a)));
            }
            r = r.next;
          }
        while (n);
        rd = !1;
      }
    }
    function sd() {
      cd();
    }
    function cd() {
      nd = td = !1;
      var e = 0;
      id !== 0 && qd() && (e = id);
      for (var t = De(), n = null, r = $u; r !== null;) {
        var i = r.next,
          a = ld(r, t);
        (a === 0
          ? ((r.next = null), n === null ? ($u = i) : (n.next = i), i === null && (ed = n))
          : ((n = r), (e !== 0 || a & 3) && (nd = !0)),
          (r = i));
      }
      ((ou !== 0 && ou !== 5) || od(e, !1), id !== 0 && (id = 0));
    }
    function ld(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes & -62914561;
        0 < a;
      ) {
        var o = 31 - Re(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Je(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
      if (
        ((t = Bl),
        (n = W),
        (n = Ke(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        (r = e.callbackNode),
        n === 0 || (e === t && (G === 2 || G === 9)) || e.cancelPendingCommit !== null)
      )
        return (
          r !== null && r !== null && Te(r), (e.callbackNode = null), (e.callbackPriority = 0)
        );
      if (!(n & 3) || qe(e, n)) {
        if (((t = n & -n), t === e.callbackPriority)) return t;
        switch ((r !== null && Te(r), rt(n))) {
          case 2:
          case 8:
            n = ke;
            break;
          case 32:
            n = Ae;
            break;
          case 268435456:
            n = Me;
            break;
          default:
            n = Ae;
        }
        return (
          (r = ud.bind(null, e)), (n = M(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t
        );
      }
      return (
        r !== null && r !== null && Te(r), (e.callbackPriority = 2), (e.callbackNode = null), 2
      );
    }
    function ud(e, t) {
      if (ou !== 0 && ou !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
      var n = e.callbackNode;
      if (Wu() && e.callbackNode !== n) return null;
      var r = W;
      return (
        (r = Ke(e, e === Bl ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
        r === 0
          ? null
          : (vu(e, r, t),
            ld(e, De()),
            e.callbackNode != null && e.callbackNode === n ? ud.bind(null, e) : null)
      );
    }
    function dd(e, t) {
      if (Wu()) return null;
      vu(e, t, !0);
    }
    function fd() {
      Zd(function () {
        H & 6 ? M(Oe, sd) : cd();
      });
    }
    function pd() {
      if (id === 0) {
        var e = ua;
        (e === 0 && ((e = He), (He <<= 1), !(He & 261888) && (He = 256)), (id = e));
      }
      return id;
    }
    function md(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean`
        ? null
        : typeof e == `function`
          ? e
          : Qt(`` + e);
    }
    function hd(e, t) {
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
    function gd(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = md((i[ct] || null).action),
          o = r.submitter;
        o &&
          ((t = (t = o[ct] || null) ? md(t.formAction) : o.getAttribute(`formAction`)),
          t !== null && ((a = t), (o = null)));
        var s = new yn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (r.defaultPrevented) {
                  if (id !== 0) {
                    var e = o ? hd(i, o) : new FormData(i);
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, null, e);
                  }
                } else
                  typeof a == `function` &&
                    (s.preventDefault(),
                    (e = o ? hd(i, o) : new FormData(i)),
                    Ts(n, { pending: !0, data: e, method: i.method, action: a }, a, e));
              },
              currentTarget: i,
            },
          ],
        });
      }
    }
    for (var _d = 0; _d < Kr.length; _d++) {
      var vd = Kr[_d];
      qr(vd.toLowerCase(), `on` + (vd[0].toUpperCase() + vd.slice(1)));
    }
    (qr(Rr, `onAnimationEnd`),
      qr(zr, `onAnimationIteration`),
      qr(Br, `onAnimationStart`),
      qr(`dblclick`, `onDoubleClick`),
      qr(`focusin`, `onFocus`),
      qr(`focusout`, `onBlur`),
      qr(Vr, `onTransitionRun`),
      qr(Hr, `onTransitionStart`),
      qr(Ur, `onTransitionCancel`),
      qr(Wr, `onTransitionEnd`),
      F(`onMouseEnter`, [`mouseout`, `mouseover`]),
      F(`onMouseLeave`, [`mouseout`, `mouseover`]),
      F(`onPointerEnter`, [`pointerout`, `pointerover`]),
      F(`onPointerLeave`, [`pointerout`, `pointerover`]),
      Ct(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(` `),
      ),
      Ct(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      Ct(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      Ct(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)),
      Ct(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      Ct(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(` `),
      ));
    var yd =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      bd = new Set(
        `beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd),
      );
    function xd(e, t) {
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
                Jr(e);
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
                Jr(e);
              }
              ((i.currentTarget = null), (a = c));
            }
        }
      }
    }
    function q(e, t) {
      var n = t[ut];
      n === void 0 && (n = t[ut] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Td(t, e, 2, !1), n.add(r));
    }
    function Sd(e, t, n) {
      var r = 0;
      (t && (r |= 4), Td(n, e, r, t));
    }
    var Cd = `_reactListening` + Math.random().toString(36).slice(2);
    function wd(e) {
      if (!e[Cd]) {
        ((e[Cd] = !0),
          xt.forEach(function (t) {
            t !== `selectionchange` && (bd.has(t) || Sd(t, !1, e), Sd(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Cd] || ((t[Cd] = !0), Sd(`selectionchange`, !1, t));
      }
    }
    function Td(e, t, n, r) {
      switch (_p(t)) {
        case 2:
          var i = dp;
          break;
        case 8:
          i = fp;
          break;
        default:
          i = pp;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !cn || (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) || (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Ed(e, t, n, r, i) {
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
              if (((s = gt(c)), s === null)) return;
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
          i = tn(n),
          s = [];
        a: {
          var c = Gr.get(e);
          if (c !== void 0) {
            var l = yn,
              u = e;
            switch (e) {
              case `keypress`:
                if (mn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = Ln;
                break;
              case `focusin`:
                ((u = `focus`), (l = On));
                break;
              case `focusout`:
                ((u = `blur`), (l = On));
                break;
              case `beforeblur`:
              case `afterblur`:
                l = On;
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
                l = En;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Dn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = zn;
                break;
              case Rr:
              case zr:
              case Br:
                l = kn;
                break;
              case Wr:
                l = Bn;
                break;
              case `scroll`:
              case `scrollend`:
                l = xn;
                break;
              case `wheel`:
                l = Vn;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = An;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = Rn;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = Hn;
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
                  ((g = L(m, p)), g != null && d.push(Dd(m, g, h))),
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
              c && n !== en && (u = n.relatedTarget || n.fromElement) && (gt(u) || u[lt]))
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
                  (u = u ? gt(u) : null),
                  u !== null &&
                    ((f = o(u)), (d = u.tag), u !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                    (u = null))
                : ((l = null), (u = r)),
              l !== u)
            ) {
              if (
                ((d = En),
                (g = `onMouseLeave`),
                (p = `onMouseEnter`),
                (m = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((d = Rn), (g = `onPointerLeave`), (p = `onPointerEnter`), (m = `pointer`)),
                (f = l == null ? c : vt(l)),
                (h = u == null ? c : vt(u)),
                (c = new d(g, m + `leave`, l, n, i)),
                (c.target = f),
                (c.relatedTarget = h),
                (g = null),
                gt(i) === r &&
                  ((d = new d(p, m + `enter`, u, n, i)),
                  (d.target = h),
                  (d.relatedTarget = f),
                  (g = d)),
                (f = g),
                l && u)
              )
                b: {
                  for (d = kd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
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
              (l !== null && Ad(s, c, l, d, !1), u !== null && f !== null && Ad(s, f, u, d, !0));
            }
          }
          a: {
            if (
              ((c = r ? vt(r) : window),
              (l = c.nodeName && c.nodeName.toLowerCase()),
              l === `select` || (l === `input` && c.type === `file`))
            )
              var v = cr;
            else if (nr(c)) {
              if (lr) v = vr;
              else {
                v = gr;
                var y = hr;
              }
            } else
              ((l = c.nodeName),
                !l || l.toLowerCase() !== `input` || (c.type !== `checkbox` && c.type !== `radio`)
                  ? r && Yt(r.elementType) && (v = cr)
                  : (v = _r));
            if ((v &&= v(e, r))) {
              rr(s, v, n, i);
              break a;
            }
            (y && y(e, c, r),
              e === `focusout` &&
                r &&
                c.type === `number` &&
                r.memoizedProps.value != null &&
                Vt(c, `number`, c.value));
          }
          switch (((y = r ? vt(r) : window), e)) {
            case `focusin`:
              (nr(y) || y.contentEditable === `true`) && ((Or = y), (kr = r), (Ar = null));
              break;
            case `focusout`:
              Ar = kr = Or = null;
              break;
            case `mousedown`:
              jr = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((jr = !1), Mr(s, n, i));
              break;
            case `selectionchange`:
              if (Dr) break;
            case `keydown`:
            case `keyup`:
              Mr(s, n, i);
          }
          var b;
          if (Wn)
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
            Qn
              ? Xn(e, n) && (x = `onCompositionEnd`)
              : e === `keydown` && n.keyCode === 229 && (x = `onCompositionStart`);
          (x &&
            (qn &&
              n.locale !== `ko` &&
              (Qn || x !== `onCompositionStart`
                ? x === `onCompositionEnd` && Qn && (b = pn())
                : ((un = i), (dn = `value` in un ? un.value : un.textContent), (Qn = !0))),
            (y = Od(r, x)),
            0 < y.length &&
              ((x = new jn(x, e, null, n, i)),
              s.push({ event: x, listeners: y }),
              b ? (x.data = b) : ((b = Zn(n)), b !== null && (x.data = b)))),
            (b = Kn ? $n(e, n) : er(e, n)) &&
              ((x = Od(r, `onBeforeInput`)),
              0 < x.length &&
                ((y = new jn(`onBeforeInput`, `beforeinput`, null, n, i)),
                s.push({ event: y, listeners: x }),
                (y.data = b))),
            gd(s, e, r, n, i));
        }
        xd(s, t);
      });
    }
    function Dd(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Od(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (
          ((i = i.tag),
          (i !== 5 && i !== 26 && i !== 27) ||
            a === null ||
            ((i = L(e, n)),
            i != null && r.unshift(Dd(e, i, a)),
            (i = L(e, t)),
            i != null && r.push(Dd(e, i, a))),
          e.tag === 3)
        )
          return r;
        e = e.return;
      }
      return [];
    }
    function kd(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Ad(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (((s = s.tag), c !== null && c === r)) break;
        ((s !== 5 && s !== 26 && s !== 27) ||
          l === null ||
          ((c = l),
          i
            ? ((l = L(n, a)), l != null && o.unshift(Dd(n, l, c)))
            : i || ((l = L(n, a)), l != null && o.push(Dd(n, l, c)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var jd = /\r\n?/g,
      Md = /\u0000|\uFFFD/g;
    function Nd(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          jd,
          `
`,
        )
        .replace(Md, ``);
    }
    function Pd(e, t) {
      return ((t = Nd(t)), Nd(e) === t);
    }
    function J(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          typeof r == `string`
            ? t === `body` || (t === `textarea` && r === ``) || Gt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && t !== `body` && Gt(e, `` + r);
          break;
        case `className`:
          kt(e, `class`, r);
          break;
        case `tabIndex`:
          kt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          kt(e, n, r);
          break;
        case `style`:
          Jt(e, r, o);
          break;
        case `data`:
          if (t !== `object`) {
            kt(e, `data`, r);
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
          ((r = Qt(`` + r)), e.setAttribute(n, r));
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
                ? (t !== `input` && J(e, t, `name`, a.name, a, null),
                  J(e, t, `formEncType`, a.formEncType, a, null),
                  J(e, t, `formMethod`, a.formMethod, a, null),
                  J(e, t, `formTarget`, a.formTarget, a, null))
                : (J(e, t, `encType`, a.encType, a, null),
                  J(e, t, `method`, a.method, a, null),
                  J(e, t, `target`, a.target, a, null))),
            r == null || typeof r == `symbol` || typeof r == `boolean`)
          ) {
            e.removeAttribute(n);
            break;
          }
          ((r = Qt(`` + r)), e.setAttribute(n, r));
          break;
        case `onClick`:
          r != null && (e.onclick = $t);
          break;
        case `onScroll`:
          r != null && q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && q(`scrollend`, e);
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
          ((n = Qt(`` + r)), e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n));
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
          (q(`beforetoggle`, e), q(`toggle`, e), Ot(e, `popover`, r));
          break;
        case `xlinkActuate`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          At(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          At(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          At(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          At(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Ot(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          break;
        default:
          (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) &&
            ((n = Xt.get(n) || n), Ot(e, n, r));
      }
    }
    function Fd(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          Jt(e, r, o);
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
            ? Gt(e, r)
            : (typeof r == `number` || typeof r == `bigint`) && Gt(e, `` + r);
          break;
        case `onScroll`:
          r != null && q(`scroll`, e);
          break;
        case `onScrollEnd`:
          r != null && q(`scrollend`, e);
          break;
        case `onClick`:
          r != null && (e.onclick = $t);
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
          if (!St.hasOwnProperty(n))
            a: {
              if (
                n[0] === `o` &&
                n[1] === `n` &&
                ((a = n.endsWith(`Capture`)),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                (o = e[ct] || null),
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
              n in e ? (e[n] = r) : !0 === r ? e.setAttribute(n, ``) : Ot(e, n, r);
            }
      }
    }
    function Id(e, t, n) {
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
          (q(`error`, e), q(`load`, e));
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
                    J(e, t, o, s, n, null);
                }
            }
          (a && J(e, t, `srcSet`, n.srcSet, n, null), r && J(e, t, `src`, n.src, n, null));
          return;
        case `input`:
          q(`invalid`, e);
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
                    J(e, t, r, d, n, null);
                }
            }
          Bt(e, o, c, l, u, s, a, !1);
          return;
        case `select`:
          for (a in (q(`invalid`, e), (r = s = o = null), n))
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
                  J(e, t, a, c, n, null);
              }
          ((t = o),
            (n = s),
            (e.multiple = !!r),
            t == null ? n != null && Ht(e, !!r, n, !0) : Ht(e, !!r, t, !1));
          return;
        case `textarea`:
          for (s in (q(`invalid`, e), (o = a = r = null), n))
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
                  J(e, t, s, c, n, null);
              }
          Wt(e, r, a, o);
          return;
        case `option`:
          for (l in n)
            if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
              switch (l) {
                case `selected`:
                  e.selected = r && typeof r != `function` && typeof r != `symbol`;
                  break;
                default:
                  J(e, t, l, r, n, null);
              }
          return;
        case `dialog`:
          (q(`beforetoggle`, e), q(`toggle`, e), q(`cancel`, e), q(`close`, e));
          break;
        case `iframe`:
        case `object`:
          q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < yd.length; r++) q(yd[r], e);
          break;
        case `image`:
          (q(`error`, e), q(`load`, e));
          break;
        case `details`:
          q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          (q(`error`, e), q(`load`, e));
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
                  J(e, t, u, r, n, null);
              }
          return;
        default:
          if (Yt(t)) {
            for (d in n)
              n.hasOwnProperty(d) && ((r = n[d]), r !== void 0 && Fd(e, t, d, r, n, void 0));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && ((r = n[c]), r != null && J(e, t, c, r, n, null));
    }
    function Ld(e, t, n, r) {
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
                  r.hasOwnProperty(m) || J(e, t, m, null, r, f);
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
                  m !== f && J(e, t, p, m, r, f);
              }
          }
          zt(e, s, c, l, u, d, o, a);
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
                  r.hasOwnProperty(o) || J(e, t, o, null, r, l);
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
                  o !== l && J(e, t, a, o, r, l);
              }
          ((t = c),
            (n = s),
            (r = m),
            p == null
              ? !!r != !!n && (t == null ? Ht(e, !!n, n ? [] : ``, !1) : Ht(e, !!n, t, !0))
              : Ht(e, !!n, p, !1));
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
                  J(e, t, c, null, r, a);
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
                  a !== o && J(e, t, s, a, r, o);
              }
          Ut(e, p, m);
          return;
        case `option`:
          for (var h in n)
            if (((p = n[h]), n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)))
              switch (h) {
                case `selected`:
                  e.selected = !1;
                  break;
                default:
                  J(e, t, h, null, r, p);
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
                  J(e, t, l, p, r, m);
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
              n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && J(e, t, g, null, r, p));
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
                  J(e, t, u, p, r, m);
              }
          return;
        default:
          if (Yt(t)) {
            for (var _ in n)
              ((p = n[_]),
                n.hasOwnProperty(_) &&
                  p !== void 0 &&
                  !r.hasOwnProperty(_) &&
                  Fd(e, t, _, void 0, r, p));
            for (d in r)
              ((p = r[d]),
                (m = n[d]),
                !r.hasOwnProperty(d) ||
                  p === m ||
                  (p === void 0 && m === void 0) ||
                  Fd(e, t, d, p, r, m));
            return;
          }
      }
      for (var v in n)
        ((p = n[v]),
          n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && J(e, t, v, null, r, p));
      for (f in r)
        ((p = r[f]),
          (m = n[f]),
          !r.hasOwnProperty(f) || p === m || (p == null && m == null) || J(e, t, f, p, r, m));
    }
    function Rd(e) {
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
    function zd() {
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
          if (a && s && Rd(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && Rd(d) && ((c = c.responseEnd), (o += u * (c < s ? 1 : (s - l) / (c - l))));
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
    var Bd = null,
      Vd = null;
    function Hd(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ud(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function Wd(e, t) {
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
    function Gd(e, t) {
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
    var Kd = null;
    function qd() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== Kd && ((Kd = e), !0) : ((Kd = null), !1);
    }
    var Jd = typeof setTimeout == `function` ? setTimeout : void 0,
      Yd = typeof clearTimeout == `function` ? clearTimeout : void 0,
      Xd = typeof Promise == `function` ? Promise : void 0,
      Zd =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : Xd === void 0
            ? Jd
            : function (e) {
                return Xd.resolve(null).then(e).catch(Qd);
              };
    function Qd(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function $d(e) {
      return e === `head`;
    }
    function ef(e, t) {
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
          else if (n === `html`) hf(e.ownerDocument.documentElement);
          else if (n === `head`) {
            ((n = e.ownerDocument.head), hf(n));
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              (a[mt] ||
                s === `SCRIPT` ||
                s === `STYLE` ||
                (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                n.removeChild(a),
                (a = o));
            }
          } else n === `body` && hf(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Ip(t);
    }
    function tf(e, t) {
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
    function nf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (((t = t.nextSibling), n.nodeName)) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            (nf(n), ht(n));
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
    function rf(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[mt])
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
        if (((e = uf(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function af(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n) ||
          ((e = uf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function of(e, t) {
      for (; e.nodeType !== 8;)
        if (
          ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t) ||
          ((e = uf(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function sf(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function cf(e) {
      return e.data === `$!` || (e.data === `$?` && e.ownerDocument.readyState !== `loading`);
    }
    function lf(e, t) {
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
    function uf(e) {
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
    var df = null;
    function ff(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return uf(e.nextSibling);
            t--;
          } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function pf(e) {
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
    function mf(e, t, n) {
      switch (((t = Hd(n)), e)) {
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
    function hf(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      ht(e);
    }
    var gf = new Map(),
      _f = new Set();
    function vf(e) {
      return typeof e.getRootNode == `function`
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var yf = k.d;
    k.d = { f: bf, r: xf, D: wf, C: Tf, L: Ef, m: Df, X: kf, S: Of, M: Af };
    function bf() {
      var e = yf.f(),
        t = Su();
      return e || t;
    }
    function xf(e) {
      var t = _t(e);
      t !== null && t.tag === 5 && t.type === `form` ? Ds(t) : yf.r(e);
    }
    var Sf = typeof document > `u` ? null : document;
    function Cf(e, t, n) {
      var r = Sf;
      if (r && typeof t == `string` && t) {
        var i = Rt(t);
        ((i = `link[rel="` + e + `"][href="` + i + `"]`),
          typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
          _f.has(i) ||
            (_f.add(i),
            (e = { rel: e, crossOrigin: n, href: t }),
            r.querySelector(i) === null &&
              ((t = r.createElement(`link`)), Id(t, `link`, e), bt(t), r.head.appendChild(t))));
      }
    }
    function wf(e) {
      (yf.D(e), Cf(`dns-prefetch`, e, null));
    }
    function Tf(e, t) {
      (yf.C(e, t), Cf(`preconnect`, e, t));
    }
    function Ef(e, t, n) {
      yf.L(e, t, n);
      var r = Sf;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + Rt(t) + `"]`;
        t === `image` && n && n.imageSrcSet
          ? ((i += `[imagesrcset="` + Rt(n.imageSrcSet) + `"]`),
            typeof n.imageSizes == `string` && (i += `[imagesizes="` + Rt(n.imageSizes) + `"]`))
          : (i += `[href="` + Rt(e) + `"]`);
        var a = i;
        switch (t) {
          case `style`:
            a = Mf(e);
            break;
          case `script`:
            a = zf(e);
        }
        gf.has(a) ||
          ((e = f(
            { rel: `preload`, href: t === `image` && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          gf.set(a, e),
          r.querySelector(i) !== null ||
            (t === `style` && r.querySelector(Pf(a))) ||
            (t === `script` && r.querySelector(Bf(a))) ||
            ((t = r.createElement(`link`)), Id(t, `link`, e), bt(t), r.head.appendChild(t)));
      }
    }
    function Df(e, t) {
      yf.m(e, t);
      var n = Sf;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + Rt(r) + `"][href="` + Rt(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = zf(e);
        }
        if (
          !gf.has(a) &&
          ((e = f({ rel: `modulepreload`, href: e }, t)), gf.set(a, e), n.querySelector(i) === null)
        ) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(Bf(a))) return;
          }
          ((r = n.createElement(`link`)), Id(r, `link`, e), bt(r), n.head.appendChild(r));
        }
      }
    }
    function Of(e, t, n) {
      yf.S(e, t, n);
      var r = Sf;
      if (r && e) {
        var i = yt(r).hoistableStyles,
          a = Mf(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = { loading: 0, preload: null };
          if ((o = r.querySelector(Pf(a)))) s.loading = 5;
          else {
            ((e = f({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
              (n = gf.get(a)) && Uf(e, n));
            var c = (o = r.createElement(`link`));
            (bt(c),
              Id(c, `link`, e),
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
              Hf(o, t, r));
          }
          ((o = { type: `stylesheet`, instance: o, count: 1, state: s }), i.set(a, o));
        }
      }
    }
    function kf(e, t) {
      yf.X(e, t);
      var n = Sf;
      if (n && e) {
        var r = yt(n).hoistableScripts,
          i = zf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Bf(i))),
          a ||
            ((e = f({ src: e, async: !0 }, t)),
            (t = gf.get(i)) && Y(e, t),
            (a = n.createElement(`script`)),
            bt(a),
            Id(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function Af(e, t) {
      yf.M(e, t);
      var n = Sf;
      if (n && e) {
        var r = yt(n).hoistableScripts,
          i = zf(e),
          a = r.get(i);
        a ||
          ((a = n.querySelector(Bf(i))),
          a ||
            ((e = f({ src: e, async: !0, type: `module` }, t)),
            (t = gf.get(i)) && Y(e, t),
            (a = n.createElement(`script`)),
            bt(a),
            Id(a, `link`, e),
            n.head.appendChild(a)),
          (a = { type: `script`, instance: a, count: 1, state: null }),
          r.set(i, a));
      }
    }
    function jf(e, t, n, r) {
      var a = (a = fe.current) ? vf(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string`
            ? ((t = Mf(n.href)),
              (n = yt(a).hoistableStyles),
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
            e = Mf(n.href);
            var o = yt(a).hoistableStyles,
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
                (o = a.querySelector(Pf(e))) && !o._p && ((s.instance = o), (s.state.loading = 5)),
                gf.has(e) ||
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
                  gf.set(e, n),
                  o || Rf(a, e, n, s.state))),
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
              ? ((t = zf(n)),
                (n = yt(a).hoistableScripts),
                (r = n.get(t)),
                r || ((r = { type: `script`, instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null }
          );
        default:
          throw Error(i(444, e));
      }
    }
    function Mf(e) {
      return `href="` + Rt(e) + `"`;
    }
    function Pf(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function If(e) {
      return f({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function Rf(e, t, n, r) {
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
          Id(t, `link`, n),
          bt(t),
          e.head.appendChild(t));
    }
    function zf(e) {
      return `[src="` + Rt(e) + `"]`;
    }
    function Bf(e) {
      return `script[async]` + e;
    }
    function Vf(e, t, n) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case `style`:
            var r = e.querySelector(`style[data-href~="` + Rt(n.href) + `"]`);
            if (r) return ((t.instance = r), bt(r), r);
            var a = f({}, n, {
              "data-href": n.href,
              "data-precedence": n.precedence,
              href: null,
              precedence: null,
            });
            return (
              (r = (e.ownerDocument || e).createElement(`style`)),
              bt(r),
              Id(r, `style`, a),
              Hf(r, n.precedence, e),
              (t.instance = r)
            );
          case `stylesheet`:
            a = Mf(n.href);
            var o = e.querySelector(Pf(a));
            if (o) return ((t.state.loading |= 4), (t.instance = o), bt(o), o);
            ((r = If(n)),
              (a = gf.get(a)) && Uf(r, a),
              (o = (e.ownerDocument || e).createElement(`link`)),
              bt(o));
            var s = o;
            return (
              (s._p = new Promise(function (e, t) {
                ((s.onload = e), (s.onerror = t));
              })),
              Id(o, `link`, r),
              (t.state.loading |= 4),
              Hf(o, n.precedence, e),
              (t.instance = o)
            );
          case `script`:
            return (
              (o = zf(n.src)),
              (a = e.querySelector(Bf(o)))
                ? ((t.instance = a), bt(a), a)
                : ((r = n),
                  (a = gf.get(o)) && ((r = f({}, n)), Y(r, a)),
                  (e = e.ownerDocument || e),
                  (a = e.createElement(`script`)),
                  bt(a),
                  Id(a, `link`, r),
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
          ((r = t.instance), (t.state.loading |= 4), Hf(r, n.precedence, e));
      return t.instance;
    }
    function Hf(e, t, n) {
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
    function Uf(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.title ??= t.title));
    }
    function Y(e, t) {
      ((e.crossOrigin ??= t.crossOrigin),
        (e.referrerPolicy ??= t.referrerPolicy),
        (e.integrity ??= t.integrity));
    }
    var Wf = null;
    function Gf(e, t, n) {
      if (Wf === null) {
        var r = new Map(),
          i = (Wf = new Map());
        i.set(n, r);
      } else ((i = Wf), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (
          !(a[mt] || a[st] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
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
    function Kf(e, t, n) {
      ((e = e.ownerDocument || e),
        e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null));
    }
    function qf(e, t, n) {
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
    function Jf(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Yf(e, t, n, r) {
      if (
        n.type === `stylesheet` &&
        (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
        !(n.state.loading & 4)
      ) {
        if (n.instance === null) {
          var i = Mf(r.href),
            a = t.querySelector(Pf(i));
          if (a) {
            ((t = a._p),
              typeof t == `object` &&
                t &&
                typeof t.then == `function` &&
                (e.count++, (e = Qf.bind(e)), t.then(e, e)),
              (n.state.loading |= 4),
              (n.instance = a),
              bt(a));
            return;
          }
          ((a = t.ownerDocument || t),
            (r = If(r)),
            (i = gf.get(i)) && Uf(r, i),
            (a = a.createElement(`link`)),
            bt(a));
          var o = a;
          ((o._p = new Promise(function (e, t) {
            ((o.onload = e), (o.onerror = t));
          })),
            Id(a, `link`, r),
            (n.instance = a));
        }
        (e.stylesheets === null && (e.stylesheets = new Map()),
          e.stylesheets.set(n, t),
          (t = n.state.preload) &&
            !(n.state.loading & 3) &&
            (e.count++,
            (n = Qf.bind(e)),
            t.addEventListener(`load`, n),
            t.addEventListener(`error`, n)));
      }
    }
    var Xf = 0;
    function Zf(e, t) {
      return (
        e.stylesheets && e.count === 0 && ep(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount
          ? function (n) {
              var r = setTimeout(function () {
                if ((e.stylesheets && ep(e, e.stylesheets), e.unsuspend)) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              }, 6e4 + t);
              0 < e.imgBytes && Xf === 0 && (Xf = 62500 * zd());
              var i = setTimeout(
                function () {
                  if (
                    ((e.waitingForImages = !1),
                    e.count === 0 && (e.stylesheets && ep(e, e.stylesheets), e.unsuspend))
                  ) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                },
                (e.imgBytes > Xf ? 50 : 800) + t,
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
    function Qf() {
      if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
        if (this.stylesheets) ep(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          ((this.unsuspend = null), e());
        }
      }
    }
    var $f = null;
    function ep(e, t) {
      ((e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++, ($f = new Map()), t.forEach(tp, e), ($f = null), Qf.call(e)));
    }
    function tp(e, t) {
      if (!(t.state.loading & 4)) {
        var n = $f.get(e);
        if (n) var r = n.get(null);
        else {
          ((n = new Map()), $f.set(e, n));
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
          (r = Qf.bind(this)),
          i.addEventListener(`load`, r),
          i.addEventListener(`error`, r),
          a
            ? a.parentNode.insertBefore(i, a.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
          (t.state.loading |= 4));
      }
    }
    var np = {
      $$typeof: b,
      Provider: null,
      Consumer: null,
      _currentValue: A,
      _currentValue2: A,
      _threadCount: 0,
    };
    function rp(e, t, n, r, i, a, o, s, c) {
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
        (this.expirationTimes = Xe(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Xe(0)),
        (this.hiddenUpdates = Xe(null)),
        (this.identifierPrefix = r),
        (this.onUncaughtError = i),
        (this.onCaughtError = a),
        (this.onRecoverableError = o),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = c),
        (this.incompleteTransitions = new Map()));
    }
    function ip(e, t, n, r, i, a, o, s, c, l, u, d) {
      return (
        (e = new rp(e, t, n, o, c, l, u, d, s)),
        (t = 1),
        !0 === a && (t |= 24),
        (a = oi(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (t = oa()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
        za(a),
        e
      );
    }
    function X(e) {
      return e ? ((e = ii), e) : ii;
    }
    function ap(e, t, n, r, i, a) {
      ((i = X(i)),
        r.context === null ? (r.context = i) : (r.pendingContext = i),
        (r = Va(t)),
        (r.payload = { element: n }),
        (a = a === void 0 ? null : a),
        a !== null && (r.callback = a),
        (n = Ha(e, r, t)),
        n !== null && (_u(n, e, t), Ua(n, e, t)));
    }
    function op(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function sp(e, t) {
      (op(e, t), (e = e.alternate) && op(e, t));
    }
    function cp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ti(e, 67108864);
        (t !== null && _u(t, e, 67108864), sp(e, 67108864));
      }
    }
    function lp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = hu();
        t = nt(t);
        var n = ti(e, t);
        (n !== null && _u(n, e, t), sp(e, t));
      }
    }
    var up = !0;
    function dp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        ((k.p = 2), pp(e, t, n, r));
      } finally {
        ((k.p = a), (O.T = i));
      }
    }
    function fp(e, t, n, r) {
      var i = O.T;
      O.T = null;
      var a = k.p;
      try {
        ((k.p = 8), pp(e, t, n, r));
      } finally {
        ((k.p = a), (O.T = i));
      }
    }
    function pp(e, t, n, r) {
      if (up) {
        var i = mp(r);
        if (i === null) (Ed(e, t, r, hp, n), Ep(e, r));
        else if (Op(i, e, t, n, r)) r.stopPropagation();
        else if ((Ep(e, r), t & 4 && -1 < Tp.indexOf(e))) {
          for (; i !== null;) {
            var a = _t(i);
            if (a !== null)
              switch (a.tag) {
                case 3:
                  if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                    var o = Ge(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                        var c = 1 << (31 - Re(o));
                        ((s.entanglements[1] |= c), (o &= ~c));
                      }
                      (ad(a), !(H & 6) && ((ru = De() + 500), od(0, !1)));
                    }
                  }
                  break;
                case 31:
                case 13:
                  ((s = ti(a, 2)), s !== null && _u(s, a, 2), Su(), sp(a, 2));
              }
            if (((a = mp(r)), a === null && Ed(e, t, r, hp, n), a === i)) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Ed(e, t, r, null, n);
      }
    }
    function mp(e) {
      return ((e = tn(e)), gp(e));
    }
    var hp = null;
    function gp(e) {
      if (((hp = null), (e = gt(e)), e !== null)) {
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
      return ((hp = e), null);
    }
    function _p(e) {
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
          switch (P()) {
            case Oe:
              return 2;
            case ke:
              return 8;
            case Ae:
            case je:
              return 32;
            case Me:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var vp = !1,
      yp = null,
      bp = null,
      xp = null,
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
          yp = null;
          break;
        case `dragenter`:
        case `dragleave`:
          bp = null;
          break;
        case `mouseover`:
        case `mouseout`:
          xp = null;
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
          t !== null && ((t = _t(t)), t !== null && cp(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function Op(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((yp = Dp(yp, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((bp = Dp(bp, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((xp = Dp(xp, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (Sp.set(a, Dp(Sp.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return ((a = i.pointerId), Cp.set(a, Dp(Cp.get(a) || null, e, t, n, r, i)), !0);
      }
      return !1;
    }
    function kp(e) {
      var t = gt(e.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = s(n)), t !== null)) {
              ((e.blockedOn = t),
                at(e.priority, function () {
                  lp(n);
                }));
              return;
            }
          } else if (t === 31) {
            if (((t = c(n)), t !== null)) {
              ((e.blockedOn = t),
                at(e.priority, function () {
                  lp(n);
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
        var n = mp(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((en = r), n.target.dispatchEvent(r), (en = null));
        } else return ((t = _t(n)), t !== null && cp(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function jp(e, t, n) {
      Ap(e) && n.delete(t);
    }
    function Mp() {
      ((vp = !1),
        yp !== null && Ap(yp) && (yp = null),
        bp !== null && Ap(bp) && (bp = null),
        xp !== null && Ap(xp) && (xp = null),
        Sp.forEach(jp),
        Cp.forEach(jp));
    }
    function Np(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        vp || ((vp = !0), t.unstable_scheduleCallback(t.unstable_NormalPriority, Mp)));
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
              if (gp(r || n) === null) continue;
              break;
            }
            var a = _t(n);
            a !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Ts(a, { pending: !0, data: i, method: n.method, action: r }, r, i));
          }
        }));
    }
    function Ip(e) {
      function t(t) {
        return Np(t, e);
      }
      (yp !== null && Np(yp, e),
        bp !== null && Np(bp, e),
        xp !== null && Np(xp, e),
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
            o = i[ct] || null;
          if (typeof a == `function`) o || Fp(n);
          else if (o) {
            var s = null;
            if (a && a.hasAttribute(`formAction`)) {
              if (((i = a), (o = a[ct] || null))) s = o.formAction;
              else if (gp(i) !== null) continue;
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
    function Rp(e) {
      this._internalRoot = e;
    }
    ((zp.prototype.render = Rp.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        var n = t.current;
        ap(n, hu(), e, t, null, null);
      }),
      (zp.prototype.unmount = Rp.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (ap(e.current, 2, null, e, null, null), Su(), (t[lt] = null));
          }
        }));
    function zp(e) {
      this._internalRoot = e;
    }
    zp.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = it();
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
          ((Fe = Hp.inject(Vp)), (Ie = Hp));
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
        (t = ip(e, 1, !1, null, null, n, r, null, o, s, c, Lp)),
        (e[lt] = t.current),
        wd(e),
        new Rp(t)
      );
    };
  }),
  zf = s((e, t) => {
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
    (n(), (t.exports = Rf()));
  });
function Bf(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(`Class extends value ` + String(t) + ` is not a constructor or null`);
  Uf(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
function Vf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`)
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  return n;
}
function Hf(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, a; r < i; r++)
      (a || !(r in t)) && ((a ||= Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
  return e.concat(a || Array.prototype.slice.call(t));
}
var Uf,
  Y,
  Wf = o(() => {
    ((Uf = function (e, t) {
      return (
        (Uf =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        Uf(e, t)
      );
    }),
      (Y = function () {
        return (
          (Y =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in ((t = arguments[n]), t))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          Y.apply(this, arguments)
        );
      }));
  }),
  Gf = o(() => {});
function Kf(e, t) {
  var n = t && t.cache ? t.cache : np,
    r = t && t.serializer ? t.serializer : ep;
  return (t && t.strategy ? t.strategy : Zf)(e, { cache: n, serializer: r });
}
function qf(e) {
  return e == null || typeof e == `number` || typeof e == `boolean`;
}
function Jf(e, t, n, r) {
  var i = qf(r) ? r : n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.call(this, r)), t.set(i, a)), a);
}
function Yf(e, t, n) {
  var r = Array.prototype.slice.call(arguments, 3),
    i = n(r),
    a = t.get(i);
  return (a === void 0 && ((a = e.apply(this, r)), t.set(i, a)), a);
}
function Xf(e, t, n, r, i) {
  return n.bind(t, e, r, i);
}
function Zf(e, t) {
  var n = e.length === 1 ? Jf : Yf;
  return Xf(e, this, n, t.cache.create(), t.serializer);
}
function Qf(e, t) {
  return Xf(e, this, Yf, t.cache.create(), t.serializer);
}
function $f(e, t) {
  return Xf(e, this, Jf, t.cache.create(), t.serializer);
}
var ep,
  tp,
  np,
  rp,
  ip = o(() => {
    ((ep = function () {
      return JSON.stringify(arguments);
    }),
      (tp = (function () {
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
      (np = {
        create: function () {
          return new tp();
        },
      }),
      (rp = { variadic: Qf, monadic: $f }));
  }),
  X,
  ap = o(() => {
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
    })((X ||= {}));
  });
function op(e) {
  return e.type === _p.literal;
}
function sp(e) {
  return e.type === _p.argument;
}
function cp(e) {
  return e.type === _p.number;
}
function lp(e) {
  return e.type === _p.date;
}
function up(e) {
  return e.type === _p.time;
}
function dp(e) {
  return e.type === _p.select;
}
function fp(e) {
  return e.type === _p.plural;
}
function pp(e) {
  return e.type === _p.pound;
}
function mp(e) {
  return e.type === _p.tag;
}
function hp(e) {
  return !!(e && typeof e == `object` && e.type === vp.number);
}
function gp(e) {
  return !!(e && typeof e == `object` && e.type === vp.dateTime);
}
var _p,
  vp,
  yp = o(() => {
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
    })((_p ||= {})),
      (function (e) {
        ((e[(e.number = 0)] = `number`), (e[(e.dateTime = 1)] = `dateTime`));
      })((vp ||= {})));
  }),
  bp,
  xp = o(() => {
    bp = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
  });
function Sp(e) {
  var t = {};
  return (
    e.replace(Cp, function (e) {
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
var Cp,
  wp = o(() => {
    Cp =
      /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
  }),
  Tp,
  Ep = o(() => {
    Tp = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  });
function Dp(e) {
  if (e.length === 0) throw Error(`Number skeleton cannot be empty`);
  for (
    var t = e.split(Tp).filter(function (e) {
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
function Op(e) {
  return e.replace(/^(.*?)-/, ``);
}
function kp(e) {
  var t = {};
  return (
    e[e.length - 1] === `r`
      ? (t.roundingPriority = `morePrecision`)
      : e[e.length - 1] === `s` && (t.roundingPriority = `lessPrecision`),
    e.replace(Fp, function (e, n, r) {
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
function Ap(e) {
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
function jp(e) {
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
      !Lp.test(e))
    )
      throw Error(`Malformed concise eng/scientific notation`);
    t.minimumIntegerDigits = e.length;
  }
  return t;
}
function Mp(e) {
  return Ap(e) || {};
}
function Np(e) {
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
        ((t.style = `unit`), (t.unit = Op(i.options[0])));
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
        t = Y(
          Y(Y({}, t), { notation: `scientific` }),
          i.options.reduce(function (e, t) {
            return Y(Y({}, e), Mp(t));
          }, {}),
        );
        continue;
      case `engineering`:
        t = Y(
          Y(Y({}, t), { notation: `engineering` }),
          i.options.reduce(function (e, t) {
            return Y(Y({}, e), Mp(t));
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
        i.options[0].replace(Ip, function (e, n, r, i, a, o) {
          if (n) t.minimumIntegerDigits = r.length;
          else if (i && a) throw Error(`We currently do not support maximum integer digits`);
          else if (o) throw Error(`We currently do not support exact integer digits`);
          return ``;
        });
        continue;
    }
    if (Lp.test(i.stem)) {
      t.minimumIntegerDigits = i.stem.length;
      continue;
    }
    if (Pp.test(i.stem)) {
      if (i.options.length > 1)
        throw RangeError(`Fraction-precision stems only accept a single optional option`);
      i.stem.replace(Pp, function (e, n, r, i, a, o) {
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
        ? (t = Y(Y({}, t), { trailingZeroDisplay: `stripIfInteger` }))
        : a && (t = Y(Y({}, t), kp(a)));
      continue;
    }
    if (Fp.test(i.stem)) {
      t = Y(Y({}, t), kp(i.stem));
      continue;
    }
    var o = Ap(i.stem);
    o && (t = Y(Y({}, t), o));
    var s = jp(i.stem);
    s && (t = Y(Y({}, t), s));
  }
  return t;
}
var Pp,
  Fp,
  Ip,
  Lp,
  Rp = o(() => {
    (Wf(),
      Ep(),
      (Pp = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g),
      (Fp = /^(@+)?(\+|#+)?[rs]?$/g),
      (Ip = /(\*)(0+)|(#+)(0+)|(0+)/g),
      (Lp = /^(0+)$/));
  }),
  zp = o(() => {
    (wp(), Rp());
  }),
  Bp,
  Vp = o(() => {
    Bp = {
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
function Hp(e, t) {
  for (var n = ``, r = 0; r < e.length; r++) {
    var i = e.charAt(r);
    if (i === `j`) {
      for (var a = 0; r + 1 < e.length && e.charAt(r + 1) === i;) (a++, r++);
      var o = 1 + (a & 1),
        s = a < 2 ? 1 : 3 + (a >> 1),
        c = `a`,
        l = Up(t);
      for ((l == `H` || l == `k`) && (s = 0); s-- > 0;) n += c;
      for (; o-- > 0;) n = l + n;
    } else n += i === `J` ? `H` : i;
  }
  return n;
}
function Up(e) {
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
    (Bp[r || ``] || Bp[n || ``] || Bp[`${n}-001`] || Bp[`001`])[0]
  );
}
var Wp = o(() => {
  Vp();
});
function Z(e, t) {
  return { start: e, end: t };
}
function Gp(e, t) {
  return new RegExp(e, t);
}
function Kp(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function qp(e) {
  return Kp(e) || e === 47;
}
function Jp(e) {
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
function Yp(e) {
  return (
    (e >= 9 && e <= 13) ||
    e === 32 ||
    e === 133 ||
    (e >= 8206 && e <= 8207) ||
    e === 8232 ||
    e === 8233
  );
}
function Xp(e) {
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
var Zp,
  Qp,
  $p,
  em,
  tm,
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
  gm = o(() => {
    (Wf(),
      ap(),
      yp(),
      xp(),
      zp(),
      Wp(),
      (Zp = RegExp(`^${bp.source}*`)),
      (Qp = RegExp(`${bp.source}*\$`)),
      ($p = !!String.prototype.startsWith && `_a`.startsWith(`a`, 1)),
      (em = !!String.fromCodePoint),
      (tm = !!Object.fromEntries),
      (nm = !!String.prototype.codePointAt),
      (rm = !!String.prototype.trimStart),
      (im = !!String.prototype.trimEnd),
      (am = Number.isSafeInteger
        ? Number.isSafeInteger
        : function (e) {
            return (
              typeof e == `number` &&
              isFinite(e) &&
              Math.floor(e) === e &&
              Math.abs(e) <= 9007199254740991
            );
          }),
      (om = !0));
    try {
      om = Gp(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`).exec(`a`)?.[0] === `a`;
    } catch {
      om = !1;
    }
    ((sm = $p
      ? function (e, t, n) {
          return e.startsWith(t, n);
        }
      : function (e, t, n) {
          return e.slice(n, n + t.length) === t;
        }),
      (cm = em
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
      (lm = tm
        ? Object.fromEntries
        : function (e) {
            for (var t = {}, n = 0, r = e; n < r.length; n++) {
              var i = r[n],
                a = i[0];
              t[a] = i[1];
            }
            return t;
          }),
      (um = nm
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
      (dm = rm
        ? function (e) {
            return e.trimStart();
          }
        : function (e) {
            return e.replace(Zp, ``);
          }),
      (fm = im
        ? function (e) {
            return e.trimEnd();
          }
        : function (e) {
            return e.replace(Qp, ``);
          }),
      om
        ? ((mm = Gp(`([^\\p{White_Space}\\p{Pattern_Syntax}]*)`, `yu`)),
          (pm = function (e, t) {
            return ((mm.lastIndex = t), mm.exec(e)[1] ?? ``);
          }))
        : (pm = function (e, t) {
            for (var n = []; ;) {
              var r = um(e, t);
              if (r === void 0 || Yp(r) || Xp(r)) break;
              (n.push(r), (t += r >= 65536 ? 2 : 1));
            }
            return cm.apply(void 0, n);
          }),
      (hm = (function () {
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
                (this.bump(), r.push({ type: _p.pound, location: Z(o, this.clonePosition()) }));
              } else if (i === 60 && !this.ignoreTag && this.peek() === 47) {
                if (n) break;
                return this.error(
                  X.UNMATCHED_CLOSING_TAG,
                  Z(this.clonePosition(), this.clonePosition()),
                );
              } else if (i === 60 && !this.ignoreTag && Kp(this.peek() || 0)) {
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
                val: { type: _p.literal, value: `<${r}/>`, location: Z(n, this.clonePosition()) },
                err: null,
              };
            if (this.bumpIf(`>`)) {
              var i = this.parseMessage(e + 1, t, !0);
              if (i.err) return i;
              var a = i.val,
                o = this.clonePosition();
              if (this.bumpIf(`</`)) {
                if (this.isEOF() || !Kp(this.char()))
                  return this.error(X.INVALID_TAG, Z(o, this.clonePosition()));
                var s = this.clonePosition();
                return r === this.parseTagName()
                  ? (this.bumpSpace(),
                    this.bumpIf(`>`)
                      ? {
                          val: {
                            type: _p.tag,
                            value: r,
                            children: a,
                            location: Z(n, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(X.INVALID_TAG, Z(o, this.clonePosition())))
                  : this.error(X.UNMATCHED_CLOSING_TAG, Z(s, this.clonePosition()));
              }
              return this.error(X.UNCLOSED_TAG, Z(n, this.clonePosition()));
            }
            return this.error(X.INVALID_TAG, Z(n, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e = this.offset();
            for (this.bump(); !this.isEOF() && Jp(this.char());) this.bump();
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
            return { val: { type: _p.literal, value: r, location: s }, err: null };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return !this.isEOF() && this.char() === 60 && (this.ignoreTag || !qp(this.peek() || 0))
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
            return cm.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var n = this.char();
            return n === 60 ||
              n === 123 ||
              (n === 35 && (t === `plural` || t === `selectordinal`)) ||
              (n === 125 && e > 0)
              ? null
              : (this.bump(), cm(n));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var n = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
            if (this.char() === 125)
              return (this.bump(), this.error(X.EMPTY_ARGUMENT, Z(n, this.clonePosition())));
            var r = this.parseIdentifierIfPossible().value;
            if (!r) return this.error(X.MALFORMED_ARGUMENT, Z(n, this.clonePosition()));
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()));
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: { type: _p.argument, value: r, location: Z(n, this.clonePosition()) },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Z(n, this.clonePosition()))
                    : this.parseArgumentOptions(e, t, r, n)
                );
              default:
                return this.error(X.MALFORMED_ARGUMENT, Z(n, this.clonePosition()));
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              n = pm(this.message, t),
              r = t + n.length;
            return (this.bumpTo(r), { value: n, location: Z(e, this.clonePosition()) });
          }),
          (e.prototype.parseArgumentOptions = function (e, t, n, r) {
            var i = this.clonePosition(),
              a = this.parseIdentifierIfPossible().value,
              o = this.clonePosition();
            switch (a) {
              case ``:
                return this.error(X.EXPECT_ARGUMENT_TYPE, Z(i, o));
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
                  var u = fm(l.val);
                  if (u.length === 0)
                    return this.error(
                      X.EXPECT_ARGUMENT_STYLE,
                      Z(this.clonePosition(), this.clonePosition()),
                    );
                  s = { style: u, styleLocation: Z(c, this.clonePosition()) };
                }
                var d = this.tryParseArgumentClose(r);
                if (d.err) return d;
                var f = Z(r, this.clonePosition());
                if (s && sm(s?.style, `::`, 0)) {
                  var p = dm(s.style.slice(2));
                  if (a === `number`) {
                    var l = this.parseNumberSkeletonFromString(p, s.styleLocation);
                    return l.err
                      ? l
                      : {
                          val: { type: _p.number, value: n, location: f, style: l.val },
                          err: null,
                        };
                  }
                  if (p.length === 0) return this.error(X.EXPECT_DATE_TIME_SKELETON, f);
                  var m = p;
                  this.locale && (m = Hp(p, this.locale));
                  var u = {
                    type: vp.dateTime,
                    pattern: m,
                    location: s.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? Sp(m) : {},
                  };
                  return {
                    val: {
                      type: a === `date` ? _p.date : _p.time,
                      value: n,
                      location: f,
                      style: u,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type: a === `number` ? _p.number : a === `date` ? _p.date : _p.time,
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
                  return this.error(X.EXPECT_SELECT_ARGUMENT_OPTIONS, Z(h, Y({}, h)));
                this.bumpSpace();
                var g = this.parseIdentifierIfPossible(),
                  _ = 0;
                if (a !== `select` && g.value === `offset`) {
                  if (!this.bumpIf(`:`))
                    return this.error(
                      X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      Z(this.clonePosition(), this.clonePosition()),
                    );
                  this.bumpSpace();
                  var l = this.tryParseDecimalInteger(
                    X.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                    X.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
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
                  ? {
                      val: { type: _p.select, value: n, options: lm(v.val), location: y },
                      err: null,
                    }
                  : {
                      val: {
                        type: _p.plural,
                        value: n,
                        options: lm(v.val),
                        offset: _,
                        pluralType: a === `plural` ? `cardinal` : `ordinal`,
                        location: y,
                      },
                      err: null,
                    };
              default:
                return this.error(X.INVALID_ARGUMENT_TYPE, Z(i, o));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || this.char() !== 125
              ? this.error(X.EXPECT_ARGUMENT_CLOSING_BRACE, Z(e, this.clonePosition()))
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
                      X.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      Z(n, this.clonePosition()),
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
              }
            return { val: this.message.slice(t.offset, this.offset()), err: null };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var n = [];
            try {
              n = Dp(e);
            } catch {
              return this.error(X.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: vp.number,
                tokens: n,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? Np(n) : {},
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
                    X.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                    X.INVALID_PLURAL_ARGUMENT_SELECTOR,
                  );
                  if (d.err) return d;
                  ((l = Z(u, this.clonePosition())),
                    (c = this.message.slice(u.offset, this.offset())));
                } else break;
              }
              if (s.has(c))
                return this.error(
                  t === `select`
                    ? X.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : X.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              (c === `other` && (a = !0), this.bumpSpace());
              var f = this.clonePosition();
              if (!this.bumpIf(`{`))
                return this.error(
                  t === `select`
                    ? X.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : X.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
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
                  t === `select`
                    ? X.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : X.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  Z(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !a
                ? this.error(X.MISSING_OTHER_CLAUSE, Z(this.clonePosition(), this.clonePosition()))
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
            return i
              ? ((a *= n), am(a) ? { val: a, err: null } : this.error(t, s))
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
            var t = um(this.message, e);
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
            if (sm(this.message, e, this.offset())) {
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
            for (; !this.isEOF() && Yp(this.char());) this.bump();
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
  _m = o(() => {
    yp();
  });
function vm(e) {
  e.forEach(function (e) {
    if ((delete e.location, dp(e) || fp(e)))
      for (var t in e.options) (delete e.options[t].location, vm(e.options[t].value));
    else
      (cp(e) && hp(e.style)) || ((lp(e) || up(e)) && gp(e.style))
        ? delete e.style.location
        : mp(e) && vm(e.children);
  });
}
function ym(e, t) {
  (t === void 0 && (t = {}), (t = Y({ shouldParseSkeletons: !0, requiresOtherClause: !0 }, t)));
  var n = new hm(e, t).parse();
  if (n.err) {
    var r = SyntaxError(X[n.err.kind]);
    throw ((r.location = n.err.location), (r.originalMessage = n.err.message), r);
  }
  return (t?.captureLocation || vm(n.val), n.val);
}
var bm = o(() => {
    (Wf(), ap(), gm(), yp(), yp(), _m());
  }),
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em = o(() => {
    (Wf(),
      (function (e) {
        ((e.MISSING_VALUE = `MISSING_VALUE`),
          (e.INVALID_VALUE = `INVALID_VALUE`),
          (e.MISSING_INTL_API = `MISSING_INTL_API`));
      })((xm ||= {})),
      (Sm = (function (e) {
        Bf(t, e);
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
      (Cm = (function (e) {
        Bf(t, e);
        function t(t, n, r, i) {
          return (
            e.call(
              this,
              `Invalid values for "${t}": "${n}". Options are "${Object.keys(r).join(`", "`)}"`,
              xm.INVALID_VALUE,
              i,
            ) || this
          );
        }
        return t;
      })(Sm)),
      (wm = (function (e) {
        Bf(t, e);
        function t(t, n, r) {
          return e.call(this, `Value for "${t}" must be of type ${n}`, xm.INVALID_VALUE, r) || this;
        }
        return t;
      })(Sm)),
      (Tm = (function (e) {
        Bf(t, e);
        function t(t, n) {
          return (
            e.call(
              this,
              `The intl string context variable "${t}" was not provided to the string "${n}"`,
              xm.MISSING_VALUE,
              n,
            ) || this
          );
        }
        return t;
      })(Sm)));
  });
function Dm(e) {
  return e.length < 2
    ? e
    : e.reduce(function (e, t) {
        var n = e[e.length - 1];
        return (
          !n || n.type !== Am.literal || t.type !== Am.literal ? e.push(t) : (n.value += t.value), e
        );
      }, []);
}
function Om(e) {
  return typeof e == `function`;
}
function km(e, t, n, r, i, a, o) {
  if (e.length === 1 && op(e[0])) return [{ type: Am.literal, value: e[0].value }];
  for (var s = [], c = 0, l = e; c < l.length; c++) {
    var u = l[c];
    if (op(u)) {
      s.push({ type: Am.literal, value: u.value });
      continue;
    }
    if (pp(u)) {
      typeof a == `number` && s.push({ type: Am.literal, value: n.getNumberFormat(t).format(a) });
      continue;
    }
    var d = u.value;
    if (!(i && d in i)) throw new Tm(d, o);
    var f = i[d];
    if (sp(u)) {
      ((!f || typeof f == `string` || typeof f == `number`) &&
        (f = typeof f == `string` || typeof f == `number` ? String(f) : ``),
        s.push({ type: typeof f == `string` ? Am.literal : Am.object, value: f }));
      continue;
    }
    if (lp(u)) {
      var p =
        typeof u.style == `string` ? r.date[u.style] : gp(u.style) ? u.style.parsedOptions : void 0;
      s.push({ type: Am.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (up(u)) {
      var p =
        typeof u.style == `string`
          ? r.time[u.style]
          : gp(u.style)
            ? u.style.parsedOptions
            : r.time.medium;
      s.push({ type: Am.literal, value: n.getDateTimeFormat(t, p).format(f) });
      continue;
    }
    if (cp(u)) {
      var p =
        typeof u.style == `string`
          ? r.number[u.style]
          : hp(u.style)
            ? u.style.parsedOptions
            : void 0;
      (p && p.scale && (f *= p.scale || 1),
        s.push({ type: Am.literal, value: n.getNumberFormat(t, p).format(f) }));
      continue;
    }
    if (mp(u)) {
      var m = u.children,
        h = u.value,
        g = i[h];
      if (!Om(g)) throw new wm(h, `function`, o);
      var _ = g(
        km(m, t, n, r, i, a).map(function (e) {
          return e.value;
        }),
      );
      (Array.isArray(_) || (_ = [_]),
        s.push.apply(
          s,
          _.map(function (e) {
            return { type: typeof e == `string` ? Am.literal : Am.object, value: e };
          }),
        ));
    }
    if (dp(u)) {
      var v = u.options[f] || u.options.other;
      if (!v) throw new Cm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, km(v.value, t, n, r, i));
      continue;
    }
    if (fp(u)) {
      var v = u.options[`=${f}`];
      if (!v) {
        if (!Intl.PluralRules)
          throw new Sm(
            `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
            xm.MISSING_INTL_API,
            o,
          );
        var y = n.getPluralRules(t, { type: u.pluralType }).select(f - (u.offset || 0));
        v = u.options[y] || u.options.other;
      }
      if (!v) throw new Cm(u.value, f, Object.keys(u.options), o);
      s.push.apply(s, km(v.value, t, n, r, i, f - (u.offset || 0)));
      continue;
    }
  }
  return Dm(s);
}
var Am,
  jm = o(() => {
    (bm(),
      Em(),
      (function (e) {
        ((e[(e.literal = 0)] = `literal`), (e[(e.object = 1)] = `object`));
      })((Am ||= {})));
  });
function Mm(e, t) {
  return t
    ? Y(
        Y(Y({}, e || {}), t || {}),
        Object.keys(e).reduce(function (n, r) {
          return ((n[r] = Y(Y({}, e[r]), t[r] || {})), n);
        }, {}),
      )
    : e;
}
function Nm(e, t) {
  return t
    ? Object.keys(e).reduce(
        function (n, r) {
          return ((n[r] = Mm(e[r], t[r])), n);
        },
        Y({}, e),
      )
    : e;
}
function Pm(e) {
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
function Fm(e) {
  return (
    e === void 0 && (e = { number: {}, dateTime: {}, pluralRules: {} }),
    {
      getNumberFormat: Kf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.NumberFormat).bind.apply(e, Hf([void 0], t, !1)))();
        },
        { cache: Pm(e.number), strategy: rp.variadic },
      ),
      getDateTimeFormat: Kf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.DateTimeFormat).bind.apply(e, Hf([void 0], t, !1)))();
        },
        { cache: Pm(e.dateTime), strategy: rp.variadic },
      ),
      getPluralRules: Kf(
        function () {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new ((e = Intl.PluralRules).bind.apply(e, Hf([void 0], t, !1)))();
        },
        { cache: Pm(e.pluralRules), strategy: rp.variadic },
      ),
    }
  );
}
var Im,
  Lm = o(() => {
    (Wf(),
      ip(),
      bm(),
      jm(),
      (Im = (function () {
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
                  !e.length || t.type !== Am.literal || typeof e[e.length - 1] != `string`
                    ? e.push(t.value)
                    : (e[e.length - 1] += t.value),
                  e
                );
              }, []);
              return n.length <= 1 ? n[0] || `` : n;
            }),
            (this.formatToParts = function (e) {
              return km(a.ast, a.locales, a.formatters, a.formats, e, void 0, a.message);
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
            var s = Vf(o, [`formatters`]);
            this.ast = e.__parse(t, Y(Y({}, s), { locale: this.resolvedLocale }));
          } else this.ast = t;
          if (!Array.isArray(this.ast))
            throw TypeError(`A message must be provided as a String or AST.`);
          ((this.formats = Nm(e.formats, r)),
            (this.formatters = (i && i.formatters) || Fm(this.formatterCache)));
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
          (e.__parse = ym),
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
  Rm = o(() => {
    (Lm(), Lm(), Em(), jm());
  }),
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm = o(() => {
    (Wf(),
      (function (e) {
        ((e.FORMAT_ERROR = `FORMAT_ERROR`),
          (e.UNSUPPORTED_FORMATTER = `UNSUPPORTED_FORMATTER`),
          (e.INVALID_CONFIG = `INVALID_CONFIG`),
          (e.MISSING_DATA = `MISSING_DATA`),
          (e.MISSING_TRANSLATION = `MISSING_TRANSLATION`));
      })((zm ||= {})),
      (Bm = (function (e) {
        Bf(t, e);
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
      (Vm = (function (e) {
        Bf(t, e);
        function t(t, n) {
          return e.call(this, zm.UNSUPPORTED_FORMATTER, t, n) || this;
        }
        return t;
      })(Bm)),
      (Hm = (function (e) {
        Bf(t, e);
        function t(t, n) {
          return e.call(this, zm.INVALID_CONFIG, t, n) || this;
        }
        return t;
      })(Bm)),
      (Um = (function (e) {
        Bf(t, e);
        function t(t, n) {
          return e.call(this, zm.MISSING_DATA, t, n) || this;
        }
        return t;
      })(Bm)),
      (Wm = (function (e) {
        Bf(t, e);
        function t(t, n, r) {
          var i =
            e.call(
              this,
              zm.FORMAT_ERROR,
              `${t}
Locale: ${n}
`,
              r,
            ) || this;
          return ((i.locale = n), i);
        }
        return t;
      })(Bm)),
      (Gm = (function (e) {
        Bf(t, e);
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
      })(Wm)),
      (Km = (function (e) {
        Bf(t, e);
        function t(t, n) {
          var r =
            e.call(
              this,
              zm.MISSING_TRANSLATION,
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
      })(Bm)));
  });
function Jm(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Ym(e, t, n) {
  return (
    n === void 0 && (n = {}),
    t.reduce(function (t, r) {
      return (r in e ? (t[r] = e[r]) : r in n && (t[r] = n[r]), t);
    }, {})
  );
}
function Xm() {
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
function Zm(e) {
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
function Qm(e) {
  e === void 0 && (e = Xm());
  var t = Intl.RelativeTimeFormat,
    n = Intl.ListFormat,
    r = Intl.DisplayNames,
    i = Kf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.DateTimeFormat).bind.apply(e, Hf([void 0], t, !1)))();
      },
      { cache: Zm(e.dateTime), strategy: rp.variadic },
    ),
    a = Kf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, Hf([void 0], t, !1)))();
      },
      { cache: Zm(e.number), strategy: rp.variadic },
    ),
    o = Kf(
      function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.PluralRules).bind.apply(e, Hf([void 0], t, !1)))();
      },
      { cache: Zm(e.pluralRules), strategy: rp.variadic },
    );
  return {
    getDateTimeFormat: i,
    getNumberFormat: a,
    getMessageFormat: Kf(
      function (e, t, n, r) {
        return new Im(
          e,
          t,
          n,
          Y(
            { formatters: { getNumberFormat: a, getDateTimeFormat: i, getPluralRules: o } },
            r || {},
          ),
        );
      },
      { cache: Zm(e.message), strategy: rp.variadic },
    ),
    getRelativeTimeFormat: Kf(
      function () {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return new (t.bind.apply(t, Hf([void 0], e, !1)))();
      },
      { cache: Zm(e.relativeTime), strategy: rp.variadic },
    ),
    getPluralRules: o,
    getListFormat: Kf(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (n.bind.apply(n, Hf([void 0], e, !1)))();
      },
      { cache: Zm(e.list), strategy: rp.variadic },
    ),
    getDisplayNames: Kf(
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return new (r.bind.apply(r, Hf([void 0], e, !1)))();
      },
      { cache: Zm(e.displayNames), strategy: rp.variadic },
    ),
  };
}
function $m(e, t, n, r) {
  var i = e && e[t],
    a;
  if ((i && (a = i[n]), a)) return a;
  r(new Vm(`No ${t} format named: ${n}`));
}
var eh,
  th,
  nh,
  rh = o(() => {
    (Wf(),
      ip(),
      Rm(),
      qm(),
      (eh = function (e) {}),
      (th = function (e) {}),
      (nh = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: `en`,
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: eh,
        onWarn: th,
      }));
  });
function ih(e, t) {
  return Object.keys(e).reduce(function (n, r) {
    return ((n[r] = Y({ timeZone: t }, e[r])), n);
  }, {});
}
function ah(e, t) {
  return Object.keys(Y(Y({}, e), t)).reduce(function (n, r) {
    return ((n[r] = Y(Y({}, e[r] || {}), t[r] || {})), n);
  }, {});
}
function oh(e, t) {
  if (!t) return e;
  var n = Im.formats;
  return Y(Y(Y({}, n), e), {
    date: ah(ih(n.date, t), ih(e.date || {}, t)),
    time: ah(ih(n.time, t), ih(e.time || {}, t)),
  });
}
var sh,
  ch = o(() => {
    (Wf(),
      bm(),
      Rm(),
      qm(),
      rh(),
      (sh = function (e, t, n, r, i) {
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
        Jm(
          !!m,
          `[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`,
        );
        var g = String(m),
          _ = s && Object.prototype.hasOwnProperty.call(s, g) && s[g];
        if (Array.isArray(_) && _.length === 1 && _[0].type === _p.literal) return _[0].value;
        if (!r && _ && typeof _ == `string` && !p) return _.replace(/'\{(.*?)\}'/gi, `{$1}`);
        if (((r = Y(Y({}, p), r || {})), (o = oh(o, f)), (l = oh(l, f)), !_)) {
          if (u === !1 && _ === ``) return _;
          if (((!h || (a && a.toLowerCase() !== c.toLowerCase())) && d(new Km(n, a)), h))
            try {
              var v = t.getMessageFormat(h, c, l, i);
              return v.format(r);
            } catch (e) {
              return (
                d(
                  new Gm(
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
          var v = t.getMessageFormat(_, a, o, Y({ formatters: t }, i || {}));
          return v.format(r);
        } catch (e) {
          d(
            new Gm(
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
              new Gm(
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
function lh(e, t, n, r) {
  var i = e.locale,
    a = e.formats,
    o = e.onError,
    s = e.timeZone;
  r === void 0 && (r = {});
  var c = r.format,
    l = Y(Y({}, s && { timeZone: s }), c && $m(a, t, c, o)),
    u = Ym(r, hh, l);
  return (
    t === `time` &&
      !u.hour &&
      !u.minute &&
      !u.second &&
      !u.timeStyle &&
      !u.dateStyle &&
      (u = Y(Y({}, u), { hour: `numeric`, minute: `numeric` })),
    n(i, u)
  );
}
function uh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return lh(e, `date`, t, o).format(s);
  } catch (t) {
    e.onError(new Wm(`Error formatting date.`, e.locale, t));
  }
  return String(s);
}
function dh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return lh(e, `time`, t, o).format(s);
  } catch (t) {
    e.onError(new Wm(`Error formatting time.`, e.locale, t));
  }
  return String(s);
}
function fh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = n[2],
    s = o === void 0 ? {} : o,
    c = typeof i == `string` ? new Date(i || 0) : i,
    l = typeof a == `string` ? new Date(a || 0) : a;
  try {
    return lh(e, `dateTimeRange`, t, s).formatRange(c, l);
  } catch (t) {
    e.onError(new Wm(`Error formatting date time range.`, e.locale, t));
  }
  return String(c);
}
function ph(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return lh(e, `date`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Wm(`Error formatting date.`, e.locale, t));
  }
  return [];
}
function mh(e, t) {
  for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
  var i = n[0],
    a = n[1],
    o = a === void 0 ? {} : a,
    s = typeof i == `string` ? new Date(i || 0) : i;
  try {
    return lh(e, `time`, t, o).formatToParts(s);
  } catch (t) {
    e.onError(new Wm(`Error formatting time.`, e.locale, t));
  }
  return [];
}
var hh,
  gh = o(() => {
    (Wf(),
      qm(),
      rh(),
      (hh = [
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
function _h(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  Intl.DisplayNames ||
    a(
      new Sm(
        `Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,
        xm.MISSING_INTL_API,
      ),
    );
  var o = Ym(r, vh);
  try {
    return t(i, o).of(n);
  } catch (e) {
    a(new Wm(`Error formatting display name.`, i, e));
  }
}
var vh,
  yh = o(() => {
    (rh(), Rm(), qm(), (vh = [`style`, `type`, `fallback`, `languageDisplay`]));
  });
function bh(e) {
  return `${wh}_${e}_${wh}`;
}
function xh(e, t, n, r) {
  r === void 0 && (r = {});
  var i = Sh(e, t, n, r).reduce(function (e, t) {
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
function Sh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.ListFormat ||
      a(
        new Sm(
          `Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,
          xm.MISSING_INTL_API,
        ),
      ));
  var o = Ym(r, Ch);
  try {
    var s = {},
      c = Array.from(n).map(function (e, t) {
        if (typeof e == `object` && e) {
          var n = bh(t);
          return ((s[n] = e), n);
        }
        return String(e);
      });
    return t(i, o)
      .formatToParts(c)
      .map(function (e) {
        return e.type === `literal` ? e : Y(Y({}, e), { value: s[e.value] || e.value });
      });
  } catch (e) {
    a(new Wm(`Error formatting list.`, i, e));
  }
  return n;
}
var Ch,
  wh,
  Th = o(() => {
    (Wf(), Rm(), qm(), rh(), (Ch = [`type`, `style`]), (wh = Date.now()));
  });
function Eh(e, t, n, r) {
  var i = e.locale,
    a = e.onError;
  (r === void 0 && (r = {}),
    Intl.PluralRules ||
      a(
        new Sm(
          `Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,
          xm.MISSING_INTL_API,
        ),
      ));
  var o = Ym(r, Dh);
  try {
    return t(i, o).select(n);
  } catch (e) {
    a(new Wm(`Error formatting plural.`, i, e));
  }
  return `other`;
}
var Dh,
  Oh = o(() => {
    (Rm(), qm(), rh(), (Dh = [`type`]));
  });
function kh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (!!o && $m(i, `relative`, o, a)) || {};
  return t(r, Ym(n, jh, s));
}
function Ah(e, t, n, r, i) {
  (i === void 0 && (i = {}),
    (r ||= `second`),
    Intl.RelativeTimeFormat ||
      e.onError(
        new Sm(
          `Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,
          xm.MISSING_INTL_API,
        ),
      ));
  try {
    return kh(e, t, i).format(n, r);
  } catch (t) {
    e.onError(new Wm(`Error formatting relative time.`, e.locale, t));
  }
  return String(n);
}
var jh,
  Mh = o(() => {
    (rh(), Rm(), qm(), (jh = [`numeric`, `style`]));
  });
function Nh(e, t, n) {
  var r = e.locale,
    i = e.formats,
    a = e.onError;
  n === void 0 && (n = {});
  var o = n.format,
    s = (o && $m(i, `number`, o, a)) || {};
  return t(r, Ym(n, Ih, s));
}
function Ph(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Nh(e, t, r).format(n);
  } catch (t) {
    e.onError(new Wm(`Error formatting number.`, e.locale, t));
  }
  return String(n);
}
function Fh(e, t, n, r) {
  r === void 0 && (r = {});
  try {
    return Nh(e, t, r).formatToParts(n);
  } catch (t) {
    e.onError(new Wm(`Error formatting number.`, e.locale, t));
  }
  return [];
}
var Ih,
  Lh = o(() => {
    (qm(),
      rh(),
      (Ih = [
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
function Rh(e) {
  return typeof (e ? e[Object.keys(e)[0]] : void 0) == `string`;
}
function zh(e) {
  e.onWarn &&
    e.defaultRichTextElements &&
    Rh(e.messages || {}) &&
    e.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`);
}
function Bh(e, t) {
  var n = Qm(t),
    r = Y(Y({}, nh), e),
    i = r.locale,
    a = r.defaultLocale,
    o = r.onError;
  return (
    i
      ? !Intl.NumberFormat.supportedLocalesOf(i).length && o
        ? o(
            new Um(
              `Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
        : !Intl.DateTimeFormat.supportedLocalesOf(i).length &&
          o &&
          o(
            new Um(
              `Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`,
            ),
          )
      : (o &&
          o(
            new Hm(
              `"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`,
            ),
          ),
        (r.locale = r.defaultLocale || `en`)),
    zh(r),
    Y(Y({}, r), {
      formatters: n,
      formatNumber: Ph.bind(null, r, n.getNumberFormat),
      formatNumberToParts: Fh.bind(null, r, n.getNumberFormat),
      formatRelativeTime: Ah.bind(null, r, n.getRelativeTimeFormat),
      formatDate: uh.bind(null, r, n.getDateTimeFormat),
      formatDateToParts: ph.bind(null, r, n.getDateTimeFormat),
      formatTime: dh.bind(null, r, n.getDateTimeFormat),
      formatDateTimeRange: fh.bind(null, r, n.getDateTimeFormat),
      formatTimeToParts: mh.bind(null, r, n.getDateTimeFormat),
      formatPlural: Eh.bind(null, r, n.getPluralRules),
      formatMessage: sh.bind(null, r, n),
      $t: sh.bind(null, r, n),
      formatList: xh.bind(null, r, n.getListFormat),
      formatListToParts: Sh.bind(null, r, n.getListFormat),
      formatDisplayName: _h.bind(null, r, n.getDisplayNames),
    })
  );
}
var Vh = o(() => {
    (Wf(), gh(), yh(), qm(), Th(), ch(), Lh(), Oh(), Mh(), rh());
  }),
  Hh = o(() => {
    (Gf(), rh(), qm(), ch(), gh(), yh(), Th(), Oh(), Mh(), Lh(), Vh());
  });
function Uh(e, t, n) {
  if ((n === void 0 && (n = Error), !e)) throw new n(t);
}
function Wh(e) {
  Uh(
    e,
    "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
  );
}
function Gh(e) {
  return function (t) {
    return e(Xh(t));
  };
}
function Kh(e, t) {
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
var qh,
  Jh,
  Yh,
  Xh,
  Zh = o(() => {
    (Wf(),
      (qh = u(Nf())),
      Hh(),
      (Jh = Y(Y({}, nh), { textComponent: qh.Fragment })),
      (Yh = function (e, t) {
        return qh.isValidElement(e) ? qh.cloneElement(e, { key: t }) : e;
      }),
      (Xh = function (e) {
        return qh.Children.map(e, Yh) ?? [];
      }));
  }),
  Qh = s((e) => {
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
  $h = s((e, t) => {
    t.exports = Qh();
  }),
  eg = s((e, t) => {
    var n = $h(),
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
  tg,
  ng,
  rg,
  ig,
  ag,
  og = o(() => {
    (eg(),
      (tg = u(Nf())),
      (ng =
        typeof window < `u` && !window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
          ? window.__REACT_INTL_CONTEXT__ ||
            (window.__REACT_INTL_CONTEXT__ = tg.createContext(null))
          : tg.createContext(null)),
      ng.Consumer,
      (rg = ng.Provider),
      (ig = rg),
      (ag = ng));
  });
function sg() {
  var e = cg.useContext(ag);
  return (Wh(e), e);
}
var cg,
  lg = o(() => {
    ((cg = u(Nf())), Zh(), og());
  });
function ug(e) {
  return (
    e &&
    Object.keys(e).reduce(function (t, n) {
      var r = e[n];
      return ((t[n] = Om(r) ? Gh(r) : r), t);
    }, {})
  );
}
var dg,
  fg,
  pg = o(() => {
    (Wf(),
      Hh(),
      Rm(),
      Zh(),
      (dg = function (e, t, n, r) {
        for (var i = [], a = 4; a < arguments.length; a++) i[a - 4] = arguments[a];
        var o = ug(r),
          s = sh.apply(void 0, Hf([e, t, n, o], i, !1));
        return Array.isArray(s) ? Xh(s) : s;
      }),
      (fg = function (e, t) {
        var n = e.defaultRichTextElements,
          r = Vf(e, [`defaultRichTextElements`]),
          i = ug(n),
          a = Bh(Y(Y(Y({}, Jh), r), { defaultRichTextElements: i }), t),
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
        return Y(Y({}, a), {
          formatMessage: dg.bind(null, o, a.formatters),
          $t: dg.bind(null, o, a.formatters),
        });
      }));
  });
function mg(e, t) {
  var n = e.values,
    r = Vf(e, [`values`]),
    i = t.values,
    a = Vf(t, [`values`]);
  return Kh(i, n) && Kh(r, a);
}
function hg(e) {
  var t = sg(),
    n = t.formatMessage,
    r = t.textComponent,
    i = r === void 0 ? gg.Fragment : r,
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
      ? gg.createElement(d, null, p)
      : gg.createElement(gg.Fragment, null, p);
}
var gg,
  _g,
  vg = o(() => {
    (Wf(),
      (gg = u(Nf())),
      Zh(),
      lg(),
      (hg.displayName = `FormattedMessage`),
      (_g = gg.memo(hg, mg)),
      (_g.displayName = `MemoizedFormattedMessage`));
  });
function yg(e) {
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
var bg,
  xg,
  Sg = o(() => {
    (Wf(),
      Hh(),
      (bg = u(Nf())),
      Zh(),
      pg(),
      og(),
      (xg = (function (e) {
        Bf(t, e);
        function t() {
          var t = (e !== null && e.apply(this, arguments)) || this;
          return (
            (t.cache = Xm()),
            (t.state = { cache: t.cache, intl: fg(yg(t.props), t.cache), prevConfig: yg(t.props) }),
            t
          );
        }
        return (
          (t.getDerivedStateFromProps = function (e, t) {
            var n = t.prevConfig,
              r = t.cache,
              i = yg(e);
            return Kh(n, i) ? null : { intl: fg(i, r), prevConfig: i };
          }),
          (t.prototype.render = function () {
            return (
              Wh(this.state.intl),
              bg.createElement(ig, { value: this.state.intl }, this.props.children)
            );
          }),
          (t.displayName = `IntlProvider`),
          (t.defaultProps = Jh),
          t
        );
      })(bg.PureComponent)));
  }),
  Cg = o(() => {
    (vg(), Sg(), lg(), Hh(), Wf());
  }),
  wg,
  Tg = o(() => {
    wg = 2147483647;
  });
function Eg(e, t) {
  let n = new Set([e]),
    r = new MutationObserver((a) => {
      let o = n.size;
      for (let e of a) for (let t of e.addedNodes) B(t) && i(t);
      let s = !1;
      for (let t of n)
        t !== e && (!t.isConnected || t.ownerDocument !== e) && (n.delete(t), (s = !0));
      if (s) {
        r.disconnect();
        for (let e of n) r.observe(e, Og);
      }
      (s ||
        n.size !== o ||
        a.some(
          (e) =>
            e.type === `attributes` ||
            [...e.addedNodes, ...e.removedNodes].some(
              (e) => B(e) && (e.matches(Dg) || e.querySelector(Dg) != null),
            ),
        )) &&
        t();
    });
  function i(e) {
    let t = e.querySelectorAll(`*`);
    for (let a of B(e) ? [e, ...t] : t)
      !B(a) ||
        ll(a) ||
        a.shadowRoot == null ||
        n.has(a.shadowRoot) ||
        (n.add(a.shadowRoot), r.observe(a.shadowRoot, Og), i(a.shadowRoot));
  }
  let a = (e) => {
    let n = e.composedPath()[0];
    B(n) && !ll(n) && (i(n), t());
  };
  return (
    r.observe(e, Og),
    i(e),
    e.addEventListener(kg, a),
    () => {
      (r.disconnect(), e.removeEventListener(kg, a));
    }
  );
}
var Dg,
  Og,
  kg,
  Ag = o(() => {
    (bl(),
      Xc(),
      (Dg = `[oai-annotation-container], [oai-annotation-container-text]`),
      (Og = {
        attributes: !0,
        attributeFilter: [`oai-annotation-container`, `oai-annotation-container-text`],
        childList: !0,
        subtree: !0,
      }),
      (kg = `codex:annotation-shadow-root-attached`));
  });
function jg() {
  let e = new Map(),
    t = null,
    n = new Map(),
    r = () => {
      let r = n;
      ((n = new Map()), e.clear(), (t = null));
      for (let [e, t] of r)
        for (let n of t.values())
          Mg(e, {
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
        let r = e.get(t.id)?.deref();
        if (
          r == null ||
          !r.isConnected ||
          !od(t.anchor.pageUrl, window.location.href) ||
          Sc(t.anchor.framePath) !== r.ownerDocument ||
          (t.anchor.frameUrl != null && !od(t.anchor.frameUrl, r.ownerDocument.location.href))
        )
          continue;
        let i =
          t.anchor.kind === `virtual`
            ? { surfaceId: t.anchor.surfaceId, targetId: t.anchor.targetId }
            : void 0;
        for (let e of t.annotationControlChanges ?? []) {
          let a = t.annotationControls?.controls.find((t) => t.callback === e.callback);
          if (a == null) continue;
          let c = e.previousValue ?? qd(a);
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
            Mg(e, {
              callback: r.callback,
              value: r.resetValue,
              action: `reset`,
              virtualTarget: r.virtualTarget,
            });
      for (let [e, t] of s)
        for (let [n, r] of t) {
          let t = l.get(e)?.get(n);
          (t?.value !== r.value || t.action !== r.action) && Mg(e, r);
        }
    },
    clear: r,
  };
}
function Mg(e, { callback: t, value: n, action: r, virtualTarget: i }) {
  (e.isConnected || r === `reset`) &&
    e.dispatchEvent(
      new CustomEvent(`oaiannotationcontrolchange`, {
        bubbles: !0,
        detail: {
          callback: t,
          value: n,
          action: r,
          ...(i == null ? {} : { virtualTarget: { ...i } }),
        },
      }),
    );
}
var Ng = o(() => {
  (af(), gd(), Xc());
});
function Pg(e, t) {
  (t?.controls.length ?? 0) > 0 &&
    !e.annotationFeatures?.includes(`custom-controls`) &&
    (e.annotationFeatures = [...(e.annotationFeatures ?? []), `custom-controls`]);
}
function Fg(e, t, n) {
  (e.annotationFeatures?.includes(`requests`) && t?.(`requests`, e.annotationRequestIncludesPrompt),
    e.kind === `virtual` && t?.(`registered-surface`),
    (n?.controls.length ?? 0) > 0 && t?.(`custom-controls`),
    e.annotationFeatures?.includes(`selectable-containers`) && t?.(`selectable-containers`),
    e.elementMetadata != null && Object.keys(e.elementMetadata).length > 0 && t?.(`metadata`));
}
function Ig(e) {
  let t = yc(e.framePath);
  if (t == null) return !1;
  let n = Tu(t, e.textLocator),
    r = n != null && `host` in n ? n.host : n;
  return B(r) && Zc(r) != null;
}
var Lg = o(() => {
  (al(), Xc(), qu());
});
function Rg() {
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
        if (B(e) && ll(e)) return !1;
        let t = !1;
        !B(e) &&
          !i.has(e) &&
          (i.add(e),
          c.observe(e, { childList: !0, subtree: !0 }),
          e.addEventListener(`load`, l, !0));
        for (let n of B(e) ? [e, ...e.querySelectorAll(`*`)] : e.querySelectorAll(`*`))
          B(n) &&
            !ll(n) &&
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
var zg = o(() => {
  (bl(), Xc());
});
function Bg(e) {
  let t = e.toLowerCase();
  return t.endsWith(`.localhost`) || Hg.has(t);
}
function Vg(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    return !1;
  }
  return t.protocol !== `http:` && t.protocol !== `https:` ? !1 : Bg(t.hostname);
}
var Hg,
  Ug = o(() => {
    Hg = new Set([`localhost`, `127.0.0.1`, `0.0.0.0`, `[::1]`, `::1`]);
  });
function Wg(e) {
  return Vg(e);
}
var Gg = o(() => {
  Ug();
});
function Kg({ getElementAtPoint: e, onInvalidated: t, onRenderingFailed: n }) {
  let r = new Map(),
    i = new WeakSet(),
    a = jl(),
    o = 0,
    s = null,
    c = !1,
    l = !1;
  document.addEventListener(Xg.responseEvent, v);
  let u = new MutationObserver(() => {
    for (let e of r.keys())
      Jg(e) || (r.delete(e), r.size === 0 && u.disconnect(), s?.element === e && h(), t(e));
  });
  function d(e) {
    if (c || !Jg(e)) return !1;
    if (!r.has(e) && !i.has(e)) {
      (i.add(e), (l = !0));
      try {
        qg(e, { type: `probe` });
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
        timer: setTimeout(h, Xg.deadlineMs),
        finish: r,
      }),
        qg(e, { type: `hit-test`, registrationId: n.id, requestId: i, x: t.x, y: t.y }));
    });
  }
  function p(t, n) {
    let r = Yg(t, t.getBoundingClientRect());
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
    return c || !Jg(e) || i?.id !== t || !i.customRendering
      ? !1
      : (qg(e, { type: `render`, registrationId: t, ...n }), i.customRendering);
  }
  function h() {
    if (s == null) return;
    let e = s;
    ((s = null), clearTimeout(e.timer), e.finish(void 0), qg(document, { type: `cancel` }));
  }
  function g() {
    (h(), c || qg(document, { type: `clear` }));
  }
  function _() {
    (g(), (c = !0), u.disconnect(), r.clear(), document.removeEventListener(Xg.responseEvent, v));
  }
  function v(e) {
    if (
      c ||
      !(e instanceof CustomEvent) ||
      typeof e.detail != `string` ||
      e.detail.length > Xg.maxPayloadLength ||
      !(e.target instanceof Element) ||
      !Jg(e.target)
    )
      return;
    let i;
    try {
      i = Hd.safeParse(JSON.parse(e.detail));
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
      (o.type === `disposed` && (r.delete(a), r.size === 0 && u.disconnect()),
        s?.element === a && h(),
        t(a));
      return;
    }
    if (
      s == null ||
      s.element !== a ||
      s.registrationId !== o.registrationId ||
      s.requestId !== o.requestId
    )
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
    let g = o.hit.rect == null ? void 0 : Yg(a, o.hit.rect);
    if (o.hit.rect != null && g == null) {
      f.finish(void 0);
      return;
    }
    f.finish({
      registrationId: d.id,
      id: o.hit.id,
      name: Go(o.hit.name),
      role: Rd(o.hit.role),
      metadata: Ko(o.hit.metadata),
      rect: g ?? void 0,
      customRendering: d.customRendering,
    });
  }
  return { hasSurface: d, hitTest: f, renderSelection: m, cancel: h, clear: g, dispose: _ };
}
function qg(e, t) {
  e.dispatchEvent(new CustomEvent(Xg.requestEvent, { bubbles: !0, detail: JSON.stringify(t) }));
}
function Jg(e) {
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
function Yg(e, t) {
  let n = e.getBoundingClientRect(),
    r = Math.max(0, n.x, t.x),
    i = Math.max(0, n.y, t.y),
    a = Math.min(window.innerWidth, n.right, t.x + t.width),
    o = Math.min(window.innerHeight, n.bottom, t.y + t.height);
  return a > r && o > i ? { x: r, y: i, width: a - r, height: o - i } : null;
}
var Xg,
  Zg = o(() => {
    (Ud(), Js(), Nl(), (Xg = zd));
  });
function Qg({ rootHost: e, onClearDomHover: t, onFeedback: n, onSelected: r, onFallback: i }) {
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
    v = Kg({
      getElementAtPoint: x,
      onInvalidated: (e) => {
        (d == null || d.element === e) && T();
      },
      onRenderingFailed: (e) => {
        (d ?? u)?.element === e && n(p);
      },
    }),
    y = () => {
      document.visibilityState === `hidden` && te();
    };
  return (
    window.addEventListener(`resize`, w),
    document.addEventListener(`scroll`, w, !0),
    document.addEventListener(`visibilitychange`, y),
    window.addEventListener(`pagehide`, te),
    window.visualViewport?.addEventListener(`resize`, w),
    window.visualViewport?.addEventListener(`scroll`, w),
    {
      setEnabled(e) {
        a !== e && ((a = e), e || te());
      },
      hasSurfaceAtPoint(e) {
        return b(e) != null;
      },
      hover(e) {
        return f || d != null
          ? !0
          : ((l = e), b(e) == null ? (ee(), !1) : ((o += 1), v.cancel(), S(), !0));
      },
      select(e) {
        let n = b(e);
        if (n == null) return (te(), !1);
        (te(), E(n), (f = !0));
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
                  ((c = null), a && d === p && r($g(p), p.element));
                });
              })));
          }),
          !0
        );
      },
      clearHover: ee,
      clear: te,
      invalidate: w,
      dispose() {
        (te(),
          v.dispose(),
          g?.disconnect(),
          window.removeEventListener(`resize`, w),
          document.removeEventListener(`scroll`, w, !0),
          document.removeEventListener(`visibilitychange`, y),
          window.removeEventListener(`pagehide`, te),
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
    return V(t.x, t.y, e, `design`, !1);
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
        (E(r),
          v.hitTest(r, e).then((s) => {
            if (a && c === o && !f && d == null) {
              if ((D(), (p = null), n(null), s === void 0 || b(e) !== r)) {
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
      te();
      return;
    }
    (D(), T());
  }
  function T() {
    if (
      ((o += 1), v.cancel(), (f = !1), (p = null), n(null), d != null && !v.hasSurface(d.element))
    ) {
      te();
      return;
    }
    (u != null &&
      !v.renderSelection(u.element, u.hit.registrationId, {
        hoveredId: u.hit.id,
        selectedId: null,
      }) &&
      D(),
      S());
  }
  function E(e) {
    m !== e &&
      ((g ??= new ResizeObserver(_)),
      g.disconnect(),
      (m = e),
      (h = e.getBoundingClientRect()),
      g.observe(e));
  }
  function D() {
    u != null &&
      (v.renderSelection(u.element, u.hit.registrationId, { hoveredId: null, selectedId: null }),
      (u = null));
  }
  function ee() {
    ((l = null),
      !(d != null || f) &&
        ((o += 1),
        v.cancel(),
        s != null && (window.cancelAnimationFrame(s), (s = null)),
        D(),
        (p = null),
        n(null)));
  }
  function te() {
    ((f = !1),
      (d = null),
      c != null && (window.cancelAnimationFrame(c), (c = null)),
      ee(),
      v.clear(),
      g?.disconnect(),
      (m = null),
      (h = null));
  }
}
function $g({ hit: e, point: t }) {
  return {
    kind: `virtual`,
    surfaceId: e.registrationId,
    targetId: e.id,
    elementName: e.name,
    elementMetadata: e.metadata,
    pageUrl: id(),
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
var e_ = o(() => {
  (bl(), gd(), Zg());
});
function t_(e, t, { preserveTyping: n }) {
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
var n_ = o(() => {
  Xc();
});
function r_(
  e,
  {
    viewport: t = { width: window.innerWidth, height: window.innerHeight },
    viewportScale: n,
    zoomFactor: r = 1,
  } = {},
) {
  return _s(e, { viewport: t, viewportScale: n, zoomFactor: r });
}
function i_(e) {
  if (e.length === 0) return null;
  let t = Math.min(...e.map((e) => e.x)),
    n = Math.min(...e.map((e) => e.y)),
    r = Math.max(...e.map((e) => e.x + e.width)),
    i = Math.max(...e.map((e) => e.y + e.height));
  return { x: t, y: n, width: r - t, height: i - n };
}
function a_(e, t = rd(e), n = null) {
  if (t == null) return null;
  let r = E_(t, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  if (r == null) return null;
  let i = document,
    a = window;
  for (let t of e.framePath) {
    let e = bc(i, t);
    if (e == null || ((r = S_(r, e)), r == null)) return null;
    let n = e.getBoundingClientRect(),
      o = jc(a);
    if (
      ((r = E_(r, { x: o.x + n.left, y: o.y + n.top, width: n.width, height: n.height })),
      r == null)
    )
      return null;
    let s = nc(e);
    if (s == null) return null;
    ((a = s), (i = s.document));
  }
  let o = jc(a),
    s =
      n?.isConnected === !0 && n.ownerDocument === i
        ? n
        : e.kind === `element` && e.selector != null
          ? xc(i, e.selector)
          : null,
    c = s == null ? null : C_(s, a);
  for (let t of e.scrollContainers ?? []) {
    let e = xc(i, t.selector);
    if (e == null || (c != null && !c.has(e))) continue;
    let n = a.getComputedStyle(e);
    if (
      ((r = D_(r, T_(e, o), {
        x: Zs(n.overflowX || n.overflow),
        y: Zs(n.overflowY || n.overflow),
      })),
      r == null)
    )
      return null;
  }
  return r;
}
function o_(e) {
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
    if (((i = S_(i, o, { x: 0, y: 0 }, !0)), i == null)) return null;
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
      (i = E_(c(i), {
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
function s_(e, t, { framePath: n = [], frameUrl: r = null } = {}) {
  let i = yc(n) ?? window,
    a = jc(i),
    o = { x: t.x - a.x, y: t.y - a.y },
    s = { x: e.x - a.x, y: e.y - a.y, width: e.width, height: e.height },
    c = Ec(i, o),
    l = id(),
    u = new Hl(l).getRegionDocumentContext({
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
function c_(e) {
  let t = O_(e.anchor, e.markerViewportPoint);
  return e.viewportSize == null
    ? t
    : t == null
      ? e.viewportSize
      : {
          height: Math.max(e.viewportSize.height, t.height),
          width: Math.max(e.viewportSize.width, t.width),
        };
}
function l_() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`)?.matches ? `dark` : `light`;
}
function u_() {
  return { height: window.innerHeight, width: window.innerWidth };
}
function d_(e, t, n, r) {
  return k_(e, t, n, r)
    ? `hover-box google-docs-annotation-box google-docs-element-box`
    : `hover-box`;
}
function f_(e, t = b_(), { includeElementFrameScroll: n = !1, markerPointInset: r = N_ } = {}) {
  let i = yc(e.framePath),
    a = Oc(e, i ?? window),
    o = a.x + lu(e, i ?? window);
  if (e.kind !== `element` && i != null && i !== window) {
    let n = jc(i);
    return {
      x: M_(n.x + (e.point.xPercent / 100) * i.innerWidth - o, r, t.width - r),
      y: n.y + e.point.y - (e.isFixed ? 0 : i.scrollY) - a.y,
    };
  }
  let s = n && e.kind === `element` && i != null && i !== window ? i.scrollY : 0;
  return {
    x: M_((e.point.xPercent / 100) * t.width - o, r, t.width - r),
    y: (e.isFixed ? e.point.y : e.point.y - t.scrollY - s) - a.y,
  };
}
function p_(e, t) {
  return t == null ? e : { ...e, height: t.height, width: t.width };
}
function m_(e, t, { includeElementFrameScroll: n = !1, viewportSize: r, zoomFactor: i }) {
  let a = f_(e, p_(t, r), { includeElementFrameScroll: n, markerPointInset: N_ / i });
  return { x: a.x * i, y: a.y * i };
}
function h_(e, t, n) {
  let r = rd(e),
    i =
      r == null
        ? null
        : E_(r, { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight }),
    a = a_(e, r, n.liveElement);
  if (a == null || i == null) return null;
  let o = m_(e, t, n),
    s = a.x !== i.x || a.width !== i.width,
    c = a.y !== i.y || a.height !== i.height,
    l = x_(a, n.zoomFactor);
  return (!s || (o.x >= l.x && o.x <= l.x + l.width)) &&
    (!c || (o.y >= l.y && o.y <= l.y + l.height))
    ? o
    : null;
}
function g_(e, t, n) {
  let r = p_(b_(), n),
    i = N_ / t,
    a = f_(e, r, { markerPointInset: i });
  return { x: a.x, y: M_(a.y, i, r.height - i) };
}
function __(e, t, n, r) {
  return k_(e, t, n, r)
    ? `posted-region-highlight google-docs-annotation-box google-docs-region-box`
    : `posted-region-highlight`;
}
function v_(e, t, n) {
  let r = x_(e, t);
  return { borderRadius: n, left: r.x, top: r.y, width: r.width, height: r.height };
}
function y_(e, t, n, r) {
  return k_(e, t, n, r)
    ? `hover-box region-box google-docs-annotation-box google-docs-region-box`
    : `hover-box region-box`;
}
function b_() {
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
function x_(e, t) {
  return { x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t };
}
function S_(e, t, n = jc(t.ownerDocument.defaultView ?? window), r = !1) {
  let i = t.ownerDocument.defaultView ?? window,
    a = e,
    o = C_(t, i),
    s = $s(t);
  for (; s != null && s !== i.document.body && s !== i.document.documentElement;) {
    if (!o.has(s)) {
      s = $s(s);
      continue;
    }
    let e = i.getComputedStyle(s),
      t = Zs(e.overflowX || e.overflow),
      c = Zs(e.overflowY || e.overflow);
    if ((t || c) && ((a = D_(a, T_(s, n, r), { x: t, y: c })), a == null)) return null;
    s = $s(s);
  }
  return a;
}
function C_(e, t) {
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
        !w_(t.getComputedStyle(i), e);
      )
        i = $s(i);
    if (i == null || i === t.document.body || i === t.document.documentElement) break;
    (n.add(i), (r = i));
  }
  return n;
}
function w_(e, t) {
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
function T_(e, t, n = !1) {
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
function E_(e, t) {
  return D_(e, t, { x: !0, y: !0 });
}
function D_(e, t, n) {
  let r = n.x ? Math.max(e.x, t.x) : e.x,
    i = n.y ? Math.max(e.y, t.y) : e.y,
    a = n.x ? Math.min(e.x + e.width, t.x + t.width) : e.x + e.width,
    o = n.y ? Math.min(e.y + e.height, t.y + t.height) : e.y + e.height;
  return a <= r || o <= i ? null : { x: r, y: i, width: a - r, height: o - i };
}
function O_(e, t) {
  if (t == null) return;
  let n = e.point.xPercent <= 0 ? 0 : t.x / (e.point.xPercent / 100);
  return {
    height: Math.max(window.innerHeight, t.y + N_),
    width: Math.max(window.innerWidth, n, t.x + N_, e.rect.x + e.rect.width),
  };
}
function k_(e, t, n, r) {
  return A_(e) && j_(t, n, r);
}
function A_(e) {
  return e == null ? ds(id()) : Hl.isGoogleDocsAnchor(e) || ds(e.pageUrl);
}
function j_(e, t, n) {
  return e == null || t <= 0 || n <= 0 ? !1 : e.width >= t * P_ && e.height >= n * F_;
}
function M_(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var N_,
  P_,
  F_,
  I_ = o(() => {
    (Js(), gd(), Xc(), Ul(), qu(), (N_ = 16 + Ks / 2), (P_ = 0.45), (F_ = 0.3));
  });
function L_(e, t, n) {
  return e.anchor.kind === `virtual`
    ? {
        type: `virtual`,
        additionalSelections: [],
        themeVariant: e.themeVariant ?? l_(),
        value: e.anchor,
        viewportSize: e.viewportSize,
      }
    : e.anchor.kind === `text`
      ? { type: `text`, themeVariant: e.themeVariant ?? l_(), value: e.anchor }
      : e.anchor.kind === `region`
        ? {
            type: `region`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => R_(e, n)),
            themeVariant: e.themeVariant ?? l_(),
            value: e.anchor,
            viewportSize: u_(),
          }
        : {
            type: `element`,
            additionalSelections: (e.additionalAnchors ?? []).map((e) => R_(e, n)),
            element: t,
            markerViewportPoint: e.markerViewportPoint,
            themeVariant: e.themeVariant ?? l_(),
            value: e.anchor,
            viewportSize: u_(),
          };
}
function R_(e, t) {
  return e.kind === `element`
    ? { anchor: e, liveElement: $u(e, void 0, t) }
    : { anchor: e, liveElement: null };
}
function z_(e, t, n) {
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
  let a = (e.anchorState.additionalAnchors ?? []).map((e) => R_(e, t));
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
  let o = $u(r, void 0, t);
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
function B_(e, t, n) {
  if (e?.target.mode !== `create`) return null;
  let r = e.anchor,
    i = r.type === `text` ? [] : [U_(r).primary, ...r.additionalSelections];
  return (
    t.find(
      (t) =>
        !e.commentIdsAtOpen.has(t.id) &&
        [t.anchor, ...(t.additionalAnchors ?? [])].some((e) =>
          r.type === `text` ? As(e, r.value) : e.kind !== `text` && i.some((t) => el(R_(e, n), t)),
        ),
    ) ?? null
  );
}
function V_(e) {
  return e.type === `element` ? q_(e.element, e.value, e.viewportSize) : e.value;
}
function H_(e, t) {
  return e.type === `element`
    ? e.element?.isConnected && e.element.ownerDocument === Sc(e.value.framePath)
      ? e.element
      : $u(e.value, void 0, t)
    : null;
}
function U_(e) {
  return {
    additional: e.additionalSelections,
    primary:
      e.type === `element`
        ? { anchor: e.value, liveElement: e.element }
        : { anchor: e.value, liveElement: null },
  };
}
function W_(e, t, n) {
  let r = n?.themeVariant ?? e.themeVariant,
    i = n?.viewportSize ?? e.viewportSize;
  return t.primary.anchor.kind === `virtual`
    ? {
        type: `virtual`,
        additionalSelections: [],
        themeVariant: r,
        value: t.primary.anchor,
        viewportSize: i,
      }
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
function G_(e, t) {
  return e.anchor.kind === `element` ? q_(e.liveElement, e.anchor, t) : e.anchor;
}
function K_(
  e,
  t,
  { clipToVisibleArea: n = !1, selectionIndexOffset: r = 0, viewportSize: i } = {},
) {
  return e.flatMap((e, a) => {
    let o = G_(e, i),
      s = e.anchor.kind === `element` && e.liveElement != null ? Ju(e.liveElement) : null,
      c = s?.rect ?? rd(o),
      l = c == null ? null : n ? a_(o, c, e.liveElement) : c;
    return l == null
      ? []
      : [
          {
            borderRadius: s?.borderRadius,
            className:
              o.kind === `region` ? y_(o, c, t.width, t.height) : d_(o, c, t.width, t.height),
            isPageAnnotation: Yu(o),
            key: `${e.anchor.kind}:${e.anchor.framePath.join(`>`)}:${e.anchor.selector ?? e.anchor.elementPath}:${e.anchor.rect.x}:${e.anchor.rect.y}:${a}`,
            rect: l,
            selectionIndex: r + a,
          },
        ];
  });
}
function q_(e, t, n) {
  return e == null || !e.isConnected ? t : Zu(e, t, n);
}
var J_ = o(() => {
  (Js(), al(), gd(), I_(), Xc());
});
function Y_(e, t) {
  return e.anchor.kind === `element` ? $u(e.anchor, e.id, t) : null;
}
function X_(e, t, n = !1, r = null) {
  if (e.anchor.kind === `text`)
    return { ...e, ...(r == null ? {} : { anchor: r }), selectionSourceIndexes: [0] };
  let i = c_(e),
    a = [e.anchor, ...(e.additionalAnchors ?? [])].flatMap((r, a) => {
      if (r.kind !== `element`) return [{ anchor: r, sourceIndex: a }];
      let o = $u(r, a === 0 ? e.id : void 0, t);
      return o == null
        ? !n && r.selector != null && od(r.pageUrl, id())
          ? []
          : [{ anchor: r, sourceIndex: a }]
        : (a === 0 && t.set(e.id, o),
          [{ anchor: Zu(o, r, i, a === 0 ? e.markerViewportPoint : void 0), sourceIndex: a }]);
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
function Z_(e, t, n) {
  if (e.anchor.kind === `text` || t.kind === `text`) return e;
  let r = [e.anchor, ...(e.additionalAnchors ?? [])].filter((e, t) => t !== n);
  return {
    ...e,
    anchor: t,
    additionalAnchors: r.length === 0 ? void 0 : r,
    markerViewportPoint: n === 0 ? e.markerViewportPoint : void 0,
  };
}
var Q_ = o(() => {
  (gd(), I_());
});
function $_(e, t, n, r = !1) {
  let i = u_(),
    a = ed(e),
    o = { x: t, y: n },
    s = Xu(e, a ?? { x: t, y: n, width: 0, height: 0 }, o, a != null && Tc(e), i.width);
  return (
    r && (s.annotationFeatures = [`selectable-containers`]),
    { anchor: s, themeVariant: l_(), viewportRect: a, viewportPoint: o, viewportSize: i }
  );
}
function ev(e, t) {
  let { anchor: n } = e;
  return (od(n.pageUrl, id()) &&
  (n.kind !== `element` || t != null) &&
  (n.kind !== `text` || tu(n) != null)
    ? a_(n, e.viewportRect, t)
    : null) == null
    ? { ...e, placement: `top-left`, viewportRect: null, viewportPoint: { x: 0, y: 0 } }
    : e;
}
function tv(e, t, n) {
  if (e.anchor.kind === `text`) return tu(e.anchor) ?? nv(e.anchor, n, e.themeVariant);
  if (e.anchor.kind === `region` || e.anchor.kind === `virtual`)
    return {
      ...nv(e.anchor, n, e.themeVariant),
      additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    };
  let r = u_(),
    i = t == null ? e.anchor : Zu(t, e.anchor, r, e.markerViewportPoint),
    a = g_(i, n);
  return {
    anchor: i,
    additionalAnchors: e.additionalAnchors?.length ? e.additionalAnchors : void 0,
    themeVariant: e.themeVariant ?? l_(),
    viewportRect: t == null ? rd(e.anchor) : ed(t),
    viewportPoint: a,
    viewportSize: r,
  };
}
function nv(e, t, n) {
  let r = b_();
  return {
    anchor: e,
    themeVariant: n ?? l_(),
    viewportRect: rd(e),
    viewportPoint: g_(e, t),
    viewportSize: { width: r.width, height: r.height },
  };
}
function rv(e, t, n) {
  if (e.anchor.type === `text`)
    return tu(e.anchor.value) ?? nv(e.anchor.value, t, e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let n = u_();
    return {
      ...nv(e.anchor.value, t, e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => G_(e, n)),
    };
  }
  let r = e.anchor.element?.isConnected ? e.anchor.element : null,
    i = r == null ? null : ed(r),
    a = u_(),
    o = r == null ? e.anchor.value : Zu(r, e.anchor.value, a);
  return {
    anchor: o,
    additionalAnchors: e.anchor.additionalSelections.map((e) => G_(e, a)),
    cardViewportRect:
      e.target.mode === `design`
        ? (e.anchor.cardViewportRect ??
          (i == null ? void 0 : r_(i, { viewportScale: n, zoomFactor: t })))
        : void 0,
    themeVariant: e.anchor.themeVariant ?? l_(),
    viewportRect: i,
    viewportPoint: g_(o, t),
    viewportSize: a,
  };
}
function iv(e, t, n, r) {
  let i = e.target;
  if (i.mode !== `edit`) return null;
  let a = t.find((e) => e.id === i.commentId) ?? null;
  if (a == null) return null;
  if (e.anchor.type === `text`)
    return tu(e.anchor.value) ?? nv(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant);
  if (e.anchor.type === `region` || e.anchor.type === `virtual`) {
    let t = u_();
    return {
      ...nv(e.anchor.value, r, a.themeVariant ?? e.anchor.themeVariant),
      additionalAnchors: e.anchor.additionalSelections.map((e) => G_(e, t)),
    };
  }
  let o = H_(e.anchor, n),
    s = u_(),
    c = o == null ? e.anchor.value : Zu(o, e.anchor.value, s, e.anchor.markerViewportPoint);
  return {
    anchor: c,
    additionalAnchors: e.anchor.additionalSelections.map((e) => G_(e, s)),
    themeVariant: a.themeVariant,
    viewportRect: o == null ? rd(c) : ed(o),
    viewportPoint: g_(c, r),
    viewportSize: s,
  };
}
var av = o(() => {
    (J_(), gd(), Xc(), qu(), I_());
  }),
  ov = s((e) => {
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
  sv = s((e, t) => {
    t.exports = ov();
  });
function cv({ className: e, appearance: t = `numbered`, fillColor: n, children: r }) {
  let i = t === `avatar` || t === `unread-avatar`,
    a = {
      avatar: `var(--color-surface)`,
      "unread-avatar": `var(--color-background-info-solid)`,
      review: n ?? `currentColor`,
      numbered: n ?? `currentColor`,
    }[t];
  return (0, uv.jsxs)(`span`, {
    "aria-hidden": `true`,
    className: e,
    style: {
      display: `grid`,
      isolation: `isolate`,
      pointerEvents: `none`,
      borderRadius: `50% 50% 50% ${dv}px`,
      backgroundColor: a,
      boxShadow:
        i || t === `review`
          ? `var(--shadow-lg-stronger, 0px 4px 8px -2px rgb(0 0 0 / 16%))`
          : void 0,
    },
    children: [
      (0, uv.jsx)(`span`, {
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
          color: i
            ? t === `unread-avatar`
              ? `var(--color-text-info-solid)`
              : `var(--color-text)`
            : void 0,
        },
        children: r,
      }),
      (0, uv.jsx)(`span`, {
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
function lv({ width: e, height: t, strokeWidth: n }) {
  let r = n / 2,
    i = e / 2 - r,
    a = t / 2 - r,
    o = dv - r;
  return `M${e / 2} ${r}a${i} ${a} 0 0 1 0 ${t - n}H${dv}a${o} ${o} 0 0 1-${o}-${o}V${t / 2}A${i} ${a} 0 0 1 ${e / 2} ${r}Z`;
}
var uv,
  dv,
  fv,
  pv = o(() => {
    ((uv = sv()), (dv = 3), (fv = `#339cff`), `${fv}`);
  });
function mv(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = mv(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function hv() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = mv(e)) && (r && (r += ` `), (r += t));
  return r;
}
var gv = o(() => {}),
  _v,
  vv,
  yv,
  bv = o(() => {
    ((_v = [0.4, 0, 0.2, 1]),
      (vv = { rotate: 0, y: 0, scale: 1 }),
      (yv = { duration: 0.52, ease: _v, times: [0, 0.22, 0.72, 1] }),
      { ...yv },
      { ...yv },
      { ...vv });
  }),
  xv,
  Sv = o(() => {
    (bv(), (xv = [0.23, 1, 0.32, 1]));
  });
function Cv(
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
var wv,
  Tv,
  Q,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv = o(() => {
    (pv(),
      Js(),
      Sv(),
      (wv = `#000000`),
      (Tv = `#0069FB`),
      (Q = {
        ...Gs,
        fill: fv,
        hotspotByMode: {
          add: { x: Gs.width / 2, y: Gs.height / 2 },
          comment: Gs.hotspot,
          text: { x: 7, y: 13.5 },
        },
        path: lv({ width: Gs.width, height: Gs.height, strokeWidth: 1.65 }),
        stroke: `white`,
        strokeWidth: 1.65,
      }),
      (Ev = (Q.hotspotByMode.comment.x / Q.width) * 100),
      (Dv = ((Q.hotspotByMode.comment.y + (Q.width - Q.height) / 2) / Q.width) * 100),
      (Ov = `translate(-${Ev}%,-${Dv}%)`),
      (kv = {
        position: `fixed`,
        inset: 0,
        pointerEvents: `none`,
        fontSize: `13px`,
        fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`,
      }),
      (Av = `
.hover-box{position:fixed;box-sizing:border-box;border-radius:0;border:2px solid ${Tv};background:color-mix(in srgb,${Tv} 3%,transparent);box-shadow:inset 0 0 0 1px rgba(255,255,255,.28);pointer-events:none}
.text-selection-highlight{position:fixed;box-sizing:border-box;background:#128dff66;pointer-events:none}
.flex-item-overlay{position:fixed;box-sizing:border-box;border-radius:0;border:1px solid rgba(2,133,255,.52);background:rgba(18,141,255,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.12);pointer-events:none}
.interaction-layer{position:fixed;inset:0;z-index:0;width:100vw;height:100vh;max-width:none;max-height:none;margin:0;border:0;padding:0;background:transparent;pointer-events:none}
.interaction-layer::backdrop{background:transparent}
.interaction-blocker{position:absolute;inset:0;z-index:0;pointer-events:auto;touch-action:pan-x pan-y}
.annotation-selection-cursor{position:fixed;z-index:1;display:block}
.annotation-selection-modifier-cursor{z-index:2;color:${wv};paint-order:stroke fill;stroke:${Q.stroke};stroke-linejoin:round;stroke-width:2px}
.annotation-selection-comment-cursor{overflow:visible}
.annotation-selection-comment-cursor[data-browser-comment-annotation-selection-cursor-mode="text"]{z-index:2}
.annotation-selection-cursor-bubble{transform:translate(0,0) scale(1);transform-box:view-box;transform-origin:0 0;transition:transform 150ms cubic-bezier(${xv.join(`,`)})}
.annotation-selection-cursor-beam{opacity:0;transition:opacity 150ms cubic-bezier(${xv.join(`,`)})}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-bubble{transform:translate(${12 + Q.hotspotByMode.comment.x - Q.hotspotByMode.text.x}px,${-2 + Q.hotspotByMode.comment.y - Q.hotspotByMode.text.y}px) scale(.55)}
[data-browser-comment-annotation-selection-cursor-mode="text"] .annotation-selection-cursor-beam{opacity:1}
@media(prefers-reduced-motion:reduce){.annotation-selection-cursor-bubble,.annotation-selection-cursor-beam{transition:none}}
[data-browser-comment-annotation-selection-modifier-active] .marker{cursor:none}
.annotation-selection-target-hover{border-color:color-mix(in srgb,${Tv} 80%,black)}
.annotation-selection-remove-hover{background:color-mix(in srgb,${Tv} 20%,transparent)}
.region-box{border-width:2px;border-style:dashed}
.posted-region-highlight{position:fixed;box-sizing:border-box;border-radius:0;background:color-mix(in srgb,${Tv} 3%,transparent);pointer-events:none}
.google-docs-annotation-box{background:transparent;box-shadow:none}
.google-docs-element-box{border-color:transparent}
.markers-layer{position:fixed;inset:0;z-index:1;pointer-events:none}
.marker{position:fixed;border:0;background:transparent;transform:${Ov};transform-origin:${Ev}% ${Dv}%;pointer-events:auto;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.marker-icon{position:absolute;inset:0;display:block;width:100%;height:100%;pointer-events:none}
.saved-marker{width:var(--browser-sidebar-saved-marker-size);height:var(--browser-sidebar-saved-marker-size)}
.draft-marker{width:var(--browser-sidebar-draft-marker-size);height:var(--browser-sidebar-draft-marker-size)}
.marker-label{position:relative;color:${Q.stroke};font-size:var(--browser-sidebar-marker-label-font-size);font-weight:700;line-height:1;pointer-events:none}
.marker-motion{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;pointer-events:none;transform-origin:bottom left;scale:1;transition:scale 150ms cubic-bezier(${xv.join(`,`)})}
.marker:hover .marker-motion,.marker[data-selected="true"] .marker-motion{scale:1.08}
@media(prefers-reduced-motion:reduce){.marker-motion{transition:none}}
${Ws}
`));
  });
function Mv({ className: e, mode: t, ...n }) {
  return t === `add`
    ? (0, Lv.jsx)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: hv(e, `annotation-selection-modifier-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Q.height,
        viewBox: `0 0 20 20`,
        width: Q.width,
        children: (0, Lv.jsx)(`path`, {
          d: `M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z`,
          fill: `currentColor`,
        }),
      })
    : (0, Lv.jsxs)(`svg`, {
        ...n,
        "aria-hidden": `true`,
        className: hv(e, `annotation-selection-comment-cursor`),
        "data-browser-comment-annotation-selection-cursor-mode": t,
        height: Q.height,
        viewBox: `0 0 ${Q.width} ${Q.height}`,
        width: Q.width,
        children: [
          (0, Lv.jsx)(`g`, {
            className: `annotation-selection-cursor-beam annotation-selection-modifier-cursor`,
            transform: `translate(${Q.hotspotByMode.comment.x - Q.hotspotByMode.text.x} ${Q.hotspotByMode.comment.y - Q.hotspotByMode.text.y})`,
            children: (0, Lv.jsx)(`path`, {
              d: `M3 5H5C5.81 5 6.54 5.35 7 5.91C7.46 5.35 8.19 5 9 5H11V6.5H9C8.31 6.5 7.75 7.06 7.75 7.75V19.25C7.75 19.94 8.31 20.5 9 20.5H11V22H9C8.19 22 7.46 21.65 7 21.09C6.54 21.65 5.81 22 5 22H3V20.5H5C5.69 20.5 6.25 19.94 6.25 19.25V7.75C6.25 7.06 5.69 6.5 5 6.5H3Z`,
              fill: `currentColor`,
            }),
          }),
          (0, Lv.jsx)(`path`, {
            className: `annotation-selection-cursor-bubble`,
            d: Q.path,
            fill: Q.fill,
            stroke: Q.stroke,
            strokeWidth: Q.strokeWidth,
          }),
        ],
      });
}
function Nv({
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
  return (0, Lv.jsxs)(Lv.Fragment, {
    children: [
      e.map((e) =>
        (0, Lv.jsx)(
          `div`,
          {
            className: `${e.className}${o === e.selectionIndex ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover":
              o === e.selectionIndex ? e.selectionIndex : void 0,
            style: v_(e.rect, l, e.borderRadius),
          },
          e.key,
        ),
      ),
      r == null
        ? null
        : (0, Lv.jsx)(`div`, {
            className: `${n}${o === 0 ? ` annotation-selection-target-hover` : ``}`,
            "data-browser-comment-annotation-selection-linked-hover": o === 0 ? 0 : void 0,
            style: v_(r, l, t),
          }),
      i == null
        ? null
        : (0, Lv.jsx)(`div`, {
            className: `${d_(null, i.rect, c, s)}${a ? ` annotation-selection-target-hover annotation-selection-remove-hover` : ``}`,
            "data-browser-comment-annotation-selection-hover": !0,
            "data-browser-comment-annotation-selection-remove-hover": a || void 0,
            style: v_(i.rect, l, i.borderRadius),
          }),
    ],
  });
}
function Pv({
  commentNumber: e,
  isSelected: t,
  markerPoint: n,
  onClick: r,
  onMouseEnter: i,
  onMouseLeave: a,
}) {
  let o = sg().formatMessage(
    {
      id: `browserSidebarCommentRuntime.commentMarkerLabel`,
      defaultMessage: `Browser comment {commentNumber}`,
      description: `Accessible label for a placed browser comment marker`,
    },
    { commentNumber: e },
  );
  return (0, Lv.jsx)(`button`, {
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
    children: (0, Lv.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, Lv.jsx)(cv, { className: `marker-icon`, fillColor: Q.fill }),
        (0, Lv.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Fv({ commentNumber: e, markerPoint: t, onFocusEditor: n }) {
  let r = sg().formatMessage({
    id: `browserSidebarCommentRuntime.draftCommentMarkerLabel`,
    defaultMessage: `Focus unsaved browser comment`,
    description: `Accessible label for the temporary marker shown while creating a browser comment`,
  });
  return (0, Lv.jsx)(`button`, {
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
    children: (0, Lv.jsxs)(`span`, {
      className: `marker-motion`,
      children: [
        (0, Lv.jsx)(cv, { className: `marker-icon`, fillColor: Q.fill }),
        e == null ? null : (0, Lv.jsx)(`span`, { className: `marker-label`, children: e }),
      ],
    }),
  });
}
function Iv({ snapshot: e, viewportScale: t, zoomFactor: n }) {
  return (0, Lv.jsxs)(`div`, {
    className: `element-metadata-tooltip`,
    style: Cv(e.rect, { viewportScale: t, zoomFactor: n }),
    children: [
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-tag`,
        children: e.tagName,
      }),
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.size,
      }),
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, Lv.jsx)(_g, {
          id: `browserSidebarCommentRuntime.elementMetadata.color`,
          defaultMessage: `color`,
          description: `Label for the computed text color row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.color,
      }),
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-label`,
        children: (0, Lv.jsx)(_g, {
          id: `browserSidebarCommentRuntime.elementMetadata.font`,
          defaultMessage: `font`,
          description: `Label for the computed font row in the browser comment hover metadata tooltip`,
        }),
      }),
      (0, Lv.jsx)(`div`, {
        className: `element-metadata-cell element-metadata-value`,
        children: e.font,
      }),
    ],
  });
}
var Lv,
  Rv = o(() => {
    (pv(), gv(), Cg(), I_(), jv(), (Lv = sv()));
  });
function zv(e, t) {
  if (e == null) return !1;
  if (Vv(e, t)) return !0;
  let n = Ac(e),
    r = Hv(e, t, n);
  return r == null
    ? n !== window && (n.scrollBy(t.x, t.y), !0)
    : ((r.scrollLeft += t.x), (r.scrollTop += t.y), !0);
}
function Bv(e, t) {
  return e.deltaMode === Gv
    ? { x: e.deltaX * qv, y: e.deltaY * qv }
    : e.deltaMode === Kv
      ? { x: e.deltaX * t.innerWidth, y: e.deltaY * t.innerHeight }
      : { x: e.deltaX, y: e.deltaY };
}
function Vv(e, t) {
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
function Hv(e, t, n) {
  let r = e;
  for (; r != null;) {
    if (Uv(r, t, n)) return r;
    if (r === n.document.body || r === n.document.documentElement) return null;
    r = $s(r);
  }
  return null;
}
function Uv(e, t, n) {
  let r = n.getComputedStyle(e);
  return (
    (Xs(r.overflowY) && Wv(t.y, e.scrollTop, e.clientHeight, e.scrollHeight)) ||
    (Xs(r.overflowX) && Wv(t.x, e.scrollLeft, e.clientWidth, e.scrollWidth))
  );
}
function Wv(e, t, n, r) {
  return e < 0 ? t > 0 : e > 0 && t < r - n;
}
var Gv,
  Kv,
  qv,
  Jv = o(() => {
    (Xc(), (Gv = 1), (Kv = 2), (qv = 16));
  });
function Yv(e, t) {
  return oc((n) => {
    let r = () => {
      (Zv(n, e, t), $v(n, e), Qv(n, e));
    };
    r();
    let i = new MutationObserver(r);
    return (
      i.observe(n.documentElement, Wc),
      () => {
        (i.disconnect(), ty(n), n.getElementById(cy)?.remove());
        for (let e of n.querySelectorAll(`[${oy}]`)) e.removeAttribute(oy);
      }
    );
  });
}
function Xv(e, t) {
  let n = new Set(ay(e));
  (n.add(t), e.setAttribute(oy, Array.from(n).join(` `)));
}
function Zv(e, t, n) {
  let r = new Map();
  for (let i of t) {
    if (
      !od(i.anchor.pageUrl, window.location.href) ||
      i.anchor.kind !== `element` ||
      i.anchor.selector == null ||
      Sc(i.anchor.framePath) !== e
    )
      continue;
    let t = n.get(i.id),
      a = t?.isConnected && t.ownerDocument === e ? t : nd(e, i.anchor);
    if (a != null) {
      n.set(i.id, a);
      let e = r.get(a) ?? new Set();
      (e.add(i.draftAttribute), r.set(a, e));
    }
  }
  for (let t of e.querySelectorAll(`[${oy}]`)) B(t) && (iy(t, r.get(t)), r.delete(t));
  for (let [e, t] of r) iy(e, t);
}
function Qv(e, t) {
  let n = vs(
      t.filter(
        (t) =>
          od(t.anchor.pageUrl, window.location.href) &&
          Sc(t.anchor.framePath) === e &&
          (t.anchor.frameUrl == null || od(t.anchor.frameUrl, e.location.href)),
      ),
      oy,
    ),
    r = e.getElementById(cy);
  if (n.length === 0) {
    r?.remove();
    return;
  }
  let i = r instanceof HTMLStyleElement ? r : e.createElement(`style`);
  ((i.id = cy),
    i.textContent !== n && (i.textContent = n),
    i.parentElement ?? (e.head ?? e.documentElement).append(i));
}
function $v(e, t) {
  let n = new Map(t.map((e) => [e.draftAttribute, e]));
  for (let t of e.querySelectorAll(`[${oy}], [${sy}]`)) {
    if (!B(t)) continue;
    let e = ey(
      ay(t)
        .map((e) => n.get(e))
        .filter((e) => e != null),
    );
    if (e == null) {
      ny(t);
      continue;
    }
    (t.hasAttribute(sy) || t.setAttribute(sy, e.previousValue), ry(t, e.value));
  }
}
function ey(e) {
  for (let t = e.length - 1; t >= 0; --t) {
    let n = e[t]?.text;
    if (n != null && n.value !== n.previousValue) return n;
  }
  return null;
}
function ty(e) {
  for (let t of e.querySelectorAll(`[${sy}]`)) B(t) && ny(t);
}
function ny(e) {
  let t = e.getAttribute(sy);
  t != null && (ry(e, t), e.removeAttribute(sy));
}
function ry(e, t) {
  e.textContent !== t && (e.textContent = t);
}
function iy(e, t) {
  let n = t == null ? `` : Array.from(t).join(` `);
  if (n.length === 0) {
    e.removeAttribute(oy);
    return;
  }
  e.getAttribute(oy) !== n && e.setAttribute(oy, n);
}
function ay(e) {
  return (e.getAttribute(oy) ?? ``).split(/\s+/).filter((e) => e.length > 0);
}
var oy,
  sy,
  cy,
  ly = o(() => {
    (Js(),
      gd(),
      Xc(),
      (oy = `data-codex-browser-design-group`),
      (sy = `data-codex-browser-design-original-text`),
      (cy = `codex-browser-design-draft-style`));
  });
function uy(e, t, n, r, i) {
  let a = t.anchor.kind === `virtual`,
    o = a ? null : (i ?? Ju(e)),
    s = r?.id ?? globalThis.crypto?.randomUUID?.() ?? `design-${Date.now()}`,
    c = a ? null : ss(e),
    l = r?.annotationControls ?? n,
    u = as(o?.styles ?? [], r?.declarations ?? []),
    d =
      r == null
        ? l?.controls.map((e) => ({
            callback: e.callback,
            previousValue: e.currentValue,
            value: qd(e),
          }))
        : r.annotationControlChanges,
    f =
      c == null
        ? r?.text
        : r?.text == null
          ? c
          : { previousValue: c.previousValue, value: r.text.value };
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
    targetLabel: t.anchor.kind === `virtual` ? (t.anchor.elementName ?? t.anchor.targetId) : fy(e),
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
function dy(e) {
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
function fy(e) {
  let t = e.tagName.toLowerCase(),
    n = td(e);
  return n == null ? t : `${t}: ${n}`;
}
var py = o(() => {
  (af(), Js(), gd());
});
function my() {
  let e = `codex-site-annotation-preview-mask`,
    t = gy(`svg`, { width: `0`, height: `0`, "aria-hidden": `true` }),
    n = gy(`mask`, {
      id: e,
      maskUnits: `userSpaceOnUse`,
      maskContentUnits: `userSpaceOnUse`,
      "mask-type": `luminance`,
      x: `0`,
      y: `0`,
    }),
    r = gy(`rect`, { fill: `white` });
  (n.append(r), t.append(n));
  let i = ``;
  return {
    element: t,
    id: e,
    update({ viewport: a, targets: o }) {
      let s = o.map((e) => ({ path: _y(e), clip: e.clipRect })),
        c = JSON.stringify({ viewport: a, shapes: s });
      if (c !== i) {
        i = c;
        for (let e of [n, r])
          (e.setAttribute(`width`, String(a.width)), e.setAttribute(`height`, String(a.height)));
        (n.replaceChildren(r),
          t.replaceChildren(n),
          s.forEach(({ path: r, clip: i }, a) => {
            let o = `${e}-clip-${a}`,
              s = gy(`clipPath`, { id: o, clipPathUnits: `userSpaceOnUse` });
            (s.append(gy(`rect`, i)),
              t.append(s),
              n.append(gy(`path`, { d: r, fill: `black`, "clip-path": `url(#${o})` })));
          }));
      }
    },
  };
}
function hy({ rect: e, style: t, radiusScale: n }) {
  let { width: r, height: i } = e,
    a = [
      t.borderTopLeftRadius,
      t.borderTopRightRadius,
      t.borderBottomRightRadius,
      t.borderBottomLeftRadius,
    ].map((e) => {
      let [t, a = t] = e.trim().split(/\s+/);
      return { x: vy(t, r, n?.x ?? 1), y: vy(a, i, n?.y ?? 1) };
    }),
    [o, s, c, l] = a,
    u = Math.min(1, r / (o.x + s.x), r / (l.x + c.x), i / (o.y + l.y), i / (s.y + c.y));
  for (let e of a) ((e.x *= u), (e.y *= u));
  return a;
}
function gy(e, t) {
  let n = document.createElementNS(`http://www.w3.org/2000/svg`, e);
  for (let [e, r] of Object.entries(t)) n.setAttribute(e, String(r));
  return n;
}
function _y(e) {
  let { x: t, y: n, width: r, height: i } = e.rect,
    [a, o, s, c] = hy(e),
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
function vy(e, t, n) {
  let r = Number.parseFloat(e);
  return Number.isFinite(r) ? Math.max(0, e.endsWith(`%`) ? (r * t) / 100 : r * n) : 0;
}
var yy = o(() => {});
function by({ layer: e, color: t }) {
  let n = e.ownerDocument,
    r = n.createElement(`style`);
  ((r.textContent = xy), (e.style.color = t));
  let i = my(),
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
          [s, c, l, u] = hy(r),
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
var xy,
  Sy = o(() => {
    (Sv(),
      yy(),
      (xy = `
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
function Cy(e) {
  let t = new Map();
  for (let n of e) {
    let e = `host` in n ? n.ownerDocument : n,
      r = t.get(e) ?? { boundaries: [], modals: [], popovers: [] };
    (t.set(e, r), n.fullscreenElement != null && r.boundaries.push(n.fullscreenElement));
    for (let e of n.querySelectorAll(`dialog[open], [popover]`))
      e.matches(`:modal`)
        ? r.modals.push(e)
        : e.matches(`:popover-open`) &&
          r.popovers.push({ element: e, rect: e.getBoundingClientRect() });
  }
  for (let [e, n] of t) {
    let t = wy(e, n.modals);
    n.boundaries.push(...(t == null ? n.modals : [t]));
  }
  return (e) => {
    let n = e;
    for (; n != null;) {
      let e = t.get(n.ownerDocument);
      if (e != null) {
        let { boundaries: t, popovers: r } = e;
        for (let e of t) if (!Ty(e, n)) return !1;
        let i;
        for (let e of r)
          if (
            !Ty(e.element, n) &&
            ((i ??= n.getBoundingClientRect()),
            i.left < e.rect.right &&
              i.right > e.rect.left &&
              i.top < e.rect.bottom &&
              i.bottom > e.rect.top)
          )
            return !1;
      }
      let r = n.ownerDocument.defaultView?.frameElement;
      n = B(r) ? r : null;
    }
    return !0;
  };
}
function wy(e, t) {
  if (t.length < 2) return t[0];
  for (let n of [e.activeElement, e.elementFromPoint?.(0, 0)]) {
    for (; n?.shadowRoot?.activeElement != null;) n = n.shadowRoot.activeElement;
    for (; B(n);) {
      if (t.includes(n)) return n;
      n = $s(n);
    }
  }
}
function Ty(e, t) {
  let n = t;
  for (; n != null;) {
    if (n === e) return !0;
    n = $s(n);
  }
  return !1;
}
var Ey = o(() => {
  Xc();
});
function Dy(e) {
  let t = null;
  function n() {
    (t?.(), (t = null));
  }
  return {
    setPreview(r) {
      (n(), r != null && (t = Oy(e, r)));
    },
    dispose: n,
  };
}
function Oy({ shadowRoot: e, getControlTargets: t }, n) {
  let r = document.createElement(`div`);
  ((r.dataset.siteAnnotationPreview = n.feature),
    r.setAttribute(`aria-hidden`, `true`),
    (r.popover = `manual`));
  let i = by({ layer: r, color: n.color });
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
    for (let t of e) _(t, t.isConnected && t.ownerDocument === document && !ll(t));
  }
  function y() {
    if (((o = null), !a)) return;
    if (s == null) {
      (n.feature === `controls` && v(),
        (s = { candidates: l.values(), targets: [], hasMotion: !1, isVisible: Cy(d) }));
      for (let [e, t] of f) (!t.isConnected || e.playState !== `running`) && f.delete(e);
    }
    let { targets: e } = s,
      t = !1;
    for (let r = 0; r < My; r++) {
      let r = s.candidates.next();
      if (r.done) {
        t = !0;
        break;
      }
      let i = r.value;
      if (
        ((s.hasMotion = s.hasMotion || Ay(i)),
        !i.isConnected ||
          !s.isVisible(i) ||
          (n.feature === `controls` && u.has(i)) ||
          (n.feature === `containers` && !ky(i)) ||
          ed(i) == null)
      )
        continue;
      let a = o_(i);
      if (a == null) continue;
      let { rect: o, clipRect: c, radiusScale: l } = a;
      if (
        !(
          o.x + o.width <= c.x ||
          o.y + o.height <= c.y ||
          o.x >= c.x + c.width ||
          o.y >= c.y + c.height
        ) &&
        (e.push({
          element: i,
          rect: o,
          clipRect: c,
          radiusScale: l,
          style: (i.ownerDocument.defaultView ?? window).getComputedStyle(i),
        }),
        e.length === My)
      ) {
        t = !0;
        break;
      }
    }
    (fc(r, !1),
      i.update(e),
      t
        ? s.hasMotion || e.some(({ element: e }) => Array.from(f.values()).some((t) => jy(t, e)))
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
              for (let e of Iy) t.removeEventListener(e, g, !0);
              (a.delete(t), d.delete(t));
            } else l.observe(t, Ly);
          for (let e of o) e.isConnected || (o.delete(e), (s = !0));
          (s && i(), n.feature === `controls` && C());
        }
        h();
      });
    function u(t) {
      if (!ll(t)) {
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
      (a.add(e), d.add(e), l.observe(e, Ly), e.addEventListener(`toggle`, y, !0));
      for (let t of Iy) e.addEventListener(t, g, !0);
      f(e);
    }
    function g(e) {
      let n = e.composedPath()[0];
      if (!(B(n) && ll(n))) {
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
      (B(t) && ll(t)) || (fc(r, !0), h());
    }
    m(e);
    for (let n of e.getAnimations?.() ?? []) x(n, t);
    let b = e.documentElement;
    return (
      b != null && p.observe(b),
      e.addEventListener(Py, v),
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
          for (let t of Iy) e.removeEventListener(t, g, !0);
        }
        (e.removeEventListener(Py, v),
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
    B(i) &&
      !ll(i) &&
      n.getKeyframes().some((e) => Object.keys(e).some((e) => Ny.test(e))) &&
      f.set(e, i);
  }
  function S(e) {
    if (
      !(
        !(e instanceof CustomEvent) ||
        typeof e.detail != `string` ||
        e.detail.length > zd.maxPayloadLength ||
        !(e.target instanceof HTMLElement) ||
        !e.target.isConnected ||
        e.target.ownerDocument !== document ||
        e.target.getRootNode() !== document
      )
    )
      try {
        let t = Hd.safeParse(JSON.parse(e.detail));
        if (!t.success) return;
        (t.data.type === `registered`
          ? u.set(e.target, t.data.registrationId)
          : t.data.type === `disposed` &&
            u.get(e.target) === t.data.registrationId &&
            u.delete(e.target),
          h());
      } catch {}
  }
  function C() {
    (u.clear(),
      document.dispatchEvent(
        new CustomEvent(zd.requestEvent, { detail: JSON.stringify({ type: `list` }) }),
      ));
  }
  let w = n.feature === `containers` ? oc(b) : b(document, window, () => {});
  if (n.feature === `controls`) {
    for (let e of Fy) window.addEventListener(e, h);
    (document.addEventListener(zd.responseEvent, S), v(), C());
  }
  return (
    h(),
    () => {
      ((a = !1), o != null && window.cancelAnimationFrame(o), w(), m.disconnect(), p.disconnect());
      for (let e of Fy) window.removeEventListener(e, h);
      (document.removeEventListener(zd.responseEvent, S), pc(r), i.dispose(), r.remove());
    }
  );
}
function ky(e) {
  if (Qc(e) !== e) return !1;
  let t = e.ownerDocument.defaultView;
  for (; t != null && t !== window;) {
    let e = t.frameElement;
    if (!ec(e) || Qc(e) !== void 0) return !1;
    t = e.ownerDocument.defaultView;
  }
  return t === window;
}
function Ay(e) {
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
function jy(e, t) {
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
var My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry = o(() => {
    (Ud(),
      Js(),
      bl(),
      al(),
      gd(),
      I_(),
      Xc(),
      Sy(),
      Ey(),
      (My = 128),
      (Ny =
        /^(width|height|minWidth|maxWidth|minHeight|maxHeight|margin.*|padding.*|border.*Width|fontSize|fontWeight|lineHeight|letterSpacing|wordSpacing|flex.*|grid.*|gap|rowGap|columnGap|display|position|float|clear|order|align.*|justify.*)$/),
      (Py = `codex:annotation-shadow-root-attached`),
      (Fy = [
        `codex:register-annotation-controls`,
        `codex:update-annotation-controls`,
        `codex:dispose-annotation-controls`,
      ]),
      (Iy = [
        `scroll`,
        `load`,
        `animationstart`,
        `animationend`,
        `animationcancel`,
        `transitionrun`,
        `transitionend`,
        `transitioncancel`,
      ]),
      (Ly = {
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
function zy(e, t) {
  let n = e.head?.querySelectorAll(`meta[name="${t.name}"]`);
  if (n != null)
    for (let e of n) {
      let n = e.getAttribute(`content`),
        r = t.values.find((e) => e === n);
      if (r != null) return r;
    }
}
var By = o(() => {});
function Vy({ rootHost: e, onPointerModeChange: t, onPointerChange: n, onClearHover: r }) {
  let i = null,
    a = () => {
      (i?.disposeHighlight(), (i = null));
    },
    o = () => i != null && (a(), cu(), !0),
    s = (a, o) => {
      let s = o && a != null ? V(a.x, a.y, e, `text`) : null,
        c = o && (i != null || (Zc(s) != null && !Uy(s)));
      return (
        t(c),
        c &&
          (r(), n(a), sc(s?.ownerDocument ?? document, _l, !0, s ?? void 0), a != null && ul(a, e)),
        c
      );
    };
  return {
    get isDragging() {
      return i != null;
    },
    updatePointer: s,
    dispose: a,
    cancel: o,
    disposeFrame(e) {
      i?.frameWindow === e && a();
    },
    handlePointerDown(t, n, r, o) {
      return ol(r.x, r.y, e) == null
        ? !1
        : !o || Uy(V(r.x, r.y, e, `text`))
          ? (Uc(n), !0)
          : (cu(),
            a(),
            (i = { pointerId: n.pointerId, frameWindow: t, disposeHighlight: ou(t) }),
            s(r, !0),
            Uc(n, { preventDefault: !1 }),
            !0);
    },
    handlePointerMove(e, t) {
      return i?.pointerId === t.pointerId
        ? t.buttons & 1
          ? (n(Mc(e, { x: t.clientX, y: t.clientY })), Uc(t, { preventDefault: !1 }), !0)
          : (o(), !1)
        : !1;
    },
    handlePointerUp(e, t) {
      if (!e.isTrusted || i?.pointerId !== e.pointerId) return !1;
      let n = i.frameWindow;
      (a(), Uc(e, { preventDefault: !1 }));
      let r;
      try {
        r = Ql(n);
      } catch (e) {
        if (!(e instanceof DOMException && e.name === `SecurityError`)) throw e;
        r = null;
      }
      return (t(r), !0);
    },
    handlePointerCancel(e) {
      return i?.pointerId === e.pointerId && o();
    },
  };
}
function Hy(e, t, n) {
  let r = n && t != null ? V(t.x, t.y, e, `text`) : null;
  return oc(
    (e) => (
      sc(e, _l, n, r?.ownerDocument === e ? r : void 0),
      () => {
        cc(e);
      }
    ),
  );
}
function Uy(e) {
  let t = e;
  for (; t != null;) {
    if (t.matches(`input, button, select, audio, video`)) return !Bu(t);
    t = $s(t);
  }
  return !1;
}
var Wy = o(() => {
    (bl(), al(), Xc(), qu());
  }),
  Gy = c({
    buildRegionAnchor: () => s_,
    getBrowserCommentElementSnapshot: () => Ju,
    getMarkerPoint: () => f_,
    mountBrowserCommentRuntime: () => Ky,
  });
function Ky(e) {
  let t = Zy(),
    n = uc(t, _l, yl),
    r = t.shadowRoot ?? t.attachShadow({ mode: `open` });
  r.replaceChildren();
  let i = document.createElement(`div`);
  r.appendChild(i);
  let a = Dy({ shadowRoot: r, getControlTargets: () => e.getAnnotationControlTargets?.() ?? [] }),
    o = {
      ...e,
      sendMessageToHost(t) {
        let n = b_().visualViewport;
        if (n == null || !(`anchorState` in t) || t.anchorState == null) {
          e.sendMessageToHost(t);
          return;
        }
        e.sendMessageToHost({ ...t, anchorState: { ...t.anchorState, visualViewport: n } });
      },
    },
    s = (0, pb.createRoot)(i);
  return (
    s.render((0, mb.jsx)(qy, { rootHost: t, bridge: o })),
    {
      setSiteAnnotationPreview: a.setPreview,
      dispose() {
        (a.dispose(), n(), s.unmount(), lc(), t.remove());
      },
    }
  );
}
function qy({ rootHost: e, bridge: t }) {
  let [n, r] = (0, $.useState)(t.initialState),
    i = (0, $.useRef)(t.initialState.comments),
    [a] = (0, $.useState)(jg),
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
    E = (0, $.useRef)(null),
    [D, ee] = (0, $.useState)(null),
    [te, ne] = (0, $.useState)(null),
    [re, ie] = (0, $.useState)(null),
    [O, k] = (0, $.useState)(b_),
    A = (0, $.useRef)(null),
    ae = (0, $.useRef)(null),
    oe = (0, $.useRef)(null),
    se = (0, $.useRef)(null),
    [ce, le] = (0, $.useState)(() => nu([])),
    ue = (0, $.useRef)(null),
    [de, fe] = (0, $.useState)(!1),
    pe = (0, $.useRef)(0),
    me = (0, $.useRef)(null),
    he = (0, $.useRef)(null),
    ge = (0, $.useRef)(!1),
    _e = (0, $.useRef)(!1),
    ve = (0, $.useRef)(!1),
    ye = (0, $.useRef)(!1),
    be = (0, $.useRef)(!1),
    xe = (0, $.useRef)(!1),
    Se = (0, $.useRef)(!1),
    Ce = (0, $.useRef)(null),
    [we] = (0, $.useState)(() =>
      Vy({
        rootHost: e,
        onPointerModeChange: fe,
        onPointerChange: p,
        onClearHover: () => {
          (s(null), l(null));
        },
      }),
    ),
    { comments: j, interactionMode: M } = n,
    Te = M === `comment` && n.isAnnotationSuspended === !0,
    Ee = n.canUseAnnotationMultiSelect === !0 && S?.anchor.type !== `virtual`,
    N = n.canUseSiteAnnotationApi === !0,
    De = N && M === `comment` && !Te && S == null && de,
    P = Ed(n.zoomPercent),
    Oe = gs(n.viewportScale),
    ke = id(),
    Ae = Wg(ke),
    je = n.canUseTweaks !== !1,
    Me = new Map(j.map((e, t) => [e.id, t + 1])),
    Ne = j.filter(tb),
    Pe = rb(e),
    Fe = Ne.flatMap((e) => {
      let t = ce.get(e.id),
        n = X_(e, Pe, e.id === D, t?.sourceAnchor === e.anchor ? t.value : null);
      return n == null ? [] : [n];
    }),
    Ie = n.activeDesignChange,
    Le = j.flatMap((e) => (e.designChange == null ? [] : [e.designChange])),
    Re = Ie == null ? Le : [...Le.filter((e) => e.id !== Ie.id), Ie],
    ze = n.isOriginalViewEnabled === !0 ? wb : Re,
    Be = ns(j),
    Ve = je && Be && n.annotationEditorMode === `design`,
    He = ze.flatMap((e) => {
      let t = eb(e, Pe);
      return t == null ? [] : [t];
    }),
    Ue = Fe.some((e) => [e.anchor, ...(e.additionalAnchors ?? [])].some((e) => !e.isFixed)),
    We = Ne.some((e) =>
      [e.anchor, ...(e.additionalAnchors ?? [])].some(
        (e) => e.kind === `element` && e.selector != null,
      ),
    ),
    Ge = (0, $.useCallback)(
      (n, r, o, c) => {
        E.current?.clear();
        let u = { ...r, anchor: Qu(n, r.anchor, N, c) };
        (o != null &&
          ((u.anchor.annotationRequestIncludesPrompt = !!o.initialComment?.trim()),
          (u.anchor.annotationFeatures = [...(u.anchor.annotationFeatures ?? []), `requests`])),
          v != null &&
            (t.sendMessageToHost({
              type: `browser-sidebar-runtime-close-comment-preview`,
              commentId: v,
            }),
            y(null)));
        let d = uy(n, u, N ? t.getAnnotationControls?.(n) : void 0);
        return (
          N && a.rememberTarget(d.id, n),
          rb(e).set(d.id, n),
          Pg(u.anchor, d.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: u,
            annotationEditorDefault: zy(document, hb),
            designEditorState: d,
            ...o,
          }),
          (ye.current = !1),
          h(!1),
          p(null),
          k(b_()),
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
          cu(),
          N && Fg(u.anchor, t.recordAnnotationFeatureUse, d.annotationControls),
          !0
        );
      },
      [a, t, N, v, e],
    ),
    Ke = (0, $.useCallback)(
      (e, n, r = !1) => {
        if (e.anchor.kind !== `text`) return !1;
        let a = N && (r || Ig(e.anchor)),
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
            (t.sendMessageToHost({
              type: `browser-sidebar-runtime-close-comment-preview`,
              commentId: v,
            }),
            y(null)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-editor`,
            target: { mode: `create` },
            anchorState: { ...e, anchor: c },
            wantsScreenshot: !0,
            ...n,
          }),
          k(b_()),
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
          cu(),
          a && t.recordAnnotationFeatureUse?.(`text-containers`),
          n != null &&
            t.recordAnnotationFeatureUse?.(`requests`, c.annotationRequestIncludesPrompt),
          !0
        );
      },
      [t, N, v],
    ),
    qe = (0, $.useCallback)(
      (n, r, o = 0) => {
        let s = r ?? n.anchor,
          c = rb(e),
          l = j.find((e) => e.id === n.id) ?? n,
          u = Z_(l, s, o),
          d = o === 0,
          f = $u(s, d ? l.id : void 0, c) ?? null;
        (f != null && (d && c.set(l.id, f), u.designChange != null && Xv(f, u.designChange.id)),
          v != null &&
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-close-comment-preview`,
              commentId: v,
            }));
        let p = ev(tv(u, f, P), f),
          m =
            u.designChange != null && f == null
              ? dy(u.designChange)
              : f == null || p.anchor.kind !== `element`
                ? void 0
                : uy(f, p, N ? t.getAnnotationControls?.(f) : void 0, u.designChange);
        (m != null &&
          f != null &&
          (N &&
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
          k(b_()),
          C({
            commentIdsAtOpen: new Set(i.current.map((e) => e.id)),
            target: { mode: `edit`, commentId: l.id },
            anchor: L_({ ...u, anchor: p.anchor }, f, c),
          }),
          y(null));
      },
      [a, t, N, j, v, e, P],
    ),
    Je = (0, $.useCallback)(
      (n, r, i) => {
        let a = rb(e),
          o = j.find((e) => e.id === n.id) ?? n,
          s = i === 0,
          c = $u(r, s ? o.id : void 0, a) ?? null;
        (c != null && s && a.set(o.id, c), y(o.id), k(b_()));
        let l = tv(Z_(o, r, i), c, P);
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-open-comment-preview`,
          commentId: o.id,
          anchorState: l,
        });
      },
      [t, j, e, P],
    ),
    Ye = (0, $.useCallback)(
      (r, o) => {
        let c = Ju(r);
        if (c == null) return !1;
        let l = {
            ...o,
            anchor: Qu(r, o.anchor, N),
            cardViewportRect: ob(e, c.rect, { viewportScale: n.viewportScale, zoomFactor: P }),
          },
          u = uy(r, l, N ? t.getAnnotationControls?.(r) : void 0, void 0, c);
        return (
          N && a.rememberTarget(u.id, r),
          rb(e).set(u.id, r),
          Xv(r, u.id),
          Pg(l.anchor, u.annotationControls),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-open-design-editor`,
            anchorState: l,
            designEditorState: u,
          }),
          k(b_()),
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
          N && Fg(l.anchor, t.recordAnnotationFeatureUse, u.annotationControls),
          !0
        );
      },
      [a, t, N, e, n.viewportScale, P],
    ),
    Xe = (0, $.useEffectEvent)((e, t, n, r) => {
      if (S != null) return !1;
      if (e instanceof Range) {
        let t = $l(e);
        return t != null && Ke(t, n);
      }
      return Ge(e, $_(e, t.x, t.y), n, r);
    });
  (0, $.useEffect)(
    () => t.subscribeToSiteAnnotationRequests?.((e, t, n, r) => Xe(e, t, n, r)),
    [t],
  );
  let Ze = (0, $.useCallback)(
      (e) => {
        (y((t) => (t === e ? null : t)),
          t.sendMessageToHost({
            type: `browser-sidebar-runtime-close-comment-preview`,
            commentId: e,
          }));
      },
      [t],
    ),
    Qe = (0, $.useEffectEvent)((e, n) => {
      if (S != null) {
        E.current?.clear();
        return;
      }
      v != null && Ze(v);
      let r = nv(e, P),
        o = t.getAnnotationControls?.(n),
        c = o?.controls.length ? uy(n, r, o) : void 0;
      (c != null && a.rememberTarget(c.id, n),
        Pg(e, c?.annotationControls),
        (ye.current = !1),
        h(!1),
        p(null),
        s(null),
        l(null),
        cu(),
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
        N && Fg(e, t.recordAnnotationFeatureUse, c?.annotationControls));
    }),
    $e = (0, $.useEffectEvent)((t, n) => {
      if (S != null || M !== `comment`) return;
      let r = sl(t.x, t.y, N, e);
      r != null &&
        (n ? Ge(r.element, $_(r.element, t.x, t.y, r.usesSelectableContainer)) : s(Qy(r.element)));
    });
  ((0, $.useEffect)(() => {
    let t = Qg({
      rootHost: e,
      onClearDomHover: () => {
        (s(null), l(null));
      },
      onFeedback: T,
      onSelected: Qe,
      onFallback: $e,
    });
    return (
      (E.current = t),
      () => {
        (t.dispose(), (E.current = null));
      }
    );
  }, [e]),
    (0, $.useEffect)(() => {
      E.current?.setEnabled(N && M === `comment` && !Te && !n.isAgentControllingBrowser);
    }, [N, M, Te, n.isAgentControllingBrowser]),
    (0, $.useEffect)(() => {
      S?.anchor.type !== `virtual` && E.current?.clear();
    }, [S]));
  let et = (0, $.useEffectEvent)((e) => {
      (E.current?.setEnabled(
        e.canUseSiteAnnotationApi === !0 &&
          e.interactionMode === `comment` &&
          e.isAnnotationSuspended !== !0 &&
          !e.isAgentControllingBrowser,
      ),
        n.zoomPercent !== e.zoomPercent && E.current?.invalidate());
    }),
    tt = (0, $.useCallback)(
      (n) => {
        if (S != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let r = oe.current;
        if (((oe.current = null), r != null && Date.now() - r.capturedAt <= Sb))
          return E.current?.select(r.viewportPoint) ? !0 : Ge(r.element, r.anchorState);
        if (E.current?.select(n)) return !0;
        let i = sl(n.x, n.y, N, e);
        if (i == null) return !1;
        let a = $_(i.element, n.x, n.y, i.usesSelectableContainer);
        return Ge(i.element, a);
      },
      [S, t, N, Ge, e],
    ),
    nt = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            tt(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [tt],
    ),
    rt = (0, $.useCallback)(
      (e) => {
        if (S != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        oe.current = null;
        let n = se.current;
        se.current = null;
        let r = (n?.anchor.kind === `text` ? n : null) ?? Ql();
        return r == null
          ? (cu(), e.fallbackViewportPoint != null && tt(e.fallbackViewportPoint))
          : Ke(r);
      },
      [S, t, Ke, tt],
    ),
    it = (0, $.useCallback)((e) => {
      se.current = Ql(e);
    }, []),
    at = (0, $.useCallback)(
      (n, r = `design`) => {
        if (S != null)
          return (t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` }), !0);
        let i = oe.current;
        if (
          ((oe.current = null),
          i != null && Date.now() - i.capturedAt <= Sb && i.designElement != null)
        ) {
          let e = i.designElement;
          return Ye(e, e === i.element ? i.anchorState : $_(e, n.x, n.y));
        }
        let a = sl(n.x, n.y, N, e, r);
        if (a == null) return !1;
        let o = $_(a.element, n.x, n.y, a.usesSelectableContainer);
        return Ye(a.element, o);
      },
      [S, t, N, Ye, e],
    ),
    ot = (0, $.useCallback)(
      (e) => {
        let t = 2,
          n = () => {
            at(e) || t === 0 || (--t, window.requestAnimationFrame(n));
          };
        window.requestAnimationFrame(n);
      },
      [at],
    ),
    st = (0, $.useCallback)(() => {
      (he.current != null && window.cancelAnimationFrame(he.current),
        (he.current = window.requestAnimationFrame(() => {
          ((he.current = null), k(b_()));
        })));
    }, []),
    ct = (0, $.useCallback)(
      (e, r, i) => {
        if (e.target.mode !== `create` || e.anchor.type === `text`) return;
        if (r == null) {
          (t.sendMessageToHost({ type: `browser-sidebar-runtime-cancel-editor`, target: e.target }),
            (ye.current = !1),
            h(!1),
            p(null),
            lc(),
            s(null),
            l(null),
            d(null));
          return;
        }
        if (!Ee && r.additional.length > 0) return;
        let a = { ...e, anchor: W_(e.anchor, r, i) };
        (t.sendMessageToHost({
          type: `browser-sidebar-runtime-update-anchor`,
          target: a.target,
          anchorState: rv(a, P, n.viewportScale),
        }),
          k(b_()),
          d(null),
          C(a));
      },
      [t, Ee, n.viewportScale, P],
    ),
    lt = (0, $.useEffectEvent)((e) => {
      if (!Ee || S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let t = U_(S.anchor),
        n = [t.primary, ...t.additional][e];
      n != null && ct(S, $c(t, n, !0));
    }),
    ut = (0, $.useEffectEvent)((e = v) => {
      e != null &&
        (t.sendMessageToHost({
          type: `browser-sidebar-runtime-close-comment-preview`,
          commentId: e,
        }),
        y(null));
    }),
    dt = (0, $.useEffectEvent)((e) => {
      C((t) => {
        if (t == null) return t;
        let n = t.target;
        return n.mode === `design` || !(`commentId` in n) || e.some((e) => e.id === n.commentId)
          ? t
          : null;
      });
    }),
    ft = (0, $.useEffectEvent)((e) => {
      (e != null &&
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-close-comment-preview`,
          commentId: e,
        }),
        (ye.current = !1),
        h(!1),
        p(null),
        lc(),
        (se.current = null),
        s(null),
        l(null),
        d(null),
        y(null),
        (Se.current = !1),
        x(null),
        C(null),
        (pe.current += 1),
        (be.current = !1),
        (xe.current = !1),
        (ue.current = null),
        ie(null));
    }),
    pt = (0, $.useEffectEvent)((e) => {
      (qe(e), x(null));
    }),
    mt = (0, $.useEffectEvent)((e, t) => {
      let n = we.updatePointer(e, t);
      return (n && E.current?.clearHover(), n);
    }),
    ht = (0, $.useEffectEvent)((t) => {
      if (
        t.interactionMode === `comment` &&
        t.isAnnotationSuspended !== !0 &&
        (M !== `comment` || Te) &&
        S == null
      ) {
        let n = A.current;
        if (mt(n, t.canUseSiteAnnotationApi === !0)) return;
        if (
          n != null &&
          (t.canUseTweaks === !1 || t.isDesignModifierPressed !== !0) &&
          E.current?.hover(n)
        ) {
          (p(n), s(null), l(null));
          return;
        }
        let r =
            t.canUseTweaks !== !1 &&
            (t.isDesignModifierPressed === !0 ||
              (ns(t.comments) && t.annotationEditorMode === `design`)),
          i =
            n == null ? null : (sl(n.x, n.y, t.canUseSiteAnnotationApi === !0, e)?.element ?? null);
        (p(n), s(Qy(i, r)));
      }
    }),
    gt = (0, $.useEffectEvent)((t) => {
      C(z_(t, rb(e), i.current));
    }),
    _t = (0, $.useEffectEvent)((t) => {
      let n = Ee && t;
      if (((ye.current = n), h(n), !n)) {
        (p(null), s(null), l(null), lc());
        return;
      }
      if (S?.target.mode !== `create` || S.anchor.type === `text`) return;
      let r = A.current;
      if (r == null || Se.current) return;
      ul(r, e);
      let i = fl(r, e, N)?.element ?? null;
      if (i == null) {
        (p(null), s(null), l(null), lc());
        return;
      }
      (sc(i.ownerDocument, _l),
        p(r),
        l({ anchor: $_(i, r.x, r.y).anchor, liveElement: i }),
        s(Qy(i)));
    });
  ((0, $.useEffect)(() => {
    let e = t.subscribeToHostMessages((e) => {
      switch (e.type) {
        case `browser-sidebar-runtime-sync`:
          ((i.current = e.comments),
            a.sync(e),
            et(e),
            ht(e),
            e.canUseSiteAnnotationApi !== !0 && (we.cancel() && (be.current = !0), fe(!1)),
            e.interactionMode !== `comment` && (_e.current = !1),
            (e.isAnnotationSuspended === !0 || e.areAnnotationMarkersVisible === !1) && ut(),
            (e.interactionMode !== `comment` || e.isAnnotationSuspended === !0) &&
              (we.dispose(),
              fe(!1),
              (ye.current = !1),
              h(!1),
              p(null),
              s(null),
              l(null),
              d(null),
              lc(),
              (be.current = !1),
              (xe.current = !1),
              (pe.current += 1),
              (ue.current = null),
              ie(null)),
            e.canUseAnnotationMultiSelect !== !0 && d(null),
            r(
              (t) => (
                t.zoomPercent !== e.zoomPercent && st(),
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
            k(b_()),
            _(
              e.interactionMode === `comment` &&
                e.canUseTweaks !== !1 &&
                e.isDesignModifierPressed === !0,
            ),
            (e.interactionMode !== `comment` || e.isTweaksEditorOpen !== !0) && ne(null),
            ee((t) => (t != null && !e.comments.some((e) => e.id === t) ? null : t)));
          return;
        case `browser-sidebar-runtime-prepare-comment-screenshot`:
          ee(e.commentId);
          return;
        case `browser-sidebar-runtime-clear-comment-screenshot`:
          ee(null);
          return;
        case `browser-sidebar-runtime-capture-text-selection`:
          it();
          return;
        case `browser-sidebar-runtime-select-comment`:
          x(e.commentId);
          return;
        case `browser-sidebar-runtime-close-editor`:
          (E.current?.clear(),
            lc(),
            (0, fb.flushSync)(() => {
              ((ye.current = !1),
                h(!1),
                p(null),
                (pe.current += 1),
                (be.current = !1),
                (xe.current = !1),
                ne(null),
                ee(null),
                s(null),
                l(null),
                d(null),
                (ue.current = null),
                ie(null),
                C((t) => (t == null || e.target == null || ls(t.target, e.target) ? null : t)));
            }));
          return;
        case `browser-sidebar-runtime-design-scrub-changed`:
          ne(e.property);
          return;
        case `browser-sidebar-runtime-create-comment-at-point`:
          (d(null), tt(e.viewportPoint) || nt(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-create-comment-from-selection`:
          (d(null), rt(e));
          return;
        case `browser-sidebar-runtime-open-design-editor-at-point`:
          (d(null), at(e.viewportPoint) || ot(e.viewportPoint));
          return;
        case `browser-sidebar-runtime-annotation-selection-modifier-state`:
          _t(e.pressed);
          return;
        case `browser-sidebar-runtime-annotation-selection-hover-state`:
          d(Ee ? e.selectionIndex : null);
          return;
        case `browser-sidebar-runtime-remove-annotation-selection`:
          if (!Ee) return;
          lt(e.selectionIndex);
          return;
        case `browser-sidebar-runtime-restore-editor`:
          (E.current?.clear(),
            (ye.current = !1),
            h(!1),
            (A.current = null),
            p(null),
            lc(),
            s(null),
            l(null),
            d(null),
            gt(e));
          return;
      }
    });
    return () => {
      (he.current != null && (window.cancelAnimationFrame(he.current), (he.current = null)), e());
    };
  }, [a, t, Ee, it, at, st, nt, ot, we, e, tt, rt]),
    (0, $.useEffect)(() => {
      let t = rb(e);
      (t.forEach((e, n) => {
        ((!j.some((e) => e.id === n) &&
          n !== Ie?.id &&
          (S?.anchor.type !== `element` || S.anchor.element !== e)) ||
          !e.isConnected) &&
          t.delete(n);
      }),
        v != null && !Ne.some((e) => e.id === v) && ut(v),
        dt(Ne));
    }, [Ie, S, j, v, e, Ne]),
    (0, $.useEffect)(() => {
      M === `browse` && ft(v);
    }, [v, M]),
    (0, $.useLayoutEffect)(() => {
      if (!(M !== `comment` || Te || S != null)) return Hy(e, A.current, De);
    }, [S, M, Te, e, De]),
    (0, $.useEffect)(() => {
      if (b == null) return;
      let e = j.find((e) => e.id === b) ?? null;
      e != null && pt(e);
    }, [j, b]));
  let vt = (0, $.useEffectEvent)((e) => {
      M !== `comment` ||
        (Te === e && _e.current === e) ||
        ((_e.current = e),
        t.sendMessageToHost({
          type: `browser-sidebar-runtime-annotation-suspension`,
          suspended: e,
        }));
    }),
    yt = (0, $.useEffectEvent)((e) => {
      e.isTrusted && e.code === `Space` && e.type === `keydown` && !e.repeat && (ve.current = !1);
      let t = ve.current && e.code === `Space`;
      if (M !== `comment` && !t) return;
      let n = t_(e, t || Te || _e.current, {
        preserveTyping: e.composedPath().some((e) => B(e) && ll(e)),
      });
      n != null && ((ve.current = n), vt(n));
    });
  ((0, $.useEffect)(
    () =>
      oc((e, t) => {
        let n = (e) => {
            e.isTrusted && (A.current = Mc(t, { x: e.clientX, y: e.clientY }));
          },
          r = () => {
            ((A.current = null), document.hasFocus() || ((_e.current = !1), (ve.current = !1)));
          };
        return (
          t.addEventListener(`keydown`, yt, !0),
          t.addEventListener(`keyup`, yt, !0),
          t.addEventListener(`mousemove`, n, !0),
          t.addEventListener(`blur`, r),
          () => {
            (t.removeEventListener(`keydown`, yt, !0),
              t.removeEventListener(`keyup`, yt, !0),
              t.removeEventListener(`mousemove`, n, !0),
              t.removeEventListener(`blur`, r));
          }
        );
      }),
    [],
  ),
    (0, $.useEffect)(() => {
      if (Te) return;
      let n = () => {
          (mt(null, !1), E.current?.clearHover(), (A.current = null), p(null), s(null), l(null));
        },
        r = (e, t) => je && (t || (Ve && !E.current?.hasSurfaceAtPoint(e))),
        a = (e) => {
          let n = Ee && e;
          (_t(n),
            S?.target.mode === `create` &&
              S.anchor.type !== `text` &&
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: n,
              }));
        },
        o = (t, i) => {
          _(je && i.altKey);
          let o = S?.target.mode === `create` && S.anchor.type !== `text` && ml(i),
            c = o && (i.shiftKey || ye.current);
          if (!i.isTrusted || (pl(i, e) && !o)) {
            n();
            return;
          }
          let u = Mc(t, { x: i.clientX, y: i.clientY });
          if (((A.current = u), M !== `comment`)) return;
          let d = ae.current;
          if (((ae.current = u), o && !c)) {
            (p(null), s(null), l(null), lc());
            return;
          }
          Uc(i, { preventDefault: !1 });
          let f = d == null || d.x !== u.x || d.y !== u.y;
          Ee && i.shiftKey && !ye.current && f && a(!0);
          let m = Ee && S?.target.mode === `create` && S.anchor.type !== `text` && ye.current;
          if (S != null && !m) {
            (p(null), s(null), l(null), lc());
            return;
          }
          if (ue.current != null) {
            (p(u), s(null), l(null));
            return;
          }
          if (mt(u, N && S == null)) return;
          if ((sc(t.document, _l), ul(u, e), p(u), Se.current)) {
            (s(null), l(null));
            return;
          }
          let h = r(u, i.altKey);
          if (!h && S == null && E.current?.hover(u)) {
            (s(null), l(null));
            return;
          }
          E.current?.clearHover();
          let g = h ? (sl(u.x, u.y, N, e)?.element ?? null) : (dl(u, e, i, N)?.element ?? null);
          if (!g) {
            (s(null), l(null));
            return;
          }
          (l({ anchor: $_(g, u.x, u.y).anchor, liveElement: g }), s(Qy(g, h)));
        },
        c = (t, r, i) => {
          i.isTrusted && M === `comment` && S == null && !pl(i, e) && Uc(i, { preventDefault: !1 });
          let a = i.relatedTarget;
          if (a instanceof (t.defaultView?.Node ?? Node) && t.documentElement?.contains(a)) {
            ec(a) && (we.cancel() && (be.current = !0), n());
            return;
          }
          let o = Mc(r, { x: i.clientX, y: i.clientY });
          (a != null && cb(o)) || n();
        },
        u = () => {
          (we.isDragging && document.hasFocus()) ||
            (we.cancel() && (be.current = !0), _(!1), n(), a(!1));
        },
        d = ({ currentDragSelection: e, suppressFollowUpClick: r }) => {
          if (!e.isDraggingRegion || e.rect == null) return !1;
          pe.current += 1;
          let a = pe.current;
          (E.current?.clear(), (be.current = r), (xe.current = r));
          let o = s_(e.rect, e.current, { framePath: e.framePath, frameUrl: e.frameUrl });
          if (
            ((ue.current = null),
            ie(e),
            Ee && S?.target.mode === `create` && S.anchor.type !== `text`)
          )
            return (
              ct(S, $c(U_(S.anchor), { anchor: o, liveElement: null }, !0)), ie(null), n(), !0
            );
          let s = nv(o, P);
          return (
            window.requestAnimationFrame(() => {
              pe.current === a &&
                (t.sendMessageToHost({
                  type: `browser-sidebar-runtime-open-editor`,
                  target: { mode: `create` },
                  anchorState: s,
                  wantsScreenshot: !0,
                }),
                ye.current &&
                  t.sendMessageToHost({
                    type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                    pressed: !0,
                  }),
                k(b_()),
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
          ((oe.current = null), (se.current = null));
          let i =
            Ee &&
            S?.target.mode === `create` &&
            S.anchor.type !== `text` &&
            (n.shiftKey || ye.current);
          if (
            !n.isTrusted ||
            !n.isPrimary ||
            n.button !== 0 ||
            pl(n, e) ||
            M !== `comment` ||
            ((be.current = !1), (xe.current = !1), S != null && !i)
          )
            return;
          (S ?? E.current?.clear(),
            Ee &&
              n.shiftKey &&
              !ye.current &&
              (S?.target.mode === `create` && S.anchor.type !== `text`
                ? a(!0)
                : ((ye.current = !0), h(!0))));
          let o = Mc(t, { x: n.clientX, y: n.clientY });
          if (N && we.handlePointerDown(t, n, o, S == null)) {
            S ?? (A.current = o);
            return;
          }
          if ((fe(!1), r(o, n.altKey))) {
            Uc(n);
            return;
          }
          if (
            ue.current != null &&
            d({ currentDragSelection: db(ue.current, o), suppressFollowUpClick: !0 })
          ) {
            Uc(n);
            return;
          }
          ((pe.current += 1), cu(), Uc(n));
          let s = Ys(t) ?? [],
            c = {
              pointerId: n.pointerId,
              start: o,
              current: o,
              rect: null,
              isDraggingRegion: !1,
              framePath: s,
              frameUrl: ad(t, s),
            };
          ((ue.current = c), ie(c));
        },
        m = (t, n) => {
          if (!n.isTrusted || pl(n, e)) {
            ((oe.current = null), (se.current = null));
            return;
          }
          let r = Mc(t, { x: n.clientX, y: n.clientY });
          it(t);
          let i = cl(n, N) ?? sl(r.x, r.y, N, e);
          if (i == null) {
            oe.current = null;
            return;
          }
          (M === `comment` && Uc(n),
            (oe.current = {
              anchorState: $_(i.element, r.x, r.y, i.usesSelectableContainer),
              capturedAt: Date.now(),
              designElement: cl(n, !1, `design`)?.element ?? null,
              element: i.element,
              viewportPoint: r,
            }));
        },
        g = (e, t) => {
          if (!t.isTrusted || we.handlePointerMove(e, t)) return;
          let n = ue.current;
          if (n == null || t.pointerId !== n.pointerId) return;
          Uc(t);
          let r = Mc(e, { x: t.clientX, y: t.clientY }),
            i = db(n, r);
          ((ue.current = i), ie(i), (A.current = r), p(r), s(null), l(null));
        },
        v = (e, n) => {
          if (
            we.handlePointerUp(n, (e) => {
              ((be.current = !0), e != null && Ke(e, void 0, !0));
            })
          )
            return;
          let i = ue.current;
          if (i == null || n.pointerId !== i.pointerId) return;
          let a = db(i, Mc(e, { x: n.clientX, y: n.clientY }));
          if (
            ((ue.current = null),
            ie(null),
            n.isTrusted &&
              (Uc(n), !d({ currentDragSelection: a, suppressFollowUpClick: !0 }) && S == null))
          ) {
            if (((be.current = !0), (xe.current = !1), r(a.current, n.altKey))) {
              at(a.current, `annotation`);
              return;
            }
            tt(a.current) &&
              Ee &&
              n.shiftKey &&
              ((ye.current = !0),
              h(!0),
              t.sendMessageToHost({
                type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
                pressed: !0,
              }));
          }
        },
        y = (e) => {
          (we.handlePointerCancel(e) && (be.current = !0),
            e.pointerId === ue.current?.pointerId && ((ue.current = null), ie(null), n()));
        },
        b = (e) => {
          (E.current?.clear(),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-cancel-editor`,
              target: e.target,
            }),
            (ye.current = !1),
            h(!1),
            p(null),
            lc(),
            s(null),
            l(null));
        },
        x = (e) => {
          if (e.key === `Escape` && e.isTrusted) {
            if ((E.current?.clear(), we.cancel())) {
              ((be.current = !0), Uc(e));
              return;
            }
            if (ue.current != null) {
              (Uc(e), (be.current = !0), (xe.current = !1), (ue.current = null), ie(null), n());
              return;
            }
            if (S?.target.mode === `create` && S.anchor.type !== `text`) {
              (Uc(e), b(S));
              return;
            }
            S == null &&
              M === `comment` &&
              (Uc(e), t.sendMessageToHost({ type: `browser-sidebar-runtime-exit-comment-mode` }));
          }
        },
        w = (t) => {
          let n = S?.target.mode === `create`;
          !t.isTrusted ||
            M !== `comment` ||
            (S != null && !n) ||
            pl(t, e) ||
            Uc(t, { preventDefault: !we.isDragging });
        },
        T = (n, i) => {
          if (be.current && ((be.current = !1), (xe.current = !1), M === `comment`)) {
            Uc(i);
            return;
          }
          let o = Ee && (i.shiftKey || ye.current),
            c = S?.target.mode === `create` && S.anchor.type !== `text` && o && ml(i);
          if (!i.isTrusted || (pl(i, e) && !c) || M !== `comment`) return;
          if (S != null) {
            if ((Uc(i), S.target.mode === `create` && !o)) {
              b(S);
              return;
            }
            if (S.target.mode === `create` && S.anchor.type !== `text`) {
              a(o);
              let t = Mc(n, { x: i.clientX, y: i.clientY });
              if (E.current?.hasSurfaceAtPoint(t)) return;
              let r = dl(t, e, i, N);
              if (r == null) return;
              let c = $_(r.element, t.x, t.y, r.usesSelectableContainer),
                u = $c(
                  U_(S.anchor),
                  { anchor: Qu(r.element, c.anchor, N), liveElement: r.element },
                  o,
                );
              (ct(S, u, o ? void 0 : c),
                u != null &&
                  ((A.current = t),
                  p(t),
                  s(Qy(r.element)),
                  l({ anchor: c.anchor, liveElement: r.element })));
            }
            return;
          }
          let u = Mc(n, { x: i.clientX, y: i.clientY }),
            f = ue.current;
          if (f != null) {
            let e = db(f, u);
            if (
              ((ue.current = null),
              ie(null),
              d({ currentDragSelection: e, suppressFollowUpClick: !1 }))
            ) {
              Uc(i);
              return;
            }
          }
          if ((Uc(i), r(u, i.altKey))) {
            let t = sl(u.x, u.y, N, e);
            t != null && Ye(t.element, $_(t.element, u.x, u.y, t.usesSelectableContainer));
            return;
          }
          tt(u) &&
            Ee &&
            i.shiftKey &&
            ((ye.current = !0),
            h(!0),
            t.sendMessageToHost({
              type: `browser-sidebar-runtime-annotation-selection-modifier-state`,
              pressed: !0,
            }));
        },
        D = (t, n) => {
          if (
            !n.isTrusted ||
            n.ctrlKey ||
            M !== `comment` ||
            (S != null && (S.target.mode !== `create` || S.anchor.type === `text`)) ||
            pl(n, e)
          )
            return;
          let r = Mc(t, { x: n.clientX, y: n.clientY });
          zv(V(r.x, r.y, e), Bv(n, t)) && Uc(n);
        };
      return oc((e, t) => {
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
            D(t, e);
          };
        (e.addEventListener(`pointerdown`, n, !0),
          e.addEventListener(`pointermove`, r, !0),
          e.addEventListener(`pointerup`, i, !0));
        for (let t of bb) e.addEventListener(t, w, !0);
        (e.addEventListener(`pointercancel`, y, !0),
          e.addEventListener(`mousemove`, s, !0),
          e.addEventListener(`mouseout`, l, !0));
        let b = (e) => {
            (e.key === `Alt` && _(!1), !e.shiftKey && ye.current && a(!1));
          },
          S = (e) => {
            (e.key === `Alt` && _(je), x(e));
          };
        return (
          e.addEventListener(`keydown`, S, !0),
          e.addEventListener(`keyup`, b, !0),
          e.addEventListener(`click`, d, !0),
          e.addEventListener(`contextmenu`, p, !0),
          e.addEventListener(`wheel`, h, !0),
          t.addEventListener(`blur`, u),
          () => {
            (we.disposeFrame(t),
              e.removeEventListener(`pointerdown`, n, !0),
              e.removeEventListener(`pointermove`, r, !0),
              e.removeEventListener(`pointerup`, i, !0));
            for (let t of bb) e.removeEventListener(t, w, !0);
            (e.removeEventListener(`pointercancel`, y, !0),
              e.removeEventListener(`mousemove`, s, !0),
              e.removeEventListener(`mouseout`, l, !0),
              e.removeEventListener(`keydown`, S, !0),
              e.removeEventListener(`keyup`, b, !0),
              e.removeEventListener(`click`, d, !0),
              e.removeEventListener(`contextmenu`, p, !0),
              e.removeEventListener(`wheel`, h, !0),
              t.removeEventListener(`blur`, u));
          }
        );
      });
    }, [S, t, Ee, N, je, ct, it, M, Te, Ve, we, e, at, Ye, Ke, n.viewportScale, Ae, tt, P]),
    (0, $.useEffect)(() => {
      if (M !== `comment` || Te || S != null) return;
      let t = () => {
          if (mt(A.current, N)) return;
          if (A.current != null && E.current?.hover(A.current)) {
            (s(null), l(null));
            return;
          }
          let t = $y(A.current, e, N);
          (s(Qy(t)), l(null), t != null && k(b_()));
        },
        n = () => {
          (Ce.current != null && window.clearTimeout(Ce.current),
            (Se.current = !0),
            s(null),
            l(null),
            k(b_()),
            (Ce.current = window.setTimeout(() => {
              ((Ce.current = null), (Se.current = !1), t());
            }, xb)));
        },
        r = oc((e, r) => {
          (r.addEventListener(`resize`, t), e.addEventListener(`scroll`, n, !0));
          let i = N ? Eg(e, () => (0, fb.flushSync)(t)) : void 0;
          return () => {
            (i?.(), r.removeEventListener(`resize`, t), e.removeEventListener(`scroll`, n, !0));
          };
        });
      return () => {
        (r(),
          (Se.current = !1),
          Ce.current != null && (window.clearTimeout(Ce.current), (Ce.current = null)));
      };
    }, [S, N, M, Te, e, Ae]),
    (0, $.useEffect)(() => {
      if ((S == null && v == null) || S?.anchor.type === `virtual`) return;
      let r = () => {
          let r = v == null ? null : { mode: `edit`, commentId: v },
            i = S?.target ?? r;
          if (i == null) return;
          let a,
            o = rb(e);
          if (S == null) {
            let e = j.find((e) => e.id === v) ?? null;
            if (e == null) return;
            let t = Y_(e, o) ?? null;
            (t != null && o.set(e.id, t), (a = tv(e, t, P)));
          } else
            S.target.mode === `create` || S.target.mode === `design`
              ? (a = rv(S, P, n.viewportScale))
              : ((a = iv(S, j, o, P)), a != null && (a = ev(a, $u(a.anchor, void 0, o))));
          if (a == null && S == null) return;
          if (
            (t.sendMessageToHost({
              type: `browser-sidebar-runtime-update-anchor`,
              target: i,
              anchorState: a,
            }),
            k(b_()),
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
              e == null ||
              !ls(e.target, S.target) ||
              e.anchor.type !== `element` ||
              e.anchor.element == null
                ? e
                : { ...e, anchor: { ...e.anchor, element: null } },
            );
            return;
          }
          let s = S.target;
          if (s.mode !== `edit`) return;
          let c = H_(S.anchor, o);
          C((e) =>
            e == null || !ls(e.target, s) || e.anchor.type !== `element` || e.anchor.element === c
              ? e
              : { ...e, anchor: { ...e.anchor, element: c } },
          );
        },
        i = () => {
          r();
        },
        a = () => {
          (S?.target.mode === `create` &&
            S.anchor.type !== `text` &&
            ((A.current = null), s(null), l(null)),
            r());
        },
        o =
          S == null
            ? []
            : S.anchor.type === `text`
              ? [S.anchor.value]
              : [S.anchor.value, ...S.anchor.additionalSelections.map((e) => e.anchor)],
        c = window.visualViewport;
      (c?.addEventListener(`resize`, i), c?.addEventListener(`scroll`, a));
      let u = oc((e, t) => {
          (t.addEventListener(`resize`, i),
            t.addEventListener(`scroll`, a),
            e.addEventListener(`scroll`, a, !0));
          let n = kc(t, o, a);
          return () => {
            (t.removeEventListener(`resize`, i),
              t.removeEventListener(`scroll`, a),
              e.removeEventListener(`scroll`, a, !0),
              n());
          };
        }),
        d = S?.anchor.type === `text` ? ru([S.anchor.value], r) : null;
      return (
        r(),
        () => {
          (c?.removeEventListener(`resize`, i), c?.removeEventListener(`scroll`, a), u(), d?.());
        }
      );
    }, [S, t, j, v, e, n.viewportScale, P]),
    (0, $.useEffect)(() => {
      let e = M === `comment` && S == null && je && g;
      ge.current !== e &&
        ((ge.current = e),
        t.sendMessageToHost({ type: `browser-sidebar-runtime-design-modifier-state`, pressed: e }));
    }, [S, t, je, M, g]),
    (0, $.useEffect)(() => () => a.clear(), [a]),
    (0, $.useEffect)(() => Yv(M === `comment` ? ze : wb, Pe), [M, Pe, ze]),
    (0, $.useLayoutEffect)(() => {
      if (S != null || Ne.length === 0 || (M !== `comment` && D == null)) return;
      let t = j.filter((e) => e.anchor.kind === `text` && tb(e)),
        n = () => {
          le((e) => nu(t, e));
        },
        r = null,
        i = () => {
          r ??= window.requestAnimationFrame(() => {
            ((r = null), n());
          });
        },
        a = () => {
          (n(),
            (0, fb.flushSync)(() => {
              k(b_());
            }));
        },
        o = () => {
          (i(), k(b_()));
        },
        s = () => o(),
        c = j.flatMap((e) => (tb(e) ? [e.anchor, ...(e.additionalAnchors ?? [])] : []));
      (window.addEventListener(`resize`, a), Ue && document.addEventListener(`scroll`, s, !0));
      let l = We ? ib(document, e, st) : null,
        u = kc(window, c, s),
        d = oc((t, n) => {
          if (n === window) return () => {};
          let r = () => o();
          (n.addEventListener(`resize`, a),
            n.addEventListener(`scroll`, r),
            Ue && t.addEventListener(`scroll`, r, !0));
          let i = kc(n, c, r),
            s = We ? ib(t, e, st) : null;
          return () => {
            (n.removeEventListener(`resize`, a),
              n.removeEventListener(`scroll`, r),
              Ue && t.removeEventListener(`scroll`, r, !0),
              i(),
              s?.());
          };
        });
      i();
      let f = ru(
        t.flatMap((e) => (e.anchor.kind === `text` ? [e.anchor] : [])),
        n,
      );
      return () => {
        (window.removeEventListener(`resize`, a),
          Ue && document.removeEventListener(`scroll`, s, !0),
          l?.(),
          u(),
          d(),
          r != null && window.cancelAnimationFrame(r),
          f());
      };
    }, [S, D, j, Ue, We, M, st, e, Ne.length]));
  let bt = M === `comment` && !Te && n.isOriginalViewEnabled !== !0,
    xt = M === `comment` && !Te && !De && (S == null || S.target.mode === `create`);
  ((0, $.useLayoutEffect)(() => {
    if (De) return Rg();
  }, [De]),
    (0, $.useLayoutEffect)(() => {
      let e = document.getElementById(_l);
      if (e instanceof HTMLDivElement)
        return (
          (e.style.pointerEvents = xt ? `auto` : `none`),
          () => {
            e.style.pointerEvents = `none`;
          }
        );
    }, [e, xt]));
  let St = D == null ? null : (Fe.find((e) => e.id === D) ?? null),
    Ct = D == null ? null : (He.find((e) => e.id === D) ?? null),
    F =
      St == null
        ? Ct == null
          ? null
          : { kind: `design`, annotation: Ct }
        : { kind: `comment`, annotation: St },
    wt = F?.annotation.id ?? null,
    Tt = F?.kind === `comment` ? [F.annotation] : Fe,
    Et = F != null && D != null,
    Dt = S?.target.mode === `create` ? V_(S.anchor) : null,
    Ot =
      S?.target.mode === `create` && S.anchor.type !== `text`
        ? [U_(S.anchor).primary, ...S.anchor.additionalSelections]
        : [],
    kt = S?.target.mode === `create` && S.anchor.type !== `text` ? S.anchor.viewportSize : void 0,
    At =
      Ee &&
      !Et &&
      re == null &&
      S?.target.mode === `create` &&
      S.anchor.type !== `text` &&
      u != null &&
      u >= 0 &&
      u < Ot.length
        ? u
        : null,
    jt = B_(S, [...Fe, ...Ne], Pe),
    Mt = ds(ke),
    Nt = Fe;
  F?.kind === `comment`
    ? (Nt = Mt ? [F.annotation] : Fe)
    : Mt || Et
      ? (Nt = [])
      : jt != null && (Nt = Fe.filter((e) => e.id !== jt.id));
  let Pt = Nt.flatMap((e) => {
      let t = Me.get(e.id);
      return t == null
        ? []
        : (e.anchor.kind === `text`
            ? [e.anchor]
            : [e.anchor, ...(e.additionalAnchors ?? [])]
          ).flatMap((n, r) => {
            if (n.kind === `virtual`) return [];
            let i = e.selectionSourceIndexes[r] ?? r,
              a = n.kind === `element` ? $u(n, i === 0 ? e.id : void 0, Pe) : null,
              o = h_(n, O, { liveElement: a, viewportSize: e.markerViewportSize, zoomFactor: P });
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
    Ft = bs(
      Pt.map(({ markerPoint: e }) => e),
      O.width * P,
    ),
    It = F?.kind === `comment` ? Pt.findIndex(({ comment: e }) => e.id === F.annotation.id) : -1,
    Lt = It === -1 ? void 0 : Ft[It],
    Rt = Lt == null ? void 0 : { x: Lt.x / P, y: Lt.y / P },
    zt =
      F?.annotation.anchor.kind === `element`
        ? F.kind === `comment`
          ? (Y_(F.annotation, Pe) ?? null)
          : ($u(F.annotation.anchor, F.annotation.id, Pe) ?? null)
        : null,
    Bt =
      F?.kind === `comment` && F.annotation.anchor.kind !== `text`
        ? (F.annotation.additionalAnchors ?? []).map((e) => R_(e, Pe))
        : [],
    Vt =
      F?.kind === `comment` &&
      F.annotation.anchor.kind === `element` &&
      zt == null &&
      Bt.every((e) => e.anchor.kind === `element` && e.liveElement == null) &&
      !ds(F.annotation.anchor.pageUrl),
    Ht = v == null ? null : (Fe.find((e) => e.id === v) ?? null),
    Ut =
      (bt && n.areAnnotationMarkersVisible !== !1) || (Et && F?.kind === `comment`)
        ? Tt.flatMap((e) =>
            sb(e, S, F?.kind === `comment` ? F.annotation : null)
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
    Wt = null;
  Et && F?.annotation.anchor.kind === `text`
    ? (Wt = F.annotation.anchor)
    : !Et && !Te && S?.anchor.type === `text`
      ? (Wt = S.anchor.value)
      : !Et &&
        !Te &&
        n.areAnnotationMarkersVisible !== !1 &&
        Ht?.anchor.kind === `text` &&
        (Wt = Ht.anchor);
  let Gt = Wt == null ? null : iu(Wt);
  (0, $.useLayoutEffect)(() => (Gt == null ? void 0 : au(Gt)), [Gt]);
  let Kt = Wt == null ? [] : ab(Wt),
    qt = Gt == null ? Kt : [],
    Jt = null,
    Yt = !1,
    Xt = `hover-box`,
    Zt,
    Qt = [];
  if (Et && F?.annotation.anchor.kind === `element`) {
    let e = zt == null ? null : Ju(zt),
      t = e?.rect ?? rd(F.annotation.anchor);
    ((Zt = e?.borderRadius),
      (Xt = d_(F.annotation.anchor, t, O.width, O.height)),
      (Jt = a_(F.annotation.anchor, t, zt)),
      (Yt = F.kind === `comment` && Yu(F.annotation.anchor)),
      (Qt = K_(Bt, O, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: F.annotation.viewportSize,
      })));
  } else if (Et && F?.kind === `comment` && F.annotation.anchor.kind === `region`) {
    let e = rd(F.annotation.anchor);
    ((Xt = y_(F.annotation.anchor, e, O.width, O.height)),
      (Jt = a_(F.annotation.anchor, e)),
      (Qt = K_(Bt, O, {
        clipToVisibleArea: !0,
        selectionIndexOffset: 1,
        viewportSize: F.annotation.viewportSize,
      })));
  } else if (!Et) {
    if (((Jt = re?.rect ?? null), Jt != null)) {
      if (
        ((Xt = y_(null, Jt, O.width, O.height)),
        S?.target.mode === `create` && S.anchor.type !== `text`)
      ) {
        let e = U_(S.anchor);
        Qt = K_([e.primary, ...e.additional], O, {
          clipToVisibleArea: !0,
          viewportSize: S.anchor.viewportSize,
        });
      }
    } else if (S?.anchor.type === `element`) {
      let e = V_(S.anchor),
        t = S.anchor.element == null ? null : Ju(S.anchor.element),
        n = t?.rect ?? rd(e);
      ((Zt = t?.borderRadius),
        (Xt = S.target.mode === `design` ? `hover-box` : d_(e, n, O.width, O.height)),
        (Jt = S.target.mode === `design` ? n : a_(e, n, S.anchor.element)),
        (Yt = S.target.mode !== `design` && Yu(e)),
        (Qt = K_(S.anchor.additionalSelections, O, {
          clipToVisibleArea: S.target.mode !== `design`,
          selectionIndexOffset: 1,
          viewportSize: S.anchor.viewportSize,
        })));
    } else if (S?.anchor.type === `region` && S.target.mode !== `design`) {
      let e = rd(S.anchor.value);
      ((Xt = y_(S.anchor.value, e, O.width, O.height)),
        (Jt = a_(S.anchor.value, e)),
        (Qt = K_(S.anchor.additionalSelections, O, {
          clipToVisibleArea: !0,
          selectionIndexOffset: 1,
          viewportSize: S.anchor.viewportSize,
        })));
    } else
      S?.anchor.type === `virtual` || w != null
        ? (Jt = w?.rect ?? null)
        : o != null &&
          ((Jt = o.rect), (Zt = o.borderRadius), (Xt = d_(null, Jt, O.width, O.height)));
  }
  let $t =
      F == null ? null : i_([...Kt, ...(Jt == null ? [] : [Jt]), ...Qt.map(({ rect: e }) => e)]),
    en = Et ? [] : nb(te, S, Ie, Pe),
    tn = Ae && !Et && S == null && re == null && Ht == null ? o : null,
    nn = !Et && S?.target.mode === `create` && S.anchor.type !== `text` ? o : null,
    rn = m && nn != null && c != null && Ot.some((e) => el(e, c)),
    an = m ? `add` : `comment`;
  De && (an = `text`);
  let I = Q.hotspotByMode[an === `add` ? `add` : `comment`],
    on =
      !Et && Dt != null && Dt.kind !== `virtual` && (!Mt || jt == null)
        ? h_(Dt, O, {
            includeElementFrameScroll: !0,
            liveElement: Ot[0]?.liveElement ?? null,
            viewportSize: kt,
            zoomFactor: P,
          })
        : null,
    L = rs(j),
    sn = on == null ? null : jt == null ? (L === 0 ? null : L + 1) : (Me.get(jt.id) ?? null),
    cn =
      P === 1
        ? {}
        : {
            height: `${P * 100}vh`,
            transform: `scale(${1 / P})`,
            transformOrigin: `top left`,
            width: `${P * 100}vw`,
          },
    ln = {
      ...kv,
      ...cn,
      [yb]: String(Oe),
      "--browser-sidebar-draft-marker-size": `${Ks * Oe}px`,
      "--browser-sidebar-marker-label-font-size": `${11 * Oe}px`,
      "--browser-sidebar-metadata-column-gap": `${12 * Oe}px`,
      "--browser-sidebar-metadata-height": `${_b * Oe}px`,
      "--browser-sidebar-metadata-padding-x": `${10 * Oe}px`,
      "--browser-sidebar-metadata-padding-y": `${8 * Oe}px`,
      "--browser-sidebar-metadata-radius": `${12 * Oe}px`,
      "--browser-sidebar-metadata-row-gap": `${3 * Oe}px`,
      "--browser-sidebar-overlay-font-size": `${13 * Oe}px`,
      "--browser-sidebar-saved-marker-size": `${Ks * Oe}px`,
    };
  M === `comment` && !Te && S == null && ((ln.cursor = `none`), De || (ln.pointerEvents = `auto`));
  let un = (0, $.useEffectEvent)((e) => {
    t.sendMessageToHost({
      type: `browser-sidebar-runtime-comment-screenshot-ready`,
      commentId: e,
      annotationViewportRect: $t,
      markerViewportPoint: Rt,
      ...(Vt ? { skipScreenshotCapture: !0 } : {}),
    });
  });
  (0, $.useEffect)(() => {
    if (wt == null || D == null) {
      me.current = null;
      return;
    }
    if (me.current === wt) return;
    me.current = wt;
    let e = window.requestAnimationFrame(() => {
      un(wt);
    });
    return () => {
      window.cancelAnimationFrame(e);
    };
  }, [D, wt]);
  let dn = (0, mb.jsxs)(mb.Fragment, {
    children: [
      xt ? (0, mb.jsx)(Xy, {}) : null,
      Ut.map(({ anchor: e, key: t }) => {
        let n = rd(e);
        if (n == null) return null;
        let r = a_(e, n);
        return r == null
          ? null
          : (0, mb.jsx)(`div`, { className: __(e, n, O.width, O.height), style: v_(r, P) }, t);
      }),
      (0, mb.jsx)(Nv, {
        additionalHighlights: Qt.filter((e) => !e.isPageAnnotation),
        highlightBorderRadius: Zt,
        highlightClassName: Xt,
        highlightRect: Yt ? null : Jt,
        hoverSnapshot: nn,
        isRemoveHover: rn,
        linkedSelectionIndex: At,
        viewportHeight: O.height,
        viewportWidth: O.width,
        zoomFactor: P,
      }),
      !Et && f != null && (S == null || (S.target.mode === `create` && S.anchor.type !== `text`))
        ? (0, mb.jsx)(Mv, {
            className: `annotation-selection-cursor`,
            "data-browser-comment-annotation-selection-cursor": !0,
            "data-browser-comment-native-text-selection": De || void 0,
            mode: an,
            pointerEvents: `none`,
            style: {
              height: Q.height * Oe,
              left: f.x * P - I.x * Oe,
              top: f.y * P - I.y * Oe,
              width: Q.width * Oe,
            },
          })
        : null,
      qt.map((e, t) =>
        (0, mb.jsx)(
          `div`,
          { className: `text-selection-highlight`, style: v_(e, P) },
          `${e.x}:${e.y}:${e.width}:${e.height}:${t}`,
        ),
      ),
      en.map((e) =>
        (0, mb.jsx)(
          `div`,
          {
            className: `flex-item-overlay`,
            "data-browser-comment-flex-item-overlay": !0,
            style: v_(e.rect, P, e.borderRadius),
          },
          e.key,
        ),
      ),
      tn == null
        ? null
        : (0, mb.jsx)(Iv, { snapshot: tn, viewportScale: n.viewportScale, zoomFactor: P }),
      bt || Et
        ? (0, mb.jsxs)(`div`, {
            className: `markers-layer`,
            children: [
              w?.selected === !0
                ? (0, mb.jsx)(Fv, {
                    commentNumber: null,
                    markerPoint: { x: w.point.x * P, y: w.point.y * P },
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  })
                : null,
              on == null
                ? null
                : (0, mb.jsx)(Fv, {
                    commentNumber: sn,
                    markerPoint: on,
                    onFocusEditor: () => {
                      t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                    },
                  }),
              (n.areAnnotationMarkersVisible !== !1 || Et ? Pt : []).map(
                ({ anchor: e, comment: n, commentNumber: r, key: i, savedSelectionIndex: a }, o) =>
                  (0, mb.jsx)(
                    Pv,
                    {
                      commentNumber: r,
                      isSelected: S?.target.mode === `edit` && S.target.commentId === n.id,
                      markerPoint: Ft[o],
                      onMouseEnter: () => {
                        Et || S != null || Je(n, e, a);
                      },
                      onMouseLeave: () => {
                        Ze(n.id);
                      },
                      onClick: (r) => {
                        if (r.isTrusted) {
                          if ((r.preventDefault(), r.stopPropagation(), S != null)) {
                            t.sendMessageToHost({ type: `browser-sidebar-runtime-focus-editor` });
                            return;
                          }
                          qe(n, e, a);
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
  return (0, mb.jsx)(Jy, {
    config: n.intlConfig,
    children: (0, mb.jsxs)(`div`, {
      "data-browser-comment-annotation-selection-modifier-active": (m && f != null) || void 0,
      "data-browser-comment-root": !0,
      style: ln,
      children: [
        (0, mb.jsx)(`style`, { children: Av }),
        (!Te || Et) && (xt || De ? (0, mb.jsx)(Yy, { style: cn, children: dn }) : dn),
      ],
    }),
  });
}
function Jy({ children: e, config: t }) {
  return (0, mb.jsx)(xg, {
    defaultLocale: t.defaultLocale,
    locale: t.locale,
    messages: t.messages,
    onError: Cb,
    children: e,
  });
}
function Yy({ children: e, style: t }) {
  let n = (0, $.useRef)(null),
    [r, i] = (0, $.useState)(!1);
  return (
    (0, $.useLayoutEffect)(() => {
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
    (0, mb.jsx)(`div`, {
      ref: n,
      popover: `manual`,
      className: `interaction-layer`,
      style: r ? t : void 0,
      "data-browser-comment-interaction-layer": !0,
      children: e,
    })
  );
}
function Xy() {
  return (0, mb.jsx)(`div`, {
    className: `interaction-blocker`,
    "data-browser-comment-interaction-blocker": !0,
  });
}
function Zy() {
  let e = document.getElementById(_l);
  if (e instanceof HTMLDivElement) return e;
  let t = document.createElement(`div`);
  return (
    (t.id = _l),
    (t.style.position = `fixed`),
    (t.style.inset = `0`),
    (t.style.pointerEvents = `none`),
    (t.style.zIndex = String(wg)),
    document.documentElement.appendChild(t),
    t
  );
}
function Qy(e, t = !1) {
  return e == null || (!t && Qs(e)) ? null : Ju(e);
}
function $y(e, t, n) {
  return e == null ? null : (sl(e.x, e.y, n, t)?.element ?? null);
}
function eb(e, t) {
  if (!od(e.anchor.pageUrl, window.location.href) || e.anchor.kind !== `element`) return null;
  let n = $u(e.anchor, e.id, t);
  return n == null
    ? null
    : (t.set(e.id, n), { ...e, anchor: Zu(n, e.anchor, e.viewportSize, e.markerViewportPoint) });
}
function tb(e) {
  return od(e.anchor.pageUrl, window.location.href);
}
function nb(e, t, n, r) {
  if (e == null || (e !== `gap` && e !== `row-gap` && e !== `column-gap`)) return [];
  let i =
    t?.anchor.type === `element` ? t.anchor.element : n == null ? null : (r.get(n.id) ?? null);
  if (i == null) return [];
  let a = Ac(i).getComputedStyle(i);
  if (a.display !== `flex` && a.display !== `inline-flex`) return [];
  let o = Array.from(i.children).flatMap((e, t) => {
    if (!B(e)) return [];
    let n = Ac(e).getComputedStyle(e);
    if (n.position === `absolute` || n.position === `fixed`) return [];
    let r = ed(e);
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
function rb(e) {
  let t = vb.get(e);
  if (t != null) return t;
  let n = new Map();
  return (vb.set(e, n), n);
}
function ib(e, t, n) {
  let r = new MutationObserver((e) => {
    e.every((e) => e.target instanceof Node && t.contains(e.target)) || n();
  });
  return (
    r.observe(e.documentElement, Wc),
    () => {
      r.disconnect();
    }
  );
}
function ab(e) {
  return e.selectionRects.flatMap((t) => {
    let n = rd({ ...e, rect: t });
    return n == null ? [] : [n];
  });
}
function ob(e, t, { viewportScale: n, zoomFactor: r }) {
  let i = r_(t, { viewportScale: n, zoomFactor: r }),
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
function sb(e, t, n) {
  if (e.id === n?.id) return !0;
  if (t == null || t.anchor.type === `text` || t.target.mode !== `create`) return !1;
  let r = U_(t.anchor),
    i = [r.primary, ...r.additional].map(({ anchor: e }) => e);
  return [e.anchor, ...(e.additionalAnchors ?? [])].some(
    (e) => e.kind === `region` && i.some((t) => As(e, t)),
  );
}
function cb(e) {
  return js(e, { width: window.innerWidth, height: window.innerHeight });
}
function lb(e, t) {
  return Ms(e, t, gb);
}
function ub(e, t) {
  return Ns(e, t);
}
function db(e, t) {
  let n = e.isDraggingRegion || lb(e.start, t);
  return { ...e, current: t, rect: n ? ub(e.start, t) : null, isDraggingRegion: n };
}
var $,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb = o(() => {
    (Js(),
      ($ = u(Nf(), 1)),
      (fb = Ff()),
      (pb = zf()),
      Cg(),
      Tg(),
      Ag(),
      Ng(),
      Lg(),
      zg(),
      Gg(),
      bl(),
      al(),
      e_(),
      n_(),
      J_(),
      Q_(),
      gd(),
      av(),
      I_(),
      Rv(),
      jv(),
      Xc(),
      Jv(),
      ly(),
      py(),
      Ry(),
      By(),
      Wy(),
      qu(),
      (mb = sv()),
      (hb = { name: `oai-annotation-editor-default-mode`, values: [`advanced`] }),
      (gb = 4),
      (_b = 72),
      (vb = new WeakMap()),
      (yb = `--browser-sidebar-overlay-size-scale`),
      (bb = [
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
      (xb = 100),
      (Sb = 5e3),
      (Cb = () => {}),
      (wb = []));
  });
(Js(), Ad());
var Eb = null,
  Db = null,
  Ob = {
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
  kb = !1,
  Ab = null,
  jb = null,
  Mb = !1,
  Nb = !1,
  Pb = !1,
  Fb = !1,
  Ib = !1,
  Lb = !1,
  Rb = null,
  zb = null,
  Bb = null,
  Vb = null,
  Hb = null;
function Ub() {
  if ((d.ipcRenderer.on(jd, qb), globalThis.isSecureContext === !0 && window === window.top)) {
    let e = d.ipcRenderer.sendSync(Pd);
    ((Nb = e.enabled),
      (Lb = e.siteAnnotationPermissionGranted),
      (Ob = {
        ...Ob,
        canUseSiteAnnotationApi: e.enabled && e.siteAnnotationFeaturesEnabled,
        isAgentControllingBrowser: e.isAgentControllingBrowser,
        interactionMode: e.isAnnotationModeActive ? `comment` : `browse`,
      }),
      e.enabled &&
        ((Hb = hf()),
        (zb = vd({
          requestPermission: Jb,
          getState: () => ({
            canUseSiteAnnotationApi: Ob.canUseSiteAnnotationApi === !0,
            isAgentControllingBrowser: Ob.isAgentControllingBrowser,
            hasActiveEditor: Ib || jb != null,
          }),
        })),
        (Vb = Of((e, t, n) => {
          d.ipcRenderer.send(Nd, { ...J, payload: { features: e, detections: t, used: n } });
        })),
        (Bb = Gd(
          (e) =>
            Fb ||
            Ob.canUseSiteAnnotationApi !== !0 ||
            Ob.isAgentControllingBrowser ||
            navigator.userActivation?.isActive !== !0
              ? !1
              : (e !== !0 && zb?.clear(),
                d.ipcRenderer.invoke(Md, {
                  type: `browser-sidebar-runtime-toggle-annotation-mode`,
                  force: e,
                }),
                !0),
          Zb,
          Vb.recordUse,
          () => Ob.canUseSiteAnnotationApi === !0,
        )),
        Bb ?? (Hb.dispose(), (Hb = null), zb.dispose(), (zb = null))));
  }
  (document.readyState === `loading`
    ? window.addEventListener(`DOMContentLoaded`, Gb, { once: !0 })
    : Gb(),
    window.addEventListener(`pagehide`, (e) => {
      (Qb(null),
        e.isTrusted && (Rb?.resolve(!1), (Rb = null)),
        e.isTrusted &&
          !e.persisted &&
          ((Fb = !0),
          Wb(),
          window.removeEventListener(`DOMContentLoaded`, Gb),
          d.ipcRenderer.removeListener(jd, qb),
          Eb?.dispose(),
          (jb = null),
          (Ab = null)));
    }));
}
function Wb() {
  (Rb?.resolve(!1),
    (Rb = null),
    (Lb = !1),
    Qb(null),
    (Nb = !1),
    Vb?.dispose(),
    (Vb = null),
    zb?.dispose(),
    (zb = null),
    Bb?.(),
    (Bb = null),
    Hb?.dispose(),
    (Hb = null));
}
function Gb() {
  Pb ||
    Fb ||
    ((Pb = !0),
    jf(
      async () => {
        let { mountBrowserCommentRuntime: e } = await Promise.resolve().then(() => (Tb(), Gy));
        return { mountBrowserCommentRuntime: e };
      },
      void 0,
    ).then(({ mountBrowserCommentRuntime: e }) => {
      Fb || ((Eb = e(Kb())), Eb.setSiteAnnotationPreview(Db), (Db = null));
    }));
}
function Kb() {
  let e = Ob;
  return (
    (Ab = null),
    {
      initialState: e,
      recordAnnotationFeatureUse(e, t) {
        Ob.canUseSiteAnnotationApi &&
          !Ob.isAgentControllingBrowser &&
          Vb?.recordAnnotationOpened(e, t);
      },
      subscribeToSiteAnnotationRequests: zb?.subscribe,
      getAnnotationControlTargets: () => Hb?.getTargets() ?? [],
      getAnnotationControls(e) {
        return Ob.canUseSiteAnnotationApi ? Hb?.getControls(e) : void 0;
      },
      sendMessageToHost(e) {
        (e.type === `browser-sidebar-runtime-open-editor` ||
        e.type === `browser-sidebar-runtime-open-design-editor`
          ? (Ib = !0)
          : (e.type === `browser-sidebar-runtime-cancel-editor` ||
              e.type === `browser-sidebar-runtime-exit-comment-mode`) &&
            ((Ib = !1), zb?.clear()),
          d.ipcRenderer.invoke(Md, e));
      },
      subscribeToHostMessages(e) {
        kb = !0;
        let t = (t, n) => {
          switch (n.type) {
            case `browser-sidebar-runtime-annotation-permission-result`:
            case `browser-site-annotation-feature-preview`:
              return;
            case `browser-sidebar-runtime-sync`:
              e({ ...n, canUseSiteAnnotationApi: Ob.canUseSiteAnnotationApi });
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
          d.ipcRenderer.on(jd, t),
          Ab != null && (e(Ab), (Ab = null)),
          (Mb &&= (e({ type: `browser-sidebar-runtime-capture-text-selection` }), !1)),
          jb != null && (e(jb), (jb = null)),
          () => {
            ((kb = !1), d.ipcRenderer.removeListener(jd, t));
          }
        );
      },
    }
  );
}
function qb(e, t) {
  switch (t.type) {
    case `browser-sidebar-runtime-annotation-permission-result`:
      Rb?.requestId === t.requestId && (Rb.resolve(t.allowed), (Rb = null));
      return;
    case `browser-site-annotation-feature-preview`:
      Qb(Ob.canUseSiteAnnotationApi && !Ob.isAgentControllingBrowser ? t.preview : null);
      return;
    case `browser-sidebar-runtime-sync`:
      (Xb(t), kb || (Ab = { ...t, canUseSiteAnnotationApi: Ob.canUseSiteAnnotationApi }));
      return;
    case `browser-sidebar-runtime-capture-text-selection`:
      kb || (Mb = !0);
      return;
    case `browser-sidebar-runtime-select-comment`:
    case `browser-sidebar-runtime-create-comment-at-point`:
    case `browser-sidebar-runtime-create-comment-from-selection`:
    case `browser-sidebar-runtime-open-design-editor-at-point`:
    case `browser-sidebar-runtime-restore-editor`:
      (zb?.clear(), kb || Yb(t));
      return;
    case `browser-sidebar-runtime-close-editor`:
      ((Ib = !1), zb?.clear(), Yb(t));
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
function Jb() {
  if (Lb) return !0;
  if (Rb != null) return Rb.promise;
  let e = { ...Promise.withResolvers(), requestId: crypto.randomUUID() };
  return (
    (Rb = e),
    d.ipcRenderer
      .invoke(Md, {
        type: `browser-sidebar-runtime-request-annotation-permission`,
        requestId: e.requestId,
      })
      .catch(() => {
        Rb === e && ((Rb = null), e.resolve(!1));
      }),
    e.promise
  );
}
function Yb(e) {
  jb = Af(jb, e);
}
function Xb(e) {
  let t = Bb != null && Zb();
  (e.canUseSiteAnnotationApi === !1 && Wb(),
    (e.isAgentControllingBrowser || e.siteAnnotationFeaturesEnabled === !1) &&
      (zb?.clear(), Qb(null)),
    (Ob = {
      interactionMode: e.interactionMode,
      annotationEditorMode: e.annotationEditorMode ?? `comment`,
      isAgentControllingBrowser: e.isAgentControllingBrowser,
      canUseTweaks: e.canUseTweaks !== !1,
      canUseAnnotationMultiSelect: e.canUseAnnotationMultiSelect === !0,
      canUseSiteAnnotationApi: Nb && e.siteAnnotationFeaturesEnabled !== !1,
      isDesignModifierPressed: e.isDesignModifierPressed === !0,
      areAnnotationMarkersVisible: e.areAnnotationMarkersVisible !== !1,
      isAnnotationSuspended: e.isAnnotationSuspended === !0,
      isTweaksEditorOpen: e.isTweaksEditorOpen === !0,
      comments: e.comments,
      intlConfig: e.intlConfig,
      viewportScale: e.viewportScale ?? 1,
      zoomPercent: e.zoomPercent,
    }));
  let n = Bb != null && Zb();
  n !== t &&
    document.dispatchEvent(new CustomEvent(`oaiannotationmodechange`, { detail: { active: n } }));
}
function Zb() {
  return Ob.canUseSiteAnnotationApi === !0 && Ob.interactionMode === `comment`;
}
function Qb(e) {
  Eb == null ? (Db = e) : Eb.setSiteAnnotationPreview(e);
}
var $b = !1;
function ex() {
  (window.addEventListener(`dragstart`, tx, !0), window.addEventListener(`dragend`, nx, !0));
}
function tx(e) {
  if (!e.isTrusted) return;
  let t = rx(e),
    n = t?.currentSrc || t?.src;
  n != null &&
    n.length !== 0 &&
    (($b = !0),
    d.ipcRenderer.invoke(Md, { type: `browser-sidebar-runtime-image-drag-started`, sourceUrl: n }));
}
function nx(e) {
  e.isTrusted &&
    $b &&
    (($b = !1), d.ipcRenderer.invoke(Md, { type: `browser-sidebar-runtime-image-drag-ended` }));
}
function rx(e) {
  for (let t of e.composedPath()) if (t instanceof HTMLImageElement) return t;
  return e.target instanceof HTMLImageElement ? e.target : null;
}
function ix() {
  (window.addEventListener(`mousedown`, ox, !0),
    window.addEventListener(`mouseup`, ax, !0),
    window.addEventListener(`auxclick`, ox, !0));
}
function ax(e) {
  let t = sx(e);
  t != null &&
    e.isTrusted &&
    (ox(e),
    d.ipcRenderer.invoke(Md, { type: `browser-sidebar-runtime-mouse-navigation`, direction: t }));
}
function ox(e) {
  sx(e) != null && (e.preventDefault(), e.stopPropagation());
}
function sx(e) {
  return e.button === 3 ? `back` : e.button === 4 ? `forward` : null;
}
Object.freeze([`http:`, `https:`]);
var cx = {
    distribution: `chrome-web-store`,
    extensionIds: [`lfkehkpjohcoelkpembgemeipeppanef`],
    outputModes: [],
    releaseChannel: `beta`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/codex/lfkehkpjohcoelkpembgemeipeppanef`,
  },
  lx = {
    distribution: `chrome-web-store`,
    extensionIds: [`hehggadaopoacecdllhhajmbjkdcmajg`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://chromewebstore.google.com/detail/chatgpt/hehggadaopoacecdllhhajmbjkdcmajg`,
  },
  ux = {
    distribution: `microsoft-edge-add-ons`,
    extensionIds: [`odlomjlbamekndcpllcnffbgeohgkmjh`],
    outputModes: [],
    releaseChannel: `stable`,
    signingIdentity: null,
    storeUrl: `https://microsoftedge.microsoft.com/addons/detail/odlomjlbamekndcpllcnffbgeohgkmjh`,
  },
  dx = {
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
        cx,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        cx,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        lx,
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
        cx,
      ],
      internal: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`, `blobstore`],
          releaseChannel: `beta`,
          signingIdentity: `beta`,
        },
        ux,
        cx,
      ],
      prod: [
        {
          distribution: `managed-self-hosted`,
          extensionIds: [],
          outputModes: [`file`],
          releaseChannel: `stable`,
          signingIdentity: `stable`,
        },
        ux,
        lx,
      ],
    },
  };
(dx.chrome.dev, dx.chrome.internal, dx.chrome.prod, dx.edge.dev, dx.edge.internal, dx.edge.prod);
var fx = { type: `webmcp_changed`, version: 1 };
function px() {
  if (!d.ipcRenderer.sendSync(`codex_desktop:get-browser-webmcp-policy`).enabled) return;
  let e = Reflect.get(document, `modelContext`);
  if (!(e instanceof EventTarget)) return;
  let t = () => {
    d.ipcRenderer.send(Nd, fx);
  };
  (e.addEventListener(`toolchange`, t),
    window.addEventListener(`pagehide`, (n) => {
      n.persisted || e.removeEventListener(`toolchange`, t);
    }),
    t());
}
(px(), d.webFrame.setVisualZoomLevelLimits?.(1, 3), Ub(), ix(), ex());
//# sourceMappingURL=browser-page-preload.js.map
