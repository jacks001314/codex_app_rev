import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  HV as n,
  IDt as r,
  Iot as i,
  JC as a,
  Lot as o,
  QC as s,
  TJ as c,
  Xot as l,
  Yot as u,
  _O as d,
  az as f,
  fO as p,
  hW as m,
  i3 as h,
  iw as g,
  jDt as _,
  mO as v,
  oO as y,
  oz as b,
  qC as x,
  r3 as S,
  t3 as C,
  vO as w,
  vzt as T,
  wG as E,
  xMt as D,
  yzt as O,
} from "./app-shared-bbfeca5e5737.js";
import { fur as k, pur as A } from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./client-4ded20a1a3e9.js";
import { a as N, d as P, l as F, n as I } from "./reauth-d884ddea5c49.js";
function L(e) {
  let i = (0, R.c)(41),
    { accountId: a, initialFactor: c, onPrepareReauthentication: u, onActivated: p, onClose: h } = e,
    { email: g } = A(),
    [_, b] = (0, z.useState)(c),
    C;
  i[0] === a ? (C = i[1]) : ((C = j(a)), (i[0] = a), (i[1] = C));
  let w;
  i[2] === C.mfa
    ? (w = i[3])
    : ((w = { ...C.mfa, staleTime: 0, refetchOnMount: `always` }), (i[2] = C.mfa), (i[3] = w));
  let { data: T, isFetching: D, isError: O } = l(w),
    k;
  i[4] === u
    ? (k = i[5])
    : ((k = {
        mutationFn: async (e) => {
          let t = await N({ action: `enable`, factor: e }, u());
          if (t === `failed`) throw Error(`MFA reauthentication failed`);
          return t;
        },
      }),
      (i[4] = u),
      (i[5] = k));
  let M = o(k);
  if (_ != null) {
    let e = g ?? ``,
      t;
    i[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = () => b(void 0)), (i[6] = t)) : (t = i[6]);
    let n;
    return (
      i[7] !== a || i[8] !== _ || i[9] !== p || i[10] !== e
        ? ((n = (0, B.jsx)(F, { accountId: a, email: e, factor: _, onActivated: p, onClose: t })),
          (i[7] = a),
          (i[8] = _),
          (i[9] = p),
          (i[10] = e),
          (i[11] = n))
        : (n = i[11]),
      n
    );
  }
  let P;
  i[12] === M
    ? (P = i[13])
    : ((P = (e) => {
        M.mutate(e, {
          onSuccess: (t) => {
            t === `ready` ? b(e) : typeof t == `object` && window.location.assign(t.redirectUrl);
          },
        });
      }),
      (i[12] = M),
      (i[13] = P));
  let I = P,
    L;
  i[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = { "aria-describedby": void 0 }), (i[14] = L))
    : (L = i[14]);
  let V;
  i[15] === h
    ? (V = i[16])
    : ((V = (e) => {
        e || h();
      }),
      (i[15] = h),
      (i[16] = V));
  let H;
  i[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, B.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
        ],
      })),
      (i[17] = H))
    : (H = i[17]);
  let U;
  i[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, B.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl border border-default shadow-sm`,
        children: (0, B.jsx)(f, { className: `size-12` }),
      })),
      (i[18] = U))
    : (U = i[18]);
  let W;
  i[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, B.jsxs)(`div`, {
        className: `flex items-center justify-center gap-4`,
        "aria-hidden": !0,
        children: [
          H,
          U,
          (0, B.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [
              (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
              (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
              (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
            ],
          }),
        ],
      })),
      (i[19] = W))
    : (W = i[19]);
  let G;
  i[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, B.jsx)(d, {
        className: `heading-lg text-center font-semibold`,
        children: (0, B.jsx)(r, {
          id: `apps.connectMfa.title`,
          defaultMessage: `Enable a second factor to continue`,
          description: `Title when connecting an app requires enabling multi-factor authentication on the user's ChatGPT account`,
        }),
      })),
      (i[20] = G))
    : (G = i[20]);
  let K;
  i[21] === D ? (K = i[22]) : ((K = D ? (0, B.jsx)(S, {}) : null), (i[21] = D), (i[22] = K));
  let q;
  i[23] !== O ||
  i[24] !== D ||
  i[25] !== T?.mfa_enabled_v2 ||
  i[26] !== T?.show_sms ||
  i[27] !== p ||
  i[28] !== M.isPending ||
  i[29] !== M.variables ||
  i[30] !== I
    ? ((q =
        !D &&
        (!O && T?.mfa_enabled_v2
          ? (0, B.jsx)(t, {
              color: `primary`,
              size: `large`,
              className: `w-full justify-center`,
              onClick: p,
              children: (0, B.jsx)(r, {
                id: `apps.connectMfa.continue`,
                defaultMessage: `Continue`,
                description: `Continues connecting the app after ChatGPT MFA has been enabled`,
              }),
            })
          : (0, B.jsxs)(x, {
              variant: `outlined`,
              children: [
                (0, B.jsx)(s, {
                  icon: (0, B.jsx)(m, {}),
                  label: (0, B.jsx)(r, {
                    id: `apps.connectMfa.authenticator`,
                    defaultMessage: `Authenticator App`,
                    description: `Starts authenticator-app MFA enrollment while connecting an app`,
                  }),
                  disabled: M.isPending,
                  onClick: () => I(`totp`),
                  trailing:
                    M.isPending && M.variables === `totp`
                      ? (0, B.jsx)(S, { className: `size-4` })
                      : (0, B.jsx)(n, {}),
                }),
                T?.show_sms
                  ? (0, B.jsx)(s, {
                      icon: (0, B.jsx)(E, {}),
                      label: (0, B.jsx)(r, {
                        id: `apps.connectMfa.sms`,
                        defaultMessage: `Text a code to your phone number`,
                        description: `Starts text-message MFA enrollment while connecting an app`,
                      }),
                      disabled: M.isPending,
                      onClick: () => I(`sms`),
                      trailing:
                        M.isPending && M.variables === `sms`
                          ? (0, B.jsx)(S, { className: `size-4` })
                          : (0, B.jsx)(n, {}),
                    })
                  : null,
              ],
            }))),
      (i[23] = O),
      (i[24] = D),
      (i[25] = T?.mfa_enabled_v2),
      (i[26] = T?.show_sms),
      (i[27] = p),
      (i[28] = M.isPending),
      (i[29] = M.variables),
      (i[30] = I),
      (i[31] = q))
    : (q = i[31]);
  let J;
  i[32] === M.isError
    ? (J = i[33])
    : ((J = M.isError
        ? (0, B.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, B.jsx)(r, {
              id: `apps.connectMfa.failed`,
              defaultMessage: `Couldn’t start MFA setup. Please try again`,
              description: `Error when preparing MFA enrollment or preserving the pending app connection fails`,
            }),
          })
        : null),
      (i[32] = M.isError),
      (i[33] = J));
  let Y;
  i[34] !== K || i[35] !== q || i[36] !== J
    ? ((Y = (0, B.jsxs)(y, { className: `gap-6 px-6 pt-8 pb-6 select-none`, children: [W, G, K, q, J] })),
      (i[34] = K),
      (i[35] = q),
      (i[36] = J),
      (i[37] = Y))
    : (Y = i[37]);
  let X;
  return (
    i[38] !== Y || i[39] !== V
      ? ((X = (0, B.jsx)(v, {
          autoFocusCloseButton: !0,
          open: !0,
          size: `medium`,
          variant: `chatgpt`,
          contentProps: L,
          onOpenChange: V,
          children: Y,
        })),
        (i[38] = Y),
        (i[39] = V),
        (i[40] = X))
      : (X = i[40]),
    X
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = T()),
      i(),
      u(),
      (z = O()),
      _(),
      k(),
      C(),
      w(),
      p(),
      c(),
      h(),
      b(),
      M(),
      P(),
      I(),
      g(),
      a(),
      (B = D()));
  }))();
}
V();
export { L as AppConnectMfaDialog };
//# sourceMappingURL=app-connect-mfa-dialog-c944c7856482.js.map
