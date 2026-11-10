import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Bpn as a,
  Cpn as o,
  Cq as s,
  DW as c,
  EW as l,
  F3t as u,
  Hg as d,
  Jit as f,
  Jrt as p,
  Kit as m,
  M6t as h,
  MMt as g,
  N3t as _,
  N6t as v,
  O3t as y,
  Opn as ee,
  RWt as b,
  Rpn as x,
  Spn as S,
  Sq as C,
  TJt as w,
  U3t as T,
  XHt as E,
  Xrt as D,
  YHt as O,
  Yrt as k,
  ZHt as A,
  Zrt as j,
  _Jt as M,
  _Mt as te,
  a3t as N,
  aG as ne,
  a_ as re,
  eMt as P,
  eit as ie,
  gMt as ae,
  gRt as oe,
  hMt as F,
  hmn as I,
  iit as se,
  jMt as L,
  jXt as R,
  kMt as z,
  kXt as B,
  kmn as V,
  lW as H,
  m6t as U,
  mJt as ce,
  nit as W,
  o3t as le,
  oG as ue,
  o_ as G,
  pin as de,
  rMt as K,
  rit as fe,
  s6t as q,
  sG as pe,
  sW as me,
  tit as he,
  uG as ge,
  uin as _e,
  vMt as ve,
  wJt as ye,
  xRt as be,
  zg as xe,
  zpn as Se,
} from "./app-initial-f094ef01c64d.js";
import {
  KS as Ce,
  MS as we,
  NS as Te,
  Xb as J,
  Zb as Ee,
  _S as De,
  ox as Oe,
  qS as ke,
  sx as Ae,
  vS as je,
} from "./app-primary-4c40d73a1074.js";
import { n as Me, t as Ne } from "./arrow-curved-right-c429570ec5db.js";
import {
  a as Pe,
  i as Fe,
  n as Ie,
  o as Le,
  r as Re,
  s as ze,
} from "./pull-request-readonly-comment-6e9ac0779fb8.js";
import { i as Be, r as Ve, s as He, t as Ue } from "./pull-request-actions-7f7377d4b593.js";
import { n as We, r as Ge } from "./pull-request-code-review-navigation-c0a64db532da.js";
import { c as Ke, i as qe, l as Je, s as Ye } from "./pull-request-detail-model-6c8655a9e7d6.js";
function Xe(e, t, n) {
  e.set(tt, P(t), n);
}
function Ze(e, t, n) {
  e.set(nt, P(t), n);
}
function Qe(e, t, n) {
  e.set(rt, P(t), n);
}
function $e(e, t, n) {
  e.set(it, P(t), n);
}
function et(e, t) {
  e.set(at, t);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot = e(() => {
    (y(),
      le(),
      be(),
      K(),
      (tt = q(N, (e) => `all`)),
      (nt = q(N, (e) => `open`)),
      (rt = q(N, (e) => null)),
      (it = q(N, (e) => ``)),
      (at = U(oe, () => `summary`)));
  });
function st(e) {
  if (dt(e))
    return _t(e.href)
      ? (ht(
          e,
          ct({
            alt: e.text,
            block: !1,
            mediaKind: `image`,
            raw: e.raw,
            title: e.title,
            url: e.href,
          }),
        ),
        !0)
      : !1;
  if (pt(e)) {
    let t = lt(e);
    if (t != null)
      return (
        ht(e, ct({ alt: ``, block: !0, mediaKind: `video`, raw: e.raw, title: null, url: t })), !0
      );
  }
  if (ut(e)) {
    let t = mt(e);
    return t == null ? !1 : (ht(e, ct({ ...t, block: e.block })), !0);
  }
  if (e.type === `table`) {
    let t = !1;
    return (
      xt.walkTokens([e], (n) => {
        n !== e && (t = st(n) || t);
      }),
      t
    );
  }
  return !(`tokens` in e) || !Array.isArray(e.tokens)
    ? !1
    : e.tokens.reduce((e, t) => st(t) || e, !1);
}
function ct({ alt: e, block: t, mediaKind: n, raw: r, title: i, url: a }) {
  let o = { alt: e, kind: n, src: a };
  return (
    i != null && (o.title = i),
    { type: `codexDirective`, raw: r, name: bt, attributes: o, block: t }
  );
}
function lt(e) {
  let t = e.tokens[0];
  return e.tokens.length !== 1 || !ft(t) || t.raw !== t.href || t.text !== t.href || !vt(t.href)
    ? null
    : t.href;
}
function ut(e) {
  return (
    e.type === `html` &&
    `block` in e &&
    typeof e.block == `boolean` &&
    `text` in e &&
    typeof e.text == `string`
  );
}
function dt(e) {
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
function ft(e) {
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
function pt(e) {
  return (
    e.type === `paragraph` &&
    `text` in e &&
    typeof e.text == `string` &&
    `tokens` in e &&
    Array.isArray(e.tokens)
  );
}
function mt(e) {
  let t = e.raw.match(/^[ \t]*<(?:img|video)\b(?:[^>"']|"[^"]*"|'[^']*')*>/i)?.[0];
  if (t == null) return null;
  let n = (0, yt.parse)(t).querySelector(`img, video`);
  if (n == null) return null;
  let r = n.tagName === `VIDEO` ? `video` : `image`;
  if (r === `image` && !e.block) return null;
  let i = n.getAttribute(`src`);
  return i == null || !_t(i)
    ? null
    : {
        alt: n.getAttribute(`alt`) ?? ``,
        mediaKind: r,
        raw: t,
        title: n.getAttribute(`title`) ?? null,
        url: i,
      };
}
function ht(e, t) {
  for (let t of Reflect.ownKeys(e)) Reflect.deleteProperty(e, t);
  Object.assign(e, t);
}
function gt(e) {
  let t = e.toLowerCase();
  return (
    t.includes(`github.com/user-attachments/assets/`) ||
    t.includes(`user-images.githubusercontent.com/`) ||
    t.includes(`private-user-images.githubusercontent.com/`)
  );
}
function _t(e) {
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
function vt(e) {
  if (!_t(e)) return !1;
  let t = new URL(e);
  return (
    (t.hostname === `github.com` && t.pathname.startsWith(`/user-attachments/assets/`)) ||
    /\.(?:mov|mp4|webm)$/i.test(t.pathname)
  );
}
var yt,
  bt,
  xt,
  St,
  Ct = e(() => {
    (de(),
      (yt = a()),
      A(),
      (bt = `pull-request-media`),
      (xt = new _e(E)),
      (St = {
        extensions: [
          {
            name: `pullRequestMedia`,
            level: `block`,
            tokenizer(e) {
              if (!gt(e)) return;
              let t = xt.lexer(e)[0];
              return t != null && st(t) ? t : void 0;
            },
          },
        ],
      }));
  });
function wt(e) {
  let t = (0, kt.c)(27),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ account: n, children: r, directives: i, extensions: a, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s;
  t[6] === a ? (s = t[7]) : ((s = a == null ? Mt : [St, ...a]), (t[6] = a), (t[7] = s));
  let c = s;
  if (n == null) {
    let e;
    t[8] === r ? (e = t[9]) : ((e = Te(r)), (t[8] = r), (t[9] = e));
    let n;
    return (
      t[10] !== i || t[11] !== a || t[12] !== o || t[13] !== e
        ? ((n = (0, Y.jsx)(Ce, { ...o, directives: i, extensions: a, children: e })),
          (t[10] = i),
          (t[11] = a),
          (t[12] = o),
          (t[13] = e),
          (t[14] = n))
        : (n = t[14]),
      n
    );
  }
  let l;
  t[15] === i ? (l = t[16]) : ((l = { ...i, [bt]: Dt }), (t[15] = i), (t[16] = l));
  let u;
  t[17] === r ? (u = t[18]) : ((u = Te(r)), (t[17] = r), (t[18] = u));
  let d;
  t[19] !== c || t[20] !== o || t[21] !== l || t[22] !== u
    ? ((d = (0, Y.jsx)(Ce, { ...o, directives: l, extensions: c, children: u })),
      (t[19] = c),
      (t[20] = o),
      (t[21] = l),
      (t[22] = u),
      (t[23] = d))
    : (d = t[23]);
  let f;
  return (
    t[24] !== n || t[25] !== d
      ? ((f = (0, Y.jsx)(jt, { value: n, children: d })), (t[24] = n), (t[25] = d), (t[26] = f))
      : (f = t[26]),
    f
  );
}
function Tt(e) {
  let t = (0, kt.c)(30),
    { account: n, alt: r, className: i, mediaKind: a, title: s, url: c } = e,
    l;
  t[0] !== n || t[1] !== c
    ? ((l = { account: n, url: c }), (t[0] = n), (t[1] = c), (t[2] = l))
    : (l = t[2]);
  let u = _(d, l),
    f = ee(),
    [p, m] = (0, At.useState)(null);
  if (u.isLoading) {
    let e;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(L, { className: `icon-sm` })), (t[3] = e))
      : (e = t[3]);
    let n;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, Y.jsxs)(`div`, {
            className: `inline-flex min-h-24 min-w-40 items-center justify-center gap-2 rounded-md bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
            role: `status`,
            children: [
              e,
              (0, Y.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Y.jsx)(o, {
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
  if (p === c || u.data?.status !== `success` || !Ot(u.data.mimeType, a)) {
    let e;
    return (
      t[5] === c ? (e = t[6]) : ((e = (0, Y.jsx)(Et, { url: c })), (t[5] = c), (t[6] = e)), e
    );
  }
  let h = `data:${u.data.mimeType};base64,${u.data.contentsBase64}`;
  if (a === `video`) {
    let e;
    t[7] !== r || t[8] !== f
      ? ((e =
          r ||
          f.formatMessage({
            id: `codex.pullRequests.media.videoLabel`,
            defaultMessage: `GitHub video attachment`,
            description: `Accessible label for a pull request video attachment`,
          })),
        (t[7] = r),
        (t[8] = f),
        (t[9] = e))
      : (e = t[9]);
    let n;
    t[10] === i
      ? (n = t[11])
      : ((n = x(
          `block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md bg-black object-contain shadow-md`,
          i,
        )),
        (t[10] = i),
        (t[11] = n));
    let a;
    t[12] === c
      ? (a = t[13])
      : ((a = () => {
          m(c);
        }),
        (t[12] = c),
        (t[13] = a));
    let o;
    return (
      t[14] !== h || t[15] !== e || t[16] !== n || t[17] !== a || t[18] !== s
        ? ((o = (0, Y.jsx)(`video`, {
            "aria-label": e,
            className: n,
            controls: !0,
            playsInline: !0,
            preload: `metadata`,
            src: h,
            title: s,
            onError: a,
          })),
          (t[14] = h),
          (t[15] = e),
          (t[16] = n),
          (t[17] = a),
          (t[18] = s),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  let g;
  t[20] === i
    ? (g = t[21])
    : ((g = x(
        `block h-auto max-h-[min(70vh,40rem)] max-w-full rounded-md object-contain shadow-md`,
        i,
      )),
      (t[20] = i),
      (t[21] = g));
  let v;
  t[22] === c
    ? (v = t[23])
    : ((v = () => {
        m(c);
      }),
      (t[22] = c),
      (t[23] = v));
  let y;
  return (
    t[24] !== r || t[25] !== h || t[26] !== g || t[27] !== v || t[28] !== s
      ? ((y = (0, Y.jsx)(`img`, {
          alt: r,
          className: g,
          loading: `lazy`,
          src: h,
          title: s,
          onError: v,
        })),
        (t[24] = r),
        (t[25] = h),
        (t[26] = g),
        (t[27] = v),
        (t[28] = s),
        (t[29] = y))
      : (y = t[29]),
    y
  );
}
function Et(e) {
  let t = (0, kt.c)(6),
    { url: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(`span`, {
        role: `status`,
        children: (0, Y.jsx)(o, {
          id: `codex.pullRequests.media.unavailable`,
          defaultMessage: `Preview unavailable`,
          description: `Message shown when a pull request media attachment cannot be previewed`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = (e) => {
        v({ event: e, href: n, initiator: `open_in_browser_bridge` });
      }),
      (t[1] = n),
      (t[2] = i));
  let a;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Y.jsx)(o, {
        id: `codex.pullRequests.media.openInGitHub`,
        defaultMessage: `Open in GitHub`,
        description: `Button label for opening a pull request attachment on GitHub`,
      })),
      (t[3] = a))
    : (a = t[3]);
  let s;
  return (
    t[4] === i
      ? (s = t[5])
      : ((s = (0, Y.jsxs)(`div`, {
          className: `my-3 flex min-h-24 min-w-40 flex-col items-center justify-center gap-2 rounded-lg bg-primary-ghost-hover px-4 py-3 text-sm text-codex-description`,
          children: [r, (0, Y.jsx)(z, { color: `outline`, onClick: i, children: a })],
        })),
        (t[4] = i),
        (t[5] = s)),
    s
  );
}
function Dt(e) {
  let t = (0, kt.c)(6),
    { attributes: n } = e,
    r = (0, At.useContext)(jt),
    i = n.kind,
    a = n.src;
  if (r == null || (i !== `image` && i !== `video`) || typeof a != `string`) return null;
  let o = typeof n.alt == `string` ? n.alt : ``,
    s = typeof n.title == `string` ? n.title : void 0,
    c;
  return (
    t[0] !== r || t[1] !== i || t[2] !== o || t[3] !== s || t[4] !== a
      ? ((c = (0, Y.jsx)(Tt, {
          account: r,
          alt: o,
          className: `my-3`,
          mediaKind: i,
          title: s,
          url: a,
        })),
        (t[0] = r),
        (t[1] = i),
        (t[2] = o),
        (t[3] = s),
        (t[4] = a),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function Ot(e, t) {
  return e === `application/octet-stream` || e.startsWith(`${t}/`);
}
var kt,
  At,
  Y,
  jt,
  Mt,
  Nt = e(() => {
    ((kt = V()),
      Se(),
      y(),
      (At = t(i(), 1)),
      S(),
      r(),
      h(),
      g(),
      we(),
      ke(),
      xe(),
      Ct(),
      (Y = I()),
      (jt = (0, At.createContext)(null)),
      (Mt = [St]));
  }),
  Pt,
  Ft = e(() => {
    (y(),
      re(),
      le(),
      w(),
      M(),
      (Pt = T(N, ({ request: e, source: t }) => ({
        enabled: e.scope === `mentions` || e.query.length > 0,
        queryFn: async ({ signal: n }) => {
          let r = await G(`gh-user-search`, e, { signal: n, source: t });
          if (r.status === `error`) throw Error(r.error);
          return r.users;
        },
        queryKey: ce(`gh-user-search`, e),
        retry: !1,
        staleTime: ye.ONE_MINUTE,
      }))));
  });
function It(e) {
  let t = (0, Ht.c)(80),
    {
      ariaLabel: n,
      autoFocus: r,
      body: i,
      disabled: a,
      placeholder: l,
      request: u,
      source: d,
      onBodyChange: f,
    } = e,
    p = ee(),
    m = (0, Wt.useId)(),
    h = (0, Wt.useRef)(null),
    g = (0, Wt.useRef)(null),
    [v, y] = (0, Wt.useState)(-1),
    [b, x] = (0, Wt.useState)(null),
    S = b?.query ?? ``,
    C = s(S, Kt),
    w = b != null && !a,
    T;
  t[0] === u ? (T = t[1]) : ((T = { ...u, query: ``, scope: `mentions` }), (t[0] = u), (t[1] = T));
  let E;
  t[2] !== d || t[3] !== T
    ? ((E = { request: T, source: d }), (t[2] = d), (t[3] = T), (t[4] = E))
    : (E = t[4]);
  let D;
  t[5] === w ? (D = t[6]) : ((D = { enabled: w }), (t[5] = w), (t[6] = D));
  let { data: O, isError: k, isLoading: A } = _(Pt, E, D),
    j = w && S.length >= 2 && C === S,
    M;
  t[7] !== C || t[8] !== u
    ? ((M = { ...u, query: C, scope: `mentions` }), (t[7] = C), (t[8] = u), (t[9] = M))
    : (M = t[9]);
  let te;
  t[10] !== d || t[11] !== M
    ? ((te = { request: M, source: d }), (t[10] = d), (t[11] = M), (t[12] = te))
    : (te = t[12]);
  let N;
  t[13] === j ? (N = t[14]) : ((N = { enabled: j }), (t[13] = j), (t[14] = N));
  let { data: re, isError: P, isLoading: ie } = _(Pt, te, N),
    ae = O?.filter((e) => {
      let { login: t } = e;
      return t.toLowerCase().includes(S.toLowerCase());
    }),
    oe =
      O == null && (!j || re == null)
        ? void 0
        : (0, Ut.default)([...(ae ?? []), ...(j ? (re ?? []) : [])], zt),
    F = (oe?.length ?? 0) > 0,
    I = A || (S.length >= 2 && (!j || ie)),
    se = k || (j && P),
    L = w && (S.length !== 1 || F),
    R;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (e) => {
        let t = Vt(e),
          n = g.current;
        if (t != null && n != null && t.from === n.from && t.query.startsWith(n.query)) {
          x(null);
          return;
        }
        ((g.current = null), x(t));
      }),
      (t[15] = R))
    : (R = t[15]);
  let z = R,
    B;
  t[16] === b
    ? (B = t[17])
    : ((B = () => {
        ((g.current = b), x(null));
      }),
      (t[16] = b),
      (t[17] = B));
  let V = B,
    U;
  t[18] !== b || t[19] !== i || t[20] !== f
    ? ((U = (e) => {
        if (b == null) return;
        let t = i.slice(b.to),
          n = t === `` ? ` ` : ``,
          r = `@${e.login}${n}`,
          a = `${i.slice(0, b.from)}${r}${t}`,
          o = b.from + r.length;
        (f(a),
          (g.current = { from: b.from, query: e.login, to: b.from + e.login.length + 1 }),
          x(null),
          requestAnimationFrame(() => {
            (h.current?.focus(), h.current?.setSelectionRange(o, o));
          }));
      }),
      (t[18] = b),
      (t[19] = i),
      (t[20] = f),
      (t[21] = U))
    : (U = t[21]);
  let ce = U,
    W;
  t[22] === i.length
    ? (W = t[23])
    : ((W = (e, t) => {
        Bt(t, i.length > 0);
      }),
      (t[22] = i.length),
      (t[23] = W));
  let le = H(W),
    G;
  t[24] === i.length
    ? (G = t[25])
    : ((G = () => {
        let e = h.current;
        e != null && Bt(e, i.length > 0);
      }),
      (t[24] = i.length),
      (t[25] = G));
  let de;
  (t[26] === i ? (de = t[27]) : ((de = [i]), (t[26] = i), (t[27] = de)),
    (0, Wt.useLayoutEffect)(G, de));
  let K = null;
  if (!F) {
    if (I) {
      let e;
      (t[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(o, {
            id: `pullRequestsPage.detail.commentInput.mentions.loading`,
            defaultMessage: `Searching GitHub users…`,
            description: `Loading message shown while searching for GitHub users to mention`,
          })),
          (t[28] = e))
        : (e = t[28]),
        (K = e));
    } else if (se) {
      let e;
      (t[29] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(o, {
            id: `pullRequestsPage.detail.commentInput.mentions.error`,
            defaultMessage: `Couldn’t search GitHub users`,
            description: `Error shown when GitHub user mention suggestions fail to load`,
          })),
          (t[29] = e))
        : (e = t[29]),
        (K = e));
    } else if (oe != null) {
      let e;
      (t[30] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, X.jsx)(o, {
            id: `pullRequestsPage.detail.commentInput.mentions.empty`,
            defaultMessage: `No GitHub users found`,
            description: `Empty state shown when no GitHub users match a mention query`,
          })),
          (t[30] = e))
        : (e = t[30]),
        (K = e));
    }
  }
  let fe = ne,
    q;
  t[31] === le ? (q = t[32]) : ((q = c(h, le)), (t[31] = le), (t[32] = q));
  let me = L && F && v >= 0 ? `${m}-option-${v}` : void 0,
    he = L && F ? m : void 0,
    ge;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = () => x(null)), (t[33] = ge))
    : (ge = t[33]);
  let _e;
  t[34] === f
    ? (_e = t[35])
    : ((_e = (e) => {
        (f(e.currentTarget.value), z(e.currentTarget));
      }),
      (t[34] = f),
      (t[35] = _e));
  let ve;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = (e) => {
        z(e.currentTarget);
      }),
      (t[36] = ve))
    : (ve = t[36]);
  let ye;
  t[37] !== V || t[38] !== F || t[39] !== L
    ? ((ye = (e) => {
        if (!e.nativeEvent.isComposing) {
          if ((e.metaKey || e.ctrlKey) && e.key === `Enter`) {
            (e.preventDefault(), V(), e.currentTarget.form?.requestSubmit());
            return;
          }
          if (L && !F && (e.key === `ArrowDown` || e.key === `ArrowUp`)) {
            e.preventDefault();
            return;
          }
          e.key === `Escape` && L && (e.preventDefault(), e.stopPropagation(), V());
        }
      }),
      (t[37] = V),
      (t[38] = F),
      (t[39] = L),
      (t[40] = ye))
    : (ye = t[40]);
  let be;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (e) => {
        z(e.currentTarget);
      }),
      (t[41] = be))
    : (be = t[41]);
  let xe;
  t[42] !== n ||
  t[43] !== r ||
  t[44] !== i ||
  t[45] !== a ||
  t[46] !== l ||
  t[47] !== q ||
  t[48] !== me ||
  t[49] !== he ||
  t[50] !== _e ||
  t[51] !== ye
    ? ((xe = (0, X.jsx)(ue, {
        asChild: !0,
        children: (0, X.jsx)(`textarea`, {
          ref: q,
          "aria-activedescendant": me,
          "aria-autocomplete": `list`,
          "aria-controls": he,
          "aria-haspopup": `listbox`,
          "aria-label": n,
          autoFocus: r,
          className: `block min-h-7 w-full min-w-0 flex-1 resize-none overflow-y-auto bg-transparent px-0 pt-2.5 pb-0 text-base leading-7 text-default outline-none placeholder:text-tertiary`,
          disabled: a,
          placeholder: l,
          rows: 1,
          value: i,
          onBlur: ge,
          onChange: _e,
          onFocus: ve,
          onKeyDown: ye,
          onSelect: be,
        }),
      })),
      (t[42] = n),
      (t[43] = r),
      (t[44] = i),
      (t[45] = a),
      (t[46] = l),
      (t[47] = q),
      (t[48] = me),
      (t[49] = he),
      (t[50] = _e),
      (t[51] = ye),
      (t[52] = xe))
    : (xe = t[52]);
  let Se = pe,
    Ce = Rt,
    we = Lt,
    Te = De,
    J;
  t[53] === K
    ? (J = t[54])
    : ((J = K == null ? null : (0, X.jsx)(`span`, { role: `status`, children: K })),
      (t[53] = K),
      (t[54] = J));
  let Ee = I && !F,
    Oe =
      oe?.slice(0, 10).map((e) => ({
        ariaLabel: p.formatMessage(
          {
            id: `pullRequestsPage.detail.commentInput.mentions.select`,
            defaultMessage: `Mention @{login}`,
            description: `Accessible label for selecting a GitHub user mention suggestion`,
          },
          { login: e.login },
        ),
        content: (0, X.jsxs)(`span`, {
          className: `flex min-w-0 items-center gap-2`,
          children: [
            (0, X.jsx)(`img`, {
              alt: ``,
              className: `size-6 shrink-0 rounded-full object-cover`,
              src: e.avatarUrl,
            }),
            (0, X.jsx)(`span`, {
              className: `truncate`,
              children: (0, X.jsx)(o, {
                id: `pullRequestsPage.detail.commentInput.mentions.login`,
                defaultMessage: `@{login}`,
                description: `GitHub login shown in a user mention suggestion`,
                values: { login: e.login },
              }),
            }),
          ],
        }),
        key: e.login,
      })) ?? [],
    ke;
  t[55] !== J || t[56] !== Ee || t[57] !== Oe
    ? ((ke = [{ emptyState: J, id: `github-users`, isLoading: Ee, items: Oe }]),
      (t[55] = J),
      (t[56] = Ee),
      (t[57] = Oe),
      (t[58] = ke))
    : (ke = t[58]);
  let Ae;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (e, t) => y(t)), (t[59] = Ae))
    : (Ae = t[59]);
  let je;
  t[60] !== ce || t[61] !== oe
    ? ((je = (e) => {
        let t = oe?.find((t) => t.login === e.key);
        t != null && ce(t);
      }),
      (t[60] = ce),
      (t[61] = oe),
      (t[62] = je))
    : (je = t[62]);
  let Me;
  t[63] !== Te || t[64] !== m || t[65] !== L || t[66] !== S || t[67] !== ke || t[68] !== je
    ? ((Me = (0, X.jsx)(Te, {
        isActive: L,
        listboxId: m,
        query: S,
        selectOnTab: !0,
        sections: ke,
        onHighlight: Ae,
        onSelect: je,
      })),
      (t[63] = Te),
      (t[64] = m),
      (t[65] = L),
      (t[66] = S),
      (t[67] = ke),
      (t[68] = je),
      (t[69] = Me))
    : (Me = t[69]);
  let Ne;
  t[70] !== Se || t[71] !== Ce || t[72] !== we || t[73] !== Me
    ? ((Ne = (0, X.jsx)(Se, {
        align: `start`,
        className: `z-50 w-[var(--radix-popover-trigger-width)]`,
        side: `top`,
        sideOffset: 8,
        unstyled: !0,
        onCloseAutoFocus: Ce,
        onOpenAutoFocus: we,
        children: Me,
      })),
      (t[70] = Se),
      (t[71] = Ce),
      (t[72] = we),
      (t[73] = Me),
      (t[74] = Ne))
    : (Ne = t[74]);
  let Pe;
  return (
    t[75] !== fe || t[76] !== L || t[77] !== xe || t[78] !== Ne
      ? ((Pe = (0, X.jsxs)(fe, { open: L, children: [xe, Ne] })),
        (t[75] = fe),
        (t[76] = L),
        (t[77] = xe),
        (t[78] = Ne),
        (t[79] = Pe))
      : (Pe = t[79]),
    Pe
  );
}
function Lt(e) {
  return e.preventDefault();
}
function Rt(e) {
  return e.preventDefault();
}
function zt(e) {
  let { login: t } = e;
  return t.toLowerCase();
}
function Bt(e, t) {
  if (!t) {
    e.style.removeProperty(`height`);
    return;
  }
  ((e.style.height = `auto`), (e.style.height = `${Math.min(e.scrollHeight, Gt)}px`));
}
function Vt(e) {
  let { selectionEnd: t, selectionStart: n, value: r } = e;
  if (n !== t) return null;
  let i = /(^|[^A-Za-z0-9_-])@([A-Za-z0-9_-]*)$/.exec(r.slice(0, n));
  if (i == null) return null;
  let a = i[2] ?? ``,
    o = /^[A-Za-z0-9_-]*/.exec(r.slice(n))?.[0];
  return { from: n - a.length - 1, query: a, to: n + (o?.length ?? 0) };
}
var Ht,
  Ut,
  Wt,
  X,
  Gt,
  Kt,
  qt = e(() => {
    ((Ht = V()),
      (Ut = t(b(), 1)),
      y(),
      (Wt = t(i(), 1)),
      S(),
      je(),
      ge(),
      me(),
      C(),
      l(),
      Ft(),
      (X = I()),
      (Gt = 192),
      (Kt = 500));
  });
function Jt(e) {
  let t = (0, Yt.c)(80),
    {
      authorAvatar: n,
      autoFocus: r,
      initialBody: i,
      isEditing: a,
      isPending: o,
      isReply: s,
      request: c,
      replyToAuthorLogin: l,
      source: u,
      onDirtyChange: d,
      onCancel: f,
      onSubmit: p,
    } = e,
    h = r !== void 0 && r,
    g = i === void 0 ? `` : i,
    _ = a !== void 0 && a,
    v = s !== void 0 && s,
    y = ee(),
    [b, x] = (0, Xt.useState)(g),
    [S, C] = (0, Xt.useState)(null),
    w;
  t[0] === b ? (w = t[1]) : ((w = b.trim()), (t[0] = b), (t[1] = w));
  let T = w,
    E,
    D;
  (t[2] !== b.length || t[3] !== d
    ? ((E = () => (
        d?.(b.length > 0),
        () => {
          d?.(!1);
        }
      )),
      (D = [b.length, d]),
      (t[2] = b.length),
      (t[3] = d),
      (t[4] = E),
      (t[5] = D))
    : ((E = t[4]), (D = t[5])),
    (0, Xt.useEffect)(E, D));
  let O, k;
  if (_) {
    let e;
    (t[6] === y
      ? (e = t[7])
      : ((e = y.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.submit`,
          defaultMessage: `Save changes`,
          description: `Accessible label for saving an edited pull request comment`,
        })),
        (t[6] = y),
        (t[7] = e)),
      (O = e));
    let n;
    (t[8] === y
      ? (n = t[9])
      : ((n = y.formatMessage({
          id: `pullRequestsPage.detail.commentEditInput.ariaLabel`,
          defaultMessage: `Edit pull request comment`,
          description: `Accessible label for editing a pull request comment`,
        })),
        (t[8] = y),
        (t[9] = n)),
      (k = n));
  } else if (v) {
    let e;
    (t[10] === y
      ? (e = t[11])
      : ((e = y.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.submit`,
          defaultMessage: `Post reply`,
          description: `Accessible label for posting a pull request activity reply`,
        })),
        (t[10] = y),
        (t[11] = e)),
      (O = e));
    let n;
    (t[12] === y
      ? (n = t[13])
      : ((n = y.formatMessage({
          id: `pullRequestsPage.detail.commentReplyInput.ariaLabel`,
          defaultMessage: `Pull request reply`,
          description: `Accessible label for the pull request detail reply composer`,
        })),
        (t[12] = y),
        (t[13] = n)),
      (k = n));
  } else {
    let e;
    (t[14] === y
      ? (e = t[15])
      : ((e = y.formatMessage({
          id: `pullRequestsPage.detail.commentInput.submit`,
          defaultMessage: `Post comment`,
          description: `Accessible label for posting a pull request detail comment`,
        })),
        (t[14] = y),
        (t[15] = e)),
      (O = e));
    let n;
    (t[16] === y
      ? (n = t[17])
      : ((n = y.formatMessage({
          id: `pullRequestsPage.detail.commentInput.ariaLabel`,
          defaultMessage: `Pull request comment`,
          description: `Accessible label for the pull request detail comment composer`,
        })),
        (t[16] = y),
        (t[17] = n)),
      (k = n));
  }
  let A;
  t[18] !== y || t[19] !== v || t[20] !== l
    ? ((A = v
        ? y.formatMessage(
            {
              id: `pullRequestsPage.detail.commentReplyInput.placeholder`,
              defaultMessage: `Reply to {author}`,
              description: `Placeholder shown when replying to a pull request activity comment`,
            },
            {
              author:
                l ??
                y.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.unknownAuthor`,
                  defaultMessage: `comment`,
                  description: `Fallback reply target label for the pull request activity reply composer`,
                }),
            },
          )
        : y.formatMessage({
            id: `pullRequestsPage.detail.commentInput.placeholder`,
            defaultMessage: `Leave a comment`,
            description: `Placeholder shown in the pull request detail comment composer`,
          })),
      (t[18] = y),
      (t[19] = v),
      (t[20] = l),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        (x(e), C(null));
      }),
      (t[22] = j))
    : (j = t[22]);
  let M;
  t[23] !== h ||
  t[24] !== b ||
  t[25] !== k ||
  t[26] !== o ||
  t[27] !== c ||
  t[28] !== u ||
  t[29] !== A
    ? ((M = (0, Z.jsx)(It, {
        ariaLabel: k,
        autoFocus: h,
        body: b,
        disabled: o,
        placeholder: A,
        request: c,
        source: u,
        onBodyChange: j,
      })),
      (t[23] = h),
      (t[24] = b),
      (t[25] = k),
      (t[26] = o),
      (t[27] = c),
      (t[28] = u),
      (t[29] = A),
      (t[30] = M))
    : (M = t[30]);
  let te = M,
    N;
  t[31] !== y || t[32] !== _ || t[33] !== o || t[34] !== f
    ? ((N =
        f == null
          ? null
          : (0, Z.jsx)(m, {
              delayDuration: 250,
              tooltipContent: _
                ? y.formatMessage({
                    id: `pullRequestsPage.detail.commentEditInput.cancelTooltip`,
                    defaultMessage: `Cancel editing`,
                    description: `Tooltip for closing a pull request comment editor`,
                  })
                : y.formatMessage({
                    id: `pullRequestsPage.detail.commentReplyInput.cancelTooltip`,
                    defaultMessage: `Cancel reply`,
                    description: `Tooltip for closing a pull request activity reply composer`,
                  }),
              children: (0, Z.jsx)(z, {
                "aria-label": y.formatMessage({
                  id: `pullRequestsPage.detail.commentReplyInput.cancel`,
                  defaultMessage: `Cancel`,
                  description: `Button label for closing a pull request activity reply composer`,
                }),
                color: `ghost`,
                disabled: o,
                size: `composerSm`,
                uniform: !0,
                onClick: f,
                children: (0, Z.jsx)(F, { "aria-hidden": !1, asset: ve }),
              }),
            })),
      (t[31] = y),
      (t[32] = _),
      (t[33] = o),
      (t[34] = f),
      (t[35] = N))
    : (N = t[35]);
  let ne = T.length === 0,
    re;
  t[36] === o
    ? (re = t[37])
    : ((re = o ? null : (0, Z.jsx)(F, { "aria-hidden": !1, asset: Oe })),
      (t[36] = o),
      (t[37] = re));
  let P;
  t[38] !== o || t[39] !== O || t[40] !== ne || t[41] !== re
    ? ((P = (0, Z.jsx)(z, {
        "aria-label": O,
        color: `primary`,
        disabled: ne,
        loading: o,
        size: `composerSm`,
        type: `submit`,
        uniform: !0,
        children: re,
      })),
      (t[38] = o),
      (t[39] = O),
      (t[40] = ne),
      (t[41] = re),
      (t[42] = P))
    : (P = t[42]);
  let ie;
  t[43] !== O || t[44] !== P
    ? ((ie = (0, Z.jsx)(m, { delayDuration: 250, tooltipContent: O, children: P })),
      (t[43] = O),
      (t[44] = P),
      (t[45] = ie))
    : (ie = t[45]);
  let ae;
  t[46] !== N || t[47] !== ie
    ? ((ae = (0, Z.jsxs)(Z.Fragment, { children: [N, ie] })),
      (t[46] = N),
      (t[47] = ie),
      (t[48] = ae))
    : (ae = t[48]);
  let oe = ae,
    I = _ || v ? `inline` : `default`,
    se;
  t[49] === te
    ? (se = t[50])
    : ((se = (0, Z.jsx)(J.Input, { layout: `multiline`, children: te })),
      (t[49] = te),
      (t[50] = se));
  let L;
  t[51] === n
    ? (L = t[52])
    : ((L = (0, Z.jsx)(J.FooterInlineControls, { gap: `normal`, children: n })),
      (t[51] = n),
      (t[52] = L));
  let R;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Z.jsx)(J.FooterAction, { children: null })), (t[53] = R))
    : (R = t[53]);
  let B;
  t[54] === oe
    ? (B = t[55])
    : ((B = (0, Z.jsx)(J.FooterControls, {
        children: (0, Z.jsx)(J.FooterActions, { children: oe }),
      })),
      (t[54] = oe),
      (t[55] = B));
  let V;
  t[56] !== L || t[57] !== B
    ? ((V = (0, Z.jsxs)(J.Footer, { children: [L, R, B] })), (t[56] = L), (t[57] = B), (t[58] = V))
    : (V = t[58]);
  let H;
  t[59] !== se || t[60] !== V
    ? ((H = (0, Z.jsxs)(J.Body, { children: [se, V] })), (t[59] = se), (t[60] = V), (t[61] = H))
    : (H = t[61]);
  let U;
  t[62] !== I || t[63] !== H
    ? ((U = (0, Z.jsx)(J, {
        layout: `multiline`,
        radiusVariant: `compact`,
        surfaceVariant: I,
        children: H,
      })),
      (t[62] = I),
      (t[63] = H),
      (t[64] = U))
    : (U = t[64]);
  let ce = U,
    W;
  t[65] !== b || t[66] !== y || t[67] !== _ || t[68] !== o || t[69] !== p || t[70] !== T
    ? ((W = async function (e) {
        if ((e.preventDefault(), !(T.length === 0 || o))) {
          C(null);
          try {
            (await p(_ ? b : T), x(``));
          } catch (e) {
            let t = e;
            C(
              t instanceof Error
                ? t.message
                : y.formatMessage({
                    id: `pullRequestsPage.detail.commentInput.error`,
                    defaultMessage: `GitHub could not post this comment`,
                    description: `Fallback error for a pull request comment`,
                  }),
            );
          }
        }
      }),
      (t[65] = b),
      (t[66] = y),
      (t[67] = _),
      (t[68] = o),
      (t[69] = p),
      (t[70] = T),
      (t[71] = W))
    : (W = t[71]);
  let le = W,
    ue;
  t[72] === le
    ? (ue = t[73])
    : ((ue = (e) => {
        le(e);
      }),
      (t[72] = le),
      (t[73] = ue));
  let G;
  t[74] === S
    ? (G = t[75])
    : ((G =
        S == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `px-1 text-sm text-chart-red`,
              role: `alert`,
              children: S,
            })),
      (t[74] = S),
      (t[75] = G));
  let de;
  return (
    t[76] !== ce || t[77] !== ue || t[78] !== G
      ? ((de = (0, Z.jsxs)(`form`, {
          className: `flex w-full flex-col gap-2`,
          onSubmit: ue,
          children: [ce, G],
        })),
        (t[76] = ce),
        (t[77] = ue),
        (t[78] = G),
        (t[79] = de))
      : (de = t[79]),
    de
  );
}
var Yt,
  Xt,
  Z,
  Zt = e(() => {
    ((Yt = V()), Ae(), te(), (Xt = t(i(), 1)), S(), Ee(), r(), ae(), f(), qt(), (Z = I()));
  });
function Qt(e) {
  let t = (0, tn.c)(42),
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
  let h = _(r == null ? Ve : null, m),
    g = r?.nodeId,
    v;
  t[3] !== n || t[4] !== a
    ? ((v = { account: n, pullRequest: a }), (t[3] = n), (t[4] = a), (t[5] = v))
    : (v = t[5]);
  let y;
  t[6] !== g || t[7] !== v
    ? ((y = { nodeId: g, request: v }), (t[6] = g), (t[7] = v), (t[8] = y))
    : (y = t[8]);
  let ee = _(Be, y),
    [b, x] = (0, nn.useState)(null),
    S;
  t[9] !== n.hostname || t[10] !== n.login
    ? ((S = Le(n.login, 48, n.hostname)), (t[9] = n.hostname), (t[10] = n.login), (t[11] = S))
    : (S = t[11]);
  let C = S,
    w = r == null && (s != null || i != null),
    T;
  t[12] !== n.login || t[13] !== C || t[14] !== b
    ? ((T = (0, Q.jsx)(Fe, {
        children:
          C == null || C === b
            ? (0, Q.jsx)(`span`, {
                className: `flex size-6 items-center justify-center rounded-full border border-border/20 bg-surface-secondary/60 text-xs font-semibold text-default`,
                children: n.login.slice(0, 1).toUpperCase(),
              })
            : (0, Q.jsx)(`img`, {
                alt: n.login,
                className: `size-6 rounded-full object-cover`,
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
    O = h ?? ee,
    k;
  t[16] !== n || t[17] !== a
    ? ((k = { account: n, pullRequest: a }), (t[16] = n), (t[17] = a), (t[18] = k))
    : (k = t[18]);
  let A;
  t[19] !== n ||
  t[20] !== ee ||
  t[21] !== r ||
  t[22] !== h ||
  t[23] !== f ||
  t[24] !== a ||
  t[25] !== s ||
  t[26] !== p ||
  t[27] !== l
    ? ((A = async (e) => {
        if (r != null) {
          (await ee.mutateAsync({
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
      (t[20] = ee),
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
      ? ((j = (0, Q.jsx)(Jt, {
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
function $t(e) {
  let t = (0, tn.c)(11),
    {
      account: n,
      comment: r,
      initialBody: i,
      onDirtyChange: a,
      onOpenChange: s,
      pullRequest: c,
      source: l,
      workspaceRequest: u,
    } = e,
    [d, f] = (0, nn.useState)(!1);
  if (r.reviewThreadId == null && i == null) return null;
  let p;
  return (
    t[0] !== n ||
    t[1] !== r.authorLogin ||
    t[2] !== r.reviewThreadId ||
    t[3] !== i ||
    t[4] !== d ||
    t[5] !== a ||
    t[6] !== s ||
    t[7] !== c ||
    t[8] !== l ||
    t[9] !== u
      ? ((p =
          d || i != null
            ? (0, Q.jsx)(Qt, {
                account: n,
                initialBody: i,
                pullRequest: c,
                replyToAuthorLogin: r.authorLogin,
                replyToReviewThreadId: r.reviewThreadId,
                source: l,
                workspaceRequest: u,
                onDirtyChange: a,
                onCancel: () => {
                  (a?.(!1), s?.(!1), f(!1));
                },
                onSuccess: () => {
                  (a?.(!1), s?.(!1), f(!1));
                },
              })
            : (0, Q.jsxs)(z, {
                color: `ghost`,
                size: `default`,
                onClick: () => {
                  (s?.(!0), f(!0));
                },
                children: [
                  (0, Q.jsx)(Ne, { "aria-hidden": !0, className: `icon-sm` }),
                  (0, Q.jsx)(`span`, {
                    className: `ps-1`,
                    children: (0, Q.jsx)(o, {
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
        (t[4] = d),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
function en(e) {
  let t = (0, tn.c)(24),
    {
      account: n,
      action: r,
      onResolved: i,
      pullRequest: a,
      reviewThreadId: s,
      source: c,
      workspaceRequest: l,
    } = e,
    u;
  t[0] !== n || t[1] !== a
    ? ((u = { account: n, pullRequest: a }), (t[0] = n), (t[1] = a), (t[2] = u))
    : (u = t[2]);
  let d = _(He, u),
    f = d.isPending && d.variables?.reviewThreadId === s,
    p;
  t[3] !== r || t[4] !== d || t[5] !== i || t[6] !== s || t[7] !== c || t[8] !== l
    ? ((p = () => {
        d.mutate({ action: r, onResolved: i, reviewThreadId: s, source: c, workspaceRequest: l });
      }),
      (t[3] = r),
      (t[4] = d),
      (t[5] = i),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === r
    ? (m = t[11])
    : ((m =
        r === `resolve`
          ? (0, Q.jsx)(o, {
              id: `pullRequestDetail.comment.resolve`,
              defaultMessage: `Resolve`,
              description: `Button that resolves a pull request code review thread`,
            })
          : (0, Q.jsx)(o, {
              id: `pullRequestDetail.comment.unresolve`,
              defaultMessage: `Unresolve`,
              description: `Button that reopens a resolved pull request code review thread`,
            })),
      (t[10] = r),
      (t[11] = m));
  let h;
  t[12] !== d.isPending || t[13] !== f || t[14] !== p || t[15] !== m
    ? ((h = (0, Q.jsx)(z, {
        color: `ghost`,
        disabled: d.isPending,
        loading: f,
        size: `default`,
        onClick: p,
        children: m,
      })),
      (t[12] = d.isPending),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== d.error || t[18] !== d.variables?.reviewThreadId || t[19] !== s
    ? ((g =
        d.error == null || d.variables?.reviewThreadId !== s
          ? null
          : (0, Q.jsx)(`div`, {
              className: `text-sm text-danger`,
              role: `alert`,
              children:
                d.error instanceof Error
                  ? (0, Q.jsx)(o, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateError`,
                      defaultMessage: `Could not update this review thread: {error}`,
                      description: `Error displayed when resolving or reopening a pull request review thread fails`,
                      values: { error: d.error.message },
                    })
                  : (0, Q.jsx)(o, {
                      id: `pullRequestDetail.comment.reviewThreadUpdateUnknownError`,
                      defaultMessage: `Could not update this review thread`,
                      description: `Fallback error displayed when resolving or reopening a pull request review thread fails without an error message`,
                    }),
            })),
      (t[17] = d.error),
      (t[18] = d.variables?.reviewThreadId),
      (t[19] = s),
      (t[20] = g))
    : (g = t[20]);
  let v;
  return (
    t[21] !== h || t[22] !== g
      ? ((v = (0, Q.jsxs)(`div`, {
          className: `flex flex-col items-start gap-1`,
          children: [h, g],
        })),
        (t[21] = h),
        (t[22] = g),
        (t[23] = v))
      : (v = t[23]),
    v
  );
}
var tn,
  nn,
  Q,
  rn = e(() => {
    ((tn = V()), y(), (nn = t(i(), 1)), S(), r(), Me(), ze(), Pe(), Ue(), Zt(), (Q = I()));
  });
function an(e) {
  let t = (0, on.c)(39),
    {
      account: r,
      commentType: i,
      nodeId: a,
      pullRequest: s,
      source: c,
      workspaceRequest: l,
      onClose: u,
    } = e,
    d = n(N),
    f = ee(),
    m;
  t[0] !== r || t[1] !== s
    ? ((m = { account: r, pullRequest: s }), (t[0] = r), (t[1] = s), (t[2] = m))
    : (m = t[2]);
  let h;
  t[3] !== a || t[4] !== m
    ? ((h = { nodeId: a, request: m }), (t[3] = a), (t[4] = m), (t[5] = h))
    : (h = t[5]);
  let g = _(Be, h),
    v;
  t[6] !== g.isPending || t[7] !== u
    ? ((v = (e) => {
        !e && !g.isPending && u();
      }),
      (t[6] = g.isPending),
      (t[7] = u),
      (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== r ||
  t[10] !== i ||
  t[11] !== f ||
  t[12] !== g ||
  t[13] !== a ||
  t[14] !== u ||
  t[15] !== s ||
  t[16] !== d ||
  t[17] !== c ||
  t[18] !== l
    ? ((y = (e) => {
        (e.preventDefault(),
          !g.isPending &&
            g
              .mutateAsync({
                account: r,
                action: `delete`,
                commentType: i,
                nodeId: a,
                pullRequest: s,
                source: c,
                workspaceRequest: l,
              })
              .then(u)
              .catch((e) => {
                d.get(R).danger(
                  e.message ||
                    f.formatMessage({
                      id: `pullRequestDetail.comment.deleteError`,
                      defaultMessage: `GitHub could not delete this comment`,
                      description: `Fallback error displayed when deleting a pull request comment fails`,
                    }),
                );
              }));
      }),
      (t[9] = r),
      (t[10] = i),
      (t[11] = f),
      (t[12] = g),
      (t[13] = a),
      (t[14] = u),
      (t[15] = s),
      (t[16] = d),
      (t[17] = c),
      (t[18] = l),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(fe, {
        children: (0, $.jsx)(o, {
          id: `pullRequestDetail.comment.deleteTitle`,
          defaultMessage: `Delete comment`,
          description: `Title for the pull request comment deletion confirmation`,
        }),
      })),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, $.jsx)(j, {
        children: (0, $.jsx)(D, {
          title: b,
          subtitle: (0, $.jsx)(W, {
            children: (0, $.jsx)(o, {
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
    ? ((S = (0, $.jsx)(o, {
        id: `pullRequestDetail.comment.deleteCancel`,
        defaultMessage: `Cancel`,
        description: `Button to cancel deleting a pull request comment`,
      })),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== g.isPending || t[24] !== u
    ? ((C = (0, $.jsx)(z, { color: `secondary`, disabled: g.isPending, onClick: u, children: S })),
      (t[23] = g.isPending),
      (t[24] = u),
      (t[25] = C))
    : (C = t[25]);
  let w;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(o, {
        id: `pullRequestDetail.comment.deleteConfirm`,
        defaultMessage: `Delete comment`,
        description: `Button to permanently delete a pull request comment`,
      })),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === g.isPending
    ? (T = t[28])
    : ((T = (0, $.jsx)(z, {
        color: `dangerSolid`,
        loading: g.isPending,
        type: `submit`,
        children: w,
      })),
      (t[27] = g.isPending),
      (t[28] = T));
  let E;
  t[29] !== T || t[30] !== C
    ? ((E = (0, $.jsx)(j, { children: (0, $.jsxs)(k, { children: [C, T] }) })),
      (t[29] = T),
      (t[30] = C),
      (t[31] = E))
    : (E = t[31]);
  let O;
  t[32] !== g.isPending || t[33] !== E || t[34] !== y
    ? ((O = (0, $.jsxs)(p, {
        as: `form`,
        "aria-busy": g.isPending,
        onSubmit: y,
        children: [x, E],
      })),
      (t[32] = g.isPending),
      (t[33] = E),
      (t[34] = y),
      (t[35] = O))
    : (O = t[35]);
  let A;
  return (
    t[36] !== O || t[37] !== v
      ? ((A = (0, $.jsx)(he, { open: !0, showDialogClose: !1, onOpenChange: v, children: O })),
        (t[36] = O),
        (t[37] = v),
        (t[38] = A))
      : (A = t[38]),
    A
  );
}
var on,
  $,
  sn = e(() => {
    ((on = V()), y(), S(), r(), se(), ie(), B(), Ue(), le(), ($ = I()));
  });
function cn(e) {
  let t = (0, un.c)(101),
    {
      account: r,
      comment: i,
      commentAttachment: a,
      inline: s,
      isFixActive: c,
      metadataAccessory: l,
      onReviewThreadResolved: d,
      pullRequest: f,
      source: p,
      workspaceRequest: m,
    } = e,
    h = s !== void 0 && s,
    g = c !== void 0 && c,
    _ = n(oe),
    v = u(Je),
    [y, ee] = (0, fn.useState)(!1),
    [b, S] = (0, fn.useState)(null),
    [C, w] = (0, fn.useState)(null),
    [T, E] = (0, fn.useState)(!1),
    [D, O] = (0, fn.useState)(null),
    k;
  t[0] !== i.nodeId || t[1] !== i.replies || t[2] !== C
    ? ((k = C != null && (C === i.nodeId || !!i.replies?.some((e) => e.nodeId === C))),
      (t[0] = i.nodeId),
      (t[1] = i.replies),
      (t[2] = C),
      (t[3] = k))
    : (k = t[3]);
  let A = k,
    j = v && r != null && f != null && !g && !A,
    M = j && !T,
    te = i.path ?? a?.position.path ?? null,
    N;
  t[4] === te
    ? (N = t[5])
    : ((N = te == null ? null : dn.default.posix.basename(te)), (t[4] = te), (t[5] = N));
  let ne = N,
    re;
  t[6] !== i || t[7] !== a ? ((re = qe(i, a)), (t[6] = i), (t[7] = a), (t[8] = re)) : (re = t[8]);
  let P = re,
    ie;
  t[9] !== i.originalLine || t[10] !== i.originalStartLine || t[11] !== P
    ? ((ie =
        P == null || i.originalLine == null
          ? P
          : { ...P, line: i.originalLine, start_line: i.originalStartLine ?? i.originalLine }),
      (t[9] = i.originalLine),
      (t[10] = i.originalStartLine),
      (t[11] = P),
      (t[12] = ie))
    : (ie = t[12]);
  let ae = ie,
    F;
  t[13] !== i.authorAvatarUrl ||
  t[14] !== i.authorLogin ||
  t[15] !== i.reviewThreadId ||
  t[16] !== a
    ? ((F =
        a == null
          ? void 0
          : {
              ...a,
              authorAvatarUrl: i.authorAvatarUrl,
              authorLogin: i.authorLogin,
              reviewThreadId: i.reviewThreadId,
            }),
      (t[13] = i.authorAvatarUrl),
      (t[14] = i.authorLogin),
      (t[15] = i.reviewThreadId),
      (t[16] = a),
      (t[17] = F))
    : (F = t[17]);
  let I = i.isResolved === !0 || (i.authorType != null && i.authorType !== `User`),
    se = h ? null : i.diffHunk,
    L = h ? null : ne,
    R;
  t[18] === i.isResolved
    ? (R = t[19])
    : ((R =
        i.isResolved === !0
          ? (0, pn.jsx)(o, {
              id: `pullRequestDetail.comment.resolved`,
              defaultMessage: `Resolved`,
              description: `Status shown on a resolved pull request code review thread`,
            })
          : void 0),
      (t[18] = i.isResolved),
      (t[19] = R));
  let z;
  t[20] !== r ||
  t[21] !== M ||
  t[22] !== j ||
  t[23] !== v ||
  t[24] !== i ||
  t[25] !== T ||
  t[26] !== l ||
  t[27] !== d ||
  t[28] !== f ||
  t[29] !== D ||
  t[30] !== p ||
  t[31] !== m
    ? ((z =
        l != null || (v && r != null && f != null && (i.reviewThreadId != null || D != null))
          ? (0, pn.jsxs)(`div`, {
              className: x(`flex w-full items-start gap-2`, T ? `ps-6.5` : `ps-8.5`),
              children: [
                (0, pn.jsxs)(`div`, {
                  className: x(`flex min-w-0 flex-wrap items-start gap-2`, T && `flex-1`),
                  children: [
                    T ? null : l,
                    j
                      ? (0, pn.jsx)($t, {
                          account: r,
                          comment: i,
                          initialBody: D ?? void 0,
                          onDirtyChange: ee,
                          onOpenChange: (e) => {
                            (E(e), e || O(null));
                          },
                          pullRequest: f,
                          source: p,
                          workspaceRequest: m,
                        })
                      : null,
                  ],
                }),
                M &&
                i.reviewThreadId != null &&
                (i.isResolved === !0 ? i.viewerCanUnresolve === !0 : i.viewerCanResolve === !0)
                  ? (0, pn.jsx)(en, {
                      account: r,
                      action: i.isResolved === !0 ? `unresolve` : `resolve`,
                      pullRequest: f,
                      reviewThreadId: i.reviewThreadId,
                      source: p,
                      workspaceRequest: m,
                      onResolved: d,
                    })
                  : null,
              ],
            })
          : void 0),
      (t[20] = r),
      (t[21] = M),
      (t[22] = j),
      (t[23] = v),
      (t[24] = i),
      (t[25] = T),
      (t[26] = l),
      (t[27] = d),
      (t[28] = f),
      (t[29] = D),
      (t[30] = p),
      (t[31] = m),
      (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== M || t[34] !== i.nodeId || t[35] !== i.type || t[36] !== i.viewerCanDelete
    ? ((B =
        M && i.type !== `review` && i.nodeId != null && i.viewerCanDelete === !0
          ? () => S(i.nodeId ?? null)
          : void 0),
      (t[33] = M),
      (t[34] = i.nodeId),
      (t[35] = i.type),
      (t[36] = i.viewerCanDelete),
      (t[37] = B))
    : (B = t[37]);
  let V;
  t[38] === M
    ? (V = t[39])
    : ((V = M ? (e) => S(e.nodeId ?? null) : void 0), (t[38] = M), (t[39] = V));
  let H;
  t[40] !== M || t[41] !== i.nodeId || t[42] !== i.viewerCanUpdate
    ? ((H = M && i.nodeId != null && i.viewerCanUpdate === !0 ? () => w(i.nodeId ?? null) : void 0),
      (t[40] = M),
      (t[41] = i.nodeId),
      (t[42] = i.viewerCanUpdate),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] === M
    ? (U = t[45])
    : ((U = M ? (e) => w(e.nodeId ?? null) : void 0), (t[44] = M), (t[45] = U));
  let ce;
  t[46] !== r || t[47] !== h || t[48] !== P || t[49] !== f || t[50] !== _ || t[51] !== p
    ? ((ce =
        h || r == null || f == null || P == null || p === `pull_request_board`
          ? void 0
          : () => {
              (et(_, `code`), Ge(_, { account: r, pullRequest: f }, P));
            }),
      (t[46] = r),
      (t[47] = h),
      (t[48] = P),
      (t[49] = f),
      (t[50] = _),
      (t[51] = p),
      (t[52] = ce))
    : (ce = t[52]);
  let W;
  t[53] !== M || t[54] !== i.body
    ? ((W = M
        ? () => {
            (E(!0),
              O(
                `${i.body
                  .split(
                    `
`,
                  )
                  .map(ln).join(`
`)}\n\n`,
              ));
          }
        : void 0),
      (t[53] = M),
      (t[54] = i.body),
      (t[55] = W))
    : (W = t[55]);
  let le = y || A,
    ue = !h && P != null,
    G = h ? `inline` : `default`,
    de = i.url ?? void 0,
    K;
  t[56] !== r ||
  t[57] !== i.nodeId ||
  t[58] !== i.rawBody ||
  t[59] !== i.type ||
  t[60] !== C ||
  t[61] !== f ||
  t[62] !== p ||
  t[63] !== m
    ? ((K = (e, t, n) => {
        let a = t ? n?.nodeId : i.nodeId;
        return C != null && a === C && r != null && f != null
          ? (0, pn.jsx)(`div`, {
              className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
              children: (0, pn.jsx)(Qt, {
                account: r,
                editTarget: { commentType: t ? `review_comment` : i.type, nodeId: a },
                initialBody: (t ? n?.rawBody : i.rawBody) ?? e,
                pullRequest: f,
                source: p,
                workspaceRequest: m,
                onCancel: () => w(null),
                onSuccess: () => w(null),
              }),
            })
          : (0, pn.jsx)(wt, {
              account: r,
              allowBasicHtml: !0,
              className: x(
                `[&_details]:mt-3 [&_details]:rounded-[14px] [&_details]:border [&_details]:border-border/16 [&_details]:bg-surface-secondary/40 [&_details]:px-3.5 [&_details]:py-3 [&_summary]:cursor-interaction [&_summary]:font-medium [&_summary]:text-default`,
                !t && `ps-11.5 pe-3 pt-2 pb-2.5`,
              ),
              cwd: null,
              children: e,
            });
      }),
      (t[56] = r),
      (t[57] = i.nodeId),
      (t[58] = i.rawBody),
      (t[59] = i.type),
      (t[60] = C),
      (t[61] = f),
      (t[62] = p),
      (t[63] = m),
      (t[64] = K))
    : (K = t[64]);
  let fe;
  t[65] !== i.authorAvatarUrl ||
  t[66] !== i.authorLogin ||
  t[67] !== i.body ||
  t[68] !== i.createdAt ||
  t[69] !== i.replies ||
  t[70] !== ae ||
  t[71] !== P ||
  t[72] !== L ||
  t[73] !== R ||
  t[74] !== z ||
  t[75] !== B ||
  t[76] !== V ||
  t[77] !== H ||
  t[78] !== U ||
  t[79] !== ce ||
  t[80] !== W ||
  t[81] !== le ||
  t[82] !== ue ||
  t[83] !== G ||
  t[84] !== de ||
  t[85] !== K ||
  t[86] !== F ||
  t[87] !== I ||
  t[88] !== se
    ? ((fe = (0, pn.jsx)(Ie, {
        authorAvatarUrl: i.authorAvatarUrl,
        authorLogin: i.authorLogin,
        body: i.body,
        comment: F,
        createdAt: i.createdAt,
        defaultCollapsed: I,
        diffHunk: se,
        diffHunkPosition: ae,
        fileName: L,
        headerAccessory: R,
        metadataAccessory: z,
        onDelete: B,
        onDeleteReply: V,
        onEdit: H,
        onEditReply: U,
        onOpenFile: ce,
        onQuoteReply: W,
        preventCollapse: le,
        position: P,
        replies: i.replies,
        showDiffLocation: ue,
        surfaceVariant: G,
        url: de,
        renderBody: K,
      })),
      (t[65] = i.authorAvatarUrl),
      (t[66] = i.authorLogin),
      (t[67] = i.body),
      (t[68] = i.createdAt),
      (t[69] = i.replies),
      (t[70] = ae),
      (t[71] = P),
      (t[72] = L),
      (t[73] = R),
      (t[74] = z),
      (t[75] = B),
      (t[76] = V),
      (t[77] = H),
      (t[78] = U),
      (t[79] = ce),
      (t[80] = W),
      (t[81] = le),
      (t[82] = ue),
      (t[83] = G),
      (t[84] = de),
      (t[85] = K),
      (t[86] = F),
      (t[87] = I),
      (t[88] = se),
      (t[89] = fe))
    : (fe = t[89]);
  let q = fe;
  if (b == null || r == null || f == null) return q;
  let pe = b === i.nodeId && i.type === `comment` ? `comment` : `review_comment`,
    me;
  t[90] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = () => S(null)), (t[90] = me))
    : (me = t[90]);
  let he;
  t[91] !== r || t[92] !== b || t[93] !== f || t[94] !== p || t[95] !== pe || t[96] !== m
    ? ((he = (0, pn.jsx)(an, {
        account: r,
        commentType: pe,
        nodeId: b,
        pullRequest: f,
        source: p,
        workspaceRequest: m,
        onClose: me,
      })),
      (t[91] = r),
      (t[92] = b),
      (t[93] = f),
      (t[94] = p),
      (t[95] = pe),
      (t[96] = m),
      (t[97] = he))
    : (he = t[97]);
  let ge;
  return (
    t[98] !== q || t[99] !== he
      ? ((ge = (0, pn.jsxs)(pn.Fragment, { children: [q, he] })),
        (t[98] = q),
        (t[99] = he),
        (t[100] = ge))
      : (ge = t[100]),
    ge
  );
}
function ln(e) {
  return `> ${e}`;
}
var un,
  dn,
  fn,
  pn,
  mn = e(() => {
    ((un = V()),
      Se(),
      y(),
      (dn = t(O(), 1)),
      (fn = t(i(), 1)),
      S(),
      Re(),
      We(),
      ot(),
      Ke(),
      be(),
      Nt(),
      rn(),
      sn(),
      Ye(),
      (pn = I()));
  });
export {
  Xe as _,
  rn as a,
  $e as b,
  wt as c,
  tt as d,
  nt as f,
  et as g,
  at as h,
  en as i,
  Nt as l,
  it as m,
  mn as n,
  Pt as o,
  rt as p,
  Qt as r,
  Ft as s,
  cn as t,
  ot as u,
  Ze as v,
  Qe as y,
};
//# sourceMappingURL=pull-request-comment-72460362f3f8.js.map
