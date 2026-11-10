import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  Fun as n,
  Gwt as r,
  Hk as i,
  IJt as a,
  JDt as o,
  Jun as s,
  Kjt as c,
  LJt as l,
  Lwt as u,
  Mun as d,
  O5t as f,
  QDt as p,
  Qun as m,
  Vk as h,
  X5t as ee,
  Xjt as te,
  Xun as g,
  YDt as ne,
  ZDt as re,
  Zjt as ie,
  _Jt as ae,
  _dn as oe,
  _jt as se,
  awt as _,
  bun as ce,
  cwt as v,
  dJt as y,
  fJt as b,
  fNt as x,
  gjt as le,
  lJt as S,
  owt as ue,
  qKt as de,
  rOt as C,
  rTt as w,
  rwt as T,
  tOt as fe,
  tdn as E,
  twt as D,
  uJt as pe,
  vJt as O,
  vun as me,
  yun as k,
  zCt as A,
} from "./app-shared-7552fc8d5d82.js";
function j(e) {
  let t = [];
  for (let [n, r] of Object.entries(e?.browserUse?.origins ?? {})) {
    let e = _(n);
    e != null &&
      r != null &&
      Object.values(r).some((e) => e != null) &&
      t.push({ pattern: e.canonicalPattern, policy: r });
  }
  return t;
}
function M(e) {
  let t = e?.network;
  return (
    t?.domains == null
      ? [
          ...(t?.allowedDomains ?? []).map((e) => [e, `allow`]),
          ...(t?.deniedDomains ?? []).map((e) => [e, `deny`]),
        ]
      : Object.entries(t.domains).flatMap(([e, t]) => (t == null ? [] : [[e, t]]))
  ).flatMap(([e, t]) => {
    let n = ue(e);
    return n == null || n.canonicalPattern.length === 0 ? [] : [{ decision: t, pattern: n }];
  });
}
function N(e) {
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
    j(e).length > 0 ||
    r?.enabled === !1 ||
    r?.managedAllowedDomainsOnly === !0 ||
    M(e).some(({ decision: e }) => e === `deny`)
  );
}
function P(e, t) {
  if ((t !== `history` && e?.network?.enabled === !1) || !B(e)) return !1;
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
function F(e) {
  return B(e) && e?.browserUse?.allowGlobalPersistentApproval !== !1;
}
function I(e, t) {
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
function L(e, t, n) {
  if (
    !B(e) ||
    (n === `fullCdp` && e?.featureRequirements?.browser_use_full_cdp_access === !1) ||
    (n === `autoReview` && e?.browserUse?.disableAutoReview === !0)
  )
    return !1;
  let r = T(t);
  return r == null || !he(e, r) || !V(e, r, `access`) ? !1 : n === `origin` || V(e, r, H[n]);
}
function R(e, t) {
  let n = _(e.pattern),
    r = T(t);
  return n != null && r != null && D(n, r);
}
function z(e, t) {
  let n = T(t);
  return n != null && v(e.pattern, n.hostname);
}
function B(e) {
  return (
    e?.allowBrowserAndComputerUse !== !1 &&
    (e?.featureRequirements?.browser_use !== !1 ||
      e?.featureRequirements?.browser_use_external !== !1)
  );
}
function he(e, t) {
  if (e?.network?.enabled === !1) return !1;
  let n = !1;
  for (let r of M(e))
    if (v(r.pattern, t.hostname)) {
      if (r.decision === `deny`) return !1;
      n = !0;
    }
  return e?.network?.managedAllowedDomainsOnly !== !0 || n;
}
function V(e, t, n) {
  let r = j(e),
    i = new Map();
  for (let e of r) i.set(e.pattern, (i.get(e.pattern) ?? 0) + 1);
  let a = !1;
  for (let e of r) {
    let r = _(e.pattern);
    if (r == null || !D(r, t)) continue;
    let o = e.policy[n];
    if (o === `deny` || o === !1) return !1;
    (o === `allow` || o === !0) && i.get(e.pattern) === 1 && (a = !0);
  }
  if (a) return !0;
  let o = e?.browserUse?.defaultOriginPolicy?.[n];
  return o !== `deny` && o !== !1;
}
var H;
function U() {
  return (U = e(() => {
    (A(),
      (H = {
        download: `downloads`,
        upload: `uploads`,
        fullCdp: `fullCdpAccess`,
        autoReview: `autoReview`,
        persistentApproval: `persistentApproval`,
      }));
  }))();
}
function ge(e) {
  let t = e?.default_permissions,
    n = g(m(), E()).safeParse(e?.permissions);
  if (typeof t != `string` || !n.success) return null;
  let r = W.safeParse(n.data[t.trim()]);
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
function _e(e, t) {
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
function ve(e) {
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
function ye(e, t) {
  let n = _(t.origin);
  if (n == null) throw Error(`Invalid Browser Use origin pattern`);
  let r = Object.keys(e?.origins ?? {}).filter((e) => _(e)?.canonicalKey === n.canonicalKey),
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
var W;
function G() {
  return (G = e(() => {
    (A(),
      ce(),
      (W = s({
        network: s({
          enabled: n().nullish().catch(null),
          domains: g(m(), E()).nullish().catch(null),
          denied_domains: d(m()).catch([]),
        }),
      })));
  }))();
}
function K() {
  return (K = e(() => {
    (U(), G());
  }))();
}
async function be(e, t, n, r) {
  if (n?.configReadSucceeded !== !0 || !Object.hasOwn(n.config, `browser_use`))
    throw Error(`Browser Use user configuration is not supported`);
  (await S(e, t).sendRequest(`config/batchWrite`, {
    edits: [ve(r)],
    filePath: n.configWriteTarget?.filePath ?? null,
    expectedVersion: null,
  }),
    await e.query.invalidate(w, t));
}
function xe() {
  let e = (0, Y.c)(2),
    t = C(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: Se,
          onSettled: async () => {
            await t(X);
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    O(n)
  );
}
function Se(e) {
  let t = h.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateWebMcpEnabled(e);
}
function Ce(e) {
  let n = (0, Y.c)(9),
    { hostId: r } = e,
    i = t(y),
    a = C(),
    o;
  n[0] !== r || n[1] !== a || n[2] !== i
    ? ((o = async () => {
        await Promise.all([a(X), S(i, r).clearPrewarmedThreads()]);
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
        (k.error(`Failed to update Browser Use full CDP access`, {
          safe: {},
          sensitive: { error: String(e) },
        }),
          a(X));
      }),
      (n[4] = a),
      (n[5] = s));
  let c;
  return (
    n[6] !== o || n[7] !== s
      ? ((c = { mutationFn: we, onSuccess: o, onError: s }), (n[6] = o), (n[7] = s), (n[8] = c))
      : (c = n[8]),
    O(c)
  );
}
function we(e) {
  return o(`browser-use-full-cdp-access-enabled-write`, { params: { enabled: e } });
}
function Te() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = { mutationFn: q }), (e[0] = t))
      : (t = e[0]),
    O(t)
  );
}
async function q(e) {
  try {
    return await o(`browser-browsing-data-clear`, { params: { dataTypes: e } });
  } catch (e) {
    throw (
      k.error(`Failed to clear browser browsing data`, {
        safe: { error: String(e) },
        sensitive: {},
      }),
      e
    );
  }
}
function Ee(e) {
  let n = (0, Y.c)(12),
    r = e === void 0 ? de : e,
    i = t(y),
    a = l(),
    o = C(),
    s;
  n[0] !== r || n[1] !== a || n[2] !== i
    ? ((s = async (e) => {
        let { updates: t, configUpdate: n } = e,
          o = h.browserUsePermissions;
        if (o == null) throw Error(`Browser Use site permissions are not supported`);
        let s = a.getQueryData([...u, r]);
        if (n != null) {
          if (s?.readSucceeded !== !0 || !Object.hasOwn(s.response.config, `browser_use`))
            throw Error(`Browser Use user configuration is unavailable`);
          let e = ye(s.response.config.browser_use, n);
          if (e.length > 0) {
            let n = c(s.response.layers),
              a = n == null ? null : te(n.name),
              l = n?.config,
              u = typeof l == `object` && l && !Array.isArray(l) ? l.browser_use : null,
              d = typeof u == `object` && u && !Array.isArray(u) ? (u.origins ?? null) : null,
              f = n == null ? (s.response.config.browser_use?.origins ?? null) : d,
              p = S(i, r),
              m = await p.sendRequest(`config/batchWrite`, {
                edits: e,
                filePath: a,
                expectedVersion: null,
              });
            try {
              return await o.updateOriginRules(t);
            } catch (e) {
              let t = e;
              try {
                await p.sendRequest(`config/batchWrite`, {
                  edits: [{ keyPath: `browser_use.origins`, value: f, mergeStrategy: `replace` }],
                  filePath: a,
                  expectedVersion: m.version,
                });
              } catch (e) {
                throw AggregateError([t, e], `Failed to restore Browser Use site permissions`);
              }
              throw t;
            }
          }
        }
        return o.updateOriginRules(t);
      }),
      (n[0] = r),
      (n[1] = a),
      (n[2] = i),
      (n[3] = s))
    : (s = n[3]);
  let d;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { id: `browser-use-origin-rules` }), (n[4] = d))
    : (d = n[4]);
  let f;
  n[5] !== r || n[6] !== o || n[7] !== a
    ? ((f = async (e, t, n) => {
        let { configUpdate: i } = n;
        if (i != null) {
          await Promise.all([o(X), a.invalidateQueries({ queryKey: [...u, r] })]);
          return;
        }
        await o(X);
      }),
      (n[5] = r),
      (n[6] = o),
      (n[7] = a),
      (n[8] = f))
    : (f = n[8]);
  let p;
  return (
    n[9] !== s || n[10] !== f
      ? ((p = { mutationFn: s, scope: d, onSettled: f, onError: De }),
        (n[9] = s),
        (n[10] = f),
        (n[11] = p))
      : (p = n[11]),
    O(p)
  );
}
function De(e) {
  k.error(`Failed to update browser-use origin rules`, {
    safe: {},
    sensitive: { error: String(e) },
  });
}
function Oe() {
  let e = (0, Y.c)(2),
    t = l(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: ke,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (k.error(`Failed to update browser-use approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    O(n)
  );
}
function ke(e) {
  return o(`browser-use-approval-mode-write`, { params: { approvalMode: e } });
}
function Ae() {
  let e = (0, Y.c)(2),
    t = l(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: je,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (k.error(`Failed to update browser-use history approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    O(n)
  );
}
function je(e) {
  return o(`browser-use-history-approval-mode-write`, { params: { approvalMode: e } });
}
function Me() {
  let e = (0, Y.c)(2),
    t = C(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: J,
          onSuccess: async () => {
            await t(X);
          },
          onError: (e) => {
            (k.error(`Failed to update IAB history approval mode`, {
              safe: {},
              sensitive: { error: String(e) },
            }),
              t(X));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    O(n)
  );
}
function J(e) {
  let t = h.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateIabHistoryApprovalMode(e);
}
function Ne() {
  let e = (0, Y.c)(2),
    t = l(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: Pe,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (k.error(`Failed to update browser-use file transfer approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    O(n)
  );
}
function Pe(e) {
  let { approvalMode: t, kind: n } = e;
  return o(`browser-use-file-transfer-approval-mode-write`, {
    params: { approvalMode: t, kind: n },
  });
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = oe()),
      ae(),
      a(),
      f(),
      K(),
      ie(),
      pe(),
      r(),
      fe(),
      i(),
      b(),
      x(),
      me(),
      se(),
      p(),
      (X = ne(`browser-use-origin-state-read`)),
      (Z = re(y, `browser-use-origin-state-read`, {
        refetchOnMount: `always`,
        staleTime: le.FIVE_SECONDS,
      })),
      (Q = ee(y, (e, { get: t }) => {
        if (h.browserUsePermissions == null) return `unsupported`;
        let { data: n, isPending: r, isError: i } = t(w, e);
        return r
          ? `loading`
          : i || n?.configReadSucceeded !== !0
            ? `error`
            : Object.hasOwn(n.config, `browser_use`)
              ? `supported`
              : `unsupported`;
      })));
  }))();
}
export {
  U as C,
  F as D,
  P as E,
  N as S,
  I as T,
  G as _,
  Te as a,
  M as b,
  Ne as c,
  Ee as d,
  xe as f,
  _e as g,
  ge as h,
  $ as i,
  Ce as l,
  K as m,
  Q as n,
  Oe as o,
  be as p,
  q as r,
  Ae as s,
  Z as t,
  Me as u,
  z as v,
  L as w,
  j as x,
  R as y,
};
//# sourceMappingURL=browser-use-origin-state-queries-4feefe042d12.js.map
