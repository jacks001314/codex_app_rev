import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  AMt as n,
  Cpn as r,
  DLt as i,
  Dkt as a,
  Ekt as o,
  Jrt as s,
  LH as c,
  N3t as l,
  O3t as u,
  Okt as d,
  RH as f,
  Rpn as p,
  Spn as m,
  Tkt as h,
  Uat as g,
  Vat as _,
  Xrt as v,
  Yrt as y,
  Zrt as b,
  _H as x,
  a3t as S,
  aG as C,
  eit as w,
  fLt as T,
  gH as E,
  gLt as D,
  hAt as O,
  hmn as k,
  iit as ee,
  kMt as A,
  kkt as j,
  kmn as M,
  lG as N,
  mAt as P,
  nit as te,
  o3t as F,
  oAt as I,
  rit as ne,
  sAt as re,
  sG as ie,
  tit as ae,
  uG as oe,
  vLt as se,
  yLt as L,
  zpn as R,
} from "./app-initial-f094ef01c64d.js";
import {
  Jg as ce,
  _g as le,
  _s as ue,
  gg as de,
  gs as z,
  qg as B,
} from "./app-primary-4c40d73a1074.js";
import { c as V, o as fe } from "./conversation-source-3c0ae9358599.js";
import { ct as pe, lt as me } from "./subagent-activity-chip-group-e05e8cab2038.js";
function he(e) {
  let n = (0, H.c)(19),
    { hostId: i, onClose: a, rateLimitStatus: c } = e,
    u = t(S),
    d = f(),
    m = l(j, i),
    h = c.rate_limit_upsell;
  if (!m || h == null) return null;
  let g = !d && `-mb-6`,
    _;
  n[0] === g
    ? (_ = n[1])
    : ((_ = p(`block w-full scale-105 object-cover`, g)), (n[0] = g), (n[1] = _));
  let x = d ? G : W,
    C;
  n[2] !== _ || n[3] !== x
    ? ((C = (0, U.jsx)(`div`, {
        className: `overflow-hidden`,
        children: (0, U.jsx)(`img`, { alt: ``, "aria-hidden": `true`, className: _, src: x }),
      })),
      (n[2] = _),
      (n[3] = x),
      (n[4] = C))
    : (C = n[4]);
  let w;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, U.jsx)(ne, {
        className: `contents`,
        children: (0, U.jsx)(r, {
          id: `codex.lunaReserve.dialog.title`,
          defaultMessage: `Regain access to our most powerful models`,
          description: `Heading in the Codex desktop Luna Reserve modal, opened by clicking the thread-header badge after included usage is exhausted. Invites the user to regain access to higher-capability OpenAI models through the available upgrade or credit actions. Reassuring, concise heading; no placeholders.`,
        }),
      })),
      (n[5] = w))
    : (w = n[5]);
  let T;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, U.jsx)(b, {
        className: `items-center pb-2`,
        children: (0, U.jsx)(v, {
          className: `items-center`,
          titleClassName: `text-center`,
          subtitleTone: `secondary`,
          subtitleClassName: `text-center`,
          title: w,
          subtitle: (0, U.jsx)(te, {
            className: `contents`,
            children: (0, U.jsx)(r, {
              id: `codex.lunaReserve.dialog.description`,
              defaultMessage: `You are now chatting with Luna. Continue to access our most capable models.`,
              description: `Body in the Codex desktop Luna Reserve modal opened from the local Codex or cloud Work thread-header badge after included usage is exhausted. Reassures the user that they are chatting with Luna and invites them to use the available actions below to access higher-capability models. Luna is a model name. No placeholders.`,
            }),
          }),
        }),
      })),
      (n[6] = T))
    : (T = n[6]);
  let E;
  n[7] !== h.ctas || n[8] !== a || n[9] !== u
    ? ((E = (e) =>
        (0, U.jsx)(`div`, {
          className: `self-center`,
          children: (0, U.jsx)(y, {
            expandSingleButton: !1,
            children: h.ctas
              .map((t, n) => {
                if (!ce(t.action)) return null;
                let r = e.actions[t.action];
                return (0, U.jsx)(
                  A,
                  {
                    color: n === 0 ? `primary` : `secondary`,
                    disabled: r.disabled,
                    size: `large`,
                    onClick: (e) => {
                      (o(u, {
                        action: P.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED,
                        ctaAction: t.action,
                        source: `details_modal`,
                      }),
                        r.log(),
                        a(),
                        r.onClick(e));
                    },
                    children: t.label,
                  },
                  `${t.action}:${n}`,
                );
              })
              .reverse(),
          }),
        })),
      (n[7] = h.ctas),
      (n[8] = a),
      (n[9] = u),
      (n[10] = E))
    : (E = n[10]);
  let D;
  n[11] !== h || n[12] !== c || n[13] !== E
    ? ((D = (0, U.jsxs)(s, {
        children: [
          T,
          (0, U.jsx)(b, {
            className: `items-center`,
            children: (0, U.jsx)(de, { banner: h, rateLimitStatus: c, renderContent: E }),
          }),
        ],
      })),
      (n[11] = h),
      (n[12] = c),
      (n[13] = E),
      (n[14] = D))
    : (D = n[14]);
  let O;
  return (
    n[15] !== a || n[16] !== C || n[17] !== D
      ? ((O = (0, U.jsxs)(ae, { open: !0, size: `default`, onOpenChange: a, children: [C, D] })),
        (n[15] = a),
        (n[16] = C),
        (n[17] = D),
        (n[18] = O))
      : (O = n[18]),
    O
  );
}
var H,
  U,
  W,
  G,
  ge = e(() => {
    ((H = M()),
      O(),
      R(),
      u(),
      m(),
      n(),
      ee(),
      w(),
      B(),
      le(),
      F(),
      c(),
      h(),
      d(),
      (U = k()),
      (W = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png`),
      (G = `https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png`));
  });
function _e(e) {
  let n = (0, K.c)(7),
    { hostId: i } = e,
    s = t(S);
  if (!l(j, i)) return null;
  let c;
  n[0] !== i || n[1] !== s
    ? ((c = () => {
        o(s, {
          action: P.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED,
          source: `thread_header`,
        });
        let e = s.query.getData(re);
        if (e != null) {
          (g(s, he, { hostId: i, rateLimitStatus: e }),
            o(s, {
              action: P.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED,
              source: `details_modal`,
            }));
          return;
        }
        o(s, {
          action: P.CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR,
          errorCode: `missing_usage_status`,
          source: `thread_header`,
        });
      }),
      (n[0] = i),
      (n[1] = s),
      (n[2] = c))
    : (c = n[2]);
  let u;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, q.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `text-chart-yellow`,
        children: a,
      })),
      (n[3] = u))
    : (u = n[3]);
  let d;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, q.jsxs)(E, {
        variant: `reserve`,
        children: [
          u,
          (0, q.jsx)(`span`, {
            className: `brightness-75 dark:brightness-100`,
            children: (0, q.jsx)(r, {
              id: `codex.lunaReserve.header.label`,
              defaultMessage: `Luna reserve`,
              description: `Short label on the Codex desktop Work thread-header badge while the user is using their separate Luna Reserve allowance. Clicking the badge opens the backend-provided Luna Reserve explanation and available account actions.`,
            }),
          }),
        ],
      })),
      (n[4] = d))
    : (d = n[4]);
  let f;
  return (
    n[5] === c
      ? (f = n[6])
      : ((f = (0, q.jsx)(A, { color: `ghostMuted`, size: `inline`, onClick: c, children: d })),
        (n[5] = c),
        (n[6] = f)),
    f
  );
}
var K,
  q,
  ve = e(() => {
    ((K = M()), O(), u(), m(), x(), n(), _(), I(), F(), h(), ge(), d(), (q = k()));
  });
function ye(e) {
  let t = (0, J.c)(33),
    {
      expanded: n,
      headerLabel: i,
      isTurnInProgress: a,
      latestTurnContentRef: o,
      onExpandedChange: s,
      presentation: c,
      threadPreview: l,
    } = e,
    u = c === void 0 ? `inline` : c,
    d = u === `inline`,
    f;
  t[0] !== n || t[1] !== s || t[2] !== u
    ? ((f = (e) => {
        if (u === `floating-visible` && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.stopPropagation();
          let t = e.deltaY > 0;
          n !== t && s(t);
        }
      }),
      (t[0] = n),
      (t[1] = s),
      (t[2] = u),
      (t[3] = f))
    : (f = t[3]);
  let m;
  t[4] !== i || t[5] !== a
    ? ((m =
        i ??
        (a
          ? (0, Y.jsx)(r, {
              id: `composer.latestTurn.working`,
              defaultMessage: `Working`,
              description: `Heading shown above the composer when the latest thread turn is still in progress`,
            })
          : (0, Y.jsx)(r, {
              id: `composer.latestTurn`,
              defaultMessage: `Latest turn`,
              description: `Heading shown above the latest thread turn preview above the composer`,
            }))),
      (t[4] = i),
      (t[5] = a),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] !== n || t[8] !== s || t[9] !== f || t[10] !== m
    ? ((h = (0, Y.jsx)(z.DisclosureRow, {
        "data-right-panel-composer-overlay-safe-area-header": `true`,
        expanded: n,
        onExpandedChange: s,
        onWheel: f,
        titleClassName: `truncate`,
        title: m,
      })),
      (t[7] = n),
      (t[8] = s),
      (t[9] = f),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === l
    ? (g = t[13])
    : ((g = [{ key: `latest-turn-preview`, node: l }]), (t[12] = l), (t[13] = g));
  let _;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { preview: X, expanded: X, collapsed: `0px` }), (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] === g
    ? (v = t[16])
    : ((v = (0, Y.jsx)(z.Body, {
        children: (0, Y.jsx)(pe, {
          items: g,
          allowHorizontalScroll: !0,
          className: `@container/latest-turn-preview [--edge-fade-distance:1rem] [animation-direction:reverse]`,
          contentClassName: `gap-0 [&_[data-virtualized-turn-content]]:-ms-2.5 [&_[data-virtualized-turn-content]]:pb-1.5 [&_[data-virtualized-turn-content]]:ps-2.5`,
          maxHeightByState: _,
          viewState: `expanded`,
        }),
      })),
      (t[15] = g),
      (t[16] = v));
  let y;
  t[17] !== n || t[18] !== o || t[19] !== v
    ? ((y = (0, Y.jsx)(z.DisclosureBody, {
        ref: o,
        expanded: n,
        maxHeight: X,
        tabIndex: -1,
        children: v,
      })),
      (t[17] = n),
      (t[18] = o),
      (t[19] = v),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] !== d || t[22] !== h || t[23] !== y
    ? ((b = (0, Y.jsxs)(z.Item, { overlap: d, children: [h, y] })),
      (t[21] = d),
      (t[22] = h),
      (t[23] = y),
      (t[24] = b))
    : (b = t[24]);
  let x = b;
  if (u === `inline`) return x;
  let S = u !== `floating-hidden`,
    C = !S,
    w = u === `floating-hidden` && `delay-75`,
    T = S ? `translate-y-0 opacity-100` : `pointer-events-none translate-y-full opacity-0`,
    E;
  t[25] !== w || t[26] !== T
    ? ((E = p(
        `absolute inset-x-10 bottom-0 z-0 transition-[opacity,translate] duration-basic ease-enter-snappy motion-reduce:transition-none`,
        w,
        T,
      )),
      (t[25] = w),
      (t[26] = T),
      (t[27] = E))
    : (E = t[27]);
  let D = !S,
    O;
  return (
    t[28] !== x || t[29] !== C || t[30] !== E || t[31] !== D
      ? ((O = (0, Y.jsx)(`div`, { "aria-hidden": C, className: E, inert: D, children: x })),
        (t[28] = x),
        (t[29] = C),
        (t[30] = E),
        (t[31] = D),
        (t[32] = O))
      : (O = t[32]),
    O
  );
}
var J,
  Y,
  X,
  be = e(() => {
    ((J = M()), R(), m(), me(), ue(), (Y = k()), (X = `22.5rem`));
  });
function xe(e) {
  let t = (0, Z.c)(15),
    { children: n, isOpen: r, onOpenChange: i, shouldPreventAutoFocus: a, trigger: o } = e,
    s = a !== void 0 && a,
    c;
  t[0] === o
    ? (c = t[1])
    : ((c = (0, Q.jsx)(N, { asChild: !0, children: o })), (t[0] = o), (t[1] = c));
  let l, u;
  t[2] === s
    ? ((l = t[3]), (u = t[4]))
    : ((l = (e) => {
        s && e.preventDefault();
      }),
      (u = (e) => {
        s && e.preventDefault();
      }),
      (t[2] = s),
      (t[3] = l),
      (t[4] = u));
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { maxHeight: `none`, maxWidth: `none` }), (t[5] = d))
    : (d = t[5]);
  let f = r ? n : null,
    p;
  t[6] !== l || t[7] !== u || t[8] !== f
    ? ((p = (0, Q.jsx)(ie, {
        align: `end`,
        side: `bottom`,
        sideOffset: 16,
        className: `!w-auto !overflow-visible !rounded-3xl !bg-transparent !p-0 !shadow-none !ring-0 !backdrop-blur-none`,
        onOpenAutoFocus: l,
        onCloseAutoFocus: u,
        onFocusOutside: Ce,
        onPointerDownOutside: Se,
        style: d,
        children: f,
      })),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== r || t[11] !== i || t[12] !== c || t[13] !== p
      ? ((m = (0, Q.jsxs)(C, { open: r, onOpenChange: i, children: [c, p] })),
        (t[10] = r),
        (t[11] = i),
        (t[12] = c),
        (t[13] = p),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
function Se(e) {
  e.target instanceof Element &&
    e.target.closest(`[data-app-shell-tab-strip-controller="right"]`) != null &&
    e.preventDefault();
}
function Ce(e) {
  e.target instanceof Element &&
    e.target.matches(`[role="tabpanel"][data-app-shell-tab-panel-controller="right"]`) &&
    e.preventDefault();
}
var Z,
  Q,
  $ = e(() => {
    ((Z = M()), oe(), (Q = k()));
  });
function we(e, t = !0) {
  let n = e.get(V),
    r = D(t === !0 ? e.get(i) : e.get(L, t), t);
  if (n.displayMode !== `overlay`) {
    t === !0 ? e.set(i, !r) : e.set(L, t, T(t, !r));
    return;
  }
  let a = n.isPopoverOpen || (typeof t != `boolean` && r);
  (typeof t != `boolean` && e.set(L, t, T(t, !a)), e.set(V, { ...n, isPopoverOpen: !a }));
}
var Te = e(() => {
  (se(), fe());
});
export { ye as a, ve as c, $ as i, we as n, be as o, xe as r, _e as s, Te as t };
//# sourceMappingURL=toggle-thread-summary-panel-ce87f217123a.js.map
