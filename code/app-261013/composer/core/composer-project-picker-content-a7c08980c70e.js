import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  IDt as n,
  Mz as ee,
  Nz as r,
  Pxt as i,
  Q$ as a,
  TO as o,
  VDt as s,
  Vxt as c,
  X$ as l,
  Y$ as u,
  Z$ as d,
  bO as f,
  i3 as p,
  ik as m,
  jDt as h,
  r3 as g,
  rk as _,
  vzt as v,
  xMt as y,
  yO as te,
} from "./app-shared-bbfeca5e5737.js";
import {
  AX as ne,
  CLn as b,
  ELn as x,
  NG as S,
  PG as C,
  TLn as w,
  jX as T,
  jYt as E,
  kYt as D,
  lW as O,
  uW as k,
} from "./app-initial-5851df3f6cb1.js";
import {
  Fl as A,
  Gt as j,
  Pl as M,
  Wt as N,
  dt as P,
  ft as F,
  lt as I,
  ut as L,
} from "./app-primary-fe8a450b3b04.js";
function R(e) {
  let t = (0, U.c)(59),
    {
      cloudProjectsEnabled: r,
      workCloudOnly: i,
      isPending: a,
      workspaceProjectOptions: l,
      projectId: f,
      searchQuery: p,
      onSearchQueryChange: m,
      onCreateProject: h,
      onProjectChange: v,
      onSelectProject: y,
      onSelectWorkspaceProject: x,
      onClose: S,
    } = e,
    C = s(),
    T;
  t[0] === r ? (T = t[1]) : ((T = { enabled: r }), (t[0] = r), (t[1] = T));
  let { isError: E, isLoading: k, projects: A } = c(D, T),
    N,
    F,
    L,
    R,
    G;
  if (
    t[2] !== E ||
    t[3] !== k ||
    t[4] !== r ||
    t[5] !== C ||
    t[6] !== a ||
    t[7] !== A ||
    t[8] !== y ||
    t[9] !== f ||
    t[10] !== p ||
    t[11] !== i ||
    t[12] !== l
  ) {
    let e = r ? A : [],
      s;
    (t[18] !== p || t[19] !== l
      ? ((s = l == null ? void 0 : j(l.projects, p, H)), (t[18] = p), (t[19] = l), (t[20] = s))
      : (s = t[20]),
      (L = s),
      (F = j(e, p, V)));
    let c;
    if (
      (t[21] === C
        ? (c = t[22])
        : ((c = C.formatMessage({
            id: `chatgptConversations.composer.projectSelector.clearProject`,
            defaultMessage: `Don't work in a project`,
            description: `Menu item in the composer project picker that clears the selected local or cloud project`,
          })),
          (t[21] = C),
          (t[22] = c)),
      (R = c),
      (N = null),
      r && k)
    ) {
      let e;
      (t[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(o.Message, {
            children: (0, W.jsx)(n, {
              id: `chatgptConversations.composer.projectSelector.loading`,
              defaultMessage: `Loading projects…`,
              description: `Loading message for the cloud project section of the composer project picker`,
            }),
          })),
          (t[23] = e))
        : (e = t[23]),
        (N = e));
    } else if (r && E) {
      let e;
      (t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(o.Message, {
            tone: `error`,
            children: (0, W.jsx)(n, {
              id: `chatgptConversations.composer.projectSelector.error`,
              defaultMessage: `Projects couldn't be loaded`,
              description: `Error message for the cloud project section of the composer project picker`,
            }),
          })),
          (t[24] = e))
        : (e = t[24]),
        (N = e));
    }
    let d;
    (t[25] !== a || t[26] !== y || t[27] !== f || t[28] !== i
      ? ((d = (e) => {
          let t = e.gizmo.display.name.trim() || e.gizmo.id,
            r = e.gizmo.id === f,
            o = i && b(e) !== `open-default` ? O(w(e)) : void 0;
          return (0, W.jsx)(
            M.Item,
            {
              disabled: o != null,
              tooltipText: o == null ? void 0 : (0, W.jsx)(n, { ...o }),
              icon:
                r && a
                  ? (0, W.jsx)(g, { className: `icon-xs` })
                  : (0, W.jsx)(ne, {
                      className: `icon-xs`,
                      size: 16,
                      fallbackIcon: (0, W.jsx)(ee, { className: `shrink-0`, "aria-hidden": !1, asset: u }),
                      isRemoteProject: !1,
                      projectId: e.gizmo.id,
                    }),
              RightIcon: r ? _ : void 0,
              value: e.gizmo.id,
              onSelect: () => {
                y(e.gizmo.id, t);
              },
              children: t,
            },
            e.gizmo.id,
          );
        }),
        (t[25] = a),
        (t[26] = y),
        (t[27] = f),
        (t[28] = i),
        (t[29] = d))
      : (d = t[29]),
      (G = F.map(d)),
      (t[2] = E),
      (t[3] = k),
      (t[4] = r),
      (t[5] = C),
      (t[6] = a),
      (t[7] = A),
      (t[8] = y),
      (t[9] = f),
      (t[10] = p),
      (t[11] = i),
      (t[12] = l),
      (t[13] = N),
      (t[14] = F),
      (t[15] = L),
      (t[16] = R),
      (t[17] = G));
  } else ((N = t[13]), (F = t[14]), (L = t[15]), (R = t[16]), (G = t[17]));
  let K = G,
    q = (L?.length ?? 0) + F.length > 0,
    J;
  t[30] !== S || t[31] !== h || t[32] !== p
    ? ((J =
        h != null && p.trim().length === 0
          ? (0, W.jsx)(M.Action, {
              leftIconAsset: d,
              onClick: () => {
                (h(), S());
              },
              children: (0, W.jsx)(n, {
                id: `chatgptConversations.composer.projectSelector.createProject`,
                defaultMessage: `New project`,
                description: `Menu item in the composer project picker that opens the project creation flow`,
              }),
            })
          : null),
      (t[30] = S),
      (t[31] = h),
      (t[32] = p),
      (t[33] = J))
    : (J = t[33]);
  let Y;
  t[34] !== L || t[35] !== x || t[36] !== f || t[37] !== l
    ? ((Y =
        l == null
          ? null
          : (0, W.jsx)(I, {
              groups: L ?? [],
              selectedProjectIds: f == null ? [] : [f],
              getProjectDetails: B,
              getProjectTooltipText: z,
              onSelectProject: (e) => {
                (l.onSelectProject(e), x());
              },
            })),
      (t[34] = L),
      (t[35] = x),
      (t[36] = f),
      (t[37] = l),
      (t[38] = Y))
    : (Y = t[38]);
  let X;
  t[39] !== K || t[40] !== Y
    ? ((X = (0, W.jsxs)(W.Fragment, { children: [K, Y] })), (t[39] = K), (t[40] = Y), (t[41] = X))
    : (X = t[41]);
  let Z;
  t[42] !== S || t[43] !== v || t[44] !== f || t[45] !== R
    ? ((Z =
        f == null
          ? null
          : (0, W.jsx)(M.Action, {
              LeftIcon: te,
              onClick: () => {
                (v(null, null), S());
              },
              children: R,
            })),
      (t[42] = S),
      (t[43] = v),
      (t[44] = f),
      (t[45] = R),
      (t[46] = Z))
    : (Z = t[46]);
  let Q;
  t[47] !== p || t[48] !== l
    ? ((Q =
        l == null && p.trim().length === 0
          ? (0, W.jsx)(n, {
              id: `chatgptConversations.composer.projectSelector.empty`,
              defaultMessage: `No projects`,
              description: `Empty message for the cloud project section of the composer project picker`,
            })
          : void 0),
      (t[47] = p),
      (t[48] = l),
      (t[49] = Q))
    : (Q = t[49]);
  let $;
  return (
    t[50] !== N ||
    t[51] !== m ||
    t[52] !== p ||
    t[53] !== q ||
    t[54] !== J ||
    t[55] !== X ||
    t[56] !== Z ||
    t[57] !== Q
      ? (($ = (0, W.jsx)(P, {
          searchQuery: p,
          onSearchQueryChange: m,
          hasProjectItems: q,
          headerItems: J,
          projectItems: X,
          status: N,
          footerItems: Z,
          emptyMessage: Q,
        })),
        (t[50] = N),
        (t[51] = m),
        (t[52] = p),
        (t[53] = q),
        (t[54] = J),
        (t[55] = X),
        (t[56] = Z),
        (t[57] = Q),
        (t[58] = $))
      : ($ = t[58]),
    $
  );
}
function z(e) {
  return e.projectKind === `remote` ? e.path : void 0;
}
function B(e) {
  return e.projectKind === `remote`
    ? (0, W.jsx)(`span`, {
        className: `truncate text-sm text-codex-description`,
        children: e.hostDisplayName,
      })
    : (0, W.jsx)(S, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-tertiary opacity-0 group-hover:opacity-100`,
      });
}
function V(e) {
  return [e.gizmo.display.name.trim() || e.gizmo.id, e.gizmo.id];
}
function H(e) {
  return [e.label, e.gitRepos[0]?.rootFolder, e.path, e.hostDisplayName];
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = v()),
      a(),
      l(),
      i(),
      h(),
      A(),
      t(),
      r(),
      p(),
      m(),
      C(),
      f(),
      T(),
      F(),
      N(),
      L(),
      x(),
      E(),
      k(),
      (W = y()));
  }))();
}
G();
export { R as ComposerProjectPickerContent };
//# sourceMappingURL=composer-project-picker-content-a7c08980c70e.js.map
