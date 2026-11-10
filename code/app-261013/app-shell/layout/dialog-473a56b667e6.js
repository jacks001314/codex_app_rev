import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  AO as r,
  CO as i,
  Cat as a,
  Cot as o,
  Ext as s,
  FV as c,
  IDt as l,
  Irt as u,
  Ixt as d,
  Pxt as f,
  TJ as p,
  TO as m,
  Tat as h,
  VDt as g,
  VH as _,
  Vxt as ee,
  Xot as v,
  Yot as y,
  _O as te,
  _xt as b,
  cz as x,
  fO as S,
  hot as C,
  jDt as w,
  lot as T,
  mO as E,
  mat as ne,
  nst as re,
  oO as ie,
  pat as D,
  sz as ae,
  t3 as oe,
  tU as se,
  tst as O,
  vO as k,
  vxt as ce,
  vzt as le,
  wot as ue,
  xMt as A,
  yzt as de,
} from "./app-shared-bbfeca5e5737.js";
import {
  CLn as fe,
  EIn as pe,
  ELn as j,
  FFr as me,
  FTr as he,
  GMr as ge,
  GU as _e,
  HTr as ve,
  ITr as M,
  JW as ye,
  KNn as be,
  KU as N,
  MAt as xe,
  MLn as Se,
  NAt as Ce,
  NDr as we,
  NZn as Te,
  OLn as Ee,
  QDr as De,
  QP as Oe,
  QW as P,
  SIn as ke,
  XDr as Ae,
  XNn as je,
  XW as Me,
  YW as Ne,
  _In as Pe,
  bMr as Fe,
  c$n as F,
  eDr as Ie,
  fMr as Le,
  fUn as I,
  jDr as Re,
  jLn as ze,
  mlt as Be,
  nDr as Ve,
  ocr as He,
  oon as Ue,
  plt as We,
  pvn as Ge,
  s$n as Ke,
  son as qe,
  tF as Je,
  tNr as Ye,
  uUn as L,
  v7t as Xe,
  vIn as Ze,
  vMr as Qe,
  vvn as $e,
  wIn as R,
  xLn as et,
  y7t as z,
  yjn as tt,
  zFr as nt,
  zLn as rt,
} from "./app-initial-5851df3f6cb1.js";
import { i as it, n as B, r as V, t as at } from "./local-folders-section-cc0b29461561.js";
function ot(e) {
  "use forget";
  let t = (0, H.c)(30),
    { isSharedProject: n, memoryScope: r } = e,
    i = (0, U.useId)(),
    a = (0, U.useId)(),
    o = je();
  if (!ee(I)) return null;
  let s = !n && r !== `project_v2`,
    u;
  if (n) {
    let e;
    (t[0] === o
      ? (e = t[1])
      : ((e = o
          ? (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessSharedDescription.spaceFiles`,
              defaultMessage: `Shared projects cannot access files in your Space`,
              description: `Explanation below the disabled Space access status in ChatGPT project settings when the project is shared with other people. Files saved in the user's Space are unavailable to the shared project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessSharedDescription`,
              defaultMessage: `Shared projects cannot access your file Library`,
              description: `Explanation below the disabled Library access status in ChatGPT project settings when the project is shared with other people`,
            })),
        (t[0] = o),
        (t[1] = e)),
      (u = e));
  } else if (r === `project_v2`) {
    let e;
    (t[2] === o
      ? (e = t[3])
      : ((e = o
          ? (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessProjectOnlyDescription.space`,
              defaultMessage: `Project-only projects cannot access your file Space`,
              description: `Explanation below the disabled Space access status in ChatGPT project settings when project-only memory is selected, including unsaved changes. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessProjectOnlyDescription`,
              defaultMessage: `Project-only projects cannot access your file Library`,
              description: `Explanation below the disabled Library access status in ChatGPT project settings when project-only memory is selected, including unsaved changes`,
            })),
        (t[2] = o),
        (t[3] = e)),
      (u = e));
  } else {
    let e;
    (t[4] === o
      ? (e = t[5])
      : ((e = o
          ? (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabledDescription.space`,
              defaultMessage: `This project can access your file Space while it remains private. Sharing this project disables Space access.`,
              description: `Explanation below the enabled Space access status in ChatGPT project settings, warning that sharing the project will disable access to the user's file space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabledDescription`,
              defaultMessage: `This project can access your file Library while it remains private. Sharing this project disables Library access.`,
              description: `Explanation below the enabled Library access status in ChatGPT project settings, warning that sharing the project will disable access to the user's file library`,
            })),
        (t[4] = o),
        (t[5] = e)),
      (u = e));
  }
  let d;
  t[6] === o
    ? (d = t[7])
    : ((d = o
        ? (0, W.jsx)(l, {
            id: `chatgptConversations.projectSettings.libraryAccessLabel.space`,
            defaultMessage: `Space access`,
            description: `Label for the read-only Space access section below Memory in ChatGPT project settings. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : (0, W.jsx)(l, {
            id: `chatgptConversations.projectSettings.libraryAccessLabel`,
            defaultMessage: `Library access`,
            description: `Label for the read-only Library access section below Memory in ChatGPT project settings`,
          })),
      (t[6] = o),
      (t[7] = d));
  let f;
  t[8] !== i || t[9] !== d
    ? ((f = (0, W.jsx)(`span`, { id: i, className: `text-sm text-default`, children: d })),
      (t[8] = i),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === s
    ? (p = t[12])
    : ((p = (0, W.jsx)(`span`, {
        children: s
          ? (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabled`,
              defaultMessage: `Enabled`,
              description: `Read-only status in ChatGPT project settings indicating that a private project with default memory can access the user's file library`,
            })
          : (0, W.jsx)(l, {
              id: `chatgptConversations.projectSettings.libraryAccessDisabled`,
              defaultMessage: `Disabled`,
              description: `Read-only status in ChatGPT project settings indicating that a shared or project-only project cannot access the user's file library`,
            }),
      })),
      (t[11] = s),
      (t[12] = p));
  let m;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = (0, W.jsx)(c, {})), (t[13] = m)) : (m = t[13]);
  let h;
  t[14] === p
    ? (h = t[15])
    : ((h = (0, W.jsxs)(`div`, { className: `flex items-center justify-between`, children: [p, m] })),
      (t[14] = p),
      (t[15] = h));
  let g;
  t[16] !== a || t[17] !== i || t[18] !== h
    ? ((g = (0, W.jsx)(`div`, {
        className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
        "aria-describedby": a,
        "aria-labelledby": i,
        children: h,
      })),
      (t[16] = a),
      (t[17] = i),
      (t[18] = h),
      (t[19] = g))
    : (g = t[19]);
  let _;
  t[20] !== u || t[21] !== a
    ? ((_ = (0, W.jsx)(`div`, { id: a, className: `mt-1 text-xs text-codex-description`, children: u })),
      (t[20] = u),
      (t[21] = a),
      (t[22] = _))
    : (_ = t[22]);
  let v;
  t[23] !== g || t[24] !== _
    ? ((v = (0, W.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [g, _] })),
      (t[23] = g),
      (t[24] = _),
      (t[25] = v))
    : (v = t[25]);
  let y;
  return (
    t[26] !== i || t[27] !== f || t[28] !== v
      ? ((y = (0, W.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": i,
          children: [f, v],
        })),
        (t[26] = i),
        (t[27] = f),
        (t[28] = v),
        (t[29] = y))
      : (y = t[29]),
    y
  );
}
var H, U, W;
function st() {
  return (st = e(() => {
    ((H = le()), f(), (U = de()), w(), p(), be(), L(), (W = A()));
  }))();
}
function ct(e) {
  "use forget";
  let t = (0, lt.c)(37),
    {
      canEdit: n,
      isSaving: r,
      memoryScope: a,
      onMemoryScopeChange: o,
      onRetryWorkConversationCheck: s,
      projectOnlyMemoryStatus: c,
      showSharedMemoryImmutableMessage: u,
    } = e,
    d = (0, ut.useId)(),
    f = (0, ut.useId)(),
    p = ee(Qe),
    h = ee(Fe),
    g = p || h,
    _;
  t[0] === g
    ? (_ = t[1])
    : ((_ = g
        ? (0, G.jsx)(l, { ...K.projectOnlyDescriptionWithWork })
        : (0, G.jsx)(l, { ...K.projectOnlyDescription })),
      (t[0] = g),
      (t[1] = _));
  let v = _,
    y;
  t[2] === a
    ? (y = t[3])
    : ((y = a === `project_v2` ? (0, G.jsx)(l, { ...K.projectOnly }) : (0, G.jsx)(l, { ...K.default })),
      (t[2] = a),
      (t[3] = y));
  let te = y,
    b = v;
  if (c === `has-work-chats`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, { ...K.workConversationWarning })), (t[4] = e))
      : (e = t[4]),
      (b = e));
  } else if (c === `checking`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, {
          id: `chatgptConversations.projectSettings.checkingWorkChats`,
          defaultMessage: `Checking project chats…`,
          description: `Temporary status below the disabled Project-only memory option while checking whether a ChatGPT project contains Work chats`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (b = e));
  } else if (c === `failed`) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, { ...K.workConversationCheckFailed })), (t[6] = e))
      : (e = t[6]),
      (b = e));
  }
  let x;
  if (u) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, { ...K.sharedImmutable })), (t[7] = e))
      : (e = t[7]),
      (x = e));
  } else if (n && c === `failed`) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(l, { ...K.workConversationCheckFailed })), (t[8] = e))
      : (e = t[8]),
      (x = e));
  } else if (a === `project_v2`) {
    if (n) x = v;
    else if (g) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(l, { ...K.projectOnlyImmutableWithWork })), (t[9] = e))
        : (e = t[9]),
        (x = e));
    } else {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, G.jsx)(l, { ...K.projectOnlyImmutable })), (t[10] = e))
        : (e = t[10]),
        (x = e));
    }
  } else {
    let e;
    (t[11] === n
      ? (e = t[12])
      : ((e = n ? (0, G.jsx)(l, { ...K.defaultDescription }) : (0, G.jsx)(l, { ...K.defaultImmutable })),
        (t[11] = n),
        (t[12] = e)),
      (x = e));
  }
  let S;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, G.jsx)(l, {
        id: `chatgptConversations.projectSettings.memoryLabel`,
        defaultMessage: `Memory`,
        description: `Label for the memory scope section in ChatGPT project settings`,
      })),
      (t[13] = S))
    : (S = t[13]);
  let C;
  t[14] === d
    ? (C = t[15])
    : ((C = (0, G.jsx)(`span`, { id: d, className: `text-sm text-default`, children: S })),
      (t[14] = d),
      (t[15] = C));
  let w;
  t[16] !== n ||
  t[17] !== f ||
  t[18] !== r ||
  t[19] !== d ||
  t[20] !== te ||
  t[21] !== a ||
  t[22] !== o ||
  t[23] !== s ||
  t[24] !== c ||
  t[25] !== b
    ? ((w = n
        ? (0, G.jsx)(i, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: r,
            onOpenChange: (e) => {
              e && c === `failed` && s();
            },
            side: `bottom`,
            triggerButton: (0, G.jsx)(Oe, {
              className: `w-full`,
              "aria-describedby": f,
              "aria-labelledby": d,
              color: `outlineSurface`,
              disabled: r,
              type: `button`,
              children: te,
            }),
            children: (0, G.jsxs)(m.RadioGroup, {
              "aria-labelledby": d,
              value: a,
              onValueChange: (e) => {
                r || ((e === `global` || (e === `project_v2` && c === `allowed`)) && o(e));
              },
              children: [
                (0, G.jsx)(m.RadioItem, {
                  disabled: r,
                  value: `global`,
                  SubText: (0, G.jsx)(l, { ...K.defaultDescription }),
                  children: (0, G.jsx)(l, { ...K.default }),
                }),
                (0, G.jsx)(m.RadioItem, {
                  disabled: r || c !== `allowed`,
                  value: `project_v2`,
                  SubText: b,
                  children: (0, G.jsx)(l, { ...K.projectOnly }),
                }),
              ],
            }),
          })
        : (0, G.jsx)(`div`, {
            className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
            children: te,
          })),
      (t[16] = n),
      (t[17] = f),
      (t[18] = r),
      (t[19] = d),
      (t[20] = te),
      (t[21] = a),
      (t[22] = o),
      (t[23] = s),
      (t[24] = c),
      (t[25] = b),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== x || t[28] !== f
    ? ((T = (0, G.jsx)(`div`, { id: f, className: `mt-1 text-xs text-codex-description`, children: x })),
      (t[27] = x),
      (t[28] = f),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== w || t[31] !== T
    ? ((E = (0, G.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [w, T] })),
      (t[30] = w),
      (t[31] = T),
      (t[32] = E))
    : (E = t[32]);
  let ne;
  return (
    t[33] !== d || t[34] !== C || t[35] !== E
      ? ((ne = (0, G.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": d,
          children: [C, E],
        })),
        (t[33] = d),
        (t[34] = C),
        (t[35] = E),
        (t[36] = ne))
      : (ne = t[36]),
    ne
  );
}
var lt, ut, G, K;
function dt() {
  return (dt = e(() => {
    ((lt = le()),
      f(),
      (ut = de()),
      w(),
      Le(),
      r(),
      Je(),
      (G = A()),
      (K = n({
        default: {
          id: `chatgptConversations.projectSettings.memoryDefault`,
          defaultMessage: `Default`,
          description: `Memory scope option in ChatGPT project settings that allows memories to be shared with chats outside the project`,
        },
        projectOnly: {
          id: `chatgptConversations.projectSettings.memoryProjectOnly`,
          defaultMessage: `Project-only`,
          description: `Memory scope option in ChatGPT project settings that isolates memory to this project`,
        },
        defaultDescription: {
          id: `chatgptConversations.projectSettings.memoryDefaultDescription`,
          defaultMessage: `This project can access memory from outside chats, and vice versa`,
          description: `Help text for the editable Default memory option in ChatGPT project settings, explaining that memory can be shared with other chats`,
        },
        projectOnlyDescription: {
          id: `chatgptConversations.projectSettings.memoryProjectOnlyDescription`,
          defaultMessage: `This project can only access its own memory. Its memory is hidden from outside chats.`,
          description: `Help text for the editable Project-only memory option in ChatGPT project settings, explaining that memory stays within this project`,
        },
        projectOnlyDescriptionWithWork: {
          id: `chatgptConversations.projectSettings.memoryProjectOnlyDescriptionWithWork`,
          defaultMessage: `This project can only access its own memory. Its memory is hidden from outside chats. Work mode isn’t available for this type of project.`,
          description: `Help text for the editable Project-only memory option in ChatGPT project settings for users with access to Work mode, explaining isolation and the Work mode restriction`,
        },
        defaultImmutable: {
          id: `chatgptConversations.projectSettings.memoryDefaultImmutable`,
          defaultMessage: `Project can access memories from outside chats, and vice versa. This cannot be changed.`,
          description: `Help text below the read-only Default memory value in ChatGPT project settings, explaining memory sharing and that this setting is not editable`,
        },
        projectOnlyImmutable: {
          id: `chatgptConversations.projectSettings.memoryProjectOnlyImmutable`,
          defaultMessage: `Project can only access its own memories. Its memories are hidden from outside chats. This cannot be changed.`,
          description: `Help text below the read-only Project-only memory value in ChatGPT project settings, explaining memory isolation and that this setting is not editable`,
        },
        projectOnlyImmutableWithWork: {
          id: `chatgptConversations.projectSettings.memoryProjectOnlyImmutableWithWork`,
          defaultMessage: `Project can only access its own memories. Its memories are hidden from outside chats. Work mode isn’t available for this type of project. This cannot be changed.`,
          description: `Help text below the read-only Project-only memory value in ChatGPT project settings for users with access to Work mode, explaining isolation, the Work mode restriction, and that this setting is not editable`,
        },
        sharedImmutable: {
          id: `chatgptConversations.projectSettings.memorySharedImmutable`,
          defaultMessage: `Shared projects use project-only memory. Their memory setting cannot be changed.`,
          description: `Help text in ChatGPT project settings explaining why collaborators cannot change a shared project's memory scope`,
        },
        workConversationWarning: {
          id: `chatgptConversations.projectSettings.memoryWorkConversationWarning`,
          defaultMessage: `Not supported for projects that contain Work chats`,
          description: `Help text below the disabled Project-only memory option in ChatGPT project settings when the project already contains Work mode conversations`,
        },
        workConversationCheckFailed: {
          id: `chatgptConversations.projectSettings.workConversationCheckFailed`,
          defaultMessage: `Couldn’t check project chats. Reopen the Memory menu to try again.`,
          description: `Error below the Memory control and its disabled Project-only option when checking for Work chats fails; reopening the Memory menu retries the check`,
        },
      })));
  }))();
}
function q(e) {
  "use forget";
  let t = (0, mt.c)(9),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ accountId: n, onClose: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = ee(ge),
    o;
  return (
    t[4] !== n || t[5] !== a || t[6] !== r || t[7] !== i
      ? ((o =
          a === n
            ? (0, X.jsx)(
                J,
                {
                  ...i,
                  onOpenChange: (e) => {
                    e || r();
                  },
                },
                i.project.gizmo.id,
              )
            : null),
        (t[4] = n),
        (t[5] = a),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o))
      : (o = t[8]),
    o
  );
}
function J(e) {
  "use forget";
  let n = (0, mt.c)(173),
    { autoFocusProjectName: r, onOpenChange: i, project: a, projectCrudStatus: c } = e,
    f = r !== void 0 && r,
    p = d(o),
    m = ee(it),
    y = g(),
    b = re(),
    x = s(),
    S = (0, Y.useRef)(null),
    w = (0, Y.useId)(),
    T = (0, Y.useId)(),
    D = (0, Y.useId)(),
    oe = (0, Y.useId)(),
    O = a.gizmo.display.name,
    k = a.gizmo.instructions ?? ``,
    le = a.gizmo.display.emoji ?? null,
    ue = a.gizmo.display.theme ?? null,
    [A, de] = (0, Y.useState)(O),
    [j, ge] = (0, Y.useState)(k),
    [M, be] = (0, Y.useState)(le),
    [N, Ce] = (0, Y.useState)(ue),
    [we, Oe] = (0, Y.useState)(null),
    [P, Ae] = (0, Y.useState)(!1),
    [je, Fe] = (0, Y.useState)(0),
    F = P || je > 0,
    [Ie, Le] = (0, Y.useState)(!1),
    [I, Be] = (0, Y.useState)(!1),
    He = Ve(`1862054621`),
    Ge;
  n[0] === He ? (Ge = n[1]) : ((Ge = { enabled: He }), (n[0] = He), (n[1] = Ge));
  let { data: qe } = ee(Re, Ge),
    Je = a.gizmo.current_user_permission?.can_write,
    Ye;
  n[2] !== c || n[3] !== Je ? ((Ye = Se(Je, c)), (n[2] = c), (n[3] = Je), (n[4] = Ye)) : (Ye = n[4]);
  let L = Ye,
    Ze = a.gizmo.current_user_permission?.can_delete,
    Qe;
  n[5] !== a.gizmo.gizmo_snorlax_type || n[6] !== c || n[7] !== Ze
    ? ((Qe = ze(Ze, a.gizmo.gizmo_snorlax_type, c)),
      (n[5] = a.gizmo.gizmo_snorlax_type),
      (n[6] = c),
      (n[7] = Ze),
      (n[8] = Qe))
    : (Qe = n[8]);
  let R = Qe,
    z = a.gizmo.share_recipient !== `private` || (a.gizmo.sharing?.subjects?.length ?? 0) > 0,
    tt = He && qe?.m3mEnabled === !0,
    nt;
  n[9] !== L || n[10] !== tt || n[11] !== a
    ? ((nt = L && tt && rt(a) && !a.gizmo.is_archived), (n[9] = L), (n[10] = tt), (n[11] = a), (n[12] = nt))
    : (nt = n[12]);
  let B = nt,
    V,
    H;
  n[13] === a.gizmo.id
    ? ((V = n[14]), (H = n[15]))
    : ((V = [...ke(a.gizmo.id), `memory-scope-work-chats`]),
      (H = async () => (await et(a.gizmo.id)).has_tpp_conversation === !0),
      (n[13] = a.gizmo.id),
      (n[14] = V),
      (n[15] = H));
  let U;
  n[16] !== B || n[17] !== V || n[18] !== H
    ? ((U = { queryKey: V, queryFn: H, enabled: B, staleTime: 0 }),
      (n[16] = B),
      (n[17] = V),
      (n[18] = H),
      (n[19] = U))
    : (U = n[19]);
  let { data: W, fetchStatus: st, isError: lt, isSuccess: ut, refetch: G } = v(U),
    K = `checking`;
  st === `idle` && (lt ? (K = `failed`) : ut && (K = W ? `has-work-chats` : `allowed`));
  let dt = a.gizmo.gizmo_snorlax_type === `potion` || fe(a) === `project-only` ? `project_v2` : `global`,
    q = B ? (we ?? dt) : dt,
    J = B && q !== dt,
    Z = j.length > Xe,
    ht = A !== O || j !== k || M !== le || N !== ue || J,
    gt;
  n[20] !== L ||
  n[21] !== ht ||
  n[22] !== J ||
  n[23] !== F ||
  n[24] !== Z ||
  n[25] !== q ||
  n[26] !== A ||
  n[27] !== K
    ? ((gt =
        L &&
        !F &&
        A.trim().length > 0 &&
        A.length <= 50 &&
        !Z &&
        (!J || q !== `project_v2` || K === `allowed`) &&
        ht),
      (n[20] = L),
      (n[21] = ht),
      (n[22] = J),
      (n[23] = F),
      (n[24] = Z),
      (n[25] = q),
      (n[26] = A),
      (n[27] = K),
      (n[28] = gt))
    : (gt = n[28]);
  let _t = gt,
    vt;
  n[29] !== M ||
  n[30] !== J ||
  n[31] !== j ||
  n[32] !== y ||
  n[33] !== z ||
  n[34] !== q ||
  n[35] !== A ||
  n[36] !== i ||
  n[37] !== k ||
  n[38] !== a ||
  n[39] !== b ||
  n[40] !== p ||
  n[41] !== N
    ? ((vt = async () => {
        let e = performance.now();
        (De(p, Me, { projectId: a.gizmo.id, isSharedProject: z }), Ae(!0));
        try {
          (await pe({
            scope: p,
            emoji: M,
            instructions: j === k ? null : j,
            memoryScope: J ? q : void 0,
            name: A,
            project: a,
            queryClient: b,
            theme: N,
          }),
            De(p, ye, {
              projectId: a.gizmo.id,
              isSharedProject: z,
              userE2eLatencyMs: u(Math.round(performance.now() - e)),
            }),
            Ae(!1),
            i(!1));
        } catch (e) {
          let t = e,
            n;
          (typeof t == `string` ? (n = t) : t instanceof Error && (n = t.name),
            De(p, Ne, { projectId: a.gizmo.id, isSharedProject: z, errorType: n }),
            p
              .get(C)
              .warning(
                (t instanceof Error ? Ke(t) : null) ??
                  y.formatMessage({
                    id: `chatgptConversations.projectSettings.updateError`,
                    defaultMessage: `Error creating or updating project`,
                    description: `Warning toast shown when an end user cannot save changes to ChatGPT project settings`,
                  }),
                { duration: 5, hasCloseButton: !0 },
              ),
            Ae(!1));
        }
      }),
      (n[29] = M),
      (n[30] = J),
      (n[31] = j),
      (n[32] = y),
      (n[33] = z),
      (n[34] = q),
      (n[35] = A),
      (n[36] = i),
      (n[37] = k),
      (n[38] = a),
      (n[39] = b),
      (n[40] = p),
      (n[41] = N),
      (n[42] = vt))
    : (vt = n[42]);
  let yt = vt;
  if (Ie) {
    let e;
    n[43] !== R ||
    n[44] !== L ||
    n[45] !== I ||
    n[46] !== P ||
    n[47] !== x ||
    n[48] !== i ||
    n[49] !== a.gizmo.id ||
    n[50] !== a.gizmo.short_url ||
    n[51] !== b ||
    n[52] !== p
      ? ((e = () => {
          if (!R || !L || P || I) return;
          Be(!0);
          let e = p.get(me),
            t = null;
          if (e != null) {
            let n = h(e.pathname),
              r = n?.params.conversationId,
              i = n != null && `gizmoId` in n.params ? n.params.gizmoId : null;
            ((t =
              (r == null ? null : p.get(Te, decodeURIComponent(r))) ??
              he(e.pathname) ??
              (i == null ? null : ve(i)) ??
              (ce(`/projects`, e.pathname) == null ? null : new URLSearchParams(e.search).get(`projectId`)) ??
              (ne(e.pathname) ? xe(e.state) : null)),
              t != null &&
                (t === a.gizmo.short_url || p.query.getData(Pe, t)?.gizmo.id === a.gizmo.id) &&
                (t = a.gizmo.id));
          }
          (Ue({ scope: p, activeProjectId: t, navigate: x, projectId: a.gizmo.id, queryClient: b })
            .catch(pt)
            .finally(() => Be(!1)),
            i(!1));
        }),
        (n[43] = R),
        (n[44] = L),
        (n[45] = I),
        (n[46] = P),
        (n[47] = x),
        (n[48] = i),
        (n[49] = a.gizmo.id),
        (n[50] = a.gizmo.short_url),
        (n[51] = b),
        (n[52] = p),
        (n[53] = e))
      : (e = n[53]);
    let t;
    return (
      n[54] !== I || n[55] !== a || n[56] !== e
        ? ((t = (0, X.jsx)(_e, { isDeleting: I, open: !0, project: a, onConfirm: e, onOpenChange: Le })),
          (n[54] = I),
          (n[55] = a),
          (n[56] = e),
          (n[57] = t))
        : (t = n[57]),
      t
    );
  }
  let bt;
  n[58] === f
    ? (bt = n[59])
    : ((bt = {
        "aria-describedby": void 0,
        shouldStopPointerDownPropagation: !1,
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), f || S.current?.focus({ preventScroll: !0 }));
        },
      }),
      (n[58] = f),
      (n[59] = bt));
  let xt;
  n[60] !== F || n[61] !== i
    ? ((xt = (e) => {
        (e || !F) && i(e);
      }),
      (n[60] = F),
      (n[61] = i),
      (n[62] = xt))
    : (xt = n[62]);
  let St = !F,
    Ct;
  n[63] !== _t || n[64] !== yt
    ? ((Ct = (e) => {
        (e.preventDefault(), _t && yt());
      }),
      (n[63] = _t),
      (n[64] = yt),
      (n[65] = Ct))
    : (Ct = n[65]);
  let wt;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, X.jsx)(`header`, {
        ref: S,
        className: `flex min-h-14 shrink-0 items-center px-4 py-2.5 select-none focus:outline-none`,
        tabIndex: -1,
        children: (0, X.jsx)(te, {
          className: `text-lg font-normal text-default`,
          children: (0, X.jsx)(l, {
            id: `chatgptConversations.projectSettings.title`,
            defaultMessage: `Project settings`,
            description: `Title for ChatGPT project settings`,
          }),
        }),
      })),
      (n[66] = wt))
    : (wt = n[66]);
  let Tt;
  n[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Tt = (0, X.jsx)(l, {
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (n[67] = Tt))
    : (Tt = n[67]);
  let Et;
  n[68] === w
    ? (Et = n[69])
    : ((Et = (0, X.jsx)(`label`, {
        className: `text-sm text-default select-none`,
        htmlFor: w,
        children: Tt,
      })),
      (n[68] = w),
      (n[69] = Et));
  let Dt;
  n[70] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (0, X.jsx)(se, {})), (n[70] = Dt))
    : (Dt = n[70]);
  let Ot;
  n[71] !== L || n[72] !== M || n[73] !== F || n[74] !== A || n[75] !== N
    ? ((Ot = (0, X.jsx)(`div`, {
        className: `relative col-start-1 row-start-1 flex size-9 items-center justify-center self-center border-e border-primary-outline`,
        children: (0, X.jsx)(We, {
          canEditProject: L,
          defaultIcon: Dt,
          emoji: M,
          isSaving: F,
          onEmojiChange: be,
          onThemeChange: Ce,
          projectName: A,
          theme: N,
          variant: `settings`,
        }),
      })),
      (n[71] = L),
      (n[72] = M),
      (n[73] = F),
      (n[74] = A),
      (n[75] = N),
      (n[76] = Ot))
    : (Ot = n[76]);
  let kt;
  n[77] === y
    ? (kt = n[78])
    : ((kt = y.formatMessage({
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (n[77] = y),
      (n[78] = kt));
  let At;
  n[79] === y
    ? (At = n[80])
    : ((At = y.formatMessage({
        id: `chatgptConversations.projectSettings.projectNamePlaceholder`,
        defaultMessage: `Copenhagen Trip`,
        description: `Default example project name shown as the project name field placeholder in ChatGPT project settings`,
      })),
      (n[79] = y),
      (n[80] = At));
  let jt = !L,
    Mt;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (e) => de(e.target.value)), (n[81] = Mt))
    : (Mt = n[81]);
  let Nt;
  n[82] !== f || n[83] !== F || n[84] !== A || n[85] !== w || n[86] !== kt || n[87] !== At || n[88] !== jt
    ? ((Nt = (0, X.jsx)(`input`, {
        id: w,
        autoComplete: `off`,
        autoFocus: f,
        "aria-label": kt,
        className: `col-span-full row-start-1 w-full rounded-lg border border-primary-outline bg-surface px-2 py-2 ps-11 pe-9 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        disabled: F,
        name: `project-name`,
        placeholder: At,
        readOnly: jt,
        type: `text`,
        value: A,
        onChange: Mt,
      })),
      (n[82] = f),
      (n[83] = F),
      (n[84] = A),
      (n[85] = w),
      (n[86] = kt),
      (n[87] = At),
      (n[88] = jt),
      (n[89] = Nt))
    : (Nt = n[89]);
  let Q;
  n[90] !== Ot || n[91] !== Nt
    ? ((Q = (0, X.jsxs)(`div`, { className: `grid gap-1`, children: [Ot, Nt] })),
      (n[90] = Ot),
      (n[91] = Nt),
      (n[92] = Q))
    : (Q = n[92]);
  let Pt;
  n[93] !== Et || n[94] !== Q
    ? ((Pt = (0, X.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [Et, Q] })),
      (n[93] = Et),
      (n[94] = Q),
      (n[95] = Pt))
    : (Pt = n[95]);
  let Ft;
  n[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ft = (0, X.jsx)(l, {
        id: `chatgptConversations.projectSettings.instructionsFieldLabel`,
        defaultMessage: `Instructions`,
        description: `Label for the editable instructions field in ChatGPT project settings`,
      })),
      (n[96] = Ft))
    : (Ft = n[96]);
  let It;
  n[97] === T
    ? (It = n[98])
    : ((It = (0, X.jsx)(`label`, { className: `text-sm text-default`, htmlFor: T, children: Ft })),
      (n[97] = T),
      (n[98] = It));
  let Lt;
  n[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Lt = (0, X.jsx)(l, {
        id: `chatgptConversations.projectSettings.instructionsDescription`,
        defaultMessage: `Set context and customize how ChatGPT responds in this project.`,
        description: `Supporting text below the instructions label in ChatGPT project settings explaining how project instructions influence responses`,
      })),
      (n[99] = Lt))
    : (Lt = n[99]);
  let Rt;
  n[100] === D
    ? (Rt = n[101])
    : ((Rt = (0, X.jsx)(`span`, { id: D, className: `text-xs text-codex-description`, children: Lt })),
      (n[100] = D),
      (n[101] = Rt));
  let zt;
  n[102] !== It || n[103] !== Rt
    ? ((zt = (0, X.jsxs)(`div`, { className: `flex flex-col gap-0.5 select-none`, children: [It, Rt] })),
      (n[102] = It),
      (n[103] = Rt),
      (n[104] = zt))
    : (zt = n[104]);
  let Bt = L && Z ? `${D} ${oe}` : D,
    Vt = (L && Z) || void 0,
    Ht;
  n[105] === y
    ? (Ht = n[106])
    : ((Ht = y.formatMessage({
        id: `chatgptConversations.projectSettings.instructionsPlaceholder`,
        defaultMessage: `e.g. “Respond in Spanish. Reference the latest JavaScript documentation. Keep answers short and focused.”`,
        description: `Placeholder for ChatGPT project instructions`,
      })),
      (n[105] = y),
      (n[106] = Ht));
  let Ut = !L,
    Wt;
  n[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Wt = (e) => ge(e.target.value)), (n[107] = Wt))
    : (Wt = n[107]);
  let Gt;
  n[108] !== j ||
  n[109] !== T ||
  n[110] !== F ||
  n[111] !== Bt ||
  n[112] !== Vt ||
  n[113] !== Ht ||
  n[114] !== Ut
    ? ((Gt = (0, X.jsx)(`textarea`, {
        id: T,
        className: `min-h-15 w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        "aria-describedby": Bt,
        "aria-invalid": Vt,
        disabled: F,
        name: `project-instructions`,
        placeholder: Ht,
        readOnly: Ut,
        rows: 2,
        value: j,
        onChange: Wt,
      })),
      (n[108] = j),
      (n[109] = T),
      (n[110] = F),
      (n[111] = Bt),
      (n[112] = Vt),
      (n[113] = Ht),
      (n[114] = Ut),
      (n[115] = Gt))
    : (Gt = n[115]);
  let Kt;
  n[116] !== L || n[117] !== oe || n[118] !== Z
    ? ((Kt =
        L && Z
          ? (0, X.jsx)(`p`, {
              id: oe,
              className: `mt-1 text-sm text-danger`,
              children: (0, X.jsx)(l, {
                id: `chatgptConversations.projectSettings.instructionsTooLong`,
                defaultMessage: `Project instructions cannot be longer than {length} characters.`,
                description: `Validation error below project instructions when they exceed the maximum supported character count`,
                values: { length: Xe },
              }),
            })
          : null),
      (n[116] = L),
      (n[117] = oe),
      (n[118] = Z),
      (n[119] = Kt))
    : (Kt = n[119]);
  let qt;
  n[120] !== zt || n[121] !== Gt || n[122] !== Kt
    ? ((qt = (0, X.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [zt, Gt, Kt] })),
      (n[120] = zt),
      (n[121] = Gt),
      (n[122] = Kt),
      (n[123] = qt))
    : (qt = n[123]);
  let Jt;
  n[124] === G
    ? (Jt = n[125])
    : ((Jt = () => {
        G();
      }),
      (n[124] = G),
      (n[125] = Jt));
  let Yt = tt && z,
    Xt;
  n[126] !== B || n[127] !== F || n[128] !== q || n[129] !== K || n[130] !== Jt || n[131] !== Yt
    ? ((Xt = (0, X.jsx)(ct, {
        canEdit: B,
        isSaving: F,
        memoryScope: q,
        onMemoryScopeChange: Oe,
        onRetryWorkConversationCheck: Jt,
        projectOnlyMemoryStatus: K,
        showSharedMemoryImmutableMessage: Yt,
      })),
      (n[126] = B),
      (n[127] = F),
      (n[128] = q),
      (n[129] = K),
      (n[130] = Jt),
      (n[131] = Yt),
      (n[132] = Xt))
    : (Xt = n[132]);
  let Zt;
  n[133] !== z || n[134] !== q
    ? ((Zt = (0, X.jsx)(ot, { isSharedProject: z, memoryScope: q })),
      (n[133] = z),
      (n[134] = q),
      (n[135] = Zt))
    : (Zt = n[135]);
  let Qt;
  n[136] !== L || n[137] !== P || n[138] !== m || n[139] !== O || n[140] !== a
    ? ((Qt =
        m && L && Ee(a)
          ? (0, X.jsx)(at, {
              disabled: P,
              onSavingChange: (e) => {
                Fe((t) => t + (e ? 1 : -1));
              },
              projectId: a.gizmo.id,
              projectName: O,
            })
          : null),
      (n[136] = L),
      (n[137] = P),
      (n[138] = m),
      (n[139] = O),
      (n[140] = a),
      (n[141] = Qt))
    : (Qt = n[141]);
  let $t;
  n[142] !== R || n[143] !== L || n[144] !== F || n[145] !== a.gizmo.id || n[146] !== p
    ? (($t = R
        ? (0, X.jsx)(`div`, {
            children: (0, X.jsx)(t, {
              color: `danger`,
              disabled: !L || F,
              size: `dialogAction`,
              type: `button`,
              onClick: () => {
                ($e({ scope: p, projectType: `cloud`, projectId: a.gizmo.id }), Le(!0));
              },
              children: (0, X.jsx)(l, {
                id: `chatgptConversations.projectSettings.deleteProject`,
                defaultMessage: `Delete project`,
                description: `Button below the memory settings in the ChatGPT project settings dialog. Opens a confirmation before permanently deleting the project. Shown only to users allowed to delete it.`,
              }),
            }),
          })
        : null),
      (n[142] = R),
      (n[143] = L),
      (n[144] = F),
      (n[145] = a.gizmo.id),
      (n[146] = p),
      (n[147] = $t))
    : ($t = n[147]);
  let en;
  n[148] !== Pt || n[149] !== qt || n[150] !== Xt || n[151] !== Zt || n[152] !== Qt || n[153] !== $t
    ? ((en = (0, X.jsxs)(`div`, {
        className: `flex min-h-0 flex-col gap-5 overflow-y-auto px-4 pt-2 pb-4`,
        children: [Pt, qt, Xt, Zt, Qt, $t],
      })),
      (n[148] = Pt),
      (n[149] = qt),
      (n[150] = Xt),
      (n[151] = Zt),
      (n[152] = Qt),
      (n[153] = $t),
      (n[154] = en))
    : (en = n[154]);
  let tn;
  n[155] !== L ||
  n[156] !== _t ||
  n[157] !== ht ||
  n[158] !== J ||
  n[159] !== y ||
  n[160] !== F ||
  n[161] !== P ||
  n[162] !== i
    ? ((tn =
        ht || !L
          ? (0, X.jsx)(`footer`, {
              className: `flex shrink-0 items-center justify-end gap-2 border-t border-primary-outline bg-surface px-4 py-4 select-none`,
              children: L
                ? (0, X.jsxs)(X.Fragment, {
                    children: [
                      J
                        ? (0, X.jsx)(`p`, {
                            className: `me-auto min-w-0 text-xs text-codex-description`,
                            children: (0, X.jsx)(l, {
                              id: `chatgptConversations.projectSettings.memoryUpdateWarning`,
                              defaultMessage: `It may take a few hours for this project’s memory settings to update`,
                              description: `Notice beside Save in ChatGPT project settings after changing memory scope, explaining that the new setting may take a few hours to take effect`,
                            }),
                          })
                        : null,
                      (0, X.jsx)(t, {
                        color: `outlineSurface`,
                        disabled: F,
                        onClick: () => i(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, X.jsx)(l, {
                          id: `chatgptConversations.projectSettings.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button in the ChatGPT project settings footer that closes the dialog without saving edits`,
                        }),
                      }),
                      (0, X.jsx)(t, {
                        color: `primary`,
                        disabled: !_t,
                        loading: P,
                        size: `dialogAction`,
                        type: `submit`,
                        children: (0, X.jsx)(l, {
                          id: `chatgptConversations.projectSettings.saveSettings`,
                          defaultMessage: `Save`,
                          description: `Button label for saving ChatGPT project settings`,
                        }),
                      }),
                    ],
                  })
                : (0, X.jsxs)(X.Fragment, {
                    children: [
                      (0, X.jsx)(ae, {
                        align: `center`,
                        side: `bottom`,
                        tooltipContent: y.formatMessage({
                          id: `chatgptConversations.projectSettings.viewOnlyDescription`,
                          defaultMessage: `You can only chat in this project.`,
                          description: `Tooltip explaining that a view-only project collaborator can chat in the project but cannot change its settings`,
                        }),
                        children: (0, X.jsxs)(`span`, {
                          className: `me-auto flex cursor-interaction items-center gap-1.5 text-sm text-codex-description`,
                          children: [
                            (0, X.jsx)(_, {}),
                            (0, X.jsx)(l, {
                              id: `chatgptConversations.projectSettings.viewOnly`,
                              defaultMessage: `View-only`,
                              description: `Status in the ChatGPT project settings footer indicating that the current collaborator cannot edit the project`,
                            }),
                          ],
                        }),
                      }),
                      (0, X.jsx)(t, {
                        color: `outlineSurface`,
                        onClick: () => i(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, X.jsx)(l, {
                          id: `chatgptConversations.projectSettings.close`,
                          defaultMessage: `Close`,
                          description: `Button in the read-only ChatGPT project settings footer that closes the dialog`,
                        }),
                      }),
                    ],
                  }),
            })
          : null),
      (n[155] = L),
      (n[156] = _t),
      (n[157] = ht),
      (n[158] = J),
      (n[159] = y),
      (n[160] = F),
      (n[161] = P),
      (n[162] = i),
      (n[163] = tn))
    : (tn = n[163]);
  let $;
  n[164] !== Ct || n[165] !== en || n[166] !== tn
    ? (($ = (0, X.jsxs)(ie, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onKeyDownCapture: ft,
        onSubmit: Ct,
        children: [wt, en, tn],
      })),
      (n[164] = Ct),
      (n[165] = en),
      (n[166] = tn),
      (n[167] = $))
    : ($ = n[167]);
  let nn;
  return (
    n[168] !== bt || n[169] !== xt || n[170] !== St || n[171] !== $
      ? ((nn = (0, X.jsx)(E, {
          open: !0,
          contentProps: bt,
          onOpenChange: xt,
          showDialogClose: St,
          size: `large`,
          variant: `chatgpt`,
          children: $,
        })),
        (n[168] = bt),
        (n[169] = xt),
        (n[170] = St),
        (n[171] = $),
        (n[172] = nn))
      : (nn = n[172]),
    nn
  );
}
function ft(e) {
  e.key === `Enter` && e.target instanceof HTMLInputElement && e.preventDefault();
}
function pt() {}
var mt, Y, X;
function Z() {
  return (Z = e(() => {
    ((mt = le()),
      He(),
      P(),
      y(),
      O(),
      f(),
      (Y = de()),
      w(),
      b(),
      Ye(),
      Ze(),
      oe(),
      k(),
      S(),
      p(),
      T(),
      x(),
      D(),
      nt(),
      Ae(),
      Ge(),
      ue(),
      Ie(),
      F(),
      Ce(),
      Be(),
      z(),
      N(),
      R(),
      j(),
      tt(),
      we(),
      M(),
      qe(),
      a(),
      st(),
      V(),
      B(),
      dt(),
      (X = A()));
  }))();
}
Z();
export { J as ChatGptProjectSettingsDialogV2, q as ChatGptProjectSettingsModal };
//# sourceMappingURL=dialog-473a56b667e6.js.map
