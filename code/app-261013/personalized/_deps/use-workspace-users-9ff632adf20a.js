import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Fat as t,
  Pat as n,
  Xot as r,
  Yot as i,
  hrt as a,
  vrt as o,
  vzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { ean as c, fur as l, iPr as u, pur as d, sPr as f, tan as p } from "./app-initial-5851df3f6cb1.js";
async function m(e, t, n) {
  let r = t.trim().toLowerCase();
  return (await g(e, r, n)).find((e) => e.email?.trim().toLowerCase() === r)?.account_user_id;
}
function h(e, t) {
  let i = (0, y.c)(18),
    a;
  i[0] === t ? (a = i[1]) : ((a = t === void 0 ? {} : t), (i[0] = t), (i[1] = a));
  let { includeProfilePhotos: o } = a,
    s = o !== void 0 && o,
    { accountId: c, authMethod: l } = d(),
    u;
  i[2] === e ? (u = i[3]) : ((u = e.trim()), (i[2] = e), (i[3] = u));
  let f = u,
    m = p(f, 150),
    h;
  i[4] === s ? (h = i[5]) : ((h = s ? [`profile-photos`] : []), (i[4] = s), (i[5] = h));
  let _;
  i[6] !== c || i[7] !== f || i[8] !== h
    ? ((_ = [`workspace-users`, c, f, ...h]), (i[6] = c), (i[7] = f), (i[8] = h), (i[9] = _))
    : (_ = i[9]);
  let v = (l === `chatgpt` || l === `chatgptAuthTokens`) && c != null && f.length > 0 && f === m,
    b;
  i[10] !== c || i[11] !== s || i[12] !== f
    ? ((b = async (e) => {
        let { signal: t } = e;
        if (c == null) throw Error(`account id is required`);
        let n = AbortSignal.any([t, AbortSignal.timeout(15e3)]);
        return g(c, f, n, s);
      }),
      (i[10] = c),
      (i[11] = s),
      (i[12] = f),
      (i[13] = b))
    : (b = i[13]);
  let x;
  return (
    i[14] !== _ || i[15] !== v || i[16] !== b
      ? ((x = {
          queryKey: _,
          enabled: v,
          networkMode: `always`,
          refetchOnReconnect: !0,
          retry: !1,
          queryFn: b,
          staleTime: n.ONE_MINUTE,
        }),
        (i[14] = _),
        (i[15] = v),
        (i[16] = b),
        (i[17] = x))
      : (x = i[17]),
    r(x)
  );
}
async function g(e, t, n, r = !1) {
  return (
    await u.safeGet(`/accounts/{account_id}/users`, {
      parameters: {
        path: { account_id: e },
        query: { limit: 10, offset: 0, query: t, include_profile_photos: r },
      },
      signal: n,
    })
  ).items;
}
async function _(e, t, n) {
  try {
    return (
      await u.safeGet(`/spaces/people`, {
        parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
        signal: n,
      })
    ).items;
  } catch (e) {
    if (!(e instanceof a && e.status === 404)) throw e;
  }
  return g(e, t, n);
}
function v(e, t) {
  let i = (0, y.c)(18),
    a;
  i[0] === t ? (a = i[1]) : ((a = t === void 0 ? {} : t), (i[0] = t), (i[1] = a));
  let { includeMemberCounts: o } = a,
    s = o !== void 0 && o,
    { accountId: c, authMethod: l } = d(),
    f;
  i[2] === e ? (f = i[3]) : ((f = e.trim()), (i[2] = e), (i[3] = f));
  let m = f,
    h = p(m, 150),
    g;
  i[4] === s ? (g = i[5]) : ((g = s ? [`member-counts`] : []), (i[4] = s), (i[5] = g));
  let _;
  i[6] !== c || i[7] !== m || i[8] !== g
    ? ((_ = [`workspace-groups`, c, m, ...g]), (i[6] = c), (i[7] = m), (i[8] = g), (i[9] = _))
    : (_ = i[9]);
  let v = (l === `chatgpt` || l === `chatgptAuthTokens`) && c != null && m.length > 0 && m === h,
    b;
  i[10] !== c || i[11] !== s || i[12] !== m
    ? ((b = async (e) => {
        let { signal: t } = e;
        if (c == null) throw Error(`account id is required`);
        return (
          await u.safeGet(`/accounts/{account_id}/groups`, {
            parameters: {
              path: { account_id: c },
              query: { limit: 10, offset: 0, query: m, include_member_counts: s, include_total: !1 },
            },
            signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
          })
        ).items;
      }),
      (i[10] = c),
      (i[11] = s),
      (i[12] = m),
      (i[13] = b))
    : (b = i[13]);
  let x;
  return (
    i[14] !== _ || i[15] !== v || i[16] !== b
      ? ((x = {
          queryKey: _,
          enabled: v,
          networkMode: `always`,
          refetchOnReconnect: !0,
          retry: !1,
          queryFn: b,
          staleTime: n.ONE_MINUTE,
        }),
        (i[14] = _),
        (i[15] = v),
        (i[16] = b),
        (i[17] = x))
      : (x = i[17]),
    r(x)
  );
}
var y;
function b() {
  return (b = e(() => {
    ((y = s()), i(), l(), t(), f(), c(), o());
  }))();
}
export { h as a, v as i, m as n, b as r, _ as t };
//# sourceMappingURL=use-workspace-users-9ff632adf20a.js.map
