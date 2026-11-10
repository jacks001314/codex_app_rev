import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  NSt as r,
  PBt as i,
  RFt as a,
  VSt as o,
  Vrt as s,
  XOt as c,
  ZSt as l,
  iCt as u,
  nCt as d,
  okt as f,
  qrt as p,
  zFt as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as h,
  B1n as g,
  DDn as _,
  DNr as v,
  FWt as y,
  LWt as b,
  MOr as x,
  PDn as S,
  VPn as C,
  Xjn as w,
  cBr as T,
  lBr as E,
  np as D,
  qjn as O,
  rp as k,
  wLr as A,
  yNr as j,
  zOr as M,
  zRr as N,
} from "./app-initial-ad16eaadf81f.js";
import { n as P, t as F } from "./task-unread-edc42e4e5066.js";
import { n as I, t as L } from "./plan-file-4ed41883a51a.js";
function R(e) {
  let n = (0, z.c)(28),
    { conversationId: r, automationId: i } = e,
    a = t(x),
    s = f(),
    c = o(),
    l = c.state,
    h = u(N),
    v = d(g, r),
    y = h != null && l?.sidebarAutomationAccountId === h,
    C = d(y ? j : null, i),
    E = C?.data,
    D;
  n[0] === E?.automation.plan_file_id
    ? (D = n[1])
    : ((D = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(E?.automation.plan_file_id ?? ``)?.[1]),
      (n[0] = E?.automation.plan_file_id),
      (n[1] = D));
  let O = D,
    A = d(O == null ? null : L, O ?? ``),
    M = y && v != null && C?.isPending === !1 && (O == null || A?.isPending === !1),
    P = (0, B.useRef)(null),
    I = `${h}:${c.key}`,
    R;
  n[2] !== s || n[3] !== a || n[4] !== I
    ? ((R = () => {
        ((P.current = I),
          a
            .get(p)
            .danger(
              s.formatMessage({
                id: `automations.scheduled.goal.openFailed`,
                defaultMessage: `Couldn’t open this goal’s progress`,
                description: `Error when the saved plan for a goal selected in Scheduled is missing or cannot be opened`,
              }),
              { errorAnalytics: { toastId: `automations.scheduled.goal.openFailed` } },
            ));
      }),
      (n[2] = s),
      (n[3] = a),
      (n[4] = I),
      (n[5] = R))
    : (R = n[5]);
  let V = (0, B.useEffectEvent)(R),
    H;
  n[6] !== h ||
  n[7] !== r ||
  n[8] !== C?.error ||
  n[9] !== E ||
  n[10] !== A?.data ||
  n[11] !== A?.error ||
  n[12] !== V ||
  n[13] !== a ||
  n[14] !== v
    ? ((H = async (e, t) => {
        let n = A?.data;
        if (
          C?.error != null ||
          A?.error != null ||
          E == null ||
          F(E) !== v ||
          n?.mime_type !== `text/markdown` ||
          n.access_kind !== `owned`
        ) {
          V();
          return;
        }
        if (e.aborted) return;
        let i = `chatgpt-file:${r}:automation-plan:${n.id}`;
        (_.moveTabTo(a, i, S, null),
          await k(a, {
            conversationId: r,
            fileName: n.name,
            mimeType: n.mime_type,
            libraryArtifactType: `automation_plan`,
            browserPreview: !0,
            fullWidth: !1,
            downloadFallback: !1,
            tabKey: `automation-plan:${n.id}`,
            signal: e,
            onOpened: () => {
              let e = a.get(S.tabById$, i);
              (e != null && b(a, { kind: `content`, tab: e }, { mode: `split`, contentSide: `right` }), t());
            },
            isAccessBlocked: (e) => !T(e, `3901104270`) || e.get(N) !== h || w(e, r),
            target: { type: `file-id`, fileId: `file-inline-${n.id}`, libraryFileId: n.id },
          }));
      }),
      (n[6] = h),
      (n[7] = r),
      (n[8] = C?.error),
      (n[9] = E),
      (n[10] = A?.data),
      (n[11] = A?.error),
      (n[12] = V),
      (n[13] = a),
      (n[14] = v),
      (n[15] = H))
    : (H = n[15]);
  let U = (0, B.useEffectEvent)(H),
    W;
  n[16] !== U || n[17] !== M || n[18] !== V || n[19] !== I
    ? ((W = () => {
        if (!M || P.current === I) return;
        let e = new AbortController(),
          t = !1;
        return (
          U(e.signal, () => {
            ((t = !0), (P.current = I));
          }).catch((t) => {
            e.signal.aborted ||
              (m.warning(`Scheduled goal plan failed to open`, { safe: {}, sensitive: { error: t } }), V());
          }),
          () => {
            t || e.abort();
          }
        );
      }),
      (n[16] = U),
      (n[17] = M),
      (n[18] = V),
      (n[19] = I),
      (n[20] = W))
    : (W = n[20]);
  let G;
  return (
    n[21] !== i || n[22] !== r || n[23] !== M || n[24] !== a || n[25] !== v || n[26] !== I
      ? ((G = [M, I, a, r, v, i]),
        (n[21] = i),
        (n[22] = r),
        (n[23] = M),
        (n[24] = a),
        (n[25] = v),
        (n[26] = I),
        (n[27] = G))
      : (G = n[27]),
    (0, B.useEffect)(W, G),
    null
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = i()), l(), (B = n()), c(), r(), h(), A(), v(), P(), s(), M(), E(), y(), a(), C(), O(), D(), I());
  }))();
}
V();
export { R as ScheduledGoalNavigationBridge };
//# sourceMappingURL=scheduled-goal-navigation-8cbce13dea9c.js.map
