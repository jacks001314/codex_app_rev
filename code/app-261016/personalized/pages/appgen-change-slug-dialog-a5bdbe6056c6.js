import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  MNt as u,
  Mst as d,
  NNt as f,
  PBt as p,
  Qst as m,
  RO as h,
  Vrt as g,
  WO as _,
  XOt as v,
  Y3 as y,
  YOt as b,
  Z3 as x,
  ZSt as S,
  jst as C,
  nCt as ee,
  okt as te,
  qO as ne,
  qrt as re,
  tkt as w,
  zO as ie,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Hcn as T,
  Ivn as ae,
  Tvn as oe,
  Ucn as se,
  xvn as ce,
  zvn as le,
} from "./app-initial-ad16eaadf81f.js";
function E(e) {
  let n = (0, D.c)(67),
    { currentSlug: r, hostedDomainSuffix: i, onClose: o, projectId: c } = e,
    u = t(m),
    f = te(),
    p = ee(oe, c),
    [g, v] = (0, pe.useState)(r),
    b;
  n[0] === g ? (b = n[1]) : ((b = g.trim().toLowerCase()), (n[0] = g), (n[1] = b));
  let x = b,
    S = se(x, 400),
    C = x === r,
    T;
  n[2] === x ? (T = n[3]) : ((T = x.length > 0 && !k.test(x)), (n[2] = x), (n[3] = T));
  let le = T,
    E;
  n[4] !== C || n[5] !== x ? ((E = !C && k.test(x)), (n[4] = C), (n[5] = x), (n[6] = E)) : (E = n[6]);
  let A = E,
    j,
    M;
  n[7] !== S || n[8] !== c
    ? ((j = [...ce, c, S]), (M = () => ae(c, S)), (n[7] = S), (n[8] = c), (n[9] = j), (n[10] = M))
    : ((j = n[9]), (M = n[10]));
  let ge = A && S === x,
    N;
  n[11] !== j || n[12] !== M || n[13] !== ge
    ? ((N = { queryKey: j, queryFn: M, enabled: ge, retry: !1, staleTime: 0 }),
      (n[11] = j),
      (n[12] = M),
      (n[13] = ge),
      (n[14] = N))
    : (N = n[14]);
  let { data: _e, isError: ve, isFetching: ye, refetch: be } = d(N),
    xe = A && S === x && !ye && !ve && _e?.slug === x ? _e : void 0,
    P = xe?.available === !0,
    Se = xe?.available === !1,
    Ce = le || Se,
    F = `requirements`;
  C
    ? (F = null)
    : le
      ? (F = `invalid-format`)
      : A && (S !== x || ye)
        ? (F = `checking`)
        : A && ve
          ? (F = `error`)
          : P
            ? (F = `available`)
            : Se && (F = `unavailable`);
  let we = i == null ? null : me,
    Te = F == null ? null : he,
    I;
  n[15] !== we || n[16] !== Te
    ? ((I = [we, Te].filter(ue)), (n[15] = we), (n[16] = Te), (n[17] = I))
    : (I = n[17]);
  let Ee = I.join(` `),
    De = p.isPending,
    Oe = !p.isPending,
    L;
  n[18] !== p.isPending || n[19] !== o
    ? ((L = (e) => {
        !e && !p.isPending && o();
      }),
      (n[18] = p.isPending),
      (n[19] = o),
      (n[20] = L))
    : (L = n[20]);
  let R;
  n[21] !== p || n[22] !== f || n[23] !== P || n[24] !== o || n[25] !== u || n[26] !== x
    ? ((R = (e) => {
        (e.preventDefault(),
          P &&
            !p.isPending &&
            p.mutateAsync(x).then(
              () => o(),
              () => {
                u.get(re).danger(
                  f.formatMessage({
                    id: `appgenSettings.general.url.changeDialog.submitError`,
                    defaultMessage: `Unable to change site URL`,
                    description: `Error toast shown when a request to change a Site's hosted URL fails`,
                  }),
                  { errorAnalytics: { toastId: `sites_settings_slug_save_error` } },
                );
              },
            ));
      }),
      (n[21] = p),
      (n[22] = f),
      (n[23] = P),
      (n[24] = o),
      (n[25] = u),
      (n[26] = x),
      (n[27] = R))
    : (R = n[27]);
  let z;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, O.jsx)(ne, {
        children: (0, O.jsx)(w, {
          id: `appgenSettings.general.url.changeDialog.title`,
          defaultMessage: `Change URL`,
          description: `Title of the dialog for changing a Site's hosted URL`,
        }),
      })),
      (n[28] = z))
    : (z = n[28]);
  let B;
  n[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, O.jsx)(h, {
        title: z,
        subtitle: (0, O.jsx)(s, {
          children: (0, O.jsx)(w, {
            id: `appgenSettings.general.url.changeDialog.description`,
            defaultMessage: `Enter a new web address for your site`,
            description: `Short explanation in the dialog for changing a Site's hosted URL`,
          }),
        }),
      })),
      (n[29] = B))
    : (B = n[29]);
  let ke = p.isPending,
    V;
  n[30] === f
    ? (V = n[31])
    : ((V = f.formatMessage({
        id: `appgenSettings.general.url.changeDialog.inputLabel`,
        defaultMessage: `Site URL name`,
        description: `Label for the editable portion of a Site's hosted URL`,
      })),
      (n[30] = f),
      (n[31] = V));
  let H;
  n[32] !== p.isPending || n[33] !== Ee || n[34] !== Ce || n[35] !== i || n[36] !== g || n[37] !== V
    ? ((H = (0, O.jsx)(de, {
        describedBy: Ee,
        disabled: ke,
        hasValidationError: Ce,
        hostedDomainSuffix: i,
        label: V,
        value: g,
        onChange: v,
      })),
      (n[32] = p.isPending),
      (n[33] = Ee),
      (n[34] = Ce),
      (n[35] = i),
      (n[36] = g),
      (n[37] = V),
      (n[38] = H))
    : (H = n[38]);
  let U;
  n[39] === be ? (U = n[40]) : ((U = () => void be()), (n[39] = be), (n[40] = U));
  let W;
  n[41] !== F || n[42] !== U
    ? ((W = (0, O.jsx)(fe, { state: F, onRetry: U })), (n[41] = F), (n[42] = U), (n[43] = W))
    : (W = n[43]);
  let G;
  n[44] !== H || n[45] !== W
    ? ((G = (0, O.jsxs)(ie, { className: `gap-2`, children: [H, W] })), (n[44] = H), (n[45] = W), (n[46] = G))
    : (G = n[46]);
  let K;
  n[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, O.jsx)(w, {
        id: `appgenSettings.general.url.changeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Site URL change dialog without saving`,
      })),
      (n[47] = K))
    : (K = n[47]);
  let q;
  n[48] !== p.isPending || n[49] !== o
    ? ((q = (0, O.jsx)(y, { color: `ghostSecondary`, disabled: p.isPending, onClick: o, children: K })),
      (n[48] = p.isPending),
      (n[49] = o),
      (n[50] = q))
    : (q = n[50]);
  let J = !P,
    Y;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, O.jsx)(w, {
        id: `appgenSettings.general.url.changeDialog.submit`,
        defaultMessage: `Change URL`,
        description: `Button that submits a new hosted URL name for a Site`,
      })),
      (n[51] = Y))
    : (Y = n[51]);
  let X;
  n[52] !== p.isPending || n[53] !== J
    ? ((X = (0, O.jsx)(y, { disabled: J, loading: p.isPending, type: `submit`, children: Y })),
      (n[52] = p.isPending),
      (n[53] = J),
      (n[54] = X))
    : (X = n[54]);
  let Z;
  n[55] !== q || n[56] !== X
    ? ((Z = (0, O.jsxs)(l, { className: `mt-10`, children: [q, X] })), (n[55] = q), (n[56] = X), (n[57] = Z))
    : (Z = n[57]);
  let Q;
  n[58] !== R || n[59] !== G || n[60] !== Z
    ? ((Q = (0, O.jsxs)(a, {
        as: `form`,
        className: `gap-0 px-4 pt-3.5 pb-4`,
        onSubmit: R,
        children: [B, G, Z],
      })),
      (n[58] = R),
      (n[59] = G),
      (n[60] = Z),
      (n[61] = Q))
    : (Q = n[61]);
  let $;
  return (
    n[62] !== p.isPending || n[63] !== Oe || n[64] !== L || n[65] !== Q
      ? (($ = (0, O.jsx)(_, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: De,
          showDialogClose: Oe,
          onOpenChange: L,
          children: Q,
        })),
        (n[62] = p.isPending),
        (n[63] = Oe),
        (n[64] = L),
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
    d = i && `border-text-danger ring-2 ring-text-danger/20`,
    f = r && `cursor-not-allowed bg-text/5 text-secondary`,
    p;
  t[0] !== l || t[1] !== d || t[2] !== f
    ? ((p = u(
        `flex h-9 w-full min-w-0 items-center overflow-hidden rounded-md border border-primary-outline bg-primary-soft text-sm text-default`,
        l,
        d,
        f,
      )),
      (t[0] = l),
      (t[1] = d),
      (t[2] = f),
      (t[3] = p))
    : (p = t[3]);
  let m = n || void 0,
    h = i || void 0,
    g;
  t[4] === s ? (g = t[5]) : ((g = (e) => s(e.target.value)), (t[4] = s), (t[5] = g));
  let _;
  t[6] !== r || t[7] !== o || t[8] !== m || t[9] !== h || t[10] !== g || t[11] !== c
    ? ((_ = (0, O.jsx)(`input`, {
        autoComplete: `off`,
        autoFocus: !0,
        "aria-describedby": m,
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
      (t[8] = m),
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
              id: me,
              className: `max-w-1/2 min-w-0 shrink truncate ps-1 pe-2.5 text-tertiary`,
              children: a,
            })),
      (t[13] = a),
      (t[14] = v));
  let y;
  return (
    t[15] !== p || t[16] !== _ || t[17] !== v
      ? ((y = (0, O.jsxs)(`div`, { className: p, children: [_, v] })),
        (t[15] = p),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function fe(e) {
  let t = (0, D.c)(10),
    { onRetry: n, state: r } = e;
  if (r == null) return null;
  let i = r === `error` || r === `invalid-format` || r === `unavailable`,
    a = `text-secondary`;
  r === `available` ? (a = `text-chart-green`) : i && (a = `text-danger`);
  let o = `flex min-h-6 items-center gap-1 text-xs ${a}`,
    s = i ? `alert` : `status`,
    c = A[r],
    l;
  t[0] === c ? (l = t[1]) : ((l = (0, O.jsx)(w, { ...c })), (t[0] = c), (t[1] = l));
  let u;
  t[2] !== n || t[3] !== r
    ? ((u =
        r === `error`
          ? (0, O.jsx)(y, {
              color: `ghost`,
              size: `compact`,
              onClick: n,
              children: (0, O.jsx)(w, {
                id: `appgenSettings.general.url.changeDialog.retry`,
                defaultMessage: `Retry`,
                description: `Button that retries a failed hosted Site URL availability check`,
              }),
            })
          : null),
      (t[2] = n),
      (t[3] = r),
      (t[4] = u))
    : (u = t[4]);
  let d;
  return (
    t[5] !== o || t[6] !== s || t[7] !== l || t[8] !== u
      ? ((d = (0, O.jsxs)(`div`, { id: he, className: o, role: s, children: [l, u] })),
        (t[5] = o),
        (t[6] = s),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d))
      : (d = t[9]),
    d
  );
}
var D, pe, O, k, me, he, A;
function j() {
  return (j = e(() => {
    ((D = p()),
      C(),
      f(),
      S(),
      (pe = r()),
      v(),
      x(),
      o(),
      i(),
      g(),
      n(),
      T(),
      le(),
      (O = c()),
      (k = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/u),
      (me = `appgen-site-slug-domain`),
      (he = `appgen-site-slug-status`),
      (A = b({
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
j();
export { E as AppgenChangeSlugDialog };
//# sourceMappingURL=appgen-change-slug-dialog-a5bdbe6056c6.js.map
