import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as t,
  Cpn as n,
  Jrt as r,
  Spn as i,
  Xrt as a,
  Yrt as o,
  Zrt as s,
  eit as c,
  hmn as l,
  iit as u,
  kMt as d,
  kmn as f,
  rit as p,
  tit as m,
} from "./app-initial-f094ef01c64d.js";
import { Lm as h, Rm as g } from "./app-primary-4c40d73a1074.js";
function _(e) {
  let t = (0, v.c)(31),
    { state: i, onConfirm: c, onOpenChange: l, isDeleting: u } = e,
    f = u !== void 0 && u;
  if (i == null) return null;
  let g;
  t[0] !== f || t[1] !== l
    ? ((g = (e) => {
        f || l(e);
      }),
      (t[0] = f),
      (t[1] = l),
      (t[2] = g))
    : (g = t[2]);
  let _;
  t[3] !== f || t[4] !== c
    ? ((_ = (e) => {
        (e.preventDefault(), f || c());
      }),
      (t[3] = f),
      (t[4] = c),
      (t[5] = _))
    : (_ = t[5]);
  let b;
  t[6] === i.kind
    ? (b = t[7])
    : ((b = (0, y.jsx)(s, {
        children: (0, y.jsx)(a, {
          title: (0, y.jsx)(p, {
            children:
              i.kind === `all`
                ? (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                    defaultMessage: `Delete all archived local chats?`,
                    description: `Title for confirming deletion of all archived local chats`,
                  })
                : i.kind === `project`
                  ? (0, y.jsx)(n, {
                      id: `settings.dataControls.archivedChats.deleteProjectConfirm.title`,
                      defaultMessage: `Delete all in project?`,
                      description: `Title for confirming deletion of archived local chats in one project`,
                    })
                  : (0, y.jsx)(n, {
                      id: `settings.dataControls.archivedChats.deleteConfirm.title`,
                      defaultMessage: `Delete archived chat?`,
                      description: `Title for confirming deletion of an archived chat`,
                    }),
          }),
        }),
      })),
      (t[6] = i.kind),
      (t[7] = b));
  let x;
  t[8] !== i.kind || t[9] !== i.threads
    ? ((x = (0, y.jsx)(s, {
        className: `text-codex-description`,
        children: (0, y.jsx)(`p`, {
          children:
            i.kind === `all`
              ? (0, y.jsx)(n, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                  defaultMessage: `This permanently deletes all local archived chats`,
                  description: `Body copy in the delete all archived local chats confirmation dialog`,
                })
              : i.kind === `project`
                ? (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteProjectConfirm.body`,
                    defaultMessage: `This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project`,
                    description: `Body copy in the delete archived local chats in project confirmation dialog`,
                    values: { count: i.threads.length },
                  })
                : (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                    defaultMessage: `This permanently deletes the archived chat`,
                    description: `Body copy in the delete archived chat confirmation dialog`,
                  }),
        }),
      })),
      (t[8] = i.kind),
      (t[9] = i.threads),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] === l
    ? (S = t[12])
    : ((S = () => {
        l(!1);
      }),
      (t[11] = l),
      (t[12] = S));
  let C;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, y.jsx)(n, {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      })),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== f || t[15] !== S
    ? ((w = (0, y.jsx)(d, { color: `ghost`, disabled: f, onClick: S, children: C })),
      (t[14] = f),
      (t[15] = S),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, y.jsx)(n, { ...h.delete })), (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] === f
    ? (E = t[19])
    : ((E = (0, y.jsx)(d, { color: `danger`, loading: f, type: `submit`, children: T })),
      (t[18] = f),
      (t[19] = E));
  let D;
  t[20] !== E || t[21] !== w
    ? ((D = (0, y.jsx)(s, { children: (0, y.jsxs)(o, { children: [w, E] }) })),
      (t[20] = E),
      (t[21] = w),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== D || t[24] !== _ || t[25] !== b || t[26] !== x
    ? ((O = (0, y.jsxs)(r, { as: `form`, onSubmit: _, children: [b, x, D] })),
      (t[23] = D),
      (t[24] = _),
      (t[25] = b),
      (t[26] = x),
      (t[27] = O))
    : (O = t[27]);
  let k;
  return (
    t[28] !== O || t[29] !== g
      ? ((k = (0, y.jsx)(m, { open: !0, showDialogClose: !1, onOpenChange: g, children: O })),
        (t[28] = O),
        (t[29] = g),
        (t[30] = k))
      : (k = t[30]),
    k
  );
}
var v,
  y,
  b = e(() => {
    ((v = f()), i(), t(), u(), c(), g(), (y = l()));
  });
export { b as n, _ as t };
//# sourceMappingURL=delete-archived-chats-dialog-b764183e8ea2.js.map
