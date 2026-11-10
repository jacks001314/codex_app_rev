import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  Zxt as r,
  iot as i,
  qxt as a,
  rst as o,
  wot as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bur as c,
  Edn as l,
  Fur as u,
  Icr as d,
  Lcr as f,
  Nur as p,
  Our as m,
  Rur as h,
  Tdn as g,
  Udr as _,
  Ymr as v,
  dIn as y,
  ehr as b,
  gdr as x,
  kur as S,
  oFr as C,
  uIn as w,
  wRt as T,
  xdr as E,
  yRt as D,
  zur as O,
} from "./app-initial-5851df3f6cb1.js";
import { r as k } from "./state-8cbcf88168fe.js";
import { c as A, f as j, h as M, n as N, r as P, x as F } from "./queries-5d0ed8fa4a71.js";
async function I(e, { identity: t, sourceAttributionId: n, signal: r }) {
  let a = new AbortController(),
    o = AbortSignal.any([r, a.signal]),
    s = e.get(T, t),
    c = () => !o.aborted && D(e, t);
  if (!c()) return !1;
  let u = e.watch((e) => {
      (!D(e, t) || e.get(T, t) !== s) && a.abort();
    }),
    d = performance.now(),
    p = (t) => {
      let n = { enabled: `true`, entry_point: `onboarding`, outcome: t };
      (e.get(w).count(`default`, `write_like_me.preference_change`, n),
        t !== `started` &&
          e
            .get(w)
            .hist(
              `default`,
              `write_like_me.preference_change_duration_ms`,
              n,
              Math.max(0, performance.now() - d),
            ));
    };
  p(`started`);
  try {
    let r = await e.query.fetch(H, t);
    if (!c()) return (p(`aborted`), !1);
    if (r.enabled) return (p(`success`), !0);
    let a = r.plugin;
    if (
      a == null ||
      a.canonical_app_id !== z ||
      a.status !== `ENABLED` ||
      a.disabled_reason != null ||
      a.installation_policy === `NOT_AVAILABLE` ||
      a.release.requires_local_executor
    )
      throw Error(`Writing style is unavailable`);
    if (r.installed == null) {
      let r = await new Promise((r) => {
        let i = !1,
          s = (e) => {
            i || ((i = !0), o.removeEventListener(`abort`, c), r(e));
          },
          c = () => s(`cancelled`);
        (o.addEventListener(`abort`, c, { once: !0 }),
          l(
            e,
            {
              displayName: a.release.display_name,
              remotePluginId: a.id,
              remoteMarketplaceName: `openai-curated-remote`,
            },
            {
              hostId: `local`,
              hostedAccountId: t.accountId,
              sourceAttributionId: n,
              sourceSectionId: `work_onboarding`,
              suppressSuccessToast: !0,
              appConnectOptions: { connectorId: z, productSku: `TPP` },
              onSuccess: () => s(`success`),
              onCancel: () => s(`cancelled`),
              onError: () => s(`failure`),
            },
          ) || s(`failure`));
      });
      if (!c() || r === `cancelled`) return (p(`aborted`), !1);
      if (r === `failure`) throw Error(`Writing style installation failed`);
    }
    if (
      (r.installed != null &&
        !r.installed.enabled &&
        (await v.safePost(`/ps/plugins/{plugin_id}/enable`, {
          additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [x]: `TPP` },
          parameters: { path: { plugin_id: a.id } },
          signal: o,
        })),
      !c())
    )
      return (p(`aborted`), !1);
    let s = await e.query.fetch(H, t);
    if (!c()) return (p(`aborted`), !1);
    if (!s.enabled) throw Error(`Writing style preference could not be confirmed`);
    return (e.query.invalidate(f, { accountId: t.accountId, hostId: i, roots: void 0 }), p(`success`), !0);
  } catch (n) {
    if (c()) {
      let n = await e.query.fetch(H, t).catch(() => void 0);
      if (c() && n?.enabled) return (p(`success`), !0);
    }
    if (!c()) return (p(`aborted`), !1);
    throw (p(`failure`), n);
  } finally {
    u();
  }
}
function L(e) {
  return e.visibility !== `HIDDEN` && !e.id.startsWith(`implicit_link::`);
}
function R(e, t, n, r) {
  let i = j(e);
  if (
    e.status !== `ENABLED` ||
    e.disabled_reason != null ||
    e.installation_policy === `NOT_AVAILABLE` ||
    e.release.requires_local_executor ||
    i.length === 0
  )
    return `unavailable`;
  let a = i.map((e) => {
    let t = n.find((t) => _(t.id) === _(e));
    if (
      t == null ||
      t.status === `DISABLED_BY_ADMIN` ||
      t.disabled_reason != null ||
      !t.available ||
      (!t.installed && !t.can_install)
    )
      return `unavailable`;
    let i = r.filter((t) => _(t.connector_id) === _(e) && L(t));
    return i.some((e) => e.auth_status === `ACTIVE`)
      ? `connected`
      : i.some((e) => e.auth_status === `REAUTH_REQUIRED`)
        ? `reauth`
        : `disconnected`;
  });
  return a.includes(`unavailable`)
    ? `unavailable`
    : a.every((e) => e === `connected`)
      ? t
        ? `connected`
        : `disconnected`
      : a.includes(`reauth`)
        ? `reauth`
        : `disconnected`;
}
var z, B, V, H, U;
function W() {
  return (W = e(() => {
    (n(),
      o(),
      y(),
      E(),
      c(),
      S(),
      u(),
      b(),
      g(),
      d(),
      s(),
      C(),
      k(),
      F(),
      N(),
      A(),
      (z = `connector_openai_write_like_me`),
      (B = [
        { ...M.gmail, category: `email`, connector: `gmail` },
        { ...M.outlook_email, category: `email`, connector: `outlook_email` },
        { ...M.superhuman, category: `email`, connector: `superhuman` },
        { ...M.slack, category: `messaging`, connector: `slack` },
        { ...M.teams, category: `messaging`, connector: `teams` },
        { ...M.google_drive, category: `documents`, connector: `google_drive` },
        { ...M.sharepoint, category: `documents`, connector: `sharepoint` },
        { ...M.notion, category: `documents`, connector: `notion` },
      ]),
      (V = r(t, (e, { scope: t }) => ({
        queryKey: [`write-like-me-connections`, e],
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        retry: !1,
        queryFn: async () => {
          let [n, r, a] = await Promise.all([
              t.queryClient.fetchQuery({
                ...P(
                  e,
                  B.map(({ id: e }) => e),
                ),
                staleTime: 0,
              }),
              t.queryClient.fetchQuery({
                ...t.query.getOptions(f, { accountId: e.accountId, hostId: i, roots: void 0 }),
                staleTime: 0,
              }),
              t.queryClient.fetchQuery({ ...p({ ...e, productSku: `CONNECTOR_SETTING` }), staleTime: 0 }),
            ]),
            o = [...new Set(n.flatMap(j))],
            s = [
              ...new Set(
                n.flatMap((e) =>
                  e.release.interface.logo_url == null && e.release.interface.composer_icon_url == null
                    ? (e.release.app_ids?.slice(0, 1) ?? [])
                    : [],
                ),
              ),
            ],
            [c, l] = await Promise.all([
              o.length === 0
                ? []
                : t.queryClient.fetchQuery({ ...m({ ...e, appIds: o, enabled: !0 }), staleTime: 0 }),
              s.length === 0
                ? []
                : h(t.queryClient, O({ accountId: e.accountId, appIds: s, enabled: !0 })).catch(() => []),
            ]);
          return B.flatMap((e) => {
            let t = n.find(({ id: t }) => t === e.id);
            if (t == null) return [];
            let { logo_url: i, logo_url_dark: o, composer_icon_url: s } = t.release.interface,
              u = t.release.app_ids?.[0],
              d = l.find(({ id: e }) => u != null && _(e) === _(u));
            return [
              {
                id: t.id,
                name: t.release.display_name,
                category: e.category,
                connector: e.connector,
                iconUrl: i ?? s ?? d?.icon_url,
                iconDarkUrl: o ?? i ?? s ?? d?.icon_dark_url ?? d?.icon_url,
                connection: R(
                  t,
                  r.some((e) => e.servicePlugin?.id === t.id && e.plugin.enabled),
                  c,
                  a,
                ),
              },
            ];
          });
        },
      }))),
      (H = r(t, (e) => ({
        queryKey: [`plugins`, `writing-style-preference`, e, `TPP`],
        staleTime: 0,
        retry: !1,
        queryFn: async ({ signal: t }) => {
          let n = { "ChatGPT-Account-ID": e.accountId, [x]: `TPP` },
            [r, i] = await Promise.all([
              v.safeGet(`/ps/plugins/canonical-app/{app_id}`, {
                additionalHeaders: n,
                parameters: { path: { app_id: z } },
                signal: t,
              }),
              (async () => {
                let e, r;
                do {
                  let i = await v.safeGet(`/ps/plugins/installed`, {
                    additionalHeaders: n,
                    parameters: { query: { limit: 1e3, pageToken: e } },
                    signal: t,
                  });
                  ((r = i.plugins.find((e) => e.canonical_app_id === z)),
                    (e = i.pagination.next_page_token ?? void 0));
                } while (r == null && e != null);
                return r;
              })(),
            ]);
          return {
            plugin: r.plugin,
            installed: i,
            enabled:
              i?.enabled === !0 &&
              i.status === `ENABLED` &&
              i.disabled_reason == null &&
              i.installation_policy !== `NOT_AVAILABLE` &&
              !i.release.requires_local_executor,
          };
        },
      }))),
      (U = a(t, (e, { scope: t }) => ({
        mutationKey: [`work-onboarding-writing-style-enablement`, e],
        mutationFn: ({ sourceAttributionId: n }) =>
          I(t, { identity: e, sourceAttributionId: n, signal: new AbortController().signal }),
      }))));
  }))();
}
export { H as a, U as i, W as n, V as r, I as t };
//# sourceMappingURL=writing-style-4321cba3f1c0.js.map
