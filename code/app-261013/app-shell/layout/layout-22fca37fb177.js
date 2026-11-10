import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cxt as n,
  Ext as r,
  FD as i,
  IDt as a,
  JC as o,
  ND as s,
  _xt as c,
  e3 as l,
  iw as u,
  jDt as d,
  qC as f,
  t3 as p,
  tw as m,
  vzt as h,
  xMt as g,
  yzt as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  JPn as v,
  Tl as y,
  XPn as b,
  _F as x,
  git as S,
  hF as C,
  hit as w,
} from "./app-initial-5851df3f6cb1.js";
import { r as T, t as E } from "./document-title-1619f32b59ec.js";
import { O as D, t as O } from "./src-c65a930b3c0e.js";
import { n as k, t as A } from "./toolbar-breadcrumb-e1be94112dcb.js";
function j(e) {
  let t = (0, F.c)(32),
    { title: i, subtitle: o, documentTitle: s, plugin: c, asset: u, action: d, detailTo: f, children: p } = e,
    m = r(),
    h;
  t[0] === f ? (h = t[1]) : ((h = f?.startsWith(`https://`)), (t[0] = f), (t[1] = h));
  let g = h === !0,
    _ = n(g ? `.` : (f ?? `.`)),
    v;
  t[2] !== d || t[3] !== _ || t[4] !== f || t[5] !== m || t[6] !== g
    ? ((v =
        f == null
          ? d
          : (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, L.jsx)(l, {
                  color: `outline`,
                  size: `toolbar`,
                  href: g ? f : _,
                  onClick: (e) => {
                    g ? b({ event: e, href: f, initiator: `open_in_browser_bridge` }) : y(e, () => void m(f));
                  },
                  children: (0, L.jsx)(a, {
                    id: `browserPluginSettings.viewDetails`,
                    defaultMessage: `View details`,
                    description: `Button in a plugin's settings header that opens its directory detail page`,
                  }),
                }),
                d,
              ],
            })),
      (t[2] = d),
      (t[3] = _),
      (t[4] = f),
      (t[5] = m),
      (t[6] = g),
      (t[7] = v))
    : (v = t[7]);
  let x = v,
    w = u == null ? `default` : `compact`,
    T = u == null ? i : void 0,
    O;
  t[8] === o
    ? (O = t[9])
    : ((O = typeof o == `string` ? (0, L.jsx)(M, { description: o }, o) : o), (t[8] = o), (t[9] = O));
  let k = u == null ? x : void 0,
    j;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = {
        id: `plugins`,
        label: (0, L.jsx)(a, {
          id: `pluginSettings.breadcrumb`,
          defaultMessage: `Plugin settings`,
          description: `Breadcrumb link back to the plugin settings list from a settings detail page`,
        }),
        to: S(),
      }),
      (t[10] = j))
    : (j = t[10]);
  let N;
  t[11] === c
    ? (N = t[12])
    : ((N = [j, ...(c == null ? [] : [{ id: c.id, label: c.release.display_name, to: S(c.id) }])]),
      (t[11] = c),
      (t[12] = N));
  let P;
  t[13] !== N || t[14] !== i
    ? ((P = (0, L.jsx)(A, { textSm: !0, ancestors: N, current: i })), (t[13] = N), (t[14] = i), (t[15] = P))
    : (P = t[15]);
  let I;
  t[16] === s ? (I = t[17]) : ((I = (0, L.jsx)(E, { title: s })), (t[16] = s), (t[17] = I));
  let R;
  t[18] !== x || t[19] !== u || t[20] !== o || t[21] !== i
    ? ((R =
        u == null
          ? null
          : (0, L.jsxs)(`header`, {
              className: `flex min-w-0 flex-wrap items-center justify-between gap-4`,
              children: [
                (0, L.jsxs)(`div`, {
                  className: `flex min-w-0 flex-1 basis-64 items-center gap-3`,
                  children: [
                    (0, L.jsx)(D, { children: u }),
                    (0, L.jsxs)(`div`, {
                      className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                      children: [
                        (0, L.jsx)(`h1`, { className: `heading-base break-words text-default`, children: i }),
                        o == null
                          ? null
                          : (0, L.jsx)(`div`, {
                              className: `text-xs leading-4 text-secondary`,
                              children: typeof o == `string` ? (0, L.jsx)(M, { description: o }, o) : o,
                            }),
                      ],
                    }),
                  ],
                }),
                x,
              ],
            })),
      (t[18] = x),
      (t[19] = u),
      (t[20] = o),
      (t[21] = i),
      (t[22] = R))
    : (R = t[22]);
  let z;
  return (
    t[23] !== p ||
    t[24] !== I ||
    t[25] !== R ||
    t[26] !== w ||
    t[27] !== T ||
    t[28] !== O ||
    t[29] !== k ||
    t[30] !== P
      ? ((z = (0, L.jsxs)(C, {
          density: w,
          title: T,
          subtitle: O,
          action: k,
          backSlot: P,
          children: [I, R, p],
        })),
        (t[23] = p),
        (t[24] = I),
        (t[25] = R),
        (t[26] = w),
        (t[27] = T),
        (t[28] = O),
        (t[29] = k),
        (t[30] = P),
        (t[31] = z))
      : (z = t[31]),
    z
  );
}
function M(e) {
  let n = (0, F.c)(14),
    { description: r } = e,
    o = (0, I.useId)(),
    [s, c] = (0, I.useState)(!1),
    [l, u] = (0, I.useState)(!1),
    d;
  n[0] === s
    ? (d = n[1])
    : ((d = (e, t) => {
        s || u(t.scrollHeight > t.clientHeight);
      }),
      (n[0] = s),
      (n[1] = d));
  let f = i(d),
    p = s ? `w-full` : `line-clamp-3 w-full`,
    m;
  n[2] !== r || n[3] !== o || n[4] !== f || n[5] !== p
    ? ((m = (0, L.jsx)(`div`, { id: o, ref: f, className: p, children: r })),
      (n[2] = r),
      (n[3] = o),
      (n[4] = f),
      (n[5] = p),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] !== o || n[8] !== l || n[9] !== s
    ? ((h =
        l || s
          ? (0, L.jsx)(t, {
              className: `mt-1.5 self-start`,
              "aria-controls": o,
              "aria-expanded": s,
              color: `ghostMuted`,
              size: `inline`,
              onClick: () => c(N),
              children: s
                ? (0, L.jsx)(a, {
                    id: `browserPluginSettings.description.readLess`,
                    defaultMessage: `Read less`,
                    description: `Collapse the full plugin or app description in settings`,
                  })
                : (0, L.jsx)(a, {
                    id: `browserPluginSettings.description.readMore`,
                    defaultMessage: `Read more`,
                    description: `Expand the truncated plugin or app description in settings`,
                  }),
            })
          : null),
      (n[7] = o),
      (n[8] = l),
      (n[9] = s),
      (n[10] = h))
    : (h = n[10]);
  let g;
  return (
    n[11] !== m || n[12] !== h
      ? ((g = (0, L.jsxs)(`div`, { className: `flex flex-col items-start`, children: [m, h] })),
        (n[11] = m),
        (n[12] = h),
        (n[13] = g))
      : (g = n[13]),
    g
  );
}
function N(e) {
  return !e;
}
function P(e) {
  let n = (0, F.c)(4),
    { onRetry: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, L.jsx)(`span`, {
        role: `alert`,
        children: (0, L.jsx)(a, {
          id: `browserPluginSettings.loadError`,
          defaultMessage: `Couldn't load plugin settings`,
          description: `Error when browser plugin settings cannot be loaded`,
        }),
      })),
      (n[0] = i))
    : (i = n[0]);
  let o;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, L.jsx)(a, {
        id: `browserPluginSettings.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading plugin settings`,
      })),
      (n[1] = o))
    : (o = n[1]);
  let s;
  return (
    n[2] === r
      ? (s = n[3])
      : ((s = (0, L.jsx)(f, {
          children: (0, L.jsx)(m, {
            label: i,
            control: (0, L.jsx)(t, { color: `ghost`, onClick: r, children: o }),
          }),
        })),
        (n[2] = r),
        (n[3] = s)),
    s
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = h()), O(), (I = _()), d(), c(), p(), v(), k(), T(), s(), x(), u(), o(), w(), (L = g()));
  }))();
}
export { j as n, R as r, P as t };
//# sourceMappingURL=layout-22fca37fb177.js.map
