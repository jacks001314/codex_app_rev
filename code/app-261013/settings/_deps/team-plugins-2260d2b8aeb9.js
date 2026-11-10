import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cxt as r,
  Ext as i,
  GD as a,
  Hot as o,
  IDt as s,
  Irt as c,
  Ixt as l,
  J7 as u,
  JG as d,
  JR as f,
  KD as p,
  Pxt as m,
  Rnt as h,
  TJ as g,
  VDt as ee,
  Vot as _,
  Vxt as te,
  XU as ne,
  YR as v,
  _xt as y,
  aD as b,
  cSt as x,
  cz as S,
  e3 as C,
  iD as re,
  jDt as w,
  nSt as T,
  nst as ie,
  rst as ae,
  sz as oe,
  t3 as E,
  tst as se,
  vzt as D,
  wot as ce,
  wxt as le,
  xMt as O,
  zxt as ue,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as k,
  Bcr as A,
  Bkn as de,
  Bun as j,
  D2 as M,
  Dsr as N,
  E2 as P,
  G1n as F,
  H1n as I,
  Icr as L,
  Id as R,
  Jcr as z,
  Jrt as fe,
  K1n as pe,
  Ld as me,
  Lkn as he,
  Msr as B,
  OX as V,
  QDr as H,
  Run as ge,
  S_r as _e,
  Tdn as ve,
  Tl as ye,
  Tsr as U,
  Ukn as be,
  XDr as xe,
  __r as Se,
  a2 as Ce,
  alr as we,
  bsr as Te,
  eDr as Ee,
  fur as De,
  hlr as W,
  hzt as Oe,
  jCn as G,
  jdn as ke,
  kX as K,
  kdn as Ae,
  l2 as q,
  lit as J,
  m_r as je,
  mlr as Me,
  mzt as Ne,
  o2 as Pe,
  ocr as Y,
  pur as X,
  q1n as Z,
  slr as Fe,
  tDr as Ie,
  xkr as Le,
  zkr as Re,
  zsr as ze,
} from "./app-initial-5851df3f6cb1.js";
import { n as Be, t as Ve } from "./modal-permission-dropdown-75a4787ca1b8.js";
import { n as He, t as Ue } from "./team-settings-link-f7f3b8c7933c.js";
import { n as We, t as Ge } from "./card-tile-a92df345e9ab.js";
import {
  a as Ke,
  i as qe,
  n as Je,
  o as Ye,
  r as Xe,
  t as Ze,
} from "./plugin-listings-pagination-c5fa81805ac1.js";
import { i as Qe, n as $e, o as et, r as tt, s as nt, t as rt } from "./plugin-origin-badge-1e1f880d2dac.js";
import { n as it, t as at } from "./profile-lock-17cb9817089d.js";
import { r as ot, t as st } from "./messages-4cbaa49d7ad9.js";
import { n as ct, t as lt } from "./plugin-marketplace-context-c6ab695904bf.js";
import { n as ut, t as dt } from "./plugin-disabled-reason-9ae34b32db06.js";
import { n as ft, r as pt } from "./plugins-query-0b24cce7d51e.js";
import { n as mt, t as ht } from "./installed-plugin-actions-f3c2b3a965d4.js";
function gt(e) {
  let n = (0, _t.c)(8),
    { phase: r, progressPercent: i, reducedMotion: o } = e,
    c;
  n[0] !== i || n[1] !== o
    ? ((c = (0, vt.jsx)(a, { percent: i, reducedMotion: o, size: 16, transitionDurationMs: 500 })),
      (n[0] = i),
      (n[1] = o),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] === r
    ? (l = n[4])
    : ((l =
        r === `installing`
          ? (0, vt.jsx)(s, {
              id: `plugins.card.installing`,
              defaultMessage: `Installing`,
              description: `Plugin card action while installation is in progress`,
            })
          : (0, vt.jsx)(s, {
              id: `plugins.card.loading`,
              defaultMessage: `Loading`,
              description: `Plugin card action while plugin setup is loading`,
            })),
      (n[3] = r),
      (n[4] = l));
  let u;
  return (
    n[5] !== c || n[6] !== l
      ? ((u = (0, vt.jsxs)(t, {
          className: `disabled:opacity-100`,
          color: `ghost`,
          disabled: !0,
          size: `toolbar`,
          children: [c, l],
        })),
        (n[5] = c),
        (n[6] = l),
        (n[7] = u))
      : (u = n[7]),
    u
  );
}
var _t, vt;
function yt() {
  return (yt = e(() => {
    ((_t = D()), w(), E(), p(), ze(), (vt = O()));
  }))();
}
var bt;
function xt() {
  return (xt = e(() => {
    (Y(),
      Z(),
      m(),
      xe(),
      ce(),
      (bt = x(
        n,
        (e) => {
          let t = new Map(),
            n = null;
          return {
            register(e, r, i) {
              let a = { placement: i, pluginId: r };
              return (
                t.set(e, a),
                n?.observe(e),
                () => {
                  t.get(e) === a && (t.delete(e), n?.unobserve(e));
                }
              );
            },
            observe(e) {
              let r = new Set(),
                i = !0,
                a = new IntersectionObserver(
                  (n) => {
                    if (i)
                      for (let i of n) {
                        let n = t.get(i.target);
                        if (!i.isIntersecting || i.intersectionRatio < 0.5 || n == null) continue;
                        let { placement: o, pluginId: s } = n,
                          l = JSON.stringify(o.kind === `home` ? [o.kind, o.sectionId, s] : [o.kind, s]);
                        (a.unobserve(i.target),
                          !r.has(l) &&
                            (r.add(l),
                            o.kind === `home`
                              ? H(e, F, { pluginId: s, sectionId: o.sectionId, position: c(o.position) })
                              : H(e, I, { pluginId: s, position: c(o.position) })));
                      }
                  },
                  { threshold: 0.5, rootMargin: `0%` },
                );
              n = a;
              for (let e of t.keys()) a.observe(e);
              return () => {
                ((i = !1), a.disconnect(), (n = null));
              };
            },
          };
        },
        { autoDispose: !0 },
      )));
  }))();
}
function St(e) {
  let a = (0, Tt.c)(136),
    { hostId: o, impressionPlacement: c, placementForAnalytics: f, plugin: p, showDeveloper: m } = e,
    h = m !== void 0 && m,
    g = l(n),
    { installPlugin: _ } = ke(),
    v = te(Te),
    y = ee(),
    b = le(),
    x = i(),
    { referrer: S, searchQueryNormalized: w, source: T } = be(),
    ie = p.pluginId ?? p.id,
    ae;
  a[0] !== o || a[1] !== p.remotePluginId || a[2] !== ie
    ? ((ae = { hostId: o, pluginId: ie, remotePluginId: p.remotePluginId }),
      (a[0] = o),
      (a[1] = p.remotePluginId),
      (a[2] = ie),
      (a[3] = ae))
    : (ae = a[3]);
  let E = ue(Et, ae),
    se;
  a[4] !== o || a[5] !== b.search || a[6] !== p
    ? ((se = Pe(p, { hostId: o, browseSearch: b.search })),
      (a[4] = o),
      (a[5] = b.search),
      (a[6] = p),
      (a[7] = se))
    : (se = a[7]);
  let D = se,
    ce = r(D),
    O = p.status === `DISABLED_BY_ADMIN`,
    k;
  a[8] !== y || a[9] !== O || a[10] !== p.disabledReason
    ? ((k = O
        ? (0, Q.jsx)(oe, {
            tooltipContent: (0, Q.jsx)(dt, {
              disabledReason: p.disabledReason,
              children: (0, Q.jsx)(s, {
                id: `plugins.card.disabledInstallTooltip`,
                defaultMessage: `Access is turned off by your admin`,
                description: `Tooltip shown for the admin-disabled plugin install treatment in the plugins grid.`,
              }),
            }),
            children: (0, Q.jsx)(`span`, {
              role: `img`,
              "aria-label": st({
                disabledReason: p.disabledReason,
                fallback: y.formatMessage({
                  id: `plugins.card.disabledInstallTooltip`,
                  defaultMessage: `Access is turned off by your admin`,
                  description: `Tooltip shown for the admin-disabled plugin install treatment in the plugins grid.`,
                }),
                intl: y,
              }),
              className: `flex size-token-button-composer shrink-0 items-center justify-center text-tertiary`,
              children: (0, Q.jsx)(at, { className: `icon-sm` }),
            }),
          })
        : null),
      (a[8] = y),
      (a[9] = O),
      (a[10] = p.disabledReason),
      (a[11] = k))
    : (k = a[11]);
  let A = k,
    j;
  a[12] !== p.connectionAppId ||
  a[13] !== p.displayName ||
  a[14] !== p.id ||
  a[15] !== p.installedPlugin ||
  a[16] !== p.remotePluginId
    ? ((j = p.installedPlugin ?? {
        connectionAppId: p.connectionAppId,
        displayName: p.displayName,
        remoteMarketplaceName: `chatgpt-workspace`,
        remotePluginId: p.remotePluginId ?? p.id,
      }),
      (a[12] = p.connectionAppId),
      (a[13] = p.displayName),
      (a[14] = p.id),
      (a[15] = p.installedPlugin),
      (a[16] = p.remotePluginId),
      (a[17] = j))
    : (j = a[17]);
  let M = j,
    N;
  a[18] !== o || a[19] !== M || a[20] !== g
    ? ((N = () => {
        Ae(g, M, o).catch(Ct);
      }),
      (a[18] = o),
      (a[19] = M),
      (a[20] = g),
      (a[21] = N))
    : (N = a[21]);
  let P = N,
    F;
  a[22] !== D ||
  a[23] !== b.state ||
  a[24] !== x ||
  a[25] !== f ||
  a[26] !== p.displayName ||
  a[27] !== p.id ||
  a[28] !== p.pluginId ||
  a[29] !== p.remotePluginId ||
  a[30] !== S ||
  a[31] !== g ||
  a[32] !== T
    ? ((F = (e) => {
        let t = performance.now();
        (de(g, {
          placement: f,
          pluginId: p.pluginId ?? p.id,
          remotePluginId: p.remotePluginId ?? void 0,
          source: T,
        }),
          ye(
            e,
            () =>
              void x(D, {
                state: {
                  ...b.state,
                  ...fe({ navigationStartedAtMs: t, referrer: S, source: T }, p.displayName),
                },
              }),
          ));
      }),
      (a[22] = D),
      (a[23] = b.state),
      (a[24] = x),
      (a[25] = f),
      (a[26] = p.displayName),
      (a[27] = p.id),
      (a[28] = p.pluginId),
      (a[29] = p.remotePluginId),
      (a[30] = S),
      (a[31] = g),
      (a[32] = T),
      (a[33] = F))
    : (F = a[33]);
  let I = F,
    L;
  if (E != null) {
    let e;
    (a[34] === E
      ? (e = a[35])
      : ((e = (0, Q.jsx)(wt, { activeInstallSession: E })), (a[34] = E), (a[35] = e)),
      (L = e));
  } else if (me(o, p.requiresLocalExecutor)) {
    let e;
    (a[36] !== ce || a[37] !== A || a[38] !== y || a[39] !== I || a[40] !== p.displayName
      ? ((e =
          A ??
          (0, Q.jsx)(oe, {
            tooltipContent: (0, Q.jsx)(s, {
              id: `plugins.card.desktopOnly`,
              defaultMessage: `Desktop only`,
              description: `Tooltip on the laptop icon in the browser plugin directory. Open the plugin details for its desktop action.`,
            }),
            children: (0, Q.jsx)(C, {
              href: ce,
              "aria-label": y.formatMessage(
                {
                  id: `plugins.card.openDesktopOnlyDetails`,
                  defaultMessage: `Open {pluginName} (desktop only)`,
                  description: `Accessible label for the desktop-only icon that opens plugin details in the browser directory.`,
                },
                { pluginName: p.displayName },
              ),
              color: `ghostMuted`,
              size: `toolbar`,
              uniform: !0,
              onClick: (e) => {
                (e.stopPropagation(), I(e));
              },
              onAuxClick: (e) => {
                e.button === 1 && (e.stopPropagation(), I(e));
              },
              children: (0, Q.jsx)(ne, {}),
            }),
          })),
        (a[36] = ce),
        (a[37] = A),
        (a[38] = y),
        (a[39] = I),
        (a[40] = p.displayName),
        (a[41] = e))
      : (e = a[41]),
      (L = e));
  } else if (p.installed && p.installedPlugin != null) {
    let e;
    a[42] !== D || a[43] !== b.state || a[44] !== x || a[45] !== p.displayName || a[46] !== S || a[47] !== T
      ? ((e = () => {
          x(D, {
            state: {
              ...b.state,
              ...fe({ navigationStartedAtMs: performance.now(), referrer: S, source: T }, p.displayName),
            },
          });
        }),
        (a[42] = D),
        (a[43] = b.state),
        (a[44] = x),
        (a[45] = p.displayName),
        (a[46] = S),
        (a[47] = T),
        (a[48] = e))
      : (e = a[48]);
    let t;
    a[49] !== D || a[50] !== o || a[51] !== O || a[52] !== p.installedPlugin || a[53] !== e
      ? ((t = (0, Q.jsx)(ht, {
          manageTo: D,
          hostId: o,
          isDisabledByAdmin: O,
          plugin: p.installedPlugin,
          onManage: e,
        })),
        (a[49] = D),
        (a[50] = o),
        (a[51] = O),
        (a[52] = p.installedPlugin),
        (a[53] = e),
        (a[54] = t))
      : (t = a[54]);
    let n;
    (a[55] !== A || a[56] !== t
      ? ((n = (0, Q.jsxs)(Q.Fragment, { children: [A, t] })), (a[55] = A), (a[56] = t), (a[57] = n))
      : (n = a[57]),
      (L = n));
  } else if (A != null) L = A;
  else if (p.installed === void 0) {
    let e;
    a[58] === y
      ? (e = a[59])
      : ((e = y.formatMessage({
          id: `plugins.card.loading`,
          defaultMessage: `Loading`,
          description: `Plugin card action while plugin setup is loading`,
        })),
        (a[58] = y),
        (a[59] = e));
    let n;
    (a[60] === e
      ? (n = a[61])
      : ((n = (0, Q.jsx)(t, {
          "aria-label": e,
          color: `ghostActive`,
          loading: !0,
          size: `toolbar`,
          uniform: !0,
        })),
        (a[60] = e),
        (a[61] = n)),
      (L = n));
  } else {
    let e;
    a[62] !== y || a[63] !== p.displayName
      ? ((e = y.formatMessage(
          {
            id: `plugins.card.installAriaLabel`,
            defaultMessage: `Install {pluginName}`,
            description: `Accessible label for the icon-only button that installs a plugin from the plugin marketplace. The pluginName placeholder is the plugin's display name.`,
          },
          { pluginName: p.displayName },
        )),
        (a[62] = y),
        (a[63] = p.displayName),
        (a[64] = e))
      : (e = a[64]);
    let n = !v,
      r;
    a[65] !== o || a[66] !== _ || a[67] !== M || a[68] !== g || a[69] !== w || a[70] !== T
      ? ((r = (e) => {
          (e.stopPropagation(),
            _(M, {
              activeProject: ge(g.get(_e)),
              hostId: o,
              marketplaceAnalytics: {
                chatgpt: lt(
                  g,
                  w
                    ? pe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY_SEARCH
                    : pe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                ),
                source: T,
                surface: u.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
              },
              source: T,
            }));
        }),
        (a[65] = o),
        (a[66] = _),
        (a[67] = M),
        (a[68] = g),
        (a[69] = w),
        (a[70] = T),
        (a[71] = r))
      : (r = a[71]);
    let i;
    a[72] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = (0, Q.jsx)(d, {})), (a[72] = i)) : (i = a[72]);
    let s;
    (a[73] !== P || a[74] !== n || a[75] !== r || a[76] !== e
      ? ((s = (0, Q.jsx)(t, {
          "aria-label": e,
          color: `ghostActive`,
          disabled: n,
          size: `toolbar`,
          uniform: !0,
          onClick: r,
          onFocus: P,
          onPointerEnter: P,
          children: i,
        })),
        (a[73] = P),
        (a[74] = n),
        (a[75] = r),
        (a[76] = e),
        (a[77] = s))
      : (s = a[77]),
      (L = s));
  }
  let R;
  a[78] !== p.marketplaceName || a[79] !== p.marketplacePath || a[80] !== p.origin || a[81] !== p.scope
    ? ((R =
        p.origin != null ||
        p.scope === `WORKSPACE` ||
        p.scope === `USER` ||
        p.marketplaceName?.startsWith(`workspace-`) ||
        p.marketplaceName === `created-by-me-remote` ||
        (p.marketplaceName != null && p.marketplacePath != null && !Fe(p.marketplaceName))),
      (a[78] = p.marketplaceName),
      (a[79] = p.marketplacePath),
      (a[80] = p.origin),
      (a[81] = p.scope),
      (a[82] = R))
    : (R = a[82]);
  let z = R,
    he;
  a[83] !== p.developerName || a[84] !== h
    ? ((he = h ? p.developerName?.trim() : null), (a[83] = p.developerName), (a[84] = h), (a[85] = he))
    : (he = a[85]);
  let B = he,
    V;
  a[86] !== c || a[87] !== b.pathname || a[88] !== b.search || a[89] !== p.remotePluginId || a[90] !== g
    ? ((V = (e) => {
        if (e != null && p.remotePluginId != null && c != null)
          return g.get(bt, `${b.pathname}${b.search}`).register(e, p.remotePluginId, c);
      }),
      (a[86] = c),
      (a[87] = b.pathname),
      (a[88] = b.search),
      (a[89] = p.remotePluginId),
      (a[90] = g),
      (a[91] = V))
    : (V = a[91]);
  let H;
  a[92] !== z || a[93] !== o || a[94] !== p
    ? ((H = z ? [(0, Q.jsx)(rt, { hostId: o, plugin: p }, `origin`)] : void 0),
      (a[92] = z),
      (a[93] = o),
      (a[94] = p),
      (a[95] = H))
    : (H = a[95]);
  let ve = O || (p.installed && !p.enabled) ? `opacity-60` : void 0,
    U;
  a[96] !== B || a[97] !== p.creatorName || a[98] !== p.description
    ? ((U =
        p.description == null && !B && p.creatorName == null
          ? void 0
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                B || p.description
                  ? (0, Q.jsx)(`div`, {
                      className: `line-clamp-1`,
                      children:
                        B && p.description
                          ? (0, Q.jsx)(s, {
                              id: `plugins.card.developerAndDescription`,
                              defaultMessage: `{developerName} • {description}`,
                              description: `Subtitle in plugin search results. The developerName is the plugin publisher's name and description is the plugin's short description, separated by a bullet.`,
                              values: { developerName: B, description: p.description },
                            })
                          : B || p.description,
                    })
                  : null,
                p.creatorName == null
                  ? null
                  : (0, Q.jsx)(`div`, {
                      className: `text-xs text-codex-description`,
                      children: (0, Q.jsx)(s, {
                        id: `plugins.card.sharedBy`,
                        defaultMessage: `Shared by {name}`,
                        description: `Footer label for the person who shared a plugin`,
                        values: { name: p.creatorName },
                      }),
                    }),
              ],
            })),
      (a[96] = B),
      (a[97] = p.creatorName),
      (a[98] = p.description),
      (a[99] = U))
    : (U = a[99]);
  let xe = p.displayName,
    Se = p.logoDarkPath,
    Ce = p.logoPath,
    we = p.displayName,
    Ee = p.name,
    De = p.remotePluginId ?? p.id,
    W;
  a[100] === De ? (W = a[101]) : ((W = Me(De)), (a[100] = De), (a[101] = W));
  let Oe;
  a[102] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(re, { className: `icon-md text-secondary` })), (a[102] = Oe))
    : (Oe = a[102]);
  let G;
  a[103] !== p.displayName || a[104] !== p.name || a[105] !== W
    ? ((G = (0, Q.jsx)(Ne, { alt: we, knownAppId: Ee, logoUrl: W, fallback: Oe })),
      (a[103] = p.displayName),
      (a[104] = p.name),
      (a[105] = W),
      (a[106] = G))
    : (G = a[106]);
  let K;
  a[107] !== p.displayName || a[108] !== p.logoDarkPath || a[109] !== p.logoPath || a[110] !== G
    ? ((K = (0, Q.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-default bg-surface`,
        children: (0, Q.jsx)(Ne, {
          alt: xe,
          className: `h-full w-full object-contain`,
          logoDarkUrl: Se,
          logoUrl: Ce,
          fallback: G,
        }),
      })),
      (a[107] = p.displayName),
      (a[108] = p.logoDarkPath),
      (a[109] = p.logoPath),
      (a[110] = G),
      (a[111] = K))
    : (K = a[111]);
  let q;
  a[112] === p.displayName
    ? (q = a[113])
    : ((q = (0, Q.jsx)(`span`, { className: `truncate`, children: p.displayName })),
      (a[112] = p.displayName),
      (a[113] = q));
  let J;
  a[114] !== p.id || a[115] !== p.pluginId || a[116] !== p.remotePluginId
    ? ((J = [p.pluginId, p.remotePluginId, p.id]),
      (a[114] = p.id),
      (a[115] = p.pluginId),
      (a[116] = p.remotePluginId),
      (a[117] = J))
    : (J = a[117]);
  let je = w.length > 0 ? `search` : `directory`,
    Y;
  a[118] !== o || a[119] !== p.displayName || a[120] !== J || a[121] !== je
    ? ((Y = (0, Q.jsx)(tt, { hostId: o, pluginIds: J, pluginName: p.displayName, surface: je })),
      (a[118] = o),
      (a[119] = p.displayName),
      (a[120] = J),
      (a[121] = je),
      (a[122] = Y))
    : (Y = a[122]);
  let X;
  a[123] !== q || a[124] !== Y
    ? ((X = (0, Q.jsxs)(`span`, {
        className: `inline-flex max-w-full flex-wrap items-center gap-2`,
        children: [q, Y],
      })),
      (a[123] = q),
      (a[124] = Y),
      (a[125] = X))
    : (X = a[125]);
  let Z;
  return (
    a[126] !== L ||
    a[127] !== D ||
    a[128] !== I ||
    a[129] !== V ||
    a[130] !== H ||
    a[131] !== ve ||
    a[132] !== U ||
    a[133] !== K ||
    a[134] !== X
      ? ((Z = (0, Q.jsx)(Ge, {
          ref: V,
          actionsPlacement: `center`,
          badges: H,
          className: `group justify-center border-none text-base select-none`,
          contentClassName: ve,
          description: U,
          descriptionClassName: `flex flex-col gap-0.5 text-codex-description`,
          icon: K,
          iconContainer: !1,
          title: X,
          to: D,
          onClick: I,
          actions: L,
        })),
        (a[126] = L),
        (a[127] = D),
        (a[128] = I),
        (a[129] = V),
        (a[130] = H),
        (a[131] = ve),
        (a[132] = U),
        (a[133] = K),
        (a[134] = X),
        (a[135] = Z))
      : (Z = a[135]),
    Z
  );
}
function Ct() {}
function wt(e) {
  let t = (0, Tt.c)(4),
    { activeInstallSession: n } = e,
    r = v(),
    i;
  return (
    t[0] !== n.phase || t[1] !== n.progressPercent || t[2] !== r
      ? ((i = (0, Q.jsx)(gt, { phase: n.phase, progressPercent: n.progressPercent, reducedMotion: r })),
        (t[0] = n.phase),
        (t[1] = n.progressPercent),
        (t[2] = r),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
var Tt, Q, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = D()),
      Z(),
      h(),
      m(),
      ae(),
      w(),
      y(),
      Oe(),
      E(),
      g(),
      S(),
      f(),
      b(),
      it(),
      We(),
      N(),
      ve(),
      mt(),
      yt(),
      J(),
      ut(),
      ot(),
      R(),
      W(),
      ct(),
      he(),
      we(),
      j(),
      ce(),
      je(),
      Qe(),
      xt(),
      q(),
      $e(),
      (Q = O()),
      (Et = T(
        n,
        ({ hostId: e, pluginId: t, remotePluginId: n }, { get: r }) => {
          let i = r(B);
          if (i.kind !== `closed` && i.origin === `plugin_creator`) return null;
          let a = U(i);
          if (a == null || a.hostId !== e) return null;
          let o =
            a.plugin.plugin.remotePluginId ??
            (a.kind === `loadingPlugin` ? null : a.plugin.plugin.shareContext?.remotePluginId);
          return (n == null ? a.plugin.plugin.id !== t : o !== n) ? null : a;
        },
        {
          isEqual: (e, t) =>
            e === t ||
            (e != null && t != null && e.phase === t.phase && e.progressPercent === t.progressPercent),
        },
      )));
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(6),
    { children: n, id: r, title: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, At.jsx)(`div`, { className: `flex min-h-0 flex-1 flex-col`, children: n })),
      (t[0] = n),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== a || t[4] !== i
      ? ((o = (0, At.jsx)(et, { id: r, title: i, showDivider: !1, children: a })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = i),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var kt, At;
function jt() {
  return (jt = e(() => {
    ((kt = D()), nt(), (At = O()));
  }))();
}
function Mt(e) {
  let n = (0, Nt.c)(12),
    { error: r } = e,
    i = ie(),
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { queryKey: z }), (n[0] = a)) : (a = n[0]);
  let c = o(a) > 0,
    l;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Pt.jsx)(s, {
        id: `plugins.page.loadError.title`,
        defaultMessage: `Failed to load plugins`,
        description: `Title shown when plugins could not be loaded`,
      })),
      (n[1] = l))
    : (l = n[1]);
  let u;
  n[2] !== r || n[3] !== i
    ? ((u = () => {
        i.invalidateQueries({
          predicate: (e) => {
            let { queryKey: t, state: n } = e;
            return t[0] === z[0] || n.error === r;
          },
        });
      }),
      (n[2] = r),
      (n[3] = i),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Pt.jsx)(s, {
        id: `plugins.page.loadError.retry`,
        defaultMessage: `Retry`,
        description: `Button in the Plugins Store page error state. Clicking it retries loading the plugin directory after a request fails`,
      })),
      (n[5] = d))
    : (d = n[5]);
  let f;
  n[6] !== c || n[7] !== u
    ? ((f = (0, Pt.jsx)(t, { color: `secondary`, loading: c, onClick: u, children: d })),
      (n[6] = c),
      (n[7] = u),
      (n[8] = f))
    : (f = n[8]);
  let p;
  return (
    n[9] !== r.message || n[10] !== f
      ? ((p = (0, Pt.jsx)(k, { title: l, description: r.message, actions: f })),
        (n[9] = r.message),
        (n[10] = f),
        (n[11] = p))
      : (p = n[11]),
    p
  );
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    ((Nt = D()), _(), se(), w(), E(), G(), we(), (Pt = O()));
  }))();
}
function It(e) {
  let t = (0, Ht.c)(33),
    { hostId: n, searchQuery: r } = e,
    i = r === void 0 ? `` : r,
    a;
  t[0] === n ? (a = t[1]) : ((a = { hostId: n }), (t[0] = n), (t[1] = a));
  let { data: o, error: c, isLoading: l } = ue(Se, a),
    u = o?.roots,
    d;
  t[2] !== n || t[3] !== u ? ((d = { hostId: n, roots: u }), (t[2] = n), (t[3] = u), (t[4] = d)) : (d = t[4]);
  let { data: f, error: p, isLoading: m } = A(d),
    {
      data: h,
      error: g,
      fetchNextPage: ee,
      hasNextPage: _,
      isFetchingNextPage: te,
      isRefetching: ne,
      isLoading: v,
    } = ue(pt, n),
    { value: y } = Ie(`1349514884`),
    b,
    x;
  if (
    t[5] !== m ||
    t[6] !== v ||
    t[7] !== l ||
    t[8] !== _ ||
    t[9] !== n ||
    t[10] !== f ||
    t[11] !== p ||
    t[12] !== y ||
    t[13] !== i ||
    t[14] !== h ||
    t[15] !== g ||
    t[16] !== o ||
    t[17] !== c
  ) {
    x = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let { hiddenPluginIds: e } = M(y),
        r = (o == null ? c : null) ?? p ?? (h == null ? g : null);
      if (r != null) {
        let e;
        (t[20] === r ? (e = t[21]) : ((e = (0, $.jsx)(Mt, { error: r })), (t[20] = r), (t[21] = e)), (x = e));
        break bb0;
      }
      if (l || m || v) {
        let e;
        (t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Xe, {
              loadingLabel: (0, $.jsx)(s, {
                id: `plugins.page.loading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading title on the plugins page`,
              }),
            })),
            (t[22] = e))
          : (e = t[22]),
          (x = e));
        break bb0;
      }
      if (h == null || f == null) {
        x = null;
        break bb0;
      }
      let a = i.trim().toLocaleLowerCase(),
        u = new Map(
          Ce({ hiddenPluginIds: e, installedPlugins: f, localPlugins: [], remotePlugins: h.filter(Rt) })
            .filter(
              (e) =>
                a.length === 0 ||
                e.displayName.toLocaleLowerCase().includes(a) ||
                (e.description?.toLocaleLowerCase().includes(a) ?? !1),
            )
            .map(Lt),
        ),
        d = new Map();
      for (let e of h) {
        let t = u.get(e.id);
        if (t != null)
          for (let n of e.teams ?? []) {
            let e = d.get(n.id);
            e == null ? d.set(n.id, { name: n.name, plugins: new Map([[t.id, t]]) }) : e.plugins.set(t.id, t);
          }
      }
      if (d.size === 0 && !_ && g == null) {
        let e;
        (t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(k, {
              title: (0, $.jsx)(s, {
                id: `skills.appsPage.empty.plugins`,
                defaultMessage: `No plugins found`,
                description: `Empty state title when there are no plugins on the Plugins tab`,
              }),
            })),
            (t[23] = e))
          : (e = t[23]),
          (x = e));
        break bb0;
      }
      b = [...d].map((e) => {
        let [t, r] = e,
          { name: i, plugins: a } = r;
        return (0, $.jsx)(
          Ot,
          {
            id: `team-plugins-${t}`,
            title: (0, $.jsx)(Vt, { name: i, teamId: t }),
            children: (0, $.jsx)(Ke, {
              children: [...a.values()].map((e) => (0, $.jsx)(St, { hostId: n, plugin: e }, e.id)),
            }),
          },
          t,
        );
      });
    }
    ((t[5] = m),
      (t[6] = v),
      (t[7] = l),
      (t[8] = _),
      (t[9] = n),
      (t[10] = f),
      (t[11] = p),
      (t[12] = y),
      (t[13] = i),
      (t[14] = h),
      (t[15] = g),
      (t[16] = o),
      (t[17] = c),
      (t[18] = b),
      (t[19] = x));
  } else ((b = t[18]), (x = t[19]));
  if (x !== Symbol.for(`react.early_return_sentinel`)) return x;
  let S;
  t[24] !== ee || t[25] !== _ || t[26] !== te || t[27] !== ne || t[28] !== g
    ? ((S =
        g == null
          ? (0, $.jsx)(Ze, {
              hasNextPage: _,
              isFetchingNextPage: te,
              isRefetching: ne,
              onLoadNextPage: () => {
                ee({ cancelRefetch: !1 });
              },
            })
          : (0, $.jsx)(Mt, { error: g })),
      (t[24] = ee),
      (t[25] = _),
      (t[26] = te),
      (t[27] = ne),
      (t[28] = g),
      (t[29] = S))
    : (S = t[29]);
  let C;
  return (
    t[30] !== b || t[31] !== S
      ? ((C = (0, $.jsxs)($.Fragment, { children: [b, S] })), (t[30] = b), (t[31] = S), (t[32] = C))
      : (C = t[32]),
    C
  );
}
function Lt(e) {
  return [e.id, e];
}
function Rt(e) {
  return (e.teams?.length ?? 0) > 0;
}
function zt(e) {
  let t = (0, Ht.c)(5),
    { disabled: n, onRemoveAccess: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = [{ value: `reader` }]), (t[0] = i)) : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(s, {
        id: `plugins.detail.shareDialog.teams.unshare`,
        defaultMessage: `Unshare`,
        description: `Menu item for removing a team's access to a plugin without deleting the shared plugin`,
      })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] !== n || t[3] !== r
      ? ((o = (0, $.jsx)(Ve, {
          disabled: n,
          options: i,
          value: `reader`,
          renderLabel: Bt,
          removeLabel: a,
          onRemoveAccess: r,
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function Bt() {
  return (0, $.jsx)(s, {
    id: `plugins.detail.shareDialog.permission.viewer`,
    defaultMessage: `Can view`,
    description: `Viewer permission label in the plugin sharing dialog`,
  });
}
function Vt(e) {
  let t = (0, Ht.c)(15),
    { name: n, teamId: r } = e,
    { accountId: i } = X(),
    { data: a, error: o } = ue(Re, i ?? ``),
    s;
  t[0] !== i || t[1] !== o || t[2] !== r || t[3] !== a
    ? ((s = o == null ? a?.find((e) => e.id === r && e.workspace_id === i) : void 0),
      (t[0] = i),
      (t[1] = o),
      (t[2] = r),
      (t[3] = a),
      (t[4] = s))
    : (s = t[4]);
  let c = s,
    l = c?.avatar,
    u;
  t[5] === l ? (u = t[6]) : ((u = (0, $.jsx)(V, { avatar: l, size: `small` })), (t[5] = l), (t[6] = u));
  let d = c?.name ?? n,
    f;
  t[7] === d
    ? (f = t[8])
    : ((f = (0, $.jsx)(`span`, { className: `min-w-0 break-words`, children: d })), (t[7] = d), (t[8] = f));
  let p;
  t[9] !== f || t[10] !== r
    ? ((p = (0, $.jsx)(Ue, { teamId: r, children: f })), (t[9] = f), (t[10] = r), (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== u || t[13] !== p
      ? ((m = (0, $.jsxs)($.Fragment, { children: [u, p] })), (t[12] = u), (t[13] = p), (t[14] = m))
      : (m = t[14]),
    m
  );
}
var Ht, $;
function Ut() {
  return (Ut = e(() => {
    ((Ht = D()),
      m(),
      w(),
      De(),
      G(),
      P(),
      ft(),
      Dt(),
      q(),
      Ye(),
      Je(),
      jt(),
      qe(),
      Ft(),
      L(),
      je(),
      Be(),
      Ee(),
      K(),
      He(),
      Le(),
      ($ = O()));
  }))();
}
export {
  Ft as a,
  St as c,
  bt as d,
  gt as f,
  Mt as i,
  Dt as l,
  zt as n,
  Ot as o,
  yt as p,
  Ut as r,
  jt as s,
  It as t,
  xt as u,
};
//# sourceMappingURL=team-plugins-2260d2b8aeb9.js.map
