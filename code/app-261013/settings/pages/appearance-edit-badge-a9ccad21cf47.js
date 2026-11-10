import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CPt as n,
  Cot as r,
  HNt as i,
  Pxt as a,
  SPt as o,
  TJ as s,
  _Mt as c,
  gMt as l,
  hG as u,
  nSt as d,
  vzt as f,
  wot as p,
  xMt as m,
  yMt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $5 as _,
  $8n as v,
  $pr as y,
  K5 as b,
  Opr as x,
  Qpr as S,
  X5 as C,
  abn as w,
  fbn as T,
  iNr as E,
  n7 as ee,
  obn as te,
  pbn as ne,
  q5 as D,
  r7 as O,
  rNr as k,
  v8n as A,
  wpr as j,
} from "./app-initial-5851df3f6cb1.js";
var M, N, P, F, I, L, R, z;
function B() {
  return (B = e(() => {
    ((M = `_active_p6szg_2`),
      (N = `_excluded_p6szg_2`),
      (P = `_avatar_p6szg_2`),
      (F = `_surface_p6szg_2`),
      (I = `_departing_p6szg_2`),
      (L = `_modal_p6szg_2`),
      (R = `_backdrop_p6szg_2`),
      (z = {
        active: M,
        excluded: N,
        avatar: P,
        surface: F,
        departing: I,
        modal: L,
        backdrop: R,
        "surface-enter": `_surface-enter_p6szg_2`,
        "surface-exit": `_surface-exit_p6szg_2`,
        "modal-enter": `_modal-enter_p6szg_2`,
        "modal-exit": `_modal-exit_p6szg_2`,
      }));
  }))();
}
function V({
  source: e,
  destination: t,
  update: r,
  reducedMotion: i,
  prepare: a,
  sourceSurface: o,
  destinationSurface: s,
  surfaceBoundary: c,
}) {
  let l = e?.ownerDocument ?? document,
    u = !i && e?.isConnected === !0;
  if (typeof l.startViewTransition != `function` || (!u && W === 0)) {
    r();
    return;
  }
  let d = l.documentElement;
  ((W += 1), G?.());
  let f = u,
    p = null,
    m = null,
    h = null,
    g = null,
    _ = u ? d.querySelectorAll(`[style*="view-transition-name"]`) : [],
    v = (e) => {
      if (e == null || c == null) return;
      let t = c.getBoundingClientRect(),
        n = e.getBoundingClientRect();
      h = `inset(${t.top - n.top}px ${n.right - t.right}px ${n.bottom - t.bottom}px ${t.left - n.left}px)`;
    };
  if (u) {
    v(o ?? null);
    for (let e of _) e.classList.add(z.excluded);
    (e.classList.add(z.avatar), o?.classList.add(z.surface), d.classList.add(z.active));
  }
  let y = () => {
    if (f) {
      ((f = !1), g?.cancel(), e?.classList.remove(z.avatar));
      for (let e of _) e.classList.remove(z.excluded);
      (p?.classList.remove(z.avatar),
        o?.classList.remove(z.surface, z.departing),
        m?.classList.remove(z.surface),
        d.classList.remove(z.active),
        (G = null));
    }
  };
  G = u ? y : null;
  let b = l.startViewTransition(async () => {
    (await a?.(),
      f && (e?.classList.remove(z.avatar), o?.classList.remove(z.surface), o?.classList.add(z.departing)),
      (0, U.flushSync)(r),
      f &&
        ((p = t()),
        (m = s?.() ?? null),
        v(m),
        m?.classList.add(z.surface),
        p?.isConnected ? p.classList.add(z.avatar) : b.skipTransition()));
  });
  u || b.skipTransition();
  let x = () => {
    (--W, y());
  };
  (b.ready
    .then(() => {
      f &&
        (H(l),
        h != null &&
          (g = d.animate(
            { clipPath: [h, h] },
            {
              duration: 1,
              fill: `both`,
              pseudoElement: `::view-transition-group(character-appearance-surface)`,
            },
          )));
    })
    .catch(() => {}),
    b.updateCallbackDone.catch((e) => {
      n.error(`Failed to update character presentation`, { safe: {}, sensitive: { error: e } });
    }),
    b.finished.then(x, x));
}
function H(e) {
  for (let t of e.getAnimations()) {
    let e = t.effect;
    if (!(e instanceof KeyframeEffect) || e.pseudoElement !== `::view-transition-group(character-appearance)`)
      continue;
    let n = e.getKeyframes(),
      [r, i] = n;
    if (
      n.length !== 2 ||
      typeof r.transform != `string` ||
      typeof i.transform != `string` ||
      i.transform === `none`
    )
      continue;
    let a = Number.parseFloat(`${r.width}`) / Number.parseFloat(`${i.width}`),
      o = Number.parseFloat(`${r.height}`) / Number.parseFloat(`${i.height}`);
    !Number.isFinite(a) ||
      !Number.isFinite(o) ||
      a <= 0 ||
      o <= 0 ||
      e.setKeyframes([
        {
          transform: new DOMMatrix(r.transform).scale(a, o).toString(),
          transformOrigin: `0 0`,
          easing: r.easing,
        },
        { transform: i.transform, transformOrigin: `0 0`, easing: i.easing },
      ]);
  }
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = h()), o(), B(), (W = 0), (G = null));
  }))();
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = t(i(), 1)),
      a(),
      A(),
      D(),
      w(),
      p(),
      k(),
      _(),
      T(),
      x(),
      O(),
      y(),
      (J = E(`has-opened-dot-appearance-editor`, !1)),
      (Y = d(r, (e, { get: t }) => {
        if (e === `orbit-draft` || e === `legacy-draft` || t(J)) return !1;
        let n = t(S, { hostId: t(v, e), threadId: e });
        if (n === void 0) return !1;
        let r = t(j, e, { enabled: n }).data;
        if (n && r == null) return !1;
        let i = r?.display_name ?? t(te, e);
        if (i == null || !ne(i) || t(ee, e) != null) return !1;
        let a = t(C, e);
        if (a != null) return (0, q.default)(a.state, b(`gray`));
        let o = r?.avatar_id ?? r?.avatar;
        return (
          (o == null || o === "default") &&
          (r?.avatar_type == null ||
            r.avatar_type === `image` ||
            (r.avatar_type === "default" && (r.avatar_manifest?.tint ?? `gray`) === `gray`))
        );
      })));
  }))();
}
function re(e) {
  let t = (0, Z.c)(6),
    { identity: n, variant: r } = e,
    i = r === void 0 ? `profile` : r,
    a = !g(Y, n) && `opacity-0`,
    o =
      i === `hero` ? `right-0 bottom-0 size-7 text-default` : `-top-1 -right-1 size-5 text-codex-description`,
    s;
  t[0] !== a || t[1] !== o
    ? ((s = l(
        `pointer-events-none absolute flex items-center justify-center rounded-full border border-default bg-surface shadow-sm group-hover/avatar:opacity-100 group-focus-visible/avatar:opacity-100`,
        a,
        o,
      )),
      (t[0] = a),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = (0, Q.jsx)(u, {})), (t[3] = c)) : (c = t[3]);
  let d;
  return (
    t[4] === s
      ? (d = t[5])
      : ((d = (0, Q.jsx)(`span`, { className: s, children: c })), (t[4] = s), (t[5] = d)),
    d
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = f()), c(), a(), s(), X(), (Q = m()));
  }))();
}
export { K as a, B as c, X as i, $ as n, V as o, J as r, z as s, re as t };
//# sourceMappingURL=appearance-edit-badge-a9ccad21cf47.js.map
