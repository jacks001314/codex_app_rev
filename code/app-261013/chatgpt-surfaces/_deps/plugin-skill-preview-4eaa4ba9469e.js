import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  i3 as i,
  jDt as a,
  r3 as o,
  t3 as s,
  vzt as c,
  xMt as l,
  zxt as u,
} from "./app-shared-bbfeca5e5737.js";
import { Ja as d, Ya as f, Za as p, qa as m } from "./app-initial-5851df3f6cb1.js";
import { c as h, t as g } from "./queries-81f7f581f0b1.js";
import { n as _, t as v } from "./skill-contents-modal-52141f15cafc.js";
function y(e) {
  let t = (0, x.c)(29),
    {
      pluginId: n,
      skillName: r,
      title: i,
      description: a,
      icon: o,
      iconShape: s,
      headerActions: c,
      footer: l,
      onCloseAutoFocus: p,
      shouldBlockExternalEgress: m,
      presentation: g,
      onClose: _,
    } = e,
    y = g === void 0 ? `preview` : g,
    C;
  t[0] !== n || t[1] !== r
    ? ((C = { pluginId: n, skillName: r }), (t[0] = n), (t[1] = r), (t[2] = C))
    : (C = t[2]);
  let { data: w, isError: T, isFetching: E, refetch: D } = u(h, C),
    O = w == null ? void 0 : (w.skill_md_contents ?? null),
    k;
  t[3] === D ? (k = t[4]) : ((k = () => void D()), (t[3] = D), (t[4] = k));
  let A = y !== `contents`,
    j;
  t[5] !== T || t[6] !== E || t[7] !== m || t[8] !== O || t[9] !== k || t[10] !== A
    ? ((j = (0, S.jsx)(b, {
        markdown: O,
        isError: T,
        isFetching: E,
        refetch: k,
        shouldBlockExternalEgress: m,
        omitTitle: A,
      })),
      (t[5] = T),
      (t[6] = E),
      (t[7] = m),
      (t[8] = O),
      (t[9] = k),
      (t[10] = A),
      (t[11] = j))
    : (j = t[11]);
  let M = j,
    N = w?.interface?.display_name ?? i,
    P = w?.description ?? a,
    F;
  t[12] === _
    ? (F = t[13])
    : ((F = (e) => {
        e || _();
      }),
      (t[12] = _),
      (t[13] = F));
  let I;
  t[14] !== l || t[15] !== c || t[16] !== o || t[17] !== p || t[18] !== N || t[19] !== P || t[20] !== F
    ? ((I = {
        icon: o,
        title: N,
        description: P,
        headerActions: c,
        footer: l,
        onCloseAutoFocus: p,
        isOpen: !0,
        onOpenChange: F,
      }),
      (t[14] = l),
      (t[15] = c),
      (t[16] = o),
      (t[17] = p),
      (t[18] = N),
      (t[19] = P),
      (t[20] = F),
      (t[21] = I))
    : (I = t[21]);
  let L = I,
    R;
  return (
    t[22] !== M || t[23] !== s || t[24] !== L || t[25] !== y || t[26] !== w?.name || t[27] !== r
      ? ((R =
          y === `contents`
            ? (0, S.jsx)(v, { ...L, name: w?.name ?? r, children: M })
            : (0, S.jsx)(d, {
                ...L,
                iconShape: s,
                children: (0, S.jsx)(f, { scrollClassName: `p-4`, children: M }),
              })),
        (t[22] = M),
        (t[23] = s),
        (t[24] = L),
        (t[25] = y),
        (t[26] = w?.name),
        (t[27] = r),
        (t[28] = R))
      : (R = t[28]),
    R
  );
}
function b(e) {
  let r = (0, x.c)(19),
    { markdown: i, isError: a, isFetching: s, refetch: c, shouldBlockExternalEgress: l, omitTitle: u } = e,
    d = u !== void 0 && u,
    f = i === void 0,
    p;
  r[0] !== a || r[1] !== f
    ? ((p = f && !a ? (0, S.jsx)(o, {}) : null), (r[0] = a), (r[1] = f), (r[2] = p))
    : (p = r[2]);
  let h;
  r[3] !== a || r[4] !== s || r[5] !== c
    ? ((h = a
        ? (0, S.jsxs)(`div`, {
            role: `alert`,
            children: [
              (0, S.jsx)(n, {
                id: `browserSkills.detailError`,
                defaultMessage: `This skill couldn't be loaded`,
                description: `Skill detail request failure`,
              }),
              (0, S.jsx)(t, {
                loading: s,
                onClick: c,
                children: (0, S.jsx)(n, {
                  id: `browserSkills.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry a failed skills request`,
                }),
              }),
            ],
          })
        : null),
      (r[3] = a),
      (r[4] = s),
      (r[5] = c),
      (r[6] = h))
    : (h = r[6]);
  let g;
  r[7] !== f || r[8] !== i
    ? ((g =
        !f && i == null
          ? (0, S.jsx)(`div`, {
              role: `status`,
              children: (0, S.jsx)(n, {
                id: `skills.card.contentsError`,
                defaultMessage: `Unable to load skill contents.`,
                description: `Error message when a skill file preview fails`,
              }),
            })
          : null),
      (r[7] = f),
      (r[8] = i),
      (r[9] = g))
    : (g = r[9]);
  let _;
  r[10] !== i || r[11] !== d || r[12] !== l
    ? ((_ = i == null ? null : (0, S.jsx)(m, { markdown: i, omitTitle: d, shouldBlockExternalEgress: l })),
      (r[10] = i),
      (r[11] = d),
      (r[12] = l),
      (r[13] = _))
    : (_ = r[13]);
  let v;
  return (
    r[14] !== p || r[15] !== h || r[16] !== g || r[17] !== _
      ? ((v = (0, S.jsxs)(S.Fragment, { children: [p, h, g, _] })),
        (r[14] = p),
        (r[15] = h),
        (r[16] = g),
        (r[17] = _),
        (r[18] = v))
      : (v = r[18]),
    v
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = c()), r(), a(), s(), i(), g(), _(), p(), (S = l()));
  }))();
}
export { b as n, C as r, y as t };
//# sourceMappingURL=plugin-skill-preview-4eaa4ba9469e.js.map
