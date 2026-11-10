import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  Cot as r,
  EPt as i,
  Ext as a,
  Fat as o,
  IDt as s,
  Iot as c,
  Ixt as l,
  Lot as u,
  Pat as d,
  Pxt as f,
  TLt as p,
  Vxt as ee,
  Xot as te,
  Yot as m,
  _O as ne,
  _xt as h,
  fO as g,
  jDt as _,
  lO as re,
  mO as ie,
  oO as ae,
  pIt as v,
  pLt as oe,
  sO as se,
  t3 as y,
  vO as b,
  vzt as x,
  wot as S,
  xLt as C,
  xMt as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as E,
  Fur as D,
  Hur as O,
  Icr as k,
  Kur as ce,
  Pur as le,
  TPn as ue,
  Vur as de,
  git as A,
  hOr as fe,
  hit as pe,
  iPr as me,
  idr as j,
  jcr as M,
  mF as he,
  pF as N,
  pOr as ge,
  sPr as _e,
} from "./app-initial-5851df3f6cb1.js";
import { n as P, t as F } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as I, t as ve } from "./use-app-connect-flow-7088479fda99.js";
import { t as ye } from "./app-info-b43c099f07b0.js";
import { i as L, t as R } from "./queries-81f7f581f0b1.js";
import { n as be, t as xe } from "./dialog-messages-8f97c72ff067.js";
import { r as Se, t as Ce } from "./layout-22fca37fb177.js";
function z(e) {
  let t = (0, Ee.c)(57),
    { accountId: n, pluginId: i, templateId: o, onClose: c } = e,
    u = l(r),
    f = ee(ge),
    p;
  t[0] !== n || t[1] !== i || t[2] !== o
    ? ((p = [`plugins`, `personal-template-setup`, n, i, o]), (t[0] = n), (t[1] = i), (t[2] = o), (t[3] = p))
    : (p = t[3]);
  let m = f === n,
    h;
  t[4] !== n || t[5] !== i || t[6] !== o
    ? ((h = (e) => {
        let { signal: t } = e;
        return me.safeGet(`/ps/plugins/{plugin_id}/templates/{template_id}`, {
          surface: `connector_setup`,
          parameters: { path: { plugin_id: i, template_id: o } },
          additionalHeaders: { ...de(), "ChatGPT-Account-Id": n },
          signal: t,
        });
      }),
      (t[4] = n),
      (t[5] = i),
      (t[6] = o),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] !== p || t[9] !== m || t[10] !== h
    ? ((g = { queryKey: p, enabled: m, staleTime: d.ONE_MINUTE, retry: !1, queryFn: h }),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g))
    : (g = t[11]);
  let { data: _, isPending: v, isError: oe, refetch: se } = te(g),
    y = a(),
    [b, x] = (0, B.useState)(null),
    S;
  t[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = { hostId: M }), (t[12] = S)) : (S = t[12]);
  let { handleAppConnectOAuthStarted: C, handleAppConnected: w } = I(S);
  if (f !== n) return null;
  if (b != null) {
    let e = b.logo_url ?? null,
      r = b.logo_url_dark ?? null,
      a;
    t[13] !== b.description || t[14] !== b.id || t[15] !== b.name || t[16] !== e || t[17] !== r
      ? ((a = ye({
          id: b.id,
          name: b.name,
          description: b.description,
          iconUrl: e,
          iconUrlDark: r,
          distributionChannel: null,
          installUrl: null,
          pluginDisplayNames: [],
          toolSummaries: null,
        })),
        (t[13] = b.description),
        (t[14] = b.id),
        (t[15] = b.name),
        (t[16] = e),
        (t[17] = r),
        (t[18] = a))
      : (a = t[18]);
    let o;
    t[19] !== n || t[20] !== u
      ? ((o = async () => u.get(ge) === n), (t[19] = n), (t[20] = u), (t[21] = o))
      : (o = t[21]);
    let s;
    t[22] !== b.id || t[23] !== w || t[24] !== u.queryClient
      ? ((s = async () => {
          (w(b.id), await L(u.queryClient));
        }),
        (t[22] = b.id),
        (t[23] = w),
        (t[24] = u.queryClient),
        (t[25] = s))
      : (s = t[25]);
    let l;
    t[26] !== b.id || t[27] !== y || t[28] !== c || t[29] !== i
      ? ((l = (e) => {
          e || (c(), y(A(i, `apps`, b.id)));
        }),
        (t[26] = b.id),
        (t[27] = y),
        (t[28] = c),
        (t[29] = i),
        (t[30] = l))
      : (l = t[30]);
    let d;
    return (
      t[31] !== C || t[32] !== s || t[33] !== l || t[34] !== a || t[35] !== o
        ? ((d = (0, V.jsx)(F, {
            app: a,
            hostId: M,
            allowBrowserFallback: !1,
            beforeConnect: o,
            onOAuthStarted: C,
            onConnected: s,
            onOpenChange: l,
          })),
          (t[31] = C),
          (t[32] = s),
          (t[33] = l),
          (t[34] = a),
          (t[35] = o),
          (t[36] = d))
        : (d = t[36]),
      d
    );
  }
  let T;
  t[37] === _?.link_params_schema
    ? (T = t[38])
    : ((T = De.safeParse(_?.link_params_schema ?? {})), (t[37] = _?.link_params_schema), (t[38] = T));
  let E = T;
  if (
    _ != null &&
    !oe &&
    _.can_create !== !1 &&
    E.success &&
    (_.connector_type === `MCP` || _.connector_type === `SERVICE`)
  ) {
    let e;
    t[39] === u.queryClient
      ? (e = t[40])
      : ((e = (e) => {
          (u.queryClient.setQueryData(ce(e.id).queryKey, e), x(e), L(u.queryClient));
        }),
        (t[39] = u.queryClient),
        (t[40] = e));
    let r;
    return (
      t[41] !== n || t[42] !== E.data || t[43] !== c || t[44] !== i || t[45] !== e || t[46] !== _
        ? ((r = (0, V.jsx)(we, {
            accountId: n,
            pluginId: i,
            template: _,
            fields: E.data,
            onClose: c,
            onCreated: e,
          })),
          (t[41] = n),
          (t[42] = E.data),
          (t[43] = c),
          (t[44] = i),
          (t[45] = e),
          (t[46] = _),
          (t[47] = r))
        : (r = t[47]),
      r
    );
  }
  let D;
  t[48] === c
    ? (D = t[49])
    : ((D = (e) => {
        e || c();
      }),
      (t[48] = c),
      (t[49] = D));
  let O;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, V.jsx)(ne, {
        className: `select-none`,
        children: (0, V.jsx)(s, {
          id: `browserPluginSettings.templateSetup`,
          defaultMessage: `Set up connection`,
          description: `Title of the personal app connection setup dialog`,
        }),
      })),
      (t[50] = O))
    : (O = t[50]);
  let k;
  t[51] !== v || t[52] !== se
    ? ((k = (0, V.jsx)(ae, {
        children: (0, V.jsx)(re, {
          children: (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              O,
              v
                ? (0, V.jsx)(N, {})
                : (0, V.jsx)(Ce, {
                    onRetry: () => {
                      se();
                    },
                  }),
            ],
          }),
        }),
      })),
      (t[51] = v),
      (t[52] = se),
      (t[53] = k))
    : (k = t[53]);
  let le;
  return (
    t[54] !== D || t[55] !== k
      ? ((le = (0, V.jsx)(ie, { open: !0, onOpenChange: D, children: k })),
        (t[54] = D),
        (t[55] = k),
        (t[56] = le))
      : (le = t[56]),
    le
  );
}
function we(e) {
  let n = (0, Ee.c)(123),
    { accountId: i, pluginId: a, template: o, fields: c, onClose: f, onCreated: p } = e,
    ee = l(r),
    [m, h] = (0, B.useState)(o.name),
    [g, _] = (0, B.useState)(``),
    [v, oe] = (0, B.useState)(``),
    [y, b] = (0, B.useState)(``),
    x = o.connector_type === `MCP`,
    S;
  n[0] !== x || n[1] !== o.supported_auth_types
    ? ((S = !x && o.supported_auth_types?.some(Te)), (n[0] = x), (n[1] = o.supported_auth_types), (n[2] = S))
    : (S = n[2]);
  let C = S,
    w;
  n[3] !== v || n[4] !== y || n[5] !== C
    ? ((w = C || v.trim() !== `` || y.trim() !== ``), (n[3] = v), (n[4] = y), (n[5] = C), (n[6] = w))
    : (w = n[6]);
  let T = w,
    E;
  n[7] !== g || n[8] !== x ? ((E = x ? g.trim() : null), (n[7] = g), (n[8] = x), (n[9] = E)) : (E = n[9]);
  let D;
  n[10] !== i || n[11] !== E || n[12] !== o.template_id
    ? ((D = [`plugins`, `template-callback`, i, o.template_id, E]),
      (n[10] = i),
      (n[11] = E),
      (n[12] = o.template_id),
      (n[13] = D))
    : (D = n[13]);
  let O;
  n[14] !== g || n[15] !== T || n[16] !== x
    ? ((O = T && (!x || URL.canParse(g.trim()))), (n[14] = g), (n[15] = T), (n[16] = x), (n[17] = O))
    : (O = n[17]);
  let k;
  n[18] !== i || n[19] !== g || n[20] !== x
    ? ((k = (e) => {
        let { signal: t } = e;
        return me.safeGet(`/aip/connectors/oauth/callback_id`, {
          surface: `connector_setup`,
          parameters: { query: { mcp_url: x ? g.trim() : void 0 } },
          additionalHeaders: { ...le(), "ChatGPT-Account-Id": i },
          signal: t,
        });
      }),
      (n[18] = i),
      (n[19] = g),
      (n[20] = x),
      (n[21] = k))
    : (k = n[21]);
  let ce;
  n[22] !== D || n[23] !== O || n[24] !== k
    ? ((ce = { queryKey: D, enabled: O, staleTime: d.FIVE_MINUTES, retry: !1, queryFn: k }),
      (n[22] = D),
      (n[23] = O),
      (n[24] = k),
      (n[25] = ce))
    : (ce = n[25]);
  let { data: A, isError: fe, refetch: pe } = te(ce),
    j;
  n[26] !== i ||
  n[27] !== A?.callback_id ||
  n[28] !== v ||
  n[29] !== y ||
  n[30] !== g ||
  n[31] !== c ||
  n[32] !== T ||
  n[33] !== x ||
  n[34] !== m ||
  n[35] !== a ||
  n[36] !== ee ||
  n[37] !== o.description ||
  n[38] !== o.logo_url ||
  n[39] !== o.logo_url_dark ||
  n[40] !== o.oauth_client_info?.default_scopes ||
  n[41] !== o.template_id
    ? ((j = async (e) => {
        let t = () => {
          if (ee.get(ge) !== i) throw Error(`The selected account changed during plugin setup`);
        };
        t();
        let n = {
            parameters: { path: { plugin_id: a, template_id: o.template_id } },
            additionalHeaders: { ...de(), "ChatGPT-Account-Id": i },
          },
          r = {
            name: m.trim(),
            description: o.description,
            logo_url: o.logo_url,
            logo_url_dark: o.logo_url_dark,
            create_as_draft: !0,
          };
        if (x) {
          let e = await me.safePost(`/ps/plugins/{plugin_id}/templates/{template_id}/oauth-config`, {
            surface: `connector_setup`,
            ...n,
            requestBody: { mcp_url: g.trim() },
          });
          (t(), (r.mcp_url = g.trim()));
          let i;
          if (v.trim() !== ``) {
            let t = `client_secret_post`;
            (y.trim() === ``
              ? (t = `none`)
              : e.token_endpoint_auth_methods_supported?.includes(`client_secret_post`) === !1 &&
                e.token_endpoint_auth_methods_supported.includes(`client_secret_basic`) &&
                (t = `client_secret_basic`),
              (i = { client_id: v.trim(), client_secret: y.trim(), token_endpoint_auth_method: t }));
          }
          r.auth_request = {
            supported_auth: [e],
            oauth_client_params: i,
            use_cimd:
              (v.trim() === `` && !e.registration_url && e.client_id_metadata_document_supported === !0) ||
              void 0,
          };
        } else
          ((r.link_params = Object.fromEntries(
            Object.keys(c.properties ?? {}).map((t) => {
              let n = e.get(`param:${t}`);
              return [t, typeof n == `string` ? n.trim() : ``];
            }),
          )),
            o.template_id === `templated_apps_Databricks` &&
              ((r.additional_config = { workspace_host: g.trim() }), (r.link_params = void 0)),
            T &&
              ((r.oauth_client_id = v.trim()),
              (r.oauth_client_secret = y.trim()),
              (r.oauth_client_scopes = o.oauth_client_info?.default_scopes),
              (r.callback_id = A?.callback_id)));
        let s = await me.safePost(`/ps/plugins/{plugin_id}/templates/{template_id}/instantiate`, {
          ...n,
          surface: `connector_setup`,
          requestBody: r,
        });
        return (t(), s.connector);
      }),
      (n[26] = i),
      (n[27] = A?.callback_id),
      (n[28] = v),
      (n[29] = y),
      (n[30] = g),
      (n[31] = c),
      (n[32] = T),
      (n[33] = x),
      (n[34] = m),
      (n[35] = a),
      (n[36] = ee),
      (n[37] = o.description),
      (n[38] = o.logo_url),
      (n[39] = o.logo_url_dark),
      (n[40] = o.oauth_client_info?.default_scopes),
      (n[41] = o.template_id),
      (n[42] = j))
    : (j = n[42]);
  let M;
  n[43] !== p || n[44] !== j
    ? ((M = { mutationFn: j, onSuccess: p }), (n[43] = p), (n[44] = j), (n[45] = M))
    : (M = n[45]);
  let { mutate: he, isPending: N, isError: _e } = u(M),
    P;
  n[46] !== N || n[47] !== f
    ? ((P = (e) => {
        !e && !N && f();
      }),
      (n[46] = N),
      (n[47] = f),
      (n[48] = P))
    : (P = n[48]);
  let F;
  n[49] !== A || n[50] !== T || n[51] !== N || n[52] !== he || n[53] !== m
    ? ((F = (e) => {
        (e.preventDefault(), !N && m.trim() !== `` && (!T || A != null) && he(new FormData(e.currentTarget)));
      }),
      (n[49] = A),
      (n[50] = T),
      (n[51] = N),
      (n[52] = he),
      (n[53] = m),
      (n[54] = F))
    : (F = n[54]);
  let I;
  n[55] === o.name
    ? (I = n[56])
    : ((I = (0, V.jsx)(ne, {
        className: `select-none`,
        children: (0, V.jsx)(s, {
          id: `browserPluginSettings.templateSetupName`,
          defaultMessage: `Set up {name}`,
          description: `Title of the setup dialog for a personal app template; name is the provider`,
          values: { name: o.name },
        }),
      })),
      (n[55] = o.name),
      (n[56] = I));
  let ve;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, V.jsx)(s, {
        id: `browserPluginSettings.connectionName`,
        defaultMessage: `Connection name`,
        description: `Display name for a personal app connection`,
      })),
      (n[57] = ve))
    : (ve = n[57]);
  let ye;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (e) => h(e.target.value)), (n[58] = ye))
    : (ye = n[58]);
  let L;
  n[59] !== N || n[60] !== m
    ? ((L = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [ve, (0, V.jsx)(ue, { autoFocus: !0, required: !0, disabled: N, value: m, onChange: ye })],
      })),
      (n[59] = N),
      (n[60] = m),
      (n[61] = L))
    : (L = n[61]);
  let R;
  n[62] !== g ||
  n[63] !== c ||
  n[64] !== x ||
  n[65] !== N ||
  n[66] !== o.example_url ||
  n[67] !== o.template_id
    ? ((R =
        x || o.template_id === `templated_apps_Databricks`
          ? (0, V.jsxs)(`label`, {
              className: `flex flex-col gap-2`,
              children: [
                x
                  ? (0, V.jsx)(s, {
                      id: `browserPluginSettings.mcpUrl`,
                      defaultMessage: `MCP server URL`,
                      description: `URL of the user's hosted MCP server`,
                    })
                  : (0, V.jsx)(s, {
                      id: `browserPluginSettings.workspaceHostname`,
                      defaultMessage: `Workspace hostname`,
                      description: `Hostname of the user's Databricks workspace`,
                    }),
                (0, V.jsx)(ue, {
                  type: x ? `url` : `text`,
                  required: !0,
                  disabled: N,
                  placeholder: o.example_url ?? void 0,
                  value: g,
                  onChange: (e) => _(e.target.value),
                }),
              ],
            })
          : Object.entries(c.properties ?? {}).map((e) => {
              let [t, n] = e;
              return (0, V.jsxs)(
                `label`,
                {
                  className: `flex flex-col gap-2`,
                  children: [
                    n.title ?? t,
                    (0, V.jsx)(ue, {
                      name: `param:${t}`,
                      defaultValue: n.default,
                      required: c.required?.includes(t),
                      pattern: n.pattern,
                      disabled: N,
                    }),
                    n.description,
                  ],
                },
                t,
              );
            })),
      (n[62] = g),
      (n[63] = c),
      (n[64] = x),
      (n[65] = N),
      (n[66] = o.example_url),
      (n[67] = o.template_id),
      (n[68] = R))
    : (R = n[68]);
  let be;
  n[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, V.jsx)(s, {
        id: `browserPluginSettings.oauthClientId`,
        defaultMessage: `OAuth client ID`,
        description: `OAuth client identifier used to configure a personal app connection`,
      })),
      (n[69] = be))
    : (be = n[69]);
  let Se;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (e) => oe(e.target.value)), (n[70] = Se))
    : (Se = n[70]);
  let z;
  n[71] !== v || n[72] !== T || n[73] !== N
    ? ((z = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          be,
          (0, V.jsx)(ue, { autoComplete: `off`, required: T, disabled: N, value: v, onChange: Se }),
        ],
      })),
      (n[71] = v),
      (n[72] = T),
      (n[73] = N),
      (n[74] = z))
    : (z = n[74]);
  let we;
  n[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, V.jsx)(s, {
        id: `browserPluginSettings.oauthClientSecret`,
        defaultMessage: `OAuth client secret`,
        description: `OAuth client secret used to configure a personal app connection`,
      })),
      (n[75] = we))
    : (we = n[75]);
  let De = !x && T,
    H;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => b(e.target.value)), (n[76] = H))
    : (H = n[76]);
  let U;
  n[77] !== y || n[78] !== N || n[79] !== De
    ? ((U = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          we,
          (0, V.jsx)(ue, {
            type: `password`,
            autoComplete: `off`,
            required: De,
            disabled: N,
            value: y,
            onChange: H,
          }),
        ],
      })),
      (n[77] = y),
      (n[78] = N),
      (n[79] = De),
      (n[80] = U))
    : (U = n[80]);
  let W;
  n[81] === C
    ? (W = n[82])
    : ((W = C
        ? null
        : (0, V.jsx)(s, {
            id: `browserPluginSettings.optionalOauthClient`,
            defaultMessage: `Leave OAuth credentials blank to use automatic setup, when supported by your provider`,
            description: `Instructions for optional OAuth client credentials during personal app setup`,
          })),
      (n[81] = C),
      (n[82] = W));
  let G;
  n[83] !== A || n[84] !== T
    ? ((G =
        T && A != null
          ? (0, V.jsxs)(`label`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, V.jsx)(s, {
                  id: `browserPluginSettings.oauthCallbackUrl`,
                  defaultMessage: `OAuth callback URL`,
                  description: `URL to copy into the provider's OAuth client configuration`,
                }),
                (0, V.jsx)(ue, {
                  readOnly: !0,
                  value: new URL(
                    `/connector/oauth/${encodeURIComponent(A.callback_id)}`,
                    `https://chatgpt.com`,
                  ).href,
                }),
              ],
            })
          : null),
      (n[83] = A),
      (n[84] = T),
      (n[85] = G))
    : (G = n[85]);
  let K;
  n[86] !== fe || n[87] !== pe
    ? ((K = fe
        ? (0, V.jsx)(Ce, {
            onRetry: () => {
              pe();
            },
          })
        : null),
      (n[86] = fe),
      (n[87] = pe),
      (n[88] = K))
    : (K = n[88]);
  let q;
  n[89] === _e
    ? (q = n[90])
    : ((q = _e
        ? (0, V.jsx)(`span`, {
            role: `alert`,
            children: (0, V.jsx)(s, {
              id: `browserPluginSettings.templateSetupFailed`,
              defaultMessage: `Couldn't create the connection. Check the configuration and try again`,
              description: `Personal app template creation failed; the user can edit the setup and retry`,
            }),
          })
        : null),
      (n[89] = _e),
      (n[90] = q));
  let J;
  n[91] !== I ||
  n[92] !== L ||
  n[93] !== R ||
  n[94] !== z ||
  n[95] !== U ||
  n[96] !== W ||
  n[97] !== G ||
  n[98] !== K ||
  n[99] !== q
    ? ((J = (0, V.jsx)(re, {
        children: (0, V.jsxs)(`div`, {
          className: `flex w-full flex-col gap-4`,
          children: [I, L, R, z, U, W, G, K, q],
        }),
      })),
      (n[91] = I),
      (n[92] = L),
      (n[93] = R),
      (n[94] = z),
      (n[95] = U),
      (n[96] = W),
      (n[97] = G),
      (n[98] = K),
      (n[99] = q),
      (n[100] = J))
    : (J = n[100]);
  let Oe;
  n[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, V.jsx)(s, { ...xe.cancel })), (n[101] = Oe))
    : (Oe = n[101]);
  let Y;
  n[102] !== N || n[103] !== f
    ? ((Y = (0, V.jsx)(t, { color: `ghost`, disabled: N, onClick: f, children: Oe })),
      (n[102] = N),
      (n[103] = f),
      (n[104] = Y))
    : (Y = n[104]);
  let X;
  n[105] !== A || n[106] !== T || n[107] !== m
    ? ((X = m.trim() === `` || (T && A == null)), (n[105] = A), (n[106] = T), (n[107] = m), (n[108] = X))
    : (X = n[108]);
  let ke;
  n[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, V.jsx)(s, {
        id: `browserPluginSettings.createConnection`,
        defaultMessage: `Create connection`,
        description: `Create a configured personal app instance, then authenticate it`,
      })),
      (n[109] = ke))
    : (ke = n[109]);
  let Z;
  n[110] !== N || n[111] !== X
    ? ((Z = (0, V.jsx)(t, { type: `submit`, color: `primary`, loading: N, disabled: X, children: ke })),
      (n[110] = N),
      (n[111] = X),
      (n[112] = Z))
    : (Z = n[112]);
  let Q;
  n[113] !== Y || n[114] !== Z
    ? ((Q = (0, V.jsx)(re, { children: (0, V.jsxs)(se, { children: [Y, Z] }) })),
      (n[113] = Y),
      (n[114] = Z),
      (n[115] = Q))
    : (Q = n[115]);
  let $;
  n[116] !== F || n[117] !== J || n[118] !== Q
    ? (($ = (0, V.jsxs)(ae, { size: `viewport`, as: `form`, onSubmit: F, children: [J, Q] })),
      (n[116] = F),
      (n[117] = J),
      (n[118] = Q),
      (n[119] = $))
    : ($ = n[119]);
  let Ae;
  return (
    n[120] !== P || n[121] !== $
      ? ((Ae = (0, V.jsx)(ie, { open: !0, onOpenChange: P, children: $ })),
        (n[120] = P),
        (n[121] = $),
        (n[122] = Ae))
      : (Ae = n[122]),
    Ae
  );
}
function Te(e) {
  return e.client_credentials_required !== !1;
}
var Ee, B, V, De;
function H() {
  return (H = e(() => {
    ((Ee = x()),
      c(),
      m(),
      f(),
      (B = T()),
      _(),
      h(),
      i(),
      j(),
      D(),
      ve(),
      fe(),
      y(),
      b(),
      g(),
      E(),
      O(),
      k(),
      S(),
      o(),
      _e(),
      P(),
      he(),
      be(),
      Se(),
      pe(),
      R(),
      (V = w()),
      (De = oe({
        properties: C(
          p(),
          oe({
            type: n(`string`),
            title: p().optional(),
            description: p().optional(),
            pattern: p().optional(),
            default: p().optional(),
          }),
        ).optional(),
        required: v(p()).optional(),
      })));
  }))();
}
H();
export { z as PersonalTemplateSetup };
//# sourceMappingURL=personal-template-setup-3b7137016ae0.js.map
