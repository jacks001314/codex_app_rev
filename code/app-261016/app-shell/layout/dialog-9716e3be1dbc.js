import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  CCt as i,
  DB as a,
  FBt as o,
  HO as s,
  IO as ee,
  JO as c,
  LNt as l,
  NSt as u,
  OB as d,
  PBt as te,
  QU as ne,
  Qst as re,
  TY as f,
  USt as ie,
  Vrt as p,
  WO as ae,
  XOt as m,
  XW as oe,
  Y3 as se,
  YOt as ce,
  Z3 as le,
  ZSt as h,
  ck as ue,
  du as g,
  e6 as de,
  fu as fe,
  iCt as pe,
  jH as me,
  okt as he,
  qO as ge,
  qrt as _e,
  rk as _,
  tk as ve,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as y,
  $zt as ye,
  Aun as be,
  Ben as b,
  CLr as xe,
  CRn as Se,
  Cen as Ce,
  Ctn as we,
  GIr as Te,
  Gzt as x,
  Hlr as Ee,
  IMr as De,
  Kzt as Oe,
  LIr as ke,
  MT as Ae,
  Qzt as je,
  Sen as Me,
  UIr as Ne,
  Ulr as Pe,
  XAr as S,
  XBn as C,
  ZAr as Fe,
  Zzt as Ie,
  _xn as Le,
  bRn as Re,
  ben as w,
  cBr as ze,
  eMr as Be,
  eir as Ve,
  fVn as He,
  fxr as Ue,
  gxn as We,
  hun as T,
  hxn as Ge,
  jT as E,
  kun as Ke,
  lBr as D,
  lNr as O,
  mBr as k,
  nMr as A,
  nbn as j,
  oq as M,
  oun as N,
  run as qe,
  tRr as Je,
  tbn as Ye,
  uBr as Xe,
  uq as P,
  vut as Ze,
  vxn as Qe,
  wLr as $e,
  wtn as et,
  wxr as tt,
  xMr as nt,
  xen as rt,
  yMr as F,
  yut as I,
  yxn as it,
} from "./app-initial-ad16eaadf81f.js";
import { n as at, r as ot, t as st } from "./project-device-picker-6ff444454d02.js";
function ct(e) {
  "use forget";
  let r = (0, dt.c)(119),
    {
      allowLocalProjectCreation: i,
      conversationToMove: o,
      creationSource: s,
      forceGlobalMemory: c,
      onClose: l,
      onCloseAutoFocus: u,
      onCreated: d,
    } = e,
    te = i === void 0 || i,
    f = c !== void 0 && c,
    p = n(re),
    m = he(),
    ce = ie(),
    le = Ae(),
    [h, ue] = (0, L.useState)(null),
    [g, de] = (0, L.useState)(!1),
    [y, ye] = (0, L.useState)(`unset`),
    [b, Ce] = (0, L.useState)(``),
    [x, Ee] = (0, L.useState)(null),
    ke = pe(rt),
    S;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = []), (r[0] = S)) : (S = r[0]);
  let [C, Re] = (0, L.useState)(S),
    [w, Be] = (0, L.useState)(null),
    He = (0, L.useRef)(null),
    Ue = pe(Ne),
    T = pe(Te),
    Ge = pe(Pe),
    E = pe(ft),
    Ke = Oe(),
    D = te && T && !Ke,
    O;
  r[1] === b ? (O = r[2]) : ((O = b.trim()), (r[1] = b), (r[2] = O));
  let k = O,
    A = D && C.length > 0,
    j = !A && b.length > 50,
    M = A || (k.length > 0 && !j),
    N;
  r[3] !== M ||
  r[4] !== o ||
  r[5] !== s ||
  r[6] !== h ||
  r[7] !== f ||
  r[8] !== m ||
  r[9] !== g ||
  r[10] !== A ||
  r[11] !== le ||
  r[12] !== y ||
  r[13] !== l ||
  r[14] !== d ||
  r[15] !== p ||
  r[16] !== C ||
  r[17] !== w ||
  r[18] !== k
    ? ((N = (e) => {
        if ((e.preventDefault(), !M || g)) return;
        de(!0);
        let t = p.get(De),
          n = () => le() && p.get(De) === t;
        (async () => {
          try {
            if (A) {
              let e = await Ye().createLocal({
                appearance: null,
                initializeDefaultWorkspaceGitRepository: !p.get(Fe),
                name: k,
                sources: C,
              });
              if (e == null) {
                requestAnimationFrame(() => {
                  He.current?.focus();
                });
                return;
              }
              (be(p, Ve(e.projectId)),
                tt(p, e.projectId),
                it({ scope: p, projectType: `local`, projectId: e.projectId }),
                l());
              return;
            }
            nt(p, Ie, { stage: je.CHATGPT_PROJECT_CREATION_STAGE_SUBMITTED, source: `new_project_dialog` });
            let e = await qe({ scope: p, emoji: h, memoryScope: f ? `global` : y, name: k, theme: w });
            if (!n()) return;
            if ((it({ scope: p, projectType: `cloud`, projectId: e.gizmo.id }), o != null)) {
              s != null && nt(p, Ie, { stage: je.CHATGPT_PROJECT_CREATION_STAGE_OPENED, source: s });
              let t = await ut({ scope: p, conversation: o, project: e, isCurrent: n });
              if (!n()) return;
              if (!t) {
                (p
                  .get(_e)
                  .danger(
                    m.formatMessage({
                      id: `chatgptConversations.projectDrop.createdMoveFailed`,
                      defaultMessage: `Project created, but the conversation could not be moved. Try moving it again from its menu`,
                      description: `Error after dropping a conversation onto New project when creation succeeds but moving the conversation fails or is no longer allowed. The created project remains available and the conversation keeps its current project membership.`,
                    }),
                    { errorAnalytics: { toastId: `chatgptConversations.projectDrop.createdMoveFailed` } },
                  ),
                  l());
                return;
              }
            }
            (d?.(e), l());
          } catch (e) {
            let t = e;
            if (!n()) return;
            (Le({ scope: p, projectType: A ? `local` : `cloud`, error: t }),
              p
                .get(_e)
                .danger(m.formatMessage(z.createError), {
                  errorAnalytics: { toastId: `chatgptProjectCreateDialog.handleSubmit.createError` },
                }));
          }
        })().finally(() => de(!1));
      }),
      (r[3] = M),
      (r[4] = o),
      (r[5] = s),
      (r[6] = h),
      (r[7] = f),
      (r[8] = m),
      (r[9] = g),
      (r[10] = A),
      (r[11] = le),
      (r[12] = y),
      (r[13] = l),
      (r[14] = d),
      (r[15] = p),
      (r[16] = C),
      (r[17] = w),
      (r[18] = k),
      (r[19] = N))
    : (N = r[19]);
  let Je = N;
  if (ke != null && x == null) return null;
  if (D && x != null) {
    let e;
    r[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { "aria-describedby": void 0 }), (r[20] = e))
      : (e = r[20]);
    let n;
    r[21] !== l || r[22] !== p
      ? ((n = (e) => {
          e || (We({ scope: p }), l());
        }),
        (r[21] = l),
        (r[22] = p),
        (r[23] = n))
      : (n = r[23]);
    let i;
    r[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, R.jsx)(ge, { children: (0, R.jsx)(v, { ...z.createTitle }) })), (r[24] = i))
      : (i = r[24]);
    let a;
    r[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, R.jsxs)(ee, {
          children: [
            i,
            (0, R.jsxs)(`div`, {
              role: `status`,
              className: `flex items-center gap-2 text-secondary select-none`,
              children: [
                (0, R.jsx)(t, { className: `icon-sm` }),
                (0, R.jsx)(v, {
                  id: `projectSetup.loadingRemoteForm`,
                  defaultMessage: `Loading…`,
                  description: `Status while loading the remote project creation form`,
                }),
              ],
            }),
          ],
        })),
        (r[25] = a))
      : (a = r[25]);
    let o;
    r[26] === n
      ? (o = r[27])
      : ((o = (0, R.jsx)(ae, { open: !0, contentProps: e, onOpenChange: n, children: a })),
        (r[26] = n),
        (r[27] = o));
    let s;
    r[28] === x
      ? (s = r[29])
      : ((s = { type: `open-create-remote-project-modal`, hostId: x, setActive: !0 }),
        (r[28] = x),
        (r[29] = s));
    let c;
    r[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (e) => {
          (Ce(e), Ee(null));
        }),
        (r[30] = c))
      : (c = r[30]);
    let u;
    r[31] !== b || r[32] !== l || r[33] !== s
      ? ((u = (0, R.jsx)(Me, { initialName: b, initialRequest: s, onClose: l, onSelectLocalDevice: c })),
        (r[31] = b),
        (r[32] = l),
        (r[33] = s),
        (r[34] = u))
      : (u = r[34]);
    let d;
    return (
      r[35] !== o || r[36] !== u
        ? ((d = (0, R.jsx)(L.Suspense, { fallback: o, children: u })), (r[35] = o), (r[36] = u), (r[37] = d))
        : (d = r[37]),
      d
    );
  }
  let Xe = C.length > 0,
    P;
  r[38] === p
    ? (P = r[39])
    : ((P = (e) => {
        e !== `local` && (Qe({ scope: p, projectType: `remote` }), Ee(e));
      }),
      (r[38] = p),
      (r[39] = P));
  let $e;
  r[40] !== g || r[41] !== Xe || r[42] !== P
    ? (($e = (0, R.jsx)(st, { disabled: g, readOnly: Xe, selectedHostId: `local`, onSelect: P })),
      (r[40] = g),
      (r[41] = Xe),
      (r[42] = P),
      (r[43] = $e))
    : ($e = r[43]);
  let et = $e,
    F;
  r[44] === u
    ? (F = r[45])
    : ((F = { "aria-describedby": void 0, onCloseAutoFocus: u }), (r[44] = u), (r[45] = F));
  let I;
  r[46] !== g || r[47] !== l || r[48] !== p
    ? ((I = (e) => {
        !e && !g && (We({ scope: p }), l());
      }),
      (r[46] = g),
      (r[47] = l),
      (r[48] = p),
      (r[49] = I))
    : (I = r[49]);
  let ot = !g,
    ct = Ge ? `compact` : void 0,
    pt = Ge ? void 0 : `chatgpt`,
    mt;
  r[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, R.jsx)(`header`, {
        className: `flex min-h-13 shrink-0 items-center py-2 ps-4 pe-13 select-none pointer-coarse:min-h-14`,
        children: (0, R.jsx)(ge, {
          className: `text-heading-sm leading-7 font-normal text-default`,
          children: (0, R.jsx)(v, { ...z.createTitle }),
        }),
      })),
      (r[50] = mt))
    : (mt = r[50]);
  let ht;
  r[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = (0, R.jsx)(`label`, {
        className: `text-sm leading-5 text-default select-none`,
        htmlFor: `chatgpt-project-name`,
        children: (0, R.jsx)(v, { ...z.createNameLabel }),
      })),
      (r[51] = ht))
    : (ht = r[51]);
  let gt = j ? `chatgpt-project-name-error` : void 0,
    _t = j ? !0 : void 0,
    vt;
  r[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (e) => {
        Ce(e.target.value);
      }),
      (r[52] = vt))
    : (vt = r[52]);
  let B;
  r[53] === m ? (B = r[54]) : ((B = m.formatMessage(z.createNamePlaceholder)), (r[53] = m), (r[54] = B));
  let V;
  r[55] !== g || r[56] !== b || r[57] !== gt || r[58] !== _t || r[59] !== B
    ? ((V = (0, R.jsx)(`input`, {
        id: `chatgpt-project-name`,
        className: `col-start-1 row-start-1 h-9 w-full min-w-0 rounded-lg border border-primary-outline bg-transparent px-9 py-2 text-sm leading-5 text-default outline-none placeholder:text-tertiary focus:border-ring`,
        "aria-describedby": gt,
        "aria-invalid": _t,
        autoComplete: `off`,
        autoFocus: !0,
        disabled: g,
        name: `project-name`,
        type: `text`,
        value: b,
        onChange: vt,
        placeholder: B,
      })),
      (r[55] = g),
      (r[56] = b),
      (r[57] = gt),
      (r[58] = _t),
      (r[59] = B),
      (r[60] = V))
    : (V = r[60]);
  let H;
  r[61] !== h || r[62] !== m || r[63] !== g || r[64] !== A || r[65] !== w || r[66] !== k
    ? ((H = A
        ? (0, R.jsx)(`div`, {
            className: `col-start-1 row-start-1 flex size-9 items-center justify-center text-codex-description`,
            children: (0, R.jsx)(a, { asset: fe }),
          })
        : (0, R.jsx)(`div`, {
            className: `col-start-1 row-start-1 flex size-9 items-center justify-center`,
            children: (0, R.jsx)(Ze, {
              canEditProject: !0,
              defaultIcon: (0, R.jsx)(ne, {}),
              emoji: h,
              isSaving: g,
              onEmojiChange: ue,
              onThemeChange: Be,
              projectName:
                k ||
                m.formatMessage({
                  id: `chatgptConversations.sidebar.project.createAppearanceProjectName`,
                  defaultMessage: `New project`,
                  description: `Fallback project name used in the icon and color picker accessible label before the user names a new ChatGPT project`,
                }),
              theme: w,
              variant: `settings`,
            }),
          })),
      (r[61] = h),
      (r[62] = m),
      (r[63] = g),
      (r[64] = A),
      (r[65] = w),
      (r[66] = k),
      (r[67] = H))
    : (H = r[67]);
  let U;
  r[68] !== V || r[69] !== H
    ? ((U = (0, R.jsxs)(`div`, { className: `grid grid-cols-1 grid-rows-1`, children: [V, H] })),
      (r[68] = V),
      (r[69] = H),
      (r[70] = U))
    : (U = r[70]);
  let W;
  r[71] === j
    ? (W = r[72])
    : ((W = j
        ? (0, R.jsx)(`p`, {
            id: `chatgpt-project-name-error`,
            className: `text-sm text-danger`,
            role: `alert`,
            children: (0, R.jsx)(v, {
              id: `chatgptConversations.sidebar.projectSettings.projectNameTooLong`,
              defaultMessage: `Project name cannot be longer than {length} characters`,
              description: `Validation error when a ChatGPT project name is too long`,
              values: { length: 50 },
            }),
          })
        : null),
      (r[71] = j),
      (r[72] = W));
  let G;
  r[73] !== U || r[74] !== W
    ? ((G = (0, R.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [ht, U, W] })),
      (r[73] = U),
      (r[74] = W),
      (r[75] = G))
    : (G = r[75]);
  let K;
  r[76] !== et || r[77] !== g || r[78] !== D || r[79] !== C
    ? ((K = D
        ? (0, R.jsx)(we, {
            disabled: g,
            sources: C,
            setSources: Re,
            deviceLabel: C.length > 0 ? et : void 0,
            renderAddFolder:
              C.length > 0 ? void 0 : (e) => (0, R.jsx)(at, { disabled: g, onAdd: e, children: et }),
          })
        : null),
      (r[76] = et),
      (r[77] = g),
      (r[78] = D),
      (r[79] = C),
      (r[80] = K))
    : (K = r[80]);
  let q;
  r[81] === K ? (q = r[82]) : ((q = (0, R.jsx)(R.Fragment, { children: K })), (r[81] = K), (r[82] = q));
  let J;
  r[83] === A
    ? (J = r[84])
    : ((J = A
        ? null
        : (0, R.jsxs)(`aside`, {
            className: `mt-4 flex items-center gap-2 rounded-xl bg-background-secondary-soft-alpha p-3 select-none`,
            children: [
              (0, R.jsx)(`div`, {
                className: `flex size-6 shrink-0 items-center justify-center text-secondary`,
                children: (0, R.jsx)(oe, {}),
              }),
              (0, R.jsx)(`p`, {
                className: `text-xs leading-4 text-pretty text-secondary`,
                children: (0, R.jsx)(v, { ...z.createHelper }),
              }),
            ],
          })),
      (r[83] = A),
      (r[84] = J));
  let Y;
  r[85] !== G || r[86] !== q || r[87] !== J
    ? ((Y = (0, R.jsxs)(`div`, {
        className: `flex min-h-0 flex-col overflow-y-auto px-4 pt-2`,
        children: [G, q, J],
      })),
      (r[85] = G),
      (r[86] = q),
      (r[87] = J),
      (r[88] = Y))
    : (Y = r[88]);
  let X;
  r[89] !== f ||
  r[90] !== m ||
  r[91] !== g ||
  r[92] !== A ||
  r[93] !== y ||
  r[94] !== E ||
  r[95] !== ce ||
  r[96] !== l ||
  r[97] !== p ||
  r[98] !== Ue ||
  r[99] !== T
    ? ((X =
        !A && E != null && E !== `unavailable`
          ? (0, R.jsxs)(ve, {
              align: `start`,
              side: `bottom`,
              sideOffset: 8,
              disabled: g,
              surface: `chatgpt`,
              triggerButton: (0, R.jsxs)(se, {
                color: `ghostActive`,
                size: `dialogGhost`,
                type: `button`,
                children: [
                  (0, R.jsx)(v, {
                    ...(y === `project_v2` ? z.createMemoryProjectOnlyLabel : z.createMemoryDefaultLabel),
                  }),
                  (0, R.jsx)(me, {}),
                ],
              }),
              children: [
                E === `disabled`
                  ? (0, R.jsx)(_.Item, {
                      subTextAllowWrap: !0,
                      SubText: (0, R.jsx)(v, {
                        id: `chatgptConversations.sidebar.project.createMemoryDisabledDescription`,
                        defaultMessage: `Memory is off. Enable it in <link>Settings</link> to use memory within projects.`,
                        description: `Explanation in the Create project memory menu when the user's account Memory setting is off. The entire menu item opens Personalization settings; the link tag underlines Settings.`,
                        values: { link: lt },
                      }),
                      onSelect: () => {
                        p.get(xe) && ze(p, `3466753652`)
                          ? (We({ scope: p }), l(), ce(`/settings/personalization`))
                          : Se({
                              href: `https://chatgpt.com/#settings/Personalization`,
                              initiator: `open_in_browser_bridge`,
                              openTarget: `external-browser`,
                            });
                      },
                      children: (0, R.jsx)(v, {
                        id: `chatgptConversations.sidebar.project.createMemoryDisabledLabel`,
                        defaultMessage: `Memory`,
                        description: `Label for the Create project menu item explaining that account Memory is off and opening Personalization settings`,
                      }),
                    })
                  : (0, R.jsxs)(_.RadioGroup, {
                      "aria-label": m.formatMessage(z.createMemoryLabel),
                      value: y,
                      children: [
                        (0, R.jsx)(_.RadioItem, {
                          value: `unset`,
                          variant: `chatgpt`,
                          SubText: (0, R.jsx)(v, { ...z.createMemoryDefaultDescription }),
                          onSelect: () => ye(`unset`),
                          children: (0, R.jsx)(v, { ...z.createMemoryDefaultLabel }),
                        }),
                        (0, R.jsx)(_.RadioItem, {
                          value: `project_v2`,
                          disabled: f,
                          variant: `chatgpt`,
                          SubText:
                            Ue || T
                              ? (0, R.jsx)(v, {
                                  id: `chatgptConversations.sidebar.project.createMemoryProjectOnlyDescriptionWithWork`,
                                  defaultMessage: `This project can only access its own memory. Its memory is hidden from outside chats. Work in the cloud isn’t available for this type of project.`,
                                  description: `Supporting text below the Project-only memory option in the Create project dialog for users with Work access. It explains that memory stays within this project and that cloud Work cannot be used with this project type. Local Work may remain available.`,
                                })
                              : (0, R.jsx)(v, { ...z.createMemoryProjectOnlyDescription }),
                          onSelect: () => ye(`project_v2`),
                          children: (0, R.jsx)(v, { ...z.createMemoryProjectOnlyLabel }),
                        }),
                      ],
                    }),
                E === `enabled-sunshine`
                  ? (0, R.jsxs)(R.Fragment, {
                      children: [
                        (0, R.jsx)(_.Separator, { variant: `chatgpt` }),
                        (0, R.jsx)(_.Message, {
                          variant: `chatgpt`,
                          children: (0, R.jsx)(v, { ...z.createMemoryWarning }),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (r[89] = f),
      (r[90] = m),
      (r[91] = g),
      (r[92] = A),
      (r[93] = y),
      (r[94] = E),
      (r[95] = ce),
      (r[96] = l),
      (r[97] = p),
      (r[98] = Ue),
      (r[99] = T),
      (r[100] = X))
    : (X = r[100]);
  let yt = !M,
    bt;
  r[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, R.jsx)(v, { ...z.createConfirm })), (r[101] = bt))
    : (bt = r[101]);
  let Z;
  r[102] !== g || r[103] !== yt
    ? ((Z = (0, R.jsx)(se, {
        ref: He,
        className: `ms-auto`,
        color: `primary`,
        size: `dialog`,
        type: `submit`,
        disabled: yt,
        loading: g,
        children: bt,
      })),
      (r[102] = g),
      (r[103] = yt),
      (r[104] = Z))
    : (Z = r[104]);
  let Q;
  r[105] !== X || r[106] !== Z
    ? ((Q = (0, R.jsxs)(`footer`, {
        className: `flex shrink-0 flex-wrap items-center justify-between gap-2 p-4 select-none`,
        children: [X, Z],
      })),
      (r[105] = X),
      (r[106] = Z),
      (r[107] = Q))
    : (Q = r[107]);
  let $;
  r[108] !== Je || r[109] !== Y || r[110] !== Q
    ? (($ = (0, R.jsxs)(ee, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onSubmit: Je,
        children: [mt, Y, Q],
      })),
      (r[108] = Je),
      (r[109] = Y),
      (r[110] = Q),
      (r[111] = $))
    : ($ = r[111]);
  let xt;
  return (
    r[112] !== I || r[113] !== ot || r[114] !== ct || r[115] !== pt || r[116] !== $ || r[117] !== F
      ? ((xt = (0, R.jsx)(ae, {
          open: !0,
          contentProps: F,
          onOpenChange: I,
          showDialogClose: ot,
          size: `large`,
          radius: ct,
          variant: pt,
          children: $,
        })),
        (r[112] = I),
        (r[113] = ot),
        (r[114] = ct),
        (r[115] = pt),
        (r[116] = $),
        (r[117] = F),
        (r[118] = xt))
      : (xt = r[118]),
    xt
  );
}
function lt(e) {
  return (0, R.jsx)(`span`, { className: `underline`, children: e });
}
async function ut({ scope: e, conversation: t, project: n, isCurrent: r }) {
  try {
    let i = await M(e, t.id);
    return !r() ||
      i == null ||
      i.isMemoryBlocked ||
      (i.conversation.gizmo_id ?? null) !== (t.gizmo_id ?? null) ||
      (i.isWorkConversation && (C(n) !== `open-default` || !He(n)))
      ? !1
      : (await T({ scope: e, conversationId: t.id, projectId: n.gizmo.id }), !0);
  } catch {
    return !1;
  }
}
var dt, L, R, ft, z;
function pt() {
  return (pt = e(() => {
    ((dt = te()),
      ye(),
      g(),
      h(),
      (L = o()),
      m(),
      u(),
      $e(),
      ke(),
      le(),
      c(),
      s(),
      ue(),
      Re(),
      d(),
      f(),
      de(),
      p(),
      x(),
      F(),
      et(),
      Ce(),
      ot(),
      Ge(),
      j(),
      w(),
      r(),
      Ue(),
      S(),
      Ee(),
      Ke(),
      D(),
      E(),
      O(),
      I(),
      b(),
      y(),
      A(),
      P(),
      N(),
      (R = l()),
      (ft = i(re, ({ get: e }) => {
        let t = e(De);
        if (t == null || e(k)) return;
        let { data: n } = e(Be);
        if (n == null) return;
        let r = e(Xe, `1862054621`);
        if (r && n.m3mEnabled === !0) return `enabled-m3m`;
        let { data: i } = e(Je, t);
        if (i != null)
          return i.features?.includes(`sunshine_available`)
            ? !r && n.sunshineEnabled
              ? `enabled-sunshine`
              : `disabled`
            : `unavailable`;
      })),
      (z = ce({
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
//# sourceMappingURL=dialog-9716e3be1dbc.js.map
