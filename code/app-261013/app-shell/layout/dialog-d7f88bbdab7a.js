import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cot as a,
  Dl as o,
  Ext as s,
  FV as c,
  IDt as l,
  Ixt as ee,
  Mz as te,
  Nz as ne,
  Ol as re,
  Pxt as ie,
  TJ as u,
  TO as d,
  VDt as ae,
  Vxt as f,
  _O as oe,
  _xt as se,
  eW as ce,
  fO as le,
  hot as ue,
  i3 as de,
  jDt as p,
  lot as m,
  mO as fe,
  oO as pe,
  oSt as h,
  r3 as me,
  t3 as he,
  tU as ge,
  vO as _e,
  vzt as g,
  wot as ve,
  xMt as _,
  yzt as ye,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5t as v,
  AEr as be,
  CLn as xe,
  DPr as Se,
  ELn as y,
  E_r as Ce,
  FWt as we,
  Fon as Te,
  Her as Ee,
  IWt as b,
  Ion as De,
  JPn as Oe,
  LG as ke,
  NDr as x,
  NPr as S,
  N_n as Ae,
  OPr as je,
  OWt as C,
  PWt as Me,
  P_n as Ne,
  QDr as Pe,
  VG as Fe,
  XDr as Ie,
  ZPn as Le,
  _vn as Re,
  bMr as ze,
  e7t as Be,
  eNr as Ve,
  eor as w,
  fMr as He,
  gon as T,
  gvn as Ue,
  hvn as We,
  ion as Ge,
  jDr as Ke,
  kEr as E,
  kPr as D,
  kWt as qe,
  m_r as O,
  mlt as k,
  mvn as Je,
  n7t as A,
  n9t as Ye,
  nT as j,
  pOr as Xe,
  plt as Ze,
  pvn as M,
  r9t as Qe,
  rT as $e,
  son as et,
  t7t as tt,
  tNr as N,
  tPr as P,
  tor as nt,
  vMr as rt,
  y7t as it,
  zLn as F,
  zOr as I,
} from "./app-initial-5851df3f6cb1.js";
import { n as at, r as ot, t as st } from "./project-device-picker-c835093b649c.js";
function ct(e) {
  "use forget";
  let n = (0, dt.c)(119),
    {
      allowLocalProjectCreation: r,
      conversationToMove: o,
      creationSource: ne,
      forceGlobalMemory: ie,
      onClose: u,
      onCloseAutoFocus: se,
      onCreated: le,
    } = e,
    de = r === void 0 || r,
    p = ie !== void 0 && ie,
    m = ee(a),
    h = ae(),
    he = s(),
    _e = $e(),
    [g, ve] = (0, L.useState)(null),
    [_, ye] = (0, L.useState)(!1),
    [v, xe] = (0, L.useState)(`unset`),
    [y, Te] = (0, L.useState)(``),
    [b, Oe] = (0, L.useState)(null),
    ke = f(Be),
    x;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = []), (n[0] = x)) : (x = n[0]);
  let [S, je] = (0, L.useState)(x),
    [C, Ne] = (0, L.useState)(null),
    Fe = (0, L.useRef)(null),
    Ie = f(rt),
    w = f(ze),
    He = f(nt),
    T = f(ft),
    Ke = qe(),
    E = de && w && !Ke,
    D;
  n[1] === y ? (D = n[2]) : ((D = y.trim()), (n[1] = y), (n[2] = D));
  let O = D,
    k = E && S.length > 0,
    A = !k && y.length > 50,
    j = k || (O.length > 0 && !A),
    M;
  n[3] !== j ||
  n[4] !== o ||
  n[5] !== ne ||
  n[6] !== g ||
  n[7] !== p ||
  n[8] !== h ||
  n[9] !== _ ||
  n[10] !== k ||
  n[11] !== _e ||
  n[12] !== v ||
  n[13] !== u ||
  n[14] !== le ||
  n[15] !== m ||
  n[16] !== S ||
  n[17] !== C ||
  n[18] !== O
    ? ((M = (e) => {
        if ((e.preventDefault(), !j || _)) return;
        ye(!0);
        let t = m.get(Xe),
          n = () => _e() && m.get(Xe) === t;
        (async () => {
          try {
            if (k) {
              let e = await Ae().createLocal({
                appearance: null,
                initializeDefaultWorkspaceGitRepository: !m.get(be),
                name: O,
                sources: S,
              });
              if (e == null) {
                requestAnimationFrame(() => {
                  Fe.current?.focus();
                });
                return;
              }
              (De(m, Ee(e.projectId)),
                Ce(m, e.projectId),
                Re({ scope: m, projectType: `local`, projectId: e.projectId }),
                u());
              return;
            }
            Pe(m, Me, { stage: we.CHATGPT_PROJECT_CREATION_STAGE_SUBMITTED, source: `new_project_dialog` });
            let e = await Ge({ scope: m, emoji: g, memoryScope: p ? `global` : v, name: O, theme: C });
            if (!n()) return;
            if ((Re({ scope: m, projectType: `cloud`, projectId: e.gizmo.id }), o != null)) {
              ne != null && Pe(m, Me, { stage: we.CHATGPT_PROJECT_CREATION_STAGE_OPENED, source: ne });
              let t = await ut({ scope: m, conversation: o, project: e, isCurrent: n });
              if (!n()) return;
              if (!t) {
                (m
                  .get(ue)
                  .danger(
                    h.formatMessage({
                      id: `chatgptConversations.projectDrop.createdMoveFailed`,
                      defaultMessage: `Project created, but the conversation could not be moved. Try moving it again from its menu`,
                      description: `Error after dropping a conversation onto New project when creation succeeds but moving the conversation fails or is no longer allowed. The created project remains available and the conversation keeps its current project membership.`,
                    }),
                    { errorAnalytics: { toastId: `chatgptConversations.projectDrop.createdMoveFailed` } },
                  ),
                  u());
                return;
              }
            }
            (le?.(e), u());
          } catch (e) {
            let t = e;
            if (!n()) return;
            (We({ scope: m, projectType: k ? `local` : `cloud`, error: t }),
              m
                .get(ue)
                .danger(h.formatMessage(z.createError), {
                  errorAnalytics: { toastId: `chatgptProjectCreateDialog.handleSubmit.createError` },
                }));
          }
        })().finally(() => ye(!1));
      }),
      (n[3] = j),
      (n[4] = o),
      (n[5] = ne),
      (n[6] = g),
      (n[7] = p),
      (n[8] = h),
      (n[9] = _),
      (n[10] = k),
      (n[11] = _e),
      (n[12] = v),
      (n[13] = u),
      (n[14] = le),
      (n[15] = m),
      (n[16] = S),
      (n[17] = C),
      (n[18] = O),
      (n[19] = M))
    : (M = n[19]);
  let Qe = M;
  if (ke != null && b == null) return null;
  if (E && b != null) {
    let e;
    n[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { "aria-describedby": void 0 }), (n[20] = e))
      : (e = n[20]);
    let t;
    n[21] !== u || n[22] !== m
      ? ((t = (e) => {
          e || (Je({ scope: m }), u());
        }),
        (n[21] = u),
        (n[22] = m),
        (n[23] = t))
      : (t = n[23]);
    let r;
    n[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, R.jsx)(oe, { children: (0, R.jsx)(l, { ...z.createTitle }) })), (n[24] = r))
      : (r = n[24]);
    let i;
    n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsxs)(pe, {
          children: [
            r,
            (0, R.jsxs)(`div`, {
              role: `status`,
              className: `flex items-center gap-2 text-secondary select-none`,
              children: [
                (0, R.jsx)(me, { className: `icon-sm` }),
                (0, R.jsx)(l, {
                  id: `projectSetup.loadingRemoteForm`,
                  defaultMessage: `Loading…`,
                  description: `Status while loading the remote project creation form`,
                }),
              ],
            }),
          ],
        })),
        (n[25] = i))
      : (i = n[25]);
    let a;
    n[26] === t
      ? (a = n[27])
      : ((a = (0, R.jsx)(fe, { open: !0, contentProps: e, onOpenChange: t, children: i })),
        (n[26] = t),
        (n[27] = a));
    let o;
    n[28] === b
      ? (o = n[29])
      : ((o = { type: `open-create-remote-project-modal`, hostId: b, setActive: !0 }),
        (n[28] = b),
        (n[29] = o));
    let s;
    n[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (e) => {
          (Te(e), Oe(null));
        }),
        (n[30] = s))
      : (s = n[30]);
    let c;
    n[31] !== y || n[32] !== u || n[33] !== o
      ? ((c = (0, R.jsx)(tt, { initialName: y, initialRequest: o, onClose: u, onSelectLocalDevice: s })),
        (n[31] = y),
        (n[32] = u),
        (n[33] = o),
        (n[34] = c))
      : (c = n[34]);
    let ee;
    return (
      n[35] !== a || n[36] !== c
        ? ((ee = (0, R.jsx)(L.Suspense, { fallback: a, children: c })),
          (n[35] = a),
          (n[36] = c),
          (n[37] = ee))
        : (ee = n[37]),
      ee
    );
  }
  let et = S.length > 0,
    N;
  n[38] === m
    ? (N = n[39])
    : ((N = (e) => {
        e !== `local` && (Ue({ scope: m, projectType: `remote` }), Oe(e));
      }),
      (n[38] = m),
      (n[39] = N));
  let P;
  n[40] !== _ || n[41] !== et || n[42] !== N
    ? ((P = (0, R.jsx)(st, { disabled: _, readOnly: et, selectedHostId: `local`, onSelect: N })),
      (n[40] = _),
      (n[41] = et),
      (n[42] = N),
      (n[43] = P))
    : (P = n[43]);
  let it = P,
    F;
  n[44] === se
    ? (F = n[45])
    : ((F = { "aria-describedby": void 0, onCloseAutoFocus: se }), (n[44] = se), (n[45] = F));
  let I;
  n[46] !== _ || n[47] !== u || n[48] !== m
    ? ((I = (e) => {
        !e && !_ && (Je({ scope: m }), u());
      }),
      (n[46] = _),
      (n[47] = u),
      (n[48] = m),
      (n[49] = I))
    : (I = n[49]);
  let ot = !_,
    ct = He ? `compact` : void 0,
    pt = He ? void 0 : `chatgpt`,
    mt;
  n[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, R.jsx)(`header`, {
        className: `flex min-h-13 shrink-0 items-center py-2 ps-4 pe-13 select-none pointer-coarse:min-h-14`,
        children: (0, R.jsx)(oe, {
          className: `text-heading-sm leading-7 font-normal text-default`,
          children: (0, R.jsx)(l, { ...z.createTitle }),
        }),
      })),
      (n[50] = mt))
    : (mt = n[50]);
  let ht;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, R.jsx)(`label`, {
        className: `text-sm leading-5 text-default select-none`,
        htmlFor: `chatgpt-project-name`,
        children: (0, R.jsx)(l, { ...z.createNameLabel }),
      })),
      (n[51] = ht))
    : (ht = n[51]);
  let gt = A ? `chatgpt-project-name-error` : void 0,
    _t = A ? !0 : void 0,
    vt;
  n[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (e) => {
        Te(e.target.value);
      }),
      (n[52] = vt))
    : (vt = n[52]);
  let B;
  n[53] === h ? (B = n[54]) : ((B = h.formatMessage(z.createNamePlaceholder)), (n[53] = h), (n[54] = B));
  let V;
  n[55] !== _ || n[56] !== y || n[57] !== gt || n[58] !== _t || n[59] !== B
    ? ((V = (0, R.jsx)(`input`, {
        id: `chatgpt-project-name`,
        className: `col-start-1 row-start-1 h-9 w-full min-w-0 rounded-lg border border-primary-outline bg-transparent px-9 py-2 text-sm leading-5 text-default outline-none placeholder:text-tertiary focus:border-ring`,
        "aria-describedby": gt,
        "aria-invalid": _t,
        autoComplete: `off`,
        autoFocus: !0,
        disabled: _,
        name: `project-name`,
        type: `text`,
        value: y,
        onChange: vt,
        placeholder: B,
      })),
      (n[55] = _),
      (n[56] = y),
      (n[57] = gt),
      (n[58] = _t),
      (n[59] = B),
      (n[60] = V))
    : (V = n[60]);
  let H;
  n[61] !== g || n[62] !== h || n[63] !== _ || n[64] !== k || n[65] !== C || n[66] !== O
    ? ((H = k
        ? (0, R.jsx)(`div`, {
            className: `col-start-1 row-start-1 flex size-9 items-center justify-center text-codex-description`,
            children: (0, R.jsx)(te, { asset: re }),
          })
        : (0, R.jsx)(`div`, {
            className: `col-start-1 row-start-1 flex size-9 items-center justify-center`,
            children: (0, R.jsx)(Ze, {
              canEditProject: !0,
              defaultIcon: (0, R.jsx)(ge, {}),
              emoji: g,
              isSaving: _,
              onEmojiChange: ve,
              onThemeChange: Ne,
              projectName:
                O ||
                h.formatMessage({
                  id: `chatgptConversations.sidebar.project.createAppearanceProjectName`,
                  defaultMessage: `New project`,
                  description: `Fallback project name used in the icon and color picker accessible label before the user names a new ChatGPT project`,
                }),
              theme: C,
              variant: `settings`,
            }),
          })),
      (n[61] = g),
      (n[62] = h),
      (n[63] = _),
      (n[64] = k),
      (n[65] = C),
      (n[66] = O),
      (n[67] = H))
    : (H = n[67]);
  let U;
  n[68] !== V || n[69] !== H
    ? ((U = (0, R.jsxs)(`div`, { className: `grid grid-cols-1 grid-rows-1`, children: [V, H] })),
      (n[68] = V),
      (n[69] = H),
      (n[70] = U))
    : (U = n[70]);
  let W;
  n[71] === A
    ? (W = n[72])
    : ((W = A
        ? (0, R.jsx)(`p`, {
            id: `chatgpt-project-name-error`,
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, R.jsx)(l, {
              id: `chatgptConversations.sidebar.projectSettings.projectNameTooLong`,
              defaultMessage: `Project name cannot be longer than {length} characters`,
              description: `Validation error when a ChatGPT project name is too long`,
              values: { length: 50 },
            }),
          })
        : null),
      (n[71] = A),
      (n[72] = W));
  let G;
  n[73] !== U || n[74] !== W
    ? ((G = (0, R.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [ht, U, W] })),
      (n[73] = U),
      (n[74] = W),
      (n[75] = G))
    : (G = n[75]);
  let K;
  n[76] !== it || n[77] !== _ || n[78] !== E || n[79] !== S
    ? ((K = E
        ? (0, R.jsx)(Ye, {
            disabled: _,
            sources: S,
            setSources: je,
            deviceLabel: S.length > 0 ? it : void 0,
            renderAddFolder:
              S.length > 0 ? void 0 : (e) => (0, R.jsx)(at, { disabled: _, onAdd: e, children: it }),
          })
        : null),
      (n[76] = it),
      (n[77] = _),
      (n[78] = E),
      (n[79] = S),
      (n[80] = K))
    : (K = n[80]);
  let q;
  n[81] === K ? (q = n[82]) : ((q = (0, R.jsx)(R.Fragment, { children: K })), (n[81] = K), (n[82] = q));
  let J;
  n[83] === k
    ? (J = n[84])
    : ((J = k
        ? null
        : (0, R.jsxs)(`aside`, {
            className: `mt-4 flex items-center gap-2 rounded-xl bg-background-secondary-soft-alpha p-3 select-none`,
            children: [
              (0, R.jsx)(`div`, {
                className: `flex size-6 shrink-0 items-center justify-center text-secondary`,
                children: (0, R.jsx)(ce, {}),
              }),
              (0, R.jsx)(`p`, {
                className: `text-xs leading-4 text-pretty text-secondary`,
                children: (0, R.jsx)(l, { ...z.createHelper }),
              }),
            ],
          })),
      (n[83] = k),
      (n[84] = J));
  let Y;
  n[85] !== G || n[86] !== q || n[87] !== J
    ? ((Y = (0, R.jsxs)(`div`, {
        className: `flex min-h-0 flex-col overflow-y-auto px-4 pt-2`,
        children: [G, q, J],
      })),
      (n[85] = G),
      (n[86] = q),
      (n[87] = J),
      (n[88] = Y))
    : (Y = n[88]);
  let X;
  n[89] !== p ||
  n[90] !== h ||
  n[91] !== _ ||
  n[92] !== k ||
  n[93] !== v ||
  n[94] !== T ||
  n[95] !== he ||
  n[96] !== u ||
  n[97] !== m ||
  n[98] !== Ie ||
  n[99] !== w
    ? ((X =
        !k && T != null && T !== `unavailable`
          ? (0, R.jsxs)(i, {
              align: `start`,
              side: `bottom`,
              sideOffset: 8,
              disabled: _,
              surface: `chatgpt`,
              triggerButton: (0, R.jsxs)(t, {
                color: `ghostActive`,
                size: `dialogGhost`,
                type: `button`,
                children: [
                  (0, R.jsx)(l, {
                    ...(v === `project_v2` ? z.createMemoryProjectOnlyLabel : z.createMemoryDefaultLabel),
                  }),
                  (0, R.jsx)(c, {}),
                ],
              }),
              children: [
                T === `disabled`
                  ? (0, R.jsx)(d.Item, {
                      subTextAllowWrap: !0,
                      SubText: (0, R.jsx)(l, {
                        id: `chatgptConversations.sidebar.project.createMemoryDisabledDescription`,
                        defaultMessage: `Memory is off. Enable it in <link>Settings</link> to use memory within projects.`,
                        description: `Explanation in the Create project memory menu when the user's account Memory setting is off. The entire menu item opens Personalization settings; the link tag underlines Settings.`,
                        values: { link: lt },
                      }),
                      onSelect: () => {
                        m.get(Ve) && Se(m, `3466753652`)
                          ? (Je({ scope: m }), u(), he(`/settings/personalization`))
                          : Le({
                              href: `https://chatgpt.com/#settings/Personalization`,
                              initiator: `open_in_browser_bridge`,
                              openTarget: `external-browser`,
                            });
                      },
                      children: (0, R.jsx)(l, {
                        id: `chatgptConversations.sidebar.project.createMemoryDisabledLabel`,
                        defaultMessage: `Memory`,
                        description: `Label for the Create project menu item explaining that account Memory is off and opening Personalization settings`,
                      }),
                    })
                  : (0, R.jsxs)(d.RadioGroup, {
                      "aria-label": h.formatMessage(z.createMemoryLabel),
                      value: v,
                      children: [
                        (0, R.jsx)(d.RadioItem, {
                          value: `unset`,
                          variant: `chatgpt`,
                          SubText: (0, R.jsx)(l, { ...z.createMemoryDefaultDescription }),
                          onSelect: () => xe(`unset`),
                          children: (0, R.jsx)(l, { ...z.createMemoryDefaultLabel }),
                        }),
                        (0, R.jsx)(d.RadioItem, {
                          value: `project_v2`,
                          disabled: p,
                          variant: `chatgpt`,
                          SubText:
                            Ie || w
                              ? (0, R.jsx)(l, {
                                  id: `chatgptConversations.sidebar.project.createMemoryProjectOnlyDescriptionWithWork`,
                                  defaultMessage: `This project can only access its own memory. Its memory is hidden from outside chats. Work in the cloud isn’t available for this type of project.`,
                                  description: `Supporting text below the Project-only memory option in the Create project dialog for users with Work access. It explains that memory stays within this project and that cloud Work cannot be used with this project type. Local Work may remain available.`,
                                })
                              : (0, R.jsx)(l, { ...z.createMemoryProjectOnlyDescription }),
                          onSelect: () => xe(`project_v2`),
                          children: (0, R.jsx)(l, { ...z.createMemoryProjectOnlyLabel }),
                        }),
                      ],
                    }),
                T === `enabled-sunshine`
                  ? (0, R.jsxs)(R.Fragment, {
                      children: [
                        (0, R.jsx)(d.Separator, { variant: `chatgpt` }),
                        (0, R.jsx)(d.Message, {
                          variant: `chatgpt`,
                          children: (0, R.jsx)(l, { ...z.createMemoryWarning }),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (n[89] = p),
      (n[90] = h),
      (n[91] = _),
      (n[92] = k),
      (n[93] = v),
      (n[94] = T),
      (n[95] = he),
      (n[96] = u),
      (n[97] = m),
      (n[98] = Ie),
      (n[99] = w),
      (n[100] = X))
    : (X = n[100]);
  let yt = !j,
    bt;
  n[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, R.jsx)(l, { ...z.createConfirm })), (n[101] = bt))
    : (bt = n[101]);
  let Z;
  n[102] !== _ || n[103] !== yt
    ? ((Z = (0, R.jsx)(t, {
        ref: Fe,
        className: `ms-auto`,
        color: `primary`,
        size: `dialog`,
        type: `submit`,
        disabled: yt,
        loading: _,
        children: bt,
      })),
      (n[102] = _),
      (n[103] = yt),
      (n[104] = Z))
    : (Z = n[104]);
  let Q;
  n[105] !== X || n[106] !== Z
    ? ((Q = (0, R.jsxs)(`footer`, {
        className: `flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 select-none`,
        children: [X, Z],
      })),
      (n[105] = X),
      (n[106] = Z),
      (n[107] = Q))
    : (Q = n[107]);
  let $;
  n[108] !== Qe || n[109] !== Y || n[110] !== Q
    ? (($ = (0, R.jsxs)(pe, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onSubmit: Qe,
        children: [mt, Y, Q],
      })),
      (n[108] = Qe),
      (n[109] = Y),
      (n[110] = Q),
      (n[111] = $))
    : ($ = n[111]);
  let xt;
  return (
    n[112] !== I || n[113] !== ot || n[114] !== ct || n[115] !== pt || n[116] !== $ || n[117] !== F
      ? ((xt = (0, R.jsx)(fe, {
          open: !0,
          contentProps: F,
          onOpenChange: I,
          showDialogClose: ot,
          size: `large`,
          radius: ct,
          variant: pt,
          children: $,
        })),
        (n[112] = I),
        (n[113] = ot),
        (n[114] = ct),
        (n[115] = pt),
        (n[116] = $),
        (n[117] = F),
        (n[118] = xt))
      : (xt = n[118]),
    xt
  );
}
function lt(e) {
  return (0, R.jsx)(`span`, { className: `underline`, children: e });
}
async function ut({ scope: e, conversation: t, project: n, isCurrent: r }) {
  try {
    let i = await ke(e, t.id);
    return !r() ||
      i == null ||
      i.isMemoryBlocked ||
      (i.conversation.gizmo_id ?? null) !== (t.gizmo_id ?? null) ||
      (i.isWorkConversation && (xe(n) !== `open-default` || !F(n)))
      ? !1
      : (await T({ scope: e, conversationId: t.id, projectId: n.gizmo.id }), !0);
  } catch {
    return !1;
  }
}
var dt, L, R, ft, z;
function pt() {
  return (pt = e(() => {
    ((dt = g()),
      b(),
      o(),
      ie(),
      (L = ye()),
      p(),
      se(),
      N(),
      He(),
      he(),
      _e(),
      le(),
      r(),
      Oe(),
      ne(),
      u(),
      de(),
      m(),
      C(),
      Ie(),
      Qe(),
      A(),
      ot(),
      M(),
      Ne(),
      v(),
      ve(),
      O(),
      E(),
      w(),
      Te(),
      je(),
      j(),
      I(),
      k(),
      it(),
      y(),
      x(),
      Fe(),
      et(),
      (R = _()),
      (ft = h(a, ({ get: e }) => {
        let t = e(Xe);
        if (t == null || e(S)) return;
        let { data: n } = e(Ke);
        if (n == null) return;
        let r = e(D, `1862054621`);
        if (r && n.m3mEnabled === !0) return `enabled-m3m`;
        let { data: i } = e(P, t);
        if (i != null)
          return i.features?.includes(`sunshine_available`)
            ? !r && n.sunshineEnabled
              ? `enabled-sunshine`
              : `disabled`
            : `unavailable`;
      })),
      (z = n({
        createConfirm: {
          id: `chatgptConversations.sidebar.project.createConfirm`,
          defaultMessage: `Create project`,
          description: `Primary button label for creating a ChatGPT project`,
        },
        createError: {
          id: `chatgptConversations.sidebar.project.createError`,
          defaultMessage: `Failed to create project`,
          description: `Toast shown when creating a ChatGPT project fails`,
        },
        createNameLabel: {
          id: `chatgptConversations.sidebar.project.createNameLabel`,
          defaultMessage: `Project name`,
          description: `Label for the ChatGPT project creation name input`,
        },
        createNamePlaceholder: {
          id: `chatgptConversations.sidebar.project.createNamePlaceholder`,
          defaultMessage: `Copenhagen Trip`,
          description: `Placeholder for the ChatGPT project creation name input`,
        },
        createMemoryDefaultDescription: {
          id: `chatgptConversations.sidebar.project.createMemoryDefaultDescription`,
          defaultMessage: `This project can access memory from outside chats, and vice versa.`,
          description: `Description for the default ChatGPT project memory option`,
        },
        createMemoryDefaultLabel: {
          id: `chatgptConversations.sidebar.project.createMemoryDefaultLabel`,
          defaultMessage: `Default memory`,
          description: `Label for the default ChatGPT project memory option`,
        },
        createMemoryLabel: {
          id: `chatgptConversations.sidebar.project.createMemoryLabel`,
          defaultMessage: `Memory scope`,
          description: `Accessible label for the ChatGPT project memory scope menu option group`,
        },
        createMemoryProjectOnlyDescription: {
          id: `chatgptConversations.sidebar.project.createMemoryProjectOnlyDescription`,
          defaultMessage: `This project can only access its own memory. Its memory is hidden from outside chats.`,
          description: `Description for the project-only ChatGPT project memory option`,
        },
        createMemoryProjectOnlyLabel: {
          id: `chatgptConversations.sidebar.project.createMemoryProjectOnlyLabel`,
          defaultMessage: `Project-only memory`,
          description: `Label for the project-only ChatGPT project memory option`,
        },
        createMemoryWarning: {
          id: `chatgptConversations.sidebar.project.createMemoryWarning`,
          defaultMessage: `This setting can't be changed later.`,
          description: `Warning shown because ChatGPT project memory scope is fixed after creation`,
        },
        createHelper: {
          id: `chatgptConversations.sidebar.project.createHelper`,
          defaultMessage: `Projects keep chats, files, and custom instructions in one place. Use them for ongoing work, or just to keep things tidy.`,
          description: `Helper text for the ChatGPT project creation dialog`,
        },
        createTitle: {
          id: `chatgptConversations.sidebar.project.createTitle`,
          defaultMessage: `Create project`,
          description: `Title for the ChatGPT project creation dialog`,
        },
      })));
  }))();
}
pt();
export { ct as ChatGptProjectCreateDialog };
//# sourceMappingURL=dialog-d7f88bbdab7a.js.map
