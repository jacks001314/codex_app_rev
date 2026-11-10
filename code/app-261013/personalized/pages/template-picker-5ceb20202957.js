import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  _Mt as o,
  _O as s,
  cO as c,
  fO as l,
  gMt as u,
  i3 as d,
  jDt as f,
  mO as p,
  oO as m,
  r3 as h,
  sO as g,
  t3 as _,
  vO as v,
  vzt as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fm as S,
  Ga as C,
  Pm as w,
  Ua as T,
  dAn as E,
  fAn as D,
  rDn as O,
  sv as k,
  tDn as A,
  uDn as j,
  uv as M,
} from "./app-initial-5851df3f6cb1.js";
function N(e) {
  let t = (0, F.c)(9),
    { onOpenChange: n, onSelect: r, open: i, selectedTemplatePath: a } = e,
    o;
  t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
    ? ((o = i ? (0, L.jsx)(P, { onOpenChange: n, onSelect: r, selectedTemplatePath: a }) : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  return (
    t[5] !== n || t[6] !== i || t[7] !== o
      ? ((s = (0, L.jsx)(p, { open: i, onOpenChange: n, size: `wide`, children: o })),
        (t[5] = n),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function P(e) {
  let r = (0, F.c)(54),
    { onOpenChange: o, onSelect: l, selectedTemplatePath: d } = e,
    f = i(),
    p = a(O),
    _ = a(j),
    [v, y] = (0, I.useState)(null),
    b;
  r[0] === p ? (b = r[1]) : ((b = p ?? []), (r[0] = p), (r[1] = b));
  let { isError: x, isLoading: C, refetch: w, skills: E } = D(b, _),
    { data: A, isError: M, isLoading: N, refetch: P } = S(E, _),
    R = x || M,
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    q,
    J;
  if (
    r[2] !== N ||
    r[3] !== C ||
    r[4] !== R ||
    r[5] !== x ||
    r[6] !== _ ||
    r[7] !== f ||
    r[8] !== A ||
    r[9] !== o ||
    r[10] !== l ||
    r[11] !== v ||
    r[12] !== P ||
    r[13] !== w ||
    r[14] !== d ||
    r[15] !== E
  ) {
    let e;
    !R && A != null ? (e = k(E, `presentation`, A)) : !R && !C && !N && (e = []);
    let i = C || N;
    ((B = i ? void 0 : e?.find((e) => e.path === v)),
      (z = m),
      (G = `form`),
      (K = `relative`),
      (q = (e) => {
        (e.preventDefault(), B != null && (l(B), o(!1)));
      }),
      r[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((J = (0, L.jsx)(c, {
            title: (0, L.jsx)(s, {
              children: (0, L.jsx)(n, {
                id: `codex.writingBlock.slides.templates.title`,
                defaultMessage: `Pick a template`,
                description: `Dialog title shown when a user opens the presentation-template picker from an editable Codex presentation outline`,
              }),
            }),
          })),
          (r[26] = J))
        : (J = r[26]),
      (V = `my-5 max-h-96 min-h-24 overflow-y-auto`),
      r[27] === i
        ? (H = r[28])
        : ((H = i
            ? (0, L.jsxs)(`div`, {
                className: `flex min-h-24 items-center justify-center`,
                role: `status`,
                children: [
                  (0, L.jsx)(h, { className: `icon-sm` }),
                  (0, L.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, L.jsx)(n, {
                      id: `codex.writingBlock.slides.templates.loading`,
                      defaultMessage: `Loading presentation templates`,
                      description: `Accessible loading status announced while installed presentation templates are being retrieved for a Codex presentation outline`,
                    }),
                  }),
                ],
              })
            : null),
          (r[27] = i),
          (r[28] = H)),
      r[29] !== R || r[30] !== x || r[31] !== i || r[32] !== P || r[33] !== w
        ? ((U =
            !i && R
              ? (0, L.jsxs)(`div`, {
                  className: `flex min-h-24 flex-col items-center justify-center gap-3 text-secondary`,
                  role: `alert`,
                  children: [
                    (0, L.jsx)(n, {
                      id: `codex.writingBlock.slides.templates.error`,
                      defaultMessage: `Couldn’t load presentation templates`,
                      description: `Error shown when installed presentation template skills or their manifests cannot be loaded for the current Codex task`,
                    }),
                    (0, L.jsx)(t, {
                      color: `secondary`,
                      onClick: () => {
                        x ? w() : P();
                      },
                      type: `button`,
                      children: (0, L.jsx)(n, {
                        id: `codex.writingBlock.slides.templates.retry`,
                        defaultMessage: `Try again`,
                        description: `Button that retries loading installed presentation templates after the presentation-outline template picker encounters an error`,
                      }),
                    }),
                  ],
                })
              : null),
          (r[29] = R),
          (r[30] = x),
          (r[31] = i),
          (r[32] = P),
          (r[33] = w),
          (r[34] = U))
        : (U = r[34]),
      (W =
        !i && e != null
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)(`div`, {
                  "aria-label": f.formatMessage({
                    id: `codex.writingBlock.slides.templates.gallery`,
                    defaultMessage: `Presentation templates`,
                    description: `Accessible name for the gallery of installed presentation template cards in the Codex presentation outline template picker`,
                  }),
                  className: `grid grid-cols-1 gap-4 sm:grid-cols-2`,
                  role: `group`,
                  children: e.map((e) =>
                    (0, L.jsx)(
                      `div`,
                      {
                        className: u(`rounded-2xl p-1`, (v ?? d) === e.path && `bg-text/5`),
                        children: (0, L.jsx)(T, {
                          deleteDisabled: !1,
                          hostId: _,
                          isSelected: (v ?? d) === e.path,
                          onBeforeView: () => o(!1),
                          onUse: () => y(e.path),
                          showAddOverlay: !1,
                          skill: e,
                          sourceUrl: A?.get(e.path)?.sourceUrl ?? null,
                          templateType:
                            A?.get(e.path)?.galleryKind === `google-slides`
                              ? `google-slides`
                              : `presentation`,
                        }),
                      },
                      e.path,
                    ),
                  ),
                }),
                e.length === 0
                  ? (0, L.jsx)(`div`, {
                      className: `flex min-h-24 items-center justify-center text-secondary`,
                      children: (0, L.jsx)(n, {
                        id: `codex.writingBlock.slides.templates.empty`,
                        defaultMessage: `No presentation templates available`,
                        description: `Empty state shown when no installed presentation template skills are available for the current Codex task`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (r[2] = N),
      (r[3] = C),
      (r[4] = R),
      (r[5] = x),
      (r[6] = _),
      (r[7] = f),
      (r[8] = A),
      (r[9] = o),
      (r[10] = l),
      (r[11] = v),
      (r[12] = P),
      (r[13] = w),
      (r[14] = d),
      (r[15] = E),
      (r[16] = z),
      (r[17] = B),
      (r[18] = V),
      (r[19] = H),
      (r[20] = U),
      (r[21] = W),
      (r[22] = G),
      (r[23] = K),
      (r[24] = q),
      (r[25] = J));
  } else
    ((z = r[16]),
      (B = r[17]),
      (V = r[18]),
      (H = r[19]),
      (U = r[20]),
      (W = r[21]),
      (G = r[22]),
      (K = r[23]),
      (q = r[24]),
      (J = r[25]));
  let Y;
  r[35] !== V || r[36] !== H || r[37] !== U || r[38] !== W
    ? ((Y = (0, L.jsxs)(`div`, { className: V, children: [H, U, W] })),
      (r[35] = V),
      (r[36] = H),
      (r[37] = U),
      (r[38] = W),
      (r[39] = Y))
    : (Y = r[39]);
  let X;
  r[40] !== o || r[41] !== l || r[42] !== v || r[43] !== B || r[44] !== d
    ? ((X =
        v != null || d != null
          ? (0, L.jsx)(`div`, {
              className: `absolute inset-x-0 bottom-0 border-t border-default bg-surface/95 p-5 backdrop-blur`,
              children: (0, L.jsxs)(g, {
                expandSingleButton: !1,
                children: [
                  (0, L.jsx)(t, {
                    color: `secondary`,
                    onClick: () => {
                      (v ?? l(null), o(!1));
                    },
                    type: `button`,
                    children:
                      v == null
                        ? (0, L.jsx)(n, {
                            id: `codex.writingBlock.slides.templates.clear`,
                            defaultMessage: `Remove template`,
                            description: `Button that clears the selected presentation template from a presentation outline and restores slide generation without a template`,
                          })
                        : (0, L.jsx)(n, {
                            id: `codex.writingBlock.slides.templates.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Secondary button in the Codex presentation-outline template-picker confirmation footer; selecting it closes the dialog without applying the highlighted presentation template`,
                          }),
                  }),
                  v == null
                    ? null
                    : (0, L.jsx)(t, {
                        color: `primary`,
                        disabled: B == null,
                        type: `submit`,
                        children: (0, L.jsx)(n, {
                          id: `codex.writingBlock.slides.templates.confirm`,
                          defaultMessage: `Select template`,
                          description: `Primary confirmation button in the Codex presentation-outline template picker after the user highlights an installed presentation template; selecting it applies the template and closes the dialog`,
                        }),
                      }),
                ],
              }),
            })
          : null),
      (r[40] = o),
      (r[41] = l),
      (r[42] = v),
      (r[43] = B),
      (r[44] = d),
      (r[45] = X))
    : (X = r[45]);
  let Z;
  return (
    r[46] !== z || r[47] !== Y || r[48] !== X || r[49] !== G || r[50] !== K || r[51] !== q || r[52] !== J
      ? ((Z = (0, L.jsxs)(z, { as: G, className: K, onSubmit: q, children: [J, Y, X] })),
        (r[46] = z),
        (r[47] = Y),
        (r[48] = X),
        (r[49] = G),
        (r[50] = K),
        (r[51] = q),
        (r[52] = J),
        (r[53] = Z))
      : (Z = r[53]),
    Z
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = y()), o(), r(), (I = x()), f(), M(), C(), w(), _(), v(), l(), d(), A(), E(), (L = b()));
  }))();
}
R();
export { N as SlidesOutlineTemplatePicker };
//# sourceMappingURL=template-picker-5ceb20202957.js.map
