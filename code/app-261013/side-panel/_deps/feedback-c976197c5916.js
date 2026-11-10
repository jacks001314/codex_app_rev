import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _xt as r,
  i3 as i,
  ixt as a,
  jDt as o,
  r3 as s,
  t3 as c,
  vzt as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { ACn as d, Wut as f, Yut as p, jCn as m } from "./app-initial-5851df3f6cb1.js";
import { n as h, t as g } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as _, t as v } from "./loading-placeholder-b67a65de288c.js";
function y(e) {
  let t = (0, T.c)(5),
    { children: r, title: i } = e,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a =
        i ??
        (0, E.jsx)(n, {
          id: `restricted.aeonMessaging.activityHeading`,
          defaultMessage: `Recent activity`,
          description: `Heading for subtasks and subagents in the dot profile`,
        })),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== a
      ? ((o = (0, E.jsx)(g.Section, {
          sectionKey: `orbit-activity`,
          divider: !1,
          mode: `accordion`,
          title: a,
          children: r,
        })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function b() {
  let e = (0, T.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, E.jsx)(g.Item, {
          className: `select-none`,
          role: `status`,
          tone: `muted`,
          children: (0, E.jsx)(g.ItemLabel, {
            children: (0, E.jsx)(v, {
              children: (0, E.jsx)(n, {
                id: `restricted.aeonMessaging.activity.loading`,
                defaultMessage: `Loading activity`,
                description: `Loading announcement for the dot activity feed`,
              }),
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function x() {
  let e = (0, T.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, E.jsx)(g.Item, {
          className: `select-none`,
          role: `status`,
          tone: `muted`,
          children: (0, E.jsx)(g.ItemLabel, {
            children: (0, E.jsx)(n, {
              id: `restricted.aeonMessaging.activity.empty`,
              defaultMessage: `No recent activity`,
              description: `The dot has no recent tasks, chats, or scheduled activity to show in its profile`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function S(e) {
  let t = (0, T.c)(11),
    { isRetrying: r, onRetry: i } = e,
    a = r !== void 0 && r,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a
        ? (0, E.jsx)(g.ItemLeading, { "aria-hidden": !0, children: (0, E.jsx)(s, { as: `span` }) })
        : null),
      (t[0] = a),
      (t[1] = o));
  let c, l;
  t[2] === a
    ? ((c = t[3]), (l = t[4]))
    : ((c = (0, E.jsx)(g.ItemLabel, {
        children: a
          ? (0, E.jsx)(n, {
              id: `restricted.aeonMessaging.activity.retrying`,
              defaultMessage: `Retrying activity…`,
              description: `Status announced while retrying a failed dot activity request`,
            })
          : (0, E.jsx)(n, {
              id: `restricted.aeonMessaging.activity.error`,
              defaultMessage: `Couldn’t load activity`,
              description: `Error shown when the dot activity feed cannot be fetched`,
            }),
      })),
      (l = a
        ? null
        : (0, E.jsx)(g.ItemMeta, {
            children: (0, E.jsx)(n, {
              id: `restricted.aeonMessaging.activity.retry`,
              defaultMessage: `Try again`,
              description: `Retry loading dot activity after a failed request`,
            }),
          })),
      (t[2] = a),
      (t[3] = c),
      (t[4] = l));
  let u;
  return (
    t[5] !== a || t[6] !== i || t[7] !== o || t[8] !== c || t[9] !== l
      ? ((u = (0, E.jsx)(`div`, {
          role: `status`,
          children: (0, E.jsxs)(g.ItemButton, {
            className: `select-none`,
            disabled: a,
            onClick: i,
            children: [o, c, l],
          }),
        })),
        (t[5] = a),
        (t[6] = i),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function C(e) {
  let r = (0, T.c)(12),
    { state: i, isRetrying: a, onRetry: o } = e,
    s = a !== void 0 && a,
    c;
  r[0] === i
    ? (c = r[1])
    : ((c = (0, E.jsx)(n, {
        id: `orbit.activity.detail.feedback.title`,
        defaultMessage: `{state, select, archived {Couldn’t load this archived chat} missing {This chat is no longer available} empty {No messages yet} other {Couldn’t load this chat}}`,
        description: `Title for a chat preview that has no messages or cannot load. Archived means the chat is confirmed archived; missing means the server confirmed it cannot be found; error is a temporary or unknown failure.`,
        values: { state: i },
      })),
      (r[0] = i),
      (r[1] = c));
  let l = c,
    u;
  r[2] === i
    ? (u = r[3])
    : ((u = (0, E.jsx)(n, {
        id: `orbit.activity.detail.feedback.descriptionWithArchivedSettings`,
        defaultMessage: `{state, select, archived {We couldn’t retrieve its messages. View <archivedChats>archived chats</archivedChats>} missing {It may have been deleted or you may no longer have access} empty {This chat doesn’t have any messages to display} other {Check your connection and try again}}`,
        description: `Explanation beneath a chat preview’s empty or error state. The archivedChats tag opens the active archive surface or the Archived chats page in Settings.`,
        values: { state: i, archivedChats: w },
      })),
      (r[2] = i),
      (r[3] = u));
  let f = u,
    p;
  r[4] !== s || r[5] !== o || r[6] !== i
    ? ((p =
        i === `error` || i === `archived`
          ? (0, E.jsx)(t, {
              loading: s,
              disabled: s,
              onClick: o,
              children: (0, E.jsx)(n, {
                id: `orbit.activity.detail.feedback.retry`,
                defaultMessage: `Try again`,
                description: `Retry loading the chat preview’s messages`,
              }),
            })
          : null),
      (r[4] = s),
      (r[5] = o),
      (r[6] = i),
      (r[7] = p))
    : (p = r[7]);
  let m = p,
    h;
  return (
    r[8] !== m || r[9] !== f || r[10] !== l
      ? ((h = (0, E.jsx)(`div`, {
          className: `flex min-h-0 flex-1`,
          role: `status`,
          children: (0, E.jsx)(d, { className: `flex-1`, title: l, description: f, actions: m }),
        })),
        (r[8] = m),
        (r[9] = f),
        (r[10] = l),
        (r[11] = h))
      : (h = r[11]),
    h
  );
}
function w(e) {
  return (0, E.jsx)(a, { className: `underline`, to: f, children: e }, `archivedChats`);
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = l()), o(), r(), c(), m(), i(), p(), h(), _(), (E = u()));
  }))();
}
export { y as a, b as i, x as n, D as o, S as r, C as t };
//# sourceMappingURL=feedback-c976197c5916.js.map
