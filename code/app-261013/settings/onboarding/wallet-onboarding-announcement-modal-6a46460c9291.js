import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JR as n,
  YR as r,
  _Mt as i,
  az as a,
  gMt as o,
  jDt as s,
  oz as c,
  vzt as l,
  xMt as u,
  yzt as d,
} from "./app-shared-bbfeca5e5737.js";
import { FRt as f, PRt as p } from "./app-initial-5851df3f6cb1.js";
var m;
function h() {
  return (h = e(() => {
    m = `` + new URL(`card-cyan-56def56cf458.png`, import.meta.url).href;
  }))();
}
var g;
function _() {
  return (_ = e(() => {
    g = `` + new URL(`card-green-e3f7fd3abfac.png`, import.meta.url).href;
  }))();
}
var v;
function y() {
  return (y = e(() => {
    v = `` + new URL(`card-purple-9662514d5440.png`, import.meta.url).href;
  }))();
}
var b, x, S, C, w, T, E, D, O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    ((b = `_scene_kct3r_2`),
      (x = `_cardScene_kct3r_2`),
      (S = `_layer_kct3r_2`),
      (C = `_card_kct3r_2`),
      (w = `_cardTop_kct3r_2`),
      (T = `_cardMiddle_kct3r_2`),
      (E = `_cardBottom_kct3r_2`),
      (D = `_cardTexture_kct3r_2`),
      (O = `_cardMark_kct3r_2`),
      (k = `_pocket_kct3r_2`),
      (A = `_pocketTop_kct3r_2`),
      (j = `_pocketMiddle_kct3r_2`),
      (M = `_pocketBottom_kct3r_2`),
      (N = `_isAnimating_kct3r_2`),
      (P = {
        scene: b,
        cardScene: x,
        layer: S,
        card: C,
        cardTop: w,
        cardMiddle: T,
        cardBottom: E,
        cardTexture: D,
        cardMark: O,
        pocket: k,
        pocketTop: A,
        pocketMiddle: j,
        pocketBottom: M,
        isAnimating: N,
      }));
  }))();
}
function I(e) {
  return Math.min(1, Math.max(0, e));
}
function L(e) {
  let t = (e * Math.PI) / 180;
  return { x: 60 - (60 * Math.cos(t) - 38 * Math.sin(t)), y: 38 - (60 * Math.sin(t) + 38 * Math.cos(t)) };
}
function R(e, t, n) {
  return `translate(${e}px, ${t}px) rotate(${n}deg)`;
}
function z(e, t) {
  let n = t === `fanned`,
    r = n ? e.openCardRotation : 0,
    i = L(r);
  return R((n ? e.openCardX : 0) + i.x, (n ? -e.cardTravelDistance : 0) + i.y, r);
}
function ee(e, t) {
  let n = t === `fanned`,
    r = +!n;
  return {
    transform: `translateY(${n ? e.pocketTravelDistance : 0}px)`,
    "--pocket-border-opacity": r,
    "--pocket-surface-opacity": r,
  };
}
function B(e, t, n) {
  (e.forEach((e, t) => {
    e.style.transform = z($[t], n);
  }),
    t.forEach((e, t) => {
      let r = n === `fanned`,
        i = +!r;
      ((e.style.transform = `translateY(${r ? $[t].pocketTravelDistance : 0}px)`),
        e.style.setProperty(`--pocket-border-opacity`, String(i)),
        e.style.setProperty(`--pocket-surface-opacity`, String(i)));
    }));
}
function te(e, t, n, r, i, a) {
  let { stiffness: o, damping: s, mass: c, velocity: l } = W,
    u = -16 / n.cardTravelDistance,
    d = q / n.cardTravelDistance,
    f = 0,
    p = -Math.abs(l) * J * (K / n.cardTravelDistance),
    m = 0,
    h = 0,
    g = !1,
    _ = !1,
    v = performance.now(),
    y = 0,
    b = 0.001,
    x = 0.01,
    S = (l) => {
      let C = Math.min((l - v) / 1e3, 0.04) * r;
      for (v = l; C > 0;) {
        let e = Math.min(C, 0.008333333333333333),
          t = (o * ((g ? 1 : u) - f) - s * p) / c,
          n = (o * (+!!g - m) - s * h) / c;
        ((p += t * e), (f += p * e), (h += n * e), (m += h * e), (C -= e));
      }
      !g && !_ && Math.abs(f - u) <= d && ((_ = !0), a());
      let w = -n.cardTravelDistance + n.cardTravelDistance * f,
        T,
        E;
      if (_) {
        let e = I((f - u) / (1 - u));
        ((T = (n.openCardRotation + Y) * (1 - e)), (E = n.openCardX * (1 - e)));
      } else {
        let e = I(f / u);
        ((T = n.openCardRotation + Y * e), (E = n.openCardX));
      }
      let D = L(T),
        O = I(m);
      ((e.style.transform = R(E + D.x, w + D.y, T)),
        (t.style.transform = `translateY(${n.pocketTravelDistance * (1 - m)}px)`),
        t.style.setProperty(`--pocket-border-opacity`, String(O)),
        t.style.setProperty(`--pocket-surface-opacity`, String(O)));
      let k = Math.abs(1 - f) <= b && Math.abs(p) <= x,
        A = Math.abs(1 - m) <= b && Math.abs(h) <= x;
      if (k && A) {
        ((e.style.transform = R(0, 0, 0)),
          (t.style.transform = `translateY(0)`),
          t.style.setProperty(`--pocket-border-opacity`, `1`),
          t.style.setProperty(`--pocket-surface-opacity`, `1`),
          i());
        return;
      }
      y = window.requestAnimationFrame(S);
    };
  return (
    (y = window.requestAnimationFrame(S)),
    {
      cancel: () => window.cancelAnimationFrame(y),
      release: () => {
        g = !0;
      },
    }
  );
}
function ne(e, t, n, r) {
  let i = r === `slow` ? X / 5 : X,
    a = new Map(),
    o = new Set(),
    s = new Set(),
    c = 0,
    l = !1,
    u = !1,
    d = () => {
      l ||
        u ||
        s.size !== $.length ||
        ((u = !0),
        $.forEach((e, t) => {
          let n = (t * Q) / i;
          if (n === 0) {
            a.get(t)?.release();
            return;
          }
          let r = window.setTimeout(() => {
            (o.delete(r), a.get(t)?.release());
          }, n);
          o.add(r);
        }));
    },
    f = (r) => {
      if (l) return;
      let o = te(
        t[r],
        n[r],
        $[r],
        i,
        () => {
          (a.delete(r), (c += 1), !l && c === $.length && e.classList.remove(P.isAnimating));
        },
        () => {
          (s.add(r), d());
        },
      );
      a.set(r, o);
    };
  return (
    e.classList.add(P.isAnimating),
    $.forEach((e, t) => {
      let n = (t * Z) / i;
      if (n === 0) {
        f(t);
        return;
      }
      let r = window.setTimeout(() => {
        (o.delete(r), f(t));
      }, n);
      o.add(r);
    }),
    () => {
      ((l = !0),
        o.forEach((e) => window.clearTimeout(e)),
        a.forEach((e) => e.cancel()),
        o.clear(),
        a.clear(),
        e.classList.remove(P.isAnimating));
    }
  );
}
function re(e) {
  let n = (0, V.c)(14),
    {
      animationMode: r,
      animationSpeed: i,
      dismissAnnouncement: a,
      footer: o,
      isSettingUpWallet: s,
      onCloseAutoFocus: c,
      onSetUpWallet: l,
    } = e,
    u = r === void 0 ? `animate` : r,
    d = i === void 0 ? `normal` : i,
    f = s !== void 0 && s,
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, U.jsx)(`p`, {
        className: `text-base leading-normal tracking-normal text-codex-description`,
        children: (0, U.jsx)(t, {
          id: `codexWalletOnboardingAnnouncementModal.body`,
          defaultMessage: `Add payment methods that can be securely used by ChatGPT to carry out tasks`,
          description: `Body copy explaining what ChatGPT Wallet is for`,
        }),
      })),
      (n[0] = m))
    : (m = n[0]);
  let h;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, U.jsx)(t, {
        id: `codexWalletOnboardingAnnouncementModal.dismissLabel`,
        defaultMessage: `Not right now`,
        description: `Secondary action to dismiss ChatGPT Wallet onboarding`,
      })),
      (n[1] = h))
    : (h = n[1]);
  let g;
  n[2] !== u || n[3] !== d
    ? ((g = (0, U.jsx)(ie, { animationMode: u, animationSpeed: d })), (n[2] = u), (n[3] = d), (n[4] = g))
    : (g = n[4]);
  let _, v;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, U.jsx)(t, {
        id: `codexWalletOnboardingAnnouncementModal.primaryActionLabel`,
        defaultMessage: `Set up ChatGPT Wallet`,
        description: `Primary action to begin setting up ChatGPT Wallet`,
      })),
      (v = (0, U.jsx)(t, {
        id: `codexWalletOnboardingAnnouncementModal.title`,
        defaultMessage: `Introducing ChatGPT Wallet`,
        description: `Title for the ChatGPT Wallet onboarding announcement`,
      })),
      (n[5] = _),
      (n[6] = v))
    : ((_ = n[5]), (v = n[6]));
  let y;
  return (
    n[7] !== a || n[8] !== o || n[9] !== f || n[10] !== c || n[11] !== l || n[12] !== g
      ? ((y = (0, U.jsx)(p, {
          actionLayout: `stacked`,
          body: m,
          closeButtonClassName: `dark:text-default`,
          closeButtonTone: `dark`,
          dismissLabel: h,
          footer: o,
          isPrimaryActionLoading: f,
          media: g,
          mediaClassName: `h-[240px]`,
          onDismiss: a,
          onCloseAutoFocus: c,
          onPrimaryAction: l,
          primaryActionLabel: _,
          title: v,
        })),
        (n[7] = a),
        (n[8] = o),
        (n[9] = f),
        (n[10] = c),
        (n[11] = l),
        (n[12] = g),
        (n[13] = y))
      : (y = n[13]),
    y
  );
}
function ie(e) {
  let t = (0, V.c)(9),
    { animationMode: n, animationSpeed: i } = e,
    a = r() || n === `tucked`,
    o = (0, H.useRef)(null),
    s,
    c;
  (t[0] !== n || t[1] !== i || t[2] !== a
    ? ((s = () => {
        let e = o.current;
        if (e == null) return;
        let t = Array.from(e.querySelectorAll(`[data-wallet-card]`)),
          r = Array.from(e.querySelectorAll(`[data-wallet-pocket]`));
        if ((e.classList.remove(P.isAnimating), a)) {
          B(t, r, `tucked`);
          return;
        }
        if ((B(t, r, `fanned`), n === `fanned`)) return;
        let s,
          c = window.setTimeout(() => {
            s = ne(e, t, r, i);
          }, G);
        return () => {
          (window.clearTimeout(c), s?.());
        };
      }),
      (c = [n, i, a]),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a),
      (t[3] = s),
      (t[4] = c))
    : ((s = t[3]), (c = t[4])),
    (0, H.useEffect)(s, c));
  let l;
  t[5] === a
    ? (l = t[6])
    : ((l = $.map((e) => (0, U.jsx)(ae, { initialState: a ? `tucked` : `fanned`, layer: e }, e.id))),
      (t[5] = a),
      (t[6] = l));
  let u;
  return (
    t[7] === l
      ? (u = t[8])
      : ((u = (0, U.jsx)(`div`, {
          ref: o,
          "aria-hidden": !0,
          className: P.scene,
          children: (0, U.jsx)(`div`, { className: P.cardScene, children: l }),
        })),
        (t[7] = l),
        (t[8] = u)),
    u
  );
}
function ae(e) {
  let t = (0, V.c)(25),
    { initialState: n, layer: r } = e,
    i;
  t[0] === r.cardClassName
    ? (i = t[1])
    : ((i = o(P.card, r.cardClassName)), (t[0] = r.cardClassName), (t[1] = i));
  let s;
  t[2] !== n || t[3] !== r ? ((s = z(r, n)), (t[2] = n), (t[3] = r), (t[4] = s)) : (s = t[4]);
  let c;
  t[5] === s ? (c = t[6]) : ((c = { transform: s }), (t[5] = s), (t[6] = c));
  let l;
  t[7] === r.image
    ? (l = t[8])
    : ((l = (0, U.jsx)(`img`, { alt: ``, className: P.cardTexture, draggable: !1, src: r.image })),
      (t[7] = r.image),
      (t[8] = l));
  let u;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, U.jsx)(a, { className: o(P.cardMark, `text-white`) })), (t[9] = u))
    : (u = t[9]);
  let d;
  t[10] !== i || t[11] !== c || t[12] !== l
    ? ((d = (0, U.jsxs)(`div`, { className: i, "data-wallet-card": !0, style: c, children: [l, u] })),
      (t[10] = i),
      (t[11] = c),
      (t[12] = l),
      (t[13] = d))
    : (d = t[13]);
  let f;
  t[14] === r.pocketClassName
    ? (f = t[15])
    : ((f = o(P.pocket, r.pocketClassName)), (t[14] = r.pocketClassName), (t[15] = f));
  let p;
  t[16] !== n || t[17] !== r ? ((p = ee(r, n)), (t[16] = n), (t[17] = r), (t[18] = p)) : (p = t[18]);
  let m;
  t[19] !== f || t[20] !== p
    ? ((m = (0, U.jsx)(`div`, { className: f, "data-wallet-pocket": !0, style: p })),
      (t[19] = f),
      (t[20] = p),
      (t[21] = m))
    : (m = t[21]);
  let h;
  return (
    t[22] !== d || t[23] !== m
      ? ((h = (0, U.jsxs)(`div`, { className: P.layer, children: [d, m] })),
        (t[22] = d),
        (t[23] = m),
        (t[24] = h))
      : (h = t[24]),
    h
  );
}
var V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
function oe() {
  return (oe = e(() => {
    ((V = l()),
      i(),
      (H = d()),
      s(),
      h(),
      _(),
      y(),
      n(),
      c(),
      f(),
      F(),
      (U = u()),
      (W = { stiffness: 123, damping: 18, mass: 1, velocity: 10.24 }),
      (G = 2e3),
      (K = 30),
      (q = 0.25),
      (J = 0.05),
      (Y = -15),
      (X = 1.1),
      (Z = 50),
      (Q = 150),
      ($ = [
        {
          id: `cyan`,
          image: m,
          cardClassName: P.cardTop,
          pocketClassName: P.pocketTop,
          openCardX: -10,
          openCardRotation: -15,
          cardTravelDistance: 22,
          pocketTravelDistance: 80,
        },
        {
          id: `purple`,
          image: v,
          cardClassName: P.cardMiddle,
          pocketClassName: P.pocketMiddle,
          openCardX: 0,
          openCardRotation: 0,
          cardTravelDistance: 30,
          pocketTravelDistance: 72,
        },
        {
          id: `green`,
          image: g,
          cardClassName: P.cardBottom,
          pocketClassName: P.pocketBottom,
          openCardX: -10,
          openCardRotation: 15,
          cardTravelDistance: 38,
          pocketTravelDistance: 64,
        },
      ]));
  }))();
}
oe();
export { re as WalletOnboardingAnnouncementModal };
//# sourceMappingURL=wallet-onboarding-announcement-modal-6a46460c9291.js.map
