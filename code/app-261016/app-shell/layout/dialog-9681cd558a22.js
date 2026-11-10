import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  FBt as n,
  HO as r,
  IO as i,
  JO as a,
  KO as o,
  LNt as s,
  OB as c,
  PBt as l,
  RO as u,
  WO as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  iu as h,
  qO as g,
  ru as _,
  tkt as v,
  zO as y,
} from "./app-shared-2feb3d4c6fcc.js";
function b(e) {
  let n = (0, C.c)(35),
    { presentation: r, onClose: a, onUpgradeAfterClose: s } = e,
    { variant: c } = r,
    l = c === `thinking` || c === `instant`,
    f = (0, w.useRef)(null),
    m;
  n[0] === a
    ? (m = n[1])
    : ((m = (e) => {
        e || a();
      }),
      (n[0] = a),
      (n[1] = m));
  let _;
  n[2] === s
    ? (_ = n[3])
    : ((_ = {
        onCloseAutoFocus: (e) => {
          let t = f.current;
          ((f.current = null), t != null && (e.preventDefault(), s(t)));
        },
      }),
      (n[2] = s),
      (n[3] = _));
  let b;
  n[4] === r
    ? (b = n[5])
    : ((b = (0, T.jsx)(u, { title: (0, T.jsx)(g, { children: (0, T.jsx)(x, { presentation: r }) }) })),
      (n[4] = r),
      (n[5] = b));
  let E;
  n[6] === r
    ? (E = n[7])
    : ((E = (0, T.jsx)(y, {
        children: (0, T.jsx)(o, {
          asChild: !0,
          children: (0, T.jsx)(`div`, {
            className: `flex flex-col gap-3 text-sm text-secondary`,
            children: (0, T.jsx)(S, { presentation: r }),
          }),
        }),
      })),
      (n[6] = r),
      (n[7] = E));
  let D;
  n[8] === a
    ? (D = n[9])
    : ((D = (e) => {
        f.current ?? ((f.current = e), a());
      }),
      (n[8] = a),
      (n[9] = D));
  let O;
  n[10] === l
    ? (O = n[11])
    : ((O =
        l &&
        (0, T.jsxs)(T.Fragment, {
          children: [
            (0, T.jsx)(t, { asset: h }),
            (0, T.jsx)(v, {
              id: `chatgptConversations.firstLimit.upgradeToPlus`,
              defaultMessage: `Upgrade to Plus`,
              description: `Opens existing Plus upgrade options after a first message limit`,
            }),
          ],
        })),
      (n[10] = l),
      (n[11] = O));
  let k;
  n[12] !== l || n[13] !== c
    ? ((k =
        !l &&
        (c === `plan_intro`
          ? (0, T.jsx)(v, {
              id: `chatgptConversations.firstLimit.comparePlans`,
              defaultMessage: `Compare plans`,
              description: `Primary button from the first-limit plan introduction to existing upgrade options`,
            })
          : (0, T.jsx)(v, {
              id: `chatgptConversations.firstLimit.upgradePlan`,
              defaultMessage: `Upgrade plan`,
              description: `Primary button from the first-limit notice to the existing upgrade flow`,
            }))),
      (n[12] = l),
      (n[13] = c),
      (n[14] = k))
    : (k = n[14]);
  let A;
  n[15] !== D || n[16] !== O || n[17] !== k
    ? ((A = (0, T.jsxs)(p, {
        className: `justify-center`,
        color: `accentSubtle`,
        radius: `full`,
        size: `dialog`,
        onClick: D,
        children: [O, k],
      })),
      (n[15] = D),
      (n[16] = O),
      (n[17] = k),
      (n[18] = A))
    : (A = n[18]);
  let j;
  n[19] === l
    ? (j = n[20])
    : ((j = l
        ? (0, T.jsx)(v, {
            id: `chatgptConversations.firstLimit.continueChatting`,
            defaultMessage: `Continue with less intelligence`,
            description: `Dismisses the message-limit introduction and returns to the existing conversation`,
          })
        : (0, T.jsx)(v, {
            id: `chatgptConversations.firstLimit.gotIt`,
            defaultMessage: `Got it`,
            description: `Dismisses the first-limit introduction and returns to the conversation`,
          })),
      (n[19] = l),
      (n[20] = j));
  let M;
  n[21] !== a || n[22] !== j
    ? ((M = (0, T.jsx)(p, {
        className: `justify-center`,
        color: `ghost`,
        radius: `full`,
        size: `dialog`,
        onClick: a,
        children: j,
      })),
      (n[21] = a),
      (n[22] = j),
      (n[23] = M))
    : (M = n[23]);
  let N;
  n[24] !== M || n[25] !== A
    ? ((N = (0, T.jsx)(y, {
        children: (0, T.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [A, M] }),
      })),
      (n[24] = M),
      (n[25] = A),
      (n[26] = N))
    : (N = n[26]);
  let P;
  n[27] !== N || n[28] !== b || n[29] !== E
    ? ((P = (0, T.jsxs)(i, {
        className: `select-none`,
        "data-testid": `first-rate-limit-nux`,
        children: [b, E, N],
      })),
      (n[27] = N),
      (n[28] = b),
      (n[29] = E),
      (n[30] = P))
    : (P = n[30]);
  let F;
  return (
    n[31] !== m || n[32] !== P || n[33] !== _
      ? ((F = (0, T.jsx)(d, {
          open: !0,
          variant: `chatgpt`,
          size: `compact`,
          onOpenChange: m,
          contentProps: _,
          children: P,
        })),
        (n[31] = m),
        (n[32] = P),
        (n[33] = _),
        (n[34] = F))
      : (F = n[34]),
    F
  );
}
function x(e) {
  let t = (0, C.c)(4),
    { presentation: n } = e;
  switch (n.variant) {
    case `thinking`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, T.jsx)(v, {
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
          ? ((e = (0, T.jsx)(v, {
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
          ? ((e = (0, T.jsx)(v, {
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
          ? ((e = (0, T.jsx)(v, {
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
    { presentation: n } = e;
  switch (n.variant) {
    case `thinking`: {
      let e;
      return (
        t[0] !== n.resetDay || t[1] !== n.resetTime
          ? ((e = (0, T.jsx)(`p`, {
              children: (0, T.jsx)(v, {
                id: `chatgptConversations.firstLimit.thinkingDescription`,
                defaultMessage: `Keep chatting with less detail and precision until usage resets {resetDay, select, today {at {resetTime, time, short}} other {on {resetTime, date, medium} at {resetTime, time, short}}}, or upgrade for expanded access.`,
                description: `Explains continued chatting after a Thinking message limit; resetTime is the server reset timestamp; resetDay chooses time only for today or date and time for a later day`,
                values: { resetTime: n.resetTime, resetDay: n.resetDay },
              }),
            })),
            (t[0] = n.resetDay),
            (t[1] = n.resetTime),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `instant`: {
      let e;
      return (
        t[3] !== n.resetDay || t[4] !== n.resetTime
          ? ((e = (0, T.jsx)(`p`, {
              children: (0, T.jsx)(v, {
                id: `chatgptConversations.firstLimit.instantDescription`,
                defaultMessage: `Keep chatting with basic intelligence until usage resets {resetDay, select, today {at {resetTime, time, short}} other {on {resetTime, date, medium} at {resetTime, time, short}}}, or upgrade for expanded access.`,
                description: `Explains continued chatting after an Instant message limit; resetTime is the server reset timestamp; resetDay chooses time only for today or date and time for a later day`,
                values: { resetTime: n.resetTime, resetDay: n.resetDay },
              }),
            })),
            (t[3] = n.resetDay),
            (t[4] = n.resetTime),
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
                  children: (0, T.jsx)(v, {
                    id: `chatgptConversations.firstLimit.planUsage`,
                    defaultMessage: `The free version of ChatGPT includes a limited amount of usage that runs out periodically.`,
                    description: `Explains periodic usage limits in the first-limit Free plan introduction`,
                  }),
                }),
                (0, T.jsx)(`p`, {
                  children: (0, T.jsx)(v, {
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
              children: (0, T.jsx)(v, {
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
    ((C = l()), _(), (w = n()), f(), m(), a(), r(), c(), (T = s()));
  }))();
}
E();
export { b as FirstLimitDialog };
//# sourceMappingURL=dialog-9681cd558a22.js.map
