const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./external-agent-import-setup-daab19578164.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./use-external-agent-import-setup-actions-aa854eb5201e.js",
      "./use-app-connect-flow-7088479fda99.js",
      "./app-connect-queries-d683cc7b9c3b.js",
      "./availability-7c47246e0e1c.js",
      "./microsoft-oauth-bundle-e77977413c17.js",
      "./hooks-settings-route-8191acda142e.js",
      "./hooks-settings-model-f200bbc1bcb6.js",
      "./first-app-connect-ambient-suggestions-97c2f684e2f1.js",
      "./new-chat-page-suggestions-eligibility-15ea6f3b5a27.js",
      "./app-card-23a383c72dd0.js",
      "./plugin-connected-account-links-8dea8c830000.js",
      "./card-tile-a92df345e9ab.js",
      "./plugin-settings-url-shared-a0d1dde5984d.js",
      "./plugin-settings-url-946196948d5f.js",
      "./plugin-settings-row-93f0c993fe10.js",
      "./card-status-indicator-fecb737805f8.js",
      "./setup-e77998d0081a.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $j as t,
  CM as n,
  Hvt as r,
  Pxt as i,
  TM as a,
  fPt as o,
  gI as s,
  jDt as c,
  kDt as l,
  oot as u,
  pPt as d,
  rst as f,
  uyt as p,
  vF as m,
  vzt as h,
  yF as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  $bt as y,
  G4n as ee,
  Ggr as b,
  Hbt as te,
  J4n as x,
  Jgr as ne,
  K4n as S,
  Mbt as re,
  Nbt as ie,
  Qbt as C,
  Rbt as ae,
  Ubt as oe,
  Wbt as se,
  alr as ce,
  cbt as le,
  flr as ue,
  lbt as de,
} from "./app-initial-5851df3f6cb1.js";
import { a as fe, i as pe, o as me } from "./onboarding-mail-provider-c6c346963bf3.js";
import { a as w, f as T, n as E, p as D } from "./sidebar-onboarding-checklist-task-config-6a24dc34075c.js";
import { n as he, r as O, t as ge } from "./setup-e77998d0081a.js";
function _e({
  items: e,
  locale: t,
  mailProvider: n,
  plan: r = null,
  representativeRole: i = null,
  taskDefinitions: a,
}) {
  let o = [],
    s = fe(n, r);
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
      let n = I(pe(t, s));
      ((h[e] = L(n)), g.push(n));
    }
    o.push({ ...m, pluginMentions: g, promptValues: h });
  }
  return o;
}
function k({ additionalPluginNames: e, items: t, remotePluginIdsByName: n }) {
  let i = new Map();
  for (let e of t)
    if (e.action === `start_prompt`)
      for (let t of e.pluginMentions ?? []) {
        let e = p(t.pluginId),
          r = e == null ? t.pluginId : t.pluginId.slice(0, -e.length - 1),
          a = n?.[t.pluginId] ?? n?.[r];
        a != null && i.set(t.pluginId, a);
      }
  if (e != null)
    for (let t of e) {
      let e = n?.[t];
      e != null && i.set(`${t}@${r}`, e);
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
  let [t] = e.pluginMentions,
    n = p(t.pluginId);
  return n == null ? t.pluginId : t.pluginId.slice(0, -n.length - 1);
}
function I(e) {
  let t = p(e),
    n = t == null ? e : e.slice(0, -t.length - 1);
  return { label: `@${B[n] ?? m(n)}`, pluginId: t == null ? `${e}@${r}` : e };
}
function L(e) {
  return a(e.label, s(e.pluginId));
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
    (f(),
      g(),
      c(),
      t(),
      n(),
      me(),
      D(),
      w(),
      (B = { "chatgpt-for-finance": `ChatGPT Financial Services` }),
      (V = {
        id: `enable_notifications`,
        action: `enable_notifications`,
        message: l({
          id: `sidebarOnboardingChecklist.enableNotifications`,
          defaultMessage: `Enable notifications`,
          description: `Onboarding checklist item in the sidebar`,
        }),
      }),
      (H = {
        id: `create_project`,
        action: `create_project`,
        message: l({
          id: `sidebarOnboardingChecklist.createProject`,
          defaultMessage: `Create a project`,
          description: `Onboarding checklist item for creating a project`,
        }),
      }),
      (U = {
        id: `claude_import`,
        action: `import_claude`,
        message: l({
          id: `sidebarOnboardingChecklist.importFromClaude`,
          defaultMessage: `Import from Claude`,
          description: `Claude import item in the sidebar onboarding checklist`,
        }),
      }));
  }))();
}
function G(e, { hostId: t, initialTab: n, onEvent: r, restoreFocusFallback: i }) {
  if (e.get(C) === !0 || S(e, q)) return;
  let a = document.activeElement,
    o = a instanceof HTMLElement && a !== document.body && a !== document.documentElement ? a : null;
  x(e, q, {
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
    ((K = _()),
      ee(),
      y(),
      d(),
      (q = (0, K.lazy)(async () => ({
        default: (
          await o(
            async () => {
              let { ExternalAgentImportSetupModal: e } = await import(
                `./external-agent-import-setup-daab19578164.js`
              );
              return { ExternalAgentImportSetupModal: e };
            },
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
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
  let { data: o, error: s, isFetching: c, refetch: l } = v(re, i, a),
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
    { data: f } = v(ie, i, { enabled: n && d }),
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
    g;
  t[6] === h ? (g = t[7]) : ((g = { enabled: h }), (t[6] = h), (t[7] = g));
  let { data: _, error: y, isFetching: ee } = v(le, i, g),
    b =
      h && r != null
        ? (_?.connectors ?? []).filter(
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
    C = v(he, i, { enabled: S }),
    se = S && C.status === `ready` && C.data.kind === `plugin-directory`,
    {
      availablePlugins: ce,
      errorMessage: de,
      isFetching: fe,
      isLoading: pe,
      refetch: me,
    } = ue(i, void 0, { enabled: se }),
    w = ge({
      inputsResult: C,
      pluginDirectory: { errorMessage: de, isLoading: pe, plugins: ce, refetch: me },
    }),
    T =
      w.status === `ready` &&
      r != null &&
      ((se && fe) || (S && C.status === `ready` && C.data.kind === `targeted-plugins` && C.data.isFetching))
        ? `loading`
        : w.status,
    E = oe(u),
    { data: D, error: O, isFetching: _e, refetch: k } = v(ne, i, { enabled: n && E }),
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
    H = h && (ee || (_ == null && y == null)),
    U = i === `local` && _ == null && y == null,
    W;
  t[10] === u ? (W = t[11]) : ((W = te(u)), (t[10] = u), (t[11] = W));
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
    ((Se = h()), i(), ce(), b(), u(), se(), de(), O());
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
//# sourceMappingURL=use-imported-setup-opportunity-1f7fb108e1a6.js.map
