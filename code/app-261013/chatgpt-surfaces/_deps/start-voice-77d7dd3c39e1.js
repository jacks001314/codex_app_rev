import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  CPt as r,
  Cot as i,
  EPt as a,
  Eft as o,
  IDt as s,
  Ixt as c,
  Pxt as l,
  SPt as u,
  TLt as d,
  _O as f,
  cO as p,
  fO as m,
  fSt as h,
  gO as g,
  jDt as _,
  lO as v,
  mO as ee,
  nSt as y,
  oIt as b,
  oO as te,
  pIt as x,
  pLt as S,
  rst as C,
  sO as ne,
  t3 as w,
  vO as T,
  vzt as E,
  wot as D,
  xMt as re,
  yzt as ie,
} from "./app-shared-bbfeca5e5737.js";
import {
  BZn as O,
  FFr as ae,
  GMr as k,
  GVn as oe,
  Mw as se,
  NQn as ce,
  NZn as le,
  PQn as A,
  QDr as ue,
  QM as j,
  SZn as de,
  XDr as fe,
  XMr as M,
  ZM as pe,
  aOr as me,
  ejn as N,
  gjn as he,
  iUn as ge,
  jw as _e,
  kZn as ve,
  kw as ye,
  lUn as P,
  ljn as be,
  mjn as xe,
  nOr as F,
  pZn as Se,
  pjn as Ce,
  qVn as we,
  tNr as Te,
  tjn as Ee,
  yjn as I,
  zFr as De,
} from "./app-initial-5851df3f6cb1.js";
import { bg as L, yg as Oe } from "./app-primary-fe8a450b3b04.js";
import { s as ke, t as Ae } from "./chatgpt_conversational_onboarding-f7deb0d60fff.js";
import { n as je, t as Me } from "./entry-c845dec45605.js";
import { n as Ne, r as R, t as Pe } from "./open-viewer-92b3bc7a111d.js";
import { i as Fe, r as Ie, t as Le } from "./widget-voice-session-29f5d92c26b9.js";
import { i as z, n as Re } from "./command-state-7dc5a32fb56e.js";
function ze(e, t) {
  let n = !1,
    r = null,
    i = null,
    a;
  function o() {
    r == null && i == null && (a?.(), (a = void 0));
  }
  return {
    open: async (s, c) => {
      if (n || !t.isCurrent()) return;
      let l = B.parse(c),
        u = V.parse(t.getState()),
        d = s === `edit_flashcard`;
      if (
        u.library_file_id !== l.library_file_id ||
        l.view !== (d ? `edit` : `grid`) ||
        (d && !u.cards.some(({ id: e }) => e === l.active_card_id))
      )
        throw Error(`The saved flashcard action does not match its source deck`);
      let f = e.get(k),
        p = e.get(M);
      if (f == null || p == null) return;
      d && Pe.prefetch();
      let m = await je(),
        h = () =>
          !n &&
          t.isCurrent() &&
          e.get(k) === f &&
          e.get(M) === p &&
          t.getState()?.library_file_id === l.library_file_id;
      if (!h()) return;
      d || (r?.(), (r = null));
      let g = () => {
        a ??= m(e, {
          accountId: f,
          userId: p,
          libraryFileId: l.library_file_id,
          isCurrent: h,
          getSourceCards: () => {
            let e = V.safeParse(t.getState());
            return e.success ? e.data.cards : void 0;
          },
          applyCards: t.applyCards,
          runSync: () => t.runSync(l.library_file_id),
        });
      };
      g();
      let _ = {
        libraryFileId: l.library_file_id,
        initialCardId: d ? l.active_card_id : void 0,
        initialCard: d ? u.cards.find(({ id: e }) => e === l.active_card_id) : void 0,
        analyticsContext: {
          libraryFileId: l.library_file_id,
          conversationId: t.conversationId,
          sourceMessageId: t.sourceMessageId,
          surface: d ? `chat_editor` : `chat_grid`,
          deckInstanceId: l.event_data?.deck_instance_id,
          cardInstanceId: d ? l.event_data?.card_instance_id : void 0,
          reviewPassId: l.event_data?.review_pass_id,
          passKind: l.event_data?.pass_kind,
        },
        onCardsChanged: (e) => {
          h() && t.applyCards(e);
        },
        onSaved: async () => {
          await t.runSync(l.library_file_id);
        },
        onRecoverDraft: () => {
          h() && v();
        },
      };
      if (!d) {
        r = R(e, _, {
          openGrid: t.openGrid,
          onClose: () => {
            ((r = null), o());
          },
        });
        return;
      }
      function v() {
        (i?.(),
          g(),
          (i = R(e, _, {
            onClose: () => {
              ((i = null), o());
            },
          })));
      }
      v();
    },
    dispose: () => {
      ((n = !0), a?.(), (a = void 0), r?.(), (r = null), i?.(), (i = null));
    },
  };
}
var B, V;
function H() {
  return (H = e(() => {
    (Me(),
      C(),
      a(),
      Te(),
      Ne(),
      (B = S({
        library_file_id: d().refine(o),
        library_artifact_type: n(`flashcards`),
        view: b([`grid`, `edit`]),
        active_card_id: d().min(1).optional(),
        event_data: S({
          deck_instance_id: d()
            .regex(/^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/)
            .optional()
            .catch(void 0),
          card_instance_id: d()
            .regex(/^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/)
            .optional()
            .catch(void 0),
          review_pass_id: d()
            .regex(/^[A-Za-z0-9][A-Za-z0-9._:-]{0,255}$/)
            .optional()
            .catch(void 0),
          pass_kind: b([`full`, `subset`, `missed`])
            .optional()
            .catch(void 0),
        })
          .optional()
          .catch(void 0),
      })),
      (V = S({
        library_file_id: d(),
        generation_complete: n(!0),
        cards: x(S({ id: d(), front: d(), back: d() })),
      })));
  }))();
}
function Be() {
  let e = (0, Ge.c)(25),
    n = c(i),
    [r, a] = (0, W.useState)(null),
    o = (0, W.useRef)(null),
    l,
    u;
  if (
    (e[0] === n
      ? ((l = e[1]), (u = e[2]))
      : ((l = () => {
          let e = !1,
            t = Ve(
              (e) => {
                if (o.current != null) {
                  e.resolve(!1);
                  return;
                }
                ((o.current = e), a(e));
              },
              () => n.get(j).enabled,
            ),
            r = n.watch((t) => {
              let { get: n } = t;
              if ((n(j), !e)) {
                e = !0;
                return;
              }
              X = !1;
              for (let e of J.keys()) navigator.geolocation?.clearWatch(e);
            });
          return () => {
            (r(), o.current?.resolve(!1), (o.current = null), t());
          };
        }),
        (u = [n]),
        (e[0] = n),
        (e[1] = l),
        (e[2] = u)),
    (0, W.useEffect)(l, u),
    r == null)
  )
    return null;
  let d;
  e[3] === r
    ? (d = e[4])
    : ((d = (e) => {
        (r.resolve(e), (o.current = null), a(null));
      }),
      (e[3] = r),
      (e[4] = d));
  let m = d,
    h;
  e[5] === m
    ? (h = e[6])
    : ((h = (e) => {
        e || m(!1);
      }),
      (e[5] = m),
      (e[6] = h));
  let _;
  e[7] === m
    ? (_ = e[8])
    : ((_ = (e) => {
        (e.preventDefault(), m(!0));
      }),
      (e[7] = m),
      (e[8] = _));
  let y;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, G.jsx)(f, {
        children: (0, G.jsx)(s, {
          id: `chatgptConversations.dil.geolocationPermission.title`,
          defaultMessage: `Allow location access?`,
          description: `Title for a dialog asking whether ChatGPT widgets can use the user's location`,
        }),
      })),
      (e[9] = y))
    : (y = e[9]);
  let b;
  e[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, G.jsx)(v, {
        children: (0, G.jsx)(p, {
          title: y,
          subtitle: (0, G.jsx)(g, {
            children: (0, G.jsx)(s, {
              id: `chatgptConversations.dil.geolocationPermission.descriptionWithManagement`,
              defaultMessage: `This ChatGPT widget wants to use your current location for location-based results. You can manage access later in your browser or device settings.`,
              description: `Body text in the location consent dialog shown before a ChatGPT widget requests precise location. It explains why the widget needs the end user's location and that the user can later manage or revoke the native permission in browser site settings or device location settings. This is a compact two-sentence explanation with no placeholders or formatting.`,
            }),
          }),
        }),
      })),
      (e[10] = b))
    : (b = e[10]);
  let x;
  e[11] === m ? (x = e[12]) : ((x = () => m(!1)), (e[11] = m), (e[12] = x));
  let S;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, G.jsx)(s, {
        id: `chatgptConversations.dil.geolocationPermission.cancel`,
        defaultMessage: `Not now`,
        description: `Cancel button for a dialog asking whether ChatGPT widgets can use the user's location`,
      })),
      (e[13] = S))
    : (S = e[13]);
  let C;
  e[14] === x
    ? (C = e[15])
    : ((C = (0, G.jsx)(t, { type: `button`, color: `secondary`, onClick: x, children: S })),
      (e[14] = x),
      (e[15] = C));
  let w;
  e[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, G.jsx)(t, {
        type: `submit`,
        children: (0, G.jsx)(s, {
          id: `chatgptConversations.dil.geolocationPermission.allow`,
          defaultMessage: `Allow`,
          description: `Confirm button for a dialog asking whether ChatGPT widgets can use the user's location`,
        }),
      })),
      (e[16] = w))
    : (w = e[16]);
  let T;
  e[17] === C
    ? (T = e[18])
    : ((T = (0, G.jsx)(v, { children: (0, G.jsxs)(ne, { children: [C, w] }) })), (e[17] = C), (e[18] = T));
  let E;
  e[19] !== T || e[20] !== _
    ? ((E = (0, G.jsxs)(te, { as: `form`, onSubmit: _, children: [b, T] })),
      (e[19] = T),
      (e[20] = _),
      (e[21] = E))
    : (E = e[21]);
  let D;
  return (
    e[22] !== E || e[23] !== h
      ? ((D = (0, G.jsx)(ee, {
          size: `compact`,
          open: !0,
          showDialogClose: !1,
          onOpenChange: h,
          children: E,
        })),
        (e[22] = E),
        (e[23] = h),
        (e[24] = D))
      : (D = e[24]),
    D
  );
}
function Ve(e, t) {
  return (
    q.set(e, t),
    He(),
    () => {
      (q.delete(e), q.size === 0 && Ue());
    }
  );
}
function He() {
  let e = navigator.geolocation;
  e != null &&
    Y == null &&
    ((Y = {
      clearWatch: e.clearWatch.bind(e),
      getCurrentPosition: e.getCurrentPosition.bind(e),
      watchPosition: e.watchPosition.bind(e),
    }),
    (e.getCurrentPosition = (e, t, n) => {
      let r = F();
      We().then((i) => {
        if (!i) {
          t?.(K);
          return;
        }
        Y?.getCurrentPosition(
          (n) => {
            U() && r === F() ? e(n) : t?.(K);
          },
          t,
          n,
        );
      });
    }),
    (e.watchPosition = (t, n, r) => {
      let i = F(),
        a = Z;
      return (
        --Z,
        J.set(a, { cancelled: !1 }),
        We().then((o) => {
          let s = J.get(a);
          if (!(s == null || s.cancelled)) {
            if (!o) {
              (J.delete(a), n?.(K));
              return;
            }
            s.nativeWatchId = Y?.watchPosition(
              (r) => {
                U() && i === F() ? t(r) : (e.clearWatch(a), n?.(K));
              },
              n,
              r,
            );
          }
        }),
        a
      );
    }),
    (e.clearWatch = (e) => {
      let t = J.get(e);
      if (t != null) {
        ((t.cancelled = !0), J.delete(e), t.nativeWatchId != null && Y?.clearWatch(t.nativeWatchId));
        return;
      }
      Y?.clearWatch(e);
    }));
}
function Ue() {
  let e = navigator.geolocation;
  if (e != null && Y != null) {
    for (let t of J.keys()) e.clearWatch(t);
    ((e.clearWatch = Y.clearWatch),
      (e.getCurrentPosition = Y.getCurrentPosition),
      (e.watchPosition = Y.watchPosition),
      (Y = null),
      (X = !1),
      J.clear());
  }
}
function U() {
  return Array.from(q.values()).at(-1)?.() === !0;
}
async function We() {
  if (!U()) return !1;
  let e = await navigator.permissions?.query({ name: `geolocation` }).catch(() => null);
  if (!U()) return !1;
  if (e?.state === `granted`) return !0;
  if (e?.state === `denied`) return !1;
  if (X) return !0;
  let t = Array.from(q.keys()).at(-1);
  return t == null
    ? (r.warning(`ChatGPT DIL geolocation requested without prompt handler`), !1)
    : new Promise((e) => {
        t({
          resolve: (t) => {
            let n = t && U();
            (n && (X = !0), e(n));
          },
        });
      });
}
var Ge, W, G, K, q, J, Y, X, Z;
function Ke() {
  return (Ke = e(() => {
    ((Ge = E()),
      l(),
      (W = ie()),
      _(),
      w(),
      T(),
      m(),
      me(),
      D(),
      u(),
      pe(),
      (G = re()),
      (K = {
        code: 1,
        message: `User denied Geolocation`,
        PERMISSION_DENIED: 1,
        POSITION_UNAVAILABLE: 2,
        TIMEOUT: 3,
      }),
      (q = new Map()),
      (J = new Map()),
      (Y = null),
      (X = !1),
      (Z = -1));
  }))();
}
var qe, Je;
function Ye() {
  return (Ye = e(() => {
    (l(),
      a(),
      D(),
      we(),
      I(),
      ce(),
      (qe = S({ dil: S({ type: d() }) })),
      (Je = y(
        i,
        ({ conversationId: e, messageId: t, modelDilV2: n = !1 }, { get: r }) => {
          if (e == null || t == null) return null;
          let i = r(ve, e)?.[t]?.message;
          if (
            i?.author.role !== `assistant` ||
            i.metadata?.chatgpt_sdk != null ||
            (i.metadata?.model_dil_v2 != null) !== n
          )
            return null;
          let a = n || qe.safeParse(i.metadata?.model_dil).success,
            o = r(O, e) != null,
            s = r(oe, e),
            c = s?.findLast((e) => e.author.role === `assistant` || A(e));
          return {
            modelWritten: a,
            canUseComposer: !o && !a,
            canUpload: !o && c?.id === t && s?.some(A) === !0,
          };
        },
        {
          isEqual: (e, t) =>
            e?.modelWritten === t?.modelWritten &&
            e?.canUseComposer === t?.canUseComposer &&
            e?.canUpload === t?.canUpload,
        },
      )));
  }))();
}
async function Xe(e, t, n, i) {
  if (
    t == null ||
    i?.aborted ||
    t.isTemporaryChat ||
    t.shouldBlockExternalEgress ||
    e.get(O, t.conversationId)
  )
    return;
  let a = Ze.safeParse(n);
  if (!a.success) return;
  let { event_source: o, voice_landing: s, entrypoint_id: c } = a.data,
    l = s === Le;
  if (l && (!t.messageId || Fe(c)?.sourceMessageId !== t.messageId || t.isStreaming)) return;
  let u = Qe.safeParse(n);
  if (u.success) {
    let t = u.data.event_data;
    try {
      ue(e, Ae, {
        renderer: t.renderer,
        level: t.level,
        useCase: t.use_case,
        actionId: t.action_id,
        source: t.source,
      });
    } catch {
      r.info(`ChatGPT onboarding Voice click telemetry failed`);
    }
  }
  if (
    e.get($) ||
    typeof e.get(ye) == `string` ||
    N(e).getState().isVoiceModeActive ||
    e.get(z).some(({ command: e }) => e.type === `START` || e.type === `RESTART`)
  )
    return;
  e.set($, !0);
  let d = e.get(ae);
  try {
    let n = await se(e, t.conversationId, be.Composer, i);
    if (n == null) return;
    let r = e.get(P),
      a = { sessionId: r, navigation: d, signal: i },
      u = !1;
    try {
      if (!L(e, a, () => Q(e, t, n))) return;
      let r = {
          conversationId: t.conversationId,
          conversation_id: e.get(Se, t.conversationId) ?? void 0,
          parent_message_id: e.get(de, t.conversationId) ?? void 0,
          gizmo_id: e.get(le, t.conversationId) ?? void 0,
          ...n.getConversationVoiceStartOverrides(e, t.conversationId),
          thinking_effort: n.getConversationThinkingEffort$(e, t.conversationId),
          voice_mode: `wingman`,
          eventSource: o ?? `composer`,
          voice_landing: s,
          entrypoint_id: c,
        },
        i = await n.getVoiceNuxMode(e);
      if (i == null || !L(e, a, () => Q(e, t, n))) return;
      if (i === `wingman`) {
        let i = await n.showVoiceIntroduction(e, t.conversationId);
        if (i == null || !L(e, a, () => Q(e, t, n))) return;
        r.voice = i.voice;
      }
      ((u = !0),
        await n.dispatchVoiceCommand(e, { type: `START`, args: r }),
        l && N(e).getState().isVoiceModeActive && e.set(he, !0));
    } finally {
      !u && e.get(P) === r && n.clearSessionCreate(e, { resetTimings: !0 });
    }
  } finally {
    e.set($, !1);
  }
}
function Q(e, t, n) {
  let r = !t.isTemporaryChat && !t.shouldBlockExternalEgress && !e.get(O, t.conversationId),
    i = e.get(n.canShowVoiceModeAction$, t.conversationId),
    a = N(e).getState().isVoiceModeActive,
    o = e.get(z).some(({ command: e }) => e.type === `START` || e.type === `RESTART`);
  return r && i && !a && !o;
}
var $, Ze, Qe;
function $e() {
  return ($e = e(() => {
    (ke(),
      l(),
      a(),
      De(),
      fe(),
      _e(),
      D(),
      u(),
      Oe(),
      Re(),
      xe(),
      ge(),
      Ce(),
      Ee(),
      I(),
      Ie(),
      ($ = h(i, !1)),
      (Ze = S({
        entrypoint_id: d().max(512).optional(),
        event_source: d()
          .optional()
          .catch(void 0),
        voice_landing: d()
          .regex(/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/)
          .optional()
          .catch(void 0),
      })),
      (Qe = S({
        event_name: n(`chatgpt_conversational_onboarding_action_clicked`),
        statsig_event_name: n(`chatgpt_conversational_onboarding_action_clicked`),
        event_data: S({
          renderer: d().optional(),
          level: d().optional(),
          use_case: d().optional(),
          action_id: d().optional(),
          source: d().optional(),
        }),
      })));
  }))();
}
export { Be as a, H as c, Ye as i, Xe as n, Ke as o, Je as r, ze as s, $e as t };
//# sourceMappingURL=start-voice-77d7dd3c39e1.js.map
