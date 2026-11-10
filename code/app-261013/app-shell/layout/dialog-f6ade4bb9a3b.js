import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  IDt as r,
  NV as i,
  SG as a,
  TJ as o,
  _O as s,
  cO as c,
  fO as l,
  jDt as u,
  lO as d,
  oO as f,
  sO as p,
  t3 as m,
  vO as h,
  vzt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import { $ct as y, DV as b, EV as x, Xct as S } from "./app-initial-5851df3f6cb1.js";
import { n as C, t as w } from "./role-label-47a44c95e79a.js";
import { n as T, t as E } from "./dialog-bc4066c8ffcf.js";
function D(e) {
  let o = (0, N.c)(45),
    {
      children: l,
      accessChanges: u,
      isMoving: m,
      onlyYou: h,
      accessGained: g,
      accessLost: _,
      destinationName: v,
      defaultDetailsExpanded: y,
      onClose: b,
      onConfirm: x,
    } = e,
    C = m !== void 0 && m,
    w = h !== void 0 && h,
    [T, D] = (0, P.useState)(y !== void 0 && y),
    j = (0, P.useId)(),
    I;
  o[0] !== u || o[1] !== g || o[2] !== _
    ? ((I = u?.length ? u.every(A) : g && !_), (o[0] = u), (o[1] = g), (o[2] = _), (o[3] = I))
    : (I = o[3]);
  let L = I,
    R;
  o[4] !== u || o[5] !== g || o[6] !== _
    ? ((R = u?.length ? u.every(k) : _ && !g), (o[4] = u), (o[5] = g), (o[6] = _), (o[7] = R))
    : (R = o[7]);
  let z = R,
    B;
  if (o[8] !== v || o[9] !== L || o[10] !== z) {
    if (v == null)
      B = (0, F.jsx)(r, {
        id: `codex.space.page.crossSpaceMove.confirm.personalTitle`,
        defaultMessage: `Move to Personal?`,
        description: `Confirmation title before moving a Page and its subtree into the top level of the user's personal Space; permission changes are shown below`,
      });
    else if (L) {
      let e;
      (o[12] === v ? (e = o[13]) : ((e = { destination: v }), (o[12] = v), (o[13] = e)),
        (B = (0, F.jsx)(r, {
          id: `codex.space.page.crossSpaceMove.confirm.shareTitle`,
          defaultMessage: `Move page and share in “{destination}”?`,
          description: `Title of the confirmation shown when moving a Page will share it with people who can access the destination`,
          values: e,
        })));
    } else if (z) {
      let e;
      (o[14] === v ? (e = o[15]) : ((e = { destination: v }), (o[14] = v), (o[15] = e)),
        (B = (0, F.jsx)(r, {
          id: `codex.space.page.crossSpaceMove.confirm.moveToTitle`,
          defaultMessage: `Move to {destination}?`,
          description: `Confirmation title when moving a Page removes access`,
          values: e,
        })));
    } else {
      let e;
      (o[16] === v ? (e = o[17]) : ((e = { destination: v }), (o[16] = v), (o[17] = e)),
        (B = (0, F.jsx)(r, {
          id: `codex.space.page.crossSpaceMove.confirm.accessTitle`,
          defaultMessage: `Move page and change access in “{destination}”?`,
          description: `Title of the confirmation shown when moving a Page will change who can access it`,
          values: e,
        })));
    }
    ((o[8] = v), (o[9] = L), (o[10] = z), (o[11] = B));
  } else B = o[11];
  let V;
  o[18] !== L || o[19] !== z || o[20] !== w
    ? ((V = w
        ? (0, F.jsx)(r, {
            id: `codex.space.page.crossSpaceMove.confirm.onlyYouDescription`,
            defaultMessage: `This page and its children will only be available to you. Existing shares will be removed`,
            description: `Explanation when the move preview confirms that only the owner retains access`,
          })
        : L
          ? (0, F.jsx)(r, {
              id: `codex.space.page.crossSpaceMove.confirm.shareDescription`,
              defaultMessage: `Moving this page will share it with new people`,
              description: `Explanation in the confirmation shown when moving a Page will share it with people who can access the destination`,
            })
          : z
            ? (0, F.jsx)(r, {
                id: `codex.space.page.crossSpaceMove.confirm.removeDescription`,
                defaultMessage: `Moving this page will remove access for some people`,
                description: `Explanation in the confirmation shown when moving a Page will remove access for people who cannot access the destination`,
              })
            : (0, F.jsx)(r, {
                id: `codex.space.page.crossSpaceMove.confirm.changeDescription`,
                defaultMessage: `Moving this page will change access or permission levels`,
                description: `Explanation in the confirmation shown when moving a Page will both add and remove access`,
              })),
      (o[18] = L),
      (o[19] = z),
      (o[20] = w),
      (o[21] = V))
    : (V = o[21]);
  let H;
  if (o[22] !== u || o[23] !== L || o[24] !== w) {
    if (w)
      H = (0, F.jsx)(r, {
        id: `codex.space.page.crossSpaceMove.confirm.onlyYou`,
        defaultMessage: `Only you`,
        description: `Move preview audience summary when only the owner retains access`,
      });
    else if (L) {
      let e;
      (o[26] === u ? (e = o[27]) : ((e = u ?? []), (o[26] = u), (o[27] = e)),
        (H = (0, F.jsx)(M, { changes: e })));
    } else
      H = (0, F.jsx)(r, {
        id: `codex.space.page.crossSpaceMove.confirm.sharingChanges`,
        defaultMessage: `Sharing changes`,
        description: `Expandable summary of a Page move's permission changes`,
      });
    ((o[22] = u), (o[23] = L), (o[24] = w), (o[25] = H));
  } else H = o[25];
  let U;
  o[28] !== C || o[29] !== b
    ? ((U = (e) => {
        !e && !C && b();
      }),
      (o[28] = C),
      (o[29] = b),
      (o[30] = U))
    : (U = o[30]);
  let W;
  o[31] !== u ||
  o[32] !== V ||
  o[33] !== T ||
  o[34] !== C ||
  o[35] !== b ||
  o[36] !== x ||
  o[37] !== j ||
  o[38] !== H ||
  o[39] !== B
    ? ((W = (e) =>
        (0, F.jsxs)(f, {
          as: `form`,
          onSubmit: (e) => {
            (e.preventDefault(), C || x());
          },
          children: [
            (0, F.jsx)(d, {
              children: (0, F.jsx)(c, {
                title: (0, F.jsx)(s, { children: B }),
                titleClassName: `line-clamp-3 break-words pe-8`,
              }),
            }),
            (0, F.jsxs)(d, {
              children: [
                (0, F.jsx)(`p`, { className: `text-secondary`, children: V }),
                (0, F.jsx)(S, {
                  hasInteractiveContent: !0,
                  buttonProps: {
                    "aria-expanded": T,
                    "aria-controls": j,
                    "aria-labelledby": `${j}-summary`,
                    onClick: () => D(!T),
                  },
                  density: `compact`,
                  icon: (0, F.jsx)(a, {}),
                  isSelected: !1,
                  showDivider: !1,
                  rightTextPosition: `center`,
                  rightText: T ? (0, F.jsx)(i, {}) : (0, F.jsx)(n, {}),
                  title: (0, F.jsx)(`span`, { id: `${j}-summary`, children: H }),
                }),
                (0, F.jsx)(`div`, { id: j, hidden: !T, children: u?.map(O) }),
              ],
            }),
            e == null ? null : (0, F.jsx)(d, { children: e }),
            (0, F.jsx)(d, {
              children: (0, F.jsxs)(p, {
                children: [
                  (0, F.jsx)(t, {
                    color: `ghost`,
                    disabled: C,
                    type: `button`,
                    onClick: b,
                    children: (0, F.jsx)(r, {
                      id: `codex.space.page.crossSpaceMove.confirm.cancel`,
                      defaultMessage: `Cancel`,
                      description: `Button that cancels a Page move after its access changes are shown`,
                    }),
                  }),
                  (0, F.jsx)(t, {
                    color: `primary`,
                    loading: C,
                    type: `submit`,
                    children: (0, F.jsx)(r, {
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
      (o[31] = u),
      (o[32] = V),
      (o[33] = T),
      (o[34] = C),
      (o[35] = b),
      (o[36] = x),
      (o[37] = j),
      (o[38] = H),
      (o[39] = B),
      (o[40] = W))
    : (W = o[40]);
  let G;
  return (
    o[41] !== l || o[42] !== U || o[43] !== W
      ? ((G = (0, F.jsx)(E, { diagnostics: l, size: `default`, onOpenChange: U, children: W })),
        (o[41] = l),
        (o[42] = U),
        (o[43] = W),
        (o[44] = G))
      : (G = o[44]),
    G
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
    { change: i, displayName: a } = n,
    o = a ?? i.principal_id,
    s;
  t[0] === i.after_role
    ? (s = t[1])
    : ((s =
        i.after_role == null
          ? (0, F.jsx)(r, {
              id: `codex.space.page.crossSpaceMove.noAccess`,
              defaultMessage: `No access`,
              description: `Resulting sharing role for someone who loses access after a Page move`,
            })
          : (0, F.jsx)(w, { permission: i.after_role })),
      (t[0] = i.after_role),
      (t[1] = s));
  let c;
  return (
    t[2] !== i.principal_id || t[3] !== o || t[4] !== s
      ? ((c = (0, F.jsx)(x, { colorKey: i.principal_id, label: o, trailingContent: s })),
        (t[2] = i.principal_id),
        (t[3] = o),
        (t[4] = s),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function M(e) {
  let t = (0, N.c)(7),
    { changes: n } = e,
    i = n[0]?.displayName,
    a = n[1]?.displayName;
  if (i && a) {
    let e;
    return (
      t[0] !== n.length || t[1] !== i || t[2] !== a
        ? ((e =
            n.length > 2
              ? (0, F.jsx)(r, {
                  id: `codex.space.page.crossSpaceMove.confirm.sharedNamesOthers`,
                  defaultMessage: `Shared with {first}, {second} and {count, plural, one {# other} other {# others}}`,
                  description: `Sharing summary naming the first two recipients and number of remaining recipients`,
                  values: { first: i, second: a, count: n.length - 2 },
                })
              : (0, F.jsx)(r, {
                  id: `codex.space.page.crossSpaceMove.confirm.sharedTwoNames`,
                  defaultMessage: `Shared with {first} and {second}`,
                  description: `Sharing summary naming two recipients`,
                  values: { first: i, second: a },
                })),
          (t[0] = n.length),
          (t[1] = i),
          (t[2] = a),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (i && n.length === 1) {
    let e;
    return (
      t[4] === i
        ? (e = t[5])
        : ((e = (0, F.jsx)(r, {
            id: `codex.space.page.crossSpaceMove.confirm.sharedName`,
            defaultMessage: `Shared with {name}`,
            description: `Sharing summary naming one recipient`,
            values: { name: i },
          })),
          (t[4] = i),
          (t[5] = e)),
      e
    );
  }
  let o;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, F.jsx)(r, {
          id: `codex.space.page.crossSpaceMove.confirm.sharedAccess`,
          defaultMessage: `Shared access`,
          description: `Expandable sharing summary while recipient names are unavailable or include groups`,
        })),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = g()), (P = v()), u(), m(), h(), l(), o(), y(), b(), C(), T(), (F = _()));
  }))();
}
I();
export { D as PageMoveConfirmationDialog };
//# sourceMappingURL=dialog-f6ade4bb9a3b.js.map
