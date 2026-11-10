import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  LNt as r,
  PBt as i,
  TY as a,
  XOt as o,
  YOt as s,
  ZSt as c,
  _I as l,
  gI as u,
  okt as d,
  xY as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as p,
  DLt as m,
  FDr as h,
  Gf as g,
  Ig as _,
  Jn as v,
  Mg as y,
  SLt as b,
  So as x,
  Yn as S,
  _Dt as C,
  _o as w,
  bo as T,
  go as E,
  kLt as D,
  qf as ee,
  vDt as te,
  vLt as ne,
  xLt as O,
  xo as k,
  yLt as A,
} from "./app-initial-ad16eaadf81f.js";
import { d as j, i as M, n as N, t as P, u as F } from "./template-gallery-modal-4f828146e385.js";
import { n as I, t as L } from "./base-carousel-dafba33f875d.js";
var R;
function z() {
  return (z = e(() => {
    (o(),
      (R = s({
        title: {
          id: `tortilla.carousel.title`,
          defaultMessage: `Templates`,
          description: `Heading and accessible region name for the template carousel above the composer.`,
        },
        create: {
          id: `tortilla.carousel.create`,
          defaultMessage: `Create template`,
          description: `Header action in the template carousel. Inserts the host's template creation prompt.`,
        },
        viewAll: {
          id: `tortilla.carousel.viewAll`,
          defaultMessage: `View all`,
          description: `Label on the square final carousel tile. Opens the template gallery.`,
        },
        previous: {
          id: `tortilla.carousel.previous`,
          defaultMessage: `Previous templates`,
          description: `Accessible label for the button that scrolls backward in the template carousel.`,
        },
        next: {
          id: `tortilla.carousel.next`,
          defaultMessage: `Next templates`,
          description: `Accessible label for the button that scrolls forward in the template carousel.`,
        },
        loading: {
          id: `tortilla.carousel.loading`,
          defaultMessage: `Loading templates`,
          description: `Screen reader status while carousel templates load.`,
        },
        error: {
          id: `tortilla.carousel.error`,
          defaultMessage: `Templates couldn't load`,
          description: `Template carousel loading failure. Keep short.`,
        },
        retry: {
          id: `tortilla.carousel.retry`,
          defaultMessage: `Try again`,
          description: `Button to retry loading the template carousel.`,
        },
        empty: {
          id: `tortilla.carousel.empty`,
          defaultMessage: `No templates yet`,
          description: `Template carousel status after loading succeeds with no templates or fallbacks.`,
        },
        actionError: {
          id: `tortilla.carousel.actionError`,
          defaultMessage: `That action couldn't be completed. Please try again.`,
          description: `Safe inline feedback when a host-supplied carousel action fails.`,
        },
      })));
  }))();
}
function B(e) {
  let t = j(),
    n = (0, V.useRef)(!1),
    [r, i] = (0, V.useState)(!1),
    [a, o] = (0, V.useState)(!1);
  async function s(e) {
    if (e && !n.current) {
      ((n.current = !0), i(!0), o(!1));
      try {
        await e();
      } catch {
        o(!0);
      } finally {
        ((n.current = !1), i(!1));
      }
    }
  }
  return {
    model: {
      templates: e.templates,
      loadingTemplateType: e.loadingTemplateType,
      carousel: t.model,
      canCreate: e.onCreateTemplate !== void 0,
      canRetry: e.onRetry !== void 0,
      isActionPending: r,
      hasActionError: a,
    },
    actions: {
      carousel: t.actions,
      viewAll: () => s(e.onViewAll),
      createTemplate: () => s(e.onCreateTemplate),
      retry: () => s(e.onRetry),
    },
  };
}
var V;
function H() {
  return (H = e(() => {
    ((V = n()), F());
  }))();
}
function U({ model: e, actions: t, card: n, className: r, headerActions: i }) {
  let { Button: a, Skeleton: o, icons: s } = x(),
    c = k(),
    u = s[`chevron-left`],
    d = s[`chevron-right`],
    f = s.shapes;
  return (0, W.jsxs)(`section`, {
    "aria-busy": e.templates.status === `loading`,
    className: `tortilla-template-carousel min-w-0 rounded-3xl border border-default bg-(--color-surface-elevated-secondary) p-4 text-(--color-text) ${r ?? ``}`,
    children: [
      (0, W.jsxs)(`header`, {
        className: `tortilla-template-carousel-header mb-4 flex min-w-0 items-center gap-2`,
        children: [
          (0, W.jsx)(`h2`, {
            className: `tortilla-template-carousel-title me-auto text-sm font-normal`,
            children: c(R.title),
          }),
          e.canCreate &&
            (0, W.jsx)(a, {
              type: `button`,
              color: `outlineGhost`,
              size: `composer`,
              disabled: e.isActionPending,
              onClick: () => {
                t.createTemplate();
              },
              className: `tortilla-template-carousel-create`,
              children: c(R.create),
            }),
          (0, W.jsxs)(`div`, {
            className: `tortilla-template-carousel-navigation flex items-center gap-1`,
            children: [
              (0, W.jsx)(a, {
                className: `tortilla-template-carousel-previous`,
                type: `button`,
                color: `ghostActive`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": c(R.previous),
                disabled: !e.carousel.canPrevious,
                onClick: t.carousel.previous,
                children: (0, W.jsx)(u, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
              (0, W.jsx)(a, {
                className: `tortilla-template-carousel-next`,
                type: `button`,
                color: `ghostActive`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": c(R.next),
                disabled: !e.carousel.canNext,
                onClick: t.carousel.next,
                children: (0, W.jsx)(d, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
            ],
          }),
          i,
        ],
      }),
      (0, W.jsxs)(L, {
        viewportRef: t.carousel.viewportRef,
        label: c(R.title),
        children: [
          e.templates.status === `ready` &&
            e.templates.data.map((e) =>
              (0, W.jsx)(
                `div`,
                {
                  "data-portrait": l(e.type),
                  className: `tortilla-template-carousel-card w-60 shrink-0 data-[portrait=true]:w-[calc(8.5rem*179/204)]`,
                  children: n(e),
                },
                e.id,
              ),
            ),
          e.templates.status === `loading` &&
            (0, W.jsx)(`output`, {
              "aria-label": c(R.loading),
              className: `tortilla-template-carousel-loading flex gap-4`,
              children: [0, 1, 2].map((t) =>
                (0, W.jsxs)(
                  `div`,
                  {
                    "aria-hidden": !0,
                    "data-portrait": e.loadingTemplateType !== void 0 && l(e.loadingTemplateType),
                    className: `tortilla-template-carousel-skeleton flex w-60 shrink-0 flex-col gap-2 pb-2 data-[portrait=true]:w-[calc(8.5rem*179/204)]`,
                    children: [
                      (0, W.jsx)(o, { className: `h-34 w-full rounded-xl` }),
                      (0, W.jsx)(`div`, {
                        className: `flex h-5 items-center`,
                        children: (0, W.jsx)(o, { className: `h-4 w-3/4 rounded` }),
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          e.templates.status === `error` &&
            (0, W.jsxs)(`output`, {
              className: `tortilla-template-carousel-error flex min-h-34 w-full shrink-0 flex-col items-center justify-center gap-3 text-center text-sm`,
              children: [
                (0, W.jsx)(`span`, { children: c(R.error) }),
                e.canRetry &&
                  (0, W.jsx)(a, {
                    size: `medium`,
                    type: `button`,
                    color: `secondary`,
                    disabled: e.isActionPending,
                    onClick: () => {
                      t.retry();
                    },
                    className: `tortilla-template-carousel-retry`,
                    children: c(R.retry),
                  }),
              ],
            }),
          e.templates.status === `ready` &&
            e.templates.data.length === 0 &&
            (0, W.jsx)(`output`, {
              className: `tortilla-template-carousel-empty flex h-34 w-60 shrink-0 items-center text-sm`,
              children: c(R.empty),
            }),
          (e.templates.status === `loading` ||
            (e.templates.status === `ready` && e.templates.data.length > 0)) &&
            (0, W.jsxs)(`div`, {
              className: `tortilla-template-carousel-view-all flex w-34 shrink-0 flex-col items-start gap-2 pb-2 text-start text-sm select-none`,
              children: [
                (0, W.jsx)(a, {
                  size: `dialogGhost`,
                  type: `button`,
                  color: `ghostActive`,
                  "aria-label": c(R.viewAll),
                  disabled: e.isActionPending,
                  onClick: () => {
                    t.viewAll();
                  },
                  className: `tortilla-template-carousel-view-all-preview flex! size-34! items-center justify-center rounded-xl! bg-(--color-surface-secondary) p-0!`,
                  children: (0, W.jsx)(f, { "aria-hidden": !0 }),
                }),
                (0, W.jsx)(`span`, {
                  className: `tortilla-template-carousel-view-all-label font-normal text-(--color-text)`,
                  "aria-hidden": `true`,
                  children: c(R.viewAll),
                }),
              ],
            }),
        ],
      }),
      e.hasActionError &&
        (0, W.jsx)(`p`, {
          role: `alert`,
          className: `tortilla-template-carousel-action-error mt-2 text-sm`,
          children: c(R.actionError),
        }),
    ],
  });
}
var W;
function G() {
  return (G = e(() => {
    (u(), I(), T(), z(), (W = r()), H());
  }))();
}
function K(e) {
  let n = (0, q.c)(54),
    {
      category: r,
      visible: i,
      placement: a,
      groups: o,
      galleryOpen: s,
      setGalleryOpen: c,
      closeBrowser: l,
      onCreateTemplate: u,
      onRetry: h,
      onUseTemplate: g,
      templateActions: y,
      disabled: S,
      detail: C,
    } = e,
    w = a === void 0 ? `top` : a,
    T = t(p),
    { Button: D } = x(),
    k = d(),
    A = te(),
    j;
  (n[0] !== l || n[1] !== T || n[2] !== A.view.state
    ? ((j = (e) => {
        e.key !== `Escape` ||
          e.defaultPrevented ||
          ee(A.view.state) ||
          (e.target instanceof Element &&
            e.target.closest(`[role="dialog"],[role="menu"],[data-codex-escape-boundary]`) != null) ||
          (e.preventDefault(),
          e.stopPropagation(),
          O(T, m.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_ESCAPE),
          l());
      }),
      (n[0] = l),
      (n[1] = T),
      (n[2] = A.view.state),
      (n[3] = j))
    : (j = n[3]),
    _(A.view.dom, j, T.value.kind === `chatgpt` && i && !s));
  let [M, N] = (0, J.useState)(null),
    P;
  n[4] !== r || n[5] !== o
    ? ((P = o.find((e) => e.id === r)?.templates ?? { status: `loading` }),
      (n[4] = r),
      (n[5] = o),
      (n[6] = P))
    : (P = n[6]);
  let F;
  n[7] === c
    ? (F = n[8])
    : ((F = () => {
        (N(null), c(!0));
      }),
      (n[7] = c),
      (n[8] = F));
  let I;
  n[9] !== r || n[10] !== u
    ? ((I = u ? () => u(r) : void 0), (n[9] = r), (n[10] = u), (n[11] = I))
    : (I = n[11]);
  let L;
  n[12] !== r || n[13] !== h || n[14] !== P || n[15] !== F || n[16] !== I
    ? ((L = { loadingTemplateType: r, templates: P, onViewAll: F, onCreateTemplate: I, onRetry: h }),
      (n[12] = r),
      (n[13] = h),
      (n[14] = P),
      (n[15] = F),
      (n[16] = I),
      (n[17] = L))
    : (L = n[17]);
  let R = B(L),
    z = (0, J.useRef)(null),
    V,
    H;
  (n[18] !== r || n[19] !== T || n[20] !== i
    ? ((V = () => {
        i && (z.current !== r || T.get(ne) == null) && ((z.current = r), b(T, r));
      }),
      (H = [i, r, T]),
      (n[18] = r),
      (n[19] = T),
      (n[20] = i),
      (n[21] = V),
      (n[22] = H))
    : ((V = n[21]), (H = n[22])),
    (0, J.useEffect)(V, H));
  let W;
  n[23] !== S || n[24] !== s || n[25] !== g || n[26] !== y
    ? ((W = (e, t, n) =>
        (0, Y.jsx)(E, {
          template: e,
          variant: t,
          menuModal: s,
          disabled: S,
          interaction: { kind: `use`, onUse: g, menu: { ...y(e), onView: () => n(e) } },
        })),
      (n[23] = S),
      (n[24] = s),
      (n[25] = g),
      (n[26] = y),
      (n[27] = W))
    : (W = n[27]);
  let G = W,
    K;
  n[28] === c
    ? (K = n[29])
    : ((K = (e) => {
        (N(e.id), c(!0));
      }),
      (n[28] = c),
      (n[29] = K));
  let X = K,
    Z;
  n[30] !== D ||
  n[31] !== G ||
  n[32] !== R ||
  n[33] !== l ||
  n[34] !== T ||
  n[35] !== s ||
  n[36] !== k ||
  n[37] !== w ||
  n[38] !== X ||
  n[39] !== i
    ? ((Z =
        i && !s
          ? (0, Y.jsx)(v, {
              isActive: !0,
              placement: w,
              spacing: `compact`,
              children: (0, Y.jsx)(U, {
                ...R,
                card: (e) => G(e, `carousel`, X),
                headerActions: (0, Y.jsx)(D, {
                  type: `button`,
                  color: `ghostActive`,
                  size: `toolbar`,
                  uniform: !0,
                  "aria-label": k.formatMessage({
                    id: `home.artifactTemplates.close`,
                    defaultMessage: `Close templates`,
                    description: `Accessible label for closing the artifact template picker`,
                  }),
                  onClick: () => {
                    (O(T, m.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON), l());
                  },
                  children: (0, Y.jsx)(f, {}),
                }),
              }),
            })
          : null),
      (n[30] = D),
      (n[31] = G),
      (n[32] = R),
      (n[33] = l),
      (n[34] = T),
      (n[35] = s),
      (n[36] = k),
      (n[37] = w),
      (n[38] = X),
      (n[39] = i),
      (n[40] = Z))
    : (Z = n[40]);
  let Q;
  n[41] !== G ||
  n[42] !== r ||
  n[43] !== C ||
  n[44] !== s ||
  n[45] !== o ||
  n[46] !== M ||
  n[47] !== u ||
  n[48] !== h ||
  n[49] !== c
    ? ((Q = s
        ? (0, Y.jsx)(re, {
            category: r,
            groups: o,
            initialTemplateId: M,
            setGalleryOpen: c,
            onCreateTemplate: u,
            onRetry: h,
            card: G,
            detail: C,
          })
        : null),
      (n[41] = G),
      (n[42] = r),
      (n[43] = C),
      (n[44] = s),
      (n[45] = o),
      (n[46] = M),
      (n[47] = u),
      (n[48] = h),
      (n[49] = c),
      (n[50] = Q))
    : (Q = n[50]);
  let $;
  return (
    n[51] !== Z || n[52] !== Q
      ? (($ = (0, Y.jsxs)(Y.Fragment, { children: [Z, Q] })), (n[51] = Z), (n[52] = Q), (n[53] = $))
      : ($ = n[53]),
    $
  );
}
function re(e) {
  let t = (0, q.c)(28),
    {
      category: n,
      groups: r,
      initialTemplateId: i,
      setGalleryOpen: a,
      onCreateTemplate: o,
      onRetry: s,
      card: c,
      detail: l,
    } = e,
    u;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === n ? (e = t[4]) : ((e = (e) => e.id === n), (t[3] = n), (t[4] = e)),
      (u = r.filter(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = u));
  } else u = t[2];
  let d;
  t[5] === a ? (d = t[6]) : ((d = () => a(!1)), (t[5] = a), (t[6] = d));
  let f;
  t[7] !== n || t[8] !== o
    ? ((f = o ? () => (o(n), `close`) : void 0), (t[7] = n), (t[8] = o), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== s || t[11] !== f
    ? ((p = { onCreateTemplate: f, onRetryLoadTemplates: s }), (t[10] = s), (t[11] = f), (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== u || t[14] !== d || t[15] !== p
    ? ((m = { groups: u, onClose: d, callbacks: p }), (t[13] = u), (t[14] = d), (t[15] = p), (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== n || t[18] !== i || t[19] !== m
    ? ((h = { initialGroupId: n, initialTemplateId: i, config: m }),
      (t[17] = n),
      (t[18] = i),
      (t[19] = m),
      (t[20] = h))
    : (h = t[20]);
  let g = M(h),
    _;
  t[21] !== c || t[22] !== g.actions.viewTemplate
    ? ((_ = (e) => c(e, `default`, g.actions.viewTemplate)),
      (t[21] = c),
      (t[22] = g.actions.viewTemplate),
      (t[23] = _))
    : (_ = t[23]);
  let v;
  return (
    t[24] !== l || t[25] !== g || t[26] !== _
      ? ((v = (0, Y.jsx)(P, { open: !0, ...g, card: _, detail: l })),
        (t[24] = l),
        (t[25] = g),
        (t[26] = _),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = i()), D(), T(), w(), G(), N(), c(), (J = n()), o(), S(), g(), C(), y(), a(), h(), A(), (Y = r()));
  }))();
}
export { X as n, K as t };
//# sourceMappingURL=template-browser-view-a8babdd5e8c6.js.map
