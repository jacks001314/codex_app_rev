import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Dk as r,
  EPt as i,
  Ek as a,
  Fat as o,
  IDt as s,
  Ixt as c,
  L$ as l,
  Mz as u,
  Nz as d,
  Pat as f,
  Pxt as p,
  R$ as m,
  VDt as h,
  Vxt as g,
  XI as _,
  Xot as ee,
  YI as v,
  Yot as y,
  _O as te,
  cO as ne,
  cz as b,
  fO as x,
  hot as S,
  i3 as C,
  iL as w,
  jDt as T,
  lO as E,
  lot as D,
  mO as O,
  nL as k,
  nst as re,
  oO as ie,
  pLt as ae,
  r3 as oe,
  rL as se,
  sO as ce,
  sz as le,
  t3 as ue,
  tL as de,
  tst as fe,
  vO as pe,
  vzt as A,
  wot as me,
  xMt as j,
  yzt as he,
  zxt as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  BF as M,
  DPn as _e,
  EIn as ve,
  ELn as ye,
  EPn as be,
  FLn as xe,
  JPn as N,
  Jxt as Se,
  KNn as P,
  Ltn as Ce,
  MG as F,
  MLn as I,
  NLn as we,
  OIn as Te,
  OLn as Ee,
  Rtn as De,
  Uxt as Oe,
  VF as ke,
  XNn as Ae,
  XPn as je,
  Ymr as Me,
  ZU as Ne,
  bLn as Pe,
  c$n as Fe,
  ehr as L,
  h1 as Ie,
  jG as Le,
  kIn as Re,
  m1 as ze,
  mlt as R,
  nT as Be,
  plt as Ve,
  rT as He,
  s$n as Ue,
  wIn as We,
  y7t as z,
  yLn as Ge,
} from "./app-initial-5851df3f6cb1.js";
import { fm as Ke, pm as qe } from "./app-primary-fe8a450b3b04.js";
import { i as Je, n as Ye, t as Xe } from "./data-6d8d734487a6.js";
import { i as B, n as V, r as Ze, t as Qe } from "./chatgpt-project-sources-18481a4a6584.js";
import { a as $e, i as H, n as U, o as W, r as et, t as tt } from "./file-attachment-status-586c52bfa9c0.js";
import { i as nt, n as G, r as rt, t as it } from "./local-folders-section-cc0b29461561.js";
function at(e) {
  let n = (0, st.c)(60),
    {
      canEditProject: r,
      didLoadInstructionsFail: i,
      instructions: a,
      instructionsInputId: o,
      isLoadingInstructions: c,
      isSaving: l,
      libraryAccess: u,
      memoryAccess: d,
      maxInstructionsLength: f,
      onBack: p,
      onInstructionsChange: m,
    } = e,
    g = Ae(),
    _ = h(),
    ee = f - a.length,
    v,
    y,
    b,
    x,
    S,
    C,
    w;
  if (
    n[0] !== r ||
    n[1] !== i ||
    n[2] !== a ||
    n[3] !== o ||
    n[4] !== _ ||
    n[5] !== c ||
    n[6] !== l ||
    n[7] !== g ||
    n[8] !== u ||
    n[9] !== f ||
    n[10] !== d ||
    n[11] !== m ||
    n[12] !== ee
  ) {
    let e = null;
    d === `project-only`
      ? (e = _.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.memoryProjectOnly`,
          defaultMessage: `Project-only`,
          description: `Selected value for project-only ChatGPT project memory access`,
        }))
      : d === `open-default` &&
        (e = _.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.memoryOpen`,
          defaultMessage: `Open`,
          description: `Open value for ChatGPT project memory access`,
        }));
    let t = null;
    (u === `enabled-default`
      ? (t = _.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.libraryAccessEnabled`,
          defaultMessage: `Enabled`,
          description: `Enabled value for ChatGPT project library access`,
        }))
      : u === `disabled` &&
        (t = _.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.libraryAccessDisabled`,
          defaultMessage: `Disabled`,
          description: `Selected value for disabled ChatGPT project library access`,
        })),
      (C = `flex min-h-0 flex-col`),
      n[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((w = (0, K.jsx)(E, {
            children: (0, K.jsx)(ne, {
              title: (0, K.jsx)(te, {
                asChild: !0,
                children: (0, K.jsx)(`span`, {
                  children: (0, K.jsx)(s, {
                    id: `chatgptConversations.sidebar.projectSettings.advancedTitle`,
                    defaultMessage: `Advanced settings`,
                    description: `Title for advanced ChatGPT project settings`,
                  }),
                }),
              }),
            }),
          })),
          (n[20] = w))
        : (w = n[20]),
      (v = E),
      (y = `min-h-0 gap-8 overflow-y-auto`));
    let p = c ? void 0 : o,
      h;
    n[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((h = (0, K.jsx)(s, {
          id: `chatgptConversations.sidebar.projectSettings.instructionsLabel`,
          defaultMessage: `Custom instructions`,
          description: `Label for ChatGPT project instructions`,
        })),
        (n[21] = h))
      : (h = n[21]);
    let T;
    n[22] === p
      ? (T = n[23])
      : ((T = (0, K.jsx)(`label`, {
          className: `flex flex-col gap-1 text-sm text-default`,
          htmlFor: p,
          children: h,
        })),
        (n[22] = p),
        (n[23] = T));
    let D;
    n[24] !== r ||
    n[25] !== i ||
    n[26] !== a ||
    n[27] !== o ||
    n[28] !== _ ||
    n[29] !== c ||
    n[30] !== l ||
    n[31] !== f ||
    n[32] !== m
      ? ((D = c
          ? (0, K.jsx)(`p`, {
              className: `text-sm`,
              role: `status`,
              children: (0, K.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.loadingInstructions`,
                defaultMessage: `Loading custom instructions…`,
                description: `Loading state while fetching ChatGPT project instructions for editing`,
              }),
            })
          : (0, K.jsx)(be, {
              id: o,
              rows: 7,
              placeholder: _.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.instructionsPlaceholder`,
                defaultMessage: `e.g. “Respond in Spanish. Reference the latest JavaScript documentation. Keep answers short and focused.”`,
                description: `Placeholder for ChatGPT project instructions`,
              }),
              value: a,
              disabled: !r || l || i,
              onChange: (e) => {
                m(e.target.value.slice(0, f));
              },
              onKeyDown: ot,
            })),
        (n[24] = r),
        (n[25] = i),
        (n[26] = a),
        (n[27] = o),
        (n[28] = _),
        (n[29] = c),
        (n[30] = l),
        (n[31] = f),
        (n[32] = m),
        (n[33] = D))
      : (D = n[33]);
    let O;
    n[34] !== c || n[35] !== f || n[36] !== ee
      ? ((O = c
          ? null
          : (0, K.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, K.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.instructionsRemaining`,
                defaultMessage: `{remaining, number}/{length, number} left`,
                description: `Character countdown for ChatGPT project custom instructions`,
                values: { length: f, remaining: ee },
              }),
            })),
        (n[34] = c),
        (n[35] = f),
        (n[36] = ee),
        (n[37] = O))
      : (O = n[37]);
    let k;
    (n[38] === i
      ? (k = n[39])
      : ((k = i
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, K.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.loadInstructionsError`,
                defaultMessage: `Could not load custom instructions`,
                description: `Error message when loading ChatGPT project instructions for editing fails`,
              }),
            })
          : null),
        (n[38] = i),
        (n[39] = k)),
      n[40] !== D || n[41] !== O || n[42] !== k || n[43] !== T
        ? ((b = (0, K.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [T, D, O, k] })),
          (n[40] = D),
          (n[41] = O),
          (n[42] = k),
          (n[43] = T),
          (n[44] = b))
        : (b = n[44]),
      (x =
        e == null
          ? null
          : (0, K.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, K.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `text-sm text-default`,
                      children: (0, K.jsx)(s, {
                        id: `chatgptConversations.sidebar.projectSettings.memoryLabel`,
                        defaultMessage: `Memory`,
                        description: `Label for ChatGPT project memory access`,
                      }),
                    }),
                    (0, K.jsx)(`span`, {
                      className: `text-sm text-codex-description`,
                      children:
                        d === `project-only`
                          ? (0, K.jsx)(s, {
                              id: `chatgptConversations.projectSettings.memoryProjectOnlyImmutable`,
                              defaultMessage: `Project can only access its own memories. Its memories are hidden from outside chats. This cannot be changed.`,
                              description: `Help text below the read-only Project-only memory value in ChatGPT project settings, explaining memory isolation and that this setting is not editable`,
                            })
                          : (0, K.jsx)(s, {
                              id: `chatgptConversations.sidebar.projectSettings.memoryDescription`,
                              defaultMessage: `Project can access memories from outside chats, and vice versa. This cannot be changed.`,
                              description: `Description for the read-only ChatGPT project memory access control`,
                            }),
                    }),
                  ],
                }),
                (0, K.jsx)(`div`, {
                  "aria-label": _.formatMessage(
                    {
                      id: `chatgptConversations.sidebar.projectSettings.memoryControlLabel`,
                      defaultMessage: `Memory: {value}`,
                      description: `Accessible label for the read-only ChatGPT project memory access value`,
                    },
                    { value: e },
                  ),
                  className: `flex h-9 w-[234px] items-center rounded-lg border border-primary-outline bg-primary-soft px-3 text-sm text-default opacity-60`,
                  children: e,
                }),
              ],
            })),
      (S =
        t == null
          ? null
          : (0, K.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, K.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, K.jsx)(`span`, {
                      className: `text-sm text-default`,
                      children: g
                        ? (0, K.jsx)(s, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessLabel.space`,
                            defaultMessage: `Space access`,
                            description: `Label for ChatGPT project space access. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, K.jsx)(s, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessLabel`,
                            defaultMessage: `Library access`,
                            description: `Label for ChatGPT project library access`,
                          }),
                    }),
                    (0, K.jsx)(`span`, {
                      className: `text-sm text-codex-description`,
                      children: g
                        ? (0, K.jsx)(s, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessDescription.space`,
                            defaultMessage: `This project can access your file Space while it remains private. Sharing this project disables Space access.`,
                            description: `Description for the read-only ChatGPT project space access control. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, K.jsx)(s, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessDescription`,
                            defaultMessage: `This project can access your file Library while it remains private. Sharing this project disables Library access.`,
                            description: `Description for the read-only ChatGPT project library access control`,
                          }),
                    }),
                  ],
                }),
                (0, K.jsx)(`div`, {
                  "aria-label": g
                    ? _.formatMessage(
                        {
                          id: `chatgptConversations.sidebar.projectSettings.libraryAccessControlLabel.space`,
                          defaultMessage: `Space access: {value}`,
                          description: `Accessible label for the read-only ChatGPT project space access value. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                        },
                        { value: t },
                      )
                    : _.formatMessage(
                        {
                          id: `chatgptConversations.sidebar.projectSettings.libraryAccessControlLabel`,
                          defaultMessage: `Library access: {value}`,
                          description: `Accessible label for the read-only ChatGPT project library access value`,
                        },
                        { value: t },
                      ),
                  className: `flex h-9 w-[234px] items-center rounded-lg border border-primary-outline bg-primary-soft px-3 text-sm text-default opacity-60`,
                  children: t,
                }),
              ],
            })),
      (n[0] = r),
      (n[1] = i),
      (n[2] = a),
      (n[3] = o),
      (n[4] = _),
      (n[5] = c),
      (n[6] = l),
      (n[7] = g),
      (n[8] = u),
      (n[9] = f),
      (n[10] = d),
      (n[11] = m),
      (n[12] = ee),
      (n[13] = v),
      (n[14] = y),
      (n[15] = b),
      (n[16] = x),
      (n[17] = S),
      (n[18] = C),
      (n[19] = w));
  } else ((v = n[13]), (y = n[14]), (b = n[15]), (x = n[16]), (S = n[17]), (C = n[18]), (w = n[19]));
  let T;
  n[45] !== v || n[46] !== y || n[47] !== b || n[48] !== x || n[49] !== S
    ? ((T = (0, K.jsxs)(v, { className: y, children: [b, x, S] })),
      (n[45] = v),
      (n[46] = y),
      (n[47] = b),
      (n[48] = x),
      (n[49] = S),
      (n[50] = T))
    : (T = n[50]);
  let D;
  n[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, K.jsx)(s, {
        id: `chatgptConversations.sidebar.projectSettings.back`,
        defaultMessage: `Back`,
        description: `Button label for returning to the main ChatGPT project settings screen`,
      })),
      (n[51] = D))
    : (D = n[51]);
  let O;
  n[52] !== l || n[53] !== p
    ? ((O = (0, K.jsx)(E, {
        children: (0, K.jsx)(ce, {
          expandSingleButton: !1,
          children: (0, K.jsx)(t, {
            color: `secondary`,
            disabled: l,
            onClick: p,
            type: `button`,
            children: D,
          }),
        }),
      })),
      (n[52] = l),
      (n[53] = p),
      (n[54] = O))
    : (O = n[54]);
  let k;
  return (
    n[55] !== C || n[56] !== w || n[57] !== T || n[58] !== O
      ? ((k = (0, K.jsxs)(`div`, { className: C, children: [w, T, O] })),
        (n[55] = C),
        (n[56] = w),
        (n[57] = T),
        (n[58] = O),
        (n[59] = k))
      : (k = n[59]),
    k
  );
}
function ot(e) {
  e.stopPropagation();
}
var st, K;
function q() {
  return (q = e(() => {
    ((st = A()), T(), ue(), pe(), x(), _e(), P(), (K = j()));
  }))();
}
function ct(e) {
  let n = (0, kt.c)(139),
    {
      editDisabledStatus: r,
      canAddSources: i,
      canDeleteFileSources: a,
      canEditProject: o,
      canOpenAdvanced: c,
      canSave: d,
      connectorScopes: f,
      didSaveFail: p,
      emoji: m,
      fileInputRef: g,
      hasNameError: _,
      isAddingSources: ee,
      isError: v,
      isLoading: y,
      isNameEmpty: b,
      isNameTooLong: x,
      isSaving: S,
      isSourceDragActive: C,
      localFolders: w,
      maxNameLength: T,
      name: D,
      nameErrorId: O,
      nameInputId: k,
      onAddSourceClick: re,
      onAdvanced: ie,
      onDeleteFileSource: ae,
      onEmojiChange: oe,
      onFileInputChange: se,
      onNameChange: ue,
      onOpenSavedResponse: de,
      onSourcesDragEnter: fe,
      onSourcesDragLeave: pe,
      onSourcesDragOver: A,
      onSourcesDrop: me,
      onThemeChange: j,
      optimisticallyDeletedFileIds: he,
      pendingSourceFiles: ge,
      projectId: M,
      projectFiles: _e,
      projectShortUrl: ve,
      projectSaves: ye,
      sourceAttachmentStatus: be,
      theme: xe,
    } = e,
    N = h(),
    Se;
  n[0] === r
    ? (Se = n[1])
    : ((Se = r == null ? void 0 : Le({ action: `edit`, projectCrudStatus: r })), (n[0] = r), (n[1] = Se));
  let P = Se,
    Ce;
  n[2] === ye ? (Ce = n[3]) : ((Ce = new Set(ye.map(lt))), (n[2] = ye), (n[3] = Ce));
  let F = Ce,
    I;
  if (n[4] !== a || n[5] !== f || n[6] !== F || n[7] !== N || n[8] !== he || n[9] !== _e || n[10] !== ye) {
    let e = St(_e, N);
    I = [];
    let t = 0;
    for (let e of f) I.push(_t(e, N, t++));
    for (let e of _e) {
      let n = Tt(e);
      if (n != null && he.has(n)) continue;
      let r = Qe(e);
      if (r == null) {
        I.push(ht(e, N, t++, a));
        continue;
      }
      let i = r.save_id?.trim();
      (!i || !F.has(i)) && I.push(yt(e, r, N, t++));
    }
    for (let n of ye) I.push(vt(n, e.get(n.id), N, t++));
    (I.sort(Ot),
      (n[4] = a),
      (n[5] = f),
      (n[6] = F),
      (n[7] = N),
      (n[8] = he),
      (n[9] = _e),
      (n[10] = ye),
      (n[11] = I));
  } else I = n[11];
  let we;
  if (n[12] !== N || n[13] !== ge || n[14] !== I) {
    let e;
    (n[16] === N ? (e = n[17]) : ((e = (e, t) => mt(e, t, N)), (n[16] = N), (n[17] = e)),
      (we = [...ge.map(e), ...I]),
      (n[12] = N),
      (n[13] = ge),
      (n[14] = I),
      (n[15] = we));
  } else we = n[15];
  let Te = we,
    Ee;
  n[18] !== o || n[19] !== v || n[20] !== y || n[21] !== Te
    ? ((Ee = o && !y && !v && Te.some(J)), (n[18] = o), (n[19] = v), (n[20] = y), (n[21] = Te), (n[22] = Ee))
    : (Ee = n[22]);
  let De = Ee,
    Oe;
  n[23] !== M || n[24] !== ve ? ((Oe = ut(M, ve)), (n[23] = M), (n[24] = ve), (n[25] = Oe)) : (Oe = n[25]);
  let ke = Oe,
    Ae;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, Q.jsx)(E, {
        children: (0, Q.jsx)(ne, {
          title: (0, Q.jsx)(te, {
            asChild: !0,
            children: (0, Q.jsx)(`span`, {
              children: (0, Q.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.title`,
                defaultMessage: `Project settings`,
                description: `Title for ChatGPT project settings`,
              }),
            }),
          }),
        }),
      })),
      (n[26] = Ae))
    : (Ae = n[26]);
  let Me = w == null ? `contents` : `flex min-h-0 flex-col overflow-y-auto`,
    Ne;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ne = (0, Q.jsx)(s, {
        id: `chatgptConversations.sidebar.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (n[27] = Ne))
    : (Ne = n[27]);
  let Pe;
  n[28] === k
    ? (Pe = n[29])
    : ((Pe = (0, Q.jsx)(`label`, { className: `text-sm text-default`, htmlFor: k, children: Ne })),
      (n[28] = k),
      (n[29] = Pe));
  let Fe;
  n[30] !== o || n[31] !== m || n[32] !== S || n[33] !== D || n[34] !== oe || n[35] !== j || n[36] !== xe
    ? ((Fe = (0, Q.jsx)(Ve, {
        canEditProject: o,
        emoji: m,
        isSaving: S,
        onEmojiChange: oe,
        onThemeChange: j,
        projectName: D,
        theme: xe,
      })),
      (n[30] = o),
      (n[31] = m),
      (n[32] = S),
      (n[33] = D),
      (n[34] = oe),
      (n[35] = j),
      (n[36] = xe),
      (n[37] = Fe))
    : (Fe = n[37]);
  let L;
  n[38] === N
    ? (L = n[39])
    : ((L = N.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.projectNamePlaceholder`,
        defaultMessage: `Name this project`,
        description: `Placeholder for the ChatGPT project name field`,
      })),
      (n[38] = N),
      (n[39] = L));
  let Ie = _ ? O : void 0,
    Re = _ ? !0 : void 0,
    R = !o || S,
    Be;
  n[40] !== D || n[41] !== k || n[42] !== ue || n[43] !== L || n[44] !== Ie || n[45] !== Re || n[46] !== R
    ? ((Be = (0, Q.jsx)(`input`, {
        id: k,
        autoComplete: `off`,
        autoFocus: !0,
        className: `min-w-0 flex-1 bg-transparent text-base text-default placeholder:text-codex-description focus:!outline-none`,
        value: D,
        placeholder: L,
        "aria-describedby": Ie,
        "aria-invalid": Re,
        disabled: R,
        onChange: ue,
      })),
      (n[40] = D),
      (n[41] = k),
      (n[42] = ue),
      (n[43] = L),
      (n[44] = Ie),
      (n[45] = Re),
      (n[46] = R),
      (n[47] = Be))
    : (Be = n[47]);
  let He;
  n[48] !== Fe || n[49] !== Be
    ? ((He = (0, Q.jsxs)(`div`, {
        className: `flex h-10 items-center gap-2 overflow-hidden rounded-xl border border-default bg-primary-soft pe-3 shadow-sm focus-within:border-ring`,
        children: [Fe, Be],
      })),
      (n[48] = Fe),
      (n[49] = Be),
      (n[50] = He))
    : (He = n[50]);
  let Ue;
  n[51] !== _ || n[52] !== b || n[53] !== x || n[54] !== T || n[55] !== O
    ? ((Ue = _
        ? (0, Q.jsxs)(`p`, {
            id: O,
            className: `text-sm text-danger`,
            children: [
              b
                ? (0, Q.jsx)(s, {
                    id: `chatgptConversations.sidebar.projectSettings.projectNameRequired`,
                    defaultMessage: `Project name is required`,
                    description: `Validation error when a ChatGPT project name is empty`,
                  })
                : null,
              x
                ? (0, Q.jsx)(s, {
                    id: `chatgptConversations.sidebar.projectSettings.projectNameTooLong`,
                    defaultMessage: `Project name cannot be longer than {length} characters`,
                    description: `Validation error when a ChatGPT project name is too long`,
                    values: { length: T },
                  })
                : null,
            ],
          })
        : null),
      (n[51] = _),
      (n[52] = b),
      (n[53] = x),
      (n[54] = T),
      (n[55] = O),
      (n[56] = Ue))
    : (Ue = n[56]);
  let We;
  n[57] !== He || n[58] !== Ue || n[59] !== Pe
    ? ((We = (0, Q.jsxs)(E, { className: `gap-3`, children: [Pe, He, Ue] })),
      (n[57] = He),
      (n[58] = Ue),
      (n[59] = Pe),
      (n[60] = We))
    : (We = n[60]);
  let z;
  n[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(`h2`, {
        className: `text-base font-semibold`,
        children: (0, Q.jsx)(s, {
          id: `chatgptConversations.sidebar.projectSettings.sourcesTitle`,
          defaultMessage: `Available sources`,
          description: `Section title for ChatGPT project sources`,
        }),
      })),
      (n[61] = z))
    : (z = n[61]);
  let Ge = P == null,
    Ke;
  n[62] === P ? (Ke = n[63]) : ((Ke = P ? (0, Q.jsx)(s, { ...P }) : null), (n[62] = P), (n[63] = Ke));
  let qe;
  n[64] === N
    ? (qe = n[65])
    : ((qe = N.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.addSourceAccessibleLabel`,
        defaultMessage: `Add source`,
        description: `Accessible label for adding a source to a ChatGPT project`,
      })),
      (n[64] = N),
      (n[65] = qe));
  let Je = !i,
    Ye,
    Xe;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, Q.jsx)(ze, { className: `icon-sm` })),
      (Xe = (0, Q.jsx)(s, {
        id: `chatgptConversations.sidebar.projectSettings.addSource`,
        defaultMessage: `Add`,
        description: `Button label for adding a source to a ChatGPT project`,
      })),
      (n[66] = Ye),
      (n[67] = Xe))
    : ((Ye = n[66]), (Xe = n[67]));
  let B;
  n[68] !== ee || n[69] !== re || n[70] !== qe || n[71] !== Je
    ? ((B = (0, Q.jsx)(`span`, {
        children: (0, Q.jsxs)(t, {
          "aria-label": qe,
          color: `ghostActive`,
          disabled: Je,
          loading: ee,
          onClick: re,
          size: `toolbar`,
          type: `button`,
          children: [Ye, Xe],
        }),
      })),
      (n[68] = ee),
      (n[69] = re),
      (n[70] = qe),
      (n[71] = Je),
      (n[72] = B))
    : (B = n[72]);
  let V;
  n[73] !== Ge || n[74] !== Ke || n[75] !== B
    ? ((V = (0, Q.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [z, (0, Q.jsx)(le, { disabled: Ge, tooltipContent: Ke, children: B })],
      })),
      (n[73] = Ge),
      (n[74] = Ke),
      (n[75] = B),
      (n[76] = V))
    : (V = n[76]);
  let Ze;
  n[77] !== ke || n[78] !== De
    ? ((Ze = De
        ? (0, Q.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Q.jsx)(s, {
              id: `chatgptConversations.sidebar.projectSettings.nonFileSourcesBrowserHint`,
              defaultMessage: `Some sources are not editable in the ChatGPT Desktop app. Use <chatGPTWebLink>ChatGPT web</chatGPTWebLink> to make edits.`,
              description: `Helper text shown below ChatGPT project sources when some sources must be edited in ChatGPT.`,
              values: {
                chatGPTWebLink: (e) =>
                  (0, Q.jsx)(
                    `a`,
                    {
                      className: `cursor-interaction text-info underline underline-offset-2`,
                      href: ke,
                      rel: `noreferrer`,
                      target: `_blank`,
                      onClick: (e) => {
                        je({
                          event: e,
                          href: ke,
                          initiator: `open_in_browser_bridge`,
                          openTarget: `external-browser`,
                        });
                      },
                      children: e,
                    },
                    `chatgpt-web-link`,
                  ),
              },
            }),
          })
        : null),
      (n[77] = ke),
      (n[78] = De),
      (n[79] = Ze))
    : (Ze = n[79]);
  let $e = !i,
    H;
  n[80] !== g || n[81] !== se || n[82] !== $e
    ? ((H = (0, Q.jsx)(`input`, {
        ref: g,
        disabled: $e,
        hidden: !0,
        multiple: !0,
        onChange: se,
        tabIndex: -1,
        type: `file`,
      })),
      (n[80] = g),
      (n[81] = se),
      (n[82] = $e),
      (n[83] = H))
    : (H = n[83]);
  let U;
  n[84] !== i ||
  n[85] !== v ||
  n[86] !== y ||
  n[87] !== re ||
  n[88] !== ae ||
  n[89] !== de ||
  n[90] !== M ||
  n[91] !== Te
    ? ((U = (0, Q.jsx)(dt, {
        canAddSources: i,
        isError: v,
        isLoading: y,
        onAddSourceClick: re,
        onDeleteFileSource: ae,
        onOpenSavedResponse: de,
        projectId: M,
        rows: Te,
      })),
      (n[84] = i),
      (n[85] = v),
      (n[86] = y),
      (n[87] = re),
      (n[88] = ae),
      (n[89] = de),
      (n[90] = M),
      (n[91] = Te),
      (n[92] = U))
    : (U = n[92]);
  let W;
  n[93] === C
    ? (W = n[94])
    : ((W = C
        ? (0, Q.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 z-10 rounded-lg border border-dashed border-ring bg-codex-drop-overlay/80`,
          })
        : null),
      (n[93] = C),
      (n[94] = W));
  let et;
  n[95] !== fe || n[96] !== pe || n[97] !== A || n[98] !== me || n[99] !== be || n[100] !== U || n[101] !== W
    ? ((et = (0, Q.jsxs)(`div`, {
        className: `relative flex min-h-0 flex-1 flex-col overflow-hidden`,
        onDragEnter: fe,
        onDragLeave: pe,
        onDragOver: A,
        onDrop: me,
        children: [be, U, W],
      })),
      (n[95] = fe),
      (n[96] = pe),
      (n[97] = A),
      (n[98] = me),
      (n[99] = be),
      (n[100] = U),
      (n[101] = W),
      (n[102] = et))
    : (et = n[102]);
  let tt;
  n[103] !== V || n[104] !== Ze || n[105] !== H || n[106] !== et
    ? ((tt = (0, Q.jsxs)(E, { className: `min-h-0 flex-1 gap-3 overflow-hidden`, children: [V, Ze, H, et] })),
      (n[103] = V),
      (n[104] = Ze),
      (n[105] = H),
      (n[106] = et),
      (n[107] = tt))
    : (tt = n[107]);
  let nt;
  n[108] === w
    ? (nt = n[109])
    : ((nt = w == null ? null : (0, Q.jsx)(E, { children: w })), (n[108] = w), (n[109] = nt));
  let G;
  n[110] === p
    ? (G = n[111])
    : ((G = p
        ? (0, Q.jsx)(E, {
            children: (0, Q.jsx)(`p`, {
              className: `rounded-lg border border-text-danger/20 bg-text-danger/4 px-3 py-2 text-sm text-danger`,
              role: `alert`,
              children: (0, Q.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.saveError`,
                defaultMessage: `Could not save project settings`,
                description: `Error message when saving ChatGPT project settings fails`,
              }),
            }),
          })
        : null),
      (n[110] = p),
      (n[111] = G));
  let rt;
  n[112] !== We || n[113] !== tt || n[114] !== nt || n[115] !== G || n[116] !== Me
    ? ((rt = (0, Q.jsxs)(`div`, { className: Me, children: [We, tt, nt, G] })),
      (n[112] = We),
      (n[113] = tt),
      (n[114] = nt),
      (n[115] = G),
      (n[116] = Me),
      (n[117] = rt))
    : (rt = n[117]);
  let it = !c,
    at,
    ot;
  n[118] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, Q.jsx)(u, { "aria-hidden": !1, asset: l })),
      (ot = (0, Q.jsx)(s, {
        id: `chatgptConversations.sidebar.projectSettings.advanced`,
        defaultMessage: `Advanced`,
        description: `Button label for opening advanced ChatGPT project settings`,
      })),
      (n[118] = at),
      (n[119] = ot))
    : ((at = n[118]), (ot = n[119]));
  let st;
  n[120] !== ie || n[121] !== it
    ? ((st = (0, Q.jsxs)(t, {
        className: `me-auto`,
        color: `secondary`,
        disabled: it,
        onClick: ie,
        type: `button`,
        children: [at, ot],
      })),
      (n[120] = ie),
      (n[121] = it),
      (n[122] = st))
    : (st = n[122]);
  let K = P == null,
    q;
  n[123] === P ? (q = n[124]) : ((q = P ? (0, Q.jsx)(s, { ...P }) : null), (n[123] = P), (n[124] = q));
  let ct = !d,
    ft;
  n[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ft = (0, Q.jsx)(s, {
        id: `chatgptConversations.sidebar.projectSettings.saveSettings`,
        defaultMessage: `Save`,
        description: `Button label for saving ChatGPT project settings`,
      })),
      (n[125] = ft))
    : (ft = n[125]);
  let Y;
  n[126] !== S || n[127] !== ct
    ? ((Y = (0, Q.jsx)(`span`, {
        className: `inline-flex`,
        children: (0, Q.jsx)(t, {
          className: `extension:h-token-button-composer extension:px-2 extension:py-0`,
          color: `primary`,
          disabled: ct,
          loading: S,
          size: `medium`,
          type: `submit`,
          children: ft,
        }),
      })),
      (n[126] = S),
      (n[127] = ct),
      (n[128] = Y))
    : (Y = n[128]);
  let X;
  n[129] !== K || n[130] !== q || n[131] !== Y
    ? ((X = (0, Q.jsx)(le, { disabled: K, tooltipContent: q, children: Y })),
      (n[129] = K),
      (n[130] = q),
      (n[131] = Y),
      (n[132] = X))
    : (X = n[132]);
  let Z;
  n[133] !== st || n[134] !== X
    ? ((Z = (0, Q.jsx)(E, { children: (0, Q.jsxs)(ce, { expandSingleButton: !1, children: [st, X] }) })),
      (n[133] = st),
      (n[134] = X),
      (n[135] = Z))
    : (Z = n[135]);
  let pt;
  return (
    n[136] !== rt || n[137] !== Z
      ? ((pt = (0, Q.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [Ae, rt, Z] })),
        (n[136] = rt),
        (n[137] = Z),
        (n[138] = pt))
      : (pt = n[138]),
    pt
  );
}
function J(e) {
  return e.sourceKind === `connector`;
}
function lt(e) {
  return e.id;
}
function ut(e, t) {
  let n = new URL(`/g/${t || e}/project`, At);
  return (n.searchParams.set(`tab`, `sources`), n.toString());
}
function dt(e) {
  let t = (0, kt.c)(25),
    {
      canAddSources: n,
      isError: r,
      isLoading: i,
      onAddSourceClick: a,
      onDeleteFileSource: o,
      onOpenSavedResponse: c,
      projectId: l,
      rows: u,
    } = e;
  if (u.length === 0) {
    if (r) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(ft, {
              children: (0, Q.jsx)(s, {
                id: `chatgptConversations.sidebar.projectSettings.error`,
                defaultMessage: `Could not load sources`,
                description: `Error state for ChatGPT project sources`,
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    if (i) {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Q.jsx)(Y, {})), (t[1] = e)) : (e = t[1]),
        e
      );
    }
    let e = !n,
      o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Q.jsx)(s, {
          id: `chatgptConversations.sidebar.projectSettings.addFiles`,
          defaultMessage: `Add files for ChatGPT to work with`,
          description: `Text in the empty ChatGPT project source upload area`,
        })),
        (t[2] = o))
      : (o = t[2]);
    let c;
    return (
      t[3] !== a || t[4] !== e
        ? ((c = (0, Q.jsx)(`button`, {
            className: `flex h-[320px] max-h-full w-full cursor-interaction items-center justify-center rounded-2xl border border-dashed border-default px-6 text-center text-base text-codex-description outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed`,
            disabled: e,
            onClick: a,
            type: `button`,
            children: o,
          })),
          (t[3] = a),
          (t[4] = e),
          (t[5] = c))
        : (c = t[5]),
      c
    );
  }
  let d;
  t[6] === i ? (d = t[7]) : ((d = i ? (0, Q.jsx)(Y, {}) : null), (t[6] = i), (t[7] = d));
  let f;
  t[8] === r
    ? (f = t[9])
    : ((f = r
        ? (0, Q.jsx)(ft, {
            children: (0, Q.jsx)(s, {
              id: `chatgptConversations.sidebar.projectSettings.partialError`,
              defaultMessage: `Some sources could not load`,
              description: `Partial error state for ChatGPT project sources`,
            }),
          })
        : null),
      (t[8] = r),
      (t[9] = f));
  let p;
  if (t[10] !== o || t[11] !== c || t[12] !== l || t[13] !== u) {
    let e;
    (t[15] !== o || t[16] !== c || t[17] !== l
      ? ((e = (e) =>
          (0, Q.jsx)(X, { onDeleteFileSource: o, onOpenSavedResponse: c, projectId: l, row: e }, e.id)),
        (t[15] = o),
        (t[16] = c),
        (t[17] = l),
        (t[18] = e))
      : (e = t[18]),
      (p = u.map(e)),
      (t[10] = o),
      (t[11] = c),
      (t[12] = l),
      (t[13] = u),
      (t[14] = p));
  } else p = t[14];
  let m;
  t[19] === p
    ? (m = t[20])
    : ((m = (0, Q.jsx)(`ul`, {
        className: `vertical-scroll-fade-mask flex max-h-[320px] min-h-0 flex-col overflow-x-hidden overflow-y-auto rounded-lg border border-border/60`,
        children: p,
      })),
      (t[19] = p),
      (t[20] = m));
  let h;
  return (
    t[21] !== d || t[22] !== f || t[23] !== m
      ? ((h = (0, Q.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-2`, children: [d, f, m] })),
        (t[21] = d),
        (t[22] = f),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
function ft(e) {
  let t = (0, kt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`div`, {
          className: `rounded-lg border border-border/60 px-3 py-2 text-base text-codex-description`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Y() {
  let e = (0, kt.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(ft, {
          children: (0, Q.jsx)(s, {
            id: `chatgptConversations.sidebar.projectSettings.loading`,
            defaultMessage: `Loading sources…`,
            description: `Loading state for ChatGPT project sources`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function X(e) {
  let n = (0, kt.c)(27),
    { onDeleteFileSource: r, onOpenSavedResponse: i, projectId: a, row: o } = e,
    s = h(),
    { deleteFileId: c } = o,
    l;
  n[0] === o.title
    ? (l = n[1])
    : ((l = (0, Q.jsx)(`span`, { className: `truncate text-base text-default`, children: o.title })),
      (n[0] = o.title),
      (n[1] = l));
  let u;
  n[2] !== a || n[3] !== o.description || n[4] !== o.saveMetadata || n[5] !== o.sortTimestamp
    ? ((u =
        o.saveMetadata == null
          ? o.description
          : (0, Q.jsx)(et, { metadata: o.saveMetadata, projectId: a, timestamp: o.sortTimestamp })),
      (n[2] = a),
      (n[3] = o.description),
      (n[4] = o.saveMetadata),
      (n[5] = o.sortTimestamp),
      (n[6] = u))
    : (u = n[6]);
  let d;
  n[7] === u
    ? (d = n[8])
    : ((d = (0, Q.jsx)(`span`, { className: `truncate text-sm text-codex-description`, children: u })),
      (n[7] = u),
      (n[8] = d));
  let f;
  n[9] !== l || n[10] !== d
    ? ((f = (0, Q.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [l, d] })),
      (n[9] = l),
      (n[10] = d),
      (n[11] = f))
    : (f = n[11]);
  let p;
  n[12] !== i || n[13] !== a || n[14] !== o.saveMetadata || n[15] !== o.title
    ? ((p =
        o.saveMetadata == null
          ? null
          : (0, Q.jsx)($e, { metadata: o.saveMetadata, onOpenOriginal: i, projectId: a, title: o.title })),
      (n[12] = i),
      (n[13] = a),
      (n[14] = o.saveMetadata),
      (n[15] = o.title),
      (n[16] = p))
    : (p = n[16]);
  let m;
  n[17] !== c || n[18] !== s || n[19] !== r || n[20] !== o.title
    ? ((m =
        c == null
          ? null
          : (0, Q.jsx)(t, {
              "aria-label": s.formatMessage(
                {
                  id: `chatgptConversations.sidebar.projectSettings.deleteSource`,
                  defaultMessage: `Delete {sourceTitle}`,
                  description: `Accessible label for deleting a ChatGPT project source`,
                },
                { sourceTitle: o.title },
              ),
              className: `shrink-0`,
              color: `ghost`,
              onClick: () => r(c),
              size: `icon`,
              uniform: !0,
              children: (0, Q.jsx)(Ke, { className: `icon-sm` }),
            })),
      (n[17] = c),
      (n[18] = s),
      (n[19] = r),
      (n[20] = o.title),
      (n[21] = m))
    : (m = n[21]);
  let g;
  return (
    n[22] !== o.icon || n[23] !== f || n[24] !== p || n[25] !== m
      ? ((g = (0, Q.jsxs)(`li`, {
          className: `relative flex min-w-0 items-center gap-3 border-b border-border/60 px-3 py-3 last:border-b-0`,
          children: [o.icon, f, p, m],
        })),
        (n[22] = o.icon),
        (n[23] = f),
        (n[24] = p),
        (n[25] = m),
        (n[26] = g))
      : (g = n[26]),
    g
  );
}
function Z(e) {
  return e.formatMessage({
    id: `chatgptConversations.sidebar.projectSettings.fileSourceFallback`,
    defaultMessage: `File source`,
    description: `Fallback label for a ChatGPT project file source`,
  });
}
function pt(e) {
  return e.formatMessage({
    id: `chatgptConversations.sidebar.projectSettings.saveSource`,
    defaultMessage: `Project save`,
    description: `Source type label for a ChatGPT project save`,
  });
}
function mt(e, t, n) {
  return {
    description: n.formatMessage(B.file),
    icon: (0, Q.jsx)(`span`, {
      "aria-label": n.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.uploadingFile`,
        defaultMessage: `Uploading file…`,
        description: `Accessible status label for a pending ChatGPT project file upload`,
      }),
      role: `status`,
      children: (0, Q.jsx)(oe, { className: jt }),
    }),
    id: `pending-file:${e.name}:${e.size}:${e.lastModified}:${t}`,
    sourceKind: `file`,
    sortIndex: t,
    sortTimestamp: 2 ** 53 - 1,
    title: e.name.trim() || Z(n),
  };
}
function ht(e, t, n, r) {
  let i = Tt(e),
    o = wt(e, t);
  return {
    deleteFileId: r && !gt(e) ? (i ?? void 0) : void 0,
    description: t.formatMessage(B.file),
    icon: (0, Q.jsx)(a, { className: jt }),
    id: `file:${i ?? o}`,
    sourceKind: `file`,
    sortIndex: n,
    sortTimestamp: Et(e),
    title: o,
  };
}
function gt(e) {
  return `metadata` in e && Mt.safeParse(e.metadata).success;
}
function _t(e, t, n) {
  let r = t.formatMessage(B[e.scope_type]),
    i = e.scope_type === `slack_channel` ? void 0 : xt(e, t);
  return {
    description:
      i == null
        ? r
        : (0, Q.jsx)(s, {
            id: `chatgptConversations.sidebar.projectSettings.connectorSourceWithStatus`,
            defaultMessage: `{sourceType} - {status}`,
            description: `Source type and sync status for a ChatGPT project connector source`,
            values: { sourceType: r, status: i },
          }),
    icon: bt(e),
    id: `connector:${e.scope_id}`,
    sourceKind: `connector`,
    sortIndex: n,
    sortTimestamp: V(e.created_at),
    title:
      e.display_name?.trim() ||
      e.canonical_handle?.trim() ||
      e.original_url?.trim() ||
      t.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.connectorSourceFallback`,
        defaultMessage: `Connector source`,
        description: `Fallback label for a ChatGPT project connector source`,
      }),
  };
}
function vt(e, t, n, r) {
  let i = Dt(e),
    a = {
      ...t?.metadata,
      save_id: e.id,
      conversation_id: e.conversation_id,
      message_id: e.message_id,
      creator_id: e.owner_id,
      title: e.title,
    };
  return {
    description: pt(n),
    icon: (0, Q.jsx)(Ce, { className: jt }),
    id: `save:${e.id}`,
    sourceKind: `save`,
    sortIndex: r,
    sortTimestamp: i || t?.sortTimestamp || 0,
    saveMetadata: a,
    title:
      Ct(a, n) ??
      t?.title ??
      n.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.saveSourceFallback`,
        defaultMessage: `Saved response`,
        description: `Fallback row title for a ChatGPT project save when no generated title is available.`,
      }),
  };
}
function yt(e, t, n, r) {
  let i = t.save_id?.trim();
  return {
    description: pt(n),
    icon: (0, Q.jsx)(Ce, { className: jt }),
    id: `save-file:${i || e.file_id || e.id}`,
    sourceKind: `save`,
    sortIndex: r,
    sortTimestamp: Et(e),
    saveMetadata: t,
    title: Ct(t, n) ?? wt(e, n),
  };
}
function bt(e) {
  return e.connector_type === `slack`
    ? (0, Q.jsx)(v, { className: `icon-sm shrink-0` })
    : e.connector_type === `linear`
      ? (0, Q.jsx)(de, { className: jt })
      : e.connector_type === `google_drive`
        ? (0, Q.jsx)(se, { className: jt })
        : (0, Q.jsx)(M, { className: jt });
}
function xt(e, t) {
  switch (e.last_sync_status) {
    case `completed`:
      return t.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.connectorStatusCompleted`,
        defaultMessage: `Synced`,
        description: `Status label for a synced ChatGPT project connector source`,
      });
    case `failed`:
      return t.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.connectorStatusFailed`,
        defaultMessage: `Sync failed`,
        description: `Status label for a failed ChatGPT project connector source`,
      });
    case `not_synced`:
      return t.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.connectorStatusNotSynced`,
        defaultMessage: `Not synced`,
        description: `Status label for an unsynced ChatGPT project connector source`,
      });
    case `running`:
      return t.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.connectorStatusRunning`,
        defaultMessage: `Syncing`,
        description: `Status label for a syncing ChatGPT project connector source`,
      });
    case null:
    case void 0:
      return;
  }
}
function St(e, t) {
  let n = new Map();
  for (let r of e) {
    let e = Qe(r);
    if (e == null) continue;
    let i = e.save_id?.trim();
    i && n.set(i, { metadata: e, sortTimestamp: Et(r), title: wt(r, t) });
  }
  return n;
}
function Ct(e, t) {
  let n = e.title,
    r = n?.trim();
  if (r) return r;
  if (n != null) return null;
  let i = e.conversation_title?.trim();
  return i
    ? t.formatMessage(
        {
          id: `chatgptConversations.sidebar.projectSettings.saveSourceFromConversationTitle`,
          defaultMessage: `Response: {conversationTitle}`,
          description: `File-row title shown when rendering a saved response and backend metadata includes a conversation title.`,
        },
        { conversationTitle: i },
      )
    : null;
}
function wt(e, t) {
  return `name` in e && typeof e.name == `string` && e.name.trim()
    ? e.name.trim()
    : (e.file_id ?? e.id ?? Z(t));
}
function Tt(e) {
  return e.file_id ?? e.id ?? null;
}
function Et(e) {
  let t = `created_at` in e ? e.created_at : void 0,
    n = `last_modified` in e ? e.last_modified : void 0;
  return V(t ?? n);
}
function Dt(e) {
  return V(e.created_at ?? e.create_time ?? e.update_time);
}
function Ot(e, t) {
  return e.sortTimestamp === t.sortTimestamp ? e.sortIndex - t.sortIndex : t.sortTimestamp - e.sortTimestamp;
}
var kt, Q, At, jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((kt = A()),
      m(),
      T(),
      i(),
      ue(),
      pe(),
      x(),
      N(),
      d(),
      C(),
      b(),
      De(),
      r(),
      w(),
      k(),
      ke(),
      Ie(),
      _(),
      qe(),
      F(),
      R(),
      Ze(),
      W(),
      H(),
      (Q = j()),
      (At = `https://chatgpt.com`),
      (jt = `icon-sm shrink-0 text-codex-description`),
      (Mt = ae({ project_save: ae({}).loose() }).loose()));
  }))();
}
function Pt(e) {
  let t = (0, Rt.c)(123),
    { onOpenChange: r, project: i, projectCrudStatus: a } = e,
    o = c(n),
    s = g(nt),
    l = h(),
    u = re(),
    d = (0, $.useRef)(null),
    p = He(),
    m = (0, $.useId)(),
    _ = (0, $.useId)(),
    v = (0, $.useId)(),
    [y, te] = (0, $.useState)(`main`),
    [ne, b] = (0, $.useState)(!1),
    [x, C] = (0, $.useState)(``),
    w = i.gizmo.id,
    T = i.gizmo.display.emoji ?? null,
    E = i.gizmo.display.name,
    D = i.gizmo.display.theme ?? null,
    k = i.gizmo.instructions ?? null,
    ae = `memory_scope` in i.gizmo ? i.gizmo.memory_scope : void 0,
    oe = y === `advanced` && (k == null || ae == null),
    se,
    ce;
  t[0] === w
    ? ((se = t[1]), (ce = t[2]))
    : ((se = [`chatgpt-project-details`, w]),
      (ce = () =>
        Me.safeGet(`/gizmos/{gizmo_id_or_short_url}`, {
          parameters: { path: { gizmo_id_or_short_url: w } },
        })),
      (t[0] = w),
      (t[1] = se),
      (t[2] = ce));
  let le;
  t[3] !== oe || t[4] !== se || t[5] !== ce
    ? ((le = { queryKey: se, queryFn: ce, enabled: oe, staleTime: f.ONE_MINUTE }),
      (t[3] = oe),
      (t[4] = se),
      (t[5] = ce),
      (t[6] = le))
    : (le = t[6]);
  let ue = ee(le),
    de = k ?? ue.data?.gizmo.instructions ?? ``,
    fe;
  t[7] === de ? (fe = t[8]) : ((fe = de.slice(0, Vt)), (t[7] = de), (t[8] = fe));
  let pe = fe,
    [A, me] = (0, $.useState)(T),
    [j, he] = (0, $.useState)(E),
    [M, _e] = (0, $.useState)(D),
    [ye, be] = (0, $.useState)(null),
    [N, Se] = (0, $.useState)(!1),
    [P, Ce] = (0, $.useState)(0),
    F = N || P > 0,
    [De, ke] = (0, $.useState)(!1),
    Ae;
  t[9] === j ? (Ae = t[10]) : ((Ae = j.trim()), (t[9] = j), (t[10] = Ae));
  let je = Ae,
    Pe = je.length === 0,
    Fe = je.length > 50,
    L = Pe || Fe,
    Ie = i.gizmo.current_user_permission?.can_write,
    Le;
  t[11] !== a || t[12] !== Ie ? ((Le = I(Ie, a)), (t[11] = a), (t[12] = Ie), (t[13] = Le)) : (Le = t[13]);
  let ze = Le,
    R = ze,
    Be;
  t[14] === E ? (Be = t[15]) : ((Be = E.trim()), (t[14] = E), (t[15] = Be));
  let Ve = je !== Be,
    We = A !== T || M !== D,
    z = ye ?? pe,
    Ke = z !== pe,
    qe = k == null && ue.isPending,
    Xe = k == null && ue.isError,
    B = ae ?? (ue.data != null && `memory_scope` in ue.data.gizmo ? ue.data.gizmo.memory_scope : void 0),
    V,
    Ze;
  t[16] !== B || t[17] !== i.gizmo.gizmo_snorlax_type
    ? ((V = B == null ? null : xe(B)),
      (Ze = V == null ? null : we(V, i.gizmo.gizmo_snorlax_type)),
      (t[16] = B),
      (t[17] = i.gizmo.gizmo_snorlax_type),
      (t[18] = V),
      (t[19] = Ze))
    : ((V = t[18]), (Ze = t[19]));
  let Qe = Ze,
    $e;
  t[20] === i ? ($e = t[21]) : (($e = Lt(i)), (t[20] = i), (t[21] = $e));
  let H = $e,
    U,
    W;
  t[22] === w
    ? ((U = t[23]), (W = t[24]))
    : ((U = [`chatgpt-project-connector-scopes`, w]),
      (W = () =>
        Me.safeGet(`/projects/{project_id}/connector_scopes`, {
          parameters: { path: { project_id: w }, query: { cursor: null, limit: Bt } },
        })),
      (t[22] = w),
      (t[23] = U),
      (t[24] = W));
  let et;
  t[25] !== H || t[26] !== U || t[27] !== W
    ? ((et = { queryKey: U, queryFn: W, enabled: H, staleTime: f.ONE_MINUTE }),
      (t[25] = H),
      (t[26] = U),
      (t[27] = W),
      (t[28] = et))
    : (et = t[28]);
  let G = ee(et),
    { data: rt, isLoading: ot, isError: st } = ge(Je, w),
    K = g(Ye),
    q;
  t[29] === w ? (q = t[30]) : ((q = { projectId: w }), (t[29] = w), (t[30] = q));
  let J = Te(q),
    lt;
  t[31] === w ? (lt = t[32]) : ((lt = { projectId: w }), (t[31] = w), (t[32] = lt));
  let ut = Re(lt),
    dt = (H && G.isPending) || ot || K === `loading`,
    ft = (H && G.isError) || st || K === `unavailable`,
    Y = R && !J.isPending,
    X = ze && !F && !L && (Ve || We || Ke),
    Z;
  t[33] !== p || t[34] !== o
    ? ((Z = (e, t, n) => {
        let r = Ue(e)?.trim() || n;
        (o
          .get(S)
          .danger(t, {
            errorAnalytics: { toastId: `chatgptProjectSettingsDialog.showProjectSourceError` },
            description: r,
          }),
          p() && C(`${t}: ${r}`));
      }),
      (t[33] = p),
      (t[34] = o),
      (t[35] = Z))
    : (Z = t[35]);
  let pt = Z,
    mt;
  t[36] !== J || t[37] !== R || t[38] !== l || t[39] !== pt
    ? ((mt = (e) => {
        e.length !== 0 &&
          R &&
          !J.isPending &&
          (C(``),
          J.mutateAsync(e).catch((e) => {
            let { title: t, description: n } = Ge(e, l);
            pt(e, t, n);
          }));
      }),
      (t[36] = J),
      (t[37] = R),
      (t[38] = l),
      (t[39] = pt),
      (t[40] = mt))
    : (mt = t[40]);
  let ht = mt,
    gt;
  t[41] !== ut || t[42] !== l || t[43] !== pt
    ? ((gt = (e) => {
        (C(``),
          ut.mutateAsync(e).catch((e) => {
            pt(
              e,
              l.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.deleteSourceError`,
                defaultMessage: `Could not delete source`,
                description: `Error state for deleting a source from a ChatGPT project`,
              }),
              l.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.deleteSourceErrorDescription`,
                defaultMessage: `Try again`,
                description: `Fallback toast description when deleting a source from a ChatGPT project fails without a user-facing server message`,
              }),
            );
          }));
      }),
      (t[41] = ut),
      (t[42] = l),
      (t[43] = pt),
      (t[44] = gt))
    : (gt = t[44]);
  let _t = gt,
    vt;
  t[45] === ht
    ? (vt = t[46])
    : ((vt = (e) => {
        let t = Array.from(e.currentTarget.files ?? []);
        ((e.currentTarget.value = ``), ht(t));
      }),
      (t[45] = ht),
      (t[46] = vt));
  let yt = vt,
    bt;
  t[47] === Y
    ? (bt = t[48])
    : ((bt = (e) => {
        Oe(e.dataTransfer) && (It(e, Y), Y && b(!0));
      }),
      (t[47] = Y),
      (t[48] = bt));
  let xt = bt,
    St;
  t[49] === Y
    ? (St = t[50])
    : ((St = (e) => {
        Oe(e.dataTransfer) && (It(e, Y), Y && b(!0));
      }),
      (t[49] = Y),
      (t[50] = St));
  let Ct = St,
    wt;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (e) => {
        (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || b(!1);
      }),
      (t[51] = wt))
    : (wt = t[51]);
  let Tt = wt,
    Et;
  t[52] !== ht || t[53] !== Y
    ? ((Et = (e) => {
        Oe(e.dataTransfer) && (It(e, Y), b(!1), Y && ht(Ne(e.dataTransfer)));
      }),
      (t[52] = ht),
      (t[53] = Y),
      (t[54] = Et))
    : (Et = t[54]);
  let Dt = Et,
    Ot;
  t[55] !== A ||
  t[56] !== z ||
  t[57] !== Ke ||
  t[58] !== j ||
  t[59] !== r ||
  t[60] !== i ||
  t[61] !== u ||
  t[62] !== o ||
  t[63] !== M
    ? ((Ot = async () => {
        (ke(!1), Se(!0));
        try {
          (await ve({
            scope: o,
            emoji: A,
            instructions: Ke ? z : null,
            name: j,
            project: i,
            queryClient: u,
            theme: M,
          }),
            Se(!1),
            r(!1));
        } catch {
          (ke(!0), Se(!1));
        }
      }),
      (t[55] = A),
      (t[56] = z),
      (t[57] = Ke),
      (t[58] = j),
      (t[59] = r),
      (t[60] = i),
      (t[61] = u),
      (t[62] = o),
      (t[63] = M),
      (t[64] = Ot))
    : (Ot = t[64]);
  let kt = Ot,
    Q;
  t[65] !== X || t[66] !== kt || t[67] !== y
    ? ((Q = (e) => {
        (e.preventDefault(), y !== `advanced` && X && kt());
      }),
      (t[65] = X),
      (t[66] = kt),
      (t[67] = y),
      (t[68] = Q))
    : (Q = t[68]);
  let At = Q,
    jt;
  t[69] !== F || t[70] !== r
    ? ((jt = (e) => {
        (e || !F) && r(e);
      }),
      (t[69] = F),
      (t[70] = r),
      (t[71] = jt))
    : (jt = t[71]);
  let Mt = jt,
    Nt;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = { "aria-describedby": void 0 }), (t[72] = Nt))
    : (Nt = t[72]);
  let Pt;
  t[73] === x
    ? (Pt = t[74])
    : ((Pt = (0, zt.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `assertive`,
        className: `sr-only`,
        children: x,
      })),
      (t[73] = x),
      (t[74] = Pt));
  let Ht;
  t[75] !== J ||
  t[76] !== R ||
  t[77] !== ze ||
  t[78] !== H ||
  t[79] !== X ||
  t[80] !== G ||
  t[81] !== _t ||
  t[82] !== ut.optimisticallyDeletedFileIds ||
  t[83] !== Xe ||
  t[84] !== De ||
  t[85] !== A ||
  t[86] !== yt ||
  t[87] !== xt ||
  t[88] !== Ct ||
  t[89] !== Dt ||
  t[90] !== L ||
  t[91] !== z ||
  t[92] !== v ||
  t[93] !== F ||
  t[94] !== ft ||
  t[95] !== dt ||
  t[96] !== qe ||
  t[97] !== Pe ||
  t[98] !== Fe ||
  t[99] !== N ||
  t[100] !== ne ||
  t[101] !== Qe ||
  t[102] !== s ||
  t[103] !== V ||
  t[104] !== j ||
  t[105] !== _ ||
  t[106] !== m ||
  t[107] !== r ||
  t[108] !== E ||
  t[109] !== i ||
  t[110] !== a ||
  t[111] !== w ||
  t[112] !== rt ||
  t[113] !== y ||
  t[114] !== M
    ? ((Ht =
        y === `advanced`
          ? (0, zt.jsx)(at, {
              canEditProject: ze,
              didLoadInstructionsFail: Xe,
              instructions: z,
              instructionsInputId: v,
              isLoadingInstructions: qe,
              isSaving: F,
              libraryAccess: Qe,
              memoryAccess: V,
              maxInstructionsLength: Vt,
              onBack: () => {
                te(`main`);
              },
              onInstructionsChange: (e) => {
                (be(e), ke(!1));
              },
            })
          : (0, zt.jsx)(ct, {
              canAddSources: R,
              canDeleteFileSources: R,
              canEditProject: ze,
              canOpenAdvanced: !L && !F,
              canSave: X,
              connectorScopes: H ? (G.data?.items ?? []) : [],
              didSaveFail: De,
              editDisabledStatus: ze ? void 0 : a,
              emoji: A,
              fileInputRef: d,
              hasNameError: L,
              isAddingSources: J.isPending,
              isError: ft,
              isLoading: dt,
              isNameEmpty: Pe,
              isNameTooLong: Fe,
              isSaving: F,
              isSourceDragActive: ne,
              localFolders:
                s && ze && Ee(i)
                  ? (0, zt.jsx)(it, {
                      disabled: N,
                      onSavingChange: (e) => {
                        Ce((t) => t + (e ? 1 : -1));
                      },
                      projectId: w,
                      projectName: E,
                    })
                  : null,
              maxNameLength: 50,
              name: j,
              nameErrorId: _,
              nameInputId: m,
              optimisticallyDeletedFileIds: ut.optimisticallyDeletedFileIds,
              pendingSourceFiles: J.pendingUploads.flatMap(Ft),
              projectId: w,
              projectFiles: i.files ?? [],
              projectShortUrl: i.gizmo.short_url,
              projectSaves: rt ?? [],
              sourceAttachmentStatus: (0, zt.jsx)(tt, {
                attachments: J.attachments,
                canRetry: R,
                onRetry: (e) => {
                  R && J.retryAttachment(e);
                },
              }),
              theme: M,
              onAddSourceClick: () => d.current?.click(),
              onAdvanced: () => {
                te(`advanced`);
              },
              onDeleteFileSource: _t,
              onEmojiChange: (e) => {
                (me(e), ke(!1));
              },
              onFileInputChange: yt,
              onNameChange: (e) => {
                (he(e.target.value), ke(!1));
              },
              onOpenSavedResponse: () => r(!1),
              onSourcesDragEnter: xt,
              onSourcesDragLeave: Tt,
              onSourcesDragOver: Ct,
              onSourcesDrop: Dt,
              onThemeChange: (e) => {
                (_e(e), ke(!1));
              },
            })),
      (t[75] = J),
      (t[76] = R),
      (t[77] = ze),
      (t[78] = H),
      (t[79] = X),
      (t[80] = G),
      (t[81] = _t),
      (t[82] = ut.optimisticallyDeletedFileIds),
      (t[83] = Xe),
      (t[84] = De),
      (t[85] = A),
      (t[86] = yt),
      (t[87] = xt),
      (t[88] = Ct),
      (t[89] = Dt),
      (t[90] = L),
      (t[91] = z),
      (t[92] = v),
      (t[93] = F),
      (t[94] = ft),
      (t[95] = dt),
      (t[96] = qe),
      (t[97] = Pe),
      (t[98] = Fe),
      (t[99] = N),
      (t[100] = ne),
      (t[101] = Qe),
      (t[102] = s),
      (t[103] = V),
      (t[104] = j),
      (t[105] = _),
      (t[106] = m),
      (t[107] = r),
      (t[108] = E),
      (t[109] = i),
      (t[110] = a),
      (t[111] = w),
      (t[112] = rt),
      (t[113] = y),
      (t[114] = M),
      (t[115] = Ht))
    : (Ht = t[115]);
  let Ut;
  t[116] !== At || t[117] !== Pt || t[118] !== Ht
    ? ((Ut = (0, zt.jsxs)(ie, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 gap-4 overflow-hidden`,
        onSubmit: At,
        children: [Pt, Ht],
      })),
      (t[116] = At),
      (t[117] = Pt),
      (t[118] = Ht),
      (t[119] = Ut))
    : (Ut = t[119]);
  let Wt;
  return (
    t[120] !== Mt || t[121] !== Ut
      ? ((Wt = (0, zt.jsx)(O, {
          open: !0,
          contentProps: Nt,
          onOpenChange: Mt,
          size: `default`,
          children: Ut,
        })),
        (t[120] = Mt),
        (t[121] = Ut),
        (t[122] = Wt))
      : (Wt = t[122]),
    Wt
  );
}
function Ft(e) {
  return e.variables ?? [];
}
function It(e, t) {
  (e.preventDefault(), e.stopPropagation(), (e.dataTransfer.dropEffect = t ? `copy` : `none`));
}
function Lt(e) {
  return e.gizmo.gizmo_snorlax_type == null;
}
var Rt, $, zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Rt = A()),
      y(),
      fe(),
      p(),
      ($ = he()),
      T(),
      L(),
      Se(),
      pe(),
      x(),
      D(),
      me(),
      o(),
      Be(),
      Fe(),
      z(),
      Pe(),
      We(),
      ye(),
      q(),
      Nt(),
      U(),
      Xe(),
      rt(),
      G(),
      (zt = j()),
      (Bt = 100),
      (Vt = 8e3));
  }))();
}
Ht();
export { Pt as ChatGptProjectSettingsDialog };
//# sourceMappingURL=chatgpt-project-settings-dialog-4542afa4a6f1.js.map
