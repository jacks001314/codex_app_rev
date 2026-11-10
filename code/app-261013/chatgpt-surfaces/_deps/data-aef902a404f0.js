import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, RSt as n, Zxt as r, fSt as i, zSt as a } from "./app-shared-bbfeca5e5737.js";
import {
  QMr as o,
  Qmr as s,
  aPr as c,
  ehr as l,
  sPr as u,
  tNr as d,
  tln as f,
  wpt as p,
} from "./app-initial-5851df3f6cb1.js";
function m(e, t, n) {
  n.throwIfAborted();
  let { accountId: r, userId: i } = e.value,
    a = e.get(o).authenticatedUserId,
    s = () => {
      let t = e.get(o);
      if (t.authenticatedAccountId !== r || t.userId !== i || a == null || t.authenticatedUserId !== a)
        throw new DOMException(`The saved entity account changed`, `AbortError`);
    };
  s();
  let c = g.get(e.queryClient) ?? new Map();
  g.set(e.queryClient, c);
  let l = JSON.stringify([r, i, a]),
    u = c.get(l);
  if (u == null) {
    let t = new Map(),
      n = new AbortController(),
      i = async () => {
        if ((c.delete(l), clearTimeout(o.timer), (o.timer = void 0), t.size !== 0))
          try {
            s();
            let i = await e
              .get(_)
              .safePost(`/chat/frontend/v1/saved-entities/status`, {
                requestBody: { targets: [...t.values()].map((e) => e.target) },
                signal: n.signal,
                assertRequestCurrent: s,
                expectedIdentity: a == null ? void 0 : { accountId: r, userId: a },
              });
            s();
            for (let [e, n] of t) {
              let t = {
                ...i,
                saved_targets: i.saved_targets.filter((t) => h(t) === e),
                saved_entities: i.saved_entities?.filter((t) => h(t.saved_target) === e),
              };
              for (let e of n.readers) e.resolve(t);
            }
          } catch (e) {
            for (let n of t.values()) for (let t of n.readers) t.reject(e);
          } finally {
            for (let e of t.values()) for (let t of e.readers) t.cleanup();
            t.clear();
          }
      },
      o = { entries: t, controller: n, timer: setTimeout(() => void i(), 1e3), flush: i };
    ((u = o), c.set(l, u));
  }
  let d = u,
    f = h(t),
    p = new Promise((e, r) => {
      let i = () => {
          let e = d.entries.get(f);
          (e?.readers.delete(a),
            e?.readers.size === 0 && d.entries.delete(f),
            n.removeEventListener(`abort`, i),
            r(new DOMException(`The saved entity request was canceled`, `AbortError`)),
            d.entries.size === 0 &&
              (c.get(l) === d && c.delete(l), clearTimeout(d.timer), d.controller.abort()));
        },
        a = { resolve: e, reject: r, cleanup: () => n.removeEventListener(`abort`, i) },
        o = d.entries.get(f) ?? { target: t, readers: new Set() };
      (o.readers.add(a), d.entries.set(f, o), n.addEventListener(`abort`, i, { once: !0 }));
    });
  return (u.entries.size === 100 && u.flush(), p);
}
function h(e) {
  return n([
    e.identity ?? {
      ...e.sidebar_params,
      multi_message_mode: e.sidebar_params.multi_message_mode ?? !0,
      extra_params: e.sidebar_params.extra_params ?? null,
    },
  ]);
}
var g, _, v;
function y() {
  return (y = e(() => {
    (a(),
      t(),
      d(),
      p(),
      u(),
      l(),
      (g = new WeakMap()),
      (_ = i(
        f,
        ({ scope: e }) =>
          new c({
            getAdditionalHeaders: () => ({
              ...s(),
              "ChatGPT-Account-ID": e.value.accountId,
              "x-openai-use-sheep": `1`,
            }),
          }),
      )),
      (v = r(f, (e, { scope: t }) => ({
        queryKey: [
          `saved-entities`,
          t.value.accountId,
          t.value.userId,
          `status`,
          e.identity ?? e.sidebar_params,
        ],
        queryFn: ({ signal: n }) => m(t, e, n),
        staleTime: 3e4,
      }))));
  }))();
}
export { _ as n, v as r, y as t };
//# sourceMappingURL=data-aef902a404f0.js.map
