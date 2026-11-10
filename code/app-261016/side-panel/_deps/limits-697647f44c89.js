import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  NXr as t,
  OXr as n,
  PXr as r,
  _Xr as i,
  cZr as a,
  eZr as o,
  jXr as s,
  kXr as c,
  tZr as l,
  xXr as u,
} from "./app-initial-ad16eaadf81f.js";
import { $ as d, et as f, m as p, n as m, p as h, t as g } from "./workbook-1fd3f253a266.js";
import { fn as _, pn as v } from "./presentation-20e3999371ab.js";
import { a as y, i as b, t as x } from "./collab-schema-5e12eae11b34.js";
import { A as S, L as C, O as w, R as T, j as E, k as D } from "./presentation-image-assets-2852083e62f1.js";
import { n as O } from "./artifact-session-image-references-47806b52fdd0.js";
import { r as k, t as A } from "./collaboration-schemas-9ad991c40494.js";
function j(e) {
  let t = M(e.toArtifactBundle());
  if (t !== void 0)
    throw Error(
      `Presentation artifact sessions do not yet support embedded workbook artifacts (found ${JSON.stringify(t)}). The session snapshot would drop the workbook payload. Remove the embedded workbook before creating or updating the live session, or use the file-only presentation workflow.`,
    );
}
function M(e) {
  let t = e.artifacts.find((e) => e.workbook !== void 0);
  if (t !== void 0) return t.id;
  let n = e.artifacts.find((t) => t.id === e.rootArtifactId)?.presentation;
  return n ? N(n) : void 0;
}
function N(e) {
  let t = [...e.slides],
    n = e.layouts.flatMap((e) => e.elements);
  for (let e = 0; e < t.length; e += 1) {
    let r = t[e];
    r !== void 0 && (n.push(...r.elements), r.notesSlide !== void 0 && t.push(r.notesSlide));
  }
  return P(n);
}
function P(e) {
  let t = [...e];
  for (let e = 0; e < t.length; e += 1) {
    let n = t[e];
    if (n === void 0) continue;
    let r = n.embeddedArtifact?.embeddedView;
    if (r?.workbook !== void 0 || r?.artifact?.kind === _.ARTIFACT_KIND_WORKBOOK)
      return r.artifact?.id || n.id || `unknown workbook`;
    t.push(...n.children);
  }
}
function F() {
  return (F = e(() => {
    v();
  }))();
}
async function I(e, t) {
  let { signal: n } = t,
    r = new Map(),
    i = new Map();
  for (let a of e) {
    n?.throwIfAborted();
    let e = a.data,
      o = a.contentType.toLowerCase();
    if (a.uri !== void 0) {
      if (/^data:/i.test(a.uri)) {
        let t = f({ dataUrl: a.uri });
        if (t.data === void 0 || t.data.byteLength === 0)
          throw Error(`Artifact import contains an invalid image data URI.`);
        if (((e = t.data), t.contentType !== void 0)) {
          if (o.length > 0 && o !== t.contentType)
            throw Error(`Artifact import image MIME type disagrees with its data URI.`);
          o = t.contentType;
        }
      } else {
        let n = `${o}:${a.uri}`,
          r = i.get(n);
        (r === void 0 && ((r = new Uint8Array(await t.resolveAsset(a.uri, o))), i.set(n, r)), (e = r));
      }
    }
    if (e.byteLength === 0 && a.uri === void 0) continue;
    if (e.byteLength === 0 || o.length === 0)
      throw Error(`Artifact import image bytes and content type are required.`);
    n?.throwIfAborted();
    let s = new Uint8Array(e),
      c = new Uint8Array(await crypto.subtle.digest(`SHA-256`, s)),
      l = Array.from(c, (e) => e.toString(16).padStart(2, `0`)).join(``),
      u = r.get(l);
    if (u === void 0)
      r.set(l, { sha256: l, contentType: o, byteLength: s.byteLength, imageIds: [a.id], data: s });
    else {
      if (u.contentType !== o)
        throw Error(`Artifact import assigns different content types to identical image bytes.`);
      u.imageIds.push(a.id);
    }
  }
  return [...r.values()];
}
function L() {
  return (L = e(() => {
    d();
  }))();
}
function R(e) {
  e.__flushPendingCollaborativePublishes();
  let t;
  if (e.isCollaborativeStateReady()) {
    let n = new u();
    try {
      (n.transact(() => {
        for (let [t, r] of U(e)) W(t, r, n);
      }),
        (t = l(n)));
    } finally {
      n.destroy();
    }
  }
  return e instanceof h
    ? (j(e),
      {
        kind: `presentation`,
        nativeStateV2: t,
        artifactProto: structuredClone({
          ...e.toProto(),
          slides: e.slides.toProto(),
          layouts: e.layouts.toProto(),
          images: e.getImageAssetItems().map((e) => e.toProto()),
        }),
      })
    : { kind: `spreadsheet`, nativeStateV2: t, artifactProto: structuredClone(e.toProto()) };
}
async function z(e, t) {
  let { signal: n } = t;
  n?.throwIfAborted();
  let r;
  e.kind === `presentation`
    ? (r = h.load(structuredClone(e.artifactProto)))
    : ((r = g.load(structuredClone(e.artifactProto))), r.useExternalImageAssetStorage());
  try {
    if (e.nativeStateV2 !== void 0) {
      r.loadInitialCrdtStateV2(e.nativeStateV2);
      for (let t of e.artifactProto.images) {
        let e = r.resolveImageAsset(t.id);
        e !== void 0 && t.uri !== void 0 && e.uri === t.uri && e.hydrate(t);
      }
      if (!A[e.kind].writableSchemas.includes(H(r)))
        throw Error(`Artifact import contains an unsupported native schema.`);
      if (r instanceof g)
        for (let e of r.worksheets.items) {
          if (e.sheetId === void 0) throw Error(`Artifact import worksheets require native identities.`);
          let t = r.getCrdtDoc().getMap(S(e.sheetId)).get(`meta`);
          if (!(t instanceof c) || t.get(`schemaVersion`) !== 1)
            throw Error(`Artifact import contains an unsupported native schema.`);
        }
    }
    r instanceof h && j(r);
    let i = B(e.artifactProto, r),
      a = await I(
        r.getImageAssetItems().filter((e) => i.has(e.id)),
        t,
      ),
      o = new Map(a.flatMap((e) => e.imageIds.map((t) => [t, e.contentType])));
    n?.throwIfAborted();
    let s = () => {
      for (let e of r.getImageAssetItems())
        (e.rebindSourceReference(void 0, { contentType: o.get(e.id) }), e.deleteHydratedData());
    };
    (r.isCollaborativeStateReady() ? r.record(s) : (s(), r.hydrateCrdtFromProto()),
      r.__flushPendingCollaborativePublishes());
    let l = new u();
    try {
      return (
        l.transact(() => {
          for (let [e, t] of U(r)) W(e, t, l);
        }),
        { kind: e.kind, update: q(l, t.format), assets: a }
      );
    } finally {
      l.destroy();
    }
  } finally {
    r.getCrdtDoc().destroy();
  }
}
function B(e, t) {
  let r = O(e);
  if (!t.isCollaborativeStateReady()) return r;
  let i = [...U(t).values()].map((e) => ({ value: e })),
    a;
  a = t instanceof h ? b(t.getCrdtDoc()) : w(t.getCrdtDoc());
  let o = new Set();
  for (; i.length > 0;) {
    let { key: e, value: t } = i.pop(),
      l = t;
    if (!(typeof l != `object` || !l || l instanceof Uint8Array || o.has(l))) {
      if ((o.add(l), e === `imageReference` || e === `previewImageReference`)) {
        let e;
        (l instanceof c ? (e = l.get(`id`)) : `id` in l && (e = l.id),
          typeof e == `string` && e.length > 0 && r.add(e));
      }
      if (l instanceof c) {
        let t = new Set();
        for (let [n, r] of l) {
          if (l === a && (n === `images.schemaVersion` || n.startsWith(`images.state.`))) continue;
          let o = n.lastIndexOf(`.state.`);
          if (o > 0) {
            let e = n.slice(0, o);
            if (t.has(e)) continue;
            let r = C(l, e);
            if (r !== void 0) {
              (t.add(e), r.snapshot !== void 0 && i.push({ value: JSON.parse(r.snapshot) }));
              continue;
            }
          }
          let s = r;
          (e === `structure` && typeof r == `string` && (s = JSON.parse(r)), i.push({ key: n, value: s }));
        }
      } else if (l instanceof s) i.push({ value: l.toDelta() });
      else if (l instanceof n) i.push({ value: l.toArray() });
      else if (Array.isArray(l)) for (let e of l) i.push({ value: e });
      else for (let [e, t] of Object.entries(l)) i.push({ key: e, value: t });
    }
  }
  return r;
}
function V(e, t, n) {
  let r = new Map();
  for (let e of t)
    for (let t of e.imageIds) {
      if (r.has(t)) throw Error(`Artifact import image identity is duplicated.`);
      r.set(t, e);
    }
  let i = B(e.toProto(), e),
    a = new Map(e.getImageAssetItems().map((e) => [e.id, e])),
    o = new Set(),
    s = new Map(),
    c = n.flatMap(({ imageIds: e, uri: t }) => {
      if (t.length === 0) throw Error(`Artifact import image URI is required.`);
      let n;
      return e.map((e) => {
        if (o.has(e)) throw Error(`Artifact import image identity is duplicated.`);
        o.add(e);
        let c = r.get(e),
          l = a.get(e);
        if (c === void 0 || l === void 0 || !i.has(e))
          throw Error(`Artifact import image identity is missing or changed.`);
        if (n !== void 0 && n !== c) throw Error(`Artifact import image mapping combines different assets.`);
        n = c;
        let u = s.get(t);
        if (u !== void 0 && u !== c) throw Error(`Artifact import image URI is shared by different assets.`);
        if ((s.set(t, c), l.uri !== void 0 || l.dataByteLength !== 0 || l.contentType !== c.contentType))
          throw Error(`Artifact import image source changed before upload completed.`);
        return { image: l, uri: t };
      });
    });
  if (o.size !== r.size) throw Error(`Artifact import image mapping is incomplete.`);
  for (let { image: e, uri: t } of c) e.rebindSourceReference(t);
}
function H(e) {
  let t;
  t = e instanceof h ? b(e.getCrdtDoc()) : w(e.getCrdtDoc());
  let n = t.get(`meta`);
  if (!(n instanceof c)) throw Error(`Artifact import requires an initialized native document.`);
  let r = n.get(`schemaVersion`);
  if (typeof r != `number` || !Number.isSafeInteger(r) || r < 1)
    throw Error(`Artifact import requires a native schema version.`);
  return r;
}
function U(e) {
  let t = e.getCrdtDoc(),
    n = new Map();
  if (e instanceof h) return (n.set(x, b(t)), n);
  let r = new Set(D(t)),
    i = [];
  for (let t of e.worksheets.items) {
    if (t.sheetId === void 0) throw Error(`Artifact import worksheets require native identities.`);
    i.push(S(t.sheetId));
  }
  for (let [e, a] of t.share)
    r.has(a) &&
      (!e.startsWith(`sheet:`) || i.some((t) => e === t || e.startsWith(`${t}:`))) &&
      (e === `styles.entryOrder` ? n.set(e, t.getArray(e)) : n.set(e, t.getMap(e)));
  return n;
}
function W(e, t, r) {
  let i = String(r.clientID);
  t instanceof n
    ? r.getArray(e).insert(
        0,
        t.toArray().map((e) => K(e, i)),
      )
    : G(t, r.getMap(e), i);
}
function G(e, t, n) {
  let r = new Map();
  for (let t of e.keys()) {
    let n = t.lastIndexOf(`.state.`),
      i;
    if (t.endsWith(`.schemaVersion`)) i = t.slice(0, -14);
    else if (n > 0) i = t.slice(0, n);
    else continue;
    if (r.has(i)) continue;
    let a = C(e, i);
    a !== void 0 && r.set(i, a);
  }
  let i = [...r.keys()].map((e) => `${e}.state.`);
  for (let [r, a] of e) i.some((e) => r.startsWith(e)) || t.set(r, K(a, n));
  for (let [e, i] of r) t.set(`${e}.state.${n}`, { clock: 0, snapshot: i.snapshot });
}
function K(e, a) {
  if (e instanceof c) {
    let t = new c();
    return (G(e, t, a), t);
  }
  if (e instanceof n) {
    let t = new n();
    return (
      t.insert(
        0,
        e.toArray().map((e) => K(e, a)),
      ),
      t
    );
  }
  if (e instanceof t || e instanceof r)
    throw Error(`Artifact import contains an unsupported native shared type.`);
  if (e instanceof s) {
    let t = new s();
    return (
      t.applyDelta(
        e.toDelta().map((e) => ({ insert: K(e.insert, a), attributes: structuredClone(e.attributes) })),
      ),
      t
    );
  }
  if (e instanceof i || e instanceof u)
    throw Error(`Artifact import contains an unsupported native shared type.`);
  return structuredClone(e);
}
function q(e, t) {
  switch (t) {
    case `v1`:
      return o(e);
    case `v2`:
      return l(e);
    default:
      throw Error(`Unsupported Yjs update format.`);
  }
}
function J() {
  return (J = e(() => {
    (a(), k(), F(), L(), p(), m(), y(), E(), T());
  }))();
}
var Y;
function X() {
  return (X = e(() => {
    Y = 209715200;
  }))();
}
function Z(e) {
  let t = 0,
    n = new Set();
  if (e.assets.length > 100) throw Error(`artifact_import_too_many_assets`);
  for (let r of e.assets) {
    if (
      ((t += r.byteLength),
      r.byteLength <= 0 ||
        r.byteLength !== r.data.byteLength ||
        t > 209715200 ||
        !/^image\/[a-zA-Z0-9!#$&^_.+-]{1,100}$/.test(r.contentType) ||
        r.imageIds.length === 0 ||
        r.imageIds.length > 1e3)
    )
      throw Error(`artifact_import_asset_limit`);
    for (let e of r.imageIds) {
      if (e.length === 0 || e.length > 256) throw Error(`artifact_import_invalid_image_id`);
      if (n.has(e)) throw Error(`artifact_import_duplicate_image`);
      if ((n.add(e), n.size > 1e3)) throw Error(`artifact_import_asset_limit`);
    }
  }
}
function Q() {
  return (Q = e(() => {
    X();
  }))();
}
export { R as a, V as c, X as i, Z as n, z as o, Y as r, J as s, Q as t };
//# sourceMappingURL=limits-697647f44c89.js.map
