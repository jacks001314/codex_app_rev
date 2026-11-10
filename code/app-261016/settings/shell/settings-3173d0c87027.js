import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  DB as i,
  LNt as a,
  OB as o,
  PBt as s,
  Qst as c,
  Smt as l,
  Vrt as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  ZSt as m,
  dy as h,
  ew as g,
  iCt as _,
  mCt as v,
  nCt as y,
  okt as b,
  qrt as ee,
  sct as x,
  sw as S,
  tkt as C,
  uw as w,
  uy as T,
  vst as E,
  yst as D,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  D3n as O,
  IMr as k,
  QF as te,
  RMr as A,
  bLr as j,
  c3n as M,
  cA as N,
  eI as P,
  iRr as F,
  lBr as I,
  o3n as L,
  s3n as R,
  sA as z,
  tyr as B,
  uBr as V,
  vLr as H,
  wLr as U,
  xMr as W,
  yMr as G,
} from "./app-initial-ad16eaadf81f.js";
var K;
function q() {
  return (q = e(() => {
    (m(),
      x(),
      B(),
      r(),
      I(),
      (K = v(c, ({ accountId: e, accountUserId: t, userId: n }, { get: r }) => ({
        queryKey: [`chatgpt-information-sharing-grants`, e, t, n],
        enabled: e != null && t != null && n != null && r(V, `1850361504`),
        staleTime: 0,
        queryFn: async ({ signal: t }) =>
          (
            await F.safeGet(`/user_information/grants`, {
              signal: t,
              expectedIdentity: e != null && n != null ? { accountId: e, userId: n } : void 0,
              additionalHeaders: e == null ? void 0 : { "ChatGPT-Account-ID": e, [l]: e },
            })
          ).grants.map((e) => ({ id: e.grant_id, appId: e.app_uri, providerName: e.provider_name })),
      }))));
  }))();
}
function J(e) {
  let r = (0, Y.c)(41),
    { onBack: a } = e,
    o = n(c),
    s = b(),
    u = _(k),
    d = _(H),
    p = _(j),
    m;
  r[0] !== u || r[1] !== d || r[2] !== p
    ? ((m = { accountId: u, accountUserId: d, userId: p }), (r[0] = u), (r[1] = d), (r[2] = p), (r[3] = m))
    : (m = r[3]);
  let { data: h, isPending: g, isError: v, isFetching: x, refetch: w } = y(K, m),
    E;
  r[4] === o
    ? (E = r[5])
    : ((E = async (e) => {
        let t = o.query.snapshot(K, {
          accountId: e.accountId,
          accountUserId: e.accountUserId,
          userId: e.userId,
        });
        (await F.safeDelete(`/user_information/grants/{grant_id}`, {
          parameters: { path: { grant_id: e.grantId } },
          expectedIdentity: { accountId: e.accountId, userId: e.userId },
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [l]: e.accountId },
        }),
          await t.cancel(),
          t.setData((t) => t?.filter((t) => t.id !== e.grantId)));
      }),
      (r[4] = o),
      (r[5] = E));
  let O = D({
    mutationFn: E,
    onSuccess: (e, t) => {
      A(L.CHATGPT_APP_AUTOFILL_ACTION_GRANT_REVOKED, t.appId);
    },
    onError: (e, t) => {
      (A(L.CHATGPT_APP_AUTOFILL_ACTION_GRANT_REVOKE_FAILED, t.appId),
        o.get(k) === t.accountId &&
          o.get(H) === t.accountUserId &&
          o.get(j) === t.userId &&
          o
            .get(ee)
            .danger(
              s.formatMessage({
                id: `settings.informationSharing.revokeFailed`,
                defaultMessage: `We couldn't revoke access. Try again.`,
                description: `Error toast shown on the app contact-information sharing settings page when ChatGPT cannot revoke one app's permission to automatically fill contact fields.`,
              }),
              { errorAnalytics: { toastId: `settings.informationSharing.revokeFailed` } },
            ));
    },
  });
  function A(e, t) {
    W(o, R, { action: e, appId: t, surface: M.CHATGPT_APP_AUTOFILL_SURFACE_SETTINGS });
  }
  let N;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(C, {
        id: `settings.informationSharing.title`,
        defaultMessage: `Information shared with apps`,
        description: `Title of the Data Controls settings page where a ChatGPT user manages app-specific permission to automatically fill account contact information.`,
      })),
      (r[6] = N))
    : (N = r[6]);
  let P, I;
  r[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, X.jsx)(i, { className: `rtl:rotate-180`, asset: T })),
      (I = (0, X.jsx)(C, {
        id: `settings.informationSharing.back`,
        defaultMessage: `Back`,
        description: `Accessible label for the button that returns from the app contact-information sharing settings page to the main Data Controls settings page.`,
      })),
      (r[7] = P),
      (r[8] = I))
    : ((P = r[7]), (I = r[8]));
  let B;
  r[9] === a
    ? (B = r[10])
    : ((B = (0, X.jsxs)(f, { color: `ghostActive`, size: `toolbar`, onClick: a, children: [P, I] })),
      (r[9] = a),
      (r[10] = B));
  let V;
  r[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(z.Header, {
        title: (0, X.jsx)(C, {
          id: `settings.informationSharing.appsHeading`,
          defaultMessage: `Apps with access`,
          description: `Heading above the list of third-party apps with durable permission to automatically receive matching contact information when the user fills out a form.`,
        }),
        subtitle: (0, X.jsx)(C, {
          id: `settings.informationSharing.apps.description.autofill`,
          defaultMessage: `Manage apps that can automatically fill your contact information`,
          description: `Supporting text below the Apps with access heading on the Data Controls information-sharing settings page. It explains that listed apps can fill the user's contact information without asking again.`,
        }),
      })),
      (r[11] = V))
    : (V = r[11]);
  let U = g || void 0,
    G;
  r[12] !== v || r[13] !== x || r[14] !== w
    ? ((G = v
        ? (0, X.jsx)(S, {
            label: (0, X.jsx)(`span`, {
              role: `alert`,
              children: (0, X.jsx)(C, {
                id: `settings.informationSharing.loadError`,
                defaultMessage: `We couldn't load your information sharing settings`,
                description: `Error-state message on the app contact-information sharing settings page when ChatGPT cannot load the user's existing app permissions.`,
              }),
            }),
            control: (0, X.jsx)(f, {
              color: `secondary`,
              size: `toolbar`,
              loading: x,
              onClick: () => void w(),
              children: (0, X.jsx)(C, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : null),
      (r[12] = v),
      (r[13] = x),
      (r[14] = w),
      (r[15] = G))
    : (G = r[15]);
  let q;
  r[16] !== v || r[17] !== g
    ? ((q =
        !v && g
          ? (0, X.jsx)(S, {
              label: (0, X.jsx)(`span`, {
                role: `status`,
                children: (0, X.jsx)(C, {
                  id: `settings.informationSharing.loading`,
                  defaultMessage: `Loading your information sharing settings…`,
                  description: `Loading-state text shown on the app contact-information sharing settings page while ChatGPT fetches the user's app-specific permissions.`,
                }),
              }),
              control: null,
            })
          : null),
      (r[16] = v),
      (r[17] = g),
      (r[18] = q))
    : (q = r[18]);
  let J;
  r[19] !== h || r[20] !== v || r[21] !== g
    ? ((J =
        !v && !g && h.length === 0
          ? (0, X.jsx)(S, {
              label: (0, X.jsx)(C, {
                id: `settings.informationSharing.noApps`,
                defaultMessage: `No apps are currently allowed to receive this information`,
                description: `Empty-state message on the Data Controls information-sharing settings page when the user has not granted any third-party app permission to automatically fill contact information.`,
              }),
              control: null,
            })
          : null),
      (r[19] = h),
      (r[20] = v),
      (r[21] = g),
      (r[22] = J))
    : (J = r[22]);
  let Z;
  r[23] !== u ||
  r[24] !== d ||
  r[25] !== h ||
  r[26] !== s ||
  r[27] !== v ||
  r[28] !== g ||
  r[29] !== O ||
  r[30] !== p
    ? ((Z =
        !v && !g
          ? h.map((e) =>
              (0, X.jsx)(
                S,
                {
                  label: e.providerName,
                  description: (0, X.jsx)(C, {
                    id: `settings.informationSharing.grant.information.label`,
                    defaultMessage: `Contact information`,
                    description: `Subtitle below an app's name in the Data Controls Apps with access list. It identifies contact information as the category of user data that the app may automatically fill into forms.`,
                  }),
                  control: (0, X.jsx)(f, {
                    "aria-label": s.formatMessage(
                      {
                        id: `settings.informationSharing.revokeProviderAriaLabel`,
                        defaultMessage: `Revoke contact information access for {providerName}`,
                        description: `Accessible label for the button that revokes one app's permission to automatically fill account contact information. Placeholder {providerName} is the trusted user-visible name of the third-party app.`,
                      },
                      { providerName: e.providerName },
                    ),
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: O.isPending || u == null || d == null || p == null,
                    loading: O.isPending && O.variables.grantId === e.id && O.variables.accountUserId === d,
                    onClick: () => {
                      u != null &&
                        d != null &&
                        p != null &&
                        O.mutate({
                          grantId: e.id,
                          appId: e.appId,
                          accountId: u,
                          accountUserId: d,
                          userId: p,
                        });
                    },
                    children: (0, X.jsx)(C, {
                      id: `settings.informationSharing.revoke`,
                      defaultMessage: `Revoke`,
                      description: `Short button label on the Data Controls information-sharing page. Selecting it immediately removes one named app's permission to automatically fill the user's contact information.`,
                    }),
                  }),
                },
                e.id,
              ),
            )
          : null),
      (r[23] = u),
      (r[24] = d),
      (r[25] = h),
      (r[26] = s),
      (r[27] = v),
      (r[28] = g),
      (r[29] = O),
      (r[30] = p),
      (r[31] = Z))
    : (Z = r[31]);
  let Q;
  r[32] !== q || r[33] !== J || r[34] !== Z || r[35] !== U || r[36] !== G
    ? ((Q = (0, X.jsxs)(z, {
        children: [
          V,
          (0, X.jsx)(z.Content, { children: (0, X.jsxs)(t, { "aria-busy": U, children: [G, q, J, Z] }) }),
        ],
      })),
      (r[32] = q),
      (r[33] = J),
      (r[34] = Z),
      (r[35] = U),
      (r[36] = G),
      (r[37] = Q))
    : (Q = r[37]);
  let $;
  return (
    r[38] !== Q || r[39] !== B
      ? (($ = (0, X.jsx)(te, { className: `select-none`, title: N, backSlot: B, children: Q })),
        (r[38] = Q),
        (r[39] = B),
        (r[40] = $))
      : ($ = r[40]),
    $
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = s()),
      O(),
      h(),
      E(),
      m(),
      x(),
      d(),
      A(),
      U(),
      B(),
      p(),
      o(),
      u(),
      G(),
      r(),
      P(),
      N(),
      w(),
      g(),
      q(),
      (X = a()));
  }))();
}
Z();
export { J as InformationSharingSettings };
//# sourceMappingURL=settings-3173d0c87027.js.map
