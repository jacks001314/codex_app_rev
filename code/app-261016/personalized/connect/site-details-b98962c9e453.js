import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $W as ee,
  $st as n,
  HO as r,
  JO as i,
  KO as te,
  LNt as a,
  LO as o,
  NO as ne,
  PBt as s,
  PO as c,
  Qst as l,
  TY as u,
  WO as re,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  bV as ie,
  okt as h,
  qO as g,
  tkt as _,
  zH as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GLn as y,
  Jvn as b,
  SRn as x,
  UI as S,
  VI as C,
  bRn as w,
  cH as ae,
  eRn as T,
  qLn as E,
  sH as D,
  tRn as O,
  zvn as k,
} from "./app-initial-ad16eaadf81f.js";
import { X as oe, t as A } from "./src-64808839b2f3.js";
import { n as j, t as M } from "./site-preview-4f8756af126e.js";
function N(e) {
  let n = (0, P.c)(61),
    { site: r, creatorName: i, onOpenSite: a, onClose: s, onCloseAutoFocus: c } = e,
    u = t(l),
    d = h(),
    { data: p } = b(r.thumbnail_url ?? null),
    m = r.open_url ?? null,
    S;
  n[0] !== m || n[1] !== r.title
    ? ((S = C(m) ?? r.title), (n[0] = m), (n[1] = r.title), (n[2] = S))
    : (S = n[2]);
  let w = S,
    E;
  n[3] !== m || n[4] !== a || n[5] !== w
    ? ((E =
        m == null
          ? w
          : (0, F.jsx)(
              y,
              {
                href: m,
                initiator: `mcp_app_resource`,
                openTarget: `external-browser`,
                underline: `none`,
                onActivate: a,
                children: w,
              },
              `site-url`,
            )),
      (n[3] = m),
      (n[4] = a),
      (n[5] = w),
      (n[6] = E))
    : (E = n[6]);
  let D = E,
    O;
  n[7] !== m || n[8] !== a
    ? ((O = (e) => {
        m != null &&
          (a(),
          x({
            event: e,
            href: m,
            initiator: `mcp_app_resource`,
            openTarget: `external-browser`,
            disposition: `new-tab`,
          }));
      }),
      (n[7] = m),
      (n[8] = a),
      (n[9] = O))
    : (O = n[9]);
  let k = O,
    A;
  n[10] === c ? (A = n[11]) : ((A = { onCloseAutoFocus: c }), (n[10] = c), (n[11] = A));
  let j;
  n[12] === d
    ? (j = n[13])
    : ((j = d.formatMessage({
        id: `profile.showcase.site.close`,
        defaultMessage: `Close site preview`,
        description: `Accessible label for closing a site preview over the profile`,
      })),
      (n[12] = d),
      (n[13] = j));
  let N;
  n[14] === s
    ? (N = n[15])
    : ((N = (e) => {
        e || s();
      }),
      (n[14] = s),
      (n[15] = N));
  let I;
  n[16] === r.title
    ? (I = n[17])
    : ((I = (0, F.jsx)(g, { children: r.title })), (n[16] = r.title), (n[17] = I));
  let L;
  n[18] !== i || n[19] !== D
    ? ((L = i
        ? (0, F.jsx)(_, {
            id: `profile.showcase.site.subtitle`,
            defaultMessage: `{siteUrl} · {creatorName}`,
            description: `Site address and its creator's display name below the site preview title`,
            values: { siteUrl: D, creatorName: i },
          })
        : D),
      (n[18] = i),
      (n[19] = D),
      (n[20] = L))
    : (L = n[20]);
  let R;
  n[21] === L ? (R = n[22]) : ((R = (0, F.jsx)(te, { children: L })), (n[21] = L), (n[22] = R));
  let z;
  n[23] !== d || n[24] !== r.title
    ? ((z = d.formatMessage(
        {
          id: `profile.showcase.site.previewAlt`,
          defaultMessage: `{siteTitle} site preview`,
          description: `Alt text for a screenshot of the showcased site`,
        },
        { siteTitle: r.title },
      )),
      (n[23] = d),
      (n[24] = r.title),
      (n[25] = z))
    : (z = n[25]);
  let B;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, F.jsx)(M, { aspectRatio: `landscape`, screenshotUrl: null, viewMode: `grid` })), (n[26] = B))
    : (B = n[26]);
  let V;
  n[27] !== d || n[28] !== m || n[29] !== k
    ? ((V =
        m != null &&
        (0, F.jsx)(f, {
          "aria-label": d.formatMessage({
            id: `profile.showcase.site.open`,
            defaultMessage: `Open site in a new tab`,
            description: `Accessible label for the corner button on a site preview`,
          }),
          color: `mediaOverlay`,
          size: `iconCircle`,
          onClick: k,
          children: (0, F.jsx)(T, { ExternalIcon: v, href: m, openTarget: `external-browser` }),
        })),
      (n[27] = d),
      (n[28] = m),
      (n[29] = k),
      (n[30] = V))
    : (V = n[30]);
  let H = m == null,
    U;
  n[31] !== m || n[32] !== u
    ? ((U = (e) => {
        m != null &&
          ne(m, e).then((e) => {
            e && ae(u);
          });
      }),
      (n[31] = m),
      (n[32] = u),
      (n[33] = U))
    : (U = n[33]);
  let W, G;
  n[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, F.jsx)(ee, {})),
      (G = (0, F.jsx)(_, {
        id: `profile.showcase.site.copyLink`,
        defaultMessage: `Copy link`,
        description: `Button that copies the showcased site's URL to the clipboard`,
      })),
      (n[34] = W),
      (n[35] = G))
    : ((W = n[34]), (G = n[35]));
  let K;
  n[36] !== H || n[37] !== U
    ? ((K = (0, F.jsxs)(f, {
        color: `outlineGhost`,
        radius: `full`,
        disabled: H,
        onClick: U,
        children: [W, G],
      })),
      (n[36] = H),
      (n[37] = U),
      (n[38] = K))
    : (K = n[38]);
  let q = m == null,
    J;
  n[39] === m
    ? (J = n[40])
    : ((J = m != null && (0, F.jsx)(T, { ExternalIcon: ie, href: m, openTarget: `external-browser` })),
      (n[39] = m),
      (n[40] = J));
  let Y;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, F.jsx)(_, {
        id: `profile.showcase.site.view`,
        defaultMessage: `View site`,
        description: `Button that opens the showcased site in a new browser tab`,
      })),
      (n[41] = Y))
    : (Y = n[41]);
  let X;
  n[42] !== k || n[43] !== q || n[44] !== J
    ? ((X = (0, F.jsxs)(f, { radius: `full`, disabled: q, onClick: k, children: [J, Y] })),
      (n[42] = k),
      (n[43] = q),
      (n[44] = J),
      (n[45] = X))
    : (X = n[45]);
  let Z;
  n[46] !== K || n[47] !== X
    ? ((Z = (0, F.jsxs)(o, { children: [K, X] })), (n[46] = K), (n[47] = X), (n[48] = Z))
    : (Z = n[48]);
  let Q;
  n[49] !== p || n[50] !== z || n[51] !== V || n[52] !== Z || n[53] !== I || n[54] !== R
    ? ((Q = (0, F.jsx)(oe, {
        title: I,
        subtitle: R,
        screenshotSrc: p,
        previewAlt: z,
        fallback: B,
        openButton: V,
        actions: Z,
      })),
      (n[49] = p),
      (n[50] = z),
      (n[51] = V),
      (n[52] = Z),
      (n[53] = I),
      (n[54] = R),
      (n[55] = Q))
    : (Q = n[55]);
  let $;
  return (
    n[56] !== Q || n[57] !== A || n[58] !== j || n[59] !== N
      ? (($ = (0, F.jsx)(re, {
          open: !0,
          size: `xwide`,
          contentProps: A,
          dialogCloseLabel: j,
          onOpenChange: N,
          children: Q,
        })),
        (n[56] = Q),
        (n[57] = A),
        (n[58] = j),
        (n[59] = N),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
var P, F;
function I() {
  return (I = e(() => {
    ((P = s()), A(), m(), d(), k(), S(), p(), i(), r(), E(), w(), O(), u(), n(), D(), c(), j(), (F = a()));
  }))();
}
I();
export { N as ShowcaseSiteDetails };
//# sourceMappingURL=site-details-b98962c9e453.js.map
