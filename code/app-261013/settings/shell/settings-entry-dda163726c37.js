import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Ixt as i,
  Nxt as a,
  Oxt as o,
  Pxt as s,
  Vxt as c,
  _xt as l,
  iw as u,
  jDt as d,
  t3 as f,
  tw as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  LMr as y,
  NDr as b,
  NPr as x,
  OPr as S,
  fur as C,
  kPr as w,
  pOr as T,
  pur as E,
  zOr as D,
} from "./app-initial-5851df3f6cb1.js";
import { a as O, i as k } from "./started-toast-a5d7b9a4a671.js";
import { n as A, t as j } from "./migration-onboarding-171bd0d04eb5.js";
function M(e) {
  let t = (0, F.c)(5),
    { onTransferActiveChange: n } = e,
    { authMethod: r, accountId: i, userId: a } = E(),
    o = c(T);
  if (r !== `chatgpt` || i == null || a == null || i !== o) return null;
  let s = `${a}:${i}`,
    l;
  return (
    t[0] !== i || t[1] !== n || t[2] !== s || t[3] !== a
      ? ((l = (0, L.jsx)(N, { accountId: i, userId: a, onTransferActiveChange: n }, s)),
        (t[0] = i),
        (t[1] = n),
        (t[2] = s),
        (t[3] = a),
        (t[4] = l))
      : (l = t[4]),
    l
  );
}
function N(e) {
  let s = (0, F.c)(32),
    { accountId: l, userId: u, onTransferActiveChange: d } = e,
    f = i(n),
    m = o(),
    [h, g] = a(),
    _;
  s[0] === h ? (_ = s[1]) : ((_ = h.get(`action`)), (s[0] = h), (s[1] = _));
  let b = _ === `merge`,
    S = c(x),
    C = v(w, `500944450`),
    [T, E] = (0, I.useState)(`closed`),
    [D, O] = (0, I.useState)(null),
    A = C || D != null,
    M;
  s[2] === A ? (M = s[3]) : ((M = { enabled: A }), (s[2] = A), (s[3] = M));
  let { data: N, isError: R, isFetching: z, refetch: B } = v(y, l, M),
    V = v(w, `3283824397`),
    H = v(w, `1439503871`),
    U;
  s[4] !== l || s[5] !== N || s[6] !== V || s[7] !== H || s[8] !== R || s[9] !== C || s[10] !== S
    ? ((U = N == null || R || S || !C ? null : k(N, l, V, H, `settings`)),
      (s[4] = l),
      (s[5] = N),
      (s[6] = V),
      (s[7] = H),
      (s[8] = R),
      (s[9] = C),
      (s[10] = S),
      (s[11] = U))
    : (U = s[11]);
  let W = U,
    G = D ?? W?.accounts,
    K;
  s[12] !== b || s[13] !== g
    ? ((K = function () {
        (E(`closed`), b && g(P, { replace: !0 }));
      }),
      (s[12] = b),
      (s[13] = g),
      (s[14] = K))
    : (K = s[14]);
  let q = K;
  if (T === `started`) return null;
  let J = W?.reason ?? `unavailable`;
  S ? (J = `loading`) : C && (R ? (J = z ? `loading` : `error`) : (N ?? (J = `loading`)));
  let Y;
  s[15] === G
    ? (Y = s[16])
    : ((Y =
        G != null &&
        (0, L.jsx)(p, {
          label: (0, L.jsx)(r, {
            id: `settings.chatGpt.dataControls.mergePersonalData`,
            defaultMessage: `Merge personal data`,
            description: `Data controls setting that lets an eligible Business workspace member transfer their personal ChatGPT data into the current workspace`,
          }),
          control: (e) =>
            (0, L.jsx)(t, {
              ...e,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => E(`open`),
              children: (0, L.jsx)(r, {
                id: `settings.chatGpt.dataControls.mergePersonalData.button`,
                defaultMessage: `Merge`,
                description: `Opens the overview for transferring personal ChatGPT data into the current Business workspace; does not start the transfer`,
              }),
            }),
        })),
      (s[15] = G),
      (s[16] = Y));
  let X;
  s[17] !== l ||
  s[18] !== q ||
  s[19] !== T ||
  s[20] !== G ||
  s[21] !== d ||
  s[22] !== b ||
  s[23] !== B ||
  s[24] !== f ||
  s[25] !== m ||
  s[26] !== J ||
  s[27] !== u
    ? ((X =
        (T === `open` || b) &&
        (0, L.jsx)(j, {
          accountId: l,
          userId: u,
          personalAccountId: G?.personalAccountId ?? null,
          isBusinessOwner: G?.destination.account_user_role === `account-owner`,
          settings: {
            onCancel: q,
            linkStatus:
              G == null
                ? {
                    status: J,
                    onRetry: () => {
                      B();
                    },
                  }
                : void 0,
          },
          onTransferActiveChange: (e) => {
            (O(e ? (G ?? null) : null), d(e));
          },
          onTransferStarted: () => {
            (f.query.cancel(y, l),
              f.query.setData(y, l, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      accounts: Object.fromEntries(
                        Object.entries(e.accounts).map((e) => {
                          let [t, n] = e;
                          return [
                            t,
                            n.account.account_id === G?.personalAccountId
                              ? { ...n, account: { ...n.account, is_deactivated: !0 } }
                              : n,
                          ];
                        }),
                      ),
                    },
              ),
              E(`started`),
              d(!1),
              m.onClose());
          },
        })),
      (s[17] = l),
      (s[18] = q),
      (s[19] = T),
      (s[20] = G),
      (s[21] = d),
      (s[22] = b),
      (s[23] = B),
      (s[24] = f),
      (s[25] = m),
      (s[26] = J),
      (s[27] = u),
      (s[28] = X))
    : (X = s[28]);
  let Z;
  return (
    s[29] !== Y || s[30] !== X
      ? ((Z = (0, L.jsxs)(L.Fragment, { children: [Y, X] })), (s[29] = Y), (s[30] = X), (s[31] = Z))
      : (Z = s[31]),
    Z
  );
}
function P(e) {
  let t = new URLSearchParams(e);
  return (t.delete(`action`), t);
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = m()), s(), (I = _()), d(), l(), C(), D(), b(), f(), h(), u(), S(), O(), A(), (L = g()));
  }))();
}
R();
export { M as PersonalMigrationSettings };
//# sourceMappingURL=settings-entry-dda163726c37.js.map
