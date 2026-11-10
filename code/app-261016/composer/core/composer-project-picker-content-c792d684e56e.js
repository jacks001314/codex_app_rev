import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $1 as t,
  $3 as n,
  DB as r,
  Fk as i,
  Ik as a,
  LNt as o,
  OB as s,
  PBt as c,
  Q1 as l,
  XO as u,
  XOt as d,
  YO as f,
  Z1 as p,
  ZSt as m,
  ck as h,
  e0 as g,
  e6 as _,
  iCt as v,
  okt as ee,
  rk as y,
  tkt as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as x,
  CG as te,
  QBn as ne,
  XBn as S,
  gqt as C,
  nq as w,
  rq as T,
  vQ as E,
  vqt as D,
  wG as O,
  yQ as k,
} from "./app-initial-ad16eaadf81f.js";
import {
  $t as A,
  Gl as j,
  Kl as M,
  en as N,
  gt as P,
  ht as F,
  mt as I,
  pt as L,
} from "./app-primary-3e00728c2a4c.js";
function R(e) {
  let a = (0, U.c)(59),
    {
      cloudProjectsEnabled: o,
      workCloudOnly: s,
      isPending: c,
      workspaceProjectOptions: l,
      projectId: u,
      searchQuery: d,
      onSearchQueryChange: m,
      onCreateProject: h,
      onProjectChange: g,
      onSelectProject: _,
      onSelectWorkspaceProject: x,
      onClose: w,
    } = e,
    T = ee(),
    D;
  a[0] === o ? (D = a[1]) : ((D = { enabled: o }), (a[0] = o), (a[1] = D));
  let { isError: O, isLoading: k, projects: A } = v(C, D),
    M,
    P,
    I,
    R,
    G;
  if (
    a[2] !== O ||
    a[3] !== k ||
    a[4] !== o ||
    a[5] !== T ||
    a[6] !== c ||
    a[7] !== A ||
    a[8] !== _ ||
    a[9] !== u ||
    a[10] !== d ||
    a[11] !== s ||
    a[12] !== l
  ) {
    let e = o ? A : [],
      t;
    (a[18] !== d || a[19] !== l
      ? ((t = l == null ? void 0 : N(l.projects, d, H)), (a[18] = d), (a[19] = l), (a[20] = t))
      : (t = a[20]),
      (I = t),
      (P = N(e, d, V)));
    let f;
    if (
      (a[21] === T
        ? (f = a[22])
        : ((f = T.formatMessage({
            id: `chatgptConversations.composer.projectSelector.clearProject`,
            defaultMessage: `Don't work in a project`,
            description: `Menu item in the composer project picker that clears the selected local or cloud project`,
          })),
          (a[21] = T),
          (a[22] = f)),
      (R = f),
      (M = null),
      o && k)
    ) {
      let e;
      (a[23] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(y.Message, {
            children: (0, W.jsx)(b, {
              id: `chatgptConversations.composer.projectSelector.loading`,
              defaultMessage: `Loading projects…`,
              description: `Loading message for the cloud project section of the composer project picker`,
            }),
          })),
          (a[23] = e))
        : (e = a[23]),
        (M = e));
    } else if (o && O) {
      let e;
      (a[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(y.Message, {
            tone: `error`,
            children: (0, W.jsx)(b, {
              id: `chatgptConversations.composer.projectSelector.error`,
              defaultMessage: `Projects couldn't be loaded`,
              description: `Error message for the cloud project section of the composer project picker`,
            }),
          })),
          (a[24] = e))
        : (e = a[24]),
        (M = e));
    }
    let m;
    (a[25] !== c || a[26] !== _ || a[27] !== u || a[28] !== s
      ? ((m = (e) => {
          let t = e.gizmo.display.name.trim() || e.gizmo.id,
            a = e.gizmo.id === u,
            o = s && S(e) !== `open-default` ? te(ne(e)) : void 0;
          return (0, W.jsx)(
            j.Item,
            {
              disabled: o != null,
              tooltipText: o == null ? void 0 : (0, W.jsx)(b, { ...o }),
              icon:
                a && c
                  ? (0, W.jsx)(n, { className: `icon-xs` })
                  : (0, W.jsx)(E, {
                      className: `icon-xs`,
                      size: 16,
                      fallbackIcon: (0, W.jsx)(r, { className: `shrink-0`, "aria-hidden": !1, asset: p }),
                      isRemoteProject: !1,
                      projectId: e.gizmo.id,
                    }),
              RightIcon: a ? i : void 0,
              value: e.gizmo.id,
              onSelect: () => {
                _(e.gizmo.id, t);
              },
              children: t,
            },
            e.gizmo.id,
          );
        }),
        (a[25] = c),
        (a[26] = _),
        (a[27] = u),
        (a[28] = s),
        (a[29] = m))
      : (m = a[29]),
      (G = P.map(m)),
      (a[2] = O),
      (a[3] = k),
      (a[4] = o),
      (a[5] = T),
      (a[6] = c),
      (a[7] = A),
      (a[8] = _),
      (a[9] = u),
      (a[10] = d),
      (a[11] = s),
      (a[12] = l),
      (a[13] = M),
      (a[14] = P),
      (a[15] = I),
      (a[16] = R),
      (a[17] = G));
  } else ((M = a[13]), (P = a[14]), (I = a[15]), (R = a[16]), (G = a[17]));
  let K = G,
    q = (I?.length ?? 0) + P.length > 0,
    J;
  a[30] !== w || a[31] !== h || a[32] !== d
    ? ((J =
        h != null && d.trim().length === 0
          ? (0, W.jsx)(j.Action, {
              leftIconAsset: t,
              onClick: () => {
                (h(), w());
              },
              children: (0, W.jsx)(b, {
                id: `chatgptConversations.composer.projectSelector.createProject`,
                defaultMessage: `New project`,
                description: `Menu item in the composer project picker that opens the project creation flow`,
              }),
            })
          : null),
      (a[30] = w),
      (a[31] = h),
      (a[32] = d),
      (a[33] = J))
    : (J = a[33]);
  let Y;
  a[34] !== I || a[35] !== x || a[36] !== u || a[37] !== l
    ? ((Y =
        l == null
          ? null
          : (0, W.jsx)(L, {
              groups: I ?? [],
              selectedProjectIds: u == null ? [] : [u],
              getProjectDetails: B,
              getProjectTooltipText: z,
              onSelectProject: (e) => {
                (l.onSelectProject(e), x());
              },
            })),
      (a[34] = I),
      (a[35] = x),
      (a[36] = u),
      (a[37] = l),
      (a[38] = Y))
    : (Y = a[38]);
  let X;
  a[39] !== K || a[40] !== Y
    ? ((X = (0, W.jsxs)(W.Fragment, { children: [K, Y] })), (a[39] = K), (a[40] = Y), (a[41] = X))
    : (X = a[41]);
  let Z;
  a[42] !== w || a[43] !== g || a[44] !== u || a[45] !== R
    ? ((Z =
        u == null
          ? null
          : (0, W.jsx)(j.Action, {
              LeftIcon: f,
              onClick: () => {
                (g(null, null), w());
              },
              children: R,
            })),
      (a[42] = w),
      (a[43] = g),
      (a[44] = u),
      (a[45] = R),
      (a[46] = Z))
    : (Z = a[46]);
  let Q;
  a[47] !== d || a[48] !== l
    ? ((Q =
        l == null && d.trim().length === 0
          ? (0, W.jsx)(b, {
              id: `chatgptConversations.composer.projectSelector.empty`,
              defaultMessage: `No projects`,
              description: `Empty message for the cloud project section of the composer project picker`,
            })
          : void 0),
      (a[47] = d),
      (a[48] = l),
      (a[49] = Q))
    : (Q = a[49]);
  let $;
  return (
    a[50] !== M ||
    a[51] !== m ||
    a[52] !== d ||
    a[53] !== q ||
    a[54] !== J ||
    a[55] !== X ||
    a[56] !== Z ||
    a[57] !== Q
      ? (($ = (0, W.jsx)(F, {
          searchQuery: d,
          onSearchQueryChange: m,
          hasProjectItems: q,
          headerItems: J,
          projectItems: X,
          status: M,
          footerItems: Z,
          emptyMessage: Q,
        })),
        (a[50] = M),
        (a[51] = m),
        (a[52] = d),
        (a[53] = q),
        (a[54] = J),
        (a[55] = X),
        (a[56] = Z),
        (a[57] = Q),
        (a[58] = $))
      : ($ = a[58]),
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
    : (0, W.jsx)(w, {
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
    ((U = c()),
      g(),
      l(),
      m(),
      d(),
      M(),
      h(),
      s(),
      _(),
      a(),
      T(),
      u(),
      k(),
      P(),
      A(),
      I(),
      x(),
      D(),
      O(),
      (W = o()));
  }))();
}
G();
export { R as ComposerProjectPickerContent };
//# sourceMappingURL=composer-project-picker-content-c792d684e56e.js.map
