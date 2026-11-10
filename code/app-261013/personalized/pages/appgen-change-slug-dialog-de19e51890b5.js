import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  VDt as s,
  Xot as c,
  Yot as l,
  _Mt as u,
  _O as d,
  cO as f,
  fO as p,
  gMt as m,
  gO as h,
  hot as g,
  jDt as _,
  lO as v,
  lot as y,
  mO as ee,
  oO as te,
  sO as ne,
  t3 as b,
  vO as re,
  vzt as x,
  wot as S,
  xMt as C,
  yzt as w,
  zxt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  agn as ae,
  ean as T,
  ggn as oe,
  tan as se,
  tgn as ce,
  ygn as le,
} from "./app-initial-5851df3f6cb1.js";
function E(e) {
  let n = (0, D.c)(67),
    { currentSlug: o, hostedDomainSuffix: l, onClose: u, projectId: p } = e,
    m = a(r),
    _ = s(),
    y = ie(ae, p),
    [b, re] = (0, pe.useState)(o),
    x;
  n[0] === b ? (x = n[1]) : ((x = b.trim().toLowerCase()), (n[0] = b), (n[1] = x));
  let S = x,
    C = se(S, 400),
    w = S === o,
    T;
  n[2] === S ? (T = n[3]) : ((T = S.length > 0 && !me.test(S)), (n[2] = S), (n[3] = T));
  let le = T,
    E;
  n[4] !== w || n[5] !== S ? ((E = !w && me.test(S)), (n[4] = w), (n[5] = S), (n[6] = E)) : (E = n[6]);
  let k = E,
    A,
    j;
  n[7] !== C || n[8] !== p
    ? ((A = [...ce, p, C]), (j = () => oe(p, C)), (n[7] = C), (n[8] = p), (n[9] = A), (n[10] = j))
    : ((A = n[9]), (j = n[10]));
  let _e = k && C === S,
    M;
  n[11] !== A || n[12] !== j || n[13] !== _e
    ? ((M = { queryKey: A, queryFn: j, enabled: _e, retry: !1, staleTime: 0 }),
      (n[11] = A),
      (n[12] = j),
      (n[13] = _e),
      (n[14] = M))
    : (M = n[14]);
  let { data: ve, isError: ye, isFetching: be, refetch: xe } = c(M),
    Se = k && C === S && !be && !ye && ve?.slug === S ? ve : void 0,
    N = Se?.available === !0,
    Ce = Se?.available === !1,
    we = le || Ce,
    P = `requirements`;
  w
    ? (P = null)
    : le
      ? (P = `invalid-format`)
      : k && (C !== S || be)
        ? (P = `checking`)
        : k && ye
          ? (P = `error`)
          : N
            ? (P = `available`)
            : Ce && (P = `unavailable`);
  let Te = l == null ? null : he,
    F = P == null ? null : ge,
    I;
  n[15] !== Te || n[16] !== F
    ? ((I = [Te, F].filter(ue)), (n[15] = Te), (n[16] = F), (n[17] = I))
    : (I = n[17]);
  let L = I.join(` `),
    Ee = y.isPending,
    De = !y.isPending,
    R;
  n[18] !== y.isPending || n[19] !== u
    ? ((R = (e) => {
        !e && !y.isPending && u();
      }),
      (n[18] = y.isPending),
      (n[19] = u),
      (n[20] = R))
    : (R = n[20]);
  let z;
  n[21] !== y || n[22] !== _ || n[23] !== N || n[24] !== u || n[25] !== m || n[26] !== S
    ? ((z = (e) => {
        (e.preventDefault(),
          N &&
            !y.isPending &&
            y.mutateAsync(S).then(
              () => u(),
              () => {
                m.get(g).danger(
                  _.formatMessage({
                    id: `appgenSettings.general.url.changeDialog.submitError`,
                    defaultMessage: `Unable to change site URL`,
                    description: `Error toast shown when a request to change a Site's hosted URL fails`,
                  }),
                  { errorAnalytics: { toastId: `sites_settings_slug_save_error` } },
                );
              },
            ));
      }),
      (n[21] = y),
      (n[22] = _),
      (n[23] = N),
      (n[24] = u),
      (n[25] = m),
      (n[26] = S),
      (n[27] = z))
    : (z = n[27]);
  let B;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, O.jsx)(d, {
        children: (0, O.jsx)(i, {
          id: `appgenSettings.general.url.changeDialog.title`,
          defaultMessage: `Change URL`,
          description: `Title of the dialog for changing a Site's hosted URL`,
        }),
      })),
      (n[28] = B))
    : (B = n[28]);
  let V;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, O.jsx)(f, {
        title: B,
        subtitle: (0, O.jsx)(h, {
          children: (0, O.jsx)(i, {
            id: `appgenSettings.general.url.changeDialog.description`,
            defaultMessage: `Enter a new web address for your site`,
            description: `Short explanation in the dialog for changing a Site's hosted URL`,
          }),
        }),
      })),
      (n[29] = V))
    : (V = n[29]);
  let Oe = y.isPending,
    H;
  n[30] === _
    ? (H = n[31])
    : ((H = _.formatMessage({
        id: `appgenSettings.general.url.changeDialog.inputLabel`,
        defaultMessage: `Site URL name`,
        description: `Label for the editable portion of a Site's hosted URL`,
      })),
      (n[30] = _),
      (n[31] = H));
  let U;
  n[32] !== y.isPending || n[33] !== L || n[34] !== we || n[35] !== l || n[36] !== b || n[37] !== H
    ? ((U = (0, O.jsx)(de, {
        describedBy: L,
        disabled: Oe,
        hasValidationError: we,
        hostedDomainSuffix: l,
        label: H,
        value: b,
        onChange: re,
      })),
      (n[32] = y.isPending),
      (n[33] = L),
      (n[34] = we),
      (n[35] = l),
      (n[36] = b),
      (n[37] = H),
      (n[38] = U))
    : (U = n[38]);
  let W;
  n[39] === xe ? (W = n[40]) : ((W = () => void xe()), (n[39] = xe), (n[40] = W));
  let G;
  n[41] !== P || n[42] !== W
    ? ((G = (0, O.jsx)(fe, { state: P, onRetry: W })), (n[41] = P), (n[42] = W), (n[43] = G))
    : (G = n[43]);
  let K;
  n[44] !== U || n[45] !== G
    ? ((K = (0, O.jsxs)(v, { className: `gap-2`, children: [U, G] })), (n[44] = U), (n[45] = G), (n[46] = K))
    : (K = n[46]);
  let q;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, O.jsx)(i, {
        id: `appgenSettings.general.url.changeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Site URL change dialog without saving`,
      })),
      (n[47] = q))
    : (q = n[47]);
  let J;
  n[48] !== y.isPending || n[49] !== u
    ? ((J = (0, O.jsx)(t, { color: `ghostSecondary`, disabled: y.isPending, onClick: u, children: q })),
      (n[48] = y.isPending),
      (n[49] = u),
      (n[50] = J))
    : (J = n[50]);
  let ke = !N,
    Y;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, O.jsx)(i, {
        id: `appgenSettings.general.url.changeDialog.submit`,
        defaultMessage: `Change URL`,
        description: `Button that submits a new hosted URL name for a Site`,
      })),
      (n[51] = Y))
    : (Y = n[51]);
  let X;
  n[52] !== y.isPending || n[53] !== ke
    ? ((X = (0, O.jsx)(t, { disabled: ke, loading: y.isPending, type: `submit`, children: Y })),
      (n[52] = y.isPending),
      (n[53] = ke),
      (n[54] = X))
    : (X = n[54]);
  let Z;
  n[55] !== J || n[56] !== X
    ? ((Z = (0, O.jsxs)(ne, { className: `mt-10`, children: [J, X] })), (n[55] = J), (n[56] = X), (n[57] = Z))
    : (Z = n[57]);
  let Q;
  n[58] !== z || n[59] !== K || n[60] !== Z
    ? ((Q = (0, O.jsxs)(te, {
        as: `form`,
        className: `gap-0 px-4 pt-3.5 pb-4`,
        onSubmit: z,
        children: [V, K, Z],
      })),
      (n[58] = z),
      (n[59] = K),
      (n[60] = Z),
      (n[61] = Q))
    : (Q = n[61]);
  let $;
  return (
    n[62] !== y.isPending || n[63] !== De || n[64] !== R || n[65] !== Q
      ? (($ = (0, O.jsx)(ee, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: Ee,
          showDialogClose: De,
          onOpenChange: R,
          children: Q,
        })),
        (n[62] = y.isPending),
        (n[63] = De),
        (n[64] = R),
        (n[65] = Q),
        (n[66] = $))
      : ($ = n[66]),
    $
  );
}
function ue(e) {
  return e != null;
}
function de(e) {
  let t = (0, D.c)(19),
    {
      describedBy: n,
      disabled: r,
      hasValidationError: i,
      hostedDomainSuffix: a,
      label: o,
      onChange: s,
      value: c,
    } = e,
    l = !i && `focus-within:border-chart-blue`,
    u = i && `border-text-danger ring-2 ring-text-danger/20`,
    d = r && `cursor-not-allowed bg-text/5 text-secondary`,
    f;
  t[0] !== l || t[1] !== u || t[2] !== d
    ? ((f = m(
        `flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-primary-outline bg-primary-soft text-sm text-default`,
        l,
        u,
        d,
      )),
      (t[0] = l),
      (t[1] = u),
      (t[2] = d),
      (t[3] = f))
    : (f = t[3]);
  let p = n || void 0,
    h = i || void 0,
    g;
  t[4] === s ? (g = t[5]) : ((g = (e) => s(e.target.value)), (t[4] = s), (t[5] = g));
  let _;
  t[6] !== r || t[7] !== o || t[8] !== p || t[9] !== h || t[10] !== g || t[11] !== c
    ? ((_ = (0, O.jsx)(`input`, {
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": p,
        "aria-invalid": h,
        "aria-label": o,
        className: `h-full min-w-0 flex-1 bg-transparent ps-2.5 outline-none disabled:cursor-not-allowed disabled:text-secondary`,
        disabled: r,
        id: `appgen-site-slug`,
        name: `slug`,
        spellCheck: !1,
        type: `text`,
        value: c,
        onChange: g,
      })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = p),
      (t[9] = h),
      (t[10] = g),
      (t[11] = c),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === a
    ? (v = t[14])
    : ((v =
        a == null
          ? null
          : (0, O.jsx)(`span`, {
              id: he,
              className: `max-w-1/2 min-w-0 shrink truncate ps-1 pe-2.5 text-tertiary`,
              children: a,
            })),
      (t[13] = a),
      (t[14] = v));
  let y;
  return (
    t[15] !== f || t[16] !== _ || t[17] !== v
      ? ((y = (0, O.jsxs)(`div`, { className: f, children: [_, v] })),
        (t[15] = f),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function fe(e) {
  let n = (0, D.c)(10),
    { onRetry: r, state: a } = e;
  if (a == null) return null;
  let o = a === `error` || a === `invalid-format` || a === `unavailable`,
    s = `text-secondary`;
  a === `available` ? (s = `text-chart-green`) : o && (s = `text-danger`);
  let c = `flex min-h-6 items-center gap-1 text-xs ${s}`,
    l = o ? `alert` : `status`,
    u = k[a],
    d;
  n[0] === u ? (d = n[1]) : ((d = (0, O.jsx)(i, { ...u })), (n[0] = u), (n[1] = d));
  let f;
  n[2] !== r || n[3] !== a
    ? ((f =
        a === `error`
          ? (0, O.jsx)(t, {
              color: `ghost`,
              size: `compact`,
              onClick: r,
              children: (0, O.jsx)(i, {
                id: `appgenSettings.general.url.changeDialog.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries a failed hosted Site URL availability check`,
              }),
            })
          : null),
      (n[2] = r),
      (n[3] = a),
      (n[4] = f))
    : (f = n[4]);
  let p;
  return (
    n[5] !== c || n[6] !== l || n[7] !== d || n[8] !== f
      ? ((p = (0, O.jsxs)(`div`, { id: ge, className: c, role: l, children: [d, f] })),
        (n[5] = c),
        (n[6] = l),
        (n[7] = d),
        (n[8] = f),
        (n[9] = p))
      : (p = n[9]),
    p
  );
}
var D, pe, O, me, he, ge, k;
function A() {
  return (A = e(() => {
    ((D = x()),
      l(),
      u(),
      o(),
      (pe = w()),
      _(),
      b(),
      re(),
      p(),
      y(),
      S(),
      T(),
      le(),
      (O = C()),
      (me = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/u),
      (he = `appgen-site-slug-domain`),
      (ge = `appgen-site-slug-status`),
      (k = n({
        available: {
          id: `appgenSettings.general.url.changeDialog.available`,
          defaultMessage: `URL is available`,
          description: `Confirmation shown when a hosted Site URL name is available`,
        },
        checking: {
          id: `appgenSettings.general.url.changeDialog.checking`,
          defaultMessage: `Checking availability…`,
          description: `Status shown while checking whether a hosted Site URL name is available`,
        },
        error: {
          id: `appgenSettings.general.url.changeDialog.checkError`,
          defaultMessage: `Unable to check availability`,
          description: `Error shown when the hosted Site URL availability check fails`,
        },
        "invalid-format": {
          id: `appgenSettings.general.url.changeDialog.invalidFormat`,
          defaultMessage: `Start with a letter and use lowercase letters, numbers, or single hyphens`,
          description: `Validation shown when a hosted Site URL name has an unsupported format`,
        },
        requirements: {
          id: `appgenSettings.general.url.changeDialog.requirements`,
          defaultMessage: `Use lowercase letters, numbers, or single hyphens, starting with a letter`,
          description: `Slug format guidance shown below the hosted Site URL input.`,
        },
        unavailable: {
          id: `appgenSettings.general.url.changeDialog.unavailable`,
          defaultMessage: `This URL is not available`,
          description: `Validation shown when a hosted Site URL name is invalid or already in use`,
        },
      })));
  }))();
}
A();
export { E as AppgenChangeSlugDialog };
//# sourceMappingURL=appgen-change-slug-dialog-de19e51890b5.js.map
