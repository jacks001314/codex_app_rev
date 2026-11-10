import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  TJ as o,
  UV as ee,
  VDt as te,
  _O as s,
  fO as c,
  gO as l,
  iO as u,
  jDt as d,
  mO as f,
  rO as ne,
  rW as re,
  sO as ie,
  t3 as p,
  vO as m,
  vzt as h,
  wB as g,
  wot as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  JPn as y,
  OPn as b,
  Ogn as x,
  XPn as S,
  dH as C,
  iI as w,
  kPn as T,
  oI as E,
  uH as D,
  xPn as O,
  yPn as ae,
  ygn as k,
} from "./app-initial-5851df3f6cb1.js";
import { X as oe, t as A } from "./src-c65a930b3c0e.js";
import { n as j, t as M } from "./site-preview-b226ffd1d9b7.js";
function N(e) {
  let a = (0, P.c)(61),
    { site: o, creatorName: c, onOpenSite: u, onClose: d, onCloseAutoFocus: p } = e,
    m = i(n),
    h = te(),
    { data: _ } = x(o.thumbnail_url ?? null),
    v = o.open_url ?? null,
    y;
  a[0] !== v || a[1] !== o.title
    ? ((y = w(v) ?? o.title), (a[0] = v), (a[1] = o.title), (a[2] = y))
    : (y = a[2]);
  let T = y,
    E;
  a[3] !== v || a[4] !== u || a[5] !== T
    ? ((E =
        v == null
          ? T
          : (0, F.jsx)(
              ae,
              {
                href: v,
                initiator: `mcp_app_resource`,
                openTarget: `external-browser`,
                underline: `none`,
                onActivate: u,
                children: T,
              },
              `site-url`,
            )),
      (a[3] = v),
      (a[4] = u),
      (a[5] = T),
      (a[6] = E))
    : (E = a[6]);
  let D = E,
    O;
  a[7] !== v || a[8] !== u
    ? ((O = (e) => {
        v != null &&
          (u(),
          S({
            event: e,
            href: v,
            initiator: `mcp_app_resource`,
            openTarget: `external-browser`,
            disposition: `new-tab`,
          }));
      }),
      (a[7] = v),
      (a[8] = u),
      (a[9] = O))
    : (O = a[9]);
  let k = O,
    A;
  a[10] === p ? (A = a[11]) : ((A = { onCloseAutoFocus: p }), (a[10] = p), (a[11] = A));
  let j;
  a[12] === h
    ? (j = a[13])
    : ((j = h.formatMessage({
        id: `profile.showcase.site.close`,
        defaultMessage: `Close site preview`,
        description: `Accessible label for closing a site preview over the profile`,
      })),
      (a[12] = h),
      (a[13] = j));
  let N;
  a[14] === d
    ? (N = a[15])
    : ((N = (e) => {
        e || d();
      }),
      (a[14] = d),
      (a[15] = N));
  let I;
  a[16] === o.title
    ? (I = a[17])
    : ((I = (0, F.jsx)(s, { children: o.title })), (a[16] = o.title), (a[17] = I));
  let L;
  a[18] !== c || a[19] !== D
    ? ((L = c
        ? (0, F.jsx)(r, {
            id: `profile.showcase.site.subtitle`,
            defaultMessage: `{siteUrl} · {creatorName}`,
            description: `Site address and its creator's display name below the site preview title`,
            values: { siteUrl: D, creatorName: c },
          })
        : D),
      (a[18] = c),
      (a[19] = D),
      (a[20] = L))
    : (L = a[20]);
  let R;
  a[21] === L ? (R = a[22]) : ((R = (0, F.jsx)(l, { children: L })), (a[21] = L), (a[22] = R));
  let z;
  a[23] !== h || a[24] !== o.title
    ? ((z = h.formatMessage(
        {
          id: `profile.showcase.site.previewAlt`,
          defaultMessage: `{siteTitle} site preview`,
          description: `Alt text for a screenshot of the showcased site`,
        },
        { siteTitle: o.title },
      )),
      (a[23] = h),
      (a[24] = o.title),
      (a[25] = z))
    : (z = a[25]);
  let B;
  a[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, F.jsx)(M, { aspectRatio: `landscape`, screenshotUrl: null, viewMode: `grid` })), (a[26] = B))
    : (B = a[26]);
  let V;
  a[27] !== h || a[28] !== v || a[29] !== k
    ? ((V =
        v != null &&
        (0, F.jsx)(t, {
          "aria-label": h.formatMessage({
            id: `profile.showcase.site.open`,
            defaultMessage: `Open site in a new tab`,
            description: `Accessible label for the corner button on a site preview`,
          }),
          color: `mediaOverlay`,
          size: `iconCircle`,
          onClick: k,
          children: (0, F.jsx)(b, { ExternalIcon: ee, href: v, openTarget: `external-browser` }),
        })),
      (a[27] = h),
      (a[28] = v),
      (a[29] = k),
      (a[30] = V))
    : (V = a[30]);
  let H = v == null,
    U;
  a[31] !== v || a[32] !== m
    ? ((U = (e) => {
        v != null &&
          ne(v, e).then((e) => {
            e && C(m);
          });
      }),
      (a[31] = v),
      (a[32] = m),
      (a[33] = U))
    : (U = a[33]);
  let W, G;
  a[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, F.jsx)(re, {})),
      (G = (0, F.jsx)(r, {
        id: `profile.showcase.site.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button that copies the showcased site's URL to the clipboard`,
      })),
      (a[34] = W),
      (a[35] = G))
    : ((W = a[34]), (G = a[35]));
  let K;
  a[36] !== H || a[37] !== U
    ? ((K = (0, F.jsxs)(t, {
        color: `outlineGhost`,
        radius: `full`,
        disabled: H,
        onClick: U,
        children: [W, G],
      })),
      (a[36] = H),
      (a[37] = U),
      (a[38] = K))
    : (K = a[38]);
  let q = v == null,
    J;
  a[39] === v
    ? (J = a[40])
    : ((J = v != null && (0, F.jsx)(b, { ExternalIcon: g, href: v, openTarget: `external-browser` })),
      (a[39] = v),
      (a[40] = J));
  let Y;
  a[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, F.jsx)(r, {
        id: `profile.showcase.site.view`,
        defaultMessage: `View site`,
        description: `Button that opens the showcased site in a new browser tab`,
      })),
      (a[41] = Y))
    : (Y = a[41]);
  let X;
  a[42] !== k || a[43] !== q || a[44] !== J
    ? ((X = (0, F.jsxs)(t, { radius: `full`, disabled: q, onClick: k, children: [J, Y] })),
      (a[42] = k),
      (a[43] = q),
      (a[44] = J),
      (a[45] = X))
    : (X = a[45]);
  let Z;
  a[46] !== K || a[47] !== X
    ? ((Z = (0, F.jsxs)(ie, { children: [K, X] })), (a[46] = K), (a[47] = X), (a[48] = Z))
    : (Z = a[48]);
  let Q;
  a[49] !== _ || a[50] !== z || a[51] !== V || a[52] !== Z || a[53] !== I || a[54] !== R
    ? ((Q = (0, F.jsx)(oe, {
        title: I,
        subtitle: R,
        screenshotSrc: _,
        previewAlt: z,
        fallback: B,
        openButton: V,
        actions: Z,
      })),
      (a[49] = _),
      (a[50] = z),
      (a[51] = V),
      (a[52] = Z),
      (a[53] = I),
      (a[54] = R),
      (a[55] = Q))
    : (Q = a[55]);
  let $;
  return (
    a[56] !== Q || a[57] !== A || a[58] !== j || a[59] !== N
      ? (($ = (0, F.jsx)(f, {
          open: !0,
          size: `xwide`,
          contentProps: A,
          dialogCloseLabel: j,
          onOpenChange: N,
          children: Q,
        })),
        (a[56] = Q),
        (a[57] = A),
        (a[58] = j),
        (a[59] = N),
        (a[60] = $))
      : ($ = a[60]),
    $
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = h()), A(), a(), d(), k(), E(), p(), m(), c(), O(), y(), T(), o(), _(), D(), u(), j(), (F = v()));
  }))();
}
I();
export { N as ShowcaseSiteDetails };
//# sourceMappingURL=site-details-6f296cdd5fc5.js.map
