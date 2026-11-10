import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  BLt as r,
  CPt as i,
  DIt as a,
  EPt as o,
  IDt as s,
  Ixt as c,
  JIt as l,
  Pxt as u,
  SPt as d,
  TLt as f,
  VDt as p,
  _xt as m,
  bz as h,
  fLt as g,
  hot as _,
  jDt as v,
  lot as y,
  oIt as b,
  pLt as x,
  t3 as S,
  vxt as C,
  vzt as w,
  xLt as T,
  xMt as E,
  xz as ee,
  yzt as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as k,
  FNr as te,
  QDr as A,
  Sqn as j,
  TNr as M,
  Ujn as ne,
  XDr as N,
  Ymr as P,
  ehr as F,
  fur as I,
  gwr as L,
  kZn as re,
  pZn as R,
  pur as z,
  xqn as ie,
  yjn as B,
} from "./app-initial-5851df3f6cb1.js";
import { r as ae } from "./index-2v8AX9vQ-dd9441ba03bb.js";
import { t as V } from "./dist-bcbbd4f29e92.js";
import { Hs as H, Vs as U } from "./app-primary-fe8a450b3b04.js";
import { o as oe, u as W } from "./file-ef1f4b6b35dd.js";
import { n as se, r as ce, t as le } from "./preview-ad3fa4dcef45.js";
import { n as ue, r as de, t as fe } from "./widget-share-74fd24bbbee3.js";
function pe(e, t, n) {
  let r = q.safeParse(n);
  if (r.success)
    try {
      A(e, U, {
        eventName: r.data.event_name,
        eventData: JSON.stringify({ turn_message_id: t, ...r.data.event_data }),
      });
    } catch {}
}
var G, K, q;
function J() {
  return (J = e(() => {
    (H(),
      o(),
      N(),
      (G = x({
        widget_name: n(`create_interactive_poll`),
        poll_id: r(),
        surface: b([`conversation`, `shared_post`]),
      })),
      (K = { draft_edit_analytics_version: n(1), draft_edit_renderer: n(`dil_v1`) }),
      (q = a(`event_name`, [
        x({
          event_name: n(`chatgpt_interactive_poll_visible`),
          event_data: G.extend({
            shared_post_id: f()
              .regex(/^[a-z]{1,10}_[0-9a-f]{32}$/)
              .nullish(),
            role: b([`creator`, `receiver`]),
            lifecycle: b([`draft`, `published`, `closed`]),
            presentation: n(`poll`),
            draft_edit_analytics_version: K.draft_edit_analytics_version.optional(),
            draft_edit_renderer: K.draft_edit_renderer.optional(),
          }),
        }),
        x({
          event_name: n(`chatgpt_interactive_poll_draft_edited`),
          event_data: G.extend({
            ...K,
            edit_kind: b([
              `question_changed`,
              `option_added`,
              `option_removed`,
              `option_text_changed`,
              `multiple_votes_changed`,
            ]),
            option_count: g().int().min(0).max(20),
          }),
        }),
      ])));
  }))();
}
function me({
  accountId: e,
  conversationId: t,
  messageId: n,
  widgetRefId: r,
  sharedPostId: i,
  initialState: a,
  onShare: o,
  onLogEvent: s,
  onError: c,
  onConfirmedState: l,
  beforeVote: u,
  afterVote: d,
}) {
  let f,
    p,
    m = a,
    h = !1,
    g = !1,
    _ = JSON.stringify(a),
    v = new AbortController();
  function y(e) {
    ((h = !0), f?.setState(e), (h = !1), (m = f?.getState() ?? e));
  }
  async function b() {
    try {
      await o(m);
    } catch (e) {
      v.signal.aborted || c(e, typeof m.share_error_label == `string` ? m.share_error_label : void 0);
    }
  }
  function x(e) {
    (p?.(),
      (f = e),
      v.signal.aborted && (v = new AbortController()),
      y(m),
      (p = f.subscribe((e) => {
        h || g || e.action_pending === !0 || (m = e);
      })));
  }
  return {
    connect: x,
    activate() {
      f && v.signal.aborted && x(f);
    },
    hydrate(e) {
      if (g) return;
      let t = JSON.stringify(e);
      t === _ || (m.lifecycle === `published` && e.lifecycle === `draft`) || ((_ = t), y(e));
    },
    async onAction(a) {
      if (v.signal.aborted || !f || m.is_unfurl_preview === !0) return;
      if (a.type === `log_event`) {
        s(a.payload);
        return;
      }
      if (g) return;
      if (a.type === `share`) {
        g = !0;
        try {
          await b();
        } finally {
          g = !1;
        }
        return;
      }
      if (!X.has(a.type)) return;
      let o = v.signal,
        p = m;
      ((g = !0), f.setState({ action_pending: !0 }));
      try {
        if (i != null && a.type !== `interactive_poll_vote`)
          throw Error(`Only voting is available on shared polls`);
        (a.type === `interactive_poll_vote` && (await u()), o.throwIfAborted());
        let s = Y.parse(a.payload ?? {}),
          c;
        if (i != null)
          c = await P.safePost(`/widget_server_action/public`, {
            signal: o,
            requestBody: {
              action_type: a.type,
              payload: s,
              ref_id: r,
              public_action_context: { surface_type: `shared_post`, surface_id: i },
            },
          });
        else {
          if (e == null) throw Error(`Authenticated account is required for private poll actions`);
          c = await P.safePost(`/widget_server_action`, {
            additionalHeaders: { "ChatGPT-Account-ID": e },
            signal: o,
            requestBody: { action_type: a.type, payload: s, conversation_id: t, message_id: n, ref_id: r },
          });
        }
        if ((o.throwIfAborted(), c.status !== `success`))
          throw Error(c.status_message ?? `Poll action failed`);
        let d = c.data;
        (y({
          ...(p.lifecycle === `draft` && d?.lifecycle !== `published` && a.type !== `interactive_poll_publish`
            ? { is_creator: d?.is_creator ?? p.is_creator, role_loading: !1 }
            : d),
          action_pending: !1,
        }),
          l(m),
          a.type === `interactive_poll_publish` && (await b()));
      } catch (e) {
        o.aborted || (y({ ...p, action_pending: !1, role_loading: !1 }), c(e));
      } finally {
        ((g = !1), !o.aborted && a.type === `interactive_poll_vote` && (await d()));
      }
    },
    dispose() {
      (v.abort(), p?.());
    },
  };
}
var Y, X;
function he() {
  return (he = e(() => {
    (o(),
      F(),
      (Y = T(f(), l())),
      (X = new Set([
        `interactive_poll_initialize`,
        `interactive_poll_publish`,
        `interactive_poll_vote`,
        `interactive_poll_refresh`,
      ])));
  }))();
}
function ge(e) {
  let t = (0, Z.c)(9),
    n = c(L),
    r = z(),
    i = O(R, e.turn.conversationId),
    a;
  t[0] === n.value.pathname
    ? (a = t[1])
    : ((a = C(`/s/:postId`, n.value.pathname)?.params.postId), (t[0] = n.value.pathname), (t[1] = a));
  let o = a;
  if (r.isLoading || (i == null && o == null)) {
    let n;
    return (
      t[2] === e.state
        ? (n = t[3])
        : ((n = (0, $.jsx)(le, { state: e.state })), (t[2] = e.state), (t[3] = n)),
      n
    );
  }
  let s = `${r.userId}:${r.accountId}:${i}:${o}`,
    l;
  return (
    t[4] !== e || t[5] !== i || t[6] !== o || t[7] !== s
      ? ((l = (0, $.jsx)(_e, { ...e, serverId: i, sharedPostId: o }, s)),
        (t[4] = e),
        (t[5] = i),
        (t[6] = o),
        (t[7] = s),
        (t[8] = l))
      : (l = t[8]),
    l
  );
}
function _e(e) {
  let n = (0, Z.c)(57),
    {
      widget: r,
      state: a,
      widgetRefId: o,
      messageId: l,
      turn: u,
      theme: d,
      customCss: f,
      serverId: m,
      sharedPostId: h,
    } = e,
    g = c(L),
    v = z(),
    y = p(),
    b;
  n[0] === o ? (b = n[1]) : ((b = o.match(/:(\d+)$/)?.[1]), (n[0] = o), (n[1] = b));
  let x = b,
    S = x == null ? -1 : Number(x),
    C;
  n[2] !== S || n[3] !== l || n[4] !== g.value.pathname || n[5] !== m || n[6] !== u
    ? ((C = fe(u, { serverId: m, pathname: g.value.pathname, messageId: l, contentReferenceIndex: S })),
      (n[2] = S),
      (n[3] = l),
      (n[4] = g.value.pathname),
      (n[5] = m),
      (n[6] = u),
      (n[7] = C))
    : (C = n[7]);
  let w = C,
    T;
  n[8] !== y || n[9] !== g
    ? ((T = function (e, t) {
        (i.warning(`Interactive poll action failed`, { safe: {}, sensitive: { error: e } }),
          g
            .get(_)
            .danger(
              t ??
                y.formatMessage({
                  id: `chatgptConversations.interactivePoll.actionFailed`,
                  defaultMessage: `Your poll change couldn’t be saved. Please try again`,
                  description: `Error after publishing, saving, or voting on an interactive poll fails`,
                }),
              { errorAnalytics: { toastId: `chatgptConversations.interactivePoll.actionFailed` } },
            ));
      }),
      (n[8] = y),
      (n[9] = g),
      (n[10] = T))
    : (T = n[10]);
  let E = T,
    D;
  n[11] !== S || n[12] !== l || n[13] !== g || n[14] !== d || n[15] !== u || n[16] !== r
    ? ((D = (e) => {
        e.lifecycle === `published` &&
          de(g, u, {
            messageId: l,
            contentReferenceIndex: S,
            metadata: { widgetType: `dil`, widgetName: `create_interactive_poll` },
            preview: (0, $.jsx)(se, { theme: d, state: e, widget: r }),
            title: typeof e.question == `string` ? e.question : null,
          });
      }),
      (n[11] = S),
      (n[12] = l),
      (n[13] = g),
      (n[14] = d),
      (n[15] = u),
      (n[16] = r),
      (n[17] = D))
    : (D = n[17]);
  let O = ee(D),
    k;
  n[18] !== v ||
  n[19] !== O ||
  n[20] !== l ||
  n[21] !== E ||
  n[22] !== g ||
  n[23] !== m ||
  n[24] !== h ||
  n[25] !== a ||
  n[26] !== u.conversationId ||
  n[27] !== o
    ? ((k = () =>
        me({
          accountId: v.accountId,
          conversationId: m,
          messageId: l,
          widgetRefId: o,
          sharedPostId: h,
          initialState: a,
          onError: E,
          onShare: O,
          onLogEvent: (e) => pe(g, l, e),
          onConfirmedState: (e) => {
            if (h != null) return;
            let t = g.get(re, u.conversationId)?.[l]?.message;
            if (t == null) return;
            let n = ie(t.metadata);
            ne(g, u.conversationId, {
              ...t,
              metadata: { ...t.metadata, view_state: { ...n, widgets: { ...n?.widgets, [o]: e } } },
            });
          },
          beforeVote: async () => {
            h != null && (await g.query.cancel(W, v));
          },
          afterVote: async () => {
            h != null && (await g.query.invalidate(W, v));
          },
        })),
      (n[18] = v),
      (n[19] = O),
      (n[20] = l),
      (n[21] = E),
      (n[22] = g),
      (n[23] = m),
      (n[24] = h),
      (n[25] = a),
      (n[26] = u.conversationId),
      (n[27] = o),
      (n[28] = k))
    : (k = n[28]);
  let [A] = (0, Q.useState)(k),
    j,
    M;
  (n[29] !== A || n[30] !== a
    ? ((j = () => {
        A.hydrate(a);
      }),
      (M = [A, a]),
      (n[29] = A),
      (n[30] = a),
      (n[31] = j),
      (n[32] = M))
    : ((j = n[31]), (M = n[32])),
    (0, Q.useLayoutEffect)(j, M));
  let N, P;
  (n[33] === A
    ? ((N = n[34]), (P = n[35]))
    : ((N = () => (
        A.activate(),
        () => {
          A.dispose();
        }
      )),
      (P = [A]),
      (n[33] = A),
      (n[34] = N),
      (n[35] = P)),
    (0, Q.useEffect)(N, P));
  let F;
  n[36] === w ? (F = n[37]) : ((F = w ? [`share`, `log_event`] : [`log_event`]), (n[36] = w), (n[37] = F));
  let I = u.isStreaming,
    R;
  n[38] === r ? (R = n[39]) : ((R = ve(r)), (n[38] = r), (n[39] = R));
  let B = R,
    V;
  n[40] !== A.connect ||
  n[41] !== A.onAction ||
  n[42] !== f ||
  n[43] !== E ||
  n[44] !== a ||
  n[45] !== F ||
  n[46] !== B ||
  n[47] !== d ||
  n[48] !== u.isStreaming
    ? ((V = (0, $.jsx)(ae, {
        theme: d,
        customCss: f,
        initialState: a,
        supportedClientActions: F,
        streaming: I,
        widget: B,
        onLoad: A.connect,
        onAction: A.onAction,
        onError: E,
      })),
      (n[40] = A.connect),
      (n[41] = A.onAction),
      (n[42] = f),
      (n[43] = E),
      (n[44] = a),
      (n[45] = F),
      (n[46] = B),
      (n[47] = d),
      (n[48] = u.isStreaming),
      (n[49] = V))
    : (V = n[49]);
  let H;
  n[50] !== v.authMethod || n[51] !== h || n[52] !== a
    ? ((H =
        h != null && v.authMethod !== `chatgpt` && a.can_vote !== !0
          ? (0, $.jsx)(t, {
              onClick: te,
              children: (0, $.jsx)(s, {
                id: `chatgptConversations.interactivePoll.login`,
                defaultMessage: `Log in to vote`,
                description: `Button to log in before voting in a shared poll when anonymous voting is unavailable`,
              }),
            })
          : null),
      (n[50] = v.authMethod),
      (n[51] = h),
      (n[52] = a),
      (n[53] = H))
    : (H = n[53]);
  let U;
  return (
    n[54] !== V || n[55] !== H
      ? ((U = (0, $.jsxs)(`div`, {
          className: `my-3 flex w-full flex-col gap-3`,
          "data-testid": `interactive-poll`,
          children: [V, H],
        })),
        (n[54] = V),
        (n[55] = H),
        (n[56] = U))
      : (U = n[56]),
    U
  );
}
function ve(e) {
  let t = e.onClickAction;
  return e.type === `Button` && typeof t == `object` && t && `type` in t && t.type === `share`
    ? { type: `Show`, $when: `supportsClientAction("share")`, children: [e] }
    : Array.isArray(e.children)
      ? {
          ...e,
          children: e.children.map((e) =>
            typeof e == `object` && e && `type` in e && typeof e.type == `string`
              ? ve({ ...e, type: e.type })
              : e,
          ),
        }
      : e;
}
var Z, Q, $;
function ye() {
  return (ye = e(() => {
    ((Z = w()),
      V(),
      u(),
      (Q = D()),
      v(),
      m(),
      M(),
      I(),
      S(),
      y(),
      k(),
      d(),
      h(),
      j(),
      B(),
      oe(),
      ue(),
      J(),
      he(),
      ce(),
      ($ = E()));
  }))();
}
ye();
export { ge as InteractivePoll };
//# sourceMappingURL=renderer-11d91bfd39e4.js.map
