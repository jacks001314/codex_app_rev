import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Pxt as r,
  TLt as i,
  _It as a,
  _xt as o,
  cSt as ee,
  fLt as s,
  fSt as c,
  oIt as te,
  oSt as ne,
  pIt as re,
  pLt as l,
  vxt as ie,
  wot as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  ALn as d,
  DPr as f,
  EAt as p,
  ELn as m,
  FFr as h,
  NDr as g,
  OPr as _,
  Qjr as v,
  RLn as y,
  TAt as b,
  XMr as x,
  Zjr as ae,
  _In as oe,
  aUn as se,
  iUn as ce,
  jDr as S,
  jPr as C,
  lhr as le,
  shr as ue,
  tNr as de,
  vIn as w,
  zFr as T,
} from "./app-initial-5851df3f6cb1.js";
import { dc as E, pc as D } from "./app-primary-fe8a450b3b04.js";
import { n as O, t as k } from "./command-state-7dc5a32fb56e.js";
import { c as A, o as j } from "./preferences-d95b6577e820.js";
import { n as M, t as N } from "./browser-voice-mode-redirect-e7bf658d6b8f.js";
var P, F, I;
function L() {
  return (L = e(() => {
    (r(),
      u(),
      (P = c(t, !1)),
      (F = c(t, !1)),
      (I = {
        setTomatoHint: (e, t) => e.set(P, t),
        getTomatoHint: (e) => e.get(P),
        setPotatoHint: (e, t) => e.set(F, t),
        getPotatoHint: (e) => e.get(F),
      }));
  }))();
}
function R(e) {
  return e === `wm`;
}
function z() {
  return (z = e(() => {}))();
}
function B(e) {
  let t = e.get(h)?.pathname;
  return t != null && ie(`/scheduled`, t) != null;
}
function V(e) {
  let t = e.get(S).data?.voiceMode;
  return J.find((e) => e === t);
}
function H(e, t) {
  if (t == null || !y(t)) return !1;
  let n = e.get(oe, t).data;
  return (
    n != null &&
    (n.gizmo.gizmo_snorlax_type == null ||
      (n.gizmo.gizmo_snorlax_type === `locked_chats` && e.get(le)?.projectId === t)) &&
    !d(n)
  );
}
var U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      o(),
      n(),
      de(),
      w(),
      m(),
      D(),
      g(),
      ue(),
      T(),
      u(),
      ae(),
      _(),
      M(),
      O(),
      j(),
      ce(),
      L(),
      p(),
      (U = `2688454279`),
      (W = `2438435464`),
      (G = `no_auth_bidi_enabled`),
      (K = `no_auth_bidi_composer_enabled`),
      (q = l({
        rollout_policy: te([`unavailable`, `available_opt_in`, `available_default`])
          .optional()
          .catch(void 0),
        rollout_version: s()
          .optional()
          .catch(void 0),
        home_takeover_enabled: a()
          .optional()
          .catch(void 0),
        home_takeover_animation_enabled: a()
          .optional()
          .catch(void 0),
        voice_model_picker_available: a()
          .optional()
          .catch(void 0),
        incall_voice_model_picker_available: a()
          .optional()
          .catch(void 0),
        incall_banner_enabled: a()
          .optional()
          .catch(void 0),
        unavailable_upsell_policy: i()
          .optional()
          .catch(void 0),
        wingman_model_name: i()
          .optional()
          .catch(void 0),
        wingman_model_picker_default_display_name: i()
          .optional()
          .catch(void 0),
        wingman_model_picker_alternative_options: re(l({ display_name: i().optional(), slug: i() }))
          .optional()
          .catch(void 0),
        projects_enabled: a()
          .optional()
          .catch(void 0),
      })),
      (J = [`wingman`, `advanced`, `standard`]),
      (Y = ee(t, (e, { scope: t }) => t)),
      (X = class {
        readPolicyConfig(e) {
          let t = q.safeParse(e.get(v, U)?.value ?? {});
          return t.success ? t.data : {};
        }
        shouldShowWingmanComingSoon(e, t) {
          if (t !== `vp`) return !1;
          let n = this.readPolicyConfig(e);
          return n.rollout_policy === `unavailable` && n.unavailable_upsell_policy === `coming_soon`;
        }
        wingmanModelName(e) {
          return this.readPolicyConfig(e).wingman_model_name || `GPT Live 1`;
        }
        wingmanDisplayName(e, t) {
          let n = this.readPolicyConfig(e);
          return t == null || t.length === 0
            ? n.wingman_model_picker_default_display_name || `Live`
            : this.getWingmanAlternativeOptions(e).find(({ slug: e }) => e === t)?.display_name || t;
        }
        policyVersion(e) {
          let t = this.readPolicyConfig(e).rollout_version;
          return typeof t == `number` && Number.isInteger(t) && t >= 0 ? t : void 0;
        }
        isInCallVoiceModelPickerAvailable(e) {
          return !!this.readPolicyConfig(e).incall_voice_model_picker_available;
        }
        normalizeFeatherTransportOnlyVoiceMode(e, t) {
          return I.getPotatoHint(e) && t === `standard` ? `advanced` : t;
        }
        legacyResolvedVoice$(e) {
          return (e.get(E).data?.disabled_tools?.includes(`advanced_voice`) ?? !1) ? `standard` : `advanced`;
        }
        legacyResolvedVoice(e) {
          return this.legacyResolvedVoice$(e.get(Y, void 0));
        }
        policyResolvedVoice$(e, { disableNoAuthBidiExposureLog: t } = {}) {
          let n = this.readPolicyConfig(e),
            r = n.rollout_policy;
          if (e.get(x) == null) {
            let n = t ?? !0;
            return !this.isWingmanUnsupportedContext(e) &&
              r === `available_default` &&
              e.get(C)?.getLayer(W, { disableExposureLog: n }).get(G, !1)
              ? `wingman`
              : void 0;
          }
          if (e.get(N)) return `wingman`;
          let i = V(e),
            a = e.get(S).data?.voiceModePolicyVersion,
            o = n.rollout_version;
          return r === `unavailable`
            ? i === `wingman`
              ? `advanced`
              : this.normalizeFeatherTransportOnlyVoiceMode(e, i)
            : r === `available_opt_in`
              ? this.normalizeFeatherTransportOnlyVoiceMode(e, i)
              : r === `available_default`
                ? i === `standard` || (a != null && typeof o == `number` && a >= o)
                  ? this.normalizeFeatherTransportOnlyVoiceMode(e, i)
                  : `wingman`
                : this.normalizeFeatherTransportOnlyVoiceMode(e, i === `wingman` ? `advanced` : i);
        }
        policyResolvedVoice(e, t = {}) {
          return this.policyResolvedVoice$(e.get(Y, void 0), t);
        }
        isWmOptionAvailable(e) {
          if (e.get(N)) return !0;
          let t = this.readPolicyConfig(e).rollout_policy;
          return t === `available_opt_in` || t === `available_default`;
        }
        isNoAuthBidiEnabled(e, { disableNoAuthBidiExposureLog: t = !1 } = {}) {
          return (
            e.get(x) == null && this.policyResolvedVoice(e, { disableNoAuthBidiExposureLog: t }) === `wingman`
          );
        }
        exposeNoAuthBidiExperiment(e) {
          e.get(C)?.getLayer(W).get(G, !1);
        }
        isNoAuthBidiComposerEnabled(e, { disableNoAuthBidiExposureLog: t = !1 } = {}) {
          return (
            this.isNoAuthBidiEnabled(e, { disableNoAuthBidiExposureLog: t }) &&
            !!e.get(C)?.getLayer(W, { disableExposureLog: t }).get(K, !1)
          );
        }
        getWingmanAlternativeOptions(e) {
          return this.readPolicyConfig(e).wingman_model_picker_alternative_options ?? [];
        }
        getBaseVoiceOptions(e) {
          return this.isWmOptionAvailable(e)
            ? J.map((e) => ({ modelSlug: ``, voiceModel: e }))
            : [
                { modelSlug: ``, voiceModel: `advanced` },
                { modelSlug: ``, voiceModel: `standard` },
              ];
        }
        getVoiceExtraOptions(e) {
          return this.isWmOptionAvailable(e)
            ? this.getWingmanAlternativeOptions(e).map(({ slug: e }) => ({
                modelSlug: e,
                voiceModel: `wingman`,
              }))
            : [];
        }
        getVoiceOptions(e) {
          return [...this.getBaseVoiceOptions(e), ...this.getVoiceExtraOptions(e)];
        }
        resolveVoiceOption$(e, t) {
          let n = e.get(A),
            r = this.getVoiceOptions(e);
          return (
            r.find((e) => e.voiceModel === t && e.modelSlug === n) ??
            r.find((e) => e.voiceModel === t && e.modelSlug.length === 0) ?? { modelSlug: ``, voiceModel: t }
          );
        }
        setLocalModelSlug(e, t) {
          e.set(A, t);
        }
        tcLoggingEnabled(e) {
          return I.getTomatoHint(e);
        }
        voicePath(e, t, n) {
          let r = `/realtime`;
          return this.sessionType(e, n) === `wm` ? `${r}/wm` : `${r}/vp${t === `standard` ? `s` : ``}`;
        }
        isWingmanUnsupportedContext(e, t) {
          let n = t === void 0 ? b(e) : t;
          return (n != null && !this.isBidiProjectContextEnabled(e, n)) || B(e);
        }
        isBidiProjectContextEnabled(e, t) {
          return (t === void 0 ? H(e, b(e)) : H(e, t)) && this.readPolicyConfig(e).projects_enabled === !0;
        }
        sessionType(e, t) {
          return this.sessionType$(e.get(Y, void 0), t);
        }
        sessionType$(e, t) {
          if (this.isWingmanUnsupportedContext(e, t)) return `vp`;
          let n = f(e, `2860872286`),
            r = I.getPotatoHint(e);
          if (n || r) return `wm`;
          let i = this.policyResolvedVoice$(e);
          return i === `standard` || i === `advanced` ? `vp` : i === `wingman` ? `wm` : `vp`;
        }
        isStandardVoiceSelected(e) {
          return this.isStandardVoiceSelected$(e.get(Y, void 0));
        }
        isStandardVoiceSelected$(e) {
          let t = this.policyResolvedVoice$(e);
          return t
            ? t === `standard`
            : this.normalizeFeatherTransportOnlyVoiceMode(e, this.legacyResolvedVoice$(e)) === `standard`;
        }
        shouldDisableProjectMove(e) {
          return e.get(Y, void 0).get(se) && R(this.sessionType(e));
        }
        normalizeVoiceModeForUnsupportedContext(e, t, n = !1) {
          return (n || this.isWingmanUnsupportedContext(e)) && t === `wingman` ? `advanced` : t;
        }
        requestedVoiceMode(e, t, n) {
          let r,
            i = n != null && !this.isBidiProjectContextEnabled(e, n),
            a = this.policyResolvedVoice(e);
          return (
            a && (r = a),
            (r = r ?? t ?? (this.isStandardVoiceSelected(e) ? `standard` : `advanced`)),
            (r = this.normalizeFeatherTransportOnlyVoiceMode(e, r)),
            this.normalizeVoiceModeForUnsupportedContext(e, r, i)
          );
        }
        reportedVoiceMode(
          e,
          { voiceMode: t, sessionType: n = this.sessionType(e), reason: r, voiceBackend: i },
        ) {
          return r === k.IgnoredMicrophonePrompt || r === k.DeniedMicrophonePrompt
            ? `no-microphone`
            : J.find((e) => e === i) || (R(n) ? `wingman` : (t ?? `(unknown)`));
        }
        speakingListeningTrigger(e) {
          return this.sessionType(e) === `vp` ? `server` : `energy`;
        }
      }),
      (Z = ne(t, ({ scope: e }) => {
        let t = Q.policyResolvedVoice$(e);
        return !Q.isWingmanUnsupportedContext(e) && t === `wingman`;
      })),
      (Q = new X()));
  }))();
}
export { R as a, z as i, Z as n, Q as r, $ as t };
//# sourceMappingURL=voice-configuration-manager-eab950a76e87.js.map
