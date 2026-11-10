import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Fat as t, Pat as n, hrt as r, vrt as i } from "./app-shared-bbfeca5e5737.js";
import {
  GMr as a,
  Gg as o,
  Kg as s,
  XMr as c,
  Ymr as l,
  cPr as u,
  ehr as d,
  lPr as f,
  tNr as p,
  uPr as m,
} from "./app-initial-5851df3f6cb1.js";
function h(e, t, n = `personal`) {
  if (n === `workspace`) return e.get(a) === t.accountId && e.get(c) === t.userId;
  let r = e.get(o);
  return r.status === `allowed` && r.userId === t.userId && r.accountId === t.accountId;
}
function g() {
  return (g = e(() => {
    (p(), s());
  }))();
}
function _(e, t, r = f()) {
  let i = [`chatgpt-parental-controls`, e, t],
    a = [`chatgpt-family-notifications`, e, t],
    o = { "ChatGPT-Account-ID": t };
  return {
    current: {
      queryKey: [...i, `current`],
      queryFn: (e) => v(l.safeGet(`/amphora`, { additionalHeaders: o, signal: e.signal }), e, i),
      staleTime: n.ONE_MINUTE,
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
      staleTime: n.ONE_MINUTE,
      retry: !1,
    }),
    layout: {
      queryKey: [...i, `layout`, r],
      queryFn: ({ signal: e }) =>
        l.safeGet(`/amphora/settings_layout`, { additionalHeaders: { ...o, [u]: r }, signal: e }),
      staleTime: n.ONE_MINUTE,
      retry: !1,
    },
    settings: (e, t) => ({
      queryKey: [...i, e, t, `settings`],
      queryFn: ({ signal: n }) =>
        l.safeGet(`/amphora/{amphora_id}/members/{user_id}/settings`, {
          additionalHeaders: o,
          parameters: { path: { amphora_id: encodeURIComponent(e), user_id: encodeURIComponent(t) } },
          signal: n,
        }),
      staleTime: n.ONE_MINUTE,
      retry: !1,
    }),
    members: (e) => ({
      queryKey: [...i, e, `members`],
      queryFn: (t) =>
        v(
          l.safeGet(`/amphora/{amphora_id}/members`, {
            additionalHeaders: o,
            parameters: { path: { amphora_id: encodeURIComponent(e) } },
            signal: t.signal,
          }),
          t,
          i,
          e,
        ),
      staleTime: n.ONE_MINUTE,
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
    (d(), t(), m(), i());
  }))();
}
export { h as i, _ as n, g as r, y as t };
//# sourceMappingURL=queries-5461a01c4337.js.map
