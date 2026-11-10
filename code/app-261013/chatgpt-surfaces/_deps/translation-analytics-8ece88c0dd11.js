import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { EPt as t, Irt as n, RLt as r, TLt as i, pLt as a, xLt as o } from "./app-shared-bbfeca5e5737.js";
import { ocr as s } from "./app-initial-5851df3f6cb1.js";
var c, l, u, d, f, p, m, h, g, _, v;
function y() {
  return (y = e(() => {
    ((c = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockRendered` }),
      (l = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockRequestedTranslation` }),
      (u = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockReceivedTranslation` }),
      (d = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockFailedTranslation` }),
      (f = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockChangedSourceLanguage` }),
      (p = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockChangedDestinationLanguage` }),
      (m = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockSwappedButtonTapped` }),
      (h = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockCopyButtonTapped` }),
      (g = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockPronounceButtonTapped` }),
      (_ = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockPronounceButtonPlayed` }),
      (v = { $type: `protobuf_analytics_events.v1.ChatgptTranslationBlockPronounceButtonFailed` }));
  }))();
}
function b(e, t) {
  let a = {};
  if (typeof e.data.metadata == `string`)
    try {
      a = o(i(), r()).parse(JSON.parse(e.data.metadata));
    } catch {}
  let s = T.parse({ ...a, ...e.data });
  return {
    destinationLanguage: x(e.data.target_language, `en`),
    entrypoint: s.entrypoint,
    experimentVersion: s.experiment_version ?? s.version,
    messageId: t,
    sourceLanguage: x(e.data.source_language, `auto`),
    sourceTextLength: n(e.data.content.trim().length) ?? n(0),
  };
}
function x(e, t) {
  let n = e?.trim().replaceAll(`_`, `-`);
  if (!n || n.toLocaleLowerCase() === `auto`) return t;
  let r = n.toLocaleLowerCase();
  return C.get(r) ?? C.get(r.replace(/[(),]/g, ` `).replace(/\s+/g, ` `).trim()) ?? n;
}
var S, C, w, T;
function E() {
  return (E = e(() => {
    (s(),
      t(),
      (S = {
        arabic: `ar`,
        bengali: `bn`,
        burmese: `my`,
        chinese: `zh-CN`,
        "chinese simplified": `zh-CN`,
        "simplified chinese": `zh-CN`,
        "chinese traditional": `zh-TW`,
        "traditional chinese": `zh-TW`,
        czech: `cs`,
        dutch: `nl`,
        english: `en`,
        farsi: `fa`,
        finnish: `fi`,
        french: `fr`,
        german: `de`,
        gujarati: `gu`,
        hausa: `ha`,
        hebrew: `he`,
        hindi: `hi`,
        hungarian: `hu`,
        igbo: `ig`,
        indonesian: `id`,
        italian: `it`,
        japanese: `ja`,
        javanese: `jv`,
        kannada: `kn`,
        kinyarwanda: `rw`,
        korean: `ko`,
        latin: `la`,
        malay: `ms`,
        malayalam: `ml`,
        marathi: `mr`,
        odia: `or`,
        persian: `fa`,
        polish: `pl`,
        portuguese: `pt-BR`,
        "portuguese brazil": `pt-BR`,
        "brazilian portuguese": `pt-BR`,
        "portuguese portugal": `pt-PT`,
        punjabi: `pa`,
        romanian: `ro`,
        russian: `ru`,
        sinhala: `si`,
        slovak: `sk`,
        spanish: `es`,
        swedish: `sv`,
        tagalog: `tl`,
        tamil: `ta`,
        telugu: `te`,
        thai: `th`,
        turkish: `tr`,
        urdu: `ur`,
        vietnamese: `vi`,
        yoruba: `yo`,
        zulu: `zu`,
        "high valyrian": `hv`,
      }),
      (C = new Map([
        ...Object.entries(S),
        ...[...Object.values(S), `zh-HK`].map((e) => [e.toLocaleLowerCase(), e]),
      ])),
      (w = [...new Set(C.values())]),
      (T = a({
        entrypoint: i()
          .min(1)
          .optional()
          .catch(void 0),
        experiment_version: i()
          .min(1)
          .optional()
          .catch(void 0),
        version: i()
          .min(1)
          .optional()
          .catch(void 0),
      })));
  }))();
}
export {
  p as a,
  d as c,
  g as d,
  u as f,
  y as g,
  m as h,
  w as i,
  v as l,
  l as m,
  b as n,
  f as o,
  c as p,
  E as r,
  h as s,
  x as t,
  _ as u,
};
//# sourceMappingURL=translation-analytics-8ece88c0dd11.js.map
