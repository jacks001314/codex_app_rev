import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, aSt as r, wot as i } from "./app-shared-bbfeca5e5737.js";
import {
  GMr as a,
  LMr as o,
  XMr as s,
  Ymr as c,
  dDr as l,
  ehr as u,
  fOr as d,
  hDr as f,
  hOr as p,
  pDr as m,
  tNr as h,
  zMr as g,
} from "./app-initial-5851df3f6cb1.js";
function _(e, t) {
  return e.get(m) && e.get(a) === t.accountId && e.get(d) === t.accountId && e.get(s) === t.userId;
}
async function v(e, t) {
  let n = e.get(S, t);
  if (!_(e, t) || n.status !== `ready`) return;
  e.set(S, t, { ...n, status: `pending` });
  let { signal: r, assertRequestCurrent: i, dispose: a } = x(e, t);
  try {
    (await c.safePost(`/messaging/plugin-suggestions/{reference}/continue`, {
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
  let l = new URL(t, window.location.origin),
    u = l.searchParams.get(`bundle`);
  if (
    l.origin !== window.location.origin ||
    l.pathname !== `/plugin-suggestions` ||
    !u ||
    u.length > 4096 ||
    !r ||
    !i ||
    e.get(d) !== r ||
    e.get(a) !== r ||
    e.get(s) !== i
  )
    return;
  let f = { reference: u, accountId: r, userId: i };
  if (
    (e.get(o, r).status === `pending` &&
      (await e.when(({ get: e }) => e(d) !== r || e(a) !== r || e(s) !== i || e(o, r).status !== `pending`)),
    !_(e, f))
  )
    return;
  let p = e.get(S, f);
  p.status === `idle` && e.set(S, f, { ...p, status: `checking` });
  let { signal: m, assertRequestCurrent: h, dispose: g } = x(e, f);
  try {
    let t = await c.safeGet(`/messaging/plugin-suggestions/{reference}`, {
      parameters: { path: { reference: u } },
      additionalHeaders: { "ChatGPT-Account-ID": r },
      expectedErrorStatuses: [403, 404, 424],
      signal: m,
      assertRequestCurrent: h,
      expectedIdentity: f,
    });
    if ((h(), !t.suggestions.some((e) => e.plugin_id === n))) {
      _(e, f) && e.set(S, f, p);
      return;
    }
    await y(e, f, n, t.suggestions.length === 1);
  } catch {
    e.set(S, f, m.aborted ? p : { pluginIds: [n], status: `error` });
  } finally {
    g();
  }
}
function x(e, t) {
  let n = new AbortController(),
    r = e.watch(({ get: r }) => {
      (r(m), r(a), r(d), r(s), _(e, t) || n.abort());
    });
  return {
    signal: n.signal,
    assertRequestCurrent: () => {
      if ((n.signal.throwIfAborted(), f(e), !_(e, t)))
        throw new DOMException(`Orbit access changed`, `AbortError`);
    },
    dispose: r,
  };
}
var S;
function C() {
  return (C = e(() => {
    (n(), g(), p(), h(), u(), l(), i(), (S = r(t, (e) => ({ pluginIds: [], status: `idle` }))));
  }))();
}
export { S as a, C as i, y as n, v as r, b as t };
//# sourceMappingURL=continuation-df76213cae0c.js.map
