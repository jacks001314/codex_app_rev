const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./run-external-agent-import-command-dacd62fdb35f.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Abt as t,
  CJ as n,
  Cot as r,
  Ext as i,
  IDt as a,
  Ixt as o,
  Kat as s,
  Mz as c,
  N8 as l,
  Nz as u,
  P8 as d,
  Pxt as f,
  Rnt as p,
  SJ as m,
  TJ as h,
  VDt as g,
  Vxt as _,
  Z8 as v,
  _xt as y,
  bO as b,
  fPt as x,
  fSt as S,
  iot as C,
  jDt as w,
  oC as T,
  oSt as E,
  pPt as D,
  qat as O,
  rst as k,
  sC as ee,
  vzt as A,
  wot as j,
  wxt as te,
  xMt as M,
  xbt as N,
  yO as ne,
  yzt as P,
  zxt as re,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1t as ie,
  $bt as ae,
  Ebt as oe,
  Gbt as se,
  Mbt as ce,
  OPr as le,
  Obt as ue,
  Pbt as de,
  QDr as F,
  QTn as fe,
  Qbt as pe,
  Tbt as me,
  Vbt as he,
  Wbt as ge,
  XDr as I,
  abt as _e,
  bFr as ve,
  dxt as ye,
  e0t as be,
  eDr as L,
  ext as xe,
  iDr as Se,
  iNr as R,
  ibt as Ce,
  kPr as we,
  kbt as Te,
  lEn as Ee,
  lxt as De,
  nDr as Oe,
  nSn as ke,
  oFr as z,
  rNr as B,
  rSn as Ae,
  tEn as V,
  txt as je,
  wbt as H,
  xFr as Me,
} from "./app-initial-5851df3f6cb1.js";
import { O_ as U, k_ as W } from "./app-primary-fe8a450b3b04.js";
import { n as G, t as Ne } from "./computer-history-plugin-icon-316126a86c18.js";
import { a as Pe, r as Fe } from "./chronicle-service-queries-fa2c40e5d4fe.js";
import { a as Ie, i as Le } from "./computer-history-query-30a12dff18c6.js";
import { r as Re, t as ze } from "./computer-history-suggestion-prompt-64e6bcbf5cac.js";
import { a as Be, i as Ve } from "./computer-history-suggestions-1ba6cfc98a5b.js";
import { a as He, i as Ue, n as We, t as Ge } from "./entry-point-availability-13ea8331fd21.js";
function Ke(e) {
  let t = e.get(K);
  if (!e.get(ke) || e.get(q) !== `eligible` || t == null || t.nextReminderAt > Date.now()) return;
  let n = { day: `week`, week: `month`, month: `quarter`, quarter: `quarter` }[t.milestone];
  (e.set(q, `presented`),
    e.set(K, { nextReminderAt: Date.now() + { week: 7, month: 30, quarter: 90 }[n] * Je, milestone: n }));
}
function qe(e) {
  (Ke(e), e.set(q, `ineligible`));
}
var Je, K, q;
function Ye() {
  return (Ye = e(() => {
    (f(),
      Ae(),
      O(),
      j(),
      Pe(),
      le(),
      B(),
      be(),
      (Je = 864e5),
      (K = R(`computer-history-reminder`, null)),
      (q = S(r, () => `ineligible`, {
        onMount: (e, t) => {
          let n = t.watch(({ get: n }) => {
            if (s.chronicle == null || !n(we, `3104400975`)) {
              e(`ineligible`);
              return;
            }
            let { data: r, dataUpdatedAt: i, isError: a, isFetching: o } = n(Fe);
            if (!n(ie) || a || r?.recorderState !== `running`) {
              e(`ineligible`);
              return;
            }
            let c = n(K);
            c == null && !o && t.set(K, { nextReminderAt: Date.now() + Je, milestone: `day` });
            let l = n(ke) === !0 && !o && c != null && c.nextReminderAt <= i;
            e((e) => (e === `presented` ? e : l ? `eligible` : `ineligible`));
          });
          return () => {
            (n(), e(`ineligible`));
          };
        },
      })));
  }))();
}
function Xe() {
  let e = (0, Qe.c)(22),
    t = o(r),
    n = g(),
    s = i(),
    c;
  e[0] === t
    ? (c = e[1])
    : ((c = (e) => {
        if (e == null) return;
        let n = new IntersectionObserver((e) => {
          e.some(Ze) && (Ke(t), n.disconnect());
        });
        return (n.observe(e), () => n.disconnect());
      }),
      (e[0] = t),
      (e[1] = c));
  let l, u, d, f;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(a, {
        id: `computerHistory.reminder.title`,
        defaultMessage: `Computer History is active`,
        description: `Title of a recurring reminder that Computer History is recording activity`,
      })),
      (u = (0, J.jsx)(a, {
        id: `computerHistory.reminder.description`,
        defaultMessage: `Your activity across allowed apps and websites is being turned into memories`,
        description: `Reminder of what Computer History does while recording is active`,
      })),
      (d = (0, J.jsx)(`img`, { alt: ``, src: Ne, className: `h-8 w-8 shrink-0` })),
      (f = (0, J.jsx)(a, {
        id: `computerHistory.reminder.manage`,
        defaultMessage: `Manage`,
        description: `Button opening Computer History settings from its activity reminder`,
      })),
      (e[2] = l),
      (e[3] = u),
      (e[4] = d),
      (e[5] = f))
    : ((l = e[2]), (u = e[3]), (d = e[4]), (f = e[5]));
  let p;
  e[6] !== s || e[7] !== t
    ? ((p = {
        label: f,
        onClick: () => {
          (qe(t), s(`/settings/chronicle`));
        },
      }),
      (e[6] = s),
      (e[7] = t),
      (e[8] = p))
    : (p = e[8]);
  let h;
  e[9] === n
    ? (h = e[10])
    : ((h = n.formatMessage({
        id: `computerHistory.reminder.dismiss`,
        defaultMessage: `Dismiss Computer History reminder`,
        description: `Accessible label for dismissing the Computer History activity reminder`,
      })),
      (e[9] = n),
      (e[10] = h));
  let _;
  e[11] === t ? (_ = e[12]) : ((_ = () => qe(t)), (e[11] = t), (e[12] = _));
  let v;
  e[13] !== h || e[14] !== _
    ? ((v = { ariaLabel: h, icon: m, onClick: _ }), (e[13] = h), (e[14] = _), (e[15] = v))
    : (v = e[15]);
  let y;
  e[16] !== p || e[17] !== v
    ? ((y = (0, J.jsx)(U, {
        title: l,
        description: u,
        leadingVisual: d,
        primaryAction: p,
        dismissAction: v,
      })),
      (e[16] = p),
      (e[17] = v),
      (e[18] = y))
    : (y = e[18]);
  let b;
  return (
    e[19] !== c || e[20] !== y
      ? ((b = (0, J.jsx)(`div`, { ref: c, className: `select-none`, children: y })),
        (e[19] = c),
        (e[20] = y),
        (e[21] = b))
      : (b = e[21]),
    b
  );
}
function Ze(e) {
  return e.isIntersecting;
}
var Qe, J;
function $e() {
  return ($e = e(() => {
    ((Qe = A()), f(), w(), y(), G(), h(), W(), j(), Ye(), (J = M()));
  }))();
}
function et(e) {
  let n = (0, tt.c)(15),
    { onDismiss: r, onViewRecap: i } = e,
    o = g(),
    s,
    c,
    l,
    u;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Y.jsx)(a, {
        id: `computerHistory.weeklyInsightsAnnouncement.title`,
        defaultMessage: `Your week in Computer History`,
        description: `Title of an announcement offering a recap of the user's recent Computer History`,
      })),
      (c = (0, Y.jsx)(a, {
        id: `computerHistory.weeklyInsightsAnnouncement.description`,
        defaultMessage: `See insights based on your past week of computer activity`,
        description: `Description of an announcement offering a recap of insights from the user's recent computer activity`,
      })),
      (l = (0, Y.jsx)(`img`, { alt: ``, src: Ne, className: `h-8 w-8 shrink-0` })),
      (u = (0, Y.jsx)(a, {
        id: `computerHistory.weeklyInsightsAnnouncement.viewRecap`,
        defaultMessage: `View recap`,
        description: `Button that requests a personalized recap of insights from the user's Computer History`,
      })),
      (n[0] = s),
      (n[1] = c),
      (n[2] = l),
      (n[3] = u))
    : ((s = n[0]), (c = n[1]), (l = n[2]), (u = n[3]));
  let d;
  n[4] !== o || n[5] !== i
    ? ((d = {
        label: u,
        onClick: () => {
          i(
            o.formatMessage(
              {
                id: `computerHistory.weeklyInsightsAnnouncement.weeklyRecapPrompt`,
                defaultMessage: `Give me a fun recap of my {computerHistoryPlugin}, including work patterns, distractions, favorite shortcuts, my writing style, and a light roast`,
                description: `Submitted conversation prompt asking Codex for an entertaining recap of the user's Computer History, including a mention of the Computer History plugin`,
              },
              {
                computerHistoryPlugin: De({
                  defaultPrompt: null,
                  pluginDisplayName: o.formatMessage(ze),
                  pluginId: `${N}@${t}`,
                }).trim(),
              },
            ),
          );
        },
      }),
      (n[4] = o),
      (n[5] = i),
      (n[6] = d))
    : (d = n[6]);
  let f;
  n[7] === o
    ? (f = n[8])
    : ((f = o.formatMessage({
        id: `computerHistory.weeklyInsightsAnnouncement.dismissLabel`,
        defaultMessage: `Dismiss Computer History weekly insights`,
        description: `Accessible label for dismissing the announcement offering a recap of weekly Computer History insights`,
      })),
      (n[7] = o),
      (n[8] = f));
  let p;
  n[9] !== r || n[10] !== f
    ? ((p = { ariaLabel: f, icon: ne, onClick: r }), (n[9] = r), (n[10] = f), (n[11] = p))
    : (p = n[11]);
  let m;
  return (
    n[12] !== d || n[13] !== p
      ? ((m = (0, Y.jsx)(U, {
          title: s,
          description: c,
          leadingVisual: l,
          primaryAction: d,
          dismissAction: p,
        })),
        (n[12] = d),
        (n[13] = p),
        (n[14] = m))
      : (m = n[14]),
    m
  );
}
var tt, Y;
function nt() {
  return (nt = e(() => {
    ((tt = A()), k(), w(), G(), Re(), W(), b(), ye(), (Y = M()));
  }))();
}
function rt(e, t = Date.now()) {
  let n = t - at;
  return e.some(({ startMs: e }) => e <= n) ? it(e, n, t) >= st && it(e, t - ot, t) >= ct : !1;
}
function it(e, t, n) {
  let r = e
      .map((e) => ({ endMs: Math.min(e.endMs, n), startMs: Math.max(e.startMs, t) }))
      .filter(({ endMs: e, startMs: t }) => e > t)
      .sort((e, t) => e.startMs - t.startMs),
    i = 0,
    a = t;
  for (let { endMs: e, startMs: t } of r) e <= a || ((i += e - Math.max(t, a)), (a = e));
  return i;
}
var X, at, ot, st, ct, lt, ut;
function dt() {
  return (dt = e(() => {
    (f(),
      Ie(),
      Be(),
      j(),
      B(),
      (X = 36e5),
      (at = 168 * X),
      (ot = 48 * X),
      (st = 48 * X),
      (ct = 6 * X),
      (lt = R(`computer-history-weekly-insights-announcement-dismissed-v1`, !1)),
      (ut = E(r, ({ get: e }) => {
        if (e(lt) || !e(Ve)) return `ineligible`;
        let t = e(Le);
        return t.isPending
          ? `loading`
          : !t.isSuccess || t.data == null
            ? `ineligible`
            : rt(t.data)
              ? `eligible`
              : `ineligible`;
      })));
  }))();
}
function ft(e) {
  let t = (0, mt.c)(9),
    { onDismiss: n, onImport: r, providerId: i, onShown: a } = e,
    o = (0, ht.useRef)(!1),
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = () => {
        o.current || ((o.current = !0), a());
      }),
      (t[0] = a),
      (t[1] = s));
  let c = (0, ht.useEffectEvent)(s),
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = () => {
        c();
      }),
      (t[2] = c),
      (t[3] = l));
  let u;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = []), (t[4] = u)) : (u = t[4]),
    (0, ht.useEffect)(l, u));
  let d;
  return (
    t[5] !== n || t[6] !== r || t[7] !== i
      ? ((d = (0, Z.jsx)(pt, { onDismiss: n, onImport: r, providerId: i })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = i),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function pt(e) {
  let t = (0, mt.c)(19),
    { onDismiss: n, onImport: r, providerId: i } = e,
    o = g(),
    s = i === `claude-code` ? `claudeCode` : i,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(xe, { compact: !0, sourceIconVariant: `neutral` })), (t[0] = c))
    : (c = t[0]);
  let l, u, d;
  t[1] !== s || t[2] !== i
    ? ((l =
        i == null
          ? (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.title`,
              defaultMessage: `Bring your work into ChatGPT`,
              description: `Title shown in the Home banner prompting users to import work from another AI tool`,
            })
          : (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.personalizedTitle`,
              defaultMessage: `Bring your {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}} work into ChatGPT`,
              description: `Import banner title; provider selects the detected AI product's brand name`,
              values: { provider: s },
            })),
      (u =
        i == null
          ? (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.description`,
              defaultMessage: `Import your setup, projects, and chats from other AI tools so you can continue here—and keep future changes in sync`,
              description: `Description shown in the Home banner prompting users to import work from another AI tool`,
            })
          : (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.personalizedDescription`,
              defaultMessage: `Import your setup, projects, and chats from {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}} so you can continue here—and keep future changes in sync`,
              description: `Import banner description; provider selects the detected AI product's brand name`,
              values: { provider: s },
            })),
      (d =
        i == null
          ? (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.action`,
              defaultMessage: `Import your context`,
              description: `Button label in the Home banner that opens external agent import`,
            })
          : (0, Z.jsx)(a, {
              id: `externalAgentImport.homeBeacon.personalizedAction`,
              defaultMessage: `Import from {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}}`,
              description: `Button opening import review; provider selects the detected AI product's brand name`,
              values: { provider: s },
            })),
      (t[1] = s),
      (t[2] = i),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d))
    : ((l = t[3]), (u = t[4]), (d = t[5]));
  let f;
  t[6] !== r || t[7] !== d
    ? ((f = { label: d, onClick: r }), (t[6] = r), (t[7] = d), (t[8] = f))
    : (f = t[8]);
  let p;
  t[9] === o
    ? (p = t[10])
    : ((p = o.formatMessage({
        id: `externalAgentImport.homeBeacon.dismiss`,
        defaultMessage: `Dismiss import banner`,
        description: `Accessible label for dismissing the external agent import Home banner`,
      })),
      (t[9] = o),
      (t[10] = p));
  let m;
  t[11] !== n || t[12] !== p
    ? ((m = { ariaLabel: p, icon: ne, onClick: n }), (t[11] = n), (t[12] = p), (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== l || t[15] !== u || t[16] !== f || t[17] !== m
      ? ((h = (0, Z.jsx)(`div`, {
          className: `select-none`,
          children: (0, Z.jsx)(U, {
            leadingVisual: c,
            title: l,
            description: u,
            primaryAction: f,
            dismissAction: m,
          }),
        })),
        (t[14] = l),
        (t[15] = u),
        (t[16] = f),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
var mt, ht, Z;
function gt() {
  return (gt = e(() => {
    ((mt = A()), (ht = P()), w(), W(), je(), b(), (Z = M()));
  }))();
}
function _t({ histories: e, importStatus: t }) {
  let n = t.latestImportedAtMs;
  for (let t of e) {
    if (t.successes.length === 0) continue;
    let e = Number(t.completedAtMs);
    n = n == null ? e : Math.max(n, e);
  }
  return n;
}
function vt({
  hasImportableItems: e,
  isExperimentEnabled: t,
  lastShownAtMs: n,
  latestImportedAtMs: r,
  nowMs: i,
}) {
  return e && t && St(n, i) && !Ct(r, i);
}
function yt(e) {
  let t = (0, wt.c)(27),
    { enabled: n } = e === void 0 ? {} : e,
    i = n === void 0 || n,
    a = _(pe) === !0,
    s = i && !a,
    c = o(r),
    u = te(),
    f = _(fe) ?? !1,
    p;
  t[0] !== f || t[1] !== u.pathname
    ? ((p = Ee({ hideFirstNewThreadOnboardingPromos: f, pathname: u.pathname })),
      (t[0] = f),
      (t[1] = u.pathname),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = _(At),
    g = _(se),
    [v] = (0, Q.useState)(bt),
    y;
  t[3] === h ? (y = t[4]) : ((y = () => h), (t[3] = h), (t[4] = y));
  let [b, x] = (0, Q.useState)(y);
  b === void 0 && h !== void 0 && x(h);
  let [S, w] = (0, Q.useState)(!1),
    [T, E] = (0, Q.useState)(!1),
    D = T ? b : h,
    { getExperiment: O, isLoading: k } = Se(),
    ee = s && !m && !k ? O(Et, { disableExposureLog: !0 }) : null,
    A = ee?.__evaluation?.is_user_in_experiment === !0 && ee.__evaluation.is_experiment_active === !0,
    j = Oe(s && !m && !k && !A ? `436503251` : !1),
    M = A || j,
    N = M ? Et : Tt,
    ne = s && !m && !k && O(N, { disableExposureLog: !0 }).get(`enabled`, !1) === !0,
    P = Oe(oe),
    ie = ue(P),
    ae = D !== void 0 && St(D, v),
    le = g?.hostId === C,
    ge = s && !m && ae && !S && !le,
    { data: I, isError: ve, isFetching: ye, isLoading: be } = re(ce, C, { enabled: ge }),
    {
      data: L,
      isError: xe,
      isFetching: R,
      isLoading: Ce,
    } = re(de, { hostId: C, providers: ie }, { enabled: ge }),
    we = I == null || L == null ? null : _t({ histories: I, importStatus: L }),
    Te = Ct(we, v),
    De =
      ge &&
      I != null &&
      L != null &&
      !ve &&
      !ye &&
      !be &&
      !xe &&
      !R &&
      !Ce &&
      !Te &&
      (!M || !he({ histories: I, importStatus: L })),
    ke = me(),
    z = _e({
      cacheDiscovery: !0,
      enabled: De,
      hostId: C,
      providers: ie,
      refetchOnWindowFocus: !0,
      retry: !1,
      sessionLimits: ke,
    }),
    B = M ? Dt.find((e) => ie.includes(e) && z.detectedItems.some((t) => t.providerId === e)) : void 0,
    Ae =
      De &&
      !z.isDetectionFetching &&
      !z.isDetectionError &&
      !z.hasDetectionRefreshError &&
      (!M || B != null) &&
      vt({
        hasImportableItems: z.hasImportableItems,
        isExperimentEnabled: !0,
        lastShownAtMs: D,
        latestImportedAtMs: we,
        nowMs: v,
      }),
    V;
  t[5] !== N || t[6] !== O || t[7] !== Ae || t[8] !== k || t[9] !== m
    ? ((V = (Ae && !m && !k ? O(N) : null)?.get(`enabled`, !1)),
      (t[5] = N),
      (t[6] = O),
      (t[7] = Ae),
      (t[8] = k),
      (t[9] = m),
      (t[10] = V))
    : (V = t[10]);
  let je = V === !0,
    H;
  t[11] !== c || t[12] !== w
    ? ((H = () => {
        (F(c, d, { action: l.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_DISMISSED }), w(!0));
      }),
      (t[11] = c),
      (t[12] = w),
      (t[13] = H))
    : (H = t[13]);
  let Me =
      s &&
      !m &&
      !S &&
      (b === void 0 || (ae && (k || (ne && (ye || be || R || Ce || (De && z.isDetectionFetching)))))),
    U;
  t[14] !== T || t[15] !== c || t[16] !== E
    ? ((U = () => {
        T ||
          (E(!0),
          F(c, d, { action: l.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_SHOWN }),
          c.set(At, Date.now()));
      }),
      (t[14] = T),
      (t[15] = c),
      (t[16] = E),
      (t[17] = U))
    : (U = t[17]);
  let W;
  t[18] === c
    ? (W = t[19])
    : ((W = () => {
        (F(c, d, { action: l.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_IMPORT_CLICKED }), xt(c));
      }),
      (t[18] = c),
      (t[19] = W));
  let G;
  return (
    t[20] !== je || t[21] !== B || t[22] !== H || t[23] !== Me || t[24] !== U || t[25] !== W
      ? ((G = { dismiss: H, isEligible: je, providerId: B, isLoading: Me, markShown: U, openImport: W }),
        (t[20] = je),
        (t[21] = B),
        (t[22] = H),
        (t[23] = Me),
        (t[24] = U),
        (t[25] = W),
        (t[26] = G))
      : (G = t[26]),
    G
  );
}
function bt() {
  return Date.now();
}
function xt(e) {
  x(
    async () => {
      let { runExternalAgentImportCommand: e } = await import(
        `./run-external-agent-import-command-dacd62fdb35f.js`
      );
      return { runExternalAgentImportCommand: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  )
    .then(({ runExternalAgentImportCommand: t }) => t(e, `home_beacon`))
    .catch(() => void 0);
}
function St(e, t) {
  return e == null || t - e >= Ot;
}
function Ct(e, t) {
  return e != null && t - e < kt;
}
var wt, Q, Tt, Et, Dt, Ot, kt, At;
function jt() {
  return (jt = e(() => {
    ((wt = A()),
      p(),
      f(),
      (Q = P()),
      y(),
      ae(),
      V(),
      I(),
      j(),
      z(),
      L(),
      B(),
      ge(),
      Te(),
      H(),
      Ce(),
      D(),
      (Tt = `463876344`),
      (Et = `1602805785`),
      (Dt = [`cursor`, `claude-code`, `claude-cowork`]),
      (Ot = 2592e6),
      (kt = 5184e6),
      (At = R(`external-agent-import-home-beacon-last-shown-at`, null)));
  }))();
}
function Mt(e) {
  let t = (0, Pt.c)(13),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: i } = n,
    a = i === void 0 || i,
    s = o(r),
    { key: c } = te(),
    l = _(Rt) ?? ve(Lt, !1),
    u = _(zt),
    d = _(Bt),
    [f, p] = (0, Ft.useState)(!1),
    [m] = (0, Ft.useState)(Nt),
    [h, g] = (0, Ft.useState)(`loading`);
  if (u != null && h === `loading`) {
    let e = It[u.shownCount - 1] ?? 30;
    (d?.routeEntryKey === c && d.lastShownAtMs === u.lastShownAtMs) ||
    u.lastShownAtMs == null ||
    m - u.lastShownAtMs >= e * 864e5
      ? g(`eligible`)
      : g(`cooldown`);
  }
  let v = a && !f && !l && h === `eligible`,
    y;
  t[2] === v ? (y = t[3]) : ((y = { enabled: v }), (t[2] = v), (t[3] = y));
  let b = We(y),
    x;
  t[4] === s
    ? (x = t[5])
    : ((x = () => {
        (p(!0), s.set(Rt, !0));
      }),
      (t[4] = s),
      (t[5] = x));
  let S = v && b === !0,
    C = a && !f && !l && (h === `loading` || (h === `eligible` && b === void 0)),
    w;
  t[6] === s
    ? (w = t[7])
    : ((w = () => {
        (p(!0), s.set(Rt, !0), He(void 0, `codex_desktop_gift_beacon`));
      }),
      (t[6] = s),
      (t[7] = w));
  let T;
  return (
    t[8] !== x || t[9] !== S || t[10] !== C || t[11] !== w
      ? ((T = { dismiss: x, isEligible: S, isLoading: C, openGiftCredits: w }),
        (t[8] = x),
        (t[9] = S),
        (t[10] = C),
        (t[11] = w),
        (t[12] = T))
      : (T = t[12]),
    T
  );
}
function Nt() {
  return Date.now();
}
var Pt, Ft, It, Lt, Rt, zt, Bt;
function Vt() {
  return (Vt = e(() => {
    ((Pt = A()),
      f(),
      (Ft = P()),
      y(),
      j(),
      Me(),
      B(),
      Ue(),
      Ge(),
      (It = [7, 14, 30]),
      (Lt = `has-seen-gift-credits-home-banner`),
      (Rt = R(Lt, !1)),
      (zt = R(`gift-credits-home-beacon-state`, { shownCount: 0 })),
      (Bt = S(r, null)));
  }))();
}
function Ht(e) {
  let t = (0, Ut.c)(21),
    { onDismiss: i, onOpenGiftCredits: s } = e,
    l = o(r),
    u = g(),
    { key: d } = te(),
    f = (0, Wt.useRef)(!1),
    p;
  t[0] !== d || t[1] !== l
    ? ((p = () => {
        if (f.current) return;
        f.current = !0;
        let e = l.get(zt),
          t = l.get(Bt);
        if (t?.routeEntryKey === d && t.lastShownAtMs === e?.lastShownAtMs) return;
        let n = Date.now();
        (l.set(Bt, { lastShownAtMs: n, routeEntryKey: d }),
          l.set(zt, (e) => ({ lastShownAtMs: n, shownCount: (e?.shownCount ?? 0) + 1 })),
          F(l, v, { entryPoint: `codex_desktop_gift_beacon`, outcome: `shown`, step: `entry_exposure` }));
      }),
      (t[0] = d),
      (t[1] = l),
      (t[2] = p))
    : (p = t[2]);
  let m = (0, Wt.useEffectEvent)(p),
    h;
  t[3] === m
    ? (h = t[4])
    : ((h = () => {
        m();
      }),
      (t[3] = m),
      (t[4] = h));
  let _;
  (t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = []), (t[5] = _)) : (_ = t[5]),
    (0, Wt.useEffect)(h, _));
  let y, b, x, S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, $.jsx)(a, {
        id: `codex.giftCredits.homeBanner.chatgptCredits.title`,
        defaultMessage: `Gift ChatGPT credits`,
        description: `Title shown in the Codex home banner promoting gift credits`,
      })),
      (b = (0, $.jsx)(a, {
        id: `codex.giftCredits.homeBanner.chatgptCredits.description`,
        defaultMessage: `Send a friend credits they can use for Work or Codex tasks`,
        description: `Description shown in the Codex home banner promoting gift credits`,
      })),
      (x = (0, $.jsx)(c, { "aria-hidden": !0, asset: T })),
      (S = (0, $.jsx)(a, {
        id: `codex.giftCredits.homeBanner.action`,
        defaultMessage: `Gift credits`,
        description: `Button label that opens the ChatGPT gift credits purchase flow`,
      })),
      (t[6] = y),
      (t[7] = b),
      (t[8] = x),
      (t[9] = S))
    : ((y = t[6]), (b = t[7]), (x = t[8]), (S = t[9]));
  let C;
  t[10] !== s || t[11] !== l
    ? ((C = {
        label: S,
        onClick: () => {
          (F(l, v, { entryPoint: `codex_desktop_gift_beacon`, outcome: `opened`, step: `entry_exposure` }),
            s());
        },
      }),
      (t[10] = s),
      (t[11] = l),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] === u
    ? (w = t[14])
    : ((w = u.formatMessage({
        id: `codex.giftCredits.homeBanner.dismiss`,
        defaultMessage: `Dismiss gift credits banner`,
        description: `Accessible label for dismissing the Codex gift credits home banner`,
      })),
      (t[13] = u),
      (t[14] = w));
  let E;
  t[15] !== i || t[16] !== w
    ? ((E = { ariaLabel: w, icon: n, onClick: i }), (t[15] = i), (t[16] = w), (t[17] = E))
    : (E = t[17]);
  let D;
  return (
    t[18] !== E || t[19] !== C
      ? ((D = (0, $.jsx)(U, {
          variant: `beacon`,
          actionsPlacement: `bodyOnNarrow`,
          title: y,
          description: b,
          leadingVisual: x,
          primaryAction: C,
          dismissAction: E,
        })),
        (t[18] = E),
        (t[19] = C),
        (t[20] = D))
      : (D = t[20]),
    D
  );
}
var Ut, Wt, $;
function Gt() {
  return (Gt = e(() => {
    ((Ut = A()), p(), ee(), f(), (Wt = P()), w(), y(), u(), h(), W(), I(), j(), Vt(), ($ = M()));
  }))();
}
export {
  Ye as _,
  jt as a,
  gt as c,
  dt as d,
  et as f,
  q as g,
  $e as h,
  Mt as i,
  lt as l,
  Xe as m,
  Gt as n,
  yt as o,
  nt as p,
  Vt as r,
  ft as s,
  Ht as t,
  ut as u,
};
//# sourceMappingURL=entry-points-180a9292a286.js.map
