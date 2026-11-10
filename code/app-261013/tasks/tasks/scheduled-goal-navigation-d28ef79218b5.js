import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Ixt as n,
  Pxt as r,
  SPt as i,
  VDt as a,
  Vxt as o,
  _xt as s,
  hot as c,
  jDt as l,
  lot as u,
  vzt as d,
  wxt as f,
  yzt as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as h,
  DOn as g,
  GMr as _,
  YOr as v,
  cwn as y,
  dwn as b,
  ep as x,
  gwr as S,
  hWt as C,
  hwn as w,
  pWt as T,
  rkr as E,
  tNr as D,
  tp as O,
  wOn as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, t as j } from "./task-unread-7620ebd43694.js";
import { n as M, t as N } from "./plan-file-96ce4584d7d0.js";
function P(e) {
  let r = (0, F.c)(26),
    { conversationId: i, automationId: s } = e,
    l = n(S),
    u = a(),
    d = f(),
    p = d.state,
    h = o(_),
    b = h != null && p?.sidebarAutomationAccountId === h,
    x = m(b ? v : null, s),
    T = x?.data,
    E;
  r[0] === T?.automation.plan_file_id
    ? (E = r[1])
    : ((E = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(T?.automation.plan_file_id ?? ``)?.[1]),
      (r[0] = T?.automation.plan_file_id),
      (r[1] = E));
  let D = E,
    k = m(D == null ? null : N, D ?? ``),
    A = b && x?.isPending === !1 && (D == null || k?.isPending === !1),
    M = (0, I.useRef)(null),
    P = `${h}:${d.key}`,
    L;
  r[2] !== u || r[3] !== l || r[4] !== P
    ? ((L = () => {
        ((M.current = P),
          l
            .get(c)
            .danger(
              u.formatMessage({
                id: `automations.scheduled.goal.openFailed`,
                defaultMessage: `Couldn’t open this goal’s progress`,
                description: `Error when the saved plan for a goal selected in Scheduled is missing or cannot be opened`,
              }),
              { errorAnalytics: { toastId: `automations.scheduled.goal.openFailed` } },
            ));
      }),
      (r[2] = u),
      (r[3] = l),
      (r[4] = P),
      (r[5] = L))
    : (L = r[5]);
  let R = (0, I.useEffectEvent)(L),
    z;
  r[6] !== h ||
  r[7] !== i ||
  r[8] !== x?.error ||
  r[9] !== T ||
  r[10] !== k?.data ||
  r[11] !== k?.error ||
  r[12] !== R ||
  r[13] !== l
    ? ((z = async (e, t) => {
        let n = k?.data;
        if (
          x?.error != null ||
          k?.error != null ||
          T == null ||
          j(T) !== i ||
          n?.mime_type !== `text/markdown` ||
          n.access_kind !== `owned`
        ) {
          R();
          return;
        }
        if (e.aborted) return;
        let r = `chatgpt-file:${i}:automation-plan:${n.id}`;
        (y.moveTabTo(l, r, w, null),
          await O(l, {
            conversationId: i,
            fileName: n.name,
            mimeType: n.mime_type,
            libraryArtifactType: `automation_plan`,
            browserPreview: !0,
            fullWidth: !1,
            downloadFallback: !1,
            tabKey: `automation-plan:${n.id}`,
            signal: e,
            onOpened: () => {
              let e = l.get(w.tabById$, r);
              (e != null && C(l, { kind: `content`, tab: e }, { mode: `split`, contentSide: `right` }), t());
            },
            isAccessBlocked: (e) => e.get(_) !== h || g(e, i),
            target: { type: `file-id`, fileId: `file-inline-${n.id}`, libraryFileId: n.id },
          }));
      }),
      (r[6] = h),
      (r[7] = i),
      (r[8] = x?.error),
      (r[9] = T),
      (r[10] = k?.data),
      (r[11] = k?.error),
      (r[12] = R),
      (r[13] = l),
      (r[14] = z))
    : (z = r[14]);
  let B = (0, I.useEffectEvent)(z),
    V;
  r[15] !== B || r[16] !== A || r[17] !== R || r[18] !== P
    ? ((V = () => {
        if (!A || M.current === P) return;
        let e = new AbortController(),
          n = !1;
        return (
          B(e.signal, () => {
            ((n = !0), (M.current = P));
          }).catch((n) => {
            e.signal.aborted ||
              (t.warning(`Scheduled goal plan failed to open`, { safe: {}, sensitive: { error: n } }), R());
          }),
          () => {
            n || e.abort();
          }
        );
      }),
      (r[15] = B),
      (r[16] = A),
      (r[17] = R),
      (r[18] = P),
      (r[19] = V))
    : (V = r[19]);
  let H;
  return (
    r[20] !== s || r[21] !== i || r[22] !== A || r[23] !== l || r[24] !== P
      ? ((H = [A, P, l, i, s]), (r[20] = s), (r[21] = i), (r[22] = A), (r[23] = l), (r[24] = P), (r[25] = H))
      : (H = r[25]),
    (0, I.useEffect)(V, H),
    null
  );
}
var F, I;
function L() {
  return (L = e(() => {
    ((F = d()), r(), (I = p()), l(), s(), b(), D(), E(), A(), u(), h(), T(), i(), k(), x(), M());
  }))();
}
L();
export { P as ScheduledGoalNavigationBridge };
//# sourceMappingURL=scheduled-goal-navigation-d28ef79218b5.js.map
