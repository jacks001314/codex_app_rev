import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  HT as i,
  IDt as a,
  Iot as o,
  Ixt as ee,
  JC as s,
  Lot as c,
  Pxt as l,
  VDt as u,
  VT as d,
  Vxt as f,
  hot as p,
  iw as m,
  jDt as h,
  lot as g,
  qC as _,
  t3 as v,
  tw as y,
  vzt as b,
  wot as x,
  xMt as S,
  yzt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as T,
  Ek as E,
  TPn as D,
  Tk as O,
  _F as k,
  eF as A,
  hF as j,
  tF as M,
} from "./app-initial-5851df3f6cb1.js";
import { i as N, l as P, o as F, t as I } from "./state-1ce5d108ee8f.js";
function L() {
  let e = (0, B.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsx)(j, { title: (0, H.jsx)(A, { slug: `account` }), children: (0, H.jsx)(R, {}) })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function R() {
  let e = (0, B.c)(2),
    t = f(N),
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
  let n = (0, B.c)(47),
    { identity: i } = e,
    o = ee(r),
    s = u(),
    { data: l, isPending: f, isError: m, refetch: h } = w(I, i),
    g = {
      npi: l?.npi ?? ``,
      degree: l?.degree ?? ``,
      medical_license_state: l?.medical_license_state ?? ``,
      medical_license_number: l?.medical_license_number ?? ``,
      physician_eligible_for_cme: l?.physician_eligible_for_cme ?? !1,
    },
    [v, b] = (0, V.useState)(null),
    x = v ?? g,
    S = {
      npi: x.npi.replace(/\D/g, ``),
      degree: x.degree.trim(),
      medical_license_state: x.medical_license_state.trim().toUpperCase(),
      medical_license_number: x.medical_license_number.trim(),
      physician_eligible_for_cme: x.physician_eligible_for_cme,
    },
    C = S.npi.length !== 10,
    T = S.degree.length === 0,
    E;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = /^[A-Z]{2}$/), (n[0] = E)) : (E = n[0]);
  let k = !E.test(S.medical_license_state),
    A = S.medical_license_number.length === 0,
    j = !S.physician_eligible_for_cme,
    M;
  n[1] !== C || n[2] !== T || n[3] !== k || n[4] !== A || n[5] !== j
    ? ((M = {
        npi: C,
        degree: T,
        medical_license_state: k,
        medical_license_number: A,
        physician_eligible_for_cme: j,
      }),
      (n[1] = C),
      (n[2] = T),
      (n[3] = k),
      (n[4] = A),
      (n[5] = j),
      (n[6] = M))
    : (M = n[6]);
  let F = M,
    L = () => P(o, i, S),
    R;
  n[7] !== s || n[8] !== o || n[9] !== b
    ? ((R = () => {
        (b(null),
          o
            .get(p)
            .success(
              s.formatMessage({
                id: `cme.profile.saved`,
                defaultMessage: `Medical credentials saved`,
                description: `Toast confirming that the clinician's CME medical profile was saved`,
              }),
            ));
      }),
      (n[7] = s),
      (n[8] = o),
      (n[9] = b),
      (n[10] = R))
    : (R = n[10]);
  let z;
  n[11] !== i || n[12] !== s || n[13] !== o
    ? ((z = () => {
        let e = o.get(N);
        e?.accountId === i.accountId &&
          e.userId === i.userId &&
          o
            .get(p)
            .danger(
              s.formatMessage({
                id: `cme.profile.saveFailed`,
                defaultMessage: `Unable to save medical credentials. Please try again.`,
                description: `Toast shown when saving the clinician's CME medical profile fails`,
              }),
              { errorAnalytics: { toastId: `cme.profile.saveFailed` } },
            );
      }),
      (n[11] = i),
      (n[12] = s),
      (n[13] = o),
      (n[14] = z))
    : (z = n[14]);
  let W;
  n[15] !== z || n[16] !== L || n[17] !== R
    ? ((W = { mutationFn: L, onSuccess: R, onError: z }), (n[15] = z), (n[16] = L), (n[17] = R), (n[18] = W))
    : (W = n[18]);
  let G = c(W),
    K =
      l != null &&
      !Object.values(F).some(te) &&
      (S.npi !== g.npi ||
        S.degree !== g.degree ||
        S.medical_license_state !== g.medical_license_state ||
        S.medical_license_number !== g.medical_license_number ||
        S.physician_eligible_for_cme !== g.physician_eligible_for_cme) &&
      !G.isPending,
    q;
  n[19] !== K || n[20] !== G
    ? ((q = (e) => {
        (e.preventDefault(), K && G.mutate());
      }),
      (n[19] = K),
      (n[20] = G),
      (n[21] = q))
    : (q = n[21]);
  let J;
  n[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, H.jsx)(O.Header, {
        title: (0, H.jsx)(a, {
          id: `cme.profile.title`,
          defaultMessage: `Medical credentials`,
          description: `Heading for the CME medical credentials form in Account settings`,
        }),
        subtitle: (0, H.jsx)(a, {
          id: `cme.profile.description`,
          defaultMessage: `Used for CME credits and other clinician features. Confirm physician eligibility to claim CME credits.`,
          description: `Explains why medical credentials and physician eligibility are collected in Account settings`,
        }),
      })),
      (n[22] = J))
    : (J = n[22]);
  let Y;
  n[23] === f
    ? (Y = n[24])
    : ((Y = f
        ? (0, H.jsx)(O.Footer, {
            children: (0, H.jsx)(a, {
              id: `cme.profile.loading`,
              defaultMessage: `Loading medical credentials…`,
              description: `Loading state while fetching a clinician's CME medical profile`,
            }),
          })
        : null),
      (n[23] = f),
      (n[24] = Y));
  let X;
  n[25] !== l || n[26] !== m || n[27] !== f || n[28] !== h
    ? ((X =
        !f && m && l == null
          ? (0, H.jsx)(_, {
              children: (0, H.jsx)(y, {
                label: (0, H.jsx)(a, {
                  id: `cme.profile.loadFailed`,
                  defaultMessage: `Unable to load medical credentials`,
                  description: `Error when the CME medical profile could not be loaded`,
                }),
                control: (0, H.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => void h(),
                  children: (0, H.jsx)(a, {
                    id: `cme.profile.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading the CME medical profile`,
                  }),
                }),
              }),
            })
          : null),
      (n[25] = l),
      (n[26] = m),
      (n[27] = f),
      (n[28] = h),
      (n[29] = X))
    : (X = n[29]);
  let Z;
  n[30] !== l ||
  n[31] !== K ||
  n[32] !== v ||
  n[33] !== F ||
  n[34] !== s ||
  n[35] !== f ||
  n[36] !== G ||
  n[37] !== b ||
  n[38] !== x
    ? ((Z =
        !f && l != null
          ? (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsxs)(_, {
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
                      let { field: t, label: n, placeholder: r, error: i, ...o } = e;
                      return (0, H.jsx)(
                        y,
                        {
                          label: (0, H.jsx)(a, { ...n }),
                          description: v != null && F[t] ? (0, H.jsx)(a, { ...i }) : null,
                          variant: `nested`,
                          control: (e) =>
                            (0, H.jsx)(D, {
                              ...e,
                              ...o,
                              "aria-invalid": v != null && F[t],
                              disabled: G.isPending || (t === `npi` && l?.is_npi_editable === !1),
                              inputMode: t === `npi` ? `numeric` : void 0,
                              placeholder: s.formatMessage(r),
                              value: x[t],
                              onChange: (e) => b({ ...x, [t]: e.currentTarget.value }),
                            }),
                        },
                        t,
                      );
                    }),
                    (0, H.jsx)(y, {
                      label: (0, H.jsx)(a, { ...U.eligibilityLabel }),
                      description:
                        v != null && F.physician_eligible_for_cme
                          ? (0, H.jsx)(a, { ...U.eligibilityError })
                          : null,
                      control: (e) =>
                        (0, H.jsx)(`div`, {
                          className: `relative`,
                          children: (0, H.jsx)(d, {
                            ...e,
                            checked: x.physician_eligible_for_cme,
                            disabled: G.isPending,
                            onCheckedChange: (e) => b({ ...x, physician_eligible_for_cme: e }),
                          }),
                        }),
                    }),
                  ],
                }),
                (0, H.jsx)(O.Footer, {
                  children: (0, H.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, H.jsx)(t, {
                      color: `secondary`,
                      size: `toolbar`,
                      type: `submit`,
                      disabled: !K,
                      loading: G.isPending,
                      children: (0, H.jsx)(a, {
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
      (n[30] = l),
      (n[31] = K),
      (n[32] = v),
      (n[33] = F),
      (n[34] = s),
      (n[35] = f),
      (n[36] = G),
      (n[37] = b),
      (n[38] = x),
      (n[39] = Z))
    : (Z = n[39]);
  let Q;
  n[40] !== Y || n[41] !== X || n[42] !== Z
    ? ((Q = (0, H.jsxs)(O, { children: [J, (0, H.jsxs)(O.Content, { children: [Y, X, Z] })] })),
      (n[40] = Y),
      (n[41] = X),
      (n[42] = Z),
      (n[43] = Q))
    : (Q = n[43]);
  let $;
  return (
    n[44] !== q || n[45] !== Q
      ? (($ = (0, H.jsx)(`form`, { onSubmit: q, children: Q })), (n[44] = q), (n[45] = Q), (n[46] = $))
      : ($ = n[46]),
    $
  );
}
function te(e) {
  return e;
}
var B, V, H, U;
function W() {
  return (W = e(() => {
    ((B = b()),
      o(),
      l(),
      (V = C()),
      h(),
      v(),
      i(),
      T(),
      g(),
      x(),
      k(),
      E(),
      m(),
      M(),
      s(),
      F(),
      (H = S()),
      (U = n({
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
//# sourceMappingURL=profile-settings-cb34a5b5d82e.js.map
