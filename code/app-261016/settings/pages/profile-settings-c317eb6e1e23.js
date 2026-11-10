import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  LNt as a,
  OT as o,
  PBt as s,
  Qst as c,
  Vrt as l,
  XOt as u,
  Y3 as d,
  YOt as f,
  Z3 as p,
  ZSt as m,
  ew as h,
  iCt as g,
  kT as _,
  nCt as v,
  okt as y,
  qrt as b,
  sw as x,
  tkt as S,
  uw as C,
  vst as w,
  yst as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as T,
  LF as E,
  QF as D,
  RF as O,
  ZLn as k,
  cA as A,
  eI as j,
  sA as M,
} from "./app-initial-ad16eaadf81f.js";
import { i as N, l as P, o as F, t as I } from "./state-6485a61dd0f9.js";
function L() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(D, { title: (0, H.jsx)(E, { slug: `account` }), children: (0, H.jsx)(R, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function R() {
  let e = (0, B.c)(2),
    t = g(N),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = t == null ? null : (0, H.jsx)(z, { identity: t }, `${t.accountId}:${t.userId}`)),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function z(e) {
  let r = (0, B.c)(47),
    { identity: i } = e,
    a = n(c),
    s = y(),
    { data: l, isPending: u, isError: f, refetch: p } = v(I, i),
    m = {
      npi: l?.npi ?? ``,
      degree: l?.degree ?? ``,
      medical_license_state: l?.medical_license_state ?? ``,
      medical_license_number: l?.medical_license_number ?? ``,
      physician_eligible_for_cme: l?.physician_eligible_for_cme ?? !1,
    },
    [h, g] = (0, V.useState)(null),
    _ = h ?? m,
    C = {
      npi: _.npi.replace(/\D/g, ``),
      degree: _.degree.trim(),
      medical_license_state: _.medical_license_state.trim().toUpperCase(),
      medical_license_number: _.medical_license_number.trim(),
      physician_eligible_for_cme: _.physician_eligible_for_cme,
    },
    w = C.npi.length !== 10,
    T = C.degree.length === 0,
    E;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = /^[A-Z]{2}$/), (r[0] = E)) : (E = r[0]);
  let D = !E.test(C.medical_license_state),
    O = C.medical_license_number.length === 0,
    A = !C.physician_eligible_for_cme,
    j;
  r[1] !== w || r[2] !== T || r[3] !== D || r[4] !== O || r[5] !== A
    ? ((j = {
        npi: w,
        degree: T,
        medical_license_state: D,
        medical_license_number: O,
        physician_eligible_for_cme: A,
      }),
      (r[1] = w),
      (r[2] = T),
      (r[3] = D),
      (r[4] = O),
      (r[5] = A),
      (r[6] = j))
    : (j = r[6]);
  let F = j,
    L = () => P(a, i, C),
    R;
  r[7] !== s || r[8] !== a || r[9] !== g
    ? ((R = () => {
        (g(null),
          a
            .get(b)
            .success(
              s.formatMessage({
                id: `cme.profile.saved`,
                defaultMessage: `Medical credentials saved`,
                description: `Toast confirming that the clinician's CME medical profile was saved`,
              }),
            ));
      }),
      (r[7] = s),
      (r[8] = a),
      (r[9] = g),
      (r[10] = R))
    : (R = r[10]);
  let z;
  r[11] !== i || r[12] !== s || r[13] !== a
    ? ((z = () => {
        let e = a.get(N);
        e?.accountId === i.accountId &&
          e.userId === i.userId &&
          a
            .get(b)
            .danger(
              s.formatMessage({
                id: `cme.profile.saveFailed`,
                defaultMessage: `Unable to save medical credentials. Please try again.`,
                description: `Toast shown when saving the clinician's CME medical profile fails`,
              }),
              { errorAnalytics: { toastId: `cme.profile.saveFailed` } },
            );
      }),
      (r[11] = i),
      (r[12] = s),
      (r[13] = a),
      (r[14] = z))
    : (z = r[14]);
  let W;
  r[15] !== z || r[16] !== L || r[17] !== R
    ? ((W = { mutationFn: L, onSuccess: R, onError: z }), (r[15] = z), (r[16] = L), (r[17] = R), (r[18] = W))
    : (W = r[18]);
  let G = ee(W),
    K =
      l != null &&
      !Object.values(F).some(te) &&
      (C.npi !== m.npi ||
        C.degree !== m.degree ||
        C.medical_license_state !== m.medical_license_state ||
        C.medical_license_number !== m.medical_license_number ||
        C.physician_eligible_for_cme !== m.physician_eligible_for_cme) &&
      !G.isPending,
    q;
  r[19] !== K || r[20] !== G
    ? ((q = (e) => {
        (e.preventDefault(), K && G.mutate());
      }),
      (r[19] = K),
      (r[20] = G),
      (r[21] = q))
    : (q = r[21]);
  let J;
  r[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, H.jsx)(M.Header, {
        title: (0, H.jsx)(S, {
          id: `cme.profile.title`,
          defaultMessage: `Medical credentials`,
          description: `Heading for the CME medical credentials form in Account settings`,
        }),
        subtitle: (0, H.jsx)(S, {
          id: `cme.profile.description`,
          defaultMessage: `Used for CME credits and other clinician features. Confirm physician eligibility to claim CME credits.`,
          description: `Explains why medical credentials and physician eligibility are collected in Account settings`,
        }),
      })),
      (r[22] = J))
    : (J = r[22]);
  let Y;
  r[23] === u
    ? (Y = r[24])
    : ((Y = u
        ? (0, H.jsx)(M.Footer, {
            children: (0, H.jsx)(S, {
              id: `cme.profile.loading`,
              defaultMessage: `Loading medical credentials…`,
              description: `Loading state while fetching a clinician's CME medical profile`,
            }),
          })
        : null),
      (r[23] = u),
      (r[24] = Y));
  let X;
  r[25] !== l || r[26] !== f || r[27] !== u || r[28] !== p
    ? ((X =
        !u && f && l == null
          ? (0, H.jsx)(t, {
              children: (0, H.jsx)(x, {
                label: (0, H.jsx)(S, {
                  id: `cme.profile.loadFailed`,
                  defaultMessage: `Unable to load medical credentials`,
                  description: `Error when the CME medical profile could not be loaded`,
                }),
                control: (0, H.jsx)(d, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => void p(),
                  children: (0, H.jsx)(S, {
                    id: `cme.profile.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading the CME medical profile`,
                  }),
                }),
              }),
            })
          : null),
      (r[25] = l),
      (r[26] = f),
      (r[27] = u),
      (r[28] = p),
      (r[29] = X))
    : (X = r[29]);
  let Z;
  r[30] !== l ||
  r[31] !== K ||
  r[32] !== h ||
  r[33] !== F ||
  r[34] !== s ||
  r[35] !== u ||
  r[36] !== G ||
  r[37] !== g ||
  r[38] !== _
    ? ((Z =
        !u && l != null
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsxs)(t, {
                  children: [
                    [
                      {
                        field: `npi`,
                        label: U.npiLabel,
                        placeholder: U.npiPlaceholder,
                        error: U.npiError,
                        maxLength: 20,
                      },
                      {
                        field: `degree`,
                        label: U.degreeLabel,
                        placeholder: U.degreePlaceholder,
                        error: U.degreeError,
                      },
                      {
                        field: `medical_license_state`,
                        label: U.stateLabel,
                        placeholder: U.statePlaceholder,
                        error: U.stateError,
                        maxLength: 2,
                      },
                      {
                        field: `medical_license_number`,
                        label: U.numberLabel,
                        placeholder: U.numberPlaceholder,
                        error: U.numberError,
                      },
                    ].map((e) => {
                      let { field: t, label: n, placeholder: r, error: i, ...a } = e;
                      return (0, H.jsx)(
                        x,
                        {
                          label: (0, H.jsx)(S, { ...n }),
                          description: h != null && F[t] ? (0, H.jsx)(S, { ...i }) : null,
                          variant: `nested`,
                          control: (e) =>
                            (0, H.jsx)(k, {
                              ...e,
                              ...a,
                              "aria-invalid": h != null && F[t],
                              disabled: G.isPending || (t === `npi` && l?.is_npi_editable === !1),
                              inputMode: t === `npi` ? `numeric` : void 0,
                              placeholder: s.formatMessage(r),
                              value: _[t],
                              onChange: (e) => g({ ..._, [t]: e.currentTarget.value }),
                            }),
                        },
                        t,
                      );
                    }),
                    (0, H.jsx)(x, {
                      label: (0, H.jsx)(S, { ...U.eligibilityLabel }),
                      description:
                        h != null && F.physician_eligible_for_cme
                          ? (0, H.jsx)(S, { ...U.eligibilityError })
                          : null,
                      control: (e) =>
                        (0, H.jsx)(`div`, {
                          className: `relative`,
                          children: (0, H.jsx)(o, {
                            ...e,
                            checked: _.physician_eligible_for_cme,
                            disabled: G.isPending,
                            onCheckedChange: (e) => g({ ..._, physician_eligible_for_cme: e }),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, H.jsx)(M.Footer, {
                  children: (0, H.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, H.jsx)(d, {
                      color: `secondary`,
                      size: `toolbar`,
                      type: `submit`,
                      disabled: !K,
                      loading: G.isPending,
                      children: (0, H.jsx)(S, {
                        id: `cme.profile.save`,
                        defaultMessage: `Save`,
                        description: `Button to save the clinician's CME medical profile`,
                      }),
                    }),
                  }),
                }),
              ],
            })
          : null),
      (r[30] = l),
      (r[31] = K),
      (r[32] = h),
      (r[33] = F),
      (r[34] = s),
      (r[35] = u),
      (r[36] = G),
      (r[37] = g),
      (r[38] = _),
      (r[39] = Z))
    : (Z = r[39]);
  let Q;
  r[40] !== Y || r[41] !== X || r[42] !== Z
    ? ((Q = (0, H.jsxs)(M, { children: [J, (0, H.jsxs)(M.Content, { children: [Y, X, Z] })] })),
      (r[40] = Y),
      (r[41] = X),
      (r[42] = Z),
      (r[43] = Q))
    : (Q = r[43]);
  let $;
  return (
    r[44] !== q || r[45] !== Q
      ? (($ = (0, H.jsx)(`form`, { onSubmit: q, children: Q })), (r[44] = q), (r[45] = Q), (r[46] = $))
      : ($ = r[46]),
    $
  );
}
function te(e) {
  return e;
}
var B, V, H, U;
function W() {
  return (W = e(() => {
    ((B = s()),
      w(),
      m(),
      (V = i()),
      u(),
      p(),
      _(),
      T(),
      l(),
      r(),
      j(),
      A(),
      C(),
      O(),
      h(),
      F(),
      (H = a()),
      (U = f({
        npiLabel: {
          id: `cme.profile.npiLabel`,
          defaultMessage: `National Provider Identifier (NPI)`,
          description: `Label for the clinician's US National Provider Identifier in CME settings`,
        },
        npiPlaceholder: {
          id: `cme.profile.npiPlaceholder`,
          defaultMessage: `Enter your 10-digit NPI`,
          description: `Placeholder for the National Provider Identifier in CME settings`,
        },
        npiError: {
          id: `cme.profile.npiError`,
          defaultMessage: `NPI must be 10 digits`,
          description: `Validation error for the National Provider Identifier in CME settings`,
        },
        degreeLabel: {
          id: `cme.profile.degreeLabel`,
          defaultMessage: `Degree`,
          description: `Label for the clinician's medical degree in CME settings`,
        },
        degreePlaceholder: {
          id: `cme.profile.degreePlaceholder`,
          defaultMessage: `Enter your degree (e.g. MD)`,
          description: `Placeholder for the clinician's medical degree in CME settings`,
        },
        degreeError: {
          id: `cme.profile.degreeError`,
          defaultMessage: `Degree is required`,
          description: `Validation error for a missing medical degree in CME settings`,
        },
        stateLabel: {
          id: `cme.profile.stateLabel`,
          defaultMessage: `Medical license state`,
          description: `Label for the US state that issued the clinician's medical license`,
        },
        statePlaceholder: {
          id: `cme.profile.statePlaceholder`,
          defaultMessage: `Enter a 2-letter state (e.g. DE)`,
          description: `Placeholder for the state abbreviation on the clinician's medical license`,
        },
        stateError: {
          id: `cme.profile.stateError`,
          defaultMessage: `Medical license state must be 2 letters`,
          description: `Validation error for the state abbreviation on the clinician's medical license`,
        },
        numberLabel: {
          id: `cme.profile.numberLabel`,
          defaultMessage: `Medical license number`,
          description: `Label for the clinician's medical license number in CME settings`,
        },
        numberPlaceholder: {
          id: `cme.profile.numberPlaceholder`,
          defaultMessage: `Enter your medical license number`,
          description: `Placeholder for the clinician's medical license number in CME settings`,
        },
        numberError: {
          id: `cme.profile.numberError`,
          defaultMessage: `Medical license number is required`,
          description: `Validation error for a missing medical license number in CME settings`,
        },
        eligibilityLabel: {
          id: `cme.profile.eligibilityLabel`,
          defaultMessage: `I am a physician eligible for CME credits`,
          description: `Checkbox confirming the clinician is a physician eligible to claim continuing medical education credits`,
        },
        eligibilityError: {
          id: `cme.profile.eligibilityError`,
          defaultMessage: `Physician eligibility confirmation is required`,
          description: `Validation error when the clinician has not confirmed physician eligibility for CME credits`,
        },
      })));
  }))();
}
W();
export { L as CmeAccountSettings, R as CmeProfileSettings };
//# sourceMappingURL=profile-settings-c317eb6e1e23.js.map
