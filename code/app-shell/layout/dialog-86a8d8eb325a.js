import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Cpn as a,
  D3t as o,
  DSt as s,
  Dht as c,
  Eot as l,
  F3t as ee,
  Got as u,
  HSt as d,
  Hot as f,
  IXt as p,
  JG as m,
  JSt as h,
  JXt as g,
  Jit as _,
  Jrt as v,
  KG as y,
  KWt as b,
  Kit as x,
  NIt as S,
  Not as C,
  O3t as w,
  OSt as T,
  Opn as E,
  PIt as D,
  QWt as O,
  QXt as te,
  S3t as ne,
  Spn as k,
  USt as re,
  Wlt as ie,
  Wot as A,
  XSt as ae,
  Xdt as oe,
  ZG as se,
  ZSt as ce,
  _Kt as j,
  a3t as le,
  aYt as ue,
  eCt as M,
  eZt as de,
  eit as fe,
  fKt as N,
  flt as pe,
  fxt as me,
  hmn as P,
  iit as he,
  jXt as ge,
  kMt as _e,
  kXt as ve,
  kht as ye,
  kmn as F,
  mlt as be,
  mxt as xe,
  o3t as Se,
  pst as I,
  rit as Ce,
  s3t as we,
  sYt as Te,
  tit as Ee,
  xpn as De,
  yKt as Oe,
  yst as ke,
  zlt as Ae,
} from "./app-initial-f094ef01c64d.js";
import {
  Jc as je,
  Xc as Me,
  Yc as Ne,
  Zc as Pe,
  ch as Fe,
  sh as Ie,
} from "./app-primary-4c40d73a1074.js";
import { a as L, i as Le, n as Re, r as ze } from "./chatgpt_projects-e9a551b28a0b.js";
function Be(e) {
  "use forget";
  let t = (0, Ve.c)(27),
    { isSharedProject: n, memoryScope: r } = e,
    i = (0, R.useId)(),
    o = (0, R.useId)(),
    s = Te(`3765605143`),
    l;
  t[0] === s ? (l = t[1]) : ((l = { enabled: s }), (t[0] = s), (t[1] = l));
  let { data: u } = ee(c, l);
  if (!s || u?.fileLibraryEnabledForRegistrationCountry === !1) return null;
  let d = !n && r !== `project_v2`,
    f;
  if (n) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(a, {
          id: `chatgptConversations.projectSettings.libraryAccessSharedDescription`,
          defaultMessage: `Shared projects cannot access your file library`,
          description: `Explanation below the disabled Library access status in ChatGPT project settings when the project is shared with other people`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (f = e));
  } else if (r === `project_v2`) {
    let e;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(a, {
          id: `chatgptConversations.projectSettings.libraryAccessProjectOnlyDescription`,
          defaultMessage: `Project-only projects cannot access your file library`,
          description: `Explanation below the disabled Library access status in ChatGPT project settings when project-only memory is selected, including unsaved changes`,
        })),
        (t[3] = e))
      : (e = t[3]),
      (f = e));
  } else {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, z.jsx)(a, {
          id: `chatgptConversations.projectSettings.libraryAccessEnabledDescription`,
          defaultMessage: `This project can access your file library while it remains private. Sharing this project disables library access.`,
          description: `Explanation below the enabled Library access status in ChatGPT project settings, warning that sharing the project will disable access to the user's file library`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (f = e));
  }
  let p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, z.jsx)(a, {
        id: `chatgptConversations.projectSettings.libraryAccessLabel`,
        defaultMessage: `Library access`,
        description: `Label for the read-only Library access section below Memory in ChatGPT project settings`,
      })),
      (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === i
    ? (m = t[7])
    : ((m = (0, z.jsx)(`span`, { id: i, className: `text-sm text-default`, children: p })),
      (t[6] = i),
      (t[7] = m));
  let h;
  t[8] === d
    ? (h = t[9])
    : ((h = (0, z.jsx)(`span`, {
        children: d
          ? (0, z.jsx)(a, {
              id: `chatgptConversations.projectSettings.libraryAccessEnabled`,
              defaultMessage: `Enabled`,
              description: `Read-only status in ChatGPT project settings indicating that a private project with default memory can access the user's file library`,
            })
          : (0, z.jsx)(a, {
              id: `chatgptConversations.projectSettings.libraryAccessDisabled`,
              defaultMessage: `Disabled`,
              description: `Read-only status in ChatGPT project settings indicating that a shared or project-only project cannot access the user's file library`,
            }),
      })),
      (t[8] = d),
      (t[9] = h));
  let g;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, z.jsx)(be, {})), (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] === h
    ? (_ = t[12])
    : ((_ = (0, z.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [h, g],
      })),
      (t[11] = h),
      (t[12] = _));
  let v;
  t[13] !== o || t[14] !== i || t[15] !== _
    ? ((v = (0, z.jsx)(`div`, {
        className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
        "aria-describedby": o,
        "aria-labelledby": i,
        children: _,
      })),
      (t[13] = o),
      (t[14] = i),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== f || t[18] !== o
    ? ((y = (0, z.jsx)(`div`, {
        id: o,
        className: `mt-1 text-xs text-codex-description`,
        children: f,
      })),
      (t[17] = f),
      (t[18] = o),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] !== v || t[21] !== y
    ? ((b = (0, z.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [v, y] })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b))
    : (b = t[22]);
  let x;
  return (
    t[23] !== i || t[24] !== m || t[25] !== b
      ? ((x = (0, z.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": i,
          children: [m, b],
        })),
        (t[23] = i),
        (t[24] = m),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
var Ve,
  R,
  z,
  B = e(() => {
    ((Ve = F()), w(), (R = t(i(), 1)), k(), oe(), ue(), ye(), (z = P()));
  });
function He(e) {
  "use forget";
  let t = (0, V.c)(37),
    {
      canEdit: n,
      isSaving: r,
      memoryScope: i,
      onMemoryScopeChange: o,
      onRetryWorkConversationCheck: s,
      projectOnlyMemoryStatus: c,
      showSharedMemoryImmutableMessage: l,
    } = e,
    u = (0, H.useId)(),
    d = (0, H.useId)(),
    f = ee(j),
    p = ee(Oe),
    h = f || p,
    g;
  t[0] === h
    ? (g = t[1])
    : ((g = h
        ? (0, U.jsx)(a, { ...W.projectOnlyDescriptionWithWork })
        : (0, U.jsx)(a, { ...W.projectOnlyDescription })),
      (t[0] = h),
      (t[1] = g));
  let _ = g,
    v;
  t[2] === i
    ? (v = t[3])
    : ((v =
        i === `project_v2` ? (0, U.jsx)(a, { ...W.projectOnly }) : (0, U.jsx)(a, { ...W.default })),
      (t[2] = i),
      (t[3] = v));
  let b = v,
    x = _;
  if (c === `has-work-chats`) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, { ...W.workConversationWarning })), (t[4] = e))
      : (e = t[4]),
      (x = e));
  } else if (c === `checking`) {
    let e;
    (t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, {
          id: `chatgptConversations.projectSettings.checkingWorkChats`,
          defaultMessage: `Checking project chats…`,
          description: `Temporary status below the disabled Project-only memory option while checking whether a ChatGPT project contains Work chats`,
        })),
        (t[5] = e))
      : (e = t[5]),
      (x = e));
  } else if (c === `failed`) {
    let e;
    (t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, { ...W.workConversationCheckFailed })), (t[6] = e))
      : (e = t[6]),
      (x = e));
  }
  let S;
  if (l) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, { ...W.sharedImmutable })), (t[7] = e))
      : (e = t[7]),
      (S = e));
  } else if (n && c === `failed`) {
    let e;
    (t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, U.jsx)(a, { ...W.workConversationCheckFailed })), (t[8] = e))
      : (e = t[8]),
      (S = e));
  } else if (i === `project_v2`)
    if (n) S = _;
    else if (h) {
      let e;
      (t[9] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(a, { ...W.projectOnlyImmutableWithWork })), (t[9] = e))
        : (e = t[9]),
        (S = e));
    } else {
      let e;
      (t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, U.jsx)(a, { ...W.projectOnlyImmutable })), (t[10] = e))
        : (e = t[10]),
        (S = e));
    }
  else {
    let e;
    (t[11] === n
      ? (e = t[12])
      : ((e = n
          ? (0, U.jsx)(a, { ...W.defaultDescription })
          : (0, U.jsx)(a, { ...W.defaultImmutable })),
        (t[11] = n),
        (t[12] = e)),
      (S = e));
  }
  let C;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, U.jsx)(a, {
        id: `chatgptConversations.projectSettings.memoryLabel`,
        defaultMessage: `Memory`,
        description: `Label for the memory scope section in ChatGPT project settings`,
      })),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] === u
    ? (w = t[15])
    : ((w = (0, U.jsx)(`span`, { id: u, className: `text-sm text-default`, children: C })),
      (t[14] = u),
      (t[15] = w));
  let T;
  t[16] !== n ||
  t[17] !== d ||
  t[18] !== r ||
  t[19] !== u ||
  t[20] !== b ||
  t[21] !== i ||
  t[22] !== o ||
  t[23] !== s ||
  t[24] !== c ||
  t[25] !== x
    ? ((T = n
        ? (0, U.jsx)(y, {
            align: `start`,
            contentWidth: `menuWide`,
            disabled: r,
            onOpenChange: (e) => {
              e && c === `failed` && s();
            },
            side: `bottom`,
            triggerButton: (0, U.jsxs)(_e, {
              className: `w-full justify-between`,
              "aria-describedby": d,
              "aria-labelledby": u,
              color: `outlineSurface`,
              disabled: r,
              size: `dialog`,
              type: `button`,
              children: [b, (0, U.jsx)(pe, {})],
            }),
            children: (0, U.jsxs)(m.RadioGroup, {
              "aria-labelledby": u,
              value: i,
              onValueChange: (e) => {
                r || ((e === `global` || (e === `project_v2` && c === `allowed`)) && o(e));
              },
              children: [
                (0, U.jsx)(m.RadioItem, {
                  disabled: r,
                  value: `global`,
                  SubText: (0, U.jsx)(a, { ...W.defaultDescription }),
                  children: (0, U.jsx)(a, { ...W.default }),
                }),
                (0, U.jsx)(m.RadioItem, {
                  disabled: r || c !== `allowed`,
                  value: `project_v2`,
                  SubText: x,
                  children: (0, U.jsx)(a, { ...W.projectOnly }),
                }),
              ],
            }),
          })
        : (0, U.jsx)(`div`, {
            className: `relative w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-start text-sm text-default opacity-60`,
            children: b,
          })),
      (t[16] = n),
      (t[17] = d),
      (t[18] = r),
      (t[19] = u),
      (t[20] = b),
      (t[21] = i),
      (t[22] = o),
      (t[23] = s),
      (t[24] = c),
      (t[25] = x),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] !== S || t[28] !== d
    ? ((E = (0, U.jsx)(`div`, {
        id: d,
        className: `mt-1 text-xs text-codex-description`,
        children: S,
      })),
      (t[27] = S),
      (t[28] = d),
      (t[29] = E))
    : (E = t[29]);
  let D;
  t[30] !== T || t[31] !== E
    ? ((D = (0, U.jsxs)(`div`, { className: `flex flex-col gap-1`, children: [T, E] })),
      (t[30] = T),
      (t[31] = E),
      (t[32] = D))
    : (D = t[32]);
  let O;
  return (
    t[33] !== u || t[34] !== w || t[35] !== D
      ? ((O = (0, U.jsxs)(`section`, {
          className: `flex flex-col gap-2 select-none`,
          "aria-labelledby": u,
          children: [w, D],
        })),
        (t[33] = u),
        (t[34] = w),
        (t[35] = D),
        (t[36] = O))
      : (O = t[36]),
    O
  );
}
var V,
  H,
  U,
  W,
  G = e(() => {
    ((V = F()),
      w(),
      (H = t(i(), 1)),
      k(),
      N(),
      r(),
      se(),
      oe(),
      (U = P()),
      (W = De({
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
  });
function Ue(e) {
  "use forget";
  let t = (0, Ke.c)(9),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ accountId: n, onClose: r, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a = ee(b),
    o;
  return (
    t[4] !== n || t[5] !== a || t[6] !== r || t[7] !== i
      ? ((o =
          a === n
            ? (0, q.jsx)(
                We,
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
function We(e) {
  "use forget";
  let t = (0, Ke.c)(167),
    { autoFocusProjectName: r, onOpenChange: i, project: p, projectCrudStatus: m } = e,
    _ = r !== void 0 && r,
    y = n(le),
    b = E(),
    S = o(),
    C = g(),
    w = (0, K.useRef)(null),
    T = (0, K.useId)(),
    O = (0, K.useId)(),
    te = (0, K.useId)(),
    k = (0, K.useId)(),
    re = p.gizmo.display.name,
    A = p.gizmo.instructions ?? ``,
    oe = p.gizmo.display.emoji ?? null,
    se = p.gizmo.display.theme ?? null,
    [j, ue] = (0, K.useState)(re),
    [M, fe] = (0, K.useState)(A),
    [N, pe] = (0, K.useState)(oe),
    [P, he] = (0, K.useState)(se),
    [ve, ye] = (0, K.useState)(null),
    [F, be] = (0, K.useState)(!1),
    [xe, Se] = (0, K.useState)(!1),
    [I, we] = (0, K.useState)(!1),
    De = Te(`1862054621`),
    Oe;
  t[0] === De ? (Oe = t[1]) : ((Oe = { enabled: De }), (t[0] = De), (t[1] = Oe));
  let { data: Ne } = ee(c, Oe),
    Pe = p.gizmo.current_user_permission?.can_write,
    Fe;
  t[2] !== m || t[3] !== Pe
    ? ((Fe = ce(Pe, m)), (t[2] = m), (t[3] = Pe), (t[4] = Fe))
    : (Fe = t[4]);
  let L = Fe,
    Ve = p.gizmo.current_user_permission?.can_delete,
    R;
  t[5] !== p.gizmo.gizmo_snorlax_type || t[6] !== m || t[7] !== Ve
    ? ((R = ae(Ve, p.gizmo.gizmo_snorlax_type, m)),
      (t[5] = p.gizmo.gizmo_snorlax_type),
      (t[6] = m),
      (t[7] = Ve),
      (t[8] = R))
    : (R = t[8]);
  let z = R,
    B = p.gizmo.share_recipient !== `private` || (p.gizmo.sharing?.subjects?.length ?? 0) > 0,
    V = De && Ne?.m3mEnabled === !0,
    H;
  t[9] !== L || t[10] !== V || t[11] !== p
    ? ((H = L && V && h(p) && !p.gizmo.is_archived),
      (t[9] = L),
      (t[10] = V),
      (t[11] = p),
      (t[12] = H))
    : (H = t[12]);
  let U = H,
    W;
  t[13] === p.gizmo.id
    ? (W = t[14])
    : ((W = [...f(p.gizmo.id), `memory-scope-work-chats`]), (t[13] = p.gizmo.id), (t[14] = W));
  let G;
  t[15] !== p.gizmo.id || t[16] !== y
    ? ((G = async () => (await y.get(me).getProject(p.gizmo.id)).has_tpp_conversation === !0),
      (t[15] = p.gizmo.id),
      (t[16] = y),
      (t[17] = G))
    : (G = t[17]);
  let Ue;
  t[18] !== U || t[19] !== W || t[20] !== G
    ? ((Ue = { queryKey: W, queryFn: G, enabled: U, staleTime: 0 }),
      (t[18] = U),
      (t[19] = W),
      (t[20] = G),
      (t[21] = Ue))
    : (Ue = t[21]);
  let { data: We, fetchStatus: qe, isError: Je, isSuccess: Ye, refetch: Xe } = ne(Ue),
    J = `checking`;
  qe === `idle` && (Je ? (J = `failed`) : Ye && (J = We ? `has-work-chats` : `allowed`));
  let Ze =
      p.gizmo.gizmo_snorlax_type === `potion` || d(p) === `project-only` ? `project_v2` : `global`,
    Y = U ? (ve ?? Ze) : Ze,
    X = U && Y !== Ze,
    Z = M.length > je,
    Qe = j !== re || M !== A || N !== oe || P !== se || X,
    $e;
  t[22] !== L ||
  t[23] !== Qe ||
  t[24] !== X ||
  t[25] !== Z ||
  t[26] !== F ||
  t[27] !== Y ||
  t[28] !== j ||
  t[29] !== J
    ? (($e =
        L &&
        !F &&
        j.trim().length > 0 &&
        j.length <= 50 &&
        !Z &&
        (!X || Y !== `project_v2` || J === `allowed`) &&
        Qe),
      (t[22] = L),
      (t[23] = Qe),
      (t[24] = X),
      (t[25] = Z),
      (t[26] = F),
      (t[27] = Y),
      (t[28] = j),
      (t[29] = J),
      (t[30] = $e))
    : ($e = t[30]);
  let et = $e,
    tt;
  t[31] !== N ||
  t[32] !== X ||
  t[33] !== M ||
  t[34] !== b ||
  t[35] !== B ||
  t[36] !== Y ||
  t[37] !== j ||
  t[38] !== i ||
  t[39] !== A ||
  t[40] !== p ||
  t[41] !== S ||
  t[42] !== y ||
  t[43] !== P
    ? ((tt = async () => {
        let e = performance.now();
        (de(y, Le, { projectId: p.gizmo.id, isSharedProject: B }), be(!0));
        try {
          (await u({
            scope: y,
            emoji: N,
            instructions: M === A ? null : M,
            memoryScope: X ? Y : void 0,
            name: j,
            project: p,
            queryClient: S,
            theme: P,
          }),
            de(y, Re, {
              projectId: p.gizmo.id,
              isSharedProject: B,
              userE2eLatencyMs: D(Math.round(performance.now() - e)),
            }),
            be(!1),
            i(!1));
        } catch (e) {
          let t = e,
            n;
          (typeof t == `string` ? (n = t) : t instanceof Error && (n = t.name),
            de(y, ze, { projectId: p.gizmo.id, isSharedProject: B, errorType: n }),
            y.get(ge).warning(
              (t instanceof Error ? s(t) : null) ??
                b.formatMessage({
                  id: `chatgptConversations.projectSettings.updateError`,
                  defaultMessage: `Error creating or updating project`,
                  description: `Warning toast shown when an end user cannot save changes to ChatGPT project settings`,
                }),
              { duration: 5, hasCloseButton: !0 },
            ),
            be(!1));
        }
      }),
      (t[31] = N),
      (t[32] = X),
      (t[33] = M),
      (t[34] = b),
      (t[35] = B),
      (t[36] = Y),
      (t[37] = j),
      (t[38] = i),
      (t[39] = A),
      (t[40] = p),
      (t[41] = S),
      (t[42] = y),
      (t[43] = P),
      (t[44] = tt))
    : (tt = t[44]);
  let nt = tt;
  if (xe) {
    let e;
    t[45] !== z ||
    t[46] !== L ||
    t[47] !== b ||
    t[48] !== I ||
    t[49] !== F ||
    t[50] !== C ||
    t[51] !== i ||
    t[52] !== p.gizmo.id ||
    t[53] !== S ||
    t[54] !== y
      ? ((e = () => {
          !z ||
            !L ||
            F ||
            I ||
            (we(!0),
            l({
              scope: y,
              activeProjectId: p.gizmo.id,
              navigate: C,
              projectId: p.gizmo.id,
              queryClient: S,
            })
              .then(() => i(!1))
              .catch(() => {
                y.get(ge).danger(
                  b.formatMessage({
                    id: `chatgptConversations.projectSettings.deleteError`,
                    defaultMessage: `Could not delete project`,
                    description: `Error toast shown when an end user's attempt to permanently delete a ChatGPT project from its settings fails. The confirmation stays open so the user can retry or cancel.`,
                  }),
                  { hasCloseButton: !0 },
                );
              })
              .finally(() => we(!1)));
        }),
        (t[45] = z),
        (t[46] = L),
        (t[47] = b),
        (t[48] = I),
        (t[49] = F),
        (t[50] = C),
        (t[51] = i),
        (t[52] = p.gizmo.id),
        (t[53] = S),
        (t[54] = y),
        (t[55] = e))
      : (e = t[55]);
    let n;
    return (
      t[56] !== I || t[57] !== p || t[58] !== e
        ? ((n = (0, q.jsx)(Me, {
            isDeleting: I,
            open: !0,
            project: p,
            onConfirm: e,
            onOpenChange: Se,
          })),
          (t[56] = I),
          (t[57] = p),
          (t[58] = e),
          (t[59] = n))
        : (n = t[59]),
      n
    );
  }
  let rt;
  t[60] === _
    ? (rt = t[61])
    : ((rt = {
        "aria-describedby": void 0,
        shouldStopPointerDownPropagation: !1,
        onOpenAutoFocus: (e) => {
          (e.preventDefault(), _ || w.current?.focus({ preventScroll: !0 }));
        },
      }),
      (t[60] = _),
      (t[61] = rt));
  let Q;
  t[62] !== F || t[63] !== i
    ? ((Q = (e) => {
        (e || !F) && i(e);
      }),
      (t[62] = F),
      (t[63] = i),
      (t[64] = Q))
    : (Q = t[64]);
  let it = !F,
    at;
  t[65] !== et || t[66] !== nt
    ? ((at = (e) => {
        (e.preventDefault(), et && nt());
      }),
      (t[65] = et),
      (t[66] = nt),
      (t[67] = at))
    : (at = t[67]);
  let ot;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, q.jsx)(`header`, {
        ref: w,
        className: `flex min-h-14 shrink-0 items-center px-4 py-2.5 select-none focus:outline-none`,
        tabIndex: -1,
        children: (0, q.jsx)(Ce, {
          className: `text-lg font-normal text-default`,
          children: (0, q.jsx)(a, {
            id: `chatgptConversations.projectSettings.title`,
            defaultMessage: `Project settings`,
            description: `Title for ChatGPT project settings`,
          }),
        }),
      })),
      (t[68] = ot))
    : (ot = t[68]);
  let st;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (0, q.jsx)(a, {
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (t[69] = st))
    : (st = t[69]);
  let ct;
  t[70] === T
    ? (ct = t[71])
    : ((ct = (0, q.jsx)(`label`, {
        className: `text-sm text-default select-none`,
        htmlFor: T,
        children: st,
      })),
      (t[70] = T),
      (t[71] = ct));
  let lt;
  t[72] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, q.jsx)(ie, {})), (t[72] = lt))
    : (lt = t[72]);
  let ut;
  t[73] !== L || t[74] !== N || t[75] !== F || t[76] !== j || t[77] !== P
    ? ((ut = (0, q.jsx)(`div`, {
        className: `relative col-start-1 row-start-1 flex size-9 items-center justify-center self-center border-e border-primary-outline`,
        children: (0, q.jsx)(Ie, {
          canEditProject: L,
          defaultIcon: lt,
          emoji: N,
          isSaving: F,
          onEmojiChange: pe,
          onThemeChange: he,
          projectName: j,
          theme: P,
          variant: `settings`,
        }),
      })),
      (t[73] = L),
      (t[74] = N),
      (t[75] = F),
      (t[76] = j),
      (t[77] = P),
      (t[78] = ut))
    : (ut = t[78]);
  let dt;
  t[79] === b
    ? (dt = t[80])
    : ((dt = b.formatMessage({
        id: `chatgptConversations.projectSettings.projectNameLabel`,
        defaultMessage: `Project name`,
        description: `Label for the ChatGPT project name field`,
      })),
      (t[79] = b),
      (t[80] = dt));
  let ft;
  t[81] === b
    ? (ft = t[82])
    : ((ft = b.formatMessage({
        id: `chatgptConversations.projectSettings.projectNamePlaceholder`,
        defaultMessage: `Copenhagen Trip`,
        description: `Default example project name shown as the project name field placeholder in ChatGPT project settings`,
      })),
      (t[81] = b),
      (t[82] = ft));
  let pt = !L,
    mt;
  t[83] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((mt = (e) => ue(e.target.value)), (t[83] = mt))
    : (mt = t[83]);
  let ht;
  t[84] !== _ ||
  t[85] !== F ||
  t[86] !== j ||
  t[87] !== T ||
  t[88] !== dt ||
  t[89] !== ft ||
  t[90] !== pt
    ? ((ht = (0, q.jsx)(`input`, {
        id: T,
        autoComplete: `off`,
        autoFocus: _,
        "aria-label": dt,
        className: `col-span-full row-start-1 w-full rounded-lg border border-primary-outline bg-surface px-2 py-2 ps-11 pe-9 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        disabled: F,
        name: `project-name`,
        placeholder: ft,
        readOnly: pt,
        type: `text`,
        value: j,
        onChange: mt,
      })),
      (t[84] = _),
      (t[85] = F),
      (t[86] = j),
      (t[87] = T),
      (t[88] = dt),
      (t[89] = ft),
      (t[90] = pt),
      (t[91] = ht))
    : (ht = t[91]);
  let gt;
  t[92] !== ut || t[93] !== ht
    ? ((gt = (0, q.jsxs)(`div`, { className: `grid gap-1`, children: [ut, ht] })),
      (t[92] = ut),
      (t[93] = ht),
      (t[94] = gt))
    : (gt = t[94]);
  let _t;
  t[95] !== ct || t[96] !== gt
    ? ((_t = (0, q.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [ct, gt] })),
      (t[95] = ct),
      (t[96] = gt),
      (t[97] = _t))
    : (_t = t[97]);
  let vt;
  t[98] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((vt = (0, q.jsx)(a, {
        id: `chatgptConversations.projectSettings.instructionsFieldLabel`,
        defaultMessage: `Instructions`,
        description: `Label for the editable instructions field in ChatGPT project settings`,
      })),
      (t[98] = vt))
    : (vt = t[98]);
  let yt;
  t[99] === O
    ? (yt = t[100])
    : ((yt = (0, q.jsx)(`label`, { className: `text-sm text-default`, htmlFor: O, children: vt })),
      (t[99] = O),
      (t[100] = yt));
  let bt;
  t[101] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((bt = (0, q.jsx)(a, {
        id: `chatgptConversations.projectSettings.instructionsDescription`,
        defaultMessage: `Set context and customize how ChatGPT responds in this project.`,
        description: `Supporting text below the instructions label in ChatGPT project settings explaining how project instructions influence responses`,
      })),
      (t[101] = bt))
    : (bt = t[101]);
  let xt;
  t[102] === te
    ? (xt = t[103])
    : ((xt = (0, q.jsx)(`span`, {
        id: te,
        className: `text-xs text-codex-description`,
        children: bt,
      })),
      (t[102] = te),
      (t[103] = xt));
  let St;
  t[104] !== yt || t[105] !== xt
    ? ((St = (0, q.jsxs)(`div`, {
        className: `flex flex-col gap-0.5 select-none`,
        children: [yt, xt],
      })),
      (t[104] = yt),
      (t[105] = xt),
      (t[106] = St))
    : (St = t[106]);
  let Ct = L && Z ? `${te} ${k}` : te,
    wt = (L && Z) || void 0,
    Tt;
  t[107] === b
    ? (Tt = t[108])
    : ((Tt = b.formatMessage({
        id: `chatgptConversations.projectSettings.instructionsPlaceholder`,
        defaultMessage: `e.g. “Respond in Spanish. Reference the latest JavaScript documentation. Keep answers short and focused.”`,
        description: `Placeholder for ChatGPT project instructions`,
      })),
      (t[107] = b),
      (t[108] = Tt));
  let Et = !L,
    Dt;
  t[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Dt = (e) => fe(e.target.value)), (t[109] = Dt))
    : (Dt = t[109]);
  let Ot;
  t[110] !== M ||
  t[111] !== O ||
  t[112] !== F ||
  t[113] !== Ct ||
  t[114] !== wt ||
  t[115] !== Tt ||
  t[116] !== Et
    ? ((Ot = (0, q.jsx)(`textarea`, {
        id: O,
        className: `min-h-15 w-full rounded-lg border border-primary-outline bg-surface px-3 py-2 text-sm text-default placeholder:text-tertiary focus:border-ring focus:outline-none`,
        "aria-describedby": Ct,
        "aria-invalid": wt,
        disabled: F,
        name: `project-instructions`,
        placeholder: Tt,
        readOnly: Et,
        rows: 2,
        value: M,
        onChange: Dt,
      })),
      (t[110] = M),
      (t[111] = O),
      (t[112] = F),
      (t[113] = Ct),
      (t[114] = wt),
      (t[115] = Tt),
      (t[116] = Et),
      (t[117] = Ot))
    : (Ot = t[117]);
  let kt;
  t[118] !== L || t[119] !== k || t[120] !== Z
    ? ((kt =
        L && Z
          ? (0, q.jsx)(`p`, {
              id: k,
              className: `mt-1 text-sm text-danger`,
              children: (0, q.jsx)(a, {
                id: `chatgptConversations.projectSettings.instructionsTooLong`,
                defaultMessage: `Project instructions cannot be longer than {length} characters.`,
                description: `Validation error below project instructions when they exceed the maximum supported character count`,
                values: { length: je },
              }),
            })
          : null),
      (t[118] = L),
      (t[119] = k),
      (t[120] = Z),
      (t[121] = kt))
    : (kt = t[121]);
  let At;
  t[122] !== St || t[123] !== Ot || t[124] !== kt
    ? ((At = (0, q.jsxs)(`section`, { className: `flex flex-col gap-2`, children: [St, Ot, kt] })),
      (t[122] = St),
      (t[123] = Ot),
      (t[124] = kt),
      (t[125] = At))
    : (At = t[125]);
  let jt;
  t[126] === Xe
    ? (jt = t[127])
    : ((jt = () => {
        Xe();
      }),
      (t[126] = Xe),
      (t[127] = jt));
  let Mt = V && B,
    Nt;
  t[128] !== U || t[129] !== F || t[130] !== Y || t[131] !== J || t[132] !== jt || t[133] !== Mt
    ? ((Nt = (0, q.jsx)(He, {
        canEdit: U,
        isSaving: F,
        memoryScope: Y,
        onMemoryScopeChange: ye,
        onRetryWorkConversationCheck: jt,
        projectOnlyMemoryStatus: J,
        showSharedMemoryImmutableMessage: Mt,
      })),
      (t[128] = U),
      (t[129] = F),
      (t[130] = Y),
      (t[131] = J),
      (t[132] = jt),
      (t[133] = Mt),
      (t[134] = Nt))
    : (Nt = t[134]);
  let Pt;
  t[135] !== B || t[136] !== Y
    ? ((Pt = (0, q.jsx)(Be, { isSharedProject: B, memoryScope: Y })),
      (t[135] = B),
      (t[136] = Y),
      (t[137] = Pt))
    : (Pt = t[137]);
  let Ft;
  t[138] !== z || t[139] !== L || t[140] !== F || t[141] !== p.gizmo.id || t[142] !== y
    ? ((Ft = z
        ? (0, q.jsx)(`div`, {
            children: (0, q.jsx)(_e, {
              color: `danger`,
              disabled: !L || F,
              size: `dialogAction`,
              type: `button`,
              onClick: () => {
                (ke({ scope: y, projectType: `cloud`, projectId: p.gizmo.id }), Se(!0));
              },
              children: (0, q.jsx)(a, {
                id: `chatgptConversations.projectSettings.deleteProject`,
                defaultMessage: `Delete project`,
                description: `Button below the memory settings in the ChatGPT project settings dialog. Opens a confirmation before permanently deleting the project. Shown only to users allowed to delete it.`,
              }),
            }),
          })
        : null),
      (t[138] = z),
      (t[139] = L),
      (t[140] = F),
      (t[141] = p.gizmo.id),
      (t[142] = y),
      (t[143] = Ft))
    : (Ft = t[143]);
  let It;
  t[144] !== _t || t[145] !== At || t[146] !== Nt || t[147] !== Pt || t[148] !== Ft
    ? ((It = (0, q.jsxs)(`div`, {
        className: `flex min-h-0 flex-col gap-5 overflow-y-auto px-4 pt-2 pb-4`,
        children: [_t, At, Nt, Pt, Ft],
      })),
      (t[144] = _t),
      (t[145] = At),
      (t[146] = Nt),
      (t[147] = Pt),
      (t[148] = Ft),
      (t[149] = It))
    : (It = t[149]);
  let Lt;
  t[150] !== L ||
  t[151] !== et ||
  t[152] !== Qe ||
  t[153] !== X ||
  t[154] !== b ||
  t[155] !== F ||
  t[156] !== i
    ? ((Lt =
        Qe || !L
          ? (0, q.jsx)(`footer`, {
              className: `flex shrink-0 items-center justify-end gap-2 border-t border-primary-outline bg-surface px-4 py-4 select-none`,
              children: L
                ? (0, q.jsxs)(q.Fragment, {
                    children: [
                      X
                        ? (0, q.jsx)(`p`, {
                            className: `me-auto min-w-0 text-xs text-codex-description`,
                            children: (0, q.jsx)(a, {
                              id: `chatgptConversations.projectSettings.memoryUpdateWarning`,
                              defaultMessage: `It may take a few hours for this project’s memory settings to update`,
                              description: `Notice beside Save in ChatGPT project settings after changing memory scope, explaining that the new setting may take a few hours to take effect`,
                            }),
                          })
                        : null,
                      (0, q.jsx)(_e, {
                        color: `outlineSurface`,
                        disabled: F,
                        onClick: () => i(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, q.jsx)(a, {
                          id: `chatgptConversations.projectSettings.cancel`,
                          defaultMessage: `Cancel`,
                          description: `Button in the ChatGPT project settings footer that closes the dialog without saving edits`,
                        }),
                      }),
                      (0, q.jsx)(_e, {
                        color: `primary`,
                        disabled: !et,
                        size: `dialogAction`,
                        type: `submit`,
                        children: (0, q.jsx)(a, {
                          id: `chatgptConversations.projectSettings.saveSettings`,
                          defaultMessage: `Save`,
                          description: `Button label for saving ChatGPT project settings`,
                        }),
                      }),
                    ],
                  })
                : (0, q.jsxs)(q.Fragment, {
                    children: [
                      (0, q.jsx)(x, {
                        align: `center`,
                        side: `bottom`,
                        tooltipContent: b.formatMessage({
                          id: `chatgptConversations.projectSettings.viewOnlyDescription`,
                          defaultMessage: `You can only chat in this project.`,
                          description: `Tooltip explaining that a view-only project collaborator can chat in the project but cannot change its settings`,
                        }),
                        children: (0, q.jsxs)(`span`, {
                          className: `me-auto flex cursor-interaction items-center gap-1.5 text-sm text-codex-description`,
                          children: [
                            (0, q.jsx)(Ae, {}),
                            (0, q.jsx)(a, {
                              id: `chatgptConversations.projectSettings.viewOnly`,
                              defaultMessage: `View-only`,
                              description: `Status in the ChatGPT project settings footer indicating that the current collaborator cannot edit the project`,
                            }),
                          ],
                        }),
                      }),
                      (0, q.jsx)(_e, {
                        color: `outlineSurface`,
                        onClick: () => i(!1),
                        size: `dialogAction`,
                        type: `button`,
                        children: (0, q.jsx)(a, {
                          id: `chatgptConversations.projectSettings.close`,
                          defaultMessage: `Close`,
                          description: `Button in the read-only ChatGPT project settings footer that closes the dialog`,
                        }),
                      }),
                    ],
                  }),
            })
          : null),
      (t[150] = L),
      (t[151] = et),
      (t[152] = Qe),
      (t[153] = X),
      (t[154] = b),
      (t[155] = F),
      (t[156] = i),
      (t[157] = Lt))
    : (Lt = t[157]);
  let $;
  t[158] !== at || t[159] !== It || t[160] !== Lt
    ? (($ = (0, q.jsxs)(v, {
        as: `form`,
        className: `max-h-[calc(100vh-6rem)] min-h-0 overflow-hidden`,
        variant: `chatgpt`,
        onKeyDownCapture: Ge,
        onSubmit: at,
        children: [ot, It, Lt],
      })),
      (t[158] = at),
      (t[159] = It),
      (t[160] = Lt),
      (t[161] = $))
    : ($ = t[161]);
  let Rt;
  return (
    t[162] !== rt || t[163] !== Q || t[164] !== it || t[165] !== $
      ? ((Rt = (0, q.jsx)(Ee, {
          open: !0,
          contentProps: rt,
          onOpenChange: Q,
          showDialogClose: it,
          size: `large`,
          variant: `chatgpt`,
          children: $,
        })),
        (t[162] = rt),
        (t[163] = Q),
        (t[164] = it),
        (t[165] = $),
        (t[166] = Rt))
      : (Rt = t[166]),
    Rt
  );
}
function Ge(e) {
  e.key === `Enter` && e.target instanceof HTMLInputElement && e.preventDefault();
}
var Ke, K, q;
e(() => {
  ((Ke = F()),
    S(),
    L(),
    we(),
    w(),
    (K = t(i(), 1)),
    k(),
    p(),
    O(),
    r(),
    he(),
    fe(),
    oe(),
    ve(),
    _(),
    te(),
    I(),
    Se(),
    ue(),
    T(),
    xe(),
    Fe(),
    Ne(),
    Pe(),
    M(),
    A(),
    re(),
    ye(),
    C(),
    B(),
    G(),
    (q = P()));
})();
export { Ue as ChatGptProjectSettingsModal };
//# sourceMappingURL=dialog-86a8d8eb325a.js.map
