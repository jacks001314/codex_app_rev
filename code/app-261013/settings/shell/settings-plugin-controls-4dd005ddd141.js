import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  AL as r,
  AO as i,
  AX as a,
  CO as o,
  Cot as s,
  D0 as c,
  Ext as l,
  IDt as u,
  Ixt as d,
  JC as f,
  MO as p,
  Mz as m,
  Nz as h,
  O0 as g,
  Pxt as _,
  QJ as v,
  Qv as y,
  TJ as b,
  TO as x,
  VDt as S,
  Vxt as C,
  X as w,
  Y as T,
  ZJ as E,
  _Mt as D,
  _xt as O,
  aD as k,
  aw as A,
  b0 as j,
  cz as M,
  fR as ee,
  fW as te,
  gMt as N,
  hot as ne,
  iD as re,
  iw as P,
  jDt as F,
  jO as I,
  kX as ie,
  lot as ae,
  ow as L,
  qC as R,
  sz as oe,
  t3 as se,
  tw as z,
  vzt as B,
  wot as ce,
  xMt as V,
  y0 as le,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  $kn as H,
  Brt as de,
  Dkn as fe,
  Dlr as U,
  Ek as W,
  Ekn as G,
  Ggr as K,
  IC as q,
  Idn as J,
  LC as pe,
  Ldn as me,
  QOn as he,
  QP as ge,
  Rrt as _e,
  Skn as ve,
  Tdn as ye,
  Tk as Y,
  Vgr as be,
  ZOn as xe,
  eAn as Se,
  hp as Ce,
  hzt as we,
  jdn as Te,
  lit as Ee,
  mp as De,
  mzt as Oe,
  oFr as ke,
  sFr as Ae,
  tF as je,
  t_r as Me,
  tit as Ne,
} from "./app-initial-5851df3f6cb1.js";
import { n as Pe, t as Fe } from "./settings-loading-row-bf72bf2df25d.js";
import {
  D as Ie,
  E as Le,
  S as Re,
  T as ze,
  f as Be,
  i as Ve,
  l as He,
  m as Ue,
  n as We,
  p as Ge,
  s as Ke,
  t as qe,
  u as Je,
} from "./browser-use-origin-state-queries-27371f90f360.js";
import { a as Ye, i as Xe, n as Ze, r as Qe } from "./browser-use-policy-site-permissions-a1cdbceb998d.js";
function $e(e) {
  let t = (0, tt.c)(4),
    { backend: n } = e,
    r = n === void 0 ? `iab` : n,
    { selectedHostId: i } = de();
  if (Ae(i).kind !== `local`) return null;
  let a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, X.jsx)(Y.Header, {
        title: (0, X.jsx)(u, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== r || t[2] !== i
      ? ((o = (0, X.jsx)(X.Fragment, {
          children: (0, X.jsxs)(Y, {
            children: [
              a,
              (0, X.jsx)(Y.Content, {
                children: (0, X.jsx)(R, { children: (0, X.jsx)(et, { backend: r, hostId: i }) }),
              }),
            ],
          }),
        })),
        (t[1] = r),
        (t[2] = i),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function et(e) {
  let t = (0, tt.c)(27),
    { backend: n, hostId: r } = e,
    i = S(),
    { data: o, isLoading: s } = C(qe),
    c;
  t[0] === r ? (c = t[1]) : ((c = { hostId: r }), (t[0] = r), (t[1] = c));
  let { data: l, isPending: d } = ue(be, c),
    f;
  t[2] === r ? (f = t[3]) : ((f = { hostId: r }), (t[2] = r), (t[3] = f));
  let p = He(f),
    h = ue(We, r),
    g = h !== `unsupported`,
    _;
  t[4] !== n || t[5] !== l || t[6] !== g
    ? ((_ =
        ee(l?.requirements?.featureRequirements?.browser_use_full_cdp_access) ||
        (g && l != null && !ze(l.requirements, n === `iab` ? `iab` : `extension`))),
      (t[4] = n),
      (t[5] = l),
      (t[6] = g),
      (t[7] = _))
    : (_ = t[7]);
  let v = _,
    y = s || d || h === `loading` || h === `error`,
    b = o?.fullCdpAccessEnabled === !0 && !y && !v,
    x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, X.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-warning`,
            children: [
              (0, X.jsx)(m, { className: `shrink-0`, "aria-hidden": !1, asset: a }),
              (0, X.jsx)(u, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(u, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[8] = x))
    : (x = t[8]);
  let w;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(`div`, {
        children: (0, X.jsx)(u, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] !== v || t[11] !== d
    ? ((T =
        !d && v
          ? (0, X.jsx)(`div`, {
              children: (0, X.jsx)(u, {
                id: `settings.browserUse.fullCdp.blockedByPolicy`,
                defaultMessage: `Your organization has disabled this setting.`,
                description: `Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.`,
              }),
            })
          : null),
      (t[10] = v),
      (t[11] = d),
      (t[12] = T))
    : (T = t[12]);
  let E;
  t[13] === T
    ? (E = t[14])
    : ((E = (0, X.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [w, T] })),
      (t[13] = T),
      (t[14] = E));
  let D;
  t[15] === i
    ? (D = t[16])
    : ((D = i.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[15] = i),
      (t[16] = D));
  let O = y || v || p.isPending,
    k;
  t[17] === p
    ? (k = t[18])
    : ((k = (e) => {
        p.mutate(e);
      }),
      (t[17] = p),
      (t[18] = k));
  let A;
  t[19] !== b || t[20] !== k || t[21] !== D || t[22] !== O
    ? ((A = (0, X.jsx)(I, { ariaLabel: D, checked: b, disabled: O, onChange: k })),
      (t[19] = b),
      (t[20] = k),
      (t[21] = D),
      (t[22] = O),
      (t[23] = A))
    : (A = t[23]);
  let j;
  return (
    t[24] !== A || t[25] !== E
      ? ((j = (0, X.jsx)(z, { label: x, description: E, control: A })), (t[24] = A), (t[25] = E), (t[26] = j))
      : (j = t[26]),
    j
  );
}
var tt, X;
function nt() {
  return (nt = e(() => {
    ((tt = B()), ie(), r(), _(), Ue(), F(), h(), p(), K(), Ve(), W(), _e(), P(), f(), ke(), (X = V()));
  }))();
}
function rt() {
  let e = (0, at.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, ot.jsx)(u, {
          id: `settings.browserUse.historyApproval.description`,
          defaultMessage: `Choose if ChatGPT asks for approval before accessing your browser's history`,
          description: `Description for browser use history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function it() {
  let e = (0, at.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, ot.jsx)(u, {
          id: `settings.browserUse.iabHistoryApproval.description`,
          defaultMessage: `Choose whether ChatGPT can access your built-in browser history`,
          description: `Description for in-app browser history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var at, ot;
function st() {
  return (st = e(() => {
    ((at = B()), F(), (ot = V()));
  }))();
}
function ct(e) {
  let t = (0, lt.c)(15),
    { backend: n } = e,
    r = S(),
    i = C(n !== `iab` || pe),
    { data: a, isLoading: o } = C(qe),
    s = Be(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, ut.jsx)(u, {
        id: `settings.browserUse.webMcp.label`,
        defaultMessage: `Use site tools by default`,
        description: `Label for the default WebMCP permission; individual websites can override it`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === i
    ? (l = t[2])
    : ((l = i
        ? (0, ut.jsx)(u, {
            id: `settings.browserUse.webMcp.description`,
            defaultMessage: `Allow ChatGPT to discover and call tools provided by websites, including WebMCP, unless you set a different permission for a site`,
            description: `Explains that the browser's default website tool permission does not override permissions saved for individual sites; WebMCP is the protocol name`,
          })
        : (0, ut.jsx)(u, {
            id: `settings.browserUse.webMcp.unavailableDescription`,
            defaultMessage: `Site tools aren't available for this account`,
            description: `Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools`,
          })),
      (t[1] = i),
      (t[2] = l));
  let d;
  t[3] === r
    ? (d = t[4])
    : ((d = r.formatMessage({
        id: `settings.browserUse.webMcp.ariaLabel`,
        defaultMessage: `Toggle site tools by default`,
        description: `Accessible name for the browser's default website tool permission; individual websites can override it`,
      })),
      (t[3] = r),
      (t[4] = d));
  let f = i && (a?.webMcpEnabled ?? !0),
    p = !i || o || s.isPending,
    m;
  t[5] === s
    ? (m = t[6])
    : ((m = (e) => {
        s.mutate(e);
      }),
      (t[5] = s),
      (t[6] = m));
  let h;
  t[7] !== d || t[8] !== f || t[9] !== p || t[10] !== m
    ? ((h = (0, ut.jsx)(I, { ariaLabel: d, checked: f, disabled: p, onChange: m })),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== l || t[13] !== h
      ? ((g = (0, ut.jsx)(z, { label: c, description: l, control: h })),
        (t[12] = l),
        (t[13] = h),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
var lt, ut;
function dt() {
  return (dt = e(() => {
    ((lt = B()), _(), F(), q(), p(), Ve(), P(), (ut = V()));
  }))();
}
function ft(e) {
  let t = (0, gt.c)(14),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    d = o != null || (s && (c || l)),
    f;
  t[0] !== n || t[1] !== s || t[2] !== d || t[3] !== c || t[4] !== l || t[5] !== o
    ? ((f = d
        ? (0, Z.jsxs)(Y, {
            children: [
              (0, Z.jsx)(Y.Header, {
                title:
                  n === `chrome`
                    ? (0, Z.jsx)(u, {
                        id: `settings.computerUse.chrome.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for Chromium browser permissions settings section`,
                      })
                    : (0, Z.jsx)(u, {
                        id: `settings.browserUse.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for browser use permissions settings section`,
                      }),
              }),
              (0, Z.jsx)(Y.Content, {
                children: (0, Z.jsxs)(R, {
                  children: [
                    o,
                    s
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            c && n === `chrome` ? (0, Z.jsx)(pt, {}) : null,
                            c && n === `iab` ? (0, Z.jsx)(mt, {}) : null,
                            l ? (0, Z.jsx)(ct, { backend: n }) : null,
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[0] = n),
      (t[1] = s),
      (t[2] = d),
      (t[3] = c),
      (t[4] = l),
      (t[5] = o),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== n || t[8] !== s || t[9] !== l
    ? ((p = s
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Ze, { backend: n, showWebMcp: l }), (0, Z.jsx)($e, { backend: n })],
          })
        : null),
      (t[7] = n),
      (t[8] = s),
      (t[9] = l),
      (t[10] = p))
    : (p = t[10]);
  let m;
  return (
    t[11] !== f || t[12] !== p
      ? ((m = (0, Z.jsxs)(Z.Fragment, { children: [f, p] })), (t[11] = f), (t[12] = p), (t[13] = m))
      : (m = t[13]),
    m
  );
}
function pt() {
  let e = (0, gt.c)(3),
    t = Ke(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Z.jsx)(rt, {})), (e[0] = n)) : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(ht, { backend: `chrome`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function mt() {
  let e = (0, gt.c)(3),
    t = Je(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Z.jsx)(it, {})), (e[0] = n)) : (n = e[0]);
  let r;
  return (
    e[1] === t
      ? (r = e[2])
      : ((r = (0, Z.jsx)(ht, { backend: `iab`, description: n, writeApprovalModeMutation: t })),
        (e[1] = t),
        (e[2] = r)),
    r
  );
}
function ht(e) {
  let t = (0, gt.c)(62),
    { backend: n, description: r, writeApprovalModeMutation: i } = e,
    a = d(s),
    { selectedHostId: c } = de(),
    { data: l, isLoading: f } = C(qe),
    { data: p, isPending: m } = ue(Me, c),
    h = (p?.configReadSucceeded === !0 ? p.config.browser_use?.allow_history_access : void 0) !== !1,
    g = n === `iab` ? l?.iabHistoryApprovalMode : l?.chromeHistoryApprovalMode,
    _;
  t[0] === c ? (_ = t[1]) : ((_ = { failClosed: !0, hostId: c }), (t[0] = c), (t[1] = _));
  let { data: v, isError: y, isPending: b } = ue(be, _),
    S = v?.requirements ?? null,
    w = n === `iab` ? `iab` : `extension`,
    T;
  t[2] !== S || t[3] !== w ? ((T = ze(S, w)), (t[2] = S), (t[3] = w), (t[4] = T)) : (T = t[4]);
  let E = T,
    D;
  t[5] !== E || t[6] !== S ? ((D = E && Le(S, `history`)), (t[5] = E), (t[6] = S), (t[7] = D)) : (D = t[7]);
  let O = D,
    k;
  t[8] !== S || t[9] !== O ? ((k = Re(S) && !O), (t[8] = S), (t[9] = O), (t[10] = k)) : (k = t[10]);
  let A = k,
    j;
  t[11] !== E || t[12] !== S ? ((j = E && Ie(S)), (t[11] = E), (t[12] = S), (t[13] = j)) : (j = t[13]);
  let M = j,
    ee;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = {
        id: `alwaysAsk`,
        label: (0, Z.jsx)(u, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Z.jsx)(u, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (t[14] = ee))
    : (ee = t[14]);
  let N;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = {
        id: `neverAsk`,
        label: (0, Z.jsx)(u, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, Z.jsx)(u, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (t[15] = N))
    : (N = t[15]);
  let re;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = [
        ee,
        N,
        {
          id: `disabled`,
          label: (0, Z.jsx)(u, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, Z.jsx)(u, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (t[16] = re))
    : (re = t[16]);
  let P = re,
    F;
  t[17] !== O || t[18] !== g || t[19] !== h || t[20] !== M
    ? ((F = g),
      !O || !h ? (F = `disabled`) : g === `neverAsk` && !M && (F = `alwaysAsk`),
      (t[17] = O),
      (t[18] = g),
      (t[19] = h),
      (t[20] = M),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] === F ? (I = t[23]) : ((I = P.find((e) => e.id === F) ?? P[0]), (t[22] = F), (t[23] = I));
  let ie = I,
    ae = f || b || m,
    L = i.isPending,
    R;
  t[24] !== O ||
  t[25] !== g ||
  t[26] !== h ||
  t[27] !== L ||
  t[28] !== M ||
  t[29] !== a ||
  t[30] !== c ||
  t[31] !== p ||
  t[32] !== i
    ? ((R = async (e) => {
        if (!((e === g && h) || L || (!O && e !== `disabled`) || (e === `neverAsk` && !M)))
          try {
            if (e === `disabled`) {
              p?.configReadSucceeded === !0 && Object.hasOwn(p.config, `browser_use`)
                ? await Ge(a, c, p, { capability: `history`, enabled: !1 })
                : await i.mutateAsync(e);
              return;
            }
            (e !== g && (await i.mutateAsync(e)),
              h || (await Ge(a, c, p, { capability: `history`, enabled: !0 })));
          } catch {
            a.get(ne).danger(
              (0, Z.jsx)(u, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.historyApproval.saveError` } },
            );
          }
      }),
      (t[24] = O),
      (t[25] = g),
      (t[26] = h),
      (t[27] = L),
      (t[28] = M),
      (t[29] = a),
      (t[30] = c),
      (t[31] = p),
      (t[32] = i),
      (t[33] = R))
    : (R = t[33]);
  let oe = R,
    se;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((se = (0, Z.jsx)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: (0, Z.jsx)(u, {
          id: `settings.browserUse.historyApproval.label`,
          defaultMessage: `History`,
          description: `Label for browser use history approval mode setting`,
        }),
      })),
      (t[34] = se))
    : (se = t[34]);
  let B;
  t[35] !== r || t[36] !== A
    ? ((B = A
        ? (0, Z.jsx)(u, {
            id: `settings.browserUse.historyApproval.managedDescription`,
            defaultMessage: `History access is disabled by your organization`,
            description: `Explanation that an enterprise policy disables browser history access`,
          })
        : r),
      (t[35] = r),
      (t[36] = A),
      (t[37] = B))
    : (B = t[37]);
  let ce = ae || y || L || !O,
    V = ae || y || L || !O,
    H;
  t[38] === A
    ? (H = t[39])
    : ((H = A ? (0, Z.jsx)(te, { className: `text-secondary` }) : null), (t[38] = A), (t[39] = H));
  let fe = ie?.label,
    U;
  t[40] === fe
    ? (U = t[41])
    : ((U = (0, Z.jsx)(`span`, { className: `truncate`, children: fe })), (t[40] = fe), (t[41] = U));
  let W;
  t[42] !== V || t[43] !== H || t[44] !== U
    ? ((W = (0, Z.jsxs)(ge, { className: `w-[152px]`, disabled: V, children: [H, U] })),
      (t[42] = V),
      (t[43] = H),
      (t[44] = U),
      (t[45] = W))
    : (W = t[45]);
  let G;
  t[46] !== F || t[47] !== oe || t[48] !== O || t[49] !== L || t[50] !== M
    ? ((G = (0, Z.jsx)(`div`, {
        className: `flex flex-col`,
        children: P.map((e) => {
          let t = e.id === F;
          return (0, Z.jsx)(
            x.Item,
            {
              allowWrap: !0,
              disabled: L || (!O && e.id !== `disabled`) || (e.id === `neverAsk` && !M),
              rightIconAsset: t ? le : void 0,
              onSelect: () => {
                oe(e.id);
              },
              children: (0, Z.jsxs)(`div`, {
                className: `flex min-w-0 flex-col gap-0.5`,
                children: [
                  (0, Z.jsx)(`span`, { className: `truncate`, children: e.label }),
                  (0, Z.jsx)(`span`, {
                    className: `truncate text-sm text-secondary`,
                    children: e.description,
                  }),
                ],
              }),
            },
            e.id,
          );
        }),
      })),
      (t[46] = F),
      (t[47] = oe),
      (t[48] = O),
      (t[49] = L),
      (t[50] = M),
      (t[51] = G))
    : (G = t[51]);
  let K;
  t[52] !== ce || t[53] !== W || t[54] !== G
    ? ((K = (0, Z.jsx)(o, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: ce,
        triggerButton: W,
        children: G,
      })),
      (t[52] = ce),
      (t[53] = W),
      (t[54] = G),
      (t[55] = K))
    : (K = t[55]);
  let q;
  t[56] !== A || t[57] !== K
    ? ((q = (0, Z.jsx)(Xe, { managed: A, children: K })), (t[56] = A), (t[57] = K), (t[58] = q))
    : (q = t[58]);
  let J;
  return (
    t[59] !== B || t[60] !== q
      ? ((J = (0, Z.jsx)(z, { label: se, description: B, control: q })),
        (t[59] = B),
        (t[60] = q),
        (t[61] = J))
      : (J = t[61]),
    J
  );
}
var gt, Z;
function _t() {
  return (_t = e(() => {
    ((gt = B()),
      j(),
      _(),
      Ue(),
      F(),
      i(),
      b(),
      ae(),
      K(),
      ce(),
      Ve(),
      nt(),
      st(),
      Ye(),
      Qe(),
      dt(),
      W(),
      _e(),
      P(),
      je(),
      f(),
      (Z = V()));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(18),
    { backend: n, browserUseEnabled: r, showHistory: i, showWebMcp: a, siteSettingsRow: o } = e,
    s = r === void 0 || r,
    c = i === void 0 || i,
    l = a !== void 0 && a,
    { selectedHostId: d } = de(),
    f = ue(We, d);
  if (f === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Fe, {
            children: (0, Q.jsx)(u, {
              id: `settings.browserUse.config.loading`,
              defaultMessage: `Loading browser settings…`,
              description: `Loading status while reading user browser configuration`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (f === `error`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(De, {
            layout: `settings-row`,
            children: (0, Q.jsx)(u, {
              id: `settings.browserUse.config.loadError`,
              defaultMessage: `Unable to load browser settings`,
              description: `Error shown instead of editable browser permissions when user configuration cannot be loaded`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (f === `supported`) {
    let e;
    return (
      t[2] !== n || t[3] !== s || t[4] !== c || t[5] !== l || t[6] !== o
        ? ((e = (0, Q.jsx)(ft, {
            backend: n,
            browserUseEnabled: s,
            showHistory: c,
            showWebMcp: l,
            siteSettingsRow: o,
          })),
          (t[2] = n),
          (t[3] = s),
          (t[4] = c),
          (t[5] = l),
          (t[6] = o),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let p;
  t[8] !== n || t[9] !== s || t[10] !== l || t[11] !== o
    ? ((p =
        o != null || (s && l)
          ? (0, Q.jsxs)(Y, {
              children: [
                (0, Q.jsx)(Y.Header, {
                  title:
                    n === `chrome`
                      ? (0, Q.jsx)(u, {
                          id: `settings.computerUse.chrome.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for Chromium browser permissions settings section`,
                        })
                      : (0, Q.jsx)(u, {
                          id: `settings.browserUse.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for browser use permissions settings section`,
                        }),
                }),
                (0, Q.jsx)(Y.Content, {
                  children: (0, Q.jsxs)(R, { children: [o, s && l ? (0, Q.jsx)(ct, { backend: n }) : null] }),
                }),
              ],
            })
          : null),
      (t[8] = n),
      (t[9] = s),
      (t[10] = l),
      (t[11] = o),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === s ? (m = t[14]) : ((m = s ? (0, Q.jsx)($e, {}) : null), (t[13] = s), (t[14] = m));
  let h;
  return (
    t[15] !== p || t[16] !== m
      ? ((h = (0, Q.jsxs)(Q.Fragment, { children: [p, m] })), (t[15] = p), (t[16] = m), (t[17] = h))
      : (h = t[17]),
    h
  );
}
var yt, Q;
function bt() {
  return (bt = e(() => {
    ((yt = B()), _(), F(), Ce(), Ve(), nt(), _t(), dt(), W(), _e(), Pe(), f(), (Q = V()));
  }))();
}
function xt(e) {
  let n = (0, Dt.c)(35),
    {
      emptyStateTitle: r,
      installButtonLabel: i,
      items: a,
      pluginsQuery: o,
      selectedHostId: s,
      unavailableItems: c,
    } = e,
    d;
  n[0] === c ? (d = n[1]) : ((d = c === void 0 ? [] : c), (n[0] = c), (n[1] = d));
  let f = d,
    p = l(),
    { installPlugin: h, status: g } = Te(),
    _;
  n[2] === s ? (_ = n[3]) : ((_ = { hostId: s }), (n[2] = s), (n[3] = _));
  let { pendingPluginId: v, setPluginEnabled: y } = fe(_),
    b;
  n[4] === s ? (b = n[5]) : ((b = { hostId: s }), (n[4] = s), (n[5] = b));
  let { pendingUninstallPluginId: x, uninstallPlugin: S } = G(b),
    C = g?.hostId === s ? g.pluginId : null,
    w = v ?? C ?? x,
    E = a.length + f.length;
  if (o.isLoading && E === 0) {
    let e;
    return (
      n[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(R, {
            children: (0, $.jsx)(Fe, {
              children: (0, $.jsx)(u, {
                id: `settings.plugins.controls.loading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading state for plugin controls in settings`,
              }),
            }),
          })),
          (n[6] = e))
        : (e = n[6]),
      e
    );
  }
  if (o.errorMessage != null) {
    let e;
    return (
      n[7] === o
        ? (e = n[8])
        : ((e = (0, $.jsx)(R, {
            children:
              o.retry == null
                ? (0, $.jsx)(De, { layout: `settings-row`, children: o.errorMessage })
                : (0, $.jsx)(z, {
                    control: (0, $.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: () => void o.retry?.(),
                      children: (0, $.jsx)(u, {
                        id: `settings.plugins.controls.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to retry loading plugin settings after a request fails`,
                      }),
                    }),
                    label: (0, $.jsx)(`span`, { role: `alert`, children: o.errorMessage }),
                  }),
          })),
          (n[7] = o),
          (n[8] = e)),
      e
    );
  }
  if (E === 0) {
    let e;
    return (
      n[9] === r
        ? (e = n[10])
        : ((e = (0, $.jsx)(R, { children: (0, $.jsx)(De, { layout: `settings-row`, children: r }) })),
          (n[9] = r),
          (n[10] = e)),
      e
    );
  }
  let D;
  if (
    n[11] !== i ||
    n[12] !== h ||
    n[13] !== a ||
    n[14] !== p ||
    n[15] !== w ||
    n[16] !== o.reload ||
    n[17] !== s ||
    n[18] !== y ||
    n[19] !== S
  ) {
    let e;
    (n[21] !== i ||
    n[22] !== h ||
    n[23] !== p ||
    n[24] !== w ||
    n[25] !== o.reload ||
    n[26] !== s ||
    n[27] !== y ||
    n[28] !== S
      ? ((e = (e) =>
          e.kind === `disclosure`
            ? (0, $.jsx)(
                `button`,
                {
                  "aria-expanded": e.expanded,
                  className: `group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                  onClick: e.onToggleExpanded,
                  type: `button`,
                  children: (0, $.jsx)(z, {
                    className: `min-h-[60px]`,
                    control: (0, $.jsx)(m, {
                      className: N(`text-secondary`, e.expanded && `rotate-180`),
                      asset: T,
                      "aria-hidden": !1,
                    }),
                    description: e.description,
                    icon: (0, $.jsx)(`span`, {
                      className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                      children:
                        e.icon ?? (0, $.jsx)(m, { className: `text-secondary`, "aria-hidden": !1, asset: L }),
                    }),
                    label: e.title,
                  }),
                },
                e.id,
              )
            : e.kind === `unavailable`
              ? (0, $.jsx)(Ct, { item: e }, e.id)
              : e.kind === `app`
                ? (0, $.jsx)(
                    z,
                    {
                      className: `min-h-[60px]`,
                      control:
                        e.action == null && e.showEnableToggle === !1
                          ? null
                          : (0, $.jsxs)(`div`, {
                              className: `flex shrink-0 items-center gap-2`,
                              children: [
                                e.action,
                                e.showEnableToggle === !1
                                  ? null
                                  : (0, $.jsx)(oe, {
                                      tooltipContent: e.toggleTooltip,
                                      children: (0, $.jsx)(I, {
                                        ariaLabel: e.toggleAriaLabel,
                                        checked: e.enabled,
                                        disabled: e.isPending === !0,
                                        onChange: e.onToggleEnabled,
                                      }),
                                    }),
                              ],
                            }),
                      description: e.description,
                      icon: (0, $.jsx)(`span`, {
                        className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                        children:
                          e.icon ??
                          (0, $.jsx)(m, { className: `text-secondary`, "aria-hidden": !1, asset: L }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : (0, $.jsx)(
                    Et,
                    {
                      installButtonLabel: i,
                      isPending: w === e.plugin.plugin.id,
                      item: e,
                      onInstallPlugin: (t) => {
                        h(t, {
                          browserFamily: e.browserFamily,
                          hostId: s,
                          marketplaceAnalytics: he.settings,
                          onSuccess: o.reload,
                        });
                      },
                      onOpenPluginDetails: (e) => {
                        p(Ne(e, { hostId: s, breadcrumb: `settings` }));
                      },
                      onToggleInstalledPluginEnabled: (t, n) => {
                        y({ pluginId: t.plugin.id, pluginDisplayName: e.displayName ?? J(t), enabled: n });
                      },
                      onUninstallPlugin: (e) => {
                        S({
                          marketplaceName: e.marketplaceName,
                          pluginDisplayName: J(e),
                          pluginId: e.plugin.id,
                          pluginName: e.plugin.name,
                          requestPluginId: U(e),
                        });
                      },
                    },
                    e.id ?? e.plugin.plugin.id,
                  )),
        (n[21] = i),
        (n[22] = h),
        (n[23] = p),
        (n[24] = w),
        (n[25] = o.reload),
        (n[26] = s),
        (n[27] = y),
        (n[28] = S),
        (n[29] = e))
      : (e = n[29]),
      (D = a.map(e)),
      (n[11] = i),
      (n[12] = h),
      (n[13] = a),
      (n[14] = p),
      (n[15] = w),
      (n[16] = o.reload),
      (n[17] = s),
      (n[18] = y),
      (n[19] = S),
      (n[20] = D));
  } else D = n[20];
  let O;
  n[30] === f ? (O = n[31]) : ((O = f.map(St)), (n[30] = f), (n[31] = O));
  let k;
  return (
    n[32] !== D || n[33] !== O
      ? ((k = (0, $.jsx)($.Fragment, { children: (0, $.jsxs)(R, { children: [D, O] }) })),
        (n[32] = D),
        (n[33] = O),
        (n[34] = k))
      : (k = n[34]),
    k
  );
}
function St(e) {
  return (0, $.jsx)(Ct, { item: e }, e.id);
}
function Ct(e) {
  let t = (0, Dt.c)(8),
    { item: n } = e,
    r;
  t[0] === n.icon
    ? (r = t[1])
    : ((r = n.icon ?? (0, $.jsx)(m, { className: `text-secondary`, "aria-hidden": !1, asset: L })),
      (t[0] = n.icon),
      (t[1] = r));
  let i;
  t[2] === r
    ? (i = t[3])
    : ((i = (0, $.jsx)(`span`, {
        className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
        children: r,
      })),
      (t[2] = r),
      (t[3] = i));
  let a;
  return (
    t[4] !== n.description || t[5] !== n.title || t[6] !== i
      ? ((a = (0, $.jsx)(z, {
          className: `min-h-[60px] opacity-60`,
          label: n.title,
          description: n.description,
          icon: i,
          control: wt,
        })),
        (t[4] = n.description),
        (t[5] = n.title),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
function wt(e) {
  return (0, $.jsx)(I, { ...e, checked: !1, disabled: !0, onChange: Tt });
}
function Tt() {}
function Et(e) {
  let n = (0, Dt.c)(41),
    {
      installButtonLabel: r,
      isPending: i,
      item: a,
      onInstallPlugin: s,
      onOpenPluginDetails: l,
      onToggleInstalledPluginEnabled: d,
      onUninstallPlugin: f,
    } = e,
    p = S(),
    m,
    h,
    g,
    _,
    b;
  if (
    n[0] !== r ||
    n[1] !== p ||
    n[2] !== i ||
    n[3] !== a ||
    n[4] !== s ||
    n[5] !== l ||
    n[6] !== d ||
    n[7] !== f
  ) {
    let e = a.displayName ?? J(a.plugin),
      S = a.plugin.plugin.installed,
      C = !Se(a.plugin.plugin.id);
    _ = `group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap`;
    let w;
    n[13] !== a.plugin || n[14] !== l
      ? ((w = () => {
          l(a.plugin);
        }),
        (n[13] = a.plugin),
        (n[14] = l),
        (n[15] = w))
      : (w = n[15]);
    let T = a.showIconBorder === !1 ? `border-0` : `border border-default`,
      E;
    n[16] === T
      ? (E = n[17])
      : ((E = N(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          T,
        )),
        (n[16] = T),
        (n[17] = E));
    let D =
        a.icon ??
        (0, $.jsx)(Oe, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoDarkUrl: a.plugin.logoDarkPath,
          logoUrl: a.plugin.logoPath,
          fallback: (0, $.jsx)(re, { className: `icon-md text-secondary` }),
        }),
      O;
    n[18] !== E || n[19] !== D
      ? ((O = (0, $.jsx)(`span`, { className: E, children: D })), (n[18] = E), (n[19] = D), (n[20] = O))
      : (O = n[20]);
    let k;
    n[21] === a.title
      ? (k = n[22])
      : ((k = (0, $.jsx)(`div`, {
          className: `min-w-0 truncate text-sm font-medium text-default`,
          children: a.title,
        })),
        (n[21] = a.title),
        (n[22] = k));
    let A;
    n[23] !== a.description || n[24] !== a.descriptionIndicator
      ? ((A =
          a.description == null
            ? null
            : (0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-xs leading-4 text-secondary`,
                children:
                  a.descriptionIndicator == null
                    ? a.description
                    : (0, $.jsxs)(`span`, {
                        className: `inline-flex max-w-full items-center gap-2`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: N(
                              `h-2 w-2 shrink-0 rounded-full`,
                              a.descriptionIndicator === `success`
                                ? `bg-[var(--app-color-icon-success)]`
                                : `bg-[var(--app-color-icon-error)]`,
                            ),
                          }),
                          (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: a.description }),
                        ],
                      }),
              })),
        (n[23] = a.description),
        (n[24] = a.descriptionIndicator),
        (n[25] = A))
      : (A = n[25]);
    let j;
    (n[26] !== k || n[27] !== A
      ? ((j = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [k, A] })),
        (n[26] = k),
        (n[27] = A),
        (n[28] = j))
      : (j = n[28]),
      n[29] !== O || n[30] !== j || n[31] !== w
        ? ((b = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            type: `button`,
            onClick: w,
            children: [O, j],
          })),
          (n[29] = O),
          (n[30] = j),
          (n[31] = w),
          (n[32] = b))
        : (b = n[32]),
      (m = `flex shrink-0 items-center gap-2`),
      (h = a.action),
      (g = S
        ? (0, $.jsxs)($.Fragment, {
            children: [
              a.showManageActions === !0 && (C || a.onTryInChat != null)
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(o, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(y, {
                        label: p.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        a.onTryInChat == null
                          ? null
                          : (0, $.jsx)(x.Item, {
                              leftIconAsset: c,
                              onSelect: () => {
                                a.onTryInChat?.(a.plugin);
                              },
                              children: (0, $.jsx)(u, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try now`,
                                description: `Menu item label for trying a plugin in task from settings`,
                              }),
                            }),
                        C
                          ? (0, $.jsx)(x.Item, {
                              leftIconAsset: v,
                              className: `!text-danger`,
                              leftIconClassName: `text-danger`,
                              disabled: i,
                              onSelect: () => {
                                f(a.plugin);
                              },
                              children: (0, $.jsx)(u, {
                                id: `settings.pluginControls.delete`,
                                defaultMessage: `Delete`,
                                description: `Menu item label for deleting a plugin from settings`,
                              }),
                            })
                          : null,
                      ],
                    }),
                  })
                : null,
              a.showEnableToggle === !1
                ? null
                : (0, $.jsx)(oe, {
                    tooltipContent: a.plugin.plugin.enabled
                      ? (0, $.jsx)(u, {
                          id: `settings.pluginControls.disableToggleTooltip`,
                          defaultMessage: `Disable {pluginName}`,
                          description: `Tooltip label for disabling a plugin from settings`,
                          values: { pluginName: e },
                        })
                      : (0, $.jsx)(u, {
                          id: `settings.pluginControls.enableToggleTooltip`,
                          defaultMessage: `Enable {pluginName}`,
                          description: `Tooltip label for enabling a plugin from settings`,
                          values: { pluginName: e },
                        }),
                    children: (0, $.jsx)(I, {
                      checked: a.plugin.plugin.enabled,
                      disabled: i,
                      ariaLabel: p.formatMessage(
                        {
                          id: `settings.pluginControls.toggleAria`,
                          defaultMessage: `Toggle {pluginName}`,
                          description: `Accessible label for toggling a plugin from settings`,
                        },
                        { pluginName: e },
                      ),
                      onChange: (e) => {
                        d(a.plugin, e);
                      },
                    }),
                  }),
            ],
          })
        : (0, $.jsx)(oe, {
            tooltipContent: (0, $.jsx)(u, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(t, {
                "aria-label": p.formatMessage(
                  {
                    id: `settings.pluginControls.installTooltip`,
                    defaultMessage: `Install {pluginName}`,
                    description: `Tooltip label for installing a plugin from settings`,
                  },
                  { pluginName: e },
                ),
                color: `secondary`,
                disabled: i,
                loading: i,
                onClick: () => {
                  s(a.plugin);
                },
                size: `toolbar`,
                children: r,
              }),
            }),
          })),
      (n[0] = r),
      (n[1] = p),
      (n[2] = i),
      (n[3] = a),
      (n[4] = s),
      (n[5] = l),
      (n[6] = d),
      (n[7] = f),
      (n[8] = m),
      (n[9] = h),
      (n[10] = g),
      (n[11] = _),
      (n[12] = b));
  } else ((m = n[8]), (h = n[9]), (g = n[10]), (_ = n[11]), (b = n[12]));
  let C;
  n[33] !== m || n[34] !== h || n[35] !== g
    ? ((C = (0, $.jsxs)(`div`, { className: m, children: [h, g] })),
      (n[33] = m),
      (n[34] = h),
      (n[35] = g),
      (n[36] = C))
    : (C = n[36]);
  let w;
  return (
    n[37] !== _ || n[38] !== b || n[39] !== C
      ? ((w = (0, $.jsxs)(`div`, { className: _, children: [b, C] })),
        (n[37] = _),
        (n[38] = b),
        (n[39] = C),
        (n[40] = w))
      : (w = n[40]),
    w
  );
}
var Dt, $;
function Ot() {
  return (Ot = e(() => {
    ((Dt = B()),
      g(),
      w(),
      A(),
      E(),
      D(),
      me(),
      F(),
      O(),
      we(),
      se(),
      i(),
      h(),
      Ce(),
      n(),
      p(),
      M(),
      k(),
      xe(),
      ye(),
      Ee(),
      H(),
      ve(),
      Pe(),
      P(),
      f(),
      ($ = V()));
  }))();
}
export { bt as i, Ot as n, vt as r, xt as t };
//# sourceMappingURL=settings-plugin-controls-4dd005ddd141.js.map
