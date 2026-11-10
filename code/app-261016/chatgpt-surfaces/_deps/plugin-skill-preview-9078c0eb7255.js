import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  LNt as n,
  PBt as r,
  XOt as i,
  Y3 as a,
  Z3 as o,
  ZSt as s,
  e6 as c,
  nCt as l,
  tkt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import { $a as d, Xa as f, Ya as p, Za as m } from "./app-initial-ad16eaadf81f.js";
import { n as h, t as g } from "./skill-contents-modal-397984d86aad.js";
import { c as _, t as v } from "./queries-22e0c4d59892.js";
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
      footer: u,
      onCloseAutoFocus: d,
      shouldBlockExternalEgress: p,
      presentation: h,
      onClose: v,
    } = e,
    y = h === void 0 ? `preview` : h,
    C;
  t[0] !== n || t[1] !== r
    ? ((C = { pluginId: n, skillName: r }), (t[0] = n), (t[1] = r), (t[2] = C))
    : (C = t[2]);
  let { data: w, isError: T, isFetching: E, refetch: D } = l(_, C),
    O = w == null ? void 0 : (w.skill_md_contents ?? null),
    k;
  t[3] === D ? (k = t[4]) : ((k = () => void D()), (t[3] = D), (t[4] = k));
  let A = y !== `contents`,
    j;
  t[5] !== T || t[6] !== E || t[7] !== p || t[8] !== O || t[9] !== k || t[10] !== A
    ? ((j = (0, S.jsx)(b, {
        markdown: O,
        isError: T,
        isFetching: E,
        refetch: k,
        shouldBlockExternalEgress: p,
        omitTitle: A,
      })),
      (t[5] = T),
      (t[6] = E),
      (t[7] = p),
      (t[8] = O),
      (t[9] = k),
      (t[10] = A),
      (t[11] = j))
    : (j = t[11]);
  let M = j,
    N = w?.interface?.display_name ?? i,
    P = w?.description ?? a,
    F;
  t[12] === v
    ? (F = t[13])
    : ((F = (e) => {
        e || v();
      }),
      (t[12] = v),
      (t[13] = F));
  let I;
  t[14] !== u || t[15] !== c || t[16] !== o || t[17] !== d || t[18] !== N || t[19] !== P || t[20] !== F
    ? ((I = {
        icon: o,
        title: N,
        description: P,
        headerActions: c,
        footer: u,
        onCloseAutoFocus: d,
        isOpen: !0,
        onOpenChange: F,
      }),
      (t[14] = u),
      (t[15] = c),
      (t[16] = o),
      (t[17] = d),
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
            ? (0, S.jsx)(g, { ...L, name: w?.name ?? r, children: M })
            : (0, S.jsx)(f, {
                ...L,
                iconShape: s,
                children: (0, S.jsx)(m, { scrollClassName: `p-4`, children: M }),
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
  let n = (0, x.c)(19),
    { markdown: r, isError: i, isFetching: o, refetch: s, shouldBlockExternalEgress: c, omitTitle: l } = e,
    d = l !== void 0 && l,
    f = r === void 0,
    m;
  n[0] !== i || n[1] !== f
    ? ((m = f && !i ? (0, S.jsx)(t, {}) : null), (n[0] = i), (n[1] = f), (n[2] = m))
    : (m = n[2]);
  let h;
  n[3] !== i || n[4] !== o || n[5] !== s
    ? ((h = i
        ? (0, S.jsxs)(`div`, {
            role: `alert`,
            children: [
              (0, S.jsx)(u, {
                id: `browserSkills.detailError`,
                defaultMessage: `This skill couldn't be loaded`,
                description: `Skill detail request failure`,
              }),
              (0, S.jsx)(a, {
                loading: o,
                onClick: s,
                children: (0, S.jsx)(u, {
                  id: `browserSkills.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry a failed skills request`,
                }),
              }),
            ],
          })
        : null),
      (n[3] = i),
      (n[4] = o),
      (n[5] = s),
      (n[6] = h))
    : (h = n[6]);
  let g;
  n[7] !== f || n[8] !== r
    ? ((g =
        !f && r == null
          ? (0, S.jsx)(`div`, {
              role: `status`,
              children: (0, S.jsx)(u, {
                id: `skills.card.contentsError`,
                defaultMessage: `Unable to load skill contents.`,
                description: `Error message when a skill file preview fails`,
              }),
            })
          : null),
      (n[7] = f),
      (n[8] = r),
      (n[9] = g))
    : (g = n[9]);
  let _;
  n[10] !== r || n[11] !== d || n[12] !== c
    ? ((_ = r == null ? null : (0, S.jsx)(p, { markdown: r, omitTitle: d, shouldBlockExternalEgress: c })),
      (n[10] = r),
      (n[11] = d),
      (n[12] = c),
      (n[13] = _))
    : (_ = n[13]);
  let v;
  return (
    n[14] !== m || n[15] !== h || n[16] !== g || n[17] !== _
      ? ((v = (0, S.jsxs)(S.Fragment, { children: [m, h, g, _] })),
        (n[14] = m),
        (n[15] = h),
        (n[16] = g),
        (n[17] = _),
        (n[18] = v))
      : (v = n[18]),
    v
  );
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = r()), s(), i(), o(), c(), v(), h(), d(), (S = n()));
  }))();
}
export { b as n, C as r, y as t };
//# sourceMappingURL=plugin-skill-preview-9078c0eb7255.js.map
