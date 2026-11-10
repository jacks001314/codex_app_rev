import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  FBt as n,
  IH as r,
  LNt as i,
  Mst as a,
  PBt as o,
  TY as s,
  XOt as c,
  Y3 as l,
  Z3 as u,
  cwt as d,
  ew as f,
  iw as p,
  iwt as m,
  jst as h,
  lH as g,
  okt as _,
  tkt as v,
  uw as y,
  vG as b,
} from "./app-shared-2feb3d4c6fcc.js";
import { hJ as x, iRr as S, imr as C, pJ as w, rmr as T, tyr as E } from "./app-initial-ad16eaadf81f.js";
import { i as D, n as O, r as k } from "./shared-30e89022d7a8.js";
async function A(e, t) {
  t.throwIfAborted();
  let n = await navigator.mediaDevices.getUserMedia({
      audio: !1,
      video: { facingMode: `user`, width: { ideal: 1280 }, height: { ideal: 1280 } },
    }),
    r = () => {
      for (let e of n.getTracks()) e.stop();
      (e.srcObject === n && (e.srcObject = null), t.removeEventListener(`abort`, r));
    };
  if (t.aborted || document.hidden) throw (r(), new DOMException(`Camera capture stopped`, `AbortError`));
  t.addEventListener(`abort`, r, { once: !0 });
  for (let e of n.getTracks()) e.addEventListener(`ended`, r, { once: !0 });
  e.srcObject = n;
  try {
    (await e.play(), t.throwIfAborted());
  } catch (e) {
    throw (r(), e);
  }
}
function j(e, t = 1) {
  if (
    !e.videoWidth ||
    !e.videoHeight ||
    e.readyState < 2 ||
    !(e.srcObject instanceof MediaStream) ||
    !e.srcObject.active ||
    !Number.isFinite(t) ||
    t < 1 ||
    t > 2
  )
    throw Error(`Camera frame is unavailable`);
  let n = document.createElement(`canvas`);
  n.width = n.height = 112;
  let r = n.getContext(`2d`, { willReadFrequently: !0 });
  if (!r) throw Error(`Camera capture is unavailable`);
  let i = Math.min(e.videoWidth, e.videoHeight) / t;
  r.drawImage(e, (e.videoWidth - i) / 2, (e.videoHeight - i) / 2, i, i, 0, 0, 112, 112);
  let a = r.getImageData(0, 0, 112, 112).data,
    o = new Uint8Array(37632);
  for (let e = 0; e < o.length / 3; e++) o.set(a.subarray(e * 4, e * 4 + 3), e * 3);
  let s = ``;
  for (let e = 0; e < o.length; e += 8192) s += String.fromCharCode(...o.subarray(e, e + 8192));
  return { capture: btoa(s), preview: n.toDataURL(`image/png`) };
}
function M(e) {
  let t = (0, re.c)(47),
    { Button: n, modality: r, factorId: i, storageKey: a, onRemove: o, onRefresh: s } = e,
    c = _(),
    l = (0, P.useRef)(null),
    [u, d] = (0, P.useState)(null),
    f;
  t[0] === a ? (f = t[1]) : ((f = () => N(a)), (t[0] = a), (t[1] = f));
  let p = (0, P.useSyncExternalStore)(te, f, ee),
    [m, h] = (0, P.useState)(`idle`),
    g,
    y;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = () => () => l.current?.abort()), (y = []), (t[2] = g), (t[3] = y))
    : ((g = t[2]), (y = t[3])),
    (0, P.useEffect)(g, y));
  let b = m === `idle` && p != null ? `uncertain` : m,
    x;
  t[4] === s
    ? (x = t[5])
    : ((x = async function () {
        try {
          return (await s(), !0);
        } catch {
          return !1;
        }
      }),
      (t[4] = s),
      (t[5] = x));
  let S = x,
    C;
  t[6] !== o || t[7] !== p || t[8] !== S || t[9] !== a || t[10] !== u
    ? ((C = async function () {
        let e = u ?? p;
        if (l.current != null || e == null) return;
        let t = new AbortController();
        ((l.current = t), d(e), ne(a, e), h(`removing`));
        let n = !1;
        try {
          (await o(e, t.signal), (n = !0));
        } catch {}
        if (t.signal.aborted) return;
        (n && (ne(a, null), d(null)), h(n ? `removed` : `uncertain`), (l.current = null));
        let r = await S();
        n && r && !t.signal.aborted && h(`idle`);
      }),
      (t[6] = o),
      (t[7] = p),
      (t[8] = S),
      (t[9] = a),
      (t[10] = u),
      (t[11] = C))
    : (C = t[11]);
  let w = C;
  if (b === `idle` && i == null) return null;
  let T = b !== `idle` || void 0,
    E =
      b === `idle`
        ? `flex`
        : `order-last flex w-full flex-wrap items-center gap-x-2 gap-y-4 text-sm leading-6`,
    D;
  t[12] !== n || t[13] !== i || t[14] !== c || t[15] !== r || t[16] !== b
    ? ((D =
        b === `idle` &&
        (0, F.jsx)(n, {
          type: `button`,
          color: `secondary`,
          "aria-label": c.formatMessage(
            {
              id: `settings.biometric.removal.start`,
              defaultMessage: `{modality, select, FACE {Remove face} VOICE {Remove voice} other {Remove enrollment}}`,
              description: `Accessible label for the Remove action beside a saved reference. Modality is FACE or VOICE.`,
            },
            { modality: r },
          ),
          onClick: () => {
            (d(i), h(`confirm`));
          },
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removeAction`,
            defaultMessage: `Remove`,
            description: `Action beside a saved face or voice reference that opens removal confirmation.`,
          }),
        })),
      (t[12] = n),
      (t[13] = i),
      (t[14] = c),
      (t[15] = r),
      (t[16] = b),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== n || t[19] !== r || t[20] !== w || t[21] !== b
    ? ((O =
        b === `confirm` &&
        (0, F.jsxs)(`form`, {
          className: `flex flex-wrap items-start gap-2`,
          onSubmit: (e) => {
            (e.preventDefault(), w());
          },
          children: [
            (0, F.jsx)(`p`, {
              className: `mb-1 w-full`,
              children: (0, F.jsx)(v, {
                id: `settings.biometric.removal.confirm`,
                defaultMessage: `{modality, select, FACE {Remove your saved face enrollment?} VOICE {Remove your saved voice enrollment?} other {Remove your saved enrollment?}} You’ll need to set it up again to use it for verification. This does not change your password or other sign-in methods.`,
                description: `Confirmation before removing a face or voice enrollment. Modality is FACE or VOICE. Removal does not change existing sign-in methods.`,
                values: { modality: r },
              }),
            }),
            (0, F.jsx)(n, {
              type: `submit`,
              color: `primary`,
              children: (0, F.jsx)(v, {
                id: `settings.biometric.removal.submit`,
                defaultMessage: `Remove enrollment`,
                description: `Confirmation button that removes only the face or voice enrollment named in the preceding confirmation.`,
              }),
            }),
            (0, F.jsx)(n, {
              type: `button`,
              color: `secondary`,
              onClick: () => h(`idle`),
              children: (0, F.jsx)(v, {
                id: `settings.biometric.removal.cancel`,
                defaultMessage: `Cancel`,
                description: `Button that closes enrollment removal confirmation without sending a request.`,
              }),
            }),
          ],
        })),
      (t[18] = n),
      (t[19] = r),
      (t[20] = w),
      (t[21] = b),
      (t[22] = O))
    : (O = t[22]);
  let k;
  t[23] === b
    ? (k = t[24])
    : ((k =
        b === `removing` &&
        (0, F.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removal.pending`,
            defaultMessage: `Removing enrollment…`,
            description: `Status while the server removes the selected face or voice enrollment.`,
          }),
        })),
      (t[23] = b),
      (t[24] = k));
  let A;
  t[25] === b
    ? (A = t[26])
    : ((A =
        b === `removed` &&
        (0, F.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removal.done`,
            defaultMessage: `Enrollment removed`,
            description: `Success shown only after the server confirms removal of the selected face or voice enrollment.`,
          }),
        })),
      (t[25] = b),
      (t[26] = A));
  let j;
  t[27] === b
    ? (j = t[28])
    : ((j =
        b === `uncertain` &&
        (0, F.jsx)(`p`, {
          className: `w-full`,
          role: `alert`,
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removal.uncertain`,
            defaultMessage: `Removal wasn’t confirmed. Retry removal to finish. A newer enrollment won’t be removed.`,
            description: `An uncertain deletion must be retried with the same factor ID until the server confirms template cleanup. Retrying cannot delete a newer enrollment. No private details or placeholders.`,
          }),
        })),
      (t[27] = b),
      (t[28] = j));
  let M;
  t[29] !== n || t[30] !== w || t[31] !== b
    ? ((M =
        b === `uncertain` &&
        (0, F.jsx)(n, {
          type: `button`,
          color: `primary`,
          onClick: () => void w(),
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removal.retry`,
            defaultMessage: `Retry removal`,
            description: `Explicitly retry deletion of the same previously selected enrollment to finish cleanup or confirm an uncertain result. It cannot remove a newer enrollment.`,
          }),
        })),
      (t[29] = n),
      (t[30] = w),
      (t[31] = b),
      (t[32] = M))
    : (M = t[32]);
  let I;
  t[33] !== n || t[34] !== S || t[35] !== b
    ? ((I =
        (b === `removed` || b === `uncertain`) &&
        (0, F.jsx)(n, {
          type: `button`,
          color: `secondary`,
          onClick: () =>
            void S().then((e) => {
              e && b === `removed` && h(`idle`);
            }),
          children: (0, F.jsx)(v, {
            id: `settings.biometric.removal.refresh`,
            defaultMessage: `Refresh settings`,
            description: `Button that reloads enrollment status without repeating a deletion.`,
          }),
        })),
      (t[33] = n),
      (t[34] = S),
      (t[35] = b),
      (t[36] = I))
    : (I = t[36]);
  let L;
  return (
    t[37] !== k ||
    t[38] !== A ||
    t[39] !== j ||
    t[40] !== M ||
    t[41] !== I ||
    t[42] !== T ||
    t[43] !== E ||
    t[44] !== D ||
    t[45] !== O
      ? ((L = (0, F.jsxs)(`section`, {
          "data-expanded": T,
          className: E,
          "data-dd-privacy": `hidden`,
          children: [D, O, k, A, j, M, I],
        })),
        (t[37] = k),
        (t[38] = A),
        (t[39] = j),
        (t[40] = M),
        (t[41] = I),
        (t[42] = T),
        (t[43] = E),
        (t[44] = D),
        (t[45] = O),
        (t[46] = L))
      : (L = t[46]),
    L
  );
}
function ee() {
  return null;
}
function N(e) {
  try {
    let t = sessionStorage.getItem(e);
    return t && t.length <= 512 ? t : null;
  } catch {
    return null;
  }
}
function te(e) {
  return (
    window.addEventListener(`storage`, e),
    window.addEventListener(`biometric-removal-change`, e),
    () => {
      (window.removeEventListener(`storage`, e), window.removeEventListener(`biometric-removal-change`, e));
    }
  );
}
function ne(e, t) {
  try {
    t == null ? sessionStorage.removeItem(e) : sessionStorage.setItem(e, t);
  } catch {}
  window.dispatchEvent(new Event(`biometric-removal-change`));
}
var re, P, F;
function I() {
  return (I = e(() => {
    ((re = o()), (P = n()), c(), (F = i()));
  }))();
}
function L(e) {
  let t = (0, ie.c)(88),
    { Button: n, replacing: r, onEnroll: i, onRefresh: a } = e,
    o = r !== void 0 && r,
    s = _(),
    c = (0, R.useRef)(null),
    l = (0, R.useRef)(null),
    [u, d] = (0, R.useState)(`idle`),
    [f, p] = (0, R.useState)(null),
    [m, h] = (0, R.useState)(1),
    [g, y] = (0, R.useState)(!1),
    b;
  t[0] === a
    ? (b = t[1])
    : ((b = async () => {
        let e = l.current;
        try {
          (await a(), l.current === e && y(!1));
        } catch {}
      }),
      (t[0] = a),
      (t[1] = b));
  let x = b,
    S;
  t[2] === g
    ? (S = t[3])
    : ((S = function () {
        (l.current?.abort(), p(null), d(g ? `saveError` : `idle`));
      }),
      (t[2] = g),
      (t[3] = S));
  let C = S,
    w;
  t[4] !== C || t[5] !== x || t[6] !== u
    ? ((w = () => {
        document.hidden && (C(), u === `saving` && x());
      }),
      (t[4] = C),
      (t[5] = x),
      (t[6] = u),
      (t[7] = w))
    : (w = t[7]);
  let T = (0, R.useEffectEvent)(w),
    E;
  t[8] === T
    ? (E = t[9])
    : ((E = () => (
        document.addEventListener(`visibilitychange`, T),
        () => {
          (document.removeEventListener(`visibilitychange`, T), l.current?.abort());
        }
      )),
      (t[8] = T),
      (t[9] = E));
  let D;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = []), (t[10] = D)) : (D = t[10]),
    (0, R.useEffect)(E, D));
  let O;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = async function () {
        l.current?.abort();
        let e = new AbortController();
        ((l.current = e), p(null), h(1));
        let t = c.current;
        if (!t) {
          d(`cameraError`);
          return;
        }
        d(`opening`);
        try {
          (await A(t, e.signal), e.signal.aborted || d(`camera`));
        } catch {
          e.signal.aborted || d(`cameraError`);
        }
      }),
      (t[11] = O))
    : (O = t[11]);
  let k = O,
    M;
  t[12] === m
    ? (M = t[13])
    : ((M = function () {
        let e = c.current;
        if (e)
          try {
            (p(j(e, m)), l.current?.abort(), d(`preview`));
          } catch {
            (l.current?.abort(), d(`cameraError`));
          }
      }),
      (t[12] = m),
      (t[13] = M));
  let ee = M,
    N;
  t[14] !== f || t[15] !== i || t[16] !== x || t[17] !== u
    ? ((N = async function () {
        if (!f || u !== `preview` || (l.current != null && !l.current.signal.aborted)) return;
        let e = new AbortController();
        ((l.current = e), d(`saving`), y(!0));
        let t = !1;
        try {
          (await i(f.capture, e.signal), (t = !0));
        } catch {}
        l.current === e && (p(null), e.signal.aborted || d(t ? `saved` : `saveError`), x());
      }),
      (t[14] = f),
      (t[15] = i),
      (t[16] = x),
      (t[17] = u),
      (t[18] = N))
    : (N = t[18]);
  let te = N,
    ne = u !== `idle` || void 0,
    re =
      u === `idle`
        ? `flex`
        : `order-last flex w-full flex-wrap items-center gap-x-2 gap-y-4 text-sm leading-6`,
    P;
  t[19] === s
    ? (P = t[20])
    : ((P = s.formatMessage({
        id: `settings.biometric.faceEnrollment.title`,
        defaultMessage: `Set up face verification`,
        description: `Accessible title for the optional face enrollment controls inside the signed-in user's Security settings. No placeholders.`,
      })),
      (t[19] = s),
      (t[20] = P));
  let F;
  t[21] !== n || t[22] !== s || t[23] !== o || t[24] !== u
    ? ((F =
        u === `idle` &&
        (0, z.jsx)(n, {
          type: `button`,
          color: `secondary`,
          "aria-label": o
            ? s.formatMessage({
                id: `settings.biometric.faceEnrollment.replace`,
                defaultMessage: `Replace face`,
                description: `Accessible label for the Replace action beside the saved face reference in Security settings.`,
              })
            : s.formatMessage({
                id: `settings.biometric.faceEnrollment.start`,
                defaultMessage: `Set up face`,
                description: `Accessible label for the Set up action beside face in Security settings.`,
              }),
          onClick: () => d(`consent`),
          children: o
            ? (0, z.jsx)(v, {
                id: `settings.biometric.replaceAction`,
                defaultMessage: `Replace`,
                description: `Action beside a face or voice reference that starts replacement with a fresh capture.`,
              })
            : (0, z.jsx)(v, {
                id: `settings.biometric.setupAction`,
                defaultMessage: `Set up`,
                description: `Action beside Face or Voice that begins optional consent and capture in Security settings.`,
              }),
        })),
      (t[21] = n),
      (t[22] = s),
      (t[23] = o),
      (t[24] = u),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] !== n || t[27] !== o || t[28] !== u
    ? ((I =
        u === `consent` &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            o &&
              (0, z.jsx)(`p`, {
                className: `w-full`,
                children: (0, z.jsx)(v, {
                  id: `settings.biometric.faceEnrollment.replacementNotice`,
                  defaultMessage: `Your current face enrollment stays in place until the new one is saved`,
                  description: `Explanation before replacing face enrollment. The previous reference is replaced only when the new enrollment is saved; an uncertain response can follow a completed save. No placeholders.`,
                }),
              }),
            (0, z.jsx)(`p`, {
              className: `w-full`,
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.consent`,
                defaultMessage: `I agree to store an encrypted representation of my face for experimental verification. It expires after 30 days. My photo will be processed to create this representation and won’t be saved. Setup is optional and does not change how I sign in.`,
                description: `Consent text before a signed-in user enables their camera for face enrollment in Security settings. The encrypted mathematical reference expires after 30 days; the photo is not stored. No placeholders.`,
              }),
            }),
            (0, z.jsx)(n, {
              type: `button`,
              color: `primary`,
              onClick: () => void k(),
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.agree`,
                defaultMessage: `I agree and open camera`,
                description: `Explicit consent button in face enrollment. Selecting it accepts the displayed storage policy and requests browser camera permission.`,
              }),
            }),
          ],
        })),
      (t[26] = n),
      (t[27] = o),
      (t[28] = u),
      (t[29] = I))
    : (I = t[29]);
  let L = u !== `camera` && u !== `opening`,
    ae = `scale(${m})`,
    B;
  t[30] === ae ? (B = t[31]) : ((B = { transform: ae }), (t[30] = ae), (t[31] = B));
  let V;
  t[32] === s
    ? (V = t[33])
    : ((V = s.formatMessage({
        id: `settings.biometric.faceEnrollment.camera`,
        defaultMessage: `Camera preview`,
        description: `Accessible label for the live camera preview used to align the face enrollment photo. No placeholders.`,
      })),
      (t[32] = s),
      (t[33] = V));
  let H;
  t[34] !== B || t[35] !== V
    ? ((H = (0, z.jsx)(`video`, {
        ref: c,
        className: `h-full w-full object-cover`,
        style: B,
        autoPlay: !0,
        muted: !0,
        playsInline: !0,
        "aria-label": V,
      })),
      (t[34] = B),
      (t[35] = V),
      (t[36] = H))
    : (H = t[36]);
  let U;
  t[37] !== L || t[38] !== H
    ? ((U = (0, z.jsx)(`div`, {
        hidden: L,
        className: `mx-auto aspect-square w-full max-w-64 overflow-hidden rounded-2xl`,
        children: H,
      })),
      (t[37] = L),
      (t[38] = H),
      (t[39] = U))
    : (U = t[39]);
  let W;
  t[40] === u
    ? (W = t[41])
    : ((W =
        u === `opening` &&
        (0, z.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.opening`,
            defaultMessage: `Opening camera…`,
            description: `Status while Security settings waits for camera permission and a live preview for optional face enrollment.`,
          }),
        })),
      (t[40] = u),
      (t[41] = W));
  let G;
  t[42] !== n || t[43] !== u || t[44] !== ee || t[45] !== m
    ? ((G =
        u === `camera` &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(`p`, {
              className: `w-full`,
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.position`,
                defaultMessage: `Center your face in the square. Adjust the zoom, then take a photo.`,
                description: `Instructions beside the face enrollment camera preview. Zoom changes the centered square crop sent to the model; no automatic alignment or liveness check is performed.`,
              }),
            }),
            (0, z.jsxs)(`label`, {
              className: `flex w-full items-center gap-3`,
              children: [
                (0, z.jsx)(v, {
                  id: `settings.biometric.faceEnrollment.zoom`,
                  defaultMessage: `Zoom`,
                  description: `Label for the face enrollment preview zoom slider, from normal size to twice the size. No placeholders.`,
                }),
                (0, z.jsx)(`input`, {
                  className: `min-w-0 flex-1 accent-current`,
                  name: `face-crop-zoom`,
                  type: `range`,
                  min: `1`,
                  max: `2`,
                  step: `0.05`,
                  value: m,
                  onChange: (e) => h(Number(e.target.value)),
                }),
              ],
            }),
            (0, z.jsx)(n, {
              type: `button`,
              color: `primary`,
              onClick: ee,
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.capture`,
                defaultMessage: `Take photo`,
                description: `Button that freezes the current square camera crop for review in face enrollment. No upload happens yet.`,
              }),
            }),
          ],
        })),
      (t[42] = n),
      (t[43] = u),
      (t[44] = ee),
      (t[45] = m),
      (t[46] = G))
    : (G = t[46]);
  let K;
  t[47] !== f || t[48] !== s
    ? ((K =
        f &&
        (0, z.jsx)(`div`, {
          className: `flex w-full justify-center`,
          children: (0, z.jsx)(`img`, {
            className: `mx-auto size-40 rounded-2xl object-cover`,
            src: f.preview,
            width: 112,
            height: 112,
            alt: s.formatMessage({
              id: `settings.biometric.faceEnrollment.preview`,
              defaultMessage: `Face photo to enroll`,
              description: `Alternative text for the cropped face photo the user reviews before submitting optional face enrollment. No placeholders.`,
            }),
          }),
        })),
      (t[47] = f),
      (t[48] = s),
      (t[49] = K))
    : (K = t[49]);
  let q;
  t[50] !== n || t[51] !== te || t[52] !== u
    ? ((q =
        u === `preview` &&
        (0, z.jsxs)(`form`, {
          onSubmit: (e) => {
            (e.preventDefault(), te());
          },
          className: `flex flex-wrap gap-2`,
          children: [
            (0, z.jsx)(n, {
              type: `submit`,
              color: `primary`,
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.save`,
                defaultMessage: `Save face enrollment`,
                description: `Primary confirmation button that submits the reviewed cropped photo and the user's earlier consent to create their face reference.`,
              }),
            }),
            (0, z.jsx)(n, {
              type: `button`,
              color: `secondary`,
              onClick: () => void k(),
              children: (0, z.jsx)(v, {
                id: `settings.biometric.faceEnrollment.retake`,
                defaultMessage: `Retake photo`,
                description: `Button that discards the current face enrollment photo and reopens the camera. The previous photo is not submitted.`,
              }),
            }),
          ],
        })),
      (t[50] = n),
      (t[51] = te),
      (t[52] = u),
      (t[53] = q))
    : (q = t[53]);
  let J;
  t[54] === u
    ? (J = t[55])
    : ((J =
        u === `saving` &&
        (0, z.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.saving`,
            defaultMessage: `Saving face enrollment…`,
            description: `Status while the reviewed face photo is processed and the encrypted reference is saved for the signed-in user.`,
          }),
        })),
      (t[54] = u),
      (t[55] = J));
  let Y;
  t[56] === u
    ? (Y = t[57])
    : ((Y =
        u === `saved` &&
        (0, z.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.saved`,
            defaultMessage: `Face enrollment saved.`,
            description: `Success message shown only after the server confirms the signed-in user's face enrollment was saved.`,
          }),
        })),
      (t[56] = u),
      (t[57] = Y));
  let X;
  t[58] === u
    ? (X = t[59])
    : ((X =
        u === `cameraError` &&
        (0, z.jsx)(`p`, {
          className: `w-full`,
          role: `alert`,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.cameraError`,
            defaultMessage: `Couldn’t use the camera. Check your browser permissions, then try again.`,
            description: `Error in face enrollment when camera permission is denied, the device is unavailable, or no valid frame can be captured. No technical details or placeholders.`,
          }),
        })),
      (t[58] = u),
      (t[59] = X));
  let Z;
  t[60] === u
    ? (Z = t[61])
    : ((Z =
        u === `saveError` &&
        (0, z.jsx)(`p`, {
          className: `w-full`,
          role: `alert`,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.saveError`,
            defaultMessage: `Couldn’t confirm that enrollment was saved. Refresh settings before trying again.`,
            description: `Error after an uncertain face enrollment submission. The write may have completed; the user must refresh status before attempting a new enrollment. No private error details.`,
          }),
        })),
      (t[60] = u),
      (t[61] = Z));
  let Q;
  t[62] !== n || t[63] !== x || t[64] !== u
    ? ((Q =
        u === `saveError` &&
        (0, z.jsx)(n, {
          type: `button`,
          color: `secondary`,
          onClick: () => void x(),
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.refresh`,
            defaultMessage: `Refresh settings`,
            description: `Button that reloads face enrollment status after an uncertain submission without resending the photo.`,
          }),
        })),
      (t[62] = n),
      (t[63] = x),
      (t[64] = u),
      (t[65] = Q))
    : (Q = t[65]);
  let oe;
  t[66] !== n || t[67] !== C || t[68] !== g || t[69] !== u
    ? ((oe =
        !g &&
        u !== `idle` &&
        u !== `saving` &&
        u !== `saved` &&
        (0, z.jsx)(n, {
          type: `button`,
          color: `ghost`,
          onClick: C,
          children: (0, z.jsx)(v, {
            id: `settings.biometric.faceEnrollment.cancel`,
            defaultMessage: `Close`,
            description: `Button that closes the face enrollment controls and clears the local photo and camera. It does not undo an enrollment already submitted.`,
          }),
        })),
      (t[66] = n),
      (t[67] = C),
      (t[68] = g),
      (t[69] = u),
      (t[70] = oe))
    : (oe = t[70]);
  let se;
  return (
    t[71] !== ne ||
    t[72] !== re ||
    t[73] !== P ||
    t[74] !== F ||
    t[75] !== I ||
    t[76] !== U ||
    t[77] !== W ||
    t[78] !== G ||
    t[79] !== K ||
    t[80] !== q ||
    t[81] !== J ||
    t[82] !== Y ||
    t[83] !== X ||
    t[84] !== Z ||
    t[85] !== Q ||
    t[86] !== oe
      ? ((se = (0, z.jsxs)(`section`, {
          "data-expanded": ne,
          "data-dd-privacy": `hidden`,
          className: re,
          "aria-label": P,
          children: [F, I, U, W, G, K, q, J, Y, X, Z, Q, oe],
        })),
        (t[71] = ne),
        (t[72] = re),
        (t[73] = P),
        (t[74] = F),
        (t[75] = I),
        (t[76] = U),
        (t[77] = W),
        (t[78] = G),
        (t[79] = K),
        (t[80] = q),
        (t[81] = J),
        (t[82] = Y),
        (t[83] = X),
        (t[84] = Z),
        (t[85] = Q),
        (t[86] = oe),
        (t[87] = se))
      : (se = t[87]),
    se
  );
}
var ie, R, z, ae;
function B() {
  return (B = e(() => {
    ((ie = o()), (R = n()), c(), (z = i()), I(), (ae = `face-voice-prototype-v1`));
  }))();
}
var V;
function H() {
  return (H = e(() => {
    V = `` + new URL(`pcm-worklet-91f035ec0aec.js`, import.meta.url).href;
  }))();
}
function U(e, t) {
  return (
    e.throwIfAborted(),
    new Promise((n, r) => {
      let i = new Float32Array(8e4),
        a = 0,
        o = -1,
        s = !1,
        c,
        l,
        u,
        d;
      function f() {
        (clearTimeout(m), e.removeEventListener(`abort`, p));
        for (let e of c?.getTracks() ?? []) (e.removeEventListener(`ended`, p), e.stop());
        (d && ((d.port.onmessage = null), (d.onprocessorerror = null), d.port.close(), d.disconnect()),
          u?.disconnect(),
          l && ((l.onstatechange = null), l.close().catch(() => {})),
          i.fill(0));
      }
      function p() {
        s || ((s = !0), f(), r(Error(`Voice capture was interrupted`)));
      }
      let m = window.setTimeout(p, 15e3);
      e.addEventListener(`abort`, p, { once: !0 });
      async function h() {
        let r = await navigator.mediaDevices.getUserMedia({
          video: !1,
          audio: { channelCount: 1, echoCancellation: !1, noiseSuppression: !1, autoGainControl: !1 },
        });
        if (s || e.aborted || document.hidden) {
          for (let e of r.getTracks()) e.stop();
          p();
          return;
        }
        c = r;
        for (let e of c.getTracks()) e.addEventListener(`ended`, p, { once: !0 });
        if (((l = new AudioContext({ sampleRate: 16e3 })), l.sampleRate !== 16e3))
          throw Error(`Unsupported sample rate`);
        (await l.audioWorklet.addModule(V),
          !s &&
            (await l.resume(),
            !s &&
              ((u = l.createMediaStreamSource(c)),
              (d = new AudioWorkletNode(l, `biometric-pcm-capture`, {
                channelCount: 1,
                channelCountMode: `explicit`,
              })),
              (d.onprocessorerror = p),
              (d.port.onmessage = ({ data: e }) => {
                if (s) return;
                let r = e.subarray(0, i.length - a);
                (i.set(r, a), (a += r.length));
                let c = Math.floor(a / 16e3);
                if ((c !== o && ((o = c), t(o)), a === i.length))
                  try {
                    let e = W(i);
                    ((s = !0), f(), n(e));
                  } catch {
                    p();
                  }
              }),
              (l.onstatechange = () => {
                l?.state !== `running` && p();
              }),
              u.connect(d),
              d.connect(l.destination))));
      }
      h().catch(p);
    })
  );
}
function W(e) {
  let t = new Uint8Array(e.length * 2),
    n = new DataView(t.buffer);
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (!Number.isFinite(r)) throw Error(`Invalid microphone samples`);
    let i = Math.max(-1, Math.min(1, r));
    n.setInt16(t * 2, Math.round(i * (i < 0 ? 32768 : 32767)), !0);
  }
  let r = ``;
  for (let e = 0; e < t.length; e += 8192) r += String.fromCharCode(...t.subarray(e, e + 8192));
  return btoa(r);
}
function G() {
  return (G = e(() => {
    H();
  }))();
}
function K({ Button: e, replacing: t = !1, onEnroll: n, onRefresh: r }) {
  let i = _(),
    a = (0, q.useRef)(null),
    [o, s] = (0, q.useState)(`idle`),
    [c, l] = (0, q.useState)(null),
    [u, d] = (0, q.useState)(0);
  function f() {
    (a.current?.abort(),
      l(null),
      s(o === `saving` || o === `saveError` || o === `refreshing` ? `saveError` : `idle`));
  }
  let p = (0, q.useEffectEvent)(() => {
    document.hidden && (f(), o === `saving` && r().catch(() => {}));
  });
  (0, q.useEffect)(
    () => (
      document.addEventListener(`visibilitychange`, p),
      () => {
        (document.removeEventListener(`visibilitychange`, p), a.current?.abort());
      }
    ),
    [],
  );
  async function m() {
    if (a.current && !a.current.signal.aborted) return;
    a.current?.abort();
    let e = new AbortController();
    ((a.current = e), l(null), d(0), s(`opening`));
    try {
      let t = await U(e.signal, (t) => {
        e.signal.aborted || (d(t), s(`recording`));
      });
      if (e.signal.aborted) return;
      (e.abort(), l(t), s(`preview`));
    } catch {
      e.signal.aborted || (e.abort(), s(`captureError`));
    }
  }
  async function h() {
    if (!c || o !== `preview` || (a.current && !a.current.signal.aborted)) return;
    let e = new AbortController();
    ((a.current = e), s(`saving`));
    let t = !1;
    try {
      (await n(c, e.signal), (t = !0));
    } catch {}
    if (a.current === e) {
      (l(null), e.signal.aborted || s(t ? `saved` : `saveError`));
      try {
        await r();
      } catch {}
    }
  }
  async function g() {
    a.current?.abort();
    let e = new AbortController();
    ((a.current = e), s(`refreshing`));
    try {
      (await r(), e.signal.aborted || s(`idle`));
    } catch {
      e.signal.aborted || s(`saveError`);
    } finally {
      e.abort();
    }
  }
  return (0, J.jsxs)(`section`, {
    "data-expanded": o !== `idle` || void 0,
    "data-dd-privacy": `hidden`,
    className:
      o === `idle`
        ? `flex`
        : `order-last flex w-full flex-wrap items-center gap-x-2 gap-y-4 text-sm leading-6`,
    "aria-label": i.formatMessage({
      id: `settings.biometric.voiceEnrollment.title`,
      defaultMessage: `Set up voice verification`,
      description: `Accessible title of the optional microphone enrollment controls in the signed-in user's Security settings. No placeholders.`,
    }),
    children: [
      o === `idle` &&
        (0, J.jsx)(e, {
          type: `button`,
          color: `secondary`,
          "aria-label": t
            ? i.formatMessage({
                id: `settings.biometric.voiceEnrollment.replace`,
                defaultMessage: `Replace voice`,
                description: `Accessible label for the Replace action beside the saved voice reference in Security settings.`,
              })
            : i.formatMessage({
                id: `settings.biometric.voiceEnrollment.start`,
                defaultMessage: `Set up voice`,
                description: `Accessible label for the Set up action beside voice in Security settings.`,
              }),
          onClick: () => s(`consent`),
          children: t
            ? (0, J.jsx)(v, {
                id: `settings.biometric.replaceAction`,
                defaultMessage: `Replace`,
                description: `Action beside a face or voice reference that starts replacement with a fresh capture.`,
              })
            : (0, J.jsx)(v, {
                id: `settings.biometric.setupAction`,
                defaultMessage: `Set up`,
                description: `Action beside Face or Voice that begins optional consent and capture in Security settings.`,
              }),
        }),
      o === `consent` &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            t &&
              (0, J.jsx)(`p`, {
                className: `w-full`,
                children: (0, J.jsx)(v, {
                  id: `settings.biometric.voiceEnrollment.replacementNotice`,
                  defaultMessage: `Your current voice enrollment stays in place until the new one is saved`,
                  description: `Explanation before replacing voice enrollment. The previous reference is replaced only when the new enrollment is saved; an uncertain response can follow a completed save. No placeholders.`,
                }),
              }),
            (0, J.jsx)(`p`, {
              className: `w-full`,
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.consent`,
                defaultMessage: `I agree to store an encrypted representation of my voice for experimental verification. It expires after 30 days. My recording will be processed to create this representation and won’t be saved. Setup is optional and does not change how I sign in.`,
                description: `Consent shown before a signed-in user enables their microphone for voice enrollment in Security settings. Only an encrypted mathematical reference is retained for 30 days; the audio recording is not stored. No placeholders.`,
              }),
            }),
            (0, J.jsx)(`p`, {
              className: `w-full`,
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.instructions`,
                defaultMessage: `Speak naturally for five seconds. Recording stops automatically.`,
                description: `Instructions before microphone access for optional voice enrollment in Security settings. The user may say any short sentence; there is no required passphrase. No placeholders.`,
              }),
            }),
            (0, J.jsx)(e, {
              type: `button`,
              color: `primary`,
              onClick: () => void m(),
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.agree`,
                defaultMessage: `I agree and record`,
                description: `Explicit consent button that requests microphone access and starts a five-second voice enrollment recording in Security settings.`,
              }),
            }),
          ],
        }),
      o === `opening` &&
        (0, J.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.opening`,
            defaultMessage: `Opening microphone…`,
            description: `Status while optional voice enrollment waits for microphone permission and recording setup in Security settings.`,
          }),
        }),
      o === `recording` &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`div`, {
              "aria-hidden": `true`,
              className: `h-1.5 w-full overflow-hidden rounded-full bg-current/10`,
              children: (0, J.jsx)(`div`, {
                className: `h-full rounded-full bg-current transition-[width] motion-reduce:transition-none`,
                style: { width: `${(u / 5) * 100}%` },
              }),
            }),
            (0, J.jsx)(`p`, {
              className: `w-full`,
              role: `status`,
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.recording`,
                defaultMessage: `Recording: {seconds} of 5 seconds`,
                values: { seconds: u },
                description: `Live status during voice enrollment in Security settings. The numeric seconds placeholder is the elapsed whole seconds, from 0 to 5. Recording stops automatically after five seconds.`,
              }),
            }),
          ],
        }),
      o === `preview` &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`p`, {
              className: `w-full`,
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.ready`,
                defaultMessage: `Recording ready. Save it to set up voice verification, or record again.`,
                description: `Message after microphone recording ends in optional voice enrollment. No audio has been submitted yet. The user must explicitly save or discard and record again.`,
              }),
            }),
            (0, J.jsxs)(`form`, {
              className: `flex flex-wrap gap-2`,
              onSubmit: (e) => {
                (e.preventDefault(), h());
              },
              children: [
                (0, J.jsx)(e, {
                  type: `submit`,
                  color: `primary`,
                  children: (0, J.jsx)(v, {
                    id: `settings.biometric.voiceEnrollment.save`,
                    defaultMessage: `Save voice enrollment`,
                    description: `Button that submits the five-second recording and the user's consent to save their encrypted voice reference in Security settings.`,
                  }),
                }),
                (0, J.jsx)(e, {
                  type: `button`,
                  color: `secondary`,
                  onClick: () => void m(),
                  children: (0, J.jsx)(v, {
                    id: `settings.biometric.voiceEnrollment.retake`,
                    defaultMessage: `Record again`,
                    description: `Button that discards the unsent voice enrollment recording and starts another five-second recording. The user has already consented to microphone access.`,
                  }),
                }),
              ],
            }),
          ],
        }),
      o === `saving` &&
        (0, J.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.saving`,
            defaultMessage: `Saving voice enrollment…`,
            description: `Status while the server processes the submitted recording and saves the signed-in user's encrypted voice reference.`,
          }),
        }),
      o === `saved` &&
        (0, J.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.saved`,
            defaultMessage: `Voice enrollment saved`,
            description: `Success message displayed only after the server confirms the signed-in user's voice enrollment was saved. No placeholders.`,
          }),
        }),
      o === `captureError` &&
        (0, J.jsx)(`p`, {
          className: `w-full`,
          role: `alert`,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.captureError`,
            defaultMessage: `Couldn’t record your voice. Check your microphone and browser permissions, then try again.`,
            description: `Error during optional voice enrollment when microphone permission is denied, recording is interrupted, or the browser cannot capture supported audio. No private technical details or placeholders.`,
          }),
        }),
      o === `saveError` &&
        (0, J.jsxs)(J.Fragment, {
          children: [
            (0, J.jsx)(`p`, {
              className: `w-full`,
              role: `alert`,
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.saveError`,
                defaultMessage: `Couldn’t confirm that enrollment was saved. Refresh settings before trying again.`,
                description: `Error after an uncertain voice enrollment submission. The write may have completed; refresh the account's enrollment status before making another recording.`,
              }),
            }),
            (0, J.jsx)(e, {
              type: `button`,
              color: `secondary`,
              onClick: () => void g(),
              children: (0, J.jsx)(v, {
                id: `settings.biometric.voiceEnrollment.refresh`,
                defaultMessage: `Refresh settings`,
                description: `Button that reloads voice enrollment status after an uncertain submission without resending the recording. A successful reload allows another setup attempt if no enrollment exists.`,
              }),
            }),
          ],
        }),
      o === `refreshing` &&
        (0, J.jsx)(`p`, {
          className: `w-full`,
          role: `status`,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.refreshing`,
            defaultMessage: `Refreshing settings…`,
            description: `Status while voice enrollment checks the signed-in account's current enrollment after an uncertain save. No recording is submitted.`,
          }),
        }),
      o !== `idle` &&
        o !== `saving` &&
        o !== `saved` &&
        o !== `saveError` &&
        o !== `refreshing` &&
        (0, J.jsx)(e, {
          type: `button`,
          color: `ghost`,
          onClick: f,
          children: (0, J.jsx)(v, {
            id: `settings.biometric.voiceEnrollment.close`,
            defaultMessage: `Close`,
            description: `Button that closes optional voice enrollment, stops the microphone, and clears the unsent recording. No enrollment is submitted.`,
          }),
        }),
    ],
  });
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = n()), c(), G(), (J = i()));
  }))();
}
function X(e) {
  let t = (0, le.c)(43),
    { accountId: n, isSubview: r, onOpen: i, onBack: o } = e,
    { userId: s } = C(),
    c,
    l;
  t[0] !== n || t[1] !== s
    ? ((c = [`biometric-settings`, s, n]),
      (l =
        s == null
          ? d
          : (e) => {
              let { signal: t } = e,
                r = `${window.location.origin}/api/identity/service/biometric-factors`;
              return S.safeRequest(`get`, r, {
                signal: t,
                retry: !1,
                expectedErrorStatuses: [401, 403, 404, 502, 503],
                expectedIdentity: { accountId: n, userId: s },
              });
            }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l))
    : ((c = t[2]), (l = t[3]));
  let u;
  t[4] !== c || t[5] !== l
    ? ((u = { queryKey: c, queryFn: l, staleTime: 0, gcTime: 0, retry: !1 }),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u))
    : (u = t[6]);
  let { data: f, isError: p, refetch: m } = a(u),
    h;
  t[7] === s
    ? (h = t[8])
    : ((h = () => (s ? N(`biometric-removal:${s}:FACE`) : null)), (t[7] = s), (t[8] = h));
  let g = h,
    _;
  t[9] === s
    ? (_ = t[10])
    : ((_ = () => (s ? N(`biometric-removal:${s}:VOICE`) : null)), (t[9] = s), (t[10] = _));
  let v = _,
    y = (0, ue.useSyncExternalStore)(te, g, Q),
    b = (0, ue.useSyncExternalStore)(te, v, Z),
    x = y != null || b != null,
    T = p || s == null,
    E;
  t[11] === m ? (E = t[12]) : ((E = () => void m()), (t[11] = m), (t[12] = E));
  let D;
  t[13] !== n || t[14] !== f || t[15] !== r || t[16] !== m || t[17] !== s
    ? ((D =
        r &&
        f &&
        s &&
        f.capabilities.enrollment === `enabled` &&
        f.capabilities.consent_version === `face-voice-prototype-v1`
          ? (0, $.jsx)(
              L,
              {
                Button: se,
                replacing: f.face.factor_id != null,
                onRefresh: async () => {
                  await m({ throwOnError: !0 });
                },
                onEnroll: async (e, t) => {
                  let r = await w(`biometric_enrollment`);
                  t.throwIfAborted();
                  let i = `${window.location.origin}/api/identity/service/biometric-factors/{modality}`,
                    a = await S.safeRequest(`post`, i, {
                      parameters: { path: { modality: `FACE` } },
                      requestBody: {
                        capture: e,
                        consent_version: ae,
                        expected_generation: f.face.generation,
                        expected_factor_id: f.face.factor_id ?? null,
                      },
                      additionalHeaders: r,
                      signal: t,
                      retry: `never`,
                      expectedIdentity: { accountId: n, userId: s },
                      expectedErrorStatuses: [400, 401, 403, 409, 422, 429, 502, 503],
                    });
                  if (a.factor_id == null || a.generation <= f.face.generation)
                    throw Error(`Enrollment was not confirmed`);
                },
              },
              `${s}:${n}:face:${f.face.generation}`,
            )
          : null),
      (t[13] = n),
      (t[14] = f),
      (t[15] = r),
      (t[16] = m),
      (t[17] = s),
      (t[18] = D))
    : (D = t[18]);
  let O;
  t[19] !== n || t[20] !== f || t[21] !== r || t[22] !== m || t[23] !== s
    ? ((O =
        r &&
        f &&
        s &&
        f.capabilities.enrollment === `enabled` &&
        f.capabilities.consent_version === `face-voice-prototype-v1`
          ? (0, $.jsx)(
              K,
              {
                Button: se,
                replacing: f.voice.factor_id != null,
                onRefresh: async () => {
                  await m({ throwOnError: !0 });
                },
                onEnroll: async (e, t) => {
                  let r = await w(`biometric_enrollment`);
                  t.throwIfAborted();
                  let i = `${window.location.origin}/api/identity/service/biometric-factors/{modality}`,
                    a = await S.safeRequest(`post`, i, {
                      parameters: { path: { modality: `VOICE` } },
                      requestBody: {
                        capture: e,
                        consent_version: ae,
                        expected_generation: f.voice.generation,
                        expected_factor_id: f.voice.factor_id ?? null,
                      },
                      additionalHeaders: r,
                      signal: t,
                      retry: `never`,
                      expectedIdentity: { accountId: n, userId: s },
                      expectedErrorStatuses: [400, 401, 403, 409, 422, 429, 502, 503],
                    });
                  if (a.factor_id == null || a.generation <= f.voice.generation)
                    throw Error(`Enrollment was not confirmed`);
                },
              },
              `${s}:${n}:voice:${f.voice.generation}`,
            )
          : null),
      (t[19] = n),
      (t[20] = f),
      (t[21] = r),
      (t[22] = m),
      (t[23] = s),
      (t[24] = O))
    : (O = t[24]);
  let k;
  t[25] !== n || t[26] !== f?.face || t[27] !== f?.voice || t[28] !== r || t[29] !== m || t[30] !== s
    ? ((k =
        r && s && n
          ? (e) =>
              (0, $.jsx)(
                M,
                {
                  Button: ce,
                  modality: e,
                  factorId: (e === `FACE` ? f?.face.factor_id : f?.voice.factor_id) ?? null,
                  storageKey: `biometric-removal:${s}:${e}`,
                  onRefresh: async () => {
                    await m({ throwOnError: !0 });
                  },
                  onRemove: async (t, r) => {
                    let i = `${window.location.origin}/api/identity/service/biometric-factors/{modality}/{factor_id}`;
                    if (
                      !(
                        await S.safeRequest(`delete`, i, {
                          parameters: { path: { modality: e, factor_id: t } },
                          signal: r,
                          retry: `never`,
                          expectedIdentity: { accountId: n, userId: s },
                          expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 502, 503],
                        })
                      ).deleted
                    )
                      throw Error(`Removal was not confirmed`);
                  },
                },
                `${s}:${n}:${e}`,
              )
          : void 0),
      (t[25] = n),
      (t[26] = f?.face),
      (t[27] = f?.voice),
      (t[28] = r),
      (t[29] = m),
      (t[30] = s),
      (t[31] = k))
    : (k = t[31]);
  let A;
  return (
    t[32] !== f ||
    t[33] !== r ||
    t[34] !== o ||
    t[35] !== i ||
    t[36] !== O ||
    t[37] !== k ||
    t[38] !== x ||
    t[39] !== T ||
    t[40] !== E ||
    t[41] !== D
      ? ((A = (0, $.jsx)(oe, {
          hasPendingRemoval: x,
          data: f,
          isError: T,
          isSubview: r,
          onOpen: i,
          onBack: o,
          onRetry: E,
          faceEnrollment: D,
          voiceEnrollment: O,
          renderRemoval: k,
        })),
        (t[32] = f),
        (t[33] = r),
        (t[34] = o),
        (t[35] = i),
        (t[36] = O),
        (t[37] = k),
        (t[38] = x),
        (t[39] = T),
        (t[40] = E),
        (t[41] = D),
        (t[42] = A))
      : (A = t[42]),
    A
  );
}
function Z() {
  return null;
}
function Q() {
  return null;
}
function oe(e) {
  let n = (0, le.c)(30),
    {
      data: i,
      isError: a,
      isSubview: o,
      onOpen: s,
      onBack: c,
      onRetry: l,
      faceEnrollment: u,
      voiceEnrollment: d,
      renderRemoval: f,
      hasPendingRemoval: m,
    } = e,
    h = m !== void 0 && m,
    _;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(v, {
        id: `settings.biometric.title`,
        defaultMessage: `Face and voice verification`,
        description: `Title of the optional face and voice verification page and its entry in the signed-in user's Security settings. No placeholders.`,
      })),
      (n[0] = _))
    : (_ = n[0]);
  let y = _;
  if (!o) {
    if (
      !h &&
      (!i ||
        (i.capabilities.enrollment !== `enabled` && i.face.factor_id == null && i.voice.factor_id == null))
    )
      return null;
    if (a && !h) {
      let e;
      return (
        n[1] === l ? (e = n[2]) : ((e = (0, $.jsx)(O, { isError: !0, onRetry: l })), (n[1] = l), (n[2] = e)),
        e
      );
    }
    let e;
    n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(r, {})), (n[3] = e)) : (e = n[3]);
    let o;
    return (
      n[4] === s
        ? (o = n[5])
        : ((o = (0, $.jsx)(t, {
            children: (0, $.jsx)(p, { edgeRounding: `surface`, label: y, onClick: s, trailing: e }),
          })),
          (n[4] = s),
          (n[5] = o)),
      o
    );
  }
  let x;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(v, {
        id: `settings.biometric.introduction`,
        defaultMessage: `Set up face or voice verification for your account.`,
        description: `Subtitle of face and voice verification settings, where the signed-in user can set up either method for their account.`,
      })),
      (n[6] = x))
    : (x = n[6]);
  let S;
  n[7] !== i || n[8] !== a || n[9] !== l
    ? ((S = (a || !i) && (0, $.jsx)(O, { isError: a, onRetry: l })),
      (n[7] = i),
      (n[8] = a),
      (n[9] = l),
      (n[10] = S))
    : (S = n[10]);
  let C = !i && !h,
    w;
  n[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = [`face`, `voice`]), (n[11] = w)) : (w = n[11]);
  let T;
  n[12] !== i || n[13] !== u || n[14] !== a || n[15] !== f || n[16] !== d
    ? ((T = w.map((e) =>
        (0, $.jsx)(
          `section`,
          {
            className: `border-default not-first:border-t`,
            children: (0, $.jsxs)(`div`, {
              className: `flex flex-wrap items-center gap-x-4 gap-y-4 p-5`,
              children: [
                (0, $.jsxs)(`div`, {
                  className: `flex min-w-28 flex-1 items-center gap-3`,
                  children: [
                    (0, $.jsx)(`span`, {
                      "aria-hidden": `true`,
                      className: `flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-secondary text-default`,
                      children: e === `face` ? (0, $.jsx)(g, {}) : (0, $.jsx)(b, {}),
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex min-w-0 flex-col gap-0.5`,
                      children: [
                        (0, $.jsx)(`h3`, {
                          className: `text-sm font-medium`,
                          children:
                            e === `face`
                              ? (0, $.jsx)(v, {
                                  id: `settings.biometric.face`,
                                  defaultMessage: `Face`,
                                  description: `Label for the face reference in the signed-in user's face and voice verification settings.`,
                                })
                              : (0, $.jsx)(v, {
                                  id: `settings.biometric.voice`,
                                  defaultMessage: `Voice`,
                                  description: `Label for the voice reference in the signed-in user's face and voice verification settings.`,
                                }),
                        }),
                        (0, $.jsxs)(`p`, {
                          className: `text-xs leading-5 text-secondary`,
                          children: [
                            (a || !i) &&
                              (0, $.jsx)(v, {
                                id: `settings.biometric.statusUnavailable`,
                                defaultMessage: `Status unavailable`,
                                description: `Enrollment status could not be read. Previously pending removal remains available; this does not imply enrollment is absent.`,
                              }),
                            i &&
                              !a &&
                              (i[e].factor_id == null
                                ? (0, $.jsx)(v, {
                                    id: `settings.biometric.notSetUp`,
                                    defaultMessage: `Not set up`,
                                    description: `Status of a face or voice method with no recorded enrollment.`,
                                  })
                                : (0, $.jsx)(v, {
                                    id: `settings.biometric.setUp`,
                                    defaultMessage: `Saved`,
                                    description: `Short status beside Face or Voice in Security settings when an enrollment record is on file. It describes enrollment history, not whether the reference is unexpired or currently usable for verification. No placeholders.`,
                                  })),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, $.jsxs)(`div`, {
                  className: `ms-auto flex flex-wrap items-center justify-end gap-2 has-[[data-expanded]]:contents [&>[data-expanded]]:border-t [&>[data-expanded]]:border-default [&>[data-expanded]]:pt-5`,
                  children: [!a && i && (e === `face` ? u : d), f?.(e === `face` ? `FACE` : `VOICE`)],
                }),
              ],
            }),
          },
          e,
        ),
      )),
      (n[12] = i),
      (n[13] = u),
      (n[14] = a),
      (n[15] = f),
      (n[16] = d),
      (n[17] = T))
    : (T = n[17]);
  let E;
  n[18] !== C || n[19] !== T
    ? ((E = (0, $.jsx)(`div`, {
        className: `overflow-hidden rounded-2xl border border-default`,
        hidden: C,
        children: T,
      })),
      (n[18] = C),
      (n[19] = T),
      (n[20] = E))
    : (E = n[20]);
  let D;
  n[21] === i
    ? (D = n[22])
    : ((D =
        i &&
        (i.capabilities.enrollment !== `enabled` ||
          i.capabilities.consent_version !== `face-voice-prototype-v1`) &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: (0, $.jsx)(v, {
            id: `settings.biometric.enrollmentUnavailable`,
            defaultMessage: `New enrollment is currently unavailable`,
            description: `Notice in face and voice verification settings when setup is disabled or temporarily unavailable. Existing reference status remains visible.`,
          }),
        })),
      (n[21] = i),
      (n[22] = D));
  let A;
  n[23] !== S || n[24] !== E || n[25] !== D
    ? ((A = (0, $.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [S, E, D] })),
      (n[23] = S),
      (n[24] = E),
      (n[25] = D),
      (n[26] = A))
    : (A = n[26]);
  let j;
  return (
    n[27] !== c || n[28] !== A
      ? ((j = (0, $.jsx)(k, { title: y, subtitle: x, onBack: c, children: A })),
        (n[27] = c),
        (n[28] = A),
        (n[29] = j))
      : (j = n[29]),
    j
  );
}
function se(e) {
  let t = (0, le.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, $.jsx)(l, { ...e, size: `secondaryAction` })), (t[0] = e), (t[1] = n)),
    n
  );
}
function ce(e) {
  let t = (0, le.c)(3),
    n = e.color === `primary` ? `danger` : `ghost`,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, $.jsx)(l, { ...e, color: n, size: `secondaryAction` })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
var le, ue, $;
function de() {
  return (de = e(() => {
    ((le = o()), B(), Y(), m(), h(), (ue = n()), c(), T(), x(), E(), u(), s(), D(), y(), f(), ($ = i()));
  }))();
}
de();
export { X as BiometricSettings };
//# sourceMappingURL=settings-d7661829b85a.js.map
