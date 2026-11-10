import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  BLt as n,
  EPt as r,
  NLt as i,
  RLt as a,
  TLt as o,
  hrt as s,
  pLt as c,
  vrt as l,
  xLt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Pdt as d, iUn as f } from "./app-initial-5851df3f6cb1.js";
import { Bn as p, Hn as m, Un as h, zn as g } from "./app-primary-fe8a450b3b04.js";
import { t as _ } from "./timing-signals-908971eb73de.js";
function v(e, t) {
  let n = `dil-speech:${crypto.randomUUID()}`,
    r = b(t),
    i = !1,
    a = { status: `idle`, available: r.text.length > 0, error: null },
    o = new Set(),
    c = (e) => {
      (e.status !== a.status || e.available !== a.available || e.error !== a.error) &&
        ((a = e), o.forEach((e) => e()));
    },
    l = () => p(e, n);
  return {
    getSnapshot: () => a,
    subscribe: (e) => (o.add(e), () => o.delete(e)),
    play: () => {
      if (i || !a.available || a.status !== `idle`) return;
      let t = r;
      (y(t),
        c({ ...a, error: null }),
        h(e, {
          playbackId: n,
          cacheKey: JSON.stringify([
            `dil-speech`,
            `mp3`,
            t.text,
            t.pronunciationHint,
            t.language,
            t.playbackSpeed,
            t.version,
          ]),
          synthesizeAudio: (e) =>
            m(
              {
                text: t.text,
                pronunciation_hint: t.pronunciationHint,
                pronunciation_language: t.language,
                speed: t.playbackSpeed,
                source: t.source,
                version: t.version,
              },
              { signal: e },
            ),
          onStatusChange: (e) => c({ ...a, status: e }),
          onError: (e, t) => {
            let n = {
              failureStage: e instanceof s && e.responseStatus != null ? `response` : t,
              httpStatus: e instanceof s ? (e.responseStatus ?? void 0) : void 0,
              errorCode: e instanceof s ? e.errorCode : void 0,
            };
            c({ ...a, error: n });
          },
        }));
    },
    stop: l,
    setSource: (e) => {
      if (i) return;
      let t = b(e),
        { source: n, ...a } = r,
        { source: o, ...s } = t;
      ((r = t),
        JSON.stringify(a) !== JSON.stringify(s) &&
          (l(), c({ status: `idle`, available: r.text.length > 0, error: null })));
    },
    dispose: () => {
      ((i = !0), l(), c({ ...a, available: !1 }), o.clear());
    },
  };
}
function y(e) {
  let t = e.source?.trim().toLowerCase(),
    n = `unknown`;
  t != null && t.length <= 64 && /^[a-z][a-z0-9_]*$/.test(t) && (n = x.has(t) ? t : `other`);
  let r = e.version?.trim();
  return {
    source: n,
    ...(e.language ? { language: e.language } : {}),
    ...(r && /^[a-zA-Z0-9_.-]{1,64}$/.test(r) ? { version: r } : {}),
    ...(e.playbackSpeed == null ? {} : { playbackSpeed: e.playbackSpeed }),
  };
}
function b(e) {
  let t = e.language?.trim().toLowerCase().replaceAll(`_`, `-`);
  return {
    text: e.text.trim(),
    pronunciationHint: e.pronunciationHint?.trim() || void 0,
    language:
      t && t !== `auto` && t !== `unknown` && t.length <= 63 && /^[a-z]{1,8}(?:-[a-z0-9]{1,8}){0,7}$/.test(t)
        ? t
        : void 0,
    playbackSpeed:
      e.playbackSpeed != null &&
      Number.isFinite(e.playbackSpeed) &&
      e.playbackSpeed >= 0.25 &&
      e.playbackSpeed <= 4
        ? e.playbackSpeed
        : void 0,
    version: e.version || void 0,
    source: e.source,
  };
}
var x;
function S() {
  return (S = e(() => {
    (d(),
      f(),
      _(),
      l(),
      g(),
      (x = new Set([`flashcards`, `pronunciation`, `language_learning`, `translation`, `translate_app`])));
  }))();
}
function C(e, t, n) {
  let r = E.safeParse([`genui-voice`, n, e]);
  if (!r.success) return;
  let i = O.safeParse(t);
  if (i.success)
    return [
      i.data.voiceSession,
      ...Object.values(i.data.opGenui?.componentResults ?? {})
        .filter((e) => e.status === `resolved`)
        .map((e) => e.state?.voiceSession),
    ].some((t) => {
      let n = D.safeParse(t);
      return n.success && n.data.id === e;
    })
      ? { voice_landing: T, entrypoint_id: r.data.join(`:`), event_source: `genui_widget_voice_session` }
      : void 0;
}
function w(e) {
  let t = E.safeParse(e?.split(`:`));
  return t.success ? { sourceMessageId: t.data[1], sessionId: t.data[2] } : void 0;
}
var T, E, D, O;
function k() {
  return (k = e(() => {
    (r(),
      (T = `genui_widget_voice_session_v1`),
      (E = i([
        t(`genui-voice`),
        o()
          .min(1)
          .max(128)
          .regex(/^[^:]+$/),
        n(),
      ])),
      (D = c({ id: n() })),
      (O = c({
        voiceSession: a().optional(),
        opGenui: c({
          componentResults: u(
            o(),
            c({ status: o(), state: c({ voiceSession: a().optional() }).optional() }),
          ).optional(),
        }).optional(),
      })));
  }))();
}
export { v as a, w as i, C as n, S as o, k as r, T as t };
//# sourceMappingURL=widget-voice-session-29f5d92c26b9.js.map
