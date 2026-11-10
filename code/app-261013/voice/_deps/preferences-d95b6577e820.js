import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { bFr as t, iNr as n, rNr as r, xFr as i } from "./app-initial-5851df3f6cb1.js";
function a(e, t, r) {
  return n(e, t, {
    coerceStoredValue: (e) => (e == null ? t : r?.coerceStoredValue == null ? e : r.coerceStoredValue(e)),
  });
}
function o() {
  return (o = e(() => {
    r();
  }))();
}
function s(e) {
  return e === `none` || e === `asr` || e === `volume`;
}
function c(e) {
  return s(e) ? e : e === `server_transcription` ? `asr` : `volume`;
}
function l() {
  let e = t(`voiceDuckingControl`);
  return e === `server_transcription` || e === `microphone` ? c(e) : s(e) ? e : void 0;
}
function u(e) {
  return typeof e != `number` || !Number.isFinite(e) ? -10 : Math.min(0, Math.max(-60, Math.round(e)));
}
function d() {
  let e = t(`voiceDuckingDecibels`);
  return e == null ? void 0 : u(e);
}
function f(e) {
  let t = typeof e == `string` && e.trim() !== `` ? Number(e) : e;
  return typeof t == `number` && Number.isFinite(t) ? Math.max(1, Math.min(60, Math.trunc(t))) : 8;
}
var p, m, h, g;
function _() {
  return (_ = e(() => {
    (i(),
      r(),
      o(),
      (p = n(`oai/apps/voiceLastUsed`, null)),
      n(`jump-to-shade`, null),
      (m = a(`oai/apps/voiceModelSlug`, ``)),
      a(`voiceDuckingControl`, `volume`),
      n(`voiceDuckingDecibels`, -10, { coerceStoredValue: u }),
      (h = a(`voiceErleInformedDuckingEnabled`, !0)),
      (g = n(`voiceErleConfiguredDuckingDepthDb`, 8, { coerceStoredValue: f })));
  }))();
}
export { d as a, m as c, u as i, h as n, _ as o, l as r, p as s, g as t };
//# sourceMappingURL=preferences-d95b6577e820.js.map
