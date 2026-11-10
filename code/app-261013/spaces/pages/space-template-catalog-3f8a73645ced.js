import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  CM as r,
  Cot as i,
  DF as a,
  Ext as o,
  IDt as s,
  IV as c,
  Ixt as l,
  Pxt as u,
  RV as d,
  TF as f,
  TJ as p,
  TM as m,
  VDt as ee,
  Vxt as h,
  _Mt as te,
  _xt as g,
  gMt as _,
  iot as v,
  jDt as y,
  oot as b,
  t3 as x,
  vzt as S,
  wot as C,
  xMt as w,
  yzt as T,
  zxt as ne,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dun as E,
  Eun as re,
  Hut as D,
  IYt as O,
  Mcn as ie,
  Uut as ae,
  YMr as oe,
  fMr as k,
  jcn as A,
  oo as j,
  so as M,
  tNr as N,
  xMr as se,
  zYt as P,
} from "./app-initial-5851df3f6cb1.js";
import { c as ce, d as le, l as F } from "./template-gallery-modal-336945a0604c.js";
import { n as I } from "./base-carousel-4c9d62a2a0f3.js";
import { n as L, t as R } from "./local-template-catalog-a372c79f39a5.js";
import {
  a as ue,
  c as z,
  i as de,
  l as fe,
  o as pe,
  s as B,
  t as V,
} from "./personalized-pages-f207fdb0390c.js";
import {
  a as H,
  c as U,
  d as W,
  i as me,
  l as he,
  n as ge,
  o as _e,
  r as ve,
  s as G,
  t as K,
  u as ye,
} from "./template-page-creation-cf203b187288.js";
function q(e) {
  let n = (0, be.c)(80),
    {
      onOpen: r,
      onSelect: a,
      selectionSurface: u,
      inset: f,
      expanded: p,
      inTemplateGallery: m,
      search: te,
      children: g,
    } = e,
    v = u === void 0 ? re.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL : u,
    y = f === void 0 || f,
    b = p !== void 0 && p,
    x = m !== void 0 && m,
    S = te === void 0 ? `` : te,
    C = l(i),
    w = h(ie),
    T = h(se).status === `allowed`,
    E = ne(de, `template-modal`),
    D = h(ue),
    O = h(ve),
    k = ee(),
    A = o(),
    j = (0, xe.useId)(),
    M = le(),
    N;
  n[0] === k ? (N = n[1]) : ((N = k.formatMessage(Y.prefilledHeading)), (n[0] = k), (n[1] = N));
  let P = N;
  if (x) {
    let e;
    (n[2] === k ? (e = n[3]) : ((e = k.formatMessage(Y.galleryHeading)), (n[2] = k), (n[3] = e)), (P = e));
  } else if (T) {
    let e;
    (n[4] === k ? (e = n[5]) : ((e = k.formatMessage(Y.heading)), (n[4] = k), (n[5] = e)), (P = e));
  }
  let F = h(fe),
    I = h(oe),
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
    X;
  if (
    n[6] !== M ||
    n[7] !== g ||
    n[8] !== F?.value ||
    n[9] !== w ||
    n[10] !== b ||
    n[11] !== P ||
    n[12] !== j ||
    n[13] !== x ||
    n[14] !== y ||
    n[15] !== k ||
    n[16] !== D ||
    n[17] !== A ||
    n[18] !== r ||
    n[19] !== a ||
    n[20] !== O ||
    n[21] !== E ||
    n[22] !== C ||
    n[23] !== S ||
    n[24] !== v ||
    n[25] !== I ||
    n[26] !== T
  ) {
    G = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = S.trim().toLocaleLowerCase(),
        i = E?.filter((t) => {
          let { title: n, description: r } = t;
          return `${n} ${r ?? ``}`.toLocaleLowerCase().includes(e);
        }),
        o = w
          ? he(pe(k, F?.value), I).filter((t) => {
              let { title: n, previewMarkdown: r } = t;
              return `${n} ${r}`.toLocaleLowerCase().includes(e);
            })
          : [];
      if (!i?.length && o.length === 0) {
        let e;
        (n[39] !== g || n[40] !== D
          ? ((e = g?.(!1, D) ?? null), (n[39] = g), (n[40] = D), (n[41] = e))
          : (e = n[41]),
          (G = e));
        break bb0;
      }
      (n[42] !== g || n[43] !== y || n[44] !== D
        ? ((L = g?.(!0, D)),
          (z = _(y && `p-6 pb-3 [@media(max-width:48rem)]:px-4`, !y && L && `pb-6`)),
          (n[42] = g),
          (n[43] = y),
          (n[44] = D),
          (n[45] = L),
          (n[46] = z))
        : ((L = n[45]), (z = n[46])),
        (B = b ? P : void 0),
        (V = b ? void 0 : j),
        (H = ae),
        (U = ae),
        n[47] !== M || n[48] !== b || n[49] !== j || n[50] !== x || n[51] !== k || n[52] !== T
          ? ((W =
              !b &&
              (0, J.jsxs)(`div`, {
                className: `mb-3 flex items-start justify-between gap-2`,
                children: [
                  (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1`,
                    children: [
                      (0, J.jsxs)(`h3`, {
                        id: j,
                        className: _(
                          `tortilla-gallery-group-heading m-0 font-semibold`,
                          x ? `body-md` : `text-sm`,
                        ),
                        children: [
                          x && (0, J.jsx)(s, { ...Y.galleryHeading }),
                          !x && T && (0, J.jsx)(s, { ...Y.heading }),
                          !x && !T && (0, J.jsx)(s, { ...Y.prefilledHeading }),
                        ],
                      }),
                      (0, J.jsxs)(`p`, {
                        className: _(`m-0`, x ? `body-sm text-secondary` : `text-xs text-tertiary`),
                        children: [
                          !T &&
                            (0, J.jsx)(s, {
                              id: `space.pageTemplates.nonWorkByline`,
                              defaultMessage: `Start with a Page template and make it your own`,
                              description: `Caption for Page templates in the Space gallery or landing page when automated Work setup is unavailable. Selecting a template creates an editable Page with sample content and places an unsent suggested message in Page chat.`,
                            }),
                          T &&
                            x &&
                            (0, J.jsx)(s, {
                              id: `space.pageTemplates.galleryByline`,
                              defaultMessage: `Collaborate with ChatGPT and your teammates to create powerful, auto-updating pages`,
                              description: `Caption below the Pages category heading in the Space template gallery modal. Explains that teammates can collaborate with ChatGPT on Pages that update automatically.`,
                            }),
                          T &&
                            !x &&
                            (0, J.jsx)(s, {
                              id: `space.pageTemplates.pluginsByline`,
                              defaultMessage: `Create pages using knowledge from Slack, Gmail, Teams, and more`,
                              description: `Caption below Start with your data in the Space Templates gallery. Explains that these Page templates can use any connected apps, and can prompt for connection in chat. Preserve Slack, Gmail and Teams as brand names. This is informational text, not a link or a connection button.`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  x &&
                    (M.model.canPrevious || M.model.canNext) &&
                    (0, J.jsxs)(`div`, {
                      className: `flex shrink-0 items-center gap-1`,
                      children: [
                        (0, J.jsx)(t, {
                          type: `button`,
                          color: `ghostActive`,
                          size: `toolbar`,
                          uniform: !0,
                          "aria-label": k.formatMessage(ce.previousTemplates, {
                            category: k.formatMessage(Y.galleryHeading),
                          }),
                          disabled: !M.model.canPrevious,
                          onClick: M.actions.previous,
                          children: (0, J.jsx)(c, { className: `rtl:rotate-180` }),
                        }),
                        (0, J.jsx)(t, {
                          type: `button`,
                          color: `ghostActive`,
                          size: `toolbar`,
                          uniform: !0,
                          "aria-label": k.formatMessage(ce.nextTemplates, {
                            category: k.formatMessage(Y.galleryHeading),
                          }),
                          disabled: !M.model.canNext,
                          onClick: M.actions.next,
                          children: (0, J.jsx)(d, { className: `rtl:rotate-180` }),
                        }),
                      ],
                    }),
                ],
              })),
            (n[47] = M),
            (n[48] = b),
            (n[49] = j),
            (n[50] = x),
            (n[51] = k),
            (n[52] = T),
            (n[53] = W))
          : (W = n[53]),
        (K = x && !b ? M.actions.viewportRef : void 0));
      let l = b
        ? `grid grid-cols-5 overflow-visible [@media(30rem<width<=48rem)]:grid-cols-3 [@media(max-width:30rem)]:grid-cols-2 *:min-w-0`
        : `horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-36 *:flex-[0_0_calc((100%-3rem)/5)] [&::-webkit-scrollbar]:hidden`;
      (n[54] === l
        ? (q = n[55])
        : ((q = _(`tortilla-gallery-tiles -m-2 min-w-0 gap-3 p-3`, l)), (n[54] = l), (n[55] = q)),
        (X = i?.map((e) =>
          (0, J.jsx)(me, { suggestion: e, surface: `gallery`, selectionSurface: v, onOpen: r }, e.id),
        )));
      let u;
      (n[56] !== k || n[57] !== A || n[58] !== r || n[59] !== a || n[60] !== O || n[61] !== C || n[62] !== I
        ? ((u = (e, t) => {
            let {
              id: n,
              symbol: i,
              title: o,
              prompt: s,
              prefillPrompt: c,
              previewMarkdown: l,
              previewDocument: u,
              setupQuestion: d,
              followUp: f,
            } = e;
            return (0, J.jsx)(
              _e,
              {
                title: o,
                surface: `gallery`,
                preview: (0, J.jsx)(ye, {
                  symbol: i,
                  surface: `gallery`,
                  pageId: `space-template-preview-${n}`,
                  document: { title: o, markdown: l, units: u },
                }),
                disabled: O,
                onOpen: () => {
                  (a?.(n, I == null ? void 0 : t + 1),
                    ge({
                      scope: C,
                      templateId: n,
                      title: o,
                      prompt: s,
                      prefillPrompt: c,
                      followUp: f,
                      initialDocument: u,
                      initialSymbol: i,
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
          (n[59] = a),
          (n[60] = O),
          (n[61] = C),
          (n[62] = I),
          (n[63] = u))
        : (u = n[63]),
        (R = o.map(u)));
    }
    ((n[6] = M),
      (n[7] = g),
      (n[8] = F?.value),
      (n[9] = w),
      (n[10] = b),
      (n[11] = P),
      (n[12] = j),
      (n[13] = x),
      (n[14] = y),
      (n[15] = k),
      (n[16] = D),
      (n[17] = A),
      (n[18] = r),
      (n[19] = a),
      (n[20] = O),
      (n[21] = E),
      (n[22] = C),
      (n[23] = S),
      (n[24] = v),
      (n[25] = I),
      (n[26] = T),
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
      (n[38] = X));
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
      (X = n[38]));
  if (G !== Symbol.for(`react.early_return_sentinel`)) return G;
  let Z;
  n[64] !== R || n[65] !== K || n[66] !== q || n[67] !== X
    ? ((Z = (0, J.jsxs)(`div`, { ref: K, className: q, children: [X, R] })),
      (n[64] = R),
      (n[65] = K),
      (n[66] = q),
      (n[67] = X),
      (n[68] = Z))
    : (Z = n[68]);
  let Q;
  n[69] !== z || n[70] !== B || n[71] !== V || n[72] !== H || n[73] !== U || n[74] !== W || n[75] !== Z
    ? ((Q = (0, J.jsxs)(`section`, {
        className: z,
        "aria-label": B,
        "aria-labelledby": V,
        onPointerEnter: H,
        onFocus: U,
        children: [W, Z],
      })),
      (n[69] = z),
      (n[70] = B),
      (n[71] = V),
      (n[72] = H),
      (n[73] = U),
      (n[74] = W),
      (n[75] = Z),
      (n[76] = Q))
    : (Q = n[76]);
  let $;
  return (
    n[77] !== L || n[78] !== Q
      ? (($ = (0, J.jsxs)(J.Fragment, { children: [Q, L] })), (n[77] = L), (n[78] = Q), (n[79] = $))
      : ($ = n[79]),
    $
  );
}
var be, xe, J, Y;
function X() {
  return (X = e(() => {
    ((be = S()),
      E(),
      I(),
      F(),
      te(),
      u(),
      (xe = T()),
      y(),
      g(),
      N(),
      k(),
      x(),
      p(),
      D(),
      C(),
      A(),
      z(),
      W(),
      U(),
      B(),
      H(),
      V(),
      G(),
      K(),
      (J = w()),
      (Y = n({
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
function Z(e) {
  let t = (0, Q.c)(8),
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
      ? ((a = (0, $.jsx)(R, { ...r, enabled: !0, hostId: v, cwd: null, onUseSkill: i })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var Q, $;
function Se() {
  return (Se = e(() => {
    ((Q = S()), L(), b(), ($ = w()));
  }))();
}
function Ce(e) {
  let t = (0, we.c)(12),
    { children: n, onOpenDraft: r, onTemplateSelected: a } = e,
    o = l(i),
    s = ee(),
    c;
  t[0] !== r || t[1] !== o
    ? ((c = (e, t) => {
        let n = t === void 0 ? `file` : t;
        (r?.(),
          P(o, {
            codexAppMode: `chat`,
            prefillPrompt: e,
            prefillPromptFormat: `markdown`,
            libraryFileCreation: n === `file` || void 0,
            startInSidebar: !0,
            selectChat: !0,
          }));
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = c))
    : (c = t[2]);
  let u = c,
    d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = [`presentation`, `spreadsheet`, `document`]), (t[3] = d))
    : (d = t[3]);
  let p;
  t[4] !== s || t[5] !== a || t[6] !== u
    ? ((p = (e, t) => {
        a?.(e);
        let n = f(e.type) === `document`;
        u(
          n
            ? s.formatMessage(
                {
                  id: `space.templates.useTemplate.pagePrompt`,
                  defaultMessage: `Use the {templateName} template to create a native Page in Space. Adapt its content and structure to Page blocks, not a Word document, Google Doc, or downloadable file. Save the result as a Page in Space and return its link.`,
                  description: `Editable chat prompt after selecting a document template in Space. Requests a native Space Page rather than a file. templateName is a Markdown link to the selected template. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                },
                { templateName: m(e.name, t) },
              )
            : s.formatMessage(
                {
                  id: `home.artifactTemplates.useTemplate.prompt`,
                  defaultMessage: `Use the {templateName} template.`,
                  description: `Composer text added after selecting an artifact template`,
                },
                { templateName: m(e.name, t) },
              ),
          n ? `page` : `file`,
        );
      }),
      (t[4] = s),
      (t[5] = a),
      (t[6] = u),
      (t[7] = p))
    : (p = t[7]);
  let h;
  return (
    t[8] !== n || t[9] !== u || t[10] !== p
      ? ((h = (0, Te.jsx)(j, {
          children: (0, Te.jsx)(Z, { categories: d, onPrompt: u, onUseTemplate: p, children: n }),
        })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = p),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
var we, Te;
function Ee() {
  return (Ee = e(() => {
    ((we = S()), a(), u(), y(), M(), r(), O(), C(), Se(), (Te = w()));
  }))();
}
export { X as i, Ee as n, q as r, Ce as t };
//# sourceMappingURL=space-template-catalog-3f8a73645ced.js.map
