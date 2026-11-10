import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AL as t,
  CPt as n,
  Cot as r,
  EPt as i,
  Fat as a,
  Iot as o,
  Ixt as s,
  Kat as c,
  Lot as l,
  Pat as u,
  Pxt as d,
  RLt as f,
  SPt as p,
  TLt as m,
  _It as ee,
  iR as h,
  iot as g,
  irt as te,
  lR as _,
  nR as v,
  nSt as y,
  nst as b,
  oR as x,
  ort as ne,
  pIt as re,
  pLt as S,
  qat as C,
  rrt as w,
  sR as ie,
  srt as ae,
  tst as oe,
  vzt as se,
  wot as ce,
  xLt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as le,
  Ggr as ue,
  HPr as E,
  UPr as D,
  XPr as de,
  X_r as fe,
  YPr as O,
  evr as pe,
  oFr as me,
  t_r as k,
  tvr as A,
} from "./app-initial-5851df3f6cb1.js";
function j(e) {
  let t = [];
  for (let [n, r] of Object.entries(e?.browserUse?.origins ?? {})) {
    let e = x(n);
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
    let n = ie(e);
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
    (t?.defaultOriginPolicy != null && Object.values(t.defaultOriginPolicy).some((e) => e != null)) ||
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
      return e?.featureRequirements?.browser_use_full_cdp_access !== !1 && r?.fullCdpAccess !== `deny`;
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
  let r = h(t);
  return r == null || !he(e, r) || !V(e, r, `access`) ? !1 : n === `origin` || V(e, r, H[n]);
}
function R(e, t) {
  let n = x(e.pattern),
    r = h(t);
  return n != null && r != null && v(n, r);
}
function z(e, t) {
  let n = h(t);
  return n != null && _(e.pattern, n.hostname);
}
function B(e) {
  return (
    e?.allowBrowserAndComputerUse !== !1 &&
    (e?.featureRequirements?.browser_use !== !1 || e?.featureRequirements?.browser_use_external !== !1)
  );
}
function he(e, t) {
  if (e?.network?.enabled === !1) return !1;
  let n = !1;
  for (let r of M(e))
    if (_(r.pattern, t.hostname)) {
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
    let r = x(e.pattern);
    if (r == null || !v(r, t)) continue;
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
    (t(),
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
    n = T(m(), f()).safeParse(e?.permissions);
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
      return { keyPath: `browser_use.allow_history_access`, value: e.enabled, mergeStrategy: `upsert` };
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
  let n = x(t.origin);
  if (n == null) throw Error(`Invalid Browser Use origin pattern`);
  let r = Object.keys(e?.origins ?? {}).filter((e) => x(e)?.canonicalKey === n.canonicalKey),
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
      ...r
        .slice(1)
        .map((e) => ({
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
    (t(),
      i(),
      (W = S({
        network: S({
          enabled: ee().nullish().catch(null),
          domains: T(m(), f()).nullish().catch(null),
          denied_domains: re(m()).catch([]),
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
  (await O(e, t).sendRequest(`config/batchWrite`, {
    edits: [ve(r)],
    filePath: n.configWriteTarget?.filePath ?? null,
    expectedVersion: null,
  }),
    await e.query.invalidate(k, t));
}
function xe() {
  let e = (0, Y.c)(2),
    t = E(),
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
    l(n)
  );
}
function Se(e) {
  let t = c.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateWebMcpEnabled(e);
}
function Ce(e) {
  let t = (0, Y.c)(9),
    { hostId: i } = e,
    a = s(r),
    o = E(),
    c;
  t[0] !== i || t[1] !== o || t[2] !== a
    ? ((c = async () => {
        await Promise.all([o(X), O(a, i).clearPrewarmedThreads()]);
      }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = a),
      (t[3] = c))
    : (c = t[3]);
  let u;
  t[4] === o
    ? (u = t[5])
    : ((u = (e) => {
        (n.error(`Failed to update Browser Use full CDP access`, {
          safe: {},
          sensitive: { error: String(e) },
        }),
          o(X));
      }),
      (t[4] = o),
      (t[5] = u));
  let d;
  return (
    t[6] !== c || t[7] !== u
      ? ((d = { mutationFn: we, onSuccess: c, onError: u }), (t[6] = c), (t[7] = u), (t[8] = d))
      : (d = t[8]),
    l(d)
  );
}
function we(e) {
  return w(`browser-use-full-cdp-access-enabled-write`, { params: { enabled: e } });
}
function Te() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = { mutationFn: q }), (e[0] = t)) : (t = e[0]),
    l(t)
  );
}
async function q(e) {
  try {
    return await w(`browser-browsing-data-clear`, { params: { dataTypes: e } });
  } catch (e) {
    throw (
      n.error(`Failed to clear browser browsing data`, { safe: { error: String(e) }, sensitive: {} }),
      e
    );
  }
}
function Ee(e) {
  let t = (0, Y.c)(12),
    n = e === void 0 ? g : e,
    i = s(r),
    a = b(),
    o = E(),
    u;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((u = async (e) => {
        let { updates: t, configUpdate: r } = e,
          o = c.browserUsePermissions;
        if (o == null) throw Error(`Browser Use site permissions are not supported`);
        let s = a.getQueryData([...D, n]);
        if (r != null) {
          if (s?.readSucceeded !== !0 || !Object.hasOwn(s.response.config, `browser_use`))
            throw Error(`Browser Use user configuration is unavailable`);
          let e = ye(s.response.config.browser_use, r);
          if (e.length > 0) {
            let r = fe(s.response.layers),
              a = r == null ? null : pe(r.name),
              c = r?.config,
              l = typeof c == `object` && c && !Array.isArray(c) ? c.browser_use : null,
              u = typeof l == `object` && l && !Array.isArray(l) ? (l.origins ?? null) : null,
              d = r == null ? (s.response.config.browser_use?.origins ?? null) : u,
              f = O(i, n),
              p = await f.sendRequest(`config/batchWrite`, { edits: e, filePath: a, expectedVersion: null });
            try {
              return await o.updateOriginRules(t);
            } catch (e) {
              let t = e;
              try {
                await f.sendRequest(`config/batchWrite`, {
                  edits: [{ keyPath: `browser_use.origins`, value: d, mergeStrategy: `replace` }],
                  filePath: a,
                  expectedVersion: p.version,
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
      (t[0] = n),
      (t[1] = a),
      (t[2] = i),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { id: `browser-use-origin-rules` }), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== n || t[6] !== o || t[7] !== a
    ? ((f = async (e, t, r) => {
        let { configUpdate: i } = r;
        if (i != null) {
          await Promise.all([o(X), a.invalidateQueries({ queryKey: [...D, n] })]);
          return;
        }
        await o(X);
      }),
      (t[5] = n),
      (t[6] = o),
      (t[7] = a),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== u || t[10] !== f
      ? ((p = { mutationFn: u, scope: d, onSettled: f, onError: De }), (t[9] = u), (t[10] = f), (t[11] = p))
      : (p = t[11]),
    l(p)
  );
}
function De(e) {
  n.error(`Failed to update browser-use origin rules`, { safe: {}, sensitive: { error: String(e) } });
}
function Oe() {
  let e = (0, Y.c)(2),
    t = b(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = {
          mutationFn: ke,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (n.error(`Failed to update browser-use approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = r)),
    l(r)
  );
}
function ke(e) {
  return w(`browser-use-approval-mode-write`, { params: { approvalMode: e } });
}
function Ae() {
  let e = (0, Y.c)(2),
    t = b(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = {
          mutationFn: je,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (n.error(`Failed to update browser-use history approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = r)),
    l(r)
  );
}
function je(e) {
  return w(`browser-use-history-approval-mode-write`, { params: { approvalMode: e } });
}
function Me() {
  let e = (0, Y.c)(2),
    t = E(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = {
          mutationFn: J,
          onSuccess: async () => {
            await t(X);
          },
          onError: (e) => {
            (n.error(`Failed to update IAB history approval mode`, {
              safe: {},
              sensitive: { error: String(e) },
            }),
              t(X));
          },
        }),
        (e[0] = t),
        (e[1] = r)),
    l(r)
  );
}
function J(e) {
  let t = c.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateIabHistoryApprovalMode(e);
}
function Ne() {
  let e = (0, Y.c)(2),
    t = b(),
    r;
  return (
    e[0] === t
      ? (r = e[1])
      : ((r = {
          mutationFn: Pe,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (n.error(`Failed to update browser-use file transfer approval mode`, {
              safe: { error: String(e) },
              sensitive: {},
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = r)),
    l(r)
  );
}
function Pe(e) {
  let { approvalMode: t, kind: n } = e;
  return w(`browser-use-file-transfer-approval-mode-write`, { params: { approvalMode: t, kind: n } });
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = se()),
      o(),
      oe(),
      d(),
      K(),
      A(),
      de(),
      ue(),
      le(),
      C(),
      ce(),
      me(),
      p(),
      a(),
      ae(),
      (X = te(`browser-use-origin-state-read`)),
      (Z = ne(r, `browser-use-origin-state-read`, { refetchOnMount: `always`, staleTime: u.FIVE_SECONDS })),
      (Q = y(r, (e, { get: t }) => {
        if (c.browserUsePermissions == null) return `unsupported`;
        let { data: n, isPending: r, isError: i } = t(k, e);
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
//# sourceMappingURL=browser-use-origin-state-queries-27371f90f360.js.map
