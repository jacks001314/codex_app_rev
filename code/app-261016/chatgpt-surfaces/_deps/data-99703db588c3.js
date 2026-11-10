import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  CCt as r,
  Qst as i,
  ZSt as a,
  mCt as o,
  uCt as s,
  zst as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Gzn as l,
  Jzn as u,
  Kzn as d,
  Qzn as f,
  VRr as p,
  Zzn as m,
  bLr as h,
  iRr as g,
  tBn as _,
  tyr as v,
  wLr as y,
  zRr as b,
} from "./app-initial-ad16eaadf81f.js";
import { r as x, t as S } from "./chatgpt-project-sources-9d1a715e38b6.js";
import { n as C, t as w } from "./source-queries-8e76fe9923fd.js";
function T(e, t, n) {
  let r = e.query.getData(l, t),
    i = e.get(p),
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
    (y(), d());
  }))();
}
function D(e, t, n) {
  return {
    additionalHeaders: t == null ? void 0 : { "ChatGPT-Account-ID": t },
    expectedIdentity: t == null || n == null ? void 0 : { accountId: t, userId: n },
    assertRequestCurrent: () => {
      if (t == null || n == null || e.get(O) !== `ready` || e.get(b) !== t || e.get(h) !== n)
        throw new DOMException(`The project save account changed`, `AbortError`);
    },
  };
}
var O, k, A;
function j() {
  return (j = e(() => {
    (a(),
      y(),
      t(),
      n(),
      f(),
      d(),
      x(),
      v(),
      C(),
      (O = r(i, ({ get: e }) => {
        let { authLoading: t, accountLoading: n } = e(p);
        return t ? `loading` : e(b) != null && e(h) != null ? `ready` : n ? `loading` : `unavailable`;
      })),
      (k = o(i, (e, { get: t, scope: n }) => {
        let r = t(b),
          i = t(h),
          a = D(n, r, i);
        return {
          queryKey: [...(e == null ? [`chatgpt-project-saves`, null] : m(e)), `all`, r, i],
          enabled: e != null && t(O) === `ready`,
          staleTime: c.ONE_MINUTE,
          refetchOnWindowFocus: !0,
          queryFn: async ({ signal: t }) => {
            if ((a.assertRequestCurrent(), e == null))
              throw new DOMException(`The project is unavailable`, `AbortError`);
            let n = await w(t, (n) =>
              g.safeGet(`/projects/{project_id}/saves`, {
                ...a,
                parameters: { path: { project_id: e }, query: n },
                signal: t,
              }),
            );
            return (a.assertRequestCurrent(), n);
          },
        };
      })),
      (A = s(i, (e, { get: t, scope: n }) => {
        let r = t(b),
          i = t(h),
          a = D(n, r, i);
        return {
          mutationFn: (t) =>
            n.queryClient
              .getMutationCache()
              .build(n.queryClient, {
                scope: u(e),
                mutationFn: async () => {
                  (a.assertRequestCurrent(),
                    await Promise.all([n.query.cancel(k, e), n.query.cancel(l, e)]),
                    a.assertRequestCurrent());
                  let o = null;
                  switch (t.type) {
                    case `create`:
                      o = await g.safePost(`/projects/{project_id}/saves`, {
                        ...a,
                        parameters: { path: { project_id: e } },
                        requestBody: { conversation_id: t.conversationId, message_id: t.messageId },
                      });
                      break;
                    case `rename`:
                      o = await g.safePatch(`/projects/{project_id}/saves/{save_id}`, {
                        ...a,
                        parameters: { path: { project_id: e, save_id: t.saveId } },
                        requestBody: { title: t.title },
                      });
                      break;
                    case `delete`:
                      await g.safeDelete(`/projects/{project_id}/saves/{save_id}`, {
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
                    let r = n.query.getData(l, e);
                    r != null &&
                      _(n.queryClient, { ...r, files: r.files.filter((e) => S(e)?.save_id !== t.saveId) });
                  }
                  if (t.type === `create` && s?.title.trim() === ``)
                    for (let t of [1e4, 3e4])
                      setTimeout(() => {
                        n.get(b) === r &&
                          n.get(h) === i &&
                          n.query
                            .getData(k, e)
                            ?.find((e) => e.id === s.id)
                            ?.title.trim() === `` &&
                          n.query.invalidate(k, e);
                      }, t);
                  return s;
                },
                onSettled: () => {
                  n.get(b) === r &&
                    n.get(h) === i &&
                    Promise.all([
                      n.queryClient.invalidateQueries({ queryKey: m(e) }),
                      n.query.invalidate(l, e),
                    ]);
                },
              })
              .execute(void 0),
        };
      })));
  }))();
}
export { T as a, k as i, O as n, E as o, A as r, j as t };
//# sourceMappingURL=data-99703db588c3.js.map
