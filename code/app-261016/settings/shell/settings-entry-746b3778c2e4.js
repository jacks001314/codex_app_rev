import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  GSt as i,
  LNt as a,
  NSt as o,
  PBt as s,
  Qst as c,
  XOt as l,
  XSt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  iCt as m,
  nCt as h,
  sw as g,
  tkt as _,
  uw as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  IMr as y,
  imr as b,
  lBr as x,
  lLr as S,
  lNr as C,
  mBr as w,
  nMr as T,
  rmr as E,
  uBr as D,
} from "./app-initial-ad16eaadf81f.js";
import { n as O, t as k } from "./eligibility-ad39d272751d.js";
import { n as A, t as j } from "./migration-onboarding-1cc20ed60a83.js";
function M(e) {
  let t = (0, F.c)(5),
    { onTransferActiveChange: n } = e,
    { authMethod: r, accountId: i, userId: a } = b(),
    o = m(y);
  if (r !== `chatgpt` || i == null || a == null || i !== o) return null;
  let s = `${a}:${i}`,
    c;
  return (
    t[0] !== i || t[1] !== n || t[2] !== s || t[3] !== a
      ? ((c = (0, L.jsx)(N, { accountId: i, userId: a, onTransferActiveChange: n }, s)),
        (t[0] = i),
        (t[1] = n),
        (t[2] = s),
        (t[3] = a),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
function N(e) {
  let n = (0, F.c)(32),
    { accountId: r, userId: a, onTransferActiveChange: o } = e,
    s = t(c),
    l = i(),
    [f, p] = u(),
    v;
  n[0] === f ? (v = n[1]) : ((v = f.get(`action`)), (n[0] = f), (n[1] = v));
  let y = v === `merge`,
    b = m(w),
    x = h(D, `500944450`),
    [C, T] = (0, I.useState)(`closed`),
    [E, O] = (0, I.useState)(null),
    A = x || E != null,
    M;
  n[2] === A ? (M = n[3]) : ((M = { enabled: A }), (n[2] = A), (n[3] = M));
  let { data: N, isError: R, isFetching: z, refetch: B } = h(S, r, M),
    V = h(D, `3283824397`),
    H = h(D, `1439503871`),
    U;
  n[4] !== r || n[5] !== N || n[6] !== V || n[7] !== H || n[8] !== R || n[9] !== x || n[10] !== b
    ? ((U = N == null || R || b || !x ? null : k(N, r, V, H, `settings`)),
      (n[4] = r),
      (n[5] = N),
      (n[6] = V),
      (n[7] = H),
      (n[8] = R),
      (n[9] = x),
      (n[10] = b),
      (n[11] = U))
    : (U = n[11]);
  let W = U,
    G = E ?? W?.accounts,
    K;
  n[12] !== y || n[13] !== p
    ? ((K = function () {
        (T(`closed`), y && p(P, { replace: !0 }));
      }),
      (n[12] = y),
      (n[13] = p),
      (n[14] = K))
    : (K = n[14]);
  let q = K;
  if (C === `started`) return null;
  let J = W?.reason ?? `unavailable`;
  b ? (J = `loading`) : x && (R ? (J = z ? `loading` : `error`) : (N ?? (J = `loading`)));
  let Y;
  n[15] === G
    ? (Y = n[16])
    : ((Y =
        G != null &&
        (0, L.jsx)(g, {
          label: (0, L.jsx)(_, {
            id: `settings.chatGpt.dataControls.mergePersonalData`,
            defaultMessage: `Merge personal data`,
            description: `Data controls setting that lets an eligible Business workspace member transfer their personal ChatGPT data into the current workspace`,
          }),
          control: (e) =>
            (0, L.jsx)(d, {
              ...e,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => T(`open`),
              children: (0, L.jsx)(_, {
                id: `settings.chatGpt.dataControls.mergePersonalData.button`,
                defaultMessage: `Merge`,
                description: `Opens the overview for transferring personal ChatGPT data into the current Business workspace; does not start the transfer`,
              }),
            }),
        })),
      (n[15] = G),
      (n[16] = Y));
  let X;
  n[17] !== r ||
  n[18] !== q ||
  n[19] !== C ||
  n[20] !== G ||
  n[21] !== o ||
  n[22] !== y ||
  n[23] !== B ||
  n[24] !== s ||
  n[25] !== l ||
  n[26] !== J ||
  n[27] !== a
    ? ((X =
        (C === `open` || y) &&
        (0, L.jsx)(j, {
          accountId: r,
          userId: a,
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
            (O(e ? (G ?? null) : null), o(e));
          },
          onTransferStarted: () => {
            (s.query.cancel(S, r),
              s.query.setData(S, r, (e) =>
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
              T(`started`),
              o(!1),
              l.onClose());
          },
        })),
      (n[17] = r),
      (n[18] = q),
      (n[19] = C),
      (n[20] = G),
      (n[21] = o),
      (n[22] = y),
      (n[23] = B),
      (n[24] = s),
      (n[25] = l),
      (n[26] = J),
      (n[27] = a),
      (n[28] = X))
    : (X = n[28]);
  let Z;
  return (
    n[29] !== Y || n[30] !== X
      ? ((Z = (0, L.jsxs)(L.Fragment, { children: [Y, X] })), (n[29] = Y), (n[30] = X), (n[31] = Z))
      : (Z = n[31]),
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
    ((F = s()), p(), (I = r()), l(), o(), E(), C(), T(), f(), n(), v(), x(), O(), A(), (L = a()));
  }))();
}
R();
export { M as PersonalMigrationSettings };
//# sourceMappingURL=settings-entry-746b3778c2e4.js.map
