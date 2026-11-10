import { n as e, r as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  FBt as i,
  HO as a,
  IO as o,
  IW as s,
  JO as c,
  LNt as l,
  MNt as u,
  NNt as d,
  PBt as f,
  Qst as p,
  TY as m,
  WO as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  _wt as b,
  aCt as x,
  fY as S,
  iCt as C,
  kCt as w,
  nCt as T,
  okt as ee,
  qO as te,
  tkt as E,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BCt as D,
  BEt as O,
  D5n as k,
  EKn as A,
  FCt as j,
  GCt as M,
  GLn as N,
  IMr as P,
  MCt as ne,
  NCt as re,
  O5n as ie,
  PCt as ae,
  VCt as oe,
  XCt as se,
  YCt as ce,
  eMr as le,
  lBr as F,
  nMr as ue,
  qLn as I,
  sBr as de,
  tLr as fe,
  uBr as pe,
  wLr as me,
  xKn as L,
  xLr as he,
  xMr as ge,
  yMr as _e,
  zEt as ve,
} from "./app-initial-ad16eaadf81f.js";
import { hr as R, ir as ye, mr as be } from "./app-primary-3e00728c2a4c.js";
import { r as xe, t as Se } from "./timing-signals-6301d26a3c55.js";
function z(e) {
  let t = (0, B.c)(21),
    { conversationId: n, focusedVoicePicker: r, stepConfig: i, onClose: a } = e,
    o = r !== void 0 && r,
    s = (0, V.useRef)(!1),
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
    g;
  t[7] === l
    ? (g = t[8])
    : ((g = (e) => {
        e || l();
      }),
      (t[7] = l),
      (t[8] = g));
  let _;
  t[9] !== n ||
  t[10] !== o ||
  t[11] !== l ||
  t[12] !== d ||
  t[13] !== p ||
  t[14] !== i.initial ||
  t[15] !== i.steps
    ? ((_ = (0, H.jsx)(Ce, {
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
      (t[16] = _))
    : (_ = t[16]);
  let v;
  return (
    t[17] !== m || t[18] !== g || t[19] !== _
      ? ((v = (0, H.jsx)(h, { open: !0, variant: m, onOpenChange: g, children: _ })),
        (t[17] = m),
        (t[18] = g),
        (t[19] = _),
        (t[20] = v))
      : (v = t[20]),
    v
  );
}
function Ce(e) {
  let t = (0, B.c)(20),
    {
      conversationId: n,
      focusedVoicePicker: r,
      initialStep: i,
      steps: a,
      onNext: s,
      onComplete: c,
      onClose: l,
    } = e,
    [u, d] = (0, V.useState)(i),
    f;
  t[0] === u
    ? (f = t[1])
    : ((f = (e) => {
        let { id: t } = e;
        return t === u;
      }),
      (t[0] = u),
      (t[1] = f));
  let p = a.findIndex(f),
    m = a[p];
  if (m == null) throw Error(`Unknown new feature dialog step: ${u}`);
  let h;
  t[2] !== u || t[3] !== p || t[4] !== s || t[5] !== a
    ? ((h = () => {
        let e = a[p + 1];
        e != null && (s({ from: u, to: e.id }), d(e.id));
      }),
      (t[2] = u),
      (t[3] = p),
      (t[4] = s),
      (t[5] = a),
      (t[6] = h))
    : (h = t[6]);
  let g = h,
    _;
  t[7] !== l || t[8] !== c
    ? ((_ = () => {
        (c(), l());
      }),
      (t[7] = l),
      (t[8] = c),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    y = m.Component,
    b = r ? `chatgpt` : `default`,
    x;
  t[10] !== y || t[11] !== n || t[12] !== u || t[13] !== v || t[14] !== g || t[15] !== l
    ? ((x = (0, H.jsx)(y, { conversationId: n, currentStep: u, next: g, dismiss: l, complete: v })),
      (t[10] = y),
      (t[11] = n),
      (t[12] = u),
      (t[13] = v),
      (t[14] = g),
      (t[15] = l),
      (t[16] = x))
    : (x = t[16]);
  let S;
  return (
    t[17] !== b || t[18] !== x
      ? ((S = (0, H.jsx)(o, {
          size: `viewport`,
          variant: b,
          "data-testid": `dialog-new-voice-feature`,
          children: x,
        })),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = f()), (V = i()), c(), a(), (H = l()));
  }))();
}
function we(e) {
  let t = (0, Te.c)(47),
    { initialVoiceId: n, saveFailed: r, saving: i, voices: a, onSubmit: o } = e,
    s = ee(),
    c = (0, G.useId)(),
    l = (0, G.useRef)(null),
    [u, d] = (0, G.useState)(n),
    [f, p] = (0, G.useState)(!1),
    m;
  t[0] !== u || t[1] !== a
    ? ((m = a.find((e) => e.slug === u) ?? a[0]), (t[0] = u), (t[1] = a), (t[2] = m))
    : (m = t[2]);
  let h = m,
    g,
    v;
  (t[3] === h
    ? ((g = t[4]), (v = t[5]))
    : ((g = () => {
        let e = l.current;
        if (e != null && h != null) return ((e.currentTime = 0), e.play().catch(W), () => e.pause());
      }),
      (v = [h]),
      (t[3] = h),
      (t[4] = g),
      (t[5] = v)),
    (0, G.useEffect)(g, v));
  let y;
  t[6] !== o || t[7] !== h
    ? ((y = (e) => {
        (e.preventDefault(), h != null && o(h.slug));
      }),
      (t[6] = o),
      (t[7] = h),
      (t[8] = y))
    : (y = t[8]);
  let b;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, K.jsx)(te, {
        className: `text-heading-lg leading-8 font-semibold tracking-normal text-default`,
        children: (0, K.jsx)(E, {
          id: `choose_your_voice`,
          defaultMessage: `Choose your voice`,
          description: `Short heading in the focused ChatGPT Voice picker modal, shown when a user chooses a voice. Also used as the accessible label for the group of available voice options.`,
        }),
      })),
      (t[9] = b))
    : (b = t[9]);
  let x = f ? 0.48 : 0.08,
    S = f ? `speaking` : `listening`,
    C;
  t[10] !== x || t[11] !== S
    ? ((C = (0, K.jsx)(`div`, {
        className: `size-27 min-h-27 min-w-27`,
        children: (0, K.jsx)(ae, {
          className: `size-full`,
          glowEnabled: !1,
          phase: `active`,
          placement: `center`,
          presentation: `preview`,
          previewAudioLevel: x,
          voiceActivity: S,
        }),
      })),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] === h
    ? (w = t[14])
    : ((w =
        h == null
          ? null
          : (0, K.jsx)(`audio`, {
              ref: l,
              className: `hidden`,
              preload: `auto`,
              src: h.previewUrl,
              onEnded: () => p(!1),
              onPause: () => p(!1),
              onPlay: () => p(!0),
            })),
      (t[13] = h),
      (t[14] = w));
  let T;
  t[15] === s
    ? (T = t[16])
    : ((T = s.formatMessage({
        id: `choose_your_voice`,
        defaultMessage: `Choose your voice`,
        description: `Short heading in the focused ChatGPT Voice picker modal, shown when a user chooses a voice. Also used as the accessible label for the group of available voice options.`,
      })),
      (t[15] = s),
      (t[16] = T));
  let D;
  if (t[17] !== c || t[18] !== s || t[19] !== h?.slug || t[20] !== a) {
    let e;
    (t[22] !== c || t[23] !== s || t[24] !== h?.slug
      ? ((e = (e) =>
          (0, K.jsxs)(
            `label`,
            {
              className: `relative block cursor-interaction rounded-3xl`,
              children: [
                (0, K.jsx)(`input`, {
                  "aria-label": s.formatMessage(
                    {
                      id: `choose_your_voice.option_label`,
                      defaultMessage: `{voiceName} {voiceDescription}`,
                      description: `Accessible label for a voice option in the focused ChatGPT Voice picker. Includes the voice name and its short description.`,
                    },
                    { voiceDescription: e.description, voiceName: e.name },
                  ),
                  checked: e.slug === h?.slug,
                  className: `peer absolute inset-0 z-10 size-full cursor-interaction opacity-0`,
                  name: c,
                  type: `radio`,
                  value: e.slug,
                  onChange: () => d(e.slug),
                }),
                (0, K.jsxs)(`span`, {
                  className: `flex w-full flex-col rounded-3xl border border-default bg-transparent p-5 text-start text-base leading-6 tracking-normal peer-checked:border-text peer-checked:ring-1 peer-checked:ring-text peer-checked:ring-inset peer-hover:bg-primary-ghost-hover peer-focus-visible:bg-primary-ghost-hover peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-text/12 dark:peer-focus-visible:outline-text/16`,
                  children: [
                    (0, K.jsx)(`span`, { className: `font-semibold text-default`, children: e.name }),
                    e.description
                      ? (0, K.jsx)(`span`, { className: `text-tertiary`, children: e.description })
                      : null,
                  ],
                }),
              ],
            },
            e.slug,
          )),
        (t[22] = c),
        (t[23] = s),
        (t[24] = h?.slug),
        (t[25] = e))
      : (e = t[25]),
      (D = a.map(e)),
      (t[17] = c),
      (t[18] = s),
      (t[19] = h?.slug),
      (t[20] = a),
      (t[21] = D));
  } else D = t[21];
  let O;
  t[26] !== i || t[27] !== T || t[28] !== D
    ? ((O = (0, K.jsx)(`div`, {
        role: `radiogroup`,
        "aria-label": T,
        className: `flex w-full flex-col gap-4`,
        inert: i,
        children: D,
      })),
      (t[26] = i),
      (t[27] = T),
      (t[28] = D),
      (t[29] = O))
    : (O = t[29]);
  let k;
  t[30] !== O || t[31] !== C || t[32] !== w
    ? ((k = (0, K.jsxs)(`div`, {
        className: `flex grow flex-col items-center gap-11 text-center sm:min-w-80`,
        children: [b, C, w, O],
      })),
      (t[30] = O),
      (t[31] = C),
      (t[32] = w),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] === r
    ? (A = t[35])
    : ((A = r
        ? (0, K.jsx)(`p`, {
            role: `alert`,
            className: `text-center text-sm text-secondary`,
            children: (0, K.jsx)(E, {
              id: `chatgpt.pepper.personalization.voice.save.error`,
              defaultMessage: `We couldn’t save your voice. Try again`,
              description: `Error after saving the selected account voice fails; the user can retry`,
            }),
          })
        : null),
      (t[34] = r),
      (t[35] = A));
  let j = h == null || i,
    M;
  t[36] === h
    ? (M = t[37])
    : ((M =
        h == null
          ? (0, K.jsx)(E, {
              id: `choose_your_voice.button_ok_disabled`,
              defaultMessage: `Select a voice`,
              description: `Short label for the disabled primary button in the focused ChatGPT Voice picker modal when no voice is available or selected. Prompts the user to select a voice before continuing.`,
            })
          : (0, K.jsx)(E, {
              id: `choose_your_voice.button_ok`,
              defaultMessage: `Switch to {voiceName}`,
              description: `Short primary button label in the focused ChatGPT Voice picker modal. Activating the button confirms the selected voice. Placeholder {voiceName} is the display name of the selected voice, such as Rio or Lua.`,
              values: { voiceName: h.name },
            })),
      (t[36] = h),
      (t[37] = M));
  let N;
  t[38] !== i || t[39] !== j || t[40] !== M
    ? ((N = (0, K.jsx)(_, {
        className: `w-full`,
        autoFocus: !0,
        color: `chatgptPrimary`,
        disabled: j,
        focusRing: `none`,
        loading: i,
        radius: `full`,
        size: `beaconAction`,
        type: `submit`,
        children: M,
      })),
      (t[38] = i),
      (t[39] = j),
      (t[40] = M),
      (t[41] = N))
    : (N = t[41]);
  let P;
  return (
    t[42] !== k || t[43] !== A || t[44] !== N || t[45] !== y
      ? ((P = (0, K.jsxs)(`form`, {
          className: `relative flex w-full min-w-0 flex-col gap-8 p-6 select-none sm:p-10`,
          onSubmit: y,
          children: [k, A, N],
        })),
        (t[42] = k),
        (t[43] = A),
        (t[44] = N),
        (t[45] = y),
        (t[46] = P))
      : (P = t[46]),
    P
  );
}
function W() {}
var Te, G, K;
function q() {
  return (q = e(() => {
    ((Te = f()), (G = i()), g(), v(), c(), j(), (K = l()));
  }))();
}
function J(e) {
  return e;
}
var Ee = t({ WingmanVoiceNux: () => De });
function De(e) {
  let t = (0, ke.c)(12),
    {
      accountId: n,
      focusedPicker: r,
      requestedVoiceId: i,
      video: a,
      initialStep: o,
      onClose: s,
      onComplete: c,
    } = e,
    l = o === void 0 ? `intro` : o,
    u;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
    ? ((u = { accountId: n, focusedPicker: r, requestedVoiceId: i, video: a }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] !== l || t[6] !== s || t[7] !== c
    ? ((d = (0, Q.jsx)(Y, { initialStep: l, onClose: s, onComplete: c })),
      (t[5] = l),
      (t[6] = s),
      (t[7] = c),
      (t[8] = d))
    : (d = t[8]);
  let f;
  return (
    t[9] !== u || t[10] !== d
      ? ((f = (0, Q.jsx)(x, { scope: Ae, value: u, children: d })), (t[9] = u), (t[10] = d), (t[11] = f))
      : (f = t[11]),
    f
  );
}
function Y(e) {
  let t = (0, ke.c)(11),
    { initialStep: r, onClose: i, onComplete: a } = e,
    o = n(Ae),
    s;
  if (t[0] !== r || t[1] !== a || t[2] !== o) {
    let e;
    (t[4] !== a || t[5] !== o
      ? ((e = () => {
          let e = o.get(je);
          e != null && a(e);
        }),
        (t[4] = a),
        (t[5] = o),
        (t[6] = e))
      : (e = t[6]),
      (s = J({
        initial: r,
        steps: [
          { id: `intro`, Component: X },
          { id: `picker`, Component: X },
        ],
        onComplete: e,
      })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s));
  } else s = t[3];
  let c = s,
    l = o.value.focusedPicker != null,
    u;
  return (
    t[7] !== i || t[8] !== c || t[9] !== l
      ? ((u = (0, Q.jsx)(z, { focusedVoicePicker: l, stepConfig: c, onClose: i })),
        (t[7] = i),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function X(e) {
  let t = (0, ke.c)(67),
    { currentStep: r, next: i, complete: a } = e,
    o = n(Ae),
    { accountId: c, focusedPicker: l, requestedVoiceId: d, video: f } = o.value,
    p = C(P),
    { data: m } = C(le),
    h = C(he),
    g = T(pe, `2182392068`),
    v = m?.voiceMainLanguage,
    y;
  t[0] === v ? (y = t[1]) : ((y = { voice_mode: `wingman`, spoken_language: v }), (t[0] = v), (t[1] = y));
  let b = l == null,
    x;
  t[2] === b ? (x = t[3]) : ((x = { enabled: b }), (t[2] = b), (t[3] = x));
  let { data: w, fetchStatus: ee, isError: O, refetch: k } = T(M, y, x),
    j = m?.voiceName,
    [N, re] = (0, Z.useState)(null),
    [oe, ce] = (0, Z.useState)(!1),
    [F, ue] = (0, Z.useState)(!1),
    [I, fe] = (0, Z.useState)(!1),
    me = (0, Z.useRef)(null),
    L = l?.voices ?? w?.voices,
    _e;
  t[4] !== w?.selected || t[5] !== j || t[6] !== l?.initialVoiceId || t[7] !== d || t[8] !== N || t[9] !== L
    ? ((_e =
        L?.find((e) => e.slug === l?.initialVoiceId) ??
        L?.find((e) => e.slug === (N ?? d)) ??
        L?.find((e) => e.slug === j) ??
        L?.find((e) => e.slug === w?.selected) ??
        L?.[0]),
      (t[4] = w?.selected),
      (t[5] = j),
      (t[6] = l?.initialVoiceId),
      (t[7] = d),
      (t[8] = N),
      (t[9] = L),
      (t[10] = _e))
    : (_e = t[10]);
  let R = _e,
    Se = l == null && (O || w?.voices.length === 0),
    z = (d === void 0 || N != null || ee === `idle`) && !Se && m != null && R != null;
  r === `picker` && d !== void 0 && N == null && z && re(R.slug);
  let Ce;
  t[11] === h
    ? (Ce = t[12])
    : ((Ce = h.status === `allowed` && `plan` in h && de(h.plan)), (t[11] = h), (t[12] = Ce));
  let B = Ce;
  if (p !== c) return null;
  let V;
  t[13] !== c ||
  t[14] !== a ||
  t[15] !== j ||
  t[16] !== i ||
  t[17] !== z ||
  t[18] !== F ||
  t[19] !== o ||
  t[20] !== N ||
  t[21] !== R ||
  t[22] !== r
    ? ((V = async (e) => {
        if (!z || F || R == null || me.current === r) return;
        me.current = r;
        let t = ve(o)._interactivePreConnect;
        if (r === `intro`) {
          (t.advancedVoiceDisclosure.end(),
            ge(o, ye, { voiceSessionId: o.get(A), microphoneCacheHit: o.get(xe) }),
            t.voicePicker.start(),
            i());
          return;
        }
        let n = e ?? N ?? R.slug;
        (ue(!0), fe(!1));
        try {
          await se(o, c, n);
        } catch {
          ((me.current = null), fe(!0), ue(!1));
          return;
        }
        o.get(P) === c &&
          ie(o, De) &&
          (t.voicePicker.end(),
          ge(o, be, {
            action: n === j ? `kept` : `changed`,
            voice: n,
            voiceSessionId: o.get(A),
            microphoneCacheHit: o.get(xe),
          }),
          o.set(je, n),
          a());
      }),
      (t[13] = c),
      (t[14] = a),
      (t[15] = j),
      (t[16] = i),
      (t[17] = z),
      (t[18] = F),
      (t[19] = o),
      (t[20] = N),
      (t[21] = R),
      (t[22] = r),
      (t[23] = V))
    : (V = t[23]);
  let H = V,
    U = Oe;
  if (r === `picker` && l != null) {
    let e = R?.slug ?? l.initialVoiceId,
      n;
    t[24] === H ? (n = t[25]) : ((n = (e) => void H(e)), (t[24] = H), (t[25] = n));
    let r;
    return (
      t[26] !== l.voices || t[27] !== I || t[28] !== F || t[29] !== e || t[30] !== n
        ? ((r = (0, Q.jsx)(we, {
            initialVoiceId: e,
            saveFailed: I,
            saving: F,
            voices: l.voices,
            onSubmit: n,
          })),
          (t[26] = l.voices),
          (t[27] = I),
          (t[28] = F),
          (t[29] = e),
          (t[30] = n),
          (t[31] = r))
        : (r = t[31]),
      r
    );
  }
  let W;
  t[32] === H
    ? (W = t[33])
    : ((W = (e) => {
        (e.preventDefault(), H());
      }),
      (t[32] = H),
      (t[33] = W));
  let Te = r === `intro` ? `pt-6` : `py-5`,
    G;
  t[34] === Te
    ? (G = t[35])
    : ((G = u(`flex flex-col items-center gap-8 px-6 text-center`, Te)), (t[34] = Te), (t[35] = G));
  let K;
  t[36] !== g ||
  t[37] !== B ||
  t[38] !== oe ||
  t[39] !== d ||
  t[40] !== F ||
  t[41] !== N ||
  t[42] !== R ||
  t[43] !== r ||
  t[44] !== f ||
  t[45] !== L
    ? ((K =
        r === `intro`
          ? (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`div`, {
                  className: `relative size-36`,
                  "aria-hidden": `true`,
                  children: (0, Q.jsx)(ae, {
                    glowEnabled: !1,
                    phase: `inactive`,
                    placement: `center`,
                    presentation: `preview`,
                    voiceActivity: `listening`,
                  }),
                }),
                (0, Q.jsx)(te, {
                  className: `heading-2xl`,
                  children: (0, Q.jsx)(E, {
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
                        (0, Q.jsx)(S, {}),
                        (0, Q.jsx)(`p`, {
                          children: (0, Q.jsx)(E, {
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
                        (0, Q.jsx)(s, {}),
                        (0, Q.jsxs)(`p`, {
                          children: [
                            B &&
                              f &&
                              (0, Q.jsx)(E, {
                                id: `voice_wingman_disclosure_description_body_2_enterprise_with_video`,
                                defaultMessage: `Audio and video recordings are saved but not used for training. <link>Learn more</link>.`,
                                description: `Enterprise audio and video recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: U },
                              }),
                            B &&
                              !f &&
                              (0, Q.jsx)(E, {
                                id: `voice_wingman_disclosure_description_body_2_enterprise_no_video`,
                                defaultMessage: `Your audio recordings are saved but not used for training. <link>Learn more</link>.`,
                                description: `Enterprise audio recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: U },
                              }),
                            !B &&
                              f &&
                              (0, Q.jsx)(E, {
                                id: `voice_wingman_disclosure_description_body_2_consumer_with_video`,
                                defaultMessage: `Audio and video recordings are saved, and you can delete them at any time. <link>Learn more</link>.`,
                                description: `Consumer audio and video recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: U },
                              }),
                            !B &&
                              !f &&
                              (0, Q.jsx)(E, {
                                id: `voice_wingman_disclosure_description_body_2_consumer_no_video`,
                                defaultMessage: `Audio recordings are saved, and you can delete them at any time. <link>Learn more</link>.`,
                                description: `Consumer audio recording disclosure; link opens the Voice Mode FAQ`,
                                values: { link: U },
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
                (0, Q.jsx)(te, {
                  className: g ? `heading-2xl` : `sr-only`,
                  children: (0, Q.jsx)(E, {
                    id: `voice_onboarding_voice_picker_title`,
                    defaultMessage: `Choose your voice`,
                    description: `Accessible heading for the first-use Voice picker`,
                  }),
                }),
                (d === void 0 || N != null) &&
                  L != null &&
                  R != null &&
                  (0, Q.jsx)(`div`, {
                    className: `w-full`,
                    inert: F,
                    children: g
                      ? (0, Q.jsxs)(`div`, {
                          className: `flex flex-col gap-8 text-start`,
                          children: [
                            (0, Q.jsx)(`div`, {
                              className: `relative mx-auto size-36`,
                              "aria-hidden": `true`,
                              children: (0, Q.jsx)(ae, {
                                glowEnabled: !1,
                                phase: `active`,
                                placement: `center`,
                                presentation: `preview`,
                                previewAudioLevel: oe ? 0.48 : 0.08,
                                voiceActivity: oe ? `speaking` : `listening`,
                              }),
                            }),
                            (0, Q.jsx)(D, {
                              className: `max-h-80`,
                              autoFocusSelectedVoice: !0,
                              disabled: F,
                              playPreviewOnInitialRender: !0,
                              preserveSelectionOnRefresh: !0,
                              previewEnabled: !F,
                              value: N ?? R.slug,
                              voices: L,
                              onPreviewPlaybackChange: ce,
                              onVoiceChange: re,
                            }),
                          ],
                        })
                      : (0, Q.jsx)(ne, {
                          autoFocusSelectedVoice: !0,
                          compactLayout: !0,
                          initialVoice: R,
                          voices: L,
                          onVoiceChange: re,
                        }),
                  }),
              ],
            })),
      (t[36] = g),
      (t[37] = B),
      (t[38] = oe),
      (t[39] = d),
      (t[40] = F),
      (t[41] = N),
      (t[42] = R),
      (t[43] = r),
      (t[44] = f),
      (t[45] = L),
      (t[46] = K))
    : (K = t[46]);
  let q;
  t[47] !== k || t[48] !== Se
    ? ((q =
        Se &&
        (0, Q.jsx)(_, {
          color: `secondary`,
          type: `button`,
          onClick: () => void k(),
          children: (0, Q.jsx)(E, {
            id: `voiceIntroduction.retryVoices`,
            defaultMessage: `Retry loading voices`,
            description: `Retries a failed or empty voice catalog request in the first-use Voice introduction`,
          }),
        })),
      (t[47] = k),
      (t[48] = Se),
      (t[49] = q))
    : (q = t[49]);
  let J;
  t[50] === I
    ? (J = t[51])
    : ((J =
        I &&
        (0, Q.jsx)(`p`, {
          role: `alert`,
          className: `text-sm text-secondary`,
          children: (0, Q.jsx)(E, {
            id: `chatgpt.pepper.personalization.voice.save.error`,
            defaultMessage: `We couldn’t save your voice. Try again`,
            description: `Error after saving the selected account voice fails; the user can retry`,
          }),
        })),
      (t[50] = I),
      (t[51] = J));
  let Ee = !z || F,
    Y;
  t[52] === r
    ? (Y = t[53])
    : ((Y =
        r === `intro`
          ? (0, Q.jsx)(E, {
              id: `wingmanVoiceNux.continue`,
              defaultMessage: `Continue`,
              description: `Advances from the Voice introduction to voice selection`,
            })
          : (0, Q.jsx)(E, {
              id: `wingmanVoiceNux.startVoice`,
              defaultMessage: `Start Voice`,
              description: `Saves the selected voice and starts the Voice session`,
            })),
      (t[52] = r),
      (t[53] = Y));
  let X;
  t[54] !== F || t[55] !== Ee || t[56] !== Y
    ? ((X = (0, Q.jsx)(_, {
        className: `w-full`,
        type: `submit`,
        color: `primary`,
        radius: `full`,
        size: `panelAction`,
        disabled: Ee,
        loading: F,
        children: Y,
      })),
      (t[54] = F),
      (t[55] = Ee),
      (t[56] = Y),
      (t[57] = X))
    : (X = t[57]);
  let $;
  t[58] !== G || t[59] !== K || t[60] !== q || t[61] !== J || t[62] !== X
    ? (($ = (0, Q.jsxs)(`div`, { className: G, children: [K, q, J, X] })),
      (t[58] = G),
      (t[59] = K),
      (t[60] = q),
      (t[61] = J),
      (t[62] = X),
      (t[63] = $))
    : ($ = t[63]);
  let Me;
  return (
    t[64] !== $ || t[65] !== W
      ? ((Me = (0, Q.jsx)(`form`, { className: `select-none`, onSubmit: W, children: $ })),
        (t[64] = $),
        (t[65] = W),
        (t[66] = Me))
      : (Me = t[66]),
    Me
  );
}
function Oe(e) {
  return (0, Q.jsx)(
    N,
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
var ke, Z, Q, Ae, je;
function $() {
  return ($ = e(() => {
    ((ke = f()),
      R(),
      d(),
      y(),
      (Z = i()),
      g(),
      me(),
      ue(),
      v(),
      c(),
      I(),
      m(),
      k(),
      _e(),
      j(),
      ce(),
      oe(),
      re(),
      r(),
      F(),
      fe(),
      O(),
      L(),
      Se(),
      q(),
      U(),
      (Q = l()),
      (Ae = b(`WingmanVoiceNuxScope`, { parent: p })),
      (je = w(Ae, () => null)));
  }))();
}
export { Ee as n, $ as t };
//# sourceMappingURL=wingman-voice-nux-692894d6fe4a.js.map
