import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CA as t,
  CG as n,
  DA as r,
  DB as i,
  EA as a,
  KL as o,
  LNt as s,
  OA as c,
  OB as l,
  PBt as u,
  SA as d,
  SB as f,
  TA as p,
  TG as m,
  TY as h,
  XOt as g,
  Y3 as ee,
  Z3 as _,
  ZSt as v,
  ck as y,
  iCt as b,
  kA as x,
  okt as S,
  pW as C,
  qL as w,
  rk as T,
  tk as E,
  tkt as D,
  wA as O,
  wB as k,
  wG as A,
  xB as j,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Hxn as M,
  SLn as N,
  Vxn as P,
  _Xn as F,
  _gt as I,
  cgt as L,
  ggt as R,
  hXn as z,
  hgt as B,
  sgt as V,
  vLn as H,
  vgt as U,
} from "./app-initial-ad16eaadf81f.js";
import { n as W, t as G } from "./library-providers-51a2cdb87f24.js";
import { n as K, t as q } from "./Sharepoint-380a58ac69c4.js";
function J(e) {
  let t = (0, Z.c)(46),
    {
      availableProviders: n,
      availableProviderOptions: r,
      disabled: i,
      selectedProviders: a,
      selectedProviderOptionIds: o,
      onCheckedChange: s,
      onOptionCheckedChange: c,
      onOpen: l,
    } = e,
    u = N(),
    d = S(),
    f = b(V),
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    x,
    w,
    O,
    k;
  if (
    t[0] !== r ||
    t[1] !== n ||
    t[2] !== i ||
    t[3] !== f ||
    t[4] !== d ||
    t[5] !== u ||
    t[6] !== s ||
    t[7] !== l ||
    t[8] !== c ||
    t[9] !== o ||
    t[10] !== a
  ) {
    let e;
    t[22] === f ? (e = t[23]) : ((e = (e) => !f.has(e.provider)), (t[22] = f), (t[23] = e));
    let b = (r ?? n.map(Y)).filter(e),
      S = (o ?? a).filter((e) => b.some((t) => t.id === e));
    ((p = E),
      (_ = `end`),
      (v = `wide`),
      (y = `menu`),
      (x = i),
      (w = `large`),
      (O = `chatgpt`),
      (k = (e) => {
        e &&
          !i &&
          l?.(
            n.filter(
              (e) => !f.has(e) && b.some((t) => t.provider === e && (!S.includes(t.id) || S.length > 1)),
            ),
          );
      }));
    let A;
    t[24] !== d || t[25] !== u
      ? ((A = u
          ? d.formatMessage({
              id: `libraryPicker.sources.ariaLabel.space`,
              defaultMessage: `Filter Space sources`,
              description: `Accessible label for the button that filters files by source in the Add from space dialog. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : d.formatMessage({
              id: `libraryPicker.sources.ariaLabel`,
              defaultMessage: `Filter Library sources`,
              description: `Accessible label for the button that filters files by source in the Add from library dialog`,
            })),
        (t[24] = d),
        (t[25] = u),
        (t[26] = A))
      : (A = t[26]);
    let j;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = (0, Q.jsx)(C, {})), (t[27] = j)) : (j = t[27]),
      t[28] !== i || t[29] !== A
        ? ((h = (0, Q.jsx)(ee, {
            "aria-label": A,
            color: `ghost`,
            disabled: i,
            radius: `full`,
            size: `inputIcon`,
            type: `button`,
            children: j,
          })),
          (t[28] = i),
          (t[29] = A),
          (t[30] = h))
        : (h = t[30]),
      t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((m = (0, Q.jsx)(T.SectionLabel, {
            children: (0, Q.jsx)(D, {
              id: `libraryPicker.sources.label`,
              defaultMessage: `Sources`,
              description: `Short section heading above the connected file-source choices in the Add from library filter menu.`,
            }),
          })),
          (t[31] = m))
        : (m = t[31]),
      (g = b.map((e) => {
        let { provider: t } = e,
          n = S.includes(e.id);
        return (0, Q.jsx)(
          T.CheckboxItem,
          {
            checked: n,
            disabled: i || (n && S.length === 1),
            indicator: `switch`,
            leftIcon: (0, Q.jsx)(X, { provider: t }),
            onCheckedChange: (n) => (c == null ? s(t, n === !0) : c(e, n === !0)),
            children: (0, Q.jsx)(te, {
              option: e,
              accountNumber: b.filter((e) => e.provider === t).indexOf(e) + 1,
            }),
          },
          e.id,
        );
      })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = i),
      (t[3] = f),
      (t[4] = d),
      (t[5] = u),
      (t[6] = s),
      (t[7] = l),
      (t[8] = c),
      (t[9] = o),
      (t[10] = a),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y),
      (t[18] = x),
      (t[19] = w),
      (t[20] = O),
      (t[21] = k));
  } else
    ((p = t[11]),
      (m = t[12]),
      (h = t[13]),
      (g = t[14]),
      (_ = t[15]),
      (v = t[16]),
      (y = t[17]),
      (x = t[18]),
      (w = t[19]),
      (O = t[20]),
      (k = t[21]));
  let A;
  t[32] !== m || t[33] !== g
    ? ((A = (0, Q.jsxs)(`div`, { children: [m, g] })), (t[32] = m), (t[33] = g), (t[34] = A))
    : (A = t[34]);
  let j;
  return (
    t[35] !== p ||
    t[36] !== h ||
    t[37] !== A ||
    t[38] !== _ ||
    t[39] !== v ||
    t[40] !== y ||
    t[41] !== x ||
    t[42] !== w ||
    t[43] !== O ||
    t[44] !== k
      ? ((j = (0, Q.jsx)(p, {
          align: _,
          contentMaxWidth: v,
          contentWidth: y,
          disabled: x,
          size: w,
          surface: O,
          onOpenChange: k,
          triggerButton: h,
          children: A,
        })),
        (t[35] = p),
        (t[36] = h),
        (t[37] = A),
        (t[38] = _),
        (t[39] = v),
        (t[40] = y),
        (t[41] = x),
        (t[42] = w),
        (t[43] = O),
        (t[44] = k),
        (t[45] = j))
      : (j = t[45]),
    j
  );
}
function Y(e) {
  return { id: e, provider: e };
}
function X(e) {
  let a = (0, Z.c)(22),
    { provider: s, size: c } = e,
    l = c === void 0 ? `default` : c,
    u;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = {
        badge: `icon-xxs`,
        cardBadge: `size-4`,
        secondary: `icon-2xs`,
        leading: `icon-leading`,
        default: `icon-base`,
        menuStack: `size-3.5`,
        picker: `size-6`,
      }),
      (a[0] = u))
    : (u = a[0]);
  let d = u[l];
  switch (s) {
    case `box`: {
      let e;
      return (
        a[1] === d
          ? (e = a[2])
          : ((e = (0, Q.jsx)(I, { "aria-hidden": !0, className: d })), (a[1] = d), (a[2] = e)),
        e
      );
    }
    case `dropbox`: {
      let e;
      return (
        a[3] === d
          ? (e = a[4])
          : ((e = (0, Q.jsx)(B, { "aria-hidden": !0, className: d })), (a[3] = d), (a[4] = e)),
        e
      );
    }
    case `google_drive`: {
      let e;
      return (
        a[5] === d
          ? (e = a[6])
          : ((e = (0, Q.jsx)(o, { "aria-hidden": !0, className: d })), (a[5] = d), (a[6] = e)),
        e
      );
    }
    case `sharepoint`:
      switch (l) {
        case `leading`: {
          let e;
          return (
            a[7] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(f, { icon: { 16: A, 20: m } })), (a[7] = e))
              : (e = a[7]),
            e
          );
        }
        case `badge`: {
          let e;
          return (
            a[8] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(n, {})), (a[8] = e))
              : (e = a[8]),
            e
          );
        }
        case `cardBadge`: {
          let e;
          return (
            a[9] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(A, {})), (a[9] = e))
              : (e = a[9]),
            e
          );
        }
        case `secondary`: {
          let e;
          return (
            a[10] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(j, {
                  "aria-hidden": !0,
                  icon16: A,
                  legacyIcon: q,
                  legacyClassName: `icon-2xs fill-none`,
                })),
                (a[10] = e))
              : (e = a[10]),
            e
          );
        }
        case `menuStack`: {
          let e;
          return (
            a[11] === d ? (e = a[12]) : ((e = (0, Q.jsx)(A, { className: d })), (a[11] = d), (a[12] = e)),
            e
          );
        }
        case `picker`: {
          let e;
          return (
            a[13] === d ? (e = a[14]) : ((e = (0, Q.jsx)(m, { className: d })), (a[13] = d), (a[14] = e)),
            e
          );
        }
        case `default`: {
          let e;
          return (
            a[15] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(m, {})), (a[15] = e))
              : (e = a[15]),
            e
          );
        }
      }
    case `onedrive`: {
      if (l === `leading`) {
        let e;
        return (
          a[16] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Q.jsx)(f, { icon: { assets: { 16: r, 20: p } } })), (a[16] = e))
            : (e = a[16]),
          e
        );
      }
      let e;
      a[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { badge: x, cardBadge: r, secondary: r, default: p, menuStack: r, picker: t }), (a[17] = e))
        : (e = a[17]);
      let n = e[l],
        o;
      return (a[18] === n ? (o = a[19]) : ((o = (0, Q.jsx)(i, { asset: n })), (a[18] = n), (a[19] = o)), o);
    }
    case `native`:
    case `unknown`: {
      let e;
      return (
        a[20] === d
          ? (e = a[21])
          : ((e = (0, Q.jsx)(P, { "aria-hidden": !0, className: d })), (a[20] = d), (a[21] = e)),
        e
      );
    }
  }
}
function te(e) {
  let t = (0, Z.c)(15),
    { option: n, accountNumber: r } = e,
    i = S();
  if (n.externalAccountKey == null || n.provider === `native`) {
    let e;
    t[0] !== i || t[1] !== n.provider
      ? ((e = G(i, n.provider)), (t[0] = i), (t[1] = n.provider), (t[2] = e))
      : (e = t[2]);
    let r;
    return (
      t[3] === e ? (r = t[4]) : ((r = (0, Q.jsx)(Q.Fragment, { children: e })), (t[3] = e), (t[4] = r)),
      r
    );
  }
  if (n.accountLabel == null) {
    let e;
    t[5] === n.provider ? (e = t[6]) : ((e = z(n.provider)), (t[5] = n.provider), (t[6] = e));
    let i;
    return (
      t[7] !== r || t[8] !== e
        ? ((i = (0, Q.jsx)(D, {
            id: `libraryPicker.sources.unnamedAccount`,
            defaultMessage: `{provider} · Account {number}`,
            description: `Source choice in Add from library when a connected storage account has no display name or email. Provider is the storage service brand; number is this account's position among that provider's connected accounts. Never displays an internal account identifier.`,
            values: { provider: e, number: r },
          })),
          (t[7] = r),
          (t[8] = e),
          (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  let a;
  t[10] === n.provider ? (a = t[11]) : ((a = z(n.provider)), (t[10] = n.provider), (t[11] = a));
  let o;
  return (
    t[12] !== n.accountLabel || t[13] !== a
      ? ((o = (0, Q.jsx)(D, {
          id: `libraryPicker.sources.namedAccount`,
          defaultMessage: `{provider} · {account}`,
          description: `Source choice in Add from library for one connected storage account. Provider is the storage service brand; account is the account nickname or email, distinguishing accounts for the same provider.`,
          values: { provider: a, account: n.accountLabel },
        })),
        (t[12] = n.accountLabel),
        (t[13] = a),
        (t[14] = o))
      : (o = t[14]),
    o
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = u()),
      c(),
      a(),
      O(),
      d(),
      K(),
      v(),
      g(),
      _(),
      y(),
      l(),
      h(),
      k(),
      U(),
      R(),
      w(),
      H(),
      F(),
      L(),
      W(),
      M(),
      (Q = s()));
  }))();
}
export { X as n, $ as r, J as t };
//# sourceMappingURL=library-provider-filter-56e8962f2aff.js.map
