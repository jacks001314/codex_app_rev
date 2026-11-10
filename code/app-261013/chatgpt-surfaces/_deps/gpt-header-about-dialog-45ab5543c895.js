import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ext as n,
  Ixt as r,
  Pxt as i,
  Vxt as a,
  _xt as o,
  vzt as s,
  wot as c,
  xMt as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bun as d,
  Fin as f,
  GMr as p,
  Hin as m,
  TEr as h,
  VTr as g,
  Vun as _,
  dMr as v,
  fMr as y,
  tNr as b,
  vEr as x,
  zTr as S,
} from "./app-initial-5851df3f6cb1.js";
import { n as C, t as w } from "./gpt-about-dialog-b86bfd728257.js";
function T(e) {
  let i = (0, E.c)(12),
    { accountId: o, resource: s, onClose: c } = e,
    l = r(t),
    d = n(),
    f = a(p),
    g;
  i[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { preview: !1 }), (i[0] = g)) : (g = i[0]);
  let { data: y } = m(void 0, g),
    b = y?.id === o && y?.structure === `workspace` && y.account_user_role === `account-owner`,
    x = f === o && b,
    C;
  i[1] === x ? (C = i[2]) : ((C = { enabled: x }), (i[1] = x), (i[2] = C));
  let { data: T } = u(v, o ?? ``, C),
    O;
  return (
    i[3] !== o ||
    i[4] !== f ||
    i[5] !== b ||
    i[6] !== d ||
    i[7] !== c ||
    i[8] !== s ||
    i[9] !== l ||
    i[10] !== T?.allow_third_party_gpts
      ? ((O =
          f === o
            ? (0, D.jsx)(w, {
                accountId: o,
                gizmo: s,
                isOwnerAndWorkspaceAllowsSpecific: b && T?.allow_third_party_gpts === `allow_specific`,
                onClose: c,
                onStartChat: (e, t) => {
                  (c(),
                    _(l, null),
                    h(l, `chat`),
                    d(S(e.gizmo.short_url?.trim() || e.gizmo.id), { state: { prefillPrompt: t } }));
                },
              })
            : null),
        (i[3] = o),
        (i[4] = f),
        (i[5] = b),
        (i[6] = d),
        (i[7] = c),
        (i[8] = s),
        (i[9] = l),
        (i[10] = T?.allow_third_party_gpts),
        (i[11] = O))
      : (O = i[11]),
    O
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = s()), i(), o(), b(), y(), f(), x(), d(), c(), C(), g(), (D = l()));
  }))();
}
O();
export { T as GptHeaderAboutDialog };
//# sourceMappingURL=gpt-header-about-dialog-45ab5543c895.js.map
