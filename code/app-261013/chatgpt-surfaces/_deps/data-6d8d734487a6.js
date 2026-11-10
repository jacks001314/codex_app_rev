import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Fat as n,
  Pat as r,
  Pxt as i,
  Zxt as a,
  oSt as o,
  qxt as s,
  wot as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  CIn as l,
  DIn as u,
  GMr as d,
  QMr as f,
  YMr as p,
  Ymr as m,
  _In as h,
  bIn as g,
  ehr as _,
  tNr as v,
  vIn as y,
  wIn as b,
} from "./app-initial-5851df3f6cb1.js";
import { r as x, t as S } from "./chatgpt-project-sources-18481a4a6584.js";
import { n as C, t as w } from "./source-queries-3db0a1460491.js";
function T(e, t, n) {
  let r = e.query.getData(h, t),
    i = e.get(f),
    a = i.accountStructure === `personal` ? i.accountUserId?.split(`__`)[0] : i.accountUserId;
  return {
    projectId: t,
    saveId: n.save_id?.trim() ?? ``,
    isSharedProject:
      r != null && (r.gizmo.share_recipient !== `private` || (r.gizmo.sharing?.subjects.length ?? 0) > 0),
    actorIsSaveOwner: a == null || n.creator_id == null ? void 0 : n.creator_id === a,
  };
}
function E() {
  return (E = e(() => {
    (v(), y());
  }))();
}
function D(e, t, n) {
  return {
    additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t },
    expectedIdentity: t == null || n == null ? void 0 : { accountId: t, userId: n },
    assertRequestCurrent: () => {
      if (t == null || n == null || e.get(O) !== `ready` || e.get(d) !== t || e.get(p) !== n)
        throw new DOMException(`The project save account changed`, `AbortError`);
    },
  };
}
var O, k, A;
function j() {
  return (j = e(() => {
    (i(),
      v(),
      c(),
      n(),
      b(),
      y(),
      x(),
      _(),
      C(),
      (O = o(t, ({ get: e }) => {
        let { authLoading: t, accountLoading: n } = e(f);
        return t ? `loading` : e(d) != null && e(p) != null ? `ready` : n ? `loading` : `unavailable`;
      })),
      (k = a(t, (e, { get: t, scope: n }) => {
        let i = t(d),
          a = t(p),
          o = D(n, i, a);
        return {
          queryKey: [...(e == null ? [`chatgpt-project-saves`, null] : l(e)), `all`, i, a],
          enabled: e != null && t(O) === `ready`,
          staleTime: r.ONE_MINUTE,
          refetchOnWindowFocus: !0,
          queryFn: async ({ signal: t }) => {
            if ((o.assertRequestCurrent(), e == null))
              throw new DOMException(`The project is unavailable`, `AbortError`);
            let n = await w(t, (n) =>
              m.safeGet(`/projects/{project_id}/saves`, {
                ...o,
                parameters: { path: { project_id: e }, query: n },
                signal: t,
              }),
            );
            return (o.assertRequestCurrent(), n);
          },
        };
      })),
      (A = s(t, (e, { get: t, scope: n }) => {
        let r = t(d),
          i = t(p),
          a = D(n, r, i);
        return {
          mutationFn: (t) =>
            n.queryClient
              .getMutationCache()
              .build(n.queryClient, {
                scope: g(e),
                mutationFn: async () => {
                  (a.assertRequestCurrent(),
                    await Promise.all([n.query.cancel(k, e), n.query.cancel(h, e)]),
                    a.assertRequestCurrent());
                  let o = null;
                  switch (t.type) {
                    case `create`:
                      o = await m.safePost(`/projects/{project_id}/saves`, {
                        ...a,
                        parameters: { path: { project_id: e } },
                        requestBody: { conversation_id: t.conversationId, message_id: t.messageId },
                      });
                      break;
                    case `rename`:
                      o = await m.safePatch(`/projects/{project_id}/saves/{save_id}`, {
                        ...a,
                        parameters: { path: { project_id: e, save_id: t.saveId } },
                        requestBody: { title: t.title },
                      });
                      break;
                    case `delete`:
                      await m.safeDelete(`/projects/{project_id}/saves/{save_id}`, {
                        ...a,
                        parameters: { path: { project_id: e, save_id: t.saveId } },
                      });
                  }
                  a.assertRequestCurrent();
                  let s = o;
                  if (
                    (n.query.setData(k, e, (e) =>
                      t.type === `delete`
                        ? e?.filter((e) => e.id !== t.saveId)
                        : s == null
                          ? e
                          : e?.some((e) => e.id === s.id)
                            ? e.map((e) => (e.id === s.id ? s : e))
                            : [s, ...(e ?? [])],
                    ),
                    t.type === `delete`)
                  ) {
                    let r = n.query.getData(h, e);
                    r != null &&
                      u(n.queryClient, { ...r, files: r.files.filter((e) => S(e)?.save_id !== t.saveId) });
                  }
                  if (t.type === `create` && s?.title.trim() === ``)
                    for (let t of [1e4, 3e4])
                      setTimeout(() => {
                        n.get(d) === r &&
                          n.get(p) === i &&
                          n.query
                            .getData(k, e)
                            ?.find((e) => e.id === s.id)
                            ?.title.trim() === `` &&
                          n.query.invalidate(k, e);
                      }, t);
                  return s;
                },
                onSettled: () => {
                  n.get(d) === r &&
                    n.get(p) === i &&
                    Promise.all([
                      n.queryClient.invalidateQueries({ queryKey: l(e) }),
                      n.query.invalidate(h, e),
                    ]);
                },
              })
              .execute(void 0),
        };
      })));
  }))();
}
export { T as a, k as i, O as n, E as o, A as r, j as t };
//# sourceMappingURL=data-6d8d734487a6.js.map
