import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  CO as r,
  IDt as i,
  TJ as a,
  TO as o,
  VDt as s,
  WH as c,
  b0 as l,
  cz as u,
  iot as d,
  jDt as f,
  sz as p,
  t3 as m,
  vzt as h,
  xMt as g,
  y0 as _,
} from "./app-shared-bbfeca5e5737.js";
import {
  NG as v,
  PG as y,
  QP as b,
  X$ as x,
  Z$ as S,
  oFr as C,
  tF as w,
} from "./app-initial-5851df3f6cb1.js";
function T(e) {
  let n = (0, O.c)(34),
    {
      connectedRemoteConnections: a,
      disabled: l,
      includeLocalHost: u,
      onSelectHost: f,
      selectedHostId: p,
      align: m,
      contentWidth: h,
      localIcon: g,
      localLabel: y,
      showConnectedIndicator: S,
      triggerVariant: C,
    } = e,
    w = l !== void 0 && l,
    T = u === void 0 || u,
    A = g === void 0 ? v : g,
    j = S !== void 0 && S,
    M = C === void 0 ? `selected-host` : C,
    N = s(),
    P;
  n[0] !== a || n[1] !== p
    ? ((P = a.find((e) => e.hostId === p) ?? null), (n[0] = a), (n[1] = p), (n[2] = P))
    : (P = n[2]);
  let F = P,
    I;
  n[3] !== N || n[4] !== y
    ? ((I =
        y ??
        N.formatMessage({
          id: `settings.hostDropdown.local`,
          defaultMessage: `Local`,
          description: `Label for the local host in settings connection dropdowns`,
        })),
      (n[3] = N),
      (n[4] = y),
      (n[5] = I))
    : (I = n[5]);
  let L = I,
    R = F?.displayName ?? L,
    z;
  n[6] !== T || n[7] !== L
    ? ((z = T ? [{ hostId: d, displayName: L }] : []), (n[6] = T), (n[7] = L), (n[8] = z))
    : (z = n[8]);
  let B;
  n[9] !== a || n[10] !== z ? ((B = [...z, ...a]), (n[9] = a), (n[10] = z), (n[11] = B)) : (B = n[11]);
  let V = B,
    H;
  n[12] === N
    ? (H = n[13])
    : ((H = N.formatMessage({
        id: `settings.hostDropdown.filter`,
        defaultMessage: `Filter settings by host`,
        description: `Tooltip and accessible label for the settings host filter dropdown button`,
      })),
      (n[12] = N),
      (n[13] = H));
  let U = H,
    W;
  n[14] !== A || n[15] !== w || n[16] !== U || n[17] !== R || n[18] !== F || n[19] !== j || n[20] !== M
    ? ((W =
        M === `filter`
          ? (0, k.jsx)(E, {
              cloneCustomTrigger: !0,
              disabled: w,
              tooltipContent: U,
              children: (0, k.jsx)(t, {
                className: `sidebar-icon-button sidebar-hover-icon-button-tint`,
                "aria-label": U,
                color: `ghostMuted`,
                disabled: w,
                size: `compact`,
                uniform: !0,
                children: (0, k.jsx)(c, {}),
              }),
            })
          : (0, k.jsxs)(b, {
              disabled: w,
              chevronClassName: w ? `hidden` : void 0,
              children: [
                F == null
                  ? (0, k.jsx)(A, { className: `icon-xs shrink-0 text-default` })
                  : (0, k.jsx)(x, { className: `icon-xs shrink-0`, hostId: F.hostId }),
                (0, k.jsx)(`span`, { className: `truncate text-start text-default`, children: R }),
                F != null && j ? (0, k.jsx)(D, {}) : null,
              ],
            })),
      (n[14] = A),
      (n[15] = w),
      (n[16] = U),
      (n[17] = R),
      (n[18] = F),
      (n[19] = j),
      (n[20] = M),
      (n[21] = W))
    : (W = n[21]);
  let G = W;
  if (w) return G;
  let K = m ?? `end`,
    q = h ?? `menuWide`,
    J;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, k.jsx)(o.Title, {
        children: (0, k.jsx)(i, {
          id: `settings.hostDropdown.title`,
          defaultMessage: `Host`,
          description: `Title for the Host dropdown shown in settings pages`,
        }),
      })),
      (n[22] = J))
    : (J = n[22]);
  let Y;
  n[23] !== A || n[24] !== V || n[25] !== f || n[26] !== p || n[27] !== j
    ? ((Y = (0, k.jsx)(o.Section, {
        className: `max-h-40 overflow-y-auto`,
        children: V.map((e) =>
          (0, k.jsx)(
            o.Item,
            {
              rightIconAsset: e.hostId === p ? _ : void 0,
              onSelect: () => {
                f(e.hostId);
              },
              children: (0, k.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  e.hostId === `local`
                    ? (0, k.jsx)(A, { className: `icon-xs shrink-0` })
                    : (0, k.jsx)(x, { className: `icon-xs shrink-0`, hostId: e.hostId }),
                  (0, k.jsx)(`span`, { className: `truncate`, children: e.displayName }),
                  e.hostId !== `local` && j ? (0, k.jsx)(D, {}) : null,
                ],
              }),
            },
            e.hostId,
          ),
        ),
      })),
      (n[23] = A),
      (n[24] = V),
      (n[25] = f),
      (n[26] = p),
      (n[27] = j),
      (n[28] = Y))
    : (Y = n[28]);
  let X;
  return (
    n[29] !== K || n[30] !== q || n[31] !== Y || n[32] !== G
      ? ((X = (0, k.jsxs)(r, { align: K, contentWidth: q, triggerButton: G, children: [J, Y] })),
        (n[29] = K),
        (n[30] = q),
        (n[31] = Y),
        (n[32] = G),
        (n[33] = X))
      : (X = n[33]),
    X
  );
}
function E(e) {
  let t = (0, O.c)(3),
    n = e[`aria-expanded`] === !0,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, k.jsx)(p, { ...e, triggerPopupOpen: n })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
function D() {
  let e = (0, O.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, k.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 shrink-0 rounded-full bg-green-500`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var O, k;
function A() {
  return (A = e(() => {
    ((O = h()), l(), f(), m(), n(), a(), u(), y(), S(), C(), w(), (k = g()));
  }))();
}
export { A as n, T as t };
//# sourceMappingURL=settings-host-dropdown-dff6a23826ad.js.map
