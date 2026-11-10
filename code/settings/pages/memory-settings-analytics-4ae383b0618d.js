import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  B3t as n,
  B6t as r,
  C0 as i,
  D3t as a,
  DJt as o,
  DS as s,
  DXt as c,
  Di as l,
  Dmn as u,
  Dqt as d,
  Drn as f,
  E0 as p,
  EJt as m,
  F3t as h,
  G3t as g,
  M6t as ee,
  Ml as te,
  N3t as _,
  N6t as ne,
  O3t as v,
  OJt as y,
  OS as re,
  OXt as ie,
  Oi as ae,
  Omn as b,
  Rqt as x,
  U3t as oe,
  a3t as S,
  bqt as C,
  brn as se,
  d3t as w,
  d9t as ce,
  hmn as le,
  hz as ue,
  i3t as T,
  jXt as de,
  jl as fe,
  kXt as pe,
  kmn as E,
  krn as me,
  mz as D,
  o3t as O,
  qwt as he,
  r3t as k,
  rTt as ge,
  rrn as _e,
  s3t as A,
} from "./app-initial-f094ef01c64d.js";
import { a as ve, t as j } from "./computer-history-query-5e050ffaae9e.js";
function ye(e) {
  let n = (0, M.c)(17),
    r = t(S),
    o = a(),
    { data: s } = _(x, e),
    c = y(),
    l;
  n[0] === e ? (l = n[1]) : ((l = [...C, e]), (n[0] = e), (n[1] = l));
  let u = l,
    d;
  n[2] !== e || n[3] !== r || n[4] !== s?.configWriteTarget?.filePath
    ? ((d = (t) =>
        k(r, e).sendRequest(`config/batchWrite`, {
          edits: t.edits.map(be),
          filePath: s?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = e),
      (n[3] = r),
      (n[4] = s?.configWriteTarget?.filePath),
      (n[5] = d))
    : (d = n[5]);
  let f, p;
  n[6] !== o || n[7] !== u
    ? ((f = async (e) => {
        await o.cancelQueries({ queryKey: u });
        let t = o.getQueryData(u);
        return (
          o.setQueryData(u, (t) =>
            t == null
              ? t
              : { ...t, response: { ...t.response, config: i(t.response.config, e.edits) } },
          ),
          { previousUserConfig: t }
        );
      }),
      (p = (e, t, n) => {
        (b.error(`Failed to update memory config`, { safe: {}, sensitive: { error: e } }),
          o.setQueryData(u, n?.previousUserConfig));
      }),
      (n[6] = o),
      (n[7] = u),
      (n[8] = f),
      (n[9] = p))
    : ((f = n[8]), (p = n[9]));
  let m;
  n[10] === c
    ? (m = n[11])
    : ((m = async () => {
        await Promise.all([c(C), c([`user-saved-config`])]);
      }),
      (n[10] = c),
      (n[11] = m));
  let h;
  return (
    n[12] !== d || n[13] !== f || n[14] !== p || n[15] !== m
      ? ((h = { mutationFn: d, onMutate: f, onError: p, onSettled: m }),
        (n[12] = d),
        (n[13] = f),
        (n[14] = p),
        (n[15] = m),
        (n[16] = h))
      : (h = n[16]),
    w(h)
  );
}
function be(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var M,
  xe = e(() => {
    ((M = E()), A(), v(), T(), d(), m(), O(), u(), p());
  });
function Se() {
  let e = (0, P.c)(17),
    n = t(S),
    r = a(),
    i = h(he),
    { data: o } = _(x, i),
    s = y(),
    c;
  e[0] === i ? (c = e[1]) : ((c = [...C, i]), (e[0] = i), (e[1] = c));
  let l = c,
    u;
  e[2] !== i || e[3] !== n || e[4] !== o?.configWriteTarget?.filePath
    ? ((u = (e) => {
        let { enabled: t } = e;
        return k(n, i).sendRequest(`config/batchWrite`, {
          edits: [{ keyPath: F, value: t, mergeStrategy: `upsert` }],
          filePath: o?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = i),
      (e[3] = n),
      (e[4] = o?.configWriteTarget?.filePath),
      (e[5] = u))
    : (u = e[5]);
  let d, f;
  e[6] !== r || e[7] !== l
    ? ((d = async (e) => {
        let { enabled: t } = e;
        await r.cancelQueries({ queryKey: l });
        let n = r.getQueryData(l);
        return (
          r.setQueryData(l, (e) =>
            e == null ? e : { ...e, response: { ...e.response, config: N(e.response.config, t) } },
          ),
          { previousUserConfig: n }
        );
      }),
      (f = (e, t, n) => {
        (b.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          r.setQueryData(l, n?.previousUserConfig));
      }),
      (e[6] = r),
      (e[7] = l),
      (e[8] = d),
      (e[9] = f))
    : ((d = e[8]), (f = e[9]));
  let p;
  e[10] === s
    ? (p = e[11])
    : ((p = async () => {
        await Promise.all([s(C), s([`user-saved-config`])]);
      }),
      (e[10] = s),
      (e[11] = p));
  let m;
  return (
    e[12] !== u || e[13] !== d || e[14] !== f || e[15] !== p
      ? ((m = { mutationFn: u, onMutate: d, onError: f, onSettled: p }),
        (e[12] = u),
        (e[13] = d),
        (e[14] = f),
        (e[15] = p),
        (e[16] = m))
      : (m = e[16]),
    w(m)
  );
}
function N(e, t) {
  return Object.assign(structuredClone(e), { features: { ...Ce(e.features, l, t) } });
}
function Ce(e, t, n) {
  let r = I.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var P,
  F,
  I,
  L = e(() => {
    ((P = E()),
      A(),
      v(),
      r(),
      _e(),
      T(),
      ge(),
      d(),
      m(),
      O(),
      u(),
      ae(),
      (F = ce(l)),
      (I = f(me(), se())));
  });
function we(e) {
  let t = (0, R.c)(5),
    { children: n, openTarget: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (e) => ne({ event: e, href: B, initiator: `open_in_browser_bridge`, openTarget: r })),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, z.jsx)(`a`, { className: `text-info`, href: B, onClick: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var R,
  z,
  B,
  Te = e(() => {
    ((R = E()),
      ee(),
      (z = le()),
      (B = `https://learn.chatgpt.com/docs/customization/computer-history`));
  }),
  V,
  H,
  U,
  Ee = e(() => {
    (ve(),
      (V = [`chronicle-state`]),
      (H = [`chronicle-settings`]),
      (U = [`chronicle-applications`]));
  });
function De(e) {
  return {
    defaultApplicationBehavior: e.observation.defaultApplicationBehavior,
    applicationBundleIdentifiers: W(e, `app`, e.observation.defaultApplicationBehavior),
    defaultURLBehavior: e.observation.defaultURLBehavior,
    urlDomains: W(e, `url`, e.observation.defaultURLBehavior),
  };
}
function Oe(e, t) {
  let n = e.observation.allowlist.filter((e) => e.scope !== `app` && e.scope !== `url`),
    r = e.observation.blocklist.filter((e) => e.scope !== `app` && e.scope !== `url`),
    i = t.applicationBundleIdentifiers.map((e) => ({ scope: `app`, bundleID: e, urlDomain: null })),
    a = t.urlDomains.map((e) => ({ scope: `url`, bundleID: null, urlDomain: e }));
  return (
    G(t.defaultApplicationBehavior, n, r).push(...i),
    G(t.defaultURLBehavior, n, r).push(...a),
    {
      ...e,
      observation: {
        ...e.observation,
        defaultApplicationBehavior: t.defaultApplicationBehavior,
        defaultURLBehavior: t.defaultURLBehavior,
        allowlist: n,
        blocklist: r,
      },
    }
  );
}
function ke(e, t) {
  let n = e.observation,
    r = n.allowlist.some((e) => e.scope === `app` && e.bundleID === t),
    i = n.blocklist.some((e) => e.scope === `app` && e.bundleID === t);
  return n.defaultApplicationBehavior === `observe` ? !i : r;
}
function Ae(e, t, n) {
  let r = { scope: `app`, bundleID: t, urlDomain: null },
    i = K(e.observation.allowlist, t),
    a = K(e.observation.blocklist, t);
  return (
    e.observation.defaultApplicationBehavior === `observe` ? n || a.push(r) : n && i.push(r),
    { ...e, observation: { ...e.observation, allowlist: i, blocklist: a } }
  );
}
function W(e, t, n) {
  return G(n, e.observation.allowlist, e.observation.blocklist).flatMap((e) => {
    if (e.scope !== t) return [];
    let n = t === `app` ? e.bundleID : e.urlDomain;
    return n == null ? [] : [n];
  });
}
function G(e, t, n) {
  return e === `observe` ? n : t;
}
function K(e, t) {
  return e.filter((e) => e.scope !== `app` || e.bundleID !== t);
}
var q = e(() => {});
function J() {
  let e = D.chronicle;
  if (e == null) throw Error(`Computer history is unavailable`);
  return e;
}
var Y,
  X,
  Z,
  je,
  Q,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re = e(() => {
    (v(),
      pe(),
      c(),
      d(),
      m(),
      ue(),
      O(),
      L(),
      Ee(),
      q(),
      (Y = { id: `chronicle-settings` }),
      (X = g(S, () => ({
        enabled: D.chronicle != null,
        queryKey: V,
        queryFn: () => J().getState(),
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 1e3,
      }))),
      (Z = g(S, () => ({
        enabled: D.chronicle != null,
        queryKey: H,
        queryFn: () => J().getSettings(),
        refetchOnMount: `always`,
        retry: !1,
        staleTime: 0,
      }))),
      (je = g(S, () => ({
        enabled: D.chronicle != null,
        queryKey: U,
        queryFn: () => J().listApplications(),
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (Q = oe(S, (e) => ({
        enabled: D.chronicle != null && e.length > 0,
        queryKey: [...U, `selected`, e],
        queryFn: () => J().resolveApplications(e),
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (Me = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `set-enabled`],
        mutationFn: ({ enabled: e }) => J().setEnabled(e),
        onSuccess: (t, { hostId: n }) => {
          (e.query.setData(X, t),
            e.query.setData(x, n, (e) =>
              e == null
                ? e
                : { ...e, response: { ...e.response, config: N(e.response.config, t.enabled) } },
            ),
            Promise.all([
              o(e.queryClient, C),
              o(e.queryClient, [`user-saved-config`]),
              o(e.queryClient, V),
              e.queryClient.invalidateQueries({ queryKey: [`plugins`] }),
              e.queryClient.invalidateQueries({ queryKey: [`skills`] }),
              o(e.queryClient, H),
              o(e.queryClient, j),
            ]));
        },
      }))),
      (Ne = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `retry-activation`],
        mutationFn: () => J().retryActivation(),
        onSuccess: async (t) => {
          (e.query.setData(X, t),
            await o(e.queryClient, V),
            t.enabled ||
              (await Promise.all([o(e.queryClient, C), o(e.queryClient, [`user-saved-config`])])));
        },
      }))),
      (Pe = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `pause-resume`],
        mutationFn: (e) => (e === `paused` ? J().resume() : J().pause()),
        onSuccess: async (t) => {
          (e.query.setData(X, t), await o(e.queryClient, V));
        },
      }))),
      (Fe = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `update-application`],
        scope: Y,
        mutationFn: async ({ application: e, observed: t }) => {
          let n = J(),
            r = await n.getSettings();
          return n.updateSettings(Ae(r, e.bundleIdentifier, t));
        },
        onSuccess: async (t) => {
          (e.query.setData(Z, t), await o(e.queryClient, H));
        },
      }))),
      (Ie = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `clear-history`],
        mutationFn: ({ interval: e, scope: t }) => J().clearHistory(t, e),
        onSuccess: async () => {
          (await o(e.queryClient, j),
            e.get(de).success(
              e.get(ie).formatMessage({
                id: `settings.chronicle.history.clearSuccessToast`,
                defaultMessage: `History cleared — ChatGPT memory may take up to 6 hours to update`,
                description: `Toast shown after clearing Computer history, explaining that previously consolidated ChatGPT memories can take up to six hours to update`,
              }),
            ));
        },
      }))),
      (Le = n(S, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `save-settings`],
        scope: Y,
        mutationFn: async (e) => {
          let t = J(),
            n = await t.getSettings();
          return t.updateSettings(Oe(n, e));
        },
        onSuccess: async (t) => {
          (e.query.setData(Z, t), await o(e.queryClient, H));
        },
      }))));
  });
function ze({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    ...fe({ isMemoryFeatureEnabled: n, memoryConfig: r }),
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function Be(
  e,
  { chronicleResearchPreviewEnabled: t, isMemoryFeatureEnabled: n, memoryConfigPatch: r } = {},
) {
  return ze({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function $({ productLogger: e, previousEnabled: t, selectedEnabled: n, settingName: r, state: i }) {
  e.logProductEvent(s, { settingName: r, previousEnabled: t, selectedEnabled: n, ...i });
}
async function Ve({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  $({ productLogger: e, ...n });
}
async function He({
  productLogger: e,
  previousState: t,
  selectedEnabled: n,
  featureWrite: r,
  configWrite: i,
  chronicleDisable: a,
}) {
  let [o, s, c] = await Promise.allSettled([r(), i(), a?.() ?? Promise.resolve()]),
    l = o.status === `fulfilled` ? n : t.memoryFeatureEnabled,
    u = s.status === `fulfilled` ? n : t.generateMemoriesEnabled,
    d = s.status === `fulfilled` ? n : t.useMemoriesEnabled,
    f = {
      ...t,
      chronicleResearchPreviewEnabled:
        a != null && c.status === `fulfilled` ? !1 : t.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: u,
      useMemoriesEnabled: d,
      memoriesEnabled: l && u && d,
    };
  f.memoriesEnabled !== t.memoriesEnabled &&
    $({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
var Ue = e(() => {
  (re(), te());
});
export {
  Se as C,
  L as S,
  ye as T,
  q as _,
  Ve as a,
  we as b,
  X as c,
  Pe as d,
  Q as f,
  Fe as g,
  Me as h,
  He as i,
  Ie as l,
  Le as m,
  Ue as n,
  je as o,
  Ne as p,
  $ as r,
  Z as s,
  Be as t,
  Re as u,
  ke as v,
  xe as w,
  Te as x,
  De as y,
};
//# sourceMappingURL=memory-settings-analytics-4ae383b0618d.js.map
