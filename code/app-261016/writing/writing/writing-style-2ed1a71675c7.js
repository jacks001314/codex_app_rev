import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Qst as n,
  Yst as r,
  ZSt as i,
  mCt as a,
  sct as o,
  uCt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Amr as c,
  Bhr as l,
  EFt as u,
  Efr as d,
  Emr as f,
  KBr as p,
  Rzn as m,
  Tfr as h,
  bmr as g,
  hnn as _,
  iRr as v,
  jFt as y,
  jmr as b,
  kmr as x,
  mnn as S,
  phr as C,
  tyr as w,
  vhr as T,
  wmr as E,
  ymr as D,
  zzn as O,
} from "./app-initial-ad16eaadf81f.js";
import { r as k } from "./state-52a0b939b0d5.js";
import { c as A, f as j, h as M, n as N, r as P, x as F } from "./queries-bc5fa9dfcb85.js";
async function I(e, { identity: t, sourceAttributionId: n, signal: i }) {
  let a = new AbortController(),
    o = AbortSignal.any([i, a.signal]),
    s = e.get(y, t),
    c = () => !o.aborted && u(e, t);
  if (!c()) return !1;
  let l = e.watch((e) => {
      (!u(e, t) || e.get(y, t) !== s) && a.abort();
    }),
    f = performance.now(),
    p = (t) => {
      let n = { enabled: `true`, entry_point: `onboarding`, outcome: t };
      (e.get(m).count(`default`, `write_like_me.preference_change`, n),
        t !== `started` &&
          e
            .get(m)
            .hist(
              `default`,
              `write_like_me.preference_change_duration_ms`,
              n,
              Math.max(0, performance.now() - f),
            ));
    };
  p(`started`);
  try {
    let i = await e.query.fetch(H, t);
    if (!c()) return (p(`aborted`), !1);
    if (i.enabled) return (p(`success`), !0);
    let a = i.plugin;
    if (
      a == null ||
      a.canonical_app_id !== z ||
      a.status !== `ENABLED` ||
      a.disabled_reason != null ||
      a.installation_policy === `NOT_AVAILABLE` ||
      a.release.requires_local_executor
    )
      throw Error(`Writing style is unavailable`);
    if (i.installed == null) {
      let r = await new Promise((r) => {
        let i = !1,
          s = (e) => {
            i || ((i = !0), o.removeEventListener(`abort`, c), r(e));
          },
          c = () => s(`cancelled`);
        (o.addEventListener(`abort`, c, { once: !0 }),
          _(
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
      (i.installed != null &&
        !i.installed.enabled &&
        (await v.safePost(`/ps/plugins/{plugin_id}/enable`, {
          additionalHeaders: { "ChatGPT-Account-ID": t.accountId, [C]: `TPP` },
          parameters: { path: { plugin_id: a.id } },
          signal: o,
        })),
      !c())
    )
      return (p(`aborted`), !1);
    let s = await e.query.fetch(H, t);
    if (!c()) return (p(`aborted`), !1);
    if (!s.enabled) throw Error(`Writing style preference could not be confirmed`);
    return (e.query.invalidate(d, { accountId: t.accountId, hostId: r, roots: void 0 }), p(`success`), !0);
  } catch (n) {
    if (c()) {
      let n = await e.query.fetch(H, t).catch(() => void 0);
      if (c() && n?.enabled) return (p(`success`), !0);
    }
    if (!c()) return (p(`aborted`), !1);
    throw (p(`failure`), n);
  } finally {
    l();
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
    let t = n.find((t) => l(t.id) === l(e));
    if (
      t == null ||
      t.status === `DISABLED_BY_ADMIN` ||
      t.disabled_reason != null ||
      !t.available ||
      (!t.installed && !t.can_install)
    )
      return `unavailable`;
    let i = r.filter((t) => l(t.connector_id) === l(e) && L(t));
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
    (i(),
      o(),
      O(),
      T(),
      b(),
      g(),
      f(),
      w(),
      S(),
      h(),
      t(),
      p(),
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
      (V = a(n, (e, { scope: t }) => ({
        queryKey: [`write-like-me-connections`, e],
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        retry: !1,
        queryFn: async () => {
          let [n, i, a] = await Promise.all([
              t.queryClient.fetchQuery({
                ...P(
                  e,
                  B.map(({ id: e }) => e),
                ),
                staleTime: 0,
              }),
              t.queryClient.fetchQuery({
                ...t.query.getOptions(d, { accountId: e.accountId, hostId: r, roots: void 0 }),
                staleTime: 0,
              }),
              t.queryClient.fetchQuery({ ...E({ ...e, productSku: `CONNECTOR_SETTING` }), staleTime: 0 }),
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
            [u, f] = await Promise.all([
              o.length === 0
                ? []
                : t.queryClient.fetchQuery({ ...D({ ...e, appIds: o, enabled: !0 }), staleTime: 0 }),
              s.length === 0
                ? []
                : x(t.queryClient, c({ accountId: e.accountId, appIds: s, enabled: !0 })).catch(() => []),
            ]);
          return B.flatMap((e) => {
            let t = n.find(({ id: t }) => t === e.id);
            if (t == null) return [];
            let { logo_url: r, logo_url_dark: o, composer_icon_url: s } = t.release.interface,
              c = t.release.app_ids?.[0],
              d = f.find(({ id: e }) => c != null && l(e) === l(c));
            return [
              {
                id: t.id,
                name: t.release.display_name,
                category: e.category,
                connector: e.connector,
                iconUrl: r ?? s ?? d?.icon_url,
                iconDarkUrl: o ?? r ?? s ?? d?.icon_dark_url ?? d?.icon_url,
                connection: R(
                  t,
                  i.some((e) => e.servicePlugin?.id === t.id && e.plugin.enabled),
                  u,
                  a,
                ),
              },
            ];
          });
        },
      }))),
      (H = a(n, (e) => ({
        queryKey: [`plugins`, `writing-style-preference`, e, `TPP`],
        staleTime: 0,
        retry: !1,
        queryFn: async ({ signal: t }) => {
          let n = { "ChatGPT-Account-ID": e.accountId, [C]: `TPP` },
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
      (U = s(n, (e, { scope: t }) => ({
        mutationKey: [`work-onboarding-writing-style-enablement`, e],
        mutationFn: ({ sourceAttributionId: n }) =>
          I(t, { identity: e, sourceAttributionId: n, signal: new AbortController().signal }),
      }))));
  }))();
}
export { H as a, U as i, W as n, V as r, I as t };
//# sourceMappingURL=writing-style-2ed1a71675c7.js.map
