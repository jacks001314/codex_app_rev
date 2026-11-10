import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  GR as i,
  HFt as a,
  LRt as o,
  Lst as s,
  NLt as c,
  PBt as l,
  QR as u,
  Qst as d,
  RFt as f,
  Rst as p,
  VRt as m,
  XR as ee,
  YR as h,
  Yst as g,
  ZSt as te,
  ast as ne,
  ezt as _,
  gCt as v,
  ist as y,
  kLt as re,
  kRt as b,
  qR as x,
  vst as ie,
  yCt as ae,
  yR as S,
  yst as C,
  zFt as w,
  zst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CBr as T,
  FBr as E,
  IBr as se,
  Jbr as ce,
  KBr as le,
  Qxr as ue,
  ixr as D,
  nSr as de,
  rSr as fe,
  wBr as O,
  xBr as pe,
} from "./app-initial-ad16eaadf81f.js";
function k(e) {
  let t = [];
  for (let [n, r] of Object.entries(e?.browserUse?.origins ?? {})) {
    let e = h(n);
    e != null &&
      r != null &&
      Object.values(r).some((e) => e != null) &&
      t.push({ pattern: e.canonicalPattern, policy: r });
  }
  return t;
}
function A(e) {
  let t = e?.network;
  return (
    t?.domains == null
      ? [
          ...(t?.allowedDomains ?? []).map((e) => [e, `allow`]),
          ...(t?.deniedDomains ?? []).map((e) => [e, `deny`]),
        ]
      : Object.entries(t.domains).flatMap(([e, t]) => (t == null ? [] : [[e, t]]))
  ).flatMap(([e, t]) => {
    let n = ee(e);
    return n == null || n.canonicalPattern.length === 0 ? [] : [{ decision: t, pattern: n }];
  });
}
function j(e) {
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
    k(e).length > 0 ||
    r?.enabled === !1 ||
    r?.managedAllowedDomainsOnly === !0 ||
    A(e).some(({ decision: e }) => e === `deny`)
  );
}
function M(e, t) {
  if ((t !== `history` && e?.network?.enabled === !1) || !R(e)) return !1;
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
function N(e) {
  return R(e) && e?.browserUse?.allowGlobalPersistentApproval !== !1;
}
function P(e, t) {
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
function F(e, t, n) {
  if (
    !R(e) ||
    (n === `fullCdp` && e?.featureRequirements?.browser_use_full_cdp_access === !1) ||
    (n === `autoReview` && e?.browserUse?.disableAutoReview === !0)
  )
    return !1;
  let r = x(t);
  return r == null || !z(e, r) || !B(e, r, `access`) ? !1 : n === `origin` || B(e, r, V[n]);
}
function I(e, t) {
  let n = h(e.pattern),
    r = x(t);
  return n != null && r != null && i(n, r);
}
function L(e, t) {
  let n = x(t);
  return n != null && u(e.pattern, n.hostname);
}
function R(e) {
  return (
    e?.allowBrowserAndComputerUse !== !1 &&
    (e?.featureRequirements?.browser_use !== !1 || e?.featureRequirements?.browser_use_external !== !1)
  );
}
function z(e, t) {
  if (e?.network?.enabled === !1) return !1;
  let n = !1;
  for (let r of A(e))
    if (u(r.pattern, t.hostname)) {
      if (r.decision === `deny`) return !1;
      n = !0;
    }
  return e?.network?.managedAllowedDomainsOnly !== !0 || n;
}
function B(e, t, n) {
  let r = k(e),
    a = new Map();
  for (let e of r) a.set(e.pattern, (a.get(e.pattern) ?? 0) + 1);
  let o = !1;
  for (let e of r) {
    let r = h(e.pattern);
    if (r == null || !i(r, t)) continue;
    let s = e.policy[n];
    if (s === `deny` || s === !1) return !1;
    (s === `allow` || s === !0) && a.get(e.pattern) === 1 && (o = !0);
  }
  if (o) return !0;
  let s = e?.browserUse?.defaultOriginPolicy?.[n];
  return s !== `deny` && s !== !1;
}
var V;
function H() {
  return (H = e(() => {
    (S(),
      (V = {
        download: `downloads`,
        upload: `uploads`,
        fullCdp: `fullCdpAccess`,
        autoReview: `autoReview`,
        persistentApproval: `persistentApproval`,
      }));
  }))();
}
function me(e) {
  let t = e?.default_permissions,
    n = o(m(), _()).safeParse(e?.permissions);
  if (typeof t != `string` || !n.success) return null;
  let r = U.safeParse(n.data[t.trim()]);
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
function he(e, t) {
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
function ge(e) {
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
function _e(e, t) {
  let n = h(t.origin);
  if (n == null) throw Error(`Invalid Browser Use origin pattern`);
  let r = Object.keys(e?.origins ?? {}).filter((e) => h(e)?.canonicalKey === n.canonicalKey),
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
var U;
function W() {
  return (W = e(() => {
    (S(),
      a(),
      (U = b({
        network: b({
          enabled: c().nullish().catch(null),
          domains: o(m(), _()).nullish().catch(null),
          denied_domains: re(m()).catch([]),
        }),
      })));
  }))();
}
function G() {
  return (G = e(() => {
    (H(), W());
  }))();
}
async function ve(e, t, n, r) {
  if (n?.configReadSucceeded !== !0 || !Object.hasOwn(n.config, `browser_use`))
    throw Error(`Browser Use user configuration is not supported`);
  (await E(e, t).sendRequest(`config/batchWrite`, {
    edits: [ge(r)],
    filePath: n.configWriteTarget?.filePath ?? null,
    expectedVersion: null,
  }),
    await e.query.invalidate(D, t));
}
function ye() {
  let e = (0, Y.c)(2),
    t = T(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: be,
          onSettled: async () => {
            await t(X);
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    C(n)
  );
}
function be(e) {
  let t = y.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateWebMcpEnabled(e);
}
function xe(e) {
  let n = (0, Y.c)(9),
    { hostId: r } = e,
    i = t(d),
    a = T(),
    o;
  n[0] !== r || n[1] !== a || n[2] !== i
    ? ((o = async () => {
        await Promise.all([a(X), E(i, r).clearPrewarmedThreads()]);
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
        (w.error(`Failed to update Browser Use full CDP access`, {
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
      ? ((c = { mutationFn: Se, onSuccess: o, onError: s }), (n[6] = o), (n[7] = s), (n[8] = c))
      : (c = n[8]),
    C(c)
  );
}
function Se(e) {
  return J().updateFullCdpAccessEnabled(e);
}
function Ce() {
  let e = (0, Y.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = { mutationFn: K }), (e[0] = t)) : (t = e[0]),
    C(t)
  );
}
async function K(e) {
  try {
    let t = y?.browserPreferences;
    if (t == null) throw Error(`Browser preferences are not supported`);
    await t.clearBrowsingData(e);
  } catch (e) {
    throw (w.error(`Failed to clear browser browsing data`, { safe: {}, sensitive: { error: e } }), e);
  }
}
function we(e) {
  let n = (0, Y.c)(12),
    r = e === void 0 ? g : e,
    i = t(d),
    a = p(),
    o = T(),
    s;
  n[0] !== r || n[1] !== a || n[2] !== i
    ? ((s = async (e) => {
        let { updates: t, configUpdate: n } = e,
          o = y.browserUsePermissions;
        if (o == null) throw Error(`Browser Use site permissions are not supported`);
        let s = a.getQueryData([...O, r]);
        if (n != null) {
          if (s?.readSucceeded !== !0 || !Object.hasOwn(s.response.config, `browser_use`))
            throw Error(`Browser Use user configuration is unavailable`);
          let e = _e(s.response.config.browser_use, n);
          if (e.length > 0) {
            let n = ue(s.response.layers),
              a = n == null ? null : de(n.name),
              c = n?.config,
              l = typeof c == `object` && c && !Array.isArray(c) ? c.browser_use : null,
              u = typeof l == `object` && l && !Array.isArray(l) ? (l.origins ?? null) : null,
              d = n == null ? (s.response.config.browser_use?.origins ?? null) : u,
              f = E(i, r),
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
      (n[0] = r),
      (n[1] = a),
      (n[2] = i),
      (n[3] = s))
    : (s = n[3]);
  let c;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { id: `browser-use-origin-rules` }), (n[4] = c))
    : (c = n[4]);
  let l;
  n[5] !== r || n[6] !== o || n[7] !== a
    ? ((l = async (e, t, n) => {
        let { configUpdate: i } = n;
        if (i != null) {
          await Promise.all([o(X), a.invalidateQueries({ queryKey: [...O, r] })]);
          return;
        }
        await o(X);
      }),
      (n[5] = r),
      (n[6] = o),
      (n[7] = a),
      (n[8] = l))
    : (l = n[8]);
  let u;
  return (
    n[9] !== s || n[10] !== l
      ? ((u = { mutationFn: s, scope: c, onSettled: l, onError: Te }), (n[9] = s), (n[10] = l), (n[11] = u))
      : (u = n[11]),
    C(u)
  );
}
function Te(e) {
  w.error(`Failed to update browser-use origin rules`, { safe: {}, sensitive: { error: String(e) } });
}
function Ee() {
  let e = (0, Y.c)(2),
    t = p(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: De,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (w.error(`Failed to update browser-use approval mode`, { safe: {}, sensitive: { error: e } }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    C(n)
  );
}
function De(e) {
  return J().updateApprovalMode(e);
}
function Oe() {
  let e = (0, Y.c)(2),
    t = p(),
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
            (w.error(`Failed to update browser-use history approval mode`, {
              safe: {},
              sensitive: { error: e },
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    C(n)
  );
}
function ke(e) {
  return J().updateChromeHistoryApprovalMode(e);
}
function q() {
  let e = (0, Y.c)(2),
    t = T(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: Ae,
          onSuccess: async () => {
            await t(X);
          },
          onError: (e) => {
            (w.error(`Failed to update IAB history approval mode`, {
              safe: {},
              sensitive: { error: String(e) },
            }),
              t(X));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    C(n)
  );
}
function Ae(e) {
  let t = y.browserUsePermissions;
  if (t == null) throw Error(`Browser Use permissions are not supported`);
  return t.updateIabHistoryApprovalMode(e);
}
function je() {
  let e = (0, Y.c)(2),
    t = p(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = {
          mutationFn: Me,
          onSuccess: async () => {
            await t.invalidateQueries({ queryKey: X });
          },
          onError: (e) => {
            (w.error(`Failed to update browser-use file transfer approval mode`, {
              safe: {},
              sensitive: { error: e },
            }),
              t.invalidateQueries({ queryKey: X }));
          },
        }),
        (e[0] = t),
        (e[1] = n)),
    C(n)
  );
}
function Me(e) {
  let { approvalMode: t, kind: n } = e;
  return J().updateFileTransferApprovalMode(n, t);
}
function J() {
  let e = y.browserUsePermissions;
  if (e == null) throw Error(`Browser Use permissions are not supported`);
  return e;
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = l()),
      ie(),
      s(),
      te(),
      G(),
      fe(),
      se(),
      ce(),
      pe(),
      ne(),
      n(),
      le(),
      f(),
      r(),
      (X = [`browser-use-origin-state`]),
      (Z = v(d, () => ({
        queryKey: X,
        queryFn: () => J().read(),
        enabled: y?.browserUsePermissions != null,
        refetchOnMount: `always`,
        staleTime: oe.FIVE_SECONDS,
      }))),
      (Q = ae(d, (e, { get: t }) => {
        if (y.browserUsePermissions == null) return `unsupported`;
        let { data: n, isPending: r, isError: i } = t(D, e);
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
  H as C,
  N as D,
  M as E,
  j as S,
  P as T,
  W as _,
  Ce as a,
  A as b,
  je as c,
  we as d,
  ye as f,
  he as g,
  me as h,
  $ as i,
  xe as l,
  G as m,
  Q as n,
  Ee as o,
  ve as p,
  K as r,
  Oe as s,
  Z as t,
  q as u,
  L as v,
  F as w,
  k as x,
  I as y,
};
//# sourceMappingURL=browser-use-origin-state-queries-97f7f3683560.js.map
