import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  B1 as i,
  Bst as a,
  DB as o,
  FBt as s,
  GL as c,
  HFt as l,
  HO as u,
  IO as d,
  JO as f,
  KL as p,
  LNt as m,
  LO as ee,
  Lst as h,
  Mst as g,
  OB as _,
  PBt as v,
  Qst as y,
  RL as b,
  RO as te,
  Rst as x,
  Vrt as S,
  WL as C,
  WO as w,
  XOt as T,
  Y3 as E,
  Z3 as D,
  ZSt as ne,
  aA as re,
  e6 as ie,
  iA as ae,
  iCt as oe,
  jst as se,
  kRt as ce,
  nB as le,
  nCt as ue,
  okt as de,
  qL as fe,
  qO as pe,
  qrt as me,
  rB as he,
  tkt as O,
  z1 as ge,
  zL as k,
  zO as _e,
  zst as ve,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as A,
  $Ln as ye,
  A3t as be,
  Ben as xe,
  CI as Se,
  F2n as Ce,
  I2n as j,
  KBn as we,
  MT as Te,
  N0 as Ee,
  P0 as De,
  QLn as M,
  Qzn as N,
  SLn as Oe,
  SRn as ke,
  T3t as Ae,
  aVn as je,
  aan as Me,
  bRn as Ne,
  cVn as Pe,
  dG as Fe,
  eBn as Ie,
  eq as Le,
  iRr as Re,
  ian as P,
  jT as ze,
  nBn as Be,
  oVn as Ve,
  qBn as He,
  rBn as Ue,
  tVn as We,
  tq as F,
  tyr as I,
  vLn as L,
  vut as Ge,
  wI as Ke,
  yut as qe,
} from "./app-initial-ad16eaadf81f.js";
import { Em as Je, Tm as Ye } from "./app-primary-3e00728c2a4c.js";
import { i as Xe, n as Ze, t as Qe } from "./data-99703db588c3.js";
import { i as R, n as z, r as $e, t as et } from "./chatgpt-project-sources-9d1a715e38b6.js";
import { a as tt, i as B, n as V, o as H, r as nt, t as rt } from "./file-attachment-status-151f8b7fbd10.js";
import { i as it, n as U, r as at, t as ot } from "./local-folders-section-e93c6e47a83b.js";
function st(e) {
  let t = (0, lt.c)(60),
    {
      canEditProject: n,
      didLoadInstructionsFail: r,
      instructions: i,
      instructionsInputId: a,
      isLoadingInstructions: o,
      isSaving: s,
      libraryAccess: c,
      memoryAccess: l,
      maxInstructionsLength: u,
      onBack: d,
      onInstructionsChange: f,
    } = e,
    p = Oe(),
    m = de(),
    h = u - i.length,
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== i ||
    t[3] !== a ||
    t[4] !== m ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== p ||
    t[8] !== c ||
    t[9] !== u ||
    t[10] !== l ||
    t[11] !== f ||
    t[12] !== h
  ) {
    let e = null;
    l === `project-only`
      ? (e = m.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.memoryProjectOnly`,
          defaultMessage: `Project-only`,
          description: `Selected value for project-only ChatGPT project memory access`,
        }))
      : l === `open-default` &&
        (e = m.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.memoryOpen`,
          defaultMessage: `Open`,
          description: `Open value for ChatGPT project memory access`,
        }));
    let d = null;
    (c === `enabled-default`
      ? (d = m.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.libraryAccessEnabled`,
          defaultMessage: `Enabled`,
          description: `Enabled value for ChatGPT project library access`,
        }))
      : c === `disabled` &&
        (d = m.formatMessage({
          id: `chatgptConversations.sidebar.projectSettings.libraryAccessDisabled`,
          defaultMessage: `Disabled`,
          description: `Selected value for disabled ChatGPT project library access`,
        })),
      (x = `flex min-h-0 flex-col`),
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((S = (0, W.jsx)(_e, {
            children: (0, W.jsx)(te, {
              title: (0, W.jsx)(pe, {
                asChild: !0,
                children: (0, W.jsx)(`span`, {
                  children: (0, W.jsx)(O, {
                    id: `chatgptConversations.sidebar.projectSettings.advancedTitle`,
                    defaultMessage: `Advanced settings`,
                    description: `Title for advanced ChatGPT project settings`,
                  }),
                }),
              }),
            }),
          })),
          (t[20] = S))
        : (S = t[20]),
      (g = _e),
      (_ = `min-h-0 gap-8 overflow-y-auto`));
    let ee = o ? void 0 : a,
      C;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, W.jsx)(O, {
          id: `chatgptConversations.sidebar.projectSettings.instructionsLabel`,
          defaultMessage: `Custom instructions`,
          description: `Label for ChatGPT project instructions`,
        })),
        (t[21] = C))
      : (C = t[21]);
    let w;
    t[22] === ee
      ? (w = t[23])
      : ((w = (0, W.jsx)(`label`, {
          className: `flex flex-col gap-1 text-sm text-default`,
          htmlFor: ee,
          children: C,
        })),
        (t[22] = ee),
        (t[23] = w));
    let T;
    t[24] !== n ||
    t[25] !== r ||
    t[26] !== i ||
    t[27] !== a ||
    t[28] !== m ||
    t[29] !== o ||
    t[30] !== s ||
    t[31] !== u ||
    t[32] !== f
      ? ((T = o
          ? (0, W.jsx)(`p`, {
              className: `text-sm`,
              role: `status`,
              children: (0, W.jsx)(O, {
                id: `chatgptConversations.sidebar.projectSettings.loadingInstructions`,
                defaultMessage: `Loading custom instructions…`,
                description: `Loading state while fetching ChatGPT project instructions for editing`,
              }),
            })
          : (0, W.jsx)(M, {
              id: a,
              rows: 7,
              placeholder: m.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.instructionsPlaceholder`,
                defaultMessage: `e.g. “Respond in Spanish. Reference the latest JavaScript documentation. Keep answers short and focused.”`,
                description: `Placeholder for ChatGPT project instructions`,
              }),
              value: i,
              disabled: !n || s || r,
              onChange: (e) => {
                f(e.target.value.slice(0, u));
              },
              onKeyDown: ct,
            })),
        (t[24] = n),
        (t[25] = r),
        (t[26] = i),
        (t[27] = a),
        (t[28] = m),
        (t[29] = o),
        (t[30] = s),
        (t[31] = u),
        (t[32] = f),
        (t[33] = T))
      : (T = t[33]);
    let E;
    t[34] !== o || t[35] !== u || t[36] !== h
      ? ((E = o
          ? null
          : (0, W.jsx)(`span`, {
              className: `text-sm text-codex-description`,
              children: (0, W.jsx)(O, {
                id: `chatgptConversations.sidebar.projectSettings.instructionsRemaining`,
                defaultMessage: `{remaining, number}/{length, number} left`,
                description: `Character countdown for ChatGPT project custom instructions`,
                values: { length: u, remaining: h },
              }),
            })),
        (t[34] = o),
        (t[35] = u),
        (t[36] = h),
        (t[37] = E))
      : (E = t[37]);
    let D;
    (t[38] === r
      ? (D = t[39])
      : ((D = r
          ? (0, W.jsx)(`p`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children: (0, W.jsx)(O, {
                id: `chatgptConversations.sidebar.projectSettings.loadInstructionsError`,
                defaultMessage: `Could not load custom instructions`,
                description: `Error message when loading ChatGPT project instructions for editing fails`,
              }),
            })
          : null),
        (t[38] = r),
        (t[39] = D)),
      t[40] !== T || t[41] !== E || t[42] !== D || t[43] !== w
        ? ((v = (0, W.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [w, T, E, D] })),
          (t[40] = T),
          (t[41] = E),
          (t[42] = D),
          (t[43] = w),
          (t[44] = v))
        : (v = t[44]),
      (y =
        e == null
          ? null
          : (0, W.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, W.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, W.jsx)(`span`, {
                      className: `text-sm text-default`,
                      children: (0, W.jsx)(O, {
                        id: `chatgptConversations.sidebar.projectSettings.memoryLabel`,
                        defaultMessage: `Memory`,
                        description: `Label for ChatGPT project memory access`,
                      }),
                    }),
                    (0, W.jsx)(`span`, {
                      className: `text-sm text-codex-description`,
                      children:
                        l === `project-only`
                          ? (0, W.jsx)(O, {
                              id: `chatgptConversations.projectSettings.memoryProjectOnlyImmutable`,
                              defaultMessage: `Project can only access its own memories. Its memories are hidden from outside chats. This cannot be changed.`,
                              description: `Help text below the read-only Project-only memory value in ChatGPT project settings, explaining memory isolation and that this setting is not editable`,
                            })
                          : (0, W.jsx)(O, {
                              id: `chatgptConversations.sidebar.projectSettings.memoryDescription`,
                              defaultMessage: `Project can access memories from outside chats, and vice versa. This cannot be changed.`,
                              description: `Description for the read-only ChatGPT project memory access control`,
                            }),
                    }),
                  ],
                }),
                (0, W.jsx)(`div`, {
                  "aria-label": m.formatMessage(
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
      (b =
        d == null
          ? null
          : (0, W.jsxs)(`div`, {
              className: `flex flex-col gap-2`,
              children: [
                (0, W.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    (0, W.jsx)(`span`, {
                      className: `text-sm text-default`,
                      children: p
                        ? (0, W.jsx)(O, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessLabel.space`,
                            defaultMessage: `Space access`,
                            description: `Label for ChatGPT project space access. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, W.jsx)(O, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessLabel`,
                            defaultMessage: `Library access`,
                            description: `Label for ChatGPT project library access`,
                          }),
                    }),
                    (0, W.jsx)(`span`, {
                      className: `text-sm text-codex-description`,
                      children: p
                        ? (0, W.jsx)(O, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessDescription.space`,
                            defaultMessage: `This project can access your file Space while it remains private. Sharing this project disables Space access.`,
                            description: `Description for the read-only ChatGPT project space access control. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                          })
                        : (0, W.jsx)(O, {
                            id: `chatgptConversations.sidebar.projectSettings.libraryAccessDescription`,
                            defaultMessage: `This project can access your file Library while it remains private. Sharing this project disables Library access.`,
                            description: `Description for the read-only ChatGPT project library access control`,
                          }),
                    }),
                  ],
                }),
                (0, W.jsx)(`div`, {
                  "aria-label": p
                    ? m.formatMessage(
                        {
                          id: `chatgptConversations.sidebar.projectSettings.libraryAccessControlLabel.space`,
                          defaultMessage: `Space access: {value}`,
                          description: `Accessible label for the read-only ChatGPT project space access value. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                        },
                        { value: d },
                      )
                    : m.formatMessage(
                        {
                          id: `chatgptConversations.sidebar.projectSettings.libraryAccessControlLabel`,
                          defaultMessage: `Library access: {value}`,
                          description: `Accessible label for the read-only ChatGPT project library access value`,
                        },
                        { value: d },
                      ),
                  className: `flex h-9 w-[234px] items-center rounded-lg border border-primary-outline bg-primary-soft px-3 text-sm text-default opacity-60`,
                  children: d,
                }),
              ],
            })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = m),
      (t[5] = o),
      (t[6] = s),
      (t[7] = p),
      (t[8] = c),
      (t[9] = u),
      (t[10] = l),
      (t[11] = f),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y),
      (t[17] = b),
      (t[18] = x),
      (t[19] = S));
  } else ((g = t[13]), (_ = t[14]), (v = t[15]), (y = t[16]), (b = t[17]), (x = t[18]), (S = t[19]));
  let C;
  t[45] !== g || t[46] !== _ || t[47] !== v || t[48] !== y || t[49] !== b
    ? ((C = (0, W.jsxs)(g, { className: _, children: [v, y, b] })),
      (t[45] = g),
      (t[46] = _),
      (t[47] = v),
      (t[48] = y),
      (t[49] = b),
      (t[50] = C))
    : (C = t[50]);
  let w;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, W.jsx)(O, {
        id: `chatgptConversations.sidebar.projectSettings.back`,
        defaultMessage: `Back`,
        description: `Button label for returning to the main ChatGPT project settings screen`,
      })),
      (t[51] = w))
    : (w = t[51]);
  let T;
  t[52] !== s || t[53] !== d
    ? ((T = (0, W.jsx)(_e, {
        children: (0, W.jsx)(ee, {
          expandSingleButton: !1,
          children: (0, W.jsx)(E, {
            color: `secondary`,
            disabled: s,
            onClick: d,
            type: `button`,
            children: w,
          }),
        }),
      })),
      (t[52] = s),
      (t[53] = d),
      (t[54] = T))
    : (T = t[54]);
  let D;
  return (
    t[55] !== x || t[56] !== S || t[57] !== C || t[58] !== T
      ? ((D = (0, W.jsxs)(`div`, { className: x, children: [S, C, T] })),
        (t[55] = x),
        (t[56] = S),
        (t[57] = C),
        (t[58] = T),
        (t[59] = D))
      : (D = t[59]),
    D
  );
}
function ct(e) {
  e.stopPropagation();
}
var lt, W;
function G() {
  return (G = e(() => {
    ((lt = v()), T(), D(), f(), u(), ye(), L(), (W = m()));
  }))();
}
function ut(e) {
  let t = (0, At.c)(139),
    {
      editDisabledStatus: n,
      canAddSources: r,
      canDeleteFileSources: i,
      canEditProject: a,
      canOpenAdvanced: s,
      canSave: c,
      connectorScopes: l,
      didSaveFail: u,
      emoji: d,
      fileInputRef: f,
      hasNameError: p,
      isAddingSources: m,
      isError: h,
      isLoading: g,
      isNameEmpty: _,
      isNameTooLong: v,
      isSaving: y,
      isSourceDragActive: b,
      localFolders: x,
      maxNameLength: S,
      name: C,
      nameErrorId: w,
      nameInputId: T,
      onAddSourceClick: D,
      onAdvanced: ne,
      onDeleteFileSource: re,
      onEmojiChange: ie,
      onFileInputChange: ae,
      onNameChange: oe,
      onOpenSavedResponse: se,
      onSourcesDragEnter: ce,
      onSourcesDragLeave: ue,
      onSourcesDragOver: fe,
      onSourcesDrop: me,
      onThemeChange: he,
      optimisticallyDeletedFileIds: k,
      pendingSourceFiles: ve,
      projectId: A,
      projectFiles: ye,
      projectShortUrl: be,
      projectSaves: xe,
      sourceAttachmentStatus: Se,
      theme: Ce,
    } = e,
    j = de(),
    we;
  t[0] === n
    ? (we = t[1])
    : ((we = n == null ? void 0 : Le({ action: `edit`, projectCrudStatus: n })), (t[0] = n), (t[1] = we));
  let Te = we,
    De;
  t[2] === xe ? (De = t[3]) : ((De = new Set(xe.map(dt))), (t[2] = xe), (t[3] = De));
  let M = De,
    N;
  if (t[4] !== i || t[5] !== l || t[6] !== M || t[7] !== j || t[8] !== k || t[9] !== ye || t[10] !== xe) {
    let e = Ct(ye, j);
    N = [];
    let n = 0;
    for (let e of l) N.push(vt(e, j, n++));
    for (let e of ye) {
      let t = Et(e);
      if (t != null && k.has(t)) continue;
      let r = et(e);
      if (r == null) {
        N.push(gt(e, j, n++, i));
        continue;
      }
      let a = r.save_id?.trim();
      (!a || !M.has(a)) && N.push(bt(e, r, j, n++));
    }
    for (let t of xe) N.push(yt(t, e.get(t.id), j, n++));
    (N.sort(kt),
      (t[4] = i),
      (t[5] = l),
      (t[6] = M),
      (t[7] = j),
      (t[8] = k),
      (t[9] = ye),
      (t[10] = xe),
      (t[11] = N));
  } else N = t[11];
  let Oe;
  if (t[12] !== j || t[13] !== ve || t[14] !== N) {
    let e;
    (t[16] === j ? (e = t[17]) : ((e = (e, t) => ht(e, t, j)), (t[16] = j), (t[17] = e)),
      (Oe = [...ve.map(e), ...N]),
      (t[12] = j),
      (t[13] = ve),
      (t[14] = N),
      (t[15] = Oe));
  } else Oe = t[15];
  let Ae = Oe,
    je;
  t[18] !== a || t[19] !== h || t[20] !== g || t[21] !== Ae
    ? ((je = a && !g && !h && Ae.some(K)), (t[18] = a), (t[19] = h), (t[20] = g), (t[21] = Ae), (t[22] = je))
    : (je = t[22]);
  let Me = je,
    Ne;
  t[23] !== A || t[24] !== be ? ((Ne = ft(A, be)), (t[23] = A), (t[24] = be), (t[25] = Ne)) : (Ne = t[25]);
  let Pe = Ne,
    Fe;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fe = (0, Z.jsx)(_e, {
        children: (0, Z.jsx)(te, {
          title: (0, Z.jsx)(pe, {
            asChild: !0,
            children: (0, Z.jsx)(`span`, {
              children: (0, Z.jsx)(O, {
                id: `chatgptConversations.sidebar.projectSettings.title`,
                defaultMessage: `Project settings`,
                description: `Title for ChatGPT project settings`,
              }),
            }),
          }),
        }),
      })),
      (t[26] = Fe))
    : (Fe = t[26]);
  let Ie = x == null ? `contents` : `flex min-h-0 flex-col overflow-y-auto`,
    Re;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = (0, Z.jsx)(O, {
        id: `chatgptConversations.sidebar.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (t[27] = Re))
    : (Re = t[27]);
  let P;
  t[28] === T
    ? (P = t[29])
    : ((P = (0, Z.jsx)(`label`, { className: `text-sm text-default`, htmlFor: T, children: Re })),
      (t[28] = T),
      (t[29] = P));
  let ze;
  t[30] !== a || t[31] !== d || t[32] !== y || t[33] !== C || t[34] !== ie || t[35] !== he || t[36] !== Ce
    ? ((ze = (0, Z.jsx)(Ge, {
        canEditProject: a,
        emoji: d,
        isSaving: y,
        onEmojiChange: ie,
        onThemeChange: he,
        projectName: C,
        theme: Ce,
      })),
      (t[30] = a),
      (t[31] = d),
      (t[32] = y),
      (t[33] = C),
      (t[34] = ie),
      (t[35] = he),
      (t[36] = Ce),
      (t[37] = ze))
    : (ze = t[37]);
  let Be;
  t[38] === j
    ? (Be = t[39])
    : ((Be = j.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.projectNamePlaceholder`,
        defaultMessage: `Name this project`,
        description: `Placeholder for the ChatGPT project name field`,
      })),
      (t[38] = j),
      (t[39] = Be));
  let Ve = p ? w : void 0,
    He = p ? !0 : void 0,
    Ue = !a || y,
    We;
  t[40] !== C || t[41] !== T || t[42] !== oe || t[43] !== Be || t[44] !== Ve || t[45] !== He || t[46] !== Ue
    ? ((We = (0, Z.jsx)(`input`, {
        id: T,
        autoComplete: `off`,
        autoFocus: !0,
        className: `min-w-0 flex-1 bg-transparent text-base text-default placeholder:text-codex-description focus:!outline-none`,
        value: C,
        placeholder: Be,
        "aria-describedby": Ve,
        "aria-invalid": He,
        disabled: Ue,
        onChange: oe,
      })),
      (t[40] = C),
      (t[41] = T),
      (t[42] = oe),
      (t[43] = Be),
      (t[44] = Ve),
      (t[45] = He),
      (t[46] = Ue),
      (t[47] = We))
    : (We = t[47]);
  let F;
  t[48] !== ze || t[49] !== We
    ? ((F = (0, Z.jsxs)(`div`, {
        className: `flex h-10 items-center gap-2 overflow-hidden rounded-xl border border-default bg-primary-soft pe-3 shadow-sm focus-within:border-ring`,
        children: [ze, We],
      })),
      (t[48] = ze),
      (t[49] = We),
      (t[50] = F))
    : (F = t[50]);
  let I;
  t[51] !== p || t[52] !== _ || t[53] !== v || t[54] !== S || t[55] !== w
    ? ((I = p
        ? (0, Z.jsxs)(`p`, {
            id: w,
            className: `text-sm text-danger`,
            children: [
              _
                ? (0, Z.jsx)(O, {
                    id: `chatgptConversations.sidebar.projectSettings.projectNameRequired`,
                    defaultMessage: `Project name is required`,
                    description: `Validation error when a ChatGPT project name is empty`,
                  })
                : null,
              v
                ? (0, Z.jsx)(O, {
                    id: `chatgptConversations.sidebar.projectSettings.projectNameTooLong`,
                    defaultMessage: `Project name cannot be longer than {length} characters`,
                    description: `Validation error when a ChatGPT project name is too long`,
                    values: { length: S },
                  })
                : null,
            ],
          })
        : null),
      (t[51] = p),
      (t[52] = _),
      (t[53] = v),
      (t[54] = S),
      (t[55] = w),
      (t[56] = I))
    : (I = t[56]);
  let L;
  t[57] !== F || t[58] !== I || t[59] !== P
    ? ((L = (0, Z.jsxs)(_e, { className: `gap-3`, children: [P, F, I] })),
      (t[57] = F),
      (t[58] = I),
      (t[59] = P),
      (t[60] = L))
    : (L = t[60]);
  let Ke;
  t[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (0, Z.jsx)(`h2`, {
        className: `text-base font-semibold`,
        children: (0, Z.jsx)(O, {
          id: `chatgptConversations.sidebar.projectSettings.sourcesTitle`,
          defaultMessage: `Available sources`,
          description: `Section title for ChatGPT project sources`,
        }),
      })),
      (t[61] = Ke))
    : (Ke = t[61]);
  let qe = Te == null,
    Je;
  t[62] === Te ? (Je = t[63]) : ((Je = Te ? (0, Z.jsx)(O, { ...Te }) : null), (t[62] = Te), (t[63] = Je));
  let Ye;
  t[64] === j
    ? (Ye = t[65])
    : ((Ye = j.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.addSourceAccessibleLabel`,
        defaultMessage: `Add source`,
        description: `Accessible label for adding a source to a ChatGPT project`,
      })),
      (t[64] = j),
      (t[65] = Ye));
  let Xe = !r,
    Ze,
    Qe;
  t[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, Z.jsx)(Ee, { className: `icon-sm` })),
      (Qe = (0, Z.jsx)(O, {
        id: `chatgptConversations.sidebar.projectSettings.addSource`,
        defaultMessage: `Add`,
        description: `Button label for adding a source to a ChatGPT project`,
      })),
      (t[66] = Ze),
      (t[67] = Qe))
    : ((Ze = t[66]), (Qe = t[67]));
  let R;
  t[68] !== m || t[69] !== D || t[70] !== Ye || t[71] !== Xe
    ? ((R = (0, Z.jsx)(`span`, {
        children: (0, Z.jsxs)(E, {
          "aria-label": Ye,
          color: `ghostActive`,
          disabled: Xe,
          loading: m,
          onClick: D,
          size: `toolbar`,
          type: `button`,
          children: [Ze, Qe],
        }),
      })),
      (t[68] = m),
      (t[69] = D),
      (t[70] = Ye),
      (t[71] = Xe),
      (t[72] = R))
    : (R = t[72]);
  let z;
  t[73] !== qe || t[74] !== Je || t[75] !== R
    ? ((z = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [Ke, (0, Z.jsx)(le, { disabled: qe, tooltipContent: Je, children: R })],
      })),
      (t[73] = qe),
      (t[74] = Je),
      (t[75] = R),
      (t[76] = z))
    : (z = t[76]);
  let $e;
  t[77] !== Pe || t[78] !== Me
    ? (($e = Me
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Z.jsx)(O, {
              id: `chatgptConversations.sidebar.projectSettings.nonFileSourcesBrowserHint`,
              defaultMessage: `Some sources are not editable in the ChatGPT Desktop app. Use <chatGPTWebLink>ChatGPT web</chatGPTWebLink> to make edits.`,
              description: `Helper text shown below ChatGPT project sources when some sources must be edited in ChatGPT.`,
              values: {
                chatGPTWebLink: (e) =>
                  (0, Z.jsx)(
                    `a`,
                    {
                      className: `cursor-interaction text-info underline underline-offset-2`,
                      href: Pe,
                      rel: `noreferrer`,
                      target: `_blank`,
                      onClick: (e) => {
                        ke({
                          event: e,
                          href: Pe,
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
      (t[77] = Pe),
      (t[78] = Me),
      (t[79] = $e))
    : ($e = t[79]);
  let tt = !r,
    B;
  t[80] !== f || t[81] !== ae || t[82] !== tt
    ? ((B = (0, Z.jsx)(`input`, {
        ref: f,
        disabled: tt,
        hidden: !0,
        multiple: !0,
        onChange: ae,
        tabIndex: -1,
        type: `file`,
      })),
      (t[80] = f),
      (t[81] = ae),
      (t[82] = tt),
      (t[83] = B))
    : (B = t[83]);
  let V;
  t[84] !== r ||
  t[85] !== h ||
  t[86] !== g ||
  t[87] !== D ||
  t[88] !== re ||
  t[89] !== se ||
  t[90] !== A ||
  t[91] !== Ae
    ? ((V = (0, Z.jsx)(pt, {
        canAddSources: r,
        isError: h,
        isLoading: g,
        onAddSourceClick: D,
        onDeleteFileSource: re,
        onOpenSavedResponse: se,
        projectId: A,
        rows: Ae,
      })),
      (t[84] = r),
      (t[85] = h),
      (t[86] = g),
      (t[87] = D),
      (t[88] = re),
      (t[89] = se),
      (t[90] = A),
      (t[91] = Ae),
      (t[92] = V))
    : (V = t[92]);
  let H;
  t[93] === b
    ? (H = t[94])
    : ((H = b
        ? (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0 z-10 rounded-lg border border-dashed border-ring bg-codex-drop-overlay/80`,
          })
        : null),
      (t[93] = b),
      (t[94] = H));
  let nt;
  t[95] !== ce || t[96] !== ue || t[97] !== fe || t[98] !== me || t[99] !== Se || t[100] !== V || t[101] !== H
    ? ((nt = (0, Z.jsxs)(`div`, {
        className: `relative flex min-h-0 flex-1 flex-col overflow-hidden`,
        onDragEnter: ce,
        onDragLeave: ue,
        onDragOver: fe,
        onDrop: me,
        children: [Se, V, H],
      })),
      (t[95] = ce),
      (t[96] = ue),
      (t[97] = fe),
      (t[98] = me),
      (t[99] = Se),
      (t[100] = V),
      (t[101] = H),
      (t[102] = nt))
    : (nt = t[102]);
  let rt;
  t[103] !== z || t[104] !== $e || t[105] !== B || t[106] !== nt
    ? ((rt = (0, Z.jsxs)(_e, {
        className: `min-h-0 flex-1 gap-3 overflow-hidden`,
        children: [z, $e, B, nt],
      })),
      (t[103] = z),
      (t[104] = $e),
      (t[105] = B),
      (t[106] = nt),
      (t[107] = rt))
    : (rt = t[107]);
  let it;
  t[108] === x
    ? (it = t[109])
    : ((it = x == null ? null : (0, Z.jsx)(_e, { children: x })), (t[108] = x), (t[109] = it));
  let U;
  t[110] === u
    ? (U = t[111])
    : ((U = u
        ? (0, Z.jsx)(_e, {
            children: (0, Z.jsx)(`p`, {
              className: `rounded-lg border border-text-danger/20 bg-text-danger/4 px-3 py-2 text-sm text-danger`,
              role: `alert`,
              children: (0, Z.jsx)(O, {
                id: `chatgptConversations.sidebar.projectSettings.saveError`,
                defaultMessage: `Could not save project settings`,
                description: `Error message when saving ChatGPT project settings fails`,
              }),
            }),
          })
        : null),
      (t[110] = u),
      (t[111] = U));
  let at;
  t[112] !== L || t[113] !== rt || t[114] !== it || t[115] !== U || t[116] !== Ie
    ? ((at = (0, Z.jsxs)(`div`, { className: Ie, children: [L, rt, it, U] })),
      (t[112] = L),
      (t[113] = rt),
      (t[114] = it),
      (t[115] = U),
      (t[116] = Ie),
      (t[117] = at))
    : (at = t[117]);
  let ot = !s,
    st,
    ct;
  t[118] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, Z.jsx)(o, { "aria-hidden": !1, asset: ge })),
      (ct = (0, Z.jsx)(O, {
        id: `chatgptConversations.sidebar.projectSettings.advanced`,
        defaultMessage: `Advanced`,
        description: `Button label for opening advanced ChatGPT project settings`,
      })),
      (t[118] = st),
      (t[119] = ct))
    : ((st = t[118]), (ct = t[119]));
  let lt;
  t[120] !== ne || t[121] !== ot
    ? ((lt = (0, Z.jsxs)(E, {
        className: `me-auto`,
        color: `secondary`,
        disabled: ot,
        onClick: ne,
        type: `button`,
        children: [st, ct],
      })),
      (t[120] = ne),
      (t[121] = ot),
      (t[122] = lt))
    : (lt = t[122]);
  let W = Te == null,
    G;
  t[123] === Te ? (G = t[124]) : ((G = Te ? (0, Z.jsx)(O, { ...Te }) : null), (t[123] = Te), (t[124] = G));
  let ut = !c,
    mt;
  t[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (0, Z.jsx)(O, {
        id: `chatgptConversations.sidebar.projectSettings.saveSettings`,
        defaultMessage: `Save`,
        description: `Button label for saving ChatGPT project settings`,
      })),
      (t[125] = mt))
    : (mt = t[125]);
  let q;
  t[126] !== y || t[127] !== ut
    ? ((q = (0, Z.jsx)(`span`, {
        className: `inline-flex`,
        children: (0, Z.jsx)(E, {
          className: `extension:h-token-button-composer extension:px-2 extension:py-0`,
          color: `primary`,
          disabled: ut,
          loading: y,
          size: `medium`,
          type: `submit`,
          children: mt,
        }),
      })),
      (t[126] = y),
      (t[127] = ut),
      (t[128] = q))
    : (q = t[128]);
  let J;
  t[129] !== W || t[130] !== G || t[131] !== q
    ? ((J = (0, Z.jsx)(le, { disabled: W, tooltipContent: G, children: q })),
      (t[129] = W),
      (t[130] = G),
      (t[131] = q),
      (t[132] = J))
    : (J = t[132]);
  let Y;
  t[133] !== lt || t[134] !== J
    ? ((Y = (0, Z.jsx)(_e, { children: (0, Z.jsxs)(ee, { expandSingleButton: !1, children: [lt, J] }) })),
      (t[133] = lt),
      (t[134] = J),
      (t[135] = Y))
    : (Y = t[135]);
  let X;
  return (
    t[136] !== at || t[137] !== Y
      ? ((X = (0, Z.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [Fe, at, Y] })),
        (t[136] = at),
        (t[137] = Y),
        (t[138] = X))
      : (X = t[138]),
    X
  );
}
function K(e) {
  return e.sourceKind === `connector`;
}
function dt(e) {
  return e.id;
}
function ft(e, t) {
  let n = new URL(`/g/${t || e}/project`, jt);
  return (n.searchParams.set(`tab`, `sources`), n.toString());
}
function pt(e) {
  let t = (0, At.c)(25),
    {
      canAddSources: n,
      isError: r,
      isLoading: i,
      onAddSourceClick: a,
      onDeleteFileSource: o,
      onOpenSavedResponse: s,
      projectId: c,
      rows: l,
    } = e;
  if (l.length === 0) {
    if (r) {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(mt, {
              children: (0, Z.jsx)(O, {
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
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, Z.jsx)(q, {})), (t[1] = e)) : (e = t[1]),
        e
      );
    }
    let e = !n,
      o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Z.jsx)(O, {
          id: `chatgptConversations.sidebar.projectSettings.addFiles`,
          defaultMessage: `Add files for ChatGPT to work with`,
          description: `Text in the empty ChatGPT project source upload area`,
        })),
        (t[2] = o))
      : (o = t[2]);
    let s;
    return (
      t[3] !== a || t[4] !== e
        ? ((s = (0, Z.jsx)(`button`, {
            className: `flex h-[320px] max-h-full w-full cursor-interaction items-center justify-center rounded-2xl border border-dashed border-default px-6 text-center text-base text-codex-description outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed`,
            disabled: e,
            onClick: a,
            type: `button`,
            children: o,
          })),
          (t[3] = a),
          (t[4] = e),
          (t[5] = s))
        : (s = t[5]),
      s
    );
  }
  let u;
  t[6] === i ? (u = t[7]) : ((u = i ? (0, Z.jsx)(q, {}) : null), (t[6] = i), (t[7] = u));
  let d;
  t[8] === r
    ? (d = t[9])
    : ((d = r
        ? (0, Z.jsx)(mt, {
            children: (0, Z.jsx)(O, {
              id: `chatgptConversations.sidebar.projectSettings.partialError`,
              defaultMessage: `Some sources could not load`,
              description: `Partial error state for ChatGPT project sources`,
            }),
          })
        : null),
      (t[8] = r),
      (t[9] = d));
  let f;
  if (t[10] !== o || t[11] !== s || t[12] !== c || t[13] !== l) {
    let e;
    (t[15] !== o || t[16] !== s || t[17] !== c
      ? ((e = (e) =>
          (0, Z.jsx)(J, { onDeleteFileSource: o, onOpenSavedResponse: s, projectId: c, row: e }, e.id)),
        (t[15] = o),
        (t[16] = s),
        (t[17] = c),
        (t[18] = e))
      : (e = t[18]),
      (f = l.map(e)),
      (t[10] = o),
      (t[11] = s),
      (t[12] = c),
      (t[13] = l),
      (t[14] = f));
  } else f = t[14];
  let p;
  t[19] === f
    ? (p = t[20])
    : ((p = (0, Z.jsx)(`ul`, {
        className: `vertical-scroll-fade-mask flex max-h-[320px] min-h-0 flex-col overflow-x-hidden overflow-y-auto rounded-lg border border-border/60`,
        children: f,
      })),
      (t[19] = f),
      (t[20] = p));
  let m;
  return (
    t[21] !== u || t[22] !== d || t[23] !== p
      ? ((m = (0, Z.jsxs)(`div`, { className: `flex min-h-0 flex-col gap-2`, children: [u, d, p] })),
        (t[21] = u),
        (t[22] = d),
        (t[23] = p),
        (t[24] = m))
      : (m = t[24]),
    m
  );
}
function mt(e) {
  let t = (0, At.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, {
          className: `rounded-lg border border-border/60 px-3 py-2 text-base text-codex-description`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function q() {
  let e = (0, At.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(mt, {
          children: (0, Z.jsx)(O, {
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
function J(e) {
  let t = (0, At.c)(27),
    { onDeleteFileSource: n, onOpenSavedResponse: r, projectId: i, row: a } = e,
    o = de(),
    { deleteFileId: s } = a,
    c;
  t[0] === a.title
    ? (c = t[1])
    : ((c = (0, Z.jsx)(`span`, { className: `truncate text-base text-default`, children: a.title })),
      (t[0] = a.title),
      (t[1] = c));
  let l;
  t[2] !== i || t[3] !== a.description || t[4] !== a.saveMetadata || t[5] !== a.sortTimestamp
    ? ((l =
        a.saveMetadata == null
          ? a.description
          : (0, Z.jsx)(nt, { metadata: a.saveMetadata, projectId: i, timestamp: a.sortTimestamp })),
      (t[2] = i),
      (t[3] = a.description),
      (t[4] = a.saveMetadata),
      (t[5] = a.sortTimestamp),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, Z.jsx)(`span`, { className: `truncate text-sm text-codex-description`, children: l })),
      (t[7] = l),
      (t[8] = u));
  let d;
  t[9] !== c || t[10] !== u
    ? ((d = (0, Z.jsxs)(`div`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [c, u] })),
      (t[9] = c),
      (t[10] = u),
      (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] !== r || t[13] !== i || t[14] !== a.saveMetadata || t[15] !== a.title
    ? ((f =
        a.saveMetadata == null
          ? null
          : (0, Z.jsx)(tt, { metadata: a.saveMetadata, onOpenOriginal: r, projectId: i, title: a.title })),
      (t[12] = r),
      (t[13] = i),
      (t[14] = a.saveMetadata),
      (t[15] = a.title),
      (t[16] = f))
    : (f = t[16]);
  let p;
  t[17] !== s || t[18] !== o || t[19] !== n || t[20] !== a.title
    ? ((p =
        s == null
          ? null
          : (0, Z.jsx)(E, {
              "aria-label": o.formatMessage(
                {
                  id: `chatgptConversations.sidebar.projectSettings.deleteSource`,
                  defaultMessage: `Delete {sourceTitle}`,
                  description: `Accessible label for deleting a ChatGPT project source`,
                },
                { sourceTitle: a.title },
              ),
              className: `shrink-0`,
              color: `ghost`,
              onClick: () => n(s),
              size: `icon`,
              uniform: !0,
              children: (0, Z.jsx)(Ye, { className: `icon-sm` }),
            })),
      (t[17] = s),
      (t[18] = o),
      (t[19] = n),
      (t[20] = a.title),
      (t[21] = p))
    : (p = t[21]);
  let m;
  return (
    t[22] !== a.icon || t[23] !== d || t[24] !== f || t[25] !== p
      ? ((m = (0, Z.jsxs)(`li`, {
          className: `relative flex min-w-0 items-center gap-3 border-b border-border/60 px-3 py-3 last:border-b-0`,
          children: [a.icon, d, f, p],
        })),
        (t[22] = a.icon),
        (t[23] = d),
        (t[24] = f),
        (t[25] = p),
        (t[26] = m))
      : (m = t[26]),
    m
  );
}
function Y(e) {
  return e.formatMessage({
    id: `chatgptConversations.sidebar.projectSettings.fileSourceFallback`,
    defaultMessage: `File source`,
    description: `Fallback label for a ChatGPT project file source`,
  });
}
function X(e) {
  return e.formatMessage({
    id: `chatgptConversations.sidebar.projectSettings.saveSource`,
    defaultMessage: `Project save`,
    description: `Source type label for a ChatGPT project save`,
  });
}
function ht(e, n, r) {
  return {
    description: r.formatMessage(R.file),
    icon: (0, Z.jsx)(`span`, {
      "aria-label": r.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.uploadingFile`,
        defaultMessage: `Uploading file…`,
        description: `Accessible status label for a pending ChatGPT project file upload`,
      }),
      role: `status`,
      children: (0, Z.jsx)(t, { className: Q }),
    }),
    id: `pending-file:${e.name}:${e.size}:${e.lastModified}:${n}`,
    sourceKind: `file`,
    sortIndex: n,
    sortTimestamp: 2 ** 53 - 1,
    title: e.name.trim() || Y(r),
  };
}
function gt(e, t, n, r) {
  let i = Et(e),
    a = Tt(e, t);
  return {
    deleteFileId: r && !_t(e) ? (i ?? void 0) : void 0,
    description: t.formatMessage(R.file),
    icon: (0, Z.jsx)(ae, { className: Q }),
    id: `file:${i ?? a}`,
    sourceKind: `file`,
    sortIndex: n,
    sortTimestamp: Dt(e),
    title: a,
  };
}
function _t(e) {
  return `metadata` in e && Mt.safeParse(e.metadata).success;
}
function vt(e, t, n) {
  let r = t.formatMessage(R[e.scope_type]),
    i = e.scope_type === `slack_channel` ? void 0 : St(e, t);
  return {
    description:
      i == null
        ? r
        : (0, Z.jsx)(O, {
            id: `chatgptConversations.sidebar.projectSettings.connectorSourceWithStatus`,
            defaultMessage: `{sourceType} - {status}`,
            description: `Source type and sync status for a ChatGPT project connector source`,
            values: { sourceType: r, status: i },
          }),
    icon: xt(e),
    id: `connector:${e.scope_id}`,
    sourceKind: `connector`,
    sortIndex: n,
    sortTimestamp: z(e.created_at),
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
function yt(e, t, n, r) {
  let i = Ot(e),
    a = {
      ...t?.metadata,
      save_id: e.id,
      conversation_id: e.conversation_id,
      message_id: e.message_id,
      creator_id: e.owner_id,
      title: e.title,
    };
  return {
    description: X(n),
    icon: (0, Z.jsx)(P, { className: Q }),
    id: `save:${e.id}`,
    sourceKind: `save`,
    sortIndex: r,
    sortTimestamp: i || t?.sortTimestamp || 0,
    saveMetadata: a,
    title:
      wt(a, n) ??
      t?.title ??
      n.formatMessage({
        id: `chatgptConversations.sidebar.projectSettings.saveSourceFallback`,
        defaultMessage: `Saved response`,
        description: `Fallback row title for a ChatGPT project save when no generated title is available.`,
      }),
  };
}
function bt(e, t, n, r) {
  let i = t.save_id?.trim();
  return {
    description: X(n),
    icon: (0, Z.jsx)(P, { className: Q }),
    id: `save-file:${i || e.file_id || e.id}`,
    sourceKind: `save`,
    sortIndex: r,
    sortTimestamp: Dt(e),
    saveMetadata: t,
    title: wt(t, n) ?? Tt(e, n),
  };
}
function xt(e) {
  return e.connector_type === `slack`
    ? (0, Z.jsx)(b, { className: `icon-sm shrink-0` })
    : e.connector_type === `linear`
      ? (0, Z.jsx)(C, { className: Q })
      : e.connector_type === `google_drive`
        ? (0, Z.jsx)(p, { className: Q })
        : (0, Z.jsx)(Se, { className: Q });
}
function St(e, t) {
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
function Ct(e, t) {
  let n = new Map();
  for (let r of e) {
    let e = et(r);
    if (e == null) continue;
    let i = e.save_id?.trim();
    i && n.set(i, { metadata: e, sortTimestamp: Dt(r), title: Tt(r, t) });
  }
  return n;
}
function wt(e, t) {
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
function Tt(e, t) {
  return `name` in e && typeof e.name == `string` && e.name.trim()
    ? e.name.trim()
    : (e.file_id ?? e.id ?? Y(t));
}
function Et(e) {
  return e.file_id ?? e.id ?? null;
}
function Dt(e) {
  let t = `created_at` in e ? e.created_at : void 0,
    n = `last_modified` in e ? e.last_modified : void 0;
  return z(t ?? n);
}
function Ot(e) {
  return z(e.created_at ?? e.create_time ?? e.update_time);
}
function kt(e, t) {
  return e.sortTimestamp === t.sortTimestamp ? e.sortIndex - t.sortIndex : t.sortTimestamp - e.sortTimestamp;
}
var At, Z, jt, Q, Mt;
function Nt() {
  return (Nt = e(() => {
    ((At = v()),
      i(),
      T(),
      l(),
      D(),
      f(),
      u(),
      Ne(),
      _(),
      ie(),
      he(),
      Me(),
      re(),
      fe(),
      c(),
      Ke(),
      De(),
      k(),
      Je(),
      F(),
      qe(),
      $e(),
      H(),
      B(),
      (Z = m()),
      (jt = `https://chatgpt.com`),
      (Q = `icon-sm shrink-0 text-codex-description`),
      (Mt = ce({ project_save: ce({}).loose() }).loose()));
  }))();
}
function Pt(e) {
  let t = (0, Rt.c)(123),
    { onOpenChange: r, project: i, projectCrudStatus: a } = e,
    o = n(y),
    s = oe(it),
    c = de(),
    l = x(),
    u = (0, $.useRef)(null),
    f = Te(),
    p = (0, $.useId)(),
    m = (0, $.useId)(),
    ee = (0, $.useId)(),
    [h, _] = (0, $.useState)(`main`),
    [v, b] = (0, $.useState)(!1),
    [te, S] = (0, $.useState)(``),
    C = i.gizmo.id,
    T = i.gizmo.display.emoji ?? null,
    E = i.gizmo.display.name,
    D = i.gizmo.display.theme ?? null,
    ne = i.gizmo.instructions ?? null,
    re = `memory_scope` in i.gizmo ? i.gizmo.memory_scope : void 0,
    ie = h === `advanced` && (ne == null || re == null),
    ae,
    se;
  t[0] === C
    ? ((ae = t[1]), (se = t[2]))
    : ((ae = [`chatgpt-project-details`, C]),
      (se = () =>
        Re.safeGet(`/gizmos/{gizmo_id_or_short_url}`, {
          parameters: { path: { gizmo_id_or_short_url: C } },
        })),
      (t[0] = C),
      (t[1] = ae),
      (t[2] = se));
  let ce;
  t[3] !== ie || t[4] !== ae || t[5] !== se
    ? ((ce = { queryKey: ae, queryFn: se, enabled: ie, staleTime: ve.ONE_MINUTE }),
      (t[3] = ie),
      (t[4] = ae),
      (t[5] = se),
      (t[6] = ce))
    : (ce = t[6]);
  let le = g(ce),
    fe = ne ?? le.data?.gizmo.instructions ?? ``,
    pe;
  t[7] === fe ? (pe = t[8]) : ((pe = fe.slice(0, Vt)), (t[7] = fe), (t[8] = pe));
  let he = pe,
    [O, ge] = (0, $.useState)(T),
    [k, _e] = (0, $.useState)(E),
    [A, ye] = (0, $.useState)(D),
    [be, xe] = (0, $.useState)(null),
    [Se, j] = (0, $.useState)(!1),
    [Ee, De] = (0, $.useState)(0),
    M = Se || Ee > 0,
    [N, Oe] = (0, $.useState)(!1),
    ke;
  t[9] === k ? (ke = t[10]) : ((ke = k.trim()), (t[9] = k), (t[10] = ke));
  let Me = ke,
    Ne = Me.length === 0,
    Le = Me.length > 50,
    P = Ne || Le,
    ze = i.gizmo.current_user_permission?.can_write,
    He;
  t[11] !== a || t[12] !== ze ? ((He = je(ze, a)), (t[11] = a), (t[12] = ze), (t[13] = He)) : (He = t[13]);
  let F = He,
    I = F,
    L;
  t[14] === E ? (L = t[15]) : ((L = E.trim()), (t[14] = E), (t[15] = L));
  let Ge = Me !== L,
    Ke = O !== T || A !== D,
    qe = be ?? he,
    Je = qe !== he,
    Ye = ne == null && le.isPending,
    Qe = ne == null && le.isError,
    R = re ?? (le.data != null && `memory_scope` in le.data.gizmo ? le.data.gizmo.memory_scope : void 0),
    z,
    $e;
  t[16] !== R || t[17] !== i.gizmo.gizmo_snorlax_type
    ? ((z = R == null ? null : Pe(R)),
      ($e = z == null ? null : Ve(z, i.gizmo.gizmo_snorlax_type)),
      (t[16] = R),
      (t[17] = i.gizmo.gizmo_snorlax_type),
      (t[18] = z),
      (t[19] = $e))
    : ((z = t[18]), ($e = t[19]));
  let et = $e,
    tt;
  t[20] === i ? (tt = t[21]) : ((tt = Lt(i)), (t[20] = i), (t[21] = tt));
  let B = tt,
    V,
    H;
  t[22] === C
    ? ((V = t[23]), (H = t[24]))
    : ((V = [`chatgpt-project-connector-scopes`, C]),
      (H = () =>
        Re.safeGet(`/projects/{project_id}/connector_scopes`, {
          parameters: { path: { project_id: C }, query: { cursor: null, limit: Bt } },
        })),
      (t[22] = C),
      (t[23] = V),
      (t[24] = H));
  let nt;
  t[25] !== B || t[26] !== V || t[27] !== H
    ? ((nt = { queryKey: V, queryFn: H, enabled: B, staleTime: ve.ONE_MINUTE }),
      (t[25] = B),
      (t[26] = V),
      (t[27] = H),
      (t[28] = nt))
    : (nt = t[28]);
  let U = g(nt),
    { data: at, isLoading: ct, isError: lt } = ue(Xe, C),
    W = oe(Ze),
    G;
  t[29] === C ? (G = t[30]) : ((G = { projectId: C }), (t[29] = C), (t[30] = G));
  let K = Be(G),
    dt;
  t[31] === C ? (dt = t[32]) : ((dt = { projectId: C }), (t[31] = C), (t[32] = dt));
  let ft = Ue(dt),
    pt = (B && U.isPending) || ct || W === `loading`,
    mt = (B && U.isError) || lt || W === `unavailable`,
    q = I && !K.isPending,
    J = F && !M && !P && (Ge || Ke || Je),
    Y;
  t[33] !== f || t[34] !== o
    ? ((Y = (e, t, n) => {
        let r = Ce(e)?.trim() || n;
        (o
          .get(me)
          .danger(t, {
            errorAnalytics: { toastId: `chatgptProjectSettingsDialog.showProjectSourceError` },
            description: r,
          }),
          f() && S(`${t}: ${r}`));
      }),
      (t[33] = f),
      (t[34] = o),
      (t[35] = Y))
    : (Y = t[35]);
  let X = Y,
    ht;
  t[36] !== K || t[37] !== I || t[38] !== c || t[39] !== X
    ? ((ht = (e) => {
        e.length !== 0 &&
          I &&
          !K.isPending &&
          (S(``),
          K.mutateAsync(e).catch((e) => {
            let { title: t, description: n } = we(e, c);
            X(e, t, n);
          }));
      }),
      (t[36] = K),
      (t[37] = I),
      (t[38] = c),
      (t[39] = X),
      (t[40] = ht))
    : (ht = t[40]);
  let gt = ht,
    _t;
  t[41] !== ft || t[42] !== c || t[43] !== X
    ? ((_t = (e) => {
        (S(``),
          ft.mutateAsync(e).catch((e) => {
            X(
              e,
              c.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.deleteSourceError`,
                defaultMessage: `Could not delete source`,
                description: `Error state for deleting a source from a ChatGPT project`,
              }),
              c.formatMessage({
                id: `chatgptConversations.sidebar.projectSettings.deleteSourceErrorDescription`,
                defaultMessage: `Try again`,
                description: `Fallback toast description when deleting a source from a ChatGPT project fails without a user-facing server message`,
              }),
            );
          }));
      }),
      (t[41] = ft),
      (t[42] = c),
      (t[43] = X),
      (t[44] = _t))
    : (_t = t[44]);
  let vt = _t,
    yt;
  t[45] === gt
    ? (yt = t[46])
    : ((yt = (e) => {
        let t = Array.from(e.currentTarget.files ?? []);
        ((e.currentTarget.value = ``), gt(t));
      }),
      (t[45] = gt),
      (t[46] = yt));
  let bt = yt,
    xt;
  t[47] === q
    ? (xt = t[48])
    : ((xt = (e) => {
        Ae(e.dataTransfer) && (It(e, q), q && b(!0));
      }),
      (t[47] = q),
      (t[48] = xt));
  let St = xt,
    Ct;
  t[49] === q
    ? (Ct = t[50])
    : ((Ct = (e) => {
        Ae(e.dataTransfer) && (It(e, q), q && b(!0));
      }),
      (t[49] = q),
      (t[50] = Ct));
  let wt = Ct,
    Tt;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (e) => {
        (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) || b(!1);
      }),
      (t[51] = Tt))
    : (Tt = t[51]);
  let Et = Tt,
    Dt;
  t[52] !== gt || t[53] !== q
    ? ((Dt = (e) => {
        Ae(e.dataTransfer) && (It(e, q), b(!1), q && gt(Fe(e.dataTransfer)));
      }),
      (t[52] = gt),
      (t[53] = q),
      (t[54] = Dt))
    : (Dt = t[54]);
  let Ot = Dt,
    kt;
  t[55] !== O ||
  t[56] !== qe ||
  t[57] !== Je ||
  t[58] !== k ||
  t[59] !== r ||
  t[60] !== i ||
  t[61] !== l ||
  t[62] !== o ||
  t[63] !== A
    ? ((kt = async () => {
        (Oe(!1), j(!0));
        try {
          (await Ie({
            scope: o,
            emoji: O,
            instructions: Je ? qe : null,
            name: k,
            project: i,
            queryClient: l,
            theme: A,
          }),
            j(!1),
            r(!1));
        } catch {
          (Oe(!0), j(!1));
        }
      }),
      (t[55] = O),
      (t[56] = qe),
      (t[57] = Je),
      (t[58] = k),
      (t[59] = r),
      (t[60] = i),
      (t[61] = l),
      (t[62] = o),
      (t[63] = A),
      (t[64] = kt))
    : (kt = t[64]);
  let At = kt,
    Z;
  t[65] !== J || t[66] !== At || t[67] !== h
    ? ((Z = (e) => {
        (e.preventDefault(), h !== `advanced` && J && At());
      }),
      (t[65] = J),
      (t[66] = At),
      (t[67] = h),
      (t[68] = Z))
    : (Z = t[68]);
  let jt = Z,
    Q;
  t[69] !== M || t[70] !== r
    ? ((Q = (e) => {
        (e || !M) && r(e);
      }),
      (t[69] = M),
      (t[70] = r),
      (t[71] = Q))
    : (Q = t[71]);
  let Mt = Q,
    Nt;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nt = { "aria-describedby": void 0 }), (t[72] = Nt))
    : (Nt = t[72]);
  let Pt;
  t[73] === te
    ? (Pt = t[74])
    : ((Pt = (0, zt.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `assertive`,
        className: `sr-only`,
        children: te,
      })),
      (t[73] = te),
      (t[74] = Pt));
  let Ht;
  t[75] !== K ||
  t[76] !== I ||
  t[77] !== F ||
  t[78] !== B ||
  t[79] !== J ||
  t[80] !== U ||
  t[81] !== vt ||
  t[82] !== ft.optimisticallyDeletedFileIds ||
  t[83] !== Qe ||
  t[84] !== N ||
  t[85] !== O ||
  t[86] !== bt ||
  t[87] !== St ||
  t[88] !== wt ||
  t[89] !== Ot ||
  t[90] !== P ||
  t[91] !== qe ||
  t[92] !== ee ||
  t[93] !== M ||
  t[94] !== mt ||
  t[95] !== pt ||
  t[96] !== Ye ||
  t[97] !== Ne ||
  t[98] !== Le ||
  t[99] !== Se ||
  t[100] !== v ||
  t[101] !== et ||
  t[102] !== s ||
  t[103] !== z ||
  t[104] !== k ||
  t[105] !== m ||
  t[106] !== p ||
  t[107] !== r ||
  t[108] !== E ||
  t[109] !== i ||
  t[110] !== a ||
  t[111] !== C ||
  t[112] !== at ||
  t[113] !== h ||
  t[114] !== A
    ? ((Ht =
        h === `advanced`
          ? (0, zt.jsx)(st, {
              canEditProject: F,
              didLoadInstructionsFail: Qe,
              instructions: qe,
              instructionsInputId: ee,
              isLoadingInstructions: Ye,
              isSaving: M,
              libraryAccess: et,
              memoryAccess: z,
              maxInstructionsLength: Vt,
              onBack: () => {
                _(`main`);
              },
              onInstructionsChange: (e) => {
                (xe(e), Oe(!1));
              },
            })
          : (0, zt.jsx)(ut, {
              canAddSources: I,
              canDeleteFileSources: I,
              canEditProject: F,
              canOpenAdvanced: !P && !M,
              canSave: J,
              connectorScopes: B ? (U.data?.items ?? []) : [],
              didSaveFail: N,
              editDisabledStatus: F ? void 0 : a,
              emoji: O,
              fileInputRef: u,
              hasNameError: P,
              isAddingSources: K.isPending,
              isError: mt,
              isLoading: pt,
              isNameEmpty: Ne,
              isNameTooLong: Le,
              isSaving: M,
              isSourceDragActive: v,
              localFolders:
                s && F && We(i)
                  ? (0, zt.jsx)(ot, {
                      disabled: Se,
                      onSavingChange: (e) => {
                        De((t) => t + (e ? 1 : -1));
                      },
                      projectId: C,
                      projectName: E,
                    })
                  : null,
              maxNameLength: 50,
              name: k,
              nameErrorId: m,
              nameInputId: p,
              optimisticallyDeletedFileIds: ft.optimisticallyDeletedFileIds,
              pendingSourceFiles: K.pendingUploads.flatMap(Ft),
              projectId: C,
              projectFiles: i.files ?? [],
              projectShortUrl: i.gizmo.short_url,
              projectSaves: at ?? [],
              sourceAttachmentStatus: (0, zt.jsx)(rt, {
                attachments: K.attachments,
                canRetry: I,
                onRetry: (e) => {
                  I && K.retryAttachment(e);
                },
              }),
              theme: A,
              onAddSourceClick: () => u.current?.click(),
              onAdvanced: () => {
                _(`advanced`);
              },
              onDeleteFileSource: vt,
              onEmojiChange: (e) => {
                (ge(e), Oe(!1));
              },
              onFileInputChange: bt,
              onNameChange: (e) => {
                (_e(e.target.value), Oe(!1));
              },
              onOpenSavedResponse: () => r(!1),
              onSourcesDragEnter: St,
              onSourcesDragLeave: Et,
              onSourcesDragOver: wt,
              onSourcesDrop: Ot,
              onThemeChange: (e) => {
                (ye(e), Oe(!1));
              },
            })),
      (t[75] = K),
      (t[76] = I),
      (t[77] = F),
      (t[78] = B),
      (t[79] = J),
      (t[80] = U),
      (t[81] = vt),
      (t[82] = ft.optimisticallyDeletedFileIds),
      (t[83] = Qe),
      (t[84] = N),
      (t[85] = O),
      (t[86] = bt),
      (t[87] = St),
      (t[88] = wt),
      (t[89] = Ot),
      (t[90] = P),
      (t[91] = qe),
      (t[92] = ee),
      (t[93] = M),
      (t[94] = mt),
      (t[95] = pt),
      (t[96] = Ye),
      (t[97] = Ne),
      (t[98] = Le),
      (t[99] = Se),
      (t[100] = v),
      (t[101] = et),
      (t[102] = s),
      (t[103] = z),
      (t[104] = k),
      (t[105] = m),
      (t[106] = p),
      (t[107] = r),
      (t[108] = E),
      (t[109] = i),
      (t[110] = a),
      (t[111] = C),
      (t[112] = at),
      (t[113] = h),
      (t[114] = A),
      (t[115] = Ht))
    : (Ht = t[115]);
  let Ut;
  t[116] !== jt || t[117] !== Pt || t[118] !== Ht
    ? ((Ut = (0, zt.jsxs)(d, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 gap-4 overflow-hidden`,
        onSubmit: jt,
        children: [Pt, Ht],
      })),
      (t[116] = jt),
      (t[117] = Pt),
      (t[118] = Ht),
      (t[119] = Ut))
    : (Ut = t[119]);
  let Wt;
  return (
    t[120] !== Mt || t[121] !== Ut
      ? ((Wt = (0, zt.jsx)(w, {
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
    ((Rt = v()),
      se(),
      h(),
      ne(),
      ($ = s()),
      T(),
      I(),
      be(),
      f(),
      u(),
      S(),
      r(),
      a(),
      ze(),
      j(),
      xe(),
      He(),
      N(),
      A(),
      G(),
      Nt(),
      V(),
      Qe(),
      at(),
      U(),
      (zt = m()),
      (Bt = 100),
      (Vt = 8e3));
  }))();
}
Ht();
export { Pt as ChatGptProjectSettingsDialog };
//# sourceMappingURL=chatgpt-project-settings-dialog-cee66ddcfb5d.js.map
