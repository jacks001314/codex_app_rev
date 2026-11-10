import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  HO as t,
  IO as n,
  JO as r,
  LNt as i,
  LO as a,
  PBt as o,
  RO as s,
  WO as c,
  XOt as l,
  Y3 as u,
  Z3 as d,
  qO as f,
  tkt as p,
  zO as m,
} from "./app-shared-2feb3d4c6fcc.js";
import { HJ as h, VJ as g } from "./app-initial-ad16eaadf81f.js";
function _(e) {
  let t = (0, v.c)(31),
    { state: r, onConfirm: i, onOpenChange: o, isDeleting: l } = e,
    d = l !== void 0 && l;
  if (r == null) return null;
  let h;
  t[0] !== d || t[1] !== o
    ? ((h = (e) => {
        d || o(e);
      }),
      (t[0] = d),
      (t[1] = o),
      (t[2] = h))
    : (h = t[2]);
  let _;
  t[3] !== d || t[4] !== i
    ? ((_ = (e) => {
        (e.preventDefault(), d || i());
      }),
      (t[3] = d),
      (t[4] = i),
      (t[5] = _))
    : (_ = t[5]);
  let b;
  t[6] === r.kind
    ? (b = t[7])
    : ((b = (0, y.jsx)(m, {
        children: (0, y.jsx)(s, {
          title: (0, y.jsx)(f, {
            children:
              r.kind === `all`
                ? (0, y.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                    defaultMessage: `Delete all archived local chats?`,
                    description: `Title for confirming deletion of all archived local chats`,
                  })
                : r.kind === `project`
                  ? (0, y.jsx)(p, {
                      id: `settings.dataControls.archivedChats.deleteProjectConfirm.title`,
                      defaultMessage: `Delete all in project?`,
                      description: `Title for confirming deletion of archived local chats in one project`,
                    })
                  : (0, y.jsx)(p, {
                      id: `settings.dataControls.archivedChats.deleteConfirm.title`,
                      defaultMessage: `Delete archived chat?`,
                      description: `Title for confirming deletion of an archived chat`,
                    }),
          }),
        }),
      })),
      (t[6] = r.kind),
      (t[7] = b));
  let x;
  t[8] !== r.kind || t[9] !== r.threads
    ? ((x = (0, y.jsx)(m, {
        className: `text-codex-description`,
        children: (0, y.jsx)(`p`, {
          children:
            r.kind === `all`
              ? (0, y.jsx)(p, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                  defaultMessage: `This permanently deletes all local archived chats`,
                  description: `Body copy in the delete all archived local chats confirmation dialog`,
                })
              : r.kind === `project`
                ? (0, y.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteProjectConfirm.body`,
                    defaultMessage: `This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project`,
                    description: `Body copy in the delete archived local chats in project confirmation dialog`,
                    values: { count: r.threads.length },
                  })
                : (0, y.jsx)(p, {
                    id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                    defaultMessage: `This permanently deletes the archived chat`,
                    description: `Body copy in the delete archived chat confirmation dialog`,
                  }),
        }),
      })),
      (t[8] = r.kind),
      (t[9] = r.threads),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] === o
    ? (S = t[12])
    : ((S = () => {
        o(!1);
      }),
      (t[11] = o),
      (t[12] = S));
  let C;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, y.jsx)(p, {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      })),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] !== d || t[15] !== S
    ? ((w = (0, y.jsx)(u, { color: `ghost`, disabled: d, onClick: S, children: C })),
      (t[14] = d),
      (t[15] = S),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, y.jsx)(p, { ...g.delete })), (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] === d
    ? (E = t[19])
    : ((E = (0, y.jsx)(u, { color: `danger`, loading: d, type: `submit`, children: T })),
      (t[18] = d),
      (t[19] = E));
  let D;
  t[20] !== E || t[21] !== w
    ? ((D = (0, y.jsx)(m, { children: (0, y.jsxs)(a, { children: [w, E] }) })),
      (t[20] = E),
      (t[21] = w),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== D || t[24] !== _ || t[25] !== b || t[26] !== x
    ? ((O = (0, y.jsxs)(n, { as: `form`, onSubmit: _, children: [b, x, D] })),
      (t[23] = D),
      (t[24] = _),
      (t[25] = b),
      (t[26] = x),
      (t[27] = O))
    : (O = t[27]);
  let k;
  return (
    t[28] !== O || t[29] !== h
      ? ((k = (0, y.jsx)(c, { open: !0, showDialogClose: !1, onOpenChange: h, children: O })),
        (t[28] = O),
        (t[29] = h),
        (t[30] = k))
      : (k = t[30]),
    k
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = o()), l(), d(), r(), t(), h(), (y = i()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=delete-archived-chats-dialog-26bed4eece2a.js.map
