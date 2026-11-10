import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  CPt as n,
  Cot as r,
  EPt as i,
  Iot as a,
  Ixt as ee,
  JIt as o,
  Jxt as s,
  Kat as c,
  Lot as l,
  Pxt as u,
  SPt as d,
  TLt as f,
  Tpt as p,
  Vxt as te,
  Zxt as m,
  hot as h,
  lot as g,
  nst as _,
  qat as v,
  rst as ne,
  tst as re,
  vzt as ie,
  wot as y,
  xLt as ae,
  zxt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as b,
  Ggr as x,
  HPr as se,
  UPr as S,
  VPr as C,
  XPr as ce,
  YPr as le,
  aIr as ue,
  oIr as de,
  s8n as w,
  t_r as T,
  v8n as fe,
} from "./app-initial-5851df3f6cb1.js";
import { n as pe, t as E } from "./chronicle-settings-d16251f05467.js";
import { a as me, t as D } from "./computer-history-query-30a12dff18c6.js";
function he() {
  let e = (0, k.c)(17),
    t = ee(r),
    i = _(),
    a = te(w),
    { data: o } = oe(T, a),
    s = se(),
    c;
  e[0] === a ? (c = e[1]) : ((c = [...S, a]), (e[0] = a), (e[1] = c));
  let u = c,
    d;
  e[2] !== a || e[3] !== t || e[4] !== o?.configWriteTarget?.filePath
    ? ((d = (e) => {
        let { enabled: n } = e;
        return le(t, a).sendRequest(`config/batchWrite`, {
          edits: [{ keyPath: A, value: n, mergeStrategy: `upsert` }],
          filePath: o?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = a),
      (e[3] = t),
      (e[4] = o?.configWriteTarget?.filePath),
      (e[5] = d))
    : (d = e[5]);
  let f, p;
  e[6] !== i || e[7] !== u
    ? ((f = async (e) => {
        let { enabled: t } = e;
        await i.cancelQueries({ queryKey: u });
        let n = i.getQueryData(u);
        return (
          i.setQueryData(u, (e) =>
            e == null ? e : { ...e, response: { ...e.response, config: O(e.response.config, t) } },
          ),
          { previousUserConfig: n }
        );
      }),
      (p = (e, t, r) => {
        (n.error(`Failed to update Chronicle config`, { safe: { error: String(e) }, sensitive: {} }),
          i.setQueryData(u, r?.previousUserConfig));
      }),
      (e[6] = i),
      (e[7] = u),
      (e[8] = f),
      (e[9] = p))
    : ((f = e[8]), (p = e[9]));
  let m;
  e[10] === s
    ? (m = e[11])
    : ((m = async () => {
        await Promise.all([s(S), s([`user-saved-config`])]);
      }),
      (e[10] = s),
      (e[11] = m));
  let h;
  return (
    e[12] !== d || e[13] !== f || e[14] !== p || e[15] !== m
      ? ((h = { mutationFn: d, onMutate: f, onError: p, onSettled: m }),
        (e[12] = d),
        (e[13] = f),
        (e[14] = p),
        (e[15] = m),
        (e[16] = h))
      : (h = e[16]),
    l(h)
  );
}
function O(e, t) {
  return Object.assign(structuredClone(e), { features: { ...ge(e.features, E, t) } });
}
function ge(e, t, n) {
  let r = j.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var k, A, j;
function M() {
  return (M = e(() => {
    ((k = ie()),
      a(),
      re(),
      u(),
      ne(),
      i(),
      ce(),
      fe(),
      x(),
      b(),
      y(),
      d(),
      pe(),
      (A = p(E)),
      (j = ae(f(), o())));
  }))();
}
var N, P, F;
function I() {
  return (I = e(() => {
    (me(), (N = [`chronicle-state`]), (P = [`chronicle-settings`]), (F = [`chronicle-applications`]));
  }))();
}
function _e(e) {
  return {
    defaultApplicationBehavior: e.observation.defaultApplicationBehavior,
    applicationBundleIdentifiers: L(e, `app`, e.observation.defaultApplicationBehavior),
    defaultURLBehavior: e.observation.defaultURLBehavior,
    urlDomains: L(e, `url`, e.observation.defaultURLBehavior),
  };
}
function ve(e, t) {
  let n = e.observation.allowlist.filter((e) => e.scope !== `app` && e.scope !== `url`),
    r = e.observation.blocklist.filter((e) => e.scope !== `app` && e.scope !== `url`),
    i = t.applicationBundleIdentifiers.map((e) => ({ scope: `app`, bundleID: e, urlDomain: null })),
    a = t.urlDomains.map((e) => ({ scope: `url`, bundleID: null, urlDomain: e }));
  return (
    R(t.defaultApplicationBehavior, n, r).push(...i),
    R(t.defaultURLBehavior, n, r).push(...a),
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
function ye(e, t) {
  let n = e.observation,
    r = n.allowlist.some((e) => e.scope === `app` && e.bundleID === t),
    i = n.blocklist.some((e) => e.scope === `app` && e.bundleID === t);
  return n.defaultApplicationBehavior === `observe` ? !i : r;
}
function be(e, t, n) {
  let r = { scope: `app`, bundleID: t, urlDomain: null },
    i = z(e.observation.allowlist, t),
    a = z(e.observation.blocklist, t);
  return (
    e.observation.defaultApplicationBehavior === `observe` ? n || a.push(r) : n && i.push(r),
    { ...e, observation: { ...e.observation, allowlist: i, blocklist: a } }
  );
}
function L(e, t, n) {
  return R(n, e.observation.allowlist, e.observation.blocklist).flatMap((e) => {
    if (e.scope !== t) return [];
    let n = t === `app` ? e.bundleID : e.urlDomain;
    return n == null ? [] : [n];
  });
}
function R(e, t, n) {
  return e === `observe` ? n : t;
}
function z(e, t) {
  return e.filter((e) => e.scope !== `app` || e.bundleID !== t);
}
function B() {
  return (B = e(() => {}))();
}
function V() {
  let e = c.chronicle;
  if (e == null) throw Error(`Computer history is unavailable`);
  return e;
}
var H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (u(),
      g(),
      ue(),
      x(),
      b(),
      v(),
      y(),
      M(),
      I(),
      (H = { id: `chronicle-settings` }),
      (U = t(r, () => ({
        enabled: c.chronicle != null,
        queryKey: N,
        queryFn: () => V().getState(),
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        retry: !1,
        staleTime: 1e3,
      }))),
      (W = t(r, () => ({
        enabled: c.chronicle != null,
        queryKey: P,
        queryFn: () => V().getSettings(),
        refetchOnMount: `always`,
        retry: !1,
        staleTime: 0,
      }))),
      (G = t(r, () => ({
        enabled: c.chronicle != null,
        queryKey: F,
        queryFn: () => V().listApplications(),
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (K = m(r, (e) => ({
        enabled: c.chronicle != null && e.length > 0,
        queryKey: [...F, `selected`, e],
        queryFn: () => V().resolveApplications(e),
        retry: !1,
        staleTime: 1 / 0,
      }))),
      (q = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `set-enabled`],
        mutationFn: ({ enabled: e }) => V().setEnabled(e),
        onSuccess: (t, { hostId: n }) => {
          (e.query.setData(U, t),
            e.query.setData(T, n, (e) =>
              e == null ? e : { ...e, response: { ...e.response, config: O(e.response.config, t.enabled) } },
            ),
            Promise.all([
              C(e.queryClient, S),
              C(e.queryClient, [`user-saved-config`]),
              C(e.queryClient, N),
              e.queryClient.invalidateQueries({ queryKey: [`plugins`] }),
              e.queryClient.invalidateQueries({ queryKey: [`skills`] }),
              C(e.queryClient, P),
              C(e.queryClient, D),
            ]));
        },
      }))),
      (J = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `retry-activation`],
        mutationFn: () => V().retryActivation(),
        onSuccess: async (t) => {
          (e.query.setData(U, t),
            await C(e.queryClient, N),
            t.enabled || (await Promise.all([C(e.queryClient, S), C(e.queryClient, [`user-saved-config`])])));
        },
      }))),
      (Y = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `pause-resume`],
        mutationFn: (e) => (e === `paused` ? V().resume() : V().pause()),
        onSuccess: async (t) => {
          (e.query.setData(U, t), await C(e.queryClient, N));
        },
      }))),
      (X = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `update-application`],
        scope: H,
        mutationFn: async ({ application: e, observed: t }) => {
          let n = V(),
            r = await n.getSettings();
          return n.updateSettings(be(r, e.bundleIdentifier, t));
        },
        onSuccess: async (t) => {
          (e.query.setData(W, t), await C(e.queryClient, P));
        },
      }))),
      (Z = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `clear-history`],
        mutationFn: ({ interval: e, scope: t }) => V().clearHistory(t, e),
        onSuccess: async (t, { showSuccessToast: n = !0 }) => {
          (await C(e.queryClient, D),
            n &&
              e
                .get(h)
                .success(
                  e
                    .get(de)
                    .formatMessage({
                      id: `settings.chronicle.history.clearSuccessToast`,
                      defaultMessage: `History cleared — ChatGPT memory may take up to 6 hours to update`,
                      description: `Toast shown after clearing Computer history, explaining that previously consolidated ChatGPT memories can take up to six hours to update`,
                    }),
                ));
        },
      }))),
      (Q = s(r, ({ scope: e }) => ({
        mutationKey: [`chronicle`, `save-settings`],
        scope: H,
        mutationFn: async (e) => {
          let t = V(),
            n = await t.getSettings();
          return t.updateSettings(ve(n, e));
        },
        onSuccess: async (t) => {
          (e.query.setData(W, t), await C(e.queryClient, P));
        },
      }))));
  }))();
}
export {
  $ as a,
  J as c,
  X as d,
  B as f,
  he as g,
  M as h,
  Z as i,
  Q as l,
  _e as m,
  W as n,
  Y as o,
  ye as p,
  U as r,
  K as s,
  G as t,
  q as u,
};
//# sourceMappingURL=chronicle-service-queries-fa2c40e5d4fe.js.map
