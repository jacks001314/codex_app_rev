const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./share-dialog-238032402c32.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./share-analytics-ccfc9893f573.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  DB as i,
  Dy as a,
  Ey as o,
  FBt as s,
  FK as c,
  LNt as l,
  OB as u,
  OFt as d,
  Oy as f,
  PBt as p,
  Qst as m,
  TY as h,
  Ty as g,
  XOt as _,
  ZSt as v,
  _V as y,
  cY as b,
  ck as x,
  e6 as S,
  iCt as ee,
  kFt as C,
  ky as te,
  nCt as w,
  okt as T,
  rk as E,
  tk as ne,
  tkt as D,
  wy as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as O,
  D5n as k,
  DNr as A,
  FPr as j,
  NPr as M,
  PNr as N,
  jcn as P,
  kPr as F,
  lBr as I,
  lNr as L,
  tRr as R,
  uBr as z,
  wcn as B,
} from "./app-initial-ad16eaadf81f.js";
import { n as V, t as ie } from "./cloud-automation-actions-9f7b3ed7556e.js";
import { n as ae, t as H } from "./run-now-051c45dd9d07.js";
import { n as U, t as W } from "./share-analytics-ccfc9893f573.js";
import { i as G, n as K } from "./task-groups-9e9296237515.js";
function q(e) {
  let n = (0, X.c)(38),
    {
      item: r,
      onDeleted: o,
      onPaused: s,
      onResumed: l,
      onRunNow: u,
      onRunNowAsync: d,
      runNowIcon: f,
      isRunNowPending: p,
      source: m,
      rowRef: h,
      additionalMenuItems: g,
      shareMenuItem: _,
      statusFirst: v,
      menuProps: y,
      onMenuOpenChange: x,
    } = e,
    S = m === void 0 ? `scheduled_page` : m,
    C = v !== void 0 && v,
    { isPending: O } = w(ae, r.automation.id),
    k = p || O,
    [A, M] = (0, Z.useState)(!1),
    P;
  n[0] === x
    ? (P = n[1])
    : ((P = () => {
        (M(!1), x?.(!1));
      }),
      (n[0] = x),
      (n[1] = P));
  let I = P,
    L = ee(N),
    R = L.isPending && L.variables?.automationId === r.automation.id,
    z = (0, Z.useRef)(null),
    B,
    V;
  (n[2] !== A || n[3] !== R || n[4] !== h
    ? ((B = () => {
        if (!A || R || h == null) return;
        let e,
          t = () => {
            (clearTimeout(e), (e = void 0));
          },
          n = (n) => {
            n.target instanceof Node &&
              (h.current?.contains(n.target) || z.current?.contains(n.target)
                ? t()
                : (e ??= setTimeout(() => M(!1), 150)));
          };
        return (
          document.addEventListener(`pointermove`, n, { passive: !0 }),
          () => {
            (document.removeEventListener(`pointermove`, n), t());
          }
        );
      }),
      (V = [A, R, h]),
      (n[2] = A),
      (n[3] = R),
      (n[4] = h),
      (n[5] = B),
      (n[6] = V))
    : ((B = n[5]), (V = n[6])),
    (0, Z.useEffect)(B, V));
  let H = T(),
    U;
  n[7] !== r.automation || n[8] !== S
    ? ((U = S === `editor` ? F(r.automation) : K(r.automation)),
      (n[7] = r.automation),
      (n[8] = S),
      (n[9] = U))
    : (U = n[9]);
  let W = U,
    G;
  n[10] === r.automation ? (G = n[11]) : ((G = j(r.automation)), (n[10] = r.automation), (n[11] = G));
  let q = G,
    Y;
  n[12] !== g ||
  n[13] !== I ||
  n[14] !== H ||
  n[15] !== A ||
  n[16] !== k ||
  n[17] !== R ||
  n[18] !== q ||
  n[19] !== r ||
  n[20] !== y ||
  n[21] !== x ||
  n[22] !== u ||
  n[23] !== d ||
  n[24] !== f ||
  n[25] !== _ ||
  n[26] !== S ||
  n[27] !== W ||
  n[28] !== C
    ? ((Y = (e) => {
        let { deleteAction: n, pauseAction: o, resumeAction: s } = e,
          l =
            W === `completed`
              ? null
              : (0, Q.jsx)(E.Item, {
                  "aria-busy": R || void 0,
                  disabled: W === `paused` ? s.disabled : o.disabled,
                  focusableWhenDisabled: R || (W === `paused` && s.disabledReason != null),
                  tooltipText: W === `paused` ? s.disabledReason : void 0,
                  rightIcon: R ? (0, Q.jsx)(t, { className: `icon-xs` }) : void 0,
                  leftIcon: W === `paused` ? (0, Q.jsx)(i, { asset: a }) : (0, Q.jsx)(i, { asset: te }),
                  onSelect: (e) => {
                    (e.preventDefault(), (W === `paused` ? s : o).onSelect());
                  },
                  children:
                    W === `paused`
                      ? (0, Q.jsx)(D, {
                          id: `inbox.automations.resumeTooltip`,
                          defaultMessage: `Resume`,
                          description: `Tooltip label for resuming an automation`,
                        })
                      : (0, Q.jsx)(D, {
                          id: `inbox.automations.pauseTooltip`,
                          defaultMessage: `Pause`,
                          description: `Tooltip label for pausing an automation`,
                        }),
                });
        return (0, Q.jsxs)(ne, {
          ...y,
          contentRef: z,
          open: A,
          onOpenChange: (e) => {
            (M(e), x?.(e));
          },
          align: `end`,
          contentWidth: y?.contentWidth ?? `xs`,
          triggerButton: (0, Q.jsx)(re, {
            label: H.formatMessage({
              id: `automations.tasks.row.moreActions`,
              defaultMessage: `More task actions`,
              description: `Accessible label for the menu of actions on a scheduled task`,
            }),
          }),
          children: [
            C ? l : null,
            (u != null || d != null) && W !== `completed`
              ? (0, Q.jsx)(E.Item, {
                  disabled: k || R || q,
                  "aria-busy": k || void 0,
                  focusableWhenDisabled: k || q,
                  tooltipText: q
                    ? (0, Q.jsx)(`div`, {
                        className: `max-w-48 text-balance`,
                        children: (0, Q.jsx)(D, {
                          id: `automations.actions.runNow.triggerBasedTooltip`,
                          defaultMessage: `Automations triggered by events can’t be run manually`,
                          description: `Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them`,
                        }),
                      })
                    : void 0,
                  leftIcon: f ?? (0, Q.jsx)(c, {}),
                  rightIcon: k ? (0, Q.jsx)(t, { className: `icon-xs` }) : void 0,
                  onSelect: (e) => {
                    d == null ? u?.() : (e.preventDefault(), d().then(I, I));
                  },
                  children: (0, Q.jsx)(D, {
                    id: `automations.actions.runNow`,
                    defaultMessage: `Run now`,
                    description: `Menu action on the Scheduled page that runs the selected task immediately`,
                  }),
                })
              : null,
            g,
            _ ?? (0, Q.jsx)(J, { item: r, source: S, disabled: !1 }),
            C ? null : l,
            n == null
              ? null
              : (0, Q.jsx)(E.Group, {
                  children: (0, Q.jsx)(E.Item, {
                    tone: `danger`,
                    disabled: n.disabled,
                    leftIcon: (0, Q.jsx)(b, {}),
                    onSelect: n.onSelect,
                    children: (0, Q.jsx)(D, {
                      id: `settings.automations.delete`,
                      defaultMessage: `Delete`,
                      description: `Menu item for deleting a scheduled task`,
                    }),
                  }),
                }),
          ],
        });
      }),
      (n[12] = g),
      (n[13] = I),
      (n[14] = H),
      (n[15] = A),
      (n[16] = k),
      (n[17] = R),
      (n[18] = q),
      (n[19] = r),
      (n[20] = y),
      (n[21] = x),
      (n[22] = u),
      (n[23] = d),
      (n[24] = f),
      (n[25] = _),
      (n[26] = S),
      (n[27] = W),
      (n[28] = C),
      (n[29] = Y))
    : (Y = n[29]);
  let $;
  return (
    n[30] !== I || n[31] !== r || n[32] !== o || n[33] !== s || n[34] !== l || n[35] !== W || n[36] !== Y
      ? (($ = (0, Q.jsx)(ie, {
          item: r,
          onDeleted: o,
          onPaused: s,
          onResumed: l,
          onStatusChanged: I,
          status: W,
          statusMutation: N,
          renderActions: Y,
        })),
        (n[30] = I),
        (n[31] = r),
        (n[32] = o),
        (n[33] = s),
        (n[34] = l),
        (n[35] = W),
        (n[36] = Y),
        (n[37] = $))
      : ($ = n[37]),
    $
  );
}
function J(e) {
  let t = (0, X.c)(17),
    { item: r, source: i, disabled: a } = e,
    o = n(m),
    { data: s } = P(),
    c = w(z, `1431301099`),
    l = r.teamId == null && c && s?.structure === `workspace`,
    u;
  t[0] === l ? (u = t[1]) : ((u = { enabled: l }), (t[0] = l), (t[1] = u));
  let { data: d } = w(R, s?.id ?? null, u),
    f;
  t[2] !== r.automation || t[3] !== i
    ? ((f = i === `editor` ? F(r.automation) : K(r.automation)),
      (t[2] = r.automation),
      (t[3] = i),
      (t[4] = f))
    : (f = t[4]);
  let p = f,
    h;
  t[5] !== s || t[6] !== d?.features || t[7] !== r.teamId || t[8] !== c || t[9] !== p
    ? ((h =
        r.teamId == null &&
        c &&
        p !== `completed` &&
        s != null &&
        s.plan_type !== `quorum` &&
        (s.structure !== `workspace` || d?.features?.includes(`workspace_share_links`))),
      (t[5] = s),
      (t[6] = d?.features),
      (t[7] = r.teamId),
      (t[8] = c),
      (t[9] = p),
      (t[10] = h))
    : (h = t[10]);
  let g = h,
    _;
  return (
    t[11] !== g || t[12] !== a || t[13] !== r || t[14] !== o || t[15] !== i
      ? ((_ = g
          ? (0, Q.jsx)(E.Item, {
              disabled: a,
              leftIcon: (0, Q.jsx)(y, {}),
              onSelect: () => {
                Y(o, r, i);
              },
              children: (0, Q.jsx)(D, {
                id: `automations.tasks.row.action.share`,
                defaultMessage: `Share`,
                description: `Opens a dialog for sharing a copy of this task's instructions and schedule`,
              }),
            })
          : null),
        (t[11] = g),
        (t[12] = a),
        (t[13] = r),
        (t[14] = o),
        (t[15] = i),
        (t[16] = _))
      : (_ = t[16]),
    _
  );
}
async function Y(e, t, n) {
  let { ScheduledTaskShareDialog: r } = await d(
    async () => {
      let { ScheduledTaskShareDialog: e } = await import(`./share-dialog-238032402c32.js`);
      return { ScheduledTaskShareDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    import.meta.url,
  );
  (U(e, `task_share_button_clicked`, t.automation.id, n), O(e, r, { automation: t.automation }));
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = p()),
      f(),
      o(),
      v(),
      (Z = s()),
      _(),
      L(),
      B(),
      x(),
      u(),
      h(),
      k(),
      g(),
      S(),
      r(),
      I(),
      V(),
      M(),
      A(),
      H(),
      W(),
      G(),
      (Q = l()),
      C());
  }))();
}
export { J as n, $ as r, q as t };
//# sourceMappingURL=menu-items-d31be3c38abb.js.map
