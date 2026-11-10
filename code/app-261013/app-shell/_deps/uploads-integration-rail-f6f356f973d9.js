import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $R as n,
  Cot as r,
  DG as i,
  IDt as a,
  Ixt as o,
  JCt as s,
  JG as c,
  Pxt as l,
  QR as u,
  TJ as d,
  VDt as f,
  Vxt as p,
  YCt as m,
  _Mt as h,
  gMt as g,
  jDt as _,
  sB as v,
  t3 as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as T,
  QGn as E,
  XMn as D,
  XMr as O,
  nEt as k,
  nKn as A,
  tEt as j,
  tNr as M,
  wKn as N,
  xKn as P,
  xNn as F,
} from "./app-initial-5851df3f6cb1.js";
import { n as I, t as L } from "./option-carousel-e5b5a4ffecb9.js";
import { n as R, r as z, t as B } from "./recent-uploads-106733e87eb0.js";
function V(e) {
  let t = (0, H.c)(8),
    { disabled: n, layout: r, onUpload: i } = e,
    o = r === `carousel` ? `w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start` : `w-full`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = g(
        `relative flex aspect-[4/5] cursor-interaction items-center justify-center rounded-3xl bg-primary-ghost-hover text-secondary outline-none select-none focus-visible:outline-2 focus-visible:outline-ring enabled:hover:bg-primary-ghost-focus disabled:cursor-default disabled:opacity-40`,
        o,
      )),
      (t[0] = o),
      (t[1] = s));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, U.jsx)(c, {})), (t[2] = l)) : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, U.jsx)(`span`, {
        className: `absolute inset-x-0 bottom-0 p-3 text-start text-sm leading-5`,
        children: (0, U.jsx)(a, {
          id: `images.reference.upload`,
          defaultMessage: `Upload a photo`,
          description: `Button to choose a new reference photo from the device for image creation`,
        }),
      })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  return (
    t[4] !== n || t[5] !== i || t[6] !== s
      ? ((d = (0, U.jsxs)(`button`, {
          type: `button`,
          className: s,
          disabled: n,
          onClick: i,
          children: [l, u],
        })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = s),
        (t[7] = d))
      : (d = t[7]),
    d
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = b()), h(), _(), d(), (U = S()));
  }))();
}
function G(e) {
  let i = (0, q.c)(37),
    {
      conversationId: s,
      disabled: c,
      uploadDisabled: l,
      layout: u,
      signal: d,
      onBack: m,
      onUpload: h,
      onRecentImageSelected: _,
    } = e,
    y = u === void 0 ? `carousel` : u,
    b = o(r),
    x = f(),
    S = p(T),
    C = p(O),
    E = p(n),
    { data: k, isPending: A, isError: M, refetch: N } = w(z, !0),
    P = w(D, s),
    F;
  i[0] !== S ||
  i[1] !== s ||
  i[2] !== c ||
  i[3] !== x ||
  i[4] !== y ||
  i[5] !== _ ||
  i[6] !== b ||
  i[7] !== d?.aborted ||
  i[8] !== C
    ? ((F = (e, t) => {
        let n = `image-reference:${e.file_id}:`,
          r = `${n}${crypto.randomUUID()}`,
          i = b.get(D, s);
        if (c || d?.aborted || S == null || C == null || S !== b.get(T) || C !== b.get(O)) return;
        let a = i.find((t) => t.status === `ready` && t.id === e.file_id);
        if (y === `recents` && a != null) {
          _(a.uploadId);
          return;
        }
        if (
          i.some(
            (t) =>
              (t.status === `ready` && t.id === e.file_id) ||
              (t.uploadId.startsWith(n) && t.status === `uploading`),
          )
        )
          return;
        let o = x.formatMessage(
          {
            id: `images.reference.photoName`,
            defaultMessage: `Photo {position}`,
            description: `Name for a recently uploaded reference photo on the Images page. Position is its one-based position in the recent photos list.`,
          },
          { position: t + 1 },
        );
        (b.set(D, s, (t) => [
          ...t.filter((e) => !e.uploadId.startsWith(n)),
          { ...B(e, o), uploadId: r, status: `ready` },
        ]),
          _(r));
      }),
      (i[0] = S),
      (i[1] = s),
      (i[2] = c),
      (i[3] = x),
      (i[4] = y),
      (i[5] = _),
      (i[6] = b),
      (i[7] = d?.aborted),
      (i[8] = C),
      (i[9] = F))
    : (F = i[9]);
  let I = F;
  if (y === `recents` && !A && !M && k?.items.length === 0) return null;
  let R;
  i[10] !== k?.items ||
  i[11] !== c ||
  i[12] !== x ||
  i[13] !== A ||
  i[14] !== y ||
  i[15] !== I ||
  i[16] !== E ||
  i[17] !== P
    ? ((R = A
        ? Array.from({ length: 4 }, (e, t) =>
            (0, Y.jsx)(
              j,
              {
                className: g(
                  y === `recents`
                    ? `aspect-square w-18 min-w-0 rounded-xl corner-superellipse/1.1`
                    : `aspect-[4/5] w-[calc((100%-3rem)/5)] min-w-32 shrink-0 rounded-2xl`,
                  y === `recents` && t === 3 && `hidden sm:block`,
                ),
              },
              t,
            ),
          )
        : (y === `recents` ? k?.items.slice(0, 4) : k?.items)?.map((e, t) => {
            let n = P.find(
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
                className: g(
                  `flex-col gap-1`,
                  y === `recents` ? `w-18 min-w-0` : `w-[calc((100%-3rem)/5)] min-w-32 shrink-0 snap-start`,
                  y === `recents` && t === 3 ? `hidden sm:flex` : `flex`,
                ),
                children: [
                  (0, Y.jsx)(`button`, {
                    type: `button`,
                    className: g(
                      `relative flex cursor-interaction items-center justify-center overflow-hidden bg-surface-secondary text-tertiary outline-none focus-visible:outline-2 focus-visible:outline-ring disabled:cursor-default`,
                      y === `recents`
                        ? `aspect-square w-full rounded-xl corner-superellipse/1.1`
                        : `aspect-[4/5] w-full rounded-2xl`,
                      y === `recents` &&
                        !E &&
                        `transition-transform duration-basic ease-enter-snappy enabled:hover:scale-105 enabled:active:scale-95`,
                    ),
                    "aria-label": r,
                    disabled:
                      c || (n != null && n.status !== `error` && (y !== `recents` || n.status !== `ready`)),
                    onClick: () => I(e, t),
                    children: (0, Y.jsx)(K, { image: e }),
                  }),
                  n?.status === `error`
                    ? (0, Y.jsx)(`span`, {
                        role: `alert`,
                        className: `text-xs text-secondary`,
                        children: (0, Y.jsx)(a, {
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
      (i[10] = k?.items),
      (i[11] = c),
      (i[12] = x),
      (i[13] = A),
      (i[14] = y),
      (i[15] = I),
      (i[16] = E),
      (i[17] = P),
      (i[18] = R))
    : (R = i[18]);
  let H = R,
    U = y === `recents` && `mt-5`,
    W;
  i[19] === U ? (W = i[20]) : ((W = g(`flex min-w-0 flex-col gap-3`, U)), (i[19] = U), (i[20] = W));
  let G;
  i[21] !== M || i[22] !== N
    ? ((G = M
        ? (0, Y.jsxs)(`div`, {
            role: `alert`,
            className: `flex flex-wrap items-center gap-2 text-sm text-secondary`,
            children: [
              (0, Y.jsx)(a, {
                id: `images.reference.loadError`,
                defaultMessage: `Recent photos couldn't be loaded`,
                description: `Error above the recent reference-photo list on the Images page when fetching photo history fails. Uploading a new image remains available.`,
              }),
              (0, Y.jsx)(t, {
                color: `ghostSecondary`,
                onClick: () => void N(),
                children: (0, Y.jsx)(a, {
                  id: `images.reference.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading recent reference photos on the Images creation page`,
                }),
              }),
            ],
          })
        : null),
      (i[21] = M),
      (i[22] = N),
      (i[23] = G))
    : (G = i[23]);
  let J;
  i[24] !== c ||
  i[25] !== x ||
  i[26] !== y ||
  i[27] !== m ||
  i[28] !== h ||
  i[29] !== H ||
  i[30] !== E ||
  i[31] !== l
    ? ((J =
        y === `recents`
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(`h2`, {
                  className: `box-trim-0.5 text-base leading-relaxed font-medium text-tertiary select-none`,
                  children: (0, Y.jsx)(a, {
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
                  m == null
                    ? null
                    : (0, Y.jsx)(t, {
                        color: `outlineSurface`,
                        size: `dialog`,
                        radius: `full`,
                        uniform: !0,
                        "aria-label": x.formatMessage({
                          id: `images.reference.back`,
                          defaultMessage: `Back to suggestions`,
                          description: `Return from reference photos to image prompt suggestions without clearing the composer`,
                        }),
                        onClick: m,
                        children: (0, Y.jsx)(v, {}),
                      }),
                  (0, Y.jsx)(`h2`, {
                    className: `text-base font-medium text-default`,
                    children: (0, Y.jsx)(a, {
                      id: `images.reference.attach`,
                      defaultMessage: `Attach a photo`,
                      description: `Heading above the photo upload carousel on the Images page`,
                    }),
                  }),
                ],
              }),
              children: [(0, Y.jsx)(V, { disabled: c || l, layout: `carousel`, onUpload: h }), H],
            })),
      (i[24] = c),
      (i[25] = x),
      (i[26] = y),
      (i[27] = m),
      (i[28] = h),
      (i[29] = H),
      (i[30] = E),
      (i[31] = l),
      (i[32] = J))
    : (J = i[32]);
  let X;
  return (
    i[33] !== W || i[34] !== G || i[35] !== J
      ? ((X = (0, Y.jsxs)(`section`, { className: W, children: [G, J] })),
        (i[33] = W),
        (i[34] = G),
        (i[35] = J),
        (i[36] = X))
      : (X = i[36]),
    X
  );
}
function K(e) {
  let t = (0, q.c)(17),
    { image: n } = e,
    r = p(T),
    a = p(O),
    o = (0, J.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { once: !0 }), (t[0] = s)) : (s = t[0]);
  let c = m(o, s),
    l = r ?? `unscoped`,
    u = a ?? `unscoped`,
    d;
  t[1] !== l || t[2] !== u
    ? ((d = [`chatgpt-images-recent-upload`, l, u]), (t[1] = l), (t[2] = u), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] === n.download_url
    ? (f = t[5])
    : ((f = async () => ({ kind: `available`, ...P({ download_url: n.download_url }) })),
      (t[4] = n.download_url),
      (t[5] = f));
  let h;
  t[6] !== d || t[7] !== f
    ? ((h = { cacheKey: d, resolveAsset: f }), (t[6] = d), (t[7] = f), (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === c ? (g = t[10]) : ((g = { enabled: c }), (t[9] = c), (t[10] = g));
  let { src: _, isError: v } = A(n.file_id, h, g),
    y;
  t[11] === v
    ? (y = t[12])
    : ((y = v ? (0, Y.jsx)(i, {}) : (0, Y.jsx)(j, { className: `size-full` })), (t[11] = v), (t[12] = y));
  let b = y;
  if (_ != null) {
    let e;
    (t[13] === _
      ? (e = t[14])
      : ((e = (0, Y.jsx)(`img`, {
          className: `absolute inset-0 size-full object-cover`,
          src: _,
          alt: ``,
          loading: `lazy`,
        })),
        (t[13] = _),
        (t[14] = e)),
      (b = e));
  }
  let x;
  return (
    t[15] === b
      ? (x = t[16])
      : ((x = (0, Y.jsx)(`div`, {
          ref: o,
          className: `flex size-full items-center justify-center`,
          children: b,
        })),
        (t[15] = b),
        (t[16] = x)),
    x
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = b()),
      h(),
      s(),
      l(),
      (J = C()),
      _(),
      M(),
      F(),
      N(),
      R(),
      y(),
      d(),
      k(),
      I(),
      x(),
      u(),
      E(),
      W(),
      (Y = S()));
  }))();
}
export { W as a, V as i, G as n, X as r, K as t };
//# sourceMappingURL=uploads-integration-rail-f6f356f973d9.js.map
