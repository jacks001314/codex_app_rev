import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  CH as i,
  DB as a,
  FBt as o,
  GR as s,
  HFt as c,
  HO as l,
  IH as u,
  IO as d,
  JO as f,
  JOt as p,
  JR as m,
  Jj as h,
  KO as g,
  KR as _,
  LNt as v,
  LO as y,
  LRt as b,
  MNt as x,
  NH as S,
  NNt as C,
  OB as w,
  PBt as T,
  QR as E,
  Qst as D,
  RO as O,
  TY as k,
  Uz as A,
  VRt as j,
  Vrt as M,
  WO as N,
  WR as P,
  Wz as F,
  XOt as I,
  Y3 as L,
  YOt as R,
  YR as z,
  Yj as B,
  Z3 as V,
  ZSt as H,
  b2 as U,
  cG as ee,
  ck as W,
  dO as te,
  ew as ne,
  iCt as re,
  kR as G,
  kRt as ie,
  lO as ae,
  nB as K,
  nCt as q,
  nQ as oe,
  okt as J,
  qO as se,
  qR as ce,
  qrt as le,
  rB as ue,
  rk as Y,
  tQ as de,
  tk as fe,
  tkt as X,
  tz as pe,
  uRt as me,
  y2 as he,
  yR as ge,
  zO as _e,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as ve,
  FF as ye,
  Jbr as be,
  RF as xe,
  Wbr as Se,
  ZLn as Ce,
  _p as we,
  cA as Te,
  dw as Ee,
  fw as De,
  gp as Oe,
  iat as ke,
  ixr as Ae,
  oat as je,
  sA as Me,
} from "./app-initial-ad16eaadf81f.js";
import { Em as Ne, Tm as Pe } from "./app-primary-3e00728c2a4c.js";
import { n as Fe, t as Ie } from "./settings-loading-row-1fcc5b514745.js";
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
} from "./browser-use-origin-state-queries-97f7f3683560.js";
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
    i = J();
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
      ? ((c = (0, st.jsx)(K, { tooltipContent: o, children: s })), (t[8] = o), (t[9] = s), (t[10] = c))
      : (c = t[10]),
    c
  );
}
function at(e) {
  let t = (0, ot.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, st.jsx)(X, { ...ct })), (t[0] = n))
      : (n = t[0]),
    n
  );
}
var ot, st, ct;
function lt() {
  return (lt = e(() => {
    ((ot = T()),
      I(),
      ue(),
      (st = v()),
      (ct = p({
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
  let t = (0, xt.c)(44),
    { children: n, defaultRow: r, resources: i } = e,
    a = J(),
    [o, s] = (0, St.useState)(null),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e, t) => {
        (s(e.contentRect.width), t.style.setProperty(`--table-height`, `${e.contentRect.height}px`));
      }),
      (t[0] = c))
    : (c = t[0]);
  let l = te(c),
    d = te(vt),
    f = (0, St.useRef)(null),
    p = F(),
    [m, h] = (0, St.useState)(0),
    g = o == null ? 3 : Math.max(1, Math.min(3, Math.floor((o - 248) / 168))),
    _ = Math.max(0, i.length - g),
    v = Math.min(m, _),
    y = Math.min(g, i.length),
    b = `calc(var(--spacing) * ${g === 1 ? 24 : 48})`,
    x;
  t[1] === _
    ? (x = t[2])
    : ((x = function (e) {
        let t = e.currentTarget,
          n = t.scrollWidth - t.clientWidth;
        h(n === 0 ? 0 : Math.round((Math.abs(t.scrollLeft) / n) * _));
      }),
      (t[1] = _),
      (t[2] = x));
  let C = x,
    w;
  t[3] !== _ || t[4] !== v || t[5] !== g || t[6] !== p
    ? ((w = function (e) {
        let t = f.current;
        if (t == null) return;
        let n = Math.max(0, Math.min(_, (e === 1 ? Math.floor(v / g) + 1 : Math.ceil(v / g) - 1) * g));
        t.scrollTo({
          left:
            ((t.scrollWidth - t.clientWidth) / _) * n * (getComputedStyle(t).direction === `rtl` ? -1 : 1),
          behavior: p ? `instant` : `smooth`,
        });
      }),
      (t[3] = _),
      (t[4] = v),
      (t[5] = g),
      (t[6] = p),
      (t[7] = w))
    : (w = t[7]);
  let T = w,
    E;
  t[8] === l ? (E = t[9]) : ((E = B(l, f)), (t[8] = l), (t[9] = E));
  let D = `${b} repeat(${i.length}, calc((100% - ${b} - calc(var(--spacing) * 14)) / ${y})) calc(var(--spacing) * 14)`,
    O = `${b} calc(var(--spacing) * 14)`,
    k;
  t[10] !== D || t[11] !== O
    ? ((k = { gridTemplateColumns: D, scrollPaddingInline: O }), (t[10] = D), (t[11] = O), (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(`th`, {
        className: `px-3 py-3 text-start font-medium`,
        children: (0, Z.jsx)(X, {
          id: `settings.browserUse.sitePermissions.matrix.siteColumn`,
          defaultMessage: `Site or pattern`,
          description: `Column heading for a website origin or origin pattern in the browser permissions matrix`,
        }),
      })),
      (t[13] = A))
    : (A = t[13]);
  let j;
  t[14] === i ? (j = t[15]) : ((j = i.map(_t)), (t[14] = i), (t[15] = j));
  let M;
  t[16] !== T || t[17] !== a || t[18] !== _ || t[19] !== v
    ? ((M =
        _ > 0
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-end`,
              children: [
                (0, Z.jsx)(L, {
                  "aria-label": a.formatMessage({
                    id: `settings.browserUse.sitePermissions.previousColumns`,
                    defaultMessage: `Previous permissions`,
                    description: `Show the previous columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: v === 0,
                  onClick: () => T(-1),
                  children: (0, Z.jsx)(S, { className: `rtl:rotate-180` }),
                }),
                (0, Z.jsx)(L, {
                  "aria-label": a.formatMessage({
                    id: `settings.browserUse.sitePermissions.nextColumns`,
                    defaultMessage: `Next permissions`,
                    description: `Show the next columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: v === _,
                  onClick: () => T(1),
                  children: (0, Z.jsx)(u, { className: `rtl:rotate-180` }),
                }),
              ],
            })
          : null),
      (t[16] = T),
      (t[17] = a),
      (t[18] = _),
      (t[19] = v),
      (t[20] = M))
    : (M = t[20]);
  let N;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Z.jsx)(X, {
          id: `settings.browserUse.sitePermissions.matrix.actionsColumn`,
          defaultMessage: `Actions`,
          description: `Accessible heading for site permission row actions`,
        }),
      })),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] === M
    ? (P = t[23])
    : ((P = (0, Z.jsxs)(`th`, { className: `px-2 py-3`, children: [M, N] })), (t[22] = M), (t[23] = P));
  let I;
  t[24] !== P || t[25] !== j
    ? ((I = (0, Z.jsxs)(`tr`, { className: `text-secondary`, children: [A, j, P] })),
      (t[24] = P),
      (t[25] = j),
      (t[26] = I))
    : (I = t[26]);
  let R;
  t[27] !== r || t[28] !== i ? ((R = r(i)), (t[27] = r), (t[28] = i), (t[29] = R)) : (R = t[29]);
  let z;
  t[30] !== d || t[31] !== I || t[32] !== R
    ? ((z = (0, Z.jsxs)(`thead`, {
        ref: d,
        className: `relative z-10 bg-surface select-none`,
        children: [I, R],
      })),
      (t[30] = d),
      (t[31] = I),
      (t[32] = R),
      (t[33] = z))
    : (z = t[33]);
  let V;
  t[34] !== n || t[35] !== i ? ((V = n(i)), (t[34] = n), (t[35] = i), (t[36] = V)) : (V = t[36]);
  let H;
  return (
    t[37] !== g || t[38] !== z || t[39] !== V || t[40] !== E || t[41] !== k || t[42] !== C
      ? ((H = (0, Z.jsx)(`div`, {
          className: mt.viewport,
          children: (0, Z.jsxs)(`table`, {
            ref: E,
            className: mt.table,
            "data-page-size": g,
            onScroll: C,
            style: k,
            children: [z, V],
          }),
        })),
        (t[37] = g),
        (t[38] = z),
        (t[39] = V),
        (t[40] = E),
        (t[41] = k),
        (t[42] = C),
        (t[43] = H))
      : (H = t[43]),
    H
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
        ? ((e = (0, Z.jsx)(X, {
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
        ? ((e = (0, Z.jsx)(X, {
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
        ? ((e = (0, Z.jsx)(X, {
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
        ? ((e = (0, Z.jsx)(X, {
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
        ? ((e = (0, Z.jsx)(X, {
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
    ((xt = T()), (St = o()), I(), V(), k(), A(), ae(), h(), ht(), (Z = v()));
  }))();
}
function wt(e) {
  let t = (0, Et.c)(38),
    {
      webMcpAvailable: r,
      browserClientAllowed: a,
      disabled: o,
      enterprisePolicy: s,
      onChange: c,
      onWebMcpEnabledChange: l,
      onApprovalModeChange: u,
      originsConfig: d,
      userConfig: f,
      visibleResources: p,
    } = e,
    m = o !== void 0 && o,
    h = n(D),
    g;
  t[0] !== d.approvalMode || t[1] !== d.downloadApprovalMode || t[2] !== d.uploadApprovalMode
    ? ((g = { origin: d.approvalMode, download: d.downloadApprovalMode, upload: d.uploadApprovalMode }),
      (t[0] = d.approvalMode),
      (t[1] = d.downloadApprovalMode),
      (t[2] = d.uploadApprovalMode),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    v;
  t[4] === s ? (v = t[5]) : ((v = Le(s) && Re(s, `persistentApproval`)), (t[4] = s), (t[5] = v));
  let y = v,
    b;
  t[6] !== _ || t[7] !== u || t[8] !== c || t[9] !== h
    ? ((b = (e, t, n) => {
        if (t === _[e]) {
          n || c?.({ capability: e, enabled: !0 });
          return;
        }
        let r = !n && c != null;
        (async () => {
          try {
            await u(e, t);
          } catch {
            h.get(le).danger(
              (0, Q.jsx)(X, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving a browser use approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.approval.saveError` } },
            );
            return;
          }
          r && c({ capability: e, enabled: !0 });
        })();
      }),
      (t[6] = _),
      (t[7] = u),
      (t[8] = c),
      (t[9] = h),
      (t[10] = b))
    : (b = t[10]);
  let x = b,
    S;
  if (
    t[11] !== _ ||
    t[12] !== a ||
    t[13] !== m ||
    t[14] !== s ||
    t[15] !== x ||
    t[16] !== c ||
    t[17] !== l ||
    t[18] !== d.webMcpEnabled ||
    t[19] !== y ||
    t[20] !== f?.default_origin_policy ||
    t[21] !== p ||
    t[22] !== r
  ) {
    let e;
    (t[24] !== _ ||
    t[25] !== a ||
    t[26] !== m ||
    t[27] !== s ||
    t[28] !== x ||
    t[29] !== c ||
    t[30] !== l ||
    t[31] !== d.webMcpEnabled ||
    t[32] !== y ||
    t[33] !== f?.default_origin_policy ||
    t[34] !== r
      ? ((e = (e) => {
          let t = e === `webMcp` && !r,
            n = a && Re(s, e === `webMcp` ? `origin` : e),
            o = e === `webMcp` ? d.webMcpEnabled !== !1 : Ge(f?.default_origin_policy, e) !== `deny`,
            u = !n || t,
            p = !u && o,
            h = t ? `webMcpUnavailable` : null,
            g = e !== `fullCdp` && e !== `webMcp`,
            v = (g ? _[e] : void 0) === `neverAsk` && y ? `neverAsk` : `alwaysAsk`;
          return (0, Q.jsx)(
            `td`,
            {
              "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
              className: `px-2 py-3`,
              children: (0, Q.jsx)(yt, {
                children: (0, Q.jsx)(it, {
                  reason: h ?? (n ? null : `managed`),
                  children: (0, Q.jsxs)(fe, {
                    align: `end`,
                    disabled: m || u,
                    triggerButton: (0, Q.jsxs)(ye, {
                      "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
                      disabled: m || u,
                      children: [
                        u ? (0, Q.jsx)(ee, { className: `text-secondary` }) : null,
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
                      (0, Q.jsx)(Y.Item, {
                        RightIcon: p && (!g || v === `alwaysAsk`) ? i : void 0,
                        onSelect: () => {
                          if (e === `webMcp`) {
                            l(!0);
                            return;
                          }
                          if (e === `fullCdp`) {
                            c?.({ capability: e, enabled: !0 });
                            return;
                          }
                          x(e, `alwaysAsk`, o);
                        },
                        children: (0, Q.jsx)(Tt, {
                          allowed: !0,
                          webMcp: e === `webMcp`,
                          approvalMode: g ? `alwaysAsk` : void 0,
                        }),
                      }),
                      g
                        ? (0, Q.jsx)(Y.Item, {
                            RightIcon: p && v === `neverAsk` ? i : void 0,
                            disabled: !y,
                            tooltipText: y ? void 0 : (0, Q.jsx)(at, {}),
                            onSelect: () => {
                              y && x(e, `neverAsk`, o);
                            },
                            children: (0, Q.jsx)(Tt, { allowed: !0, webMcp: !1, approvalMode: `neverAsk` }),
                          })
                        : null,
                      e === `webMcp` || c != null
                        ? (0, Q.jsx)(Y.Item, {
                            RightIcon: p ? void 0 : i,
                            onSelect: () => {
                              if (e === `webMcp`) {
                                l(!1);
                                return;
                              }
                              c?.({ capability: e, enabled: !1 });
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
        (t[24] = _),
        (t[25] = a),
        (t[26] = m),
        (t[27] = s),
        (t[28] = x),
        (t[29] = c),
        (t[30] = l),
        (t[31] = d.webMcpEnabled),
        (t[32] = y),
        (t[33] = f?.default_origin_policy),
        (t[34] = r),
        (t[35] = e))
      : (e = t[35]),
      (S = p.map(e)),
      (t[11] = _),
      (t[12] = a),
      (t[13] = m),
      (t[14] = s),
      (t[15] = x),
      (t[16] = c),
      (t[17] = l),
      (t[18] = d.webMcpEnabled),
      (t[19] = y),
      (t[20] = f?.default_origin_policy),
      (t[21] = p),
      (t[22] = r),
      (t[23] = S));
  } else S = t[23];
  let C;
  return (
    t[36] === S ? (C = t[37]) : ((C = (0, Q.jsx)(Q.Fragment, { children: S })), (t[36] = S), (t[37] = C)),
    C
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
            ? (0, Q.jsx)(X, {
                id: `settings.browserUse.sitePermissions.siteTools.enabled`,
                defaultMessage: `Enabled`,
                description: `Site-provided tools are enabled for the browser`,
              })
            : (0, Q.jsx)(X, {
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
        ? ((e = (0, Q.jsx)(X, {
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
        ? ((e = (0, Q.jsx)(X, {
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
        ? ((e = (0, Q.jsx)(X, {
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
      ? ((a = (0, Q.jsx)(X, {
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
    ((Et = T()), H(), Je(), I(), W(), k(), M(), r(), xe(), lt(), Ct(), (Q = v()));
  }))();
}
function Ot(e, t, n) {
  let r = _(n),
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
  let r = e.map(([e, t]) => ({ pattern: z(e), policy: t })),
    i = new Map();
  for (let { pattern: e } of r) e != null && i.set(e.canonicalKey, (i.get(e.canonicalKey) ?? 0) + 1);
  let a = r.flatMap(({ pattern: e, policy: t }) =>
    e == null || t == null || !s(e, n)
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
    m();
  }))();
}
function Nt(e, t) {
  return [`origin`, `download`, `upload`, ...(e ? [`fullCdp`] : []), ...(t ? [`webMcp`] : [])];
}
function Pt(e, t, n = null, r, i, a) {
  let o = new Set();
  for (let n of t) {
    for (let t of qt(e, n, `allowed`)) o.add(t);
    for (let t of qt(e, n, `denied`)) o.add(t);
  }
  let s = Jt.safeParse(a?.config);
  if (a?.name.type === `user` && s.success)
    for (let [e, t] of Object.entries(s.data.browser_use?.origins ?? {})) {
      let n = z(e);
      n != null &&
        t != null &&
        [`access`, `downloads`, `uploads`, `full_cdp_access`].some(
          (e) => t[e] === `allow` || t[e] === `deny`,
        ) &&
        o.add(n.canonicalPattern);
    }
  let c = new Set(o);
  for (let [e, t] of Object.entries(r?.origins ?? {})) {
    let n = z(e);
    t != null && n != null && Object.values(t).some((e) => e != null) && c.add(n.canonicalPattern);
  }
  if (n != null) {
    let e = n.browserUse?.defaultOriginPolicy;
    for (let t of et(n)) (e?.access === `deny` ? t.policy.access === `allow` : Ut(t, e)) && c.add(t.pattern);
    for (let e of Ve(n)) {
      if (e.decision !== `deny` && n.network?.managedAllowedDomainsOnly !== !0) continue;
      let t = e.pattern.canonicalPattern.includes(`:`)
          ? `[${e.pattern.canonicalPattern}]`
          : e.pattern.canonicalPattern,
        r = z(`https://${t}`);
      r != null && c.add(r.canonicalPattern);
    }
  }
  return [...c]
    .filter((e) => {
      if (o.has(e) || n == null) return !0;
      let t = Rt(n, e);
      return n.network?.managedAllowedDomainsOnly === !0 && t.length === 0
        ? !1
        : n.browserUse?.defaultOriginPolicy?.access !== `deny` ||
            Gt(e) ||
            Lt(n, e).some((e) => e.policy.access === `allow`) ||
            Bt(n, e, `origin`);
    })
    .sort((e, t) => Number(o.has(t)) - Number(o.has(e)) || e.localeCompare(t))
    .map((a) => {
      let s = Ot(null, r, a),
        c = Bt(n, a, `persistentApproval`),
        l = i != null && G(a, i) === `deny`,
        u = {},
        d = Lt(n, a),
        f = Rt(n, a),
        p = {};
      for (let e of t)
        d.some((t) => (e === `webMcp` ? t.policy.access === `deny` : Wt(n, t, e))) && (p[e] = !0);
      n != null &&
        (f.some(({ decision: e }) => e === `deny`) ||
          (n.network?.managedAllowedDomainsOnly === !0 && f.some(({ decision: e }) => e === `allow`))) &&
        (p.origin = !0);
      let m = (t) => {
        let o = t === `webMcp` ? `origin` : t,
          f = Kt(e, t, a);
        return n == null && r == null && i == null
          ? f
          : Vt(n, d, a, o)
            ? l || s[Ht(o)] === `deny`
              ? ((u[t] = `user`), `denied`)
              : t !== `webMcp` && f === `allowed` && !c
                ? `default`
                : f
            : (Re(n, o) || (u[t] = `organization`), `denied`);
      };
      return {
        origin: a,
        values: {
          origin: m(`origin`),
          download: m(`download`),
          upload: m(`upload`),
          fullCdp: m(`fullCdp`),
          webMcp: m(`webMcp`),
        },
        ...(Object.keys(u).length === 0 ? {} : { inheritedRestrictions: u }),
        ...(Object.keys(p).length === 0 ? {} : { managedResources: p }),
        hasUserPermissions: o.has(a),
        ...(l ? { networkBlocked: !0 } : {}),
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
      let n = z(t);
      return n != null && E(e.pattern, n.hostnamePattern.canonicalPattern);
    }),
  );
}
function zt(e) {
  if (e.includes(`://`)) return [e];
  let t = z(`http://${e}`),
    n = z(`https://${e}`);
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
    (ge(),
      Mt(),
      Je(),
      c(),
      (Jt = ie({ browser_use: ie({ origins: b(j(), b(j(), me()).nullable()).nullish() }).nullish() })));
  }))();
}
function Xt(e) {
  let t = (0, vn.c)(26),
    { backend: r, showWebMcp: i } = e,
    a = n(D),
    o = We(),
    { selectedHostId: s } = je(),
    { data: c, isError: l, isLoading: u } = re(Ze),
    { data: d, isPending: f, isError: p } = q(Ae, s),
    m;
  t[0] === s ? (m = t[1]) : ((m = { failClosed: !0, hostId: s }), (t[0] = s), (t[1] = m));
  let { data: h, isError: g, isPending: _ } = q(Se, m),
    v = h?.requirements ?? null,
    y = d?.configReadSucceeded === !0 ? d.config.browser_use : null,
    b = c?.fullCdpAccessEnabled === !0,
    x = l || g || p || d?.configReadSucceeded === !1,
    S = u || _ || f,
    C;
  t[2] !== h?.requirements?.featureRequirements || t[3] !== g || t[4] !== _ || t[5] !== b
    ? ((C = b && !g && !_ && !pe(h?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (t[2] = h?.requirements?.featureRequirements),
      (t[3] = g),
      (t[4] = _),
      (t[5] = b),
      (t[6] = C))
    : (C = t[6]);
  let w = C,
    T = o.mutate,
    E = d?.userConfigLayer,
    O = d?.config,
    k;
  t[7] === O ? (k = t[8]) : ((k = Ke(O)), (t[7] = O), (t[8] = k));
  let A;
  t[9] !== a || t[10] !== s || t[11] !== d
    ? ((A = (e) => {
        Xe(a, s, d, e).catch(() => {
          a.get(le).danger(_n(), {
            errorAnalytics: { toastId: `browserUsePolicySitePermissions.BrowserUseSitePermissionsGroup` },
          });
        });
      }),
      (t[9] = a),
      (t[10] = s),
      (t[11] = d),
      (t[12] = A))
    : (A = t[12]);
  let j;
  return (
    t[13] !== r ||
    t[14] !== v ||
    t[15] !== x ||
    t[16] !== w ||
    t[17] !== S ||
    t[18] !== c ||
    t[19] !== i ||
    t[20] !== E ||
    t[21] !== k ||
    t[22] !== A ||
    t[23] !== y ||
    t[24] !== o.mutate
      ? ((j = (0, $.jsx)(Zt, {
          backend: r,
          showWebMcp: i,
          onWebMcpEnabledChange: T,
          enterprisePolicy: v,
          originsConfig: c,
          isError: x,
          isFullCdpAccessEnabled: w,
          isLoading: S,
          userConfig: y,
          userConfigLayer: E,
          userNetworkPolicy: k,
          onDefaultPermissionChange: A,
        })),
        (t[13] = r),
        (t[14] = v),
        (t[15] = x),
        (t[16] = w),
        (t[17] = S),
        (t[18] = c),
        (t[19] = i),
        (t[20] = E),
        (t[21] = k),
        (t[22] = A),
        (t[23] = y),
        (t[24] = o.mutate),
        (t[25] = j))
      : (j = t[25]),
    j
  );
}
function Zt(e) {
  let t = (0, vn.c)(9),
    { selectedHostId: n } = je(),
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
            configUpdate: z(n) == null ? void 0 : { origin: n, policy: null },
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
      enterprisePolicy: o,
      isError: s,
      isFullCdpAccessEnabled: c,
      isLoading: l,
      onDefaultPermissionChange: u,
      onApprovalModeChange: d,
      onSitePermissionsChange: f,
      onWebMcpEnabledChange: p,
      parseOrigin: m,
      originsConfig: h,
      showWebMcp: g,
      userConfig: _,
      userConfigLayer: v,
      userNetworkPolicy: y,
      supportsRequiresApproval: b,
      supportsClearingDefaultsOnAdd: x,
    } = e,
    S = r === void 0 ? `iab` : r,
    C = i !== void 0 && i,
    w = o === void 0 ? null : o,
    T = b === void 0 || b,
    E = x !== void 0 && x,
    [D, O] = (0, yn.useState)(!1),
    k = re(S !== `iab` || De),
    A = S === `iab` ? `iab` : `extension`,
    j;
  n[0] !== w || n[1] !== A ? ((j = Be(w, A)), (n[0] = w), (n[1] = A), (n[2] = j)) : (j = n[2]);
  let M = j,
    N,
    P,
    F,
    I;
  if (
    n[3] !== M ||
    n[4] !== w ||
    n[5] !== c ||
    n[6] !== h ||
    n[7] !== g ||
    n[8] !== _ ||
    n[9] !== v ||
    n[10] !== y
  ) {
    ((I = Nt(c, g)), (P = h == null ? null : Pt(h, I, w, _, y, v)));
    let e =
        w?.browserUse?.defaultOriginPolicy?.access === `deny` || w?.network?.managedAllowedDomainsOnly === !0,
      t = !M || w?.allowBrowserAndComputerUse === !1 || w?.network?.enabled === !1,
      r;
    (n[15] === w
      ? (r = n[16])
      : ((r = w != null && (et(w).some(en) || Ve(w).some($t))), (n[15] = w), (n[16] = r)),
      (N = t || (e && !r)),
      (F = ze(w) && (N || I.some((e) => !Re(w, e === `webMcp` ? `origin` : e)) || tn(w))),
      (n[3] = M),
      (n[4] = w),
      (n[5] = c),
      (n[6] = h),
      (n[7] = g),
      (n[8] = _),
      (n[9] = v),
      (n[10] = y),
      (n[11] = N),
      (n[12] = P),
      (n[13] = F),
      (n[14] = I));
  } else ((N = n[11]), (P = n[12]), (F = n[13]), (I = n[14]));
  let R = F,
    z = C || s || l || P == null || N,
    B;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = () => {
        O(!0);
      }),
      (n[17] = B))
    : (B = n[17]);
  let V;
  n[18] === N
    ? (V = n[19])
    : ((V = N ? (0, $.jsx)(ee, {}) : (0, $.jsx)(a, { "aria-hidden": !1, asset: oe })),
      (n[18] = N),
      (n[19] = V));
  let H;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(X, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (n[20] = H))
    : (H = n[20]);
  let U;
  n[21] !== V || n[22] !== z
    ? ((U = (0, $.jsxs)(L, {
        color: `secondary`,
        disabled: z,
        size: `toolbar`,
        onClick: B,
        children: [V, H],
      })),
      (n[21] = V),
      (n[22] = z),
      (n[23] = U))
    : (U = n[23]);
  let W;
  n[24] !== N || n[25] !== U
    ? ((W = (0, $.jsx)(rt, { managed: N, children: U })), (n[24] = N), (n[25] = U), (n[26] = W))
    : (W = n[26]);
  let te, ne;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(X, {
        id: `settings.browserUse.policy.agentPermissions.title`,
        defaultMessage: `Website permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (ne = (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.matrixSubtitle`,
        defaultMessage: `Choose default permissions and add exceptions for specific websites`,
        description: `Subtitle for the browser site permissions matrix with defaults and site-specific overrides`,
      })),
      (n[27] = te),
      (n[28] = ne))
    : ((te = n[27]), (ne = n[28]));
  let G;
  n[29] === W
    ? (G = n[30])
    : ((G = (0, $.jsx)(Me.Header, { size: `base`, actions: W, title: te, subtitle: ne })),
      (n[29] = W),
      (n[30] = G));
  let ie;
  n[31] !== M ||
  n[32] !== C ||
  n[33] !== w ||
  n[34] !== s ||
  n[35] !== l ||
  n[36] !== d ||
  n[37] !== u ||
  n[38] !== f ||
  n[39] !== p ||
  n[40] !== h ||
  n[41] !== P ||
  n[42] !== T ||
  n[43] !== _ ||
  n[44] !== I ||
  n[45] !== k
    ? ((ie = (0, $.jsx)(Me.Content, {
        children: s
          ? (0, $.jsx)(t, {
              children: (0, $.jsx)(Oe, {
                layout: `settings-row`,
                children: (0, $.jsx)(X, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              }),
            })
          : l || P == null || h == null
            ? (0, $.jsx)(t, {
                children: (0, $.jsx)(Ie, {
                  children: (0, $.jsx)(X, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                }),
              })
            : (0, $.jsx)(nn, {
                webMcpAvailable: k,
                browserClientAllowed: M,
                disabled: C,
                enterprisePolicy: w,
                onDefaultPermissionChange: u,
                onWebMcpEnabledChange: p,
                onApprovalModeChange: d,
                onSitePermissionsChange: f,
                supportsRequiresApproval: T,
                originsConfig: h,
                rows: P,
                userConfig: _,
                visibleResources: I,
              }),
      })),
      (n[31] = M),
      (n[32] = C),
      (n[33] = w),
      (n[34] = s),
      (n[35] = l),
      (n[36] = d),
      (n[37] = u),
      (n[38] = f),
      (n[39] = p),
      (n[40] = h),
      (n[41] = P),
      (n[42] = T),
      (n[43] = _),
      (n[44] = I),
      (n[45] = k),
      (n[46] = ie))
    : (ie = n[46]);
  let ae;
  n[47] !== s || n[48] !== l || n[49] !== P
    ? ((ae =
        !s && !l && P != null
          ? (0, $.jsx)(Me.Footer, {
              children: (0, $.jsx)(X, {
                id: `settings.browserUse.sitePermissions.customPermissionsFooter`,
                defaultMessage: `Only sites with custom permissions appear here`,
                description: `Explains why sites without permission exceptions are absent from the table`,
              }),
            })
          : null),
      (n[47] = s),
      (n[48] = l),
      (n[49] = P),
      (n[50] = ae))
    : (ae = n[50]);
  let K;
  n[51] !== R || n[52] !== s || n[53] !== l || n[54] !== P
    ? ((K =
        !s && !l && P != null && R
          ? (0, $.jsx)(Me.Footer, {
              children: (0, $.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, $.jsx)(ee, {}),
                  (0, $.jsx)(X, {
                    id: `settings.browserUse.sitePermissions.managedLegend`,
                    defaultMessage: `Managed by your organization`,
                    description: `Legend explaining the lock icons shown on browser permissions controlled by an enterprise organization`,
                  }),
                ],
              }),
            })
          : null),
      (n[51] = R),
      (n[52] = s),
      (n[53] = l),
      (n[54] = P),
      (n[55] = K))
    : (K = n[55]);
  let q;
  n[56] !== C ||
  n[57] !== w ||
  n[58] !== D ||
  n[59] !== f ||
  n[60] !== h ||
  n[61] !== m ||
  n[62] !== E ||
  n[63] !== T ||
  n[64] !== I ||
  n[65] !== k
    ? ((q =
        h == null
          ? null
          : (0, $.jsx)(un, {
              webMcpAvailable: k,
              disabled: C,
              enterprisePolicy: w,
              open: D,
              originsConfig: h,
              onSitePermissionsChange: f,
              parseOrigin: m,
              supportsRequiresApproval: T,
              supportsClearingDefaultsOnAdd: E,
              visibleResources: I,
              onOpenChange: O,
            })),
      (n[56] = C),
      (n[57] = w),
      (n[58] = D),
      (n[59] = f),
      (n[60] = h),
      (n[61] = m),
      (n[62] = E),
      (n[63] = T),
      (n[64] = I),
      (n[65] = k),
      (n[66] = q))
    : (q = n[66]);
  let J;
  return (
    n[67] !== G || n[68] !== ie || n[69] !== ae || n[70] !== K || n[71] !== q
      ? ((J = (0, $.jsxs)(Me, { children: [G, ie, ae, K, q] })),
        (n[67] = G),
        (n[68] = ie),
        (n[69] = ae),
        (n[70] = K),
        (n[71] = q),
        (n[72] = J))
      : (J = n[72]),
    J
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
      visibleResources: p,
      supportsRequiresApproval: m,
    } = e,
    h;
  t[0] !== r ||
  t[1] !== i ||
  t[2] !== a ||
  t[3] !== c ||
  t[4] !== o ||
  t[5] !== s ||
  t[6] !== u ||
  t[7] !== f ||
  t[8] !== n
    ? ((h = (e) =>
        (0, $.jsxs)(`tr`, {
          children: [
            (0, $.jsx)(`td`, {
              className: `px-3 py-3 font-medium`,
              children: (0, $.jsx)(`span`, {
                id: `browser-use-site-permissions-default`,
                children: (0, $.jsx)(X, {
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
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] !== r ||
  t[11] !== i ||
  t[12] !== a ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== m ||
  t[17] !== f ||
  t[18] !== p ||
  t[19] !== n
    ? ((g = (e) =>
        (0, $.jsx)(`tbody`, {
          children: d.map((t, o) =>
            (0, $.jsx)(
              rn,
              {
                webMcpAvailable: n,
                allResources: p,
                browserClientAllowed: r,
                disabled: i,
                enterprisePolicy: a,
                originsConfig: u,
                onSitePermissionsChange: l,
                row: t,
                rowIndex: o,
                userConfig: f,
                visibleResources: e,
                supportsRequiresApproval: m,
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
      (t[16] = m),
      (t[17] = f),
      (t[18] = p),
      (t[19] = n),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== h || t[22] !== g || t[23] !== p
      ? ((_ = (0, $.jsx)(gt, { resources: p, defaultRow: h, children: g })),
        (t[21] = h),
        (t[22] = g),
        (t[23] = p),
        (t[24] = _))
      : (_ = t[24]),
    _
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
      supportsRequiresApproval: p,
    } = e,
    m = `browser-use-site-permissions-origin-${u}`,
    h;
  t[0] !== l.origin || t[1] !== m
    ? ((h = (0, $.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: (0, $.jsx)(`span`, {
          "data-tooltip-overflow-target": !0,
          className: `block min-w-0 truncate text-sm font-medium`,
          id: m,
          children: l.origin,
        }),
      })),
      (t[0] = l.origin),
      (t[1] = m),
      (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] !== l.origin || t[4] !== h
    ? ((g = (0, $.jsx)(K, { tooltipContent: l.origin, openWhen: `trigger-overflows`, children: h })),
      (t[3] = l.origin),
      (t[4] = h),
      (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === l.networkBlocked
    ? (_ = t[7])
    : ((_ = l.networkBlocked
        ? (0, $.jsx)(`span`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(X, {
              id: `settings.browserUse.sitePermissions.networkBlocked`,
              defaultMessage: `Blocked by your network configuration`,
              description: `Explains why a site permission is unavailable due to the selected user network permission profile`,
            }),
          })
        : null),
      (t[6] = l.networkBlocked),
      (t[7] = _));
  let v;
  t[8] !== m || t[9] !== g || t[10] !== _
    ? ((v = (0, $.jsxs)(`td`, { "aria-labelledby": m, className: `px-3 py-3`, children: [g, _] })),
      (t[8] = m),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v))
    : (v = t[11]);
  let y;
  if (
    t[12] !== i ||
    t[13] !== a ||
    t[14] !== o ||
    t[15] !== c ||
    t[16] !== s ||
    t[17] !== l ||
    t[18] !== u ||
    t[19] !== m ||
    t[20] !== p ||
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
    t[32] !== m ||
    t[33] !== p ||
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
                        children: (0, $.jsx)(X, {
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
                        rowLabelId: m,
                        userConfig: d,
                        supportsRequiresApproval: p,
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
        (t[32] = m),
        (t[33] = p),
        (t[34] = d),
        (t[35] = n),
        (t[36] = e))
      : (e = t[36]),
      (y = f.map(e)),
      (t[12] = i),
      (t[13] = a),
      (t[14] = o),
      (t[15] = c),
      (t[16] = s),
      (t[17] = l),
      (t[18] = u),
      (t[19] = m),
      (t[20] = p),
      (t[21] = d),
      (t[22] = f),
      (t[23] = n),
      (t[24] = y));
  } else y = t[24];
  let b;
  t[37] !== r || t[38] !== a || t[39] !== c || t[40] !== l
    ? ((b = (0, $.jsx)(`td`, {
        className: `px-2 py-3`,
        children: (0, $.jsx)(ln, { disabled: a, onSitePermissionsChange: c, row: l, resources: r }),
      })),
      (t[37] = r),
      (t[38] = a),
      (t[39] = c),
      (t[40] = l),
      (t[41] = b))
    : (b = t[41]);
  let x;
  return (
    t[42] !== v || t[43] !== y || t[44] !== b
      ? ((x = (0, $.jsxs)(`tr`, { children: [v, y, b] })), (t[42] = v), (t[43] = y), (t[44] = b), (t[45] = x))
      : (x = t[45]),
    x
  );
}
function an(e) {
  let t = (0, vn.c)(96),
    {
      webMcpAvailable: r,
      browserClientAllowed: i,
      disabled: a,
      enterprisePolicy: o,
      originsConfig: s,
      onSitePermissionsChange: c,
      resource: l,
      row: u,
      rowIndex: d,
      rowLabelId: f,
      userConfig: p,
      supportsRequiresApproval: m,
    } = e,
    h = n(D),
    g = J(),
    [_, v] = (0, yn.useState)(!1),
    y;
  t[0] !== l || t[1] !== u.managedResources || t[2] !== u.origin
    ? ((y = /[*?]/u.test(u.origin) && u.managedResources?.[l] === !0),
      (t[0] = l),
      (t[1] = u.managedResources),
      (t[2] = u.origin),
      (t[3] = y))
    : (y = t[3]);
  let b = y,
    x;
  t[4] !== i || t[5] !== o || t[6] !== b || t[7] !== l || t[8] !== u.origin
    ? ((x = i && !b && Bt(o, u.origin, l === `webMcp` ? `origin` : l)),
      (t[4] = i),
      (t[5] = o),
      (t[6] = b),
      (t[7] = l),
      (t[8] = u.origin),
      (t[9] = x))
    : (x = t[9]);
  let S = x,
    C = b || u.inheritedRestrictions?.[l] === `organization` || !S,
    w = l === `webMcp` && !r ? `webMcpUnavailable` : null,
    T,
    E,
    O,
    k,
    A,
    j,
    M,
    N,
    P;
  if (
    t[10] !== S ||
    t[11] !== a ||
    t[12] !== o ||
    t[13] !== g ||
    t[14] !== C ||
    t[15] !== _ ||
    t[16] !== c ||
    t[17] !== s ||
    t[18] !== l ||
    t[19] !== u.inheritedRestrictions ||
    t[20] !== u.networkBlocked ||
    t[21] !== u.origin ||
    t[22] !== u.values ||
    t[23] !== f ||
    t[24] !== h ||
    t[25] !== w ||
    t[26] !== p?.origins
  ) {
    E = l === `webMcp` ? pn(s, u.origin) : void 0;
    let e;
    t[36] !== S || t[37] !== o || t[38] !== l || t[39] !== u.origin
      ? ((e = S && (l === `webMcp` || Bt(o, u.origin, `persistentApproval`))),
        (t[36] = S),
        (t[37] = o),
        (t[38] = l),
        (t[39] = u.origin),
        (t[40] = e))
      : (e = t[40]);
    let n = e,
      r;
    t[41] !== o || t[42] !== s || t[43] !== l || t[44] !== u.origin
      ? ((r = hn(s, l, o, u.origin)), (t[41] = o), (t[42] = s), (t[43] = l), (t[44] = u.origin), (t[45] = r))
      : (r = t[45]);
    let i = r,
      d;
    t[46] !== l || t[47] !== u.origin || t[48] !== p?.origins
      ? ((d =
          l !== `webMcp` &&
          Object.entries(p?.origins ?? {}).some((e) => {
            let [t, n] = e;
            return z(t)?.canonicalPattern === u.origin && Ge(n, l) != null;
          })),
        (t[46] = l),
        (t[47] = u.origin),
        (t[48] = p?.origins),
        (t[49] = d))
      : (d = t[49]);
    let m = d,
      y;
    t[50] !== s || t[51] !== l || t[52] !== u.origin
      ? ((y = Kt(s, l, u.origin)), (t[50] = s), (t[51] = l), (t[52] = u.origin), (t[53] = y))
      : (y = t[53]);
    let b = y;
    A =
      !C &&
      !u.networkBlocked &&
      !m &&
      (u.values[l] === "default" || (u.inheritedRestrictions?.[l] === `user` && b !== `denied`));
    let x;
    if (
      (t[54] !== i || t[55] !== m || t[56] !== A || t[57] !== l || t[58] !== u.values
        ? ((x = u.values[l]),
          A ? (x = `default`) : x === "default" && m && (x = i === `neverAsk` ? `allowed` : `ask`),
          (t[54] = i),
          (t[55] = m),
          (t[56] = A),
          (t[57] = l),
          (t[58] = u.values),
          (t[59] = x))
        : (x = t[59]),
      (O = A ? u.values[l] : x),
      A && O === "default")
    ) {
      if (l === `fullCdp`) O = `allowed`;
      else if (l === `webMcp`) {
        let e;
        (t[60] !== s || t[61] !== u.origin
          ? ((e = fn(s, u.origin)), (t[60] = s), (t[61] = u.origin), (t[62] = e))
          : (e = t[62]),
          (O = e));
      }
    }
    let D;
    (t[63] !== n ||
    t[64] !== i ||
    t[65] !== a ||
    t[66] !== C ||
    t[67] !== _ ||
    t[68] !== c ||
    t[69] !== l ||
    t[70] !== u.networkBlocked ||
    t[71] !== u.origin ||
    t[72] !== u.values ||
    t[73] !== b ||
    t[74] !== h ||
    t[75] !== x
      ? ((D = async (e) => {
          (e === x && (e !== `allowed` || b === `allowed`)) ||
            a ||
            _ ||
            C ||
            u.networkBlocked ||
            (e === `ask` && i === `neverAsk`) ||
            (e === `allowed` && !n) ||
            (v(!0),
            await (async () => {
              try {
                await c({
                  operation: `update`,
                  nextValues: { ...u.values, [l]: e },
                  origin: u.origin,
                  resources: [l],
                  values: { ...u.values, [l]: b },
                });
              } catch {
                h.get(le).danger(_n(), {
                  errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSelect` },
                });
              }
            })().finally(() => {
              v(!1);
            }));
        }),
        (t[63] = n),
        (t[64] = i),
        (t[65] = a),
        (t[66] = C),
        (t[67] = _),
        (t[68] = c),
        (t[69] = l),
        (t[70] = u.networkBlocked),
        (t[71] = u.origin),
        (t[72] = u.values),
        (t[73] = b),
        (t[74] = h),
        (t[75] = x),
        (t[76] = D))
      : (D = t[76]),
      (k = D),
      (T = sn),
      (j = n),
      (M = f),
      (N = i),
      (P =
        w == null && !C && E != null ? g.formatMessage(wn.blockingRuleDescription, { pattern: E }) : void 0),
      (t[10] = S),
      (t[11] = a),
      (t[12] = o),
      (t[13] = g),
      (t[14] = C),
      (t[15] = _),
      (t[16] = c),
      (t[17] = s),
      (t[18] = l),
      (t[19] = u.inheritedRestrictions),
      (t[20] = u.networkBlocked),
      (t[21] = u.origin),
      (t[22] = u.values),
      (t[23] = f),
      (t[24] = h),
      (t[25] = w),
      (t[26] = p?.origins),
      (t[27] = T),
      (t[28] = E),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A),
      (t[32] = j),
      (t[33] = M),
      (t[34] = N),
      (t[35] = P));
  } else
    ((T = t[27]),
      (E = t[28]),
      (O = t[29]),
      (k = t[30]),
      (A = t[31]),
      (j = t[32]),
      (M = t[33]),
      (N = t[34]),
      (P = t[35]));
  let F = a || _ || C || u.networkBlocked || w != null,
    I = w ?? (C ? `managed` : null),
    L = i && w == null && E == null ? O : `denied`,
    R = `browser-use-site-permissions-column-${l}`,
    B = i ? O : `denied`,
    V = `browser-use-site-permissions-${d}-${l}-value`,
    H;
  t[77] === k
    ? (H = t[78])
    : ((H = (e) => {
        k(e);
      }),
      (t[77] = k),
      (t[78] = H));
  let U;
  return (
    t[79] !== T ||
    t[80] !== A ||
    t[81] !== _ ||
    t[82] !== l ||
    t[83] !== m ||
    t[84] !== R ||
    t[85] !== B ||
    t[86] !== V ||
    t[87] !== H ||
    t[88] !== j ||
    t[89] !== M ||
    t[90] !== N ||
    t[91] !== P ||
    t[92] !== F ||
    t[93] !== I ||
    t[94] !== L
      ? ((U = (0, $.jsx)(T, {
          allowAllowed: j,
          contextId: M,
          defaultApprovalMode: N,
          description: P,
          disabled: F,
          disabledReason: I,
          displayValue: L,
          loading: _,
          inherited: A,
          labelId: R,
          resource: l,
          supportsRequiresApproval: m,
          value: B,
          valueId: V,
          onSelect: H,
        })),
        (t[79] = T),
        (t[80] = A),
        (t[81] = _),
        (t[82] = l),
        (t[83] = m),
        (t[84] = R),
        (t[85] = B),
        (t[86] = V),
        (t[87] = H),
        (t[88] = j),
        (t[89] = M),
        (t[90] = N),
        (t[91] = P),
        (t[92] = F),
        (t[93] = I),
        (t[94] = L),
        (t[95] = U))
      : (U = t[95]),
    U
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
    ? ((o = x(`size-2 shrink-0 rounded-full`, r, i, a)), (t[0] = r), (t[1] = i), (t[2] = a), (t[3] = o))
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
      disabledReason: c,
      displayValue: l,
      inherited: u,
      labelId: d,
      loading: f,
      onSelect: p,
      resource: m,
      supportsRequiresApproval: h,
      value: g,
      valueId: _,
      variant: v,
    } = e,
    y = n === void 0 || n,
    b = r === void 0 || r,
    S = h === void 0 || h,
    C = v === void 0 ? `default` : v,
    w = J(),
    T = c == null && (u ?? g === "default"),
    E = o;
  if (E == null && T) {
    let e;
    (t[0] === w
      ? (e = t[1])
      : ((e = w.formatMessage({
          id: `settings.browserUse.sitePermissions.inheritedDescription`,
          defaultMessage: `Uses the default permission`,
          description: `Accessible description and tooltip for an editable browser site permission inherited from its defaults`,
        })),
        (t[0] = w),
        (t[1] = e)),
      (E = e));
  }
  let D = C === `form` ? `h-9! w-full px-2.5!` : void 0,
    O = E,
    k;
  t[2] !== i || t[3] !== d || t[4] !== _
    ? ((k = [d, i, _].filter(cn)), (t[2] = i), (t[3] = d), (t[4] = _), (t[5] = k))
    : (k = t[5]);
  let A = k.join(` `),
    j = C === `form` ? `small` : void 0,
    M;
  t[6] === c
    ? (M = t[7])
    : ((M = c == null ? null : (0, $.jsx)(ee, { className: `text-secondary` })), (t[6] = c), (t[7] = M));
  let N = T && `text-secondary`,
    P;
  t[8] === N ? (P = t[9]) : ((P = x(`truncate`, N)), (t[8] = N), (t[9] = P));
  let F = u ? a : void 0,
    I;
  t[10] !== l || t[11] !== m || t[12] !== F
    ? ((I = gn(l, m, F)), (t[10] = l), (t[11] = m), (t[12] = F), (t[13] = I))
    : (I = t[13]);
  let L;
  t[14] !== P || t[15] !== I || t[16] !== _
    ? ((L = (0, $.jsx)(`span`, { id: _, className: P, children: I })),
      (t[14] = P),
      (t[15] = I),
      (t[16] = _),
      (t[17] = L))
    : (L = t[17]);
  let R;
  t[18] !== s ||
  t[19] !== f ||
  t[20] !== E ||
  t[21] !== M ||
  t[22] !== L ||
  t[23] !== D ||
  t[24] !== A ||
  t[25] !== j
    ? ((R = (0, $.jsxs)(ye, {
        className: D,
        "aria-description": O,
        "aria-labelledby": A,
        disabled: s,
        loading: f,
        radius: j,
        children: [M, L],
      })),
      (t[18] = s),
      (t[19] = f),
      (t[20] = E),
      (t[21] = M),
      (t[22] = L),
      (t[23] = D),
      (t[24] = A),
      (t[25] = j),
      (t[26] = R))
    : (R = t[26]);
  let z = R,
    B;
  t[27] !== E || t[28] !== z
    ? ((B = E == null ? z : (0, $.jsx)(K, { cloneCustomTrigger: !0, tooltipContent: E, children: z })),
      (t[27] = E),
      (t[28] = z),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== y ||
  t[31] !== b ||
  t[32] !== a ||
  t[33] !== p ||
  t[34] !== m ||
  t[35] !== S ||
  t[36] !== T ||
  t[37] !== g
    ? ((V = bn.map((e) => {
        if (e === `ask` && (!S || m === `webMcp`)) return null;
        let t = (e === `allowed` && !y) || (e === `ask` && !b),
          n = e === `ask` && a === `neverAsk`,
          r;
        return (
          t
            ? (r = (0, $.jsx)(at, {}))
            : n &&
              (r = (0, $.jsx)(X, {
                id: `settings.browserUse.sitePermissions.requiresApprovalUnavailable`,
                defaultMessage: `Change the default from Always allow before requiring approval for individual sites`,
                description: `Explains that the current browser approval storage cannot override a global Always allow setting for one site`,
              })),
          (0, $.jsx)(
            Y.Item,
            {
              rightIconAsset: e === (T ? `default` : g) && (T || g !== "default") ? he : void 0,
              disabled: t || n,
              tooltipText: r,
              onSelect: () => {
                p(e);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(on, { value: e }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: gn(e, m) }),
                ],
              }),
            },
            e,
          )
        );
      })),
      (t[30] = y),
      (t[31] = b),
      (t[32] = a),
      (t[33] = p),
      (t[34] = m),
      (t[35] = S),
      (t[36] = T),
      (t[37] = g),
      (t[38] = V))
    : (V = t[38]);
  let H;
  t[39] === V
    ? (H = t[40])
    : ((H = (0, $.jsx)(`div`, { className: `flex flex-col`, children: V })), (t[39] = V), (t[40] = H));
  let U;
  t[41] !== s || t[42] !== B || t[43] !== H
    ? ((U = (0, $.jsx)(fe, { align: `end`, contentWidth: `sm`, disabled: s, triggerButton: B, children: H })),
      (t[41] = s),
      (t[42] = B),
      (t[43] = H),
      (t[44] = U))
    : (U = t[44]);
  let W;
  return (
    t[45] !== c || t[46] !== U
      ? ((W = (0, $.jsx)(it, { reason: c, children: U })), (t[45] = c), (t[46] = U), (t[47] = W))
      : (W = t[47]),
    W
  );
}
function cn(e) {
  return e != null;
}
function ln(e) {
  let t = (0, vn.c)(52),
    { disabled: r, onSitePermissionsChange: i, resources: a, row: o } = e,
    s = n(D),
    c = J(),
    [l, u] = (0, yn.useState)(!1),
    [f, p] = (0, yn.useState)(!1),
    m;
  t[0] !== r ||
  t[1] !== f ||
  t[2] !== i ||
  t[3] !== a ||
  t[4] !== o.hasUserPermissions ||
  t[5] !== o.origin ||
  t[6] !== o.values ||
  t[7] !== s
    ? ((m = async () => {
        r ||
          f ||
          !o.hasUserPermissions ||
          (p(!0),
          await (async () => {
            try {
              (await i({
                operation: `remove`,
                origin: o.origin,
                nextValues: Cn,
                resources: a,
                values: o.values,
              }),
                u(!1));
            } catch {
              s.get(le).danger(_n(), {
                errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleClear` },
              });
            }
          })().finally(() => {
            p(!1);
          }));
      }),
      (t[0] = r),
      (t[1] = f),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o.hasUserPermissions),
      (t[5] = o.origin),
      (t[6] = o.values),
      (t[7] = s),
      (t[8] = m))
    : (m = t[8]);
  let h = m,
    _;
  t[9] !== o.hasUserPermissions || t[10] !== o.inheritedRestrictions || t[11] !== o.managedResources
    ? ((_ =
        !o.hasUserPermissions &&
        (o.managedResources != null ||
          Object.values(o.inheritedRestrictions ?? {}).includes(`organization`))),
      (t[9] = o.hasUserPermissions),
      (t[10] = o.inheritedRestrictions),
      (t[11] = o.managedResources),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== c || t[14] !== o.origin
    ? ((v = c.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: o.origin },
      )),
      (t[13] = c),
      (t[14] = o.origin),
      (t[15] = v))
    : (v = t[15]);
  let b = r || f || !o.hasUserPermissions,
    x;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        u(!0);
      }),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(Pe, { className: `icon-2xs` })), (t[17] = S))
    : (S = t[17]);
  let C;
  t[18] !== v || t[19] !== b
    ? ((C = (0, $.jsx)(L, {
        "aria-label": v,
        color: `ghost`,
        disabled: b,
        onClick: x,
        size: `icon`,
        children: S,
      })),
      (t[18] = v),
      (t[19] = b),
      (t[20] = C))
    : (C = t[20]);
  let w;
  t[21] !== _ || t[22] !== C
    ? ((w = (0, $.jsx)(rt, { managed: _, children: C })), (t[21] = _), (t[22] = C), (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] === h
    ? (T = t[25])
    : ((T = (e) => {
        (e.preventDefault(), h());
      }),
      (t[24] = h),
      (t[25] = T));
  let E;
  t[26] === o.origin
    ? (E = t[27])
    : ((E = (0, $.jsx)(se, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(X, {
            id: `settings.browserUse.sitePermissions.removeDialog.title`,
            defaultMessage: `Remove custom permissions for {origin}?`,
            description: `Confirmation dialog title for removing custom browser site permissions`,
            values: { origin: o.origin },
          }),
        }),
      })),
      (t[26] = o.origin),
      (t[27] = E));
  let k;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, $.jsx)(g, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(X, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] === E
    ? (A = t[30])
    : ((A = (0, $.jsx)(_e, { children: (0, $.jsx)(O, { title: E, subtitle: k }) })),
      (t[29] = E),
      (t[30] = A));
  let j;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        u(!1);
      }),
      (t[31] = j))
    : (j = t[31]);
  let M;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (t[32] = M))
    : (M = t[32]);
  let P;
  t[33] === f
    ? (P = t[34])
    : ((P = (0, $.jsx)(L, { color: `ghost`, disabled: f, onClick: j, type: `button`, children: M })),
      (t[33] = f),
      (t[34] = P));
  let F;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (t[35] = F))
    : (F = t[35]);
  let I;
  t[36] !== r || t[37] !== f
    ? ((I = (0, $.jsx)(L, { color: `danger`, disabled: r, loading: f, type: `submit`, children: F })),
      (t[36] = r),
      (t[37] = f),
      (t[38] = I))
    : (I = t[38]);
  let R;
  t[39] !== P || t[40] !== I
    ? ((R = (0, $.jsx)(_e, { children: (0, $.jsxs)(y, { children: [P, I] }) })),
      (t[39] = P),
      (t[40] = I),
      (t[41] = R))
    : (R = t[41]);
  let z;
  t[42] !== A || t[43] !== R || t[44] !== T
    ? ((z = (0, $.jsxs)(d, { as: `form`, onSubmit: T, children: [A, R] })),
      (t[42] = A),
      (t[43] = R),
      (t[44] = T),
      (t[45] = z))
    : (z = t[45]);
  let B;
  t[46] !== l || t[47] !== z
    ? ((B = (0, $.jsx)(N, { open: l, onOpenChange: u, size: `compact`, children: z })),
      (t[46] = l),
      (t[47] = z),
      (t[48] = B))
    : (B = t[48]);
  let V;
  return (
    t[49] !== B || t[50] !== w
      ? ((V = (0, $.jsxs)($.Fragment, { children: [w, B] })), (t[49] = B), (t[50] = w), (t[51] = V))
      : (V = t[51]),
    V
  );
}
function un(e) {
  let t = (0, vn.c)(105),
    {
      webMcpAvailable: r,
      disabled: i,
      enterprisePolicy: a,
      onOpenChange: o,
      open: s,
      originsConfig: c,
      onSitePermissionsChange: l,
      parseOrigin: u,
      supportsRequiresApproval: f,
      supportsClearingDefaultsOnAdd: p,
      visibleResources: m,
    } = e,
    h = n(D),
    _ = J(),
    [v, b] = (0, yn.useState)(``),
    [x, S] = (0, yn.useState)(`default`),
    [C, w] = (0, yn.useState)(Sn),
    [T, E] = (0, yn.useState)(!1),
    [k, A] = (0, yn.useState)(!1),
    j,
    M,
    P,
    F,
    I,
    R,
    B,
    V,
    H,
    U,
    ee,
    W,
    te,
    ne,
    re,
    G,
    ie,
    ae;
  if (
    t[0] !== C ||
    t[1] !== i ||
    t[2] !== a ||
    t[3] !== _ ||
    t[4] !== k ||
    t[5] !== o ||
    t[6] !== l ||
    t[7] !== s ||
    t[8] !== v ||
    t[9] !== c ||
    t[10] !== u ||
    t[11] !== h ||
    t[12] !== T ||
    t[13] !== p ||
    t[14] !== f ||
    t[15] !== x ||
    t[16] !== m ||
    t[17] !== r
  ) {
    B = u == null ? (z(v)?.canonicalPattern ?? null) : u(v);
    let e = v.length > 0 && B == null,
      n = B == null || Bt(a, B, `origin`),
      y = B == null || Bt(a, B, `persistentApproval`);
    ((I =
      x !== "default" ||
      Object.values(C).some(dn) ||
      (p && B != null && m.some((e) => Kt(c, e, B) !== "default"))),
      (F =
        B != null &&
        m.some((e) => {
          let t = e === `origin` ? x : C[e];
          return (
            (e !== `webMcp` && t === `allowed` && !y) ||
            ((t === `allowed` || t === `ask`) && !Bt(a, B, e === `webMcp` ? `origin` : e))
          );
        })),
      (R = m.some((e) => (e === `origin` ? x : C[e]) === `ask` && hn(c, e, a, B ?? ``) === `neverAsk`)));
    let D;
    (t[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((D = () => {
          (b(``), S(`default`), w(Sn), E(!1));
        }),
        (t[36] = D))
      : (D = t[36]),
      (V = D));
    let L = async () => {
      B == null ||
        i ||
        k ||
        !I ||
        F ||
        R ||
        (A(!0),
        await (async () => {
          try {
            (await l({
              operation: `add`,
              nextValues: { ...C, origin: x },
              origin: B,
              resources: m,
              values: Cn,
            }),
              V(),
              o(!1));
          } catch {
            h.get(le).danger(_n(), {
              errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSubmit` },
            });
          }
        })().finally(() => {
          A(!1);
        }));
    };
    ((P = N),
      (ie = s),
      t[37] === o
        ? (ae = t[38])
        : ((ae = (e) => {
            (e || V(), o(e));
          }),
          (t[37] = o),
          (t[38] = ae)),
      (U = `compact`),
      (M = d),
      (ne = `form`),
      (re = (e) => {
        (e.preventDefault(), L());
      }));
    let K;
    (t[39] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((K = (0, $.jsx)(se, {
          asChild: !0,
          children: (0, $.jsx)(`span`, {
            children: (0, $.jsx)(X, {
              id: `settings.browserUse.sitePermissions.addDialog.title`,
              defaultMessage: `Add site permission`,
              description: `Title for add browser site permission dialog`,
            }),
          }),
        })),
        (t[39] = K))
      : (K = t[39]),
      t[40] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((G = (0, $.jsx)(_e, {
            children: (0, $.jsx)(O, {
              title: K,
              subtitle: (0, $.jsx)(g, {
                asChild: !0,
                children: (0, $.jsx)(`span`, {
                  children: (0, $.jsx)(X, {
                    id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                    defaultMessage: `Choose what access ChatGPT has on a site`,
                    description: `Subtitle for add browser site permission dialog`,
                  }),
                }),
              }),
            }),
          })),
          (t[40] = G))
        : (G = t[40]),
      (j = _e),
      (H = `gap-3`));
    let q;
    t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((q = (0, $.jsx)(`span`, {
          className: `text-sm font-medium`,
          children: (0, $.jsx)(X, {
            id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
            defaultMessage: `Site`,
            description: `Site label for add browser site permission dialog`,
          }),
        })),
        (t[41] = q))
      : (q = t[41]);
    let oe = e ? `browser-use-add-origin-error` : void 0,
      J;
    t[42] === _
      ? (J = t[43])
      : ((J = _.formatMessage({
          id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
          defaultMessage: `Site`,
          description: `Aria label for site input in add browser site permission dialog`,
        })),
        (t[42] = _),
        (t[43] = J));
    let ce = i || k,
      ue;
    t[44] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ue = (e) => {
          b(e.currentTarget.value);
        }),
        (t[44] = ue))
      : (ue = t[44]);
    let Y;
    t[45] === _
      ? (Y = t[46])
      : ((Y = _.formatMessage({
          id: `settings.browserUse.policyDomains.addDialogPlaceholder`,
          defaultMessage: `https://example.com`,
          description: `Placeholder showing that browser site patterns require an HTTP or HTTPS scheme`,
        })),
        (t[45] = _),
        (t[46] = Y));
    let de;
    t[47] !== e || t[48] !== v || t[49] !== oe || t[50] !== J || t[51] !== ce || t[52] !== Y
      ? ((de = (0, $.jsx)(Ce, {
          autoFocus: !0,
          "aria-describedby": oe,
          "aria-invalid": e,
          "aria-label": J,
          disabled: ce,
          onChange: ue,
          placeholder: Y,
          value: v,
        })),
        (t[47] = e),
        (t[48] = v),
        (t[49] = oe),
        (t[50] = J),
        (t[51] = ce),
        (t[52] = Y),
        (t[53] = de))
      : (de = t[53]);
    let fe;
    (t[54] === e
      ? (fe = t[55])
      : ((fe = e
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-danger`,
              id: `browser-use-add-origin-error`,
              role: `alert`,
              children: (0, $.jsx)(X, {
                id: `settings.browserUse.sitePermissions.addDialog.invalidOrigin`,
                defaultMessage: `Enter a valid origin, such as https://example.com or https://*.example.com`,
                description: `Validation error explaining the required URL scheme and supported wildcard syntax for a browser site permission`,
              }),
            })
          : null),
        (t[54] = e),
        (t[55] = fe)),
      t[56] !== de || t[57] !== fe
        ? ((ee = (0, $.jsxs)(`label`, { className: `flex flex-col gap-1.5`, children: [q, de, fe] })),
          (t[56] = de),
          (t[57] = fe),
          (t[58] = ee))
        : (ee = t[58]));
    let pe;
    (t[59] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((pe = (0, $.jsx)(`span`, {
          id: `browser-use-add-browsing-label`,
          className: `text-sm font-medium`,
          children: (0, $.jsx)(X, {
            id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
            defaultMessage: `Browse`,
            description: `Behavior label for add browser site permission dialog`,
          }),
        })),
        (t[59] = pe))
      : (pe = t[59]),
      (W = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          pe,
          (0, $.jsx)(sn, {
            allowAllowed: n && y,
            allowRequiresApproval: n,
            defaultApprovalMode: hn(c, `origin`, a, B ?? ``),
            disabled: i || k,
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
      (te = T
        ? m.map((e) => {
            if (e === `origin`) return null;
            let t = `browser-use-add-${e}-label`,
              n = `browser-use-add-${e}-value`,
              o = e === `webMcp` && !r ? `webMcpUnavailable` : null,
              s = e === `webMcp` && B != null ? pn(c, B) : void 0;
            return (0, $.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-1.5`,
                children: [
                  (0, $.jsx)(`span`, { id: t, className: `text-sm font-medium`, children: mn(e) }),
                  (0, $.jsx)(sn, {
                    allowAllowed: (e === `webMcp` || y) && Bt(a, B ?? ``, e === `webMcp` ? `origin` : e),
                    allowRequiresApproval: Bt(a, B ?? ``, e === `webMcp` ? `origin` : e),
                    defaultApprovalMode: hn(c, e, a, B ?? ``),
                    description:
                      o == null && s != null
                        ? _.formatMessage(wn.blockingRuleDescription, { pattern: s })
                        : void 0,
                    disabled: i || k || o != null,
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
      (t[0] = C),
      (t[1] = i),
      (t[2] = a),
      (t[3] = _),
      (t[4] = k),
      (t[5] = o),
      (t[6] = l),
      (t[7] = s),
      (t[8] = v),
      (t[9] = c),
      (t[10] = u),
      (t[11] = h),
      (t[12] = T),
      (t[13] = p),
      (t[14] = f),
      (t[15] = x),
      (t[16] = m),
      (t[17] = r),
      (t[18] = j),
      (t[19] = M),
      (t[20] = P),
      (t[21] = F),
      (t[22] = I),
      (t[23] = R),
      (t[24] = B),
      (t[25] = V),
      (t[26] = H),
      (t[27] = U),
      (t[28] = ee),
      (t[29] = W),
      (t[30] = te),
      (t[31] = ne),
      (t[32] = re),
      (t[33] = G),
      (t[34] = ie),
      (t[35] = ae));
  } else
    ((j = t[18]),
      (M = t[19]),
      (P = t[20]),
      (F = t[21]),
      (I = t[22]),
      (R = t[23]),
      (B = t[24]),
      (V = t[25]),
      (H = t[26]),
      (U = t[27]),
      (ee = t[28]),
      (W = t[29]),
      (te = t[30]),
      (ne = t[31]),
      (re = t[32]),
      (G = t[33]),
      (ie = t[34]),
      (ae = t[35]));
  let K;
  t[60] !== I || t[61] !== B
    ? ((K =
        B != null && !I
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-secondary`,
              role: `status`,
              children: (0, $.jsx)(X, {
                id: `settings.browserUse.sitePermissions.addDialog.matchesDefaults`,
                defaultMessage: `These permissions match the defaults, so adding this site would not change anything`,
                description: `Explanation shown when the add site permission button is disabled because every permission inherits the current default`,
              }),
            })
          : null),
      (t[60] = I),
      (t[61] = B),
      (t[62] = K))
    : (K = t[62]);
  let q;
  t[63] !== j || t[64] !== H || t[65] !== K || t[66] !== ee || t[67] !== W || t[68] !== te
    ? ((q = (0, $.jsxs)(j, { className: H, children: [ee, W, te, K] })),
      (t[63] = j),
      (t[64] = H),
      (t[65] = K),
      (t[66] = ee),
      (t[67] = W),
      (t[68] = te),
      (t[69] = q))
    : (q = t[69]);
  let oe;
  t[70] !== k || t[71] !== T || t[72] !== m.length
    ? ((oe =
        !T && m.length > 1
          ? (0, $.jsx)(L, {
              className: `me-auto`,
              color: `ghost`,
              disabled: k,
              onClick: () => {
                E(!0);
              },
              type: `button`,
              children: (0, $.jsx)(X, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (t[70] = k),
      (t[71] = T),
      (t[72] = m.length),
      (t[73] = oe))
    : (oe = t[73]);
  let ce;
  t[74] !== o || t[75] !== V
    ? ((ce = () => {
        (V(), o(!1));
      }),
      (t[74] = o),
      (t[75] = V),
      (t[76] = ce))
    : (ce = t[76]);
  let ue;
  t[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = (0, $.jsx)(X, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (t[77] = ue))
    : (ue = t[77]);
  let Y;
  t[78] !== k || t[79] !== ce
    ? ((Y = (0, $.jsx)(L, { color: `outline`, disabled: k, onClick: ce, type: `button`, children: ue })),
      (t[78] = k),
      (t[79] = ce),
      (t[80] = Y))
    : (Y = t[80]);
  let de = B == null || i || !I || k || F || R,
    fe;
  t[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(X, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (t[81] = fe))
    : (fe = t[81]);
  let pe;
  t[82] !== k || t[83] !== de
    ? ((pe = (0, $.jsx)(L, { color: `primary`, disabled: de, loading: k, type: `submit`, children: fe })),
      (t[82] = k),
      (t[83] = de),
      (t[84] = pe))
    : (pe = t[84]);
  let me;
  t[85] !== F || t[86] !== pe
    ? ((me = (0, $.jsx)(rt, { managed: F, children: pe })), (t[85] = F), (t[86] = pe), (t[87] = me))
    : (me = t[87]);
  let he;
  t[88] !== oe || t[89] !== Y || t[90] !== me
    ? ((he = (0, $.jsx)(_e, { children: (0, $.jsxs)(y, { children: [oe, Y, me] }) })),
      (t[88] = oe),
      (t[89] = Y),
      (t[90] = me),
      (t[91] = he))
    : (he = t[91]);
  let ge;
  t[92] !== M || t[93] !== q || t[94] !== he || t[95] !== ne || t[96] !== re || t[97] !== G
    ? ((ge = (0, $.jsxs)(M, { as: ne, onSubmit: re, children: [G, q, he] })),
      (t[92] = M),
      (t[93] = q),
      (t[94] = he),
      (t[95] = ne),
      (t[96] = re),
      (t[97] = G),
      (t[98] = ge))
    : (ge = t[98]);
  let ve;
  return (
    t[99] !== P || t[100] !== U || t[101] !== ge || t[102] !== ie || t[103] !== ae
      ? ((ve = (0, $.jsx)(P, { open: ie, onOpenChange: ae, size: U, children: ge })),
        (t[99] = P),
        (t[100] = U),
        (t[101] = ge),
        (t[102] = ie),
        (t[103] = ae),
        (t[104] = ve))
      : (ve = t[104]),
    ve
  );
}
function dn(e) {
  return e !== "default";
}
function fn(e, t) {
  if (e.webMcpEnabled !== !1) return `allowed`;
  if (/[*?]/u.test(t)) return `denied`;
  let n = ce(t);
  return e.allowedWebMcpOrigins.some((e) => P(e.trim(), { raw: n?.origin ?? t, hostPort: n?.host ?? null }))
    ? `allowed`
    : `denied`;
}
function pn(e, t) {
  if (/[*?]/u.test(t)) return;
  let n = ce(t);
  return e.deniedWebMcpOrigins.find(
    (e) => e !== t && P(e.trim(), { raw: n?.origin ?? t, hostPort: n?.host ?? null }),
  );
}
function mn(e) {
  switch (e) {
    case `origin`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `webMcp`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.siteTools`,
        defaultMessage: `Site tools`,
        description: `Website-provided tools permission in the browser site permissions settings`,
      });
    case `fullCdp`:
      return (0, $.jsx)(X, {
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
    return (0, $.jsx)(X, {
      id: `settings.browserUse.sitePermissions.siteTools.enabled`,
      defaultMessage: `Enabled`,
      description: `Site-provided tools are enabled for the browser`,
    });
  if (t === `webMcp` && e === `denied`)
    return (0, $.jsx)(X, {
      id: `settings.browserUse.sitePermissions.siteTools.disabled`,
      defaultMessage: `Disabled`,
      description: `Site-provided tools are disabled for the browser`,
    });
  if (e === `ask` || (e === "default" && n === `alwaysAsk`))
    return (0, $.jsx)(X, {
      id: `settings.browserUse.sitePermissions.approvalValue.requiresApproval`,
      defaultMessage: `Requires approval`,
      description: `Browser site permission that has no persistent approval and uses the default approval flow`,
    });
  if (t !== `fullCdp` && (e === `allowed` || (e === "default" && n === `neverAsk`)))
    return (0, $.jsx)(X, {
      id: `settings.browserUse.sitePermissions.approvalValue.alwaysAllow`,
      defaultMessage: `Always allow`,
      description: `Browser site permission with persistent approval for browsing, downloads, or uploads`,
    });
  switch (e) {
    case `default`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.value.useDefault`,
        defaultMessage: `Use default`,
        description: `Option that removes a custom browser site permission so it inherits its defaults`,
      });
    case `allowed`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site capabilities`,
      });
    case `denied`:
      return (0, $.jsx)(X, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function _n() {
  return (0, $.jsx)(X, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var vn, yn, $, bn, xn, Sn, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((vn = T()),
      U(),
      de(),
      ge(),
      C(),
      H(),
      Je(),
      (yn = o()),
      I(),
      Ee(),
      V(),
      f(),
      l(),
      W(),
      w(),
      k(),
      we(),
      ve(),
      M(),
      ue(),
      Ne(),
      be(),
      r(),
      qe(),
      Te(),
      ke(),
      Fe(),
      xe(),
      ne(),
      lt(),
      Dt(),
      Yt(),
      Ct(),
      ($ = v()),
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
      (wn = R({
        blockingRuleDescription: {
          id: `settings.browserUse.sitePermissions.blockingRuleDescription`,
          defaultMessage: `Disabled by the site rule {pattern}`,
          description: `Accessible description and tooltip explaining which other site permission rule disables Site tools despite this site's saved choice`,
        },
      })));
  }))();
}
export { lt as a, rt as i, Xt as n, Tn as r, Qt as t };
//# sourceMappingURL=browser-use-policy-site-permissions-33d16736b491.js.map
