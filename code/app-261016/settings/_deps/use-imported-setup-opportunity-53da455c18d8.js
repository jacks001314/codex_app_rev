const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./external-agent-import-setup-09937385a03c.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./use-external-agent-import-setup-actions-376a9d108aea.js",
      "./use-app-connect-flow-7fc070fa8fd7.js",
      "./app-connect-queries-f7767476a146.js",
      "./availability-e0ac6f935d38.js",
      "./microsoft-oauth-bundle-ca8e0d4a5995.js",
      "./hooks-settings-route-8191acda142e.js",
      "./hooks-settings-model-f200bbc1bcb6.js",
      "./first-app-connect-ambient-suggestions-5d83a2ddd888.js",
      "./requests-ddc63fb269df.js",
      "./new-chat-page-suggestions-eligibility-9196b189e944.js",
      "./app-card-f4f0407668d0.js",
      "./card-tile-50cbf58d3a76.js",
      "./plugin-connected-account-links-e850d089d83d.js",
      "./plugin-settings-url-shared-636b299186d8.js",
      "./plugin-settings-url-a388503d206b.js",
      "./plugin-settings-row-765cb31c18b5.js",
      "./card-status-indicator-62fc1f58b302.js",
      "./setup-226726f00b3c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ebt as t,
  FBt as n,
  HM as r,
  JOt as i,
  OFt as a,
  PBt as o,
  XOt as s,
  ZSt as c,
  Zst as l,
  aL as u,
  cI as d,
  fN as f,
  ibt as p,
  kFt as m,
  mN as h,
  nCt as g,
  sI as _,
  sct as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as y,
  Cxt as ee,
  D5n as b,
  Gxt as te,
  Jbr as x,
  Jfr as S,
  Kxt as ne,
  O5n as C,
  Sxt as re,
  Zbr as ie,
  Zxt as ae,
  dSt as oe,
  fSt as se,
  nSt as ce,
  rSt as le,
  tSt as ue,
  tpr as de,
} from "./app-initial-ad16eaadf81f.js";
import { a as fe, o as pe, s as me } from "./onboarding-mail-provider-a8dcd0c12760.js";
import { a as w, f as T, n as E, p as D } from "./sidebar-onboarding-checklist-task-config-e8a3ac49ae4c.js";
import { n as he, r as O, t as ge } from "./setup-226726f00b3c.js";
function _e({
  items: e,
  locale: t,
  mailProvider: n,
  plan: r = null,
  representativeRole: i = null,
  taskDefinitions: a,
}) {
  let o = [],
    s = pe(n, r);
  for (let n of e) {
    let { id: e } = n;
    if (e === `create_project`) {
      o.push({ ...H, message: n.snapshot?.type === `sidebar_project` ? n.snapshot.label : H.message });
      continue;
    }
    if (e === `claude_import`) {
      o.push({ ...U, message: n.snapshot?.type === `sidebar_claude_import` ? n.snapshot.label : U.message });
      continue;
    }
    if (e === `enable_notifications`) {
      o.push({ ...V, message: n.snapshot?.type === `sidebar_notification` ? n.snapshot.label : V.message });
      continue;
    }
    let r = a[e === `review_latest_plans` ? T(i) : e],
      c = e === `review_latest_plans` || n.snapshot?.type !== `sidebar` ? null : n.snapshot,
      l,
      u,
      d,
      f = !1,
      p;
    if (c != null)
      ((u = c.instructions),
        (l = c.label),
        (d = c.pluginSlots),
        (f = c.prependPluginMentions === !0),
        (p = c.prompt));
    else {
      if (r == null) continue;
      ((l = E(r, `label`, t)),
        (u = r.origin === `remote` ? r.instructions : void 0),
        (d = r.pluginSlots),
        (f = r.origin === `checked_in` && r.prependPluginMentions === !0),
        (p = E(r, `prompt`, t)));
    }
    let m = {
      action: `start_prompt`,
      id: e,
      instructions: u,
      isAutoSubmitEnabled: r?.origin === `remote` ? r.is_auto_submit_enabled : void 0,
      message: l,
      pluginSlots: d,
      prependPluginMentions: f,
      prompt: p,
    };
    if (d == null) {
      o.push(m);
      continue;
    }
    let h = {},
      g = [];
    for (let [e, t] of Object.entries(d)) {
      let n = I(fe(t, s));
      ((h[e] = L(n)), g.push(n));
    }
    o.push({ ...m, pluginMentions: g, promptValues: h });
  }
  return o;
}
function k({ additionalPluginNames: e, items: n, remotePluginIdsByName: r }) {
  let i = new Map();
  for (let e of n)
    if (e.action === `start_prompt`)
      for (let n of e.pluginMentions ?? []) {
        let e = t(n.pluginId),
          a = e == null ? n.pluginId : n.pluginId.slice(0, -e.length - 1),
          o = r?.[n.pluginId] ?? r?.[a];
        o != null && i.set(n.pluginId, o);
      }
  if (e != null)
    for (let t of e) {
      let e = r?.[t];
      e != null && i.set(`${t}@${p}`, e);
    }
  return i;
}
function A({ disabledRemotePluginIds: e, enabled: t, items: n, remotePluginIds: r }) {
  return t
    ? n.filter(
        (t) =>
          t.action !== `start_prompt` ||
          !t.pluginMentions?.some(({ pluginId: t }) => {
            let n = r.get(t);
            return n != null && e.has(n);
          }),
      )
    : n;
}
function j(e, t) {
  if (e.action === `create_project`) return { type: `sidebar_project`, label: M(e, t) };
  if (e.action === `import_claude`) return { type: `sidebar_claude_import`, label: M(e, t) };
  if (e.action === `enable_notifications`) return { type: `sidebar_notification`, label: M(e, t) };
  let n =
    e.pluginSlots == null ? void 0 : Object.fromEntries(Object.keys(e.pluginSlots).map((e) => [e, `{${e}}`]));
  return {
    type: `sidebar`,
    instructions: e.instructions,
    label: M(e, t),
    pluginSlots: e.pluginSlots,
    prependPluginMentions: e.prependPluginMentions === !0 || void 0,
    prompt: R(e, t, n),
  };
}
function M(e, t) {
  return typeof e.message == `string` ? e.message : t.formatMessage(e.message);
}
function N(e, t) {
  let n = R(e, t, e.promptValues);
  return e.prependPluginMentions !== !0 || e.pluginMentions == null
    ? n
    : `${e.pluginMentions.map(L).join(` `)} ${n}`;
}
function P(e) {
  return e.instructions == null ? void 0 : z(e.instructions, e.promptValues);
}
function F(e) {
  if (e.action !== `start_prompt` || e.pluginMentions?.length !== 1) return null;
  let [n] = e.pluginMentions,
    r = t(n.pluginId);
  return r == null ? n.pluginId : n.pluginId.slice(0, -r.length - 1);
}
function I(e) {
  let n = t(e),
    r = n == null ? e : e.slice(0, -n.length - 1);
  return { label: `@${B[r] ?? _(r)}`, pluginId: n == null ? `${e}@${p}` : e };
}
function L(e) {
  return h(e.label, u(e.pluginId));
}
function R(e, t, n) {
  return typeof e.prompt == `string` ? z(e.prompt, n) : t.formatMessage(e.prompt, n);
}
function z(e, t) {
  let n = e;
  for (let [e, r] of Object.entries(t ?? {})) n = n.replaceAll(`{${e}}`, r);
  return n;
}
var B, V, H, U;
function W() {
  return (W = e(() => {
    (v(),
      d(),
      s(),
      r(),
      f(),
      me(),
      D(),
      w(),
      (B = { "chatgpt-for-finance": `ChatGPT Financial Services` }),
      (V = {
        id: `enable_notifications`,
        action: `enable_notifications`,
        message: i({
          id: `sidebarOnboardingChecklist.enableNotifications`,
          defaultMessage: `Enable notifications`,
          description: `Onboarding checklist item in the sidebar`,
        }),
      }),
      (H = {
        id: `create_project`,
        action: `create_project`,
        message: i({
          id: `sidebarOnboardingChecklist.createProject`,
          defaultMessage: `Create a project`,
          description: `Onboarding checklist item for creating a project`,
        }),
      }),
      (U = {
        id: `claude_import`,
        action: `import_claude`,
        message: i({
          id: `sidebarOnboardingChecklist.importFromClaude`,
          defaultMessage: `Import from Claude`,
          description: `Claude import item in the sidebar onboarding checklist`,
        }),
      }));
  }))();
}
function G(e, { hostId: t, initialTab: n, onEvent: r, restoreFocusFallback: i }) {
  if (e.get(oe) === !0 || C(e, q)) return;
  let a = document.activeElement,
    o = a instanceof HTMLElement && a !== document.body && a !== document.documentElement ? a : null;
  y(e, q, {
    hostId: t,
    initialTab: n,
    onEvent: r,
    restoreFocus: () => {
      if (o?.isConnected) {
        o.focus();
        return;
      }
      i?.();
    },
  });
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = n()),
      b(),
      se(),
      m(),
      (q = (0, K.lazy)(async () => ({
        default: (
          await a(
            async () => {
              let { ExternalAgentImportSetupModal: e } = await import(
                `./external-agent-import-setup-09937385a03c.js`
              );
              return { ExternalAgentImportSetupModal: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            ]),
            import.meta.url,
          )
        ).ExternalAgentImportSetupModal,
      }))));
  }))();
}
function Y(e) {
  let t = (0, Se.c)(36),
    { enabled: n, foregroundImport: r, hostId: i } = e,
    a;
  t[0] === n ? (a = t[1]) : ((a = { enabled: n }), (t[0] = n), (t[1] = a));
  let { data: o, error: s, isFetching: c, refetch: l } = g(te, i, a),
    u =
      r == null
        ? (o ?? [])
        : (o ?? []).filter(
            (e) =>
              Number(e.completedAtMs) >= r.startedAtMs &&
              (e.providerId == null || r.providerIds.some((t) => t === e.providerId)),
          ),
    d =
      r != null &&
      u.some(
        (e) =>
          (e.providerId === `claude-code` ||
            (e.providerId == null && r.providerIds.length === 1 && r.providerIds[0] === `claude-code`)) &&
          e.successes.some(be),
      ),
    { data: f } = g(ne, i, { enabled: n && d }),
    p = d && (f?.length ?? 0) > 0,
    m;
  t[2] !== n || t[3] !== r?.providerIds || t[4] !== i
    ? ((m = n && r?.providerIds.includes(`claude-cowork`) === !0 && i === `local`),
      (t[2] = n),
      (t[3] = r?.providerIds),
      (t[4] = i),
      (t[5] = m))
    : (m = t[5]);
  let h = m,
    _;
  t[6] === h ? (_ = t[7]) : ((_ = { enabled: h }), (t[6] = h), (t[7] = _));
  let { data: v, error: y, isFetching: ee } = g(re, i, _),
    b =
      h && r != null
        ? (v?.connectors ?? []).filter(
            (e) =>
              e.source === `remoteMcpServersConfig` &&
              `importedAtMs` in e &&
              typeof e.importedAtMs == `number` &&
              e.importedAtMs >= r.startedAtMs,
          )
        : [],
    x =
      p ||
      u.some((e) =>
        e.successes.some(
          (t) =>
            t.itemType === `MCP_SERVER_CONFIG` ||
            t.itemType === `PLUGINS` ||
            (t.itemType === `SESSIONS` &&
              (e.providerId === `claude-cowork` || e.providerId == null) &&
              b.length > 0),
        ),
      ),
    S = n && (r == null || x),
    C = g(he, i, { enabled: S }),
    oe = S && C.status === `ready` && C.data.kind === `plugin-directory`,
    {
      availablePlugins: se,
      errorMessage: le,
      isFetching: fe,
      isLoading: pe,
      refetch: me,
    } = de(i, void 0, { enabled: oe }),
    w = ge({
      inputsResult: C,
      pluginDirectory: { errorMessage: le, isLoading: pe, plugins: se, refetch: me },
    }),
    T =
      w.status === `ready` &&
      r != null &&
      ((oe && fe) || (S && C.status === `ready` && C.data.kind === `targeted-plugins` && C.data.isFetching))
        ? `loading`
        : w.status,
    E = ce(u),
    { data: D, error: O, isFetching: _e, refetch: k } = g(ie, i, { enabled: n && E }),
    A = w.data,
    j = {
      appsRequiringConnection: A?.appsRequiringConnection ?? [],
      importedPlugins: A?.importedPlugins ?? [],
    },
    { appsRequiringConnection: M, importedPlugins: N } =
      r == null
        ? j
        : xe({
            ...j,
            allowUnknownProviderNames: r.providerIds.some(ye),
            connectors: [...b, ...(d ? (f ?? []) : [])],
            histories: u,
          }),
    P = (r == null || x) && (M.length > 0 || N.length > 0),
    F = ae({ histories: u, mcpServerStatuses: D?.data ?? [] }),
    I;
  t[8] === r?.providerIds
    ? (I = t[9])
    : ((I = (e) =>
        e.providerId == null
          ? r?.providerIds.includes(`claude-cowork`) !== !0
          : e.providerId !== `claude-cowork`),
      (t[8] = r?.providerIds),
      (t[9] = I));
  let L = u.filter(I),
    R = xe({
      allowUnknownProviderNames: !1,
      appsRequiringConnection: M,
      connectors: d ? (f ?? []) : [],
      histories: L,
      importedPlugins: N,
    }),
    z = ae({ histories: L, mcpServerStatuses: D?.data ?? [] }).length > 0,
    B = p || L.some(ve),
    V =
      (T === `ready` && (R.appsRequiringConnection.length > 0 || R.importedPlugins.length > 0)) ||
      z ||
      (B && w.status === `error`),
    H = h && (ee || (v == null && y == null)),
    U = i === `local` && v == null && y == null,
    W;
  t[10] === u ? (W = t[11]) : ((W = ue(u)), (t[10] = u), (t[11] = W));
  let G = W,
    K = `ready`;
  E && D == null && (K = O == null ? `loading` : `error`);
  let q =
      n &&
      ((o == null && s == null) ||
        (r != null && c) ||
        (H && !V) ||
        (S && T === `loading` && !(r != null && U && C.status === `loading` && z)) ||
        (E && !(r != null && P) && ((r != null && _e) || (D == null && O == null)))),
    J = null;
  q ||
    (P ? (J = `apps`) : F.length > 0 ? (J = `mcps`) : r != null && x && w.status === `error` && (J = `apps`));
  let Y;
  t[12] === w
    ? (Y = t[13])
    : ((Y = () => {
        w.status === `error` && w.retry();
      }),
      (t[12] = w),
      (t[13] = Y));
  let X;
  t[14] === l
    ? (X = t[15])
    : ((X = () => {
        l();
      }),
      (t[14] = l),
      (t[15] = X));
  let Z;
  t[16] === k
    ? (Z = t[17])
    : ((Z = () => {
        k();
      }),
      (t[16] = k),
      (t[17] = Z));
  let Ce = S ? T : `ready`,
    we = s == null ? `ready` : `error`,
    Q;
  t[18] !== K || t[19] !== we || t[20] !== Ce
    ? ((Q = { apps: Ce, hooks: we, mcps: K }), (t[18] = K), (t[19] = we), (t[20] = Ce), (t[21] = Q))
    : (Q = t[21]);
  let $;
  return (
    t[22] !== M ||
    t[23] !== x ||
    t[24] !== G ||
    t[25] !== E ||
    t[26] !== u ||
    t[27] !== N ||
    t[28] !== J ||
    t[29] !== q ||
    t[30] !== F ||
    t[31] !== Q ||
    t[32] !== Y ||
    t[33] !== X ||
    t[34] !== Z
      ? (($ = {
          appsRequiringConnection: M,
          hasImportedConnectorSetup: x,
          hasImportedHooks: G,
          hasImportedMcpServers: E,
          histories: u,
          importedPlugins: N,
          initialTab: J,
          isLoading: q,
          mcpServerNamesRequiringAuthentication: F,
          retryImportedApps: Y,
          retryImportHistories: X,
          retryMcpServerStatuses: Z,
          tabStatus: Q,
        }),
        (t[22] = M),
        (t[23] = x),
        (t[24] = G),
        (t[25] = E),
        (t[26] = u),
        (t[27] = N),
        (t[28] = J),
        (t[29] = q),
        (t[30] = F),
        (t[31] = Q),
        (t[32] = Y),
        (t[33] = X),
        (t[34] = Z),
        (t[35] = $))
      : ($ = t[35]),
    $
  );
}
function ve(e) {
  return e.successes.some(X);
}
function X(e) {
  return e.itemType === `MCP_SERVER_CONFIG` || e.itemType === `PLUGINS`;
}
function ye(e) {
  return e !== `claude-cowork`;
}
function be(e) {
  return e.itemType === `SESSIONS`;
}
function xe({
  allowUnknownProviderNames: e,
  appsRequiringConnection: t,
  connectors: n,
  histories: r,
  importedPlugins: i,
}) {
  let a = (e) =>
      e
        .trim()
        .toLowerCase()
        .replaceAll(/[^a-z0-9]+/g, ``),
    o = new Set(
      r
        .filter((t) => t.providerId !== `claude-cowork` && (e || t.providerId != null))
        .flatMap((e) =>
          e.successes.flatMap((e) =>
            e.itemType === `MCP_SERVER_CONFIG` || e.itemType === `PLUGINS`
              ? [e.source, e.target, e.title].flatMap((e) =>
                  e == null ? [] : [a(e), a(e.split(`@`)[0] ?? e)],
                )
              : [],
          ),
        ),
    );
  for (let { codexAppId: e, name: t } of n) (o.add(a(t)), e != null && o.add(a(e)));
  let s = (...e) => e.some((e) => e != null && o.has(a(e)));
  return {
    appsRequiringConnection: t.filter((e) => s(e.id, e.name, ...e.pluginDisplayNames)),
    importedPlugins: i.filter(({ app: e, plugin: t }) =>
      s(
        e.id,
        e.name,
        ...e.pluginDisplayNames,
        t.plugin.id,
        t.plugin.name,
        t.plugin.interface?.displayName,
        t.displayName,
      ),
    ),
  };
}
var Se;
function Z() {
  return (Z = e(() => {
    ((Se = o()), c(), S(), x(), l(), le(), ee(), O());
  }))();
}
export {
  j as a,
  F as c,
  k as d,
  N as f,
  G as i,
  M as l,
  Y as n,
  A as o,
  W as p,
  J as r,
  P as s,
  Z as t,
  _e as u,
};
//# sourceMappingURL=use-imported-setup-opportunity-53da455c18d8.js.map
