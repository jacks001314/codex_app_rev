const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-d5f4f7c0e2cc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./automation-delete-confirmation-dialog-c8c0c59ec586.js",
      "./automation-frequency-section-b14557c3b8fc.js",
      "./DatePicker-ab3817e664c5.js",
      "./helpers-a3a9f6ff3e2c.js",
      "./PlatformUIKitContext-75518ab926e7.js",
      "./ChevronRight-ffca387b610d.js",
      "./DatePicker-916e4078b8cc.css",
      "./detail-section-state-e7774e5ba7f3.js",
      "./builder-analytics-f0ccbf8827ee.js",
      "./read-error-29adc71a8032.js",
      "./apps-query-410f7e452f43.js",
      "./query-b1ceced7057f.js",
      "./workspace-agent-detail-query-c8301c5fcc0a.js",
      "./workspace-agent-apps-6b85a870e5a0.js",
      "./query-89ce93dd0b9b.js",
      "./model-80ecbc793fd2.js",
      "./dialog-9ae4b0577fa0.js",
      "./use-workspace-users-9ff632adf20a.js",
      "./workspace-team-recipient-suggestions-f88127cfec32.js",
      "./dialog-shell-9b9990063b15.js",
      "./dialog-shell-615700c272c0.css",
      "./permission-dropdown-ca77aa1add04.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  IDt as i,
  Ixt as a,
  Pxt as o,
  TJ as s,
  VDt as c,
  Vxt as l,
  XV as u,
  fPt as d,
  jDt as f,
  pPt as p,
  t3 as m,
  vzt as h,
  wot as g,
  xMt as _,
  yzt as v,
  z4 as y,
} from "./app-shared-bbfeca5e5737.js";
import { GMr as b, cct as x, fct as S, qMr as C, tNr as w } from "./app-initial-5851df3f6cb1.js";
import { _ as T, a as E, b as D, l as O, n as k, t as A } from "./builder-analytics-f0ccbf8827ee.js";
function j(e) {
  let n = (0, M.c)(8),
    { agentId: r, versionScope: a, onPreviewRun: o, onOpen: s } = e,
    d = a === void 0 ? `published` : a,
    f = c(),
    p = l(b),
    [m, h] = (0, N.useState)(!1),
    g = (0, N.useRef)(null),
    _;
  return (
    n[0] !== p || n[1] !== r || n[2] !== f || n[3] !== s || n[4] !== o || n[5] !== m || n[6] !== d
      ? ((_ =
          p == null
            ? null
            : (0, P.jsxs)(P.Fragment, {
                children: [
                  (0, P.jsxs)(t, {
                    ref: g,
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: d === `published`,
                    "aria-haspopup": `dialog`,
                    "aria-expanded": m,
                    "aria-label": f.formatMessage({
                      id: `workspaceAgents.schedules.open`,
                      defaultMessage: `Automations`,
                      description: `Opens a Workspace Agent's scheduled automations`,
                    }),
                    onClick: () => {
                      (s?.(), h(!0));
                    },
                    children: [
                      (0, P.jsx)(u, {}),
                      d === `draft`
                        ? (0, P.jsx)(i, {
                            id: `workspaceAgents.schedules.open`,
                            defaultMessage: `Automations`,
                            description: `Opens a Workspace Agent's scheduled automations`,
                          })
                        : null,
                    ],
                  }),
                  m
                    ? (0, P.jsx)(
                        F,
                        {
                          accountId: p,
                          agentId: r,
                          versionScope: d,
                          onPreviewRun: o,
                          onClose: () => h(!1),
                          onCloseAutoFocus: () => g.current?.focus(),
                        },
                        `${p}:${r}`,
                      )
                    : null,
                ],
              })),
        (n[0] = p),
        (n[1] = r),
        (n[2] = f),
        (n[3] = s),
        (n[4] = o),
        (n[5] = m),
        (n[6] = d),
        (n[7] = _))
      : (_ = n[7]),
    _
  );
}
var M, N, P, F;
function I() {
  return (I = e(() => {
    ((M = h()),
      o(),
      (N = v()),
      f(),
      w(),
      m(),
      s(),
      y(),
      (P = _()),
      p(),
      (F = n(
        async () =>
          (
            await d(
              async () => {
                let { WorkspaceAgentSchedulesDialog: e } = await import(`./dialog-d5f4f7c0e2cc.js`);
                return { WorkspaceAgentSchedulesDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
              import.meta.url,
            )
          ).WorkspaceAgentSchedulesDialog,
      )));
  }))();
}
function L(e) {
  let n = (0, R.c)(17),
    { agentId: o, page: s } = e,
    c = s === void 0 ? O.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS : s,
    u = a(r),
    d = (0, z.useRef)(null),
    f = l(b),
    p = l(C),
    m = l(S),
    [h, g] = (0, z.useState)(null);
  if (f == null || p == null || m !== !0) return null;
  let _;
  n[0] !== f || n[1] !== p || n[2] !== o || n[3] !== c || n[4] !== u
    ? ((_ = () => {
        (k(u, {
          agentId: o,
          actionType: E.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_MODAL_OPEN,
          source: T.CHATGPT_AGENT_BUILDER_SOURCE_HEADER,
          page: c,
          isPublished: !0,
          isReadonly: !1,
          isPreviewVersion: !1,
        }),
          g({ accountId: f, accountUserId: p }));
      }),
      (n[0] = f),
      (n[1] = p),
      (n[2] = o),
      (n[3] = c),
      (n[4] = u),
      (n[5] = _))
    : (_ = n[5]);
  let v;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, B.jsx)(i, {
        id: `workspaceAgents.sharing.open`,
        defaultMessage: `Share`,
        description: `Button that opens access settings for a published Workspace Agent`,
      })),
      (n[6] = v))
    : (v = n[6]);
  let y;
  n[7] === _
    ? (y = n[8])
    : ((y = (0, B.jsx)(t, { ref: d, color: `ghostSecondary`, size: `toolbar`, onClick: _, children: v })),
      (n[7] = _),
      (n[8] = y));
  let x;
  n[9] !== f || n[10] !== p || n[11] !== o || n[12] !== h
    ? ((x =
        h?.accountId === f && h.accountUserId === p
          ? (0, B.jsx)(
              V,
              {
                accountId: f,
                accountUserId: p,
                agentId: o,
                onClose: () => {
                  (g(null), d.current?.focus());
                },
              },
              f + `:` + p + `:` + o,
            )
          : null),
      (n[9] = f),
      (n[10] = p),
      (n[11] = o),
      (n[12] = h),
      (n[13] = x))
    : (x = n[13]);
  let w;
  return (
    n[14] !== y || n[15] !== x
      ? ((w = (0, B.jsxs)(B.Fragment, { children: [y, x] })), (n[14] = y), (n[15] = x), (n[16] = w))
      : (w = n[16]),
    w
  );
}
var R, z, B, V;
function H() {
  return (H = e(() => {
    ((R = h()),
      D(),
      o(),
      (z = v()),
      f(),
      w(),
      m(),
      y(),
      g(),
      x(),
      A(),
      (B = _()),
      p(),
      (V = n(
        async () =>
          (
            await d(
              async () => {
                let { WorkspaceAgentSharingDialog: e } = await import(`./dialog-9ae4b0577fa0.js`);
                return { WorkspaceAgentSharingDialog: e };
              },
              __vite__mapDeps([22, 1, 2, 3, 4, 5, 23, 24, 25, 26, 27, 13, 14, 15, 17, 16]),
              import.meta.url,
            )
          ).WorkspaceAgentSharingDialog,
      )));
  }))();
}
export { I as i, H as n, j as r, L as t };
//# sourceMappingURL=button-b8f6289915e3.js.map
