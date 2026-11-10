import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Bpt as n,
  CPt as r,
  Cot as i,
  EPt as a,
  Fat as o,
  Pat as s,
  Pxt as c,
  RLt as l,
  SPt as u,
  TLt as d,
  Zxt as f,
  _It as p,
  aSt as m,
  fLt as h,
  frt as g,
  hrt as _,
  nSt as v,
  pLt as y,
  rst as b,
  wot as x,
  xLt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  BQn as C,
  DZt as w,
  EZn as T,
  FAn as E,
  FEr as ee,
  Fjn as te,
  GMr as D,
  GVn as ne,
  G_n as re,
  JYn as ie,
  Jyr as O,
  LQn as k,
  OZt as ae,
  Oer as A,
  PEr as oe,
  Qyr as j,
  RQn as M,
  SAn as se,
  SZn as ce,
  UQn as le,
  UZn as ue,
  VQn as de,
  VZn as fe,
  Vyr as N,
  WQn as pe,
  WXn as me,
  Y_n as P,
  Ymr as F,
  _Zn as I,
  bOn as L,
  bZn as he,
  c$t as ge,
  cft as _e,
  eNr as R,
  ehr as z,
  gZn as ve,
  iZn as ye,
  kZn as B,
  lJn as V,
  mZn as H,
  pZn as be,
  qVn as xe,
  qYn as U,
  q_n as W,
  rZn as Se,
  sJn as G,
  tNr as Ce,
  u$t as we,
  uft as Te,
  wOn as Ee,
  xNn as De,
  yjn as K,
  zZn as Oe,
} from "./app-initial-5851df3f6cb1.js";
import {
  cy as q,
  dy as ke,
  fy as Ae,
  ly as je,
  my as Me,
  py as J,
  uy as Ne,
} from "./app-primary-fe8a450b3b04.js";
import { i as Pe, r as Fe } from "./runtime-109ae8a74d4c.js";
import { n as Ie, t as Le } from "./resume-chatgpt-completion-43010f4e838d.js";
var Y;
function X() {
  return (X = e(() => {
    (_e(),
      c(),
      ee(),
      x(),
      o(),
      E(),
      K(),
      (Y = f(i, (e, { scope: t, get: n }) => {
        let r = n(be, e),
          i = n(he, e),
          a =
            r != null &&
            i !== `tpp` &&
            i !== `flora` &&
            !n(T, e) &&
            n(Oe, e) == null &&
            n(oe, { name: `chatgpt.ads` }).isCapable,
          o = a ? n(se, r).data : null;
        return {
          enabled: a && o?.conversation_id === r && o?.is_temporary_chat !== !0,
          queryKey: [`chatgpt-ads-hydration`, r],
          staleTime: s.ONE_MINUTE,
          retry: !1,
          queryFn: async ({ signal: e }) => {
            if (r == null || e.aborted) return null;
            let n = await Te();
            return e.aborted ? null : n(t, r, e);
          },
        };
      })));
  }))();
}
function Z(e, t) {
  if (e(ue, t) != null || e(fe, t) === `streaming` || e(de, t)) return null;
  let n = e(ce, t),
    r = e(B, t),
    i = n == null ? null : r?.[n]?.message;
  if (i == null || r == null) return null;
  let a = N({ current_node: n, mapping: r });
  if (a.some((e) => U(e) != null || G(e, { isActiveTurn: !0, isStreaming: !1 }).length > 0)) return null;
  let o = e(H, t),
    s = j(i.metadata),
    c = j(j(j(s?.view_state)?.widgets)?.[`${i.id}:0`]),
    l =
      j(s?.chatgpt_sdk)?.is_custom_agent === !0 &&
      c?.canceled !== !0 &&
      (c?.streaming === !0 || j(c?.workflow)?.complete === !0),
    u = Q.safeParse(s?.poll_on_websocket_inactivity_ms).data ?? (l ? 3e4 : 0),
    d = o === k.STREAMING;
  if (
    (!d && !(u > 0 && (C(o) || s?.async_task_type === `pro_mode` || l))) ||
    (!d && !l && i.end_turn === !0 && i.status !== `in_progress`)
  )
    return null;
  let { data: f } = e(se, t, { enabled: !1 }),
    { pollIntervalMs: p, timeoutMs: m, checkStreamStatus: h } = ge(a, f?.default_model_slug ?? ``),
    g = Math.max(f?.update_time ?? 0, i.create_time ?? 0, i.update_time ?? 0) * 1e3;
  return {
    messages: a,
    pollIntervalMs: p,
    checkStreamStatus: h,
    inactivityMs: u,
    paused: e(pe, t) || e(ve, t),
    deadline: g + m,
    timeoutMs: m,
  };
}
function Re(e, t) {
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
var Q, ze, Be, Ve;
function He() {
  return (He = e(() => {
    (c(),
      b(),
      O(),
      V(),
      a(),
      A(),
      x(),
      we(),
      M(),
      De(),
      E(),
      W(),
      z(),
      K(),
      ie(),
      (Q = h().positive()),
      (ze = 3e4),
      (Be = 30),
      (Ve = f(i, (e, { get: t, scope: r }) => {
        let i = t(D),
          a = t(I, e)?.at(-1),
          o = e == null ? null : t(le, e);
        return {
          enabled: i != null && e != null && a != null && Z(t, e) != null,
          queryKey: [`chatgpt-background-recovery`, i, e, a, o?.requestId],
          queryFn: async ({ signal: t }) => {
            if (e == null || a == null) return null;
            let s = new AbortController(),
              c = AbortSignal.any([t, s.signal]),
              l = Z(r.get, e),
              u = r.get(B, e),
              d = Date.now(),
              f = !1,
              p,
              m = 0,
              h = l == null ? 0 : l.deadline,
              g = n(),
              _ = () => g.resolve(void 0);
            c.addEventListener(`abort`, _, { once: !0 });
            let v = r.watch(({ get: t }) => {
              let n = l?.messages;
              l = Z(t, e);
              let r = t(B, e);
              ((t(D) !== i || t(I, e)?.at(-1) !== a || l == null || t(le, e) !== o) && s.abort(),
                l?.paused && p?.abort(),
                r !== u &&
                  ((u = r),
                  f ||
                    (p?.abort(),
                    l != null &&
                      !l.paused &&
                      (l.messages.length !== n?.length || l.messages.some((e, t) => e !== n?.[t])) &&
                      ((d = Date.now()), (h = Math.max(l.deadline, d + l.timeoutMs)), (m = 0), _()))));
            });
            try {
              for (; !c.aborted && l != null;) {
                if (Date.now() >= h || m >= Be) {
                  ((g = n()), await g.promise);
                  continue;
                }
                if ((await Re(Math.min(l.pollIntervalMs, h - Date.now()), c), c.aborted || l == null)) break;
                if (Date.now() >= h || l.paused || Date.now() - d < l.inactivityMs) continue;
                p = new AbortController();
                let t = AbortSignal.any([c, p.signal, AbortSignal.timeout(Math.min(ze, h - Date.now()))]);
                try {
                  if (l.checkStreamStatus) {
                    let n = await F.safeGet(`/conversation/{conversation_id}/stream_status`, {
                      parameters: { path: { conversation_id: e } },
                      signal: t,
                    }).catch(() => void 0);
                    if (t.aborted) continue;
                    if (n?.status === `IS_STREAMING`) {
                      m = 0;
                      continue;
                    }
                  }
                  m =
                    (await P(r, e, `background_poll`, {
                      signal: t,
                      onSnapshotApply: (e) => {
                        f = e;
                      },
                    })) == null && !t.aborted
                      ? m + 1
                      : 0;
                } finally {
                  (p.abort(), (p = void 0));
                }
              }
            } finally {
              (s.abort(), c.removeEventListener(`abort`, _), v());
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
function Ue(e) {
  return e.flatMap((e) => {
    let t = e.id;
    if (e.author.role !== `assistant` || t == null || e.metadata?.genui_refresh == null) return [];
    let n = Ye.safeParse(e.metadata),
      r = n.success ? (n.data.is_complete ?? e.status !== `in_progress`) : !1;
    if (!n.success || !r) return [];
    let i = n.data.genui_refresh,
      a = $.safeParse(i).success
        ? me(e.metadata).flatMap((e, n) => (Se(e) ? [{ messageId: t, refIndex: n }] : []))
        : [];
    if (i.components == null) return a;
    let o = S(d(), l()).safeParse(i.components),
      s = Xe.safeParse(n.data.model_dil_v2);
    if (o.success && s.success) {
      let e = s.data.appData.opGenui.componentResults;
      for (let [n, r] of Object.entries(o.data))
        $.safeParse(r).success && Ze.safeParse(e[n]).success && a.push({ messageId: t, resolutionId: n });
    }
    return a;
  });
}
function We({
  isVisible: e = () => document.visibilityState === `visible`,
  onVisibilityChange: t = Je,
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
        Math.max(Qe, t),
      );
    },
    s = async (t) => {
      let s = Ge(t.target);
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
          let n = Ke(e, t.failures);
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
      let t = new Map(e.map((e) => [Ge(e), e]));
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
function Ge(e) {
  return `resolutionId` in e
    ? `${e.messageId}:component:${e.resolutionId}`
    : `${e.messageId}:ref:${e.refIndex}`;
}
function Ke(e, t) {
  return e instanceof _ && e.status === 404
    ? qe(e) === `Message not found` && t < 5
      ? et
      : null
    : t < 2
      ? $e
      : null;
}
function qe(e) {
  try {
    let t = y({ detail: d() }).safeParse(JSON.parse(e.message));
    return t.success ? t.data.detail : null;
  } catch {
    return null;
  }
}
function Je(e) {
  return (
    document.addEventListener(`visibilitychange`, e),
    window.addEventListener(`focus`, e),
    () => {
      (document.removeEventListener(`visibilitychange`, e), window.removeEventListener(`focus`, e));
    }
  );
}
var Ye, $, Xe, Ze, Qe, $e, et;
function tt() {
  return (tt = e(() => {
    (ye(),
      a(),
      g(),
      (Ye = y({ genui_refresh: S(d(), l()), is_complete: p().optional() }).loose()),
      ($ = y({ enabled: t(!0), name: d().trim().min(1) })),
      (Xe = y({ appData: y({ opGenui: y({ componentResults: S(d(), l()) }) }) })),
      (Ze = y({ status: t(`resolved`) })),
      (Qe = 1e3),
      ($e = 5e3),
      (et = 1e3));
  }))();
}
var nt;
function rt() {
  return (rt = e(() => {
    (c(),
      Ce(),
      z(),
      x(),
      xe(),
      tt(),
      K(),
      Ee(),
      (nt = m(i, (e) => null, {
        onMount: (e, t) => {
          let { key: n } = t;
          if (n != null)
            return t.watch(({ get: e }) => {
              let r = e(D);
              if (r == null) return;
              let i = We({
                  onRefresh: (e, i) => {
                    i.message?.id === e.messageId &&
                      t.get(D) === r &&
                      t.get(R) &&
                      !t.get(L, n) &&
                      te({ scope: t, conversationId: n, message: i.message, preserveCurrentTurn: !0 });
                  },
                  refreshWidget: (e) =>
                    !t.get(R) || t.get(D) !== r || t.get(L, n)
                      ? Promise.resolve({ next_poll_after_ms: null })
                      : F.safePost(
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
                  let t = e(ne, n);
                  i.setTargets(t == null || !e(R) || e(L, n) ? [] : Ue(t));
                });
              return () => {
                (a(), i.stop());
              };
            });
        },
      })));
  }))();
}
function it(e, t) {
  let n = t.at(-1),
    r = n?.turn.items
      .flatMap((e) => (e.type === `chatgpt-reasoning-group` ? e.items : [e]))
      .filter((e) => e.type === `generated-image`);
  return n == null ||
    r == null ||
    r.length === 0 ||
    (e !== k.STREAMING && !r.some((e) => e.status === `in_progress`))
    ? null
    : n.id;
}
var at, ot, st;
function ct() {
  return (ct = e(() => {
    (c(),
      O(),
      V(),
      A(),
      x(),
      u(),
      M(),
      Ae(),
      W(),
      K(),
      ie(),
      Fe(),
      w(),
      Me(),
      Ne(),
      (at = 1e4),
      (ot = 9e5),
      (st = m(i, (e) => null, {
        onMount: (e, t) => {
          let { key: n } = t;
          if (n == null) return;
          let i = null,
            a = null,
            o = [],
            s = 0,
            c = null,
            l = !1,
            u = !1,
            d = null,
            f = new Set(),
            p = t.get(D),
            m = new AbortController(),
            h = Pe(t, n),
            g = () => {
              c != null && (clearTimeout(c), (c = null));
            },
            _ = async () => {
              if (u || i == null || l || t.get(D) !== p) return;
              if (Date.now() >= s) {
                let e = i;
                if (((a = e), (i = null), o.length > 0)) {
                  let r = o.map((t) => ({ accountId: p, conversationId: n, generationKey: e, messageId: t }));
                  t.set(q, (e) => [...e, ...r].slice(-100));
                }
                r.warning(`Stopped polling ChatGPT image generation after timeout`, {
                  safe: {},
                  sensitive: { conversationId: n },
                });
                return;
              }
              let e = i;
              l = !0;
              try {
                await P(t, n, `image_generation_poll`, { signal: m.signal });
              } finally {
                ((l = !1),
                  !u &&
                    i != null &&
                    (i === e
                      ? (g(),
                        (c = setTimeout(() => {
                          ((c = null), _());
                        }, at)))
                      : _()));
              }
            },
            v = t.watch((e) => {
              let { get: r } = e,
                c = r(ce, n),
                l = r(B, n),
                h = c != null && l != null ? N({ current_node: c, mapping: l }) : null;
              if (h != null) {
                let t = h.find((e) => e.author.role === `user`)?.id ?? null;
                (t !== d && (f.clear(), (d = t)), ae(e, n, h, f));
              }
              if (r(D) !== p) {
                ((u = !0), m.abort(), g());
                return;
              }
              let v = r(q),
                y = v.some((e) => e.accountId === p && e.conversationId === n),
                b = h?.some((e) => U(e) == null && G(e, { isActiveTurn: !0, isStreaming: !1 }).length > 0),
                x = y || b ? r(ke, n) : null,
                S = x
                  ?.at(-1)
                  ?.turn.items.flatMap((e) => (e.type === `chatgpt-reasoning-group` ? e.items : [e]))
                  .flatMap((e) => (e.type === `generated-image` && e.status === `in_progress` ? [e] : []));
              if (y && h != null && x != null) {
                let e = x.at(-1),
                  r = new Set(
                    S?.flatMap((e) => {
                      let t = J(h, e.chatGptMessageId);
                      return t?.isTimedOut && t.message.id != null ? [t.message.id] : [];
                    }),
                  ),
                  i = v.filter((t) => {
                    if (t.accountId !== p || t.conversationId !== n) return !0;
                    if (x.some((n) => n.id === t.generationKey && n !== e)) return !1;
                    let i = J(h, t.messageId)?.message.id;
                    return !h.some((e) => e.id === t.messageId) || (i != null && r.has(i));
                  });
                i.length !== v.length && t.set(q, i);
              }
              let C = b ? x : null;
              o = [
                ...new Set(
                  S?.flatMap((e) =>
                    e.chatGptMessageId != null && h != null && J(h, e.chatGptMessageId)?.isTimedOut
                      ? [e.chatGptMessageId]
                      : [],
                  ),
                ),
              ];
              let w = C == null ? null : it(r(H, n), C);
              if (w == null) {
                (g(), (i = null), (a = null));
                return;
              }
              let T = r(je, n);
              if (
                S != null &&
                S.length > 0 &&
                S.every((e) => T?.some((t) => t.generationKey === w && t.messageId === e.chatGptMessageId))
              ) {
                (g(), (i = null));
                return;
              }
              w !== i && w !== a && (g(), (i = w), (a = null), (s = Date.now() + ot), _());
            });
          return () => {
            ((u = !0), m.abort(), g(), v(), h());
          };
        },
      })));
  }))();
}
var lt;
function ut() {
  return (ut = e(() => {
    (c(),
      x(),
      X(),
      He(),
      W(),
      rt(),
      ct(),
      Ie(),
      (lt = v(i, (e, { get: t }) => (t(re), t(Le, e), t(Y, e), t(nt, e), t(st, e), t(Ve, e), null))));
  }))();
}
export { ut as n, lt as t };
//# sourceMappingURL=chatgpt-conversation-runtime-61505fa1e4f0.js.map
