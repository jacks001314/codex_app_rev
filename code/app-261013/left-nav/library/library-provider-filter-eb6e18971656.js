import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  DW as i,
  Dz as a,
  Ez as o,
  Gk as s,
  IDt as c,
  Jk as l,
  Kk as u,
  Mz as d,
  Nz as f,
  OW as p,
  Pxt as m,
  TJ as h,
  TO as g,
  VDt as _,
  Vxt as v,
  Wk as y,
  Xk as b,
  Yk as x,
  Zk as S,
  _U as ee,
  iL as C,
  jDt as w,
  kW as T,
  kz as E,
  qk as D,
  rL as O,
  t3 as k,
  vzt as A,
  xMt as j,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bvn as te,
  KKn as M,
  KNn as N,
  WKn as P,
  XNn as F,
  Xmt as I,
  Zmt as L,
  aht as R,
  iht as z,
  oht as B,
  sht as V,
  zvn as H,
} from "./app-initial-5851df3f6cb1.js";
import { n as U, t as W } from "./library-providers-987490869a4e.js";
import { n as G, t as K } from "./Sharepoint-3cab95ef90ef.js";
function q(e) {
  let n = (0, Z.c)(46),
    {
      availableProviders: i,
      availableProviderOptions: a,
      disabled: o,
      selectedProviders: s,
      selectedProviderOptionIds: l,
      onCheckedChange: u,
      onOptionCheckedChange: d,
      onOpen: f,
    } = e,
    p = F(),
    m = _(),
    h = v(I),
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k;
  if (
    n[0] !== a ||
    n[1] !== i ||
    n[2] !== o ||
    n[3] !== h ||
    n[4] !== m ||
    n[5] !== p ||
    n[6] !== u ||
    n[7] !== f ||
    n[8] !== d ||
    n[9] !== l ||
    n[10] !== s
  ) {
    let e;
    n[22] === h ? (e = n[23]) : ((e = (e) => !h.has(e.provider)), (n[22] = h), (n[23] = e));
    let _ = (a ?? i.map(J)).filter(e),
      v = (l ?? s).filter((e) => _.some((t) => t.id === e));
    ((y = r),
      (C = `end`),
      (w = `wide`),
      (T = `menu`),
      (E = o),
      (D = `large`),
      (O = `chatgpt`),
      (k = (e) => {
        e &&
          !o &&
          f?.(
            i.filter(
              (e) => !h.has(e) && _.some((t) => t.provider === e && (!v.includes(t.id) || v.length > 1)),
            ),
          );
      }));
    let A;
    n[24] !== m || n[25] !== p
      ? ((A = p
          ? m.formatMessage({
              id: `libraryPicker.sources.ariaLabel.space`,
              defaultMessage: `Filter Space sources`,
              description: `Accessible label for the button that filters files by source in the Add from space dialog. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : m.formatMessage({
              id: `libraryPicker.sources.ariaLabel`,
              defaultMessage: `Filter Library sources`,
              description: `Accessible label for the button that filters files by source in the Add from library dialog`,
            })),
        (n[24] = m),
        (n[25] = p),
        (n[26] = A))
      : (A = n[26]);
    let j;
    (n[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((j = (0, Q.jsx)(ee, {})), (n[27] = j))
      : (j = n[27]),
      n[28] !== o || n[29] !== A
        ? ((x = (0, Q.jsx)(t, {
            "aria-label": A,
            color: `ghost`,
            disabled: o,
            radius: `full`,
            size: `inputIcon`,
            type: `button`,
            children: j,
          })),
          (n[28] = o),
          (n[29] = A),
          (n[30] = x))
        : (x = n[30]),
      n[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((b = (0, Q.jsx)(g.SectionLabel, {
            children: (0, Q.jsx)(c, {
              id: `libraryPicker.sources.label`,
              defaultMessage: `Sources`,
              description: `Short section heading above the connected file-source choices in the Add from library filter menu.`,
            }),
          })),
          (n[31] = b))
        : (b = n[31]),
      (S = _.map((e) => {
        let { provider: t } = e,
          n = v.includes(e.id);
        return (0, Q.jsx)(
          g.CheckboxItem,
          {
            checked: n,
            disabled: o || (n && v.length === 1),
            indicator: `switch`,
            leftIcon: (0, Q.jsx)(Y, { provider: t }),
            onCheckedChange: (n) => (d == null ? u(t, n === !0) : d(e, n === !0)),
            children: (0, Q.jsx)(X, {
              option: e,
              accountNumber: _.filter((e) => e.provider === t).indexOf(e) + 1,
            }),
          },
          e.id,
        );
      })),
      (n[0] = a),
      (n[1] = i),
      (n[2] = o),
      (n[3] = h),
      (n[4] = m),
      (n[5] = p),
      (n[6] = u),
      (n[7] = f),
      (n[8] = d),
      (n[9] = l),
      (n[10] = s),
      (n[11] = y),
      (n[12] = b),
      (n[13] = x),
      (n[14] = S),
      (n[15] = C),
      (n[16] = w),
      (n[17] = T),
      (n[18] = E),
      (n[19] = D),
      (n[20] = O),
      (n[21] = k));
  } else
    ((y = n[11]),
      (b = n[12]),
      (x = n[13]),
      (S = n[14]),
      (C = n[15]),
      (w = n[16]),
      (T = n[17]),
      (E = n[18]),
      (D = n[19]),
      (O = n[20]),
      (k = n[21]));
  let A;
  n[32] !== b || n[33] !== S
    ? ((A = (0, Q.jsxs)(`div`, { children: [b, S] })), (n[32] = b), (n[33] = S), (n[34] = A))
    : (A = n[34]);
  let j;
  return (
    n[35] !== y ||
    n[36] !== x ||
    n[37] !== A ||
    n[38] !== C ||
    n[39] !== w ||
    n[40] !== T ||
    n[41] !== E ||
    n[42] !== D ||
    n[43] !== O ||
    n[44] !== k
      ? ((j = (0, Q.jsx)(y, {
          align: C,
          contentMaxWidth: w,
          contentWidth: T,
          disabled: E,
          size: D,
          surface: O,
          onOpenChange: k,
          triggerButton: x,
          children: A,
        })),
        (n[35] = y),
        (n[36] = x),
        (n[37] = A),
        (n[38] = C),
        (n[39] = w),
        (n[40] = T),
        (n[41] = E),
        (n[42] = D),
        (n[43] = O),
        (n[44] = k),
        (n[45] = j))
      : (j = n[45]),
    j
  );
}
function J(e) {
  return { id: e, provider: e };
}
function Y(e) {
  let t = (0, Z.c)(22),
    { provider: n, size: r } = e,
    c = r === void 0 ? `default` : r,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = {
        badge: `icon-xxs`,
        cardBadge: `size-4`,
        secondary: `icon-2xs`,
        leading: `icon-leading`,
        default: `icon-base`,
        menuStack: `size-3.5`,
        picker: `size-6`,
      }),
      (t[0] = l))
    : (l = t[0]);
  let u = l[c];
  switch (n) {
    case `box`: {
      let e;
      return (
        t[1] === u
          ? (e = t[2])
          : ((e = (0, Q.jsx)(B, { "aria-hidden": !0, className: u })), (t[1] = u), (t[2] = e)),
        e
      );
    }
    case `dropbox`: {
      let e;
      return (
        t[3] === u
          ? (e = t[4])
          : ((e = (0, Q.jsx)(z, { "aria-hidden": !0, className: u })), (t[3] = u), (t[4] = e)),
        e
      );
    }
    case `google_drive`: {
      let e;
      return (
        t[5] === u
          ? (e = t[6])
          : ((e = (0, Q.jsx)(O, { "aria-hidden": !0, className: u })), (t[5] = u), (t[6] = e)),
        e
      );
    }
    case `sharepoint`:
      switch (c) {
        case `leading`: {
          let e;
          return (
            t[7] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(a, { icon: { 16: p, 20: T } })), (t[7] = e))
              : (e = t[7]),
            e
          );
        }
        case `badge`: {
          let e;
          return (
            t[8] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(i, {})), (t[8] = e))
              : (e = t[8]),
            e
          );
        }
        case `cardBadge`: {
          let e;
          return (
            t[9] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(p, {})), (t[9] = e))
              : (e = t[9]),
            e
          );
        }
        case `secondary`: {
          let e;
          return (
            t[10] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(o, {
                  "aria-hidden": !0,
                  icon16: p,
                  legacyIcon: K,
                  legacyClassName: `icon-2xs fill-none`,
                })),
                (t[10] = e))
              : (e = t[10]),
            e
          );
        }
        case `menuStack`: {
          let e;
          return (
            t[11] === u ? (e = t[12]) : ((e = (0, Q.jsx)(p, { className: u })), (t[11] = u), (t[12] = e)),
            e
          );
        }
        case `picker`: {
          let e;
          return (
            t[13] === u ? (e = t[14]) : ((e = (0, Q.jsx)(T, { className: u })), (t[13] = u), (t[14] = e)),
            e
          );
        }
        case `default`: {
          let e;
          return (
            t[15] === Symbol.for(`react.memo_cache_sentinel`)
              ? ((e = (0, Q.jsx)(T, {})), (t[15] = e))
              : (e = t[15]),
            e
          );
        }
      }
    case `onedrive`: {
      if (c === `leading`) {
        let e;
        return (
          t[16] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Q.jsx)(a, { icon: { assets: { 16: x, 20: D } } })), (t[16] = e))
            : (e = t[16]),
          e
        );
      }
      let e;
      t[17] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = { badge: S, cardBadge: x, secondary: x, default: D, menuStack: x, picker: s }), (t[17] = e))
        : (e = t[17]);
      let n = e[c],
        r;
      return (t[18] === n ? (r = t[19]) : ((r = (0, Q.jsx)(d, { asset: n })), (t[18] = n), (t[19] = r)), r);
    }
    case `native`:
    case `unknown`: {
      let e;
      return (
        t[20] === u
          ? (e = t[21])
          : ((e = (0, Q.jsx)(H, { "aria-hidden": !0, className: u })), (t[20] = u), (t[21] = e)),
        e
      );
    }
  }
}
function X(e) {
  let t = (0, Z.c)(15),
    { option: n, accountNumber: r } = e,
    i = _();
  if (n.externalAccountKey == null || n.provider === `native`) {
    let e;
    t[0] !== i || t[1] !== n.provider
      ? ((e = W(i, n.provider)), (t[0] = i), (t[1] = n.provider), (t[2] = e))
      : (e = t[2]);
    let r;
    return (
      t[3] === e ? (r = t[4]) : ((r = (0, Q.jsx)(Q.Fragment, { children: e })), (t[3] = e), (t[4] = r)),
      r
    );
  }
  if (n.accountLabel == null) {
    let e;
    t[5] === n.provider ? (e = t[6]) : ((e = P(n.provider)), (t[5] = n.provider), (t[6] = e));
    let i;
    return (
      t[7] !== r || t[8] !== e
        ? ((i = (0, Q.jsx)(c, {
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
  t[10] === n.provider ? (a = t[11]) : ((a = P(n.provider)), (t[10] = n.provider), (t[11] = a));
  let o;
  return (
    t[12] !== n.accountLabel || t[13] !== a
      ? ((o = (0, Q.jsx)(c, {
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
    ((Z = A()),
      b(),
      l(),
      u(),
      y(),
      G(),
      m(),
      w(),
      k(),
      n(),
      f(),
      h(),
      E(),
      V(),
      R(),
      C(),
      N(),
      M(),
      L(),
      U(),
      te(),
      (Q = j()));
  }))();
}
export { Y as n, $ as r, q as t };
//# sourceMappingURL=library-provider-filter-eb6e18971656.js.map
