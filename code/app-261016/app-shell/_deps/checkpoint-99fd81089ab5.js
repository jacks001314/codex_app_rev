import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bmn as t, Umn as n, Vmn as r, iRr as i, sRr as a } from "./app-initial-ad16eaadf81f.js";
async function o({ pageId: e, checkpointId: r, streamKind: a, signal: o }) {
  for (let s = 0; s < 2; s += 1) {
    o.throwIfAborted();
    let c = await i.safeGet(`/pages/{page_id}/versions/{checkpoint_id}/checkpoint-bootstrap`, {
      parameters: {
        path: { page_id: e, checkpoint_id: r },
        query: { stream_kind: a, prefer_lite_checkpoint: !0 },
      },
      signal: o,
    });
    if (c.page_id !== e || c.checkpoint?.checkpoint_id !== r)
      throw Error(`The requested Page checkpoint is unavailable`);
    let l = await n(c, o, s > 0, a);
    o.throwIfAborted();
    let u = l == null ? void 0 : t(l);
    if (u != null) return u.update;
    if (Date.parse(c.checkpoint.expires_at) > Date.now()) break;
  }
  throw Error(`The Page checkpoint could not be verified`);
}
function s() {
  return (s = e(() => {
    (r(), a());
  }))();
}
export { s as n, o as t };
//# sourceMappingURL=checkpoint-99fd81089ab5.js.map
