import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $St as r,
  $st as i,
  AY as a,
  Ax as o,
  BY as s,
  Bst as c,
  CE as l,
  CNt as u,
  Cit as d,
  DB as f,
  FBt as p,
  HO as m,
  IO as h,
  JO as g,
  Jj as _,
  KO as v,
  LNt as y,
  LO as b,
  MNt as x,
  Mz as S,
  NNt as C,
  Nst as w,
  OB as T,
  Oz as E,
  PBt as D,
  Pst as O,
  Q4 as k,
  Qst as A,
  RO as j,
  Rgt as M,
  SCt as ee,
  SE as N,
  Vrt as te,
  WO as P,
  XO as F,
  XOt as I,
  Y3 as L,
  YO as R,
  Yj as z,
  Z3 as B,
  Z4 as V,
  ZSt as H,
  _D as U,
  bit as W,
  cmt as G,
  dO as K,
  e6 as q,
  fD as J,
  iCt as ne,
  iFt as Y,
  jx as re,
  jz as X,
  kY as ie,
  lO as ae,
  mCt as oe,
  mD as se,
  nB as ce,
  nCt as le,
  okt as Z,
  pD as ue,
  qO as de,
  qrt as fe,
  rB as pe,
  sct as me,
  tCt as he,
  tkt as Q,
  wit as ge,
  yft as _e,
  yit as ve,
  zO as ye,
  zY as be,
  zst as xe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Zn as Se,
  AVr as Ce,
  Fnt as we,
  Hcn as Te,
  Hrt as Ee,
  Hyt as De,
  J7n as Oe,
  JZn as ke,
  K8t as Ae,
  Km as je,
  MOr as Me,
  Mnt as Ne,
  Nnr as Pe,
  Nnt as Fe,
  PVr as Ie,
  QJr as Le,
  SRn as Re,
  Srt as ze,
  Tgr as Be,
  Trt as Ve,
  Ucn as He,
  Uyt as Ue,
  Vrt as We,
  X7n as Ge,
  ZZn as Ke,
  _p as qe,
  aQn as Je,
  aa as Ye,
  bRn as Xe,
  cQn as Ze,
  cbt as Qe,
  d_t as $e,
  eQn as et,
  gp as tt,
  ia as nt,
  j_t as rt,
  lDn as it,
  l_t as at,
  la as ot,
  nQn as st,
  oQn as ct,
  q8t as lt,
  qm as ut,
  rQn as dt,
  sDn as ft,
  sbt as pt,
  ua as mt,
  wgr as ht,
  zOr as gt,
} from "./app-initial-ad16eaadf81f.js";
import { n as _t, r as vt } from "./highlight-selectors-bd7f51f2a7ad.js";
import { a as yt, i as bt, o as xt, r as St, s as Ct } from "./use-diff-annotations-a6f2dca78adc.js";
import { i as wt, r as Tt, s as Et, t as Dt } from "./pull-request-actions-1356e7202c75.js";
import { n as Ot, r as kt } from "./pull-request-code-review-navigation-8765a5adf3d2.js";
import { a as At, i as jt, t as Mt } from "./pull-request-detail-model-97a5167bd1c2.js";
import { n as Nt, t as Pt } from "./arrow-curved-right-83f604cf338b.js";
import { n as Ft, r as It, t as Lt } from "./base-file-tree-37c729271893.js";
import { n as Rt, t as zt } from "./scroll-to-match-5e0f8e5e5abc.js";
function Bt(e) {
  let t = (0, Ut.c)(5),
    { path: n, skipFindHighlight: r } = e,
    i = ne(at),
    a = ne($e)?.id ?? null,
    o = (0, Wt.useRef)(!1),
    s;
  return (
    t[0] !== i || t[1] !== a || t[2] !== n || t[3] !== r
      ? ((s = (e) => {
          let t = !r && i != null;
          (t || o.current) &&
            ((o.current = t),
            Vt({ activeDiffResult: i, activeMatchId: a, fileDiffElement: e, path: n, skipFindHighlight: r }));
        }),
        (t[0] = i),
        (t[1] = a),
        (t[2] = n),
        (t[3] = r),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
function Vt({ activeDiffResult: e, activeMatchId: t, fileDiffElement: n, path: r, skipFindHighlight: i }) {
  if ((ke(n, { includeShadowRoots: !0 }), i || e == null)) return;
  let a = _t(e.matches).get(r);
  a != null &&
    a.length !== 0 &&
    (Ht({ activeMatchId: t, fileDiffElement: n, query: e.query, sourceMatches: a }) ||
      st({ target: n, query: e.query, maxMatches: a.length, includeShadowRoots: !0 }).matches.forEach(
        (e, n) => {
          let r = a[n];
          r != null &&
            e.forEach((e) => {
              (ct({ element: e, matchId: r.id }), Je(e, r.id === t));
            });
        },
      ));
}
function Ht({ activeMatchId: e, fileDiffElement: t, query: n, sourceMatches: r }) {
  if (r.some((e) => e.location.domain === `diff` && e.location.hunkId === `path`)) return !1;
  let i = new Map();
  for (let e of r) {
    if (e.location.domain !== `diff` || e.location.lineStart !== e.location.lineEnd) continue;
    let t = `${e.location.side ?? `unified`}:${e.location.lineStart}`,
      n = i.get(t) ?? { lineNumber: e.location.lineStart, side: e.location.side, matches: [] };
    (n.matches.push(e), i.set(t, n));
  }
  let a = !1,
    o = !1;
  for (let r of i.values()) {
    a = !0;
    let i = Se({ container: t, lineNumber: r.lineNumber, side: r.side, includeShadowRoots: !0 });
    i != null &&
      ((o = !0),
      st({ target: i, query: n, maxMatches: r.matches.length, includeShadowRoots: !1 }).matches.forEach(
        (t, n) => {
          let i = r.matches[n];
          i != null &&
            t.forEach((t) => {
              (ct({ element: t, matchId: i.id }), Je(t, i.id === e));
            });
        },
      ));
  }
  return o || (a && (t.matches(`[data-line]`) || t.querySelector(`[data-line]`) != null));
}
var Ut, Wt;
function Gt() {
  return (Gt = e(() => {
    ((Ut = D()), H(), (Wt = p()), dt(), vt(), rt());
  }))();
}
function Kt(e) {
  if (Yt(e))
    return tn(e.href)
      ? ($t(e, qt({ alt: e.text, block: !1, mediaKind: `image`, raw: e.raw, title: e.title, url: e.href })),
        !0)
      : !1;
  if (Zt(e)) {
    let t = e.tokens[0];
    if (e.tokens.length === 1 && Xt(t) && nn(t.href))
      return (
        $t(
          e,
          qt({
            alt: t.text === t.href ? `` : t.text,
            block: !0,
            mediaKind: `video`,
            raw: e.raw,
            title: t.title ?? null,
            url: t.href,
          }),
        ),
        !0
      );
  }
  if (Jt(e)) {
    let t = Qt(e);
    return t != null && ($t(e, qt({ ...t, block: e.block })), !0);
  }
  if (e.type === `table`) {
    let t = !1;
    return (
      on.walkTokens([e], (n) => {
        n !== e && (t = Kt(n) || t);
      }),
      t
    );
  }
  return !(`tokens` in e) || !Array.isArray(e.tokens) ? !1 : e.tokens.reduce((e, t) => Kt(t) || e, !1);
}
function qt({ alt: e, block: t, mediaKind: n, raw: r, title: i, url: a }) {
  let o = { alt: e, kind: n, src: a };
  return (i != null && (o.title = i), { type: `codexDirective`, raw: r, name: an, attributes: o, block: t });
}
function Jt(e) {
  return (
    e.type === `html` &&
    `block` in e &&
    typeof e.block == `boolean` &&
    `text` in e &&
    typeof e.text == `string`
  );
}
function Yt(e) {
  return (
    e.type === `image` &&
    `href` in e &&
    typeof e.href == `string` &&
    `text` in e &&
    typeof e.text == `string` &&
    `title` in e &&
    (e.title == null || typeof e.title == `string`)
  );
}
function Xt(e) {
  return (
    e?.type === `link` &&
    `href` in e &&
    typeof e.href == `string` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function Zt(e) {
  return (
    e.type === `paragraph` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function Qt(e) {
  let t = e.raw.match(/^[ \t]*<(?:img|video)\b(?:[^>"']|"[^"]*"|'[^']*')*>/i)?.[0];
  if (t == null) return null;
  let n = (0, rn.parse)(t).querySelector(`img, video`);
  if (n == null) return null;
  let r = n.tagName === `VIDEO` ? `video` : `image`;
  if (r === `image` && !e.block) return null;
  let i = n.getAttribute(`src`);
  return i == null || !tn(i)
    ? null
    : {
        alt: n.getAttribute(`alt`) ?? ``,
        mediaKind: r,
        raw: t,
        title: n.getAttribute(`title`) ?? null,
        url: i,
      };
}
function $t(e, t) {
  for (let t of Reflect.ownKeys(e)) Reflect.deleteProperty(e, t);
  Object.assign(e, t);
}
function en(e) {
  let t = e.toLowerCase();
  return (
    t.includes(`github.com/user-attachments/assets/`) ||
    t.includes(`user-images.githubusercontent.com/`) ||
    t.includes(`private-user-images.githubusercontent.com/`)
  );
}
function tn(e) {
  try {
    let t = new URL(e);
    return (
      t.protocol === `https:` &&
      ((t.hostname === `github.com` && t.pathname.startsWith(`/user-attachments/assets/`)) ||
        t.hostname === `user-images.githubusercontent.com` ||
        t.hostname === `private-user-images.githubusercontent.com`)
    );
  } catch {
    return !1;
  }
}
function nn(e) {
  if (!tn(e)) return !1;
  let t = new URL(e);
  return (
    (t.hostname === `github.com` && t.pathname.startsWith(`/user-attachments/assets/`)) ||
    /\.(?:mov|mp4|webm)$/i.test(t.pathname)
  );
}
var rn, an, on, sn;
function cn() {
  return (cn = e(() => {
    (Ie(),
      (rn = Le()),
      Be(),
      (an = `pull-request-media`),
      (on = new Ce(ht)),
      (sn = {
        extensions: [
          {
            name: `pullRequestMedia`,
            level: `block`,
            tokenizer(e) {
              if (!en(e)) return;
              let t = on.lexer(e)[0];
              return t != null && Kt(t) ? t : void 0;
            },
          },
        ],
      }));
  }))();
}
function ln(e) {
  let t = (0, hn.c)(27),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ request: o, children: n, directives: r, extensions: i, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s;
  t[6] === i ? (s = t[7]) : ((s = i == null ? vn : [sn, ...i]), (t[6] = i), (t[7] = s));
  let c = s;
  if (o == null) {
    let e;
    t[8] === n ? (e = t[9]) : ((e = Ye(n)), (t[8] = n), (t[9] = e));
    let o;
    return (
      t[10] !== r || t[11] !== i || t[12] !== a || t[13] !== e
        ? ((o = (0, $.jsx)(un, { ...a, directives: r, extensions: i, children: e })),
          (t[10] = r),
          (t[11] = i),
          (t[12] = a),
          (t[13] = e),
          (t[14] = o))
        : (o = t[14]),
      o
    );
  }
  let l;
  t[15] === r ? (l = t[16]) : ((l = { ...r, [an]: pn }), (t[15] = r), (t[16] = l));
  let u;
  t[17] === n ? (u = t[18]) : ((u = Ye(n)), (t[17] = n), (t[18] = u));
  let d;
  t[19] !== c || t[20] !== a || t[21] !== l || t[22] !== u
    ? ((d = (0, $.jsx)(un, { ...a, directives: l, extensions: c, children: u })),
      (t[19] = c),
      (t[20] = a),
      (t[21] = l),
      (t[22] = u),
      (t[23] = d))
    : (d = t[23]);
  let f;
  return (
    t[24] !== o || t[25] !== d
      ? ((f = (0, $.jsx)(_n, { value: o, children: d })), (t[24] = o), (t[25] = d), (t[26] = f))
      : (f = t[26]),
    f
  );
}
function un(e) {
  let t = (0, hn.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)($.Fragment, { children: (0, $.jsx)(ot, { ...e, allowPlayableMedia: !1 }) }),
            null,
          ],
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function dn(e) {
  let t = (0, hn.c)(19),
    { request: r, alt: i, className: a, mediaKind: o, title: s, url: c } = e,
    l;
  t[0] !== r || t[1] !== c ? ((l = { ...r, url: c }), (t[0] = r), (t[1] = c), (t[2] = l)) : (l = t[2]);
  let { data: u, isLoading: d } = le(Ve, l);
  Z();
  let [f, p] = (0, gn.useState)(null);
  if (d) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(n, { className: `icon-sm` })), (t[3] = e))
      : (e = t[3]);
    let r;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((r = (0, $.jsxs)(`div`, {
            className: `inline-flex min-h-24 min-w-40 items-center justify-center gap-2 rounded-md bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(Q, {
                  id: `codex.pullRequests.media.loading`,
                  defaultMessage: `Loading GitHub media…`,
                  description: `Loading label for a pull request media attachment`,
                }),
              }),
            ],
          })),
          (t[4] = r))
        : (r = t[4]),
      r
    );
  }
  if (f === c || u?.status !== `success` || !mn(u.mimeType, o)) {
    let e;
    return (t[5] === c ? (e = t[6]) : ((e = (0, $.jsx)(fn, { url: c })), (t[5] = c), (t[6] = e)), e);
  }
  let { contentsBase64: m, mimeType: h } = u;
  if (o === `video` && !h.startsWith(`image/`)) {
    let e;
    return (
      t[7] === c
        ? (e = t[8])
        : ((e = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)($.Fragment, { children: (0, $.jsx)(fn, { url: c, openExternally: !0 }) }),
              null,
            ],
          })),
          (t[7] = c),
          (t[8] = e)),
      e
    );
  }
  let g;
  t[9] === a
    ? (g = t[10])
    : ((g = x(`block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md object-contain shadow-md`, a)),
      (t[9] = a),
      (t[10] = g));
  let _ = `data:${h};base64,${m}`,
    v;
  t[11] === c ? (v = t[12]) : ((v = () => p(c)), (t[11] = c), (t[12] = v));
  let y;
  return (
    t[13] !== i || t[14] !== g || t[15] !== _ || t[16] !== v || t[17] !== s
      ? ((y = (0, $.jsx)(`img`, { alt: i, className: g, loading: `lazy`, src: _, title: s, onError: v })),
        (t[13] = i),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v),
        (t[17] = s),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function fn(e) {
  let t = (0, hn.c)(7),
    { url: n, openExternally: r } = e,
    i = r !== void 0 && r,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`span`, {
        role: `status`,
        children: (0, $.jsx)(Q, {
          id: `codex.pullRequests.media.unavailable`,
          defaultMessage: `Preview unavailable`,
          description: `Message shown when a pull request media attachment cannot be previewed`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] !== i || t[2] !== n
    ? ((o = (e) => {
        Re({
          event: e,
          href: n,
          initiator: `open_in_browser_bridge`,
          openTarget: i ? `external-browser` : void 0,
        });
      }),
      (t[1] = i),
      (t[2] = n),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(Q, {
        id: `codex.pullRequests.media.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Button label for opening a pull request attachment on GitHub`,
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === o
      ? (c = t[6])
      : ((c = (0, $.jsxs)(`div`, {
          className: `my-3 flex min-h-24 min-w-40 flex-col items-center justify-center gap-2 rounded-lg bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
          children: [a, (0, $.jsx)(L, { color: `outline`, onClick: o, children: s })],
        })),
        (t[5] = o),
        (t[6] = c)),
    c
  );
}
function pn(e) {
  let t = (0, hn.c)(6),
    { attributes: n } = e,
    r = (0, gn.useContext)(_n),
    i = n.kind,
    a = n.src;
  if (r == null || (i !== `image` && i !== `video`) || typeof a != `string`) return null;
  let o = typeof n.alt == `string` ? n.alt : ``,
    s = typeof n.title == `string` ? n.title : void 0,
    c;
  return (
    t[0] !== i || t[1] !== r || t[2] !== o || t[3] !== s || t[4] !== a
      ? ((c = (0, $.jsx)(dn, { request: r, alt: o, className: `my-3`, mediaKind: i, title: s, url: a })),
        (t[0] = i),
        (t[1] = r),
        (t[2] = o),
        (t[3] = s),
        (t[4] = a),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function mn(e, t) {
  return e.startsWith(`image/`) || e === `application/octet-stream` || e.startsWith(`${t}/`);
}
var hn, gn, $, _n, vn;
function yn() {
  return (yn = e(() => {
    ((hn = D()),
      C(),
      H(),
      (gn = p()),
      I(),
      B(),
      Xe(),
      q(),
      nt(),
      mt(),
      ze(),
      cn(),
      ($ = y()),
      (_n = (0, gn.createContext)(null)),
      (vn = [sn]));
  }))();
}
function bn(e) {
  let t = (0, Sn.c)(21),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ ref: i, value: a, onKeyDown: n, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = (0, Cn.useRef)(null),
    s;
  t[5] === a.length ? (s = t[6]) : ((s = (e, t) => xn(t, a.length > 0)), (t[5] = a.length), (t[6] = s));
  let c = K(s),
    l;
  t[7] === a.length
    ? (l = t[8])
    : ((l = () => {
        o.current != null && xn(o.current, a.length > 0);
      }),
      (t[7] = a.length),
      (t[8] = l));
  let u;
  (t[9] === a ? (u = t[10]) : ((u = [a]), (t[9] = a), (t[10] = u)), (0, Cn.useLayoutEffect)(l, u));
  let d;
  t[11] !== c || t[12] !== i ? ((d = z(i, o, c)), (t[11] = c), (t[12] = i), (t[13] = d)) : (d = t[13]);
  let f;
  t[14] === n
    ? (f = t[15])
    : ((f = (e) => {
        (n?.(e),
          !e.defaultPrevented &&
            !e.nativeEvent.isComposing &&
            (e.metaKey || e.ctrlKey) &&
            e.key === `Enter` &&
            (e.preventDefault(), e.currentTarget.form?.requestSubmit()));
      }),
      (t[14] = n),
      (t[15] = f));
  let p;
  return (
    t[16] !== r || t[17] !== d || t[18] !== f || t[19] !== a
      ? ((p = (0, wn.jsx)(`textarea`, {
          ...r,
          ref: d,
          className: `block min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-0 pt-2.5 pb-0 text-base leading-7 text-default outline-none placeholder:text-tertiary`,
          rows: 1,
          value: a,
          onKeyDown: f,
        })),
        (t[16] = r),
        (t[17] = d),
        (t[18] = f),
        (t[19] = a),
        (t[20] = p))
      : (p = t[20]),
    p
  );
}
function xn(e, t) {
  if (!t) {
    e.style.removeProperty(`height`);
    return;
  }
  ((e.style.height = `auto`), (e.style.height = `${Math.min(e.scrollHeight, Tn)}px`));
}
var Sn, Cn, wn, Tn;
function En() {
  return (En = e(() => {
    ((Sn = D()), (Cn = p()), ae(), _(), (wn = y()), (Tn = 192));
  }))();
}
var Dn;
function On() {
  return (On = e(() => {
    (H(),
      We(),
      i(),
      c(),
      d(),
      (Dn = oe(A, ({ request: e, source: t }) => ({
        enabled: e.scope === `mentions` || e.query.length > 0,
        queryFn: async ({ signal: n }) => {
          let r = await Ee(`gh-user-search`, e, { signal: n, source: t });
          if (r.status === `error`) throw Error(r.error);
          return r.users;
        },
        queryKey: W(`gh-user-search`, e),
        retry: !1,
        staleTime: xe.ONE_MINUTE,
      }))));
  }))();
}
function kn(e) {
  let t = (0, Pn.c)(119),
    {
      ariaLabel: n,
      autoFocus: r,
      body: i,
      disabled: a,
      placeholder: o,
      request: s,
      source: c,
      onBodyChange: l,
    } = e,
    u = Z(),
    d = (0, In.useId)(),
    f = (0, In.useRef)(null),
    p = (0, In.useRef)(null),
    [m, h] = (0, In.useState)(-1),
    [g, _] = (0, In.useState)(null),
    v = g?.query ?? ``,
    y = He(v, Rn),
    b = g != null && !a,
    x;
  t[0] === s ? (x = t[1]) : ((x = { ...s, query: ``, scope: `mentions` }), (t[0] = s), (t[1] = x));
  let S;
  t[2] !== c || t[3] !== x
    ? ((S = { request: x, source: c }), (t[2] = c), (t[3] = x), (t[4] = S))
    : (S = t[4]);
  let C;
  t[5] === b ? (C = t[6]) : ((C = { enabled: b }), (t[5] = b), (t[6] = C));
  let { data: w, isError: T, isLoading: E } = le(Dn, S, C),
    D = b && v.length >= 2 && y === v,
    O;
  t[7] !== y || t[8] !== s
    ? ((O = { ...s, query: y, scope: `mentions` }), (t[7] = y), (t[8] = s), (t[9] = O))
    : (O = t[9]);
  let k;
  t[10] !== c || t[11] !== O
    ? ((k = { request: O, source: c }), (t[10] = c), (t[11] = O), (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] === D ? (A = t[14]) : ((A = { enabled: D }), (t[13] = D), (t[14] = A));
  let { data: j, isError: M, isLoading: ee } = le(Dn, k, A),
    N,
    te,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G,
    K,
    q,
    ne,
    Y,
    re,
    X,
    ie,
    ae;
  if (
    t[15] !== g ||
    t[16] !== n ||
    t[17] !== r ||
    t[18] !== i ||
    t[19] !== D ||
    t[20] !== M ||
    t[21] !== ee ||
    t[22] !== j ||
    t[23] !== a ||
    t[24] !== m ||
    t[25] !== u ||
    t[26] !== d ||
    t[27] !== v ||
    t[28] !== b ||
    t[29] !== l ||
    t[30] !== T ||
    t[31] !== E ||
    t[32] !== w ||
    t[33] !== o
  ) {
    let e = w?.filter((e) => {
      let { login: t } = e;
      return t.toLowerCase().includes(v.toLowerCase());
    });
    I =
      w == null && (!D || j == null) ? void 0 : (0, Fn.default)([...(e ?? []), ...(D ? (j ?? []) : [])], Mn);
    let s = (I?.length ?? 0) > 0,
      c = E || (v.length >= 2 && (!D || ee)),
      h = T || (D && M),
      y = b && (v.length !== 1 || s),
      x;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((x = (e) => {
          let t = Nn(e),
            n = p.current;
          if (t != null && n != null && t.from === n.from && t.query.startsWith(n.query)) {
            _(null);
            return;
          }
          ((p.current = null), _(t));
        }),
        (t[56] = x))
      : (x = t[56]);
    let S = x,
      C;
    t[57] === g
      ? (C = t[58])
      : ((C = () => {
          ((p.current = g), _(null));
        }),
        (t[57] = g),
        (t[58] = C));
    let O = C,
      k;
    (t[59] !== g || t[60] !== i || t[61] !== l
      ? ((k = (e) => {
          if (g == null) return;
          let t = i.slice(g.to),
            n = t === `` ? ` ` : ``,
            r = `@${e.login}${n}`,
            a = `${i.slice(0, g.from)}${r}${t}`,
            o = g.from + r.length;
          (l(a),
            (p.current = { from: g.from, query: e.login, to: g.from + e.login.length + 1 }),
            _(null),
            requestAnimationFrame(() => {
              (f.current?.focus(), f.current?.setSelectionRange(o, o));
            }));
        }),
        (t[59] = g),
        (t[60] = i),
        (t[61] = l),
        (t[62] = k))
      : (k = t[62]),
      (F = k));
    let A = null;
    if (!s) {
      if (c) {
        let e;
        (t[63] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ln.jsx)(Q, {
              id: `pullRequestsPage.detail.commentInput.mentions.loading`,
              defaultMessage: `Searching GitHub users…`,
              description: `Loading message shown while searching for GitHub users to mention`,
            })),
            (t[63] = e))
          : (e = t[63]),
          (A = e));
      } else if (h) {
        let e;
        (t[64] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ln.jsx)(Q, {
              id: `pullRequestsPage.detail.commentInput.mentions.error`,
              defaultMessage: `Couldn’t search GitHub users`,
              description: `Error shown when GitHub user mention suggestions fail to load`,
            })),
            (t[64] = e))
          : (e = t[64]),
          (A = e));
      } else if (I != null) {
        let e;
        (t[65] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Ln.jsx)(Q, {
              id: `pullRequestsPage.detail.commentInput.mentions.empty`,
              defaultMessage: `No GitHub users found`,
              description: `Empty state shown when no GitHub users match a mention query`,
            })),
            (t[65] = e))
          : (e = t[65]),
          (A = e));
      }
    }
    ((P = J), (Y = y));
    let oe = y && s && m >= 0 ? `${d}-option-${m}` : void 0,
      ce = y && s ? d : void 0,
      le;
    t[66] === Symbol.for(`react.memo_cache_sentinel`) ? ((le = () => _(null)), (t[66] = le)) : (le = t[66]);
    let Z;
    t[67] === l
      ? (Z = t[68])
      : ((Z = (e) => {
          (l(e.currentTarget.value), S(e.currentTarget));
        }),
        (t[67] = l),
        (t[68] = Z));
    let de;
    t[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((de = (e) => {
          S(e.currentTarget);
        }),
        (t[69] = de))
      : (de = t[69]);
    let fe;
    t[70] !== O || t[71] !== s || t[72] !== y
      ? ((fe = (e) => {
          if (!e.nativeEvent.isComposing) {
            if ((e.metaKey || e.ctrlKey) && e.key === `Enter`) {
              (e.preventDefault(), O(), e.currentTarget.form?.requestSubmit());
              return;
            }
            if (y && !s && (e.key === `ArrowDown` || e.key === `ArrowUp`)) {
              e.preventDefault();
              return;
            }
            e.key === `Escape` && y && (e.preventDefault(), e.stopPropagation(), O());
          }
        }),
        (t[70] = O),
        (t[71] = s),
        (t[72] = y),
        (t[73] = fe))
      : (fe = t[73]);
    let pe;
    (t[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((pe = (e) => {
          S(e.currentTarget);
        }),
        (t[74] = pe))
      : (pe = t[74]),
      t[75] !== n ||
      t[76] !== r ||
      t[77] !== i ||
      t[78] !== a ||
      t[79] !== o ||
      t[80] !== oe ||
      t[81] !== ce ||
      t[82] !== Z ||
      t[83] !== fe
        ? ((re = (0, Ln.jsx)(ue, {
            asChild: !0,
            children: (0, Ln.jsx)(bn, {
              ref: f,
              "aria-activedescendant": oe,
              "aria-autocomplete": `list`,
              "aria-controls": ce,
              "aria-haspopup": `listbox`,
              "aria-label": n,
              autoFocus: r,
              disabled: a,
              placeholder: o,
              value: i,
              onBlur: le,
              onChange: Z,
              onFocus: de,
              onKeyDown: fe,
              onSelect: pe,
            }),
          })),
          (t[75] = n),
          (t[76] = r),
          (t[77] = i),
          (t[78] = a),
          (t[79] = o),
          (t[80] = oe),
          (t[81] = ce),
          (t[82] = Z),
          (t[83] = fe),
          (t[84] = re))
        : (re = t[84]),
      (te = se),
      (H = `start`),
      (U = `z-50 w-[var(--radix-popover-trigger-width)]`),
      (W = `top`),
      (G = 8),
      (K = !0),
      (q = jn),
      (ne = An),
      (N = je),
      (R = y),
      (z = d),
      (B = v),
      (V = !0),
      t[85] === A
        ? (X = t[86])
        : ((X = A == null ? null : (0, Ln.jsx)(`span`, { role: `status`, children: A })),
          (t[85] = A),
          (t[86] = X)),
      (ie = `github-users`),
      (ae = c && !s),
      (L =
        I?.slice(0, 10).map((e) => ({
          ariaLabel: u.formatMessage(
            {
              id: `pullRequestsPage.detail.commentInput.mentions.select`,
              defaultMessage: `Mention @{login}`,
              description: `Accessible label for selecting a GitHub user mention suggestion`,
            },
            { login: e.login },
          ),
          content: (0, Ln.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [
              (0, Ln.jsx)(`img`, {
                alt: ``,
                className: `size-6 shrink-0 rounded-full bg-white object-cover`,
                src: e.avatarUrl,
              }),
              (0, Ln.jsx)(`span`, {
                className: `truncate`,
                children: (0, Ln.jsx)(Q, {
                  id: `pullRequestsPage.detail.commentInput.mentions.login`,
                  defaultMessage: `@{login}`,
                  description: `GitHub login shown in a user mention suggestion`,
                  values: { login: e.login },
                }),
              }),
            ],
          }),
          key: e.login,
        })) ?? []),
      (t[15] = g),
      (t[16] = n),
      (t[17] = r),
      (t[18] = i),
      (t[19] = D),
      (t[20] = M),
      (t[21] = ee),
      (t[22] = j),
      (t[23] = a),
      (t[24] = m),
      (t[25] = u),
      (t[26] = d),
      (t[27] = v),
      (t[28] = b),
      (t[29] = l),
      (t[30] = T),
      (t[31] = E),
      (t[32] = w),
      (t[33] = o),
      (t[34] = N),
      (t[35] = te),
      (t[36] = P),
      (t[37] = F),
      (t[38] = I),
      (t[39] = L),
      (t[40] = R),
      (t[41] = z),
      (t[42] = B),
      (t[43] = V),
      (t[44] = H),
      (t[45] = U),
      (t[46] = W),
      (t[47] = G),
      (t[48] = K),
      (t[49] = q),
      (t[50] = ne),
      (t[51] = Y),
      (t[52] = re),
      (t[53] = X),
      (t[54] = ie),
      (t[55] = ae));
  } else
    ((N = t[34]),
      (te = t[35]),
      (P = t[36]),
      (F = t[37]),
      (I = t[38]),
      (L = t[39]),
      (R = t[40]),
      (z = t[41]),
      (B = t[42]),
      (V = t[43]),
      (H = t[44]),
      (U = t[45]),
      (W = t[46]),
      (G = t[47]),
      (K = t[48]),
      (q = t[49]),
      (ne = t[50]),
      (Y = t[51]),
      (re = t[52]),
      (X = t[53]),
      (ie = t[54]),
      (ae = t[55]));
  let oe;
  t[87] !== L || t[88] !== X || t[89] !== ie || t[90] !== ae
    ? ((oe = [{ emptyState: X, id: ie, isLoading: ae, items: L }]),
      (t[87] = L),
      (t[88] = X),
      (t[89] = ie),
      (t[90] = ae),
      (t[91] = oe))
    : (oe = t[91]);
  let ce;
  t[92] === Symbol.for(`react.memo_cache_sentinel`) ? ((ce = (e, t) => h(t)), (t[92] = ce)) : (ce = t[92]);
  let de;
  t[93] !== F || t[94] !== I
    ? ((de = (e) => {
        let t = I?.find((t) => t.login === e.key);
        t != null && F(t);
      }),
      (t[93] = F),
      (t[94] = I),
      (t[95] = de))
    : (de = t[95]);
  let fe;
  t[96] !== N || t[97] !== R || t[98] !== z || t[99] !== B || t[100] !== V || t[101] !== oe || t[102] !== de
    ? ((fe = (0, Ln.jsx)(N, {
        isActive: R,
        listboxId: z,
        query: B,
        selectOnTab: V,
        sections: oe,
        onHighlight: ce,
        onSelect: de,
      })),
      (t[96] = N),
      (t[97] = R),
      (t[98] = z),
      (t[99] = B),
      (t[100] = V),
      (t[101] = oe),
      (t[102] = de),
      (t[103] = fe))
    : (fe = t[103]);
  let pe;
  t[104] !== te ||
  t[105] !== H ||
  t[106] !== U ||
  t[107] !== W ||
  t[108] !== G ||
  t[109] !== K ||
  t[110] !== q ||
  t[111] !== ne ||
  t[112] !== fe
    ? ((pe = (0, Ln.jsx)(te, {
        align: H,
        className: U,
        side: W,
        sideOffset: G,
        unstyled: K,
        onCloseAutoFocus: q,
        onOpenAutoFocus: ne,
        children: fe,
      })),
      (t[104] = te),
      (t[105] = H),
      (t[106] = U),
      (t[107] = W),
      (t[108] = G),
      (t[109] = K),
      (t[110] = q),
      (t[111] = ne),
      (t[112] = fe),
      (t[113] = pe))
    : (pe = t[113]);
  let me;
  return (
    t[114] !== P || t[115] !== Y || t[116] !== re || t[117] !== pe
      ? ((me = (0, Ln.jsxs)(P, { open: Y, children: [re, pe] })),
        (t[114] = P),
        (t[115] = Y),
        (t[116] = re),
        (t[117] = pe),
        (t[118] = me))
      : (me = t[118]),
    me
  );
}
function An(e) {
  return e.preventDefault();
}
function jn(e) {
  return e.preventDefault();
}
function Mn(e) {
  let { login: t } = e;
  return t.toLowerCase();
}
function Nn(e) {
  let { selectionEnd: t, selectionStart: n, value: r } = e;
  if (n !== t) return null;
  let i = /(^|[^A-Za-z0-9_-])@([A-Za-z0-9_-]*)$/.exec(r.slice(0, n));
  if (i == null) return null;
  let a = i[2] ?? ``,
    o = /^[A-Za-z0-9_-]*/.exec(r.slice(n))?.[0];
  return { from: n - a.length - 1, query: a, to: n + (o?.length ?? 0) };
}
var Pn, Fn, In, Ln, Rn;
function zn() {
  return (zn = e(() => {
    ((Pn = D()), (Fn = t(u(), 1)), H(), (In = p()), I(), ut(), U(), Te(), On(), En(), (Ln = y()), (Rn = 500));
  }))();
}
function Bn(e) {
  let t = (0, Vn.c)(80),
    {
      authorAvatar: n,
      autoFocus: r,
      initialBody: i,
      isEditing: a,
      isPending: o,
      isReply: c,
      provider: l,
      request: u,
      replyToAuthorLogin: d,
      source: p,
      onDirtyChange: m,
      onCancel: h,
      onSubmit: g,
    } = e,
    _ = r !== void 0 && r,
    v = i === void 0 ? `` : i,
    y = a !== void 0 && a,
    b = c !== void 0 && c,
    x = Z(),
    [S, C] = (0, Hn.useState)(v),
    [w, T] = (0, Hn.useState)(null),
    E;
  t[0] === S ? (E = t[1]) : ((E = S.trim()), (t[0] = S), (t[1] = E));
  let D = E,
    O,
    k;
  (t[2] !== S.length || t[3] !== m
    ? ((O = () => (
        m?.(S.length > 0),
        () => {
          m?.(!1);
        }
      )),
      (k = [S.length, m]),
      (t[2] = S.length),
      (t[3] = m),
      (t[4] = O),
      (t[5] = k))
    : ((O = t[4]), (k = t[5])),
    (0, Hn.useEffect)(O, k));
  let A, j;
  if (y) {
    let e;
    (t[6] === x
      ? (e = t[7])
      : ((e = x.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.submit`,
          defaultMessage: `Save changes`,
          description: `Accessible label for saving an edited pull request comment`,
        })),
        (t[6] = x),
        (t[7] = e)),
      (A = e));
    let n;
    (t[8] === x
      ? (n = t[9])
      : ((n = x.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.ariaLabel`,
          defaultMessage: `Edit pull request comment`,
          description: `Accessible label for editing a pull request comment`,
        })),
        (t[8] = x),
        (t[9] = n)),
      (j = n));
  } else if (b) {
    let e;
    (t[10] === x
      ? (e = t[11])
      : ((e = x.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request activity reply`,
        })),
        (t[10] = x),
        (t[11] = e)),
      (A = e));
    let n;
    (t[12] === x
      ? (n = t[13])
      : ((n = x.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.ariaLabel`,
          defaultMessage: `Pull request reply`,
          description: `Accessible label for the pull request detail reply composer`,
        })),
        (t[12] = x),
        (t[13] = n)),
      (j = n));
  } else {
    let e;
    (t[14] === x
      ? (e = t[15])
      : ((e = x.formatMessage({
          id: `pullRequestsPage.detail.commentInput.submit`,
          defaultMessage: `Post comment`,
          description: `Accessible label for posting a pull request detail comment`,
        })),
        (t[14] = x),
        (t[15] = e)),
      (A = e));
    let n;
    (t[16] !== x || t[17] !== l
      ? ((n =
          l === `gitlab`
            ? x.formatMessage({
                id: `gitlabMergeRequest.commentInput.ariaLabel`,
                defaultMessage: `Merge request comment`,
                description: `Accessible label for writing a GitLab merge request comment`,
              })
            : x.formatMessage({
                id: `pullRequestsPage.detail.commentInput.ariaLabel`,
                defaultMessage: `Pull request comment`,
                description: `Accessible label for the pull request detail comment composer`,
              })),
        (t[16] = x),
        (t[17] = l),
        (t[18] = n))
      : (n = t[18]),
      (j = n));
  }
  let M;
  t[19] !== _ ||
  t[20] !== S ||
  t[21] !== j ||
  t[22] !== x ||
  t[23] !== o ||
  t[24] !== b ||
  t[25] !== l ||
  t[26] !== d ||
  t[27] !== u ||
  t[28] !== p
    ? ((M =
        l === `gitlab`
          ? (0, Un.jsx)(bn, {
              "aria-label": j,
              autoFocus: _,
              disabled: o,
              placeholder: x.formatMessage({
                id: `pullRequestsPage.detail.commentInput.placeholder`,
                defaultMessage: `Leave a comment`,
                description: `Placeholder shown in the pull request detail comment composer`,
              }),
              value: S,
              onChange: (e) => {
                (C(e.currentTarget.value), T(null));
              },
            })
          : (0, Un.jsx)(kn, {
              ariaLabel: j,
              autoFocus: _,
              body: S,
              disabled: o,
              placeholder: b
                ? x.formatMessage(
                    {
                      id: `pullRequestsPage.detail.commentReplyInput.placeholder`,
                      defaultMessage: `Reply to {author}`,
                      description: `Placeholder shown when replying to a pull request activity comment`,
                    },
                    {
                      author:
                        d ??
                        x.formatMessage({
                          id: `pullRequestsPage.detail.commentReplyInput.unknownAuthor`,
                          defaultMessage: `comment`,
                          description: `Fallback reply target label for the pull request activity reply composer`,
                        }),
                    },
                  )
                : x.formatMessage({
                    id: `pullRequestsPage.detail.commentInput.placeholder`,
                    defaultMessage: `Leave a comment`,
                    description: `Placeholder shown in the pull request detail comment composer`,
                  }),
              request: u,
              source: p,
              onBodyChange: (e) => {
                (C(e), T(null));
              },
            })),
      (t[19] = _),
      (t[20] = S),
      (t[21] = j),
      (t[22] = x),
      (t[23] = o),
      (t[24] = b),
      (t[25] = l),
      (t[26] = d),
      (t[27] = u),
      (t[28] = p),
      (t[29] = M))
    : (M = t[29]);
  let ee = M,
    N;
  t[30] !== x || t[31] !== y || t[32] !== o || t[33] !== h
    ? ((N =
        h == null
          ? null
          : (0, Un.jsx)(ce, {
              delayDuration: 250,
              tooltipContent: y
                ? x.formatMessage({
                    id: `pullRequestsPage.detail.commentEditInput.cancelTooltip`,
                    defaultMessage: `Cancel editing`,
                    description: `Tooltip for closing a pull request comment editor`,
                  })
                : x.formatMessage({
                    id: `pullRequestsPage.detail.commentReplyInput.cancelTooltip`,
                    defaultMessage: `Cancel reply`,
                    description: `Tooltip for closing a pull request activity reply composer`,
                  }),
              children: (0, Un.jsx)(L, {
                "aria-label": x.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label for closing a pull request activity reply composer`,
                }),
                color: `ghost`,
                disabled: o,
                size: `composerSm`,
                uniform: !0,
                onClick: h,
                children: (0, Un.jsx)(f, { "aria-hidden": !1, asset: s }),
              }),
            })),
      (t[30] = x),
      (t[31] = y),
      (t[32] = o),
      (t[33] = h),
      (t[34] = N))
    : (N = t[34]);
  let te = D.length === 0,
    P;
  t[35] === o
    ? (P = t[36])
    : ((P = o ? null : (0, Un.jsx)(f, { "aria-hidden": !1, asset: V })), (t[35] = o), (t[36] = P));
  let F;
  t[37] !== o || t[38] !== A || t[39] !== te || t[40] !== P
    ? ((F = (0, Un.jsx)(L, {
        "aria-label": A,
        color: `primary`,
        disabled: te,
        loading: o,
        size: `composerSm`,
        type: `submit`,
        uniform: !0,
        children: P,
      })),
      (t[37] = o),
      (t[38] = A),
      (t[39] = te),
      (t[40] = P),
      (t[41] = F))
    : (F = t[41]);
  let I;
  t[42] !== A || t[43] !== F
    ? ((I = (0, Un.jsx)(ce, { delayDuration: 250, tooltipContent: A, children: F })),
      (t[42] = A),
      (t[43] = F),
      (t[44] = I))
    : (I = t[44]);
  let R;
  t[45] !== I || t[46] !== N
    ? ((R = (0, Un.jsxs)(Un.Fragment, { children: [N, I] })), (t[45] = I), (t[46] = N), (t[47] = R))
    : (R = t[47]);
  let z = R,
    B = y || b ? `inline` : `default`,
    H;
  t[48] === ee
    ? (H = t[49])
    : ((H = (0, Un.jsx)(Oe.Input, { layout: `multiline`, children: ee })), (t[48] = ee), (t[49] = H));
  let U;
  t[50] === n
    ? (U = t[51])
    : ((U = (0, Un.jsx)(Oe.FooterInlineControls, { gap: `normal`, children: n })), (t[50] = n), (t[51] = U));
  let W;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Un.jsx)(Oe.FooterAction, { children: null })), (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] === z
    ? (G = t[54])
    : ((G = (0, Un.jsx)(Oe.FooterControls, { children: (0, Un.jsx)(Oe.FooterActions, { children: z }) })),
      (t[53] = z),
      (t[54] = G));
  let K;
  t[55] !== U || t[56] !== G
    ? ((K = (0, Un.jsxs)(Oe.Footer, { children: [U, W, G] })), (t[55] = U), (t[56] = G), (t[57] = K))
    : (K = t[57]);
  let q;
  t[58] !== H || t[59] !== K
    ? ((q = (0, Un.jsxs)(Oe.Body, { children: [H, K] })), (t[58] = H), (t[59] = K), (t[60] = q))
    : (q = t[60]);
  let J;
  t[61] !== B || t[62] !== q
    ? ((J = (0, Un.jsx)(Oe, {
        layout: `multiline`,
        radiusVariant: `compact`,
        surfaceVariant: B,
        children: q,
      })),
      (t[61] = B),
      (t[62] = q),
      (t[63] = J))
    : (J = t[63]);
  let ne = J,
    Y;
  t[64] !== S || t[65] !== x || t[66] !== y || t[67] !== o || t[68] !== g || t[69] !== l || t[70] !== D
    ? ((Y = async function (e) {
        if ((e.preventDefault(), !(D.length === 0 || o))) {
          T(null);
          try {
            (await g(y ? S : D), C(``));
          } catch (e) {
            let t = e,
              n =
                l === `gitlab`
                  ? x.formatMessage({
                      id: `gitlabMergeRequest.commentInput.error`,
                      defaultMessage: `GitLab could not post this comment`,
                      description: `Fallback error for a GitLab merge request comment`,
                    })
                  : x.formatMessage({
                      id: `pullRequestsPage.detail.commentInput.error`,
                      defaultMessage: `GitHub could not post this comment`,
                      description: `Fallback error for a pull request comment`,
                    });
            T(l !== `gitlab` && t instanceof Error ? t.message : n);
          }
        }
      }),
      (t[64] = S),
      (t[65] = x),
      (t[66] = y),
      (t[67] = o),
      (t[68] = g),
      (t[69] = l),
      (t[70] = D),
      (t[71] = Y))
    : (Y = t[71]);
  let re = Y,
    X;
  t[72] === re
    ? (X = t[73])
    : ((X = (e) => {
        re(e);
      }),
      (t[72] = re),
      (t[73] = X));
  let ie;
  t[74] === w
    ? (ie = t[75])
    : ((ie =
        w == null
          ? null
          : (0, Un.jsx)(`div`, { className: `px-1 text-sm text-chart-red`, role: `alert`, children: w })),
      (t[74] = w),
      (t[75] = ie));
  let ae;
  return (
    t[76] !== ne || t[77] !== X || t[78] !== ie
      ? ((ae = (0, Un.jsxs)(`form`, {
          className: `flex w-full flex-col gap-2`,
          onSubmit: X,
          children: [ne, ie],
        })),
        (t[76] = ne),
        (t[77] = X),
        (t[78] = ie),
        (t[79] = ae))
      : (ae = t[79]),
    ae
  );
}
var Vn, Hn, Un;
function Wn() {
  return (Wn = e(() => {
    ((Vn = D()), k(), be(), (Hn = p()), I(), Ge(), B(), T(), pe(), En(), zn(), (Un = y()));
  }))();
}
function Gn(e) {
  let t = (0, Jn.c)(42),
    {
      account: n,
      editTarget: r,
      initialBody: i,
      pullRequest: a,
      replyToAuthorLogin: o,
      replyToReviewThreadId: s,
      source: c,
      workspaceRequest: l,
      onDirtyChange: u,
      onCancel: d,
      onSuccess: f,
    } = e,
    p = c === void 0 ? `pull_requests_page` : c,
    m;
  t[0] !== n || t[1] !== a
    ? ((m = { account: n, pullRequest: a }), (t[0] = n), (t[1] = a), (t[2] = m))
    : (m = t[2]);
  let h = le(r == null ? Tt : null, m),
    g = r?.nodeId,
    _;
  t[3] !== n || t[4] !== a
    ? ((_ = { account: n, pullRequest: a }), (t[3] = n), (t[4] = a), (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== g || t[7] !== _
    ? ((v = { nodeId: g, request: _ }), (t[6] = g), (t[7] = _), (t[8] = v))
    : (v = t[8]);
  let y = le(wt, v),
    [b, x] = (0, Yn.useState)(null),
    S;
  t[9] !== n.hostname || t[10] !== n.login
    ? ((S = Ct(n.login, 48, n.hostname)), (t[9] = n.hostname), (t[10] = n.login), (t[11] = S))
    : (S = t[11]);
  let C = S,
    w = r == null && (s != null || i != null),
    T;
  t[12] !== n.login || t[13] !== C || t[14] !== b
    ? ((T = (0, Xn.jsx)(yt, {
        children:
          C == null || C === b
            ? (0, Xn.jsx)(`span`, {
                className: `flex size-6 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-xs font-semibold text-default`,
                children: n.login.slice(0, 1).toUpperCase(),
              })
            : (0, Xn.jsx)(`img`, {
                alt: n.login,
                className: `size-6 rounded-full bg-white object-cover`,
                src: C,
                onError: () => {
                  x(C);
                },
              }),
      })),
      (t[12] = n.login),
      (t[13] = C),
      (t[14] = b),
      (t[15] = T))
    : (T = t[15]);
  let E = w || r != null,
    D = r != null,
    O = h ?? y,
    k;
  t[16] !== n || t[17] !== a
    ? ((k = { account: n, pullRequest: a }), (t[16] = n), (t[17] = a), (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== n ||
  t[20] !== y ||
  t[21] !== r ||
  t[22] !== h ||
  t[23] !== f ||
  t[24] !== a ||
  t[25] !== s ||
  t[26] !== p ||
  t[27] !== l
    ? ((A = async (e) => {
        if (r != null) {
          (await y.mutateAsync({
            account: n,
            action: `update`,
            body: e,
            commentType: r.commentType,
            nodeId: r.nodeId,
            pullRequest: a,
            source: p,
            workspaceRequest: l,
          }),
            f?.());
          return;
        }
        await h?.mutateAsync({
          body: e,
          onSuccess: f,
          replyToReviewThreadId: s ?? null,
          source: p,
          workspaceRequest: l,
        });
      }),
      (t[19] = n),
      (t[20] = y),
      (t[21] = r),
      (t[22] = h),
      (t[23] = f),
      (t[24] = a),
      (t[25] = s),
      (t[26] = p),
      (t[27] = l),
      (t[28] = A))
    : (A = t[28]);
  let j;
  return (
    t[29] !== i ||
    t[30] !== w ||
    t[31] !== d ||
    t[32] !== u ||
    t[33] !== o ||
    t[34] !== p ||
    t[35] !== O.isPending ||
    t[36] !== k ||
    t[37] !== A ||
    t[38] !== T ||
    t[39] !== E ||
    t[40] !== D
      ? ((j = (0, Xn.jsx)(Bn, {
          authorAvatar: T,
          autoFocus: E,
          initialBody: i,
          isEditing: D,
          isPending: O.isPending,
          isReply: w,
          request: k,
          replyToAuthorLogin: o,
          source: p,
          onDirtyChange: u,
          onCancel: d,
          onSubmit: A,
        })),
        (t[29] = i),
        (t[30] = w),
        (t[31] = d),
        (t[32] = u),
        (t[33] = o),
        (t[34] = p),
        (t[35] = O.isPending),
        (t[36] = k),
        (t[37] = A),
        (t[38] = T),
        (t[39] = E),
        (t[40] = D),
        (t[41] = j))
      : (j = t[41]),
    j
  );
}
function Kn(e) {
  let t = (0, Jn.c)(11),
    {
      account: n,
      comment: r,
      initialBody: i,
      onDirtyChange: a,
      onOpenChange: o,
      pullRequest: s,
      source: c,
      workspaceRequest: l,
    } = e,
    [u, d] = (0, Yn.useState)(!1);
  if (r.reviewThreadId == null && i == null) return null;
  let f;
  return (
    t[0] !== n ||
    t[1] !== r.authorLogin ||
    t[2] !== r.reviewThreadId ||
    t[3] !== i ||
    t[4] !== u ||
    t[5] !== a ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== l
      ? ((f =
          u || i != null
            ? (0, Xn.jsx)(Gn, {
                account: n,
                initialBody: i,
                pullRequest: s,
                replyToAuthorLogin: r.authorLogin,
                replyToReviewThreadId: r.reviewThreadId,
                source: c,
                workspaceRequest: l,
                onDirtyChange: a,
                onCancel: () => {
                  (a?.(!1), o?.(!1), d(!1));
                },
                onSuccess: () => {
                  (a?.(!1), o?.(!1), d(!1));
                },
              })
            : (0, Xn.jsxs)(L, {
                color: `ghost`,
                size: `default`,
                onClick: () => {
                  (o?.(!0), d(!0));
                },
                children: [
                  (0, Xn.jsx)(Pt, { "aria-hidden": !0, className: `icon-sm` }),
                  (0, Xn.jsx)(`span`, {
                    className: `ps-1`,
                    children: (0, Xn.jsx)(Q, {
                      id: `pullRequestDetail.comment.reply`,
                      defaultMessage: `Reply`,
                      description: `Button to reply to a pull request review comment`,
                    }),
                  }),
                ],
              })),
        (t[0] = n),
        (t[1] = r.authorLogin),
        (t[2] = r.reviewThreadId),
        (t[3] = i),
        (t[4] = u),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
function qn(e) {
  let t = (0, Jn.c)(24),
    {
      account: n,
      action: r,
      onResolved: i,
      pullRequest: a,
      reviewThreadId: o,
      source: s,
      workspaceRequest: c,
    } = e,
    l;
  t[0] !== n || t[1] !== a
    ? ((l = { account: n, pullRequest: a }), (t[0] = n), (t[1] = a), (t[2] = l))
    : (l = t[2]);
  let u = le(Et, l),
    d = u.isPending && u.variables?.reviewThreadId === o,
    f;
  t[3] !== r || t[4] !== u || t[5] !== i || t[6] !== o || t[7] !== s || t[8] !== c
    ? ((f = () => {
        u.mutate({ action: r, onResolved: i, reviewThreadId: o, source: s, workspaceRequest: c });
      }),
      (t[3] = r),
      (t[4] = u),
      (t[5] = i),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r
    ? (p = t[11])
    : ((p =
        r === `resolve`
          ? (0, Xn.jsx)(Q, {
              id: `pullRequestDetail.comment.resolve`,
              defaultMessage: `Resolve`,
              description: `Button that resolves a pull request code review thread`,
            })
          : (0, Xn.jsx)(Q, {
              id: `pullRequestDetail.comment.unresolve`,
              defaultMessage: `Unresolve`,
              description: `Button that reopens a resolved pull request code review thread`,
            })),
      (t[10] = r),
      (t[11] = p));
  let m;
  t[12] !== u.isPending || t[13] !== d || t[14] !== f || t[15] !== p
    ? ((m = (0, Xn.jsx)(L, {
        color: `ghost`,
        disabled: u.isPending,
        loading: d,
        size: `default`,
        onClick: f,
        children: p,
      })),
      (t[12] = u.isPending),
      (t[13] = d),
      (t[14] = f),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] !== u.error || t[18] !== u.variables?.reviewThreadId || t[19] !== o
    ? ((h =
        u.error == null || u.variables?.reviewThreadId !== o
          ? null
          : (0, Xn.jsx)(`div`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                u.error instanceof Error
                  ? (0, Xn.jsx)(Q, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateError`,
                      defaultMessage: `Could not update this review thread: {error}`,
                      description: `Error displayed when resolving or reopening a pull request review thread fails`,
                      values: { error: u.error.message },
                    })
                  : (0, Xn.jsx)(Q, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateUnknownError`,
                      defaultMessage: `Could not update this review thread`,
                      description: `Fallback error displayed when resolving or reopening a pull request review thread fails without an error message`,
                    }),
            })),
      (t[17] = u.error),
      (t[18] = u.variables?.reviewThreadId),
      (t[19] = o),
      (t[20] = h))
    : (h = t[20]);
  let g;
  return (
    t[21] !== m || t[22] !== h
      ? ((g = (0, Xn.jsxs)(`div`, { className: `flex flex-col items-start gap-1`, children: [m, h] })),
        (t[21] = m),
        (t[22] = h),
        (t[23] = g))
      : (g = t[23]),
    g
  );
}
var Jn, Yn, Xn;
function Zn() {
  return (Zn = e(() => {
    ((Jn = D()), H(), (Yn = p()), I(), B(), Nt(), xt(), Dt(), Wn(), (Xn = y()));
  }))();
}
function Qn(e) {
  let t = (0, $n.c)(39),
    { account: n, commentType: i, nodeId: a, pullRequest: o, source: s, workspaceRequest: c, onClose: l } = e,
    u = r(A),
    d = Z(),
    f;
  t[0] !== n || t[1] !== o
    ? ((f = { account: n, pullRequest: o }), (t[0] = n), (t[1] = o), (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== a || t[4] !== f
    ? ((p = { nodeId: a, request: f }), (t[3] = a), (t[4] = f), (t[5] = p))
    : (p = t[5]);
  let m = le(wt, p),
    g;
  t[6] !== m.isPending || t[7] !== l
    ? ((g = (e) => {
        !e && !m.isPending && l();
      }),
      (t[6] = m.isPending),
      (t[7] = l),
      (t[8] = g))
    : (g = t[8]);
  let _;
  t[9] !== n ||
  t[10] !== i ||
  t[11] !== d ||
  t[12] !== m ||
  t[13] !== a ||
  t[14] !== l ||
  t[15] !== o ||
  t[16] !== u ||
  t[17] !== s ||
  t[18] !== c
    ? ((_ = (e) => {
        (e.preventDefault(),
          !m.isPending &&
            m
              .mutateAsync({
                account: n,
                action: `delete`,
                commentType: i,
                nodeId: a,
                pullRequest: o,
                source: s,
                workspaceRequest: c,
              })
              .then(l)
              .catch((e) => {
                u.get(fe).danger(
                  e.message ||
                    d.formatMessage({
                      id: `pullRequestDetail.comment.deleteError`,
                      defaultMessage: `GitHub could not delete this comment`,
                      description: `Fallback error displayed when deleting a pull request comment fails`,
                    }),
                  { errorAnalytics: { toastId: `pullRequestDetail.comment.deleteError` } },
                );
              }));
      }),
      (t[9] = n),
      (t[10] = i),
      (t[11] = d),
      (t[12] = m),
      (t[13] = a),
      (t[14] = l),
      (t[15] = o),
      (t[16] = u),
      (t[17] = s),
      (t[18] = c),
      (t[19] = _))
    : (_ = t[19]);
  let y;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, er.jsx)(de, {
        children: (0, er.jsx)(Q, {
          id: `pullRequestDetail.comment.deleteTitle`,
          defaultMessage: `Delete comment`,
          description: `Title for the pull request comment deletion confirmation`,
        }),
      })),
      (t[20] = y))
    : (y = t[20]);
  let x;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, er.jsx)(ye, {
        children: (0, er.jsx)(j, {
          title: y,
          subtitle: (0, er.jsx)(v, {
            children: (0, er.jsx)(Q, {
              id: `pullRequestDetail.comment.deleteDescription`,
              defaultMessage: `This comment will be permanently deleted from GitHub`,
              description: `Explanation in the pull request comment deletion confirmation`,
            }),
          }),
        }),
      })),
      (t[21] = x))
    : (x = t[21]);
  let S;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, er.jsx)(Q, {
        id: `pullRequestDetail.comment.deleteCancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel deleting a pull request comment`,
      })),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== m.isPending || t[24] !== l
    ? ((C = (0, er.jsx)(L, { color: `secondary`, disabled: m.isPending, onClick: l, children: S })),
      (t[23] = m.isPending),
      (t[24] = l),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, er.jsx)(Q, {
        id: `pullRequestDetail.comment.deleteConfirm`,
        defaultMessage: `Delete comment`,
        description: `Button to permanently delete a pull request comment`,
      })),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === m.isPending
    ? (T = t[28])
    : ((T = (0, er.jsx)(L, { color: `dangerSolid`, loading: m.isPending, type: `submit`, children: w })),
      (t[27] = m.isPending),
      (t[28] = T));
  let E;
  t[29] !== T || t[30] !== C
    ? ((E = (0, er.jsx)(ye, { children: (0, er.jsxs)(b, { children: [C, T] }) })),
      (t[29] = T),
      (t[30] = C),
      (t[31] = E))
    : (E = t[31]);
  let D;
  t[32] !== m.isPending || t[33] !== E || t[34] !== _
    ? ((D = (0, er.jsxs)(h, { as: `form`, "aria-busy": m.isPending, onSubmit: _, children: [x, E] })),
      (t[32] = m.isPending),
      (t[33] = E),
      (t[34] = _),
      (t[35] = D))
    : (D = t[35]);
  let O;
  return (
    t[36] !== D || t[37] !== g
      ? ((O = (0, er.jsx)(P, { open: !0, showDialogClose: !1, onOpenChange: g, children: D })),
        (t[36] = D),
        (t[37] = g),
        (t[38] = O))
      : (O = t[38]),
    O
  );
}
var $n, er;
function tr() {
  return (tr = e(() => {
    (($n = D()), H(), I(), B(), g(), m(), te(), Dt(), i(), (er = y()));
  }))();
}
function nr(e) {
  let t = (0, ir.c)(105),
    {
      account: n,
      comment: i,
      commentAttachment: a,
      inline: o,
      isFixActive: s,
      metadataAccessory: c,
      onReviewThreadResolved: l,
      pullRequest: u,
      source: d,
      workspaceRequest: f,
    } = e,
    p = o !== void 0 && o,
    m = s !== void 0 && s,
    h = r(Me),
    g = ne(At),
    [_, v] = (0, or.useState)(!1),
    [y, b] = (0, or.useState)(null),
    [S, C] = (0, or.useState)(null),
    [w, T] = (0, or.useState)(!1),
    [E, D] = (0, or.useState)(null),
    O;
  t[0] !== i.nodeId || t[1] !== i.replies || t[2] !== S
    ? ((O = S != null && (S === i.nodeId || !!i.replies?.some((e) => e.nodeId === S))),
      (t[0] = i.nodeId),
      (t[1] = i.replies),
      (t[2] = S),
      (t[3] = O))
    : (O = t[3]);
  let k = O,
    A = g && n != null && u != null && !m && !k,
    j = A && i.viewerCanReply !== !1 && !i.isDeleted && !i.isPending,
    M = A && !w,
    ee = i.path ?? a?.position.path ?? null,
    N;
  t[4] === ee
    ? (N = t[5])
    : ((N = ee == null ? null : ar.default.posix.basename(ee)), (t[4] = ee), (t[5] = N));
  let te = N,
    P;
  t[6] !== i || t[7] !== a ? ((P = Mt(i, a)), (t[6] = i), (t[7] = a), (t[8] = P)) : (P = t[8]);
  let F = P,
    I;
  t[9] !== i.originalLine || t[10] !== i.originalStartLine || t[11] !== F
    ? ((I =
        F == null || i.originalLine == null
          ? F
          : { ...F, line: i.originalLine, start_line: i.originalStartLine ?? i.originalLine }),
      (t[9] = i.originalLine),
      (t[10] = i.originalStartLine),
      (t[11] = F),
      (t[12] = I))
    : (I = t[12]);
  let L = I,
    R;
  if (i.isMinimized === !0) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, sr.jsx)(Q, {
          id: `pullRequestDetail.comment.hidden`,
          defaultMessage: `Hidden`,
          description: `Status on a pull request conversation comment or review summary hidden on GitHub; its body can be expanded in Codex`,
        })),
        (t[13] = e))
      : (e = t[13]),
      (R = e));
  } else if (i.isResolved === !0) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, sr.jsx)(Q, {
          id: `pullRequestDetail.comment.resolved`,
          defaultMessage: `Resolved`,
          description: `Status shown on a resolved pull request code review thread`,
        })),
        (t[14] = e))
      : (e = t[14]),
      (R = e));
  }
  let z;
  t[15] !== i.authorAvatarUrl || t[16] !== i.authorLogin || t[17] !== i.reviewThreadId || t[18] !== a
    ? ((z =
        a == null
          ? void 0
          : {
              ...a,
              authorAvatarUrl: i.authorAvatarUrl,
              authorLogin: i.authorLogin,
              reviewThreadId: i.reviewThreadId,
            }),
      (t[15] = i.authorAvatarUrl),
      (t[16] = i.authorLogin),
      (t[17] = i.reviewThreadId),
      (t[18] = a),
      (t[19] = z))
    : (z = t[19]);
  let B = i.isResolved === !0 || (!p && i.authorType != null && i.authorType !== `User`),
    V = p ? null : i.diffHunk,
    H = p ? null : te,
    U;
  t[20] !== n ||
  t[21] !== M ||
  t[22] !== j ||
  t[23] !== g ||
  t[24] !== i ||
  t[25] !== m ||
  t[26] !== w ||
  t[27] !== c ||
  t[28] !== l ||
  t[29] !== u ||
  t[30] !== E ||
  t[31] !== d ||
  t[32] !== f
    ? ((U =
        c != null || (g && n != null && u != null && (i.reviewThreadId != null || E != null))
          ? (0, sr.jsxs)(`div`, {
              className: `flex w-full items-start gap-2`,
              children: [
                (0, sr.jsxs)(`div`, {
                  className: x(`flex min-w-0 flex-wrap items-start gap-2`, (w || m) && `flex-1`),
                  children: [
                    w ? null : c,
                    j
                      ? (0, sr.jsx)(Kn, {
                          account: n,
                          comment: i,
                          initialBody: E ?? void 0,
                          onDirtyChange: v,
                          onOpenChange: (e) => {
                            (T(e), e || D(null));
                          },
                          pullRequest: u,
                          source: d,
                          workspaceRequest: f,
                        })
                      : null,
                  ],
                }),
                M &&
                i.reviewThreadId != null &&
                (i.isResolved === !0 ? i.viewerCanUnresolve === !0 : i.viewerCanResolve === !0)
                  ? (0, sr.jsx)(qn, {
                      account: n,
                      action: i.isResolved === !0 ? `unresolve` : `resolve`,
                      pullRequest: u,
                      reviewThreadId: i.reviewThreadId,
                      source: d,
                      workspaceRequest: f,
                      onResolved: l,
                    })
                  : null,
              ],
            })
          : void 0),
      (t[20] = n),
      (t[21] = M),
      (t[22] = j),
      (t[23] = g),
      (t[24] = i),
      (t[25] = m),
      (t[26] = w),
      (t[27] = c),
      (t[28] = l),
      (t[29] = u),
      (t[30] = E),
      (t[31] = d),
      (t[32] = f),
      (t[33] = U))
    : (U = t[33]);
  let W;
  t[34] !== M || t[35] !== i.nodeId || t[36] !== i.type || t[37] !== i.viewerCanDelete
    ? ((W =
        M && i.type !== `review` && i.nodeId != null && i.viewerCanDelete === !0
          ? () => b(i.nodeId ?? null)
          : void 0),
      (t[34] = M),
      (t[35] = i.nodeId),
      (t[36] = i.type),
      (t[37] = i.viewerCanDelete),
      (t[38] = W))
    : (W = t[38]);
  let G;
  t[39] === M ? (G = t[40]) : ((G = M ? (e) => b(e.nodeId ?? null) : void 0), (t[39] = M), (t[40] = G));
  let K;
  t[41] !== M || t[42] !== i.nodeId || t[43] !== i.viewerCanUpdate
    ? ((K = M && i.nodeId != null && i.viewerCanUpdate === !0 ? () => C(i.nodeId ?? null) : void 0),
      (t[41] = M),
      (t[42] = i.nodeId),
      (t[43] = i.viewerCanUpdate),
      (t[44] = K))
    : (K = t[44]);
  let q;
  t[45] === M ? (q = t[46]) : ((q = M ? (e) => C(e.nodeId ?? null) : void 0), (t[45] = M), (t[46] = q));
  let J;
  t[47] !== n || t[48] !== p || t[49] !== F || t[50] !== u || t[51] !== h || t[52] !== d
    ? ((J =
        p || n == null || u == null || F == null || d === `pull_request_board`
          ? void 0
          : () => {
              kt(h, { account: n, pullRequest: u }, F);
            }),
      (t[47] = n),
      (t[48] = p),
      (t[49] = F),
      (t[50] = u),
      (t[51] = h),
      (t[52] = d),
      (t[53] = J))
    : (J = t[53]);
  let Y;
  t[54] !== j || t[55] !== i.body || t[56] !== w
    ? ((Y =
        j && !w
          ? () => {
              (T(!0),
                D(
                  `${i.body
                    .split(
                      `
`,
                    )
                    .map(rr).join(`
`)}\n\n`,
                ));
            }
          : void 0),
      (t[54] = j),
      (t[55] = i.body),
      (t[56] = w),
      (t[57] = Y))
    : (Y = t[57]);
  let re = _ || k,
    X = !p && F != null,
    ie = p ? `inline` : `default`,
    ae = i.url ?? void 0,
    oe;
  t[58] !== n ||
  t[59] !== i.isDeleted ||
  t[60] !== i.nodeId ||
  t[61] !== i.rawBody ||
  t[62] !== i.type ||
  t[63] !== S ||
  t[64] !== u ||
  t[65] !== d ||
  t[66] !== f
    ? ((oe = (e, t, r) => {
        if (!t && i.isDeleted)
          return (0, sr.jsx)(`span`, {
            className: `text-secondary`,
            children: (0, sr.jsx)(Q, {
              id: `pullRequestDetail.comment.deleted`,
              defaultMessage: `Comment deleted`,
              description: `Placeholder for a deleted review comment whose replies remain visible`,
            }),
          });
        let a = t ? r?.nodeId : i.nodeId;
        return S != null && a === S && n != null && u != null
          ? (0, sr.jsx)(`div`, {
              className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
              children: (0, sr.jsx)(Gn, {
                account: n,
                editTarget: { commentType: t && i.type !== `comment` ? `review_comment` : i.type, nodeId: a },
                initialBody: (t ? r?.rawBody : i.rawBody) ?? e,
                pullRequest: u,
                source: d,
                workspaceRequest: f,
                onCancel: () => C(null),
                onSuccess: () => C(null),
              }),
            })
          : (0, sr.jsx)(ln, {
              request: n != null && u != null ? { account: n, pullRequest: u } : null,
              allowBasicHtml: !0,
              textStyle: { kind: `small` },
              className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
              cwd: null,
              children: e,
            });
      }),
      (t[58] = n),
      (t[59] = i.isDeleted),
      (t[60] = i.nodeId),
      (t[61] = i.rawBody),
      (t[62] = i.type),
      (t[63] = S),
      (t[64] = u),
      (t[65] = d),
      (t[66] = f),
      (t[67] = oe))
    : (oe = t[67]);
  let se;
  t[68] !== i.authorAvatarUrl ||
  t[69] !== i.authorLogin ||
  t[70] !== i.body ||
  t[71] !== i.createdAt ||
  t[72] !== i.isMinimized ||
  t[73] !== i.replies ||
  t[74] !== R ||
  t[75] !== L ||
  t[76] !== F ||
  t[77] !== H ||
  t[78] !== U ||
  t[79] !== W ||
  t[80] !== G ||
  t[81] !== K ||
  t[82] !== q ||
  t[83] !== J ||
  t[84] !== Y ||
  t[85] !== re ||
  t[86] !== X ||
  t[87] !== ie ||
  t[88] !== ae ||
  t[89] !== oe ||
  t[90] !== z ||
  t[91] !== B ||
  t[92] !== V
    ? ((se = (0, sr.jsx)(St, {
        authorAvatarUrl: i.authorAvatarUrl,
        authorLogin: i.authorLogin,
        body: i.body,
        comment: z,
        createdAt: i.createdAt,
        defaultCollapsed: B,
        diffHunk: V,
        diffHunkPosition: L,
        fileName: H,
        headerAccessory: R,
        isMinimized: i.isMinimized,
        metadataAccessory: U,
        onDelete: W,
        onDeleteReply: G,
        onEdit: K,
        onEditReply: q,
        onOpenFile: J,
        onQuoteReply: Y,
        preventCollapse: re,
        position: F,
        replies: i.replies,
        showDiffLocation: X,
        surfaceVariant: ie,
        url: ae,
        renderBody: oe,
      })),
      (t[68] = i.authorAvatarUrl),
      (t[69] = i.authorLogin),
      (t[70] = i.body),
      (t[71] = i.createdAt),
      (t[72] = i.isMinimized),
      (t[73] = i.replies),
      (t[74] = R),
      (t[75] = L),
      (t[76] = F),
      (t[77] = H),
      (t[78] = U),
      (t[79] = W),
      (t[80] = G),
      (t[81] = K),
      (t[82] = q),
      (t[83] = J),
      (t[84] = Y),
      (t[85] = re),
      (t[86] = X),
      (t[87] = ie),
      (t[88] = ae),
      (t[89] = oe),
      (t[90] = z),
      (t[91] = B),
      (t[92] = V),
      (t[93] = se))
    : (se = t[93]);
  let ce = se;
  if (y == null || n == null || u == null) return ce;
  let le = i.type === `comment` ? `comment` : `review_comment`,
    Z;
  t[94] === Symbol.for(`react.memo_cache_sentinel`) ? ((Z = () => b(null)), (t[94] = Z)) : (Z = t[94]);
  let ue;
  t[95] !== n || t[96] !== y || t[97] !== u || t[98] !== d || t[99] !== le || t[100] !== f
    ? ((ue = (0, sr.jsx)(Qn, {
        account: n,
        commentType: le,
        nodeId: y,
        pullRequest: u,
        source: d,
        workspaceRequest: f,
        onClose: Z,
      })),
      (t[95] = n),
      (t[96] = y),
      (t[97] = u),
      (t[98] = d),
      (t[99] = le),
      (t[100] = f),
      (t[101] = ue))
    : (ue = t[101]);
  let de;
  return (
    t[102] !== ce || t[103] !== ue
      ? ((de = (0, sr.jsxs)(sr.Fragment, { children: [ce, ue] })),
        (t[102] = ce),
        (t[103] = ue),
        (t[104] = de))
      : (de = t[104]),
    de
  );
}
function rr(e) {
  return `> ${e}`;
}
var ir, ar, or, sr;
function cr() {
  return (cr = e(() => {
    ((ir = D()),
      C(),
      H(),
      (ar = t(_e(), 1)),
      (or = p()),
      I(),
      bt(),
      Ot(),
      jt(),
      gt(),
      yn(),
      Zn(),
      tr(),
      (sr = y()));
  }))();
}
function lr(e) {
  let t = (0, ur.c)(23),
    { autoFocus: n, inputId: r, inputRef: i, onQueryChange: a, searchQuery: o } = e,
    s = r === void 0 ? `file-tree-search` : r,
    c = Z(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, dr.jsx)(Q, {
        id: `codex.fileTreeSearch.label`,
        defaultMessage: `Filter files`,
        description: `Label for a file tree filter input`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === s
    ? (d = t[2])
    : ((d = (0, dr.jsx)(`label`, { className: `sr-only`, htmlFor: s, children: u })), (t[1] = s), (t[2] = d));
  let p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, dr.jsx)(f, { className: `ms-2 shrink-0 text-tertiary`, "aria-hidden": !1, asset: l })),
      (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] === a ? (m = t[5]) : ((m = (e) => a(e.target.value)), (t[4] = a), (t[5] = m));
  let h;
  t[6] === c
    ? (h = t[7])
    : ((h = c.formatMessage({
        id: `codex.fileTreeSearch.placeholder`,
        defaultMessage: `Filter files…`,
        description: `Placeholder text for a file tree filter input`,
      })),
      (t[6] = c),
      (t[7] = h));
  let g;
  t[8] !== n || t[9] !== s || t[10] !== i || t[11] !== o || t[12] !== m || t[13] !== h
    ? ((g = (0, dr.jsx)(`input`, {
        autoFocus: n,
        id: s,
        ref: i,
        className: `w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-default ring-0 outline-none select-text placeholder:text-tertiary focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none`,
        type: `text`,
        value: o,
        onChange: m,
        placeholder: h,
      })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = i),
      (t[11] = o),
      (t[12] = m),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== c || t[16] !== a || t[17] !== o.length
    ? ((_ =
        o.length > 0
          ? (0, dr.jsx)(L, {
              "aria-label": c.formatMessage({
                id: `codex.fileTreeSearch.clear`,
                defaultMessage: `Clear file filter`,
                description: `Button label to clear a file tree filter input`,
              }),
              className: `text-tertiary hover:text-default`,
              color: `ghost`,
              size: `icon`,
              onClick: () => a(``),
              children: (0, dr.jsx)(R, { className: `icon-2xs` }),
            })
          : null),
      (t[15] = c),
      (t[16] = a),
      (t[17] = o.length),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== d || t[20] !== g || t[21] !== _
      ? ((v = (0, dr.jsxs)(`div`, {
          className: `relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-default bg-primary-soft-alpha text-base leading-[18px]`,
          children: [d, p, g, _],
        })),
        (t[19] = d),
        (t[20] = g),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var ur, dr;
function fr() {
  return (fr = e(() => {
    ((ur = D()), N(), I(), B(), T(), F(), (dr = y()));
  }))();
}
function pr(e) {
  return {
    hunkLineCount: 32,
    lineHeight: (e * vr) / 10,
    diffHeaderHeight: 0,
    hunkSeparatorHeight: 32,
    spacing: 0,
  };
}
function mr(e) {
  let t = window.getComputedStyle(e);
  return {
    ...yr,
    lineHeight: gr(t.lineHeight, yr.lineHeight),
    spacing: gr(t.getPropertyValue(`--diffs-gap-block`), yr.spacing),
  };
}
function hr(e, t) {
  return (
    e.hunkLineCount === t.hunkLineCount &&
    e.lineHeight === t.lineHeight &&
    e.diffHeaderHeight === t.diffHeaderHeight &&
    e.hunkSeparatorHeight === t.hunkSeparatorHeight &&
    e.spacing === t.spacing &&
    e.paddingTop === t.paddingTop &&
    e.paddingBottom === t.paddingBottom
  );
}
function gr(e, t) {
  let n = e.trim();
  if (n === `0`) return 0;
  if (!n.endsWith(`px`)) return t;
  let r = Number.parseFloat(n.slice(0, -2));
  return Number.isFinite(r) ? r : t;
}
var _r, vr, yr;
function br() {
  return (br = e(() => {
    ((_r = 12), (vr = 18), (yr = pr(_r)));
  }))();
}
function xr({ contextId: e, getFiles: t, preserveScrollBeforeResultClear: n, scrollAdapter: r }) {
  return {
    domain: `diff`,
    contextId: e,
    preserveScrollBeforeResultClear: n,
    async search(e) {
      return e.query.trim().length === 0 ? Sr(e, []) : Sr(e, t());
    },
    async ensureVisible(t, n) {
      if (t.domain !== `diff` || t.contextId !== e) return;
      let i = r.getFileContainer(t.path),
        a = Ke(t);
      if ((i == null ? null : et({ container: i, matchId: a, includeShadowRoots: !0 })) == null) {
        if (
          n?.signal?.aborted ||
          (n?.signal == null
            ? await r.scrollToFile(t.path)
            : await r.scrollToFile(t.path, { signal: n.signal }),
          n?.signal?.aborted) ||
          (r.scrollToLocation != null &&
            (n?.signal == null
              ? await r.scrollToLocation(t)
              : await r.scrollToLocation(t, { signal: n.signal })),
          n?.signal?.aborted)
        )
          return;
        i = r.getFileContainer(t.path);
      }
      i != null &&
        (await Rt({
          container: i,
          matchId: a,
          includeShadowRoots: !0,
          scrollBehavior: `auto`,
          signal: n?.signal,
        }));
    },
  };
}
function Sr(e, t) {
  let n = e.query.trim();
  if (n.length === 0)
    return { domain: e.domain, contextId: e.contextId, query: n, matches: [], totalMatches: 0, isCapped: !1 };
  let r = [],
    i = 0,
    a = 0,
    o = !1;
  for (let s of t)
    for (let t of s.hunks) {
      let c = t.text;
      if (c.length === 0) continue;
      let l = Er - r.length,
        { offsets: u, totalMatches: d, isCapped: f } = Ze(c, n, l);
      ((i += d), f && (o = !0));
      let p = { offset: 0, line: t.lineStart };
      for (let { start: n, end: i } of u) {
        let o = Cr(t, n, i, p);
        ((a += 1),
          r.push({
            id: `diff:${s.path}:${t.hunkId}:${n}`,
            ordinal: a,
            location: {
              domain: `diff`,
              contextId: e.contextId,
              path: s.path,
              hunkId: t.hunkId,
              side: o.side,
              lineStart: o.lineStart,
              lineEnd: o.lineEnd,
              start: n,
              end: i,
            },
          }));
      }
    }
  return { domain: e.domain, contextId: e.contextId, query: n, matches: r, totalMatches: i, isCapped: o };
}
function Cr(e, t, n, r) {
  let i = wr(e.lineSpans, t, n);
  if (i != null) return i;
  if (e.lineMapping !== `contiguous`) return { lineStart: e.lineStart, lineEnd: e.lineEnd };
  ((r.line += Tr(e.text.slice(r.offset, t))), (r.offset = t));
  let a = r.line;
  return { lineStart: a, lineEnd: a + Tr(e.text.slice(t, n)) };
}
function wr(e, t, n) {
  if (e == null) return null;
  let r = e.find((e) => t >= e.start && t < e.end);
  if (r == null) return null;
  let i = Math.max(t, n - 1),
    a = e.find((e) => i >= e.start && i < e.end) ?? r;
  return {
    lineStart: r.lineStart,
    lineEnd: a.lineEnd,
    ...(r.side != null && r.side === a.side ? { side: r.side } : {}),
  };
}
function Tr(e) {
  let t = 0;
  for (let n of e)
    n ===
      `
` && (t += 1);
  return t;
}
var Er;
function Dr() {
  return (Dr = e(() => {
    (dt(), zt(), (Er = 250));
  }))();
}
var Or, kr, Ar;
function jr() {
  return (jr = e(() => {
    ((Or = (e, t, n) => {
      let r = e instanceof RegExp ? kr(e, n) : e,
        i = t instanceof RegExp ? kr(t, n) : t,
        a = r !== null && i != null && Ar(r, i, n);
      return (
        a && {
          start: a[0],
          end: a[1],
          pre: n.slice(0, a[0]),
          body: n.slice(a[0] + r.length, a[1]),
          post: n.slice(a[1] + i.length),
        }
      );
    }),
      (kr = (e, t) => {
        let n = t.match(e);
        return n ? n[0] : null;
      }),
      (Ar = (e, t, n) => {
        let r,
          i,
          a,
          o,
          s,
          c = n.indexOf(e),
          l = n.indexOf(t, c + 1),
          u = c;
        if (c >= 0 && l > 0) {
          if (e === t) return [c, l];
          for (r = [], a = n.length; u >= 0 && !s;) {
            if (u === c) (r.push(u), (c = n.indexOf(e, u + 1)));
            else if (r.length === 1) {
              let e = r.pop();
              e !== void 0 && (s = [e, l]);
            } else ((i = r.pop()), i !== void 0 && i < a && ((a = i), (o = l)), (l = n.indexOf(t, u + 1)));
            u = c < l && c >= 0 ? c : l;
          }
          r.length && o !== void 0 && (s = [a, o]);
        }
        return s;
      }));
  }))();
}
function Mr(e) {
  return isNaN(e) ? e.charCodeAt(0) : parseInt(e, 10);
}
function Nr(e) {
  return e.replace(Qr, Hr).replace($r, Ur).replace(ei, Wr).replace(ti, Gr).replace(ni, Kr);
}
function Pr(e) {
  return e.replace(qr, `\\`).replace(Jr, `{`).replace(Yr, `}`).replace(Xr, `,`).replace(Zr, `.`);
}
function Fr(e) {
  if (!e) return [``];
  let t = [],
    n = Or(`{`, `}`, e);
  if (!n) return e.split(`,`);
  let { pre: r, body: i, post: a } = n,
    o = r.split(`,`);
  o[o.length - 1] += `{` + i + `}`;
  let s = Fr(a);
  return (a.length && ((o[o.length - 1] += s.shift()), o.push.apply(o, s)), t.push.apply(t, o), t);
}
function Ir(e, t = {}) {
  if (!e) return [];
  let { max: n = ri } = t;
  return (e.slice(0, 2) === `{}` && (e = `\\{\\}` + e.slice(2)), Vr(Nr(e), n, !0).map(Pr));
}
function Lr(e) {
  return `{` + e + `}`;
}
function Rr(e) {
  return /^-?0\d/.test(e);
}
function zr(e, t) {
  return e <= t;
}
function Br(e, t) {
  return e >= t;
}
function Vr(e, t, n) {
  let r = [];
  for (;;) {
    let i = Or(`{`, `}`, e);
    if (!i) return [e];
    let a = i.pre;
    if (/\$$/.test(i.pre)) {
      let e = i.post.length ? Vr(i.post, t, !1) : [``];
      for (let n = 0; n < e.length && n < t; n++) {
        let t = a + `{` + i.body + `}` + e[n];
        r.push(t);
      }
      return r;
    }
    let o = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body),
      s = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body),
      c = o || s,
      l = i.body.indexOf(`,`) >= 0;
    if (!c && !l) {
      if (i.post.match(/,(?!,).*\}/)) {
        ((e = i.pre + `{` + i.body + Wr + i.post), (n = !0));
        continue;
      }
      return [e];
    }
    let u = i.post.length ? Vr(i.post, t, !1) : [``],
      d;
    if (c) d = i.body.split(/\.\./);
    else if (
      ((d = Fr(i.body)), d.length === 1 && d[0] !== void 0 && ((d = Vr(d[0], t, !1).map(Lr)), d.length === 1))
    )
      return u.map((e) => i.pre + d[0] + e);
    let f;
    if (c && d[0] !== void 0 && d[1] !== void 0) {
      let e = Mr(d[0]),
        n = Mr(d[1]),
        r = Math.max(d[0].length, d[1].length),
        i = d.length === 3 && d[2] !== void 0 ? Math.max(Math.abs(Mr(d[2])), 1) : 1,
        a = zr;
      n < e && ((i *= -1), (a = Br));
      let o = d.some(Rr);
      f = [];
      for (let c = e; a(c, n) && f.length < t; c += i) {
        let e;
        if (s) ((e = String.fromCharCode(c)), e === `\\` && (e = ``));
        else if (((e = String(c)), o)) {
          let t = r - e.length;
          if (t > 0) {
            let n = Array(t + 1).join(`0`);
            e = c < 0 ? `-` + n + e.slice(1) : n + e;
          }
        }
        f.push(e);
      }
    } else {
      f = [];
      for (let e = 0; e < d.length; e++) f.push.apply(f, Vr(d[e], t, !1));
    }
    for (let e = 0; e < f.length; e++)
      for (let i = 0; i < u.length && r.length < t; i++) {
        let t = a + f[e] + u[i];
        (!n || c || t) && r.push(t);
      }
    return r;
  }
}
var Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri;
function ii() {
  return (ii = e(() => {
    (jr(),
      (Hr = `\0SLASH` + Math.random() + `\0`),
      (Ur = `\0OPEN` + Math.random() + `\0`),
      (Wr = `\0CLOSE` + Math.random() + `\0`),
      (Gr = `\0COMMA` + Math.random() + `\0`),
      (Kr = `\0PERIOD` + Math.random() + `\0`),
      (qr = new RegExp(Hr, `g`)),
      (Jr = new RegExp(Ur, `g`)),
      (Yr = new RegExp(Wr, `g`)),
      (Xr = new RegExp(Gr, `g`)),
      (Zr = new RegExp(Kr, `g`)),
      (Qr = /\\\\/g),
      ($r = /\\{/g),
      (ei = /\\}/g),
      (ti = /\\,/g),
      (ni = /\\\./g),
      (ri = 1e5));
  }))();
}
var ai, oi;
function si() {
  return (si = e(() => {
    ((ai = 65536),
      (oi = (e) => {
        if (typeof e != `string`) throw TypeError(`invalid pattern`);
        if (e.length > ai) throw TypeError(`pattern is too long`);
      }));
  }))();
}
var ci, li, ui, di, fi;
function pi() {
  return (pi = e(() => {
    ((ci = {
      "[:alnum:]": [`\\p{L}\\p{Nl}\\p{Nd}`, !0],
      "[:alpha:]": [`\\p{L}\\p{Nl}`, !0],
      "[:ascii:]": [`\\x00-\\x7f`, !1],
      "[:blank:]": [`\\p{Zs}\\t`, !0],
      "[:cntrl:]": [`\\p{Cc}`, !0],
      "[:digit:]": [`\\p{Nd}`, !0],
      "[:graph:]": [`\\p{Z}\\p{C}`, !0, !0],
      "[:lower:]": [`\\p{Ll}`, !0],
      "[:print:]": [`\\p{C}`, !0],
      "[:punct:]": [`\\p{P}`, !0],
      "[:space:]": [`\\p{Z}\\t\\r\\n\\v\\f`, !0],
      "[:upper:]": [`\\p{Lu}`, !0],
      "[:word:]": [`\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}`, !0],
      "[:xdigit:]": [`A-Fa-f0-9`, !1],
    }),
      (li = (e) => e.replace(/[[\]\\-]/g, `\\$&`)),
      (ui = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (di = (e) => e.join(``)),
      (fi = (e, t) => {
        let n = t;
        if (e.charAt(n) !== `[`) throw Error(`not in a brace expression`);
        let r = [],
          i = [],
          a = n + 1,
          o = !1,
          s = !1,
          c = !1,
          l = !1,
          u = n,
          d = ``;
        WHILE: for (; a < e.length;) {
          let t = e.charAt(a);
          if ((t === `!` || t === `^`) && a === n + 1) {
            ((l = !0), a++);
            continue;
          }
          if (t === `]` && o && !c) {
            u = a + 1;
            break;
          }
          if (((o = !0), t === `\\` && !c)) {
            ((c = !0), a++);
            continue;
          }
          if (t === `[` && !c) {
            for (let [t, [o, c, l]] of Object.entries(ci))
              if (e.startsWith(t, a)) {
                if (d) return [`$.`, !1, e.length - n, !0];
                ((a += t.length), l ? i.push(o) : r.push(o), (s ||= c));
                continue WHILE;
              }
          }
          if (((c = !1), d)) {
            (t > d ? r.push(li(d) + `-` + li(t)) : t === d && r.push(li(t)), (d = ``), a++);
            continue;
          }
          if (e.startsWith(`-]`, a + 1)) {
            (r.push(li(t + `-`)), (a += 2));
            continue;
          }
          if (e.startsWith(`-`, a + 1)) {
            ((d = t), (a += 2));
            continue;
          }
          (r.push(li(t)), a++);
        }
        if (u < a) return [``, !1, 0, !1];
        if (!r.length && !i.length) return [`$.`, !1, e.length - n, !0];
        if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
          let e = r[0].length === 2 ? r[0].slice(-1) : r[0];
          return [ui(e), !1, u - n, !1];
        }
        let f = `[` + (l ? `^` : ``) + di(r) + `]`,
          p = `[` + (l ? `` : `^`) + di(i) + `]`;
        return [r.length && i.length ? `(` + f + `|` + p + `)` : r.length ? f : p, s, u - n, !0];
      }));
  }))();
}
var mi;
function hi() {
  return (hi = e(() => {
    mi = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !0 } = {}) =>
      n
        ? t
          ? e.replace(/\[([^/\\])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\])\]/g, `$1$2`).replace(/\\([^/])/g, `$1`)
        : t
          ? e.replace(/\[([^/\\{}])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\{}])\]/g, `$1$2`).replace(/\\([^/{}])/g, `$1`);
  }))();
}
var gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi;
function Fi() {
  return (Fi = e(() => {
    (pi(),
      hi(),
      (_i = new Set([`!`, `?`, `+`, `*`, `@`])),
      (vi = (e) => _i.has(e)),
      (yi = (e) => vi(e.type)),
      (bi = new Map([
        [`!`, [`@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`]],
      ])),
      (xi = new Map([
        [`!`, [`?`]],
        [`@`, [`?`]],
        [`+`, [`?`, `*`]],
      ])),
      (Si = new Map([
        [`!`, [`?`, `@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`?`, `@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`, `?`, `*`]],
      ])),
      (Ci = new Map([
        [`!`, new Map([[`!`, `@`]])],
        [
          `?`,
          new Map([
            [`*`, `*`],
            [`+`, `*`],
          ]),
        ],
        [
          `@`,
          new Map([
            [`!`, `!`],
            [`?`, `?`],
            [`@`, `@`],
            [`*`, `*`],
            [`+`, `+`],
          ]),
        ],
        [
          `+`,
          new Map([
            [`?`, `*`],
            [`*`, `*`],
          ]),
        ],
      ])),
      (wi = `(?!(?:^|/)\\.\\.?(?:$|/))`),
      (Ti = `(?!\\.)`),
      (Ei = new Set([`[`, `.`])),
      (Di = new Set([`..`, `.`])),
      (Oi = new Set(`().*{}+?[]^$\\!`)),
      (ki = (e) => e.replace(/[[\]{}()*+?.\\^$|]/g, `\\$&`)),
      (Ai = `[^/]`),
      (ji = `[^/]*?`),
      (Mi = `[^/]+?`),
      (Ni = 0),
      (Pi = class {
        type;
        #e;
        #t;
        #n = !1;
        #r = [];
        #i;
        #a;
        #o;
        #s = !1;
        #c;
        #l;
        #u = !1;
        id = ++Ni;
        get depth() {
          return (this.#i?.depth ?? -1) + 1;
        }
        [Symbol.for(`nodejs.util.inspect.custom`)]() {
          return {
            "@@type": `AST`,
            id: this.id,
            type: this.type,
            root: this.#e.id,
            parent: this.#i?.id,
            depth: this.depth,
            partsLength: this.#r.length,
            parts: this.#r,
          };
        }
        constructor(e, t, n = {}) {
          ((this.type = e),
            e && (this.#t = !0),
            (this.#i = t),
            (this.#e = this.#i ? this.#i.#e : this),
            (this.#c = this.#e === this ? n : this.#e.#c),
            (this.#o = this.#e === this ? [] : this.#e.#o),
            e === `!` && !this.#e.#s && this.#o.push(this),
            (this.#a = this.#i ? this.#i.#r.length : 0));
        }
        get hasMagic() {
          if (this.#t !== void 0) return this.#t;
          for (let e of this.#r) if (typeof e != `string` && (e.type || e.hasMagic)) return (this.#t = !0);
          return this.#t;
        }
        toString() {
          return this.#l === void 0
            ? (this.#l = this.type
                ? this.type + `(` + this.#r.map((e) => String(e)).join(`|`) + `)`
                : this.#r.map((e) => String(e)).join(``))
            : this.#l;
        }
        #d() {
          if (this !== this.#e) throw Error(`should only call on root`);
          if (this.#s) return this;
          (this.toString(), (this.#s = !0));
          let e;
          for (; (e = this.#o.pop());) {
            if (e.type !== `!`) continue;
            let t = e,
              n = t.#i;
            for (; n;) {
              for (let r = t.#a + 1; !n.type && r < n.#r.length; r++)
                for (let t of e.#r) {
                  if (typeof t == `string`) throw Error(`string part in extglob AST??`);
                  t.copyIn(n.#r[r]);
                }
              ((t = n), (n = t.#i));
            }
          }
          return this;
        }
        push(...e) {
          for (let t of e)
            if (t !== ``) {
              if (typeof t != `string` && !(t instanceof gi && t.#i === this))
                throw Error(`invalid part: ` + t);
              this.#r.push(t);
            }
        }
        toJSON() {
          let e =
            this.type === null
              ? this.#r.slice().map((e) => (typeof e == `string` ? e : e.toJSON()))
              : [this.type, ...this.#r.map((e) => e.toJSON())];
          return (
            this.isStart() && !this.type && e.unshift([]),
            this.isEnd() && (this === this.#e || (this.#e.#s && this.#i?.type === `!`)) && e.push({}),
            e
          );
        }
        isStart() {
          if (this.#e === this) return !0;
          if (!this.#i?.isStart()) return !1;
          if (this.#a === 0) return !0;
          let e = this.#i;
          for (let t = 0; t < this.#a; t++) {
            let n = e.#r[t];
            if (!(n instanceof gi && n.type === `!`)) return !1;
          }
          return !0;
        }
        isEnd() {
          if (this.#e === this || this.#i?.type === `!`) return !0;
          if (!this.#i?.isEnd()) return !1;
          if (!this.type) return this.#i?.isEnd();
          let e = this.#i ? this.#i.#r.length : 0;
          return this.#a === e - 1;
        }
        copyIn(e) {
          typeof e == `string` ? this.push(e) : this.push(e.clone(this));
        }
        clone(e) {
          let t = new gi(this.type, e);
          for (let e of this.#r) t.copyIn(e);
          return t;
        }
        static #f(e, t, n, r, i) {
          let a = r.maxExtglobRecursion ?? 2,
            o = !1,
            s = !1,
            c = -1,
            l = !1;
          if (t.type === null) {
            let u = n,
              d = ``;
            for (; u < e.length;) {
              let n = e.charAt(u++);
              if (o || n === `\\`) {
                ((o = !o), (d += n));
                continue;
              }
              if (s) {
                (u === c + 1
                  ? (n === `^` || n === `!`) && (l = !0)
                  : n === `]` && !(u === c + 2 && l) && (s = !1),
                  (d += n));
                continue;
              }
              if (n === `[`) {
                ((s = !0), (c = u), (l = !1), (d += n));
                continue;
              }
              if (!r.noext && vi(n) && e.charAt(u) === `(` && i <= a) {
                (t.push(d), (d = ``));
                let a = new gi(n, t);
                ((u = gi.#f(e, a, u, r, i + 1)), t.push(a));
                continue;
              }
              d += n;
            }
            return (t.push(d), u);
          }
          let u = n + 1,
            d = new gi(null, t),
            f = [],
            p = ``;
          for (; u < e.length;) {
            let n = e.charAt(u++);
            if (o || n === `\\`) {
              ((o = !o), (p += n));
              continue;
            }
            if (s) {
              (u === c + 1
                ? (n === `^` || n === `!`) && (l = !0)
                : n === `]` && !(u === c + 2 && l) && (s = !1),
                (p += n));
              continue;
            }
            if (n === `[`) {
              ((s = !0), (c = u), (l = !1), (p += n));
              continue;
            }
            if (!r.noext && vi(n) && e.charAt(u) === `(` && (i <= a || (t && t.#h(n)))) {
              let a = t && t.#h(n) ? 0 : 1;
              (d.push(p), (p = ``));
              let o = new gi(n, d);
              (d.push(o), (u = gi.#f(e, o, u, r, i + a)));
              continue;
            }
            if (n === `|`) {
              (d.push(p), (p = ``), f.push(d), (d = new gi(null, t)));
              continue;
            }
            if (n === `)`)
              return (p === `` && t.#r.length === 0 && (t.#u = !0), d.push(p), (p = ``), t.push(...f, d), u);
            p += n;
          }
          return ((t.type = null), (t.#t = void 0), (t.#r = [e.substring(n - 1)]), u);
        }
        #p(e) {
          return this.#m(e, xi);
        }
        #m(e, t = bi) {
          if (!e || typeof e != `object` || e.type !== null || e.#r.length !== 1 || this.type === null)
            return !1;
          let n = e.#r[0];
          return !n || typeof n != `object` || n.type === null ? !1 : this.#h(n.type, t);
        }
        #h(e, t = Si) {
          return !!t.get(this.type)?.includes(e);
        }
        #g(e, t) {
          let n = e.#r[0],
            r = new gi(null, n, this.options);
          (r.#r.push(``), n.push(r), this.#_(e, t));
        }
        #_(e, t) {
          let n = e.#r[0];
          this.#r.splice(t, 1, ...n.#r);
          for (let e of n.#r) typeof e == `object` && (e.#i = this);
          this.#l = void 0;
        }
        #v(e) {
          return !!Ci.get(this.type)?.has(e);
        }
        #y(e) {
          if (
            !e ||
            typeof e != `object` ||
            e.type !== null ||
            e.#r.length !== 1 ||
            this.type === null ||
            this.#r.length !== 1
          )
            return !1;
          let t = e.#r[0];
          return !t || typeof t != `object` || t.type === null ? !1 : this.#v(t.type);
        }
        #b(e) {
          let t = Ci.get(this.type),
            n = e.#r[0],
            r = t?.get(n.type);
          if (!r) return !1;
          this.#r = n.#r;
          for (let e of this.#r) typeof e == `object` && (e.#i = this);
          ((this.type = r), (this.#l = void 0), (this.#u = !1));
        }
        static fromGlob(e, t = {}) {
          let n = new gi(null, void 0, t);
          return (gi.#f(e, n, 0, t, 0), n);
        }
        toMMPattern() {
          if (this !== this.#e) return this.#e.toMMPattern();
          let e = this.toString(),
            [t, n, r, i] = this.toRegExpSource();
          if (!(
            r ||
            this.#t ||
            (this.#c.nocase && !this.#c.nocaseMagicOnly && e.toUpperCase() !== e.toLowerCase())
          ))
            return n;
          let a = (this.#c.nocase ? `i` : ``) + (i ? `u` : ``);
          return Object.assign(RegExp(`^${t}$`, a), { _src: t, _glob: e });
        }
        get options() {
          return this.#c;
        }
        toRegExpSource(e) {
          let t = e ?? !!this.#c.dot;
          if ((this.#e === this && (this.#x(), this.#d()), !yi(this))) {
            let n = this.isStart() && this.isEnd() && !this.#r.some((e) => typeof e != `string`),
              r = this.#r
                .map((t) => {
                  let [r, i, a, o] = typeof t == `string` ? gi.#C(t, this.#t, n) : t.toRegExpSource(e);
                  return ((this.#t = this.#t || a), (this.#n = this.#n || o), r);
                })
                .join(``),
              i = ``;
            if (
              this.isStart() &&
              typeof this.#r[0] == `string` &&
              !(this.#r.length === 1 && Di.has(this.#r[0]))
            ) {
              let n = Ei,
                a =
                  (t && n.has(r.charAt(0))) ||
                  (r.startsWith(`\\.`) && n.has(r.charAt(2))) ||
                  (r.startsWith(`\\.\\.`) && n.has(r.charAt(4))),
                o = !t && !e && n.has(r.charAt(0));
              i = a ? wi : o ? Ti : ``;
            }
            let a = ``;
            return (
              this.isEnd() && this.#e.#s && this.#i?.type === `!` && (a = `(?:$|\\/)`),
              [i + r + a, mi(r), (this.#t = !!this.#t), this.#n]
            );
          }
          let n = this.type === `*` || this.type === `+`,
            r = this.type === `!` ? `(?:(?!(?:` : `(?:`,
            i = this.#S(t);
          if (this.isStart() && this.isEnd() && !i && this.type !== `!`) {
            let e = this.toString(),
              t = this;
            return ((t.#r = [e]), (t.type = null), (t.#t = void 0), [e, mi(this.toString()), !1, !1]);
          }
          let a = !n || e || t ? `` : this.#S(!0);
          (a === i && (a = ``), a && (i = `(?:${i})(?:${a})*?`));
          let o = ``;
          if (this.type === `!` && this.#u) o = (this.isStart() && !t ? Ti : ``) + Mi;
          else {
            let n =
              this.type === `!`
                ? `))` + (this.isStart() && !t && !e ? Ti : ``) + `[^/]*?)`
                : this.type === `@`
                  ? `)`
                  : this.type === `?`
                    ? `)?`
                    : this.type === `+` && a
                      ? `)`
                      : this.type === `*` && a
                        ? `)?`
                        : `)${this.type}`;
            o = r + i + n;
          }
          return [o, mi(i), (this.#t = !!this.#t), this.#n];
        }
        #x() {
          if (yi(this)) {
            let e = 0,
              t = !1;
            do {
              t = !0;
              for (let e = 0; e < this.#r.length; e++) {
                let n = this.#r[e];
                typeof n == `object` &&
                  (n.#x(),
                  this.#m(n)
                    ? ((t = !1), this.#_(n, e))
                    : this.#p(n)
                      ? ((t = !1), this.#g(n, e))
                      : this.#y(n) && ((t = !1), this.#b(n)));
              }
            } while (!t && ++e < 10);
          } else for (let e of this.#r) typeof e == `object` && e.#x();
          this.#l = void 0;
        }
        #S(e) {
          return this.#r
            .map((t) => {
              if (typeof t == `string`) throw Error(`string type in extglob ast??`);
              let [n, r, i, a] = t.toRegExpSource(e);
              return ((this.#n = this.#n || a), n);
            })
            .filter((e) => !(this.isStart() && this.isEnd()) || !!e)
            .join(`|`);
        }
        static #C(e, t, n = !1) {
          let r = !1,
            i = ``,
            a = !1,
            o = !1;
          for (let s = 0; s < e.length; s++) {
            let c = e.charAt(s);
            if (r) {
              ((r = !1), (i += (Oi.has(c) ? `\\` : ``) + c));
              continue;
            }
            if (c === `*`) {
              if (o) continue;
              ((o = !0), (i += n && /^[*]+$/.test(e) ? Mi : ji), (t = !0));
              continue;
            }
            if (((o = !1), c === `\\`)) {
              s === e.length - 1 ? (i += `\\\\`) : (r = !0);
              continue;
            }
            if (c === `[`) {
              let [n, r, o, c] = fi(e, s);
              if (o) {
                ((i += n), (a ||= r), (s += o - 1), (t ||= c));
                continue;
              }
            }
            if (c === `?`) {
              ((i += Ai), (t = !0));
              continue;
            }
            i += ki(c);
          }
          return [i, mi(e), !!t, a];
        }
      }),
      (gi = Pi));
  }))();
}
var Ii;
function Li() {
  return (Li = e(() => {
    Ii = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !1 } = {}) =>
      n
        ? t
          ? e.replace(/[?*()[\]{}]/g, `[$&]`)
          : e.replace(/[?*()[\]\\{}]/g, `\\$&`)
        : t
          ? e.replace(/[?*()[\]]/g, `[$&]`)
          : e.replace(/[?*()[\]\\]/g, `\\$&`);
  }))();
}
var Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba;
function xa() {
  return (xa = e(() => {
    (ii(),
      si(),
      Fi(),
      Li(),
      hi(),
      (Ri = (e, t, n = {}) => (oi(t), !n.nocomment && t.charAt(0) === `#` ? !1 : new ba(t, n).match(e))),
      (zi = /^\*+([^+@!?*[(]*)$/),
      (Bi = (e) => (t) => !t.startsWith(`.`) && t.endsWith(e)),
      (Vi = (e) => (t) => t.endsWith(e)),
      (Hi = (e) => ((e = e.toLowerCase()), (t) => !t.startsWith(`.`) && t.toLowerCase().endsWith(e))),
      (Ui = (e) => ((e = e.toLowerCase()), (t) => t.toLowerCase().endsWith(e))),
      (Wi = /^\*+\.\*+$/),
      (Gi = (e) => !e.startsWith(`.`) && e.includes(`.`)),
      (Ki = (e) => e !== `.` && e !== `..` && e.includes(`.`)),
      (qi = /^\.\*+$/),
      (Ji = (e) => e !== `.` && e !== `..` && e.startsWith(`.`)),
      (Yi = /^\*+$/),
      (Xi = (e) => e.length !== 0 && !e.startsWith(`.`)),
      (Zi = (e) => e.length !== 0 && e !== `.` && e !== `..`),
      (Qi = /^\?+([^+@!?*[(]*)?$/),
      ($i = ([e, t = ``]) => {
        let n = ra([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      (ea = ([e, t = ``]) => {
        let n = ia([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      (ta = ([e, t = ``]) => {
        let n = ia([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (na = ([e, t = ``]) => {
        let n = ra([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (ra = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && !e.startsWith(`.`);
      }),
      (ia = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && e !== `.` && e !== `..`;
      }),
      (aa =
        typeof process == `object` && process
          ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform
          : `posix`),
      (oa = { win32: { sep: `\\` }, posix: { sep: `/` } }),
      (sa = aa === `win32` ? oa.win32.sep : oa.posix.sep),
      (Ri.sep = sa),
      (ca = Symbol(`globstar **`)),
      (Ri.GLOBSTAR = ca),
      (la = `[^/]*?`),
      (ua = `(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?`),
      (da = `(?:(?!(?:\\/|^)\\.).)*?`),
      (fa =
        (e, t = {}) =>
        (n) =>
          Ri(n, e, t)),
      (Ri.filter = fa),
      (pa = (e, t = {}) => Object.assign({}, e, t)),
      (ma = (e) => {
        if (!e || typeof e != `object` || !Object.keys(e).length) return Ri;
        let t = Ri;
        return Object.assign((n, r, i = {}) => t(n, r, pa(e, i)), {
          Minimatch: class extends t.Minimatch {
            constructor(t, n = {}) {
              super(t, pa(e, n));
            }
            static defaults(n) {
              return t.defaults(pa(e, n)).Minimatch;
            }
          },
          AST: class extends t.AST {
            constructor(t, n, r = {}) {
              super(t, n, pa(e, r));
            }
            static fromGlob(n, r = {}) {
              return t.AST.fromGlob(n, pa(e, r));
            }
          },
          unescape: (n, r = {}) => t.unescape(n, pa(e, r)),
          escape: (n, r = {}) => t.escape(n, pa(e, r)),
          filter: (n, r = {}) => t.filter(n, pa(e, r)),
          defaults: (n) => t.defaults(pa(e, n)),
          makeRe: (n, r = {}) => t.makeRe(n, pa(e, r)),
          braceExpand: (n, r = {}) => t.braceExpand(n, pa(e, r)),
          match: (n, r, i = {}) => t.match(n, r, pa(e, i)),
          sep: t.sep,
          GLOBSTAR: ca,
        });
      }),
      (Ri.defaults = ma),
      (ha = (e, t = {}) => (
        oi(e),
        t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : Ir(e, { max: t.braceExpandMax })
      )),
      (Ri.braceExpand = ha),
      (ga = (e, t = {}) => new ba(e, t).makeRe()),
      (Ri.makeRe = ga),
      (_a = (e, t, n = {}) => {
        let r = new ba(t, n);
        return ((e = e.filter((e) => r.match(e))), r.options.nonull && !e.length && e.push(t), e);
      }),
      (Ri.match = _a),
      (va = /[?*]|[+@!]\(.*?\)|\[|\]/),
      (ya = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (ba = class {
        options;
        set;
        pattern;
        windowsPathsNoEscape;
        nonegate;
        negate;
        comment;
        empty;
        preserveMultipleSlashes;
        partial;
        globSet;
        globParts;
        nocase;
        isWindows;
        platform;
        windowsNoMagicRoot;
        maxGlobstarRecursion;
        regexp;
        constructor(e, t = {}) {
          (oi(e),
            (t ||= {}),
            (this.options = t),
            (this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200),
            (this.pattern = e),
            (this.platform = t.platform || aa),
            (this.isWindows = this.platform === `win32`),
            (this.windowsPathsNoEscape = !!t.windowsPathsNoEscape || t.allowWindowsEscape === !1),
            this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, `/`)),
            (this.preserveMultipleSlashes = !!t.preserveMultipleSlashes),
            (this.regexp = null),
            (this.negate = !1),
            (this.nonegate = !!t.nonegate),
            (this.comment = !1),
            (this.empty = !1),
            (this.partial = !!t.partial),
            (this.nocase = !!this.options.nocase),
            (this.windowsNoMagicRoot =
              t.windowsNoMagicRoot === void 0 ? !!(this.isWindows && this.nocase) : t.windowsNoMagicRoot),
            (this.globSet = []),
            (this.globParts = []),
            (this.set = []),
            this.make());
        }
        hasMagic() {
          if (this.options.magicalBraces && this.set.length > 1) return !0;
          for (let e of this.set) for (let t of e) if (typeof t != `string`) return !0;
          return !1;
        }
        debug(...e) {}
        make() {
          let e = this.pattern,
            t = this.options;
          if (!t.nocomment && e.charAt(0) === `#`) {
            this.comment = !0;
            return;
          }
          if (!e) {
            this.empty = !0;
            return;
          }
          (this.parseNegate(),
            (this.globSet = [...new Set(this.braceExpand())]),
            t.debug && (this.debug = (...e) => console.error(...e)),
            this.debug(this.pattern, this.globSet));
          let n = this.globSet.map((e) => this.slashSplit(e));
          ((this.globParts = this.preprocess(n)), this.debug(this.pattern, this.globParts));
          let r = this.globParts.map((e, t, n) => {
            if (this.isWindows && this.windowsNoMagicRoot) {
              let t = e[0] === `` && e[1] === `` && (e[2] === `?` || !va.test(e[2])) && !va.test(e[3]),
                n = /^[a-z]:/i.test(e[0]);
              if (t) return [...e.slice(0, 4), ...e.slice(4).map((e) => this.parse(e))];
              if (n) return [e[0], ...e.slice(1).map((e) => this.parse(e))];
            }
            return e.map((e) => this.parse(e));
          });
          if (
            (this.debug(this.pattern, r), (this.set = r.filter((e) => e.indexOf(!1) === -1)), this.isWindows)
          )
            for (let e = 0; e < this.set.length; e++) {
              let t = this.set[e];
              t[0] === `` &&
                t[1] === `` &&
                this.globParts[e][2] === `?` &&
                typeof t[3] == `string` &&
                /^[a-z]:$/i.test(t[3]) &&
                (t[2] = `?`);
            }
          this.debug(this.pattern, this.set);
        }
        preprocess(e) {
          if (this.options.noglobstar)
            for (let t of e) for (let e = 0; e < t.length; e++) t[e] === `**` && (t[e] = `*`);
          let { optimizationLevel: t = 1 } = this.options;
          return (
            t >= 2
              ? ((e = this.firstPhasePreProcess(e)), (e = this.secondPhasePreProcess(e)))
              : (e = t >= 1 ? this.levelOneOptimize(e) : this.adjascentGlobstarOptimize(e)),
            e
          );
        }
        adjascentGlobstarOptimize(e) {
          return e.map((e) => {
            let t = -1;
            for (; (t = e.indexOf(`**`, t + 1)) !== -1;) {
              let n = t;
              for (; e[n + 1] === `**`;) n++;
              n !== t && e.splice(t, n - t);
            }
            return e;
          });
        }
        levelOneOptimize(e) {
          return e.map(
            (e) => (
              (e = e.reduce((e, t) => {
                let n = e[e.length - 1];
                return t === `**` && n === `**`
                  ? e
                  : t === `..` && n && n !== `..` && n !== `.` && n !== `**`
                    ? (e.pop(), e)
                    : (e.push(t), e);
              }, [])),
              e.length === 0 ? [``] : e
            ),
          );
        }
        levelTwoFileOptimize(e) {
          Array.isArray(e) || (e = this.slashSplit(e));
          let t = !1;
          do {
            if (((t = !1), !this.preserveMultipleSlashes)) {
              for (let n = 1; n < e.length - 1; n++) {
                let r = e[n];
                (n !== 1 || r !== `` || e[0] !== ``) &&
                  (r === `.` || r === ``) &&
                  ((t = !0), e.splice(n, 1), n--);
              }
              e[0] === `.` && e.length === 2 && (e[1] === `.` || e[1] === ``) && ((t = !0), e.pop());
            }
            let n = 0;
            for (; (n = e.indexOf(`..`, n + 1)) !== -1;) {
              let r = e[n - 1];
              r &&
                r !== `.` &&
                r !== `..` &&
                r !== `**` &&
                !(this.isWindows && /^[a-z]:$/i.test(r)) &&
                ((t = !0), e.splice(n - 1, 2), (n -= 2));
            }
          } while (t);
          return e.length === 0 ? [``] : e;
        }
        firstPhasePreProcess(e) {
          let t = !1;
          do {
            t = !1;
            for (let n of e) {
              let r = -1;
              for (; (r = n.indexOf(`**`, r + 1)) !== -1;) {
                let i = r;
                for (; n[i + 1] === `**`;) i++;
                i > r && n.splice(r + 1, i - r);
                let a = n[r + 1],
                  o = n[r + 2],
                  s = n[r + 3];
                if (a !== `..` || !o || o === `.` || o === `..` || !s || s === `.` || s === `..`) continue;
                ((t = !0), n.splice(r, 1));
                let c = n.slice(0);
                ((c[r] = `**`), e.push(c), r--);
              }
              if (!this.preserveMultipleSlashes) {
                for (let e = 1; e < n.length - 1; e++) {
                  let r = n[e];
                  (e !== 1 || r !== `` || n[0] !== ``) &&
                    (r === `.` || r === ``) &&
                    ((t = !0), n.splice(e, 1), e--);
                }
                n[0] === `.` && n.length === 2 && (n[1] === `.` || n[1] === ``) && ((t = !0), n.pop());
              }
              let i = 0;
              for (; (i = n.indexOf(`..`, i + 1)) !== -1;) {
                let e = n[i - 1];
                if (e && e !== `.` && e !== `..` && e !== `**`) {
                  t = !0;
                  let e = i === 1 && n[i + 1] === `**` ? [`.`] : [];
                  (n.splice(i - 1, 2, ...e), n.length === 0 && n.push(``), (i -= 2));
                }
              }
            }
          } while (t);
          return e;
        }
        secondPhasePreProcess(e) {
          for (let t = 0; t < e.length - 1; t++)
            for (let n = t + 1; n < e.length; n++) {
              let r = this.partsMatch(e[t], e[n], !this.preserveMultipleSlashes);
              if (r) {
                ((e[t] = []), (e[n] = r));
                break;
              }
            }
          return e.filter((e) => e.length);
        }
        partsMatch(e, t, n = !1) {
          let r = 0,
            i = 0,
            a = [],
            o = ``;
          for (; r < e.length && i < t.length;)
            if (e[r] === t[i]) (a.push(o === `b` ? t[i] : e[r]), r++, i++);
            else if (n && e[r] === `**` && t[i] === e[r + 1]) (a.push(e[r]), r++);
            else if (n && t[i] === `**` && e[r] === t[i + 1]) (a.push(t[i]), i++);
            else if (e[r] === `*` && t[i] && (this.options.dot || !t[i].startsWith(`.`)) && t[i] !== `**`) {
              if (o === `b`) return !1;
              ((o = `a`), a.push(e[r]), r++, i++);
            } else if (t[i] === `*` && e[r] && (this.options.dot || !e[r].startsWith(`.`)) && e[r] !== `**`) {
              if (o === `a`) return !1;
              ((o = `b`), a.push(t[i]), r++, i++);
            } else return !1;
          return e.length === t.length && a;
        }
        parseNegate() {
          if (this.nonegate) return;
          let e = this.pattern,
            t = !1,
            n = 0;
          for (let r = 0; r < e.length && e.charAt(r) === `!`; r++) ((t = !t), n++);
          (n && (this.pattern = e.slice(n)), (this.negate = t));
        }
        matchOne(e, t, n = !1) {
          let r = 0,
            i = 0;
          if (this.isWindows) {
            let n = typeof e[0] == `string` && /^[a-z]:$/i.test(e[0]),
              a = !n && e[0] === `` && e[1] === `` && e[2] === `?` && /^[a-z]:$/i.test(e[3]),
              o = typeof t[0] == `string` && /^[a-z]:$/i.test(t[0]),
              s =
                !o &&
                t[0] === `` &&
                t[1] === `` &&
                t[2] === `?` &&
                typeof t[3] == `string` &&
                /^[a-z]:$/i.test(t[3]),
              c = a ? 3 : n ? 0 : void 0,
              l = s ? 3 : o ? 0 : void 0;
            if (typeof c == `number` && typeof l == `number`) {
              let [n, a] = [e[c], t[l]];
              n.toLowerCase() === a.toLowerCase() && ((t[l] = n), (i = l), (r = c));
            }
          }
          let { optimizationLevel: a = 1 } = this.options;
          return (
            a >= 2 && (e = this.levelTwoFileOptimize(e)),
            t.includes(ca) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i)
          );
        }
        #e(e, t, n, r, i) {
          let a = t.indexOf(ca, i),
            o = t.lastIndexOf(ca),
            [s, c, l] = n
              ? [t.slice(i, a), t.slice(a + 1), []]
              : [t.slice(i, a), t.slice(a + 1, o), t.slice(o + 1)];
          if (s.length) {
            let t = e.slice(r, r + s.length);
            if (!this.#n(t, s, n, 0, 0)) return !1;
            ((r += s.length), (i += s.length));
          }
          let u = 0;
          if (l.length) {
            if (l.length + r > e.length) return !1;
            let t = e.length - l.length;
            if (this.#n(e, l, n, t, 0)) u = l.length;
            else {
              if (e[e.length - 1] !== `` || r + l.length === e.length || (t--, !this.#n(e, l, n, t, 0)))
                return !1;
              u = l.length + 1;
            }
          }
          if (!c.length) {
            let t = !!u;
            for (let n = r; n < e.length - u; n++) {
              let r = String(e[n]);
              if (((t = !0), r === `.` || r === `..` || (!this.options.dot && r.startsWith(`.`)))) return !1;
            }
            return n || t;
          }
          let d = [[[], 0]],
            f = d[0],
            p = 0,
            m = [0];
          for (let e of c) e === ca ? (m.push(p), (f = [[], 0]), d.push(f)) : (f[0].push(e), p++);
          let h = d.length - 1,
            g = e.length - u;
          for (let e of d) e[1] = g - (m[h--] + e[0].length);
          return !!this.#t(e, d, r, 0, n, 0, !!u);
        }
        #t(e, t, n, r, i, a, o) {
          let s = t[r];
          if (!s) {
            for (let t = n; t < e.length; t++) {
              o = !0;
              let n = e[t];
              if (n === `.` || n === `..` || (!this.options.dot && n.startsWith(`.`))) return !1;
            }
            return o;
          }
          let [c, l] = s;
          for (; n <= l;) {
            if (this.#n(e.slice(0, n + c.length), c, i, n, 0) && a < this.maxGlobstarRecursion) {
              let s = this.#t(e, t, n + c.length, r + 1, i, a + 1, o);
              if (s !== !1) return s;
            }
            let s = e[n];
            if (s === `.` || s === `..` || (!this.options.dot && s.startsWith(`.`))) return !1;
            n++;
          }
          return i || null;
        }
        #n(e, t, n, r, i) {
          let a, o, s, c;
          for (a = r, o = i, c = e.length, s = t.length; a < c && o < s; a++, o++) {
            this.debug(`matchOne loop`);
            let n = t[o],
              r = e[a];
            if ((this.debug(t, n, r), n === !1 || n === ca)) return !1;
            let i;
            if (
              (typeof n == `string`
                ? ((i = r === n), this.debug(`string match`, n, r, i))
                : ((i = n.test(r)), this.debug(`pattern match`, n, r, i)),
              !i)
            )
              return !1;
          }
          if (a === c && o === s) return !0;
          if (a === c) return n;
          if (o === s) return a === c - 1 && e[a] === ``;
          throw Error(`wtf?`);
        }
        braceExpand() {
          return ha(this.pattern, this.options);
        }
        parse(e) {
          oi(e);
          let t = this.options;
          if (e === `**`) return ca;
          if (e === ``) return ``;
          let n,
            r = null;
          (n = e.match(Yi))
            ? (r = t.dot ? Zi : Xi)
            : (n = e.match(zi))
              ? (r = (t.nocase ? (t.dot ? Ui : Hi) : t.dot ? Vi : Bi)(n[1]))
              : (n = e.match(Qi))
                ? (r = (t.nocase ? (t.dot ? ea : $i) : t.dot ? ta : na)(n))
                : (n = e.match(Wi))
                  ? (r = t.dot ? Ki : Gi)
                  : (n = e.match(qi)) && (r = Ji);
          let i = Pi.fromGlob(e, this.options).toMMPattern();
          return (r && typeof i == `object` && Reflect.defineProperty(i, "test", { value: r }), i);
        }
        makeRe() {
          if (this.regexp || this.regexp === !1) return this.regexp;
          let e = this.set;
          if (!e.length) return ((this.regexp = !1), this.regexp);
          let t = this.options,
            n = t.noglobstar ? la : t.dot ? ua : da,
            r = new Set(t.nocase ? [`i`] : []),
            i = e
              .map((e) => {
                let t = e.map((e) => {
                  if (e instanceof RegExp) for (let t of e.flags.split(``)) r.add(t);
                  return typeof e == `string` ? ya(e) : e === ca ? ca : e._src;
                });
                t.forEach((e, r) => {
                  let i = t[r + 1],
                    a = t[r - 1];
                  e === ca &&
                    a !== ca &&
                    (a === void 0
                      ? i !== void 0 && i !== ca
                        ? (t[r + 1] = `(?:\\/|` + n + `\\/)?` + i)
                        : (t[r] = n)
                      : i === void 0
                        ? (t[r - 1] = a + `(?:\\/|\\/` + n + `)?`)
                        : i !== ca && ((t[r - 1] = a + `(?:\\/|\\/` + n + `\\/)` + i), (t[r + 1] = ca)));
                });
                let i = t.filter((e) => e !== ca);
                if (this.partial && i.length >= 1) {
                  let e = [];
                  for (let t = 1; t <= i.length; t++) e.push(i.slice(0, t).join(`/`));
                  return `(?:` + e.join(`|`) + `)`;
                }
                return i.join(`/`);
              })
              .join(`|`),
            [a, o] = e.length > 1 ? [`(?:`, `)`] : [``, ``];
          ((i = `^` + a + i + o + `$`),
            this.partial && (i = `^(?:\\/|` + a + i.slice(1, -1) + o + `)$`),
            this.negate && (i = `^(?!` + i + `).+$`));
          try {
            this.regexp = new RegExp(i, [...r].join(``));
          } catch {
            this.regexp = !1;
          }
          return this.regexp;
        }
        slashSplit(e) {
          return this.preserveMultipleSlashes
            ? e.split(`/`)
            : this.isWindows && /^\/\/[^/]+/.test(e)
              ? [``, ...e.split(/\/+/)]
              : e.split(/\/+/);
        }
        match(e, t = this.partial) {
          if ((this.debug(`match`, e, this.pattern), this.comment)) return !1;
          if (this.empty) return e === ``;
          if (e === `/` && t) return !0;
          let n = this.options;
          this.isWindows && (e = e.split(`\\`).join(`/`));
          let r = this.slashSplit(e);
          this.debug(this.pattern, `split`, r);
          let i = this.set;
          this.debug(this.pattern, `set`, i);
          let a = r[r.length - 1];
          if (!a) for (let e = r.length - 2; !a && e >= 0; e--) a = r[e];
          for (let e of i) {
            let i = r;
            if ((n.matchBase && e.length === 1 && (i = [a]), this.matchOne(i, e, t)))
              return n.flipNegate ? !0 : !this.negate;
          }
          return !n.flipNegate && this.negate;
        }
        static defaults(e) {
          return Ri.defaults(e).Minimatch;
        }
      }),
      (Ri.AST = Pi),
      (Ri.Minimatch = ba),
      (Ri.escape = Ii),
      (Ri.unescape = mi));
  }))();
}
function Sa(e) {
  let t = (0, za.c)(111),
    { gitRoot: n, gitCommonDir: r, cwd: i, hostId: a, paths: o } = e,
    s;
  t[0] !== i || t[1] !== n ? ((s = Pa(n, i)), (t[0] = i), (t[1] = n), (t[2] = s)) : (s = t[2]);
  let { normalizedGitRoot: c, normalizedCwd: l, cwdRelativeToGitRoot: u } = s,
    d = c == null ? null : `${c}/.gitattributes`,
    f = u != null && u !== `` ? `${l}/.gitattributes` : null,
    p;
  t[3] !== c || t[4] !== o ? ((p = Ta(c, o)), (t[3] = c), (t[4] = o), (t[5] = p)) : (p = t[5]);
  let m = p,
    h;
  t[6] === r ? (h = t[7]) : ((h = r == null ? null : `${X(r)}/info/attributes`), (t[6] = r), (t[7] = h));
  let g = h,
    _;
  t[8] !== f || t[9] !== g || t[10] !== d || t[11] !== m
    ? ((_ = [d, f, g, ...m].filter(wa)), (t[8] = f), (t[9] = g), (t[10] = d), (t[11] = m), (t[12] = _))
    : (_ = t[12]);
  let v = _,
    y;
  t[13] === v ? (y = t[14]) : ((y = Array.from(new Set(v))), (t[13] = v), (t[14] = y));
  let b = Ma(y, a),
    x;
  t[15] !== b.paths || t[16] !== d
    ? ((x = d != null && b.paths.has(d)), (t[15] = b.paths), (t[16] = d), (t[17] = x))
    : (x = t[17]);
  let S = x,
    C;
  t[18] !== f || t[19] !== b.paths
    ? ((C = f != null && b.paths.has(f)), (t[18] = f), (t[19] = b.paths), (t[20] = C))
    : (C = t[20]);
  let w = C,
    T;
  t[21] === b.paths ? (T = t[22]) : ((T = Array.from(b.paths)), (t[21] = b.paths), (t[22] = T));
  let E;
  t[23] !== f || t[24] !== d || t[25] !== T
    ? ((E = T.filter((e) => e !== d && e !== f)), (t[23] = f), (t[24] = d), (t[25] = T), (t[26] = E))
    : (E = t[26]);
  let D = E,
    k;
  t[27] !== D || t[28] !== a
    ? ((k = {
        queries: D.map((e) => ({
          queryKey: W(`read-file`, { hostId: a, path: e }),
          queryFn: (t) => {
            let { signal: n } = t;
            return ve(`read-file`, { params: { hostId: a, path: e }, signal: n });
          },
          staleTime: xe.FIVE_SECONDS,
        })),
      }),
      (t[27] = D),
      (t[28] = a),
      (t[29] = k))
    : (k = t[29]);
  let A = O(k),
    j;
  bb0: {
    if (u == null || u === ``) {
      let e;
      (t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[30] = e)) : (e = t[30]), (j = e));
      break bb0;
    }
    let e;
    if (t[31] !== u || t[32] !== o) {
      let n;
      (t[34] === u
        ? (n = t[35])
        : ((n = (e) => {
            let t = X(e);
            return t.includes(`/`) && Da(t, u) == null;
          }),
          (t[34] = u),
          (t[35] = n)),
        (e = o.filter(n)),
        (t[31] = u),
        (t[32] = o),
        (t[33] = e));
    } else e = t[33];
    j = e;
  }
  let M = j,
    ee;
  t[36] !== M || t[37] !== l || t[38] !== c
    ? ((ee = La({ ambiguousSlashPaths: M, normalizedCwd: l, normalizedGitRoot: c })),
      (t[36] = M),
      (t[37] = l),
      (t[38] = c),
      (t[39] = ee))
    : (ee = t[39]);
  let N = Ma(ee, a),
    te = d ?? ``,
    P;
  t[40] !== a || t[41] !== te
    ? ((P = { hostId: a, path: te }), (t[40] = a), (t[41] = te), (t[42] = P))
    : (P = t[42]);
  let F;
  t[43] === S ? (F = t[44]) : ((F = { enabled: S }), (t[43] = S), (t[44] = F));
  let I;
  t[45] !== P || t[46] !== F
    ? ((I = { params: P, queryConfig: F }), (t[45] = P), (t[46] = F), (t[47] = I))
    : (I = t[47]);
  let { data: L, isLoading: R } = ge(`read-file`, I),
    z = f ?? ``,
    B;
  t[48] !== a || t[49] !== z
    ? ((B = { hostId: a, path: z }), (t[48] = a), (t[49] = z), (t[50] = B))
    : (B = t[50]);
  let V;
  t[51] === w ? (V = t[52]) : ((V = { enabled: w }), (t[51] = w), (t[52] = V));
  let H;
  t[53] !== B || t[54] !== V
    ? ((H = { params: B, queryConfig: V }), (t[53] = B), (t[54] = V), (t[55] = H))
    : (H = t[55]);
  let { data: U, isLoading: G } = ge(`read-file`, H);
  L?.contents;
  let K = L?.contents ?? null,
    q;
  t[56] === K ? (q = t[57]) : ((q = Ea(K)), (t[56] = K), (t[57] = q));
  let J = q,
    ne;
  (t[58] !== U?.contents || t[59] !== u
    ? ((ne = () => (u == null || u === `` ? null : Ea(U?.contents ?? null, { basePath: u }))),
      (t[58] = U?.contents),
      (t[59] = u),
      (t[60] = ne))
    : (ne = t[60]),
    U?.contents);
  let Y;
  t[61] === ne ? (Y = t[62]) : ((Y = ne()), (t[61] = ne), (t[62] = Y));
  let re = Y;
  U?.contents;
  let ie;
  bb1: {
    if (u == null || u === ``) {
      ie = null;
      break bb1;
    }
    let e = U?.contents ?? null,
      n;
    (t[63] === e ? (n = t[64]) : ((n = Ea(e)), (t[63] = e), (t[64] = n)), (ie = n));
  }
  let ae = ie,
    oe;
  if (
    t[65] !== D ||
    t[66] !== A ||
    t[67] !== f ||
    t[68] !== g ||
    t[69] !== d ||
    t[70] !== re ||
    t[71] !== J ||
    t[72] !== c
  ) {
    let e;
    (t[74] === g
      ? (e = t[75])
      : ((e = (e, t) =>
          e.attributesPath === g
            ? -1
            : t.attributesPath === g
              ? 1
              : t.attributesPath.length - e.attributesPath.length),
        (t[74] = g),
        (t[75] = e)),
      (oe = [
        ...(d != null && J != null ? [{ attributesPath: d, matcher: J }] : []),
        ...(f != null && re != null ? [{ attributesPath: f, matcher: re }] : []),
        ...D.flatMap((e, t) => {
          let n = A[t]?.data?.contents,
            r = e === g ? null : Da(e.slice(0, -15), c),
            i = Ea(n ?? null, { basePath: r });
          return i == null ? [] : [{ attributesPath: e, matcher: i }];
        }),
      ].sort(e)),
      (t[65] = D),
      (t[66] = A),
      (t[67] = f),
      (t[68] = g),
      (t[69] = d),
      (t[70] = re),
      (t[71] = J),
      (t[72] = c),
      (t[73] = oe));
  } else oe = t[73];
  let se = oe,
    ce;
  t[76] !== M || t[77] !== N.paths || t[78] !== l || t[79] !== c
    ? ((ce = Ra({
        ambiguousSlashPaths: M,
        normalizedCwd: l,
        normalizedGitRoot: c,
        existingCandidatePaths: N.paths,
      })),
      (t[76] = M),
      (t[77] = N.paths),
      (t[78] = l),
      (t[79] = c),
      (t[80] = ce))
    : (ce = t[80]);
  let le = ce,
    Z;
  t[81] !== f || t[82] !== le || t[83] !== u || t[84] !== ae || t[85] !== se
    ? ((Z = (e) => {
        let t = X(e);
        for (let { attributesPath: e, matcher: n } of se) {
          let r = n(t);
          if (r != null) return r === `set`;
          if (e === f && Oa(t, u, le)) {
            let e = ae?.(t) ?? null;
            if (e != null) return e === `set`;
          }
        }
        return !1;
      }),
      (t[81] = f),
      (t[82] = le),
      (t[83] = u),
      (t[84] = ae),
      (t[85] = se),
      (t[86] = Z))
    : (Z = t[86]);
  let ue = Z,
    de;
  bb2: {
    if (se.length === 0) {
      let e;
      (t[87] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = new Set()), (t[87] = e)) : (e = t[87]),
        (de = e));
      break bb2;
    }
    let e;
    if (t[88] !== ue || t[89] !== o) {
      let n;
      (t[91] === ue ? (n = t[92]) : ((n = (e) => ue(e)), (t[91] = ue), (t[92] = n)),
        (e = new Set(o.filter(n))),
        (t[88] = ue),
        (t[89] = o),
        (t[90] = e));
    } else e = t[90];
    de = e;
  }
  let fe = de,
    pe;
  if (t[93] !== g || t[94] !== se) {
    let e;
    (t[96] === g
      ? (e = t[97])
      : ((e = (e) => {
          let { attributesPath: t } = e;
          return t !== g;
        }),
        (t[96] = g),
        (t[97] = e)),
      (pe = se.some(e)),
      (t[93] = g),
      (t[94] = se),
      (t[95] = pe));
  } else pe = t[95];
  let me = D.length > 0,
    he;
  t[98] !== A ||
  t[99] !== w ||
  t[100] !== G ||
  t[101] !== N.isLoading ||
  t[102] !== b.isLoading ||
  t[103] !== S ||
  t[104] !== R
    ? ((he = !b.isLoading && !N.isLoading && (!S || !R) && (!w || !G) && A.every(Ca)),
      (t[98] = A),
      (t[99] = w),
      (t[100] = G),
      (t[101] = N.isLoading),
      (t[102] = b.isLoading),
      (t[103] = S),
      (t[104] = R),
      (t[105] = he))
    : (he = t[105]);
  let Q;
  return (
    t[106] !== fe || t[107] !== pe || t[108] !== me || t[109] !== he
      ? ((Q = {
          hasLinguistGeneratedAttributes: pe,
          hasUnhandledAttributesFiles: me,
          isReady: he,
          paths: fe,
        }),
        (t[106] = fe),
        (t[107] = pe),
        (t[108] = me),
        (t[109] = he),
        (t[110] = Q))
      : (Q = t[110]),
    Q
  );
}
function Ca(e) {
  return !e.isLoading;
}
function wa(e) {
  return e != null && e.length > 0;
}
function Ta(e, t) {
  if (e == null) return [];
  let n = new Set();
  for (let r of t) {
    let t = X(r).split(`/`).filter(Boolean);
    for (let r = 0; r < t.length - 1; r += 1) n.add(M(e, `${t.slice(0, r + 1).join(`/`)}/.gitattributes`));
  }
  return Array.from(n);
}
function Ea(e, t = {}) {
  if (!e) return null;
  let n = t.basePath == null ? null : X(t.basePath).replace(/^\/+/, ``).replace(/\/+$/, ``),
    r = e
      .split(/\r?\n/)
      .map((e) => ka(e))
      .filter((e) => e != null);
  return r.length === 0
    ? null
    : (e) => {
        let t = null,
          i = Da(X(e), n);
        if (i == null) return null;
        for (let e of r) e.matches(i) && (t = e.state);
        return t;
      };
}
function Da(e, t) {
  if (t == null) return e;
  let n = `${t}/`;
  return e === t ? `` : e.startsWith(n) ? e.slice(n.length) : null;
}
function Oa(e, t, n) {
  return t == null || t === `` ? !1 : e.includes(`/`) ? n.has(e) : Da(e, t) == null;
}
function ka(e) {
  let t = e.trim();
  if (t.length === 0 || t.startsWith(`#`) || t.startsWith(`[attr]`)) return null;
  let n = t.split(/\s+/);
  if (n.length < 2) return null;
  let r = ja(n[0]);
  if (!r) return null;
  let i = Aa(n.slice(1));
  return i == null ? null : { matches: r, state: i };
}
function Aa(e) {
  let t = null;
  for (let n of e) {
    if (n === `linguist-generated` || n === `linguist-generated=true`) {
      t = `set`;
      continue;
    }
    if (n === `-linguist-generated` || n === `linguist-generated=false`) {
      t = `unset`;
      continue;
    }
    n === `!linguist-generated` && (t = `unspecified`);
  }
  return t;
}
function ja(e) {
  if (!e) return null;
  let t = new ba(e.replace(/^\/+/, ``), {
    dot: !0,
    matchBase: !e.includes(`/`),
    nobrace: !0,
    noext: !0,
    nonegate: !0,
    nocomment: !0,
    platform: `linux`,
  });
  return (e) => t.match(X(e));
}
function Ma(e, t) {
  let n = (0, za.c)(10),
    r;
  n[0] !== t || n[1] !== e ? ((r = { hostId: t, paths: e }), (n[0] = t), (n[1] = e), (n[2] = r)) : (r = n[2]);
  let i = e.length > 0,
    a;
  n[3] === i ? (a = n[4]) : ((a = { enabled: i }), (n[3] = i), (n[4] = a));
  let { data: o, isLoading: s } = le(Ae, r, a);
  o?.existingPaths;
  let c;
  n[5] === o?.existingPaths
    ? (c = n[6])
    : ((c = new Set(o?.existingPaths.map(Na) ?? [])), (n[5] = o?.existingPaths), (n[6] = c));
  let l = c,
    u;
  return (
    n[7] !== l || n[8] !== s
      ? ((u = { isLoading: s, paths: l }), (n[7] = l), (n[8] = s), (n[9] = u))
      : (u = n[9]),
    u
  );
}
function Na(e) {
  return X(e);
}
function Pa(e, t) {
  let n = Fa(e),
    r = Fa(t);
  return { normalizedGitRoot: n, normalizedCwd: r, cwdRelativeToGitRoot: Ia(n, r) };
}
function Fa(e) {
  return e == null ? null : X(e).replace(/\/+$/, ``);
}
function Ia(e, t) {
  if (e == null || t == null) return null;
  if (t === e) return ``;
  let n = `${e}/`;
  return t.startsWith(n) ? t.slice(n.length) : null;
}
function La({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: n }) {
  return n == null || t == null
    ? []
    : e.flatMap((e) => {
        let r = X(e);
        return [M(n, r), M(t, r)];
      });
}
function Ra({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: n, existingCandidatePaths: r }) {
  return n == null || t == null
    ? new Set()
    : new Set(
        e.filter((e) => {
          let i = X(e),
            a = X(M(n, i)),
            o = X(M(t, i));
          return r.has(o) && !r.has(a);
        }),
      );
}
var za;
function Ba() {
  return (Ba = e(() => {
    ((za = D()), w(), H(), xa(), lt(), E(), c(), d());
  }))();
}
function Va(e) {
  let t = (0, Ka.c)(76),
    {
      activeChangedPath: n,
      allFilesStatus: i,
      allowSelectingActiveChangedPath: a,
      changedFileDecorations: o,
      changedFiles: s,
      emptyState: c,
      onOpenFile: l,
      onSelectChangedFile: u,
      root: d,
      showAllFiles: f,
      showChangedFiles: p,
      treeProps: m,
    } = e,
    h = a === void 0 || a,
    g = f === void 0 || f,
    _ = r(Me),
    v = p ?? s.length > 0,
    y = Z(),
    b;
  t[0] !== d || t[1] !== m.hostId
    ? ((b = { hostId: m.hostId, root: d }), (t[0] = d), (t[1] = m.hostId), (t[2] = b))
    : (b = t[2]);
  let x = he(Xa, b),
    C = ne(x),
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    ee,
    N,
    te,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U;
  if (
    t[3] !== n ||
    t[4] !== i ||
    t[5] !== h ||
    t[6] !== o ||
    t[7] !== s ||
    t[8] !== c ||
    t[9] !== y ||
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== d ||
    t[13] !== _ ||
    t[14] !== g ||
    t[15] !== v ||
    t[16] !== C ||
    t[17] !== x ||
    t[18] !== m
  ) {
    ((E = y.formatMessage({
      id: `files.tree.changedFiles`,
      defaultMessage: `Changed files`,
      description: `Collapsible section of changed files in the Files tree`,
    })),
      (T = y.formatMessage({
        id: `files.tree.allFiles`,
        defaultMessage: `All files`,
        description: `Collapsible section of all workspace files in the Files tree`,
      })));
    let e = new Map(),
      r = (t, n, r, i, a) => {
        let o = t === `changed` ? E : T,
          s = n ? `${o}/${n}` : `${o}/`;
        e.set(s, {
          displayPath: s,
          path: t === `changed` || d == null ? r : S(d, r),
          originalPath: i,
          section: t,
          directory: a,
        });
      },
      a = (e, t, n) => {
        let i = t.replace(/\/$/, ``).split(`/`);
        for (let t = 1; t < i.length; t++) {
          let a = i.slice(0, t).join(`/`);
          r(e, `${a}/`, S(n, `../`.repeat(i.length - t)), a, !0);
        }
      };
    (v && r(`changed`, ``, d ?? ``, ``, !0), g && r(`all`, ``, d ?? ``, ``, !0));
    let f = De(s),
      p = [];
    for (let { entry: e, treePath: t } of v ? f : []) {
      if ((a(`changed`, t, e.path), r(`changed`, t, e.path, e.displayPath, !1), e.changeKind == null))
        continue;
      let n = `modified`;
      (e.changeKind === `deleted`
        ? (n = `deleted`)
        : [`added`, `untracked`, `copied`].includes(e.changeKind) && (n = `added`),
        p.push({ path: `${E}/${t}`, status: n }));
    }
    for (let e of g ? m.paths : []) {
      let t = typeof e == `string` ? e : e.displayPath,
        n = typeof e == `string` ? e : e.path;
      (a(`all`, t, d == null ? n : S(d, n)), r(`all`, t, n, t, t.endsWith(`/`)));
    }
    let b = Qe([...e.keys()]).paths,
      W = (t) => e.get(t) ?? e.get(`${t}/`),
      G = [
        ...(v && !C.changedCollapsed ? [E] : []),
        ...(g && !C.allCollapsed ? [T] : []),
        ...[...e.values()]
          .filter(
            (e) =>
              e.section === `changed` &&
              e.directory &&
              e.originalPath &&
              !C.collapsedChangedPaths.includes(e.originalPath),
          )
          .map(Ga),
        ...(m.initialExpandedPaths ?? []).map((e) => `${T}/${e}`),
      ],
      K;
    t[41] !== n || t[42] !== m.selectedPath
      ? ((K = (e) => {
          let { entry: t } = e;
          return n == null ? t.displayPath === m.selectedPath : t.path === n;
        }),
        (t[41] = n),
        (t[42] = m.selectedPath),
        (t[43] = K))
      : (K = t[43]);
    let q = f.find(K);
    ((k = m.selectedPath == null ? null : `${T}/${m.selectedPath}`),
      (n != null || C.selectedSection === `changed`) && q != null && (k = `${E}/${q.treePath}`));
    let J = (t) => [
      ...(m.initialExpandedPaths ?? []).filter((t) => !e.has(`${T}/${t}/`)),
      ...t.flatMap((e) => {
        let t = W(e);
        return t?.section === `all` && t.originalPath ? [t.originalPath.replace(/\/$/, ``)] : [];
      }),
    ];
    ((D = new Map(
      f.flatMap((e) => {
        let { entry: t, treePath: n } = e,
          r = o?.get(t.path);
        return r == null ? [] : [[`${E}/${n}`, r]];
      }),
    )),
      (O = new Map([...D].map(Wa))),
      i?.title != null && O.set(`${T}/`, i.title),
      (I = `flex h-full min-h-0 w-full flex-col px-1`),
      (L = c),
      (F = `min-h-0 flex-1`),
      (w = Lt),
      (R = `${E}:${T}`),
      (z = m),
      (B = `end`),
      (V = (0, Ja.default)([...D.values()].map(Ua), `name`)),
      (H = !1),
      (U = p),
      (A = G),
      (j = (e) => {
        let t = It(e.nativeEvent),
          n = t == null ? null : W(t);
        h && n?.section === `changed` && !n.directory && t === k && u(n.path, { isPreview: !0 });
      }),
      (M = (e) => {
        let t = It(e.nativeEvent),
          r = t == null ? null : W(t);
        r == null ||
          r.directory ||
          (!h && r.path === n) ||
          (r.section === `changed` ? u(r.path, { isPreview: !1 }) : l?.(r.originalPath));
      }),
      (ee = (t) => {
        (_.set(x, (n) => {
          let r = new Set(n.collapsedChangedPaths);
          for (let n of e.values())
            n.section === `changed` &&
              n.directory &&
              n.originalPath &&
              (t.includes(n.displayPath.replace(/\/$/, ``))
                ? r.delete(n.originalPath)
                : r.add(n.originalPath));
          return {
            ...n,
            changedCollapsed: v ? !t.includes(E) : n.changedCollapsed,
            allCollapsed: g ? !t.includes(T) : n.allCollapsed,
            collapsedChangedPaths: [...r],
          };
        }),
          m.onExpandedPathsChange?.(J(t)));
      }),
      (N = (e) => {
        let t = e.map(W).find(Ha);
        t == null ||
          (!h && t.path === n) ||
          (_.set(x, (e) => ({ ...e, selectedSection: t.section })),
          t.section === `changed` ? u(t.path, { isPreview: !0 }) : m.onSelectionChange?.([t.originalPath]));
      }),
      (te = (e) => {
        let t = e.selectedPath == null ? null : W(e.selectedPath);
        m.onStateChange?.({ ...e, expandedPaths: J(e.expandedPaths), selectedPath: t?.originalPath || null });
      }),
      (P = b.flatMap((t) => {
        let n = e.get(t);
        return n == null ? [] : [n];
      })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = h),
      (t[6] = o),
      (t[7] = s),
      (t[8] = c),
      (t[9] = y),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = _),
      (t[14] = g),
      (t[15] = v),
      (t[16] = C),
      (t[17] = x),
      (t[18] = m),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E),
      (t[22] = D),
      (t[23] = O),
      (t[24] = k),
      (t[25] = A),
      (t[26] = j),
      (t[27] = M),
      (t[28] = ee),
      (t[29] = N),
      (t[30] = te),
      (t[31] = P),
      (t[32] = F),
      (t[33] = I),
      (t[34] = L),
      (t[35] = R),
      (t[36] = z),
      (t[37] = B),
      (t[38] = V),
      (t[39] = H),
      (t[40] = U));
  } else
    ((w = t[19]),
      (T = t[20]),
      (E = t[21]),
      (D = t[22]),
      (O = t[23]),
      (k = t[24]),
      (A = t[25]),
      (j = t[26]),
      (M = t[27]),
      (ee = t[28]),
      (N = t[29]),
      (te = t[30]),
      (P = t[31]),
      (F = t[32]),
      (I = t[33]),
      (L = t[34]),
      (R = t[35]),
      (z = t[36]),
      (B = t[37]),
      (V = t[38]),
      (H = t[39]),
      (U = t[40]));
  let W;
  t[44] !== i || t[45] !== T || t[46] !== D
    ? ((W = (e) => {
        let { item: t } = e;
        return t.path === `${T}/` && i != null ? i : t.kind === `file` ? (D.get(t.path) ?? null) : null;
      }),
      (t[44] = i),
      (t[45] = T),
      (t[46] = D),
      (t[47] = W))
    : (W = t[47]);
  let G;
  t[48] === E
    ? (G = t[49])
    : ((G = (e, t) => (e.segments[0] === E ? 0 : 1) - (t.segments[0] === E ? 0 : 1)),
      (t[48] = E),
      (t[49] = G));
  let K;
  t[50] !== w ||
  t[51] !== O ||
  t[52] !== k ||
  t[53] !== A ||
  t[54] !== j ||
  t[55] !== M ||
  t[56] !== ee ||
  t[57] !== N ||
  t[58] !== te ||
  t[59] !== P ||
  t[60] !== W ||
  t[61] !== G ||
  t[62] !== R ||
  t[63] !== z ||
  t[64] !== B ||
  t[65] !== V ||
  t[66] !== H ||
  t[67] !== U
    ? ((K = (0, Ya.jsx)(
        w,
        {
          ...z,
          decorationAlignment: B,
          decorationIcons: V,
          flattenEmptyDirectories: H,
          gitStatus: U,
          initialExpandedPaths: A,
          onClick: j,
          onDoubleClick: M,
          onExpandedPathsChange: ee,
          onSelectionChange: N,
          onStateChange: te,
          paths: P,
          pathDescriptions: O,
          renderRowDecoration: W,
          sectioned: !0,
          selectedPath: k,
          sort: G,
        },
        R,
      )),
      (t[50] = w),
      (t[51] = O),
      (t[52] = k),
      (t[53] = A),
      (t[54] = j),
      (t[55] = M),
      (t[56] = ee),
      (t[57] = N),
      (t[58] = te),
      (t[59] = P),
      (t[60] = W),
      (t[61] = G),
      (t[62] = R),
      (t[63] = z),
      (t[64] = B),
      (t[65] = V),
      (t[66] = H),
      (t[67] = U),
      (t[68] = K))
    : (K = t[68]);
  let q;
  t[69] !== F || t[70] !== K
    ? ((q = (0, Ya.jsx)(`div`, { className: F, children: K })), (t[69] = F), (t[70] = K), (t[71] = q))
    : (q = t[71]);
  let J;
  return (
    t[72] !== I || t[73] !== L || t[74] !== q
      ? ((J = (0, Ya.jsxs)(`div`, { className: I, children: [L, q] })),
        (t[72] = I),
        (t[73] = L),
        (t[74] = q),
        (t[75] = J))
      : (J = t[75]),
    J
  );
}
function Ha(e) {
  return e != null && !e.directory;
}
function Ua(e) {
  let { icon: t } = e;
  return t;
}
function Wa(e) {
  let [t, n] = e,
    { title: r } = n;
  return [t, r];
}
function Ga(e) {
  return e.displayPath.replace(/\/$/, ``);
}
var Ka, qa, Ja, Ya, Xa;
function Za() {
  return (Za = e(() => {
    ((Ka = D()),
      pt(),
      (qa = t(Y(), 1)),
      (Ja = t(u(), 1)),
      H(),
      I(),
      gt(),
      E(),
      Ft(),
      Ue(),
      (Ya = y()),
      (Xa = ee(
        Me,
        (e) => ({
          changedCollapsed: !1,
          allCollapsed: !1,
          collapsedChangedPaths: [],
          selectedSection: `changed`,
        }),
        { isEqual: qa.default },
      )));
  }))();
}
function Qa(e, t, n, r) {
  io != null && (io.font = `${ro}px system-ui`);
  let i = n > 0 ? to : 0,
    a = n > 0 ? eo : ``,
    o = [
      { text: n > 0 ? r.formatNumber(n) : ``, color: `currentColor` },
      {
        text:
          e != null && e > 0
            ? r.formatMessage(
                {
                  id: `wham.message.modal.repoAndDiffStats.linesAdded`,
                  defaultMessage: `+{linesAdded}`,
                  description: `Number of lines added`,
                },
                { linesAdded: r.formatNumber(e) },
              )
            : ``,
        color: `var(--color-codex-git-added)`,
      },
      {
        text:
          t != null && t > 0
            ? r.formatMessage(
                {
                  id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
                  defaultMessage: `-{linesRemoved}`,
                  description: `Number of lines removed`,
                },
                { linesRemoved: r.formatNumber(t) },
              )
            : ``,
        color: `var(--color-codex-git-deleted)`,
      },
    ];
  for (let { text: e, color: t } of o)
    e.length !== 0 &&
      (i > 0 && (i += no),
      (a += `<text x="${i}" y="${to / 2}" fill="${t}" font-size="${ro}" font-family="system-ui" dominant-baseline="middle" direction="ltr" unicode-bidi="isolate">${(0, $a.default)(e)}</text>`),
      (i += Math.ceil(io?.measureText(e).width ?? e.length * ro)));
  return {
    body: a,
    height: to,
    name: `review-file-tree-stats-${e}-${t}-${n}`,
    viewBox: `0 0 ${i} ${to}`,
    width: i,
  };
}
var $a, eo, to, no, ro, io;
function ao() {
  return (ao = e(() => {
    (re(),
      ($a = t(Pe(), 1)),
      ie(),
      (eo = a(o).body),
      (to = o.canvas.width),
      (no = 4),
      (ro = 12),
      (io = typeof OffscreenCanvas > `u` ? null : new OffscreenCanvas(1, 1).getContext(`2d`)));
  }))();
}
function oo(e) {
  let t = (0, lo.c)(23),
    {
      activePath: n,
      allowSelectingActivePath: r,
      cwd: i,
      hostId: a,
      onSelectPath: o,
      commentCountByPath: s,
      entries: c,
      reserveBottomPadding: l,
    } = e,
    u = r !== void 0 && r,
    d = l !== void 0 && l,
    f = Z(),
    p;
  t[0] === i ? (p = t[1]) : ((p = i == null ? null : G(i)), (t[0] = i), (t[1] = p));
  let m = p,
    h;
  t[2] === c ? (h = t[3]) : ((h = c.map(so).join(`\0`)), (t[2] = c), (t[3] = h));
  let g = h,
    _;
  if (t[4] !== s || t[5] !== c || t[6] !== f) {
    _ = new Map();
    for (let e of c) {
      let t = s?.get(e.path) ?? 0;
      (e.additions || e.deletions || t !== 0) &&
        _.set(e.path, {
          icon: Qa(e.additions, e.deletions, t, f),
          title:
            e.additions == null || e.deletions == null
              ? e.path
              : f.formatMessage(
                  {
                    id: `codex.review.fileTree.fileChangeSummary`,
                    defaultMessage: `{path}, added lines: {additions, number}, deleted lines: {deletions, number}, comments: {comments, number}`,
                    description: `Accessible description and tooltip giving a file path and its added and deleted lines and review comments in the Code Review file tree`,
                  },
                  { path: e.path, additions: e.additions, deletions: e.deletions, comments: t },
                ),
        });
    }
    ((t[4] = s), (t[5] = c), (t[6] = f), (t[7] = _));
  } else _ = t[7];
  let v;
  t[8] === d
    ? (v = t[9])
    : ((v = d ? { paddingTop: Fe, paddingBottom: Ne } : void 0), (t[8] = d), (t[9] = v));
  let y;
  t[10] !== n ||
  t[11] !== u ||
  t[12] !== i ||
  t[13] !== _ ||
  t[14] !== c ||
  t[15] !== g ||
  t[16] !== m ||
  t[17] !== a ||
  t[18] !== o
    ? ((y =
        c.length > 0
          ? (0, uo.jsx)(ft, {
              name: `ReviewFileTree`,
              resetKey: g,
              fallback: (0, uo.jsx)(tt, {
                align: `start`,
                className: `px-2 py-2`,
                children: (0, uo.jsx)(Q, {
                  id: `codex.review.fileTree.renderError`,
                  defaultMessage: `File tree couldn't render`,
                  description: `Error shown when the review file tree fails to render`,
                }),
              }),
              children: (0, uo.jsx)(Va, {
                activeChangedPath: n,
                allowSelectingActiveChangedPath: u,
                changedFileDecorations: _,
                changedFiles: c,
                onSelectChangedFile: (e) => o(e),
                root: i,
                showAllFiles: !1,
                treeProps: { cwd: m, hostId: a, paths: [] },
              }),
            })
          : (0, uo.jsx)(co, {})),
      (t[10] = n),
      (t[11] = u),
      (t[12] = i),
      (t[13] = _),
      (t[14] = c),
      (t[15] = g),
      (t[16] = m),
      (t[17] = a),
      (t[18] = o),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== v || t[21] !== y
      ? ((b = (0, uo.jsx)(`div`, { className: `h-full min-h-0 w-full`, style: v, children: y })),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]),
    b
  );
}
function so(e) {
  let { displayPath: t, path: n } = e;
  return `${t}\0${n}`;
}
function co() {
  let e = (0, lo.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, uo.jsx)(tt, {
          align: `start`,
          className: `px-2 py-2`,
          children: (0, uo.jsx)(Q, {
            id: `codex.review.fileSearch.empty`,
            defaultMessage: `No matching files`,
            description: `Empty state shown when the file filter hides all files in review`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var lo, uo;
function fo() {
  return (fo = e(() => {
    ((lo = D()), me(), I(), it(), qe(), Za(), we(), ao(), (uo = y()));
  }))();
}
export {
  yn as C,
  ln as S,
  Bt as T,
  nr as _,
  Za as a,
  qn as b,
  Sa as c,
  hr as d,
  mr as f,
  fr as g,
  lr as h,
  Va as i,
  xr as l,
  br as m,
  oo as n,
  Ea as o,
  pr as p,
  fo as r,
  Ba as s,
  co as t,
  Dr as u,
  cr as v,
  Gt as w,
  Zn as x,
  Gn as y,
};
//# sourceMappingURL=review-file-tree-pane-9aabbb12d575.js.map
