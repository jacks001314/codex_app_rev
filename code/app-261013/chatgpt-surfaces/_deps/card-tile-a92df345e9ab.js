import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  _Mt as t,
  _xt as n,
  cz as r,
  gMt as i,
  ixt as a,
  sz as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import { MRt as u, NRt as d } from "./app-initial-5851df3f6cb1.js";
function ee(e) {
  let t = (0, p.c)(14),
    n,
    r,
    i,
    a,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (s = t[5]))
    : (({ disabled: n, onClick: r, onKeyDown: i, tooltip: s, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s));
  let c;
  t[6] !== n || t[7] !== r || t[8] !== i || t[9] !== a
    ? ((c =
        r == null && !n
          ? (0, m.jsx)(`div`, { ...a, tabIndex: -1 })
          : (0, m.jsx)(`div`, {
              ...a,
              "aria-disabled": n || void 0,
              role: `button`,
              tabIndex: 0,
              onClick: n ? void 0 : r,
              onKeyDown: n ? void 0 : i,
            })),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = a),
      (t[10] = c))
    : (c = t[10]);
  let l = c,
    u;
  return (
    t[11] !== l || t[12] !== s
      ? ((u = s == null ? l : (0, m.jsx)(o, { tooltipContent: s, children: l })),
        (t[11] = l),
        (t[12] = s),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
function f(e) {
  let t = (0, p.c)(84),
    {
      ref: n,
      icon: r,
      title: o,
      description: s,
      contentClassName: c,
      descriptionClassName: l,
      descriptionPlacement: u,
      badges: d,
      actions: f,
      actionsPlacement: h,
      disabled: re,
      onClick: g,
      tooltip: ie,
      to: _,
      iconContainer: ae,
      iconContainerVariant: oe,
      iconPlacement: se,
      isHighlighted: ce,
      presentation: le,
      className: ue,
    } = e,
    v = u === void 0 ? `stacked` : u,
    de = h === void 0 ? `top` : h,
    y = re !== void 0 && re,
    fe = ae === void 0 || ae,
    pe = oe === void 0 ? `filled` : oe,
    b = se === void 0 ? `outside` : se,
    x = ce !== void 0 && ce,
    S = le === void 0 ? `card` : le,
    C = (0, ne.useId)(),
    w;
  t[0] === g
    ? (w = t[1])
    : ((w = (e) => {
        g &&
          e.target === e.currentTarget &&
          (e.key === `Enter` || e.key === ` `) &&
          (e.preventDefault(), e.currentTarget.click());
      }),
      (t[0] = g),
      (t[1] = w));
  let me = w,
    T = S === `row` || S === `directory-row`,
    E = S === `compact-row`,
    D = (E || de === `center`) && !!f,
    O;
  t[2] !== f || t[3] !== E || t[4] !== _
    ? ((O = f
        ? (0, m.jsx)(`div`, {
            className: i(
              `flex shrink-0 items-center`,
              E && `max-w-1/2`,
              _ != null && `pointer-events-auto relative z-10`,
            ),
            children: f,
          })
        : null),
      (t[2] = f),
      (t[3] = E),
      (t[4] = _),
      (t[5] = O))
    : (O = t[5]);
  let he = O,
    k;
  t[6] !== r || t[7] !== fe || t[8] !== pe || t[9] !== E || t[10] !== T
    ? ((k = r
        ? fe
          ? (0, m.jsx)(`span`, {
              className: i(
                `flex shrink-0 items-center justify-center`,
                E && `size-13 rounded-2xl`,
                !E && (T ? `size-9 rounded-lg` : `size-10 rounded-lg`),
                pe === `outline` ? `border border-default bg-transparent` : `bg-surface-secondary`,
              ),
              children: E
                ? (0, m.jsx)(`span`, { className: `flex size-8 items-center justify-center`, children: r })
                : r,
            })
          : (0, m.jsx)(`span`, { className: `shrink-0`, children: r })
        : null),
      (t[6] = r),
      (t[7] = fe),
      (t[8] = pe),
      (t[9] = E),
      (t[10] = T),
      (t[11] = k))
    : (k = t[11]);
  let ge = k,
    A = _ == null && y,
    j = _ != null && `relative`,
    M;
  t[12] !== ue || t[13] !== x || t[14] !== T || t[15] !== g || t[16] !== S || t[17] !== j
    ? ((M = i(
        `flex flex-col gap-2.5`,
        j,
        {
          catalog: `h-full min-h-40 rounded-2xl border border-default p-5 hover:bg-primary-ghost-hover`,
          featured: `h-full rounded-xl bg-surface-secondary px-7 py-8 hover:bg-primary-ghost-hover`,
          ranked: `min-h-24 rounded-xl px-3 py-4 hover:bg-primary-ghost-hover`,
          related: `min-h-24 rounded-xl bg-surface px-3 py-4 hover:bg-primary-ghost-hover`,
          row: `rounded-[var(--radius-token-row)]`,
          "compact-row": `min-h-14 w-full min-w-0 justify-center`,
          "directory-row": `rounded-2xl`,
          card: `border-border/40 rounded-2xl border p-2 hover:bg-text/5`,
        }[S],
        T &&
          `min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]`,
        T && g && `hover:bg-primary-ghost-hover`,
        x && `bg-text/5`,
        g ? `cursor-interaction` : null,
        g && `outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
        ue,
      )),
      (t[12] = ue),
      (t[13] = x),
      (t[14] = T),
      (t[15] = g),
      (t[16] = S),
      (t[17] = j),
      (t[18] = M))
    : (M = t[18]);
  let N = x ? `true` : void 0,
    P = _ == null ? g : void 0,
    F = _ == null ? me : void 0,
    I;
  t[19] !== y || t[20] !== g || t[21] !== C || t[22] !== _
    ? ((I =
        _ != null && !y
          ? (0, m.jsx)(a, {
              className: `absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
              "aria-labelledby": C,
              to: _,
              onClick: g,
              onAuxClick: (e) => {
                e.button === 1 && g?.(e);
              },
            })
          : null),
      (t[19] = y),
      (t[20] = g),
      (t[21] = C),
      (t[22] = _),
      (t[23] = I))
    : (I = t[23]);
  let L = E ? `gap-4` : `gap-3`,
    R = _ != null && `pointer-events-none`,
    _e = S === `catalog` ? `items-start` : `items-center`,
    ve = v === `inline` && `gap-2`,
    z;
  t[24] !== L || t[25] !== R || t[26] !== _e || t[27] !== ve
    ? ((z = i(`flex`, L, R, _e, ve)), (t[24] = L), (t[25] = R), (t[26] = _e), (t[27] = ve), (t[28] = z))
    : (z = t[28]);
  let ye = b === `outside` ? ge : null,
    be = D && `items-center`,
    xe = D && (E ? `gap-4` : `gap-3`),
    B;
  t[29] !== be || t[30] !== xe
    ? ((B = i(`flex min-w-0 flex-1`, be, xe)), (t[29] = be), (t[30] = xe), (t[31] = B))
    : (B = t[31]);
  let Se = v === `stacked` ? `flex-col` : `items-center gap-3`,
    V;
  t[32] !== c || t[33] !== Se
    ? ((V = i(`flex min-w-0 flex-1 justify-center gap-0.5`, Se, c)), (t[32] = c), (t[33] = Se), (t[34] = V))
    : (V = t[34]);
  let Ce = v === `inline` && `w-28 shrink-0 sm:w-48`,
    we = D || b === `inline` ? null : `justify-between`,
    H;
  t[35] !== Ce || t[36] !== we
    ? ((H = i(`flex min-w-0 items-center gap-2`, Ce, we)), (t[35] = Ce), (t[36] = we), (t[37] = H))
    : (H = t[37]);
  let Te = b === `inline` ? ge : null,
    Ee = E ? `min-w-0 text-lg leading-6 wrap-break-word` : `truncate`,
    De = T ? `text-[length:var(--detail-row-font-size,var(--text-base))]` : `font-medium`,
    Oe = S === `catalog` && `text-base font-semibold`,
    U;
  t[38] !== Ee || t[39] !== De || t[40] !== Oe
    ? ((U = i(`text-default`, Ee, De, Oe)), (t[38] = Ee), (t[39] = De), (t[40] = Oe), (t[41] = U))
    : (U = t[41]);
  let W;
  t[42] !== U || t[43] !== o || t[44] !== C
    ? ((W = (0, m.jsx)(`div`, { id: C, className: U, children: o })),
      (t[42] = U),
      (t[43] = o),
      (t[44] = C),
      (t[45] = W))
    : (W = t[45]);
  let G;
  t[46] !== d || t[47] !== _
    ? ((G = d?.length
        ? (0, m.jsx)(`div`, {
            className: i(
              `flex shrink-0 items-center gap-1`,
              _ != null && `pointer-events-auto relative z-10`,
            ),
            children: d.map(te),
          })
        : null),
      (t[46] = d),
      (t[47] = _),
      (t[48] = G))
    : (G = t[48]);
  let K;
  t[49] !== W || t[50] !== G
    ? ((K = (0, m.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [W, G] })),
      (t[49] = W),
      (t[50] = G),
      (t[51] = K))
    : (K = t[51]);
  let q = D ? null : he,
    J;
  t[52] !== H || t[53] !== Te || t[54] !== K || t[55] !== q
    ? ((J = (0, m.jsxs)(`div`, { className: H, children: [Te, K, q] })),
      (t[52] = H),
      (t[53] = Te),
      (t[54] = K),
      (t[55] = q),
      (t[56] = J))
    : (J = t[56]);
  let Y;
  t[57] !== s || t[58] !== l || t[59] !== v || t[60] !== E
    ? ((Y = s
        ? (0, m.jsx)(`div`, {
            className: i(
              `text-secondary`,
              E ? `truncate text-suggestion-description` : `text-sm leading-relaxed`,
              v === `inline` ? `min-w-0 flex-1 truncate text-start` : null,
              l ?? (!E && `line-clamp-3`),
            ),
            children: s,
          })
        : null),
      (t[57] = s),
      (t[58] = l),
      (t[59] = v),
      (t[60] = E),
      (t[61] = Y))
    : (Y = t[61]);
  let X;
  t[62] !== V || t[63] !== J || t[64] !== Y
    ? ((X = (0, m.jsxs)(`div`, { className: V, children: [J, Y] })),
      (t[62] = V),
      (t[63] = J),
      (t[64] = Y),
      (t[65] = X))
    : (X = t[65]);
  let ke = D ? he : null,
    Z;
  t[66] !== B || t[67] !== X || t[68] !== ke
    ? ((Z = (0, m.jsxs)(`div`, { className: B, children: [X, ke] })),
      (t[66] = B),
      (t[67] = X),
      (t[68] = ke),
      (t[69] = Z))
    : (Z = t[69]);
  let Q;
  t[70] !== z || t[71] !== ye || t[72] !== Z
    ? ((Q = (0, m.jsxs)(`div`, { className: z, children: [ye, Z] })),
      (t[70] = z),
      (t[71] = ye),
      (t[72] = Z),
      (t[73] = Q))
    : (Q = t[73]);
  let $;
  return (
    t[74] !== n ||
    t[75] !== A ||
    t[76] !== M ||
    t[77] !== N ||
    t[78] !== P ||
    t[79] !== F ||
    t[80] !== I ||
    t[81] !== Q ||
    t[82] !== ie
      ? (($ = (0, m.jsxs)(ee, {
          ref: n,
          disabled: A,
          tooltip: ie,
          className: M,
          "data-search-result-active": N,
          onClick: P,
          onKeyDown: F,
          children: [I, Q],
        })),
        (t[74] = n),
        (t[75] = A),
        (t[76] = M),
        (t[77] = N),
        (t[78] = P),
        (t[79] = F),
        (t[80] = I),
        (t[81] = Q),
        (t[82] = ie),
        (t[83] = $))
      : ($ = t[83]),
    $
  );
}
function te(e, t) {
  return typeof e == `string`
    ? (0, m.jsx)(u, { variant: `outline`, children: e }, e)
    : (0, m.jsx)(`span`, { className: `flex items-center`, children: e }, t);
}
var p, ne, m;
function h() {
  return (h = e(() => {
    ((p = s()), t(), (ne = l()), n(), d(), r(), (m = c()));
  }))();
}
export { h as n, f as t };
//# sourceMappingURL=card-tile-a92df345e9ab.js.map
