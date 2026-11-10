import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  BSt as n,
  FBt as r,
  LNt as i,
  NSt as a,
  PBt as o,
  USt as s,
  X3 as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  dO as f,
  ew as p,
  lO as m,
  sw as h,
  tkt as g,
  uw as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Dl as v,
  Fat as y,
  Iat as b,
  QF as x,
  SRn as S,
  bRn as C,
  eI as w,
} from "./app-initial-ad16eaadf81f.js";
import { r as T, t as E } from "./document-title-149d008a9f01.js";
import { O as D, t as O } from "./src-64808839b2f3.js";
import { n as k, t as A } from "./toolbar-breadcrumb-d8f79235f5b5.js";
function j(e) {
  let t = (0, F.c)(32),
    { title: r, subtitle: i, documentTitle: a, plugin: o, asset: l, action: u, detailTo: d, children: f } = e,
    p = s(),
    m;
  t[0] === d ? (m = t[1]) : ((m = d?.startsWith(`https://`)), (t[0] = d), (t[1] = m));
  let h = m === !0,
    _ = n(h ? `.` : (d ?? `.`)),
    y;
  t[2] !== u || t[3] !== _ || t[4] !== d || t[5] !== p || t[6] !== h
    ? ((y =
        d == null
          ? u
          : (0, L.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, L.jsx)(c, {
                  color: `outline`,
                  size: `toolbar`,
                  href: h ? d : _,
                  onClick: (e) => {
                    h ? S({ event: e, href: d, initiator: `open_in_browser_bridge` }) : v(e, () => void p(d));
                  },
                  children: (0, L.jsx)(g, {
                    id: `browserPluginSettings.viewDetails`,
                    defaultMessage: `View details`,
                    description: `Button in a plugin's settings header that opens its directory detail page`,
                  }),
                }),
                u,
              ],
            })),
      (t[2] = u),
      (t[3] = _),
      (t[4] = d),
      (t[5] = p),
      (t[6] = h),
      (t[7] = y))
    : (y = t[7]);
  let C = y,
    w = l == null ? `default` : `compact`,
    T = l == null ? r : void 0,
    O;
  t[8] === i
    ? (O = t[9])
    : ((O = typeof i == `string` ? (0, L.jsx)(M, { description: i }, i) : i), (t[8] = i), (t[9] = O));
  let k = l == null ? C : void 0,
    j;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = {
        id: `plugins`,
        label: (0, L.jsx)(g, {
          id: `pluginSettings.breadcrumb`,
          defaultMessage: `Plugin settings`,
          description: `Breadcrumb link back to the plugin settings list from a settings detail page`,
        }),
        to: b(),
      }),
      (t[10] = j))
    : (j = t[10]);
  let N;
  t[11] === o
    ? (N = t[12])
    : ((N = [j, ...(o == null ? [] : [{ id: o.id, label: o.release.display_name, to: b(o.id) }])]),
      (t[11] = o),
      (t[12] = N));
  let P;
  t[13] !== N || t[14] !== r
    ? ((P = (0, L.jsx)(A, { textSm: !0, ancestors: N, current: r })), (t[13] = N), (t[14] = r), (t[15] = P))
    : (P = t[15]);
  let I;
  t[16] === a ? (I = t[17]) : ((I = (0, L.jsx)(E, { title: a })), (t[16] = a), (t[17] = I));
  let R;
  t[18] !== C || t[19] !== l || t[20] !== i || t[21] !== r
    ? ((R =
        l == null
          ? null
          : (0, L.jsxs)(`header`, {
              className: `flex min-w-0 flex-wrap items-center justify-between gap-4`,
              children: [
                (0, L.jsxs)(`div`, {
                  className: `flex min-w-0 flex-1 basis-64 items-center gap-3`,
                  children: [
                    (0, L.jsx)(D, { children: l }),
                    (0, L.jsxs)(`div`, {
                      className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                      children: [
                        (0, L.jsx)(`h1`, { className: `heading-base break-words text-default`, children: r }),
                        i == null
                          ? null
                          : (0, L.jsx)(`div`, {
                              className: `text-xs leading-4 text-secondary`,
                              children: typeof i == `string` ? (0, L.jsx)(M, { description: i }, i) : i,
                            }),
                      ],
                    }),
                  ],
                }),
                C,
              ],
            })),
      (t[18] = C),
      (t[19] = l),
      (t[20] = i),
      (t[21] = r),
      (t[22] = R))
    : (R = t[22]);
  let z;
  return (
    t[23] !== f ||
    t[24] !== I ||
    t[25] !== R ||
    t[26] !== w ||
    t[27] !== T ||
    t[28] !== O ||
    t[29] !== k ||
    t[30] !== P
      ? ((z = (0, L.jsxs)(x, {
          density: w,
          title: T,
          subtitle: O,
          action: k,
          backSlot: P,
          children: [I, R, f],
        })),
        (t[23] = f),
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
  let t = (0, F.c)(14),
    { description: n } = e,
    r = (0, I.useId)(),
    [i, a] = (0, I.useState)(!1),
    [o, s] = (0, I.useState)(!1),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (e, t) => {
        i || s(t.scrollHeight > t.clientHeight);
      }),
      (t[0] = i),
      (t[1] = c));
  let l = f(c),
    d = i ? `w-full` : `line-clamp-3 w-full`,
    p;
  t[2] !== n || t[3] !== r || t[4] !== l || t[5] !== d
    ? ((p = (0, L.jsx)(`div`, { id: r, ref: l, className: d, children: n })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = l),
      (t[5] = d),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== r || t[8] !== o || t[9] !== i
    ? ((m =
        o || i
          ? (0, L.jsx)(u, {
              className: `mt-1.5 self-start`,
              "aria-controls": r,
              "aria-expanded": i,
              color: `ghostMuted`,
              size: `inline`,
              onClick: () => a(N),
              children: i
                ? (0, L.jsx)(g, {
                    id: `browserPluginSettings.description.readLess`,
                    defaultMessage: `Read less`,
                    description: `Collapse the full plugin or app description in settings`,
                  })
                : (0, L.jsx)(g, {
                    id: `browserPluginSettings.description.readMore`,
                    defaultMessage: `Read more`,
                    description: `Expand the truncated plugin or app description in settings`,
                  }),
            })
          : null),
      (t[7] = r),
      (t[8] = o),
      (t[9] = i),
      (t[10] = m))
    : (m = t[10]);
  let h;
  return (
    t[11] !== p || t[12] !== m
      ? ((h = (0, L.jsxs)(`div`, { className: `flex flex-col items-start`, children: [p, m] })),
        (t[11] = p),
        (t[12] = m),
        (t[13] = h))
      : (h = t[13]),
    h
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
        children: (0, L.jsx)(g, {
          id: `browserPluginSettings.loadError`,
          defaultMessage: `Couldn't load plugin settings`,
          description: `Error when browser plugin settings cannot be loaded`,
        }),
      })),
      (n[0] = i))
    : (i = n[0]);
  let a;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, L.jsx)(g, {
        id: `browserPluginSettings.retry`,
        defaultMessage: `Try again`,
        description: `Retry loading plugin settings`,
      })),
      (n[1] = a))
    : (a = n[1]);
  let o;
  return (
    n[2] === r
      ? (o = n[3])
      : ((o = (0, L.jsx)(t, {
          children: (0, L.jsx)(h, {
            label: i,
            control: (0, L.jsx)(u, { color: `ghost`, onClick: r, children: a }),
          }),
        })),
        (n[2] = r),
        (n[3] = o)),
    o
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = o()), O(), (I = r()), l(), a(), d(), C(), k(), T(), m(), w(), _(), p(), y(), (L = i()));
  }))();
}
export { j as n, R as r, P as t };
//# sourceMappingURL=layout-ce42f141f852.js.map
