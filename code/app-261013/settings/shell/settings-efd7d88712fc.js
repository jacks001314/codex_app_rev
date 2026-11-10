import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  IDt as r,
  Iot as i,
  Ixt as a,
  JC as o,
  Lot as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  Rv as d,
  VDt as ee,
  Vxt as f,
  Zxt as p,
  hot as m,
  iw as h,
  jDt as g,
  lot as _,
  qC as v,
  rst as y,
  spt as b,
  t3 as x,
  tw as S,
  vzt as C,
  wot as w,
  xMt as T,
  zv as E,
  zxt as D,
} from "./app-shared-bbfeca5e5737.js";
import {
  A1n as O,
  Ek as k,
  O1n as A,
  OPr as j,
  QDr as te,
  Tk as M,
  XDr as N,
  YMr as P,
  Ymr as F,
  _F as I,
  ehr as L,
  hF as R,
  hOr as z,
  k1n as B,
  kPr as V,
  pOr as H,
  q1n as U,
  qMr as W,
  tNr as G,
} from "./app-initial-5851df3f6cb1.js";
var K;
function q() {
  return (q = e(() => {
    (u(),
      y(),
      L(),
      w(),
      j(),
      (K = p(n, ({ accountId: e, accountUserId: t, userId: n }, { get: r }) => ({
        queryKey: [`chatgpt-information-sharing-grants`, e, t, n],
        enabled: e != null && t != null && n != null && r(V, `1850361504`),
        staleTime: 0,
        queryFn: async ({ signal: t }) =>
          (
            await F.safeGet(`/user_information/grants`, {
              signal: t,
              expectedIdentity: e != null && n != null ? { accountId: e, userId: n } : void 0,
              additionalHeaders: e == null ? void 0 : { "ChatGPT-Account-ID": e, [b]: e },
            })
          ).grants.map((e) => ({ id: e.grant_id, appId: e.app_uri, providerName: e.provider_name })),
      }))));
  }))();
}
function J(e) {
  let i = (0, Y.c)(41),
    { onBack: o } = e,
    l = a(n),
    u = ee(),
    p = f(H),
    h = f(W),
    g = f(P),
    _;
  i[0] !== p || i[1] !== h || i[2] !== g
    ? ((_ = { accountId: p, accountUserId: h, userId: g }), (i[0] = p), (i[1] = h), (i[2] = g), (i[3] = _))
    : (_ = i[3]);
  let { data: y, isPending: x, isError: C, isFetching: w, refetch: T } = D(K, _),
    E;
  i[4] === l
    ? (E = i[5])
    : ((E = async (e) => {
        let t = l.query.snapshot(K, {
          accountId: e.accountId,
          accountUserId: e.accountUserId,
          userId: e.userId,
        });
        (await F.safeDelete(`/user_information/grants/{grant_id}`, {
          parameters: { path: { grant_id: e.grantId } },
          expectedIdentity: { accountId: e.accountId, userId: e.userId },
          additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [b]: e.accountId },
        }),
          await t.cancel(),
          t.setData((t) => t?.filter((t) => t.id !== e.grantId)));
      }),
      (i[4] = l),
      (i[5] = E));
  let k = s({
    mutationFn: E,
    onSuccess: (e, t) => {
      j(A.CHATGPT_APP_AUTOFILL_ACTION_GRANT_REVOKED, t.appId);
    },
    onError: (e, t) => {
      (j(A.CHATGPT_APP_AUTOFILL_ACTION_GRANT_REVOKE_FAILED, t.appId),
        l.get(H) === t.accountId &&
          l.get(W) === t.accountUserId &&
          l.get(P) === t.userId &&
          l
            .get(m)
            .danger(
              u.formatMessage({
                id: `settings.informationSharing.revokeFailed`,
                defaultMessage: `We couldn't revoke access. Try again.`,
                description: `Error toast shown on the app contact-information sharing settings page when ChatGPT cannot revoke one app's permission to automatically fill contact fields.`,
              }),
              { errorAnalytics: { toastId: `settings.informationSharing.revokeFailed` } },
            ));
    },
  });
  function j(e, t) {
    te(l, B, { action: e, appId: t, surface: O.CHATGPT_APP_AUTOFILL_SURFACE_SETTINGS });
  }
  let N;
  i[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(r, {
        id: `settings.informationSharing.title`,
        defaultMessage: `Information shared with apps`,
        description: `Title of the Data Controls settings page where a ChatGPT user manages app-specific permission to automatically fill account contact information.`,
      })),
      (i[6] = N))
    : (N = i[6]);
  let I, L;
  i[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(c, { className: `rtl:rotate-180`, asset: d })),
      (L = (0, X.jsx)(r, {
        id: `settings.informationSharing.back`,
        defaultMessage: `Back`,
        description: `Accessible label for the button that returns from the app contact-information sharing settings page to the main Data Controls settings page.`,
      })),
      (i[7] = I),
      (i[8] = L))
    : ((I = i[7]), (L = i[8]));
  let z;
  i[9] === o
    ? (z = i[10])
    : ((z = (0, X.jsxs)(t, { color: `ghostActive`, size: `toolbar`, onClick: o, children: [I, L] })),
      (i[9] = o),
      (i[10] = z));
  let V;
  i[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, X.jsx)(M.Header, {
        title: (0, X.jsx)(r, {
          id: `settings.informationSharing.appsHeading`,
          defaultMessage: `Apps with access`,
          description: `Heading above the list of third-party apps with durable permission to automatically receive matching contact information when the user fills out a form.`,
        }),
        subtitle: (0, X.jsx)(r, {
          id: `settings.informationSharing.apps.description.autofill`,
          defaultMessage: `Manage apps that can automatically fill your contact information`,
          description: `Supporting text below the Apps with access heading on the Data Controls information-sharing settings page. It explains that listed apps can fill the user's contact information without asking again.`,
        }),
      })),
      (i[11] = V))
    : (V = i[11]);
  let U = x || void 0,
    G;
  i[12] !== C || i[13] !== w || i[14] !== T
    ? ((G = C
        ? (0, X.jsx)(S, {
            label: (0, X.jsx)(`span`, {
              role: `alert`,
              children: (0, X.jsx)(r, {
                id: `settings.informationSharing.loadError`,
                defaultMessage: `We couldn't load your information sharing settings`,
                description: `Error-state message on the app contact-information sharing settings page when ChatGPT cannot load the user's existing app permissions.`,
              }),
            }),
            control: (0, X.jsx)(t, {
              color: `secondary`,
              size: `toolbar`,
              loading: w,
              onClick: () => void T(),
              children: (0, X.jsx)(r, {
                id: `common.retry`,
                defaultMessage: `Retry`,
                description: `Button to retry an operation after an error`,
              }),
            }),
          })
        : null),
      (i[12] = C),
      (i[13] = w),
      (i[14] = T),
      (i[15] = G))
    : (G = i[15]);
  let q;
  i[16] !== C || i[17] !== x
    ? ((q =
        !C && x
          ? (0, X.jsx)(S, {
              label: (0, X.jsx)(`span`, {
                role: `status`,
                children: (0, X.jsx)(r, {
                  id: `settings.informationSharing.loading`,
                  defaultMessage: `Loading your information sharing settings…`,
                  description: `Loading-state text shown on the app contact-information sharing settings page while ChatGPT fetches the user's app-specific permissions.`,
                }),
              }),
              control: null,
            })
          : null),
      (i[16] = C),
      (i[17] = x),
      (i[18] = q))
    : (q = i[18]);
  let J;
  i[19] !== y || i[20] !== C || i[21] !== x
    ? ((J =
        !C && !x && y.length === 0
          ? (0, X.jsx)(S, {
              label: (0, X.jsx)(r, {
                id: `settings.informationSharing.noApps`,
                defaultMessage: `No apps are currently allowed to receive this information`,
                description: `Empty-state message on the Data Controls information-sharing settings page when the user has not granted any third-party app permission to automatically fill contact information.`,
              }),
              control: null,
            })
          : null),
      (i[19] = y),
      (i[20] = C),
      (i[21] = x),
      (i[22] = J))
    : (J = i[22]);
  let Z;
  i[23] !== p ||
  i[24] !== h ||
  i[25] !== y ||
  i[26] !== u ||
  i[27] !== C ||
  i[28] !== x ||
  i[29] !== k ||
  i[30] !== g
    ? ((Z =
        !C && !x
          ? y.map((e) =>
              (0, X.jsx)(
                S,
                {
                  label: e.providerName,
                  description: (0, X.jsx)(r, {
                    id: `settings.informationSharing.grant.information.label`,
                    defaultMessage: `Contact information`,
                    description: `Subtitle below an app's name in the Data Controls Apps with access list. It identifies contact information as the category of user data that the app may automatically fill into forms.`,
                  }),
                  control: (0, X.jsx)(t, {
                    "aria-label": u.formatMessage(
                      {
                        id: `settings.informationSharing.revokeProviderAriaLabel`,
                        defaultMessage: `Revoke contact information access for {providerName}`,
                        description: `Accessible label for the button that revokes one app's permission to automatically fill account contact information. Placeholder {providerName} is the trusted user-visible name of the third-party app.`,
                      },
                      { providerName: e.providerName },
                    ),
                    color: `secondary`,
                    size: `toolbar`,
                    disabled: k.isPending || p == null || h == null || g == null,
                    loading: k.isPending && k.variables.grantId === e.id && k.variables.accountUserId === h,
                    onClick: () => {
                      p != null &&
                        h != null &&
                        g != null &&
                        k.mutate({
                          grantId: e.id,
                          appId: e.appId,
                          accountId: p,
                          accountUserId: h,
                          userId: g,
                        });
                    },
                    children: (0, X.jsx)(r, {
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
      (i[23] = p),
      (i[24] = h),
      (i[25] = y),
      (i[26] = u),
      (i[27] = C),
      (i[28] = x),
      (i[29] = k),
      (i[30] = g),
      (i[31] = Z))
    : (Z = i[31]);
  let Q;
  i[32] !== q || i[33] !== J || i[34] !== Z || i[35] !== U || i[36] !== G
    ? ((Q = (0, X.jsxs)(M, {
        children: [
          V,
          (0, X.jsx)(M.Content, { children: (0, X.jsxs)(v, { "aria-busy": U, children: [G, q, J, Z] }) }),
        ],
      })),
      (i[32] = q),
      (i[33] = J),
      (i[34] = Z),
      (i[35] = U),
      (i[36] = G),
      (i[37] = Q))
    : (Q = i[37]);
  let $;
  return (
    i[38] !== Q || i[39] !== z
      ? (($ = (0, X.jsx)(R, { className: `select-none`, title: N, backSlot: z, children: Q })),
        (i[38] = Q),
        (i[39] = z),
        (i[40] = $))
      : ($ = i[40]),
    $
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = C()),
      U(),
      E(),
      i(),
      u(),
      y(),
      g(),
      z(),
      G(),
      L(),
      x(),
      l(),
      _(),
      N(),
      w(),
      I(),
      k(),
      h(),
      o(),
      q(),
      (X = T()));
  }))();
}
Z();
export { J as InformationSharingSettings };
//# sourceMappingURL=settings-efd7d88712fc.js.map
