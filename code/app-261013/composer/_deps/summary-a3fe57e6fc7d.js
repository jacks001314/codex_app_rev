import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  DD as n,
  ED as r,
  IDt as i,
  TO as a,
  _Mt as o,
  aS as s,
  gMt as c,
  i3 as l,
  jDt as u,
  oS as d,
  r3 as f,
  vzt as p,
  wO as m,
  xMt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as g,
  BKt as _,
  DGt as v,
  Dot as y,
  Eot as b,
  J2t as x,
  JPn as S,
  OGt as C,
  OPn as w,
  Q2t as T,
  S4t as E,
  XPn as D,
  Z2t as O,
  _4t as k,
  b4t as A,
  h4t as j,
  hPr as M,
  kPn as N,
  x4t as P,
  y4t as F,
  zKt as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as L, t as R } from "./bullet-separator-9aa986eaf7a4.js";
function z(e) {
  let t = (0, G.c)(34),
    {
      rateLimits: n,
      activeLimitName: o,
      planType: l,
      suppressUpsell: u,
      selectedModel: d,
      availableRateLimitResetCount: p,
      onRateLimitResetClick: h,
      onUsageSettingsClick: g,
      onPlanUpgradeClick: _,
      isLoading: v,
      showLearnMore: y,
      layout: b,
    } = e,
    S = p === void 0 ? 0 : p,
    C = v !== void 0 && v,
    E = y === void 0 || y,
    D = b === void 0 ? `default` : b;
  if (!C && n.length === 0 && S === 0) return null;
  let O, k, A, M;
  if (
    t[0] !== o ||
    t[1] !== S ||
    t[2] !== C ||
    t[3] !== D ||
    t[4] !== _ ||
    t[5] !== h ||
    t[6] !== g ||
    t[7] !== l ||
    t[8] !== n ||
    t[9] !== d ||
    t[10] !== E ||
    t[11] !== u
  ) {
    let e = x(n, { activeLimitName: o, selectedModel: d }),
      p;
    t[16] !== o || t[17] !== u ? ((p = u ?? !T(o)), (t[16] = o), (t[17] = u), (t[18] = p)) : (p = t[18]);
    let v = p,
      y = D === `compact`,
      b;
    if (t[19] !== y || t[20] !== n) {
      let e;
      (t[22] === y
        ? (e = t[23])
        : ((e = (e, t) => {
            let n = T(e.limitName) ? null : e.limitName;
            return (0, K.jsx)(
              V,
              { rateLimit: e.snapshot, limitName: n, compact: y },
              `${e.limitName ?? `default`}-${t}`,
            );
          }),
          (t[22] = y),
          (t[23] = e)),
        (b = n.map(e)),
        (t[19] = y),
        (t[20] = n),
        (t[21] = b));
    } else b = t[21];
    let N = b,
      P = c(
        `grid w-full items-center gap-y-1.5`,
        y ? `grid-cols-[minmax(0,1fr)_auto] gap-x-3` : `grid-cols-[auto_1fr] gap-x-16`,
      );
    O = m;
    let F;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, K.jsx)(i, {
          id: `composer.mode.rateLimit.heading`,
          defaultMessage: `Usage remaining`,
          description: `Rate limit summary heading`,
        })),
        (t[24] = F))
      : (F = t[24]);
    let I =
      e &&
      (0, K.jsx)(`span`, {
        className: `whitespace-nowrap text-tertiary opacity-60`,
        children: j(e.remainingPercent),
      });
    (t[25] === I
      ? (M = t[26])
      : ((M = (0, K.jsx)(a.Item, {
          leftIconAsset: s,
          rightIconAsset: r,
          tooltipSide: `left`,
          children: (0, K.jsxs)(`span`, { className: `flex items-center gap-1`, children: [F, I] }),
        })),
        (t[25] = I),
        (t[26] = M)),
      (k = `flex flex-col text-sm`),
      (A = C
        ? (0, K.jsx)(a.Item, {
            LeftIcon: f,
            className: c(y && `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`),
            disabled: !0,
            children: (0, K.jsx)(i, {
              id: `composer.mode.rateLimit.loading`,
              defaultMessage: `Loading usage…`,
              description: `Loading state for the rate limit summary submenu`,
            }),
          })
        : (0, K.jsxs)(K.Fragment, {
            children: [
              g == null
                ? (0, K.jsx)(`div`, {
                    className: c(
                      P,
                      `py-1`,
                      y
                        ? `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`
                        : `px-[var(--padding-row-x)]`,
                    ),
                    children: N,
                  })
                : (0, K.jsxs)(a.Item, {
                    allowWrap: !0,
                    className: c(
                      `py-1`,
                      y
                        ? `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`
                        : `px-[var(--padding-row-x)]`,
                    ),
                    onClick: g,
                    children: [
                      (0, K.jsx)(`span`, { className: P, children: N }),
                      (0, K.jsx)(`span`, {
                        className: `sr-only`,
                        children: (0, K.jsx)(i, {
                          id: `composer.mode.rateLimit.openUsageSettings`,
                          defaultMessage: `Open usage settings`,
                          description: `Screen-reader text for a usage limit menu item that opens the Usage page in Settings`,
                        }),
                      }),
                    ],
                  }),
              !v &&
                (0, K.jsx)(W, {
                  planType: l,
                  className: c(y && `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`),
                  onPlanUpgradeClick: _,
                }),
              S > 0
                ? (0, K.jsx)(a.Item, {
                    rightIconAsset: r,
                    className: c(y && `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`),
                    onClick: h,
                    children: (0, K.jsx)(i, {
                      id: `composer.mode.rateLimit.resetsAvailable`,
                      defaultMessage: `{availableRateLimitResetCount, plural, one {# available reset} other {# available resets}}`,
                      description: `Menu item for opening available rate limit resets`,
                      values: { availableRateLimitResetCount: S },
                    }),
                  })
                : null,
              E &&
                (0, K.jsx)(a.Item, {
                  rightIcon: (0, K.jsx)(w, { href: J, className: c(q, y && `text-codex-description`) }),
                  className: c(y && `ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]`),
                  href: J,
                  onClick: B,
                  children: (0, K.jsx)(`span`, {
                    className: c(y ? `text-default` : `text-codex-description`),
                    children: (0, K.jsx)(i, {
                      id: `composer.mode.local.learnMore`,
                      defaultMessage: `Learn more`,
                      description: `Learn more about rate limits`,
                    }),
                  }),
                }),
            ],
          })),
      (t[0] = o),
      (t[1] = S),
      (t[2] = C),
      (t[3] = D),
      (t[4] = _),
      (t[5] = h),
      (t[6] = g),
      (t[7] = l),
      (t[8] = n),
      (t[9] = d),
      (t[10] = E),
      (t[11] = u),
      (t[12] = O),
      (t[13] = k),
      (t[14] = A),
      (t[15] = M));
  } else ((O = t[12]), (k = t[13]), (A = t[14]), (M = t[15]));
  let N;
  t[27] !== k || t[28] !== A
    ? ((N = (0, K.jsx)(`div`, { className: k, children: A })), (t[27] = k), (t[28] = A), (t[29] = N))
    : (N = t[29]);
  let P;
  return (
    t[30] !== O || t[31] !== M || t[32] !== N
      ? ((P = (0, K.jsx)(O, { trigger: M, children: N })), (t[30] = O), (t[31] = M), (t[32] = N), (t[33] = P))
      : (P = t[33]),
    P
  );
}
function B(e) {
  D({ event: e, href: J, initiator: `open_in_browser_bridge` });
}
function V(e) {
  let t = (0, G.c)(19),
    { rateLimit: n, limitName: r, compact: a } = e,
    o = n?.primary,
    s;
  t[0] === o ? (s = t[1]) : ((s = A(o)), (t[0] = o), (t[1] = s));
  let l = s,
    u = n?.secondary,
    d;
  t[2] === u ? (d = t[3]) : ((d = A(u)), (t[2] = u), (t[3] = d));
  let f = d;
  if (!l && !f) return null;
  let p;
  t[4] !== a || t[5] !== r
    ? ((p =
        r != null &&
        (0, K.jsx)(`span`, {
          title: U(r),
          className: c(`text-default col-span-2 min-w-0 truncate font-medium`, a ? `mt-1` : `mt-2`),
          children: (0, K.jsx)(i, {
            id: `composer.mode.rateLimit.modelSectionLabel`,
            defaultMessage: `{modelName} limit:`,
            description: `Section label shown before model-specific rate limit windows in summaries`,
            values: { modelName: U(r) },
          }),
        })),
      (t[4] = a),
      (t[5] = r),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== a || t[8] !== n || t[9] !== l
    ? ((m = l && (0, K.jsx)(H, { bucket: n.primary ?? null, compact: a })),
      (t[7] = a),
      (t[8] = n),
      (t[9] = l),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== a || t[12] !== n || t[13] !== f
    ? ((h = f && (0, K.jsx)(H, { bucket: n.secondary ?? null, compact: a })),
      (t[11] = a),
      (t[12] = n),
      (t[13] = f),
      (t[14] = h))
    : (h = t[14]);
  let g;
  return (
    t[15] !== p || t[16] !== m || t[17] !== h
      ? ((g = (0, K.jsxs)(K.Fragment, { children: [p, m, h] })),
        (t[15] = p),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g))
      : (g = t[18]),
    g
  );
}
function H(e) {
  let t = (0, G.c)(35),
    { bucket: n, compact: r } = e;
  if (!A(n)) return null;
  let i;
  if (t[0] !== n.resetsAt) {
    let e = E(n.resetsAt ?? null);
    ((i = e == null ? null : k(e)), (t[0] = n.resetsAt), (t[1] = i));
  } else i = t[1];
  let a = i,
    o,
    s,
    l,
    u;
  if (t[2] !== n.usedPercent || t[3] !== n.windowDurationMins || t[4] !== r) {
    let e = F(n.usedPercent ?? 0),
      i = r && `flex min-w-0 items-center gap-1`,
      a;
    t[9] === i ? (a = t[10]) : ((a = c(`text-default font-medium`, i)), (t[9] = i), (t[10] = a));
    let d = r && `shrink-0`,
      f;
    t[11] === d ? (f = t[12]) : ((f = c(d)), (t[11] = d), (t[12] = f));
    let p = n.windowDurationMins ?? null,
      m;
    t[13] === p ? (m = t[14]) : ((m = (0, K.jsx)(b, { minutes: p })), (t[13] = p), (t[14] = m));
    let h;
    (t[15] !== m || t[16] !== f
      ? ((h = (0, K.jsx)(`span`, { className: f, children: m })), (t[15] = m), (t[16] = f), (t[17] = h))
      : (h = t[17]),
      t[18] !== h || t[19] !== a
        ? ((u = (0, K.jsx)(`span`, { className: a, children: h })), (t[18] = h), (t[19] = a), (t[20] = u))
        : (u = t[20]));
    let g = r
      ? `min-w-0 items-center justify-end`
      : `w-full min-w-0 items-center justify-end overflow-hidden`;
    (t[21] === g
      ? (l = t[22])
      : ((l = c(`text-codex-description flex gap-1 text-end`, g)), (t[21] = g), (t[22] = l)),
      (o = `shrink-0`),
      (s = j(e)),
      (t[2] = n.usedPercent),
      (t[3] = n.windowDurationMins),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u));
  } else ((o = t[5]), (s = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[23] !== o || t[24] !== s
    ? ((d = (0, K.jsx)(`span`, { className: o, children: s })), (t[23] = o), (t[24] = s), (t[25] = d))
    : (d = t[25]);
  let f;
  t[26] === a
    ? (f = t[27])
    : ((f =
        a &&
        (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(`span`, { className: `shrink-0`, children: (0, K.jsx)(R, {}) }),
            (0, K.jsx)(`span`, {
              title: a,
              className: c(`text-codex-description flex items-center gap-1`, `min-w-0 truncate text-end`),
              children: a,
            }),
          ],
        })),
      (t[26] = a),
      (t[27] = f));
  let p;
  t[28] !== l || t[29] !== d || t[30] !== f
    ? ((p = (0, K.jsxs)(`span`, { className: l, children: [d, f] })),
      (t[28] = l),
      (t[29] = d),
      (t[30] = f),
      (t[31] = p))
    : (p = t[31]);
  let m;
  return (
    t[32] !== u || t[33] !== p
      ? ((m = (0, K.jsxs)(K.Fragment, { children: [u, p] })), (t[32] = u), (t[33] = p), (t[34] = m))
      : (m = t[34]),
    m
  );
}
function U(e) {
  return e.replace(/_/g, `-`);
}
function W(e) {
  let t = (0, G.c)(21),
    { planType: n, className: r, onPlanUpgradeClick: o } = e;
  bb0: switch (n) {
    case `free`:
    case `go`:
    case `plus`:
    case `prolite`:
      break bb0;
    case `team`:
    case `self_serve_business_prolite`:
    case `self_serve_business_usage_based`:
    case `business`:
    case `enterprise_cbp_automation`:
    case `enterprise_cbp_trial`:
    case `enterprise_cbp_view_only`:
    case `enterprise_cbp_usage_based`:
    case `ent26`:
    case `education`:
    case `edu_plus`:
    case `edu_pro`:
    case `quorum`:
    case `sci`:
    case `enterprise`:
    case `edu`:
    case `hc`:
    case `hc_consumption`:
    case `finserv`:
    case `law`: {
      let e;
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(`span`, {
            className: `text-codex-description`,
            children: (0, K.jsx)(i, {
              id: `composer.mode.contactAdmin`,
              defaultMessage: `To get more access, contact your admin`,
              description: `Suggest contacting admin for increased access`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]);
      let n;
      return (
        t[1] === r
          ? (n = t[2])
          : ((n = (0, K.jsx)(a.Item, { className: r, allowWrap: !0, children: e })), (t[1] = r), (t[2] = n)),
        n
      );
    }
    case `pro`:
    case `promax`:
    case `free_workspace`:
    case `guest`:
    case `k12`:
    case void 0:
      return null;
  }
  let s, c, l;
  if (t[3] !== n) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb1: {
      let e = v(n);
      if (e == null) {
        c = null;
        break bb1;
      }
      bb2: switch (e) {
        case M.PLUS: {
          let e;
          (t[7] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, K.jsx)(i, {
                id: `composer.mode.upgradeToPlus`,
                defaultMessage: `Upgrade to Plus`,
                description: `Upgrade to Plus message for free plan`,
              })),
              (t[7] = e))
            : (e = t[7]),
            (l = e));
          break bb2;
        }
        case M.PROLITE: {
          let e;
          (t[8] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, K.jsx)(i, {
                id: `composer.mode.upgradeToPro`,
                defaultMessage: `Upgrade to Pro`,
                description: `Upgrade to Pro`,
              })),
              (t[8] = e))
            : (e = t[8]),
            (l = e));
          break bb2;
        }
        case M.PRO: {
          let e;
          (t[9] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, K.jsx)(i, {
                id: `composer.mode.upgradeForMoreUsage`,
                defaultMessage: `Upgrade for more usage`,
                description: `Upgrade for more usage`,
              })),
              (t[9] = e))
            : (e = t[9]),
            (l = e));
        }
      }
      s = I(e);
    }
    ((t[3] = n), (t[4] = s), (t[5] = c), (t[6] = l));
  } else ((s = t[4]), (c = t[5]), (l = t[6]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let u = s,
    d;
  t[10] === u ? (d = t[11]) : ((d = (0, K.jsx)(w, { className: q, href: u })), (t[10] = u), (t[11] = d));
  let f;
  t[12] !== o || t[13] !== u
    ? ((f = (e) => {
        if (o != null) {
          o(e, u);
          return;
        }
        D({ event: e, href: u, initiator: `open_in_browser_bridge` });
      }),
      (t[12] = o),
      (t[13] = u),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== r || t[16] !== u || t[17] !== d || t[18] !== f || t[19] !== l
      ? ((p = (0, K.jsx)(a.Item, { rightIcon: d, className: r, href: u, onClick: f, children: l })),
        (t[15] = r),
        (t[16] = u),
        (t[17] = d),
        (t[18] = f),
        (t[19] = l),
        (t[20] = p))
      : (p = t[20]),
    p
  );
}
var G, K, q, J;
function Y() {
  return (Y = e(() => {
    ((G = p()),
      n(),
      d(),
      o(),
      u(),
      _(),
      L(),
      t(),
      S(),
      N(),
      l(),
      C(),
      P(),
      O(),
      g(),
      y(),
      (K = h()),
      (q = `icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100`),
      (J = `https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b`));
  }))();
}
export { Y as n, z as t };
//# sourceMappingURL=summary-a3fe57e6fc7d.js.map
