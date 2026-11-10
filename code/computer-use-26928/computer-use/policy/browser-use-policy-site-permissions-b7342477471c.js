import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  BT as n,
  DT as r,
  E3 as i,
  EE as a,
  F5t as o,
  Gwt as s,
  HS as c,
  Hrn as l,
  I3 as u,
  JS as d,
  Jun as f,
  KCt as p,
  Ket as m,
  LS as h,
  MS as g,
  N5t as _,
  NS as v,
  O5t as y,
  OT as b,
  PS as x,
  Px as S,
  Qun as C,
  RT as w,
  Rwt as T,
  SE as E,
  TE as D,
  US as O,
  VS as k,
  Vun as A,
  Wrn as j,
  XS as M,
  Xun as N,
  Yrn as P,
  _dn as F,
  ast as I,
  awt as L,
  bE as R,
  bun as z,
  dJt as B,
  dwt as V,
  ein as H,
  fJt as U,
  frt as W,
  gPt as G,
  ist as K,
  iwt as q,
  jS as ee,
  jx as te,
  lPt as ne,
  mT as re,
  mcn as J,
  my as ie,
  ncn as ae,
  nwt as oe,
  pT as se,
  prt as Y,
  py as ce,
  r5 as le,
  rTt as X,
  rcn as ue,
  tC as de,
  twt as fe,
  vdn as pe,
  z3 as me,
  zCt as he,
  zS as ge,
} from "./app-shared-7552fc8d5d82.js";
import {
  $O as _e,
  F3 as ve,
  Iun as ye,
  L3 as be,
  Run as xe,
  dw as Se,
  fw as Ce,
  hf as we,
  mf as Te,
  nk as Ee,
} from "./app-initial-3916b423772b.js";
import { Lm as De, Rm as Oe } from "./app-primary-7b889402e22e.js";
import { n as ke, t as Ae } from "./settings-loading-row-f0c26bc7580c.js";
import {
  D as je,
  E as Me,
  S as Ne,
  T as Pe,
  b as Fe,
  c as Ie,
  d as Le,
  g as Re,
  h as ze,
  i as Be,
  m as Ve,
  o as He,
  p as Ue,
  t as We,
  v as Ge,
  w as Ke,
  x as qe,
  y as Je,
} from "./browser-use-origin-state-queries-4feefe042d12.js";
import { t as Ye } from "./assert-never-a6e685100dc6.js";
function Xe(e) {
  let t = (0, Qe.c)(8),
    { children: n, managed: r } = e,
    i = H();
  if (!r) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, $e.jsx)($e.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $e.jsx)(Ze, {})), (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i ? (o = t[4]) : ((o = i.formatMessage(et)), (t[3] = i), (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, $e.jsx)(w, {
          tooltipContent: a,
          children: (0, $e.jsx)(`span`, {
            "aria-disabled": `true`,
            "aria-label": o,
            className: `inline-flex`,
            role: `button`,
            tabIndex: 0,
            children: n,
          }),
        })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Ze(e) {
  let t = (0, Qe.c)(1),
    n;
  return (
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $e.jsx)(P, { ...et })), (t[0] = n))
      : (n = t[0]),
    n
  );
}
var Qe, $e, et;
function tt() {
  return (tt = e(() => {
    ((Qe = F()),
      j(),
      n(),
      ($e = J()),
      (et = l({
        id: `settings.browserUse.managed.explanation`,
        defaultMessage: `Managed by your enterprise admin`,
        description: `Tooltip explaining that a Browser Use setting is controlled by an enterprise administrator`,
      })));
  }))();
}
var nt, rt, it;
function at() {
  return (at = e(() => {
    ((nt = `_table_1ijnk_2`), (rt = `_cellContent_1ijnk_2`), (it = { table: nt, cellContent: rt }));
  }))();
}
function ot(e) {
  let t = (0, ut.c)(44),
    { children: n, defaultRow: r, resources: i } = e,
    a = H(),
    [o, s] = S(),
    c = (0, dt.useRef)(null),
    l = (0, dt.useRef)(null),
    d = (0, dt.useRef)(0),
    f = b(),
    [p, m] = (0, dt.useState)(0),
    h = s == null ? 3 : Math.max(1, Math.min(3, Math.floor((s - 248) / 168))),
    g = Math.max(0, i.length - h),
    _ = Math.min(p, g),
    v = Math.min(h, i.length),
    y = `calc(var(--spacing) * ${h === 1 ? 24 : 48})`,
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = function (e) {
        l.current !== e &&
          (l.current != null && (l.current.style.scrollSnapType = `none`),
          (e.style.scrollSnapType = `x mandatory`),
          (l.current = e));
      }),
      (t[0] = x))
    : (x = t[0]);
  let C = x,
    w;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = function (e) {
        if (!(e.target instanceof Element)) return;
        let t = e.target.closest(`thead > tr, tbody`);
        t instanceof HTMLElement && e.currentTarget.contains(t) && C(t);
      }),
      (t[1] = w))
    : (w = t[1]);
  let T = w,
    E;
  t[2] === g
    ? (E = t[3])
    : ((E = function (e) {
        let t = e.target;
        if (
          !(t instanceof HTMLElement) ||
          !t.matches(`thead > tr, tbody`) ||
          t.scrollLeft === d.current
        )
          return;
        (C(t), (d.current = t.scrollLeft));
        for (let n of e.currentTarget.querySelectorAll(`thead > tr, tbody`))
          n !== t && (n.scrollLeft = t.scrollLeft);
        let n = t.scrollWidth - t.clientWidth;
        m(n === 0 ? 0 : Math.round((Math.abs(t.scrollLeft) / n) * g));
      }),
      (t[2] = g),
      (t[3] = E));
  let D = E,
    O;
  t[4] !== g || t[5] !== _ || t[6] !== h || t[7] !== f
    ? ((O = function (e) {
        let t = c.current,
          n = t?.tHead?.rows[0];
        if (t == null || n == null) return;
        C(n);
        let r = Math.max(
          0,
          Math.min(g, (e === 1 ? Math.floor(_ / h) + 1 : Math.ceil(_ / h) - 1) * h),
        );
        n.scrollTo({
          left:
            ((n.scrollWidth - n.clientWidth) / g) *
            r *
            (getComputedStyle(n).direction === `rtl` ? -1 : 1),
          behavior: f ? `instant` : `smooth`,
        });
      }),
      (t[4] = g),
      (t[5] = _),
      (t[6] = h),
      (t[7] = f),
      (t[8] = O))
    : (O = t[8]);
  let k = O,
    A;
  t[9] === o ? (A = t[10]) : ((A = re(o, c)), (t[9] = o), (t[10] = A));
  let j = `${y} repeat(${i.length}, calc((100% - ${y} - calc(var(--spacing) * 14)) / ${v})) calc(var(--spacing) * 14)`,
    M = `${y} calc(var(--spacing) * 14)`,
    N;
  t[11] !== j || t[12] !== M
    ? ((N = { gridTemplateColumns: j, scrollPaddingInline: M }),
      (t[11] = j),
      (t[12] = M),
      (t[13] = N))
    : (N = t[13]);
  let F;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsx)(`th`, {
        className: `px-3 py-3 text-start font-medium`,
        children: (0, Z.jsx)(P, {
          id: `settings.browserUse.sitePermissions.matrix.siteColumn`,
          defaultMessage: `Site or pattern`,
          description: `Column heading for a website origin or origin pattern in the browser permissions matrix`,
        }),
      })),
      (t[14] = F))
    : (F = t[14]);
  let I;
  t[15] === i ? (I = t[16]) : ((I = i.map(st)), (t[15] = i), (t[16] = I));
  let L;
  t[17] !== k || t[18] !== a || t[19] !== g || t[20] !== _
    ? ((L =
        g > 0
          ? (0, Z.jsxs)(`div`, {
              className: `flex items-center justify-end`,
              children: [
                (0, Z.jsx)(R, {
                  "aria-label": a.formatMessage({
                    id: `settings.browserUse.sitePermissions.previousColumns`,
                    defaultMessage: `Previous permissions`,
                    description: `Show the previous columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: _ === 0,
                  onClick: () => k(-1),
                  children: (0, Z.jsx)(u, { className: `rtl:rotate-180` }),
                }),
                (0, Z.jsx)(R, {
                  "aria-label": a.formatMessage({
                    id: `settings.browserUse.sitePermissions.nextColumns`,
                    defaultMessage: `Next permissions`,
                    description: `Show the next columns in the site permissions table`,
                  }),
                  color: `ghost`,
                  size: `iconCircleSm`,
                  disabled: _ === g,
                  onClick: () => k(1),
                  children: (0, Z.jsx)(me, { className: `rtl:rotate-180` }),
                }),
              ],
            })
          : null),
      (t[17] = k),
      (t[18] = a),
      (t[19] = g),
      (t[20] = _),
      (t[21] = L))
    : (L = t[21]);
  let z;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Z.jsx)(P, {
          id: `settings.browserUse.sitePermissions.matrix.actionsColumn`,
          defaultMessage: `Actions`,
          description: `Accessible heading for site permission row actions`,
        }),
      })),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] === L
    ? (B = t[24])
    : ((B = (0, Z.jsxs)(`th`, { className: `px-2 py-3`, children: [L, z] })),
      (t[23] = L),
      (t[24] = B));
  let V;
  t[25] !== I || t[26] !== B
    ? ((V = (0, Z.jsxs)(`tr`, { className: `text-secondary`, children: [F, I, B] })),
      (t[25] = I),
      (t[26] = B),
      (t[27] = V))
    : (V = t[27]);
  let U;
  t[28] !== r || t[29] !== i ? ((U = r(i)), (t[28] = r), (t[29] = i), (t[30] = U)) : (U = t[30]);
  let W;
  t[31] !== V || t[32] !== U
    ? ((W = (0, Z.jsxs)(`thead`, {
        className: `sticky top-[calc(-1*var(--padding-panel))] z-10 bg-surface select-none`,
        children: [V, U],
      })),
      (t[31] = V),
      (t[32] = U),
      (t[33] = W))
    : (W = t[33]);
  let G;
  t[34] !== n || t[35] !== i ? ((G = n(i)), (t[34] = n), (t[35] = i), (t[36] = G)) : (G = t[36]);
  let K;
  return (
    t[37] !== h || t[38] !== D || t[39] !== W || t[40] !== G || t[41] !== A || t[42] !== N
      ? ((K = (0, Z.jsxs)(`table`, {
          ref: A,
          className: it.table,
          "data-page-size": h,
          onWheelCapture: T,
          onPointerDownCapture: T,
          onFocusCapture: T,
          onScrollCapture: D,
          style: N,
          children: [W, G],
        })),
        (t[37] = h),
        (t[38] = D),
        (t[39] = W),
        (t[40] = G),
        (t[41] = A),
        (t[42] = N),
        (t[43] = K))
      : (K = t[43]),
    K
  );
}
function st(e) {
  return (0, Z.jsx)(
    `th`,
    {
      id: `browser-use-site-permissions-column-${e}`,
      className: `px-2 py-3 text-start font-medium`,
      children: (0, Z.jsx)(ct, { children: (0, Z.jsx)(lt, { resource: e }) }),
    },
    e,
  );
}
function ct(e) {
  let t = (0, ut.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, { className: it.cellContent, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function lt(e) {
  let t = (0, ut.c)(6),
    { resource: n } = e;
  if (n === `origin`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(P, {
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
        ? ((e = (0, Z.jsx)(P, {
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
        ? ((e = (0, Z.jsx)(P, {
            id: `settings.browserUse.sitePermissions.matrix.uploadsColumn`,
            defaultMessage: `Uploads`,
            description: `Uploads column heading in the browser site permissions matrix`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (n === `fullCdp`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(P, {
            id: `settings.browserUse.sitePermissions.cdpAccess`,
            defaultMessage: `Debug / CDP`,
            description: `Chrome DevTools Protocol column heading in the browser site permissions matrix`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let r;
  return (t[4] === n ? (r = t[5]) : ((r = Ye(n)), (t[4] = n), (t[5] = r)), r);
}
var ut, dt, Z;
function ft() {
  return (ft = e(() => {
    ((ut = F()), (dt = pe()), j(), E(), m(), r(), te(), se(), at(), (Z = J()));
  }))();
}
function pt(e) {
  let n = (0, ht.c)(32),
    {
      browserClientAllowed: r,
      disabled: a,
      enterprisePolicy: o,
      onChange: s,
      onApprovalModeChange: c,
      originsConfig: l,
      userConfig: u,
      visibleResources: f,
    } = e,
    p = a !== void 0 && a,
    m = t(B),
    h;
  n[0] !== l.approvalMode || n[1] !== l.downloadApprovalMode || n[2] !== l.uploadApprovalMode
    ? ((h = {
        origin: l.approvalMode,
        download: l.downloadApprovalMode,
        upload: l.uploadApprovalMode,
      }),
      (n[0] = l.approvalMode),
      (n[1] = l.downloadApprovalMode),
      (n[2] = l.uploadApprovalMode),
      (n[3] = h))
    : (h = n[3]);
  let g = h,
    _;
  n[4] === o ? (_ = n[5]) : ((_ = je(o) && Me(o, `persistentApproval`)), (n[4] = o), (n[5] = _));
  let v = _,
    y;
  n[6] !== g || n[7] !== c || n[8] !== s || n[9] !== m
    ? ((y = (e, t, n) => {
        if (t === g[e]) {
          n || s?.({ capability: e, enabled: !0 });
          return;
        }
        let r = !n && s != null;
        (async () => {
          try {
            (await c(e, t), r && s({ capability: e, enabled: !0 }));
          } catch {
            m.get(G).danger(
              (0, Q.jsx)(P, {
                id: `settings.browserUse.approval.saveError`,
                defaultMessage: `Unable to save approval setting`,
                description: `Toast shown when saving a browser use approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.approval.saveError` } },
            );
          }
        })();
      }),
      (n[6] = g),
      (n[7] = c),
      (n[8] = s),
      (n[9] = m),
      (n[10] = y))
    : (y = n[10]);
  let b = y,
    x;
  if (
    n[11] !== g ||
    n[12] !== r ||
    n[13] !== p ||
    n[14] !== o ||
    n[15] !== b ||
    n[16] !== s ||
    n[17] !== v ||
    n[18] !== u?.default_origin_policy ||
    n[19] !== f
  ) {
    let e;
    (n[21] !== g ||
    n[22] !== r ||
    n[23] !== p ||
    n[24] !== o ||
    n[25] !== b ||
    n[26] !== s ||
    n[27] !== v ||
    n[28] !== u?.default_origin_policy
      ? ((e = (e) => {
          let t = r && Me(o, e),
            n = Re(u?.default_origin_policy, e) !== `deny`,
            a = t && n,
            c = e !== `fullCdp`,
            l = (e === `fullCdp` ? void 0 : g[e]) === `neverAsk` && v ? `neverAsk` : `alwaysAsk`;
          return (0, Q.jsx)(
            `td`,
            {
              "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
              className: `px-2 py-3`,
              children: (0, Q.jsx)(ct, {
                children: (0, Q.jsx)(Xe, {
                  managed: !t,
                  children: (0, Q.jsxs)(d, {
                    align: `end`,
                    disabled: p || !t,
                    triggerButton: (0, Q.jsxs)(_e, {
                      "aria-labelledby": `browser-use-site-permissions-default browser-use-site-permissions-column-${e}`,
                      disabled: p || !t,
                      children: [
                        t ? null : (0, Q.jsx)(le, { className: `text-secondary` }),
                        (0, Q.jsx)(`span`, {
                          className: `truncate`,
                          children: (0, Q.jsx)(mt, { allowed: a, approvalMode: c ? l : void 0 }),
                        }),
                      ],
                    }),
                    children: [
                      (0, Q.jsx)(M.Item, {
                        RightIcon: a && (!c || l === `alwaysAsk`) ? i : void 0,
                        onSelect: () => {
                          if (e === `fullCdp`) {
                            s?.({ capability: e, enabled: !0 });
                            return;
                          }
                          b(e, `alwaysAsk`, n);
                        },
                        children: (0, Q.jsx)(mt, {
                          allowed: !0,
                          approvalMode: c ? `alwaysAsk` : void 0,
                        }),
                      }),
                      c
                        ? (0, Q.jsx)(M.Item, {
                            RightIcon: a && l === `neverAsk` ? i : void 0,
                            disabled: !v,
                            tooltipText: v ? void 0 : (0, Q.jsx)(Ze, {}),
                            onSelect: () => {
                              v && b(e, `neverAsk`, n);
                            },
                            children: (0, Q.jsx)(mt, { allowed: !0, approvalMode: `neverAsk` }),
                          })
                        : null,
                      s == null
                        ? null
                        : (0, Q.jsx)(M.Item, {
                            RightIcon: a ? void 0 : i,
                            onSelect: () => {
                              s({ capability: e, enabled: !1 });
                            },
                            children: (0, Q.jsx)(mt, { allowed: !1 }),
                          }),
                    ],
                  }),
                }),
              }),
            },
            e,
          );
        }),
        (n[21] = g),
        (n[22] = r),
        (n[23] = p),
        (n[24] = o),
        (n[25] = b),
        (n[26] = s),
        (n[27] = v),
        (n[28] = u?.default_origin_policy),
        (n[29] = e))
      : (e = n[29]),
      (x = f.map(e)),
      (n[11] = g),
      (n[12] = r),
      (n[13] = p),
      (n[14] = o),
      (n[15] = b),
      (n[16] = s),
      (n[17] = v),
      (n[18] = u?.default_origin_policy),
      (n[19] = f),
      (n[20] = x));
  } else x = n[20];
  let S;
  return (
    n[30] === x
      ? (S = n[31])
      : ((S = (0, Q.jsx)(Q.Fragment, { children: x })), (n[30] = x), (n[31] = S)),
    S
  );
}
function mt(e) {
  let t = (0, ht.c)(4),
    { allowed: n, approvalMode: r } = e;
  if (!n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(P, {
            id: `settings.browserUse.sitePermissions.defaultValue.denied`,
            defaultMessage: `Block`,
            description: `Blocked default value for a browser site permission`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `alwaysAsk`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(P, {
            id: `settings.browserUse.sitePermissions.defaultValue.approvalRequired`,
            defaultMessage: `Requires approval`,
            description: `Default browser permission that requires individual user approval`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (r === `neverAsk`) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(P, {
            id: `settings.browserUse.sitePermissions.defaultValue.alwaysAllowed`,
            defaultMessage: `Always allow`,
            description: `Default browser permission that allows actions without requiring individual user approval`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let i;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(P, {
          id: `settings.browserUse.sitePermissions.defaultValue.allowed`,
          defaultMessage: `Allow`,
          description: `Allowed default value for a browser site capability`,
        })),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var ht, Q;
function gt() {
  return (gt = e(() => {
    ((ht = F()), y(), Ve(), j(), de(), m(), ne(), U(), Ee(), tt(), ft(), (Q = J()));
  }))();
}
function _t(e, t, n) {
  let r = oe(n),
    i = r == null ? null : vt(Object.entries(e?.origins ?? {}), e?.defaultOriginPolicy, r),
    a =
      r == null
        ? null
        : vt(
            Object.entries(t?.origins ?? {}).map(([e, t]) => [e, yt(t)]),
            yt(t?.default_origin_policy),
            r,
          ),
    o = {
      access: bt(i?.access, a?.access, `deny`) ?? `allow`,
      uploads: bt(i?.uploads, a?.uploads, `deny`) ?? `allow`,
      downloads: bt(i?.downloads, a?.downloads, `deny`) ?? `allow`,
      fullCdpAccess: bt(i?.fullCdpAccess, a?.fullCdpAccess, `deny`) ?? `allow`,
      autoReview: bt(i?.autoReview, a?.autoReview, `deny`) ?? `allow`,
      persistentApproval: bt(i?.persistentApproval, a?.persistentApproval, !1) ?? !0,
      accessApprovalLifetime:
        bt(i?.accessApprovalLifetime, a?.accessApprovalLifetime, `turn`) ?? `thread`,
    };
  return o.access === `deny`
    ? { ...o, uploads: `deny`, downloads: `deny`, fullCdpAccess: `deny`, autoReview: `deny` }
    : o;
}
function vt(e, t, n) {
  let r = e.map(([e, t]) => ({ pattern: L(e), policy: t })),
    i = new Map();
  for (let { pattern: e } of r)
    e != null && i.set(e.canonicalKey, (i.get(e.canonicalKey) ?? 0) + 1);
  let a = r.flatMap(({ pattern: e, policy: t }) =>
    e == null || t == null || !fe(e, n)
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
function yt(e) {
  if (e != null)
    return {
      access: e.access,
      uploads: e.uploads,
      downloads: e.downloads,
      fullCdpAccess: e.full_cdp_access,
    };
}
function bt(e, t, n) {
  return e === n || t === n ? n : (e ?? t ?? null);
}
function xt() {
  return (xt = e(() => {
    q();
  }))();
}
function St(e) {
  return [`origin`, `download`, `upload`, ...(e ? [`fullCdp`] : [])];
}
function Ct(e, t, n = null, r, i, a) {
  let o = new Set();
  for (let n of t) {
    for (let t of It(e, n, `allowed`)) o.add(t);
    for (let t of It(e, n, `denied`)) o.add(t);
  }
  let s = Lt.safeParse(a?.config);
  if (a?.name.type === `user` && s.success)
    for (let [e, t] of Object.entries(s.data.browser_use?.origins ?? {})) {
      let n = L(e);
      n != null &&
        t != null &&
        [`access`, `downloads`, `uploads`, `full_cdp_access`].some(
          (e) => t[e] === `allow` || t[e] === `deny`,
        ) &&
        o.add(n.canonicalPattern);
    }
  let c = new Set(o);
  for (let [e, t] of Object.entries(r?.origins ?? {})) {
    let n = L(e);
    t != null && n != null && Object.values(t).some((e) => e != null) && c.add(n.canonicalPattern);
  }
  if (n != null) {
    let e = n.browserUse?.defaultOriginPolicy;
    for (let t of qe(n))
      (e?.access === `deny` ? t.policy.access === `allow` : Mt(t, e)) && c.add(t.pattern);
    for (let e of Fe(n)) {
      if (e.decision !== `deny` && n.network?.managedAllowedDomainsOnly !== !0) continue;
      let t = e.pattern.canonicalPattern.includes(`:`)
          ? `[${e.pattern.canonicalPattern}]`
          : e.pattern.canonicalPattern,
        r = L(`https://${t}`);
      r != null && c.add(r.canonicalPattern);
    }
  }
  return [...c]
    .filter((e) => {
      if (o.has(e) || n == null) return !0;
      let t = Dt(n, e);
      return n.network?.managedAllowedDomainsOnly === !0 && t.length === 0
        ? !1
        : n.browserUse?.defaultOriginPolicy?.access !== `deny` ||
            Pt(e) ||
            Et(n, e).some((e) => e.policy.access === `allow`) ||
            kt(n, e, `origin`);
    })
    .sort((e, t) => Number(o.has(t)) - Number(o.has(e)) || e.localeCompare(t))
    .map((a) => {
      let s = _t(null, r, a),
        c = kt(n, a, `persistentApproval`),
        l = i != null && p(a, i) === `deny`,
        u = {},
        d = Et(n, a),
        f = Dt(n, a),
        m = {};
      for (let e of t) d.some((t) => Nt(n, t, e)) && (m[e] = !0);
      n != null &&
        (f.some(({ decision: e }) => e === `deny`) ||
          (n.network?.managedAllowedDomainsOnly === !0 &&
            f.some(({ decision: e }) => e === `allow`))) &&
        (m.origin = !0);
      let h = (t) => {
        let o = Ft(e, t, a);
        return n == null && r == null && i == null
          ? o
          : At(n, d, a, t)
            ? l || s[jt(t)] === `deny`
              ? ((u[t] = `user`), `denied`)
              : o === `allowed` && !c
                ? `default`
                : o
            : (Me(n, t) || (u[t] = `organization`), `denied`);
      };
      return {
        origin: a,
        values: {
          origin: h(`origin`),
          download: h(`download`),
          upload: h(`upload`),
          fullCdp: h(`fullCdp`),
        },
        ...(Object.keys(u).length === 0 ? {} : { inheritedRestrictions: u }),
        ...(Object.keys(m).length === 0 ? {} : { managedResources: m }),
        hasUserPermissions: o.has(a),
        ...(l ? { networkBlocked: !0 } : {}),
      };
    });
}
function wt(e, t, n) {
  let r = {};
  for (let e of n) {
    let n = {
        origin: `access`,
        download: `downloads`,
        upload: `uploads`,
        fullCdp: `full_cdp_access`,
      },
      i = t[e];
    i === `denied`
      ? (r[n[e]] = `deny`)
      : i === `allowed` || i === `ask`
        ? (r[n[e]] = `allow`)
        : (r[n[e]] = null);
  }
  return { origin: e, policy: r };
}
function Tt({ nextValues: e, origin: t, resources: n, values: r }) {
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
function Et(e, t) {
  if (e == null) return [];
  let n = Ot(t);
  return qe(e).filter((e) => n.some((t) => (Pt(t) ? e.pattern === t : Je(e, t))));
}
function Dt(e, t) {
  if (e == null) return [];
  let n = Ot(t);
  return Fe(e).filter((e) => n.some((t) => Ge(e, t)));
}
function Ot(e) {
  if (e.includes(`://`)) return [e];
  let t = L(`http://${e}`),
    n = L(`https://${e}`);
  return t != null && n != null ? [t.canonicalPattern, n.canonicalPattern] : [];
}
function kt(e, t, n) {
  if (e == null) return !0;
  let r = Ot(t);
  return r.length > 0 && r.every((t) => Ke(e, t, n));
}
function At(e, t, n, r) {
  if (!n.includes(`://`)) {
    let t = Ot(n);
    return t.length > 0 && t.every((t) => At(e, Et(e, t), t, r));
  }
  if (!Pt(n)) return Ke(e, n, r);
  if (e == null) return !0;
  if (
    e.allowBrowserAndComputerUse === !1 ||
    e.network?.enabled === !1 ||
    (e.featureRequirements?.browser_use === !1 && e.featureRequirements.browser_use_external === !1)
  )
    return !1;
  let i = Dt(e, n);
  if (
    i.some(({ decision: e }) => e === `deny`) ||
    (e.network?.managedAllowedDomainsOnly === !0 && !i.some(({ decision: e }) => e === `allow`))
  )
    return !1;
  let a = jt(r),
    o = t.flatMap((e) => {
      let t = e.policy[a];
      return t == null ? [] : [t];
    });
  if (o.includes(`deny`) || o.includes(!1)) return !1;
  if (o.includes(`allow`) || o.includes(!0)) return !0;
  let s = e.browserUse?.defaultOriginPolicy?.[a];
  return s !== `deny` && s !== !1;
}
function jt(e) {
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
function Mt(e, t) {
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
function Nt(e, t, n) {
  let r = t.policy[jt(n)];
  if (r === `deny` || r === !1) return !0;
  if (e == null) return !1;
  let i = e.browserUse?.defaultOriginPolicy?.[jt(n)];
  return (r === `allow` && i === `deny`) || (r === !0 && i === !1);
}
function Pt(e) {
  return e.includes(`*`);
}
function Ft(e, t, n) {
  return It(e, t, `denied`).includes(n)
    ? `denied`
    : It(e, t, `allowed`).includes(n)
      ? `allowed`
      : `default`;
}
function It(e, t, n) {
  switch (t) {
    case `origin`:
      return n === `allowed` ? e.allowedOrigins : e.deniedOrigins;
    case `download`:
      return n === `allowed` ? e.allowedDownloadOrigins : e.deniedDownloadOrigins;
    case `upload`:
      return n === `allowed` ? e.allowedUploadOrigins : e.deniedUploadOrigins;
    case `fullCdp`:
      return n === `allowed` ? e.allowedFullCdpOrigins : e.deniedFullCdpOrigins;
  }
}
var Lt;
function Rt() {
  return (Rt = e(() => {
    (he(),
      xt(),
      Ve(),
      z(),
      (Lt = f({
        browser_use: f({ origins: N(C(), N(C(), A()).nullable()).nullish() }).nullish(),
      })));
  }))();
}
function zt(e) {
  let n = (0, an.c)(24),
    { backend: r } = e,
    i = t(B),
    { selectedHostId: a } = be(),
    { data: s, isError: c, isLoading: l } = o(We),
    { data: u, isPending: d, isError: f } = _(X, a),
    p;
  n[0] === a ? (p = n[1]) : ((p = { failClosed: !0, hostId: a }), (n[0] = a), (n[1] = p));
  let { data: m, isError: h, isPending: g } = _(T, p),
    v = m?.requirements ?? null,
    y = u?.configReadSucceeded === !0 ? u.config.browser_use : null,
    b = s?.fullCdpAccessEnabled === !0,
    x = c || h || f || u?.configReadSucceeded === !1,
    S = l || g || d,
    C;
  n[2] !== m?.requirements?.featureRequirements || n[3] !== h || n[4] !== g || n[5] !== b
    ? ((C = b && !h && !g && !V(m?.requirements?.featureRequirements?.browser_use_full_cdp_access)),
      (n[2] = m?.requirements?.featureRequirements),
      (n[3] = h),
      (n[4] = g),
      (n[5] = b),
      (n[6] = C))
    : (C = n[6]);
  let w = C,
    E = u?.userConfigLayer,
    D = u?.config,
    O;
  n[7] === D ? (O = n[8]) : ((O = ze(D)), (n[7] = D), (n[8] = O));
  let k;
  n[9] !== i || n[10] !== a || n[11] !== u
    ? ((k = (e) => {
        Ue(i, a, u, e).catch(() => {
          i.get(G).danger(rn(), {
            errorAnalytics: {
              toastId: `browserUsePolicySitePermissions.BrowserUseSitePermissionsGroup`,
            },
          });
        });
      }),
      (n[9] = i),
      (n[10] = a),
      (n[11] = u),
      (n[12] = k))
    : (k = n[12]);
  let A;
  return (
    n[13] !== r ||
    n[14] !== v ||
    n[15] !== x ||
    n[16] !== w ||
    n[17] !== S ||
    n[18] !== s ||
    n[19] !== E ||
    n[20] !== O ||
    n[21] !== k ||
    n[22] !== y
      ? ((A = (0, $.jsx)(Bt, {
          backend: r,
          enterprisePolicy: v,
          originsConfig: s,
          isError: x,
          isFullCdpAccessEnabled: w,
          isLoading: S,
          userConfig: y,
          userConfigLayer: E,
          userNetworkPolicy: O,
          onDefaultPermissionChange: k,
        })),
        (n[13] = r),
        (n[14] = v),
        (n[15] = x),
        (n[16] = w),
        (n[17] = S),
        (n[18] = s),
        (n[19] = E),
        (n[20] = O),
        (n[21] = k),
        (n[22] = y),
        (n[23] = A))
      : (A = n[23]),
    A
  );
}
function Bt(e) {
  let t = (0, an.c)(9),
    { selectedHostId: n } = be(),
    r = Le(n),
    i = He(),
    a = Ie(),
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
            updates: Object.values(cn).flatMap((e) =>
              [`allowed`, `denied`].map((t) => ({
                action: `remove`,
                kind: t,
                origin: n,
                resource: e,
              })),
            ),
            configUpdate: L(n) == null ? void 0 : { origin: n, policy: null },
          });
          return;
        }
        await r.mutateAsync({
          updates: Tt({ nextValues: i, origin: n, resources: a, values: o }),
          configUpdate: wt(
            n,
            i,
            t === `add` ? a.filter((e) => e === `origin` || i[e] !== "default") : a,
          ),
        });
      }),
      (t[3] = r),
      (t[4] = s));
  let c;
  return (
    t[5] !== e || t[6] !== o || t[7] !== s
      ? ((c = (0, $.jsx)(Vt, { ...e, onApprovalModeChange: o, onSitePermissionsChange: s })),
        (t[5] = e),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function Vt(e) {
  let t = (0, an.c)(69),
    {
      backend: n,
      disabled: r,
      enterprisePolicy: i,
      isError: a,
      isFullCdpAccessEnabled: o,
      isLoading: s,
      onDefaultPermissionChange: c,
      onApprovalModeChange: l,
      onSitePermissionsChange: u,
      parseOrigin: d,
      originsConfig: f,
      userConfig: p,
      userConfigLayer: m,
      userNetworkPolicy: h,
      supportsRequiresApproval: g,
      supportsClearingDefaultsOnAdd: _,
    } = e,
    v = n === void 0 ? `iab` : n,
    y = r !== void 0 && r,
    b = i === void 0 ? null : i,
    x = g === void 0 || g,
    S = _ !== void 0 && _,
    [C, w] = (0, on.useState)(!1),
    T = v === `iab` ? `iab` : `extension`,
    E;
  t[0] !== b || t[1] !== T ? ((E = Pe(b, T)), (t[0] = b), (t[1] = T), (t[2] = E)) : (E = t[2]);
  let O = E,
    k,
    A,
    j,
    M;
  if (
    t[3] !== O ||
    t[4] !== b ||
    t[5] !== o ||
    t[6] !== f ||
    t[7] !== p ||
    t[8] !== m ||
    t[9] !== h
  ) {
    ((M = St(o)), (A = f == null ? null : Ct(f, M, b, p, h, m)));
    let e =
        b?.browserUse?.defaultOriginPolicy?.access === `deny` ||
        b?.network?.managedAllowedDomainsOnly === !0,
      n = !O || b?.allowBrowserAndComputerUse === !1 || b?.network?.enabled === !1,
      r;
    (t[14] === b
      ? (r = t[15])
      : ((r = b != null && (qe(b).some(Ut) || Fe(b).some(Ht))), (t[14] = b), (t[15] = r)),
      (k = n || (e && !r)),
      (j = Ne(b) && (k || M.some((e) => !Me(b, e)) || Wt(b))),
      (t[3] = O),
      (t[4] = b),
      (t[5] = o),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = k),
      (t[11] = A),
      (t[12] = j),
      (t[13] = M));
  } else ((k = t[10]), (A = t[11]), (j = t[12]), (M = t[13]));
  let N = j,
    F = y || a || s || A == null || k,
    I;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        w(!0);
      }),
      (t[16] = I))
    : (I = t[16]);
  let L;
  t[17] === k
    ? (L = t[18])
    : ((L = k ? (0, $.jsx)(le, {}) : (0, $.jsx)(D, { "aria-hidden": !1, asset: Y })),
      (t[17] = k),
      (t[18] = L));
  let z;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(P, {
        id: `settings.browserUse.domains.add`,
        defaultMessage: `Add`,
        description: `Button label to add a browser use domain`,
      })),
      (t[19] = z))
    : (z = t[19]);
  let B;
  t[20] !== L || t[21] !== F
    ? ((B = (0, $.jsxs)(R, {
        color: `secondary`,
        disabled: F,
        size: `toolbar`,
        onClick: I,
        children: [L, z],
      })),
      (t[20] = L),
      (t[21] = F),
      (t[22] = B))
    : (B = t[22]);
  let V;
  t[23] !== k || t[24] !== B
    ? ((V = (0, $.jsx)(Xe, { managed: k, children: B })), (t[23] = k), (t[24] = B), (t[25] = V))
    : (V = t[25]);
  let H, U;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, $.jsx)(P, {
        id: `settings.browserUse.policy.agentPermissions.title`,
        defaultMessage: `Agent permissions`,
        description: `Title for browser use site permissions table`,
      })),
      (U = (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.matrixSubtitle`,
        defaultMessage: `Choose default permissions and add exceptions for specific sites`,
        description: `Subtitle for the browser site permissions matrix with defaults and site-specific overrides`,
      })),
      (t[26] = H),
      (t[27] = U))
    : ((H = t[26]), (U = t[27]));
  let W;
  t[28] === V
    ? (W = t[29])
    : ((W = (0, $.jsx)(Se.Header, { size: `base`, actions: V, title: H, subtitle: U })),
      (t[28] = V),
      (t[29] = W));
  let G;
  t[30] !== O ||
  t[31] !== y ||
  t[32] !== b ||
  t[33] !== a ||
  t[34] !== s ||
  t[35] !== l ||
  t[36] !== c ||
  t[37] !== u ||
  t[38] !== f ||
  t[39] !== A ||
  t[40] !== x ||
  t[41] !== p ||
  t[42] !== M
    ? ((G = (0, $.jsx)(Se.Content, {
        children: a
          ? (0, $.jsx)(ce, {
              children: (0, $.jsx)(Te, {
                layout: `settings-row`,
                children: (0, $.jsx)(P, {
                  id: `settings.browserUse.sitePermissions.loadError`,
                  defaultMessage: `Unable to load site permissions`,
                  description: `Message shown when browser site permissions fail to load`,
                }),
              }),
            })
          : s || A == null || f == null
            ? (0, $.jsx)(ce, {
                children: (0, $.jsx)(Ae, {
                  children: (0, $.jsx)(P, {
                    id: `settings.browserUse.sitePermissions.loading`,
                    defaultMessage: `Loading websites…`,
                    description: `Message shown while loading browser site permissions`,
                  }),
                }),
              })
            : (0, $.jsx)(Gt, {
                browserClientAllowed: O,
                disabled: y,
                enterprisePolicy: b,
                onDefaultPermissionChange: c,
                onApprovalModeChange: l,
                onSitePermissionsChange: u,
                supportsRequiresApproval: x,
                originsConfig: f,
                rows: A,
                userConfig: p,
                visibleResources: M,
              }),
      })),
      (t[30] = O),
      (t[31] = y),
      (t[32] = b),
      (t[33] = a),
      (t[34] = s),
      (t[35] = l),
      (t[36] = c),
      (t[37] = u),
      (t[38] = f),
      (t[39] = A),
      (t[40] = x),
      (t[41] = p),
      (t[42] = M),
      (t[43] = G))
    : (G = t[43]);
  let K;
  t[44] !== a || t[45] !== s || t[46] !== A
    ? ((K =
        !a && !s && A != null
          ? (0, $.jsx)(Se.Footer, {
              children: (0, $.jsx)(P, {
                id: `settings.browserUse.sitePermissions.customPermissionsFooter`,
                defaultMessage: `Only sites with custom permissions appear here`,
                description: `Explains why sites without permission exceptions are absent from the table`,
              }),
            })
          : null),
      (t[44] = a),
      (t[45] = s),
      (t[46] = A),
      (t[47] = K))
    : (K = t[47]);
  let q;
  t[48] !== N || t[49] !== a || t[50] !== s || t[51] !== A
    ? ((q =
        !a && !s && A != null && N
          ? (0, $.jsx)(Se.Footer, {
              children: (0, $.jsxs)(`span`, {
                className: `inline-flex items-center gap-1.5`,
                children: [
                  (0, $.jsx)(le, {}),
                  (0, $.jsx)(P, {
                    id: `settings.browserUse.sitePermissions.managedLegend`,
                    defaultMessage: `Managed by your organization`,
                    description: `Legend explaining the lock icons shown on browser permissions controlled by an enterprise organization`,
                  }),
                ],
              }),
            })
          : null),
      (t[48] = N),
      (t[49] = a),
      (t[50] = s),
      (t[51] = A),
      (t[52] = q))
    : (q = t[52]);
  let ee;
  t[53] !== y ||
  t[54] !== b ||
  t[55] !== C ||
  t[56] !== u ||
  t[57] !== f ||
  t[58] !== d ||
  t[59] !== S ||
  t[60] !== x ||
  t[61] !== M
    ? ((ee =
        f == null
          ? null
          : (0, $.jsx)(Qt, {
              disabled: y,
              enterprisePolicy: b,
              open: C,
              originsConfig: f,
              onSitePermissionsChange: u,
              parseOrigin: d,
              supportsRequiresApproval: x,
              supportsClearingDefaultsOnAdd: S,
              visibleResources: M,
              onOpenChange: w,
            })),
      (t[53] = y),
      (t[54] = b),
      (t[55] = C),
      (t[56] = u),
      (t[57] = f),
      (t[58] = d),
      (t[59] = S),
      (t[60] = x),
      (t[61] = M),
      (t[62] = ee))
    : (ee = t[62]);
  let te;
  return (
    t[63] !== W || t[64] !== G || t[65] !== K || t[66] !== q || t[67] !== ee
      ? ((te = (0, $.jsxs)(Se, { children: [W, G, K, q, ee] })),
        (t[63] = W),
        (t[64] = G),
        (t[65] = K),
        (t[66] = q),
        (t[67] = ee),
        (t[68] = te))
      : (te = t[68]),
    te
  );
}
function Ht(e) {
  let { decision: t, pattern: n } = e;
  return t === `allow` && n.canonicalPattern.includes(`*`);
}
function Ut(e) {
  let { pattern: t, policy: n } = e;
  return n.access === `allow` && t.includes(`*`);
}
function Wt(e) {
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
    Fe(e).some(({ decision: e }) => e === `deny`) ||
    qe(e).some((e) => Mt(e, t))
  );
}
function Gt(e) {
  let t = (0, an.c)(22),
    {
      browserClientAllowed: n,
      disabled: r,
      enterprisePolicy: i,
      onDefaultPermissionChange: a,
      onApprovalModeChange: o,
      onSitePermissionsChange: s,
      originsConfig: c,
      rows: l,
      userConfig: u,
      visibleResources: d,
      supportsRequiresApproval: f,
    } = e,
    p;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o || t[4] !== a || t[5] !== c || t[6] !== u
    ? ((p = (e) =>
        (0, $.jsxs)(`tr`, {
          children: [
            (0, $.jsx)(`td`, {
              className: `px-3 py-3 font-medium`,
              children: (0, $.jsx)(`span`, {
                id: `browser-use-site-permissions-default`,
                children: (0, $.jsx)(P, {
                  id: `settings.browserUse.sitePermissions.matrix.defaultRow`,
                  defaultMessage: `Default`,
                  description: `Label for the default browser site permissions matrix row`,
                }),
              }),
            }),
            (0, $.jsx)(pt, {
              browserClientAllowed: n,
              disabled: r,
              enterprisePolicy: i,
              originsConfig: c,
              userConfig: u,
              visibleResources: e,
              onChange: a,
              onApprovalModeChange: o,
            }),
            (0, $.jsx)(`td`, { "aria-hidden": !0 }),
          ],
        })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = a),
      (t[5] = c),
      (t[6] = u),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== n ||
  t[9] !== r ||
  t[10] !== i ||
  t[11] !== s ||
  t[12] !== c ||
  t[13] !== l ||
  t[14] !== f ||
  t[15] !== u ||
  t[16] !== d
    ? ((m = (e) =>
        (0, $.jsx)(`tbody`, {
          children: l.map((t, a) =>
            (0, $.jsx)(
              Kt,
              {
                allResources: d,
                browserClientAllowed: n,
                disabled: r,
                enterprisePolicy: i,
                originsConfig: c,
                onSitePermissionsChange: s,
                row: t,
                rowIndex: a,
                userConfig: u,
                visibleResources: e,
                supportsRequiresApproval: f,
              },
              t.origin,
            ),
          ),
        })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = i),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = f),
      (t[15] = u),
      (t[16] = d),
      (t[17] = m))
    : (m = t[17]);
  let h;
  return (
    t[18] !== p || t[19] !== m || t[20] !== d
      ? ((h = (0, $.jsx)(ot, { resources: d, defaultRow: p, children: m })),
        (t[18] = p),
        (t[19] = m),
        (t[20] = d),
        (t[21] = h))
      : (h = t[21]),
    h
  );
}
function Kt(e) {
  let t = (0, an.c)(44),
    {
      allResources: n,
      browserClientAllowed: r,
      disabled: i,
      enterprisePolicy: a,
      originsConfig: o,
      onSitePermissionsChange: s,
      row: c,
      rowIndex: l,
      userConfig: u,
      visibleResources: d,
      supportsRequiresApproval: f,
    } = e,
    p = `browser-use-site-permissions-origin-${l}`,
    m;
  t[0] !== c.origin || t[1] !== p
    ? ((m = (0, $.jsx)(`span`, {
        className: `flex min-w-0 items-center gap-2`,
        children: (0, $.jsx)(`span`, {
          "data-tooltip-overflow-target": !0,
          className: `block min-w-0 truncate text-sm font-medium`,
          id: p,
          children: c.origin,
        }),
      })),
      (t[0] = c.origin),
      (t[1] = p),
      (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== c.origin || t[4] !== m
    ? ((h = (0, $.jsx)(w, {
        tooltipContent: c.origin,
        openWhen: `trigger-overflows`,
        children: m,
      })),
      (t[3] = c.origin),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let g;
  t[6] === c.networkBlocked
    ? (g = t[7])
    : ((g = c.networkBlocked
        ? (0, $.jsx)(`span`, {
            className: `text-xs text-secondary`,
            children: (0, $.jsx)(P, {
              id: `settings.browserUse.sitePermissions.networkBlocked`,
              defaultMessage: `Blocked by your network configuration`,
              description: `Explains why a site permission is unavailable due to the selected user network permission profile`,
            }),
          })
        : null),
      (t[6] = c.networkBlocked),
      (t[7] = g));
  let _;
  t[8] !== p || t[9] !== h || t[10] !== g
    ? ((_ = (0, $.jsxs)(`td`, { "aria-labelledby": p, className: `px-3 py-3`, children: [h, g] })),
      (t[8] = p),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  if (
    t[12] !== r ||
    t[13] !== i ||
    t[14] !== a ||
    t[15] !== s ||
    t[16] !== o ||
    t[17] !== c ||
    t[18] !== l ||
    t[19] !== p ||
    t[20] !== f ||
    t[21] !== u ||
    t[22] !== d
  ) {
    let e;
    (t[24] !== r ||
    t[25] !== i ||
    t[26] !== a ||
    t[27] !== s ||
    t[28] !== o ||
    t[29] !== c ||
    t[30] !== l ||
    t[31] !== p ||
    t[32] !== f ||
    t[33] !== u
      ? ((e = (e) =>
          (0, $.jsx)(
            `td`,
            {
              className: `px-2 py-3`,
              children: (0, $.jsx)(ct, {
                children:
                  e !== `origin` && (!r || c.values.origin === `denied`)
                    ? (0, $.jsx)(`span`, {
                        "aria-hidden": !0,
                        className: `inline-flex h-token-button-composer items-center text-secondary`,
                        children: (0, $.jsx)(P, {
                          id: `settings.browserUse.sitePermissions.matrix.unavailableValue`,
                          defaultMessage: `—`,
                          description: `Visual placeholder for a site capability that does not apply because browsing is blocked`,
                        }),
                      })
                    : (0, $.jsx)(qt, {
                        browserClientAllowed: r,
                        disabled: i,
                        enterprisePolicy: a,
                        originsConfig: o,
                        onSitePermissionsChange: s,
                        resource: e,
                        row: c,
                        rowIndex: l,
                        rowLabelId: p,
                        userConfig: u,
                        supportsRequiresApproval: f,
                      }),
              }),
            },
            e,
          )),
        (t[24] = r),
        (t[25] = i),
        (t[26] = a),
        (t[27] = s),
        (t[28] = o),
        (t[29] = c),
        (t[30] = l),
        (t[31] = p),
        (t[32] = f),
        (t[33] = u),
        (t[34] = e))
      : (e = t[34]),
      (v = d.map(e)),
      (t[12] = r),
      (t[13] = i),
      (t[14] = a),
      (t[15] = s),
      (t[16] = o),
      (t[17] = c),
      (t[18] = l),
      (t[19] = p),
      (t[20] = f),
      (t[21] = u),
      (t[22] = d),
      (t[23] = v));
  } else v = t[23];
  let y;
  t[35] !== n || t[36] !== i || t[37] !== s || t[38] !== c
    ? ((y = (0, $.jsx)(`td`, {
        className: `px-2 py-3`,
        children: (0, $.jsx)(Zt, { disabled: i, onSitePermissionsChange: s, row: c, resources: n }),
      })),
      (t[35] = n),
      (t[36] = i),
      (t[37] = s),
      (t[38] = c),
      (t[39] = y))
    : (y = t[39]);
  let b;
  return (
    t[40] !== _ || t[41] !== v || t[42] !== y
      ? ((b = (0, $.jsxs)(`tr`, { children: [_, v, y] })),
        (t[40] = _),
        (t[41] = v),
        (t[42] = y),
        (t[43] = b))
      : (b = t[43]),
    b
  );
}
function qt(e) {
  let n = (0, an.c)(63),
    {
      browserClientAllowed: r,
      disabled: i,
      enterprisePolicy: a,
      originsConfig: o,
      onSitePermissionsChange: s,
      resource: c,
      row: l,
      rowIndex: u,
      rowLabelId: d,
      userConfig: f,
      supportsRequiresApproval: p,
    } = e,
    m = t(B),
    [h, g] = (0, on.useState)(!1),
    _;
  n[0] !== c || n[1] !== l.managedResources || n[2] !== l.origin
    ? ((_ = l.origin.includes(`*`) && l.managedResources?.[c] === !0),
      (n[0] = c),
      (n[1] = l.managedResources),
      (n[2] = l.origin),
      (n[3] = _))
    : (_ = n[3]);
  let v = _,
    y;
  n[4] !== r || n[5] !== a || n[6] !== v || n[7] !== c || n[8] !== l.origin
    ? ((y = r && !v && kt(a, l.origin, c)),
      (n[4] = r),
      (n[5] = a),
      (n[6] = v),
      (n[7] = c),
      (n[8] = l.origin),
      (n[9] = y))
    : (y = n[9]);
  let b = y,
    x = v || l.inheritedRestrictions?.[c] === `organization` || !b,
    S;
  n[10] !== b || n[11] !== a || n[12] !== l.origin
    ? ((S = b && kt(a, l.origin, `persistentApproval`)),
      (n[10] = b),
      (n[11] = a),
      (n[12] = l.origin),
      (n[13] = S))
    : (S = n[13]);
  let C = S,
    w;
  n[14] !== a || n[15] !== o || n[16] !== c || n[17] !== l.origin
    ? ((w = tn(o, c, a, l.origin)),
      (n[14] = a),
      (n[15] = o),
      (n[16] = c),
      (n[17] = l.origin),
      (n[18] = w))
    : (w = n[18]);
  let T = w,
    E;
  n[19] !== c || n[20] !== l.origin || n[21] !== f?.origins
    ? ((E = Object.entries(f?.origins ?? {}).some((e) => {
        let [t, n] = e;
        return L(t)?.canonicalPattern === l.origin && Re(n, c) != null;
      })),
      (n[19] = c),
      (n[20] = l.origin),
      (n[21] = f?.origins),
      (n[22] = E))
    : (E = n[22]);
  let D = E,
    O;
  n[23] !== o || n[24] !== c || n[25] !== l.origin
    ? ((O = Ft(o, c, l.origin)), (n[23] = o), (n[24] = c), (n[25] = l.origin), (n[26] = O))
    : (O = n[26]);
  let k = O,
    A =
      !x &&
      !l.networkBlocked &&
      !D &&
      (l.values[c] === "default" || (l.inheritedRestrictions?.[c] === `user` && k !== `denied`)),
    j;
  n[27] !== T || n[28] !== D || n[29] !== A || n[30] !== c || n[31] !== l.values
    ? ((j = l.values[c]),
      A ? (j = `default`) : j === "default" && D && (j = T === `neverAsk` ? `allowed` : `ask`),
      (n[27] = T),
      (n[28] = D),
      (n[29] = A),
      (n[30] = c),
      (n[31] = l.values),
      (n[32] = j))
    : (j = n[32]);
  let M = A ? l.values[c] : j,
    N;
  n[33] !== C ||
  n[34] !== T ||
  n[35] !== i ||
  n[36] !== x ||
  n[37] !== h ||
  n[38] !== s ||
  n[39] !== c ||
  n[40] !== l.networkBlocked ||
  n[41] !== l.origin ||
  n[42] !== l.values ||
  n[43] !== k ||
  n[44] !== m ||
  n[45] !== j
    ? ((N = async (e) => {
        (e === j && (e !== `allowed` || k === `allowed`)) ||
          i ||
          h ||
          x ||
          l.networkBlocked ||
          (e === `ask` && T === `neverAsk`) ||
          (e === `allowed` && !C) ||
          (g(!0),
          await (async () => {
            try {
              await s({
                operation: `update`,
                nextValues: { ...l.values, [c]: e },
                origin: l.origin,
                resources: [c],
                values: { ...l.values, [c]: k },
              });
            } catch {
              m.get(G).danger(rn(), {
                errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSelect` },
              });
            }
          })().finally(() => {
            g(!1);
          }));
      }),
      (n[33] = C),
      (n[34] = T),
      (n[35] = i),
      (n[36] = x),
      (n[37] = h),
      (n[38] = s),
      (n[39] = c),
      (n[40] = l.networkBlocked),
      (n[41] = l.origin),
      (n[42] = l.values),
      (n[43] = k),
      (n[44] = m),
      (n[45] = j),
      (n[46] = N))
    : (N = n[46]);
  let P = N,
    F = i || h || x || l.networkBlocked,
    I = `browser-use-site-permissions-column-${c}`,
    R = r ? M : `denied`,
    z = `browser-use-site-permissions-${u}-${c}-value`,
    V;
  n[47] === P
    ? (V = n[48])
    : ((V = (e) => {
        P(e);
      }),
      (n[47] = P),
      (n[48] = V));
  let H;
  return (
    n[49] !== C ||
    n[50] !== T ||
    n[51] !== A ||
    n[52] !== x ||
    n[53] !== h ||
    n[54] !== c ||
    n[55] !== d ||
    n[56] !== p ||
    n[57] !== R ||
    n[58] !== z ||
    n[59] !== V ||
    n[60] !== F ||
    n[61] !== I
      ? ((H = (0, $.jsx)(Yt, {
          allowAllowed: C,
          contextId: d,
          defaultApprovalMode: T,
          disabled: F,
          loading: h,
          inherited: A,
          labelId: I,
          managed: x,
          resource: c,
          supportsRequiresApproval: p,
          value: R,
          valueId: z,
          onSelect: V,
        })),
        (n[49] = C),
        (n[50] = T),
        (n[51] = A),
        (n[52] = x),
        (n[53] = h),
        (n[54] = c),
        (n[55] = d),
        (n[56] = p),
        (n[57] = R),
        (n[58] = z),
        (n[59] = V),
        (n[60] = F),
        (n[61] = I),
        (n[62] = H))
      : (H = n[62]),
    H
  );
}
function Jt(e) {
  let t = (0, an.c)(6),
    { value: n } = e,
    r = n === `allowed` && `bg-chart-green`,
    i = n === `denied` && `bg-text-danger`,
    a = (n === "default" || n === `ask`) && `bg-text-tertiary`,
    o;
  t[0] !== r || t[1] !== i || t[2] !== a
    ? ((o = ae(`size-2 shrink-0 rounded-full`, r, i, a)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === o ? (s = t[5]) : ((s = (0, $.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s)),
    s
  );
}
function Yt(e) {
  let t = (0, an.c)(49),
    {
      allowAllowed: n,
      allowRequiresApproval: r,
      contextId: i,
      defaultApprovalMode: a,
      disabled: o,
      inherited: s,
      labelId: c,
      loading: l,
      managed: u,
      onSelect: f,
      resource: p,
      supportsRequiresApproval: m,
      value: h,
      valueId: g,
      variant: _,
    } = e,
    v = n === void 0 || n,
    y = r === void 0 || r,
    b = u !== void 0 && u,
    x = m === void 0 || m,
    S = _ === void 0 ? `default` : _,
    C = H(),
    T = !b && (s ?? h === "default"),
    E;
  t[0] !== C || t[1] !== T
    ? ((E = T
        ? C.formatMessage({
            id: `settings.browserUse.sitePermissions.inheritedDescription`,
            defaultMessage: `Uses the default permission`,
            description: `Accessible description and tooltip for an editable browser site permission inherited from its defaults`,
          })
        : void 0),
      (t[0] = C),
      (t[1] = T),
      (t[2] = E))
    : (E = t[2]);
  let D = E,
    O = S === `form` ? `h-9! w-full px-2.5!` : void 0,
    k;
  t[3] !== i || t[4] !== c || t[5] !== g
    ? ((k = [c, i, g].filter(Xt)), (t[3] = i), (t[4] = c), (t[5] = g), (t[6] = k))
    : (k = t[6]);
  let A = k.join(` `),
    j = S === `form` ? `small` : void 0,
    N;
  t[7] === b
    ? (N = t[8])
    : ((N = b ? (0, $.jsx)(le, { className: `text-secondary` }) : null), (t[7] = b), (t[8] = N));
  let F = T && `text-secondary`,
    I;
  t[9] === F ? (I = t[10]) : ((I = ae(`truncate`, F)), (t[9] = F), (t[10] = I));
  let L = s ? a : void 0,
    R;
  t[11] !== p || t[12] !== L || t[13] !== h
    ? ((R = nn(h, p, L)), (t[11] = p), (t[12] = L), (t[13] = h), (t[14] = R))
    : (R = t[14]);
  let z;
  t[15] !== I || t[16] !== R || t[17] !== g
    ? ((z = (0, $.jsx)(`span`, { id: g, className: I, children: R })),
      (t[15] = I),
      (t[16] = R),
      (t[17] = g),
      (t[18] = z))
    : (z = t[18]);
  let B;
  t[19] !== o ||
  t[20] !== D ||
  t[21] !== l ||
  t[22] !== j ||
  t[23] !== N ||
  t[24] !== z ||
  t[25] !== O ||
  t[26] !== A
    ? ((B = (0, $.jsxs)(_e, {
        className: O,
        "aria-description": D,
        "aria-labelledby": A,
        disabled: o,
        loading: l,
        radius: j,
        children: [N, z],
      })),
      (t[19] = o),
      (t[20] = D),
      (t[21] = l),
      (t[22] = j),
      (t[23] = N),
      (t[24] = z),
      (t[25] = O),
      (t[26] = A),
      (t[27] = B))
    : (B = t[27]);
  let V = B,
    U;
  t[28] !== D || t[29] !== V
    ? ((U =
        D == null ? V : (0, $.jsx)(w, { cloneCustomTrigger: !0, tooltipContent: D, children: V })),
      (t[28] = D),
      (t[29] = V),
      (t[30] = U))
    : (U = t[30]);
  let W;
  t[31] !== v ||
  t[32] !== y ||
  t[33] !== a ||
  t[34] !== f ||
  t[35] !== p ||
  t[36] !== x ||
  t[37] !== T ||
  t[38] !== h
    ? ((W = sn.map((e) => {
        if (e === `ask` && !x) return null;
        let t = (e === `allowed` && !v) || (e === `ask` && !y),
          n = e === `ask` && a === `neverAsk`,
          r;
        return (
          t
            ? (r = (0, $.jsx)(Ze, {}))
            : n &&
              (r = (0, $.jsx)(P, {
                id: `settings.browserUse.sitePermissions.requiresApprovalUnavailable`,
                defaultMessage: `Change the default from Always allow before requiring approval for individual sites`,
                description: `Explains that the current browser approval storage cannot override a global Always allow setting for one site`,
              })),
          (0, $.jsx)(
            M.Item,
            {
              rightIconAsset: e === (T ? `default` : h) && (T || h !== "default") ? K : void 0,
              disabled: t || n,
              tooltipText: r,
              onSelect: () => {
                f(e);
              },
              children: (0, $.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, $.jsx)(Jt, { value: e }),
                  (0, $.jsx)(`span`, { className: `truncate`, children: nn(e, p) }),
                ],
              }),
            },
            e,
          )
        );
      })),
      (t[31] = v),
      (t[32] = y),
      (t[33] = a),
      (t[34] = f),
      (t[35] = p),
      (t[36] = x),
      (t[37] = T),
      (t[38] = h),
      (t[39] = W))
    : (W = t[39]);
  let G;
  t[40] === W
    ? (G = t[41])
    : ((G = (0, $.jsx)(`div`, { className: `flex flex-col`, children: W })),
      (t[40] = W),
      (t[41] = G));
  let q;
  t[42] !== o || t[43] !== U || t[44] !== G
    ? ((q = (0, $.jsx)(d, {
        align: `end`,
        contentWidth: `sm`,
        disabled: o,
        triggerButton: U,
        children: G,
      })),
      (t[42] = o),
      (t[43] = U),
      (t[44] = G),
      (t[45] = q))
    : (q = t[45]);
  let ee;
  return (
    t[46] !== b || t[47] !== q
      ? ((ee = (0, $.jsx)(Xe, { managed: b, children: q })), (t[46] = b), (t[47] = q), (t[48] = ee))
      : (ee = t[48]),
    ee
  );
}
function Xt(e) {
  return e != null;
}
function Zt(e) {
  let n = (0, an.c)(52),
    { disabled: r, onSitePermissionsChange: i, resources: a, row: o } = e,
    s = t(B),
    l = H(),
    [u, d] = (0, on.useState)(!1),
    [f, p] = (0, on.useState)(!1),
    m;
  n[0] !== r ||
  n[1] !== f ||
  n[2] !== i ||
  n[3] !== a ||
  n[4] !== o.hasUserPermissions ||
  n[5] !== o.origin ||
  n[6] !== o.values ||
  n[7] !== s
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
                nextValues: un,
                resources: a,
                values: o.values,
              }),
                d(!1));
            } catch {
              s.get(G).danger(rn(), {
                errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleClear` },
              });
            }
          })().finally(() => {
            p(!1);
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
      (n[8] = m))
    : (m = n[8]);
  let h = m,
    _;
  n[9] !== o.hasUserPermissions || n[10] !== o.inheritedRestrictions || n[11] !== o.managedResources
    ? ((_ =
        !o.hasUserPermissions &&
        (o.managedResources != null ||
          Object.values(o.inheritedRestrictions ?? {}).includes(`organization`))),
      (n[9] = o.hasUserPermissions),
      (n[10] = o.inheritedRestrictions),
      (n[11] = o.managedResources),
      (n[12] = _))
    : (_ = n[12]);
  let y;
  n[13] !== l || n[14] !== o.origin
    ? ((y = l.formatMessage(
        {
          id: `settings.browserUse.sitePermissions.clearAriaLabel`,
          defaultMessage: `Remove custom permissions for {origin}`,
          description: `Aria label for button that removes all custom browser site permissions`,
        },
        { origin: o.origin },
      )),
      (n[13] = l),
      (n[14] = o.origin),
      (n[15] = y))
    : (y = n[15]);
  let b = r || f || !o.hasUserPermissions,
    S;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = () => {
        d(!0);
      }),
      (n[16] = S))
    : (S = n[16]);
  let C;
  n[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(De, { className: `icon-2xs` })), (n[17] = C))
    : (C = n[17]);
  let w;
  n[18] !== y || n[19] !== b
    ? ((w = (0, $.jsx)(R, {
        "aria-label": y,
        color: `ghost`,
        disabled: b,
        onClick: S,
        size: `icon`,
        children: C,
      })),
      (n[18] = y),
      (n[19] = b),
      (n[20] = w))
    : (w = n[20]);
  let T;
  n[21] !== _ || n[22] !== w
    ? ((T = (0, $.jsx)(Xe, { managed: _, children: w })), (n[21] = _), (n[22] = w), (n[23] = T))
    : (T = n[23]);
  let E;
  n[24] === h
    ? (E = n[25])
    : ((E = (e) => {
        (e.preventDefault(), h());
      }),
      (n[24] = h),
      (n[25] = E));
  let D;
  n[26] === o.origin
    ? (D = n[27])
    : ((D = (0, $.jsx)(c, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(P, {
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
    ? ((O = (0, $.jsx)(k, {
        asChild: !0,
        children: (0, $.jsx)(`span`, {
          children: (0, $.jsx)(P, {
            id: `settings.browserUse.sitePermissions.removeDialog.subtitle`,
            defaultMessage: `This resets this site's custom permissions to their defaults`,
            description: `Confirmation dialog subtitle for removing custom browser site permissions`,
          }),
        }),
      })),
      (n[28] = O))
    : (O = n[28]);
  let A;
  n[29] === D
    ? (A = n[30])
    : ((A = (0, $.jsx)(x, { children: (0, $.jsx)(v, { title: D, subtitle: O }) })),
      (n[29] = D),
      (n[30] = A));
  let j;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => {
        d(!1);
      }),
      (n[31] = j))
    : (j = n[31]);
  let M;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for removing custom browser site permissions`,
      })),
      (n[32] = M))
    : (M = n[32]);
  let N;
  n[33] === f
    ? (N = n[34])
    : ((N = (0, $.jsx)(R, {
        color: `ghost`,
        disabled: f,
        onClick: j,
        type: `button`,
        children: M,
      })),
      (n[33] = f),
      (n[34] = N));
  let F;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing custom browser site permissions`,
      })),
      (n[35] = F))
    : (F = n[35]);
  let I;
  n[36] !== r || n[37] !== f
    ? ((I = (0, $.jsx)(R, {
        color: `danger`,
        disabled: r,
        loading: f,
        type: `submit`,
        children: F,
      })),
      (n[36] = r),
      (n[37] = f),
      (n[38] = I))
    : (I = n[38]);
  let L;
  n[39] !== N || n[40] !== I
    ? ((L = (0, $.jsx)(x, { children: (0, $.jsxs)(g, { children: [N, I] }) })),
      (n[39] = N),
      (n[40] = I),
      (n[41] = L))
    : (L = n[41]);
  let z;
  n[42] !== A || n[43] !== L || n[44] !== E
    ? ((z = (0, $.jsxs)(ee, { as: `form`, onSubmit: E, children: [A, L] })),
      (n[42] = A),
      (n[43] = L),
      (n[44] = E),
      (n[45] = z))
    : (z = n[45]);
  let V;
  n[46] !== u || n[47] !== z
    ? ((V = (0, $.jsx)(ge, { open: u, onOpenChange: d, size: `compact`, children: z })),
      (n[46] = u),
      (n[47] = z),
      (n[48] = V))
    : (V = n[48]);
  let U;
  return (
    n[49] !== V || n[50] !== T
      ? ((U = (0, $.jsxs)($.Fragment, { children: [T, V] })), (n[49] = V), (n[50] = T), (n[51] = U))
      : (U = n[51]),
    U
  );
}
function Qt(e) {
  let n = (0, an.c)(104),
    {
      disabled: r,
      enterprisePolicy: i,
      onOpenChange: a,
      open: o,
      originsConfig: s,
      onSitePermissionsChange: l,
      parseOrigin: u,
      supportsRequiresApproval: d,
      supportsClearingDefaultsOnAdd: f,
      visibleResources: p,
    } = e,
    m = t(B),
    h = H(),
    [_, y] = (0, on.useState)(``),
    [b, S] = (0, on.useState)(`default`),
    [C, w] = (0, on.useState)(ln),
    [T, E] = (0, on.useState)(!1),
    [D, O] = (0, on.useState)(!1),
    A,
    j,
    M,
    N,
    F,
    I,
    z,
    V,
    U,
    W,
    K,
    q,
    te,
    ne,
    re,
    J,
    ie,
    ae;
  if (
    n[0] !== C ||
    n[1] !== r ||
    n[2] !== i ||
    n[3] !== h ||
    n[4] !== D ||
    n[5] !== a ||
    n[6] !== l ||
    n[7] !== o ||
    n[8] !== _ ||
    n[9] !== s ||
    n[10] !== u ||
    n[11] !== m ||
    n[12] !== T ||
    n[13] !== f ||
    n[14] !== d ||
    n[15] !== b ||
    n[16] !== p
  ) {
    z = u == null ? (L(_)?.canonicalPattern ?? null) : u(_);
    let e = _.length > 0 && z == null,
      t = z == null || kt(i, z, `origin`),
      g = z == null || kt(i, z, `persistentApproval`);
    ((F =
      b !== "default" ||
      Object.values(C).some($t) ||
      (f && z != null && p.some((e) => Ft(s, e, z) !== "default"))),
      (N =
        z != null &&
        p.some((e) => {
          let t = e === `origin` ? b : C[e];
          return (t === `allowed` && !g) || ((t === `allowed` || t === `ask`) && !kt(i, z, e));
        })),
      (I = p.some(
        (e) => (e === `origin` ? b : C[e]) === `ask` && tn(s, e, i, z ?? ``) === `neverAsk`,
      )));
    let R;
    (n[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((R = () => {
          (y(``), S(`default`), w(ln), E(!1));
        }),
        (n[35] = R))
      : (R = n[35]),
      (V = R));
    let B = async () => {
      z == null ||
        r ||
        D ||
        !F ||
        N ||
        I ||
        (O(!0),
        await (async () => {
          try {
            (await l({
              operation: `add`,
              nextValues: { ...C, origin: b },
              origin: z,
              resources: p,
              values: un,
            }),
              V(),
              a(!1));
          } catch {
            m.get(G).danger(rn(), {
              errorAnalytics: { toastId: `browserUsePolicySitePermissions.handleSubmit` },
            });
          }
        })().finally(() => {
          O(!1);
        }));
    };
    ((M = ge),
      (ie = o),
      n[36] === a
        ? (ae = n[37])
        : ((ae = (e) => {
            (e || V(), a(e));
          }),
          (n[36] = a),
          (n[37] = ae)),
      (W = `compact`),
      (j = ee),
      (ne = `form`),
      (re = (e) => {
        (e.preventDefault(), B());
      }));
    let H;
    (n[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((H = (0, $.jsx)(c, {
          asChild: !0,
          children: (0, $.jsx)(`span`, {
            children: (0, $.jsx)(P, {
              id: `settings.browserUse.sitePermissions.addDialog.title`,
              defaultMessage: `Add site permission`,
              description: `Title for add browser site permission dialog`,
            }),
          }),
        })),
        (n[38] = H))
      : (H = n[38]),
      n[39] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((J = (0, $.jsx)(x, {
            children: (0, $.jsx)(v, {
              title: H,
              subtitle: (0, $.jsx)(k, {
                asChild: !0,
                children: (0, $.jsx)(`span`, {
                  children: (0, $.jsx)(P, {
                    id: `settings.browserUse.sitePermissions.addDialog.subtitle`,
                    defaultMessage: `Choose what access ChatGPT has on a site`,
                    description: `Subtitle for add browser site permission dialog`,
                  }),
                }),
              }),
            }),
          })),
          (n[39] = J))
        : (J = n[39]),
      (A = x),
      (U = `gap-3`));
    let oe;
    n[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((oe = (0, $.jsx)(`span`, {
          className: `text-sm font-medium`,
          children: (0, $.jsx)(P, {
            id: `settings.browserUse.sitePermissions.addDialog.siteLabel`,
            defaultMessage: `Site`,
            description: `Site label for add browser site permission dialog`,
          }),
        })),
        (n[40] = oe))
      : (oe = n[40]);
    let se = e ? `browser-use-add-origin-error` : void 0,
      Y;
    n[41] === h
      ? (Y = n[42])
      : ((Y = h.formatMessage({
          id: `settings.browserUse.sitePermissions.addDialog.siteAriaLabel`,
          defaultMessage: `Site`,
          description: `Aria label for site input in add browser site permission dialog`,
        })),
        (n[41] = h),
        (n[42] = Y));
    let ce = r || D,
      le;
    n[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((le = (e) => {
          y(e.currentTarget.value);
        }),
        (n[43] = le))
      : (le = n[43]);
    let X;
    n[44] === h
      ? (X = n[45])
      : ((X = h.formatMessage({
          id: `settings.browserUse.policyDomains.addDialogPlaceholder`,
          defaultMessage: `https://example.com`,
          description: `Placeholder showing that browser site patterns require an HTTP or HTTPS scheme`,
        })),
        (n[44] = h),
        (n[45] = X));
    let ue;
    n[46] !== e || n[47] !== _ || n[48] !== se || n[49] !== Y || n[50] !== ce || n[51] !== X
      ? ((ue = (0, $.jsx)(ye, {
          autoFocus: !0,
          "aria-describedby": se,
          "aria-invalid": e,
          "aria-label": Y,
          disabled: ce,
          onChange: le,
          placeholder: X,
          value: _,
        })),
        (n[46] = e),
        (n[47] = _),
        (n[48] = se),
        (n[49] = Y),
        (n[50] = ce),
        (n[51] = X),
        (n[52] = ue))
      : (ue = n[52]);
    let de;
    (n[53] === e
      ? (de = n[54])
      : ((de = e
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-danger`,
              id: `browser-use-add-origin-error`,
              role: `alert`,
              children: (0, $.jsx)(P, {
                id: `settings.browserUse.sitePermissions.addDialog.invalidOrigin`,
                defaultMessage: `Enter a valid origin, such as https://example.com or https://*.example.com`,
                description: `Validation error explaining the required URL scheme and supported wildcard syntax for a browser site permission`,
              }),
            })
          : null),
        (n[53] = e),
        (n[54] = de)),
      n[55] !== ue || n[56] !== de
        ? ((K = (0, $.jsxs)(`label`, {
            className: `flex flex-col gap-1.5`,
            children: [oe, ue, de],
          })),
          (n[55] = ue),
          (n[56] = de),
          (n[57] = K))
        : (K = n[57]));
    let fe;
    (n[58] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((fe = (0, $.jsx)(`span`, {
          id: `browser-use-add-browsing-label`,
          className: `text-sm font-medium`,
          children: (0, $.jsx)(P, {
            id: `settings.browserUse.sitePermissions.addDialog.behaviorLabel`,
            defaultMessage: `Browse`,
            description: `Behavior label for add browser site permission dialog`,
          }),
        })),
        (n[58] = fe))
      : (fe = n[58]),
      (q = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1.5`,
        children: [
          fe,
          (0, $.jsx)(Yt, {
            allowAllowed: t && g,
            allowRequiresApproval: t,
            defaultApprovalMode: tn(s, `origin`, i, z ?? ``),
            disabled: r || D,
            labelId: `browser-use-add-browsing-label`,
            resource: `origin`,
            supportsRequiresApproval: d,
            value: b,
            valueId: `browser-use-add-browsing-value`,
            variant: `form`,
            onSelect: S,
          }),
        ],
      })),
      (te = T
        ? p.map((e) => {
            if (e === `origin`) return null;
            let t = `browser-use-add-${e}-label`,
              n = `browser-use-add-${e}-value`;
            return (0, $.jsxs)(
              `div`,
              {
                className: `flex flex-col gap-1.5`,
                children: [
                  (0, $.jsx)(`span`, { id: t, className: `text-sm font-medium`, children: en(e) }),
                  (0, $.jsx)(Yt, {
                    allowAllowed: g && kt(i, z ?? ``, e),
                    allowRequiresApproval: kt(i, z ?? ``, e),
                    defaultApprovalMode: tn(s, e, i, z ?? ``),
                    disabled: r || D,
                    labelId: t,
                    resource: e,
                    supportsRequiresApproval: d,
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
      (n[1] = r),
      (n[2] = i),
      (n[3] = h),
      (n[4] = D),
      (n[5] = a),
      (n[6] = l),
      (n[7] = o),
      (n[8] = _),
      (n[9] = s),
      (n[10] = u),
      (n[11] = m),
      (n[12] = T),
      (n[13] = f),
      (n[14] = d),
      (n[15] = b),
      (n[16] = p),
      (n[17] = A),
      (n[18] = j),
      (n[19] = M),
      (n[20] = N),
      (n[21] = F),
      (n[22] = I),
      (n[23] = z),
      (n[24] = V),
      (n[25] = U),
      (n[26] = W),
      (n[27] = K),
      (n[28] = q),
      (n[29] = te),
      (n[30] = ne),
      (n[31] = re),
      (n[32] = J),
      (n[33] = ie),
      (n[34] = ae));
  } else
    ((A = n[17]),
      (j = n[18]),
      (M = n[19]),
      (N = n[20]),
      (F = n[21]),
      (I = n[22]),
      (z = n[23]),
      (V = n[24]),
      (U = n[25]),
      (W = n[26]),
      (K = n[27]),
      (q = n[28]),
      (te = n[29]),
      (ne = n[30]),
      (re = n[31]),
      (J = n[32]),
      (ie = n[33]),
      (ae = n[34]));
  let oe;
  n[59] !== F || n[60] !== z
    ? ((oe =
        z != null && !F
          ? (0, $.jsx)(`span`, {
              className: `text-xs text-secondary`,
              role: `status`,
              children: (0, $.jsx)(P, {
                id: `settings.browserUse.sitePermissions.addDialog.matchesDefaults`,
                defaultMessage: `These permissions match the defaults, so adding this site would not change anything`,
                description: `Explanation shown when the add site permission button is disabled because every permission inherits the current default`,
              }),
            })
          : null),
      (n[59] = F),
      (n[60] = z),
      (n[61] = oe))
    : (oe = n[61]);
  let se;
  n[62] !== A || n[63] !== U || n[64] !== oe || n[65] !== K || n[66] !== q || n[67] !== te
    ? ((se = (0, $.jsxs)(A, { className: U, children: [K, q, te, oe] })),
      (n[62] = A),
      (n[63] = U),
      (n[64] = oe),
      (n[65] = K),
      (n[66] = q),
      (n[67] = te),
      (n[68] = se))
    : (se = n[68]);
  let Y;
  n[69] !== D || n[70] !== T || n[71] !== p.length
    ? ((Y =
        !T && p.length > 1
          ? (0, $.jsx)(R, {
              className: `me-auto`,
              color: `ghost`,
              disabled: D,
              onClick: () => {
                E(!0);
              },
              type: `button`,
              children: (0, $.jsx)(P, {
                id: `settings.browserUse.sitePermissions.addDialog.moreOptions`,
                defaultMessage: `More options`,
                description: `Button label to reveal advanced options when adding browser site permissions`,
              }),
            })
          : null),
      (n[69] = D),
      (n[70] = T),
      (n[71] = p.length),
      (n[72] = Y))
    : (Y = n[72]);
  let ce;
  n[73] !== a || n[74] !== V
    ? ((ce = () => {
        (V(), a(!1));
      }),
      (n[73] = a),
      (n[74] = V),
      (n[75] = ce))
    : (ce = n[75]);
  let le;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = (0, $.jsx)(P, {
        id: `settings.browserUse.domains.addDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for add browser domain dialog`,
      })),
      (n[76] = le))
    : (le = n[76]);
  let X;
  n[77] !== D || n[78] !== ce
    ? ((X = (0, $.jsx)(R, {
        color: `outline`,
        disabled: D,
        onClick: ce,
        type: `button`,
        children: le,
      })),
      (n[77] = D),
      (n[78] = ce),
      (n[79] = X))
    : (X = n[79]);
  let ue = z == null || r || !F || D || N || I,
    de;
  n[80] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(P, {
        id: `settings.browserUse.domains.addDialogConfirm`,
        defaultMessage: `Add`,
        description: `Confirm button label for add browser domain dialog`,
      })),
      (n[80] = de))
    : (de = n[80]);
  let fe;
  n[81] !== D || n[82] !== ue
    ? ((fe = (0, $.jsx)(R, {
        color: `primary`,
        disabled: ue,
        loading: D,
        type: `submit`,
        children: de,
      })),
      (n[81] = D),
      (n[82] = ue),
      (n[83] = fe))
    : (fe = n[83]);
  let pe;
  n[84] !== N || n[85] !== fe
    ? ((pe = (0, $.jsx)(Xe, { managed: N, children: fe })), (n[84] = N), (n[85] = fe), (n[86] = pe))
    : (pe = n[86]);
  let me;
  n[87] !== Y || n[88] !== X || n[89] !== pe
    ? ((me = (0, $.jsx)(x, { children: (0, $.jsxs)(g, { children: [Y, X, pe] }) })),
      (n[87] = Y),
      (n[88] = X),
      (n[89] = pe),
      (n[90] = me))
    : (me = n[90]);
  let he;
  n[91] !== j || n[92] !== se || n[93] !== me || n[94] !== ne || n[95] !== re || n[96] !== J
    ? ((he = (0, $.jsxs)(j, { as: ne, onSubmit: re, children: [J, se, me] })),
      (n[91] = j),
      (n[92] = se),
      (n[93] = me),
      (n[94] = ne),
      (n[95] = re),
      (n[96] = J),
      (n[97] = he))
    : (he = n[97]);
  let _e;
  return (
    n[98] !== M || n[99] !== W || n[100] !== he || n[101] !== ie || n[102] !== ae
      ? ((_e = (0, $.jsx)(M, { open: ie, onOpenChange: ae, size: W, children: he })),
        (n[98] = M),
        (n[99] = W),
        (n[100] = he),
        (n[101] = ie),
        (n[102] = ae),
        (n[103] = _e))
      : (_e = n[103]),
    _e
  );
}
function $t(e) {
  return e !== "default";
}
function en(e) {
  switch (e) {
    case `origin`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.websiteAccess`,
        defaultMessage: `Browse`,
        description: `Browse label for custom browser site permissions`,
      });
    case `download`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.downloads`,
        defaultMessage: `Download`,
        description: `Download label for custom browser site permissions`,
      });
    case `upload`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.uploads`,
        defaultMessage: `Upload`,
        description: `Upload label for custom browser site permissions`,
      });
    case `fullCdp`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.cdpAccess`,
        defaultMessage: `Debug / CDP`,
        description: `Debug label for custom browser site permissions`,
      });
  }
}
function tn(e, t, n, r) {
  let i = {
    origin: e.approvalMode,
    download: e.downloadApprovalMode,
    upload: e.uploadApprovalMode,
    fullCdp: void 0,
  }[t];
  return i === `neverAsk` && (!je(n) || !kt(n, r, `persistentApproval`)) ? `alwaysAsk` : i;
}
function nn(e, t, n) {
  if (e === `ask` || (e === "default" && n === `alwaysAsk`))
    return (0, $.jsx)(P, {
      id: `settings.browserUse.sitePermissions.approvalValue.requiresApproval`,
      defaultMessage: `Requires approval`,
      description: `Browser site permission that has no persistent approval and uses the default approval flow`,
    });
  if (t !== `fullCdp` && (e === `allowed` || (e === "default" && n === `neverAsk`)))
    return (0, $.jsx)(P, {
      id: `settings.browserUse.sitePermissions.approvalValue.alwaysAllow`,
      defaultMessage: `Always allow`,
      description: `Browser site permission with persistent approval for browsing, downloads, or uploads`,
    });
  switch (e) {
    case `default`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.value.useDefault`,
        defaultMessage: `Use default`,
        description: `Option that removes a custom browser site permission so it inherits its defaults`,
      });
    case `allowed`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.value.allowed`,
        defaultMessage: `Allow`,
        description: `Allowed value label for browser use site capabilities`,
      });
    case `denied`:
      return (0, $.jsx)(P, {
        id: `settings.browserUse.sitePermissions.value.denied`,
        defaultMessage: `Block`,
        description: `Denied value label for browser use site permissions table`,
      });
  }
}
function rn() {
  return (0, $.jsx)(P, {
    id: `settings.browserUse.sitePermissions.saveError`,
    defaultMessage: `Unable to save site permissions`,
    description: `Toast shown when saving browser site permissions fails`,
  });
}
var an, on, $, sn, cn, ln, un;
function dn() {
  return (dn = e(() => {
    ((an = F()),
      I(),
      W(),
      he(),
      ue(),
      y(),
      Ve(),
      (on = pe()),
      j(),
      E(),
      O(),
      h(),
      de(),
      a(),
      m(),
      we(),
      xe(),
      ne(),
      n(),
      Oe(),
      s(),
      U(),
      Be(),
      Ce(),
      ve(),
      ke(),
      Ee(),
      ie(),
      tt(),
      gt(),
      Rt(),
      ft(),
      ($ = J()),
      (sn = [`default`, `ask`, `allowed`, `denied`]),
      (cn = { origin: `origin`, download: `download`, upload: `upload`, fullCdp: `fullCdp` }),
      (ln = { download: `default`, upload: `default`, fullCdp: `default` }),
      (un = { origin: `default`, ...ln }));
  }))();
}
export { tt as a, Xe as i, zt as n, dn as r, Vt as t };
//# sourceMappingURL=browser-use-policy-site-permissions-b7342477471c.js.map
