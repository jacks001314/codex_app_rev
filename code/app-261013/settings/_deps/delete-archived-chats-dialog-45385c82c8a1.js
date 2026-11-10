import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  _O as r,
  cO as i,
  fO as a,
  jDt as o,
  lO as s,
  mO as c,
  oO as l,
  sO as u,
  t3 as d,
  vO as f,
  vzt as p,
  xMt as m,
} from "./app-shared-bbfeca5e5737.js";
import { vq as h, yq as g } from "./app-initial-5851df3f6cb1.js";
function _(e) {
  let a = (0, v.c)(31),
    { state: o, onConfirm: d, onOpenChange: f, isDeleting: p } = e,
    m = p !== void 0 && p;
  if (o == null) return null;
  let g;
  a[0] !== m || a[1] !== f
    ? ((g = (e) => {
        m || f(e);
      }),
      (a[0] = m),
      (a[1] = f),
      (a[2] = g))
    : (g = a[2]);
  let _;
  a[3] !== m || a[4] !== d
    ? ((_ = (e) => {
        (e.preventDefault(), m || d());
      }),
      (a[3] = m),
      (a[4] = d),
      (a[5] = _))
    : (_ = a[5]);
  let b;
  a[6] === o.kind
    ? (b = a[7])
    : ((b = (0, y.jsx)(s, {
        children: (0, y.jsx)(i, {
          title: (0, y.jsx)(r, {
            children:
              o.kind === `all`
                ? (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteAllConfirm.title`,
                    defaultMessage: `Delete all archived local chats?`,
                    description: `Title for confirming deletion of all archived local chats`,
                  })
                : o.kind === `project`
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
      (a[6] = o.kind),
      (a[7] = b));
  let x;
  a[8] !== o.kind || a[9] !== o.threads
    ? ((x = (0, y.jsx)(s, {
        className: `text-codex-description`,
        children: (0, y.jsx)(`p`, {
          children:
            o.kind === `all`
              ? (0, y.jsx)(n, {
                  id: `settings.dataControls.archivedChats.deleteAllConfirm.body`,
                  defaultMessage: `This permanently deletes all local archived chats`,
                  description: `Body copy in the delete all archived local chats confirmation dialog`,
                })
              : o.kind === `project`
                ? (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteProjectConfirm.body`,
                    defaultMessage: `This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project`,
                    description: `Body copy in the delete archived local chats in project confirmation dialog`,
                    values: { count: o.threads.length },
                  })
                : (0, y.jsx)(n, {
                    id: `settings.dataControls.archivedChats.deleteConfirm.body`,
                    defaultMessage: `This permanently deletes the archived chat`,
                    description: `Body copy in the delete archived chat confirmation dialog`,
                  }),
        }),
      })),
      (a[8] = o.kind),
      (a[9] = o.threads),
      (a[10] = x))
    : (x = a[10]);
  let S;
  a[11] === f
    ? (S = a[12])
    : ((S = () => {
        f(!1);
      }),
      (a[11] = f),
      (a[12] = S));
  let C;
  a[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, y.jsx)(n, {
        id: `settings.dataControls.archivedChats.deleteConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for deleting archived chats`,
      })),
      (a[13] = C))
    : (C = a[13]);
  let w;
  a[14] !== m || a[15] !== S
    ? ((w = (0, y.jsx)(t, { color: `ghost`, disabled: m, onClick: S, children: C })),
      (a[14] = m),
      (a[15] = S),
      (a[16] = w))
    : (w = a[16]);
  let T;
  a[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, y.jsx)(n, { ...h.delete })), (a[17] = T))
    : (T = a[17]);
  let E;
  a[18] === m
    ? (E = a[19])
    : ((E = (0, y.jsx)(t, { color: `danger`, loading: m, type: `submit`, children: T })),
      (a[18] = m),
      (a[19] = E));
  let D;
  a[20] !== E || a[21] !== w
    ? ((D = (0, y.jsx)(s, { children: (0, y.jsxs)(u, { children: [w, E] }) })),
      (a[20] = E),
      (a[21] = w),
      (a[22] = D))
    : (D = a[22]);
  let O;
  a[23] !== D || a[24] !== _ || a[25] !== b || a[26] !== x
    ? ((O = (0, y.jsxs)(l, { as: `form`, onSubmit: _, children: [b, x, D] })),
      (a[23] = D),
      (a[24] = _),
      (a[25] = b),
      (a[26] = x),
      (a[27] = O))
    : (O = a[27]);
  let k;
  return (
    a[28] !== O || a[29] !== g
      ? ((k = (0, y.jsx)(c, { open: !0, showDialogClose: !1, onOpenChange: g, children: O })),
        (a[28] = O),
        (a[29] = g),
        (a[30] = k))
      : (k = a[30]),
    k
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = p()), o(), d(), f(), a(), g(), (y = m()));
  }))();
}
export { b as n, _ as t };
//# sourceMappingURL=delete-archived-chats-dialog-45385c82c8a1.js.map
