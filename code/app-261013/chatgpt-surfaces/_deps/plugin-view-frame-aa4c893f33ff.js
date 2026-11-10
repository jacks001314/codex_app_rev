import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  jDt as o,
  t3 as s,
  vzt as c,
  xMt as l,
  yzt as u,
} from "./app-shared-bbfeca5e5737.js";
import { ACn as d, AEn as f, jCn as p, jEn as m } from "./app-initial-5851df3f6cb1.js";
import { c as h, s as g } from "./widget-ea192a210472.js";
import { n as _, t as v } from "./view-frame-c8d02fef58da.js";
import { r as y, t as b } from "./plugin-view-frame-8f332cd49ca5.js";
function x(e) {
  let r = (0, S.c)(13),
    { actions: a, description: o, isLoading: s, onRetry: c } = e,
    [l, u] = (0, C.useState)(!1),
    f = i(),
    p;
  r[0] !== f || r[1] !== s
    ? ((p = s
        ? f.formatMessage({
            id: `codex.mcpTool.mcpAppLoading`,
            defaultMessage: `Loading app`,
            description: `Accessible label for the MCP app loading placeholder`,
          })
        : f.formatMessage({
            id: `openaiMcpCapabilities.unavailable.title`,
            defaultMessage: `App unavailable`,
            description: `Title shown when an MCP app view could not be loaded`,
          })),
      (r[0] = f),
      (r[1] = s),
      (r[2] = p))
    : (p = r[2]);
  let m = p,
    h;
  r[3] !== a || r[4] !== o || r[5] !== l || r[6] !== s || r[7] !== c || r[8] !== m
    ? ((h = s
        ? (0, w.jsxs)(w.Fragment, {
            children: [
              (0, w.jsx)(`span`, { className: `sr-only`, children: m }),
              (0, w.jsx)(g, { fullSurface: !0, height: `100%`, showLoadingStatus: !1 }),
            ],
          })
        : (0, w.jsx)(`div`, {
            className: `flex h-full min-h-0 items-center justify-center select-none`,
            children: (0, w.jsx)(d, {
              title: m,
              description:
                o ??
                (l
                  ? (0, w.jsx)(n, {
                      id: `openaiMcpCapabilities.unavailable.retryFailed`,
                      defaultMessage: `The app is still unavailable after retrying`,
                      description: `Message shown when the single retry did not make an MCP app view available; no further retry is offered`,
                    })
                  : (0, w.jsx)(n, {
                      id: `openaiMcpCapabilities.unavailable.description`,
                      defaultMessage: `Try again to load the app`,
                      description: `Recovery guidance when an MCP app view is missing; the underlying cause is unknown`,
                    })),
              actions:
                a ??
                (!l &&
                  (0, w.jsx)(t, {
                    color: `secondary`,
                    onClick: () => {
                      (u(!0), c());
                    },
                    children: (0, w.jsx)(n, {
                      id: `openaiMcpCapabilities.unavailable.retry`,
                      defaultMessage: `Retry`,
                      description: `Button that retries discovering an MCP app view once`,
                    }),
                  })),
            }),
          })),
      (r[3] = a),
      (r[4] = o),
      (r[5] = l),
      (r[6] = s),
      (r[7] = c),
      (r[8] = m),
      (r[9] = h))
    : (h = r[9]);
  let _;
  return (
    r[10] !== m || r[11] !== h
      ? ((_ = (0, w.jsx)(`div`, {
          className: `relative h-full min-h-0`,
          role: `status`,
          "aria-label": m,
          children: h,
        })),
        (r[10] = m),
        (r[11] = h),
        (r[12] = _))
      : (_ = r[12]),
    _
  );
}
var S, C, w;
function T() {
  return (T = e(() => {
    ((S = c()), (C = u()), o(), s(), p(), h(), (w = l()));
  }))();
}
function E(e) {
  let t = (0, D.c)(3),
    n = a(m) && e.globalSurface === !0 && e.lifetime === `app` ? k : void 0,
    r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = (0, O.jsx)(v, { ...e, experimentalCapabilities: n })), (t[0] = e), (t[1] = n), (t[2] = r))
      : (r = t[2]),
    r
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = c()), r(), _(), f(), (O = l()), (k = { "openai/meetingsSidebar": {} }));
  }))();
}
function j(e) {
  let t = (0, M.c)(6),
    { view: n } = e;
  if (n.server === `code-review` && n.tool.name === `pull_requests.open`) {
    let n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, N.jsx)(b, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  if (n.server === `chatgpt-meetings` && n.tool.name === `meetings.open`) {
    let n;
    return (t[2] === e ? (n = t[3]) : ((n = (0, N.jsx)(E, { ...e })), (t[2] = e), (t[3] = n)), n);
  }
  let r;
  return (t[4] === e ? (r = t[5]) : ((r = (0, N.jsx)(v, { ...e })), (t[4] = e), (t[5] = r)), r);
}
var M, N;
function P() {
  return (P = e(() => {
    ((M = c()), y(), A(), _(), (N = l()));
  }))();
}
export { T as i, P as n, x as r, j as t };
//# sourceMappingURL=plugin-view-frame-aa4c893f33ff.js.map
