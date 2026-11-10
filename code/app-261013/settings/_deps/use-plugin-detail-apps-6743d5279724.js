import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Pxt as t,
  Qot as n,
  Vxt as r,
  Xot as i,
  Yot as a,
  Zot as o,
  nst as s,
  tst as c,
  vzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Aur as u,
  Bur as d,
  C0n as ee,
  C2 as f,
  Fur as p,
  Nur as m,
  Our as h,
  QMr as g,
  T2 as te,
  Udr as ne,
  X1n as re,
  a0n as _,
  f0n as ie,
  fOr as v,
  fur as y,
  hOr as b,
  hjt as x,
  kur as S,
  m0n as C,
  mjt as w,
  p0n as T,
  pur as E,
  s0n as ae,
  tNr as D,
  v0n as oe,
  x0n as O,
  zur as se,
} from "./app-initial-5851df3f6cb1.js";
import { r as k, t as ce } from "./plugin-connected-account-links-8dea8c830000.js";
import { n as le, t as A } from "./first-app-connect-ambient-suggestions-97c2f684e2f1.js";
function j(e) {
  let t = (0, N.c)(11),
    { hostId: a, plugin: o } = e,
    { accountId: c, userId: l } = E(),
    d = r(v),
    f = r(g),
    p = s(),
    _ = u(a),
    y = o?.apps.map(M) ?? [],
    b = !_,
    S;
  t[0] !== a || t[1] !== b
    ? ((S = { enabled: b, hostId: a }), (t[0] = a), (t[1] = b), (t[2] = S))
    : (S = t[2]);
  let { data: w, hardRefetchAppsList: D } = ae(S),
    O = w === void 0 ? [] : w,
    { data: k } = x({ hostId: a, appIds: [...y, ...(o?.appTemplates.map(ue) ?? [])] }),
    A = k === void 0 ? [] : k,
    { data: j } = x({
      hostId: a,
      appIds: o?.summary.installPolicySource === `IMPLICIT_CANONICAL_APP` && y.length === 1 ? y : [],
      includeTools: !0,
    }),
    P = !_,
    F = o?.apps,
    I = o?.summary,
    L;
  t[3] !== a || t[4] !== P || t[5] !== F || t[6] !== I
    ? ((L = { enabled: P, hostId: a, pluginApps: F, pluginSummary: I }),
      (t[3] = a),
      (t[4] = P),
      (t[5] = F),
      (t[6] = I),
      (t[7] = L))
    : (L = t[7]);
  let R = te(L),
    { data: z, error: B, isPending: V } = n(se({ accountId: d, appIds: y, enabled: _ && !f.accountLoading })),
    H = h({ userId: l, accountId: d, appIds: y, enabled: _, linkRefreshStrategy: `NONE` }),
    { data: U, error: W, isPending: de } = i(H),
    G = m({ accountId: c, userId: l, linkRefreshStrategy: `NONE` }),
    {
      data: K,
      error: q,
      isPending: J,
    } = i({
      ...G,
      enabled: _ && !!G.enabled && y.length > 0,
      staleTime: G.staleTime,
      refetchOnWindowFocus: `always`,
    }),
    fe = C({
      connectorMetadata: A,
      directoryApps: O,
      pluginApps: o?.apps ?? [],
      appTemplates: o?.appTemplates ?? [],
    }),
    Y = {
      appTemplates: T({ connectorMetadata: A, directoryApps: O, appTemplates: o?.appTemplates ?? [] }),
      directoryApps: O,
      hasMultipleConnectedAccounts: K == null ? void 0 : o?.apps.some((e) => ce(K, e.id).length > 1),
      links: _ ? K : void 0,
      showInPluginAppList: o == null || ee({ connectorMetadata: j, plugin: o }),
      refresh: async (e) => {
        let { force: t } = e === void 0 ? {} : e,
          n = t !== void 0 && t;
        (y.length !== 0 || n) &&
          (await Promise.all([
            p.invalidateQueries({ queryKey: G.queryKey, exact: !0 }),
            _
              ? Promise.all([p.invalidateQueries({ queryKey: H.queryKey, exact: !0 }), D()])
              : le({ hostId: a, queryClient: p, refreshAppsList: D }),
          ]),
          _ && (await p.invalidateQueries({ queryKey: re })));
      },
    };
  if (!_) return { ...Y, apps: fe, availability: R, connections: void 0, error: null, isLoading: !1 };
  let X =
      U == null || K == null
        ? void 0
        : oe({ appIds: y, appsContent: z ?? void 0, availabilities: U, links: K }),
    pe =
      z == null
        ? []
        : ie({
            appsContent: z,
            connections: X,
            directoryApps: O,
            includeUnavailableApps: U != null && B == null && W == null && q == null,
            pluginApps: o?.apps ?? [],
          }),
    Z = y.length > 0 ? (B ?? W ?? q) : null,
    Q = Object.fromEntries(
      y.map((e) => {
        let t = X?.get(ne(e));
        return t?.isDisabledByAdmin
          ? [e, `disabled-by-admin`]
          : [e, t?.isUnavailable ? `connector-unavailable` : null];
      }),
    ),
    $;
  return (
    t[8] !== R || t[9] !== Q
      ? (($ = { ...R, blockedReasonsByConnectorId: Q }), (t[8] = R), (t[9] = Q), (t[10] = $))
      : ($ = t[10]),
    {
      ...Y,
      apps: pe,
      availability: $,
      connections: X,
      error: Z,
      isLoading: y.length > 0 && Z == null && (V || de || J),
    }
  );
}
function ue(e) {
  return e.canonicalConnectorId ?? e.templateId;
}
function M(e) {
  return e.id;
}
var N;
function P() {
  return (P = e(() => {
    ((N = l()), o(), a(), c(), t(), A(), w(), _(), d(), S(), p(), b(), D(), y(), f(), k(), O());
  }))();
}
export { j as n, P as t };
//# sourceMappingURL=use-plugin-detail-apps-6743d5279724.js.map
