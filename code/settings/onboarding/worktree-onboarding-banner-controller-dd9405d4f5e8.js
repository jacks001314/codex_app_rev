import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  A7 as n,
  AJ as r,
  Cpn as i,
  DJ as a,
  DX as o,
  EX as s,
  F3t as c,
  JA as l,
  M6t as u,
  N6t as d,
  Np as f,
  O3t as p,
  O7 as m,
  OJ as h,
  Opn as g,
  Pp as _,
  QXt as v,
  Spn as y,
  cFt as b,
  dit as x,
  e0t as S,
  eZt as C,
  ej as w,
  fit as T,
  hmn as E,
  jZt as D,
  kmn as O,
  nFt as k,
  zJ as A,
} from "./app-initial-f094ef01c64d.js";
import { Fw as j, Iw as M } from "./app-primary-4c40d73a1074.js";
import { r as N, t as P } from "./worktree-onboarding-state-450b17d8c7bc.js";
function F(e) {
  let t = (0, I.c)(18),
    { onDismiss: n, onLearnMore: r, onNewWorktree: a } = e,
    o = g(),
    s,
    c,
    l,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, L.jsx)(i, {
        id: `composer.worktreeOnboardingBanner.title`,
        defaultMessage: `Start another task without disturbing your work`,
        description: `Title for the worktree onboarding banner`,
      })),
      (c = (0, L.jsx)(i, {
        id: `composer.worktreeOnboardingBanner.description`,
        defaultMessage: `A Git worktree gives your task its own workspace`,
        description: `Description explaining how a Git worktree isolates a task`,
      })),
      (l = (0, L.jsx)(f, { className: `icon-sm` })),
      (u = (0, L.jsx)(i, {
        id: `composer.worktreeOnboardingBanner.newWorktree`,
        defaultMessage: `New worktree`,
        description: `Action to select a new Git worktree for the current draft`,
      })),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : ((s = t[0]), (c = t[1]), (l = t[2]), (u = t[3]));
  let d;
  t[4] === a ? (d = t[5]) : ((d = { label: u, onClick: a }), (t[4] = a), (t[5] = d));
  let p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(i, {
        id: `composer.worktreeOnboardingBanner.help`,
        defaultMessage: `Learn more`,
        description: `Action to open documentation about Git worktrees`,
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] === r ? (m = t[8]) : ((m = { label: p, onClick: r }), (t[7] = r), (t[8] = m));
  let h;
  t[9] === o
    ? (h = t[10])
    : ((h = o.formatMessage({
        id: `composer.worktreeOnboardingBanner.dismissLabel`,
        defaultMessage: `Dismiss worktree suggestion`,
        description: `Accessible label for dismissing the worktree suggestion`,
      })),
      (t[9] = o),
      (t[10] = h));
  let _;
  t[11] !== n || t[12] !== h
    ? ((_ = { ariaLabel: h, icon: x, onClick: n }), (t[11] = n), (t[12] = h), (t[13] = _))
    : (_ = t[13]);
  let v;
  return (
    t[14] !== d || t[15] !== m || t[16] !== _
      ? ((v = (0, L.jsx)(j, {
          title: s,
          description: c,
          leadingVisual: l,
          primaryAction: d,
          secondaryAction: m,
          dismissAction: _,
        })),
        (t[14] = d),
        (t[15] = m),
        (t[16] = _),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
var I,
  L,
  R = e(() => {
    ((I = O()), y(), M(), _(), T(), (L = E()));
  });
function z() {
  let e = (0, V.c)(9),
    n = t(r),
    i = c(o),
    s;
  e[0] === n
    ? (s = e[1])
    : ((s = () => {
        n.set(N, `dismissed`);
      }),
      (e[0] = n),
      (e[1] = s));
  let l;
  e[2] !== i.cwd || e[3] !== i.hostId || e[4] !== n
    ? ((l = () => {
        (C(n, D, { mode: `worktree` }), w(n, a({ cwd: i.cwd, hostId: i.hostId }), `worktree`), k());
      }),
      (e[2] = i.cwd),
      (e[3] = i.hostId),
      (e[4] = n),
      (e[5] = l))
    : (l = e[5]);
  let u;
  return (
    e[6] !== s || e[7] !== l
      ? ((u = (0, H.jsx)(F, { onDismiss: s, onLearnMore: B, onNewWorktree: l })),
        (e[6] = s),
        (e[7] = l),
        (e[8] = u))
      : (u = e[8]),
    u
  );
}
function B(e) {
  d({ event: e, href: m, initiator: `open_in_browser_bridge` });
}
var V, H;
e(() => {
  ((V = O()), S(), p(), n(), u(), v(), s(), A(), h(), l(), b(), R(), P(), (H = E()));
})();
export { z as WorktreeOnboardingBannerController };
//# sourceMappingURL=worktree-onboarding-banner-controller-dd9405d4f5e8.js.map
