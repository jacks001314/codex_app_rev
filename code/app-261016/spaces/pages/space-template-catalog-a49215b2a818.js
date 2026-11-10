import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  MH as a,
  MNt as o,
  NNt as s,
  NSt as c,
  PBt as l,
  PH as u,
  Qst as d,
  TY as f,
  USt as p,
  XOt as m,
  Y3 as ee,
  YOt as h,
  Yst as g,
  Z3 as _,
  ZSt as v,
  Zst as y,
  fN as b,
  gI as x,
  iCt as S,
  mI as C,
  mN as w,
  nCt as te,
  okt as ne,
  tkt as T,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cmn as E,
  Cqt as D,
  Efn as re,
  Eqt as O,
  IAr as k,
  Jdt as ie,
  KIr as ae,
  LIr as A,
  Smn as oe,
  Tfn as j,
  bLr as se,
  co as M,
  lo as N,
  okn as P,
  qdt as F,
  wLr as I,
} from "./app-initial-ad16eaadf81f.js";
import { c as ce, d as le, l as L } from "./template-gallery-modal-4f828146e385.js";
import { n as R } from "./base-carousel-dafba33f875d.js";
import { n as z, t as B } from "./local-template-catalog-2eeca06107ff.js";
import {
  a as ue,
  c as V,
  i as de,
  l as fe,
  o as pe,
  s as H,
  t as U,
} from "./personalized-pages-9830ca1f3831.js";
import {
  a as W,
  c as G,
  d as K,
  i as me,
  l as he,
  n as ge,
  o as _e,
  r as ve,
  s as q,
  t as J,
  u as ye,
} from "./template-page-creation-7c74ecaa206d.js";
function Y(e) {
  let n = (0, be.c)(80),
    {
      onOpen: r,
      onSelect: i,
      selectionSurface: s,
      inset: c,
      expanded: l,
      inTemplateGallery: f,
      search: m,
      children: h,
    } = e,
    g = s === void 0 ? oe.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL : s,
    _ = c === void 0 || c,
    v = l !== void 0 && l,
    y = f !== void 0 && f,
    b = m === void 0 ? `` : m,
    x = t(d),
    C = S(re),
    w = S(ae).status === `allowed`,
    E = te(de, `template-modal`),
    D = S(ue),
    O = S(ve),
    k = ne(),
    A = p(),
    j = (0, xe.useId)(),
    M = le(),
    N;
  n[0] === k ? (N = n[1]) : ((N = k.formatMessage(Z.prefilledHeading)), (n[0] = k), (n[1] = N));
  let P = N;
  if (y) {
    let e;
    (n[2] === k ? (e = n[3]) : ((e = k.formatMessage(Z.galleryHeading)), (n[2] = k), (n[3] = e)), (P = e));
  } else if (w) {
    let e;
    (n[4] === k ? (e = n[5]) : ((e = k.formatMessage(Z.heading)), (n[4] = k), (n[5] = e)), (P = e));
  }
  let F = S(fe),
    I = S(se),
    L,
    R,
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
    n[6] !== M ||
    n[7] !== h ||
    n[8] !== F?.value ||
    n[9] !== C ||
    n[10] !== v ||
    n[11] !== P ||
    n[12] !== j ||
    n[13] !== y ||
    n[14] !== _ ||
    n[15] !== k ||
    n[16] !== D ||
    n[17] !== A ||
    n[18] !== r ||
    n[19] !== i ||
    n[20] !== O ||
    n[21] !== E ||
    n[22] !== x ||
    n[23] !== b ||
    n[24] !== g ||
    n[25] !== I ||
    n[26] !== w
  ) {
    G = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = b.trim().toLocaleLowerCase(),
        t = E?.filter((t) => {
          let { title: n, description: r } = t;
          return `${n} ${r ?? ``}`.toLocaleLowerCase().includes(e);
        }),
        s = C
          ? he(pe(k, F?.value), I).filter((t) => {
              let { title: n, previewMarkdown: r } = t;
              return `${n} ${r}`.toLocaleLowerCase().includes(e);
            })
          : [];
      if (!t?.length && s.length === 0) {
        let e;
        (n[39] !== h || n[40] !== D
          ? ((e = h?.(!1, D) ?? null), (n[39] = h), (n[40] = D), (n[41] = e))
          : (e = n[41]),
          (G = e));
        break bb0;
      }
      (n[42] !== h || n[43] !== _ || n[44] !== D
        ? ((L = h?.(!0, D)),
          (z = o(_ && `p-6 pb-3 [@media(max-width:48rem)]:px-4`, !_ && L && `pb-6`)),
          (n[42] = h),
          (n[43] = _),
          (n[44] = D),
          (n[45] = L),
          (n[46] = z))
        : ((L = n[45]), (z = n[46])),
        (B = v ? P : void 0),
        (V = v ? void 0 : j),
        (H = ie),
        (U = ie),
        n[47] !== M || n[48] !== v || n[49] !== j || n[50] !== y || n[51] !== k || n[52] !== w
          ? ((W =
              !v &&
              (0, X.jsxs)(`div`, {
                className: `mb-3 flex items-start justify-between gap-2`,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1`,
                    children: [
                      (0, X.jsxs)(`h3`, {
                        id: j,
                        className: o(
                          `tortilla-gallery-group-heading m-0 font-semibold`,
                          y ? `body-md` : `text-sm`,
                        ),
                        children: [
                          y && (0, X.jsx)(T, { ...Z.galleryHeading }),
                          !y && w && (0, X.jsx)(T, { ...Z.heading }),
                          !y && !w && (0, X.jsx)(T, { ...Z.prefilledHeading }),
                        ],
                      }),
                      (0, X.jsxs)(`p`, {
                        className: o(`m-0`, y ? `body-sm text-secondary` : `text-xs text-tertiary`),
                        children: [
                          !w &&
                            (0, X.jsx)(T, {
                              id: `space.pageTemplates.nonWorkByline`,
                              defaultMessage: `Start with a Page template and make it your own`,
                              description: `Caption for Page templates in the Space gallery or landing page when automated Work setup is unavailable. Selecting a template creates an editable Page with sample content and places an unsent suggested message in Page chat.`,
                            }),
                          w &&
                            y &&
                            (0, X.jsx)(T, {
                              id: `space.pageTemplates.galleryByline`,
                              defaultMessage: `Collaborate with ChatGPT and your teammates to create powerful, auto-updating pages`,
                              description: `Caption below the Pages category heading in the Space template gallery modal. Explains that teammates can collaborate with ChatGPT on Pages that update automatically.`,
                            }),
                          w &&
                            !y &&
                            (0, X.jsx)(T, {
                              id: `space.pageTemplates.pluginsByline`,
                              defaultMessage: `Create pages using knowledge from Slack, Gmail, Teams, and more`,
                              description: `Caption below Start with your data in the Space Templates gallery. Explains that these Page templates can use any connected apps, and can prompt for connection in chat. Preserve Slack, Gmail and Teams as brand names. This is informational text, not a link or a connection button.`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  y &&
                    (M.model.canPrevious || M.model.canNext) &&
                    (0, X.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-1`,
                      children: [
                        (0, X.jsx)(ee, {
                          type: `button`,
                          color: `ghostActive`,
                          size: `toolbar`,
                          uniform: !0,
                          "aria-label": k.formatMessage(ce.previousTemplates, {
                            category: k.formatMessage(Z.galleryHeading),
                          }),
                          disabled: !M.model.canPrevious,
                          onClick: M.actions.previous,
                          children: (0, X.jsx)(a, { className: `rtl:rotate-180` }),
                        }),
                        (0, X.jsx)(ee, {
                          type: `button`,
                          color: `ghostActive`,
                          size: `toolbar`,
                          uniform: !0,
                          "aria-label": k.formatMessage(ce.nextTemplates, {
                            category: k.formatMessage(Z.galleryHeading),
                          }),
                          disabled: !M.model.canNext,
                          onClick: M.actions.next,
                          children: (0, X.jsx)(u, { className: `rtl:rotate-180` }),
                        }),
                      ],
                    }),
                ],
              })),
            (n[47] = M),
            (n[48] = v),
            (n[49] = j),
            (n[50] = y),
            (n[51] = k),
            (n[52] = w),
            (n[53] = W))
          : (W = n[53]),
        (K = y && !v ? M.actions.viewportRef : void 0));
      let c = v
        ? `grid grid-cols-5 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-3 [@media(max-width:30rem)]:grid-cols-2 *:min-w-0`
        : `horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-36 *:flex-[0_0_calc((100%-3rem)/5)] [&::-webkit-scrollbar]:hidden`;
      (n[54] === c
        ? (q = n[55])
        : ((q = o(`tortilla-gallery-tiles -m-2 min-w-0 gap-3 p-3`, c)), (n[54] = c), (n[55] = q)),
        (J = t?.map((e) =>
          (0, X.jsx)(me, { suggestion: e, surface: `gallery`, selectionSurface: g, onOpen: r }, e.id),
        )));
      let l;
      (n[56] !== k || n[57] !== A || n[58] !== r || n[59] !== i || n[60] !== O || n[61] !== x || n[62] !== I
        ? ((l = (e, t) => {
            let {
              id: n,
              symbol: a,
              title: o,
              prompt: s,
              prefillPrompt: c,
              previewMarkdown: l,
              previewDocument: u,
              setupQuestion: d,
              followUp: f,
            } = e;
            return (0, X.jsx)(
              _e,
              {
                title: o,
                surface: `gallery`,
                preview: (0, X.jsx)(ye, {
                  symbol: a,
                  surface: `gallery`,
                  pageId: `space-template-preview-${n}`,
                  document: { title: o, markdown: l, units: u },
                }),
                disabled: O,
                onOpen: () => {
                  (i?.(n, I == null ? void 0 : t + 1),
                    ge({
                      scope: x,
                      templateId: n,
                      title: o,
                      prompt: s,
                      prefillPrompt: c,
                      followUp: f,
                      initialDocument: u,
                      initialSymbol: a,
                      setupQuestion: d,
                      revealSetupComment: n === `project-home` || n === `project-tracker`,
                      navigate: A,
                      intl: k,
                      onOpen: r,
                    }));
                },
              },
              n,
            );
          }),
          (n[56] = k),
          (n[57] = A),
          (n[58] = r),
          (n[59] = i),
          (n[60] = O),
          (n[61] = x),
          (n[62] = I),
          (n[63] = l))
        : (l = n[63]),
        (R = s.map(l)));
    }
    ((n[6] = M),
      (n[7] = h),
      (n[8] = F?.value),
      (n[9] = C),
      (n[10] = v),
      (n[11] = P),
      (n[12] = j),
      (n[13] = y),
      (n[14] = _),
      (n[15] = k),
      (n[16] = D),
      (n[17] = A),
      (n[18] = r),
      (n[19] = i),
      (n[20] = O),
      (n[21] = E),
      (n[22] = x),
      (n[23] = b),
      (n[24] = g),
      (n[25] = I),
      (n[26] = w),
      (n[27] = L),
      (n[28] = R),
      (n[29] = z),
      (n[30] = B),
      (n[31] = V),
      (n[32] = H),
      (n[33] = U),
      (n[34] = W),
      (n[35] = G),
      (n[36] = K),
      (n[37] = q),
      (n[38] = J));
  } else
    ((L = n[27]),
      (R = n[28]),
      (z = n[29]),
      (B = n[30]),
      (V = n[31]),
      (H = n[32]),
      (U = n[33]),
      (W = n[34]),
      (G = n[35]),
      (K = n[36]),
      (q = n[37]),
      (J = n[38]));
  if (G !== Symbol.for(`react.early_return_sentinel`)) return G;
  let Y;
  n[64] !== R || n[65] !== K || n[66] !== q || n[67] !== J
    ? ((Y = (0, X.jsxs)(`div`, { ref: K, className: q, children: [J, R] })),
      (n[64] = R),
      (n[65] = K),
      (n[66] = q),
      (n[67] = J),
      (n[68] = Y))
    : (Y = n[68]);
  let Q;
  n[69] !== z || n[70] !== B || n[71] !== V || n[72] !== H || n[73] !== U || n[74] !== W || n[75] !== Y
    ? ((Q = (0, X.jsxs)(`section`, {
        className: z,
        "aria-label": B,
        "aria-labelledby": V,
        onPointerEnter: H,
        onFocus: U,
        children: [W, Y],
      })),
      (n[69] = z),
      (n[70] = B),
      (n[71] = V),
      (n[72] = H),
      (n[73] = U),
      (n[74] = W),
      (n[75] = Y),
      (n[76] = Q))
    : (Q = n[76]);
  let $;
  return (
    n[77] !== L || n[78] !== Q
      ? (($ = (0, X.jsxs)(X.Fragment, { children: [Q, L] })), (n[77] = L), (n[78] = Q), (n[79] = $))
      : ($ = n[79]),
    $
  );
}
var be, xe, X, Z;
function Q() {
  return (Q = e(() => {
    ((be = l()),
      E(),
      R(),
      L(),
      s(),
      v(),
      (xe = r()),
      m(),
      c(),
      I(),
      A(),
      _(),
      f(),
      F(),
      n(),
      j(),
      V(),
      K(),
      G(),
      H(),
      W(),
      U(),
      q(),
      J(),
      (X = i()),
      (Z = h({
        heading: {
          id: `space.pageTemplates.heading`,
          defaultMessage: `Start with your data`,
          description: `Heading for Page templates that use the user's connected apps and selected sources`,
        },
        prefilledHeading: {
          id: `space.pageTemplates.prefilledHeading`,
          defaultMessage: `Start with a template`,
          description: `Heading above Page templates on the Space landing page for users without automated Work setup. Selecting one creates an editable Page with sample content and an unsent suggested chat message.`,
        },
        galleryHeading: {
          id: `space.pageTemplates.galleryHeading`,
          defaultMessage: `Pages`,
          description: `Short category heading for collaborative, auto-updating Page templates in the Space template gallery modal, alongside the other template categories.`,
        },
      })));
  }))();
}
function $(e) {
  let t = (0, Se.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ onUseTemplate: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n ? (i = t[4]) : ((i = (e, t) => n(t, e.path)), (t[3] = n), (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Ce.jsx)(B, { ...r, enabled: !0, hostId: g, cwd: null, onUseSkill: i })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var Se, Ce;
function we() {
  return (we = e(() => {
    ((Se = l()), z(), y(), (Ce = i()));
  }))();
}
function Te(e) {
  let n = (0, Ee.c)(12),
    { children: r, onOpenDraft: i, onTemplateSelected: a } = e,
    o = t(d),
    s = ne(),
    c;
  n[0] !== i || n[1] !== o
    ? ((c = (e, t) => {
        let n = t === void 0 ? `file` : t;
        (i?.(),
          O(o, {
            codexAppMode: `chat`,
            prefillPrompt: e,
            prefillPromptFormat: `markdown`,
            libraryFileCreation: n === `file` || void 0,
            startInSidebar: !0,
            selectChat: !0,
          }));
      }),
      (n[0] = i),
      (n[1] = o),
      (n[2] = c))
    : (c = n[2]);
  let l = c,
    u;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = [`presentation`, `spreadsheet`, `document`]), (n[3] = u))
    : (u = n[3]);
  let f;
  n[4] !== s || n[5] !== a || n[6] !== l
    ? ((f = (e, t) => {
        a?.(e);
        let n = C(e.type) === `document`;
        l(
          n
            ? s.formatMessage(
                {
                  id: `space.templates.useTemplate.pagePrompt`,
                  defaultMessage: `Use the {templateName} template to create a native Page in Space. Adapt its content and structure to Page blocks, not a Word document, Google Doc, or downloadable file. Save the result as a Page in Space and return its link.`,
                  description: `Editable chat prompt after selecting a document template in Space. Requests a native Space Page rather than a file. templateName is a Markdown link to the selected template. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                },
                { templateName: w(e.name, t) },
              )
            : s.formatMessage(
                {
                  id: `home.artifactTemplates.useTemplate.prompt`,
                  defaultMessage: `Use the {templateName} template.`,
                  description: `Composer text added after selecting an artifact template`,
                },
                { templateName: w(e.name, t) },
              ),
          n ? `page` : `file`,
        );
      }),
      (n[4] = s),
      (n[5] = a),
      (n[6] = l),
      (n[7] = f))
    : (f = n[7]);
  let p;
  return (
    n[8] !== r || n[9] !== l || n[10] !== f
      ? ((p = (0, De.jsx)(M, {
          children: (0, De.jsx)($, { categories: u, onPrompt: l, onUseTemplate: f, children: r }),
        })),
        (n[8] = r),
        (n[9] = l),
        (n[10] = f),
        (n[11] = p))
      : (p = n[11]),
    p
  );
}
var Ee, De;
function Oe() {
  return (Oe = e(() => {
    ((Ee = l()), x(), v(), m(), N(), k(), b(), D(), n(), P(), we(), (De = i()));
  }))();
}
export { Q as i, Oe as n, Y as r, Te as t };
//# sourceMappingURL=space-template-catalog-a49215b2a818.js.map
