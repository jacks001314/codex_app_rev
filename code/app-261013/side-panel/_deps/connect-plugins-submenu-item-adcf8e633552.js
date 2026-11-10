import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $X as t,
  AO as n,
  Cot as r,
  EPt as i,
  F2 as a,
  Fat as o,
  I2 as s,
  IDt as c,
  Pat as l,
  Pxt as u,
  TLt as d,
  TO as f,
  USt as p,
  Zxt as m,
  aD as h,
  dZ as g,
  eZ as _,
  fZ as v,
  iD as y,
  jDt as b,
  pIt as x,
  vzt as S,
  wot as C,
  xMt as w,
  yzt as T,
  zSt as E,
  zxt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  Icr as O,
  Jcr as k,
  OPr as A,
  alr as j,
  dcr as M,
  fOr as N,
  hOr as P,
  hzt as F,
  l2 as I,
  mzt as L,
  qdr as R,
  r2 as z,
  sPr as B,
} from "./app-initial-5851df3f6cb1.js";
import { Sr as V } from "./app-primary-fe8a450b3b04.js";
var H;
function U() {
  return (U = e(() => {
    (E(),
      R(),
      M(),
      u(),
      i(),
      P(),
      O(),
      j(),
      C(),
      A(),
      o(),
      B(),
      x(d().trim().catch(``)).catch([]),
      (H = m(r, (e, { get: t }) => {
        let n = t(N);
        return {
          enabled: !1,
          queryKey: [...k, `work-composer-featured`, n, e, !1, void 0],
          queryFn: p,
          retry: !1,
          staleTime: l.ONE_MINUTE,
        };
      })));
  }))();
}
function W(e) {
  "use forget";
  let t = (0, K.c)(19),
    {
      featuredPlugins: n,
      label: r,
      onConnectPlugin: i,
      onOpenPluginDirectory: o,
      onPluginImpressions: s,
      workRecommendationsHostId: l,
    } = e,
    { data: u, isLoading: d } = D(H, l),
    p;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((p = new Set()), (t[0] = p)) : (p = t[0]);
  let m = (0, q.useRef)(p),
    h;
  t[1] !== n || t[2] !== u ? ((h = u?.map(z) ?? n), (t[1] = n), (t[2] = u), (t[3] = h)) : (h = t[3]);
  let g = h,
    b;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        e || m.current.clear();
      }),
      (t[4] = b))
    : (b = t[4]);
  let x;
  t[5] === d
    ? (x = t[6])
    : ((x = d
        ? (0, J.jsx)(f.Message, {
            compact: !0,
            role: `status`,
            children: (0, J.jsx)(`span`, {
              className: `loading-shimmer-pure-text select-none`,
              children: (0, J.jsx)(c, {
                id: `composer.workMode.plugins.loadingRecommendations`,
                defaultMessage: `Loading plugins…`,
                description: `Status in the Connect plugins submenu while recommended plugins load. Installed plugins and the Browse all plugins action remain available.`,
              }),
            }),
          })
        : null),
      (t[5] = d),
      (t[6] = x));
  let S;
  t[7] !== i || t[8] !== s || t[9] !== g
    ? ((S =
        g.length > 0
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(`div`, {
                  ref: (e) => {
                    if (e != null && s != null) return V(e, g.map(G), m.current, s);
                  },
                  className: `flex flex-col`,
                  children: g.map((e) =>
                    (0, J.jsxs)(
                      f.Item,
                      {
                        "data-plugin-impression-id": e.remotePluginId ?? e.id,
                        rightIconAsset: _,
                        onSelect: () => i(e),
                        children: [
                          (0, J.jsx)(f.ItemIcon, {
                            size: `xs`,
                            children: (0, J.jsx)(L, {
                              alt: ``,
                              className: `size-full object-contain`,
                              knownAppId: e.name ?? void 0,
                              logoDarkUrl: e.logoDarkPath,
                              logoUrl: e.logoPath,
                              fallback: (0, J.jsx)(y, { className: `size-full text-secondary` }),
                            }),
                          }),
                          (0, J.jsx)(`span`, { children: e.displayName }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, J.jsx)(f.Separator, {}),
              ],
            })
          : null),
      (t[7] = i),
      (t[8] = s),
      (t[9] = g),
      (t[10] = S))
    : (S = t[10]);
  let C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, J.jsx)(c, {
        id: `composer.workMode.plugins.browseAll`,
        defaultMessage: `Browse all plugins`,
        description: `Action that opens the full plugin directory from a plugin picker`,
      })),
      (t[11] = C))
    : (C = t[11]);
  let w;
  t[12] === o
    ? (w = t[13])
    : ((w = (0, J.jsx)(f.Section, {
        className: `flex flex-col`,
        children: (0, J.jsx)(f.Item, { allowWrap: !0, rightIconAsset: a, onSelect: o, children: C }),
      })),
      (t[12] = o),
      (t[13] = w));
  let T;
  return (
    t[14] !== r || t[15] !== x || t[16] !== S || t[17] !== w
      ? ((T = (0, J.jsxs)(f.FlyoutSubmenuItem, {
          allowWrap: !0,
          leftIconAsset: v,
          contentSurface: `opaque`,
          contentWidth: `menuWide`,
          label: r,
          onOpenChange: b,
          children: [x, S, w],
        })),
        (t[14] = r),
        (t[15] = x),
        (t[16] = S),
        (t[17] = w),
        (t[18] = T))
      : (T = t[18]),
    T
  );
}
function G(e) {
  return e.remotePluginId ?? e.id;
}
var K, q, J;
function Y() {
  return (Y = e(() => {
    ((K = S()), s(), g(), t(), u(), (q = T()), b(), F(), n(), h(), U(), I(), (J = w()));
  }))();
}
export { Y as n, W as t };
//# sourceMappingURL=connect-plugins-submenu-item-adcf8e633552.js.map
