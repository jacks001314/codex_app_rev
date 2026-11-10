import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  JOt as n,
  LNt as r,
  NSt as i,
  PBt as a,
  USt as o,
  VSt as s,
  XOt as c,
  ZSt as l,
  nCt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { GNr as f, JNr as p, YNr as m, cPr as h, jcn as g, wcn as _ } from "./app-initial-ad16eaadf81f.js";
import { i as v, r as y } from "./team-dialogs-a60bc21e8ccf.js";
function b(e) {
  let t = (0, x.c)(27),
    { accountId: r, team: i, userId: a } = e,
    { data: c } = g(),
    l = u(h, r),
    f;
  t[0] !== r || t[1] !== i.id || t[2] !== a
    ? ((f = { accountId: r, teamId: i.id, userId: a }), (t[0] = r), (t[1] = i.id), (t[2] = a), (t[3] = f))
    : (f = t[3]);
  let { mutateAsync: _ } = u(m, f),
    [v, b] = (0, S.useState)(!1),
    w = s(),
    T = o(),
    E,
    D;
  if (t[4] !== w) {
    let e = new URLSearchParams(w.search);
    (e.delete(`join`), (E = w), (D = e.toString()), (t[4] = w), (t[5] = E), (t[6] = D));
  } else ((E = t[5]), (D = t[6]));
  let O;
  t[7] !== E || t[8] !== D ? ((O = { ...E, search: D }), (t[7] = E), (t[8] = D), (t[9] = O)) : (O = t[9]);
  let k = O,
    A;
  t[10] === i.name
    ? (A = t[11])
    : ((A = (0, C.jsx)(d, {
        id: `settings.teams.join.confirmTitle`,
        defaultMessage: `Join {team}?`,
        description: `Confirmation shown on a team preview after opening a join link; team is the name of the team the viewer would join`,
        values: { team: i.name },
      })),
      (t[10] = i.name),
      (t[11] = A));
  let j = c?.name ?? r,
    M;
  t[12] === j
    ? (M = t[13])
    : ((M = (0, C.jsx)(d, {
        id: `settings.teams.join.confirmAccess`,
        defaultMessage: `You’ll join this team in {workspace} and get access to its activity and shared resources`,
        description: `Team join confirmation explaining the workspace and access granted by joining; workspace is the selected workspace name`,
        values: { workspace: j },
      })),
      (t[12] = j),
      (t[13] = M));
  let N;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, C.jsx)(d, {
        id: `settings.teams.join.confirm`,
        defaultMessage: `Join`,
        description: `Button confirming that the viewer wants to join the team shown in the preview`,
      })),
      (t[14] = N))
    : (N = t[14]);
  let P = !v && l && c?.id === r ? _ : void 0,
    F,
    I;
  t[15] !== k || t[16] !== w.state || t[17] !== T
    ? ((F = () => void T(k, { replace: !0, state: w.state })),
      (I = () => void T(k, { replace: !0, state: w.state })),
      (t[15] = k),
      (t[16] = w.state),
      (t[17] = T),
      (t[18] = F),
      (t[19] = I))
    : ((F = t[18]), (I = t[19]));
  let L;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) =>
        e instanceof Error && p(e)
          ? (b(!0),
            n({
              id: `settings.teams.join.unavailable`,
              defaultMessage: `This join link isn't available in your current workspace`,
              description: `Error when a team join link is invalid, inaccessible, or belongs to another workspace; no team details are disclosed`,
            }))
          : n({
              id: `settings.teams.join.failed`,
              defaultMessage: `Couldn't join the team`,
              description: `Error after a temporary failure joining a team using a link`,
            })),
      (t[20] = L))
    : (L = t[20]);
  let R;
  return (
    t[21] !== F || t[22] !== I || t[23] !== A || t[24] !== M || t[25] !== P
      ? ((R = (0, C.jsx)(y, {
          title: A,
          description: M,
          submitLabel: N,
          onSubmit: P,
          onSuccess: F,
          onClose: I,
          getErrorMessage: L,
        })),
        (t[21] = F),
        (t[22] = I),
        (t[23] = A),
        (t[24] = M),
        (t[25] = P),
        (t[26] = R))
      : (R = t[26]),
    R
  );
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = a()), l(), (S = t()), c(), i(), _(), v(), f(), (C = r()));
  }))();
}
w();
export { b as TeamJoinConfirmation };
//# sourceMappingURL=team-join-confirmation-9bd63cdfe0ad.js.map
