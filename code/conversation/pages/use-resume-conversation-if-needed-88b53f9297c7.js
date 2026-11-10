import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $bt as n,
  $k as r,
  A3t as i,
  Amn as a,
  B6t as o,
  Bwt as s,
  Cpn as c,
  Dmn as l,
  GGt as u,
  KGt as d,
  LPt as f,
  N3t as p,
  O3t as m,
  Omn as ee,
  Opn as h,
  Qbt as g,
  Spn as _,
  Ujt as te,
  VTt as ne,
  Wjt as v,
  ZTt as re,
  a3t as ie,
  bmn as ae,
  bx as y,
  eA as oe,
  hYt as se,
  hmn as b,
  hz as x,
  i3t as S,
  ix as ce,
  jXt as le,
  kXt as C,
  kmn as w,
  lGt as T,
  lkt as ue,
  m7t as E,
  m9t as D,
  mGt as O,
  mYt as k,
  mz as de,
  nTt as A,
  nx as j,
  o3t as M,
  pGt as N,
  r3t as fe,
  rTt as P,
  rx as F,
  skt as I,
  t0t as L,
  tx as R,
  uGt as pe,
  xmn as z,
  xx as B,
  yx as me,
} from "./app-initial-f094ef01c64d.js";
function V(e, t) {
  let n = (0, W.c)(38),
    r = i(ie),
    a = h(),
    o = p(se, `4226282475`),
    { activeMode: l } = oe(e),
    d = p(s, e),
    [f, m] = (0, G.useState)(d),
    [_, v] = (0, G.useState)(null),
    [ae, y] = (0, G.useState)(null),
    b = (0, G.useRef)(null),
    x = (0, G.useRef)(null),
    S = (0, G.useRef)(!1),
    C = (0, G.useRef)(null),
    w = (0, G.useRef)(null),
    [T, D] = (0, G.useState)(0),
    O;
  n[0] === e
    ? (O = n[1])
    : ((O = function () {
        e != null &&
          (C.current?.close(), (C.current = null), w.current === e && (w.current = null), D(ge));
      }),
      (n[0] = e),
      (n[1] = O));
  let k = O,
    M;
  n[2] !== l || n[3] !== a || n[4] !== k || n[5] !== r || n[6] !== t || n[7] !== o
    ? ((M = async (e) => {
        await (async () => {
          let n;
          try {
            (m(!0), v(null), (b.current = e));
            let i = pe.getTrace(e) ?? void 0,
              a = await ce(r, e, { allowProjectSourceRoots: !0 });
            if (b.current !== e || !r.get(s, e)) return;
            n = r.get(ne, e);
            let c = r.get(ue, e),
              d = c?.hostId === n && c?.threadId === e ? c : void 0;
            (await fe(r, n).resumeConversation(
              {
                conversationId: e,
                threadAccess: t,
                model: null,
                reasoningEffort: null,
                workspaceRoots: a,
                useAppServerPermissionDefault: o,
                collaborationMode: l,
                showThreadGoalResumeConfirmation: !1,
                trace: i,
                ...(d == null ? {} : { knownCatalogEntry: d }),
              },
              { readResumeInputs: u(r, n) },
            ),
              y((t) => (t === e ? null : t)));
          } catch (i) {
            let o = i,
              l = b.current === e;
            if (l && t === `shared` && E(o).toLowerCase().includes(`thread not found`)) {
              ((w.current = e), v(e));
              return;
            }
            if (l && n != null && te(r, { hostId: n, threadId: e }, o)) {
              ((w.current = e),
                (C.current = r.get(le).danger(
                  (0, K.jsx)(c, {
                    id: `pullRequestChat.missingTask`,
                    defaultMessage: `This review task is no longer available. Open Chat on the pull request to start a new review`,
                    description: `Recovery instructions after the server confirms that the task associated with a pull request no longer exists; the next Chat click on the PR starts a new review task`,
                  }),
                  { id: `resume-task-error-${e}` },
                )));
              return;
            }
            let u = B(),
              d = E(o).includes(`session ${e} is archived.`);
            if (
              ((!l || !d) &&
                E(o) !== `FailedPrecondition: history_notes_extension_unsupported` &&
                ee.error(`Failed to resume conversation`, {
                  safe: {},
                  sensitive: { conversationId: e, error: o },
                }),
              !l)
            )
              return;
            if (d) {
              if (u) {
                await de.hotkeyWindowHotkeys?.collapseToHome();
                return;
              }
              return;
            }
            let f = r.get(A, e),
              p = f != null && (await fe(r, f).isConversationArchiving(e));
            if (b.current !== e || f == null || p || !r.get(s, e)) {
              S.current = !1;
              return;
            }
            let m = r.get(re, e) != null,
              h = j(o);
            h && (C.current?.close(), (C.current = null), y(e));
            let g = ve(o);
            if (
              (g || (w.current = e),
              !h &&
                ye({
                  hasShownResumeError: S.current,
                  isSubagentChildThread: m,
                  shouldAutoRetry: g,
                }))
            ) {
              let t = H(o);
              ((C.current = r.get(le).danger(_e(a, o), {
                duration: t ? 0 : void 0,
                id: `resume-task-error-${e}`,
                primaryAction: t
                  ? {
                      label: (0, K.jsx)(c, {
                        id: `localTaskRow.resumeError.retry`,
                        defaultMessage: `Retry`,
                        description: `Button to reconnect to a task after resuming it failed`,
                      }),
                      onClick: k,
                    }
                  : void 0,
              })),
                (S.current = !0));
            }
            g &&
              x.current == null &&
              (x.current = setTimeout(() => {
                ((x.current = null), D(he));
              }, 750));
          }
        })().finally(() => {
          b.current === e && ((b.current = null), m(!1));
        });
      }),
      (n[2] = l),
      (n[3] = a),
      (n[4] = k),
      (n[5] = r),
      (n[6] = t),
      (n[7] = o),
      (n[8] = M))
    : (M = n[8]);
  let N = (0, G.useEffectEvent)(M),
    P,
    F;
  (n[9] !== e || n[10] !== d
    ? ((P = () => {
        d ||
          (C.current?.close(),
          (C.current = null),
          (S.current = !1),
          w.current === e && (w.current = null),
          x.current != null && (clearTimeout(x.current), (x.current = null)));
      }),
      (F = [e, d]),
      (n[9] = e),
      (n[10] = d),
      (n[11] = P),
      (n[12] = F))
    : ((P = n[11]), (F = n[12])),
    (0, G.useEffect)(P, F));
  let I;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        w.current = null;
      }),
      (n[13] = I))
    : (I = n[13]);
  let L;
  (n[14] === e ? (L = n[15]) : ((L = [e]), (n[14] = e), (n[15] = L)), (0, G.useEffect)(I, L));
  let R, V;
  (n[16] !== e || n[17] !== r
    ? ((R = () => {
        if (e != null)
          return r.watch((t) => {
            let { get: n } = t,
              r = n(A, e);
            if (r != null && n(re, e) != null)
              return (
                z.dispatchMessage(`subagent-thread-full-fidelity-changed`, {
                  hostId: r,
                  conversationId: e,
                  enabled: !0,
                }),
                () => {
                  z.dispatchMessage(`subagent-thread-full-fidelity-changed`, {
                    hostId: r,
                    conversationId: e,
                    enabled: !1,
                  });
                }
              );
          });
      }),
      (V = [e, r]),
      (n[16] = e),
      (n[17] = r),
      (n[18] = R),
      (n[19] = V))
    : ((R = n[18]), (V = n[19])),
    (0, G.useEffect)(R, V));
  let U;
  n[20] !== e || n[21] !== d || n[22] !== N || n[23] !== r
    ? ((U = () => {
        let t = () => {
          e == null || !d || e === b.current || e === w.current || N(e);
        };
        if (!B()) {
          t();
          return;
        }
        return r.watch((e) => {
          let { get: n } = e;
          me({ isHotkeyWindow: !0, isWindowActive: n(g) }) && t();
        });
      }),
      (n[20] = e),
      (n[21] = d),
      (n[22] = N),
      (n[23] = r),
      (n[24] = U))
    : (U = n[24]);
  let q;
  (n[25] !== e || n[26] !== d || n[27] !== T || n[28] !== r
    ? ((q = [e, d, T, r]), (n[25] = e), (n[26] = d), (n[27] = T), (n[28] = r), (n[29] = q))
    : (q = n[29]),
    (0, G.useEffect)(U, q));
  let J;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = () => () => {
        ((b.current = null),
          C.current?.close(),
          (C.current = null),
          x.current != null && (clearTimeout(x.current), (x.current = null)));
      }),
      (n[30] = J))
    : (J = n[30]);
  let Y;
  (n[31] === e ? (Y = n[32]) : ((Y = [e]), (n[31] = e), (n[32] = Y)), (0, G.useEffect)(J, Y));
  let X = d && f,
    Z = d && e != null && _ === e,
    Q = d && e != null && ae === e,
    $;
  return (
    n[33] !== k || n[34] !== X || n[35] !== Z || n[36] !== Q
      ? (($ = { isResuming: X, isUnavailable: Z, isWriterConflict: Q, retryResume: k }),
        (n[33] = k),
        (n[34] = X),
        (n[35] = Z),
        (n[36] = Q),
        (n[37] = $))
      : ($ = n[37]),
    $
  );
}
function he(e) {
  return e + 1;
}
function ge(e) {
  return e + 1;
}
function _e(e, t) {
  if (E(t) === `FailedPrecondition: history_notes_extension_unsupported`)
    return e.formatMessage(O.unsupportedVersion);
  let n = U(t);
  return n == null
    ? j(t)
      ? e.formatMessage(
          {
            id: `localTaskRow.resumeLiveWriterError`,
            defaultMessage: `This task is active elsewhere.{br}Close it there, then retry here.`,
            description: `Error shown when a Codex task cannot resume because it is active elsewhere`,
          },
          { br: (0, K.jsx)(`br`, {}) },
        )
      : e.formatMessage(
          {
            id: `localTaskRow.resumeError.v2`,
            defaultMessage: `Failed to resume chat{br}{error}`,
            description: `Error shown when resuming a local Codex task fails`,
          },
          { br: (0, K.jsx)(`br`, {}), error: E(t) },
        )
    : e.formatMessage(
        {
          id: `localTaskRow.resumeConfigError`,
          defaultMessage: `ChatGPT can't load config.toml, so this thread can't resume.{br}Fix {location}: {detail}. After saving the file, reopen the thread.`,
          description: `Error shown when a local Codex task cannot resume because config.toml is invalid`,
        },
        { br: (0, K.jsx)(`br`, {}), location: n.location, detail: n.detail },
      );
}
function ve(e) {
  let t = E(e).toLowerCase();
  return (
    U(e) == null &&
    !j(e) &&
    !t.startsWith(`failedprecondition:`) &&
    !H(e) &&
    !t.includes(`no rollout found for thread id`)
  );
}
function ye({ hasShownResumeError: e, isSubagentChildThread: t, shouldAutoRetry: n }) {
  return !t && (!e || !n);
}
function H(e) {
  return E(e)
    .toLowerCase()
    .includes(`network requirements cannot change while a thread has an active turn`);
}
function U(e) {
  let t = D(e);
  return t == null
    ? null
    : {
        location:
          t.filePath == null
            ? `config.toml`
            : t.line == null || t.column == null
              ? t.filePath
              : `${t.filePath}:${t.line}:${t.column}`,
        detail: t.detail,
      };
}
var W,
  G,
  K,
  q = e(() => {
    ((W = w()),
      L(),
      m(),
      o(),
      (G = t(a(), 1)),
      _(),
      S(),
      P(),
      f(),
      d(),
      F(),
      N(),
      R(),
      n(),
      r(),
      C(),
      y(),
      ae(),
      T(),
      v(),
      x(),
      M(),
      I(),
      k(),
      l(),
      (K = b()));
  });
export { V as n, q as t };
//# sourceMappingURL=use-resume-conversation-if-needed-88b53f9297c7.js.map
