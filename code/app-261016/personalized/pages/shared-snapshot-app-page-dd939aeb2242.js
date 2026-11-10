import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HFt as i,
  JO as a,
  KO as o,
  KSt as s,
  LNt as c,
  MNt as l,
  Mst as u,
  NNt as d,
  NSt as f,
  ORt as p,
  PBt as m,
  Qst as h,
  TY as g,
  Uz as _,
  VRt as v,
  WO as y,
  Wz as b,
  XOt as x,
  Xz as S,
  Y3 as C,
  Z3 as w,
  ZSt as T,
  Zz as E,
  aat as D,
  gB as O,
  hB as k,
  iat as A,
  jst as j,
  kRt as M,
  nCt as N,
  nzt as P,
  okt as ee,
  qO as F,
  qU as te,
  rat as I,
  tkt as L,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $ur as R,
  DRr as z,
  EN as B,
  HG as ne,
  HOn as V,
  JRt as H,
  Ko as U,
  ORr as W,
  Qur as G,
  SRn as K,
  TN as q,
  UG as J,
  UOn as re,
  Vsr as ie,
  XEt as ae,
  Xdr as oe,
  Xo as se,
  Xur as ce,
  YEt as le,
  YRt as ue,
  Ydr as de,
  Zo as fe,
  Zur as pe,
  bRn as me,
  bur as he,
  czr as ge,
  du as _e,
  eRn as ve,
  edr as Y,
  ekn as ye,
  fBr as be,
  gK as xe,
  hK as Se,
  hzr as Ce,
  izr as we,
  kjr as Te,
  lBr as Ee,
  nM as De,
  nzr as Oe,
  qo as ke,
  tM as Ae,
  tRn as je,
  tdr as Me,
  tkn as Ne,
  uBr as Pe,
  uu as Fe,
  war as Ie,
  xMr as Le,
  xur as Re,
  yMr as ze,
} from "./app-initial-ad16eaadf81f.js";
import { rn as Be, tn as Ve } from "./app-primary-3e00728c2a4c.js";
import { n as He, t as Ue } from "./codex-thread-report-dialog-339dc56a4231.js";
import { i as We, t as Ge } from "./shared-snapshot-asset-reference-33214426cc96.js";
import { i as Ke, r as qe } from "./shared-snapshot-asset-scope-470027341d3a.js";
import { n as Je, r as Ye, t as Xe } from "./static-thread-transcript-366520b5970c.js";
import { a as Ze, i as Qe, o as $e, t as et } from "./shared-codex-snapshot-23f1f3ddbc30.js";
import { n as tt, t as nt } from "./thread-user-message-navigation-rail-71d610062b7f.js";
function rt(e, t, n) {
  return {
    eventType: e,
    shareId: n ? it.parse(t.share_id) : void 0,
    shareSessionId: n ? t.share_session_id : void 0,
    handoffId: n ? t.handoff_id : void 0,
    snapshotLoadDurationMs: t.snapshot_load_duration_ms,
    activeDwellTimeMs: t.active_dwell_time_ms,
    maxScrollDepthPercent: t.max_scroll_depth_percent,
    engagementType: t.engagement_type,
    failureReason: t.failure_reason,
    turnCount: t.turn_count,
    itemCount: t.item_count,
    assetCount: t.asset_count,
    unavailableAssetCount: t.unavailable_asset_count,
  };
}
var it;
function at() {
  return (at = e(() => {
    (pe(), (it = G.optional().catch(void 0)));
  }))();
}
function ot(e, t) {
  let n;
  switch (e) {
    case `codex_shared_thread_view_attempted`:
      n = `view_attempted`;
      break;
    case `codex_shared_thread_view_succeeded`:
      n = `view_succeeded`;
      break;
    case `codex_shared_thread_view_failed`:
      n = `view_failed`;
      break;
    case `codex_shared_thread_view_asset_failed`:
      n = `view_asset_failed`;
      break;
    default:
      return;
  }
  let r = document.querySelector(`meta[name="codex-shared-thread-viewer"]`),
    i = document.documentElement.dataset.deployment,
    a =
      document.documentElement.hasAttribute(`data-build`) &&
      (i == null || i === `preview` || i === `staging`),
    o = r?.content,
    s = r?.dataset.environment;
  if (
    (r == null &&
      a &&
      ((o = i === `preview` ? `preview` : `prod`), (s = i === `staging` ? `staging` : `prod`)),
    (o !== `prod` && o !== `preview`) || (s !== `prod` && s !== `staging`))
  )
    return;
  let c = { viewer: o, viewer_env: s };
  ((n === `view_failed` || n === `view_asset_failed`) && (c.failure_reason = st(t)),
    le.count(`codex_shared_thread_viewer`, n, c));
}
function st(e) {
  switch (e) {
    case `forbidden`:
    case `invalid_snapshot`:
    case `network_error`:
    case `not_found`:
    case `request_rejected`:
    case `server_error`:
      return e;
    case void 0:
    default:
      return `unknown`;
  }
}
function ct() {
  return (ct = e(() => {
    ae();
  }))();
}
function lt(e) {
  return {
    isAttributionEnabled: () => ce(e.get(be)),
    logEvent: (t, n) => {
      try {
        if (navigator.doNotTrack === `1`) return;
        (ot(
          t.replace(`CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_`, `codex_shared_thread_`).toLowerCase(),
          n.failure_reason,
        ),
          Le(e, R, rt(t, n, ce(e.get(be)))));
      } catch {}
    },
  };
}
function ut() {
  return (ut = e(() => {
    (Me(), ze(), Ee(), at(), ct());
  }))();
}
function dt(e) {
  let t = (0, ft.c)(5),
    { title: n, actions: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, pt.jsx)(`h1`, { className: `truncate select-none`, children: n })), (t[0] = n), (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, pt.jsx)(H.Header, {
          desktopPlacement: `titlebar`,
          divider: !1,
          children: (0, pt.jsx)(Ve, { start: i, trailing: r }),
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var ft, pt;
function mt() {
  return (mt = e(() => {
    ((ft = m()), ue(), Be(), (pt = c()));
  }))();
}
function ht(e, t) {
  if (Ct == null)
    try {
      let n = z(),
        r = gt({
          userID: e ?? void 0,
          email: t ?? void 0,
          customIDs: { stableID: n, WebAnonymousCookieID: n, DeviceId: n },
        });
      Ct = r.initializeAsync().then(
        ({ success: e }) => ((wt = e ? r : void 0), wt ?? null),
        () => null,
      );
      let { logger: i, ready: a } = _t(r, {
        appName: St,
        deviceId: n,
        isEnabled: () => navigator.doNotTrack !== `1`,
      });
      (a.catch(() => {
        Tt === i && (Tt = void 0);
      }),
        (Tt = i));
    } catch {}
}
function gt(e) {
  let t = D();
  return new xt.StatsigClient(Ae, e, {
    disableStorage: !0,
    enableCookies: !1,
    includeCurrentPageUrlWithEvents: !1,
    ...(navigator.doNotTrack === `1` ? { loggingEnabled: `disabled` } : {}),
    networkConfig: {
      api: `https://ab.chatgpt.com/v1`,
      logEventUrl: `/ces/v1/rgstr`,
      logEventFallbackUrls: [],
      networkOverrideFunc:
        t || I(`/ces/v1/rgstr`)[`X-OpenAI-Fedramp`] === `true`
          ? async (e, n) =>
              t && new URL(e, window.location.origin).pathname === `/v1/sdk_exception`
                ? new Response(null, { status: 204 })
                : fetch(e, { ...n, headers: { ...Object.fromEntries(new Headers(n.headers)), ...I(e) } })
          : void 0,
    },
  });
}
function _t(e, { appName: t, deviceId: n, isEnabled: r }) {
  let i = q(new URL(`/ces`, window.location.origin).href),
    a = new oe({
      appName: t,
      appVersion: `unknown`,
      deviceId: n,
      browserLocale: navigator.language,
      options: i.initOptions,
      settings: i.settings,
    });
  return {
    logger: a,
    ready: a.initialize({
      user: void 0,
      statsigClient: {
        getContext: () => e.getContext(),
        networkConfig: { logEventUrl: `/ces/v1/rgstr` },
        logEvent: (t, n, i) => {
          navigator.doNotTrack !== `1` && r() && e.logEvent(t, n, i);
        },
        flush: () => (navigator.doNotTrack !== `1` && r() ? e.flush() : void 0),
      },
    }),
  };
}
function vt() {
  return Tt;
}
function yt() {
  return wt;
}
async function bt() {
  return Ct ?? null;
}
var xt, St, Ct, wt, Tt;
function Et() {
  return (Et = e(() => {
    ((xt = Te()), de(), A(), W(), De(), B(), (St = `codex-shared-thread-viewer`));
  }))();
}
function Dt(e, t, n) {
  try {
    if (navigator.doNotTrack === `1`) return;
    ot(
      e.replace(`CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_`, `codex_shared_thread_`).toLowerCase(),
      t.failure_reason,
    );
    let r = vt();
    if (r == null) return;
    try {
      let i = ce(yt());
      r.trackStructuredEvent(R, {
        ...rt(e, t, i),
        codexMetadata: {
          codexWindowType: `browser`,
          authMethod: n == null ? void 0 : `chatgpt`,
          appName: St,
        },
      }).catch(() => {});
    } finally {
      e !== Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_ATTEMPTED && r.flush().catch(() => {});
    }
  } catch {}
}
async function Ot() {
  try {
    return (await bt())?.checkGate(`4251230779`) ?? !1;
  } catch {
    return !1;
  }
}
function kt() {
  return (kt = e(() => {
    (Me(), Et(), at(), ct());
  }))();
}
function At(e) {
  try {
    if (navigator.doNotTrack === `1`)
      return (sessionStorage.removeItem(Pt), { shareSessionId: crypto.randomUUID() });
    let t = sessionStorage.getItem(Pt),
      n = Nt.safeParse(t == null ? null : JSON.parse(t)).data;
    if (n?.shareId === e && n.expiresAt > Date.now())
      return { shareSessionId: n.shareSessionId, handoffId: n.handoffId };
  } catch {}
  return { shareSessionId: crypto.randomUUID() };
}
function jt(e, t, n) {
  if (navigator.doNotTrack !== `1`)
    try {
      sessionStorage.setItem(
        Pt,
        JSON.stringify({ shareId: e, shareSessionId: t, handoffId: n, expiresAt: Date.now() + 18e5 }),
      );
    } catch {}
}
function Mt() {
  try {
    sessionStorage.removeItem(Pt);
  } catch {}
}
var Nt, Pt;
function Ft() {
  return (Ft = e(() => {
    (i(),
      (Nt = M({ shareId: v(), shareSessionId: P(), handoffId: P(), expiresAt: p() })),
      (Pt = `codex-shared-snapshot-handoff`));
  }))();
}
function It(e) {
  let t = (0, Lt.c)(7),
    { scrollContainerRef: n, onSummary: r } = e,
    i;
  t[0] === r ? (i = t[1]) : ((i = (e) => r(e)), (t[0] = r), (t[1] = i));
  let a = (0, Rt.useEffectEvent)(i),
    o;
  t[2] !== a || t[3] !== n
    ? ((o = () => {
        let e = n.current;
        if (e == null) return;
        let t = document.visibilityState === `hidden` ? null : performance.now(),
          r = 0,
          i = !1,
          o = () => {
            let t = e.scrollHeight - e.clientHeight;
            if (t <= 0) return;
            let n = e.scrollTop / t;
            n >= 1
              ? (r = 100)
              : n >= 0.75 && r < 75
                ? (r = 75)
                : n >= 0.5 && r < 50
                  ? (r = 50)
                  : n >= 0.25 && r < 25 && (r = 25);
          },
          s = () => {
            if (i) return;
            i = !0;
            let n = {
              active_dwell_time_ms: Math.min(
                zt,
                Math.max(0, Math.round(t == null ? 0 : performance.now() - t)),
              ),
            };
            (e.scrollHeight > e.clientHeight && (n.max_scroll_depth_percent = r), a(n));
          },
          c = () => {
            document.visibilityState === `hidden` ? s() : (t ??= performance.now());
          };
        return (
          e.addEventListener(`scroll`, o, { passive: !0 }),
          document.addEventListener(`visibilitychange`, c),
          window.addEventListener(`pagehide`, s),
          () => {
            (s(),
              e.removeEventListener(`scroll`, o),
              document.removeEventListener(`visibilitychange`, c),
              window.removeEventListener(`pagehide`, s));
          }
        );
      }),
      (t[2] = a),
      (t[3] = n),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (t[5] === n ? (s = t[6]) : ((s = [n]), (t[5] = n), (t[6] = s)), (0, Rt.useEffect)(o, s), null);
}
var Lt, Rt, zt;
function Bt() {
  return (Bt = e(() => {
    ((Lt = m()), (Rt = r()), (zt = 3e5));
  }))();
}
function Vt(e) {
  let t = (0, Ht.c)(22),
    { codexDeepLink: n, open: r, onOpenChange: i, onOpenCodex: a, onGetCodex: s, returnFocusRef: c } = e,
    l = E(`(width < 48rem)`),
    u = r && !l,
    d;
  t[0] === c
    ? (d = t[1])
    : ((d = {
        onCloseAutoFocus: (e) => {
          c?.current != null && (e.preventDefault(), c.current.focus());
        },
      }),
      (t[0] = c),
      (t[1] = d));
  let f;
  t[2] === a
    ? (f = t[3])
    : ((f = (e) => {
        (e.preventDefault(), a());
      }),
      (t[2] = a),
      (t[3] = f));
  let p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(F, {
        className: `heading-dialog font-semibold text-pretty`,
        children: (0, X.jsx)(L, {
          id: `codex.sharedSnapshot.openCodex.title`,
          defaultMessage: `Continue in the ChatGPT app`,
          description: `Title of the shared chat viewer dialog offering to open or install the ChatGPT desktop app`,
        }),
      })),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [
          p,
          (0, X.jsx)(o, {
            className: `text-base leading-normal tracking-normal text-pretty text-codex-description`,
            children: (0, X.jsx)(L, {
              id: `codex.sharedSnapshot.openCodex.description`,
              defaultMessage: `Start your own chat from this shared chat`,
              description: `Explains that continuing from a shared chat starts a new private chat using the shared chat as reference context`,
            }),
          }),
        ],
      })),
      (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(`span`, {
        className: `min-w-0 whitespace-normal`,
        children: (0, X.jsx)(L, {
          id: `codex.sharedSnapshot.openCodex.retry`,
          defaultMessage: `Open in ChatGPT`,
          description: `Retries opening the same shared chat in the ChatGPT desktop app`,
        }),
      })),
      (t[6] = h))
    : (h = t[6]);
  let g;
  t[7] === n
    ? (g = t[8])
    : ((g = (0, X.jsxs)(C, {
        className: `max-w-full justify-center self-center`,
        allowShrink: !0,
        size: `large`,
        type: `submit`,
        children: [
          h,
          (0, X.jsx)(ve, {
            className: `icon-xs shrink-0`,
            ExternalIcon: ne,
            href: n,
            isBrowserEnabled: !1,
            openTarget: `external-browser`,
          }),
        ],
      })),
      (t[7] = n),
      (t[8] = g));
  let _;
  t[9] === s
    ? (_ = t[10])
    : ((_ = (0, X.jsx)(`div`, {
        className: `text-center text-sm text-codex-description`,
        children: (0, X.jsx)(L, {
          id: `codex.sharedSnapshot.openCodex.download`,
          defaultMessage: `Don't have the app? <download>Download ChatGPT for desktop</download>`,
          description: `Secondary action below the open-app button; the download tag opens the ChatGPT download page in a new browser tab`,
          values: {
            download: (e) =>
              (0, X.jsx)(`button`, {
                className: `cursor-interaction font-medium text-default underline underline-offset-2`,
                type: `button`,
                onClick: s,
                children: e,
              }),
          },
        }),
      })),
      (t[9] = s),
      (t[10] = _));
  let v;
  t[11] !== g || t[12] !== _
    ? ((v = (0, X.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [g, _] })),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v))
    : (v = t[13]);
  let b;
  t[14] !== f || t[15] !== v
    ? ((b = (0, X.jsxs)(`form`, {
        className: `flex flex-col items-center gap-6 px-8 py-7 text-center select-none`,
        onSubmit: f,
        children: [m, v],
      })),
      (t[14] = f),
      (t[15] = v),
      (t[16] = b))
    : (b = t[16]);
  let x;
  return (
    t[17] !== i || t[18] !== u || t[19] !== b || t[20] !== d
      ? ((x = (0, X.jsx)(y, { open: u, onOpenChange: i, size: `compact`, contentProps: d, children: b })),
        (t[17] = i),
        (t[18] = u),
        (t[19] = b),
        (t[20] = d),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
var Ht, X;
function Ut() {
  return (Ut = e(() => {
    ((Ht = m()), x(), w(), a(), je(), S(), J(), (X = c()));
  }))();
}
function Wt(e) {
  let t = (0, Yt.c)(8),
    { scrollContainerRef: n, snapshot: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = () => n.current), (t[0] = n), (t[1] = i));
  let a = O(i),
    o = b(),
    s;
  t[2] === r ? (s = t[3]) : ((s = Jt(r)), (t[2] = r), (t[3] = s));
  let c;
  return (
    t[4] !== a || t[5] !== o || t[6] !== s
      ? ((c = (0, Xt.jsx)(nt, {
          getScrollElement: a,
          items: s,
          prefersReducedMotion: o,
          tooltipComponents: Zt,
        })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Gt(e) {
  let t = (0, Yt.c)(8),
    { children: n, className: r, components: i, externalResourcePolicy: a, textStyle: o } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = Re(n, void 0)), (t[0] = n), (t[1] = s));
  let c;
  return (
    t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== s || t[6] !== o
      ? ((c = (0, Xt.jsx)(U, {
          className: r,
          components: i,
          externalResourcePolicy: a,
          getDefaultComponents: Kt,
          textStyle: o,
          tokens: s,
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = s),
        (t[6] = o),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Kt({ allowWideBlocks: e }) {
  return se({ allowWideBlocks: e, mediaComponent: qt });
}
function qt(e) {
  let t = (0, Yt.c)(2),
    { alt: n } = e,
    r;
  return (
    t[0] === n ? (r = t[1]) : ((r = (0, Xt.jsx)(Xt.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function Jt(e) {
  let t = [],
    n = 0;
  for (let [r, i] of e.turns.entries()) {
    let e;
    for (let a of i.items)
      if (a.type === `userMessage`) {
        n += 1;
        let i = { outputs: [], response: `` };
        ((e = i),
          t.push({
            getLabel: () =>
              a.content
                .flatMap((e) => (e.type === `text` ? [e.text] : []))
                .join(
                  `
`,
                )
                .trim(),
            getPreview: () => i,
            id: `message-${n}`,
            isHeartbeat: !1,
            turnKey: `turn-${r}`,
          }));
      } else
        a.type === `agentMessage` && a.phase !== `commentary`
          ? ((n += 1), e != null && (e.response = a.text))
          : a.type === `fileChange`
            ? e?.outputs.push(...a.changes.map(({ path: e }) => ({ label: e ?? null, type: `file` })))
            : a.type === `imageGeneration` && e?.outputs.push({ label: null, type: `image` });
  }
  return t;
}
var Yt, Xt, Zt;
function Qt() {
  return (Qt = e(() => {
    ((Yt = m()),
      _e(),
      _(),
      fe(),
      ke(),
      he(),
      tt(),
      k(),
      (Xt = c()),
      (Zt = { ExternalLinkIcon: Fe, Markdown: Gt }));
  }))();
}
var $t, en;
function tn() {
  return (tn = e(() => {
    (($t = `_header_12nhh_1`), (en = { header: $t }));
  }))();
}
function nn(e) {
  let t = (0, Z.c)(6),
    { analytics: n, reportingEnabled: r, Header: i, continueInNewChat: a } = e,
    o = n === void 0 ? mn : n,
    c = a !== void 0 && a,
    { postId: l } = s();
  if (l == null) throw Error(`Shared snapshot route is missing its share ID`);
  let u;
  return (
    t[0] !== i || t[1] !== o || t[2] !== c || t[3] !== r || t[4] !== l
      ? ((u = (0, $.jsx)(
          rn,
          { Header: i, continueInNewChat: c, shareId: l, analytics: o, reportingEnabled: r },
          l,
        )),
        (t[0] = i),
        (t[1] = o),
        (t[2] = c),
        (t[3] = r),
        (t[4] = l),
        (t[5] = u))
      : (u = t[5]),
    u
  );
}
function rn(e) {
  let t = (0, Z.c)(61),
    { Header: n, continueInNewChat: r, shareId: i, analytics: a, reportingEnabled: o } = e,
    s;
  t[0] === i ? (s = t[1]) : ((s = () => At(i)), (t[0] = i), (t[1] = s));
  let [c] = (0, Q.useState)(s),
    [l, d] = (0, Q.useState)(c.handoffId),
    f;
  t[2] === i ? (f = t[3]) : ((f = [`shared-codex-snapshot`, i]), (t[2] = i), (t[3] = f));
  let p;
  t[4] !== a || t[5] !== c.shareSessionId || t[6] !== i
    ? ((p = async (e) => {
        let { signal: t } = e,
          n = await ge(),
          r = n != null,
          o = n?.userId ?? null;
        a.initialize?.(o, n?.email ?? null);
        let s = performance.now(),
          l = `network_error`;
        a.logEvent(
          Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_ATTEMPTED,
          { is_authenticated: r, share_id: i, share_session_id: c.shareSessionId },
          o,
        );
        try {
          let e = await qe(`/backend-api/wham/shared_threads/${encodeURIComponent(i)}`, {
            signal: t,
            cache: `no-store`,
          });
          (e.ok ||
            ((l =
              e.status === 403
                ? `forbidden`
                : e.status === 404
                  ? `not_found`
                  : e.status >= 500
                    ? `server_error`
                    : `request_rejected`),
            pn()),
            (l = `invalid_snapshot`));
          let u = $e(await e.json());
          if (u == null)
            return (
              a.logEvent(
                Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_FAILED,
                {
                  is_authenticated: r,
                  share_id: i,
                  share_session_id: c.shareSessionId,
                  snapshot_load_duration_ms: Math.round(performance.now() - s),
                  failure_reason: `invalid_snapshot`,
                },
                o,
              ),
              null
            );
          let d = 0,
            f = 0,
            p = 0,
            m = new Set(),
            h = new Set();
          for (let e of u.turns) {
            d += e.items.length;
            for (let t of e.items) {
              let e;
              if (t.type === `userMessage`) e = t.content.flatMap(sn);
              else if (t.type === `agentMessage`) {
                e = Qe(t.text);
                for (let e of Re(t.text, void 0).filter(on)) {
                  let t = Ie(e.attributes, `asset`),
                    n = t == null ? null : Ge(t);
                  n != null && h.add(n);
                }
              } else e = t.type === `imageView` ? [t.url] : t.type === `imageGeneration` ? [t.result] : [];
              for (let t of e) {
                let e = Ge(t);
                e != null && m.add(e);
              }
              ((f += e.length), (p += e.filter(an).length));
            }
          }
          return (
            (f += [...h].filter((e) => !m.has(e)).length),
            a.logEvent(
              Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_SUCCEEDED,
              {
                is_authenticated: r,
                share_id: i,
                share_session_id: c.shareSessionId,
                snapshot_load_duration_ms: Math.round(performance.now() - s),
                turn_count: u.turns.length,
                item_count: d,
                asset_count: f,
                unavailable_asset_count: p,
              },
              o,
            ),
            {
              snapshot: u,
              shareSessionId: c.shareSessionId,
              accountId: n?.accountId ?? null,
              isAuthenticated: r,
              userId: o,
            }
          );
        } catch (e) {
          let n = e;
          throw (
            t.aborted ||
              a.logEvent(
                Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_FAILED,
                {
                  is_authenticated: r,
                  share_id: i,
                  share_session_id: c.shareSessionId,
                  snapshot_load_duration_ms: Math.round(performance.now() - s),
                  failure_reason: l,
                },
                o,
              ),
            n
          );
        }
      }),
      (t[4] = a),
      (t[5] = c.shareSessionId),
      (t[6] = i),
      (t[7] = p))
    : (p = t[7]);
  let m;
  t[8] !== f || t[9] !== p
    ? ((m = { queryKey: f, queryFn: p, retry: !1, staleTime: 6e4 }), (t[8] = f), (t[9] = p), (t[10] = m))
    : (m = t[10]);
  let { data: h, isPending: g } = u(m),
    [_, v] = (0, Q.useState)(!1),
    y = (0, Q.useRef)(null),
    b;
  t[11] === h?.snapshot.title
    ? (b = t[12])
    : ((b = h?.snapshot.title?.trim()), (t[11] = h?.snapshot.title), (t[12] = b));
  let x = b,
    S,
    C;
  if (
    (t[13] === x
      ? ((S = t[14]), (C = t[15]))
      : ((S = () => {
          if (!x) return;
          let e = document.title;
          return (
            (document.title = x),
            () => {
              document.title === x && (document.title = e);
            }
          );
        }),
        (C = [x]),
        (t[13] = x),
        (t[14] = S),
        (t[15] = C)),
    (0, Q.useEffect)(S, C),
    g)
  ) {
    let e;
    return (
      t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(V, { fillParent: !0, debugName: `SharedSnapshotPage.backend` })), (t[16] = e))
        : (e = t[16]),
      e
    );
  }
  let w = `codex://shared-thread/${encodeURIComponent(i)}`,
    T;
  t[17] !== a || t[18] !== w || t[19] !== l || t[20] !== i || t[21] !== h
    ? ((T = (e) => {
        if (h == null) return;
        let t = !e && a.isAttributionEnabled() ? (l ?? crypto.randomUUID()) : void 0;
        d(t);
        let n = {
          share_id: i,
          share_session_id: h.shareSessionId,
          handoff_id: t,
          is_authenticated: h.isAuthenticated,
        };
        if (
          (a.logEvent(Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_CONTINUE_ATTEMPTED, n, h.userId),
          h.accountId == null || h.userId == null)
        ) {
          (a.logEvent(Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_CONTINUE_SIGN_IN_REQUIRED, n, h.userId),
            t == null ? Mt() : jt(i, h.shareSessionId, t),
            Ce());
          return;
        }
        (v(!0),
          a.logEvent(Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_CONTINUE_LAUNCHED, n, h.userId),
          Mt(),
          window.location.assign(new URL(t == null ? w : `${w}?handoff_id=${t}`)));
      }),
      (t[17] = a),
      (t[18] = w),
      (t[19] = l),
      (t[20] = i),
      (t[21] = h),
      (t[22] = T))
    : (T = t[22]);
  let E = T,
    D = h?.snapshot ?? null,
    O = h?.isAuthenticated,
    k;
  t[23] !== E || t[24] !== h
    ? ((k = h == null ? void 0 : () => E(!1)), (t[23] = E), (t[24] = h), (t[25] = k))
    : (k = t[25]);
  let A;
  t[26] !== a || t[27] !== l || t[28] !== i || t[29] !== h
    ? ((A =
        h == null
          ? void 0
          : () =>
              a.logEvent(
                Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_ASSET_FAILED,
                {
                  is_authenticated: h.isAuthenticated,
                  share_id: i,
                  share_session_id: h.shareSessionId,
                  handoff_id: l,
                },
                h.userId,
              )),
      (t[26] = a),
      (t[27] = l),
      (t[28] = i),
      (t[29] = h),
      (t[30] = A))
    : (A = t[30]);
  let j;
  t[31] !== a || t[32] !== i || t[33] !== h
    ? ((j =
        h == null
          ? void 0
          : (e) =>
              a.logEvent(
                Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_ENGAGED,
                {
                  is_authenticated: h.isAuthenticated,
                  share_id: i,
                  share_session_id: h.shareSessionId,
                  engagement_type: e,
                },
                h.userId,
              )),
      (t[31] = a),
      (t[32] = i),
      (t[33] = h),
      (t[34] = j))
    : (j = t[34]);
  let M;
  t[35] !== a || t[36] !== i || t[37] !== h
    ? ((M =
        h == null
          ? void 0
          : (e) =>
              a.logEvent(
                Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_VIEW_ENGAGEMENT_SUMMARY,
                {
                  is_authenticated: h.isAuthenticated,
                  share_id: i,
                  share_session_id: h.shareSessionId,
                  ...e,
                },
                h.userId,
              )),
      (t[35] = a),
      (t[36] = i),
      (t[37] = h),
      (t[38] = M))
    : (M = t[38]);
  let N;
  t[39] !== n ||
  t[40] !== r ||
  t[41] !== o ||
  t[42] !== i ||
  t[43] !== O ||
  t[44] !== k ||
  t[45] !== A ||
  t[46] !== j ||
  t[47] !== M ||
  t[48] !== D
    ? ((N = (0, $.jsx)(cn, {
        Header: n,
        continueInNewChat: r,
        reportingEnabled: o,
        continueButtonRef: y,
        shareId: i,
        snapshot: D,
        isAuthenticated: O,
        onContinue: k,
        onAssetError: A,
        onEngagement: j,
        onEngagementSummary: M,
      })),
      (t[39] = n),
      (t[40] = r),
      (t[41] = o),
      (t[42] = i),
      (t[43] = O),
      (t[44] = k),
      (t[45] = A),
      (t[46] = j),
      (t[47] = M),
      (t[48] = D),
      (t[49] = N))
    : (N = t[49]);
  let P;
  t[50] !== a || t[51] !== w || t[52] !== E || t[53] !== l || t[54] !== _ || t[55] !== i || t[56] !== h
    ? ((P =
        h == null
          ? null
          : (0, $.jsx)(Vt, {
              codexDeepLink: w,
              returnFocusRef: y,
              open: _,
              onOpenChange: v,
              onOpenCodex: () => E(!0),
              onGetCodex: (e) => {
                (a.logEvent(
                  Y.CODEX_SHARED_THREAD_VIEWER_EVENT_TYPE_CONTINUE_DOWNLOAD_CLICKED,
                  {
                    is_authenticated: h.isAuthenticated,
                    share_id: i,
                    share_session_id: h.shareSessionId,
                    handoff_id: l,
                  },
                  h.userId,
                ),
                  K({
                    event: e,
                    href: `https://chatgpt.com/download/`,
                    initiator: `open_in_browser_bridge`,
                    disposition: `new-tab`,
                    openTarget: `external-browser`,
                  }));
              },
            })),
      (t[50] = a),
      (t[51] = w),
      (t[52] = E),
      (t[53] = l),
      (t[54] = _),
      (t[55] = i),
      (t[56] = h),
      (t[57] = P))
    : (P = t[57]);
  let ee;
  return (
    t[58] !== N || t[59] !== P
      ? ((ee = (0, $.jsxs)($.Fragment, { children: [N, P] })), (t[58] = N), (t[59] = P), (t[60] = ee))
      : (ee = t[60]),
    ee
  );
}
function an(e) {
  return e === et;
}
function on(e) {
  return e.type === `codexDirective` && `name` in e && e.name === `codex-inline-vis`;
}
function sn(e) {
  return e.type === `image` ? [e.url] : Qe(e.text);
}
function cn(e) {
  let t = (0, Z.c)(61),
    {
      Header: n,
      continueInNewChat: r,
      reportingEnabled: i,
      continueButtonRef: a,
      shareId: o,
      snapshot: s,
      onContinue: c,
      isAuthenticated: l,
      onAssetError: d,
      onEngagement: f,
      onEngagementSummary: p,
    } = e,
    m = n === void 0 ? ln : n,
    h = r !== void 0 && r,
    g = ee(),
    [_, v] = (0, Q.useState)(!1),
    y;
  t[0] === g
    ? (y = t[1])
    : ((y = g.formatMessage({
        id: `codex.sharedSnapshot.report`,
        defaultMessage: `Report`,
        description: `Button on a shared Codex task preview that opens the abuse-reporting form`,
      })),
      (t[0] = g),
      (t[1] = y));
  let b = y,
    x = (0, Q.useRef)(null),
    S;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = [`shared-codex-snapshot-auth`]), (t[2] = S))
    : (S = t[2]);
  let w = o != null && s == null,
    T;
  t[3] === w
    ? (T = t[4])
    : ((T = { queryKey: S, queryFn: we, enabled: w, staleTime: 6e4 }), (t[3] = w), (t[4] = T));
  let { data: E } = u(T),
    D = E !== void 0 && E,
    O;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = [`shared-codex-snapshot-reporting`]), (t[5] = O))
    : (O = t[5]);
  let k = i == null && o != null && s != null,
    A;
  t[6] === k
    ? (A = t[7])
    : ((A = { queryKey: O, queryFn: Ot, enabled: k, staleTime: 6e4 }), (t[6] = k), (t[7] = A));
  let { data: j } = u(A),
    M = i ?? (j !== void 0 && j);
  if (s == null) {
    let e, n;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(`div`, {
          className: `mb-3 text-default select-none`,
          children: (0, $.jsx)(un, { size: `large` }),
        })),
        (n = (0, $.jsx)(L, {
          id: `codex.sharedSnapshot.unavailable`,
          defaultMessage: `Shared chat not found`,
          description: `Message shown when a shared chat cannot be loaded, without revealing whether it exists`,
        })),
        (t[8] = e),
        (t[9] = n))
      : ((e = t[8]), (n = t[9]));
    let r;
    t[10] !== l || t[11] !== D
      ? ((r =
          l === !1 || D
            ? (0, $.jsx)(C, {
                color: `secondary`,
                onClick: Ce,
                children: (0, $.jsx)(L, {
                  id: `codex.sharedSnapshot.logIn`,
                  defaultMessage: `Log in`,
                  description: `Button that starts ChatGPT sign-in from an unavailable shared Codex thread without revealing whether the thread exists`,
                }),
              })
            : null),
        (t[10] = l),
        (t[11] = D),
        (t[12] = r))
      : (r = t[12]);
    let i;
    return (
      t[13] === r
        ? (i = t[14])
        : ((i = (0, $.jsxs)(`main`, {
            className: `flex h-full flex-col items-center justify-center gap-3 px-6 text-secondary`,
            children: [e, n, r],
          })),
          (t[13] = r),
          (t[14] = i)),
      i
    );
  }
  let N;
  t[15] === s
    ? (N = t[16])
    : ((N = (0, $.jsx)(Xe, { className: `shrink-0 border-b border-default px-toolbar py-2`, snapshot: s })),
      (t[15] = s),
      (t[16] = N));
  let P, F;
  t[17] === f
    ? ((P = t[18]), (F = t[19]))
    : ((P = (e) => {
        e.target instanceof Element &&
          (e.target.closest(`a`) == null
            ? e.target.closest(`[data-markdown-copy="code-block"] button`) == null
              ? e.target.closest(`button[aria-expanded="false"]`) == null
                ? e.target.closest(`[role="button"]`)?.querySelector(`img`) != null &&
                  f?.(`image_preview_opened`)
                : f?.(`content_expanded`)
              : f?.(`code_copied`)
            : f?.(`external_link_opened`));
      }),
      (F = () => f?.(`content_copied`)),
      (t[17] = f),
      (t[18] = P),
      (t[19] = F));
  let I;
  t[20] === d
    ? (I = t[21])
    : ((I = (e) => {
        e.target instanceof HTMLImageElement && d?.();
      }),
      (t[20] = d),
      (t[21] = I));
  let R;
  t[22] === p
    ? (R = t[23])
    : ((R = p == null ? null : (0, $.jsx)(It, { scrollContainerRef: x, onSummary: p })),
      (t[22] = p),
      (t[23] = R));
  let z;
  t[24] === s.title
    ? (z = t[25])
    : ((z =
        s.title ||
        (0, $.jsx)(L, {
          id: `codex.sharedSnapshot.pageTitle`,
          defaultMessage: `Shared chat preview`,
          description: `Heading for a static, privacy-filtered preview of a Codex thread`,
        })),
      (t[24] = s.title),
      (t[25] = z));
  let B;
  t[26] !== M || t[27] !== b || t[28] !== o
    ? ((B =
        o != null && M
          ? (0, $.jsx)(C, {
              "aria-label": b,
              color: `ghostSecondary`,
              size: `toolbar`,
              title: b,
              uniform: !0,
              onClick: () => {
                ge().then((e) => {
                  if (e == null) {
                    Ce();
                    return;
                  }
                  v(!0);
                });
              },
              children: (0, $.jsx)(te, {}),
            })
          : null),
      (t[26] = M),
      (t[27] = b),
      (t[28] = o),
      (t[29] = B))
    : (B = t[29]);
  let V;
  t[30] !== a || t[31] !== h || t[32] !== c
    ? ((V =
        c == null
          ? null
          : (0, $.jsxs)(C, {
              ref: a,
              className: h ? void 0 : `max-md:hidden`,
              color: `secondary`,
              size: `toolbar`,
              onClick: c,
              children: [
                h
                  ? (0, $.jsx)(L, {
                      id: `codex.sharedSnapshot.continueInNewChat`,
                      defaultMessage: `Continue in a new chat`,
                      description: `Button that opens an immutable shared Codex thread in ChatGPT as reference context for a new private chat`,
                    })
                  : (0, $.jsx)(L, {
                      id: `codex.sharedSnapshot.continueInCodex`,
                      defaultMessage: `Continue in ChatGPT`,
                      description: `Button that opens an immutable shared Codex thread in ChatGPT as reference context for a new private task`,
                    }),
                (0, $.jsx)(ve, {
                  className: `icon-xs shrink-0`,
                  ExternalIcon: ne,
                  href: `codex://`,
                  isBrowserEnabled: !1,
                  openTarget: `external-browser`,
                }),
              ],
            })),
      (t[30] = a),
      (t[31] = h),
      (t[32] = c),
      (t[33] = V))
    : (V = t[33]);
  let H;
  t[34] !== B || t[35] !== V
    ? ((H = (0, $.jsxs)($.Fragment, { children: [B, V] })), (t[34] = B), (t[35] = V), (t[36] = H))
    : (H = t[36]);
  let U;
  t[37] !== m || t[38] !== z || t[39] !== H
    ? ((U = (0, $.jsx)(m, { title: z, actions: H })), (t[37] = m), (t[38] = z), (t[39] = H), (t[40] = U))
    : (U = t[40]);
  let W;
  t[41] !== o || t[42] !== s
    ? ((W = (0, $.jsx)(Je, { showOmissionNotice: !1, initialMessageRef: fn, shareId: o, snapshot: s })),
      (t[41] = o),
      (t[42] = s),
      (t[43] = W))
    : (W = t[43]);
  let G;
  t[44] !== P || t[45] !== F || t[46] !== I || t[47] !== R || t[48] !== U || t[49] !== W
    ? ((G = (0, $.jsxs)(`div`, {
        ref: x,
        className: `min-h-0 flex-1 scroll-pt-20 overflow-y-auto`,
        onClickCapture: P,
        onCopyCapture: F,
        onError: I,
        children: [R, U, W],
      })),
      (t[44] = P),
      (t[45] = F),
      (t[46] = I),
      (t[47] = R),
      (t[48] = U),
      (t[49] = W),
      (t[50] = G))
    : (G = t[50]);
  let K;
  t[51] === s
    ? (K = t[52])
    : ((K = (0, $.jsx)(Wt, { scrollContainerRef: x, snapshot: s })), (t[51] = s), (t[52] = K));
  let q;
  t[53] !== _ || t[54] !== o
    ? ((q =
        _ && o != null
          ? (0, $.jsx)(Ue, {
              onClose: () => {
                v(!1);
              },
              reportEntityType: `post`,
              reportReasonsEntityType: `task`,
              reportRequest: dn,
              threadId: o,
            })
          : null),
      (t[53] = _),
      (t[54] = o),
      (t[55] = q))
    : (q = t[55]);
  let J;
  return (
    t[56] !== N || t[57] !== G || t[58] !== K || t[59] !== q
      ? ((J = (0, $.jsxs)(`div`, {
          className: `relative flex h-full min-h-0 flex-col bg-surface text-size-chat`,
          children: [N, G, K, q],
        })),
        (t[56] = N),
        (t[57] = G),
        (t[58] = K),
        (t[59] = q),
        (t[60] = J))
      : (J = t[60]),
    J
  );
}
function ln(e) {
  let t = (0, Z.c)(9),
    { title: n, actions: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = l(
        en.header,
        `sticky top-0 z-10 grid items-center border-b border-default bg-surface-elevated-secondary py-4 text-size-chat font-medium text-secondary select-none`,
      )),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`div`, { className: `flex items-center ps-6`, children: (0, $.jsx)(un, {}) })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  t[2] === n
    ? (o = t[3])
    : ((o = (0, $.jsx)(`h1`, { className: `min-w-0 truncate px-toolbar text-default`, children: n })),
      (t[2] = n),
      (t[3] = o));
  let s;
  t[4] === r
    ? (s = t[5])
    : ((s = (0, $.jsx)(`div`, {
        className: `flex min-w-0 flex-wrap items-center justify-end gap-2 pe-6`,
        children: r,
      })),
      (t[4] = r),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, $.jsxs)(`header`, { className: i, children: [a, o, s] })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
function un(e) {
  let t = (0, Z.c)(6),
    { size: n } = e,
    r = (n === void 0 ? `small` : n) === `large` ? `text-4xl` : `text-[17px] leading-6`,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = l(`inline-flex h-lh items-center font-semibold`, r)), (t[0] = r), (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(Se, { "aria-hidden": `true`, className: `h-[1em] w-auto overflow-visible` })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(L, {
          id: `codex.sharedSnapshot.wordmark`,
          defaultMessage: `ChatGPT`,
          description: `ChatGPT brand name in the shared thread viewer`,
        }),
      })),
      (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] === i
      ? (s = t[5])
      : ((s = (0, $.jsxs)(`span`, { className: i, children: [a, o] })), (t[4] = i), (t[5] = s)),
    s
  );
}
async function dn(e, t) {
  let n = await ge();
  if (n == null) throw (Ce(), Error(`Sign in to report a shared thread`));
  return fetch(`/backend-api${e}`, {
    ...t,
    cache: `no-store`,
    credentials: `same-origin`,
    headers: {
      ...Object.fromEntries(new Headers(t?.headers)),
      Authorization: `Bearer ${n.accessToken}`,
      ...(n.accountId == null ? {} : { "ChatGPT-Account-Id": n.accountId }),
    },
  });
}
function fn(e) {
  if (e == null) return;
  let t = e.closest(`main`)?.parentElement,
    n = window.performance.getEntriesByType?.(`navigation`)[0];
  t?.scrollTop !== 0 ||
    (n != null && `type` in n && n.type === `back_forward`) ||
    (e.scrollIntoView?.({ behavior: `instant`, block: `start` }),
    window.location.hash === `#${e.id}` && e.focus({ preventScroll: !0 }));
}
function pn() {
  throw Error(`Shared snapshot is unavailable`);
}
var Z, Q, $, mn;
function hn() {
  return (hn = e(() => {
    ((Z = m()),
      Me(),
      j(),
      d(),
      (Q = r()),
      x(),
      f(),
      Et(),
      Ke(),
      Oe(),
      w(),
      me(),
      je(),
      g(),
      J(),
      xe(),
      re(),
      He(),
      he(),
      ie(),
      Ze(),
      kt(),
      We(),
      Ft(),
      Bt(),
      Ut(),
      Qt(),
      Ye(),
      tn(),
      ($ = c()),
      (mn = { initialize: ht, logEvent: Dt, isAttributionEnabled: () => ce(yt()) }));
  }))();
}
function gn() {
  let e = (0, _n.c)(5),
    n = t(h),
    r = N(Pe, `4251230779`),
    i;
  e[0] === n ? (i = e[1]) : ((i = lt(n)), (e[0] = n), (e[1] = i));
  let a;
  return (
    e[2] !== r || e[3] !== i
      ? ((a = (0, vn.jsx)(ye, {
          children: (0, vn.jsx)(nn, { Header: dt, continueInNewChat: !0, analytics: i, reportingEnabled: r }),
        })),
        (e[2] = r),
        (e[3] = i),
        (e[4] = a))
      : (a = e[4]),
    a
  );
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    ((_n = m()), T(), n(), Ee(), Ne(), ut(), mt(), hn(), (vn = c()));
  }))();
}
yn();
export { gn as SharedSnapshotAppPage };
//# sourceMappingURL=shared-snapshot-app-page-dd939aeb2242.js.map
