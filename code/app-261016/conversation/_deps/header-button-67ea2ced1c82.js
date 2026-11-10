import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  AB as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  MNt as u,
  NNt as d,
  PBt as f,
  Qst as p,
  RO as m,
  WO as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  kB as b,
  nCt as x,
  qO as S,
  tkt as C,
  zO as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as T,
  BFt as E,
  D5n as D,
  FOt as O,
  IOt as k,
  IXt as A,
  LOt as j,
  LXt as M,
  MOt as N,
  NOt as P,
  OOt as F,
  POt as I,
  RXt as L,
  XGn as R,
  ZGn as z,
  kOt as B,
  zFt as V,
} from "./app-initial-ad16eaadf81f.js";
function H(e) {
  let n = (0, U.c)(19),
    { hostId: i, onClose: o, rateLimitStatus: c } = e,
    d = t(p),
    f = r(),
    g = x(L, i),
    v = c.rate_limit_upsell;
  if (!g || v == null) return null;
  let y = !f && `-mb-6`,
    b;
  n[0] === y ? (b = n[1]) : ((b = u(`block w-full scale-105 object-cover`, y)), (n[0] = y), (n[1] = b));
  let T = f ? K : G,
    E;
  n[2] !== b || n[3] !== T
    ? ((E = (0, W.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, W.jsx)(`img`, { alt: ``, "aria-hidden": `true`, className: b, src: T }),
      })),
      (n[2] = b),
      (n[3] = T),
      (n[4] = E))
    : (E = n[4]);
  let D;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, W.jsx)(S, {
        className: `contents`,
        children: (0, W.jsx)(C, {
          id: `codex.lunaReserve.dialog.title`,
          defaultMessage: `Regain access to our most powerful models`,
          description: `Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders.`,
        }),
      })),
      (n[5] = D))
    : (D = n[5]);
  let A;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, W.jsx)(w, {
        className: `items-center pb-2`,
        children: (0, W.jsx)(m, {
          className: `items-center`,
          titleClassName: `text-center`,
          subtitleTone: `secondary`,
          subtitleClassName: `text-center`,
          title: D,
          subtitle: (0, W.jsx)(s, {
            className: `contents`,
            children: (0, W.jsx)(C, {
              id: `codex.lunaReserve.dialog.description`,
              defaultMessage: `You are now chatting with Luna. Continue to access our most capable models.`,
              description: `Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders.`,
            }),
          }),
        }),
      })),
      (n[6] = A))
    : (A = n[6]);
  let j;
  n[7] !== v.ctas || n[8] !== o || n[9] !== d
    ? ((j = (e) =>
        (0, W.jsx)(`div`, {
          className: `self-center`,
          children: (0, W.jsx)(l, {
            expandSingleButton: !1,
            children: v.ctas
              .map((t, n) => {
                if (!P(t.action)) return null;
                let r = e.actions[t.action];
                return (0, W.jsx)(
                  _,
                  {
                    color: n === 0 ? `primary` : `secondary`,
                    disabled: r.disabled,
                    size: `large`,
                    onClick: (e) => {
                      (O(d, {
                        action: k.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED,
                        ctaAction: t.action,
                        source: `details_modal`,
                      }),
                        r.log(),
                        o(),
                        r.onClick(e));
                    },
                    children: r.label ?? t.label,
                  },
                  `${t.action}:${n}`,
                );
              })
              .reverse(),
          }),
        })),
      (n[7] = v.ctas),
      (n[8] = o),
      (n[9] = d),
      (n[10] = j))
    : (j = n[10]);
  let M;
  n[11] !== v || n[12] !== c || n[13] !== j
    ? ((M = (0, W.jsxs)(a, {
        children: [
          A,
          (0, W.jsx)(w, {
            className: `items-center`,
            children: (0, W.jsx)(F, { banner: v, rateLimitStatus: c, renderContent: j }),
          }),
        ],
      })),
      (n[11] = v),
      (n[12] = c),
      (n[13] = j),
      (n[14] = M))
    : (M = n[14]);
  let N;
  return (
    n[15] !== o || n[16] !== E || n[17] !== M
      ? ((N = (0, W.jsxs)(h, { open: !0, size: `default`, onOpenChange: o, children: [E, M] })),
        (n[15] = o),
        (n[16] = E),
        (n[17] = M),
        (n[18] = N))
      : (N = n[18]),
    N
  );
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = f()),
      j(),
      d(),
      y(),
      g(),
      v(),
      o(),
      i(),
      N(),
      B(),
      n(),
      b(),
      I(),
      M(),
      (W = c()),
      (G = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png`),
      (K = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png`));
  }))();
}
function J(e) {
  let n = (0, Y.c)(7),
    { hostId: r } = e,
    i = t(p);
  if (!x(L, r)) return null;
  let a;
  n[0] !== r || n[1] !== i
    ? ((a = () => {
        O(i, {
          action: k.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED,
          source: `thread_header`,
        });
        let e = i.query.getData(z);
        if (e != null) {
          (T(i, H, { hostId: r, rateLimitStatus: e }),
            O(i, { action: k.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED, source: `details_modal` }));
          return;
        }
        O(i, {
          action: k.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR,
          errorCode: `missing_usage_status`,
          source: `thread_header`,
        });
      }),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a))
    : (a = n[2]);
  let o;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`span`, { "aria-hidden": `true`, className: `text-chart-yellow`, children: A })),
      (n[3] = o))
    : (o = n[3]);
  let s;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsxs)(V, {
        variant: `reserve`,
        children: [
          o,
          (0, X.jsx)(`span`, {
            className: `brightness-75 dark:brightness-100`,
            children: (0, X.jsx)(C, {
              id: `codex.lunaReserve.header.label`,
              defaultMessage: `Luna reserve`,
              description: `Short label on the Codex or Work thread-header badge on desktop and web while the user is using their separate Luna Reserve allowance. Clicking the badge opens the backend-provided Luna Reserve explanation and available account actions.`,
            }),
          }),
        ],
      })),
      (n[4] = s))
    : (s = n[4]);
  let c;
  return (
    n[5] === a
      ? (c = n[6])
      : ((c = (0, X.jsx)(_, { color: `ghostMuted`, size: `inline`, onClick: a, children: s })),
        (n[5] = a),
        (n[6] = c)),
    c
  );
}
var Y, X;
function Z() {
  return (Z = e(() => {
    ((Y = f()), j(), y(), g(), E(), v(), D(), R(), n(), I(), q(), M(), (X = c()));
  }))();
}
export { Z as n, J as t };
//# sourceMappingURL=header-button-67ea2ced1c82.js.map
