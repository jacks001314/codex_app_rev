import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bst as t, Pit as n, jit as r, zst as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as a,
  b_ as o,
  dRr as s,
  fRr as c,
  iRr as l,
  pRr as u,
  tyr as d,
  wLr as f,
  x_ as p,
  zRr as m,
} from "./app-initial-ad16eaadf81f.js";
function h(e, t, n = `personal`) {
  if (n === `workspace`) return e.get(m) === t.accountId && e.get(a) === t.userId;
  let r = e.get(o);
  return r.status === `allowed` && r.userId === t.userId && r.accountId === t.accountId;
}
function g() {
  return (g = e(() => {
    (f(), p());
  }))();
}
function _(e, t, n = c()) {
  let r = [`chatgpt-parental-controls`, e, t],
    a = [`chatgpt-family-notifications`, e, t],
    o = { "ChatGPT-Account-ID": t };
  return {
    current: {
      queryKey: [...r, `current`],
      queryFn: (e) => v(l.safeGet(`/amphora`, { additionalHeaders: o, signal: e.signal }), e, r),
      staleTime: i.ONE_MINUTE,
      retry: !1,
    },
    notifications: (e) => ({
      queryKey: e == null ? a : [...a, e],
      queryFn: async ({ signal: t, client: n, queryKey: r }) => {
        let i = n.getQueryData(r),
          a = await l.safeGet(`/amphora/notifications`, {
            additionalHeaders: o,
            parameters: { query: { limit: 20, cursor: e } },
            signal: t,
          }),
          s = n.getQueryData(r);
        return {
          ...a,
          items: [
            ...a.items.map((e) => {
              let t = s?.items.find(({ id: t }) => t === e.id);
              return t == null
                ? e
                : {
                    ...e,
                    seen_at: e.seen_at ?? t.seen_at,
                    reacted_to_at: e.reacted_to_at ?? t.reacted_to_at,
                  };
            }),
            ...(s?.items.filter(
              (e) => !a.items.some(({ id: t }) => t === e.id) && !i?.items.some(({ id: t }) => t === e.id),
            ) ?? []),
          ],
        };
      },
      staleTime: i.ONE_MINUTE,
      retry: !1,
    }),
    layout: {
      queryKey: [...r, `layout`, n],
      queryFn: ({ signal: e }) =>
        l.safeGet(`/amphora/settings_layout`, { additionalHeaders: { ...o, [s]: n }, signal: e }),
      staleTime: i.ONE_MINUTE,
      retry: !1,
    },
    settings: (e, t) => ({
      queryKey: [...r, e, t, `settings`],
      queryFn: ({ signal: n }) =>
        l.safeGet(`/amphora/{amphora_id}/members/{user_id}/settings`, {
          additionalHeaders: o,
          parameters: { path: { amphora_id: encodeURIComponent(e), user_id: encodeURIComponent(t) } },
          signal: n,
        }),
      staleTime: i.ONE_MINUTE,
      retry: !1,
    }),
    members: (e) => ({
      queryKey: [...r, e, `members`],
      queryFn: (t) =>
        v(
          l.safeGet(`/amphora/{amphora_id}/members`, {
            additionalHeaders: o,
            parameters: { path: { amphora_id: encodeURIComponent(e) } },
            signal: t.signal,
          }),
          t,
          r,
          e,
        ),
      staleTime: i.ONE_MINUTE,
      retry: !1,
    }),
  };
}
async function v(e, { client: t, queryKey: n, signal: i }, a, o) {
  try {
    return await e;
  } catch (e) {
    if (!i.aborted && e instanceof r && [401, 403, 404].includes(e.status)) {
      let r = e.status === 404 && o != null && t.getQueryData([...a, `current`])?.id !== o ? [...a, o] : a,
        i = t.getQueryCache().find({ queryKey: n, exact: !0 });
      t.cancelQueries({ queryKey: r, predicate: (e) => e !== i });
      for (let e of t.getQueryCache().findAll({ queryKey: r }))
        e.setState({ data: void 0, dataUpdatedAt: 0 });
    }
    throw e;
  }
}
function y() {
  return (y = e(() => {
    (d(), t(), u(), n());
  }))();
}
export { h as i, _ as n, g as r, y as t };
//# sourceMappingURL=queries-94cb24d2279c.js.map
