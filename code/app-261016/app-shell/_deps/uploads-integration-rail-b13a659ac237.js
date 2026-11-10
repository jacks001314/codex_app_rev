import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  GK as i,
  Jz as a,
  LNt as o,
  MNt as s,
  NNt as c,
  PBt as l,
  Qst as u,
  TY as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  ZSt as h,
  iCt as g,
  mTt as _,
  nCt as v,
  nV as y,
  okt as b,
  pTt as x,
  qz as S,
  tkt as C,
  wK as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as T,
  GIn as E,
  GYn as D,
  JYn as O,
  MSt as k,
  NSt as A,
  TYn as j,
  bIn as M,
  wLr as N,
  xYn as P,
  zRr as F,
} from "./app-initial-ad16eaadf81f.js";
import { n as I, t as L } from "./option-carousel-ae2f9c0f0e72.js";
import { n as R, r as z, t as B } from "./recent-uploads-f604dd924675.js";
function V(e) {
  let t = (0, H.c)(8),
    { disabled: n, layout: r, onUpload: a } = e,
    o = r === `carousel` ? `w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start` : `w-full`,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = s(
        `relative flex aspect-[4/5] cursor-interaction items-center justify-center rounded-3xl bg-primary-ghost-hover text-secondary outline-none select-none focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-focus disabled:cursor-default disabled:opacity-40`,
        o,
      )),
      (t[0] = o),
      (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, U.jsx)(i, {})), (t[2] = l)) : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, U.jsx)(`span`, {
        className: `absolute inset-x-0 bottom-0 p-3 text-start text-sm leading-5`,
        children: (0, U.jsx)(C, {
          id: `images.reference.upload`,
          defaultMessage: `Upload a photo`,
          description: `Button to choose a new reference photo from the device for image creation`,
        }),
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  return (
    t[4] !== n || t[5] !== a || t[6] !== c
      ? ((d = (0, U.jsxs)(`button`, {
          type: `button`,
          className: c,
          disabled: n,
          onClick: a,
          children: [l, u],
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = c),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = l()), c(), f(), d(), (U = o()));
  }))();
}
function G(e) {
  let n = (0, q.c)(37),
    {
      conversationId: r,
      disabled: i,
      uploadDisabled: o,
      layout: c,
      signal: l,
      onBack: d,
      onUpload: f,
      onRecentImageSelected: m,
    } = e,
    h = c === void 0 ? `carousel` : c,
    _ = t(u),
    x = b(),
    S = g(F),
    w = g(T),
    E = g(a),
    { data: D, isPending: O, isError: A, refetch: j } = v(z, !0),
    N = v(M, r),
    P;
  n[0] !== S ||
  n[1] !== r ||
  n[2] !== i ||
  n[3] !== x ||
  n[4] !== h ||
  n[5] !== m ||
  n[6] !== _ ||
  n[7] !== l?.aborted ||
  n[8] !== w
    ? ((P = (e, t) => {
        let n = `image-reference:${e.file_id}:`,
          a = `${n}${crypto.randomUUID()}`,
          o = _.get(M, r);
        if (i || l?.aborted || S == null || w == null || S !== _.get(F) || w !== _.get(T)) return;
        let s = o.find((t) => t.status === `ready` && t.id === e.file_id);
        if (h === `recents` && s != null) {
          m(s.uploadId);
          return;
        }
        if (
          o.some(
            (t) =>
              (t.status === `ready` && t.id === e.file_id) ||
              (t.uploadId.startsWith(n) && t.status === `uploading`),
          )
        )
          return;
        let c = x.formatMessage(
          {
            id: `images.reference.photoName`,
            defaultMessage: `Photo {position}`,
            description: `Name for a recently uploaded reference photo on the Images page. Position is its one-based position in the recent photos list.`,
          },
          { position: t + 1 },
        );
        (_.set(M, r, (t) => [
          ...t.filter((e) => !e.uploadId.startsWith(n)),
          { ...B(e, c), uploadId: a, status: `ready` },
        ]),
          m(a));
      }),
      (n[0] = S),
      (n[1] = r),
      (n[2] = i),
      (n[3] = x),
      (n[4] = h),
      (n[5] = m),
      (n[6] = _),
      (n[7] = l?.aborted),
      (n[8] = w),
      (n[9] = P))
    : (P = n[9]);
  let I = P;
  if (h === `recents` && !O && !A && D?.items.length === 0) return null;
  let R;
  n[10] !== D?.items ||
  n[11] !== i ||
  n[12] !== x ||
  n[13] !== O ||
  n[14] !== h ||
  n[15] !== I ||
  n[16] !== E ||
  n[17] !== N
    ? ((R = O
        ? Array.from({ length: 4 }, (e, t) =>
            (0, Y.jsx)(
              k,
              {
                className: s(
                  h === `recents`
                    ? `aspect-square w-18 min-w-0 rounded-xl corner-superellipse/1.1`
                    : `aspect-[4/5] w-[calc((100%-3rem)/5)] min-w-32 shrink-0 rounded-2xl`,
                  h === `recents` && t === 3 && `hidden sm:block`,
                ),
              },
              t,
            ),
          )
        : (h === `recents` ? D?.items.slice(0, 4) : D?.items)?.map((e, t) => {
            let n = N.find(
                (t) =>
                  t.uploadId.startsWith(`image-reference:${e.file_id}:`) ||
                  (t.status === `ready` && t.id === e.file_id),
              ),
              r = x.formatMessage(
                {
                  id: `imagegen.composer.suggestions.upload.aria_label`,
                  defaultMessage: `Recent upload {index}`,
                  description: `Accessible label for a recent upload thumbnail in the image generation composer suggestions uploads tab.`,
                },
                { index: t + 1 },
              );
            return (0, Y.jsxs)(
              `div`,
              {
                className: s(
                  `flex-col gap-1`,
                  h === `recents` ? `w-18 min-w-0` : `w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start`,
                  h === `recents` && t === 3 ? `hidden sm:flex` : `flex`,
                ),
                children: [
                  (0, Y.jsx)(`button`, {
                    type: `button`,
                    className: s(
                      `relative flex cursor-interaction items-center justify-center overflow-hidden bg-surface-secondary text-tertiary outline-none focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default`,
                      h === `recents`
                        ? `aspect-square w-full rounded-xl corner-superellipse/1.1`
                        : `aspect-[4/5] w-full rounded-2xl`,
                      h === `recents` &&
                        !E &&
                        `transition-transform duration-basic ease-enter-snappy enabled:hover:scale-105 enabled:active:scale-95`,
                    ),
                    "aria-label": r,
                    disabled:
                      i || (n != null && n.status !== `error` && (h !== `recents` || n.status !== `ready`)),
                    onClick: () => I(e, t),
                    children: (0, Y.jsx)(K, { image: e }),
                  }),
                  n?.status === `error`
                    ? (0, Y.jsx)(`span`, {
                        role: `alert`,
                        className: `text-xs text-secondary`,
                        children: (0, Y.jsx)(C, {
                          id: `images.reference.photoError`,
                          defaultMessage: `Couldn't attach photo`,
                          description: `Short error below a recent reference photo when retrieving its attachment details fails. Selecting the photo retries.`,
                        }),
                      })
                    : null,
                ],
              },
              e.file_id,
            );
          })),
      (n[10] = D?.items),
      (n[11] = i),
      (n[12] = x),
      (n[13] = O),
      (n[14] = h),
      (n[15] = I),
      (n[16] = E),
      (n[17] = N),
      (n[18] = R))
    : (R = n[18]);
  let H = R,
    U = h === `recents` && `mt-5`,
    W;
  n[19] === U ? (W = n[20]) : ((W = s(`flex min-w-0 flex-col gap-3`, U)), (n[19] = U), (n[20] = W));
  let G;
  n[21] !== A || n[22] !== j
    ? ((G = A
        ? (0, Y.jsxs)(`div`, {
            role: `alert`,
            className: `flex flex-wrap items-center gap-2 text-sm text-secondary`,
            children: [
              (0, Y.jsx)(C, {
                id: `images.reference.loadError`,
                defaultMessage: `Recent photos couldn't be loaded`,
                description: `Error above the recent reference-photo list on the Images page when fetching photo history fails. Uploading a new image remains available.`,
              }),
              (0, Y.jsx)(p, {
                color: `ghostSecondary`,
                onClick: () => void j(),
                children: (0, Y.jsx)(C, {
                  id: `images.reference.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading recent reference photos on the Images creation page`,
                }),
              }),
            ],
          })
        : null),
      (n[21] = A),
      (n[22] = j),
      (n[23] = G))
    : (G = n[23]);
  let J;
  n[24] !== i ||
  n[25] !== x ||
  n[26] !== h ||
  n[27] !== d ||
  n[28] !== f ||
  n[29] !== H ||
  n[30] !== E ||
  n[31] !== o
    ? ((J =
        h === `recents`
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(`h2`, {
                  className: `box-trim-0.5 text-base leading-relaxed font-medium text-tertiary select-none`,
                  children: (0, Y.jsx)(C, {
                    id: `images.reference.recents`,
                    defaultMessage: `Recents`,
                    description: `Heading above recently uploaded photos in the image prompt dialog`,
                  }),
                }),
                (0, Y.jsx)(`div`, { className: `flex gap-2`, children: H }),
              ],
            })
          : (0, Y.jsxs)(L, {
              layout: `gallery`,
              ariaLabel: x.formatMessage({
                id: `images.reference.photos`,
                defaultMessage: `Reference photos`,
                description: `Accessible label for the image creation photo upload carousel`,
              }),
              backLabel: x.formatMessage({
                id: `images.reference.previous`,
                defaultMessage: `Previous photos`,
                description: `Show the previous page of recent reference photos`,
              }),
              forwardLabel: x.formatMessage({
                id: `images.reference.next`,
                defaultMessage: `Next photos`,
                description: `Show the next page of recent reference photos`,
              }),
              shouldUseReducedMotion: E,
              header: (0, Y.jsxs)(`div`, {
                className: `flex items-center gap-3 select-none`,
                children: [
                  d == null
                    ? null
                    : (0, Y.jsx)(p, {
                        color: `outlineSurface`,
                        size: `dialog`,
                        radius: `full`,
                        uniform: !0,
                        "aria-label": x.formatMessage({
                          id: `images.reference.back`,
                          defaultMessage: `Back to suggestions`,
                          description: `Return from reference photos to image prompt suggestions without clearing the composer`,
                        }),
                        onClick: d,
                        children: (0, Y.jsx)(y, {}),
                      }),
                  (0, Y.jsx)(`h2`, {
                    className: `text-base font-medium text-default`,
                    children: (0, Y.jsx)(C, {
                      id: `images.reference.attach`,
                      defaultMessage: `Attach a photo`,
                      description: `Heading above the photo upload carousel on the Images page`,
                    }),
                  }),
                ],
              }),
              children: [(0, Y.jsx)(V, { disabled: i || o, layout: `carousel`, onUpload: f }), H],
            })),
      (n[24] = i),
      (n[25] = x),
      (n[26] = h),
      (n[27] = d),
      (n[28] = f),
      (n[29] = H),
      (n[30] = E),
      (n[31] = o),
      (n[32] = J))
    : (J = n[32]);
  let X;
  return (
    n[33] !== W || n[34] !== G || n[35] !== J
      ? ((X = (0, Y.jsxs)(`section`, { className: W, children: [G, J] })),
        (n[33] = W),
        (n[34] = G),
        (n[35] = J),
        (n[36] = X))
      : (X = n[36]),
    X
  );
}
function K(e) {
  let t = (0, q.c)(17),
    { image: n } = e,
    r = g(F),
    i = g(T),
    a = (0, J.useRef)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = { once: !0 }), (t[0] = o)) : (o = t[0]);
  let s = _(a, o),
    c = r ?? `unscoped`,
    l = i ?? `unscoped`,
    u;
  t[1] !== c || t[2] !== l
    ? ((u = [`chatgpt-images-recent-upload`, c, l]), (t[1] = c), (t[2] = l), (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === n.download_url
    ? (d = t[5])
    : ((d = async () => ({ kind: `available`, ...D({ download_url: n.download_url }) })),
      (t[4] = n.download_url),
      (t[5] = d));
  let f;
  t[6] !== u || t[7] !== d
    ? ((f = { cacheKey: u, resolveAsset: d }), (t[6] = u), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === s ? (p = t[10]) : ((p = { enabled: s }), (t[9] = s), (t[10] = p));
  let { src: m, isError: h } = j(n.file_id, f, p),
    v;
  t[11] === h
    ? (v = t[12])
    : ((v = h ? (0, Y.jsx)(w, {}) : (0, Y.jsx)(k, { className: `size-full` })), (t[11] = h), (t[12] = v));
  let y = v;
  if (m != null) {
    let e;
    (t[13] === m
      ? (e = t[14])
      : ((e = (0, Y.jsx)(`img`, {
          className: `absolute inset-0 size-full object-cover`,
          src: m,
          alt: ``,
          loading: `lazy`,
        })),
        (t[13] = m),
        (t[14] = e)),
      (y = e));
  }
  let b;
  return (
    t[15] === y
      ? (b = t[16])
      : ((b = (0, Y.jsx)(`div`, {
          ref: a,
          className: `flex size-full items-center justify-center`,
          children: y,
        })),
        (t[15] = y),
        (t[16] = b)),
    b
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = l()),
      c(),
      x(),
      h(),
      (J = r()),
      f(),
      N(),
      E(),
      O(),
      R(),
      m(),
      d(),
      A(),
      I(),
      n(),
      S(),
      P(),
      W(),
      (Y = o()));
  }))();
}
export { W as a, V as i, G as n, X as r, K as t };
//# sourceMappingURL=uploads-integration-rail-b13a659ac237.js.map
