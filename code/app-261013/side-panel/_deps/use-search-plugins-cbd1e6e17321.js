import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BSt as n,
  Cot as r,
  Fat as i,
  Ixt as a,
  Mot as o,
  Not as s,
  Pat as c,
  Pxt as l,
  Uot as ee,
  Vxt as u,
  i_t as d,
  iot as te,
  nst as ne,
  rst as f,
  sMt as p,
  tst as m,
  vzt as h,
  wot as re,
  zSt as g,
  zxt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bcr as ie,
  D2 as ae,
  E2 as v,
  Flr as y,
  Gcr as b,
  Hur as x,
  Icr as S,
  Ilr as C,
  Jcr as w,
  Pcr as T,
  Qcr as E,
  Qdr as oe,
  S2 as se,
  Ucr as D,
  Vur as O,
  Wcr as k,
  XPr as ce,
  YPr as le,
  Zdr as A,
  _2 as ue,
  __r as de,
  alr as j,
  c2 as fe,
  e2 as M,
  eDr as N,
  ean as P,
  f2 as F,
  fOr as pe,
  fur as I,
  glr as me,
  hOr as L,
  hlr as R,
  iPr as z,
  l2 as B,
  m_r as V,
  mlr as he,
  mur as ge,
  nFr as _e,
  oFr as H,
  olr as U,
  r2 as ve,
  sPr as W,
  t2 as ye,
  tDr as be,
  tan as xe,
  v8n as G,
} from "./app-initial-5851df3f6cb1.js";
function Se(e) {
  let t = (0, Te.c)(28),
    { directoryTab: n, hostId: i, limit: o, searchTerm: c } = e,
    l = i === void 0 ? te : i,
    ee = o === void 0 ? De : o,
    f = a(r),
    p;
  t[0] === c ? (p = t[1]) : ((p = c.trim()), (t[0] = c), (t[1] = p));
  let m = p,
    h = xe(m, Oe),
    re = ne(),
    g = ge(l);
  u(pe);
  let v = _(_e, l),
    b =
      (me(g?.authMethod ?? null) || g?.authMethod === `apikey`) &&
      v != null &&
      (v === `0.0.0` || d(v, ke) >= 0),
    x = !b,
    S = x && m.length > 0,
    C;
  t[2] === S ? (C = t[3]) : ((C = { enabled: S }), (t[2] = S), (t[3] = C));
  let { data: w, error: T, isLoading: E } = _(ye, l, C),
    D;
  t[4] === l ? (D = t[5]) : ((D = { hostId: l }), (t[4] = l), (t[5] = D));
  let O;
  t[6] === !0 ? (O = t[7]) : ((O = { enabled: !0 }), (t[6] = !0), (t[7] = O));
  let { data: k, error: ce, isLoading: le } = _(de, D, O),
    A = k?.roots,
    j;
  t[8] !== l || t[9] !== A
    ? ((j = { hostId: l, roots: A, productContext: `catalog` }), (t[8] = l), (t[9] = A), (t[10] = j))
    : (j = t[10]);
  let { data: M, error: N, isLoading: P } = ie(j),
    F = oe(),
    { value: I } = be(`1349514884`),
    { hiddenPluginIds: L } = ae(I),
    R = m !== h,
    z = b && m.length > 0 && !R,
    {
      data: B,
      error: V,
      fetchNextPage: H,
      hasNextPage: U,
      isFetchNextPageError: W,
      isFetchingNextPage: G,
      isLoading: Se,
    } = s(
      je({
        appScope: f,
        accountId: null,
        enabled: z,
        hostId: l,
        hostedBrowserPlugins: !1,
        limit: ee,
        queryClient: re,
        roots: k?.roots,
        scope: n == null ? void 0 : Ae[n],
        searchTerm: h,
      }),
    ),
    K = ce ?? N ?? (x ? T : V),
    q = m.length > 0 && ((x && E) || le || P || (b && ((R && B == null) || Se))),
    J;
  t[11] !== H || t[12] !== U || t[13] !== z
    ? ((J = async () => {
        z && U && (await H());
      }),
      (t[11] = H),
      (t[12] = U),
      (t[13] = z),
      (t[14] = J))
    : (J = t[14]);
  let Y = J;
  if (m.length === 0 || q || M == null || (z && B == null && V == null)) {
    let e;
    return (
      t[15] !== K || t[16] !== Y || t[17] !== W || t[18] !== G || t[19] !== q
        ? ((e = {
            data: void 0,
            error: K,
            fetchNextPage: Y,
            hasNextPage: !1,
            isFetchNextPageError: W,
            isFetchingNextPage: G,
            isLoading: q,
          }),
          (t[15] = K),
          (t[16] = Y),
          (t[17] = W),
          (t[18] = G),
          (t[19] = q),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  let X = new Map();
  for (let e of M ?? []) X.set(y(e.plugin), e);
  let Me = x
      ? ue({ plugins: (0, Ee.default)([...(M ?? []), ...(w?.plugins ?? [])], we), query: m })
      : (B ?? []).map(Ce),
    Ne = new Map();
  for (let { plugin: e, pluginServicePlugin: t } of x ? [] : (B ?? [])) t != null && Ne.set(y(e.plugin), t);
  let Z = se(Me, L, F).map((e) => {
      let t = y(e.plugin),
        n = X.get(t) ?? null,
        r = Ne.get(t),
        i = he(e.plugin.remotePluginId ?? e.plugin.shareContext?.remotePluginId ?? e.plugin.id),
        [a, o] = [e.logoPath, e.logoDarkPath].map((e) => (e === i ? null : e));
      return {
        ...(r == null ? ve(e) : fe(r, n)),
        enabled: n?.plugin.enabled ?? e.plugin.enabled,
        installed: n?.plugin.installed ?? e.plugin.installed,
        ...(n == null ? {} : { installedPlugin: n }),
        logoDarkPath: o ?? n?.logoDarkPath ?? e.logoDarkPath,
        logoPath: a ?? n?.logoPath ?? e.logoPath,
      };
    }),
    Q = z && U,
    $;
  return (
    t[21] !== Z || t[22] !== K || t[23] !== Y || t[24] !== W || t[25] !== G || t[26] !== Q
      ? (($ = {
          data: Z,
          error: K,
          fetchNextPage: Y,
          hasNextPage: Q,
          isFetchNextPageError: W,
          isFetchingNextPage: G,
          isLoading: !1,
        }),
        (t[21] = Z),
        (t[22] = K),
        (t[23] = Y),
        (t[24] = W),
        (t[25] = G),
        (t[26] = Q),
        (t[27] = $))
      : ($ = t[27]),
    $
  );
}
function Ce(e) {
  let { plugin: t } = e;
  return t;
}
function we(e) {
  let { plugin: t } = e;
  return y(t);
}
var Te, Ee, De, Oe, ke, Ae, K, je;
function q() {
  return (q = e(() => {
    ((Te = h()),
      g(),
      o(),
      m(),
      (Ee = t(p(), 1)),
      l(),
      f(),
      C(),
      ce(),
      G(),
      L(),
      I(),
      A(),
      R(),
      v(),
      x(),
      F(),
      j(),
      re(),
      V(),
      H(),
      N(),
      i(),
      W(),
      P(),
      B(),
      b(),
      S(),
      M(),
      (De = 50),
      (Oe = 200),
      (ke = `0.147.0-alpha.6`),
      (Ae = { openai: `global`, workspace: `workspace`, personal: `personal` }),
      (K = { global: `GLOBAL`, workspace: `WORKSPACE`, personal: `USER` }),
      (je = ({
        appScope: e,
        accountId: t,
        enabled: r,
        hostId: i,
        hostedBrowserPlugins: a,
        limit: o,
        queryClient: s,
        roots: l,
        scope: u,
        searchTerm: d,
      }) =>
        ee({
          enabled: r,
          getNextPageParam: (e) => e.nextCursor ?? void 0,
          initialPageParam: null,
          placeholderData: a ? (e, n) => (t != null && n?.queryKey.at(-1) === t ? e : void 0) : n,
          queryFn: async ({ pageParam: t, signal: n }) => {
            if (a) {
              let e = await z.safeGet(`/ps/plugins/search`, {
                surface: `plugin_directory`,
                parameters: {
                  query: { q: d, scope: u == null ? void 0 : K[u], limit: o, pageToken: t ?? void 0 },
                },
                additionalHeaders: O(),
                signal: k(n),
              });
              return {
                nextCursor: e.pagination.next_page_token,
                plugins: e.plugins.map((e) => ({ plugin: T(e), pluginServicePlugin: e })),
              };
            }
            let r = await le(e, i).sendRequest(
                `plugin/search`,
                {
                  searchTerm: d,
                  scope: u,
                  ...(l == null || l.length === 0 ? {} : { cwds: l }),
                  cursor: t,
                  limit: o,
                },
                { timeoutMs: D },
              ),
              c = await U({
                hostId: i,
                plugins: E(
                  r.data.map(({ marketplaceName: e, marketplacePath: t, plugin: n }) => ({
                    interface: null,
                    name: e,
                    path: t,
                    plugins: [n],
                  })),
                ),
                queryClient: s,
                signal: k(n),
              });
            return {
              nextCursor: r.nextCursor,
              plugins: c.map((e) => ({ plugin: e, pluginServicePlugin: null })),
            };
          },
          queryKey: [...w, `search`, i, u, d, o, ...(l ?? []), ...(t == null ? [] : [t])],
          retry: !1,
          select: (e) => e.pages.flatMap((e) => e.plugins),
          staleTime: c.ONE_MINUTE,
        })));
  }))();
}
export { Se as n, q as t };
//# sourceMappingURL=use-search-plugins-cbd1e6e17321.js.map
