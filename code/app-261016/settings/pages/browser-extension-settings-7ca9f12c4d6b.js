import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  Bst as n,
  CH as r,
  LNt as i,
  Lst as a,
  Mst as o,
  Oit as s,
  PBt as c,
  RR as l,
  Rst as u,
  TY as d,
  Tq as f,
  VR as p,
  XOt as m,
  YOt as h,
  ZSt as g,
  cG as ee,
  ck as _,
  cwt as v,
  ew as y,
  fR as b,
  iCt as x,
  iwt as S,
  jit as C,
  jst as w,
  lk as T,
  rk as E,
  sw as D,
  tk as O,
  tkt as k,
  uR as te,
  uk as A,
  uw as ne,
  vD as re,
  vst as ie,
  yD as j,
  yst as ae,
  zst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BFt as M,
  FF as se,
  LF as ce,
  QF as le,
  RF as ue,
  SRn as de,
  XF as fe,
  ZF as pe,
  bLr as me,
  bRn as he,
  eI as ge,
  gLr as _e,
  iRr as ve,
  imr as ye,
  rmr as be,
  sRr as xe,
  wLr as Se,
  zFt as Ce,
  zRr as we,
} from "./app-initial-ad16eaadf81f.js";
import { D as Te, E as Ee, T as De, m as N } from "./browser-use-origin-state-queries-97f7f3683560.js";
import { n as Oe, t as P } from "./bundle-6d4b2de4bbf6.js";
import { a as F, i as ke, r as I, t as L } from "./browser-use-policy-site-permissions-33d16736b491.js";
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
    ee = U[s.upload_approval_mode ?? `always_ask`],
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E;
  t[2] === u
    ? ((_ = t[3]),
      (v = t[4]),
      (y = t[5]),
      (b = t[6]),
      (x = t[7]),
      (S = t[8]),
      (C = t[9]),
      (w = t[10]),
      (T = t[11]),
      (E = t[12]))
    : ((E = u(`origin`, `allow`)),
      (_ = u(`origin`, `deny`)),
      (v = u(`download`, `allow`)),
      (y = u(`download`, `deny`)),
      (b = u(`upload`, `allow`)),
      (x = u(`upload`, `deny`)),
      (S = u(`full_cdp`, `allow`)),
      (C = u(`full_cdp`, `deny`)),
      (w = u(`webmcp`, `allow`)),
      (T = u(`webmcp`, `deny`)),
      (t[2] = u),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y),
      (t[6] = b),
      (t[7] = x),
      (t[8] = S),
      (t[9] = C),
      (t[10] = w),
      (t[11] = T),
      (t[12] = E));
  let D;
  t[13] !== _ ||
  t[14] !== v ||
  t[15] !== y ||
  t[16] !== b ||
  t[17] !== x ||
  t[18] !== S ||
  t[19] !== C ||
  t[20] !== w ||
  t[21] !== T ||
  t[22] !== d ||
  t[23] !== f ||
  t[24] !== p ||
  t[25] !== m ||
  t[26] !== h ||
  t[27] !== g ||
  t[28] !== ee ||
  t[29] !== E
    ? ((D = {
        fullCdpAccessEnabled: d,
        webMcpEnabled: f,
        approvalMode: p,
        chromeHistoryApprovalMode: m,
        iabHistoryApprovalMode: h,
        downloadApprovalMode: g,
        uploadApprovalMode: ee,
        allowedOrigins: E,
        deniedOrigins: _,
        allowedDownloadOrigins: v,
        deniedDownloadOrigins: y,
        allowedUploadOrigins: b,
        deniedUploadOrigins: x,
        allowedFullCdpOrigins: S,
        deniedFullCdpOrigins: C,
        allowedWebMcpOrigins: w,
        deniedWebMcpOrigins: T,
      }),
      (t[13] = _),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b),
      (t[17] = x),
      (t[18] = S),
      (t[19] = C),
      (t[20] = w),
      (t[21] = T),
      (t[22] = d),
      (t[23] = f),
      (t[24] = p),
      (t[25] = m),
      (t[26] = h),
      (t[27] = g),
      (t[28] = ee),
      (t[29] = E),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== a || t[32] !== n.revision
    ? ((O = async (e, t) => {
        await a({
          expected_revision: n.revision,
          preferences: { [H[e]]: t === `neverAsk` ? `never_ask` : `always_ask` },
        });
      }),
      (t[31] = a),
      (t[32] = n.revision),
      (t[33] = O))
    : (O = t[33]);
  let k;
  t[34] !== a || t[35] !== c || t[36] !== n.revision
    ? ((k = async (e) => {
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
      (t[37] = k))
    : (k = t[37]);
  let te;
  return (
    t[38] !== i || t[39] !== r || t[40] !== o || t[41] !== D || t[42] !== O || t[43] !== k
      ? ((te = (0, V.jsx)(L, {
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
          originsConfig: D,
          onApprovalModeChange: O,
          onSitePermissionsChange: k,
        })),
        (t[38] = i),
        (t[39] = r),
        (t[40] = o),
        (t[41] = D),
        (t[42] = O),
        (t[43] = k),
        (t[44] = te))
      : (te = t[44]),
    te
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
    ((B = c()),
      I(),
      (V = i()),
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
    i,
    a,
    o,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]))
    : (({ value: c, options: s, disabled: i, managed: a, onChange: o, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = c));
  let l = i || a,
    u = i || a,
    d;
  t[7] === a
    ? (d = t[8])
    : ((d = a ? (0, J.jsx)(ee, { className: `text-secondary` }) : null), (t[7] = a), (t[8] = d));
  let f;
  t[9] !== s || t[10] !== c
    ? ((f = s.find((e) => e.value === c)?.label), (t[9] = s), (t[10] = c), (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === f ? (p = t[13]) : ((p = (0, J.jsx)(k, { ...f })), (t[12] = f), (t[13] = p));
  let m;
  t[14] !== n || t[15] !== u || t[16] !== d || t[17] !== p
    ? ((m = (0, J.jsxs)(se, { ...n, color: `ghost`, disabled: u, children: [d, p] })),
      (t[14] = n),
      (t[15] = u),
      (t[16] = d),
      (t[17] = p),
      (t[18] = m))
    : (m = t[18]);
  let h;
  if (t[19] !== o || t[20] !== s || t[21] !== c) {
    let e;
    (t[23] !== o || t[24] !== c
      ? ((e = (e) =>
          (0, J.jsx)(
            E.Item,
            {
              disabled: e.disabled,
              rightIcon: c === e.value ? (0, J.jsx)(r, {}) : void 0,
              onClick: () => o(e.value),
              children: (0, J.jsx)(k, { ...e.label }),
            },
            e.value,
          )),
        (t[23] = o),
        (t[24] = c),
        (t[25] = e))
      : (e = t[25]),
      (h = s.map(e)),
      (t[19] = o),
      (t[20] = s),
      (t[21] = c),
      (t[22] = h));
  } else h = t[22];
  let g;
  t[26] !== l || t[27] !== m || t[28] !== h
    ? ((g = (0, J.jsx)(O, { disabled: l, triggerButton: m, children: h })),
      (t[26] = l),
      (t[27] = m),
      (t[28] = h),
      (t[29] = g))
    : (g = t[29]);
  let _;
  return (
    t[30] !== a || t[31] !== g
      ? ((_ = (0, J.jsx)(ke, { managed: a, children: g })), (t[30] = a), (t[31] = g), (t[32] = _))
      : (_ = t[32]),
    _
  );
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = c()), m(), _(), d(), ue(), F(), (J = i()));
  }))();
}
var X, Pe;
function Z() {
  return (Z = e(() => {
    (m(),
      (X = h({
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
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = te()), (e[0] = n)) : (n = e[0]);
  let r = n,
    { accountId: i, userId: a, authMethod: s, isLoading: c } = ye(),
    d = u(),
    p = x(_e),
    m = x(we),
    h = x(me),
    g;
  e[1] !== i || e[2] !== s || e[3] !== m || e[4] !== h || e[5] !== c || e[6] !== a
    ? ((g =
        !c && s === `chatgpt` && i != null && a != null && i === m && a === h
          ? { accountId: i, userId: a }
          : null),
      (e[1] = i),
      (e[2] = s),
      (e[3] = m),
      (e[4] = h),
      (e[5] = c),
      (e[6] = a),
      (e[7] = g))
    : (g = e[7]);
  let _ = g,
    y;
  e[8] !== i || e[9] !== a ? ((y = [...je, a, i]), (e[8] = i), (e[9] = a), (e[10] = y)) : (y = e[10]);
  let b = y,
    S;
  e[11] !== i || e[12] !== a ? ((S = [...Me, a, i]), (e[11] = i), (e[12] = a), (e[13] = S)) : (S = e[13]);
  let w = S,
    E;
  e[14] === _
    ? (E = e[15])
    : ((E =
        _ == null
          ? v
          : (e) => {
              let { signal: t } = e;
              return ve.safeGet(`/wham/browser/settings`, { signal: t, expectedIdentity: _, retry: !1 });
            }),
      (e[14] = _),
      (e[15] = E));
  let O;
  e[16] !== b || e[17] !== E
    ? ((O = { queryKey: b, queryFn: E, staleTime: oe.ONE_MINUTE, retry: !1 }),
      (e[16] = b),
      (e[17] = E),
      (e[18] = O))
    : (O = e[18]);
  let { data: A, isPending: ne, isError: ie, isFetching: j } = o(O),
    M;
  e[19] !== p || e[20] !== _
    ? ((M =
        _ == null || p.status !== `loaded`
          ? v
          : async (e) => {
              let { signal: t } = e;
              return p.structure === `personal`
                ? { supportsIndependentSpeedModes: null, requirements: null }
                : Oe(await ve.safeGet(`/wham/config/bundle`, { signal: t, expectedIdentity: _, retry: !1 }));
            }),
      (e[19] = p),
      (e[20] = _),
      (e[21] = M))
    : (M = e[21]);
  let se;
  e[22] !== w || e[23] !== M
    ? ((se = {
        queryKey: w,
        queryFn: M,
        staleTime: oe.FIVE_MINUTES,
        refetchInterval: oe.FIVE_MINUTES,
        refetchIntervalInBackground: !0,
        refetchOnWindowFocus: `always`,
        retry: !1,
      }),
      (e[22] = w),
      (e[23] = M),
      (e[24] = se))
    : (se = e[24]);
  let { data: ue, isPending: de, isError: pe, isFetching: he } = o(se),
    ge;
  e[25] === d
    ? (ge = e[26])
    : ((ge = {
        mutationFn: async (e) => {
          let { requestBody: t, identity: n } = e,
            r = [...je, n.userId, n.accountId];
          try {
            await d.cancelQueries({ queryKey: r });
            let e = await ve.safePatch(`/wham/browser/settings`, {
              requestBody: t,
              expectedIdentity: n,
              retry: !1,
              expectedErrorStatuses: [400, 409, 422],
            });
            return (
              await d.cancelQueries({ queryKey: r }),
              d.setQueryData(r, e),
              window.dispatchEvent(new Event(l)),
              e
            );
          } catch (e) {
            let t = e;
            throw (await d.invalidateQueries({ queryKey: r }), t);
          }
        },
        retry: !1,
      }),
      (e[25] = d),
      (e[26] = ge));
  let { mutate: be, mutateAsync: xe, isPending: Se, error: N } = ae(ge),
    P;
  e[27] !== _ || e[28] !== be
    ? ((P = function (e) {
        _ != null && be({ requestBody: e, identity: _ });
      }),
      (e[27] = _),
      (e[28] = be),
      (e[29] = P))
    : (P = e[29]);
  let F = P,
    I = j || he || Se,
    L = ie || pe || p.status === `unavailable`,
    R = _ == null || ne || de || p.status === `loading`,
    z = ue?.requirements ?? null,
    B;
  e[30] === z ? (B = e[31]) : ((B = De(z, `extension`)), (e[30] = z), (e[31] = B));
  let V = B,
    H;
  e[32] !== V || e[33] !== z
    ? ((H = V && Ee(z, `history`)), (e[32] = V), (e[33] = z), (e[34] = H))
    : (H = e[34]);
  let U = H,
    W;
  e[35] !== V || e[36] !== z ? ((W = V && Te(z)), (e[35] = V), (e[36] = z), (e[37] = W)) : (W = e[37]);
  let G = W,
    K;
  e[38] !== U || e[39] !== G || e[40] !== A?.preferences.history_approval_mode
    ? ((K = A?.preferences.history_approval_mode ?? `always_ask`),
      U ? K === `never_ask` && !G && (K = `always_ask`) : (K = `disabled`),
      (e[38] = U),
      (e[39] = G),
      (e[40] = A?.preferences.history_approval_mode),
      (e[41] = K))
    : (K = e[41]);
  let q = V && z?.featureRequirements?.browser_use_full_cdp_access !== !1,
    J,
    Y;
  e[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(ce, { slug: `extension` })),
      (Y =
        r == null
          ? (0, $.jsx)(k, {
              id: `settings.chromeExtension.description`,
              defaultMessage: `Choose what ChatGPT can access and do in your browser`,
              description: `Description of the browser extension settings page where users manage ChatGPT browser access when the browser name is unknown`,
            })
          : (0, $.jsx)(k, {
              id: `settings.chromeExtension.descriptionWithBrowser`,
              defaultMessage: `Choose what ChatGPT can access and do in {browserName}`,
              description: `Description of the browser extension settings page where users manage ChatGPT browser access; browserName is the browser's brand name, such as Chrome, Edge, or Brave`,
              values: { browserName: r.name },
            })),
      (e[42] = J),
      (e[43] = Y))
    : ((J = e[42]), (Y = e[43]));
  let X;
  e[44] !== p || e[45] !== j || e[46] !== he || e[47] !== L || e[48] !== d || e[49] !== b || e[50] !== w
    ? ((X = L
        ? (0, $.jsx)(re, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(k, {
              id: `settings.chromeExtension.loadError`,
              defaultMessage: `Could not load browser extension settings`,
              description: `Error shown when persisted browser extension preferences could not be loaded`,
            }),
            primaryCtaText: (0, $.jsx)(k, { ...Re.retry }),
            isPrimaryCtaDisabled: j || he,
            onPrimaryCtaClick: () => {
              (p.status === `unavailable` && d.invalidateQueries({ queryKey: [`accounts`] }),
                d.invalidateQueries({ queryKey: b }),
                d.invalidateQueries({ queryKey: w }));
            },
          })
        : null),
      (e[44] = p),
      (e[45] = j),
      (e[46] = he),
      (e[47] = L),
      (e[48] = d),
      (e[49] = b),
      (e[50] = w),
      (e[51] = X))
    : (X = e[51]);
  let Z;
  e[52] !== L || e[53] !== R
    ? ((Z = !L && R ? (0, $.jsx)(fe, {}) : null), (e[52] = L), (e[53] = R), (e[54] = Z))
    : (Z = e[54]);
  let Q;
  e[55] !== I ||
  e[56] !== z ||
  e[57] !== q ||
  e[58] !== U ||
  e[59] !== K ||
  e[60] !== _ ||
  e[61] !== L ||
  e[62] !== R ||
  e[63] !== xe ||
  e[64] !== G ||
  e[65] !== N ||
  e[66] !== A ||
  e[67] !== F
    ? ((Q =
        !L && !R
          ? (0, $.jsxs)($.Fragment, {
              children: [
                N == null
                  ? null
                  : (0, $.jsx)(re, {
                      type: `error`,
                      role: `alert`,
                      content:
                        N instanceof C && N.status === 409
                          ? (0, $.jsx)(k, {
                              id: `settings.chromeExtension.conflict`,
                              defaultMessage: `Your browser settings changed elsewhere. Review the latest settings and try your change again.`,
                              description: `Error shown after a browser settings save conflicts with another device or workspace change; the rejected edit is not retried automatically`,
                            })
                          : (0, $.jsx)(k, {
                              id: `settings.chromeExtension.saveError`,
                              defaultMessage: `Could not save your change. Check your settings and try again.`,
                              description: `Error shown when a browser extension preference or website permission could not be saved`,
                            }),
                    }),
                (0, $.jsx)(Ae, {
                  settings: A,
                  enterprisePolicy: z,
                  disabled: I,
                  onUpdate: async (e) => {
                    await xe({ requestBody: e, identity: _ });
                  },
                  onWebMcpEnabledChange: (e) =>
                    F({ expected_revision: A.revision, preferences: { webmcp_enabled: e } }),
                }),
                (0, $.jsxs)(t, {
                  children: [
                    (0, $.jsx)(D, {
                      label: (0, $.jsx)(k, {
                        id: `settings.chromeExtension.history`,
                        defaultMessage: `History`,
                        description: `Label for permission to access browsing history`,
                      }),
                      description: (0, $.jsx)(k, {
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
                            F({ expected_revision: A.revision, preferences: { history_approval_mode: e } }),
                        }),
                    }),
                    (0, $.jsx)(D, {
                      label: (0, $.jsx)(k, {
                        id: `settings.chromeExtension.siteTools`,
                        defaultMessage: `Use site tools by default`,
                        description: `Label for the default permission for website tools in browser extension sessions; individual websites can override it`,
                      }),
                      description: (0, $.jsx)(k, {
                        id: `settings.chromeExtension.siteTools.description`,
                        defaultMessage: `Allow ChatGPT to use tools provided by websites, including WebMCP, unless you set a different permission for a site. <learnMore>Learn more</learnMore>`,
                        description: `Explains that the default website tool permission does not override permissions saved for individual sites, with a link to more information; WebMCP is the protocol name and should not be translated`,
                        values: { learnMore: Fe },
                      }),
                      control: (e) =>
                        (0, $.jsx)(T, {
                          ...e,
                          checked: A.preferences.webmcp_enabled ?? !0,
                          disabled: I,
                          onChange: (e) =>
                            F({ expected_revision: A.revision, preferences: { webmcp_enabled: e } }),
                        }),
                    }),
                    (0, $.jsx)(D, {
                      label: (0, $.jsxs)(`span`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: [
                          (0, $.jsx)(k, {
                            id: `settings.chromeExtension.fullCdp`,
                            defaultMessage: `Enable full CDP access`,
                            description: `Label for enabling full Chrome DevTools Protocol access in browser extension sessions`,
                          }),
                          (0, $.jsxs)(Ce, {
                            variant: `warning`,
                            children: [
                              (0, $.jsx)(f, {}),
                              (0, $.jsx)(k, {
                                id: `settings.chromeExtension.elevatedRisk`,
                                defaultMessage: `Elevated risk`,
                                description: `Warning badge next to full CDP access, which can expose sensitive browser internals`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      description: (0, $.jsx)(k, {
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
                              q ? null : (0, $.jsx)(ee, { className: `text-secondary` }),
                              (0, $.jsx)(T, {
                                ...e,
                                checked: q && (A.preferences.full_cdp_access_enabled ?? !1),
                                disabled: I || !q,
                                onChange: (e) =>
                                  F({
                                    expected_revision: A.revision,
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
      (e[60] = _),
      (e[61] = L),
      (e[62] = R),
      (e[63] = xe),
      (e[64] = G),
      (e[65] = N),
      (e[66] = A),
      (e[67] = F),
      (e[68] = Q))
    : (Q = e[68]);
  let Ie;
  return (
    e[69] !== X || e[70] !== Z || e[71] !== Q
      ? ((Ie = (0, $.jsxs)(le, { title: J, subtitle: Y, children: [X, Z, Q] })),
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
    ((Le = c()),
      S(),
      ie(),
      w(),
      a(),
      p(),
      g(),
      N(),
      m(),
      Se(),
      be(),
      b(),
      P(),
      M(),
      j(),
      he(),
      d(),
      A(),
      ge(),
      pe(),
      ne(),
      ue(),
      y(),
      n(),
      xe(),
      s(),
      F(),
      G(),
      K(),
      Y(),
      Z(),
      ($ = i()),
      (Re = h({
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
//# sourceMappingURL=browser-extension-settings-7ca9f12c4d6b.js.map
