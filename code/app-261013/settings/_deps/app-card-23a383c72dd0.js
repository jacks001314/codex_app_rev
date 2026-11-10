import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  BJ as i,
  CO as a,
  Cot as o,
  D2 as s,
  Fat as c,
  Fs as l,
  IDt as u,
  Iot as d,
  Is as ee,
  Ixt as te,
  Lot as f,
  MO as p,
  Mz as ne,
  Nz as m,
  O2 as h,
  Pat as re,
  Pxt as g,
  TO as ie,
  VDt as ae,
  XD as oe,
  Xot as se,
  YD as ce,
  Yot as _,
  _Mt as le,
  _xt as ue,
  cz as v,
  gMt as y,
  i3 as b,
  ik as x,
  ixt as S,
  jDt as C,
  jO as de,
  r3 as fe,
  rk as pe,
  sz as me,
  t3 as he,
  vzt as w,
  wot as T,
  xMt as E,
  yzt as D,
  zJ as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fur as k,
  Gdr as A,
  Kur as ge,
  M1n as _e,
  Nur as ve,
  QDr as ye,
  Tl as be,
  U1n as xe,
  XDr as j,
  fur as M,
  htn as Se,
  hzt as N,
  idr as P,
  j1n as Ce,
  lur as F,
  mtn as we,
  mzt as Te,
  nT as Ee,
  pur as De,
  q1n as I,
  rT as Oe,
  uur as ke,
} from "./app-initial-5851df3f6cb1.js";
import { r as L, t as Ae } from "./plugin-connected-account-links-8dea8c830000.js";
import { n as R, t as je } from "./card-tile-a92df345e9ab.js";
import { t as Me } from "./plugin-settings-url-shared-a0d1dde5984d.js";
import { t as z } from "./plugin-settings-url-946196948d5f.js";
import { n as B, t as Ne } from "./plugin-settings-row-93f0c993fe10.js";
import { n as V, t as Pe } from "./card-status-indicator-fecb737805f8.js";
var H, Fe;
function U() {
  return (U = e(() => {
    (D(),
      (H = E()),
      (Fe = (e) =>
        (0, H.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, H.jsx)(`path`, {
            d: `M13.3333 4.16663L6.66663 15.8333`,
            stroke: `currentColor`,
            strokeWidth: 1.33,
            strokeLinecap: `round`,
          }),
        })));
  }))();
}
function W(e) {
  let t = (0, K.c)(16),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ children: n, isControlDisabled: r, isExplanationFocusable: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = n;
  if (r && a.tooltipContent != null && a.disabled !== !0) {
    if (i) {
      let e =
          n.props.ariaLabel ??
          n.props[`aria-label`] ??
          (typeof n.props.children == `string` ? n.props.children : void 0),
        r;
      t[7] === n ? (r = t[8]) : ((r = (0, q.cloneElement)(n, { "aria-hidden": !0 })), (t[7] = n), (t[8] = r));
      let i = r,
        a;
      (t[9] !== n.props.checked || t[10] !== i || t[11] !== e
        ? ((a =
            typeof n.props.checked == `boolean`
              ? (0, J.jsx)(`div`, {
                  "aria-checked": n.props.checked,
                  "aria-disabled": `true`,
                  "aria-label": e,
                  role: `switch`,
                  tabIndex: 0,
                  children: i,
                })
              : (0, J.jsx)(`div`, {
                  "aria-disabled": `true`,
                  "aria-label": e,
                  role: `button`,
                  tabIndex: 0,
                  children: i,
                })),
          (t[9] = n.props.checked),
          (t[10] = i),
          (t[11] = e),
          (t[12] = a))
        : (a = t[12]),
        (o = a));
    } else {
      let e;
      (t[5] === n ? (e = t[6]) : ((e = (0, J.jsx)(`div`, { children: n })), (t[5] = n), (t[6] = e)), (o = e));
    }
  }
  let s;
  return (
    t[13] !== a || t[14] !== o
      ? ((s = (0, J.jsx)(me, { ...a, cloneCustomTrigger: !0, children: o })),
        (t[13] = a),
        (t[14] = o),
        (t[15] = s))
      : (s = t[15]),
    s
  );
}
function Ie(e) {
  let t = (0, K.c)(7),
    { restriction: n, surface: r } = e,
    i = n.origin?.name;
  if (i?.type === `project`) {
    if (r === `dialog`) {
      let e;
      return (
        t[0] === n.keyPath
          ? (e = t[1])
          : ((e = (0, J.jsx)(u, {
              id: `skills.appsPage.appDisablement.projectSettingsDialog`,
              defaultMessage: `Set {keyPath} to true in this project’s config.toml to enable this app`,
              description: `App-details tooltip explaining that the app is disabled by project configuration; {keyPath} is the exact project configuration setting that must be changed`,
              values: { keyPath: n.keyPath },
            })),
            (t[0] = n.keyPath),
            (t[1] = e)),
        e
      );
    }
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(u, {
            id: `skills.appsPage.appDisablement.projectSettingsCard`,
            defaultMessage: `Disabled by project settings. Update this project’s config.toml to enable this app`,
            description: `App-card tooltip explaining that project configuration disables the app and must be updated to enable it`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (i?.type === `legacyManagedConfigTomlFromMdm`) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(u, {
            id: `skills.appsPage.appDisablement.legacyDeviceManagement`,
            defaultMessage: `Disabled by device management`,
            description: `App-control tooltip explaining that non-overridable device management disables the app`,
          })),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (i?.type === `legacyManagedConfigTomlFromFile`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(u, {
            id: `skills.appsPage.appDisablement.administratorPolicy`,
            defaultMessage: `Disabled by your administrator`,
            description: `App-control tooltip explaining that a non-overridable administrator-managed policy disables the app`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (i?.type === `sessionFlags`) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsx)(u, {
            id: `skills.appsPage.appDisablement.sessionSettings`,
            defaultMessage: `Disabled by session configuration`,
            description: `App-control tooltip identifying non-overridable session configuration as the reason the app is disabled`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let a;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, J.jsx)(u, {
          id: `skills.appsPage.appDisablement.otherConfiguration`,
          defaultMessage: `Disabled by configuration`,
          description: `App-control tooltip explaining that configuration disables the app when its specific source is unavailable`,
        })),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
function G(e) {
  let t = (0, K.c)(21),
    { appId: n, isAppDisabledWithoutRestriction: r, tool: i } = e;
  if (i.disabledReason === `disabled_by_admin`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, J.jsxs)(`div`, {
            className: `mt-1 flex items-center gap-1 text-xs text-secondary`,
            children: [
              (0, J.jsx)(ne, { className: `shrink-0`, "aria-hidden": !1, asset: ee }),
              (0, J.jsx)(u, { ...Y.disabledByAdminTool }),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let a = i.configRestriction;
  if (a == null || r) {
    let e;
    return (
      t[1] !== r || t[2] !== i.isEnabled
        ? ((e =
            i.isEnabled === !1 || r
              ? (0, J.jsx)(`div`, {
                  className: `mt-1 text-xs text-secondary`,
                  children: (0, J.jsx)(u, { ...Y.unavailableTool }),
                })
              : null),
          (t[1] = r),
          (t[2] = i.isEnabled),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let o = a.origin?.name,
    s = o?.type ?? `unknown`,
    c;
  t[4] === s
    ? (c = t[5])
    : ((c = (0, J.jsx)(u, { ...Y.configuredDisablementToolSource, values: { source: s } })),
      (t[4] = s),
      (t[5] = c));
  let l = c,
    d = a.keyPath;
  n != null && (d = a.kind === `app` ? `apps.${n}.enabled` : `apps.${n}.tools.${i.name}.enabled`);
  let te;
  t[6] !== a.keyPath || t[7] !== a.kind
    ? ((te = { keyPath: a.keyPath, kind: a.kind }), (t[6] = a.keyPath), (t[7] = a.kind), (t[8] = te))
    : (te = t[8]);
  let f = te,
    p;
  if (a.isUserEditable && o != null) {
    let e;
    (t[9] !== d || t[10] !== f
      ? ((e = (0, J.jsx)(u, {
          ...Y.configuredDisablementToolRecoveryUserConfig,
          values: { ...f, keyPath: d },
        })),
        (t[9] = d),
        (t[10] = f),
        (t[11] = e))
      : (e = t[11]),
      (p = e));
  } else if (o?.type === `project`) {
    let e;
    (t[12] === f
      ? (e = t[13])
      : ((e = (0, J.jsx)(u, { ...Y.configuredDisablementToolRecoveryProjectConfig, values: f })),
        (t[12] = f),
        (t[13] = e)),
      (p = e));
  } else {
    let e;
    return (
      t[14] === l
        ? (e = t[15])
        : ((e = (0, J.jsx)(`div`, { className: `mt-1 text-xs text-secondary`, children: l })),
          (t[14] = l),
          (t[15] = e)),
      e
    );
  }
  let m;
  t[16] === l
    ? (m = t[17])
    : ((m = (0, J.jsx)(`button`, {
        type: `button`,
        className: `mt-1 block text-start text-xs text-secondary`,
        children: l,
      })),
      (t[16] = l),
      (t[17] = m));
  let h;
  return (
    t[18] !== p || t[19] !== m
      ? ((h = (0, J.jsx)(me, { delayDuration: 0, tooltipContent: p, children: m })),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h))
      : (h = t[20]),
    h
  );
}
var K, q, J, Y;
function Le() {
  return (Le = e(() => {
    ((K = w()),
      l(),
      (q = D()),
      C(),
      m(),
      v(),
      (J = E()),
      (Y = n({
        disabledByAdminTool: {
          id: `skills.appsPage.toolsDialog.disabledByAdminTool`,
          defaultMessage: `Disabled by admin`,
          description: `Muted label shown on an app tool row when the tool is disabled by a workspace admin`,
        },
        configuredDisablementToolSource: {
          id: `skills.appsPage.toolsDialog.configuredDisablementToolSource`,
          defaultMessage: `{source, select,
      project {Disabled by project settings}
      user {Disabled by your settings}
      enterpriseManaged {Disabled by your organization}
      mdm {Disabled by device management}
      system {Disabled by system configuration}
      sessionFlags {Disabled by session configuration}
      legacyManagedConfigTomlFromFile {Disabled by your administrator}
      legacyManagedConfigTomlFromMdm {Disabled by device management}
      other {Disabled by configuration}
    }`,
          description: `Complete app-action restriction label identifying its directly observed configuration source without implying that the user can change it`,
        },
        configuredDisablementToolRecoveryUserConfig: {
          id: `skills.appsPage.toolsDialog.configuredDisablementToolRecoveryUserConfig`,
          defaultMessage: `Set {keyPath} to true in your user config.toml to enable this {kind, select, app {app} other {tool}}`,
          description: `Tooltip explaining that the user can enable a restricted app or tool by updating the specified setting in their user configuration file. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`,
        },
        configuredDisablementToolRecoveryProjectConfig: {
          id: `skills.appsPage.toolsDialog.configuredDisablementToolRecoveryProjectConfig`,
          defaultMessage: `Set {keyPath} to true in this project’s config.toml to enable this {kind, select, app {app} other {tool}}`,
          description: `Tooltip explaining that a project-restricted app or tool can be enabled by updating the specified setting in the current project’s configuration file. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`,
        },
        unavailableTool: {
          id: `skills.appsPage.toolsDialog.unavailableTool`,
          defaultMessage: `Unavailable`,
          description: `Muted label for a visible app action disabled without an identifiable configuration or workspace-admin restriction`,
        },
      })));
  }))();
}
function Re(e) {
  let n = (0, ze.c)(76),
    {
      app: r,
      children: c,
      canReconnect: l,
      disabled: d,
      hideAppConnectionDropdown: ee,
      requiresReauth: p,
      remotePluginId: ne,
      onInstallApp: m,
      onDisconnectApp: h,
      onOpenPluginSettingsUrl: g,
    } = e,
    ae = te(o),
    oe = Oe(),
    { accountId: _, authMethod: le, isLoading: ue, userId: v } = De(),
    y = le === `chatgpt` || le === `chatgptAuthTokens`,
    b;
  n[0] === r.id ? (b = n[1]) : ((b = ge(r.id)), (n[0] = r.id), (n[1] = b));
  let x = !!_ && !!v && r.isAccessible && (ee || h != null || g != null),
    C;
  n[2] !== b || n[3] !== x
    ? ((C = { ...b, enabled: x, retry: !1, staleTime: re.FIVE_MINUTES }), (n[2] = b), (n[3] = x), (n[4] = C))
    : (C = n[4]);
  let { data: de, isError: pe, isFetching: me, refetch: he } = se(C),
    w = (ue || y) && (de == null || pe),
    T;
  n[5] !== r.id || n[6] !== de || n[7] !== w
    ? ((T = !w && A(r.id, de)), (n[5] = r.id), (n[6] = de), (n[7] = w), (n[8] = T))
    : (T = n[8]);
  let E = T,
    D;
  n[9] !== _ || n[10] !== v
    ? ((D = ve({ accountId: _, userId: v })), (n[9] = _), (n[10] = v), (n[11] = D))
    : (D = n[11]);
  let O = D,
    k = h != null && r.isAccessible && !E && !!_ && !!v,
    xe;
  n[12] !== O || n[13] !== k
    ? ((xe = { ...O, staleTime: O.staleTime, enabled: k }), (n[12] = O), (n[13] = k), (n[14] = xe))
    : (xe = n[14]);
  let { data: j, isError: M, isFetching: Se, refetch: N } = se(xe),
    P;
  n[15] !== r.id || n[16] !== j
    ? ((P = j != null && Ae(j, r.id).length > 1), (n[15] = r.id), (n[16] = j), (n[17] = P))
    : (P = n[17]);
  let F = ue || w || me || (!E && (P || (y && (j == null || M || Se)))),
    we;
  n[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((we = { enabled: !1 }), (n[18] = we)) : (we = n[18]);
  let { isError: Te, isFetching: Ee, refetch: I } = ke(we),
    L = (!_ || !v) && Te,
    R;
  n[19] !== r.id || n[20] !== r.installUrl || n[21] !== ne
    ? ((R = Me({ appId: r.id, installUrl: r.installUrl, remotePluginId: ne })),
      (n[19] = r.id),
      (n[20] = r.installUrl),
      (n[21] = ne),
      (n[22] = R))
    : (R = n[22]);
  let je = R,
    z;
  n[23] !== r || n[24] !== F || n[25] !== oe || n[26] !== O || n[27] !== h || n[28] !== ae || n[29] !== y
    ? ((z = {
        mutationFn: async () => {
          if (!F) {
            if ((ye(ae, Ce, { name: _e.CHATGPT_APP_CLICK_TARGET_DISCONNECT, connectorId: r.id }), y))
              try {
                let e = await ae.queryClient.fetchQuery({ ...O, staleTime: 0 });
                if (Ae(e, r.id).length > 1) return;
              } catch {
                return;
              }
            oe() && (await h?.(r));
          }
        },
      }),
      (n[23] = r),
      (n[24] = F),
      (n[25] = oe),
      (n[26] = O),
      (n[27] = h),
      (n[28] = ae),
      (n[29] = y),
      (n[30] = z))
    : (z = n[30]);
  let { isPending: B, mutate: Ne } = f(z);
  if (ee && (w || E)) return null;
  if (c != null) return c;
  let V;
  if (B) {
    let e;
    (n[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(u, {
          id: `skills.appsPage.apps.disconnecting`,
          defaultMessage: `Disconnecting…`,
          description: `Connection-menu button label while disconnecting an app and refreshing its connection state. The button is disabled until the operation finishes.`,
        })),
        (n[31] = e))
      : (e = n[31]),
      (V = e));
  } else if (p) {
    let e;
    (n[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(u, {
          id: `plugins.detail.app.reauthRequired`,
          defaultMessage: `Reconnect required`,
          description: `Short connection-menu button label for an included app on the plugin details page. The user's account is still connected, but its authorization has expired; opening the menu lets them reconnect.`,
        })),
        (n[32] = e))
      : (e = n[32]),
      (V = e));
  } else {
    let e;
    (n[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(`span`, { className: `size-1.5 shrink-0 rounded-full bg-chart-green` }),
            (0, X.jsx)(u, {
              id: `skills.appsPage.apps.connected`,
              defaultMessage: `Connected`,
              description: `Button label shown for an app that is connected`,
            }),
          ],
        })),
        (n[33] = e))
      : (e = n[33]),
      (V = e));
  }
  let Pe = d || B,
    H = d && !B,
    Fe = B || void 0,
    U;
  n[34] === B
    ? (U = n[35])
    : ((U = B && (0, X.jsx)(fe, { className: `icon-xxs` })), (n[34] = B), (n[35] = U));
  let W;
  n[36] === V
    ? (W = n[37])
    : ((W = (0, X.jsx)(`span`, { className: `flex items-center gap-1.5`, children: V })),
      (n[36] = V),
      (n[37] = W));
  let Ie;
  n[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, X.jsx)(ce, { className: `icon-2xs shrink-0 text-codex-description` })), (n[38] = Ie))
    : (Ie = n[38]);
  let G;
  n[39] !== H || n[40] !== Fe || n[41] !== U || n[42] !== W
    ? ((G = (0, X.jsxs)(t, {
        className: `gap-1.5 text-sm`,
        color: `outline`,
        size: `toolbar`,
        disabled: H,
        "aria-busy": Fe,
        children: [U, W, Ie],
      })),
      (n[39] = H),
      (n[40] = Fe),
      (n[41] = U),
      (n[42] = W),
      (n[43] = G))
    : (G = n[43]);
  let K;
  n[44] !== _ ||
  n[45] !== L ||
  n[46] !== Ee ||
  n[47] !== pe ||
  n[48] !== me ||
  n[49] !== M ||
  n[50] !== Se ||
  n[51] !== E ||
  n[52] !== h ||
  n[53] !== I ||
  n[54] !== he ||
  n[55] !== N ||
  n[56] !== v ||
  n[57] !== y
    ? ((K =
        y && (L || pe || (!E && h != null && M))
          ? (0, X.jsx)(ie.Item, {
              leftIconAsset: s,
              disabled: Ee || me || Se,
              onSelect: (e) => {
                (e.preventDefault(), !_ || !v ? I() : Promise.all([he(), !E && h != null ? N() : void 0]));
              },
              children: (0, X.jsx)(u, {
                id: `skills.appsPage.apps.retryConnectionOptions`,
                defaultMessage: `Retry loading connection options`,
                description: `Menu action to retry loading account identity, connector capabilities, or connected accounts after a failed request. Disconnect remains unavailable until the required data is loaded.`,
              }),
            })
          : null),
      (n[44] = _),
      (n[45] = L),
      (n[46] = Ee),
      (n[47] = pe),
      (n[48] = me),
      (n[49] = M),
      (n[50] = Se),
      (n[51] = E),
      (n[52] = h),
      (n[53] = I),
      (n[54] = he),
      (n[55] = N),
      (n[56] = v),
      (n[57] = y),
      (n[58] = K))
    : (K = n[58]);
  let q;
  n[59] !== r || n[60] !== l || n[61] !== m
    ? ((q = l
        ? (0, X.jsx)(ie.Item, {
            leftIconAsset: s,
            onSelect: () => {
              m(r);
            },
            children: (0, X.jsx)(u, {
              id: `skills.appsPage.apps.reconnect`,
              defaultMessage: `Reconnect`,
              description: `Menu item label for reconnecting an app`,
            }),
          })
        : null),
      (n[59] = r),
      (n[60] = l),
      (n[61] = m),
      (n[62] = q))
    : (q = n[62]);
  let J;
  n[63] !== Ne || n[64] !== F || n[65] !== E || n[66] !== h || n[67] !== g || n[68] !== je
    ? ((J =
        h == null
          ? null
          : (0, X.jsx)(ie.Item, {
              leftIconAsset: i,
              disabled: F,
              tone: `danger`,
              asChild: E,
              href: E ? je : void 0,
              onSelect: E ? void 0 : () => Ne(),
              children: E
                ? (0, X.jsx)(S, {
                    to: je,
                    onClick: (e) => be(e, () => g?.(je)),
                    children: (0, X.jsx)(u, {
                      id: `skills.appsPage.apps.disconnect`,
                      defaultMessage: `Disconnect`,
                      description: `Menu item label for disconnecting an app, or opening its account settings when it supports multiple accounts`,
                    }),
                  })
                : (0, X.jsx)(u, {
                    id: `skills.appsPage.apps.disconnect`,
                    defaultMessage: `Disconnect`,
                    description: `Menu item label for disconnecting an app, or opening its account settings when it supports multiple accounts`,
                  }),
            })),
      (n[63] = Ne),
      (n[64] = F),
      (n[65] = E),
      (n[66] = h),
      (n[67] = g),
      (n[68] = je),
      (n[69] = J))
    : (J = n[69]);
  let Y;
  return (
    n[70] !== Pe || n[71] !== G || n[72] !== K || n[73] !== q || n[74] !== J
      ? ((Y = (0, X.jsxs)(a, {
          align: `end`,
          contentWidth: `xs`,
          disabled: Pe,
          triggerButton: G,
          children: [K, q, J],
        })),
        (n[70] = Pe),
        (n[71] = G),
        (n[72] = K),
        (n[73] = q),
        (n[74] = J),
        (n[75] = Y))
      : (Y = n[75]),
    Y
  );
}
var ze, X;
function Be() {
  return (Be = e(() => {
    ((ze = w()),
      I(),
      h(),
      O(),
      d(),
      _(),
      g(),
      C(),
      ue(),
      P(),
      k(),
      M(),
      F(),
      he(),
      r(),
      b(),
      oe(),
      L(),
      z(),
      j(),
      T(),
      c(),
      Ee(),
      (X = E()));
  }))();
}
function Ve(e) {
  let n = (0, qe.c)(101),
    {
      app: r,
      appRestriction: i,
      cardIcon: a,
      cardIconContainer: s,
      cardIconContainerVariant: c,
      cardIconPlacement: l,
      cardDescriptionPlacement: d,
      badges: ee,
      blockedStatusLabel: f,
      connectButtonImpressionSurface: p,
      connectionAction: ne,
      disabledTooltip: m,
      className: h,
      canReconnect: re,
      hideAppConnectionDropdown: g,
      installBlockedReason: ie,
      installedStateAction: oe,
      installActionDisabled: se,
      installActionType: ce,
      installActionLabel: _,
      isConfigPending: le,
      isConnectionUnavailable: ue,
      requiresReauth: v,
      manageAction: b,
      remotePluginId: x,
      presentation: S,
      isConnectingApp: C,
      showInstallAction: he,
      updatingAppId: w,
      onInstallApp: T,
      onOpenAppTools: E,
      onDisconnectApp: D,
      onOpenPluginSettingsUrl: O,
      onSetAppEnabled: k,
    } = e,
    A = i === void 0 ? null : i,
    ge = s === void 0 || s,
    ve = re === void 0 || re,
    be = g !== void 0 && g,
    j = ie === void 0 ? null : ie,
    M = oe === void 0 ? `check` : oe,
    Se = se !== void 0 && se,
    N = ce === void 0 ? `connect` : ce,
    P = le !== void 0 && le,
    F = ue !== void 0 && ue,
    Ee = v !== void 0 && v,
    De = b === void 0 ? `button` : b,
    I = he === void 0 || he,
    Oe = te(o),
    ke = (0, Je.useRef)(null),
    L = ae(),
    Ae;
  n[0] !== r || n[1] !== a
    ? ((Ae =
        a ??
        (0, Z.jsx)(Te, {
          alt: r.name,
          appInfo: r,
          className: `icon-md`,
          fallback: (0, Z.jsx)(we, { className: `icon-sm text-secondary` }),
        })),
      (n[0] = r),
      (n[1] = a),
      (n[2] = Ae))
    : (Ae = n[2]);
  let R = Ae,
    Me;
  n[3] !== _ || n[4] !== L
    ? ((Me = _ ?? L.formatMessage(Q.connectApp)), (n[3] = _), (n[4] = L), (n[5] = Me))
    : (Me = n[5]);
  let z = Me,
    B = r.isEnabled && A == null,
    V = r.appMetadata?.firstPartyRequiresInstall === !1,
    H = A?.isUserEditable === !1,
    U = j === `disabled-by-admin` && !r.isAccessible,
    G = w === r.id,
    K = G || H || P,
    q = U || F || Se || H || P || G || (A != null && k == null),
    J = C || G || P || F,
    Y = !V && be && De === `menu` && B,
    Le;
  n[6] !== r ||
  n[7] !== ve ||
  n[8] !== J ||
  n[9] !== D ||
  n[10] !== T ||
  n[11] !== O ||
  n[12] !== x ||
  n[13] !== Ee ||
  n[14] !== Y
    ? ((Le = {
        app: r,
        canReconnect: ve,
        disabled: J,
        hideAppConnectionDropdown: Y,
        requiresReauth: Ee,
        remotePluginId: x,
        onInstallApp: T,
        onDisconnectApp: D,
        onOpenPluginSettingsUrl: O,
      }),
      (n[6] = r),
      (n[7] = ve),
      (n[8] = J),
      (n[9] = D),
      (n[10] = T),
      (n[11] = O),
      (n[12] = x),
      (n[13] = Ee),
      (n[14] = Y),
      (n[15] = Le))
    : (Le = n[15]);
  let ze = Le,
    X = null;
  if (F) {
    let e;
    (n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(u, {
          id: `plugins.detail.app.unavailable`,
          defaultMessage: `This app is unavailable`,
          description: `Tooltip on a disabled app connection button in plugin details when the server says the app cannot be used or connected. This is a short neutral explanation for the signed-in user.`,
        })),
        (n[16] = e))
      : (e = n[16]),
      (X = e));
  } else if (P) {
    let e;
    (n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(u, { ...Q.loadingProjectSettings })), (n[17] = e))
      : (e = n[17]),
      (X = e));
  } else if (A?.isUserEditable === !1) {
    let e;
    (n[18] === A
      ? (e = n[19])
      : ((e = (0, Z.jsx)(Ie, { restriction: A, surface: `card` })), (n[18] = A), (n[19] = e)),
      (X = e));
  } else if (A == null && r.isAccessible && !r.isEnabled) {
    let e;
    (n[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(u, { ...Q.unattributedDisablement })), (n[20] = e))
      : (e = n[20]),
      (X = e));
  }
  let Be;
  n[21] !== r ||
  n[22] !== X ||
  n[23] !== A ||
  n[24] !== f ||
  n[25] !== z ||
  n[26] !== p ||
  n[27] !== ne ||
  n[28] !== ze ||
  n[29] !== N ||
  n[30] !== M ||
  n[31] !== L ||
  n[32] !== P ||
  n[33] !== H ||
  n[34] !== C ||
  n[35] !== B ||
  n[36] !== V ||
  n[37] !== q ||
  n[38] !== U ||
  n[39] !== K ||
  n[40] !== G ||
  n[41] !== De ||
  n[42] !== T ||
  n[43] !== k ||
  n[44] !== x ||
  n[45] !== Oe ||
  n[46] !== I
    ? ((Be =
        (r.isAccessible && !B ? void 0 : ne) ??
        (U && f != null
          ? (0, Z.jsx)(`span`, {
              className: `flex h-7 w-7 shrink-0 items-center justify-center text-secondary`,
              children: f,
            })
          : r.isAccessible && M === `toggle`
            ? (0, Z.jsx)(`div`, {
                className: `flex items-center gap-2`,
                children:
                  De === `menu` && !V
                    ? (0, Z.jsx)(`div`, {
                        role: `presentation`,
                        onClick: Ke,
                        onKeyDown: Ge,
                        children: B
                          ? (0, Z.jsx)(Re, { ...ze })
                          : (0, Z.jsx)(W, {
                              disabled: !K,
                              isControlDisabled: K,
                              isExplanationFocusable: X != null,
                              tooltipContent: X,
                              children: (0, Z.jsx)(t, {
                                "aria-label": z,
                                className: `shrink-0`,
                                color: `outline`,
                                size: `toolbar`,
                                disabled: H || P,
                                loading: G,
                                onClick: () => {
                                  k?.({ appId: r.id, enabled: !0 });
                                },
                                children: z,
                              }),
                            }),
                      })
                    : (0, Z.jsx)(W, {
                        "data-state": B ? `checked` : `unchecked`,
                        isControlDisabled: K,
                        isExplanationFocusable: X != null,
                        tooltipContent:
                          X ??
                          (B
                            ? (0, Z.jsx)(u, { ...Q.disableToggleTooltip })
                            : (0, Z.jsx)(u, { ...Q.enableToggleTooltip })),
                        onClick: We,
                        onKeyDown: Ue,
                        children: (0, Z.jsx)(de, {
                          checked: B,
                          disabled: K,
                          onChange: (e) => {
                            k?.({ appId: r.id, enabled: e });
                          },
                          ariaLabel: L.formatMessage(Q.enableToggleAria),
                        }),
                      }),
              })
            : !I || (V && !r.isAccessible)
              ? null
              : (0, Z.jsx)(Re, {
                  ...ze,
                  children: r.isAccessible
                    ? (0, Z.jsx)(Pe, {
                        ariaLabel: L.formatMessage(B ? Q.enabledStatus : Q.disabledStatus),
                        icon: B
                          ? (0, Z.jsx)(pe, { className: `icon-sm` })
                          : (0, Z.jsx)(Fe, { className: `icon-sm` }),
                      })
                    : (0, Z.jsx)(W, {
                        disabled: !U && !C && (X == null || !q),
                        isControlDisabled: q,
                        isExplanationFocusable: X != null,
                        tooltipContent: U
                          ? (0, Z.jsx)(u, {
                              id: `plugins.install.disabledByAdmin`,
                              defaultMessage: `Disabled by admin`,
                              description: `Tooltip shown when plugin install is unavailable because all included connectors are disabled by admin`,
                            })
                          : C
                            ? (0, Z.jsx)(u, { ...Q.connectingApp })
                            : (X ?? z),
                        children: (0, Z.jsx)(t, {
                          ref: (e) => {
                            if (e == null || x == null || p == null || q || C) return;
                            let t = `${x}:${r.id}`;
                            ke.current !== t &&
                              ((ke.current = t), ye(Oe, xe, { pluginId: x, connectorId: r.id, surface: p }));
                          },
                          className: `shrink-0`,
                          color: `outline`,
                          size: `toolbar`,
                          disabled: q,
                          "aria-label": C ? L.formatMessage(Q.connectingApp) : z,
                          onClick: (e) => {
                            if ((e.stopPropagation(), !q)) {
                              if (
                                (N === `connect` &&
                                  ye(Oe, Ce, {
                                    name: _e.CHATGPT_APP_CLICK_TARGET_CONNECT,
                                    connectorId: r.id,
                                  }),
                                A == null)
                              ) {
                                T(r);
                                return;
                              }
                              k?.({ appId: r.id, enabled: !0 }).then(() => T(r), He);
                            }
                          },
                          children: C ? (0, Z.jsx)(fe, { className: `icon-xxs` }) : z,
                        }),
                      }),
                }))),
      (n[21] = r),
      (n[22] = X),
      (n[23] = A),
      (n[24] = f),
      (n[25] = z),
      (n[26] = p),
      (n[27] = ne),
      (n[28] = ze),
      (n[29] = N),
      (n[30] = M),
      (n[31] = L),
      (n[32] = P),
      (n[33] = H),
      (n[34] = C),
      (n[35] = B),
      (n[36] = V),
      (n[37] = q),
      (n[38] = U),
      (n[39] = K),
      (n[40] = G),
      (n[41] = De),
      (n[42] = T),
      (n[43] = k),
      (n[44] = x),
      (n[45] = Oe),
      (n[46] = I),
      (n[47] = Be))
    : (Be = n[47]);
  let Ve = Be;
  if (S === `settings`) {
    let e;
    n[48] === r.description
      ? (e = n[49])
      : ((e = r.description ?? (0, Z.jsx)(u, { ...Q.noDescription })), (n[48] = r.description), (n[49] = e));
    let t;
    n[50] === e
      ? (t = n[51])
      : ((t = (0, Z.jsx)(`div`, { className: `line-clamp-1`, children: e })), (n[50] = e), (n[51] = t));
    let i = m != null || E == null,
      a;
    n[52] !== r || n[53] !== E ? ((a = () => E?.(r)), (n[52] = r), (n[53] = E), (n[54] = a)) : (a = n[54]);
    let o;
    n[55] !== Ve ||
    n[56] !== r.id ||
    n[57] !== r.logoUrl ||
    n[58] !== r.logoUrlDark ||
    n[59] !== r.name ||
    n[60] !== t ||
    n[61] !== i ||
    n[62] !== a
      ? ((o = (0, Z.jsx)(Ne, {
          label: r.name,
          description: t,
          logoUrl: r.logoUrl,
          logoDarkUrl: r.logoUrlDark,
          knownAppId: r.id,
          actions: Ve,
          disabled: i,
          onClick: a,
        })),
        (n[55] = Ve),
        (n[56] = r.id),
        (n[57] = r.logoUrl),
        (n[58] = r.logoUrlDark),
        (n[59] = r.name),
        (n[60] = t),
        (n[61] = i),
        (n[62] = a),
        (n[63] = o))
      : (o = n[63]);
    let s;
    return (
      n[64] !== m || n[65] !== o
        ? ((s = (0, Z.jsx)(me, { tooltipContent: m, children: o })), (n[64] = m), (n[65] = o), (n[66] = s))
        : (s = n[66]),
      s
    );
  }
  if (m != null) {
    let e;
    n[67] === r.description
      ? (e = n[68])
      : ((e = r.description ?? (0, Z.jsx)(u, { ...Q.noDescription })), (n[67] = r.description), (n[68] = e));
    let t;
    return (
      n[69] !== r.name ||
      n[70] !== f ||
      n[71] !== d ||
      n[72] !== ge ||
      n[73] !== c ||
      n[74] !== l ||
      n[75] !== h ||
      n[76] !== m ||
      n[77] !== R ||
      n[78] !== S ||
      n[79] !== e
        ? ((t = (0, Z.jsx)(je, {
            className: h,
            contentClassName: `opacity-60`,
            disabled: !0,
            icon: R,
            iconContainer: ge,
            iconContainerVariant: c,
            iconPlacement: l,
            title: r.name,
            description: e,
            descriptionClassName: `line-clamp-1`,
            descriptionPlacement: d,
            presentation: S,
            actions: f,
            actionsPlacement: `center`,
            tooltip: m,
          })),
          (n[69] = r.name),
          (n[70] = f),
          (n[71] = d),
          (n[72] = ge),
          (n[73] = c),
          (n[74] = l),
          (n[75] = h),
          (n[76] = m),
          (n[77] = R),
          (n[78] = S),
          (n[79] = e),
          (n[80] = t))
        : (t = n[80]),
      t
    );
  }
  let $;
  n[81] === h ? ($ = n[82]) : (($ = y(`group justify-center border-none`, h)), (n[81] = h), (n[82] = $));
  let Ye;
  n[83] === r.description
    ? (Ye = n[84])
    : ((Ye = r.description ?? (0, Z.jsx)(u, { ...Q.noDescription })), (n[83] = r.description), (n[84] = Ye));
  let Xe;
  n[85] !== r || n[86] !== E
    ? ((Xe =
        E == null
          ? void 0
          : () => {
              E(r);
            }),
      (n[85] = r),
      (n[86] = E),
      (n[87] = Xe))
    : (Xe = n[87]);
  let Ze;
  return (
    n[88] !== Ve ||
    n[89] !== r.name ||
    n[90] !== ee ||
    n[91] !== d ||
    n[92] !== ge ||
    n[93] !== c ||
    n[94] !== l ||
    n[95] !== R ||
    n[96] !== S ||
    n[97] !== $ ||
    n[98] !== Ye ||
    n[99] !== Xe
      ? ((Ze = (0, Z.jsx)(je, {
          className: $,
          actionsPlacement: `center`,
          iconContainer: ge,
          iconContainerVariant: c,
          iconPlacement: l,
          icon: R,
          title: r.name,
          badges: ee,
          description: Ye,
          descriptionClassName: `line-clamp-1`,
          descriptionPlacement: d,
          presentation: S,
          onClick: Xe,
          actions: Ve,
        })),
        (n[88] = Ve),
        (n[89] = r.name),
        (n[90] = ee),
        (n[91] = d),
        (n[92] = ge),
        (n[93] = c),
        (n[94] = l),
        (n[95] = R),
        (n[96] = S),
        (n[97] = $),
        (n[98] = Ye),
        (n[99] = Xe),
        (n[100] = Ze))
      : (Ze = n[100]),
    Ze
  );
}
function He() {}
function Ue(e) {
  e.stopPropagation();
}
function We(e) {
  e.stopPropagation();
}
function Ge(e) {
  e.stopPropagation();
}
function Ke(e) {
  e.stopPropagation();
}
var qe, Je, Z, Q;
function $() {
  return ($ = e(() => {
    ((qe = w()),
      I(),
      le(),
      g(),
      (Je = D()),
      C(),
      N(),
      he(),
      b(),
      p(),
      v(),
      x(),
      Se(),
      U(),
      R(),
      j(),
      T(),
      B(),
      V(),
      Le(),
      Be(),
      (Z = E()),
      (Q = n({
        noDescription: {
          id: `skills.appsPage.apps.noDescription`,
          defaultMessage: `No description`,
          description: `Fallback description for apps without description text on the Skills & Apps page`,
        },
        disableToggleTooltip: {
          id: `skills.appsPage.apps.disableToggle`,
          defaultMessage: `Disable app`,
          description: `Tooltip label for disabling an app from the Skills & Apps page`,
        },
        enableToggleTooltip: {
          id: `skills.appsPage.apps.enableToggleTooltip`,
          defaultMessage: `Enable app`,
          description: `Tooltip label for enabling an app from the Skills & Apps page`,
        },
        unattributedDisablement: {
          id: `skills.appsPage.apps.unattributedDisablement`,
          defaultMessage: `This app is disabled`,
          description: `Neutral explanation when the server disables an app without exposing the responsible configuration or actor`,
        },
        loadingProjectSettings: {
          id: `skills.appsPage.apps.loadingProjectSettings`,
          defaultMessage: `Loading project settings…`,
          description: `Tooltip shown while the active app configuration is loading`,
        },
        enableToggleAria: {
          id: `skills.appsPage.apps.enableToggle`,
          defaultMessage: `Enable app`,
          description: `Accessible label for toggling whether an installed app is enabled from the Skills & Apps page`,
        },
        connectingApp: {
          id: `skills.appsPage.apps.connecting`,
          defaultMessage: `Continue connecting app`,
          description: `Accessible label for the button shown while an app OAuth flow is still finishing on the Skills & Apps page`,
        },
        connectApp: {
          id: `skills.appsPage.apps.connect`,
          defaultMessage: `Connect`,
          description: `Button label to connect an app from the Skills & Apps page`,
        },
        enabledStatus: {
          id: `skills.appsPage.apps.enabledStatus`,
          defaultMessage: `App enabled`,
          description: `Status label for an installed app that is enabled`,
        },
        disabledStatus: {
          id: `skills.appsPage.apps.disabledStatus`,
          defaultMessage: `App disabled`,
          description: `Status label for an installed app that is disabled`,
        },
      })));
  }))();
}
export { G as a, W as i, $ as n, Le as o, Ie as r, Ve as t };
//# sourceMappingURL=app-card-23a383c72dd0.js.map
