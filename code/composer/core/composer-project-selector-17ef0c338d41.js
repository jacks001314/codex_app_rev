import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $qt as t,
  A3t as n,
  F3t as r,
  N3t as i,
  O3t as a,
  RF as o,
  a3t as s,
  ah as c,
  fKt as l,
  hmn as u,
  ih as d,
  kmn as f,
  mR as p,
  o3t as m,
  pR as h,
  qqt as g,
  yKt as _,
  zF as v,
} from "./app-initial-f094ef01c64d.js";
import {
  Fb as y,
  Nb as b,
  Pb as x,
  ah as S,
  fp as C,
  ia as w,
  ih as T,
  oh as E,
  pp as D,
  ra as O,
  rh as k,
} from "./app-primary-4c40d73a1074.js";
function A(e) {
  let n = (0, M.c)(23),
    {
      projectId: i,
      projectName: a,
      projectlessTriggerLabel: o,
      menuOpen: s,
      onMenuOpenChange: c,
      shortcut: l,
      subtleHover: u,
      triggerButton: d,
      variant: f,
      onProjectChange: p,
    } = e,
    m = a === void 0 ? null : a,
    h = r(t),
    g = i;
  if ((g === void 0 && (g = h?.type === `local` ? h.projectId : null), p != null)) {
    let e;
    n[0] === g ? (e = n[1]) : ((e = g?.startsWith(`g-p-`) ? g : null), (n[0] = g), (n[1] = e));
    let t;
    return (
      n[2] !== s ||
      n[3] !== c ||
      n[4] !== p ||
      n[5] !== m ||
      n[6] !== o ||
      n[7] !== l ||
      n[8] !== u ||
      n[9] !== e ||
      n[10] !== d ||
      n[11] !== f
        ? ((t = (0, N.jsx)(O, {
            projectId: e,
            projectName: m,
            projectlessTriggerLabel: o,
            menuOpen: s,
            onMenuOpenChange: c,
            shortcut: l,
            subtleHover: u,
            triggerButton: d,
            variant: f,
            onProjectChange: p,
          })),
          (n[2] = s),
          (n[3] = c),
          (n[4] = p),
          (n[5] = m),
          (n[6] = o),
          (n[7] = l),
          (n[8] = u),
          (n[9] = e),
          (n[10] = d),
          (n[11] = f),
          (n[12] = t))
        : (t = n[12]),
      t
    );
  }
  let _;
  return (
    n[13] !== s ||
    n[14] !== c ||
    n[15] !== g ||
    n[16] !== m ||
    n[17] !== o ||
    n[18] !== l ||
    n[19] !== u ||
    n[20] !== d ||
    n[21] !== f
      ? ((_ = (0, N.jsx)(j, {
          projectId: g,
          projectName: m,
          projectlessTriggerLabel: o,
          menuOpen: s,
          onMenuOpenChange: c,
          shortcut: l,
          subtleHover: u,
          triggerButton: d,
          variant: f,
        })),
        (n[13] = s),
        (n[14] = c),
        (n[15] = g),
        (n[16] = m),
        (n[17] = o),
        (n[18] = l),
        (n[19] = u),
        (n[20] = d),
        (n[21] = f),
        (n[22] = _))
      : (_ = n[22]),
    _
  );
}
function j(e) {
  let t = (0, M.c)(30),
    {
      projectId: a,
      projectName: o,
      projectlessTriggerLabel: l,
      menuOpen: u,
      onMenuOpenChange: d,
      shortcut: f,
      subtleHover: p,
      triggerButton: m,
      variant: g,
    } = e,
    x = n(s),
    S = r(D),
    C = r(b),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = { name: `chatgpt` }), (t[0] = w))
    : (w = t[0]);
  let k = i(h, w),
    A = r(_),
    j = T(),
    P = k.isCapable,
    F;
  t[1] === x
    ? (F = t[2])
    : ((F = (e, t) => {
        y(x, e == null ? null : { projectId: e, projectName: t });
      }),
      (t[1] = x),
      (t[2] = F));
  let I = F,
    L;
  if (!k.isLoading && !k.isCapable && A) {
    let e;
    (t[3] === x
      ? (e = t[4])
      : ((e = () => {
          c(x);
        }),
        (t[3] = x),
        (t[4] = e)),
      (L = e));
  } else if (P && j === `allowed`) {
    let e;
    (t[5] !== I || t[6] !== x
      ? ((e = () => {
          E(x, (e) => {
            I(e.gizmo.id, e.gizmo.display.name.trim() || e.gizmo.id);
          });
        }),
        (t[5] = I),
        (t[6] = x),
        (t[7] = e))
      : (e = t[7]),
      (L = e));
  }
  let R;
  t[8] !== a || t[9] !== C
    ? ((R = a != null && C.includes(a)), (t[8] = a), (t[9] = C), (t[10] = R))
    : (R = t[10]);
  let z;
  t[11] !== S || t[12] !== x || t[13] !== A
    ? ((z = A
        ? {
            projects: S,
            onSelectProject: (e) => {
              v(x, { ...e, projectKind: `local` });
            },
          }
        : void 0),
      (t[11] = S),
      (t[12] = x),
      (t[13] = A),
      (t[14] = z))
    : (z = t[14]);
  let B;
  return (
    t[15] !== P ||
    t[16] !== I ||
    t[17] !== u ||
    t[18] !== L ||
    t[19] !== d ||
    t[20] !== a ||
    t[21] !== o ||
    t[22] !== l ||
    t[23] !== f ||
    t[24] !== p ||
    t[25] !== R ||
    t[26] !== z ||
    t[27] !== m ||
    t[28] !== g
      ? ((B = (0, N.jsx)(O, {
          cloudProjectsEnabled: P,
          projectId: a,
          projectName: o,
          projectlessTriggerLabel: l,
          menuOpen: u,
          onMenuOpenChange: d,
          isPending: R,
          localProjectOptions: z,
          subtleHover: p,
          shortcut: f,
          triggerButton: m,
          variant: g,
          onCreateProject: L,
          onProjectChange: I,
        })),
        (t[15] = P),
        (t[16] = I),
        (t[17] = u),
        (t[18] = L),
        (t[19] = d),
        (t[20] = a),
        (t[21] = o),
        (t[22] = l),
        (t[23] = f),
        (t[24] = p),
        (t[25] = R),
        (t[26] = z),
        (t[27] = m),
        (t[28] = g),
        (t[29] = B))
      : (B = t[29]),
    B
  );
}
var M, N;
e(() => {
  ((M = f()), a(), p(), l(), o(), d(), m(), g(), x(), w(), C(), S(), k(), (N = u()));
})();
export { A as ComposerProjectSelector };
//# sourceMappingURL=composer-project-selector-17ef0c338d41.js.map
