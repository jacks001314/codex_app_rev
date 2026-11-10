import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IH as r,
  IO as i,
  JO as a,
  LNt as o,
  LO as s,
  PBt as c,
  RO as l,
  TY as u,
  XOt as d,
  Y3 as f,
  Z3 as p,
  kH as m,
  qO as h,
  tkt as g,
  yK as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { aU as y, cV as b, iut as x, lV as S, oU as C, tut as w } from "./app-initial-ad16eaadf81f.js";
import { n as T, t as E } from "./role-label-f76597fae88b.js";
function D(e) {
  let t = (0, N.c)(40),
    {
      children: n,
      accessChanges: a,
      isMoving: o,
      onlyYou: c,
      accessGained: u,
      accessLost: d,
      destinationName: p,
      sourcePageName: y,
      defaultDetailsExpanded: x,
      onClose: S,
      onConfirm: C,
    } = e,
    T = o !== void 0 && o,
    E = c !== void 0 && c,
    [D, j] = (0, P.useState)(x !== void 0 && x),
    I = (0, P.useId)(),
    L;
  t[0] !== a || t[1] !== u || t[2] !== d
    ? ((L = a?.length ? a.every(A) : u && !d), (t[0] = a), (t[1] = u), (t[2] = d), (t[3] = L))
    : (L = t[3]);
  let R = L,
    z;
  t[4] !== a || t[5] !== u || t[6] !== d
    ? ((z = a?.length ? a.every(k) : d && !u), (t[4] = a), (t[5] = u), (t[6] = d), (t[7] = z))
    : (z = t[7]);
  let B = z,
    V;
  t[8] !== p || t[9] !== R || t[10] !== B || t[11] !== y
    ? ((V =
        p == null
          ? (0, F.jsx)(g, {
              id: `codex.space.page.crossSpaceMove.confirm.personalTitle`,
              defaultMessage: `Move to Personal?`,
              description: `Confirmation title before moving a Page and its subtree into the top level of the user's personal Space; permission changes are shown below`,
            })
          : R
            ? y == null
              ? (0, F.jsx)(g, {
                  id: `codex.space.page.crossSpaceMove.confirm.shareTitle`,
                  defaultMessage: `Move page and share in “{destination}”?`,
                  description: `Title of the confirmation shown when moving a Page will share it with people who can access the destination`,
                  values: { destination: p },
                })
              : (0, F.jsx)(g, {
                  id: `codex.space.page.crossSpaceMove.confirm.shareNamedPageTitle`,
                  defaultMessage: `Move “{page}” and share in “{destination}”?`,
                  description: `Confirmation title for one Page in a bulk move that shares it with new people. The page and destination placeholders are their names.`,
                  values: { page: y, destination: p },
                })
            : B
              ? y == null
                ? (0, F.jsx)(g, {
                    id: `codex.space.page.crossSpaceMove.confirm.moveToTitle`,
                    defaultMessage: `Move to {destination}?`,
                    description: `Confirmation title when moving a Page removes access`,
                    values: { destination: p },
                  })
                : (0, F.jsx)(g, {
                    id: `codex.space.page.crossSpaceMove.confirm.moveNamedPageToTitle`,
                    defaultMessage: `Move “{page}” to {destination}?`,
                    description: `Confirmation title for one Page in a bulk move that removes access. The page and destination placeholders are their names.`,
                    values: { page: y, destination: p },
                  })
              : y == null
                ? (0, F.jsx)(g, {
                    id: `codex.space.page.crossSpaceMove.confirm.accessTitle`,
                    defaultMessage: `Move page and change access in “{destination}”?`,
                    description: `Title of the confirmation shown when moving a Page will change who can access it`,
                    values: { destination: p },
                  })
                : (0, F.jsx)(g, {
                    id: `codex.space.page.crossSpaceMove.confirm.changeAccessNamedPageTitle`,
                    defaultMessage: `Move “{page}” and change access in “{destination}”?`,
                    description: `Confirmation title for one Page in a bulk move that changes access. The page and destination placeholders are their names.`,
                    values: { page: y, destination: p },
                  })),
      (t[8] = p),
      (t[9] = R),
      (t[10] = B),
      (t[11] = y),
      (t[12] = V))
    : (V = t[12]);
  let H;
  t[13] !== R || t[14] !== B || t[15] !== E
    ? ((H = E
        ? (0, F.jsx)(g, {
            id: `codex.space.page.crossSpaceMove.confirm.onlyYouDescription`,
            defaultMessage: `This page and its children will only be available to you. Existing shares will be removed`,
            description: `Explanation when the move preview confirms that only the owner retains access`,
          })
        : R
          ? (0, F.jsx)(g, {
              id: `codex.space.page.crossSpaceMove.confirm.shareDescription`,
              defaultMessage: `Moving this page will share it with new people`,
              description: `Explanation in the confirmation shown when moving a Page will share it with people who can access the destination`,
            })
          : B
            ? (0, F.jsx)(g, {
                id: `codex.space.page.crossSpaceMove.confirm.removeDescription`,
                defaultMessage: `Moving this page will remove access for some people`,
                description: `Explanation in the confirmation shown when moving a Page will remove access for people who cannot access the destination`,
              })
            : (0, F.jsx)(g, {
                id: `codex.space.page.crossSpaceMove.confirm.changeDescription`,
                defaultMessage: `Moving this page will change access or permission levels`,
                description: `Explanation in the confirmation shown when moving a Page will both add and remove access`,
              })),
      (t[13] = R),
      (t[14] = B),
      (t[15] = E),
      (t[16] = H))
    : (H = t[16]);
  let U;
  if (t[17] !== a || t[18] !== R || t[19] !== E) {
    if (E)
      U = (0, F.jsx)(g, {
        id: `codex.space.page.crossSpaceMove.confirm.onlyYou`,
        defaultMessage: `Only you`,
        description: `Move preview audience summary when only the owner retains access`,
      });
    else if (R) {
      let e;
      (t[21] === a ? (e = t[22]) : ((e = a ?? []), (t[21] = a), (t[22] = e)),
        (U = (0, F.jsx)(M, { changes: e })));
    } else
      U = (0, F.jsx)(g, {
        id: `codex.space.page.crossSpaceMove.confirm.sharingChanges`,
        defaultMessage: `Sharing changes`,
        description: `Expandable summary of a Page move's permission changes`,
      });
    ((t[17] = a), (t[18] = R), (t[19] = E), (t[20] = U));
  } else U = t[20];
  let W;
  t[23] !== T || t[24] !== S
    ? ((W = (e) => {
        !e && !T && S();
      }),
      (t[23] = T),
      (t[24] = S),
      (t[25] = W))
    : (W = t[25]);
  let G;
  t[26] !== a ||
  t[27] !== H ||
  t[28] !== D ||
  t[29] !== T ||
  t[30] !== S ||
  t[31] !== C ||
  t[32] !== I ||
  t[33] !== U ||
  t[34] !== V
    ? ((G = (e) =>
        (0, F.jsxs)(i, {
          as: `form`,
          onSubmit: (e) => {
            (e.preventDefault(), T || C());
          },
          children: [
            (0, F.jsx)(v, {
              children: (0, F.jsx)(l, {
                title: (0, F.jsx)(h, { children: V }),
                titleClassName: `line-clamp-3 break-words pe-8`,
              }),
            }),
            (0, F.jsxs)(v, {
              children: [
                (0, F.jsx)(`p`, { className: `text-secondary`, children: H }),
                (0, F.jsx)(w, {
                  hasInteractiveContent: !0,
                  buttonProps: {
                    "aria-expanded": D,
                    "aria-controls": I,
                    "aria-labelledby": `${I}-summary`,
                    onClick: () => j(!D),
                  },
                  density: `compact`,
                  icon: (0, F.jsx)(_, {}),
                  isSelected: !1,
                  showDivider: !1,
                  rightTextPosition: `center`,
                  rightText: D ? (0, F.jsx)(m, {}) : (0, F.jsx)(r, {}),
                  title: (0, F.jsx)(`span`, { id: `${I}-summary`, children: U }),
                }),
                (0, F.jsx)(`div`, { id: I, hidden: !D, children: a?.map(O) }),
              ],
            }),
            e == null ? null : (0, F.jsx)(v, { children: e }),
            (0, F.jsx)(v, {
              children: (0, F.jsxs)(s, {
                children: [
                  (0, F.jsx)(f, {
                    color: `ghost`,
                    disabled: T,
                    type: `button`,
                    onClick: S,
                    children: (0, F.jsx)(g, {
                      id: `codex.space.page.crossSpaceMove.confirm.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels a Page move after its access changes are shown`,
                    }),
                  }),
                  (0, F.jsx)(f, {
                    color: `primary`,
                    loading: T,
                    type: `submit`,
                    children: (0, F.jsx)(g, {
                      id: `codex.space.page.crossSpaceMove.confirm.move`,
                      defaultMessage: `Move page`,
                      description: `Button that confirms a Page move after its access changes are shown`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        })),
      (t[26] = a),
      (t[27] = H),
      (t[28] = D),
      (t[29] = T),
      (t[30] = S),
      (t[31] = C),
      (t[32] = I),
      (t[33] = U),
      (t[34] = V),
      (t[35] = G))
    : (G = t[35]);
  let K;
  return (
    t[36] !== n || t[37] !== W || t[38] !== G
      ? ((K = (0, F.jsx)(b, { diagnostics: n, size: `default`, onOpenChange: W, children: G })),
        (t[36] = n),
        (t[37] = W),
        (t[38] = G),
        (t[39] = K))
      : (K = t[39]),
    K
  );
}
function O(e) {
  return (0, F.jsx)(j, { entry: e }, `${e.change.principal_type}:${e.change.principal_id}`);
}
function k(e) {
  let { change: t } = e;
  return t.after_role == null;
}
function A(e) {
  let { change: t } = e;
  return t.before_role == null;
}
function j(e) {
  let t = (0, N.c)(6),
    { entry: n } = e,
    { change: r, displayName: i } = n,
    a = i ?? r.principal_id,
    o;
  t[0] === r.after_role
    ? (o = t[1])
    : ((o =
        r.after_role == null
          ? (0, F.jsx)(g, {
              id: `codex.space.page.crossSpaceMove.noAccess`,
              defaultMessage: `No access`,
              description: `Resulting sharing role for someone who loses access after a Page move`,
            })
          : (0, F.jsx)(E, { permission: r.after_role })),
      (t[0] = r.after_role),
      (t[1] = o));
  let s;
  return (
    t[2] !== r.principal_id || t[3] !== a || t[4] !== o
      ? ((s = (0, F.jsx)(y, { colorKey: r.principal_id, label: a, trailingContent: o })),
        (t[2] = r.principal_id),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function M(e) {
  let t = (0, N.c)(7),
    { changes: n } = e,
    r = n[0]?.displayName,
    i = n[1]?.displayName;
  if (r && i) {
    let e;
    return (
      t[0] !== n.length || t[1] !== r || t[2] !== i
        ? ((e =
            n.length > 2
              ? (0, F.jsx)(g, {
                  id: `codex.space.page.crossSpaceMove.confirm.sharedNamesOthers`,
                  defaultMessage: `Shared with {first}, {second} and {count, plural, one {# other} other {# others}}`,
                  description: `Sharing summary naming the first two recipients and number of remaining recipients`,
                  values: { first: r, second: i, count: n.length - 2 },
                })
              : (0, F.jsx)(g, {
                  id: `codex.space.page.crossSpaceMove.confirm.sharedTwoNames`,
                  defaultMessage: `Shared with {first} and {second}`,
                  description: `Sharing summary naming two recipients`,
                  values: { first: r, second: i },
                })),
          (t[0] = n.length),
          (t[1] = r),
          (t[2] = i),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (r && n.length === 1) {
    let e;
    return (
      t[4] === r
        ? (e = t[5])
        : ((e = (0, F.jsx)(g, {
            id: `codex.space.page.crossSpaceMove.confirm.sharedName`,
            defaultMessage: `Shared with {name}`,
            description: `Sharing summary naming one recipient`,
            values: { name: r },
          })),
          (t[4] = r),
          (t[5] = e)),
      e
    );
  }
  let a;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, F.jsx)(g, {
          id: `codex.space.page.crossSpaceMove.confirm.sharedAccess`,
          defaultMessage: `Shared access`,
          description: `Expandable sharing summary while recipient names are unavailable or include groups`,
        })),
        (t[6] = a))
      : (a = t[6]),
    a
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = c()), (P = t()), d(), p(), a(), n(), u(), x(), C(), T(), S(), (F = o()));
  }))();
}
I();
export { D as PageMoveConfirmationDialog };
//# sourceMappingURL=dialog-c3e9fa23add3.js.map
