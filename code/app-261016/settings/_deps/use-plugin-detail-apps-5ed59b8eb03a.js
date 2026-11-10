import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Lst as t,
  Mst as n,
  Nst as r,
  PBt as i,
  Pst as ee,
  Rst as a,
  ZSt as o,
  iCt as s,
  jst as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A3n as te,
  Amr as l,
  Bhr as u,
  Emr as d,
  FMr as ne,
  J3n as f,
  J4 as re,
  K3n as ie,
  K4 as p,
  Q3n as ae,
  RMr as m,
  V3n as h,
  VRr as oe,
  bmr as g,
  eOt as _,
  imr as v,
  jmr as y,
  q3n as b,
  r6n as se,
  rmr as x,
  t6n as S,
  tOt as C,
  wLr as w,
  wmr as T,
  xmr as E,
  ymr as D,
  z3n as O,
} from "./app-initial-ad16eaadf81f.js";
import { r as k, t as ce } from "./plugin-connected-account-links-e850d089d83d.js";
import { n as le, t as A } from "./first-app-connect-ambient-suggestions-5d83a2ddd888.js";
function j(e) {
  let t = (0, P.c)(11),
    { hostId: r, plugin: i } = e,
    { accountId: o, userId: c } = v(),
    d = s(ne),
    p = s(oe),
    m = a(),
    g = E(r),
    _ = i?.apps.map(N) ?? [],
    y = !g,
    x;
  t[0] !== r || t[1] !== y
    ? ((x = { enabled: y, hostId: r }), (t[0] = r), (t[1] = y), (t[2] = x))
    : (x = t[2]);
  let { data: S, hardRefetchAppsList: w } = h(x),
    O = S === void 0 ? [] : S,
    { data: k } = C({ hostId: r, appIds: [..._, ...(i?.appTemplates.map(M) ?? [])] }),
    A = k === void 0 ? [] : k,
    { data: j } = C({
      hostId: r,
      appIds: i?.summary.installPolicySource === `IMPLICIT_CANONICAL_APP` && _.length === 1 ? _ : [],
      includeTools: !0,
    }),
    F = !g,
    I = i?.apps,
    L = i?.summary,
    R;
  t[3] !== r || t[4] !== F || t[5] !== I || t[6] !== L
    ? ((R = { enabled: F, hostId: r, pluginApps: I, pluginSummary: L }),
      (t[3] = r),
      (t[4] = F),
      (t[5] = I),
      (t[6] = L),
      (t[7] = R))
    : (R = t[7]);
  let z = re(R),
    { data: B, error: V, isPending: H } = ee(l({ accountId: d, appIds: _, enabled: g && !p.accountLoading })),
    U = D({ userId: c, accountId: d, appIds: _, enabled: g, linkRefreshStrategy: `NONE` }),
    { data: W, error: G, isPending: ue } = n(U),
    K = T({ accountId: o, userId: c, linkRefreshStrategy: `NONE` }),
    {
      data: q,
      error: J,
      isPending: de,
    } = n({
      ...K,
      enabled: g && !!K.enabled && _.length > 0,
      staleTime: K.staleTime,
      refetchOnWindowFocus: `always`,
    }),
    fe = f({
      connectorMetadata: A,
      directoryApps: O,
      pluginApps: i?.apps ?? [],
      appTemplates: i?.appTemplates ?? [],
    }),
    Y = {
      appTemplates: b({ connectorMetadata: A, directoryApps: O, appTemplates: i?.appTemplates ?? [] }),
      directoryApps: O,
      hasMultipleConnectedAccounts: q == null ? void 0 : i?.apps.some((e) => ce(q, e.id).length > 1),
      links: g ? q : void 0,
      showInPluginAppList: i == null || se({ connectorMetadata: j, plugin: i }),
      refresh: async (e) => {
        let { force: t } = e === void 0 ? {} : e,
          n = t !== void 0 && t;
        (_.length !== 0 || n) &&
          (await Promise.all([
            m.invalidateQueries({ queryKey: K.queryKey, exact: !0 }),
            g
              ? Promise.all([m.invalidateQueries({ queryKey: U.queryKey, exact: !0 }), w()])
              : le({ hostId: r, queryClient: m, refreshAppsList: w }),
          ]),
          g && (await m.invalidateQueries({ queryKey: te })));
      },
    };
  if (!g) return { ...Y, apps: fe, availability: z, connections: void 0, error: null, isLoading: !1 };
  let X =
      W == null || q == null
        ? void 0
        : ae({ appIds: _, appsContent: B ?? void 0, availabilities: W, links: q }),
    pe =
      B == null
        ? []
        : ie({
            appsContent: B,
            connections: X,
            directoryApps: O,
            includeUnavailableApps: W != null && V == null && G == null && J == null,
            pluginApps: i?.apps ?? [],
          }),
    Z = _.length > 0 ? (V ?? G ?? J) : null,
    Q = Object.fromEntries(
      _.map((e) => {
        let t = X?.get(u(e));
        return t?.isDisabledByAdmin
          ? [e, `disabled-by-admin`]
          : [e, t?.isUnavailable ? `connector-unavailable` : null];
      }),
    ),
    $;
  return (
    t[8] !== z || t[9] !== Q
      ? (($ = { ...z, blockedReasonsByConnectorId: Q }), (t[8] = z), (t[9] = Q), (t[10] = $))
      : ($ = t[10]),
    {
      ...Y,
      apps: pe,
      availability: $,
      connections: X,
      error: Z,
      isLoading: _.length > 0 && Z == null && (H || ue || de),
    }
  );
}
function M(e) {
  return e.canonicalConnectorId ?? e.templateId;
}
function N(e) {
  return e.id;
}
var P;
function F() {
  return (F = e(() => {
    ((P = i()), r(), c(), t(), o(), A(), _(), O(), y(), g(), d(), m(), w(), x(), p(), k(), S());
  }))();
}
export { j as n, F as t };
//# sourceMappingURL=use-plugin-detail-apps-5ed59b8eb03a.js.map
