const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./background-artwork-player-5ef0f5a59156.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./src-2f77e687e887.js",
      "./ValdiRuntimeProvider-2b6173af5e2b.js",
      "./LocaleResolver-ec903b26648d.js",
      "./Buffer-894a440955a0.js",
      "./CancelablePromise-9c54b89028f7.js",
      "./home-beacon-763f3a328d96.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./chatgpt_finance-6f5d98dfb009.js",
      "./plaid-link-7ebfb008cf36.js",
      "./plaid-link-fb2ecd2502fa.css",
      "./beacon-b3dc5ec33bd7.js",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./library-connect-provider-logos-a622da60af1e.js",
      "./library-provider-filter-eb6e18971656.js",
      "./library-providers-987490869a4e.js",
      "./Sharepoint-3cab95ef90ef.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $E as n,
  B4 as r,
  BV as i,
  CJ as a,
  Cat as o,
  Cot as ee,
  Cxt as s,
  EPt as c,
  Ext as l,
  Fz as u,
  HB as d,
  Ixt as f,
  JCt as p,
  JR as m,
  KE as h,
  LV as g,
  Pxt as _,
  Pz as v,
  QE as y,
  SJ as b,
  TJ as x,
  TL as S,
  TLt as C,
  VDt as te,
  Vxt as w,
  YCt as T,
  YR as E,
  _Mt as D,
  _O as O,
  _xt as k,
  eD as A,
  fO as j,
  fPt as M,
  gMt as N,
  gO as P,
  hot as F,
  jDt as I,
  lot as L,
  mO as R,
  oO as ne,
  pLt as z,
  pPt as B,
  qE as re,
  t3 as V,
  tD as H,
  vO as ie,
  vzt as U,
  wL as W,
  wot as G,
  xMt as K,
  xat as ae,
  yzt as q,
  z4 as oe,
  zxt as J,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Zt as se,
  APr as ce,
  AQt as le,
  CQt as ue,
  DPn as de,
  FEr as fe,
  FQt as pe,
  Fin as me,
  GHn as he,
  GQt as ge,
  H4t as _e,
  HCn as ve,
  Hin as ye,
  J4t as Y,
  JAt as be,
  JPn as xe,
  JQt as Se,
  KHn as Ce,
  LAt as we,
  MPr as Te,
  MQt as Ee,
  NDr as De,
  NQt as Oe,
  OPr as ke,
  PEr as Ae,
  QMr as je,
  RAt as Me,
  RQt as Ne,
  TPn as Pe,
  TQt as Fe,
  UAt as Ie,
  V4t as Le,
  WCn as Re,
  WQt as ze,
  XPn as Be,
  ZAt as Ve,
  aQt as He,
  cQt as Ue,
  dMr as We,
  fMr as Ge,
  fur as Ke,
  iPr as qe,
  iQt as Je,
  jDr as Ye,
  jQt as Xe,
  kPr as Ze,
  kQt as Qe,
  lQt as $e,
  nSn as et,
  oQt as tt,
  pOr as nt,
  pur as rt,
  qQt as it,
  rSn as at,
  sCr as ot,
  sPr as st,
  sQt as ct,
  tNr as lt,
  uQt as ut,
  wQt as dt,
  yCr as ft,
  zQt as pt,
} from "./app-initial-5851df3f6cb1.js";
import {
  $y as mt,
  Bv as ht,
  By as gt,
  Fv as _t,
  Gg as vt,
  Gy as yt,
  Hg as bt,
  Hy as xt,
  Iv as St,
  Kg as Ct,
  Ky as wt,
  Lv as Tt,
  Mv as Et,
  Nv as Dt,
  O_ as Ot,
  Pv as kt,
  Qg as X,
  Qy as At,
  Rv as jt,
  Ug as Mt,
  Uy as Nt,
  Vy as Pt,
  Wy as Ft,
  Yg as It,
  Yy as Lt,
  Zg as Rt,
  Zy as zt,
  av as Bt,
  bb as Vt,
  bv as Ht,
  cv as Ut,
  db as Wt,
  e_ as Gt,
  eb as Kt,
  ev as qt,
  fb as Jt,
  jv as Yt,
  k_ as Xt,
  lv as Zt,
  sv as Qt,
  t_ as $t,
  tv as en,
  vb as tn,
  xv as nn,
} from "./app-primary-fe8a450b3b04.js";
import {
  a as rn,
  c as an,
  i as on,
  l as sn,
  n as cn,
  o as ln,
  r as un,
  s as dn,
  t as fn,
} from "./pca-connector-eligibility-3c195602e15a.js";
import { n as pn, t as mn } from "./actions-e5d1d3a8760e.js";
import { n as hn, t as gn } from "./modal-91ebdd72146e.js";
import { n as _n, t as vn } from "./pca-connector-action-9318b684dcd3.js";
var yn;
function bn() {
  return (bn = e(() => {
    (c(),
      (yn = z({
        background_valdi_artwork_url: C()
          .optional()
          .catch(void 0),
        background_valdi_artwork_url_dark: C()
          .optional()
          .catch(void 0),
      })));
  }))();
}
function xn(e) {
  let t = (0, Cn.c)(13),
    { allowRemoteImages: n, beacon: r, isDark: i } = e,
    a = n === void 0 || n,
    [o, ee] = (0, wn.useState)(null),
    s = E(),
    c;
  if (t[0] !== r.custom_fields || t[1] !== i) {
    let e = yn.parse(r.custom_fields ?? {}),
      n =
        i && e.background_valdi_artwork_url_dark != null
          ? e.background_valdi_artwork_url_dark
          : e.background_valdi_artwork_url;
    ((c = n != null && Tt(n) ? n : null), (t[0] = r.custom_fields), (t[1] = i), (t[2] = c));
  } else c = t[2];
  let l = c,
    u =
      i && r.ui_info.background_image_url_dark != null
        ? r.ui_info.background_image_url_dark
        : r.ui_info.background_image_url,
    d = u != null && St(u) ? u : null;
  if (!a || (l == null && d == null)) return null;
  let f;
  t[3] !== o || t[4] !== d
    ? ((f =
        d == null || d === o
          ? null
          : (0, Tn.jsx)(
              `img`,
              {
                alt: ``,
                "aria-hidden": !0,
                className: `absolute inset-0 size-full object-contain`,
                "data-testid": `homepage-takeover-background-poster`,
                draggable: !1,
                referrerPolicy: `no-referrer`,
                src: d,
                onError: () => ee(d),
              },
              d,
            )),
      (t[3] = o),
      (t[4] = d),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === f ? (p = t[7]) : ((p = (0, Tn.jsx)(Tn.Fragment, { children: f })), (t[6] = f), (t[7] = p));
  let m = p,
    h;
  return (
    t[8] !== l || t[9] !== i || t[10] !== m || t[11] !== s
      ? ((h = (0, Tn.jsx)(`div`, {
          "aria-hidden": !0,
          className: `pointer-events-none relative aspect-240/91 w-120 max-w-full shrink-0 overflow-hidden`,
          "data-testid": `homepage-takeover-background-artwork`,
          children: s || l == null ? m : (0, Tn.jsx)(Sn, { animationUrl: l, fallback: m, isDark: i }, l),
        })),
        (t[8] = l),
        (t[9] = i),
        (t[10] = m),
        (t[11] = s),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function Sn(e) {
  let t = (0, Cn.c)(13),
    { animationUrl: n, fallback: r, isDark: i } = e,
    a = (0, wn.useRef)(null),
    o = T(a),
    ee = w(et),
    [s, c] = (0, wn.useState)(`loading`);
  if (s === `failed`) return r;
  let l = s === `ready` ? null : r,
    u = s === `ready` ? `absolute inset-0` : `invisible absolute inset-0`,
    d = o && ee === !0,
    f,
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => c(`failed`)), (p = () => c(`ready`)), (t[0] = f), (t[1] = p))
    : ((f = t[0]), (p = t[1]));
  let m;
  t[2] !== n || t[3] !== i || t[4] !== d
    ? ((m = (0, Tn.jsx)(En, { animationUrl: n, isDark: i, isPlaying: d, onError: f, onReady: p })),
      (t[2] = n),
      (t[3] = i),
      (t[4] = d),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] !== u || t[7] !== m
    ? ((h = (0, Tn.jsx)(`div`, { ref: a, className: u, children: m })), (t[6] = u), (t[7] = m), (t[8] = h))
    : (h = t[8]);
  let g;
  return (
    t[9] !== r || t[10] !== l || t[11] !== h
      ? ((g = (0, Tn.jsxs)(ve, { name: `HomepageTakeoverBackgroundArtwork`, fallback: r, children: [l, h] })),
        (t[9] = r),
        (t[10] = l),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
var Cn, wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    ((Cn = U()),
      p(),
      _(),
      (wn = q()),
      at(),
      Re(),
      oe(),
      m(),
      Dt(),
      bn(),
      (Tn = K()),
      B(),
      (En = r(() =>
        M(
          async () => {
            let { HomepageTakeoverBackgroundArtworkPlayer: e } = await import(
              `./background-artwork-player-5ef0f5a59156.js`
            );
            return { HomepageTakeoverBackgroundArtworkPlayer: e };
          },
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
          import.meta.url,
        ).then(({ HomepageTakeoverBackgroundArtworkPlayer: e }) => e),
      )));
  }))();
}
var On, kn;
function An() {
  return (An = e(() => {
    ((On = `_heroSubtitle_1vk6h_2`), (kn = { heroSubtitle: On }));
  }))();
}
function jn(e) {
  let t = (0, Mn.c)(70),
    {
      actionOverrides: n,
      allowExternalActions: r,
      allowRemoteImages: i,
      analyticsContext: a,
      beacon: o,
      eventAccountId: ee,
      eventMetadata: s,
      getActionOverride: c,
      isDark: l,
      isForegroundLoaded: u,
      onActionComplete: d,
      onComposerText: f,
      onDismiss: p,
      onForegroundError: m,
      onForegroundLoad: h,
      onSendPrompt: g,
      onStartVoice: _,
    } = e,
    v = (0, Nn.useId)(),
    y = o.ui_info,
    b = y.foreground_image_layout,
    x;
  t[0] !== i || t[1] !== y || t[2] !== l
    ? ((x = Et(y, l, i)), (t[0] = i), (t[1] = y), (t[2] = l), (t[3] = x))
    : (x = t[3]);
  let S = x;
  if (b.type !== `none` && S == null) return null;
  if (b.type !== `none` && !u && S != null) {
    let e;
    return (
      t[4] !== S || t[5] !== m || t[6] !== h
        ? ((e = (0, Z.jsx)(`img`, {
            alt: ``,
            "aria-hidden": !0,
            className: `hidden`,
            "data-testid": `homepage-takeover-foreground`,
            src: S,
            onError: m,
            onLoad: h,
          })),
          (t[4] = S),
          (t[5] = m),
          (t[6] = h),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let C = l && y.background_image_url_dark != null ? y.background_image_url_dark : y.background_image_url,
    te = C != null && St(C) ? C : null,
    w = b.type === `wide`,
    T = o.custom_fields?.hero_image_size === `wide`,
    E = T || o.custom_fields?.hero_image_size === `large` || o.custom_fields?.hero_image_size === `medium`,
    D = `size-24 sm:size-11`;
  T
    ? (D = `min-h-0 w-57.5 max-w-full`)
    : w
      ? (D = `h-56 w-full max-w-full overflow-hidden sm:h-auto sm:rounded-3xl`)
      : o.custom_fields?.hero_image_size === `large`
        ? (D = `size-24 sm:size-20.5`)
        : o.custom_fields?.hero_image_size === `medium`
          ? (D = `size-12`)
          : b.type === `centered` && b.size === `extra_small`
            ? (D = `size-9`)
            : b.type === `centered` && b.size === `small` && (D = `size-11`);
  let O = T ? `gap-3` : `gap-4 sm:gap-6`,
    k;
  t[8] === O
    ? (k = t[9])
    : ((k = N(
        `relative isolate mx-auto flex min-h-[var(--height-token-empty-state-page)] group-data-[placement=below-composer]/home-takeover:min-h-0 w-full max-w-3xl flex-col items-center justify-end overflow-hidden px-3 py-6 text-center select-none sm:rounded-t-3xl`,
        O,
      )),
      (t[8] = O),
      (t[9] = k));
  let A;
  t[10] !== i || t[11] !== o || t[12] !== b.type || t[13] !== l
    ? ((A = b.type === `none` ? (0, Z.jsx)(xn, { allowRemoteImages: i, beacon: o, isDark: l }) : null),
      (t[10] = i),
      (t[11] = o),
      (t[12] = b.type),
      (t[13] = l),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] !== b.type || t[16] !== te
    ? ((j =
        b.type !== `none` && te != null
          ? (0, Z.jsx)(`div`, {
              className: `pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 overflow-hidden sm:rounded-t-3xl`,
              children: (0, Z.jsx)(`img`, {
                alt: ``,
                "aria-hidden": !0,
                className: `size-full mask-content-safe-area object-cover sm:relative sm:top-12`,
                draggable: !1,
                src: te,
              }),
            })
          : null),
      (t[15] = b.type),
      (t[16] = te),
      (t[17] = j))
    : (j = t[17]);
  let M;
  t[18] !== D ||
  t[19] !== S ||
  t[20] !== T ||
  t[21] !== b.clip_shape ||
  t[22] !== b.sizing ||
  t[23] !== b.type ||
  t[24] !== w ||
  t[25] !== m ||
  t[26] !== h
    ? ((M =
        b.type === `none` || S == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: N(
                `shrink-0`,
                D,
                b.type === `centered` && b.clip_shape === `circle` && `overflow-hidden rounded-full`,
              ),
              style: w
                ? {
                    aspectRatio: String(b.sizing.ratio),
                    maxWidth: T ? void 0 : `min(769px, ${b.sizing.ratio * 42}svh, ${b.sizing.ratio * 420}px)`,
                  }
                : void 0,
              children: (0, Z.jsx)(`img`, {
                alt: ``,
                "aria-hidden": !0,
                className: N(
                  `select-none`,
                  T && !w ? `h-auto w-full` : `size-full`,
                  w || (b.type === `centered` && b.clip_shape === `circle`)
                    ? `object-cover`
                    : `object-contain`,
                ),
                "data-testid": `homepage-takeover-foreground`,
                draggable: !1,
                src: S,
                onError: m,
                onLoad: h,
              }),
            })),
      (t[18] = D),
      (t[19] = S),
      (t[20] = T),
      (t[21] = b.clip_shape),
      (t[22] = b.sizing),
      (t[23] = b.type),
      (t[24] = w),
      (t[25] = m),
      (t[26] = h),
      (t[27] = M))
    : (M = t[27]);
  let P = E && !T ? `max-w-113` : `max-w-xl`,
    F = E ? `gap-6` : `gap-4`,
    I;
  t[28] !== P || t[29] !== F
    ? ((I = N(`flex w-full flex-col items-center`, P, F)), (t[28] = P), (t[29] = F), (t[30] = I))
    : (I = t[30]);
  let L = E ? `text-heading-sm leading-6.5` : `text-lg leading-6`,
    R;
  t[31] === L ? (R = t[32]) : ((R = N(`font-medium text-default`, L)), (t[31] = L), (t[32] = R));
  let ne;
  t[33] !== y.title || t[34] !== R || t[35] !== v
    ? ((ne = (0, Z.jsx)(`h2`, { id: v, className: R, children: y.title })),
      (t[33] = y.title),
      (t[34] = R),
      (t[35] = v),
      (t[36] = ne))
    : (ne = t[36]);
  let z;
  t[37] !== E || t[38] !== T || t[39] !== y.subtitle
    ? ((z =
        y.subtitle == null
          ? null
          : (0, Z.jsx)(`p`, {
              className: N(`text-secondary`, T && `max-w-72`, E ? kn.heroSubtitle : `text-sm`),
              children: y.subtitle,
            })),
      (t[37] = E),
      (t[38] = T),
      (t[39] = y.subtitle),
      (t[40] = z))
    : (z = t[40]);
  let B;
  t[41] !== ne || t[42] !== z
    ? ((B = (0, Z.jsxs)(`div`, { className: `flex flex-col items-center gap-2`, children: [ne, z] })),
      (t[41] = ne),
      (t[42] = z),
      (t[43] = B))
    : (B = t[43]);
  let re = E ? `takeoverHero` : `takeover`,
    V;
  t[44] !== n ||
  t[45] !== r ||
  t[46] !== i ||
  t[47] !== a ||
  t[48] !== o ||
  t[49] !== ee ||
  t[50] !== s ||
  t[51] !== c ||
  t[52] !== d ||
  t[53] !== f ||
  t[54] !== p ||
  t[55] !== g ||
  t[56] !== _ ||
  t[57] !== re
    ? ((V = (0, Z.jsx)(`div`, {
        className: `flex flex-col items-center gap-2 sm:flex-row sm:justify-center`,
        children: (0, Z.jsx)(mn, {
          actionItems: o.action_items,
          actionOverrides: n,
          allowExternalActions: r,
          allowRemoteImages: i,
          analyticsContext: a,
          beacon: o,
          eventAccountId: ee,
          eventMetadata: s,
          getActionOverride: c,
          onActionComplete: d,
          onComposerText: f,
          onDismiss: p,
          onSendPrompt: g,
          onStartVoice: _,
          variant: re,
        }),
      })),
      (t[44] = n),
      (t[45] = r),
      (t[46] = i),
      (t[47] = a),
      (t[48] = o),
      (t[49] = ee),
      (t[50] = s),
      (t[51] = c),
      (t[52] = d),
      (t[53] = f),
      (t[54] = p),
      (t[55] = g),
      (t[56] = _),
      (t[57] = re),
      (t[58] = V))
    : (V = t[58]);
  let H;
  t[59] !== B || t[60] !== V || t[61] !== I
    ? ((H = (0, Z.jsxs)(`div`, { className: I, children: [B, V] })),
      (t[59] = B),
      (t[60] = V),
      (t[61] = I),
      (t[62] = H))
    : (H = t[62]);
  let ie;
  return (
    t[63] !== H || t[64] !== k || t[65] !== A || t[66] !== j || t[67] !== M || t[68] !== v
      ? ((ie = (0, Z.jsxs)(`section`, {
          "aria-labelledby": v,
          className: k,
          "data-homepage-takeover": !0,
          children: [A, j, M, H],
        })),
        (t[63] = H),
        (t[64] = k),
        (t[65] = A),
        (t[66] = j),
        (t[67] = M),
        (t[68] = v),
        (t[69] = ie))
      : (ie = t[69]),
    ie
  );
}
var Mn, Nn, Z;
function Pn() {
  return (Pn = e(() => {
    ((Mn = U()), D(), (Nn = q()), pn(), Dn(), Dt(), An(), (Z = K()));
  }))();
}
function Fn(e) {
  let t = (0, Rn.c)(29),
    { page: n } = e,
    r = E();
  (0, zn.useState)(!1);
  let i = (0, zn.useRef)(null),
    a = (0, zn.useRef)(r),
    o = (0, zn.useRef)(!1),
    ee = (0, zn.useRef)(!1),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = () => {
        let e = i.current;
        e == null || !e.autoplay || document.hidden || o.current || e.play().catch(Ln);
      }),
      (t[0] = s))
    : (s = t[0]);
  let c = (0, zn.useEffectEvent)(s),
    l;
  t[1] !== c || t[2] !== r
    ? ((l = () => {
        if (r) {
          let e = i.current;
          e != null && !e.paused && ((ee.current = !0), e.pause());
        } else a.current && c();
        a.current = r;
      }),
      (t[1] = c),
      (t[2] = r),
      (t[3] = l))
    : (l = t[3]);
  let u;
  (t[4] === r ? (u = t[5]) : ((u = [r]), (t[4] = r), (t[5] = u)), (0, zn.useEffect)(l, u));
  let d;
  t[6] === c
    ? (d = t[7])
    : ((d = () => {
        let e = i.current,
          t = () => {
            ((ee.current = !0), e != null && !e.paused && e.pause());
          },
          n = () => {
            document.hidden ? ((ee.current = !0), e?.pause()) : c();
          };
        return (
          document.addEventListener(`visibilitychange`, n),
          document.hidden ? ((ee.current = !0), e?.pause()) : ee.current && c(),
          () => {
            (document.removeEventListener(`visibilitychange`, n), t());
          }
        );
      }),
      (t[6] = c),
      (t[7] = d));
  let f;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = []), (t[8] = f)) : (f = t[8]),
    (0, zn.useLayoutEffect)(d, f));
  let p;
  t[9] === n.video_poster_url
    ? (p = t[10])
    : ((p = n.video_poster_url != null && St(n.video_poster_url) ? n.video_poster_url : null),
      (t[9] = n.video_poster_url),
      (t[10] = p));
  let m = p,
    h;
  t[11] !== n.image_variant_urls || t[12] !== n.media_type || t[13] !== n.media_url
    ? ((h = []),
      n.media_type === `image` && (h = [n.media_url, ...(n.image_variant_urls ?? [])].filter(In)),
      (t[11] = n.image_variant_urls),
      (t[12] = n.media_type),
      (t[13] = n.media_url),
      (t[14] = h))
    : (h = t[14]);
  let [g, _] = (0, zn.useState)(0),
    v;
  t[15] !== h.length || t[16] !== r
    ? ((v = () => {
        if (r || h.length <= 1) return;
        let e = window.setInterval(() => {
          _((e) => (e + 1) % h.length);
        }, Vn);
        return () => window.clearInterval(e);
      }),
      (t[15] = h.length),
      (t[16] = r),
      (t[17] = v))
    : (v = t[17]);
  let y;
  if (
    (t[18] !== h.length || t[19] !== r
      ? ((y = [h.length, r]), (t[18] = h.length), (t[19] = r), (t[20] = y))
      : (y = t[20]),
    (0, zn.useEffect)(v, y),
    n.media_type === `video`)
  ) {
    let e;
    t[21] !== n.media_alt || t[22] !== m
      ? ((e =
          m == null
            ? null
            : (0, Bn.jsx)(`img`, {
                alt: n.media_alt,
                className: `h-62.5 w-full object-cover`,
                draggable: !1,
                src: m,
              })),
        (t[21] = n.media_alt),
        (t[22] = m),
        (t[23] = e))
      : (e = t[23]);
    let r = e,
      i;
    return (
      t[24] === r
        ? (i = t[25])
        : ((i = (0, Bn.jsxs)(Bn.Fragment, { children: [null, (0, Bn.jsx)(Bn.Fragment, { children: r })] })),
          (t[24] = r),
          (t[25] = i)),
      i
    );
  }
  let b = h[g % h.length],
    x;
  return (
    t[26] !== b || t[27] !== n.media_alt
      ? ((x =
          b == null
            ? null
            : (0, Bn.jsx)(`img`, {
                alt: n.media_alt,
                className: `h-62.5 w-full object-cover`,
                draggable: !1,
                src: b,
              })),
        (t[26] = b),
        (t[27] = n.media_alt),
        (t[28] = x))
      : (x = t[28]),
    x
  );
}
function In(e) {
  return e != null && St(e);
}
function Ln() {}
var Rn, zn, Bn, Vn;
function Hn() {
  return (Hn = e(() => {
    ((Rn = U()), (zn = q()), m(), Dt(), (Bn = K()), (Vn = 3e3));
  }))();
}
function Un(e) {
  let n = (0, Wn.c)(113),
    {
      actionOverrides: r,
      allowExternalActions: o,
      allowRemoteImages: s,
      analyticsContext: c,
      beacon: l,
      eventAccountId: u,
      eventMetadata: d,
      getActionOverride: p,
      onComposerText: m,
      onDismiss: h,
      onOpen: _,
      onPageShown: v,
      onResolve: y,
      onSendPrompt: b,
      onStartVoice: x,
    } = e,
    S = o === void 0 || o,
    C = s === void 0 || s,
    w = f(ee),
    T = te(),
    E = l.ui_info.pages,
    D;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = new Set()), (n[0] = D)) : (D = n[0]);
  let k = (0, Gn.useRef)(D),
    A = (0, Gn.useRef)(0),
    [j, M] = (0, Gn.useState)(0),
    F = E[j] ?? E[0];
  if (F == null) return null;
  let I = j === 0,
    L = j === E.length - 1,
    z;
  if (n[1] !== l.action_items || n[2] !== F.cta_action_item_id) {
    let e;
    (n[4] === F.cta_action_item_id
      ? (e = n[5])
      : ((e = (e) => e.id === F.cta_action_item_id), (n[4] = F.cta_action_item_id), (n[5] = e)),
      (z = l.action_items.find(e)),
      (n[1] = l.action_items),
      (n[2] = F.cta_action_item_id),
      (n[3] = z));
  } else z = n[3];
  let B = z,
    re;
  n[6] !== B || n[7] !== F.cta_text
    ? ((re = B == null ? null : { ...B, text: F.cta_text }), (n[6] = B), (n[7] = F.cta_text), (n[8] = re))
    : (re = n[8]);
  let V = re,
    H;
  n[9] !== c?.suppressLifecycle || n[10] !== l || n[11] !== v || n[12] !== w
    ? ((H = (e, t, n) => {
        k.current.has(e.id) ||
          (k.current.add(e.id),
          c?.suppressLifecycle !== !0 && le(w, l, { navigationMethod: n, page: e, pageIndex: t }),
          v?.({ navigationMethod: n, pageId: e.id, pageIndex: t }));
      }),
      (n[9] = c?.suppressLifecycle),
      (n[10] = l),
      (n[11] = v),
      (n[12] = w),
      (n[13] = H))
    : (H = n[13]);
  let ie = H,
    U;
  n[14] !== j || n[15] !== E || n[16] !== ie
    ? ((U = (e, t) => {
        let n = Math.min(Math.max(e, 0), E.length - 1),
          r = E[n];
        n !== j && r != null && (ie(r, n, t), M(n));
      }),
      (n[14] = j),
      (n[15] = E),
      (n[16] = ie),
      (n[17] = U))
    : (U = n[17]);
  let W = U,
    G;
  n[18] !== _ || n[19] !== F || n[20] !== j || n[21] !== ie
    ? ((G = () => {
        (_?.(), ie(F, j, `initial`));
      }),
      (n[18] = _),
      (n[19] = F),
      (n[20] = j),
      (n[21] = ie),
      (n[22] = G))
    : (G = n[22]);
  let K = G,
    ae;
  n[23] !== I || n[24] !== L || n[25] !== W || n[26] !== j
    ? ((ae = (e) => {
        e.key === `ArrowRight` && !L
          ? (e.preventDefault(), W(j + 1, `keyboard`))
          : e.key === `ArrowLeft` && !I && (e.preventDefault(), W(j - 1, `keyboard`));
      }),
      (n[23] = I),
      (n[24] = L),
      (n[25] = W),
      (n[26] = j),
      (n[27] = ae))
    : (ae = n[27]);
  let q = ae,
    oe;
  n[28] !== W || n[29] !== j || n[30] !== E.length
    ? ((oe = (e) => {
        let t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        if (Math.abs(t) < qn || Date.now() < A.current) return;
        let n = t > 0 ? j + 1 : j - 1;
        n < 0 || n >= E.length || (e.preventDefault(), (A.current = Date.now() + Kn), W(n, `wheel`));
      }),
      (n[28] = W),
      (n[29] = j),
      (n[30] = E.length),
      (n[31] = oe))
    : (oe = n[31]);
  let J = oe,
    se;
  n[32] !== c?.suppressLifecycle ||
  n[33] !== l ||
  n[34] !== W ||
  n[35] !== F ||
  n[36] !== j ||
  n[37] !== E ||
  n[38] !== w
    ? ((se = (e) => {
        let t = j + (e === `previous` ? -1 : 1),
          n = E[t];
        n != null &&
          (c?.suppressLifecycle !== !0 &&
            Qe(w, l, { direction: e, fromPage: F, fromPageIndex: j, toPage: n, toPageIndex: t }),
          W(t, e === `previous` ? `previous_arrow` : `next_arrow`));
      }),
      (n[32] = c?.suppressLifecycle),
      (n[33] = l),
      (n[34] = W),
      (n[35] = F),
      (n[36] = j),
      (n[37] = E),
      (n[38] = w),
      (n[39] = se))
    : (se = n[39]);
  let ce = se,
    ue;
  n[40] !== q || n[41] !== K
    ? ((ue = { onKeyDown: q, onOpenAutoFocus: K }), (n[40] = q), (n[41] = K), (n[42] = ue))
    : (ue = n[42]);
  let de;
  n[43] !== l.ui_info.close_aria_label || n[44] !== T
    ? ((de =
        l.ui_info.close_aria_label ||
        T.formatMessage({
          id: `beacon.multiPage.close`,
          defaultMessage: `Close`,
          description: `Short accessible label for the close button in a backend-driven multi-page Beacon announcement dialog. The label is read by assistive technology and is not visible.`,
        })),
      (n[43] = l.ui_info.close_aria_label),
      (n[44] = T),
      (n[45] = de))
    : (de = n[45]);
  let fe;
  n[46] === h
    ? (fe = n[47])
    : ((fe = (e) => {
        (e.stopPropagation(), h());
      }),
      (n[46] = h),
      (n[47] = fe));
  let pe;
  n[48] === Symbol.for(`react.memo_cache_sentinel`) ? ((pe = (0, Q.jsx)(a, {})), (n[48] = pe)) : (pe = n[48]);
  let me;
  n[49] !== de || n[50] !== fe
    ? ((me = (0, Q.jsx)(t, {
        "aria-label": de,
        color: `secondarySurface`,
        radius: `large`,
        size: `inputIcon`,
        onClick: fe,
        children: pe,
      })),
      (n[49] = de),
      (n[50] = fe),
      (n[51] = me))
    : (me = n[51]);
  let he;
  n[52] === h
    ? (he = n[53])
    : ((he = (e) => {
        e || h();
      }),
      (n[52] = h),
      (n[53] = he));
  let ge;
  n[54] !== C || n[55] !== F
    ? ((ge = C ? (0, Q.jsx)(Fn, { page: F }, F.id) : null), (n[54] = C), (n[55] = F), (n[56] = ge))
    : (ge = n[56]);
  let _e;
  n[57] === F.title
    ? (_e = n[58])
    : ((_e = (0, Q.jsx)(O, { className: `heading-dialog`, children: F.title })),
      (n[57] = F.title),
      (n[58] = _e));
  let ve;
  n[59] === F.description
    ? (ve = n[60])
    : ((ve = (0, Q.jsx)(P, {
        className: `text-base leading-snug tracking-tight text-secondary`,
        children: F.description,
      })),
      (n[59] = F.description),
      (n[60] = ve));
  let ye;
  n[61] === F.footnote
    ? (ye = n[62])
    : ((ye =
        F.footnote == null
          ? null
          : (0, Q.jsx)(`p`, {
              className: `mt-2 text-center text-xs text-codex-description`,
              children: F.footnote,
            })),
      (n[61] = F.footnote),
      (n[62] = ye));
  let Y;
  n[63] !== _e || n[64] !== ve || n[65] !== ye
    ? ((Y = (0, Q.jsxs)(`div`, {
        className: `flex flex-col items-center gap-2 px-8 pt-10 text-center select-text`,
        children: [_e, ve, ye],
      })),
      (n[63] = _e),
      (n[64] = ve),
      (n[65] = ye),
      (n[66] = Y))
    : (Y = n[66]);
  let be;
  n[67] === V ? (be = n[68]) : ((be = V == null ? [] : [V]), (n[67] = V), (n[68] = be));
  let xe = I ? `min-w-37.5` : void 0,
    Se;
  n[69] !== L || n[70] !== W || n[71] !== h || n[72] !== j
    ? ((Se = () => {
        L ? h() : W(j + 1, `cta`);
      }),
      (n[69] = L),
      (n[70] = W),
      (n[71] = h),
      (n[72] = j),
      (n[73] = Se))
    : (Se = n[73]);
  let Ce;
  n[74] !== F.cta_text || n[75] !== xe || n[76] !== Se
    ? ((Ce = (0, Q.jsx)(t, { className: xe, size: `beaconCarousel`, onClick: Se, children: F.cta_text })),
      (n[74] = F.cta_text),
      (n[75] = xe),
      (n[76] = Se),
      (n[77] = Ce))
    : (Ce = n[77]);
  let we;
  n[78] !== r ||
  n[79] !== S ||
  n[80] !== C ||
  n[81] !== c ||
  n[82] !== l ||
  n[83] !== u ||
  n[84] !== d ||
  n[85] !== p ||
  n[86] !== m ||
  n[87] !== h ||
  n[88] !== y ||
  n[89] !== b ||
  n[90] !== x ||
  n[91] !== be ||
  n[92] !== Ce
    ? ((we = (0, Q.jsx)(`div`, {
        className: `flex justify-center px-8 pt-6`,
        children: (0, Q.jsx)(mn, {
          actionItems: be,
          actionOverrides: r,
          allowExternalActions: S,
          allowRemoteImages: C,
          analyticsContext: c,
          beacon: l,
          eventAccountId: u,
          eventMetadata: d,
          fallback: Ce,
          getActionOverride: p,
          onActionComplete: y,
          onComposerText: m,
          onDismiss: h,
          onSendPrompt: b,
          onStartVoice: x,
          useExternalBrowser: !0,
          variant: `carousel`,
        }),
      })),
      (n[78] = r),
      (n[79] = S),
      (n[80] = C),
      (n[81] = c),
      (n[82] = l),
      (n[83] = u),
      (n[84] = d),
      (n[85] = p),
      (n[86] = m),
      (n[87] = h),
      (n[88] = y),
      (n[89] = b),
      (n[90] = x),
      (n[91] = be),
      (n[92] = Ce),
      (n[93] = we))
    : (we = n[93]);
  let Te;
  n[94] !== ce || n[95] !== T || n[96] !== I || n[97] !== L || n[98] !== W || n[99] !== j || n[100] !== E
    ? ((Te =
        E.length <= 1
          ? null
          : (0, Q.jsxs)(`div`, {
              className: `relative mt-6 flex h-6 items-center justify-center px-4`,
              children: [
                (0, Q.jsx)(t, {
                  className: N(
                    `absolute start-4 opacity-0 group-hover:opacity-100 focus-visible:opacity-100`,
                    I && `invisible`,
                  ),
                  "aria-label": T.formatMessage({
                    id: `beacon.multiPage.previous`,
                    defaultMessage: `Previous page`,
                    description: `Accessible label for the icon button that moves to the previous card in a backend-driven multi-page Beacon announcement dialog. The label is not visible.`,
                  }),
                  color: `ghost`,
                  disabled: I,
                  size: `inputIcon`,
                  radius: `full`,
                  uniform: !0,
                  onClick: () => ce(`previous`),
                  children: (0, Q.jsx)(g, {}),
                }),
                (0, Q.jsx)(`div`, {
                  "aria-label": T.formatMessage({
                    id: `beacon.multiPage.progress`,
                    defaultMessage: `Page progress`,
                    description: `Accessible group label for progress dots that show and change the current card in a backend-driven multi-page Beacon announcement dialog.`,
                  }),
                  className: `flex items-center`,
                  role: `group`,
                  children: E.map((e, n) =>
                    (0, Q.jsx)(
                      t,
                      {
                        "aria-current": n === j ? `page` : void 0,
                        "aria-label": T.formatMessage(
                          {
                            id: `beacon.multiPage.goToPage`,
                            defaultMessage: `Go to page {pageNumber}`,
                            description: `Accessible label for a progress dot that jumps to a card in a backend-driven multi-page Beacon announcement dialog. {pageNumber} is the one-based card number.`,
                          },
                          { pageNumber: n + 1 },
                        ),
                        color: `ghost`,
                        size: `paginationDot`,
                        onClick: () => W(n, `dot`),
                        children: (0, Q.jsx)(`span`, {
                          "aria-hidden": !0,
                          className: N(`size-1.75 rounded-full`, n === j ? `bg-text` : `bg-text/15`),
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, Q.jsx)(t, {
                  className: N(
                    `absolute end-4 opacity-0 group-hover:opacity-100 focus-visible:opacity-100`,
                    L && `invisible`,
                  ),
                  "aria-label": T.formatMessage({
                    id: `beacon.multiPage.next`,
                    defaultMessage: `Next page`,
                    description: `Accessible label for the icon button that moves to the next card in a backend-driven multi-page Beacon announcement dialog. The label is not visible.`,
                  }),
                  color: `ghost`,
                  disabled: L,
                  size: `inputIcon`,
                  radius: `full`,
                  uniform: !0,
                  onClick: () => ce(`next`),
                  children: (0, Q.jsx)(i, {}),
                }),
              ],
            })),
      (n[94] = ce),
      (n[95] = T),
      (n[96] = I),
      (n[97] = L),
      (n[98] = W),
      (n[99] = j),
      (n[100] = E),
      (n[101] = Te))
    : (Te = n[101]);
  let Ee;
  n[102] !== J || n[103] !== ge || n[104] !== Y || n[105] !== we || n[106] !== Te
    ? ((Ee = (0, Q.jsx)(ne, {
        variant: `chatgpt`,
        children: (0, Q.jsxs)(`div`, { className: `group pb-6`, onWheel: J, children: [ge, Y, we, Te] }),
      })),
      (n[102] = J),
      (n[103] = ge),
      (n[104] = Y),
      (n[105] = we),
      (n[106] = Te),
      (n[107] = Ee))
    : (Ee = n[107]);
  let De;
  return (
    n[108] !== ue || n[109] !== me || n[110] !== he || n[111] !== Ee
      ? ((De = (0, Q.jsx)(R, {
          open: !0,
          contentProps: ue,
          showDialogClose: !1,
          headerActions: me,
          size: `beacon`,
          variant: `beacon`,
          onOpenChange: he,
          children: Ee,
        })),
        (n[108] = ue),
        (n[109] = me),
        (n[110] = he),
        (n[111] = Ee),
        (n[112] = De))
      : (De = n[112]),
    De
  );
}
var Wn, Gn, Q, Kn, qn;
function Jn() {
  return (Jn = e(() => {
    ((Wn = U()),
      D(),
      _(),
      (Gn = q()),
      I(),
      dt(),
      V(),
      ie(),
      j(),
      x(),
      G(),
      pn(),
      Hn(),
      (Q = K()),
      (Kn = 700),
      (qn = 40));
  }))();
}
function Yn(e) {
  let n = (0, er.c)(48),
    {
      actionAccountId: r,
      analyticsContext: i,
      beacon: a,
      dismissAriaLabel: o,
      eventMetadata: s,
      onDismiss: c,
      onResolve: l,
    } = e,
    u = f(ee),
    [d, p] = (0, tr.useState)(``),
    [m, h] = (0, tr.useState)(!1),
    [g, _] = (0, tr.useState)(null),
    v;
  n[0] !== r || n[1] !== i?.suppressLifecycle || n[2] !== u
    ? ((v = {
        submit_personalized_information_questionnaire_feedback: (e) =>
          Qn(e)
            ? i?.suppressLifecycle === !0
              ? (_(e), { didComplete: !0, eventAccountId: void 0, shouldResolve: !1 })
              : (_(e),
                Xe(u, e.action_v2),
                h(!0),
                $n(e)
                  .then(() => ({ didComplete: !0, eventAccountId: r, shouldResolve: !0 }))
                  .catch(Zn)
                  .finally(() => h(!1)))
            : !1,
      }),
      (n[0] = r),
      (n[1] = i?.suppressLifecycle),
      (n[2] = u),
      (n[3] = v))
    : (v = n[3]);
  let y = v,
    x;
  n[4] !== i?.suppressLifecycle || n[5] !== d || n[6] !== m || n[7] !== l || n[8] !== u || n[9] !== g
    ? ((x = () => {
        if (g == null || m) return;
        let e = d.trim();
        if (e.length === 0) {
          l(g);
          return;
        }
        if (i?.suppressLifecycle === !0) {
          l(g);
          return;
        }
        (h(!0),
          l(g),
          $n(g, e)
            .then(() => {
              u.get(F).success(g.action_v2.success_toast_message);
            })
            .catch(Xn)
            .finally(() => h(!1)));
      }),
      (n[4] = i?.suppressLifecycle),
      (n[5] = d),
      (n[6] = m),
      (n[7] = l),
      (n[8] = u),
      (n[9] = g),
      (n[10] = x))
    : (x = n[10]);
  let S = x,
    C;
  n[11] === S
    ? (C = n[12])
    : ((C = (e) => {
        e.key !== `Enter` || e.nativeEvent.isComposing || (e.preventDefault(), S());
      }),
      (n[11] = S),
      (n[12] = C));
  let te = C,
    w;
  n[13] !== i?.suppressLifecycle || n[14] !== a.action_items || n[15] !== c || n[16] !== u
    ? ((w = () => {
        (i?.suppressLifecycle !== !0 && Ee(u, a.action_items[0].action_v2), c());
      }),
      (n[13] = i?.suppressLifecycle),
      (n[14] = a.action_items),
      (n[15] = c),
      (n[16] = u),
      (n[17] = w))
    : (w = n[17]);
  let T = w,
    E = a.ui_info.banner_design === "default" ? `aside` : `bodyOnNarrow`,
    D;
  n[18] === a.ui_info.description
    ? (D = n[19])
    : ((D = (0, nr.jsx)(`span`, { children: a.ui_info.description })),
      (n[18] = a.ui_info.description),
      (n[19] = D));
  let O;
  n[20] !== d || n[21] !== te || n[22] !== m || n[23] !== g || n[24] !== S
    ? ((O =
        g == null
          ? null
          : (0, nr.jsxs)(`div`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, nr.jsx)(Pe, {
                  autoFocus: !0,
                  "aria-label": g.action_v2.details_placeholder,
                  maxLength: g.action_v2.details_max_length ?? 2e3,
                  name: `personalized-information-questionnaire-details`,
                  placeholder: g.action_v2.details_placeholder,
                  value: d,
                  variant: `ghost`,
                  onChange: (e) => p(e.currentTarget.value),
                  onKeyDown: te,
                }),
                (0, nr.jsx)(t, {
                  disabled: m,
                  loading: m,
                  size: `composerSm`,
                  type: `button`,
                  onClick: S,
                  children: g.action_v2.details_submit_button_text,
                }),
              ],
            })),
      (n[20] = d),
      (n[21] = te),
      (n[22] = m),
      (n[23] = g),
      (n[24] = S),
      (n[25] = O))
    : (O = n[25]);
  let k;
  n[26] !== D || n[27] !== O
    ? ((k = (0, nr.jsxs)(`div`, { className: `flex min-w-0 flex-col gap-3`, children: [D, O] })),
      (n[26] = D),
      (n[27] = O),
      (n[28] = k))
    : (k = n[28]);
  let A;
  n[29] !== y || n[30] !== i || n[31] !== a || n[32] !== s || n[33] !== T || n[34] !== g
    ? ((A =
        g == null
          ? (0, nr.jsx)(mn, {
              actionItems: a.action_items,
              actionOverrides: y,
              analyticsContext: i,
              beacon: a,
              eventMetadata: s,
              onDismiss: T,
              variant: `banner`,
            })
          : null),
      (n[29] = y),
      (n[30] = i),
      (n[31] = a),
      (n[32] = s),
      (n[33] = T),
      (n[34] = g),
      (n[35] = A))
    : (A = n[35]);
  let j;
  n[36] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = (0, nr.jsx)(b, {})), (n[36] = j)) : (j = n[36]);
  let M;
  n[37] !== o || n[38] !== T
    ? ((M = (0, nr.jsx)(t, {
        "aria-label": o,
        color: `ghost`,
        size: `icon`,
        type: `button`,
        uniform: !0,
        onClick: T,
        children: j,
      })),
      (n[37] = o),
      (n[38] = T),
      (n[39] = M))
    : (M = n[39]);
  let N;
  n[40] !== M || n[41] !== A
    ? ((N = (0, nr.jsxs)(nr.Fragment, { children: [A, M] })), (n[40] = M), (n[41] = A), (n[42] = N))
    : (N = n[42]);
  let P;
  return (
    n[43] !== a.ui_info.title || n[44] !== N || n[45] !== E || n[46] !== k
      ? ((P = (0, nr.jsx)(`div`, {
          className: vt,
          children: (0, nr.jsx)(Ot, {
            actionsPlacement: E,
            title: a.ui_info.title,
            description: k,
            additionalActions: N,
          }),
        })),
        (n[43] = a.ui_info.title),
        (n[44] = N),
        (n[45] = E),
        (n[46] = k),
        (n[47] = P))
      : (P = n[47]),
    P
  );
}
function Xn() {}
function Zn() {
  return !1;
}
function Qn(e) {
  return e.action_v2.action_enum === `submit_personalized_information_questionnaire_feedback`;
}
async function $n(e, t) {
  let n = e.action_v2;
  await qe.safePost(`/sidebar/personalized_information_questionnaire_feedback`, {
    requestBody: {
      answer: n.answer,
      citation: { citation_uuid: n.citation_uuid, conversation_context_type: n.conversation_context_type },
      conversation_id: n.conversation_id,
      ...(t == null ? {} : { details: t }),
      message_id: n.message_id,
      question_id: n.question_id,
      questionnaire_id: n.questionnaire_id,
      surface: n.surface,
    },
  });
}
var er, tr, nr;
function rr() {
  return (rr = e(() => {
    ((er = U()), _(), (tr = q()), V(), x(), Xt(), de(), L(), Ct(), G(), st(), pn(), dt(), (nr = K()));
  }))();
}
function ir(e) {
  let t = (0, or.c)(13),
    { accountId: n, beacon: r, children: i, eventMetadata: a, onUnsupported: o } = e,
    s = f(ee),
    c = (0, sr.useContext)(Gt),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = W()), (t[0] = l)) : (l = t[0]);
  let u = l,
    d = w(_e),
    p = u == null || (d && a?.suppressLifecycle !== !0),
    m,
    h;
  if (
    (t[1] !== n || t[2] !== r.beacon_id || t[3] !== a || t[4] !== p || t[5] !== o || t[6] !== s
      ? ((m = () => {
          p && (o == null ? (a ?? new tn(s).suppressUnsupportedHomeBeacon(n, r.beacon_id)) : o());
        }),
        (h = [n, r.beacon_id, a, p, o, s]),
        (t[1] = n),
        (t[2] = r.beacon_id),
        (t[3] = a),
        (t[4] = p),
        (t[5] = o),
        (t[6] = s),
        (t[7] = m),
        (t[8] = h))
      : ((m = t[7]), (h = t[8])),
    (0, sr.useEffect)(m, h),
    p)
  )
    return null;
  let g;
  return (
    t[9] !== r || t[10] !== i || t[11] !== c?.allowExternalActions
      ? ((g = c?.allowExternalActions === !0 ? (0, cr.jsx)(ar, { beacon: r, children: i }) : i(r)),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c?.allowExternalActions),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function ar(e) {
  let t = (0, or.c)(6),
    { beacon: n, children: r } = e,
    i = f(ot),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (e) => {
        let t = Yt(e);
        e.type === `primary` &&
          e.action_v2.action_enum === `open_url` &&
          t != null &&
          !t.startsWith(`/`) &&
          Le(i);
      }),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== n || t[3] !== r || t[4] !== a
      ? ((o = r(n, a)), (t[2] = n), (t[3] = r), (t[4] = a), (t[5] = o))
      : (o = t[5]),
    o
  );
}
var or, sr, cr;
function lr() {
  return (lr = e(() => {
    ((or = U()), _(), (sr = q()), Vt(), Dt(), S(), Y(), $t(), G(), ft(), (cr = K()));
  }))();
}
function ur(e) {
  let t = (0, yr.c)(26);
  if (He(e.beacon)) {
    let n = e.eventMetadata?.suppressLifecycle === !0 || e.analyticsContext?.suppressLifecycle === !0,
      r;
    t[0] !== e.accountId ||
    t[1] !== e.analyticsContext ||
    t[2] !== e.beacon ||
    t[3] !== e.onActionComplete ||
    t[4] !== e.onDismiss ||
    t[5] !== n
      ? ((r = (0, $.jsx)(
          Sr,
          {
            accountId: e.accountId,
            analyticsContext: e.analyticsContext,
            beacon: e.beacon,
            isPreview: n,
            onActionComplete: e.onActionComplete,
            onDismiss: e.onDismiss,
          },
          e.accountId,
        )),
        (t[0] = e.accountId),
        (t[1] = e.analyticsContext),
        (t[2] = e.beacon),
        (t[3] = e.onActionComplete),
        (t[4] = e.onDismiss),
        (t[5] = n),
        (t[6] = r))
      : (r = t[6]);
    let i = r,
      a;
    return (
      t[7] !== i || t[8] !== e.renderPresentation
        ? ((a =
            e.renderPresentation == null
              ? i
              : e.renderPresentation({ content: i, supportStatus: `supported` })),
          (t[7] = i),
          (t[8] = e.renderPresentation),
          (t[9] = a))
        : (a = t[9]),
      a
    );
  }
  let n;
  t[10] === e
    ? (n = t[11])
    : ((n = (t, n, r) => {
        let i = t === void 0 ? gn : t;
        return (0, $.jsx)(
          dr,
          { contentProps: { ...e, beacon: n ?? e.beacon }, Modal: i, onActionSuccess: r },
          JSON.stringify([
            e.accountId,
            e.actionAccountId,
            e.beacon.beacon_id,
            e.eventMetadata?.conversationId,
            e.eventMetadata?.messageId,
          ]),
        );
      }),
      (t[10] = e),
      (t[11] = n));
  let r = n;
  if (
    (e.beacon.beacon_id === `home_feature_browser_extension_install_banner` ||
      e.beacon.beacon_id === `home_feature_browser_extension_install_work_banner`) &&
    se(e.beacon)
  ) {
    let n;
    t[12] === r ? (n = t[13]) : ((n = (e, t) => r(gn, e, t)), (t[12] = r), (t[13] = n));
    let i;
    return (
      t[14] !== e.accountId ||
      t[15] !== e.beacon ||
      t[16] !== e.eventMetadata ||
      t[17] !== e.onUnsupported ||
      t[18] !== n
        ? ((i = (0, $.jsx)(ir, {
            accountId: e.accountId,
            beacon: e.beacon,
            eventMetadata: e.eventMetadata,
            onUnsupported: e.onUnsupported,
            children: n,
          })),
          (t[14] = e.accountId),
          (t[15] = e.beacon),
          (t[16] = e.eventMetadata),
          (t[17] = e.onUnsupported),
          (t[18] = n),
          (t[19] = i))
        : (i = t[19]),
      i
    );
  }
  let i;
  return (t[24] === r ? (i = t[25]) : ((i = r()), (t[24] = r), (t[25] = i)), i);
}
function dr(e) {
  let t = (0, yr.c)(56),
    { contentProps: n, Modal: r, onActionSuccess: i } = e,
    a = f(ee),
    o = (0, br.useContext)(Lt),
    c = l(),
    d = s(`/`),
    {
      accountId: p,
      actionAccountId: m,
      actionItems: h,
      actionOverrides: g,
      allowExternalActions: _,
      allowRemoteImages: v,
      analyticsContext: y,
      beacon: b,
      eventMetadata: x,
      getActionOverride: S,
      isDebugPreview: C,
      localActionHandlers: T,
      onActionComplete: E,
      onComposerText: D,
      onDismiss: O,
      onUnsupported: k,
      onModalOpen: A,
      pcaConversationId: j,
      preserveOpenPageContextPresentation: M,
      onSendPrompt: N,
      onStartVoice: P,
      renderPresentation: I,
    } = n,
    L = C !== void 0 && C,
    R = h ?? b.action_items,
    ne;
  t[0] === R ? (ne = t[1]) : ((ne = _r(R, `update_user_personalization_setting`)), (t[0] = R), (t[1] = ne));
  let z = ne,
    B;
  t[2] === R ? (B = t[3]) : ((B = _r(R, `request_workspace_credits`)), (t[2] = R), (t[3] = B));
  let re = B,
    V;
  t[4] === R ? (V = t[5]) : ((V = _r(R, `connect_ledger_accounts`)), (t[4] = R), (t[5] = V));
  let H = V,
    ie = vr(R, kt),
    U = vr(R, ht),
    W = w(U && !L ? Jt : null),
    G = W != null && !W.isPending && (W.isError || W.data !== `not-determined`),
    K;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = { name: `chatgpt.workspace-discovery` }), (t[6] = K))
    : (K = t[6]);
  let q = J(vr(R, jt) ? Ae : null, K),
    oe;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = { name: `automations.cloud` }), (t[7] = oe))
    : (oe = t[7]);
  let le = J(ie ? Ae : null, oe),
    { accountId: de, isLoading: fe, userId: me } = rt(),
    { data: _e, isLoading: ve } = ye(),
    Y = w(je),
    xe = J(R.some(mr) ? nn : null, x),
    Ce;
  t[8] === z ? (Ce = t[9]) : ((Ce = { enabled: z }), (t[8] = z), (t[9] = Ce));
  let { data: Ee, isError: De, isLoading: ke } = w(Ye, Ce),
    Me = w(nt),
    Ne = w(Ut),
    Pe = te(),
    Le = u(),
    Re;
  t[10] === b
    ? (Re = t[11])
    : ((Re = Je(b) && b.ui_info.foreground_image_layout.type !== `none`), (t[10] = b), (t[11] = Re));
  let ze = Re,
    Be;
  t[12] !== v || t[13] !== b || t[14] !== Le
    ? ((Be = Je(b) ? Et(b.ui_info, Le, v) : null), (t[12] = v), (t[13] = b), (t[14] = Le), (t[15] = Be))
    : (Be = t[15]);
  let He = Be,
    [Ge, Ke] = (0, br.useState)(null),
    qe = !ze || (He != null && Ge?.url === He && Ge.status === `loaded`),
    Xe = He != null && Ge?.url === He && Ge.status === `error`,
    Qe = (0, br.useRef)(null),
    $e = (0, br.useRef)(!0),
    [et, at] = (0, br.useState)(!1),
    ot = w(ge),
    st = w(it),
    lt = x?.messageId ?? x?.conversationId ?? void 0,
    ut =
      M !== !0 &&
      x?.suppressLifecycle !== !0 &&
      Se({
        activeClaims: ot,
        isCurrentHomeBeacon: x == null,
        isHomepageTakeoverOwner: Je(b),
        isPageContextUpsellSuppressionEnabled: st,
        responseLeafId: lt,
      }),
    [dt, ft] = (0, br.useState)(null),
    mt;
  t[16] !== _ || t[17] !== j || t[18] !== R
    ? ((mt = _ !== !1 && j != null ? fn(R) : []), (t[16] = _), (t[17] = j), (t[18] = R), (t[19] = mt))
    : (mt = t[19]);
  let _t = mt,
    vt = _t.length > 0,
    St;
  t[20] === vt ? (St = t[21]) : ((St = { enabled: vt }), (t[20] = vt), (t[21] = St));
  let { data: Ct, isError: Tt, isLoading: Dt } = J(un, _t, St),
    Ot = m ?? de,
    X = Ot != null && me != null && Ot === de && _e?.id === Ot ? Ot : void 0,
    Mt =
      X != null &&
      Y.authMethod === `chatgpt` &&
      Y.accountId === X &&
      Y.authenticatedAccountId === X &&
      Y.userId === me
        ? Y.accountStructure
        : null,
    Nt = fe || (Ot != null && Ot === de && ve),
    It = J(H ? Ze : null, we),
    Rt = J(H ? Te : null, we),
    zt = J(H ? ce : null, we),
    Bt = J(H ? Ve : null, X ?? null),
    Vt = J(H && It ? be : null, X ?? null),
    Ht = J(H && It ? Ie : null, X ?? null),
    Wt =
      H &&
      X != null &&
      (Rt === !0 || Bt == null || Bt.isLoading || (It && (Vt == null || Vt.isLoading || Vt.isFetching))),
    Gt =
      H &&
      ((Rt !== !0 && zt !== !0) ||
        Bt?.isError === !0 ||
        Bt?.data?.finances !== !0 ||
        (It && (Vt?.isError === !0 || Ht === !0))),
    Kt = X != null && _e?.structure === `workspace`,
    Yt = (z || re) && Kt,
    Xt;
  t[22] === Yt ? (Xt = t[23]) : ((Xt = { enabled: Yt }), (t[22] = Yt), (t[23] = Xt));
  let { data: Zt, isError: $t, isLoading: tn } = J(We, X ?? ``, Xt),
    rn = !Kt || (!$t && Zt?.beta_settings.sunshine === !0),
    sn = Kt && tn,
    cn;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((cn = () => (
        ($e.current = !0),
        () => {
          (($e.current = !1), Qe.current?.abort());
        }
      )),
      (t[24] = cn))
    : (cn = t[24]);
  let dn;
  (t[25] === X ? (dn = t[26]) : ((dn = [X]), (t[25] = X), (t[26] = dn)), (0, br.useEffect)(cn, dn));
  let pn = { open_connector_oauth_modal: _ === !1 ? void 0 : pr, ...g },
    mn = (e) =>
      an({
        scope: a,
        allowExternalActions: _ !== !1,
        accountStructure: Mt,
        isAccountStructurePending: Y.accountStructure == null && Y.accountLoading,
        isAccountPending: Nt,
        isUserSettingsError: De,
        isUserSettingsLoading: ke,
        isWorkspaceMemoryLoading: sn,
        onMemoryUpdateError: () => {
          a.get(F).danger(
            Pe.formatMessage({
              id: `settings.chatGpt.updateError`,
              defaultMessage: `Could not update this setting`,
              description: `Error toast when a ChatGPT account setting cannot be saved`,
            }),
            { errorAnalytics: { toastId: `settings.chatGpt.updateError` } },
          );
        },
        onMemoryUpdateSuccess: (e) => a.get(F).success(e),
        trustedAccountId: X,
        userId: me,
        userSettings: Ee,
        userSettingsAccountId: Me,
        workspaceMemoryEnabled: rn,
        workspaceRequestPolicy: Zt?.usage_limit_increase_request,
        isCurrentPresentation: () => $e.current,
      })(e),
    hn = bt({ scope: a, accountId: X, beacon: b, eventMetadata: x, isAccountPending: Nt, userId: me }),
    gn = () => {
      if ((Qe.current?.abort(), y != null && Fe(a, { action: `dismiss`, beacon: b, ...y }), O != null)) {
        O();
        return;
      }
      Pt(a, p, b);
    },
    _n;
  t[27] !== p || t[28] !== b || t[29] !== E || t[30] !== a
    ? ((_n = (e) => {
        if (E != null) {
          E(e);
          return;
        }
        gt(a, p, b);
      }),
      (t[27] = p),
      (t[28] = b),
      (t[29] = E),
      (t[30] = a),
      (t[31] = _n))
    : (_n = t[31]);
  let yn = _n,
    bn;
  t[32] === yn
    ? (bn = t[33])
    : ((bn = (e) => {
        Qt(e) && yn(e);
      }),
      (t[32] = yn),
      (t[33] = bn));
  let xn = bn,
    Sn;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Sn = (e, t) => {
        let n = e.action_v2;
        return (
          n.action_enum === `open_connector_oauth_modal` &&
          (ft({ action: e, connectorId: n.connector_id, resolveOnClose: t }), !0)
        );
      }),
      (t[34] = Sn))
    : (Sn = t[34]);
  let Cn = Sn,
    wn;
  t[35] !== xn || t[36] !== i
    ? ((wn = (e) => {
        (i?.(e), !Cn(e, !1) && xn(e));
      }),
      (t[35] = xn),
      (t[36] = i),
      (t[37] = wn))
    : (wn = t[37]);
  let Tn = wn,
    En;
  t[38] === yn
    ? (En = t[39])
    : ((En = (e) => {
        Cn(e, !0) || yn(e);
      }),
      (t[38] = yn),
      (t[39] = En));
  let Dn = En,
    On = (e) => {
      if (jt(e)) {
        if (q == null || q.isLoading) return qt;
        if (!q.isCapable) return en;
      }
      if (ht(e)) {
        if (W?.isPending) return qt;
        if (G) return en;
      }
      if (kt(e)) {
        if (le == null || le.isLoading) return qt;
        if (!le.isCapable) return en;
      }
      let t = T?.[xt({ actionId: e.id, beaconId: b.beacon_id })];
      if (t != null) return () => t({ action: e, beacon: b });
      let n = S?.(e);
      if (n !== void 0) return n;
      let r = mn(e);
      if (r !== void 0) return r;
      let i = hn(e);
      if (i !== void 0) return i;
      if (e.action_v2.action_enum === `connect_ledger_accounts`) {
        let t = e.action_v2.account_type;
        return Nt || Wt
          ? qt
          : X == null || _ === !1 || Gt
            ? en
            : async () => {
                if (Qe.current != null) return !1;
                let e = new AbortController();
                return (
                  (Qe.current = e),
                  at(!0),
                  hr()
                    .then(async (n) => {
                      let { connectPersonalFinanceFromHomeBeacon: r } = n;
                      return (await r(a, {
                        accountId: X,
                        accountType: t,
                        beacon: b,
                        signal: e.signal,
                        suppressAnalytics: y?.suppressLifecycle === !0 || x?.suppressLifecycle === !0,
                        onConversationStarted: (e) => {
                          c(ae(e));
                        },
                      }))
                        ? { didComplete: !0, eventAccountId: X, shouldResolve: !0 }
                        : !1;
                    })
                    .finally(() => {
                      ((Qe.current = null), at(!1));
                    })
                );
              };
      }
      if (e.action_v2.action_enum === `open_pca_connector_auth_modal`)
        return j == null
          ? en
          : Dt
            ? qt
            : Tt || Ct?.has(e.action_v2.connector_id) !== !0
              ? en
              : () => {
                  let t = e.action_v2;
                  if (t.action_enum !== `open_pca_connector_auth_modal`) return !1;
                  let n = vn(a, {
                    connectorId: t.connector_id,
                    conversationId: j,
                    includeConnectorSystemHint: t.include_connector_system_hint_after_link !== !1,
                    triggerTurnAfterLink: t.trigger_turn_after_link !== !1,
                  });
                  return (
                    n != null &&
                    (ft({ action: e, connectorId: t.connector_id, pcaResumeTarget: n, resolveOnClose: !1 }),
                    { didComplete: !0, eventAccountId: void 0, shouldResolve: !1 })
                  );
                };
    },
    kn = se(b) && Ue(b),
    An = `modal`;
  se(b) ? (An = `banner`) : ct(b) ? (An = `carousel`) : Je(b) && (An = `takeover`);
  let Mn;
  t[40] === c
    ? (Mn = t[41])
    : ((Mn = (e) => {
        c(e);
      }),
      (t[40] = c),
      (t[41] = Mn));
  let Nn = {
      scope: a,
      beacon: b,
      appBaseUrl: new URL(d, window.location.origin),
      actionOverrides: pn,
      allowExternalActions: _ !== !1,
      analyticsContext: y,
      eventMetadata: x,
      featureAccessInputs: Y,
      presencePromptId: xe,
      getActionOverride: On,
      navigate: Mn,
      onComposerText: D,
      onDismiss: gn,
      onSendPrompt: N,
      onStartVoice: P,
      upsellHoldoutLayer: Ne,
      useExternalBrowser: An === `modal` || An === `carousel`,
    },
    Z = kn
      ? { status: `supported` }
      : on({
          actionItems: R,
          context: Nn,
          referencedActionIds: ct(b) ? b.ui_info.pages.flatMap(fr) : void 0,
          variant: An,
        }),
    Pn =
      ze && (He == null || Xe)
        ? {
            status: `unsupported`,
            diagnostic: { actionEnum: `unknown`, actionId: `unknown`, reason: `invalid_takeover_artwork` },
          }
        : Z,
    Fn = Pn.status,
    In = Pn.status === `unsupported` ? Pn.diagnostic : null,
    Ln = In?.actionEnum,
    Rn = In?.actionId,
    zn = In?.actionIndex,
    Bn = In?.reason;
  (0, br.useEffect)(() => {
    if (
      M !== !0 &&
      (ut ||
        (x?.suppressLifecycle !== !0 &&
          new pt(a).shouldSuppressBeaconUI({
            isCurrentHomeBeacon: x == null,
            isHomepageTakeoverOwner: Je(b),
            responseLeafId: lt,
          })))
    )
      return;
    if (G && x == null) {
      wt(a, p, b);
      return;
    }
    if (Fn === `unsupported` && Ln != null && Rn != null && Bn != null) {
      (Qe.current?.abort(),
        pe(a, {
          beacon: b,
          diagnostic: {
            actionEnum: Ln,
            actionId: Rn,
            ...(zn == null ? {} : { actionIndex: zn }),
            reason: Bn,
          },
          placement: y?.placement ?? `codex_home`,
          suppressLifecycle: y?.suppressLifecycle ?? x?.suppressLifecycle,
          treatment: y?.treatment ?? ue(b),
        }),
        k == null ? (x ?? wt(a, p, b)) : k());
      return;
    }
    if (Fn !== `supported` || (Je(b) && !qe)) return;
    let e = yt(a, p, b, x);
    (x == null || e) &&
      (e && y?.suppressLifecycle !== !0 && kn && Oe(a, b.action_items[0].action_v2),
      y != null && Ft(a, p, b, y, x));
  }, [p, y, b, x, qe, G, kn, k, Fn, An, M, lt, a, ut, Ln, Rn, zn, Bn]);
  let Vn = null;
  if (!ut && Pn.status === `supported` && se(b) && Ue(b)) {
    let e;
    (t[42] === Pe
      ? (e = t[43])
      : ((e = Pe.formatMessage(
          {
            id: `codexAppHomeBeaconAnnouncement.dismiss`,
            defaultMessage: `Dismiss {appName} beacon banner`,
            description: `Accessible label for dismissing the backend-driven Codex app home banner`,
          },
          { appName: he },
        )),
        (t[42] = Pe),
        (t[43] = e)),
      (Vn = (0, $.jsx)(Yn, {
        actionAccountId: X,
        analyticsContext: y,
        beacon: b,
        dismissAriaLabel: e,
        eventMetadata: x,
        onDismiss: gn,
        onResolve: yn,
      })));
  } else if (!ut && Pn.status === `supported` && se(b))
    Vn = (0, $.jsx)(gr, {
      actionItems: h,
      actionOverrides: pn,
      allowExternalActions: _,
      allowRemoteImages: v,
      analyticsContext: y,
      beacon: b,
      eventAccountId: m,
      eventMetadata: x,
      getActionOverride: On,
      localActionHandlers: T,
      onActionComplete: Tn,
      onComposerText: D,
      onDismiss: gn,
      onSendPrompt: N,
      onStartVoice: P,
    });
  else if (!ut && Pn.status === `supported` && Je(b)) {
    let e, n;
    (t[44] === He
      ? ((e = t[45]), (n = t[46]))
      : ((e = () => {
          He != null && Ke({ url: He, status: `error` });
        }),
        (n = () => {
          He != null && Ke({ url: He, status: `loaded` });
        }),
        (t[44] = He),
        (t[45] = e),
        (t[46] = n)),
      (Vn = (0, $.jsx)(jn, {
        actionOverrides: pn,
        allowExternalActions: _,
        allowRemoteImages: v,
        analyticsContext: y,
        beacon: b,
        eventAccountId: m,
        eventMetadata: x,
        getActionOverride: On,
        isDark: Le === !0,
        isForegroundLoaded: qe,
        onActionComplete: Tn,
        onComposerText: D,
        onDismiss: gn,
        onForegroundError: e,
        onForegroundLoad: n,
        onSendPrompt: N,
        onStartVoice: P,
      })));
  } else
    !ut && Pn.status === `supported` && tt(b)
      ? (Vn = (0, $.jsx)(r, {
          actionOverrides: pn,
          allowExternalActions: _,
          allowRemoteImages: v,
          analyticsContext: y,
          beacon: b,
          eventAccountId: m,
          eventMetadata: x,
          getActionOverride: On,
          onComposerText: D,
          onDismiss: gn,
          onOpen: A,
          onResolve: Dn,
          onSendPrompt: N,
          onStartVoice: P,
        }))
      : !ut &&
        Pn.status === `supported` &&
        ct(b) &&
        (Vn = (0, $.jsx)(Un, {
          actionOverrides: pn,
          allowExternalActions: _,
          allowRemoteImages: v,
          analyticsContext: y,
          beacon: b,
          eventAccountId: m,
          eventMetadata: x,
          getActionOverride: On,
          onComposerText: D,
          onDismiss: gn,
          onOpen: A,
          onResolve: Dn,
          onSendPrompt: N,
          onStartVoice: P,
        }));
  let Hn;
  t[47] !== dt || t[48] !== Vn || t[49] !== et || t[50] !== xn || t[51] !== yn
    ? ((Hn =
        Vn == null
          ? null
          : (0, $.jsxs)($.Fragment, {
              children: [
                dt == null && !et ? Vn : null,
                dt == null
                  ? null
                  : (0, $.jsx)(ln, {
                      connectorId: dt.connectorId,
                      pcaResumeTarget: dt.pcaResumeTarget,
                      onOpenChange: (e) => {
                        if (!e) {
                          let e = dt.action,
                            t = dt.resolveOnClose;
                          (ft(null), t ? yn(e) : xn(e));
                        }
                      },
                    }),
              ],
            })),
      (t[47] = dt),
      (t[48] = Vn),
      (t[49] = et),
      (t[50] = xn),
      (t[51] = yn),
      (t[52] = Hn))
    : (Hn = t[52]);
  let Wn = Hn;
  if (I != null) return I({ content: Wn, supportStatus: ut ? `unavailable` : Pn.status });
  if (x?.conversationId == null && Je(b) && o.isAvailable && o.target != null) {
    let e;
    return (
      t[53] !== Wn || t[54] !== o.target
        ? ((e = At(Wn, o.target)), (t[53] = Wn), (t[54] = o.target), (t[55] = e))
        : (e = t[55]),
      e
    );
  }
  return Wn;
}
function fr(e) {
  return e.cta_action_item_id == null ? [] : [e.cta_action_item_id];
}
function pr() {
  return !0;
}
function mr(e) {
  return e.action_v2.action_enum === `create_presence_session`;
}
function hr() {
  return M(
    () => import(`./home-beacon-763f3a328d96.js`),
    __vite__mapDeps([9, 1, 2, 3, 10, 11, 12, 13, 14, 15, 16]),
    import.meta.url,
  );
}
function gr(e) {
  let t = (0, yr.c)(52),
    {
      actionItems: n,
      actionOverrides: r,
      allowExternalActions: i,
      allowRemoteImages: o,
      analyticsContext: s,
      beacon: c,
      eventAccountId: p,
      eventMetadata: m,
      getActionOverride: g,
      localActionHandlers: _,
      onActionComplete: v,
      onComposerText: b,
      onDismiss: x,
      onSendPrompt: S,
      onStartVoice: C,
    } = e,
    w = i === void 0 || i,
    T = o === void 0 || o,
    E = f(ee),
    D = te(),
    O = l(),
    k = u(),
    j = (0, br.useContext)(A),
    M = k ? (c.ui_info.icon_image_url_dark ?? c.ui_info.icon_image_url) : c.ui_info.icon_image_url,
    N = c.ui_info.informational_link,
    P = N != null && _t(N.url) && (w || N.url.startsWith(`/`)) ? N : null,
    F = c.ui_info.banner_design,
    I = F === "default" && s?.placement !== `in_conversation`,
    L = s?.productExperience === `chat` ? void 0 : vt;
  F === "default" && (L = `w-full`);
  let R;
  if (vr(c.action_items, ht)) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`div`, { className: h.iconCircle, children: (0, $.jsx)(d, {}) })), (t[0] = e))
      : (e = t[0]),
      (R = e));
  } else if (T && M != null && St(M)) {
    let e = F === "default" ? h.responsiveImage : xr[c.ui_info.icon_image_size],
      n;
    (t[1] !== M || t[2] !== e
      ? ((n = (0, $.jsx)(`img`, { alt: ``, className: e, src: M })), (t[1] = M), (t[2] = e), (t[3] = n))
      : (n = t[3]),
      (R = n));
  }
  let ne = L,
    z = I ? `` : void 0,
    B = F === `eyebrow_composer`,
    re = F === "default" ? `aside` : `bodyOnNarrow`,
    V = c.ui_info.title,
    H;
  t[4] !== s || t[5] !== c || t[6] !== p || t[7] !== m || t[8] !== O || t[9] !== E || t[10] !== P
    ? ((H =
        P == null
          ? c.ui_info.description
          : (0, $.jsxs)($.Fragment, {
              children: [
                c.ui_info.description,
                ` `,
                (0, $.jsx)(`a`, {
                  href: P.url,
                  onClick: (e) => {
                    if (
                      (ut({ beacon: c, eventType: `click`, eventCtaId: P.id, metadata: m, accountId: p }),
                      s != null &&
                        Fe(E, {
                          action: `click`,
                          actionId: P.id,
                          actionType: `secondary`,
                          beacon: c,
                          destinationAction: `open_url`,
                          ...s,
                        }),
                      P.url.startsWith(`/`))
                    ) {
                      (e.preventDefault(), O(P.url));
                      return;
                    }
                    Be({ event: e, href: P.url, initiator: `open_in_browser_bridge` });
                  },
                  children: P.text,
                }),
              ],
            })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = p),
      (t[7] = m),
      (t[8] = O),
      (t[9] = E),
      (t[10] = P),
      (t[11] = H))
    : (H = t[11]);
  let ie = R,
    U = n ?? c.action_items,
    W;
  t[12] !== c || t[13] !== g || t[14] !== _
    ? ((W = (e) => {
        let t = _?.[xt({ actionId: e.id, beaconId: c.beacon_id })];
        return t == null ? g?.(e) : () => t({ action: e, beacon: c });
      }),
      (t[12] = c),
      (t[13] = g),
      (t[14] = _),
      (t[15] = W))
    : (W = t[15]);
  let G;
  t[16] !== r ||
  t[17] !== w ||
  t[18] !== T ||
  t[19] !== s ||
  t[20] !== c ||
  t[21] !== p ||
  t[22] !== m ||
  t[23] !== v ||
  t[24] !== b ||
  t[25] !== x ||
  t[26] !== S ||
  t[27] !== C ||
  t[28] !== U ||
  t[29] !== W
    ? ((G = (0, $.jsx)(mn, {
        actionItems: U,
        actionOverrides: r,
        allowExternalActions: w,
        allowRemoteImages: T,
        analyticsContext: s,
        beacon: c,
        eventAccountId: p,
        eventMetadata: m,
        getActionOverride: W,
        onActionComplete: v,
        onComposerText: b,
        onDismiss: x,
        onSendPrompt: S,
        onStartVoice: C,
        variant: `banner`,
      })),
      (t[16] = r),
      (t[17] = w),
      (t[18] = T),
      (t[19] = s),
      (t[20] = c),
      (t[21] = p),
      (t[22] = m),
      (t[23] = v),
      (t[24] = b),
      (t[25] = x),
      (t[26] = S),
      (t[27] = C),
      (t[28] = U),
      (t[29] = W),
      (t[30] = G))
    : (G = t[30]);
  let K;
  t[31] === D
    ? (K = t[32])
    : ((K = D.formatMessage(
        {
          id: `codexAppHomeBeaconAnnouncement.dismiss`,
          defaultMessage: `Dismiss {appName} beacon banner`,
          description: `Accessible label for dismissing the backend-driven Codex app home banner`,
        },
        { appName: he },
      )),
      (t[31] = D),
      (t[32] = K));
  let ae;
  t[33] !== x || t[34] !== K
    ? ((ae = { ariaLabel: K, icon: a, onClick: x }), (t[33] = x), (t[34] = K), (t[35] = ae))
    : (ae = t[35]);
  let q;
  t[36] !== c.ui_info.title ||
  t[37] !== R ||
  t[38] !== G ||
  t[39] !== ae ||
  t[40] !== B ||
  t[41] !== re ||
  t[42] !== H
    ? ((q = (0, $.jsx)(Ot, {
        variant: `beacon`,
        attachedToComposer: B,
        actionsPlacement: re,
        title: V,
        description: H,
        leadingVisual: ie,
        additionalActions: G,
        dismissAction: ae,
      })),
      (t[36] = c.ui_info.title),
      (t[37] = R),
      (t[38] = G),
      (t[39] = ae),
      (t[40] = B),
      (t[41] = re),
      (t[42] = H),
      (t[43] = q))
    : (q = t[43]);
  let oe;
  t[44] !== L || t[45] !== q || t[46] !== z
    ? ((oe = (0, $.jsx)(`div`, { className: ne, "data-home-beacon-banner": z, children: q })),
      (t[44] = L),
      (t[45] = q),
      (t[46] = z),
      (t[47] = oe))
    : (oe = t[47]);
  let J = oe,
    se;
  return (
    t[48] !== J || t[49] !== I || t[50] !== j
      ? ((se = I
          ? (0, $.jsx)(y, {
              children: (0, $.jsx)(mt, {
                active: j?.homeBannerPlacement === `footer` && j.target != null,
                claim: Ne.HomeFooterBeacon,
                children: J,
              }),
            })
          : J),
        (t[48] = J),
        (t[49] = I),
        (t[50] = j),
        (t[51] = se))
      : (se = t[51]),
    se
  );
}
function _r(e, t) {
  return vr(e, (e) => e.action_v2.action_enum === t);
}
function vr(e, t) {
  return e.some((e) => (t(e) ? !0 : e.action_v2.action_enum === `dropdown` && vr(e.action_v2.items, t)));
}
var yr, br, $, xr, Sr;
function Cr() {
  return (Cr = e(() => {
    ((yr = U()),
      It(),
      _(),
      (br = q()),
      I(),
      k(),
      fe(),
      Ce(),
      lt(),
      Ge(),
      Ke(),
      $e(),
      sn(),
      Bt(),
      pn(),
      dt(),
      dn(),
      Pn(),
      hn(),
      Jn(),
      rr(),
      Ht(),
      rn(),
      Zt(),
      Dt(),
      lr(),
      _n(),
      cn(),
      De(),
      Mt(),
      o(),
      me(),
      Nt(),
      H(),
      xe(),
      x(),
      oe(),
      Xt(),
      L(),
      Me(),
      Ct(),
      n(),
      zt(),
      Wt(),
      Kt(),
      ze(),
      G(),
      ke(),
      v(),
      re(),
      ($ = K()),
      B(),
      (xr = { large: `size-12`, medium: `size-9`, small: `size-6` }),
      (Sr = r(
        async () =>
          (
            await M(
              async () => {
                let { LibraryOnboardingBeacon: e } = await import(`./beacon-b3dc5ec33bd7.js`);
                return { LibraryOnboardingBeacon: e };
              },
              __vite__mapDeps([17, 1, 2, 3, 10, 11, 18, 19, 20, 21, 22, 23]),
              import.meta.url,
            )
          ).LibraryOnboardingBeacon,
      )),
      r(X),
      r(Rt));
  }))();
}
export { gr as n, Cr as r, ur as t };
//# sourceMappingURL=codex-app-home-beacon-announcement-2b935397f978.js.map
