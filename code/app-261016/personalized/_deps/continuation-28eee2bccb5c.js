import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, SCt as r, ZSt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as a,
  FMr as o,
  Ijr as s,
  Pjr as c,
  RMr as l,
  Rjr as u,
  dLr as d,
  iRr as f,
  lLr as p,
  tyr as m,
  wLr as h,
  zRr as g,
} from "./app-initial-ad16eaadf81f.js";
function _(e, t) {
  return e.get(s) && e.get(g) === t.accountId && e.get(o) === t.accountId && e.get(a) === t.userId;
}
async function v(e, t) {
  let n = e.get(S, t);
  if (!_(e, t) || n.status !== `ready`) return;
  e.set(S, t, { ...n, status: `pending` });
  let { signal: r, assertRequestCurrent: i, dispose: a } = x(e, t);
  try {
    (await f.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
      parameters: { path: { reference: t.reference } },
      requestBody: { connected_plugin_ids: n.pluginIds },
      signal: r,
      assertRequestCurrent: i,
      expectedIdentity: t,
      retry: `never`,
      additionalHeaders: { "ChatGPT-Account-ID": t.accountId },
      expectedErrorStatuses: [400, 403, 404, 424, 502],
    }),
      i(),
      e.set(S, t, { ...n, status: `success` }));
  } catch {
    e.set(S, t, { ...n, status: `error` });
  } finally {
    a();
  }
}
async function y(e, t, n, r) {
  if (!_(e, t)) return;
  let i = e.get(S, t);
  (e.set(S, t, {
    pluginIds: [...new Set([...i.pluginIds, n])],
    status: i.status === `idle` || i.status === `checking` ? `ready` : i.status,
  }),
    r && (await v(e, t)));
}
async function b(e, { resumePath: t, pluginId: n, accountId: r, userId: i }) {
  let s = new URL(t, window.location.origin),
    c = s.searchParams.get(`bundle`);
  if (
    s.origin !== window.location.origin ||
    s.pathname !== `/plugin-suggestions` ||
    !c ||
    c.length > 4096 ||
    !r ||
    !i ||
    e.get(o) !== r ||
    e.get(g) !== r ||
    e.get(a) !== i
  )
    return;
  let l = { reference: c, accountId: r, userId: i };
  if (
    (e.get(p, r).status === `pending` &&
      (await e.when(({ get: e }) => e(o) !== r || e(g) !== r || e(a) !== i || e(p, r).status !== `pending`)),
    !_(e, l))
  )
    return;
  let u = e.get(S, l);
  u.status === `idle` && e.set(S, l, { ...u, status: `checking` });
  let { signal: d, assertRequestCurrent: m, dispose: h } = x(e, l);
  try {
    let t = await f.safeGet(`/messaging/plugin-suggestions/{reference}`, {
      parameters: { path: { reference: c } },
      additionalHeaders: { "ChatGPT-Account-ID": r },
      expectedErrorStatuses: [403, 404, 424],
      signal: d,
      assertRequestCurrent: m,
      expectedIdentity: l,
    });
    if ((m(), !t.suggestions.some((e) => e.plugin_id === n))) {
      _(e, l) && e.set(S, l, u);
      return;
    }
    await y(e, l, n, t.suggestions.length === 1);
  } catch {
    e.set(S, l, d.aborted ? u : { pluginIds: [n], status: `error` });
  } finally {
    h();
  }
}
function x(e, t) {
  let n = new AbortController(),
    r = e.watch(({ get: r }) => {
      (r(s), r(g), r(o), r(a), _(e, t) || n.abort());
    });
  return {
    signal: n.signal,
    assertRequestCurrent: () => {
      if ((n.signal.throwIfAborted(), u(e), !_(e, t)))
        throw new DOMException(`Orbit access changed`, `AbortError`);
    },
    dispose: r,
  };
}
var S;
function C() {
  return (C = e(() => {
    (i(), d(), l(), h(), m(), c(), t(), (S = r(n, (e) => ({ pluginIds: [], status: `idle` }))));
  }))();
}
export { S as a, C as i, y as n, v as r, b as t };
//# sourceMappingURL=continuation-28eee2bccb5c.js.map
