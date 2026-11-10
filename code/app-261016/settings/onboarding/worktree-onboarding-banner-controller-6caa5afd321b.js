import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  G8 as n,
  LNt as r,
  PBt as i,
  Rrt as a,
  XO as o,
  XOt as s,
  YO as c,
  ZSt as l,
  iCt as u,
  okt as d,
  tkt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Aln as p,
  CDr as m,
  Crn as h,
  FDr as g,
  IVt as _,
  Iwn as v,
  M5t as y,
  Oln as b,
  Own as x,
  PVt as S,
  SRn as C,
  bRn as w,
  ewt as T,
  j5t as E,
  tin as D,
  twt as O,
  xMr as k,
  yMr as A,
} from "./app-initial-ad16eaadf81f.js";
import {
  Fl as j,
  Hd as M,
  K_ as N,
  Pl as P,
  Vd as F,
  cl as I,
  q_ as L,
  sl as R,
} from "./app-primary-3e00728c2a4c.js";
import { r as z, t as B } from "./worktree-onboarding-state-971393c21530.js";
function V(e) {
  let t = (0, H.c)(18),
    { onDismiss: n, onLearnMore: r, onNewWorktree: i } = e,
    a = d(),
    o,
    s,
    l,
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, U.jsx)(f, {
        id: `composer.worktreeOnboardingBanner.title`,
        defaultMessage: `Start another chat without disturbing your work`,
        description: `Title for the worktree onboarding banner`,
      })),
      (s = (0, U.jsx)(f, {
        id: `composer.worktreeOnboardingBanner.description`,
        defaultMessage: `A Git worktree gives your chat its own workspace`,
        description: `Description explaining how a Git worktree isolates a chat`,
      })),
      (l = (0, U.jsx)(T, { className: `icon-sm` })),
      (u = (0, U.jsx)(f, {
        id: `composer.worktreeOnboardingBanner.newWorktree`,
        defaultMessage: `New worktree`,
        description: `Action to select a new Git worktree for the current draft`,
      })),
      (t[0] = o),
      (t[1] = s),
      (t[2] = l),
      (t[3] = u))
    : ((o = t[0]), (s = t[1]), (l = t[2]), (u = t[3]));
  let p;
  t[4] === i ? (p = t[5]) : ((p = { label: u, onClick: i }), (t[4] = i), (t[5] = p));
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, U.jsx)(f, {
        id: `composer.worktreeOnboardingBanner.help`,
        defaultMessage: `Learn more`,
        description: `Action to open documentation about Git worktrees`,
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === r ? (h = t[8]) : ((h = { label: m, onClick: r }), (t[7] = r), (t[8] = h));
  let g;
  t[9] === a
    ? (g = t[10])
    : ((g = a.formatMessage({
        id: `composer.worktreeOnboardingBanner.dismissLabel`,
        defaultMessage: `Dismiss worktree suggestion`,
        description: `Accessible label for dismissing the worktree suggestion`,
      })),
      (t[9] = a),
      (t[10] = g));
  let _;
  t[11] !== n || t[12] !== g
    ? ((_ = { ariaLabel: g, icon: c, onClick: n }), (t[11] = n), (t[12] = g), (t[13] = _))
    : (_ = t[13]);
  let v;
  return (
    t[14] !== p || t[15] !== h || t[16] !== _
      ? ((v = (0, U.jsx)(N, {
          title: o,
          description: s,
          leadingVisual: l,
          primaryAction: p,
          secondaryAction: h,
          dismissAction: _,
        })),
        (t[14] = p),
        (t[15] = h),
        (t[16] = _),
        (t[17] = v))
      : (v = t[17]),
    v
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = i()), s(), L(), O(), o(), (U = r()));
  }))();
}
function G() {
  let e = (0, q.c)(9),
    r = t(m),
    i = u(y),
    a;
  e[0] === r
    ? (a = e[1])
    : ((a = () => {
        r.set(z, `dismissed`);
      }),
      (e[0] = r),
      (e[1] = a));
  let o;
  e[2] !== i.cwd || e[3] !== i.hostId || e[4] !== r
    ? ((o = () => {
        let e = r.get(h);
        (M(r, e, `worktree`, `onboarding-banner`),
          r.get(j, i.hostId) === `worktree` && k(r, n, { mode: `worktree` }),
          I(r, b({ cwd: i.cwd, hostId: i.hostId }), `worktree`),
          x());
      }),
      (e[2] = i.cwd),
      (e[3] = i.hostId),
      (e[4] = r),
      (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] !== a || e[7] !== o
      ? ((s = (0, J.jsx)(V, { onDismiss: a, onLearnMore: K, onNewWorktree: o })),
        (e[6] = a),
        (e[7] = o),
        (e[8] = s))
      : (s = e[8]),
    s
  );
}
function K(e) {
  C({ event: e, href: S, initiator: `open_in_browser_bridge` });
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = i()), a(), l(), _(), w(), A(), E(), g(), p(), D(), v(), W(), B(), F(), P(), R(), (J = r()));
  }))();
}
Y();
export { G as WorktreeOnboardingBannerController };
//# sourceMappingURL=worktree-onboarding-banner-controller-6caa5afd321b.js.map
