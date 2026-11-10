import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  AO as n,
  CL as r,
  CO as i,
  DV as a,
  Fat as o,
  GE as s,
  IDt as c,
  Iot as l,
  JC as u,
  Lot as d,
  MO as f,
  OK as p,
  Pat as m,
  Pxt as h,
  QL as g,
  TJ as _,
  TO as v,
  USt as y,
  Vxt as b,
  WE as x,
  Xot as S,
  YL as C,
  Yot as w,
  fW as T,
  frt as E,
  hrt as D,
  iw as O,
  jDt as k,
  jO as A,
  nst as ee,
  qC as te,
  tst as j,
  tw as ne,
  vzt as re,
  xL as ie,
  xMt as ae,
  zSt as M,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as oe,
  JPn as N,
  MRt as se,
  NRt as ce,
  QP as le,
  WMr as ue,
  XPn as de,
  YMr as fe,
  _F as pe,
  eF as me,
  fur as he,
  hF as ge,
  iPr as _e,
  mF as ve,
  pF as ye,
  pur as be,
  sPr as xe,
  tF as Se,
  tNr as Ce,
} from "./app-initial-5851df3f6cb1.js";
import { D as we, E as Te, T as Ee, m as P } from "./browser-use-origin-state-queries-27371f90f360.js";
import { n as De, t as Oe } from "./bundle-4201901f1e63.js";
import { a as F, i as ke, r as I, t as L } from "./browser-use-policy-site-permissions-a1cdbceb998d.js";
function Ae(e) {
  let t = (0, B.c)(45),
    { settings: n, enterprisePolicy: r, disabled: i, onUpdate: a, onWebMcpEnabledChange: o } = e,
    { preferences: s, rules: c } = n,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = (e, t) =>
        Object.entries(c[e] ?? {})
          .filter((e) => {
            let [, n] = e;
            return n === t;
          })
          .map(R)),
      (t[0] = c),
      (t[1] = l));
  let u = l,
    d = s.full_cdp_access_enabled ?? !1,
    f = s.webmcp_enabled ?? !0,
    p = U[s.approval_mode ?? `always_ask`],
    m = U[s.history_approval_mode ?? `always_ask`],
    h = U[s.iab_history_approval_mode ?? `always_ask`],
    g = U[s.download_approval_mode ?? `always_ask`],
    _ = U[s.upload_approval_mode ?? `always_ask`],
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D;
  t[2] === u
    ? ((v = t[3]),
      (y = t[4]),
      (b = t[5]),
      (x = t[6]),
      (S = t[7]),
      (C = t[8]),
      (w = t[9]),
      (T = t[10]),
      (E = t[11]),
      (D = t[12]))
    : ((D = u(`origin`, `allow`)),
      (v = u(`origin`, `deny`)),
      (y = u(`download`, `allow`)),
      (b = u(`download`, `deny`)),
      (x = u(`upload`, `allow`)),
      (S = u(`upload`, `deny`)),
      (C = u(`full_cdp`, `allow`)),
      (w = u(`full_cdp`, `deny`)),
      (T = u(`webmcp`, `allow`)),
      (E = u(`webmcp`, `deny`)),
      (t[2] = u),
      (t[3] = v),
      (t[4] = y),
      (t[5] = b),
      (t[6] = x),
      (t[7] = S),
      (t[8] = C),
      (t[9] = w),
      (t[10] = T),
      (t[11] = E),
      (t[12] = D));
  let O;
  t[13] !== v ||
  t[14] !== y ||
  t[15] !== b ||
  t[16] !== x ||
  t[17] !== S ||
  t[18] !== C ||
  t[19] !== w ||
  t[20] !== T ||
  t[21] !== E ||
  t[22] !== d ||
  t[23] !== f ||
  t[24] !== p ||
  t[25] !== m ||
  t[26] !== h ||
  t[27] !== g ||
  t[28] !== _ ||
  t[29] !== D
    ? ((O = {
        fullCdpAccessEnabled: d,
        webMcpEnabled: f,
        approvalMode: p,
        chromeHistoryApprovalMode: m,
        iabHistoryApprovalMode: h,
        downloadApprovalMode: g,
        uploadApprovalMode: _,
        allowedOrigins: D,
        deniedOrigins: v,
        allowedDownloadOrigins: y,
        deniedDownloadOrigins: b,
        allowedUploadOrigins: x,
        deniedUploadOrigins: S,
        allowedFullCdpOrigins: C,
        deniedFullCdpOrigins: w,
        allowedWebMcpOrigins: T,
        deniedWebMcpOrigins: E,
      }),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = d),
      (t[23] = f),
      (t[24] = p),
      (t[25] = m),
      (t[26] = h),
      (t[27] = g),
      (t[28] = _),
      (t[29] = D),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== a || t[32] !== n.revision
    ? ((k = async (e, t) => {
        await a({
          expected_revision: n.revision,
          preferences: { [H[e]]: t === `neverAsk` ? `never_ask` : `always_ask` },
        });
      }),
      (t[31] = a),
      (t[32] = n.revision),
      (t[33] = k))
    : (k = t[33]);
  let A;
  t[34] !== a || t[35] !== c || t[36] !== n.revision
    ? ((A = async (e) => {
        let { operation: t, origin: r, nextValues: i, resources: o } = e,
          s = o.flatMap((e) => {
            if (e === `fullCdp`) return [];
            let n = e === `webMcp` ? `webmcp` : e,
              a = t === `remove` ? `default` : i[e];
            if (a === `ask`) throw Error(`Explicit per-site approval is not supported`);
            return a === "default" && c[n]?.[r] == null ? [] : [{ resource: n, pattern: r, decision: W[a] }];
          });
        s.length > 0 && (await a({ expected_revision: n.revision, rule_updates: s }));
      }),
      (t[34] = a),
      (t[35] = c),
      (t[36] = n.revision),
      (t[37] = A))
    : (A = t[37]);
  let ee;
  return (
    t[38] !== i || t[39] !== r || t[40] !== o || t[41] !== O || t[42] !== k || t[43] !== A
      ? ((ee = (0, V.jsx)(L, {
          backend: `chrome`,
          enterprisePolicy: r,
          disabled: i,
          isError: !1,
          isFullCdpAccessEnabled: !1,
          isLoading: !1,
          showWebMcp: !0,
          supportsRequiresApproval: !1,
          supportsClearingDefaultsOnAdd: !0,
          onWebMcpEnabledChange: o,
          parseOrigin: z,
          originsConfig: O,
          onApprovalModeChange: k,
          onSitePermissionsChange: A,
        })),
        (t[38] = i),
        (t[39] = r),
        (t[40] = o),
        (t[41] = O),
        (t[42] = k),
        (t[43] = A),
        (t[44] = ee))
      : (ee = t[44]),
    ee
  );
}
function R(e) {
  let [t] = e;
  return t;
}
function z(e) {
  return e.length > 0 && Array.from(e).length <= 4096 && !/[\p{White_Space}\p{C}]/u.test(e) ? e : null;
}
var B, V, H, U, W;
function G() {
  return (G = e(() => {
    ((B = re()),
      I(),
      (V = ae()),
      (H = { origin: `approval_mode`, download: `download_approval_mode`, upload: `upload_approval_mode` }),
      (U = { always_ask: `alwaysAsk`, never_ask: `neverAsk`, disabled: `disabled` }),
      (W = { default: null, allowed: `allow`, denied: `deny` }));
  }))();
}
var je, Me;
function K() {
  return (K = e(() => {
    ((je = [`browser-settings`]), (Me = [`browser-cloud-requirements`]));
  }))();
}
function Ne(e) {
  let t = (0, q.c)(33),
    n,
    r,
    o,
    s,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (o = t[3]), (s = t[4]), (l = t[5]), (u = t[6]))
    : (({ value: u, options: l, disabled: r, managed: o, onChange: s, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s),
      (t[5] = l),
      (t[6] = u));
  let d = r || o,
    f = r || o,
    p;
  t[7] === o
    ? (p = t[8])
    : ((p = o ? (0, J.jsx)(T, { className: `text-secondary` }) : null), (t[7] = o), (t[8] = p));
  let m;
  t[9] !== l || t[10] !== u
    ? ((m = l.find((e) => e.value === u)?.label), (t[9] = l), (t[10] = u), (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === m ? (h = t[13]) : ((h = (0, J.jsx)(c, { ...m })), (t[12] = m), (t[13] = h));
  let g;
  t[14] !== n || t[15] !== f || t[16] !== p || t[17] !== h
    ? ((g = (0, J.jsxs)(le, { ...n, color: `ghost`, disabled: f, children: [p, h] })),
      (t[14] = n),
      (t[15] = f),
      (t[16] = p),
      (t[17] = h),
      (t[18] = g))
    : (g = t[18]);
  let _;
  if (t[19] !== s || t[20] !== l || t[21] !== u) {
    let e;
    (t[23] !== s || t[24] !== u
      ? ((e = (e) =>
          (0, J.jsx)(
            v.Item,
            {
              disabled: e.disabled,
              rightIcon: u === e.value ? (0, J.jsx)(a, {}) : void 0,
              onClick: () => s(e.value),
              children: (0, J.jsx)(c, { ...e.label }),
            },
            e.value,
          )),
        (t[23] = s),
        (t[24] = u),
        (t[25] = e))
      : (e = t[25]),
      (_ = l.map(e)),
      (t[19] = s),
      (t[20] = l),
      (t[21] = u),
      (t[22] = _));
  } else _ = t[22];
  let y;
  t[26] !== d || t[27] !== g || t[28] !== _
    ? ((y = (0, J.jsx)(i, { disabled: d, triggerButton: g, children: _ })),
      (t[26] = d),
      (t[27] = g),
      (t[28] = _),
      (t[29] = y))
    : (y = t[29]);
  let b;
  return (
    t[30] !== o || t[31] !== y
      ? ((b = (0, J.jsx)(ke, { managed: o, children: y })), (t[30] = o), (t[31] = y), (t[32] = b))
      : (b = t[32]),
    b
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = re()), k(), n(), _(), Se(), F(), (J = ae()));
  }))();
}
var X, Pe;
function Z() {
  return (Z = e(() => {
    (k(),
      (X = t({
        autoApprove: {
          id: `settings.chromeExtension.autoApprove`,
          defaultMessage: `Auto-approve`,
          description: `Permission option that lets ChatGPT browse websites, download or upload files, or access browsing history without asking first`,
        },
        alwaysAsk: {
          id: `settings.chromeExtension.alwaysAsk`,
          defaultMessage: `Always ask`,
          description: `Permission option that asks the user before browsing websites, downloading or uploading files, or accessing browsing history`,
        },
      })),
      (Pe = [
        { value: `never_ask`, label: X.autoApprove },
        { value: `always_ask`, label: X.alwaysAsk },
      ]));
  }))();
}
function Q() {
  let e = (0, Le.c)(73),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((t = ie()), (e[0] = t)) : (t = e[0]);
  let n = t,
    { accountId: r, userId: i, authMethod: a, isLoading: o } = be(),
    s = ee(),
    l = b(ue),
    u = b(oe),
    f = b(fe),
    h;
  e[1] !== r || e[2] !== a || e[3] !== u || e[4] !== f || e[5] !== o || e[6] !== i
    ? ((h =
        !o && a === `chatgpt` && r != null && i != null && r === u && i === f
          ? { accountId: r, userId: i }
          : null),
      (e[1] = r),
      (e[2] = a),
      (e[3] = u),
      (e[4] = f),
      (e[5] = o),
      (e[6] = i),
      (e[7] = h))
    : (h = e[7]);
  let g = h,
    _;
  e[8] !== r || e[9] !== i ? ((_ = [...je, i, r]), (e[8] = r), (e[9] = i), (e[10] = _)) : (_ = e[10]);
  let v = _,
    w;
  e[11] !== r || e[12] !== i ? ((w = [...Me, i, r]), (e[11] = r), (e[12] = i), (e[13] = w)) : (w = e[13]);
  let E = w,
    O;
  e[14] === g
    ? (O = e[15])
    : ((O =
        g == null
          ? y
          : (e) => {
              let { signal: t } = e;
              return _e.safeGet(`/wham/browser/settings`, { signal: t, expectedIdentity: g, retry: !1 });
            }),
      (e[14] = g),
      (e[15] = O));
  let k;
  e[16] !== v || e[17] !== O
    ? ((k = { queryKey: v, queryFn: O, staleTime: m.ONE_MINUTE, retry: !1 }),
      (e[16] = v),
      (e[17] = O),
      (e[18] = k))
    : (k = e[18]);
  let { data: j, isPending: re, isError: ae, isFetching: M } = S(k),
    N;
  e[19] !== l || e[20] !== g
    ? ((N =
        g == null || l.status !== `loaded`
          ? y
          : async (e) => {
              let { signal: t } = e;
              return l.structure === `personal`
                ? { supportsIndependentSpeedModes: null, requirements: null }
                : De(await _e.safeGet(`/wham/config/bundle`, { signal: t, expectedIdentity: g, retry: !1 }));
            }),
      (e[19] = l),
      (e[20] = g),
      (e[21] = N))
    : (N = e[21]);
  let ce;
  e[22] !== E || e[23] !== N
    ? ((ce = {
        queryKey: E,
        queryFn: N,
        staleTime: m.FIVE_MINUTES,
        refetchInterval: m.FIVE_MINUTES,
        refetchIntervalInBackground: !0,
        refetchOnWindowFocus: `always`,
        retry: !1,
      }),
      (e[22] = E),
      (e[23] = N),
      (e[24] = ce))
    : (ce = e[24]);
  let { data: le, isPending: de, isError: pe, isFetching: he } = S(ce),
    ve;
  e[25] === s
    ? (ve = e[26])
    : ((ve = {
        mutationFn: async (e) => {
          let { requestBody: t, identity: n } = e,
            r = [...je, n.userId, n.accountId];
          try {
            await s.cancelQueries({ queryKey: r });
            let e = await _e.safePatch(`/wham/browser/settings`, {
              requestBody: t,
              expectedIdentity: n,
              retry: !1,
              expectedErrorStatuses: [400, 409, 422],
            });
            return (
              await s.cancelQueries({ queryKey: r }),
              s.setQueryData(r, e),
              window.dispatchEvent(new Event(C)),
              e
            );
          } catch (e) {
            let t = e;
            throw (await s.invalidateQueries({ queryKey: r }), t);
          }
        },
        retry: !1,
      }),
      (e[25] = s),
      (e[26] = ve));
  let { mutate: xe, mutateAsync: Se, isPending: Ce, error: P } = d(ve),
    Oe;
  e[27] !== g || e[28] !== xe
    ? ((Oe = function (e) {
        g != null && xe({ requestBody: e, identity: g });
      }),
      (e[27] = g),
      (e[28] = xe),
      (e[29] = Oe))
    : (Oe = e[29]);
  let F = Oe,
    I = M || he || Ce,
    L = ae || pe || l.status === `unavailable`,
    R = g == null || re || de || l.status === `loading`,
    z = le?.requirements ?? null,
    B;
  e[30] === z ? (B = e[31]) : ((B = Ee(z, `extension`)), (e[30] = z), (e[31] = B));
  let V = B,
    H;
  e[32] !== V || e[33] !== z
    ? ((H = V && Te(z, `history`)), (e[32] = V), (e[33] = z), (e[34] = H))
    : (H = e[34]);
  let U = H,
    W;
  e[35] !== V || e[36] !== z ? ((W = V && we(z)), (e[35] = V), (e[36] = z), (e[37] = W)) : (W = e[37]);
  let G = W,
    K;
  e[38] !== U || e[39] !== G || e[40] !== j?.preferences.history_approval_mode
    ? ((K = j?.preferences.history_approval_mode ?? `always_ask`),
      U ? K === `never_ask` && !G && (K = `always_ask`) : (K = `disabled`),
      (e[38] = U),
      (e[39] = G),
      (e[40] = j?.preferences.history_approval_mode),
      (e[41] = K))
    : (K = e[41]);
  let q = V && z?.featureRequirements?.browser_use_full_cdp_access !== !1,
    J,
    Y;
  e[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(me, { slug: `extension` })),
      (Y =
        n == null
          ? (0, $.jsx)(c, {
              id: `settings.chromeExtension.description`,
              defaultMessage: `Choose what ChatGPT can access and do in your browser`,
              description: `Description of the browser extension settings page where users manage ChatGPT browser access when the browser name is unknown`,
            })
          : (0, $.jsx)(c, {
              id: `settings.chromeExtension.descriptionWithBrowser`,
              defaultMessage: `Choose what ChatGPT can access and do in {browserName}`,
              description: `Description of the browser extension settings page where users manage ChatGPT browser access; browserName is the browser's brand name, such as Chrome, Edge, or Brave`,
              values: { browserName: n.name },
            })),
      (e[42] = J),
      (e[43] = Y))
    : ((J = e[42]), (Y = e[43]));
  let X;
  e[44] !== l || e[45] !== M || e[46] !== he || e[47] !== L || e[48] !== s || e[49] !== v || e[50] !== E
    ? ((X = L
        ? (0, $.jsx)(x, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(c, {
              id: `settings.chromeExtension.loadError`,
              defaultMessage: `Could not load browser extension settings`,
              description: `Error shown when persisted browser extension preferences could not be loaded`,
            }),
            primaryCtaText: (0, $.jsx)(c, { ...Re.retry }),
            isPrimaryCtaDisabled: M || he,
            onPrimaryCtaClick: () => {
              (l.status === `unavailable` && s.invalidateQueries({ queryKey: [`accounts`] }),
                s.invalidateQueries({ queryKey: v }),
                s.invalidateQueries({ queryKey: E }));
            },
          })
        : null),
      (e[44] = l),
      (e[45] = M),
      (e[46] = he),
      (e[47] = L),
      (e[48] = s),
      (e[49] = v),
      (e[50] = E),
      (e[51] = X))
    : (X = e[51]);
  let Z;
  e[52] !== L || e[53] !== R
    ? ((Z = !L && R ? (0, $.jsx)(ye, {}) : null), (e[52] = L), (e[53] = R), (e[54] = Z))
    : (Z = e[54]);
  let Q;
  e[55] !== I ||
  e[56] !== z ||
  e[57] !== q ||
  e[58] !== U ||
  e[59] !== K ||
  e[60] !== g ||
  e[61] !== L ||
  e[62] !== R ||
  e[63] !== Se ||
  e[64] !== G ||
  e[65] !== P ||
  e[66] !== j ||
  e[67] !== F
    ? ((Q =
        !L && !R
          ? (0, $.jsxs)($.Fragment, {
              children: [
                P == null
                  ? null
                  : (0, $.jsx)(x, {
                      type: `error`,
                      role: `alert`,
                      content:
                        P instanceof D && P.status === 409
                          ? (0, $.jsx)(c, {
                              id: `settings.chromeExtension.conflict`,
                              defaultMessage: `Your browser settings changed elsewhere. Review the latest settings and try your change again.`,
                              description: `Error shown after a browser settings save conflicts with another device or workspace change; the rejected edit is not retried automatically`,
                            })
                          : (0, $.jsx)(c, {
                              id: `settings.chromeExtension.saveError`,
                              defaultMessage: `Could not save your change. Check your settings and try again.`,
                              description: `Error shown when a browser extension preference or website permission could not be saved`,
                            }),
                    }),
                (0, $.jsx)(Ae, {
                  settings: j,
                  enterprisePolicy: z,
                  disabled: I,
                  onUpdate: async (e) => {
                    await Se({ requestBody: e, identity: g });
                  },
                  onWebMcpEnabledChange: (e) =>
                    F({ expected_revision: j.revision, preferences: { webmcp_enabled: e } }),
                }),
                (0, $.jsxs)(te, {
                  children: [
                    (0, $.jsx)(ne, {
                      label: (0, $.jsx)(c, {
                        id: `settings.chromeExtension.history`,
                        defaultMessage: `History`,
                        description: `Label for permission to access browsing history`,
                      }),
                      description: (0, $.jsx)(c, {
                        id: `settings.chromeExtension.history.description`,
                        defaultMessage: `Allow ChatGPT to access your browsing history to answer questions or complete tasks`,
                        description: `Description of the browser extension's browsing history access setting`,
                      }),
                      control: (e) =>
                        (0, $.jsx)(Ne, {
                          ...e,
                          disabled: I,
                          managed: !U,
                          value: K,
                          options: [
                            ...Pe.map((e) => ({ ...e, disabled: e.value === `never_ask` && !G })),
                            { value: `disabled`, label: Re.neverAllow },
                          ],
                          onChange: (e) =>
                            F({ expected_revision: j.revision, preferences: { history_approval_mode: e } }),
                        }),
                    }),
                    (0, $.jsx)(ne, {
                      label: (0, $.jsx)(c, {
                        id: `settings.chromeExtension.siteTools`,
                        defaultMessage: `Use site tools by default`,
                        description: `Label for the default permission for website tools in browser extension sessions; individual websites can override it`,
                      }),
                      description: (0, $.jsx)(c, {
                        id: `settings.chromeExtension.siteTools.description`,
                        defaultMessage: `Allow ChatGPT to use tools provided by websites, including WebMCP, unless you set a different permission for a site. <learnMore>Learn more</learnMore>`,
                        description: `Explains that the default website tool permission does not override permissions saved for individual sites, with a link to more information; WebMCP is the protocol name and should not be translated`,
                        values: { learnMore: Fe },
                      }),
                      control: (e) =>
                        (0, $.jsx)(A, {
                          ...e,
                          checked: j.preferences.webmcp_enabled ?? !0,
                          disabled: I,
                          onChange: (e) =>
                            F({ expected_revision: j.revision, preferences: { webmcp_enabled: e } }),
                        }),
                    }),
                    (0, $.jsx)(ne, {
                      label: (0, $.jsxs)(`span`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: [
                          (0, $.jsx)(c, {
                            id: `settings.chromeExtension.fullCdp`,
                            defaultMessage: `Enable full CDP access`,
                            description: `Label for enabling full Chrome DevTools Protocol access in browser extension sessions`,
                          }),
                          (0, $.jsxs)(se, {
                            variant: `warning`,
                            children: [
                              (0, $.jsx)(p, {}),
                              (0, $.jsx)(c, {
                                id: `settings.chromeExtension.elevatedRisk`,
                                defaultMessage: `Elevated risk`,
                                description: `Warning badge next to full CDP access, which can expose sensitive browser internals`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      description: (0, $.jsx)(c, {
                        id: `settings.chromeExtension.fullCdp.description`,
                        defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in browser extension sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
                        description: `Description and risk warning for enabling full Chrome DevTools Protocol access`,
                      }),
                      control: (e) =>
                        (0, $.jsx)(ke, {
                          managed: !q,
                          children: (0, $.jsxs)(`span`, {
                            className: `inline-flex items-center gap-2`,
                            children: [
                              q ? null : (0, $.jsx)(T, { className: `text-secondary` }),
                              (0, $.jsx)(A, {
                                ...e,
                                checked: q && (j.preferences.full_cdp_access_enabled ?? !1),
                                disabled: I || !q,
                                onChange: (e) =>
                                  F({
                                    expected_revision: j.revision,
                                    preferences: { full_cdp_access_enabled: e },
                                  }),
                              }),
                            ],
                          }),
                        }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (e[55] = I),
      (e[56] = z),
      (e[57] = q),
      (e[58] = U),
      (e[59] = K),
      (e[60] = g),
      (e[61] = L),
      (e[62] = R),
      (e[63] = Se),
      (e[64] = G),
      (e[65] = P),
      (e[66] = j),
      (e[67] = F),
      (e[68] = Q))
    : (Q = e[68]);
  let Ie;
  return (
    e[69] !== X || e[70] !== Z || e[71] !== Q
      ? ((Ie = (0, $.jsxs)(ge, { title: J, subtitle: Y, children: [X, Z, Q] })),
        (e[69] = X),
        (e[70] = Z),
        (e[71] = Q),
        (e[72] = Ie))
      : (Ie = e[72]),
    Ie
  );
}
function Fe(e) {
  return (0, $.jsx)(`a`, {
    className: `text-link`,
    href: `https://help.openai.com/articles/20001423`,
    onClick: Ie,
    children: e,
  });
}
function Ie(e) {
  return de({
    event: e,
    href: `https://help.openai.com/articles/20001423`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
  });
}
var Le, $, Re;
function ze() {
  return (ze = e(() => {
    ((Le = re()),
      M(),
      l(),
      w(),
      j(),
      g(),
      h(),
      P(),
      k(),
      Ce(),
      he(),
      r(),
      Oe(),
      ce(),
      s(),
      N(),
      _(),
      f(),
      pe(),
      ve(),
      O(),
      Se(),
      u(),
      o(),
      xe(),
      E(),
      F(),
      G(),
      K(),
      Y(),
      Z(),
      ($ = ae()),
      (Re = t({
        neverAllow: {
          id: `settings.chromeExtension.neverAllow`,
          defaultMessage: `Never allow`,
          description: `Permission option that disables browsing history access`,
        },
        retry: {
          id: `settings.chromeExtension.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading browser extension settings after an error`,
        },
      })));
  }))();
}
ze();
export { Q as BrowserExtensionSettings };
//# sourceMappingURL=browser-extension-settings-1109280fa563.js.map
