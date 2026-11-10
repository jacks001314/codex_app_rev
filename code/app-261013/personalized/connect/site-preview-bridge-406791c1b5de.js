const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-pending-site-preview-8e8ce5dba2d9.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./site-preview-request-a63df11a6b69.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  B4 as n,
  Cot as r,
  Fz as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  Pz as c,
  Vxt as l,
  _Mt as u,
  _O as d,
  cO as ee,
  fO as f,
  fPt as p,
  gMt as m,
  gO as te,
  jDt as h,
  lO as g,
  mO as ne,
  oO as re,
  pPt as _,
  sO as v,
  t3 as y,
  vO as b,
  vzt as x,
  wot as S,
  xMt as C,
  yzt as w,
  z4 as T,
  zxt as E,
} from "./app-shared-bbfeca5e5737.js";
import {
  Agn as D,
  Bjt as O,
  Cwr as k,
  F2t as A,
  Fjt as j,
  G4n as ie,
  I2t as M,
  I3n as ae,
  Ijt as oe,
  J4n as se,
  Ljt as ce,
  MRt as le,
  NHn as ue,
  NRt as de,
  P2t as fe,
  PHn as N,
  Pjt as P,
  RCr as F,
  Rjt as I,
  VL as L,
  Vjt as R,
  XQn as z,
  dwn as B,
  gwr as pe,
  qQn as me,
  wOn as he,
  zL as ge,
  zjt as V,
} from "./app-initial-5851df3f6cb1.js";
import { n as _e, t as H } from "./site-preview-request-a63df11a6b69.js";
function ve(e) {
  let n = (0, U.c)(19),
    { hostId: s, onClose: c, rateLimitStatus: l } = e,
    u = o(r),
    f = i(),
    p = E(M, s),
    h = l.rate_limit_upsell;
  if (!p || h == null) return null;
  let _ = !f && `-mb-6`,
    y;
  n[0] === _ ? (y = n[1]) : ((y = m(`block w-full scale-105 object-cover`, _)), (n[0] = _), (n[1] = y));
  let b = f ? K : G,
    x;
  n[2] !== y || n[3] !== b
    ? ((x = (0, W.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, W.jsx)(`img`, { alt: ``, "aria-hidden": `true`, className: y, src: b }),
      })),
      (n[2] = y),
      (n[3] = b),
      (n[4] = x))
    : (x = n[4]);
  let S;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, W.jsx)(d, {
        className: `contents`,
        children: (0, W.jsx)(a, {
          id: `codex.lunaReserve.dialog.title`,
          defaultMessage: `Regain access to our most powerful models`,
          description: `Heading in the Codex Luna Reserve modal on desktop and web, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders.`,
        }),
      })),
      (n[5] = S))
    : (S = n[5]);
  let C;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, W.jsx)(g, {
        className: `items-center pb-2`,
        children: (0, W.jsx)(ee, {
          className: `items-center`,
          titleClassName: `text-center`,
          subtitleTone: `secondary`,
          subtitleClassName: `text-center`,
          title: S,
          subtitle: (0, W.jsx)(te, {
            className: `contents`,
            children: (0, W.jsx)(a, {
              id: `codex.lunaReserve.dialog.description`,
              defaultMessage: `You are now chatting with Luna. Continue to access our most capable models.`,
              description: `Body in the Codex Luna Reserve modal on desktop and web, opened from the Codex or Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders.`,
            }),
          }),
        }),
      })),
      (n[6] = C))
    : (C = n[6]);
  let w;
  n[7] !== h.ctas || n[8] !== c || n[9] !== u
    ? ((w = (e) =>
        (0, W.jsx)(`div`, {
          className: `self-center`,
          children: (0, W.jsx)(v, {
            expandSingleButton: !1,
            children: h.ctas
              .map((n, r) => {
                if (!ce(n.action)) return null;
                let i = e.actions[n.action];
                return (0, W.jsx)(
                  t,
                  {
                    color: r === 0 ? `primary` : `secondary`,
                    disabled: i.disabled,
                    size: `large`,
                    onClick: (e) => {
                      (V(u, {
                        action: O.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED,
                        ctaAction: n.action,
                        source: `details_modal`,
                      }),
                        i.log(),
                        c(),
                        i.onClick(e));
                    },
                    children: i.label ?? n.label,
                  },
                  `${n.action}:${r}`,
                );
              })
              .reverse(),
          }),
        })),
      (n[7] = h.ctas),
      (n[8] = c),
      (n[9] = u),
      (n[10] = w))
    : (w = n[10]);
  let T;
  n[11] !== h || n[12] !== l || n[13] !== w
    ? ((T = (0, W.jsxs)(re, {
        children: [
          C,
          (0, W.jsx)(g, {
            className: `items-center`,
            children: (0, W.jsx)(P, { banner: h, rateLimitStatus: l, renderContent: w }),
          }),
        ],
      })),
      (n[11] = h),
      (n[12] = l),
      (n[13] = w),
      (n[14] = T))
    : (T = n[14]);
  let D;
  return (
    n[15] !== c || n[16] !== x || n[17] !== T
      ? ((D = (0, W.jsxs)(ne, { open: !0, size: `default`, onOpenChange: c, children: [x, T] })),
        (n[15] = c),
        (n[16] = x),
        (n[17] = T),
        (n[18] = D))
      : (D = n[18]),
    D
  );
}
var U, W, G, K;
function q() {
  return (q = e(() => {
    ((U = x()),
      R(),
      u(),
      s(),
      h(),
      y(),
      b(),
      f(),
      oe(),
      j(),
      S(),
      c(),
      I(),
      A(),
      (W = C()),
      (G = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png`),
      (K = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png`));
  }))();
}
function ye(e) {
  let n = (0, J.c)(7),
    { hostId: i } = e,
    s = o(r);
  if (!E(M, i)) return null;
  let c;
  n[0] !== i || n[1] !== s
    ? ((c = () => {
        V(s, {
          action: O.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED,
          source: `thread_header`,
        });
        let e = s.query.getData(N);
        if (e != null) {
          (se(s, ve, { hostId: i, rateLimitStatus: e }),
            V(s, { action: O.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED, source: `details_modal` }));
          return;
        }
        V(s, {
          action: O.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR,
          errorCode: `missing_usage_status`,
          source: `thread_header`,
        });
      }),
      (n[0] = i),
      (n[1] = s),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Y.jsx)(`span`, { "aria-hidden": `true`, className: `text-chart-yellow`, children: fe })),
      (n[3] = l))
    : (l = n[3]);
  let u;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Y.jsxs)(le, {
        variant: `reserve`,
        children: [
          l,
          (0, Y.jsx)(`span`, {
            className: `brightness-75 dark:brightness-100`,
            children: (0, Y.jsx)(a, {
              id: `codex.lunaReserve.header.label`,
              defaultMessage: `Luna reserve`,
              description: `Short label on the Codex or Work thread-header badge on desktop and web while the user is using their separate Luna Reserve allowance. Clicking the badge opens the backend-provided Luna Reserve explanation and available account actions.`,
            }),
          }),
        ],
      })),
      (n[4] = u))
    : (u = n[4]);
  let d;
  return (
    n[5] === c
      ? (d = n[6])
      : ((d = (0, Y.jsx)(t, { color: `ghostMuted`, size: `inline`, onClick: c, children: u })),
        (n[5] = c),
        (n[6] = d)),
    d
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = x()), R(), s(), h(), de(), y(), ie(), ue(), S(), I(), q(), A(), (Y = C()));
  }))();
}
function Z() {
  return (Z = e(() => {
    (x(), s(), w(), F(), B(), ae(), z(), he(), k(), ge(), D(), L(), H());
  }))();
}
function be() {
  ((0, Q.c)(12), o(pe));
  let e = l(_e);
  return (E(me, e?.hostId == null ? (e?.conversationId ?? null) : null), null);
}
var Q;
function $() {
  return ($ = e(() => {
    ((Q = x()),
      s(),
      z(),
      T(),
      k(),
      Z(),
      H(),
      C(),
      _(),
      n(
        async () =>
          (
            await p(
              async () => {
                let { OpenPendingSitePreview: e } = await import(
                  `./open-pending-site-preview-8e8ce5dba2d9.js`
                );
                return { OpenPendingSitePreview: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]),
              import.meta.url,
            )
          ).OpenPendingSitePreview,
      ));
  }))();
}
export { X as i, $ as n, ye as r, be as t };
//# sourceMappingURL=site-preview-bridge-406791c1b5de.js.map
