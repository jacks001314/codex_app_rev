import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $5 as r,
  AO as i,
  Bz as a,
  CO as o,
  Cot as s,
  Ext as c,
  Gdt as l,
  IDt as u,
  Ixt as d,
  Kat as f,
  NV as p,
  Nxt as m,
  Pxt as h,
  Rnt as g,
  Sx as _,
  TJ as v,
  TO as y,
  VDt as b,
  Vxt as x,
  X5 as S,
  YV as C,
  Z5 as w,
  _Mt as T,
  _xt as E,
  agt as D,
  az as O,
  frt as k,
  gMt as ee,
  hft as A,
  hot as j,
  hrt as M,
  i3 as N,
  iO as P,
  ik as F,
  iot as I,
  irt as L,
  jDt as R,
  lot as z,
  nst as te,
  oz as B,
  qat as V,
  r3 as ne,
  rO as re,
  rst as H,
  srt as U,
  t3 as W,
  tst as G,
  vzt as K,
  wot as ie,
  xMt as q,
  yzt as ae,
  zxt as oe,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Er as se,
  $st as ce,
  Bnn as le,
  Bst as ue,
  DPn as de,
  Ddr as fe,
  Dst as pe,
  Edr as me,
  Est as he,
  FFr as ge,
  Fst as _e,
  Gst as ve,
  Hst as ye,
  Ist as be,
  JPn as xe,
  Jst as Se,
  Lst as Ce,
  Mst as we,
  Nst as Te,
  P_r as Ee,
  Pst as De,
  QDr as Oe,
  Qst as ke,
  Rst as Ae,
  Sur as J,
  TPn as Y,
  UM as je,
  Ust as Me,
  Vst as Ne,
  WM as Pe,
  Wst as Fe,
  XDr as Ie,
  XPr as Le,
  Xst as Re,
  YPr as ze,
  Yst as Be,
  ZPn as Ve,
  ZTn as He,
  Zst as Ue,
  aDr as We,
  aEn as Ge,
  eDr as Ke,
  ect as qe,
  fur as Je,
  hur as Ye,
  iEn as Xe,
  kPn as Ze,
  m9 as Qe,
  nDr as $e,
  nFr as et,
  nct as tt,
  nxt as nt,
  oDr as rt,
  oEn as it,
  oFr as at,
  p9 as ot,
  rFr as st,
  rxt as ct,
  tEn as lt,
  tct as ut,
  wur as dt,
  xPn as ft,
  yPn as pt,
  zFr as mt,
  znn as ht,
  zst as gt,
} from "./app-initial-5851df3f6cb1.js";
import { Sp as _t, xp as vt } from "./app-primary-fe8a450b3b04.js";
import { a as yt, n as bt, t as xt } from "./onboarding-analytics-2de3b847b883.js";
import {
  a as St,
  i as Ct,
  n as wt,
  o as Tt,
  r as Et,
  s as Dt,
  t as Ot,
} from "./browser-session-queries-588577e9a549.js";
import { n as kt, r as At, t as jt } from "./chatgpt-desktop-auth-url-ac1ccaaae86b.js";
import { n as Mt } from "./login-page-d6b1afaa105c.js";
import { n as Nt, t as Pt } from "./google-logo-78f7c5d82eb0.js";
import { i as Ft, n as It, r as Lt, t as Rt } from "./use-ascii-engine-4ba22139b5bd.js";
import { n as zt, t as Bt } from "./onboarding-entrypoint-38023edb9c27.js";
import {
  a as Vt,
  i as Ht,
  n as Ut,
  o as Wt,
  r as Gt,
  t as Kt,
} from "./onboarding-login-content-fc220a489011.js";
var qt, Jt, Yt;
function Xt() {
  return (Xt = e(() => {
    ((qt = K()),
      h(),
      H(),
      (Jt = t(ae(), 1)),
      Le(),
      Re(),
      De(),
      tt(),
      Je(),
      dt(),
      W(),
      xe(),
      Ze(),
      de(),
      z(),
      Ee(),
      J(),
      F(),
      _(),
      ie(),
      at(),
      At(),
      P(),
      U(),
      Ft(),
      Rt(),
      (Yt = q()),
      Jt.memo(function () {
        let e = (0, qt.c)(5),
          t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = {
              initialColumns: 130,
              initialRows: 100,
              initialMode: `composite`,
              preferredVideoKeyword: `blossom`,
            }),
            (e[0] = t))
          : (t = e[0]);
        let { columns: n, rows: r, lines: i } = It(t),
          a;
        return (
          e[1] !== n || e[2] !== i || e[3] !== r
            ? ((a = (0, Yt.jsx)(Lt, { lines: i, columns: n, rows: r, autoCover: !0 })),
              (e[1] = n),
              (e[2] = i),
              (e[3] = r),
              (e[4] = a))
            : (a = e[4]),
          a
        );
      }));
  }))();
}
function Zt(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function Qt(e) {
  return e;
}
var $t, en;
function tn() {
  return (tn = e(() => {
    (($t = `3446609779`), (en = `1561420571`));
  }))();
}
function nn(e) {
  let t = (0, rn.c)(21),
    { onExit: n, audioContextRef: r } = e,
    i = (0, an.useRef)(null),
    a = (0, an.useRef)(null),
    o = (0, an.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[0] = s)) : (s = t[0]);
  let c = (0, an.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { x: 0, y: 0 }), (t[1] = l)) : (l = t[1]);
  let u = (0, an.useRef)(l),
    d = (0, an.useRef)(`right`),
    f = (0, an.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: sn, rows: sn, cellSize: cn, width: 216, height: 216 }), (t[2] = p))
    : (p = t[2]);
  let m = (0, an.useRef)(p),
    h = (0, an.useRef)(null),
    g = (0, an.useEffectEvent)(n),
    _;
  t[3] === r
    ? (_ = t[4])
    : ((_ = (e, t, n) => {
        if (r.current == null) return;
        let i = r.current;
        i.state === `suspended` && i.resume();
        let a = t / 1e3,
          o = i.createOscillator(),
          s = i.createGain();
        ((o.type = n),
          (o.frequency.value = e),
          s.gain.setValueAtTime(1e-4, i.currentTime),
          s.gain.exponentialRampToValueAtTime(0.18, i.currentTime + 0.01),
          s.gain.exponentialRampToValueAtTime(1e-4, i.currentTime + a),
          o.connect(s),
          s.connect(i.destination),
          o.start(),
          o.stop(i.currentTime + a),
          (o.onended = () => {
            (o.disconnect(), s.disconnect());
          }));
      }),
      (t[3] = r),
      (t[4] = _));
  let v = (0, an.useEffectEvent)(_),
    y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        o.current != null && (window.clearInterval(o.current), (o.current = null));
      }),
      (t[5] = y))
    : (y = t[5]);
  let b = y,
    x;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = () => {
        if (h.current) return h.current;
        let e = i.current;
        if (e == null) return { snake: `#ffffff`, food: `#f97316` };
        let t = getComputedStyle(e).color || `#ffffff`,
          n = getComputedStyle(document.documentElement),
          r = {
            snake: t,
            food:
              n.getPropertyValue(`--color-chart-red`).trim() ||
              n.getPropertyValue(`--color-chart-orange`).trim() ||
              `#f97316`,
          };
        return ((h.current = r), r);
      }),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        if (i.current == null) return null;
        let e = Math.max(1, Math.floor(window.devicePixelRatio || 1));
        ((i.current.width = Math.max(1, Math.floor(m.current.width * e))),
          (i.current.height = Math.max(1, Math.floor(m.current.height * e))),
          (i.current.style.width = `${m.current.width}px`),
          (i.current.style.height = `${m.current.height}px`));
        let t = i.current.getContext(`2d`);
        return t == null ? null : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t);
      }),
      (t[7] = C))
    : (C = t[7]);
  let w = C,
    T;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => {
        let t = {
          x: Math.floor(Math.random() * m.current.columns),
          y: Math.floor(Math.random() * m.current.rows),
        };
        for (; e.some((e) => e.x === t.x && e.y === t.y);)
          t = {
            x: Math.floor(Math.random() * m.current.columns),
            y: Math.floor(Math.random() * m.current.rows),
          };
        return t;
      }),
      (t[8] = T))
    : (T = t[8]);
  let E = T,
    D;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = w();
        if (e == null) return;
        let t = S();
        (e.clearRect(0, 0, m.current.width, m.current.height), (e.fillStyle = t.snake));
        for (let t of c.current)
          e.fillRect(
            t.x * m.current.cellSize,
            t.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          );
        ((e.fillStyle = t.food),
          e.fillRect(
            u.current.x * m.current.cellSize,
            u.current.y * m.current.cellSize,
            m.current.cellSize,
            m.current.cellSize,
          ));
      }),
      (t[9] = D))
    : (D = t[9]);
  let O = (0, an.useEffectEvent)(D),
    k;
  t[10] === O
    ? (k = t[11])
    : ((k = () => {
        let e = Math.floor(m.current.columns / 2),
          t = Math.floor(m.current.rows / 2);
        ((c.current = [
          { x: e, y: t },
          { x: e - 1, y: t },
          { x: e - 2, y: t },
        ]),
          (d.current = `right`),
          (f.current = `right`),
          (u.current = E(c.current)),
          O());
      }),
      (t[10] = O),
      (t[11] = k));
  let ee = (0, an.useEffectEvent)(k),
    A;
  t[12] === ee
    ? (A = t[13])
    : ((A = () => {
        if (a.current == null) return;
        let e = a.current.getBoundingClientRect(),
          t = Math.max(1, Math.floor(e.width)),
          n = Math.max(1, Math.floor(e.height)),
          r = Math.max(sn, Math.floor(t / cn)),
          i = t / r,
          o = Math.max(sn, Math.floor(n / i));
        ((m.current = { columns: r, rows: o, cellSize: i, width: t, height: n }), ee());
      }),
      (t[12] = ee),
      (t[13] = A));
  let j = (0, an.useEffectEvent)(A),
    M;
  t[14] !== O || t[15] !== g || t[16] !== v || t[17] !== j
    ? ((M = () => {
        j();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) && (t = `right`),
            t != null && (e.preventDefault(), dn[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = un[n],
              i = { x: t.x + r.x, y: t.y + r.y };
            if (i.x < 0 || i.y < 0 || i.x >= m.current.columns || i.y >= m.current.rows) {
              (b(), v(140, 220, `sawtooth`), g());
              return;
            }
            let a = i.x === u.current.x && i.y === u.current.y;
            if ((a ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)) {
              (b(), v(160, 220, `sawtooth`), g());
              return;
            }
            let o = a ? [i, ...e] : [i, ...e.slice(0, -1)];
            ((c.current = o), (d.current = n), a && ((u.current = E(o)), v(660, 120, `square`)), O());
          }, ln)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[14] = O),
      (t[15] = g),
      (t[16] = v),
      (t[17] = j),
      (t[18] = M))
    : (M = t[18]);
  let N;
  (t[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((N = []), (t[19] = N)) : (N = t[19]),
    (0, an.useEffect)(M, N));
  let P;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, on.jsx)(`div`, {
          className: `h-full w-full`,
          ref: a,
          children: (0, on.jsx)(`canvas`, { className: `h-full w-full text-default`, ref: i }),
        })),
        (t[20] = P))
      : (P = t[20]),
    P
  );
}
var rn, an, on, sn, cn, ln, un, dn;
function fn() {
  return (fn = e(() => {
    ((rn = K()),
      (an = ae()),
      (on = q()),
      (sn = 12),
      (cn = 18),
      (ln = 120),
      (un = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }),
      (dn = { up: `down`, down: `up`, left: `right`, right: `left` }));
  }))();
}
function pn(e) {
  let t = (0, gn.c)(90),
    {
      detectedCredentials: r,
      supportsAwsCredentials: i,
      supportsAccessKeys: a,
      isDetecting: s,
      isSubmitting: c,
      errorMessage: l,
      onBack: d,
      onClearError: f,
      onDetectCredentials: m,
      onSubmit: h,
    } = e,
    g = (0, _n.useId)(),
    _ = (0, _n.useId)(),
    [v, b] = (0, _n.useState)(null),
    [x, S] = (0, _n.useState)(!1),
    [C, w] = (0, _n.useState)(``),
    [T, E] = (0, _n.useState)(``),
    [D, O] = (0, _n.useState)(``),
    [k, ee] = (0, _n.useState)(``),
    [A, j] = (0, _n.useState)(``),
    [M, N] = (0, _n.useState)(``),
    P = i ? v : `apiKey`,
    F = i && s,
    I = r?.activeProfile ?? `default`,
    L,
    R,
    z,
    te,
    B,
    V,
    ne,
    re,
    H,
    U,
    W;
  if (
    t[0] !== D ||
    t[1] !== M ||
    t[2] !== r ||
    t[3] !== g ||
    t[4] !== _ ||
    t[5] !== l ||
    t[6] !== F ||
    t[7] !== c ||
    t[8] !== P ||
    t[9] !== d ||
    t[10] !== f ||
    t[11] !== m ||
    t[12] !== h ||
    t[13] !== I ||
    t[14] !== C ||
    t[15] !== T ||
    t[16] !== k ||
    t[17] !== A ||
    t[18] !== x ||
    t[19] !== i
  ) {
    R = r?.profiles.slice().sort((e, t) => Number(t.name === I) - Number(e.name === I));
    let e =
      R?.find((e) => {
        let { name: t } = e;
        return t === C;
      }) ?? R?.[0];
    L = (R != null && R.length > 0) || r?.environmentCredentialsAvailable === !0;
    let a;
    (t[31] === f
      ? (a = t[32])
      : ((a = (e) => {
          (f(), b(e));
        }),
        (t[31] = f),
        (t[32] = a)),
      (z = a),
      (W = `flex h-full w-full justify-center overflow-y-auto bg-surface px-6 py-12 text-default`),
      (H = `my-auto flex w-[340px] max-w-full shrink-0 flex-col items-center gap-8`));
    let s;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsx)(nt, { className: `shrink-0` })), (t[33] = s))
      : (s = t[33]),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((U = (0, X.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-4 select-none`,
            children: [
              s,
              (0, X.jsx)(`h1`, {
                className: `w-[316px] text-center text-[28px] leading-9 font-normal text-default`,
                children: (0, X.jsx)(u, {
                  id: `electron.onboarding.login.bedrock.title`,
                  defaultMessage: `Set up Amazon Bedrock`,
                  description: `Title for Amazon Bedrock setup on desktop onboarding`,
                }),
              }),
            ],
          })),
          (t[34] = U))
        : (U = t[34]),
      (te = `flex w-full flex-col gap-3`),
      t[35] === l
        ? (B = t[36])
        : ((B =
            l == null
              ? null
              : (0, X.jsx)(`p`, {
                  className: `text-center text-[14px] leading-5 font-normal text-codex-description`,
                  role: `alert`,
                  children: l,
                })),
          (t[35] = l),
          (t[36] = B)),
      t[37] === F
        ? (V = t[38])
        : ((V = F
            ? (0, X.jsx)(`p`, {
                className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                children: (0, X.jsx)(u, {
                  id: `electron.onboarding.login.bedrock.detecting`,
                  defaultMessage: `Checking for AWS credentials…`,
                  description: `Loading message while desktop onboarding checks for AWS credentials`,
                }),
              })
            : null),
          (t[37] = F),
          (t[38] = V)),
      t[39] !== D ||
      t[40] !== M ||
      t[41] !== L ||
      t[42] !== F ||
      t[43] !== c ||
      t[44] !== P ||
      t[45] !== d ||
      t[46] !== f ||
      t[47] !== m ||
      t[48] !== h ||
      t[49] !== C ||
      t[50] !== T ||
      t[51] !== k ||
      t[52] !== A ||
      t[53] !== z ||
      t[54] !== i
        ? ((ne =
            !F && P != null
              ? (0, X.jsxs)(`form`, {
                  className: `flex w-full flex-col gap-6`,
                  onChange: f,
                  onSubmit: (e) => {
                    e.preventDefault();
                    bb77: switch (P) {
                      case `profile`:
                        h({ method: P, profile: C.trim(), region: T.trim() });
                        break bb77;
                      case `accessKeys`:
                        h({
                          method: P,
                          accessKeyId: D,
                          secretAccessKey: k,
                          sessionToken: A.trim().length === 0 ? null : A,
                          region: T.trim(),
                        });
                        break bb77;
                      case `environment`:
                        h({ method: P, region: T.trim() });
                        break bb77;
                      case `apiKey`:
                        h({ method: P, apiKey: M, region: T.trim() });
                    }
                  },
                  children: [
                    P === `profile`
                      ? (0, X.jsx)(hn, {
                          autoFocus: !0,
                          value: C,
                          onChange: w,
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.profile.label`,
                            defaultMessage: `AWS profile`,
                            description: `Label for the AWS profile field in Bedrock onboarding`,
                          }),
                        })
                      : null,
                    P === `accessKeys`
                      ? (0, X.jsxs)(X.Fragment, {
                          children: [
                            (0, X.jsx)(hn, {
                              autoFocus: !0,
                              value: D,
                              onChange: O,
                              children: (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.accessKeyId.label`,
                                defaultMessage: `AWS access key ID`,
                                description: `Label for the AWS access key ID field in Bedrock onboarding`,
                              }),
                            }),
                            (0, X.jsx)(hn, {
                              type: `password`,
                              value: k,
                              onChange: ee,
                              children: (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.secretAccessKey.label`,
                                defaultMessage: `AWS secret access key`,
                                description: `Label for the masked AWS secret access key field in Bedrock onboarding`,
                              }),
                            }),
                            (0, X.jsx)(hn, {
                              type: `password`,
                              required: !1,
                              value: A,
                              onChange: j,
                              children: (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.sessionToken.label`,
                                defaultMessage: `AWS session token (optional)`,
                                description: `Label for the optional AWS session token field in Bedrock onboarding`,
                              }),
                            }),
                          ],
                        })
                      : null,
                    P === `environment`
                      ? (0, X.jsx)(`p`, {
                          className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.environment.instructions`,
                            defaultMessage: `AWS credentials detected. Enter your AWS Region to continue.`,
                            description: `Instructions for using environment credentials in Bedrock onboarding`,
                          }),
                        })
                      : null,
                    P === `apiKey`
                      ? (0, X.jsx)(hn, {
                          autoFocus: !0,
                          type: `password`,
                          value: M,
                          onChange: N,
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.apiKey.label`,
                            defaultMessage: `Bedrock API key`,
                            description: `Label for the masked Bedrock API key field in desktop onboarding`,
                          }),
                        })
                      : null,
                    (0, X.jsx)(hn, {
                      autoFocus: P === `environment`,
                      value: T,
                      onChange: E,
                      help: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.region.example`,
                        defaultMessage: `For example, us-east-2`,
                        description: `Example below the AWS region field in Bedrock onboarding. Keep the region identifier us-east-2 untranslated.`,
                      }),
                      children: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.region.label`,
                        defaultMessage: `AWS region`,
                        description: `Label for the AWS region input in Amazon Bedrock onboarding`,
                      }),
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex w-full flex-col gap-3`,
                      children: [
                        (0, X.jsx)(n, {
                          className: `w-full justify-center`,
                          size: `large`,
                          type: `submit`,
                          disabled:
                            c ||
                            T.trim().length === 0 ||
                            (P === `profile` && C.trim().length === 0) ||
                            (P === `accessKeys` && (D.trim().length === 0 || k.trim().length === 0)) ||
                            (P === `apiKey` && M.trim().length === 0),
                          loading: c,
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.continue`,
                            defaultMessage: `Continue`,
                            description: `Continue button label for Amazon Bedrock sign-in`,
                          }),
                        }),
                        P === `environment`
                          ? (0, X.jsx)(n, {
                              className: `w-full justify-center`,
                              color: `secondary`,
                              size: `large`,
                              type: `button`,
                              disabled: c,
                              onClick: () => {
                                (z(null), S(!1), m());
                              },
                              children: (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.environment.retry`,
                                defaultMessage: `Check for credentials again`,
                                description: `Button label to check for AWS environment credentials again`,
                              }),
                            })
                          : null,
                        (0, X.jsx)(n, {
                          className: `w-full justify-center`,
                          color: `secondary`,
                          size: `large`,
                          type: `button`,
                          disabled: c,
                          onClick: () => {
                            if (!i) {
                              d();
                              return;
                            }
                            (z(null), S(L));
                          },
                          children: i
                            ? (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.chooseAnotherMethod`,
                                defaultMessage: `Choose another sign-in method`,
                                description: `Button label to return to Amazon Bedrock sign-in methods`,
                              })
                            : (0, X.jsx)(u, {
                                id: `electron.onboarding.login.bedrock.back`,
                                defaultMessage: `Back`,
                                description: `Button label to go back from Amazon Bedrock setup`,
                              }),
                        }),
                      ],
                    }),
                  ],
                })
              : null),
          (t[39] = D),
          (t[40] = M),
          (t[41] = L),
          (t[42] = F),
          (t[43] = c),
          (t[44] = P),
          (t[45] = d),
          (t[46] = f),
          (t[47] = m),
          (t[48] = h),
          (t[49] = C),
          (t[50] = T),
          (t[51] = k),
          (t[52] = A),
          (t[53] = z),
          (t[54] = i),
          (t[55] = ne))
        : (ne = t[55]),
      (re =
        !F && P == null && L && !x
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                R != null && e != null
                  ? (0, X.jsxs)(`div`, {
                      className: `flex w-full flex-col gap-2`,
                      children: [
                        (0, X.jsx)(`p`, {
                          id: g,
                          className: `text-sm font-normal text-default select-none`,
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.profiles.detected`,
                            defaultMessage: `AWS profile`,
                            description: `Label for the AWS profile selector in Amazon Bedrock onboarding`,
                          }),
                        }),
                        (0, X.jsx)(o, {
                          contentWidth: `panel`,
                          disabled: c,
                          triggerButton: (0, X.jsxs)(n, {
                            className: `w-full justify-between`,
                            "aria-labelledby": `${g} ${_}`,
                            color: `outlineSurface`,
                            size: `large`,
                            disabled: c,
                            children: [
                              (0, X.jsx)(`span`, { id: _, className: `truncate`, children: e.name }),
                              (0, X.jsx)(p, { className: `text-secondary` }),
                            ],
                          }),
                          children: (0, X.jsx)(y.RadioGroup, {
                            value: e.name,
                            onValueChange: (e) => {
                              (f(), w(e));
                            },
                            children: R.map(mn),
                          }),
                        }),
                        (0, X.jsx)(n, {
                          className: `mt-4 w-full justify-center`,
                          size: `large`,
                          disabled: c,
                          loading: c,
                          onClick: () => {
                            let t = e.region;
                            if (t == null) {
                              (w(e.name), E(``), z(`profile`));
                              return;
                            }
                            h({ method: `profile`, profile: e.name, region: t });
                          },
                          children: (0, X.jsx)(u, {
                            id: `electron.onboarding.login.bedrock.continue`,
                            defaultMessage: `Continue`,
                            description: `Continue button label for Amazon Bedrock sign-in`,
                          }),
                        }),
                      ],
                    })
                  : null,
                r?.environmentCredentialsAvailable === !0
                  ? (0, X.jsx)(n, {
                      className: `w-full justify-center`,
                      color: e == null ? `primary` : `ghostTertiary`,
                      size: e == null ? `large` : `default`,
                      disabled: c,
                      onClick: () => {
                        (E(r.environmentRegion ?? ``), z(`environment`));
                      },
                      children: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.environment.continue`,
                        defaultMessage: `Continue with detected credentials`,
                        description: `Button label to sign in with detected AWS environment credentials`,
                      }),
                    })
                  : null,
                (0, X.jsx)(n, {
                  className: `w-full justify-center`,
                  color: `outlineSurface`,
                  size: `large`,
                  disabled: c,
                  onClick: () => {
                    (f(), S(!0));
                  },
                  children: (0, X.jsx)(u, {
                    id: `electron.onboarding.login.bedrock.otherMethods`,
                    defaultMessage: `Other AWS sign-in methods`,
                    description: `Button label to show other AWS sign-in methods`,
                  }),
                }),
              ],
            })
          : null),
      (t[0] = D),
      (t[1] = M),
      (t[2] = r),
      (t[3] = g),
      (t[4] = _),
      (t[5] = l),
      (t[6] = F),
      (t[7] = c),
      (t[8] = P),
      (t[9] = d),
      (t[10] = f),
      (t[11] = m),
      (t[12] = h),
      (t[13] = I),
      (t[14] = C),
      (t[15] = T),
      (t[16] = k),
      (t[17] = A),
      (t[18] = x),
      (t[19] = i),
      (t[20] = L),
      (t[21] = R),
      (t[22] = z),
      (t[23] = te),
      (t[24] = B),
      (t[25] = V),
      (t[26] = ne),
      (t[27] = re),
      (t[28] = H),
      (t[29] = U),
      (t[30] = W));
  } else
    ((L = t[20]),
      (R = t[21]),
      (z = t[22]),
      (te = t[23]),
      (B = t[24]),
      (V = t[25]),
      (ne = t[26]),
      (re = t[27]),
      (H = t[28]),
      (U = t[29]),
      (W = t[30]));
  let G;
  t[56] !== r ||
  t[57] !== l ||
  t[58] !== L ||
  t[59] !== F ||
  t[60] !== c ||
  t[61] !== P ||
  t[62] !== R ||
  t[63] !== z ||
  t[64] !== x ||
  t[65] !== a ||
  t[66] !== i
    ? ((G =
        !F && P == null && (!L || x)
          ? (0, X.jsxs)(X.Fragment, {
              children: [
                i && r != null && l == null && !L
                  ? (0, X.jsx)(`p`, {
                      className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                      children: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.noCredentials`,
                        defaultMessage: `No AWS credentials found`,
                        description: `Message shown when desktop onboarding finds no AWS credentials`,
                      }),
                    })
                  : null,
                i
                  ? (0, X.jsx)(n, {
                      className: `w-full justify-center`,
                      color: `secondary`,
                      size: `large`,
                      onClick: () => {
                        (w(r?.activeProfile ?? ``),
                          E(
                            R?.find((e) => {
                              let { name: t } = e;
                              return t === r?.activeProfile;
                            })?.region ?? ``,
                          ),
                          z(`profile`));
                      },
                      children: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.profile.method`,
                        defaultMessage: `AWS profile`,
                        description: `Button label to sign in with an AWS profile`,
                      }),
                    })
                  : null,
                i && a
                  ? (0, X.jsx)(n, {
                      className: `w-full justify-center`,
                      color: `secondary`,
                      size: `large`,
                      onClick: () => {
                        (E(r?.region ?? ``), z(`accessKeys`));
                      },
                      children: (0, X.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.accessKeys.method`,
                        defaultMessage: `AWS access keys`,
                        description: `Button label to sign in with AWS access keys`,
                      }),
                    })
                  : null,
                (0, X.jsx)(n, {
                  className: `w-full justify-center`,
                  color: `secondary`,
                  size: `large`,
                  disabled: c,
                  onClick: () => {
                    (E(r?.region ?? ``), z(`apiKey`));
                  },
                  children: (0, X.jsx)(u, {
                    id: `electron.onboarding.login.bedrock.apiKey.method`,
                    defaultMessage: `Bedrock API key`,
                    description: `Button label to enter a Bedrock API key`,
                  }),
                }),
              ],
            })
          : null),
      (t[56] = r),
      (t[57] = l),
      (t[58] = L),
      (t[59] = F),
      (t[60] = c),
      (t[61] = P),
      (t[62] = R),
      (t[63] = z),
      (t[64] = x),
      (t[65] = a),
      (t[66] = i),
      (t[67] = G))
    : (G = t[67]);
  let K;
  t[68] !== L || t[69] !== c || t[70] !== P || t[71] !== d || t[72] !== f || t[73] !== x
    ? ((K =
        P == null
          ? (0, X.jsx)(n, {
              className: `mt-3 w-full justify-center`,
              color: `secondary`,
              size: `large`,
              disabled: c,
              onClick: () => {
                if ((f(), x && L)) {
                  S(!1);
                  return;
                }
                d();
              },
              children: (0, X.jsx)(u, {
                id: `electron.onboarding.login.bedrock.back`,
                defaultMessage: `Back`,
                description: `Button label to go back from Amazon Bedrock setup`,
              }),
            })
          : null),
      (t[68] = L),
      (t[69] = c),
      (t[70] = P),
      (t[71] = d),
      (t[72] = f),
      (t[73] = x),
      (t[74] = K))
    : (K = t[74]);
  let ie;
  t[75] !== te || t[76] !== K || t[77] !== B || t[78] !== V || t[79] !== ne || t[80] !== re || t[81] !== G
    ? ((ie = (0, X.jsxs)(`div`, { className: te, children: [B, V, ne, re, G, K] })),
      (t[75] = te),
      (t[76] = K),
      (t[77] = B),
      (t[78] = V),
      (t[79] = ne),
      (t[80] = re),
      (t[81] = G),
      (t[82] = ie))
    : (ie = t[82]);
  let q;
  t[83] !== ie || t[84] !== H || t[85] !== U
    ? ((q = (0, X.jsxs)(`div`, { className: H, children: [U, ie] })),
      (t[83] = ie),
      (t[84] = H),
      (t[85] = U),
      (t[86] = q))
    : (q = t[86]);
  let ae;
  return (
    t[87] !== q || t[88] !== W
      ? ((ae = (0, X.jsx)(`div`, { className: W, children: q })), (t[87] = q), (t[88] = W), (t[89] = ae))
      : (ae = t[89]),
    ae
  );
}
function mn(e) {
  return (0, X.jsx)(
    y.RadioItem,
    {
      value: e.name,
      SubText:
        e.region == null
          ? null
          : (0, X.jsx)(u, {
              id: `electron.onboarding.login.bedrock.profile.region`,
              defaultMessage: `Region: {region}`,
              description: `AWS Region shown for a detected AWS profile`,
              values: { region: e.region },
            }),
      children: e.name,
    },
    e.name,
  );
}
function hn(e) {
  let t = (0, gn.c)(20),
    { children: n, value: r, onChange: i, type: a, autoFocus: o, required: s, help: c } = e,
    l = a === void 0 ? `text` : a,
    u = o !== void 0 && o,
    d = s === void 0 || s,
    f = (0, _n.useId)(),
    p;
  t[0] === n
    ? (p = t[1])
    : ((p = (0, X.jsx)(`span`, { className: `select-none`, children: n })), (t[0] = n), (t[1] = p));
  let m = c == null ? void 0 : f,
    h;
  t[2] === i ? (h = t[3]) : ((h = (e) => i(e.target.value)), (t[2] = i), (t[3] = h));
  let g;
  t[4] !== u || t[5] !== d || t[6] !== m || t[7] !== h || t[8] !== l || t[9] !== r
    ? ((g = (0, X.jsx)(Y, {
        "aria-describedby": m,
        autoFocus: u,
        type: l,
        required: d,
        value: r,
        onChange: h,
      })),
      (t[4] = u),
      (t[5] = d),
      (t[6] = m),
      (t[7] = h),
      (t[8] = l),
      (t[9] = r),
      (t[10] = g))
    : (g = t[10]);
  let _;
  t[11] !== p || t[12] !== g
    ? ((_ = (0, X.jsxs)(`label`, {
        className: `flex flex-col gap-2 text-sm font-normal text-default`,
        children: [p, g],
      })),
      (t[11] = p),
      (t[12] = g),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== c || t[15] !== f
    ? ((v =
        c == null
          ? null
          : (0, X.jsx)(`p`, { id: f, className: `text-sm text-secondary select-none`, children: c })),
      (t[14] = c),
      (t[15] = f),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== _ || t[18] !== v
      ? ((y = (0, X.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [_, v] })),
        (t[17] = _),
        (t[18] = v),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
var gn, _n, X;
function vn() {
  return (vn = e(() => {
    ((gn = K()), (_n = ae()), R(), W(), i(), v(), de(), ct(), (X = q()));
  }))();
}
function yn(e, t) {
  if (t === `signin`) return e;
  try {
    let n = new URL(e),
      r = n.pathname === `/codex/desktop-auth` ? n.searchParams.get(`authorize_url`) : null,
      i = r == null ? n : new URL(r);
    switch (t) {
      case `signup`:
        i.searchParams.set(`screen_hint`, `signup`);
        break;
      case `google`:
        (i.searchParams.set(`screen_hint`, `login_or_signup`),
          i.searchParams.set(`connection`, `google-oauth2`));
        break;
      case `microsoft`:
        (i.searchParams.set(`screen_hint`, `login_or_signup`),
          i.searchParams.set(`connection`, `windowslive`));
        break;
      case `apple`:
        (i.searchParams.set(`screen_hint`, `login_or_signup`), i.searchParams.set(`connection`, `apple`));
        break;
      case `email`:
        i.searchParams.set(`screen_hint`, `login_or_signup`);
        break;
      case `other-account`:
        i.searchParams.set(`prompt`, `select_account`);
    }
    return (r != null && n.searchParams.set(`authorize_url`, i.toString()), n.toString());
  } catch {
    return e;
  }
}
function bn(e) {
  if (e instanceof Error && e.name === `AbortError`) return `abort`;
  if (e instanceof Error && e.name === `TimeoutError`) return `network`;
  if (e instanceof M) {
    if (e.status === 401 || e.status === 403) return `auth`;
    if (
      e.status === 0 ||
      e.status === 408 ||
      e.status === 504 ||
      (e.errorCode != null && xn.has(e.errorCode))
    )
      return `network`;
    let t = me(e);
    return (t?.type != null && Sn.has(t.type)) || (e.errorCode != null && Sn.has(e.errorCode))
      ? `auth`
      : `unknown`;
  }
  if (e instanceof Error && `code` in e && typeof e.code == `string` && xn.has(e.code)) return `network`;
  let t = (typeof e == `string` ? e : e instanceof Error ? e.message : ``).trim().toLowerCase();
  return Cn.has(t)
    ? `network`
    : Sn.has(t) || t === `auth failed` || t === `invalid api key`
      ? `auth`
      : `unknown`;
}
var xn, Sn, Cn;
function wn() {
  return (wn = e(() => {
    (fe(),
      k(),
      (xn = new Set([
        `EAI_AGAIN`,
        `ECONNREFUSED`,
        `ECONNRESET`,
        `ENOTFOUND`,
        `ETIMEDOUT`,
        `ERR_CONNECTION_RESET`,
        `ERR_NETWORK_CHANGED`,
        `ERR_TIMED_OUT`,
      ])),
      (Sn = new Set([
        `authentication_error`,
        `forbidden`,
        `invalid_api_key`,
        `token_invalidated`,
        `unauthorized`,
      ])),
      (Cn = new Set([
        `failed to fetch`,
        `fetch failed`,
        `load failed`,
        `network request failed`,
        `networkerror when attempting to fetch resource.`,
        `request timed out`,
      ])));
  }))();
}
function Tn() {
  let e = (0, Dn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, On.jsx)(`p`, {
          className: `pb-3 text-start text-sm text-secondary select-none`,
          children: (0, On.jsx)(u, {
            id: `electron.onboarding.login.apikey.createKey`,
            defaultMessage: `Don’t have an API key? <createKey>Create one here.</createKey>`,
            description: `Help below the desktop API key field; createKey links to the OpenAI API key management page in the user's browser`,
            values: { createKey: En },
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function En(e) {
  return (0, On.jsx)(pt, {
    href: `https://platform.openai.com/api-keys`,
    initiator: `open_in_browser_bridge`,
    isBrowserEnabled: !1,
    openTarget: `external-browser`,
    underline: `always`,
    children: e,
  });
}
var Dn, On;
function kn() {
  return (kn = e(() => {
    ((Dn = K()), R(), ft(), (On = q()));
  }))();
}
function An(e) {
  let t = (0, jn.c)(46),
    { allowOtherSignInMethods: r, onChatGptSignIn: i, onShowOtherSignInMethods: o } = e,
    s = b(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Z.jsx)(nt, { className: `shrink-0` })), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsxs)(`div`, {
        className: `flex flex-col items-center gap-4 text-center`,
        children: [
          c,
          (0, Z.jsx)(`h1`, {
            className: `text-3xl font-normal`,
            children: (0, Z.jsx)(u, {
              id: `electron.onboarding.login.fallback.title`,
              defaultMessage: `Log in or sign up`,
              description: `Heading on desktop sign-in when browser lookup confirms no signed-in ChatGPT session; users can choose a provider or enter their email`,
            }),
          }),
        ],
      })),
      (t[1] = l))
    : (l = t[1]);
  let d;
  t[2] === i ? (d = t[3]) : ((d = () => void i(`signin`)), (t[2] = i), (t[3] = d));
  let f, p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(O, { "aria-hidden": `true`, className: `size-5 shrink-0` })),
      (p = (0, Z.jsx)(u, {
        id: `electron.onboarding.login.fallback.chatgpt`,
        defaultMessage: `Continue with ChatGPT`,
        description: `First desktop sign-in button opening the existing general ChatGPT browser authentication flow`,
      })),
      (t[4] = f),
      (t[5] = p))
    : ((f = t[4]), (p = t[5]));
  let m;
  t[6] === d
    ? (m = t[7])
    : ((m = (0, Z.jsxs)(n, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: d,
        children: [f, p],
      })),
      (t[6] = d),
      (t[7] = m));
  let h;
  t[8] === i ? (h = t[9]) : ((h = () => void i(`google`)), (t[8] = i), (t[9] = h));
  let g, _;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Z.jsx)(Pt, { "aria-hidden": `true`, className: `size-5 shrink-0` })),
      (_ = (0, Z.jsx)(u, {
        id: `electron.onboarding.login.google.signIn`,
        defaultMessage: `Continue with Google`,
        description: `Button label for Google sign-in on desktop onboarding`,
      })),
      (t[10] = g),
      (t[11] = _))
    : ((g = t[10]), (_ = t[11]));
  let v;
  t[12] === h
    ? (v = t[13])
    : ((v = (0, Z.jsxs)(n, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: h,
        children: [g, _],
      })),
      (t[12] = h),
      (t[13] = v));
  let y;
  t[14] === i ? (y = t[15]) : ((y = () => void i(`apple`)), (t[14] = i), (t[15] = y));
  let x, S;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(a, {})),
      (S = (0, Z.jsx)(u, {
        id: `electron.onboarding.login.apple.signIn`,
        defaultMessage: `Continue with Apple`,
        description: `Button on the desktop sign-in screen opening Apple authentication in the system browser`,
      })),
      (t[16] = x),
      (t[17] = S))
    : ((x = t[16]), (S = t[17]));
  let C;
  t[18] === y
    ? (C = t[19])
    : ((C = (0, Z.jsxs)(n, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: y,
        children: [x, S],
      })),
      (t[18] = y),
      (t[19] = C));
  let w;
  t[20] !== v || t[21] !== C || t[22] !== m
    ? ((w = (0, Z.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [m, v, C] })),
      (t[20] = v),
      (t[21] = C),
      (t[22] = m),
      (t[23] = w))
    : (w = t[23]);
  let T;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-6 py-1 text-xs text-secondary`,
        "aria-hidden": `true`,
        children: [
          (0, Z.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
          (0, Z.jsx)(u, {
            id: `electron.onboarding.login.fallback.or`,
            defaultMessage: `OR`,
            description: `Separator between browser sign-in buttons and the email form on desktop sign-in`,
          }),
          (0, Z.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
        ],
      })),
      (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] === i
    ? (E = t[26])
    : ((E = (e) => {
        e.preventDefault();
        let t = new FormData(e.currentTarget).get(`username`);
        typeof t == `string` && i(`email`, t.trim());
      }),
      (t[25] = i),
      (t[26] = E));
  let D;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(`span`, {
        className: `sr-only`,
        children: (0, Z.jsx)(u, {
          id: `electron.onboarding.login.fallback.emailLabel`,
          defaultMessage: `Email address`,
          description: `Accessible label for the desktop sign-in email input`,
        }),
      })),
      (t[27] = D))
    : (D = t[27]);
  let k;
  t[28] === s
    ? (k = t[29])
    : ((k = s.formatMessage({
        id: `electron.onboarding.login.fallback.emailPlaceholder`,
        defaultMessage: `Email`,
        description: `Placeholder in the desktop sign-in email input`,
      })),
      (t[28] = s),
      (t[29] = k));
  let ee;
  t[30] === k
    ? (ee = t[31])
    : ((ee = (0, Z.jsxs)(`label`, {
        children: [
          D,
          (0, Z.jsx)(Y, {
            variant: `auth`,
            name: `username`,
            type: `email`,
            autoComplete: `email`,
            maxLength: 320,
            required: !0,
            placeholder: k,
          }),
        ],
      })),
      (t[30] = k),
      (t[31] = ee));
  let A;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Z.jsx)(n, {
        color: `primary`,
        radius: `full`,
        size: `auth`,
        type: `submit`,
        children: (0, Z.jsx)(u, {
          id: `electron.onboarding.login.fallback.continue`,
          defaultMessage: `Continue`,
          description: `Button submitting the entered email address and continuing authentication in the system browser`,
        }),
      })),
      (t[32] = A))
    : (A = t[32]);
  let j;
  t[33] !== E || t[34] !== ee
    ? ((j = (0, Z.jsxs)(`form`, { className: `flex w-full flex-col gap-5`, onSubmit: E, children: [ee, A] })),
      (t[33] = E),
      (t[34] = ee),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== r || t[37] !== o
    ? ((M = r
        ? (0, Z.jsx)(n, {
            className: `self-center`,
            color: `ghostMuted`,
            size: `inline`,
            type: `button`,
            onClick: o,
            children: (0, Z.jsx)(u, {
              id: `electron.onboarding.login.apikey.open.welcomeV2`,
              defaultMessage: `Sign in another way`,
              description: `Button label to open another sign-in method on v2 desktop onboarding`,
            }),
          })
        : null),
      (t[36] = r),
      (t[37] = o),
      (t[38] = M))
    : (M = t[38]);
  let N, P;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Z.jsx)(pt, {
        appearance: `secondary`,
        href: `https://openai.com/policies/terms-of-use/`,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, Z.jsx)(u, {
          id: `electron.onboarding.login.fallback.terms`,
          defaultMessage: `Terms of use`,
          description: `Link below the desktop sign-in options opening OpenAI's terms of use in the system browser`,
        }),
      })),
      (P = (0, Z.jsx)(`div`, { "aria-hidden": `true`, className: `h-3 w-px bg-border` })),
      (t[39] = N),
      (t[40] = P))
    : ((N = t[39]), (P = t[40]));
  let F;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, Z.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-center gap-3 text-xs text-secondary`,
        children: [
          N,
          P,
          (0, Z.jsx)(pt, {
            appearance: `secondary`,
            href: `https://openai.com/policies/privacy-policy/`,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
            children: (0, Z.jsx)(u, {
              id: `electron.onboarding.login.fallback.privacy`,
              defaultMessage: `Privacy policy`,
              description: `Link below the desktop sign-in options opening OpenAI's privacy policy in the system browser`,
            }),
          }),
        ],
      })),
      (t[41] = F))
    : (F = t[41]);
  let I;
  return (
    t[42] !== w || t[43] !== j || t[44] !== M
      ? ((I = (0, Z.jsx)(`div`, {
          className: `flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none`,
          children: (0, Z.jsx)(`main`, {
            className: `flex w-full shrink-0 grow flex-col items-center justify-center px-6 py-4`,
            children: (0, Z.jsxs)(`div`, {
              className: `flex w-full max-w-sm flex-col gap-5`,
              children: [l, w, T, j, M, F],
            }),
          }),
        })),
        (t[42] = w),
        (t[43] = j),
        (t[44] = M),
        (t[45] = I))
      : (I = t[45]),
    I
  );
}
var jn, Z;
function Mn() {
  return (Mn = e(() => {
    ((jn = K()), R(), W(), ft(), v(), de(), Nt(), B(), ct(), (Z = q()));
  }))();
}
function Nn(e) {
  let t = (0, Pn.c)(6),
    { children: n, description: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Fn.jsx)(nt, { className: `size-10 shrink-0` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = (0, Fn.jsx)(`p`, {
        className: `text-center text-base leading-5 font-normal text-codex-description select-none`,
        children: r,
      })),
      (t[1] = r),
      (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, Fn.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default`,
          children: (0, Fn.jsxs)(`div`, {
            className: `flex w-[340px] flex-col items-center gap-8`,
            children: [i, a, n],
          }),
        })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var Pn, Fn;
function In() {
  return (In = e(() => {
    ((Pn = K()), ct(), (Fn = q()));
  }))();
}
function Ln(e) {
  let t = (0, zn.c)(136),
    {
      allowApiKey: r,
      allowChatGpt: i,
      apiKeyHelpVariant: a,
      apiKeyValue: o,
      browserSessionProfiles: s,
      canCopySignInLink: c,
      isApiKeyEntryVisible: l,
      isOtherSignInMethodsVisible: d,
      isApiKeySignInPending: p,
      isChatGptSignInPending: m,
      showAmazonBedrockSignIn: h,
      showChatGptProviderSignIn: g,
      onApiKeySubmit: _,
      onApiKeyValueChange: v,
      onChatGptSignIn: y,
      onChatGptSignUp: S,
      onCopySignInLink: w,
      onPlaySnake: T,
      onResetApiKeyEntry: E,
      onShowApiKeyEntry: D,
      onShowOtherSignInMethods: k,
      onHideOtherSignInMethods: A,
      onShowBedrockSetup: j,
    } = e,
    M = b(),
    N = r && l,
    P = r && h && d && !N,
    F = $e(m && !N ? `2502927686` : !1),
    I = f.chatGptBrowserSession,
    L = i && s === void 0 && I != null,
    R;
  t[0] === L ? (R = t[1]) : ((R = { enabled: L }), (t[0] = L), (t[1] = R));
  let { data: z, isPending: te } = x(Ot, R),
    B = z?.eligible ?? !1,
    V = L && te,
    re = x(Dt),
    H = rt(x(Ct)),
    U = L && B,
    W;
  t[2] !== H || t[3] !== re || t[4] !== U
    ? ((W = St({ eligible: U, isWindows: re, lookupLayer: H })),
      (t[2] = H),
      (t[3] = re),
      (t[4] = U),
      (t[5] = W))
    : (W = t[5]);
  let { experience: G, enabled: K, listAllAccounts: ie } = W,
    q = rt(en),
    ae;
  t[6] !== G || t[7] !== V || t[8] !== q || t[9] !== g
    ? ((ae = !V && G === `existing` && (g ?? Qt(q.get(`enabled`, !1)))),
      (t[6] = G),
      (t[7] = V),
      (t[8] = q),
      (t[9] = g),
      (t[10] = ae))
    : (ae = t[10]);
  let se = ae,
    ce = rt(Vn),
    le;
  t[11] !== ce || t[12] !== a || t[13] !== N
    ? ((le = a ?? (N ? ce.get(`api_key_help_variant`, `control`) : `control`)),
      (t[11] = ce),
      (t[12] = a),
      (t[13] = N),
      (t[14] = le))
    : (le = t[14]);
  let ue = le,
    de = ue === `link` || ue === `explanation` || ue === `explanation-with-chatgpt` ? ue : `control`,
    fe = N && (de === `explanation` || de === `explanation-with-chatgpt`),
    pe;
  t[15] !== H || t[16] !== re
    ? ((pe = !re && H.get(`update_cta_for_sign_in_with_api_key`, !1)),
      (t[15] = H),
      (t[16] = re),
      (t[17] = pe))
    : (pe = t[17]);
  let me = pe,
    he = L && B,
    ge;
  t[18] !== H || t[19] !== he || t[20] !== re
    ? ((ge = !re && he && H.get(`update_cta_for_sign_in_with_api_key_with_browser_lookup`, !1)),
      (t[18] = H),
      (t[19] = he),
      (t[20] = re),
      (t[21] = ge))
    : (ge = t[21]);
  let _e = me || ge,
    ve;
  t[22] === K ? (ve = t[23]) : ((ve = { enabled: K }), (t[22] = K), (t[23] = ve));
  let { data: ye, isPending: be, isFetching: xe, isSuccess: Se } = oe(wt, ie, ve),
    Ce = ye === void 0 ? null : ye,
    we = K && be,
    Te = i ? (s ?? null) : null;
  i && K && s === void 0 && !we && (Te = Ce);
  let Ee, De, Oe, ke, Ae, J, Y;
  if (
    t[24] !== r ||
    t[25] !== i ||
    t[26] !== de ||
    t[27] !== o ||
    t[28] !== K ||
    t[29] !== Te ||
    t[30] !== c ||
    t[31] !== G ||
    t[32] !== M ||
    t[33] !== l ||
    t[34] !== p ||
    t[35] !== V ||
    t[36] !== xe ||
    t[37] !== we ||
    t[38] !== Se ||
    t[39] !== m ||
    t[40] !== _ ||
    t[41] !== v ||
    t[42] !== y ||
    t[43] !== S ||
    t[44] !== w ||
    t[45] !== A ||
    t[46] !== T ||
    t[47] !== E ||
    t[48] !== D ||
    t[49] !== j ||
    t[50] !== k ||
    t[51] !== Ce?.length ||
    t[52] !== h ||
    t[53] !== fe ||
    t[54] !== N ||
    t[55] !== F ||
    t[56] !== se ||
    t[57] !== P ||
    t[58] !== _e
  ) {
    Y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = Te?.slice(0, 3),
        a = (e?.length ?? 0) > 0 && !N && !P,
        s;
      if (P) {
        let e;
        (t[66] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(u, {
              id: `electron.onboarding.login.otherMethods.title`,
              defaultMessage: `Sign in another way`,
              description: `Title for choosing between OpenAI API key and Amazon Bedrock sign-in`,
            })),
            (t[66] = e))
          : (e = t[66]),
          (s = e));
      } else if (!i || fe) {
        let e;
        (t[67] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(u, {
              id: `electron.onboarding.login.welcomeV2.title.apiKey`,
              defaultMessage: `Sign in with an API key`,
              description: `Title on desktop onboarding when explaining API key sign-in or when only API key sign-in is allowed`,
            })),
            (t[67] = e))
          : (e = t[67]),
          (s = e));
      } else {
        let e;
        (t[68] === a
          ? (e = t[69])
          : ((e = a
              ? (0, Q.jsx)(u, {
                  id: `electron.onboarding.login.browserSession.welcomeBack`,
                  defaultMessage: `Welcome back`,
                  description: `Title on desktop onboarding when a signed-in ChatGPT browser session was found`,
                })
              : (0, Q.jsx)(u, {
                  id: `electron.onboarding.login.welcomeV2.title.chatgptSignIn`,
                  defaultMessage: `Sign in to ChatGPT`,
                  description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
                })),
            (t[68] = a),
            (t[69] = e)),
          (s = e));
      }
      if (i && m && !N) {
        let e;
        t[70] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(u, {
              id: `electron.onboarding.login.browserPending.welcomeV2`,
              defaultMessage: `Continue signing in with your browser`,
              description: `Message shown while ChatGPT sign-in continues in the browser`,
            })),
            (t[70] = e))
          : (e = t[70]);
        let r;
        t[71] === y ? (r = t[72]) : ((r = () => void y()), (t[71] = y), (t[72] = r));
        let i;
        t[73] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, Q.jsx)(u, {
              id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
              defaultMessage: `Cancel sign-in`,
              description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
            })),
            (t[73] = i))
          : (i = t[73]);
        let a;
        t[74] === r
          ? (a = t[75])
          : ((a = (0, Q.jsx)(`button`, {
              className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-primary-ghost-hover`,
              type: `button`,
              onClick: r,
              children: i,
            })),
            (t[74] = r),
            (t[75] = a));
        let o;
        t[76] !== c || t[77] !== w || t[78] !== F
          ? ((o = F
              ? (0, Q.jsxs)(`div`, {
                  className: `flex flex-wrap items-center justify-center gap-2`,
                  children: [
                    (0, Q.jsx)(`span`, {
                      className: `py-2 text-sm leading-5 font-normal text-codex-description select-none`,
                      children: (0, Q.jsx)(u, {
                        id: `electron.onboarding.login.browserDidNotOpen`,
                        defaultMessage: `Browser didn't open?`,
                        description: `Helper text before the Copy sign-in link action while desktop browser sign-in is pending`,
                      }),
                    }),
                    (0, Q.jsxs)(n, {
                      color: `ghost`,
                      disabled: !c,
                      size: `dialog`,
                      onClick: () => void w(),
                      children: [
                        (0, Q.jsx)(C, {}),
                        (0, Q.jsx)(u, {
                          id: `electron.onboarding.login.copyLink`,
                          defaultMessage: `Copy sign-in link`,
                          description: `Button that copies the active sign-in URL so the user can continue signing in in another browser without restarting`,
                        }),
                      ],
                    }),
                  ],
                })
              : null),
            (t[76] = c),
            (t[77] = w),
            (t[78] = F),
            (t[79] = o))
          : (o = t[79]);
        let s;
        (t[80] !== a || t[81] !== o
          ? ((s = (0, Q.jsx)(Nn, {
              description: e,
              children: (0, Q.jsxs)(`div`, {
                className: `flex w-full flex-col items-center gap-6`,
                children: [a, o],
              }),
            })),
            (t[80] = a),
            (t[81] = o),
            (t[82] = s))
          : (s = t[82]),
          (Y = s));
        break bb0;
      }
      if (!N && (V || we)) {
        let e;
        (t[83] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsxs)(`div`, {
              className: `flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description`,
              children: [
                (0, Q.jsx)(ne, { className: `h-4 w-4 text-default` }),
                (0, Q.jsx)(u, {
                  id: `electron.onboarding.login.loading`,
                  defaultMessage: `Loading…`,
                  description: `Loading state while the desktop login page prepares the sign-in experience`,
                }),
              ],
            })),
            (t[83] = e))
          : (e = t[83]),
          (Y = e));
        break bb0;
      }
      if (G === `browser_lookup_with_fallback` && K && Se && !xe && Ce?.length === 0 && !N && !P) {
        let e = h ? k : D,
          n;
        (t[84] !== r || t[85] !== y || t[86] !== e
          ? ((n = (0, Q.jsx)(An, {
              allowOtherSignInMethods: r,
              onChatGptSignIn: y,
              onShowOtherSignInMethods: e,
            })),
            (t[84] = r),
            (t[85] = y),
            (t[86] = e),
            (t[87] = n))
          : (n = t[87]),
          (Y = n));
        break bb0;
      }
      ((J = `flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-6 text-default`),
        (Ee = `flex w-[340px] flex-col items-center gap-8`));
      let d = fe ? `gap-5` : `gap-4`,
        f;
      t[88] === d
        ? (f = t[89])
        : ((f = ee(`flex w-full flex-col items-center`, d)), (t[88] = d), (t[89] = f));
      let g;
      t[90] === M
        ? (g = t[91])
        : ((g = M.formatMessage({
            id: `electron.onboarding.login.snake.start`,
            defaultMessage: `Play Snake`,
            description: `Aria label for the ChatGPT logo button to start Snake`,
          })),
          (t[90] = M),
          (t[91] = g));
      let b;
      t[92] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((b = (0, Q.jsx)(nt, { className: `shrink-0` })), (t[92] = b))
        : (b = t[92]);
      let x;
      t[93] !== T || t[94] !== g
        ? ((x = (0, Q.jsx)(n, {
            className: `group justify-center`,
            color: `ghostMuted`,
            radius: `full`,
            size: `inline`,
            type: `button`,
            "aria-label": g,
            onClick: T,
            children: b,
          })),
          (t[93] = T),
          (t[94] = g),
          (t[95] = x))
        : (x = t[95]);
      let I;
      t[96] === s
        ? (I = t[97])
        : ((I = (0, Q.jsx)(`h1`, {
            className: `w-[316px] text-center text-[28px] leading-9 font-normal text-default`,
            children: s,
          })),
          (t[96] = s),
          (t[97] = I));
      let L;
      t[98] === fe
        ? (L = t[99])
        : ((L = fe
            ? (0, Q.jsx)(`p`, {
                className: `text-center text-base leading-6 text-secondary select-none`,
                children: (0, Q.jsx)(u, {
                  id: `electron.onboarding.login.apikey.explanation`,
                  defaultMessage: `Use OpenAI’s developer platform with separate, usage-based billing`,
                  description: `Description below the API key sign-in heading explaining that OpenAI API usage has its own usage-based billing, separate from ChatGPT`,
                }),
              })
            : null),
          (t[98] = fe),
          (t[99] = L));
      let R;
      (t[100] === a
        ? (R = t[101])
        : ((R = a
            ? (0, Q.jsx)(`p`, {
                className: `text-center text-[14px] leading-5 text-codex-description`,
                children: (0, Q.jsx)(u, {
                  id: `electron.onboarding.login.browserSession.chooseAccount`,
                  defaultMessage: `Choose an account to continue to ChatGPT`,
                  description: `Instruction on desktop onboarding when a signed-in ChatGPT browser session was found`,
                }),
              })
            : null),
          (t[100] = a),
          (t[101] = R)),
        t[102] !== f || t[103] !== x || t[104] !== I || t[105] !== L || t[106] !== R
          ? ((De = (0, Q.jsxs)(`div`, { className: f, children: [x, I, L, R] })),
            (t[102] = f),
            (t[103] = x),
            (t[104] = I),
            (t[105] = L),
            (t[106] = R),
            (t[107] = De))
          : (De = t[107]),
        t[108] !== r ||
        t[109] !== i ||
        t[110] !== de ||
        t[111] !== o ||
        t[112] !== l ||
        t[113] !== p ||
        t[114] !== m ||
        t[115] !== _ ||
        t[116] !== v ||
        t[117] !== y ||
        t[118] !== E ||
        t[119] !== D ||
        t[120] !== N
          ? ((Oe = N
              ? (0, Q.jsxs)(`div`, {
                  className: `flex w-full flex-col gap-8`,
                  children: [
                    (0, Q.jsx)(Kt, {
                      allowApiKey: r,
                      allowChatGpt: i,
                      apiKeyHelp: de === `control` ? null : (0, Q.jsx)(Tn, {}),
                      apiKeyValue: o,
                      isApiKeyEntryVisible: l,
                      isApiKeySignInPending: p,
                      isChatGptSignInPending: m,
                      onApiKeySecondaryAction: E,
                      onApiKeySubmit: _,
                      onApiKeyValueChange: v,
                      onChatGptSignIn: y,
                      onShowApiKeyEntry: D,
                      apiKeySecondaryActionLabel: (0, Q.jsx)(u, {
                        id: `electron.onboarding.login.apikey.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button label for API key entry on desktop onboarding`,
                      }),
                    }),
                    de === `explanation-with-chatgpt` && i
                      ? (0, Q.jsxs)(`div`, {
                          className: `flex flex-col items-center gap-2 text-center text-sm text-secondary select-none`,
                          children: [
                            (0, Q.jsx)(`p`, {
                              children: (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.apikey.chatGptAlternative`,
                                defaultMessage: `Want to use your ChatGPT account?`,
                                description: `Prompt below the API key form offering ChatGPT account sign-in as an alternative`,
                              }),
                            }),
                            (0, Q.jsx)(n, {
                              className: `underline`,
                              color: `ghostMuted`,
                              size: `inline`,
                              type: `button`,
                              disabled: p || m,
                              onClick: () => {
                                (E(), y());
                              },
                              children: (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.apikey.signInWithChatGpt`,
                                defaultMessage: `Sign in with ChatGPT`,
                                description: `Button below the API key form that switches to ChatGPT account sign-in and opens the browser`,
                              }),
                            }),
                          ],
                        })
                      : null,
                  ],
                })
              : null),
            (t[108] = r),
            (t[109] = i),
            (t[110] = de),
            (t[111] = o),
            (t[112] = l),
            (t[113] = p),
            (t[114] = m),
            (t[115] = _),
            (t[116] = v),
            (t[117] = y),
            (t[118] = E),
            (t[119] = D),
            (t[120] = N),
            (t[121] = Oe))
          : (Oe = t[121]),
        t[122] !== A || t[123] !== D || t[124] !== j || t[125] !== P
          ? ((ke = P
              ? (0, Q.jsxs)(`div`, {
                  className: `flex w-full flex-col items-center gap-3`,
                  children: [
                    (0, Q.jsx)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: D,
                      children: (0, Q.jsx)(u, {
                        id: `electron.onboarding.login.otherMethods.openaiApiKey`,
                        defaultMessage: `OpenAI API Key`,
                        description: `Button label to open the existing OpenAI API key sign-in form`,
                      }),
                    }),
                    (0, Q.jsx)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: j,
                      children: (0, Q.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.open.welcomeV2`,
                        defaultMessage: `Use Amazon Bedrock`,
                        description: `Button label to set up Amazon Bedrock on desktop onboarding`,
                      }),
                    }),
                    (0, Q.jsx)(n, {
                      color: `ghostTertiary`,
                      onClick: A,
                      children: (0, Q.jsx)(u, {
                        id: `electron.onboarding.login.otherMethods.back`,
                        defaultMessage: `Back`,
                        description: `Button label to return from alternative sign-in methods to the main sign-in screen`,
                      }),
                    }),
                  ],
                })
              : null),
            (t[122] = A),
            (t[123] = D),
            (t[124] = j),
            (t[125] = P),
            (t[126] = ke))
          : (ke = t[126]),
        (Ae =
          !N && !P
            ? (0, Q.jsxs)(`div`, {
                className: `flex w-full flex-col items-center gap-3`,
                children: [
                  i &&
                    (e != null && e.length > 0
                      ? (0, Q.jsxs)(Q.Fragment, {
                          children: [
                            e.map((e) => (0, Q.jsx)(Rn, { profile: e, onChatGptSignIn: y }, e.email)),
                            (0, Q.jsxs)(`div`, {
                              className: `flex w-full items-center gap-4 py-2`,
                              "aria-hidden": `true`,
                              children: [
                                (0, Q.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                                (0, Q.jsx)(`span`, {
                                  className: `text-[12px] font-medium text-codex-description`,
                                  children: (0, Q.jsx)(u, {
                                    id: `electron.onboarding.login.browserSession.or`,
                                    defaultMessage: `OR`,
                                    description: `Divider label between the recognized ChatGPT browser account and other sign-in options`,
                                  }),
                                }),
                                (0, Q.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                              ],
                            }),
                            (0, Q.jsx)(`button`, {
                              className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                              type: `button`,
                              onClick: () => y(`other-account`),
                              children: (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.browserSession.otherAccount`,
                                defaultMessage: `Use another account`,
                                description: `Button label to sign in with a different ChatGPT account after a browser account was recognized`,
                              }),
                            }),
                          ],
                        })
                      : (0, Q.jsxs)(`button`, {
                          className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-text/80`,
                          type: `button`,
                          onClick: () => y(),
                          children: [
                            (0, Q.jsx)(O, { className: `size-6 shrink-0 text-primary-solid` }),
                            (0, Q.jsx)(u, {
                              id: `electron.onboarding.login.chatgpt.continueToSignIn`,
                              defaultMessage: `Continue to sign in`,
                              description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                            }),
                          ],
                        })),
                  i && se
                    ? (0, Q.jsxs)(Q.Fragment, {
                        children: [
                          (0, Q.jsxs)(`button`, {
                            className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                            type: `button`,
                            onClick: () => y(`google`),
                            children: [
                              (0, Q.jsx)(Pt, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                              (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.google.signIn`,
                                defaultMessage: `Continue with Google`,
                                description: `Button label for Google sign-in on desktop onboarding`,
                              }),
                            ],
                          }),
                          (0, Q.jsxs)(`button`, {
                            className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                            type: `button`,
                            onClick: () => y(`microsoft`),
                            children: [
                              (0, Q.jsx)(vt, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                              (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.microsoft.signIn`,
                                defaultMessage: `Continue with Microsoft`,
                                description: `Button label for Microsoft sign-in on desktop onboarding`,
                              }),
                            ],
                          }),
                        ],
                      })
                    : null,
                  r
                    ? (0, Q.jsx)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                        type: `button`,
                        onClick: h ? k : D,
                        children:
                          !h && (!i || _e)
                            ? (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.apikey.open.explicit.welcomeV2`,
                                defaultMessage: `Sign in with an API key`,
                                description: `Button label to open API key sign-in on v2 desktop onboarding`,
                              })
                            : (0, Q.jsx)(u, {
                                id: `electron.onboarding.login.apikey.open.welcomeV2`,
                                defaultMessage: `Sign in another way`,
                                description: `Button label to open another sign-in method on v2 desktop onboarding`,
                              }),
                      })
                    : null,
                  i
                    ? (0, Q.jsx)(`button`, {
                        className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default`,
                        type: `button`,
                        onClick: S,
                        children: (0, Q.jsx)(u, {
                          id: `electron.onboarding.login.signup.welcomeV2`,
                          defaultMessage: `Sign up`,
                          description: `Sign-up link on v2 desktop onboarding`,
                        }),
                      })
                    : null,
                ],
              })
            : null));
    }
    ((t[24] = r),
      (t[25] = i),
      (t[26] = de),
      (t[27] = o),
      (t[28] = K),
      (t[29] = Te),
      (t[30] = c),
      (t[31] = G),
      (t[32] = M),
      (t[33] = l),
      (t[34] = p),
      (t[35] = V),
      (t[36] = xe),
      (t[37] = we),
      (t[38] = Se),
      (t[39] = m),
      (t[40] = _),
      (t[41] = v),
      (t[42] = y),
      (t[43] = S),
      (t[44] = w),
      (t[45] = A),
      (t[46] = T),
      (t[47] = E),
      (t[48] = D),
      (t[49] = j),
      (t[50] = k),
      (t[51] = Ce?.length),
      (t[52] = h),
      (t[53] = fe),
      (t[54] = N),
      (t[55] = F),
      (t[56] = se),
      (t[57] = P),
      (t[58] = _e),
      (t[59] = Ee),
      (t[60] = De),
      (t[61] = Oe),
      (t[62] = ke),
      (t[63] = Ae),
      (t[64] = J),
      (t[65] = Y));
  } else ((Ee = t[59]), (De = t[60]), (Oe = t[61]), (ke = t[62]), (Ae = t[63]), (J = t[64]), (Y = t[65]));
  if (Y !== Symbol.for(`react.early_return_sentinel`)) return Y;
  let je;
  t[127] !== Ee || t[128] !== De || t[129] !== Oe || t[130] !== ke || t[131] !== Ae
    ? ((je = (0, Q.jsxs)(`div`, { className: Ee, children: [De, Oe, ke, Ae] })),
      (t[127] = Ee),
      (t[128] = De),
      (t[129] = Oe),
      (t[130] = ke),
      (t[131] = Ae),
      (t[132] = je))
    : (je = t[132]);
  let Me;
  return (
    t[133] !== J || t[134] !== je
      ? ((Me = (0, Q.jsx)(`div`, { className: J, children: je })), (t[133] = J), (t[134] = je), (t[135] = Me))
      : (Me = t[135]),
    Me
  );
}
function Rn(e) {
  let t = (0, zn.c)(39),
    { profile: r, onChatGptSignIn: i } = e,
    a = b(),
    o = Qe(r.avatarUrl),
    [s, c] = (0, Bn.useState)(null),
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g,
    _;
  t[0] !== a || t[1] !== r.email || t[2] !== r.name
    ? ((d = r.name?.trim() || null),
      (u = d ?? r.email),
      (l = n),
      (f = `w-full justify-start text-start`),
      (p = `outlineSurface`),
      (m = `large`),
      (h = `auth`),
      (g = `button`),
      (_ =
        d == null
          ? a.formatMessage(
              {
                id: `electron.onboarding.login.browserSession.continueAs`,
                defaultMessage: `Continue as {accountName}`,
                description: `Accessible label for a recognized ChatGPT browser account button on desktop onboarding. The accountName placeholder is the account email address.`,
              },
              { accountName: u },
            )
          : a.formatMessage(
              {
                id: `electron.onboarding.login.browserSession.continueAsWithEmail`,
                defaultMessage: `Continue as {accountName}, {email}`,
                description: `Accessible label for a recognized ChatGPT browser account button on desktop onboarding when the account has a display name. The accountName placeholder is the display name and the email placeholder distinguishes accounts that share that name.`,
              },
              { accountName: u, email: r.email },
            )),
      (t[0] = a),
      (t[1] = r.email),
      (t[2] = r.name),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _))
    : ((l = t[3]),
      (u = t[4]),
      (d = t[5]),
      (f = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]),
      (_ = t[11]));
  let v;
  t[12] !== i || t[13] !== r.email
    ? ((v = () => i(`signin`, r.email)), (t[12] = i), (t[13] = r.email), (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== u || t[16] !== s || t[17] !== r.email || t[18] !== o
    ? ((y =
        o != null && o !== s
          ? (0, Q.jsx)(`img`, {
              src: o,
              alt: ``,
              className: `size-10 shrink-0 rounded-full`,
              onError: () => {
                c(o);
              },
            })
          : (0, Q.jsx)(ht, { alt: ``, colorKey: r.email, name: u, size: `row`, src: null })),
      (t[15] = u),
      (t[16] = s),
      (t[17] = r.email),
      (t[18] = o),
      (t[19] = y))
    : (y = t[19]);
  let x;
  t[20] === u
    ? (x = t[21])
    : ((x = (0, Q.jsx)(`span`, {
        className: `block truncate text-[14px] leading-5 font-medium text-default`,
        children: u,
      })),
      (t[20] = u),
      (t[21] = x));
  let S;
  t[22] !== r.email || t[23] !== d
    ? ((S =
        d == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `block truncate text-[13px] leading-5 text-codex-description`,
              children: r.email,
            })),
      (t[22] = r.email),
      (t[23] = d),
      (t[24] = S))
    : (S = t[24]);
  let C;
  t[25] !== S || t[26] !== x
    ? ((C = (0, Q.jsxs)(`span`, { className: `min-w-0 flex-1`, children: [x, S] })),
      (t[25] = S),
      (t[26] = x),
      (t[27] = C))
    : (C = t[27]);
  let w;
  return (
    t[28] !== l ||
    t[29] !== f ||
    t[30] !== C ||
    t[31] !== p ||
    t[32] !== m ||
    t[33] !== h ||
    t[34] !== g ||
    t[35] !== _ ||
    t[36] !== v ||
    t[37] !== y
      ? ((w = (0, Q.jsxs)(l, {
          className: f,
          color: p,
          radius: m,
          size: h,
          type: g,
          "aria-label": _,
          onClick: v,
          children: [y, C],
        })),
        (t[28] = l),
        (t[29] = f),
        (t[30] = C),
        (t[31] = p),
        (t[32] = m),
        (t[33] = h),
        (t[34] = g),
        (t[35] = _),
        (t[36] = v),
        (t[37] = y),
        (t[38] = w))
      : (w = t[38]),
    w
  );
}
var zn, Bn, Q, Vn;
function Hn() {
  return (Hn = e(() => {
    ((zn = K()),
      T(),
      h(),
      (Bn = ae()),
      R(),
      ot(),
      le(),
      W(),
      v(),
      N(),
      Nt(),
      _t(),
      B(),
      ct(),
      V(),
      Ke(),
      tn(),
      Tt(),
      Et(),
      kn(),
      Ut(),
      Mn(),
      In(),
      (Q = q()),
      (Vn = `1072464827`));
  }))();
}
function Un(e) {
  let t = (0, qn.c)(126),
    { workspaceRecovery: n } = e,
    i = n !== void 0 && n,
    a = d(s),
    o = Ye(),
    p = c(),
    m = b(),
    h;
  t[0] === a
    ? (h = t[1])
    : ((h = (e) => {
        let t = a.get(ge);
        return t == null ? e : Se(e, t.pathname, t.search);
      }),
      (t[0] = a),
      (t[1] = h));
  let g = h,
    _ = te(),
    v = oe(Wt, I),
    y = v.status === `ready` && v.chatgpt,
    C = v.status === `ready` && v.api,
    T = x(He),
    E;
  t[2] === T
    ? (E = t[3])
    : ((E = T == null ? null : { hasPreviouslyCompletedOnboarding: T }), (t[2] = T), (t[3] = E));
  let O = E,
    k = We(),
    ee = $e(`1934304769`),
    M;
  t[4] !== m || t[5] !== a
    ? ((M = (e) => {
        a.get(j).warning(
          m.formatMessage(
            {
              id: `electron.onboarding.login.error`,
              defaultMessage: `Sign-in failed: {rawMessage}`,
              description: `Toast shown when sign-in fails on the desktop onboarding page`,
            },
            { rawMessage: e },
          ),
        );
      }),
      (t[4] = m),
      (t[5] = a),
      (t[6] = M))
    : (M = t[6]);
  let N = M,
    [P, F] = (0, Jn.useState)(null),
    R = oe(ce, I),
    z = x(ut),
    B = z == null ? R?.authUrl : z.authUrl,
    V = P != null || z != null,
    H = (0, Jn.useRef)(null),
    U;
  t[7] === a.node
    ? (U = t[8])
    : ((U = () => () => {
        qe.has(a.node) || H.current?.abort();
      }),
      (t[7] = a.node),
      (t[8] = U));
  let W;
  (t[9] === a ? (W = t[10]) : ((W = [a]), (t[9] = a), (t[10] = W)), (0, Jn.useEffect)(U, W));
  let G, K;
  (t[11] === y
    ? ((G = t[12]), (K = t[13]))
    : ((G = () => {
        y || H.current?.abort();
      }),
      (K = [y]),
      (t[11] = y),
      (t[12] = G),
      (t[13] = K)),
    (0, Jn.useEffect)(G, K));
  let [ie, q] = (0, Jn.useState)(!1),
    [ae, le] = (0, Jn.useState)(!1),
    [ue, de] = (0, Jn.useState)(!1),
    [fe, pe] = (0, Jn.useState)(``),
    [me, xe] = (0, Jn.useState)(null),
    Ce = me != null,
    Te,
    Ee;
  (t[14] === me
    ? ((Te = t[15]), (Ee = t[16]))
    : ((Ee = () => () => me?.abort()), (Te = [me]), (t[14] = me), (t[15] = Te), (t[16] = Ee)),
    (0, Jn.useEffect)(Ee, Te));
  let De, ke;
  (t[17] !== C || t[18] !== me
    ? ((De = () => {
        C || me?.abort();
      }),
      (ke = [C, me]),
      (t[17] = C),
      (t[18] = me),
      (t[19] = De),
      (t[20] = ke))
    : ((De = t[19]), (ke = t[20])),
    (0, Jn.useEffect)(De, ke));
  let [J, Y] = (0, Jn.useState)(null),
    Pe = x(ye),
    Fe = (0, Jn.useRef)(0),
    Ie = (0, Jn.useRef)(null),
    Le;
  t[21] === a
    ? (Le = t[22])
    : ((Le = () => {
        (a.set(Ge, !1), a.set(it, !0));
      }),
      (t[21] = a),
      (t[22] = Le));
  let Re = Le,
    Be;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = () => {
        (q(!1), xe(null), pe(``));
      }),
      (t[23] = Be))
    : (Be = t[23]);
  let Ke = Be,
    Je;
  t[24] !== v.api || t[25] !== v.status || t[26] !== O || t[27] !== a
    ? ((Je = () => {
        O != null && v.status === `ready` && v.api && (Oe(a, w, { method: `apikey`, ...O }), q(!0));
      }),
      (t[24] = v.api),
      (t[25] = v.status),
      (t[26] = O),
      (t[27] = a),
      (t[28] = Je))
    : (Je = t[28]);
  let Ze = Je,
    Qe;
  t[29] !== m || t[30] !== a
    ? ((Qe = async () => {
        let e = (Fe.current += 1);
        if (f.appServerLifecycle == null) {
          Y((e) =>
            e == null
              ? null
              : {
                  ...e,
                  isDetecting: !1,
                  errorMessage: m.formatMessage({
                    id: `electron.onboarding.login.bedrock.unavailable`,
                    defaultMessage: `Amazon Bedrock sign-in is unavailable on this host`,
                    description: `Error when the desktop host does not support Amazon Bedrock sign-in`,
                  }),
                },
          );
          return;
        }
        Y(Kn);
        try {
          let t = await be(a);
          Y((n) => (n == null || e !== Fe.current ? n : { ...n, detectedCredentials: t, isDetecting: !1 }));
        } catch (t) {
          let n = t;
          Y((t) =>
            t == null || e !== Fe.current
              ? t
              : A(n, `account/bedrock/discover`)
                ? { ...t, errorMessage: null, isDetecting: !1, supportsAwsCredentials: !1 }
                : { ...t, errorMessage: l(n), isDetecting: !1 },
          );
        }
      }),
      (t[29] = m),
      (t[30] = a),
      (t[31] = Qe))
    : (Qe = t[31]);
  let tt = Qe,
    nt;
  t[32] !== tt || t[33] !== a
    ? ((nt = () => {
        (Y({
          detectedCredentials: null,
          errorMessage: null,
          isDetecting: !0,
          isSubmitting: !1,
          supportsAwsCredentials: !0,
          supportsAccessKeys: D(a.get(et, I), `bedrockAccessKeysLogin`),
        }),
          tt());
      }),
      (t[32] = tt),
      (t[33] = a),
      (t[34] = nt))
    : (nt = t[34]);
  let rt = nt,
    at;
  t[35] !== g || t[36] !== p || t[37] !== a || t[38] !== Re || t[39] !== o || t[40] !== i
    ? ((at = async () => {
        if (Me()?.status === `pending`) {
          if ((ve({ status: `complete` }), i)) {
            (o(), await p(g(`/`), { replace: !0 }));
            return;
          }
          (Re(), a.set(Xe, !0), a.set(zt, void 0), o(), await p(g(`/welcome`), { replace: !0 }));
        }
      }),
      (t[35] = g),
      (t[36] = p),
      (t[37] = a),
      (t[38] = Re),
      (t[39] = o),
      (t[40] = i),
      (t[41] = at))
    : (at = t[41]);
  let ot = at,
    st = (0, Jn.useEffectEvent)(ot),
    ct;
  t[42] !== st || t[43] !== a
    ? ((ct = () =>
        a.watch((e) => {
          let { get: t } = e,
            n = t(ye);
          n?.status === `pending` && n.warning != null && t(Ne) && st();
        })),
      (t[42] = st),
      (t[43] = a),
      (t[44] = ct))
    : (ct = t[44]);
  let lt;
  (t[45] === a ? (lt = t[46]) : ((lt = [a]), (t[45] = a), (t[46] = lt)), (0, Jn.useEffect)(ct, lt));
  let dt;
  t[47] !== ot || t[48] !== a
    ? ((dt = async () => {
        let e = f.appServerLifecycle,
          t = a.get(ye);
        if (t?.status !== `pending` || t.isChecking || e == null) return;
        let n = { ...t, isChecking: !0 };
        ve(n);
        let r = await _e(e, t.region);
        if (Me() === n) {
          if (r == null) {
            await ot();
            return;
          }
          ve({ ...t, warning: r, isChecking: !1 });
        }
      }),
      (t[47] = ot),
      (t[48] = a),
      (t[49] = dt))
    : (dt = t[49]);
  let ft = dt,
    pt;
  t[50] !== C || t[51] !== ot || t[52] !== m || t[53] !== a
    ? ((pt = async (e) => {
        if (!C) return;
        let t = f.appServerLifecycle;
        if (t == null) {
          Y((e) =>
            e == null
              ? null
              : {
                  ...e,
                  errorMessage: m.formatMessage({
                    id: `electron.onboarding.login.bedrock.unavailable`,
                    defaultMessage: `Amazon Bedrock sign-in is unavailable on this host`,
                    description: `Error when the desktop host does not support Amazon Bedrock sign-in`,
                  }),
                },
          );
          return;
        }
        Y(Gn);
        let n = { status: `pending`, warning: null, region: e.region, isChecking: !0 };
        ve(n);
        try {
          let r = await Ae(a, t, e);
          if (Me() !== n) return;
          if (r != null && !a.get(Ne)) {
            ve({ status: `pending`, warning: r, region: e.region, isChecking: !1 });
            return;
          }
          await ot();
        } catch (t) {
          let r = t;
          if (Me() !== n) return;
          (ve(null),
            Y((t) => {
              if (t == null) return null;
              let n = l(r),
                i =
                  e.method === `profile` &&
                  n.startsWith(`failed to load credentials for AWS profile \`${e.profile.trim()}\`:`)
                    ? m.formatMessage(
                        {
                          id: `electron.onboarding.login.bedrock.profileCredentialsError`,
                          defaultMessage: `Couldn’t load credentials for AWS profile “{profile}”. Check your AWS sign-in and try again.`,
                          description: `Error when credentials cannot be loaded from the selected AWS profile during Amazon Bedrock sign-in. The profile placeholder is the user-provided AWS profile name.`,
                        },
                        { profile: e.profile.trim() },
                      )
                    : n;
              return { ...t, errorMessage: i, isSubmitting: !1 };
            }));
        }
      }),
      (t[50] = C),
      (t[51] = ot),
      (t[52] = m),
      (t[53] = a),
      (t[54] = pt))
    : (pt = t[54]);
  let mt = pt,
    ht;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ht = () => {
        de(!1);
      }),
      (t[55] = ht))
    : (ht = t[55]);
  let _t = ht,
    vt;
  if (t[56] === Symbol.for(`react.memo_cache_sentinel`)) {
    let e = () => {
      Ie.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((Ie.current = new window.AudioContext()),
            Ie.current.state === `suspended` && Ie.current.resume())));
    };
    ((vt = () => {
      (e(), de(!0));
    }),
      (t[56] = vt));
  } else vt = t[56];
  let bt = vt,
    St;
  t[57] !== B || t[58] !== m || t[59] !== a
    ? ((St = async () => {
        let e = B;
        e != null &&
          (await re(e)) &&
          a
            .get(j)
            .success(
              m.formatMessage({
                id: `electron.onboarding.login.linkCopied`,
                defaultMessage: `Sign-in link copied`,
                description: `Toast confirming that the active browser sign-in link was copied so the user can paste it into another browser`,
              }),
            );
      }),
      (t[57] = B),
      (t[58] = m),
      (t[59] = a),
      (t[60] = St))
    : (St = t[60]);
  let Ct = St,
    wt;
  t[61] !== g ||
  t[62] !== v.chatgpt ||
  t[63] !== v.status ||
  t[64] !== O ||
  t[65] !== p ||
  t[66] !== _ ||
  t[67] !== a ||
  t[68] !== N ||
  t[69] !== Re ||
  t[70] !== k ||
  t[71] !== o ||
  t[72] !== i
    ? ((wt = async (e, t) => {
        let n = e === void 0 ? `signin` : e;
        if (qe.has(a.node)) {
          qe.get(a.node)?.cancel();
          return;
        }
        if (H.current != null) {
          (H.current.abort(), (H.current = null), F(null));
          return;
        }
        if (O == null || v.status !== `ready` || !v.chatgpt) return;
        let s = n === `signin` || n === `signup` || n === `other-account` ? `chatgpt` : n;
        Oe(a, w, { method: s, ...O });
        let c = D(a.get(et, `local`), `gatewayOAuth`) ? je() : null,
          u = new AbortController();
        ((H.current = u), F(u));
        let d = !1,
          m = !1;
        await (async () => {
          try {
            let { useDesktopAuth: e, useStreamlinedLoginUx: m } = Zt(se(k, $t)),
              {
                authUrl: h,
                completion: v,
                setBrowserUrl: y,
              } = await Ue({
                scope: a,
                signal: u.signal,
                useHostedLoginSuccessPage: !0,
                useStreamlinedLogin: m,
              });
            if (h && !u.signal.aborted) {
              let r = e && !i ? (await f.appInfo.get()).chatGptDesktopAuthOrigin : void 0;
              if (u.signal.aborted) return;
              let o = yn(h, n),
                s = jt({
                  authUrl: o,
                  codexAppVersion: kt(a),
                  desktopAuthOrigin: r,
                  includeCodexOriginStableId: !0,
                  loginHint: t,
                  useDesktopAuth: e && !i,
                  useStreamlinedLoginUx: m,
                });
              y(s) && Ve({ href: s, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
            }
            let b = await v;
            if (u.signal.aborted) return;
            if (b.success) {
              d = !0;
              let e = { method: s, ...O, ...xt(b.onboardingEntrypoint) };
              if (
                (c == null ? Oe(a, r, e) : c(e),
                _.removeQueries({ queryKey: L(`account-info`), exact: !0 }),
                i)
              ) {
                (o(), await p(g(`/`), { replace: !0 }));
                return;
              }
              (Re(),
                a.set(Xe, !0),
                b.onboardingEntrypoint != null && yt(a, b.onboardingEntrypoint),
                a.set(zt, b.onboardingEntrypoint),
                o(),
                p(g(`/welcome`), { replace: !0 }));
            } else (Oe(a, S, { method: s, errorKind: bn(b.error), ...O }), N(l(b.error ?? `Unknown error`)));
          } catch (e) {
            let t = e;
            if (t instanceof Error && t.name === `AbortError`) {
              ((m = !0), Oe(a, S, { method: s, errorKind: `abort`, ...O }));
              return;
            }
            (Oe(a, S, { method: s, errorKind: bn(t), ...O }), N(l(t)));
          }
        })().finally(() => {
          let e = [`chatgpt-browser-session-profiles`, !0];
          (!d &&
            !m &&
            !u.signal.aborted &&
            (H.current == null || H.current === u) &&
            _.getQueryData(e)?.length === 0 &&
            _.resetQueries({ queryKey: e, exact: !0 }),
            H.current === u && (H.current = null),
            F((e) => (e === u ? null : e)));
        });
      }),
      (t[61] = g),
      (t[62] = v.chatgpt),
      (t[63] = v.status),
      (t[64] = O),
      (t[65] = p),
      (t[66] = _),
      (t[67] = a),
      (t[68] = N),
      (t[69] = Re),
      (t[70] = k),
      (t[71] = o),
      (t[72] = i),
      (t[73] = wt))
    : (wt = t[73]);
  let Tt = wt,
    Et;
  t[74] !== fe ||
  t[75] !== g ||
  t[76] !== Ce ||
  t[77] !== v.api ||
  t[78] !== v.status ||
  t[79] !== O ||
  t[80] !== p ||
  t[81] !== a ||
  t[82] !== N ||
  t[83] !== Re ||
  t[84] !== o ||
  t[85] !== i
    ? ((Et = async () => {
        let e = fe.trim();
        if (!e || Ce || O == null || v.status !== `ready` || !v.api) return;
        let t = new AbortController();
        (xe(t),
          await (async () => {
            try {
              if ((await ze(a, I).loginWithApiKey(e), t.signal.aborted)) return;
              if ((Oe(a, r, { method: `apikey`, ...O }), i)) {
                (o(), await p(g(`/`), { replace: !0 }));
                return;
              }
              (Re(), a.set(Xe, !0), a.set(zt, void 0), o(), p(g(`/welcome`), { replace: !0 }));
            } catch (e) {
              let n = e;
              if (t.signal.aborted) return;
              (Oe(a, S, { method: `apikey`, errorKind: bn(n), ...O }), N(l(n)));
            }
          })().finally(() => {
            xe((e) => (e === t ? null : e));
          }));
      }),
      (t[74] = fe),
      (t[75] = g),
      (t[76] = Ce),
      (t[77] = v.api),
      (t[78] = v.status),
      (t[79] = O),
      (t[80] = p),
      (t[81] = a),
      (t[82] = N),
      (t[83] = Re),
      (t[84] = o),
      (t[85] = i),
      (t[86] = Et))
    : (Et = t[86]);
  let Dt = Et;
  if (Pe?.status === `pending`) {
    let e;
    return (
      t[87] !== Pe.isChecking || t[88] !== Pe.warning || t[89] !== ot || t[90] !== ft || t[91] !== a
        ? ((e = (0, $.jsx)(we, {
            children:
              Pe.warning == null
                ? (0, $.jsxs)(`div`, {
                    className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description`,
                    children: [
                      (0, $.jsx)(ne, { className: `h-4 w-4 text-default` }),
                      (0, $.jsx)(u, {
                        id: `electron.onboarding.login.bedrock.finishing`,
                        defaultMessage: `Finishing Amazon Bedrock sign-in…`,
                        description: `Loading message while Bedrock sign-in saves credentials, restarts the app server, and checks GovCloud configuration`,
                      }),
                    ],
                  })
                : (0, $.jsx)(gt, {
                    unverified: Pe.warning === `unverified`,
                    isChecking: Pe.isChecking,
                    onRetry: ft,
                    onContinue: async () => {
                      (a.set(Ne, !0), await ot());
                    },
                  }),
          })),
          (t[87] = Pe.isChecking),
          (t[88] = Pe.warning),
          (t[89] = ot),
          (t[90] = ft),
          (t[91] = a),
          (t[92] = e))
        : (e = t[92]),
      e
    );
  }
  if (z != null && z.stage !== `chatgpt`) {
    let e;
    return (
      t[93] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(he, {})), (t[93] = e))
        : (e = t[93]),
      e
    );
  }
  if (v.status !== `ready` || (!v.api && !v.chatgpt)) {
    let e;
    return (
      t[94] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(we, { children: (0, $.jsx)(Gt, { hostId: I }) })), (t[94] = e))
        : (e = t[94]),
      e
    );
  }
  if (O == null) {
    let e;
    return (
      t[95] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(we, {
            children: (0, $.jsxs)(`div`, {
              className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description`,
              children: [
                (0, $.jsx)(ne, { className: `h-4 w-4 text-default` }),
                (0, $.jsx)(u, {
                  id: `electron.onboarding.login.loading`,
                  defaultMessage: `Loading…`,
                  description: `Loading state while the desktop login page prepares the sign-in experience`,
                }),
              ],
            }),
          })),
          (t[95] = e))
        : (e = t[95]),
      e
    );
  }
  if (C && J != null) {
    let e, n;
    t[96] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          ((Fe.current += 1), Y(null));
        }),
        (n = () => {
          Y(Wn);
        }),
        (t[96] = e),
        (t[97] = n))
      : ((e = t[96]), (n = t[97]));
    let r;
    return (
      t[98] !== J.detectedCredentials ||
      t[99] !== J.errorMessage ||
      t[100] !== J.isDetecting ||
      t[101] !== J.isSubmitting ||
      t[102] !== J.supportsAccessKeys ||
      t[103] !== J.supportsAwsCredentials ||
      t[104] !== tt ||
      t[105] !== mt
        ? ((r = (0, $.jsx)(we, {
            fullBleed: !0,
            children: (0, $.jsx)(pn, {
              detectedCredentials: J.detectedCredentials,
              errorMessage: J.errorMessage,
              isDetecting: J.isDetecting,
              isSubmitting: J.isSubmitting,
              supportsAwsCredentials: J.supportsAwsCredentials,
              supportsAccessKeys: J.supportsAccessKeys,
              onBack: e,
              onClearError: n,
              onDetectCredentials: tt,
              onSubmit: mt,
            }),
          })),
          (t[98] = J.detectedCredentials),
          (t[99] = J.errorMessage),
          (t[100] = J.isDetecting),
          (t[101] = J.isSubmitting),
          (t[102] = J.supportsAccessKeys),
          (t[103] = J.supportsAwsCredentials),
          (t[104] = tt),
          (t[105] = mt),
          (t[106] = r))
        : (r = t[106]),
      r
    );
  }
  let Ot;
  t[107] !== fe ||
  t[108] !== B ||
  t[109] !== Dt ||
  t[110] !== Tt ||
  t[111] !== Ct ||
  t[112] !== ie ||
  t[113] !== Ce ||
  t[114] !== V ||
  t[115] !== ae ||
  t[116] !== ue ||
  t[117] !== v.api ||
  t[118] !== v.chatgpt ||
  t[119] !== ee ||
  t[120] !== Ze ||
  t[121] !== rt
    ? ((Ot = ue
        ? (0, $.jsx)(`div`, {
            className: `flex h-full w-full`,
            children: (0, $.jsx)(nn, { onExit: _t, audioContextRef: Ie }),
          })
        : (0, $.jsx)(Ln, {
            allowApiKey: v.api,
            allowChatGpt: v.chatgpt,
            apiKeyHelpVariant: void 0,
            apiKeyValue: fe,
            canCopySignInLink: B != null,
            isApiKeyEntryVisible: ie,
            isOtherSignInMethodsVisible: ae,
            isApiKeySignInPending: Ce,
            isChatGptSignInPending: V,
            showAmazonBedrockSignIn: ee,
            onApiKeySubmit: Dt,
            onApiKeyValueChange: pe,
            onChatGptSignIn: Tt,
            onChatGptSignUp: () => Tt(`signup`),
            onCopySignInLink: Ct,
            onPlaySnake: bt,
            onResetApiKeyEntry: Ke,
            onShowApiKeyEntry: Ze,
            onShowOtherSignInMethods: () => le(!0),
            onHideOtherSignInMethods: () => le(!1),
            onShowBedrockSetup: rt,
          })),
      (t[107] = fe),
      (t[108] = B),
      (t[109] = Dt),
      (t[110] = Tt),
      (t[111] = Ct),
      (t[112] = ie),
      (t[113] = Ce),
      (t[114] = V),
      (t[115] = ae),
      (t[116] = ue),
      (t[117] = v.api),
      (t[118] = v.chatgpt),
      (t[119] = ee),
      (t[120] = Ze),
      (t[121] = rt),
      (t[122] = Ot))
    : (Ot = t[122]);
  let At;
  return (
    t[123] !== ue || t[124] !== Ot
      ? ((At = (0, $.jsx)(we, { fullBleed: !0, hideHeader: ue, children: Ot })),
        (t[123] = ue),
        (t[124] = Ot),
        (t[125] = At))
      : (At = t[125]),
    At
  );
}
function Wn(e) {
  return e?.errorMessage == null ? e : { ...e, errorMessage: null };
}
function Gn(e) {
  return e == null ? null : { ...e, errorMessage: null, isSubmitting: !0 };
}
function Kn(e) {
  return e == null ? null : { ...e, errorMessage: null, isDetecting: !0 };
}
var qn, Jn, $;
function Yn() {
  return (Yn = e(() => {
    ((qn = K()),
      g(),
      G(),
      h(),
      H(),
      (Jn = ae()),
      R(),
      E(),
      Le(),
      st(),
      Re(),
      tt(),
      ke(),
      Je(),
      xe(),
      N(),
      z(),
      mt(),
      Bt(),
      lt(),
      Be(),
      Ie(),
      V(),
      ie(),
      at(),
      At(),
      Ke(),
      tn(),
      P(),
      U(),
      bt(),
      Te(),
      fn(),
      Ce(),
      vn(),
      Fe(),
      ue(),
      Pe(),
      pe(),
      Vt(),
      Ht(),
      wn(),
      Hn(),
      ($ = q()));
  }))();
}
function Xn() {
  let e = (0, Zn.c)(6),
    [t] = m();
  {
    let n;
    e[1] === t ? (n = e[2]) : ((n = t.get(`workspaceRecovery`)), (e[1] = t), (e[2] = n));
    let r = n === `true`,
      i;
    return (
      e[3] === r ? (i = e[4]) : ((i = (0, Qn.jsx)(Un, { workspaceRecovery: r })), (e[3] = r), (e[4] = i)),
      i
    );
  }
}
var Zn, Qn;
function $n() {
  return ($n = e(() => {
    ((Zn = K()), E(), Mt(), Xt(), Yn(), (Qn = q()));
  }))();
}
$n();
export { Xn as LoginRoute };
//# sourceMappingURL=login-route-88e0e91b504f.js.map
