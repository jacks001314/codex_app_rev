import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $7 as t,
  AJt as n,
  AOt as r,
  BOt as i,
  Cy as a,
  E3 as o,
  F5t as s,
  IJt as c,
  JS as l,
  Ket as u,
  LJt as d,
  O5t as f,
  O7t as p,
  PAt as m,
  POt as h,
  QAt as g,
  QCt as _,
  Urn as v,
  Wrn as y,
  XS as b,
  Yrn as x,
  _Jt as S,
  _dn as C,
  _jt as w,
  ewt as T,
  gjt as E,
  iC as D,
  jAt as O,
  jJt as ee,
  kOt as te,
  lG as ne,
  mcn as k,
  my as A,
  nC as re,
  py as ie,
  r5 as ae,
  tC as j,
  tjt as oe,
  uG as se,
  vJt as ce,
  w7t as le,
  xy as ue,
} from "./app-shared-7552fc8d5d82.js";
import {
  $O as de,
  BZt as fe,
  CIt as pe,
  SIt as me,
  VZt as M,
  adn as N,
  gk as he,
  hk as ge,
  idn as _e,
  mk as ve,
  nk as ye,
  tk as be,
  vk as P,
} from "./app-initial-3916b423772b.js";
import {
  D as xe,
  E as Se,
  T as Ce,
  m as F,
} from "./browser-use-origin-state-queries-4feefe042d12.js";
import { n as we, t as I } from "./bundle-ac2b7bc36574.js";
import {
  a as L,
  i as Te,
  r as R,
  t as z,
} from "./browser-use-policy-site-permissions-b7342477471c.js";
function Ee(e) {
  let t = (0, V.c)(40),
    { settings: n, enterprisePolicy: r, disabled: i, onUpdate: a } = e,
    { preferences: o, rules: s } = n,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = (e, t) =>
        Object.entries(s[e] ?? {})
          .filter((e) => {
            let [, n] = e;
            return n === t;
          })
          .map(B)),
      (t[0] = s),
      (t[1] = c));
  let l = c,
    u = o.full_cdp_access_enabled ?? !1,
    d = o.webmcp_enabled ?? !0,
    f = W[o.approval_mode ?? `always_ask`],
    p = W[o.history_approval_mode ?? `always_ask`],
    m = W[o.iab_history_approval_mode ?? `always_ask`],
    h = W[o.download_approval_mode ?? `always_ask`],
    g = W[o.upload_approval_mode ?? `always_ask`],
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  t[2] === l
    ? ((_ = t[3]),
      (v = t[4]),
      (y = t[5]),
      (b = t[6]),
      (x = t[7]),
      (S = t[8]),
      (C = t[9]),
      (w = t[10]))
    : ((w = l(`origin`, `allow`)),
      (_ = l(`origin`, `deny`)),
      (v = l(`download`, `allow`)),
      (y = l(`download`, `deny`)),
      (b = l(`upload`, `allow`)),
      (x = l(`upload`, `deny`)),
      (S = l(`full_cdp`, `allow`)),
      (C = l(`full_cdp`, `deny`)),
      (t[2] = l),
      (t[3] = _),
      (t[4] = v),
      (t[5] = y),
      (t[6] = b),
      (t[7] = x),
      (t[8] = S),
      (t[9] = C),
      (t[10] = w));
  let T;
  t[11] !== _ ||
  t[12] !== v ||
  t[13] !== y ||
  t[14] !== b ||
  t[15] !== x ||
  t[16] !== S ||
  t[17] !== C ||
  t[18] !== u ||
  t[19] !== d ||
  t[20] !== f ||
  t[21] !== p ||
  t[22] !== m ||
  t[23] !== h ||
  t[24] !== g ||
  t[25] !== w
    ? ((T = {
        fullCdpAccessEnabled: u,
        webMcpEnabled: d,
        approvalMode: f,
        chromeHistoryApprovalMode: p,
        iabHistoryApprovalMode: m,
        downloadApprovalMode: h,
        uploadApprovalMode: g,
        allowedOrigins: w,
        deniedOrigins: _,
        allowedDownloadOrigins: v,
        deniedDownloadOrigins: y,
        allowedUploadOrigins: b,
        deniedUploadOrigins: x,
        allowedFullCdpOrigins: S,
        deniedFullCdpOrigins: C,
      }),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C),
      (t[18] = u),
      (t[19] = d),
      (t[20] = f),
      (t[21] = p),
      (t[22] = m),
      (t[23] = h),
      (t[24] = g),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== a || t[28] !== n.revision
    ? ((E = async (e, t) => {
        await a({
          expected_revision: n.revision,
          preferences: { [U[e]]: t === `neverAsk` ? `never_ask` : `always_ask` },
        });
      }),
      (t[27] = a),
      (t[28] = n.revision),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== a || t[31] !== s || t[32] !== n.revision
    ? ((D = async (e) => {
        let { operation: t, origin: r, nextValues: i, resources: o } = e,
          c = o.flatMap((e) => {
            if (e === `fullCdp`) return [];
            let n = t === `remove` ? `default` : i[e];
            if (n === `ask`) throw Error(`Explicit per-site approval is not supported`);
            return n === "default" && s[e]?.[r] == null
              ? []
              : [{ resource: e, pattern: r, decision: G[n] }];
          });
        c.length > 0 && (await a({ expected_revision: n.revision, rule_updates: c }));
      }),
      (t[30] = a),
      (t[31] = s),
      (t[32] = n.revision),
      (t[33] = D))
    : (D = t[33]);
  let O;
  return (
    t[34] !== i || t[35] !== r || t[36] !== T || t[37] !== E || t[38] !== D
      ? ((O = (0, H.jsx)(z, {
          backend: `chrome`,
          enterprisePolicy: r,
          disabled: i,
          isError: !1,
          isFullCdpAccessEnabled: !1,
          isLoading: !1,
          supportsRequiresApproval: !1,
          supportsClearingDefaultsOnAdd: !0,
          parseOrigin: De,
          originsConfig: T,
          onApprovalModeChange: E,
          onSitePermissionsChange: D,
        })),
        (t[34] = i),
        (t[35] = r),
        (t[36] = T),
        (t[37] = E),
        (t[38] = D),
        (t[39] = O))
      : (O = t[39]),
    O
  );
}
function B(e) {
  let [t] = e;
  return t;
}
function De(e) {
  return e.length > 0 && Array.from(e).length <= 4096 && !/[\p{White_Space}\p{C}]/u.test(e)
    ? e
    : null;
}
var V, H, U, W, G;
function K() {
  return (K = e(() => {
    ((V = C()),
      R(),
      (H = k()),
      (U = {
        origin: `approval_mode`,
        download: `download_approval_mode`,
        upload: `upload_approval_mode`,
      }),
      (W = { always_ask: `alwaysAsk`, never_ask: `neverAsk`, disabled: `disabled` }),
      (G = { default: null, allowed: `allow`, denied: `deny` }));
  }))();
}
var Oe, ke;
function q() {
  return (q = e(() => {
    ((Oe = [`browser-settings`]), (ke = [`browser-cloud-requirements`]));
  }))();
}
function Ae(e) {
  let t = (0, J.c)(33),
    n,
    r,
    i,
    a,
    s,
    c;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (s = t[5]), (c = t[6]))
    : (({ value: c, options: s, disabled: r, managed: i, onChange: a, ...n } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c));
  let u = r || i,
    d = r || i,
    f;
  t[7] === i
    ? (f = t[8])
    : ((f = i ? (0, Y.jsx)(ae, { className: `text-secondary` }) : null), (t[7] = i), (t[8] = f));
  let p;
  t[9] !== s || t[10] !== c
    ? ((p = s.find((e) => e.value === c)?.label), (t[9] = s), (t[10] = c), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === p ? (m = t[13]) : ((m = (0, Y.jsx)(x, { ...p })), (t[12] = p), (t[13] = m));
  let h;
  t[14] !== n || t[15] !== d || t[16] !== f || t[17] !== m
    ? ((h = (0, Y.jsxs)(de, { ...n, color: `ghost`, disabled: d, children: [f, m] })),
      (t[14] = n),
      (t[15] = d),
      (t[16] = f),
      (t[17] = m),
      (t[18] = h))
    : (h = t[18]);
  let g;
  if (t[19] !== a || t[20] !== s || t[21] !== c) {
    let e;
    (t[23] !== a || t[24] !== c
      ? ((e = (e) =>
          (0, Y.jsx)(
            b.Item,
            {
              disabled: e.disabled,
              rightIcon: c === e.value ? (0, Y.jsx)(o, {}) : void 0,
              onClick: () => a(e.value),
              children: (0, Y.jsx)(x, { ...e.label }),
            },
            e.value,
          )),
        (t[23] = a),
        (t[24] = c),
        (t[25] = e))
      : (e = t[25]),
      (g = s.map(e)),
      (t[19] = a),
      (t[20] = s),
      (t[21] = c),
      (t[22] = g));
  } else g = t[22];
  let _;
  t[26] !== u || t[27] !== h || t[28] !== g
    ? ((_ = (0, Y.jsx)(l, { disabled: u, triggerButton: h, children: g })),
      (t[26] = u),
      (t[27] = h),
      (t[28] = g),
      (t[29] = _))
    : (_ = t[29]);
  let v;
  return (
    t[30] !== i || t[31] !== _
      ? ((v = (0, Y.jsx)(Te, { managed: i, children: _ })), (t[30] = i), (t[31] = _), (t[32] = v))
      : (v = t[32]),
    v
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = C()), y(), j(), u(), ye(), L(), (Y = k()));
  }))();
}
var Z, je;
function Q() {
  return (Q = e(() => {
    (y(),
      (Z = v({
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
      (je = [
        { value: `never_ask`, label: Z.autoApprove },
        { value: `always_ask`, label: Z.alwaysAsk },
      ]));
  }))();
}
function Me() {
  let e = (0, Fe.c)(72),
    { accountId: n, userId: i, authMethod: a, isLoading: o } = se(),
    c = d(),
    l = s(te),
    u = s(r),
    f = s(h),
    m;
  e[0] !== n || e[1] !== a || e[2] !== u || e[3] !== f || e[4] !== o || e[5] !== i
    ? ((m =
        !o && a === `chatgpt` && n != null && i != null && n === u && i === f
          ? { accountId: n, userId: i }
          : null),
      (e[0] = n),
      (e[1] = a),
      (e[2] = u),
      (e[3] = f),
      (e[4] = o),
      (e[5] = i),
      (e[6] = m))
    : (m = e[6]);
  let g = m,
    v;
  e[7] !== n || e[8] !== i ? ((v = [...Oe, i, n]), (e[7] = n), (e[8] = i), (e[9] = v)) : (v = e[9]);
  let y = v,
    b;
  e[10] !== n || e[11] !== i
    ? ((b = [...ke, i, n]), (e[10] = n), (e[11] = i), (e[12] = b))
    : (b = e[12]);
  let S = b,
    C;
  e[13] === g
    ? (C = e[14])
    : ((C =
        g == null
          ? p
          : (e) => {
              let { signal: t } = e;
              return O.safeGet(`/wham/browser/settings`, {
                signal: t,
                expectedIdentity: g,
                retry: !1,
              });
            }),
      (e[13] = g),
      (e[14] = C));
  let w;
  e[15] !== y || e[16] !== C
    ? ((w = { queryKey: y, queryFn: C, staleTime: E.ONE_MINUTE, retry: !1 }),
      (e[15] = y),
      (e[16] = C),
      (e[17] = w))
    : (w = e[17]);
  let { data: T, isPending: D, isError: ne, isFetching: k } = ee(w),
    A;
  e[18] !== l || e[19] !== g
    ? ((A =
        g == null || l.status !== `loaded`
          ? p
          : async (e) => {
              let { signal: t } = e;
              return l.structure === `personal`
                ? { requirements: null }
                : we(
                    await O.safeGet(`/wham/config/bundle`, {
                      signal: t,
                      expectedIdentity: g,
                      retry: !1,
                    }),
                  );
            }),
      (e[18] = l),
      (e[19] = g),
      (e[20] = A))
    : (A = e[20]);
  let j;
  e[21] !== S || e[22] !== A
    ? ((j = {
        queryKey: S,
        queryFn: A,
        staleTime: E.FIVE_MINUTES,
        refetchInterval: E.FIVE_MINUTES,
        refetchIntervalInBackground: !0,
        refetchOnWindowFocus: `always`,
        retry: !1,
      }),
      (e[21] = S),
      (e[22] = A),
      (e[23] = j))
    : (j = e[23]);
  let { data: le, isPending: de, isError: pe, isFetching: M } = ee(j),
    N;
  e[24] === c
    ? (N = e[25])
    : ((N = {
        mutationFn: async (e) => {
          let { requestBody: t, identity: n } = e,
            r = [...Oe, n.userId, n.accountId];
          try {
            await c.cancelQueries({ queryKey: r });
            let e = await O.safePatch(`/wham/browser/settings`, {
              requestBody: t,
              expectedIdentity: n,
              retry: !1,
              expectedErrorStatuses: [400, 409, 422],
            });
            return (
              await c.cancelQueries({ queryKey: r }),
              c.setQueryData(r, e),
              window.dispatchEvent(new Event(_)),
              e
            );
          } catch (e) {
            let t = e;
            throw (await c.invalidateQueries({ queryKey: r }), t);
          }
        },
        retry: !1,
      }),
      (e[24] = c),
      (e[25] = N));
  let { mutate: ge, mutateAsync: _e, isPending: ye, error: P } = ce(N),
    F;
  e[26] !== g || e[27] !== ge
    ? ((F = function (e) {
        g != null && ge({ requestBody: e, identity: g });
      }),
      (e[26] = g),
      (e[27] = ge),
      (e[28] = F))
    : (F = e[28]);
  let I = F,
    L = k || M || ye,
    R = ne || pe || l.status === `unavailable`,
    z = g == null || D || de || l.status === `loading`,
    B = le?.requirements ?? null,
    De;
  e[29] === B ? (De = e[30]) : ((De = Ce(B, `extension`)), (e[29] = B), (e[30] = De));
  let V = De,
    H;
  e[31] !== V || e[32] !== B
    ? ((H = V && Se(B, `history`)), (e[31] = V), (e[32] = B), (e[33] = H))
    : (H = e[33]);
  let U = H,
    W;
  e[34] !== V || e[35] !== B
    ? ((W = V && xe(B)), (e[34] = V), (e[35] = B), (e[36] = W))
    : (W = e[36]);
  let G = W,
    K;
  e[37] !== U || e[38] !== G || e[39] !== T?.preferences.history_approval_mode
    ? ((K = T?.preferences.history_approval_mode ?? `always_ask`),
      U ? K === `never_ask` && !G && (K = `always_ask`) : (K = `disabled`),
      (e[37] = U),
      (e[38] = G),
      (e[39] = T?.preferences.history_approval_mode),
      (e[40] = K))
    : (K = e[40]);
  let q = V && B?.featureRequirements?.browser_use_full_cdp_access !== !1,
    J,
    Y;
  e[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, $.jsx)(be, { slug: `extension` })),
      (Y = (0, $.jsx)(x, {
        id: `settings.chromeExtension.description`,
        defaultMessage: `Manage per-site permissions, site tools, history, and CDP access for your browser`,
        description: `Description of the browser extension settings page where users manage ChatGPT browser access. CDP means Chrome DevTools Protocol.`,
      })),
      (e[41] = J),
      (e[42] = Y))
    : ((J = e[41]), (Y = e[42]));
  let X;
  e[43] !== l ||
  e[44] !== k ||
  e[45] !== M ||
  e[46] !== R ||
  e[47] !== c ||
  e[48] !== y ||
  e[49] !== S
    ? ((X = R
        ? (0, $.jsx)(fe, {
            type: `error`,
            role: `alert`,
            content: (0, $.jsx)(x, {
              id: `settings.chromeExtension.loadError`,
              defaultMessage: `Could not load browser extension settings`,
              description: `Error shown when persisted browser extension preferences could not be loaded`,
            }),
            primaryCtaText: (0, $.jsx)(x, { ...Ie.retry }),
            isPrimaryCtaDisabled: k || M,
            onPrimaryCtaClick: () => {
              (l.status === `unavailable` && c.invalidateQueries({ queryKey: [`accounts`] }),
                c.invalidateQueries({ queryKey: y }),
                c.invalidateQueries({ queryKey: S }));
            },
          })
        : null),
      (e[43] = l),
      (e[44] = k),
      (e[45] = M),
      (e[46] = R),
      (e[47] = c),
      (e[48] = y),
      (e[49] = S),
      (e[50] = X))
    : (X = e[50]);
  let Z;
  e[51] !== R || e[52] !== z
    ? ((Z = !R && z ? (0, $.jsx)(ve, {}) : null), (e[51] = R), (e[52] = z), (e[53] = Z))
    : (Z = e[53]);
  let Q;
  e[54] !== L ||
  e[55] !== B ||
  e[56] !== q ||
  e[57] !== U ||
  e[58] !== K ||
  e[59] !== g ||
  e[60] !== R ||
  e[61] !== z ||
  e[62] !== _e ||
  e[63] !== G ||
  e[64] !== P ||
  e[65] !== T ||
  e[66] !== I
    ? ((Q =
        !R && !z
          ? (0, $.jsxs)($.Fragment, {
              children: [
                P == null
                  ? null
                  : (0, $.jsx)(fe, {
                      type: `error`,
                      role: `alert`,
                      content:
                        P instanceof oe && P.status === 409
                          ? (0, $.jsx)(x, {
                              id: `settings.chromeExtension.conflict`,
                              defaultMessage: `Your browser settings changed elsewhere. Review the latest settings and try your change again.`,
                              description: `Error shown after a browser settings save conflicts with another device or workspace change; the rejected edit is not retried automatically`,
                            })
                          : (0, $.jsx)(x, {
                              id: `settings.chromeExtension.saveError`,
                              defaultMessage: `Could not save your change. Check your settings and try again.`,
                              description: `Error shown when a browser extension preference or website permission could not be saved`,
                            }),
                    }),
                (0, $.jsx)(Ee, {
                  settings: T,
                  enterprisePolicy: B,
                  disabled: L,
                  onUpdate: async (e) => {
                    await _e({ requestBody: e, identity: g });
                  },
                }),
                (0, $.jsxs)(ie, {
                  children: [
                    (0, $.jsx)(ue, {
                      label: (0, $.jsx)(x, {
                        id: `settings.chromeExtension.history`,
                        defaultMessage: `History`,
                        description: `Label for permission to access browsing history`,
                      }),
                      description: (0, $.jsx)(x, {
                        id: `settings.chromeExtension.history.description`,
                        defaultMessage: `Allow ChatGPT to access your browsing history to answer questions or complete tasks`,
                        description: `Description of the browser extension's browsing history access setting`,
                      }),
                      control: (e) =>
                        (0, $.jsx)(Ae, {
                          ...e,
                          disabled: L,
                          managed: !U,
                          value: K,
                          options: [
                            ...je.map((e) => ({ ...e, disabled: e.value === `never_ask` && !G })),
                            { value: `disabled`, label: Ie.neverAllow },
                          ],
                          onChange: (e) =>
                            I({
                              expected_revision: T.revision,
                              preferences: { history_approval_mode: e },
                            }),
                        }),
                    }),
                    (0, $.jsx)(ue, {
                      label: (0, $.jsx)(x, {
                        id: `settings.chromeExtension.siteTools`,
                        defaultMessage: `Enable site tools`,
                        description: `Label for enabling tools provided by websites in browser extension sessions`,
                      }),
                      description: (0, $.jsx)(x, {
                        id: `settings.chromeExtension.siteTools.description`,
                        defaultMessage: `Allow ChatGPT to use tools provided by websites, including WebMCP. <learnMore>Learn more</learnMore>`,
                        description: `Description of the site tools setting with a link to more information; WebMCP is the protocol name and should not be translated`,
                        values: { learnMore: Ne },
                      }),
                      control: (e) =>
                        (0, $.jsx)(re, {
                          ...e,
                          checked: T.preferences.webmcp_enabled ?? !0,
                          disabled: L,
                          onChange: (e) =>
                            I({
                              expected_revision: T.revision,
                              preferences: { webmcp_enabled: e },
                            }),
                        }),
                    }),
                    (0, $.jsx)(ue, {
                      label: (0, $.jsxs)(`span`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: [
                          (0, $.jsx)(x, {
                            id: `settings.chromeExtension.fullCdp`,
                            defaultMessage: `Enable full CDP access`,
                            description: `Label for enabling full Chrome DevTools Protocol access in browser extension sessions`,
                          }),
                          (0, $.jsxs)(me, {
                            variant: `warning`,
                            children: [
                              (0, $.jsx)(t, {}),
                              (0, $.jsx)(x, {
                                id: `settings.chromeExtension.elevatedRisk`,
                                defaultMessage: `Elevated risk`,
                                description: `Warning badge next to full CDP access, which can expose sensitive browser internals`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      description: (0, $.jsx)(x, {
                        id: `settings.chromeExtension.fullCdp.description`,
                        defaultMessage: `Allow ChatGPT to use full Chrome DevTools Protocol (CDP) access in browser extension sessions. Full CDP access lets ChatGPT inspect and control sensitive browser internals that may put your data at risk.`,
                        description: `Description and risk warning for enabling full Chrome DevTools Protocol access`,
                      }),
                      control: (e) =>
                        (0, $.jsx)(Te, {
                          managed: !q,
                          children: (0, $.jsxs)(`span`, {
                            className: `inline-flex items-center gap-2`,
                            children: [
                              q ? null : (0, $.jsx)(ae, { className: `text-secondary` }),
                              (0, $.jsx)(re, {
                                ...e,
                                checked: q && (T.preferences.full_cdp_access_enabled ?? !1),
                                disabled: L || !q,
                                onChange: (e) =>
                                  I({
                                    expected_revision: T.revision,
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
      (e[54] = L),
      (e[55] = B),
      (e[56] = q),
      (e[57] = U),
      (e[58] = K),
      (e[59] = g),
      (e[60] = R),
      (e[61] = z),
      (e[62] = _e),
      (e[63] = G),
      (e[64] = P),
      (e[65] = T),
      (e[66] = I),
      (e[67] = Q))
    : (Q = e[67]);
  let Me;
  return (
    e[68] !== X || e[69] !== Z || e[70] !== Q
      ? ((Me = (0, $.jsxs)(he, { title: J, subtitle: Y, children: [X, Z, Q] })),
        (e[68] = X),
        (e[69] = Z),
        (e[70] = Q),
        (e[71] = Me))
      : (Me = e[71]),
    Me
  );
}
function Ne(e) {
  return (0, $.jsx)(`a`, {
    className: `text-link`,
    href: `https://help.openai.com/articles/20001423`,
    onClick: Pe,
    children: e,
  });
}
function Pe(e) {
  return N({
    event: e,
    href: `https://help.openai.com/articles/20001423`,
    initiator: `open_in_browser_bridge`,
    openTarget: `external-browser`,
  });
}
var Fe, $, Ie;
function Le() {
  return (Le = e(() => {
    ((Fe = C()),
      le(),
      S(),
      n(),
      c(),
      T(),
      f(),
      F(),
      y(),
      i(),
      ne(),
      I(),
      pe(),
      M(),
      _e(),
      u(),
      D(),
      P(),
      ge(),
      a(),
      ye(),
      A(),
      w(),
      m(),
      g(),
      L(),
      K(),
      q(),
      X(),
      Q(),
      ($ = k()),
      (Ie = v({
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
Le();
export { Me as BrowserExtensionSettings };
//# sourceMappingURL=browser-extension-settings-6969282f9188.js.map
