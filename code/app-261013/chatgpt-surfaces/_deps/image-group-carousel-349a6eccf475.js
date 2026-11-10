import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Ah as n,
  Mz as r,
  Nz as i,
  VDt as a,
  _Mt as o,
  bE as s,
  gMt as c,
  jDt as l,
  kh as u,
  t3 as d,
  vzt as f,
  xMt as p,
  yE as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import { Ss as g, xs as _ } from "./app-initial-5851df3f6cb1.js";
import { n as v, t as ee } from "./generated-image-placeholder-8a3a4a0b8b61.js";
import { n as y, t as b } from "./carousel-pagination-d365d8987134.js";
import { n as x, t as S } from "./generated-image-source-27993f6c1759.js";
var C, w;
function T() {
  return (T = e(() => {
    ((C = h()), (w = (0, C.createContext)(null)));
  }))();
}
function E(e) {
  let n = (0, A.c)(56),
    {
      ref: i,
      conversationId: o,
      firstPhotoFallbackSrc: s,
      imageAssetResolver: l,
      images: d,
      onOpenImage: f,
      onArrowClick: p,
      presentation: h,
    } = e,
    g = h === void 0 ? `sidebar` : h,
    _ = a(),
    v = (0, j.useContext)(w),
    ee = (0, j.useRef)(null),
    y = (0, j.useRef)(null),
    x = (0, j.useRef)(null),
    S;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = new Map()), (n[0] = S)) : (S = n[0]);
  let C = (0, j.useRef)(S),
    T;
  (n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = () => ({ getThumbnail: (e) => C.current.get(e) ?? null })), (n[1] = T))
    : (T = n[1]),
    (0, j.useImperativeHandle)(i, T));
  let [E, N] = (0, j.useState)(0),
    [P, F] = (0, j.useState)(null),
    I;
  n[2] === P ? (I = n[3]) : ((I = (e) => e.id === P), (n[2] = P), (n[3] = I));
  let L = d.findIndex(I),
    R = d[L],
    z = Math.min(E, d.length - 1),
    te;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (e) => {
        let t = ee.current;
        if (t == null) return;
        let n = k(t, e);
        ((y.current = Math.abs(t.scrollLeft - n) <= 1 ? null : n), t.scrollTo({ left: n }), N(e));
      }),
      (n[4] = te))
    : (te = n[4]);
  let B = te,
    ne;
  n[5] === d.length
    ? (ne = n[6])
    : ((ne = (e) => {
        let t = 0,
          n = 1 / 0;
        for (let r = 0; r < d.length; r += 1) {
          let i = Math.abs(k(e, r) - e.scrollLeft);
          i < n && ((n = i), (t = r));
        }
        N(t);
      }),
      (n[5] = d.length),
      (n[6] = ne));
  let re = ne,
    ie = g === `sidebar` && `mb-5`,
    V;
  n[7] === ie ? (V = n[8]) : ((V = c(`-mx-6`, ie)), (n[7] = ie), (n[8] = V));
  let ae = g === `dialog` ? `h-56 sm:h-64` : `aspect-5/4`,
    H;
  n[9] === ae
    ? (H = n[10])
    : ((H = c(`group relative overflow-hidden select-none`, ae)), (n[9] = ae), (n[10] = H));
  let U;
  n[11] === _
    ? (U = n[12])
    : ((U = _.formatMessage({
        id: `chatgpt.imageGroup.photos`,
        defaultMessage: `Photos`,
        description: `Accessible name for the photo carousel in a ChatGPT entity details panel`,
      })),
      (n[11] = _),
      (n[12] = U));
  let W;
  n[13] === _
    ? (W = n[14])
    : ((W = _.formatMessage({
        id: `chatgpt.imageGroup.carouselRole`,
        defaultMessage: `carousel`,
        description: `Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel`,
      })),
      (n[13] = _),
      (n[14] = W));
  let G;
  n[15] !== d.length || n[16] !== B || n[17] !== z
    ? ((G = (e) => {
        if (
          !(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) &&
          (e.key === `ArrowRight` || e.key === `ArrowLeft`)
        ) {
          (e.preventDefault(), e.stopPropagation());
          let t = getComputedStyle(e.currentTarget).direction === `rtl`;
          B(e.key === (t ? `ArrowLeft` : `ArrowRight`) ? (z + 1) % d.length : Math.max(0, z - 1));
        }
      }),
      (n[15] = d.length),
      (n[16] = B),
      (n[17] = z),
      (n[18] = G))
    : (G = n[18]);
  let K, q;
  n[19] === re
    ? ((K = n[20]), (q = n[21]))
    : ((K = (e) => {
        let t = e.currentTarget,
          n = y.current;
        if (n != null) {
          Math.abs(t.scrollLeft - n) <= 1 && (y.current = null);
          return;
        }
        re(t);
      }),
      (q = (e) => {
        ((y.current = null), re(e.currentTarget));
      }),
      (n[19] = re),
      (n[20] = K),
      (n[21] = q));
  let J, Y;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = () => {
        y.current = null;
      }),
      (Y = () => {
        y.current = null;
      }),
      (n[22] = J),
      (n[23] = Y))
    : ((J = n[22]), (Y = n[23]));
  let oe = d.map((e, t) =>
      (0, M.jsx)(
        D,
        {
          conversationId: o,
          fallbackSrc: t === 0 ? s : void 0,
          image: e,
          imageAssetResolver: l,
          imageNumber: t + 1,
          imageRef: (t) => {
            if (t != null)
              return (
                C.current.set(e.id, t),
                () => {
                  C.current.get(e.id) === t && C.current.delete(e.id);
                }
              );
          },
          single: d.length === 1,
          presentation: g,
          onOpen: (n) => {
            f == null ? ((x.current = n), F(e.id)) : f(t);
          },
        },
        e.id,
      ),
    ),
    X;
  n[24] !== K || n[25] !== q || n[26] !== J || n[27] !== Y || n[28] !== oe
    ? ((X = (0, M.jsx)(`div`, {
        ref: ee,
        className: `relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto`,
        onScroll: K,
        onScrollEnd: q,
        onPointerDown: J,
        onWheel: Y,
        children: oe,
      })),
      (n[24] = K),
      (n[25] = q),
      (n[26] = J),
      (n[27] = Y),
      (n[28] = oe),
      (n[29] = X))
    : (X = n[29]);
  let Z;
  n[30] !== d.length || n[31] !== _ || n[32] !== p || n[33] !== B || n[34] !== z
    ? ((Z =
        d.length > 1
          ? (0, M.jsxs)(M.Fragment, {
              children: [
                (0, M.jsxs)(`div`, {
                  className: `pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`,
                  children: [
                    (0, M.jsx)(t, {
                      className: c(`pointer-events-auto`, z === 0 && `invisible`),
                      "aria-label": _.formatMessage({
                        id: `chatgpt.imageGroup.previousPhoto`,
                        defaultMessage: `Previous photo`,
                        description: `Accessible label for the previous photo button in a ChatGPT entity photo carousel`,
                      }),
                      color: `mediaSolid`,
                      radius: `full`,
                      size: `inputIcon`,
                      onClick: () => {
                        let e = Math.max(0, z - 1);
                        (e !== z && p?.(`previous`, e), B(e));
                      },
                      children: (0, M.jsx)(r, { className: `rtl:rotate-180`, asset: u }),
                    }),
                    (0, M.jsx)(t, {
                      className: `pointer-events-auto`,
                      "aria-label": _.formatMessage({
                        id: `chatgpt.imageGroup.nextPhoto`,
                        defaultMessage: `Next photo`,
                        description: `Accessible label for the next photo button in a ChatGPT entity photo carousel`,
                      }),
                      color: `mediaSolid`,
                      radius: `full`,
                      size: `inputIcon`,
                      onClick: () => {
                        let e = (z + 1) % d.length;
                        (e !== z && p?.(`next`, e), B(e));
                      },
                      children: (0, M.jsx)(r, { className: `rtl:rotate-180`, asset: m }),
                    }),
                  ],
                }),
                d.length <= 20
                  ? (0, M.jsx)(`div`, {
                      className: `absolute inset-x-0 bottom-3 flex justify-center`,
                      children: (0, M.jsx)(b, {
                        count: d.length,
                        activeIndex: z,
                        getPageLabel: (e) =>
                          _.formatMessage(
                            {
                              id: `chatgpt.imageGroup.goToPhoto`,
                              defaultMessage: `Go to photo {number}`,
                              description: `Accessible label for a photo carousel position indicator; number is the one-based photo position`,
                            },
                            { number: e + 1 },
                          ),
                        onSelect: B,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[30] = d.length),
      (n[31] = _),
      (n[32] = p),
      (n[33] = B),
      (n[34] = z),
      (n[35] = Z))
    : (Z = n[35]);
  let Q;
  n[36] !== v || n[37] !== H || n[38] !== U || n[39] !== W || n[40] !== G || n[41] !== X || n[42] !== Z
    ? ((Q = (0, M.jsxs)(`div`, {
        ref: v,
        className: H,
        "data-entity-photos": !0,
        "aria-label": U,
        "aria-roledescription": W,
        role: `region`,
        onKeyDown: G,
        children: [X, Z],
      })),
      (n[36] = v),
      (n[37] = H),
      (n[38] = U),
      (n[39] = W),
      (n[40] = G),
      (n[41] = X),
      (n[42] = Z),
      (n[43] = Q))
    : (Q = n[43]);
  let $;
  n[44] !== o || n[45] !== l || n[46] !== d || n[47] !== x || n[48] !== R || n[49] !== L || n[50] !== F
    ? (($ =
        R == null
          ? null
          : (0, M.jsx)(O, {
              conversationId: o,
              image: R,
              imageAssetResolver: l,
              imageNumber: L + 1,
              onClose: () => F(null),
              onCloseAutoFocus: (e) => {
                (e.preventDefault(), x.current?.focus());
              },
              onPreviousImage: L > 0 ? () => F(d[L - 1].id) : void 0,
              onNextImage: L < d.length - 1 ? () => F(d[L + 1].id) : void 0,
            })),
      (n[44] = o),
      (n[45] = l),
      (n[46] = d),
      (n[47] = x),
      (n[48] = R),
      (n[49] = L),
      (n[50] = F),
      (n[51] = $))
    : ($ = n[51]);
  let se;
  return (
    n[52] !== Q || n[53] !== $ || n[54] !== V
      ? ((se = (0, M.jsxs)(`div`, {
          className: V,
          "data-testid": `chatgpt-image-group-carousel`,
          children: [Q, $],
        })),
        (n[52] = Q),
        (n[53] = $),
        (n[54] = V),
        (n[55] = se))
      : (se = n[55]),
    se
  );
}
function D(e) {
  let t = (0, A.c)(36),
    {
      conversationId: n,
      fallbackSrc: r,
      image: i,
      imageAssetResolver: o,
      imageNumber: s,
      imageRef: l,
      onOpen: u,
      single: d,
      presentation: f,
    } = e,
    p = a(),
    [m, h] = (0, j.useState)(null),
    [g, _] = (0, j.useState)(null),
    v = i.previewSrc != null && i.previewSrc !== g ? i.previewSrc : i.src,
    y;
  t[0] !== n || t[1] !== o || t[2] !== v
    ? ((y = { src: v, conversationId: n, imageAssetResolver: o, shouldLoadFileDataUrl: !1 }),
      (t[0] = n),
      (t[1] = o),
      (t[2] = v),
      (t[3] = y))
    : (y = t[3]);
  let { previewSrc: b } = x(y),
    S = r != null && (b == null || m !== b),
    C = d && `w-full`,
    w = !d && (f === `dialog` ? `w-2/3` : `max-w-19/20`),
    T;
  t[4] !== C || t[5] !== w
    ? ((T = c(
        `relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring`,
        C,
        w,
      )),
      (t[4] = C),
      (t[5] = w),
      (t[6] = T))
    : (T = t[6]);
  let E;
  t[7] !== r || t[8] !== i.height || t[9] !== i.width || t[10] !== f || t[11] !== d
    ? ((E =
        d || f === `dialog`
          ? void 0
          : { aspectRatio: r == null ? `${i.width ?? 1}/${i.height ?? 1}` : `5/4` }),
      (t[7] = r),
      (t[8] = i.height),
      (t[9] = i.width),
      (t[10] = f),
      (t[11] = d),
      (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] !== s || t[14] !== p
    ? ((D = p.formatMessage(
        {
          id: `chatgpt.imageGroup.openPhoto`,
          defaultMessage: `Open photo {number}`,
          description: `Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position`,
        },
        { number: s },
      )),
      (t[13] = s),
      (t[14] = p),
      (t[15] = D))
    : (D = t[15]);
  let O;
  t[16] === u ? (O = t[17]) : ((O = (e) => u(e.currentTarget)), (t[16] = u), (t[17] = O));
  let k;
  t[18] !== r || t[19] !== i.previewSrc || t[20] !== l || t[21] !== m || t[22] !== b || t[23] !== S
    ? ((k =
        b == null
          ? (0, M.jsx)(ee, { className: `h-full w-full` })
          : (0, M.jsx)(`img`, {
              ref: S ? void 0 : l,
              className: c(
                `h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none`,
                r == null && m !== b && `opacity-0`,
              ),
              src: b,
              alt: ``,
              draggable: !1,
              loading: r == null ? `lazy` : `eager`,
              referrerPolicy: `no-referrer`,
              onLoad: () => h(b),
              onError: () => _(i.previewSrc ?? null),
            })),
      (t[18] = r),
      (t[19] = i.previewSrc),
      (t[20] = l),
      (t[21] = m),
      (t[22] = b),
      (t[23] = S),
      (t[24] = k))
    : (k = t[24]);
  let N;
  t[25] !== r || t[26] !== l || t[27] !== S
    ? ((N = S
        ? (0, M.jsx)(`img`, {
            ref: l,
            className: `pointer-events-none absolute inset-0 h-full w-full object-cover`,
            src: r,
            alt: ``,
            "aria-hidden": !0,
            draggable: !1,
            fetchPriority: `high`,
            loading: `eager`,
            referrerPolicy: `no-referrer`,
          })
        : null),
      (t[25] = r),
      (t[26] = l),
      (t[27] = S),
      (t[28] = N))
    : (N = t[28]);
  let P;
  return (
    t[29] !== N || t[30] !== T || t[31] !== E || t[32] !== D || t[33] !== O || t[34] !== k
      ? ((P = (0, M.jsxs)(`button`, {
          className: T,
          style: E,
          "aria-label": D,
          type: `button`,
          onClick: O,
          children: [k, N],
        })),
        (t[29] = N),
        (t[30] = T),
        (t[31] = E),
        (t[32] = D),
        (t[33] = O),
        (t[34] = k),
        (t[35] = P))
      : (P = t[35]),
    P
  );
}
function O(e) {
  let t = (0, A.c)(16),
    {
      conversationId: n,
      image: r,
      imageAssetResolver: i,
      imageNumber: o,
      onClose: s,
      onCloseAutoFocus: c,
      onNextImage: l,
      onPreviousImage: u,
    } = e,
    d = a(),
    f;
  t[0] !== n || t[1] !== r.src || t[2] !== i
    ? ((f = { src: r.src, conversationId: n, imageAssetResolver: i, shouldLoadFileDataUrl: !1 }),
      (t[0] = n),
      (t[1] = r.src),
      (t[2] = i),
      (t[3] = f))
    : (f = t[3]);
  let { previewSrc: p } = x(f);
  if (p == null) return null;
  let m;
  t[4] !== o || t[5] !== d
    ? ((m = d.formatMessage(
        {
          id: `chatgpt.imageGroup.photoAlt`,
          defaultMessage: `Photo {number}`,
          description: `Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position`,
        },
        { number: o },
      )),
      (t[4] = o),
      (t[5] = d),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === s
    ? (h = t[8])
    : ((h = (e) => {
        e || s();
      }),
      (t[7] = s),
      (t[8] = h));
  let g;
  return (
    t[9] !== c || t[10] !== l || t[11] !== u || t[12] !== p || t[13] !== m || t[14] !== h
      ? ((g = (0, M.jsx)(_, {
          alt: m,
          src: p,
          showDownload: !1,
          imageReferrerPolicy: `no-referrer`,
          open: !0,
          onCloseAutoFocus: c,
          onOpenChange: h,
          onNextImage: l,
          onPreviousImage: u,
        })),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
function k(e, t) {
  let n = e.children.item(t);
  if (!(n instanceof HTMLElement)) return 0;
  let r = getComputedStyle(e).direction === `rtl`,
    i = e.scrollWidth - e.clientWidth,
    a = n.offsetLeft - (e.clientWidth - n.offsetWidth) / 2;
  return (
    t === 0
      ? (a = 0)
      : t === e.children.length - 1 && (a = r ? n.offsetLeft : n.offsetLeft + n.offsetWidth - e.clientWidth),
    r ? Math.max(-i, Math.min(0, a)) : Math.max(0, Math.min(i, a))
  );
}
var A, j, M;
function N() {
  return (N = e(() => {
    ((A = f()), n(), s(), o(), (j = h()), l(), d(), y(), i(), v(), S(), g(), T(), (M = p()));
  }))();
}
export { T as i, N as n, w as r, E as t };
//# sourceMappingURL=image-group-carousel-349a6eccf475.js.map
