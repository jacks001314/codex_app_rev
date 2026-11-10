import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $ as t,
  $C as n,
  $St as r,
  $st as i,
  D2 as a,
  DB as o,
  LNt as s,
  MD as c,
  MNt as l,
  MZ as u,
  ND as d,
  NNt as f,
  NSt as p,
  O2 as m,
  OB as h,
  PBt as g,
  QY as _,
  Qst as v,
  TY as y,
  Ty as b,
  USt as x,
  Vrt as S,
  XOt as C,
  Y3 as w,
  Z3 as T,
  ZSt as E,
  ZY as D,
  b2 as O,
  cG as k,
  ck as A,
  dw as j,
  et as ee,
  ew as M,
  fw as N,
  iCt as te,
  jZ as P,
  lk as F,
  nB as ne,
  nCt as re,
  okt as I,
  qrt as ie,
  rB as ae,
  rk as oe,
  sw as L,
  tk as se,
  tkt as R,
  tz as ce,
  uk as z,
  uw as B,
  wy as le,
  y2 as ue,
  yR as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Enn as V,
  FF as fe,
  JMn as pe,
  Jbr as H,
  KBr as U,
  M6t as W,
  N6t as G,
  RF as K,
  SNn as q,
  Tnn as me,
  WMn as he,
  Wbr as ge,
  YMn as _e,
  _p as ve,
  bMn as ye,
  bnn as be,
  cA as xe,
  dw as Se,
  fw as Ce,
  gp as we,
  gpr as Te,
  iat as Ee,
  ixr as De,
  kat as Oe,
  mnn as ke,
  oat as Ae,
  qBr as je,
  sA as J,
  xNn as Me,
  xat as Ne,
  yMn as Pe,
} from "./app-initial-ad16eaadf81f.js";
import { n as Fe, t as Ie } from "./settings-loading-row-1fcc5b514745.js";
import {
  D as Le,
  E as Re,
  S as ze,
  T as Be,
  f as Ve,
  i as He,
  l as Ue,
  m as We,
  n as Ge,
  p as Ke,
  s as qe,
  t as Je,
  u as Ye,
} from "./browser-use-origin-state-queries-97f7f3683560.js";
import { a as Xe, i as Ze, n as Qe, r as $e } from "./browser-use-policy-site-permissions-33d16736b491.js";
function et(e) {
  let t = (0, nt.c)(4),
    { backend: r } = e,
    i = r === void 0 ? `iab` : r,
    { selectedHostId: a } = Ae();
  if (je(a).kind !== `local`) return null;
  let o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Y.jsx)(J.Header, {
        title: (0, Y.jsx)(R, {
          id: `settings.browserUse.developerMode.title`,
          defaultMessage: `Developer mode`,
          description: `Title for full CDP developer mode settings`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  return (
    t[1] !== i || t[2] !== a
      ? ((s = (0, Y.jsx)(Y.Fragment, {
          children: (0, Y.jsxs)(J, {
            children: [
              o,
              (0, Y.jsx)(J.Content, {
                children: (0, Y.jsx)(n, { children: (0, Y.jsx)(tt, { backend: i, hostId: a }) }),
              }),
            ],
          }),
        })),
        (t[1] = i),
        (t[2] = a),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function tt(e) {
  let t = (0, nt.c)(27),
    { backend: n, hostId: r } = e,
    i = I(),
    { data: a, isLoading: s } = te(Je),
    c;
  t[0] === r ? (c = t[1]) : ((c = { hostId: r }), (t[0] = r), (t[1] = c));
  let { data: l, isPending: d } = re(ge, c),
    f;
  t[2] === r ? (f = t[3]) : ((f = { hostId: r }), (t[2] = r), (t[3] = f));
  let p = Ue(f),
    m = re(Ge, r),
    h = m !== `unsupported`,
    g;
  t[4] !== n || t[5] !== l || t[6] !== h
    ? ((g =
        ce(l?.requirements?.featureRequirements?.browser_use_full_cdp_access) ||
        (h && l != null && !Be(l.requirements, n === `iab` ? `iab` : `extension`))),
      (t[4] = n),
      (t[5] = l),
      (t[6] = h),
      (t[7] = g))
    : (g = t[7]);
  let _ = g,
    v = s || d || m === `loading` || m === `error`,
    y = a?.fullCdpAccessEnabled === !0 && !v && !_,
    b;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, Y.jsxs)(`span`, {
            className: `inline-flex items-center gap-1 font-medium text-warning`,
            children: [
              (0, Y.jsx)(o, { className: `shrink-0`, "aria-hidden": !1, asset: u }),
              (0, Y.jsx)(R, {
                id: `settings.browserUse.fullCdp.elevatedRisk.label`,
                defaultMessage: `Elevated risk`,
                description: `Label for the elevated risk warning shown for the full CDP developer mode toggle`,
              }),
            ],
          }),
          (0, Y.jsx)(`span`, {
            children: (0, Y.jsx)(R, {
              id: `settings.browserUse.fullCdp.label`,
              defaultMessage: `Enable full CDP access`,
              description: `Label for the full CDP developer mode toggle`,
            }),
          }),
        ],
      })),
      (t[8] = b))
    : (b = t[8]);
  let x;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Y.jsx)(`div`, {
        children: (0, Y.jsx)(R, {
          id: `settings.browserUse.fullCdp.description`,
          defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in connected Browser Use sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
          description: `Description for the full CDP developer mode toggle`,
        }),
      })),
      (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] !== _ || t[11] !== d
    ? ((S =
        !d && _
          ? (0, Y.jsx)(`div`, {
              children: (0, Y.jsx)(R, {
                id: `settings.browserUse.fullCdp.blockedByPolicy`,
                defaultMessage: `Your organization has disabled this setting.`,
                description: `Message shown below the Full CDP access toggle in Browser Use Developer mode when enterprise managed policy explicitly disables the setting. The user cannot enable the toggle.`,
              }),
            })
          : null),
      (t[10] = _),
      (t[11] = d),
      (t[12] = S))
    : (S = t[12]);
  let C;
  t[13] === S
    ? (C = t[14])
    : ((C = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [x, S] })),
      (t[13] = S),
      (t[14] = C));
  let w;
  t[15] === i
    ? (w = t[16])
    : ((w = i.formatMessage({
        id: `settings.browserUse.fullCdp.ariaLabel`,
        defaultMessage: `Toggle full CDP access`,
        description: `Aria label for toggling full CDP access`,
      })),
      (t[15] = i),
      (t[16] = w));
  let T = v || _ || p.isPending,
    E;
  t[17] === p
    ? (E = t[18])
    : ((E = (e) => {
        p.mutate(e);
      }),
      (t[17] = p),
      (t[18] = E));
  let D;
  t[19] !== y || t[20] !== E || t[21] !== w || t[22] !== T
    ? ((D = (0, Y.jsx)(F, { ariaLabel: w, checked: y, disabled: T, onChange: E })),
      (t[19] = y),
      (t[20] = E),
      (t[21] = w),
      (t[22] = T),
      (t[23] = D))
    : (D = t[23]);
  let O;
  return (
    t[24] !== D || t[25] !== C
      ? ((O = (0, Y.jsx)(L, { label: b, description: C, control: D })), (t[24] = D), (t[25] = C), (t[26] = O))
      : (O = t[26]),
    O
  );
}
var nt, Y;
function rt() {
  return (rt = e(() => {
    ((nt = g()), P(), de(), E(), We(), C(), h(), z(), H(), He(), xe(), Ee(), B(), M(), U(), (Y = s()));
  }))();
}
function it() {
  let e = (0, ot.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, st.jsx)(R, {
          id: `settings.browserUse.historyApproval.description`,
          defaultMessage: `Choose if ChatGPT asks for approval before accessing your browser's history`,
          description: `Description for browser use history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function at() {
  let e = (0, ot.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, st.jsx)(R, {
          id: `settings.browserUse.iabHistoryApproval.description`,
          defaultMessage: `Choose whether ChatGPT can access your built-in browser history`,
          description: `Description for in-app browser history approval mode setting`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var ot, st;
function ct() {
  return (ct = e(() => {
    ((ot = g()), C(), (st = s()));
  }))();
}
function lt(e) {
  let t = (0, ut.c)(15),
    { backend: n } = e,
    r = I(),
    i = te(n !== `iab` || Ce),
    { data: a, isLoading: o } = te(Je),
    s = Ve(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(R, {
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
        ? (0, X.jsx)(R, {
            id: `settings.browserUse.webMcp.description`,
            defaultMessage: `Allow ChatGPT to discover and call tools provided by websites, including WebMCP, unless you set a different permission for a site`,
            description: `Explains that the browser's default website tool permission does not override permissions saved for individual sites; WebMCP is the protocol name`,
          })
        : (0, X.jsx)(R, {
            id: `settings.browserUse.webMcp.unavailableDescription`,
            defaultMessage: `Site tools aren't available for this account`,
            description: `Explanation for a disabled WebMCP toggle when neither feature rollout nor managed policy enables site tools`,
          })),
      (t[1] = i),
      (t[2] = l));
  let u;
  t[3] === r
    ? (u = t[4])
    : ((u = r.formatMessage({
        id: `settings.browserUse.webMcp.ariaLabel`,
        defaultMessage: `Toggle site tools by default`,
        description: `Accessible name for the browser's default website tool permission; individual websites can override it`,
      })),
      (t[3] = r),
      (t[4] = u));
  let d = i && (a?.webMcpEnabled ?? !0),
    f = !i || o || s.isPending,
    p;
  t[5] === s
    ? (p = t[6])
    : ((p = (e) => {
        s.mutate(e);
      }),
      (t[5] = s),
      (t[6] = p));
  let m;
  t[7] !== u || t[8] !== d || t[9] !== f || t[10] !== p
    ? ((m = (0, X.jsx)(F, { ariaLabel: u, checked: d, disabled: f, onChange: p })),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== l || t[13] !== m
      ? ((h = (0, X.jsx)(L, { label: c, description: l, control: m })), (t[12] = l), (t[13] = m), (t[14] = h))
      : (h = t[14]),
    h
  );
}
var ut, X;
function dt() {
  return (dt = e(() => {
    ((ut = g()), E(), C(), Se(), z(), He(), B(), (X = s()));
  }))();
}
function ft(e) {
  let t = (0, gt.c)(14),
    { backend: r, browserUseEnabled: i, showHistory: a, showWebMcp: o, siteSettingsRow: s } = e,
    c = i === void 0 || i,
    l = a === void 0 || a,
    u = o !== void 0 && o,
    d = s != null || (c && (l || u)),
    f;
  t[0] !== r || t[1] !== c || t[2] !== d || t[3] !== l || t[4] !== u || t[5] !== s
    ? ((f = d
        ? (0, Z.jsxs)(J, {
            children: [
              (0, Z.jsx)(J.Header, {
                title:
                  r === `chrome`
                    ? (0, Z.jsx)(R, {
                        id: `settings.computerUse.chrome.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for Chromium browser permissions settings section`,
                      })
                    : (0, Z.jsx)(R, {
                        id: `settings.browserUse.policy.browserPermissions.title`,
                        defaultMessage: `Browser permissions`,
                        description: `Title for browser use permissions settings section`,
                      }),
              }),
              (0, Z.jsx)(J.Content, {
                children: (0, Z.jsxs)(n, {
                  children: [
                    s,
                    c
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            l && r === `chrome` ? (0, Z.jsx)(pt, {}) : null,
                            l && r === `iab` ? (0, Z.jsx)(mt, {}) : null,
                            u ? (0, Z.jsx)(lt, { backend: r }) : null,
                          ],
                        })
                      : null,
                  ],
                }),
              }),
            ],
          })
        : null),
      (t[0] = r),
      (t[1] = c),
      (t[2] = d),
      (t[3] = l),
      (t[4] = u),
      (t[5] = s),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r || t[8] !== c || t[9] !== u
    ? ((p = c
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [(0, Z.jsx)(Qe, { backend: r, showWebMcp: u }), (0, Z.jsx)(et, { backend: r })],
          })
        : null),
      (t[7] = r),
      (t[8] = c),
      (t[9] = u),
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
    t = qe(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Z.jsx)(it, {})), (e[0] = n)) : (n = e[0]);
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
    t = Ye(),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Z.jsx)(at, {})), (e[0] = n)) : (n = e[0]);
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
    { backend: n, description: i, writeApprovalModeMutation: a } = e,
    o = r(v),
    { selectedHostId: s } = Ae(),
    { data: c, isLoading: l } = te(Je),
    { data: u, isPending: d } = re(De, s),
    f = (u?.configReadSucceeded === !0 ? u.config.browser_use?.allow_history_access : void 0) !== !1,
    p = n === `iab` ? c?.iabHistoryApprovalMode : c?.chromeHistoryApprovalMode,
    m;
  t[0] === s ? (m = t[1]) : ((m = { failClosed: !0, hostId: s }), (t[0] = s), (t[1] = m));
  let { data: h, isError: g, isPending: _ } = re(ge, m),
    y = h?.requirements ?? null,
    b = n === `iab` ? `iab` : `extension`,
    x;
  t[2] !== y || t[3] !== b ? ((x = Be(y, b)), (t[2] = y), (t[3] = b), (t[4] = x)) : (x = t[4]);
  let S = x,
    C;
  t[5] !== S || t[6] !== y ? ((C = S && Re(y, `history`)), (t[5] = S), (t[6] = y), (t[7] = C)) : (C = t[7]);
  let w = C,
    T;
  t[8] !== y || t[9] !== w ? ((T = ze(y) && !w), (t[8] = y), (t[9] = w), (t[10] = T)) : (T = t[10]);
  let E = T,
    D;
  t[11] !== S || t[12] !== y ? ((D = S && Le(y)), (t[11] = S), (t[12] = y), (t[13] = D)) : (D = t[13]);
  let O = D,
    A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = {
        id: `alwaysAsk`,
        label: (0, Z.jsx)(R, {
          id: `settings.browserUse.approval.alwaysAsk.label`,
          defaultMessage: `Always ask`,
          description: `Label for browser use always ask approval mode`,
        }),
        description: (0, Z.jsx)(R, {
          id: `settings.browserUse.historyApproval.alwaysAsk.description`,
          defaultMessage: `Ask before accessing history`,
          description: `Description for browser use always ask history approval mode`,
        }),
      }),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = {
        id: `neverAsk`,
        label: (0, Z.jsx)(R, {
          id: `settings.browserUse.approval.neverAsk.label`,
          defaultMessage: `Always allow`,
          description: `Label for browser use never ask approval mode`,
        }),
        description: (0, Z.jsx)(R, {
          id: `settings.browserUse.historyApproval.neverAsk.description`,
          defaultMessage: `Access history without asking`,
          description: `Description for browser use never ask history approval mode`,
        }),
      }),
      (t[15] = j))
    : (j = t[15]);
  let ee;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = [
        A,
        j,
        {
          id: `disabled`,
          label: (0, Z.jsx)(R, {
            id: `settings.browserUse.historyApproval.disabled.label`,
            defaultMessage: `Disable`,
            description: `Label for disabled browser history approval mode`,
          }),
          description: (0, Z.jsx)(R, {
            id: `settings.browserUse.historyApproval.disabled.description`,
            defaultMessage: `Do not allow access to history`,
            description: `Description for disabled browser history approval mode`,
          }),
        },
      ]),
      (t[16] = ee))
    : (ee = t[16]);
  let M = ee,
    N;
  t[17] !== w || t[18] !== p || t[19] !== f || t[20] !== O
    ? ((N = p),
      !w || !f ? (N = `disabled`) : p === `neverAsk` && !O && (N = `alwaysAsk`),
      (t[17] = w),
      (t[18] = p),
      (t[19] = f),
      (t[20] = O),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] === N ? (P = t[23]) : ((P = M.find((e) => e.id === N) ?? M[0]), (t[22] = N), (t[23] = P));
  let F = P,
    ne = l || _ || d,
    I = a.isPending,
    ae;
  t[24] !== w ||
  t[25] !== p ||
  t[26] !== f ||
  t[27] !== I ||
  t[28] !== O ||
  t[29] !== o ||
  t[30] !== s ||
  t[31] !== u ||
  t[32] !== a
    ? ((ae = async (e) => {
        if (!((e === p && f) || I || (!w && e !== `disabled`) || (e === `neverAsk` && !O)))
          try {
            if (e === `disabled`) {
              u?.configReadSucceeded === !0 && Object.hasOwn(u.config, `browser_use`)
                ? await Ke(o, s, u, { capability: `history`, enabled: !1 })
                : await a.mutateAsync(e);
              return;
            }
            (e !== p && (await a.mutateAsync(e)),
              f || (await Ke(o, s, u, { capability: `history`, enabled: !0 })));
          } catch {
            o.get(ie).danger(
              (0, Z.jsx)(R, {
                id: `settings.browserUse.historyApproval.saveError`,
                defaultMessage: `Unable to save history setting`,
                description: `Toast shown when saving browser use history approval mode fails`,
              }),
              { errorAnalytics: { toastId: `settings.browserUse.historyApproval.saveError` } },
            );
          }
      }),
      (t[24] = w),
      (t[25] = p),
      (t[26] = f),
      (t[27] = I),
      (t[28] = O),
      (t[29] = o),
      (t[30] = s),
      (t[31] = u),
      (t[32] = a),
      (t[33] = ae))
    : (ae = t[33]);
  let ce = ae,
    z;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: (0, Z.jsx)(R, {
          id: `settings.browserUse.historyApproval.label`,
          defaultMessage: `History`,
          description: `Label for browser use history approval mode setting`,
        }),
      })),
      (t[34] = z))
    : (z = t[34]);
  let B;
  t[35] !== i || t[36] !== E
    ? ((B = E
        ? (0, Z.jsx)(R, {
            id: `settings.browserUse.historyApproval.managedDescription`,
            defaultMessage: `History access is disabled by your organization`,
            description: `Explanation that an enterprise policy disables browser history access`,
          })
        : i),
      (t[35] = i),
      (t[36] = E),
      (t[37] = B))
    : (B = t[37]);
  let le = ne || g || I || !w,
    de = ne || g || I || !w,
    V;
  t[38] === E
    ? (V = t[39])
    : ((V = E ? (0, Z.jsx)(k, { className: `text-secondary` }) : null), (t[38] = E), (t[39] = V));
  let pe = F?.label,
    H;
  t[40] === pe
    ? (H = t[41])
    : ((H = (0, Z.jsx)(`span`, { className: `truncate`, children: pe })), (t[40] = pe), (t[41] = H));
  let U;
  t[42] !== de || t[43] !== V || t[44] !== H
    ? ((U = (0, Z.jsxs)(fe, { className: `w-[152px]`, disabled: de, children: [V, H] })),
      (t[42] = de),
      (t[43] = V),
      (t[44] = H),
      (t[45] = U))
    : (U = t[45]);
  let W;
  t[46] !== N || t[47] !== ce || t[48] !== w || t[49] !== I || t[50] !== O
    ? ((W = (0, Z.jsx)(`div`, {
        className: `flex flex-col`,
        children: M.map((e) => {
          let t = e.id === N;
          return (0, Z.jsx)(
            oe.Item,
            {
              allowWrap: !0,
              disabled: I || (!w && e.id !== `disabled`) || (e.id === `neverAsk` && !O),
              rightIconAsset: t ? ue : void 0,
              onSelect: () => {
                ce(e.id);
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
      (t[46] = N),
      (t[47] = ce),
      (t[48] = w),
      (t[49] = I),
      (t[50] = O),
      (t[51] = W))
    : (W = t[51]);
  let G;
  t[52] !== le || t[53] !== U || t[54] !== W
    ? ((G = (0, Z.jsx)(se, {
        contentWidth: `menuWide`,
        align: `end`,
        disabled: le,
        triggerButton: U,
        children: W,
      })),
      (t[52] = le),
      (t[53] = U),
      (t[54] = W),
      (t[55] = G))
    : (G = t[55]);
  let K;
  t[56] !== E || t[57] !== G
    ? ((K = (0, Z.jsx)(Ze, { managed: E, children: G })), (t[56] = E), (t[57] = G), (t[58] = K))
    : (K = t[58]);
  let q;
  return (
    t[59] !== B || t[60] !== K
      ? ((q = (0, Z.jsx)(L, { label: z, description: B, control: K })), (t[59] = B), (t[60] = K), (t[61] = q))
      : (q = t[61]),
    q
  );
}
var gt, Z;
function _t() {
  return (_t = e(() => {
    ((gt = g()),
      O(),
      E(),
      We(),
      C(),
      A(),
      y(),
      S(),
      H(),
      i(),
      He(),
      rt(),
      ct(),
      Xe(),
      $e(),
      dt(),
      xe(),
      Ee(),
      B(),
      K(),
      M(),
      (Z = s()));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(18),
    { backend: r, browserUseEnabled: i, showHistory: a, showWebMcp: o, siteSettingsRow: s } = e,
    c = i === void 0 || i,
    l = a === void 0 || a,
    u = o !== void 0 && o,
    { selectedHostId: d } = Ae(),
    f = re(Ge, d);
  if (f === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Ie, {
            children: (0, Q.jsx)(R, {
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
        ? ((e = (0, Q.jsx)(we, {
            layout: `settings-row`,
            children: (0, Q.jsx)(R, {
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
      t[2] !== r || t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== s
        ? ((e = (0, Q.jsx)(ft, {
            backend: r,
            browserUseEnabled: c,
            showHistory: l,
            showWebMcp: u,
            siteSettingsRow: s,
          })),
          (t[2] = r),
          (t[3] = c),
          (t[4] = l),
          (t[5] = u),
          (t[6] = s),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let p;
  t[8] !== r || t[9] !== c || t[10] !== u || t[11] !== s
    ? ((p =
        s != null || (c && u)
          ? (0, Q.jsxs)(J, {
              children: [
                (0, Q.jsx)(J.Header, {
                  title:
                    r === `chrome`
                      ? (0, Q.jsx)(R, {
                          id: `settings.computerUse.chrome.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for Chromium browser permissions settings section`,
                        })
                      : (0, Q.jsx)(R, {
                          id: `settings.browserUse.permissions.title`,
                          defaultMessage: `Permissions`,
                          description: `Title for browser use permissions settings section`,
                        }),
                }),
                (0, Q.jsx)(J.Content, {
                  children: (0, Q.jsxs)(n, { children: [s, c && u ? (0, Q.jsx)(lt, { backend: r }) : null] }),
                }),
              ],
            })
          : null),
      (t[8] = r),
      (t[9] = c),
      (t[10] = u),
      (t[11] = s),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === c ? (m = t[14]) : ((m = c ? (0, Q.jsx)(et, {}) : null), (t[13] = c), (t[14] = m));
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
    ((yt = g()), E(), C(), ve(), He(), rt(), _t(), dt(), xe(), Ee(), Fe(), M(), (Q = s()));
  }))();
}
function xt(e) {
  let r = (0, Dt.c)(35),
    {
      emptyStateTitle: i,
      installButtonLabel: a,
      items: s,
      pluginsQuery: c,
      selectedHostId: u,
      unavailableItems: d,
    } = e,
    f;
  r[0] === d ? (f = r[1]) : ((f = d === void 0 ? [] : d), (r[0] = d), (r[1] = f));
  let p = f,
    m = x(),
    { installPlugin: h, status: g } = be(),
    _;
  r[2] === u ? (_ = r[3]) : ((_ = { hostId: u }), (r[2] = u), (r[3] = _));
  let { pendingPluginId: v, setPluginEnabled: y } = _e(_),
    b;
  r[4] === u ? (b = r[5]) : ((b = { hostId: u }), (r[4] = u), (r[5] = b));
  let { pendingUninstallPluginId: S, uninstallPlugin: C } = pe(b),
    T = g?.hostId === u ? g.pluginId : null,
    E = v ?? T ?? S,
    D = s.length + p.length;
  if (c.isLoading && D === 0) {
    let e;
    return (
      r[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(n, {
            children: (0, $.jsx)(Ie, {
              children: (0, $.jsx)(R, {
                id: `settings.plugins.controls.loading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading state for plugin controls in settings`,
              }),
            }),
          })),
          (r[6] = e))
        : (e = r[6]),
      e
    );
  }
  if (c.errorMessage != null) {
    let e;
    return (
      r[7] === c
        ? (e = r[8])
        : ((e = (0, $.jsx)(n, {
            children:
              c.retry == null
                ? (0, $.jsx)(we, { layout: `settings-row`, children: c.errorMessage })
                : (0, $.jsx)(L, {
                    control: (0, $.jsx)(w, {
                      color: `secondary`,
                      size: `toolbar`,
                      onClick: () => void c.retry?.(),
                      children: (0, $.jsx)(R, {
                        id: `settings.plugins.controls.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to retry loading plugin settings after a request fails`,
                      }),
                    }),
                    label: (0, $.jsx)(`span`, { role: `alert`, children: c.errorMessage }),
                  }),
          })),
          (r[7] = c),
          (r[8] = e)),
      e
    );
  }
  if (D === 0) {
    let e;
    return (
      r[9] === i
        ? (e = r[10])
        : ((e = (0, $.jsx)(n, { children: (0, $.jsx)(we, { layout: `settings-row`, children: i }) })),
          (r[9] = i),
          (r[10] = e)),
      e
    );
  }
  let O;
  if (
    r[11] !== a ||
    r[12] !== h ||
    r[13] !== s ||
    r[14] !== m ||
    r[15] !== E ||
    r[16] !== c.reload ||
    r[17] !== u ||
    r[18] !== y ||
    r[19] !== C
  ) {
    let e;
    (r[21] !== a ||
    r[22] !== h ||
    r[23] !== m ||
    r[24] !== E ||
    r[25] !== c.reload ||
    r[26] !== u ||
    r[27] !== y ||
    r[28] !== C
      ? ((e = (e) =>
          e.kind === `disclosure`
            ? (0, $.jsx)(
                `button`,
                {
                  "aria-expanded": e.expanded,
                  className: `group w-full cursor-interaction text-start focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
                  onClick: e.onToggleExpanded,
                  type: `button`,
                  children: (0, $.jsx)(L, {
                    className: `min-h-[60px]`,
                    control: (0, $.jsx)(o, {
                      className: l(`text-secondary`, e.expanded && `rotate-180`),
                      asset: t,
                      "aria-hidden": !1,
                    }),
                    description: e.description,
                    icon: (0, $.jsx)(`span`, {
                      className: `flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
                      children:
                        e.icon ?? (0, $.jsx)(o, { className: `text-secondary`, "aria-hidden": !1, asset: N }),
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
                    L,
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
                                  : (0, $.jsx)(ne, {
                                      tooltipContent: e.toggleTooltip,
                                      children: (0, $.jsx)(F, {
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
                          (0, $.jsx)(o, { className: `text-secondary`, "aria-hidden": !1, asset: N }),
                      }),
                      label: e.title,
                    },
                    e.id,
                  )
                : (0, $.jsx)(
                    Et,
                    {
                      installButtonLabel: a,
                      isPending: E === e.plugin.plugin.id,
                      item: e,
                      onInstallPlugin: (t) => {
                        h(t, {
                          browserFamily: e.browserFamily,
                          hostId: u,
                          marketplaceAnalytics: ye.settings,
                          onSuccess: c.reload,
                        });
                      },
                      onOpenPluginDetails: (e) => {
                        m(Ne(e, { hostId: u, breadcrumb: `settings` }));
                      },
                      onToggleInstalledPluginEnabled: (t, n) => {
                        y({ pluginId: t.plugin.id, pluginDisplayName: e.displayName ?? me(t), enabled: n });
                      },
                      onUninstallPlugin: (e) => {
                        C({
                          marketplaceName: e.marketplaceName,
                          pluginDisplayName: me(e),
                          pluginId: e.plugin.id,
                          pluginName: e.plugin.name,
                          requestPluginId: Te(e),
                        });
                      },
                    },
                    e.id ?? e.plugin.plugin.id,
                  )),
        (r[21] = a),
        (r[22] = h),
        (r[23] = m),
        (r[24] = E),
        (r[25] = c.reload),
        (r[26] = u),
        (r[27] = y),
        (r[28] = C),
        (r[29] = e))
      : (e = r[29]),
      (O = s.map(e)),
      (r[11] = a),
      (r[12] = h),
      (r[13] = s),
      (r[14] = m),
      (r[15] = E),
      (r[16] = c.reload),
      (r[17] = u),
      (r[18] = y),
      (r[19] = C),
      (r[20] = O));
  } else O = r[20];
  let k;
  r[30] === p ? (k = r[31]) : ((k = p.map(St)), (r[30] = p), (r[31] = k));
  let A;
  return (
    r[32] !== O || r[33] !== k
      ? ((A = (0, $.jsx)($.Fragment, { children: (0, $.jsxs)(n, { children: [O, k] }) })),
        (r[32] = O),
        (r[33] = k),
        (r[34] = A))
      : (A = r[34]),
    A
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
    : ((r = n.icon ?? (0, $.jsx)(o, { className: `text-secondary`, "aria-hidden": !1, asset: N })),
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
      ? ((a = (0, $.jsx)(L, {
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
  return (0, $.jsx)(F, { ...e, checked: !1, disabled: !0, onChange: Tt });
}
function Tt() {}
function Et(e) {
  let t = (0, Dt.c)(41),
    {
      installButtonLabel: n,
      isPending: r,
      item: i,
      onInstallPlugin: o,
      onOpenPluginDetails: s,
      onToggleInstalledPluginEnabled: u,
      onUninstallPlugin: d,
    } = e,
    f = I(),
    p,
    m,
    h,
    g,
    v;
  if (
    t[0] !== n ||
    t[1] !== f ||
    t[2] !== r ||
    t[3] !== i ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== u ||
    t[7] !== d
  ) {
    let e = i.displayName ?? me(i.plugin),
      y = i.plugin.plugin.installed,
      b = !q(i.plugin.plugin.id);
    g = `group flex min-h-[60px] items-center gap-3 px-4 py-3 text-sm hover:bg-text/5 max-sm:flex-wrap`;
    let x;
    t[13] !== i.plugin || t[14] !== s
      ? ((x = () => {
          s(i.plugin);
        }),
        (t[13] = i.plugin),
        (t[14] = s),
        (t[15] = x))
      : (x = t[15]);
    let S = i.showIconBorder === !1 ? `border-0` : `border border-default`,
      C;
    t[16] === S
      ? (C = t[17])
      : ((C = l(
          `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-transparent`,
          S,
        )),
        (t[16] = S),
        (t[17] = C));
    let T =
        i.icon ??
        (0, $.jsx)(W, {
          alt: e,
          className: `h-full w-full object-contain`,
          logoDarkUrl: i.plugin.logoDarkPath,
          logoUrl: i.plugin.logoPath,
          fallback: (0, $.jsx)(c, { className: `icon-md text-secondary` }),
        }),
      E;
    t[18] !== C || t[19] !== T
      ? ((E = (0, $.jsx)(`span`, { className: C, children: T })), (t[18] = C), (t[19] = T), (t[20] = E))
      : (E = t[20]);
    let D;
    t[21] === i.title
      ? (D = t[22])
      : ((D = (0, $.jsx)(`div`, {
          className: `min-w-0 truncate text-sm font-medium text-default`,
          children: i.title,
        })),
        (t[21] = i.title),
        (t[22] = D));
    let O;
    t[23] !== i.description || t[24] !== i.descriptionIndicator
      ? ((O =
          i.description == null
            ? null
            : (0, $.jsx)(`div`, {
                className: `min-w-0 truncate text-xs leading-4 text-secondary`,
                children:
                  i.descriptionIndicator == null
                    ? i.description
                    : (0, $.jsxs)(`span`, {
                        className: `inline-flex max-w-full items-center gap-2`,
                        children: [
                          (0, $.jsx)(`span`, {
                            className: l(
                              `h-2 w-2 shrink-0 rounded-full`,
                              i.descriptionIndicator === `success`
                                ? `bg-[var(--app-color-icon-success)]`
                                : `bg-[var(--app-color-icon-error)]`,
                            ),
                          }),
                          (0, $.jsx)(`span`, { className: `min-w-0 truncate`, children: i.description }),
                        ],
                      }),
              })),
        (t[23] = i.description),
        (t[24] = i.descriptionIndicator),
        (t[25] = O))
      : (O = t[25]);
    let k;
    (t[26] !== D || t[27] !== O
      ? ((k = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [D, O] })),
        (t[26] = D),
        (t[27] = O),
        (t[28] = k))
      : (k = t[28]),
      t[29] !== E || t[30] !== k || t[31] !== x
        ? ((v = (0, $.jsxs)(`button`, {
            className: `flex min-w-0 flex-1 cursor-interaction appearance-none items-center gap-3 border-0 bg-transparent p-0 text-start text-inherit [font:inherit] focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
            type: `button`,
            onClick: x,
            children: [E, k],
          })),
          (t[29] = E),
          (t[30] = k),
          (t[31] = x),
          (t[32] = v))
        : (v = t[32]),
      (p = `flex shrink-0 items-center gap-2`),
      (m = i.action),
      (h = y
        ? (0, $.jsxs)($.Fragment, {
            children: [
              i.showManageActions === !0 && (b || i.onTryInChat != null)
                ? (0, $.jsx)(`div`, {
                    className: `invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100`,
                    children: (0, $.jsxs)(se, {
                      align: `end`,
                      contentWidth: `sm`,
                      triggerButton: (0, $.jsx)(le, {
                        label: f.formatMessage({
                          id: `settings.pluginControls.moreActions`,
                          defaultMessage: `More actions`,
                          description: `Aria label for the more actions menu in settings plugin controls`,
                        }),
                      }),
                      children: [
                        i.onTryInChat == null
                          ? null
                          : (0, $.jsx)(oe.Item, {
                              leftIconAsset: a,
                              onSelect: () => {
                                i.onTryInChat?.(i.plugin);
                              },
                              children: (0, $.jsx)(R, {
                                id: `settings.pluginControls.tryItNow`,
                                defaultMessage: `Try now`,
                                description: `Menu item label for trying a plugin in task from settings`,
                              }),
                            }),
                        b
                          ? (0, $.jsx)(oe.Item, {
                              leftIconAsset: _,
                              className: `!text-danger`,
                              leftIconClassName: `text-danger`,
                              disabled: r,
                              onSelect: () => {
                                d(i.plugin);
                              },
                              children: (0, $.jsx)(R, {
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
              i.showEnableToggle === !1
                ? null
                : (0, $.jsx)(ne, {
                    tooltipContent: i.plugin.plugin.enabled
                      ? (0, $.jsx)(R, {
                          id: `settings.pluginControls.disableToggleTooltip`,
                          defaultMessage: `Disable {pluginName}`,
                          description: `Tooltip label for disabling a plugin from settings`,
                          values: { pluginName: e },
                        })
                      : (0, $.jsx)(R, {
                          id: `settings.pluginControls.enableToggleTooltip`,
                          defaultMessage: `Enable {pluginName}`,
                          description: `Tooltip label for enabling a plugin from settings`,
                          values: { pluginName: e },
                        }),
                    children: (0, $.jsx)(F, {
                      checked: i.plugin.plugin.enabled,
                      disabled: r,
                      ariaLabel: f.formatMessage(
                        {
                          id: `settings.pluginControls.toggleAria`,
                          defaultMessage: `Toggle {pluginName}`,
                          description: `Accessible label for toggling a plugin from settings`,
                        },
                        { pluginName: e },
                      ),
                      onChange: (e) => {
                        u(i.plugin, e);
                      },
                    }),
                  }),
            ],
          })
        : (0, $.jsx)(ne, {
            tooltipContent: (0, $.jsx)(R, {
              id: `settings.pluginControls.installTooltip`,
              defaultMessage: `Install {pluginName}`,
              description: `Tooltip label for installing a plugin from settings`,
              values: { pluginName: e },
            }),
            children: (0, $.jsx)(`div`, {
              children: (0, $.jsx)(w, {
                "aria-label": f.formatMessage(
                  {
                    id: `settings.pluginControls.installTooltip`,
                    defaultMessage: `Install {pluginName}`,
                    description: `Tooltip label for installing a plugin from settings`,
                  },
                  { pluginName: e },
                ),
                color: `secondary`,
                disabled: r,
                loading: r,
                onClick: () => {
                  o(i.plugin);
                },
                size: `toolbar`,
                children: n,
              }),
            }),
          })),
      (t[0] = n),
      (t[1] = f),
      (t[2] = r),
      (t[3] = i),
      (t[4] = o),
      (t[5] = s),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = v));
  } else ((p = t[8]), (m = t[9]), (h = t[10]), (g = t[11]), (v = t[12]));
  let y;
  t[33] !== p || t[34] !== m || t[35] !== h
    ? ((y = (0, $.jsxs)(`div`, { className: p, children: [m, h] })),
      (t[33] = p),
      (t[34] = m),
      (t[35] = h),
      (t[36] = y))
    : (y = t[36]);
  let b;
  return (
    t[37] !== g || t[38] !== v || t[39] !== y
      ? ((b = (0, $.jsxs)(`div`, { className: g, children: [v, y] })),
        (t[37] = g),
        (t[38] = v),
        (t[39] = y),
        (t[40] = b))
      : (b = t[40]),
    b
  );
}
var Dt, $;
function Ot() {
  return (Ot = e(() => {
    ((Dt = g()),
      m(),
      ee(),
      j(),
      D(),
      f(),
      V(),
      C(),
      p(),
      G(),
      T(),
      A(),
      h(),
      ve(),
      b(),
      z(),
      ae(),
      d(),
      Pe(),
      ke(),
      Oe(),
      Me(),
      he(),
      Fe(),
      B(),
      M(),
      ($ = s()));
  }))();
}
export { bt as i, Ot as n, vt as r, xt as t };
//# sourceMappingURL=settings-plugin-controls-fa3c8beda814.js.map
