import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  LNt as s,
  Mst as c,
  PBt as l,
  RH as u,
  TY as d,
  WO as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  dG as g,
  e6 as _,
  eB as v,
  ew as y,
  iw as b,
  jst as x,
  qO as S,
  tB as C,
  tkt as w,
  uw as T,
  vst as E,
  xK as D,
  yst as O,
} from "./app-shared-2feb3d4c6fcc.js";
import { imr as k, rmr as A } from "./app-initial-ad16eaadf81f.js";
import { n as j, t as M } from "./client-77d175e61121.js";
import { a as N, d as P, l as F, n as I } from "./reauth-16e255eb8b7c.js";
function L(e) {
  let r = (0, R.c)(41),
    { accountId: i, initialFactor: o, onPrepareReauthentication: s, onActivated: l, onClose: d } = e,
    { email: p } = k(),
    [h, _] = (0, z.useState)(o),
    y;
  r[0] === i ? (y = r[1]) : ((y = j(i)), (r[0] = i), (r[1] = y));
  let x;
  r[2] === y.mfa
    ? (x = r[3])
    : ((x = { ...y.mfa, staleTime: 0, refetchOnMount: `always` }), (r[2] = y.mfa), (r[3] = x));
  let { data: C, isFetching: T, isError: E } = c(x),
    A;
  r[4] === s
    ? (A = r[5])
    : ((A = {
        mutationFn: async (e) => {
          let t = await N({ action: `enable`, factor: e }, s());
          if (t === `failed`) throw Error(`MFA reauthentication failed`);
          return t;
        },
      }),
      (r[4] = s),
      (r[5] = A));
  let M = O(A);
  if (h != null) {
    let e = p ?? ``,
      t;
    r[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = () => _(void 0)), (r[6] = t)) : (t = r[6]);
    let n;
    return (
      r[7] !== i || r[8] !== h || r[9] !== l || r[10] !== e
        ? ((n = (0, B.jsx)(F, { accountId: i, email: e, factor: h, onActivated: l, onClose: t })),
          (r[7] = i),
          (r[8] = h),
          (r[9] = l),
          (r[10] = e),
          (r[11] = n))
        : (n = r[11]),
      n
    );
  }
  let P;
  r[12] === M
    ? (P = r[13])
    : ((P = (e) => {
        M.mutate(e, {
          onSuccess: (t) => {
            t === `ready` ? _(e) : typeof t == `object` && window.location.assign(t.redirectUrl);
          },
        });
      }),
      (r[12] = M),
      (r[13] = P));
  let I = P,
    L;
  r[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = { "aria-describedby": void 0 }), (r[14] = L))
    : (L = r[14]);
  let V;
  r[15] === d
    ? (V = r[16])
    : ((V = (e) => {
        e || d();
      }),
      (r[15] = d),
      (r[16] = V));
  let H;
  r[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, B.jsxs)(`span`, {
        className: `flex items-center gap-1`,
        children: [
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
          (0, B.jsx)(`span`, { className: `size-1.5 rounded-full bg-border` }),
        ],
      })),
      (r[17] = H))
    : (H = r[17]);
  let U;
  r[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, B.jsx)(`span`, {
        className: `flex size-14 shrink-0 items-center justify-center rounded-xl border border-default shadow-sm`,
        children: (0, B.jsx)(v, { className: `size-12` }),
      })),
      (r[18] = U))
    : (U = r[18]);
  let W;
  r[19] === Symbol.for(`react.memo_cache_sentinel`)
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
      (r[19] = W))
    : (W = r[19]);
  let G;
  r[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, B.jsx)(S, {
        className: `heading-lg text-center font-semibold`,
        children: (0, B.jsx)(w, {
          id: `apps.connectMfa.title`,
          defaultMessage: `Enable a second factor to continue`,
          description: `Title when connecting an app requires enabling multi-factor authentication on the user's ChatGPT account`,
        }),
      })),
      (r[20] = G))
    : (G = r[20]);
  let K;
  r[21] === T ? (K = r[22]) : ((K = T ? (0, B.jsx)(t, {}) : null), (r[21] = T), (r[22] = K));
  let q;
  r[23] !== E ||
  r[24] !== T ||
  r[25] !== C?.mfa_enabled_v2 ||
  r[26] !== C?.show_sms ||
  r[27] !== l ||
  r[28] !== M.isPending ||
  r[29] !== M.variables ||
  r[30] !== I
    ? ((q =
        !T &&
        (!E && C?.mfa_enabled_v2
          ? (0, B.jsx)(m, {
              color: `primary`,
              size: `large`,
              className: `w-full justify-center`,
              onClick: l,
              children: (0, B.jsx)(w, {
                id: `apps.connectMfa.continue`,
                defaultMessage: `Continue`,
                description: `Continues connecting the app after ChatGPT MFA has been enabled`,
              }),
            })
          : (0, B.jsxs)(n, {
              variant: `outlined`,
              children: [
                (0, B.jsx)(b, {
                  icon: (0, B.jsx)(g, {}),
                  label: (0, B.jsx)(w, {
                    id: `apps.connectMfa.authenticator`,
                    defaultMessage: `Authenticator App`,
                    description: `Starts authenticator-app MFA enrollment while connecting an app`,
                  }),
                  disabled: M.isPending,
                  onClick: () => I(`totp`),
                  trailing:
                    M.isPending && M.variables === `totp`
                      ? (0, B.jsx)(t, { className: `size-4` })
                      : (0, B.jsx)(u, {}),
                }),
                C?.show_sms
                  ? (0, B.jsx)(b, {
                      icon: (0, B.jsx)(D, {}),
                      label: (0, B.jsx)(w, {
                        id: `apps.connectMfa.sms`,
                        defaultMessage: `Text a code to your phone number`,
                        description: `Starts text-message MFA enrollment while connecting an app`,
                      }),
                      disabled: M.isPending,
                      onClick: () => I(`sms`),
                      trailing:
                        M.isPending && M.variables === `sms`
                          ? (0, B.jsx)(t, { className: `size-4` })
                          : (0, B.jsx)(u, {}),
                    })
                  : null,
              ],
            }))),
      (r[23] = E),
      (r[24] = T),
      (r[25] = C?.mfa_enabled_v2),
      (r[26] = C?.show_sms),
      (r[27] = l),
      (r[28] = M.isPending),
      (r[29] = M.variables),
      (r[30] = I),
      (r[31] = q))
    : (q = r[31]);
  let J;
  r[32] === M.isError
    ? (J = r[33])
    : ((J = M.isError
        ? (0, B.jsx)(`p`, {
            role: `alert`,
            className: `text-sm text-danger`,
            children: (0, B.jsx)(w, {
              id: `apps.connectMfa.failed`,
              defaultMessage: `Couldn’t start MFA setup. Please try again`,
              description: `Error when preparing MFA enrollment or preserving the pending app connection fails`,
            }),
          })
        : null),
      (r[32] = M.isError),
      (r[33] = J));
  let Y;
  r[34] !== K || r[35] !== q || r[36] !== J
    ? ((Y = (0, B.jsxs)(a, { className: `gap-6 px-6 pt-8 pb-6 select-none`, children: [W, G, K, q, J] })),
      (r[34] = K),
      (r[35] = q),
      (r[36] = J),
      (r[37] = Y))
    : (Y = r[37]);
  let X;
  return (
    r[38] !== Y || r[39] !== V
      ? ((X = (0, B.jsx)(f, {
          autoFocusCloseButton: !0,
          open: !0,
          size: `medium`,
          variant: `chatgpt`,
          contentProps: L,
          onOpenChange: V,
          children: Y,
        })),
        (r[38] = Y),
        (r[39] = V),
        (r[40] = X))
      : (X = r[40]),
    X
  );
}
var R, z, B;
function V() {
  return (V = e(() => {
    ((R = l()),
      E(),
      x(),
      (z = r()),
      p(),
      A(),
      h(),
      o(),
      i(),
      d(),
      _(),
      C(),
      M(),
      P(),
      I(),
      T(),
      y(),
      (B = s()));
  }))();
}
V();
export { L as AppConnectMfaDialog };
//# sourceMappingURL=app-connect-mfa-dialog-f0c30e3787d6.js.map
