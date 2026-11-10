import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  CNt as i,
  LNt as a,
  NSt as o,
  PBt as s,
  Qst as c,
  TY as l,
  USt as u,
  Vrt as d,
  WK as f,
  XOt as p,
  YOt as m,
  ZSt as h,
  ZU as g,
  aW as ee,
  ck as _,
  iCt as v,
  qrt as y,
  rk as b,
  tkt as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as S,
  Aan as C,
  CG as w,
  CIr as T,
  Dan as E,
  Ean as te,
  Gen as D,
  Jbn as O,
  Jzt as k,
  QBn as A,
  Qln as j,
  SIr as M,
  Wen as N,
  Ybn as P,
  Zkr as F,
  cq as I,
  eAr as L,
  hun as R,
  iBn as z,
  kan as B,
  nVn as V,
  oun as H,
  qzt as U,
  sBn as W,
  uq as G,
  wG as K,
} from "./app-initial-ad16eaadf81f.js";
function q(e) {
  let t = (0, Y.c)(12),
    { conversation: r, onCreateProjectDialogCloseAutoFocus: i, project: a, showMoveToProject: o } = e,
    s = o === void 0 || o,
    l = n(c),
    d = u(),
    f = v(z),
    p = v(j),
    m = D(),
    h;
  if (
    t[0] !== r ||
    t[1] !== d ||
    t[2] !== i ||
    t[3] !== p ||
    t[4] !== a ||
    t[5] !== m ||
    t[6] !== f ||
    t[7] !== l ||
    t[8] !== s
  ) {
    let e = J({
        scope: l,
        conversation: r,
        project: a,
        projectListQuery: f,
        pinnedProjectsQuery: p,
        showMoveToProject: s,
        projectCrudStatus: m,
        navigate: d,
        onCreateProjectDialogCloseAutoFocus: i,
      }),
      n = (e) => {
        if (e.type === `separator`) return (0, Z.jsx)(b.Separator, {}, e.id);
        let t = e.message ? (0, Z.jsx)(x, { ...e.message, values: e.messageValues }) : e.id,
          r = e.tooltipMessage
            ? (0, Z.jsx)(x, { ...e.tooltipMessage, values: e.tooltipMessageValues })
            : void 0;
        return e.submenu == null
          ? (0, Z.jsx)(
              b.Item,
              {
                LeftIcon: typeof e.icon == `function` ? e.icon : void 0,
                leftIcon: typeof e.icon == `object` ? e.icon : void 0,
                disabled: e.enabled === !1,
                tooltipSide: `bottom`,
                tooltipSideOffset: 8,
                tooltipText: r,
                onSelect: (t) => {
                  (e.closeOnSelect === !1 && t.preventDefault(), e.onSelect?.());
                },
                children: t,
              },
              e.id,
            )
          : (0, Z.jsx)(
              b.FlyoutSubmenuItem,
              {
                LeftIcon: typeof e.icon == `function` ? e.icon : void 0,
                disabled: e.enabled === !1,
                tooltipSide: `bottom`,
                tooltipSideOffset: 8,
                label: t,
                tooltipText: r,
                children: e.submenu.map(n),
              },
              e.id,
            );
      };
    ((h = e.map(n)),
      (t[0] = r),
      (t[1] = d),
      (t[2] = i),
      (t[3] = p),
      (t[4] = a),
      (t[5] = m),
      (t[6] = f),
      (t[7] = l),
      (t[8] = s),
      (t[9] = h));
  } else h = t[9];
  let g;
  return (
    t[10] === h ? (g = t[11]) : ((g = (0, Z.jsx)(Z.Fragment, { children: h })), (t[10] = h), (t[11] = g)),
    g
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
  let { isWorkConversation: u, sourceMemoryBlocked: d } = I(t, n),
    p = d ? O.projectOnlyMoveUnavailable : void 0,
    { data: m, isPending: h, isError: _ } = r,
    { data: v, isPending: b, isError: x } = i,
    S = (0, X.default)(
      [
        ...(v ?? []).map((e) => e.item),
        ...(m?.pages.flatMap((e) => e.items.map((e) => e.gizmo)) ?? []),
      ].filter(V),
      (e) => e.gizmo.id,
    ).filter((e) => e.gizmo.id !== n?.gizmo.id && e.gizmo.gizmo_snorlax_type == null),
    C = s === `allowed`,
    E = (n, r) => {
      R({ scope: e, conversationId: t.id, projectId: n.gizmo.id })
        .then(r)
        .catch(() => {
          e.get(y).danger(e.get(T).formatMessage(Q.moveFailed), {
            errorAnalytics: { toastId: `move_conversation_to_snorlax_error` },
          });
        });
    },
    D = [];
  C &&
    (D.push({
      id: `new-chatgpt-project`,
      icon: f,
      message: Q.newProject,
      selectAfterClose: !0,
      onSelect: () => {
        k(
          e,
          (e) => {
            E(e, () => {
              c(F(e.gizmo.id));
            });
          },
          { allowLocalProjectCreation: !1, forceGlobalMemory: u, onCloseAutoFocus: l },
        );
      },
    }),
    S.length > 0 && D.push({ id: `new-project-separator`, type: `separator` }));
  for (let e of S) {
    let { targetMemoryBlocked: n } = I(t, void 0, e),
      r = n ? w(A(e)) : void 0;
    D.push({
      id: `move-to-project:${e.gizmo.id}`,
      icon: (0, Z.jsx)(te, {
        className: `icon-xs`,
        size: 16,
        color: e.gizmo.display.theme,
        fallbackIcon: (0, Z.jsx)(g, {}),
        icon: e.gizmo.display.emoji,
      }),
      nativeIcon: B(e.gizmo.display.emoji),
      message: Q.projectName,
      messageValues: { projectName: e.gizmo.display.name },
      enabled: r == null,
      tooltipMessage: r,
      onSelect: () => {
        (E(e), c(F(e.gizmo.id)));
      },
    });
  }
  return (
    o && (_ || x)
      ? D.push({
          id: `retry-project-destinations`,
          message: Q.destinationsFailed,
          closeOnSelect: !1,
          onSelect: () => {
            Promise.all([e.query.invalidate(z), e.query.invalidate(j)]);
          },
        })
      : o && (h || b)
        ? D.push({
            id: `loading-project-destinations`,
            message: Q.loading,
            tooltipMessage: Q.reopen,
            enabled: !1,
          })
        : !_ &&
          !x &&
          !h &&
          !b &&
          S.length === 0 &&
          !C &&
          D.push({ id: `no-project-destinations`, message: Q.noDestinations, enabled: !1 }),
    [
      ...(a && D.length > 0
        ? [
            {
              id: `move-to-project`,
              icon: g,
              message: Q.moveToProject,
              enabled: !d,
              tooltipMessage: p,
              submenu: D,
            },
          ]
        : []),
      ...(n == null
        ? []
        : [
            {
              id: `remove-from-project`,
              icon: ee,
              message: Q.removeFromProject,
              enabled: !d,
              tooltipMessage: p,
              onSelect: () => {
                R({ scope: e, conversationId: t.id, projectId: null }).catch(() => {
                  e.get(y).danger(e.get(T).formatMessage(Q.removeFailed), {
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
    ((Y = s()),
      (X = t(i(), 1)),
      h(),
      p(),
      o(),
      _(),
      l(),
      d(),
      M(),
      C(),
      E(),
      r(),
      P(),
      W(),
      S(),
      U(),
      H(),
      N(),
      K(),
      G(),
      L(),
      (Z = a()),
      (Q = m({
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
export { J as n, $ as r, q as t };
//# sourceMappingURL=conversation-move-menu-items-cf03ea37d5ff.js.map
