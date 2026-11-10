import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  Ket as n,
  O5t as r,
  Uet as i,
  Urn as a,
  Wrn as o,
  _dn as s,
  ein as c,
  mcn as l,
  vX as u,
  vdn as d,
  yX as f,
} from "./app-shared-7552fc8d5d82.js";
import {
  $Rt as p,
  $t as m,
  BR as h,
  Di as g,
  HR as _,
  KR as v,
  Oi as y,
  QR as b,
  Qt as x,
  Qxt as S,
  XR as C,
  XRt as ee,
  Yd as w,
  ZR as T,
  ZRt as E,
  Zd as te,
  Zf as D,
  Zxt as O,
  azt as k,
  ezt as A,
  kPn as j,
  qR as M,
  szt as N,
  tp as P,
  vPn as F,
  zR as I,
} from "./app-initial-3916b423772b.js";
import { n as L, t as R } from "./base-carousel-95b48aee87a9.js";
var z;
function B() {
  return (B = e(() => {
    (o(),
      (z = a({
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
function V(e) {
  let t = M(),
    n = (0, H.useRef)(!1),
    [r, i] = (0, H.useState)(!1),
    [a, o] = (0, H.useState)(!1);
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
var H;
function U() {
  return (U = e(() => {
    ((H = d()), v());
  }))();
}
function ne({ model: e, actions: t, card: n, className: r, headerActions: i }) {
  let { Button: a, Skeleton: o, icons: s } = b(),
    c = T(),
    l = s[`chevron-left`],
    u = s[`chevron-right`],
    d = s.shapes;
  return (0, W.jsxs)(`section`, {
    "aria-busy": e.templates.status === `loading`,
    className: `tortilla-template-carousel min-w-0 rounded-3xl border border-default bg-(--color-surface-elevated-secondary) p-4 text-(--color-text) ${r ?? ``}`,
    children: [
      (0, W.jsxs)(`header`, {
        className: `tortilla-template-carousel-header mb-4 flex min-w-0 items-center gap-2`,
        children: [
          (0, W.jsx)(`h2`, {
            className: `tortilla-template-carousel-title me-auto text-sm font-normal`,
            children: c(z.title),
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
              children: c(z.create),
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
                "aria-label": c(z.previous),
                disabled: !e.carousel.canPrevious,
                onClick: t.carousel.previous,
                children: (0, W.jsx)(l, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
              (0, W.jsx)(a, {
                className: `tortilla-template-carousel-next`,
                type: `button`,
                color: `ghostActive`,
                size: `toolbar`,
                uniform: !0,
                "aria-label": c(z.next),
                disabled: !e.carousel.canNext,
                onClick: t.carousel.next,
                children: (0, W.jsx)(u, { "aria-hidden": !0, className: `rtl:rotate-180` }),
              }),
            ],
          }),
          i,
        ],
      }),
      (0, W.jsxs)(R, {
        viewportRef: t.carousel.viewportRef,
        label: c(z.title),
        children: [
          e.templates.status === `ready` &&
            e.templates.data.map((e) =>
              (0, W.jsx)(
                `div`,
                {
                  "data-portrait": f(e.type),
                  className: `tortilla-template-carousel-card w-60 shrink-0 data-[portrait=true]:w-[calc(8.5rem*179/204)]`,
                  children: n(e),
                },
                e.id,
              ),
            ),
          e.templates.status === `loading` &&
            (0, W.jsx)(`output`, {
              "aria-label": c(z.loading),
              className: `tortilla-template-carousel-loading flex gap-4`,
              children: [0, 1, 2].map((t) =>
                (0, W.jsxs)(
                  `div`,
                  {
                    "aria-hidden": !0,
                    "data-portrait": e.loadingTemplateType !== void 0 && f(e.loadingTemplateType),
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
                (0, W.jsx)(`span`, { children: c(z.error) }),
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
                    children: c(z.retry),
                  }),
              ],
            }),
          e.templates.status === `ready` &&
            e.templates.data.length === 0 &&
            (0, W.jsx)(`output`, {
              className: `tortilla-template-carousel-empty flex h-34 w-60 shrink-0 items-center text-sm`,
              children: c(z.empty),
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
                  "aria-label": c(z.viewAll),
                  disabled: e.isActionPending,
                  onClick: () => {
                    t.viewAll();
                  },
                  className: `tortilla-template-carousel-view-all-preview flex! size-34! items-center justify-center rounded-xl! bg-(--color-surface-secondary) p-0!`,
                  children: (0, W.jsx)(d, { "aria-hidden": !0 }),
                }),
                (0, W.jsx)(`span`, {
                  className: `tortilla-template-carousel-view-all-label font-normal text-(--color-text)`,
                  "aria-hidden": `true`,
                  children: c(z.viewAll),
                }),
              ],
            }),
        ],
      }),
      e.hasActionError &&
        (0, W.jsx)(`p`, {
          role: `alert`,
          className: `tortilla-template-carousel-action-error mt-2 text-sm`,
          children: c(z.actionError),
        }),
    ],
  });
}
var W;
function G() {
  return (G = e(() => {
    (u(), L(), C(), B(), (W = l()), U());
  }))();
}
function K(e) {
  let n = (0, q.c)(54),
    {
      category: r,
      visible: a,
      placement: o,
      groups: s,
      galleryOpen: l,
      setGalleryOpen: u,
      closeBrowser: d,
      onCreateTemplate: f,
      onRetry: m,
      onUseTemplate: h,
      templateActions: _,
      disabled: v,
      detail: y,
    } = e,
    C = o === void 0 ? `top` : o,
    w = t(F),
    { Button: T } = b(),
    E = c(),
    D = S(),
    O;
  (n[0] !== d || n[1] !== w || n[2] !== D.view.state
    ? ((O = (e) => {
        e.key !== `Escape` ||
          e.defaultPrevented ||
          te(D.view.state) ||
          (e.target instanceof Element &&
            e.target.closest(`[role="dialog"],[role="menu"],[data-codex-escape-boundary]`) !=
              null) ||
          (e.preventDefault(),
          e.stopPropagation(),
          p(w, k.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_ESCAPE),
          d());
      }),
      (n[0] = d),
      (n[1] = w),
      (n[2] = D.view.state),
      (n[3] = O))
    : (O = n[3]),
    P(D.view.dom, O, w.value.kind === `chatgpt` && a && !l));
  let [j, M] = (0, J.useState)(null),
    N;
  n[4] !== r || n[5] !== s
    ? ((N = s.find((e) => e.id === r)?.templates ?? { status: `loading` }),
      (n[4] = r),
      (n[5] = s),
      (n[6] = N))
    : (N = n[6]);
  let I;
  n[7] === u
    ? (I = n[8])
    : ((I = () => {
        (M(null), u(!0));
      }),
      (n[7] = u),
      (n[8] = I));
  let L;
  n[9] !== r || n[10] !== f
    ? ((L = f ? () => f(r) : void 0), (n[9] = r), (n[10] = f), (n[11] = L))
    : (L = n[11]);
  let R;
  n[12] !== r || n[13] !== m || n[14] !== N || n[15] !== I || n[16] !== L
    ? ((R = {
        loadingTemplateType: r,
        templates: N,
        onViewAll: I,
        onCreateTemplate: L,
        onRetry: m,
      }),
      (n[12] = r),
      (n[13] = m),
      (n[14] = N),
      (n[15] = I),
      (n[16] = L),
      (n[17] = R))
    : (R = n[17]);
  let z = V(R),
    B = (0, J.useRef)(null),
    H,
    U;
  (n[18] !== r || n[19] !== w || n[20] !== a
    ? ((H = () => {
        a && (B.current !== r || w.get(ee) == null) && ((B.current = r), A(w, r));
      }),
      (U = [a, r, w]),
      (n[18] = r),
      (n[19] = w),
      (n[20] = a),
      (n[21] = H),
      (n[22] = U))
    : ((H = n[21]), (U = n[22])),
    (0, J.useEffect)(H, U));
  let W;
  n[23] !== v || n[24] !== l || n[25] !== h || n[26] !== _
    ? ((W = (e, t, n) =>
        (0, Y.jsx)(g, {
          template: e,
          variant: t,
          menuModal: l,
          disabled: v,
          interaction: { kind: `use`, onUse: h, menu: { ..._(e), onView: () => n(e) } },
        })),
      (n[23] = v),
      (n[24] = l),
      (n[25] = h),
      (n[26] = _),
      (n[27] = W))
    : (W = n[27]);
  let G = W,
    K;
  n[28] === u
    ? (K = n[29])
    : ((K = (e) => {
        (M(e.id), u(!0));
      }),
      (n[28] = u),
      (n[29] = K));
  let X = K,
    Z;
  n[30] !== T ||
  n[31] !== G ||
  n[32] !== z ||
  n[33] !== d ||
  n[34] !== w ||
  n[35] !== l ||
  n[36] !== E ||
  n[37] !== C ||
  n[38] !== X ||
  n[39] !== a
    ? ((Z =
        a && !l
          ? (0, Y.jsx)(x, {
              isActive: !0,
              placement: C,
              spacing: `compact`,
              children: (0, Y.jsx)(ne, {
                ...z,
                card: (e) => G(e, `carousel`, X),
                headerActions: (0, Y.jsx)(T, {
                  type: `button`,
                  color: `ghostActive`,
                  size: `toolbar`,
                  uniform: !0,
                  "aria-label": E.formatMessage({
                    id: `home.artifactTemplates.close`,
                    defaultMessage: `Close templates`,
                    description: `Accessible label for closing the artifact template picker`,
                  }),
                  onClick: () => {
                    (p(w, k.CODEX_ARTIFACT_TEMPLATE_CAROUSEL_DISMISS_REASON_CLOSE_BUTTON), d());
                  },
                  children: (0, Y.jsx)(i, {}),
                }),
              }),
            })
          : null),
      (n[30] = T),
      (n[31] = G),
      (n[32] = z),
      (n[33] = d),
      (n[34] = w),
      (n[35] = l),
      (n[36] = E),
      (n[37] = C),
      (n[38] = X),
      (n[39] = a),
      (n[40] = Z))
    : (Z = n[40]);
  let Q;
  n[41] !== G ||
  n[42] !== r ||
  n[43] !== y ||
  n[44] !== l ||
  n[45] !== s ||
  n[46] !== j ||
  n[47] !== f ||
  n[48] !== m ||
  n[49] !== u
    ? ((Q = l
        ? (0, Y.jsx)(re, {
            category: r,
            groups: s,
            initialTemplateId: j,
            setGalleryOpen: u,
            onCreateTemplate: f,
            onRetry: m,
            card: G,
            detail: y,
          })
        : null),
      (n[41] = G),
      (n[42] = r),
      (n[43] = y),
      (n[44] = l),
      (n[45] = s),
      (n[46] = j),
      (n[47] = f),
      (n[48] = m),
      (n[49] = u),
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
    ? ((p = { onCreateTemplate: f, onRetryLoadTemplates: s }),
      (t[10] = s),
      (t[11] = f),
      (t[12] = p))
    : (p = t[12]);
  let m;
  t[13] !== u || t[14] !== d || t[15] !== p
    ? ((m = { groups: u, onClose: d, callbacks: p }),
      (t[13] = u),
      (t[14] = d),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== n || t[18] !== i || t[19] !== m
    ? ((h = { initialGroupId: n, initialTemplateId: i, config: m }),
      (t[17] = n),
      (t[18] = i),
      (t[19] = m),
      (t[20] = h))
    : (h = t[20]);
  let g = _(h),
    v;
  t[21] !== c || t[22] !== g.actions.viewTemplate
    ? ((v = (e) => c(e, `default`, g.actions.viewTemplate)),
      (t[21] = c),
      (t[22] = g.actions.viewTemplate),
      (t[23] = v))
    : (v = t[23]);
  let y;
  return (
    t[24] !== l || t[25] !== g || t[26] !== v
      ? ((y = (0, Y.jsx)(I, { open: !0, ...g, card: v, detail: l })),
        (t[24] = l),
        (t[25] = g),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = s()),
      N(),
      C(),
      y(),
      G(),
      h(),
      r(),
      (J = d()),
      o(),
      m(),
      w(),
      O(),
      D(),
      n(),
      j(),
      E(),
      (Y = l()));
  }))();
}
export { X as n, K as t };
//# sourceMappingURL=template-browser-view-8dc1096348e8.js.map
