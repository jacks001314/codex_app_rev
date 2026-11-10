import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Mz as r,
  Nz as i,
  _O as a,
  bl as o,
  cO as s,
  fO as c,
  gO as l,
  jDt as u,
  lO as d,
  mO as f,
  oO as p,
  t3 as m,
  vO as h,
  vzt as g,
  xMt as _,
  yl as v,
  yzt as y,
} from "./app-shared-bbfeca5e5737.js";
function b(e) {
  let i = (0, C.c)(35),
    { presentation: c, onClose: u, onUpgradeAfterClose: m } = e,
    { variant: h } = c,
    g = h === `thinking` || h === `instant`,
    _ = (0, w.useRef)(null),
    v;
  i[0] === u
    ? (v = i[1])
    : ((v = (e) => {
        e || u();
      }),
      (i[0] = u),
      (i[1] = v));
  let y;
  i[2] === m
    ? (y = i[3])
    : ((y = {
        onCloseAutoFocus: (e) => {
          let t = _.current;
          ((_.current = null), t != null && (e.preventDefault(), m(t)));
        },
      }),
      (i[2] = m),
      (i[3] = y));
  let b;
  i[4] === c
    ? (b = i[5])
    : ((b = (0, T.jsx)(s, { title: (0, T.jsx)(a, { children: (0, T.jsx)(x, { presentation: c }) }) })),
      (i[4] = c),
      (i[5] = b));
  let E;
  i[6] === c
    ? (E = i[7])
    : ((E = (0, T.jsx)(d, {
        children: (0, T.jsx)(l, {
          asChild: !0,
          children: (0, T.jsx)(`div`, {
            className: `flex flex-col gap-3 text-sm text-secondary`,
            children: (0, T.jsx)(S, { presentation: c }),
          }),
        }),
      })),
      (i[6] = c),
      (i[7] = E));
  let D;
  i[8] === u
    ? (D = i[9])
    : ((D = (e) => {
        _.current ?? ((_.current = e), u());
      }),
      (i[8] = u),
      (i[9] = D));
  let O;
  i[10] === g
    ? (O = i[11])
    : ((O =
        g &&
        (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(r, { asset: o }),
            (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.upgradeToPlus`,
              defaultMessage: `Upgrade to Plus`,
              description: `Opens existing Plus upgrade options after a first message limit`,
            }),
          ],
        })),
      (i[10] = g),
      (i[11] = O));
  let k;
  i[12] !== g || i[13] !== h
    ? ((k =
        !g &&
        (h === `plan_intro`
          ? (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.comparePlans`,
              defaultMessage: `Compare plans`,
              description: `Primary button from the first-limit plan introduction to existing upgrade options`,
            })
          : (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.upgradePlan`,
              defaultMessage: `Upgrade plan`,
              description: `Primary button from the first-limit notice to the existing upgrade flow`,
            }))),
      (i[12] = g),
      (i[13] = h),
      (i[14] = k))
    : (k = i[14]);
  let A;
  i[15] !== D || i[16] !== O || i[17] !== k
    ? ((A = (0, T.jsxs)(t, {
        className: `justify-center`,
        color: `accentSubtle`,
        radius: `full`,
        size: `dialog`,
        onClick: D,
        children: [O, k],
      })),
      (i[15] = D),
      (i[16] = O),
      (i[17] = k),
      (i[18] = A))
    : (A = i[18]);
  let j;
  i[19] === g
    ? (j = i[20])
    : ((j = g
        ? (0, T.jsx)(n, {
            id: `chatgptConversations.firstLimit.continueChatting`,
            defaultMessage: `Continue with less intelligence`,
            description: `Dismisses the message-limit introduction and returns to the existing conversation`,
          })
        : (0, T.jsx)(n, {
            id: `chatgptConversations.firstLimit.gotIt`,
            defaultMessage: `Got it`,
            description: `Dismisses the first-limit introduction and returns to the conversation`,
          })),
      (i[19] = g),
      (i[20] = j));
  let M;
  i[21] !== u || i[22] !== j
    ? ((M = (0, T.jsx)(t, {
        className: `justify-center`,
        color: `ghost`,
        radius: `full`,
        size: `dialog`,
        onClick: u,
        children: j,
      })),
      (i[21] = u),
      (i[22] = j),
      (i[23] = M))
    : (M = i[23]);
  let N;
  i[24] !== M || i[25] !== A
    ? ((N = (0, T.jsx)(d, {
        children: (0, T.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [A, M] }),
      })),
      (i[24] = M),
      (i[25] = A),
      (i[26] = N))
    : (N = i[26]);
  let P;
  i[27] !== N || i[28] !== b || i[29] !== E
    ? ((P = (0, T.jsxs)(p, {
        className: `select-none`,
        "data-testid": `first-rate-limit-nux`,
        children: [b, E, N],
      })),
      (i[27] = N),
      (i[28] = b),
      (i[29] = E),
      (i[30] = P))
    : (P = i[30]);
  let F;
  return (
    i[31] !== v || i[32] !== P || i[33] !== y
      ? ((F = (0, T.jsx)(f, {
          open: !0,
          variant: `chatgpt`,
          size: `compact`,
          onOpenChange: v,
          contentProps: y,
          children: P,
        })),
        (i[31] = v),
        (i[32] = P),
        (i[33] = y),
        (i[34] = F))
      : (F = i[34]),
    F
  );
}
function x(e) {
  let t = (0, C.c)(4),
    { presentation: r } = e;
  switch (r.variant) {
    case `thinking`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.thinkingTitle`,
              defaultMessage: `You’re out of messages with advanced intelligence`,
              description: `Title at a Free plan message limit for the Thinking model`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `instant`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.instantTitle`,
              defaultMessage: `You’re out of messages with standard intelligence`,
              description: `Title at a Free plan message limit for the Instant model`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `plan_intro`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.planTitle`,
              defaultMessage: `What’s in your Free plan`,
              description: `Title explaining the Free plan when a person reaches their first usage limit`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `limit_reached`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(n, {
              id: `chatgptConversations.firstLimit.limitTitle`,
              defaultMessage: `You’ve reached a limit`,
              description: `Title shown at a person's first Free plan usage limit`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function S(e) {
  let t = (0, C.c)(8),
    { presentation: r } = e;
  switch (r.variant) {
    case `thinking`: {
      let e;
      return (
        t[0] !== r.resetDay || t[1] !== r.resetTime
          ? ((e = (0, T.jsx)(`p`, {
              children: (0, T.jsx)(n, {
                id: `chatgptConversations.firstLimit.thinkingDescription`,
                defaultMessage: `Keep chatting with less detail and precision until usage resets {resetDay, select, today {at {resetTime, time, short}} other {on {resetTime, date, medium} at {resetTime, time, short}}}, or upgrade for expanded access.`,
                description: `Explains continued chatting after a Thinking message limit; resetTime is the server reset timestamp; resetDay chooses time only for today or date and time for a later day`,
                values: { resetTime: r.resetTime, resetDay: r.resetDay },
              }),
            })),
            (t[0] = r.resetDay),
            (t[1] = r.resetTime),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `instant`: {
      let e;
      return (
        t[3] !== r.resetDay || t[4] !== r.resetTime
          ? ((e = (0, T.jsx)(`p`, {
              children: (0, T.jsx)(n, {
                id: `chatgptConversations.firstLimit.instantDescription`,
                defaultMessage: `Keep chatting with basic intelligence until usage resets {resetDay, select, today {at {resetTime, time, short}} other {on {resetTime, date, medium} at {resetTime, time, short}}}, or upgrade for expanded access.`,
                description: `Explains continued chatting after an Instant message limit; resetTime is the server reset timestamp; resetDay chooses time only for today or date and time for a later day`,
                values: { resetTime: r.resetTime, resetDay: r.resetDay },
              }),
            })),
            (t[3] = r.resetDay),
            (t[4] = r.resetTime),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `plan_intro`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsxs)(T.Fragment, {
              children: [
                (0, T.jsx)(`p`, {
                  children: (0, T.jsx)(n, {
                    id: `chatgptConversations.firstLimit.planUsage`,
                    defaultMessage: `The free version of ChatGPT includes a limited amount of usage that runs out periodically.`,
                    description: `Explains periodic usage limits in the first-limit Free plan introduction`,
                  }),
                }),
                (0, T.jsx)(`p`, {
                  children: (0, T.jsx)(n, {
                    id: `chatgptConversations.firstLimit.planUpgrade`,
                    defaultMessage: `Upgrade for extended usage, more memory, and advanced capabilities.`,
                    description: `Explains paid plan benefits in the first-limit Free plan introduction`,
                  }),
                }),
              ],
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
    case `limit_reached`: {
      let e;
      return (
        t[7] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(`p`, {
              children: (0, T.jsx)(n, {
                id: `chatgptConversations.firstLimit.limitDescription`,
                defaultMessage: `Some features on your Free plan may be unavailable until usage resets. Upgrade for more usage and advanced features.`,
                description: `Explains the reset and upgrade choices after a person's first Free plan limit`,
              }),
            })),
            (t[7] = e))
          : (e = t[7]),
        e
      );
    }
  }
}
var C, w, T;
function E() {
  return (E = e(() => {
    ((C = g()), v(), (w = y()), u(), m(), h(), c(), i(), (T = _()));
  }))();
}
E();
export { b as FirstLimitDialog };
//# sourceMappingURL=dialog-c561c5fd51e3.js.map
