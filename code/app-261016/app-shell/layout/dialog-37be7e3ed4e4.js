import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  Got as i,
  HO as a,
  IO as o,
  JO as s,
  LNt as c,
  Lst as l,
  Mst as u,
  NSt as d,
  Not as f,
  PBt as p,
  PSt as m,
  Pot as h,
  QU as g,
  Qit as _,
  Qst as v,
  RU as y,
  Rst as ee,
  TY as b,
  USt as x,
  Uot as S,
  Vrt as C,
  WO as te,
  XOt as w,
  Y3 as ne,
  YOt as T,
  Z3 as E,
  ZSt as D,
  ck as re,
  iCt as O,
  jH as k,
  jst as ie,
  nB as ae,
  okt as oe,
  qO as se,
  qrt as ce,
  rB as le,
  rk as A,
  tk as ue,
  tkt as j,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as M,
  $cr as de,
  $kr as fe,
  Ben as N,
  Cjr as pe,
  DKn as me,
  F2n as he,
  FF as P,
  GIr as ge,
  Gzn as _e,
  I2n as ve,
  JBn as ye,
  Kzn as be,
  LIr as F,
  Qzn as xe,
  RF as Se,
  SLn as Ce,
  UIr as I,
  VPn as we,
  XBn as Te,
  Xzn as Ee,
  Ycr as De,
  Ydr as Oe,
  aG as ke,
  aVn as Ae,
  aun as je,
  bxn as Me,
  cK as Ne,
  eAr as L,
  eBn as Pe,
  eMr as Fe,
  fK as Ie,
  fVn as Le,
  gDt as Re,
  hDt as ze,
  hxn as Be,
  iVn as Ve,
  kKn as He,
  lK as Ue,
  nMr as We,
  o0n as Ge,
  oAr as Ke,
  oG as qe,
  oun as R,
  tVn as Je,
  uK as Ye,
  vLn as Xe,
  vut as Ze,
  wLr as Qe,
  xMr as $e,
  xjr as z,
  yMr as B,
  yut as et,
  zRr as tt,
  zen as nt,
} from "./app-initial-ad16eaadf81f.js";
import { i as rt, n as V, r as H, t as it } from "./local-folders-section-e93c6e47a83b.js";
function at(e) {
  "use forget";
  let t = (0, U.c)(30),
    { isSharedProject: n, memoryScope: r } = e,
    i = (0, W.useId)(),
    a = (0, W.useId)(),
    o = Ce();
  if (!O(He)) return null;
  let s = !n && r !== `project_v2`,
    c;
  if (n) {
    let e;
    (t[0] === o
      ? (e = t[1])
      : ((e = o
          ? (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessSharedDescription.spaceFiles`,
              defaultMessage: `Shared projects cannot access files in your Space`,
              description: `Explanation below the disabled Space access status in ChatGPT project settings when the project is shared with other people. Files saved in the user's Space are unavailable to the shared project. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessSharedDescription`,
              defaultMessage: `Shared projects cannot access your file Library`,
              description: `Explanation below the disabled Library access status in ChatGPT project settings when the project is shared with other people`,
            })),
        (t[0] = o),
        (t[1] = e)),
      (c = e));
  } else if (r === `project_v2`) {
    let e;
    (t[2] === o
      ? (e = t[3])
      : ((e = o
          ? (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessProjectOnlyDescription.space`,
              defaultMessage: `Project-only projects cannot access your file Space`,
              description: `Explanation below the disabled Space access status in ChatGPT project settings when project-only memory is selected, including unsaved changes. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessProjectOnlyDescription`,
              defaultMessage: `Project-only projects cannot access your file Library`,
              description: `Explanation below the disabled Library access status in ChatGPT project settings when project-only memory is selected, including unsaved changes`,
            })),
        (t[2] = o),
        (t[3] = e)),
      (c = e));
  } else {
    let e;
    (t[4] === o
      ? (e = t[5])
      : ((e = o
          ? (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabledDescription.space`,
              defaultMessage: `This project can access your file Space while it remains private. Sharing this project disables Space access.`,
              description: `Explanation below the enabled Space access status in ChatGPT project settings, warning that sharing the project will disable access to the user's file space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
            })
          : (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabledDescription`,
              defaultMessage: `This project can access your file Library while it remains private. Sharing this project disables Library access.`,
              description: `Explanation below the enabled Library access status in ChatGPT project settings, warning that sharing the project will disable access to the user's file library`,
            })),
        (t[4] = o),
        (t[5] = e)),
      (c = e));
  }
  let l;
  t[6] === o
    ? (l = t[7])
    : ((l = o
        ? (0, G.jsx)(j, {
            id: `chatgptConversations.projectSettings.libraryAccessLabel.space`,
            defaultMessage: `Space access`,
            description: `Label for the read-only Space access section below Memory in ChatGPT project settings. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })
        : (0, G.jsx)(j, {
            id: `chatgptConversations.projectSettings.libraryAccessLabel`,
            defaultMessage: `Library access`,
            description: `Label for the read-only Library access section below Memory in ChatGPT project settings`,
          })),
      (t[6] = o),
      (t[7] = l));
  let u;
  t[8] !== i || t[9] !== l
    ? ((u = (0, G.jsx)(`span`, { id: i, className: `text-sm text-default`, children: l })),
      (t[8] = i),
      (t[9] = l),
      (t[10] = u))
    : (u = t[10]);
  let d;
  t[11] === s
    ? (d = t[12])
    : ((d = (0, G.jsx)(`span`, {
        children: s
          ? (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabled`,
              defaultMessage: `Enabled`,
              description: `Read-only status in ChatGPT project settings indicating that a private project with default memory can access the user's file library`,
            })
          : (0, G.jsx)(j, {
              id: `chatgptConversations.projectSettings.libraryAccessDisabled`,
              defaultMessage: `Disabled`,
              description: `Read-only status in ChatGPT project settings indicating that a shared or project-only project cannot access the user's file library`,
            }),
      })),
      (t[11] = s),
      (t[12] = d));
  let f;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = (0, G.jsx)(k, {})), (t[13] = f)) : (f = t[13]);
  let p;
  t[14] === d
    ? (p = t[15])
    : ((p = (0, G.jsxs)(`div`, { className: `flex items-center justify-between`, children: [d, f] })),
      (t[14] = d),
      (t[15] = p));
  let m;
  t[16] !== a || t[17] !== i || t[18] !== p
    ? ((m = (0, G.jsx)(`div`, {
        className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
        "aria-describedby": a,
        "aria-labelledby": i,
        children: p,
      })),
      (t[16] = a),
      (t[17] = i),
      (t[18] = p),
      (t[19] = m))
    : (m = t[19]);
  let h;
  t[20] !== c || t[21] !== a
    ? ((h = (0, G.jsx)(`div`, { id: a, className: `mt-1 text-xs text-codex-description`, children: c })),
      (t[20] = c),
      (t[21] = a),
      (t[22] = h))
    : (h = t[22]);
  let g;
  t[23] !== m || t[24] !== h
    ? ((g = (0, G.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [m, h] })),
      (t[23] = m),
      (t[24] = h),
      (t[25] = g))
    : (g = t[25]);
  let _;
  return (
    t[26] !== i || t[27] !== u || t[28] !== g
      ? ((_ = (0, G.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": i,
          children: [u, g],
        })),
        (t[26] = i),
        (t[27] = u),
        (t[28] = g),
        (t[29] = _))
      : (_ = t[29]),
    _
  );
}
var U, W, G;
function ot() {
  return (ot = e(() => {
    ((U = p()), D(), (W = r()), w(), b(), Xe(), me(), (G = c()));
  }))();
}
function st(e) {
  "use forget";
  let t = (0, ct.c)(37),
    {
      canEdit: n,
      isSaving: r,
      memoryScope: i,
      onMemoryScopeChange: a,
      onRetryWorkConversationCheck: o,
      projectOnlyMemoryStatus: s,
      showSharedMemoryImmutableMessage: c,
    } = e,
    l = (0, lt.useId)(),
    u = (0, lt.useId)(),
    d = O(I),
    f = O(ge),
    p = d || f,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = p
        ? (0, K.jsx)(j, { ...q.projectOnlyDescriptionWithWork })
        : (0, K.jsx)(j, { ...q.projectOnlyDescription })),
      (t[0] = p),
      (t[1] = m));
  let h = m,
    g;
  t[2] === i
    ? (g = t[3])
    : ((g = i === `project_v2` ? (0, K.jsx)(j, { ...q.projectOnly }) : (0, K.jsx)(j, { ...q.default })),
      (t[2] = i),
      (t[3] = g));
  let _ = g,
    v = h;
  if (s === `has-work-chats`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(j, { ...q.workConversationWarning })), (t[4] = e))
      : (e = t[4]),
      (v = e));
  } else if (s === `checking`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(j, {
          id: `chatgptConversations.projectSettings.checkingWorkChats`,
          defaultMessage: `Checking project chats…`,
          description: `Temporary status below the disabled Project-only memory option while checking whether a ChatGPT project contains Work chats`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (v = e));
  } else if (s === `failed`) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(j, { ...q.workConversationCheckFailed })), (t[6] = e))
      : (e = t[6]),
      (v = e));
  }
  let y;
  if (c) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(j, { ...q.sharedImmutable })), (t[7] = e))
      : (e = t[7]),
      (y = e));
  } else if (n && s === `failed`) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(j, { ...q.workConversationCheckFailed })), (t[8] = e))
      : (e = t[8]),
      (y = e));
  } else if (i === `project_v2`) {
    if (n) y = h;
    else if (p) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(j, { ...q.projectOnlyImmutableWithWork })), (t[9] = e))
        : (e = t[9]),
        (y = e));
    } else {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(j, { ...q.projectOnlyImmutable })), (t[10] = e))
        : (e = t[10]),
        (y = e));
    }
  } else {
    let e;
    (t[11] === n
      ? (e = t[12])
      : ((e = n ? (0, K.jsx)(j, { ...q.defaultDescription }) : (0, K.jsx)(j, { ...q.defaultImmutable })),
        (t[11] = n),
        (t[12] = e)),
      (y = e));
  }
  let ee;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, K.jsx)(j, {
        id: `chatgptConversations.projectSettings.memoryLabel`,
        defaultMessage: `Memory`,
        description: `Label for the memory scope section in ChatGPT project settings`,
      })),
      (t[13] = ee))
    : (ee = t[13]);
  let b;
  t[14] === l
    ? (b = t[15])
    : ((b = (0, K.jsx)(`span`, { id: l, className: `text-sm text-default`, children: ee })),
      (t[14] = l),
      (t[15] = b));
  let x;
  t[16] !== n ||
  t[17] !== u ||
  t[18] !== r ||
  t[19] !== l ||
  t[20] !== _ ||
  t[21] !== i ||
  t[22] !== a ||
  t[23] !== o ||
  t[24] !== s ||
  t[25] !== v
    ? ((x = n
        ? (0, K.jsx)(ue, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: r,
            onOpenChange: (e) => {
              e && s === `failed` && o();
            },
            side: `bottom`,
            triggerButton: (0, K.jsx)(P, {
              className: `w-full`,
              "aria-describedby": u,
              "aria-labelledby": l,
              color: `outlineSurface`,
              disabled: r,
              type: `button`,
              children: _,
            }),
            children: (0, K.jsxs)(A.RadioGroup, {
              "aria-labelledby": l,
              value: i,
              onValueChange: (e) => {
                r || ((e === `global` || (e === `project_v2` && s === `allowed`)) && a(e));
              },
              children: [
                (0, K.jsx)(A.RadioItem, {
                  disabled: r,
                  value: `global`,
                  SubText: (0, K.jsx)(j, { ...q.defaultDescription }),
                  children: (0, K.jsx)(j, { ...q.default }),
                }),
                (0, K.jsx)(A.RadioItem, {
                  disabled: r || s !== `allowed`,
                  value: `project_v2`,
                  SubText: v,
                  children: (0, K.jsx)(j, { ...q.projectOnly }),
                }),
              ],
            }),
          })
        : (0, K.jsx)(`div`, {
            className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
            children: _,
          })),
      (t[16] = n),
      (t[17] = u),
      (t[18] = r),
      (t[19] = l),
      (t[20] = _),
      (t[21] = i),
      (t[22] = a),
      (t[23] = o),
      (t[24] = s),
      (t[25] = v),
      (t[26] = x))
    : (x = t[26]);
  let S;
  t[27] !== y || t[28] !== u
    ? ((S = (0, K.jsx)(`div`, { id: u, className: `mt-1 text-xs text-codex-description`, children: y })),
      (t[27] = y),
      (t[28] = u),
      (t[29] = S))
    : (S = t[29]);
  let C;
  t[30] !== x || t[31] !== S
    ? ((C = (0, K.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [x, S] })),
      (t[30] = x),
      (t[31] = S),
      (t[32] = C))
    : (C = t[32]);
  let te;
  return (
    t[33] !== l || t[34] !== b || t[35] !== C
      ? ((te = (0, K.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": l,
          children: [b, C],
        })),
        (t[33] = l),
        (t[34] = b),
        (t[35] = C),
        (t[36] = te))
      : (te = t[36]),
    te
  );
}
var ct, lt, K, q;
function ut() {
  return (ut = e(() => {
    ((ct = p()),
      D(),
      (lt = r()),
      w(),
      F(),
      re(),
      Se(),
      (K = c()),
      (q = T({
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
function J(e) {
  "use forget";
  let t = (0, pt.c)(9),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ accountId: n, onClose: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = O(tt),
    o;
  return (
    t[4] !== n || t[5] !== a || t[6] !== r || t[7] !== i
      ? ((o =
          a === n
            ? (0, Z.jsx)(
                Y,
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
function Y(e) {
  "use forget";
  let n = (0, pt.c)(173),
    { autoFocusProjectName: r, onOpenChange: a, project: s, projectCrudStatus: c } = e,
    l = r !== void 0 && r,
    d = t(v),
    f = O(rt),
    p = oe(),
    b = ee(),
    S = x(),
    C = (0, X.useRef)(null),
    w = (0, X.useId)(),
    T = (0, X.useId)(),
    E = (0, X.useId)(),
    D = (0, X.useId)(),
    re = s.gizmo.display.name,
    k = s.gizmo.instructions ?? ``,
    ie = s.gizmo.display.emoji ?? null,
    le = s.gizmo.display.theme ?? null,
    [A, ue] = (0, X.useState)(re),
    [M, de] = (0, X.useState)(k),
    [N, me] = (0, X.useState)(ie),
    [P, ge] = (0, X.useState)(le),
    [ve, be] = (0, X.useState)(null),
    [F, xe] = (0, X.useState)(!1),
    [Se, Ce] = (0, X.useState)(0),
    I = F || Se > 0,
    [we, Oe] = (0, X.useState)(!1),
    [L, Ie] = (0, X.useState)(!1),
    Re = pe(`1862054621`),
    Be;
  n[0] === Re ? (Be = n[1]) : ((Be = { enabled: Re }), (n[0] = Re), (n[1] = Be));
  let { data: He } = O(Fe, Be),
    We = s.gizmo.current_user_permission?.can_write,
    qe;
  n[2] !== c || n[3] !== We ? ((qe = Ae(We, c)), (n[2] = c), (n[3] = We), (n[4] = qe)) : (qe = n[4]);
  let R = qe,
    Xe = s.gizmo.current_user_permission?.can_delete,
    Qe;
  n[5] !== s.gizmo.gizmo_snorlax_type || n[6] !== c || n[7] !== Xe
    ? ((Qe = Ve(Xe, s.gizmo.gizmo_snorlax_type, c)),
      (n[5] = s.gizmo.gizmo_snorlax_type),
      (n[6] = c),
      (n[7] = Xe),
      (n[8] = Qe))
    : (Qe = n[8]);
  let z = Qe,
    B = s.gizmo.share_recipient !== `private` || (s.gizmo.sharing?.subjects?.length ?? 0) > 0,
    et = Re && He?.m3mEnabled === !0,
    tt;
  n[9] !== R || n[10] !== et || n[11] !== s
    ? ((tt = R && et && Le(s) && !s.gizmo.is_archived), (n[9] = R), (n[10] = et), (n[11] = s), (n[12] = tt))
    : (tt = n[12]);
  let V = tt,
    H,
    U;
  n[13] === s.gizmo.id
    ? ((H = n[14]), (U = n[15]))
    : ((H = [...Ee(s.gizmo.id), `memory-scope-work-chats`]),
      (U = async () => (await ye(s.gizmo.id)).has_tpp_conversation === !0),
      (n[13] = s.gizmo.id),
      (n[14] = H),
      (n[15] = U));
  let W;
  n[16] !== V || n[17] !== H || n[18] !== U
    ? ((W = { queryKey: H, queryFn: U, enabled: V, staleTime: 0 }),
      (n[16] = V),
      (n[17] = H),
      (n[18] = U),
      (n[19] = W))
    : (W = n[19]);
  let { data: G, fetchStatus: ot, isError: ct, isSuccess: lt, refetch: K } = u(W),
    q = `checking`;
  ot === `idle` && (ct ? (q = `failed`) : lt && (q = G ? `has-work-chats` : `allowed`));
  let ut = s.gizmo.gizmo_snorlax_type === `potion` || Te(s) === `project-only` ? `project_v2` : `global`,
    J = V ? (ve ?? ut) : ut,
    Y = V && J !== ut,
    Q = M.length > nt,
    mt = A !== re || M !== k || N !== ie || P !== le || Y,
    ht;
  n[20] !== R ||
  n[21] !== mt ||
  n[22] !== Y ||
  n[23] !== I ||
  n[24] !== Q ||
  n[25] !== J ||
  n[26] !== A ||
  n[27] !== q
    ? ((ht =
        R &&
        !I &&
        A.trim().length > 0 &&
        A.length <= 50 &&
        !Q &&
        (!Y || J !== `project_v2` || q === `allowed`) &&
        mt),
      (n[20] = R),
      (n[21] = mt),
      (n[22] = Y),
      (n[23] = I),
      (n[24] = Q),
      (n[25] = J),
      (n[26] = A),
      (n[27] = q),
      (n[28] = ht))
    : (ht = n[28]);
  let gt = ht,
    _t;
  n[29] !== N ||
  n[30] !== Y ||
  n[31] !== M ||
  n[32] !== p ||
  n[33] !== B ||
  n[34] !== J ||
  n[35] !== A ||
  n[36] !== a ||
  n[37] !== k ||
  n[38] !== s ||
  n[39] !== b ||
  n[40] !== d ||
  n[41] !== P
    ? ((_t = async () => {
        let e = performance.now();
        ($e(d, Ye, { projectId: s.gizmo.id, isSharedProject: B }), xe(!0));
        try {
          (await Pe({
            scope: d,
            emoji: N,
            instructions: M === k ? null : M,
            memoryScope: Y ? J : void 0,
            name: A,
            project: s,
            queryClient: b,
            theme: P,
          }),
            $e(d, Ne, {
              projectId: s.gizmo.id,
              isSharedProject: B,
              userE2eLatencyMs: _(Math.round(performance.now() - e)),
            }),
            xe(!1),
            a(!1));
        } catch (e) {
          let t = e,
            n;
          (typeof t == `string` ? (n = t) : t instanceof Error && (n = t.name),
            $e(d, Ue, { projectId: s.gizmo.id, isSharedProject: B, errorType: n }),
            d
              .get(ce)
              .warning(
                (t instanceof Error ? he(t) : null) ??
                  p.formatMessage({
                    id: `chatgptConversations.projectSettings.updateError`,
                    defaultMessage: `Error creating or updating project`,
                    description: `Warning toast shown when an end user cannot save changes to ChatGPT project settings`,
                  }),
                { duration: 5, hasCloseButton: !0 },
              ),
            xe(!1));
        }
      }),
      (n[29] = N),
      (n[30] = Y),
      (n[31] = M),
      (n[32] = p),
      (n[33] = B),
      (n[34] = J),
      (n[35] = A),
      (n[36] = a),
      (n[37] = k),
      (n[38] = s),
      (n[39] = b),
      (n[40] = d),
      (n[41] = P),
      (n[42] = _t))
    : (_t = n[42]);
  let vt = _t;
  if (we) {
    let e;
    n[43] !== z ||
    n[44] !== R ||
    n[45] !== L ||
    n[46] !== F ||
    n[47] !== S ||
    n[48] !== a ||
    n[49] !== s.gizmo.id ||
    n[50] !== s.gizmo.short_url ||
    n[51] !== b ||
    n[52] !== d
      ? ((e = () => {
          if (!z || !R || F || L) return;
          Ie(!0);
          let e = d.get(De),
            t = null;
          if (e != null) {
            let n = i(e.pathname),
              r = n?.params.conversationId,
              a = n != null && `gizmoId` in n.params ? n.params.gizmoId : null;
            ((t =
              (r == null ? null : d.get(Ge, decodeURIComponent(r))) ??
              fe(e.pathname) ??
              (a == null ? null : Ke(a)) ??
              (m(`/projects`, e.pathname) == null ? null : new URLSearchParams(e.search).get(`projectId`)) ??
              (h(e.pathname) ? ze(e.state) : null)),
              t != null &&
                (t === s.gizmo.short_url || d.query.getData(_e, t)?.gizmo.id === s.gizmo.id) &&
                (t = s.gizmo.id));
          }
          (je({ scope: d, activeProjectId: t, navigate: S, projectId: s.gizmo.id, queryClient: b })
            .catch(ft)
            .finally(() => Ie(!1)),
            a(!1));
        }),
        (n[43] = z),
        (n[44] = R),
        (n[45] = L),
        (n[46] = F),
        (n[47] = S),
        (n[48] = a),
        (n[49] = s.gizmo.id),
        (n[50] = s.gizmo.short_url),
        (n[51] = b),
        (n[52] = d),
        (n[53] = e))
      : (e = n[53]);
    let t;
    return (
      n[54] !== L || n[55] !== s || n[56] !== e
        ? ((t = (0, Z.jsx)(ke, { isDeleting: L, open: !0, project: s, onConfirm: e, onOpenChange: Oe })),
          (n[54] = L),
          (n[55] = s),
          (n[56] = e),
          (n[57] = t))
        : (t = n[57]),
      t
    );
  }
  let yt;
  n[58] === l
    ? (yt = n[59])
    : ((yt = {
        "aria-describedby": void 0,
        shouldStopPointerDownPropagation: !1,
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), l || C.current?.focus({ preventScroll: !0 }));
        },
      }),
      (n[58] = l),
      (n[59] = yt));
  let bt;
  n[60] !== I || n[61] !== a
    ? ((bt = (e) => {
        (e || !I) && a(e);
      }),
      (n[60] = I),
      (n[61] = a),
      (n[62] = bt))
    : (bt = n[62]);
  let xt = !I,
    St;
  n[63] !== gt || n[64] !== vt
    ? ((St = (e) => {
        (e.preventDefault(), gt && vt());
      }),
      (n[63] = gt),
      (n[64] = vt),
      (n[65] = St))
    : (St = n[65]);
  let Ct;
  n[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ct = (0, Z.jsx)(`header`, {
        ref: C,
        className: `flex min-h-14 shrink-0 items-center px-4 py-2.5 select-none focus:outline-none`,
        tabIndex: -1,
        children: (0, Z.jsx)(se, {
          className: `text-lg font-normal text-default`,
          children: (0, Z.jsx)(j, {
            id: `chatgptConversations.projectSettings.title`,
            defaultMessage: `Project settings`,
            description: `Title for ChatGPT project settings`,
          }),
        }),
      })),
      (n[66] = Ct))
    : (Ct = n[66]);
  let wt;
  n[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((wt = (0, Z.jsx)(j, {
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (n[67] = wt))
    : (wt = n[67]);
  let Tt;
  n[68] === w
    ? (Tt = n[69])
    : ((Tt = (0, Z.jsx)(`label`, {
        className: `text-sm text-default select-none`,
        htmlFor: w,
        children: wt,
      })),
      (n[68] = w),
      (n[69] = Tt));
  let Et;
  n[70] === Symbol.for(`react.memo_cache_sentinel`) ? ((Et = (0, Z.jsx)(g, {})), (n[70] = Et)) : (Et = n[70]);
  let Dt;
  n[71] !== R || n[72] !== N || n[73] !== I || n[74] !== A || n[75] !== P
    ? ((Dt = (0, Z.jsx)(`div`, {
        className: `relative col-start-1 row-start-1 flex size-9 items-center justify-center self-center border-e border-primary-outline`,
        children: (0, Z.jsx)(Ze, {
          canEditProject: R,
          defaultIcon: Et,
          emoji: N,
          isSaving: I,
          onEmojiChange: me,
          onThemeChange: ge,
          projectName: A,
          theme: P,
          variant: `settings`,
        }),
      })),
      (n[71] = R),
      (n[72] = N),
      (n[73] = I),
      (n[74] = A),
      (n[75] = P),
      (n[76] = Dt))
    : (Dt = n[76]);
  let Ot;
  n[77] === p
    ? (Ot = n[78])
    : ((Ot = p.formatMessage({
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (n[77] = p),
      (n[78] = Ot));
  let kt;
  n[79] === p
    ? (kt = n[80])
    : ((kt = p.formatMessage({
        id: `chatgptConversations.projectSettings.projectNamePlaceholder`,
        defaultMessage: `Copenhagen Trip`,
        description: `Default example project name shown as the project name field placeholder in ChatGPT project settings`,
      })),
      (n[79] = p),
      (n[80] = kt));
  let At = !R,
    jt;
  n[81] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((jt = (e) => ue(e.target.value)), (n[81] = jt))
    : (jt = n[81]);
  let Mt;
  n[82] !== l || n[83] !== I || n[84] !== A || n[85] !== w || n[86] !== Ot || n[87] !== kt || n[88] !== At
    ? ((Mt = (0, Z.jsx)(`input`, {
        id: w,
        autoComplete: `off`,
        autoFocus: l,
        "aria-label": Ot,
        className: `col-span-full row-start-1 w-full rounded-lg border border-primary-outline bg-surface px-2 py-2 ps-11 pe-9 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        disabled: I,
        name: `project-name`,
        placeholder: kt,
        readOnly: At,
        type: `text`,
        value: A,
        onChange: jt,
      })),
      (n[82] = l),
      (n[83] = I),
      (n[84] = A),
      (n[85] = w),
      (n[86] = Ot),
      (n[87] = kt),
      (n[88] = At),
      (n[89] = Mt))
    : (Mt = n[89]);
  let $;
  n[90] !== Dt || n[91] !== Mt
    ? (($ = (0, Z.jsxs)(`div`, { className: `grid gap-1`, children: [Dt, Mt] })),
      (n[90] = Dt),
      (n[91] = Mt),
      (n[92] = $))
    : ($ = n[92]);
  let Nt;
  n[93] !== Tt || n[94] !== $
    ? ((Nt = (0, Z.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [Tt, $] })),
      (n[93] = Tt),
      (n[94] = $),
      (n[95] = Nt))
    : (Nt = n[95]);
  let Pt;
  n[96] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (0, Z.jsx)(j, {
        id: `chatgptConversations.projectSettings.instructionsFieldLabel`,
        defaultMessage: `Instructions`,
        description: `Label for the editable instructions field in ChatGPT project settings`,
      })),
      (n[96] = Pt))
    : (Pt = n[96]);
  let Ft;
  n[97] === T
    ? (Ft = n[98])
    : ((Ft = (0, Z.jsx)(`label`, { className: `text-sm text-default`, htmlFor: T, children: Pt })),
      (n[97] = T),
      (n[98] = Ft));
  let It;
  n[99] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((It = (0, Z.jsx)(j, {
        id: `chatgptConversations.projectSettings.instructionsDescription`,
        defaultMessage: `Set context and customize how ChatGPT responds in this project.`,
        description: `Supporting text below the instructions label in ChatGPT project settings explaining how project instructions influence responses`,
      })),
      (n[99] = It))
    : (It = n[99]);
  let Lt;
  n[100] === E
    ? (Lt = n[101])
    : ((Lt = (0, Z.jsx)(`span`, { id: E, className: `text-xs text-codex-description`, children: It })),
      (n[100] = E),
      (n[101] = Lt));
  let Rt;
  n[102] !== Ft || n[103] !== Lt
    ? ((Rt = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-0.5 select-none`, children: [Ft, Lt] })),
      (n[102] = Ft),
      (n[103] = Lt),
      (n[104] = Rt))
    : (Rt = n[104]);
  let zt = R && Q ? `${E} ${D}` : E,
    Bt = (R && Q) || void 0,
    Vt;
  n[105] === p
    ? (Vt = n[106])
    : ((Vt = p.formatMessage({
        id: `chatgptConversations.projectSettings.instructionsPlaceholder`,
        defaultMessage: `e.g. “Respond in Spanish. Reference the latest JavaScript documentation. Keep answers short and focused.”`,
        description: `Placeholder for ChatGPT project instructions`,
      })),
      (n[105] = p),
      (n[106] = Vt));
  let Ht = !R,
    Ut;
  n[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ut = (e) => de(e.target.value)), (n[107] = Ut))
    : (Ut = n[107]);
  let Wt;
  n[108] !== M ||
  n[109] !== T ||
  n[110] !== I ||
  n[111] !== zt ||
  n[112] !== Bt ||
  n[113] !== Vt ||
  n[114] !== Ht
    ? ((Wt = (0, Z.jsx)(`textarea`, {
        id: T,
        className: `min-h-15 w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        "aria-describedby": zt,
        "aria-invalid": Bt,
        disabled: I,
        name: `project-instructions`,
        placeholder: Vt,
        readOnly: Ht,
        rows: 2,
        value: M,
        onChange: Ut,
      })),
      (n[108] = M),
      (n[109] = T),
      (n[110] = I),
      (n[111] = zt),
      (n[112] = Bt),
      (n[113] = Vt),
      (n[114] = Ht),
      (n[115] = Wt))
    : (Wt = n[115]);
  let Gt;
  n[116] !== R || n[117] !== D || n[118] !== Q
    ? ((Gt =
        R && Q
          ? (0, Z.jsx)(`p`, {
              id: D,
              className: `mt-1 text-sm text-danger`,
              children: (0, Z.jsx)(j, {
                id: `chatgptConversations.projectSettings.instructionsTooLong`,
                defaultMessage: `Project instructions cannot be longer than {length} characters.`,
                description: `Validation error below project instructions when they exceed the maximum supported character count`,
                values: { length: nt },
              }),
            })
          : null),
      (n[116] = R),
      (n[117] = D),
      (n[118] = Q),
      (n[119] = Gt))
    : (Gt = n[119]);
  let Kt;
  n[120] !== Rt || n[121] !== Wt || n[122] !== Gt
    ? ((Kt = (0, Z.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [Rt, Wt, Gt] })),
      (n[120] = Rt),
      (n[121] = Wt),
      (n[122] = Gt),
      (n[123] = Kt))
    : (Kt = n[123]);
  let qt;
  n[124] === K
    ? (qt = n[125])
    : ((qt = () => {
        K();
      }),
      (n[124] = K),
      (n[125] = qt));
  let Jt = et && B,
    Yt;
  n[126] !== V || n[127] !== I || n[128] !== J || n[129] !== q || n[130] !== qt || n[131] !== Jt
    ? ((Yt = (0, Z.jsx)(st, {
        canEdit: V,
        isSaving: I,
        memoryScope: J,
        onMemoryScopeChange: be,
        onRetryWorkConversationCheck: qt,
        projectOnlyMemoryStatus: q,
        showSharedMemoryImmutableMessage: Jt,
      })),
      (n[126] = V),
      (n[127] = I),
      (n[128] = J),
      (n[129] = q),
      (n[130] = qt),
      (n[131] = Jt),
      (n[132] = Yt))
    : (Yt = n[132]);
  let Xt;
  n[133] !== B || n[134] !== J
    ? ((Xt = (0, Z.jsx)(at, { isSharedProject: B, memoryScope: J })),
      (n[133] = B),
      (n[134] = J),
      (n[135] = Xt))
    : (Xt = n[135]);
  let Zt;
  n[136] !== R || n[137] !== F || n[138] !== f || n[139] !== re || n[140] !== s
    ? ((Zt =
        f && R && Je(s)
          ? (0, Z.jsx)(it, {
              disabled: F,
              onSavingChange: (e) => {
                Ce((t) => t + (e ? 1 : -1));
              },
              projectId: s.gizmo.id,
              projectName: re,
            })
          : null),
      (n[136] = R),
      (n[137] = F),
      (n[138] = f),
      (n[139] = re),
      (n[140] = s),
      (n[141] = Zt))
    : (Zt = n[141]);
  let Qt;
  n[142] !== z || n[143] !== R || n[144] !== I || n[145] !== s.gizmo.id || n[146] !== d
    ? ((Qt = z
        ? (0, Z.jsx)(`div`, {
            children: (0, Z.jsx)(ne, {
              color: `danger`,
              disabled: !R || I,
              size: `dialogAction`,
              type: `button`,
              onClick: () => {
                (Me({ scope: d, projectType: `cloud`, projectId: s.gizmo.id }), Oe(!0));
              },
              children: (0, Z.jsx)(j, {
                id: `chatgptConversations.projectSettings.deleteProject`,
                defaultMessage: `Delete project`,
                description: `Button below the memory settings in the ChatGPT project settings dialog. Opens a confirmation before permanently deleting the project. Shown only to users allowed to delete it.`,
              }),
            }),
          })
        : null),
      (n[142] = z),
      (n[143] = R),
      (n[144] = I),
      (n[145] = s.gizmo.id),
      (n[146] = d),
      (n[147] = Qt))
    : (Qt = n[147]);
  let $t;
  n[148] !== Nt || n[149] !== Kt || n[150] !== Yt || n[151] !== Xt || n[152] !== Zt || n[153] !== Qt
    ? (($t = (0, Z.jsxs)(`div`, {
        className: `flex min-h-0 flex-col gap-5 overflow-y-auto px-4 pt-2 pb-4`,
        children: [Nt, Kt, Yt, Xt, Zt, Qt],
      })),
      (n[148] = Nt),
      (n[149] = Kt),
      (n[150] = Yt),
      (n[151] = Xt),
      (n[152] = Zt),
      (n[153] = Qt),
      (n[154] = $t))
    : ($t = n[154]);
  let en;
  n[155] !== R ||
  n[156] !== gt ||
  n[157] !== mt ||
  n[158] !== Y ||
  n[159] !== p ||
  n[160] !== I ||
  n[161] !== F ||
  n[162] !== a
    ? ((en =
        mt || !R
          ? (0, Z.jsx)(`footer`, {
              className: `flex shrink-0 items-center justify-end gap-2 border-t border-primary-outline bg-surface px-4 py-4 select-none`,
              children: R
                ? (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      Y
                        ? (0, Z.jsx)(`p`, {
                            className: `me-auto min-w-0 text-xs text-codex-description`,
                            children: (0, Z.jsx)(j, {
                              id: `chatgptConversations.projectSettings.memoryUpdateWarning`,
                              defaultMessage: `It may take a few hours for this project’s memory settings to update`,
                              description: `Notice beside Save in ChatGPT project settings after changing memory scope, explaining that the new setting may take a few hours to take effect`,
                            }),
                          })
                        : null,
                      (0, Z.jsx)(ne, {
                        color: `outlineSurface`,
                        disabled: I,
                        onClick: () => a(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, Z.jsx)(j, {
                          id: `chatgptConversations.projectSettings.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button in the ChatGPT project settings footer that closes the dialog without saving edits`,
                        }),
                      }),
                      (0, Z.jsx)(ne, {
                        color: `primary`,
                        disabled: !gt,
                        loading: F,
                        size: `dialogAction`,
                        type: `submit`,
                        children: (0, Z.jsx)(j, {
                          id: `chatgptConversations.projectSettings.saveSettings`,
                          defaultMessage: `Save`,
                          description: `Button label for saving ChatGPT project settings`,
                        }),
                      }),
                    ],
                  })
                : (0, Z.jsxs)(Z.Fragment, {
                    children: [
                      (0, Z.jsx)(ae, {
                        align: `center`,
                        side: `bottom`,
                        tooltipContent: p.formatMessage({
                          id: `chatgptConversations.projectSettings.viewOnlyDescription`,
                          defaultMessage: `You can only chat in this project.`,
                          description: `Tooltip explaining that a view-only project collaborator can chat in the project but cannot change its settings`,
                        }),
                        children: (0, Z.jsxs)(`span`, {
                          className: `me-auto flex cursor-interaction items-center gap-1.5 text-sm text-codex-description`,
                          children: [
                            (0, Z.jsx)(y, {}),
                            (0, Z.jsx)(j, {
                              id: `chatgptConversations.projectSettings.viewOnly`,
                              defaultMessage: `View-only`,
                              description: `Status in the ChatGPT project settings footer indicating that the current collaborator cannot edit the project`,
                            }),
                          ],
                        }),
                      }),
                      (0, Z.jsx)(ne, {
                        color: `outlineSurface`,
                        onClick: () => a(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, Z.jsx)(j, {
                          id: `chatgptConversations.projectSettings.close`,
                          defaultMessage: `Close`,
                          description: `Button in the read-only ChatGPT project settings footer that closes the dialog`,
                        }),
                      }),
                    ],
                  }),
            })
          : null),
      (n[155] = R),
      (n[156] = gt),
      (n[157] = mt),
      (n[158] = Y),
      (n[159] = p),
      (n[160] = I),
      (n[161] = F),
      (n[162] = a),
      (n[163] = en))
    : (en = n[163]);
  let tn;
  n[164] !== St || n[165] !== $t || n[166] !== en
    ? ((tn = (0, Z.jsxs)(o, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onKeyDownCapture: dt,
        onSubmit: St,
        children: [Ct, $t, en],
      })),
      (n[164] = St),
      (n[165] = $t),
      (n[166] = en),
      (n[167] = tn))
    : (tn = n[167]);
  let nn;
  return (
    n[168] !== yt || n[169] !== bt || n[170] !== xt || n[171] !== tn
      ? ((nn = (0, Z.jsx)(te, {
          open: !0,
          contentProps: yt,
          onOpenChange: bt,
          showDialogClose: xt,
          size: `large`,
          variant: `chatgpt`,
          children: tn,
        })),
        (n[168] = yt),
        (n[169] = bt),
        (n[170] = xt),
        (n[171] = tn),
        (n[172] = nn))
      : (nn = n[172]),
    nn
  );
}
function dt(e) {
  e.key === `Enter` && e.target instanceof HTMLInputElement && e.preventDefault();
}
function ft() {}
var pt, X, Z;
function Q() {
  return (Q = e(() => {
    ((pt = p()),
      Oe(),
      Ie(),
      ie(),
      l(),
      D(),
      (X = r()),
      w(),
      d(),
      Qe(),
      be(),
      E(),
      s(),
      a(),
      b(),
      C(),
      le(),
      f(),
      de(),
      B(),
      Be(),
      n(),
      z(),
      ve(),
      Re(),
      et(),
      N(),
      qe(),
      xe(),
      M(),
      we(),
      We(),
      L(),
      R(),
      S(),
      ot(),
      H(),
      V(),
      ut(),
      (Z = c()));
  }))();
}
Q();
export { Y as ChatGptProjectSettingsDialogV2, J as ChatGptProjectSettingsModal };
//# sourceMappingURL=dialog-37be7e3ed4e4.js.map
