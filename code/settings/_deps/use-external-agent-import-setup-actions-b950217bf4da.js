import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Qt as n,
  $o as r,
  A3t as i,
  AMt as a,
  Ad as o,
  Amn as s,
  As as c,
  Cpn as l,
  D3t as u,
  Dmn as d,
  Dqt as f,
  F3t as p,
  IXt as m,
  JXt as h,
  Jrt as g,
  Lu as _,
  M6t as v,
  MMt as y,
  Mo as b,
  N3t as x,
  O3t as S,
  Omn as C,
  Opn as w,
  Ow as T,
  P6t as E,
  QXt as D,
  Qo as O,
  Rpn as k,
  Ru as A,
  SNt as j,
  Spn as M,
  Ud as N,
  Uj as P,
  Wd as F,
  Wj as I,
  ZQt as ee,
  _Nt as te,
  a3t as ne,
  d9 as re,
  e0t as L,
  eZt as R,
  eit as z,
  gNt as ie,
  hNt as B,
  hTt as ae,
  hmn as V,
  i3t as oe,
  iit as se,
  jMt as H,
  jo as U,
  js as W,
  kMt as G,
  kd as K,
  kmn as q,
  kw as ce,
  nit as le,
  o3t as J,
  r3t as ue,
  rTt as Y,
  rit as X,
  s3t as Z,
  tit as de,
  y9 as fe,
  yqt as pe,
  zpn as me,
} from "./app-initial-f094ef01c64d.js";
import { fE as he, lw as ge, sE as _e, uw as ve } from "./app-primary-4c40d73a1074.js";
import { n as ye, t as be } from "./tabs-efdcd8aaf082.js";
import { r as xe, t as Se } from "./hooks-settings-route-dc9cfc2985b4.js";
import { n as Ce, t as we } from "./triangle-warning-aaa5211a40eb.js";
function Te(e) {
  let t = (0, Q.c)(37),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      isAppConnectPending: o,
      mcpServerNamesRequiringAuthentication: s,
      open: c,
      selectedTab: u,
      tabStatus: d,
      onConnectApp: f,
      onInstallPlugin: p,
      onOpenChange: m,
      onOpenHooksSettings: h,
      onAuthenticateMcp: _,
      onOpenSettings: v,
      onRetry: y,
      onSelectTab: b,
      onShown: x,
    } = e,
    S;
  t[0] === x
    ? (S = t[1])
    : ((S = {
        onOpenAutoFocus: (e) => {
          (e.preventDefault(),
            e.currentTarget instanceof HTMLElement && e.currentTarget.querySelector(`h2`)?.focus(),
            x?.());
        },
      }),
      (t[0] = x),
      (t[1] = S));
  let C;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(l, {
        id: `externalAgentImport.setupDialog.close`,
        defaultMessage: `Close imported setup`,
        description: `Accessible label for closing the imported setup dialog`,
      })),
      (t[2] = C))
    : (C = t[2]);
  let w;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { maxHeight: Le, minHeight: Re }), (t[3] = w))
    : (w = t[3]);
  let T;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, $.jsx)(N, { sourceIconVariant: `neutral` }),
      })),
      (t[4] = T))
    : (T = t[4]);
  let E;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(X, {
        className: `heading-xl mt-8 block text-default outline-none`,
        tabIndex: -1,
        children: (0, $.jsx)(l, {
          id: `externalAgentImport.setupDialog.title`,
          defaultMessage: `Continue with your existing setup`,
          description: `Title for the imported setup follow-up dialog`,
        }),
      })),
      (t[5] = E))
    : (E = t[5]);
  let D;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== s || t[11] !== v || t[12] !== d
    ? ((D = (0, $.jsxs)(`div`, {
        className: `shrink-0 px-5 pt-5`,
        children: [
          T,
          E,
          (0, $.jsx)(le, {
            className: `mt-2 text-base leading-6 text-codex-description`,
            children: (0, $.jsx)(Ee, {
              appsRequiringConnection: n,
              connectedApps: r,
              hasImportedHooks: i,
              importedPlugins: a,
              mcpServerNamesRequiringAuthentication: s,
              tabStatus: d,
              onOpenSettings: v,
            }),
          }),
        ],
      })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = a),
      (t[10] = s),
      (t[11] = v),
      (t[12] = d),
      (t[13] = D))
    : (D = t[13]);
  let O;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== i ||
  t[17] !== a ||
  t[18] !== o ||
  t[19] !== s ||
  t[20] !== _ ||
  t[21] !== f ||
  t[22] !== p ||
  t[23] !== h ||
  t[24] !== y ||
  t[25] !== b ||
  t[26] !== u ||
  t[27] !== d
    ? ((O = (0, $.jsx)(Oe, {
        appsRequiringConnection: n,
        connectedApps: r,
        hasImportedHooks: i,
        importedPlugins: a,
        isAppConnectPending: o,
        mcpServerNamesRequiringAuthentication: s,
        selectedTab: u,
        tabStatus: d,
        onConnectApp: f,
        onInstallPlugin: p,
        onOpenHooksSettings: h,
        onAuthenticateMcp: _,
        onRetry: y,
        onSelectTab: b,
      })),
      (t[14] = n),
      (t[15] = r),
      (t[16] = i),
      (t[17] = a),
      (t[18] = o),
      (t[19] = s),
      (t[20] = _),
      (t[21] = f),
      (t[22] = p),
      (t[23] = h),
      (t[24] = y),
      (t[25] = b),
      (t[26] = u),
      (t[27] = d),
      (t[28] = O))
    : (O = t[28]);
  let k;
  t[29] !== D || t[30] !== O
    ? ((k = (0, $.jsxs)(g, {
        className: `overflow-hidden select-none`,
        style: w,
        children: [D, O],
      })),
      (t[29] = D),
      (t[30] = O),
      (t[31] = k))
    : (k = t[31]);
  let A;
  return (
    t[32] !== m || t[33] !== c || t[34] !== S || t[35] !== k
      ? ((A = (0, $.jsx)(de, {
          contentProps: S,
          dialogCloseLabel: C,
          open: c,
          size: `wide`,
          onOpenChange: m,
          children: k,
        })),
        (t[32] = m),
        (t[33] = c),
        (t[34] = S),
        (t[35] = k),
        (t[36] = A))
      : (A = t[36]),
    A
  );
}
function Ee(e) {
  let t = (0, Q.c)(29),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      mcpServerNamesRequiringAuthentication: o,
      tabStatus: s,
      variant: c,
      onOpenSettings: u,
    } = e,
    d = c === void 0 ? `dialog` : c,
    f = d === `onboarding` || d === `conversational` ? Ve : Be,
    p;
  t[0] === r ? (p = t[1]) : ((p = new Set(r.map(De))), (t[0] = r), (t[1] = p));
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
  t[12] !== o.length || t[13] !== v || t[14] !== y
    ? ((b = { apps: v, hooks: y, mcps: o.length }),
      (t[12] = o.length),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b))
    : (b = t[15]);
  let x = b,
    S;
  if (t[16] !== x || t[17] !== f || t[18] !== s) {
    let e;
    (t[20] !== x || t[21] !== s
      ? ((e = (e) => (e === `mcps` ? x[e] > 0 : x[e] > 0 || s[e] !== `ready`)),
        (t[20] = x),
        (t[21] = s),
        (t[22] = e))
      : (e = t[22]),
      (S = f.filter(e).join(`_`)),
      (t[16] = x),
      (t[17] = f),
      (t[18] = s),
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
      ? ((E = (0, $.jsx)(l, {
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
function De(e) {
  let { id: t } = e;
  return t;
}
function Oe(e) {
  let t = (0, Q.c)(110),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      isAppConnectPending: o,
      mcpServerNamesRequiringAuthentication: s,
      selectedTab: u,
      tabStatus: d,
      variant: f,
      onAllItemsComplete: p,
      onConnectApp: m,
      onInstallPlugin: h,
      onOpenHooksSettings: g,
      onAuthenticateMcp: _,
      onRetry: v,
      onSelectTab: y,
    } = e,
    b = f === void 0 ? `dialog` : f,
    x = w(),
    S = b === `dialog` || b === `settings`,
    C = S ? Be : Ve,
    T;
  t[0] === r ? (T = t[1]) : ((T = new Set(r.map(ke))), (t[0] = r), (t[1] = T));
  let E = T,
    D;
  if (t[2] !== n || t[3] !== E) {
    let e;
    (t[5] === E
      ? (e = t[6])
      : ((e = (e) => {
          let { id: t } = e;
          return !E.has(t);
        }),
        (t[5] = E),
        (t[6] = e)),
      (D = n.filter(e)),
      (t[2] = n),
      (t[3] = E),
      (t[4] = D));
  } else D = t[4];
  let O = D,
    A;
  if (t[7] !== E || t[8] !== a) {
    let e;
    (t[10] === E
      ? (e = t[11])
      : ((e = (e) => {
          let { app: t } = e;
          return !E.has(t.id);
        }),
        (t[10] = E),
        (t[11] = e)),
      (A = a.filter(e)),
      (t[7] = E),
      (t[8] = a),
      (t[9] = A));
  } else A = t[9];
  let j = A,
    M;
  t[12] !== r ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s.length ||
  t[16] !== p ||
  t[17] !== O.length ||
  t[18] !== j.length ||
  t[19] !== S ||
  t[20] !== C ||
  t[21] !== d
    ? ((M =
        p != null &&
        (!S || !i) &&
        O.length === 0 &&
        j.length === 0 &&
        s.length === 0 &&
        r.every((e) => e.isAccessible && e.isEnabled && !o(e.id)) &&
        C.every((e) => d[e] === `ready`)),
      (t[12] = r),
      (t[13] = i),
      (t[14] = o),
      (t[15] = s.length),
      (t[16] = p),
      (t[17] = O.length),
      (t[18] = j.length),
      (t[19] = S),
      (t[20] = C),
      (t[21] = d),
      (t[22] = M))
    : (M = t[22]);
  let N = M,
    P;
  t[23] === p ? (P = t[24]) : ((P = () => p?.()), (t[23] = p), (t[24] = P));
  let F = (0, Ie.useEffectEvent)(P),
    I;
  t[25] !== N || t[26] !== F
    ? ((I = () => {
        N && F();
      }),
      (t[25] = N),
      (t[26] = F),
      (t[27] = I))
    : (I = t[27]);
  let ee;
  (t[28] === N ? (ee = t[29]) : ((ee = [N]), (t[28] = N), (t[29] = ee)), (0, Ie.useEffect)(I, ee));
  let te = j.length + O.length + r.length,
    ne = +!!i,
    re;
  t[30] !== s.length || t[31] !== ne || t[32] !== te
    ? ((re = { apps: te, hooks: ne, mcps: s.length }),
      (t[30] = s.length),
      (t[31] = ne),
      (t[32] = te),
      (t[33] = re))
    : (re = t[33]);
  let L = re,
    R,
    z,
    ie,
    B;
  if (t[34] !== L || t[35] !== s.length || t[36] !== u || t[37] !== C || t[38] !== d) {
    ie = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      if (
        (t[43] !== L || t[44] !== d
          ? ((e = (e) => (e === `mcps` ? L[e] > 0 : L[e] > 0 || d[e] !== `ready`)),
            (t[43] = L),
            (t[44] = d),
            (t[45] = e))
          : (e = t[45]),
        (B = C.filter(e)),
        (R = B.includes(u) ? u : B[0]),
        R == null)
      ) {
        ie = null;
        break bb0;
      }
      z = [
        {
          key: `apps`,
          name: (0, $.jsx)(l, {
            id: `externalAgentImport.setupDialog.tabs.plugins`,
            defaultMessage: `{status, select, ready {Plugins ({count})} other {Plugins}}`,
            description: `Plugins tab label with imported plugin setup count when available`,
            values: { count: L.apps, status: d.apps },
          }),
          panelId: ze.apps,
        },
        {
          key: `mcps`,
          name: (0, $.jsx)(l, {
            id: `externalAgentImport.setupDialog.tabs.mcps.v3`,
            defaultMessage: `{status, select, ready {MCPs ({count})} other {MCPs}}`,
            description: `MCPs tab label with authentication-required count when available`,
            values: { count: s.length, status: d.mcps },
          }),
          panelId: ze.mcps,
        },
        {
          key: `hooks`,
          name: (0, $.jsx)(l, {
            id: `externalAgentImport.setupDialog.tabs.hooks`,
            defaultMessage: `Hooks`,
            description: `Hooks tab label in the imported setup dialog`,
          }),
          panelId: ze.hooks,
        },
      ].filter((e) => B.includes(e.key));
    }
    ((t[34] = L),
      (t[35] = s.length),
      (t[36] = u),
      (t[37] = C),
      (t[38] = d),
      (t[39] = R),
      (t[40] = z),
      (t[41] = ie),
      (t[42] = B));
  } else ((R = t[39]), (z = t[40]), (ie = t[41]), (B = t[42]));
  if (ie !== Symbol.for(`react.early_return_sentinel`)) return ie;
  let ae = z,
    V;
  t[46] !== y || t[47] !== B
    ? ((V = (e) => {
        let t = B.findIndex(
          (t) =>
            e.currentTarget.querySelector(`[aria-controls="${ze[t]}"]`) === document.activeElement,
        );
        if (t === -1) return;
        let n;
        bb97: switch (e.key) {
          case `Home`:
            n = 0;
            break bb97;
          case `End`:
            n = B.length - 1;
            break bb97;
          case `ArrowRight`:
            n = (t + 1) % B.length;
            break bb97;
          case `ArrowLeft`:
            n = (t - 1 + B.length) % B.length;
            break bb97;
          default:
            return;
        }
        e.preventDefault();
        let r = B[n];
        r != null && (y(r), e.currentTarget.querySelector(`[aria-controls="${ze[r]}"]`)?.focus());
      }),
      (t[46] = y),
      (t[47] = B),
      (t[48] = V))
    : (V = t[48]);
  let oe = V,
    se = b !== `conversational` && `px-5`,
    H = (b === `settings` || b === `onboarding`) && `pt-4`,
    U;
  t[49] !== se || t[50] !== H
    ? ((U = k(se, H)), (t[49] = se), (t[50] = H), (t[51] = U))
    : (U = t[51]);
  let W;
  t[52] === x
    ? (W = t[53])
    : ((W = x.formatMessage({
        id: `externalAgentImport.setupDialog.tabs.ariaLabel`,
        defaultMessage: `Imported setup categories`,
        description: `Accessible label for tabs in the imported setup dialog`,
      })),
      (t[52] = x),
      (t[53] = W));
  let G = b === `dialog` ? `mt-8` : void 0,
    K;
  t[54] !== R || t[55] !== y || t[56] !== W || t[57] !== G || t[58] !== ae
    ? ((K = (0, $.jsx)(be, {
        ariaLabel: W,
        className: G,
        selectedKey: R,
        tabs: ae,
        variant: `toolbar`,
        onSelect: y,
      })),
      (t[54] = R),
      (t[55] = y),
      (t[56] = W),
      (t[57] = G),
      (t[58] = ae),
      (t[59] = K))
    : (K = t[59]);
  let q;
  t[60] !== oe || t[61] !== U || t[62] !== K
    ? ((q = (0, $.jsx)(`div`, { className: U, role: `presentation`, onKeyDown: oe, children: K })),
      (t[60] = oe),
      (t[61] = U),
      (t[62] = K),
      (t[63] = q))
    : (q = t[63]);
  let ce =
      b === `dialog` ? `mt-5 grid min-h-0 flex-1 grid-cols-1` : `flex min-h-0 flex-1 flex-col pt-3`,
    le = (b === `settings` || b === `onboarding`) && `px-5 pb-3`,
    J;
  t[64] !== ce || t[65] !== le
    ? ((J = k(ce, le)), (t[64] = ce), (t[65] = le), (t[66] = J))
    : (J = t[66]);
  let ue;
  t[67] !== R || t[68] !== b || t[69] !== B
    ? ((ue = b === `dialog` ? B : [R]), (t[67] = R), (t[68] = b), (t[69] = B), (t[70] = ue))
    : (ue = t[70]);
  let Y;
  if (
    t[71] !== R ||
    t[72] !== r ||
    t[73] !== x ||
    t[74] !== o ||
    t[75] !== L ||
    t[76] !== s ||
    t[77] !== _ ||
    t[78] !== m ||
    t[79] !== h ||
    t[80] !== g ||
    t[81] !== v ||
    t[82] !== O ||
    t[83] !== j ||
    t[84] !== ue ||
    t[85] !== d ||
    t[86] !== b
  ) {
    let e;
    (t[88] !== R ||
    t[89] !== r ||
    t[90] !== x ||
    t[91] !== o ||
    t[92] !== L ||
    t[93] !== s ||
    t[94] !== _ ||
    t[95] !== m ||
    t[96] !== h ||
    t[97] !== g ||
    t[98] !== v ||
    t[99] !== O ||
    t[100] !== j ||
    t[101] !== d ||
    t[102] !== b
      ? ((e = (e) => {
          let t = e === R,
            n = L[e],
            i = d[e],
            a = (0, $.jsxs)($.Fragment, {
              children: [
                e === `apps` &&
                  (0, $.jsx)(Ae, {
                    appsRequiringConnection: O,
                    connectedApps: r,
                    importedPlugins: j,
                    isAppConnectPending: o,
                    onConnectApp: m,
                    onInstallPlugin: h,
                  }),
                e === `mcps` && (0, $.jsx)(Me, { mcps: s, onAuthenticateMcp: _ }),
                e === `hooks` && (0, $.jsx)(Ne, { onOpenHooksSettings: g }),
              ],
            });
          return (0, $.jsx)(
            `div`,
            {
              id: ze[e],
              "aria-hidden": b === `dialog` ? !t : void 0,
              "aria-label": x.formatMessage(
                {
                  id: `externalAgentImport.setupDialog.panelAriaLabel.v3`,
                  defaultMessage: `{tab, select, apps {Imported plugins requiring setup} mcps {Imported MCPs requiring authentication} other {Imported hooks requiring review}}`,
                  description: `Accessible label for the selected imported setup panel`,
                },
                { tab: e },
              ),
              className: k(
                `flex min-h-0 flex-1 flex-col`,
                b === `dialog` && `col-start-1 row-start-1`,
                b === `dialog` && !t && `invisible`,
              ),
              inert: b === `dialog` ? !t : void 0,
              role: `tabpanel`,
              tabIndex: t ? 0 : -1,
              children:
                n === 0
                  ? (0, $.jsx)(Fe, { status: i === `ready` ? `empty` : i, tab: e, onRetry: v })
                  : b === `dialog`
                    ? (0, $.jsx)(c, {
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
        (t[88] = R),
        (t[89] = r),
        (t[90] = x),
        (t[91] = o),
        (t[92] = L),
        (t[93] = s),
        (t[94] = _),
        (t[95] = m),
        (t[96] = h),
        (t[97] = g),
        (t[98] = v),
        (t[99] = O),
        (t[100] = j),
        (t[101] = d),
        (t[102] = b),
        (t[103] = e))
      : (e = t[103]),
      (Y = ue.map(e)),
      (t[71] = R),
      (t[72] = r),
      (t[73] = x),
      (t[74] = o),
      (t[75] = L),
      (t[76] = s),
      (t[77] = _),
      (t[78] = m),
      (t[79] = h),
      (t[80] = g),
      (t[81] = v),
      (t[82] = O),
      (t[83] = j),
      (t[84] = ue),
      (t[85] = d),
      (t[86] = b),
      (t[87] = Y));
  } else Y = t[87];
  let X;
  t[104] !== J || t[105] !== Y
    ? ((X = (0, $.jsx)(`div`, { className: J, children: Y })),
      (t[104] = J),
      (t[105] = Y),
      (t[106] = X))
    : (X = t[106]);
  let Z;
  return (
    t[107] !== q || t[108] !== X
      ? ((Z = (0, $.jsxs)($.Fragment, { children: [q, X] })),
        (t[107] = q),
        (t[108] = X),
        (t[109] = Z))
      : (Z = t[109]),
    Z
  );
}
function ke(e) {
  let { id: t } = e;
  return t;
}
function Ae(e) {
  let t = (0, Q.c)(8),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      importedPlugins: i,
      isAppConnectPending: a,
      onConnectApp: o,
      onInstallPlugin: s,
    } = e,
    c = w(),
    l;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== c || t[4] !== a || t[5] !== o || t[6] !== s
      ? ((l = (0, $.jsx)($.Fragment, {
          children: [
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
            ...[...n.map(je), ...r].map((e) => ({
              action: `connect`,
              app: e,
              key: `app:${e.id}`,
              onInstallApp: async () => {
                await o(e);
              },
            })),
          ].map((e) => {
            let { action: t, app: n, key: r, onInstallApp: i } = e,
              o = a(n.id),
              s = t === `install` ? { ...n, isAccessible: !1 } : n;
            return (0, $.jsx)(
              O,
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
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function je(e) {
  return { ...e, isAccessible: !1 };
}
function Me(e) {
  let t = (0, Q.c)(7),
    { mcps: n, onAuthenticateMcp: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, $.jsx)(
            Pe,
            {
              action: `authenticate`,
              description: (0, $.jsx)(l, {
                id: `externalAgentImport.setupDialog.mcps.description`,
                defaultMessage: `Authentication is required before this MCP server can be used`,
                description: `Description for an imported MCP server that requires authentication`,
              }),
              icon: (0, $.jsx)(P, { "aria-hidden": `true`, className: `icon-base text-secondary` }),
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
    t[5] === i
      ? (a = t[6])
      : ((a = (0, $.jsx)($.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function Ne(e) {
  let t = (0, Q.c)(7),
    { onOpenHooksSettings: n } = e,
    r = w(),
    i,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(l, {
        id: `externalAgentImport.setupDialog.hooks.description.v3`,
        defaultMessage: `Review imported hooks before allowing them to run`,
        description: `Description for the imported hooks review action`,
      })),
      (a = (0, $.jsx)(K, { "aria-hidden": `true`, className: `icon-base text-secondary` })),
      (t[0] = i),
      (t[1] = a))
    : ((i = t[0]), (a = t[1]));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = r.formatMessage({
        id: `externalAgentImport.setupDialog.hooks.label`,
        defaultMessage: `Imported hooks`,
        description: `Label for the imported hooks review action`,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== n || t[5] !== o
      ? ((s = (0, $.jsx)(Pe, {
          action: `openSettings`,
          description: i,
          icon: a,
          label: o,
          onAction: n,
        })),
        (t[4] = n),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Pe(e) {
  let t = (0, Q.c)(23),
    { action: n, description: r, icon: i, label: a, onAction: o } = e,
    s = w(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, $.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface`,
        children: i,
      })),
      (t[0] = i),
      (t[1] = c));
  let u;
  t[2] === a
    ? (u = t[3])
    : ((u = (0, $.jsx)(`div`, {
        className: `truncate text-sm font-medium text-default`,
        children: a,
      })),
      (t[2] = a),
      (t[3] = u));
  let d;
  t[4] === r
    ? (d = t[5])
    : ((d = (0, $.jsx)(`div`, {
        className: `truncate text-xs leading-4 text-secondary`,
        children: r,
      })),
      (t[4] = r),
      (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-1 flex-col gap-0.5`,
        children: [u, d],
      })),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] !== n || t[10] !== s || t[11] !== a
    ? ((p = s.formatMessage(
        {
          id: `externalAgentImport.setupDialog.actionAriaLabel.v3`,
          defaultMessage: `{action, select, authenticate {Authenticate {name}} connect {Connect {name}} other {Open settings for {name}}}`,
          description: `Accessible label for an action on a named imported app, MCP server, or hook group`,
        },
        { action: n, name: a },
      )),
      (t[9] = n),
      (t[10] = s),
      (t[11] = a),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] === n
    ? (m = t[14])
    : ((m = (0, $.jsx)(l, {
        id: `externalAgentImport.setupDialog.action.v3`,
        defaultMessage: `{action, select, authenticate {Authenticate} connect {Connect} other {Open settings}}`,
        description: `Button label for an imported app, MCP server, or hook group action`,
        values: { action: n },
      })),
      (t[13] = n),
      (t[14] = m));
  let h;
  t[15] !== o || t[16] !== p || t[17] !== m
    ? ((h = (0, $.jsx)(G, {
        "aria-label": p,
        className: `shrink-0`,
        color: `outline`,
        size: `medium`,
        onClick: o,
        children: m,
      })),
      (t[15] = o),
      (t[16] = p),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  return (
    t[19] !== c || t[20] !== f || t[21] !== h
      ? ((g = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 py-2`,
          children: [c, f, h],
        })),
        (t[19] = c),
        (t[20] = f),
        (t[21] = h),
        (t[22] = g))
      : (g = t[22]),
    g
  );
}
function Fe(e) {
  let t = (0, Q.c)(18),
    { status: n, tab: r, onRetry: i } = e,
    a = n === `loading` ? `polite` : void 0,
    o = n === `error` ? `alert` : void 0,
    s;
  t[0] === n
    ? (s = t[1])
    : ((s = n === `loading` && (0, $.jsx)(H, { className: `icon-sm` })), (t[0] = n), (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c =
        n === `error` &&
        (0, $.jsx)(we, { "aria-hidden": `true`, className: `icon-md text-secondary` })),
      (t[2] = n),
      (t[3] = c));
  let u;
  t[4] !== n || t[5] !== r
    ? ((u = (0, $.jsx)(l, {
        id: `externalAgentImport.setupDialog.status.v3`,
        defaultMessage: `{status, select, loading {{tab, select, apps {Loading imported plugins…} mcps {Loading imported MCPs…} other {Loading imported hooks…}}} error {{tab, select, apps {Imported plugins couldn't be fully checked} mcps {Imported MCPs couldn't be fully checked} other {Imported hooks couldn't be fully checked}}} other {{tab, select, apps {No imported plugins need setup} mcps {No imported MCPs need authentication} other {No imported hooks need review}}}}`,
        description: `Status message for the selected imported setup category`,
        values: { status: n, tab: r },
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] !== i || t[8] !== n || t[9] !== r
    ? ((d =
        n === `error` &&
        (0, $.jsx)(G, {
          color: `outline`,
          size: `medium`,
          onClick: () => i(r),
          children: (0, $.jsx)(l, {
            id: `externalAgentImport.setupDialog.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry loading imported setup items`,
          }),
        })),
      (t[7] = i),
      (t[8] = n),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== a || t[12] !== o || t[13] !== s || t[14] !== c || t[15] !== u || t[16] !== d
      ? ((f = (0, $.jsxs)(`div`, {
          "aria-live": a,
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center text-sm text-secondary`,
          role: o,
          children: [s, c, u, d],
        })),
        (t[11] = a),
        (t[12] = o),
        (t[13] = s),
        (t[14] = c),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f))
      : (f = t[17]),
    f
  );
}
var Q,
  Ie,
  $,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He = e(() => {
    ((Q = q()),
      me(),
      (Ie = t(s(), 1)),
      M(),
      a(),
      se(),
      z(),
      W(),
      y(),
      ye(),
      o(),
      I(),
      Ce(),
      r(),
      F(),
      ($ = V()),
      (Le = `min(720px, calc(100dvh / var(--codex-window-zoom) - 64px))`),
      (Re = `min(480px, calc(100dvh / var(--codex-window-zoom) - 64px))`),
      (ze = {
        apps: `external-agent-import-setup-apps-panel`,
        hooks: `external-agent-import-setup-hooks-panel`,
        mcps: `external-agent-import-setup-mcps-panel`,
      }),
      (Be = [`apps`, `mcps`, `hooks`]),
      (Ve = [`apps`, `mcps`]));
  });
function Ue(e) {
  let t = (0, We.c)(71),
    {
      hardRefetchAppsList: r,
      hasImportedMcpServers: a,
      hostId: o,
      onBeforeNavigate: s,
      retryImportHistories: c,
      retryImportedApps: l,
      retryMcpServerStatuses: d,
      surface: f,
    } = e,
    m = f === void 0 ? ee.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP : f,
    g = i(ne),
    v = h(),
    y = u(),
    { installPlugin: S, status: w } = he(),
    T = p(ae),
    D;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { enabled: !1 }), (t[0] = D))
    : (D = t[0]);
  let { data: O } = x(re, o, D),
    k;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = new Map()), (t[1] = k)) : (k = t[1]);
  let A = (0, Ge.useRef)(k),
    j = (0, Ge.useRef)(!0),
    M;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = []), (t[2] = M)) : (M = t[2]);
  let [N, P] = (0, Ge.useState)(M),
    F;
  t[3] !== g || t[4] !== m
    ? ((F = (e) => {
        (P((t) =>
          t.some((t) => {
            let { app: n } = t;
            return n.id === e.id;
          })
            ? t
            : [...t, { app: e, installed: !1, pluginId: null }],
        ),
          R(g, B, {
            action: te.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
            connectorId: e.id,
            result: ie.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
            surface: m,
          }));
      }),
      (t[3] = g),
      (t[4] = m),
      (t[5] = F))
    : (F = t[5]);
  let I;
  t[6] !== o || t[7] !== F
    ? ((I = { hostId: o, onConnectStarted: F }), (t[6] = o), (t[7] = F), (t[8] = I))
    : (I = t[8]);
  let {
      clearConnectingApp: L,
      connectingApp: z,
      handleAppConnectOAuthStarted: V,
      handleConnectApp: oe,
      isAppConnectPending: se,
    } = ve(I),
    H;
  t[9] !== a || t[10] !== c || t[11] !== l || t[12] !== d
    ? ((H = (e) => {
        switch (e) {
          case `apps`:
            l();
            return;
          case `mcps`:
            (c(), a && d());
            return;
          case `hooks`:
            c();
            return;
        }
      }),
      (t[9] = a),
      (t[10] = c),
      (t[11] = l),
      (t[12] = d),
      (t[13] = H))
    : (H = t[13]);
  let U = H,
    W;
  t[14] !== o || t[15] !== v || t[16] !== s || t[17] !== g
    ? ((W = (e) => {
        (ce(g, o), s?.(), v(e));
      }),
      (t[14] = o),
      (t[15] = v),
      (t[16] = s),
      (t[17] = g),
      (t[18] = W))
    : (W = t[18]);
  let G = W,
    K;
  t[19] !== o || t[20] !== g
    ? ((K = async (e) => {
        let t = A.current.get(e);
        if (t !== void 0) {
          t != null &&
            E({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
          return;
        }
        A.current.set(e, null);
        try {
          let { authorizationUrl: t } = await ue(g, o).sendRequest(`mcpServer/oauth/login`, {
            name: e,
          });
          t != null &&
            (A.current.set(e, t),
            E({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }));
        } catch (t) {
          let n = t;
          (A.current.delete(e),
            C.error(`Failed to start login for imported MCP server`, {
              safe: { hostId: o },
              sensitive: { error: n, serverName: e },
            }));
        }
      }),
      (t[19] = o),
      (t[20] = g),
      (t[21] = K))
    : (K = t[21]);
  let q = K,
    le;
  t[22] !== o || t[23] !== T || t[24] !== y
    ? ((le = () => {
        if (T == null || !A.current.has(T.name)) return;
        let e = A.current.get(T.name);
        ((T.success || e == null) && A.current.delete(T.name),
          T.success && y.invalidateQueries({ queryKey: [...pe, o] }));
      }),
      (t[22] = o),
      (t[23] = T),
      (t[24] = y),
      (t[25] = le))
    : (le = t[25]);
  let J = (0, Ge.useEffectEvent)(le),
    Y;
  t[26] !== J || t[27] !== o || t[28] !== T?.hostId
    ? ((Y = () => {
        if (j.current) {
          j.current = !1;
          return;
        }
        T?.hostId === o && J();
      }),
      (t[26] = J),
      (t[27] = o),
      (t[28] = T?.hostId),
      (t[29] = Y))
    : (Y = t[29]);
  let X;
  (t[30] !== o || t[31] !== T ? ((X = [o, T]), (t[30] = o), (t[31] = T), (t[32] = X)) : (X = t[32]),
    (0, Ge.useEffect)(Y, X));
  let Z;
  if (t[33] !== N || t[34] !== O) {
    let e;
    (t[36] === O
      ? (e = t[37])
      : ((e = (e) => {
          let { app: t, installed: n, pluginId: r } = e;
          if (r != null && !n) return [];
          let i = O?.find((e) => {
            let { id: n, isAccessible: r } = e;
            return n === t.id && r;
          });
          return i == null ? [] : [i];
        }),
        (t[36] = O),
        (t[37] = e)),
      (Z = N.flatMap(e)),
      (t[33] = N),
      (t[34] = O),
      (t[35] = Z));
  } else Z = t[35];
  let de;
  t[38] !== r || t[39] !== o || t[40] !== y
    ? ((de = async () => {
        try {
          await b({ hostId: o, queryClient: y, refreshAppsList: r });
        } catch {}
      }),
      (t[38] = r),
      (t[39] = o),
      (t[40] = y),
      (t[41] = de))
    : (de = t[41]);
  let fe;
  t[42] !== o || t[43] !== S || t[44] !== w || t[45] !== m
    ? ((fe = (e, t) => {
        (w?.hostId === o && w.pluginId === e.plugin.id) ||
          (P((n) =>
            n.some((e) => {
              let { app: n } = e;
              return n.id === t.id;
            })
              ? n
              : [...n, { app: t, installed: !1, pluginId: e.plugin.id }],
          ),
          S(e, {
            hostId: o,
            marketplaceAnalytics: {
              source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
              surface: m,
            },
            onSuccess: () => {
              P((n) =>
                n.map((n) =>
                  n.app.id === t.id && n.pluginId === e.plugin.id ? { ...n, installed: !0 } : n,
                ),
              );
            },
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
          }) ||
            P((e) =>
              e.filter((e) => {
                let { app: n } = e;
                return n.id !== t.id;
              }),
            ));
      }),
      (t[42] = o),
      (t[43] = S),
      (t[44] = w),
      (t[45] = m),
      (t[46] = fe))
    : (fe = t[46]);
  let me;
  t[47] !== o || t[48] !== G
    ? ((me = () => {
        G(Se({ hostId: o }));
      }),
      (t[47] = o),
      (t[48] = G),
      (t[49] = me))
    : (me = t[49]);
  let ge;
  t[50] === G
    ? (ge = t[51])
    : ((ge = () => {
        G(_);
      }),
      (t[50] = G),
      (t[51] = ge));
  let _e;
  t[52] !== N || t[53] !== o || t[54] !== se || t[55] !== w?.hostId || t[56] !== w?.pluginId
    ? ((_e = (e) =>
        se(e) ||
        N.some((t) => {
          let { app: n, pluginId: r } = t;
          return n.id === e && r != null && w?.hostId === o && w?.pluginId === r;
        })),
      (t[52] = N),
      (t[53] = o),
      (t[54] = se),
      (t[55] = w?.hostId),
      (t[56] = w?.pluginId),
      (t[57] = _e))
    : (_e = t[57]);
  let ye;
  return (
    t[58] !== L ||
    t[59] !== z ||
    t[60] !== V ||
    t[61] !== q ||
    t[62] !== oe ||
    t[63] !== U ||
    t[64] !== Z ||
    t[65] !== de ||
    t[66] !== fe ||
    t[67] !== me ||
    t[68] !== ge ||
    t[69] !== _e
      ? ((ye = {
          clearConnectingApp: L,
          connectedApps: Z,
          connectingApp: z,
          handleAppConnectOAuthStarted: V,
          handleAppConnected: de,
          handleAuthenticateMcp: q,
          handleConnectApp: oe,
          handleInstallPlugin: fe,
          handleOpenHooksSettings: me,
          handleOpenImportSettings: ge,
          handleRetry: U,
          isAppConnectPending: _e,
        }),
        (t[58] = L),
        (t[59] = z),
        (t[60] = V),
        (t[61] = q),
        (t[62] = oe),
        (t[63] = U),
        (t[64] = Z),
        (t[65] = de),
        (t[66] = fe),
        (t[67] = me),
        (t[68] = ge),
        (t[69] = _e),
        (t[70] = ye))
      : (ye = t[70]),
    ye
  );
}
var We,
  Ge,
  Ke = e(() => {
    ((We = q()),
      L(),
      j(),
      Z(),
      S(),
      (Ge = t(s(), 1)),
      m(),
      oe(),
      Y(),
      U(),
      ge(),
      v(),
      _e(),
      D(),
      fe(),
      f(),
      J(),
      xe(),
      T(),
      d(),
      A());
  });
export { Ee as a, Te as i, Ue as n, He as o, Oe as r, Ke as t };
//# sourceMappingURL=use-external-agent-import-setup-actions-b950217bf4da.js.map
