const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./share-dialog-8f0d271f4648.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./share-analytics-a4bd985bdaa7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $v as t,
  AO as n,
  CO as r,
  Cot as i,
  IDt as a,
  Ixt as o,
  Mz as s,
  Nz as c,
  Pxt as l,
  Qv as u,
  RG as d,
  TJ as f,
  TO as p,
  VDt as m,
  Vxt as h,
  cJ as g,
  ey as _,
  fPt as v,
  i3 as y,
  jDt as b,
  ny as x,
  pPt as S,
  r3 as C,
  ry as ee,
  ty as te,
  vzt as w,
  wot as T,
  xB as E,
  xMt as D,
  yzt as O,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fin as A,
  G4n as j,
  Hin as M,
  J4n as N,
  OPr as P,
  aAr as F,
  dAr as ne,
  kPr as I,
  lAr as L,
  rkr as R,
  tPr as z,
  ukr as B,
  zOr as V,
} from "./app-initial-5851df3f6cb1.js";
import { n as H, t as re } from "./cloud-automation-actions-3a594ba7517b.js";
import { n as ie, t as U } from "./run-now-49b74db2bf75.js";
import { n as W, t as G } from "./share-analytics-a4bd985bdaa7.js";
import { i as K, n as q } from "./task-groups-c909436a8517.js";
function J(e) {
  let t = (0, X.c)(38),
    {
      item: n,
      onDeleted: i,
      onPaused: o,
      onResumed: c,
      onRunNow: l,
      onRunNowAsync: f,
      runNowIcon: _,
      isRunNowPending: v,
      source: y,
      rowRef: b,
      additionalMenuItems: x,
      shareMenuItem: S,
      statusFirst: w,
      menuProps: T,
      onMenuOpenChange: E,
    } = e,
    D = y === void 0 ? `scheduled_page` : y,
    O = w !== void 0 && w,
    { isPending: A } = k(ie, n.automation.id),
    j = v || A,
    [M, N] = (0, Z.useState)(!1),
    P;
  t[0] === E
    ? (P = t[1])
    : ((P = () => {
        (N(!1), E?.(!1));
      }),
      (t[0] = E),
      (t[1] = P));
  let I = P,
    L = h(B),
    R = L.isPending && L.variables?.automationId === n.automation.id,
    z = (0, Z.useRef)(null),
    V,
    H;
  (t[2] !== M || t[3] !== R || t[4] !== b
    ? ((V = () => {
        if (!M || R || b == null) return;
        let e,
          t = () => {
            (clearTimeout(e), (e = void 0));
          },
          n = (n) => {
            n.target instanceof Node &&
              (b.current?.contains(n.target) || z.current?.contains(n.target)
                ? t()
                : (e ??= setTimeout(() => N(!1), 150)));
          };
        return (
          document.addEventListener(`pointermove`, n, { passive: !0 }),
          () => {
            (document.removeEventListener(`pointermove`, n), t());
          }
        );
      }),
      (H = [M, R, b]),
      (t[2] = M),
      (t[3] = R),
      (t[4] = b),
      (t[5] = V),
      (t[6] = H))
    : ((V = t[5]), (H = t[6])),
    (0, Z.useEffect)(V, H));
  let U = m(),
    W;
  t[7] !== n.automation || t[8] !== D
    ? ((W = D === `editor` ? F(n.automation) : q(n.automation)),
      (t[7] = n.automation),
      (t[8] = D),
      (t[9] = W))
    : (W = t[9]);
  let G = W,
    K;
  t[10] === n.automation ? (K = t[11]) : ((K = ne(n.automation)), (t[10] = n.automation), (t[11] = K));
  let J = K,
    Y;
  t[12] !== x ||
  t[13] !== I ||
  t[14] !== U ||
  t[15] !== M ||
  t[16] !== j ||
  t[17] !== R ||
  t[18] !== J ||
  t[19] !== n ||
  t[20] !== T ||
  t[21] !== E ||
  t[22] !== l ||
  t[23] !== f ||
  t[24] !== _ ||
  t[25] !== S ||
  t[26] !== D ||
  t[27] !== G ||
  t[28] !== O
    ? ((Y = (e) => {
        let { deleteAction: t, pauseAction: i, resumeAction: o } = e,
          c =
            G === `completed`
              ? null
              : (0, Q.jsx)(p.Item, {
                  "aria-busy": R || void 0,
                  disabled: G === `paused` ? o.disabled : i.disabled,
                  focusableWhenDisabled: R || (G === `paused` && o.disabledReason != null),
                  tooltipText: G === `paused` ? o.disabledReason : void 0,
                  rightIcon: R ? (0, Q.jsx)(C, { className: `icon-xs` }) : void 0,
                  leftIcon: G === `paused` ? (0, Q.jsx)(s, { asset: te }) : (0, Q.jsx)(s, { asset: ee }),
                  onSelect: (e) => {
                    (e.preventDefault(), (G === `paused` ? o : i).onSelect());
                  },
                  children:
                    G === `paused`
                      ? (0, Q.jsx)(a, {
                          id: `inbox.automations.resumeTooltip`,
                          defaultMessage: `Resume`,
                          description: `Tooltip label for resuming an automation`,
                        })
                      : (0, Q.jsx)(a, {
                          id: `inbox.automations.pauseTooltip`,
                          defaultMessage: `Pause`,
                          description: `Tooltip label for pausing an automation`,
                        }),
                });
        return (0, Q.jsxs)(r, {
          ...T,
          contentRef: z,
          open: M,
          onOpenChange: (e) => {
            (N(e), E?.(e));
          },
          align: `end`,
          contentWidth: T?.contentWidth ?? `xs`,
          triggerButton: (0, Q.jsx)(u, {
            label: U.formatMessage({
              id: `automations.tasks.row.moreActions`,
              defaultMessage: `More task actions`,
              description: `Accessible label for the menu of actions on a scheduled task`,
            }),
          }),
          children: [
            O ? c : null,
            (l != null || f != null) && G !== `completed`
              ? (0, Q.jsx)(p.Item, {
                  disabled: j || R || J,
                  "aria-busy": j || void 0,
                  focusableWhenDisabled: j || J,
                  tooltipText: J
                    ? (0, Q.jsx)(`div`, {
                        className: `max-w-48 text-balance`,
                        children: (0, Q.jsx)(a, {
                          id: `automations.actions.runNow.triggerBasedTooltip`,
                          defaultMessage: `Automations triggered by events can’t be run manually`,
                          description: `Tooltip on the disabled Run now menu action for automations that run only when an external event triggers them`,
                        }),
                      })
                    : void 0,
                  leftIcon: _ ?? (0, Q.jsx)(d, {}),
                  rightIcon: j ? (0, Q.jsx)(C, { className: `icon-xs` }) : void 0,
                  onSelect: (e) => {
                    f == null ? l?.() : (e.preventDefault(), f().then(I, I));
                  },
                  children: (0, Q.jsx)(a, {
                    id: `automations.actions.runNow`,
                    defaultMessage: `Run now`,
                    description: `Menu action on the Scheduled page that runs the selected task immediately`,
                  }),
                })
              : null,
            x,
            S ?? (0, Q.jsx)(ae, { item: n, source: D, disabled: !1 }),
            O ? null : c,
            t == null
              ? null
              : (0, Q.jsx)(p.Group, {
                  children: (0, Q.jsx)(p.Item, {
                    tone: `danger`,
                    disabled: t.disabled,
                    leftIcon: (0, Q.jsx)(g, {}),
                    onSelect: t.onSelect,
                    children: (0, Q.jsx)(a, {
                      id: `settings.automations.delete`,
                      defaultMessage: `Delete`,
                      description: `Menu item for deleting a scheduled task`,
                    }),
                  }),
                }),
          ],
        });
      }),
      (t[12] = x),
      (t[13] = I),
      (t[14] = U),
      (t[15] = M),
      (t[16] = j),
      (t[17] = R),
      (t[18] = J),
      (t[19] = n),
      (t[20] = T),
      (t[21] = E),
      (t[22] = l),
      (t[23] = f),
      (t[24] = _),
      (t[25] = S),
      (t[26] = D),
      (t[27] = G),
      (t[28] = O),
      (t[29] = Y))
    : (Y = t[29]);
  let $;
  return (
    t[30] !== I || t[31] !== n || t[32] !== i || t[33] !== o || t[34] !== c || t[35] !== G || t[36] !== Y
      ? (($ = (0, Q.jsx)(re, {
          item: n,
          onDeleted: i,
          onPaused: o,
          onResumed: c,
          onStatusChanged: I,
          status: G,
          statusMutation: B,
          renderActions: Y,
        })),
        (t[30] = I),
        (t[31] = n),
        (t[32] = i),
        (t[33] = o),
        (t[34] = c),
        (t[35] = G),
        (t[36] = Y),
        (t[37] = $))
      : ($ = t[37]),
    $
  );
}
function ae(e) {
  let t = (0, X.c)(17),
    { item: n, source: r, disabled: s } = e,
    c = o(i),
    { data: l } = M(),
    u = k(I, `1431301099`),
    d = n.teamId == null && u && l?.structure === `workspace`,
    f;
  t[0] === d ? (f = t[1]) : ((f = { enabled: d }), (t[0] = d), (t[1] = f));
  let { data: m } = k(z, l?.id ?? null, f),
    h;
  t[2] !== n.automation || t[3] !== r
    ? ((h = r === `editor` ? F(n.automation) : q(n.automation)),
      (t[2] = n.automation),
      (t[3] = r),
      (t[4] = h))
    : (h = t[4]);
  let g = h,
    _;
  t[5] !== l || t[6] !== m?.features || t[7] !== n.teamId || t[8] !== u || t[9] !== g
    ? ((_ =
        n.teamId == null &&
        u &&
        g !== `completed` &&
        l != null &&
        l.plan_type !== `quorum` &&
        (l.structure !== `workspace` || m?.features?.includes(`workspace_share_links`))),
      (t[5] = l),
      (t[6] = m?.features),
      (t[7] = n.teamId),
      (t[8] = u),
      (t[9] = g),
      (t[10] = _))
    : (_ = t[10]);
  let v = _,
    y;
  return (
    t[11] !== v || t[12] !== s || t[13] !== n || t[14] !== c || t[15] !== r
      ? ((y = v
          ? (0, Q.jsx)(p.Item, {
              disabled: s,
              leftIcon: (0, Q.jsx)(E, {}),
              onSelect: () => {
                Y(c, n, r);
              },
              children: (0, Q.jsx)(a, {
                id: `automations.tasks.row.action.share`,
                defaultMessage: `Share`,
                description: `Opens a dialog for sharing a copy of this task's instructions and schedule`,
              }),
            })
          : null),
        (t[11] = v),
        (t[12] = s),
        (t[13] = n),
        (t[14] = c),
        (t[15] = r),
        (t[16] = y))
      : (y = t[16]),
    y
  );
}
async function Y(e, t, n) {
  let { ScheduledTaskShareDialog: r } = await v(
    async () => {
      let { ScheduledTaskShareDialog: e } = await import(`./share-dialog-8f0d271f4648.js`);
      return { ScheduledTaskShareDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
    import.meta.url,
  );
  (W(e, `task_share_button_clicked`, t.automation.id, n), N(e, r, { automation: t.automation }));
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = w()),
      x(),
      _(),
      l(),
      (Z = O()),
      b(),
      V(),
      A(),
      n(),
      c(),
      f(),
      j(),
      t(),
      y(),
      T(),
      P(),
      H(),
      L(),
      R(),
      U(),
      G(),
      K(),
      (Q = D()),
      S());
  }))();
}
export { ae as n, $ as r, J as t };
//# sourceMappingURL=menu-items-18cfbf2a8c48.js.map
