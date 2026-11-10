import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  KOt as i,
  LNt as a,
  MNt as o,
  NNt as s,
  PBt as c,
  Qst as l,
  Uz as u,
  Wz as d,
  XOt as f,
  YOt as p,
  ZSt as m,
  okt as h,
  tkt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import { xMr as _, yMr as v } from "./app-initial-ad16eaadf81f.js";
import { a as y, n as b, r as x, t as S } from "./chatgpt_conversation_image-ea0e433caffc.js";
function C(e, t) {
  let n = Math.max(1, e),
    r = Math.max(1, t),
    i = Math.min(100, n),
    a = (n - i) / 2;
  return {
    width: n,
    height: r,
    ...E(n, r),
    paddleX: a,
    paddleTargetX: a,
    paddleWidth: i,
    paddleHeight: 24,
    ballX: n * 0.5,
    ballY: r * 0.53,
    velocityX: 115,
    velocityY: -155,
    ballRadius: 12,
    score: 0,
    lastStepAtMs: null,
    gameOver: !1,
  };
}
function w(e, t) {
  return e.gameOver || !Number.isFinite(t)
    ? e
    : { ...e, paddleTargetX: D(t - e.paddleWidth / 2, 0, e.width - e.paddleWidth) };
}
function T(e, t, n = 0) {
  if (e.gameOver) return e;
  if (e.lastStepAtMs == null) return { ...e, lastStepAtMs: t };
  let r = D((t - e.lastStepAtMs) / 1e3, 0, 0.035),
    i = D(e.paddleTargetX + n * 360 * r, 0, e.width - e.paddleWidth),
    a = 1 - 0.89 ** (r * 60),
    o = {
      ...e,
      paddleTargetX: i,
      paddleX: e.paddleX + (i - e.paddleX) * a,
      ballX: e.ballX + e.velocityX * r,
      ballY: e.ballY + e.velocityY * r,
      lastStepAtMs: t,
    };
  ((o.ballX - o.ballRadius <= 0 || o.ballX + o.ballRadius >= o.width) &&
    ((o.ballX = D(o.ballX, o.ballRadius, Math.max(o.ballRadius, o.width - o.ballRadius))),
    (o.velocityX *= -1),
    (o.score += 1)),
    o.ballY - o.ballRadius <= 0 &&
      ((o.ballY = o.ballRadius), (o.velocityY = Math.abs(o.velocityY)), (o.score += 1)));
  let s = o.height - o.paddleHeight;
  if (
    o.velocityY > 0 &&
    o.ballY + o.ballRadius >= s &&
    o.ballY - o.ballRadius <= s + o.paddleHeight &&
    o.ballX >= o.paddleX - o.ballRadius &&
    o.ballX <= o.paddleX + o.paddleWidth + o.ballRadius
  ) {
    let e = D((o.ballX - o.paddleX - o.paddleWidth / 2) / (o.paddleWidth / 2), -0.9, 0.9);
    ((o.ballY = s - o.ballRadius),
      (o.velocityY = -Math.min(225, Math.abs(o.velocityY) + 5)),
      (o.velocityX = e * 165),
      (o.score += 1));
  }
  let c = o.bricks.findIndex(
    (e) =>
      e.alive &&
      o.ballX + o.ballRadius >= e.x - o.brickRadius &&
      o.ballX - o.ballRadius <= e.x + o.brickRadius &&
      o.ballY + o.ballRadius >= e.y - o.brickRadius &&
      o.ballY - o.ballRadius <= e.y + o.brickRadius,
  );
  return (
    c !== -1 &&
      ((o.bricks = o.bricks.map((e, t) => (t === c ? { ...e, alive: !1 } : e))),
      (o.velocityY *= -1),
      (o.score += 1)),
    o.bricks.length > 0 &&
      o.bricks.every((e) => !e.alive && o.ballY - o.ballRadius > e.y + o.brickRadius) &&
      (o.bricks = E(o.width, o.height).bricks),
    o.ballY > o.height + o.ballRadius * 2 && (o.gameOver = !0),
    o
  );
}
function E(e, t) {
  let n = Math.max(8, Math.floor(e / 21)),
    r = Math.max(10, Math.floor(t / 21)),
    i = Math.min(e / n, t / r),
    a = (e - n * i) / 2,
    o = (t - r * i) / 2;
  return {
    brickRadius: i * 0.43,
    bricks: Array.from({ length: n * 5 }, (e, t) => ({
      x: a + ((t % n) + 0.5) * i,
      y: o + (Math.floor(t / n) + 0.5) * i,
      alive: !0,
    })),
  };
}
function D(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function O(e, t, n) {
  let r = Math.min(t / e.width, n / e.height);
  return { scale: r, offsetX: (t - e.width * r) / 2, offsetY: (n - e.height * r) / 2 };
}
function ee(e, t, { width: n, height: r, foregroundColor: i, accentColor: a }) {
  if (n <= 0 || r <= 0) return;
  let { scale: o, offsetX: s, offsetY: c } = O(t, n, r);
  (e.save(), e.translate(s, c), e.scale(o, o), e.beginPath(), e.rect(0, 0, t.width, t.height), e.clip());
  let l = 40 / 3,
    u = 1.1,
    d = Math.max(1, Math.floor(t.width / l)),
    f = Math.max(1, Math.floor(t.height / l)),
    p = (t.width - (d - 1) * l) / 2,
    m = (t.height - (f - 1) * l) / 2;
  ((e.fillStyle = a), (e.globalAlpha = 0.12), e.beginPath());
  for (let t = 0; t < d; t++) {
    let n = p + t * l;
    for (let t = 0; t < f; t++) {
      let r = m + t * l;
      (e.moveTo(n + u, r), e.arc(n, r, u, 0, Math.PI * 2));
    }
  }
  (e.fill(), (e.fillStyle = t.gameOver ? i : a), (e.globalAlpha = t.gameOver ? 0.26 : 1), e.beginPath());
  for (let n of t.bricks)
    n.alive && (e.moveTo(n.x + t.brickRadius, n.y), e.arc(n.x, n.y, t.brickRadius, 0, Math.PI * 2));
  (e.fill(),
    e.beginPath(),
    e.roundRect(t.paddleX, t.height - t.paddleHeight, t.paddleWidth, t.paddleHeight, t.paddleHeight / 2),
    e.fill(),
    e.beginPath(),
    e.arc(t.ballX, t.ballY, t.brickRadius, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function k(e) {
  let t;
  return (n) => {
    let { width: r, height: i } = n;
    ((!t || t.width !== r || t.height !== i) && (t = { width: r, height: i, path: j(r, i) }),
      A(e, n, t.path));
  };
}
function A(e, { width: t, height: n, elapsedMs: r, progress: i, accentColor: a, reducedMotion: o }, s) {
  if (t < F || n < F) return;
  let c = Math.floor(t / F),
    l = Math.floor(n / F),
    u = (t - (c - 1) * F) / 2,
    d = (n - (l - 1) * F) / 2,
    f = o ? 0 : Math.max(0, r) / 1e3,
    p = (e, t) => (e === 0 || e === c - 1) && (t === 0 || t === l - 1);
  (e.save(), (e.fillStyle = a), (e.globalAlpha = ne), e.fill(s));
  let m = M(i / ie) ** 1.28,
    h = m * (0.72 - 0.08 * N((m - 0.5) / 0.5)),
    g = P(0.18, 0.82, 3.46, f),
    _ = P(0.18, 0.82, 4.87, f),
    v = P(0.82, 0.18, 4.31, f),
    y = P(0.82, 0.18, 4.42, f),
    b = P(0.35, 0.6, 3.6, f) * L + h,
    x = P(0.43, 0.7, 2.4, f) * L + h,
    S = o ? 0.234 : P(0.105, 0.234, 2.25, f),
    C = P(0.58, 0.82, 2.1, f),
    w = re + 5 * N(i / R),
    T = Math.min(F * 0.48, w / 2);
  for (let t = 0; t < c; t++) {
    let n = u + t * F,
      r = c === 1 ? 0.5 : t / (c - 1);
    for (let i = 0; i < l; i++) {
      if (p(t, i)) continue;
      let a = d + i * F,
        o = l === 1 ? 0.5 : i / (l - 1),
        s = te(b, Math.hypot(r - g, o - _)),
        c = te(x, Math.hypot(r - v, o - y)),
        u = Math.max(s, c),
        f = m * u ** (0.85 + m * 1.1),
        h = T * u ** 1.15 * (S / 0.234);
      h <= 0.2 ||
        ((e.globalAlpha = C + (1 - C) * f * 0.64), e.beginPath(), e.arc(n, a, h, 0, Math.PI * 2), e.fill());
    }
  }
  e.restore();
}
function j(e, t) {
  let n = Math.floor(e / F),
    r = Math.floor(t / F),
    i = (e - (n - 1) * F) / 2,
    a = (t - (r - 1) * F) / 2,
    o = new Path2D();
  for (let e = 0; e < n; e++) {
    let t = i + e * F;
    for (let i = 0; i < r; i++) {
      if ((e === 0 || e === n - 1) && (i === 0 || i === r - 1)) continue;
      let s = a + i * F;
      (o.moveTo(t + I, s), o.arc(t, s, I, 0, Math.PI * 2));
    }
  }
  return o;
}
function M(e) {
  return Math.min(1, Math.max(0, e));
}
function N(e) {
  let t = M(e);
  return t * t * (3 - 2 * t);
}
function P(e, t, n, r) {
  let i = (r / n) % 2,
    a = i <= 1 ? i : 2 - i;
  return e + (t - e) * ((1 - Math.cos(a * Math.PI)) / 2);
}
function te(e, t) {
  let n = e * 0.14,
    r = (t - n) / Math.max(e - n, 0.001),
    i = (t - n) / Math.max(e * 0.32, 0.001);
  return (1 - N(r)) * (1 - N(i) * 0.12);
}
var F, I, ne, L, re, R, ie;
function ae() {
  return (ae = e(() => {
    ((F = 40 / 3), (I = 1.1), (ne = 0.2), (L = 0.5), (re = 2), (R = 0.7), (ie = 0.82));
  }))();
}
function z(e) {
  return Math.max(95, 190 - e * 7);
}
function oe(e, t) {
  let n = Math.max(8, Math.floor(e)),
    r = Math.max(10, Math.floor(t)),
    i = Math.floor(n / 2),
    a = Math.floor(r / 2),
    o = a * n + i,
    s = [o, o - 1, o - 2, o - 3];
  return {
    columns: n,
    rows: r,
    segments: s,
    previousSegments: s,
    food: a * n + ((i + 4) % n),
    direction: `right`,
    queuedDirection: null,
    score: 0,
    lastStepAtMs: null,
    gameOver: !1,
  };
}
function se(e, t) {
  if (e.gameOver || e.queuedDirection != null || t === e.direction) return e;
  let [n, r] = B[e.direction],
    [i, a] = B[t];
  return n === -i && r === -a ? e : { ...e, queuedDirection: t };
}
function ce(e, t) {
  if (e.gameOver) return e;
  if (e.lastStepAtMs == null) return { ...e, previousSegments: e.segments, lastStepAtMs: t };
  if (t - e.lastStepAtMs < z(e.score)) return e;
  let n = e.queuedDirection ?? e.direction,
    [r, i] = B[n],
    a = e.segments[0],
    o = ((a % e.columns) + r + e.columns) % e.columns,
    s = ((Math.floor(a / e.columns) + i + e.rows) % e.rows) * e.columns + o,
    c = s === e.food,
    l = e.segments.indexOf(s),
    u = { ...e, direction: n, queuedDirection: null, previousSegments: e.segments, lastStepAtMs: t };
  if (l !== -1 && (c || l < e.segments.length - 1)) return { ...u, gameOver: !0 };
  let d = [s, ...e.segments];
  if (!c) return (d.pop(), { ...u, segments: d });
  let f = new Set(d),
    p = [];
  for (let t = 0; t < e.columns; t++)
    for (let n = 0; n < e.rows; n++) {
      let r = n * e.columns + t;
      f.has(r) || p.push(r);
    }
  let m = p.length > 0 ? (p[Math.floor(Math.random() * p.length)] ?? null) : null;
  return { ...u, segments: d, score: e.score + 1, food: m, gameOver: m == null };
}
var B;
function le() {
  return (le = e(() => {
    B = { up: [0, -1], right: [1, 0], down: [0, 1], left: [-1, 0] };
  }))();
}
function ue(
  e,
  t,
  { width: n, height: r, nowMs: i, foregroundColor: a, accentColor: o, eyeColor: s, reducedMotion: c },
) {
  if (n <= 0 || r <= 0) return;
  let l = Math.min(n / t.columns, r / t.rows),
    u = (n - t.columns * l) / 2,
    d = (r - t.rows * l) / 2,
    f = (e) => u + ((e % t.columns) + 0.5) * l,
    p = (e) => d + (Math.floor(e / t.columns) + 0.5) * l,
    m = (t, n) => {
      (e.beginPath(), e.arc(f(t), p(t), n, 0, Math.PI * 2), e.fill());
    },
    h = (e, t) => {
      if (e === 0) return l * 0.43;
      let n = (e - 1) / Math.max(1, t - 2);
      return l * (0.35 - n * 0.085);
    };
  (e.save(), (e.fillStyle = a), (e.globalAlpha = 0.12), e.beginPath());
  let g = Math.max(0.8, l * 0.065);
  for (let n = 0; n < t.columns * t.rows; n++)
    (e.moveTo(f(n) + g, p(n)), e.arc(f(n), p(n), g, 0, Math.PI * 2));
  (e.fill(),
    (e.fillStyle = t.gameOver ? a : o),
    (e.globalAlpha = t.gameOver ? 0.26 : 1),
    t.food != null && m(t.food, l * 0.34));
  let _ = t.previousSegments.length > 0 ? t.previousSegments : t.segments,
    v = new Map(_.map((e, t) => [e, t])),
    y = new Map(t.segments.map((e, t) => [e, t])),
    b = c || t.lastStepAtMs == null ? 1 : Math.min(1, Math.max(0, (i - t.lastStepAtMs) / z(t.score))),
    x = b * b * (3 - 2 * b);
  for (let n of new Set([..._, ...t.segments])) {
    let r = v.get(n),
      i = y.get(n);
    if (i === 0) continue;
    let a = i == null ? 0 : h(i, t.segments.length),
      o = a;
    r !== 0 && (o = r == null ? 0 : h(r, _.length));
    let s = o * o,
      c = Math.sqrt(s + (a * a - s) * x);
    if (c <= 0.01) continue;
    let l = r === 0 ? (i ?? 0) : (r ?? i ?? 0),
      u = l + ((i ?? r ?? 0) - l) * x;
    ((e.globalAlpha = t.gameOver ? 0.26 : Math.max(0.5, 1 - u * 0.055)), m(n, c));
  }
  let S = t.segments[0];
  ((e.globalAlpha = t.gameOver ? 0.26 : 1), m(S, h(0, t.segments.length)));
  let C = 0,
    w = 0;
  switch (t.direction) {
    case `right`:
      C = 1;
      break;
    case `left`:
      C = -1;
      break;
    case `down`:
      w = 1;
      break;
    case `up`:
      w = -1;
  }
  let T = l * 0.1,
    E = Math.max(1.1, l * 0.055),
    D = l * (t.gameOver ? 0.16 : 0.115);
  ((e.globalAlpha = 1),
    (e.fillStyle = s),
    (e.strokeStyle = a),
    (e.lineWidth = Math.max(1.2, l * 0.065)),
    (e.lineCap = `round`));
  for (let n of [-1, 1]) {
    let r = f(S) + C * T - w * D * n,
      i = p(S) + w * T + C * D * n;
    if ((e.beginPath(), t.gameOver)) {
      let t = E * 1.65;
      (e.moveTo(r - t, i - t),
        e.lineTo(r + t, i + t),
        e.moveTo(r + t, i - t),
        e.lineTo(r - t, i + t),
        e.stroke());
    } else (e.arc(r, i, E, 0, Math.PI * 2), e.fill());
  }
  e.restore();
}
function V() {
  return (V = e(() => {
    le();
  }))();
}
function de(e) {
  let t = (0, _e.c)(131),
    {
      game: n,
      startedAtMs: r,
      reducedMotion: i,
      reserveHeaderSpace: a,
      insetStart: s,
      startLabel: c,
      controlsLabel: l,
      renderStatus: u,
      renderOverlay: d,
      getColors: f,
      getProgress: p,
      shouldIgnoreKeyboardShortcut: m,
      keyboardShortcutCaptureAttribute: h,
      onGameShown: g,
      onGameOpened: _,
      onGameEngaged: v,
      onGameCompleted: y,
      onGameSessionEnded: b,
      startButtonClassName: x,
    } = e,
    S = s === void 0 || s,
    E = (0, H.useId)(),
    D = (0, H.useRef)(null),
    A = (0, H.useRef)(null),
    j = (0, H.useRef)(null),
    M = (0, H.useRef)(null),
    N = (0, H.useRef)(null),
    P = (0, H.useRef)(null),
    te = (0, H.useRef)(!1),
    F;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = new Set()), (t[0] = F)) : (F = t[0]);
  let I = (0, H.useRef)(F),
    ne = (0, H.useRef)(null),
    L = (0, H.useRef)(null),
    re = (0, H.useRef)(void 0),
    [R, ie] = (0, H.useState)(!1),
    [ae, z] = (0, H.useState)(null),
    [B, le] = (0, H.useState)(0),
    [V, de] = (0, H.useState)(!1),
    [W, Se] = (0, H.useState)(!1),
    [Ce] = (0, H.useState)(Date.now),
    G = ae != null,
    K = r ?? Ce,
    we;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = function (e) {
        (e && L.current?.pointerId !== e.pointerId) || (clearTimeout(re.current), (re.current = void 0));
      }),
      (t[1] = we))
    : (we = t[1]);
  let q = we,
    J;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = function () {
        (q(), (L.current = null), I.current.clear());
      }),
      (t[2] = J))
    : (J = t[2]);
  let Y = J,
    Te;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = function (e, t, n, r) {
        let i = N.current;
        if (i?.type === `brick_breaker`) {
          let t = e.getBoundingClientRect(),
            { scale: a, offsetX: o, offsetY: s } = O(i.state, t.width, t.height),
            c = (n - t.left - o) / a,
            l = (r - t.top - s) / a,
            { paddleX: u, paddleWidth: d, paddleHeight: f, height: p } = i.state;
          if (c < u - 10 || c > u + d + 10 || l < p - f - 10 || l > p + 10) return;
          (I.current.clear(), (i.state = w(i.state, c)));
        }
        (e.setPointerCapture(t), (L.current = { pointerId: t, x: n, y: r }));
      }),
      (t[3] = Te))
    : (Te = t[3]);
  let Ee = Te,
    De;
  t[4] !== y || t[5] !== b
    ? ((De = function (e) {
        let t = P.current;
        t && ((P.current = null), e && y?.(t.id, e), b?.(t.id));
      }),
      (t[4] = y),
      (t[5] = b),
      (t[6] = De))
    : (De = t[6]);
  let X = De,
    Oe;
  t[7] === X
    ? (Oe = t[8])
    : ((Oe = function () {
        let e = D.current?.parentElement?.contains(document.activeElement);
        (X(),
          (N.current = null),
          Y(),
          ie(!1),
          z(null),
          de(!1),
          Se(!1),
          e && requestAnimationFrame(() => M.current?.focus({ preventScroll: !0 })));
      }),
      (t[7] = X),
      (t[8] = Oe));
  let ke = Oe,
    Ae;
  t[9] !== n || t[10] !== _
    ? ((Ae = function (e) {
        let t = e !== void 0 && e ? L.current : null;
        Y();
        let r = D.current;
        if (n === `` || !r || N.current || !r.clientWidth || !r.clientHeight) return;
        N.current =
          n === `snake`
            ? { type: `snake`, state: oe(Math.floor(r.clientWidth / 21), Math.floor(r.clientHeight / 21)) }
            : { type: `brick_breaker`, state: C(r.clientWidth, r.clientHeight) };
        let i = crypto.randomUUID();
        ((P.current = { id: i, engaged: !1 }),
          t && (r.setPointerCapture(t.pointerId), (L.current = t)),
          le(0),
          z(null),
          de(!1),
          Se(!1),
          ie(!0),
          r.focus({ preventScroll: !0 }),
          _(i));
      }),
      (t[9] = n),
      (t[10] = _),
      (t[11] = Ae))
    : (Ae = t[11]);
  let Z = Ae,
    je;
  t[12] === v
    ? (je = t[13])
    : ((je = function () {
        let e = P.current;
        !e || e.engaged || N.current?.state.gameOver || ((e.engaged = !0), v(e.id));
      }),
      (t[12] = v),
      (t[13] = je));
  let Q = je,
    $ = (0, H.useEffectEvent)(ke),
    Me = (0, H.useEffectEvent)(X),
    Ne;
  t[14] === g ? (Ne = t[15]) : ((Ne = () => g?.()), (t[14] = g), (t[15] = Ne));
  let Pe = (0, H.useEffectEvent)(Ne),
    Fe;
  t[16] === Z ? (Fe = t[17]) : ((Fe = () => Z()), (t[16] = Z), (t[17] = Fe));
  let Ie = (0, H.useEffectEvent)(Fe),
    Le = (0, H.useEffectEvent)(p),
    Re = (0, H.useEffectEvent)(m),
    ze;
  t[18] === Me
    ? (ze = t[19])
    : ((ze = () => () => {
        (q(), Me());
      }),
      (t[18] = Me),
      (t[19] = ze));
  let Be;
  (t[20] === Symbol.for(`react.memo_cache_sentinel`) ? ((Be = []), (t[20] = Be)) : (Be = t[20]),
    (0, H.useEffect)(ze, Be));
  let Ve;
  t[21] !== $ || t[22] !== V || t[23] !== i
    ? ((Ve = () => {
        if (!V) return;
        let e = setTimeout(() => Se(!0), 1500),
          t = setTimeout($, 1500 + (i ? 0 : 500));
        return () => {
          (clearTimeout(e), clearTimeout(t));
        };
      }),
      (t[21] = $),
      (t[22] = V),
      (t[23] = i),
      (t[24] = Ve))
    : (Ve = t[24]);
  let He;
  (t[25] !== V || t[26] !== i ? ((He = [V, i]), (t[25] = V), (t[26] = i), (t[27] = He)) : (He = t[27]),
    (0, H.useEffect)(Ve, He));
  let Ue;
  t[28] !== X ||
  t[29] !== W ||
  t[30] !== n ||
  t[31] !== K ||
  t[32] !== f ||
  t[33] !== Le ||
  t[34] !== R ||
  t[35] !== G ||
  t[36] !== i ||
  t[37] !== Re ||
  t[38] !== Pe ||
  t[39] !== Ie
    ? ((Ue = () => {
        let e = D.current,
          t = A.current,
          r = j.current,
          a = t?.getContext(`2d`),
          o = r?.getContext(`2d`);
        if (!e || !t || !r || !a || !o) return;
        let s = k(a),
          c = 0,
          l,
          u = !0,
          d = !1,
          p = 0,
          m = 0,
          h = 0,
          g = ne.current ?? performance.now();
        ne.current = g;
        let _ = (t) => {
            if (((c = 0), (l = void 0), document.hidden || !u)) return;
            let r = !G && document.hasFocus(),
              d = 33.333333333333336;
            if ((i && !R ? (d = 1e3) : R && n === `brick_breaker` && (d = 16.666666666666668), t - h >= d)) {
              h = t;
              let n = f(getComputedStyle(e));
              if (
                ((!R || W) &&
                  (a.clearRect(0, 0, p, m),
                  s({
                    width: p,
                    height: m,
                    elapsedMs: t - g,
                    progress: Le(Date.now() - K),
                    accentColor: n.accentColor,
                    reducedMotion: i,
                  })),
                R && N.current)
              ) {
                let e = N.current,
                  a = I.current.has(`ArrowLeft`) || I.current.has(`KeyA`),
                  s = I.current.has(`ArrowRight`) || I.current.has(`KeyD`),
                  c = 0;
                a !== s && (c = a ? -1 : 1);
                let l = e;
                (r &&
                  (l =
                    e.type === `snake`
                      ? { type: `snake`, state: ce(e.state, t) }
                      : { type: `brick_breaker`, state: T(e.state, t, c) }),
                  (N.current = l),
                  l.state.score !== e.state.score && le(l.state.score),
                  l.state.gameOver &&
                    !e.state.gameOver &&
                    (Y(), X(l.type === `snake` && l.state.food == null ? `won` : `lost`), de(!0)),
                  o.clearRect(0, 0, p, m));
                let u = { width: p, height: m, nowMs: t, ...n, reducedMotion: i };
                l.type === `snake` ? ue(o, l.state, u) : ee(o, l.state, u);
              }
            }
            !R && i
              ? (l = setTimeout(() => _(performance.now()), 1e3))
              : (!R || W || r) && (c = requestAnimationFrame(_));
          },
          v = function () {
            (cancelAnimationFrame(c),
              clearTimeout(l),
              d && u && !document.hidden && !te.current && ((te.current = !0), Pe()),
              N.current && (N.current.state.lastStepAtMs = null),
              (document.hidden || !u || G || !document.hasFocus()) && Y(),
              (h = -1 / 0),
              _(performance.now()));
          },
          y,
          b = () => {
            (y?.removeEventListener(`change`, b),
              (y = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)),
              y.addEventListener(`change`, b),
              (p = e.clientWidth),
              (m = e.clientHeight));
            let n = Math.min(window.devicePixelRatio || 1, 2);
            for (let [e, i] of [
              [t, a],
              [r, o],
            ])
              ((e.width = Math.round(p * n)),
                (e.height = Math.round(m * n)),
                i.setTransform(n, 0, 0, n, 0, 0));
            v();
          },
          x = new ResizeObserver(b),
          S = new MutationObserver(() => {
            c === 0 && v();
          }),
          C = new IntersectionObserver((e) => {
            ((d = !0), (u = e.some(ge)), v());
          }),
          w = (t) => {
            if (
              R ||
              document.hidden ||
              !u ||
              t.key !== ` ` ||
              t.altKey ||
              t.ctrlKey ||
              t.metaKey ||
              t.shiftKey ||
              t.defaultPrevented ||
              t.repeat ||
              t.isComposing ||
              t.keyCode === 229 ||
              Re(t)
            )
              return;
            let n = t.target;
            if (
              !(n instanceof HTMLElement) ||
              n.isContentEditable ||
              n.closest(be) ||
              n.closest(xe) ||
              e.closest(xe)
            )
              return;
            let r = e.getBoundingClientRect(),
              i = Math.max(0, r.left),
              a = Math.min(window.innerWidth, r.right),
              o = Math.max(0, r.top),
              s = Math.min(window.innerHeight, r.bottom);
            a <= i ||
              s <= o ||
              !e.contains(document.elementFromPoint((i + a) / 2, (o + s) / 2)) ||
              (t.preventDefault(), Ie());
          };
        (x.observe(e), C.observe(e));
        for (let t = e; t; t = t.parentElement)
          S.observe(t, { attributes: !0, attributeFilter: [`class`, `style`, `data-chat-theme`] });
        return (
          document.addEventListener(`visibilitychange`, v),
          window.addEventListener(`blur`, v),
          window.addEventListener(`focus`, v),
          n !== `` && !R && window.addEventListener(`keydown`, w),
          b(),
          () => {
            (cancelAnimationFrame(c),
              clearTimeout(l),
              x.disconnect(),
              C.disconnect(),
              S.disconnect(),
              y?.removeEventListener(`change`, b),
              document.removeEventListener(`visibilitychange`, v),
              window.removeEventListener(`blur`, v),
              window.removeEventListener(`focus`, v),
              window.removeEventListener(`keydown`, w));
          }
        );
      }),
      (t[28] = X),
      (t[29] = W),
      (t[30] = n),
      (t[31] = K),
      (t[32] = f),
      (t[33] = Le),
      (t[34] = R),
      (t[35] = G),
      (t[36] = i),
      (t[37] = Re),
      (t[38] = Pe),
      (t[39] = Ie),
      (t[40] = Ue))
    : (Ue = t[40]);
  let We;
  (t[41] !== W || t[42] !== n || t[43] !== K || t[44] !== f || t[45] !== R || t[46] !== G || t[47] !== i
    ? ((We = [n, R, G, W, i, K, f]),
      (t[41] = W),
      (t[42] = n),
      (t[43] = K),
      (t[44] = f),
      (t[45] = R),
      (t[46] = G),
      (t[47] = i),
      (t[48] = We))
    : (We = t[48]),
    (0, H.useEffect)(Ue, We));
  let Ge;
  t[49] !== Q || t[50] !== G
    ? ((Ge = function (e) {
        let t = N.current;
        t?.type === `snake` && !G && ((t.state = se(t.state, e)), Q());
      }),
      (t[49] = Q),
      (t[50] = G),
      (t[51] = Ge))
    : (Ge = t[51]);
  let Ke = Ge,
    qe;
  t[52] !== ke || t[53] !== V || t[54] !== R || t[55] !== Q || t[56] !== G || t[57] !== Ke
    ? ((qe = function (e) {
        if (!(!R || e.altKey || e.ctrlKey || e.metaKey)) {
          if (e.key === ` ` || e.key === `Escape`) {
            if ((e.preventDefault(), e.stopPropagation(), e.repeat)) return;
            (Y(), e.key === `Escape` ? ke() : V || z(he));
            return;
          }
          if (N.current?.type === `brick_breaker`)
            ve[e.code] && (e.preventDefault(), e.stopPropagation(), !G && !V && (I.current.add(e.code), Q()));
          else {
            let t = ye[e.key];
            t && (e.preventDefault(), e.stopPropagation(), Ke(t));
          }
        }
      }),
      (t[52] = ke),
      (t[53] = V),
      (t[54] = R),
      (t[55] = Q),
      (t[56] = G),
      (t[57] = Ke),
      (t[58] = qe))
    : (qe = t[58]);
  let Je = qe,
    Ye;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = function (e) {
        N.current?.type === `brick_breaker` &&
          ve[e.code] &&
          (I.current.delete(e.code), e.preventDefault(), e.stopPropagation());
      }),
      (t[59] = Ye))
    : (Ye = t[59]);
  let Xe = Ye,
    Ze;
  t[60] !== V || t[61] !== R || t[62] !== Q || t[63] !== ae
    ? ((Ze = function (e) {
        R &&
          ae !== `manual` &&
          !V &&
          e.isPrimary &&
          e.button === 0 &&
          (e.currentTarget.focus({ preventScroll: !0 }),
          Ee(e.currentTarget, e.pointerId, e.clientX, e.clientY),
          N.current?.type === `brick_breaker` && L.current?.pointerId === e.pointerId && Q());
      }),
      (t[60] = V),
      (t[61] = R),
      (t[62] = Q),
      (t[63] = ae),
      (t[64] = Ze))
    : (Ze = t[64]);
  let Qe = Ze,
    $e;
  t[65] !== Q || t[66] !== Ke
    ? (($e = function (e) {
        let t = L.current;
        if (!t || t.pointerId !== e.pointerId) return;
        let n = N.current;
        if (n?.type === `brick_breaker`) {
          let t = e.currentTarget.getBoundingClientRect(),
            { scale: r, offsetX: i } = O(n.state, t.width, t.height),
            a = (e.clientX - t.left - i) / r;
          ((n.state = w(n.state, a)), Q());
          return;
        }
        let r = e.clientX - t.x,
          i = e.clientY - t.y;
        if (Math.max(Math.abs(r), Math.abs(i)) < 12) return;
        let a;
        ((a = Math.abs(r) > Math.abs(i) ? (r > 0 ? `right` : `left`) : i > 0 ? `down` : `up`),
          Ke(a),
          (L.current = { pointerId: e.pointerId, x: e.clientX, y: e.clientY }));
      }),
      (t[65] = Q),
      (t[66] = Ke),
      (t[67] = $e))
    : ($e = t[67]);
  let et = $e,
    tt;
  t[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((tt = function (e) {
        L.current?.pointerId === e.pointerId && (L.current = null);
      }),
      (t[68] = tt))
    : (tt = t[68]);
  let nt = tt,
    rt = S ? `px-3` : `pe-3`,
    it = a && `pt-14`,
    at;
  t[69] !== rt || t[70] !== it
    ? ((at = o(`absolute inset-0 flex flex-col pb-3`, rt, it)), (t[69] = rt), (t[70] = it), (t[71] = at))
    : (at = t[71]);
  let ot;
  t[72] === R
    ? (ot = t[73])
    : ((ot = (e) => {
        e.currentTarget.contains(e.relatedTarget) || (Y(), R && z(me));
      }),
      (t[72] = R),
      (t[73] = ot));
  let st = R ? `application` : `group`,
    ct = R ? l : void 0,
    lt = R ? E : void 0,
    ut = R ? 0 : -1,
    dt = R || void 0,
    ft;
  t[74] !== h || t[75] !== dt ? ((ft = { [h]: dt }), (t[74] = h), (t[75] = dt), (t[76] = ft)) : (ft = t[76]);
  let pt = n !== `` && `touch-none`,
    mt;
  t[77] === pt
    ? (mt = t[78])
    : ((mt = o(`relative min-h-0 flex-1 rounded-2xl outline-none select-none`, pt)),
      (t[77] = pt),
      (t[78] = mt));
  let ht;
  t[79] !== V || t[80] !== R
    ? ((ht = () => {
        R && !V && z(pe);
      }),
      (t[79] = V),
      (t[80] = R),
      (t[81] = ht))
    : (ht = t[81]);
  let gt;
  t[82] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gt = (e) => {
        e.target === e.currentTarget && nt(e);
      }),
      (t[82] = gt))
    : (gt = t[82]);
  let _t = R && !W && `invisible`,
    vt;
  t[83] === _t
    ? (vt = t[84])
    : ((vt = o(`pointer-events-none absolute inset-0 size-full`, _t)), (t[83] = _t), (t[84] = vt));
  let yt;
  t[85] === vt
    ? (yt = t[86])
    : ((yt = (0, U.jsx)(`canvas`, { ref: A, "aria-hidden": !0, className: vt })), (t[85] = vt), (t[86] = yt));
  let bt = !i && `transition-opacity duration-500`,
    xt = R && !W ? `opacity-100` : `opacity-0`,
    St;
  t[87] !== bt || t[88] !== xt
    ? ((St = o(`pointer-events-none absolute inset-0 size-full`, bt, xt)),
      (t[87] = bt),
      (t[88] = xt),
      (t[89] = St))
    : (St = t[89]);
  let Ct;
  t[90] === St
    ? (Ct = t[91])
    : ((Ct = (0, U.jsx)(`canvas`, { ref: j, "aria-hidden": !0, className: St })), (t[90] = St), (t[91] = Ct));
  let wt;
  t[92] !== n || t[93] !== R || t[94] !== x || t[95] !== Z || t[96] !== c
    ? ((wt =
        n !== `` &&
        !R &&
        (0, U.jsx)(`button`, {
          ref: M,
          type: `button`,
          className: o(`absolute inset-0 rounded-2xl outline-none`, x),
          "aria-label": c,
          onClick: () => Z(),
          onPointerDown: (e) => {
            e.isPrimary &&
              e.button === 0 &&
              (e.currentTarget.focus({ preventScroll: !0 }),
              q(),
              (L.current = { pointerId: e.pointerId, x: e.clientX, y: e.clientY }),
              (re.current = setTimeout(() => Z(!0), 500)));
          },
          onPointerMove: (e) => {
            let t = L.current;
            t && t.pointerId === e.pointerId && Math.hypot(e.clientX - t.x, e.clientY - t.y) > 12 && q();
          },
          onPointerUp: q,
          onPointerCancel: q,
          onPointerLeave: q,
          onContextMenu: fe,
        })),
      (t[92] = n),
      (t[93] = R),
      (t[94] = x),
      (t[95] = Z),
      (t[96] = c),
      (t[97] = wt))
    : (wt = t[97]);
  let Tt;
  t[98] !== Je ||
  t[99] !== Qe ||
  t[100] !== et ||
  t[101] !== st ||
  t[102] !== ct ||
  t[103] !== lt ||
  t[104] !== ut ||
  t[105] !== ft ||
  t[106] !== mt ||
  t[107] !== ht ||
  t[108] !== yt ||
  t[109] !== Ct ||
  t[110] !== wt
    ? ((Tt = (0, U.jsxs)(`div`, {
        ref: D,
        role: st,
        "aria-label": ct,
        "aria-describedby": lt,
        tabIndex: ut,
        ...ft,
        "data-testid": `image-gen-loading-game-board`,
        className: mt,
        onKeyDown: Je,
        onKeyUp: Xe,
        onFocus: ht,
        onPointerDown: Qe,
        onPointerMove: et,
        onPointerUp: nt,
        onPointerCancel: nt,
        onLostPointerCapture: gt,
        children: [yt, Ct, wt],
      })),
      (t[98] = Je),
      (t[99] = Qe),
      (t[100] = et),
      (t[101] = st),
      (t[102] = ct),
      (t[103] = lt),
      (t[104] = ut),
      (t[105] = ft),
      (t[106] = mt),
      (t[107] = ht),
      (t[108] = yt),
      (t[109] = Ct),
      (t[110] = wt),
      (t[111] = Tt))
    : (Tt = t[111]);
  let Et;
  t[112] !== W || t[113] !== R || t[114] !== d
    ? ((Et = d?.(!R || W)), (t[112] = W), (t[113] = R), (t[114] = d), (t[115] = Et))
    : (Et = t[115]);
  let Dt;
  t[116] !== V || t[117] !== R || t[118] !== G || t[119] !== u || t[120] !== B || t[121] !== E
    ? ((Dt =
        R &&
        (0, U.jsx)(`span`, {
          id: E,
          role: `status`,
          "aria-live": `polite`,
          children: u({ score: B, paused: G, gameOver: V }),
        })),
      (t[116] = V),
      (t[117] = R),
      (t[118] = G),
      (t[119] = u),
      (t[120] = B),
      (t[121] = E),
      (t[122] = Dt))
    : (Dt = t[122]);
  let Ot;
  t[123] === Dt
    ? (Ot = t[124])
    : ((Ot = (0, U.jsx)(`div`, { className: `sr-only`, children: Dt })), (t[123] = Dt), (t[124] = Ot));
  let kt;
  return (
    t[125] !== at || t[126] !== ot || t[127] !== Tt || t[128] !== Et || t[129] !== Ot
      ? ((kt = (0, U.jsxs)(`div`, { role: `group`, className: at, onBlur: ot, children: [Tt, Et, Ot] })),
        (t[125] = at),
        (t[126] = ot),
        (t[127] = Tt),
        (t[128] = Et),
        (t[129] = Ot),
        (t[130] = kt))
      : (kt = t[130]),
    kt
  );
}
function fe(e) {
  return e.preventDefault();
}
function pe(e) {
  return e === `blur` ? null : e;
}
function me(e) {
  return e ?? `blur`;
}
function he(e) {
  return e == null ? `manual` : null;
}
function ge(e) {
  return e.isIntersecting;
}
var _e, H, U, ve, ye, be, xe;
function W() {
  return (W = e(() => {
    ((_e = c()),
      s(),
      (H = r()),
      ae(),
      le(),
      V(),
      (U = a()),
      (ve = { ArrowLeft: -1, KeyA: -1, ArrowRight: 1, KeyD: 1 }),
      (ye = {
        ArrowUp: `up`,
        w: `up`,
        W: `up`,
        ArrowRight: `right`,
        d: `right`,
        D: `right`,
        ArrowDown: `down`,
        s: `down`,
        S: `down`,
        ArrowLeft: `left`,
        a: `left`,
        A: `left`,
      }),
      (be = [
        `input, textarea, select, button, a[href], summary, audio, video, [contenteditable]`,
        `[role='button'], [role='link'], [role='textbox'], [role='searchbox'], [role='combobox']`,
        `[role='checkbox'], [role='radio'], [role='switch'], [role='slider'], [role='spinbutton']`,
        `[role='tab'], [role='menu'], [role='listbox'], [role='tree'], [role='grid']`,
      ].join(`, `)),
      (xe = `dialog, [role='dialog'], [role='alertdialog'], [popover], [inert]`));
  }))();
}
function Se(e) {
  let t = Math.max(0, e / 45e3);
  for (let e = 1; e < Ce.length; e += 1) {
    let n = Ce[e - 1],
      r = Ce[e];
    if (t <= r[0]) {
      let e = (t - n[0]) / (r[0] - n[0]);
      return Math.floor(n[1] + e * (r[1] - n[1]));
    }
  }
  return Math.min(99, Math.floor(90 + 10 * (1 - Math.exp(-1.5 * (t - 1)))));
}
var Ce;
function G() {
  return (G = e(() => {
    Ce = [
      [0, 3],
      [0.1, 25],
      [0.55, 58],
      [0.85, 88],
      [1, 90],
    ];
  }))();
}
function K(e) {
  let t = (0, q.c)(23),
    { startedAtMs: n, showHeadline: r, showProgress: a, isGif: o, imageCount: s } = e,
    c = o !== void 0 && o,
    l = d(),
    u;
  t[0] === n ? (u = t[1]) : ((u = () => we(n)), (t[0] = n), (t[1] = u));
  let [f, p] = (0, J.useState)(u),
    m = c ? `gif` : f.stage,
    [h, _] = (0, J.useState)(m);
  l && h !== m && _(m);
  let v, y;
  (t[2] === n
    ? ((v = t[3]), (y = t[4]))
    : ((v = () => {
        let e = setInterval(() => {
          let e = we(n);
          p((t) => (t.progress === e.progress && t.stage === e.stage ? t : e));
        }, 500);
        return () => clearInterval(e);
      }),
      (y = [n]),
      (t[2] = n),
      (t[3] = v),
      (t[4] = y)),
    (0, J.useEffect)(v, y));
  let b = r ? `absolute inset-x-6 top-6 text-size-chat browser:text-base` : `sr-only`,
    x = h !== m || void 0,
    S;
  t[5] === m ? (S = t[6]) : ((S = () => _(m)), (t[5] = m), (t[6] = S));
  let C;
  t[7] !== h || t[8] !== s
    ? ((C =
        h === `gif`
          ? (0, Y.jsx)(g, {
              id: `codex.chatGptConversation.imageGeneration.loadingGames.creatingGifs.count`,
              defaultMessage: `{count, plural, one {Creating GIF} other {Creating GIFs}}`,
              description: `Short reassuring loading headline in a ChatGPT conversation while the image tool creates animated GIF images. GIFs are looping animations; keep this status concise. Placeholder {count} is the number of GIFs being generated and controls singular or plural grammar.`,
              values: { count: s },
            })
          : (0, Y.jsx)(g, { ...Object.values(Ee)[h] })),
      (t[7] = h),
      (t[8] = s),
      (t[9] = C))
    : (C = t[9]);
  let w;
  t[10] !== x || t[11] !== S || t[12] !== C
    ? ((w = (0, Y.jsx)(`span`, {
        className: `inline-block opacity-100 transition-opacity duration-500 ease-linear data-changing:opacity-0`,
        "data-changing": x,
        onTransitionEnd: S,
        children: C,
      })),
      (t[10] = x),
      (t[11] = S),
      (t[12] = C),
      (t[13] = w))
    : (w = t[13]);
  let T;
  t[14] !== b || t[15] !== w
    ? ((T = (0, Y.jsx)(`span`, { className: b, children: w })), (t[14] = b), (t[15] = w), (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== f || t[18] !== a
    ? ((E =
        a &&
        (0, Y.jsx)(`span`, {
          className: `absolute end-3.5 bottom-3.5 flex h-7 min-w-14 items-center justify-center rounded-full bg-surface-elevated-secondary px-2 font-medium text-image-generation-text tabular-nums shadow-lg ring-[0.5px] ring-border`,
          children: (0, Y.jsx)(i, { value: f.progress / 100, style: `percent` }),
        })),
      (t[17] = f),
      (t[18] = a),
      (t[19] = E))
    : (E = t[19]);
  let D;
  return (
    t[20] !== T || t[21] !== E
      ? ((D = (0, Y.jsxs)(`div`, {
          className: `pointer-events-none absolute inset-0 z-10 text-sm text-secondary select-none`,
          children: [T, E],
        })),
        (t[20] = T),
        (t[21] = E),
        (t[22] = D))
      : (D = t[22]),
    D
  );
}
function we(e) {
  let t = Date.now() - e;
  return { progress: Se(t), stage: Math.max(0, Te.filter((e) => t >= e).length - 1) };
}
var q, J, Y, Te, Ee;
function De() {
  return (De = e(() => {
    ((q = c()),
      (J = r()),
      f(),
      u(),
      G(),
      (Y = a()),
      (Te = [0, 1e4, 2e4, 25e3, 3e4, 35e3, 4e4, 5e4]),
      (Ee = p({
        0: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.creatingImage`,
          defaultMessage: `Creating image`,
          description: `Initial loading headline above the optional mini-game while a requested image is generating. Keep this status short and reassuring.`,
        },
        1: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.sketchingItOut`,
          defaultMessage: `Sketching it out`,
          description: `Rotating loading headline above the optional image-generation mini-game. Means creating an initial rough sketch of the requested image; keep the tone casual and progressive.`,
        },
        2: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.makingTheFirstDraft`,
          defaultMessage: `Making the first draft`,
          description: `Rotating loading headline above the optional image-generation mini-game. Means shaping the requested image into an initial draft; keep this status short and reassuring.`,
        },
        3: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.settingTheScene`,
          defaultMessage: `Setting the scene`,
          description: `Rotating loading headline above the optional image-generation mini-game. Means establishing the requested image's background and composition.`,
        },
        4: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.polishingDetails`,
          defaultMessage: `Polishing details`,
          description: `Rotating loading headline above the optional image-generation mini-game. Means refining small details in the requested image; keep the tone casual and progressive.`,
        },
        5: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.finishingUp`,
          defaultMessage: `Finishing up`,
          description: `Rotating loading headline above the optional image-generation mini-game. A casual way to say that image generation is nearly complete and still being finished.`,
        },
        6: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.addingFinalTouches`,
          defaultMessage: `Adding final touches`,
          description: `Rotating loading headline above the optional image-generation mini-game. Means making small final adjustments to the requested image; keep the tone casual and progressive.`,
        },
        7: {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.oneLastTweak`,
          defaultMessage: `One last tweak…`,
          description: `Final rotating loading headline above the optional image-generation mini-game. Playful fragment suggesting one small adjustment remains. The ellipsis is intentional.`,
        },
      })));
  }))();
}
function X(e) {
  let n = (0, je.c)(31),
    { game: r, messageId: i, startedAtMs: a, aspectRatio: o, showHeadline: s, isGif: c, imageCount: u } = e,
    f = o === void 0 ? 1 : o,
    p = s === void 0 || s,
    m = c !== void 0 && c,
    g = u === void 0 ? 1 : u,
    v = t(l),
    y = h(),
    C = d(),
    [w] = (0, Q.useState)(Date.now),
    T = a ?? w,
    E;
  n[0] !== r || n[1] !== y
    ? ((E =
        r === `snake`
          ? y.formatMessage({
              id: `codex.chatGptConversation.imageGeneration.loadingGames.startSnake`,
              defaultMessage: `Play Snake while your image is generating`,
              description: `Screen-reader label for the button covering the image generation waiting animation. Activating it starts the Snake mini-game while the image generates. This label is not displayed visually.`,
            })
          : y.formatMessage({
              id: `codex.chatGptConversation.imageGeneration.loadingGames.startBrickBreaker`,
              defaultMessage: `Play Brick Breaker while your image is generating`,
              description: `Screen-reader label for the button covering the image generation waiting animation. Activating it starts the Brick Breaker mini-game while the image generates. This label is not displayed visually.`,
            })),
      (n[0] = r),
      (n[1] = y),
      (n[2] = E))
    : (E = n[2]);
  let D = E,
    O;
  n[3] !== r || n[4] !== y
    ? ((O =
        r === `snake`
          ? y.formatMessage({
              id: `codex.chatGptConversation.imageGeneration.loadingGames.snakeControls`,
              defaultMessage: `Snake. Use arrow keys, WASD, or swipe to move. Press Space to pause or resume, or Escape to exit.`,
              description: `Screen-reader instructions for the Snake game in the image generation loading card. Arrow keys, WASD, Space, and Escape refer to keyboard keys. Swiping on the board also steers the snake.`,
            })
          : y.formatMessage({
              id: `codex.chatGptConversation.imageGeneration.loadingGames.brickBreakerControls`,
              defaultMessage: `Brick Breaker. Drag the paddle, or hold Left, Right, A, or D to move. Press Space to pause or resume, or Escape to exit.`,
              description: `Screen-reader instructions for Brick Breaker in the image generation loading card. Left and Right mean arrow keys; A, D, Space, and Escape are keyboard keys. The paddle can also be dragged with a mouse or finger.`,
            })),
      (n[3] = r),
      (n[4] = y),
      (n[5] = O))
    : (O = n[5]);
  let ee = O,
    k;
  n[6] === f ? (k = n[7]) : ((k = { aspectRatio: f }), (n[6] = f), (n[7] = k));
  let A;
  n[8] !== T || n[9] !== g || n[10] !== m || n[11] !== p
    ? ((A = (e) =>
        (0, $.jsx)(K, { startedAtMs: T, showHeadline: p, showProgress: e, isGif: m, imageCount: g })),
      (n[8] = T),
      (n[9] = g),
      (n[10] = m),
      (n[11] = p),
      (n[12] = A))
    : (A = n[12]);
  let j, M;
  n[13] !== r || n[14] !== i || n[15] !== v
    ? ((M = (e) => {
        _(v, x, {
          appSource: S.CHATGPT_CONVERSATION_IMAGE_LOADING_EXPERIENCE_APP_SOURCE_CODEX,
          imageGenerationLoadingStyle: r,
          messageId: i,
          gameSessionId: e,
        });
      }),
      (j = (e) => {
        _(v, b, {
          appSource: S.CHATGPT_CONVERSATION_IMAGE_LOADING_EXPERIENCE_APP_SOURCE_CODEX,
          imageGenerationLoadingStyle: r,
          messageId: i,
          gameSessionId: e,
        });
      }),
      (n[13] = r),
      (n[14] = i),
      (n[15] = v),
      (n[16] = j),
      (n[17] = M))
    : ((j = n[16]), (M = n[17]));
  let N;
  n[18] !== ee ||
  n[19] !== r ||
  n[20] !== T ||
  n[21] !== C ||
  n[22] !== p ||
  n[23] !== D ||
  n[24] !== j ||
  n[25] !== A ||
  n[26] !== M
    ? ((N = (0, $.jsx)(
        de,
        {
          game: r,
          startedAtMs: T,
          reducedMotion: C,
          reserveHeaderSpace: p,
          startLabel: D,
          controlsLabel: ee,
          renderStatus: Z,
          renderOverlay: A,
          getColors: Ae,
          getProgress: ke,
          shouldIgnoreKeyboardShortcut: Oe,
          keyboardShortcutCaptureAttribute: `data-codex-shortcut-capture`,
          startButtonClassName: `cursor-interaction`,
          onGameOpened: M,
          onGameEngaged: j,
        },
        r,
      )),
      (n[18] = ee),
      (n[19] = r),
      (n[20] = T),
      (n[21] = C),
      (n[22] = p),
      (n[23] = D),
      (n[24] = j),
      (n[25] = A),
      (n[26] = M),
      (n[27] = N))
    : (N = n[27]);
  let P;
  return (
    n[28] !== N || n[29] !== k
      ? ((P = (0, $.jsx)(`div`, {
          className: `relative w-full max-w-[400px] overflow-hidden rounded-2xl text-default`,
          style: k,
          children: N,
        })),
        (n[28] = N),
        (n[29] = k),
        (n[30] = P))
      : (P = n[30]),
    P
  );
}
function Oe(e) {
  return (
    e.target instanceof HTMLElement &&
    !!e.target.closest(`[data-codex-shortcut-capture], [data-codex-composer], [data-codex-terminal]`)
  );
}
function ke(e) {
  return Se(e) / 100;
}
function Ae(e) {
  return {
    foregroundColor: e.color,
    accentColor: e.getPropertyValue(`--color-image-generation-accent`).trim(),
    eyeColor: e.getPropertyValue(`--color-image-generation-foreground`).trim(),
  };
}
function Z({ score: e, paused: t, gameOver: n }) {
  return n
    ? (0, $.jsx)(g, {
        id: `codex.chatGptConversation.imageGeneration.loadingGames.gameOver`,
        defaultMessage: `Game over · {score}`,
        description: `Screen-reader announcement when a mini-game in ChatGPT's image generation loading card ends. The score placeholder is the final number of points.`,
        values: { score: e },
      })
    : t
      ? (0, $.jsx)(g, {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.pausedScore`,
          defaultMessage: `Paused · {score}`,
          description: `Screen-reader announcement when a mini-game in ChatGPT's image generation loading card is paused. The score placeholder is the current number of points.`,
          values: { score: e },
        })
      : (0, $.jsx)(g, {
          id: `codex.chatGptConversation.imageGeneration.loadingGames.score`,
          defaultMessage: `Score: {score}`,
          description: `Screen-reader announcement of the score while a mini-game is played in the image generation loading card. The score placeholder is the current number of points.`,
          values: { score: e },
        });
}
var je, Q, $;
function Me() {
  return (Me = e(() => {
    ((je = c()), y(), W(), m(), (Q = r()), f(), u(), v(), n(), De(), G(), ($ = a()));
  }))();
}
Me();
export { X as ImageGenLoadingGames };
//# sourceMappingURL=image-gen-loading-games-39005ee7f071.js.map
