import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as t,
  Cot as n,
  Gdt as r,
  Hpt as i,
  IDt as a,
  Ixt as o,
  Kat as s,
  Lit as ee,
  Pxt as c,
  SPt as l,
  VDt as u,
  c_t as d,
  gPt as f,
  hPt as p,
  hot as te,
  jDt as m,
  l_t as h,
  lot as g,
  qat as _,
  rst as v,
  vzt as y,
  wot as b,
  xMt as x,
  yzt as S,
  zit as ne,
  zxt as C,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as re,
  Cwr as ie,
  Dv as ae,
  Egr as oe,
  Hhr as se,
  IEr as ce,
  Kmr as le,
  O5n as ue,
  OPr as de,
  REr as fe,
  Rgr as pe,
  Shr as w,
  Tgr as T,
  Uhr as me,
  Wmr as E,
  XPr as D,
  Xxr as O,
  Xzt as k,
  YPr as he,
  Zxr as A,
  Zzt as ge,
  _8n as _e,
  bN as j,
  bhr as ve,
  cVt as M,
  cpr as ye,
  gwr as be,
  kPr as xe,
  l5n as Se,
  lVt as Ce,
  lpr as N,
  mpr as we,
  n8n as Te,
  nSn as Ee,
  ppr as De,
  rSn as P,
  ubr as F,
  upr as Oe,
  v8n as I,
  xN as ke,
  zgr as Ae,
} from "./app-initial-5851df3f6cb1.js";
function L(e, c, l, d) {
  let p = (0, Fe.c)(50),
    m = o(n),
    h = o(be),
    g = u(),
    _ = C(xe, `4226282475`),
    { activeMode: v } = ge(e),
    y = C(Te, e),
    b = C(re, e),
    x;
  p[0] !== b || p[1] !== e
    ? ((x = e == null ? null : { hostId: b, threadId: e }), (p[0] = b), (p[1] = e), (p[2] = x))
    : (x = p[2]);
  let S = C(ue, x),
    [ne, ie] = (0, z.useState)(y),
    [ae, oe] = (0, z.useState)(null),
    [se, de] = (0, z.useState)(null),
    [fe, w] = (0, z.useState)(null),
    T = (0, z.useRef)(null),
    E = (0, z.useRef)(null),
    D = (0, z.useRef)(V),
    O = (0, z.useRef)(0),
    k = (0, z.useRef)(!1),
    A = (0, z.useRef)(null),
    j = (0, z.useRef)(null),
    M = (0, z.useRef)(null),
    [N, De] = (0, z.useState)(0),
    P;
  p[3] === e
    ? (P = p[4])
    : ((P = function () {
        e != null &&
          (j.current?.close(),
          (j.current = null),
          (k.current = !1),
          (A.current = null),
          (D.current = V),
          (O.current = 0),
          M.current === e && (M.current = null),
          E.current != null && (clearTimeout(E.current), (E.current = null)),
          De(Me));
      }),
      (p[3] = e),
      (p[4] = P));
  let F = P,
    I;
  p[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = function () {
        E.current ??
          ((E.current = setTimeout(() => {
            ((E.current = null), De(je));
          }, D.current)),
          (D.current = Math.min(D.current * 2, 6e4)));
      }),
      (p[5] = I))
    : (I = p[5]);
  let Ae = I,
    L;
  p[6] !== v ||
  p[7] !== g ||
  p[8] !== l ||
  p[9] !== d ||
  p[10] !== F ||
  p[11] !== h ||
  p[12] !== m ||
  p[13] !== c ||
  p[14] !== _
    ? ((L = async (e) => {
        await (async () => {
          let n, o;
          try {
            (ie(!0), oe(null), de(null), (T.current = e));
            let t = me.isPending(e),
              r = !t && ee.isInitialThread(e),
              i = (t ? me.getTrace(e) : ee.getTrace(e)) ?? void 0,
              a = await we(m, e, { allowProjectSourceRoots: !0 });
            if (T.current !== e || !m.get(Te, e)) return;
            n = m.get(re, e);
            let s = m.get(le, e),
              u = s?.hostId === n && s?.threadId === e ? s : void 0;
            o = l?.onStart();
            let f = await he(m, n).resumeConversation(
              {
                ...d,
                conversationId: e,
                threadAccess: c,
                model: null,
                reasoningEffort: null,
                workspaceRoots: a,
                useAppServerPermissionDefault: _,
                collaborationMode: v,
                showThreadGoalResumeConfirmation: !1,
                trace: i,
                startupResume: r,
                ...(u == null ? {} : { knownCatalogEntry: u }),
              },
              { readResumeInputs: pe(m, n) },
            );
            (o?.(f.status === `ready`), w((t) => (t === e ? null : t)));
          } catch (ee) {
            let u = ee;
            (l?.onSkipped(), o?.(!1));
            let d = T.current === e;
            if (d && c === `shared` && r(u).toLowerCase().includes(`thread not found`)) {
              ((M.current = e), de(e));
              return;
            }
            if (d && n != null && ve(m, { hostId: n, threadId: e }, u)) {
              ((M.current = e),
                (j.current = m
                  .get(te)
                  .danger(
                    (0, B.jsx)(a, {
                      id: `pullRequestChat.missingTask`,
                      defaultMessage: `This review chat is no longer available. Send a message from the pull request to start a new review`,
                      description: `Recovery instructions after the server confirms that the chat associated with a pull request no longer exists; sending a message from the pull request's composer starts a new review chat`,
                    }),
                    {
                      errorAnalytics: { toastId: `pullRequestChat.missingTask` },
                      id: `resume-task-error-${e}`,
                    },
                  )));
              return;
            }
            let f = Oe(),
              p = r(u).includes(`session ${e} is archived.`);
            if (
              ((!d || !p) &&
                r(u) !== `FailedPrecondition: history_notes_extension_unsupported` &&
                t.error(`Failed to resume conversation`, {
                  safe: {},
                  sensitive: { conversationId: e, error: u },
                }),
              !d)
            )
              return;
            if (((O.current += 1), p)) {
              if (f) {
                await s.hotkeyWindowHotkeys?.collapseToHome();
                return;
              }
              return;
            }
            let _ = m.get(_e, e) ?? (c === `shared` ? n : null),
              v = _ != null && (await he(m, _).isConversationArchiving(e)),
              y = O.current < Le && Pe(u);
            if (T.current !== e || _ == null || v || (y && !m.get(Te, e))) {
              k.current = !1;
              return;
            }
            let b = m.get(Se, e) != null,
              x = ke(u);
            (x && (j.current?.close(), (j.current = null), w(e)), y || ((M.current = e), oe(e)));
            let S = Date.now();
            if (((A.current ??= S), !x && !b && (!y || (!k.current && S - A.current >= Ie)))) {
              let t = i(u),
                n =
                  t?.filePath == null
                    ? void 0
                    : Ce.bind(null, {
                        scope: h,
                        hostId: _,
                        hostConfig: ce(m, _),
                        path: t.filePath,
                        cwd: null,
                        line: t.line ?? void 0,
                        column: t.column ?? void 0,
                        openInSidePanel: !0,
                      });
              ((j.current = m
                .get(te)
                .danger(Ne(g, u, n), {
                  errorAnalytics: { toastId: `useResumeConversationIfNeeded.resumeConversationEvent` },
                  duration: y ? void 0 : 0,
                  id: `resume-task-error-${e}`,
                  primaryAction:
                    t == null && !y
                      ? {
                          label: (0, B.jsx)(a, {
                            id: `localTaskRow.resumeError.retry`,
                            defaultMessage: `Retry`,
                            description: `Button to reconnect to a chat after resuming it failed`,
                          }),
                          onClick: F,
                        }
                      : void 0,
                })),
                (k.current = !0));
            }
            y && Ae();
          }
        })().finally(() => {
          T.current === e && ((T.current = null), E.current ?? ie(!1));
        });
      }),
      (p[6] = v),
      (p[7] = g),
      (p[8] = l),
      (p[9] = d),
      (p[10] = F),
      (p[11] = h),
      (p[12] = m),
      (p[13] = c),
      (p[14] = _),
      (p[15] = L))
    : (L = p[15]);
  let R = (0, z.useEffectEvent)(L),
    H,
    U;
  (p[16] !== e || p[17] !== y || p[18] !== l || p[19] !== S
    ? ((H = () => {
        y ||
          (l?.onSkipped(),
          S === `resumed` &&
            (j.current?.close(),
            (j.current = null),
            (k.current = !1),
            (A.current = null),
            (D.current = V),
            (O.current = 0),
            M.current === e && (M.current = null),
            E.current != null && (clearTimeout(E.current), (E.current = null))));
      }),
      (U = [e, y, S, l]),
      (p[16] = e),
      (p[17] = y),
      (p[18] = l),
      (p[19] = S),
      (p[20] = H),
      (p[21] = U))
    : ((H = p[20]), (U = p[21])),
    (0, z.useEffect)(H, U));
  let W;
  p[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = () => {
        ((M.current = null), (O.current = 0));
      }),
      (p[22] = W))
    : (W = p[22]);
  let G;
  (p[23] === e ? (G = p[24]) : ((G = [e]), (p[23] = e), (p[24] = G)), (0, z.useEffect)(W, G));
  let K, q;
  (p[25] !== e || p[26] !== m
    ? ((K = () => {
        if (e != null)
          return m.watch((t) => {
            let { get: n } = t,
              r = n(_e, e);
            if (r != null && n(Se, e) != null)
              return (
                f.dispatchMessage(`subagent-thread-full-fidelity-changed`, {
                  hostId: r,
                  conversationId: e,
                  enabled: !0,
                }),
                () => {
                  f.dispatchMessage(`subagent-thread-full-fidelity-changed`, {
                    hostId: r,
                    conversationId: e,
                    enabled: !1,
                  });
                }
              );
          });
      }),
      (q = [e, m]),
      (p[25] = e),
      (p[26] = m),
      (p[27] = K),
      (p[28] = q))
    : ((K = p[27]), (q = p[28])),
    (0, z.useEffect)(K, q));
  let J;
  p[29] !== e || p[30] !== y || p[31] !== R || p[32] !== m
    ? ((J = () => {
        let t = () => {
          e != null && y && E.current == null && e !== T.current && e !== M.current && R(e);
        };
        if (!Oe()) {
          t();
          return;
        }
        return m.watch((e) => {
          let { get: n } = e;
          ye({ isHotkeyWindow: !0, isWindowActive: n(Ee) }) && t();
        });
      }),
      (p[29] = e),
      (p[30] = y),
      (p[31] = R),
      (p[32] = m),
      (p[33] = J))
    : (J = p[33]);
  let Y;
  (p[34] !== e || p[35] !== y || p[36] !== N || p[37] !== m
    ? ((Y = [e, y, N, m]), (p[34] = e), (p[35] = y), (p[36] = N), (p[37] = m), (p[38] = Y))
    : (Y = p[38]),
    (0, z.useEffect)(J, Y));
  let X;
  p[39] === l
    ? (X = p[40])
    : ((X = () => () => {
        (l?.onDispose(),
          (T.current = null),
          j.current?.close(),
          (j.current = null),
          (k.current = !1),
          (A.current = null),
          (D.current = V),
          E.current != null && (clearTimeout(E.current), (E.current = null)));
      }),
      (p[39] = l),
      (p[40] = X));
  let Z;
  (p[41] !== e || p[42] !== l ? ((Z = [e, l]), (p[41] = e), (p[42] = l), (p[43] = Z)) : (Z = p[43]),
    (0, z.useEffect)(X, Z));
  let Re = y && ne,
    ze = y && e != null && ae === e,
    Be = y && e != null && se === e,
    Q = y && e != null && fe === e,
    $;
  return (
    p[44] !== F || p[45] !== Re || p[46] !== ze || p[47] !== Be || p[48] !== Q
      ? (($ = {
          isResuming: Re,
          hasResumeFailed: ze,
          isUnavailable: Be,
          isWriterConflict: Q,
          retryResume: F,
        }),
        (p[44] = F),
        (p[45] = Re),
        (p[46] = ze),
        (p[47] = Be),
        (p[48] = Q),
        (p[49] = $))
      : ($ = p[49]),
    $
  );
}
function je(e) {
  return e + 1;
}
function Me(e) {
  return e + 1;
}
function Ne(e, t, n) {
  if (r(t) === `FailedPrecondition: history_notes_extension_unsupported`)
    return e.formatMessage(oe.unsupportedVersion);
  let i = R(t);
  return i == null
    ? ke(t)
      ? e.formatMessage(
          {
            id: `localTaskRow.resumeLiveWriterError`,
            defaultMessage: `This chat is active elsewhere.{br}Close it there, then retry here.`,
            description: `Error shown when a Codex chat cannot resume because it is active elsewhere`,
          },
          { br: (0, B.jsx)(`br`, {}) },
        )
      : e.formatMessage(
          {
            id: `localTaskRow.resumeError.v2`,
            defaultMessage: `Failed to resume chat{br}{error}`,
            description: `Error shown when resuming a local Codex chat fails`,
          },
          { br: (0, B.jsx)(`br`, {}), error: r(t) },
        )
    : (0, B.jsx)(a, {
        id: `localTaskRow.resumeConfigError.link`,
        tagName: `span`,
        defaultMessage: `ChatGPT can't load config.toml, so this chat can't resume.{br}Fix <file>{location}</file>: {detail}. After saving the file, reopen the chat.`,
        description: `Error shown when a local Codex chat cannot resume because config.toml is invalid. The file tag links to the configuration file at the reported location.`,
        values: {
          br: (0, B.jsx)(`br`, {}),
          location: i.location,
          detail: i.detail,
          file: (e) =>
            n == null
              ? e
              : (0, B.jsx)(`a`, {
                  href: i.filePath,
                  className: `cursor-interaction underline decoration-current decoration-[0.5px]`,
                  onClick: (e) => {
                    (e.preventDefault(), n());
                  },
                  onAuxClick: (e) => {
                    e.button === 1 && (e.preventDefault(), n());
                  },
                  children: e,
                }),
        },
      });
}
function Pe(e) {
  let t = r(e).toLowerCase();
  return (
    R(e) == null &&
    !ke(e) &&
    !t.startsWith(`failedprecondition:`) &&
    t !== `cloud aeon access is not enabled` &&
    !t.includes(` is failed and cannot be resumed`) &&
    !A(e) &&
    !(e instanceof Error && h(e)) &&
    !t.includes(`no rollout found for thread id`) &&
    !(t.startsWith(`failed to resolve rollout path `) && t.endsWith(`: file does not exist`))
  );
}
function R(e) {
  let t = i(e);
  if (t == null) return null;
  let n =
    t.filePath == null
      ? `config.toml`
      : t.line == null || t.column == null
        ? t.filePath
        : `${t.filePath}:${t.line}:${t.column}`;
  return { filePath: t.filePath ?? void 0, location: n, detail: t.detail };
}
var Fe, z, B, Ie, V, Le;
function H() {
  return (H = e(() => {
    ((Fe = y()),
      F(),
      c(),
      v(),
      O(),
      d(),
      (z = S()),
      m(),
      D(),
      I(),
      ae(),
      Ae(),
      De(),
      T(),
      j(),
      P(),
      k(),
      g(),
      M(),
      N(),
      p(),
      ne(),
      se(),
      w(),
      _(),
      b(),
      ie(),
      fe(),
      E(),
      de(),
      l(),
      (B = x()),
      (Ie = 1e4),
      (V = 750),
      (Le = 5));
  }))();
}
export { L as n, H as t };
//# sourceMappingURL=use-resume-conversation-if-needed-da3c116cab55.js.map
