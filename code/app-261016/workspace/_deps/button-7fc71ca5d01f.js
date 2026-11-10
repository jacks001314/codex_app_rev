const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dialog-c260d61c70d3.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./automation-delete-confirmation-dialog-7c5af9220f0a.js",
      "./automation-frequency-section-caeb4180ce42.js",
      "./DatePicker-aa68df19788f.js",
      "./helpers-97e80d920c48.js",
      "./PlatformUIKitContext-db1b777cfbe7.js",
      "./DatePicker-f2d11cc034ea.css",
      "./detail-section-state-45be9ee036ee.js",
      "./builder-analytics-f4d73421cfb8.js",
      "./read-error-b0681ff43794.js",
      "./apps-query-4cb3d9532588.js",
      "./query-28e51b942d45.js",
      "./workspace-agent-detail-query-e90126e3ca29.js",
      "./workspace-agent-apps-b1c524ac4449.js",
      "./query-4ad900313a0a.js",
      "./model-321ee010a278.js",
      "./dialog-a78145acf915.js",
      "./use-workspace-users-2d1e66aa1ddc.js",
      "./workspace-team-recipient-suggestions-ab23121c2709.js",
      "./dialog-shell-76e32318bc2b.js",
      "./dialog-shell-615700c272c0.css",
      "./permission-dropdown-27d1e7a127e6.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  F3 as r,
  FBt as i,
  I3 as a,
  KH as o,
  LNt as s,
  MNt as c,
  NNt as l,
  OFt as u,
  PBt as d,
  Qst as f,
  TY as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  _V as v,
  ck as y,
  iCt as b,
  kFt as x,
  okt as S,
  rk as C,
  tkt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import { _lt as T, plt as E, vLr as D, wLr as O, zRr as k } from "./app-initial-ad16eaadf81f.js";
import { _ as A, a as j, b as M, l as N, n as P, t as F } from "./builder-analytics-f4d73421cfb8.js";
function I(e) {
  let t = (0, L.c)(9),
    { agentId: n, versionScope: r, onPreviewRun: i, onOpen: a, compactInToolbar: s } = e,
    l = r === void 0 ? `published` : r,
    u = s !== void 0 && s,
    d = S(),
    f = b(k),
    [p, m] = (0, R.useState)(!1),
    g = (0, R.useRef)(null),
    _;
  return (
    t[0] !== f ||
    t[1] !== n ||
    t[2] !== u ||
    t[3] !== d ||
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== p ||
    t[7] !== l
      ? ((_ =
          f == null
            ? null
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsxs)(h, {
                    ref: g,
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: l === `published`,
                    "aria-haspopup": `dialog`,
                    "aria-expanded": p,
                    "aria-label": d.formatMessage({
                      id: `workspaceAgents.schedules.open`,
                      defaultMessage: `Automations`,
                      description: `Opens a Workspace Agent's scheduled automations`,
                    }),
                    onClick: () => {
                      (a?.(), m(!0));
                    },
                    children: [
                      (0, z.jsx)(o, {}),
                      l === `draft`
                        ? (0, z.jsx)(`span`, {
                            className: c(u && `hidden @2xl/app-shell-header-toolbar:inline`),
                            children: (0, z.jsx)(w, {
                              id: `workspaceAgents.schedules.open`,
                              defaultMessage: `Automations`,
                              description: `Opens a Workspace Agent's scheduled automations`,
                            }),
                          })
                        : null,
                    ],
                  }),
                  p
                    ? (0, z.jsx)(
                        B,
                        {
                          accountId: f,
                          agentId: n,
                          versionScope: l,
                          onPreviewRun: i,
                          onClose: () => m(!1),
                          onCloseAutoFocus: () => g.current?.focus(),
                        },
                        `${f}:${n}`,
                      )
                    : null,
                ],
              })),
        (t[0] = f),
        (t[1] = n),
        (t[2] = u),
        (t[3] = d),
        (t[4] = a),
        (t[5] = i),
        (t[6] = p),
        (t[7] = l),
        (t[8] = _))
      : (_ = t[8]),
    _
  );
}
var L, R, z, B;
function V() {
  return (V = e(() => {
    ((L = d()),
      l(),
      _(),
      (R = i()),
      m(),
      O(),
      g(),
      p(),
      r(),
      (z = s()),
      x(),
      (B = a(
        async () =>
          (
            await u(
              async () => {
                let { WorkspaceAgentSchedulesDialog: e } = await import(`./dialog-c260d61c70d3.js`);
                return { WorkspaceAgentSchedulesDialog: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
              import.meta.url,
            )
          ).WorkspaceAgentSchedulesDialog,
      )));
  }))();
}
function H(e) {
  let n = (0, W.c)(17),
    { agentId: r, page: i } = e,
    a = i === void 0 ? N.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS : i,
    o = t(f),
    s = (0, G.useRef)(null),
    c = b(k),
    l = b(D),
    u = b(T),
    [d, p] = (0, G.useState)(null);
  if (c == null || l == null || u !== !0) return null;
  let m;
  n[0] !== c || n[1] !== l || n[2] !== r || n[3] !== a || n[4] !== o
    ? ((m = () => {
        (P(o, {
          agentId: r,
          actionType: j.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_MODAL_OPEN,
          source: A.CHATGPT_AGENT_BUILDER_SOURCE_HEADER,
          page: a,
          isPublished: !0,
          isReadonly: !1,
          isPreviewVersion: !1,
        }),
          p({ accountId: c, accountUserId: l }));
      }),
      (n[0] = c),
      (n[1] = l),
      (n[2] = r),
      (n[3] = a),
      (n[4] = o),
      (n[5] = m))
    : (m = n[5]);
  let g;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, K.jsx)(w, {
        id: `workspaceAgents.sharing.open`,
        defaultMessage: `Share`,
        description: `Button that opens access settings for a published Workspace Agent`,
      })),
      (n[6] = g))
    : (g = n[6]);
  let _;
  n[7] === m
    ? (_ = n[8])
    : ((_ = (0, K.jsx)(h, { ref: s, color: `ghostSecondary`, size: `toolbar`, onClick: m, children: g })),
      (n[7] = m),
      (n[8] = _));
  let v;
  n[9] !== c || n[10] !== l || n[11] !== r || n[12] !== d
    ? ((v =
        d?.accountId === c && d.accountUserId === l
          ? (0, K.jsx)(
              q,
              {
                accountId: c,
                accountUserId: l,
                agentId: r,
                onClose: () => {
                  (p(null), s.current?.focus());
                },
              },
              c + `:` + l + `:` + r,
            )
          : null),
      (n[9] = c),
      (n[10] = l),
      (n[11] = r),
      (n[12] = d),
      (n[13] = v))
    : (v = n[13]);
  let y;
  return (
    n[14] !== _ || n[15] !== v
      ? ((y = (0, K.jsxs)(K.Fragment, { children: [_, v] })), (n[14] = _), (n[15] = v), (n[16] = y))
      : (y = n[16]),
    y
  );
}
function U(e) {
  let n = (0, W.c)(9),
    { agentId: r, onSelect: i, page: a } = e,
    o = a === void 0 ? N.CHATGPT_AGENT_BUILDER_PAGE_EDITOR_INSTRUCTIONS : a,
    s = t(f),
    c = b(k),
    l = b(D),
    u = b(T);
  if (c == null || l == null || u !== !0) return null;
  let d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, K.jsx)(v, {})), (n[0] = d)) : (d = n[0]);
  let p;
  n[1] !== r || n[2] !== i || n[3] !== o || n[4] !== s
    ? ((p = () => {
        (P(s, {
          agentId: r,
          actionType: j.CHATGPT_AGENT_BUILDER_ACTION_TYPE_SHARE_MODAL_OPEN,
          source: A.CHATGPT_AGENT_BUILDER_SOURCE_HEADER,
          page: o,
          isPublished: !0,
          isReadonly: !1,
          isPreviewVersion: !1,
        }),
          i());
      }),
      (n[1] = r),
      (n[2] = i),
      (n[3] = o),
      (n[4] = s),
      (n[5] = p))
    : (p = n[5]);
  let m;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, K.jsx)(w, {
        id: `workspaceAgents.sharing.open`,
        defaultMessage: `Share`,
        description: `Button that opens access settings for a published Workspace Agent`,
      })),
      (n[6] = m))
    : (m = n[6]);
  let h;
  return (
    n[7] === p
      ? (h = n[8])
      : ((h = (0, K.jsx)(C.Item, { leftIcon: d, onSelect: p, children: m })), (n[7] = p), (n[8] = h)),
    h
  );
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    ((W = d()),
      M(),
      _(),
      (G = i()),
      m(),
      O(),
      g(),
      y(),
      p(),
      r(),
      n(),
      E(),
      F(),
      (K = s()),
      x(),
      (q = a(
        async () =>
          (
            await u(
              async () => {
                let { WorkspaceAgentSharingDialog: e } = await import(`./dialog-a78145acf915.js`);
                return { WorkspaceAgentSharingDialog: e };
              },
              __vite__mapDeps([21, 1, 2, 3, 4, 5, 22, 23, 24, 25, 26, 12, 13, 14, 16, 15]),
              import.meta.url,
            )
          ).WorkspaceAgentSharingDialog,
      )));
  }))();
}
export { V as a, I as i, U as n, J as r, H as t };
//# sourceMappingURL=button-7fc71ca5d01f.js.map
