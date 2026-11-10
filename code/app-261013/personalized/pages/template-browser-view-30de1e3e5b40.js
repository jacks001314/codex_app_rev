import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  DF as n,
  Ixt as r,
  OF as i,
  Pxt as a,
  TJ as o,
  VDt as s,
  jDt as c,
  vzt as l,
  xJ as u,
  xMt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bn as p,
  FAt as m,
  Gf as h,
  PAt as g,
  SBt as _,
  Uf as v,
  Vn as y,
  _Bt as b,
  bo as x,
  fg as S,
  gBt as C,
  gg as w,
  ho as T,
  mBt as E,
  mo as ee,
  pBt as te,
  sCr as ne,
  vo as D,
  wBt as O,
  yCr as k,
  yo as A,
} from "./app-initial-5851df3f6cb1.js";
import { d as j, i as M, n as N, t as P, u as F } from "./template-gallery-modal-336945a0604c.js";
import { n as I, t as L } from "./base-carousel-4c9d62a2a0f3.js";
var R;
function z() {
  return (z = e(() => {
    (c(),
      (R = t({
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
    ((V = f()), F());
  }))();
}
function U({ model: e, actions: t, card: n, className: r, headerActions: a }) {
  let { Button: o, Skeleton: s, icons: c } = x(),
    l = A(),
    u = c[`chevron-left`],
    d = c[`chevron-right`],
    f = c.shapes;
  return (0, W.jsxs)(`section`, {
    "aria-busy": e.templates.status === `loading`,
    className: `tortilla-template-carousel min-w-0 rounded-3xl border border-default bg-(--color-surface-elevated-secondary) p-4 text-(--color-text) ${r ?? ``}`,
    children: [
      (0, W.jsxs)(`header`, {
        className: `tortilla-template-carousel-header mb-4 flex min-w-0 items-center gap-2`,
        children: [
          (0, W.jsx)(`h2`, {
            className: `tortilla-template-carousel-title me-auto text-sm font-normal`,
            children: l(R.title),
          }),
          e.canCreate &&
            (0, W.jsx)(o, {
              type: `button`,
              color: `outlineGhost`,
              size: `composer`,
              disabled: e.isActionPending,
              onClick: () => {
                t.createTemplate();
              },
              className: `tortilla-template-carousel-create`,
              children: l(R.create),
            }),
          (0, W.jsxs)(`div`, {
            className: `tortilla-template-carousel-navigation flex items-center gap-1`,
            children: [
              (0, W.jsx)(o, {
                className: `tortilla-template-carousel-previous`,
                type: `button`,
                color: `ghostActive`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": l(R.previous),
                disabled: !e.carousel.canPrevious,
                onClick: t.carousel.previous,
                children: (0, W.jsx)(u, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
              (0, W.jsx)(o, {
                className: `tortilla-template-carousel-next`,
                type: `button`,
                color: `ghostActive`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": l(R.next),
                disabled: !e.carousel.canNext,
                onClick: t.carousel.next,
                children: (0, W.jsx)(d, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
            ],
          }),
          a,
        ],
      }),
      (0, W.jsxs)(L, {
        viewportRef: t.carousel.viewportRef,
        label: l(R.title),
        children: [
          e.templates.status === `ready` &&
            e.templates.data.map((e) =>
              (0, W.jsx)(
                `div`,
                {
                  "data-portrait": i(e.type),
                  className: `tortilla-template-carousel-card w-60 shrink-0 data-[portrait=true]:w-[calc(8.5rem*179/204)]`,
                  children: n(e),
                },
                e.id,
              ),
            ),
          e.templates.status === `loading` &&
            (0, W.jsx)(`output`, {
              "aria-label": l(R.loading),
              className: `tortilla-template-carousel-loading flex gap-4`,
              children: [0, 1, 2].map((t) =>
                (0, W.jsxs)(
                  `div`,
                  {
                    "aria-hidden": !0,
                    "data-portrait": e.loadingTemplateType !== void 0 && i(e.loadingTemplateType),
                    className: `tortilla-template-carousel-skeleton flex w-60 shrink-0 flex-col gap-2 pb-2 data-[portrait=true]:w-[calc(8.5rem*179/204)]`,
                    children: [
                      (0, W.jsx)(s, { className: `h-34 w-full rounded-xl` }),
                      (0, W.jsx)(`div`, {
                        className: `flex h-5 items-center`,
                        children: (0, W.jsx)(s, { className: `h-4 w-3/4 rounded` }),
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
                (0, W.jsx)(`span`, { children: l(R.error) }),
                e.canRetry &&
                  (0, W.jsx)(o, {
                    size: `medium`,
                    type: `button`,
                    color: `secondary`,
                    disabled: e.isActionPending,
                    onClick: () => {
                      t.retry();
                    },
                    className: `tortilla-template-carousel-retry`,
                    children: l(R.retry),
                  }),
              ],
            }),
          e.templates.status === `ready` &&
            e.templates.data.length === 0 &&
            (0, W.jsx)(`output`, {
              className: `tortilla-template-carousel-empty flex h-34 w-60 shrink-0 items-center text-sm`,
              children: l(R.empty),
            }),
          (e.templates.status === `loading` ||
            (e.templates.status === `ready` && e.templates.data.length > 0)) &&
            (0, W.jsxs)(`div`, {
              className: `tortilla-template-carousel-view-all flex w-34 shrink-0 flex-col items-start gap-2 pb-2 text-start text-sm select-none`,
              children: [
                (0, W.jsx)(o, {
                  size: `dialogGhost`,
                  type: `button`,
                  color: `ghostActive`,
                  "aria-label": l(R.viewAll),
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
                  children: l(R.viewAll),
                }),
              ],
            }),
        ],
      }),
      e.hasActionError &&
        (0, W.jsx)(`p`, {
          role: `alert`,
          className: `tortilla-template-carousel-action-error mt-2 text-sm`,
          children: l(R.actionError),
        }),
    ],
  });
}
var W;
function G() {
  return (G = e(() => {
    (n(), I(), D(), z(), (W = d()), H());
  }))();
}
function K(e) {
  let t = (0, q.c)(54),
    {
      category: n,
      visible: i,
      placement: a,
      groups: o,
      galleryOpen: c,
      setGalleryOpen: l,
      closeBrowser: d,
      onCreateTemplate: f,
      onRetry: g,
      onUseTemplate: v,
      templateActions: y,
      disabled: S,
      detail: T,
    } = e,
    E = a === void 0 ? `top` : a,
    D = r(ne),
    { Button: O } = x(),
    k = s(),
    A = m(),
    j;
  (t[0] !== d || t[1] !== D || t[2] !== A.view.state
    ? ((j = (e) => {
        e.key !== `Escape` ||
          e.defaultPrevented ||
          h(A.view.state) ||
          (e.target instanceof Element &&
            e.target.closest(`[role="dialog"],[role="menu"],[data-codex-escape-boundary]`) != null) ||
          (e.preventDefault(),
          e.stopPropagation(),
          C(D, _.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_ESCAPE),
          d());
      }),
      (t[0] = d),
      (t[1] = D),
      (t[2] = A.view.state),
      (t[3] = j))
    : (j = t[3]),
    w(A.view.dom, j, D.value.kind === `chatgpt` && i && !c));
  let [M, N] = (0, J.useState)(null),
    P;
  t[4] !== n || t[5] !== o
    ? ((P = o.find((e) => e.id === n)?.templates ?? { status: `loading` }),
      (t[4] = n),
      (t[5] = o),
      (t[6] = P))
    : (P = t[6]);
  let F;
  t[7] === l
    ? (F = t[8])
    : ((F = () => {
        (N(null), l(!0));
      }),
      (t[7] = l),
      (t[8] = F));
  let I;
  t[9] !== n || t[10] !== f
    ? ((I = f ? () => f(n) : void 0), (t[9] = n), (t[10] = f), (t[11] = I))
    : (I = t[11]);
  let L;
  t[12] !== n || t[13] !== g || t[14] !== P || t[15] !== F || t[16] !== I
    ? ((L = { loadingTemplateType: n, templates: P, onViewAll: F, onCreateTemplate: I, onRetry: g }),
      (t[12] = n),
      (t[13] = g),
      (t[14] = P),
      (t[15] = F),
      (t[16] = I),
      (t[17] = L))
    : (L = t[17]);
  let R = B(L),
    z = (0, J.useRef)(null),
    V,
    H;
  (t[18] !== n || t[19] !== D || t[20] !== i
    ? ((V = () => {
        i && (z.current !== n || D.get(te) == null) && ((z.current = n), b(D, n));
      }),
      (H = [i, n, D]),
      (t[18] = n),
      (t[19] = D),
      (t[20] = i),
      (t[21] = V),
      (t[22] = H))
    : ((V = t[21]), (H = t[22])),
    (0, J.useEffect)(V, H));
  let W;
  t[23] !== S || t[24] !== c || t[25] !== v || t[26] !== y
    ? ((W = (e, t, n) =>
        (0, Y.jsx)(ee, {
          template: e,
          variant: t,
          menuModal: c,
          disabled: S,
          interaction: { kind: `use`, onUse: v, menu: { ...y(e), onView: () => n(e) } },
        })),
      (t[23] = S),
      (t[24] = c),
      (t[25] = v),
      (t[26] = y),
      (t[27] = W))
    : (W = t[27]);
  let G = W,
    K;
  t[28] === l
    ? (K = t[29])
    : ((K = (e) => {
        (N(e.id), l(!0));
      }),
      (t[28] = l),
      (t[29] = K));
  let X = K,
    Z;
  t[30] !== O ||
  t[31] !== G ||
  t[32] !== R ||
  t[33] !== d ||
  t[34] !== D ||
  t[35] !== c ||
  t[36] !== k ||
  t[37] !== E ||
  t[38] !== X ||
  t[39] !== i
    ? ((Z =
        i && !c
          ? (0, Y.jsx)(p, {
              isActive: !0,
              placement: E,
              spacing: `compact`,
              children: (0, Y.jsx)(U, {
                ...R,
                card: (e) => G(e, `carousel`, X),
                headerActions: (0, Y.jsx)(O, {
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
                    (C(D, _.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON), d());
                  },
                  children: (0, Y.jsx)(u, {}),
                }),
              }),
            })
          : null),
      (t[30] = O),
      (t[31] = G),
      (t[32] = R),
      (t[33] = d),
      (t[34] = D),
      (t[35] = c),
      (t[36] = k),
      (t[37] = E),
      (t[38] = X),
      (t[39] = i),
      (t[40] = Z))
    : (Z = t[40]);
  let Q;
  t[41] !== G ||
  t[42] !== n ||
  t[43] !== T ||
  t[44] !== c ||
  t[45] !== o ||
  t[46] !== M ||
  t[47] !== f ||
  t[48] !== g ||
  t[49] !== l
    ? ((Q = c
        ? (0, Y.jsx)(re, {
            category: n,
            groups: o,
            initialTemplateId: M,
            setGalleryOpen: l,
            onCreateTemplate: f,
            onRetry: g,
            card: G,
            detail: T,
          })
        : null),
      (t[41] = G),
      (t[42] = n),
      (t[43] = T),
      (t[44] = c),
      (t[45] = o),
      (t[46] = M),
      (t[47] = f),
      (t[48] = g),
      (t[49] = l),
      (t[50] = Q))
    : (Q = t[50]);
  let $;
  return (
    t[51] !== Z || t[52] !== Q
      ? (($ = (0, Y.jsxs)(Y.Fragment, { children: [Z, Q] })), (t[51] = Z), (t[52] = Q), (t[53] = $))
      : ($ = t[53]),
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
    ((q = l()), O(), D(), T(), G(), N(), a(), (J = f()), c(), y(), v(), g(), S(), o(), k(), E(), (Y = d()));
  }))();
}
export { X as n, K as t };
//# sourceMappingURL=template-browser-view-30de1e3e5b40.js.map
