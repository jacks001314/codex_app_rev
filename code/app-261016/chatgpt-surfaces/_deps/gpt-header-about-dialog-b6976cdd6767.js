import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  LNt as r,
  NSt as i,
  PBt as a,
  Qst as o,
  USt as s,
  ZSt as c,
  iCt as l,
  nCt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  IAr as d,
  IIr as f,
  LIr as p,
  Rtn as m,
  UAr as h,
  aAr as g,
  jcn as _,
  rAr as v,
  wLr as y,
  wcn as b,
  zRr as x,
  ztn as S,
} from "./app-initial-ad16eaadf81f.js";
import { n as C, t as w } from "./gpt-about-dialog-2b97ec4a95df.js";
function T(e) {
  let n = (0, E.c)(12),
    { accountId: r, resource: i, onClose: a } = e,
    c = t(o),
    d = s(),
    p = l(x),
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { preview: !1 }), (n[0] = m)) : (m = n[0]);
  let { data: g } = _(void 0, m),
    y = g?.id === r && g?.structure === `workspace` && g.account_user_role === `account-owner`,
    b = p === r && y,
    C;
  n[1] === b ? (C = n[2]) : ((C = { enabled: b }), (n[1] = b), (n[2] = C));
  let { data: T } = u(f, r ?? ``, C),
    O;
  return (
    n[3] !== r ||
    n[4] !== p ||
    n[5] !== y ||
    n[6] !== d ||
    n[7] !== a ||
    n[8] !== i ||
    n[9] !== c ||
    n[10] !== T?.allow_third_party_gpts
      ? ((O =
          p === r
            ? (0, D.jsx)(w, {
                accountId: r,
                gizmo: i,
                isOwnerAndWorkspaceAllowsSpecific: y && T?.allow_third_party_gpts === `allow_specific`,
                onClose: a,
                onStartChat: (e, t) => {
                  (a(),
                    S(c, null),
                    h(c, `chat`),
                    d(v(e.gizmo.short_url?.trim() || e.gizmo.id), { state: { prefillPrompt: t } }));
                },
              })
            : null),
        (n[3] = r),
        (n[4] = p),
        (n[5] = y),
        (n[6] = d),
        (n[7] = a),
        (n[8] = i),
        (n[9] = c),
        (n[10] = T?.allow_third_party_gpts),
        (n[11] = O))
      : (O = n[11]),
    O
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = a()), c(), i(), y(), p(), b(), d(), m(), n(), C(), g(), (D = r()));
  }))();
}
O();
export { T as GptHeaderAboutDialog };
//# sourceMappingURL=gpt-header-about-dialog-b6976cdd6767.js.map
