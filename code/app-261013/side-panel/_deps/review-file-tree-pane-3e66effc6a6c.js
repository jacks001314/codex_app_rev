import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $2 as n,
  $4 as r,
  AJ as i,
  BE as a,
  BJ as o,
  BR as s,
  Cht as c,
  Cot as l,
  FD as u,
  Fat as d,
  IDt as f,
  Ixt as p,
  LR as m,
  MC as h,
  Mz as g,
  ND as _,
  Nz as v,
  Pat as y,
  Pxt as b,
  Qot as x,
  RE as S,
  UE as C,
  VDt as w,
  Vxt as T,
  Zot as E,
  Zxt as D,
  _Mt as O,
  _O as k,
  aj as A,
  bO as j,
  bz as M,
  cO as N,
  crt as P,
  cz as F,
  e4 as ee,
  fO as I,
  gMt as te,
  gO as L,
  hot as R,
  i3 as z,
  irt as B,
  jC as V,
  jDt as H,
  kJ as ne,
  lO as U,
  ldt as W,
  lot as G,
  mO as K,
  nx as q,
  oO as re,
  oj as ie,
  qft as J,
  r3 as ae,
  rrt as oe,
  rst as Y,
  sMt as se,
  sO as ce,
  srt as le,
  sz as ue,
  t3 as X,
  tx as Z,
  vO as de,
  vzt as Q,
  wot as fe,
  xMt as pe,
  xz as me,
  yO as he,
  yzt as ge,
  zE as _e,
  zJ as ve,
  zxt as ye,
} from "./app-shared-bbfeca5e5737.js";
import {
  AJn as be,
  Avt as xe,
  BIr as Se,
  Cwr as Ce,
  DJn as we,
  Dfr as Te,
  Dm as Ee,
  EJn as De,
  Efr as Oe,
  Em as ke,
  FJn as Ae,
  HCn as je,
  IIr as Me,
  JPn as Ne,
  MJn as Pe,
  NJn as Fe,
  Qht as Ie,
  WCn as Le,
  XPn as Re,
  bgt as ze,
  bnt as Be,
  d6n as Ve,
  da as He,
  ean as Ue,
  egt as We,
  ent as Ge,
  ga as Ke,
  gwr as qe,
  ha as Je,
  hp as Ye,
  iWr as Xe,
  jvt as Ze,
  kJn as Qe,
  l9n as $e,
  ltt as et,
  mp as tt,
  ott as nt,
  p6n as rt,
  rnt as it,
  stt as at,
  tan as ot,
  ua as st,
  wJn as ct,
  xJn as lt,
  ynt as ut,
} from "./app-initial-5851df3f6cb1.js";
import { n as dt, r as ft } from "./highlight-selectors-4f82ccb0876d.js";
import { a as pt, i as mt, o as ht, r as gt, s as _t } from "./use-diff-annotations-1d5c03397aea.js";
import { i as vt, r as yt, s as bt, t as xt } from "./pull-request-actions-fc24d58eda26.js";
import { n as St, r as Ct } from "./pull-request-code-review-navigation-1eeff0187c2d.js";
import { a as wt, i as Tt, t as Et } from "./pull-request-detail-model-e2eec982b891.js";
import { n as Dt, t as Ot } from "./arrow-curved-right-bc11e9b2085c.js";
import { n as kt, r as At, t as jt } from "./base-file-tree-1123b9ab610d.js";
import { n as Mt, t as Nt } from "./scroll-to-match-701662e58079.js";
function Pt(e) {
  let t = (0, Lt.c)(5),
    { path: n, skipFindHighlight: r } = e,
    i = T(Ie),
    a = T(We)?.id ?? null,
    o = (0, Rt.useRef)(!1),
    s;
  return (
    t[0] !== i || t[1] !== a || t[2] !== n || t[3] !== r
      ? ((s = (e) => {
          let t = !r && i != null;
          (t || o.current) &&
            ((o.current = t),
            Ft({ activeDiffResult: i, activeMatchId: a, fileDiffElement: e, path: n, skipFindHighlight: r }));
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
function Ft({ activeDiffResult: e, activeMatchId: t, fileDiffElement: n, path: r, skipFindHighlight: i }) {
  if ((lt(n, { includeShadowRoots: !0 }), i || e == null)) return;
  let a = dt(e.matches).get(r);
  a != null &&
    a.length !== 0 &&
    (It({ activeMatchId: t, fileDiffElement: n, query: e.query, sourceMatches: a }) ||
      Qe({ target: n, query: e.query, maxMatches: a.length, includeShadowRoots: !0 }).matches.forEach(
        (e, n) => {
          let r = a[n];
          r != null &&
            e.forEach((e) => {
              (Fe({ element: e, matchId: r.id }), Pe(e, r.id === t));
            });
        },
      ));
}
function It({ activeMatchId: e, fileDiffElement: t, query: n, sourceMatches: r }) {
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
    let i = De({ container: t, lineNumber: r.lineNumber, side: r.side, includeShadowRoots: !0 });
    i != null &&
      ((o = !0),
      Qe({ target: i, query: n, maxMatches: r.matches.length, includeShadowRoots: !1 }).matches.forEach(
        (t, n) => {
          let i = r.matches[n];
          i != null &&
            t.forEach((t) => {
              (Fe({ element: t, matchId: i.id }), Pe(t, i.id === e));
            });
        },
      ));
  }
  return o || (a && (t.matches(`[data-line]`) || t.querySelector(`[data-line]`) != null));
}
var Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((Lt = Q()), b(), (Rt = ge()), be(), ft(), ze());
  }))();
}
function Bt(e) {
  if (Ut(e))
    return Yt(e.href)
      ? (qt(e, Vt({ alt: e.text, block: !1, mediaKind: `image`, raw: e.raw, title: e.title, url: e.href })),
        !0)
      : !1;
  if (Gt(e)) {
    let t = e.tokens[0];
    if (e.tokens.length === 1 && Wt(t) && Xt(t.href))
      return (
        qt(
          e,
          Vt({
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
  if (Ht(e)) {
    let t = Kt(e);
    return t != null && (qt(e, Vt({ ...t, block: e.block })), !0);
  }
  if (e.type === `table`) {
    let t = !1;
    return (
      $t.walkTokens([e], (n) => {
        n !== e && (t = Bt(n) || t);
      }),
      t
    );
  }
  return !(`tokens` in e) || !Array.isArray(e.tokens) ? !1 : e.tokens.reduce((e, t) => Bt(t) || e, !1);
}
function Vt({ alt: e, block: t, mediaKind: n, raw: r, title: i, url: a }) {
  let o = { alt: e, kind: n, src: a };
  return (i != null && (o.title = i), { type: `codexDirective`, raw: r, name: Qt, attributes: o, block: t });
}
function Ht(e) {
  return (
    e.type === `html` &&
    `block` in e &&
    typeof e.block == `boolean` &&
    `text` in e &&
    typeof e.text == `string`
  );
}
function Ut(e) {
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
function Wt(e) {
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
function Gt(e) {
  return (
    e.type === `paragraph` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function Kt(e) {
  let t = e.raw.match(/^[ \t]*<(?:img|video)\b(?:[^>"']|"[^"]*"|'[^']*')*>/i)?.[0];
  if (t == null) return null;
  let n = (0, Zt.parse)(t).querySelector(`img, video`);
  if (n == null) return null;
  let r = n.tagName === `VIDEO` ? `video` : `image`;
  if (r === `image` && !e.block) return null;
  let i = n.getAttribute(`src`);
  return i == null || !Yt(i)
    ? null
    : {
        alt: n.getAttribute(`alt`) ?? ``,
        mediaKind: r,
        raw: t,
        title: n.getAttribute(`title`) ?? null,
        url: i,
      };
}
function qt(e, t) {
  for (let t of Reflect.ownKeys(e)) Reflect.deleteProperty(e, t);
  Object.assign(e, t);
}
function Jt(e) {
  let t = e.toLowerCase();
  return (
    t.includes(`github.com/user-attachments/assets/`) ||
    t.includes(`user-images.githubusercontent.com/`) ||
    t.includes(`private-user-images.githubusercontent.com/`)
  );
}
function Yt(e) {
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
function Xt(e) {
  if (!Yt(e)) return !1;
  let t = new URL(e);
  return (
    (t.hostname === `github.com` && t.pathname.startsWith(`/user-attachments/assets/`)) ||
    /\.(?:mov|mp4|webm)$/i.test(t.pathname)
  );
}
var Zt, Qt, $t, en;
function tn() {
  return (tn = e(() => {
    (Se(),
      (Zt = Xe()),
      Te(),
      (Qt = `pull-request-media`),
      ($t = new Me(Oe)),
      (en = {
        extensions: [
          {
            name: `pullRequestMedia`,
            level: `block`,
            tokenizer(e) {
              if (!Jt(e)) return;
              let t = $t.lexer(e)[0];
              return t != null && Bt(t) ? t : void 0;
            },
          },
        ],
      }));
  }))();
}
function nn(e) {
  let t = (0, ln.c)(27),
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
  t[6] === i ? (s = t[7]) : ((s = i == null ? fn : [en, ...i]), (t[6] = i), (t[7] = s));
  let c = s;
  if (o == null) {
    let e;
    t[8] === n ? (e = t[9]) : ((e = He(n)), (t[8] = n), (t[9] = e));
    let o;
    return (
      t[10] !== r || t[11] !== i || t[12] !== a || t[13] !== e
        ? ((o = (0, $.jsx)(rn, { ...a, directives: r, extensions: i, children: e })),
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
  t[15] === r ? (l = t[16]) : ((l = { ...r, [Qt]: sn }), (t[15] = r), (t[16] = l));
  let u;
  t[17] === n ? (u = t[18]) : ((u = He(n)), (t[17] = n), (t[18] = u));
  let d;
  t[19] !== c || t[20] !== a || t[21] !== l || t[22] !== u
    ? ((d = (0, $.jsx)(rn, { ...a, directives: l, extensions: c, children: u })),
      (t[19] = c),
      (t[20] = a),
      (t[21] = l),
      (t[22] = u),
      (t[23] = d))
    : (d = t[23]);
  let f;
  return (
    t[24] !== o || t[25] !== d
      ? ((f = (0, $.jsx)(dn, { value: o, children: d })), (t[24] = o), (t[25] = d), (t[26] = f))
      : (f = t[26]),
    f
  );
}
function rn(e) {
  let t = (0, ln.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)($.Fragment, { children: (0, $.jsx)(Je, { ...e, allowPlayableMedia: !1 }) }),
            null,
          ],
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function an(e) {
  let t = (0, ln.c)(19),
    { request: n, alt: r, className: i, mediaKind: a, title: o, url: s } = e,
    c;
  t[0] !== n || t[1] !== s ? ((c = { ...n, url: s }), (t[0] = n), (t[1] = s), (t[2] = c)) : (c = t[2]);
  let { data: l, isLoading: u } = ye(it, c);
  w();
  let [d, p] = (0, un.useState)(null);
  if (u) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(ae, { className: `icon-sm` })), (t[3] = e))
      : (e = t[3]);
    let n;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsxs)(`div`, {
            className: `inline-flex min-h-24 min-w-40 items-center justify-center gap-2 rounded-md bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(f, {
                  id: `codex.pullRequests.media.loading`,
                  defaultMessage: `Loading GitHub media…`,
                  description: `Loading label for a pull request media attachment`,
                }),
              }),
            ],
          })),
          (t[4] = n))
        : (n = t[4]),
      n
    );
  }
  if (d === s || l?.status !== `success` || !cn(l.mimeType, a)) {
    let e;
    return (t[5] === s ? (e = t[6]) : ((e = (0, $.jsx)(on, { url: s })), (t[5] = s), (t[6] = e)), e);
  }
  let { contentsBase64: m, mimeType: h } = l;
  if (a === `video` && !h.startsWith(`image/`)) {
    let e;
    return (
      t[7] === s
        ? (e = t[8])
        : ((e = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)($.Fragment, { children: (0, $.jsx)(on, { url: s, openExternally: !0 }) }),
              null,
            ],
          })),
          (t[7] = s),
          (t[8] = e)),
      e
    );
  }
  let g;
  t[9] === i
    ? (g = t[10])
    : ((g = te(`block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md object-contain shadow-md`, i)),
      (t[9] = i),
      (t[10] = g));
  let _ = `data:${h};base64,${m}`,
    v;
  t[11] === s ? (v = t[12]) : ((v = () => p(s)), (t[11] = s), (t[12] = v));
  let y;
  return (
    t[13] !== r || t[14] !== g || t[15] !== _ || t[16] !== v || t[17] !== o
      ? ((y = (0, $.jsx)(`img`, { alt: r, className: g, loading: `lazy`, src: _, title: o, onError: v })),
        (t[13] = r),
        (t[14] = g),
        (t[15] = _),
        (t[16] = v),
        (t[17] = o),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function on(e) {
  let t = (0, ln.c)(7),
    { url: n, openExternally: i } = e,
    a = i !== void 0 && i,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        role: `status`,
        children: (0, $.jsx)(f, {
          id: `codex.pullRequests.media.unavailable`,
          defaultMessage: `Preview unavailable`,
          description: `Message shown when a pull request media attachment cannot be previewed`,
        }),
      })),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] !== a || t[2] !== n
    ? ((s = (e) => {
        Re({
          event: e,
          href: n,
          initiator: `open_in_browser_bridge`,
          openTarget: a ? `external-browser` : void 0,
        });
      }),
      (t[1] = a),
      (t[2] = n),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(f, {
        id: `codex.pullRequests.media.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Button label for opening a pull request attachment on GitHub`,
      })),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] === s
      ? (l = t[6])
      : ((l = (0, $.jsxs)(`div`, {
          className: `my-3 flex min-h-24 min-w-40 flex-col items-center justify-center gap-2 rounded-lg bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
          children: [o, (0, $.jsx)(r, { color: `outline`, onClick: s, children: c })],
        })),
        (t[5] = s),
        (t[6] = l)),
    l
  );
}
function sn(e) {
  let t = (0, ln.c)(6),
    { attributes: n } = e,
    r = (0, un.useContext)(dn),
    i = n.kind,
    a = n.src;
  if (r == null || (i !== `image` && i !== `video`) || typeof a != `string`) return null;
  let o = typeof n.alt == `string` ? n.alt : ``,
    s = typeof n.title == `string` ? n.title : void 0,
    c;
  return (
    t[0] !== i || t[1] !== r || t[2] !== o || t[3] !== s || t[4] !== a
      ? ((c = (0, $.jsx)(an, { request: r, alt: o, className: `my-3`, mediaKind: i, title: s, url: a })),
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
function cn(e, t) {
  return e.startsWith(`image/`) || e === `application/octet-stream` || e.startsWith(`${t}/`);
}
var ln, un, $, dn, fn;
function pn() {
  return (pn = e(() => {
    ((ln = Q()),
      O(),
      b(),
      (un = ge()),
      H(),
      X(),
      Ne(),
      z(),
      st(),
      Ke(),
      Ge(),
      tn(),
      ($ = pe()),
      (dn = (0, un.createContext)(null)),
      (fn = [en]));
  }))();
}
function mn(e) {
  let t = (0, gn.c)(21),
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
  let o = (0, _n.useRef)(null),
    s;
  t[5] === a.length ? (s = t[6]) : ((s = (e, t) => hn(t, a.length > 0)), (t[5] = a.length), (t[6] = s));
  let c = u(s),
    l;
  t[7] === a.length
    ? (l = t[8])
    : ((l = () => {
        o.current != null && hn(o.current, a.length > 0);
      }),
      (t[7] = a.length),
      (t[8] = l));
  let d;
  (t[9] === a ? (d = t[10]) : ((d = [a]), (t[9] = a), (t[10] = d)), (0, _n.useLayoutEffect)(l, d));
  let f;
  t[11] !== c || t[12] !== i ? ((f = ie(i, o, c)), (t[11] = c), (t[12] = i), (t[13] = f)) : (f = t[13]);
  let p;
  t[14] === n
    ? (p = t[15])
    : ((p = (e) => {
        (n?.(e),
          !e.defaultPrevented &&
            !e.nativeEvent.isComposing &&
            (e.metaKey || e.ctrlKey) &&
            e.key === `Enter` &&
            (e.preventDefault(), e.currentTarget.form?.requestSubmit()));
      }),
      (t[14] = n),
      (t[15] = p));
  let m;
  return (
    t[16] !== r || t[17] !== f || t[18] !== p || t[19] !== a
      ? ((m = (0, vn.jsx)(`textarea`, {
          ...r,
          ref: f,
          className: `block min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-0 pt-2.5 pb-0 text-base leading-7 text-default outline-none placeholder:text-tertiary`,
          rows: 1,
          value: a,
          onKeyDown: p,
        })),
        (t[16] = r),
        (t[17] = f),
        (t[18] = p),
        (t[19] = a),
        (t[20] = m))
      : (m = t[20]),
    m
  );
}
function hn(e, t) {
  if (!t) {
    e.style.removeProperty(`height`);
    return;
  }
  ((e.style.height = `auto`), (e.style.height = `${Math.min(e.scrollHeight, yn)}px`));
}
var gn, _n, vn, yn;
function bn() {
  return (bn = e(() => {
    ((gn = Q()), (_n = ge()), _(), A(), (vn = pe()), (yn = 192));
  }))();
}
var xn;
function Sn() {
  return (Sn = e(() => {
    (b(),
      ut(),
      fe(),
      d(),
      le(),
      (xn = D(l, ({ request: e, source: t }) => ({
        enabled: e.scope === `mentions` || e.query.length > 0,
        queryFn: async ({ signal: n }) => {
          let r = await Be(`gh-user-search`, e, { signal: n, source: t });
          if (r.status === `error`) throw Error(r.error);
          return r.users;
        },
        queryKey: B(`gh-user-search`, e),
        retry: !1,
        staleTime: y.ONE_MINUTE,
      }))));
  }))();
}
function Cn(e) {
  let t = (0, On.c)(119),
    {
      ariaLabel: n,
      autoFocus: r,
      body: i,
      disabled: o,
      placeholder: s,
      request: c,
      source: l,
      onBodyChange: u,
    } = e,
    d = w(),
    p = (0, An.useId)(),
    m = (0, An.useRef)(null),
    h = (0, An.useRef)(null),
    [g, _] = (0, An.useState)(-1),
    [v, y] = (0, An.useState)(null),
    b = v?.query ?? ``,
    x = ot(b, Mn),
    C = v != null && !o,
    T;
  t[0] === c ? (T = t[1]) : ((T = { ...c, query: ``, scope: `mentions` }), (t[0] = c), (t[1] = T));
  let E;
  t[2] !== l || t[3] !== T
    ? ((E = { request: T, source: l }), (t[2] = l), (t[3] = T), (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === C ? (D = t[6]) : ((D = { enabled: C }), (t[5] = C), (t[6] = D));
  let { data: O, isError: k, isLoading: A } = ye(xn, E, D),
    j = C && b.length >= 2 && x === b,
    M;
  t[7] !== x || t[8] !== c
    ? ((M = { ...c, query: x, scope: `mentions` }), (t[7] = x), (t[8] = c), (t[9] = M))
    : (M = t[9]);
  let N;
  t[10] !== l || t[11] !== M
    ? ((N = { request: M, source: l }), (t[10] = l), (t[11] = M), (t[12] = N))
    : (N = t[12]);
  let P;
  t[13] === j ? (P = t[14]) : ((P = { enabled: j }), (t[13] = j), (t[14] = P));
  let { data: F, isError: ee, isLoading: I } = ye(xn, N, P),
    te,
    L,
    R,
    z,
    B,
    V,
    H,
    ne,
    U,
    W,
    G,
    K,
    q,
    re,
    ie,
    J,
    ae,
    oe,
    Y,
    se,
    ce,
    le;
  if (
    t[15] !== v ||
    t[16] !== n ||
    t[17] !== r ||
    t[18] !== i ||
    t[19] !== j ||
    t[20] !== ee ||
    t[21] !== I ||
    t[22] !== F ||
    t[23] !== o ||
    t[24] !== g ||
    t[25] !== d ||
    t[26] !== p ||
    t[27] !== b ||
    t[28] !== C ||
    t[29] !== u ||
    t[30] !== k ||
    t[31] !== A ||
    t[32] !== O ||
    t[33] !== s
  ) {
    let e = O?.filter((e) => {
      let { login: t } = e;
      return t.toLowerCase().includes(b.toLowerCase());
    });
    B =
      O == null && (!j || F == null) ? void 0 : (0, kn.default)([...(e ?? []), ...(j ? (F ?? []) : [])], En);
    let c = (B?.length ?? 0) > 0,
      l = A || (b.length >= 2 && (!j || I)),
      _ = k || (j && ee),
      x = C && (b.length !== 1 || c),
      w;
    t[56] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (e) => {
          let t = Dn(e),
            n = h.current;
          if (t != null && n != null && t.from === n.from && t.query.startsWith(n.query)) {
            y(null);
            return;
          }
          ((h.current = null), y(t));
        }),
        (t[56] = w))
      : (w = t[56]);
    let T = w,
      E;
    t[57] === v
      ? (E = t[58])
      : ((E = () => {
          ((h.current = v), y(null));
        }),
        (t[57] = v),
        (t[58] = E));
    let D = E,
      M;
    (t[59] !== v || t[60] !== i || t[61] !== u
      ? ((M = (e) => {
          if (v == null) return;
          let t = i.slice(v.to),
            n = t === `` ? ` ` : ``,
            r = `@${e.login}${n}`,
            a = `${i.slice(0, v.from)}${r}${t}`,
            o = v.from + r.length;
          (u(a),
            (h.current = { from: v.from, query: e.login, to: v.from + e.login.length + 1 }),
            y(null),
            requestAnimationFrame(() => {
              (m.current?.focus(), m.current?.setSelectionRange(o, o));
            }));
        }),
        (t[59] = v),
        (t[60] = i),
        (t[61] = u),
        (t[62] = M))
      : (M = t[62]),
      (z = M));
    let N = null;
    if (!c) {
      if (l) {
        let e;
        (t[63] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, jn.jsx)(f, {
              id: `pullRequestsPage.detail.commentInput.mentions.loading`,
              defaultMessage: `Searching GitHub users…`,
              description: `Loading message shown while searching for GitHub users to mention`,
            })),
            (t[63] = e))
          : (e = t[63]),
          (N = e));
      } else if (_) {
        let e;
        (t[64] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, jn.jsx)(f, {
              id: `pullRequestsPage.detail.commentInput.mentions.error`,
              defaultMessage: `Couldn’t search GitHub users`,
              description: `Error shown when GitHub user mention suggestions fail to load`,
            })),
            (t[64] = e))
          : (e = t[64]),
          (N = e));
      } else if (B != null) {
        let e;
        (t[65] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, jn.jsx)(f, {
              id: `pullRequestsPage.detail.commentInput.mentions.empty`,
              defaultMessage: `No GitHub users found`,
              description: `Empty state shown when no GitHub users match a mention query`,
            })),
            (t[65] = e))
          : (e = t[65]),
          (N = e));
      }
    }
    ((R = S), (oe = x));
    let P = x && c && g >= 0 ? `${p}-option-${g}` : void 0,
      ue = x && c ? p : void 0,
      X;
    t[66] === Symbol.for(`react.memo_cache_sentinel`) ? ((X = () => y(null)), (t[66] = X)) : (X = t[66]);
    let Z;
    t[67] === u
      ? (Z = t[68])
      : ((Z = (e) => {
          (u(e.currentTarget.value), T(e.currentTarget));
        }),
        (t[67] = u),
        (t[68] = Z));
    let de;
    t[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((de = (e) => {
          T(e.currentTarget);
        }),
        (t[69] = de))
      : (de = t[69]);
    let Q;
    t[70] !== D || t[71] !== c || t[72] !== x
      ? ((Q = (e) => {
          if (!e.nativeEvent.isComposing) {
            if ((e.metaKey || e.ctrlKey) && e.key === `Enter`) {
              (e.preventDefault(), D(), e.currentTarget.form?.requestSubmit());
              return;
            }
            if (x && !c && (e.key === `ArrowDown` || e.key === `ArrowUp`)) {
              e.preventDefault();
              return;
            }
            e.key === `Escape` && x && (e.preventDefault(), e.stopPropagation(), D());
          }
        }),
        (t[70] = D),
        (t[71] = c),
        (t[72] = x),
        (t[73] = Q))
      : (Q = t[73]);
    let fe;
    (t[74] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((fe = (e) => {
          T(e.currentTarget);
        }),
        (t[74] = fe))
      : (fe = t[74]),
      t[75] !== n ||
      t[76] !== r ||
      t[77] !== i ||
      t[78] !== o ||
      t[79] !== s ||
      t[80] !== P ||
      t[81] !== ue ||
      t[82] !== Z ||
      t[83] !== Q
        ? ((Y = (0, jn.jsx)(_e, {
            asChild: !0,
            children: (0, jn.jsx)(mn, {
              ref: m,
              "aria-activedescendant": P,
              "aria-autocomplete": `list`,
              "aria-controls": ue,
              "aria-haspopup": `listbox`,
              "aria-label": n,
              autoFocus: r,
              disabled: o,
              placeholder: s,
              value: i,
              onBlur: X,
              onChange: Z,
              onFocus: de,
              onKeyDown: Q,
              onSelect: fe,
            }),
          })),
          (t[75] = n),
          (t[76] = r),
          (t[77] = i),
          (t[78] = o),
          (t[79] = s),
          (t[80] = P),
          (t[81] = ue),
          (t[82] = Z),
          (t[83] = Q),
          (t[84] = Y))
        : (Y = t[84]),
      (L = a),
      (G = `start`),
      (K = `z-50 w-[var(--radix-popover-trigger-width)]`),
      (q = `top`),
      (re = 8),
      (ie = !0),
      (J = Tn),
      (ae = wn),
      (te = ke),
      (H = x),
      (ne = p),
      (U = b),
      (W = !0),
      t[85] === N
        ? (se = t[86])
        : ((se = N == null ? null : (0, jn.jsx)(`span`, { role: `status`, children: N })),
          (t[85] = N),
          (t[86] = se)),
      (ce = `github-users`),
      (le = l && !c),
      (V =
        B?.slice(0, 10).map((e) => ({
          ariaLabel: d.formatMessage(
            {
              id: `pullRequestsPage.detail.commentInput.mentions.select`,
              defaultMessage: `Mention @{login}`,
              description: `Accessible label for selecting a GitHub user mention suggestion`,
            },
            { login: e.login },
          ),
          content: (0, jn.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [
              (0, jn.jsx)(`img`, {
                alt: ``,
                className: `size-6 shrink-0 rounded-full bg-white object-cover`,
                src: e.avatarUrl,
              }),
              (0, jn.jsx)(`span`, {
                className: `truncate`,
                children: (0, jn.jsx)(f, {
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
      (t[15] = v),
      (t[16] = n),
      (t[17] = r),
      (t[18] = i),
      (t[19] = j),
      (t[20] = ee),
      (t[21] = I),
      (t[22] = F),
      (t[23] = o),
      (t[24] = g),
      (t[25] = d),
      (t[26] = p),
      (t[27] = b),
      (t[28] = C),
      (t[29] = u),
      (t[30] = k),
      (t[31] = A),
      (t[32] = O),
      (t[33] = s),
      (t[34] = te),
      (t[35] = L),
      (t[36] = R),
      (t[37] = z),
      (t[38] = B),
      (t[39] = V),
      (t[40] = H),
      (t[41] = ne),
      (t[42] = U),
      (t[43] = W),
      (t[44] = G),
      (t[45] = K),
      (t[46] = q),
      (t[47] = re),
      (t[48] = ie),
      (t[49] = J),
      (t[50] = ae),
      (t[51] = oe),
      (t[52] = Y),
      (t[53] = se),
      (t[54] = ce),
      (t[55] = le));
  } else
    ((te = t[34]),
      (L = t[35]),
      (R = t[36]),
      (z = t[37]),
      (B = t[38]),
      (V = t[39]),
      (H = t[40]),
      (ne = t[41]),
      (U = t[42]),
      (W = t[43]),
      (G = t[44]),
      (K = t[45]),
      (q = t[46]),
      (re = t[47]),
      (ie = t[48]),
      (J = t[49]),
      (ae = t[50]),
      (oe = t[51]),
      (Y = t[52]),
      (se = t[53]),
      (ce = t[54]),
      (le = t[55]));
  let ue;
  t[87] !== V || t[88] !== se || t[89] !== ce || t[90] !== le
    ? ((ue = [{ emptyState: se, id: ce, isLoading: le, items: V }]),
      (t[87] = V),
      (t[88] = se),
      (t[89] = ce),
      (t[90] = le),
      (t[91] = ue))
    : (ue = t[91]);
  let X;
  t[92] === Symbol.for(`react.memo_cache_sentinel`) ? ((X = (e, t) => _(t)), (t[92] = X)) : (X = t[92]);
  let Z;
  t[93] !== z || t[94] !== B
    ? ((Z = (e) => {
        let t = B?.find((t) => t.login === e.key);
        t != null && z(t);
      }),
      (t[93] = z),
      (t[94] = B),
      (t[95] = Z))
    : (Z = t[95]);
  let de;
  t[96] !== te || t[97] !== H || t[98] !== ne || t[99] !== U || t[100] !== W || t[101] !== ue || t[102] !== Z
    ? ((de = (0, jn.jsx)(te, {
        isActive: H,
        listboxId: ne,
        query: U,
        selectOnTab: W,
        sections: ue,
        onHighlight: X,
        onSelect: Z,
      })),
      (t[96] = te),
      (t[97] = H),
      (t[98] = ne),
      (t[99] = U),
      (t[100] = W),
      (t[101] = ue),
      (t[102] = Z),
      (t[103] = de))
    : (de = t[103]);
  let Q;
  t[104] !== L ||
  t[105] !== G ||
  t[106] !== K ||
  t[107] !== q ||
  t[108] !== re ||
  t[109] !== ie ||
  t[110] !== J ||
  t[111] !== ae ||
  t[112] !== de
    ? ((Q = (0, jn.jsx)(L, {
        align: G,
        className: K,
        side: q,
        sideOffset: re,
        unstyled: ie,
        onCloseAutoFocus: J,
        onOpenAutoFocus: ae,
        children: de,
      })),
      (t[104] = L),
      (t[105] = G),
      (t[106] = K),
      (t[107] = q),
      (t[108] = re),
      (t[109] = ie),
      (t[110] = J),
      (t[111] = ae),
      (t[112] = de),
      (t[113] = Q))
    : (Q = t[113]);
  let fe;
  return (
    t[114] !== R || t[115] !== oe || t[116] !== Y || t[117] !== Q
      ? ((fe = (0, jn.jsxs)(R, { open: oe, children: [Y, Q] })),
        (t[114] = R),
        (t[115] = oe),
        (t[116] = Y),
        (t[117] = Q),
        (t[118] = fe))
      : (fe = t[118]),
    fe
  );
}
function wn(e) {
  return e.preventDefault();
}
function Tn(e) {
  return e.preventDefault();
}
function En(e) {
  let { login: t } = e;
  return t.toLowerCase();
}
function Dn(e) {
  let { selectionEnd: t, selectionStart: n, value: r } = e;
  if (n !== t) return null;
  let i = /(^|[^A-Za-z0-9_-])@([A-Za-z0-9_-]*)$/.exec(r.slice(0, n));
  if (i == null) return null;
  let a = i[2] ?? ``,
    o = /^[A-Za-z0-9_-]*/.exec(r.slice(n))?.[0];
  return { from: n - a.length - 1, query: a, to: n + (o?.length ?? 0) };
}
var On, kn, An, jn, Mn;
function Nn() {
  return (Nn = e(() => {
    ((On = Q()),
      (kn = t(se(), 1)),
      b(),
      (An = ge()),
      H(),
      Ee(),
      C(),
      Ue(),
      Sn(),
      bn(),
      (jn = pe()),
      (Mn = 500));
  }))();
}
function Pn(e) {
  let t = (0, Fn.c)(80),
    {
      authorAvatar: i,
      autoFocus: a,
      initialBody: s,
      isEditing: c,
      isPending: l,
      isReply: u,
      provider: d,
      request: f,
      replyToAuthorLogin: p,
      source: m,
      onDirtyChange: h,
      onCancel: _,
      onSubmit: v,
    } = e,
    y = a !== void 0 && a,
    b = s === void 0 ? `` : s,
    x = c !== void 0 && c,
    S = u !== void 0 && u,
    C = w(),
    [T, E] = (0, In.useState)(b),
    [D, O] = (0, In.useState)(null),
    k;
  t[0] === T ? (k = t[1]) : ((k = T.trim()), (t[0] = T), (t[1] = k));
  let A = k,
    j,
    M;
  (t[2] !== T.length || t[3] !== h
    ? ((j = () => (
        h?.(T.length > 0),
        () => {
          h?.(!1);
        }
      )),
      (M = [T.length, h]),
      (t[2] = T.length),
      (t[3] = h),
      (t[4] = j),
      (t[5] = M))
    : ((j = t[4]), (M = t[5])),
    (0, In.useEffect)(j, M));
  let N, P;
  if (x) {
    let e;
    (t[6] === C
      ? (e = t[7])
      : ((e = C.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.submit`,
          defaultMessage: `Save changes`,
          description: `Accessible label for saving an edited pull request comment`,
        })),
        (t[6] = C),
        (t[7] = e)),
      (N = e));
    let n;
    (t[8] === C
      ? (n = t[9])
      : ((n = C.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.ariaLabel`,
          defaultMessage: `Edit pull request comment`,
          description: `Accessible label for editing a pull request comment`,
        })),
        (t[8] = C),
        (t[9] = n)),
      (P = n));
  } else if (S) {
    let e;
    (t[10] === C
      ? (e = t[11])
      : ((e = C.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request activity reply`,
        })),
        (t[10] = C),
        (t[11] = e)),
      (N = e));
    let n;
    (t[12] === C
      ? (n = t[13])
      : ((n = C.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.ariaLabel`,
          defaultMessage: `Pull request reply`,
          description: `Accessible label for the pull request detail reply composer`,
        })),
        (t[12] = C),
        (t[13] = n)),
      (P = n));
  } else {
    let e;
    (t[14] === C
      ? (e = t[15])
      : ((e = C.formatMessage({
          id: `pullRequestsPage.detail.commentInput.submit`,
          defaultMessage: `Post comment`,
          description: `Accessible label for posting a pull request detail comment`,
        })),
        (t[14] = C),
        (t[15] = e)),
      (N = e));
    let n;
    (t[16] !== C || t[17] !== d
      ? ((n =
          d === `gitlab`
            ? C.formatMessage({
                id: `gitlabMergeRequest.commentInput.ariaLabel`,
                defaultMessage: `Merge request comment`,
                description: `Accessible label for writing a GitLab merge request comment`,
              })
            : C.formatMessage({
                id: `pullRequestsPage.detail.commentInput.ariaLabel`,
                defaultMessage: `Pull request comment`,
                description: `Accessible label for the pull request detail comment composer`,
              })),
        (t[16] = C),
        (t[17] = d),
        (t[18] = n))
      : (n = t[18]),
      (P = n));
  }
  let F;
  t[19] !== y ||
  t[20] !== T ||
  t[21] !== P ||
  t[22] !== C ||
  t[23] !== l ||
  t[24] !== S ||
  t[25] !== d ||
  t[26] !== p ||
  t[27] !== f ||
  t[28] !== m
    ? ((F =
        d === `gitlab`
          ? (0, Ln.jsx)(mn, {
              "aria-label": P,
              autoFocus: y,
              disabled: l,
              placeholder: C.formatMessage({
                id: `pullRequestsPage.detail.commentInput.placeholder`,
                defaultMessage: `Leave a comment`,
                description: `Placeholder shown in the pull request detail comment composer`,
              }),
              value: T,
              onChange: (e) => {
                (E(e.currentTarget.value), O(null));
              },
            })
          : (0, Ln.jsx)(Cn, {
              ariaLabel: P,
              autoFocus: y,
              body: T,
              disabled: l,
              placeholder: S
                ? C.formatMessage(
                    {
                      id: `pullRequestsPage.detail.commentReplyInput.placeholder`,
                      defaultMessage: `Reply to {author}`,
                      description: `Placeholder shown when replying to a pull request activity comment`,
                    },
                    {
                      author:
                        p ??
                        C.formatMessage({
                          id: `pullRequestsPage.detail.commentReplyInput.unknownAuthor`,
                          defaultMessage: `comment`,
                          description: `Fallback reply target label for the pull request activity reply composer`,
                        }),
                    },
                  )
                : C.formatMessage({
                    id: `pullRequestsPage.detail.commentInput.placeholder`,
                    defaultMessage: `Leave a comment`,
                    description: `Placeholder shown in the pull request detail comment composer`,
                  }),
              request: f,
              source: m,
              onBodyChange: (e) => {
                (E(e), O(null));
              },
            })),
      (t[19] = y),
      (t[20] = T),
      (t[21] = P),
      (t[22] = C),
      (t[23] = l),
      (t[24] = S),
      (t[25] = d),
      (t[26] = p),
      (t[27] = f),
      (t[28] = m),
      (t[29] = F))
    : (F = t[29]);
  let ee = F,
    I;
  t[30] !== C || t[31] !== x || t[32] !== l || t[33] !== _
    ? ((I =
        _ == null
          ? null
          : (0, Ln.jsx)(ue, {
              delayDuration: 250,
              tooltipContent: x
                ? C.formatMessage({
                    id: `pullRequestsPage.detail.commentEditInput.cancelTooltip`,
                    defaultMessage: `Cancel editing`,
                    description: `Tooltip for closing a pull request comment editor`,
                  })
                : C.formatMessage({
                    id: `pullRequestsPage.detail.commentReplyInput.cancelTooltip`,
                    defaultMessage: `Cancel reply`,
                    description: `Tooltip for closing a pull request activity reply composer`,
                  }),
              children: (0, Ln.jsx)(r, {
                "aria-label": C.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label for closing a pull request activity reply composer`,
                }),
                color: `ghost`,
                disabled: l,
                size: `composerSm`,
                uniform: !0,
                onClick: _,
                children: (0, Ln.jsx)(g, { "aria-hidden": !1, asset: o }),
              }),
            })),
      (t[30] = C),
      (t[31] = x),
      (t[32] = l),
      (t[33] = _),
      (t[34] = I))
    : (I = t[34]);
  let te = A.length === 0,
    L;
  t[35] === l
    ? (L = t[36])
    : ((L = l ? null : (0, Ln.jsx)(g, { "aria-hidden": !1, asset: n })), (t[35] = l), (t[36] = L));
  let R;
  t[37] !== l || t[38] !== N || t[39] !== te || t[40] !== L
    ? ((R = (0, Ln.jsx)(r, {
        "aria-label": N,
        color: `primary`,
        disabled: te,
        loading: l,
        size: `composerSm`,
        type: `submit`,
        uniform: !0,
        children: L,
      })),
      (t[37] = l),
      (t[38] = N),
      (t[39] = te),
      (t[40] = L),
      (t[41] = R))
    : (R = t[41]);
  let z;
  t[42] !== N || t[43] !== R
    ? ((z = (0, Ln.jsx)(ue, { delayDuration: 250, tooltipContent: N, children: R })),
      (t[42] = N),
      (t[43] = R),
      (t[44] = z))
    : (z = t[44]);
  let B;
  t[45] !== z || t[46] !== I
    ? ((B = (0, Ln.jsxs)(Ln.Fragment, { children: [I, z] })), (t[45] = z), (t[46] = I), (t[47] = B))
    : (B = t[47]);
  let V = B,
    H = x || S ? `inline` : `default`,
    ne;
  t[48] === ee
    ? (ne = t[49])
    : ((ne = (0, Ln.jsx)(Ve.Input, { layout: `multiline`, children: ee })), (t[48] = ee), (t[49] = ne));
  let U;
  t[50] === i
    ? (U = t[51])
    : ((U = (0, Ln.jsx)(Ve.FooterInlineControls, { gap: `normal`, children: i })), (t[50] = i), (t[51] = U));
  let W;
  t[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, Ln.jsx)(Ve.FooterAction, { children: null })), (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] === V
    ? (G = t[54])
    : ((G = (0, Ln.jsx)(Ve.FooterControls, { children: (0, Ln.jsx)(Ve.FooterActions, { children: V }) })),
      (t[53] = V),
      (t[54] = G));
  let K;
  t[55] !== U || t[56] !== G
    ? ((K = (0, Ln.jsxs)(Ve.Footer, { children: [U, W, G] })), (t[55] = U), (t[56] = G), (t[57] = K))
    : (K = t[57]);
  let q;
  t[58] !== ne || t[59] !== K
    ? ((q = (0, Ln.jsxs)(Ve.Body, { children: [ne, K] })), (t[58] = ne), (t[59] = K), (t[60] = q))
    : (q = t[60]);
  let re;
  t[61] !== H || t[62] !== q
    ? ((re = (0, Ln.jsx)(Ve, {
        layout: `multiline`,
        radiusVariant: `compact`,
        surfaceVariant: H,
        children: q,
      })),
      (t[61] = H),
      (t[62] = q),
      (t[63] = re))
    : (re = t[63]);
  let ie = re,
    J;
  t[64] !== T || t[65] !== C || t[66] !== x || t[67] !== l || t[68] !== v || t[69] !== d || t[70] !== A
    ? ((J = async function (e) {
        if ((e.preventDefault(), !(A.length === 0 || l))) {
          O(null);
          try {
            (await v(x ? T : A), E(``));
          } catch (e) {
            let t = e,
              n =
                d === `gitlab`
                  ? C.formatMessage({
                      id: `gitlabMergeRequest.commentInput.error`,
                      defaultMessage: `GitLab could not post this comment`,
                      description: `Fallback error for a GitLab merge request comment`,
                    })
                  : C.formatMessage({
                      id: `pullRequestsPage.detail.commentInput.error`,
                      defaultMessage: `GitHub could not post this comment`,
                      description: `Fallback error for a pull request comment`,
                    });
            O(d !== `gitlab` && t instanceof Error ? t.message : n);
          }
        }
      }),
      (t[64] = T),
      (t[65] = C),
      (t[66] = x),
      (t[67] = l),
      (t[68] = v),
      (t[69] = d),
      (t[70] = A),
      (t[71] = J))
    : (J = t[71]);
  let ae = J,
    oe;
  t[72] === ae
    ? (oe = t[73])
    : ((oe = (e) => {
        ae(e);
      }),
      (t[72] = ae),
      (t[73] = oe));
  let Y;
  t[74] === D
    ? (Y = t[75])
    : ((Y =
        D == null
          ? null
          : (0, Ln.jsx)(`div`, { className: `px-1 text-sm text-chart-red`, role: `alert`, children: D })),
      (t[74] = D),
      (t[75] = Y));
  let se;
  return (
    t[76] !== ie || t[77] !== oe || t[78] !== Y
      ? ((se = (0, Ln.jsxs)(`form`, {
          className: `flex w-full flex-col gap-2`,
          onSubmit: oe,
          children: [ie, Y],
        })),
        (t[76] = ie),
        (t[77] = oe),
        (t[78] = Y),
        (t[79] = se))
      : (se = t[79]),
    se
  );
}
var Fn, In, Ln;
function Rn() {
  return (Rn = e(() => {
    ((Fn = Q()), ee(), ve(), (In = ge()), H(), rt(), X(), v(), F(), bn(), Nn(), (Ln = pe()));
  }))();
}
function zn(e) {
  let t = (0, Hn.c)(42),
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
  let h = ye(r == null ? yt : null, m),
    g = r?.nodeId,
    _;
  t[3] !== n || t[4] !== a
    ? ((_ = { account: n, pullRequest: a }), (t[3] = n), (t[4] = a), (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== g || t[7] !== _
    ? ((v = { nodeId: g, request: _ }), (t[6] = g), (t[7] = _), (t[8] = v))
    : (v = t[8]);
  let y = ye(vt, v),
    [b, x] = (0, Un.useState)(null),
    S;
  t[9] !== n.hostname || t[10] !== n.login
    ? ((S = _t(n.login, 48, n.hostname)), (t[9] = n.hostname), (t[10] = n.login), (t[11] = S))
    : (S = t[11]);
  let C = S,
    w = r == null && (s != null || i != null),
    T;
  t[12] !== n.login || t[13] !== C || t[14] !== b
    ? ((T = (0, Wn.jsx)(pt, {
        children:
          C == null || C === b
            ? (0, Wn.jsx)(`span`, {
                className: `flex size-6 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-xs font-semibold text-default`,
                children: n.login.slice(0, 1).toUpperCase(),
              })
            : (0, Wn.jsx)(`img`, {
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
      ? ((j = (0, Wn.jsx)(Pn, {
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
function Bn(e) {
  let t = (0, Hn.c)(11),
    {
      account: n,
      comment: i,
      initialBody: a,
      onDirtyChange: o,
      onOpenChange: s,
      pullRequest: c,
      source: l,
      workspaceRequest: u,
    } = e,
    [d, p] = (0, Un.useState)(!1);
  if (i.reviewThreadId == null && a == null) return null;
  let m;
  return (
    t[0] !== n ||
    t[1] !== i.authorLogin ||
    t[2] !== i.reviewThreadId ||
    t[3] !== a ||
    t[4] !== d ||
    t[5] !== o ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== u
      ? ((m =
          d || a != null
            ? (0, Wn.jsx)(zn, {
                account: n,
                initialBody: a,
                pullRequest: c,
                replyToAuthorLogin: i.authorLogin,
                replyToReviewThreadId: i.reviewThreadId,
                source: l,
                workspaceRequest: u,
                onDirtyChange: o,
                onCancel: () => {
                  (o?.(!1), s?.(!1), p(!1));
                },
                onSuccess: () => {
                  (o?.(!1), s?.(!1), p(!1));
                },
              })
            : (0, Wn.jsxs)(r, {
                color: `ghost`,
                size: `default`,
                onClick: () => {
                  (s?.(!0), p(!0));
                },
                children: [
                  (0, Wn.jsx)(Ot, { "aria-hidden": !0, className: `icon-sm` }),
                  (0, Wn.jsx)(`span`, {
                    className: `ps-1`,
                    children: (0, Wn.jsx)(f, {
                      id: `pullRequestDetail.comment.reply`,
                      defaultMessage: `Reply`,
                      description: `Button to reply to a pull request review comment`,
                    }),
                  }),
                ],
              })),
        (t[0] = n),
        (t[1] = i.authorLogin),
        (t[2] = i.reviewThreadId),
        (t[3] = a),
        (t[4] = d),
        (t[5] = o),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function Vn(e) {
  let t = (0, Hn.c)(24),
    {
      account: n,
      action: i,
      onResolved: a,
      pullRequest: o,
      reviewThreadId: s,
      source: c,
      workspaceRequest: l,
    } = e,
    u;
  t[0] !== n || t[1] !== o
    ? ((u = { account: n, pullRequest: o }), (t[0] = n), (t[1] = o), (t[2] = u))
    : (u = t[2]);
  let d = ye(bt, u),
    p = d.isPending && d.variables?.reviewThreadId === s,
    m;
  t[3] !== i || t[4] !== d || t[5] !== a || t[6] !== s || t[7] !== c || t[8] !== l
    ? ((m = () => {
        d.mutate({ action: i, onResolved: a, reviewThreadId: s, source: c, workspaceRequest: l });
      }),
      (t[3] = i),
      (t[4] = d),
      (t[5] = a),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === i
    ? (h = t[11])
    : ((h =
        i === `resolve`
          ? (0, Wn.jsx)(f, {
              id: `pullRequestDetail.comment.resolve`,
              defaultMessage: `Resolve`,
              description: `Button that resolves a pull request code review thread`,
            })
          : (0, Wn.jsx)(f, {
              id: `pullRequestDetail.comment.unresolve`,
              defaultMessage: `Unresolve`,
              description: `Button that reopens a resolved pull request code review thread`,
            })),
      (t[10] = i),
      (t[11] = h));
  let g;
  t[12] !== d.isPending || t[13] !== p || t[14] !== m || t[15] !== h
    ? ((g = (0, Wn.jsx)(r, {
        color: `ghost`,
        disabled: d.isPending,
        loading: p,
        size: `default`,
        onClick: m,
        children: h,
      })),
      (t[12] = d.isPending),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g))
    : (g = t[16]);
  let _;
  t[17] !== d.error || t[18] !== d.variables?.reviewThreadId || t[19] !== s
    ? ((_ =
        d.error == null || d.variables?.reviewThreadId !== s
          ? null
          : (0, Wn.jsx)(`div`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                d.error instanceof Error
                  ? (0, Wn.jsx)(f, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateError`,
                      defaultMessage: `Could not update this review thread: {error}`,
                      description: `Error displayed when resolving or reopening a pull request review thread fails`,
                      values: { error: d.error.message },
                    })
                  : (0, Wn.jsx)(f, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateUnknownError`,
                      defaultMessage: `Could not update this review thread`,
                      description: `Fallback error displayed when resolving or reopening a pull request review thread fails without an error message`,
                    }),
            })),
      (t[17] = d.error),
      (t[18] = d.variables?.reviewThreadId),
      (t[19] = s),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  return (
    t[21] !== g || t[22] !== _
      ? ((v = (0, Wn.jsxs)(`div`, { className: `flex flex-col items-start gap-1`, children: [g, _] })),
        (t[21] = g),
        (t[22] = _),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
var Hn, Un, Wn;
function Gn() {
  return (Gn = e(() => {
    ((Hn = Q()), b(), (Un = ge()), H(), X(), Dt(), ht(), xt(), Rn(), (Wn = pe()));
  }))();
}
function Kn(e) {
  let t = (0, qn.c)(39),
    { account: n, commentType: i, nodeId: a, pullRequest: o, source: s, workspaceRequest: c, onClose: u } = e,
    d = p(l),
    m = w(),
    h;
  t[0] !== n || t[1] !== o
    ? ((h = { account: n, pullRequest: o }), (t[0] = n), (t[1] = o), (t[2] = h))
    : (h = t[2]);
  let g;
  t[3] !== a || t[4] !== h
    ? ((g = { nodeId: a, request: h }), (t[3] = a), (t[4] = h), (t[5] = g))
    : (g = t[5]);
  let _ = ye(vt, g),
    v;
  t[6] !== _.isPending || t[7] !== u
    ? ((v = (e) => {
        !e && !_.isPending && u();
      }),
      (t[6] = _.isPending),
      (t[7] = u),
      (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== n ||
  t[10] !== i ||
  t[11] !== m ||
  t[12] !== _ ||
  t[13] !== a ||
  t[14] !== u ||
  t[15] !== o ||
  t[16] !== d ||
  t[17] !== s ||
  t[18] !== c
    ? ((y = (e) => {
        (e.preventDefault(),
          !_.isPending &&
            _.mutateAsync({
              account: n,
              action: `delete`,
              commentType: i,
              nodeId: a,
              pullRequest: o,
              source: s,
              workspaceRequest: c,
            })
              .then(u)
              .catch((e) => {
                d.get(R).danger(
                  e.message ||
                    m.formatMessage({
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
      (t[11] = m),
      (t[12] = _),
      (t[13] = a),
      (t[14] = u),
      (t[15] = o),
      (t[16] = d),
      (t[17] = s),
      (t[18] = c),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Jn.jsx)(k, {
        children: (0, Jn.jsx)(f, {
          id: `pullRequestDetail.comment.deleteTitle`,
          defaultMessage: `Delete comment`,
          description: `Title for the pull request comment deletion confirmation`,
        }),
      })),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Jn.jsx)(U, {
        children: (0, Jn.jsx)(N, {
          title: b,
          subtitle: (0, Jn.jsx)(L, {
            children: (0, Jn.jsx)(f, {
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
    ? ((S = (0, Jn.jsx)(f, {
        id: `pullRequestDetail.comment.deleteCancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel deleting a pull request comment`,
      })),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== _.isPending || t[24] !== u
    ? ((C = (0, Jn.jsx)(r, { color: `secondary`, disabled: _.isPending, onClick: u, children: S })),
      (t[23] = _.isPending),
      (t[24] = u),
      (t[25] = C))
    : (C = t[25]);
  let T;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Jn.jsx)(f, {
        id: `pullRequestDetail.comment.deleteConfirm`,
        defaultMessage: `Delete comment`,
        description: `Button to permanently delete a pull request comment`,
      })),
      (t[26] = T))
    : (T = t[26]);
  let E;
  t[27] === _.isPending
    ? (E = t[28])
    : ((E = (0, Jn.jsx)(r, { color: `dangerSolid`, loading: _.isPending, type: `submit`, children: T })),
      (t[27] = _.isPending),
      (t[28] = E));
  let D;
  t[29] !== E || t[30] !== C
    ? ((D = (0, Jn.jsx)(U, { children: (0, Jn.jsxs)(ce, { children: [C, E] }) })),
      (t[29] = E),
      (t[30] = C),
      (t[31] = D))
    : (D = t[31]);
  let O;
  t[32] !== _.isPending || t[33] !== D || t[34] !== y
    ? ((O = (0, Jn.jsxs)(re, { as: `form`, "aria-busy": _.isPending, onSubmit: y, children: [x, D] })),
      (t[32] = _.isPending),
      (t[33] = D),
      (t[34] = y),
      (t[35] = O))
    : (O = t[35]);
  let A;
  return (
    t[36] !== O || t[37] !== v
      ? ((A = (0, Jn.jsx)(K, { open: !0, showDialogClose: !1, onOpenChange: v, children: O })),
        (t[36] = O),
        (t[37] = v),
        (t[38] = A))
      : (A = t[38]),
    A
  );
}
var qn, Jn;
function Yn() {
  return (Yn = e(() => {
    ((qn = Q()), b(), H(), X(), de(), I(), G(), xt(), fe(), (Jn = pe()));
  }))();
}
function Xn(e) {
  let t = (0, Qn.c)(104),
    {
      account: n,
      comment: r,
      commentAttachment: i,
      inline: a,
      isFixActive: o,
      metadataAccessory: s,
      onReviewThreadResolved: c,
      pullRequest: l,
      source: u,
      workspaceRequest: d,
    } = e,
    m = a !== void 0 && a,
    h = o !== void 0 && o,
    g = p(qe),
    _ = T(wt),
    [v, y] = (0, er.useState)(!1),
    [b, x] = (0, er.useState)(null),
    [S, C] = (0, er.useState)(null),
    [w, E] = (0, er.useState)(!1),
    [D, O] = (0, er.useState)(null),
    k;
  t[0] !== r.nodeId || t[1] !== r.replies || t[2] !== S
    ? ((k = S != null && (S === r.nodeId || !!r.replies?.some((e) => e.nodeId === S))),
      (t[0] = r.nodeId),
      (t[1] = r.replies),
      (t[2] = S),
      (t[3] = k))
    : (k = t[3]);
  let A = k,
    j = _ && n != null && l != null && !h && !A,
    M = j && r.viewerCanReply !== !1 && !r.isDeleted && !r.isPending,
    N = j && !w,
    P = r.path ?? i?.position.path ?? null,
    F;
  t[4] === P ? (F = t[5]) : ((F = P == null ? null : $n.default.posix.basename(P)), (t[4] = P), (t[5] = F));
  let ee = F,
    I;
  t[6] !== r || t[7] !== i ? ((I = Et(r, i)), (t[6] = r), (t[7] = i), (t[8] = I)) : (I = t[8]);
  let L = I,
    R;
  t[9] !== r.originalLine || t[10] !== r.originalStartLine || t[11] !== L
    ? ((R =
        L == null || r.originalLine == null
          ? L
          : { ...L, line: r.originalLine, start_line: r.originalStartLine ?? r.originalLine }),
      (t[9] = r.originalLine),
      (t[10] = r.originalStartLine),
      (t[11] = L),
      (t[12] = R))
    : (R = t[12]);
  let z = R,
    B;
  t[13] !== r.authorAvatarUrl || t[14] !== r.authorLogin || t[15] !== r.reviewThreadId || t[16] !== i
    ? ((B =
        i == null
          ? void 0
          : {
              ...i,
              authorAvatarUrl: r.authorAvatarUrl,
              authorLogin: r.authorLogin,
              reviewThreadId: r.reviewThreadId,
            }),
      (t[13] = r.authorAvatarUrl),
      (t[14] = r.authorLogin),
      (t[15] = r.reviewThreadId),
      (t[16] = i),
      (t[17] = B))
    : (B = t[17]);
  let V = r.isResolved === !0 || (!m && r.authorType != null && r.authorType !== `User`),
    H = m ? null : r.diffHunk,
    ne = m ? null : ee,
    U;
  t[18] === r.isResolved
    ? (U = t[19])
    : ((U =
        r.isResolved === !0
          ? (0, tr.jsx)(f, {
              id: `pullRequestDetail.comment.resolved`,
              defaultMessage: `Resolved`,
              description: `Status shown on a resolved pull request code review thread`,
            })
          : void 0),
      (t[18] = r.isResolved),
      (t[19] = U));
  let W;
  t[20] !== n ||
  t[21] !== N ||
  t[22] !== M ||
  t[23] !== _ ||
  t[24] !== r ||
  t[25] !== h ||
  t[26] !== w ||
  t[27] !== s ||
  t[28] !== c ||
  t[29] !== l ||
  t[30] !== D ||
  t[31] !== u ||
  t[32] !== d
    ? ((W =
        s != null || (_ && n != null && l != null && (r.reviewThreadId != null || D != null))
          ? (0, tr.jsxs)(`div`, {
              className: `flex w-full items-start gap-2`,
              children: [
                (0, tr.jsxs)(`div`, {
                  className: te(`flex min-w-0 flex-wrap items-start gap-2`, (w || h) && `flex-1`),
                  children: [
                    w ? null : s,
                    M
                      ? (0, tr.jsx)(Bn, {
                          account: n,
                          comment: r,
                          initialBody: D ?? void 0,
                          onDirtyChange: y,
                          onOpenChange: (e) => {
                            (E(e), e || O(null));
                          },
                          pullRequest: l,
                          source: u,
                          workspaceRequest: d,
                        })
                      : null,
                  ],
                }),
                N &&
                r.reviewThreadId != null &&
                (r.isResolved === !0 ? r.viewerCanUnresolve === !0 : r.viewerCanResolve === !0)
                  ? (0, tr.jsx)(Vn, {
                      account: n,
                      action: r.isResolved === !0 ? `unresolve` : `resolve`,
                      pullRequest: l,
                      reviewThreadId: r.reviewThreadId,
                      source: u,
                      workspaceRequest: d,
                      onResolved: c,
                    })
                  : null,
              ],
            })
          : void 0),
      (t[20] = n),
      (t[21] = N),
      (t[22] = M),
      (t[23] = _),
      (t[24] = r),
      (t[25] = h),
      (t[26] = w),
      (t[27] = s),
      (t[28] = c),
      (t[29] = l),
      (t[30] = D),
      (t[31] = u),
      (t[32] = d),
      (t[33] = W))
    : (W = t[33]);
  let G;
  t[34] !== N || t[35] !== r.nodeId || t[36] !== r.type || t[37] !== r.viewerCanDelete
    ? ((G =
        N && r.type !== `review` && r.nodeId != null && r.viewerCanDelete === !0
          ? () => x(r.nodeId ?? null)
          : void 0),
      (t[34] = N),
      (t[35] = r.nodeId),
      (t[36] = r.type),
      (t[37] = r.viewerCanDelete),
      (t[38] = G))
    : (G = t[38]);
  let K;
  t[39] === N ? (K = t[40]) : ((K = N ? (e) => x(e.nodeId ?? null) : void 0), (t[39] = N), (t[40] = K));
  let q;
  t[41] !== N || t[42] !== r.nodeId || t[43] !== r.viewerCanUpdate
    ? ((q = N && r.nodeId != null && r.viewerCanUpdate === !0 ? () => C(r.nodeId ?? null) : void 0),
      (t[41] = N),
      (t[42] = r.nodeId),
      (t[43] = r.viewerCanUpdate),
      (t[44] = q))
    : (q = t[44]);
  let re;
  t[45] === N ? (re = t[46]) : ((re = N ? (e) => C(e.nodeId ?? null) : void 0), (t[45] = N), (t[46] = re));
  let ie;
  t[47] !== n || t[48] !== m || t[49] !== L || t[50] !== l || t[51] !== g || t[52] !== u
    ? ((ie =
        m || n == null || l == null || L == null || u === `pull_request_board`
          ? void 0
          : () => {
              Ct(g, { account: n, pullRequest: l }, L);
            }),
      (t[47] = n),
      (t[48] = m),
      (t[49] = L),
      (t[50] = l),
      (t[51] = g),
      (t[52] = u),
      (t[53] = ie))
    : (ie = t[53]);
  let J;
  t[54] !== M || t[55] !== r.body || t[56] !== w
    ? ((J =
        M && !w
          ? () => {
              (E(!0),
                O(
                  `${r.body
                    .split(
                      `
`,
                    )
                    .map(Zn).join(`
`)}\n\n`,
                ));
            }
          : void 0),
      (t[54] = M),
      (t[55] = r.body),
      (t[56] = w),
      (t[57] = J))
    : (J = t[57]);
  let ae = v || A,
    oe = !m && L != null,
    Y = m ? `inline` : `default`,
    se = r.url ?? void 0,
    ce;
  t[58] !== n ||
  t[59] !== r.isDeleted ||
  t[60] !== r.nodeId ||
  t[61] !== r.rawBody ||
  t[62] !== r.type ||
  t[63] !== S ||
  t[64] !== l ||
  t[65] !== u ||
  t[66] !== d
    ? ((ce = (e, t, i) => {
        if (!t && r.isDeleted)
          return (0, tr.jsx)(`span`, {
            className: `text-secondary`,
            children: (0, tr.jsx)(f, {
              id: `pullRequestDetail.comment.deleted`,
              defaultMessage: `Comment deleted`,
              description: `Placeholder for a deleted review comment whose replies remain visible`,
            }),
          });
        let a = t ? i?.nodeId : r.nodeId;
        return S != null && a === S && n != null && l != null
          ? (0, tr.jsx)(`div`, {
              className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
              children: (0, tr.jsx)(zn, {
                account: n,
                editTarget: { commentType: t && r.type !== `comment` ? `review_comment` : r.type, nodeId: a },
                initialBody: (t ? i?.rawBody : r.rawBody) ?? e,
                pullRequest: l,
                source: u,
                workspaceRequest: d,
                onCancel: () => C(null),
                onSuccess: () => C(null),
              }),
            })
          : (0, tr.jsx)(nn, {
              request: n != null && l != null ? { account: n, pullRequest: l } : null,
              allowBasicHtml: !0,
              textStyle: { kind: `small` },
              className: `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
              cwd: null,
              children: e,
            });
      }),
      (t[58] = n),
      (t[59] = r.isDeleted),
      (t[60] = r.nodeId),
      (t[61] = r.rawBody),
      (t[62] = r.type),
      (t[63] = S),
      (t[64] = l),
      (t[65] = u),
      (t[66] = d),
      (t[67] = ce))
    : (ce = t[67]);
  let le;
  t[68] !== r.authorAvatarUrl ||
  t[69] !== r.authorLogin ||
  t[70] !== r.body ||
  t[71] !== r.createdAt ||
  t[72] !== r.replies ||
  t[73] !== z ||
  t[74] !== L ||
  t[75] !== ne ||
  t[76] !== U ||
  t[77] !== W ||
  t[78] !== G ||
  t[79] !== K ||
  t[80] !== q ||
  t[81] !== re ||
  t[82] !== ie ||
  t[83] !== J ||
  t[84] !== ae ||
  t[85] !== oe ||
  t[86] !== Y ||
  t[87] !== se ||
  t[88] !== ce ||
  t[89] !== B ||
  t[90] !== V ||
  t[91] !== H
    ? ((le = (0, tr.jsx)(gt, {
        authorAvatarUrl: r.authorAvatarUrl,
        authorLogin: r.authorLogin,
        body: r.body,
        comment: B,
        createdAt: r.createdAt,
        defaultCollapsed: V,
        diffHunk: H,
        diffHunkPosition: z,
        fileName: ne,
        headerAccessory: U,
        metadataAccessory: W,
        onDelete: G,
        onDeleteReply: K,
        onEdit: q,
        onEditReply: re,
        onOpenFile: ie,
        onQuoteReply: J,
        preventCollapse: ae,
        position: L,
        replies: r.replies,
        showDiffLocation: oe,
        surfaceVariant: Y,
        url: se,
        renderBody: ce,
      })),
      (t[68] = r.authorAvatarUrl),
      (t[69] = r.authorLogin),
      (t[70] = r.body),
      (t[71] = r.createdAt),
      (t[72] = r.replies),
      (t[73] = z),
      (t[74] = L),
      (t[75] = ne),
      (t[76] = U),
      (t[77] = W),
      (t[78] = G),
      (t[79] = K),
      (t[80] = q),
      (t[81] = re),
      (t[82] = ie),
      (t[83] = J),
      (t[84] = ae),
      (t[85] = oe),
      (t[86] = Y),
      (t[87] = se),
      (t[88] = ce),
      (t[89] = B),
      (t[90] = V),
      (t[91] = H),
      (t[92] = le))
    : (le = t[92]);
  let ue = le;
  if (b == null || n == null || l == null) return ue;
  let X = r.type === `comment` ? `comment` : `review_comment`,
    Z;
  t[93] === Symbol.for(`react.memo_cache_sentinel`) ? ((Z = () => x(null)), (t[93] = Z)) : (Z = t[93]);
  let de;
  t[94] !== n || t[95] !== b || t[96] !== l || t[97] !== u || t[98] !== X || t[99] !== d
    ? ((de = (0, tr.jsx)(Kn, {
        account: n,
        commentType: X,
        nodeId: b,
        pullRequest: l,
        source: u,
        workspaceRequest: d,
        onClose: Z,
      })),
      (t[94] = n),
      (t[95] = b),
      (t[96] = l),
      (t[97] = u),
      (t[98] = X),
      (t[99] = d),
      (t[100] = de))
    : (de = t[100]);
  let Q;
  return (
    t[101] !== ue || t[102] !== de
      ? ((Q = (0, tr.jsxs)(tr.Fragment, { children: [ue, de] })), (t[101] = ue), (t[102] = de), (t[103] = Q))
      : (Q = t[103]),
    Q
  );
}
function Zn(e) {
  return `> ${e}`;
}
var Qn, $n, er, tr;
function nr() {
  return (nr = e(() => {
    ((Qn = Q()),
      O(),
      b(),
      ($n = t(W(), 1)),
      (er = ge()),
      H(),
      mt(),
      St(),
      Tt(),
      Ce(),
      pn(),
      Gn(),
      Yn(),
      (tr = pe()));
  }))();
}
function rr(e) {
  let t = (0, ir.c)(23),
    { autoFocus: n, inputId: i, inputRef: a, onQueryChange: o, searchQuery: s } = e,
    c = i === void 0 ? `file-tree-search` : i,
    l = w(),
    u;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, ar.jsx)(f, {
        id: `codex.fileTreeSearch.label`,
        defaultMessage: `Filter files`,
        description: `Label for a file tree filter input`,
      })),
      (t[0] = u))
    : (u = t[0]);
  let d;
  t[1] === c
    ? (d = t[2])
    : ((d = (0, ar.jsx)(`label`, { className: `sr-only`, htmlFor: c, children: u })), (t[1] = c), (t[2] = d));
  let p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, ar.jsx)(g, { className: `ms-2 shrink-0 text-tertiary`, "aria-hidden": !1, asset: h })),
      (t[3] = p))
    : (p = t[3]);
  let m;
  t[4] === o ? (m = t[5]) : ((m = (e) => o(e.target.value)), (t[4] = o), (t[5] = m));
  let _;
  t[6] === l
    ? (_ = t[7])
    : ((_ = l.formatMessage({
        id: `codex.fileTreeSearch.placeholder`,
        defaultMessage: `Filter files…`,
        description: `Placeholder text for a file tree filter input`,
      })),
      (t[6] = l),
      (t[7] = _));
  let v;
  t[8] !== n || t[9] !== c || t[10] !== a || t[11] !== s || t[12] !== m || t[13] !== _
    ? ((v = (0, ar.jsx)(`input`, {
        autoFocus: n,
        id: c,
        ref: a,
        className: `w-full appearance-none border-none bg-transparent py-0 ps-0 pe-1.5 text-default ring-0 outline-none select-text placeholder:text-tertiary focus:border-none focus:ring-0 focus:outline-none [&::placeholder]:select-none`,
        type: `text`,
        value: s,
        onChange: m,
        placeholder: _,
      })),
      (t[8] = n),
      (t[9] = c),
      (t[10] = a),
      (t[11] = s),
      (t[12] = m),
      (t[13] = _),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== l || t[16] !== o || t[17] !== s.length
    ? ((y =
        s.length > 0
          ? (0, ar.jsx)(r, {
              "aria-label": l.formatMessage({
                id: `codex.fileTreeSearch.clear`,
                defaultMessage: `Clear file filter`,
                description: `Button label to clear a file tree filter input`,
              }),
              className: `text-tertiary hover:text-default`,
              color: `ghost`,
              size: `icon`,
              onClick: () => o(``),
              children: (0, ar.jsx)(he, { className: `icon-2xs` }),
            })
          : null),
      (t[15] = l),
      (t[16] = o),
      (t[17] = s.length),
      (t[18] = y))
    : (y = t[18]);
  let b;
  return (
    t[19] !== d || t[20] !== v || t[21] !== y
      ? ((b = (0, ar.jsxs)(`div`, {
          className: `relative flex h-token-button-composer w-full items-center gap-1.5 rounded-lg border border-default bg-primary-soft-alpha text-base leading-[18px]`,
          children: [d, p, v, y],
        })),
        (t[19] = d),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]),
    b
  );
}
var ir, ar;
function or() {
  return (or = e(() => {
    ((ir = Q()), V(), H(), X(), v(), j(), (ar = pe()));
  }))();
}
function sr(e) {
  return {
    hunkLineCount: 32,
    lineHeight: (e * fr) / 10,
    diffHeaderHeight: 0,
    hunkSeparatorHeight: 32,
    spacing: 0,
  };
}
function cr(e) {
  let t = window.getComputedStyle(e);
  return {
    ...pr,
    lineHeight: ur(t.lineHeight, pr.lineHeight),
    spacing: ur(t.getPropertyValue(`--diffs-gap-block`), pr.spacing),
  };
}
function lr(e, t) {
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
function ur(e, t) {
  let n = e.trim();
  if (n === `0`) return 0;
  if (!n.endsWith(`px`)) return t;
  let r = Number.parseFloat(n.slice(0, -2));
  return Number.isFinite(r) ? r : t;
}
var dr, fr, pr;
function mr() {
  return (mr = e(() => {
    ((dr = 12), (fr = 18), (pr = sr(dr)));
  }))();
}
function hr({ contextId: e, getFiles: t, preserveScrollBeforeResultClear: n, scrollAdapter: r }) {
  return {
    domain: `diff`,
    contextId: e,
    preserveScrollBeforeResultClear: n,
    async search(e) {
      return e.query.trim().length === 0 ? gr(e, []) : gr(e, t());
    },
    async ensureVisible(t, n) {
      if (t.domain !== `diff` || t.contextId !== e) return;
      let i = r.getFileContainer(t.path),
        a = ct(t);
      if ((i == null ? null : we({ container: i, matchId: a, includeShadowRoots: !0 })) == null) {
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
        (await Mt({
          container: i,
          matchId: a,
          includeShadowRoots: !0,
          scrollBehavior: `auto`,
          signal: n?.signal,
        }));
    },
  };
}
function gr(e, t) {
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
      let l = br - r.length,
        { offsets: u, totalMatches: d, isCapped: f } = Ae(c, n, l);
      ((i += d), f && (o = !0));
      let p = { offset: 0, line: t.lineStart };
      for (let { start: n, end: i } of u) {
        let o = _r(t, n, i, p);
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
function _r(e, t, n, r) {
  let i = vr(e.lineSpans, t, n);
  if (i != null) return i;
  if (e.lineMapping !== `contiguous`) return { lineStart: e.lineStart, lineEnd: e.lineEnd };
  ((r.line += yr(e.text.slice(r.offset, t))), (r.offset = t));
  let a = r.line;
  return { lineStart: a, lineEnd: a + yr(e.text.slice(t, n)) };
}
function vr(e, t, n) {
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
function yr(e) {
  let t = 0;
  for (let n of e)
    n ===
      `
` && (t += 1);
  return t;
}
var br;
function xr() {
  return (xr = e(() => {
    (be(), Nt(), (br = 250));
  }))();
}
var Sr, Cr, wr;
function Tr() {
  return (Tr = e(() => {
    ((Sr = (e, t, n) => {
      let r = e instanceof RegExp ? Cr(e, n) : e,
        i = t instanceof RegExp ? Cr(t, n) : t,
        a = r !== null && i != null && wr(r, i, n);
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
      (Cr = (e, t) => {
        let n = t.match(e);
        return n ? n[0] : null;
      }),
      (wr = (e, t, n) => {
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
function Er(e) {
  return isNaN(e) ? e.charCodeAt(0) : parseInt(e, 10);
}
function Dr(e) {
  return e.replace(Kr, Ir).replace(qr, Lr).replace(Jr, Rr).replace(Yr, zr).replace(Xr, Br);
}
function Or(e) {
  return e.replace(Vr, `\\`).replace(Hr, `{`).replace(Ur, `}`).replace(Wr, `,`).replace(Gr, `.`);
}
function kr(e) {
  if (!e) return [``];
  let t = [],
    n = Sr(`{`, `}`, e);
  if (!n) return e.split(`,`);
  let { pre: r, body: i, post: a } = n,
    o = r.split(`,`);
  o[o.length - 1] += `{` + i + `}`;
  let s = kr(a);
  return (a.length && ((o[o.length - 1] += s.shift()), o.push.apply(o, s)), t.push.apply(t, o), t);
}
function Ar(e, t = {}) {
  if (!e) return [];
  let { max: n = Zr } = t;
  return (e.slice(0, 2) === `{}` && (e = `\\{\\}` + e.slice(2)), Fr(Dr(e), n, !0).map(Or));
}
function jr(e) {
  return `{` + e + `}`;
}
function Mr(e) {
  return /^-?0\d/.test(e);
}
function Nr(e, t) {
  return e <= t;
}
function Pr(e, t) {
  return e >= t;
}
function Fr(e, t, n) {
  let r = [];
  for (;;) {
    let i = Sr(`{`, `}`, e);
    if (!i) return [e];
    let a = i.pre;
    if (/\$$/.test(i.pre)) {
      let e = i.post.length ? Fr(i.post, t, !1) : [``];
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
        ((e = i.pre + `{` + i.body + Rr + i.post), (n = !0));
        continue;
      }
      return [e];
    }
    let u = i.post.length ? Fr(i.post, t, !1) : [``],
      d;
    if (c) d = i.body.split(/\.\./);
    else if (
      ((d = kr(i.body)), d.length === 1 && d[0] !== void 0 && ((d = Fr(d[0], t, !1).map(jr)), d.length === 1))
    )
      return u.map((e) => i.pre + d[0] + e);
    let f;
    if (c && d[0] !== void 0 && d[1] !== void 0) {
      let e = Er(d[0]),
        n = Er(d[1]),
        r = Math.max(d[0].length, d[1].length),
        i = d.length === 3 && d[2] !== void 0 ? Math.max(Math.abs(Er(d[2])), 1) : 1,
        a = Nr;
      n < e && ((i *= -1), (a = Pr));
      let o = d.some(Mr);
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
      for (let e = 0; e < d.length; e++) f.push.apply(f, Fr(d[e], t, !1));
    }
    for (let e = 0; e < f.length; e++)
      for (let i = 0; i < u.length && r.length < t; i++) {
        let t = a + f[e] + u[i];
        (!n || c || t) && r.push(t);
      }
    return r;
  }
}
var Ir, Lr, Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr;
function Qr() {
  return (Qr = e(() => {
    (Tr(),
      (Ir = `\0SLASH` + Math.random() + `\0`),
      (Lr = `\0OPEN` + Math.random() + `\0`),
      (Rr = `\0CLOSE` + Math.random() + `\0`),
      (zr = `\0COMMA` + Math.random() + `\0`),
      (Br = `\0PERIOD` + Math.random() + `\0`),
      (Vr = new RegExp(Ir, `g`)),
      (Hr = new RegExp(Lr, `g`)),
      (Ur = new RegExp(Rr, `g`)),
      (Wr = new RegExp(zr, `g`)),
      (Gr = new RegExp(Br, `g`)),
      (Kr = /\\\\/g),
      (qr = /\\{/g),
      (Jr = /\\}/g),
      (Yr = /\\,/g),
      (Xr = /\\\./g),
      (Zr = 1e5));
  }))();
}
var $r, ei;
function ti() {
  return (ti = e(() => {
    (($r = 65536),
      (ei = (e) => {
        if (typeof e != `string`) throw TypeError(`invalid pattern`);
        if (e.length > $r) throw TypeError(`pattern is too long`);
      }));
  }))();
}
var ni, ri, ii, ai, oi;
function si() {
  return (si = e(() => {
    ((ni = {
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
      (ri = (e) => e.replace(/[[\]\\-]/g, `\\$&`)),
      (ii = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (ai = (e) => e.join(``)),
      (oi = (e, t) => {
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
            for (let [t, [o, c, l]] of Object.entries(ni))
              if (e.startsWith(t, a)) {
                if (d) return [`$.`, !1, e.length - n, !0];
                ((a += t.length), l ? i.push(o) : r.push(o), (s ||= c));
                continue WHILE;
              }
          }
          if (((c = !1), d)) {
            (t > d ? r.push(ri(d) + `-` + ri(t)) : t === d && r.push(ri(t)), (d = ``), a++);
            continue;
          }
          if (e.startsWith(`-]`, a + 1)) {
            (r.push(ri(t + `-`)), (a += 2));
            continue;
          }
          if (e.startsWith(`-`, a + 1)) {
            ((d = t), (a += 2));
            continue;
          }
          (r.push(ri(t)), a++);
        }
        if (u < a) return [``, !1, 0, !1];
        if (!r.length && !i.length) return [`$.`, !1, e.length - n, !0];
        if (i.length === 0 && r.length === 1 && /^\\?.$/.test(r[0]) && !l) {
          let e = r[0].length === 2 ? r[0].slice(-1) : r[0];
          return [ii(e), !1, u - n, !1];
        }
        let f = `[` + (l ? `^` : ``) + ai(r) + `]`,
          p = `[` + (l ? `` : `^`) + ai(i) + `]`;
        return [r.length && i.length ? `(` + f + `|` + p + `)` : r.length ? f : p, s, u - n, !0];
      }));
  }))();
}
var ci;
function li() {
  return (li = e(() => {
    ci = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !0 } = {}) =>
      n
        ? t
          ? e.replace(/\[([^/\\])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\])\]/g, `$1$2`).replace(/\\([^/])/g, `$1`)
        : t
          ? e.replace(/\[([^/\\{}])\]/g, `$1`)
          : e.replace(/((?!\\).|^)\[([^/\\{}])\]/g, `$1$2`).replace(/\\([^/{}])/g, `$1`);
  }))();
}
var ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi;
function ki() {
  return (ki = e(() => {
    (si(),
      li(),
      (di = new Set([`!`, `?`, `+`, `*`, `@`])),
      (fi = (e) => di.has(e)),
      (pi = (e) => fi(e.type)),
      (mi = new Map([
        [`!`, [`@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`]],
      ])),
      (hi = new Map([
        [`!`, [`?`]],
        [`@`, [`?`]],
        [`+`, [`?`, `*`]],
      ])),
      (gi = new Map([
        [`!`, [`?`, `@`]],
        [`?`, [`?`, `@`]],
        [`@`, [`?`, `@`]],
        [`*`, [`*`, `+`, `?`, `@`]],
        [`+`, [`+`, `@`, `?`, `*`]],
      ])),
      (_i = new Map([
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
      (vi = `(?!(?:^|/)\\.\\.?(?:$|/))`),
      (yi = `(?!\\.)`),
      (bi = new Set([`[`, `.`])),
      (xi = new Set([`..`, `.`])),
      (Si = new Set(`().*{}+?[]^$\\!`)),
      (Ci = (e) => e.replace(/[[\]{}()*+?.\\^$|]/g, `\\$&`)),
      (wi = `[^/]`),
      (Ti = `[^/]*?`),
      (Ei = `[^/]+?`),
      (Di = 0),
      (Oi = class {
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
        id = ++Di;
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
              if (typeof t != `string` && !(t instanceof ui && t.#i === this))
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
            if (!(n instanceof ui && n.type === `!`)) return !1;
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
          let t = new ui(this.type, e);
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
              if (!r.noext && fi(n) && e.charAt(u) === `(` && i <= a) {
                (t.push(d), (d = ``));
                let a = new ui(n, t);
                ((u = ui.#f(e, a, u, r, i + 1)), t.push(a));
                continue;
              }
              d += n;
            }
            return (t.push(d), u);
          }
          let u = n + 1,
            d = new ui(null, t),
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
            if (!r.noext && fi(n) && e.charAt(u) === `(` && (i <= a || (t && t.#h(n)))) {
              let a = t && t.#h(n) ? 0 : 1;
              (d.push(p), (p = ``));
              let o = new ui(n, d);
              (d.push(o), (u = ui.#f(e, o, u, r, i + a)));
              continue;
            }
            if (n === `|`) {
              (d.push(p), (p = ``), f.push(d), (d = new ui(null, t)));
              continue;
            }
            if (n === `)`)
              return (p === `` && t.#r.length === 0 && (t.#u = !0), d.push(p), (p = ``), t.push(...f, d), u);
            p += n;
          }
          return ((t.type = null), (t.#t = void 0), (t.#r = [e.substring(n - 1)]), u);
        }
        #p(e) {
          return this.#m(e, hi);
        }
        #m(e, t = mi) {
          if (!e || typeof e != `object` || e.type !== null || e.#r.length !== 1 || this.type === null)
            return !1;
          let n = e.#r[0];
          return !n || typeof n != `object` || n.type === null ? !1 : this.#h(n.type, t);
        }
        #h(e, t = gi) {
          return !!t.get(this.type)?.includes(e);
        }
        #g(e, t) {
          let n = e.#r[0],
            r = new ui(null, n, this.options);
          (r.#r.push(``), n.push(r), this.#_(e, t));
        }
        #_(e, t) {
          let n = e.#r[0];
          this.#r.splice(t, 1, ...n.#r);
          for (let e of n.#r) typeof e == `object` && (e.#i = this);
          this.#l = void 0;
        }
        #v(e) {
          return !!_i.get(this.type)?.has(e);
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
          let t = _i.get(this.type),
            n = e.#r[0],
            r = t?.get(n.type);
          if (!r) return !1;
          this.#r = n.#r;
          for (let e of this.#r) typeof e == `object` && (e.#i = this);
          ((this.type = r), (this.#l = void 0), (this.#u = !1));
        }
        static fromGlob(e, t = {}) {
          let n = new ui(null, void 0, t);
          return (ui.#f(e, n, 0, t, 0), n);
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
          if ((this.#e === this && (this.#x(), this.#d()), !pi(this))) {
            let n = this.isStart() && this.isEnd() && !this.#r.some((e) => typeof e != `string`),
              r = this.#r
                .map((t) => {
                  let [r, i, a, o] = typeof t == `string` ? ui.#C(t, this.#t, n) : t.toRegExpSource(e);
                  return ((this.#t = this.#t || a), (this.#n = this.#n || o), r);
                })
                .join(``),
              i = ``;
            if (
              this.isStart() &&
              typeof this.#r[0] == `string` &&
              !(this.#r.length === 1 && xi.has(this.#r[0]))
            ) {
              let n = bi,
                a =
                  (t && n.has(r.charAt(0))) ||
                  (r.startsWith(`\\.`) && n.has(r.charAt(2))) ||
                  (r.startsWith(`\\.\\.`) && n.has(r.charAt(4))),
                o = !t && !e && n.has(r.charAt(0));
              i = a ? vi : o ? yi : ``;
            }
            let a = ``;
            return (
              this.isEnd() && this.#e.#s && this.#i?.type === `!` && (a = `(?:$|\\/)`),
              [i + r + a, ci(r), (this.#t = !!this.#t), this.#n]
            );
          }
          let n = this.type === `*` || this.type === `+`,
            r = this.type === `!` ? `(?:(?!(?:` : `(?:`,
            i = this.#S(t);
          if (this.isStart() && this.isEnd() && !i && this.type !== `!`) {
            let e = this.toString(),
              t = this;
            return ((t.#r = [e]), (t.type = null), (t.#t = void 0), [e, ci(this.toString()), !1, !1]);
          }
          let a = !n || e || t ? `` : this.#S(!0);
          (a === i && (a = ``), a && (i = `(?:${i})(?:${a})*?`));
          let o = ``;
          if (this.type === `!` && this.#u) o = (this.isStart() && !t ? yi : ``) + Ei;
          else {
            let n =
              this.type === `!`
                ? `))` + (this.isStart() && !t && !e ? yi : ``) + `[^/]*?)`
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
          return [o, ci(i), (this.#t = !!this.#t), this.#n];
        }
        #x() {
          if (pi(this)) {
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
              ((r = !1), (i += (Si.has(c) ? `\\` : ``) + c));
              continue;
            }
            if (c === `*`) {
              if (o) continue;
              ((o = !0), (i += n && /^[*]+$/.test(e) ? Ei : Ti), (t = !0));
              continue;
            }
            if (((o = !1), c === `\\`)) {
              s === e.length - 1 ? (i += `\\\\`) : (r = !0);
              continue;
            }
            if (c === `[`) {
              let [n, r, o, c] = oi(e, s);
              if (o) {
                ((i += n), (a ||= r), (s += o - 1), (t ||= c));
                continue;
              }
            }
            if (c === `?`) {
              ((i += wi), (t = !0));
              continue;
            }
            i += Ci(c);
          }
          return [i, ci(e), !!t, a];
        }
      }),
      (ui = Oi));
  }))();
}
var Ai;
function ji() {
  return (ji = e(() => {
    Ai = (e, { windowsPathsNoEscape: t = !1, magicalBraces: n = !1 } = {}) =>
      n
        ? t
          ? e.replace(/[?*()[\]{}]/g, `[$&]`)
          : e.replace(/[?*()[\]\\{}]/g, `\\$&`)
        : t
          ? e.replace(/[?*()[\]]/g, `[$&]`)
          : e.replace(/[?*()[\]\\]/g, `\\$&`);
  }))();
}
var Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
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
  ma;
function ha() {
  return (ha = e(() => {
    (Qr(),
      ti(),
      ki(),
      ji(),
      li(),
      (Mi = (e, t, n = {}) => (ei(t), !n.nocomment && t.charAt(0) === `#` ? !1 : new ma(t, n).match(e))),
      (Ni = /^\*+([^+@!?*[(]*)$/),
      (Pi = (e) => (t) => !t.startsWith(`.`) && t.endsWith(e)),
      (Fi = (e) => (t) => t.endsWith(e)),
      (Ii = (e) => ((e = e.toLowerCase()), (t) => !t.startsWith(`.`) && t.toLowerCase().endsWith(e))),
      (Li = (e) => ((e = e.toLowerCase()), (t) => t.toLowerCase().endsWith(e))),
      (Ri = /^\*+\.\*+$/),
      (zi = (e) => !e.startsWith(`.`) && e.includes(`.`)),
      (Bi = (e) => e !== `.` && e !== `..` && e.includes(`.`)),
      (Vi = /^\.\*+$/),
      (Hi = (e) => e !== `.` && e !== `..` && e.startsWith(`.`)),
      (Ui = /^\*+$/),
      (Wi = (e) => e.length !== 0 && !e.startsWith(`.`)),
      (Gi = (e) => e.length !== 0 && e !== `.` && e !== `..`),
      (Ki = /^\?+([^+@!?*[(]*)?$/),
      (qi = ([e, t = ``]) => {
        let n = Zi([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      (Ji = ([e, t = ``]) => {
        let n = Qi([e]);
        return t ? ((t = t.toLowerCase()), (e) => n(e) && e.toLowerCase().endsWith(t)) : n;
      }),
      (Yi = ([e, t = ``]) => {
        let n = Qi([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (Xi = ([e, t = ``]) => {
        let n = Zi([e]);
        return t ? (e) => n(e) && e.endsWith(t) : n;
      }),
      (Zi = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && !e.startsWith(`.`);
      }),
      (Qi = ([e]) => {
        let t = e.length;
        return (e) => e.length === t && e !== `.` && e !== `..`;
      }),
      ($i =
        typeof process == `object` && process
          ? {}.__MINIMATCH_TESTING_PLATFORM__ || process.platform
          : `posix`),
      (ea = { win32: { sep: `\\` }, posix: { sep: `/` } }),
      (ta = $i === `win32` ? ea.win32.sep : ea.posix.sep),
      (Mi.sep = ta),
      (na = Symbol(`globstar **`)),
      (Mi.GLOBSTAR = na),
      (ra = `[^/]*?`),
      (ia = `(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?`),
      (aa = `(?:(?!(?:\\/|^)\\.).)*?`),
      (oa =
        (e, t = {}) =>
        (n) =>
          Mi(n, e, t)),
      (Mi.filter = oa),
      (sa = (e, t = {}) => Object.assign({}, e, t)),
      (ca = (e) => {
        if (!e || typeof e != `object` || !Object.keys(e).length) return Mi;
        let t = Mi;
        return Object.assign((n, r, i = {}) => t(n, r, sa(e, i)), {
          Minimatch: class extends t.Minimatch {
            constructor(t, n = {}) {
              super(t, sa(e, n));
            }
            static defaults(n) {
              return t.defaults(sa(e, n)).Minimatch;
            }
          },
          AST: class extends t.AST {
            constructor(t, n, r = {}) {
              super(t, n, sa(e, r));
            }
            static fromGlob(n, r = {}) {
              return t.AST.fromGlob(n, sa(e, r));
            }
          },
          unescape: (n, r = {}) => t.unescape(n, sa(e, r)),
          escape: (n, r = {}) => t.escape(n, sa(e, r)),
          filter: (n, r = {}) => t.filter(n, sa(e, r)),
          defaults: (n) => t.defaults(sa(e, n)),
          makeRe: (n, r = {}) => t.makeRe(n, sa(e, r)),
          braceExpand: (n, r = {}) => t.braceExpand(n, sa(e, r)),
          match: (n, r, i = {}) => t.match(n, r, sa(e, i)),
          sep: t.sep,
          GLOBSTAR: na,
        });
      }),
      (Mi.defaults = ca),
      (la = (e, t = {}) => (
        ei(e),
        t.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [e] : Ar(e, { max: t.braceExpandMax })
      )),
      (Mi.braceExpand = la),
      (ua = (e, t = {}) => new ma(e, t).makeRe()),
      (Mi.makeRe = ua),
      (da = (e, t, n = {}) => {
        let r = new ma(t, n);
        return ((e = e.filter((e) => r.match(e))), r.options.nonull && !e.length && e.push(t), e);
      }),
      (Mi.match = da),
      (fa = /[?*]|[+@!]\(.*?\)|\[|\]/),
      (pa = (e) => e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`)),
      (ma = class {
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
          (ei(e),
            (t ||= {}),
            (this.options = t),
            (this.maxGlobstarRecursion = t.maxGlobstarRecursion ?? 200),
            (this.pattern = e),
            (this.platform = t.platform || $i),
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
              let t = e[0] === `` && e[1] === `` && (e[2] === `?` || !fa.test(e[2])) && !fa.test(e[3]),
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
            t.includes(na) ? this.#e(e, t, n, r, i) : this.#n(e, t, n, r, i)
          );
        }
        #e(e, t, n, r, i) {
          let a = t.indexOf(na, i),
            o = t.lastIndexOf(na),
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
          for (let e of c) e === na ? (m.push(p), (f = [[], 0]), d.push(f)) : (f[0].push(e), p++);
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
            if ((this.debug(t, n, r), n === !1 || n === na)) return !1;
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
          return la(this.pattern, this.options);
        }
        parse(e) {
          ei(e);
          let t = this.options;
          if (e === `**`) return na;
          if (e === ``) return ``;
          let n,
            r = null;
          (n = e.match(Ui))
            ? (r = t.dot ? Gi : Wi)
            : (n = e.match(Ni))
              ? (r = (t.nocase ? (t.dot ? Li : Ii) : t.dot ? Fi : Pi)(n[1]))
              : (n = e.match(Ki))
                ? (r = (t.nocase ? (t.dot ? Ji : qi) : t.dot ? Yi : Xi)(n))
                : (n = e.match(Ri))
                  ? (r = t.dot ? Bi : zi)
                  : (n = e.match(Vi)) && (r = Hi);
          let i = Oi.fromGlob(e, this.options).toMMPattern();
          return (r && typeof i == `object` && Reflect.defineProperty(i, "test", { value: r }), i);
        }
        makeRe() {
          if (this.regexp || this.regexp === !1) return this.regexp;
          let e = this.set;
          if (!e.length) return ((this.regexp = !1), this.regexp);
          let t = this.options,
            n = t.noglobstar ? ra : t.dot ? ia : aa,
            r = new Set(t.nocase ? [`i`] : []),
            i = e
              .map((e) => {
                let t = e.map((e) => {
                  if (e instanceof RegExp) for (let t of e.flags.split(``)) r.add(t);
                  return typeof e == `string` ? pa(e) : e === na ? na : e._src;
                });
                t.forEach((e, r) => {
                  let i = t[r + 1],
                    a = t[r - 1];
                  e === na &&
                    a !== na &&
                    (a === void 0
                      ? i !== void 0 && i !== na
                        ? (t[r + 1] = `(?:\\/|` + n + `\\/)?` + i)
                        : (t[r] = n)
                      : i === void 0
                        ? (t[r - 1] = a + `(?:\\/|\\/` + n + `)?`)
                        : i !== na && ((t[r - 1] = a + `(?:\\/|\\/` + n + `\\/)` + i), (t[r + 1] = na)));
                });
                let i = t.filter((e) => e !== na);
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
          return Mi.defaults(e).Minimatch;
        }
      }),
      (Mi.AST = Oi),
      (Mi.Minimatch = ma),
      (Mi.escape = Ai),
      (Mi.unescape = ci));
  }))();
}
function ga(e) {
  let t = (0, Na.c)(111),
    { gitRoot: n, gitCommonDir: r, cwd: i, hostId: a, paths: o } = e,
    c;
  t[0] !== i || t[1] !== n ? ((c = Oa(n, i)), (t[0] = i), (t[1] = n), (t[2] = c)) : (c = t[2]);
  let { normalizedGitRoot: l, normalizedCwd: u, cwdRelativeToGitRoot: d } = c,
    f = l == null ? null : `${l}/.gitattributes`,
    p = d != null && d !== `` ? `${u}/.gitattributes` : null,
    m;
  t[3] !== l || t[4] !== o ? ((m = ya(l, o)), (t[3] = l), (t[4] = o), (t[5] = m)) : (m = t[5]);
  let h = m,
    g;
  t[6] === r ? (g = t[7]) : ((g = r == null ? null : `${s(r)}/info/attributes`), (t[6] = r), (t[7] = g));
  let _ = g,
    v;
  t[8] !== p || t[9] !== _ || t[10] !== f || t[11] !== h
    ? ((v = [f, p, _, ...h].filter(va)), (t[8] = p), (t[9] = _), (t[10] = f), (t[11] = h), (t[12] = v))
    : (v = t[12]);
  let b = v,
    S;
  t[13] === b ? (S = t[14]) : ((S = Array.from(new Set(b))), (t[13] = b), (t[14] = S));
  let C = Ea(S, a),
    w;
  t[15] !== C.paths || t[16] !== f
    ? ((w = f != null && C.paths.has(f)), (t[15] = C.paths), (t[16] = f), (t[17] = w))
    : (w = t[17]);
  let T = w,
    E;
  t[18] !== p || t[19] !== C.paths
    ? ((E = p != null && C.paths.has(p)), (t[18] = p), (t[19] = C.paths), (t[20] = E))
    : (E = t[20]);
  let D = E,
    O;
  t[21] === C.paths ? (O = t[22]) : ((O = Array.from(C.paths)), (t[21] = C.paths), (t[22] = O));
  let k;
  t[23] !== p || t[24] !== f || t[25] !== O
    ? ((k = O.filter((e) => e !== f && e !== p)), (t[23] = p), (t[24] = f), (t[25] = O), (t[26] = k))
    : (k = t[26]);
  let A = k,
    j;
  t[27] !== A || t[28] !== a
    ? ((j = {
        queries: A.map((e) => ({
          queryKey: B(`read-file`, { hostId: a, path: e }),
          queryFn: (t) => {
            let { signal: n } = t;
            return oe(`read-file`, { params: { hostId: a, path: e }, signal: n });
          },
          staleTime: y.FIVE_SECONDS,
        })),
      }),
      (t[27] = A),
      (t[28] = a),
      (t[29] = j))
    : (j = t[29]);
  let M = x(j),
    N;
  bb0: {
    if (d == null || d === ``) {
      let e;
      (t[30] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = []), (t[30] = e)) : (e = t[30]), (N = e));
      break bb0;
    }
    let e;
    if (t[31] !== d || t[32] !== o) {
      let n;
      (t[34] === d
        ? (n = t[35])
        : ((n = (e) => {
            let t = s(e);
            return t.includes(`/`) && xa(t, d) == null;
          }),
          (t[34] = d),
          (t[35] = n)),
        (e = o.filter(n)),
        (t[31] = d),
        (t[32] = o),
        (t[33] = e));
    } else e = t[33];
    N = e;
  }
  let F = N,
    ee;
  t[36] !== F || t[37] !== u || t[38] !== l
    ? ((ee = ja({ ambiguousSlashPaths: F, normalizedCwd: u, normalizedGitRoot: l })),
      (t[36] = F),
      (t[37] = u),
      (t[38] = l),
      (t[39] = ee))
    : (ee = t[39]);
  let I = Ea(ee, a),
    te = f ?? ``,
    L;
  t[40] !== a || t[41] !== te
    ? ((L = { hostId: a, path: te }), (t[40] = a), (t[41] = te), (t[42] = L))
    : (L = t[42]);
  let R;
  t[43] === T ? (R = t[44]) : ((R = { enabled: T }), (t[43] = T), (t[44] = R));
  let z;
  t[45] !== L || t[46] !== R
    ? ((z = { params: L, queryConfig: R }), (t[45] = L), (t[46] = R), (t[47] = z))
    : (z = t[47]);
  let { data: V, isLoading: H } = P(`read-file`, z),
    ne = p ?? ``,
    U;
  t[48] !== a || t[49] !== ne
    ? ((U = { hostId: a, path: ne }), (t[48] = a), (t[49] = ne), (t[50] = U))
    : (U = t[50]);
  let W;
  t[51] === D ? (W = t[52]) : ((W = { enabled: D }), (t[51] = D), (t[52] = W));
  let G;
  t[53] !== U || t[54] !== W
    ? ((G = { params: U, queryConfig: W }), (t[53] = U), (t[54] = W), (t[55] = G))
    : (G = t[55]);
  let { data: K, isLoading: q } = P(`read-file`, G);
  V?.contents;
  let re = V?.contents ?? null,
    ie;
  t[56] === re ? (ie = t[57]) : ((ie = ba(re)), (t[56] = re), (t[57] = ie));
  let J = ie,
    ae;
  (t[58] !== K?.contents || t[59] !== d
    ? ((ae = () => (d == null || d === `` ? null : ba(K?.contents ?? null, { basePath: d }))),
      (t[58] = K?.contents),
      (t[59] = d),
      (t[60] = ae))
    : (ae = t[60]),
    K?.contents);
  let Y;
  t[61] === ae ? (Y = t[62]) : ((Y = ae()), (t[61] = ae), (t[62] = Y));
  let se = Y;
  K?.contents;
  let ce;
  bb1: {
    if (d == null || d === ``) {
      ce = null;
      break bb1;
    }
    let e = K?.contents ?? null,
      n;
    (t[63] === e ? (n = t[64]) : ((n = ba(e)), (t[63] = e), (t[64] = n)), (ce = n));
  }
  let le = ce,
    ue;
  if (
    t[65] !== A ||
    t[66] !== M ||
    t[67] !== p ||
    t[68] !== _ ||
    t[69] !== f ||
    t[70] !== se ||
    t[71] !== J ||
    t[72] !== l
  ) {
    let e;
    (t[74] === _
      ? (e = t[75])
      : ((e = (e, t) =>
          e.attributesPath === _
            ? -1
            : t.attributesPath === _
              ? 1
              : t.attributesPath.length - e.attributesPath.length),
        (t[74] = _),
        (t[75] = e)),
      (ue = [
        ...(f != null && J != null ? [{ attributesPath: f, matcher: J }] : []),
        ...(p != null && se != null ? [{ attributesPath: p, matcher: se }] : []),
        ...A.flatMap((e, t) => {
          let n = M[t]?.data?.contents,
            r = e === _ ? null : xa(e.slice(0, -15), l),
            i = ba(n ?? null, { basePath: r });
          return i == null ? [] : [{ attributesPath: e, matcher: i }];
        }),
      ].sort(e)),
      (t[65] = A),
      (t[66] = M),
      (t[67] = p),
      (t[68] = _),
      (t[69] = f),
      (t[70] = se),
      (t[71] = J),
      (t[72] = l),
      (t[73] = ue));
  } else ue = t[73];
  let X = ue,
    Z;
  t[76] !== F || t[77] !== I.paths || t[78] !== u || t[79] !== l
    ? ((Z = Ma({
        ambiguousSlashPaths: F,
        normalizedCwd: u,
        normalizedGitRoot: l,
        existingCandidatePaths: I.paths,
      })),
      (t[76] = F),
      (t[77] = I.paths),
      (t[78] = u),
      (t[79] = l),
      (t[80] = Z))
    : (Z = t[80]);
  let de = Z,
    Q;
  t[81] !== p || t[82] !== de || t[83] !== d || t[84] !== le || t[85] !== X
    ? ((Q = (e) => {
        let t = s(e);
        for (let { attributesPath: e, matcher: n } of X) {
          let r = n(t);
          if (r != null) return r === `set`;
          if (e === p && Sa(t, d, de)) {
            let e = le?.(t) ?? null;
            if (e != null) return e === `set`;
          }
        }
        return !1;
      }),
      (t[81] = p),
      (t[82] = de),
      (t[83] = d),
      (t[84] = le),
      (t[85] = X),
      (t[86] = Q))
    : (Q = t[86]);
  let fe = Q,
    pe;
  bb2: {
    if (X.length === 0) {
      let e;
      (t[87] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = new Set()), (t[87] = e)) : (e = t[87]),
        (pe = e));
      break bb2;
    }
    let e;
    if (t[88] !== fe || t[89] !== o) {
      let n;
      (t[91] === fe ? (n = t[92]) : ((n = (e) => fe(e)), (t[91] = fe), (t[92] = n)),
        (e = new Set(o.filter(n))),
        (t[88] = fe),
        (t[89] = o),
        (t[90] = e));
    } else e = t[90];
    pe = e;
  }
  let me = pe,
    he;
  if (t[93] !== _ || t[94] !== X) {
    let e;
    (t[96] === _
      ? (e = t[97])
      : ((e = (e) => {
          let { attributesPath: t } = e;
          return t !== _;
        }),
        (t[96] = _),
        (t[97] = e)),
      (he = X.some(e)),
      (t[93] = _),
      (t[94] = X),
      (t[95] = he));
  } else he = t[95];
  let ge = A.length > 0,
    _e;
  t[98] !== M ||
  t[99] !== D ||
  t[100] !== q ||
  t[101] !== I.isLoading ||
  t[102] !== C.isLoading ||
  t[103] !== T ||
  t[104] !== H
    ? ((_e = !C.isLoading && !I.isLoading && (!T || !H) && (!D || !q) && M.every(_a)),
      (t[98] = M),
      (t[99] = D),
      (t[100] = q),
      (t[101] = I.isLoading),
      (t[102] = C.isLoading),
      (t[103] = T),
      (t[104] = H),
      (t[105] = _e))
    : (_e = t[105]);
  let ve;
  return (
    t[106] !== me || t[107] !== he || t[108] !== ge || t[109] !== _e
      ? ((ve = {
          hasLinguistGeneratedAttributes: he,
          hasUnhandledAttributesFiles: ge,
          isReady: _e,
          paths: me,
        }),
        (t[106] = me),
        (t[107] = he),
        (t[108] = ge),
        (t[109] = _e),
        (t[110] = ve))
      : (ve = t[110]),
    ve
  );
}
function _a(e) {
  return !e.isLoading;
}
function va(e) {
  return e != null && e.length > 0;
}
function ya(e, t) {
  if (e == null) return [];
  let n = new Set();
  for (let r of t) {
    let t = s(r).split(`/`).filter(Boolean);
    for (let r = 0; r < t.length - 1; r += 1) n.add(c(e, `${t.slice(0, r + 1).join(`/`)}/.gitattributes`));
  }
  return Array.from(n);
}
function ba(e, t = {}) {
  if (!e) return null;
  let n = t.basePath == null ? null : s(t.basePath).replace(/^\/+/, ``).replace(/\/+$/, ``),
    r = e
      .split(/\r?\n/)
      .map((e) => Ca(e))
      .filter((e) => e != null);
  return r.length === 0
    ? null
    : (e) => {
        let t = null,
          i = xa(s(e), n);
        if (i == null) return null;
        for (let e of r) e.matches(i) && (t = e.state);
        return t;
      };
}
function xa(e, t) {
  if (t == null) return e;
  let n = `${t}/`;
  return e === t ? `` : e.startsWith(n) ? e.slice(n.length) : null;
}
function Sa(e, t, n) {
  return t == null || t === `` ? !1 : e.includes(`/`) ? n.has(e) : xa(e, t) == null;
}
function Ca(e) {
  let t = e.trim();
  if (t.length === 0 || t.startsWith(`#`) || t.startsWith(`[attr]`)) return null;
  let n = t.split(/\s+/);
  if (n.length < 2) return null;
  let r = Ta(n[0]);
  if (!r) return null;
  let i = wa(n.slice(1));
  return i == null ? null : { matches: r, state: i };
}
function wa(e) {
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
function Ta(e) {
  if (!e) return null;
  let t = new ma(e.replace(/^\/+/, ``), {
    dot: !0,
    matchBase: !e.includes(`/`),
    nobrace: !0,
    noext: !0,
    nonegate: !0,
    nocomment: !0,
    platform: `linux`,
  });
  return (e) => t.match(s(e));
}
function Ea(e, t) {
  let n = (0, Na.c)(13),
    r;
  n[0] !== t || n[1] !== e ? ((r = { hostId: t, paths: e }), (n[0] = t), (n[1] = e), (n[2] = r)) : (r = n[2]);
  let i = e.length > 0,
    a;
  n[3] === i ? (a = n[4]) : ((a = { enabled: i }), (n[3] = i), (n[4] = a));
  let o;
  n[5] !== r || n[6] !== a
    ? ((o = { params: r, queryConfig: a }), (n[5] = r), (n[6] = a), (n[7] = o))
    : (o = n[7]);
  let { data: s, isLoading: c } = P(`paths-exist`, o);
  s?.existingPaths;
  let l;
  n[8] === s?.existingPaths
    ? (l = n[9])
    : ((l = new Set(s?.existingPaths.map(Da) ?? [])), (n[8] = s?.existingPaths), (n[9] = l));
  let u = l,
    d;
  return (
    n[10] !== u || n[11] !== c
      ? ((d = { isLoading: c, paths: u }), (n[10] = u), (n[11] = c), (n[12] = d))
      : (d = n[12]),
    d
  );
}
function Da(e) {
  return s(e);
}
function Oa(e, t) {
  let n = ka(e),
    r = ka(t);
  return { normalizedGitRoot: n, normalizedCwd: r, cwdRelativeToGitRoot: Aa(n, r) };
}
function ka(e) {
  return e == null ? null : s(e).replace(/\/+$/, ``);
}
function Aa(e, t) {
  if (e == null || t == null) return null;
  if (t === e) return ``;
  let n = `${e}/`;
  return t.startsWith(n) ? t.slice(n.length) : null;
}
function ja({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: n }) {
  return n == null || t == null
    ? []
    : e.flatMap((e) => {
        let r = s(e);
        return [c(n, r), c(t, r)];
      });
}
function Ma({ ambiguousSlashPaths: e, normalizedCwd: t, normalizedGitRoot: n, existingCandidatePaths: r }) {
  return n == null || t == null
    ? new Set()
    : new Set(
        e.filter((e) => {
          let i = s(e),
            a = s(c(n, i)),
            o = s(c(t, i));
          return r.has(o) && !r.has(a);
        }),
      );
}
var Na;
function Pa() {
  return (Pa = e(() => {
    ((Na = Q()), E(), ha(), m(), d(), le());
  }))();
}
function Fa(e, t, n, r) {
  Va != null && (Va.font = `${Ba}px system-ui`);
  let i = n > 0 ? Ra : 0,
    a = n > 0 ? La : ``,
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
      (i > 0 && (i += za),
      (a += `<text x="${i}" y="${Ra / 2}" fill="${t}" font-size="${Ba}" font-family="system-ui" dominant-baseline="middle" direction="ltr" unicode-bidi="isolate">${(0, Ia.default)(e)}</text>`),
      (i += Math.ceil(Va?.measureText(e).width ?? e.length * Ba)));
  return {
    body: a,
    height: Ra,
    name: `review-file-tree-stats-${e}-${t}-${n}`,
    viewBox: `0 0 ${i} ${Ra}`,
    width: i,
  };
}
var Ia, La, Ra, za, Ba, Va;
function Ha() {
  return (Ha = e(() => {
    (q(),
      (Ia = t($e(), 1)),
      ne(),
      (La = i(Z).body),
      (Ra = Z.canvas.width),
      (za = 4),
      (Ba = 12),
      (Va = typeof OffscreenCanvas > `u` ? null : new OffscreenCanvas(1, 1).getContext(`2d`)));
  }))();
}
function Ua(e) {
  let t = (0, Qa.c)(52),
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
    p = w(),
    m;
  t[0] === i ? (m = t[1]) : ((m = i == null ? null : J(i)), (t[0] = i), (t[1] = m));
  let h = m,
    g;
  t[2] === c ? (g = t[3]) : ((g = xe(c)), (t[2] = c), (t[3] = g));
  let _ = g,
    v;
  t[4] === _ ? (v = t[5]) : ((v = _.map(Ya)), (t[4] = _), (t[5] = v));
  let y = v,
    b;
  t[6] === _ ? (b = t[7]) : ((b = _.map(Ja)), (t[6] = _), (t[7] = b));
  let x = b,
    S;
  t[8] === x ? (S = t[9]) : ((S = x.map(qa).join(`\0`)), (t[8] = x), (t[9] = S));
  let C = S,
    T;
  t[10] === _ ? (T = t[11]) : ((T = new Map(_.map(Ka))), (t[10] = _), (t[11] = T));
  let E = T,
    D;
  t[12] === y ? (D = t[13]) : ((D = Za(y)), (t[12] = y), (t[13] = D));
  let O = D,
    k,
    A;
  if (t[14] !== s || t[15] !== _ || t[16] !== p) {
    k = new Map();
    for (let { entry: e, treePath: t } of _) {
      let n = s?.get(e.path) ?? 0;
      (e.additions || e.deletions || n !== 0) &&
        k.set(t, {
          icon: Fa(e.additions, e.deletions, n, p),
          title:
            e.additions == null || e.deletions == null
              ? e.path
              : p.formatMessage(
                  {
                    id: `codex.review.fileTree.fileChangeSummary`,
                    defaultMessage: `{path}, added lines: {additions, number}, deleted lines: {deletions, number}, comments: {comments, number}`,
                    description: `Accessible description and tooltip giving a file path and its added and deleted lines and review comments in the Code Review file tree`,
                  },
                  { path: e.path, additions: e.additions, deletions: e.deletions, comments: n },
                ),
        });
    }
    ((A = (0, $a.default)(Array.from(k.values(), Ga), `name`)),
      (t[14] = s),
      (t[15] = _),
      (t[16] = p),
      (t[17] = k),
      (t[18] = A));
  } else ((k = t[17]), (A = t[18]));
  let j = A,
    M;
  t[19] === k ? (M = t[20]) : ((M = new Map(Array.from(k, Wa))), (t[19] = k), (t[20] = M));
  let N = M,
    P;
  t[21] === k
    ? (P = t[22])
    : ((P = (e) => {
        let { item: t } = e;
        return t.kind === `file` ? (k.get(t.path) ?? null) : null;
      }),
      (t[21] = k),
      (t[22] = P));
  let F = me(P),
    ee;
  t[23] !== n || t[24] !== _
    ? ((ee = n == null ? void 0 : _.find((e) => e.entry.path === n)?.treePath),
      (t[23] = n),
      (t[24] = _),
      (t[25] = ee))
    : (ee = t[25]);
  let I = ee,
    te;
  t[26] !== n || t[27] !== E || t[28] !== o
    ? ((te = (e) => {
        let t = e.find((e) => E.get(e) != null);
        if (t == null) return;
        let r = E.get(t)?.path;
        r != null && r !== n && o(r);
      }),
      (t[26] = n),
      (t[27] = E),
      (t[28] = o),
      (t[29] = te))
    : (te = t[29]);
  let L = me(te),
    R;
  t[30] !== u || t[31] !== E || t[32] !== o
    ? ((R = (e) => {
        if (!u) return;
        let t = At(e.nativeEvent);
        if (t == null) return;
        let n = E.get(t)?.path;
        n != null && o(n);
      }),
      (t[30] = u),
      (t[31] = E),
      (t[32] = o),
      (t[33] = R))
    : (R = t[33]);
  let z = R,
    B;
  t[34] === d
    ? (B = t[35])
    : ((B = d ? { paddingTop: at, paddingBottom: nt } : void 0), (t[34] = d), (t[35] = B));
  let V;
  t[36] !== I ||
  t[37] !== j ||
  t[38] !== O ||
  t[39] !== x ||
  t[40] !== C ||
  t[41] !== _.length ||
  t[42] !== h ||
  t[43] !== z ||
  t[44] !== L ||
  t[45] !== a ||
  t[46] !== N ||
  t[47] !== F
    ? ((V =
        _.length > 0
          ? (0, eo.jsx)(je, {
              name: `ReviewFileTree`,
              resetKey: C,
              fallback: (0, eo.jsx)(tt, {
                align: `start`,
                className: `px-2 py-2`,
                children: (0, eo.jsx)(f, {
                  id: `codex.review.fileTree.renderError`,
                  defaultMessage: `File tree couldn't render`,
                  description: `Error shown when the review file tree fails to render`,
                }),
              }),
              children: (0, eo.jsx)(jt, {
                flattenEmptyDirectories: !0,
                cwd: h,
                decorationAlignment: `end`,
                decorationIcons: j,
                hostId: a,
                initialExpandedPaths: O,
                itemHeight: to,
                onClick: z,
                onSelectionChange: L,
                paths: x,
                pathDescriptions: N,
                renderRowDecoration: F,
                selectedPath: I,
                unsafeCSS: `
              [data-item-type='file'] {
                color: var(--color-text-tertiary);
              }

              [data-item-type='file']:hover,
              [data-item-type='file'][aria-selected='true'] {
                color: var(--color-text);
              }
            `,
              }),
            })
          : (0, eo.jsx)(Xa, {})),
      (t[36] = I),
      (t[37] = j),
      (t[38] = O),
      (t[39] = x),
      (t[40] = C),
      (t[41] = _.length),
      (t[42] = h),
      (t[43] = z),
      (t[44] = L),
      (t[45] = a),
      (t[46] = N),
      (t[47] = F),
      (t[48] = V))
    : (V = t[48]);
  let H;
  return (
    t[49] !== B || t[50] !== V
      ? ((H = (0, eo.jsx)(`div`, { className: `h-full min-h-0 w-full px-1`, style: B, children: V })),
        (t[49] = B),
        (t[50] = V),
        (t[51] = H))
      : (H = t[51]),
    H
  );
}
function Wa(e) {
  let [t, n] = e,
    { title: r } = n;
  return [t, r];
}
function Ga(e) {
  let { icon: t } = e;
  return t;
}
function Ka(e) {
  let { entry: t, treePath: n } = e;
  return [n, t];
}
function qa(e) {
  let { displayPath: t, path: n } = e;
  return `${t}\0${n}`;
}
function Ja(e) {
  let { entry: t, treePath: n } = e;
  return { displayPath: n, path: t.path };
}
function Ya(e) {
  return e.treePath;
}
function Xa() {
  let e = (0, Qa.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, eo.jsx)(tt, {
          align: `start`,
          className: `px-2 py-2`,
          children: (0, eo.jsx)(f, {
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
function Za(e) {
  let t = new Set();
  for (let n of e) {
    let e = n.endsWith(`/`) ? n.slice(0, -1) : n,
      r = e.indexOf(`/`);
    for (; r !== -1;) (t.add(e.slice(0, r)), (r = e.indexOf(`/`, r + 1)));
  }
  return Array.from(t);
}
var Qa, $a, eo, to;
function no() {
  return (no = e(() => {
    ((Qa = Q()),
      ($a = t(se(), 1)),
      Y(),
      H(),
      Le(),
      Ye(),
      kt(),
      Ze(),
      et(),
      M(),
      Ha(),
      (eo = pe()),
      (to = 29));
  }))();
}
export {
  Pt as C,
  zt as S,
  zn as _,
  Pa as a,
  nn as b,
  xr as c,
  sr as d,
  mr as f,
  nr as g,
  Xn as h,
  ba as i,
  lr as l,
  or as m,
  Ua as n,
  ga as o,
  rr as p,
  no as r,
  hr as s,
  Xa as t,
  cr as u,
  Vn as v,
  pn as x,
  Gn as y,
};
//# sourceMappingURL=review-file-tree-pane-3e66effc6a6c.js.map
