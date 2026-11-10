const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./run-external-agent-import-command-620c3feaf69f.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  CCt as r,
  CY as i,
  DB as a,
  FBt as o,
  FC as s,
  IC as c,
  Kxt as l,
  LNt as u,
  Lxt as d,
  N5 as f,
  NSt as p,
  OB as m,
  OFt as h,
  P5 as g,
  PBt as _,
  Qst as v,
  Rrt as y,
  SY as b,
  TY as x,
  USt as S,
  VSt as ee,
  XO as C,
  XOt as w,
  YO as T,
  Yst as E,
  Z5 as D,
  ZSt as O,
  ast as te,
  iCt as k,
  ist as ne,
  kCt as re,
  kFt as A,
  nCt as ie,
  okt as j,
  sct as ae,
  tkt as M,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as N,
  Bxt as oe,
  CJt as se,
  Cjr as ce,
  Gxt as le,
  Hxt as ue,
  ILr as de,
  KBr as fe,
  LLr as P,
  Mkn as pe,
  Rxt as me,
  SJt as he,
  SSt as ge,
  Tjr as _e,
  Uxt as F,
  dSt as ve,
  dTn as ye,
  eSt as be,
  fSt as xe,
  iSt as Se,
  kLr as I,
  lBr as Ce,
  mSt as we,
  pSt as Te,
  qxt as Ee,
  rSt as De,
  uBr as L,
  uTn as R,
  vxt as Oe,
  wSt as z,
  wkn as ke,
  xMr as B,
  xjr as V,
  xkn as Ae,
  yMr as H,
  yxt as je,
  zxt as Me,
} from "./app-initial-ad16eaadf81f.js";
import { K_ as U, q_ as W } from "./app-primary-3e00728c2a4c.js";
import { n as G, t as Ne } from "./computer-history-plugin-icon-316126a86c18.js";
import { a as Pe, r as Fe } from "./chronicle-service-queries-10a9f98f13fc.js";
import { a as Ie, i as Le } from "./computer-history-query-865e2a9eeb6e.js";
import { r as Re, t as ze } from "./computer-history-suggestion-prompt-b38af7618729.js";
import { a as Be, i as Ve } from "./computer-history-suggestions-2418c784f049.js";
import { a as He, i as Ue, n as We, t as Ge } from "./entry-point-availability-27f6c413a2ec.js";
function Ke(e) {
  let t = e.get(K);
  if (!e.get(R) || e.get(q) !== `eligible` || t == null || t.nextReminderAt > Date.now()) return;
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
    (O(),
      ye(),
      te(),
      n(),
      Pe(),
      Ce(),
      I(),
      se(),
      (Je = 864e5),
      (K = N(`computer-history-reminder`, null)),
      (q = re(v, () => `ineligible`, {
        onMount: (e, t) => {
          let n = t.watch(({ get: n }) => {
            if (ne.chronicle == null || !n(L, `3104400975`)) {
              e(`ineligible`);
              return;
            }
            let { data: r, dataUpdatedAt: i, isError: a, isFetching: o } = n(Fe);
            if (!n(he) || a || r?.recorderState !== `running`) {
              e(`ineligible`);
              return;
            }
            let s = n(K);
            s == null && !o && t.set(K, { nextReminderAt: Date.now() + Je, milestone: `day` });
            let c = n(R) === !0 && !o && s != null && s.nextReminderAt <= i;
            e((e) => (e === `presented` ? e : c ? `eligible` : `ineligible`));
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
    n = t(v),
    r = j(),
    i = S(),
    a;
  e[0] === n
    ? (a = e[1])
    : ((a = (e) => {
        if (e == null) return;
        let t = new IntersectionObserver((e) => {
          e.some(Ze) && (Ke(n), t.disconnect());
        });
        return (t.observe(e), () => t.disconnect());
      }),
      (e[0] = n),
      (e[1] = a));
  let o, s, c, l;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, J.jsx)(M, {
        id: `computerHistory.reminder.title`,
        defaultMessage: `Computer History is active`,
        description: `Title of a recurring reminder that Computer History is recording activity`,
      })),
      (s = (0, J.jsx)(M, {
        id: `computerHistory.reminder.description`,
        defaultMessage: `Your activity across allowed apps and websites is being turned into memories`,
        description: `Reminder of what Computer History does while recording is active`,
      })),
      (c = (0, J.jsx)(`img`, { alt: ``, src: Ne, className: `h-8 w-8 shrink-0` })),
      (l = (0, J.jsx)(M, {
        id: `computerHistory.reminder.manage`,
        defaultMessage: `Manage`,
        description: `Button opening Computer History settings from its activity reminder`,
      })),
      (e[2] = o),
      (e[3] = s),
      (e[4] = c),
      (e[5] = l))
    : ((o = e[2]), (s = e[3]), (c = e[4]), (l = e[5]));
  let u;
  e[6] !== i || e[7] !== n
    ? ((u = {
        label: l,
        onClick: () => {
          (qe(n), i(`/settings/chronicle`));
        },
      }),
      (e[6] = i),
      (e[7] = n),
      (e[8] = u))
    : (u = e[8]);
  let d;
  e[9] === r
    ? (d = e[10])
    : ((d = r.formatMessage({
        id: `computerHistory.reminder.dismiss`,
        defaultMessage: `Dismiss Computer History reminder`,
        description: `Accessible label for dismissing the Computer History activity reminder`,
      })),
      (e[9] = r),
      (e[10] = d));
  let f;
  e[11] === n ? (f = e[12]) : ((f = () => qe(n)), (e[11] = n), (e[12] = f));
  let p;
  e[13] !== d || e[14] !== f
    ? ((p = { ariaLabel: d, icon: b, onClick: f }), (e[13] = d), (e[14] = f), (e[15] = p))
    : (p = e[15]);
  let m;
  e[16] !== u || e[17] !== p
    ? ((m = (0, J.jsx)(U, {
        title: o,
        description: s,
        leadingVisual: c,
        primaryAction: u,
        dismissAction: p,
      })),
      (e[16] = u),
      (e[17] = p),
      (e[18] = m))
    : (m = e[18]);
  let h;
  return (
    e[19] !== a || e[20] !== m
      ? ((h = (0, J.jsx)(`div`, { ref: a, className: `select-none`, children: m })),
        (e[19] = a),
        (e[20] = m),
        (e[21] = h))
      : (h = e[21]),
    h
  );
}
function Ze(e) {
  return e.isIntersecting;
}
var Qe, J;
function $e() {
  return ($e = e(() => {
    ((Qe = _()), O(), w(), p(), G(), x(), W(), n(), Ye(), (J = u()));
  }))();
}
function et(e) {
  let t = (0, tt.c)(15),
    { onDismiss: n, onViewRecap: r } = e,
    i = j(),
    a,
    o,
    s,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(M, {
        id: `computerHistory.weeklyInsightsAnnouncement.title`,
        defaultMessage: `Your week in Computer History`,
        description: `Title of an announcement offering a recap of the user's recent Computer History`,
      })),
      (o = (0, Y.jsx)(M, {
        id: `computerHistory.weeklyInsightsAnnouncement.description`,
        defaultMessage: `See insights based on your past week of computer activity`,
        description: `Description of an announcement offering a recap of insights from the user's recent computer activity`,
      })),
      (s = (0, Y.jsx)(`img`, { alt: ``, src: Ne, className: `h-8 w-8 shrink-0` })),
      (c = (0, Y.jsx)(M, {
        id: `computerHistory.weeklyInsightsAnnouncement.viewRecap`,
        defaultMessage: `View recap`,
        description: `Button that requests a personalized recap of insights from the user's Computer History`,
      })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s),
      (t[3] = c))
    : ((a = t[0]), (o = t[1]), (s = t[2]), (c = t[3]));
  let u;
  t[4] !== i || t[5] !== r
    ? ((u = {
        label: c,
        onClick: () => {
          r(
            i.formatMessage(
              {
                id: `computerHistory.weeklyInsightsAnnouncement.weeklyRecapPrompt`,
                defaultMessage: `Give me a fun recap of my {computerHistoryPlugin}, including work patterns, distractions, favorite shortcuts, my writing style, and a light roast`,
                description: `Submitted conversation prompt asking Codex for an entertaining recap of the user's Computer History, including a mention of the Computer History plugin`,
              },
              {
                computerHistoryPlugin: ge({
                  defaultPrompt: null,
                  pluginDisplayName: i.formatMessage(ze),
                  pluginId: `${d}@${l}`,
                }).trim(),
              },
            ),
          );
        },
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = u))
    : (u = t[6]);
  let f;
  t[7] === i
    ? (f = t[8])
    : ((f = i.formatMessage({
        id: `computerHistory.weeklyInsightsAnnouncement.dismissLabel`,
        defaultMessage: `Dismiss Computer History weekly insights`,
        description: `Accessible label for dismissing the announcement offering a recap of weekly Computer History insights`,
      })),
      (t[7] = i),
      (t[8] = f));
  let p;
  t[9] !== n || t[10] !== f
    ? ((p = { ariaLabel: f, icon: T, onClick: n }), (t[9] = n), (t[10] = f), (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== u || t[13] !== p
      ? ((m = (0, Y.jsx)(U, {
          title: a,
          description: o,
          leadingVisual: s,
          primaryAction: u,
          dismissAction: p,
        })),
        (t[12] = u),
        (t[13] = p),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
var tt, Y;
function nt() {
  return (nt = e(() => {
    ((tt = _()), ae(), w(), G(), Re(), W(), C(), z(), (Y = u()));
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
    (O(),
      Ie(),
      Be(),
      n(),
      I(),
      (X = 36e5),
      (at = 168 * X),
      (ot = 48 * X),
      (st = 48 * X),
      (ct = 6 * X),
      (lt = N(`computer-history-weekly-insights-announcement-dismissed-v1`, !1)),
      (ut = r(v, ({ get: e }) => {
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
    a = j(),
    o = i === `claude-code` ? `claudeCode` : i,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(Te, { compact: !0, sourceIconVariant: `neutral` })), (t[0] = s))
    : (s = t[0]);
  let c, l, u;
  t[1] !== o || t[2] !== i
    ? ((c =
        i == null
          ? (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.title`,
              defaultMessage: `Bring your work into ChatGPT`,
              description: `Title shown in the Home banner prompting users to import work from another AI tool`,
            })
          : (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.personalizedTitle`,
              defaultMessage: `Bring your {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}} work into ChatGPT`,
              description: `Import banner title; provider selects the detected AI product's brand name`,
              values: { provider: o },
            })),
      (l =
        i == null
          ? (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.description`,
              defaultMessage: `Import your setup, projects, and chats from other AI tools so you can continue here—and keep future changes in sync`,
              description: `Description shown in the Home banner prompting users to import work from another AI tool`,
            })
          : (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.personalizedDescription`,
              defaultMessage: `Import your setup, projects, and chats from {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}} so you can continue here—and keep future changes in sync`,
              description: `Import banner description; provider selects the detected AI product's brand name`,
              values: { provider: o },
            })),
      (u =
        i == null
          ? (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.action`,
              defaultMessage: `Import your context`,
              description: `Button label in the Home banner that opens external agent import`,
            })
          : (0, Z.jsx)(M, {
              id: `externalAgentImport.homeBeacon.personalizedAction`,
              defaultMessage: `Import from {provider, select, cursor {Cursor} claudeCode {Claude Code} other {Claude Cowork}}`,
              description: `Button opening import review; provider selects the detected AI product's brand name`,
              values: { provider: o },
            })),
      (t[1] = o),
      (t[2] = i),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u))
    : ((c = t[3]), (l = t[4]), (u = t[5]));
  let d;
  t[6] !== r || t[7] !== u
    ? ((d = { label: u, onClick: r }), (t[6] = r), (t[7] = u), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === a
    ? (f = t[10])
    : ((f = a.formatMessage({
        id: `externalAgentImport.homeBeacon.dismiss`,
        defaultMessage: `Dismiss import banner`,
        description: `Accessible label for dismissing the external agent import Home banner`,
      })),
      (t[9] = a),
      (t[10] = f));
  let p;
  t[11] !== n || t[12] !== f
    ? ((p = { ariaLabel: f, icon: T, onClick: n }), (t[11] = n), (t[12] = f), (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== c || t[15] !== l || t[16] !== d || t[17] !== p
      ? ((m = (0, Z.jsx)(`div`, {
          className: `select-none`,
          children: (0, Z.jsx)(U, {
            leadingVisual: s,
            title: c,
            description: l,
            primaryAction: d,
            dismissAction: p,
          }),
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = d),
        (t[17] = p),
        (t[18] = m))
      : (m = t[18]),
    m
  );
}
var mt, ht, Z;
function gt() {
  return (gt = e(() => {
    ((mt = _()), (ht = o()), w(), W(), we(), C(), (Z = u()));
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
  let n = (0, wt.c)(27),
    { enabled: r } = e === void 0 ? {} : e,
    i = r === void 0 || r,
    a = k(ve) === !0,
    o = i && !a,
    s = t(v),
    c = ee(),
    l = k(Ae) ?? !1,
    u;
  n[0] !== l || n[1] !== c.pathname
    ? ((u = pe({ hideFirstNewThreadOnboardingPromos: l, pathname: c.pathname })),
      (n[0] = l),
      (n[1] = c.pathname),
      (n[2] = u))
    : (u = n[2]);
  let d = u,
    p = k(At),
    m = k(Se),
    [h] = (0, Q.useState)(bt),
    _;
  n[3] === p ? (_ = n[4]) : ((_ = () => p), (n[3] = p), (n[4] = _));
  let [y, b] = (0, Q.useState)(_);
  y === void 0 && p !== void 0 && b(p);
  let [x, S] = (0, Q.useState)(!1),
    [C, w] = (0, Q.useState)(!1),
    T = C ? y : p,
    { getExperiment: D, isLoading: O } = _e(),
    te = o && !d && !O ? D(Et, { disableExposureLog: !0 }) : null,
    ne = te?.__evaluation?.is_user_in_experiment === !0 && te.__evaluation.is_experiment_active === !0,
    re = ce(o && !d && !O && !ne ? `436503251` : !1),
    A = ne || re,
    j = A ? Et : Tt,
    ae = o && !d && !O && D(j, { disableExposureLog: !0 }).get(`enabled`, !1) === !0,
    M = ce(oe),
    N = ue(M),
    se = T !== void 0 && St(T, h),
    de = m?.hostId === E,
    fe = o && !d && se && !x && !de,
    { data: P, isError: me, isFetching: he, isLoading: ge } = ie(le, E, { enabled: fe }),
    {
      data: F,
      isError: ye,
      isFetching: xe,
      isLoading: I,
    } = ie(Ee, { hostId: E, providers: N }, { enabled: fe }),
    Ce = P == null || F == null ? null : _t({ histories: P, importStatus: F }),
    we = Ct(Ce, h),
    Te =
      fe &&
      P != null &&
      F != null &&
      !me &&
      !he &&
      !ge &&
      !ye &&
      !xe &&
      !I &&
      !we &&
      (!A || !be({ histories: P, importStatus: F })),
    De = Me(),
    L = je({
      cacheDiscovery: !0,
      enabled: Te,
      hostId: E,
      providers: N,
      refetchOnWindowFocus: !0,
      retry: !1,
      sessionLimits: De,
    }),
    R = A ? Dt.find((e) => N.includes(e) && L.detectedItems.some((t) => t.providerId === e)) : void 0,
    Oe =
      Te &&
      !L.isDetectionFetching &&
      !L.isDetectionError &&
      !L.hasDetectionRefreshError &&
      (!A || R != null) &&
      vt({
        hasImportableItems: L.hasImportableItems,
        isExperimentEnabled: !0,
        lastShownAtMs: T,
        latestImportedAtMs: Ce,
        nowMs: h,
      }),
    z;
  n[5] !== j || n[6] !== D || n[7] !== Oe || n[8] !== O || n[9] !== d
    ? ((z = (Oe && !d && !O ? D(j) : null)?.get(`enabled`, !1)),
      (n[5] = j),
      (n[6] = D),
      (n[7] = Oe),
      (n[8] = O),
      (n[9] = d),
      (n[10] = z))
    : (z = n[10]);
  let ke = z === !0,
    V;
  n[11] !== s || n[12] !== S
    ? ((V = () => {
        (B(s, g, { action: f.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_DISMISSED }), S(!0));
      }),
      (n[11] = s),
      (n[12] = S),
      (n[13] = V))
    : (V = n[13]);
  let H =
      o &&
      !d &&
      !x &&
      (y === void 0 || (se && (O || (ae && (he || ge || xe || I || (Te && L.isDetectionFetching)))))),
    U;
  n[14] !== C || n[15] !== s || n[16] !== w
    ? ((U = () => {
        C ||
          (w(!0),
          B(s, g, { action: f.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_SHOWN }),
          s.set(At, Date.now()));
      }),
      (n[14] = C),
      (n[15] = s),
      (n[16] = w),
      (n[17] = U))
    : (U = n[17]);
  let W;
  n[18] === s
    ? (W = n[19])
    : ((W = () => {
        (B(s, g, { action: f.CODEX_EXTERNAL_AGENT_IMPORT_HOME_BEACON_ACTION_IMPORT_CLICKED }), xt(s));
      }),
      (n[18] = s),
      (n[19] = W));
  let G;
  return (
    n[20] !== ke || n[21] !== R || n[22] !== V || n[23] !== H || n[24] !== U || n[25] !== W
      ? ((G = { dismiss: V, isEligible: ke, providerId: R, isLoading: H, markShown: U, openImport: W }),
        (n[20] = ke),
        (n[21] = R),
        (n[22] = V),
        (n[23] = H),
        (n[24] = U),
        (n[25] = W),
        (n[26] = G))
      : (G = n[26]),
    G
  );
}
function bt() {
  return Date.now();
}
function xt(e) {
  h(
    async () => {
      let { runExternalAgentImportCommand: e } = await import(
        `./run-external-agent-import-command-620c3feaf69f.js`
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
    ((wt = _()),
      y(),
      O(),
      (Q = o()),
      p(),
      xe(),
      ke(),
      H(),
      n(),
      fe(),
      V(),
      I(),
      De(),
      F(),
      me(),
      Oe(),
      A(),
      (Tt = `463876344`),
      (Et = `1602805785`),
      (Dt = [`cursor`, `claude-code`, `claude-cowork`]),
      (Ot = 2592e6),
      (kt = 5184e6),
      (At = N(`external-agent-import-home-beacon-last-shown-at`, null)));
  }))();
}
function Mt(e) {
  let n = (0, Pt.c)(13),
    r;
  n[0] === e ? (r = n[1]) : ((r = e === void 0 ? {} : e), (n[0] = e), (n[1] = r));
  let { enabled: i } = r,
    a = i === void 0 || i,
    o = t(v),
    { key: s } = ee(),
    c = k(Rt) ?? de(Lt, !1),
    l = k(zt),
    u = k(Bt),
    [d, f] = (0, Ft.useState)(!1),
    [p] = (0, Ft.useState)(Nt),
    [m, h] = (0, Ft.useState)(`loading`);
  if (l != null && m === `loading`) {
    let e = It[l.shownCount - 1] ?? 30;
    (u?.routeEntryKey === s && u.lastShownAtMs === l.lastShownAtMs) ||
    l.lastShownAtMs == null ||
    p - l.lastShownAtMs >= e * 864e5
      ? h(`eligible`)
      : h(`cooldown`);
  }
  let g = a && !d && !c && m === `eligible`,
    _;
  n[2] === g ? (_ = n[3]) : ((_ = { enabled: g }), (n[2] = g), (n[3] = _));
  let y = We(_),
    b;
  n[4] === o
    ? (b = n[5])
    : ((b = () => {
        (f(!0), o.set(Rt, !0));
      }),
      (n[4] = o),
      (n[5] = b));
  let x = g && y === !0,
    S = a && !d && !c && (m === `loading` || (m === `eligible` && y === void 0)),
    C;
  n[6] === o
    ? (C = n[7])
    : ((C = () => {
        (f(!0), o.set(Rt, !0), He(void 0, `codex_desktop_gift_beacon`));
      }),
      (n[6] = o),
      (n[7] = C));
  let w;
  return (
    n[8] !== b || n[9] !== x || n[10] !== S || n[11] !== C
      ? ((w = { dismiss: b, isEligible: x, isLoading: S, openGiftCredits: C }),
        (n[8] = b),
        (n[9] = x),
        (n[10] = S),
        (n[11] = C),
        (n[12] = w))
      : (w = n[12]),
    w
  );
}
function Nt() {
  return Date.now();
}
var Pt, Ft, It, Lt, Rt, zt, Bt;
function Vt() {
  return (Vt = e(() => {
    ((Pt = _()),
      O(),
      (Ft = o()),
      p(),
      n(),
      P(),
      I(),
      Ue(),
      Ge(),
      (It = [7, 14, 30]),
      (Lt = `has-seen-gift-credits-home-banner`),
      (Rt = N(Lt, !1)),
      (zt = N(`gift-credits-home-beacon-state`, { shownCount: 0 })),
      (Bt = re(v, null)));
  }))();
}
function Ht(e) {
  let n = (0, Ut.c)(21),
    { onDismiss: r, onOpenGiftCredits: o } = e,
    c = t(v),
    l = j(),
    { key: u } = ee(),
    d = (0, Wt.useRef)(!1),
    f;
  n[0] !== u || n[1] !== c
    ? ((f = () => {
        if (d.current) return;
        d.current = !0;
        let e = c.get(zt),
          t = c.get(Bt);
        if (t?.routeEntryKey === u && t.lastShownAtMs === e?.lastShownAtMs) return;
        let n = Date.now();
        (c.set(Bt, { lastShownAtMs: n, routeEntryKey: u }),
          c.set(zt, (e) => ({ lastShownAtMs: n, shownCount: (e?.shownCount ?? 0) + 1 })),
          B(c, D, { entryPoint: `codex_desktop_gift_beacon`, outcome: `shown`, step: `entry_exposure` }));
      }),
      (n[0] = u),
      (n[1] = c),
      (n[2] = f))
    : (f = n[2]);
  let p = (0, Wt.useEffectEvent)(f),
    m;
  n[3] === p
    ? (m = n[4])
    : ((m = () => {
        p();
      }),
      (n[3] = p),
      (n[4] = m));
  let h;
  (n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = []), (n[5] = h)) : (h = n[5]),
    (0, Wt.useEffect)(m, h));
  let g, _, y, b;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, $.jsx)(M, {
        id: `codex.giftCredits.homeBanner.chatgptCredits.title`,
        defaultMessage: `Gift ChatGPT credits`,
        description: `Title shown in the Codex home banner promoting gift credits`,
      })),
      (_ = (0, $.jsx)(M, {
        id: `codex.giftCredits.homeBanner.chatgptCredits.description`,
        defaultMessage: `Send a friend credits they can use for Work or Codex tasks`,
        description: `Description shown in the Codex home banner promoting gift credits`,
      })),
      (y = (0, $.jsx)(a, { "aria-hidden": !0, asset: s })),
      (b = (0, $.jsx)(M, {
        id: `codex.giftCredits.homeBanner.action`,
        defaultMessage: `Gift credits`,
        description: `Button label that opens the ChatGPT gift credits purchase flow`,
      })),
      (n[6] = g),
      (n[7] = _),
      (n[8] = y),
      (n[9] = b))
    : ((g = n[6]), (_ = n[7]), (y = n[8]), (b = n[9]));
  let x;
  n[10] !== o || n[11] !== c
    ? ((x = {
        label: b,
        onClick: () => {
          (B(c, D, { entryPoint: `codex_desktop_gift_beacon`, outcome: `opened`, step: `entry_exposure` }),
            o());
        },
      }),
      (n[10] = o),
      (n[11] = c),
      (n[12] = x))
    : (x = n[12]);
  let S;
  n[13] === l
    ? (S = n[14])
    : ((S = l.formatMessage({
        id: `codex.giftCredits.homeBanner.dismiss`,
        defaultMessage: `Dismiss gift credits banner`,
        description: `Accessible label for dismissing the Codex gift credits home banner`,
      })),
      (n[13] = l),
      (n[14] = S));
  let C;
  n[15] !== r || n[16] !== S
    ? ((C = { ariaLabel: S, icon: i, onClick: r }), (n[15] = r), (n[16] = S), (n[17] = C))
    : (C = n[17]);
  let w;
  return (
    n[18] !== C || n[19] !== x
      ? ((w = (0, $.jsx)(U, {
          variant: `beacon`,
          actionsPlacement: `bodyOnNarrow`,
          title: g,
          description: _,
          leadingVisual: y,
          primaryAction: x,
          dismissAction: C,
        })),
        (n[18] = C),
        (n[19] = x),
        (n[20] = w))
      : (w = n[20]),
    w
  );
}
var Ut, Wt, $;
function Gt() {
  return (Gt = e(() => {
    ((Ut = _()), y(), c(), O(), (Wt = o()), w(), p(), m(), x(), W(), H(), n(), Vt(), ($ = u()));
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
//# sourceMappingURL=entry-points-6246194bc82c.js.map
