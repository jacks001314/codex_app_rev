import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $t as n,
  A3t as r,
  AMt as i,
  Amn as a,
  At as o,
  BRt as s,
  Cpn as c,
  Den as l,
  F3t as u,
  Gyt as d,
  H4t as f,
  I7 as p,
  Jit as m,
  Jrt as h,
  KAt as g,
  KYt as _,
  Kit as v,
  L7 as y,
  MW as b,
  Mt as x,
  NW as S,
  Nt as ee,
  O3t as C,
  Opn as te,
  Ot as w,
  Qt as T,
  Rpn as E,
  Spn as D,
  T9 as O,
  Ten as k,
  Uyt as A,
  XUt as j,
  XYt as M,
  Xdt as N,
  Xqt as P,
  Xrt as F,
  YUt as I,
  Yrt as ne,
  ZYt as L,
  Zrt as R,
  a3t as z,
  aYt as B,
  bt as V,
  cFt as H,
  dbt as U,
  dit as re,
  e4t as W,
  eWt as ie,
  eit as G,
  en as K,
  fFt as ae,
  fit as q,
  gMt as oe,
  hMt as se,
  hmn as ce,
  iHt as le,
  iit as ue,
  jXt as de,
  jt as J,
  kMt as fe,
  kRt as pe,
  kXt as me,
  kmn as he,
  kt as ge,
  lMt as _e,
  llt as ve,
  nFt as ye,
  nWt as be,
  nit as xe,
  nn as Se,
  o3t as Ce,
  q4t as we,
  qqt as Te,
  rHt as Y,
  rWt as Ee,
  rit as De,
  rq as Oe,
  sMt as ke,
  sYt as Ae,
  tit as je,
  tn as Me,
  ubt as Ne,
  uq as Pe,
  vit as Fe,
  xt as Ie,
  y9 as Le,
  yit as Re,
  zpn as ze,
} from "./app-initial-f094ef01c64d.js";
import {
  AS as Be,
  Cx as Ve,
  DS as He,
  Fx as Ue,
  Ix as We,
  Jx as Ge,
  Kx as Ke,
  Lx as qe,
  OS as Je,
  Px as Ye,
  Sx as Xe,
  Vx as Ze,
  Xx as Qe,
  bx as $e,
  cx as et,
  dx as tt,
  fx as nt,
  jS as rt,
  kS as it,
  lx as at,
  qx as ot,
} from "./app-primary-4c40d73a1074.js";
import { r as st, t as ct } from "./diff-comment-card-c409d5c26721.js";
import { n as lt, r as ut } from "./pull-request-readonly-comment-6e9ac0779fb8.js";
import { n as dt, t as ft } from "./codex-light-16-3986f0d27657.js";
import { n as pt, t as mt } from "./row-bc9dec132d18.js";
function ht(e) {
  for (let t of e) {
    if (!(t instanceof HTMLElement)) continue;
    let e = t.getAttribute(`data-line`) ?? t.getAttribute(`data-column-number`);
    if (e == null) continue;
    let n = Number.parseInt(e, 10);
    if (!Number.isNaN(n)) return n;
  }
  return null;
}
var gt = e(() => {});
function _t(e) {
  return e.flatMap((e) => {
    if (e.side !== `additions`) return [];
    switch (e.metadata.kind) {
      case `comment`:
        return [{ lineNumber: e.lineNumber, metadata: e.metadata }];
      case `draft-comment`:
        return [{ lineNumber: e.lineNumber, metadata: e.metadata }];
    }
  });
}
function vt(e) {
  switch (e.metadata.kind) {
    case `comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
    case `draft-comment`:
      return { side: `additions`, lineNumber: e.lineNumber, metadata: e.metadata };
  }
}
var yt,
  bt = e(() => {
    yt = (e, t) => `${e}:${t}`;
  });
function xt(e) {
  let t = (0, St.c)(9),
    [n, r] = L(`diff_comment_drafts`),
    i;
  t[0] !== n || t[1] !== e
    ? ((i = e ? (n?.[e] ?? {}) : {}), (t[0] = n), (t[1] = e), (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== e || t[4] !== r
    ? ((o = (t) => {
        e &&
          r((n) => {
            let r = n?.[e] ?? {},
              i = t(r);
            if (i === r) return n;
            let a = { ...n };
            return Object.keys(i).length === 0 ? (delete a[e], a) : ((a[e] = i), a);
          });
      }),
      (t[3] = e),
      (t[4] = r),
      (t[5] = o))
    : (o = t[5]);
  let s = o,
    c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = { drafts: a, updateDrafts: s }), (t[6] = a), (t[7] = s), (t[8] = c))
      : (c = t[8]),
    c
  );
}
var St,
  Ct = e(() => {
    ((St = he()), M());
  });
function wt(e) {
  let t = (0, Et.c)(25),
    {
      commentEditor: n,
      commentText: r,
      initialComment: i,
      isSubmitting: a,
      onCancel: o,
      onDelete: s,
      onSubmit: l,
      showButtons: u,
      stopDictationRef: d,
    } = e,
    f;
  t[0] !== a || t[1] !== s || t[2] !== u
    ? ((f =
        s == null
          ? null
          : (0, X.jsx)(fe, {
              color: u && !a ? `danger` : `ghost`,
              size: `compact`,
              onClick: s,
              children: (0, X.jsx)(c, {
                id: `code.diffComment.delete`,
                defaultMessage: `Delete`,
                description: `Delete a comment`,
              }),
            })),
      (t[0] = a),
      (t[1] = s),
      (t[2] = u),
      (t[3] = f))
    : (f = t[3]);
  let p = f,
    m = u && !a ? p : null,
    h;
  t[4] !== r || t[5] !== p || t[6] !== i || t[7] !== a || t[8] !== o || t[9] !== l || t[10] !== u
    ? ((h = (e) => {
        let { dictationButton: t, isDictating: n, transcriptionAction: s } = e === void 0 ? {} : e,
          d = n !== void 0 && n,
          f = s === void 0 ? null : s;
        return u || a
          ? (0, X.jsxs)(`div`, {
              className: `flex items-center justify-end gap-2`,
              children: [
                u && !a
                  ? (0, X.jsx)(fe, {
                      color: `ghost`,
                      size: `compact`,
                      onClick: o,
                      children: (0, X.jsx)(c, {
                        id: `code.diffComment.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel a comment`,
                      }),
                    })
                  : null,
                t,
                (0, X.jsx)(fe, {
                  color: `primary`,
                  size: `compact`,
                  disabled: f != null || (!r && !d),
                  loading: a || f === `send`,
                  onClick: l,
                  children: i
                    ? (0, X.jsx)(c, {
                        id: `code.diffComment.save`,
                        defaultMessage: `Save`,
                        description: `Save a comment`,
                      })
                    : (0, X.jsx)(c, {
                        id: `code.diffComment.comment`,
                        defaultMessage: `Comment`,
                        description: `Comment on a code diff`,
                      }),
                }),
              ],
            })
          : p;
      }),
      (t[4] = r),
      (t[5] = p),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = l),
      (t[10] = u),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  t[12] === m ? (_ = t[13]) : ((_ = m ?? (0, X.jsx)(`div`, {})), (t[12] = m), (t[13] = _));
  let v;
  t[14] === g ? (v = t[15]) : ((v = g()), (t[14] = g), (t[15] = v));
  let y;
  t[16] !== _ || t[17] !== v
    ? ((y = (0, X.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [_, v],
      })),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b = y;
  if (!u || a) return b;
  let x;
  return (
    t[19] !== n || t[20] !== m || t[21] !== l || t[22] !== g || t[23] !== d
      ? ((x = (0, X.jsxs)(X.Fragment, {
          children: [
            null,
            (0, X.jsx)(X.Fragment, {
              children: (0, X.jsx)(Tt, {
                commentEditor: n,
                leadingAction: m,
                onSubmit: l,
                stopDictationRef: d,
                renderTrailingActions: g,
              }),
            }),
          ],
        })),
        (t[19] = n),
        (t[20] = m),
        (t[21] = l),
        (t[22] = g),
        (t[23] = d),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
function Tt(e) {
  let t = (0, Et.c)(79),
    {
      commentEditor: n,
      leadingAction: i,
      onSubmit: a,
      stopDictationRef: o,
      renderTrailingActions: s,
    } = e,
    c = r(z),
    l = te(),
    u = Ae(J() === !0 && `2594384727`),
    d = Ae(T),
    f;
  t[0] !== n || t[1] !== a || t[2] !== o
    ? ((f = async (e, t) => {
        let r = await n.dictation.finish(e);
        r !== `cancelled` &&
          (r === `not-active` && n.insertDictationText(e), (o.current = null), t === `send` && a());
      }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o),
      (t[3] = f))
    : (f = t[3]);
  let p = f,
    m;
  t[4] === n ? (m = t[5]) : ((m = () => n.getText()), (t[4] = n), (t[5] = m));
  let h, g, _;
  t[6] === n.dictation
    ? ((h = t[7]), (g = t[8]), (_ = t[9]))
    : ((h = () => n.dictation.start()),
      (g = (e) => n.dictation.update(e)),
      (_ = () => n.dictation.cancel()),
      (t[6] = n.dictation),
      (t[7] = h),
      (t[8] = g),
      (t[9] = _));
  let v, y;
  t[10] === p
    ? ((v = t[11]), (y = t[12]))
    : ((v = (e) => p(e, `insert`)),
      (y = (e) => p(e, `send`)),
      (t[10] = p),
      (t[11] = v),
      (t[12] = y));
  let b;
  t[13] !== l || t[14] !== c || t[15] !== o
    ? ((b = (e) => {
        ((o.current = null), c.get(de).danger(w(l, `start`, e).message));
      }),
      (t[13] = l),
      (t[14] = c),
      (t[15] = o),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== n.dictation || t[18] !== l || t[19] !== c || t[20] !== o
    ? ((x = (e) => {
        ((o.current = null),
          n.dictation.cancel(),
          c.get(de).danger(w(l, `transcription`, e).message));
      }),
      (t[17] = n.dictation),
      (t[18] = l),
      (t[19] = c),
      (t[20] = o),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] !== l || t[23] !== c || t[24] !== o
    ? ((S = () => {
        ((o.current = null),
          c.get(de).danger(
            l.formatMessage({
              id: `composer.dictation.unsupported`,
              defaultMessage: `Dictation is not available on this device`,
              description: `Toast text shown when dictation is not supported on the current device`,
            }),
          ));
      }),
      (t[22] = l),
      (t[23] = c),
      (t[24] = o),
      (t[25] = S))
    : (S = t[25]);
  let {
      canRetryDictation: C,
      isDictationStarting: E,
      isDictating: D,
      isMicrophoneBusy: O,
      isTranscribing: k,
      retryDictation: A,
      startDictation: j,
      stopDictation: M,
      transcriptionAction: N,
      waveformCanvasRef: P,
    } = ee({
      enabled: u,
      waveformVariant: d ? `dictation` : `scrolling`,
      getSurroundingText: m,
      onTranscriptStart: h,
      onTranscriptUpdate: g,
      onTranscriptCancel: _,
      onRecordingStarted: () => {
        ((o.current = F), n.focus());
      },
      onTranscriptInsert: v,
      onTranscriptSend: y,
      onStartError: b,
      onTranscribeError: x,
      onUnsupported: S,
    }),
    F = M,
    I;
  t[26] !== D || t[27] !== k || t[28] !== F
    ? ((I = () => (D || k ? F : null)), (t[26] = D), (t[27] = k), (t[28] = F), (t[29] = I))
    : (I = t[29]);
  let ne;
  (t[30] !== D || t[31] !== k || t[32] !== F
    ? ((ne = [D, k, F]), (t[30] = D), (t[31] = k), (t[32] = F), (t[33] = ne))
    : (ne = t[33]),
    (0, Dt.useImperativeHandle)(o, I, ne));
  let L;
  t[34] === F
    ? (L = t[35])
    : ((L = () => () => {
        F(`abort`);
      }),
      (t[34] = F),
      (t[35] = L));
  let R;
  (t[36] === F ? (R = t[37]) : ((R = [F]), (t[36] = F), (t[37] = R)),
    (0, Dt.useLayoutEffect)(L, R));
  let B;
  t[38] !== n || t[39] !== F || t[40] !== o
    ? ((B = (e) => {
        (e === `abort` && (o.current = null), n.focus(), F(e));
      }),
      (t[38] = n),
      (t[39] = F),
      (t[40] = o),
      (t[41] = B))
    : (B = t[41]);
  let V = B;
  if (!d && (D || k)) {
    let e;
    return (
      t[42] !== V || t[43] !== N || t[44] !== P
        ? ((e = (0, X.jsx)(`div`, {
            className: `w-full`,
            children: (0, X.jsx)(Me, {
              noBottomMargin: !0,
              noHorizontalPadding: !0,
              primaryIcon: ve,
              stopDictation: V,
              transcriptionAction: N,
              waveformCanvasRef: P,
            }),
          })),
          (t[42] = V),
          (t[43] = N),
          (t[44] = P),
          (t[45] = e))
        : (e = t[45]),
      e
    );
  }
  let H;
  t[46] === i ? (H = t[47]) : ((H = i ?? (0, X.jsx)(`div`, {})), (t[46] = i), (t[47] = H));
  let U = d && D,
    re;
  t[48] !== n || t[49] !== O || t[50] !== A || t[51] !== F || t[52] !== o
    ? ((re = () => {
        if (O) return Promise.resolve();
        let e = (e) => {
          F(e);
        };
        return (
          (o.current = e),
          n.focus(),
          A().then(() => {
            o.current === e && (o.current = null);
          })
        );
      }),
      (t[48] = n),
      (t[49] = O),
      (t[50] = A),
      (t[51] = F),
      (t[52] = o),
      (t[53] = re))
    : (re = t[53]);
  let W = d ? P : void 0,
    ie;
  t[54] !== O || t[55] !== a || t[56] !== j || t[57] !== F || t[58] !== o
    ? ((ie = (e) => {
        if (O) return Promise.resolve();
        let t = (e) => {
          (F(`abort`), e === `send` && o.current === t && ((o.current = null), a()));
        };
        return (
          (o.current = t),
          j(e).then(() => {
            o.current === t && (o.current = null);
          })
        );
      }),
      (t[54] = O),
      (t[55] = a),
      (t[56] = j),
      (t[57] = F),
      (t[58] = o),
      (t[59] = ie))
    : (ie = t[59]);
  let G;
  t[60] !== C ||
  t[61] !== V ||
  t[62] !== u ||
  t[63] !== E ||
  t[64] !== O ||
  t[65] !== k ||
  t[66] !== U ||
  t[67] !== re ||
  t[68] !== W ||
  t[69] !== ie
    ? ((G = (0, X.jsx)(K, {
        canRetryDictation: C,
        disabled: O,
        isStarting: E,
        isDictating: U,
        isTranscribing: k,
        isVisible: u,
        retryDictation: re,
        shortcutLabel: null,
        size: `compact`,
        waveformCanvasRef: W,
        stopDictation: V,
        startDictation: ie,
      })),
      (t[60] = C),
      (t[61] = V),
      (t[62] = u),
      (t[63] = E),
      (t[64] = O),
      (t[65] = k),
      (t[66] = U),
      (t[67] = re),
      (t[68] = W),
      (t[69] = ie),
      (t[70] = G))
    : (G = t[70]);
  let ae;
  t[71] !== D || t[72] !== s || t[73] !== G || t[74] !== N
    ? ((ae = s({ isDictating: D, transcriptionAction: N, dictationButton: G })),
      (t[71] = D),
      (t[72] = s),
      (t[73] = G),
      (t[74] = N),
      (t[75] = ae))
    : (ae = t[75]);
  let q;
  return (
    t[76] !== H || t[77] !== ae
      ? ((q = (0, X.jsxs)(`div`, {
          className: `flex w-full items-center justify-between gap-2`,
          children: [H, ae],
        })),
        (t[76] = H),
        (t[77] = ae),
        (t[78] = q))
      : (q = t[78]),
    q
  );
}
var Et,
  Dt,
  X,
  Ot = e(() => {
    ((Et = he()),
      C(),
      (Dt = t(a(), 1)),
      D(),
      Se(),
      x(),
      o(),
      N(),
      me(),
      Ce(),
      n(),
      B(),
      ge(),
      i(),
      (X = ce()));
  });
function kt(e) {
  let t = (0, Mt.c)(13),
    { alt: n, fallbackName: r } = e,
    { accountId: i, authMethod: a, email: o, userId: s } = U(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { enabled: !0 }), (t[0] = c))
    : (c = t[0]);
  let { data: l } = d(c),
    { data: u } = Pe(),
    f = i ?? l?.accountId ?? null,
    p = a === `chatgpt`,
    m = s ?? l?.userId ?? null,
    h;
  t[1] !== f || t[2] !== p || t[3] !== m
    ? ((h = { accountId: f, enabled: p, userId: m }),
      (t[1] = f),
      (t[2] = p),
      (t[3] = m),
      (t[4] = h))
    : (h = t[4]);
  let { data: g } = Ie(h),
    _ = u?.structure?.toLowerCase() === `personal`,
    v = g?.imageUrl,
    y = _ ? (u?.profile_picture_url ?? null) : null,
    b;
  t[5] !== v || t[6] !== y
    ? ((b = (0, Nt.default)([v, y].filter(At))), (t[5] = v), (t[6] = y), (t[7] = b))
    : (b = t[7]);
  let x = b,
    S = g?.displayName ?? g?.username ?? (_ ? u?.name : null) ?? o ?? l?.email ?? r,
    ee = x[0] ?? `fallback`,
    C;
  return (
    t[8] !== n || t[9] !== x || t[10] !== S || t[11] !== ee
      ? ((C = (0, Ft.jsx)(jt, { alt: n, imageUrls: x, name: S }, ee)),
        (t[8] = n),
        (t[9] = x),
        (t[10] = S),
        (t[11] = ee),
        (t[12] = C))
      : (C = t[12]),
    C
  );
}
function At(e) {
  return e != null;
}
function jt(e) {
  let t = (0, Mt.c)(13),
    { alt: n, imageUrls: r, name: i } = e,
    [a, o] = (0, Pt.useState)(!1),
    s = r[0] ?? null,
    { isError: c, src: l } = rt(s);
  if ((a || c) && r.length > 1) {
    let e;
    t[0] === r ? (e = t[1]) : ((e = r.slice(1)), (t[0] = r), (t[1] = e));
    let a = e,
      o;
    return (
      t[2] !== n || t[3] !== a || t[4] !== i
        ? ((o = (0, Ft.jsx)(jt, { alt: n, imageUrls: a, name: i }, a[0])),
          (t[2] = n),
          (t[3] = a),
          (t[4] = i),
          (t[5] = o))
        : (o = t[5]),
      o
    );
  }
  let u = a || c ? null : l,
    d;
  t[6] === s ? (d = t[7]) : ((d = s == null ? void 0 : () => o(!0)), (t[6] = s), (t[7] = d));
  let f;
  return (
    t[8] !== n || t[9] !== i || t[10] !== u || t[11] !== d
      ? ((f = (0, Ft.jsx)(b, { alt: n, name: i, src: u, onImageError: d })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f))
      : (f = t[12]),
    f
  );
}
var Mt,
  Nt,
  Pt,
  Ft,
  It = e(() => {
    ((Mt = he()), (Nt = t(g(), 1)), (Pt = t(a(), 1)), Ne(), A(), it(), Oe(), S(), V(), (Ft = ce()));
  });
function Lt(e) {
  let t = (0, Rt.c)(20),
    { open: n, onConfirm: r, onOpenChange: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = (e) => {
        (e.preventDefault(), i(!1), r());
      }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(De, {
        className: `contents`,
        children: (0, Z.jsx)(c, {
          id: `code.diffComment.dismissConfirmation.title`,
          defaultMessage: `Dismiss this review comment?`,
          description: `Title for the confirmation dialog shown before hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[3] = s))
    : (s = t[3]);
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(R, {
        children: (0, Z.jsx)(F, {
          title: s,
          subtitle: (0, Z.jsx)(xe, {
            className: `contents`,
            children: (0, Z.jsx)(c, {
              id: `code.diffComment.dismissConfirmation.description`,
              defaultMessage: `The comment will be hidden from the diff but remain in the task transcript`,
              description: `Explanation that dismissing a model-authored review comment hides it from the diff without deleting it from the task transcript`,
            }),
          }),
        }),
      })),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === i ? (u = t[6]) : ((u = () => i(!1)), (t[5] = i), (t[6] = u));
  let d;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(c, {
        id: `code.diffComment.dismissConfirmation.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button for keeping a model-authored review comment visible in a code diff`,
      })),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] === u
    ? (f = t[9])
    : ((f = (0, Z.jsx)(fe, { color: `secondary`, type: `button`, onClick: u, children: d })),
      (t[8] = u),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(fe, {
        color: `danger`,
        type: `submit`,
        children: (0, Z.jsx)(c, {
          id: `code.diffComment.dismissConfirmation.confirm`,
          defaultMessage: `Dismiss`,
          description: `Confirm button for hiding a model-authored review comment from a code diff`,
        }),
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === f
    ? (m = t[12])
    : ((m = (0, Z.jsx)(R, { children: (0, Z.jsxs)(ne, { children: [f, p] }) })),
      (t[11] = f),
      (t[12] = m));
  let g;
  t[13] !== o || t[14] !== m
    ? ((g = (0, Z.jsxs)(h, { as: `form`, onSubmit: o, children: [l, m] })),
      (t[13] = o),
      (t[14] = m),
      (t[15] = g))
    : (g = t[15]);
  let _;
  return (
    t[16] !== i || t[17] !== n || t[18] !== g
      ? ((_ = (0, Z.jsx)(je, {
          open: n,
          onOpenChange: i,
          showDialogClose: !1,
          size: `compact`,
          children: g,
        })),
        (t[16] = i),
        (t[17] = n),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Rt,
  Z,
  zt = e(() => {
    ((Rt = he()), D(), i(), ue(), G(), (Z = ce()));
  });
function Bt(e) {
  let t = (0, qt.c)(141),
    {
      filePath: n,
      workspaceRoot: r,
      source: i,
      side: a,
      lineNumber: o,
      startLine: s,
      startSide: l,
      localDiffHunk: u,
      authorLabel: d,
      authorAvatarUrl: f,
      onSubmit: p,
      onDelete: m,
      onDismiss: h,
      onClose: g,
      initialComment: _,
      initialDraftText: y,
      onDraftTextChange: x,
      onUnsavedChange: S,
      isSubmitting: ee,
    } = e,
    C = ee !== void 0 && ee,
    w = i === `model`,
    T = i === `user` && d == null,
    D;
  t[0] === _ ? (D = t[1]) : ((D = _ ? ie(_) : ``), (t[0] = _), (t[1] = D));
  let O = D,
    k = y ?? O,
    A = _?.position.start_line ?? s ?? o,
    j = _?.position.line ?? o,
    [M, N] = (0, Q.useState)(k),
    [P, F] = (0, Q.useState)(!_ && !w),
    [I, ne] = (0, Q.useState)(!1),
    [L, R] = (0, Q.useState)(!1),
    z = (0, Q.useRef)(null),
    B = (0, Q.useRef)(null),
    V = (0, Q.useRef)(null),
    H = (0, Q.useRef)(_ != null),
    U = te(),
    W =
      i === `model`
        ? U.formatMessage({
            id: `code.diffComment.modelCommentAuthor`,
            defaultMessage: `Codex`,
            description: `Author label shown for model-authored local diff comments`,
          })
        : (d ??
          U.formatMessage({
            id: `code.diffComment.currentUserAuthor`,
            defaultMessage: `You`,
            description: `Author label for the current user's local diff comments`,
          })),
    G = Be(i === `user` ? (f ?? null) : null),
    K = T
      ? U.formatMessage({
          id: `code.diffComment.currentUserAvatarAlt`,
          defaultMessage: `Your avatar`,
          description: `Alt text for the current user's avatar on a local diff comment`,
        })
      : U.formatMessage(
          {
            id: `code.diffComment.authorAvatarAlt`,
            defaultMessage: `{author} avatar`,
            description: `Alt text for an author's avatar on a diff comment`,
          },
          { author: W },
        ),
    q;
  if (i === `model`) {
    let e;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(se, { asset: ft })), (t[2] = e))
      : (e = t[2]);
    let n;
    (t[3] === K
      ? (n = t[4])
      : ((n = (0, $.jsx)(`span`, {
          "aria-label": K,
          className: `flex size-6 shrink-0 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-default`,
          role: `img`,
          children: e,
        })),
        (t[3] = K),
        (t[4] = n)),
      (q = n));
  } else if (T) {
    let e;
    (t[5] !== K || t[6] !== W
      ? ((e = (0, $.jsx)(kt, { alt: K, fallbackName: W })), (t[5] = K), (t[6] = W), (t[7] = e))
      : (e = t[7]),
      (q = e));
  } else {
    let e;
    (t[8] !== K || t[9] !== G || t[10] !== W
      ? ((e = (0, $.jsx)(b, { alt: K, name: W, src: G })),
        (t[8] = K),
        (t[9] = G),
        (t[10] = W),
        (t[11] = e))
      : (e = t[11]),
      (q = e));
  }
  let oe;
  t[12] !== U || t[13] !== I
    ? ((oe = I
        ? U.formatMessage({
            id: `pullRequestsPage.detail.expandComment`,
            defaultMessage: `Expand`,
            description: `Accessible label for the button that expands a collapsed pull request comment`,
          })
        : U.formatMessage({
            id: `pullRequestsPage.detail.collapseComment`,
            defaultMessage: `Collapse`,
            description: `Accessible label for the button that collapses an expanded pull request comment`,
          })),
      (t[12] = U),
      (t[13] = I),
      (t[14] = oe))
    : (oe = t[14]);
  let ce = oe,
    le;
  t[15] === U
    ? (le = t[16])
    : ((le = U.formatMessage({
        id: `code.diffComment.dismiss`,
        defaultMessage: `Dismiss comment`,
        description: `Accessible label for dismissing a model-authored comment from a code diff`,
      })),
      (t[15] = U),
      (t[16] = le));
  let ue = le,
    de;
  t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((de = $e()), (t[17] = de)) : (de = t[17]);
  let J = de,
    pe;
  (t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = () => {
        J.view.isDestroyed || J.destroy();
      }),
      (t[18] = pe))
    : (pe = t[18]),
    Xe(pe));
  let me;
  t[19] !== _?.replyToReviewThreadId || t[20] !== w
    ? ((me = () => {
        if (!(z.current == null || w || _?.replyToReviewThreadId != null))
          return ae(document.body, (e) => {
            let t = B.current;
            e.defaultPrevented ||
              e.key !== `Escape` ||
              t == null ||
              (e.preventDefault(), e.stopPropagation(), (B.current = null), J.focus(), t(`abort`));
          });
      }),
      (t[19] = _?.replyToReviewThreadId),
      (t[20] = w),
      (t[21] = me))
    : (me = t[21]);
  let he = _?.replyToReviewThreadId,
    ge;
  (t[22] !== w || t[23] !== he
    ? ((ge = [J, he, w]), (t[22] = w), (t[23] = he), (t[24] = ge))
    : (ge = t[24]),
    (0, Q.useEffect)(me, ge));
  let _e;
  t[25] === w
    ? (_e = t[26])
    : ((_e = (e) => {
        if (w) return;
        let t = e.target;
        t &&
          (t.closest(`.ProseMirror,button,input,select,a,[role='button']`) ||
            (e.preventDefault(), J.focus()));
      }),
      (t[25] = w),
      (t[26] = _e));
  let ve = _e,
    be,
    xe;
  (t[27] === k
    ? ((be = t[28]), (xe = t[29]))
    : ((be = () => {
        (J.getText() !== k && J.setPromptText(k), N(k));
      }),
      (xe = [J, k]),
      (t[27] = k),
      (t[28] = be),
      (t[29] = xe)),
    (0, Q.useEffect)(be, xe));
  let Se;
  t[30] === x
    ? (Se = t[31])
    : ((Se = (e) => {
        (N(e), x?.(e));
      }),
      (t[30] = x),
      (t[31] = Se));
  let Ce = Se,
    we,
    Te;
  (t[32] === _
    ? ((we = t[33]), (Te = t[34]))
    : ((we = () => {
        let e = _ != null;
        (!H.current && e && (F(!1), J.view.dom.blur()), (H.current = e));
      }),
      (Te = [J, _]),
      (t[32] = _),
      (t[33] = we),
      (t[34] = Te)),
    (0, Q.useEffect)(we, Te));
  let Y;
  if (t[35] !== M || t[36] !== _ || t[37] !== O || t[38] !== w) {
    if (((Y = !1), !w))
      if (_) Y = M !== O;
      else {
        let e;
        (t[40] === M ? (e = t[41]) : ((e = M.trim()), (t[40] = M), (t[41] = e)),
          (Y = e.length > 0));
      }
    ((t[35] = M), (t[36] = _), (t[37] = O), (t[38] = w), (t[39] = Y));
  } else Y = t[39];
  let Ee;
  t[42] !== Y || t[43] !== S
    ? ((Ee = () => {
        S && V.current !== Y && ((V.current = Y), S(Y));
      }),
      (t[42] = Y),
      (t[43] = S),
      (t[44] = Ee))
    : (Ee = t[44]);
  let De;
  (t[45] !== Y || t[46] !== S
    ? ((De = [Y, S]), (t[45] = Y), (t[46] = S), (t[47] = De))
    : (De = t[47]),
    (0, Q.useEffect)(Ee, De));
  let Oe;
  t[48] !== n ||
  t[49] !== _ ||
  t[50] !== C ||
  t[51] !== o ||
  t[52] !== u ||
  t[53] !== g ||
  t[54] !== p ||
  t[55] !== w ||
  t[56] !== a ||
  t[57] !== s ||
  t[58] !== l
    ? ((Oe = () => {
        if (w || C) return;
        if (B.current != null) {
          B.current(`send`);
          return;
        }
        let e = J.getText();
        if (!e) return;
        let t = _
          ? { ..._, content: [{ content_type: `text`, text: e }] }
          : {
              type: `comment`,
              content: [{ content_type: `text`, text: e }],
              position: {
                side: a === `deletions` ? `left` : `right`,
                path: n,
                line: o,
                ...(s != null && (s !== o || l !== a) ? { start_line: s } : {}),
                ...(l != null && l !== a
                  ? { start_side: l === `deletions` ? `left` : `right` }
                  : {}),
              },
              localDiffHunk: u,
            };
        (p(t), F(!1), J.view.dom.blur(), g?.(), ye());
      }),
      (t[48] = n),
      (t[49] = _),
      (t[50] = C),
      (t[51] = o),
      (t[52] = u),
      (t[53] = g),
      (t[54] = p),
      (t[55] = w),
      (t[56] = a),
      (t[57] = s),
      (t[58] = l),
      (t[59] = Oe))
    : (Oe = t[59]);
  let ke = Oe,
    Ae;
  t[60] === m
    ? (Ae = t[61])
    : ((Ae = () => {
        (m?.(), ye());
      }),
      (t[60] = m),
      (t[61] = Ae));
  let je = Ae,
    Me;
  t[62] !== _ || t[63] !== O || t[64] !== g || t[65] !== x
    ? ((Me = () => {
        (g?.(), F(!1), _ && (N(O), J.setPromptText(O), x?.(O)));
      }),
      (t[62] = _),
      (t[63] = O),
      (t[64] = g),
      (t[65] = x),
      (t[66] = Me))
    : (Me = t[66]);
  let Ne = Me;
  if (!w && _?.replyToReviewThreadId != null) {
    let e = q,
      n;
    t[67] === M ? (n = t[68]) : ((n = M.trim()), (t[67] = M), (t[68] = n));
    let i = !n,
      a;
    t[69] === U
      ? (a = t[70])
      : ((a = U.formatMessage({
          id: `code.diffComment.reply.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request reply`,
        })),
        (t[69] = U),
        (t[70] = a));
    let o;
    t[71] === U
      ? (o = t[72])
      : ((o = U.formatMessage({
          id: `code.diffComment.reply.placeholder`,
          defaultMessage: `Reply…`,
          description: `Placeholder for a pull request review reply`,
        })),
        (t[71] = U),
        (t[72] = o));
    let s;
    t[73] !== M ||
    t[74] !== ke ||
    t[75] !== Ce ||
    t[76] !== _ ||
    t[77] !== O ||
    t[78] !== g ||
    t[79] !== o ||
    t[80] !== r
      ? ((s = (0, $.jsx)(Gt, {
          commentEditor: J,
          commentText: M,
          disableAutoFocus: !1,
          initialComment: _,
          initialCommentText: O,
          workspaceRoot: r,
          containerRef: z,
          onTextChange: Ce,
          onEscape: g,
          onSubmit: ke,
          placeholder: o,
        })),
        (t[73] = M),
        (t[74] = ke),
        (t[75] = Ce),
        (t[76] = _),
        (t[77] = O),
        (t[78] = g),
        (t[79] = o),
        (t[80] = r),
        (t[81] = s))
      : (s = t[81]);
    let c;
    return (
      t[82] !== q || t[83] !== ke || t[84] !== C || t[85] !== i || t[86] !== a || t[87] !== s
        ? ((c = (0, $.jsx)(`div`, {
            ref: z,
            className: `w-full max-w-3xl min-w-0 px-1.5 pb-1.5 font-sans`,
            children: (0, $.jsx)(`div`, {
              className: `min-w-0 rounded-lg border border-border/24 bg-surface-secondary/92 focus-within:border-text-secondary`,
              children: (0, $.jsx)(mt, {
                authorAvatar: e,
                disabled: i,
                loading: C,
                submitLabel: a,
                submitType: `button`,
                onSubmit: ke,
                children: s,
              }),
            }),
          })),
          (t[82] = q),
          (t[83] = ke),
          (t[84] = C),
          (t[85] = i),
          (t[86] = a),
          (t[87] = s),
          (t[88] = c))
        : (c = t[88]),
      c
    );
  }
  let Pe;
  t[89] !== M ||
  t[90] !== ke ||
  t[91] !== Ce ||
  t[92] !== _ ||
  t[93] !== O ||
  t[94] !== U ||
  t[95] !== I ||
  t[96] !== g ||
  t[97] !== w ||
  t[98] !== r
    ? ((Pe = I
        ? null
        : (0, $.jsx)(`div`, {
            className: `flex flex-col gap-2 p-3`,
            children: w
              ? (0, $.jsx)(Ht, {
                  commentEditor: J,
                  placeholder: U.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Request change`,
                    description: `Placeholder for code diff request change`,
                  }),
                })
              : (0, $.jsx)(Gt, {
                  commentEditor: J,
                  commentText: M,
                  initialComment: _,
                  initialCommentText: O,
                  workspaceRoot: r,
                  containerRef: z,
                  onTextChange: Ce,
                  onEscape: g,
                  onSubmit: ke,
                  onShowButtons: () => {
                    F(!0);
                  },
                  onHideButtons: () => {
                    B.current ?? F(!1);
                  },
                  placeholder: U.formatMessage({
                    id: `code.diff.requestChange`,
                    defaultMessage: `Request change`,
                    description: `Placeholder for code diff request change`,
                  }),
                }),
          })),
      (t[89] = M),
      (t[90] = ke),
      (t[91] = Ce),
      (t[92] = _),
      (t[93] = O),
      (t[94] = U),
      (t[95] = I),
      (t[96] = g),
      (t[97] = w),
      (t[98] = r),
      (t[99] = Pe))
    : (Pe = t[99]);
  let Ie;
  t[100] !== M ||
  t[101] !== Ne ||
  t[102] !== je ||
  t[103] !== ke ||
  t[104] !== _ ||
  t[105] !== I ||
  t[106] !== C ||
  t[107] !== m ||
  t[108] !== w ||
  t[109] !== P
    ? ((Ie =
        !w && (P || C || m != null)
          ? (0, $.jsx)(wt, {
              stopDictationRef: B,
              commentEditor: J,
              commentText: M,
              initialComment: _,
              isSubmitting: C,
              onCancel: Ne,
              onDelete: m == null ? void 0 : je,
              onSubmit: ke,
              showButtons: P && !I,
            })
          : null),
      (t[100] = M),
      (t[101] = Ne),
      (t[102] = je),
      (t[103] = ke),
      (t[104] = _),
      (t[105] = I),
      (t[106] = C),
      (t[107] = m),
      (t[108] = w),
      (t[109] = P),
      (t[110] = Ie))
    : (Ie = t[110]);
  let Le;
  t[111] !== T || t[112] !== j || t[113] !== A || t[114] !== a
    ? ((Le = (0, $.jsx)(`div`, {
        className: `text-xs leading-4 text-codex-description`,
        children:
          A === j
            ? (0, $.jsx)(c, {
                id: `code.diffComment.lineBySource`,
                defaultMessage: `{source, select, local {Local comment on line {line}} other {Comment on line {line}}}`,
                description: `Line label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: {
                  source: T ? `local` : `review`,
                  line: `${a === `deletions` ? `L` : `R`}${j}`,
                },
              })
            : (0, $.jsx)(c, {
                id: `code.diffComment.lineRangeBySource`,
                defaultMessage: `{source, select, local {Local comment on lines {startLine} to {endLine}} other {Comment on lines {startLine} to {endLine}}}`,
                description: `Line-range label for a diff comment. Local identifies the current user's local comment; other identifies a Codex finding or GitHub review comment.`,
                values: {
                  source: T ? `local` : `review`,
                  endLine: `${a === `deletions` ? `L` : `R`}${j}`,
                  startLine: `${a === `deletions` ? `L` : `R`}${A}`,
                },
              }),
      })),
      (t[111] = T),
      (t[112] = j),
      (t[113] = A),
      (t[114] = a),
      (t[115] = Le))
    : (Le = t[115]);
  let Re;
  t[116] !== ue || t[117] !== h || t[118] !== w
    ? ((Re =
        w && h != null
          ? (0, $.jsx)(v, {
              delayDuration: 250,
              tooltipContent: ue,
              children: (0, $.jsx)(fe, {
                "aria-label": ue,
                color: `ghost`,
                size: `composerSm`,
                uniform: !0,
                onClick: (e) => {
                  (e.preventDefault(), e.stopPropagation(), R(!0));
                },
                children: (0, $.jsx)(re, { className: `icon-2xs` }),
              }),
            })
          : null),
      (t[116] = ue),
      (t[117] = h),
      (t[118] = w),
      (t[119] = Re))
    : (Re = t[119]);
  let ze;
  t[120] !== ce || t[121] !== I || t[122] !== w
    ? ((ze = w
        ? (0, $.jsx)(v, {
            delayDuration: 250,
            tooltipContent: ce,
            children: (0, $.jsx)(fe, {
              "aria-expanded": !I,
              "aria-label": ce,
              color: `ghost`,
              size: `composerSm`,
              uniform: !0,
              onClick: (e) => {
                (e.preventDefault(), e.stopPropagation(), ne(Vt));
              },
              children: (0, $.jsx)(Fe, {
                className: E(`icon-2xs transition-transform duration-basic`, !I && `rotate-180`),
              }),
            }),
          })
        : null),
      (t[120] = ce),
      (t[121] = I),
      (t[122] = w),
      (t[123] = ze))
    : (ze = t[123]);
  let Ve;
  t[124] !== Le || t[125] !== Re || t[126] !== ze
    ? ((Ve = (0, $.jsxs)(`div`, { className: `flex items-center gap-2`, children: [Le, Re, ze] })),
      (t[124] = Le),
      (t[125] = Re),
      (t[126] = ze),
      (t[127] = Ve))
    : (Ve = t[127]);
  let He;
  t[128] !== q || t[129] !== W || t[130] !== ve || t[131] !== Pe || t[132] !== Ie || t[133] !== Ve
    ? ((He = (0, $.jsx)(ct, {
        authorAvatar: q,
        authorLabel: W,
        body: Pe,
        className: `composer-surface-chrome`,
        footer: Ie,
        headerAccessory: Ve,
        onPointerDownCapture: ve,
      })),
      (t[128] = q),
      (t[129] = W),
      (t[130] = ve),
      (t[131] = Pe),
      (t[132] = Ie),
      (t[133] = Ve),
      (t[134] = He))
    : (He = t[134]);
  let Ue;
  t[135] !== L || t[136] !== h
    ? ((Ue = h == null ? null : (0, $.jsx)(Lt, { open: L, onConfirm: h, onOpenChange: R })),
      (t[135] = L),
      (t[136] = h),
      (t[137] = Ue))
    : (Ue = t[137]);
  let We;
  return (
    t[138] !== He || t[139] !== Ue
      ? ((We = (0, $.jsxs)(`div`, {
          ref: z,
          className: `w-full max-w-3xl min-w-0 gap-2 p-1.5 font-sans`,
          children: [He, Ue],
        })),
        (t[138] = He),
        (t[139] = Ue),
        (t[140] = We))
      : (We = t[140]),
    We
  );
}
function Vt(e) {
  return !e;
}
function Ht(e) {
  let t = (0, qt.c)(7),
    { commentEditor: n, placeholder: r } = e,
    i;
  t[0] === n.view
    ? (i = t[1])
    : ((i = () => {
        n.view.isDestroyed || n.view.setProps({ editable: Wt });
      }),
      (t[0] = n.view),
      (t[1] = i));
  let a;
  (t[2] === n ? (a = t[3]) : ((a = [n]), (t[2] = n), (t[3] = a)), (0, Q.useEffect)(i, a));
  let o;
  return (
    t[4] !== n || t[5] !== r
      ? ((o = (0, $.jsx)(Ve, {
          className: Jt,
          composerController: n,
          disableAutoFocus: !0,
          minHeight: `0`,
          placeholder: r,
          onSubmit: Ut,
        })),
        (t[4] = n),
        (t[5] = r),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Ut() {}
function Wt() {
  return !1;
}
function Gt(e) {
  let t = (0, qt.c)(58),
    {
      commentEditor: n,
      commentText: r,
      disableAutoFocus: i,
      initialComment: a,
      initialCommentText: o,
      workspaceRoot: s,
      containerRef: c,
      onTextChange: l,
      onEscape: u,
      onSubmit: d,
      onShowButtons: f,
      onHideButtons: p,
      placeholder: m,
    } = e,
    h = (0, Q.useRef)(null),
    g = Kt(s),
    _ = qe(n),
    v = tt(n),
    b = _.ui?.active ?? !1,
    x;
  t[0] === b ? (x = t[1]) : ((x = { anchorRef: h, isActive: b }), (t[0] = b), (t[1] = x));
  let S = Ue(x),
    ee = v.ui?.active ?? !1,
    C;
  t[2] === ee ? (C = t[3]) : ((C = { anchorRef: h, isActive: ee }), (t[2] = ee), (t[3] = C));
  let te = Ue(C),
    w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { hostId: W }), (t[4] = w)) : (w = t[4]);
  let T = O(w),
    { skills: E } = y(g),
    D,
    k;
  (t[5] !== n || t[6] !== l
    ? ((D = () =>
        Ze(n.view, (e) => {
          e && l(n.getText());
        })),
      (k = [n, l]),
      (t[5] = n),
      (t[6] = l),
      (t[7] = D),
      (t[8] = k))
    : ((D = t[7]), (k = t[8])),
    (0, Q.useEffect)(D, k));
  let A, j;
  (t[9] !== T || t[10] !== E || t[11] !== n
    ? ((A = () => {
        n.syncMentionMetadata({ skills: E, apps: T });
      }),
      (j = [T, E, n]),
      (t[9] = T),
      (t[10] = E),
      (t[11] = n),
      (t[12] = A),
      (t[13] = j))
    : ((A = t[12]), (j = t[13])),
    (0, Q.useEffect)(A, j));
  let M;
  t[14] !== n.view.dom || t[15] !== u
    ? ((M = () => {
        let e = (e) => {
            e.key === `Escape` && (e.defaultPrevented || (e.preventDefault(), u?.()));
          },
          t = n.view.dom;
        return (
          t.addEventListener(`keydown`, e),
          () => {
            t.removeEventListener(`keydown`, e);
          }
        );
      }),
      (t[14] = n.view.dom),
      (t[15] = u),
      (t[16] = M))
    : (M = t[16]);
  let N;
  (t[17] !== n || t[18] !== u ? ((N = [n, u]), (t[17] = n), (t[18] = u), (t[19] = N)) : (N = t[19]),
    (0, Q.useEffect)(M, N));
  let P;
  t[20] !== r || t[21] !== c || t[22] !== a || t[23] !== o || t[24] !== p
    ? ((P = (e) => {
        let t = e.relatedTarget;
        a && r === o && (!t || !c.current?.contains(t)) && p?.();
      }),
      (t[20] = r),
      (t[21] = c),
      (t[22] = a),
      (t[23] = o),
      (t[24] = p),
      (t[25] = P))
    : (P = t[25]);
  let F = _.ui?.active ?? !1,
    I = _.ui?.query ?? ``,
    ne = _.ui?.source ?? null,
    L;
  t[26] !== _.addMention ||
  t[27] !== _.closeAutocomplete ||
  t[28] !== _.setSelectedMention ||
  t[29] !== g ||
  t[30] !== I ||
  t[31] !== ne
    ? ((L = (0, $.jsx)(Ge, {
        hostId: W,
        onAddContext: _.addMention,
        onRequestClose: _.closeAutocomplete,
        onUpdateSelectedMention: _.setSelectedMention,
        query: I,
        fileSearchRootPaths: g,
        skillRoots: g,
        source: ne,
      })),
      (t[26] = _.addMention),
      (t[27] = _.closeAutocomplete),
      (t[28] = _.setSelectedMention),
      (t[29] = g),
      (t[30] = I),
      (t[31] = ne),
      (t[32] = L))
    : (L = t[32]);
  let R;
  t[33] !== S || t[34] !== n || t[35] !== _.ui || t[36] !== F || t[37] !== L
    ? ((R = (0, $.jsx)(He, {
        anchorRef: h,
        composerController: n,
        isActive: F,
        mentionUiState: _.ui,
        placement: S,
        children: L,
      })),
      (t[33] = S),
      (t[34] = n),
      (t[35] = _.ui),
      (t[36] = F),
      (t[37] = L),
      (t[38] = R))
    : (R = t[38]);
  let z;
  t[39] !== g || t[40] !== v || t[41] !== te
    ? ((z = (0, $.jsx)(nt, {
        autocomplete: v,
        roots: g,
        anchorRef: h,
        placement: te,
        zIndexClassName: `z-[60]`,
      })),
      (t[39] = g),
      (t[40] = v),
      (t[41] = te),
      (t[42] = z))
    : (z = t[42]);
  let B = i ?? !!a,
    V;
  t[43] !== _.handleMentionEvent || t[44] !== v.handleMentionEvent
    ? ((V = (e) => {
        Ke(e, { onAtMention: _.handleMentionEvent, onSkillMention: v.handleMentionEvent });
      }),
      (t[43] = _.handleMentionEvent),
      (t[44] = v.handleMentionEvent),
      (t[45] = V))
    : (V = t[45]);
  let H;
  t[46] !== n || t[47] !== d || t[48] !== m || t[49] !== B || t[50] !== V
    ? ((H = (0, $.jsx)(Ve, {
        className: Jt,
        composerController: n,
        disableAutoFocus: B,
        minHeight: `0`,
        placeholder: m,
        onSuggestionHandler: V,
        onSubmit: d,
      })),
      (t[46] = n),
      (t[47] = d),
      (t[48] = m),
      (t[49] = B),
      (t[50] = V),
      (t[51] = H))
    : (H = t[51]);
  let U;
  return (
    t[52] !== f || t[53] !== P || t[54] !== R || t[55] !== z || t[56] !== H
      ? ((U = (0, $.jsxs)(`div`, {
          ref: h,
          className: `relative`,
          onFocus: f,
          onBlur: P,
          children: [R, z, H],
        })),
        (t[52] = f),
        (t[53] = P),
        (t[54] = R),
        (t[55] = z),
        (t[56] = H),
        (t[57] = U))
      : (U = t[57]),
    U
  );
}
function Kt(e) {
  let t = (0, qt.c)(2),
    { data: n } = u(P);
  n?.roots;
  let r;
  bb0: {
    if (e != null) {
      let n;
      (t[0] === e ? (n = t[1]) : ((n = [e]), (t[0] = e), (t[1] = n)), (r = n));
      break bb0;
    }
    r = n?.roots;
  }
  return r;
}
var qt,
  Q,
  $,
  Jt,
  Yt = e(() => {
    ((qt = he()),
      dt(),
      ze(),
      C(),
      (Q = t(a(), 1)),
      D(),
      it(),
      pt(),
      Je(),
      Qe(),
      H(),
      ot(),
      We(),
      Ye(),
      oe(),
      at(),
      Le(),
      Te(),
      et(),
      _(),
      p(),
      S(),
      i(),
      m(),
      Re(),
      q(),
      Ot(),
      It(),
      st(),
      be(),
      zt(),
      ($ = ce()),
      (Jt = E(
        `text-default font-sans w-full !min-h-0 p-0`,
        `[&_.ProseMirror]:w-full`,
        `[&_.ProseMirror]:leading-relaxed`,
        `extension:[&_.ProseMirror]:leading-normal`,
        `[&_.ProseMirror]:font-sans`,
        `[&_.ProseMirror]:caret-current`,
        `[&_.ProseMirror]:px-0`,
        `[&_.ProseMirror]:py-0`,
      )));
  });
function Xt(e) {
  let t = (0, Qt.c)(10),
    { comment: n, cwd: i, lineNumber: a, onSelectionClear: o, side: s } = e,
    c = r(pe),
    l;
  t[0] !== n || t[1] !== o || t[2] !== c
    ? ((l = () => {
        (o?.(), ke(c, n));
      }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = c),
      (t[3] = l))
    : (l = t[3]);
  let u = i ?? void 0,
    d;
  return (
    t[4] !== n || t[5] !== a || t[6] !== s || t[7] !== l || t[8] !== u
      ? ((d = (0, $t.jsx)(Bt, {
          filePath: n.position.path,
          initialComment: n,
          lineNumber: a,
          onDismiss: l,
          onSubmit: Zt,
          side: s,
          source: `model`,
          workspaceRoot: u,
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = s),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
function Zt() {}
var Qt,
  $t,
  en = e(() => {
    ((Qt = he()), C(), s(), Yt(), _e(), ($t = ce()));
  });
function tn(e) {
  let t = (0, sn.c)(54),
    {
      cwd: n,
      diffPath: r,
      workspaceRoot: i,
      enableComments: a,
      allowCommentDrafts: o,
      comments: s,
      modelComments: u,
      readonlyComments: d,
      submittingCommentKeys: f,
      onCommentsChange: p,
      commentAuthorLabel: m,
      commentAuthorAvatarUrl: h,
      onReadonlyCommentReply: g,
      renderReadonlyComment: _,
      renderReadonlyCommentActions: v,
      renderReadonlyCommentBody: y,
      onSelectionClear: b,
      conversationId: x,
    } = e,
    S = o === void 0 ? a : o,
    ee = (0, cn.useId)(),
    C;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((C = new Set()), (t[0] = C)) : (C = t[0]);
  let te = (0, cn.useRef)(C),
    w;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = new Map()), (t[1] = w)) : (w = t[1]);
  let T = (0, cn.useRef)(w),
    { updateDrafts: E } = xt(x ?? null),
    D,
    O;
  (t[2] !== x || t[3] !== E
    ? ((D = () => {
        if (!x) return;
        let e = te.current,
          t = T.current;
        return () => {
          (t.clear(),
            e.size !== 0 &&
              (E((t) => {
                let n = { ...t },
                  r = !1;
                for (let t of e) t in n && ((r = !0), delete n[t]);
                return r ? n : t;
              }),
              e.clear()));
        };
      }),
      (O = [x, E]),
      (t[2] = x),
      (t[3] = E),
      (t[4] = D),
      (t[5] = O))
    : ((D = t[4]), (O = t[5])),
    (0, cn.useEffect)(D, O));
  let A;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((A = {}), (t[6] = A)) : (A = t[6]);
  let [M, N] = (0, cn.useState)(A),
    P;
  if (
    t[7] !== s ||
    t[8] !== n ||
    t[9] !== r ||
    t[10] !== a ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== i
  ) {
    bb0: {
      if (!a) {
        let e;
        (t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[15] = e)) : (e = t[15]),
          (P = e));
        break bb0;
      }
      let e = (e) => e.localWorkspaceRoot == null || i == null || k(e.localWorkspaceRoot, i),
        o = (s ?? []).filter(e),
        c = new Set(o.map((e) => j(e, i))),
        l = new Set(
          (d ?? []).flatMap((e) => {
            let t = j(e, i);
            return i == null ? [t] : [t, j({ ...e, localWorkspaceRoot: i }, i)];
          }),
        ),
        f = o.flatMap((e) => (l.has(j(e, i)) ? [] : [{ comment: e, source: `user` }])),
        p = (d ?? []).map((e) => ({
          attached: c.has(j(e, i)) || (i != null && c.has(j({ ...e, localWorkspaceRoot: i }, i))),
          comment: e,
          source: `readonly`,
        })),
        m = (u ?? []).filter(e).map(an),
        h = [...f, ...p, ...m];
      if (h.length === 0) {
        let e;
        (t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[16] = e)) : (e = t[16]),
          (P = e));
        break bb0;
      }
      P = h
        .filter((e) => {
          let { comment: t } = e;
          return Ee(t.position.path, r, n ?? void 0);
        })
        .map(rn);
    }
    ((t[7] = s),
      (t[8] = n),
      (t[9] = r),
      (t[10] = a),
      (t[11] = u),
      (t[12] = d),
      (t[13] = i),
      (t[14] = P));
  } else P = t[14];
  let F = P,
    ne;
  bb1: {
    if (!S) {
      let e;
      (t[17] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[17] = e)) : (e = t[17]),
        (ne = e));
      break bb1;
    }
    let e;
    (t[18] !== M || t[19] !== i
      ? ((e = Object.entries(M)
          .filter((e) => {
            let [, t] = e;
            return t.localWorkspaceRoot == null
              ? i == null
              : i != null && k(t.localWorkspaceRoot, i);
          })
          .map(nn)),
        (t[18] = M),
        (t[19] = i),
        (t[20] = e))
      : (e = t[20]),
      (ne = e));
  }
  let L = ne,
    R;
  bb2: {
    if (!a) {
      let e;
      (t[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[21] = e)) : (e = t[21]),
        (R = e));
      break bb2;
    }
    let e;
    (t[22] !== F || t[23] !== L
      ? ((e = [...F, ...L]), (t[22] = F), (t[23] = L), (t[24] = e))
      : (e = t[24]),
      (R = e));
  }
  let z = R,
    B;
  if (t[25] !== F || t[26] !== L) {
    B = new Set();
    for (let e of F) B.add(yt(e.side, e.lineNumber));
    for (let e of L) B.add(yt(e.side, e.lineNumber));
    ((t[25] = F), (t[26] = L), (t[27] = B));
  } else B = t[27];
  let V = B,
    H;
  t[28] !== S || t[29] !== r || t[30] !== i
    ? ((H = (e) => {
        let { lineNumber: t, side: n, startLine: a, startSide: o, localDiffHunk: s } = e;
        if (!S) return;
        let c = yt(n, t),
          u = i == null ? c : `${l(i)}::${c}`;
        N((e) => {
          if (e[u]) return e;
          let c = we(r);
          return {
            ...e,
            [u]: {
              side: n,
              lineNumber: t,
              path: c,
              localWorkspaceRoot: i,
              ...(a != null && (a !== t || o !== n) ? { startLine: a } : {}),
              ...(o != null && o !== n ? { startSide: o } : {}),
              localDiffHunk: s,
            },
          };
        });
      }),
      (t[28] = S),
      (t[29] = r),
      (t[30] = i),
      (t[31] = H))
    : (H = t[31]);
  let U = H,
    re;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (e) => {
        N((t) => {
          if (!(e in t)) return t;
          let n = { ...t };
          return (delete n[e], n);
        });
      }),
      (t[32] = re))
    : (re = t[32]);
  let W = re,
    ie;
  t[33] !== h ||
  t[34] !== m ||
  t[35] !== s ||
  t[36] !== x ||
  t[37] !== n ||
  t[38] !== ee ||
  t[39] !== p ||
  t[40] !== g ||
  t[41] !== b ||
  t[42] !== _ ||
  t[43] !== v ||
  t[44] !== y ||
  t[45] !== f ||
  t[46] !== E ||
  t[47] !== i
    ? ((ie = (e) => {
        let t = function (e, t) {
            if (x) {
              if (t) {
                (E((t) => (e in t ? t : { ...t, [e]: !0 })), te.current.add(e));
                return;
              }
              (E((t) => {
                if (!(e in t)) return t;
                let n = { ...t };
                return (delete n[e], n);
              }),
                te.current.delete(e));
            }
          },
          r = e.metadata;
        if (!r) return null;
        let a = on({
            instanceId: ee,
            path: r.kind === `comment` ? r.comment.position.path : r.path,
            workspaceRoot:
              r.kind === `comment` ? (r.comment.localWorkspaceRoot ?? i) : r.localWorkspaceRoot,
            side: e.side,
            lineNumber: e.lineNumber,
          }),
          o =
            r.kind === `comment`
              ? (r.comment.replyToReviewThreadId ??
                r.comment.reviewThreadId ??
                `comment-${s?.indexOf(r.comment) ?? -1}`)
              : `draft`,
          l = `${x ?? `no-conversation`}::${a}::${o}`,
          u = () => {
            T.current.delete(l);
          },
          d = (e) => {
            T.current.set(l, e);
          };
        switch (r.kind) {
          case `comment`: {
            if (r.source === `readonly`) {
              let e = r.comment,
                t = r.attached === !0,
                n = i == null ? r.comment : { ...r.comment, localWorkspaceRoot: i },
                a = j(n, i),
                o = j(r.comment, i),
                l = `url` in r.comment && typeof r.comment.url == `string` ? r.comment.url : null,
                u = r.comment.reviewThreadId ?? null,
                d = g != null && u != null && !(s ?? []).some((e) => e.replyToReviewThreadId === u),
                f =
                  g == null
                    ? (0, ln.jsx)(fe, {
                        color: `secondary`,
                        size: `default`,
                        onClick: (e) => {
                          (e.preventDefault(),
                            e.stopPropagation(),
                            p?.(
                              t
                                ? (s ?? []).filter((e) => {
                                    let t = j(e, i);
                                    return t !== a && t !== o;
                                  })
                                : [...(s ?? []), n],
                            ));
                        },
                        children: t
                          ? (0, ln.jsx)(c, {
                              id: `localConversation.pullRequest.actions.comments.remove`,
                              defaultMessage: `Remove`,
                              description: `Action button shown on an attached pull request comment in a diff`,
                            })
                          : (0, ln.jsx)(c, {
                              id: `localConversation.pullRequest.actions.comments.address`,
                              defaultMessage: `Add to chat`,
                              description: `Action button shown on an individual review comment in the comments flyout`,
                            }),
                      })
                    : null;
              if (_ != null)
                return (0, ln.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: _(e, f),
                });
              let m;
              return (
                (m =
                  v == null
                    ? g == null
                      ? f
                      : d
                        ? (0, ln.jsx)(fe, {
                            color: `secondary`,
                            size: `default`,
                            onClick: (e) => {
                              (e.preventDefault(), e.stopPropagation(), g(r.comment));
                            },
                            children: (0, ln.jsx)(c, {
                              id: `pullRequestsPage.codeReview.comment.reply`,
                              defaultMessage: `Reply`,
                              description: `Action button shown on a pull request review comment in the code review tab`,
                            }),
                          })
                        : null
                    : v(e, d, () => {
                        d && g?.(r.comment);
                      })),
                (0, ln.jsx)(`div`, {
                  className: `w-full min-w-0 gap-2 p-1.5 font-sans whitespace-normal`,
                  children: (0, ln.jsx)(lt, {
                    comment: r.comment,
                    createdAt: e.createdAt,
                    defaultCollapsed: e.isResolved === !0,
                    headerAccessory:
                      e.isResolved === !0
                        ? (0, ln.jsx)(c, {
                            id: `pullRequestDetail.comment.resolved`,
                            defaultMessage: `Resolved`,
                            description: `Status shown on a resolved pull request code review thread`,
                          })
                        : void 0,
                    metadataAccessory: m,
                    replies: e.replies,
                    renderBody: y,
                    surfaceVariant: `inline`,
                    url: l,
                  }),
                })
              );
            }
            if (r.source === `model`)
              return (0, ln.jsx)(Xt, {
                comment: r.comment,
                cwd: n,
                lineNumber: e.lineNumber,
                onSelectionClear: b,
                side: e.side,
              });
            let a = f?.has(I(r.comment)) === !0;
            return (0, ln.jsx)(
              Bt,
              {
                filePath: r.comment.position.path,
                workspaceRoot: n ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                initialComment: r.comment,
                initialDraftText: T.current.get(l),
                authorLabel: m,
                authorAvatarUrl: h,
                isSubmitting: a,
                onUnsavedChange: (e) => {
                  (t(l, e), e || u());
                },
                onDraftTextChange: d,
                onSubmit: (e) => {
                  (t(l, !1), u());
                  let n = (s ?? []).map((t) => (t === r.comment ? e : t));
                  p?.(n);
                },
                onDelete: () => {
                  (t(l, !1), u(), b?.(), p?.(s?.filter((e) => e !== r.comment) ?? []));
                },
              },
              l,
            );
          }
          case `draft-comment`:
            return (0, ln.jsx)(
              Bt,
              {
                filePath: r.path,
                workspaceRoot: n ?? void 0,
                side: e.side,
                source: `user`,
                lineNumber: e.lineNumber,
                startLine: r.startLine,
                startSide: r.startSide,
                localDiffHunk: r.localDiffHunk,
                authorLabel: m,
                authorAvatarUrl: h,
                initialDraftText: T.current.get(l),
                onUnsavedChange: (e) => {
                  (t(l, e), e || u());
                },
                onDraftTextChange: d,
                onSubmit: (e) => {
                  (t(l, !1),
                    u(),
                    b?.(),
                    p?.([
                      ...(s ?? []),
                      r.localWorkspaceRoot == null
                        ? e
                        : { ...e, localWorkspaceRoot: r.localWorkspaceRoot },
                    ]),
                    W(r.key));
                },
                onClose: () => {
                  (t(l, !1), u(), b?.(), W(r.key));
                },
              },
              l,
            );
        }
      }),
      (t[33] = h),
      (t[34] = m),
      (t[35] = s),
      (t[36] = x),
      (t[37] = n),
      (t[38] = ee),
      (t[39] = p),
      (t[40] = g),
      (t[41] = b),
      (t[42] = _),
      (t[43] = v),
      (t[44] = y),
      (t[45] = f),
      (t[46] = E),
      (t[47] = i),
      (t[48] = ie))
    : (ie = t[48]);
  let G = ie,
    K;
  return (
    t[49] !== U || t[50] !== V || t[51] !== z || t[52] !== G
      ? ((K = {
          annotations: z,
          annotationKeys: V,
          addDraftComment: U,
          renderCommentAnnotation: G,
        }),
        (t[49] = U),
        (t[50] = V),
        (t[51] = z),
        (t[52] = G),
        (t[53] = K))
      : (K = t[53]),
    K
  );
}
function nn(e) {
  let [t, n] = e;
  return {
    side: n.side,
    lineNumber: n.lineNumber,
    metadata: {
      kind: `draft-comment`,
      key: t,
      path: n.path,
      localWorkspaceRoot: n.localWorkspaceRoot,
      startLine: n.startLine,
      startSide: n.startSide,
      localDiffHunk: n.localDiffHunk,
    },
  };
}
function rn(e) {
  let { attached: t, comment: n, source: r } = e;
  return {
    side: n.position.side === `left` ? `deletions` : `additions`,
    lineNumber: n.position.line,
    metadata: { kind: `comment`, attached: t, comment: n, source: r },
  };
}
function an(e) {
  return { comment: e, source: `model` };
}
function on({ instanceId: e, path: t, workspaceRoot: n, side: r, lineNumber: i }) {
  let a = we(t);
  return `${e}::${n == null ? `` : `${l(n)}::`}${a}::${yt(r, i)}`;
}
var sn,
  cn,
  ln,
  un = e(() => {
    ((sn = he()), (cn = t(a(), 1)), D(), i(), ut(), f(), Ct(), Yt(), bt(), be(), en(), (ln = ce()));
  }),
  dn,
  fn,
  pn,
  mn = e(() => {
    (Y(),
      (dn = le(`review-filter-generated-files`, !1)),
      (fn = le(`load-full-files`, !0)),
      (pn = le(`skip-revert-confirmation`, !1)));
  });
export {
  un as a,
  vt as c,
  ht as d,
  gt as f,
  pn as i,
  _t as l,
  dn as n,
  tn as o,
  fn as r,
  yt as s,
  mn as t,
  bt as u,
};
//# sourceMappingURL=review-preferences-model-c2edfefe5a2c.js.map
