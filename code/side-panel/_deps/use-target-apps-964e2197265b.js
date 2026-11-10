import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  B6t as i,
  C1 as a,
  Cen as o,
  D1 as s,
  E1 as c,
  O1 as l,
  O3t as u,
  Opn as d,
  QXt as f,
  S3t as p,
  Sen as m,
  Spn as h,
  TJt as g,
  X4t as _,
  Y4t as v,
  gRt as y,
  hz as b,
  jXt as x,
  kXt as S,
  kmn as C,
  mz as w,
  n4t as T,
  nZt as E,
  s3t as D,
  w1 as O,
  wJt as k,
  xRt as A,
} from "./app-initial-f094ef01c64d.js";
import { n as j, t as M } from "./codex-analytics-attribution-fe4d0bf2f484.js";
async function N({ params: e, queryClient: t, queryKey: n, signal: r }) {
  let i = w.openIn,
    a = await l(e, r);
  return r?.aborted
    ? a
    : (t.setQueryData(n, a),
      await Promise.all(
        a.targets.map(async (e) => {
          let a;
          try {
            a = (await v(i.detectTarget({ target: e.target }), r)).available;
          } catch {
            P(t, n, e.id, r, { available: !1, resolvedIcon: null });
            return;
          }
          if (
            (P(t, n, e.id, r, { available: a, ...(a ? {} : { resolvedIcon: null }) }),
            !(!a || r?.aborted))
          )
            try {
              let { icon: a } = await v(i.loadTargetIcon({ target: e.target }), r);
              P(t, n, e.id, r, { resolvedIcon: a });
            } catch {
              P(t, n, e.id, r, { resolvedIcon: null });
            }
        }),
      ),
      t.getQueryData(n) ?? a);
}
function P(e, t, n, r, i) {
  r?.aborted ||
    e.setQueryData(t, (e) => {
      if (e == null) return e;
      let t = e.targets.map((e) => (e.id === n ? { ...e, ...i } : e));
      return {
        ...e,
        availableTargets: t.flatMap((e) => (e.available ? [e.target] : [])),
        targets: t,
      };
    });
}
var F = e(() => {
  (c(), b(), _());
});
function I(e) {
  let t = (0, W.c)(29),
    { turnId: n, cwd: r, deferEnrichment: i, hostId: a, openPath: o } = e,
    s = i !== void 0 && i,
    c;
  t[0] !== r || t[1] !== s || t[2] !== a || t[3] !== o
    ? ((c = { cwd: r, hostId: a, isQueryEnabled: s, openPath: o, deferEnrichment: s }),
      (t[0] = r),
      (t[1] = s),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c))
    : (c = t[4]);
  let { data: l, isFetching: u } = B(c),
    d = l?.targets,
    f;
  t[5] !== r || t[6] !== s || t[7] !== a || t[8] !== o || t[9] !== d || t[10] !== n
    ? ((f = { turnId: n, cwd: r, deferEnrichment: s, hostId: a, openPath: o, targets: d }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = a),
      (t[8] = o),
      (t[9] = d),
      (t[10] = n),
      (t[11] = f))
    : (f = t[11]);
  let p = z(f),
    m;
  t[12] !== r || t[13] !== a || t[14] !== o
    ? ((m = R({ cwd: r, hostId: a, openPath: o })),
      (t[12] = r),
      (t[13] = a),
      (t[14] = o),
      (t[15] = m))
    : (m = t[15]);
  let h = m,
    g = l?.preferredTarget ?? null,
    _;
  t[16] === l?.targets ? (_ = t[17]) : ((_ = l?.targets ?? []), (t[16] = l?.targets), (t[17] = _));
  let v;
  t[18] === l?.availableTargets
    ? (v = t[19])
    : ((v = l?.availableTargets ?? []), (t[18] = l?.availableTargets), (t[19] = v));
  let y = l?.mode,
    b = l != null,
    x;
  return (
    t[20] !== h ||
    t[21] !== u ||
    t[22] !== p ||
    t[23] !== b ||
    t[24] !== g ||
    t[25] !== _ ||
    t[26] !== v ||
    t[27] !== y
      ? ((x = {
          canLoadTargets: h,
          preferredTarget: g,
          targets: _,
          availableTargets: v,
          mode: y,
          hasLoadedTargets: b,
          isLoadingTargets: u,
          open: p,
        }),
        (t[20] = h),
        (t[21] = u),
        (t[22] = p),
        (t[23] = b),
        (t[24] = g),
        (t[25] = _),
        (t[26] = v),
        (t[27] = y),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function L(e) {
  let t = (0, W.c)(25),
    { cwd: n, delayMs: r, hostId: i, openPath: a } = e,
    o = r === void 0 ? 0 : r,
    s;
  t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = R({ cwd: n, hostId: i, openPath: a })), (t[0] = n), (t[1] = i), (t[2] = a), (t[3] = s))
    : (s = t[3]);
  let c = s,
    l = o <= 0,
    u;
  t[4] !== n || t[5] !== i || t[6] !== a || t[7] !== l
    ? ((u = { cwd: n, hostId: i, isQueryEnabled: l, openPath: a }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = u))
    : (u = t[8]);
  let { data: d, refetch: f } = B(u),
    p;
  t[9] === f
    ? (p = t[10])
    : ((p = () => {
        f();
      }),
      (t[9] = f),
      (t[10] = p));
  let m = (0, G.useEffectEvent)(p),
    h;
  t[11] !== c || t[12] !== d || t[13] !== o || t[14] !== m || t[15] !== l
    ? ((h = () => {
        if (l || !c || d != null) return;
        let e = window.setTimeout(m, o);
        return () => {
          window.clearTimeout(e);
        };
      }),
      (t[11] = c),
      (t[12] = d),
      (t[13] = o),
      (t[14] = m),
      (t[15] = l),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== c ||
    t[18] !== n ||
    t[19] !== d ||
    t[20] !== o ||
    t[21] !== i ||
    t[22] !== a ||
    t[23] !== l
      ? ((g = [c, n, d, o, i, a, l]),
        (t[17] = c),
        (t[18] = n),
        (t[19] = d),
        (t[20] = o),
        (t[21] = i),
        (t[22] = a),
        (t[23] = l),
        (t[24] = g))
      : (g = t[24]),
    (0, G.useEffect)(h, g),
    null
  );
}
function R({ cwd: e, hostId: t, openPath: n }) {
  return !!(e ?? n);
}
function z(e) {
  let t = (0, W.c)(12),
    { turnId: r, cwd: i, deferEnrichment: a, hostId: o, openPath: c, targets: l } = e,
    u = n(y),
    f = d(),
    p;
  t[0] !== f || t[1] !== u
    ? ((p = () => {
        u.get(x).danger(
          f.formatMessage({
            id: `localConversation.openTarget.error`,
            defaultMessage: `Unable to open item`,
            description: `Toast shown when opening a file or website externally fails`,
          }),
        );
      }),
      (t[0] = f),
      (t[1] = u),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  return (
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== c ||
    t[7] !== u ||
    t[8] !== m ||
    t[9] !== l ||
    t[10] !== r
      ? ((h = (e, t) => {
          let { appPath: n, openMode: d, persistPreferred: f, line: p, column: h, path: g } = t,
            _ = g ?? c ?? i;
          if (_) {
            if (
              l?.find((t) => t.target === e && (t.appPath ?? null) === (n ?? null))?.kind ===
                `editor` &&
              r != null
            ) {
              let t = u.get(j);
              t != null &&
                u.get(E).submitCodexAnalyticsEvent?.({
                  action: `open_in_ide`,
                  eventKind: `action`,
                  metadata: { target: e },
                  threadId: t.threadId,
                  turnId: r,
                });
            }
            (f &&
              i &&
              u.query.setData(
                s,
                { cwd: i, hostId: o, path: c, ...(a ? { deferEnrichment: !0 } : {}) },
                (t) =>
                  t && {
                    ...t,
                    preferredTarget: e,
                    targets: t.targets.map((t) => ({ ...t, default: t.target === e || void 0 })),
                  },
              ),
              u.get(O).mutate(
                {
                  path: _,
                  cwd: i ?? null,
                  target: e,
                  appPath: n,
                  line: p,
                  column: h,
                  openMode: d,
                  ...(f && i ? { persistPreferredTargetPath: i } : {}),
                  hostId: o,
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
        (t[5] = o),
        (t[6] = c),
        (t[7] = u),
        (t[8] = m),
        (t[9] = l),
        (t[10] = r),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
function B(e) {
  let t = (0, W.c)(20),
    { cwd: r, deferEnrichment: i, hostId: a, isQueryEnabled: o, openPath: c } = e,
    l = i !== void 0 && i,
    u = n(y),
    d,
    f;
  t[0] !== r || t[1] !== l || t[2] !== a || t[3] !== c || t[4] !== u.query
    ? ((d = { cwd: r, hostId: a, path: c, ...(l ? { deferEnrichment: !0 } : {}) }),
      (f = u.query.getOptions(s, d)),
      (t[0] = r),
      (t[1] = l),
      (t[2] = a),
      (t[3] = c),
      (t[4] = u.query),
      (t[5] = d),
      (t[6] = f))
    : ((d = t[5]), (f = t[6]));
  let m = f,
    h;
  t[7] !== d || t[8] !== m || t[9] !== u.queryClient
    ? ((h = (e) => {
        let { signal: t } = e;
        return V({ params: d, queryClient: u.queryClient, queryKey: m.queryKey, signal: t });
      }),
      (t[7] = d),
      (t[8] = m),
      (t[9] = u.queryClient),
      (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== r || t[12] !== a || t[13] !== o || t[14] !== c
    ? ((g = R({ cwd: r, hostId: a, openPath: c }) && o),
      (t[11] = r),
      (t[12] = a),
      (t[13] = o),
      (t[14] = c),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== m || t[17] !== h || t[18] !== g
      ? ((_ = { ...m, queryFn: h, enabled: g, staleTime: k.ONE_MINUTE }),
        (t[16] = m),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    p(_)
  );
}
async function V({ params: e, queryClient: t, queryKey: n, signal: r }) {
  if (e.deferEnrichment) return N({ params: e, queryClient: t, queryKey: n, signal: r });
  if (U(e.hostId) && H(e.path)) {
    let i = await l({ ...e, nativeBrowserDiscovery: `known` }, r);
    i.targets.some((e) => e.kind === `native` && e.appPath != null) && t.setQueryData(n, i);
  }
  return l(e, r);
}
function H(e) {
  if (e == null) return !1;
  if (m(e) || o(e)) return !0;
  try {
    let t = new URL(e);
    return t.protocol === `http:` || t.protocol === `https:`;
  } catch {
    return !1;
  }
}
function U(e) {
  return e == null || e === `local`;
}
var W,
  G,
  K = e(() => {
    ((W = C()), D(), u(), i(), (G = t(r(), 1)), h(), S(), c(), a(), M(), f(), A(), T(), g(), F());
  });
export { K as n, I as r, L as t };
//# sourceMappingURL=use-target-apps-964e2197265b.js.map
