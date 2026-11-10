import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $ft as t,
  Cot as n,
  Pxt as r,
  Qft as i,
  lgt as a,
  nSt as o,
  rrt as s,
  rst as c,
  srt as l,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $fr as d,
  K6n as f,
  Qfr as p,
  epr as m,
  gAn as h,
  hAn as g,
  v8n as _,
} from "./app-initial-5851df3f6cb1.js";
async function v({
  cloudFileAccess: e,
  filePath: n,
  hostId: r,
  maximumSizeBytes: a,
  requireTextContent: o = !1,
  signal: c,
}) {
  if (e != null) {
    let { environmentId: r, requestClient: i } = e;
    c?.throwIfAborted();
    let s = { environmentId: r, path: n },
      l = await i.sendRequest(`fs/getMetadata`, s);
    c?.throwIfAborted();
    let { dataBase64: u } = await i.sendRequest(`fs/readFile`, s);
    c?.throwIfAborted();
    let d = m(u);
    if (a != null && d.byteLength > a) throw Error(`File is too large`);
    if (o && (await t(d.subarray(0, 4096))) !== `text`) throw Error(`File is not text`);
    return { content: new TextDecoder().decode(d), mtimeMs: l.modifiedAtMs, sizeBytes: d.byteLength };
  }
  let {
    contentKind: l,
    mtimeMs: u,
    sizeBytes: d,
  } = await s(`read-file-metadata`, {
    params: { ...(o ? { contentSampleByteLimit: i, contentSampleMaxFileBytes: a } : {}), hostId: r, path: n },
    signal: c,
  });
  if (a != null && d != null && d > a) throw Error(`File is too large`);
  if (o && l !== `text`) throw Error(`File is not text`);
  let { contents: f } = await s(`read-file`, { params: { hostId: r, path: n }, signal: c }),
    p = a == null && d != null ? d : new Blob([f]).size;
  if (a != null && p > a) throw Error(`File is too large`);
  return { content: f, mtimeMs: u ?? null, sizeBytes: p };
}
async function y({ cloudFileAccess: e, content: t, expectedMtimeMs: n, filePath: r, hostId: i }) {
  if (e != null) {
    let { environmentId: i, requestClient: a } = e,
      o = { environmentId: i, path: r },
      { modifiedAtMs: s } = await a.sendRequest(`fs/getMetadata`, o);
    return s === n
      ? (await a.sendRequest(`fs/writeFile`, { ...o, dataBase64: p(t) }),
        { mtimeMs: (await a.sendRequest(`fs/getMetadata`, o)).modifiedAtMs, outcome: `saved` })
      : { mtimeMs: s, outcome: `conflict` };
  }
  return s(`write-file`, { params: { content: t, expectedMtimeMs: n, hostId: i, path: r } });
}
var b;
function x() {
  return (x = e(() => {
    (r(),
      c(),
      _(),
      u(),
      g(),
      d(),
      l(),
      (b = o(
        n,
        (e, { get: t }) => {
          if (e != null) {
            let n = t(h, { kind: `app-server`, conversationId: e });
            if (n?.hostId === `durable`) return { environmentId: n.environmentId, requestClient: t(f, a) };
          }
        },
        { isEqual: (e, t) => e?.environmentId === t?.environmentId && e?.requestClient === t?.requestClient },
      )));
  }))();
}
export { y as i, x as n, v as r, b as t };
//# sourceMappingURL=text-file-storage-b2e57fb6ac22.js.map
