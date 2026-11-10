import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $7 as n,
  CPt as r,
  Cot as i,
  Ext as a,
  IDt as o,
  Ixt as s,
  J7 as c,
  Ls as l,
  Mz as u,
  NO as d,
  Nz as f,
  PO as p,
  Pxt as m,
  Rnt as h,
  Rs as g,
  SPt as _,
  VDt as v,
  Vxt as y,
  _Mt as b,
  _O as x,
  _xt as S,
  fO as C,
  g$ as w,
  gMt as T,
  gO as E,
  h$ as D,
  i3 as O,
  jDt as k,
  mO as A,
  nst as j,
  oO as M,
  r3 as N,
  t3 as P,
  tst as ee,
  vO as F,
  vzt as I,
  wot as te,
  xMt as ne,
  yzt as L,
  zxt as R,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bgr as z,
  Ftn as B,
  Ggr as V,
  Itn as H,
  JPn as U,
  QDr as re,
  Rrt as ie,
  Sk as W,
  Tdn as ae,
  XDr as G,
  XPr as K,
  YPr as oe,
  Z1n as se,
  ZPn as q,
  a0n as J,
  acr as Y,
  co as ce,
  ecr as le,
  ext as X,
  jdn as ue,
  k8n as de,
  lo as Z,
  ncr as fe,
  tcr as pe,
  txt as me,
  v8n as he,
  xk as ge,
  zrt as _e,
} from "./app-initial-5851df3f6cb1.js";
import { n as ve, t as ye } from "./use-app-connect-flow-7088479fda99.js";
import { r as be, t as xe } from "./hooks-settings-route-8191acda142e.js";
import { n as Se, t as Ce } from "./first-app-connect-ambient-suggestions-97c2f684e2f1.js";
import { n as we, t as Te } from "./app-card-23a383c72dd0.js";
function Ee(e) {
  let t = (0, Q.c)(37),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      isAppConnectPending: s,
      mcpServerNamesRequiringAuthentication: c,
      open: l,
      selectedTab: u,
      tabStatus: d,
      onConnectApp: f,
      onInstallPlugin: p,
      onOpenChange: m,
      onOpenHooksSettings: h,
      onAuthenticateMcp: g,
      onOpenSettings: _,
      onRetry: v,
      onSelectTab: y,
      onShown: b,
    } = e,
    S;
  t[0] === b
    ? (S = t[1])
    : ((S = {
        onOpenAutoFocus: (e) => {
          (e.preventDefault(),
            e.currentTarget instanceof HTMLElement && e.currentTarget.querySelector(`h2`)?.focus(),
            b?.());
        },
      }),
      (t[0] = b),
      (t[1] = S));
  let C;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(o, {
        id: `externalAgentImport.setupDialog.close`,
        defaultMessage: `Close imported setup`,
        description: `Accessible label for closing the imported setup dialog`,
      })),
      (t[2] = C))
    : (C = t[2]);
  let w;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { maxHeight: Re, minHeight: ze }), (t[3] = w))
    : (w = t[3]);
  let T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, $.jsx)(X, { sourceIconVariant: `neutral` }),
      })),
      (t[4] = T))
    : (T = t[4]);
  let D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(x, {
        className: `heading-xl mt-8 block text-default outline-none`,
        tabIndex: -1,
        children: (0, $.jsx)(o, {
          id: `externalAgentImport.setupDialog.title`,
          defaultMessage: `Continue with your existing setup`,
          description: `Title for the imported setup follow-up dialog`,
        }),
      })),
      (t[5] = D))
    : (D = t[5]);
  let O;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== c || t[11] !== _ || t[12] !== d
    ? ((O = (0, $.jsxs)(`div`, {
        className: `shrink-0 px-5 pt-5`,
        children: [
          T,
          D,
          (0, $.jsx)(E, {
            className: `mt-2 text-base leading-6 text-codex-description`,
            children: (0, $.jsx)(De, {
              appsRequiringConnection: n,
              connectedApps: r,
              hasImportedHooks: i,
              importedPlugins: a,
              mcpServerNamesRequiringAuthentication: c,
              tabStatus: d,
              onOpenSettings: _,
            }),
          }),
        ],
      })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = a),
      (t[10] = c),
      (t[11] = _),
      (t[12] = d),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== i ||
  t[17] !== a ||
  t[18] !== s ||
  t[19] !== c ||
  t[20] !== g ||
  t[21] !== f ||
  t[22] !== p ||
  t[23] !== h ||
  t[24] !== v ||
  t[25] !== y ||
  t[26] !== u ||
  t[27] !== d
    ? ((k = (0, $.jsx)(ke, {
        appsRequiringConnection: n,
        connectedApps: r,
        hasImportedHooks: i,
        importedPlugins: a,
        isAppConnectPending: s,
        mcpServerNamesRequiringAuthentication: c,
        selectedTab: u,
        tabStatus: d,
        onConnectApp: f,
        onInstallPlugin: p,
        onOpenHooksSettings: h,
        onAuthenticateMcp: g,
        onRetry: v,
        onSelectTab: y,
      })),
      (t[14] = n),
      (t[15] = r),
      (t[16] = i),
      (t[17] = a),
      (t[18] = s),
      (t[19] = c),
      (t[20] = g),
      (t[21] = f),
      (t[22] = p),
      (t[23] = h),
      (t[24] = v),
      (t[25] = y),
      (t[26] = u),
      (t[27] = d),
      (t[28] = k))
    : (k = t[28]);
  let j;
  t[29] !== O || t[30] !== k
    ? ((j = (0, $.jsxs)(M, { className: `overflow-hidden select-none`, style: w, children: [O, k] })),
      (t[29] = O),
      (t[30] = k),
      (t[31] = j))
    : (j = t[31]);
  let N;
  return (
    t[32] !== m || t[33] !== l || t[34] !== S || t[35] !== j
      ? ((N = (0, $.jsx)(A, {
          contentProps: S,
          dialogCloseLabel: C,
          open: l,
          size: `wide`,
          onOpenChange: m,
          children: j,
        })),
        (t[32] = m),
        (t[33] = l),
        (t[34] = S),
        (t[35] = j),
        (t[36] = N))
      : (N = t[36]),
    N
  );
}
function De(e) {
  let t = (0, Q.c)(29),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      mcpServerNamesRequiringAuthentication: s,
      tabStatus: c,
      variant: l,
      onOpenSettings: u,
    } = e,
    d = l === void 0 ? `dialog` : l,
    f = d === `onboarding` || d === `conversational` ? He : Ve,
    p;
  t[0] === r ? (p = t[1]) : ((p = new Set(r.map(Oe))), (t[0] = r), (t[1] = p));
  let m = p,
    h;
  if (t[2] !== m || t[3] !== a) {
    let e;
    (t[5] === m
      ? (e = t[6])
      : ((e = (e) => {
          let { app: t } = e;
          return !m.has(t.id);
        }),
        (t[5] = m),
        (t[6] = e)),
      (h = a.filter(e)),
      (t[2] = m),
      (t[3] = a),
      (t[4] = h));
  } else h = t[4];
  let g = h.length,
    _;
  if (t[7] !== n || t[8] !== m) {
    let e;
    (t[10] === m
      ? (e = t[11])
      : ((e = (e) => {
          let { id: t } = e;
          return !m.has(t);
        }),
        (t[10] = m),
        (t[11] = e)),
      (_ = n.filter(e)),
      (t[7] = n),
      (t[8] = m),
      (t[9] = _));
  } else _ = t[9];
  let v = g + _.length + r.length,
    y = +!!i,
    b;
  t[12] !== s.length || t[13] !== v || t[14] !== y
    ? ((b = { apps: v, hooks: y, mcps: s.length }), (t[12] = s.length), (t[13] = v), (t[14] = y), (t[15] = b))
    : (b = t[15]);
  let x = b,
    S;
  if (t[16] !== x || t[17] !== f || t[18] !== c) {
    let e;
    (t[20] !== x || t[21] !== c
      ? ((e = (e) => (e === `mcps` ? x[e] > 0 : x[e] > 0 || c[e] !== `ready`)),
        (t[20] = x),
        (t[21] = c),
        (t[22] = e))
      : (e = t[22]),
      (S = f.filter(e).join(`_`)),
      (t[16] = x),
      (t[17] = f),
      (t[18] = c),
      (t[19] = S));
  } else S = t[19];
  let C = S,
    w = u == null ? `false` : `true`,
    T;
  t[23] === u
    ? (T = t[24])
    : ((T = (e) =>
        (0, $.jsx)(
          `button`,
          {
            className: `cursor-interaction rounded-sm border-0 bg-transparent p-0 text-inherit underline decoration-current underline-offset-2 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
            type: `button`,
            onClick: u,
            children: e,
          },
          `settings`,
        )),
      (t[23] = u),
      (t[24] = T));
  let E;
  return (
    t[25] !== C || t[26] !== w || t[27] !== T
      ? ((E = (0, $.jsx)(o, {
          id: `externalAgentImport.setup.subtitle.v3`,
          defaultMessage: `Finish setting up the {categories, select, apps {plugins} mcps {MCPs} hooks {hooks} apps_mcps {plugins and MCPs} apps_hooks {plugins and hooks} mcps_hooks {MCPs and hooks} apps_mcps_hooks {plugins, MCPs, and hooks} other {tools}} you imported{settingsAvailable, select, true {. You can do this now or later in <settings>Settings</settings>} other {}}`,
          description: `Description for imported plugin, MCP, and hook categories that still need setup. When available, the settings element opens Import settings.`,
          values: { categories: C, settingsAvailable: w, settings: T },
        })),
        (t[25] = C),
        (t[26] = w),
        (t[27] = T),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
function Oe(e) {
  let { id: t } = e;
  return t;
}
function ke(e) {
  let t = (0, Q.c)(110),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      isAppConnectPending: s,
      mcpServerNamesRequiringAuthentication: c,
      selectedTab: l,
      tabStatus: u,
      variant: f,
      onAllItemsComplete: p,
      onConnectApp: m,
      onInstallPlugin: h,
      onOpenHooksSettings: g,
      onAuthenticateMcp: _,
      onRetry: y,
      onSelectTab: b,
    } = e,
    x = f === void 0 ? `dialog` : f,
    S = v(),
    C = x === `dialog` || x === `settings`,
    w = C ? Ve : He,
    E;
  t[0] === r ? (E = t[1]) : ((E = new Set(r.map(Ae))), (t[0] = r), (t[1] = E));
  let D = E,
    O;
  if (t[2] !== n || t[3] !== D) {
    let e;
    (t[5] === D
      ? (e = t[6])
      : ((e = (e) => {
          let { id: t } = e;
          return !D.has(t);
        }),
        (t[5] = D),
        (t[6] = e)),
      (O = n.filter(e)),
      (t[2] = n),
      (t[3] = D),
      (t[4] = O));
  } else O = t[4];
  let k = O,
    A;
  if (t[7] !== D || t[8] !== a) {
    let e;
    (t[10] === D
      ? (e = t[11])
      : ((e = (e) => {
          let { app: t } = e;
          return !D.has(t.id);
        }),
        (t[10] = D),
        (t[11] = e)),
      (A = a.filter(e)),
      (t[7] = D),
      (t[8] = a),
      (t[9] = A));
  } else A = t[9];
  let j = A,
    M;
  t[12] !== r ||
  t[13] !== i ||
  t[14] !== s ||
  t[15] !== c.length ||
  t[16] !== p ||
  t[17] !== k.length ||
  t[18] !== j.length ||
  t[19] !== C ||
  t[20] !== w ||
  t[21] !== u
    ? ((M =
        p != null &&
        (!C || !i) &&
        k.length === 0 &&
        j.length === 0 &&
        c.length === 0 &&
        r.every((e) => e.isAccessible && e.isEnabled && !s(e.id)) &&
        w.every((e) => u[e] === `ready`)),
      (t[12] = r),
      (t[13] = i),
      (t[14] = s),
      (t[15] = c.length),
      (t[16] = p),
      (t[17] = k.length),
      (t[18] = j.length),
      (t[19] = C),
      (t[20] = w),
      (t[21] = u),
      (t[22] = M))
    : (M = t[22]);
  let N = M,
    P;
  t[23] === p ? (P = t[24]) : ((P = () => p?.()), (t[23] = p), (t[24] = P));
  let ee = (0, Le.useEffectEvent)(P),
    F;
  t[25] !== N || t[26] !== ee
    ? ((F = () => {
        N && ee();
      }),
      (t[25] = N),
      (t[26] = ee),
      (t[27] = F))
    : (F = t[27]);
  let I;
  (t[28] === N ? (I = t[29]) : ((I = [N]), (t[28] = N), (t[29] = I)), (0, Le.useEffect)(F, I));
  let te = j.length + k.length + r.length,
    ne = +!!i,
    L;
  t[30] !== c.length || t[31] !== ne || t[32] !== te
    ? ((L = { apps: te, hooks: ne, mcps: c.length }),
      (t[30] = c.length),
      (t[31] = ne),
      (t[32] = te),
      (t[33] = L))
    : (L = t[33]);
  let R = L,
    z,
    B,
    V,
    H;
  if (t[34] !== R || t[35] !== c.length || t[36] !== l || t[37] !== w || t[38] !== u) {
    V = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      if (
        (t[43] !== R || t[44] !== u
          ? ((e = (e) => (e === `mcps` ? R[e] > 0 : R[e] > 0 || u[e] !== `ready`)),
            (t[43] = R),
            (t[44] = u),
            (t[45] = e))
          : (e = t[45]),
        (H = w.filter(e)),
        (z = H.includes(l) ? l : H[0]),
        z == null)
      ) {
        V = null;
        break bb0;
      }
      B = [
        {
          key: `apps`,
          name: (0, $.jsx)(o, {
            id: `externalAgentImport.setupDialog.tabs.plugins`,
            defaultMessage: `{status, select, ready {Plugins ({count})} other {Plugins}}`,
            description: `Plugins tab label with imported plugin setup count when available`,
            values: { count: R.apps, status: u.apps },
          }),
          panelId: Be.apps,
        },
        {
          key: `mcps`,
          name: (0, $.jsx)(o, {
            id: `externalAgentImport.setupDialog.tabs.mcps.v3`,
            defaultMessage: `{status, select, ready {MCPs ({count})} other {MCPs}}`,
            description: `MCPs tab label with authentication-required count when available`,
            values: { count: c.length, status: u.mcps },
          }),
          panelId: Be.mcps,
        },
        {
          key: `hooks`,
          name: (0, $.jsx)(o, {
            id: `externalAgentImport.setupDialog.tabs.hooks`,
            defaultMessage: `Hooks`,
            description: `Hooks tab label in the imported setup dialog`,
          }),
          panelId: Be.hooks,
        },
      ].filter((e) => H.includes(e.key));
    }
    ((t[34] = R),
      (t[35] = c.length),
      (t[36] = l),
      (t[37] = w),
      (t[38] = u),
      (t[39] = z),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H));
  } else ((z = t[39]), (B = t[40]), (V = t[41]), (H = t[42]));
  if (V !== Symbol.for(`react.early_return_sentinel`)) return V;
  let U = B,
    re;
  t[46] !== b || t[47] !== H
    ? ((re = (e) => {
        let t = H.findIndex(
          (t) => e.currentTarget.querySelector(`[aria-controls="${Be[t]}"]`) === document.activeElement,
        );
        if (t === -1) return;
        let n;
        bb97: switch (e.key) {
          case `Home`:
            n = 0;
            break bb97;
          case `End`:
            n = H.length - 1;
            break bb97;
          case `ArrowRight`:
            n = (t + 1) % H.length;
            break bb97;
          case `ArrowLeft`:
            n = (t - 1 + H.length) % H.length;
            break bb97;
          default:
            return;
        }
        e.preventDefault();
        let r = H[n];
        r != null && (b(r), e.currentTarget.querySelector(`[aria-controls="${Be[r]}"]`)?.focus());
      }),
      (t[46] = b),
      (t[47] = H),
      (t[48] = re))
    : (re = t[48]);
  let ie = re,
    W = x !== `conversational` && `px-5`,
    ae = (x === `settings` || x === `onboarding`) && `pt-4`,
    G;
  t[49] !== W || t[50] !== ae ? ((G = T(W, ae)), (t[49] = W), (t[50] = ae), (t[51] = G)) : (G = t[51]);
  let K;
  t[52] === S
    ? (K = t[53])
    : ((K = S.formatMessage({
        id: `externalAgentImport.setupDialog.tabs.ariaLabel`,
        defaultMessage: `Imported setup categories`,
        description: `Accessible label for tabs in the imported setup dialog`,
      })),
      (t[52] = S),
      (t[53] = K));
  let oe = x === `dialog` ? `mt-8` : void 0,
    se;
  t[54] !== z || t[55] !== b || t[56] !== K || t[57] !== oe || t[58] !== U
    ? ((se = (0, $.jsx)(ce, {
        ariaLabel: K,
        className: oe,
        selectedKey: z,
        tabs: U,
        variant: `toolbar`,
        onSelect: b,
      })),
      (t[54] = z),
      (t[55] = b),
      (t[56] = K),
      (t[57] = oe),
      (t[58] = U),
      (t[59] = se))
    : (se = t[59]);
  let q;
  t[60] !== ie || t[61] !== G || t[62] !== se
    ? ((q = (0, $.jsx)(`div`, { className: G, role: `presentation`, onKeyDown: ie, children: se })),
      (t[60] = ie),
      (t[61] = G),
      (t[62] = se),
      (t[63] = q))
    : (q = t[63]);
  let J = x === `dialog` ? `mt-5 grid min-h-0 flex-1 grid-cols-1` : `flex min-h-0 flex-1 flex-col pt-3`,
    Y = (x === `settings` || x === `onboarding`) && `px-5 pb-3`,
    le;
  t[64] !== J || t[65] !== Y ? ((le = T(J, Y)), (t[64] = J), (t[65] = Y), (t[66] = le)) : (le = t[66]);
  let X;
  t[67] !== z || t[68] !== x || t[69] !== H
    ? ((X = x === `dialog` ? H : [z]), (t[67] = z), (t[68] = x), (t[69] = H), (t[70] = X))
    : (X = t[70]);
  let ue;
  if (
    t[71] !== z ||
    t[72] !== r ||
    t[73] !== S ||
    t[74] !== s ||
    t[75] !== R ||
    t[76] !== c ||
    t[77] !== _ ||
    t[78] !== m ||
    t[79] !== h ||
    t[80] !== g ||
    t[81] !== y ||
    t[82] !== k ||
    t[83] !== j ||
    t[84] !== X ||
    t[85] !== u ||
    t[86] !== x
  ) {
    let e;
    (t[88] !== z ||
    t[89] !== r ||
    t[90] !== S ||
    t[91] !== s ||
    t[92] !== R ||
    t[93] !== c ||
    t[94] !== _ ||
    t[95] !== m ||
    t[96] !== h ||
    t[97] !== g ||
    t[98] !== y ||
    t[99] !== k ||
    t[100] !== j ||
    t[101] !== u ||
    t[102] !== x
      ? ((e = (e) => {
          let t = e === z,
            n = R[e],
            i = u[e],
            a = (0, $.jsxs)($.Fragment, {
              children: [
                e === `apps` &&
                  (0, $.jsx)(je, {
                    appsRequiringConnection: k,
                    connectedApps: r,
                    importedPlugins: j,
                    isAppConnectPending: s,
                    onConnectApp: m,
                    onInstallPlugin: h,
                  }),
                e === `mcps` && (0, $.jsx)(Ne, { mcps: c, onAuthenticateMcp: _ }),
                e === `hooks` && (0, $.jsx)(Pe, { onOpenHooksSettings: g }),
              ],
            });
          return (0, $.jsx)(
            `div`,
            {
              id: Be[e],
              "aria-hidden": x === `dialog` ? !t : void 0,
              "aria-label": S.formatMessage(
                {
                  id: `externalAgentImport.setupDialog.panelAriaLabel.v3`,
                  defaultMessage: `{tab, select, apps {Imported plugins requiring setup} mcps {Imported MCPs requiring authentication} other {Imported hooks requiring review}}`,
                  description: `Accessible label for the selected imported setup panel`,
                },
                { tab: e },
              ),
              className: T(
                `flex min-h-0 flex-1 flex-col`,
                x === `dialog` && `col-start-1 row-start-1`,
                x === `dialog` && !t && `invisible`,
              ),
              inert: x === `dialog` ? !t : void 0,
              role: `tabpanel`,
              tabIndex: t ? 0 : -1,
              children:
                n === 0
                  ? (0, $.jsx)(Ie, { status: i === `ready` ? `empty` : i, tab: e, onRetry: y })
                  : x === `dialog`
                    ? (0, $.jsx)(d, {
                        className: `relative min-h-0 flex-1`,
                        fadeClassName: `inset-x-5`,
                        scrollClassName: `h-full overflow-y-auto px-5 pb-1`,
                        children: a,
                      })
                    : a,
            },
            e,
          );
        }),
        (t[88] = z),
        (t[89] = r),
        (t[90] = S),
        (t[91] = s),
        (t[92] = R),
        (t[93] = c),
        (t[94] = _),
        (t[95] = m),
        (t[96] = h),
        (t[97] = g),
        (t[98] = y),
        (t[99] = k),
        (t[100] = j),
        (t[101] = u),
        (t[102] = x),
        (t[103] = e))
      : (e = t[103]),
      (ue = X.map(e)),
      (t[71] = z),
      (t[72] = r),
      (t[73] = S),
      (t[74] = s),
      (t[75] = R),
      (t[76] = c),
      (t[77] = _),
      (t[78] = m),
      (t[79] = h),
      (t[80] = g),
      (t[81] = y),
      (t[82] = k),
      (t[83] = j),
      (t[84] = X),
      (t[85] = u),
      (t[86] = x),
      (t[87] = ue));
  } else ue = t[87];
  let de;
  t[104] !== le || t[105] !== ue
    ? ((de = (0, $.jsx)(`div`, { className: le, children: ue })), (t[104] = le), (t[105] = ue), (t[106] = de))
    : (de = t[106]);
  let Z;
  return (
    t[107] !== q || t[108] !== de
      ? ((Z = (0, $.jsxs)($.Fragment, { children: [q, de] })), (t[107] = q), (t[108] = de), (t[109] = Z))
      : (Z = t[109]),
    Z
  );
}
function Ae(e) {
  let { id: t } = e;
  return t;
}
function je(e) {
  let t = (0, Q.c)(8),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      importedPlugins: i,
      isAppConnectPending: a,
      onConnectApp: o,
      onInstallPlugin: s,
    } = e,
    c = v(),
    l;
  if (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== c || t[4] !== a || t[5] !== o || t[6] !== s) {
    let e = [
      ...i.map((e) => {
        let { app: t, plugin: n } = e;
        return {
          action: `install`,
          app: t,
          key: `plugin:${n.plugin.id}`,
          onInstallApp: async () => {
            s(n, t);
          },
        };
      }),
      ...[...n.map(Me), ...r].map((e) => ({
        action: `connect`,
        app: e,
        key: `app:${e.id}`,
        onInstallApp: async () => {
          await o(e);
        },
      })),
    ];
    ((l = (0, $.jsx)($.Fragment, {
      children: e.map((e) => {
        let { action: t, app: n, key: r, onInstallApp: i } = e,
          o = a(n.id),
          s = t === `install` ? { ...n, isAccessible: !1 } : n;
        return (0, $.jsx)(
          Te,
          {
            app:
              s.description == null
                ? {
                    ...s,
                    description: c.formatMessage({
                      id: `externalAgentImport.setupDialog.apps.fallbackDescription`,
                      defaultMessage: `Imported from another AI app`,
                      description: `Fallback description for an app imported from another AI app`,
                    }),
                  }
                : s,
            cardIconContainerVariant: `outline`,
            installActionDisabled: t === `install` && o,
            installActionType: t,
            installActionLabel:
              t === `install`
                ? c.formatMessage({
                    id: `externalAgentImport.setupDialog.installPluginAction`,
                    defaultMessage: `Install`,
                    description: `Button label for installing a plugin matched to an imported app`,
                  })
                : void 0,
            installedStateAction: `toggle`,
            isConnectingApp: o,
            manageAction: `menu`,
            presentation: `row`,
            updatingAppId: null,
            onInstallApp: i,
          },
          r,
        );
      }),
    })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = c),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l));
  } else l = t[7];
  return l;
}
function Me(e) {
  return { ...e, isAccessible: !1 };
}
function Ne(e) {
  let t = (0, Q.c)(7),
    { mcps: n, onAuthenticateMcp: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, $.jsx)(
            Fe,
            {
              action: `authenticate`,
              description: (0, $.jsx)(o, {
                id: `externalAgentImport.setupDialog.mcps.description`,
                defaultMessage: `Authentication is required before this MCP server can be used`,
                description: `Description for an imported MCP server that requires authentication`,
              }),
              icon: (0, $.jsx)(B, { "aria-hidden": `true`, className: `icon-base text-secondary` }),
              label: e,
              onAction: () => {
                r(e);
              },
            },
            e,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i ? (a = t[6]) : ((a = (0, $.jsx)($.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function Pe(e) {
  let t = (0, Q.c)(7),
    { onOpenHooksSettings: n } = e,
    r = v(),
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(o, {
        id: `externalAgentImport.setupDialog.hooks.description.v3`,
        defaultMessage: `Review imported hooks before allowing them to run`,
        description: `Description for the imported hooks review action`,
      })),
      (a = (0, $.jsx)(u, { className: `text-secondary`, asset: D, "aria-hidden": `true` })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let s;
  t[2] === r
    ? (s = t[3])
    : ((s = r.formatMessage({
        id: `externalAgentImport.setupDialog.hooks.label`,
        defaultMessage: `Imported hooks`,
        description: `Label for the imported hooks review action`,
      })),
      (t[2] = r),
      (t[3] = s));
  let c;
  return (
    t[4] !== n || t[5] !== s
      ? ((c = (0, $.jsx)(Fe, { action: `openSettings`, description: i, icon: a, label: s, onAction: n })),
        (t[4] = n),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Fe(e) {
  let n = (0, Q.c)(23),
    { action: r, description: i, icon: a, label: s, onAction: c } = e,
    l = v(),
    u;
  n[0] === a
    ? (u = n[1])
    : ((u = (0, $.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface`,
        children: a,
      })),
      (n[0] = a),
      (n[1] = u));
  let d;
  n[2] === s
    ? (d = n[3])
    : ((d = (0, $.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: s })),
      (n[2] = s),
      (n[3] = d));
  let f;
  n[4] === i
    ? (f = n[5])
    : ((f = (0, $.jsx)(`div`, { className: `truncate text-xs leading-4 text-secondary`, children: i })),
      (n[4] = i),
      (n[5] = f));
  let p;
  n[6] !== d || n[7] !== f
    ? ((p = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [d, f] })),
      (n[6] = d),
      (n[7] = f),
      (n[8] = p))
    : (p = n[8]);
  let m;
  n[9] !== r || n[10] !== l || n[11] !== s
    ? ((m = l.formatMessage(
        {
          id: `externalAgentImport.setupDialog.actionAriaLabel.v3`,
          defaultMessage: `{action, select, authenticate {Authenticate {name}} connect {Connect {name}} other {Open settings for {name}}}`,
          description: `Accessible label for an action on a named imported app, MCP server, or hook group`,
        },
        { action: r, name: s },
      )),
      (n[9] = r),
      (n[10] = l),
      (n[11] = s),
      (n[12] = m))
    : (m = n[12]);
  let h;
  n[13] === r
    ? (h = n[14])
    : ((h = (0, $.jsx)(o, {
        id: `externalAgentImport.setupDialog.action.v3`,
        defaultMessage: `{action, select, authenticate {Authenticate} connect {Connect} other {Open settings}}`,
        description: `Button label for an imported app, MCP server, or hook group action`,
        values: { action: r },
      })),
      (n[13] = r),
      (n[14] = h));
  let g;
  n[15] !== c || n[16] !== m || n[17] !== h
    ? ((g = (0, $.jsx)(t, {
        "aria-label": m,
        className: `shrink-0`,
        color: `outline`,
        size: `medium`,
        onClick: c,
        children: h,
      })),
      (n[15] = c),
      (n[16] = m),
      (n[17] = h),
      (n[18] = g))
    : (g = n[18]);
  let _;
  return (
    n[19] !== u || n[20] !== p || n[21] !== g
      ? ((_ = (0, $.jsxs)(`div`, { className: `flex items-center gap-3 py-2`, children: [u, p, g] })),
        (n[19] = u),
        (n[20] = p),
        (n[21] = g),
        (n[22] = _))
      : (_ = n[22]),
    _
  );
}
function Ie(e) {
  let n = (0, Q.c)(18),
    { status: r, tab: i, onRetry: a } = e,
    s = r === `loading` ? `polite` : void 0,
    c = r === `error` ? `alert` : void 0,
    l;
  n[0] === r
    ? (l = n[1])
    : ((l = r === `loading` && (0, $.jsx)(N, { className: `icon-sm` })), (n[0] = r), (n[1] = l));
  let d;
  n[2] === r
    ? (d = n[3])
    : ((d = r === `error` && (0, $.jsx)(u, { className: `text-secondary`, asset: g, "aria-hidden": `true` })),
      (n[2] = r),
      (n[3] = d));
  let f;
  n[4] !== r || n[5] !== i
    ? ((f = (0, $.jsx)(o, {
        id: `externalAgentImport.setupDialog.status.v3`,
        defaultMessage: `{status, select, loading {{tab, select, apps {Loading imported plugins…} mcps {Loading imported MCPs…} other {Loading imported hooks…}}} error {{tab, select, apps {Imported plugins couldn't be fully checked} mcps {Imported MCPs couldn't be fully checked} other {Imported hooks couldn't be fully checked}}} other {{tab, select, apps {No imported plugins need setup} mcps {No imported MCPs need authentication} other {No imported hooks need review}}}}`,
        description: `Status message for the selected imported setup category`,
        values: { status: r, tab: i },
      })),
      (n[4] = r),
      (n[5] = i),
      (n[6] = f))
    : (f = n[6]);
  let p;
  n[7] !== a || n[8] !== r || n[9] !== i
    ? ((p =
        r === `error` &&
        (0, $.jsx)(t, {
          color: `outline`,
          size: `medium`,
          onClick: () => a(i),
          children: (0, $.jsx)(o, {
            id: `externalAgentImport.setupDialog.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry loading imported setup items`,
          }),
        })),
      (n[7] = a),
      (n[8] = r),
      (n[9] = i),
      (n[10] = p))
    : (p = n[10]);
  let m;
  return (
    n[11] !== s || n[12] !== c || n[13] !== l || n[14] !== d || n[15] !== f || n[16] !== p
      ? ((m = (0, $.jsxs)(`div`, {
          "aria-live": s,
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center text-sm text-secondary`,
          role: c,
          children: [l, d, f, p],
        })),
        (n[11] = s),
        (n[12] = c),
        (n[13] = l),
        (n[14] = d),
        (n[15] = f),
        (n[16] = p),
        (n[17] = m))
      : (m = n[17]),
    m
  );
}
var Q, Le, $, Re, ze, Be, Ve, He;
function Ue() {
  return (Ue = e(() => {
    ((Q = I()),
      w(),
      l(),
      b(),
      (Le = L()),
      k(),
      P(),
      F(),
      C(),
      f(),
      p(),
      O(),
      Z(),
      H(),
      we(),
      me(),
      ($ = ne()),
      (Re = `min(720px, calc(100dvh / var(--codex-window-zoom) - 64px))`),
      (ze = `min(480px, calc(100dvh / var(--codex-window-zoom) - 64px))`),
      (Be = {
        apps: `external-agent-import-setup-apps-panel`,
        hooks: `external-agent-import-setup-hooks-panel`,
        mcps: `external-agent-import-setup-mcps-panel`,
      }),
      (Ve = [`apps`, `mcps`, `hooks`]),
      (He = [`apps`, `mcps`]));
  }))();
}
function We(e) {
  let t = (0, Ge.c)(71),
    {
      hardRefetchAppsList: o,
      hasImportedMcpServers: l,
      hostId: u,
      onBeforeNavigate: d,
      retryImportHistories: f,
      retryImportedApps: p,
      retryMcpServerStatuses: m,
      surface: h,
    } = e,
    g = h === void 0 ? c.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP : h,
    _ = s(i),
    v = a(),
    b = j(),
    { installPlugin: x, status: S } = ue(),
    C = y(de),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { enabled: !1 }), (t[0] = w)) : (w = t[0]);
  let { data: T } = R(se, u, w),
    E;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = new Map()), (t[1] = E)) : (E = t[1]);
  let D = (0, Ke.useRef)(E),
    O = (0, Ke.useRef)(!0),
    k;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = []), (t[2] = k)) : (k = t[2]);
  let [A, M] = (0, Ke.useState)(k),
    N;
  t[3] !== _ || t[4] !== g
    ? ((N = (e) => {
        (M((t) =>
          t.some((t) => {
            let { app: n } = t;
            return n.id === e.id;
          })
            ? t
            : [...t, { app: e, installed: !1, pluginId: null }],
        ),
          re(_, le, {
            action: fe.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
            connectorId: e.id,
            result: pe.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
            surface: g,
          }));
      }),
      (t[3] = _),
      (t[4] = g),
      (t[5] = N))
    : (N = t[5]);
  let P;
  t[6] !== u || t[7] !== N
    ? ((P = { hostId: u, onConnectStarted: N }), (t[6] = u), (t[7] = N), (t[8] = P))
    : (P = t[8]);
  let {
      clearConnectingApp: ee,
      connectingApp: F,
      handleAppConnectOAuthStarted: I,
      handleConnectApp: te,
      isAppConnectPending: ne,
    } = ve(P),
    L;
  t[9] !== l || t[10] !== f || t[11] !== p || t[12] !== m
    ? ((L = (e) => {
        switch (e) {
          case `apps`:
            p();
            return;
          case `mcps`:
            (f(), l && m());
            return;
          case `hooks`:
            f();
            return;
        }
      }),
      (t[9] = l),
      (t[10] = f),
      (t[11] = p),
      (t[12] = m),
      (t[13] = L))
    : (L = t[13]);
  let B = L,
    V;
  t[14] !== u || t[15] !== v || t[16] !== d || t[17] !== _
    ? ((V = (e) => {
        (_e(_, u), d?.(), v(e));
      }),
      (t[14] = u),
      (t[15] = v),
      (t[16] = d),
      (t[17] = _),
      (t[18] = V))
    : (V = t[18]);
  let H = V,
    U;
  t[19] !== u || t[20] !== _
    ? ((U = async (e) => {
        let t = D.current.get(e);
        if (t !== void 0) {
          t != null && q({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
          return;
        }
        D.current.set(e, null);
        try {
          let { authorizationUrl: t } = await oe(_, u).sendRequest(`mcpServer/oauth/login`, { name: e });
          t != null &&
            (D.current.set(e, t),
            q({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }));
        } catch (t) {
          let n = t;
          (D.current.delete(e),
            r.error(`Failed to start login for imported MCP server`, {
              safe: { hostId: u },
              sensitive: { error: n, serverName: e },
            }));
        }
      }),
      (t[19] = u),
      (t[20] = _),
      (t[21] = U))
    : (U = t[21]);
  let ie = U,
    W;
  t[22] !== u || t[23] !== C || t[24] !== b
    ? ((W = () => {
        if (C == null || !D.current.has(C.name)) return;
        let e = D.current.get(C.name);
        ((C.success || e == null) && D.current.delete(C.name),
          C.success && b.invalidateQueries({ queryKey: [...z, u] }));
      }),
      (t[22] = u),
      (t[23] = C),
      (t[24] = b),
      (t[25] = W))
    : (W = t[25]);
  let ae = (0, Ke.useEffectEvent)(W),
    G;
  t[26] !== ae || t[27] !== u || t[28] !== C?.hostId
    ? ((G = () => {
        if (O.current) {
          O.current = !1;
          return;
        }
        C?.hostId === u && ae();
      }),
      (t[26] = ae),
      (t[27] = u),
      (t[28] = C?.hostId),
      (t[29] = G))
    : (G = t[29]);
  let K;
  (t[30] !== u || t[31] !== C ? ((K = [u, C]), (t[30] = u), (t[31] = C), (t[32] = K)) : (K = t[32]),
    (0, Ke.useEffect)(G, K));
  let J;
  if (t[33] !== A || t[34] !== T) {
    let e;
    (t[36] === T
      ? (e = t[37])
      : ((e = (e) => {
          let { app: t, installed: n, pluginId: r } = e;
          if (r != null && !n) return [];
          let i = T?.find((e) => {
            let { id: n, isAccessible: r } = e;
            return n === t.id && r;
          });
          return i == null ? [] : [i];
        }),
        (t[36] = T),
        (t[37] = e)),
      (J = A.flatMap(e)),
      (t[33] = A),
      (t[34] = T),
      (t[35] = J));
  } else J = t[35];
  let Y;
  t[38] !== o || t[39] !== u || t[40] !== b
    ? ((Y = async () => {
        try {
          await Se({ hostId: u, queryClient: b, refreshAppsList: o });
        } catch {}
      }),
      (t[38] = o),
      (t[39] = u),
      (t[40] = b),
      (t[41] = Y))
    : (Y = t[41]);
  let ce;
  t[42] !== u || t[43] !== x || t[44] !== S || t[45] !== g
    ? ((ce = (e, t) => {
        (S?.hostId !== u || S.pluginId !== e.plugin.id) &&
          (M((n) =>
            n.some((e) => {
              let { app: n } = e;
              return n.id === t.id;
            })
              ? n
              : [...n, { app: t, installed: !1, pluginId: e.plugin.id }],
          ),
          x(e, {
            hostId: u,
            marketplaceAnalytics: { source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT, surface: g },
            onSuccess: () => {
              M((n) =>
                n.map((n) => (n.app.id === t.id && n.pluginId === e.plugin.id ? { ...n, installed: !0 } : n)),
              );
            },
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
          }) ||
            M((e) =>
              e.filter((e) => {
                let { app: n } = e;
                return n.id !== t.id;
              }),
            ));
      }),
      (t[42] = u),
      (t[43] = x),
      (t[44] = S),
      (t[45] = g),
      (t[46] = ce))
    : (ce = t[46]);
  let X;
  t[47] !== u || t[48] !== H
    ? ((X = () => {
        H(xe({ hostId: u }));
      }),
      (t[47] = u),
      (t[48] = H),
      (t[49] = X))
    : (X = t[49]);
  let Z;
  t[50] === H
    ? (Z = t[51])
    : ((Z = () => {
        H(ge);
      }),
      (t[50] = H),
      (t[51] = Z));
  let me;
  t[52] !== A || t[53] !== u || t[54] !== ne || t[55] !== S?.hostId || t[56] !== S?.pluginId
    ? ((me = (e) =>
        ne(e) ||
        A.some((t) => {
          let { app: n, pluginId: r } = t;
          return n.id === e && r != null && S?.hostId === u && S?.pluginId === r;
        })),
      (t[52] = A),
      (t[53] = u),
      (t[54] = ne),
      (t[55] = S?.hostId),
      (t[56] = S?.pluginId),
      (t[57] = me))
    : (me = t[57]);
  let he;
  return (
    t[58] !== ee ||
    t[59] !== F ||
    t[60] !== I ||
    t[61] !== ie ||
    t[62] !== te ||
    t[63] !== B ||
    t[64] !== J ||
    t[65] !== Y ||
    t[66] !== ce ||
    t[67] !== X ||
    t[68] !== Z ||
    t[69] !== me
      ? ((he = {
          clearConnectingApp: ee,
          connectedApps: J,
          connectingApp: F,
          handleAppConnectOAuthStarted: I,
          handleAppConnected: Y,
          handleAuthenticateMcp: ie,
          handleConnectApp: te,
          handleInstallPlugin: ce,
          handleOpenHooksSettings: X,
          handleOpenImportSettings: Z,
          handleRetry: B,
          isAppConnectPending: me,
        }),
        (t[58] = ee),
        (t[59] = F),
        (t[60] = I),
        (t[61] = ie),
        (t[62] = te),
        (t[63] = B),
        (t[64] = J),
        (t[65] = Y),
        (t[66] = ce),
        (t[67] = X),
        (t[68] = Z),
        (t[69] = me),
        (t[70] = he))
      : (he = t[70]),
    he
  );
}
var Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = I()),
      h(),
      Y(),
      ee(),
      m(),
      (Ke = L()),
      S(),
      K(),
      he(),
      Ce(),
      J(),
      ye(),
      U(),
      ae(),
      G(),
      V(),
      te(),
      be(),
      ie(),
      _(),
      W());
  }))();
}
export { De as a, Ee as i, We as n, Ue as o, ke as r, qe as t };
//# sourceMappingURL=use-external-agent-import-setup-actions-aa854eb5201e.js.map
