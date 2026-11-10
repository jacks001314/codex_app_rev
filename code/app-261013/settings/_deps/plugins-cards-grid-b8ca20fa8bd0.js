const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./add-marketplace-dialog-059a4ea611db.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./useForm-9d52db816610.js",
      "./with-selector-58ecbd51d9aa.js",
      "./marketplace-add-90937edec5c7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  B4 as i,
  CM as a,
  CPt as o,
  Cot as s,
  Ext as ee,
  IDt as c,
  Ixt as l,
  JC as u,
  MO as d,
  Obt as f,
  Pxt as p,
  Qtt as te,
  Rnt as m,
  SPt as h,
  TO as g,
  UQ as _,
  VDt as ne,
  Vxt as v,
  W7 as re,
  WQ as y,
  _Mt as b,
  _xt as x,
  aD as S,
  cz as C,
  fPt as w,
  gMt as T,
  hot as E,
  iD as D,
  iO as O,
  jDt as k,
  jO as ie,
  lot as A,
  pPt as j,
  qC as ae,
  rO as M,
  rst as N,
  sz as P,
  t3 as F,
  vzt as I,
  wot as L,
  xMt as R,
  yM as z,
  yzt as B,
  z4 as V,
  zxt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $kn as H,
  ACn as U,
  BPr as W,
  BYt as se,
  Bun as ce,
  C2 as G,
  D2 as le,
  Dlr as K,
  E2 as q,
  Ggr as J,
  HCn as Y,
  IYt as ue,
  Icr as de,
  Idn as fe,
  Jcr as pe,
  Jdr as me,
  Jlr as he,
  Ldn as ge,
  Lsr as X,
  MWt as Z,
  Mkn as _e,
  NWt as ve,
  Nkn as ye,
  Ocr as be,
  Odn as xe,
  QDr as Se,
  Qdr as Ce,
  Rcr as we,
  Rsr as Te,
  Run as Ee,
  S2 as De,
  S_r as Oe,
  T2 as ke,
  Tdn as Ae,
  UPr as je,
  VPr as Me,
  WCn as Ne,
  XDr as Pe,
  Ycr as Fe,
  Ydr as Ie,
  Zdr as Le,
  alr as Re,
  b0n as ze,
  bFr as Be,
  bcr as Ve,
  d2 as He,
  eAn as Ue,
  eDr as We,
  f2 as Ge,
  hzt as Ke,
  iNr as qe,
  jCn as Je,
  kcr as Ye,
  lit as Xe,
  mF as Ze,
  m_r as Qe,
  mzt as $e,
  nDr as et,
  nlr as tt,
  oFr as nt,
  p2 as rt,
  pF as it,
  qlr as at,
  rNr as ot,
  rlr as st,
  tAn as ct,
  tDr as lt,
  tit as ut,
  w2 as dt,
  x0n as ft,
  xFr as pt,
  x_r as mt,
  zsr as ht,
} from "./app-initial-5851df3f6cb1.js";
import { Cp as gt, wp as _t } from "./app-primary-fe8a450b3b04.js";
import {
  a as vt,
  i as yt,
  n as bt,
  r as xt,
  s as St,
  t as Ct,
} from "./hosted-plugin-creation-actions-3658fe5ef1c8.js";
import { n as wt, r as Tt } from "./skills-page-grid-5f717c30cada.js";
import { n as Et, t as Dt } from "./card-tile-a92df345e9ab.js";
import { n as Ot, t as kt } from "./plugin-settings-row-93f0c993fe10.js";
import { t as At } from "./marketplace-add-90937edec5c7.js";
import { i as jt, r as Mt } from "./plugin-origin-badge-1e1f880d2dac.js";
import { n as Nt, t as Pt } from "./empty-state-puzzle-piece-29c3e2d41acb.js";
import { n as Ft, t as It } from "./profile-lock-17cb9817089d.js";
import { n as Lt, t as Rt } from "./installed-card-actions-6e3c5fc1435c.js";
import { f as zt, p as Bt } from "./team-plugins-2260d2b8aeb9.js";
import { n as Vt, t as Ht } from "./plugin-card-status-action-2ac436b67a6c.js";
import { n as Ut, r as Wt } from "./plugin-detail-actions-5f01df52c07d.js";
import { r as Gt, t as Kt } from "./messages-4cbaa49d7ad9.js";
import { i as qt, r as Jt } from "./plugin-marketplace-context-c6ab695904bf.js";
import { n as Yt, t as Xt } from "./plugin-disabled-reason-9ae34b32db06.js";
function Zt(e) {
  let t = (0, $t.c)(5),
    { forceReloadPlugins: n, hostId: r } = e,
    i = l(s),
    a = ne(),
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i
      ? ((o = async (e) => {
          let t = await At({
            forceReloadPlugins: n,
            onReloadError: Qt,
            params: e,
            sendAddMarketplace: (e) => _e(i, r, e),
          });
          return t.kind === `reload-failed`
            ? (i
                .get(E)
                .warning(
                  a.formatMessage(
                    {
                      id: `skills.appsPage.addMarketplace.refreshFailed`,
                      defaultMessage: `{marketplaceName} marketplace is configured, but failed to refresh the plugin list`,
                      description: `Toast shown after a marketplace add request succeeds but refreshing the plugin list fails`,
                    },
                    { marketplaceName: t.marketplaceName },
                  ),
                ),
              t.marketplaceName)
            : (i
                .get(E)
                .success(
                  t.alreadyAdded
                    ? a.formatMessage(
                        {
                          id: `skills.appsPage.addMarketplace.alreadyAdded`,
                          defaultMessage: `{marketplaceName} is already added`,
                          description: `Toast shown after adding a marketplace that was already configured`,
                        },
                        { marketplaceName: t.marketplaceName },
                      )
                    : a.formatMessage(
                        {
                          id: `skills.appsPage.addMarketplace.success`,
                          defaultMessage: `{marketplaceName} marketplace added`,
                          description: `Toast shown after successfully adding a plugin marketplace`,
                        },
                        { marketplaceName: t.marketplaceName },
                      ),
                ),
              t.marketplaceName);
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = i),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Qt(e) {
  o.error(`Failed to refresh plugins after adding marketplace`, { safe: {}, sensitive: { error: e } });
}
var $t;
function en() {
  return (en = e(() => {
    (($t = I()), p(), k(), A(), L(), h(), ye());
  }))();
}
function tn({ creatorPath: e, includeStarterPrompt: t, kind: n }) {
  let r = nn[n],
    i = `[$${r.skillName}](${z(e)})`;
  return t ? `${i} ${r.starterPrompt}` : `${i} `;
}
var nn, rn, an;
function on() {
  return (on = e(() => {
    (a(),
      ot(),
      (nn = {
        plugin: { starterPrompt: `help me create a plugin`, skillName: `plugin-creator` },
        skill: { starterPrompt: `help me create a skill`, skillName: `skill-creator` },
      }),
      (rn = `has-opened-skill-creator-prefill-v1`),
      (an = qe(rn, !1)));
  }))();
}
function sn(e) {
  let t = (0, ln.c)(6),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : ((n = (0, dn.jsx)(cn, { ...e, failed: !0 })),
      (r = e.open
        ? (0, dn.jsx)(un.Suspense, {
            fallback: (0, dn.jsx)(cn, { ...e }),
            children: (0, dn.jsx)(fn, { ...e }),
          })
        : null),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r));
  let i;
  return (
    t[3] !== n || t[4] !== r
      ? ((i = (0, dn.jsx)(Y, { name: `AddMarketplaceDialog`, fallback: n, children: r })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i))
      : (i = t[5]),
    i
  );
}
function cn(e) {
  let t = (0, ln.c)(7),
    { open: n, onOpenChange: r, failed: i } = e,
    a = i !== void 0 && i,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a
        ? (0, dn.jsx)(c, {
            id: `plugins.addMarketplace.loadError`,
            defaultMessage: `Couldn’t open Add marketplace`,
            description: `Title when downloading the dialog for adding a plugin marketplace fails after retrying`,
          })
        : (0, dn.jsx)(c, {
            id: `plugins.addMarketplace.loading`,
            defaultMessage: `Loading Add marketplace…`,
            description: `Title while downloading the dismissible dialog for adding a plugin marketplace`,
          })),
      (t[0] = a),
      (t[1] = o));
  let s;
  return (
    t[2] !== a || t[3] !== r || t[4] !== n || t[5] !== o
      ? ((s = (0, dn.jsx)(Z, { open: n, onOpenChange: r, size: `wide`, failed: a, title: o })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = n),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var ln, un, dn, fn;
function pn() {
  return (pn = e(() => {
    ((ln = I()),
      (un = B()),
      k(),
      ve(),
      Ne(),
      V(),
      (dn = R()),
      j(),
      (fn = i(
        async () =>
          (
            await w(
              async () => {
                let { AddMarketplaceDialog: e } = await import(`./add-marketplace-dialog-059a4ea611db.js`);
                return { AddMarketplaceDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url,
            )
          ).AddMarketplaceDialog,
        { suspendToParent: !0, propagateLoadError: !0 },
      )));
  }))();
}
function mn(e) {
  let t = (0, _n.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = we(e.hostId) ? (0, yn.jsx)(Ct, { ...e }) : (0, yn.jsx)(hn, { ...e })), (t[0] = e), (t[1] = n)),
    n
  );
}
function hn(e) {
  let t = (0, _n.c)(69),
    { children: n, currentBrowseTab: r, hostId: i, mode: a, onAddMcpServer: o, source: c } = e,
    u = l(s),
    d = ee(),
    p;
  t[0] === i ? (p = t[1]) : ((p = { hostId: i }), (t[0] = i), (t[1] = p));
  let m = he(p),
    h = Ce(),
    g = Ie(i),
    _;
  t[2] === g ? (_ = t[3]) : ((_ = g == null ? null : Ve(g)), (t[2] = g), (t[3] = _));
  let ne;
  t[4] !== i || t[5] !== _
    ? ((ne = { hostId: i, marketplacePath: _, pluginName: f, remoteMarketplaceName: null }),
      (t[4] = i),
      (t[5] = _),
      (t[6] = ne))
    : (ne = t[6]);
  let y;
  t[7] !== g || t[8] !== i || t[9] !== m
    ? ((y = m && g != null && !we(i)), (t[7] = g), (t[8] = i), (t[9] = m), (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] === y ? (b = t[12]) : ((b = { enabled: y }), (t[11] = y), (t[12] = b));
  let { data: x, refetch: S } = oe(Ye, ne, b),
    C = !m || x == null ? [] : [Fe(x)],
    w = v(Oe),
    T = v(mt),
    E;
  t[13] !== i || t[14] !== T || t[15] !== w
    ? ((E = gn(i, w, T)), (t[13] = i), (t[14] = T), (t[15] = w), (t[16] = E))
    : (E = t[16]);
  let D = E,
    O = i === `local` || D != null,
    { value: k } = lt(`1349514884`),
    { hiddenPluginIds: ie } = le(k),
    A = De(C, ie, h),
    j;
  t[17] === S
    ? (j = t[18])
    : ((j = async () => {
        await S();
      }),
      (t[17] = S),
      (t[18] = j));
  let ae;
  t[19] !== D || t[20] !== i || t[21] !== c || t[22] !== A || t[23] !== j
    ? ((ae = { activeProject: D, availablePlugins: A, hostId: i, reloadPlugins: j, source: c }),
      (t[19] = D),
      (t[20] = i),
      (t[21] = c),
      (t[22] = A),
      (t[23] = j),
      (t[24] = ae))
    : (ae = t[24]);
  let M = _t(ae),
    N = se(),
    P = v(an) ?? Be(`has-opened-skill-creator-prefill-v1`, !1),
    [F, I] = (0, vn.useState)(!1),
    L;
  t[25] !== i || t[26] !== u
    ? ((L = async () => {
        await Promise.all([void 0, Me(u.queryClient, [...pe, i]), Me(u.queryClient, [...je, i])]);
      }),
      (t[25] = i),
      (t[26] = u),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== i || t[29] !== L
    ? ((R = { forceReloadPlugins: L, hostId: i }), (t[28] = i), (t[29] = L), (t[30] = R))
    : (R = t[30]);
  let z = Zt(R),
    B = g == null ? null : `${g}/skills/.system/skill-creator/SKILL.md`,
    V;
  t[31] !== D || t[32] !== O || t[33] !== P || t[34] !== m || t[35] !== u || t[36] !== B || t[37] !== N
    ? ((V = () => {
        m &&
          O &&
          B != null &&
          (Se(u, te, {}),
          P || u.set(an, !0),
          N({
            activeProject: D,
            prefillPrompt: tn({ creatorPath: B, includeStarterPrompt: !P, kind: `skill` }),
            startInSidebar: !0,
          }));
      }),
      (t[31] = D),
      (t[32] = O),
      (t[33] = P),
      (t[34] = m),
      (t[35] = u),
      (t[36] = B),
      (t[37] = N),
      (t[38] = V))
    : (V = t[38]);
  let H = V,
    U;
  t[39] !== n || t[40] !== r || t[41] !== a
    ? ((U = (e) => (n == null ? (0, yn.jsx)(vt, { mode: a, currentBrowseTab: r, ...e }) : n(e))),
      (t[39] = n),
      (t[40] = r),
      (t[41] = a),
      (t[42] = U))
    : (U = t[42]);
  let W = U,
    ce = m && O,
    G;
  t[43] === D
    ? (G = t[44])
    : ((G = () => ({ activeProject: D, startInSidebar: !0 })), (t[43] = D), (t[44] = G));
  let K;
  t[45] !== O || t[46] !== m || t[47] !== o || t[48] !== M || t[49] !== W || t[50] !== B || t[51] !== H
    ? ((K = (e) =>
        W({
          ...e,
          canCreateSkill: m && O && B != null,
          onAddMarketplace: m ? () => I(!0) : void 0,
          onAddMcpServer: o,
          onCreateSkill: H,
          recordSkillAction: m && O ? (M ?? void 0) : void 0,
        })),
      (t[45] = O),
      (t[46] = m),
      (t[47] = o),
      (t[48] = M),
      (t[49] = W),
      (t[50] = B),
      (t[51] = H),
      (t[52] = K))
    : (K = t[52]);
  let q;
  t[53] !== i || t[54] !== ce || t[55] !== G || t[56] !== K
    ? ((q = (0, yn.jsx)(xt, { canCreatePlugin: ce, getConversation: G, hostId: i, children: K })),
      (t[53] = i),
      (t[54] = ce),
      (t[55] = G),
      (t[56] = K),
      (t[57] = q))
    : (q = t[57]);
  let J;
  t[58] !== z || t[59] !== i || t[60] !== a || t[61] !== d
    ? ((J = async (e) => {
        let t = await z(e);
        d(
          { pathname: `/plugins`, search: `?directory=personal` },
          {
            state: {
              initialHostId: i,
              initialMarketplaceName: t,
              initialTab: `plugins`,
              pluginDirectoryEntrypoint:
                a === `manage`
                  ? re.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS
                  : re.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR,
            },
          },
        );
      }),
      (t[58] = z),
      (t[59] = i),
      (t[60] = a),
      (t[61] = d),
      (t[62] = J))
    : (J = t[62]);
  let Y;
  t[63] !== F || t[64] !== J
    ? ((Y = (0, yn.jsx)(sn, { open: F, onAddMarketplace: J, onOpenChange: I })),
      (t[63] = F),
      (t[64] = J),
      (t[65] = Y))
    : (Y = t[65]);
  let ue;
  return (
    t[66] !== q || t[67] !== Y
      ? ((ue = (0, yn.jsxs)(yn.Fragment, { children: [q, Y] })), (t[66] = q), (t[67] = Y), (t[68] = ue))
      : (ue = t[68]),
    ue
  );
}
function gn(e, t, n) {
  if (e === `local`) return t?.type === `local` ? Ee(t) : null;
  let r =
    n.find((n) => n.hostId === e && t?.type === `remote` && n.id === t.projectId) ??
    n.find((t) => t.hostId === e);
  return r == null ? null : { projectKind: `remote`, projectId: r.id };
}
var _n, vn, yn;
function bn() {
  return (bn = e(() => {
    ((_n = I()),
      m(),
      p(),
      N(),
      (vn = B()),
      x(),
      Le(),
      me(),
      at(),
      ue(),
      q(),
      Ge(),
      be(),
      de(),
      en(),
      Re(),
      gt(),
      Pe(),
      ce(),
      J(),
      W(),
      L(),
      Qe(),
      nt(),
      on(),
      St(),
      We(),
      pt(),
      bt(),
      pn(),
      yt(),
      (yn = R()));
  }))();
}
function xn(e) {
  let t = (0, En.c)(72),
    {
      presentation: n,
      cardClassName: r,
      cardContentGap: i,
      emptyStateAction: a,
      errorMessage: o,
      homeDirectory: s,
      isLoading: ee,
      installedStateAction: l,
      installButtonLabel: u,
      highlightedPluginKey: d,
      pluginInstallationStatus: f,
      isSingleColumn: p,
      flushCards: te,
      getCopyLinkUrl: m,
      getPluginDetailTo: h,
      hostId: g,
      incentiveSurface: _,
      gridGap: ne,
      reducedMotion: v,
      useCompactEmptyState: re,
      plugins: y,
      emptyStateTitle: b,
      onInstallPlugin: x,
      onCopyShareLink: S,
      onOpenPluginDetails: C,
      onShareInstalledPlugin: w,
      onTryInChat: T,
      onUninstallInstalledPlugin: E,
      onToggleInstalledPluginEnabled: D,
      renderInstalledAction: O,
      pendingPluginId: k,
      uninstalling: ie,
      unavailablePluginIds: A,
    } = e,
    j = n === void 0 ? `cards` : n,
    M = i === void 0 ? `compact` : i,
    N = l === void 0 ? `status` : l,
    P = f === void 0 ? null : f,
    F = p !== void 0 && p,
    I = te !== void 0 && te,
    L = _ === void 0 ? `directory` : _,
    R = ne === void 0 ? `compact` : ne,
    z = v !== void 0 && v,
    B = re !== void 0 && re,
    V = et(`1269116100`);
  if (ee) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`div`, {
            className: `flex h-full min-h-full flex-1 items-center justify-center px-6 py-8 text-center`,
            children: (0, Q.jsx)(it, { children: (0, Q.jsx)(c, { ...$.pageLoading }) }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (o) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { ...$.loadErrorTitle })), (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(Pt, { "aria-hidden": !0, className: `h-20 w-auto text-tertiary` })), (t[2] = n))
      : (n = t[2]);
    let r;
    return (
      t[3] === o
        ? (r = t[4])
        : ((r = (0, Q.jsx)(`div`, {
            className: `flex h-full min-h-full flex-1 items-center justify-center py-8`,
            children: (0, Q.jsx)(U, { title: e, description: o, illustration: n }),
          })),
          (t[3] = o),
          (t[4] = r)),
      r
    );
  }
  if (y.length === 0) {
    let e;
    return (
      t[5] !== a || t[6] !== b || t[7] !== B
        ? ((e = (0, Q.jsx)(`div`, {
            className: `flex min-h-0 flex-1 items-center justify-center py-8`,
            children: B
              ? (0, Q.jsx)(`div`, { className: `text-sm text-secondary`, children: b })
              : (0, Q.jsx)(U, { title: b, description: a }),
          })),
          (t[5] = a),
          (t[6] = b),
          (t[7] = B),
          (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  let oe;
  if (
    t[9] !== r ||
    t[10] !== M ||
    t[11] !== I ||
    t[12] !== m ||
    t[13] !== h ||
    t[14] !== d ||
    t[15] !== s ||
    t[16] !== g ||
    t[17] !== L ||
    t[18] !== u ||
    t[19] !== N ||
    t[20] !== V ||
    t[21] !== S ||
    t[22] !== x ||
    t[23] !== C ||
    t[24] !== w ||
    t[25] !== D ||
    t[26] !== T ||
    t[27] !== E ||
    t[28] !== k ||
    t[29] !== P ||
    t[30] !== y ||
    t[31] !== j ||
    t[32] !== z ||
    t[33] !== O ||
    t[34] !== A ||
    t[35] !== ie
  ) {
    let e;
    (t[37] !== r ||
    t[38] !== M ||
    t[39] !== I ||
    t[40] !== m ||
    t[41] !== h ||
    t[42] !== d ||
    t[43] !== s ||
    t[44] !== g ||
    t[45] !== L ||
    t[46] !== u ||
    t[47] !== N ||
    t[48] !== V ||
    t[49] !== S ||
    t[50] !== x ||
    t[51] !== C ||
    t[52] !== w ||
    t[53] !== D ||
    t[54] !== T ||
    t[55] !== E ||
    t[56] !== k ||
    t[57] !== P ||
    t[58] !== y.length ||
    t[59] !== j ||
    t[60] !== z ||
    t[61] !== O ||
    t[62] !== A ||
    t[63] !== ie
      ? ((e = (e, t) =>
          (0, Q.jsxs)(
            Dn.Fragment,
            {
              children: [
                (0, Q.jsx)(Sn, {
                  presentation: j,
                  incentiveSurface: L,
                  contentClassName: M === `compact` ? `!gap-px` : void 0,
                  installedStateAction: N,
                  installProgressPercent: Te(P, g, e.plugin.id),
                  installPhase: X(P, g, e.plugin.id),
                  isInstallLocked: P != null,
                  isUpdatingEnabled: k === e.plugin.id,
                  isUninstalling: g != null && ie != null && xe(ie, { hostId: g, pluginId: e.plugin.id }),
                  reducedMotion: z,
                  cardClassName: I ? `!rounded-none !border-0` : r,
                  copyLinkUrl: e.plugin.shareContext?.shareUrl ?? m?.(e) ?? null,
                  onUninstallInstalledPlugin:
                    E == null || Ue(e.plugin.id)
                      ? void 0
                      : (e) => {
                          E({
                            marketplaceName: e.marketplaceName,
                            plugin: e.plugin,
                            pluginDisplayName: fe(e),
                            pluginId: e.plugin.id,
                            pluginName: e.plugin.name,
                            requestPluginId: K(e),
                          });
                        },
                  onCopyShareLink: S,
                  detailTo: C == null ? void 0 : (h?.(e) ?? ut(e, { hostId: g })),
                  onOpenPluginDetails: C,
                  onShareInstalledPlugin: w,
                  onToggleInstalledPluginEnabled: D,
                  renderInstalledAction: O,
                  plugin: e,
                  homeDirectory: s,
                  hostId: g,
                  isPluginSharingEnabled: V,
                  isUnavailableInCurrentContext: A?.has(e.plugin.id),
                  isHighlighted: d === tt(e),
                  installButtonLabel: u,
                  onInstallPlugin: x,
                  onTryInChat: T,
                }),
                I && t < y.length - 1 ? (0, Q.jsx)(`div`, { className: `mx-2.5 h-px bg-border` }) : null,
              ],
            },
            tt(e),
          )),
        (t[37] = r),
        (t[38] = M),
        (t[39] = I),
        (t[40] = m),
        (t[41] = h),
        (t[42] = d),
        (t[43] = s),
        (t[44] = g),
        (t[45] = L),
        (t[46] = u),
        (t[47] = N),
        (t[48] = V),
        (t[49] = S),
        (t[50] = x),
        (t[51] = C),
        (t[52] = w),
        (t[53] = D),
        (t[54] = T),
        (t[55] = E),
        (t[56] = k),
        (t[57] = P),
        (t[58] = y.length),
        (t[59] = j),
        (t[60] = z),
        (t[61] = O),
        (t[62] = A),
        (t[63] = ie),
        (t[64] = e))
      : (e = t[64]),
      (oe = y.map(e)),
      (t[9] = r),
      (t[10] = M),
      (t[11] = I),
      (t[12] = m),
      (t[13] = h),
      (t[14] = d),
      (t[15] = s),
      (t[16] = g),
      (t[17] = L),
      (t[18] = u),
      (t[19] = N),
      (t[20] = V),
      (t[21] = S),
      (t[22] = x),
      (t[23] = C),
      (t[24] = w),
      (t[25] = D),
      (t[26] = T),
      (t[27] = E),
      (t[28] = k),
      (t[29] = P),
      (t[30] = y),
      (t[31] = j),
      (t[32] = z),
      (t[33] = O),
      (t[34] = A),
      (t[35] = ie),
      (t[36] = oe));
  } else oe = t[36];
  let H = oe;
  if (j === `settings`) {
    let e;
    return (t[65] === H ? (e = t[66]) : ((e = (0, Q.jsx)(ae, { children: H })), (t[65] = H), (t[66] = e)), e);
  }
  let W;
  return (
    t[67] !== H || t[68] !== I || t[69] !== R || t[70] !== F
      ? ((W = I
          ? (0, Q.jsx)(`div`, {
              className: `flex flex-col overflow-hidden rounded-lg border border-default`,
              children: H,
            })
          : (0, Q.jsx)(wt, { gap: R, isSingleColumn: F, children: H })),
        (t[67] = H),
        (t[68] = I),
        (t[69] = R),
        (t[70] = F),
        (t[71] = W))
      : (W = t[71]),
    W
  );
}
function Sn(e) {
  let n = (0, En.c)(145),
    {
      presentation: r,
      detailTo: i,
      cardClassName: a,
      contentClassName: o,
      copyLinkUrl: s,
      homeDirectory: ee,
      hostId: l,
      incentiveSurface: u,
      installedStateAction: d,
      installButtonLabel: f,
      installPhase: p,
      installProgressPercent: te,
      isInstallLocked: m,
      isUpdatingEnabled: h,
      isUninstalling: _,
      reducedMotion: v,
      onCopyShareLink: re,
      onOpenPluginDetails: b,
      onShareInstalledPlugin: x,
      onUninstallInstalledPlugin: S,
      onToggleInstalledPluginEnabled: C,
      renderInstalledAction: w,
      plugin: E,
      isPluginSharingEnabled: O,
      isUnavailableInCurrentContext: k,
      isHighlighted: A,
      onInstallPlugin: j,
      onTryInChat: ae,
    } = e,
    N = k !== void 0 && k,
    F = ne(),
    I;
  n[0] === E ? (I = n[1]) : ((I = fe(E)), (n[0] = E), (n[1] = I));
  let L = I,
    R = te != null,
    z;
  n[2] !== d || n[3] !== R || n[4] !== C || n[5] !== E
    ? ((z = R ? `install` : wn({ installedStateAction: d, plugin: E, onToggleInstalledPluginEnabled: C })),
      (n[2] = d),
      (n[3] = R),
      (n[4] = C),
      (n[5] = E),
      (n[6] = z))
    : (z = n[6]);
  let B = z,
    V = E.plugin.source.type === `remote`,
    oe;
  n[7] === E.plugin ? (oe = n[8]) : ((oe = ct(E.plugin)), (n[7] = E.plugin), (n[8] = oe));
  let H = oe,
    U;
  n[9] !== H || n[10] !== E.plugin.installPolicySource
    ? ((U = H
        ? (0, Q.jsx)(Jt, { source: E.plugin.installPolicySource })
        : (0, Q.jsx)(c, { ...$.uninstallMenuItem })),
      (n[9] = H),
      (n[10] = E.plugin.installPolicySource),
      (n[11] = U))
    : (U = n[11]);
  let W = U,
    se;
  n[12] !== ee || n[13] !== E.marketplacePath || n[14] !== E.plugin.source
    ? ((se = ze(ee, E.marketplacePath, E.plugin.source)),
      (n[12] = ee),
      (n[13] = E.marketplacePath),
      (n[14] = E.plugin.source),
      (n[15] = se))
    : (se = n[15]);
  let ce = se,
    G;
  n[16] !== x || n[17] !== E || n[18] !== ce
    ? ((G =
        E.plugin.installed && ce != null && x != null
          ? () => {
              x(E);
            }
          : void 0),
      (n[16] = x),
      (n[17] = E),
      (n[18] = ce),
      (n[19] = G))
    : (G = n[19]);
  let le = G,
    K = s != null || (re != null && ce != null),
    q;
  n[20] !== K || n[21] !== s || n[22] !== re || n[23] !== E
    ? ((q = K
        ? (0, Q.jsx)(g.Item, {
            leftIconAsset: y,
            onSelect: () => {
              if (re != null) {
                re(E);
                return;
              }
              s != null && M(s);
            },
            children: (0, Q.jsx)(c, {
              id: `plugins.card.copyShareLinkMenuItem`,
              defaultMessage: `Copy link`,
              description: `Menu item label for copying a plugin share link from the manage plugins list`,
            }),
          })
        : null),
      (n[20] = K),
      (n[21] = s),
      (n[22] = re),
      (n[23] = E),
      (n[24] = q))
    : (q = n[24]);
  let J = q,
    Y = E.plugin.installed && !E.plugin.enabled,
    ue = f == null && !E.plugin.installed,
    de = (!E.plugin.installed && f != null) || (E.plugin.installed && !V && w != null),
    pe;
  n[25] !== l || n[26] !== E || n[27] !== de
    ? ((pe = de ? { hostId: l, ...st(E), pluginSummary: E.plugin } : { hostId: l, pluginSummary: E.plugin }),
      (n[25] = l),
      (n[26] = E),
      (n[27] = de),
      (n[28] = pe))
    : (pe = n[28]);
  let { blockedReason: me, isLoading: he } = ke(pe),
    ge = dt(E.plugin),
    X = ge ? E.plugin.disabledReason : null,
    Z = (ge ? `disabled-by-admin` : me) === `disabled-by-admin`,
    _e = ue && Z,
    ve = m || Z || he,
    ye;
  n[29] === f
    ? (ye = n[30])
    : ((ye = f ?? (0, Q.jsx)(c, { ...$.installTooltip })), (n[29] = f), (n[30] = ye));
  let be = ye;
  if (R) {
    let e;
    (n[31] === p
      ? (e = n[32])
      : ((e =
          p === `installing` ? (0, Q.jsx)(c, { ...$.installing }) : (0, Q.jsx)(c, { ...$.installLoading })),
        (n[31] = p),
        (n[32] = e)),
      (be = e));
  } else if (Z) {
    let e;
    n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { ...$.disabledByAdmin })), (n[33] = e))
      : (e = n[33]);
    let t;
    (n[34] === X
      ? (t = n[35])
      : ((t = (0, Q.jsx)(Xt, { disabledReason: X, children: e })), (n[34] = X), (n[35] = t)),
      (be = t));
  } else if (m) {
    let e;
    (n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { ...$.installLoading })), (n[36] = e))
      : (e = n[36]),
      (be = e));
  }
  let xe;
  n[37] !== E.plugin.shareContext?.creatorName || n[38] !== r
    ? ((xe = r === `settings` ? null : E.plugin.shareContext?.creatorName?.trim() || null),
      (n[37] = E.plugin.shareContext?.creatorName),
      (n[38] = r),
      (n[39] = xe))
    : (xe = n[39]);
  let Se = xe,
    Ce;
  n[40] !== f ||
  n[41] !== p ||
  n[42] !== te ||
  n[43] !== ve ||
  n[44] !== R ||
  n[45] !== j ||
  n[46] !== E ||
  n[47] !== v
    ? ((Ce = R
        ? (0, Q.jsx)(zt, {
            phase: p === `installing` ? `installing` : `loading`,
            progressPercent: te,
            reducedMotion: v,
          })
        : (0, Q.jsx)(t, {
            color: `outline`,
            disabled: ve,
            onClick: (e) => {
              (e.stopPropagation(), j(E));
            },
            size: `toolbar`,
            children:
              f ??
              (0, Q.jsx)(c, {
                id: `plugins.card.connect`,
                defaultMessage: `Install`,
                description: `Button label for installing a plugin`,
              }),
          })),
      (n[40] = f),
      (n[41] = p),
      (n[42] = te),
      (n[43] = ve),
      (n[44] = R),
      (n[45] = j),
      (n[46] = E),
      (n[47] = v),
      (n[48] = Ce))
    : (Ce = n[48]);
  let we = Ce,
    Te;
  n[49] === L
    ? (Te = n[50])
    : ((Te = (0, Q.jsx)(`span`, { className: `truncate`, children: L })), (n[49] = L), (n[50] = Te));
  let Ee;
  n[51] !== l ||
  n[52] !== u ||
  n[53] !== E.plugin.id ||
  n[54] !== E.plugin.remotePluginId ||
  n[55] !== E.plugin.shareContext?.remotePluginId ||
  n[56] !== L
    ? ((Ee =
        l == null
          ? null
          : (0, Q.jsx)(Mt, {
              hostId: l,
              pluginIds: [E.plugin.id, E.plugin.remotePluginId, E.plugin.shareContext?.remotePluginId],
              pluginName: L,
              surface: u,
            })),
      (n[51] = l),
      (n[52] = u),
      (n[53] = E.plugin.id),
      (n[54] = E.plugin.remotePluginId),
      (n[55] = E.plugin.shareContext?.remotePluginId),
      (n[56] = L),
      (n[57] = Ee))
    : (Ee = n[57]);
  let De;
  n[58] !== Te || n[59] !== Ee
    ? ((De = (0, Q.jsxs)(`span`, {
        className: `inline-flex max-w-full flex-wrap items-center gap-2`,
        children: [Te, Ee],
      })),
      (n[58] = Te),
      (n[59] = Ee),
      (n[60] = De))
    : (De = n[60]);
  let Oe = De,
    Ae;
  n[61] !== Se || n[62] !== E.description
    ? ((Ae =
        E.description == null && Se == null
          ? void 0
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                E.description == null
                  ? null
                  : (0, Q.jsx)(`div`, { className: `line-clamp-1`, children: E.description }),
                Se == null
                  ? null
                  : (0, Q.jsx)(`div`, {
                      className: `text-xs text-codex-description`,
                      children: (0, Q.jsx)(c, { ...$.sharedBy, values: { name: Se } }),
                    }),
              ],
            })),
      (n[61] = Se),
      (n[62] = E.description),
      (n[63] = Ae))
    : (Ae = n[63]);
  let je = Ae,
    Me;
  n[64] !== O || n[65] !== N || n[66] !== E
    ? ((Me = Tn(E, N, O)), (n[64] = O), (n[65] = N), (n[66] = E), (n[67] = Me))
    : (Me = n[67]);
  let Ne = Me,
    Pe;
  n[68] !== B ||
  n[69] !== J ||
  n[70] !== i ||
  n[71] !== X ||
  n[72] !== le ||
  n[73] !== be ||
  n[74] !== we ||
  n[75] !== F ||
  n[76] !== Z ||
  n[77] !== Y ||
  n[78] !== ve ||
  n[79] !== H ||
  n[80] !== _ ||
  n[81] !== h ||
  n[82] !== b ||
  n[83] !== C ||
  n[84] !== ae ||
  n[85] !== S ||
  n[86] !== E ||
  n[87] !== L ||
  n[88] !== v ||
  n[89] !== w ||
  n[90] !== _e ||
  n[91] !== W
    ? ((Pe = _
        ? (0, Q.jsx)(Ht, { isUninstallDisabled: H, isUninstalling: !0, uninstallMenuLabel: W })
        : B === `toggle`
          ? (0, Q.jsx)(P, {
              tooltipContent: Z
                ? (0, Q.jsx)(Xt, { disabledReason: X, children: (0, Q.jsx)(c, { ...$.disabledByAdmin }) })
                : E.plugin.enabled
                  ? (0, Q.jsx)(c, { ...$.disableToggleTooltip })
                  : (0, Q.jsx)(c, { ...$.enableToggleTooltip }),
              children: (0, Q.jsx)(ie, {
                checked: E.plugin.enabled,
                disabled: Z || h || _,
                ariaLabel: Z
                  ? Kt({ disabledReason: X, fallback: F.formatMessage($.disabledByAdmin), intl: F })
                  : F.formatMessage($.toggleAria),
                onClick: Cn,
                onChange: (e) => {
                  C?.({ plugin: E.plugin, pluginId: E.plugin.id, pluginDisplayName: L, enabled: e });
                },
              }),
            })
          : B === `menu`
            ? (0, Q.jsx)(`div`, {
                className: `flex items-center gap-2`,
                children: (0, Q.jsx)(Rt, {
                  disableMenuLabel: (0, Q.jsx)(c, {
                    id: `plugins.card.disableMenuItem`,
                    defaultMessage: `Disable`,
                    description: `Menu item label for disabling a plugin from a plugin card`,
                  }),
                  enableButtonLabel: (0, Q.jsx)(c, { ...$.enableButton }),
                  enabledStatusAriaLabel: F.formatMessage($.enabledStatus),
                  isEnabled: E.plugin.enabled && !Z,
                  isUninstallDisabled: H,
                  isUninstalling: _,
                  isUpdating: h,
                  menuLabel: F.formatMessage({
                    id: `plugins.card.actionsMenu`,
                    defaultMessage: `Plugin actions`,
                    description: `Aria label for the plugin card actions menu trigger`,
                  }),
                  menuItems: J,
                  onDisable:
                    !Z && C
                      ? () => {
                          C({ plugin: E.plugin, pluginId: E.plugin.id, pluginDisplayName: L, enabled: !1 });
                        }
                      : void 0,
                  onEnable:
                    Y && !Z && C
                      ? () => {
                          C({ plugin: E.plugin, pluginId: E.plugin.id, pluginDisplayName: L, enabled: !0 });
                        }
                      : void 0,
                  onUninstall: S
                    ? () => {
                        S(E);
                      }
                    : void 0,
                  uninstallMenuLabel: W,
                }),
              })
            : B === `status`
              ? (w?.(E, ve) ??
                (0, Q.jsx)(`div`, {
                  className: `flex items-center gap-2`,
                  children: (0, Q.jsx)(Ht, {
                    isUninstallDisabled: H,
                    isUninstalling: _,
                    manageTo: i,
                    onManage: b == null ? void 0 : () => b(E),
                    onShare: le,
                    onUninstall:
                      S == null
                        ? void 0
                        : () => {
                            S(E);
                          },
                    onTryInChat:
                      ae == null || Z || !E.plugin.enabled
                        ? void 0
                        : () => {
                            ae(E);
                          },
                    uninstallMenuLabel: W,
                  }),
                }))
              : _e
                ? (0, Q.jsx)(P, {
                    tooltipContent: (0, Q.jsx)(Xt, {
                      disabledReason: X,
                      children: (0, Q.jsx)(c, { ...$.disabledInstallTooltip }),
                    }),
                    children: (0, Q.jsx)(`span`, {
                      role: `img`,
                      "aria-label": Kt({
                        disabledReason: X,
                        fallback: F.formatMessage($.disabledInstallTooltip),
                        intl: F,
                      }),
                      className: `flex h-7 w-7 shrink-0 items-center justify-center text-tertiary`,
                      children: (0, Q.jsx)(It, { className: `icon-sm` }),
                    }),
                  })
                : (0, Q.jsx)(Ut, {
                    measurement: we,
                    reducedMotion: v,
                    children: (0, Q.jsx)(P, {
                      tooltipContent: be,
                      children: (0, Q.jsx)(`div`, {
                        className: ve ? `cursor-not-allowed` : `cursor-interaction`,
                        children: we,
                      }),
                    }),
                  })),
      (n[68] = B),
      (n[69] = J),
      (n[70] = i),
      (n[71] = X),
      (n[72] = le),
      (n[73] = be),
      (n[74] = we),
      (n[75] = F),
      (n[76] = Z),
      (n[77] = Y),
      (n[78] = ve),
      (n[79] = H),
      (n[80] = _),
      (n[81] = h),
      (n[82] = b),
      (n[83] = C),
      (n[84] = ae),
      (n[85] = S),
      (n[86] = E),
      (n[87] = L),
      (n[88] = v),
      (n[89] = w),
      (n[90] = _e),
      (n[91] = W),
      (n[92] = Pe))
    : (Pe = n[92]);
  let Fe = Pe;
  if (r === `settings`) {
    let e;
    n[93] !== Ne || n[94] !== Oe
      ? ((e = (0, Q.jsxs)(`span`, { className: `flex flex-wrap items-center gap-2`, children: [Oe, Ne] })),
        (n[93] = Ne),
        (n[94] = Oe),
        (n[95] = e))
      : (e = n[95]);
    let t;
    n[96] !== i || n[97] !== l || n[98] !== E
      ? ((t = i ?? ut(E, { hostId: l })), (n[96] = i), (n[97] = l), (n[98] = E), (n[99] = t))
      : (t = n[99]);
    let r;
    n[100] !== b || n[101] !== E
      ? ((r = b == null ? void 0 : (e) => b(E, e)), (n[100] = b), (n[101] = E), (n[102] = r))
      : (r = n[102]);
    let a;
    return (
      n[103] !== Fe ||
      n[104] !== je ||
      n[105] !== E.logoDarkPath ||
      n[106] !== E.logoPath ||
      n[107] !== E.plugin.name ||
      n[108] !== e ||
      n[109] !== t ||
      n[110] !== r
        ? ((a = (0, Q.jsx)(kt, {
            label: e,
            description: je,
            logoUrl: E.logoPath,
            logoDarkUrl: E.logoDarkPath,
            knownAppId: E.plugin.name,
            actions: Fe,
            to: t,
            onClick: r,
          })),
          (n[103] = Fe),
          (n[104] = je),
          (n[105] = E.logoDarkPath),
          (n[106] = E.logoPath),
          (n[107] = E.plugin.name),
          (n[108] = e),
          (n[109] = t),
          (n[110] = r),
          (n[111] = a))
        : (a = n[111]),
      a
    );
  }
  let Ie = a ?? `border-none`,
    Le;
  n[112] === Ie
    ? (Le = n[113])
    : ((Le = T(`group !cursor-interaction justify-center`, Ie)), (n[112] = Ie), (n[113] = Le));
  let Re = (Y || N || Z) && `opacity-60`,
    Be;
  n[114] !== o || n[115] !== Re
    ? ((Be = T(o, Re)), (n[114] = o), (n[115] = Re), (n[116] = Be))
    : (Be = n[116]);
  let Ve = b ? `!cursor-interaction` : null,
    He;
  n[117] === Ve
    ? (He = n[118])
    : ((He = T(
        `flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-transparent`,
        Ve,
      )),
      (n[117] = Ve),
      (n[118] = He));
  let Ue;
  n[119] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ue = (0, Q.jsx)(D, { className: `icon-md text-secondary` })), (n[119] = Ue))
    : (Ue = n[119]);
  let We;
  n[120] !== E.plugin.name || n[121] !== L
    ? ((We = (0, Q.jsx)($e, { alt: L, knownAppId: E.plugin.name, fallback: Ue })),
      (n[120] = E.plugin.name),
      (n[121] = L),
      (n[122] = We))
    : (We = n[122]);
  let Ge;
  n[123] !== E.logoDarkPath || n[124] !== E.logoPath || n[125] !== L || n[126] !== We
    ? ((Ge = (0, Q.jsx)($e, {
        alt: L,
        className: `h-full w-full object-contain`,
        logoDarkUrl: E.logoDarkPath,
        logoUrl: E.logoPath,
        fallback: We,
      })),
      (n[123] = E.logoDarkPath),
      (n[124] = E.logoPath),
      (n[125] = L),
      (n[126] = We),
      (n[127] = Ge))
    : (Ge = n[127]);
  let Ke;
  n[128] !== He || n[129] !== Ge
    ? ((Ke = (0, Q.jsx)(`span`, { className: He, children: Ge })),
      (n[128] = He),
      (n[129] = Ge),
      (n[130] = Ke))
    : (Ke = n[130]);
  let qe = b == null ? void 0 : i,
    Je;
  n[131] !== b || n[132] !== E
    ? ((Je = b
        ? (e) => {
            b(E, e);
          }
        : void 0),
      (n[131] = b),
      (n[132] = E),
      (n[133] = Je))
    : (Je = n[133]);
  let Ye;
  return (
    n[134] !== Fe ||
    n[135] !== Ne ||
    n[136] !== je ||
    n[137] !== A ||
    n[138] !== Le ||
    n[139] !== Be ||
    n[140] !== Ke ||
    n[141] !== qe ||
    n[142] !== Je ||
    n[143] !== Oe
      ? ((Ye = (0, Q.jsx)(Dt, {
          className: Le,
          contentClassName: Be,
          actionsPlacement: `center`,
          iconContainer: !1,
          icon: Ke,
          title: Oe,
          description: je,
          descriptionClassName: `flex flex-col gap-0.5 !text-codex-description`,
          badges: Ne,
          to: qe,
          onClick: Je,
          isHighlighted: A,
          actions: Fe,
        })),
        (n[134] = Fe),
        (n[135] = Ne),
        (n[136] = je),
        (n[137] = A),
        (n[138] = Le),
        (n[139] = Be),
        (n[140] = Ke),
        (n[141] = qe),
        (n[142] = Je),
        (n[143] = Oe),
        (n[144] = Ye))
      : (Ye = n[144]),
    Ye
  );
}
function Cn(e) {
  e.stopPropagation();
}
function wn({ installedStateAction: e, plugin: t, onToggleInstalledPluginEnabled: n }) {
  return t.plugin.installed && e === `toggle` && n
    ? `toggle`
    : t.plugin.installed && e === `menu` && n
      ? `menu`
      : t.plugin.installed
        ? `status`
        : `install`;
}
function Tn(e, t, n) {
  let r = [];
  return (
    t &&
      r.push(
        (0, Q.jsx)(
          `span`,
          {
            className: `text-codex-description`,
            children: (0, Q.jsx)(c, { ...$.unavailableInCurrentContext }),
          },
          `${e.plugin.id}-unavailable`,
        ),
      ),
    !n &&
      e.marketplaceName.length > 0 &&
      !rt(e) &&
      r.push(
        (0, Q.jsx)(
          `span`,
          { className: `text-codex-description`, children: He(e.marketplaceName) },
          `${e.plugin.id}-marketplace`,
        ),
      ),
    r
  );
}
var En, Dn, Q, $;
function On() {
  return (On = e(() => {
    ((En = I()),
      _(),
      b(),
      ge(),
      (Dn = B()),
      k(),
      Ke(),
      F(),
      r(),
      Je(),
      d(),
      C(),
      S(),
      Nt(),
      Ft(),
      Et(),
      Lt(),
      Bt(),
      Vt(),
      Ot(),
      Ze(),
      u(),
      Tt(),
      We(),
      O(),
      G(),
      jt(),
      ht(),
      Ae(),
      Wt(),
      ft(),
      Xe(),
      Yt(),
      Gt(),
      H(),
      qt(),
      Ge(),
      Re(),
      (Q = R()),
      ($ = n({
        pageLoading: {
          id: `plugins.page.loading`,
          defaultMessage: `Loading plugins…`,
          description: `Loading title on the plugins page`,
        },
        loadErrorTitle: {
          id: `plugins.page.loadError.title`,
          defaultMessage: `Failed to load plugins`,
          description: `Title shown when plugins could not be loaded`,
        },
        enableToggleTooltip: {
          id: `plugins.card.enableToggleTooltip`,
          defaultMessage: `Enable plugin`,
          description: `Tooltip label for enabling a plugin`,
        },
        disableToggleTooltip: {
          id: `plugins.card.disableToggleTooltip`,
          defaultMessage: `Disable plugin`,
          description: `Tooltip label for disabling a plugin`,
        },
        toggleAria: {
          id: `plugins.card.toggleAria`,
          defaultMessage: `Toggle plugin enabled state`,
          description: `Accessible label for the plugin enablement toggle`,
        },
        enabledStatus: {
          id: `plugins.card.enabledStatus`,
          defaultMessage: `Plugin enabled`,
          description: `Status label for an installed plugin that is enabled`,
        },
        enableButton: {
          id: `plugins.card.enableButton`,
          defaultMessage: `Enable`,
          description: `Button label for enabling a disabled plugin from a plugin card`,
        },
        disabledStatus: {
          id: `plugins.card.disabledStatus`,
          defaultMessage: `Plugin disabled`,
          description: `Status label for an installed plugin that is disabled`,
        },
        installTooltip: {
          id: `plugins.card.installTooltip`,
          defaultMessage: `Install plugin`,
          description: `Tooltip label for installing a plugin`,
        },
        installLoading: {
          id: `plugins.card.loading`,
          defaultMessage: `Loading`,
          description: `Plugin card action while plugin setup is loading`,
        },
        installing: {
          id: `plugins.card.installing`,
          defaultMessage: `Installing`,
          description: `Plugin card action while installation is in progress`,
        },
        unavailableInCurrentContext: {
          id: `plugins.card.unavailableInCurrentContext`,
          defaultMessage: `Unavailable in this context`,
          description: `Status label for an installed plugin that cannot be used in the current context`,
        },
        disabledByAdmin: {
          id: `plugins.card.disabledByAdmin`,
          defaultMessage: `Disabled by admin`,
          description: `Plugin card label when a plugin is disabled by an admin`,
        },
        disabledInstallTooltip: {
          id: `plugins.card.disabledInstallTooltip`,
          defaultMessage: `Access is turned off by your admin`,
          description: `Tooltip shown for the admin-disabled plugin install treatment in the plugins grid.`,
        },
        uninstallMenuItem: {
          id: `plugins.card.uninstallMenuItem`,
          defaultMessage: `Uninstall`,
          description: `Menu item label for uninstalling a plugin from a plugin card`,
        },
        sharedBy: {
          id: `plugins.card.sharedBy`,
          defaultMessage: `Shared by {name}`,
          description: `Footer label for the person who shared a plugin`,
        },
      })));
  }))();
}
export { rn as a, on as c, bn as i, On as n, tn as o, mn as r, an as s, xn as t };
//# sourceMappingURL=plugins-cards-grid-b8ca20fa8bd0.js.map
