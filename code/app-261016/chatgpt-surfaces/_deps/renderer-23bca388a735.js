import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  HFt as r,
  LNt as i,
  LRt as a,
  NSt as o,
  ORt as s,
  PBt as c,
  PSt as l,
  RFt as u,
  SLt as d,
  ULt as f,
  VRt as p,
  Vrt as m,
  XOt as h,
  Y3 as g,
  Z3 as _,
  ZSt as v,
  gB as y,
  hB as b,
  hRt as x,
  kRt as S,
  nCt as C,
  nzt as w,
  okt as ee,
  qrt as te,
  tkt as ne,
  uRt as T,
  zFt as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as E,
  JXn as ie,
  MOr as D,
  VPn as O,
  YXn as k,
  hzr as ae,
  iRr as A,
  imr as j,
  n0n as oe,
  nzr as M,
  pFn as se,
  rmr as N,
  tyr as P,
  xMr as F,
  yMr as I,
  zOr as L,
} from "./app-initial-ad16eaadf81f.js";
import { r as ce } from "./index-CgCByfHL-75eb9ffc0dda.js";
import { t as R } from "./dist-83bbd9851c56.js";
import { $s as z, Qs as B } from "./app-primary-3e00728c2a4c.js";
import { i as le, l as V } from "./file-104b558ed320.js";
import { n as ue, r as de, t as fe } from "./preview-83c3b632411a.js";
import { i as pe, n as me, r as he } from "./widget-share-85246dc9da35.js";
function ge(e, t, n) {
  let r = W.safeParse(n);
  if (r.success)
    try {
      F(e, B, {
        eventName: r.data.event_name,
        eventData: JSON.stringify({ turn_message_id: t, ...r.data.event_data }),
      });
    } catch {}
}
var H, U, W;
function G() {
  return (G = e(() => {
    (z(),
      r(),
      I(),
      (H = S({
        widget_name: x(`create_interactive_poll`),
        poll_id: w(),
        surface: d([`conversation`, `shared_post`]),
      })),
      (U = { draft_edit_analytics_version: x(1), draft_edit_renderer: x(`dil_v1`) }),
      (W = f(`event_name`, [
        S({
          event_name: x(`chatgpt_interactive_poll_visible`),
          event_data: H.extend({
            shared_post_id: p()
              .regex(/^[a-z]{1,10}_[0-9a-f]{32}$/)
              .nullish(),
            role: d([`creator`, `receiver`]),
            lifecycle: d([`draft`, `published`, `closed`]),
            presentation: x(`poll`),
            draft_edit_analytics_version: U.draft_edit_analytics_version.optional(),
            draft_edit_renderer: U.draft_edit_renderer.optional(),
          }),
        }),
        S({
          event_name: x(`chatgpt_interactive_poll_draft_edited`),
          event_data: H.extend({
            ...U,
            edit_kind: d([
              `question_changed`,
              `option_added`,
              `option_removed`,
              `option_text_changed`,
              `multiple_votes_changed`,
            ]),
            option_count: s().int().min(0).max(20),
          }),
        }),
      ])));
  }))();
}
function _e({
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
      if (!q.has(a.type)) return;
      let o = v.signal,
        p = m;
      ((g = !0), f.setState({ action_pending: !0 }));
      try {
        if (i != null && a.type !== `interactive_poll_vote`)
          throw Error(`Only voting is available on shared polls`);
        (a.type === `interactive_poll_vote` && (await u()), o.throwIfAborted());
        let s = K.parse(a.payload ?? {}),
          c;
        if (i != null)
          c = await A.safePost(`/widget_server_action/public`, {
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
          c = await A.safePost(`/widget_server_action`, {
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
var K, q;
function J() {
  return (J = e(() => {
    (r(),
      P(),
      (K = a(p(), T())),
      (q = new Set([
        `interactive_poll_initialize`,
        `interactive_poll_publish`,
        `interactive_poll_vote`,
        `interactive_poll_refresh`,
      ])));
  }))();
}
function ve(e) {
  let n = (0, X.c)(9),
    r = t(D),
    i = j(),
    a = C(E, e.turn.conversationId),
    o;
  n[0] === r.value.pathname
    ? (o = n[1])
    : ((o = l(`/s/:postId`, r.value.pathname)?.params.postId), (n[0] = r.value.pathname), (n[1] = o));
  let s = o;
  if (i.isLoading || (a == null && s == null)) {
    let t;
    return (
      n[2] === e.state
        ? (t = n[3])
        : ((t = (0, Q.jsx)(fe, { state: e.state })), (n[2] = e.state), (n[3] = t)),
      t
    );
  }
  let c = `${i.userId}:${i.accountId}:${a}:${s}`,
    u;
  return (
    n[4] !== e || n[5] !== a || n[6] !== s || n[7] !== c
      ? ((u = (0, Q.jsx)(ye, { ...e, serverId: a, sharedPostId: s }, c)),
        (n[4] = e),
        (n[5] = a),
        (n[6] = s),
        (n[7] = c),
        (n[8] = u))
      : (u = n[8]),
    u
  );
}
function ye(e) {
  let n = (0, X.c)(57),
    {
      widget: r,
      state: i,
      widgetRefId: a,
      messageId: o,
      turn: s,
      theme: c,
      customCss: l,
      serverId: u,
      sharedPostId: d,
    } = e,
    f = t(D),
    p = j(),
    m = ee(),
    h;
  n[0] === a ? (h = n[1]) : ((h = a.match(/:(\d+)$/)?.[1]), (n[0] = a), (n[1] = h));
  let _ = h,
    v = _ == null ? -1 : Number(_),
    b;
  n[2] !== v || n[3] !== o || n[4] !== f.value.pathname || n[5] !== u || n[6] !== s
    ? ((b = me(s, { serverId: u, pathname: f.value.pathname, messageId: o, contentReferenceIndex: v })),
      (n[2] = v),
      (n[3] = o),
      (n[4] = f.value.pathname),
      (n[5] = u),
      (n[6] = s),
      (n[7] = b))
    : (b = n[7]);
  let x = b,
    S;
  n[8] !== m || n[9] !== f
    ? ((S = function (e, t) {
        (re.warning(`Interactive poll action failed`, { safe: {}, sensitive: { error: e } }),
          f
            .get(te)
            .danger(
              t ??
                m.formatMessage({
                  id: `chatgptConversations.interactivePoll.actionFailed`,
                  defaultMessage: `Your poll change couldn’t be saved. Please try again`,
                  description: `Error after publishing, saving, or voting on an interactive poll fails`,
                }),
              { errorAnalytics: { toastId: `chatgptConversations.interactivePoll.actionFailed` } },
            ));
      }),
      (n[8] = m),
      (n[9] = f),
      (n[10] = S))
    : (S = n[10]);
  let C = S,
    w;
  n[11] !== v || n[12] !== o || n[13] !== f || n[14] !== c || n[15] !== s || n[16] !== r
    ? ((w = (e) => {
        e.lifecycle === `published` &&
          pe(f, s, {
            messageId: o,
            contentReferenceIndex: v,
            metadata: { widgetType: `dil`, widgetName: `create_interactive_poll` },
            preview: (0, Q.jsx)(ue, { theme: c, state: e, widget: r }),
            title: typeof e.question == `string` ? e.question : null,
          });
      }),
      (n[11] = v),
      (n[12] = o),
      (n[13] = f),
      (n[14] = c),
      (n[15] = s),
      (n[16] = r),
      (n[17] = w))
    : (w = n[17]);
  let T = y(w),
    E;
  n[18] !== p ||
  n[19] !== T ||
  n[20] !== o ||
  n[21] !== C ||
  n[22] !== f ||
  n[23] !== u ||
  n[24] !== d ||
  n[25] !== i ||
  n[26] !== s.conversationId ||
  n[27] !== a
    ? ((E = () =>
        _e({
          accountId: p.accountId,
          conversationId: u,
          messageId: o,
          widgetRefId: a,
          sharedPostId: d,
          initialState: i,
          onError: C,
          onShare: T,
          onLogEvent: (e) => ge(f, o, e),
          onConfirmedState: (e) => {
            if (d != null) return;
            let t = f.get(oe, s.conversationId)?.[o]?.message;
            if (t == null) return;
            let n = ie(t.metadata);
            se(f, s.conversationId, {
              ...t,
              metadata: { ...t.metadata, view_state: { ...n, widgets: { ...n?.widgets, [a]: e } } },
            });
          },
          beforeVote: async () => {
            d != null && (await f.query.cancel(V, p));
          },
          afterVote: async () => {
            d != null && (await f.query.invalidate(V, p));
          },
        })),
      (n[18] = p),
      (n[19] = T),
      (n[20] = o),
      (n[21] = C),
      (n[22] = f),
      (n[23] = u),
      (n[24] = d),
      (n[25] = i),
      (n[26] = s.conversationId),
      (n[27] = a),
      (n[28] = E))
    : (E = n[28]);
  let [O] = (0, Z.useState)(E),
    k,
    A;
  (n[29] !== O || n[30] !== i
    ? ((k = () => {
        O.hydrate(i);
      }),
      (A = [O, i]),
      (n[29] = O),
      (n[30] = i),
      (n[31] = k),
      (n[32] = A))
    : ((k = n[31]), (A = n[32])),
    (0, Z.useLayoutEffect)(k, A));
  let M, N;
  (n[33] === O
    ? ((M = n[34]), (N = n[35]))
    : ((M = () => (
        O.activate(),
        () => {
          O.dispose();
        }
      )),
      (N = [O]),
      (n[33] = O),
      (n[34] = M),
      (n[35] = N)),
    (0, Z.useEffect)(M, N));
  let P;
  n[36] === x ? (P = n[37]) : ((P = x ? [`share`, `log_event`] : [`log_event`]), (n[36] = x), (n[37] = P));
  let F = s.isStreaming,
    I;
  n[38] === r ? (I = n[39]) : ((I = Y(r)), (n[38] = r), (n[39] = I));
  let L = I,
    R;
  n[40] !== O.connect ||
  n[41] !== O.onAction ||
  n[42] !== l ||
  n[43] !== C ||
  n[44] !== i ||
  n[45] !== P ||
  n[46] !== L ||
  n[47] !== c ||
  n[48] !== s.isStreaming
    ? ((R = (0, Q.jsx)(ce, {
        theme: c,
        customCss: l,
        initialState: i,
        supportedClientActions: P,
        streaming: F,
        widget: L,
        onLoad: O.connect,
        onAction: O.onAction,
        onError: C,
      })),
      (n[40] = O.connect),
      (n[41] = O.onAction),
      (n[42] = l),
      (n[43] = C),
      (n[44] = i),
      (n[45] = P),
      (n[46] = L),
      (n[47] = c),
      (n[48] = s.isStreaming),
      (n[49] = R))
    : (R = n[49]);
  let z;
  n[50] !== p.authMethod || n[51] !== d || n[52] !== i
    ? ((z =
        d != null && p.authMethod !== `chatgpt` && i.can_vote !== !0
          ? (0, Q.jsx)(g, {
              onClick: ae,
              children: (0, Q.jsx)(ne, {
                id: `chatgptConversations.interactivePoll.login`,
                defaultMessage: `Log in to vote`,
                description: `Button to log in before voting in a shared poll when anonymous voting is unavailable`,
              }),
            })
          : null),
      (n[50] = p.authMethod),
      (n[51] = d),
      (n[52] = i),
      (n[53] = z))
    : (z = n[53]);
  let B;
  return (
    n[54] !== R || n[55] !== z
      ? ((B = (0, Q.jsxs)(`div`, {
          className: `my-3 flex w-full flex-col gap-3`,
          "data-testid": `interactive-poll`,
          children: [R, z],
        })),
        (n[54] = R),
        (n[55] = z),
        (n[56] = B))
      : (B = n[56]),
    B
  );
}
function Y(e) {
  let t = e.onClickAction;
  return e.type === `Button` && typeof t == `object` && t && `type` in t && t.type === `share`
    ? { type: `Show`, $when: `supportsClientAction("share")`, children: [e] }
    : Array.isArray(e.children)
      ? {
          ...e,
          children: e.children.map((e) =>
            typeof e == `object` && e && `type` in e && typeof e.type == `string`
              ? Y({ ...e, type: e.type })
              : e,
          ),
        }
      : e;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = c()),
      R(),
      v(),
      (Z = n()),
      h(),
      o(),
      M(),
      N(),
      _(),
      m(),
      L(),
      u(),
      b(),
      k(),
      O(),
      le(),
      he(),
      G(),
      J(),
      de(),
      (Q = i()));
  }))();
}
$();
export { ve as InteractivePoll };
//# sourceMappingURL=renderer-23bca388a735.js.map
