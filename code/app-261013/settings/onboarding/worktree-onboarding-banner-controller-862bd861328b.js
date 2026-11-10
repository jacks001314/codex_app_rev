import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  J6 as r,
  Pxt as i,
  Rnt as a,
  VDt as o,
  Vxt as s,
  bO as c,
  jDt as l,
  vzt as u,
  xMt as d,
  yO as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  AVt as p,
  BKt as m,
  JPn as h,
  Pen as g,
  QDr as _,
  RKt as v,
  Txn as y,
  XDr as b,
  XPn as x,
  _xn as S,
  dfn as C,
  jVt as w,
  lfn as T,
  mDt as E,
  nen as D,
  pDt as O,
  sCr as k,
  yCr as A,
} from "./app-initial-5851df3f6cb1.js";
import {
  Ad as j,
  Cl as M,
  O_ as N,
  Xc as P,
  Zc as F,
  jd as I,
  k_ as L,
  wl as R,
} from "./app-primary-fe8a450b3b04.js";
import { r as z, t as B } from "./worktree-onboarding-state-fdfd237fa3a4.js";
function V(e) {
  let n = (0, H.c)(18),
    { onDismiss: r, onLearnMore: i, onNewWorktree: a } = e,
    s = o(),
    c,
    l,
    u,
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, U.jsx)(t, {
        id: `composer.worktreeOnboardingBanner.title`,
        defaultMessage: `Start another chat without disturbing your work`,
        description: `Title for the worktree onboarding banner`,
      })),
      (l = (0, U.jsx)(t, {
        id: `composer.worktreeOnboardingBanner.description`,
        defaultMessage: `A Git worktree gives your chat its own workspace`,
        description: `Description explaining how a Git worktree isolates a chat`,
      })),
      (u = (0, U.jsx)(O, { className: `icon-sm` })),
      (d = (0, U.jsx)(t, {
        id: `composer.worktreeOnboardingBanner.newWorktree`,
        defaultMessage: `New worktree`,
        description: `Action to select a new Git worktree for the current draft`,
      })),
      (n[0] = c),
      (n[1] = l),
      (n[2] = u),
      (n[3] = d))
    : ((c = n[0]), (l = n[1]), (u = n[2]), (d = n[3]));
  let p;
  n[4] === a ? (p = n[5]) : ((p = { label: d, onClick: a }), (n[4] = a), (n[5] = p));
  let m;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, U.jsx)(t, {
        id: `composer.worktreeOnboardingBanner.help`,
        defaultMessage: `Learn more`,
        description: `Action to open documentation about Git worktrees`,
      })),
      (n[6] = m))
    : (m = n[6]);
  let h;
  n[7] === i ? (h = n[8]) : ((h = { label: m, onClick: i }), (n[7] = i), (n[8] = h));
  let g;
  n[9] === s
    ? (g = n[10])
    : ((g = s.formatMessage({
        id: `composer.worktreeOnboardingBanner.dismissLabel`,
        defaultMessage: `Dismiss worktree suggestion`,
        description: `Accessible label for dismissing the worktree suggestion`,
      })),
      (n[9] = s),
      (n[10] = g));
  let _;
  n[11] !== r || n[12] !== g
    ? ((_ = { ariaLabel: g, icon: f, onClick: r }), (n[11] = r), (n[12] = g), (n[13] = _))
    : (_ = n[13]);
  let v;
  return (
    n[14] !== p || n[15] !== h || n[16] !== _
      ? ((v = (0, U.jsx)(N, {
          title: c,
          description: l,
          leadingVisual: u,
          primaryAction: p,
          secondaryAction: h,
          dismissAction: _,
        })),
        (n[14] = p),
        (n[15] = h),
        (n[16] = _),
        (n[17] = v))
      : (v = n[17]),
    v
  );
}
var H, U;
function W() {
  return (W = e(() => {
    ((H = u()), l(), L(), E(), c(), (U = d()));
  }))();
}
function G() {
  let e = (0, q.c)(9),
    t = n(k),
    i = s(w),
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = () => {
        t.set(z, `dismissed`);
      }),
      (e[0] = t),
      (e[1] = a));
  let o;
  e[2] !== i.cwd || e[3] !== i.hostId || e[4] !== t
    ? ((o = () => {
        let e = t.get(D);
        (I(t, e, `worktree`, `onboarding-banner`),
          t.get(R, i.hostId) === `worktree` && _(t, r, { mode: `worktree` }),
          F(t, T({ cwd: i.cwd, hostId: i.hostId }), `worktree`),
          S());
      }),
      (e[2] = i.cwd),
      (e[3] = i.hostId),
      (e[4] = t),
      (e[5] = o))
    : (o = e[5]);
  let c;
  return (
    e[6] !== a || e[7] !== o
      ? ((c = (0, J.jsx)(V, { onDismiss: a, onLearnMore: K, onNewWorktree: o })),
        (e[6] = a),
        (e[7] = o),
        (e[8] = c))
      : (c = e[8]),
    c
  );
}
function K(e) {
  x({ event: e, href: v, initiator: `open_in_browser_bridge` });
}
var q, J;
function Y() {
  return (Y = e(() => {
    ((q = u()), a(), i(), m(), h(), b(), p(), A(), C(), g(), y(), W(), B(), j(), M(), P(), (J = d()));
  }))();
}
Y();
export { G as WorktreeOnboardingBannerController };
//# sourceMappingURL=worktree-onboarding-banner-controller-862bd861328b.js.map
