import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $7 as r,
  $St as i,
  $st as a,
  Apt as o,
  FB as s,
  FBt as c,
  GH as l,
  Ik as u,
  Jj as d,
  LNt as f,
  Lst as p,
  MNt as m,
  NNt as h,
  NO as g,
  NSt as _,
  Oit as v,
  PBt as y,
  PO as b,
  Qst as x,
  Rrt as S,
  Rst as C,
  TY as w,
  USt as T,
  Vrt as E,
  X7 as D,
  XOt as O,
  XSt as k,
  Y3 as A,
  Yj as j,
  Yst as M,
  Z3 as N,
  Z7 as P,
  ZSt as F,
  Zx as I,
  ast as L,
  b_t as R,
  ck as z,
  dO as B,
  e6 as V,
  eB as ee,
  iCt as te,
  ist as ne,
  jit as re,
  kH as ie,
  lO as H,
  nCt as ae,
  okt as oe,
  qrt as se,
  rk as ce,
  sct as le,
  tB as ue,
  tk as de,
  tkt as U,
  tpt as fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as pe,
  $cr as me,
  $ct as he,
  BSt as ge,
  CRn as _e,
  Chr as ve,
  Cjr as ye,
  Djr as be,
  Dkn as xe,
  Ejr as Se,
  FBr as Ce,
  FSt as we,
  Fet as Te,
  GLn as Ee,
  Gct as De,
  HBr as Oe,
  IBr as ke,
  ISt as Ae,
  Iet as W,
  Ixr as G,
  Jct as je,
  KBr as K,
  Kct as Me,
  LSt as Ne,
  Okn as Pe,
  PSt as q,
  Qct as Fe,
  RSt as Ie,
  Rct as Le,
  UBr as Re,
  VSt as ze,
  Wct as Be,
  Xct as Ve,
  Ycr as He,
  Yct as Ue,
  ZLn as We,
  Zct as Ge,
  bN as Ke,
  bRn as qe,
  bjr as Je,
  bkn as Ye,
  elt as Xe,
  gSt as Ze,
  hSt as Qe,
  hmr as $e,
  kkn as et,
  nlt as tt,
  olt as nt,
  omr as rt,
  oon as it,
  pmr as at,
  qLn as ot,
  qct as st,
  rlt as ct,
  rmr as lt,
  slt as ut,
  son as dt,
  tRn as ft,
  tlt as pt,
  whr as mt,
  wkn as ht,
  xMr as gt,
  xjr as _t,
  yMr as vt,
  yN as yt,
  zct as bt,
} from "./app-initial-ad16eaadf81f.js";
import { Fp as xt, Pp as St } from "./app-primary-3e00728c2a4c.js";
import { a as Ct, n as wt, t as Tt } from "./onboarding-analytics-d36746a40455.js";
import {
  a as Et,
  i as Dt,
  n as Ot,
  o as kt,
  r as At,
  s as jt,
  t as Mt,
} from "./browser-session-queries-253985fc5519.js";
import { n as Nt, r as Pt, t as Ft } from "./chatgpt-desktop-auth-url-3f7398fa25bc.js";
import { n as It } from "./login-page-484bc3f7ffae.js";
import { n as Lt, t as Rt } from "./google-logo-79cb9d2ee553.js";
import { i as zt, n as Bt, r as Vt, t as Ht } from "./use-ascii-engine-6da2878ebfa7.js";
import { n as Ut, t as Wt } from "./onboarding-entrypoint-5c5039cf7620.js";
import {
  a as Gt,
  i as Kt,
  n as qt,
  o as Jt,
  r as Yt,
  t as Xt,
} from "./onboarding-login-content-f7bde5c8a665.js";
var Zt, Qt, $t;
function en() {
  return (en = e(() => {
    ((Zt = y()),
      F(),
      le(),
      (Qt = t(c(), 1)),
      ke(),
      q(),
      Me(),
      ze(),
      lt(),
      $e(),
      N(),
      qe(),
      ft(),
      pe(),
      E(),
      G(),
      at(),
      u(),
      I(),
      a(),
      K(),
      Pt(),
      b(),
      zt(),
      Ht(),
      ($t = f()),
      Qt.memo(function () {
        let e = (0, Zt.c)(5),
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
        let { columns: n, rows: r, lines: i } = Bt(t),
          a;
        return (
          e[1] !== n || e[2] !== i || e[3] !== r
            ? ((a = (0, $t.jsx)(Vt, { lines: i, columns: n, rows: r, autoCover: !0 })),
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
function tn(e) {
  let t = e.get(`enabled`, !1);
  return {
    useDesktopAuth: e.get(`use_desktop_auth`, t),
    useStreamlinedLoginUx: e.get(`use_streamlined_login_ux`, t),
  };
}
function nn(e) {
  return e;
}
var rn, an;
function on() {
  return (on = e(() => {
    ((rn = `3446609779`), (an = `1561420571`));
  }))();
}
function sn(e) {
  let t = (0, cn.c)(22),
    { onExit: n, audioContextRef: r } = e,
    i = (0, J.useRef)(null),
    a = (0, J.useRef)(null),
    o = (0, J.useRef)(null),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = []), (t[0] = s)) : (s = t[0]);
  let c = (0, J.useRef)(s),
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { x: 0, y: 0 }), (t[1] = l)) : (l = t[1]);
  let u = (0, J.useRef)(l),
    d = (0, J.useRef)(`right`),
    f = (0, J.useRef)(`right`),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { columns: un, rows: un, cellSize: dn, width: 216, height: 216 }), (t[2] = p))
    : (p = t[2]);
  let m = (0, J.useRef)(p),
    h = (0, J.useRef)(null),
    g = (0, J.useEffectEvent)(n),
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
  let v = (0, J.useEffectEvent)(_),
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
  let O = D,
    k = (0, J.useEffectEvent)(O),
    A;
  if (t[10] === Symbol.for(`react.memo_cache_sentinel`)) {
    let e = () => {
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
    };
    ((A = () => {
      if (a.current == null) return;
      let t = Math.max(1, a.current.clientWidth),
        n = Math.max(1, a.current.clientHeight);
      if (t === m.current.width && n === m.current.height && c.current.length > 0) return;
      let r = Math.min(t, n),
        i = r / Math.max(un, Math.floor(r / dn)),
        o = Math.max(un, Math.floor(t / i)),
        s = Math.max(un, Math.floor(n / i));
      ((m.current = { columns: o, rows: s, cellSize: i, width: t, height: n }), e());
    }),
      (t[10] = A));
  } else A = t[10];
  let M = A,
    N = (0, J.useEffectEvent)(M),
    P = B(M),
    F;
  t[11] !== k || t[12] !== g || t[13] !== v || t[14] !== N
    ? ((F = () => {
        N();
        let e = (e) => {
          let t = null;
          (e.key === `ArrowUp` || e.key === `w` || e.key === `W`
            ? (t = `up`)
            : e.key === `ArrowDown` || e.key === `s` || e.key === `S`
              ? (t = `down`)
              : e.key === `ArrowLeft` || e.key === `a` || e.key === `A`
                ? (t = `left`)
                : (e.key === `ArrowRight` || e.key === `d` || e.key === `D`) && (t = `right`),
            t != null && (e.preventDefault(), mn[d.current] !== t && (f.current = t)));
        };
        return (
          window.addEventListener(`keydown`, e),
          (o.current = window.setInterval(() => {
            let e = c.current,
              t = e[0],
              n = f.current,
              r = pn[n],
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
            ((c.current = o), (d.current = n), a && ((u.current = E(o)), v(660, 120, `square`)), k());
          }, fn)),
          () => {
            (b(), window.removeEventListener(`keydown`, e));
          }
        );
      }),
      (t[11] = k),
      (t[12] = g),
      (t[13] = v),
      (t[14] = N),
      (t[15] = F))
    : (F = t[15]);
  let I;
  (t[16] === Symbol.for(`react.memo_cache_sentinel`) ? ((I = []), (t[16] = I)) : (I = t[16]),
    (0, J.useEffect)(F, I));
  let L;
  t[17] === P ? (L = t[18]) : ((L = j(a, P)), (t[17] = P), (t[18] = L));
  let R;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, ln.jsx)(`canvas`, { className: `h-full w-full text-default`, ref: i })), (t[19] = R))
    : (R = t[19]);
  let z;
  return (
    t[20] === L
      ? (z = t[21])
      : ((z = (0, ln.jsx)(`div`, { ref: L, className: `h-full w-full`, children: R })),
        (t[20] = L),
        (t[21] = z)),
    z
  );
}
var cn, J, ln, un, dn, fn, pn, mn;
function hn() {
  return (hn = e(() => {
    ((cn = y()),
      (J = c()),
      H(),
      d(),
      (ln = f()),
      (un = 12),
      (dn = 18),
      (fn = 120),
      (pn = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } }),
      (mn = { up: `down`, down: `up`, left: `right`, right: `left` }));
  }))();
}
function gn(e) {
  let t = (0, yn.c)(90),
    {
      detectedCredentials: n,
      supportsAwsCredentials: r,
      supportsAccessKeys: i,
      isDetecting: a,
      isSubmitting: o,
      errorMessage: s,
      onBack: c,
      onClearError: l,
      onDetectCredentials: u,
      onSubmit: d,
    } = e,
    f = (0, bn.useId)(),
    p = (0, bn.useId)(),
    [m, h] = (0, bn.useState)(null),
    [g, _] = (0, bn.useState)(!1),
    [v, y] = (0, bn.useState)(``),
    [b, x] = (0, bn.useState)(``),
    [S, C] = (0, bn.useState)(``),
    [w, T] = (0, bn.useState)(``),
    [E, D] = (0, bn.useState)(``),
    [O, k] = (0, bn.useState)(``),
    j = r ? m : `apiKey`,
    M = r && a,
    N = n?.activeProfile ?? `default`,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    ee,
    te,
    ne;
  if (
    t[0] !== S ||
    t[1] !== O ||
    t[2] !== n ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== s ||
    t[6] !== M ||
    t[7] !== o ||
    t[8] !== j ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== N ||
    t[14] !== v ||
    t[15] !== b ||
    t[16] !== w ||
    t[17] !== E ||
    t[18] !== g ||
    t[19] !== r
  ) {
    F = n?.profiles.slice().sort((e, t) => Number(t.name === N) - Number(e.name === N));
    let e =
      F?.find((e) => {
        let { name: t } = e;
        return t === v;
      }) ?? F?.[0];
    P = (F != null && F.length > 0) || n?.environmentCredentialsAvailable === !0;
    let i;
    (t[31] === l
      ? (i = t[32])
      : ((i = (e) => {
          (l(), h(e));
        }),
        (t[31] = l),
        (t[32] = i)),
      (I = i),
      (ne = `flex h-full w-full justify-center overflow-y-auto bg-surface px-6 py-12 text-default`),
      (ee = `my-auto flex w-[340px] max-w-full shrink-0 flex-col items-center gap-8`));
    let a;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Y.jsx)(Qe, { className: `shrink-0` })), (t[33] = a))
      : (a = t[33]),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((te = (0, Y.jsxs)(`div`, {
            className: `flex w-full flex-col items-center gap-4 select-none`,
            children: [
              a,
              (0, Y.jsx)(`h1`, {
                className: `w-[316px] text-center text-[28px] leading-9 font-normal text-default`,
                children: (0, Y.jsx)(U, {
                  id: `electron.onboarding.login.bedrock.title`,
                  defaultMessage: `Set up Amazon Bedrock`,
                  description: `Title for Amazon Bedrock setup on desktop onboarding`,
                }),
              }),
            ],
          })),
          (t[34] = te))
        : (te = t[34]),
      (L = `flex w-full flex-col gap-3`),
      t[35] === s
        ? (R = t[36])
        : ((R =
            s == null
              ? null
              : (0, Y.jsx)(`p`, {
                  className: `text-center text-[14px] leading-5 font-normal text-codex-description`,
                  role: `alert`,
                  children: s,
                })),
          (t[35] = s),
          (t[36] = R)),
      t[37] === M
        ? (z = t[38])
        : ((z = M
            ? (0, Y.jsx)(`p`, {
                className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                children: (0, Y.jsx)(U, {
                  id: `electron.onboarding.login.bedrock.detecting`,
                  defaultMessage: `Checking for AWS credentials…`,
                  description: `Loading message while desktop onboarding checks for AWS credentials`,
                }),
              })
            : null),
          (t[37] = M),
          (t[38] = z)),
      t[39] !== S ||
      t[40] !== O ||
      t[41] !== P ||
      t[42] !== M ||
      t[43] !== o ||
      t[44] !== j ||
      t[45] !== c ||
      t[46] !== l ||
      t[47] !== u ||
      t[48] !== d ||
      t[49] !== v ||
      t[50] !== b ||
      t[51] !== w ||
      t[52] !== E ||
      t[53] !== I ||
      t[54] !== r
        ? ((B =
            !M && j != null
              ? (0, Y.jsxs)(`form`, {
                  className: `flex w-full flex-col gap-6`,
                  onChange: l,
                  onSubmit: (e) => {
                    e.preventDefault();
                    bb77: switch (j) {
                      case `profile`:
                        d({ method: j, profile: v.trim(), region: b.trim() });
                        break bb77;
                      case `accessKeys`:
                        d({
                          method: j,
                          accessKeyId: S,
                          secretAccessKey: w,
                          sessionToken: E.trim().length === 0 ? null : E,
                          region: b.trim(),
                        });
                        break bb77;
                      case `environment`:
                        d({ method: j, region: b.trim() });
                        break bb77;
                      case `apiKey`:
                        d({ method: j, apiKey: O, region: b.trim() });
                    }
                  },
                  children: [
                    j === `profile`
                      ? (0, Y.jsx)(vn, {
                          autoFocus: !0,
                          value: v,
                          onChange: y,
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.profile.label`,
                            defaultMessage: `AWS profile`,
                            description: `Label for the AWS profile field in Bedrock onboarding`,
                          }),
                        })
                      : null,
                    j === `accessKeys`
                      ? (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(vn, {
                              autoFocus: !0,
                              value: S,
                              onChange: C,
                              children: (0, Y.jsx)(U, {
                                id: `electron.onboarding.login.bedrock.accessKeyId.label`,
                                defaultMessage: `AWS access key ID`,
                                description: `Label for the AWS access key ID field in Bedrock onboarding`,
                              }),
                            }),
                            (0, Y.jsx)(vn, {
                              type: `password`,
                              value: w,
                              onChange: T,
                              children: (0, Y.jsx)(U, {
                                id: `electron.onboarding.login.bedrock.secretAccessKey.label`,
                                defaultMessage: `AWS secret access key`,
                                description: `Label for the masked AWS secret access key field in Bedrock onboarding`,
                              }),
                            }),
                            (0, Y.jsx)(vn, {
                              type: `password`,
                              required: !1,
                              value: E,
                              onChange: D,
                              children: (0, Y.jsx)(U, {
                                id: `electron.onboarding.login.bedrock.sessionToken.label`,
                                defaultMessage: `AWS session token (optional)`,
                                description: `Label for the optional AWS session token field in Bedrock onboarding`,
                              }),
                            }),
                          ],
                        })
                      : null,
                    j === `environment`
                      ? (0, Y.jsx)(`p`, {
                          className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.environment.instructions`,
                            defaultMessage: `AWS credentials detected. Enter your AWS Region to continue.`,
                            description: `Instructions for using environment credentials in Bedrock onboarding`,
                          }),
                        })
                      : null,
                    j === `apiKey`
                      ? (0, Y.jsx)(vn, {
                          autoFocus: !0,
                          type: `password`,
                          value: O,
                          onChange: k,
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.apiKey.label`,
                            defaultMessage: `Bedrock API key`,
                            description: `Label for the masked Bedrock API key field in desktop onboarding`,
                          }),
                        })
                      : null,
                    (0, Y.jsx)(vn, {
                      autoFocus: j === `environment`,
                      value: b,
                      onChange: x,
                      help: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.region.example`,
                        defaultMessage: `For example, us-east-2`,
                        description: `Example below the AWS region field in Bedrock onboarding. Keep the region identifier us-east-2 untranslated.`,
                      }),
                      children: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.region.label`,
                        defaultMessage: `AWS region`,
                        description: `Label for the AWS region input in Amazon Bedrock onboarding`,
                      }),
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `flex w-full flex-col gap-3`,
                      children: [
                        (0, Y.jsx)(A, {
                          className: `w-full justify-center`,
                          size: `large`,
                          type: `submit`,
                          disabled:
                            o ||
                            b.trim().length === 0 ||
                            (j === `profile` && v.trim().length === 0) ||
                            (j === `accessKeys` && (S.trim().length === 0 || w.trim().length === 0)) ||
                            (j === `apiKey` && O.trim().length === 0),
                          loading: o,
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.continue`,
                            defaultMessage: `Continue`,
                            description: `Continue button label for Amazon Bedrock sign-in`,
                          }),
                        }),
                        j === `environment`
                          ? (0, Y.jsx)(A, {
                              className: `w-full justify-center`,
                              color: `secondary`,
                              size: `large`,
                              type: `button`,
                              disabled: o,
                              onClick: () => {
                                (I(null), _(!1), u());
                              },
                              children: (0, Y.jsx)(U, {
                                id: `electron.onboarding.login.bedrock.environment.retry`,
                                defaultMessage: `Check for credentials again`,
                                description: `Button label to check for AWS environment credentials again`,
                              }),
                            })
                          : null,
                        (0, Y.jsx)(A, {
                          className: `w-full justify-center`,
                          color: `secondary`,
                          size: `large`,
                          type: `button`,
                          disabled: o,
                          onClick: () => {
                            if (!r) {
                              c();
                              return;
                            }
                            (I(null), _(P));
                          },
                          children: r
                            ? (0, Y.jsx)(U, {
                                id: `electron.onboarding.login.bedrock.chooseAnotherMethod`,
                                defaultMessage: `Choose another sign-in method`,
                                description: `Button label to return to Amazon Bedrock sign-in methods`,
                              })
                            : (0, Y.jsx)(U, {
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
          (t[39] = S),
          (t[40] = O),
          (t[41] = P),
          (t[42] = M),
          (t[43] = o),
          (t[44] = j),
          (t[45] = c),
          (t[46] = l),
          (t[47] = u),
          (t[48] = d),
          (t[49] = v),
          (t[50] = b),
          (t[51] = w),
          (t[52] = E),
          (t[53] = I),
          (t[54] = r),
          (t[55] = B))
        : (B = t[55]),
      (V =
        !M && j == null && P && !g
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                F != null && e != null
                  ? (0, Y.jsxs)(`div`, {
                      className: `flex w-full flex-col gap-2`,
                      children: [
                        (0, Y.jsx)(`p`, {
                          id: f,
                          className: `text-sm font-normal text-default select-none`,
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.profiles.detected`,
                            defaultMessage: `AWS profile`,
                            description: `Label for the AWS profile selector in Amazon Bedrock onboarding`,
                          }),
                        }),
                        (0, Y.jsx)(de, {
                          contentWidth: `panel`,
                          disabled: o,
                          triggerButton: (0, Y.jsxs)(A, {
                            className: `w-full justify-between`,
                            "aria-labelledby": `${f} ${p}`,
                            color: `outlineSurface`,
                            size: `large`,
                            disabled: o,
                            children: [
                              (0, Y.jsx)(`span`, { id: p, className: `truncate`, children: e.name }),
                              (0, Y.jsx)(ie, { className: `text-secondary` }),
                            ],
                          }),
                          children: (0, Y.jsx)(ce.RadioGroup, {
                            value: e.name,
                            onValueChange: (e) => {
                              (l(), y(e));
                            },
                            children: F.map(_n),
                          }),
                        }),
                        (0, Y.jsx)(A, {
                          className: `mt-4 w-full justify-center`,
                          size: `large`,
                          disabled: o,
                          loading: o,
                          onClick: () => {
                            let t = e.region;
                            if (t == null) {
                              (y(e.name), x(``), I(`profile`));
                              return;
                            }
                            d({ method: `profile`, profile: e.name, region: t });
                          },
                          children: (0, Y.jsx)(U, {
                            id: `electron.onboarding.login.bedrock.continue`,
                            defaultMessage: `Continue`,
                            description: `Continue button label for Amazon Bedrock sign-in`,
                          }),
                        }),
                      ],
                    })
                  : null,
                n?.environmentCredentialsAvailable === !0
                  ? (0, Y.jsx)(A, {
                      className: `w-full justify-center`,
                      color: e == null ? `primary` : `ghostTertiary`,
                      size: e == null ? `large` : `default`,
                      disabled: o,
                      onClick: () => {
                        (x(n.environmentRegion ?? ``), I(`environment`));
                      },
                      children: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.environment.continue`,
                        defaultMessage: `Continue with detected credentials`,
                        description: `Button label to sign in with detected AWS environment credentials`,
                      }),
                    })
                  : null,
                (0, Y.jsx)(A, {
                  className: `w-full justify-center`,
                  color: `outlineSurface`,
                  size: `large`,
                  disabled: o,
                  onClick: () => {
                    (l(), _(!0));
                  },
                  children: (0, Y.jsx)(U, {
                    id: `electron.onboarding.login.bedrock.otherMethods`,
                    defaultMessage: `Other AWS sign-in methods`,
                    description: `Button label to show other AWS sign-in methods`,
                  }),
                }),
              ],
            })
          : null),
      (t[0] = S),
      (t[1] = O),
      (t[2] = n),
      (t[3] = f),
      (t[4] = p),
      (t[5] = s),
      (t[6] = M),
      (t[7] = o),
      (t[8] = j),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = N),
      (t[14] = v),
      (t[15] = b),
      (t[16] = w),
      (t[17] = E),
      (t[18] = g),
      (t[19] = r),
      (t[20] = P),
      (t[21] = F),
      (t[22] = I),
      (t[23] = L),
      (t[24] = R),
      (t[25] = z),
      (t[26] = B),
      (t[27] = V),
      (t[28] = ee),
      (t[29] = te),
      (t[30] = ne));
  } else
    ((P = t[20]),
      (F = t[21]),
      (I = t[22]),
      (L = t[23]),
      (R = t[24]),
      (z = t[25]),
      (B = t[26]),
      (V = t[27]),
      (ee = t[28]),
      (te = t[29]),
      (ne = t[30]));
  let re;
  t[56] !== n ||
  t[57] !== s ||
  t[58] !== P ||
  t[59] !== M ||
  t[60] !== o ||
  t[61] !== j ||
  t[62] !== F ||
  t[63] !== I ||
  t[64] !== g ||
  t[65] !== i ||
  t[66] !== r
    ? ((re =
        !M && j == null && (!P || g)
          ? (0, Y.jsxs)(Y.Fragment, {
              children: [
                r && n != null && s == null && !P
                  ? (0, Y.jsx)(`p`, {
                      className: `text-center text-[14px] leading-5 font-normal text-codex-description select-none`,
                      children: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.noCredentials`,
                        defaultMessage: `No AWS credentials found`,
                        description: `Message shown when desktop onboarding finds no AWS credentials`,
                      }),
                    })
                  : null,
                r
                  ? (0, Y.jsx)(A, {
                      className: `w-full justify-center`,
                      color: `secondary`,
                      size: `large`,
                      onClick: () => {
                        (y(n?.activeProfile ?? ``),
                          x(
                            F?.find((e) => {
                              let { name: t } = e;
                              return t === n?.activeProfile;
                            })?.region ?? ``,
                          ),
                          I(`profile`));
                      },
                      children: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.profile.method`,
                        defaultMessage: `AWS profile`,
                        description: `Button label to sign in with an AWS profile`,
                      }),
                    })
                  : null,
                r && i
                  ? (0, Y.jsx)(A, {
                      className: `w-full justify-center`,
                      color: `secondary`,
                      size: `large`,
                      onClick: () => {
                        (x(n?.region ?? ``), I(`accessKeys`));
                      },
                      children: (0, Y.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.accessKeys.method`,
                        defaultMessage: `AWS access keys`,
                        description: `Button label to sign in with AWS access keys`,
                      }),
                    })
                  : null,
                (0, Y.jsx)(A, {
                  className: `w-full justify-center`,
                  color: `secondary`,
                  size: `large`,
                  disabled: o,
                  onClick: () => {
                    (x(n?.region ?? ``), I(`apiKey`));
                  },
                  children: (0, Y.jsx)(U, {
                    id: `electron.onboarding.login.bedrock.apiKey.method`,
                    defaultMessage: `Bedrock API key`,
                    description: `Button label to enter a Bedrock API key`,
                  }),
                }),
              ],
            })
          : null),
      (t[56] = n),
      (t[57] = s),
      (t[58] = P),
      (t[59] = M),
      (t[60] = o),
      (t[61] = j),
      (t[62] = F),
      (t[63] = I),
      (t[64] = g),
      (t[65] = i),
      (t[66] = r),
      (t[67] = re))
    : (re = t[67]);
  let H;
  t[68] !== P || t[69] !== o || t[70] !== j || t[71] !== c || t[72] !== l || t[73] !== g
    ? ((H =
        j == null
          ? (0, Y.jsx)(A, {
              className: `mt-3 w-full justify-center`,
              color: `secondary`,
              size: `large`,
              disabled: o,
              onClick: () => {
                if ((l(), g && P)) {
                  _(!1);
                  return;
                }
                c();
              },
              children: (0, Y.jsx)(U, {
                id: `electron.onboarding.login.bedrock.back`,
                defaultMessage: `Back`,
                description: `Button label to go back from Amazon Bedrock setup`,
              }),
            })
          : null),
      (t[68] = P),
      (t[69] = o),
      (t[70] = j),
      (t[71] = c),
      (t[72] = l),
      (t[73] = g),
      (t[74] = H))
    : (H = t[74]);
  let ae;
  t[75] !== L || t[76] !== H || t[77] !== R || t[78] !== z || t[79] !== B || t[80] !== V || t[81] !== re
    ? ((ae = (0, Y.jsxs)(`div`, { className: L, children: [R, z, B, V, re, H] })),
      (t[75] = L),
      (t[76] = H),
      (t[77] = R),
      (t[78] = z),
      (t[79] = B),
      (t[80] = V),
      (t[81] = re),
      (t[82] = ae))
    : (ae = t[82]);
  let oe;
  t[83] !== ae || t[84] !== ee || t[85] !== te
    ? ((oe = (0, Y.jsxs)(`div`, { className: ee, children: [te, ae] })),
      (t[83] = ae),
      (t[84] = ee),
      (t[85] = te),
      (t[86] = oe))
    : (oe = t[86]);
  let se;
  return (
    t[87] !== oe || t[88] !== ne
      ? ((se = (0, Y.jsx)(`div`, { className: ne, children: oe })), (t[87] = oe), (t[88] = ne), (t[89] = se))
      : (se = t[89]),
    se
  );
}
function _n(e) {
  return (0, Y.jsx)(
    ce.RadioItem,
    {
      value: e.name,
      SubText:
        e.region == null
          ? null
          : (0, Y.jsx)(U, {
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
function vn(e) {
  let t = (0, yn.c)(20),
    { children: n, value: r, onChange: i, type: a, autoFocus: o, required: s, help: c } = e,
    l = a === void 0 ? `text` : a,
    u = o !== void 0 && o,
    d = s === void 0 || s,
    f = (0, bn.useId)(),
    p;
  t[0] === n
    ? (p = t[1])
    : ((p = (0, Y.jsx)(`span`, { className: `select-none`, children: n })), (t[0] = n), (t[1] = p));
  let m = c == null ? void 0 : f,
    h;
  t[2] === i ? (h = t[3]) : ((h = (e) => i(e.target.value)), (t[2] = i), (t[3] = h));
  let g;
  t[4] !== u || t[5] !== d || t[6] !== m || t[7] !== h || t[8] !== l || t[9] !== r
    ? ((g = (0, Y.jsx)(We, {
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
    ? ((_ = (0, Y.jsxs)(`label`, {
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
          : (0, Y.jsx)(`p`, { id: f, className: `text-sm text-secondary select-none`, children: c })),
      (t[14] = c),
      (t[15] = f),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== _ || t[18] !== v
      ? ((y = (0, Y.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [_, v] })),
        (t[17] = _),
        (t[18] = v),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
var yn, bn, Y;
function xn() {
  return (xn = e(() => {
    ((yn = y()), (bn = c()), O(), N(), z(), w(), pe(), Ze(), (Y = f()));
  }))();
}
function Sn(e, t) {
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
function Cn(e) {
  if (e instanceof Error && e.name === `AbortError`) return `abort`;
  if (e instanceof Error && e.name === `TimeoutError`) return `network`;
  if (e instanceof re) {
    if (e.status === 401 || e.status === 403) return `auth`;
    if (
      e.status === 0 ||
      e.status === 408 ||
      e.status === 504 ||
      (e.errorCode != null && wn.has(e.errorCode))
    )
      return `network`;
    let t = ve(e);
    return (t?.type != null && Tn.has(t.type)) || (e.errorCode != null && Tn.has(e.errorCode))
      ? `auth`
      : `unknown`;
  }
  if (e instanceof Error && `code` in e && typeof e.code == `string` && wn.has(e.code)) return `network`;
  let t = (typeof e == `string` ? e : e instanceof Error ? e.message : ``).trim().toLowerCase();
  return En.has(t)
    ? `network`
    : Tn.has(t) || t === `auth failed` || t === `invalid api key`
      ? `auth`
      : `unknown`;
}
var wn, Tn, En;
function Dn() {
  return (Dn = e(() => {
    (mt(),
      v(),
      (wn = new Set([
        `EAI_AGAIN`,
        `ECONNREFUSED`,
        `ECONNRESET`,
        `ENOTFOUND`,
        `ETIMEDOUT`,
        `ERR_CONNECTION_RESET`,
        `ERR_NETWORK_CHANGED`,
        `ERR_TIMED_OUT`,
      ])),
      (Tn = new Set([
        `authentication_error`,
        `forbidden`,
        `invalid_api_key`,
        `token_invalidated`,
        `unauthorized`,
      ])),
      (En = new Set([
        `failed to fetch`,
        `fetch failed`,
        `load failed`,
        `network request failed`,
        `networkerror when attempting to fetch resource.`,
        `request timed out`,
      ])));
  }))();
}
function On() {
  let e = (0, An.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, jn.jsx)(`p`, {
          className: `pb-3 text-start text-sm text-secondary select-none`,
          children: (0, jn.jsx)(U, {
            id: `electron.onboarding.login.apikey.createKey`,
            defaultMessage: `Don’t have an API key? <createKey>Create one here.</createKey>`,
            description: `Help below the desktop API key field; createKey links to the OpenAI API key management page in the user's browser`,
            values: { createKey: kn },
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function kn(e) {
  return (0, jn.jsx)(Ee, {
    href: `https://platform.openai.com/api-keys`,
    initiator: `open_in_browser_bridge`,
    isBrowserEnabled: !1,
    openTarget: `external-browser`,
    underline: `always`,
    children: e,
  });
}
var An, jn;
function Mn() {
  return (Mn = e(() => {
    ((An = y()), O(), ot(), (jn = f()));
  }))();
}
function Nn(e) {
  let t = (0, Pn.c)(46),
    { allowOtherSignInMethods: n, onChatGptSignIn: r, onShowOtherSignInMethods: i } = e,
    a = oe(),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(Qe, { className: `shrink-0` })), (t[0] = o))
    : (o = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsxs)(`div`, {
        className: `flex flex-col items-center gap-4 text-center`,
        children: [
          o,
          (0, X.jsx)(`h1`, {
            className: `text-3xl font-normal`,
            children: (0, X.jsx)(U, {
              id: `electron.onboarding.login.fallback.title`,
              defaultMessage: `Log in or sign up`,
              description: `Heading on desktop sign-in when browser lookup confirms no signed-in ChatGPT session; users can choose a provider or enter their email`,
            }),
          }),
        ],
      })),
      (t[1] = c))
    : (c = t[1]);
  let l;
  t[2] === r ? (l = t[3]) : ((l = () => void r(`signin`)), (t[2] = r), (t[3] = l));
  let u, d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(ee, { "aria-hidden": `true`, className: `size-5 shrink-0` })),
      (d = (0, X.jsx)(U, {
        id: `electron.onboarding.login.fallback.chatgpt`,
        defaultMessage: `Continue with ChatGPT`,
        description: `First desktop sign-in button opening the existing general ChatGPT browser authentication flow`,
      })),
      (t[4] = u),
      (t[5] = d))
    : ((u = t[4]), (d = t[5]));
  let f;
  t[6] === l
    ? (f = t[7])
    : ((f = (0, X.jsxs)(A, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: l,
        children: [u, d],
      })),
      (t[6] = l),
      (t[7] = f));
  let p;
  t[8] === r ? (p = t[9]) : ((p = () => void r(`google`)), (t[8] = r), (t[9] = p));
  let m, h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(Rt, { "aria-hidden": `true`, className: `size-5 shrink-0` })),
      (h = (0, X.jsx)(U, {
        id: `electron.onboarding.login.google.signIn`,
        defaultMessage: `Continue with Google`,
        description: `Button label for Google sign-in on desktop onboarding`,
      })),
      (t[10] = m),
      (t[11] = h))
    : ((m = t[10]), (h = t[11]));
  let g;
  t[12] === p
    ? (g = t[13])
    : ((g = (0, X.jsxs)(A, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: p,
        children: [m, h],
      })),
      (t[12] = p),
      (t[13] = g));
  let _;
  t[14] === r ? (_ = t[15]) : ((_ = () => void r(`apple`)), (t[14] = r), (t[15] = _));
  let v, y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(s, {})),
      (y = (0, X.jsx)(U, {
        id: `electron.onboarding.login.apple.signIn`,
        defaultMessage: `Continue with Apple`,
        description: `Button on the desktop sign-in screen opening Apple authentication in the system browser`,
      })),
      (t[16] = v),
      (t[17] = y))
    : ((v = t[16]), (y = t[17]));
  let b;
  t[18] === _
    ? (b = t[19])
    : ((b = (0, X.jsxs)(A, {
        color: `outlineSurface`,
        radius: `full`,
        size: `auth`,
        type: `button`,
        onClick: _,
        children: [v, y],
      })),
      (t[18] = _),
      (t[19] = b));
  let x;
  t[20] !== g || t[21] !== b || t[22] !== f
    ? ((x = (0, X.jsxs)(`div`, { className: `flex w-full flex-col gap-3`, children: [f, g, b] })),
      (t[20] = g),
      (t[21] = b),
      (t[22] = f),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, X.jsxs)(`div`, {
        className: `flex items-center gap-6 py-1 text-xs text-secondary`,
        "aria-hidden": `true`,
        children: [
          (0, X.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
          (0, X.jsx)(U, {
            id: `electron.onboarding.login.fallback.or`,
            defaultMessage: `OR`,
            description: `Separator between browser sign-in buttons and the email form on desktop sign-in`,
          }),
          (0, X.jsx)(`div`, { className: `h-px flex-1 bg-border` }),
        ],
      })),
      (t[24] = S))
    : (S = t[24]);
  let C;
  t[25] === r
    ? (C = t[26])
    : ((C = (e) => {
        e.preventDefault();
        let t = new FormData(e.currentTarget).get(`username`);
        typeof t == `string` && r(`email`, t.trim());
      }),
      (t[25] = r),
      (t[26] = C));
  let w;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, X.jsx)(`span`, {
        className: `sr-only`,
        children: (0, X.jsx)(U, {
          id: `electron.onboarding.login.fallback.emailLabel`,
          defaultMessage: `Email address`,
          description: `Accessible label for the desktop sign-in email input`,
        }),
      })),
      (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] === a
    ? (T = t[29])
    : ((T = a.formatMessage({
        id: `electron.onboarding.login.fallback.emailPlaceholder`,
        defaultMessage: `Email`,
        description: `Placeholder in the desktop sign-in email input`,
      })),
      (t[28] = a),
      (t[29] = T));
  let E;
  t[30] === T
    ? (E = t[31])
    : ((E = (0, X.jsxs)(`label`, {
        children: [
          w,
          (0, X.jsx)(We, {
            variant: `auth`,
            name: `username`,
            type: `email`,
            autoComplete: `email`,
            maxLength: 320,
            required: !0,
            placeholder: T,
          }),
        ],
      })),
      (t[30] = T),
      (t[31] = E));
  let D;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(A, {
        color: `primary`,
        radius: `full`,
        size: `auth`,
        type: `submit`,
        children: (0, X.jsx)(U, {
          id: `electron.onboarding.login.fallback.continue`,
          defaultMessage: `Continue`,
          description: `Button submitting the entered email address and continuing authentication in the system browser`,
        }),
      })),
      (t[32] = D))
    : (D = t[32]);
  let O;
  t[33] !== C || t[34] !== E
    ? ((O = (0, X.jsxs)(`form`, { className: `flex w-full flex-col gap-5`, onSubmit: C, children: [E, D] })),
      (t[33] = C),
      (t[34] = E),
      (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] !== n || t[37] !== i
    ? ((k = n
        ? (0, X.jsx)(A, {
            className: `self-center`,
            color: `ghostMuted`,
            size: `inline`,
            type: `button`,
            onClick: i,
            children: (0, X.jsx)(U, {
              id: `electron.onboarding.login.apikey.open.welcomeV2`,
              defaultMessage: `Sign in another way`,
              description: `Button label to open another sign-in method on v2 desktop onboarding`,
            }),
          })
        : null),
      (t[36] = n),
      (t[37] = i),
      (t[38] = k))
    : (k = t[38]);
  let j, M;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(Ee, {
        appearance: `secondary`,
        href: `https://openai.com/policies/terms-of-use/`,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, X.jsx)(U, {
          id: `electron.onboarding.login.fallback.terms`,
          defaultMessage: `Terms of use`,
          description: `Link below the desktop sign-in options opening OpenAI's terms of use in the system browser`,
        }),
      })),
      (M = (0, X.jsx)(`div`, { "aria-hidden": `true`, className: `h-3 w-px bg-border` })),
      (t[39] = j),
      (t[40] = M))
    : ((j = t[39]), (M = t[40]));
  let N;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-center gap-3 text-xs text-secondary`,
        children: [
          j,
          M,
          (0, X.jsx)(Ee, {
            appearance: `secondary`,
            href: `https://openai.com/policies/privacy-policy/`,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
            children: (0, X.jsx)(U, {
              id: `electron.onboarding.login.fallback.privacy`,
              defaultMessage: `Privacy policy`,
              description: `Link below the desktop sign-in options opening OpenAI's privacy policy in the system browser`,
            }),
          }),
        ],
      })),
      (t[41] = N))
    : (N = t[41]);
  let P;
  return (
    t[42] !== x || t[43] !== O || t[44] !== k
      ? ((P = (0, X.jsx)(`div`, {
          className: `flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none`,
          children: (0, X.jsx)(`main`, {
            className: `flex w-full shrink-0 grow flex-col items-center justify-center px-6 py-4`,
            children: (0, X.jsxs)(`div`, {
              className: `flex w-full max-w-sm flex-col gap-5`,
              children: [c, x, S, O, k, N],
            }),
          }),
        })),
        (t[42] = x),
        (t[43] = O),
        (t[44] = k),
        (t[45] = P))
      : (P = t[45]),
    P
  );
}
var Pn, X;
function Fn() {
  return (Fn = e(() => {
    ((Pn = y()), O(), N(), ot(), w(), pe(), Lt(), ue(), Ze(), (X = f()));
  }))();
}
function In(e) {
  let t = (0, Ln.c)(6),
    { children: n, description: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Rn.jsx)(Qe, { className: `size-10 shrink-0` })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = (0, Rn.jsx)(`p`, {
        className: `text-center text-base leading-5 font-normal text-codex-description select-none`,
        children: r,
      })),
      (t[1] = r),
      (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, Rn.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default`,
          children: (0, Rn.jsxs)(`div`, {
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
var Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Ln = y()), Ze(), (Rn = f()));
  }))();
}
function Bn(e) {
  let t = (0, Hn.c)(136),
    {
      allowApiKey: r,
      allowChatGpt: i,
      apiKeyHelpVariant: a,
      apiKeyValue: o,
      browserSessionProfiles: s,
      canCopySignInLink: c,
      isApiKeyEntryVisible: u,
      isOtherSignInMethodsVisible: d,
      isApiKeySignInPending: f,
      isChatGptSignInPending: p,
      showAmazonBedrockSignIn: h,
      showChatGptProviderSignIn: g,
      onApiKeySubmit: _,
      onApiKeyValueChange: v,
      onChatGptSignIn: y,
      onChatGptSignUp: b,
      onCopySignInLink: x,
      onPlaySnake: S,
      onResetApiKeyEntry: C,
      onShowApiKeyEntry: w,
      onShowOtherSignInMethods: T,
      onHideOtherSignInMethods: E,
      onShowBedrockSetup: D,
    } = e,
    O = oe(),
    k = r && u,
    j = r && h && d && !k,
    M = ye(p && !k ? `2502927686` : !1),
    N = ne.chatGptBrowserSession,
    P = i && s === void 0 && N != null,
    F;
  t[0] === P ? (F = t[1]) : ((F = { enabled: P }), (t[0] = P), (t[1] = F));
  let { data: I, isPending: L } = te(Mt, F),
    R = I?.eligible ?? !1,
    z = P && L,
    B = te(jt),
    V = be(te(Dt)),
    re = P && R,
    ie;
  t[2] !== V || t[3] !== B || t[4] !== re
    ? ((ie = Et({ eligible: re, isWindows: B, lookupLayer: V })),
      (t[2] = V),
      (t[3] = B),
      (t[4] = re),
      (t[5] = ie))
    : (ie = t[5]);
  let { experience: H, enabled: se, listAllAccounts: ce } = ie,
    le = be(an),
    ue;
  t[6] !== H || t[7] !== z || t[8] !== le || t[9] !== g
    ? ((ue = !z && H === `existing` && (g ?? nn(le.get(`enabled`, !1)))),
      (t[6] = H),
      (t[7] = z),
      (t[8] = le),
      (t[9] = g),
      (t[10] = ue))
    : (ue = t[10]);
  let de = ue,
    fe = be(Wn),
    pe;
  t[11] !== fe || t[12] !== a || t[13] !== k
    ? ((pe = a ?? (k ? fe.get(`api_key_help_variant`, `control`) : `control`)),
      (t[11] = fe),
      (t[12] = a),
      (t[13] = k),
      (t[14] = pe))
    : (pe = t[14]);
  let me = pe,
    he = me === `link` || me === `explanation` || me === `explanation-with-chatgpt` ? me : `control`,
    ge = k && (he === `explanation` || he === `explanation-with-chatgpt`),
    _e;
  t[15] !== V || t[16] !== B
    ? ((_e = !B && V.get(`update_cta_for_sign_in_with_api_key`, !1)), (t[15] = V), (t[16] = B), (t[17] = _e))
    : (_e = t[17]);
  let ve = _e,
    xe = P && R,
    Se;
  t[18] !== V || t[19] !== xe || t[20] !== B
    ? ((Se = !B && xe && V.get(`update_cta_for_sign_in_with_api_key_with_browser_lookup`, !1)),
      (t[18] = V),
      (t[19] = xe),
      (t[20] = B),
      (t[21] = Se))
    : (Se = t[21]);
  let Ce = ve || Se,
    we;
  t[22] === se ? (we = t[23]) : ((we = { enabled: se }), (t[22] = se), (t[23] = we));
  let { data: Te, isPending: Ee, isFetching: De, isSuccess: Oe } = ae(Ot, ce, we),
    ke = Te === void 0 ? null : Te,
    Ae = se && Ee,
    W = i ? (s ?? null) : null;
  i && se && s === void 0 && !Ae && (W = ke);
  let G, je, K, Me, Ne, Pe, q;
  if (
    t[24] !== r ||
    t[25] !== i ||
    t[26] !== he ||
    t[27] !== o ||
    t[28] !== se ||
    t[29] !== W ||
    t[30] !== c ||
    t[31] !== H ||
    t[32] !== O ||
    t[33] !== u ||
    t[34] !== f ||
    t[35] !== z ||
    t[36] !== De ||
    t[37] !== Ae ||
    t[38] !== Oe ||
    t[39] !== p ||
    t[40] !== _ ||
    t[41] !== v ||
    t[42] !== y ||
    t[43] !== b ||
    t[44] !== x ||
    t[45] !== E ||
    t[46] !== S ||
    t[47] !== C ||
    t[48] !== w ||
    t[49] !== D ||
    t[50] !== T ||
    t[51] !== ke?.length ||
    t[52] !== h ||
    t[53] !== ge ||
    t[54] !== k ||
    t[55] !== M ||
    t[56] !== de ||
    t[57] !== j ||
    t[58] !== Ce
  ) {
    q = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = W?.slice(0, 3),
        a = (e?.length ?? 0) > 0 && !k && !j,
        s;
      if (j) {
        let e;
        (t[66] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(U, {
              id: `electron.onboarding.login.otherMethods.title`,
              defaultMessage: `Sign in another way`,
              description: `Title for choosing between OpenAI API key and Amazon Bedrock sign-in`,
            })),
            (t[66] = e))
          : (e = t[66]),
          (s = e));
      } else if (!i || ge) {
        let e;
        (t[67] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(U, {
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
              ? (0, Z.jsx)(U, {
                  id: `electron.onboarding.login.browserSession.welcomeBack`,
                  defaultMessage: `Welcome back`,
                  description: `Title on desktop onboarding when a signed-in ChatGPT browser session was found`,
                })
              : (0, Z.jsx)(U, {
                  id: `electron.onboarding.login.welcomeV2.title.chatgptSignIn`,
                  defaultMessage: `Sign in to ChatGPT`,
                  description: `Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in`,
                })),
            (t[68] = a),
            (t[69] = e)),
          (s = e));
      }
      if (i && p && !k) {
        let e;
        t[70] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(U, {
              id: `electron.onboarding.login.browserPending.welcomeV2`,
              defaultMessage: `Continue signing in with your browser`,
              description: `Message shown while ChatGPT sign-in continues in the browser`,
            })),
            (t[70] = e))
          : (e = t[70]);
        let n;
        t[71] === y ? (n = t[72]) : ((n = () => void y()), (t[71] = y), (t[72] = n));
        let r;
        t[73] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, Z.jsx)(U, {
              id: `electron.onboarding.login.chatgpt.cancel.welcomeV2`,
              defaultMessage: `Cancel sign-in`,
              description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
            })),
            (t[73] = r))
          : (r = t[73]);
        let i;
        t[74] === n
          ? (i = t[75])
          : ((i = (0, Z.jsx)(`button`, {
              className: `flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-primary-ghost-hover`,
              type: `button`,
              onClick: n,
              children: r,
            })),
            (t[74] = n),
            (t[75] = i));
        let a;
        t[76] !== c || t[77] !== x || t[78] !== M
          ? ((a = M
              ? (0, Z.jsxs)(`div`, {
                  className: `flex flex-wrap items-center justify-center gap-2`,
                  children: [
                    (0, Z.jsx)(`span`, {
                      className: `py-2 text-sm leading-5 font-normal text-codex-description select-none`,
                      children: (0, Z.jsx)(U, {
                        id: `electron.onboarding.login.browserDidNotOpen`,
                        defaultMessage: `Browser didn't open?`,
                        description: `Helper text before the Copy sign-in link action while desktop browser sign-in is pending`,
                      }),
                    }),
                    (0, Z.jsxs)(A, {
                      color: `ghost`,
                      disabled: !c,
                      size: `dialog`,
                      onClick: () => void x(),
                      children: [
                        (0, Z.jsx)(l, {}),
                        (0, Z.jsx)(U, {
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
            (t[77] = x),
            (t[78] = M),
            (t[79] = a))
          : (a = t[79]);
        let o;
        (t[80] !== i || t[81] !== a
          ? ((o = (0, Z.jsx)(In, {
              description: e,
              children: (0, Z.jsxs)(`div`, {
                className: `flex w-full flex-col items-center gap-6`,
                children: [i, a],
              }),
            })),
            (t[80] = i),
            (t[81] = a),
            (t[82] = o))
          : (o = t[82]),
          (q = o));
        break bb0;
      }
      if (!k && (z || Ae)) {
        let e;
        (t[83] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsxs)(`div`, {
              className: `flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description`,
              children: [
                (0, Z.jsx)(n, { className: `h-4 w-4 text-default` }),
                (0, Z.jsx)(U, {
                  id: `electron.onboarding.login.loading`,
                  defaultMessage: `Loading…`,
                  description: `Loading state while the desktop login page prepares the sign-in experience`,
                }),
              ],
            })),
            (t[83] = e))
          : (e = t[83]),
          (q = e));
        break bb0;
      }
      if (H === `browser_lookup_with_fallback` && se && Oe && !De && ke?.length === 0 && !k && !j) {
        let e = h ? T : w,
          n;
        (t[84] !== r || t[85] !== y || t[86] !== e
          ? ((n = (0, Z.jsx)(Nn, {
              allowOtherSignInMethods: r,
              onChatGptSignIn: y,
              onShowOtherSignInMethods: e,
            })),
            (t[84] = r),
            (t[85] = y),
            (t[86] = e),
            (t[87] = n))
          : (n = t[87]),
          (q = n));
        break bb0;
      }
      ((Pe = `flex h-full w-full scroll-pt-(--height-toolbar-sm) flex-col overflow-y-auto bg-surface pb-6 text-default`),
        (G = `flex w-[340px] max-w-full shrink-0 grow flex-col items-center justify-center gap-8 self-center py-(--height-toolbar-sm)`));
      let d = ge ? `gap-5` : `gap-4`,
        g;
      t[88] === d ? (g = t[89]) : ((g = m(`flex w-full flex-col items-center`, d)), (t[88] = d), (t[89] = g));
      let N;
      t[90] === O
        ? (N = t[91])
        : ((N = O.formatMessage({
            id: `electron.onboarding.login.snake.start`,
            defaultMessage: `Play Snake`,
            description: `Aria label for the ChatGPT logo button to start Snake`,
          })),
          (t[90] = O),
          (t[91] = N));
      let P;
      t[92] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = (0, Z.jsx)(Qe, { className: `shrink-0` })), (t[92] = P))
        : (P = t[92]);
      let F;
      t[93] !== S || t[94] !== N
        ? ((F = (0, Z.jsx)(A, {
            className: `group justify-center`,
            color: `ghostMuted`,
            radius: `full`,
            size: `inline`,
            type: `button`,
            "aria-label": N,
            onClick: S,
            children: P,
          })),
          (t[93] = S),
          (t[94] = N),
          (t[95] = F))
        : (F = t[95]);
      let I;
      t[96] === s
        ? (I = t[97])
        : ((I = (0, Z.jsx)(`h1`, {
            className: `w-[316px] max-w-full text-center text-[28px] leading-9 font-normal text-default`,
            children: s,
          })),
          (t[96] = s),
          (t[97] = I));
      let L;
      t[98] === ge
        ? (L = t[99])
        : ((L = ge
            ? (0, Z.jsx)(`p`, {
                className: `text-center text-base leading-6 text-secondary select-none`,
                children: (0, Z.jsx)(U, {
                  id: `electron.onboarding.login.apikey.explanation`,
                  defaultMessage: `Use OpenAI’s developer platform with separate, usage-based billing`,
                  description: `Description below the API key sign-in heading explaining that OpenAI API usage has its own usage-based billing, separate from ChatGPT`,
                }),
              })
            : null),
          (t[98] = ge),
          (t[99] = L));
      let R;
      (t[100] === a
        ? (R = t[101])
        : ((R = a
            ? (0, Z.jsx)(`p`, {
                className: `text-center text-[14px] leading-5 text-codex-description`,
                children: (0, Z.jsx)(U, {
                  id: `electron.onboarding.login.browserSession.chooseAccount`,
                  defaultMessage: `Choose an account to continue to ChatGPT`,
                  description: `Instruction on desktop onboarding when a signed-in ChatGPT browser session was found`,
                }),
              })
            : null),
          (t[100] = a),
          (t[101] = R)),
        t[102] !== g || t[103] !== F || t[104] !== I || t[105] !== L || t[106] !== R
          ? ((je = (0, Z.jsxs)(`div`, { className: g, children: [F, I, L, R] })),
            (t[102] = g),
            (t[103] = F),
            (t[104] = I),
            (t[105] = L),
            (t[106] = R),
            (t[107] = je))
          : (je = t[107]),
        t[108] !== r ||
        t[109] !== i ||
        t[110] !== he ||
        t[111] !== o ||
        t[112] !== u ||
        t[113] !== f ||
        t[114] !== p ||
        t[115] !== _ ||
        t[116] !== v ||
        t[117] !== y ||
        t[118] !== C ||
        t[119] !== w ||
        t[120] !== k
          ? ((K = k
              ? (0, Z.jsxs)(`div`, {
                  className: `flex w-full flex-col gap-8`,
                  children: [
                    (0, Z.jsx)(Xt, {
                      allowApiKey: r,
                      allowChatGpt: i,
                      apiKeyHelp: he === `control` ? null : (0, Z.jsx)(On, {}),
                      apiKeyValue: o,
                      isApiKeyEntryVisible: u,
                      isApiKeySignInPending: f,
                      isChatGptSignInPending: p,
                      onApiKeySecondaryAction: C,
                      onApiKeySubmit: _,
                      onApiKeyValueChange: v,
                      onChatGptSignIn: y,
                      onShowApiKeyEntry: w,
                      apiKeySecondaryActionLabel: (0, Z.jsx)(U, {
                        id: `electron.onboarding.login.apikey.cancel`,
                        defaultMessage: `Cancel`,
                        description: `Cancel button label for API key entry on desktop onboarding`,
                      }),
                    }),
                    he === `explanation-with-chatgpt` && i
                      ? (0, Z.jsxs)(`div`, {
                          className: `flex flex-col items-center gap-2 text-center text-sm text-secondary select-none`,
                          children: [
                            (0, Z.jsx)(`p`, {
                              children: (0, Z.jsx)(U, {
                                id: `electron.onboarding.login.apikey.chatGptAlternative`,
                                defaultMessage: `Want to use your ChatGPT account?`,
                                description: `Prompt below the API key form offering ChatGPT account sign-in as an alternative`,
                              }),
                            }),
                            (0, Z.jsx)(A, {
                              className: `underline`,
                              color: `ghostMuted`,
                              size: `inline`,
                              type: `button`,
                              disabled: f || p,
                              onClick: () => {
                                (C(), y());
                              },
                              children: (0, Z.jsx)(U, {
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
            (t[110] = he),
            (t[111] = o),
            (t[112] = u),
            (t[113] = f),
            (t[114] = p),
            (t[115] = _),
            (t[116] = v),
            (t[117] = y),
            (t[118] = C),
            (t[119] = w),
            (t[120] = k),
            (t[121] = K))
          : (K = t[121]),
        t[122] !== E || t[123] !== w || t[124] !== D || t[125] !== j
          ? ((Me = j
              ? (0, Z.jsxs)(`div`, {
                  className: `flex w-full flex-col items-center gap-3`,
                  children: [
                    (0, Z.jsx)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: w,
                      children: (0, Z.jsx)(U, {
                        id: `electron.onboarding.login.otherMethods.openaiApiKey`,
                        defaultMessage: `OpenAI API Key`,
                        description: `Button label to open the existing OpenAI API key sign-in form`,
                      }),
                    }),
                    (0, Z.jsx)(`button`, {
                      className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                      type: `button`,
                      onClick: D,
                      children: (0, Z.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.open.welcomeV2`,
                        defaultMessage: `Use Amazon Bedrock`,
                        description: `Button label to set up Amazon Bedrock on desktop onboarding`,
                      }),
                    }),
                    (0, Z.jsx)(A, {
                      color: `ghostTertiary`,
                      onClick: E,
                      children: (0, Z.jsx)(U, {
                        id: `electron.onboarding.login.otherMethods.back`,
                        defaultMessage: `Back`,
                        description: `Button label to return from alternative sign-in methods to the main sign-in screen`,
                      }),
                    }),
                  ],
                })
              : null),
            (t[122] = E),
            (t[123] = w),
            (t[124] = D),
            (t[125] = j),
            (t[126] = Me))
          : (Me = t[126]),
        (Ne =
          !k && !j
            ? (0, Z.jsxs)(`div`, {
                className: `flex w-full flex-col items-center gap-3`,
                children: [
                  i &&
                    (e != null && e.length > 0
                      ? (0, Z.jsxs)(Z.Fragment, {
                          children: [
                            e.map((e) => (0, Z.jsx)(Vn, { profile: e, onChatGptSignIn: y }, e.email)),
                            (0, Z.jsxs)(`div`, {
                              className: `flex w-full items-center gap-4 py-2`,
                              "aria-hidden": `true`,
                              children: [
                                (0, Z.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                                (0, Z.jsx)(`span`, {
                                  className: `text-[12px] font-medium text-codex-description`,
                                  children: (0, Z.jsx)(U, {
                                    id: `electron.onboarding.login.browserSession.or`,
                                    defaultMessage: `OR`,
                                    description: `Divider label between the recognized ChatGPT browser account and other sign-in options`,
                                  }),
                                }),
                                (0, Z.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                              ],
                            }),
                            (0, Z.jsx)(`button`, {
                              className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                              type: `button`,
                              onClick: () => y(`other-account`),
                              children: (0, Z.jsx)(U, {
                                id: `electron.onboarding.login.browserSession.otherAccount`,
                                defaultMessage: `Use another account`,
                                description: `Button label to sign in with a different ChatGPT account after a browser account was recognized`,
                              }),
                            }),
                          ],
                        })
                      : (0, Z.jsxs)(`button`, {
                          className: `flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-text/80`,
                          type: `button`,
                          onClick: () => y(),
                          children: [
                            (0, Z.jsx)(ee, { className: `size-6 shrink-0 text-primary-solid` }),
                            (0, Z.jsx)(U, {
                              id: `electron.onboarding.login.chatgpt.continueToSignIn`,
                              defaultMessage: `Continue to sign in`,
                              description: `Button label for streamlined ChatGPT sign-in on desktop onboarding`,
                            }),
                          ],
                        })),
                  i && de
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsxs)(`button`, {
                            className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                            type: `button`,
                            onClick: () => y(`google`),
                            children: [
                              (0, Z.jsx)(Rt, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                              (0, Z.jsx)(U, {
                                id: `electron.onboarding.login.google.signIn`,
                                defaultMessage: `Continue with Google`,
                                description: `Button label for Google sign-in on desktop onboarding`,
                              }),
                            ],
                          }),
                          (0, Z.jsxs)(`button`, {
                            className: `flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                            type: `button`,
                            onClick: () => y(`microsoft`),
                            children: [
                              (0, Z.jsx)(St, { className: `size-5 shrink-0`, "aria-hidden": `true` }),
                              (0, Z.jsx)(U, {
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
                    ? (0, Z.jsx)(`button`, {
                        className: `flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover`,
                        type: `button`,
                        onClick: h ? T : w,
                        children:
                          !h && (!i || Ce)
                            ? (0, Z.jsx)(U, {
                                id: `electron.onboarding.login.apikey.open.explicit.welcomeV2`,
                                defaultMessage: `Sign in with an API key`,
                                description: `Button label to open API key sign-in on v2 desktop onboarding`,
                              })
                            : (0, Z.jsx)(U, {
                                id: `electron.onboarding.login.apikey.open.welcomeV2`,
                                defaultMessage: `Sign in another way`,
                                description: `Button label to open another sign-in method on v2 desktop onboarding`,
                              }),
                      })
                    : null,
                  i
                    ? (0, Z.jsx)(`button`, {
                        className: `flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default`,
                        type: `button`,
                        onClick: b,
                        children: (0, Z.jsx)(U, {
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
      (t[26] = he),
      (t[27] = o),
      (t[28] = se),
      (t[29] = W),
      (t[30] = c),
      (t[31] = H),
      (t[32] = O),
      (t[33] = u),
      (t[34] = f),
      (t[35] = z),
      (t[36] = De),
      (t[37] = Ae),
      (t[38] = Oe),
      (t[39] = p),
      (t[40] = _),
      (t[41] = v),
      (t[42] = y),
      (t[43] = b),
      (t[44] = x),
      (t[45] = E),
      (t[46] = S),
      (t[47] = C),
      (t[48] = w),
      (t[49] = D),
      (t[50] = T),
      (t[51] = ke?.length),
      (t[52] = h),
      (t[53] = ge),
      (t[54] = k),
      (t[55] = M),
      (t[56] = de),
      (t[57] = j),
      (t[58] = Ce),
      (t[59] = G),
      (t[60] = je),
      (t[61] = K),
      (t[62] = Me),
      (t[63] = Ne),
      (t[64] = Pe),
      (t[65] = q));
  } else ((G = t[59]), (je = t[60]), (K = t[61]), (Me = t[62]), (Ne = t[63]), (Pe = t[64]), (q = t[65]));
  if (q !== Symbol.for(`react.early_return_sentinel`)) return q;
  let Fe;
  t[127] !== G || t[128] !== je || t[129] !== K || t[130] !== Me || t[131] !== Ne
    ? ((Fe = (0, Z.jsxs)(`div`, { className: G, children: [je, K, Me, Ne] })),
      (t[127] = G),
      (t[128] = je),
      (t[129] = K),
      (t[130] = Me),
      (t[131] = Ne),
      (t[132] = Fe))
    : (Fe = t[132]);
  let Ie;
  return (
    t[133] !== Pe || t[134] !== Fe
      ? ((Ie = (0, Z.jsx)(`div`, { className: Pe, children: Fe })),
        (t[133] = Pe),
        (t[134] = Fe),
        (t[135] = Ie))
      : (Ie = t[135]),
    Ie
  );
}
function Vn(e) {
  let t = (0, Hn.c)(39),
    { profile: n, onChatGptSignIn: r } = e,
    i = oe(),
    a = W(n.avatarUrl),
    [o, s] = (0, Un.useState)(null),
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    g;
  t[0] !== i || t[1] !== n.email || t[2] !== n.name
    ? ((u = n.name?.trim() || null),
      (l = u ?? n.email),
      (c = A),
      (d = `w-full justify-start text-start`),
      (f = `outlineSurface`),
      (p = `large`),
      (m = `auth`),
      (h = `button`),
      (g =
        u == null
          ? i.formatMessage(
              {
                id: `electron.onboarding.login.browserSession.continueAs`,
                defaultMessage: `Continue as {accountName}`,
                description: `Accessible label for a recognized ChatGPT browser account button on desktop onboarding. The accountName placeholder is the account email address.`,
              },
              { accountName: l },
            )
          : i.formatMessage(
              {
                id: `electron.onboarding.login.browserSession.continueAsWithEmail`,
                defaultMessage: `Continue as {accountName}, {email}`,
                description: `Accessible label for a recognized ChatGPT browser account button on desktop onboarding when the account has a display name. The accountName placeholder is the display name and the email placeholder distinguishes accounts that share that name.`,
              },
              { accountName: l, email: n.email },
            )),
      (t[0] = i),
      (t[1] = n.email),
      (t[2] = n.name),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g))
    : ((c = t[3]),
      (l = t[4]),
      (u = t[5]),
      (d = t[6]),
      (f = t[7]),
      (p = t[8]),
      (m = t[9]),
      (h = t[10]),
      (g = t[11]));
  let _;
  t[12] !== r || t[13] !== n.email
    ? ((_ = () => r(`signin`, n.email)), (t[12] = r), (t[13] = n.email), (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== l || t[16] !== o || t[17] !== n.email || t[18] !== a
    ? ((v =
        a != null && a !== o
          ? (0, Z.jsx)(`img`, {
              src: a,
              alt: ``,
              className: `size-10 shrink-0 rounded-full`,
              onError: () => {
                s(a);
              },
            })
          : (0, Z.jsx)(it, { alt: ``, colorKey: n.email, name: l, size: `row`, src: null })),
      (t[15] = l),
      (t[16] = o),
      (t[17] = n.email),
      (t[18] = a),
      (t[19] = v))
    : (v = t[19]);
  let y;
  t[20] === l
    ? (y = t[21])
    : ((y = (0, Z.jsx)(`span`, {
        className: `block truncate text-[14px] leading-5 font-medium text-default`,
        children: l,
      })),
      (t[20] = l),
      (t[21] = y));
  let b;
  t[22] !== n.email || t[23] !== u
    ? ((b =
        u == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `block truncate text-[13px] leading-5 text-codex-description`,
              children: n.email,
            })),
      (t[22] = n.email),
      (t[23] = u),
      (t[24] = b))
    : (b = t[24]);
  let x;
  t[25] !== b || t[26] !== y
    ? ((x = (0, Z.jsxs)(`span`, { className: `min-w-0 flex-1`, children: [y, b] })),
      (t[25] = b),
      (t[26] = y),
      (t[27] = x))
    : (x = t[27]);
  let S;
  return (
    t[28] !== c ||
    t[29] !== d ||
    t[30] !== x ||
    t[31] !== f ||
    t[32] !== p ||
    t[33] !== m ||
    t[34] !== h ||
    t[35] !== g ||
    t[36] !== _ ||
    t[37] !== v
      ? ((S = (0, Z.jsxs)(c, {
          className: d,
          color: f,
          radius: p,
          size: m,
          type: h,
          "aria-label": g,
          onClick: _,
          children: [v, x],
        })),
        (t[28] = c),
        (t[29] = d),
        (t[30] = x),
        (t[31] = f),
        (t[32] = p),
        (t[33] = m),
        (t[34] = h),
        (t[35] = g),
        (t[36] = _),
        (t[37] = v),
        (t[38] = S))
      : (S = t[38]),
    S
  );
}
var Hn, Un, Z, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Hn = y()),
      h(),
      F(),
      (Un = c()),
      O(),
      Te(),
      dt(),
      N(),
      w(),
      V(),
      Lt(),
      xt(),
      ue(),
      Ze(),
      L(),
      _t(),
      on(),
      kt(),
      At(),
      Mn(),
      qt(),
      Fn(),
      zn(),
      (Z = f()),
      (Wn = `1072464827`));
  }))();
}
function Kn(e) {
  let t = (0, Xn.c)(126),
    { workspaceRecovery: a } = e,
    s = a !== void 0 && a,
    c = i(x),
    l = rt(),
    u = T(),
    d = oe(),
    f;
  t[0] === c
    ? (f = t[1])
    : ((f = (e) => {
        let t = c.get(He);
        return t == null ? e : nt(e, t.pathname, t.search);
      }),
      (t[0] = c),
      (t[1] = f));
  let p = f,
    m = C(),
    h = ae(Jt, M),
    _ = h.status === `ready` && h.chatgpt,
    v = h.status === `ready` && h.api,
    y = te(Ye),
    b;
  t[2] === y
    ? (b = t[3])
    : ((b = y == null ? null : { hasPreviouslyCompletedOnboarding: y }), (t[2] = y), (t[3] = b));
  let S = b,
    w = Se(),
    E = ye(`1934304769`),
    O;
  t[4] !== d || t[5] !== c
    ? ((O = (e) => {
        c.get(se).warning(
          d.formatMessage(
            {
              id: `electron.onboarding.login.error`,
              defaultMessage: `Sign-in failed: {rawMessage}`,
              description: `Toast shown when sign-in fails on the desktop onboarding page`,
            },
            { rawMessage: e },
          ),
        );
      }),
      (t[4] = d),
      (t[5] = c),
      (t[6] = O))
    : (O = t[6]);
  let k = O,
    [A, j] = (0, Q.useState)(null),
    N = ae(Ne, M),
    F = te(ge),
    I = F == null ? N?.authUrl : F.authUrl,
    L = A != null || F != null,
    z = (0, Q.useRef)(null),
    B;
  t[7] === c.node
    ? (B = t[8])
    : ((B = () => () => {
        Ie.has(c.node) || z.current?.abort();
      }),
      (t[7] = c.node),
      (t[8] = B));
  let V;
  (t[9] === c ? (V = t[10]) : ((V = [c]), (t[9] = c), (t[10] = V)), (0, Q.useEffect)(B, V));
  let ee, re;
  (t[11] === _
    ? ((ee = t[12]), (re = t[13]))
    : ((ee = () => {
        _ || z.current?.abort();
      }),
      (re = [_]),
      (t[11] = _),
      (t[12] = ee),
      (t[13] = re)),
    (0, Q.useEffect)(ee, re));
  let [ie, H] = (0, Q.useState)(!1),
    [ce, le] = (0, Q.useState)(!1),
    [ue, de] = (0, Q.useState)(!1),
    [pe, me] = (0, Q.useState)(``),
    [ve, be] = (0, Q.useState)(null),
    Te = ve != null,
    Ee,
    De;
  (t[14] === ve
    ? ((Ee = t[15]), (De = t[16]))
    : ((De = () => () => ve?.abort()), (Ee = [ve]), (t[14] = ve), (t[15] = Ee), (t[16] = De)),
    (0, Q.useEffect)(De, Ee));
  let ke, Ae;
  (t[17] !== v || t[18] !== ve
    ? ((ke = () => {
        v || ve?.abort();
      }),
      (Ae = [v, ve]),
      (t[17] = v),
      (t[18] = ve),
      (t[19] = ke),
      (t[20] = Ae))
    : ((ke = t[19]), (Ae = t[20])),
    (0, Q.useEffect)(ke, Ae));
  let [W, G] = (0, Q.useState)(null),
    K = te(Xe),
    Me = (0, Q.useRef)(0),
    q = (0, Q.useRef)(null),
    Fe;
  t[21] === c
    ? (Fe = t[22])
    : ((Fe = () => {
        (c.set(Pe, !1), c.set(et, !0));
      }),
      (t[21] = c),
      (t[22] = Fe));
  let Re = Fe,
    ze;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = () => {
        (H(!1), be(null), me(``));
      }),
      (t[23] = ze))
    : (ze = t[23]);
  let Ue = ze,
    We;
  t[24] !== h.api || t[25] !== h.status || t[26] !== S || t[27] !== c
    ? ((We = () => {
        S != null && h.status === `ready` && h.api && (gt(c, P, { method: `apikey`, ...S }), H(!0));
      }),
      (t[24] = h.api),
      (t[25] = h.status),
      (t[26] = S),
      (t[27] = c),
      (t[28] = We))
    : (We = t[28]);
  let Ke = We,
    qe;
  t[29] !== d || t[30] !== c
    ? ((qe = async () => {
        let e = (Me.current += 1);
        if (ne.appServerLifecycle == null) {
          G((e) =>
            e == null
              ? null
              : {
                  ...e,
                  isDetecting: !1,
                  errorMessage: d.formatMessage({
                    id: `electron.onboarding.login.bedrock.unavailable`,
                    defaultMessage: `Amazon Bedrock sign-in is unavailable on this host`,
                    description: `Error when the desktop host does not support Amazon Bedrock sign-in`,
                  }),
                },
          );
          return;
        }
        G(Yn);
        try {
          let t = await je(c);
          G((n) => (n == null || e !== Me.current ? n : { ...n, detectedCredentials: t, isDetecting: !1 }));
        } catch (t) {
          let n = t;
          G((t) =>
            t == null || e !== Me.current
              ? t
              : o(n, `account/bedrock/discover`)
                ? { ...t, errorMessage: null, isDetecting: !1, supportsAwsCredentials: !1 }
                : { ...t, errorMessage: fe(n), isDetecting: !1 },
          );
        }
      }),
      (t[29] = d),
      (t[30] = c),
      (t[31] = qe))
    : (qe = t[31]);
  let Ze = qe,
    Qe;
  t[32] !== Ze || t[33] !== c
    ? ((Qe = () => {
        (G({
          detectedCredentials: null,
          errorMessage: null,
          isDetecting: !0,
          isSubmitting: !1,
          supportsAwsCredentials: !0,
          supportsAccessKeys: R(c.get(Oe, M), `bedrockAccessKeysLogin`),
        }),
          Ze());
      }),
      (t[32] = Ze),
      (t[33] = c),
      (t[34] = Qe))
    : (Qe = t[34]);
  let $e = Qe,
    tt;
  t[35] !== p || t[36] !== u || t[37] !== c || t[38] !== Re || t[39] !== l || t[40] !== s
    ? ((tt = async () => {
        if (pt()?.status === `pending`) {
          if ((ct({ status: `complete` }), s)) {
            (l(), await u(p(`/`), { replace: !0 }));
            return;
          }
          (Re(), c.set(xe, !0), c.set(Ut, void 0), l(), await u(p(`/welcome`), { replace: !0 }));
        }
      }),
      (t[35] = p),
      (t[36] = u),
      (t[37] = c),
      (t[38] = Re),
      (t[39] = l),
      (t[40] = s),
      (t[41] = tt))
    : (tt = t[41]);
  let it = tt,
    at = (0, Q.useEffectEvent)(it),
    ot;
  t[42] !== at || t[43] !== c
    ? ((ot = () =>
        c.watch((e) => {
          let { get: t } = e,
            n = t(Xe);
          n?.status === `pending` && n.warning != null && t(he) && at();
        })),
      (t[42] = at),
      (t[43] = c),
      (t[44] = ot))
    : (ot = t[44]);
  let lt;
  (t[45] === c ? (lt = t[46]) : ((lt = [c]), (t[45] = c), (t[46] = lt)), (0, Q.useEffect)(ot, lt));
  let ut;
  t[47] !== it || t[48] !== c
    ? ((ut = async () => {
        let e = ne.appServerLifecycle,
          t = c.get(Xe);
        if (t?.status !== `pending` || t.isChecking || e == null) return;
        let n = { ...t, isChecking: !0 };
        ct(n);
        let r = await st(e, t.region);
        if (pt() === n) {
          if (r == null) {
            await it();
            return;
          }
          ct({ ...t, warning: r, isChecking: !1 });
        }
      }),
      (t[47] = it),
      (t[48] = c),
      (t[49] = ut))
    : (ut = t[49]);
  let dt = ut,
    ft;
  t[50] !== v || t[51] !== it || t[52] !== d || t[53] !== c
    ? ((ft = async (e) => {
        if (!v) return;
        let t = ne.appServerLifecycle;
        if (t == null) {
          G((e) =>
            e == null
              ? null
              : {
                  ...e,
                  errorMessage: d.formatMessage({
                    id: `electron.onboarding.login.bedrock.unavailable`,
                    defaultMessage: `Amazon Bedrock sign-in is unavailable on this host`,
                    description: `Error when the desktop host does not support Amazon Bedrock sign-in`,
                  }),
                },
          );
          return;
        }
        G(Jn);
        let n = { status: `pending`, warning: null, region: e.region, isChecking: !0 };
        ct(n);
        try {
          let r = await Ve(c, t, e);
          if (pt() !== n) return;
          if (r != null && !c.get(he)) {
            ct({ status: `pending`, warning: r, region: e.region, isChecking: !1 });
            return;
          }
          await it();
        } catch (t) {
          let r = t;
          if (pt() !== n) return;
          (ct(null),
            G((t) => {
              if (t == null) return null;
              let n = fe(r),
                i =
                  e.method === `profile` &&
                  n.startsWith(`failed to load credentials for AWS profile \`${e.profile.trim()}\`:`)
                    ? d.formatMessage(
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
      (t[50] = v),
      (t[51] = it),
      (t[52] = d),
      (t[53] = c),
      (t[54] = ft))
    : (ft = t[54]);
  let mt = ft,
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
      q.current ??
        (typeof window > `u` ||
          (`AudioContext` in window &&
            ((q.current = new window.AudioContext()),
            q.current.state === `suspended` && q.current.resume())));
    };
    ((vt = () => {
      (e(), de(!0));
    }),
      (t[56] = vt));
  } else vt = t[56];
  let bt = vt,
    xt;
  t[57] !== I || t[58] !== d || t[59] !== c
    ? ((xt = async () => {
        let e = I;
        e != null &&
          (await g(e)) &&
          c
            .get(se)
            .success(
              d.formatMessage({
                id: `electron.onboarding.login.linkCopied`,
                defaultMessage: `Sign-in link copied`,
                description: `Toast confirming that the active browser sign-in link was copied so the user can paste it into another browser`,
              }),
            );
      }),
      (t[57] = I),
      (t[58] = d),
      (t[59] = c),
      (t[60] = xt))
    : (xt = t[60]);
  let St = xt,
    wt;
  t[61] !== p ||
  t[62] !== h.chatgpt ||
  t[63] !== h.status ||
  t[64] !== S ||
  t[65] !== u ||
  t[66] !== m ||
  t[67] !== c ||
  t[68] !== k ||
  t[69] !== Re ||
  t[70] !== w ||
  t[71] !== l ||
  t[72] !== s
    ? ((wt = async (e, t) => {
        let n = e === void 0 ? `signin` : e;
        if (Ie.has(c.node)) {
          Ie.get(c.node)?.cancel();
          return;
        }
        if (z.current != null) {
          (z.current.abort(), (z.current = null), j(null));
          return;
        }
        if (S == null || h.status !== `ready` || !h.chatgpt) return;
        let i = n === `signin` || n === `signup` || n === `other-account` ? `chatgpt` : n;
        gt(c, P, { method: i, ...S });
        let a = R(c.get(Oe, `local`), `gatewayOAuth`) ? yt() : null,
          o = new AbortController();
        ((z.current = o), j(o));
        let d = !1,
          f = !1;
        await (async () => {
          try {
            let { useDesktopAuth: e, useStreamlinedLoginUx: f } = tn(Je(w, rn)),
              {
                authUrl: h,
                completion: g,
                setBrowserUrl: _,
              } = await we({
                scope: c,
                signal: o.signal,
                useHostedLoginSuccessPage: !0,
                useStreamlinedLogin: f,
              });
            if (h && !o.signal.aborted) {
              let r = e && !s ? (await ne.appInfo.get()).chatGptDesktopAuthOrigin : void 0;
              if (o.signal.aborted) return;
              let i = Sn(h, n),
                a = Ft({
                  authUrl: i,
                  codexAppVersion: Nt(c),
                  desktopAuthOrigin: r,
                  includeCodexOriginStableId: !0,
                  loginHint: t,
                  useDesktopAuth: e && !s,
                  useStreamlinedLoginUx: f,
                });
              _(a) && _e({ href: a, initiator: `open_in_browser_bridge`, openTarget: `external-browser` });
            }
            let v = await g;
            if (o.signal.aborted) return;
            if (v.success) {
              d = !0;
              let e = { method: i, ...S, ...Tt(v.onboardingEntrypoint) };
              if (
                (a == null ? gt(c, r, e) : a(e),
                m.removeQueries({ queryKey: [`vscode`, `account-info`], exact: !0 }),
                s)
              ) {
                (l(), await u(p(`/`), { replace: !0 }));
                return;
              }
              (Re(),
                c.set(xe, !0),
                v.onboardingEntrypoint != null && Ct(c, v.onboardingEntrypoint),
                c.set(Ut, v.onboardingEntrypoint),
                l(),
                u(p(`/welcome`), { replace: !0 }));
            } else (gt(c, D, { method: i, errorKind: Cn(v.error), ...S }), k(fe(v.error ?? `Unknown error`)));
          } catch (e) {
            let t = e;
            if (t instanceof Error && t.name === `AbortError`) {
              ((f = !0), gt(c, D, { method: i, errorKind: `abort`, ...S }));
              return;
            }
            (gt(c, D, { method: i, errorKind: Cn(t), ...S }), k(fe(t)));
          }
        })().finally(() => {
          let e = [`chatgpt-browser-session-profiles`, !0];
          (!d &&
            !f &&
            !o.signal.aborted &&
            (z.current == null || z.current === o) &&
            m.getQueryData(e)?.length === 0 &&
            m.resetQueries({ queryKey: e, exact: !0 }),
            z.current === o && (z.current = null),
            j((e) => (e === o ? null : e)));
        });
      }),
      (t[61] = p),
      (t[62] = h.chatgpt),
      (t[63] = h.status),
      (t[64] = S),
      (t[65] = u),
      (t[66] = m),
      (t[67] = c),
      (t[68] = k),
      (t[69] = Re),
      (t[70] = w),
      (t[71] = l),
      (t[72] = s),
      (t[73] = wt))
    : (wt = t[73]);
  let Et = wt,
    Dt;
  t[74] !== pe ||
  t[75] !== p ||
  t[76] !== Te ||
  t[77] !== h.api ||
  t[78] !== h.status ||
  t[79] !== S ||
  t[80] !== u ||
  t[81] !== c ||
  t[82] !== k ||
  t[83] !== Re ||
  t[84] !== l ||
  t[85] !== s
    ? ((Dt = async () => {
        let e = pe.trim();
        if (!e || Te || S == null || h.status !== `ready` || !h.api) return;
        let t = new AbortController();
        (be(t),
          await (async () => {
            try {
              if ((await Ce(c, M).loginWithApiKey(e), t.signal.aborted)) return;
              if ((gt(c, r, { method: `apikey`, ...S }), s)) {
                (l(), await u(p(`/`), { replace: !0 }));
                return;
              }
              (Re(), c.set(xe, !0), c.set(Ut, void 0), l(), u(p(`/welcome`), { replace: !0 }));
            } catch (e) {
              let n = e;
              if (t.signal.aborted) return;
              (gt(c, D, { method: `apikey`, errorKind: Cn(n), ...S }), k(fe(n)));
            }
          })().finally(() => {
            be((e) => (e === t ? null : e));
          }));
      }),
      (t[74] = pe),
      (t[75] = p),
      (t[76] = Te),
      (t[77] = h.api),
      (t[78] = h.status),
      (t[79] = S),
      (t[80] = u),
      (t[81] = c),
      (t[82] = k),
      (t[83] = Re),
      (t[84] = l),
      (t[85] = s),
      (t[86] = Dt))
    : (Dt = t[86]);
  let Ot = Dt;
  if (K?.status === `pending`) {
    let e;
    return (
      t[87] !== K.isChecking || t[88] !== K.warning || t[89] !== it || t[90] !== dt || t[91] !== c
        ? ((e = (0, $.jsx)(Be, {
            children:
              K.warning == null
                ? (0, $.jsxs)(`div`, {
                    className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description`,
                    children: [
                      (0, $.jsx)(n, { className: `h-4 w-4 text-default` }),
                      (0, $.jsx)(U, {
                        id: `electron.onboarding.login.bedrock.finishing`,
                        defaultMessage: `Finishing Amazon Bedrock sign-in…`,
                        description: `Loading message while Bedrock sign-in saves credentials, restarts the app server, and checks GovCloud configuration`,
                      }),
                    ],
                  })
                : (0, $.jsx)(Ge, {
                    unverified: K.warning === `unverified`,
                    isChecking: K.isChecking,
                    onRetry: dt,
                    onContinue: async () => {
                      (c.set(he, !0), await it());
                    },
                  }),
          })),
          (t[87] = K.isChecking),
          (t[88] = K.warning),
          (t[89] = it),
          (t[90] = dt),
          (t[91] = c),
          (t[92] = e))
        : (e = t[92]),
      e
    );
  }
  if (F != null && F.stage !== `chatgpt`) {
    let e;
    return (
      t[93] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Le, {})), (t[93] = e))
        : (e = t[93]),
      e
    );
  }
  if (h.status !== `ready` || (!h.api && !h.chatgpt)) {
    let e;
    return (
      t[94] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Be, { children: (0, $.jsx)(Yt, { hostId: M }) })), (t[94] = e))
        : (e = t[94]),
      e
    );
  }
  if (S == null) {
    let e;
    return (
      t[95] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Be, {
            children: (0, $.jsxs)(`div`, {
              className: `flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description`,
              children: [
                (0, $.jsx)(n, { className: `h-4 w-4 text-default` }),
                (0, $.jsx)(U, {
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
  if (v && W != null) {
    let e, n;
    t[96] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          ((Me.current += 1), G(null));
        }),
        (n = () => {
          G(qn);
        }),
        (t[96] = e),
        (t[97] = n))
      : ((e = t[96]), (n = t[97]));
    let r;
    return (
      t[98] !== W.detectedCredentials ||
      t[99] !== W.errorMessage ||
      t[100] !== W.isDetecting ||
      t[101] !== W.isSubmitting ||
      t[102] !== W.supportsAccessKeys ||
      t[103] !== W.supportsAwsCredentials ||
      t[104] !== Ze ||
      t[105] !== mt
        ? ((r = (0, $.jsx)(Be, {
            fullBleed: !0,
            children: (0, $.jsx)(gn, {
              detectedCredentials: W.detectedCredentials,
              errorMessage: W.errorMessage,
              isDetecting: W.isDetecting,
              isSubmitting: W.isSubmitting,
              supportsAwsCredentials: W.supportsAwsCredentials,
              supportsAccessKeys: W.supportsAccessKeys,
              onBack: e,
              onClearError: n,
              onDetectCredentials: Ze,
              onSubmit: mt,
            }),
          })),
          (t[98] = W.detectedCredentials),
          (t[99] = W.errorMessage),
          (t[100] = W.isDetecting),
          (t[101] = W.isSubmitting),
          (t[102] = W.supportsAccessKeys),
          (t[103] = W.supportsAwsCredentials),
          (t[104] = Ze),
          (t[105] = mt),
          (t[106] = r))
        : (r = t[106]),
      r
    );
  }
  let kt;
  t[107] !== pe ||
  t[108] !== I ||
  t[109] !== Ot ||
  t[110] !== Et ||
  t[111] !== St ||
  t[112] !== ie ||
  t[113] !== Te ||
  t[114] !== L ||
  t[115] !== ce ||
  t[116] !== ue ||
  t[117] !== h.api ||
  t[118] !== h.chatgpt ||
  t[119] !== E ||
  t[120] !== Ke ||
  t[121] !== $e
    ? ((kt = ue
        ? (0, $.jsx)(`div`, {
            className: `flex h-full w-full`,
            children: (0, $.jsx)(sn, { onExit: _t, audioContextRef: q }),
          })
        : (0, $.jsx)(Bn, {
            allowApiKey: h.api,
            allowChatGpt: h.chatgpt,
            apiKeyHelpVariant: void 0,
            apiKeyValue: pe,
            canCopySignInLink: I != null,
            isApiKeyEntryVisible: ie,
            isOtherSignInMethodsVisible: ce,
            isApiKeySignInPending: Te,
            isChatGptSignInPending: L,
            showAmazonBedrockSignIn: E,
            onApiKeySubmit: Ot,
            onApiKeyValueChange: me,
            onChatGptSignIn: Et,
            onChatGptSignUp: () => Et(`signup`),
            onCopySignInLink: St,
            onPlaySnake: bt,
            onResetApiKeyEntry: Ue,
            onShowApiKeyEntry: Ke,
            onShowOtherSignInMethods: () => le(!0),
            onHideOtherSignInMethods: () => le(!1),
            onShowBedrockSetup: $e,
          })),
      (t[107] = pe),
      (t[108] = I),
      (t[109] = Ot),
      (t[110] = Et),
      (t[111] = St),
      (t[112] = ie),
      (t[113] = Te),
      (t[114] = L),
      (t[115] = ce),
      (t[116] = ue),
      (t[117] = h.api),
      (t[118] = h.chatgpt),
      (t[119] = E),
      (t[120] = Ke),
      (t[121] = $e),
      (t[122] = kt))
    : (kt = t[122]);
  let At;
  return (
    t[123] !== ue || t[124] !== kt
      ? ((At = (0, $.jsx)(Be, { fullBleed: !0, hideHeader: ue, children: kt })),
        (t[123] = ue),
        (t[124] = kt),
        (t[125] = At))
      : (At = t[125]),
    At
  );
}
function qn(e) {
  return e?.errorMessage == null ? e : { ...e, errorMessage: null };
}
function Jn(e) {
  return e == null ? null : { ...e, errorMessage: null, isSubmitting: !0 };
}
function Yn(e) {
  return e == null ? null : { ...e, errorMessage: null, isDetecting: !0 };
}
var Xn, Q, $;
function Zn() {
  return (Zn = e(() => {
    ((Xn = y()),
      S(),
      p(),
      F(),
      le(),
      (Q = c()),
      O(),
      _(),
      ke(),
      Re(),
      q(),
      ze(),
      Ae(),
      lt(),
      qe(),
      V(),
      E(),
      me(),
      Wt(),
      ht(),
      ut(),
      vt(),
      L(),
      a(),
      K(),
      Pt(),
      _t(),
      on(),
      b(),
      wt(),
      De(),
      hn(),
      Ue(),
      xn(),
      tt(),
      Fe(),
      Ke(),
      bt(),
      Gt(),
      Kt(),
      Dn(),
      Gn(),
      ($ = f()));
  }))();
}
function Qn() {
  let e = (0, $n.c)(6),
    [t] = k();
  {
    let n;
    e[1] === t ? (n = e[2]) : ((n = t.get(`workspaceRecovery`)), (e[1] = t), (e[2] = n));
    let r = n === `true`,
      i;
    return (
      e[3] === r ? (i = e[4]) : ((i = (0, er.jsx)(Kn, { workspaceRecovery: r })), (e[3] = r), (e[4] = i)),
      i
    );
  }
}
var $n, er;
function tr() {
  return (tr = e(() => {
    (($n = y()), _(), It(), en(), Zn(), (er = f()));
  }))();
}
tr();
export { Qn as LoginRoute };
//# sourceMappingURL=login-route-d050c364b98c.js.map
