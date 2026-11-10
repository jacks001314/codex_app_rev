const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./plugin-share-dialog-a4ba3bc3f7f9.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./plugin-share-dialog-2f1f21a3f1fd.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./team-c01e2ff48801.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./open-appgen-share-dialog-8d437cfd3c67.js",
      "./workspace-team-recipient-suggestions-f88127cfec32.js",
      "./access-list-99033c7522ef.js",
      "./dialog-utils-21c4d759328d.js",
      "./member-count-5e188d46464b.js",
      "./modal-footer-8c17ec58d94e.js",
      "./modal-permission-dropdown-75a4787ca1b8.js",
      "./access-dropdown-224e31792a15.js",
      "./team-plugins-2260d2b8aeb9.js",
      "./team-settings-link-f7f3b8c7933c.js",
      "./card-tile-a92df345e9ab.js",
      "./plugin-listings-pagination-c5fa81805ac1.js",
      "./skills-page-grid-5f717c30cada.js",
      "./plugin-origin-badge-1e1f880d2dac.js",
      "./badge-c44d63c703d3.js",
      "./plugins-page-selectors-463d7aa7d76e.js",
      "./profile-lock-17cb9817089d.js",
      "./messages-4cbaa49d7ad9.js",
      "./plugin-marketplace-context-c6ab695904bf.js",
      "./plugin-disabled-reason-9ae34b32db06.js",
      "./plugins-query-0b24cce7d51e.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  Cot as n,
  EPt as r,
  Ext as i,
  Fat as a,
  H7 as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  J7 as u,
  Lot as d,
  Pat as f,
  Pxt as p,
  Rnt as m,
  TJ as h,
  TLt as g,
  TO as _,
  Xot as v,
  Yot as y,
  Zxt as b,
  _xt as x,
  fPt as S,
  frt as C,
  hot as w,
  hrt as T,
  iO as E,
  jDt as D,
  lot as O,
  nSt as k,
  pIt as A,
  pPt as j,
  rO as M,
  rst as N,
  vzt as P,
  wot as F,
  xB as I,
  xMt as L,
  zxt as ee,
} from "./app-shared-bbfeca5e5737.js";
import {
  $kn as R,
  BPr as z,
  BYt as te,
  Bun as B,
  Dlr as ne,
  Ekn as re,
  Fin as V,
  G4n as ie,
  HPr as ae,
  Hin as oe,
  IYt as se,
  Id as ce,
  Idn as le,
  J4n as ue,
  Jlr as de,
  K1n as fe,
  K4n as pe,
  Ld as me,
  Ldn as he,
  Lkn as ge,
  Ocr as _e,
  Qrt as ve,
  Rkr as ye,
  Run as be,
  S_r as xe,
  Skn as Se,
  U4n as Ce,
  Ukn as we,
  XPr as Te,
  YPr as H,
  Ymr as Ee,
  aIr as De,
  dxt as Oe,
  eAn as ke,
  eDr as Ae,
  ehr as je,
  fur as Me,
  gOr as U,
  glr as Ne,
  hOr as Pe,
  iPr as Fe,
  kcr as Ie,
  lit as Le,
  lxt as Re,
  m_r as ze,
  mur as Be,
  nDr as Ve,
  oFr as He,
  oIr as Ue,
  oit as We,
  pur as Ge,
  q1n as Ke,
  qlr as qe,
  sPr as Je,
  tAn as Ye,
  uxt as Xe,
  xkr as Ze,
  zkn as Qe,
  zkr as $e,
} from "./app-initial-5851df3f6cb1.js";
import { n as et, t as tt } from "./plugin-detail-settings-enabled-caa9d391daad.js";
import { i as nt, t as rt } from "./queries-81f7f581f0b1.js";
import { n as it, t as at } from "./plugin-card-status-action-2ac436b67a6c.js";
import { i as ot, n as st, r as ct, t as lt } from "./plugin-marketplace-context-c6ab695904bf.js";
function ut(e) {
  if (e != null && e.current_user_permissions == null) return !0;
  let t = K.safeParse(e?.current_user_permissions);
  return t.success && t.data.includes(`chatgpt.plugin_share.share`);
}
async function dt({ scope: e, hostId: t, params: n }) {
  let r = t ?? `local`,
    i = await e.query.getOrFetch(Ie, {
      hostId: r,
      marketplacePath: n.marketplacePath ?? null,
      pluginName: n.pluginName,
      remoteMarketplaceName: n.remoteMarketplaceName ?? null,
    });
  return { pluginShareUrl: i.shareUrl ?? null, shareContext: i.summary.shareContext };
}
function ft(e) {
  let t = (0, W.c)(17),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { enabled: i, hostId: a } = r,
    o = i === void 0 || i,
    s = l(n),
    c = a ?? `local`,
    u;
  t[2] === c ? (u = t[3]) : ((u = { hostId: c }), (t[2] = c), (t[3] = u));
  let d = de(u),
    p = Be(c),
    m;
  t[4] === c ? (m = t[5]) : ((m = [...G, c]), (t[4] = c), (t[5] = m));
  let h;
  t[6] !== c || t[7] !== s
    ? ((h = async () => (await H(s, c).sendRequest(`plugin/share/list`, {})).data),
      (t[6] = c),
      (t[7] = s),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== p?.authMethod || t[10] !== o || t[11] !== d
    ? ((g = o && d && Ne(p?.authMethod ?? null)),
      (t[9] = p?.authMethod),
      (t[10] = o),
      (t[11] = d),
      (t[12] = g))
    : (g = t[12]);
  let _;
  return (
    t[13] !== m || t[14] !== h || t[15] !== g
      ? ((_ = { queryKey: m, queryFn: h, enabled: g, staleTime: f.FIVE_MINUTES }),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g),
        (t[16] = _))
      : (_ = t[16]),
    v(_)
  );
}
function pt(e) {
  let t = (0, W.c)(10),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { hostId: i } = r,
    a = l(n),
    o = i ?? `local`,
    s = ae(),
    c;
  t[2] !== o || t[3] !== a
    ? ((c = async (e) => {
        let { discoverability: t, remotePluginId: n, targets: r } = e;
        return (
          await H(a, o).sendRequest(`plugin/share/updateTargets`, {
            remotePluginId: n,
            discoverability: t ?? (r.some(mt) ? `UNLISTED` : `PRIVATE`),
            shareTargets: vt(r),
          })
        ).principals.map(gt);
      }),
      (t[2] = o),
      (t[3] = a),
      (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === s
    ? (u = t[6])
    : ((u = () => {
        yt(s);
      }),
      (t[5] = s),
      (t[6] = u));
  let f;
  return (
    t[7] !== c || t[8] !== u
      ? ((f = { mutationFn: c, onSuccess: u }), (t[7] = c), (t[8] = u), (t[9] = f))
      : (f = t[9]),
    d(f)
  );
}
function mt(e) {
  return e.principal_type === `workspace`;
}
function ht(e) {
  return e?.sharePrincipals?.map(gt) ?? null;
}
function gt(e) {
  return { principal_id: e.principalId, principal_type: e.principalType, role: e.role, name: e.name };
}
function _t(e) {
  let t = (0, W.c)(10),
    r;
  t[0] === e ? (r = t[1]) : ((r = e === void 0 ? {} : e), (t[0] = e), (t[1] = r));
  let { hostId: i } = r,
    a = l(n),
    o = i ?? `local`,
    s = ae(),
    c;
  t[2] !== o || t[3] !== a
    ? ((c = (e) => H(a, o).sendRequest(`plugin/share/save`, e)), (t[2] = o), (t[3] = a), (t[4] = c))
    : (c = t[4]);
  let u;
  t[5] === s
    ? (u = t[6])
    : ((u = () => {
        yt(s);
      }),
      (t[5] = s),
      (t[6] = u));
  let f;
  return (
    t[7] !== c || t[8] !== u
      ? ((f = { mutationFn: c, onSuccess: u }), (t[7] = c), (t[8] = u), (t[9] = f))
      : (f = t[9]),
    d(f)
  );
}
function vt(e) {
  return e.flatMap((e) =>
    e.principal_type === `workspace`
      ? []
      : [{ principalId: e.principal_id, principalType: e.principal_type, role: e.role }],
  );
}
function yt(e) {
  for (let t of bt) e(t);
}
var W, bt, G, K, q, xt;
function J() {
  return (J = e(() => {
    ((W = P()),
      c(),
      y(),
      p(),
      r(),
      Te(),
      Me(),
      qe(),
      _e(),
      z(),
      F(),
      He(),
      a(),
      Je(),
      C(),
      (bt = [[`plugins`], [`plugins`, `detail`]]),
      (G = [`plugins`, `shares`]),
      (K = A(g())),
      (q = b(n, ({ accountId: e, pluginId: t }) => ({
        queryKey: [...G, e, t],
        queryFn: ({ signal: n }) =>
          Fe.safeGet(`/ps/plugins/{plugin_id}/shares`, {
            surface: `plugin_management`,
            additionalHeaders: e == null ? void 0 : { "ChatGPT-Account-Id": e },
            parameters: { path: { plugin_id: t } },
            signal: n,
            expectedErrorStatuses: [403, 404],
          }).catch((e) => {
            if (e instanceof T && [403, 404].includes(e.status)) return null;
            throw e;
          }),
        enabled: e != null,
        staleTime: f.ONE_MINUTE,
        retry: !1,
      }))),
      (xt = k(n, (e, { get: t }) => {
        if (e == null) return null;
        let { data: n, isSuccess: r } = t(q, e);
        if (n?.can_refresh_from_source === !0) return `source-managed`;
        let i = K.safeParse(n?.current_user_permissions);
        return r &&
          n?.can_refresh_from_source === !1 &&
          i.success &&
          i.data.includes(`chatgpt.plugin_share.write`)
          ? `editable`
          : null;
      })));
  }))();
}
function St({ initialShare: e, saveShare: t }) {
  let n = e,
    r = null,
    i = async () =>
      n?.shareUrl == null
        ? ((r ??= t(n?.remotePluginId ?? null)
            .then((e) => {
              let t = {
                canPublishToWorkspace: e.canPublishToWorkspace === !0,
                remotePluginId: e.remotePluginId,
                sharePrincipals: n?.sharePrincipals ?? null,
                shareUrl: e.shareUrl,
              };
              return ((n = t), t);
            })
            .finally(() => {
              r = null;
            })),
          r)
        : { ...n, shareUrl: n.shareUrl };
  return {
    getCurrentShare: () => n,
    getOrCreateShare: i,
    saveShareTargets: async (e, t) => {
      let r = await i(),
        a = await t(r.remotePluginId, e);
      return ((n = { ...r, sharePrincipals: a }), a);
    },
  };
}
function Ct({ pluginShareUrl: e, shareContext: t, savedShareUrl: n, configuredShareUrl: r }) {
  let i = e ?? t?.shareUrl ?? n ?? r;
  return i == null ? null : Y(i);
}
function Y(e) {
  return e;
}
async function wt({ pluginPath: e, remotePluginId: t, savePluginShare: n }) {
  let r = await n(
    t == null ? { pluginPath: e, discoverability: `PRIVATE` } : { pluginPath: e, remotePluginId: t },
  );
  return { ...r, shareUrl: Y(r.shareUrl) };
}
function Tt() {
  return (Tt = e(() => {}))();
}
async function Et(e, t, n, r) {
  if (e.get(U) !== n) return;
  let i = e.get(Ue);
  try {
    let a, o;
    t.pluginId.startsWith(`plugin_asdk_app_`) &&
      (o = Ee.safeGet(`/sites/mcp/plugins/{plugin_id}/sharing-info`, {
        additionalHeaders: { "ChatGPT-Account-Id": n, "x-openai-use-sheep": `1` },
        parameters: { path: { plugin_id: t.pluginId } },
        expectedErrorStatuses: [403, 404],
      }).then(
        (e) => {
          a = e.project_id;
        },
        () => {},
      ));
    let s = r ?? (await e.query.getOrFetch(q, { accountId: n, pluginId: t.pluginId }));
    if (s == null) return;
    if (s.principals == null) throw Error(`Plugin share principals are unavailable`);
    e.get(ye, n) && (await e.query.fetch($e, n));
    let { PluginShareDialog: c } = await S(
      async () => {
        let { PluginShareDialog: e } = await import(`./plugin-share-dialog-a4ba3bc3f7f9.js`);
        return { PluginShareDialog: e };
      },
      __vite__mapDeps([
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29,
      ]),
      import.meta.url,
    );
    if (e.get(U) !== n) return;
    ue(e, c, {
      enforceAccessPermissions: !0,
      siteSharingReady: o,
      getSiteProjectId: () => (e.get(U) === n ? a : void 0),
      pluginDisplayName: t.pluginDisplayName,
      canShareToWorkspace: s.can_share_to_workspace ?? null,
      initialCanPublishToWorkspace: s.can_publish_to_workspace,
      initialDiscoverability: s.discoverability,
      sourceGizmoId: t.sourceGizmoId,
      initialSharePrincipals: s.principals.map((e) => ({ ...e, role: e.role ?? `reader` })),
      onCopyLink: async () => {
        let r =
          e.get(U) === n &&
          (await M(
            Y(
              t.shareUrl ??
                new URL(`/plugins/${encodeURIComponent(t.pluginId)}?open_in_app`, `https://chatgpt.com/codex`)
                  .href,
            ),
          ));
        return (
          r ||
            e
              .get(w)
              .danger(
                i.formatMessage({
                  id: `plugins.detail.copyShareLinkError`,
                  defaultMessage: `Couldn't copy share link`,
                  description: `Error shown when copying a plugin share link fails`,
                }),
                { errorAnalytics: { toastId: `plugins.detail.copyShareLinkError` } },
              ),
          { didCopy: r }
        );
      },
      onSaveShareTargets: async (r, a) => {
        try {
          if (e.get(U) !== n) throw Error(`The plugin sharing account changed`);
          let i = await Fe.safePut(`/ps/plugins/{plugin_id}/shares`, {
            surface: `plugin_management`,
            additionalHeaders: { "ChatGPT-Account-Id": n },
            parameters: { path: { plugin_id: t.pluginId } },
            requestBody: {
              targets: r,
              discoverability:
                a ?? (r.some((e) => e.principal_type === `workspace`) ? `UNLISTED` : `PRIVATE`),
            },
            expectedErrorStatuses: [400, 403, 404, 409, 422],
          });
          return (
            await nt(e.queryClient),
            e.query.setData(q, { accountId: n, pluginId: t.pluginId }, { ...s, ...i }),
            { principals: i.principals.map((e) => ({ ...e, role: e.role ?? `reader` })) }
          );
        } catch (t) {
          throw (
            e
              .get(w)
              .danger(
                i.formatMessage({
                  id: `plugins.management.shareFailed`,
                  defaultMessage: `Couldn't save plugin sharing. Try again`,
                  description: `Error after changing plugin sharing permissions fails`,
                }),
                { errorAnalytics: { toastId: `plugins.management.shareFailed` } },
              ),
            t
          );
        }
      },
    });
    let l;
    l = e.watch((e) => {
      pe(e, c) ? e.get(U) !== n && (Ce(e, c), l?.()) : l?.();
    });
  } catch {
    e.get(U) === n &&
      e
        .get(w)
        .danger(
          i.formatMessage({
            id: `plugins.detail.loadSharingError`,
            defaultMessage: `Couldn't load plugin sharing`,
            description: `Error shown when plugin sharing settings cannot load`,
          }),
          { errorAnalytics: { toastId: `plugins.detail.loadSharingError` } },
        );
  }
}
function Dt() {
  return (Dt = e(() => {
    (N(), Pe(), je(), ie(), O(), De(), J(), rt(), Ze(), E(), Je(), j());
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(33),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ isWorkspacePlugin: r, ownership: i, shareContext: o, ...a } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let c = l(n),
    { accountId: u, userId: f } = Ge(),
    p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = { preview: !1 }), (t[5] = p)) : (p = t[5]);
  let { data: m } = oe(void 0, p),
    h = Ve(`782250190`),
    g = m?.id === u && m?.structure === `workspace`,
    v =
      i?.creatorAccountUserId == null
        ? o?.creatorAccountUserId != null &&
          (o.creatorAccountUserId === m?.account_user_id || o.creatorAccountUserId === f)
        : i.creatorAccountUserId === (i.scope === `USER` ? f : m?.account_user_id),
    y;
  t[6] !== u || t[7] !== a.pluginId
    ? ((y = { accountId: u, pluginId: a.pluginId }), (t[6] = u), (t[7] = a.pluginId), (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] === g ? (b = t[10]) : ((b = { enabled: g }), (t[9] = g), (t[10] = b));
  let { data: x, isLoading: S, isError: C, refetch: w } = ee(q, y, b),
    T;
  t[11] !== h || t[12] !== v || t[13] !== g || t[14] !== r || t[15] !== x
    ? ((T =
        g &&
        x != null &&
        (v || ut(x)) &&
        (h || (r && x.discoverability === `LISTED`)) &&
        (x.can_share_to_workspace === !0 || (r && x.can_publish_to_workspace))),
      (t[11] = h),
      (t[12] = v),
      (t[13] = g),
      (t[14] = r),
      (t[15] = x),
      (t[16] = T))
    : (T = t[16]);
  let E = T,
    D;
  t[17] !== u || t[18] !== E || t[19] !== a || t[20] !== c || t[21] !== x
    ? ((D = {
        mutationFn: async () => {
          E && x != null && u != null && (await Et(c, a, u, x));
        },
      }),
      (t[17] = u),
      (t[18] = E),
      (t[19] = a),
      (t[20] = c),
      (t[21] = x),
      (t[22] = D))
    : (D = t[22]);
  let { mutate: O, isPending: k } = d(D);
  if (!g) return null;
  if (S) {
    let e;
    return (
      t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(`span`, { hidden: !0, "data-plugin-share-loading": !0 })), (t[23] = e))
        : (e = t[23]),
      e
    );
  }
  if (C) {
    let e;
    t[24] === w
      ? (e = t[25])
      : ((e = (e) => {
          (e.preventDefault(), w());
        }),
        (t[24] = w),
        (t[25] = e));
    let n;
    t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, X.jsx)(s, {
          id: `plugins.management.retry`,
          defaultMessage: `Couldn't load controls. Retry`,
          description: `Retry loading the plugin management permissions`,
        })),
        (t[26] = n))
      : (n = t[26]);
    let r;
    return (
      t[27] === e
        ? (r = t[28])
        : ((r = (0, X.jsx)(_.Item, { onSelect: e, children: n })), (t[27] = e), (t[28] = r)),
      r
    );
  }
  let A;
  return (
    t[29] !== E || t[30] !== k || t[31] !== O
      ? ((A = E
          ? (0, X.jsx)(_.Item, {
              leftIcon: (0, X.jsx)(I, {}),
              disabled: k,
              onSelect: () => O(),
              children: (0, X.jsx)(s, {
                id: `plugins.management.shareMenuItem`,
                defaultMessage: `Share`,
                description: `Open sharing permissions for a hosted plugin`,
              }),
            })
          : null),
        (t[29] = E),
        (t[30] = k),
        (t[31] = O),
        (t[32] = A))
      : (A = t[32]),
    A
  );
}
var kt, X;
function Z() {
  return (Z = e(() => {
    ((kt = P()), c(), p(), D(), Me(), V(), t(), h(), J(), F(), Ae(), Dt(), (X = L()));
  }))();
}
function At(e) {
  let t = (0, Mt.c)(55),
    { manageTo: r, menuVariant: a, hostId: c, isDisabledByAdmin: d, plugin: f, onManage: p } = e,
    m = l(n),
    h = i(),
    g = te(),
    { source: _, searchQueryNormalized: v } = we(),
    y;
  t[0] === c ? (y = t[1]) : ((y = { hostId: c }), (t[0] = c), (t[1] = y));
  let { pendingUninstallPluginId: b, uninstallPlugin: x } = re(y),
    S;
  t[2] === f.plugin ? (S = t[3]) : ((S = Ye(f.plugin)), (t[2] = f.plugin), (t[3] = S));
  let C = S,
    w;
  t[4] === f ? (w = t[5]) : ((w = le(f)), (t[4] = f), (t[5] = w));
  let T = w,
    E = b === f.plugin.id,
    D = f.plugin.remotePluginId ?? f.plugin.shareContext?.remotePluginId,
    O = ee(et, c),
    k;
  t[6] !== O || t[7] !== c || t[8] !== f
    ? ((k = O ? We(f, c) : null), (t[6] = O), (t[7] = c), (t[8] = f), (t[9] = k))
    : (k = t[9]);
  let A = k,
    j;
  t[10] !== c || t[11] !== f.requiresLocalExecutor
    ? ((j = me(c, f.requiresLocalExecutor)), (t[10] = c), (t[11] = f.requiresLocalExecutor), (t[12] = j))
    : (j = t[12]);
  let M = j,
    N;
  t[13] !== M || t[14] !== D
    ? ((N = M && D != null ? ve(D) : null), (t[13] = M), (t[14] = D), (t[15] = N))
    : (N = t[15]);
  let P = N ?? A,
    F = P ?? r,
    I;
  t[16] !== P || t[17] !== h || t[18] !== p
    ? ((I = P == null ? p : () => void h(P)), (t[16] = P), (t[17] = h), (t[18] = p), (t[19] = I))
    : (I = t[19]);
  let L;
  t[20] !== d || t[21] !== M || t[22] !== f.plugin || t[23] !== T || t[24] !== m || t[25] !== _ || t[26] !== g
    ? ((L =
        f.plugin.enabled && !d && !M
          ? () => {
              (Qe(m, {
                plugin: f.plugin,
                source: _,
                surface: u.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                target: o.CODEX_PLUGIN_CLICK_TARGET_TRY_IN_TASK,
              }),
                g({
                  activeProject: be(m.get(xe)),
                  prefillPrompt: Re({
                    defaultPrompt: Xe(f.plugin.interface?.defaultPrompt),
                    pluginDisplayName: T,
                    pluginId: f.plugin.id,
                  }),
                  startInSidebar: !0,
                }));
            }
          : void 0),
      (t[20] = d),
      (t[21] = M),
      (t[22] = f.plugin),
      (t[23] = T),
      (t[24] = m),
      (t[25] = _),
      (t[26] = g),
      (t[27] = L))
    : (L = t[27]);
  let R;
  t[28] !== f || t[29] !== T || t[30] !== m || t[31] !== v || t[32] !== _ || t[33] !== x
    ? ((R = ke(f.plugin.id)
        ? void 0
        : () => {
            x({
              marketplaceAnalytics: {
                chatgpt: lt(
                  m,
                  v
                    ? fe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY_SEARCH
                    : fe.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
                ),
                plugin: f.plugin,
                source: _,
                surface: u.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
              },
              marketplaceName: f.marketplaceName,
              pluginDisplayName: T,
              pluginId: f.plugin.id,
              pluginName: f.plugin.name,
              requestPluginId: ne(f),
            }).catch(jt);
          }),
      (t[28] = f),
      (t[29] = T),
      (t[30] = m),
      (t[31] = v),
      (t[32] = _),
      (t[33] = x),
      (t[34] = R))
    : (R = t[34]);
  let z;
  t[35] !== C || t[36] !== f.plugin.installPolicySource
    ? ((z = C
        ? (0, Q.jsx)(ct, { source: f.plugin.installPolicySource })
        : (0, Q.jsx)(s, {
            id: `plugins.card.uninstallMenuItem`,
            defaultMessage: `Uninstall`,
            description: `Menu item label for uninstalling a plugin from a plugin card`,
          })),
      (t[35] = C),
      (t[36] = f.plugin.installPolicySource),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] !== f.ownership ||
  t[39] !== f.plugin.shareContext ||
  t[40] !== f.plugin.source.type ||
  t[41] !== f.servicePlugin ||
  t[42] !== T ||
  t[43] !== D
    ? ((B =
        f.plugin.source.type === `remote` && D != null
          ? (0, Q.jsx)(Ot, {
              pluginId: D,
              pluginDisplayName: T,
              ownership: f.ownership ?? null,
              shareContext: f.plugin.shareContext,
              isWorkspacePlugin:
                f.servicePlugin == null
                  ? f.plugin.shareContext != null
                  : f.servicePlugin.scope === `WORKSPACE`,
              shareUrl: f.servicePlugin?.share_url ?? f.plugin.shareContext?.shareUrl ?? null,
              sourceGizmoId:
                f.servicePlugin?.scope === `WORKSPACE` ? (f.servicePlugin.source_gizmo_id ?? void 0) : void 0,
            })
          : null),
      (t[38] = f.ownership),
      (t[39] = f.plugin.shareContext),
      (t[40] = f.plugin.source.type),
      (t[41] = f.servicePlugin),
      (t[42] = T),
      (t[43] = D),
      (t[44] = B))
    : (B = t[44]);
  let V;
  return (
    t[45] !== C ||
    t[46] !== E ||
    t[47] !== a ||
    t[48] !== R ||
    t[49] !== z ||
    t[50] !== B ||
    t[51] !== F ||
    t[52] !== I ||
    t[53] !== L
      ? ((V = (0, Q.jsx)(at, {
          menuVariant: a,
          isUninstallDisabled: C,
          isUninstalling: E,
          manageTo: F,
          onManage: I,
          onTryInChat: L,
          onUninstall: R,
          uninstallMenuLabel: z,
          children: B,
        })),
        (t[45] = C),
        (t[46] = E),
        (t[47] = a),
        (t[48] = R),
        (t[49] = z),
        (t[50] = B),
        (t[51] = F),
        (t[52] = I),
        (t[53] = L),
        (t[54] = V))
      : (V = t[54]),
    V
  );
}
function jt() {}
var Mt, Q;
function $() {
  return ($ = e(() => {
    ((Mt = P()),
      Ke(),
      m(),
      p(),
      he(),
      D(),
      x(),
      se(),
      st(),
      B(),
      F(),
      ze(),
      Z(),
      it(),
      Le(),
      tt(),
      ce(),
      R(),
      ot(),
      ge(),
      Oe(),
      Se(),
      (Q = L()));
  }))();
}
export {
  St as a,
  wt as c,
  xt as d,
  J as f,
  pt as h,
  Z as i,
  dt as l,
  _t as m,
  $ as n,
  Ct as o,
  ft as p,
  Ot as r,
  Tt as s,
  At as t,
  ht as u,
};
//# sourceMappingURL=installed-plugin-actions-f3c2b3a965d4.js.map
