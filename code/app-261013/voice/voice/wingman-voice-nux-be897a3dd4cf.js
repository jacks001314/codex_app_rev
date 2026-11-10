import { n as e, r as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  BU as r,
  Cot as i,
  Hxt as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  QSt as l,
  TJ as u,
  VDt as d,
  Vxt as f,
  _Mt as p,
  _O as m,
  fJ as h,
  fO as g,
  fSt as _,
  gMt as v,
  jDt as y,
  mO as b,
  oO as x,
  t3 as S,
  vO as C,
  vzt as w,
  wot as T,
  xMt as E,
  yzt as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Et as k,
  AMr as A,
  EPr as j,
  G4n as M,
  GEt as ee,
  JEt as N,
  K4n as P,
  KEt as F,
  NDr as te,
  OPr as ne,
  QDr as re,
  XDr as ie,
  ZMr as ae,
  cDt as I,
  eDt as oe,
  iDt as se,
  iUn as L,
  jDr as ce,
  kPr as le,
  lDt as ue,
  lUn as de,
  nAt as fe,
  pOr as pe,
  qEt as me,
  rAt as he,
  tNr as ge,
  xPn as R,
  yPn as _e,
} from "./app-initial-5851df3f6cb1.js";
import { Yn as ve, ar as ye, or as z } from "./app-primary-fe8a450b3b04.js";
import { r as be, t as xe } from "./timing-signals-908971eb73de.js";
function B(e) {
  let t = (0, V.c)(21),
    { conversationId: n, focusedVoicePicker: r, stepConfig: i, onClose: a } = e,
    o = r !== void 0 && r,
    s = (0, H.useRef)(!1),
    c;
  t[0] !== a || t[1] !== i
    ? ((c = () => {
        (s.current || i.onDismiss?.(), a());
      }),
      (t[0] = a),
      (t[1] = i),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === i
    ? (u = t[4])
    : ((u = () => {
        s.current || ((s.current = !0), i.onComplete?.());
      }),
      (t[3] = i),
      (t[4] = u));
  let d = u,
    f;
  t[5] === i
    ? (f = t[6])
    : ((f = (e) => {
        let { from: t, to: n } = e,
          r = i.steps.find((e) => {
            let { id: n } = e;
            return n === t;
          }),
          a = i.steps.find((e) => {
            let { id: t } = e;
            return t === n;
          });
        r != null && a != null && i.onNext?.({ from: r.id, to: a.id });
      }),
      (t[5] = i),
      (t[6] = f));
  let p = f,
    m = o ? `voicePicker` : `chatgpt`,
    h;
  t[7] === l
    ? (h = t[8])
    : ((h = (e) => {
        e || l();
      }),
      (t[7] = l),
      (t[8] = h));
  let g;
  t[9] !== n ||
  t[10] !== o ||
  t[11] !== l ||
  t[12] !== d ||
  t[13] !== p ||
  t[14] !== i.initial ||
  t[15] !== i.steps
    ? ((g = (0, U.jsx)(Se, {
        conversationId: n,
        focusedVoicePicker: o,
        initialStep: i.initial,
        steps: i.steps,
        onNext: p,
        onComplete: d,
        onClose: l,
      })),
      (t[9] = n),
      (t[10] = o),
      (t[11] = l),
      (t[12] = d),
      (t[13] = p),
      (t[14] = i.initial),
      (t[15] = i.steps),
      (t[16] = g))
    : (g = t[16]);
  let _;
  return (
    t[17] !== m || t[18] !== h || t[19] !== g
      ? ((_ = (0, U.jsx)(b, { open: !0, variant: m, onOpenChange: h, children: g })),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g),
        (t[20] = _))
      : (_ = t[20]),
    _
  );
}
function Se(e) {
  let t = (0, V.c)(20),
    {
      conversationId: n,
      focusedVoicePicker: r,
      initialStep: i,
      steps: a,
      onNext: o,
      onComplete: s,
      onClose: c,
    } = e,
    [l, u] = (0, H.useState)(i),
    d;
  t[0] === l
    ? (d = t[1])
    : ((d = (e) => {
        let { id: t } = e;
        return t === l;
      }),
      (t[0] = l),
      (t[1] = d));
  let f = a.findIndex(d),
    p = a[f];
  if (p == null) throw Error(`Unknown new feature dialog step: ${l}`);
  let m;
  t[2] !== l || t[3] !== f || t[4] !== o || t[5] !== a
    ? ((m = () => {
        let e = a[f + 1];
        e != null && (o({ from: l, to: e.id }), u(e.id));
      }),
      (t[2] = l),
      (t[3] = f),
      (t[4] = o),
      (t[5] = a),
      (t[6] = m))
    : (m = t[6]);
  let h = m,
    g;
  t[7] !== c || t[8] !== s
    ? ((g = () => {
        (s(), c());
      }),
      (t[7] = c),
      (t[8] = s),
      (t[9] = g))
    : (g = t[9]);
  let _ = g,
    v = p.Component,
    y = r ? `chatgpt` : `default`,
    b;
  t[10] !== v || t[11] !== n || t[12] !== l || t[13] !== _ || t[14] !== h || t[15] !== c
    ? ((b = (0, U.jsx)(v, { conversationId: n, currentStep: l, next: h, dismiss: c, complete: _ })),
      (t[10] = v),
      (t[11] = n),
      (t[12] = l),
      (t[13] = _),
      (t[14] = h),
      (t[15] = c),
      (t[16] = b))
    : (b = t[16]);
  let S;
  return (
    t[17] !== y || t[18] !== b
      ? ((S = (0, U.jsx)(x, {
          size: `viewport`,
          variant: y,
          "data-testid": `dialog-new-voice-feature`,
          children: b,
        })),
        (t[17] = y),
        (t[18] = b),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = w()), (H = D()), C(), g(), (U = E()));
  }))();
}
function Ce(e) {
  let t = (0, we.c)(47),
    { initialVoiceId: r, saveFailed: i, saving: a, voices: s, onSubmit: c } = e,
    l = d(),
    u = (0, K.useId)(),
    f = (0, K.useRef)(null),
    [p, h] = (0, K.useState)(r),
    [g, _] = (0, K.useState)(!1),
    v;
  t[0] !== p || t[1] !== s
    ? ((v = s.find((e) => e.slug === p) ?? s[0]), (t[0] = p), (t[1] = s), (t[2] = v))
    : (v = t[2]);
  let y = v,
    b,
    x;
  (t[3] === y
    ? ((b = t[4]), (x = t[5]))
    : ((b = () => {
        let e = f.current;
        if (e != null && y != null) return ((e.currentTime = 0), e.play().catch(G), () => e.pause());
      }),
      (x = [y]),
      (t[3] = y),
      (t[4] = b),
      (t[5] = x)),
    (0, K.useEffect)(b, x));
  let S;
  t[6] !== c || t[7] !== y
    ? ((S = (e) => {
        (e.preventDefault(), y != null && c(y.slug));
      }),
      (t[6] = c),
      (t[7] = y),
      (t[8] = S))
    : (S = t[8]);
  let C;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, q.jsx)(m, {
        className: `text-heading-lg leading-8 font-semibold tracking-normal text-default`,
        children: (0, q.jsx)(o, {
          id: `choose_your_voice`,
          defaultMessage: `Choose your voice`,
          description: `Short heading in the focused ChatGPT Voice picker modal, shown when a user chooses a voice. Also used as the accessible label for the group of available voice options.`,
        }),
      })),
      (t[9] = C))
    : (C = t[9]);
  let w = g ? 0.48 : 0.08,
    T = g ? `speaking` : `listening`,
    E;
  t[10] !== w || t[11] !== T
    ? ((E = (0, q.jsx)(`div`, {
        className: `size-27 min-h-27 min-w-27`,
        children: (0, q.jsx)(me, {
          className: `size-full`,
          glowEnabled: !1,
          phase: `active`,
          placement: `center`,
          presentation: `preview`,
          previewAudioLevel: w,
          voiceActivity: T,
        }),
      })),
      (t[10] = w),
      (t[11] = T),
      (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] === y
    ? (D = t[14])
    : ((D =
        y == null
          ? null
          : (0, q.jsx)(`audio`, {
              ref: f,
              className: `hidden`,
              preload: `auto`,
              src: y.previewUrl,
              onEnded: () => _(!1),
              onPause: () => _(!1),
              onPlay: () => _(!0),
            })),
      (t[13] = y),
      (t[14] = D));
  let O;
  t[15] === l
    ? (O = t[16])
    : ((O = l.formatMessage({
        id: `choose_your_voice`,
        defaultMessage: `Choose your voice`,
        description: `Short heading in the focused ChatGPT Voice picker modal, shown when a user chooses a voice. Also used as the accessible label for the group of available voice options.`,
      })),
      (t[15] = l),
      (t[16] = O));
  let k;
  if (t[17] !== u || t[18] !== l || t[19] !== y?.slug || t[20] !== s) {
    let e;
    (t[22] !== u || t[23] !== l || t[24] !== y?.slug
      ? ((e = (e) =>
          (0, q.jsxs)(
            `label`,
            {
              className: `relative block cursor-interaction rounded-3xl`,
              children: [
                (0, q.jsx)(`input`, {
                  "aria-label": l.formatMessage(
                    {
                      id: `choose_your_voice.option_label`,
                      defaultMessage: `{voiceName} {voiceDescription}`,
                      description: `Accessible label for a voice option in the focused ChatGPT Voice picker. Includes the voice name and its short description.`,
                    },
                    { voiceDescription: e.description, voiceName: e.name },
                  ),
                  checked: e.slug === y?.slug,
                  className: `peer absolute inset-0 z-10 size-full cursor-interaction opacity-0`,
                  name: u,
                  type: `radio`,
                  value: e.slug,
                  onChange: () => h(e.slug),
                }),
                (0, q.jsxs)(`span`, {
                  className: `flex w-full flex-col rounded-3xl border border-default bg-transparent p-5 text-start text-base leading-6 tracking-normal peer-checked:border-text peer-checked:ring-1 peer-checked:ring-text peer-checked:ring-inset peer-hover:bg-primary-ghost-hover peer-focus-visible:bg-primary-ghost-hover peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-text/12 dark:peer-focus-visible:outline-text/16`,
                  children: [
                    (0, q.jsx)(`span`, { className: `font-semibold text-default`, children: e.name }),
                    e.description
                      ? (0, q.jsx)(`span`, { className: `text-tertiary`, children: e.description })
                      : null,
                  ],
                }),
              ],
            },
            e.slug,
          )),
        (t[22] = u),
        (t[23] = l),
        (t[24] = y?.slug),
        (t[25] = e))
      : (e = t[25]),
      (k = s.map(e)),
      (t[17] = u),
      (t[18] = l),
      (t[19] = y?.slug),
      (t[20] = s),
      (t[21] = k));
  } else k = t[21];
  let A;
  t[26] !== a || t[27] !== O || t[28] !== k
    ? ((A = (0, q.jsx)(`div`, {
        role: `radiogroup`,
        "aria-label": O,
        className: `flex w-full flex-col gap-4`,
        inert: a,
        children: k,
      })),
      (t[26] = a),
      (t[27] = O),
      (t[28] = k),
      (t[29] = A))
    : (A = t[29]);
  let j;
  t[30] !== A || t[31] !== E || t[32] !== D
    ? ((j = (0, q.jsxs)(`div`, {
        className: `flex grow flex-col items-center gap-11 text-center sm:min-w-80`,
        children: [C, E, D, A],
      })),
      (t[30] = A),
      (t[31] = E),
      (t[32] = D),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] === i
    ? (M = t[35])
    : ((M = i
        ? (0, q.jsx)(`p`, {
            role: `alert`,
            className: `text-center text-sm text-secondary`,
            children: (0, q.jsx)(o, {
              id: `chatgpt.pepper.personalization.voice.save.error`,
              defaultMessage: `We couldn’t save your voice. Try again`,
              description: `Error after saving the selected account voice fails; the user can retry`,
            }),
          })
        : null),
      (t[34] = i),
      (t[35] = M));
  let ee = y == null || a,
    N;
  t[36] === y
    ? (N = t[37])
    : ((N =
        y == null
          ? (0, q.jsx)(o, {
              id: `choose_your_voice.button_ok_disabled`,
              defaultMessage: `Select a voice`,
              description: `Short label for the disabled primary button in the focused ChatGPT Voice picker modal when no voice is available or selected. Prompts the user to select a voice before continuing.`,
            })
          : (0, q.jsx)(o, {
              id: `choose_your_voice.button_ok`,
              defaultMessage: `Switch to {voiceName}`,
              description: `Short primary button label in the focused ChatGPT Voice picker modal. Activating the button confirms the selected voice. Placeholder {voiceName} is the display name of the selected voice, such as Rio or Lua.`,
              values: { voiceName: y.name },
            })),
      (t[36] = y),
      (t[37] = N));
  let P;
  t[38] !== a || t[39] !== ee || t[40] !== N
    ? ((P = (0, q.jsx)(n, {
        className: `w-full`,
        autoFocus: !0,
        color: `chatgptPrimary`,
        disabled: ee,
        focusRing: `none`,
        loading: a,
        radius: `full`,
        size: `beaconAction`,
        type: `submit`,
        children: N,
      })),
      (t[38] = a),
      (t[39] = ee),
      (t[40] = N),
      (t[41] = P))
    : (P = t[41]);
  let F;
  return (
    t[42] !== j || t[43] !== M || t[44] !== P || t[45] !== S
      ? ((F = (0, q.jsxs)(`form`, {
          className: `relative flex w-full min-w-0 flex-col gap-8 p-6 select-none sm:p-10`,
          onSubmit: S,
          children: [j, M, P],
        })),
        (t[42] = j),
        (t[43] = M),
        (t[44] = P),
        (t[45] = S),
        (t[46] = F))
      : (F = t[46]),
    F
  );
}
function G() {}
var we, K, q;
function J() {
  return (J = e(() => {
    ((we = w()), (K = D()), y(), S(), C(), N(), (q = E()));
  }))();
}
function Y(e) {
  return e;
}
var Te = t({ WingmanVoiceNux: () => Ee });
function Ee(e) {
  let t = (0, Oe.c)(12),
    {
      accountId: n,
      focusedPicker: r,
      requestedVoiceId: i,
      video: o,
      initialStep: s,
      onClose: c,
      onComplete: l,
    } = e,
    u = s === void 0 ? `intro` : s,
    d;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== o
    ? ((d = { accountId: n, focusedPicker: r, requestedVoiceId: i, video: o }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== u || t[6] !== c || t[7] !== l
    ? ((f = (0, Q.jsx)(X, { initialStep: u, onClose: c, onComplete: l })),
      (t[5] = u),
      (t[6] = c),
      (t[7] = l),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== d || t[10] !== f
      ? ((p = (0, Q.jsx)(a, { scope: Ae, value: d, children: f })), (t[9] = d), (t[10] = f), (t[11] = p))
      : (p = t[11]),
    p
  );
}
function X(e) {
  let t = (0, Oe.c)(11),
    { initialStep: n, onClose: r, onComplete: i } = e,
    a = s(Ae),
    o;
  if (t[0] !== n || t[1] !== i || t[2] !== a) {
    let e;
    (t[4] !== i || t[5] !== a
      ? ((e = () => {
          let e = a.get(je);
          e != null && i(e);
        }),
        (t[4] = i),
        (t[5] = a),
        (t[6] = e))
      : (e = t[6]),
      (o = Y({
        initial: n,
        steps: [
          { id: `intro`, Component: Z },
          { id: `picker`, Component: Z },
        ],
        onComplete: e,
      })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = o));
  } else o = t[3];
  let c = o,
    l = a.value.focusedPicker != null,
    u;
  return (
    t[7] !== r || t[8] !== c || t[9] !== l
      ? ((u = (0, Q.jsx)(B, { focusedVoicePicker: l, stepConfig: c, onClose: r })),
        (t[7] = r),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function Z(e) {
  let t = (0, Oe.c)(67),
    { currentStep: i, next: a, complete: c } = e,
    l = s(Ae),
    { accountId: u, focusedPicker: d, requestedVoiceId: p, video: g } = l.value,
    _ = f(pe),
    { data: y } = f(ce),
    b = f(ae),
    x = O(le, `2182392068`),
    S = y?.voiceMainLanguage,
    C;
  t[0] === S ? (C = t[1]) : ((C = { voice_mode: `wingman`, spoken_language: S }), (t[0] = S), (t[1] = C));
  let w = d == null,
    T;
  t[2] === w ? (T = t[3]) : ((T = { enabled: w }), (t[2] = w), (t[3] = T));
  let { data: E, fetchStatus: D, isError: A, refetch: M } = O(se, C, T),
    N = y?.voiceName,
    [F, te] = (0, ke.useState)(null),
    [ne, ie] = (0, ke.useState)(!1),
    [I, oe] = (0, ke.useState)(!1),
    [L, he] = (0, ke.useState)(!1),
    ge = (0, ke.useRef)(null),
    R = d?.voices ?? E?.voices,
    _e;
  t[4] !== E?.selected || t[5] !== N || t[6] !== d?.initialVoiceId || t[7] !== p || t[8] !== F || t[9] !== R
    ? ((_e =
        R?.find((e) => e.slug === d?.initialVoiceId) ??
        R?.find((e) => e.slug === (F ?? p)) ??
        R?.find((e) => e.slug === N) ??
        R?.find((e) => e.slug === E?.selected) ??
        R?.[0]),
      (t[4] = E?.selected),
      (t[5] = N),
      (t[6] = d?.initialVoiceId),
      (t[7] = p),
      (t[8] = F),
      (t[9] = R),
      (t[10] = _e))
    : (_e = t[10]);
  let z = _e,
    xe = d == null && (A || E?.voices.length === 0),
    B = (p === void 0 || F != null || D === `idle`) && !xe && y != null && z != null;
  i === `picker` && p !== void 0 && F == null && B && te(z.slug);
  let Se;
  t[11] === b
    ? (Se = t[12])
    : ((Se = b.status === `allowed` && `plan` in b && j(b.plan)), (t[11] = b), (t[12] = Se));
  let V = Se;
  if (_ !== u) return null;
  let H;
  t[13] !== u ||
  t[14] !== c ||
  t[15] !== N ||
  t[16] !== a ||
  t[17] !== B ||
  t[18] !== I ||
  t[19] !== l ||
  t[20] !== F ||
  t[21] !== z ||
  t[22] !== i
    ? ((H = async (e) => {
        if (!B || I || z == null || ge.current === i) return;
        ge.current = i;
        let t = fe(l)._interactivePreConnect;
        if (i === `intro`) {
          (t.advancedVoiceDisclosure.end(),
            re(l, ve, { voiceSessionId: l.get(de), microphoneCacheHit: l.get(be) }),
            t.voicePicker.start(),
            a());
          return;
        }
        let n = e ?? F ?? z.slug;
        (oe(!0), he(!1));
        try {
          await ue(l, u, n);
        } catch {
          ((ge.current = null), he(!0), oe(!1));
          return;
        }
        l.get(pe) === u &&
          P(l, Ee) &&
          (t.voicePicker.end(),
          re(l, ye, {
            action: n === N ? `kept` : `changed`,
            voice: n,
            voiceSessionId: l.get(de),
            microphoneCacheHit: l.get(be),
          }),
          l.set(je, n),
          c());
      }),
      (t[13] = u),
      (t[14] = c),
      (t[15] = N),
      (t[16] = a),
      (t[17] = B),
      (t[18] = I),
      (t[19] = l),
      (t[20] = F),
      (t[21] = z),
      (t[22] = i),
      (t[23] = H))
    : (H = t[23]);
  let U = H,
    W = De;
  if (i === `picker` && d != null) {
    let e = z?.slug ?? d.initialVoiceId,
      n;
    t[24] === U ? (n = t[25]) : ((n = (e) => void U(e)), (t[24] = U), (t[25] = n));
    let r;
    return (
      t[26] !== d.voices || t[27] !== L || t[28] !== I || t[29] !== e || t[30] !== n
        ? ((r = (0, Q.jsx)(Ce, {
            initialVoiceId: e,
            saveFailed: L,
            saving: I,
            voices: d.voices,
            onSubmit: n,
          })),
          (t[26] = d.voices),
          (t[27] = L),
          (t[28] = I),
          (t[29] = e),
          (t[30] = n),
          (t[31] = r))
        : (r = t[31]),
      r
    );
  }
  let G;
  t[32] === U
    ? (G = t[33])
    : ((G = (e) => {
        (e.preventDefault(), U());
      }),
      (t[32] = U),
      (t[33] = G));
  let we = i === `intro` ? `pt-6` : `py-5`,
    K;
  t[34] === we
    ? (K = t[35])
    : ((K = v(`flex flex-col items-center gap-8 px-6 text-center`, we)), (t[34] = we), (t[35] = K));
  let q;
  t[36] !== x ||
  t[37] !== V ||
  t[38] !== ne ||
  t[39] !== p ||
  t[40] !== I ||
  t[41] !== F ||
  t[42] !== z ||
  t[43] !== i ||
  t[44] !== g ||
  t[45] !== R
    ? ((q =
        i === `intro`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`div`, {
                  className: `relative size-36`,
                  "aria-hidden": `true`,
                  children: (0, Q.jsx)(me, {
                    glowEnabled: !1,
                    phase: `inactive`,
                    placement: `center`,
                    presentation: `preview`,
                    voiceActivity: `listening`,
                  }),
                }),
                (0, Q.jsx)(m, {
                  className: `heading-2xl`,
                  children: (0, Q.jsx)(o, {
                    id: `voice_wingman_disclosure_title`,
                    defaultMessage: `Meet Voice`,
                    description: `Heading introducing ChatGPT Voice on first use`,
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex flex-col gap-6 text-start text-base text-secondary`,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, Q.jsx)(h, {}),
                        (0, Q.jsx)(`p`, {
                          children: (0, Q.jsx)(o, {
                            id: `voice_wingman_disclosure_description_body_1`,
                            defaultMessage: `Say what's on your mind. ChatGPT listens, responds, and keeps the conversation flowing naturally.`,
                            description: `Explains natural back-and-forth conversation in the first-use Voice introduction`,
                          }),
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      className: `flex items-start gap-4`,
                      children: [
                        (0, Q.jsx)(r, {}),
                        (0, Q.jsxs)(`p`, {
                          children: [
                            V &&
                              g &&
                              (0, Q.jsx)(o, {
                                id: `voice_wingman_disclosure_description_body_2_enterprise_with_video`,
                                defaultMessage: `Audio and video recordings are saved but not used for training. <link>Learn more</link>.`,
                                description: `Enterprise audio and video recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: W },
                              }),
                            V &&
                              !g &&
                              (0, Q.jsx)(o, {
                                id: `voice_wingman_disclosure_description_body_2_enterprise_no_video`,
                                defaultMessage: `Your audio recordings are saved but not used for training. <link>Learn more</link>.`,
                                description: `Enterprise audio recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: W },
                              }),
                            !V &&
                              g &&
                              (0, Q.jsx)(o, {
                                id: `voice_wingman_disclosure_description_body_2_consumer_with_video`,
                                defaultMessage: `Audio and video recordings are saved, and you can delete them at any time. <link>Learn more</link>.`,
                                description: `Consumer audio and video recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: W },
                              }),
                            !V &&
                              !g &&
                              (0, Q.jsx)(o, {
                                id: `voice_wingman_disclosure_description_body_2_consumer_no_video`,
                                defaultMessage: `Audio recordings are saved, and you can delete them at any time. <link>Learn more</link>.`,
                                description: `Consumer audio recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: W },
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          : (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(m, {
                  className: x ? `heading-2xl` : `sr-only`,
                  children: (0, Q.jsx)(o, {
                    id: `voice_onboarding_voice_picker_title`,
                    defaultMessage: `Choose your voice`,
                    description: `Accessible heading for the first-use Voice picker`,
                  }),
                }),
                (p === void 0 || F != null) &&
                  R != null &&
                  z != null &&
                  (0, Q.jsx)(`div`, {
                    className: `w-full`,
                    inert: I,
                    children: x
                      ? (0, Q.jsxs)(`div`, {
                          className: `flex flex-col gap-8 text-start`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `relative mx-auto size-36`,
                              "aria-hidden": `true`,
                              children: (0, Q.jsx)(me, {
                                glowEnabled: !1,
                                phase: `active`,
                                placement: `center`,
                                presentation: `preview`,
                                previewAudioLevel: ne ? 0.48 : 0.08,
                                voiceActivity: ne ? `speaking` : `listening`,
                              }),
                            }),
                            (0, Q.jsx)(k, {
                              className: `max-h-80`,
                              autoFocusSelectedVoice: !0,
                              disabled: I,
                              playPreviewOnInitialRender: !0,
                              preserveSelectionOnRefresh: !0,
                              previewEnabled: !I,
                              value: F ?? z.slug,
                              voices: R,
                              onPreviewPlaybackChange: ie,
                              onVoiceChange: te,
                            }),
                          ],
                        })
                      : (0, Q.jsx)(ee, {
                          autoFocusSelectedVoice: !0,
                          compactLayout: !0,
                          initialVoice: z,
                          voices: R,
                          onVoiceChange: te,
                        }),
                  }),
              ],
            })),
      (t[36] = x),
      (t[37] = V),
      (t[38] = ne),
      (t[39] = p),
      (t[40] = I),
      (t[41] = F),
      (t[42] = z),
      (t[43] = i),
      (t[44] = g),
      (t[45] = R),
      (t[46] = q))
    : (q = t[46]);
  let J;
  t[47] !== M || t[48] !== xe
    ? ((J =
        xe &&
        (0, Q.jsx)(n, {
          color: `secondary`,
          type: `button`,
          onClick: () => void M(),
          children: (0, Q.jsx)(o, {
            id: `voiceIntroduction.retryVoices`,
            defaultMessage: `Retry loading voices`,
            description: `Retries a failed or empty voice catalog request in the first-use Voice introduction`,
          }),
        })),
      (t[47] = M),
      (t[48] = xe),
      (t[49] = J))
    : (J = t[49]);
  let Y;
  t[50] === L
    ? (Y = t[51])
    : ((Y =
        L &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(o, {
            id: `chatgpt.pepper.personalization.voice.save.error`,
            defaultMessage: `We couldn’t save your voice. Try again`,
            description: `Error after saving the selected account voice fails; the user can retry`,
          }),
        })),
      (t[50] = L),
      (t[51] = Y));
  let Te = !B || I,
    X;
  t[52] === i
    ? (X = t[53])
    : ((X =
        i === `intro`
          ? (0, Q.jsx)(o, {
              id: `wingmanVoiceNux.continue`,
              defaultMessage: `Continue`,
              description: `Advances from the Voice introduction to voice selection`,
            })
          : (0, Q.jsx)(o, {
              id: `wingmanVoiceNux.startVoice`,
              defaultMessage: `Start Voice`,
              description: `Saves the selected voice and starts the Voice session`,
            })),
      (t[52] = i),
      (t[53] = X));
  let Z;
  t[54] !== I || t[55] !== Te || t[56] !== X
    ? ((Z = (0, Q.jsx)(n, {
        className: `w-full`,
        type: `submit`,
        color: `primary`,
        radius: `full`,
        size: `panelAction`,
        disabled: Te,
        loading: I,
        children: X,
      })),
      (t[54] = I),
      (t[55] = Te),
      (t[56] = X),
      (t[57] = Z))
    : (Z = t[57]);
  let $;
  t[58] !== K || t[59] !== q || t[60] !== J || t[61] !== Y || t[62] !== Z
    ? (($ = (0, Q.jsxs)(`div`, { className: K, children: [q, J, Y, Z] })),
      (t[58] = K),
      (t[59] = q),
      (t[60] = J),
      (t[61] = Y),
      (t[62] = Z),
      (t[63] = $))
    : ($ = t[63]);
  let Me;
  return (
    t[64] !== $ || t[65] !== G
      ? ((Me = (0, Q.jsx)(`form`, { className: `select-none`, onSubmit: G, children: $ })),
        (t[64] = $),
        (t[65] = G),
        (t[66] = Me))
      : (Me = t[66]),
    Me
  );
}
function De(e) {
  return (0, Q.jsx)(
    _e,
    {
      appearance: `secondary`,
      initiator: `open_in_browser_bridge`,
      href: `https://help.openai.com/en/articles/8400625-voice-mode-faq#h_1f4f71399b`,
      openTarget: `external-browser`,
      underline: `always`,
      children: e,
    },
    `voice-recording-faq`,
  );
}
var Oe, ke, Q, Ae, je;
function $() {
  return ($ = e(() => {
    ((Oe = w()),
      z(),
      p(),
      c(),
      (ke = D()),
      y(),
      ge(),
      te(),
      S(),
      C(),
      R(),
      u(),
      M(),
      ie(),
      N(),
      I(),
      oe(),
      F(),
      T(),
      ne(),
      A(),
      he(),
      L(),
      xe(),
      J(),
      W(),
      (Q = E()),
      (Ae = l(`WingmanVoiceNuxScope`, { parent: i })),
      (je = _(Ae, () => null)));
  }))();
}
export { Te as n, $ as t };
//# sourceMappingURL=wingman-voice-nux-be897a3dd4cf.js.map
