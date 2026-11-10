import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $W as r,
  AO as i,
  Akt as a,
  BCt as o,
  CCt as s,
  CO as c,
  Ckt as l,
  Cp as u,
  Cz as d,
  DV as f,
  Dkt as p,
  Ep as m,
  FCt as h,
  GO as g,
  Gq as _,
  ICt as v,
  IDt as y,
  Mz as b,
  Nz as x,
  Okt as S,
  SCt as C,
  SJ as w,
  Skt as T,
  TI as E,
  TJ as D,
  TO as O,
  Tkt as k,
  Tp as A,
  Tz as j,
  UO as M,
  VCt as N,
  VDt as P,
  _Ct as F,
  _Mt as I,
  _kt as ee,
  b0 as L,
  bCt as R,
  bkt as te,
  bx as z,
  cCt as B,
  fCt as ne,
  gCt as V,
  gMt as H,
  hCt as U,
  hG as W,
  iO as re,
  jCt as ie,
  jDt as ae,
  jV as oe,
  jkt as se,
  kI as ce,
  kkt as le,
  lCt as ue,
  mCt as de,
  rO as fe,
  rW as pe,
  sCt as me,
  sq as he,
  t3 as G,
  vB as ge,
  vCt as _e,
  vzt as K,
  wkt as ve,
  wp as ye,
  xCt as be,
  xMt as xe,
  xkt as Se,
  y0 as Ce,
  yMt as we,
  ykt as Te,
  yx as Ee,
  yzt as q,
} from "./app-shared-bbfeca5e5737.js";
import {
  C8 as De,
  G6 as J,
  I6 as Oe,
  JPn as ke,
  K6 as Ae,
  L6 as je,
  SPn as Me,
  U6 as Y,
  W6 as Ne,
  XPn as Pe,
  q6 as Fe,
  wPn as Ie,
} from "./app-initial-5851df3f6cb1.js";
import { n as Le, t as Re } from "./writing-block-theme-61c0ed2a12ed.js";
import { _ as ze, g as Be, h as Ve, v as He } from "./writing-block-editor-5c2b4ee54b30.js";
import {
  c as Ue,
  d as We,
  i as Ge,
  l as Ke,
  n as qe,
  o as Je,
  r as Ye,
  s as Xe,
  t as Ze,
} from "./types-b46e00871847.js";
function Qe(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == `function` && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == `object`) {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0;) if (!Qe(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length)) return !1;
    for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0;) {
      let n = i[r];
      if (!(n === `_owner` && e.$$typeof) && !Qe(e[n], t[n])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $e(e) {
  return typeof window > `u` ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function et(e, t) {
  let n = $e(e);
  return Math.round(t * n) / n;
}
function tt(e) {
  let t = X.useRef(e);
  return (
    at(() => {
      t.current = e;
    }),
    t
  );
}
function nt(e) {
  e === void 0 && (e = {});
  let {
      placement: t = `bottom`,
      strategy: n = `absolute`,
      middleware: r = [],
      platform: i,
      elements: { reference: a, floating: o } = {},
      transform: s = !0,
      whileElementsMounted: c,
      open: l,
    } = e,
    [u, d] = X.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
    [f, p] = X.useState(r);
  Qe(f, r) || p(r);
  let [m, h] = X.useState(null),
    [g, _] = X.useState(null),
    v = X.useCallback((e) => {
      e !== S.current && ((S.current = e), h(e));
    }, []),
    y = X.useCallback((e) => {
      e !== C.current && ((C.current = e), _(e));
    }, []),
    b = a || m,
    x = o || g,
    S = X.useRef(null),
    C = X.useRef(null),
    w = X.useRef(u),
    T = c != null,
    E = tt(c),
    D = tt(i),
    O = tt(l),
    A = X.useCallback(() => {
      if (!S.current || !C.current) return;
      let e = { placement: t, strategy: n, middleware: f };
      (D.current && (e.platform = D.current),
        k(S.current, C.current, e).then((e) => {
          let t = { ...e, isPositioned: O.current !== !1 };
          j.current &&
            !Qe(w.current, t) &&
            ((w.current = t),
            it.flushSync(() => {
              d(t);
            }));
        }));
    }, [f, t, n, D, O]);
  at(() => {
    l === !1 &&
      w.current.isPositioned &&
      ((w.current.isPositioned = !1), d((e) => ({ ...e, isPositioned: !1 })));
  }, [l]);
  let j = X.useRef(!1);
  (at(
    () => (
      (j.current = !0),
      () => {
        j.current = !1;
      }
    ),
    [],
  ),
    at(() => {
      if ((b && (S.current = b), x && (C.current = x), b && x)) {
        if (E.current) return E.current(b, x, A);
        A();
      }
    }, [b, x, A, E, T]));
  let M = X.useMemo(() => ({ reference: S, floating: C, setReference: v, setFloating: y }), [v, y]),
    N = X.useMemo(() => ({ reference: b, floating: x }), [b, x]),
    P = X.useMemo(() => {
      let e = { position: n, left: 0, top: 0 };
      if (!N.floating) return e;
      let t = et(N.floating, u.x),
        r = et(N.floating, u.y);
      return s
        ? {
            ...e,
            transform: `translate(` + t + `px, ` + r + `px)`,
            ...($e(N.floating) >= 1.5 && { willChange: `transform` }),
          }
        : { position: n, left: t, top: r };
    }, [n, s, N.floating, u.x, u.y]);
  return X.useMemo(() => ({ ...u, update: A, refs: M, elements: N, floatingStyles: P }), [u, A, M, N, P]);
}
var X, rt, it, at, ot, st, ct, lt;
function ut() {
  return (ut = e(() => {
    (S(),
      (X = t(q(), 1)),
      (rt = q()),
      (it = t(we(), 1)),
      (at = typeof document < `u` ? rt.useLayoutEffect : function () {}),
      (ot = (e, t) => {
        let n = le(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
      }),
      (st = (e, t) => {
        let n = a(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
      }),
      (ct = (e, t) => {
        let n = p(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
      }),
      (lt = (e, t) => {
        let n = se(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
      }));
  }))();
}
function dt(e) {
  let t = (0, ht.c)(70),
    {
      dispatch: n,
      labels: r,
      state: i,
      classNames: a,
      disabledOptionIds: o,
      floatingRef: s,
      style: c,
      unstyled: l,
    } = e,
    u = l !== void 0 && l,
    d = (0, gt.useRef)(null),
    f;
  t[0] === i ? (f = t[1]) : ((f = Ne(i)), (t[0] = i), (t[1] = f));
  let p = f;
  i?.visibleOptionIds;
  let m;
  t[2] === i?.visibleOptionIds
    ? (m = t[3])
    : ((m = i?.visibleOptionIds ?? []), (t[2] = i?.visibleOptionIds), (t[3] = m));
  let h = m,
    g = i?.highlightedOptionId ?? null,
    _;
  t[4] === o ? (_ = t[5]) : ((_ = new Set(o)), (t[4] = o), (t[5] = _));
  let v = _,
    y;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = new Map(Ae().map(mt))), (t[6] = y)) : (y = t[6]);
  let b = y,
    x;
  t[7] === g ? (x = t[8]) : ((x = g == null ? null : b.get(g)), (t[7] = g), (t[8] = x));
  let S = x,
    C;
  t[9] !== v || t[10] !== S?.disabled || t[11] !== g || t[12] !== h
    ? ((C =
        g != null && S?.disabled !== !0 && !v.has(g)
          ? g
          : (h.find((e) => b.get(e)?.disabled !== !0 && !v.has(e)) ?? null)),
      (t[9] = v),
      (t[10] = S?.disabled),
      (t[11] = g),
      (t[12] = h),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T;
  if (t[14] !== h) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (e) => {
          let t = b.get(e);
          return t == null ? [] : [t];
        }),
        (t[16] = e))
      : (e = t[16]),
      (T = h.flatMap(e)),
      (t[14] = h),
      (t[15] = T));
  } else T = t[15];
  let E = T,
    D;
  t[17] === n
    ? (D = t[18])
    : ((D = () => {
        n({ type: `close` });
      }),
      (t[17] = n),
      (t[18] = D));
  let O = D,
    k;
  t[19] === n
    ? (k = t[20])
    : ((k = (e) => {
        n({ type: `highlight`, commandId: e });
      }),
      (t[19] = n),
      (t[20] = k));
  let A = k,
    j;
  t[21] === n
    ? (j = t[22])
    : ((j = (e) => {
        n({ type: `execute`, commandId: e });
      }),
      (t[21] = n),
      (t[22] = j));
  let M = j,
    N,
    P;
  (t[23] !== O || t[24] !== p || t[25] !== E.length
    ? ((N = () => {
        p && E.length === 0 && O();
      }),
      (P = [O, p, E.length]),
      (t[23] = O),
      (t[24] = p),
      (t[25] = E.length),
      (t[26] = N),
      (t[27] = P))
    : ((N = t[26]), (P = t[27])),
    (0, gt.useEffect)(N, P));
  let F, I;
  if (
    (t[28] !== O ||
    t[29] !== v ||
    t[30] !== n ||
    t[31] !== M ||
    t[32] !== A ||
    t[33] !== w ||
    t[34] !== p ||
    t[35] !== h
      ? ((F = () => {
          if (!p) return;
          let e = d.current?.ownerDocument,
            t = e?.defaultView,
            r = t?.Node;
          if (e == null || t == null || r == null) return;
          let i = (e) => {
              if (e.isComposing || e.keyCode === 229) return;
              if (e.key === `Escape`) {
                (e.preventDefault(), e.stopPropagation(), O());
                return;
              }
              if (e.key === `ArrowUp` || e.key === `ArrowDown`) {
                (e.preventDefault(), e.stopPropagation());
                let t = d.current;
                if (t != null && e.target instanceof r && t.contains(e.target)) {
                  let n = Array.from(t.querySelectorAll(`button[role="menuitem"]:not(:disabled)`)),
                    r = n.findIndex((t) => t.contains(e.target));
                  if (n.length > 0) {
                    let t = e.key === `ArrowUp` ? -1 : 1;
                    n[
                      r >= 0 ? (r + t + n.length) % n.length : e.key === `ArrowUp` ? n.length - 1 : 0
                    ]?.focus();
                    return;
                  }
                }
                let i = h.filter((e) => b.get(e)?.disabled !== !0 && !v.has(e));
                if (i.length !== h.length) {
                  if (i.length === 0) return;
                  let t = w == null ? -1 : i.indexOf(w),
                    n = e.key === `ArrowUp` ? -1 : 1,
                    r = t >= 0 ? (t + n + i.length) % i.length : e.key === `ArrowUp` ? i.length - 1 : 0;
                  A(i[r]);
                  return;
                }
                n({ type: `navigate`, direction: e.key === `ArrowUp` ? `previous` : `next` });
                return;
              }
              if (e.key !== `Enter`) return;
              let t = d.current;
              (t != null && e.target instanceof r && t.contains(e.target)) ||
                (e.preventDefault(), e.stopPropagation(), w != null && M(w));
            },
            a = (e) => {
              let t = d.current;
              t != null && e.target instanceof r && (t.contains(e.target) || O());
            },
            o = (e) => {
              let t = d.current;
              (t == null || !(e.target instanceof r) || !t.contains(e.target)) && O();
            };
          return (
            e.addEventListener(`keydown`, i, !0),
            e.addEventListener(`pointerdown`, a, !0),
            e.addEventListener(`focusin`, o, !0),
            t.addEventListener(`blur`, O),
            () => {
              (e.removeEventListener(`keydown`, i, !0),
                e.removeEventListener(`pointerdown`, a, !0),
                e.removeEventListener(`focusin`, o, !0),
                t.removeEventListener(`blur`, O));
            }
          );
        }),
        (I = [O, v, n, M, A, w, p, b, h]),
        (t[28] = O),
        (t[29] = v),
        (t[30] = n),
        (t[31] = M),
        (t[32] = A),
        (t[33] = w),
        (t[34] = p),
        (t[35] = h),
        (t[36] = F),
        (t[37] = I))
      : ((F = t[36]), (I = t[37])),
    (0, gt.useEffect)(F, I),
    !p)
  )
    return null;
  let ee;
  if (
    t[38] !== a?.disabledItem ||
    t[39] !== a?.highlightedItem ||
    t[40] !== a?.item ||
    t[41] !== a?.menu ||
    t[42] !== a?.separator ||
    t[43] !== v ||
    t[44] !== M ||
    t[45] !== s ||
    t[46] !== A ||
    t[47] !== w ||
    t[48] !== r ||
    t[49] !== c ||
    t[50] !== u ||
    t[51] !== E
  ) {
    let e = E.find(pt) ?? null,
      n = E.filter(ft),
      i;
    t[53] !== a?.disabledItem ||
    t[54] !== a?.highlightedItem ||
    t[55] !== a?.item ||
    t[56] !== v ||
    t[57] !== M ||
    t[58] !== A ||
    t[59] !== w ||
    t[60] !== r ||
    t[61] !== u
      ? ((i = (e) => {
          let t = e.disabled || v.has(e.id),
            n = e.id === w,
            i = () => {
              t || (A(e.id), M(e.id));
            };
          return (0, _t.jsx)(
            `button`,
            {
              "aria-disabled": t ? `true` : void 0,
              className: H(
                !u &&
                  `rounded-[calc(var(--oai-wb-spacing)*2.5)] border-0 px-[calc(var(--oai-wb-spacing)*2.5)] py-[calc(var(--oai-wb-spacing)*1.5)] text-start [color:inherit] [font-family:inherit] [font-stretch:inherit] [font-style:inherit] [font-variant:inherit] [line-height:inherit] [font-size:var(--oai-wb-font-size)] focus-visible:[background:var(--oai-wb-surface-secondary)] focus-visible:[outline:none]`,
                !u &&
                  (n
                    ? `[background:var(--oai-wb-surface-secondary)] [outline:none]`
                    : `[background:transparent]`),
                !u && !t && `hover:[background:var(--oai-wb-surface-secondary)] hover:[outline:none]`,
                !u && t && `cursor-not-allowed opacity-50`,
                a?.item,
                t ? a?.disabledItem : void 0,
                n ? a?.highlightedItem : void 0,
              ),
              "data-highlighted": n ? `true` : void 0,
              disabled: t,
              onClick: i,
              onFocus: () => A(e.id),
              onMouseEnter: () => A(e.id),
              onPointerDown: (e) => {
                (e.preventDefault(), e.stopPropagation(), i());
              },
              role: `menuitem`,
              type: `button`,
              children: r[e.id],
            },
            e.id,
          );
        }),
        (t[53] = a?.disabledItem),
        (t[54] = a?.highlightedItem),
        (t[55] = a?.item),
        (t[56] = v),
        (t[57] = M),
        (t[58] = A),
        (t[59] = w),
        (t[60] = r),
        (t[61] = u),
        (t[62] = i))
      : (i = t[62]);
    let o = i,
      l = r.menu,
      f =
        !u &&
        `absolute z-[var(--wb-menu-z-index,70)] flex w-max min-w-[10rem] flex-col gap-[var(--oai-wb-spacing)] rounded-[calc(var(--oai-wb-spacing)*4)] p-[calc(var(--oai-wb-spacing)*1.5)] [background:var(--oai-wb-surface-primary)] [border:1px_solid_var(--oai-wb-divider)] [color:var(--oai-wb-text-primary)] [box-shadow:var(--oai-wb-shadow-lg)]`,
      p = a?.menu,
      m;
    t[63] !== f || t[64] !== p ? ((m = H(f, p)), (t[63] = f), (t[64] = p), (t[65] = m)) : (m = t[65]);
    let h;
    t[66] === s
      ? (h = t[67])
      : ((h = (e) => {
          ((d.current = e), s?.(e));
        }),
        (t[66] = s),
        (t[67] = h));
    let g;
    (t[68] === c ? (g = t[69]) : ((g = { ...Le, ...c }), (t[68] = c), (t[69] = g)),
      (ee = (0, _t.jsxs)(`div`, {
        "aria-label": l,
        className: m,
        ref: h,
        role: `menu`,
        style: g,
        tabIndex: -1,
        children: [
          e == null ? null : o(e),
          e != null && n.length > 0
            ? (0, _t.jsx)(`div`, {
                "aria-hidden": !0,
                className: H(!u && `w-full [border-top:1px_solid_var(--oai-wb-divider)]`, a?.separator),
                role: `separator`,
              })
            : null,
          n.map(o),
        ],
      })),
      (t[38] = a?.disabledItem),
      (t[39] = a?.highlightedItem),
      (t[40] = a?.item),
      (t[41] = a?.menu),
      (t[42] = a?.separator),
      (t[43] = v),
      (t[44] = M),
      (t[45] = s),
      (t[46] = A),
      (t[47] = w),
      (t[48] = r),
      (t[49] = c),
      (t[50] = u),
      (t[51] = E),
      (t[52] = ee));
  } else ee = t[52];
  return ee;
}
function ft(e) {
  return e.id !== `generate`;
}
function pt(e) {
  return e.id === `generate`;
}
function mt(e) {
  return [e.id, e];
}
var ht, gt, _t;
function vt() {
  return (vt = e(() => {
    ((ht = K()), I(), (gt = q()), Y(), Fe(), Re(), (_t = xe()));
  }))();
}
function yt(e) {
  let t = Object.fromEntries(Object.entries(e.attrs).filter(([e, t]) => t != null && !Et.has(e)));
  return (
    e.type.name === qe.ORDERED_LIST && ((t.startingNumber ??= t.order), delete t.order),
    e.type.name === qe.CODE_BLOCK && ((t.lang ||= t.language), delete t.language),
    t
  );
}
function bt(e) {
  let t = Object.values(Ze).find((t) => t === e.type.name);
  if (t == null) throw Error(`Unsupported collaborative document mark: ${e.type.name}`);
  let n = Object.fromEntries(Object.entries(e.attrs).filter(([, e]) => e != null));
  return { type: t, ...(Object.keys(n).length === 0 ? {} : { attrs: n }) };
}
function xt(e) {
  let t = Object.values(qe).find((t) => t === e.type.name);
  if (t == null) throw Error(`Unsupported collaborative document node: ${e.type.name}`);
  let n = yt(e),
    r = [];
  e.forEach((e) => {
    r.push(xt(e));
  });
  let i = e.type.name === `writing_block_image` ? [] : e.marks.filter((e) => !Dt.has(e.type.name)).map(bt);
  if (!e.isText && i.length > 0) throw Error(`Collaborative document marks require text nodes`);
  return {
    type: t,
    ...(Object.keys(n).length === 0 ? {} : { attrs: n }),
    ...(r.length === 0 ? {} : { content: r }),
    ...(i.length === 0 ? {} : { marks: i }),
    ...(e.isText ? { text: e.text ?? `` } : {}),
  };
}
function St(e) {
  let t = [];
  return (
    e.content.forEach((e) => {
      t.push(xt(e));
    }),
    { content: t, openStart: e.openStart, openEnd: e.openEnd }
  );
}
function Ct(e, t) {
  return { anchor: { position: e, affinity: Ye.FORWARD }, head: { position: t, affinity: Ye.FORWARD } };
}
function wt(e, t, n) {
  if (e instanceof Oe) return e.changes.toReversed().flatMap((e) => wt(e, t, n));
  if (e instanceof s)
    return [
      {
        kind: Je.REPLACE_RANGE,
        replaceRange: {
          range: Ct(e.from, e.to),
          replacement: { kind: Xe.SLICE, slice: St(e.slice) },
          structure: e.toJSON().structure === !0,
        },
      },
    ];
  if (e instanceof C)
    return [
      {
        kind: Je.REPLACE_AROUND,
        replaceAround: {
          range: Ct(e.from, e.to),
          gap: Ct(e.gapFrom, e.gapTo),
          slice: St(e.slice),
          insert: e.insert,
          structure: e.toJSON().structure === !0,
        },
      },
    ];
  if (e instanceof U || e instanceof R) {
    if (Dt.has(e.mark.type.name)) return [];
    let n = bt(e.mark),
      r = [];
    return (
      t.nodesBetween(e.from, e.to, (t, i, a) => {
        if (!t.isInline) return;
        let o = e instanceof R && e.mark.isInSet(t.marks),
          s =
            e instanceof U &&
            t.isAtom &&
            a?.type.allowsMarkType(e.mark.type) === !0 &&
            !v.sameSet(t.marks, e.mark.addToSet(t.marks));
        if (s || o) {
          if (!t.isText) {
            if (t.type.name === `writing_block_image`) return;
            throw Error(`Collaborative document marks require text nodes`);
          }
          r.push({
            kind: Je.SET_MARK,
            setMark: { range: Ct(Math.max(e.from, i), Math.min(e.to, i + t.nodeSize)), mark: n, enabled: s },
          });
        }
      }),
      r
    );
  }
  if (e instanceof F) {
    if (Et.has(e.attr)) return [];
    let t = n.nodeAt(e.pos);
    if (t == null || t.isText) throw Error(`Unsupported collaborative document attribute change`);
    return [{ kind: Je.SET_NODE_ATTRIBUTES, setNodeAttributes: { position: e.pos, attrs: yt(t) } }];
  }
  if (
    (e instanceof _e && Et.has(e.attr)) ||
    ((e instanceof V || e instanceof be) && Dt.has(e.mark.type.name))
  )
    return [];
  throw Error(`Unsupported collaborative document step`);
}
function Tt(e, t, n) {
  let r = e,
    i = [];
  for (let e of n) {
    let t = e.apply(r);
    if (t.doc == null) throw Error(`Collaborative document steps could not be replayed`);
    (i.push(...wt(e, r, t.doc)), (r = t.doc));
  }
  if (!r.eq(t)) throw Error(`Collaborative document steps do not match the editor`);
  return (
    t.descendants((e) => {
      if (e.type.name === `writing_block_image` && e.marks.some((e) => !Dt.has(e.type.name)))
        throw Error(`Collaborative document images cannot have marks`);
    }),
    i
  );
}
var Et, Dt;
function Ot() {
  return (Ot = e(() => {
    (We(),
      N(),
      ie(),
      je(),
      De(),
      (Et = new Set([`start`, `end`, `isDarkMode`])),
      (Dt = new Set([`startend`, `generate_suggestion`])));
  }))();
}
function kt(e, t) {
  return new o(h.fromArray(e.content.map((e) => t.nodeFromJSON(e))), e.openStart, e.openEnd);
}
function At(e) {
  let t = Rt.get(e);
  return (
    (t == null || t.editor !== e.editor) &&
      ((t = { editor: e.editor, undo: [], redo: [], pending: void 0 }), Rt.set(e, t)),
    t
  );
}
function jt(e, t) {
  let n = e.snapshot().revision,
    r = e.createAnchor({
      baseRevision: n,
      point: { position: t.selection.anchor, affinity: Ye.FORWARD },
    }).anchor,
    i = e.createAnchor({
      baseRevision: n,
      point: { position: t.selection.head, affinity: Ye.FORWARD },
    }).anchor;
  return r == null || i == null ? void 0 : { anchor: r, head: i };
}
function Mt(e, t) {
  let n = e.editor.snapshot().document;
  return n == null ? null : t.nodeFromJSON(n.ast);
}
function Nt(
  e,
  t,
  n,
  r,
  i,
  { editId: a = `editor-edit:${++zt}`, addToHistory: o = !0, onConversionError: s } = {},
) {
  let c;
  try {
    c = Tt(t.doc, n.doc, r);
  } catch (e) {
    return (s?.(e instanceof Error ? e.name : typeof e), !1);
  }
  if (c.length === 0) return !0;
  let l = e.editor,
    u = o ? jt(l, t) : void 0,
    d = { baseRevision: l.snapshot().revision, editId: a, undoGroup: i, addToHistory: o, operations: c },
    f = l.applyLocalEdits(d);
  if (o && f.status === Ue.APPLIED) {
    let t = jt(l, n),
      r = At(e),
      a = r.undo.at(-1);
    (a?.undoGroup === i ? (a.after = t) : r.undo.push({ undoGroup: i, before: u, after: t }),
      (r.redo.length = 0));
  }
  return f.status !== Ue.REJECTED;
}
function Pt(e, t) {
  let n = At(e),
    r = t ? n.redo : n.undo,
    i = t ? n.undo : n.redo,
    a = r.at(-1);
  n.pending = t ? a?.after : a?.before;
  let o = { baseRevision: e.editor.snapshot().revision, editId: `web-${t ? `redo` : `undo`}:${++zt}` },
    s = t ? e.editor.redo(o) : e.editor.undo(o);
  return ((n.pending = void 0), s.status === Ue.APPLIED && (a != null && (r.pop(), i.push(a)), !0));
}
function Ft(e, t) {
  return (n, r) => (r == null ? e.editor.snapshot().history[t ? `canRedo` : `canUndo`] : Pt(e, t));
}
function It(e, t) {
  return new B({
    key: Lt,
    filterTransaction(t) {
      return (
        !t.docChanged || t.getMeta(Lt)?.isChangeOrigin === !0 || e.editor.snapshot().status === Ke.EDITABLE
      );
    },
    view(n) {
      return {
        destroy: e.subscribeToEditorChanges((r) => {
          if (
            (r.origin === Ge.LOCAL && r.editId?.startsWith(`${t}:`)) ||
            r.patches.length === 0 ||
            n.isDestroyed
          )
            return;
          let i = n.state.tr;
          try {
            for (let e of r.patches) i.replace(e.from, e.to, kt(e.slice, n.state.schema));
          } catch {
            let t = Mt(e, n.state.schema);
            if (t == null) return;
            i.replaceWith(0, i.doc.content.size, t.content);
          }
          if (i.docChanged) {
            if (r.origin === Ge.HISTORY) {
              let t = At(e).pending;
              if (t != null) {
                let n = e.editor.resolveSelection(t).selection;
                if (n != null) {
                  let e = i.doc.content.size,
                    t = Math.min(Math.max(n.anchor.position, 0), e),
                    r = Math.min(Math.max(n.head.position, 0), e);
                  i.setSelection(ne.between(i.doc.resolve(t), i.doc.resolve(r), t <= r ? 1 : -1));
                }
              }
            }
            (i.setMeta(`addToHistory`, !1),
              i.setMeta(Lt, { isChangeOrigin: !0, isUndoRedoOperation: r.origin === Ge.HISTORY }),
              n.dispatch(i));
          }
        }),
      };
    },
  });
}
var Lt, Rt, zt;
function Bt() {
  return (Bt = e(() => {
    (We(),
      N(),
      de(),
      Ot(),
      (Lt = new ue(`writing-block-collaborative-sync`)),
      (Rt = new WeakMap()),
      (zt = 0));
  }))();
}
function Vt(e) {
  let t = (0, Wt.c)(50),
    { editorView: i, link: a, onEdit: o } = e,
    s = P(),
    c;
  t[0] !== i.state.doc || t[1] !== a.from || t[2] !== a.to
    ? ((c = i.state.doc.textBetween(a.from, a.to)),
      (t[0] = i.state.doc),
      (t[1] = a.from),
      (t[2] = a.to),
      (t[3] = c))
    : (c = t[3]);
  let l;
  t[4] !== i.state.doc || t[5] !== a.from || t[6] !== a.href || t[7] !== a.to || t[8] !== c
    ? ((l = c === a.href),
      i.state.doc.nodesBetween(a.from, a.to, (e) => {
        l ||= e.marks.some(Ut);
      }),
      (t[4] = i.state.doc),
      (t[5] = a.from),
      (t[6] = a.href),
      (t[7] = a.to),
      (t[8] = c),
      (t[9] = l))
    : (l = t[9]);
  let u;
  t[10] === a.href
    ? (u = t[11])
    : ((u = a.href.length > 34 ? `${a.href.slice(0, 34)}…` : a.href), (t[10] = a.href), (t[11] = u));
  let d = u,
    p;
  t[12] !== i ||
  t[13] !== s ||
  t[14] !== l ||
  t[15] !== a.from ||
  t[16] !== a.href ||
  t[17] !== a.to ||
  t[18] !== d ||
  t[19] !== o
    ? ((p =
        !l &&
        (0, Z.jsxs)(Z.Fragment, {
          children: [
            (0, Z.jsx)(`span`, {
              className: `max-w-56 truncate px-2 text-xs text-secondary select-none`,
              title: a.href,
              children: d,
            }),
            (0, Z.jsx)(n, {
              color: `ghostActive`,
              size: `toolbar`,
              "aria-label": s.formatMessage({
                id: `codex.writingBlock.format.editExistingLink`,
                defaultMessage: `Edit link`,
                description: `Accessible name for the floating writing-block toolbar button that edits the hyperlink at the current text cursor in Codex Apps.`,
              }),
              uniform: !0,
              onClick: o,
              children: (0, Z.jsx)(W, {}),
            }),
            (0, Z.jsx)(n, {
              color: `ghostActive`,
              size: `toolbar`,
              "aria-label": s.formatMessage({
                id: `codex.writingBlock.format.removeLink`,
                defaultMessage: `Remove link`,
                description: `Accessible name for the floating writing-block toolbar button that removes hyperlink formatting from the text at the current cursor in Codex Apps.`,
              }),
              uniform: !0,
              onClick: () => {
                let e = i.state.schema.marks.link;
                e != null && (i.dispatch(i.state.tr.removeMark(a.from, a.to, e)), i.focus());
              },
              children: (0, Z.jsx)(b, { asset: ye }),
            }),
            (0, Z.jsx)(`div`, { "aria-hidden": !0, className: `mx-1 h-3 w-px shrink-0 bg-border` }),
          ],
        })),
      (t[12] = i),
      (t[13] = s),
      (t[14] = l),
      (t[15] = a.from),
      (t[16] = a.href),
      (t[17] = a.to),
      (t[18] = d),
      (t[19] = o),
      (t[20] = p))
    : (p = t[20]);
  let m;
  t[21] !== a.from || t[22] !== a.href || t[23] !== a.to
    ? ((m = JSON.stringify([a.href, a.from, a.to])),
      (t[21] = a.from),
      (t[22] = a.href),
      (t[23] = a.to),
      (t[24] = m))
    : (m = t[24]);
  let h;
  t[25] === s
    ? (h = t[26])
    : ((h = s.formatMessage({
        id: `codex.writingBlock.format.copyLink`,
        defaultMessage: `Copy link`,
        description: `Accessible name for the floating writing-block toolbar button that copies the URL of the hyperlink at the current text cursor in Codex Apps.`,
      })),
      (t[25] = s),
      (t[26] = h));
  let g;
  t[27] === s
    ? (g = t[28])
    : ((g = s.formatMessage({
        id: `codex.writingBlock.format.copyLinkLabel`,
        defaultMessage: `Copy`,
        description: `Label for the floating writing-block toolbar button that copies the selected link URL`,
      })),
      (t[27] = s),
      (t[28] = g));
  let _;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { copy: (0, Z.jsx)(he, {}), copied: (0, Z.jsx)(f, {}) }), (t[29] = _))
    : (_ = t[29]);
  let v;
  t[30] === a.href ? (v = t[31]) : ((v = (e) => fe(a.href, e)), (t[30] = a.href), (t[31] = v));
  let x;
  t[32] !== m || t[33] !== h || t[34] !== g || t[35] !== v
    ? ((x = (0, Z.jsx)(Ee, { ariaLabel: h, buttonText: g, icons: _, onCopy: v, renderButton: Ht }, m)),
      (t[32] = m),
      (t[33] = h),
      (t[34] = g),
      (t[35] = v),
      (t[36] = x))
    : (x = t[36]);
  let S;
  t[37] === s
    ? (S = t[38])
    : ((S = s.formatMessage({
        id: `codex.writingBlock.format.openLink`,
        defaultMessage: `Open link`,
        description: `Accessible name for the floating writing-block toolbar button that safely opens the hyperlink at the current text cursor in Codex Apps.`,
      })),
      (t[37] = s),
      (t[38] = S));
  let C;
  t[39] === a.href
    ? (C = t[40])
    : ((C = (e) => {
        Pe({ event: e, href: a.href, initiator: `open_in_browser_bridge` });
      }),
      (t[39] = a.href),
      (t[40] = C));
  let w, T;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(r, {})),
      (T = (0, Z.jsx)(y, {
        id: `codex.writingBlock.format.openLinkLabel`,
        defaultMessage: `Open`,
        description: `Label for the floating writing-block toolbar button that opens the selected link URL`,
      })),
      (t[41] = w),
      (t[42] = T))
    : ((w = t[41]), (T = t[42]));
  let E;
  t[43] !== S || t[44] !== C
    ? ((E = (0, Z.jsxs)(n, {
        color: `ghostActive`,
        size: `toolbar`,
        "aria-label": S,
        onClick: C,
        children: [w, T],
      })),
      (t[43] = S),
      (t[44] = C),
      (t[45] = E))
    : (E = t[45]);
  let D;
  return (
    t[46] !== E || t[47] !== p || t[48] !== x
      ? ((D = (0, Z.jsxs)(Z.Fragment, { children: [p, x, E] })),
        (t[46] = E),
        (t[47] = p),
        (t[48] = x),
        (t[49] = D))
      : (D = t[49]),
    D
  );
}
function Ht(e) {
  return (0, Z.jsx)(n, { ...e, color: `ghostActive`, size: `toolbar` });
}
function Ut(e) {
  return e.type.name === `link` && e.attrs.isAutolink === !0;
}
var Wt, Z;
function Gt() {
  return (Gt = e(() => {
    ((Wt = K()), u(), ae(), G(), z(), ke(), x(), D(), re(), (Z = xe()));
  }))();
}
function Kt(e) {
  let t = (0, Yt.c)(89),
    {
      editable: r,
      editorView: i,
      isEditSelectionLoading: a,
      isOpenLinkModifierPressed: o,
      onAskForChanges: s,
      onCancelEditSelection: u,
      onEditSelection: d,
      onEditSelectionOpenChange: f,
      proseMirrorStore: p,
      trailingActions: m,
    } = e,
    h = r === void 0 || r,
    g = a !== void 0 && a,
    _ = o !== void 0 && o,
    v = P(),
    b = j(),
    [x, S] = (0, Q.useState)(`actions`),
    [C, D] = (0, Q.useState)(``),
    [k, A] = (0, Q.useState)(null),
    [M, N] = (0, Q.useState)(!0),
    F;
  t[0] !== i.isDestroyed || t[1] !== i.state
    ? ((F = () => (i.isDestroyed ? null : i.state.selection)),
      (t[0] = i.isDestroyed),
      (t[1] = i.state),
      (t[2] = F))
    : (F = t[2]);
  let I = F,
    L = (0, Q.useSyncExternalStore)(p.subscribe, I, I),
    R;
  t[3] === L ? (R = t[4]) : ((R = ze(L)), (t[3] = L), (t[4] = R));
  let z = R,
    B = k?.from ?? z?.from ?? L?.from,
    V = k?.to ?? z?.to ?? L?.to,
    H;
  t[5] !== i.state || t[6] !== L
    ? ((H = L instanceof me && L.node.type.name === `writing_block_image` && Lt.get(i.state) != null),
      (t[5] = i.state),
      (t[6] = L),
      (t[7] = H))
    : (H = t[7]);
  let U = M && !H && !i.isDestroyed && B != null && V != null && B !== V,
    W;
  t[8] !== i || t[9] !== B || t[10] !== V
    ? ((W = {
        contextElement: i.dom,
        getBoundingClientRect() {
          if (B != null && V != null && !i.isDestroyed)
            try {
              let e = i.coordsAtPos(B),
                t = i.coordsAtPos(V),
                n = Math.min(e.left, t.left),
                r = Math.max(e.right, t.right),
                a = Math.min(e.top, t.top),
                o = Math.max(e.bottom, t.bottom);
              return DOMRect.fromRect({ height: o - a, width: r - n, x: n, y: a });
            } catch {}
          return i.dom.getBoundingClientRect();
        },
      }),
      (t[8] = i),
      (t[9] = B),
      (t[10] = V),
      (t[11] = W))
    : (W = t[11]);
  let re = W,
    ie;
  t[12] === re ? (ie = t[13]) : ((ie = { reference: re }), (t[12] = re), (t[13] = ie));
  let ae;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = [
        te(8),
        ee({ padding: 8 }),
        Se({ padding: 8 }),
        T({
          padding: 8,
          apply(e) {
            let { availableWidth: t, elements: n } = e;
            n.floating.style.maxWidth = `${t}px`;
          },
        }),
      ]),
      (t[14] = ae))
    : (ae = t[14]);
  let se;
  t[15] !== U || t[16] !== ie
    ? ((se = { elements: ie, middleware: ae, open: U, placement: `top`, whileElementsMounted: ve }),
      (t[15] = U),
      (t[16] = ie),
      (t[17] = se))
    : (se = t[17]);
  let { floatingStyles: ce, refs: le } = l(se),
    { floating: ue, setFloating: de } = le,
    fe;
  t[18] !== i || t[19] !== x || t[20] !== f
    ? ((fe = (e) => {
        let t = e === void 0 || e;
        (x === `edit` && f?.(!1), A(null), D(``), S(`actions`), t && !i.isDestroyed && i.focus());
      }),
      (t[18] = i),
      (t[19] = x),
      (t[20] = f),
      (t[21] = fe))
    : (fe = t[21]);
  let pe = fe,
    he;
  t[22] !== pe || t[23] !== x || t[24] !== u
    ? ((he = (e) => {
        (x === `edit` && u?.(), pe(e));
      }),
      (t[22] = pe),
      (t[23] = x),
      (t[24] = u),
      (t[25] = he))
    : (he = t[25]);
  let G = he,
    _e;
  t[26] !== G || t[27] !== i.dom || t[28] !== ue
    ? ((_e = (e) => {
        (e instanceof Node &&
          (i.dom.contains(e) ||
            ue.current?.contains(e) ||
            (e instanceof Element && e.closest(`[role="menu"]`) != null))) ||
          (G(!1), N(!1));
      }),
      (t[26] = G),
      (t[27] = i.dom),
      (t[28] = ue),
      (t[29] = _e))
    : (_e = t[29]);
  let K = _e,
    ye;
  t[30] === K
    ? (ye = t[31])
    : ((ye = (e) => {
        K(e.relatedTarget);
      }),
      (t[30] = K),
      (t[31] = ye));
  let be = (0, Q.useEffectEvent)(ye),
    xe;
  t[32] !== G || t[33] !== ue || t[34] !== x
    ? ((xe = (e) => {
        x === `actions` ||
          !(e.target instanceof Node) ||
          ue.current?.contains(e.target) ||
          (e.target instanceof Element && e.target.closest(`[role="menu"]`) != null) ||
          G(!1);
      }),
      (t[32] = G),
      (t[33] = ue),
      (t[34] = x),
      (t[35] = xe))
    : (xe = t[35]);
  let we = (0, Q.useEffectEvent)(xe),
    Te;
  t[36] !== i.dom || t[37] !== be || t[38] !== we
    ? ((Te = () => {
        let e = (e) => {
            be(e);
          },
          t = (e) => {
            we(e);
          },
          n = () => N(!0),
          r = i.dom.ownerDocument;
        return (
          i.dom.addEventListener(`focusout`, e),
          i.dom.addEventListener(`focusin`, n),
          r.addEventListener(`pointerdown`, t),
          () => {
            (i.dom.removeEventListener(`focusout`, e),
              i.dom.removeEventListener(`focusin`, n),
              r.removeEventListener(`pointerdown`, t));
          }
        );
      }),
      (t[36] = i.dom),
      (t[37] = be),
      (t[38] = we),
      (t[39] = Te))
    : (Te = t[39]);
  let Ee;
  if (
    (t[40] === i ? (Ee = t[41]) : ((Ee = [i]), (t[40] = i), (t[41] = Ee)),
    (0, Q.useEffect)(Te, Ee),
    !U || B == null || V == null || (x === `actions` && z != null && _))
  )
    return null;
  let q;
  t[42] !== z?.href || t[43] !== B || t[44] !== f || t[45] !== V
    ? ((q = (e) => {
        (A({ from: B, to: V }), D(e === `link` ? (z?.href ?? ``) : ``), S(e), e === `edit` && f?.(!0));
      }),
      (t[42] = z?.href),
      (t[43] = B),
      (t[44] = f),
      (t[45] = V),
      (t[46] = q))
    : (q = t[46]);
  let De = q,
    J = x === `link`,
    Oe;
  if (J) {
    let e;
    (t[47] === v
      ? (e = t[48])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.format.saveLink`,
          defaultMessage: `Save link`,
          description: `Accessible name for the button that adds a hyperlink to selected text in a Codex Apps writing block.`,
        })),
        (t[47] = v),
        (t[48] = e)),
      (Oe = e));
  } else if (g) {
    let e;
    (t[49] === v
      ? (e = t[50])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.format.cancelEdit`,
          defaultMessage: `Cancel`,
          description: `Accessible name for the stop button in the selected-text AI edit composer of a Codex Apps writing block. It cancels the pending request and leaves the instruction available to retry.`,
        })),
        (t[49] = v),
        (t[50] = e)),
      (Oe = e));
  } else {
    let e;
    (t[51] === v
      ? (e = t[52])
      : ((e = v.formatMessage({
          id: `codex.writingBlock.format.submitEdit`,
          defaultMessage: `Submit edit instruction`,
          description: `Accessible name for the button that submits an AI edit instruction for selected text in a Codex Apps writing block.`,
        })),
        (t[51] = v),
        (t[52] = e)),
      (Oe = e));
  }
  let ke;
  t[53] === K ? (ke = t[54]) : ((ke = (e) => K(e.relatedTarget)), (t[53] = K), (t[54] = ke));
  let Ae = b === 1 ? void 0 : b,
    je;
  t[55] === Ae ? (je = t[56]) : ((je = { zoom: Ae }), (t[55] = Ae), (t[56] = je));
  let Y;
  t[57] !== z ||
  t[58] !== pe ||
  t[59] !== G ||
  t[60] !== h ||
  t[61] !== i ||
  t[62] !== B ||
  t[63] !== v ||
  t[64] !== g ||
  t[65] !== J ||
  t[66] !== x ||
  t[67] !== s ||
  t[68] !== u ||
  t[69] !== d ||
  t[70] !== f ||
  t[71] !== De ||
  t[72] !== L?.ranges ||
  t[73] !== Oe ||
  t[74] !== V ||
  t[75] !== m ||
  t[76] !== C
    ? ((Y =
        x === `actions` || !h
          ? (0, $.jsxs)(Me, {
              variant: h ? `formatting` : `segmented`,
              children: [
                !h && m,
                h && z != null && (0, $.jsx)(Vt, { editorView: i, link: z, onEdit: () => De(`link`) }),
                h &&
                  z == null &&
                  (0, $.jsxs)($.Fragment, {
                    children: [
                      s != null &&
                        (0, $.jsx)(n, {
                          color: `ghostActive`,
                          size: `formatToolbar`,
                          onClick: () => {
                            (i.dispatch(i.state.tr.setSelection(ne.create(i.state.doc, B, V))), s(i));
                          },
                          children: (0, $.jsx)(y, {
                            id: `codex.writingBlock.format.askForChanges`,
                            defaultMessage: `Ask for changes`,
                            description: `Button in the floating writing-block toolbar that quotes the selected draft text in the chat composer so the user can request a revision.`,
                          }),
                        }),
                      s == null &&
                        d != null &&
                        (0, $.jsx)(n, {
                          color: `ghostActive`,
                          size: `formatToolbar`,
                          onClick: () => De(`edit`),
                          children: (0, $.jsx)(y, {
                            id: `codex.writingBlock.format.askForSelectionEdit`,
                            defaultMessage: `Ask for changes`,
                            description: `Button in the floating Codex Apps writing-block toolbar that opens an AI edit composer for the currently selected text.`,
                          }),
                        }),
                      (s != null || d != null) &&
                        (0, $.jsx)(`div`, {
                          "aria-hidden": !0,
                          className: `mx-1 h-3 w-px shrink-0 bg-border`,
                        }),
                      (0, $.jsx)(Ve, {
                        actions: [`link`, `bold`, `italic`],
                        editorView: i,
                        labels: {
                          bold: v.formatMessage({
                            id: `codex.writingBlock.format.bold`,
                            defaultMessage: `Bold`,
                            description: `Accessible name for the floating writing-block toolbar button that toggles bold formatting on selected text in Codex Apps.`,
                          }),
                          code: v.formatMessage({
                            id: `codex.writingBlock.format.code`,
                            defaultMessage: `Code`,
                            description: `Accessible name for the floating writing-block toolbar button that toggles inline code formatting on selected text in Codex Apps.`,
                          }),
                          italic: v.formatMessage({
                            id: `codex.writingBlock.format.italic`,
                            defaultMessage: `Italic`,
                            description: `Accessible name for the floating writing-block toolbar button that toggles italic formatting on selected text in Codex Apps.`,
                          }),
                          link: v.formatMessage({
                            id: `codex.writingBlock.format.link`,
                            defaultMessage: `Link`,
                            description: `Accessible name for the floating writing-block toolbar button that adds or removes a hyperlink on selected text in Codex Apps.`,
                          }),
                        },
                        onEditLink: () => De(`link`),
                        ranges: L?.ranges,
                        renderAction: Jt,
                        trailingActions: (0, $.jsxs)($.Fragment, {
                          children: [
                            (0, $.jsx)(Be, {
                              editorView: i,
                              labels: {
                                checklist: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.checklist`,
                                  defaultMessage: `Checklist`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into an unchecked checklist.`,
                                }),
                                heading1: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.heading1`,
                                  defaultMessage: `Heading 1`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-one heading.`,
                                }),
                                heading2: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.heading2`,
                                  defaultMessage: `Heading 2`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-two heading.`,
                                }),
                                heading3: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.heading3`,
                                  defaultMessage: `Heading 3`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into a level-three heading.`,
                                }),
                                orderedList: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.numberedList`,
                                  defaultMessage: `Numbered list`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into a numbered list.`,
                                }),
                                paragraph: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.text`,
                                  defaultMessage: `Text`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into an ordinary paragraph.`,
                                }),
                                unorderedList: v.formatMessage({
                                  id: `codex.writingBlock.format.textStyle.bulletedList`,
                                  defaultMessage: `Bulleted list`,
                                  description: `Writing-block formatting-menu option in Codex Apps that converts the selected text into a bulleted list.`,
                                }),
                              },
                              renderMenu: (e) => {
                                let { activeStyle: t, options: r } = e;
                                return (0, $.jsx)(c, {
                                  align: `start`,
                                  contentWidth: `menuBounded`,
                                  onOpenChange: (e) => {
                                    A(e ? { from: B, to: V } : null);
                                  },
                                  triggerButton: (0, $.jsxs)(n, {
                                    "aria-label": v.formatMessage({
                                      id: `codex.writingBlock.format.textStyles`,
                                      defaultMessage: `Text styles`,
                                      description: `Accessible name for the floating writing-block formatting menu in Codex Apps that offers paragraph, heading, list, and checklist styles.`,
                                    }),
                                    color: `ghostActive`,
                                    size: `formatToolbar`,
                                    onMouseDown: qt,
                                    children: [r.find((e) => e.style === t)?.label, (0, $.jsx)(oe, {})],
                                  }),
                                  children: r.map((e) => {
                                    let { isActive: t, label: n, onSelect: r, style: a } = e;
                                    return (0, $.jsx)(
                                      O.Item,
                                      {
                                        "aria-checked": t,
                                        rightIconAsset: t ? Ce : void 0,
                                        role: `menuitemradio`,
                                        onSelect: () => {
                                          (i.dispatch(i.state.tr.setSelection(ne.create(i.state.doc, B, V))),
                                            r());
                                        },
                                        children: n,
                                      },
                                      a,
                                    );
                                  }),
                                });
                              },
                            }),
                            m,
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            })
          : (0, $.jsxs)(`form`, {
              "aria-busy": !J && g,
              className: `pointer-events-auto flex w-96 max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg`,
              onKeyDown: (e) => {
                (e.stopPropagation(),
                  e.key === `Escape` && !e.nativeEvent.isComposing && (e.preventDefault(), G(!0)));
              },
              onSubmit: (e) => {
                e.preventDefault();
                let t = C.trim();
                if (!t || (!J && g)) return;
                if (!J) {
                  (f?.(!0),
                    d?.(t, { from: B, to: V }).then((e) => {
                      e && !i.isDestroyed && pe();
                    }));
                  return;
                }
                let n = E(t),
                  r = i.state.schema.marks.link;
                n != null &&
                  r != null &&
                  (i.dispatch(
                    i.state.tr
                      .setSelection(ne.create(i.state.doc, B, V))
                      .removeMark(B, V, r)
                      .addMark(B, V, r.create({ href: n })),
                  ),
                  pe());
              },
              children: [
                (0, $.jsx)(`input`, {
                  "aria-label": J
                    ? v.formatMessage({
                        id: `codex.writingBlock.format.linkInput`,
                        defaultMessage: `Link URL`,
                        description: `Accessible name for the URL input shown when adding a hyperlink to selected text in a Codex Apps writing block.`,
                      })
                    : v.formatMessage({
                        id: `codex.writingBlock.format.editInput`,
                        defaultMessage: `Edit instruction`,
                        description: `Accessible name for the AI edit instruction input shown when editing selected text in a Codex Apps writing block.`,
                      }),
                  autoComplete: `off`,
                  autoFocus: !0,
                  className: `min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description`,
                  name: J ? `writing-block-link` : `writing-block-edit`,
                  placeholder: J
                    ? v.formatMessage({
                        id: `codex.writingBlock.format.linkPlaceholder`,
                        defaultMessage: `Paste a link…`,
                        description: `Placeholder in the URL input shown when adding a hyperlink to selected text in a Codex Apps writing block.`,
                      })
                    : v.formatMessage({
                        id: `codex.writingBlock.format.editPlaceholder`,
                        defaultMessage: `Describe the edit…`,
                        description: `Placeholder in the AI edit instruction input shown when editing selected text in a Codex Apps writing block.`,
                      }),
                  required: !0,
                  readOnly: !J && g,
                  value: C,
                  onChange: (e) => D(e.target.value),
                }),
                (0, $.jsx)(n, {
                  "aria-label": Oe,
                  color: `primary`,
                  disabled: !g && C.trim().length === 0,
                  onClick:
                    !J && g
                      ? (e) => {
                          (e.preventDefault(), u?.());
                        }
                      : void 0,
                  size: `composerSm`,
                  type: !J && g ? `button` : `submit`,
                  uniform: !0,
                  children: !J && g ? (0, $.jsx)(w, {}) : (0, $.jsx)(ge, {}),
                }),
              ],
            })),
      (t[57] = z),
      (t[58] = pe),
      (t[59] = G),
      (t[60] = h),
      (t[61] = i),
      (t[62] = B),
      (t[63] = v),
      (t[64] = g),
      (t[65] = J),
      (t[66] = x),
      (t[67] = s),
      (t[68] = u),
      (t[69] = d),
      (t[70] = f),
      (t[71] = De),
      (t[72] = L?.ranges),
      (t[73] = Oe),
      (t[74] = V),
      (t[75] = m),
      (t[76] = C),
      (t[77] = Y))
    : (Y = t[77]);
  let Ne;
  t[78] !== je || t[79] !== Y
    ? ((Ne = (0, $.jsx)(`div`, { style: je, children: Y })), (t[78] = je), (t[79] = Y), (t[80] = Ne))
    : (Ne = t[80]);
  let Pe;
  t[81] !== ce || t[82] !== de || t[83] !== ke || t[84] !== Ne
    ? ((Pe = (0, $.jsx)(`div`, { ref: de, className: `z-50`, style: ce, onBlur: ke, children: Ne })),
      (t[81] = ce),
      (t[82] = de),
      (t[83] = ke),
      (t[84] = Ne),
      (t[85] = Pe))
    : (Pe = t[85]);
  let Fe;
  return (
    t[86] !== i.dom.ownerDocument.body || t[87] !== Pe
      ? ((Fe = (0, Xt.createPortal)(Pe, i.dom.ownerDocument.body)),
        (t[86] = i.dom.ownerDocument.body),
        (t[87] = Pe),
        (t[88] = Fe))
      : (Fe = t[88]),
    Fe
  );
}
function qt(e) {
  return e.preventDefault();
}
function Jt(e) {
  let { action: t, isActive: r, label: i, onClick: a } = e;
  return (0, $.jsxs)(n, {
    "aria-label": i,
    "aria-pressed": r,
    color: r ? `accentSubtle` : `ghostActive`,
    size: `formatToolbarIcon`,
    onClick: a,
    children: [
      t === `link` && (0, $.jsx)(pe, {}),
      t === `bold` && (0, $.jsx)(b, { asset: m }),
      t === `italic` && (0, $.jsx)(_, {}),
    ],
  });
}
var Yt, Q, Xt, $;
function Zt() {
  return (Zt = e(() => {
    ((Yt = K()),
      ce(),
      Te(),
      L(),
      A(),
      Bt(),
      He(),
      de(),
      (Q = q()),
      (Xt = we()),
      ae(),
      d(),
      G(),
      i(),
      Ie(),
      x(),
      D(),
      Gt(),
      ($ = xe()));
  }))();
}
function Qt(e) {
  let t = (0, en.c)(74),
    { editorView: n, state: r, onExecute: i } = e,
    a = P(),
    o = j(),
    s = r?.anchorPos,
    c = !n.isDestroyed && r?.anchorPos != null && r.triggerPos != null,
    u = n.dom.ownerDocument,
    d;
  t[0] !== s || t[1] !== n
    ? ((d = {
        contextElement: n.dom,
        getBoundingClientRect() {
          if (s != null && !n.isDestroyed)
            try {
              let { bottom: e, left: t } = n.coordsAtPos(s);
              return $t(t, e);
            } catch {}
          let e = n.dom.getBoundingClientRect();
          return $t(e.left, e.bottom);
        },
      }),
      (t[0] = s),
      (t[1] = n),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    p;
  t[3] === f ? (p = t[4]) : ((p = { reference: f }), (t[3] = f), (t[4] = p));
  let m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [te(8), ee({ padding: 8 }), Se({ padding: 8 })]), (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] !== c || t[7] !== p
    ? ((h = { elements: p, middleware: m, open: c, placement: `bottom-start`, whileElementsMounted: ve }),
      (t[6] = c),
      (t[7] = p),
      (t[8] = h))
    : (h = t[8]);
  let { floatingStyles: g, refs: _ } = l(h),
    { setFloating: v } = _;
  if (!c) return null;
  let y;
  t[9] === a
    ? (y = t[10])
    : ((y = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.checklist.label`,
        defaultMessage: `Checklist`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it creates a checkbox task-list item; sibling options create text, headings, and ordinary lists.`,
      })),
      (t[9] = a),
      (t[10] = y));
  let b;
  t[11] === a
    ? (b = t[12])
    : ((b = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.columnDelete.label`,
        defaultMessage: `Delete column`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it deletes the current table column; sibling options add a column to the left or right when table commands are available.`,
      })),
      (t[11] = a),
      (t[12] = b));
  let x;
  t[13] === a
    ? (x = t[14])
    : ((x = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.columnLeft.label`,
        defaultMessage: `Add column left`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table column to the left of the current column when table commands are available.`,
      })),
      (t[13] = a),
      (t[14] = x));
  let S;
  t[15] === a
    ? (S = t[16])
    : ((S = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.columnRight.label`,
        defaultMessage: `Add column right`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table column to the right of the current column when table commands are available.`,
      })),
      (t[15] = a),
      (t[16] = S));
  let C;
  t[17] === a
    ? (C = t[18])
    : ((C = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.divider.label`,
        defaultMessage: `Divider`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a horizontal divider; sibling options insert text blocks, lists, or tables.`,
      })),
      (t[17] = a),
      (t[18] = C));
  let w;
  t[19] === a
    ? (w = t[20])
    : ((w = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.emoji.label`,
        defaultMessage: `Emoji`,
        description: `Short option label in the Codex Apps writing block slash menu. Selecting it opens a searchable emoji picker and inserts the chosen emoji at the text cursor. Sibling options insert text blocks, lists, and tables.`,
      })),
      (t[19] = a),
      (t[20] = w));
  let T;
  t[21] === a
    ? (T = t[22])
    : ((T = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.generate.label`,
        defaultMessage: `Generate text`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it starts AI text generation for the current writing block when that action is available.`,
      })),
      (t[21] = a),
      (t[22] = T));
  let E;
  t[23] === a
    ? (E = t[24])
    : ((E = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.heading1.label`,
        defaultMessage: `Heading 1`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-one heading; Heading 2 and Heading 3 are sibling options.`,
      })),
      (t[23] = a),
      (t[24] = E));
  let D;
  t[25] === a
    ? (D = t[26])
    : ((D = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.heading2.label`,
        defaultMessage: `Heading 2`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-two heading; Heading 1 and Heading 3 are sibling options.`,
      })),
      (t[25] = a),
      (t[26] = D));
  let O;
  t[27] === a
    ? (O = t[28])
    : ((O = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.heading3.label`,
        defaultMessage: `Heading 3`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a level-three heading; Heading 1 and Heading 2 are sibling options.`,
      })),
      (t[27] = a),
      (t[28] = O));
  let k;
  t[29] === a
    ? (k = t[30])
    : ((k = a.formatMessage({
        id: `codex.writingBlock.slashMenu.menu.ariaLabel`,
        defaultMessage: `Insert options`,
        description: `Accessible label for the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. After the user types a slash, the menu offers commands that change the current block type or insert document elements.`,
      })),
      (t[29] = a),
      (t[30] = k));
  let A;
  t[31] === a
    ? (A = t[32])
    : ((A = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.orderedList.label`,
        defaultMessage: `Numbered list`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a numbered list; Bulleted list and Checklist are sibling options.`,
      })),
      (t[31] = a),
      (t[32] = A));
  let N;
  t[33] === a
    ? (N = t[34])
    : ((N = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.paragraph.label`,
        defaultMessage: `Text`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active block to normal paragraph text; heading and list formats are sibling options.`,
      })),
      (t[33] = a),
      (t[34] = N));
  let F;
  t[35] === a
    ? (F = t[36])
    : ((F = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.table.label`,
        defaultMessage: `Table`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it inserts a table when table commands are available; sibling options insert text blocks, lists, or a divider.`,
      })),
      (t[35] = a),
      (t[36] = F));
  let I;
  t[37] === a
    ? (I = t[38])
    : ((I = a.formatMessage({
        id: `codex.writingBlock.slashMenu.option.unorderedList.label`,
        defaultMessage: `Bulleted list`,
        description: `Short option label in the shared Codex Apps writing block slash menu used by local Codex threads and Quick Chat. Selecting it converts the active text block to a bulleted list; Numbered list and Checklist are sibling options.`,
      })),
      (t[37] = a),
      (t[38] = I));
  let L;
  t[39] !== C ||
  t[40] !== w ||
  t[41] !== T ||
  t[42] !== E ||
  t[43] !== D ||
  t[44] !== O ||
  t[45] !== k ||
  t[46] !== A ||
  t[47] !== N ||
  t[48] !== F ||
  t[49] !== I ||
  t[50] !== y ||
  t[51] !== b ||
  t[52] !== x ||
  t[53] !== S
    ? ((L = {
        checklist: y,
        columnDelete: b,
        columnLeft: x,
        columnRight: S,
        divider: C,
        emoji: w,
        generate: T,
        heading1: E,
        heading2: D,
        heading3: O,
        menu: k,
        orderedList: A,
        paragraph: N,
        table: F,
        unorderedList: I,
      }),
      (t[39] = C),
      (t[40] = w),
      (t[41] = T),
      (t[42] = E),
      (t[43] = D),
      (t[44] = O),
      (t[45] = k),
      (t[46] = A),
      (t[47] = N),
      (t[48] = F),
      (t[49] = I),
      (t[50] = y),
      (t[51] = b),
      (t[52] = x),
      (t[53] = S),
      (t[54] = L))
    : (L = t[54]);
  let R = L,
    z;
  t[55] !== n || t[56] !== i || t[57] !== r
    ? ((z = (e) => {
        if (e.type === `execute`) {
          i(e.commandId, r.query);
          return;
        }
        n.dispatch(n.state.tr.setMeta(J, e));
      }),
      (t[55] = n),
      (t[56] = i),
      (t[57] = r),
      (t[58] = z))
    : (z = t[58]);
  let B = z,
    ne;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = {
        disabledItem: `cursor-default opacity-50`,
        item: `no-drag cursor-interaction rounded-lg border-0 bg-transparent px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm text-default outline-hidden data-[highlighted]:bg-primary-ghost-hover`,
        menu: `z-50 m-px flex w-fit min-w-40 flex-col overflow-y-auto px-1 py-1 select-none ${M(`menu`)}`,
        separator: `mx-[var(--padding-row-x)] my-1 h-px bg-border`,
      }),
      (t[59] = ne))
    : (ne = t[59]);
  let V = o === 1 ? void 0 : o,
    H;
  t[60] === V ? (H = t[61]) : ((H = { position: `static`, zoom: V }), (t[60] = V), (t[61] = H));
  let U;
  t[62] !== B || t[63] !== R || t[64] !== r || t[65] !== H
    ? ((U = (0, nn.jsx)(dt, { classNames: ne, dispatch: B, labels: R, state: r, style: H, unstyled: !0 })),
      (t[62] = B),
      (t[63] = R),
      (t[64] = r),
      (t[65] = H),
      (t[66] = U))
    : (U = t[66]);
  let W;
  t[67] !== g || t[68] !== v || t[69] !== U
    ? ((W = (0, nn.jsx)(`div`, { ref: v, className: `z-50`, style: g, children: U })),
      (t[67] = g),
      (t[68] = v),
      (t[69] = U),
      (t[70] = W))
    : (W = t[70]);
  let re;
  return (
    t[71] !== u.body || t[72] !== W
      ? ((re = (0, tn.createPortal)(W, u.body)), (t[71] = u.body), (t[72] = W), (t[73] = re))
      : (re = t[73]),
    re
  );
}
function $t(e, t) {
  return {
    bottom: t,
    height: 0,
    left: e,
    right: e,
    top: t,
    width: 0,
    x: e,
    y: t,
    toJSON() {
      return {};
    },
  };
}
var en, tn, nn;
function rn() {
  return (rn = e(() => {
    ((en = K()), Te(), Y(), vt(), (tn = we()), ae(), d(), g(), (nn = xe()));
  }))();
}
export {
  st as _,
  Pt as a,
  Ft as c,
  Lt as d,
  Ot as f,
  ot as g,
  ut as h,
  Zt as i,
  It as l,
  ct as m,
  rn as n,
  Nt as o,
  xt as p,
  Kt as r,
  Mt as s,
  Qt as t,
  Bt as u,
  lt as v,
  nt as y,
};
//# sourceMappingURL=writing-block-floating-slash-menu-1d629aa81df2.js.map
