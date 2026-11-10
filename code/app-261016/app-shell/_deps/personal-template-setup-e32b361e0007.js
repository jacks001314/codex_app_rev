import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bst as r,
  FBt as i,
  HFt as a,
  HO as o,
  IO as s,
  JO as c,
  LNt as l,
  LO as u,
  LRt as d,
  Mst as ee,
  NSt as f,
  PBt as p,
  Qst as te,
  USt as m,
  VRt as h,
  WO as ne,
  XOt as g,
  Y3 as re,
  Z3 as ie,
  ZSt as _,
  hRt as v,
  iCt as y,
  jst as b,
  kLt as x,
  kRt as S,
  qO as ae,
  tkt as C,
  vst as w,
  yst as oe,
  zO as se,
  zst as ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as T,
  Emr as E,
  Fat as D,
  IMr as le,
  Iat as O,
  Mmr as ue,
  Nmr as k,
  RMr as A,
  Rmr as de,
  Tfr as fe,
  Tmr as pe,
  XF as j,
  Xmr as me,
  ZF as he,
  ZLn as M,
  bfr as N,
  iRr as ge,
  sRr as _e,
} from "./app-initial-ad16eaadf81f.js";
import { n as P, t as F } from "./app-connect-modal-763ad0733e86.js";
import { n as I, t as ve } from "./use-app-connect-flow-7fc070fa8fd7.js";
import { t as ye } from "./app-info-b43c099f07b0.js";
import { i as L, t as R } from "./queries-22e0c4d59892.js";
import { n as be, t as xe } from "./dialog-messages-b1c8175cb346.js";
import { r as Se, t as Ce } from "./layout-ce42f141f852.js";
function z(e) {
  let n = (0, Ee.c)(57),
    { accountId: r, pluginId: i, templateId: a, onClose: o } = e,
    c = t(te),
    l = y(le),
    u;
  n[0] !== r || n[1] !== i || n[2] !== a
    ? ((u = [`plugins`, `personal-template-setup`, r, i, a]), (n[0] = r), (n[1] = i), (n[2] = a), (n[3] = u))
    : (u = n[3]);
  let d = l === r,
    f;
  n[4] !== r || n[5] !== i || n[6] !== a
    ? ((f = (e) => {
        let { signal: t } = e;
        return ge.safeGet(`/ps/plugins/{plugin_id}/templates/{template_id}`, {
          surface: `connector_setup`,
          parameters: { path: { plugin_id: i, template_id: a } },
          additionalHeaders: { ...ue(), "ChatGPT-Account-Id": r },
          signal: t,
        });
      }),
      (n[4] = r),
      (n[5] = i),
      (n[6] = a),
      (n[7] = f))
    : (f = n[7]);
  let p;
  n[8] !== u || n[9] !== d || n[10] !== f
    ? ((p = { queryKey: u, enabled: d, staleTime: ce.ONE_MINUTE, retry: !1, queryFn: f }),
      (n[8] = u),
      (n[9] = d),
      (n[10] = f),
      (n[11] = p))
    : (p = n[11]);
  let { data: h, isPending: g, isError: re, refetch: ie } = ee(p),
    _ = m(),
    [v, b] = (0, B.useState)(null),
    x;
  n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = { hostId: N }), (n[12] = x)) : (x = n[12]);
  let { handleAppConnectOAuthStarted: S, handleAppConnected: w } = I(x);
  if (l !== r) return null;
  if (v != null) {
    let e = v.logo_url ?? null,
      t = v.logo_url_dark ?? null,
      a;
    n[13] !== v.description || n[14] !== v.id || n[15] !== v.name || n[16] !== e || n[17] !== t
      ? ((a = ye({
          id: v.id,
          name: v.name,
          description: v.description,
          iconUrl: e,
          iconUrlDark: t,
          distributionChannel: null,
          installUrl: null,
          pluginDisplayNames: [],
          toolSummaries: null,
        })),
        (n[13] = v.description),
        (n[14] = v.id),
        (n[15] = v.name),
        (n[16] = e),
        (n[17] = t),
        (n[18] = a))
      : (a = n[18]);
    let s;
    n[19] !== r || n[20] !== c
      ? ((s = async () => c.get(le) === r), (n[19] = r), (n[20] = c), (n[21] = s))
      : (s = n[21]);
    let l;
    n[22] !== v.id || n[23] !== w || n[24] !== c.queryClient
      ? ((l = async () => {
          (w(v.id), await L(c.queryClient));
        }),
        (n[22] = v.id),
        (n[23] = w),
        (n[24] = c.queryClient),
        (n[25] = l))
      : (l = n[25]);
    let u;
    n[26] !== v.id || n[27] !== _ || n[28] !== o || n[29] !== i
      ? ((u = (e) => {
          e || (o(), _(O(i, `apps`, v.id)));
        }),
        (n[26] = v.id),
        (n[27] = _),
        (n[28] = o),
        (n[29] = i),
        (n[30] = u))
      : (u = n[30]);
    let d;
    return (
      n[31] !== S || n[32] !== l || n[33] !== u || n[34] !== a || n[35] !== s
        ? ((d = (0, V.jsx)(F, {
            app: a,
            hostId: N,
            allowBrowserFallback: !1,
            beforeConnect: s,
            onOAuthStarted: S,
            onConnected: l,
            onOpenChange: u,
          })),
          (n[31] = S),
          (n[32] = l),
          (n[33] = u),
          (n[34] = a),
          (n[35] = s),
          (n[36] = d))
        : (d = n[36]),
      d
    );
  }
  let oe;
  n[37] === h?.link_params_schema
    ? (oe = n[38])
    : ((oe = De.safeParse(h?.link_params_schema ?? {})), (n[37] = h?.link_params_schema), (n[38] = oe));
  let T = oe;
  if (
    h != null &&
    !re &&
    h.can_create !== !1 &&
    T.success &&
    (h.connector_type === `MCP` || h.connector_type === `SERVICE`)
  ) {
    let e;
    n[39] === c.queryClient
      ? (e = n[40])
      : ((e = (e) => {
          (c.queryClient.setQueryData(de(e.id).queryKey, e), b(e), L(c.queryClient));
        }),
        (n[39] = c.queryClient),
        (n[40] = e));
    let t;
    return (
      n[41] !== r || n[42] !== T.data || n[43] !== o || n[44] !== i || n[45] !== e || n[46] !== h
        ? ((t = (0, V.jsx)(we, {
            accountId: r,
            pluginId: i,
            template: h,
            fields: T.data,
            onClose: o,
            onCreated: e,
          })),
          (n[41] = r),
          (n[42] = T.data),
          (n[43] = o),
          (n[44] = i),
          (n[45] = e),
          (n[46] = h),
          (n[47] = t))
        : (t = n[47]),
      t
    );
  }
  let E;
  n[48] === o
    ? (E = n[49])
    : ((E = (e) => {
        e || o();
      }),
      (n[48] = o),
      (n[49] = E));
  let D;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, V.jsx)(ae, {
        className: `select-none`,
        children: (0, V.jsx)(C, {
          id: `browserPluginSettings.templateSetup`,
          defaultMessage: `Set up connection`,
          description: `Title of the personal app connection setup dialog`,
        }),
      })),
      (n[50] = D))
    : (D = n[50]);
  let k;
  n[51] !== g || n[52] !== ie
    ? ((k = (0, V.jsx)(s, {
        children: (0, V.jsx)(se, {
          children: (0, V.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [
              D,
              g
                ? (0, V.jsx)(j, {})
                : (0, V.jsx)(Ce, {
                    onRetry: () => {
                      ie();
                    },
                  }),
            ],
          }),
        }),
      })),
      (n[51] = g),
      (n[52] = ie),
      (n[53] = k))
    : (k = n[53]);
  let A;
  return (
    n[54] !== E || n[55] !== k
      ? ((A = (0, V.jsx)(ne, { open: !0, onOpenChange: E, children: k })),
        (n[54] = E),
        (n[55] = k),
        (n[56] = A))
      : (A = n[56]),
    A
  );
}
function we(e) {
  let n = (0, Ee.c)(123),
    { accountId: r, pluginId: i, template: a, fields: o, onClose: c, onCreated: l } = e,
    d = t(te),
    [f, p] = (0, B.useState)(a.name),
    [m, h] = (0, B.useState)(``),
    [g, ie] = (0, B.useState)(``),
    [_, v] = (0, B.useState)(``),
    y = a.connector_type === `MCP`,
    b;
  n[0] !== y || n[1] !== a.supported_auth_types
    ? ((b = !y && a.supported_auth_types?.some(Te)), (n[0] = y), (n[1] = a.supported_auth_types), (n[2] = b))
    : (b = n[2]);
  let x = b,
    S;
  n[3] !== g || n[4] !== _ || n[5] !== x
    ? ((S = x || g.trim() !== `` || _.trim() !== ``), (n[3] = g), (n[4] = _), (n[5] = x), (n[6] = S))
    : (S = n[6]);
  let w = S,
    T;
  n[7] !== m || n[8] !== y ? ((T = y ? m.trim() : null), (n[7] = m), (n[8] = y), (n[9] = T)) : (T = n[9]);
  let E;
  n[10] !== r || n[11] !== T || n[12] !== a.template_id
    ? ((E = [`plugins`, `template-callback`, r, a.template_id, T]),
      (n[10] = r),
      (n[11] = T),
      (n[12] = a.template_id),
      (n[13] = E))
    : (E = n[13]);
  let D;
  n[14] !== m || n[15] !== w || n[16] !== y
    ? ((D = w && (!y || URL.canParse(m.trim()))), (n[14] = m), (n[15] = w), (n[16] = y), (n[17] = D))
    : (D = n[17]);
  let O;
  n[18] !== r || n[19] !== m || n[20] !== y
    ? ((O = (e) => {
        let { signal: t } = e;
        return ge.safeGet(`/aip/connectors/oauth/callback_id`, {
          surface: `connector_setup`,
          parameters: { query: { mcp_url: y ? m.trim() : void 0 } },
          additionalHeaders: { ...pe(), "ChatGPT-Account-Id": r },
          signal: t,
        });
      }),
      (n[18] = r),
      (n[19] = m),
      (n[20] = y),
      (n[21] = O))
    : (O = n[21]);
  let k;
  n[22] !== E || n[23] !== D || n[24] !== O
    ? ((k = { queryKey: E, enabled: D, staleTime: ce.FIVE_MINUTES, retry: !1, queryFn: O }),
      (n[22] = E),
      (n[23] = D),
      (n[24] = O),
      (n[25] = k))
    : (k = n[25]);
  let { data: A, isError: de, refetch: fe } = ee(k),
    j;
  n[26] !== r ||
  n[27] !== A?.callback_id ||
  n[28] !== g ||
  n[29] !== _ ||
  n[30] !== m ||
  n[31] !== o ||
  n[32] !== w ||
  n[33] !== y ||
  n[34] !== f ||
  n[35] !== i ||
  n[36] !== d ||
  n[37] !== a.description ||
  n[38] !== a.logo_url ||
  n[39] !== a.logo_url_dark ||
  n[40] !== a.oauth_client_info?.default_scopes ||
  n[41] !== a.template_id
    ? ((j = async (e) => {
        let t = () => {
          if (d.get(le) !== r) throw Error(`The selected account changed during plugin setup`);
        };
        t();
        let n = {
            parameters: { path: { plugin_id: i, template_id: a.template_id } },
            additionalHeaders: { ...ue(), "ChatGPT-Account-Id": r },
          },
          s = {
            name: f.trim(),
            description: a.description,
            logo_url: a.logo_url,
            logo_url_dark: a.logo_url_dark,
            create_as_draft: !0,
          };
        if (y) {
          let e = await ge.safePost(`/ps/plugins/{plugin_id}/templates/{template_id}/oauth-config`, {
            surface: `connector_setup`,
            ...n,
            requestBody: { mcp_url: m.trim() },
          });
          (t(), (s.mcp_url = m.trim()));
          let r;
          if (g.trim() !== ``) {
            let t = `client_secret_post`;
            (_.trim() === ``
              ? (t = `none`)
              : e.token_endpoint_auth_methods_supported?.includes(`client_secret_post`) === !1 &&
                e.token_endpoint_auth_methods_supported.includes(`client_secret_basic`) &&
                (t = `client_secret_basic`),
              (r = { client_id: g.trim(), client_secret: _.trim(), token_endpoint_auth_method: t }));
          }
          s.auth_request = {
            supported_auth: [e],
            oauth_client_params: r,
            use_cimd:
              (g.trim() === `` && !e.registration_url && e.client_id_metadata_document_supported === !0) ||
              void 0,
          };
        } else
          ((s.link_params = Object.fromEntries(
            Object.keys(o.properties ?? {}).map((t) => {
              let n = e.get(`param:${t}`);
              return [t, typeof n == `string` ? n.trim() : ``];
            }),
          )),
            a.template_id === `templated_apps_Databricks` &&
              ((s.additional_config = { workspace_host: m.trim() }), (s.link_params = void 0)),
            w &&
              ((s.oauth_client_id = g.trim()),
              (s.oauth_client_secret = _.trim()),
              (s.oauth_client_scopes = a.oauth_client_info?.default_scopes),
              (s.callback_id = A?.callback_id)));
        let c = await ge.safePost(`/ps/plugins/{plugin_id}/templates/{template_id}/instantiate`, {
          ...n,
          surface: `connector_setup`,
          requestBody: s,
        });
        return (t(), c.connector);
      }),
      (n[26] = r),
      (n[27] = A?.callback_id),
      (n[28] = g),
      (n[29] = _),
      (n[30] = m),
      (n[31] = o),
      (n[32] = w),
      (n[33] = y),
      (n[34] = f),
      (n[35] = i),
      (n[36] = d),
      (n[37] = a.description),
      (n[38] = a.logo_url),
      (n[39] = a.logo_url_dark),
      (n[40] = a.oauth_client_info?.default_scopes),
      (n[41] = a.template_id),
      (n[42] = j))
    : (j = n[42]);
  let me;
  n[43] !== l || n[44] !== j
    ? ((me = { mutationFn: j, onSuccess: l }), (n[43] = l), (n[44] = j), (n[45] = me))
    : (me = n[45]);
  let { mutate: he, isPending: N, isError: _e } = oe(me),
    P;
  n[46] !== N || n[47] !== c
    ? ((P = (e) => {
        !e && !N && c();
      }),
      (n[46] = N),
      (n[47] = c),
      (n[48] = P))
    : (P = n[48]);
  let F;
  n[49] !== A || n[50] !== w || n[51] !== N || n[52] !== he || n[53] !== f
    ? ((F = (e) => {
        (e.preventDefault(), !N && f.trim() !== `` && (!w || A != null) && he(new FormData(e.currentTarget)));
      }),
      (n[49] = A),
      (n[50] = w),
      (n[51] = N),
      (n[52] = he),
      (n[53] = f),
      (n[54] = F))
    : (F = n[54]);
  let I;
  n[55] === a.name
    ? (I = n[56])
    : ((I = (0, V.jsx)(ae, {
        className: `select-none`,
        children: (0, V.jsx)(C, {
          id: `browserPluginSettings.templateSetupName`,
          defaultMessage: `Set up {name}`,
          description: `Title of the setup dialog for a personal app template; name is the provider`,
          values: { name: a.name },
        }),
      })),
      (n[55] = a.name),
      (n[56] = I));
  let ve;
  n[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (0, V.jsx)(C, {
        id: `browserPluginSettings.connectionName`,
        defaultMessage: `Connection name`,
        description: `Display name for a personal app connection`,
      })),
      (n[57] = ve))
    : (ve = n[57]);
  let ye;
  n[58] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (e) => p(e.target.value)), (n[58] = ye))
    : (ye = n[58]);
  let L;
  n[59] !== N || n[60] !== f
    ? ((L = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [ve, (0, V.jsx)(M, { autoFocus: !0, required: !0, disabled: N, value: f, onChange: ye })],
      })),
      (n[59] = N),
      (n[60] = f),
      (n[61] = L))
    : (L = n[61]);
  let R;
  n[62] !== m ||
  n[63] !== o ||
  n[64] !== y ||
  n[65] !== N ||
  n[66] !== a.example_url ||
  n[67] !== a.template_id
    ? ((R =
        y || a.template_id === `templated_apps_Databricks`
          ? (0, V.jsxs)(`label`, {
              className: `flex flex-col gap-2`,
              children: [
                y
                  ? (0, V.jsx)(C, {
                      id: `browserPluginSettings.mcpUrl`,
                      defaultMessage: `MCP server URL`,
                      description: `URL of the user's hosted MCP server`,
                    })
                  : (0, V.jsx)(C, {
                      id: `browserPluginSettings.workspaceHostname`,
                      defaultMessage: `Workspace hostname`,
                      description: `Hostname of the user's Databricks workspace`,
                    }),
                (0, V.jsx)(M, {
                  type: y ? `url` : `text`,
                  required: !0,
                  disabled: N,
                  placeholder: a.example_url ?? void 0,
                  value: m,
                  onChange: (e) => h(e.target.value),
                }),
              ],
            })
          : Object.entries(o.properties ?? {}).map((e) => {
              let [t, n] = e;
              return (0, V.jsxs)(
                `label`,
                {
                  className: `flex flex-col gap-2`,
                  children: [
                    n.title ?? t,
                    (0, V.jsx)(M, {
                      name: `param:${t}`,
                      defaultValue: n.default,
                      required: o.required?.includes(t),
                      pattern: n.pattern,
                      disabled: N,
                    }),
                    n.description,
                  ],
                },
                t,
              );
            })),
      (n[62] = m),
      (n[63] = o),
      (n[64] = y),
      (n[65] = N),
      (n[66] = a.example_url),
      (n[67] = a.template_id),
      (n[68] = R))
    : (R = n[68]);
  let be;
  n[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, V.jsx)(C, {
        id: `browserPluginSettings.oauthClientId`,
        defaultMessage: `OAuth client ID`,
        description: `OAuth client identifier used to configure a personal app connection`,
      })),
      (n[69] = be))
    : (be = n[69]);
  let Se;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (e) => ie(e.target.value)), (n[70] = Se))
    : (Se = n[70]);
  let z;
  n[71] !== g || n[72] !== w || n[73] !== N
    ? ((z = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          be,
          (0, V.jsx)(M, { autoComplete: `off`, required: w, disabled: N, value: g, onChange: Se }),
        ],
      })),
      (n[71] = g),
      (n[72] = w),
      (n[73] = N),
      (n[74] = z))
    : (z = n[74]);
  let we;
  n[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (0, V.jsx)(C, {
        id: `browserPluginSettings.oauthClientSecret`,
        defaultMessage: `OAuth client secret`,
        description: `OAuth client secret used to configure a personal app connection`,
      })),
      (n[75] = we))
    : (we = n[75]);
  let De = !y && w,
    H;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => v(e.target.value)), (n[76] = H))
    : (H = n[76]);
  let U;
  n[77] !== _ || n[78] !== N || n[79] !== De
    ? ((U = (0, V.jsxs)(`label`, {
        className: `flex flex-col gap-2`,
        children: [
          we,
          (0, V.jsx)(M, {
            type: `password`,
            autoComplete: `off`,
            required: De,
            disabled: N,
            value: _,
            onChange: H,
          }),
        ],
      })),
      (n[77] = _),
      (n[78] = N),
      (n[79] = De),
      (n[80] = U))
    : (U = n[80]);
  let W;
  n[81] === x
    ? (W = n[82])
    : ((W = x
        ? null
        : (0, V.jsx)(C, {
            id: `browserPluginSettings.optionalOauthClient`,
            defaultMessage: `Leave OAuth credentials blank to use automatic setup, when supported by your provider`,
            description: `Instructions for optional OAuth client credentials during personal app setup`,
          })),
      (n[81] = x),
      (n[82] = W));
  let G;
  n[83] !== A || n[84] !== w
    ? ((G =
        w && A != null
          ? (0, V.jsxs)(`label`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, V.jsx)(C, {
                  id: `browserPluginSettings.oauthCallbackUrl`,
                  defaultMessage: `OAuth callback URL`,
                  description: `URL to copy into the provider's OAuth client configuration`,
                }),
                (0, V.jsx)(M, {
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
      (n[84] = w),
      (n[85] = G))
    : (G = n[85]);
  let K;
  n[86] !== de || n[87] !== fe
    ? ((K = de
        ? (0, V.jsx)(Ce, {
            onRetry: () => {
              fe();
            },
          })
        : null),
      (n[86] = de),
      (n[87] = fe),
      (n[88] = K))
    : (K = n[88]);
  let q;
  n[89] === _e
    ? (q = n[90])
    : ((q = _e
        ? (0, V.jsx)(`span`, {
            role: `alert`,
            children: (0, V.jsx)(C, {
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
    ? ((J = (0, V.jsx)(se, {
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
    ? ((Oe = (0, V.jsx)(C, { ...xe.cancel })), (n[101] = Oe))
    : (Oe = n[101]);
  let Y;
  n[102] !== N || n[103] !== c
    ? ((Y = (0, V.jsx)(re, { color: `ghost`, disabled: N, onClick: c, children: Oe })),
      (n[102] = N),
      (n[103] = c),
      (n[104] = Y))
    : (Y = n[104]);
  let X;
  n[105] !== A || n[106] !== w || n[107] !== f
    ? ((X = f.trim() === `` || (w && A == null)), (n[105] = A), (n[106] = w), (n[107] = f), (n[108] = X))
    : (X = n[108]);
  let ke;
  n[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ke = (0, V.jsx)(C, {
        id: `browserPluginSettings.createConnection`,
        defaultMessage: `Create connection`,
        description: `Create a configured personal app instance, then authenticate it`,
      })),
      (n[109] = ke))
    : (ke = n[109]);
  let Z;
  n[110] !== N || n[111] !== X
    ? ((Z = (0, V.jsx)(re, { type: `submit`, color: `primary`, loading: N, disabled: X, children: ke })),
      (n[110] = N),
      (n[111] = X),
      (n[112] = Z))
    : (Z = n[112]);
  let Q;
  n[113] !== Y || n[114] !== Z
    ? ((Q = (0, V.jsx)(se, { children: (0, V.jsxs)(u, { children: [Y, Z] }) })),
      (n[113] = Y),
      (n[114] = Z),
      (n[115] = Q))
    : (Q = n[115]);
  let $;
  n[116] !== F || n[117] !== J || n[118] !== Q
    ? (($ = (0, V.jsxs)(s, { size: `viewport`, as: `form`, onSubmit: F, children: [J, Q] })),
      (n[116] = F),
      (n[117] = J),
      (n[118] = Q),
      (n[119] = $))
    : ($ = n[119]);
  let Ae;
  return (
    n[120] !== P || n[121] !== $
      ? ((Ae = (0, V.jsx)(ne, { open: !0, onOpenChange: P, children: $ })),
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
    ((Ee = p()),
      w(),
      b(),
      _(),
      (B = i()),
      g(),
      f(),
      a(),
      me(),
      E(),
      ve(),
      A(),
      ie(),
      c(),
      o(),
      T(),
      k(),
      fe(),
      n(),
      r(),
      _e(),
      P(),
      he(),
      be(),
      Se(),
      D(),
      R(),
      (V = l()),
      (De = S({
        properties: d(
          h(),
          S({
            type: v(`string`),
            title: h().optional(),
            description: h().optional(),
            pattern: h().optional(),
            default: h().optional(),
          }),
        ).optional(),
        required: x(h()).optional(),
      })));
  }))();
}
H();
export { z as PersonalTemplateSetup };
//# sourceMappingURL=personal-template-setup-e32b361e0007.js.map
