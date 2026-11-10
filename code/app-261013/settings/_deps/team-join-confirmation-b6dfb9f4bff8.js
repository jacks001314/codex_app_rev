import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ext as t,
  IDt as n,
  Pxt as r,
  _xt as i,
  jDt as a,
  kDt as o,
  vzt as s,
  wxt as c,
  xMt as l,
  yzt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import { Fin as f, Hin as p, Rkr as m, Tkr as h, wkr as g, xkr as _ } from "./app-initial-5851df3f6cb1.js";
import { i as v, r as y } from "./team-dialogs-3f431f8cab52.js";
function b(e) {
  let r = (0, x.c)(27),
    { accountId: i, team: a, userId: s } = e,
    { data: l } = p(),
    u = d(m, i),
    f;
  r[0] !== i || r[1] !== a.id || r[2] !== s
    ? ((f = { accountId: i, teamId: a.id, userId: s }), (r[0] = i), (r[1] = a.id), (r[2] = s), (r[3] = f))
    : (f = r[3]);
  let { mutateAsync: _ } = d(h, f),
    [v, b] = (0, S.useState)(!1),
    w = c(),
    T = t(),
    E,
    D;
  if (r[4] !== w) {
    let e = new URLSearchParams(w.search);
    (e.delete(`join`), (E = w), (D = e.toString()), (r[4] = w), (r[5] = E), (r[6] = D));
  } else ((E = r[5]), (D = r[6]));
  let O;
  r[7] !== E || r[8] !== D ? ((O = { ...E, search: D }), (r[7] = E), (r[8] = D), (r[9] = O)) : (O = r[9]);
  let k = O,
    A;
  r[10] === a.name
    ? (A = r[11])
    : ((A = (0, C.jsx)(n, {
        id: `settings.teams.join.confirmTitle`,
        defaultMessage: `Join {team}?`,
        description: `Confirmation shown on a team preview after opening a join link; team is the name of the team the viewer would join`,
        values: { team: a.name },
      })),
      (r[10] = a.name),
      (r[11] = A));
  let j = l?.name ?? i,
    M;
  r[12] === j
    ? (M = r[13])
    : ((M = (0, C.jsx)(n, {
        id: `settings.teams.join.confirmAccess`,
        defaultMessage: `You’ll join this team in {workspace} and get access to its activity and shared resources`,
        description: `Team join confirmation explaining the workspace and access granted by joining; workspace is the selected workspace name`,
        values: { workspace: j },
      })),
      (r[12] = j),
      (r[13] = M));
  let N;
  r[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, C.jsx)(n, {
        id: `settings.teams.join.confirm`,
        defaultMessage: `Join`,
        description: `Button confirming that the viewer wants to join the team shown in the preview`,
      })),
      (r[14] = N))
    : (N = r[14]);
  let P = !v && u && l?.id === i ? _ : void 0,
    F,
    I;
  r[15] !== k || r[16] !== w.state || r[17] !== T
    ? ((F = () => void T(k, { replace: !0, state: w.state })),
      (I = () => void T(k, { replace: !0, state: w.state })),
      (r[15] = k),
      (r[16] = w.state),
      (r[17] = T),
      (r[18] = F),
      (r[19] = I))
    : ((F = r[18]), (I = r[19]));
  let L;
  r[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) =>
        e instanceof Error && g(e)
          ? (b(!0),
            o({
              id: `settings.teams.join.unavailable`,
              defaultMessage: `This join link isn't available in your current workspace`,
              description: `Error when a team join link is invalid, inaccessible, or belongs to another workspace; no team details are disclosed`,
            }))
          : o({
              id: `settings.teams.join.failed`,
              defaultMessage: `Couldn't join the team`,
              description: `Error after a temporary failure joining a team using a link`,
            })),
      (r[20] = L))
    : (L = r[20]);
  let R;
  return (
    r[21] !== F || r[22] !== I || r[23] !== A || r[24] !== M || r[25] !== P
      ? ((R = (0, C.jsx)(y, {
          title: A,
          description: M,
          submitLabel: N,
          onSubmit: P,
          onSuccess: F,
          onClose: I,
          getErrorMessage: L,
        })),
        (r[21] = F),
        (r[22] = I),
        (r[23] = A),
        (r[24] = M),
        (r[25] = P),
        (r[26] = R))
      : (R = r[26]),
    R
  );
}
var x, S, C;
function w() {
  return (w = e(() => {
    ((x = s()), r(), (S = u()), a(), i(), f(), v(), _(), (C = l()));
  }))();
}
w();
export { b as TeamJoinConfirmation };
//# sourceMappingURL=team-join-confirmation-b6dfb9f4bff8.js.map
