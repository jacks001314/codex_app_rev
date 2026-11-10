import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $R as n,
  $i as r,
  CJ as i,
  Cat as a,
  Cot as o,
  DG as s,
  Ext as c,
  FD as l,
  Gi as u,
  IDt as d,
  Ixt as f,
  Ji as p,
  Ki as m,
  Mz as h,
  ND as g,
  Nz as _,
  Pxt as ee,
  QG as v,
  QR as y,
  Qi as b,
  SJ as te,
  TJ as ne,
  VDt as re,
  Vxt as ie,
  Xi as ae,
  Yi as oe,
  Zi as se,
  _Mt as ce,
  _O as x,
  _xt as S,
  cO as le,
  cz as C,
  ea as w,
  fO as T,
  gMt as E,
  jDt as D,
  mO as O,
  na as k,
  oO as ue,
  qi as de,
  sO as A,
  sz as fe,
  t3 as j,
  ta as M,
  vO as N,
  vzt as P,
  wot as F,
  xMt as I,
  xat as L,
  yzt as R,
  zxt as z,
} from "./app-shared-bbfeca5e5737.js";
import {
  C2t as B,
  GMr as pe,
  JVn as me,
  MUn as he,
  NNn as ge,
  Onn as _e,
  PUn as V,
  S2t as ve,
  SNn as ye,
  VKn as be,
  XMn as xe,
  XMr as Se,
  XVn as Ce,
  ZVn as we,
  aHn as Te,
  cNn as Ee,
  eHn as De,
  fJn as H,
  hHn as Oe,
  hJn as U,
  iHn as ke,
  knn as W,
  nEt as Ae,
  nHn as je,
  nT as G,
  o2t as Me,
  oT as Ne,
  rT as Pe,
  s2t as K,
  sHn as Fe,
  sT as Ie,
  tEt as q,
  tNr as J,
  w2t as Le,
  xNn as Y,
  zKn as Re,
} from "./app-initial-5851df3f6cb1.js";
import {
  br as X,
  bt as ze,
  ea as Be,
  eo as Ve,
  ji as He,
  ki as Ue,
  mr as We,
  pr as Ge,
  ta as Ke,
  to as qe,
  yr as Je,
  yt as Ye,
} from "./app-primary-fe8a450b3b04.js";
import { n as Xe, t as Ze } from "./option-carousel-e5b5a4ffecb9.js";
import { n as Qe, r as $e, t as et } from "./recent-uploads-106733e87eb0.js";
import { r as tt, t as nt } from "./uploads-integration-rail-f6f356f973d9.js";
function rt(e) {
  let r = (0, at.c)(96),
    { uploads: i, disabled: a, uploadDisabled: o, onAddPhotos: c, onSelectPhoto: l, onRemovePhoto: u } = e,
    f = re(),
    p = Pe(),
    m;
  r[0] !== f || r[1] !== p || r[2] !== l
    ? ((m = (e, t) => {
        let n = t === void 0 ? `toggle` : t;
        if (!p() || e.asset_pointer == null) return;
        let r = H(e.asset_pointer);
        r != null &&
          l(
            {
              id: r,
              name: e.entity_type === `self` ? f.formatMessage(X.entitySelf) : e.entity_name,
              imageReference: !0,
              mimeType: null,
              source: `library`,
            },
            n,
          );
      }),
      (r[0] = f),
      (r[1] = p),
      (r[2] = l),
      (r[3] = m))
    : (m = r[3]);
  let h = Ie(m),
    g = ie(n),
    _ = ie(qe),
    ee = (0, ot.useRef)(null),
    { data: y, isPending: b, isError: ne, refetch: ae } = z($e, !0),
    oe;
  r[4] === _ ? (oe = r[5]) : ((oe = { enabled: _ }), (r[4] = _), (r[5] = oe));
  let { data: se, isError: ce, refetch: x } = ie(Ge, oe),
    S = _ ? se : void 0,
    le;
  r[6] === S ? (le = r[7]) : ((le = new Set(S?.map(it))), (r[6] = S), (r[7] = le));
  let C = le,
    w = y?.items,
    T,
    E,
    D,
    O,
    k,
    ue,
    de,
    A,
    j,
    M,
    N;
  if (
    r[8] !== a ||
    r[9] !== f ||
    r[10] !== u ||
    r[11] !== w ||
    r[12] !== C ||
    r[13] !== S ||
    r[14] !== h ||
    r[15] !== g ||
    r[16] !== o ||
    r[17] !== i
  ) {
    let e;
    r[29] !== w || r[30] !== C
      ? ((e = (e) => e.status !== `ready` || (!C.has(e.id) && !w?.some((t) => t.file_id === e.id))),
        (r[29] = w),
        (r[30] = C),
        (r[31] = e))
      : (e = r[31]);
    let n = i.filter(e);
    ((k = `flex w-full min-w-0 flex-col gap-3`),
      (T = Ze),
      (ue = `compact`),
      r[32] === f
        ? (de = r[33])
        : ((de = f.formatMessage({
            id: `images.preview.suggestedImages`,
            defaultMessage: `Suggested images`,
            description: `Label for saved reference images and recent uploads suggested for use in the image template preview`,
          })),
          (r[32] = f),
          (r[33] = de)),
      r[34] === f
        ? (A = r[35])
        : ((A = f.formatMessage({
            id: `images.preview.suggestedImages.previous`,
            defaultMessage: `Previous suggested images`,
            description: `Scroll to the previous suggested reference images or uploads in the image template preview`,
          })),
          (r[34] = f),
          (r[35] = A)),
      r[36] === f
        ? (j = r[37])
        : ((j = f.formatMessage({
            id: `images.preview.suggestedImages.next`,
            defaultMessage: `Next suggested images`,
            description: `Scroll to the next suggested reference images or uploads in the image template preview`,
          })),
          (r[36] = f),
          (r[37] = j)),
      (M = g),
      r[38] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = (0, Z.jsx)(`span`, {
            className: `text-sm text-secondary select-none`,
            children: (0, Z.jsx)(d, {
              id: `images.preview.suggestedImages`,
              defaultMessage: `Suggested images`,
              description: `Label for saved reference images and recent uploads suggested for use in the image template preview`,
            }),
          })),
          (r[38] = N))
        : (N = r[38]));
    let c;
    r[39] === f
      ? (c = r[40])
      : ((c = f.formatMessage({
          id: `images.reference.upload`,
          defaultMessage: `Upload a photo`,
          description: `Button to choose a new reference photo from the device for image creation`,
        })),
        (r[39] = f),
        (r[40] = c));
    let l, p;
    (r[41] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = () => ee.current?.click()), (p = (0, Z.jsx)(v, {})), (r[41] = l), (r[42] = p))
      : ((l = r[41]), (p = r[42])),
      r[43] !== c || r[44] !== o
        ? ((E = (0, Z.jsx)(`div`, {
            className: `w-16 shrink-0`,
            children: (0, Z.jsx)(t, {
              color: `selectionTile`,
              size: `imageTile`,
              "aria-label": c,
              disabled: o,
              onClick: l,
              children: p,
            }),
          })),
          (r[43] = c),
          (r[44] = o),
          (r[45] = E))
        : (E = r[45]),
      r[46] !== a || r[47] !== f || r[48] !== S || r[49] !== h || r[50] !== o || r[51] !== i
        ? ((D = S?.map((e) => {
            let n = e.asset_pointer == null ? null : H(e.asset_pointer),
              r = i.some((e) => e.status === `ready` && e.id === n),
              s = e.entity_type === `self` ? f.formatMessage(X.entitySelf) : e.entity_name;
            return (0, Z.jsx)(
              `div`,
              {
                className: `w-16 shrink-0`,
                children: (0, Z.jsx)(fe, {
                  tooltipContent: s,
                  children: (0, Z.jsx)(t, {
                    color: `selectionTile`,
                    size: `imageTile`,
                    "aria-label": s,
                    "aria-pressed": r,
                    disabled: a || n == null || (!r && o),
                    onClick: () => h.current(e),
                    children: (0, Z.jsx)(_e, {
                      alt: ``,
                      assetPointer: e.thumbnail_asset_pointer ?? e.asset_pointer,
                      fallbackUrl: e.thumbnail_url ?? e.content_url,
                      name: s,
                      size: `fill`,
                      shape: `none`,
                    }),
                  }),
                }),
              },
              e.id,
            );
          })),
          (r[46] = a),
          (r[47] = f),
          (r[48] = S),
          (r[49] = h),
          (r[50] = o),
          (r[51] = i),
          (r[52] = D))
        : (D = r[52]));
    let m;
    (r[53] !== a || r[54] !== f || r[55] !== u
      ? ((m = (e) => {
          let n = (0, Z.jsx)(s, {});
          return (
            e.previewSrc != null &&
              (n = (0, Z.jsx)(`img`, { className: `size-full object-cover`, src: e.previewSrc, alt: `` })),
            (0, Z.jsxs)(
              `div`,
              {
                className: `relative w-16 shrink-0`,
                children: [
                  (0, Z.jsx)(t, {
                    color: `selectionTile`,
                    size: `imageTile`,
                    "aria-pressed": !0,
                    disabled: a,
                    loading: e.status === `uploading`,
                    "aria-label": e.name,
                    onClick: () => u(e.uploadId),
                    children: n,
                  }),
                  (0, Z.jsx)(`div`, {
                    className: `absolute top-1 right-1`,
                    children: (0, Z.jsx)(t, {
                      color: `imageSurface`,
                      size: `imageActionIcon`,
                      disabled: a,
                      onClick: () => u(e.uploadId),
                      "aria-label": f.formatMessage(
                        {
                          id: `images.preview.removePhoto`,
                          defaultMessage: `Remove {name}`,
                          description: `Accessible label to remove a selected reference photo`,
                        },
                        { name: e.name },
                      ),
                      children: (0, Z.jsx)(te, {}),
                    }),
                  }),
                ],
              },
              e.uploadId,
            )
          );
        }),
        (r[53] = a),
        (r[54] = f),
        (r[55] = u),
        (r[56] = m))
      : (m = r[56]),
      (O = n.map(m)),
      (r[8] = a),
      (r[9] = f),
      (r[10] = u),
      (r[11] = w),
      (r[12] = C),
      (r[13] = S),
      (r[14] = h),
      (r[15] = g),
      (r[16] = o),
      (r[17] = i),
      (r[18] = T),
      (r[19] = E),
      (r[20] = D),
      (r[21] = O),
      (r[22] = k),
      (r[23] = ue),
      (r[24] = de),
      (r[25] = A),
      (r[26] = j),
      (r[27] = M),
      (r[28] = N));
  } else
    ((T = r[18]),
      (E = r[19]),
      (D = r[20]),
      (O = r[21]),
      (k = r[22]),
      (ue = r[23]),
      (de = r[24]),
      (A = r[25]),
      (j = r[26]),
      (M = r[27]),
      (N = r[28]));
  let P;
  r[57] !== a ||
  r[58] !== f ||
  r[59] !== b ||
  r[60] !== l ||
  r[61] !== w ||
  r[62] !== C ||
  r[63] !== o ||
  r[64] !== i
    ? ((P = b
        ? (0, Z.jsx)(q, { className: `h-16 w-16 shrink-0 rounded-xl` })
        : w?.map((e, n) => {
            if (C.has(e.file_id)) return null;
            let r = i.find((t) => t.status === `ready` && t.id === e.file_id),
              s = f.formatMessage(
                {
                  id: `images.preview.recentPhoto`,
                  defaultMessage: `Photo {index}`,
                  description: `Accessible name of a recent photo available to use as an image subject`,
                },
                { index: n + 1 },
              );
            return (0, Z.jsx)(
              `div`,
              {
                className: `relative w-16 shrink-0`,
                children: (0, Z.jsx)(t, {
                  color: `selectionTile`,
                  size: `imageTile`,
                  "aria-label": s,
                  "aria-pressed": r != null,
                  disabled: a || (r == null && o),
                  onClick: () => l(et(e, s)),
                  children: (0, Z.jsx)(nt, { image: e }),
                }),
              },
              e.file_id,
            );
          })),
      (r[57] = a),
      (r[58] = f),
      (r[59] = b),
      (r[60] = l),
      (r[61] = w),
      (r[62] = C),
      (r[63] = o),
      (r[64] = i),
      (r[65] = P))
    : (P = r[65]);
  let F;
  r[66] !== T ||
  r[67] !== E ||
  r[68] !== D ||
  r[69] !== O ||
  r[70] !== P ||
  r[71] !== ue ||
  r[72] !== de ||
  r[73] !== A ||
  r[74] !== j ||
  r[75] !== M ||
  r[76] !== N
    ? ((F = (0, Z.jsxs)(T, {
        layout: ue,
        ariaLabel: de,
        backLabel: A,
        forwardLabel: j,
        shouldUseReducedMotion: M,
        header: N,
        children: [E, D, O, P],
      })),
      (r[66] = T),
      (r[67] = E),
      (r[68] = D),
      (r[69] = O),
      (r[70] = P),
      (r[71] = ue),
      (r[72] = de),
      (r[73] = A),
      (r[74] = j),
      (r[75] = M),
      (r[76] = N),
      (r[77] = F))
    : (F = r[77]);
  let I;
  r[78] !== _ || r[79] !== ce || r[80] !== x
    ? ((I =
        _ && ce
          ? (0, Z.jsxs)(`div`, {
              role: `alert`,
              className: `text-sm text-secondary`,
              children: [
                (0, Z.jsx)(d, {
                  id: `images.preview.references.loadError`,
                  defaultMessage: `Saved references couldn't be loaded`,
                  description: `Error in the image template preview when loading saved reference images fails. The user can retry or upload a photo.`,
                }),
                (0, Z.jsx)(t, {
                  color: `ghostSecondary`,
                  onClick: () => void x(),
                  children: (0, Z.jsx)(d, {
                    id: `images.preview.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry checking image generation and upload availability`,
                  }),
                }),
              ],
            })
          : null),
      (r[78] = _),
      (r[79] = ce),
      (r[80] = x),
      (r[81] = I))
    : (I = r[81]);
  let L;
  r[82] !== ne || r[83] !== ae
    ? ((L = ne
        ? (0, Z.jsxs)(`div`, {
            role: `alert`,
            className: `text-sm text-secondary`,
            children: [
              (0, Z.jsx)(d, {
                id: `images.reference.loadError`,
                defaultMessage: `Recent photos couldn't be loaded`,
                description: `Error above the recent reference-photo list on the Images page when fetching photo history fails. Uploading a new image remains available.`,
              }),
              (0, Z.jsx)(t, {
                color: `ghostSecondary`,
                onClick: () => void ae(),
                children: (0, Z.jsx)(d, {
                  id: `images.reference.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading recent reference photos on the Images creation page`,
                }),
              }),
            ],
          })
        : null),
      (r[82] = ne),
      (r[83] = ae),
      (r[84] = L))
    : (L = r[84]);
  let R;
  r[85] === c
    ? (R = r[86])
    : ((R = (e) => {
        (c(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ``));
      }),
      (r[85] = c),
      (r[86] = R));
  let B;
  r[87] !== R || r[88] !== o
    ? ((B = (0, Z.jsx)(`input`, {
        ref: ee,
        className: `hidden`,
        type: `file`,
        accept: `image/*`,
        multiple: !0,
        disabled: o,
        onChange: R,
      })),
      (r[87] = R),
      (r[88] = o),
      (r[89] = B))
    : (B = r[89]);
  let pe;
  return (
    r[90] !== k || r[91] !== F || r[92] !== I || r[93] !== L || r[94] !== B
      ? ((pe = (0, Z.jsxs)(`div`, { className: k, children: [F, I, L, B] })),
        (r[90] = k),
        (r[91] = F),
        (r[92] = I),
        (r[93] = L),
        (r[94] = B),
        (r[95] = pe))
      : (pe = r[95]),
    pe
  );
}
function it(e) {
  return e.asset_pointer == null ? null : H(e.asset_pointer);
}
var at, ot, Z;
function st() {
  return (st = e(() => {
    ((at = P()),
      ee(),
      U(),
      (ot = R()),
      D(),
      Qe(),
      We(),
      W(),
      j(),
      ne(),
      Ae(),
      C(),
      Xe(),
      Ve(),
      Je(),
      y(),
      G(),
      Ne(),
      tt(),
      (Z = I()));
  }))();
}
function ct(e) {
  let a = (0, dt.c)(116),
    {
      item: o,
      aspectRatio: c,
      onAspectRatioChange: u,
      subjects: f,
      status: g,
      disabled: _,
      needsPhoto: ee,
      submitting: v,
      uploadDisabled: y,
      onFilesSelected: b,
      onClose: te,
      onSubmit: ne,
    } = e,
    oe = ee !== void 0 && ee,
    ce = y !== void 0 && y,
    S = re(),
    C = ie(n),
    [w] = (0, ft.useState)(ut),
    [T, D] = (0, ft.useState)(!1),
    [k, de] = (0, ft.useState)(!1),
    [j, N] = (0, ft.useState)(!1),
    P;
  a[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e, t) => {
        N(t.scrollHeight > t.clientHeight);
      }),
      (a[0] = P))
    : (P = a[0]);
  let F = l(P),
    I = (0, ft.useId)(),
    L;
  a[1] !== o.image_url || a[2] !== o.image_variant_urls || a[3] !== o.image_variants
    ? ((L = [o.image_url, ...(o.image_variant_urls ?? []), ...(o.image_variants ?? [])].find(lt)),
      (a[1] = o.image_url),
      (a[2] = o.image_variant_urls),
      (a[3] = o.image_variants),
      (a[4] = L))
    : (L = a[4]);
  let R = L,
    z;
  a[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = { value: `auto`, icon: (0, Q.jsx)(h, { asset: m }) }), (a[5] = z))
    : (z = a[5]);
  let B;
  a[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = { value: `1:1`, icon: (0, Q.jsx)(h, { asset: M }) }), (a[6] = B))
    : (B = a[6]);
  let pe;
  a[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = { value: `2:3`, icon: (0, Q.jsx)(h, { asset: p }) }), (a[7] = pe))
    : (pe = a[7]);
  let me;
  a[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = { value: `3:2`, icon: (0, Q.jsx)(h, { asset: ae }) }), (a[8] = me))
    : (me = a[8]);
  let he;
  a[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = { value: `16:9`, icon: (0, Q.jsx)(h, { asset: se }) }), (a[9] = he))
    : (he = a[9]);
  let ge;
  a[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = [z, B, pe, me, he, { value: `9:16`, icon: (0, Q.jsx)(h, { asset: r }) }]), (a[10] = ge))
    : (ge = a[10]);
  let _e = ge,
    V;
  a[11] === te
    ? (V = a[12])
    : ((V = (e) => {
        e || te();
      }),
      (a[11] = te),
      (a[12] = V));
  let ve;
  a[13] === w
    ? (ve = a[14])
    : ((ve = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), w instanceof HTMLElement && w.isConnected && w.focus());
        },
      }),
      (a[13] = w),
      (a[14] = ve));
  let ye;
  a[15] === b ? (ye = a[16]) : ((ye = b == null ? void 0 : (e) => b(e, `drop`)), (a[15] = b), (a[16] = ye));
  let be;
  a[17] !== b || a[18] !== ce
    ? ((be = (e) => {
        e.clipboardData.files.length > 0 &&
          (e.preventDefault(), e.stopPropagation(), ce || b?.(Array.from(e.clipboardData.files), `paste`));
      }),
      (a[17] = b),
      (a[18] = ce),
      (a[19] = be))
    : (be = a[19]);
  let xe;
  a[20] !== _ || a[21] !== ne || a[22] !== v
    ? ((xe = (e) => {
        (e.preventDefault(), !_ && !v && ne());
      }),
      (a[20] = _),
      (a[21] = ne),
      (a[22] = v),
      (a[23] = xe))
    : (xe = a[23]);
  let Se;
  a[24] !== T || a[25] !== R || a[26] !== o.image_alt || a[27] !== o.title
    ? ((Se = (0, Q.jsx)(`div`, {
        className: `flex min-h-0 shrink-0 items-center justify-center bg-surface-secondary p-4 md:col-span-3 md:p-6`,
        children:
          R && !T
            ? (0, Q.jsx)(`img`, {
                className: `aspect-square max-h-64 w-auto max-w-full object-cover object-center md:max-h-full`,
                src: R,
                alt: o.image_alt ?? o.title,
                draggable: !1,
                onError: () => D(!0),
              })
            : (0, Q.jsxs)(`div`, {
                className: `flex aspect-square max-h-64 w-full items-center justify-center gap-2 text-secondary md:max-h-none`,
                children: [
                  (0, Q.jsx)(s, {}),
                  (0, Q.jsx)(d, {
                    id: `images.preview.imageUnavailable`,
                    defaultMessage: `Preview unavailable`,
                    description: `Fallback shown when the example artwork for an image prompt cannot be displayed; the prompt can still be used`,
                  }),
                ],
              }),
      })),
      (a[24] = T),
      (a[25] = R),
      (a[26] = o.image_alt),
      (a[27] = o.title),
      (a[28] = Se))
    : (Se = a[28]);
  let Ce;
  a[29] === o.title
    ? (Ce = a[30])
    : ((Ce = (0, Q.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: (0, Q.jsx)(le, { title: (0, Q.jsx)(x, { children: o.title }) }),
      })),
      (a[29] = o.title),
      (a[30] = Ce));
  let we;
  a[31] === S
    ? (we = a[32])
    : ((we = S.formatMessage({
        id: `codex.dialog.closeButton`,
        defaultMessage: `Close dialog`,
        description: `Accessible label for the button that closes a dialog`,
      })),
      (a[31] = S),
      (a[32] = we));
  let Te;
  a[33] === Symbol.for(`react.memo_cache_sentinel`) ? ((Te = (0, Q.jsx)(i, {})), (a[33] = Te)) : (Te = a[33]);
  let Ee;
  a[34] !== te || a[35] !== we
    ? ((Ee = (0, Q.jsx)(t, {
        color: `ghost`,
        size: `iconCircle`,
        "aria-label": we,
        onClick: te,
        children: Te,
      })),
      (a[34] = te),
      (a[35] = we),
      (a[36] = Ee))
    : (Ee = a[36]);
  let De;
  a[37] !== Ce || a[38] !== Ee
    ? ((De = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-3 px-5 pt-2 pb-2 md:pt-5`,
        children: [Ce, Ee],
      })),
      (a[37] = Ce),
      (a[38] = Ee),
      (a[39] = De))
    : (De = a[39]);
  let H = !k && `line-clamp-4`,
    Oe;
  a[40] === H
    ? (Oe = a[41])
    : ((Oe = E(`text-sm whitespace-pre-wrap text-secondary select-text`, H)), (a[40] = H), (a[41] = Oe));
  let U;
  a[42] !== o.prompt_text || a[43] !== I || a[44] !== F || a[45] !== Oe
    ? ((U = (0, Q.jsx)(`p`, { id: I, ref: F, className: Oe, children: o.prompt_text })),
      (a[42] = o.prompt_text),
      (a[43] = I),
      (a[44] = F),
      (a[45] = Oe),
      (a[46] = U))
    : (U = a[46]);
  let ke;
  a[47] !== k || a[48] !== I || a[49] !== j
    ? ((ke =
        k || j
          ? (0, Q.jsxs)(`div`, {
              className: E(
                `flex items-baseline justify-end gap-1 text-sm`,
                k ? `mt-1` : `absolute end-0 bottom-0 bg-surface ps-1`,
              ),
              children: [
                k
                  ? null
                  : (0, Q.jsx)(`span`, {
                      "aria-hidden": !0,
                      className: `text-secondary select-none`,
                      children: (0, Q.jsx)(d, {
                        id: `images.preview.truncationMarker`,
                        defaultMessage: `…`,
                        description: `Ellipsis marking omitted image prompt text before the See more control`,
                      }),
                    }),
                (0, Q.jsx)(t, {
                  color: `ghostActive`,
                  size: `inline`,
                  "aria-expanded": k,
                  "aria-controls": I,
                  onClick: () => de(!k),
                  children: (0, Q.jsx)(`span`, {
                    className: `text-sm font-medium`,
                    children: k
                      ? (0, Q.jsx)(d, {
                          id: `images.preview.seeLess`,
                          defaultMessage: `See less`,
                          description: `Collapse the image prompt back to its short preview`,
                        })
                      : (0, Q.jsx)(d, {
                          id: `images.preview.seeMore`,
                          defaultMessage: `See more`,
                          description: `Expand the preview to read the full image prompt`,
                        }),
                  }),
                }),
              ],
            })
          : null),
      (a[47] = k),
      (a[48] = I),
      (a[49] = j),
      (a[50] = ke))
    : (ke = a[50]);
  let W;
  a[51] !== U || a[52] !== ke
    ? ((W = (0, Q.jsxs)(`section`, { className: `relative`, children: [U, ke] })),
      (a[51] = U),
      (a[52] = ke),
      (a[53] = W))
    : (W = a[53]);
  let Ae;
  a[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, Q.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, Q.jsx)(d, {
          id: `images.preview.aspectRatio`,
          defaultMessage: `Aspect ratio`,
          description: `Label for the output image proportions selector`,
        }),
      })),
      (a[54] = Ae))
    : (Ae = a[54]);
  let je;
  a[55] === S
    ? (je = a[56])
    : ((je = S.formatMessage({
        id: `images.preview.aspectRatio`,
        defaultMessage: `Aspect ratio`,
        description: `Label for the output image proportions selector`,
      })),
      (a[55] = S),
      (a[56] = je));
  let G;
  a[57] === S
    ? (G = a[58])
    : ((G = S.formatMessage({
        id: `images.preview.previousRatios`,
        defaultMessage: `Previous aspect ratios`,
        description: `Scroll to the previous output proportions in the image prompt preview`,
      })),
      (a[57] = S),
      (a[58] = G));
  let Me;
  a[59] === S
    ? (Me = a[60])
    : ((Me = S.formatMessage({
        id: `images.preview.nextRatios`,
        defaultMessage: `Next aspect ratios`,
        description: `Scroll to the next output proportions in the image prompt preview`,
      })),
      (a[59] = S),
      (a[60] = Me));
  let Ne;
  a[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, Q.jsx)(`span`, {
        className: `text-sm text-secondary select-none`,
        children: (0, Q.jsx)(d, {
          id: `images.preview.aspectRatio`,
          defaultMessage: `Aspect ratio`,
          description: `Label for the output image proportions selector`,
        }),
      })),
      (a[61] = Ne))
    : (Ne = a[61]);
  let Pe;
  a[62] !== c || a[63] !== u
    ? ((Pe = _e.map((e) =>
        (0, Q.jsxs)(
          t,
          {
            className: `w-16 shrink-0`,
            color: `selectionTile`,
            size: `selectionTile`,
            "aria-pressed": c === e.value,
            onClick: () => u(e.value),
            children: [
              e.icon,
              e.value === `auto`
                ? (0, Q.jsx)(d, {
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
      (a[62] = c),
      (a[63] = u),
      (a[64] = Pe))
    : (Pe = a[64]);
  let K;
  a[65] !== C || a[66] !== je || a[67] !== G || a[68] !== Me || a[69] !== Pe
    ? ((K = (0, Q.jsx)(Ze, {
        layout: `compact`,
        ariaLabel: je,
        backLabel: G,
        forwardLabel: Me,
        shouldUseReducedMotion: C,
        header: Ne,
        children: Pe,
      })),
      (a[65] = C),
      (a[66] = je),
      (a[67] = G),
      (a[68] = Me),
      (a[69] = Pe),
      (a[70] = K))
    : (K = a[70]);
  let Fe;
  a[71] !== v || a[72] !== K
    ? ((Fe = (0, Q.jsxs)(`fieldset`, { className: `min-w-0`, disabled: v, children: [Ae, K] })),
      (a[71] = v),
      (a[72] = K),
      (a[73] = Fe))
    : (Fe = a[73]);
  let Ie;
  a[74] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = (0, Q.jsx)(`legend`, {
        className: `sr-only`,
        children: (0, Q.jsx)(d, {
          id: `images.preview.photos`,
          defaultMessage: `Photos`,
          description: `Accessible label for recently uploaded images and saved subjects or references in the image template preview`,
        }),
      })),
      (a[74] = Ie))
    : (Ie = a[74]);
  let q;
  a[75] !== f || a[76] !== v
    ? ((q = (0, Q.jsxs)(`fieldset`, { className: `min-w-0`, disabled: v, children: [Ie, f] })),
      (a[75] = f),
      (a[76] = v),
      (a[77] = q))
    : (q = a[77]);
  let J;
  a[78] !== Fe || a[79] !== q
    ? ((J = (0, Q.jsxs)(`section`, { className: `flex flex-col gap-3 pt-2`, children: [Fe, q] })),
      (a[78] = Fe),
      (a[79] = q),
      (a[80] = J))
    : (J = a[80]);
  let Le;
  a[81] !== W || a[82] !== J
    ? ((Le = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-4 px-6 md:min-h-0 md:flex-1 md:overflow-y-auto`,
        children: [W, J],
      })),
      (a[81] = W),
      (a[82] = J),
      (a[83] = Le))
    : (Le = a[83]);
  let Y;
  a[84] === g
    ? (Y = a[85])
    : ((Y =
        g == null
          ? null
          : (0, Q.jsx)(`div`, { className: `min-w-0 flex-1 text-sm text-secondary`, children: g })),
      (a[84] = g),
      (a[85] = Y));
  let Re = !oe || v,
    X;
  a[86] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(d, {
        id: `images.preview.addPhotoToTry`,
        defaultMessage: `Add a photo to try it`,
        description: `Tooltip on the disabled Try it button when a reference photo is needed. The user can upload a photo or select one from their library.`,
      })),
      (a[86] = X))
    : (X = a[86]);
  let ze = _ || v,
    Be;
  a[87] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(d, {
        id: `images.preview.tryIt`,
        defaultMessage: `Try it`,
        description: `Primary action that generates an image using the previewed prompt and the selected customizations`,
      })),
      (a[87] = Be))
    : (Be = a[87]);
  let Ve;
  a[88] !== v || a[89] !== ze
    ? ((Ve = (0, Q.jsx)(`span`, {
        children: (0, Q.jsx)(t, {
          type: `submit`,
          color: `chatgptPrimary`,
          size: `dialogAction`,
          disabled: ze,
          loading: v,
          children: Be,
        }),
      })),
      (a[88] = v),
      (a[89] = ze),
      (a[90] = Ve))
    : (Ve = a[90]);
  let He;
  a[91] !== Re || a[92] !== Ve
    ? ((He = (0, Q.jsx)(fe, { disabled: Re, tooltipContent: X, children: Ve })),
      (a[91] = Re),
      (a[92] = Ve),
      (a[93] = He))
    : (He = a[93]);
  let Ue;
  a[94] !== Y || a[95] !== He
    ? ((Ue = (0, Q.jsx)(`div`, {
        className: `sticky bottom-0 shrink-0 bg-surface px-4 py-4`,
        children: (0, Q.jsxs)(A, { expandSingleButton: !1, children: [Y, He] }),
      })),
      (a[94] = Y),
      (a[95] = He),
      (a[96] = Ue))
    : (Ue = a[96]);
  let We;
  a[97] !== De || a[98] !== Le || a[99] !== Ue
    ? ((We = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 shrink-0 flex-col md:col-span-2 md:border-l md:border-default`,
        children: [De, Le, Ue],
      })),
      (a[97] = De),
      (a[98] = Le),
      (a[99] = Ue),
      (a[100] = We))
    : (We = a[100]);
  let Ge;
  a[101] !== Se || a[102] !== We
    ? ((Ge = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-col overflow-y-auto md:grid md:grid-cols-5 md:grid-rows-1 md:overflow-hidden`,
        children: [Se, We],
      })),
      (a[101] = Se),
      (a[102] = We),
      (a[103] = Ge))
    : (Ge = a[103]);
  let Ke;
  a[104] !== be || a[105] !== xe || a[106] !== Ge
    ? ((Ke = (0, Q.jsx)(ue, {
        as: `form`,
        size: `viewport`,
        variant: `chatgpt`,
        onPaste: be,
        onSubmit: xe,
        children: Ge,
      })),
      (a[104] = be),
      (a[105] = xe),
      (a[106] = Ge),
      (a[107] = Ke))
    : (Ke = a[107]);
  let qe;
  a[108] !== ye || a[109] !== Ke || a[110] !== ce
    ? ((qe = (0, Q.jsx)(Ye, { disabled: ce, onFilesDropped: ye, children: Ke })),
      (a[108] = ye),
      (a[109] = Ke),
      (a[110] = ce),
      (a[111] = qe))
    : (qe = a[111]);
  let Je;
  return (
    a[112] !== V || a[113] !== ve || a[114] !== qe
      ? ((Je = (0, Q.jsx)(O, {
          open: !0,
          variant: `mediaDetail`,
          size: `xxwide`,
          showDialogClose: !1,
          onOpenChange: V,
          contentProps: ve,
          children: qe,
        })),
        (a[112] = V),
        (a[113] = ve),
        (a[114] = qe),
        (a[115] = Je))
      : (Je = a[115]),
    Je
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
    ((dt = P()),
      k(),
      w(),
      b(),
      oe(),
      de(),
      u(),
      ce(),
      ee(),
      (ft = R()),
      D(),
      ze(),
      j(),
      N(),
      T(),
      _(),
      ne(),
      C(),
      Xe(),
      g(),
      y(),
      (Q = I()));
  }))();
}
function mt(e) {
  let n = (0, yt.c)(117),
    {
      item: r,
      group: i,
      conversationId: a,
      accountId: s,
      userId: l,
      disabled: u,
      signal: p,
      onClose: m,
      onRequestStarted: h,
      onSubmitAccepted: g,
    } = e,
    _ = f(o),
    ee = re(),
    v = c(),
    y = (0, bt.useRef)(!1),
    [b, te] = (0, bt.useState)(!1),
    [ne, ie] = (0, bt.useState)(!1),
    [ae, oe] = (0, bt.useState)(!1),
    [se, ce] = (0, bt.useState)(`auto`),
    x = z(xe, a),
    S = z(me, a),
    le = z(Ee, a),
    C;
  n[0] === r ? (C = n[1]) : ((C = B(r, [`picture_v2`])), (n[0] = r), (n[1] = C));
  let w = C,
    T;
  n[2] !== le.slug || n[3] !== a || n[4] !== w
    ? ((T = {
        clientConversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        requestedDefaultModel: le.slug,
        serverConversationId: null,
        systemHints: w,
      }),
      (n[2] = le.slug),
      (n[3] = a),
      (n[4] = w),
      (n[5] = T))
    : (T = n[5]);
  let E = T,
    D;
  n[6] !== E || n[7] !== a
    ? ((D = {
        conversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        hasModelGizmoOverride: !1,
        hasSavedModelGizmoOverride: !1,
        conversationDetailsTarget: E,
      }),
      (n[6] = E),
      (n[7] = a),
      (n[8] = D))
    : (D = n[8]);
  let { selectedModel: O, rateLimitState: k, savedModelPending: ue } = z(Me, D),
    { isPending: de, isError: A, refetch: fe } = z(Fe, E),
    j;
  n[9] !== s || n[10] !== a || n[11] !== O.slug || n[12] !== w
    ? ((j = {
        accountId: s,
        conversationId: a,
        conversationOrigin: null,
        gizmoId: null,
        model: O.slug,
        serverConversationId: null,
        systemHints: w,
      }),
      (n[9] = s),
      (n[10] = a),
      (n[11] = O.slug),
      (n[12] = w),
      (n[13] = j))
    : (j = n[13]);
  let M = j,
    { data: N } = z(Ce, M),
    { isError: P, refetch: F } = z(we, M),
    I = r.action ?? i.action,
    R = I.input_requirements,
    _e = R?.min_count ?? +(R?.source != null && R.source !== `prompt_only`),
    V;
  n[14] === _ ? (V = n[15]) : ((V = je(_)), (n[14] = _), (n[15] = V));
  let H = Math.min(R?.max_count ?? 1 / 0, V),
    Oe;
  n[16] === x ? (Oe = n[17]) : ((Oe = x.filter(be)), (n[16] = x), (n[17] = Oe));
  let U = Oe,
    ke;
  n[18] === x ? (ke = n[19]) : ((ke = x.some(vt)), (n[18] = x), (n[19] = ke));
  let W = ke,
    Ae;
  n[20] === x ? (Ae = n[21]) : ((Ae = x.some(_t)), (n[20] = x), (n[21] = Ae));
  let G = Ae,
    Ne = k.sendBlocked || k.imageGenerationBlocked,
    Pe = u || de || A || ue || Ne,
    K = Pe || W || G || U.length < _e || U.length > H,
    Ie;
  n[22] !== H || n[23] !== N || n[24] !== x.length
    ? ((Ie = De({ currentAttachmentCount: x.length, requestedFileCount: 1, maxUploads: H, metadata: N })),
      (n[22] = H),
      (n[23] = N),
      (n[24] = x.length),
      (n[25] = Ie))
    : (Ie = n[25]);
  let q = Ie,
    J = u || b || N == null || q.acceptedCount === 0,
    Le;
  n[26] !== s || n[27] !== _ || n[28] !== p.aborted || n[29] !== l
    ? ((Le = function () {
        return !p.aborted && _.get(pe) === s && _.get(Se) === l;
      }),
      (n[26] = s),
      (n[27] = _),
      (n[28] = p.aborted),
      (n[29] = l),
      (n[30] = Le))
    : (Le = n[30]);
  let Y = Le,
    Re;
  n[31] !== a || n[32] !== M || n[33] !== Y || n[34] !== H || n[35] !== h || n[36] !== _ || n[37] !== J
    ? ((Re = function (e, t) {
        let n = t === void 0 ? he.CHATGPT_FILE_SELECTION_SOURCE_MOUSE : t;
        if (J || y.current || !Y()) return;
        let r = _.get(xe, a),
          i = e.filter(gt).slice(0, Math.max(0, H - r.length));
        (oe(i.length !== e.length),
          Te(_, a, null),
          h(
            ge(_, a, i, {
              fileUploadLimitsQueryKey: M,
              gizmoId: null,
              selection: { source: n, recorded: !1 },
            }),
          ));
      }),
      (n[31] = a),
      (n[32] = M),
      (n[33] = Y),
      (n[34] = H),
      (n[35] = h),
      (n[36] = _),
      (n[37] = J),
      (n[38] = Re))
    : (Re = n[38]);
  let X = Re,
    ze;
  n[39] !== a || n[40] !== Y || n[41] !== _
    ? ((ze = function (e) {
        Y() && !y.current && (ye(_, a, e, `chat`), oe(!1), Te(_, a, null));
      }),
      (n[39] = a),
      (n[40] = Y),
      (n[41] = _),
      (n[42] = ze))
    : (ze = n[42]);
  let Be = ze,
    Ve;
  n[43] !== a || n[44] !== Y || n[45] !== H || n[46] !== N || n[47] !== Be || n[48] !== _ || n[49] !== J
    ? ((Ve = function (e, t) {
        let n = t === void 0 ? `toggle` : t;
        if (!Y() || y.current) return;
        let r = _.get(xe, a),
          i = r.find((t) => t.status === `ready` && t.id === e.id);
        if (i != null) {
          n === `toggle` && Be(i.uploadId);
          return;
        }
        J ||
          De({ currentAttachmentCount: r.length, requestedFileCount: 1, maxUploads: H, metadata: N })
            .acceptedCount === 0 ||
          (_.set(xe, a, () => [
            ...r,
            { ...e, uploadId: `image-reference:${e.id}:${crypto.randomUUID()}`, status: `ready` },
          ]),
          oe(!1),
          Te(_, a, null));
      }),
      (n[43] = a),
      (n[44] = Y),
      (n[45] = H),
      (n[46] = N),
      (n[47] = Be),
      (n[48] = _),
      (n[49] = J),
      (n[50] = Ve))
    : (Ve = n[50]);
  let Ue = Ve,
    We;
  n[51] !== I.strategy ||
  n[52] !== se ||
  n[53] !== K ||
  n[54] !== a ||
  n[55] !== i ||
  n[56] !== ee ||
  n[57] !== Y ||
  n[58] !== r ||
  n[59] !== v ||
  n[60] !== h ||
  n[61] !== g ||
  n[62] !== U ||
  n[63] !== R?.source ||
  n[64] !== _ ||
  n[65] !== O ||
  n[66] !== p ||
  n[67] !== w
    ? ((We = async function () {
        if (!Y() || K || y.current) return;
        ((y.current = !0), te(!0), ie(!1));
        let e = crypto.randomUUID();
        try {
          let t = Ke(_, {
            conversationId: a,
            selectedModel: O,
            prompt:
              se === `auto`
                ? r.prompt_text
                : `${r.prompt_text}\n\n${ee.formatMessage({ id: `images.preview.aspectRatioInstruction`, defaultMessage: `Output aspect ratio: {aspectRatio}. Use this output ratio instead of any conflicting aspect ratio or framing instruction above.`, description: `Instruction appended to the submitted image prompt to apply the user's chosen output proportions, overriding conflicting proportions in the original prompt.` }, { aspectRatio: se })}`,
            systemHints: w,
            draft: { kind: `current`, fileUploadIds: U.map(ht) },
            turnAttribution: { turn_trigger: `composer` },
            messageMetadata: {
              image_feature: `prompt`,
              image_prompt_id: r.id,
              image_prompt_group_id: i.id,
              image_prompt_group_presentation: i.presentation,
              image_send_uuid: e,
            },
            signal: p,
            isSubmissionCurrent: Y,
            isRequestCurrent: Y,
            requireDispatchAcceptance: !0,
            submitErrorFallback: ee.formatMessage({
              id: `images.preview.sendError`,
              defaultMessage: `Couldn't start your image. Try again`,
              description: `Error when submitting a configured image prompt fails; the user's choices are kept for retry`,
            }),
            onSubmitAccepted: () => {
              Y() &&
                (((R?.source === `styles` && (I.strategy ?? `auto_send`) === `auto_send`) ||
                  (w.length === 1 && w[0] === `picture_v2`)) &&
                  He(_, r, i, e, `images`),
                ve(_, a),
                Te(_, a, null),
                g(),
                v(L(a)));
            },
          });
          (h(t), !(await t) && Y() && (ie(!0), te(!1)));
        } catch {
          Y() && (ie(!0), te(!1));
        }
        y.current = !1;
      }),
      (n[51] = I.strategy),
      (n[52] = se),
      (n[53] = K),
      (n[54] = a),
      (n[55] = i),
      (n[56] = ee),
      (n[57] = Y),
      (n[58] = r),
      (n[59] = v),
      (n[60] = h),
      (n[61] = g),
      (n[62] = U),
      (n[63] = R?.source),
      (n[64] = _),
      (n[65] = O),
      (n[66] = p),
      (n[67] = w),
      (n[68] = We))
    : (We = n[68]);
  let Ge = We,
    qe = !Pe && !J && !W && !G && U.length < _e,
    Je;
  n[69] === X
    ? (Je = n[70])
    : ((Je = (e, t) =>
        X(e, t === `paste` ? he.CHATGPT_FILE_SELECTION_SOURCE_PASTE : he.CHATGPT_FILE_SELECTION_SOURCE_DRAG)),
      (n[69] = X),
      (n[70] = Je));
  let Ye;
  n[71] === Ge ? (Ye = n[72]) : ((Ye = () => void Ge()), (n[71] = Ge), (n[72] = Ye));
  let Xe;
  n[73] !== X || n[74] !== Be || n[75] !== Ue || n[76] !== b || n[77] !== J || n[78] !== x
    ? ((Xe = (0, $.jsx)(rt, {
        uploads: x,
        disabled: b,
        uploadDisabled: J,
        onAddPhotos: X,
        onSelectPhoto: Ue,
        onRemovePhoto: Be,
      })),
      (n[73] = X),
      (n[74] = Be),
      (n[75] = Ue),
      (n[76] = b),
      (n[77] = J),
      (n[78] = x),
      (n[79] = Xe))
    : (Xe = n[79]);
  let Ze;
  n[80] !== A || n[81] !== fe || n[82] !== F || n[83] !== P
    ? ((Ze =
        A || P
          ? (0, $.jsxs)(`div`, {
              role: `alert`,
              children: [
                (0, $.jsx)(d, {
                  id: `images.preview.availabilityError`,
                  defaultMessage: `Couldn't check availability`,
                  description: `Error when checking image generation or photo upload availability`,
                }),
                (0, $.jsx)(t, {
                  color: `ghostSecondary`,
                  onClick: () => {
                    (fe(), F());
                  },
                  children: (0, $.jsx)(d, {
                    id: `images.preview.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry checking image generation and upload availability`,
                  }),
                }),
              ],
            })
          : null),
      (n[80] = A),
      (n[81] = fe),
      (n[82] = F),
      (n[83] = P),
      (n[84] = Ze))
    : (Ze = n[84]);
  let Qe;
  n[85] === Ne
    ? (Qe = n[86])
    : ((Qe = Ne
        ? (0, $.jsx)(d, {
            id: `images.preview.rateLimited`,
            defaultMessage: `Image creation is currently unavailable. Please try again later`,
            description: `Guidance when the current account or model cannot generate an image because of a usage limit`,
          })
        : null),
      (n[85] = Ne),
      (n[86] = Qe));
  let $e;
  n[87] === q.banner?.kind
    ? ($e = n[88])
    : (($e =
        q.banner?.kind === `daily`
          ? (0, $.jsx)(d, {
              id: `images.preview.photoLimitReached`,
              defaultMessage: `You've reached your photo limit. Try again later`,
              description: `Explains why adding a reference photo is disabled after reaching the account's file attachment limit`,
            })
          : null),
      (n[87] = q.banner?.kind),
      (n[88] = $e));
  let et;
  n[89] === W
    ? (et = n[90])
    : ((et = W
        ? (0, $.jsx)(d, {
            id: `images.preview.uploading`,
            defaultMessage: `Uploading photos…`,
            description: `Status while reference photos are uploading before image generation can start`,
          })
        : null),
      (n[89] = W),
      (n[90] = et));
  let tt;
  n[91] !== ae || n[92] !== G || n[93] !== q.banner?.kind || n[94] !== S
    ? ((tt =
        ae || G || (S != null && q.banner?.kind !== `daily`)
          ? (0, $.jsx)(`span`, {
              role: `alert`,
              children: (0, $.jsx)(d, {
                id: `images.preview.uploadError`,
                defaultMessage: `Couldn't add all photos. Remove any failed upload and add it again`,
                description: `Explains how to recover when a reference photo cannot be uploaded or exceeds the prompt's photo limit`,
              }),
            })
          : null),
      (n[91] = ae),
      (n[92] = G),
      (n[93] = q.banner?.kind),
      (n[94] = S),
      (n[95] = tt))
    : (tt = n[95]);
  let nt;
  n[96] === ne
    ? (nt = n[97])
    : ((nt = ne
        ? (0, $.jsx)(`span`, {
            role: `alert`,
            children: (0, $.jsx)(d, {
              id: `images.preview.sendError`,
              defaultMessage: `Couldn't start your image. Try again`,
              description: `Error when submitting a configured image prompt fails; the user's choices are kept for retry`,
            }),
          })
        : null),
      (n[96] = ne),
      (n[97] = nt));
  let it;
  n[98] !== Ze || n[99] !== Qe || n[100] !== $e || n[101] !== et || n[102] !== tt || n[103] !== nt
    ? ((it = (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2 text-sm text-secondary`,
        "aria-live": `polite`,
        children: [Ze, Qe, $e, et, tt, nt],
      })),
      (n[98] = Ze),
      (n[99] = Qe),
      (n[100] = $e),
      (n[101] = et),
      (n[102] = tt),
      (n[103] = nt),
      (n[104] = it))
    : (it = n[104]);
  let at;
  return (
    n[105] !== se ||
    n[106] !== K ||
    n[107] !== r ||
    n[108] !== m ||
    n[109] !== b ||
    n[110] !== qe ||
    n[111] !== Je ||
    n[112] !== Ye ||
    n[113] !== Xe ||
    n[114] !== it ||
    n[115] !== J
      ? ((at = (0, $.jsx)(ct, {
          item: r,
          aspectRatio: se,
          onAspectRatioChange: ce,
          disabled: K,
          needsPhoto: qe,
          submitting: b,
          uploadDisabled: J,
          onFilesSelected: Je,
          onClose: m,
          onSubmit: Ye,
          subjects: Xe,
          status: it,
        })),
        (n[105] = se),
        (n[106] = K),
        (n[107] = r),
        (n[108] = m),
        (n[109] = b),
        (n[110] = qe),
        (n[111] = Je),
        (n[112] = Ye),
        (n[113] = Xe),
        (n[114] = it),
        (n[115] = J),
        (n[116] = at))
      : (at = n[116]),
    at
  );
}
function ht(e) {
  return e.uploadId;
}
function gt(e) {
  return e.type.startsWith(`image/`);
}
function _t(e) {
  return e.status === `error`;
}
function vt(e) {
  return e.status === `uploading`;
}
var yt, bt, $;
function xt() {
  return (xt = e(() => {
    ((yt = P()),
      V(),
      ee(),
      (bt = R()),
      D(),
      S(),
      J(),
      ke(),
      K(),
      Y(),
      Be(),
      Re(),
      Ue(),
      Le(),
      Oe(),
      a(),
      j(),
      F(),
      st(),
      pt(),
      ($ = I()));
  }))();
}
xt();
export { mt as ImagePromptPreviewDialog };
//# sourceMappingURL=dialog-f276f87b7ac6.js.map
