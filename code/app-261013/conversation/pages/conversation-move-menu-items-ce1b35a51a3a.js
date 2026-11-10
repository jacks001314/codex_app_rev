import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as n,
  AO as r,
  Cot as i,
  Ext as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  TJ as l,
  TO as u,
  Vxt as d,
  _xt as f,
  eU as p,
  hot as m,
  jDt as h,
  lU as g,
  lot as _,
  qG as v,
  sMt as y,
  vzt as b,
  wot as x,
  xMt as S,
} from "./app-shared-bbfeca5e5737.js";
import {
  $an as C,
  AIn as w,
  AWt as T,
  C7t as E,
  Don as ee,
  ELn as D,
  ITr as O,
  NIn as k,
  NTr as A,
  Oon as j,
  TLn as M,
  VG as N,
  aIr as P,
  ann as F,
  cnn as I,
  gon as L,
  jWt as R,
  kLn as z,
  lW as B,
  lnn as V,
  oIr as H,
  onn as U,
  son as W,
  uW as G,
  w7t as K,
  zG as q,
} from "./app-initial-5851df3f6cb1.js";
function te(e) {
  let t = (0, Y.c)(12),
    { conversation: n, onCreateProjectDialogCloseAutoFocus: r, project: c, showMoveToProject: l } = e,
    f = l === void 0 || l,
    p = s(i),
    m = a(),
    h = d(w),
    g = d(C),
    _ = K(),
    v;
  if (
    t[0] !== n ||
    t[1] !== m ||
    t[2] !== r ||
    t[3] !== g ||
    t[4] !== c ||
    t[5] !== _ ||
    t[6] !== h ||
    t[7] !== p ||
    t[8] !== f
  ) {
    let e = J({
        scope: p,
        conversation: n,
        project: c,
        projectListQuery: h,
        pinnedProjectsQuery: g,
        showMoveToProject: f,
        projectCrudStatus: _,
        navigate: m,
        onCreateProjectDialogCloseAutoFocus: r,
      }),
      i = (e) => {
        if (e.type === `separator`) return (0, Z.jsx)(u.Separator, {}, e.id);
        let t = e.message ? (0, Z.jsx)(o, { ...e.message, values: e.messageValues }) : e.id,
          n = e.tooltipMessage
            ? (0, Z.jsx)(o, { ...e.tooltipMessage, values: e.tooltipMessageValues })
            : void 0;
        return e.submenu == null
          ? (0, Z.jsx)(
              u.Item,
              {
                LeftIcon: typeof e.icon == `function` ? e.icon : void 0,
                leftIcon: typeof e.icon == `object` ? e.icon : void 0,
                disabled: e.enabled === !1,
                tooltipSide: `bottom`,
                tooltipSideOffset: 8,
                tooltipText: n,
                onSelect: (t) => {
                  (e.closeOnSelect === !1 && t.preventDefault(), e.onSelect?.());
                },
                children: t,
              },
              e.id,
            )
          : (0, Z.jsx)(
              u.FlyoutSubmenuItem,
              {
                LeftIcon: typeof e.icon == `function` ? e.icon : void 0,
                disabled: e.enabled === !1,
                tooltipSide: `bottom`,
                tooltipSideOffset: 8,
                label: t,
                tooltipText: n,
                children: e.submenu.map(i),
              },
              e.id,
            );
      };
    ((v = e.map(i)),
      (t[0] = n),
      (t[1] = m),
      (t[2] = r),
      (t[3] = g),
      (t[4] = c),
      (t[5] = _),
      (t[6] = h),
      (t[7] = p),
      (t[8] = f),
      (t[9] = v));
  } else v = t[9];
  let y;
  return (
    t[10] === v ? (y = t[11]) : ((y = (0, Z.jsx)(Z.Fragment, { children: v })), (t[10] = v), (t[11] = y)),
    y
  );
}
function J({
  scope: e,
  conversation: t,
  project: n,
  projectListQuery: r,
  pinnedProjectsQuery: i,
  showMoveToProject: a = !0,
  showDestinationFetchState: o = !0,
  projectCrudStatus: s,
  navigate: c,
  onCreateProjectDialogCloseAutoFocus: l,
}) {
  let { isWorkConversation: u, sourceMemoryBlocked: d } = q(t, n),
    f = d ? ee.projectOnlyMoveUnavailable : void 0,
    { data: h, isPending: _, isError: y } = r,
    { data: b, isPending: x, isError: S } = i,
    T = (0, X.default)(
      [
        ...(b ?? []).map((e) => e.item),
        ...(h?.pages.flatMap((e) => e.items.map((e) => e.gizmo)) ?? []),
      ].filter(z),
      (e) => e.gizmo.id,
    ).filter((e) => e.gizmo.id !== n?.gizmo.id && e.gizmo.gizmo_snorlax_type == null),
    E = s === `allowed`,
    D = (n, r) => {
      L({ scope: e, conversationId: t.id, projectId: n.gizmo.id })
        .then(r)
        .catch(() => {
          e.get(m).danger(e.get(H).formatMessage(Q.moveFailed), {
            errorAnalytics: { toastId: `move_conversation_to_snorlax_error` },
          });
        });
    },
    O = [];
  E &&
    (O.push({
      id: `new-chatgpt-project`,
      icon: v,
      message: Q.newProject,
      selectAfterClose: !0,
      onSelect: () => {
        R(
          e,
          (e) => {
            D(e, () => {
              c(A(e.gizmo.id));
            });
          },
          { allowLocalProjectCreation: !1, forceGlobalMemory: u, onCloseAutoFocus: l },
        );
      },
    }),
    T.length > 0 && O.push({ id: `new-project-separator`, type: `separator` }));
  for (let e of T) {
    let { targetMemoryBlocked: n } = q(t, void 0, e),
      r = n ? B(M(e)) : void 0;
    O.push({
      id: `move-to-project:${e.gizmo.id}`,
      icon: (0, Z.jsx)(F, {
        className: `icon-xs`,
        size: 16,
        color: e.gizmo.display.theme,
        fallbackIcon: (0, Z.jsx)(p, {}),
        icon: e.gizmo.display.emoji,
      }),
      nativeIcon: I(e.gizmo.display.emoji),
      message: Q.projectName,
      messageValues: { projectName: e.gizmo.display.name },
      enabled: r == null,
      tooltipMessage: r,
      onSelect: () => {
        (D(e), c(A(e.gizmo.id)));
      },
    });
  }
  return (
    o && (y || S)
      ? O.push({
          id: `retry-project-destinations`,
          message: Q.destinationsFailed,
          closeOnSelect: !1,
          onSelect: () => {
            Promise.all([e.query.invalidate(w), e.query.invalidate(C)]);
          },
        })
      : o && (_ || x)
        ? O.push({
            id: `loading-project-destinations`,
            message: Q.loading,
            tooltipMessage: Q.reopen,
            enabled: !1,
          })
        : !y &&
          !S &&
          !_ &&
          !x &&
          T.length === 0 &&
          !E &&
          O.push({ id: `no-project-destinations`, message: Q.noDestinations, enabled: !1 }),
    [
      ...(a && O.length > 0
        ? [
            {
              id: `move-to-project`,
              icon: p,
              message: Q.moveToProject,
              enabled: !d,
              tooltipMessage: f,
              submenu: O,
            },
          ]
        : []),
      ...(n == null
        ? []
        : [
            {
              id: `remove-from-project`,
              icon: g,
              message: Q.removeFromProject,
              enabled: !d,
              tooltipMessage: f,
              onSelect: () => {
                L({ scope: e, conversationId: t.id, projectId: null }).catch(() => {
                  e.get(m).danger(e.get(H).formatMessage(Q.removeFailed), {
                    errorAnalytics: { toastId: `move_conversation_to_snorlax_error` },
                  });
                });
              },
            },
          ]),
    ]
  );
}
var Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    ((Y = b()),
      (X = t(y(), 1)),
      c(),
      h(),
      f(),
      r(),
      l(),
      _(),
      P(),
      V(),
      U(),
      x(),
      j(),
      k(),
      D(),
      T(),
      W(),
      E(),
      G(),
      N(),
      O(),
      (Z = S()),
      (Q = n({
        moveToProject: {
          id: `chatgptConversations.projectActions.moveToProject`,
          defaultMessage: `Move to project`,
          description: `Context or overflow submenu that moves a ChatGPT conversation or Work task into a different ChatGPT project`,
        },
        projectName: {
          id: `chatgptConversations.projectActions.projectName`,
          defaultMessage: `{projectName}`,
          description: `Name of a ChatGPT project offered as a destination for moving a conversation or Work task`,
        },
        removeFromProject: {
          id: `chatgptProjectHome.chats.projectActions.remove`,
          defaultMessage: `Remove from project`,
          description: `Action in a conversation header or project-home chat's overflow menu that moves the chat back to general history; the project name appears in the section heading`,
        },
        moveFailed: {
          id: `chatgptProjectHome.chats.projectActions.moveFailed`,
          defaultMessage: `Failed to move the conversation to the project`,
          description: `Error toast after moving a chat from the project-home or conversation-header overflow menu fails; the chat's previous project membership is restored`,
        },
        removeFailed: {
          id: `chatgptProjectHome.chats.projectActions.removeFailed`,
          defaultMessage: `Failed to remove the conversation from the project`,
          description: `Error toast after a chat cannot be removed from its current project; its previous membership is restored`,
        },
        newProject: {
          id: `chatgptProjectHome.chats.projectActions.newProject`,
          defaultMessage: `New project`,
          description: `Action in the project-home or conversation-header Move to project submenu that creates a new cloud project and then moves the chat into it`,
        },
        destinationsFailed: {
          id: `chatgptProjectHome.chats.projectActions.destinationsFailed`,
          defaultMessage: `Couldn’t load projects. Try again`,
          description: `Retry action in the project-home or conversation-header Move to project submenu when project destinations fail to load; already loaded destinations remain available`,
        },
        loading: {
          id: `chatgptConversations.projects.loadingMenu`,
          defaultMessage: `Loading projects…`,
          description: `Disabled menu item while project destinations load`,
        },
        reopen: {
          id: `chatgptConversations.projects.reopenMenu`,
          defaultMessage: `Reopen this menu to refresh project destinations`,
          description: `Native menu hint for refreshing project destinations`,
        },
        noDestinations: {
          id: `chatgptProjectHome.chats.projectActions.noDestinations`,
          defaultMessage: `No other projects`,
          description: `Empty state in a project-home or conversation-header Move to project submenu when no destination projects are available and project creation is not allowed`,
        },
      })));
  }))();
}
export { J as n, $ as r, te as t };
//# sourceMappingURL=conversation-move-menu-items-ce1b35a51a3a.js.map
