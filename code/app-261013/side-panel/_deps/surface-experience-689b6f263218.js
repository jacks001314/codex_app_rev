import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  vzt as i,
  wot as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { QDr as c, XDr as l, XR as u, YR as d } from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./surface-experience-tracker-474fca575118.js";
var m, h, g, _, v, y;
function b() {
  return (b = e(() => {
    ((m = (function (e) {
      return (
        (e.CODEX_SURFACE_EXPERIENCE_SURFACE_UNSPECIFIED = `CODEX_SURFACE_EXPERIENCE_SURFACE_UNSPECIFIED`),
        (e.CODEX_SURFACE_EXPERIENCE_SURFACE_ARTIFACT = `CODEX_SURFACE_EXPERIENCE_SURFACE_ARTIFACT`),
        (e.CODEX_SURFACE_EXPERIENCE_SURFACE_PAGE = `CODEX_SURFACE_EXPERIENCE_SURFACE_PAGE`),
        (e.UNRECOGNIZED = `UNRECOGNIZED`),
        e
      );
    })({})),
      (h = (function (e) {
        return (
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_UNSPECIFIED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_UNSPECIFIED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_STARTED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_STARTED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_USABLE = `CODEX_SURFACE_EXPERIENCE_OUTCOME_USABLE`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_CLOSED_UNRESOLVED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_CLOSED_UNRESOLVED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_FAILED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_FAILED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_SUPERSEDED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_SUPERSEDED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_STALLED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_STALLED`),
          (e.CODEX_SURFACE_EXPERIENCE_OUTCOME_EXCLUDED = `CODEX_SURFACE_EXPERIENCE_OUTCOME_EXCLUDED`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (g = (function (e) {
        return (
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSPECIFIED = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSPECIFIED`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_LOAD = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_LOAD`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_RENDER = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_RENDER`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_ACCESS = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_ACCESS`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSUPPORTED = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSUPPORTED`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_REFRESH = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_REFRESH`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_DOWNLOAD = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_DOWNLOAD`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_SYNC = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_SYNC`),
          (e.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSAVED_CHANGES = `CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSAVED_CHANGES`),
          (e.UNRECOGNIZED = `UNRECOGNIZED`),
          e
        );
      })({})),
      (_ = { $type: `protobuf_analytics_events.v1.CodexSurfaceExperienceOpen` }),
      (v = { $type: `protobuf_analytics_events.v1.CodexSurfaceExperienceErrorExposure` }),
      (y = { $type: `protobuf_analytics_events.v1.CodexSurfaceExperienceRetry` }));
  }))();
}
function x(e) {
  let r = (0, T.c)(18),
    i = n(t),
    a;
  r[0] !== e.surface || r[1] !== i
    ? ((a = (t) => {
        let n = O[e.surface];
        if (t.type === `error`)
          c(i, v, {
            surface: n,
            errorKind: A[t.errorKind],
            shown: t.shown,
            foregroundDurationMs: t.foregroundDurationMs,
          });
        else {
          let e = t.type === `open` ? _ : y;
          c(i, e, { surface: n, outcome: k[t.outcome], foregroundDurationMs: t.foregroundDurationMs });
        }
      }),
      (r[0] = e.surface),
      (r[1] = i),
      (r[2] = a))
    : (a = r[2]);
  let o;
  r[3] !== e.identity || r[4] !== a
    ? ((o = new p(a, void 0, e.identity)), (r[3] = e.identity), (r[4] = a), (r[5] = o))
    : (o = r[5]);
  let s = o,
    l = e.visible !== !1,
    u,
    d;
  (r[6] === s
    ? ((u = r[7]), (d = r[8]))
    : ((u = () => s.observe()), (d = [s]), (r[6] = s), (r[7] = u), (r[8] = d)),
    (0, E.useInsertionEffect)(u, d));
  let f, m;
  (r[9] !== s || r[10] !== l
    ? ((f = () => {
        let e = () => s.setVisible(l && document.visibilityState === `visible`);
        (e(), document.addEventListener(`visibilitychange`, e));
        let t = () => s.setVisible(!1);
        return (
          window.addEventListener(`pagehide`, t),
          window.addEventListener(`pageshow`, e),
          document.addEventListener(`freeze`, t),
          document.addEventListener(`resume`, e),
          () => {
            (s.setVisible(!1),
              document.removeEventListener(`visibilitychange`, e),
              window.removeEventListener(`pagehide`, t),
              window.removeEventListener(`pageshow`, e),
              document.removeEventListener(`freeze`, t),
              document.removeEventListener(`resume`, e));
          }
        );
      }),
      (m = [s, l]),
      (r[9] = s),
      (r[10] = l),
      (r[11] = f),
      (r[12] = m))
    : ((f = r[11]), (m = r[12])),
    (0, E.useEffect)(f, m));
  let h;
  r[13] !== e.children || r[14] !== s
    ? ((h = e.children(s)), (r[13] = e.children), (r[14] = s), (r[15] = h))
    : (h = r[15]);
  let g;
  return (
    r[16] === h ? (g = r[17]) : ((g = (0, D.jsx)(D.Fragment, { children: h })), (r[16] = h), (r[17] = g)),
    g
  );
}
function S(e) {
  let t = (0, T.c)(4),
    { tracker: n } = e,
    r,
    i;
  return (
    t[0] !== e.kind || t[1] !== n
      ? ((r = () => n?.showError(e.kind)),
        (i = [n, e.kind]),
        (t[0] = e.kind),
        (t[1] = n),
        (t[2] = r),
        (t[3] = i))
      : ((r = t[2]), (i = t[3])),
    (0, E.useEffect)(r, i),
    null
  );
}
function C(e) {
  let t = (0, T.c)(4),
    { tracker: n } = e,
    r;
  return (
    t[0] !== e.ready || t[1] !== e.retryReady || t[2] !== n
      ? ((r =
          e.ready && n != null
            ? (0, D.jsx)(
                d,
                { requireVisibleAtPaint: !0, onPaint: () => n.usable(e.retryReady !== !1) },
                `${n.identity}:${e.retryReady !== !1}`,
              )
            : null),
        (t[0] = e.ready),
        (t[1] = e.retryReady),
        (t[2] = n),
        (t[3] = r))
      : (r = t[3]),
    r
  );
}
function w(e) {
  let t = (0, T.c)(3),
    { tracker: n } = e,
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = () => n?.exclude()), (i = [n]), (t[0] = n), (t[1] = r), (t[2] = i)),
    (0, E.useEffect)(r, i),
    null
  );
}
var T, E, D, O, k, A;
function j() {
  return (j = e(() => {
    ((T = i()),
      b(),
      r(),
      (E = s()),
      u(),
      l(),
      a(),
      f(),
      (D = o()),
      (O = {
        artifact: m.CODEX_SURFACE_EXPERIENCE_SURFACE_ARTIFACT,
        page: m.CODEX_SURFACE_EXPERIENCE_SURFACE_PAGE,
      }),
      (k = {
        started: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_STARTED,
        usable: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_USABLE,
        closed_unresolved: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_CLOSED_UNRESOLVED,
        failed: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_FAILED,
        superseded: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_SUPERSEDED,
        stalled: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_STALLED,
        excluded: h.CODEX_SURFACE_EXPERIENCE_OUTCOME_EXCLUDED,
      }),
      (A = {
        load: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_LOAD,
        render: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_RENDER,
        access: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_ACCESS,
        unsupported: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSUPPORTED,
        refresh: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_REFRESH,
        download: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_DOWNLOAD,
        sync: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_SYNC,
        unsaved_changes: g.CODEX_SURFACE_EXPERIENCE_ERROR_KIND_UNSAVED_CHANGES,
      }));
  }))();
}
export { j as a, C as i, x as n, w as r, S as t };
//# sourceMappingURL=surface-experience-689b6f263218.js.map
