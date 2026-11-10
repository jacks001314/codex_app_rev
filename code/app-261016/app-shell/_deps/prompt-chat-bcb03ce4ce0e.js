import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  $st as n,
  ACt as r,
  Jbt as i,
  Qst as a,
  SCt as o,
  Yst as s,
  ZSt as c,
  kCt as l,
  sct as u,
  tht as d,
  yCt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Vt as p,
  ADn as m,
  Air as h,
  BHt as g,
  BJt as _,
  DHt as v,
  EHt as y,
  ESr as b,
  F4n as x,
  FIn as S,
  Fnt as C,
  GIn as w,
  Gnt as ee,
  Gwn as te,
  HHt as ne,
  IHt as T,
  IOr as re,
  Iwn as E,
  JHt as D,
  KBr as O,
  M4n as k,
  MOr as ie,
  Mdn as A,
  Mir as j,
  NHt as M,
  NSr as ae,
  PDn as oe,
  QEn as se,
  QOr as ce,
  RHt as N,
  Rnt as le,
  VPn as P,
  Vwn as ue,
  WHt as F,
  Wwn as de,
  XHt as I,
  Xnt as L,
  Xsn as fe,
  Ynt as pe,
  Ysn as R,
  ZEn as me,
  ZHt as z,
  ZVt as B,
  _kr as he,
  aln as V,
  bIn as H,
  bOn as U,
  cHt as ge,
  gur as W,
  hV as _e,
  hdn as ve,
  jIn as ye,
  jdn as be,
  kwn as G,
  lBr as xe,
  lHt as Se,
  lkr as Ce,
  m0n as we,
  mJt as Te,
  mSr as Ee,
  oln as De,
  uBr as Oe,
  vJt as ke,
  x0n as Ae,
  xV as je,
  yOn as Me,
  yV as Ne,
  zJt as Pe,
  zOr as Fe,
} from "./app-initial-ad16eaadf81f.js";
import { n as Ie, r as Le, t as K } from "./error-21e6fb16598c.js";
import { i as Re, n as ze } from "./actions-e51654d88035.js";
function Be(e, t, { getConversationId: n, isFinished: r }) {
  if (e.get(Oe, `2720466079`)) return () => {};
  let i = { accountId: e.get(W), pageId: e.get(A, t), getConversationId: n },
    a = e.get(be, t),
    o = e.get(h),
    s = () => {
      e.get(q) === i && e.set(q, null);
    };
  return (
    e.set(Ve, i.pageId, !1),
    e.set(q, i),
    e
      .when((e) => {
        let { get: t } = e,
          n = t(h);
        return (
          t(q) !== i ||
          t(W) !== i.accountId ||
          (n !== o && n.pathname !== `/space/${i.pageId}` && n.pathname !== `/space/${a}`) ||
          r(e)
        );
      })
      .then(s),
    s
  );
}
var q, Ve;
function He() {
  return (He = e(() => {
    (c(), j(), n(), xe(), ve(), (q = l(a, null)), (Ve = o(a, (e) => !1)));
  }))();
}
function Ue(e, t) {
  let n = { scope: e, context: t };
  return (
    e.set(Q, n),
    e.set(g, t),
    () => {
      (e.get(Q) === n && e.set(Q, null), e.get(g) === t && e.set(g, null));
    }
  );
}
function We(e, t) {
  let n = e.get(h);
  (e.set(X, { request: t, threadId: null }),
    e
      .when(({ get: e }) => {
        let r = e(h).pathname;
        return (
          e(X)?.request !== t ||
          e(W) !== t.accountId ||
          (e(h) !== n && r !== `/space/${t.pageId}` && r !== `/space/${e(A, t.pageId)}`)
        );
      })
      .then(() => {
        e.get(X)?.request === t && e.set(X, null);
      }));
}
function Ge(e, t, n) {
  let r = e.get(X)?.request;
  r != null &&
    e.get(A, r.pageId) === t &&
    e
      .when((e) => e.get(X)?.request !== r || n(e))
      .then(() => {
        let t = e.get(X);
        t?.request === r && t.threadId == null && e.set(X, null);
      });
}
function Ke(e, t, n, r) {
  let i = { kind: `chatgpt`, conversationId: t, submit: n, sourceActions: r };
  return (
    e.set($, i),
    () => {
      e.get($) === i && e.set($, null);
    }
  );
}
function qe(e, t) {
  let n = t == null ? null : { ...t };
  return (
    e.set(Z, n),
    () => {
      e.get(Z) === n && e.set(Z, null);
    }
  );
}
function Je(e, t, n, r = () => null, i = null, a = () => !1, o) {
  let s = e.get(U);
  if (s != null && s.getSession(e)?.clientThreadId !== t.clientThreadId) return () => {};
  let c = {
    scope: e,
    kind: `codex`,
    session: t,
    submit: n,
    getModelSelection: r,
    hasUnsentContent: a,
    project: i,
    sourceActions: o,
  };
  return (
    e.set($, c),
    () => {
      if (e.get($) === c) {
        let n = r();
        e.set($, {
          scope: e,
          kind: `codex`,
          session: t,
          submit: null,
          project: i,
          getModelSelection: () => n,
          hasUnsentContent: a,
        });
      }
    }
  );
}
function Ye(e, t) {
  let n = e.get($),
    r = e.get(g);
  if (n?.kind !== `codex` || r?.kind !== `codex` || r.accountId !== e.get(W)) return null;
  let i = n.scope.get(U),
    a = i == null ? e.get(M) : i.getSession(n.scope);
  return n.session.pageId === t &&
    r.pageId === t &&
    n.session.accountId === r.accountId &&
    n.session.sourceId === r.sourceId &&
    n.session.clientThreadId === a?.clientThreadId
    ? n.getModelSelection()
    : null;
}
async function Xe(e, { accountId: n, pageId: r }, i) {
  if (!e.get(p)) return;
  let a = AbortSignal.any([i, AbortSignal.timeout(3e4)]),
    o = (e) => {
      let t = e.get(Q),
        i = e.get(g),
        a = i?.kind === `codex` ? i : i?.page;
      return t?.context === i && a?.accountId === n && a.pageId === e.get(A, r) ? t.scope : null;
    },
    s = async (n) => {
      let r = d(),
        i = e.watch((e) => {
          let t = o(e);
          return t?.watch((e) => {
            n(e) && r.resolve(t);
          });
        });
      try {
        return await t(r.promise, a);
      } finally {
        i();
      }
    },
    c = await s((e) => {
      if (e.get(g)?.kind === `chatgpt`) return !0;
      let t = e.get(U),
        n = e.get(Z);
      return !e.get(Re) && t != null && n != null && n.clientThreadId === t.getSession(e)?.clientThreadId;
    });
  if ((a.throwIfAborted(), c.get(g)?.kind === `chatgpt`)) return;
  let l = c.get(U);
  if (l == null) throw new K(`changed`);
  let u = await t(
    l.prepareFreshChat(c, () => a.aborted),
    a,
  );
  if (u == null) throw new K(`changed`);
  let f = await s((e) => e.value.clientThreadId === u.clientThreadId);
  (a.throwIfAborted(), f.set(pe, `expanded`), f.get(le) || ee(f));
}
async function Ze(e, t, n) {
  let r,
    i,
    a = !1,
    o = !1,
    s = (e) => ((a = n(e) || a), a),
    c = (e) => {
      let n = e.get(Q),
        r = e.get(g);
      if (n == null || n.context !== r) return null;
      let i = r?.kind === `codex` ? r : r?.page;
      if (i?.pageId !== t.pageId || i.accountId !== t.accountId) return null;
      if (r?.kind === `codex`) {
        let r = n.scope.get(U),
          a = r == null ? e.get(M) : r.getSession(n.scope),
          o = e.get(Z);
        if (
          a?.accountId !== t.accountId ||
          (r == null
            ? e.get(M)?.sourceId !== i.sourceId
            : o?.pageId !== t.pageId || o.accountId !== t.accountId || o.clientThreadId !== a.clientThreadId)
        )
          return null;
      } else if (t.project != null || e.get(F) == null) return null;
      return { scope: n.scope, sourceId: i.sourceId };
    };
  try {
    await new Promise((n, a) => {
      ((r = setTimeout(() => a(new K(`unavailable`)), 3e4)),
        (i = e.watch((e) => {
          let r = e.get(M);
          (!o &&
            !e.get(p) &&
            !s(e) &&
            r?.pageId === t.pageId &&
            r.accountId === t.accountId &&
            ((o = !0), N(e)),
            (s(e) || c(e) != null) && n());
        })));
    });
    let n = c(e);
    if (s(e) || n == null) throw new K(`unavailable`);
    await Qe(n.scope, {
      pageId: t.pageId,
      sourceId: n.sourceId,
      prompt: t.prompt,
      setupInstructions: t.setupInstructions,
      project: t.project,
      turnTrigger: t.turnTrigger,
      keepPageOpen: t.keepPageOpen,
      prefillOnly: t.prefillOnly,
      prefillOnComposerMount: t.prefillOnComposerMount,
      isCancelled: s,
      waitForPageReady: !0,
      getPrompt: t.getPrompt,
      showTemplateThinking: t.showTemplateThinking,
      onSubmitStart: t.onSubmitStart,
      onSubmitted: t.onSubmitted,
    });
  } finally {
    (clearTimeout(r), i?.());
  }
}
async function Qe(
  e,
  {
    pageId: t,
    sourceId: n,
    prompt: a,
    project: o,
    turnTrigger: c,
    isCancelled: l,
    waitForPageReady: u = !1,
    getPrompt: d,
    showTemplateThinking: f,
    onSubmitStart: p,
    onSubmitted: m,
    keepPageOpen: _ = !1,
    prefillOnly: y = !1,
    prefillOnComposerMount: x = !1,
    setupInstructions: S,
  },
) {
  let C = e.get(g);
  if (o == null && C?.kind === `chatgpt` && C.page != null)
    return $e(e, {
      pageId: t,
      sourceId: n,
      prompt: a,
      project: o,
      isCancelled: l,
      waitForPageReady: u,
      getPrompt: d,
      showTemplateThinking: f,
      onSubmitStart: p,
      onSubmitted: m,
      setupInstructions: S,
      prefillOnly: y,
      prefillOnComposerMount: x,
      expandConversation: _ && e.get(Oe, `2648108507`),
    });
  let w = e.get(M),
    T = e.get(U),
    E = T?.getSession(e),
    D = e.get($),
    O = D?.kind === `codex` && D.session.clientThreadId === w?.clientThreadId && D.hasUnsentContent(),
    k = d != null && T == null && w?.hasConversation === !1 && w.conversationId == null && !O;
  if (
    e.get(Y) ||
    l?.(e) ||
    e.get(Ne) ||
    a.trim().length === 0 ||
    C?.kind !== `codex` ||
    (!u && C.disableSubmit) ||
    C.pageId !== t ||
    C.sourceId !== n ||
    (T == null
      ? w?.sourceId !== n || w.pageId !== t || w.accountId !== C.accountId
      : E?.accountId !== C.accountId)
  )
    throw new K(`unavailable`);
  e.set(Y, !0);
  let j,
    P,
    F = !1,
    I;
  try {
    ((T != null || o !== void 0 || u) &&
      (j = setTimeout(() => {
        ((F = !0), e.set(Y, !1));
      }, 3e4)),
      T == null && !y && !k && je(e, n),
      T ?? N(e));
    let C = T == null ? e.get(M) : E;
    if (
      (T != null &&
        !y &&
        (C = await T.prepareFreshChat(
          e,
          (t) =>
            F ||
            l?.(t) === !0 ||
            !t.get(Y) ||
            t.get(h).pathname !== e.value.pathname ||
            (t.get(h).search ?? ``) !== (e.value.search ?? ``),
        )),
      F || C == null)
    )
      throw new K(`unavailable`);
    let w = C;
    if (T != null) {
      let n = r(e, ce, w.clientThreadId),
        i = n == null ? null : r(n, ie, re(e.value));
      if (i == null) throw new K(`unavailable`);
      P = i.watch(({ get: e, set: n }) => {
        let r = e(oe.activeTab$),
          i = r?.tabType.kind === `space-page` ? Se.safeParse(r.props) : null;
        (!e(se) ||
          i?.success !== !0 ||
          i.data.accountId !== w.accountId ||
          e(A, i.data.pageId) !== e(A, t)) &&
          n(Y, !1);
      });
    }
    let D = (r) => {
      if (!r.get(Y) || F || l?.(r)) return !1;
      let { get: i } = r;
      if (T != null) {
        let t = T.getSession(r);
        return (
          i(h).pathname === e.value.pathname &&
          (i(h).search ?? ``) === (e.value.search ?? ``) &&
          t != null &&
          t.accountKey === E?.accountKey &&
          t.accountId === w.accountId &&
          t.clientThreadId === w.clientThreadId
        );
      }
      let a = i(g);
      return (
        ((u && a == null) ||
          (a?.kind === `codex` &&
            (u || !a.disableSubmit) &&
            a.sourceId === n &&
            a.pageId === t &&
            a.accountId === w.accountId)) &&
        i(M)?.clientThreadId === w.clientThreadId &&
        i(ne)
      );
    };
    if (y && x && o === void 0 && d == null) {
      let r, i;
      try {
        await new Promise((o) => {
          let s = !1,
            c = !1,
            l = (e) => {
              if (!(s || c)) {
                c = !0;
                try {
                  if (!D(e)) {
                    ((s = !0), o());
                    return;
                  }
                  let r = e.get(T == null ? M : Z);
                  if (
                    r?.clientThreadId !== w.clientThreadId ||
                    r.pageId !== t ||
                    r.accountId !== w.accountId ||
                    r.sourceId !== n ||
                    ue(w.clientThreadId, a) === `unavailable`
                  )
                    return;
                  ((s = !0), T ?? v(e, t, null), G(w.clientThreadId), o());
                } finally {
                  c = !1;
                }
              }
            };
          ((r = e.watch(l)), (i = de(() => l(e))));
        });
      } finally {
        (r?.(), i?.());
      }
      if (F) throw new K(`unavailable`);
      return;
    }
    let O = (e) =>
        o === void 0 || (o == null ? e == null : e?.type === o.type && e.projectId === o.projectId),
      L = () => {
        let t = e.get($);
        return t?.kind === `codex` && t.session.clientThreadId === w.clientThreadId && t.hasUnsentContent();
      },
      R = async (n) => {
        if (n && L()) return !1;
        if (o !== void 0) {
          if (
            (await e.when((e) => {
              let n = e.get($);
              return (
                !D(e) ||
                (n?.kind === `codex` &&
                  n.session.clientThreadId === w.clientThreadId &&
                  n.session.pageId === t &&
                  n.session.accountId === w.accountId &&
                  n.submit != null)
              );
            }),
            n && L())
          )
            return !1;
          let r = e.get($);
          if (
            !D(e) ||
            r?.kind !== `codex` ||
            r.session.clientThreadId !== w.clientThreadId ||
            r.session.accountId !== w.accountId ||
            r.session.pageId !== t ||
            r.submit == null
          )
            throw new K(F ? `unavailable` : `changed`);
          r.scope.set(fe, w.clientThreadId, o);
        }
        return (
          await e.when((e) => {
            let n = e.get($),
              r = e.get(T == null ? M : Z);
            return (
              !D(e) ||
              (e.get(g)?.disableSubmit === !1 &&
                n?.kind === `codex` &&
                n.session.clientThreadId === w.clientThreadId &&
                n.session.pageId === t &&
                n.session.accountId === w.accountId &&
                n.submit != null &&
                r?.clientThreadId === w.clientThreadId &&
                r.pageId === t &&
                r.accountId === w.accountId &&
                r.sourceId === n.session.sourceId &&
                O(n.project))
            );
          }),
          !n || !L()
        );
      },
      me = () => {
        if (!D(e)) throw new K(F ? `unavailable` : `changed`);
        (clearTimeout(j),
          (j = setTimeout(() => {
            ((F = !0), e.set(Y, !1));
          }, 3e4)),
          je(e, n),
          N(e));
        let t = e.get(M);
        if (t == null) throw new K(`unavailable`);
        w = t;
      },
      z = !y && k;
    if (
      ((await R(z)) || (me(), (z = !1), await R(!1)),
      clearTimeout(j),
      F ||
        (d != null && (await e.when((e) => !D(e) || d(e) != null)),
        z && L() && (me(), await R(!1), clearTimeout(j), F)))
    )
      throw new K(`unavailable`);
    let B = e.get($),
      V = e.get(T == null ? M : Z);
    if (
      !D(e) ||
      e.get(g)?.disableSubmit !== !1 ||
      B?.kind !== `codex` ||
      B.session.clientThreadId !== w.clientThreadId ||
      B.submit == null ||
      !O(B.project) ||
      V?.clientThreadId !== w.clientThreadId ||
      V.pageId !== t ||
      V.accountId !== w.accountId ||
      B.session.pageId !== t ||
      B.session.accountId !== V.accountId ||
      B.session.sourceId !== V.sourceId
    ) {
      if (o !== void 0) throw new K(`changed`);
      return;
    }
    (P?.(), (P = void 0));
    let H = d == null ? a : d(e);
    if (H == null) throw new K(`changed`);
    if ((T != null && _ && (B.scope.set(pe, `expanded`), B.scope.get(le) || ee(B.scope)), y)) {
      if (!B.hasUnsentContent() && !te(w.clientThreadId, (e, t) => (t ? e : H))) throw new K(`unavailable`);
      (T ?? v(B.scope, t, null), G(w.clientThreadId));
      return;
    }
    let U = !1,
      ge = !1,
      W = ({ get: e }) => (i(w.clientThreadId) ? e(he, w.clientThreadId) : w.conversationId),
      _e = (e) => {
        let { get: t } = e,
          n = W(e),
          r = t(b, n == null ? null : { hostId: s, threadId: n })?.[0],
          i = t(ae, r ?? null);
        return i != null && i !== `inProgress`;
      };
    (Ge(e, t, _e), f && (I = Be(e, t, { getConversationId: W, isFinished: _e })), p?.());
    let ve = B.submit({
      onSubmitted: () => {
        ((U = !0), m?.());
      },
      onNotSent: () => {
        ge = !0;
      },
      firstTurnReasoningEffort: `low`,
      focusComposerAfterSubmit: !0,
      literalPrompt: !0,
      persistedPromptRawOverride: H,
      promptRawOverride: H,
      additionalContextOverride:
        S == null ? void 0 : { codex_apps_page_setup: { kind: `application`, value: S } },
      skipGoalSubmit: !0,
      turnTrigger: c ?? `page_prompt`,
    });
    (T ?? v(B.scope, t, null), await ve, U || I?.());
    let ye = e.get(X);
    if ((!U && ye != null && e.get(A, ye.request.pageId) === t && e.set(X, null), d != null && !U))
      throw ge ? new K(`not-sent`) : new Ie();
  } catch (e) {
    throw (I?.(), e);
  } finally {
    (clearTimeout(j), P?.(), e.set(Y, !1));
  }
}
async function $e(
  e,
  {
    pageId: t,
    sourceId: n,
    prompt: r,
    isCancelled: i,
    waitForPageReady: a,
    getPrompt: o,
    showTemplateThinking: s,
    onSubmitStart: c,
    onSubmitted: l,
    setupInstructions: u,
    prefillOnly: d,
    prefillOnComposerMount: f,
    expandConversation: p,
  },
) {
  let m = e.get(g),
    _ = e.get(h);
  if (
    e.get(Y) ||
    i?.(e) ||
    e.get(Ne) ||
    r.trim().length === 0 ||
    m?.kind !== `chatgpt` ||
    (!a && m.disableSubmit) ||
    m.page?.pageId !== t ||
    m.page.sourceId !== n
  )
    throw new K(`unavailable`);
  if (!d && J(e)) throw new K(`changed`);
  let v = e.get(F),
    y = o != null && v?.hasConversation === !1 && v.projectId == null,
    b = null,
    x;
  e.set(Y, !0);
  let S = !1,
    C,
    w = setTimeout(() => {
      ((S = !0), e.set(Y, !1));
    }, 3e4);
  try {
    let ee = JSON.stringify([m.page.accountId, t, n]),
      T = () => {
        let t = e.get(F);
        p && !d && t != null && e.set(z, t.conversationId, { owner: ee, presentation: `expanded` });
      },
      re = () => {
        (m.onNewChat?.(), D(e, { preservePreviousSession: b != null, projectId: null }), T());
      };
    if (((d ? v == null : !y) ? re() : (N(e), T()), (x = e.get(F)?.conversationId), x == null))
      throw new K(`unavailable`);
    e.set(z, x, (e) =>
      e?.presentation === `minimized` ? { ...e, presentation: e.restorePresentation ?? `compact` } : e,
    );
    let E = (e) => {
      let { get: r } = e,
        o = r(g),
        s =
          r(h).pathname === _.pathname ||
          (_.pathname?.startsWith(`/space/local-page-`) === !0 &&
            r(A, _.pathname.slice(7)) === t &&
            r(h).pathname === `/space/${t}`);
      return (
        !S &&
        !i?.(e) &&
        r(Y) &&
        s &&
        (r(h).search ?? ``) === (_.search ?? ``) &&
        (o == null ||
          (o.kind === `chatgpt` &&
            (a || !o.disableSubmit) &&
            o.page?.accountId === m.page?.accountId &&
            o.page?.pageId === t &&
            o.page.sourceId === n)) &&
        r(F)?.conversationId === x &&
        r(ne) &&
        (d || y || !J(e))
      );
    };
    if (d && f && o == null) {
      let t, n;
      try {
        await new Promise((i) => {
          let a = !1,
            o = !1,
            s = (e) => {
              if (!(a || o)) {
                o = !0;
                try {
                  if (!E(e)) {
                    ((a = !0), i());
                    return;
                  }
                  let t = `chatgpt:${x}`;
                  if (ue(t, r) === `unavailable`) return;
                  ((a = !0), G(t), i());
                } finally {
                  o = !1;
                }
              }
            };
          ((t = e.watch(s)), (n = de(() => s(e))));
        });
      } finally {
        (t?.(), n?.());
      }
      if (S) throw new K(`unavailable`);
      return;
    }
    let O = e.get($);
    for (;;) {
      if (
        (await e.when((e) => {
          let t = e.get($);
          return !E(e) || (e.get(g)?.disableSubmit === !1 && t?.kind === `chatgpt` && t.conversationId === x);
        }),
        S)
      )
        throw new K(`unavailable`);
      if (!E(e)) {
        if (o != null) throw new K(`changed`);
        return;
      }
      if (((O = e.get($)), e.get(g)?.disableSubmit === !1 && O?.kind === `chatgpt` && O.conversationId === x))
        break;
    }
    if (
      (clearTimeout(w), o != null && (await e.when((e) => !E(e) || o(e) != null)), !d && y && E(e) && J(e))
    ) {
      if (
        ((b = e.get(F)),
        (w = setTimeout(() => {
          ((S = !0), e.set(Y, !1));
        }, 3e4)),
        re(),
        (x = e.get(F)?.conversationId),
        x == null)
      )
        throw new K(`unavailable`);
      await e.when((e) => {
        let t = e.get($);
        return !E(e) || (t?.kind === `chatgpt` && t.conversationId === x);
      });
    }
    if (
      ((O = e.get($)),
      !E(e) ||
        (!d && J(e)) ||
        e.get(g)?.disableSubmit !== !1 ||
        O?.kind !== `chatgpt` ||
        O.conversationId !== x)
    ) {
      if (o != null) throw new K(`changed`);
      return;
    }
    let k = o == null ? r : o(e);
    if (k == null) throw new K(`changed`);
    if (d) {
      let t = `chatgpt:${x}`;
      if (!J(e) && !te(t, (e, t) => (t ? e : k))) throw new K(`unavailable`);
      G(t);
      return;
    }
    let ie = !1,
      j = ({ get: e }) => {
        let t = Ae(e(we, x));
        return ((ie ||= t), ie && !t);
      };
    (Ge(e, t, j), s && (C = Be(e, t, { getConversationId: () => null, isFinished: j })), c?.());
    let M = !1;
    if (
      !(await O.submit(
        k,
        () => E(e) && !J(e) && e.get(g)?.disableSubmit === !1,
        void 0,
        u,
        o == null
          ? void 0
          : () => {
              M = !0;
            },
      ))
    )
      throw new K(o != null && !M ? `not-sent` : `unavailable`);
    l?.();
  } catch (e) {
    throw (C?.(), e);
  } finally {
    (clearTimeout(w), e.set(Y, !1), b != null && e.get(F)?.conversationId === x && e.set(F, b));
  }
}
function J(e) {
  let t = e.get(F)?.conversationId;
  return (
    e.get(_) != null ||
    (t != null &&
      (e.get(ye, t).length > 0 ||
        e.get(H, t).length > 0 ||
        e.get(S, t).length > 0 ||
        e.get(V, t).length > 0 ||
        e.get(Te, t).length > 0))
  );
}
function et(e, t, n) {
  let r = e.get(rt, t);
  return r != null && ue(r, n) !== `unavailable`;
}
var Y, tt, X, Z, Q, $, nt, rt, it, at;
function ot() {
  return (ot = e(() => {
    (c(),
      u(),
      j(),
      Ee(),
      m(),
      L(),
      w(),
      P(),
      ke(),
      I(),
      T(),
      k(),
      De(),
      E(),
      Pe(),
      y(),
      _e(),
      Le(),
      ge(),
      ve(),
      n(),
      R(),
      Fe(),
      Ce(),
      O(),
      xe(),
      C(),
      Me(),
      me(),
      He(),
      ze(),
      B(),
      (Y = l(a, !1)),
      (tt = l(a, null)),
      (X = l(a, null)),
      (Z = l(a, null)),
      (Q = l(a, null)),
      ($ = l(a, null)),
      (nt = f(a, (e, { get: t }) => {
        let n = t($),
          r = t(W),
          i = t(A, e);
        if (n?.kind === `codex`) return n.session.accountId === r && n.session.pageId === i ? n : null;
        let a = t(g);
        return n?.kind === `chatgpt` &&
          n.conversationId === t(F)?.conversationId &&
          a?.kind === `chatgpt` &&
          a.page?.accountId === r &&
          a.page?.pageId === i
          ? n
          : null;
      })),
      (rt = f(a, (e, { get: t }) => {
        let n = t(nt, e);
        return n == null
          ? null
          : n.kind === `codex`
            ? n.session.clientThreadId
            : `chatgpt:` + n.conversationId;
      })),
      (it = f(a, (e, { get: t }) => {
        let n = t(rt, e);
        return n != null && (t(x)[`composer.addFiles`]?.some((e) => e.composerId === n) ?? !1);
      })),
      (at = f(a, (e, { get: t }) => t(nt, e)?.sourceActions ?? null)));
  }))();
}
export {
  Qe as _,
  at as a,
  Ve as b,
  X as c,
  qe as d,
  Ue as f,
  Ze as g,
  We as h,
  rt as i,
  et as l,
  Ke as m,
  ot as n,
  Y as o,
  Je as p,
  it as r,
  tt as s,
  Ye as t,
  Xe as u,
  He as v,
  q as y,
};
//# sourceMappingURL=prompt-chat-bcb03ce4ce0e.js.map
