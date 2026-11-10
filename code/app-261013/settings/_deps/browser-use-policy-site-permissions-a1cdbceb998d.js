import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $X as n,
  ADt as r,
  AL as i,
  AO as a,
  BL as o,
  BV as s,
  CO as c,
  Cot as l,
  DV as u,
  EPt as d,
  FD as f,
  IDt as p,
  Ixt as m,
  JC as h,
  JIt as g,
  JR as _,
  LV as v,
  Mz as y,
  ND as b,
  Nz as x,
  Pxt as S,
  TJ as C,
  TLt as w,
  TO as T,
  VDt as E,
  Vxt as D,
  YR as O,
  _Mt as k,
  _O as A,
  aR as j,
  aj as M,
  b0 as N,
  cO as P,
  cz as F,
  eZ as I,
  fO as L,
  fR as R,
  fW as z,
  gMt as B,
  gO as V,
  hot as H,
  iR as U,
  jDt as W,
  kDt as G,
  lO as K,
  lR as q,
  lot as J,
  mO as ee,
  nR as te,
  oO as ne,
  oR as Y,
  oj as re,
  pLt as ie,
  qC as ae,
  rR as oe,
  sO as se,
  sz as ce,
  t3 as le,
  tR as ue,
  vO as de,
  vzt as X,
  wot as fe,
  xLt as pe,
  xMt as me,
  y0 as he,
  yzt as ge,
  zxt as _e,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brt as ve,
  DPn as ye,
  Ek as be,
  Ggr as xe,
  IC as Se,
  LC as Ce,
  QP as we,
  Rrt as Te,
  TPn as Ee,
  Tk as De,
  Vgr as Oe,
  hp as ke,
  mp as Ae,
  tF as je,
  t_r as Me,
} from "./app-initial-5851df3f6cb1.js";
import { fm as Ne, pm as Pe } from "./app-primary-fe8a450b3b04.js";
import { n as Fe, t as Ie } from "./settings-loading-row-bf72bf2df25d.js";
import {
  D as Le,
  E as Re,
  S as ze,
  T as Be,
  b as Ve,
  c as He,
  d as Ue,
  f as We,
  g as Ge,
  h as Ke,
  i as qe,
  m as Je,
  o as Ye,
  p as Xe,
  t as Ze,
  v as Qe,
  w as $e,
  x as et,
  y as tt,
} from "./browser-use-origin-state-queries-27371f90f360.js";
import { t as nt } from "./assert-never-a6e685100dc6.js";
function rt(e) {
  let t = (0, ot.c)(3),
    { children: n, managed: r } = e,
    i = r ? `managed` : null,
    a;
  return (
    t[0] !== n || t[1] !== i
      ? ((a = (0, st.jsx)(it, { reason: i, children: n })), (t[0] = n), (t[1] = i), (t[2] = a))
      : (a = t[2]),
    a
  );
}
function it(e) {
  let t = (0, ot.c)(11),
    { children: n, reason: r } = e,
    i = E();
  if (r == null) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, st.jsx)(st.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  t[2] !== i || t[3] !== r
    ? ((a =
        r === `managed`
          ? i.formatMessage(ct)
          : i.formatMessage({
              id: `settings.browserUse.webMcp.unavailableDescription`,
              defaultMessage: `Site tools aren't available for this account`,
              description: `Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools`,
            })),
      (t[2] = i),
      (t[3] = r),
      (t[4] = a))
    : (a = t[4]);
  let o = a,
    s;
  t[5] !== n || t[6] !== o
    ? ((s = (0, st.jsx)(`span`, {
        "aria-disabled": `true`,
        "aria-label": o,
        className: `inline-flex`,
        role: `button`,
        tabIndex: 0,
        children: n,
      })),
      (t[5] = n),
      (t[6] = o),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== o || t[9] !== s
      ? ((c = (0, st.jsx)(ce, { tooltipContent: o, children: s })), (t[8] = o), (t[9] = s), (t[10] = c))
      : (c = t[10]),
    c
  );
}
function at(e) {
  let t = (0, ot.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, st.jsx)(p, { ...ct })), (t[0] = n))
      : (n = t[0]),
    n
  );
}
var ot, st, ct;
function lt() {
  return (lt = e(() => {
    ((ot = X()),
      W(),
      F(),
      (st = me()),
      (ct = G({
        id: `settings.browserUse.managed.explanation`,
        defaultMessage: `Managed by your enterprise admin`,
        description: `Tooltip explaining that a Browser Use setting is controlled by an enterprise administrator`,
      })));
  }))();
}
var ut, dt, ft, pt, mt;
function ht() {
  return (ht = e(() => {
    ((ut = `_viewport_7zul7_2`),
      (dt = `_table_7zul7_2`),
      (ft = `_pinHeader_7zul7_2`),
      (pt = `_cellContent_7zul7_2`),
      (mt = { viewport: ut, table: dt, pinHeader: ft, cellContent: pt }));
  }))();
}
function gt(e) {
  let n = (0, xt.c)(44),
    { children: r, defaultRow: i, resources: a } = e,
    o = E(),
    [c, l] = (0, St.useState)(null),
    u;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e, t) => {
        (l(e.contentRect.width), t.style.setProperty(`--table-height`, `${e.contentRect.height}px`));
      }),
      (n[0] = u))
    : (u = n[0]);
  let d = f(u),
    m = f(vt),
    h = (0, St.useRef)(null),
    g = O(),
    [_, y] = (0, St.useState)(0),
    b = c == null ? 3 : Math.max(1, Math.min(3, Math.floor((c - 248) / 168))),
    x = Math.max(0, a.length - b),
    S = Math.min(_, x),
    C = Math.min(b, a.length),
    w = `calc(var(--spacing) * ${b === 1 ? 24 : 48})`,
    T;
  n[1] === x
    ? (T = n[2])
    : ((T = function (e) {
        let t = e.currentTarget,
          n = t.scrollWidth - t.clientWidth;
        y(n === 0 ? 0 : Math.round((Math.abs(t.scrollLeft) / n) * x));
      }),
      (n[1] = x),
      (n[2] = T));
  let D = T,
    k;
  n[3] !== x || n[4] !== S || n[5] !== b || n[6] !== g
    ? ((k = function (e) {
        let t = h.current;
        if (t == null) return;
        let n = Math.max(0, Math.min(x, (e === 1 ? Math.floor(S / b) + 1 : Math.ceil(S / b) - 1) * b));
        t.scrollTo({
          left:
            ((t.scrollWidth - t.clientWidth) / x) * n * (getComputedStyle(t).direction === `rtl` ? -1 : 1),
          behavior: g ? `instant` : `smooth`,
        });
      }),
      (n[3] = x),
      (n[4] = S),
      (n[5] = b),
      (n[6] = g),
      (n[7] = k))
    : (k = n[7]);
  let A = k,
    j;
  n[8] === d ? (j = n[9]) : ((j = re(d, h)), (n[8] = d), (n[9] = j));
  let M = `${w} repeat(${a.length}, calc((100% - ${w} - calc(var(--spacing) * 14)) / ${C})) calc(var(--spacing) * 14)`,
    N = `${w} calc(var(--spacing) * 14)`,
    P;
  n[10] !== M || n[11] !== N
    ? ((P = { gridTemplateColumns: M, scrollPaddingInline: N }), (n[10] = M), (n[11] = N), (n[12] = P))
    : (P = n[12]);
  let F;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(`th`, {
        className: `px-3 py-3 text-start font-medium`,
        children: (0, Z.jsx)(p, {
          id: `settings.browserUse.sitePermissions.matrix.siteColumn`,
          defaultMessage: `Site or pattern`,
          description: `Column heading for a website origin or origin pattern in the browser permissions matrix`,
        }),
      })),
      (n[13] = F))
    : (F = n[13]);
  let I;
  n[14] === a ? (I = n[15]) : ((I = a.map(_t)), (n[14] = a), (n[15] = I));
  let L;
  n[16] !== A || n[17] !== o || n[18] !== x || n[19] !== S
    ? ((L =
        x > 0
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-end`,
              children: [
                (0, Z.jsx)(t, {
                  "aria-label": o.formatMessage({
                    id: `settings.browserUse.sitePermissions.previousColumns`,
                    defaultMessage: `Previous permissions`,
                    description: `Show the previous columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: S === 0,
                  onClick: () => A(-1),
                  children: (0, Z.jsx)(v, { className: `rtl:rotate-180` }),
                }),
                (0, Z.jsx)(t, {
                  "aria-label": o.formatMessage({
                    id: `settings.browserUse.sitePermissions.nextColumns`,
                    defaultMessage: `Next permissions`,
                    description: `Show the next columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: S === x,
                  onClick: () => A(1),
                  children: (0, Z.jsx)(s, { className: `rtl:rotate-180` }),
                }),
              ],
            })
          : null),
      (n[16] = A),
      (n[17] = o),
      (n[18] = x),
      (n[19] = S),
      (n[20] = L))
    : (L = n[20]);
  let R;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Z.jsx)(p, {
          id: `settings.browserUse.sitePermissions.matrix.actionsColumn`,
          defaultMessage: `Actions`,
          description: `Accessible heading for site permission row actions`,
        }),
      })),
      (n[21] = R))
    : (R = n[21]);
  let z;
  n[22] === L
    ? (z = n[23])
    : ((z = (0, Z.jsxs)(`th`, { className: `px-2 py-3`, children: [L, R] })), (n[22] = L), (n[23] = z));
  let B;
  n[24] !== z || n[25] !== I
    ? ((B = (0, Z.jsxs)(`tr`, { className: `text-secondary`, children: [F, I, z] })),
      (n[24] = z),
      (n[25] = I),
      (n[26] = B))
    : (B = n[26]);
  let V;
  n[27] !== i || n[28] !== a ? ((V = i(a)), (n[27] = i), (n[28] = a), (n[29] = V)) : (V = n[29]);
  let H;
  n[30] !== m || n[31] !== B || n[32] !== V
    ? ((H = (0, Z.jsxs)(`thead`, {
        ref: m,
        className: `relative z-10 bg-surface select-none`,
        children: [B, V],
      })),
      (n[30] = m),
      (n[31] = B),
      (n[32] = V),
      (n[33] = H))
    : (H = n[33]);
  let U;
  n[34] !== r || n[35] !== a ? ((U = r(a)), (n[34] = r), (n[35] = a), (n[36] = U)) : (U = n[36]);
  let W;
  return (
    n[37] !== b || n[38] !== H || n[39] !== U || n[40] !== j || n[41] !== P || n[42] !== D
      ? ((W = (0, Z.jsx)(`div`, {
          className: mt.viewport,
          children: (0, Z.jsxs)(`table`, {
            ref: j,
            className: mt.table,
            "data-page-size": b,
            onScroll: D,
            style: P,
            children: [H, U],
          }),
        })),
        (n[37] = b),
        (n[38] = H),
        (n[39] = U),
        (n[40] = j),
        (n[41] = P),
        (n[42] = D),
        (n[43] = W))
      : (W = n[43]),
    W
  );
}
function _t(e) {
  return (0, Z.jsx)(
    `th`,
    {
      id: `browser-use-site-permissions-column-${e}`,
      className: `px-2 py-3 text-start font-medium`,
      children: (0, Z.jsx)(yt, { children: (0, Z.jsx)(bt, { resource: e }) }),
    },
    e,
  );
}
function vt(e, t) {
  t.style.setProperty(`--header-height`, `${e.contentRect.height}px`);
}
function yt(e) {
  let t = (0, xt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, { className: mt.cellContent, children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function bt(e) {
  let t = (0, xt.c)(7),
    { resource: n } = e;
  if (n === `origin`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(p, {
            id: `settings.browserUse.sitePermissions.matrix.browsingColumn`,
            defaultMessage: `Browsing`,
            description: `Browsing column heading in the browser site permissions matrix`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `download`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(p, {
            id: `settings.browserUse.sitePermissions.matrix.downloadsColumn`,
            defaultMessage: `Downloads`,
            description: `Downloads column heading in the browser site permissions matrix`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (n === `upload`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(p, {
            id: `settings.browserUse.sitePermissions.matrix.uploadsColumn`,
            defaultMessage: `Uploads`,
            description: `Uploads column heading in the browser site permissions matrix`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n === `webMcp`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(p, {
            id: `settings.browserUse.sitePermissions.siteTools`,
            defaultMessage: `Site tools`,
            description: `Website-provided tools permission in the browser site permissions settings`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (n === `fullCdp`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(p, {
            id: `settings.browserUse.sitePermissions.cdpAccess`,
            defaultMessage: `Debug / CDP`,
            description: `Chrome DevTools Protocol column heading in the browser site permissions matrix`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let r;
  return (t[5] === n ? (r = t[6]) : ((r = nt(n)), (t[5] = n), (t[6] = r)), r);
}
var xt, St, Z;
function Ct() {
  return (Ct = e(() => {
    ((xt = X()), (St = ge()), W(), le(), C(), _(), b(), M(), ht(), (Z = me()));
  }))();
}
function wt(e) {
  let t = (0, Et.c)(38),
    {
      webMcpAvailable: n,
      browserClientAllowed: r,
      disabled: i,
      enterprisePolicy: a,
      onChange: o,
      onWebMcpEnabledChange: s,
      onApprovalModeChange: d,
      originsConfig: f,
      userConfig: h,
      visibleResources: g,
    } = e,
    _ = i !== void 0 && i,
    v = m(l),
    y;
  t[0] !== f.approvalMode || t[1] !== f.downloadApprovalMode || t[2] !== f.uploadApprovalMode
    ? ((y = { origin: f.approvalMode, download: f.downloadApprovalMode, upload: f.uploadApprovalMode }),
      (t[0] = f.approvalMode),
      (t[1] = f.downloadApprovalMode),
      (t[2] = f.uploadApprovalMode),
      (t[3] = y))
    : (y = t[3]);
  let b = y,
    x;
  t[4] === a ? (x = t[5]) : ((x = Le(a) && Re(a, `persistentApproval`)), (t[4] = a), (t[5] = x));
  let S = x,
    C;
  t[6] !== b || t[7] !== d || t[8] !== o || t[9] !== v
    ? ((C = (e, t, n) => {
        if (t === b[e]) {
          n || o?.({ capability: e, enabled: !0 });
          return;
        }
        let r = !n && o != null;
        (async () => {
          try {
            await d(e, t);
          } catch {
            v.get(H).danger(
              (0, Q.jsx)(p, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving a browser use approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.approval.saveError` } },
            );
            return;
          }
          r && o({ capability: e, enabled: !0 });
        })();
      }),
      (t[6] = b),
      (t[7] = d),
      (t[8] = o),
      (t[9] = v),
      (t[10] = C))
    : (C = t[10]);
  let w = C,
    E;
  if (
    t[11] !== b ||
    t[12] !== r ||
    t[13] !== _ ||
    t[14] !== a ||
    t[15] !== w ||
    t[16] !== o ||
    t[17] !== s ||
    t[18] !== f.webMcpEnabled ||
    t[19] !== S ||
    t[20] !== h?.default_origin_policy ||
    t[21] !== g ||
    t[22] !== n
  ) {
    let e;
    (t[24] !== b ||
    t[25] !== r ||
    t[26] !== _ ||
    t[27] !== a ||
    t[28] !== w ||
    t[29] !== o ||
    t[30] !== s ||
    t[31] !== f.webMcpEnabled ||
    t[32] !== S ||
    t[33] !== h?.default_origin_policy ||
    t[34] !== n
      ? ((e = (e) => {
          let t = e === `webMcp` && !n,
            i = r && Re(a, e === `webMcp` ? `origin` : e),
            l = e === `webMcp` ? f.webMcpEnabled !== !1 : Ge(h?.default_origin_policy, e) !== `deny`,
            d = !i || t,
            p = !d && l,
            m = t ? `webMcpUnavailable` : null,
            g = e !== `fullCdp` && e !== `webMcp`,
            v = (g ? b[e] : void 0) === `neverAsk` && S ? `neverAsk` : `alwaysAsk`;
          return (0, Q.jsx)(
            `td`,
            {
              "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
              className: `px-2 py-3`,
              children: (0, Q.jsx)(yt, {
                children: (0, Q.jsx)(it, {
                  reason: m ?? (i ? null : `managed`),
                  children: (0, Q.jsxs)(c, {
                    align: `end`,
                    disabled: _ || d,
                    triggerButton: (0, Q.jsxs)(we, {
                      "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
                      disabled: _ || d,
                      children: [
                        d ? (0, Q.jsx)(z, { className: `text-secondary` }) : null,
                        (0, Q.jsx)(`span`, {
                          className: `truncate`,
                          children: (0, Q.jsx)(Tt, {
                            allowed: p,
                            webMcp: e === `webMcp`,
                            approvalMode: g ? v : void 0,
                          }),
                        }),
                      ],
                    }),
                    children: [
                      (0, Q.jsx)(T.Item, {
                        RightIcon: p && (!g || v === `alwaysAsk`) ? u : void 0,
                        onSelect: () => {
                          if (e === `webMcp`) {
                            s(!0);
                            return;
                          }
                          if (e === `fullCdp`) {
                            o?.({ capability: e, enabled: !0 });
                            return;
                          }
                          w(e, `alwaysAsk`, l);
                        },
                        children: (0, Q.jsx)(Tt, {
                          allowed: !0,
                          webMcp: e === `webMcp`,
                          approvalMode: g ? `alwaysAsk` : void 0,
                        }),
                      }),
                      g
                        ? (0, Q.jsx)(T.Item, {
                            RightIcon: p && v === `neverAsk` ? u : void 0,
                            disabled: !S,
                            tooltipText: S ? void 0 : (0, Q.jsx)(at, {}),
                            onSelect: () => {
                              S && w(e, `neverAsk`, l);
                            },
                            children: (0, Q.jsx)(Tt, { allowed: !0, webMcp: !1, approvalMode: `neverAsk` }),
                          })
                        : null,
                      e === `webMcp` || o != null
                        ? (0, Q.jsx)(T.Item, {
                            RightIcon: p ? void 0 : u,
                            onSelect: () => {
                              if (e === `webMcp`) {
                                s(!1);
                                return;
                              }
                              o?.({ capability: e, enabled: !1 });
                            },
                            children: (0, Q.jsx)(Tt, { allowed: !1, webMcp: e === `webMcp` }),
                          })
                        : null,
                    ],
                  }),
                }),
              }),
            },
            e,
          );
        }),
        (t[24] = b),
        (t[25] = r),
        (t[26] = _),
        (t[27] = a),
        (t[28] = w),
        (t[29] = o),
        (t[30] = s),
        (t[31] = f.webMcpEnabled),
        (t[32] = S),
        (t[33] = h?.default_origin_policy),
        (t[34] = n),
        (t[35] = e))
      : (e = t[35]),
      (E = g.map(e)),
      (t[11] = b),
      (t[12] = r),
      (t[13] = _),
      (t[14] = a),
      (t[15] = w),
      (t[16] = o),
      (t[17] = s),
      (t[18] = f.webMcpEnabled),
      (t[19] = S),
      (t[20] = h?.default_origin_policy),
      (t[21] = g),
      (t[22] = n),
      (t[23] = E));
  } else E = t[23];
  let D;
  return (
    t[36] === E ? (D = t[37]) : ((D = (0, Q.jsx)(Q.Fragment, { children: E })), (t[36] = E), (t[37] = D)),
    D
  );
}
function Tt(e) {
  let t = (0, Et.c)(6),
    { allowed: n, approvalMode: r, webMcp: i } = e;
  if (i) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = n
            ? (0, Q.jsx)(p, {
                id: `settings.browserUse.sitePermissions.siteTools.enabled`,
                defaultMessage: `Enabled`,
                description: `Site-provided tools are enabled for the browser`,
              })
            : (0, Q.jsx)(p, {
                id: `settings.browserUse.sitePermissions.siteTools.disabled`,
                defaultMessage: `Disabled`,
                description: `Site-provided tools are disabled for the browser`,
              })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  if (!n) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(p, {
            id: `settings.browserUse.sitePermissions.defaultValue.denied`,
            defaultMessage: `Block`,
            description: `Blocked default value for a browser site permission`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (r === `alwaysAsk`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(p, {
            id: `settings.browserUse.sitePermissions.defaultValue.approvalRequired`,
            defaultMessage: `Requires approval`,
            description: `Default browser permission that requires individual user approval`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (r === `neverAsk`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(p, {
            id: `settings.browserUse.sitePermissions.defaultValue.alwaysAllowed`,
            defaultMessage: `Always allow`,
            description: `Default browser permission that allows actions without requiring individual user approval`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let a;
  return (
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(p, {
          id: `settings.browserUse.sitePermissions.defaultValue.allowed`,
          defaultMessage: `Allow`,
          description: `Allowed default value for a browser site capability`,
        })),
        (t[5] = a))
      : (a = t[5]),
    a
  );
}
var Et, Q;
function Dt() {
  return (Dt = e(() => {
    ((Et = X()), S(), Je(), W(), a(), C(), J(), fe(), je(), lt(), Ct(), (Q = me()));
  }))();
}
function Ot(e, t, n) {
  let r = oe(n),
    i = r == null ? null : kt(Object.entries(e?.origins ?? {}), e?.defaultOriginPolicy, r),
    a =
      r == null
        ? null
        : kt(
            Object.entries(t?.origins ?? {}).map(([e, t]) => [e, At(t)]),
            At(t?.default_origin_policy),
            r,
          ),
    o = {
      access: jt(i?.access, a?.access, `deny`) ?? `allow`,
      uploads: jt(i?.uploads, a?.uploads, `deny`) ?? `allow`,
      downloads: jt(i?.downloads, a?.downloads, `deny`) ?? `allow`,
      fullCdpAccess: jt(i?.fullCdpAccess, a?.fullCdpAccess, `deny`) ?? `allow`,
      autoReview: jt(i?.autoReview, a?.autoReview, `deny`) ?? `allow`,
      persistentApproval: jt(i?.persistentApproval, a?.persistentApproval, !1) ?? !0,
      accessApprovalLifetime: jt(i?.accessApprovalLifetime, a?.accessApprovalLifetime, `turn`) ?? `thread`,
    };
  return o.access === `deny`
    ? { ...o, uploads: `deny`, downloads: `deny`, fullCdpAccess: `deny`, autoReview: `deny` }
    : o;
}
function kt(e, t, n) {
  let r = e.map(([e, t]) => ({ pattern: Y(e), policy: t })),
    i = new Map();
  for (let { pattern: e } of r) e != null && i.set(e.canonicalKey, (i.get(e.canonicalKey) ?? 0) + 1);
  let a = r.flatMap(({ pattern: e, policy: t }) =>
    e == null || t == null || !te(e, n)
      ? []
      : [{ policy: t, acceptsPermissiveValues: i.get(e.canonicalKey) === 1 }],
  );
  function o(e, n) {
    let r = null;
    for (let { policy: t, acceptsPermissiveValues: i } of a) {
      let a = t[e];
      if (a === n) return a;
      i && a != null && (r = a);
    }
    return r ?? t?.[e] ?? null;
  }
  return {
    access: o(`access`, `deny`),
    uploads: o(`uploads`, `deny`),
    downloads: o(`downloads`, `deny`),
    fullCdpAccess: o(`fullCdpAccess`, `deny`),
    autoReview: o(`autoReview`, `deny`),
    persistentApproval: o(`persistentApproval`, !1),
    accessApprovalLifetime: o(`accessApprovalLifetime`, `turn`),
  };
}
function At(e) {
  if (e != null)
    return { access: e.access, uploads: e.uploads, downloads: e.downloads, fullCdpAccess: e.full_cdp_access };
}
function jt(e, t, n) {
  return e === n || t === n ? n : (e ?? t ?? null);
}
function Mt() {
  return (Mt = e(() => {
    j();
  }))();
}
function Nt(e, t) {
  return [`origin`, `download`, `upload`, ...(e ? [`fullCdp`] : []), ...(t ? [`webMcp`] : [])];
}
function Pt(e, t, n = null, r, i, a) {
  let s = new Set();
  for (let n of t) {
    for (let t of qt(e, n, `allowed`)) s.add(t);
    for (let t of qt(e, n, `denied`)) s.add(t);
  }
  let c = Jt.safeParse(a?.config);
  if (a?.name.type === `user` && c.success)
    for (let [e, t] of Object.entries(c.data.browser_use?.origins ?? {})) {
      let n = Y(e);
      n != null &&
        t != null &&
        [`access`, `downloads`, `uploads`, `full_cdp_access`].some(
          (e) => t[e] === `allow` || t[e] === `deny`,
        ) &&
        s.add(n.canonicalPattern);
    }
  let l = new Set(s);
  for (let [e, t] of Object.entries(r?.origins ?? {})) {
    let n = Y(e);
    t != null && n != null && Object.values(t).some((e) => e != null) && l.add(n.canonicalPattern);
  }
  if (n != null) {
    let e = n.browserUse?.defaultOriginPolicy;
    for (let t of et(n)) (e?.access === `deny` ? t.policy.access === `allow` : Ut(t, e)) && l.add(t.pattern);
    for (let e of Ve(n)) {
      if (e.decision !== `deny` && n.network?.managedAllowedDomainsOnly !== !0) continue;
      let t = e.pattern.canonicalPattern.includes(`:`)
          ? `[${e.pattern.canonicalPattern}]`
          : e.pattern.canonicalPattern,
        r = Y(`https://${t}`);
      r != null && l.add(r.canonicalPattern);
    }
  }
  return [...l]
    .filter((e) => {
      if (s.has(e) || n == null) return !0;
      let t = Rt(n, e);
      return n.network?.managedAllowedDomainsOnly === !0 && t.length === 0
        ? !1
        : n.browserUse?.defaultOriginPolicy?.access !== `deny` ||
            Gt(e) ||
            Lt(n, e).some((e) => e.policy.access === `allow`) ||
            Bt(n, e, `origin`);
    })
    .sort((e, t) => Number(s.has(t)) - Number(s.has(e)) || e.localeCompare(t))
    .map((a) => {
      let c = Ot(null, r, a),
        l = Bt(n, a, `persistentApproval`),
        u = i != null && o(a, i) === `deny`,
        d = {},
        f = Lt(n, a),
        p = Rt(n, a),
        m = {};
      for (let e of t)
        f.some((t) => (e === `webMcp` ? t.policy.access === `deny` : Wt(n, t, e))) && (m[e] = !0);
      n != null &&
        (p.some(({ decision: e }) => e === `deny`) ||
          (n.network?.managedAllowedDomainsOnly === !0 && p.some(({ decision: e }) => e === `allow`))) &&
        (m.origin = !0);
      let h = (t) => {
        let o = t === `webMcp` ? `origin` : t,
          s = Kt(e, t, a);
        return n == null && r == null && i == null
          ? s
          : Vt(n, f, a, o)
            ? u || c[Ht(o)] === `deny`
              ? ((d[t] = `user`), `denied`)
              : t !== `webMcp` && s === `allowed` && !l
                ? `default`
                : s
            : (Re(n, o) || (d[t] = `organization`), `denied`);
      };
      return {
        origin: a,
        values: {
          origin: h(`origin`),
          download: h(`download`),
          upload: h(`upload`),
          fullCdp: h(`fullCdp`),
          webMcp: h(`webMcp`),
        },
        ...(Object.keys(d).length === 0 ? {} : { inheritedRestrictions: d }),
        ...(Object.keys(m).length === 0 ? {} : { managedResources: m }),
        hasUserPermissions: s.has(a),
        ...(u ? { networkBlocked: !0 } : {}),
      };
    });
}
function Ft(e, t, n) {
  let r = {};
  for (let e of n) {
    if (e === `webMcp`) continue;
    let n = { origin: `access`, download: `downloads`, upload: `uploads`, fullCdp: `full_cdp_access` },
      i = t[e];
    i === `denied`
      ? (r[n[e]] = `deny`)
      : i === `allowed` || i === `ask`
        ? (r[n[e]] = `allow`)
        : (r[n[e]] = null);
  }
  return Object.keys(r).length === 0 ? void 0 : { origin: e, policy: r };
}
function It({ nextValues: e, origin: t, resources: n, values: r }) {
  return n.flatMap((n) => {
    let i = r[n],
      a = e[n];
    if (a === i) return [];
    switch (a) {
      case `ask`:
      case `default`:
        return [
          { action: `remove`, kind: `allowed`, origin: t, resource: n },
          { action: `remove`, kind: `denied`, origin: t, resource: n },
        ];
      case `allowed`:
      case `denied`:
        return [{ action: `add`, kind: a, origin: t, resource: n }];
    }
  });
}
function Lt(e, t) {
  if (e == null) return [];
  let n = zt(t);
  return et(e).filter((e) => n.some((t) => (Gt(t) ? e.pattern === t : tt(e, t))));
}
function Rt(e, t) {
  if (e == null) return [];
  let n = zt(t);
  return Ve(e).filter((e) =>
    n.some((t) => {
      if (!Gt(t)) return Qe(e, t);
      let n = Y(t);
      return n != null && q(e.pattern, n.hostnamePattern.canonicalPattern);
    }),
  );
}
function zt(e) {
  if (e.includes(`://`)) return [e];
  let t = Y(`http://${e}`),
    n = Y(`https://${e}`);
  return t != null && n != null ? [t.canonicalPattern, n.canonicalPattern] : [];
}
function Bt(e, t, n) {
  if (e == null) return !0;
  let r = zt(t);
  return r.length > 0 && r.every((t) => $e(e, t, n));
}
function Vt(e, t, n, r) {
  if (!n.includes(`://`)) {
    let t = zt(n);
    return t.length > 0 && t.every((t) => Vt(e, Lt(e, t), t, r));
  }
  if (!Gt(n)) return $e(e, n, r);
  if (e == null) return !0;
  if (
    e.allowBrowserAndComputerUse === !1 ||
    e.network?.enabled === !1 ||
    (e.featureRequirements?.browser_use === !1 && e.featureRequirements.browser_use_external === !1)
  )
    return !1;
  let i = Rt(e, n);
  if (
    i.some(({ decision: e }) => e === `deny`) ||
    (e.network?.managedAllowedDomainsOnly === !0 && !i.some(({ decision: e }) => e === `allow`))
  )
    return !1;
  let a = Ht(r),
    o = t.flatMap((e) => {
      let t = e.policy[a];
      return t == null ? [] : [t];
    });
  if (o.includes(`deny`) || o.includes(!1)) return !1;
  if (o.includes(`allow`) || o.includes(!0)) return !0;
  let s = e.browserUse?.defaultOriginPolicy?.[a];
  return s !== `deny` && s !== !1;
}
function Ht(e) {
  switch (e) {
    case `origin`:
      return `access`;
    case `download`:
      return `downloads`;
    case `upload`:
      return `uploads`;
    case `fullCdp`:
      return `fullCdpAccess`;
  }
}
function Ut(e, t) {
  let { policy: n } = e;
  return (
    n.access === `deny` ||
    n.downloads === `deny` ||
    n.uploads === `deny` ||
    n.fullCdpAccess === `deny` ||
    n.persistentApproval === !1 ||
    (n.downloads === `allow` && t?.downloads === `deny`) ||
    (n.uploads === `allow` && t?.uploads === `deny`) ||
    (n.fullCdpAccess === `allow` && t?.fullCdpAccess === `deny`) ||
    (n.persistentApproval === !0 && t?.persistentApproval === !1)
  );
}
function Wt(e, t, n) {
  let r = t.policy[Ht(n)];
  if (r === `deny` || r === !1) return !0;
  if (e == null) return !1;
  let i = e.browserUse?.defaultOriginPolicy?.[Ht(n)];
  return (r === `allow` && i === `deny`) || (r === !0 && i === !1);
}
function Gt(e) {
  return /[*?]/u.test(e);
}
function Kt(e, t, n) {
  return qt(e, t, `denied`).includes(n) ? `denied` : qt(e, t, `allowed`).includes(n) ? `allowed` : `default`;
}
function qt(e, t, n) {
  switch (t) {
    case `origin`:
      return n === `allowed` ? e.allowedOrigins : e.deniedOrigins;
    case `download`:
      return n === `allowed` ? e.allowedDownloadOrigins : e.deniedDownloadOrigins;
    case `upload`:
      return n === `allowed` ? e.allowedUploadOrigins : e.deniedUploadOrigins;
    case `fullCdp`:
      return n === `allowed` ? e.allowedFullCdpOrigins : e.deniedFullCdpOrigins;
    case `webMcp`:
      return n === `allowed` ? e.allowedWebMcpOrigins : e.deniedWebMcpOrigins;
  }
}
var Jt;
function Yt() {
  return (Yt = e(() => {
    (i(),
      Mt(),
      Je(),
      d(),
      (Jt = ie({ browser_use: ie({ origins: pe(w(), pe(w(), g()).nullable()).nullish() }).nullish() })));
  }))();
}
function Xt(e) {
  let t = (0, vn.c)(26),
    { backend: n, showWebMcp: r } = e,
    i = m(l),
    a = We(),
    { selectedHostId: o } = ve(),
    { data: s, isError: c, isLoading: u } = D(Ze),
    { data: d, isPending: f, isError: p } = _e(Me, o),
    h;
  t[0] === o ? (h = t[1]) : ((h = { failClosed: !0, hostId: o }), (t[0] = o), (t[1] = h));
  let { data: g, isError: _, isPending: v } = _e(Oe, h),
    y = g?.requirements ?? null,
    b = d?.configReadSucceeded === !0 ? d.config.browser_use : null,
    x = s?.fullCdpAccessEnabled === !0,
    S = c || _ || p || d?.configReadSucceeded === !1,
    C = u || v || f,
    w;
  t[2] !== g?.requirements?.featureRequirements || t[3] !== _ || t[4] !== v || t[5] !== x
    ? ((w = x && !_ && !v && !R(g?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (t[2] = g?.requirements?.featureRequirements),
      (t[3] = _),
      (t[4] = v),
      (t[5] = x),
      (t[6] = w))
    : (w = t[6]);
  let T = w,
    E = a.mutate,
    O = d?.userConfigLayer,
    k = d?.config,
    A;
  t[7] === k ? (A = t[8]) : ((A = Ke(k)), (t[7] = k), (t[8] = A));
  let j;
  t[9] !== i || t[10] !== o || t[11] !== d
    ? ((j = (e) => {
        Xe(i, o, d, e).catch(() => {
          i.get(H).danger(_n(), {
            errorAnalytics: { toastId: `browserUsePolicySitePermissions.BrowserUseSitePermissionsGroup` },
          });
        });
      }),
      (t[9] = i),
      (t[10] = o),
      (t[11] = d),
      (t[12] = j))
    : (j = t[12]);
  let M;
  return (
    t[13] !== n ||
    t[14] !== y ||
    t[15] !== S ||
    t[16] !== T ||
    t[17] !== C ||
    t[18] !== s ||
    t[19] !== r ||
    t[20] !== O ||
    t[21] !== A ||
    t[22] !== j ||
    t[23] !== b ||
    t[24] !== a.mutate
      ? ((M = (0, $.jsx)(Zt, {
          backend: n,
          showWebMcp: r,
          onWebMcpEnabledChange: E,
          enterprisePolicy: y,
          originsConfig: s,
          isError: S,
          isFullCdpAccessEnabled: T,
          isLoading: C,
          userConfig: b,
          userConfigLayer: O,
          userNetworkPolicy: A,
          onDefaultPermissionChange: j,
        })),
        (t[13] = n),
        (t[14] = y),
        (t[15] = S),
        (t[16] = T),
        (t[17] = C),
        (t[18] = s),
        (t[19] = r),
        (t[20] = O),
        (t[21] = A),
        (t[22] = j),
        (t[23] = b),
        (t[24] = a.mutate),
        (t[25] = M))
      : (M = t[25]),
    M
  );
}
function Zt(e) {
  let t = (0, vn.c)(9),
    { selectedHostId: n } = ve(),
    r = Ue(n),
    i = Ye(),
    a = He(),
    o;
  t[0] !== i || t[1] !== a
    ? ((o = async (e, t) => {
        e === `origin` ? await i.mutateAsync(t) : await a.mutateAsync({ kind: e, approvalMode: t });
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = async (e) => {
        let { operation: t, origin: n, nextValues: i, resources: a, values: o } = e;
        if (t === `remove`) {
          await r.mutateAsync({
            updates: Object.values(xn).flatMap((e) =>
              [`allowed`, `denied`].map((t) => ({ action: `remove`, kind: t, origin: n, resource: e })),
            ),
            configUpdate: Y(n) == null ? void 0 : { origin: n, policy: null },
          });
          return;
        }
        await r.mutateAsync({
          updates: It({ nextValues: i, origin: n, resources: a, values: o }),
          configUpdate: Ft(n, i, t === `add` ? a.filter((e) => e === `origin` || i[e] !== "default") : a),
        });
      }),
      (t[3] = r),
      (t[4] = s));
  let c;
  return (
    t[5] !== e || t[6] !== o || t[7] !== s
      ? ((c = (0, $.jsx)(Qt, { ...e, onApprovalModeChange: o, onSitePermissionsChange: s })),
        (t[5] = e),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Qt(e) {
  let n = (0, vn.c)(73),
    {
      backend: r,
      disabled: i,
      enterprisePolicy: a,
      isError: o,
      isFullCdpAccessEnabled: s,
      isLoading: c,
      onDefaultPermissionChange: l,
      onApprovalModeChange: u,
      onSitePermissionsChange: d,
      onWebMcpEnabledChange: f,
      parseOrigin: m,
      originsConfig: h,
      showWebMcp: g,
      userConfig: _,
      userConfigLayer: v,
      userNetworkPolicy: b,
      supportsRequiresApproval: x,
      supportsClearingDefaultsOnAdd: S,
    } = e,
    C = r === void 0 ? `iab` : r,
    w = i !== void 0 && i,
    T = a === void 0 ? null : a,
    E = x === void 0 || x,
    O = S !== void 0 && S,
    [k, A] = (0, yn.useState)(!1),
    j = D(C !== `iab` || Ce),
    M = C === `iab` ? `iab` : `extension`,
    N;
  n[0] !== T || n[1] !== M ? ((N = Be(T, M)), (n[0] = T), (n[1] = M), (n[2] = N)) : (N = n[2]);
  let P = N,
    F,
    L,
    R,
    B;
  if (
    n[3] !== P ||
    n[4] !== T ||
    n[5] !== s ||
    n[6] !== h ||
    n[7] !== g ||
    n[8] !== _ ||
    n[9] !== v ||
    n[10] !== b
  ) {
    ((B = Nt(s, g)), (L = h == null ? null : Pt(h, B, T, _, b, v)));
    let e =
        T?.browserUse?.defaultOriginPolicy?.access === `deny` || T?.network?.managedAllowedDomainsOnly === !0,
      t = !P || T?.allowBrowserAndComputerUse === !1 || T?.network?.enabled === !1,
      r;
    (n[15] === T
      ? (r = n[16])
      : ((r = T != null && (et(T).some(en) || Ve(T).some($t))), (n[15] = T), (n[16] = r)),
      (F = t || (e && !r)),
      (R = ze(T) && (F || B.some((e) => !Re(T, e === `webMcp` ? `origin` : e)) || tn(T))),
      (n[3] = P),
      (n[4] = T),
      (n[5] = s),
      (n[6] = h),
      (n[7] = g),
      (n[8] = _),
      (n[9] = v),
      (n[10] = b),
      (n[11] = F),
      (n[12] = L),
      (n[13] = R),
      (n[14] = B));
  } else ((F = n[11]), (L = n[12]), (R = n[13]), (B = n[14]));
  let V = R,
    H = w || o || c || L == null || F,
    U;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = () => {
        A(!0);
      }),
      (n[17] = U))
    : (U = n[17]);
  let W;
  n[18] === F
    ? (W = n[19])
    : ((W = F ? (0, $.jsx)(z, {}) : (0, $.jsx)(y, { "aria-hidden": !1, asset: I })),
      (n[18] = F),
      (n[19] = W));
  let G;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(p, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (n[20] = G))
    : (G = n[20]);
  let K;
  n[21] !== W || n[22] !== H
    ? ((K = (0, $.jsxs)(t, {
        color: `secondary`,
        disabled: H,
        size: `toolbar`,
        onClick: U,
        children: [W, G],
      })),
      (n[21] = W),
      (n[22] = H),
      (n[23] = K))
    : (K = n[23]);
  let q;
  n[24] !== F || n[25] !== K
    ? ((q = (0, $.jsx)(rt, { managed: F, children: K })), (n[24] = F), (n[25] = K), (n[26] = q))
    : (q = n[26]);
  let J, ee;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(p, {
        id: `settings.browserUse.policy.agentPermissions.title`,
        defaultMessage: `Website permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (ee = (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.matrixSubtitle`,
        defaultMessage: `Choose default permissions and add exceptions for specific websites`,
        description: `Subtitle for the browser site permissions matrix with defaults and site-specific overrides`,
      })),
      (n[27] = J),
      (n[28] = ee))
    : ((J = n[27]), (ee = n[28]));
  let te;
  n[29] === q
    ? (te = n[30])
    : ((te = (0, $.jsx)(De.Header, { size: `base`, actions: q, title: J, subtitle: ee })),
      (n[29] = q),
      (n[30] = te));
  let ne;
  n[31] !== P ||
  n[32] !== w ||
  n[33] !== T ||
  n[34] !== o ||
  n[35] !== c ||
  n[36] !== u ||
  n[37] !== l ||
  n[38] !== d ||
  n[39] !== f ||
  n[40] !== h ||
  n[41] !== L ||
  n[42] !== E ||
  n[43] !== _ ||
  n[44] !== B ||
  n[45] !== j
    ? ((ne = (0, $.jsx)(De.Content, {
        children: o
          ? (0, $.jsx)(ae, {
              children: (0, $.jsx)(Ae, {
                layout: `settings-row`,
                children: (0, $.jsx)(p, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              }),
            })
          : c || L == null || h == null
            ? (0, $.jsx)(ae, {
                children: (0, $.jsx)(Ie, {
                  children: (0, $.jsx)(p, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                }),
              })
            : (0, $.jsx)(nn, {
                webMcpAvailable: j,
                browserClientAllowed: P,
                disabled: w,
                enterprisePolicy: T,
                onDefaultPermissionChange: l,
                onWebMcpEnabledChange: f,
                onApprovalModeChange: u,
                onSitePermissionsChange: d,
                supportsRequiresApproval: E,
                originsConfig: h,
                rows: L,
                userConfig: _,
                visibleResources: B,
              }),
      })),
      (n[31] = P),
      (n[32] = w),
      (n[33] = T),
      (n[34] = o),
      (n[35] = c),
      (n[36] = u),
      (n[37] = l),
      (n[38] = d),
      (n[39] = f),
      (n[40] = h),
      (n[41] = L),
      (n[42] = E),
      (n[43] = _),
      (n[44] = B),
      (n[45] = j),
      (n[46] = ne))
    : (ne = n[46]);
  let Y;
  n[47] !== o || n[48] !== c || n[49] !== L
    ? ((Y =
        !o && !c && L != null
          ? (0, $.jsx)(De.Footer, {
              children: (0, $.jsx)(p, {
                id: `settings.browserUse.sitePermissions.customPermissionsFooter`,
                defaultMessage: `Only sites with custom permissions appear here`,
                description: `Explains why sites without permission exceptions are absent from the table`,
              }),
            })
          : null),
      (n[47] = o),
      (n[48] = c),
      (n[49] = L),
      (n[50] = Y))
    : (Y = n[50]);
  let re;
  n[51] !== V || n[52] !== o || n[53] !== c || n[54] !== L
    ? ((re =
        !o && !c && L != null && V
          ? (0, $.jsx)(De.Footer, {
              children: (0, $.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, $.jsx)(z, {}),
                  (0, $.jsx)(p, {
                    id: `settings.browserUse.sitePermissions.managedLegend`,
                    defaultMessage: `Managed by your organization`,
                    description: `Legend explaining the lock icons shown on browser permissions controlled by an enterprise organization`,
                  }),
                ],
              }),
            })
          : null),
      (n[51] = V),
      (n[52] = o),
      (n[53] = c),
      (n[54] = L),
      (n[55] = re))
    : (re = n[55]);
  let ie;
  n[56] !== w ||
  n[57] !== T ||
  n[58] !== k ||
  n[59] !== d ||
  n[60] !== h ||
  n[61] !== m ||
  n[62] !== O ||
  n[63] !== E ||
  n[64] !== B ||
  n[65] !== j
    ? ((ie =
        h == null
          ? null
          : (0, $.jsx)(un, {
              webMcpAvailable: j,
              disabled: w,
              enterprisePolicy: T,
              open: k,
              originsConfig: h,
              onSitePermissionsChange: d,
              parseOrigin: m,
              supportsRequiresApproval: E,
              supportsClearingDefaultsOnAdd: O,
              visibleResources: B,
              onOpenChange: A,
            })),
      (n[56] = w),
      (n[57] = T),
      (n[58] = k),
      (n[59] = d),
      (n[60] = h),
      (n[61] = m),
      (n[62] = O),
      (n[63] = E),
      (n[64] = B),
      (n[65] = j),
      (n[66] = ie))
    : (ie = n[66]);
  let oe;
  return (
    n[67] !== te || n[68] !== ne || n[69] !== Y || n[70] !== re || n[71] !== ie
      ? ((oe = (0, $.jsxs)(De, { children: [te, ne, Y, re, ie] })),
        (n[67] = te),
        (n[68] = ne),
        (n[69] = Y),
        (n[70] = re),
        (n[71] = ie),
        (n[72] = oe))
      : (oe = n[72]),
    oe
  );
}
function $t(e) {
  let { decision: t, pattern: n } = e;
  return t === `allow` && /[*?]/u.test(n.canonicalPattern);
}
function en(e) {
  let { pattern: t, policy: n } = e;
  return n.access === `allow` && /[*?]/u.test(t);
}
function tn(e) {
  let t = e?.browserUse?.defaultOriginPolicy,
    n = e?.featureRequirements;
  return (
    (n?.browser_use === !1 && n.browser_use_external === !1) ||
    t?.downloads === `deny` ||
    t?.uploads === `deny` ||
    n?.browser_use_full_cdp_access === !1 ||
    t?.fullCdpAccess === `deny` ||
    t?.persistentApproval === !1 ||
    e?.network?.enabled === !1 ||
    Ve(e).some(({ decision: e }) => e === `deny`) ||
    et(e).some((e) => Ut(e, t))
  );
}
function nn(e) {
  let t = (0, vn.c)(25),
    {
      webMcpAvailable: n,
      browserClientAllowed: r,
      disabled: i,
      enterprisePolicy: a,
      onDefaultPermissionChange: o,
      onWebMcpEnabledChange: s,
      onApprovalModeChange: c,
      onSitePermissionsChange: l,
      originsConfig: u,
      rows: d,
      userConfig: f,
      visibleResources: m,
      supportsRequiresApproval: h,
    } = e,
    g;
  t[0] !== r ||
  t[1] !== i ||
  t[2] !== a ||
  t[3] !== c ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== u ||
  t[7] !== f ||
  t[8] !== n
    ? ((g = (e) =>
        (0, $.jsxs)(`tr`, {
          children: [
            (0, $.jsx)(`td`, {
              className: `px-3 py-3 font-medium`,
              children: (0, $.jsx)(`span`, {
                id: `browser-use-site-permissions-default`,
                children: (0, $.jsx)(p, {
                  id: `settings.browserUse.sitePermissions.matrix.defaultRow`,
                  defaultMessage: `Default`,
                  description: `Label for the default browser site permissions matrix row`,
                }),
              }),
            }),
            (0, $.jsx)(wt, {
              webMcpAvailable: n,
              browserClientAllowed: r,
              disabled: i,
              enterprisePolicy: a,
              originsConfig: u,
              userConfig: f,
              visibleResources: e,
              onChange: o,
              onWebMcpEnabledChange: s,
              onApprovalModeChange: c,
            }),
            (0, $.jsx)(`td`, { "aria-hidden": !0 }),
          ],
        })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = c),
      (t[4] = o),
      (t[5] = s),
      (t[6] = u),
      (t[7] = f),
      (t[8] = n),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== r ||
  t[11] !== i ||
  t[12] !== a ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== h ||
  t[17] !== f ||
  t[18] !== m ||
  t[19] !== n
    ? ((_ = (e) =>
        (0, $.jsx)(`tbody`, {
          children: d.map((t, o) =>
            (0, $.jsx)(
              rn,
              {
                webMcpAvailable: n,
                allResources: m,
                browserClientAllowed: r,
                disabled: i,
                enterprisePolicy: a,
                originsConfig: u,
                onSitePermissionsChange: l,
                row: t,
                rowIndex: o,
                userConfig: f,
                visibleResources: e,
                supportsRequiresApproval: h,
              },
              t.origin,
            ),
          ),
        })),
      (t[10] = r),
      (t[11] = i),
      (t[12] = a),
      (t[13] = l),
      (t[14] = u),
      (t[15] = d),
      (t[16] = h),
      (t[17] = f),
      (t[18] = m),
      (t[19] = n),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== g || t[22] !== _ || t[23] !== m
      ? ((v = (0, $.jsx)(gt, { resources: m, defaultRow: g, children: _ })),
        (t[21] = g),
        (t[22] = _),
        (t[23] = m),
        (t[24] = v))
      : (v = t[24]),
    v
  );
}
function rn(e) {
  let t = (0, vn.c)(46),
    {
      webMcpAvailable: n,
      allResources: r,
      browserClientAllowed: i,
      disabled: a,
      enterprisePolicy: o,
      originsConfig: s,
      onSitePermissionsChange: c,
      row: l,
      rowIndex: u,
      userConfig: d,
      visibleResources: f,
      supportsRequiresApproval: m,
    } = e,
    h = `browser-use-site-permissions-origin-${u}`,
    g;
  t[0] !== l.origin || t[1] !== h
    ? ((g = (0, $.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: (0, $.jsx)(`span`, {
          "data-tooltip-overflow-target": !0,
          className: `block min-w-0 truncate text-sm font-medium`,
          id: h,
          children: l.origin,
        }),
      })),
      (t[0] = l.origin),
      (t[1] = h),
      (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] !== l.origin || t[4] !== g
    ? ((_ = (0, $.jsx)(ce, { tooltipContent: l.origin, openWhen: `trigger-overflows`, children: g })),
      (t[3] = l.origin),
      (t[4] = g),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] === l.networkBlocked
    ? (v = t[7])
    : ((v = l.networkBlocked
        ? (0, $.jsx)(`span`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(p, {
              id: `settings.browserUse.sitePermissions.networkBlocked`,
              defaultMessage: `Blocked by your network configuration`,
              description: `Explains why a site permission is unavailable due to the selected user network permission profile`,
            }),
          })
        : null),
      (t[6] = l.networkBlocked),
      (t[7] = v));
  let y;
  t[8] !== h || t[9] !== _ || t[10] !== v
    ? ((y = (0, $.jsxs)(`td`, { "aria-labelledby": h, className: `px-3 py-3`, children: [_, v] })),
      (t[8] = h),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b;
  if (
    t[12] !== i ||
    t[13] !== a ||
    t[14] !== o ||
    t[15] !== c ||
    t[16] !== s ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== h ||
    t[20] !== m ||
    t[21] !== d ||
    t[22] !== f ||
    t[23] !== n
  ) {
    let e;
    (t[25] !== i ||
    t[26] !== a ||
    t[27] !== o ||
    t[28] !== c ||
    t[29] !== s ||
    t[30] !== l ||
    t[31] !== u ||
    t[32] !== h ||
    t[33] !== m ||
    t[34] !== d ||
    t[35] !== n
      ? ((e = (e) =>
          (0, $.jsx)(
            `td`,
            {
              className: `px-2 py-3`,
              children: (0, $.jsx)(yt, {
                children:
                  e !== `origin` && (!i || l.values.origin === `denied`)
                    ? (0, $.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `inline-flex h-token-button-composer items-center text-secondary`,
                        children: (0, $.jsx)(p, {
                          id: `settings.browserUse.sitePermissions.matrix.unavailableValue`,
                          defaultMessage: `—`,
                          description: `Visual placeholder for a site capability that does not apply because browsing is blocked`,
                        }),
                      })
                    : (0, $.jsx)(an, {
                        webMcpAvailable: n,
                        browserClientAllowed: i,
                        disabled: a,
                        enterprisePolicy: o,
                        originsConfig: s,
                        onSitePermissionsChange: c,
                        resource: e,
                        row: l,
                        rowIndex: u,
                        rowLabelId: h,
                        userConfig: d,
                        supportsRequiresApproval: m,
                      }),
              }),
            },
            e,
          )),
        (t[25] = i),
        (t[26] = a),
        (t[27] = o),
        (t[28] = c),
        (t[29] = s),
        (t[30] = l),
        (t[31] = u),
        (t[32] = h),
        (t[33] = m),
        (t[34] = d),
        (t[35] = n),
        (t[36] = e))
      : (e = t[36]),
      (b = f.map(e)),
      (t[12] = i),
      (t[13] = a),
      (t[14] = o),
      (t[15] = c),
      (t[16] = s),
      (t[17] = l),
      (t[18] = u),
      (t[19] = h),
      (t[20] = m),
      (t[21] = d),
      (t[22] = f),
      (t[23] = n),
      (t[24] = b));
  } else b = t[24];
  let x;
  t[37] !== r || t[38] !== a || t[39] !== c || t[40] !== l
    ? ((x = (0, $.jsx)(`td`, {
        className: `px-2 py-3`,
        children: (0, $.jsx)(ln, { disabled: a, onSitePermissionsChange: c, row: l, resources: r }),
      })),
      (t[37] = r),
      (t[38] = a),
      (t[39] = c),
      (t[40] = l),
      (t[41] = x))
    : (x = t[41]);
  let S;
  return (
    t[42] !== y || t[43] !== b || t[44] !== x
      ? ((S = (0, $.jsxs)(`tr`, { children: [y, b, x] })), (t[42] = y), (t[43] = b), (t[44] = x), (t[45] = S))
      : (S = t[45]),
    S
  );
}
function an(e) {
  let t = (0, vn.c)(96),
    {
      webMcpAvailable: n,
      browserClientAllowed: r,
      disabled: i,
      enterprisePolicy: a,
      originsConfig: o,
      onSitePermissionsChange: s,
      resource: c,
      row: u,
      rowIndex: d,
      rowLabelId: f,
      userConfig: p,
      supportsRequiresApproval: h,
    } = e,
    g = m(l),
    _ = E(),
    [v, y] = (0, yn.useState)(!1),
    b;
  t[0] !== c || t[1] !== u.managedResources || t[2] !== u.origin
    ? ((b = /[*?]/u.test(u.origin) && u.managedResources?.[c] === !0),
      (t[0] = c),
      (t[1] = u.managedResources),
      (t[2] = u.origin),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    S;
  t[4] !== r || t[5] !== a || t[6] !== x || t[7] !== c || t[8] !== u.origin
    ? ((S = r && !x && Bt(a, u.origin, c === `webMcp` ? `origin` : c)),
      (t[4] = r),
      (t[5] = a),
      (t[6] = x),
      (t[7] = c),
      (t[8] = u.origin),
      (t[9] = S))
    : (S = t[9]);
  let C = S,
    w = x || u.inheritedRestrictions?.[c] === `organization` || !C,
    T = c === `webMcp` && !n ? `webMcpUnavailable` : null,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F;
  if (
    t[10] !== C ||
    t[11] !== i ||
    t[12] !== a ||
    t[13] !== _ ||
    t[14] !== w ||
    t[15] !== v ||
    t[16] !== s ||
    t[17] !== o ||
    t[18] !== c ||
    t[19] !== u.inheritedRestrictions ||
    t[20] !== u.networkBlocked ||
    t[21] !== u.origin ||
    t[22] !== u.values ||
    t[23] !== f ||
    t[24] !== g ||
    t[25] !== T ||
    t[26] !== p?.origins
  ) {
    O = c === `webMcp` ? pn(o, u.origin) : void 0;
    let e;
    t[36] !== C || t[37] !== a || t[38] !== c || t[39] !== u.origin
      ? ((e = C && (c === `webMcp` || Bt(a, u.origin, `persistentApproval`))),
        (t[36] = C),
        (t[37] = a),
        (t[38] = c),
        (t[39] = u.origin),
        (t[40] = e))
      : (e = t[40]);
    let n = e,
      r;
    t[41] !== a || t[42] !== o || t[43] !== c || t[44] !== u.origin
      ? ((r = hn(o, c, a, u.origin)), (t[41] = a), (t[42] = o), (t[43] = c), (t[44] = u.origin), (t[45] = r))
      : (r = t[45]);
    let l = r,
      d;
    t[46] !== c || t[47] !== u.origin || t[48] !== p?.origins
      ? ((d =
          c !== `webMcp` &&
          Object.entries(p?.origins ?? {}).some((e) => {
            let [t, n] = e;
            return Y(t)?.canonicalPattern === u.origin && Ge(n, c) != null;
          })),
        (t[46] = c),
        (t[47] = u.origin),
        (t[48] = p?.origins),
        (t[49] = d))
      : (d = t[49]);
    let m = d,
      h;
    t[50] !== o || t[51] !== c || t[52] !== u.origin
      ? ((h = Kt(o, c, u.origin)), (t[50] = o), (t[51] = c), (t[52] = u.origin), (t[53] = h))
      : (h = t[53]);
    let b = h;
    j =
      !w &&
      !u.networkBlocked &&
      !m &&
      (u.values[c] === "default" || (u.inheritedRestrictions?.[c] === `user` && b !== `denied`));
    let x;
    if (
      (t[54] !== l || t[55] !== m || t[56] !== j || t[57] !== c || t[58] !== u.values
        ? ((x = u.values[c]),
          j ? (x = `default`) : x === "default" && m && (x = l === `neverAsk` ? `allowed` : `ask`),
          (t[54] = l),
          (t[55] = m),
          (t[56] = j),
          (t[57] = c),
          (t[58] = u.values),
          (t[59] = x))
        : (x = t[59]),
      (k = j ? u.values[c] : x),
      j && k === "default")
    ) {
      if (c === `fullCdp`) k = `allowed`;
      else if (c === `webMcp`) {
        let e;
        (t[60] !== o || t[61] !== u.origin
          ? ((e = fn(o, u.origin)), (t[60] = o), (t[61] = u.origin), (t[62] = e))
          : (e = t[62]),
          (k = e));
      }
    }
    let S;
    (t[63] !== n ||
    t[64] !== l ||
    t[65] !== i ||
    t[66] !== w ||
    t[67] !== v ||
    t[68] !== s ||
    t[69] !== c ||
    t[70] !== u.networkBlocked ||
    t[71] !== u.origin ||
    t[72] !== u.values ||
    t[73] !== b ||
    t[74] !== g ||
    t[75] !== x
      ? ((S = async (e) => {
          (e === x && (e !== `allowed` || b === `allowed`)) ||
            i ||
            v ||
            w ||
            u.networkBlocked ||
            (e === `ask` && l === `neverAsk`) ||
            (e === `allowed` && !n) ||
            (y(!0),
            await (async () => {
              try {
                await s({
                  operation: `update`,
                  nextValues: { ...u.values, [c]: e },
                  origin: u.origin,
                  resources: [c],
                  values: { ...u.values, [c]: b },
                });
              } catch {
                g.get(H).danger(_n(), {
                  errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSelect` },
                });
              }
            })().finally(() => {
              y(!1);
            }));
        }),
        (t[63] = n),
        (t[64] = l),
        (t[65] = i),
        (t[66] = w),
        (t[67] = v),
        (t[68] = s),
        (t[69] = c),
        (t[70] = u.networkBlocked),
        (t[71] = u.origin),
        (t[72] = u.values),
        (t[73] = b),
        (t[74] = g),
        (t[75] = x),
        (t[76] = S))
      : (S = t[76]),
      (A = S),
      (D = sn),
      (M = n),
      (N = f),
      (P = l),
      (F =
        T == null && !w && O != null ? _.formatMessage(wn.blockingRuleDescription, { pattern: O }) : void 0),
      (t[10] = C),
      (t[11] = i),
      (t[12] = a),
      (t[13] = _),
      (t[14] = w),
      (t[15] = v),
      (t[16] = s),
      (t[17] = o),
      (t[18] = c),
      (t[19] = u.inheritedRestrictions),
      (t[20] = u.networkBlocked),
      (t[21] = u.origin),
      (t[22] = u.values),
      (t[23] = f),
      (t[24] = g),
      (t[25] = T),
      (t[26] = p?.origins),
      (t[27] = D),
      (t[28] = O),
      (t[29] = k),
      (t[30] = A),
      (t[31] = j),
      (t[32] = M),
      (t[33] = N),
      (t[34] = P),
      (t[35] = F));
  } else
    ((D = t[27]),
      (O = t[28]),
      (k = t[29]),
      (A = t[30]),
      (j = t[31]),
      (M = t[32]),
      (N = t[33]),
      (P = t[34]),
      (F = t[35]));
  let I = i || v || w || u.networkBlocked || T != null,
    L = T ?? (w ? `managed` : null),
    R = r && T == null && O == null ? k : `denied`,
    z = `browser-use-site-permissions-column-${c}`,
    B = r ? k : `denied`,
    V = `browser-use-site-permissions-${d}-${c}-value`,
    U;
  t[77] === A
    ? (U = t[78])
    : ((U = (e) => {
        A(e);
      }),
      (t[77] = A),
      (t[78] = U));
  let W;
  return (
    t[79] !== D ||
    t[80] !== j ||
    t[81] !== v ||
    t[82] !== c ||
    t[83] !== h ||
    t[84] !== z ||
    t[85] !== B ||
    t[86] !== V ||
    t[87] !== U ||
    t[88] !== M ||
    t[89] !== N ||
    t[90] !== P ||
    t[91] !== F ||
    t[92] !== I ||
    t[93] !== L ||
    t[94] !== R
      ? ((W = (0, $.jsx)(D, {
          allowAllowed: M,
          contextId: N,
          defaultApprovalMode: P,
          description: F,
          disabled: I,
          disabledReason: L,
          displayValue: R,
          loading: v,
          inherited: j,
          labelId: z,
          resource: c,
          supportsRequiresApproval: h,
          value: B,
          valueId: V,
          onSelect: U,
        })),
        (t[79] = D),
        (t[80] = j),
        (t[81] = v),
        (t[82] = c),
        (t[83] = h),
        (t[84] = z),
        (t[85] = B),
        (t[86] = V),
        (t[87] = U),
        (t[88] = M),
        (t[89] = N),
        (t[90] = P),
        (t[91] = F),
        (t[92] = I),
        (t[93] = L),
        (t[94] = R),
        (t[95] = W))
      : (W = t[95]),
    W
  );
}
function on(e) {
  let t = (0, vn.c)(6),
    { value: n } = e,
    r = n === `allowed` && `bg-chart-green`,
    i = n === `denied` && `bg-text-danger`,
    a = (n === "default" || n === `ask`) && `bg-text-tertiary`,
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o = B(`size-2 shrink-0 rounded-full`, r, i, a)), (t[0] = r), (t[1] = i), (t[2] = a), (t[3] = o))
    : (o = t[3]);
  let s;
  return (t[4] === o ? (s = t[5]) : ((s = (0, $.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s)), s);
}
function sn(e) {
  let t = (0, vn.c)(48),
    {
      allowAllowed: n,
      allowRequiresApproval: r,
      contextId: i,
      defaultApprovalMode: a,
      description: o,
      disabled: s,
      disabledReason: l,
      displayValue: u,
      inherited: d,
      labelId: f,
      loading: m,
      onSelect: h,
      resource: g,
      supportsRequiresApproval: _,
      value: v,
      valueId: y,
      variant: b,
    } = e,
    x = n === void 0 || n,
    S = r === void 0 || r,
    C = _ === void 0 || _,
    w = b === void 0 ? `default` : b,
    D = E(),
    O = l == null && (d ?? v === "default"),
    k = o;
  if (k == null && O) {
    let e;
    (t[0] === D
      ? (e = t[1])
      : ((e = D.formatMessage({
          id: `settings.browserUse.sitePermissions.inheritedDescription`,
          defaultMessage: `Uses the default permission`,
          description: `Accessible description and tooltip for an editable browser site permission inherited from its defaults`,
        })),
        (t[0] = D),
        (t[1] = e)),
      (k = e));
  }
  let A = w === `form` ? `h-9! w-full px-2.5!` : void 0,
    j = k,
    M;
  t[2] !== i || t[3] !== f || t[4] !== y
    ? ((M = [f, i, y].filter(cn)), (t[2] = i), (t[3] = f), (t[4] = y), (t[5] = M))
    : (M = t[5]);
  let N = M.join(` `),
    P = w === `form` ? `small` : void 0,
    F;
  t[6] === l
    ? (F = t[7])
    : ((F = l == null ? null : (0, $.jsx)(z, { className: `text-secondary` })), (t[6] = l), (t[7] = F));
  let I = O && `text-secondary`,
    L;
  t[8] === I ? (L = t[9]) : ((L = B(`truncate`, I)), (t[8] = I), (t[9] = L));
  let R = d ? a : void 0,
    V;
  t[10] !== u || t[11] !== g || t[12] !== R
    ? ((V = gn(u, g, R)), (t[10] = u), (t[11] = g), (t[12] = R), (t[13] = V))
    : (V = t[13]);
  let H;
  t[14] !== L || t[15] !== V || t[16] !== y
    ? ((H = (0, $.jsx)(`span`, { id: y, className: L, children: V })),
      (t[14] = L),
      (t[15] = V),
      (t[16] = y),
      (t[17] = H))
    : (H = t[17]);
  let U;
  t[18] !== s ||
  t[19] !== m ||
  t[20] !== k ||
  t[21] !== F ||
  t[22] !== H ||
  t[23] !== A ||
  t[24] !== N ||
  t[25] !== P
    ? ((U = (0, $.jsxs)(we, {
        className: A,
        "aria-description": j,
        "aria-labelledby": N,
        disabled: s,
        loading: m,
        radius: P,
        children: [F, H],
      })),
      (t[18] = s),
      (t[19] = m),
      (t[20] = k),
      (t[21] = F),
      (t[22] = H),
      (t[23] = A),
      (t[24] = N),
      (t[25] = P),
      (t[26] = U))
    : (U = t[26]);
  let W = U,
    G;
  t[27] !== k || t[28] !== W
    ? ((G = k == null ? W : (0, $.jsx)(ce, { cloneCustomTrigger: !0, tooltipContent: k, children: W })),
      (t[27] = k),
      (t[28] = W),
      (t[29] = G))
    : (G = t[29]);
  let K;
  t[30] !== x ||
  t[31] !== S ||
  t[32] !== a ||
  t[33] !== h ||
  t[34] !== g ||
  t[35] !== C ||
  t[36] !== O ||
  t[37] !== v
    ? ((K = bn.map((e) => {
        if (e === `ask` && (!C || g === `webMcp`)) return null;
        let t = (e === `allowed` && !x) || (e === `ask` && !S),
          n = e === `ask` && a === `neverAsk`,
          r;
        return (
          t
            ? (r = (0, $.jsx)(at, {}))
            : n &&
              (r = (0, $.jsx)(p, {
                id: `settings.browserUse.sitePermissions.requiresApprovalUnavailable`,
                defaultMessage: `Change the default from Always allow before requiring approval for individual sites`,
                description: `Explains that the current browser approval storage cannot override a global Always allow setting for one site`,
              })),
          (0, $.jsx)(
            T.Item,
            {
              rightIconAsset: e === (O ? `default` : v) && (O || v !== "default") ? he : void 0,
              disabled: t || n,
              tooltipText: r,
              onSelect: () => {
                h(e);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(on, { value: e }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: gn(e, g) }),
                ],
              }),
            },
            e,
          )
        );
      })),
      (t[30] = x),
      (t[31] = S),
      (t[32] = a),
      (t[33] = h),
      (t[34] = g),
      (t[35] = C),
      (t[36] = O),
      (t[37] = v),
      (t[38] = K))
    : (K = t[38]);
  let q;
  t[39] === K
    ? (q = t[40])
    : ((q = (0, $.jsx)(`div`, { className: `flex flex-col`, children: K })), (t[39] = K), (t[40] = q));
  let J;
  t[41] !== s || t[42] !== G || t[43] !== q
    ? ((J = (0, $.jsx)(c, { align: `end`, contentWidth: `sm`, disabled: s, triggerButton: G, children: q })),
      (t[41] = s),
      (t[42] = G),
      (t[43] = q),
      (t[44] = J))
    : (J = t[44]);
  let ee;
  return (
    t[45] !== l || t[46] !== J
      ? ((ee = (0, $.jsx)(it, { reason: l, children: J })), (t[45] = l), (t[46] = J), (t[47] = ee))
      : (ee = t[47]),
    ee
  );
}
function cn(e) {
  return e != null;
}
function ln(e) {
  let n = (0, vn.c)(52),
    { disabled: r, onSitePermissionsChange: i, resources: a, row: o } = e,
    s = m(l),
    c = E(),
    [u, d] = (0, yn.useState)(!1),
    [f, h] = (0, yn.useState)(!1),
    g;
  n[0] !== r ||
  n[1] !== f ||
  n[2] !== i ||
  n[3] !== a ||
  n[4] !== o.hasUserPermissions ||
  n[5] !== o.origin ||
  n[6] !== o.values ||
  n[7] !== s
    ? ((g = async () => {
        r ||
          f ||
          !o.hasUserPermissions ||
          (h(!0),
          await (async () => {
            try {
              (await i({
                operation: `remove`,
                origin: o.origin,
                nextValues: Cn,
                resources: a,
                values: o.values,
              }),
                d(!1));
            } catch {
              s.get(H).danger(_n(), {
                errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleClear` },
              });
            }
          })().finally(() => {
            h(!1);
          }));
      }),
      (n[0] = r),
      (n[1] = f),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o.hasUserPermissions),
      (n[5] = o.origin),
      (n[6] = o.values),
      (n[7] = s),
      (n[8] = g))
    : (g = n[8]);
  let _ = g,
    v;
  n[9] !== o.hasUserPermissions || n[10] !== o.inheritedRestrictions || n[11] !== o.managedResources
    ? ((v =
        !o.hasUserPermissions &&
        (o.managedResources != null ||
          Object.values(o.inheritedRestrictions ?? {}).includes(`organization`))),
      (n[9] = o.hasUserPermissions),
      (n[10] = o.inheritedRestrictions),
      (n[11] = o.managedResources),
      (n[12] = v))
    : (v = n[12]);
  let y;
  n[13] !== c || n[14] !== o.origin
    ? ((y = c.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: o.origin },
      )),
      (n[13] = c),
      (n[14] = o.origin),
      (n[15] = y))
    : (y = n[15]);
  let b = r || f || !o.hasUserPermissions,
    x;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        d(!0);
      }),
      (n[16] = x))
    : (x = n[16]);
  let S;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(Ne, { className: `icon-2xs` })), (n[17] = S))
    : (S = n[17]);
  let C;
  n[18] !== y || n[19] !== b
    ? ((C = (0, $.jsx)(t, {
        "aria-label": y,
        color: `ghost`,
        disabled: b,
        onClick: x,
        size: `icon`,
        children: S,
      })),
      (n[18] = y),
      (n[19] = b),
      (n[20] = C))
    : (C = n[20]);
  let w;
  n[21] !== v || n[22] !== C
    ? ((w = (0, $.jsx)(rt, { managed: v, children: C })), (n[21] = v), (n[22] = C), (n[23] = w))
    : (w = n[23]);
  let T;
  n[24] === _
    ? (T = n[25])
    : ((T = (e) => {
        (e.preventDefault(), _());
      }),
      (n[24] = _),
      (n[25] = T));
  let D;
  n[26] === o.origin
    ? (D = n[27])
    : ((D = (0, $.jsx)(A, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(p, {
            id: `settings.browserUse.sitePermissions.removeDialog.title`,
            defaultMessage: `Remove custom permissions for {origin}?`,
            description: `Confirmation dialog title for removing custom browser site permissions`,
            values: { origin: o.origin },
          }),
        }),
      })),
      (n[26] = o.origin),
      (n[27] = D));
  let O;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, $.jsx)(V, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(p, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (n[28] = O))
    : (O = n[28]);
  let k;
  n[29] === D
    ? (k = n[30])
    : ((k = (0, $.jsx)(K, { children: (0, $.jsx)(P, { title: D, subtitle: O }) })), (n[29] = D), (n[30] = k));
  let j;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        d(!1);
      }),
      (n[31] = j))
    : (j = n[31]);
  let M;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (n[32] = M))
    : (M = n[32]);
  let N;
  n[33] === f
    ? (N = n[34])
    : ((N = (0, $.jsx)(t, { color: `ghost`, disabled: f, onClick: j, type: `button`, children: M })),
      (n[33] = f),
      (n[34] = N));
  let F;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (n[35] = F))
    : (F = n[35]);
  let I;
  n[36] !== r || n[37] !== f
    ? ((I = (0, $.jsx)(t, { color: `danger`, disabled: r, loading: f, type: `submit`, children: F })),
      (n[36] = r),
      (n[37] = f),
      (n[38] = I))
    : (I = n[38]);
  let L;
  n[39] !== N || n[40] !== I
    ? ((L = (0, $.jsx)(K, { children: (0, $.jsxs)(se, { children: [N, I] }) })),
      (n[39] = N),
      (n[40] = I),
      (n[41] = L))
    : (L = n[41]);
  let R;
  n[42] !== k || n[43] !== L || n[44] !== T
    ? ((R = (0, $.jsxs)(ne, { as: `form`, onSubmit: T, children: [k, L] })),
      (n[42] = k),
      (n[43] = L),
      (n[44] = T),
      (n[45] = R))
    : (R = n[45]);
  let z;
  n[46] !== u || n[47] !== R
    ? ((z = (0, $.jsx)(ee, { open: u, onOpenChange: d, size: `compact`, children: R })),
      (n[46] = u),
      (n[47] = R),
      (n[48] = z))
    : (z = n[48]);
  let B;
  return (
    n[49] !== z || n[50] !== w
      ? ((B = (0, $.jsxs)($.Fragment, { children: [w, z] })), (n[49] = z), (n[50] = w), (n[51] = B))
      : (B = n[51]),
    B
  );
}
function un(e) {
  let n = (0, vn.c)(105),
    {
      webMcpAvailable: r,
      disabled: i,
      enterprisePolicy: a,
      onOpenChange: o,
      open: s,
      originsConfig: c,
      onSitePermissionsChange: u,
      parseOrigin: d,
      supportsRequiresApproval: f,
      supportsClearingDefaultsOnAdd: h,
      visibleResources: g,
    } = e,
    _ = m(l),
    v = E(),
    [y, b] = (0, yn.useState)(``),
    [x, S] = (0, yn.useState)(`default`),
    [C, w] = (0, yn.useState)(Sn),
    [T, D] = (0, yn.useState)(!1),
    [O, k] = (0, yn.useState)(!1),
    j,
    M,
    N,
    F,
    I,
    L,
    R,
    z,
    B,
    U,
    W,
    G,
    q,
    J,
    te,
    re,
    ie,
    ae;
  if (
    n[0] !== C ||
    n[1] !== i ||
    n[2] !== a ||
    n[3] !== v ||
    n[4] !== O ||
    n[5] !== o ||
    n[6] !== u ||
    n[7] !== s ||
    n[8] !== y ||
    n[9] !== c ||
    n[10] !== d ||
    n[11] !== _ ||
    n[12] !== T ||
    n[13] !== h ||
    n[14] !== f ||
    n[15] !== x ||
    n[16] !== g ||
    n[17] !== r
  ) {
    R = d == null ? (Y(y)?.canonicalPattern ?? null) : d(y);
    let e = y.length > 0 && R == null,
      t = R == null || Bt(a, R, `origin`),
      l = R == null || Bt(a, R, `persistentApproval`);
    ((I =
      x !== "default" ||
      Object.values(C).some(dn) ||
      (h && R != null && g.some((e) => Kt(c, e, R) !== "default"))),
      (F =
        R != null &&
        g.some((e) => {
          let t = e === `origin` ? x : C[e];
          return (
            (e !== `webMcp` && t === `allowed` && !l) ||
            ((t === `allowed` || t === `ask`) && !Bt(a, R, e === `webMcp` ? `origin` : e))
          );
        })),
      (L = g.some((e) => (e === `origin` ? x : C[e]) === `ask` && hn(c, e, a, R ?? ``) === `neverAsk`)));
    let m;
    (n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((m = () => {
          (b(``), S(`default`), w(Sn), D(!1));
        }),
        (n[36] = m))
      : (m = n[36]),
      (z = m));
    let E = async () => {
      R == null ||
        i ||
        O ||
        !I ||
        F ||
        L ||
        (k(!0),
        await (async () => {
          try {
            (await u({
              operation: `add`,
              nextValues: { ...C, origin: x },
              origin: R,
              resources: g,
              values: Cn,
            }),
              z(),
              o(!1));
          } catch {
            _.get(H).danger(_n(), {
              errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSubmit` },
            });
          }
        })().finally(() => {
          k(!1);
        }));
    };
    ((N = ee),
      (ie = s),
      n[37] === o
        ? (ae = n[38])
        : ((ae = (e) => {
            (e || z(), o(e));
          }),
          (n[37] = o),
          (n[38] = ae)),
      (U = `compact`),
      (M = ne),
      (J = `form`),
      (te = (e) => {
        (e.preventDefault(), E());
      }));
    let oe;
    (n[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((oe = (0, $.jsx)(A, {
          asChild: !0,
          children: (0, $.jsx)(`span`, {
            children: (0, $.jsx)(p, {
              id: `settings.browserUse.sitePermissions.addDialog.title`,
              defaultMessage: `Add site permission`,
              description: `Title for add browser site permission dialog`,
            }),
          }),
        })),
        (n[39] = oe))
      : (oe = n[39]),
      n[40] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((re = (0, $.jsx)(K, {
            children: (0, $.jsx)(P, {
              title: oe,
              subtitle: (0, $.jsx)(V, {
                asChild: !0,
                children: (0, $.jsx)(`span`, {
                  children: (0, $.jsx)(p, {
                    id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                    defaultMessage: `Choose what access ChatGPT has on a site`,
                    description: `Subtitle for add browser site permission dialog`,
                  }),
                }),
              }),
            }),
          })),
          (n[40] = re))
        : (re = n[40]),
      (j = K),
      (B = `gap-3`));
    let se;
    n[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((se = (0, $.jsx)(`span`, {
          className: `text-sm font-medium`,
          children: (0, $.jsx)(p, {
            id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
            defaultMessage: `Site`,
            description: `Site label for add browser site permission dialog`,
          }),
        })),
        (n[41] = se))
      : (se = n[41]);
    let ce = e ? `browser-use-add-origin-error` : void 0,
      le;
    n[42] === v
      ? (le = n[43])
      : ((le = v.formatMessage({
          id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
          defaultMessage: `Site`,
          description: `Aria label for site input in add browser site permission dialog`,
        })),
        (n[42] = v),
        (n[43] = le));
    let ue = i || O,
      de;
    n[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((de = (e) => {
          b(e.currentTarget.value);
        }),
        (n[44] = de))
      : (de = n[44]);
    let X;
    n[45] === v
      ? (X = n[46])
      : ((X = v.formatMessage({
          id: `settings.browserUse.policyDomains.addDialogPlaceholder`,
          defaultMessage: `https://example.com`,
          description: `Placeholder showing that browser site patterns require an HTTP or HTTPS scheme`,
        })),
        (n[45] = v),
        (n[46] = X));
    let fe;
    n[47] !== e || n[48] !== y || n[49] !== ce || n[50] !== le || n[51] !== ue || n[52] !== X
      ? ((fe = (0, $.jsx)(Ee, {
          autoFocus: !0,
          "aria-describedby": ce,
          "aria-invalid": e,
          "aria-label": le,
          disabled: ue,
          onChange: de,
          placeholder: X,
          value: y,
        })),
        (n[47] = e),
        (n[48] = y),
        (n[49] = ce),
        (n[50] = le),
        (n[51] = ue),
        (n[52] = X),
        (n[53] = fe))
      : (fe = n[53]);
    let pe;
    (n[54] === e
      ? (pe = n[55])
      : ((pe = e
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-danger`,
              id: `browser-use-add-origin-error`,
              role: `alert`,
              children: (0, $.jsx)(p, {
                id: `settings.browserUse.sitePermissions.addDialog.invalidOrigin`,
                defaultMessage: `Enter a valid origin, such as https://example.com or https://*.example.com`,
                description: `Validation error explaining the required URL scheme and supported wildcard syntax for a browser site permission`,
              }),
            })
          : null),
        (n[54] = e),
        (n[55] = pe)),
      n[56] !== fe || n[57] !== pe
        ? ((W = (0, $.jsxs)(`label`, { className: `flex flex-col gap-1.5`, children: [se, fe, pe] })),
          (n[56] = fe),
          (n[57] = pe),
          (n[58] = W))
        : (W = n[58]));
    let me;
    (n[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((me = (0, $.jsx)(`span`, {
          id: `browser-use-add-browsing-label`,
          className: `text-sm font-medium`,
          children: (0, $.jsx)(p, {
            id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
            defaultMessage: `Browse`,
            description: `Behavior label for add browser site permission dialog`,
          }),
        })),
        (n[59] = me))
      : (me = n[59]),
      (G = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          me,
          (0, $.jsx)(sn, {
            allowAllowed: t && l,
            allowRequiresApproval: t,
            defaultApprovalMode: hn(c, `origin`, a, R ?? ``),
            disabled: i || O,
            disabledReason: null,
            displayValue: x,
            labelId: `browser-use-add-browsing-label`,
            resource: `origin`,
            supportsRequiresApproval: f,
            value: x,
            valueId: `browser-use-add-browsing-value`,
            variant: `form`,
            onSelect: S,
          }),
        ],
      })),
      (q = T
        ? g.map((e) => {
            if (e === `origin`) return null;
            let t = `browser-use-add-${e}-label`,
              n = `browser-use-add-${e}-value`,
              o = e === `webMcp` && !r ? `webMcpUnavailable` : null,
              s = e === `webMcp` && R != null ? pn(c, R) : void 0;
            return (0, $.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-1.5`,
                children: [
                  (0, $.jsx)(`span`, { id: t, className: `text-sm font-medium`, children: mn(e) }),
                  (0, $.jsx)(sn, {
                    allowAllowed: (e === `webMcp` || l) && Bt(a, R ?? ``, e === `webMcp` ? `origin` : e),
                    allowRequiresApproval: Bt(a, R ?? ``, e === `webMcp` ? `origin` : e),
                    defaultApprovalMode: hn(c, e, a, R ?? ``),
                    description:
                      o == null && s != null
                        ? v.formatMessage(wn.blockingRuleDescription, { pattern: s })
                        : void 0,
                    disabled: i || O || o != null,
                    disabledReason: o,
                    displayValue: o != null || s != null ? `denied` : C[e],
                    labelId: t,
                    resource: e,
                    supportsRequiresApproval: f,
                    value: C[e],
                    valueId: n,
                    variant: `form`,
                    onSelect: (t) => {
                      w({ ...C, [e]: t });
                    },
                  }),
                ],
              },
              e,
            );
          })
        : null),
      (n[0] = C),
      (n[1] = i),
      (n[2] = a),
      (n[3] = v),
      (n[4] = O),
      (n[5] = o),
      (n[6] = u),
      (n[7] = s),
      (n[8] = y),
      (n[9] = c),
      (n[10] = d),
      (n[11] = _),
      (n[12] = T),
      (n[13] = h),
      (n[14] = f),
      (n[15] = x),
      (n[16] = g),
      (n[17] = r),
      (n[18] = j),
      (n[19] = M),
      (n[20] = N),
      (n[21] = F),
      (n[22] = I),
      (n[23] = L),
      (n[24] = R),
      (n[25] = z),
      (n[26] = B),
      (n[27] = U),
      (n[28] = W),
      (n[29] = G),
      (n[30] = q),
      (n[31] = J),
      (n[32] = te),
      (n[33] = re),
      (n[34] = ie),
      (n[35] = ae));
  } else
    ((j = n[18]),
      (M = n[19]),
      (N = n[20]),
      (F = n[21]),
      (I = n[22]),
      (L = n[23]),
      (R = n[24]),
      (z = n[25]),
      (B = n[26]),
      (U = n[27]),
      (W = n[28]),
      (G = n[29]),
      (q = n[30]),
      (J = n[31]),
      (te = n[32]),
      (re = n[33]),
      (ie = n[34]),
      (ae = n[35]));
  let oe;
  n[60] !== I || n[61] !== R
    ? ((oe =
        R != null && !I
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-secondary`,
              role: `status`,
              children: (0, $.jsx)(p, {
                id: `settings.browserUse.sitePermissions.addDialog.matchesDefaults`,
                defaultMessage: `These permissions match the defaults, so adding this site would not change anything`,
                description: `Explanation shown when the add site permission button is disabled because every permission inherits the current default`,
              }),
            })
          : null),
      (n[60] = I),
      (n[61] = R),
      (n[62] = oe))
    : (oe = n[62]);
  let ce;
  n[63] !== j || n[64] !== B || n[65] !== oe || n[66] !== W || n[67] !== G || n[68] !== q
    ? ((ce = (0, $.jsxs)(j, { className: B, children: [W, G, q, oe] })),
      (n[63] = j),
      (n[64] = B),
      (n[65] = oe),
      (n[66] = W),
      (n[67] = G),
      (n[68] = q),
      (n[69] = ce))
    : (ce = n[69]);
  let le;
  n[70] !== O || n[71] !== T || n[72] !== g.length
    ? ((le =
        !T && g.length > 1
          ? (0, $.jsx)(t, {
              className: `me-auto`,
              color: `ghost`,
              disabled: O,
              onClick: () => {
                D(!0);
              },
              type: `button`,
              children: (0, $.jsx)(p, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (n[70] = O),
      (n[71] = T),
      (n[72] = g.length),
      (n[73] = le))
    : (le = n[73]);
  let ue;
  n[74] !== o || n[75] !== z
    ? ((ue = () => {
        (z(), o(!1));
      }),
      (n[74] = o),
      (n[75] = z),
      (n[76] = ue))
    : (ue = n[76]);
  let de;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(p, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (n[77] = de))
    : (de = n[77]);
  let X;
  n[78] !== O || n[79] !== ue
    ? ((X = (0, $.jsx)(t, { color: `outline`, disabled: O, onClick: ue, type: `button`, children: de })),
      (n[78] = O),
      (n[79] = ue),
      (n[80] = X))
    : (X = n[80]);
  let fe = R == null || i || !I || O || F || L,
    pe;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(p, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (n[81] = pe))
    : (pe = n[81]);
  let me;
  n[82] !== O || n[83] !== fe
    ? ((me = (0, $.jsx)(t, { color: `primary`, disabled: fe, loading: O, type: `submit`, children: pe })),
      (n[82] = O),
      (n[83] = fe),
      (n[84] = me))
    : (me = n[84]);
  let he;
  n[85] !== F || n[86] !== me
    ? ((he = (0, $.jsx)(rt, { managed: F, children: me })), (n[85] = F), (n[86] = me), (n[87] = he))
    : (he = n[87]);
  let ge;
  n[88] !== le || n[89] !== X || n[90] !== he
    ? ((ge = (0, $.jsx)(K, { children: (0, $.jsxs)(se, { children: [le, X, he] }) })),
      (n[88] = le),
      (n[89] = X),
      (n[90] = he),
      (n[91] = ge))
    : (ge = n[91]);
  let _e;
  n[92] !== M || n[93] !== ce || n[94] !== ge || n[95] !== J || n[96] !== te || n[97] !== re
    ? ((_e = (0, $.jsxs)(M, { as: J, onSubmit: te, children: [re, ce, ge] })),
      (n[92] = M),
      (n[93] = ce),
      (n[94] = ge),
      (n[95] = J),
      (n[96] = te),
      (n[97] = re),
      (n[98] = _e))
    : (_e = n[98]);
  let ve;
  return (
    n[99] !== N || n[100] !== U || n[101] !== _e || n[102] !== ie || n[103] !== ae
      ? ((ve = (0, $.jsx)(N, { open: ie, onOpenChange: ae, size: U, children: _e })),
        (n[99] = N),
        (n[100] = U),
        (n[101] = _e),
        (n[102] = ie),
        (n[103] = ae),
        (n[104] = ve))
      : (ve = n[104]),
    ve
  );
}
function dn(e) {
  return e !== "default";
}
function fn(e, t) {
  if (e.webMcpEnabled !== !1) return `allowed`;
  if (/[*?]/u.test(t)) return `denied`;
  let n = U(t);
  return e.allowedWebMcpOrigins.some((e) => ue(e.trim(), { raw: n?.origin ?? t, hostPort: n?.host ?? null }))
    ? `allowed`
    : `denied`;
}
function pn(e, t) {
  if (/[*?]/u.test(t)) return;
  let n = U(t);
  return e.deniedWebMcpOrigins.find(
    (e) => e !== t && ue(e.trim(), { raw: n?.origin ?? t, hostPort: n?.host ?? null }),
  );
}
function mn(e) {
  switch (e) {
    case `origin`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `webMcp`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.siteTools`,
        defaultMessage: `Site tools`,
        description: `Website-provided tools permission in the browser site permissions settings`,
      });
    case `fullCdp`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.cdpAccess`,
        defaultMessage: `Debug / CDP`,
        description: `Debug label for custom browser site permissions`,
      });
  }
}
function hn(e, t, n, r) {
  let i = {
    origin: e.approvalMode,
    download: e.downloadApprovalMode,
    upload: e.uploadApprovalMode,
    fullCdp: void 0,
    webMcp: void 0,
  }[t];
  return i === `neverAsk` && (!Le(n) || !Bt(n, r, `persistentApproval`)) ? `alwaysAsk` : i;
}
function gn(e, t, n) {
  if (t === `webMcp` && e === `allowed`)
    return (0, $.jsx)(p, {
      id: `settings.browserUse.sitePermissions.siteTools.enabled`,
      defaultMessage: `Enabled`,
      description: `Site-provided tools are enabled for the browser`,
    });
  if (t === `webMcp` && e === `denied`)
    return (0, $.jsx)(p, {
      id: `settings.browserUse.sitePermissions.siteTools.disabled`,
      defaultMessage: `Disabled`,
      description: `Site-provided tools are disabled for the browser`,
    });
  if (e === `ask` || (e === "default" && n === `alwaysAsk`))
    return (0, $.jsx)(p, {
      id: `settings.browserUse.sitePermissions.approvalValue.requiresApproval`,
      defaultMessage: `Requires approval`,
      description: `Browser site permission that has no persistent approval and uses the default approval flow`,
    });
  if (t !== `fullCdp` && (e === `allowed` || (e === "default" && n === `neverAsk`)))
    return (0, $.jsx)(p, {
      id: `settings.browserUse.sitePermissions.approvalValue.alwaysAllow`,
      defaultMessage: `Always allow`,
      description: `Browser site permission with persistent approval for browsing, downloads, or uploads`,
    });
  switch (e) {
    case `default`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.value.useDefault`,
        defaultMessage: `Use default`,
        description: `Option that removes a custom browser site permission so it inherits its defaults`,
      });
    case `allowed`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site capabilities`,
      });
    case `denied`:
      return (0, $.jsx)(p, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function _n() {
  return (0, $.jsx)(p, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var vn, yn, $, bn, xn, Sn, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((vn = X()),
      N(),
      n(),
      i(),
      k(),
      S(),
      Je(),
      (yn = ge()),
      W(),
      Se(),
      le(),
      de(),
      L(),
      a(),
      x(),
      C(),
      ke(),
      ye(),
      J(),
      F(),
      Pe(),
      xe(),
      fe(),
      qe(),
      be(),
      Te(),
      Fe(),
      je(),
      h(),
      lt(),
      Dt(),
      Yt(),
      Ct(),
      ($ = me()),
      (bn = [`default`, `ask`, `allowed`, `denied`]),
      (xn = {
        origin: `origin`,
        download: `download`,
        upload: `upload`,
        fullCdp: `fullCdp`,
        webMcp: `webMcp`,
      }),
      (Sn = { download: `default`, upload: `default`, fullCdp: `default`, webMcp: `default` }),
      (Cn = { origin: `default`, ...Sn }),
      (wn = r({
        blockingRuleDescription: {
          id: `settings.browserUse.sitePermissions.blockingRuleDescription`,
          defaultMessage: `Disabled by the site rule {pattern}`,
          description: `Accessible description and tooltip explaining which other site permission rule disables Site tools despite this site's saved choice`,
        },
      })));
  }))();
}
export { lt as a, rt as i, Xt as n, Tn as r, Qt as t };
//# sourceMappingURL=browser-use-policy-site-permissions-a1cdbceb998d.js.map
