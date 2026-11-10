import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  $st as n,
  Bst as r,
  Qst as i,
  ZSt as a,
  _st as o,
  mCt as s,
  sct as c,
  zst as l,
} from "./app-shared-2feb3d4c6fcc.js";
import { Bvn as u, iRr as d, tyr as f, zvn as p } from "./app-initial-ad16eaadf81f.js";
async function m(e, t, n) {
  let r = await d.safeGet(`/websites/{project_id}/share_access`, {
    parameters: { path: { project_id: e } },
    signal: t,
    expectedIdentity: n,
  });
  if (r == null) return null;
  let { allowed_editors: i = [], users: a, ...o } = r;
  return {
    ...o,
    users: [
      ...a.filter((e) => e.role === `owner` || !i.some((t) => t.account_user_id === e.account_user_id)),
      ...i.map((e) => ({ ...e, role: `editor`, editable: !0 })),
    ],
  };
}
function h(e) {
  return o({
    scope: { id: `sites-share-access:${e}` },
    mutationKey: [..._, e, `update`],
    mutationFn: async ({ action: n, user: r, group: i }, { client: a }) => {
      let o = [..._, e],
        s = a.getQueryState(o),
        c = s?.isInvalidated || s?.status === `error` ? await g(e, a) : a.getQueryData(o),
        l = `access_mode` in n ? n.access_mode : c?.access_mode;
      if (c == null || l == null || l === `admins_only`) throw Error(`Site sharing is unavailable`);
      let f;
      try {
        if (
          ((f = await d.safePatch(`/websites/{project_id}/share_access`, {
            parameters: { path: { project_id: e } },
            requestBody: n,
            retry: `never`,
          })),
          f === void 0 || (f != null && ![`pending`, `accepted`].includes(f.status)))
        )
          throw Error(`Site sharing outcome is unavailable`);
      } catch (t) {
        throw (await g(e, a).catch(() => void 0), t);
      }
      let p = a.getQueryCache().find({ queryKey: o, exact: !0 }),
        m = p?.promise,
        h = new AbortController(),
        v = setTimeout(() => h.abort(), 1e4);
      if (
        (p?.state.fetchStatus !== `idle` && m != null && (await t(m, h.signal).catch(() => void 0)),
        clearTimeout(v),
        h.signal.aborted &&
          p != null &&
          a.getQueryCache().find({ queryKey: o, exact: !0 }) === p &&
          p.promise === m &&
          p.state.fetchStatus !== `idle` &&
          p.cancel({ revert: !0 }),
        a.getQueryState(o)?.status !== `success`)
      )
        return;
      let y = h.signal.aborted || a.getQueryState(o)?.isInvalidated,
        b = a.setQueryData(o, (e) => {
          if (e == null) return e;
          let t = { ...e };
          if (
            (`access_mode` in n &&
              (t.access_mode =
                n.access_mode === `workspace_all` && f?.status === `pending` ? `custom` : n.access_mode),
            !(`access_mode` in n))
          ) {
            let a = n.role;
            (f != null && (a = f.role_id === `role-site-editor` ? `editor` : `viewer`),
              r != null &&
                (t.users = [
                  ...e.users.filter(
                    (e) =>
                      e.role === `owner` ||
                      !(
                        (r.account_user_id != null && e.account_user_id === r.account_user_id) ||
                        (r.email != null && e.email === r.email)
                      ),
                  ),
                  ...(a == null ? [] : [{ ...r, role: a, pending: f?.status === `pending` }]),
                ]),
              i != null &&
                (t.groups = [
                  ...e.groups.filter((e) => e.id !== i.id),
                  ...(a == null ? [] : [{ ...i, pending: f?.status === `pending` }]),
                ]));
          }
          return t;
        });
      return (
        y && a.invalidateQueries({ queryKey: o, exact: !0, refetchType: `none` }),
        u(a, [e], `none`),
        b ?? void 0
      );
    },
  });
}
async function g(e, n, r) {
  let i = [..._, e],
    a = new AbortController(),
    o = a.signal,
    s = setTimeout(() => a.abort(), 1e4);
  (await n.cancelQueries({ queryKey: i, exact: !0 }),
    await n.invalidateQueries({ queryKey: i, exact: !0, refetchType: `none` }));
  let c = n.fetchQuery({ queryKey: i, queryFn: ({ signal: t }) => m(e, t, r), retry: !1 }),
    l = n.getQueryCache().find({ queryKey: i, exact: !0 })?.promise;
  try {
    let e = await t(c, o);
    if (e == null) throw Error(`Site access policy is unavailable`);
    return e;
  } catch (e) {
    throw (
      o.aborted &&
        n.getQueryCache().find({ queryKey: i, exact: !0 })?.promise === l &&
        (await n.cancelQueries({ queryKey: i, exact: !0 })),
      await n.invalidateQueries({ queryKey: i, exact: !0, refetchType: `none` }),
      e
    );
  } finally {
    clearTimeout(s);
  }
}
var _, v;
function y() {
  return (y = e(() => {
    (a(),
      c(),
      f(),
      n(),
      r(),
      p(),
      (_ = [`appgen`, `share-access`]),
      (v = s(i, (e) => ({
        queryKey: [..._, e],
        queryFn: ({ signal: t }) => m(e, t),
        retry: !1,
        staleTime: l.ONE_MINUTE,
      }))));
  }))();
}
export { h as a, v as i, y as n, g as r, _ as t };
//# sourceMappingURL=sites-share-query-f94060562c21.js.map
