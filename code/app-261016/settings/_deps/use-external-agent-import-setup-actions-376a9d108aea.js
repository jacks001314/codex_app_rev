import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $9 as n,
  $St as r,
  $st as i,
  DB as a,
  FBt as o,
  HO as s,
  IO as c,
  J9 as l,
  JO as u,
  KO as d,
  LNt as f,
  Lst as p,
  MNt as m,
  NNt as h,
  NSt as g,
  OB as _,
  PBt as v,
  Qst as y,
  RFt as b,
  Rrt as x,
  Rst as S,
  USt as C,
  WO as w,
  XOt as T,
  Y3 as E,
  Z3 as D,
  ZSt as O,
  _1 as k,
  bc as A,
  dk as j,
  e6 as M,
  fk as ee,
  iCt as te,
  nCt as ne,
  okt as N,
  qO as P,
  tkt as F,
  v1 as re,
  yc as I,
  zFt as L,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CRn as R,
  FBr as ie,
  Gdr as ae,
  IBr as z,
  Jbr as B,
  Jdr as V,
  Ubr as oe,
  Udr as se,
  Wdr as ce,
  aat as H,
  bRn as U,
  bnn as le,
  der as W,
  do as G,
  eer as K,
  iA as q,
  iat as J,
  j3n as ue,
  mSt as Y,
  mnn as X,
  nan as Z,
  pSt as de,
  rA as fe,
  ran as pe,
  uo as me,
  xMr as he,
  yMr as ge,
  z3n as _e,
} from "./app-initial-ad16eaadf81f.js";
import { n as ve, t as ye } from "./use-app-connect-flow-7fc070fa8fd7.js";
import { r as be, t as xe } from "./hooks-settings-route-8191acda142e.js";
import { n as Se, t as Ce } from "./first-app-connect-ambient-suggestions-5d83a2ddd888.js";
import { n as we, t as Te } from "./app-card-f4f0407668d0.js";
function Ee(e) {
  let t = (0, Q.c)(37),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      isAppConnectPending: o,
      mcpServerNamesRequiringAuthentication: s,
      open: l,
      selectedTab: u,
      tabStatus: f,
      onConnectApp: p,
      onInstallPlugin: m,
      onOpenChange: h,
      onOpenHooksSettings: g,
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
    ? ((C = (0, $.jsx)(F, {
        id: `externalAgentImport.setupDialog.close`,
        defaultMessage: `Close imported setup`,
        description: `Accessible label for closing the imported setup dialog`,
      })),
      (t[2] = C))
    : (C = t[2]);
  let T;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { maxHeight: Re, minHeight: ze }), (t[3] = T))
    : (T = t[3]);
  let E;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, $.jsx)(de, { sourceIconVariant: `neutral` }),
      })),
      (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(P, {
        className: `heading-xl mt-8 block text-default outline-none`,
        tabIndex: -1,
        children: (0, $.jsx)(F, {
          id: `externalAgentImport.setupDialog.title`,
          defaultMessage: `Continue with your existing setup`,
          description: `Title for the imported setup follow-up dialog`,
        }),
      })),
      (t[5] = D))
    : (D = t[5]);
  let O;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== s || t[11] !== v || t[12] !== f
    ? ((O = (0, $.jsxs)(`div`, {
        className: `shrink-0 px-5 pt-5`,
        children: [
          E,
          D,
          (0, $.jsx)(d, {
            className: `mt-2 text-base leading-6 text-codex-description`,
            children: (0, $.jsx)(De, {
              appsRequiringConnection: n,
              connectedApps: r,
              hasImportedHooks: i,
              importedPlugins: a,
              mcpServerNamesRequiringAuthentication: s,
              tabStatus: f,
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
      (t[12] = f),
      (t[13] = O))
    : (O = t[13]);
  let k;
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== i ||
  t[17] !== a ||
  t[18] !== o ||
  t[19] !== s ||
  t[20] !== _ ||
  t[21] !== p ||
  t[22] !== m ||
  t[23] !== g ||
  t[24] !== y ||
  t[25] !== b ||
  t[26] !== u ||
  t[27] !== f
    ? ((k = (0, $.jsx)(ke, {
        appsRequiringConnection: n,
        connectedApps: r,
        hasImportedHooks: i,
        importedPlugins: a,
        isAppConnectPending: o,
        mcpServerNamesRequiringAuthentication: s,
        selectedTab: u,
        tabStatus: f,
        onConnectApp: p,
        onInstallPlugin: m,
        onOpenHooksSettings: g,
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
      (t[21] = p),
      (t[22] = m),
      (t[23] = g),
      (t[24] = y),
      (t[25] = b),
      (t[26] = u),
      (t[27] = f),
      (t[28] = k))
    : (k = t[28]);
  let A;
  t[29] !== O || t[30] !== k
    ? ((A = (0, $.jsxs)(c, { className: `overflow-hidden select-none`, style: T, children: [O, k] })),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A))
    : (A = t[31]);
  let j;
  return (
    t[32] !== h || t[33] !== l || t[34] !== S || t[35] !== A
      ? ((j = (0, $.jsx)(w, {
          contentProps: S,
          dialogCloseLabel: C,
          open: l,
          size: `wide`,
          onOpenChange: h,
          children: A,
        })),
        (t[32] = h),
        (t[33] = l),
        (t[34] = S),
        (t[35] = A),
        (t[36] = j))
      : (j = t[36]),
    j
  );
}
function De(e) {
  let t = (0, Q.c)(29),
    {
      appsRequiringConnection: n,
      connectedApps: r,
      hasImportedHooks: i,
      importedPlugins: a,
      mcpServerNamesRequiringAuthentication: o,
      tabStatus: s,
      variant: c,
      onOpenSettings: l,
    } = e,
    u = c === void 0 ? `dialog` : c,
    d = u === `onboarding` || u === `conversational` ? He : Ve,
    f;
  t[0] === r ? (f = t[1]) : ((f = new Set(r.map(Oe))), (t[0] = r), (t[1] = f));
  let p = f,
    m;
  if (t[2] !== p || t[3] !== a) {
    let e;
    (t[5] === p
      ? (e = t[6])
      : ((e = (e) => {
          let { app: t } = e;
          return !p.has(t.id);
        }),
        (t[5] = p),
        (t[6] = e)),
      (m = a.filter(e)),
      (t[2] = p),
      (t[3] = a),
      (t[4] = m));
  } else m = t[4];
  let h = m.length,
    g;
  if (t[7] !== n || t[8] !== p) {
    let e;
    (t[10] === p
      ? (e = t[11])
      : ((e = (e) => {
          let { id: t } = e;
          return !p.has(t);
        }),
        (t[10] = p),
        (t[11] = e)),
      (g = n.filter(e)),
      (t[7] = n),
      (t[8] = p),
      (t[9] = g));
  } else g = t[9];
  let _ = h + g.length + r.length,
    v = +!!i,
    y;
  t[12] !== o.length || t[13] !== _ || t[14] !== v
    ? ((y = { apps: _, hooks: v, mcps: o.length }), (t[12] = o.length), (t[13] = _), (t[14] = v), (t[15] = y))
    : (y = t[15]);
  let b = y,
    x;
  if (t[16] !== b || t[17] !== d || t[18] !== s) {
    let e;
    (t[20] !== b || t[21] !== s
      ? ((e = (e) => (e === `mcps` ? b[e] > 0 : b[e] > 0 || s[e] !== `ready`)),
        (t[20] = b),
        (t[21] = s),
        (t[22] = e))
      : (e = t[22]),
      (x = d.filter(e).join(`_`)),
      (t[16] = b),
      (t[17] = d),
      (t[18] = s),
      (t[19] = x));
  } else x = t[19];
  let S = x,
    C = l == null ? `false` : `true`,
    w;
  t[23] === l
    ? (w = t[24])
    : ((w = (e) =>
        (0, $.jsx)(
          `button`,
          {
            className: `cursor-interaction rounded-sm border-0 bg-transparent p-0 text-inherit underline decoration-current underline-offset-2 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
            type: `button`,
            onClick: l,
            children: e,
          },
          `settings`,
        )),
      (t[23] = l),
      (t[24] = w));
  let T;
  return (
    t[25] !== S || t[26] !== C || t[27] !== w
      ? ((T = (0, $.jsx)(F, {
          id: `externalAgentImport.setup.subtitle.v3`,
          defaultMessage: `Finish setting up the {categories, select, apps {plugins} mcps {MCPs} hooks {hooks} apps_mcps {plugins and MCPs} apps_hooks {plugins and hooks} mcps_hooks {MCPs and hooks} apps_mcps_hooks {plugins, MCPs, and hooks} other {tools}} you imported{settingsAvailable, select, true {. You can do this now or later in <settings>Settings</settings>} other {}}`,
          description: `Description for imported plugin, MCP, and hook categories that still need setup. When available, the settings element opens Import settings.`,
          values: { categories: S, settingsAvailable: C, settings: w },
        })),
        (t[25] = S),
        (t[26] = C),
        (t[27] = w),
        (t[28] = T))
      : (T = t[28]),
    T
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
      isAppConnectPending: o,
      mcpServerNamesRequiringAuthentication: s,
      selectedTab: c,
      tabStatus: l,
      variant: u,
      onAllItemsComplete: d,
      onConnectApp: f,
      onInstallPlugin: p,
      onOpenHooksSettings: h,
      onAuthenticateMcp: g,
      onRetry: _,
      onSelectTab: v,
    } = e,
    y = u === void 0 ? `dialog` : u,
    b = N(),
    x = y === `dialog` || y === `settings`,
    S = x ? Ve : He,
    C;
  t[0] === r ? (C = t[1]) : ((C = new Set(r.map(Ae))), (t[0] = r), (t[1] = C));
  let w = C,
    T;
  if (t[2] !== n || t[3] !== w) {
    let e;
    (t[5] === w
      ? (e = t[6])
      : ((e = (e) => {
          let { id: t } = e;
          return !w.has(t);
        }),
        (t[5] = w),
        (t[6] = e)),
      (T = n.filter(e)),
      (t[2] = n),
      (t[3] = w),
      (t[4] = T));
  } else T = t[4];
  let E = T,
    D;
  if (t[7] !== w || t[8] !== a) {
    let e;
    (t[10] === w
      ? (e = t[11])
      : ((e = (e) => {
          let { app: t } = e;
          return !w.has(t.id);
        }),
        (t[10] = w),
        (t[11] = e)),
      (D = a.filter(e)),
      (t[7] = w),
      (t[8] = a),
      (t[9] = D));
  } else D = t[9];
  let O = D,
    k;
  t[12] !== r ||
  t[13] !== i ||
  t[14] !== o ||
  t[15] !== s.length ||
  t[16] !== d ||
  t[17] !== E.length ||
  t[18] !== O.length ||
  t[19] !== x ||
  t[20] !== S ||
  t[21] !== l
    ? ((k =
        d != null &&
        (!x || !i) &&
        E.length === 0 &&
        O.length === 0 &&
        s.length === 0 &&
        r.every((e) => e.isAccessible && e.isEnabled && !o(e.id)) &&
        S.every((e) => l[e] === `ready`)),
      (t[12] = r),
      (t[13] = i),
      (t[14] = o),
      (t[15] = s.length),
      (t[16] = d),
      (t[17] = E.length),
      (t[18] = O.length),
      (t[19] = x),
      (t[20] = S),
      (t[21] = l),
      (t[22] = k))
    : (k = t[22]);
  let A = k,
    M;
  t[23] === d ? (M = t[24]) : ((M = () => d?.()), (t[23] = d), (t[24] = M));
  let ee = (0, Le.useEffectEvent)(M),
    te;
  t[25] !== A || t[26] !== ee
    ? ((te = () => {
        A && ee();
      }),
      (t[25] = A),
      (t[26] = ee),
      (t[27] = te))
    : (te = t[27]);
  let ne;
  (t[28] === A ? (ne = t[29]) : ((ne = [A]), (t[28] = A), (t[29] = ne)), (0, Le.useEffect)(te, ne));
  let P = O.length + E.length + r.length,
    re = +!!i,
    I;
  t[30] !== s.length || t[31] !== re || t[32] !== P
    ? ((I = { apps: P, hooks: re, mcps: s.length }),
      (t[30] = s.length),
      (t[31] = re),
      (t[32] = P),
      (t[33] = I))
    : (I = t[33]);
  let L = I,
    R,
    ie,
    ae,
    z;
  if (t[34] !== L || t[35] !== s.length || t[36] !== c || t[37] !== S || t[38] !== l) {
    ae = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      if (
        (t[43] !== L || t[44] !== l
          ? ((e = (e) => (e === `mcps` ? L[e] > 0 : L[e] > 0 || l[e] !== `ready`)),
            (t[43] = L),
            (t[44] = l),
            (t[45] = e))
          : (e = t[45]),
        (z = S.filter(e)),
        (R = z.includes(c) ? c : z[0]),
        R == null)
      ) {
        ae = null;
        break bb0;
      }
      ie = [
        {
          key: `apps`,
          name: (0, $.jsx)(F, {
            id: `externalAgentImport.setupDialog.tabs.plugins`,
            defaultMessage: `{status, select, ready {Plugins ({count})} other {Plugins}}`,
            description: `Plugins tab label with imported plugin setup count when available`,
            values: { count: L.apps, status: l.apps },
          }),
          panelId: Be.apps,
        },
        {
          key: `mcps`,
          name: (0, $.jsx)(F, {
            id: `externalAgentImport.setupDialog.tabs.mcps.v3`,
            defaultMessage: `{status, select, ready {MCPs ({count})} other {MCPs}}`,
            description: `MCPs tab label with authentication-required count when available`,
            values: { count: s.length, status: l.mcps },
          }),
          panelId: Be.mcps,
        },
        {
          key: `hooks`,
          name: (0, $.jsx)(F, {
            id: `externalAgentImport.setupDialog.tabs.hooks`,
            defaultMessage: `Hooks`,
            description: `Hooks tab label in the imported setup dialog`,
          }),
          panelId: Be.hooks,
        },
      ].filter((e) => z.includes(e.key));
    }
    ((t[34] = L),
      (t[35] = s.length),
      (t[36] = c),
      (t[37] = S),
      (t[38] = l),
      (t[39] = R),
      (t[40] = ie),
      (t[41] = ae),
      (t[42] = z));
  } else ((R = t[39]), (ie = t[40]), (ae = t[41]), (z = t[42]));
  if (ae !== Symbol.for(`react.early_return_sentinel`)) return ae;
  let B = ie,
    V;
  t[46] !== v || t[47] !== z
    ? ((V = (e) => {
        let t = z.findIndex(
          (t) => e.currentTarget.querySelector(`[aria-controls="${Be[t]}"]`) === document.activeElement,
        );
        if (t === -1) return;
        let n;
        bb97: switch (e.key) {
          case `Home`:
            n = 0;
            break bb97;
          case `End`:
            n = z.length - 1;
            break bb97;
          case `ArrowRight`:
            n = (t + 1) % z.length;
            break bb97;
          case `ArrowLeft`:
            n = (t - 1 + z.length) % z.length;
            break bb97;
          default:
            return;
        }
        e.preventDefault();
        let r = z[n];
        r != null && (v(r), e.currentTarget.querySelector(`[aria-controls="${Be[r]}"]`)?.focus());
      }),
      (t[46] = v),
      (t[47] = z),
      (t[48] = V))
    : (V = t[48]);
  let oe = V,
    se = y !== `conversational` && `px-5`,
    ce = (y === `settings` || y === `onboarding`) && `pt-4`,
    H;
  t[49] !== se || t[50] !== ce ? ((H = m(se, ce)), (t[49] = se), (t[50] = ce), (t[51] = H)) : (H = t[51]);
  let U;
  t[52] === b
    ? (U = t[53])
    : ((U = b.formatMessage({
        id: `externalAgentImport.setupDialog.tabs.ariaLabel`,
        defaultMessage: `Imported setup categories`,
        description: `Accessible label for tabs in the imported setup dialog`,
      })),
      (t[52] = b),
      (t[53] = U));
  let le = y === `dialog` ? `mt-8` : void 0,
    W;
  t[54] !== R || t[55] !== v || t[56] !== U || t[57] !== le || t[58] !== B
    ? ((W = (0, $.jsx)(me, {
        ariaLabel: U,
        className: le,
        selectedKey: R,
        tabs: B,
        variant: `toolbar`,
        onSelect: v,
      })),
      (t[54] = R),
      (t[55] = v),
      (t[56] = U),
      (t[57] = le),
      (t[58] = B),
      (t[59] = W))
    : (W = t[59]);
  let G;
  t[60] !== oe || t[61] !== H || t[62] !== W
    ? ((G = (0, $.jsx)(`div`, { className: H, role: `presentation`, onKeyDown: oe, children: W })),
      (t[60] = oe),
      (t[61] = H),
      (t[62] = W),
      (t[63] = G))
    : (G = t[63]);
  let K = y === `dialog` ? `mt-5 grid min-h-0 flex-1 grid-cols-1` : `flex min-h-0 flex-1 flex-col pt-3`,
    q = (y === `settings` || y === `onboarding`) && `px-5 pb-3`,
    J;
  t[64] !== K || t[65] !== q ? ((J = m(K, q)), (t[64] = K), (t[65] = q), (t[66] = J)) : (J = t[66]);
  let ue;
  t[67] !== R || t[68] !== y || t[69] !== z
    ? ((ue = y === `dialog` ? z : [R]), (t[67] = R), (t[68] = y), (t[69] = z), (t[70] = ue))
    : (ue = t[70]);
  let Y;
  if (
    t[71] !== R ||
    t[72] !== r ||
    t[73] !== b ||
    t[74] !== o ||
    t[75] !== L ||
    t[76] !== s ||
    t[77] !== g ||
    t[78] !== f ||
    t[79] !== p ||
    t[80] !== h ||
    t[81] !== _ ||
    t[82] !== E ||
    t[83] !== O ||
    t[84] !== ue ||
    t[85] !== l ||
    t[86] !== y
  ) {
    let e;
    (t[88] !== R ||
    t[89] !== r ||
    t[90] !== b ||
    t[91] !== o ||
    t[92] !== L ||
    t[93] !== s ||
    t[94] !== g ||
    t[95] !== f ||
    t[96] !== p ||
    t[97] !== h ||
    t[98] !== _ ||
    t[99] !== E ||
    t[100] !== O ||
    t[101] !== l ||
    t[102] !== y
      ? ((e = (e) => {
          let t = e === R,
            n = L[e],
            i = l[e],
            a = (0, $.jsxs)($.Fragment, {
              children: [
                e === `apps` &&
                  (0, $.jsx)(je, {
                    appsRequiringConnection: E,
                    connectedApps: r,
                    importedPlugins: O,
                    isAppConnectPending: o,
                    onConnectApp: f,
                    onInstallPlugin: p,
                  }),
                e === `mcps` && (0, $.jsx)(Ne, { mcps: s, onAuthenticateMcp: g }),
                e === `hooks` && (0, $.jsx)(Pe, { onOpenHooksSettings: h }),
              ],
            });
          return (0, $.jsx)(
            `div`,
            {
              id: Be[e],
              "aria-hidden": y === `dialog` ? !t : void 0,
              "aria-label": b.formatMessage(
                {
                  id: `externalAgentImport.setupDialog.panelAriaLabel.v3`,
                  defaultMessage: `{tab, select, apps {Imported plugins requiring setup} mcps {Imported MCPs requiring authentication} other {Imported hooks requiring review}}`,
                  description: `Accessible label for the selected imported setup panel`,
                },
                { tab: e },
              ),
              className: m(
                `flex min-h-0 flex-1 flex-col`,
                y === `dialog` && `col-start-1 row-start-1`,
                y === `dialog` && !t && `invisible`,
              ),
              inert: y === `dialog` ? !t : void 0,
              role: `tabpanel`,
              tabIndex: t ? 0 : -1,
              children:
                n === 0
                  ? (0, $.jsx)(Ie, { status: i === `ready` ? `empty` : i, tab: e, onRetry: _ })
                  : y === `dialog`
                    ? (0, $.jsx)(j, {
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
        (t[90] = b),
        (t[91] = o),
        (t[92] = L),
        (t[93] = s),
        (t[94] = g),
        (t[95] = f),
        (t[96] = p),
        (t[97] = h),
        (t[98] = _),
        (t[99] = E),
        (t[100] = O),
        (t[101] = l),
        (t[102] = y),
        (t[103] = e))
      : (e = t[103]),
      (Y = ue.map(e)),
      (t[71] = R),
      (t[72] = r),
      (t[73] = b),
      (t[74] = o),
      (t[75] = L),
      (t[76] = s),
      (t[77] = g),
      (t[78] = f),
      (t[79] = p),
      (t[80] = h),
      (t[81] = _),
      (t[82] = E),
      (t[83] = O),
      (t[84] = ue),
      (t[85] = l),
      (t[86] = y),
      (t[87] = Y));
  } else Y = t[87];
  let X;
  t[104] !== J || t[105] !== Y
    ? ((X = (0, $.jsx)(`div`, { className: J, children: Y })), (t[104] = J), (t[105] = Y), (t[106] = X))
    : (X = t[106]);
  let Z;
  return (
    t[107] !== G || t[108] !== X
      ? ((Z = (0, $.jsxs)($.Fragment, { children: [G, X] })), (t[107] = G), (t[108] = X), (t[109] = Z))
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
    c = N(),
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
              description: (0, $.jsx)(F, {
                id: `externalAgentImport.setupDialog.mcps.description`,
                defaultMessage: `Authentication is required before this MCP server can be used`,
                description: `Description for an imported MCP server that requires authentication`,
              }),
              icon: (0, $.jsx)(Z, { "aria-hidden": `true`, className: `icon-base text-secondary` }),
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
    r = N(),
    i,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(F, {
        id: `externalAgentImport.setupDialog.hooks.description.v3`,
        defaultMessage: `Review imported hooks before allowing them to run`,
        description: `Description for the imported hooks review action`,
      })),
      (o = (0, $.jsx)(a, { className: `text-secondary`, asset: k, "aria-hidden": `true` })),
      (t[0] = i),
      (t[1] = o))
    : ((i = t[0]), (o = t[1]));
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
      ? ((c = (0, $.jsx)(Fe, { action: `openSettings`, description: i, icon: o, label: s, onAction: n })),
        (t[4] = n),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function Fe(e) {
  let t = (0, Q.c)(23),
    { action: n, description: r, icon: i, label: a, onAction: o } = e,
    s = N(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, $.jsx)(`span`, {
        className: `flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface`,
        children: i,
      })),
      (t[0] = i),
      (t[1] = c));
  let l;
  t[2] === a
    ? (l = t[3])
    : ((l = (0, $.jsx)(`div`, { className: `truncate text-sm font-medium text-default`, children: a })),
      (t[2] = a),
      (t[3] = l));
  let u;
  t[4] === r
    ? (u = t[5])
    : ((u = (0, $.jsx)(`div`, { className: `truncate text-xs leading-4 text-secondary`, children: r })),
      (t[4] = r),
      (t[5] = u));
  let d;
  t[6] !== l || t[7] !== u
    ? ((d = (0, $.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [l, u] })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] !== n || t[10] !== s || t[11] !== a
    ? ((f = s.formatMessage(
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
      (t[12] = f))
    : (f = t[12]);
  let p;
  t[13] === n
    ? (p = t[14])
    : ((p = (0, $.jsx)(F, {
        id: `externalAgentImport.setupDialog.action.v3`,
        defaultMessage: `{action, select, authenticate {Authenticate} connect {Connect} other {Open settings}}`,
        description: `Button label for an imported app, MCP server, or hook group action`,
        values: { action: n },
      })),
      (t[13] = n),
      (t[14] = p));
  let m;
  t[15] !== o || t[16] !== f || t[17] !== p
    ? ((m = (0, $.jsx)(E, {
        "aria-label": f,
        className: `shrink-0`,
        color: `outline`,
        size: `medium`,
        onClick: o,
        children: p,
      })),
      (t[15] = o),
      (t[16] = f),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  return (
    t[19] !== c || t[20] !== d || t[21] !== m
      ? ((h = (0, $.jsxs)(`div`, { className: `flex items-center gap-3 py-2`, children: [c, d, m] })),
        (t[19] = c),
        (t[20] = d),
        (t[21] = m),
        (t[22] = h))
      : (h = t[22]),
    h
  );
}
function Ie(e) {
  let n = (0, Q.c)(18),
    { status: r, tab: i, onRetry: o } = e,
    s = r === `loading` ? `polite` : void 0,
    c = r === `error` ? `alert` : void 0,
    l;
  n[0] === r
    ? (l = n[1])
    : ((l = r === `loading` && (0, $.jsx)(t, { className: `icon-sm` })), (n[0] = r), (n[1] = l));
  let u;
  n[2] === r
    ? (u = n[3])
    : ((u = r === `error` && (0, $.jsx)(a, { className: `text-secondary`, asset: A, "aria-hidden": `true` })),
      (n[2] = r),
      (n[3] = u));
  let d;
  n[4] !== r || n[5] !== i
    ? ((d = (0, $.jsx)(F, {
        id: `externalAgentImport.setupDialog.status.v3`,
        defaultMessage: `{status, select, loading {{tab, select, apps {Loading imported plugins…} mcps {Loading imported MCPs…} other {Loading imported hooks…}}} error {{tab, select, apps {Imported plugins couldn't be fully checked} mcps {Imported MCPs couldn't be fully checked} other {Imported hooks couldn't be fully checked}}} other {{tab, select, apps {No imported plugins need setup} mcps {No imported MCPs need authentication} other {No imported hooks need review}}}}`,
        description: `Status message for the selected imported setup category`,
        values: { status: r, tab: i },
      })),
      (n[4] = r),
      (n[5] = i),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] !== o || n[8] !== r || n[9] !== i
    ? ((f =
        r === `error` &&
        (0, $.jsx)(E, {
          color: `outline`,
          size: `medium`,
          onClick: () => o(i),
          children: (0, $.jsx)(F, {
            id: `externalAgentImport.setupDialog.retry`,
            defaultMessage: `Retry`,
            description: `Button to retry loading imported setup items`,
          }),
        })),
      (n[7] = o),
      (n[8] = r),
      (n[9] = i),
      (n[10] = f))
    : (f = n[10]);
  let p;
  return (
    n[11] !== s || n[12] !== c || n[13] !== l || n[14] !== u || n[15] !== d || n[16] !== f
      ? ((p = (0, $.jsxs)(`div`, {
          "aria-live": s,
          className: `flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-5 pb-5 text-center text-sm text-secondary`,
          role: c,
          children: [l, u, d, f],
        })),
        (n[11] = s),
        (n[12] = c),
        (n[13] = l),
        (n[14] = u),
        (n[15] = d),
        (n[16] = f),
        (n[17] = p))
      : (p = n[17]),
    p
  );
}
var Q, Le, $, Re, ze, Be, Ve, He;
function Ue() {
  return (Ue = e(() => {
    ((Q = v()),
      re(),
      I(),
      h(),
      (Le = o()),
      T(),
      D(),
      u(),
      s(),
      _(),
      ee(),
      M(),
      G(),
      pe(),
      we(),
      Y(),
      ($ = f()),
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
      hardRefetchAppsList: i,
      hasImportedMcpServers: a,
      hostId: o,
      onBeforeNavigate: s,
      retryImportHistories: c,
      retryImportedApps: u,
      retryMcpServerStatuses: d,
      surface: f,
    } = e,
    p = f === void 0 ? l.CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP : f,
    m = r(y),
    h = C(),
    g = S(),
    { installPlugin: _, status: v } = le(),
    b = te(W),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = { enabled: !1 }), (t[0] = x)) : (x = t[0]);
  let { data: w } = ne(ue, o, x),
    T;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = new Map()), (t[1] = T)) : (T = t[1]);
  let E = (0, Ke.useRef)(T),
    D = (0, Ke.useRef)(!0),
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = []), (t[2] = O)) : (O = t[2]);
  let [k, A] = (0, Ke.useState)(O),
    j;
  t[3] !== m || t[4] !== p
    ? ((j = (e) => {
        (A((t) =>
          t.some((t) => {
            let { app: n } = t;
            return n.id === e.id;
          })
            ? t
            : [...t, { app: e, installed: !1, pluginId: null }],
        ),
          he(m, se, {
            action: ae.CODEX_PLUGIN_ACTION_TYPE_OPEN_CONNECTOR_SETUP,
            connectorId: e.id,
            result: ce.CODEX_PLUGIN_ACTION_RESULT_INITIATED,
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
            surface: p,
          }));
      }),
      (t[3] = m),
      (t[4] = p),
      (t[5] = j))
    : (j = t[5]);
  let M;
  t[6] !== o || t[7] !== j
    ? ((M = { hostId: o, onConnectStarted: j }), (t[6] = o), (t[7] = j), (t[8] = M))
    : (M = t[8]);
  let {
      clearConnectingApp: ee,
      connectingApp: N,
      handleAppConnectOAuthStarted: P,
      handleConnectApp: F,
      isAppConnectPending: re,
    } = ve(M),
    I;
  t[9] !== a || t[10] !== c || t[11] !== u || t[12] !== d
    ? ((I = (e) => {
        switch (e) {
          case `apps`:
            u();
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
      (t[11] = u),
      (t[12] = d),
      (t[13] = I))
    : (I = t[13]);
  let z = I,
    B;
  t[14] !== o || t[15] !== h || t[16] !== s || t[17] !== m
    ? ((B = (e) => {
        (H(m, o), s?.(), h(e));
      }),
      (t[14] = o),
      (t[15] = h),
      (t[16] = s),
      (t[17] = m),
      (t[18] = B))
    : (B = t[18]);
  let V = B,
    U;
  t[19] !== o || t[20] !== m
    ? ((U = async (e) => {
        let t = E.current.get(e);
        if (t !== void 0) {
          t != null && R({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
          return;
        }
        E.current.set(e, null);
        try {
          let { authorizationUrl: t } = await ie(m, o).sendRequest(`mcpServer/oauth/login`, { name: e });
          t != null &&
            (E.current.set(e, t),
            R({ href: t, initiator: `open_in_browser_bridge`, openTarget: `external-browser` }));
        } catch (t) {
          let n = t;
          (E.current.delete(e),
            L.error(`Failed to start login for imported MCP server`, {
              safe: { hostId: o },
              sensitive: { error: n, serverName: e },
            }));
        }
      }),
      (t[19] = o),
      (t[20] = m),
      (t[21] = U))
    : (U = t[21]);
  let G = U,
    K;
  t[22] !== o || t[23] !== b || t[24] !== g
    ? ((K = () => {
        if (b == null || !E.current.has(b.name)) return;
        let e = E.current.get(b.name);
        ((b.success || e == null) && E.current.delete(b.name),
          b.success && g.invalidateQueries({ queryKey: [...oe, o] }));
      }),
      (t[22] = o),
      (t[23] = b),
      (t[24] = g),
      (t[25] = K))
    : (K = t[25]);
  let q = (0, Ke.useEffectEvent)(K),
    J;
  t[26] !== q || t[27] !== o || t[28] !== b?.hostId
    ? ((J = () => {
        if (D.current) {
          D.current = !1;
          return;
        }
        b?.hostId === o && q();
      }),
      (t[26] = q),
      (t[27] = o),
      (t[28] = b?.hostId),
      (t[29] = J))
    : (J = t[29]);
  let Y;
  (t[30] !== o || t[31] !== b ? ((Y = [o, b]), (t[30] = o), (t[31] = b), (t[32] = Y)) : (Y = t[32]),
    (0, Ke.useEffect)(J, Y));
  let X;
  if (t[33] !== k || t[34] !== w) {
    let e;
    (t[36] === w
      ? (e = t[37])
      : ((e = (e) => {
          let { app: t, installed: n, pluginId: r } = e;
          if (r != null && !n) return [];
          let i = w?.find((e) => {
            let { id: n, isAccessible: r } = e;
            return n === t.id && r;
          });
          return i == null ? [] : [i];
        }),
        (t[36] = w),
        (t[37] = e)),
      (X = k.flatMap(e)),
      (t[33] = k),
      (t[34] = w),
      (t[35] = X));
  } else X = t[35];
  let Z;
  t[38] !== i || t[39] !== o || t[40] !== g
    ? ((Z = async () => {
        try {
          await Se({ hostId: o, queryClient: g, refreshAppsList: i });
        } catch {}
      }),
      (t[38] = i),
      (t[39] = o),
      (t[40] = g),
      (t[41] = Z))
    : (Z = t[41]);
  let de;
  t[42] !== o || t[43] !== _ || t[44] !== v || t[45] !== p
    ? ((de = (e, t) => {
        (v?.hostId !== o || v.pluginId !== e.plugin.id) &&
          (A((n) =>
            n.some((e) => {
              let { app: n } = e;
              return n.id === t.id;
            })
              ? n
              : [...n, { app: t, installed: !1, pluginId: e.plugin.id }],
          ),
          _(e, {
            hostId: o,
            marketplaceAnalytics: { source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT, surface: p },
            onSuccess: () => {
              A((n) =>
                n.map((n) => (n.app.id === t.id && n.pluginId === e.plugin.id ? { ...n, installed: !0 } : n)),
              );
            },
            source: n.CODEX_PLUGIN_SOURCE_EXTERNAL_AGENT_IMPORT,
          }) ||
            A((e) =>
              e.filter((e) => {
                let { app: n } = e;
                return n.id !== t.id;
              }),
            ));
      }),
      (t[42] = o),
      (t[43] = _),
      (t[44] = v),
      (t[45] = p),
      (t[46] = de))
    : (de = t[46]);
  let pe;
  t[47] !== o || t[48] !== V
    ? ((pe = () => {
        V(xe({ hostId: o }));
      }),
      (t[47] = o),
      (t[48] = V),
      (t[49] = pe))
    : (pe = t[49]);
  let me;
  t[50] === V
    ? (me = t[51])
    : ((me = () => {
        V(fe);
      }),
      (t[50] = V),
      (t[51] = me));
  let ge;
  t[52] !== k || t[53] !== o || t[54] !== re || t[55] !== v?.hostId || t[56] !== v?.pluginId
    ? ((ge = (e) =>
        re(e) ||
        k.some((t) => {
          let { app: n, pluginId: r } = t;
          return n.id === e && r != null && v?.hostId === o && v?.pluginId === r;
        })),
      (t[52] = k),
      (t[53] = o),
      (t[54] = re),
      (t[55] = v?.hostId),
      (t[56] = v?.pluginId),
      (t[57] = ge))
    : (ge = t[57]);
  let _e;
  return (
    t[58] !== ee ||
    t[59] !== N ||
    t[60] !== P ||
    t[61] !== G ||
    t[62] !== F ||
    t[63] !== z ||
    t[64] !== X ||
    t[65] !== Z ||
    t[66] !== de ||
    t[67] !== pe ||
    t[68] !== me ||
    t[69] !== ge
      ? ((_e = {
          clearConnectingApp: ee,
          connectedApps: X,
          connectingApp: N,
          handleAppConnectOAuthStarted: P,
          handleAppConnected: Z,
          handleAuthenticateMcp: G,
          handleConnectApp: F,
          handleInstallPlugin: de,
          handleOpenHooksSettings: pe,
          handleOpenImportSettings: me,
          handleRetry: z,
          isAppConnectPending: ge,
        }),
        (t[58] = ee),
        (t[59] = N),
        (t[60] = P),
        (t[61] = G),
        (t[62] = F),
        (t[63] = z),
        (t[64] = X),
        (t[65] = Z),
        (t[66] = de),
        (t[67] = pe),
        (t[68] = me),
        (t[69] = ge),
        (t[70] = _e))
      : (_e = t[70]),
    _e
  );
}
var Ge, Ke;
function qe() {
  return (qe = e(() => {
    ((Ge = v()),
      x(),
      V(),
      p(),
      O(),
      (Ke = o()),
      g(),
      z(),
      K(),
      Ce(),
      _e(),
      ye(),
      U(),
      X(),
      ge(),
      B(),
      i(),
      be(),
      J(),
      b(),
      q());
  }))();
}
export { De as a, Ee as i, We as n, Ue as o, ke as r, qe as t };
//# sourceMappingURL=use-external-agent-import-setup-actions-376a9d108aea.js.map
