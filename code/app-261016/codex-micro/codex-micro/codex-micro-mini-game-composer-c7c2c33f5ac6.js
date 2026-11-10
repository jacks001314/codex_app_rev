import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  FBt as i,
  FTt as a,
  ITt as o,
  LNt as s,
  NFt as c,
  PBt as l,
  Qst as u,
  Uz as d,
  Wz as f,
  ZSt as p,
  iCt as m,
  iFt as h,
  jFt as g,
  nCt as _,
  yCt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as y,
  FDr as b,
  Fer as x,
  NDr as S,
  SSr as C,
  bct as w,
  bur as T,
  eer as E,
  gSr as D,
  hct as O,
  jSr as k,
  lct as ee,
  mSr as A,
  xur as j,
  yct as M,
} from "./app-initial-ad16eaadf81f.js";
import { d as te, l as ne, n as re, s as ie, t as ae } from "./codex-micro-mini-games-c3590553f66e.js";
function oe(e, t = ``) {
  let n = se(
    (e ?? []).flatMap((e) => (e.type === `agentMessage` ? ce(j(e.text, void 0), e.id) : [])),
    me,
  );
  return n.key.length > 0 || t.trim().length === 0 ? n : se(ce(j(t, void 0), `home-title`), he);
}
function N(e) {
  return e ? 20 : 10;
}
function se(e, t) {
  let n = [],
    r = 0;
  for (let t = e.length - 1; t >= 0 && !(r >= fe); --t) {
    let i = e[t];
    if (i == null) continue;
    let a = le(i.glyphs, pe - r);
    a.some(I) && (n.unshift({ glyphs: a }), (r += a.filter(I).length));
  }
  return {
    blocks: n,
    fontSize: t,
    key:
      n.length === 0
        ? ``
        : `${t}:${n
            .flatMap((e) => e.glyphs)
            .map((e) => `${e.id}:${e.character}`)
            .join(`|`)}`,
  };
}
function ce(e, t, n = ``) {
  return e.flatMap((e, r) => {
    let i = `${t}:${n}${r}`;
    return ue(e)
      ? e.items.flatMap((e, t) => F(P(e.tokens), `${i}:item:${t}`))
      : de(e)
        ? [e.header, ...e.rows].flatMap((e, t) =>
            F(
              e.flatMap((e, t) => [...(t === 0 ? [] : [{ bonus: !1, text: ` ` }]), ...P(e.tokens)]),
              `${i}:row:${t}`,
            ),
          )
        : e.type === `blockquote` && `tokens` in e && Array.isArray(e.tokens)
          ? ce(e.tokens, t, `${n}${r}:`)
          : e.type === `code` && `text` in e
            ? F([{ bonus: !0, text: e.text }], i)
            : e.type === `space` ||
                e.type === `hr` ||
                e.type === `def` ||
                e.type === `html` ||
                e.type === `image`
              ? []
              : `tokens` in e && Array.isArray(e.tokens)
                ? F(P(e.tokens, e.type === `heading`), i)
                : `text` in e && typeof e.text == `string`
                  ? F([{ bonus: !1, text: e.text }], i)
                  : [];
  });
}
function P(e, t = !1) {
  return e.flatMap((e) =>
    e.type === `image`
      ? []
      : e.type === `br`
        ? [{ bonus: !1, text: ` ` }]
        : `tokens` in e && Array.isArray(e.tokens)
          ? P(e.tokens, t || e.type === `strong` || e.type === `codespan`)
          : `text` in e && typeof e.text == `string`
            ? [{ bonus: t || e.type === `codespan`, text: e.text }]
            : [],
  );
}
function F(e, t) {
  let n = !0,
    r = e.flatMap((e, r) =>
      Array.from(ge.segment(e.text)).flatMap(({ index: i, segment: a }) => {
        let o = /\s/u.test(a);
        if (o && n) return [];
        n = o;
        let s = o ? ` ` : a;
        return [{ bonus: e.bonus || (!o && /[^\p{L}\p{N}]/u.test(s)), character: s, id: `${t}:${r}:${i}` }];
      }),
    );
  return (r.at(-1)?.character === ` ` && r.pop(), r.some(I) ? [{ glyphs: r }] : []);
}
function le(e, t) {
  if (e.filter(I).length <= t) return e;
  let n = 0,
    r = e.length;
  for (; r > 0 && n < t;) {
    --r;
    let t = e[r];
    t != null && I(t) && (n += 1);
  }
  let i = e.findIndex((e, t) => t >= r && /\s/u.test(e.character));
  return e.slice(i === -1 ? r : i + 1);
}
function I(e) {
  return !/\s/u.test(e.character);
}
function ue(e) {
  return e.type === `list` && `items` in e && Array.isArray(e.items);
}
function de(e) {
  return (
    e.type === `table` && `header` in e && Array.isArray(e.header) && `rows` in e && Array.isArray(e.rows)
  );
}
var fe, pe, me, he, ge;
function L() {
  return (L = e(() => {
    (T(),
      (fe = 50),
      (pe = 120),
      (me = 13),
      (he = 28),
      (ge = new Intl.Segmenter(void 0, { granularity: `grapheme` })));
  }))();
}
function _e({ animateEntrance: e = !0, height: t, level: n, width: r }) {
  return {
    animatesEntrance: e,
    asteroids: Ce(n, r, t),
    bullets: [],
    elapsedSeconds: 0,
    height: t,
    joystick: { angle: 0, distance: 0 },
    level: n,
    score: 0,
    ship: { angle: 0.75, radius: Ie, x: r / 2, y: t / 2 },
    status: `playing`,
    width: r,
  };
}
function ve(e) {
  if (e.status !== `playing`) return;
  let t = e.ship.angle * Math.PI * 2,
    n = Math.cos(t),
    r = Math.sin(t);
  e.bullets.push({
    radius: Ne,
    velocityX: n * Pe,
    velocityY: r * Pe,
    x: e.ship.x + n * Fe,
    y: e.ship.y + r * Fe,
  });
}
function ye(e, t) {
  e.joystick = t;
}
function be(e, t) {
  if (e.status === `lost`) return;
  let n = e.elapsedSeconds;
  e.elapsedSeconds += Math.max(0, t);
  let r = e.animatesEntrance ? He : 0,
    i = Math.min(Math.max(0, e.elapsedSeconds - Math.max(n, r)), 0.05);
  for (; i > 0 && e.status === `playing`;) {
    let t = Math.min(Be, i);
    (Te(e, t), (i -= t));
  }
}
function xe(e, { height: t, width: n }) {
  let r = n / e.width,
    i = t / e.height;
  ((e.ship.x *= r), (e.ship.y *= i));
  for (let t of e.asteroids) ((t.x *= r), (t.y *= i));
  for (let t of e.bullets) ((t.x *= r), (t.y *= i));
  ((e.height = t), (e.width = n));
}
function Se(e) {
  return e.animatesEntrance ? z(e.elapsedSeconds / He, 0, 1) : 1;
}
function Ce(e, t, n) {
  let r = e.blocks.flatMap((e) => e.glyphs).filter(I),
    i = r.length > 0 ? r : Ve,
    a = Math.max(Math.ceil(i.length / ke), 1);
  return i
    .filter((e, t) => t % a === 0)
    .slice(0, ke)
    .map((e, r) => we(e, r, t, n));
}
function we(e, t, n, r) {
  let i = t % 4,
    a = ((Math.floor(t / 4) * 47 + i * 23) % 100) / 100,
    o = 24 + (t % 4) * 5,
    s = e.bonus ? Me : je;
  return i === 0
    ? { ...e, radius: s, velocityX: 0, velocityY: o, x: R(n, a), y: -s }
    : i === 1
      ? { ...e, radius: s, velocityX: -o, velocityY: 0, x: n + s, y: R(r, a) }
      : i === 2
        ? { ...e, radius: s, velocityX: 0, velocityY: -o, x: R(n, a), y: r + s }
        : { ...e, radius: s, velocityX: o, velocityY: 0, x: -s, y: R(r, a) };
}
function R(e, t) {
  let n = Math.max(e / 2 - Le - Ae, 0),
    r = t * n * 2;
  return r <= n ? Ae + r : e / 2 + Le + r - n;
}
function Te(e, t) {
  let { joystick: n } = e;
  if (n.distance >= ze) {
    e.ship.angle = n.angle;
    let r = Math.min(n.distance, 1),
      i = n.angle * Math.PI * 2;
    ((e.ship.x = z(e.ship.x + Math.cos(i) * Re * r * t, e.ship.radius, e.width - e.ship.radius)),
      (e.ship.y = z(e.ship.y + Math.sin(i) * Re * r * t, e.ship.radius, e.height - e.ship.radius)));
  }
  for (let n of e.bullets) ((n.x += n.velocityX * t), (n.y += n.velocityY * t));
  e.bullets = e.bullets.filter((t) => Ee(e, t));
  for (let n = e.asteroids.length - 1; n >= 0; --n) {
    let r = e.asteroids[n];
    if (r == null) continue;
    ((r.x += r.velocityX * t),
      (r.y += r.velocityY * t),
      r.x < -r.radius ? (r.x = e.width + r.radius) : r.x > e.width + r.radius && (r.x = -r.radius),
      r.y < -r.radius ? (r.y = e.height + r.radius) : r.y > e.height + r.radius && (r.y = -r.radius));
    let i = e.bullets.findIndex((e) => De(e, r));
    if (i !== -1) {
      ((e.asteroids[n] = we(r, n, e.width, e.height)), e.bullets.splice(i, 1), (e.score += N(r.bonus)));
      continue;
    }
    if (Oe(e, r)) {
      e.status = `lost`;
      return;
    }
  }
}
function Ee(e, t) {
  return t.x >= -t.radius && t.x <= e.width + t.radius && t.y >= -t.radius && t.y <= e.height + t.radius;
}
function De(e, t) {
  let n = e.x - t.x,
    r = e.y - t.y;
  return n * n + r * r <= (e.radius + t.radius) ** 2;
}
function Oe(e, t) {
  let n = e.ship.x - t.x,
    r = e.ship.y - t.y;
  return n * n + r * r <= (e.ship.radius + t.radius) ** 2;
}
function z(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re, ze, Be, Ve, He;
function Ue() {
  return (Ue = e(() => {
    (L(),
      (ke = 18),
      (Ae = 10),
      (je = 7),
      (Me = 9),
      (Ne = 2),
      (Pe = 320),
      (Fe = 9),
      (Ie = 6),
      (Le = 19),
      (Re = 180),
      (ze = 0.08),
      (Be = 1 / 120),
      (Ve = Array.from(`CODEX`, (e, t) => ({ bonus: !1, character: e, id: `fallback:${t}` }))),
      (He = 0.28));
  }))();
}
function We(e) {
  return 1 - (1 - e) ** 3;
}
function B(e, t) {
  return `${t}px ${getComputedStyle(e).fontFamily}`;
}
function Ge(e, t, n, r, i) {
  ((e.fillStyle = getComputedStyle(t).color),
    (e.globalAlpha = 0.5 * r),
    (e.font = B(t, 11)),
    (e.textAlign = `left`),
    (e.textBaseline = `alphabetic`),
    e.fillText(`${String(n).padStart(5, `0`)}${i == null ? `` : `  ${i}`}`, 8, 176));
}
function V() {
  return (V = e(() => {}))();
}
function H(e) {
  let t = (0, Ke.c)(17),
    { onFrame: n, onResize: r, playing: i, reducedMotion: a } = e,
    s = i === void 0 || i,
    c = (0, U.useRef)(null),
    l = (0, U.useEffectEvent)(n),
    u = (0, U.useEffectEvent)(r),
    d = f(),
    p = a ?? d,
    m = s && !p,
    h = !1;
  if (s) {
    let e;
    (t[0] === p ? (e = t[1]) : ((e = p ? { opacity: 0 } : { height: 0, opacity: 0 }), (t[0] = p), (t[1] = e)),
      (h = e));
  }
  let g;
  t[2] !== m || t[3] !== l || t[4] !== u || t[5] !== s
    ? ((g = () => {
        let e = c.current,
          t = e?.getContext(`2d`);
        if (e == null || t == null) return;
        let n = 0,
          r = null,
          i = new ResizeObserver(() => {
            let n = e.clientWidth;
            if (n <= 0) return;
            let r = window.devicePixelRatio;
            ((e.width = Math.round(n * r)),
              (e.height = Math.round(192 * r)),
              t.setTransform(r, 0, 0, r, 0, 0),
              u(t, e, n, m));
          });
        i.observe(e);
        let a = (i) => {
          let o = r == null ? 0 : (i - r) / 1e3;
          ((r = i), l(t, e, o, i) && (n = window.requestAnimationFrame(a)));
        };
        return (
          s && (n = window.requestAnimationFrame(a)),
          () => {
            (i.disconnect(), window.cancelAnimationFrame(n));
          }
        );
      }),
      (t[2] = m),
      (t[3] = l),
      (t[4] = u),
      (t[5] = s),
      (t[6] = g))
    : (g = t[6]);
  let _;
  (t[7] !== m || t[8] !== s ? ((_ = [m, s]), (t[7] = m), (t[8] = s), (t[9] = _)) : (_ = t[9]),
    (0, U.useEffect)(g, _));
  let v;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = { height: 192, opacity: 1 }), (t[10] = v))
    : (v = t[10]);
  let y = p ? 0.12 : qe,
    b;
  t[11] === y ? (b = t[12]) : ((b = { duration: y, ease: Je }), (t[11] = y), (t[12] = b));
  let x;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, W.jsx)(`canvas`, {
        ref: c,
        "aria-hidden": !0,
        className: `pointer-events-none block h-48 w-full text-secondary`,
      })),
      (t[13] = x))
    : (x = t[13]);
  let S;
  return (
    t[14] !== h || t[15] !== b
      ? ((S = (0, W.jsx)(o.div, {
          initial: h,
          animate: v,
          className: `w-full overflow-hidden`,
          "data-feature": `game-surface`,
          transition: b,
          children: x,
        })),
        (t[14] = h),
        (t[15] = b),
        (t[16] = S))
      : (S = t[16]),
    S
  );
}
var Ke, U, W, qe, Je;
function G() {
  return (G = e(() => {
    ((Ke = l()), a(), (U = i()), d(), V(), (W = s()), (qe = 0.28), (Je = [0.23, 1, 0.32, 1]));
  }))();
}
function Ye(e) {
  let t = (0, Ze.c)(14),
    { playing: n, reducedMotion: r, level: i, onExit: a } = e,
    o = n === void 0 || n,
    s = (0, Qe.useRef)(null),
    l,
    u;
  (t[0] === o
    ? ((l = t[1]), (u = t[2]))
    : ((l = () => {
        let e = s.current;
        !o && e != null && ye(e, { angle: 0, distance: 0 });
      }),
      (u = [o]),
      (t[0] = o),
      (t[1] = l),
      (t[2] = u)),
    (0, Qe.useEffect)(l, u));
  let d;
  (t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (e) => {
        let { event: t } = e,
          n = s.current;
        n != null && ye(n, t);
      }),
      (t[3] = d))
    : (d = t[3]),
    c(`codex-micro-joystick-event`, d));
  let f;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (e) => {
        let { event: t } = e,
          n = s.current;
        n != null && ne(t) && ve(n);
      }),
      (t[4] = f))
    : (f = t[4]),
    c(`codex-micro-hid-event`, f));
  let p;
  t[5] === i
    ? (p = t[6])
    : ((p = function (e, t, n, r) {
        (s.current == null
          ? (s.current = _e({ animateEntrance: r, height: 192, level: i, width: n }))
          : (s.current.width !== n || s.current.height !== 192) && xe(s.current, { height: 192, width: n }),
          Xe(e, s.current, t));
      }),
      (t[5] = i),
      (t[6] = p));
  let m = p,
    h;
  t[7] === a
    ? (h = t[8])
    : ((h = function (e, t, n) {
        let r = s.current;
        return r == null || (be(r, n), Xe(e, r, t), r.status !== `lost` || (a(), !1));
      }),
      (t[7] = a),
      (t[8] = h));
  let g = h,
    _;
  return (
    t[9] !== g || t[10] !== m || t[11] !== o || t[12] !== r
      ? ((_ = (0, $e.jsx)(H, { onFrame: g, onResize: m, playing: o, reducedMotion: r })),
        (t[9] = g),
        (t[10] = m),
        (t[11] = o),
        (t[12] = r),
        (t[13] = _))
      : (_ = t[13]),
    _
  );
}
function Xe(e, t, n) {
  let r = getComputedStyle(n).color,
    i = We(Se(t));
  (e.clearRect(0, 0, t.width, t.height),
    (e.fillStyle = r),
    (e.font = B(n, t.level.fontSize)),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`));
  for (let n of t.asteroids)
    ((e.globalAlpha = (n.bonus ? 0.85 : 0.55) * i), e.fillText(n.character, n.x, n.y));
  e.globalAlpha = 0.95 * i;
  for (let n of t.bullets) (e.beginPath(), e.arc(n.x, n.y, n.radius, 0, Math.PI * 2), e.fill());
  (Ge(e, n, t.score, i),
    (e.globalAlpha = 0.95 * i),
    e.save(),
    e.translate(t.ship.x, t.ship.y),
    e.rotate(t.ship.angle * Math.PI * 2),
    e.beginPath(),
    e.moveTo(9, 0),
    e.lineTo(-6, -5),
    e.lineTo(-3, 0),
    e.lineTo(-6, 5),
    e.closePath(),
    e.fill(),
    e.restore(),
    (e.globalAlpha = 1));
}
var Ze, Qe, $e;
function et() {
  return (et = e(() => {
    ((Ze = l()), (Qe = i()), g(), Ue(), G(), V(), ie(), ($e = s()));
  }))();
}
function tt({ animateEntrance: e = !0, height: t, level: n, measureText: r, width: i }) {
  let a = st(n, i, 0, e, r),
    o = vt(i, a.length);
  return {
    animatesEntrance: e,
    ball: { radius: Et, velocityX: 105, velocityY: -145, x: i / 2, y: t - Y - J - Et - 6 },
    combo: 0,
    completedAtSeconds: null,
    elapsedSeconds: 0,
    glyphs: a,
    height: t,
    lastHitAtSeconds: null,
    level: n,
    measureText: r,
    nextLevelUpdateAtSeconds: null,
    pendingLevel: null,
    paddle: { height: J, width: o, x: i / 2, y: t - Y - J / 2 },
    score: 0,
    status: `playing`,
    width: i,
  };
}
function nt(e, t, n) {
  if (e.status === `lost`) return;
  let r = e.elapsedSeconds;
  if (
    ((e.elapsedSeconds += Math.max(0, t)),
    e.lastHitAtSeconds != null &&
      e.elapsedSeconds - e.lastHitAtSeconds > X &&
      ((e.combo = 0), (e.lastHitAtSeconds = null)),
    e.pendingLevel != null &&
      e.nextLevelUpdateAtSeconds != null &&
      e.elapsedSeconds >= e.nextLevelUpdateAtSeconds &&
      (dt(e, e.pendingLevel), (e.pendingLevel = null), (e.nextLevelUpdateAtSeconds = null)),
    e.status === `cleared`)
  ) {
    for (let n of e.glyphs) n.falling && ut(n, Math.min(t, 0.05));
    return;
  }
  let i = e.animatesEntrance ? Dt : 0,
    a = Math.min(Math.max(0, e.elapsedSeconds - Math.max(r, i)), 0.05);
  if (a === 0) return;
  let o = a;
  for (; o > 0 && e.status === `playing`;) {
    let t = Math.min(Tt, o);
    (lt(e, t, n), (o -= t));
  }
}
function rt(e, { height: t, measureText: n, width: r }) {
  let i = r / e.width,
    a = t / e.height,
    o = new Map(e.glyphs.map((e) => [e.id, e])),
    s = st(e.level, r, e.elapsedSeconds, e.animatesEntrance, n).map((e) => {
      let t = o.get(e.id);
      return t == null
        ? e
        : t.falling
          ? { ...t, x: t.x * i, y: t.y * a }
          : { ...e, appearsAtSeconds: t.appearsAtSeconds };
    }),
    c = new Set(s.map((e) => e.id));
  (s.push(
    ...e.glyphs.filter((e) => e.falling && !c.has(e.id)).map((e) => ({ ...e, x: e.x * i, y: e.y * a })),
  ),
    (e.ball.x = K(e.ball.x * i, e.ball.radius, r - e.ball.radius)),
    (e.ball.y = K(e.ball.y * a, e.ball.radius, t - e.ball.radius)),
    (e.glyphs = s),
    (e.height = t),
    (e.measureText = n),
    (e.paddle.width = vt(r, s.length)),
    (e.paddle.x = K(e.paddle.x * i, e.paddle.width / 2, r - e.paddle.width / 2)),
    (e.paddle.y = t - Y - e.paddle.height / 2),
    (e.width = r));
}
function it(e, t) {
  if (e.level.key === t.key) {
    ((e.pendingLevel = null), (e.nextLevelUpdateAtSeconds = null));
    return;
  }
  e.pendingLevel?.key !== t.key &&
    ((e.pendingLevel = t), (e.nextLevelUpdateAtSeconds ??= e.elapsedSeconds + Ct));
}
function at(e) {
  return e.animatesEntrance ? K(e.elapsedSeconds / Dt, 0, 1) : 1;
}
function ot(e, t) {
  return e.animatesEntrance ? K((e.elapsedSeconds - t.appearsAtSeconds) / xt, 0, 1) : 1;
}
function st(e, t, n, r, i) {
  let a = new Map(),
    o = (e, t) => {
      let n = a.get(e);
      if (n != null) return n;
      let r = i(e, t);
      return (a.set(e, r), r);
    };
  return ft(e, t - 16, o)
    .slice(-4)
    .flatMap((i, a) => {
      let s = (t - mt(i, e.fontSize, o)) / 2;
      return i.flatMap((t) => {
        let i = Math.max(o(t.character, e.fontSize), 4),
          c = /\s/u.test(t.character)
            ? []
            : [
                {
                  appearsAtSeconds: r ? n + a * St : n - xt,
                  bonus: t.bonus,
                  character: t.character,
                  falling: !1,
                  height: Math.max(yt, e.fontSize + 3),
                  id: t.id,
                  velocityX: 0,
                  velocityY: 0,
                  width: i,
                  x: s,
                  y: bt + a * (Math.max(yt, e.fontSize + 3) + q),
                },
              ];
        return ((s += i + q), c);
      });
    });
}
function ct(e, t) {
  let n = K(e.ball.x, t.x - 1, t.x + t.width + 1),
    r = K(e.ball.y, t.y - 1, t.y + t.height + 1),
    i = e.ball.x - n,
    a = e.ball.y - r;
  return i * i + a * a <= e.ball.radius * e.ball.radius;
}
function lt(e, t, n) {
  let r = e.paddle.width / 2;
  e.paddle.x = K(e.paddle.x + K(n, -1, 1) * 440 * t, r, e.width - r);
  let i = e.ball;
  ((i.x += i.velocityX * t),
    (i.y += i.velocityY * t),
    i.x - i.radius <= 0 && i.velocityX < 0
      ? ((i.x = i.radius), (i.velocityX *= -1))
      : i.x + i.radius >= e.width && i.velocityX > 0 && ((i.x = e.width - i.radius), (i.velocityX *= -1)),
    i.y - i.radius <= 0 && i.velocityY < 0 && ((i.y = i.radius), (i.velocityY *= -1)));
  let a = e.paddle.y - e.paddle.height / 2;
  i.velocityY > 0 &&
    i.y + i.radius >= a &&
    i.y - i.radius <= e.paddle.y + e.paddle.height / 2 &&
    Math.abs(i.x - e.paddle.x) <= r + i.radius &&
    ((i.y = a - i.radius),
    (i.velocityY = -Math.abs(i.velocityY)),
    (i.velocityX += ((i.x - e.paddle.x) / r) * Math.abs(i.velocityY) * 0.45));
  for (let n of e.glyphs) {
    if (n.falling) {
      ut(n, t);
      continue;
    }
    if (!(ot(e, n) < 1 || !ct(e, n))) {
      ((n.falling = !0),
        (n.velocityX = i.velocityX * 0.18),
        (n.velocityY = -55),
        (e.combo =
          e.lastHitAtSeconds != null && e.elapsedSeconds - e.lastHitAtSeconds <= X
            ? Math.min(e.combo + 1, 5)
            : 1),
        (e.lastHitAtSeconds = e.elapsedSeconds),
        (e.score += N(n.bonus) * e.combo),
        (i.velocityY *= -1),
        _t(e),
        e.pendingLevel == null &&
          e.glyphs.every((e) => e.falling) &&
          ((e.status = `cleared`), (e.completedAtSeconds = e.elapsedSeconds)));
      break;
    }
  }
  i.y - i.radius > e.height && ((e.status = `lost`), (e.completedAtSeconds = e.elapsedSeconds));
}
function ut(e, t) {
  ((e.velocityY += 420 * t), (e.x += e.velocityX * t), (e.y += e.velocityY * t));
}
function dt(e, t) {
  let n = new Map(e.glyphs.map((e) => [e.id, e]));
  ((e.level = t),
    (e.glyphs = st(t, e.width, e.elapsedSeconds, e.animatesEntrance, e.measureText).map((e) => {
      let t = n.get(e.id);
      return t?.character === e.character ? t : e;
    })),
    e.status === `cleared` &&
      e.glyphs.some((e) => !e.falling) &&
      ((e.status = `playing`), (e.completedAtSeconds = null)));
}
function ft(e, t, n) {
  let r = [];
  for (let i of e.blocks) {
    let a = [];
    for (let o of pt(i.glyphs)) {
      let i = a.length === 0 ? gt(o) : o;
      for (
        a.length > 0 && mt([...a, ...i], e.fontSize, n) > t ? (r.push(a), (a = gt(i))) : a.push(...i);
        mt(a, e.fontSize, n) > t;
      ) {
        let i = ht(a, t, e.fontSize, n);
        (r.push(a.slice(0, i)), (a = gt(a.slice(i))));
      }
    }
    a.length > 0 && r.push(a);
  }
  return r;
}
function pt(e) {
  let t = [],
    n = [];
  for (let r of e) /\s/u.test(r.character) && n.some(I) ? (t.push(n), (n = [r])) : n.push(r);
  return (n.some(I) && t.push(n), t);
}
function mt(e, t, n) {
  return e.reduce((e, r) => e + Math.max(n(r.character, t), 4) + q, -1);
}
function ht(e, t, n, r) {
  let i = 0;
  for (let [a, o] of e.entries())
    if (((i += Math.max(r(o.character, n), 4) + q), i > t)) return Math.max(a, 1);
  return e.length;
}
function gt(e) {
  let t = e.findIndex(I);
  return t === -1 ? [] : e.slice(t);
}
function _t(e) {
  let t = Math.hypot(e.ball.velocityX, e.ball.velocityY);
  if (t === 0 || t >= wt) return;
  let n = Math.min(t * 1.015, wt) / t;
  ((e.ball.velocityX *= n), (e.ball.velocityY *= n));
}
function vt(e, t) {
  return K(e * (0.3 - Math.min(t / 120, 1) * 0.1), 52, 96);
}
function K(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var yt, q, bt, xt, St, Ct, wt, Tt, J, Y, Et, X, Dt;
function Ot() {
  return (Ot = e(() => {
    (L(),
      (yt = 16),
      (q = 1),
      (bt = 8),
      (xt = 0.19),
      (St = 0.03),
      (Ct = 0.2),
      (wt = 240),
      (Tt = 1 / 120),
      (J = 6),
      (Y = 12),
      (Et = 5),
      (X = 1.5),
      (Dt = 0.28));
  }))();
}
function kt(e) {
  let t = (0, Nt.c)(14),
    { playing: n, reducedMotion: r, level: i, onExit: a } = e,
    o = n === void 0 || n,
    s = (0, Z.useRef)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = { expiresAt: 0, value: 0 }), (t[0] = l))
    : (l = t[0]);
  let u = (0, Z.useRef)(l),
    d;
  (t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (e) => {
        let { event: t } = e;
        u.current = { expiresAt: globalThis.performance.now() + Lt, value: At(t) };
      }),
      (t[1] = d))
    : (d = t[1]),
    c(`codex-micro-joystick-event`, d));
  let f, p;
  (t[2] === i
    ? ((f = t[3]), (p = t[4]))
    : ((f = () => {
        let e = s.current;
        e != null && it(e, i);
      }),
      (p = [i]),
      (t[2] = i),
      (t[3] = f),
      (t[4] = p)),
    (0, Z.useEffect)(f, p));
  let m;
  t[5] === i
    ? (m = t[6])
    : ((m = function (e, t, n, r) {
        let a = (n, r) => ((e.font = B(t, r)), e.measureText(n).width);
        (s.current == null
          ? (s.current = tt({ animateEntrance: r, height: 192, level: i, measureText: a, width: n }))
          : (s.current.width !== n || s.current.height !== 192) &&
            rt(s.current, { height: 192, measureText: a, width: n }),
          jt(e, s.current, t));
      }),
      (t[5] = i),
      (t[6] = m));
  let h = m,
    g;
  t[7] === a
    ? (g = t[8])
    : ((g = function (e, t, n, r) {
        let i = s.current;
        return (
          i == null ||
          (nt(i, n, r < u.current.expiresAt ? u.current.value : 0),
          jt(e, i, t),
          i.status === `lost` ||
          (i.status === `cleared` &&
            i.completedAtSeconds != null &&
            i.elapsedSeconds - i.completedAtSeconds >= It)
            ? (a(), !1)
            : !0)
        );
      }),
      (t[7] = a),
      (t[8] = g));
  let _ = g,
    v;
  return (
    t[9] !== _ || t[10] !== h || t[11] !== o || t[12] !== r
      ? ((v = (0, Pt.jsx)(H, { onFrame: _, onResize: h, playing: o, reducedMotion: r })),
        (t[9] = _),
        (t[10] = h),
        (t[11] = o),
        (t[12] = r),
        (t[13] = v))
      : (v = t[13]),
    v
  );
}
function At(e) {
  return e.distance < 0.08 ? 0 : Math.cos(e.angle * Math.PI * 2) * Math.min(e.distance / 0.7, 1);
}
function jt(e, t, n) {
  let r = getComputedStyle(n).color,
    i = We(Mt((at(t) - 0.55) / 0.45, 0, 1));
  (e.clearRect(0, 0, t.width, t.height),
    (e.fillStyle = r),
    (e.font = B(n, t.level.fontSize)),
    (e.textBaseline = `top`));
  for (let n of t.glyphs) {
    let r = We(ot(t, n));
    ((e.globalAlpha = (n.falling ? 0.7 : n.bonus ? 0.65 : 0.5) * r),
      e.fillText(n.character, n.x, n.y + (1 - r) * Ft));
  }
  (Ge(e, n, t.score, i, `×${Math.max(t.combo, 1)}`),
    (e.globalAlpha = 0.95 * i),
    e.beginPath(),
    e.roundRect(
      t.paddle.x - t.paddle.width / 2,
      t.paddle.y - t.paddle.height / 2,
      t.paddle.width,
      t.paddle.height,
      t.paddle.height / 2,
    ),
    e.fill(),
    (e.globalAlpha = i),
    (e.shadowBlur = 10),
    (e.shadowColor = r),
    e.beginPath(),
    e.arc(t.ball.x, t.ball.y, t.ball.radius, 0, Math.PI * 2),
    e.fill(),
    (e.shadowBlur = 0),
    (e.globalAlpha = 1));
}
function Mt(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
var Nt, Z, Pt, Ft, It, Lt;
function Rt() {
  return (Rt = e(() => {
    ((Nt = l()), (Z = i()), g(), Ot(), G(), V(), (Pt = s()), (Ft = 8), (It = 0.8), (Lt = 600));
  }))();
}
var zt, Bt;
function Vt() {
  return (Vt = e(() => {
    ((zt = t(h(), 1)),
      p(),
      A(),
      r(),
      (Bt = v(
        u,
        (e, { get: t }) => {
          let n = t(C, e);
          if (n != null)
            return t(k, n)?.flatMap((e) => {
              let r = t(D, { ...n, itemId: e });
              return r?.type === `agentMessage` ? [r] : [];
            });
        },
        { isEqual: zt.default },
      )));
  }))();
}
function Ht(e) {
  let t = (192 - Q.inset * 2) / Q.rows;
  return Math.max(6, Math.floor((e - Q.inset * 2) / t));
}
function Ut({ columns: e, level: t, random: n = Math.random, rows: r }) {
  let i = { x: Math.floor(e / 2), y: Math.floor(r / 2) },
    a = {
      body: [i, { x: i.x - 1, y: i.y }, { x: i.x - 2, y: i.y }],
      columns: e,
      direction: `right`,
      food: { bonus: !1, character: `•`, x: 0, y: 0 },
      foodCollected: 0,
      foodGlyphs: Qt(t),
      inputState: `waiting-for-neutral`,
      nextDirection: `right`,
      random: n,
      rows: r,
      score: 0,
      status: `playing`,
      stepAccumulatorSeconds: 0,
    };
  return (Zt(a), a);
}
function Wt(e, t) {
  if (e.status !== `playing` || e.inputState !== `moving`) return;
  let n = tn(e);
  ((e.stepAccumulatorSeconds = Math.min(e.stepAccumulatorSeconds + Math.max(0, t), n)),
    e.stepAccumulatorSeconds >= n && ((e.stepAccumulatorSeconds = 0), Jt(e)));
}
function Gt(e, t) {
  if (e.status !== `playing`) return;
  if (e.inputState === `waiting-for-neutral`) {
    t.distance < rn && (e.inputState = `waiting-for-direction`);
    return;
  }
  let n = M(t, nn);
  if (n != null) {
    if (n === e.nextDirection) {
      e.inputState = `moving`;
      return;
    }
    $t(n, e.direction) || ((e.inputState = `moving`), (e.nextDirection = n));
  }
}
function Kt(e, t) {
  e.foodGlyphs = Qt(t);
}
function qt(e, t) {
  if (t <= e.columns) return;
  let n = Math.floor(t / 2) - Math.floor(e.columns / 2);
  e.columns = t;
  for (let t of e.body) t.x += n;
  e.food.x += n;
}
function Jt(e) {
  e.direction = e.nextDirection;
  let t = Yt(e);
  if (Xt(e, t)) {
    e.status = `lost`;
    return;
  }
  let n = en(t, e.food);
  if ((e.body.unshift(t), n)) {
    ((e.foodCollected += 1), (e.score += N(e.food.bonus)), Zt(e));
    return;
  }
  e.body.pop();
}
function Yt(e) {
  let t = e.body[0];
  switch (e.direction) {
    case `up`:
      return { x: t.x, y: t.y - 1 };
    case `right`:
      return { x: t.x + 1, y: t.y };
    case `down`:
      return { x: t.x, y: t.y + 1 };
    case `left`:
      return { x: t.x - 1, y: t.y };
  }
}
function Xt(e, t) {
  return (
    t.x < 0 ||
    t.x >= e.columns ||
    t.y < 0 ||
    t.y >= e.rows ||
    (en(t, e.food) ? e.body : e.body.slice(0, -1)).some((e) => en(e, t))
  );
}
function Zt(e) {
  let t = [];
  for (let n = 0; n < e.rows; n += 1)
    for (let r = 0; r < e.columns; r += 1)
      e.body.some((e) => e.x === r && e.y === n) || t.push({ x: r, y: n });
  let n = t[Math.floor(e.random() * t.length)];
  n != null &&
    (e.food = {
      ...(e.foodGlyphs[e.foodCollected % e.foodGlyphs.length] ?? { bonus: !1, character: `•` }),
      ...n,
    });
}
function Qt(e) {
  let t = e.blocks
    .flatMap((e) => e.glyphs)
    .filter(I)
    .map(({ bonus: e, character: t }) => ({ bonus: e, character: t }));
  return t.length > 0 ? t : [{ bonus: !1, character: `•` }];
}
function $t(e, t) {
  switch (t) {
    case `up`:
      return e === `down`;
    case `right`:
      return e === `left`;
    case `down`:
      return e === `up`;
    case `left`:
      return e === `right`;
  }
}
function en(e, t) {
  return e.x === t.x && e.y === t.y;
}
function tn(e) {
  return Math.max(on, an - e.foodCollected * sn);
}
var Q, nn, rn, an, on, sn;
function cn() {
  return (cn = e(() => {
    (w(),
      V(),
      L(),
      (Q = { inset: 8, rows: 12 }),
      (nn = 0.65),
      (rn = 0.35),
      (an = 0.16),
      (on = 0.08),
      (sn = 0.006));
  }))();
}
function ln(e) {
  let t = (0, dn.c)(13),
    { playing: n, reducedMotion: r, level: i, onExit: a } = e,
    o = n === void 0 || n,
    s = (0, fn.useRef)(null),
    l;
  (t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        let { event: t } = e,
          n = s.current;
        n != null && Gt(n, t);
      }),
      (t[0] = l))
    : (l = t[0]),
    c(`codex-micro-joystick-event`, l));
  let u, d;
  (t[1] === i
    ? ((u = t[2]), (d = t[3]))
    : ((u = () => {
        let e = s.current;
        e != null && Kt(e, i);
      }),
      (d = [i]),
      (t[1] = i),
      (t[2] = u),
      (t[3] = d)),
    (0, fn.useEffect)(u, d));
  let f;
  t[4] === i
    ? (f = t[5])
    : ((f = function (e, t, n) {
        let r = Ht(n),
          a = (s.current ??= Ut({ columns: r, level: i, rows: Q.rows }));
        (qt(a, r), un(e, a, t, n));
      }),
      (t[4] = i),
      (t[5] = f));
  let p = f,
    m;
  t[6] === a
    ? (m = t[7])
    : ((m = function (e, t, n) {
        let r = s.current;
        return r == null || (Wt(r, n), un(e, r, t, t.clientWidth), r.status === `playing` || (a(), !1));
      }),
      (t[6] = a),
      (t[7] = m));
  let h = m,
    g;
  return (
    t[8] !== h || t[9] !== p || t[10] !== o || t[11] !== r
      ? ((g = (0, pn.jsx)(H, { onFrame: h, onResize: p, playing: o, reducedMotion: r })),
        (t[8] = h),
        (t[9] = p),
        (t[10] = o),
        (t[11] = r),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function un(e, t, n, r) {
  let i = Math.min((r - Q.inset * 2) / t.columns, (192 - Q.inset * 2) / t.rows),
    a = (r - i * t.columns) / 2,
    o = (192 - i * t.rows) / 2,
    s = getComputedStyle(n).color;
  (e.clearRect(0, 0, r, 192),
    (e.fillStyle = s),
    (e.font = B(n, Math.min(16, i * 0.9))),
    (e.textAlign = `center`),
    (e.textBaseline = `middle`),
    (e.globalAlpha = t.food.bonus ? 0.95 : 0.7),
    e.fillText(t.food.character, a + (t.food.x + 0.5) * i, o + (t.food.y + 0.5) * i),
    (e.shadowColor = s));
  for (let [n, r] of t.body.entries()) {
    let t = n === 0 ? 1 : 2;
    ((e.globalAlpha = Math.max(0.34, 0.92 - n * 0.06)),
      (e.shadowBlur = n === 0 ? 10 : 0),
      e.beginPath(),
      e.roundRect(a + r.x * i + t, o + r.y * i + t, i - t * 2, i - t * 2, Math.max(2, (i - t * 2) / 3)),
      e.fill());
  }
  ((e.shadowBlur = 0), Ge(e, n, t.score, 1), (e.globalAlpha = 1), (e.textAlign = `start`));
}
var dn, fn, pn;
function mn() {
  return (mn = e(() => {
    ((dn = l()), (fn = i()), g(), G(), V(), cn(), (pn = s()));
  }))();
}
function hn(e) {
  let t = (0, gn.c)(28),
    { composerInput: r, conversationId: i, isSideChat: a, playing: o, showPendingRequest: s } = e,
    c = o === void 0 || o,
    l = n(u),
    d = n(y),
    f;
  t[0] === d.value ? (f = t[1]) : ((f = S(d.value)), (t[0] = d.value), (t[1] = f));
  let p = f,
    h = m(re),
    { status: g } = m(ee),
    v = h?.composerId === p,
    b = _(x, v ? i : null),
    C;
  t[2] !== i || t[3] !== b || t[4] !== v
    ? ((C = v && i != null ? { hostId: b, threadId: i } : null),
      (t[2] = i),
      (t[3] = b),
      (t[4] = v),
      (t[5] = C))
    : (C = t[5]);
  let w = _(Bt, C),
    T = !a && !s && (g === `connected` || (v && g !== `not-detected`)),
    E = c && g === `connected`,
    D;
  t[6] === l
    ? (D = t[7])
    : ((D = function () {
        ae(l);
      }),
      (t[6] = l),
      (t[7] = D));
  let O = D,
    k,
    A;
  if (
    (t[8] !== T || t[9] !== p || t[10] !== r || t[11] !== l
      ? ((k = () => {
          if (T)
            return te(p, r, () => {
              l.get(re)?.composerId === p && ae(l);
            });
        }),
        (A = [T, p, r, l]),
        (t[8] = T),
        (t[9] = p),
        (t[10] = r),
        (t[11] = l),
        (t[12] = k),
        (t[13] = A))
      : ((k = t[12]), (A = t[13])),
    (0, _n.useEffect)(k, A),
    !T || !v)
  )
    return null;
  let j;
  t[14] === w
    ? (j = t[15])
    : ((j = oe(w, document.querySelector(`[data-feature='game-source']`)?.textContent?.trim() ?? ``)),
      (t[14] = w),
      (t[15] = j));
  let M = j;
  switch (h.game) {
    case `asteroids`: {
      let e;
      return (
        t[16] !== O || t[17] !== E || t[18] !== M
          ? ((e = (0, $.jsx)(Ye, { level: M, onExit: O, playing: E })),
            (t[16] = O),
            (t[17] = E),
            (t[18] = M),
            (t[19] = e))
          : (e = t[19]),
        e
      );
    }
    case `brick-breaker`: {
      let e;
      return (
        t[20] !== O || t[21] !== E || t[22] !== M
          ? ((e = (0, $.jsx)(kt, { level: M, onExit: O, playing: E })),
            (t[20] = O),
            (t[21] = E),
            (t[22] = M),
            (t[23] = e))
          : (e = t[23]),
        e
      );
    }
    case `snake`: {
      let e;
      return (
        t[24] !== O || t[25] !== E || t[26] !== M
          ? ((e = (0, $.jsx)(ln, { level: M, onExit: O, playing: E })),
            (t[24] = O),
            (t[25] = E),
            (t[26] = M),
            (t[27] = e))
          : (e = t[27]),
        e
      );
    }
  }
}
var gn, _n, $;
function vn() {
  return (vn = e(() => {
    ((gn = l()), p(), (_n = i()), E(), O(), r(), b(), et(), Rt(), L(), Vt(), ie(), mn(), ($ = s()));
  }))();
}
vn();
export { hn as CodexMicroMiniGameComposer };
//# sourceMappingURL=codex-micro-mini-game-composer-c7c2c33f5ac6.js.map
