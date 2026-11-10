import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AGt as n,
  D3t as r,
  DGt as i,
  Dmn as a,
  Dqt as o,
  Drn as s,
  EGt as c,
  EJt as l,
  Eqt as ee,
  KYt as u,
  MGt as d,
  Mrn as f,
  O3t as p,
  OJt as m,
  Omn as h,
  Rqt as g,
  TJt as te,
  Tqt as ne,
  Trn as _,
  _Gt as v,
  _Jt as y,
  a3t as b,
  bqt as x,
  d3t as S,
  e4t as re,
  gJt as ie,
  grn as ae,
  hz as C,
  i3t as w,
  i6t as T,
  kGt as E,
  kmn as oe,
  krn as D,
  mJt as se,
  mrn as ce,
  mz as O,
  o3t as le,
  pJt as k,
  r3t as A,
  rrn as ue,
  s3t as de,
  wJt as j,
} from "./app-initial-f094ef01c64d.js";
function M(e) {
  let t = [];
  for (let [n, r] of Object.entries(e?.browserUse?.origins ?? {})) {
    let e = E(n);
    e != null &&
      r != null &&
      Object.values(r).some((e) => e != null) &&
      t.push({ pattern: e.canonicalPattern, policy: r });
  }
  return t;
}
function N(e) {
  let t = e?.network;
  return (
    t?.domains == null
      ? [
          ...(t?.allowedDomains ?? []).map((e) => [e, `allow`]),
          ...(t?.deniedDomains ?? []).map((e) => [e, `deny`]),
        ]
      : Object.entries(t.domains).flatMap(([e, t]) => (t == null ? [] : [[e, t]]))
  ).flatMap(([e, t]) => {
    let r = n(e);
    return r == null || r.canonicalPattern.length === 0 ? [] : [{ decision: t, pattern: r }];
  });
}
function P(e) {
  if (e == null) return !1;
  let t = e.browserUse,
    n = e.featureRequirements,
    r = e.network;
  return (
    e.allowBrowserAndComputerUse != null ||
    n?.in_app_browser != null ||
    n?.browser_use != null ||
    n?.browser_use_external != null ||
    n?.browser_use_full_cdp_access != null ||
    t?.allowHistoryAccess != null ||
    t?.disableAutoReview != null ||
    t?.allowGlobalPersistentApproval != null ||
    (t?.defaultOriginPolicy != null &&
      Object.values(t.defaultOriginPolicy).some((e) => e != null)) ||
    M(e).length > 0 ||
    r?.enabled === !1 ||
    r?.managedAllowedDomainsOnly === !0 ||
    N(e).some(({ decision: e }) => e === `deny`)
  );
}
function F(e, t) {
  if ((t !== `history` && e?.network?.enabled === !1) || !V(e)) return !1;
  let n = e?.browserUse,
    r = n?.defaultOriginPolicy;
  switch (t) {
    case `origin`:
      return e?.network?.managedAllowedDomainsOnly !== !0 && r?.access !== `deny`;
    case `history`:
      return n?.allowHistoryAccess !== !1;
    case `upload`:
      return r?.uploads !== `deny`;
    case `download`:
      return r?.downloads !== `deny`;
    case `fullCdp`:
      return (
        e?.featureRequirements?.browser_use_full_cdp_access !== !1 && r?.fullCdpAccess !== `deny`
      );
    case `autoReview`:
      return n?.disableAutoReview !== !0 && r?.autoReview !== `deny`;
    case `persistentApproval`:
      return r?.persistentApproval !== !1;
  }
}
function I(e) {
  return V(e) && e?.browserUse?.allowGlobalPersistentApproval !== !1;
}
function L(e, t) {
  if (e?.allowBrowserAndComputerUse === !1) return !1;
  let n = e?.featureRequirements;
  switch (t) {
    case `iab`:
      return n?.in_app_browser !== !1 && n?.browser_use !== !1;
    case `extension`:
      return n?.browser_use_external !== !1;
    case `cdp`:
    case void 0:
      return n?.browser_use !== !1;
  }
}
function R(e, t, n) {
  if (
    !V(e) ||
    (n === `fullCdp` && e?.featureRequirements?.browser_use_full_cdp_access === !1) ||
    (n === `autoReview` && e?.browserUse?.disableAutoReview === !0)
  )
    return !1;
  let r = i(t);
  return r == null || !H(e, r) || !U(e, r, `access`) ? !1 : n === `origin` || U(e, r, W[n]);
}
function z(e, t) {
  let n = E(e.pattern),
    r = i(t);
  return n != null && r != null && c(n, r);
}
function B(e, t) {
  let n = i(t);
  return n != null && d(e.pattern, n.hostname);
}
function V(e) {
  return (
    e?.allowBrowserAndComputerUse !== !1 &&
    (e?.featureRequirements?.browser_use !== !1 ||
      e?.featureRequirements?.browser_use_external !== !1)
  );
}
function H(e, t) {
  if (e?.network?.enabled === !1) return !1;
  let n = !1;
  for (let r of N(e))
    if (d(r.pattern, t.hostname)) {
      if (r.decision === `deny`) return !1;
      n = !0;
    }
  return e?.network?.managedAllowedDomainsOnly !== !0 || n;
}
function U(e, t, n) {
  let r = M(e),
    i = new Map();
  for (let e of r) i.set(e.pattern, (i.get(e.pattern) ?? 0) + 1);
  let a = !1;
  for (let e of r) {
    let r = E(e.pattern);
    if (r == null || !c(r, t)) continue;
    let o = e.policy[n];
    if (o === `deny` || o === !1) return !1;
    (o === `allow` || o === !0) && i.get(e.pattern) === 1 && (a = !0);
  }
  if (a) return !0;
  let o = e?.browserUse?.defaultOriginPolicy?.[n];
  return o !== `deny` && o !== !1;
}
var W,
  G = e(() => {
    (v(),
      (W = {
        download: `downloads`,
        upload: `uploads`,
        fullCdp: `fullCdpAccess`,
        autoReview: `autoReview`,
        persistentApproval: `persistentApproval`,
      }));
  });
function fe(e) {
  let t = e?.default_permissions,
    n = s(D(), f()).safeParse(e?.permissions);
  if (typeof t != `string` || !n.success) return null;
  let r = K.safeParse(n.data[t.trim()]);
  if (!r.success) return null;
  let { network: i } = r.data;
  return {
    enabled: i.enabled ?? null,
    allowedDomains: [],
    deniedDomains:
      i.domains == null
        ? i.denied_domains
        : Object.entries(i.domains).flatMap(([e, t]) => (t === `deny` ? [e] : [])),
    hardDenyAllowlistMisses: !1,
  };
}
function pe(e, t) {
  switch (t) {
    case `origin`:
      return e?.access;
    case `download`:
      return e?.downloads;
    case `upload`:
      return e?.uploads;
    case `fullCdp`:
      return e?.full_cdp_access;
  }
}
function me(e) {
  switch (e.capability) {
    case `history`:
      return {
        keyPath: `browser_use.allow_history_access`,
        value: e.enabled,
        mergeStrategy: `upsert`,
      };
    case `origin`:
    case `download`:
    case `upload`:
    case `fullCdp`:
      return {
        keyPath: `browser_use.default_origin_policy.${{ origin: `access`, download: `downloads`, upload: `uploads`, fullCdp: `full_cdp_access` }[e.capability]}`,
        value: e.enabled ? `allow` : `deny`,
        mergeStrategy: `upsert`,
      };
  }
}
function he(e, t) {
  let n = E(t.origin);
  if (n == null) throw Error(`Invalid Browser Use origin pattern`);
  let r = Object.keys(e?.origins ?? {}).filter((e) => E(e)?.canonicalKey === n.canonicalKey),
    i = r[0] ?? n.canonicalPattern,
    a = `browser_use.origins.${JSON.stringify(i)}`;
  if (t.policy == null)
    return (r.length > 0 ? r : [i]).map((e) => ({
      keyPath: `browser_use.origins.${JSON.stringify(e)}`,
      value: null,
      mergeStrategy: `replace`,
    }));
  if (r.length > 1) {
    let n = { access: null, downloads: null, uploads: null, full_cdp_access: null };
    for (let t of [`access`, `downloads`, `uploads`, `full_cdp_access`])
      n[t] = r.map((n) => e?.origins?.[n]?.[t]).includes(`deny`)
        ? `deny`
        : (e?.default_origin_policy?.[t] ?? null);
    return [
      { keyPath: a, value: { ...n, ...t.policy }, mergeStrategy: `replace` },
      ...r.slice(1).map((e) => ({
        keyPath: `browser_use.origins.${JSON.stringify(e)}`,
        value: null,
        mergeStrategy: `replace`,
      })),
    ];
  }
  return Object.entries(t.policy).map(([e, t]) => ({
    keyPath: `${a}.${e}`,
    value: t,
    mergeStrategy: t == null ? `replace` : `upsert`,
  }));
}
var K,
  q = e(() => {
    (v(),
      ue(),
      (K = _({
        network: _({
          enabled: ae().nullish().catch(null),
          domains: s(D(), f()).nullish().catch(null),
          denied_domains: ce(D()).catch([]),
        }),
      })));
  }),
  J = e(() => {
    (G(), q());
  });
async function ge(e, t, n, r) {
  if (n?.configReadSucceeded !== !0 || !Object.hasOwn(n.config, `browser_use`))
    throw Error(`Browser Use user configuration is not supported`);
  (await A(e, t).sendRequest(`config/batchWrite`, {
    edits: [me(r)],
    filePath: n.configWriteTarget?.filePath ?? null,
    expectedVersion: null,
  }),
    await e.query.invalidate(g, t));
}
function _e() {
  let e = (0, X.c)(2),
    t = m(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: ve,
          onSettled: async () => {
            await t(Z);
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    S(n)
  );
}
function ve(e) {
  let t = O.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateWebMcpEnabled(e);
}
function ye(e) {
  let n = (0, X.c)(9),
    { hostId: r } = e,
    i = t(b),
    a = m(),
    o;
  n[0] !== r || n[1] !== a || n[2] !== i
    ? ((o = async () => {
        await Promise.all([a(Z), A(i, r).clearPrewarmedThreads()]);
      }),
      (n[0] = r),
      (n[1] = a),
      (n[2] = i),
      (n[3] = o))
    : (o = n[3]);
  let s;
  n[4] === a
    ? (s = n[5])
    : ((s = (e) => {
        (h.error(`Failed to update Browser Use full CDP access`, {
          safe: {},
          sensitive: { error: String(e) },
        }),
          a(Z));
      }),
      (n[4] = a),
      (n[5] = s));
  let c;
  return (
    n[6] !== o || n[7] !== s
      ? ((c = { mutationFn: be, onSuccess: o, onError: s }), (n[6] = o), (n[7] = s), (n[8] = c))
      : (c = n[8]),
    S(c)
  );
}
function be(e) {
  return k(`browser-use-full-cdp-access-enabled-write`, { params: { enabled: e } });
}
function xe() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { mutationFn: Y }), (e[0] = t))
      : (t = e[0]),
    S(t)
  );
}
async function Y(e) {
  try {
    return await k(`browser-browsing-data-clear`, { params: { dataTypes: e } });
  } catch (e) {
    throw (
      h.error(`Failed to clear browser browsing data`, {
        safe: { error: String(e) },
        sensitive: {},
      }),
      e
    );
  }
}
function Se(e) {
  let n = (0, X.c)(12),
    i = e === void 0 ? re : e,
    a = t(b),
    o = r(),
    s = m(),
    c;
  n[0] !== i || n[1] !== o || n[2] !== a
    ? ((c = async (e) => {
        let { updates: t, configUpdate: n } = e,
          r = O.browserUsePermissions;
        if (r == null) throw Error(`Browser Use site permissions are not supported`);
        let s = o.getQueryData([...x, i]);
        if (n != null) {
          if (s?.readSucceeded !== !0 || !Object.hasOwn(s.response.config, `browser_use`))
            throw Error(`Browser Use user configuration is unavailable`);
          let e = he(s.response.config.browser_use, n);
          if (e.length > 0) {
            let n = ne(s.response.layers),
              o = n == null ? null : ee(n.name),
              c = n?.config,
              l = typeof c == `object` && c && !Array.isArray(c) ? c.browser_use : null,
              u = typeof l == `object` && l && !Array.isArray(l) ? (l.origins ?? null) : null,
              d = n == null ? (s.response.config.browser_use?.origins ?? null) : u,
              f = A(a, i),
              p = await f.sendRequest(`config/batchWrite`, {
                edits: e,
                filePath: o,
                expectedVersion: null,
              });
            try {
              return await r.updateOriginRules(t);
            } catch (e) {
              let t = e;
              try {
                await f.sendRequest(`config/batchWrite`, {
                  edits: [{ keyPath: `browser_use.origins`, value: d, mergeStrategy: `replace` }],
                  filePath: o,
                  expectedVersion: p.version,
                });
              } catch (e) {
                throw AggregateError([t, e], `Failed to restore Browser Use site permissions`);
              }
              throw t;
            }
          }
        }
        return r.updateOriginRules(t);
      }),
      (n[0] = i),
      (n[1] = o),
      (n[2] = a),
      (n[3] = c))
    : (c = n[3]);
  let l;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { id: `browser-use-origin-rules` }), (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] !== i || n[6] !== s || n[7] !== o
    ? ((u = async (e, t, n) => {
        let { configUpdate: r } = n;
        if (r != null) {
          await Promise.all([s(Z), o.invalidateQueries({ queryKey: [...x, i] })]);
          return;
        }
        await s(Z);
      }),
      (n[5] = i),
      (n[6] = s),
      (n[7] = o),
      (n[8] = u))
    : (u = n[8]);
  let d;
  return (
    n[9] !== c || n[10] !== u
      ? ((d = { mutationFn: c, scope: l, onSettled: u, onError: Ce }),
        (n[9] = c),
        (n[10] = u),
        (n[11] = d))
      : (d = n[11]),
    S(d)
  );
}
function Ce(e) {
  h.error(`Failed to update browser-use origin rules`, {
    safe: {},
    sensitive: { error: String(e) },
  });
}
function we() {
  let e = (0, X.c)(2),
    t = r(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: Te,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: Z });
          },
          onError: (e) => {
            (h.error(`Failed to update browser-use approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: Z }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    S(n)
  );
}
function Te(e) {
  return k(`browser-use-approval-mode-write`, { params: { approvalMode: e } });
}
function Ee() {
  let e = (0, X.c)(2),
    t = r(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: De,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: Z });
          },
          onError: (e) => {
            (h.error(`Failed to update browser-use history approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: Z }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    S(n)
  );
}
function De(e) {
  return k(`browser-use-history-approval-mode-write`, { params: { approvalMode: e } });
}
function Oe() {
  let e = (0, X.c)(2),
    t = m(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: ke,
          onSuccess: async () => {
            await t(Z);
          },
          onError: (e) => {
            (h.error(`Failed to update IAB history approval mode`, {
              safe: {},
              sensitive: { error: String(e) },
            }),
              t(Z));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    S(n)
  );
}
function ke(e) {
  let t = O.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateIabHistoryApprovalMode(e);
}
function Ae() {
  let e = (0, X.c)(2),
    t = r(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: je,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: Z });
          },
          onError: (e) => {
            (h.error(`Failed to update browser-use file transfer approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: Z }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    S(n)
  );
}
function je(e) {
  let { approvalMode: t, kind: n } = e;
  return k(`browser-use-file-transfer-approval-mode-write`, {
    params: { approvalMode: t, kind: n },
  });
}
var X,
  Z,
  Q,
  $,
  Me = e(() => {
    ((X = oe()),
      de(),
      p(),
      J(),
      w(),
      o(),
      l(),
      C(),
      le(),
      u(),
      a(),
      te(),
      y(),
      (Z = se(`browser-use-origin-state-read`)),
      (Q = ie(b, `browser-use-origin-state-read`, {
        refetchOnMount: `always`,
        staleTime: j.FIVE_SECONDS,
      })),
      ($ = T(b, (e, { get: t }) => {
        if (O.browserUsePermissions == null) return `unsupported`;
        let { data: n, isPending: r, isError: i } = t(g, e);
        return r
          ? `loading`
          : i || n?.configReadSucceeded !== !0
            ? `error`
            : Object.hasOwn(n.config, `browser_use`)
              ? `supported`
              : `unsupported`;
      })));
  });
export {
  G as C,
  I as D,
  F as E,
  P as S,
  L as T,
  q as _,
  xe as a,
  N as b,
  Ae as c,
  Se as d,
  _e as f,
  pe as g,
  fe as h,
  Me as i,
  ye as l,
  J as m,
  $ as n,
  we as o,
  ge as p,
  Y as r,
  Ee as s,
  Q as t,
  Oe as u,
  B as v,
  R as w,
  M as x,
  z as y,
};
//# sourceMappingURL=browser-use-origin-state-queries-f68e66dda925.js.map
