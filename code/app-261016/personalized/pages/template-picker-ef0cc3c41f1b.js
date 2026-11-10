import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  FBt as n,
  HO as r,
  IO as i,
  JO as a,
  LNt as o,
  LO as s,
  MNt as c,
  NNt as l,
  PBt as u,
  RO as d,
  WO as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  e6 as _,
  iCt as v,
  okt as y,
  qO as b,
  tkt as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  EAn as S,
  Ga as C,
  Lv as w,
  NAn as T,
  NNn as E,
  PNn as D,
  Pv as O,
  eh as k,
  qa as A,
  th as j,
  wAn as M,
} from "./app-initial-ad16eaadf81f.js";
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
      ? ((s = (0, L.jsx)(f, { open: i, onOpenChange: n, size: `wide`, children: o })),
        (t[5] = n),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]),
    s
  );
}
function P(e) {
  let n = (0, F.c)(54),
    { onOpenChange: r, onSelect: a, selectedTemplatePath: o } = e,
    l = y(),
    u = v(S),
    f = v(T),
    [p, h] = (0, I.useState)(null),
    g;
  n[0] === u ? (g = n[1]) : ((g = u ?? []), (n[0] = u), (n[1] = g));
  let { isError: _, isLoading: w, refetch: E, skills: k } = D(g, f),
    { data: A, isError: M, isLoading: N, refetch: P } = j(k, f),
    R = _ || M,
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
    n[2] !== N ||
    n[3] !== w ||
    n[4] !== R ||
    n[5] !== _ ||
    n[6] !== f ||
    n[7] !== l ||
    n[8] !== A ||
    n[9] !== r ||
    n[10] !== a ||
    n[11] !== p ||
    n[12] !== P ||
    n[13] !== E ||
    n[14] !== o ||
    n[15] !== k
  ) {
    let e;
    !R && A != null ? (e = O(k, `presentation`, A)) : !R && !w && !N && (e = []);
    let s = w || N;
    ((B = s ? void 0 : e?.find((e) => e.path === p)),
      (z = i),
      (G = `form`),
      (K = `relative`),
      (q = (e) => {
        (e.preventDefault(), B != null && (a(B), r(!1)));
      }),
      n[26] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((J = (0, L.jsx)(d, {
            title: (0, L.jsx)(b, {
              children: (0, L.jsx)(x, {
                id: `codex.writingBlock.slides.templates.title`,
                defaultMessage: `Pick a template`,
                description: `Dialog title shown when a user opens the presentation-template picker from an editable Codex presentation outline`,
              }),
            }),
          })),
          (n[26] = J))
        : (J = n[26]),
      (V = `my-5 max-h-96 min-h-24 overflow-y-auto`),
      n[27] === s
        ? (H = n[28])
        : ((H = s
            ? (0, L.jsxs)(`div`, {
                className: `flex min-h-24 items-center justify-center`,
                role: `status`,
                children: [
                  (0, L.jsx)(t, { className: `icon-sm` }),
                  (0, L.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, L.jsx)(x, {
                      id: `codex.writingBlock.slides.templates.loading`,
                      defaultMessage: `Loading presentation templates`,
                      description: `Accessible loading status announced while installed presentation templates are being retrieved for a Codex presentation outline`,
                    }),
                  }),
                ],
              })
            : null),
          (n[27] = s),
          (n[28] = H)),
      n[29] !== R || n[30] !== _ || n[31] !== s || n[32] !== P || n[33] !== E
        ? ((U =
            !s && R
              ? (0, L.jsxs)(`div`, {
                  className: `flex min-h-24 flex-col items-center justify-center gap-3 text-secondary`,
                  role: `alert`,
                  children: [
                    (0, L.jsx)(x, {
                      id: `codex.writingBlock.slides.templates.error`,
                      defaultMessage: `Couldn’t load presentation templates`,
                      description: `Error shown when installed presentation template skills or their manifests cannot be loaded for the current Codex task`,
                    }),
                    (0, L.jsx)(m, {
                      color: `secondary`,
                      onClick: () => {
                        _ ? E() : P();
                      },
                      type: `button`,
                      children: (0, L.jsx)(x, {
                        id: `codex.writingBlock.slides.templates.retry`,
                        defaultMessage: `Try again`,
                        description: `Button that retries loading installed presentation templates after the presentation-outline template picker encounters an error`,
                      }),
                    }),
                  ],
                })
              : null),
          (n[29] = R),
          (n[30] = _),
          (n[31] = s),
          (n[32] = P),
          (n[33] = E),
          (n[34] = U))
        : (U = n[34]),
      (W =
        !s && e != null
          ? (0, L.jsxs)(L.Fragment, {
              children: [
                (0, L.jsx)(`div`, {
                  "aria-label": l.formatMessage({
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
                        className: c(`rounded-2xl p-1`, (p ?? o) === e.path && `bg-text/5`),
                        children: (0, L.jsx)(C, {
                          deleteDisabled: !1,
                          hostId: f,
                          isSelected: (p ?? o) === e.path,
                          onBeforeView: () => r(!1),
                          onUse: () => h(e.path),
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
                      children: (0, L.jsx)(x, {
                        id: `codex.writingBlock.slides.templates.empty`,
                        defaultMessage: `No presentation templates available`,
                        description: `Empty state shown when no installed presentation template skills are available for the current Codex task`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[2] = N),
      (n[3] = w),
      (n[4] = R),
      (n[5] = _),
      (n[6] = f),
      (n[7] = l),
      (n[8] = A),
      (n[9] = r),
      (n[10] = a),
      (n[11] = p),
      (n[12] = P),
      (n[13] = E),
      (n[14] = o),
      (n[15] = k),
      (n[16] = z),
      (n[17] = B),
      (n[18] = V),
      (n[19] = H),
      (n[20] = U),
      (n[21] = W),
      (n[22] = G),
      (n[23] = K),
      (n[24] = q),
      (n[25] = J));
  } else
    ((z = n[16]),
      (B = n[17]),
      (V = n[18]),
      (H = n[19]),
      (U = n[20]),
      (W = n[21]),
      (G = n[22]),
      (K = n[23]),
      (q = n[24]),
      (J = n[25]));
  let Y;
  n[35] !== V || n[36] !== H || n[37] !== U || n[38] !== W
    ? ((Y = (0, L.jsxs)(`div`, { className: V, children: [H, U, W] })),
      (n[35] = V),
      (n[36] = H),
      (n[37] = U),
      (n[38] = W),
      (n[39] = Y))
    : (Y = n[39]);
  let X;
  n[40] !== r || n[41] !== a || n[42] !== p || n[43] !== B || n[44] !== o
    ? ((X =
        p != null || o != null
          ? (0, L.jsx)(`div`, {
              className: `absolute inset-x-0 bottom-0 border-t border-default bg-surface/95 p-5 backdrop-blur`,
              children: (0, L.jsxs)(s, {
                expandSingleButton: !1,
                children: [
                  (0, L.jsx)(m, {
                    color: `secondary`,
                    onClick: () => {
                      (p ?? a(null), r(!1));
                    },
                    type: `button`,
                    children:
                      p == null
                        ? (0, L.jsx)(x, {
                            id: `codex.writingBlock.slides.templates.clear`,
                            defaultMessage: `Remove template`,
                            description: `Button that clears the selected presentation template from a presentation outline and restores slide generation without a template`,
                          })
                        : (0, L.jsx)(x, {
                            id: `codex.writingBlock.slides.templates.cancel`,
                            defaultMessage: `Cancel`,
                            description: `Secondary button in the Codex presentation-outline template-picker confirmation footer; selecting it closes the dialog without applying the highlighted presentation template`,
                          }),
                  }),
                  p == null
                    ? null
                    : (0, L.jsx)(m, {
                        color: `primary`,
                        disabled: B == null,
                        type: `submit`,
                        children: (0, L.jsx)(x, {
                          id: `codex.writingBlock.slides.templates.confirm`,
                          defaultMessage: `Select template`,
                          description: `Primary confirmation button in the Codex presentation-outline template picker after the user highlights an installed presentation template; selecting it applies the template and closes the dialog`,
                        }),
                      }),
                ],
              }),
            })
          : null),
      (n[40] = r),
      (n[41] = a),
      (n[42] = p),
      (n[43] = B),
      (n[44] = o),
      (n[45] = X))
    : (X = n[45]);
  let Z;
  return (
    n[46] !== z || n[47] !== Y || n[48] !== X || n[49] !== G || n[50] !== K || n[51] !== q || n[52] !== J
      ? ((Z = (0, L.jsxs)(z, { as: G, className: K, onSubmit: q, children: [J, Y, X] })),
        (n[46] = z),
        (n[47] = Y),
        (n[48] = X),
        (n[49] = G),
        (n[50] = K),
        (n[51] = q),
        (n[52] = J),
        (n[53] = Z))
      : (Z = n[53]),
    Z
  );
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = u()), l(), g(), (I = n()), p(), w(), A(), k(), h(), a(), r(), _(), M(), E(), (L = o()));
  }))();
}
R();
export { N as SlidesOutlineTemplatePicker };
//# sourceMappingURL=template-picker-ef0cc3c41f1b.js.map
