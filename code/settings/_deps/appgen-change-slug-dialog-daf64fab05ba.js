import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  AVt as i,
  Amn as a,
  Cpn as o,
  Cq as s,
  DVt as c,
  HVt as l,
  Jrt as u,
  KVt as d,
  N3t as f,
  O3t as p,
  Opn as m,
  Rpn as h,
  S3t as g,
  Spn as _,
  Sq as v,
  Xrt as y,
  Yrt as ee,
  Zrt as te,
  a3t as ne,
  eit as b,
  hmn as re,
  iit as x,
  jXt as ie,
  kMt as ae,
  kXt as S,
  kmn as C,
  nit as oe,
  o3t as w,
  rit as se,
  s3t as T,
  tit as ce,
  xpn as le,
  zpn as E,
} from "./app-initial-f094ef01c64d.js";
function D(e) {
  let t = (0, O.c)(67),
    { currentSlug: r, hostedDomainSuffix: a, onClose: d, projectId: p } = e,
    h = n(ne),
    _ = m(),
    v = f(i, p),
    [b, re] = (0, pe.useState)(r),
    x;
  t[0] === b ? (x = t[1]) : ((x = b.trim().toLowerCase()), (t[0] = b), (t[1] = x));
  let S = x,
    C = s(S, 400),
    w = S === r,
    T;
  t[2] === S ? (T = t[3]) : ((T = S.length > 0 && !A.test(S)), (t[2] = S), (t[3] = T));
  let le = T,
    E;
  t[4] !== w || t[5] !== S
    ? ((E = !w && A.test(S)), (t[4] = w), (t[5] = S), (t[6] = E))
    : (E = t[6]);
  let D = E,
    j,
    M;
  t[7] !== C || t[8] !== p
    ? ((j = [...c, p, C]), (M = () => l(p, C)), (t[7] = C), (t[8] = p), (t[9] = j), (t[10] = M))
    : ((j = t[9]), (M = t[10]));
  let ge = D && C === S,
    N;
  t[11] !== j || t[12] !== M || t[13] !== ge
    ? ((N = { queryKey: j, queryFn: M, enabled: ge, retry: !1, staleTime: 0 }),
      (t[11] = j),
      (t[12] = M),
      (t[13] = ge),
      (t[14] = N))
    : (N = t[14]);
  let { data: _e, isError: ve, isFetching: ye, refetch: be } = g(N),
    xe = D && C === S && !ye && !ve && _e?.slug === S ? _e : void 0,
    P = xe?.available === !0,
    Se = xe?.available === !1,
    Ce = le || Se,
    F = `requirements`;
  w
    ? (F = null)
    : le
      ? (F = `invalid-format`)
      : D && (C !== S || ye)
        ? (F = `checking`)
        : D && ve
          ? (F = `error`)
          : P
            ? (F = `available`)
            : Se && (F = `unavailable`);
  let we = a == null ? null : me,
    Te = F == null ? null : he,
    I;
  t[15] !== we || t[16] !== Te
    ? ((I = [we, Te].filter(ue)), (t[15] = we), (t[16] = Te), (t[17] = I))
    : (I = t[17]);
  let Ee = I.join(` `),
    De = v.isPending,
    Oe = !v.isPending,
    L;
  t[18] !== v.isPending || t[19] !== d
    ? ((L = (e) => {
        !e && !v.isPending && d();
      }),
      (t[18] = v.isPending),
      (t[19] = d),
      (t[20] = L))
    : (L = t[20]);
  let R;
  t[21] !== v || t[22] !== _ || t[23] !== P || t[24] !== d || t[25] !== h || t[26] !== S
    ? ((R = (e) => {
        (e.preventDefault(),
          !(!P || v.isPending) &&
            v.mutateAsync(S).then(
              () => d(),
              () => {
                h.get(ie).danger(
                  _.formatMessage({
                    id: `appgenSettings.general.url.changeDialog.submitError`,
                    defaultMessage: `Unable to change site URL`,
                    description: `Error toast shown when a request to change a Site's hosted URL fails`,
                  }),
                );
              },
            ));
      }),
      (t[21] = v),
      (t[22] = _),
      (t[23] = P),
      (t[24] = d),
      (t[25] = h),
      (t[26] = S),
      (t[27] = R))
    : (R = t[27]);
  let z;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, k.jsx)(se, {
        children: (0, k.jsx)(o, {
          id: `appgenSettings.general.url.changeDialog.title`,
          defaultMessage: `Change URL`,
          description: `Title of the dialog for changing a Site's hosted URL`,
        }),
      })),
      (t[28] = z))
    : (z = t[28]);
  let B;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, k.jsx)(y, {
        title: z,
        subtitle: (0, k.jsx)(oe, {
          children: (0, k.jsx)(o, {
            id: `appgenSettings.general.url.changeDialog.description`,
            defaultMessage: `Enter a new web address for your site`,
            description: `Short explanation in the dialog for changing a Site's hosted URL`,
          }),
        }),
      })),
      (t[29] = B))
    : (B = t[29]);
  let ke = v.isPending,
    V;
  t[30] === _
    ? (V = t[31])
    : ((V = _.formatMessage({
        id: `appgenSettings.general.url.changeDialog.inputLabel`,
        defaultMessage: `Site URL name`,
        description: `Label for the editable portion of a Site's hosted URL`,
      })),
      (t[30] = _),
      (t[31] = V));
  let H;
  t[32] !== v.isPending || t[33] !== Ee || t[34] !== Ce || t[35] !== a || t[36] !== b || t[37] !== V
    ? ((H = (0, k.jsx)(de, {
        describedBy: Ee,
        disabled: ke,
        hasValidationError: Ce,
        hostedDomainSuffix: a,
        label: V,
        value: b,
        onChange: re,
      })),
      (t[32] = v.isPending),
      (t[33] = Ee),
      (t[34] = Ce),
      (t[35] = a),
      (t[36] = b),
      (t[37] = V),
      (t[38] = H))
    : (H = t[38]);
  let U;
  t[39] === be ? (U = t[40]) : ((U = () => void be()), (t[39] = be), (t[40] = U));
  let W;
  t[41] !== F || t[42] !== U
    ? ((W = (0, k.jsx)(fe, { state: F, onRetry: U })), (t[41] = F), (t[42] = U), (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] !== H || t[45] !== W
    ? ((G = (0, k.jsxs)(te, { className: `gap-2`, children: [H, W] })),
      (t[44] = H),
      (t[45] = W),
      (t[46] = G))
    : (G = t[46]);
  let K;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, k.jsx)(o, {
        id: `appgenSettings.general.url.changeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Site URL change dialog without saving`,
      })),
      (t[47] = K))
    : (K = t[47]);
  let q;
  t[48] !== v.isPending || t[49] !== d
    ? ((q = (0, k.jsx)(ae, {
        color: `ghostSecondary`,
        disabled: v.isPending,
        onClick: d,
        children: K,
      })),
      (t[48] = v.isPending),
      (t[49] = d),
      (t[50] = q))
    : (q = t[50]);
  let J = !P,
    Y;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, k.jsx)(o, {
        id: `appgenSettings.general.url.changeDialog.submit`,
        defaultMessage: `Change URL`,
        description: `Button that submits a new hosted URL name for a Site`,
      })),
      (t[51] = Y))
    : (Y = t[51]);
  let X;
  t[52] !== v.isPending || t[53] !== J
    ? ((X = (0, k.jsx)(ae, { disabled: J, loading: v.isPending, type: `submit`, children: Y })),
      (t[52] = v.isPending),
      (t[53] = J),
      (t[54] = X))
    : (X = t[54]);
  let Z;
  t[55] !== q || t[56] !== X
    ? ((Z = (0, k.jsxs)(ee, { className: `mt-10`, children: [q, X] })),
      (t[55] = q),
      (t[56] = X),
      (t[57] = Z))
    : (Z = t[57]);
  let Q;
  t[58] !== R || t[59] !== G || t[60] !== Z
    ? ((Q = (0, k.jsxs)(u, {
        as: `form`,
        className: `gap-0 px-4 pt-3.5 pb-4`,
        onSubmit: R,
        children: [B, G, Z],
      })),
      (t[58] = R),
      (t[59] = G),
      (t[60] = Z),
      (t[61] = Q))
    : (Q = t[61]);
  let $;
  return (
    t[62] !== v.isPending || t[63] !== Oe || t[64] !== L || t[65] !== Q
      ? (($ = (0, k.jsx)(ce, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: De,
          showDialogClose: Oe,
          onOpenChange: L,
          children: Q,
        })),
        (t[62] = v.isPending),
        (t[63] = Oe),
        (t[64] = L),
        (t[65] = Q),
        (t[66] = $))
      : ($ = t[66]),
    $
  );
}
function ue(e) {
  return e != null;
}
function de(e) {
  let t = (0, O.c)(19),
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
    ? ((f = h(
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
    m = i || void 0,
    g;
  t[4] === s ? (g = t[5]) : ((g = (e) => s(e.target.value)), (t[4] = s), (t[5] = g));
  let _;
  t[6] !== r || t[7] !== o || t[8] !== p || t[9] !== m || t[10] !== g || t[11] !== c
    ? ((_ = (0, k.jsx)(`input`, {
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": p,
        "aria-invalid": m,
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
      (t[9] = m),
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
          : (0, k.jsx)(`span`, {
              id: me,
              className: `max-w-1/2 min-w-0 shrink truncate ps-1 pe-2.5 text-tertiary`,
              children: a,
            })),
      (t[13] = a),
      (t[14] = v));
  let y;
  return (
    t[15] !== f || t[16] !== _ || t[17] !== v
      ? ((y = (0, k.jsxs)(`div`, { className: f, children: [_, v] })),
        (t[15] = f),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function fe(e) {
  let t = (0, O.c)(10),
    { onRetry: n, state: r } = e;
  if (r == null) return null;
  let i = r === `error` || r === `invalid-format` || r === `unavailable`,
    a = `text-secondary`;
  r === `available` ? (a = `text-chart-green`) : i && (a = `text-danger`);
  let s = `flex min-h-6 items-center gap-1 text-xs ${a}`,
    c = i ? `alert` : `status`,
    l = j[r],
    u;
  t[0] === l ? (u = t[1]) : ((u = (0, k.jsx)(o, { ...l })), (t[0] = l), (t[1] = u));
  let d;
  t[2] !== n || t[3] !== r
    ? ((d =
        r === `error`
          ? (0, k.jsx)(ae, {
              color: `ghost`,
              size: `compact`,
              onClick: n,
              children: (0, k.jsx)(o, {
                id: `appgenSettings.general.url.changeDialog.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries a failed hosted Site URL availability check`,
              }),
            })
          : null),
      (t[2] = n),
      (t[3] = r),
      (t[4] = d))
    : (d = t[4]);
  let f;
  return (
    t[5] !== s || t[6] !== c || t[7] !== u || t[8] !== d
      ? ((f = (0, k.jsxs)(`div`, { id: he, className: s, role: c, children: [u, d] })),
        (t[5] = s),
        (t[6] = c),
        (t[7] = u),
        (t[8] = d),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var O, pe, k, A, me, he, j;
e(() => {
  ((O = C()),
    T(),
    E(),
    p(),
    (pe = t(a(), 1)),
    _(),
    r(),
    x(),
    b(),
    S(),
    w(),
    v(),
    d(),
    (k = re()),
    (A = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/u),
    (me = `appgen-site-slug-domain`),
    (he = `appgen-site-slug-status`),
    (j = le({
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
})();
export { D as AppgenChangeSlugDialog };
//# sourceMappingURL=appgen-change-slug-dialog-daf64fab05ba.js.map
