import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CY as r,
  DB as i,
  FBt as a,
  HO as o,
  IO as s,
  JO as c,
  Jz as ee,
  LNt as l,
  LO as u,
  MNt as d,
  NNt as f,
  NSt as p,
  OB as m,
  PBt as te,
  Qst as h,
  RO as ne,
  SY as g,
  TY as re,
  USt as ie,
  Uot as _,
  Vot as v,
  WO as ae,
  XOt as y,
  Y3 as b,
  YK as oe,
  Z3 as x,
  ZSt as S,
  aa as C,
  ca as se,
  dO as w,
  da as T,
  fa as E,
  ga as D,
  ha as O,
  iCt as ce,
  lO as k,
  la as A,
  ma as j,
  nB as le,
  nCt as M,
  oa as N,
  okt as ue,
  pa as P,
  qO as de,
  qz as F,
  rB as I,
  sa as L,
  tkt as R,
  ua as fe,
  wK as pe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as z,
  CXt as B,
  FT as me,
  GIn as he,
  HZn as V,
  IT as ge,
  KIn as _e,
  MGn as H,
  MIn as ve,
  MSt as U,
  MT as W,
  NSt as G,
  SGn as ye,
  SXt as be,
  Xan as xe,
  YKn as Se,
  Yan as K,
  ZKn as Ce,
  _Gn as we,
  aXt as Te,
  bIn as Ee,
  dGn as De,
  fXn as Oe,
  jT as q,
  mGn as ke,
  oXt as Ae,
  pGn as je,
  rLn as Me,
  uXn as J,
  wGn as Ne,
  wLr as Y,
  xGn as Pe,
  xXt as Fe,
  yGn as Ie,
  zRr as Le,
  zZn as X,
} from "./app-initial-ad16eaadf81f.js";
import {
  Cr as Re,
  Or as ze,
  Sr as Be,
  bt as Ve,
  da as He,
  do as Ue,
  kr as We,
  la as Ge,
  sa as Ke,
  ua as qe,
  uo as Je,
  xt as Ye,
} from "./app-primary-3e00728c2a4c.js";
import { n as Xe, t as Ze } from "./option-carousel-ae2f9c0f0e72.js";
import { n as Qe, r as $e, t as et } from "./recent-uploads-f604dd924675.js";
import { r as tt, t as nt } from "./uploads-integration-rail-b13a659ac237.js";
function rt(e) {
  let t = (0, at.c)(96),
    { uploads: n, disabled: r, uploadDisabled: i, onAddPhotos: a, onSelectPhoto: o, onRemovePhoto: s } = e,
    c = ue(),
    l = W(),
    u;
  t[0] !== c || t[1] !== l || t[2] !== o
    ? ((u = (e, t) => {
        let n = t === void 0 ? `toggle` : t;
        if (!l() || e.asset_pointer == null) return;
        let r = X(e.asset_pointer);
        r != null &&
          o(
            {
              id: r,
              name: e.entity_type === `self` ? c.formatMessage(We.entitySelf) : e.entity_name,
              imageReference: !0,
              referenceImageId: e.id,
              mimeType: null,
              source: `library`,
            },
            n,
          );
      }),
      (t[0] = c),
      (t[1] = l),
      (t[2] = o),
      (t[3] = u))
    : (u = t[3]);
  let d = ge(u),
    f = ce(ee),
    p = ce(Ue),
    m = (0, ot.useRef)(null),
    { data: te, isPending: h, isError: ne, refetch: re } = M($e, !0),
    ie;
  t[4] === p ? (ie = t[5]) : ((ie = { enabled: p }), (t[4] = p), (t[5] = ie));
  let { data: _, isError: v, refetch: ae } = ce(Be, ie),
    y = p ? _ : void 0,
    x;
  t[6] === y ? (x = t[7]) : ((x = new Set(y?.map(it))), (t[6] = y), (t[7] = x));
  let S = x,
    C = te?.items,
    se,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    N,
    P;
  if (
    t[8] !== r ||
    t[9] !== c ||
    t[10] !== s ||
    t[11] !== C ||
    t[12] !== S ||
    t[13] !== y ||
    t[14] !== d ||
    t[15] !== f ||
    t[16] !== i ||
    t[17] !== n
  ) {
    let e;
    t[29] !== C || t[30] !== S
      ? ((e = (e) => e.status !== `ready` || (!S.has(e.id) && !C?.some((t) => t.file_id === e.id))),
        (t[29] = C),
        (t[30] = S),
        (t[31] = e))
      : (e = t[31]);
    let a = n.filter(e);
    ((D = `flex w-full min-w-0 flex-col gap-3`),
      (se = Ze),
      (O = `compact`),
      t[32] === c
        ? (k = t[33])
        : ((k = c.formatMessage({
            id: `images.preview.suggestedImages`,
            defaultMessage: `Suggested images`,
            description: `Label for saved reference images and recent uploads suggested for use in the image template preview`,
          })),
          (t[32] = c),
          (t[33] = k)),
      t[34] === c
        ? (A = t[35])
        : ((A = c.formatMessage({
            id: `images.preview.suggestedImages.previous`,
            defaultMessage: `Previous suggested images`,
            description: `Scroll to the previous suggested reference images or uploads in the image template preview`,
          })),
          (t[34] = c),
          (t[35] = A)),
      t[36] === c
        ? (j = t[37])
        : ((j = c.formatMessage({
            id: `images.preview.suggestedImages.next`,
            defaultMessage: `Next suggested images`,
            description: `Scroll to the next suggested reference images or uploads in the image template preview`,
          })),
          (t[36] = c),
          (t[37] = j)),
      (N = f),
      t[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = (0, Z.jsx)(`span`, {
            className: `text-sm text-secondary select-none`,
            children: (0, Z.jsx)(R, {
              id: `images.preview.suggestedImages`,
              defaultMessage: `Suggested images`,
              description: `Label for saved reference images and recent uploads suggested for use in the image template preview`,
            }),
          })),
          (t[38] = P))
        : (P = t[38]));
    let o;
    t[39] === c
      ? (o = t[40])
      : ((o = c.formatMessage({
          id: `images.reference.upload`,
          defaultMessage: `Upload a photo`,
          description: `Button to choose a new reference photo from the device for image creation`,
        })),
        (t[39] = c),
        (t[40] = o));
    let ee, l;
    (t[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((ee = () => m.current?.click()), (l = (0, Z.jsx)(oe, {})), (t[41] = ee), (t[42] = l))
      : ((ee = t[41]), (l = t[42])),
      t[43] !== o || t[44] !== i
        ? ((w = (0, Z.jsx)(`div`, {
            className: `w-16 shrink-0`,
            children: (0, Z.jsx)(b, {
              color: `selectionTile`,
              size: `imageTile`,
              "aria-label": o,
              disabled: i,
              onClick: ee,
              children: l,
            }),
          })),
          (t[43] = o),
          (t[44] = i),
          (t[45] = w))
        : (w = t[45]),
      t[46] !== r || t[47] !== c || t[48] !== y || t[49] !== d || t[50] !== i || t[51] !== n
        ? ((T = y?.map((e) => {
            let t = e.asset_pointer == null ? null : X(e.asset_pointer),
              a = n.some((e) => e.status === `ready` && e.id === t),
              o = e.entity_type === `self` ? c.formatMessage(We.entitySelf) : e.entity_name;
            return (0, Z.jsx)(
              `div`,
              {
                className: `w-16 shrink-0`,
                children: (0, Z.jsx)(le, {
                  tooltipContent: o,
                  children: (0, Z.jsx)(b, {
                    color: `selectionTile`,
                    size: `imageTile`,
                    "aria-label": o,
                    "aria-pressed": a,
                    disabled: r || t == null || (!a && i),
                    onClick: () => d.current(e),
                    children: (0, Z.jsx)(K, {
                      alt: ``,
                      assetPointer: e.thumbnail_asset_pointer ?? e.asset_pointer,
                      fallbackUrl: e.thumbnail_url ?? e.content_url,
                      name: o,
                      size: `fill`,
                      shape: `none`,
                    }),
                  }),
                }),
              },
              e.id,
            );
          })),
          (t[46] = r),
          (t[47] = c),
          (t[48] = y),
          (t[49] = d),
          (t[50] = i),
          (t[51] = n),
          (t[52] = T))
        : (T = t[52]));
    let u;
    (t[53] !== r || t[54] !== c || t[55] !== s
      ? ((u = (e) => {
          let t = (0, Z.jsx)(pe, {});
          return (
            e.previewSrc != null &&
              (t = (0, Z.jsx)(`img`, { className: `size-full object-cover`, src: e.previewSrc, alt: `` })),
            (0, Z.jsxs)(
              `div`,
              {
                className: `relative w-16 shrink-0`,
                children: [
                  (0, Z.jsx)(b, {
                    color: `selectionTile`,
                    size: `imageTile`,
                    "aria-pressed": !0,
                    disabled: r,
                    loading: e.status === `uploading`,
                    "aria-label": e.name,
                    onClick: () => s(e.uploadId),
                    children: t,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `absolute top-1 right-1`,
                    children: (0, Z.jsx)(b, {
                      color: `imageSurface`,
                      size: `imageActionIcon`,
                      disabled: r,
                      onClick: () => s(e.uploadId),
                      "aria-label": c.formatMessage(
                        {
                          id: `images.preview.removePhoto`,
                          defaultMessage: `Remove {name}`,
                          description: `Accessible label to remove a selected reference photo`,
                        },
                        { name: e.name },
                      ),
                      children: (0, Z.jsx)(g, {}),
                    }),
                  }),
                ],
              },
              e.uploadId,
            )
          );
        }),
        (t[53] = r),
        (t[54] = c),
        (t[55] = s),
        (t[56] = u))
      : (u = t[56]),
      (E = a.map(u)),
      (t[8] = r),
      (t[9] = c),
      (t[10] = s),
      (t[11] = C),
      (t[12] = S),
      (t[13] = y),
      (t[14] = d),
      (t[15] = f),
      (t[16] = i),
      (t[17] = n),
      (t[18] = se),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = D),
      (t[23] = O),
      (t[24] = k),
      (t[25] = A),
      (t[26] = j),
      (t[27] = N),
      (t[28] = P));
  } else
    ((se = t[18]),
      (w = t[19]),
      (T = t[20]),
      (E = t[21]),
      (D = t[22]),
      (O = t[23]),
      (k = t[24]),
      (A = t[25]),
      (j = t[26]),
      (N = t[27]),
      (P = t[28]));
  let de;
  t[57] !== r ||
  t[58] !== c ||
  t[59] !== h ||
  t[60] !== o ||
  t[61] !== C ||
  t[62] !== S ||
  t[63] !== i ||
  t[64] !== n
    ? ((de = h
        ? (0, Z.jsx)(U, { className: `h-16 w-16 shrink-0 rounded-xl` })
        : C?.map((e, t) => {
            if (S.has(e.file_id)) return null;
            let a = n.find((t) => t.status === `ready` && t.id === e.file_id),
              s = c.formatMessage(
                {
                  id: `images.preview.recentPhoto`,
                  defaultMessage: `Photo {index}`,
                  description: `Accessible name of a recent photo available to use as an image subject`,
                },
                { index: t + 1 },
              );
            return (0, Z.jsx)(
              `div`,
              {
                className: `relative w-16 shrink-0`,
                children: (0, Z.jsx)(b, {
                  color: `selectionTile`,
                  size: `imageTile`,
                  "aria-label": s,
                  "aria-pressed": a != null,
                  disabled: r || (a == null && i),
                  onClick: () => o(et(e, s)),
                  children: (0, Z.jsx)(nt, { image: e }),
                }),
              },
              e.file_id,
            );
          })),
      (t[57] = r),
      (t[58] = c),
      (t[59] = h),
      (t[60] = o),
      (t[61] = C),
      (t[62] = S),
      (t[63] = i),
      (t[64] = n),
      (t[65] = de))
    : (de = t[65]);
  let F;
  t[66] !== se ||
  t[67] !== w ||
  t[68] !== T ||
  t[69] !== E ||
  t[70] !== de ||
  t[71] !== O ||
  t[72] !== k ||
  t[73] !== A ||
  t[74] !== j ||
  t[75] !== N ||
  t[76] !== P
    ? ((F = (0, Z.jsxs)(se, {
        layout: O,
        ariaLabel: k,
        backLabel: A,
        forwardLabel: j,
        shouldUseReducedMotion: N,
        header: P,
        children: [w, T, E, de],
      })),
      (t[66] = se),
      (t[67] = w),
      (t[68] = T),
      (t[69] = E),
      (t[70] = de),
      (t[71] = O),
      (t[72] = k),
      (t[73] = A),
      (t[74] = j),
      (t[75] = N),
      (t[76] = P),
      (t[77] = F))
    : (F = t[77]);
  let I;
  t[78] !== p || t[79] !== v || t[80] !== ae
    ? ((I =
        p && v
          ? (0, Z.jsxs)(`div`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children: [
                (0, Z.jsx)(R, {
                  id: `images.preview.references.loadError`,
                  defaultMessage: `Saved references couldn't be loaded`,
                  description: `Error in the image template preview when loading saved reference images fails. The user can retry or upload a photo.`,
                }),
                (0, Z.jsx)(b, {
                  color: `ghostSecondary`,
                  onClick: () => void ae(),
                  children: (0, Z.jsx)(R, {
                    id: `images.preview.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry checking image generation and upload availability`,
                  }),
                }),
              ],
            })
          : null),
      (t[78] = p),
      (t[79] = v),
      (t[80] = ae),
      (t[81] = I))
    : (I = t[81]);
  let L;
  t[82] !== ne || t[83] !== re
    ? ((L = ne
        ? (0, Z.jsxs)(`div`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: [
              (0, Z.jsx)(R, {
                id: `images.reference.loadError`,
                defaultMessage: `Recent photos couldn't be loaded`,
                description: `Error above the recent reference-photo list on the Images page when fetching photo history fails. Uploading a new image remains available.`,
              }),
              (0, Z.jsx)(b, {
                color: `ghostSecondary`,
                onClick: () => void re(),
                children: (0, Z.jsx)(R, {
                  id: `images.reference.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading recent reference photos on the Images creation page`,
                }),
              }),
            ],
          })
        : null),
      (t[82] = ne),
      (t[83] = re),
      (t[84] = L))
    : (L = t[84]);
  let fe;
  t[85] === a
    ? (fe = t[86])
    : ((fe = (e) => {
        (a(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ``));
      }),
      (t[85] = a),
      (t[86] = fe));
  let z;
  t[87] !== fe || t[88] !== i
    ? ((z = (0, Z.jsx)(`input`, {
        ref: m,
        className: `hidden`,
        type: `file`,
        accept: `image/*`,
        multiple: !0,
        disabled: i,
        onChange: fe,
      })),
      (t[87] = fe),
      (t[88] = i),
      (t[89] = z))
    : (z = t[89]);
  let B;
  return (
    t[90] !== D || t[91] !== F || t[92] !== I || t[93] !== L || t[94] !== z
      ? ((B = (0, Z.jsxs)(`div`, { className: D, children: [F, I, L, z] })),
        (t[90] = D),
        (t[91] = F),
        (t[92] = I),
        (t[93] = L),
        (t[94] = z),
        (t[95] = B))
      : (B = t[95]),
    B
  );
}
function it(e) {
  return e.asset_pointer == null ? null : X(e.asset_pointer);
}
var at, ot, Z;
function st() {
  return (st = e(() => {
    ((at = te()),
      S(),
      V(),
      (ot = a()),
      y(),
      Qe(),
      Re(),
      xe(),
      x(),
      re(),
      G(),
      I(),
      Xe(),
      Je(),
      ze(),
      F(),
      q(),
      me(),
      tt(),
      (Z = l()));
  }))();
}
function ct(e) {
  let t = (0, dt.c)(116),
    {
      item: n,
      aspectRatio: a,
      onAspectRatioChange: o,
      subjects: c,
      status: l,
      disabled: f,
      needsPhoto: p,
      submitting: m,
      uploadDisabled: te,
      onFilesSelected: h,
      onClose: g,
      onSubmit: re,
    } = e,
    ie = p !== void 0 && p,
    _ = te !== void 0 && te,
    v = ue(),
    y = ce(ee),
    [oe] = (0, ft.useState)(ut),
    [x, S] = (0, ft.useState)(!1),
    [C, E] = (0, ft.useState)(!1),
    [D, k] = (0, ft.useState)(!1),
    A;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e, t) => {
        k(t.scrollHeight > t.clientHeight);
      }),
      (t[0] = A))
    : (A = t[0]);
  let j = w(A),
    M = (0, ft.useId)(),
    F;
  t[1] !== n.image_url || t[2] !== n.image_variant_urls || t[3] !== n.image_variants
    ? ((F = [n.image_url, ...(n.image_variant_urls ?? []), ...(n.image_variants ?? [])].find(lt)),
      (t[1] = n.image_url),
      (t[2] = n.image_variant_urls),
      (t[3] = n.image_variants),
      (t[4] = F))
    : (F = t[4]);
  let I = F,
    L;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = { value: `auto`, icon: (0, Q.jsx)(i, { asset: N }) }), (t[5] = L))
    : (L = t[5]);
  let z;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = { value: `1:1`, icon: (0, Q.jsx)(i, { asset: O }) }), (t[6] = z))
    : (z = t[6]);
  let B;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = { value: `2:3`, icon: (0, Q.jsx)(i, { asset: se }) }), (t[7] = B))
    : (B = t[7]);
  let me;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { value: `3:2`, icon: (0, Q.jsx)(i, { asset: fe }) }), (t[8] = me))
    : (me = t[8]);
  let he;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = { value: `16:9`, icon: (0, Q.jsx)(i, { asset: T }) }), (t[9] = he))
    : (he = t[9]);
  let V;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = [L, z, B, me, he, { value: `9:16`, icon: (0, Q.jsx)(i, { asset: P }) }]), (t[10] = V))
    : (V = t[10]);
  let ge = V,
    _e;
  t[11] === g
    ? (_e = t[12])
    : ((_e = (e) => {
        e || g();
      }),
      (t[11] = g),
      (t[12] = _e));
  let H;
  t[13] === oe
    ? (H = t[14])
    : ((H = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), oe instanceof HTMLElement && oe.isConnected && oe.focus());
        },
      }),
      (t[13] = oe),
      (t[14] = H));
  let ve;
  t[15] === h ? (ve = t[16]) : ((ve = h == null ? void 0 : (e) => h(e, `drop`)), (t[15] = h), (t[16] = ve));
  let U;
  t[17] !== h || t[18] !== _
    ? ((U = (e) => {
        e.clipboardData.files.length > 0 &&
          (e.preventDefault(), e.stopPropagation(), _ || h?.(Array.from(e.clipboardData.files), `paste`));
      }),
      (t[17] = h),
      (t[18] = _),
      (t[19] = U))
    : (U = t[19]);
  let W;
  t[20] !== f || t[21] !== re || t[22] !== m
    ? ((W = (e) => {
        (e.preventDefault(), !f && !m && re());
      }),
      (t[20] = f),
      (t[21] = re),
      (t[22] = m),
      (t[23] = W))
    : (W = t[23]);
  let G;
  t[24] !== x || t[25] !== I || t[26] !== n.image_alt || t[27] !== n.title
    ? ((G = (0, Q.jsx)(`div`, {
        className: `flex min-h-0 shrink-0 items-center justify-center bg-surface-secondary p-4 md:col-span-3 md:p-6`,
        children:
          I && !x
            ? (0, Q.jsx)(`img`, {
                className: `aspect-square max-h-64 w-auto max-w-full object-cover object-center md:max-h-full`,
                src: I,
                alt: n.image_alt ?? n.title,
                draggable: !1,
                onError: () => S(!0),
              })
            : (0, Q.jsxs)(`div`, {
                className: `flex aspect-square max-h-64 w-full items-center justify-center gap-2 text-secondary md:max-h-none`,
                children: [
                  (0, Q.jsx)(pe, {}),
                  (0, Q.jsx)(R, {
                    id: `images.preview.imageUnavailable`,
                    defaultMessage: `Preview unavailable`,
                    description: `Fallback shown when the example artwork for an image prompt cannot be displayed; the prompt can still be used`,
                  }),
                ],
              }),
      })),
      (t[24] = x),
      (t[25] = I),
      (t[26] = n.image_alt),
      (t[27] = n.title),
      (t[28] = G))
    : (G = t[28]);
  let ye;
  t[29] === n.title
    ? (ye = t[30])
    : ((ye = (0, Q.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, Q.jsx)(ne, { title: (0, Q.jsx)(de, { children: n.title }) }),
      })),
      (t[29] = n.title),
      (t[30] = ye));
  let be;
  t[31] === v
    ? (be = t[32])
    : ((be = v.formatMessage({
        id: `codex.dialog.closeButton`,
        defaultMessage: `Close dialog`,
        description: `Accessible label for the button that closes a dialog`,
      })),
      (t[31] = v),
      (t[32] = be));
  let xe;
  t[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((xe = (0, Q.jsx)(r, {})), (t[33] = xe)) : (xe = t[33]);
  let Se;
  t[34] !== g || t[35] !== be
    ? ((Se = (0, Q.jsx)(b, {
        color: `ghost`,
        size: `iconCircle`,
        "aria-label": be,
        onClick: g,
        children: xe,
      })),
      (t[34] = g),
      (t[35] = be),
      (t[36] = Se))
    : (Se = t[36]);
  let K;
  t[37] !== ye || t[38] !== Se
    ? ((K = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3 px-5 pt-2 pb-2 md:pt-5`,
        children: [ye, Se],
      })),
      (t[37] = ye),
      (t[38] = Se),
      (t[39] = K))
    : (K = t[39]);
  let Ce = !C && `line-clamp-4`,
    we;
  t[40] === Ce
    ? (we = t[41])
    : ((we = d(`text-sm whitespace-pre-wrap text-secondary select-text`, Ce)), (t[40] = Ce), (t[41] = we));
  let Te;
  t[42] !== n.prompt_text || t[43] !== M || t[44] !== j || t[45] !== we
    ? ((Te = (0, Q.jsx)(`p`, { id: M, ref: j, className: we, children: n.prompt_text })),
      (t[42] = n.prompt_text),
      (t[43] = M),
      (t[44] = j),
      (t[45] = we),
      (t[46] = Te))
    : (Te = t[46]);
  let Ee;
  t[47] !== C || t[48] !== M || t[49] !== D
    ? ((Ee =
        C || D
          ? (0, Q.jsxs)(`div`, {
              className: d(
                `flex items-baseline justify-end gap-1 text-sm`,
                C ? `mt-1` : `absolute end-0 bottom-0 bg-surface ps-1`,
              ),
              children: [
                C
                  ? null
                  : (0, Q.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `text-secondary select-none`,
                      children: (0, Q.jsx)(R, {
                        id: `images.preview.truncationMarker`,
                        defaultMessage: `…`,
                        description: `Ellipsis marking omitted image prompt text before the See more control`,
                      }),
                    }),
                (0, Q.jsx)(b, {
                  color: `ghostActive`,
                  size: `inline`,
                  "aria-expanded": C,
                  "aria-controls": M,
                  onClick: () => E(!C),
                  children: (0, Q.jsx)(`span`, {
                    className: `text-sm font-medium`,
                    children: C
                      ? (0, Q.jsx)(R, {
                          id: `images.preview.seeLess`,
                          defaultMessage: `See less`,
                          description: `Collapse the image prompt back to its short preview`,
                        })
                      : (0, Q.jsx)(R, {
                          id: `images.preview.seeMore`,
                          defaultMessage: `See more`,
                          description: `Expand the preview to read the full image prompt`,
                        }),
                  }),
                }),
              ],
            })
          : null),
      (t[47] = C),
      (t[48] = M),
      (t[49] = D),
      (t[50] = Ee))
    : (Ee = t[50]);
  let De;
  t[51] !== Te || t[52] !== Ee
    ? ((De = (0, Q.jsxs)(`section`, { className: `relative`, children: [Te, Ee] })),
      (t[51] = Te),
      (t[52] = Ee),
      (t[53] = De))
    : (De = t[53]);
  let Oe;
  t[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, Q.jsx)(R, {
          id: `images.preview.aspectRatio`,
          defaultMessage: `Aspect ratio`,
          description: `Label for the output image proportions selector`,
        }),
      })),
      (t[54] = Oe))
    : (Oe = t[54]);
  let q;
  t[55] === v
    ? (q = t[56])
    : ((q = v.formatMessage({
        id: `images.preview.aspectRatio`,
        defaultMessage: `Aspect ratio`,
        description: `Label for the output image proportions selector`,
      })),
      (t[55] = v),
      (t[56] = q));
  let ke;
  t[57] === v
    ? (ke = t[58])
    : ((ke = v.formatMessage({
        id: `images.preview.previousRatios`,
        defaultMessage: `Previous aspect ratios`,
        description: `Scroll to the previous output proportions in the image prompt preview`,
      })),
      (t[57] = v),
      (t[58] = ke));
  let Ae;
  t[59] === v
    ? (Ae = t[60])
    : ((Ae = v.formatMessage({
        id: `images.preview.nextRatios`,
        defaultMessage: `Next aspect ratios`,
        description: `Scroll to the next output proportions in the image prompt preview`,
      })),
      (t[59] = v),
      (t[60] = Ae));
  let je;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, Q.jsx)(`span`, {
        className: `text-sm text-secondary select-none`,
        children: (0, Q.jsx)(R, {
          id: `images.preview.aspectRatio`,
          defaultMessage: `Aspect ratio`,
          description: `Label for the output image proportions selector`,
        }),
      })),
      (t[61] = je))
    : (je = t[61]);
  let Me;
  t[62] !== a || t[63] !== o
    ? ((Me = ge.map((e) =>
        (0, Q.jsxs)(
          b,
          {
            className: `w-16 shrink-0`,
            color: `selectionTile`,
            size: `selectionTile`,
            "aria-pressed": a === e.value,
            onClick: () => o(e.value),
            children: [
              e.icon,
              e.value === `auto`
                ? (0, Q.jsx)(R, {
                    id: `images.preview.ratioAuto`,
                    defaultMessage: `Auto`,
                    description: `Aspect ratio option that lets the image prompt choose the output proportions`,
                  })
                : e.value,
            ],
          },
          e.value,
        ),
      )),
      (t[62] = a),
      (t[63] = o),
      (t[64] = Me))
    : (Me = t[64]);
  let J;
  t[65] !== y || t[66] !== q || t[67] !== ke || t[68] !== Ae || t[69] !== Me
    ? ((J = (0, Q.jsx)(Ze, {
        layout: `compact`,
        ariaLabel: q,
        backLabel: ke,
        forwardLabel: Ae,
        shouldUseReducedMotion: y,
        header: je,
        children: Me,
      })),
      (t[65] = y),
      (t[66] = q),
      (t[67] = ke),
      (t[68] = Ae),
      (t[69] = Me),
      (t[70] = J))
    : (J = t[70]);
  let Ne;
  t[71] !== m || t[72] !== J
    ? ((Ne = (0, Q.jsxs)(`fieldset`, { className: `min-w-0`, disabled: m, children: [Oe, J] })),
      (t[71] = m),
      (t[72] = J),
      (t[73] = Ne))
    : (Ne = t[73]);
  let Y;
  t[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, Q.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, Q.jsx)(R, {
          id: `images.preview.photos`,
          defaultMessage: `Photos`,
          description: `Accessible label for recently uploaded images and saved subjects or references in the image template preview`,
        }),
      })),
      (t[74] = Y))
    : (Y = t[74]);
  let Pe;
  t[75] !== c || t[76] !== m
    ? ((Pe = (0, Q.jsxs)(`fieldset`, { className: `min-w-0`, disabled: m, children: [Y, c] })),
      (t[75] = c),
      (t[76] = m),
      (t[77] = Pe))
    : (Pe = t[77]);
  let Fe;
  t[78] !== Ne || t[79] !== Pe
    ? ((Fe = (0, Q.jsxs)(`section`, { className: `flex flex-col gap-3 pt-2`, children: [Ne, Pe] })),
      (t[78] = Ne),
      (t[79] = Pe),
      (t[80] = Fe))
    : (Fe = t[80]);
  let Ie;
  t[81] !== De || t[82] !== Fe
    ? ((Ie = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-4 px-6 md:min-h-0 md:flex-1 md:overflow-y-auto`,
        children: [De, Fe],
      })),
      (t[81] = De),
      (t[82] = Fe),
      (t[83] = Ie))
    : (Ie = t[83]);
  let Le;
  t[84] === l
    ? (Le = t[85])
    : ((Le =
        l == null
          ? null
          : (0, Q.jsx)(`div`, { className: `min-w-0 flex-1 text-sm text-secondary`, children: l })),
      (t[84] = l),
      (t[85] = Le));
  let X = !ie || m,
    Re;
  t[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, Q.jsx)(R, {
        id: `images.preview.addPhotoToTry`,
        defaultMessage: `Add a photo to try it`,
        description: `Tooltip on the disabled Try it button when a reference photo is needed. The user can upload a photo or select one from their library.`,
      })),
      (t[86] = Re))
    : (Re = t[86]);
  let ze = f || m,
    Be;
  t[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(R, {
        id: `images.preview.tryIt`,
        defaultMessage: `Try it`,
        description: `Primary action that generates an image using the previewed prompt and the selected customizations`,
      })),
      (t[87] = Be))
    : (Be = t[87]);
  let He;
  t[88] !== m || t[89] !== ze
    ? ((He = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(b, {
          type: `submit`,
          color: `chatgptPrimary`,
          size: `dialogAction`,
          disabled: ze,
          loading: m,
          children: Be,
        }),
      })),
      (t[88] = m),
      (t[89] = ze),
      (t[90] = He))
    : (He = t[90]);
  let Ue;
  t[91] !== X || t[92] !== He
    ? ((Ue = (0, Q.jsx)(le, { disabled: X, tooltipContent: Re, children: He })),
      (t[91] = X),
      (t[92] = He),
      (t[93] = Ue))
    : (Ue = t[93]);
  let We;
  t[94] !== Le || t[95] !== Ue
    ? ((We = (0, Q.jsx)(`div`, {
        className: `sticky bottom-0 shrink-0 bg-surface px-4 py-4`,
        children: (0, Q.jsxs)(u, { expandSingleButton: !1, children: [Le, Ue] }),
      })),
      (t[94] = Le),
      (t[95] = Ue),
      (t[96] = We))
    : (We = t[96]);
  let Ge;
  t[97] !== K || t[98] !== Ie || t[99] !== We
    ? ((Ge = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 shrink-0 flex-col md:col-span-2 md:border-l md:border-default`,
        children: [K, Ie, We],
      })),
      (t[97] = K),
      (t[98] = Ie),
      (t[99] = We),
      (t[100] = Ge))
    : (Ge = t[100]);
  let Ke;
  t[101] !== G || t[102] !== Ge
    ? ((Ke = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-col overflow-y-auto md:grid md:grid-cols-5 md:grid-rows-1 md:overflow-hidden`,
        children: [G, Ge],
      })),
      (t[101] = G),
      (t[102] = Ge),
      (t[103] = Ke))
    : (Ke = t[103]);
  let qe;
  t[104] !== U || t[105] !== W || t[106] !== Ke
    ? ((qe = (0, Q.jsx)(s, {
        as: `form`,
        size: `viewport`,
        variant: `chatgpt`,
        onPaste: U,
        onSubmit: W,
        children: Ke,
      })),
      (t[104] = U),
      (t[105] = W),
      (t[106] = Ke),
      (t[107] = qe))
    : (qe = t[107]);
  let Je;
  t[108] !== ve || t[109] !== qe || t[110] !== _
    ? ((Je = (0, Q.jsx)(Ve, { disabled: _, onFilesDropped: ve, children: qe })),
      (t[108] = ve),
      (t[109] = qe),
      (t[110] = _),
      (t[111] = Je))
    : (Je = t[111]);
  let Ye;
  return (
    t[112] !== _e || t[113] !== H || t[114] !== Je
      ? ((Ye = (0, Q.jsx)(ae, {
          open: !0,
          variant: `mediaDetail`,
          size: `xxwide`,
          showDialogClose: !1,
          onOpenChange: _e,
          contentProps: H,
          children: Je,
        })),
        (t[112] = _e),
        (t[113] = H),
        (t[114] = Je),
        (t[115] = Ye))
      : (Ye = t[115]),
    Ye
  );
}
function lt(e) {
  return e?.trim();
}
function ut() {
  return document.activeElement;
}
var dt, ft, Q;
function pt() {
  return (pt = e(() => {
    ((dt = te()),
      D(),
      j(),
      E(),
      A(),
      L(),
      C(),
      f(),
      S(),
      (ft = a()),
      y(),
      Ye(),
      x(),
      c(),
      o(),
      m(),
      re(),
      I(),
      Xe(),
      k(),
      F(),
      (Q = l()));
  }))();
}
function mt(e) {
  let n = (0, bt.c)(118),
    {
      item: r,
      group: i,
      conversationId: a,
      accountId: o,
      userId: s,
      logPromptSent: c,
      disabled: ee,
      signal: l,
      onClose: u,
      onRequestStarted: d,
      onSubmitAccepted: f,
    } = e,
    p = t(h),
    m = ue(),
    te = ie(),
    ne = (0, xt.useRef)(!1),
    [g, re] = (0, xt.useState)(!1),
    [_, ae] = (0, xt.useState)(!1),
    [y, oe] = (0, xt.useState)(!1),
    [x, S] = (0, xt.useState)(`auto`),
    C = M(Ee, a),
    se = M(De, a),
    w = M(ve, a),
    T;
  n[0] === r ? (T = n[1]) : ((T = be(r, [`picture_v2`])), (n[0] = r), (n[1] = T));
  let E = T,
    D;
  n[2] !== w.slug || n[3] !== a || n[4] !== E
    ? ((D = {
        clientConversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        requestedDefaultModel: w.slug,
        serverConversationId: null,
        systemHints: E,
      }),
      (n[2] = w.slug),
      (n[3] = a),
      (n[4] = E),
      (n[5] = D))
    : (D = n[5]);
  let O = D,
    ce;
  n[6] !== O || n[7] !== a
    ? ((ce = {
        conversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        hasModelGizmoOverride: !1,
        hasSavedModelGizmoOverride: !1,
        conversationDetailsTarget: O,
      }),
      (n[6] = O),
      (n[7] = a),
      (n[8] = ce))
    : (ce = n[8]);
  let { selectedModel: k, rateLimitState: A, savedModelPending: j } = M(Te, ce),
    { isPending: le, isError: N, refetch: P } = M(Ne, O),
    de;
  n[9] !== o || n[10] !== a || n[11] !== k.slug || n[12] !== E
    ? ((de = {
        accountId: o,
        conversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        model: k.slug,
        serverConversationId: null,
        systemHints: E,
      }),
      (n[9] = o),
      (n[10] = a),
      (n[11] = k.slug),
      (n[12] = E),
      (n[13] = de))
    : (de = n[13]);
  let F = de,
    { data: I } = M(je, F),
    { isError: L, refetch: fe } = M(ke, F),
    pe = r.action ?? i.action,
    B = pe.input_requirements,
    me = B?.min_count ?? +(B?.source != null && B.source !== `prompt_only`),
    he;
  n[14] === p ? (he = n[15]) : ((he = Ie(p)), (n[14] = p), (n[15] = he));
  let V = Math.min(B?.max_count ?? 1 / 0, he),
    ge;
  n[16] === C ? (ge = n[17]) : ((ge = C.filter(Oe)), (n[16] = C), (n[17] = ge));
  let H = ge,
    U;
  n[18] === C ? (U = n[19]) : ((U = C.some(yt)), (n[18] = C), (n[19] = U));
  let W = U,
    G;
  n[20] === C ? (G = n[21]) : ((G = C.some(vt)), (n[20] = C), (n[21] = G));
  let xe = G,
    K = A.sendBlocked || A.imageGenerationBlocked,
    Ce = ee || le || N || j || K,
    q = Ce || W || xe || H.length < me || H.length > V,
    Ae;
  n[22] !== V || n[23] !== I || n[24] !== C.length
    ? ((Ae = we({ currentAttachmentCount: C.length, requestedFileCount: 1, maxUploads: V, metadata: I })),
      (n[22] = V),
      (n[23] = I),
      (n[24] = C.length),
      (n[25] = Ae))
    : (Ae = n[25]);
  let J = Ae,
    Y = ee || g || I == null || J.acceptedCount === 0,
    Pe;
  n[26] !== o || n[27] !== p || n[28] !== l.aborted || n[29] !== s
    ? ((Pe = function () {
        return !l.aborted && p.get(Le) === o && p.get(z) === s;
      }),
      (n[26] = o),
      (n[27] = p),
      (n[28] = l.aborted),
      (n[29] = s),
      (n[30] = Pe))
    : (Pe = n[30]);
  let X = Pe,
    Re;
  n[31] !== a || n[32] !== F || n[33] !== X || n[34] !== V || n[35] !== d || n[36] !== p || n[37] !== Y
    ? ((Re = function (e, t) {
        let n = t === void 0 ? Se.CHATGPT_FILE_SELECTION_SOURCE_MOUSE : t;
        if (Y || ne.current || !X()) return;
        let r = p.get(Ee, a),
          i = e.filter(_t).slice(0, Math.max(0, V - r.length));
        (oe(i.length !== e.length),
          ye(p, a, null),
          d(
            Me(p, a, i, {
              fileUploadLimitsQueryKey: F,
              gizmoId: null,
              selection: { source: n, recorded: !1 },
            }),
          ));
      }),
      (n[31] = a),
      (n[32] = F),
      (n[33] = X),
      (n[34] = V),
      (n[35] = d),
      (n[36] = p),
      (n[37] = Y),
      (n[38] = Re))
    : (Re = n[38]);
  let ze = Re,
    Be;
  n[39] !== a || n[40] !== X || n[41] !== p
    ? ((Be = function (e) {
        X() && !ne.current && (_e(p, a, e, `chat`), oe(!1), ye(p, a, null));
      }),
      (n[39] = a),
      (n[40] = X),
      (n[41] = p),
      (n[42] = Be))
    : (Be = n[42]);
  let Ve = Be,
    Ue;
  n[43] !== a || n[44] !== X || n[45] !== V || n[46] !== I || n[47] !== Ve || n[48] !== p || n[49] !== Y
    ? ((Ue = function (e, t) {
        let n = t === void 0 ? `toggle` : t;
        if (!X() || ne.current) return;
        let r = p.get(Ee, a),
          i = r.find((t) => t.status === `ready` && t.id === e.id);
        if (i != null) {
          n === `toggle` && Ve(i.uploadId);
          return;
        }
        Y ||
          we({ currentAttachmentCount: r.length, requestedFileCount: 1, maxUploads: V, metadata: I })
            .acceptedCount === 0 ||
          (p.set(Ee, a, () => [
            ...r,
            { ...e, uploadId: `image-reference:${e.id}:${crypto.randomUUID()}`, status: `ready` },
          ]),
          oe(!1),
          ye(p, a, null));
      }),
      (n[43] = a),
      (n[44] = X),
      (n[45] = V),
      (n[46] = I),
      (n[47] = Ve),
      (n[48] = p),
      (n[49] = Y),
      (n[50] = Ue))
    : (Ue = n[50]);
  let We = Ue,
    Ke;
  n[51] !== pe.strategy ||
  n[52] !== x ||
  n[53] !== q ||
  n[54] !== a ||
  n[55] !== i ||
  n[56] !== m ||
  n[57] !== X ||
  n[58] !== r ||
  n[59] !== c ||
  n[60] !== te ||
  n[61] !== d ||
  n[62] !== f ||
  n[63] !== H ||
  n[64] !== B?.source ||
  n[65] !== p ||
  n[66] !== k ||
  n[67] !== l ||
  n[68] !== E
    ? ((Ke = async function () {
        if (!X() || q || ne.current) return;
        ((ne.current = !0), re(!0), ae(!1));
        let e = crypto.randomUUID();
        try {
          let t = He(p, {
            conversationId: a,
            selectedModel: k,
            prompt:
              x === `auto`
                ? r.prompt_text
                : `${r.prompt_text}\n\n${m.formatMessage({ id: `images.preview.aspectRatioInstruction`, defaultMessage: `Output aspect ratio: {aspectRatio}. Use this output ratio instead of any conflicting aspect ratio or framing instruction above.`, description: `Instruction appended to the submitted image prompt to apply the user's chosen output proportions, overriding conflicting proportions in the original prompt.` }, { aspectRatio: x })}`,
            systemHints: E,
            draft: { kind: `current`, fileUploadIds: H.map(gt) },
            turnAttribution: { turn_trigger: `composer` },
            messageMetadata: {
              image_feature: `prompt`,
              image_prompt_id: r.id,
              image_prompt_group_id: i.id,
              image_prompt_group_presentation: i.presentation,
              image_send_uuid: e,
            },
            signal: l,
            isSubmissionCurrent: X,
            isRequestCurrent: X,
            requireDispatchAcceptance: !0,
            submitErrorFallback: m.formatMessage({
              id: `images.preview.sendError`,
              defaultMessage: `Couldn't start your image. Try again`,
              description: `Error when submitting a configured image prompt fails; the user's choices are kept for retry`,
            }),
            onSubmitAccepted: () => {
              X() &&
                ((c ||
                  (B?.source === `styles` && (pe.strategy ?? `auto_send`) === `auto_send`) ||
                  (E.length === 1 && E[0] === `picture_v2`)) &&
                  Ge(p, r, i, e, `images`, {
                    aspectRatio: x,
                    imageUploadCount: H.length,
                    referenceImageCount: H.filter(ht).length,
                    promptPresentation: `suggestions_modal`,
                  }),
                Fe(p, a),
                ye(p, a, null),
                f(),
                te(v(a)));
            },
          });
          (d(t), !(await t) && X() && (ae(!0), re(!1)));
        } catch {
          X() && (ae(!0), re(!1));
        }
        ne.current = !1;
      }),
      (n[51] = pe.strategy),
      (n[52] = x),
      (n[53] = q),
      (n[54] = a),
      (n[55] = i),
      (n[56] = m),
      (n[57] = X),
      (n[58] = r),
      (n[59] = c),
      (n[60] = te),
      (n[61] = d),
      (n[62] = f),
      (n[63] = H),
      (n[64] = B?.source),
      (n[65] = p),
      (n[66] = k),
      (n[67] = l),
      (n[68] = E),
      (n[69] = Ke))
    : (Ke = n[69]);
  let qe = Ke,
    Je = !Ce && !Y && !W && !xe && H.length < me,
    Ye;
  n[70] === ze
    ? (Ye = n[71])
    : ((Ye = (e, t) =>
        ze(
          e,
          t === `paste` ? Se.CHATGPT_FILE_SELECTION_SOURCE_PASTE : Se.CHATGPT_FILE_SELECTION_SOURCE_DRAG,
        )),
      (n[70] = ze),
      (n[71] = Ye));
  let Xe;
  n[72] === qe ? (Xe = n[73]) : ((Xe = () => void qe()), (n[72] = qe), (n[73] = Xe));
  let Ze;
  n[74] !== ze || n[75] !== Ve || n[76] !== We || n[77] !== g || n[78] !== Y || n[79] !== C
    ? ((Ze = (0, $.jsx)(rt, {
        uploads: C,
        disabled: g,
        uploadDisabled: Y,
        onAddPhotos: ze,
        onSelectPhoto: We,
        onRemovePhoto: Ve,
      })),
      (n[74] = ze),
      (n[75] = Ve),
      (n[76] = We),
      (n[77] = g),
      (n[78] = Y),
      (n[79] = C),
      (n[80] = Ze))
    : (Ze = n[80]);
  let Qe;
  n[81] !== N || n[82] !== P || n[83] !== fe || n[84] !== L
    ? ((Qe =
        N || L
          ? (0, $.jsxs)(`div`, {
              role: `alert`,
              children: [
                (0, $.jsx)(R, {
                  id: `images.preview.availabilityError`,
                  defaultMessage: `Couldn't check availability`,
                  description: `Error when checking image generation or photo upload availability`,
                }),
                (0, $.jsx)(b, {
                  color: `ghostSecondary`,
                  onClick: () => {
                    (P(), fe());
                  },
                  children: (0, $.jsx)(R, {
                    id: `images.preview.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry checking image generation and upload availability`,
                  }),
                }),
              ],
            })
          : null),
      (n[81] = N),
      (n[82] = P),
      (n[83] = fe),
      (n[84] = L),
      (n[85] = Qe))
    : (Qe = n[85]);
  let $e;
  n[86] === K
    ? ($e = n[87])
    : (($e = K
        ? (0, $.jsx)(R, {
            id: `images.preview.rateLimited`,
            defaultMessage: `Image creation is currently unavailable. Please try again later`,
            description: `Guidance when the current account or model cannot generate an image because of a usage limit`,
          })
        : null),
      (n[86] = K),
      (n[87] = $e));
  let et;
  n[88] === J.banner?.kind
    ? (et = n[89])
    : ((et =
        J.banner?.kind === `daily`
          ? (0, $.jsx)(R, {
              id: `images.preview.photoLimitReached`,
              defaultMessage: `You've reached your photo limit. Try again later`,
              description: `Explains why adding a reference photo is disabled after reaching the account's file attachment limit`,
            })
          : null),
      (n[88] = J.banner?.kind),
      (n[89] = et));
  let tt;
  n[90] === W
    ? (tt = n[91])
    : ((tt = W
        ? (0, $.jsx)(R, {
            id: `images.preview.uploading`,
            defaultMessage: `Uploading photos…`,
            description: `Status while reference photos are uploading before image generation can start`,
          })
        : null),
      (n[90] = W),
      (n[91] = tt));
  let nt;
  n[92] !== y || n[93] !== xe || n[94] !== J.banner?.kind || n[95] !== se
    ? ((nt =
        y || xe || (se != null && J.banner?.kind !== `daily`)
          ? (0, $.jsx)(`span`, {
              role: `alert`,
              children: (0, $.jsx)(R, {
                id: `images.preview.uploadError`,
                defaultMessage: `Couldn't add all photos. Remove any failed upload and add it again`,
                description: `Explains how to recover when a reference photo cannot be uploaded or exceeds the prompt's photo limit`,
              }),
            })
          : null),
      (n[92] = y),
      (n[93] = xe),
      (n[94] = J.banner?.kind),
      (n[95] = se),
      (n[96] = nt))
    : (nt = n[96]);
  let it;
  n[97] === _
    ? (it = n[98])
    : ((it = _
        ? (0, $.jsx)(`span`, {
            role: `alert`,
            children: (0, $.jsx)(R, {
              id: `images.preview.sendError`,
              defaultMessage: `Couldn't start your image. Try again`,
              description: `Error when submitting a configured image prompt fails; the user's choices are kept for retry`,
            }),
          })
        : null),
      (n[97] = _),
      (n[98] = it));
  let at;
  n[99] !== Qe || n[100] !== $e || n[101] !== et || n[102] !== tt || n[103] !== nt || n[104] !== it
    ? ((at = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2 text-sm text-secondary`,
        "aria-live": `polite`,
        children: [Qe, $e, et, tt, nt, it],
      })),
      (n[99] = Qe),
      (n[100] = $e),
      (n[101] = et),
      (n[102] = tt),
      (n[103] = nt),
      (n[104] = it),
      (n[105] = at))
    : (at = n[105]);
  let ot;
  return (
    n[106] !== x ||
    n[107] !== q ||
    n[108] !== r ||
    n[109] !== u ||
    n[110] !== g ||
    n[111] !== Je ||
    n[112] !== Ye ||
    n[113] !== Xe ||
    n[114] !== Ze ||
    n[115] !== at ||
    n[116] !== Y
      ? ((ot = (0, $.jsx)(ct, {
          item: r,
          aspectRatio: x,
          onAspectRatioChange: S,
          disabled: q,
          needsPhoto: Je,
          submitting: g,
          uploadDisabled: Y,
          onFilesSelected: Ye,
          onClose: u,
          onSubmit: Xe,
          subjects: Ze,
          status: at,
        })),
        (n[106] = x),
        (n[107] = q),
        (n[108] = r),
        (n[109] = u),
        (n[110] = g),
        (n[111] = Je),
        (n[112] = Ye),
        (n[113] = Xe),
        (n[114] = Ze),
        (n[115] = at),
        (n[116] = Y),
        (n[117] = ot))
      : (ot = n[117]),
    ot
  );
}
function ht(e) {
  return e.status === `ready` && e.referenceImageId != null;
}
function gt(e) {
  return e.uploadId;
}
function _t(e) {
  return e.type.startsWith(`image/`);
}
function vt(e) {
  return e.status === `error`;
}
function yt(e) {
  return e.status === `uploading`;
}
var bt, xt, $;
function St() {
  return (St = e(() => {
    ((bt = te()),
      Ce(),
      S(),
      (xt = a()),
      y(),
      p(),
      Y(),
      Pe(),
      Ae(),
      he(),
      qe(),
      J(),
      Ke(),
      B(),
      H(),
      _(),
      x(),
      n(),
      st(),
      pt(),
      ($ = l()));
  }))();
}
St();
export { mt as ImagePromptPreviewDialog };
//# sourceMappingURL=dialog-4a53a6345709.js.map
