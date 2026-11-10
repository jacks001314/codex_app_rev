import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  HFt as r,
  LRt as i,
  NLt as a,
  ORt as o,
  Oit as s,
  Qst as c,
  RFt as l,
  SCt as u,
  VRt as d,
  ZSt as f,
  ezt as p,
  hRt as m,
  jit as h,
  kRt as g,
  mCt as _,
  sct as v,
  tht as y,
  yCt as b,
  zFt as x,
  zst as S,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $1n as C,
  B1n as w,
  Brr as T,
  C1n as ee,
  CLr as E,
  CQt as te,
  GCr as D,
  GIn as ne,
  IZn as O,
  PZn as k,
  QCr as A,
  Qbn as re,
  S1n as ie,
  SQt as ae,
  U1n as oe,
  Ujn as j,
  V1n as se,
  VPn as M,
  W1n as N,
  WNn as P,
  Y1n as F,
  _2n as ce,
  _pt as le,
  aFn as ue,
  aKt as de,
  bbn as I,
  cGn as fe,
  d2n as L,
  exn as pe,
  f$n as R,
  f0n as me,
  f2n as he,
  g0n as ge,
  g2n as z,
  gbn as _e,
  iRr as B,
  l1n as ve,
  m0n as ye,
  m2n as be,
  n0n as V,
  njr as xe,
  nwr as H,
  oKt as Se,
  p$n as U,
  p2n as Ce,
  q1n as we,
  qjn as Te,
  rPn as W,
  sKt as Ee,
  tjr as De,
  tyr as G,
  u2n as K,
  uGn as Oe,
  vbn as q,
  wLr as ke,
  ypt as Ae,
  zRr as J,
} from "./app-initial-ad16eaadf81f.js";
import {
  Ay as Y,
  Fy as X,
  Iy as je,
  My as Me,
  Ny as Ne,
  Py as Pe,
  jy as Fe,
} from "./app-primary-3e00728c2a4c.js";
import { i as Ie, r as Le } from "./runtime-6ec048e8746a.js";
import { n as Re, t as ze } from "./resume-chatgpt-completion-3c085d352474.js";
var Be;
function Ve() {
  return (Ve = e(() => {
    (le(),
      f(),
      xe(),
      t(),
      n(),
      W(),
      M(),
      (Be = _(c, (e, { scope: t, get: n }) => {
        let r = n(w, e),
          i = n(we, e),
          a =
            r != null &&
            i !== `tpp` &&
            i !== `flora` &&
            !n(C, e) &&
            n(me, e) == null &&
            n(De, { name: `chatgpt.ads` }).isCapable,
          o = a ? n(P, r).data : null;
        return {
          enabled: a && o?.conversation_id === r && o?.is_temporary_chat !== !0,
          queryKey: [`chatgpt-ads-hydration`, r],
          staleTime: S.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (r == null || e.aborted) return null;
            let n = await Ae();
            return e.aborted ? null : n(t, r, e);
          },
        };
      })));
  }))();
}
function Z(e, t) {
  if (e(ge, t) != null || e(ye, t) === `streaming` || e(be, t)) return null;
  let n = e(F, t),
    r = e(V, t),
    i = n == null ? null : r?.[n]?.message;
  if (i == null || r == null) return null;
  let a = D({ current_node: n, mapping: r });
  if (a.some((e) => R(e) != null || k(e, { isActiveTurn: !0, isStreaming: !1 }).length > 0)) return null;
  let o = e(se, t),
    s = H(i.metadata),
    c = H(H(H(s?.view_state)?.widgets)?.[`${i.id}:0`]),
    l =
      H(s?.chatgpt_sdk)?.is_custom_agent === !0 &&
      c?.canceled !== !0 &&
      (c?.streaming === !0 || H(c?.workflow)?.complete === !0),
    u = Ue.safeParse(s?.poll_on_websocket_inactivity_ms).data ?? (l ? 3e4 : 0),
    d = o === K.STREAMING,
    f = de(e, t);
  if (
    (!d && f == null && !(u > 0 && (Ce(o) || s?.async_task_type === `pro_mode` || l))) ||
    (!d && !l && i.end_turn === !0 && i.status !== `in_progress`)
  )
    return null;
  let { data: p } = e(P, t, { enabled: !1 }),
    { pollIntervalMs: m, timeoutMs: h, checkStreamStatus: g } = re(a, p?.default_model_slug ?? ``),
    _ = Math.max(p?.update_time ?? 0, i.create_time ?? 0, i.update_time ?? 0) * 1e3;
  return {
    messages: a,
    pollIntervalMs: m,
    checkStreamStatus: g || f != null,
    inactivityMs: u,
    paused: e(ce, t) || e(oe, t),
    deadline: Math.max(_, f?.acceptedAt ?? 0) + h,
    timeoutMs: h,
    pendingSteering: f,
  };
}
function He(e, t) {
  return new Promise((n) => {
    let r = () => {
        (clearTimeout(i), n());
      },
      i = setTimeout(() => {
        (t.removeEventListener(`abort`, r), n());
      }, e);
    t.addEventListener(`abort`, r, { once: !0 });
  });
}
var Ue, We, Ge, Ke, qe;
function Je() {
  return (Je = e(() => {
    (f(),
      v(),
      A(),
      O(),
      r(),
      T(),
      t(),
      pe(),
      L(),
      ne(),
      W(),
      q(),
      G(),
      M(),
      U(),
      Se(),
      (Ue = o().positive()),
      (We = 3e4),
      (Ge = 30),
      (Ke = 6e4),
      (qe = _(c, (e, { get: t, scope: n }) => {
        let r = t(J),
          i = t(N, e)?.at(-1),
          a = e == null ? null : t(z, e);
        return {
          enabled: r != null && e != null && i != null && Z(t, e) != null,
          queryKey: [`chatgpt-background-recovery`, r, e, i, a?.requestId],
          queryFn: async ({ signal: t }) => {
            if (e == null || i == null) return null;
            let o = new AbortController(),
              s = AbortSignal.any([t, o.signal]),
              c = Z(n.get, e),
              l = n.get(V, e),
              u = Date.now(),
              d = !1,
              f,
              p = 0,
              m,
              h = c == null ? 0 : c.deadline,
              g = y(),
              _ = () => g.resolve(void 0);
            s.addEventListener(`abort`, _, { once: !0 });
            let v = n.watch(({ get: t }) => {
              let n = c?.messages;
              c = Z(t, e);
              let s = t(V, e);
              ((t(J) !== r || t(N, e)?.at(-1) !== i || c == null || t(z, e) !== a) && o.abort(),
                c?.paused && ((m = void 0), f?.abort()),
                s !== l &&
                  ((l = s),
                  d ||
                    ((m = void 0),
                    f?.abort(),
                    c != null &&
                      !c.paused &&
                      (c.messages.length !== n?.length || c.messages.some((e, t) => e !== n?.[t])) &&
                      ((u = Date.now()), (h = Math.max(c.deadline, u + c.timeoutMs)), (p = 0), _()))));
            });
            try {
              for (; !s.aborted && c != null;) {
                if (Date.now() >= h || p >= Ge) {
                  ((g = y()), await g.promise);
                  continue;
                }
                if ((await He(Math.min(c.pollIntervalMs, h - Date.now()), s), s.aborted || c == null)) break;
                if (Date.now() >= h || c.paused || Date.now() - u < c.inactivityMs) continue;
                f = new AbortController();
                let t = AbortSignal.any([s, f.signal, AbortSignal.timeout(Math.min(We, h - Date.now()))]);
                try {
                  let r = !1,
                    i = c.pendingSteering?.userMessageId;
                  if (c.checkStreamStatus) {
                    let n = await B.safeGet(`/conversation/{conversation_id}/stream_status`, {
                      parameters: { path: { conversation_id: e } },
                      signal: t,
                    }).catch(() => void 0);
                    if (t.aborted) continue;
                    if (n?.status === `IS_STREAMING`) {
                      ((m = void 0), (p = 0));
                      continue;
                    }
                    r = n?.status === `COMPLETE` || n?.status === `FAILURE`;
                  }
                  let a = await I(n, e, `background_poll`, {
                    signal: t,
                    onSnapshotApply: (e) => {
                      d = e;
                    },
                  });
                  ((p = a == null && !t.aborted ? p + 1 : 0),
                    a != null && !t.aborted && r && i != null && !he(a.async_status)
                      ? ((m ??= Date.now()), Date.now() - m >= Ke && Ee(n, e, a, i))
                      : (m = void 0));
                } finally {
                  (f.abort(), (f = void 0));
                }
              }
            } finally {
              (o.abort(), s.removeEventListener(`abort`, _), v());
            }
            return null;
          },
          retry: !1,
          refetchOnReconnect: !1,
          refetchOnWindowFocus: !1,
          staleTime: 0,
          gcTime: 0,
        };
      })));
  }))();
}
function Ye(e) {
  return e.flatMap((e) => {
    let t = e.id;
    if (e.author.role !== `assistant` || t == null || e.metadata?.genui_refresh == null) return [];
    let n = tt.safeParse(e.metadata),
      r = n.success ? (n.data.is_complete ?? e.status !== `in_progress`) : !1;
    if (!n.success || !r) return [];
    let a = n.data.genui_refresh,
      o = Q.safeParse(a).success
        ? ve(e.metadata).flatMap((e, n) => (ie(e) ? [{ messageId: t, refIndex: n }] : []))
        : [];
    if (a.components == null) return o;
    let s = i(d(), p()).safeParse(a.components),
      c = $.safeParse(n.data.model_dil_v2);
    if (s.success && c.success) {
      let e = c.data.appData.opGenui.componentResults;
      for (let [n, r] of Object.entries(s.data))
        Q.safeParse(r).success && nt.safeParse(e[n]).success && o.push({ messageId: t, resolutionId: n });
    }
    return o;
  });
}
function Xe({
  isVisible: e = () => document.visibilityState === `visible`,
  onVisibilityChange: t = et,
  refreshWidget: n,
  onRefresh: r,
}) {
  let i = new Map(),
    a = !1,
    o = (e, t) => {
      e.timeout = setTimeout(
        () => {
          ((e.timeout = null), s(e));
        },
        Math.max(rt, t),
      );
    },
    s = async (t) => {
      let s = Ze(t.target);
      if (!(a || i.get(s) !== t || t.inFlight || !e())) {
        t.inFlight = !0;
        try {
          let e = await n(t.target);
          if (a || i.get(s) !== t || (r?.(t.target, e), a || i.get(s) !== t)) return;
          if (((t.failures = 0), e.next_poll_after_ms == null)) {
            i.delete(s);
            return;
          }
          o(t, e.next_poll_after_ms);
        } catch (e) {
          if (a || i.get(s) !== t) return;
          t.failures += 1;
          let n = Qe(e, t.failures);
          if (n == null) {
            i.delete(s);
            return;
          }
          o(t, n);
        } finally {
          t.inFlight = !1;
        }
      }
    },
    c = t(() => {
      if (e()) for (let e of i.values()) e.timeout ?? s(e);
    });
  return {
    setTargets: (e) => {
      let t = new Map(e.map((e) => [Ze(e), e]));
      for (let [e, n] of i) t.has(e) || (n.timeout != null && clearTimeout(n.timeout), i.delete(e));
      for (let [e, n] of t) {
        if (i.has(e)) continue;
        let t = { failures: 0, inFlight: !1, target: n, timeout: null };
        (i.set(e, t), s(t));
      }
    },
    stop: () => {
      ((a = !0), c());
      for (let e of i.values()) e.timeout != null && clearTimeout(e.timeout);
      i.clear();
    },
  };
}
function Ze(e) {
  return `resolutionId` in e
    ? `${e.messageId}:component:${e.resolutionId}`
    : `${e.messageId}:ref:${e.refIndex}`;
}
function Qe(e, t) {
  return e instanceof h && e.status === 404
    ? $e(e) === `Message not found` && t < 5
      ? at
      : null
    : t < 2
      ? it
      : null;
}
function $e(e) {
  try {
    let t = g({ detail: d() }).safeParse(JSON.parse(e.message));
    return t.success ? t.data.detail : null;
  } catch {
    return null;
  }
}
function et(e) {
  return (
    document.addEventListener(`visibilitychange`, e),
    window.addEventListener(`focus`, e),
    () => {
      (document.removeEventListener(`visibilitychange`, e), window.removeEventListener(`focus`, e));
    }
  );
}
var tt, Q, $, nt, rt, it, at;
function ot() {
  return (ot = e(() => {
    (ee(),
      r(),
      s(),
      (tt = g({ genui_refresh: i(d(), p()), is_complete: a().optional() }).loose()),
      (Q = g({ enabled: m(!0), name: d().trim().min(1) })),
      ($ = g({ appData: g({ opGenui: g({ componentResults: i(d(), p()) }) }) })),
      (nt = g({ status: m(`resolved`) })),
      (rt = 1e3),
      (it = 5e3),
      (at = 1e3));
  }))();
}
var st;
function ct() {
  return (ct = e(() => {
    (f(),
      ke(),
      G(),
      t(),
      Oe(),
      ot(),
      M(),
      Te(),
      (st = u(c, (e) => null, {
        onMount: (e, t) => {
          let { key: n } = t;
          if (n != null)
            return t.watch(({ get: e }) => {
              let r = e(J);
              if (r == null) return;
              let i = Xe({
                  onRefresh: (e, i) => {
                    i.message?.id === e.messageId &&
                      t.get(J) === r &&
                      t.get(E) &&
                      !t.get(j, n) &&
                      ue({ scope: t, conversationId: n, message: i.message, preserveCurrentTurn: !0 });
                  },
                  refreshWidget: (e) =>
                    !t.get(E) || t.get(J) !== r || t.get(j, n)
                      ? Promise.resolve({ next_poll_after_ms: null })
                      : B.safePost(
                          `/conversation/{conversation_id}/message/{message_id}/genui/refresh_widget`,
                          {
                            parameters: { path: { conversation_id: n, message_id: e.messageId } },
                            requestBody:
                              `resolutionId` in e
                                ? { resolution_id: e.resolutionId }
                                : { ref_index: e.refIndex },
                          },
                        ),
                }),
                a = t.watch(({ get: e }) => {
                  let t = e(fe, n);
                  i.setTargets(t == null || !e(E) || e(j, n) ? [] : Ye(t));
                });
              return () => {
                (a(), i.stop());
              };
            });
        },
      })));
  }))();
}
function lt(e, t) {
  let n = t.at(-1),
    r = n?.turn.items
      .flatMap((e) => (e.type === `chatgpt-reasoning-group` ? e.items : [e]))
      .filter((e) => e.type === `generated-image`);
  return n == null ||
    r == null ||
    r.length === 0 ||
    (e !== K.STREAMING && !r.some((e) => e.status === `in_progress`))
    ? null
    : n.id;
}
var ut, dt, ft;
function pt() {
  return (pt = e(() => {
    (f(),
      A(),
      O(),
      T(),
      t(),
      l(),
      L(),
      Pe(),
      q(),
      M(),
      U(),
      Le(),
      ae(),
      je(),
      Me(),
      (ut = 1e4),
      (dt = 9e5),
      (ft = u(c, (e) => null, {
        onMount: (e, t) => {
          let { key: n } = t;
          if (n == null) return;
          let r = null,
            i = null,
            a = [],
            o = 0,
            s = null,
            c = !1,
            l = !1,
            u = null,
            d = new Set(),
            f = t.get(J),
            p = new AbortController(),
            m = Ie(t, n),
            h = () => {
              s != null && (clearTimeout(s), (s = null));
            },
            g = async () => {
              if (l || r == null || c || t.get(J) !== f) return;
              if (Date.now() >= o) {
                let e = r;
                if (((i = e), (r = null), a.length > 0)) {
                  let r = a.map((t) => ({ accountId: f, conversationId: n, generationKey: e, messageId: t }));
                  t.set(Y, (e) => [...e, ...r].slice(-100));
                }
                x.warning(`Stopped polling ChatGPT image generation after timeout`, {
                  safe: {},
                  sensitive: { conversationId: n },
                });
                return;
              }
              let e = r;
              c = !0;
              try {
                await I(t, n, `image_generation_poll`, { signal: p.signal });
              } finally {
                ((c = !1),
                  !l &&
                    r != null &&
                    (r === e
                      ? (h(),
                        (s = setTimeout(() => {
                          ((s = null), g());
                        }, ut)))
                      : g()));
              }
            },
            _ = t.watch((e) => {
              let { get: s } = e,
                c = s(F, n),
                m = s(V, n),
                _ = c != null && m != null ? D({ current_node: c, mapping: m }) : null;
              if (_ != null) {
                let t = _.find((e) => e.author.role === `user`)?.id ?? null;
                (t !== u && (d.clear(), (u = t)), te(e, n, _, d));
              }
              if (s(J) !== f) {
                ((l = !0), p.abort(), h());
                return;
              }
              let v = s(Y),
                y = v.some((e) => e.accountId === f && e.conversationId === n),
                b = _?.some((e) => R(e) == null && k(e, { isActiveTurn: !0, isStreaming: !1 }).length > 0),
                x = y || b ? s(Ne, n) : null,
                S = x
                  ?.at(-1)
                  ?.turn.items.flatMap((e) => (e.type === `chatgpt-reasoning-group` ? e.items : [e]))
                  .flatMap((e) => (e.type === `generated-image` && e.status === `in_progress` ? [e] : []));
              if (y && _ != null && x != null) {
                let e = x.at(-1),
                  r = new Set(
                    S?.flatMap((e) => {
                      let t = X(_, e.chatGptMessageId);
                      return t?.isTimedOut && t.message.id != null ? [t.message.id] : [];
                    }),
                  ),
                  i = v.filter((t) => {
                    if (t.accountId !== f || t.conversationId !== n) return !0;
                    if (x.some((n) => n.id === t.generationKey && n !== e)) return !1;
                    let i = X(_, t.messageId)?.message.id;
                    return !_.some((e) => e.id === t.messageId) || (i != null && r.has(i));
                  });
                i.length !== v.length && t.set(Y, i);
              }
              let C = b ? x : null;
              a = [
                ...new Set(
                  S?.flatMap((e) =>
                    e.chatGptMessageId != null && _ != null && X(_, e.chatGptMessageId)?.isTimedOut
                      ? [e.chatGptMessageId]
                      : [],
                  ),
                ),
              ];
              let w = C == null ? null : lt(s(se, n), C);
              if (w == null) {
                (h(), (r = null), (i = null));
                return;
              }
              let T = s(Fe, n);
              if (
                S != null &&
                S.length > 0 &&
                S.every((e) => T?.some((t) => t.generationKey === w && t.messageId === e.chatGptMessageId))
              ) {
                (h(), (r = null));
                return;
              }
              w !== r && w !== i && (h(), (r = w), (i = null), (o = Date.now() + dt), g());
            });
          return () => {
            ((l = !0), p.abort(), h(), _(), m());
          };
        },
      })));
  }))();
}
var mt;
function ht() {
  return (ht = e(() => {
    (f(),
      t(),
      Ve(),
      Je(),
      q(),
      ct(),
      pt(),
      Re(),
      (mt = b(c, (e, { get: t }) => (t(_e), t(ze, e), t(Be, e), t(st, e), t(ft, e), t(qe, e), null))));
  }))();
}
export { ht as n, mt as t };
//# sourceMappingURL=chatgpt-conversation-runtime-61b099de9e0f.js.map
