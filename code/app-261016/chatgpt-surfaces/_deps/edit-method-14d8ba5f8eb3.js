import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  FBt as i,
  HO as a,
  IO as ee,
  JO as o,
  LNt as s,
  LO as te,
  Mst as ne,
  PBt as c,
  Qst as l,
  WO as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  jst as h,
  kB as g,
  okt as re,
  qO as ie,
  tkt as _,
  vst as v,
  yst as ae,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Chr as oe,
  Ejr as se,
  cMt as y,
  iRr as ce,
  oMt as b,
  sRr as x,
  whr as S,
  xjr as C,
} from "./app-initial-ad16eaadf81f.js";
import { n as w, r as T } from "./queries-95931bb8c995.js";
import { a as E, i as D } from "./pure-b84c4c3484c4.js";
import { a as O, t as k } from "./stripe-elements-appearance-809d15977833.js";
import { n as A, t as j } from "./secure-form-status-1e957f282453.js";
import { n as le, r as ue, t as M } from "./stripe-client-4f7192c20a27.js";
import { a as de, o as N, s as P } from "./add-method-59f4fd8d9a22.js";
var F, I, L, R, z, B, V, H, U;
function W() {
  return (W = e(() => {
    ((F = `_form_savc2_1`),
      (I = `_field_savc2_7`),
      (L = `_title_savc2_14`),
      (R = `_error_savc2_15`),
      (z = `_label_savc2_27`),
      (B = `_expiration_savc2_47`),
      (V = `_input_savc2_58`),
      (H = `_action_savc2_129`),
      (U = { form: F, field: I, title: L, error: R, label: z, expiration: B, input: V, action: H }));
  }))();
}
function fe(e) {
  let t = (0, G.c)(72),
    {
      appearance: n,
      expirationTitle: r,
      monthLabel: i,
      monthInput: a,
      yearLabel: ee,
      yearInput: o,
      expirationError: s,
      billingAddressTitle: te,
      addressElementOptions: ne,
      onAddressReady: c,
      onAddressChange: l,
      error: u,
      action: d,
    } = e,
    f = (0, me.useId)(),
    p = (0, me.useId)(),
    m = n.rules,
    h = n.variables,
    g = m?.[`.Input`],
    re = m?.[`.Label`],
    ie = m?.[`.Input:focus`],
    _ = m?.[`.Input--invalid, .Input--invalid:focus`] ?? m?.[`.Input--invalid`],
    v = h?.colorBackground,
    ae = h?.colorText,
    oe = h?.colorTextPlaceholder,
    se = h?.colorPrimary,
    y = h?.colorDanger,
    ce = h?.fontFamily,
    b = h?.fontSizeBase ?? `16px`,
    x = h?.gridColumnSpacing,
    S = g?.backgroundColor,
    C = g?.border,
    w = g?.borderRadius,
    T = g?.padding,
    E = g?.boxShadow,
    D = g?.transition,
    O = re?.color,
    k = re?.fontWeight,
    A = ie?.borderColor,
    j = ie?.boxShadow,
    le = _?.borderColor,
    ue = _?.boxShadow,
    M;
  t[0] !== v ||
  t[1] !== C ||
  t[2] !== w ||
  t[3] !== T ||
  t[4] !== E ||
  t[5] !== D ||
  t[6] !== O ||
  t[7] !== k ||
  t[8] !== A ||
  t[9] !== j ||
  t[10] !== le ||
  t[11] !== ae ||
  t[12] !== ue ||
  t[13] !== oe ||
  t[14] !== se ||
  t[15] !== y ||
  t[16] !== ce ||
  t[17] !== b ||
  t[18] !== x ||
  t[19] !== S
    ? ((M = {
        "--colorBackground": v,
        "--colorText": ae,
        "--colorTextPlaceholder": oe,
        "--colorPrimary": se,
        "--colorDanger": y,
        "--payment-font": ce,
        "--payment-font-size": b,
        "--payment-column-gap": x,
        "--payment-input-background": S,
        "--payment-input-border": C,
        "--payment-input-radius": w,
        "--payment-input-padding": T,
        "--payment-input-shadow": E,
        "--payment-input-transition": D,
        "--payment-label-color": O,
        "--payment-label-weight": k,
        "--payment-focus-border": A,
        "--payment-focus-shadow": j,
        "--payment-invalid-border": le,
        "--payment-invalid-shadow": ue,
      }),
      (t[0] = v),
      (t[1] = C),
      (t[2] = w),
      (t[3] = T),
      (t[4] = E),
      (t[5] = D),
      (t[6] = O),
      (t[7] = k),
      (t[8] = A),
      (t[9] = j),
      (t[10] = le),
      (t[11] = ae),
      (t[12] = ue),
      (t[13] = oe),
      (t[14] = se),
      (t[15] = y),
      (t[16] = ce),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S),
      (t[20] = M))
    : (M = t[20]);
  let de = M,
    N;
  t[21] !== f || t[22] !== r
    ? ((N = (0, K.jsx)(`p`, { id: f, className: U.title, children: r })),
      (t[21] = f),
      (t[22] = r),
      (t[23] = N))
    : (N = t[23]);
  let P = a.placeholder ?? ` `,
    F = s ? p : void 0,
    I;
  t[24] !== a || t[25] !== P || t[26] !== F
    ? ((I = (0, K.jsx)(`input`, {
        ...a,
        placeholder: P,
        className: U.input,
        name: `expiration-month`,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `cc-exp-month`,
        maxLength: 2,
        "aria-describedby": F,
      })),
      (t[24] = a),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] === i
    ? (L = t[29])
    : ((L = (0, K.jsx)(`span`, { className: U.label, children: i })), (t[28] = i), (t[29] = L));
  let R;
  t[30] !== I || t[31] !== L
    ? ((R = (0, K.jsxs)(`label`, { className: U.field, children: [I, L] })),
      (t[30] = I),
      (t[31] = L),
      (t[32] = R))
    : (R = t[32]);
  let z = o.placeholder ?? ` `,
    B = s ? p : void 0,
    V;
  t[33] !== z || t[34] !== B || t[35] !== o
    ? ((V = (0, K.jsx)(`input`, {
        ...o,
        placeholder: z,
        className: U.input,
        name: `expiration-year`,
        type: `text`,
        inputMode: `numeric`,
        autoComplete: `cc-exp-year`,
        maxLength: 4,
        "aria-describedby": B,
      })),
      (t[33] = z),
      (t[34] = B),
      (t[35] = o),
      (t[36] = V))
    : (V = t[36]);
  let H;
  t[37] === ee
    ? (H = t[38])
    : ((H = (0, K.jsx)(`span`, { className: U.label, children: ee })), (t[37] = ee), (t[38] = H));
  let W;
  t[39] !== V || t[40] !== H
    ? ((W = (0, K.jsxs)(`label`, { className: U.field, children: [V, H] })),
      (t[39] = V),
      (t[40] = H),
      (t[41] = W))
    : (W = t[41]);
  let fe;
  t[42] !== f || t[43] !== de || t[44] !== R || t[45] !== W
    ? ((fe = (0, K.jsxs)(`div`, {
        role: `group`,
        "aria-labelledby": f,
        className: U.expiration,
        style: de,
        children: [R, W],
      })),
      (t[42] = f),
      (t[43] = de),
      (t[44] = R),
      (t[45] = W),
      (t[46] = fe))
    : (fe = t[46]);
  let q;
  t[47] !== s || t[48] !== p
    ? ((q = s ? (0, K.jsx)(`p`, { id: p, role: `alert`, className: U.error, children: s }) : null),
      (t[47] = s),
      (t[48] = p),
      (t[49] = q))
    : (q = t[49]);
  let J;
  t[50] !== N || t[51] !== fe || t[52] !== q
    ? ((J = (0, K.jsxs)(`div`, { className: U.field, children: [N, fe, q] })),
      (t[50] = N),
      (t[51] = fe),
      (t[52] = q),
      (t[53] = J))
    : (J = t[53]);
  let he;
  t[54] === te
    ? (he = t[55])
    : ((he = (0, K.jsx)(`p`, { className: U.title, children: te })), (t[54] = te), (t[55] = he));
  let Y;
  t[56] !== ne || t[57] !== l || t[58] !== c
    ? ((Y = (0, K.jsx)(pe.AddressElement, { options: ne, onReady: c, onChange: l })),
      (t[56] = ne),
      (t[57] = l),
      (t[58] = c),
      (t[59] = Y))
    : (Y = t[59]);
  let X;
  t[60] !== he || t[61] !== Y
    ? ((X = (0, K.jsxs)(`div`, { className: U.field, children: [he, Y] })),
      (t[60] = he),
      (t[61] = Y),
      (t[62] = X))
    : (X = t[62]);
  let Z;
  t[63] === u
    ? (Z = t[64])
    : ((Z = u ? (0, K.jsx)(`p`, { role: `alert`, className: U.error, children: u }) : null),
      (t[63] = u),
      (t[64] = Z));
  let Q;
  t[65] === d
    ? (Q = t[66])
    : ((Q = (0, K.jsx)(`div`, { className: U.action, children: d })), (t[65] = d), (t[66] = Q));
  let $;
  return (
    t[67] !== J || t[68] !== X || t[69] !== Z || t[70] !== Q
      ? (($ = (0, K.jsxs)(`div`, { className: U.form, children: [J, X, Z, Q] })),
        (t[67] = J),
        (t[68] = X),
        (t[69] = Z),
        (t[70] = Q),
        (t[71] = $))
      : ($ = t[71]),
    $
  );
}
var G, pe, me, K;
function q() {
  return (q = e(() => {
    ((G = c()), (pe = O()), (me = i()), W(), (K = s()));
  }))();
}
function J(e) {
  let t = (0, X.c)(20),
    { accountId: n, methodId: i, onCloseAutoFocus: a, onClose: o, onSuccess: s } = e,
    te = re(),
    c = se().getExperiment(`4048417348`).get(`enabled`, !1),
    { data: l, isPending: d, isError: f, refetch: p } = ne(ue(n, te.locale, c)),
    m;
  t[0] !== n || t[1] !== i
    ? ((m = {
        queryKey: [`consumer-billing`, n, `payment-method`, i],
        queryFn: (e) => {
          let { signal: t } = e;
          return ce.safeGet(`/payments/payment_method/{payment_method_id}`, {
            parameters: { path: { payment_method_id: i }, query: { account_id: n } },
            signal: t,
          });
        },
        staleTime: 0,
        retry: !1,
      }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = m))
    : (m = t[2]);
  let { data: h, isPending: g, isError: _, refetch: v } = ne(m),
    ae = r(),
    [oe, y] = (0, Q.useState)(!1),
    b;
  t[3] !== l || t[4] !== f || t[5] !== h || t[6] !== ae || t[7] !== _
    ? ((b = l != null && h != null && !_ && !f ? k(ae === !0, M(ae).variables) : void 0),
      (t[3] = l),
      (t[4] = f),
      (t[5] = h),
      (t[6] = ae),
      (t[7] = _),
      (t[8] = b))
    : (b = t[8]);
  let x = b,
    S = u,
    C;
  t[9] === a
    ? (C = t[10])
    : ((C = {
        "aria-describedby": void 0,
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), a());
        },
      }),
      (t[9] = a),
      (t[10] = C));
  let w = !oe,
    T;
  t[11] !== o || t[12] !== oe
    ? ((T = (e) => {
        !e && !oe && o();
      }),
      (t[11] = o),
      (t[12] = oe),
      (t[13] = T))
    : (T = t[13]);
  let E =
      l != null && h != null && x != null
        ? (0, $.jsx)(
            Z.Elements,
            {
              stripe: l.stripe,
              options: { appearance: x },
              children: (0, $.jsx)(Y, {
                accountId: n,
                method: h.payment_method,
                appearance: x,
                onSubmittingChange: y,
                onClose: o,
                onSuccess: s,
              }),
            },
            D(te.locale, `elements`, c),
          )
        : (0, $.jsx)(ee, {
            variant: `chatgpt`,
            children: (0, $.jsx)(de, {
              title: (0, $.jsx)(ie, { children: (0, $.jsx)(N, { children: (0, $.jsx)(he, {}) }) }),
              children: (0, $.jsx)(j, {
                kind: `payment`,
                loading: g || d,
                onRetry: () => {
                  Promise.all([v(), p()]);
                },
              }),
            }),
          }),
    O;
  return (
    t[14] !== S || t[15] !== T || t[16] !== E || t[17] !== C || t[18] !== w
      ? ((O = (0, $.jsx)(S, {
          open: !0,
          variant: `form`,
          widthHint: 540,
          contentOverflow: `visible`,
          contentPosition: `scrollable`,
          contentProps: C,
          showDialogClose: w,
          onOpenChange: T,
          children: E,
        })),
        (t[14] = S),
        (t[15] = T),
        (t[16] = E),
        (t[17] = C),
        (t[18] = w),
        (t[19] = O))
      : (O = t[19]),
    O
  );
}
function he() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(_, {
          id: `settings.consumerBilling.editPaymentMethod`,
          defaultMessage: `Edit payment method`,
          description: `Title for editing a saved card's expiration date and billing address`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Y(e) {
  let n = (0, X.c)(105),
    { accountId: r, method: i, appearance: a, onSubmittingChange: o, onClose: s, onSuccess: ne } = e,
    c = t(l),
    u = re(),
    d;
  n[0] === i.card
    ? (d = n[1])
    : ((d = i.card == null ? `` : String(i.card.exp_month).padStart(2, `0`)), (n[0] = i.card), (n[1] = d));
  let [p, m] = (0, Q.useState)(d),
    [h, g] = (0, Q.useState)(String(i.card?.exp_year ?? ``)),
    [v, se] = (0, Q.useState)(null),
    [y, x] = (0, Q.useState)(!0),
    [S, C] = (0, Q.useState)(!1),
    w,
    E,
    D;
  if (n[2] !== p || n[3] !== h) {
    let e = new Date(),
      t;
    (n[7] === p
      ? (t = n[8])
      : ((t = /^\d{1,2}$/.test(p) && Number(p) >= 1 && Number(p) <= 12), (n[7] = p), (n[8] = t)),
      (E = t));
    let r;
    (n[9] === h ? (r = n[10]) : ((r = /^\d{4}$/.test(h) && Number(h) >= 2e3), (n[9] = h), (n[10] = r)),
      (D = r),
      (w =
        E &&
        D &&
        (Number(h) > e.getFullYear() || (Number(h) === e.getFullYear() && Number(p) >= e.getMonth() + 1))),
      (n[2] = p),
      (n[3] = h),
      (n[4] = w),
      (n[5] = E),
      (n[6] = D));
  } else ((w = n[4]), (E = n[5]), (D = n[6]));
  let O = w,
    k;
  n[11] !== r ||
  n[12] !== v ||
  n[13] !== S ||
  n[14] !== y ||
  n[15] !== i.billing_details ||
  n[16] !== i.id ||
  n[17] !== p ||
  n[18] !== o ||
  n[19] !== O ||
  n[20] !== h
    ? ((k = async () => {
        if (!S || !y || !O) throw Error(`Incomplete card details`);
        (o(!0),
          await ce.safePatch(`/payments/payment_method/{payment_method_id}`, {
            parameters: { path: { payment_method_id: i.id } },
            requestBody: {
              account_id: r,
              card: { exp_month: Number(p), exp_year: Number(h) },
              billing_details:
                v == null ? void 0 : { ...i.billing_details, name: v.name, address: v.address },
            },
          }));
      }),
      (n[11] = r),
      (n[12] = v),
      (n[13] = S),
      (n[14] = y),
      (n[15] = i.billing_details),
      (n[16] = i.id),
      (n[17] = p),
      (n[18] = o),
      (n[19] = O),
      (n[20] = h),
      (n[21] = k))
    : (k = n[21]);
  let A;
  n[22] !== r || n[23] !== s || n[24] !== ne || n[25] !== c
    ? ((A = async () => {
        (await T(c, r), (ne ?? s)());
      }),
      (n[22] = r),
      (n[23] = s),
      (n[24] = ne),
      (n[25] = c),
      (n[26] = A))
    : (A = n[26]);
  let j;
  n[27] === o ? (j = n[28]) : ((j = () => o(!1)), (n[27] = o), (n[28] = j));
  let le;
  n[29] !== k || n[30] !== A || n[31] !== j
    ? ((le = { mutationFn: k, onSuccess: A, onSettled: j }),
      (n[29] = k),
      (n[30] = A),
      (n[31] = j),
      (n[32] = le))
    : (le = n[32]);
  let { mutate: ue, isPending: M, isError: P, error: F, reset: I } = ae(le),
    L;
  n[33] !== S || n[34] !== y || n[35] !== M || n[36] !== ue || n[37] !== O
    ? ((L = (e) => {
        (e.preventDefault(), S && y && O && !M && ue());
      }),
      (n[33] = S),
      (n[34] = y),
      (n[35] = M),
      (n[36] = ue),
      (n[37] = O),
      (n[38] = L))
    : (L = n[38]);
  let R;
  n[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(ie, { children: (0, $.jsx)(N, { children: (0, $.jsx)(he, {}) }) })), (n[39] = R))
    : (R = n[39]);
  let z, B;
  n[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, $.jsx)(_, {
        id: `settings.consumerBilling.expirationDate`,
        defaultMessage: `Expiration date`,
        description: `Heading for the month and year fields in the saved payment-method editor`,
      })),
      (z = (0, $.jsx)(_, {
        id: `settings.consumerBilling.expirationMonth`,
        defaultMessage: `Month`,
        description: `Label for the saved card's two-digit expiration month`,
      })),
      (n[40] = z),
      (n[41] = B))
    : ((z = n[40]), (B = n[41]));
  let V = !E,
    H;
  n[42] === u
    ? (H = n[43])
    : ((H = u.formatMessage({
        id: `settings.consumerBilling.expirationMonthPlaceholder`,
        defaultMessage: `MM`,
        description: `Placeholder indicating the two-digit card expiration month in the payment-method editor`,
      })),
      (n[42] = u),
      (n[43] = H));
  let U;
  n[44] === p
    ? (U = n[45])
    : ((U = () => {
        p.length === 1 && m(p.padStart(2, `0`));
      }),
      (n[44] = p),
      (n[45] = U));
  let W;
  n[46] !== P || n[47] !== I
    ? ((W = (e) => {
        (m(e.target.value.replace(/\D/g, ``).slice(0, 2)), P && I());
      }),
      (n[46] = P),
      (n[47] = I),
      (n[48] = W))
    : (W = n[48]);
  let G;
  n[49] !== M || n[50] !== p || n[51] !== V || n[52] !== H || n[53] !== U || n[54] !== W
    ? ((G = {
        autoFocus: !0,
        required: !0,
        "aria-invalid": V,
        disabled: M,
        placeholder: H,
        value: p,
        onBlur: U,
        onChange: W,
      }),
      (n[49] = M),
      (n[50] = p),
      (n[51] = V),
      (n[52] = H),
      (n[53] = U),
      (n[54] = W),
      (n[55] = G))
    : (G = n[55]);
  let pe;
  n[56] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(_, {
        id: `settings.consumerBilling.expirationYear`,
        defaultMessage: `Year`,
        description: `Label for the saved card's four-digit expiration year`,
      })),
      (n[56] = pe))
    : (pe = n[56]);
  let me = !D,
    K;
  n[57] === u
    ? (K = n[58])
    : ((K = u.formatMessage({
        id: `settings.consumerBilling.expirationYearPlaceholder`,
        defaultMessage: `YYYY`,
        description: `Placeholder indicating the four-digit card expiration year in the payment-method editor`,
      })),
      (n[57] = u),
      (n[58] = K));
  let q;
  n[59] !== P || n[60] !== I
    ? ((q = (e) => {
        (g(e.target.value.replace(/\D/g, ``).slice(0, 4)), P && I());
      }),
      (n[59] = P),
      (n[60] = I),
      (n[61] = q))
    : (q = n[61]);
  let J;
  n[62] !== M || n[63] !== me || n[64] !== K || n[65] !== q || n[66] !== h
    ? ((J = { required: !0, "aria-invalid": me, disabled: M, placeholder: K, value: h, onChange: q }),
      (n[62] = M),
      (n[63] = me),
      (n[64] = K),
      (n[65] = q),
      (n[66] = h),
      (n[67] = J))
    : (J = n[67]);
  let Y;
  n[68] === O
    ? (Y = n[69])
    : ((Y = O
        ? null
        : (0, $.jsx)(_, {
            id: `settings.consumerBilling.invalidExpirationDate`,
            defaultMessage: `Enter a valid expiration date`,
            description: `Validation under the saved card's expiration fields when the month or year is invalid or the card has expired`,
          })),
      (n[68] = O),
      (n[69] = Y));
  let Z;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, $.jsx)(_, {
        id: `settings.consumerBilling.billingAddress`,
        defaultMessage: `Billing address`,
        description: `Label for the postal address on billing invoices`,
      })),
      (n[70] = Z))
    : (Z = n[70]);
  let ge;
  n[71] === Symbol.for(`react.memo_cache_sentinel`) ? ((ge = [...b]), (n[71] = ge)) : (ge = n[71]);
  let _e = i.billing_details?.name ?? void 0,
    ve = i.billing_details?.address?.line1 ?? void 0,
    ye = i.billing_details?.address?.line2 ?? void 0,
    be = i.billing_details?.address?.city ?? void 0,
    xe = i.billing_details?.address?.state ?? void 0,
    Se = i.billing_details?.address?.postal_code ?? void 0,
    Ce = i.billing_details?.address?.country ?? ``,
    we;
  n[72] !== ve || n[73] !== ye || n[74] !== be || n[75] !== xe || n[76] !== Se || n[77] !== Ce
    ? ((we = { line1: ve, line2: ye, city: be, state: xe, postal_code: Se, country: Ce }),
      (n[72] = ve),
      (n[73] = ye),
      (n[74] = be),
      (n[75] = xe),
      (n[76] = Se),
      (n[77] = Ce),
      (n[78] = we))
    : (we = n[78]);
  let Te;
  n[79] !== _e || n[80] !== we
    ? ((Te = { mode: `billing`, allowedCountries: ge, defaultValues: { name: _e, address: we } }),
      (n[79] = _e),
      (n[80] = we),
      (n[81] = Te))
    : (Te = n[81]);
  let Ee;
  n[82] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ee = () => C(!0)), (n[82] = Ee)) : (Ee = n[82]);
  let De;
  n[83] !== P || n[84] !== I
    ? ((De = (e) => {
        (se(e.value), x(e.complete), P && I());
      }),
      (n[83] = P),
      (n[84] = I),
      (n[85] = De))
    : (De = n[85]);
  let Oe;
  n[86] !== F || n[87] !== P
    ? ((Oe = P
        ? (F != null && oe(F)?.message) ||
          (0, $.jsx)(_, {
            id: `settings.consumerBilling.editCardError`,
            defaultMessage: `Unable to update payment method. Please try again.`,
            description: `Error when updating a card's expiration date or billing address fails`,
          })
        : null),
      (n[86] = F),
      (n[87] = P),
      (n[88] = Oe))
    : (Oe = n[88]);
  let ke = M || !S || !y || !O,
    Ae;
  n[89] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(_, {
        id: `settings.consumerBilling.save`,
        defaultMessage: `Save`,
        description: `Button saving edits to consumer billing information or a saved card`,
      })),
      (n[89] = Ae))
    : (Ae = n[89]);
  let je;
  n[90] !== M || n[91] !== ke
    ? ((je = (0, $.jsx)(te, {
        children: (0, $.jsx)(f, {
          type: `submit`,
          color: `primary`,
          radius: `full`,
          size: `beaconAction`,
          loading: M,
          disabled: ke,
          children: Ae,
        }),
      })),
      (n[90] = M),
      (n[91] = ke),
      (n[92] = je))
    : (je = n[92]);
  let Me;
  n[93] !== a ||
  n[94] !== G ||
  n[95] !== J ||
  n[96] !== Y ||
  n[97] !== Te ||
  n[98] !== De ||
  n[99] !== Oe ||
  n[100] !== je
    ? ((Me = (0, $.jsx)(de, {
        title: R,
        children: (0, $.jsx)(fe, {
          appearance: a,
          expirationTitle: B,
          monthLabel: z,
          monthInput: G,
          yearLabel: pe,
          yearInput: J,
          expirationError: Y,
          billingAddressTitle: Z,
          addressElementOptions: Te,
          onAddressReady: Ee,
          onAddressChange: De,
          error: Oe,
          action: je,
        }),
      })),
      (n[93] = a),
      (n[94] = G),
      (n[95] = J),
      (n[96] = Y),
      (n[97] = Te),
      (n[98] = De),
      (n[99] = Oe),
      (n[100] = je),
      (n[101] = Me))
    : (Me = n[101]);
  let Ne;
  return (
    n[102] !== Me || n[103] !== L
      ? ((Ne = (0, $.jsx)(ee, { as: `form`, variant: `chatgpt`, onSubmit: L, children: Me })),
        (n[102] = Me),
        (n[103] = L),
        (n[104] = Ne))
      : (Ne = n[104]),
    Ne
  );
}
var X, Z, Q, $;
function ge() {
  return (ge = e(() => {
    ((X = c()),
      y(),
      q(),
      P(),
      E(),
      (Z = O()),
      v(),
      h(),
      m(),
      (Q = i()),
      d(),
      p(),
      o(),
      a(),
      n(),
      C(),
      S(),
      x(),
      g(),
      w(),
      A(),
      le(),
      ($ = s()));
  }))();
}
export { ge as n, J as t };
//# sourceMappingURL=edit-method-14d8ba5f8eb3.js.map
