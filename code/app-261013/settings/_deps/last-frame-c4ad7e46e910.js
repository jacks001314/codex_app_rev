import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Pxt as r,
  SPt as i,
  Zxt as a,
  aSt as o,
  cSt as s,
  frt as c,
  hrt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as d,
  Opr as f,
  XMr as p,
  Ymr as m,
  ehr as h,
  tNr as g,
  wpr as _,
} from "./app-initial-5851df3f6cb1.js";
import { n as v, t as y } from "./capture-video-frame-127b50b205c9.js";
var b;
function x() {
  return (x = e(() => {
    (r(),
      g(),
      h(),
      f(),
      u(),
      c(),
      (b = a(n, (e, { get: t, scope: n }) => {
        let r = t(d),
          i = t(p);
        return {
          enabled: r != null && i != null,
          queryKey: [`cloud-aeon-environment-status`, r, i, e],
          queryFn: async ({ signal: t }) => {
            if (r == null || i == null) throw Error(`Your dot’s computer status requires an account`);
            let a = await n.query.getOrFetch(_, e);
            if ((t.throwIfAborted(), a == null))
              return { environmentId: null, status: `unknown`, capabilities: [] };
            try {
              return await m.safeGet(`/tbo/{tbo_id}/environment/status`, {
                additionalHeaders: { "ChatGPT-Account-ID": r },
                parameters: { path: { tbo_id: a.id }, query: { thread_id: e } },
                signal: t,
              });
            } catch (e) {
              if (e instanceof l && e.status === 404)
                return { environmentId: null, status: `unknown`, capabilities: [] };
              throw e;
            }
          },
          gcTime: 0,
          retry: !1,
          staleTime: 0,
          refetchInterval: (e) =>
            e.state.data?.capabilities.some((e) => e.type === `remote_desktop` && e.status === `starting`)
              ? 1e3
              : 5e3,
        };
      })));
  }))();
}
async function S(e, n, r, i, a) {
  let { videoWidth: o, videoHeight: s } = i,
    c = i.srcObject,
    l = performance.now(),
    u,
    d = (r) => (
      t.info(`Computer snapshot capture`, {
        safe: {
          result: r,
          version: u,
          durationMs: Math.round(performance.now() - l),
          readyState: i.readyState,
          paused: i.paused,
          width: o,
          height: s,
          hasCachedFrame: e.get(C, n) != null,
        },
      }),
      r === `saved`
    );
  if (
    a.aborted ||
    i.paused ||
    i.ended ||
    !(c instanceof MediaStream) ||
    !c.getVideoTracks().some((e) => e.readyState === `live` && e.enabled && !e.muted)
  )
    return d(`unready`);
  try {
    let t = `capture_failed`,
      o = y(i, {
        signal: a,
        onFailure: (e) => {
          t = e;
        },
      });
    if (o == null) return d(t);
    let s = e.get(w, n);
    u = ++s.version;
    let l = await o;
    return a.aborted || i.srcObject !== c
      ? d(`interrupted`)
      : l == null
        ? d(t)
        : s.version === u
          ? (e.set(C, n, { environmentId: r, ...l }), d(`saved`))
          : d(`superseded`);
  } catch {
    return d(`capture_failed`);
  }
}
var C, w;
function T() {
  return (T = e(() => {
    (r(), u(), v(), i(), (C = o(n, (e) => null)), (w = s(n, (e) => ({ version: 0 }))));
  }))();
}
export { x as a, b as i, C as n, T as r, S as t };
//# sourceMappingURL=last-frame-c4ad7e46e910.js.map
