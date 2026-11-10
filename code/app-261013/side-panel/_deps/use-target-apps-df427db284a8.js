import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fat as t,
  Ixt as n,
  Kat as r,
  Pat as i,
  Pxt as a,
  VDt as o,
  Xot as s,
  Yot as c,
  dht as l,
  hot as u,
  jDt as d,
  lot as f,
  oot as p,
  qat as m,
  rst as h,
  uht as g,
  vzt as _,
  yzt as v,
  znt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as b,
  Iwr as x,
  XDr as S,
  _Vt as C,
  cHt as w,
  eOr as T,
  gwr as E,
  oHt as D,
  qwr as O,
  sHt as k,
  vVt as A,
  vwr as j,
} from "./app-initial-5851df3f6cb1.js";
import { n as M, t as N } from "./codex-analytics-attribution-da3e14c84e21.js";
async function P({ params: e, queryClient: t, queryKey: n, signal: i }) {
  let a = r.openIn,
    o = await w(e, i);
  return i?.aborted
    ? o
    : (t.setQueryData(n, o),
      await Promise.all(
        o.targets.map(async (e) => {
          let r;
          try {
            r = (await y(a.detectTarget({ target: e.target }), i)).available;
          } catch {
            F(t, n, e.id, i, { available: !1, resolvedIcon: null });
            return;
          }
          if ((F(t, n, e.id, i, { available: r, ...(r ? {} : { resolvedIcon: null }) }), r && !i?.aborted))
            try {
              let { icon: r } = await y(a.loadTargetIcon({ target: e.target }), i);
              F(t, n, e.id, i, { resolvedIcon: r });
            } catch {
              F(t, n, e.id, i, { resolvedIcon: null });
            }
        }),
      ),
      t.getQueryData(n) ?? o);
}
function F(e, t, n, r, i) {
  r?.aborted ||
    e.setQueryData(t, (e) => {
      if (e == null) return e;
      let t = e.targets.map((e) => (e.id === n ? { ...e, ...i } : e));
      return { ...e, availableTargets: t.flatMap((e) => (e.available ? [e.target] : [])), targets: t };
    });
}
function I() {
  return (I = e(() => {
    (D(), m());
  }))();
}
function L(e) {
  let t = (0, G.c)(30),
    { turnId: n, cwd: r, deferEnrichment: i, getOpenPath: a, hostId: o, openPath: s } = e,
    c = i !== void 0 && i,
    l;
  t[0] !== r || t[1] !== c || t[2] !== a || t[3] !== o || t[4] !== s
    ? ((l = { cwd: r, hostId: o, isQueryEnabled: c, getOpenPath: a, openPath: s, deferEnrichment: c }),
      (t[0] = r),
      (t[1] = c),
      (t[2] = a),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let { data: u, isFetching: d } = V(l),
    f = u?.targets,
    p;
  t[6] !== r || t[7] !== c || t[8] !== o || t[9] !== s || t[10] !== f || t[11] !== n
    ? ((p = { turnId: n, cwd: r, deferEnrichment: c, hostId: o, openPath: s, targets: f }),
      (t[6] = r),
      (t[7] = c),
      (t[8] = o),
      (t[9] = s),
      (t[10] = f),
      (t[11] = n),
      (t[12] = p))
    : (p = t[12]);
  let m = B(p),
    h;
  t[13] !== r || t[14] !== o || t[15] !== s
    ? ((h = z({ cwd: r, hostId: o, openPath: s })), (t[13] = r), (t[14] = o), (t[15] = s), (t[16] = h))
    : (h = t[16]);
  let g = h,
    _ = u?.preferredTarget ?? null,
    v;
  t[17] === u?.targets ? (v = t[18]) : ((v = u?.targets ?? []), (t[17] = u?.targets), (t[18] = v));
  let y;
  t[19] === u?.availableTargets
    ? (y = t[20])
    : ((y = u?.availableTargets ?? []), (t[19] = u?.availableTargets), (t[20] = y));
  let b = u?.mode,
    x = u != null,
    S;
  return (
    t[21] !== g ||
    t[22] !== d ||
    t[23] !== m ||
    t[24] !== x ||
    t[25] !== _ ||
    t[26] !== v ||
    t[27] !== y ||
    t[28] !== b
      ? ((S = {
          canLoadTargets: g,
          preferredTarget: _,
          targets: v,
          availableTargets: y,
          mode: b,
          hasLoadedTargets: x,
          isLoadingTargets: d,
          open: m,
        }),
        (t[21] = g),
        (t[22] = d),
        (t[23] = m),
        (t[24] = x),
        (t[25] = _),
        (t[26] = v),
        (t[27] = y),
        (t[28] = b),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function R(e) {
  let t = (0, G.c)(26),
    { cwd: n, delayMs: r, getOpenPath: i, hostId: a, openPath: o } = e,
    s = r === void 0 ? 0 : r,
    c;
  t[0] !== n || t[1] !== a || t[2] !== o
    ? ((c = z({ cwd: n, hostId: a, openPath: o })), (t[0] = n), (t[1] = a), (t[2] = o), (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = s <= 0,
    d;
  t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== o || t[8] !== u
    ? ((d = { cwd: n, hostId: a, isQueryEnabled: u, getOpenPath: i, openPath: o }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = a),
      (t[7] = o),
      (t[8] = u),
      (t[9] = d))
    : (d = t[9]);
  let { data: f, refetch: p } = V(d),
    m;
  t[10] === p
    ? (m = t[11])
    : ((m = () => {
        p();
      }),
      (t[10] = p),
      (t[11] = m));
  let h = (0, K.useEffectEvent)(m),
    g;
  t[12] !== l || t[13] !== f || t[14] !== s || t[15] !== h || t[16] !== u
    ? ((g = () => {
        if (u || !l || f != null) return;
        let e = window.setTimeout(h, s);
        return () => {
          window.clearTimeout(e);
        };
      }),
      (t[12] = l),
      (t[13] = f),
      (t[14] = s),
      (t[15] = h),
      (t[16] = u),
      (t[17] = g))
    : (g = t[17]);
  let _;
  return (
    t[18] !== l || t[19] !== n || t[20] !== f || t[21] !== s || t[22] !== a || t[23] !== o || t[24] !== u
      ? ((_ = [l, n, f, s, a, o, u]),
        (t[18] = l),
        (t[19] = n),
        (t[20] = f),
        (t[21] = s),
        (t[22] = a),
        (t[23] = o),
        (t[24] = u),
        (t[25] = _))
      : (_ = t[25]),
    (0, K.useEffect)(g, _),
    null
  );
}
function z({ cwd: e, hostId: t, openPath: n }) {
  return !!(e ?? n);
}
function B(e) {
  let t = (0, G.c)(12),
    { turnId: r, cwd: i, deferEnrichment: a, hostId: s, openPath: c, targets: l } = e,
    d = n(E),
    f = o(),
    p;
  t[0] !== f || t[1] !== d
    ? ((p = () => {
        d.get(u).danger(
          f.formatMessage({
            id: `localConversation.openTarget.error`,
            defaultMessage: `Unable to open item`,
            description: `Toast shown when opening a file or website externally fails`,
          }),
          { errorAnalytics: { toastId: `localConversation.openTarget.error` } },
        );
      }),
      (t[0] = f),
      (t[1] = d),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  return (
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== d ||
    t[8] !== m ||
    t[9] !== l ||
    t[10] !== r
      ? ((h = (e, t) => {
          let {
              appPath: n,
              environmentId: o,
              openMode: u,
              persistPreferred: f,
              line: p,
              column: h,
              path: g,
            } = t,
            _ = g ?? c ?? i;
          if (_) {
            if (
              l?.find((t) => t.target === e && (t.appPath ?? null) === (n ?? null))?.kind === `editor` &&
              r != null
            ) {
              let t = d.get(M);
              t != null &&
                d
                  .get(T)
                  .submitCodexAnalyticsEvent?.({
                    action: `open_in_ide`,
                    eventKind: `action`,
                    metadata: { target: e },
                    threadId: t.threadId,
                    turnId: r,
                  });
            }
            (f &&
              i &&
              d.query.setData(
                k,
                { cwd: i, hostId: s, path: c, ...(a ? { deferEnrichment: !0 } : {}) },
                (t) =>
                  t && {
                    ...t,
                    preferredTarget: e,
                    targets: t.targets.map((t) => ({ ...t, default: t.target === e || void 0 })),
                  },
              ),
              d.get(A).mutate(
                {
                  recentFilesThreadId: d.getOwnValue(x).clientThreadId,
                  path: _,
                  conversationId: j(d.value) ?? void 0,
                  environmentId: o,
                  cwd: i ?? null,
                  target: e,
                  appPath: n,
                  line: p,
                  column: h,
                  openMode: u,
                  ...(f && i ? { persistPreferredTargetPath: i } : {}),
                  hostId: s,
                },
                {
                  onSuccess: (e) => {
                    e.success || m();
                  },
                  onError: m,
                },
              ));
          }
        }),
        (t[3] = i),
        (t[4] = a),
        (t[5] = s),
        (t[6] = c),
        (t[7] = d),
        (t[8] = m),
        (t[9] = l),
        (t[10] = r),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
function V(e) {
  let t = (0, G.c)(21),
    { cwd: r, deferEnrichment: a, getOpenPath: o, hostId: c, isQueryEnabled: l, openPath: u } = e,
    d = a !== void 0 && a,
    f = n(E),
    p,
    m;
  t[0] !== r || t[1] !== d || t[2] !== c || t[3] !== u || t[4] !== f.query
    ? ((p = { cwd: r, hostId: c, path: u, ...(d ? { deferEnrichment: !0 } : {}) }),
      (m = f.query.getOptions(k, p)),
      (t[0] = r),
      (t[1] = d),
      (t[2] = c),
      (t[3] = u),
      (t[4] = f.query),
      (t[5] = p),
      (t[6] = m))
    : ((p = t[5]), (m = t[6]));
  let h = m,
    g;
  t[7] !== o || t[8] !== p || t[9] !== h || t[10] !== f.queryClient
    ? ((g = async (e) => {
        let { signal: t } = e;
        return H({
          params: o == null ? p : { ...p, path: await o() },
          queryClient: f.queryClient,
          queryKey: h.queryKey,
          signal: t,
        });
      }),
      (t[7] = o),
      (t[8] = p),
      (t[9] = h),
      (t[10] = f.queryClient),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] !== r || t[13] !== c || t[14] !== l || t[15] !== u
    ? ((_ = z({ cwd: r, hostId: c, openPath: u }) && l),
      (t[12] = r),
      (t[13] = c),
      (t[14] = l),
      (t[15] = u),
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== h || t[18] !== g || t[19] !== _
      ? ((v = { ...h, queryFn: g, enabled: _, staleTime: i.ONE_MINUTE }),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    s(v)
  );
}
async function H({ params: e, queryClient: t, queryKey: n, signal: r }) {
  if (e.deferEnrichment) return P({ params: e, queryClient: t, queryKey: n, signal: r });
  if (W(e.hostId) && U(e.path)) {
    let i = await w({ ...e, nativeBrowserDiscovery: `known` }, r);
    i.targets.some((e) => e.kind === `native` && e.appPath != null) && t.setQueryData(n, i);
  }
  return w(e, r);
}
function U(e) {
  if (e == null) return !1;
  if (g(e) || l(e)) return !0;
  try {
    let t = new URL(e);
    return t.protocol === `http:` || t.protocol === `https:`;
  } catch {
    return !1;
  }
}
function W(e) {
  return e == null || e === `local`;
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = _()), c(), a(), h(), (K = v()), d(), f(), D(), C(), N(), S(), b(), O(), p(), t(), I());
  }))();
}
export { L as i, z as n, q as r, R as t };
//# sourceMappingURL=use-target-apps-df427db284a8.js.map
