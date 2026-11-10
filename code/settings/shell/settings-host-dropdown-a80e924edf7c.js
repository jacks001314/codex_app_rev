import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  JG as r,
  JK as i,
  KG as a,
  KYt as o,
  Opn as s,
  RS as c,
  Spn as l,
  VS as u,
  ZG as d,
  e4t as f,
  hmn as p,
  kMt as m,
  kmn as h,
  qK as g,
} from "./app-initial-f094ef01c64d.js";
import { Ap as _, Xw as v, Yw as y, jp as b } from "./app-primary-4c40d73a1074.js";
function x(e) {
  let t = (0, C.c)(31),
    {
      connectedRemoteConnections: i,
      disabled: o,
      onSelectHost: l,
      selectedHostId: u,
      align: d,
      contentWidth: p,
      localIcon: h,
      localLabel: v,
      showConnectedIndicator: b,
      triggerVariant: x,
    } = e,
    T = o !== void 0 && o,
    E = h === void 0 ? _ : h,
    D = b !== void 0 && b,
    O = x === void 0 ? `selected-host` : x,
    k = s(),
    A;
  t[0] !== i || t[1] !== u
    ? ((A = i.find((e) => e.hostId === u) ?? null), (t[0] = i), (t[1] = u), (t[2] = A))
    : (A = t[2]);
  let j = A,
    M;
  t[3] !== k || t[4] !== v
    ? ((M =
        v ??
        k.formatMessage({
          id: `settings.hostDropdown.local`,
          defaultMessage: `Local`,
          description: `Label for the local host in settings connection dropdowns`,
        })),
      (t[3] = k),
      (t[4] = v),
      (t[5] = M))
    : (M = t[5]);
  let N = M,
    P = j?.displayName ?? N,
    F;
  t[6] === N ? (F = t[7]) : ((F = { hostId: f, displayName: N }), (t[6] = N), (t[7] = F));
  let I;
  t[8] !== i || t[9] !== F ? ((I = [F, ...i]), (t[8] = i), (t[9] = F), (t[10] = I)) : (I = t[10]);
  let L = I,
    R;
  t[11] !== E ||
  t[12] !== T ||
  t[13] !== k ||
  t[14] !== P ||
  t[15] !== j ||
  t[16] !== D ||
  t[17] !== O
    ? ((R =
        O === `filter`
          ? (0, w.jsx)(m, {
              className: `size-8 shrink-0`,
              "aria-label": k.formatMessage({
                id: `settings.hostDropdown.filter`,
                defaultMessage: `Filter settings by host`,
                description: `Accessible label for the settings host filter dropdown button`,
              }),
              color: `ghost`,
              disabled: T,
              size: `icon`,
              uniform: !0,
              children: (0, w.jsx)(E, { className: `icon-sm` }),
            })
          : (0, w.jsxs)(c, {
              disabled: T,
              chevronClassName: T ? `hidden` : void 0,
              children: [
                j == null
                  ? (0, w.jsx)(E, { className: `icon-xs shrink-0 text-default` })
                  : (0, w.jsx)(y, { className: `icon-xs shrink-0`, hostId: j.hostId }),
                (0, w.jsx)(`span`, { className: `truncate text-start text-default`, children: P }),
                j != null && D ? (0, w.jsx)(S, {}) : null,
              ],
            })),
      (t[11] = E),
      (t[12] = T),
      (t[13] = k),
      (t[14] = P),
      (t[15] = j),
      (t[16] = D),
      (t[17] = O),
      (t[18] = R))
    : (R = t[18]);
  let z = R;
  if (T) return z;
  let B = d ?? `end`,
    V = p ?? `menuWide`,
    H;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, w.jsx)(r.Title, {
        children: (0, w.jsx)(n, {
          id: `settings.hostDropdown.title`,
          defaultMessage: `Host`,
          description: `Title for the Host dropdown shown in settings pages`,
        }),
      })),
      (t[19] = H))
    : (H = t[19]);
  let U;
  t[20] !== E || t[21] !== L || t[22] !== l || t[23] !== u || t[24] !== D
    ? ((U = (0, w.jsx)(r.Section, {
        className: `max-h-40 overflow-y-auto`,
        children: L.map((e) =>
          (0, w.jsx)(
            r.Item,
            {
              RightIcon: e.hostId === u ? g : void 0,
              onSelect: () => {
                l(e.hostId);
              },
              children: (0, w.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  e.hostId === `local`
                    ? (0, w.jsx)(E, { className: `icon-xs shrink-0` })
                    : (0, w.jsx)(y, { className: `icon-xs shrink-0`, hostId: e.hostId }),
                  (0, w.jsx)(`span`, { className: `truncate`, children: e.displayName }),
                  e.hostId !== `local` && D ? (0, w.jsx)(S, {}) : null,
                ],
              }),
            },
            e.hostId,
          ),
        ),
      })),
      (t[20] = E),
      (t[21] = L),
      (t[22] = l),
      (t[23] = u),
      (t[24] = D),
      (t[25] = U))
    : (U = t[25]);
  let W;
  return (
    t[26] !== B || t[27] !== V || t[28] !== U || t[29] !== z
      ? ((W = (0, w.jsxs)(a, { align: B, contentWidth: V, triggerButton: z, children: [H, U] })),
        (t[26] = B),
        (t[27] = V),
        (t[28] = U),
        (t[29] = z),
        (t[30] = W))
      : (W = t[30]),
    W
  );
}
function S() {
  let e = (0, C.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, w.jsx)(`span`, {
          "aria-hidden": !0,
          className: `block size-2 shrink-0 rounded-full bg-green-500`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var C,
  w,
  T = e(() => {
    ((C = h()), l(), t(), d(), i(), b(), v(), o(), u(), (w = p()));
  });
export { T as n, x as t };
//# sourceMappingURL=settings-host-dropdown-a80e924edf7c.js.map
